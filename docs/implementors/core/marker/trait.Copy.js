(function() {var implementors = {};
implementors["identity_core"] = [{"text":"impl Copy for Timestamp","synthetic":false,"types":[]},{"text":"impl&lt;'key&gt; Copy for KeyRef&lt;'key&gt;","synthetic":false,"types":[]},{"text":"impl Copy for KeyType","synthetic":false,"types":[]},{"text":"impl Copy for JcsEd25519Signature2020","synthetic":false,"types":[]},{"text":"impl Copy for MerkleKey","synthetic":false,"types":[]},{"text":"impl Copy for MerkleTag","synthetic":false,"types":[]},{"text":"impl&lt;D:&nbsp;DigestExt&gt; Copy for Hash&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Output&lt;D&gt;: Copy,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["identity_did"] = [{"text":"impl Copy for ErrorKind","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for DIDKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'query&gt; Copy for MethodQuery&lt;'query&gt;","synthetic":false,"types":[]},{"text":"impl Copy for MethodScope","synthetic":false,"types":[]},{"text":"impl Copy for MethodType","synthetic":false,"types":[]}];
implementors["identity_diff"] = [{"text":"impl Copy for Diffi8","synthetic":false,"types":[]},{"text":"impl Copy for Diffi16","synthetic":false,"types":[]},{"text":"impl Copy for Diffi32","synthetic":false,"types":[]},{"text":"impl Copy for Diffi64","synthetic":false,"types":[]},{"text":"impl Copy for Diffi128","synthetic":false,"types":[]},{"text":"impl Copy for DiffiSize","synthetic":false,"types":[]},{"text":"impl Copy for Diffu8","synthetic":false,"types":[]},{"text":"impl Copy for Diffu16","synthetic":false,"types":[]},{"text":"impl Copy for Diffu32","synthetic":false,"types":[]},{"text":"impl Copy for Diffu64","synthetic":false,"types":[]},{"text":"impl Copy for Diffu128","synthetic":false,"types":[]},{"text":"impl Copy for DiffuSize","synthetic":false,"types":[]},{"text":"impl Copy for DiffF32","synthetic":false,"types":[]},{"text":"impl Copy for DiffF64","synthetic":false,"types":[]},{"text":"impl Copy for Diffbool","synthetic":false,"types":[]},{"text":"impl Copy for Diffchar","synthetic":false,"types":[]},{"text":"impl Copy for Diffunit","synthetic":false,"types":[]}];
implementors["identity_iota"] = [{"text":"impl Copy for Network","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Copy for CredentialValidator&lt;'a&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()