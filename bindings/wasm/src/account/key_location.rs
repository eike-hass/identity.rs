// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

use wasm_bindgen::prelude::*;

use identity::account::KeyLocation as KeyLocation_;

use crate::account::WasmGeneration;
use crate::did::WasmMethodType;

#[wasm_bindgen]
#[derive(Clone, Hash, PartialEq, Eq, Deserialize, Serialize)]
pub struct WasmKeyLocation(pub(crate) KeyLocation_);

#[wasm_bindgen]
impl WasmKeyLocation {
  #[wasm_bindgen]
  pub fn new(method: WasmMethodType, fragment: String, generation: WasmGeneration) -> WasmKeyLocation {
    WasmKeyLocation(KeyLocation_::new(method.into(), fragment, generation.into()))
  }
}

impl From<WasmKeyLocation> for KeyLocation_ {
  fn from(wasm_key_location: WasmKeyLocation) -> Self {
    wasm_key_location.0
  }
}

impl From<KeyLocation_> for WasmKeyLocation {
  fn from(wasm_key_location: KeyLocation_) -> Self {
    WasmKeyLocation(wasm_key_location)
  }
}