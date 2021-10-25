// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

//! cargo run --example account_manipulate

use std::path::PathBuf;

use identity::account::Account;
use identity::account::AccountStorage;
use identity::account::IdentitySetup;
use identity::account::Result;
use identity::core::Url;
use identity::did::MethodScope;
use identity::iota::IotaDID;

#[tokio::main]
async fn main() -> Result<()> {
  pretty_env_logger::init();

  // ===========================================================================
  // Create Identity - Similar to create_did example
  // ===========================================================================

  // Stronghold settings
  let stronghold_path: PathBuf = "./example-strong.hodl".into();
  let password: String = "my-password".into();

  // Create a new Account with the default configuration
  let mut account: Account = Account::builder()
    .storage(AccountStorage::Stronghold(stronghold_path, Some(password)))
    .create_identity(IdentitySetup::default())
    .await?;

  // ===========================================================================
  // Identity Manipulation
  // ===========================================================================

  // Add another Ed25519 verification method to the identity
  account
    .update_identity()
    .create_method()
    .fragment("my-next-key")
    .apply()
    .await?;

  // Associate the newly created method with additional verification relationships
  account
    .update_identity()
    .attach_method()
    .fragment("my-next-key")
    .scope(MethodScope::CapabilityDelegation)
    .scope(MethodScope::CapabilityInvocation)
    .apply()
    .await?;

  // Add a new service to the identity.
  account
    .update_identity()
    .create_service()
    .fragment("my-service-1")
    .type_("MyCustomService")
    .endpoint(Url::parse("https://example.com")?)
    .apply()
    .await?;

  // Remove the Ed25519 verification method
  account
    .update_identity()
    .delete_method()
    .fragment("my-next-key")
    .apply()
    .await?;

  // Retrieve the DID from the newly created identity.
  let iota_did: &IotaDID = account.did();

  // Prints the Identity Resolver Explorer URL.
  // The entire history can be observed on this page by clicking "Loading History".
  println!(
    "[Example] Explore the DID Document = {}/{}",
    iota_did.network()?.explorer_url().unwrap().to_string(),
    iota_did.to_string()
  );
  Ok(())
}