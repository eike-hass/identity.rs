// Copyright 2020-2022 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import { Account, WasmStorage } from '@iota/identity-wasm';
import { setTimeout } from "timers/promises";

async function storage(clientConfig) {

    const keyExistsFunction = async function (did, location) {
        console.log("enter");
        await setTimeout(1000);
        console.log("exit");
        return true;
    };

    const storage = new WasmStorage(keyExistsFunction);

    const account = new Account(storage);

    const futures = [account.call_storage(), account.call_storage()];

    const result = await Promise.all(futures);

    console.log(result)
}

export { storage };
