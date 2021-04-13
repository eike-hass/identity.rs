(function() {var implementors = {};
implementors["identity_core"] = [{"text":"impl Send for BitSet","synthetic":true,"types":[]},{"text":"impl Send for Timestamp","synthetic":true,"types":[]},{"text":"impl Send for Url","synthetic":true,"types":[]},{"text":"impl Send for Context","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for OneOrMany&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for OneOrManyIter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for KeyCollection","synthetic":true,"types":[]},{"text":"impl Send for KeyPair","synthetic":true,"types":[]},{"text":"impl&lt;'key&gt; Send for KeyRef&lt;'key&gt;","synthetic":true,"types":[]},{"text":"impl Send for PublicKey","synthetic":true,"types":[]},{"text":"impl Send for SecretKey","synthetic":true,"types":[]},{"text":"impl Send for JcsEd25519Signature2020","synthetic":true,"types":[]},{"text":"impl Send for Signature","synthetic":true,"types":[]},{"text":"impl Send for KeyType","synthetic":true,"types":[]},{"text":"impl Send for SignatureValue","synthetic":true,"types":[]},{"text":"impl Send for MerkleKey","synthetic":true,"types":[]},{"text":"impl&lt;'proof, 'key, S, D&gt; Send for Signer&lt;'proof, 'key, S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as Digest&gt;::OutputSize: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for MerkleTag","synthetic":true,"types":[]},{"text":"impl&lt;'key, S, D&gt; Send for Verifier&lt;'key, S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D&gt; Send for Hash&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as Digest&gt;::OutputSize: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D&gt; Send for Proof&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as Digest&gt;::OutputSize: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D&gt; Send for Node&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as Digest&gt;::OutputSize: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["identity_credential"] = [{"text":"impl&lt;T&gt; Send for CredentialBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Credential&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Evidence","synthetic":true,"types":[]},{"text":"impl Send for Policy","synthetic":true,"types":[]},{"text":"impl Send for Refresh","synthetic":true,"types":[]},{"text":"impl Send for Schema","synthetic":true,"types":[]},{"text":"impl Send for Status","synthetic":true,"types":[]},{"text":"impl Send for Subject","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for VerifiableCredential&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Issuer","synthetic":true,"types":[]},{"text":"impl Send for BASE_CONTEXT","synthetic":true,"types":[]},{"text":"impl Send for IssuerData","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for PresentationBuilder&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for Presentation&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for VerifiablePresentation&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["identity_derive"] = [{"text":"impl !Send for InputEnum","synthetic":true,"types":[]},{"text":"impl !Send for InputStruct","synthetic":true,"types":[]},{"text":"impl !Send for EVariant","synthetic":true,"types":[]},{"text":"impl !Send for InputModel","synthetic":true,"types":[]},{"text":"impl Send for SVariant","synthetic":true,"types":[]},{"text":"impl !Send for DataFields","synthetic":true,"types":[]}];
implementors["identity_did"] = [{"text":"impl&lt;T, U, V&gt; Send for DiffDocument&lt;T, U, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: for&lt;'de&gt; Deserialize&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: for&lt;'de&gt; Deserialize&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as Diff&gt;::Type: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DiffMethod&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DiffService&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DiffMethodData","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DiffMethodRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U, V&gt; Send for DocumentBuilder&lt;T, U, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U, V&gt; Send for Document&lt;T, U, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Dereference","synthetic":true,"types":[]},{"text":"impl Send for DocumentMetadata","synthetic":true,"types":[]},{"text":"impl Send for InputMetadata","synthetic":true,"types":[]},{"text":"impl Send for Resolution","synthetic":true,"types":[]},{"text":"impl Send for ResolutionMetadata","synthetic":true,"types":[]},{"text":"impl Send for MetaDocument","synthetic":true,"types":[]},{"text":"impl Send for ErrorKind","synthetic":true,"types":[]},{"text":"impl Send for PrimaryResource","synthetic":true,"types":[]},{"text":"impl Send for Resource","synthetic":true,"types":[]},{"text":"impl Send for SecondaryResource","synthetic":true,"types":[]},{"text":"impl Send for ResolveContext","synthetic":true,"types":[]},{"text":"impl Send for DerefContext","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ServiceBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Service&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DIDKey&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for OrderedSet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'base, 'query, 'proof, T, U, V&gt; !Send for DocumentSigner&lt;'base, 'query, 'proof, T, U, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'base, T, U, V&gt; Send for DocumentVerifier&lt;'base, T, U, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Properties&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for MethodBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Method&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'query&gt; Send for MethodQuery&lt;'query&gt;","synthetic":true,"types":[]},{"text":"impl Send for MethodData","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for MethodRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for MethodScope","synthetic":true,"types":[]},{"text":"impl Send for MethodType","synthetic":true,"types":[]}];
implementors["identity_diff"] = [{"text":"impl&lt;K, V&gt; Send for DiffHashMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DiffHashSet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DiffString","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DiffVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DiffOption&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Send for InnerValue&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for InnerValue&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Diffi8","synthetic":true,"types":[]},{"text":"impl Send for Diffi16","synthetic":true,"types":[]},{"text":"impl Send for Diffi32","synthetic":true,"types":[]},{"text":"impl Send for Diffi64","synthetic":true,"types":[]},{"text":"impl Send for Diffi128","synthetic":true,"types":[]},{"text":"impl Send for DiffiSize","synthetic":true,"types":[]},{"text":"impl Send for Diffu8","synthetic":true,"types":[]},{"text":"impl Send for Diffu16","synthetic":true,"types":[]},{"text":"impl Send for Diffu32","synthetic":true,"types":[]},{"text":"impl Send for Diffu64","synthetic":true,"types":[]},{"text":"impl Send for Diffu128","synthetic":true,"types":[]},{"text":"impl Send for DiffuSize","synthetic":true,"types":[]},{"text":"impl Send for DiffF32","synthetic":true,"types":[]},{"text":"impl Send for DiffF64","synthetic":true,"types":[]},{"text":"impl Send for Diffbool","synthetic":true,"types":[]},{"text":"impl Send for Diffchar","synthetic":true,"types":[]},{"text":"impl Send for Diffunit","synthetic":true,"types":[]},{"text":"impl Send for DiffValue","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for InnerVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diff&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["identity_iota"] = [{"text":"impl Send for AuthChain","synthetic":true,"types":[]},{"text":"impl Send for DiffChain","synthetic":true,"types":[]},{"text":"impl Send for DocumentChain","synthetic":true,"types":[]},{"text":"impl Send for Client","synthetic":true,"types":[]},{"text":"impl Send for ClientBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for TxnPrinter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Network","synthetic":true,"types":[]},{"text":"impl Send for EXPLORER_MAIN","synthetic":true,"types":[]},{"text":"impl Send for EXPLORER_DEV","synthetic":true,"types":[]},{"text":"impl Send for EXPLORER_COM","synthetic":true,"types":[]},{"text":"impl Send for NODE_MAIN","synthetic":true,"types":[]},{"text":"impl Send for NODE_DEV","synthetic":true,"types":[]},{"text":"impl Send for NODE_COM","synthetic":true,"types":[]},{"text":"impl Send for __Full","synthetic":true,"types":[]},{"text":"impl Send for __Mini","synthetic":true,"types":[]},{"text":"impl Send for __Hash","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for CredentialValidation&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CredentialValidator&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for DocumentValidation","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for PresentationValidation&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Document","synthetic":true,"types":[]},{"text":"impl Send for DocumentDiff","synthetic":true,"types":[]},{"text":"impl Send for Method","synthetic":true,"types":[]},{"text":"impl Send for Properties","synthetic":true,"types":[]},{"text":"impl Send for DID","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for MessageId","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for MessageIndex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()