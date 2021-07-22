(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[1063],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1580:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={},s="\ud83d\uddd3\ufe0f Whiteboard Meeting: Identity Transaction Structure Discussion - 2020-08-07",u={unversionedId:"meeting-notes/2020-08-07",id:"meeting-notes/2020-08-07",isDocsHomePage:!1,title:"\ud83d\uddd3\ufe0f Whiteboard Meeting: Identity Transaction Structure Discussion - 2020-08-07",description:"\ud83c\udfaf Goals",source:"@site/docs/meeting-notes/2020-08-07.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2020-08-07",permalink:"/identity.rs/docs/meeting-notes/2020-08-07",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/meeting-notes/2020-08-07.md",version:"current",frontMatter:{}},p=[{value:"\ud83c\udfaf Goals",id:"-goals",children:[]},{value:"\ud83d\udcac Discussion topics",id:"-discussion-topics",children:[]},{value:"Conclusions",id:"conclusions",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-whiteboard-meeting-identity-transaction-structure-discussion---2020-08-07"},"\ud83d\uddd3\ufe0f Whiteboard Meeting: Identity Transaction Structure Discussion - 2020-08-07"),(0,i.kt)("h3",{id:"-goals"},"\ud83c\udfaf Goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linking DID - Address - Keys"),(0,i.kt)("li",{parentName:"ul"},"Streams vs Custom Transactions"),(0,i.kt)("li",{parentName:"ul"},"State patches vs Full Documents")),(0,i.kt)("h3",{id:"-discussion-topics"},"\ud83d\udcac Discussion topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IOTA Streams Performance"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No tests"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Streams Sequencing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can't falsify Update messages as non-writer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IOTA Streams Requirement"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Share Public key off-tangle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Streams "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ownership rotation possible via custom message types"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Streams Libraries can be reused in parts?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Needs to be worked on"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Corner case: Conflicting messages on same Index: Ordering through timestamps -> Requirement towards engineering? "))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Custom transaction seems the way forward")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Human readable friendly identifiers are impossible if we do public key - > DID -> Address"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hash(Plaintext) = ID -> Owner"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Encryption of DID Documents does not prevent any attack vectors"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It does slow down validation"),(0,i.kt)("li",{parentName:"ul"},"Identity payload data type validation becomes impossible"),(0,i.kt)("li",{parentName:"ul"},"Validate formatting"),(0,i.kt)("li",{parentName:"ul"},"In general: Spam becomes worse"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"State patches vs Full Documents"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Auth chain with with full documents"),(0,i.kt)("li",{parentName:"ul"},"DIF chain for each document on auth chain if address != 0 ")))),(0,i.kt)("h3",{id:"conclusions"},"Conclusions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Linking DID - Address - Public Key"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Address = Hash(DID) -> Allows finding of DID Document from DID"),(0,i.kt)("li",{parentName:"ul"},"DID = Hash(PublicKey) -> Fixed format DID which ownership can be proven from"),(0,i.kt)("li",{parentName:"ul"},"DID = Hash(Plaintext) -> Non-secure identity for objects to store information. This is out of scope for now"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IOTA Streams vs Custom Transactions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We decided to go with Custom Transactions."),(0,i.kt)("li",{parentName:"ul"},"Streams provides little to no advantages and does add restrictions."),(0,i.kt)("li",{parentName:"ul"},"Will try to share some of Stream's libraries / logic."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Encrypting Transactions does not add any privacy protection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"State patches vs Full Documents"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Decided to do both"),(0,i.kt)("li",{parentName:"ul"},"DIV Chain",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"State patches for the DID Document"),(0,i.kt)("li",{parentName:"ul"},"Can update any field besides authentication keys."))),(0,i.kt)("li",{parentName:"ul"},"Authentication Chain",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A chain of Full DID Documents that rotate authentication keys. "),(0,i.kt)("li",{parentName:"ul"},"Every new transactions creates a new DIV Chain."),(0,i.kt)("li",{parentName:"ul"},"Optimized DID Doc validation as old DIV Chains can be skipped.")))))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/FNjdLHL.png",alt:null}),"\n",(0,i.kt)("em",{parentName:"p"},"This example would just query the Authentication Address, validate the 3 transactions and query DIV Chain Addr 3, skipping validation of DIV Chain Addr 1 & 2")))}m.isMDXComponent=!0}}]);