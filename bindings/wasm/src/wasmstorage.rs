use std::{fmt::Debug, str::FromStr};
use wasm_bindgen::{prelude::*, JsCast};

use identity::{core::Fragment, did::MethodType, iota::IotaDID};
use wasm_bindgen::JsValue;
use wasm_bindgen_futures::future_to_promise;

// Incomplete copy of `KeyLocation`
#[wasm_bindgen]
#[derive(Clone, Hash, PartialEq, Eq, Deserialize, Serialize)]
pub struct KeyLocation {
  // Generation omitted
  method: MethodType,
  fragment: Fragment,
}

// Incomplete copy of Storage but with the same trait bounds.
#[async_trait::async_trait]
pub trait Storage: Debug + Send + Sync + 'static {
  async fn key_exists(&self, did: &IotaDID, location: &KeyLocation) -> bool;
}

#[wasm_bindgen]
#[derive(Debug, Clone)]
pub struct WasmStorage {
  key_exists_fn: js_sys::Function,
}

#[wasm_bindgen]
impl WasmStorage {
  #[wasm_bindgen(constructor)]
  pub fn new(key_exists_fn: js_sys::Function) -> WasmStorage {
    Self { key_exists_fn }
  }
}

impl WasmStorage {
  async fn key_exists_impl(&self, _did: &IotaDID, _location: &KeyLocation) -> bool {
    let (sender, receiver) = futures::channel::oneshot::channel();

    let storage = self.clone();

    wasm_bindgen_futures::spawn_local(async move {
      let result: JsValue = storage
        .key_exists_fn
        .apply(&JsValue::undefined(), &js_sys::Array::new())
        .expect("todo: error handling");

      // TODO: First, check if it's a promise with instanceof or something
      let promise = result.unchecked_into::<js_sys::Promise>();

      let result = wasm_bindgen_futures::JsFuture::from(promise).await.expect("todo");

      let result: bool = result.into_serde().expect("todo");

      sender.send(result).expect("todo");
    });

    let result: bool = receiver.await.expect("sender was dropped");

    result
  }
}

// We promise to only use WasmStorage in single-threaded contexts,
// but we need `Send` for the `Storage` impl so we mark it as such.
unsafe impl Send for WasmStorage {}
unsafe impl Sync for WasmStorage {}

#[async_trait::async_trait]
impl Storage for WasmStorage {
  async fn key_exists(&self, did: &IotaDID, location: &KeyLocation) -> bool {
    self.key_exists_impl(did, location).await
  }
}

// This exists just so we can create two Promises that use the storage
#[wasm_bindgen]
#[derive(Debug)]
pub struct Account {
  storage: WasmStorage,
}

#[wasm_bindgen]
impl Account {
  #[wasm_bindgen(constructor)]
  pub fn new(storage: WasmStorage) -> Account {
    Account { storage }
  }

  #[wasm_bindgen]
  pub fn call_storage(&self) -> js_sys::Promise {
    let storage = self.storage.clone();

    future_to_promise(async move {
      let did = IotaDID::from_str("did:iota:dev:6Hz3Yo2Qzj54L6MtS4otbETuG3GQUF5cHLqTcnsyzH96").unwrap();
      let location = KeyLocation {
        fragment: Fragment::new("key"),
        method: MethodType::Ed25519VerificationKey2018,
      };

      let result = storage.key_exists(&did, &location).await;

      Ok(JsValue::from_bool(result))
    })
  }
}
