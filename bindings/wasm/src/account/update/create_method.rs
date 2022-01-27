// Copyright 2020-2022 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

use js_sys::Promise;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::future_to_promise;

use identity::account::MethodSecret;
use identity::account::Update;
use identity::account::UpdateError::MissingRequiredField;
use identity::did::MethodScope;
use identity::did::MethodType;

use crate::account::method_secret::WasmMethodSecret;
use crate::account::wasm_account::WasmAccount;
use crate::did::WasmMethodScope;
use crate::did::WasmMethodType;
use crate::error::wasm_error;
use crate::error::Result;
use crate::error::WasmResult;

#[wasm_bindgen(js_class = Account)]
impl WasmAccount {
  /// Adds a new verification method to the DID document.
  #[wasm_bindgen(js_name = createMethod)]
  pub fn create_method(&mut self, options: &CreateMethodOptions) -> Result<Promise> {
    let account = self.0.clone();

    let method_type: MethodType = match options.methodType() {
      Some(value) => value.0,
      None => MethodType::Ed25519VerificationKey2018,
    };

    let fragment = match options.fragment() {
      Some(value) => value,
      None => return Err(wasm_error(MissingRequiredField("fragment"))),
    };

    let method_scope: MethodScope = match options.methodScope() {
      Some(value) => value.0,
      None => MethodScope::default(),
    };

    let method_secret: Option<MethodSecret> = match options.methodSecret() {
      Some(value) => Some(value.0),
      None => None,
    };

    let promise: Promise = future_to_promise(async move {
      let update = Update::CreateMethod {
        type_: method_type,
        fragment,
        method_secret,
        scope: method_scope,
      };

      account
        .as_ref()
        .borrow_mut()
        .process_update(update)
        .await
        .wasm_result()
        .and_then(|output| JsValue::from_serde(&output).wasm_result())
    });

    Ok(promise)
  }
}

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(typescript_type = "CreateMethodOptions")]
  pub type CreateMethodOptions;

  #[wasm_bindgen(structural, getter, method)]
  pub fn fragment(this: &CreateMethodOptions) -> Option<String>;

  #[wasm_bindgen(structural, getter, method)]
  pub fn methodScope(this: &CreateMethodOptions) -> Option<WasmMethodScope>;

  #[wasm_bindgen(structural, getter, method)]
  pub fn methodType(this: &CreateMethodOptions) -> Option<WasmMethodType>;

  #[wasm_bindgen(structural, getter, method)]
  pub fn methodSecret(this: &CreateMethodOptions) -> Option<WasmMethodSecret>;
}

#[wasm_bindgen(typescript_custom_section)]
const TS_APPEND_CONTENT: &'static str = r#"
export type CreateMethodOptions = {
  fragment: string,
  methodScope?: MethodScope,
  methodType?: MethodType,
  methodSecret?: MethodSecret
};
"#;