# Changelog

## [v0.7.0-alpha.1](https://github.com/eike-hass/identity.rs/tree/v0.7.0-alpha.1) (2022-09-12)

[Full Changelog](https://github.com/eike-hass/identity.rs/compare/v0.6.0...v0.7.0-alpha.1)

## [v0.6.0](https://github.com/eike-hass/identity.rs/tree/v0.6.0) (2022-06-15)

[Full Changelog](https://github.com/eike-hass/identity.rs/compare/v0.5.0...v0.6.0)
 
The main feature of this release is the addition of the `RevocationBitmap2022` specification, offering efficient credential revocation on-Tangle. This is the replacement for the `MerkleKeyCollection` removed in v0.5.0, which offered similar functionality but fundamentally failed to scale beyond a few thousand revocations. 

 Other changes include encryption support using Elliptic Curve Diffie-Hellman (ECDH) and quality of life improvements for verifiable credential and presentation types in the Wasm bindings. 

 DID Documents created with v0.5.0 remain compatible with v0.6.0. This will be the last major release prior to changes for the Stardust update. 



## [v0.5.0](https://github.com/eike-hass/identity.rs/tree/v0.5.0) (2022-03-31)

[Full Changelog](https://github.com/eike-hass/identity.rs/compare/v0.4.0...v0.5.0)
 
This release introduces multiple breaking changes to the structure of IOTA DID Documents and their Tangle messages, rendering any identity created with a prior version incompatible and unresolvable. A versioning system has been introduced so any new identities should hopefully be forward compatible with any future breaking changes to the message structure. 

 The main feature of this release is the introduction of WebAssembly (Wasm) bindings for the high-level `Account` API for Javascript/Typescript in both Node.js and the browser. This includes preliminary Stronghold storage bindings but only for Node.js, as it was determined that compiling Stronghold to Wasm for the browser would not be sufficiently secure. Stronghold offers best-effort secure software storage for cryptographic keys, written in Rust. To use the Stronghold storage package install `@iota/identity-stronghold-nodejs` and follow the instructions of the package [README](https://github.com/iotaledger/identity.rs/tree/dev/bindings/stronghold-nodejs). 

 Note that all features related to diff chain updates are now marked as deprecated. Diff chains are a useful optimisation when publishing many updates to a DID Document. However, their design may be incompatible with upcoming changes to the IOTA network and should be considered unstable. 

 Another major change is the removal of the `MerkleKeyCollection` verification method type, which provided a compact representation for issuing and revoking Verifiable Credentials with multiple cryptographic keys. The `MerkleKeyCollection` suffered from disadvantages which limited scalability when managing more than a few thousand keys. While these disadvantages could be mitigated somewhat, the decision was made to replace it with one or more alternatives not affected by its fundamental limitations, upcoming in the next major release.

## [v0.4.0](https://github.com/eike-hass/identity.rs/tree/v0.4.0) (2021-11-01)

[Full Changelog](https://github.com/eike-hass/identity.rs/compare/v0.3.0...v0.4.0)

## [v0.3.0](https://github.com/eike-hass/identity.rs/tree/v0.3.0) (2021-05-10)

[Full Changelog](https://github.com/eike-hass/identity.rs/compare/v0.2.0...v0.3.0)
 
This release introduces the high-level `Account` API for creating and managing IOTA identities.

## [v0.2.0](https://github.com/eike-hass/identity.rs/tree/v0.2.0) (2021-02-18)

[Full Changelog](https://github.com/eike-hass/identity.rs/compare/v0.1.0...v0.2.0)

## [v0.1.0](https://github.com/eike-hass/identity.rs/tree/v0.1.0) (2020-11-12)

[Full Changelog](https://github.com/eike-hass/identity.rs/compare/360bf5ce64a7f418249cdeadccb22b9aea7daeb6...v0.1.0)



\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)*
