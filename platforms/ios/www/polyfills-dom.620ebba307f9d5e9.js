(self.webpackChunkSharedShoppingList=self.webpackChunkSharedShoppingList||[]).push([[6748],{723:function(){var d,h,a;(function(){"use strict";var d=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function h(e){var t=d.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!t&&e}function a(e){var t=e.isConnected;if(void 0!==t)return t;for(;e&&!(e.__CE_isImportDocument||e instanceof Document);)e=e.parentNode||(window.ShadowRoot&&e instanceof ShadowRoot?e.host:void 0);return!(!e||!(e.__CE_isImportDocument||e instanceof Document))}function u(e,t){for(;t&&t!==e&&!t.nextSibling;)t=t.parentNode;return t&&t!==e?t.nextSibling:null}function m(e,t,n){n=void 0===n?new Set:n;for(var r=e;r;){if(r.nodeType===Node.ELEMENT_NODE){var o=r;t(o);var i=o.localName;if("link"===i&&"import"===o.getAttribute("rel")){if((r=o.import)instanceof Node&&!n.has(r))for(n.add(r),r=r.firstChild;r;r=r.nextSibling)m(r,t,n);r=u(e,o);continue}if("template"===i){r=u(e,o);continue}if(o=o.__CE_shadowRoot)for(o=o.firstChild;o;o=o.nextSibling)m(o,t,n)}r=r.firstChild?r.firstChild:u(e,r)}}function f(e,t,n){e[t]=n}function y(){this.a=new Map,this.g=new Map,this.c=[],this.f=[],this.b=!1}function j(e,t){e.b&&m(t,function(n){return _(e,n)})}function _(e,t){if(e.b&&!t.__CE_patched){t.__CE_patched=!0;for(var n=0;n<e.c.length;n++)e.c[n](t);for(n=0;n<e.f.length;n++)e.f[n](t)}}function E(e,t){var n=[];for(m(t,function(o){return n.push(o)}),t=0;t<n.length;t++){var r=n[t];1===r.__CE_state?e.connectedCallback(r):D(e,r)}}function w(e,t){var n=[];for(m(t,function(o){return n.push(o)}),t=0;t<n.length;t++){var r=n[t];1===r.__CE_state&&e.disconnectedCallback(r)}}function C(e,t,n){var r=(n=void 0===n?{}:n).u||new Set,o=n.i||function(l){return D(e,l)},i=[];if(m(t,function(l){if("link"===l.localName&&"import"===l.getAttribute("rel")){var s=l.import;s instanceof Node&&(s.__CE_isImportDocument=!0,s.__CE_hasRegistry=!0),s&&"complete"===s.readyState?s.__CE_documentLoadHandled=!0:l.addEventListener("load",function(){var c=l.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var p=new Set(r);p.delete(c),C(e,c,{u:p,i:o})}})}else i.push(l)},r),e.b)for(t=0;t<i.length;t++)_(e,i[t]);for(t=0;t<i.length;t++)o(i[t])}function D(e,t){if(void 0===t.__CE_state){var n=t.ownerDocument;if((n.defaultView||n.__CE_isImportDocument&&n.__CE_hasRegistry)&&(n=e.a.get(t.localName))){n.constructionStack.push(t);var r=n.constructorFunction;try{try{if(new r!==t)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{n.constructionStack.pop()}}catch(l){throw t.__CE_state=2,l}if(t.__CE_state=1,t.__CE_definition=n,n.attributeChangedCallback)for(n=n.observedAttributes,r=0;r<n.length;r++){var o=n[r],i=t.getAttribute(o);null!==i&&e.attributeChangedCallback(t,o,null,i,null)}a(t)&&e.connectedCallback(t)}}}function I(e){var t=document;this.c=e,this.a=t,this.b=void 0,C(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function z(e){e.b&&e.b.disconnect()}function st(){var e=this;this.b=this.a=void 0,this.c=new Promise(function(t){e.b=t,e.a&&t(e.a)})}function U(e){if(e.a)throw Error("Already resolved.");e.a=void 0,e.b&&e.b(void 0)}function v(e){this.c=!1,this.a=e,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.g=[],this.o=new I(e)}y.prototype.connectedCallback=function(e){var t=e.__CE_definition;t.connectedCallback&&t.connectedCallback.call(e)},y.prototype.disconnectedCallback=function(e){var t=e.__CE_definition;t.disconnectedCallback&&t.disconnectedCallback.call(e)},y.prototype.attributeChangedCallback=function(e,t,n,r,o){var i=e.__CE_definition;i.attributeChangedCallback&&-1<i.observedAttributes.indexOf(t)&&i.attributeChangedCallback.call(e,t,n,r,o)},I.prototype.f=function(e){var t=this.a.readyState;for("interactive"!==t&&"complete"!==t||z(this),t=0;t<e.length;t++)for(var n=e[t].addedNodes,r=0;r<n.length;r++)C(this.c,n[r])},v.prototype.l=function(e,t){var n=this;if(!(t instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!h(e))throw new SyntaxError("The element name '"+e+"' is not valid.");if(this.a.a.get(e))throw Error("A custom element with name '"+e+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var r=function(T){var N=o[T];if(void 0!==N&&!(N instanceof Function))throw Error("The '"+T+"' callback must be a function.");return N},o=t.prototype;if(!(o instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var i=r("connectedCallback"),l=r("disconnectedCallback"),s=r("adoptedCallback"),c=r("attributeChangedCallback"),p=t.observedAttributes||[]}catch(g){return}finally{this.c=!1}(function S(e,t,n){e.a.set(t,n),e.g.set(n.constructorFunction,n)})(this.a,e,t={localName:e,constructorFunction:t,connectedCallback:i,disconnectedCallback:l,adoptedCallback:s,attributeChangedCallback:c,observedAttributes:p,constructionStack:[]}),this.g.push(t),this.b||(this.b=!0,this.f(function(){return function ct(e){if(!1!==e.b){e.b=!1;for(var t=e.g,n=[],r=new Map,o=0;o<t.length;o++)r.set(t[o].localName,[]);for(C(e.a,document,{i:function(c){if(void 0===c.__CE_state){var p=c.localName,g=r.get(p);g?g.push(c):e.a.a.get(p)&&n.push(c)}}}),o=0;o<n.length;o++)D(e.a,n[o]);for(;0<t.length;){var i=t.shift();o=i.localName,i=r.get(i.localName);for(var l=0;l<i.length;l++)D(e.a,i[l]);(o=e.j.get(o))&&U(o)}}}(n)}))},v.prototype.i=function(e){C(this.a,e)},v.prototype.get=function(e){if(e=this.a.a.get(e))return e.constructorFunction},v.prototype.m=function(e){if(!h(e))return Promise.reject(new SyntaxError("'"+e+"' is not a valid custom element name."));var t=this.j.get(e);return t||(t=new st,this.j.set(e,t),this.a.a.get(e)&&!this.g.some(function(n){return n.localName===e})&&U(t)),t.c},v.prototype.s=function(e){z(this.o);var t=this.f;this.f=function(n){return e(function(){return t(n)})}},window.CustomElementRegistry=v,v.prototype.define=v.prototype.l,v.prototype.upgrade=v.prototype.i,v.prototype.get=v.prototype.get,v.prototype.whenDefined=v.prototype.m,v.prototype.polyfillWrapFlushCallback=v.prototype.s;var B=window.Document.prototype.createElement,W=window.Document.prototype.createElementNS,at=window.Document.prototype.importNode,ut=window.Document.prototype.prepend,pt=window.Document.prototype.append,ft=window.DocumentFragment.prototype.prepend,ht=window.DocumentFragment.prototype.append,V=window.Node.prototype.cloneNode,A=window.Node.prototype.appendChild,$=window.Node.prototype.insertBefore,k=window.Node.prototype.removeChild,G=window.Node.prototype.replaceChild,M=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),J=window.Element.prototype.attachShadow,x=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),H=window.Element.prototype.getAttribute,K=window.Element.prototype.setAttribute,Q=window.Element.prototype.removeAttribute,O=window.Element.prototype.getAttributeNS,Y=window.Element.prototype.setAttributeNS,Z=window.Element.prototype.removeAttributeNS,X=window.Element.prototype.insertAdjacentElement,q=window.Element.prototype.insertAdjacentHTML,dt=window.Element.prototype.prepend,mt=window.Element.prototype.append,R=window.Element.prototype.before,gt=window.Element.prototype.after,tt=window.Element.prototype.replaceWith,et=window.Element.prototype.remove,yt=window.HTMLElement,P=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),nt=window.HTMLElement.prototype.insertAdjacentElement,ot=window.HTMLElement.prototype.insertAdjacentHTML,rt=new function(){};function F(e,t,n){function r(o){return function(i){for(var l=[],s=0;s<arguments.length;++s)l[s]=arguments[s];s=[];for(var c=[],p=0;p<l.length;p++){var g=l[p];if(g instanceof Element&&a(g)&&c.push(g),g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)s.push(g);else s.push(g)}for(o.apply(this,l),l=0;l<c.length;l++)w(e,c[l]);if(a(this))for(l=0;l<s.length;l++)(c=s[l])instanceof Element&&E(e,c)}}void 0!==n.h&&(t.prepend=r(n.h)),void 0!==n.append&&(t.append=r(n.append))}var L=window.customElements;if(!L||L.forcePolyfill||"function"!=typeof L.define||"function"!=typeof L.get){var b=new y;(function vt(){var e=b;window.HTMLElement=function(){function t(){var n=this.constructor,r=e.g.get(n);if(!r)throw Error("The custom element being constructed was not registered with `customElements`.");var o=r.constructionStack;if(0===o.length)return o=B.call(document,r.localName),Object.setPrototypeOf(o,n.prototype),o.__CE_state=1,o.__CE_definition=r,_(e,o),o;var i=o[r=o.length-1];if(i===rt)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return o[r]=rt,Object.setPrototypeOf(i,n.prototype),_(e,i),i}return t.prototype=yt.prototype,Object.defineProperty(t.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:t}),t}()})(),function wt(){var e=b;f(Document.prototype,"createElement",function(t){if(this.__CE_hasRegistry){var n=e.a.get(t);if(n)return new n.constructorFunction}return t=B.call(this,t),_(e,t),t}),f(Document.prototype,"importNode",function(t,n){return t=at.call(this,t,!!n),this.__CE_hasRegistry?C(e,t):j(e,t),t}),f(Document.prototype,"createElementNS",function(t,n){if(this.__CE_hasRegistry&&(null===t||"http://www.w3.org/1999/xhtml"===t)){var r=e.a.get(n);if(r)return new r.constructorFunction}return t=W.call(this,t,n),_(e,t),t}),F(e,Document.prototype,{h:ut,append:pt})}(),F(b,DocumentFragment.prototype,{h:ft,append:ht}),function Et(){function e(n,r){Object.defineProperty(n,"textContent",{enumerable:r.enumerable,configurable:!0,get:r.get,set:function(i){if(this.nodeType===Node.TEXT_NODE)r.set.call(this,i);else{var l=void 0;if(this.firstChild){var s=this.childNodes,c=s.length;if(0<c&&a(this)){l=Array(c);for(var p=0;p<c;p++)l[p]=s[p]}}if(r.set.call(this,i),l)for(i=0;i<l.length;i++)w(t,l[i])}}})}var t=b;f(Node.prototype,"insertBefore",function(n,r){if(n instanceof DocumentFragment){var o=Array.prototype.slice.apply(n.childNodes);if(n=$.call(this,n,r),a(this))for(r=0;r<o.length;r++)E(t,o[r]);return n}return o=a(n),r=$.call(this,n,r),o&&w(t,n),a(this)&&E(t,n),r}),f(Node.prototype,"appendChild",function(n){if(n instanceof DocumentFragment){var r=Array.prototype.slice.apply(n.childNodes);if(n=A.call(this,n),a(this))for(var o=0;o<r.length;o++)E(t,r[o]);return n}return r=a(n),o=A.call(this,n),r&&w(t,n),a(this)&&E(t,n),o}),f(Node.prototype,"cloneNode",function(n){return n=V.call(this,!!n),this.ownerDocument.__CE_hasRegistry?C(t,n):j(t,n),n}),f(Node.prototype,"removeChild",function(n){var r=a(n),o=k.call(this,n);return r&&w(t,n),o}),f(Node.prototype,"replaceChild",function(n,r){if(n instanceof DocumentFragment){var o=Array.prototype.slice.apply(n.childNodes);if(n=G.call(this,n,r),a(this))for(w(t,r),r=0;r<o.length;r++)E(t,o[r]);return n}o=a(n);var i=G.call(this,n,r),l=a(this);return l&&w(t,r),o&&w(t,n),l&&E(t,n),i}),M&&M.get?e(Node.prototype,M):function it(e,t){e.b=!0,e.c.push(t)}(t,function(n){e(n,{enumerable:!0,configurable:!0,get:function(){for(var o=[],i=0;i<this.childNodes.length;i++){var l=this.childNodes[i];l.nodeType!==Node.COMMENT_NODE&&o.push(l.textContent)}return o.join("")},set:function(o){for(;this.firstChild;)k.call(this,this.firstChild);null!=o&&""!==o&&A.call(this,document.createTextNode(o))}})})}(),function _t(){function e(o,i){Object.defineProperty(o,"innerHTML",{enumerable:i.enumerable,configurable:!0,get:i.get,set:function(s){var c=this,p=void 0;if(a(this)&&(p=[],m(this,function(N){N!==c&&p.push(N)})),i.set.call(this,s),p)for(var g=0;g<p.length;g++){var T=p[g];1===T.__CE_state&&r.disconnectedCallback(T)}return this.ownerDocument.__CE_hasRegistry?C(r,this):j(r,this),s}})}function t(o,i){f(o,"insertAdjacentElement",function(l,s){var c=a(s);return l=i.call(this,l,s),c&&w(r,s),a(l)&&E(r,s),l})}function n(o,i){function l(s,c){for(var p=[];s!==c;s=s.nextSibling)p.push(s);for(c=0;c<p.length;c++)C(r,p[c])}f(o,"insertAdjacentHTML",function(s,c){if("beforebegin"===(s=s.toLowerCase())){var p=this.previousSibling;i.call(this,s,c),l(p||this.parentNode.firstChild,this)}else if("afterbegin"===s)p=this.firstChild,i.call(this,s,c),l(this.firstChild,p);else if("beforeend"===s)p=this.lastChild,i.call(this,s,c),l(p||this.firstChild,null);else{if("afterend"!==s)throw new SyntaxError("The value provided ("+String(s)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");p=this.nextSibling,i.call(this,s,c),l(this.nextSibling,p)}})}var r=b;J&&f(Element.prototype,"attachShadow",function(o){o=J.call(this,o);var i=r;if(i.b&&!o.__CE_patched){o.__CE_patched=!0;for(var l=0;l<i.c.length;l++)i.c[l](o)}return this.__CE_shadowRoot=o}),x&&x.get?e(Element.prototype,x):P&&P.get?e(HTMLElement.prototype,P):function lt(e,t){e.b=!0,e.f.push(t)}(r,function(o){e(o,{enumerable:!0,configurable:!0,get:function(){return V.call(this,!0).innerHTML},set:function(l){var s="template"===this.localName,c=s?this.content:this,p=W.call(document,this.namespaceURI,this.localName);for(p.innerHTML=l;0<c.childNodes.length;)k.call(c,c.childNodes[0]);for(l=s?p.content:p;0<l.childNodes.length;)A.call(c,l.childNodes[0])}})}),f(Element.prototype,"setAttribute",function(o,i){if(1!==this.__CE_state)return K.call(this,o,i);var l=H.call(this,o);K.call(this,o,i),i=H.call(this,o),r.attributeChangedCallback(this,o,l,i,null)}),f(Element.prototype,"setAttributeNS",function(o,i,l){if(1!==this.__CE_state)return Y.call(this,o,i,l);var s=O.call(this,o,i);Y.call(this,o,i,l),l=O.call(this,o,i),r.attributeChangedCallback(this,i,s,l,o)}),f(Element.prototype,"removeAttribute",function(o){if(1!==this.__CE_state)return Q.call(this,o);var i=H.call(this,o);Q.call(this,o),null!==i&&r.attributeChangedCallback(this,o,i,null,null)}),f(Element.prototype,"removeAttributeNS",function(o,i){if(1!==this.__CE_state)return Z.call(this,o,i);var l=O.call(this,o,i);Z.call(this,o,i);var s=O.call(this,o,i);l!==s&&r.attributeChangedCallback(this,i,l,s,o)}),nt?t(HTMLElement.prototype,nt):X?t(Element.prototype,X):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),ot?n(HTMLElement.prototype,ot):q?n(Element.prototype,q):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),F(r,Element.prototype,{h:dt,append:mt}),function Ct(e){function t(r){return function(o){for(var i=[],l=0;l<arguments.length;++l)i[l]=arguments[l];l=[];for(var s=[],c=0;c<i.length;c++){var p=i[c];if(p instanceof Element&&a(p)&&s.push(p),p instanceof DocumentFragment)for(p=p.firstChild;p;p=p.nextSibling)l.push(p);else l.push(p)}for(r.apply(this,i),i=0;i<s.length;i++)w(e,s[i]);if(a(this))for(i=0;i<l.length;i++)(s=l[i])instanceof Element&&E(e,s)}}var n=Element.prototype;void 0!==R&&(n.before=t(R)),void 0!==R&&(n.after=t(gt)),void 0!==tt&&f(n,"replaceWith",function(r){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];i=[];for(var l=[],s=0;s<o.length;s++){var c=o[s];if(c instanceof Element&&a(c)&&l.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)i.push(c);else i.push(c)}for(s=a(this),tt.apply(this,o),o=0;o<l.length;o++)w(e,l[o]);if(s)for(w(e,this),o=0;o<i.length;o++)(l=i[o])instanceof Element&&E(e,l)}),void 0!==et&&f(n,"remove",function(){var r=a(this);et.call(this),r&&w(e,this)})}(r)}(),document.__CE_hasRegistry=!0;var bt=new v(b);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:bt})}}).call(self),"string"!=typeof document.baseURI&&Object.defineProperty(Document.prototype,"baseURI",{enumerable:!0,configurable:!0,get:function(){var h=document.querySelector("base");return h&&h.href?h.href:document.URL}}),"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(d,h){h=h||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(d,h.bubbles,h.cancelable,h.detail),a},window.CustomEvent.prototype=window.Event.prototype),d=Event.prototype,h=document,a=window,d.composedPath||(d.composedPath=function(){if(this.path)return this.path;var u=this.target;for(this.path=[];null!==u.parentNode;)this.path.push(u),u=u.parentNode;return this.path.push(h,a),this.path}),function(d){"function"!=typeof d.matches&&(d.matches=d.msMatchesSelector||d.mozMatchesSelector||d.webkitMatchesSelector||function(h){h=(this.document||this.ownerDocument).querySelectorAll(h);for(var a=0;h[a]&&h[a]!==this;)++a;return!!h[a]}),"function"!=typeof d.closest&&(d.closest=function(h){for(var a=this;a&&1===a.nodeType;){if(a.matches(h))return a;a=a.parentNode}return null})}(window.Element.prototype),function(d){function h(u){return(u=a(u))&&11===u.nodeType?h(u.host):u}function a(u){return u&&u.parentNode?a(u.parentNode):u}"function"!=typeof d.getRootNode&&(d.getRootNode=function(u){return u&&u.composed?h(this):a(this)})}(Element.prototype),function(d){"isConnected"in d||Object.defineProperty(d,"isConnected",{configurable:!0,enumerable:!0,get:function(){var a=this.getRootNode({composed:!0});return a&&9===a.nodeType}})}(Element.prototype),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(h){h.hasOwnProperty("remove")||Object.defineProperty(h,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}),function(d){"classList"in d||Object.defineProperty(d,"classList",{get:function(){var a=this,u=(a.getAttribute("class")||"").replace(/^\s+|\s$/g,"").split(/\s+/g);function m(){u.length>0?a.setAttribute("class",u.join(" ")):a.removeAttribute("class")}return""===u[0]&&u.splice(0,1),u.toggle=function(f,y){void 0!==y?y?u.add(f):u.remove(f):-1!==u.indexOf(f)?u.splice(u.indexOf(f),1):u.push(f),m()},u.add=function(){for(var f=[].slice.call(arguments),y=0,S=f.length;y<S;y++)-1===u.indexOf(f[y])&&u.push(f[y]);m()},u.remove=function(){for(var f=[].slice.call(arguments),y=0,S=f.length;y<S;y++)-1!==u.indexOf(f[y])&&u.splice(u.indexOf(f[y]),1);m()},u.item=function(f){return u[f]},u.contains=function(f){return-1!==u.indexOf(f)},u.replace=function(f,y){-1!==u.indexOf(f)&&u.splice(u.indexOf(f),1,y),m()},u.value=a.getAttribute("class")||"",u}})}(Element.prototype),function(d){try{document.body.classList.add()}catch(u){var h=d.add,a=d.remove;d.add=function(){for(var m=0;m<arguments.length;m++)h.call(this,arguments[m])},d.remove=function(){for(var m=0;m<arguments.length;m++)a.call(this,arguments[m])}}}(DOMTokenList.prototype)}}]);