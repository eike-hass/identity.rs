use criterion::criterion_group;
use criterion::criterion_main;
use criterion::BenchmarkId;
use criterion::Criterion;
use criterion::SamplingMode;
use tokio::runtime::Runtime;

use identity_account::account::Account;
use identity_account::account::AccountBuilder;
use identity_account::account::AccountStorage;
use identity_account::account::AutoSave;
use identity_account::identity::IdentitySetup;

const ACTIONS: usize = 100;
const AUTOSAVE_SETTINGS: [AutoSave; 8] = [
  AutoSave::Never,
  AutoSave::Every,
  AutoSave::Batch(2),
  AutoSave::Batch(5),
  AutoSave::Batch(10),
  AutoSave::Batch(20),
  AutoSave::Batch(50),
  AutoSave::Batch(100),
];
const PASSWORD: &'static str = "my-password";
const STONGHOLD_PATH: &'static str = "./example-strong.hodl";
const SAMPLE_SIZE: usize = 100;

fn bench_autosave(c: &mut Criterion) {
  let rt = Runtime::new().unwrap();

  let mut group = c.benchmark_group(format!("Number of Actions: {}   ", ACTIONS));
  group.sample_size(SAMPLE_SIZE);
  group.sampling_mode(SamplingMode::Flat);
  for setting in AUTOSAVE_SETTINGS {
    group.bench_with_input(BenchmarkId::new(format!("{:?}", setting), ACTIONS), &ACTIONS, |b, n| {
      b.to_async(&rt)
        .iter(|| async { multiple_identity_updates(setting, *n).await })
    });
  }
  group.finish();
}

async fn multiple_identity_updates(auto_save: AutoSave, n: usize) {
  let mut builder: AccountBuilder =
    Account::builder()
      .autopublish(false)
      .autosave(auto_save)
      .storage(AccountStorage::Stronghold(
        STONGHOLD_PATH.into(),
        Some(PASSWORD.into()),
        Some(false),
      ));
  let account: Account = builder.create_identity(IdentitySetup::default()).await.unwrap();

  for _ in 0..n {
    account.increment_actions();
    account.save(false).await.unwrap();
  }
}

criterion_group!(benches, bench_autosave);
criterion_main!(benches);