// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

pub use self::wasm_did::WasmDID;
pub use self::wasm_did_url::WasmDIDUrl;
pub use self::wasm_diff_message::WasmDiffMessage;
pub use self::wasm_document::PromiseDocument;
pub use self::wasm_document::WasmDocument;
pub use self::wasm_verification_method::WasmVerificationMethod;

mod wasm_did;
mod wasm_did_url;
mod wasm_diff_message;
mod wasm_document;
mod wasm_verification_method;
