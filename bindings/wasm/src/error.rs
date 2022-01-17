// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

use std::borrow::Cow;

use wasm_bindgen::JsValue;

use identity::account::Error as AccountError;
use identity::account::Result as AccountResult;

/// Convenience wrapper for `Result<T, JsValue>`.
///
/// All exported errors must be converted to [`JsValue`] when using wasm_bindgen.
/// See: https://rustwasm.github.io/docs/wasm-bindgen/reference/types/result.html
pub type Result<T> = core::result::Result<T, JsValue>;

/// Convert an error into an idiomatic [js_sys::Error].
pub fn wasm_error<'a, E>(error: E) -> JsValue
where
  E: Into<WasmError<'a>>,
{
  let wasm_err: WasmError = error.into();
  JsValue::from(wasm_err)
}

/// Convenience trait to simplify `result.map_err(wasm_error)` to `result.wasm_result()`
pub(crate) trait WasmResult<T> {
  fn wasm_result(self) -> Result<T>;
}

impl<'a, T, E> WasmResult<T> for core::result::Result<T, E>
where
  E: Into<WasmError<'a>>,
{
  fn wasm_result(self) -> Result<T> {
    self.map_err(wasm_error)
  }
}

/// Convenience struct to convert internal errors to [js_sys::Error]. Uses [std::borrow::Cow]
/// internally to avoid unnecessary clones.
///
/// This is a workaround for orphan rules so we can implement [core::convert::From] on errors from
/// dependencies.
#[derive(Debug, Clone)]
pub struct WasmError<'a> {
  pub name: Cow<'a, str>,
  pub message: Cow<'a, str>,
}

impl<'a> WasmError<'a> {
  pub fn new(name: Cow<'a, str>, message: Cow<'a, str>) -> Self {
    Self { name, message }
  }
}

/// Convert [WasmError] into [js_sys::Error] for idiomatic error handling.
impl From<WasmError<'_>> for js_sys::Error {
  fn from(error: WasmError<'_>) -> Self {
    let js_error = js_sys::Error::new(&error.message);
    js_error.set_name(&error.name);
    js_error
  }
}

/// Convert [WasmError] into [wasm_bindgen::JsValue].
impl From<WasmError<'_>> for JsValue {
  fn from(error: WasmError<'_>) -> Self {
    JsValue::from(js_sys::Error::from(error))
  }
}

/// Implement WasmError for each type individually rather than a trait due to Rust's orphan rules.
/// Each type must implement `Into<&'static str> + Display`. The `Into<&'static str>` trait can be
/// derived using `strum::IntoStaticStr`.
#[macro_export]
macro_rules! impl_wasm_error_from {
  ( $($t:ty),* ) => {
  $(impl From<$t> for WasmError<'_> {
    fn from(error: $t) -> Self {
      Self {
        message: Cow::Owned(error.to_string()),
        name: Cow::Borrowed(error.into()),
      }
    }
  })*
  }
}

impl_wasm_error_from!(
  // identity::comm::Error,
  identity::account::Error,
  identity::core::Error,
  identity::credential::Error,
  identity::did::Error,
  identity::did::DIDError,
  identity::iota::Error
);

impl From<serde_json::Error> for WasmError<'_> {
  fn from(error: serde_json::Error) -> Self {
    Self {
      name: Cow::Borrowed("serde_json::Error"), // the exact error code is embedded in the message
      message: Cow::Owned(error.to_string()),
    }
  }
}

impl From<identity::iota::BeeMessageError> for WasmError<'_> {
  fn from(error: identity::iota::BeeMessageError) -> Self {
    Self {
      name: Cow::Borrowed("bee_message::Error"),
      message: Cow::Owned(error.to_string()),
    }
  }
}

/// Convenience struct to convert Result<JsValue, JsValue> to an AccountResult<_, AccountError>
pub struct JsValueResult(pub(crate) Result<JsValue>);

impl From<Result<JsValue>> for JsValueResult {
  fn from(result: Result<JsValue>) -> Self {
    JsValueResult(result)
  }
}

/// Implement From<JsValueResult> to AccountResult<_, AccountError> for each type
macro_rules! impl_from_js_value {
  ( $($t:ty),* ) => {
    $(impl From<JsValueResult> for AccountResult<$t> {
      fn from(result: JsValueResult) -> Self {
        result
          .0
          .map_err(|js_value| AccountError::PromiseError(js_value.as_string().unwrap_or_default()))
          .and_then(|js_value| {
            js_value
              .into_serde()
              .map_err(|e| AccountError::InvalidJsValue(e.to_string()))
          })
      }
    })*
  };
}

impl_from_js_value!(
  identity::account::DIDLease,
  identity::crypto::PublicKey,
  identity::account::Signature,
  Option<identity::account::Generation>,
  Option<identity::account::ChainState>,
  Option<identity::account::IdentityState>,
  bool
);

impl From<JsValueResult> for AccountResult<()> {
  fn from(result: JsValueResult) -> Self {
    result
      .0
      .map_err(|js_value| AccountError::PromiseError(js_value.as_string().unwrap_or_default()))
      .and_then(|js_value| {
        js_value
          .into_serde()
          .map_err(|e| AccountError::InvalidJsValue(e.to_string()))
      })
  }
}
