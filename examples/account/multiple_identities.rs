// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

//! cargo run --example account_multiple

use std::path::PathBuf;

use identity::account::Account;
use identity::account::AccountBuilder;
use identity::account::AccountStorage;
use identity::account::IdentitySetup;
use identity::account::Result;
use identity::iota::ExplorerUrl;
use identity::iota::IotaDID;

#[tokio::main]
async fn main() -> Result<()> {
  pretty_env_logger::init();

  // Sets the location and password for the Stronghold
  //
  // Stronghold is an encrypted file that manages private keys.
  // It implements best practices for security and is the recommended way of handling private keys.
  let stronghold_path: PathBuf = "./example-strong.hodl".into();
  let password: String = "my-password".into();

  // Create an AccountBuilder to make it easier to create multiple identities.
  // Every account created from the builder will use the same storage - stronghold in this case.
  let mut builder: AccountBuilder =
    Account::builder().storage(AccountStorage::Stronghold(stronghold_path, Some(password), None));

  // The creation step generates a keypair, builds an identity
  // and publishes it to the IOTA mainnet.
  let account1: Account = builder.create_identity(IdentitySetup::default()).await?;

  // Create a second identity.
  let account2: Account = builder.create_identity(IdentitySetup::default()).await?;

  // Retrieve the did of the identity that account1 manages.
  let iota_did1: IotaDID = account1.did().to_owned();

  // Suppose we're done with account1 and drop it.
  std::mem::drop(account1);

  // Now we want to modify the iota_did1 identity - how do we do that?
  // We can load the identity from storage into an account using the builder.
  let mut account1: Account = builder.load_identity(iota_did1).await?;

  // Now we can modify the identity.
  account1
    .update_identity()
    .create_method()
    .fragment("my-key")
    .apply()
    .await?;

  // Note that there can only ever be one account that manages the same did.
  // If we attempt to create another account that manages the same did as account2, we get an error.
  assert!(matches!(
    builder.load_identity(account2.did().to_owned()).await.unwrap_err(),
    identity::account::Error::IdentityInUse
  ));

  // Prints the Identity Resolver Explorer URL.
  // The entire history can be observed on this page by clicking "Loading History".
  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();
  println!(
    "[Example] Explore the DID Document = {}",
    explorer.resolver_url(account1.did())?
  );

  Ok(())
}