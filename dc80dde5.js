/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...s)=>{const n=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(n,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const a=window.reactiveElementPolyfillSupport,l={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:c};class h extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=d){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:l.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,c=null!==(n=null!==(i=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:l.fromAttribute;this._$Ei=o,this[o]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;h.finalized=!0,h.elementProperties=new Map,h.elementStyles=[],h.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:h}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.0.1");const p=globalThis.trustedTypes,g=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,m="?"+v,$=`<${m}>`,f=document,_=(t="")=>f.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,y=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,S=/"/g,P=/^(?:script|style|textarea)$/i,T=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),U=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),L=new WeakMap,N=(t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new I(e.insertBefore(_(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o},H=f.createTreeWalker(f,129,null,!1),M=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=w;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,d=0;for(;d<s.length&&(o.lastIndex=d,l=o.exec(s),null!==l);)d=o.lastIndex,o===w?"!--"===l[1]?o=x:void 0!==l[1]?o=y:void 0!==l[2]?(P.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=E):void 0!==l[3]&&(o=E):o===E?">"===l[0]?(o=null!=n?n:w,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?E:'"'===l[3]?S:C):o===S||o===C?o=E:o===x||o===y?o=w:(o=E,n=void 0);const h=o===E&&t[e+1].startsWith("/>")?" ":"";r+=o===w?s+$:c>=0?(i.push(a),s.slice(0,c)+"$lit$"+s.slice(c)+v+h):s+v+(-2===c?(i.push(void 0),e):h)}const a=r+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(a):a,i]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=M(t,e);if(this.el=R.createElement(l,s),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=H.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const s=c[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?D:"?"===e[1]?B:"@"===e[1]?q:j})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(P.test(i.tagName)){const t=i.textContent.split(v),e=t.length-1;if(e>0){i.textContent=p?p.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],_()),H.nextNode(),a.push({type:2,index:++n});i.append(t[e],_())}}}else if(8===i.nodeType)if(i.data===m)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(v,t+1));)a.push({type:7,index:n}),t+=v.length-1}n++}}static createElement(t,e){const s=f.createElement("template");return s.innerHTML=t,s}}function z(t,e,s=t,i){var n,r,o,a;if(e===U)return e;let l=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const c=b(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,s,i)),void 0!==i?(null!==(o=(a=s)._$Cl)&&void 0!==o?o:a._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,i)),e}class O{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:f).importNode(s,!0);H.currentNode=n;let r=H.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new I(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new W(r,this,t)),this.v.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=H.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,i){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),b(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==k&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(f.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=R.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new O(n,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new R(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new I(this.A(_()),this.A(_()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,s,i,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=z(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==U,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=z(this,i[s+o],e,o),a===U&&(a=this._$AH[o]),r||(r=!b(a)||a!==this._$AH[o]),a===k?t=k:t!==k&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.k(t)}k(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends j{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===k?void 0:t}}class B extends j{constructor(){super(...arguments),this.type=4}k(t){t&&t!==k?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends j{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=z(this,t,e,0))&&void 0!==s?s:k)===U)return;const i=this._$AH,n=t===k&&i!==k||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==k&&(i===k||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const V=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,K;null==V||V(R,I),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.1");class Z extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}Z.finalized=!0,Z._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Z});const F=globalThis.litElementPolyfillSupport;null==F||F({LitElement:Z}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.0.1");class G extends Z{static get tag(){return"mark-the-words"}constructor(){super(),this.selectedWord="",this.wordList=[],this.answers="",this.correctAnswers=[],this.wordArray=this.pgh.split(/\s+/g),this.pgh=""}static get properties(){return{wordList:{type:Array},answers:{type:String,reflect:!0},correctAnswers:{type:Array}}}updated(t){t.forEach(((t,e)=>{"wordArray"===e&&this.rebuildContents(this[e]),"answers"===e&&this[e]&&(this.correctAnswers=this[e].split(","),this.answers=null)}))}rebuildContents(t){this.shadowRoot.querySelector("#textArea").innerHTML="",t.forEach((t=>{let e=document.createElement("span");e.innerText=t,e.setAttribute("tabindex","-1"),e.addEventListener("click",this.clickWord.bind(this)),this.shadowRoot.querySelector("#textArea").appendChild(e)}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return[n`:host{display:block;padding:16px;margin:16px;border:2px solid #000}span{display:inline-flex;font-size:var(--x-ample-font-size,24px);padding:2px;margin:0 2px}span:focus,span:hover{outline:2px dashed #00f;cursor:pointer}span[data-selected]{outline:2px solid purple}span[data-selected]:focus,span[data-selected]:hover{outline:2px solid #00f}span[data-status=correct]{outline:2px solid green}span[data-status=correct]::after{content:"+1";font-size:14px;color:green;font-weight:700;border-radius:50%;border:2px solid green;padding:4px;margin-left:8px;line-height:14px}span[data-status=incorrect]{outline:2px solid red}span[data-status=incorrect]::after{content:"-1";font-size:14px;color:red;font-weight:700;border-radius:50%;border:2px solid red;padding:4px;margin-left:8px;line-height:14px}.buttons,.correct{margin:8px}`]}selectWord(t){const e=t.target;e.getAttribute("data-selected")?e.removeAttribute("data-selected"):e.setAttribute("data-selected","data-selected")}checkAnswer(t){const e=this.shadowRoot.querySelectorAll("#textArea span[data-selected]");console.log(e);for(var s=0;s<e.length;s++){const t=e[s];this.correctAnswers.includes(t.innerText)?t.setAttribute("data-status","correct"):t.setAttribute("data-status","incorrect")}}render(){return T` <div id="textArea"> <div class="buttons"> <button @click="${this.checkAnswer}">Check</button> </div> <div class="correct"> <h1>Correct Answers (in .map)</h1> <ul> ${this.correctAnswers.map(((t,e)=>T`<li data-index="${e}">${t}</li>`))} </ul> </div> </div>`}static get haxProperties(){return new URL("../lib/mark-the-words.haxProperties.json",import.meta.url).href}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,X;customElements.define(G.tag,G);class Y extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}Y.finalized=!0,Y._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.0.1"),
/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
window.I18NManagerStore=window.I18NManagerStore||{},window.I18NManagerStore.requestAvailability=()=>(window.I18NManagerStore.instance||(window.I18NManagerStore.instance=document.createElement("i18n-manager"),document.body.appendChild(window.I18NManagerStore.instance)),window.I18NManagerStore.instance);const et=window.I18NManagerStore.requestAvailability();class st extends HTMLElement{constructor(){super(),this.fetchTargets={},this.elements=[],this.locales=new Set([]),this.lang=this.documentLang,this.dir=this.documentDir}get documentLang(){return document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en"}get documentDir(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}connectedCallback(){this.__ready=!0,window.addEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.addEventListener("languagechange",this.changeLanguageEvent.bind(this))}disconnectedCallback(){window.removeEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.removeEventListener("languagechange",this.changeLanguageEvent.bind(this))}changeLanguageEvent(t){this.lang=t.detail}registerLocalizationEvent(t){let e=this.detailNormalize(t.detail);e.namespace&&e.localesPath&&e.locales&&this.registerLocalization(e)}detailNormalize(t){if(!t.namespace&&t.context&&(t.namespace=t.context.tagName.toLowerCase()),!t.updateCallback&&t.context&&(t.context.requestUpdate?t.updateCallback="requestUpdate":t.context.render&&(t.updateCallback="render")),!t.localesPath&&t.basePath&&(t.localesPath=`${decodeURIComponent(t.basePath)}/../locales`),t.context&&t.namespace){t.context.t&&(t.context._t={...t.context.t});let e=this.elements.filter((e=>{if(e.namespace==t.namespace&&e.localesPath&&e.locales)return!0}));e&&e.length&&e[0]&&(t.localesPath=e[0].localesPath,t.locales=e[0].locales)}return t}registerLocalization(t){(!t.context&&0===this.elements.filter((e=>e.namespace===t.namespace)).length||0===this.elements.filter((e=>e.context===t.context)).length)&&(t=this.detailNormalize(t),this.elements.push(t),t.locales.forEach(this.locales.add,this.locales),this.lang&&this.__ready&&t.locales.includes(this.lang)&&(clearTimeout(this._debounce),this._debounce=setTimeout((()=>{this.updateLanguage(this.lang)}),0)))}static get tag(){return"i18n-manager"}async loadNamespaceFile(t,e=this.lang){const s=e.split("-");let i=this.elements.filter((i=>i.namespace===t&&(i.locales.includes(e)||i.locales.includes(s[0]))));if(i&&1===i.length){const t=i[0];var n="";return t.locales.includes(e)?n=`${t.localesPath}/${t.namespace}.${e}.json`:t.locales.includes(s[0])&&(n=`${t.localesPath}/${t.namespace}.${s[0]}.json`),""==n?{}:(this.fetchTargets[n]||(this.fetchTargets[n]=await fetch(n).then((t=>!(!t||!t.json)&&t.json()))),this.fetchTargets[n])}}async updateLanguage(t){if(t){const n=t.split("-"),r=this.elements.filter((e=>e.locales.includes(t)||e.locales.includes(n[0]))),o=this.elements.filter((e=>!e.locales.includes(t)&&!e.locales.includes(n[0])));if(0!==o.length)for(var e in o){let t=o[e];t.context&&(t.context.t={...t.context._t},t.updateCallback&&t.context[t.updateCallback]())}for(var e in r){let o=r[e];var s="";if(o.locales.includes(t)?s=`${o.localesPath}/${o.namespace}.${t}.json`:o.locales.includes(n[0])&&(s=`${o.localesPath}/${o.namespace}.${n[0]}.json`),this.fetchTargets[s]){if(o.context){let t=this.fetchTargets[s];for(var i in t)o.context.t[i]=t[i];o.context.t={...o.context.t},o.updateCallback&&o.context[o.updateCallback]()}}else if(this.fetchTargets[s]=await fetch(s).then((t=>!(!t||!t.json)&&t.json())),o.context){for(var i in this.fetchTargets[s])o.context.t[i]=this.fetchTargets[s][i];o.context.t={...o.context.t},o.updateCallback&&o.context&&o.context[o.updateCallback]()}}}}static get observedAttributes(){return["lang","dir"]}attributeChangedCallback(t,e,s){"lang"!=t&&"dir"!=t||this.dispatchEvent(new CustomEvent(`${t}-changed`,{detail:{value:s}})),"lang"==t&&s&&this.__ready&&this.updateLanguage(s)}get lang(){return this.getAttribute("lang")}set lang(t){t?this.setAttribute("lang",t):this.removeAttribute("lang")}get dir(){return this.getAttribute("dir")}set dir(t){t?this.setAttribute("dir",t):this.removeAttribute("dir")}}customElements.define(st.tag,st);class it extends(function(t){return class extends t{constructor(){super(),this.t={}}static get properties(){return{...super.properties,t:{type:Object}}}registerLocalization(t){t.namespace||(t.namespace=t.context.tagName.toLowerCase()),t.updateCallback||(t.context.requestUpdate?t.updateCallback="requestUpdate":t.context.render&&(t.updateCallback="render")),!t.localesPath&&t.basePath&&(t.localesPath=`${decodeURIComponent(t.basePath)}/../locales`),et.registerLocalization(t)}}}(Y)){static get styles(){return[n`:host{display:block}:host:after{content:attr(words-text);position:var(--word-count-position,relative);display:var(--word-count-display,flex);flex-direction:var(--word-count-flex-direction,row-reverse);margin:var(--word-count-margin,12px);font-size:var(--word-count-font-size,10px);transition:var(--word-count-transition,.3s font-size,color ease);line-height:var(--word-count-line-height,16px);color:var(--word-count-color,#888)}:host(:active):after,:host(:focus):after,:host(:hover):after{font-size:var(--word-count-font-size-hover,12px);font-weight:var(--word-count-font-weight-hover,bold);color:var(--word-count-color-hover,#000)}.screen-reader-text{border:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;width:1px;overflow:hidden;position:absolute!important;word-wrap:normal!important}`]}render(){return T` <slot></slot> <div class="screen-reader-text">${this.wordsPrefix}: ${this.words}</div> `}static get tag(){return"word-count"}constructor(){super(),this.wordsPrefix="Word count",this.t={wordsPrefix:this.wordsPrefix},this.registerLocalization({context:this,basePath:import.meta.url,locales:["es","fr","ja"]})}connectedCallback(){super.connectedCallback(),this.__observer=new MutationObserver(this._updateWords.bind(this)),this.__observer.observe(this,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.__observer.disconnect(),super.disconnectedCallback()}update(t){super.update(t),t.has("t")&&(this.wordsPrefix=this.t.wordsPrefix),t.has("wordsPrefix")&&(this.t={wordsPrefix:this.wordsPrefix},this.setAttribute("words-text",`${this.wordsPrefix}: ${this.words}`)),t.has("words")&&this.setAttribute("words-text",`${this.wordsPrefix}: ${this.words}`)}static get properties(){return{...super.properties,words:{type:Number},wordsPrefix:{type:String,attribute:"words-prefix"}}}_updateWords(t){""!==this.textContent?this.words=parseInt(this.textContent.split(/\s+/g).length-1):this.words=0}}window.customElements.define(it.tag,it);
