import{j as r,m as k,H as Pe,M as kt,C as Ce,U as Ke,X as um,a as hm,A as Jc,b as Xc,P as an,c as va,B as Zc,d as eu,e as Ve,f as tu,S as Ue,g as dm,h as dt,i as mm,k as su,l as pm,n as Fe,o as Ns,T as pn,p as _r,F as _a,V as nu,q as Yt,r as wr,s as fm,D as gm,t as xm,u as ym,L as bm,E as Nr,v as Gi,w as $e,x as fl,y as Ki,z as ru,G as vm}from"./ui-XjkG8QnM.js";import{r as W,u as wa,L as q,N as gl,a as _m,B as wm,R as Nm,b as de}from"./router-C1aQ9poW.js";import{a as Em}from"./vendor-CSDcbZvL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var sr={},xl;function Tm(){if(xl)return sr;xl=1;var s=Em();return sr.createRoot=s.createRoot,sr.hydrateRoot=s.hydrateRoot,sr}var jm=Tm();const Im=()=>{};var yl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let i=s.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Am=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const i=s[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=s[t++];e[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=s[t++],l=s[t++],u=s[t++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const o=s[t++],l=s[t++];e[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<s.length;i+=3){const o=s[i],l=i+1<s.length,u=l?s[i+1]:0,h=i+2<s.length,m=h?s[i+2]:0,f=o>>2,x=(o&3)<<4|u>>4;let v=(u&15)<<2|m>>6,w=m&63;h||(w=64,l||(v=64)),n.push(t[f],t[x],t[v],t[w])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(iu(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Am(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<s.length;){const o=t[s.charAt(i++)],u=i<s.length?t[s.charAt(i)]:0;++i;const m=i<s.length?t[s.charAt(i)]:64;++i;const x=i<s.length?t[s.charAt(i)]:64;if(++i,o==null||u==null||m==null||x==null)throw new Sm;const v=o<<2|u>>4;if(n.push(v),m!==64){const w=u<<4&240|m>>2;if(n.push(w),x!==64){const C=m<<6&192|x;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Sm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cm=function(s){const e=iu(s);return au.encodeByteArray(e,!0)},Er=function(s){return Cm(s).replace(/\./g,"")},ou=function(s){try{return au.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=()=>Rm().__FIREBASE_DEFAULTS__,km=()=>{if(typeof process>"u"||typeof yl>"u")return;const s=yl.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Dm=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&ou(s[1]);return e&&JSON.parse(e)},zr=()=>{try{return Im()||Pm()||km()||Dm()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},lu=s=>zr()?.emulatorHosts?.[s],cu=s=>{const e=lu(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},uu=()=>zr()?.config,hu=s=>zr()?.[`_${s}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Na(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=s.iat||0,o=s.sub||s.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Er(JSON.stringify(t)),Er(JSON.stringify(l)),""].join(".")}const on={};function Om(){const s={prod:[],emulator:[]};for(const e of Object.keys(on))on[e]?s.emulator.push(e):s.prod.push(e);return s}function Mm(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let bl=!1;function Ea(s,e){if(typeof window>"u"||typeof document>"u"||!ns(window.location.host)||on[s]===e||on[s]||bl)return;on[s]=e;function t(v){return`__firebase__banner__${v}`}const n="__firebase__banner",o=Om().prod.length>0;function l(){const v=document.getElementById(n);v&&v.remove()}function u(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,w){v.setAttribute("width","24"),v.setAttribute("id",w),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function m(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{bl=!0,l()},v}function f(v,w){v.setAttribute("id",w),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function x(){const v=Mm(n),w=t("text"),C=document.getElementById(w)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),H=t("preprendIcon"),z=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const $=v.element;u($),f(R,P);const Z=m();h(z,H),$.append(z,C,R,Z),document.body.appendChild($)}o?(C.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Um(){const s=zr()?.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bm(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function $m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qm(){const s=je();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Hm(){return!Um()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function zm(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="FirebaseError";class it extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Gm,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jn.prototype.create)}}class jn{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?Km(o,n):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new it(i,u,n)}}function Km(s,e){return s.replace(Qm,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Qm=/\{\$([^}]+)}/g;function Ym(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Jt(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const o=s[i],l=e[i];if(vl(o)&&vl(l)){if(!Jt(o,l))return!1}else if(o!==l)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function vl(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Zs(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,o]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function en(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function Jm(s,e){const t=new Xm(s,e);return t.subscribe.bind(t)}class Xm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Zm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Di),i.error===void 0&&(i.error=Di),i.complete===void 0&&(i.complete=Di);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zm(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Di(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(s){return s&&s._delegate?s._delegate:s}class Dt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Vm;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sp(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);n===u&&l.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:tp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tp(s){return s===Gt?void 0:s}function sp(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ep(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(G||(G={}));const rp={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},ip=G.INFO,ap={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},op=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),i=ap[e];if(i)console[i](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=ip,this._logHandler=op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const lp=(s,e)=>e.some(t=>s instanceof t);let _l,wl;function cp(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function up(){return wl||(wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mu=new WeakMap,Qi=new WeakMap,pu=new WeakMap,Vi=new WeakMap,ja=new WeakMap;function hp(s){const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("success",o),s.removeEventListener("error",l)},o=()=>{t(St(s.result)),i()},l=()=>{n(s.error),i()};s.addEventListener("success",o),s.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&mu.set(t,s)}).catch(()=>{}),ja.set(e,s),e}function dp(s){if(Qi.has(s))return;const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("complete",o),s.removeEventListener("error",l),s.removeEventListener("abort",l)},o=()=>{t(),i()},l=()=>{n(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",o),s.addEventListener("error",l),s.addEventListener("abort",l)});Qi.set(s,e)}let Yi={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Qi.get(s);if(e==="objectStoreNames")return s.objectStoreNames||pu.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function mp(s){Yi=s(Yi)}function pp(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(Oi(this),e,...t);return pu.set(n,e.sort?e.sort():[e]),St(n)}:up().includes(s)?function(...e){return s.apply(Oi(this),e),St(mu.get(this))}:function(...e){return St(s.apply(Oi(this),e))}}function fp(s){return typeof s=="function"?pp(s):(s instanceof IDBTransaction&&dp(s),lp(s,cp())?new Proxy(s,Yi):s)}function St(s){if(s instanceof IDBRequest)return hp(s);if(Vi.has(s))return Vi.get(s);const e=fp(s);return e!==s&&(Vi.set(s,e),ja.set(e,s)),e}const Oi=s=>ja.get(s);function gp(s,e,{blocked:t,upgrade:n,blocking:i,terminated:o}={}){const l=indexedDB.open(s,e),u=St(l);return n&&l.addEventListener("upgradeneeded",h=>{n(St(l.result),h.oldVersion,h.newVersion,St(l.transaction),h)}),t&&l.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),u}const xp=["get","getKey","getAll","getAllKeys","count"],yp=["put","add","delete","clear"],Mi=new Map;function Nl(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Mi.get(e))return Mi.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=yp.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||xp.includes(t)))return;const o=async function(l,...u){const h=this.transaction(l,i?"readwrite":"readonly");let m=h.store;return n&&(m=m.index(u.shift())),(await Promise.all([m[t](...u),i&&h.done]))[0]};return Mi.set(e,o),o}mp(s=>({...s,get:(e,t,n)=>Nl(e,t)||s.get(e,t,n),has:(e,t)=>!!Nl(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function vp(s){return s.getComponent()?.type==="VERSION"}const Ji="@firebase/app",El="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Ta("@firebase/app"),_p="@firebase/app-compat",wp="@firebase/analytics-compat",Np="@firebase/analytics",Ep="@firebase/app-check-compat",Tp="@firebase/app-check",jp="@firebase/auth",Ip="@firebase/auth-compat",Ap="@firebase/database",Sp="@firebase/data-connect",Cp="@firebase/database-compat",Rp="@firebase/functions",Pp="@firebase/functions-compat",kp="@firebase/installations",Dp="@firebase/installations-compat",Vp="@firebase/messaging",Op="@firebase/messaging-compat",Mp="@firebase/performance",Lp="@firebase/performance-compat",Up="@firebase/remote-config",Fp="@firebase/remote-config-compat",Bp="@firebase/storage",$p="@firebase/storage-compat",qp="@firebase/firestore",Hp="@firebase/ai",Wp="@firebase/firestore-compat",zp="firebase",Gp="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]",Kp={[Ji]:"fire-core",[_p]:"fire-core-compat",[Np]:"fire-analytics",[wp]:"fire-analytics-compat",[Tp]:"fire-app-check",[Ep]:"fire-app-check-compat",[jp]:"fire-auth",[Ip]:"fire-auth-compat",[Ap]:"fire-rtdb",[Sp]:"fire-data-connect",[Cp]:"fire-rtdb-compat",[Rp]:"fire-fn",[Pp]:"fire-fn-compat",[kp]:"fire-iid",[Dp]:"fire-iid-compat",[Vp]:"fire-fcm",[Op]:"fire-fcm-compat",[Mp]:"fire-perf",[Lp]:"fire-perf-compat",[Up]:"fire-rc",[Fp]:"fire-rc-compat",[Bp]:"fire-gcs",[$p]:"fire-gcs-compat",[qp]:"fire-fst",[Wp]:"fire-fst-compat",[Hp]:"fire-vertex","fire-js":"fire-js",[zp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,Qp=new Map,Zi=new Map;function Tl(s,e){try{s.container.addComponent(e)}catch(t){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Xt(s){const e=s.name;if(Zi.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,s);for(const t of Tr.values())Tl(t,s);for(const t of Qp.values())Tl(t,s);return!0}function Gr(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Oe(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new jn("app","Firebase",Yp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=Gp;function fu(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Xi,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw Ct.create("bad-app-name",{appName:String(i)});if(t||(t=uu()),!t)throw Ct.create("no-options");const o=Tr.get(i);if(o){if(Jt(t,o.options)&&Jt(n,o.config))return o;throw Ct.create("duplicate-app",{appName:i})}const l=new np(i);for(const h of Zi.values())l.addComponent(h);const u=new Jp(t,n,l);return Tr.set(i,u),u}function Ia(s=Xi){const e=Tr.get(s);if(!e&&s===Xi&&uu())return fu();if(!e)throw Ct.create("no-app",{appName:s});return e}function Qe(s,e,t){let n=Kp[s]??s;t&&(n+=`-${t}`);const i=n.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${n}" with version "${e}":`];i&&l.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(l.join(" "));return}Xt(new Dt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="firebase-heartbeat-database",Zp=1,fn="firebase-heartbeat-store";let Li=null;function gu(){return Li||(Li=gp(Xp,Zp,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(fn)}catch(t){console.warn(t)}}}}).catch(s=>{throw Ct.create("idb-open",{originalErrorMessage:s.message})})),Li}async function ef(s){try{const t=(await gu()).transaction(fn),n=await t.objectStore(fn).get(xu(s));return await t.done,n}catch(e){if(e instanceof it)ft.warn(e.message);else{const t=Ct.create("idb-get",{originalErrorMessage:e?.message});ft.warn(t.message)}}}async function jl(s,e){try{const n=(await gu()).transaction(fn,"readwrite");await n.objectStore(fn).put(e,xu(s)),await n.done}catch(t){if(t instanceof it)ft.warn(t.message);else{const n=Ct.create("idb-set",{originalErrorMessage:t?.message});ft.warn(n.message)}}}function xu(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=1024,sf=30;class nf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new af(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Il();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>sf){const i=of(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ft.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Il(),{heartbeatsToSend:t,unsentEntries:n}=rf(this._heartbeatsCache.heartbeats),i=Er(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ft.warn(e),""}}}function Il(){return new Date().toISOString().substring(0,10)}function rf(s,e=tf){const t=[];let n=s.slice();for(const i of s){const o=t.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Al(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Al(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class af{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?zm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ef(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return jl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return jl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Al(s){return Er(JSON.stringify({version:2,heartbeats:s})).length}function of(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(s){Xt(new Dt("platform-logger",e=>new bp(e),"PRIVATE")),Xt(new Dt("heartbeat",e=>new nf(e),"PRIVATE")),Qe(Ji,El,s),Qe(Ji,El,"esm2020"),Qe("fire-js","")}lf("");function yu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cf=yu,bu=new jn("auth","Firebase",yu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Ta("@firebase/auth");function uf(s,...e){jr.logLevel<=G.WARN&&jr.warn(`Auth (${rs}): ${s}`,...e)}function hr(s,...e){jr.logLevel<=G.ERROR&&jr.error(`Auth (${rs}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(s,...e){throw Aa(s,...e)}function Ye(s,...e){return Aa(s,...e)}function vu(s,e,t){const n={...cf(),[e]:t};return new jn("auth","Firebase",n).create(e,{appName:s.name})}function mt(s){return vu(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Aa(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return bu.create(s,...e)}function L(s,e,...t){if(!s)throw Aa(e,...t)}function ut(s){const e="INTERNAL ASSERTION FAILED: "+s;throw hr(e),new Error(e)}function gt(s,e){s||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){return typeof self<"u"&&self.location?.href||""}function hf(){return Sl()==="http:"||Sl()==="https:"}function Sl(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hf()||Bm()||"connection"in navigator)?navigator.onLine:!0}function mf(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=Lm()||$m()}get(){return df()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(s,e){gt(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gf=new An(3e4,6e4);function Bt(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function $t(s,e,t,n,i={}){return wu(s,i,async()=>{let o={},l={};n&&(e==="GET"?l=n:o={body:JSON.stringify(n)});const u=In({key:s.config.apiKey,...l}).slice(1),h=await s._getAdditionalHeaders();h["Content-Type"]="application/json",s.languageCode&&(h["X-Firebase-Locale"]=s.languageCode);const m={method:e,headers:h,...o};return Fm()||(m.referrerPolicy="no-referrer"),s.emulatorConfig&&ns(s.emulatorConfig.host)&&(m.credentials="include"),_u.fetch()(await Nu(s,s.config.apiHost,t,u),m)})}async function wu(s,e,t){s._canInitEmulator=!1;const n={...pf,...e};try{const i=new yf(s),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw nr(s,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,m]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(s,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw nr(s,"email-already-in-use",l);if(h==="USER_DISABLED")throw nr(s,"user-disabled",l);const f=n[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw vu(s,f,m);ze(s,f)}}catch(i){if(i instanceof it)throw i;ze(s,"network-request-failed",{message:String(i)})}}async function Sn(s,e,t,n,i={}){const o=await $t(s,e,t,n,i);return"mfaPendingCredential"in o&&ze(s,"multi-factor-auth-required",{_serverResponse:o}),o}async function Nu(s,e,t,n){const i=`${e}${t}?${n}`,o=s,l=o.config.emulator?Sa(s.config,i):`${s.config.apiScheme}://${i}`;return ff.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(l).toString():l}function xf(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ye(this.auth,"network-request-failed")),gf.get())})}}function nr(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Ye(s,e,n);return i.customData._tokenResponse=t,i}function Cl(s){return s!==void 0&&s.enterprise!==void 0}class bf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vf(s,e){return $t(s,"GET","/v2/recaptchaConfig",Bt(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(s,e){return $t(s,"POST","/v1/accounts:delete",e)}async function Ir(s,e){return $t(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wf(s,e=!1){const t=ke(s),n=await t.getIdToken(e),i=Ca(n);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o?.sign_in_provider;return{claims:i,token:n,authTime:ln(Ui(i.auth_time)),issuedAtTime:ln(Ui(i.iat)),expirationTime:ln(Ui(i.exp)),signInProvider:l||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Ui(s){return Number(s)*1e3}function Ca(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const i=ou(t);return i?JSON.parse(i):(hr("Failed to decode base64 JWT payload"),null)}catch(i){return hr("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Rl(s){const e=Ca(s);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof it&&Nf(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Nf({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ln(this.lastLoginAt),this.creationTime=ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(s){const e=s.auth,t=await s.getIdToken(),n=await gn(s,Ir(e,{idToken:t}));L(n?.users.length,e,"internal-error");const i=n.users[0];s._notifyReloadListener(i);const o=i.providerUserInfo?.length?Eu(i.providerUserInfo):[],l=jf(s.providerData,o),u=s.isAnonymous,h=!(s.email&&i.passwordHash)&&!l?.length,m=u?h:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ta(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(s,f)}async function Tf(s){const e=ke(s);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jf(s,e){return[...s.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Eu(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(s,e){const t=await wu(s,{},async()=>{const n=In({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=s.config,l=await Nu(s,i,"/v1/token",`key=${o}`),u=await s._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:n};return s.emulatorConfig&&ns(s.emulatorConfig.host)&&(h.credentials="include"),_u.fetch()(l,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Af(s,e){return $t(s,"POST","/v2/accounts:revokeToken",Bt(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=Rl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await If(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:o}=t,l=new bs;return n&&(L(typeof n=="string","internal-error",{appName:e}),l.refreshToken=n),i&&(L(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(s,e){L(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class qe{constructor({uid:e,auth:t,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new Ef(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ta(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await gn(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wf(this,e)}reload(){return Tf(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ar(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await gn(this,_f(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,i=t.email??void 0,o=t.phoneNumber??void 0,l=t.photoURL??void 0,u=t.tenantId??void 0,h=t._redirectEventId??void 0,m=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:x,emailVerified:v,isAnonymous:w,providerData:C,stsTokenManager:P}=t;L(x&&P,e,"internal-error");const R=bs.fromJSON(this.name,P);L(typeof x=="string",e,"internal-error"),Nt(n,e.name),Nt(i,e.name),L(typeof v=="boolean",e,"internal-error"),L(typeof w=="boolean",e,"internal-error"),Nt(o,e.name),Nt(l,e.name),Nt(u,e.name),Nt(h,e.name),Nt(m,e.name),Nt(f,e.name);const H=new qe({uid:x,auth:e,email:i,emailVerified:v,displayName:n,isAnonymous:w,photoURL:l,phoneNumber:o,tenantId:u,stsTokenManager:R,createdAt:m,lastLoginAt:f});return C&&Array.isArray(C)&&(H.providerData=C.map(z=>({...z}))),h&&(H._redirectEventId=h),H}static async _fromIdTokenResponse(e,t,n=!1){const i=new bs;i.updateFromServerResponse(t);const o=new qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ar(o),o}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Eu(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!o?.length,u=new bs;u.updateFromIdToken(n);const h=new qe({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:l}),m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ta(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(h,m),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Map;function ht(s){gt(s instanceof Function,"Expected a class definition");let e=Pl.get(s);return e?(gt(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Pl.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Tu.type="NONE";const kl=Tu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(s,e,t){return`firebase:${s}:${e}:${t}`}class vs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=dr(this.userKey,i.apiKey,o),this.fullPersistenceKey=dr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ir(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new vs(ht(kl),e,n);const i=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=i[0]||ht(kl);const l=dr(n,e.config.apiKey,e.name);let u=null;for(const m of t)try{const f=await m._get(l);if(f){let x;if(typeof f=="string"){const v=await Ir(e,{idToken:f}).catch(()=>{});if(!v)break;x=await qe._fromGetAccountInfoResponse(e,v,f)}else x=qe._fromJSON(e,f);m!==o&&(u=x),o=m;break}}catch{}const h=i.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new vs(o,e,n):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(l)}catch{}})),new vs(o,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Su(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ju(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ru(e))return"Blackberry";if(Pu(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Au(e))&&!e.includes("edge/"))return"Chrome";if(Cu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if(n?.length===2)return n[1]}return"Other"}function ju(s=je()){return/firefox\//i.test(s)}function Iu(s=je()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Au(s=je()){return/crios\//i.test(s)}function Su(s=je()){return/iemobile/i.test(s)}function Cu(s=je()){return/android/i.test(s)}function Ru(s=je()){return/blackberry/i.test(s)}function Pu(s=je()){return/webos/i.test(s)}function Ra(s=je()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Sf(s=je()){return Ra(s)&&!!window.navigator?.standalone}function Cf(){return qm()&&document.documentMode===10}function ku(s=je()){return Ra(s)||Cu(s)||Pu(s)||Ru(s)||/windows phone/i.test(s)||Su(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(s,e=[]){let t;switch(s){case"Browser":t=Dl(je());break;case"Worker":t=`${Dl(je())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rs}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pf(s,e={}){return $t(s,"GET","/v2/passwordPolicy",Bt(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=6;class Df{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??kf,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vl(this),this.idTokenSubscription=new Vl(this),this.beforeStateQueue=new Rf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ir(this,{idToken:e}),n=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Oe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,l=n?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&u?.user&&(n=u.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(mt(this));const t=e?ke(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pf(this),t=new Df(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Af(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,n,i);return()=>{l=!0,h()}}else{const h=e.addObserver(t);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Du(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&uf(`Error while retrieving App Check token: ${e.error}`),e?.token}}function is(s){return ke(s)}class Vl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jm(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Of(s){Kr=s}function Vu(s){return Kr.loadJS(s)}function Mf(){return Kr.recaptchaEnterpriseScript}function Lf(){return Kr.gapiScript}function Uf(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Ff{constructor(){this.enterprise=new Bf}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Bf{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $f="recaptcha-enterprise",Ou="NO_RECAPTCHA";class qf{constructor(e){this.type=$f,this.auth=is(e)}async verify(e="verify",t=!1){async function n(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,u)=>{vf(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const m=new bf(h);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,l(m.siteKey)}}).catch(h=>{u(h)})})}function i(o,l,u){const h=window.grecaptcha;Cl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(m=>{l(m)}).catch(()=>{l(Ou)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ff().execute("siteKey",{action:"verify"}):new Promise((o,l)=>{n(this.auth).then(u=>{if(!t&&Cl(window.grecaptcha))i(u,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Mf();h.length!==0&&(h+=u),Vu(h).then(()=>{i(u,o,l)}).catch(m=>{l(m)})}}).catch(u=>{l(u)})})}}async function Ol(s,e,t,n=!1,i=!1){const o=new qf(s);let l;if(i)l=Ou;else try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const u={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const h=u.phoneEnrollmentInfo.phoneNumber,m=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:m,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const h=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return n?Object.assign(u,{captchaResp:l}):Object.assign(u,{captchaResponse:l}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function sa(s,e,t,n,i){if(s._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ol(s,e,t,t==="getOobCode");return n(s,o)}else return n(s,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ol(s,e,t,t==="getOobCode");return n(s,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(s,e){const t=Gr(s,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Jt(o,e??{}))return i;ze(i,"already-initialized")}return t.initialize({options:e})}function Wf(s,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(ht);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e?.popupRedirectResolver)}function zf(s,e,t){const n=is(s);L(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,o=Mu(e),{host:l,port:u}=Gf(e),h=u===null?"":`:${u}`,m={url:`${o}//${l}${h}/`},f=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){L(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),L(Jt(m,n.config.emulator)&&Jt(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=m,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,ns(l)?(Na(`${o}//${l}${h}`),Ea("Auth",!0)):Kf()}function Mu(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Gf(s){const e=Mu(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:Ml(n.substr(o.length+1))}}else{const[o,l]=n.split(":");return{host:o,port:Ml(l)}}}function Ml(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Kf(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function Qf(s,e){return $t(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(s,e){return Sn(s,"POST","/v1/accounts:signInWithPassword",Bt(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(s,e){return Sn(s,"POST","/v1/accounts:signInWithEmailLink",Bt(s,e))}async function Xf(s,e){return Sn(s,"POST","/v1/accounts:signInWithEmailLink",Bt(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Pa{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new xn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new xn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(e,t,"signInWithPassword",Yf);case"emailLink":return Jf(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(e,n,"signUpPassword",Qf);case"emailLink":return Xf(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(s,e){return Sn(s,"POST","/v1/accounts:signInWithIdp",Bt(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="http://localhost";class Zt extends Pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...o}=t;if(!n||!i)return null;const l=new Zt(n,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return _s(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,_s(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_s(e,t)}buildRequest(){const e={requestUri:Zf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=In(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tg(s){const e=Zs(en(s)).link,t=e?Zs(en(e)).deep_link_id:null,n=Zs(en(s)).deep_link_id;return(n?Zs(en(n)).link:null)||n||t||e||s}class ka{constructor(e){const t=Zs(en(e)),n=t.apiKey??null,i=t.oobCode??null,o=eg(t.mode??null);L(n&&i&&o,"argument-error"),this.apiKey=n,this.operation=o,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=tg(e);try{return new ka(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,t){return xn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ka.parseLink(t);return L(n,"argument-error"),xn._fromEmailAndCode(e,n.code,n.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Cn{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Cn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Tt.credential(t,n)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Cn{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Cn{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(s,e){return Sn(s,"POST","/v1/accounts:signUp",Bt(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const o=await qe._fromIdTokenResponse(e,n,i),l=Ll(n);return new es({user:o,providerId:l,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ll(n);return new es({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ll(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends it{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Sr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Sr(e,t,n,i)}}function Uu(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Sr._fromErrorAndOperation(s,o,e,n):o})}async function ng(s,e,t=!1){const n=await gn(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return es._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(s,e,t=!1){const{auth:n}=s;if(Oe(n.app))return Promise.reject(mt(n));const i="reauthenticate";try{const o=await gn(s,Uu(n,i,e,s),t);L(o.idToken,n,"internal-error");const l=Ca(o.idToken);L(l,n,"internal-error");const{sub:u}=l;return L(s.uid===u,n,"user-mismatch"),es._forOperation(s,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&ze(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(s,e,t=!1){if(Oe(s.app))return Promise.reject(mt(s));const n="signIn",i=await Uu(s,n,e),o=await es._fromIdTokenResponse(s,n,i);return t||await s._updateCurrentUser(o.user),o}async function ig(s,e){return Fu(is(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bu(s){const e=is(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ag(s,e,t){if(Oe(s.app))return Promise.reject(mt(s));const n=is(s),l=await sa(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sg).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Bu(s),h}),u=await es._fromIdTokenResponse(n,"signIn",l);return await n._updateCurrentUser(u.user),u}function og(s,e,t){return Oe(s.app)?Promise.reject(mt(s)):ig(ke(s),Cs.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Bu(s),n})}function lg(s,e,t,n){return ke(s).onIdTokenChanged(e,t,n)}function cg(s,e,t){return ke(s).beforeAuthStateChanged(e,t)}function ug(s,e,t,n){return ke(s).onAuthStateChanged(e,t,n)}function hg(s){return ke(s).signOut()}const Cr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cr,"1"),this.storage.removeItem(Cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=1e3,mg=10;class qu extends $u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ku(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(n);!t&&this.localCache[n]===l||this.notifyListeners(n,l)},o=this.storage.getItem(n);Cf()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mg):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qu.type="LOCAL";const pg=qu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends $u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hu.type="SESSION";const Wu=Hu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Qr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:o}=t.data,l=this.handlersMap[i];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(l).map(async m=>m(t.origin,o)),h=await fg(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const m=Da("",20);i.port1.start();const f=setTimeout(()=>{h(new Error("unsupported_event"))},n);l={messageChannel:i,onMessage(x){const v=x;if(v.data.eventId===m)switch(v.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(v.data.response);break;default:clearTimeout(f),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function xg(s){Je().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function yg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bg(){return navigator?.serviceWorker?.controller||null}function vg(){return zu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="firebaseLocalStorageDb",_g=1,Rr="firebaseLocalStorage",Ku="fbase_key";class Rn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yr(s,e){return s.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function wg(){const s=indexedDB.deleteDatabase(Gu);return new Rn(s).toPromise()}function na(){const s=indexedDB.open(Gu,_g);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Rr,{keyPath:Ku})}catch(i){t(i)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Rr)?e(n):(n.close(),await wg(),e(await na()))})})}async function Ul(s,e,t){const n=Yr(s,!0).put({[Ku]:e,value:t});return new Rn(n).toPromise()}async function Ng(s,e){const t=Yr(s,!1).get(e),n=await new Rn(t).toPromise();return n===void 0?null:n.value}function Fl(s,e){const t=Yr(s,!0).delete(e);return new Rn(t).toPromise()}const Eg=800,Tg=3;class Qu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await na(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Tg)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qr._getInstance(vg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await yg(),!this.activeServiceWorker)return;this.sender=new gg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await na();return await Ul(e,Cr,"1"),await Fl(e,Cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ul(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Ng(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Yr(i,!1).getAll();return new Rn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qu.type="LOCAL";const jg=Qu;new An(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(s,e){return e?ht(e):(L(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Pa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _s(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ag(s){return Fu(s.auth,new Va(s),s.bypassAuthState)}function Sg(s){const{auth:e,user:t}=s;return L(t,e,"internal-error"),rg(t,new Va(s),s.bypassAuthState)}async function Cg(s){const{auth:e,user:t}=s;return L(t,e,"internal-error"),ng(t,new Va(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ag;case"linkViaPopup":case"linkViaRedirect":return Cg;case"reauthViaPopup":case"reauthViaRedirect":return Sg;default:ze(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new An(2e3,1e4);class ys extends Yu{constructor(e,t,n,i,o){super(e,t,i,o),this.provider=n,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rg.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="pendingRedirect",mr=new Map;class kg extends Yu{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const n=await Dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dg(s,e){const t=Mg(e),n=Og(s);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Vg(s,e){mr.set(s._key(),e)}function Og(s){return ht(s._redirectPersistence)}function Mg(s){return dr(Pg,s.config.apiKey,s.name)}async function Lg(s,e,t=!1){if(Oe(s.app))return Promise.reject(mt(s));const n=is(s),i=Ig(n,e),l=await new kg(n,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await n._persistUserIfCurrent(l.user),await n._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=600*1e3;class Fg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Ju(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ye(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ug&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bl(e))}saveEventToCache(e){this.cachedEventUids.add(Bl(e)),this.lastProcessedEventTime=Date.now()}}function Bl(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Ju({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function Bg(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ju(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(s,e={}){return $t(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hg=/^https?/;async function Wg(s){if(s.config.emulator)return;const{authorizedDomains:e}=await $g(s);for(const t of e)try{if(zg(t))return}catch{}ze(s,"unauthorized-domain")}function zg(s){const e=ea(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const l=new URL(s);return l.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===n}if(!Hg.test(t))return!1;if(qg.test(s))return n===s;const i=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new An(3e4,6e4);function $l(){const s=Je().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function Kg(s){return new Promise((e,t)=>{function n(){$l(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$l(),t(Ye(s,"network-request-failed"))},timeout:Gg.get()})}if(Je().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Je().gapi?.load)n();else{const i=Uf("iframefcb");return Je()[i]=()=>{gapi.load?n():t(Ye(s,"network-request-failed"))},Vu(`${Lf()}?onload=${i}`).catch(o=>t(o))}}).catch(e=>{throw pr=null,e})}let pr=null;function Qg(s){return pr=pr||Kg(s),pr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new An(5e3,15e3),Jg="__/auth/iframe",Xg="emulator/auth/iframe",Zg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tx(s){const e=s.config;L(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Sa(e,Xg):`https://${s.config.authDomain}/${Jg}`,n={apiKey:e.apiKey,appName:s.name,v:rs},i=ex.get(s.config.apiHost);i&&(n.eid=i);const o=s._getFrameworks();return o.length&&(n.fw=o.join(",")),`${t}?${In(n).slice(1)}`}async function sx(s){const e=await Qg(s),t=Je().gapi;return L(t,s,"internal-error"),e.open({where:document.body,url:tx(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zg,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const l=Ye(s,"network-request-failed"),u=Je().setTimeout(()=>{o(l)},Yg.get());function h(){Je().clearTimeout(u),i(n)}n.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rx=500,ix=600,ax="_blank",ox="http://localhost";class ql{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lx(s,e,t,n=rx,i=ix){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const h={...nx,width:n.toString(),height:i.toString(),top:o,left:l},m=je().toLowerCase();t&&(u=Au(m)?ax:t),ju(m)&&(e=e||ox,h.scrollbars="yes");const f=Object.entries(h).reduce((v,[w,C])=>`${v}${w}=${C},`,"");if(Sf(m)&&u!=="_self")return cx(e||"",u),new ql(null);const x=window.open(e||"",u,f);L(x,s,"popup-blocked");try{x.focus()}catch{}return new ql(x)}function cx(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="__/auth/handler",hx="emulator/auth/handler",dx=encodeURIComponent("fac");async function Hl(s,e,t,n,i,o){L(s.config.authDomain,s,"auth-domain-config-required"),L(s.config.apiKey,s,"invalid-api-key");const l={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:rs,eventId:i};if(e instanceof Lu){e.setDefaultLanguage(s.languageCode),l.providerId=e.providerId||"",Ym(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,x]of Object.entries({}))l[f]=x}if(e instanceof Cn){const f=e.getScopes().filter(x=>x!=="");f.length>0&&(l.scopes=f.join(","))}s.tenantId&&(l.tid=s.tenantId);const u=l;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const h=await s._getAppCheckToken(),m=h?`#${dx}=${encodeURIComponent(h)}`:"";return`${mx(s)}?${In(u).slice(1)}${m}`}function mx({config:s}){return s.emulator?Sa(s,hx):`https://${s.authDomain}/${ux}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="webStorageSupport";class px{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wu,this._completeRedirectFn=Lg,this._overrideRedirectResult=Vg}async _openPopup(e,t,n,i){gt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Hl(e,t,n,ea(),i);return lx(e,o,Da())}async _openRedirect(e,t,n,i){await this._originValidation(e);const o=await Hl(e,t,n,ea(),i);return xg(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(gt(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await sx(e),n=new Fg(e);return t.register("authEvent",i=>(L(i?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fi,{type:Fi},i=>{const o=i?.[0]?.[Fi];o!==void 0&&t(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ku()||Iu()||Ra()}}const fx=px;var Wl="@firebase/auth",zl="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yx(s){Xt(new Dt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=n.options;L(l&&!l.includes(":"),"invalid-api-key",{appName:n.name});const h={apiKey:l,authDomain:u,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Du(s)},m=new Vf(n,i,o,h);return Wf(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Xt(new Dt("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(n=>new gx(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Wl,zl,xx(s)),Qe(Wl,zl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=300,vx=hu("authIdTokenMaxAge")||bx;let Gl=null;const _x=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>vx)return;const i=t?.token;Gl!==i&&(Gl=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wx(s=Ia()){const e=Gr(s,"auth");if(e.isInitialized())return e.getImmediate();const t=Hf(s,{popupRedirectResolver:fx,persistence:[jg,pg,Wu]}),n=hu("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const l=_x(o.toString());cg(t,l,()=>l(t.currentUser)),lg(t,u=>l(u))}}const i=lu("auth");return i&&zf(t,`http://${i}`),t}function Nx(){return document.getElementsByTagName("head")?.[0]??document}Of({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=i=>{const o=Ye("internal-error");o.customData=i,t(o)},n.type="text/javascript",n.charset="UTF-8",Nx().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yx("Browser");var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rt,Xu;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function b(){}b.prototype=g.prototype,E.D=g.prototype,E.prototype=new b,E.prototype.constructor=E,E.C=function(_,N,j){for(var y=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)y[ot-2]=arguments[ot];return g.prototype[N].apply(_,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,b){b||(b=0);var _=Array(16);if(typeof g=="string")for(var N=0;16>N;++N)_[N]=g.charCodeAt(b++)|g.charCodeAt(b++)<<8|g.charCodeAt(b++)<<16|g.charCodeAt(b++)<<24;else for(N=0;16>N;++N)_[N]=g[b++]|g[b++]<<8|g[b++]<<16|g[b++]<<24;g=E.g[0],b=E.g[1],N=E.g[2];var j=E.g[3],y=g+(j^b&(N^j))+_[0]+3614090360&4294967295;g=b+(y<<7&4294967295|y>>>25),y=j+(N^g&(b^N))+_[1]+3905402710&4294967295,j=g+(y<<12&4294967295|y>>>20),y=N+(b^j&(g^b))+_[2]+606105819&4294967295,N=j+(y<<17&4294967295|y>>>15),y=b+(g^N&(j^g))+_[3]+3250441966&4294967295,b=N+(y<<22&4294967295|y>>>10),y=g+(j^b&(N^j))+_[4]+4118548399&4294967295,g=b+(y<<7&4294967295|y>>>25),y=j+(N^g&(b^N))+_[5]+1200080426&4294967295,j=g+(y<<12&4294967295|y>>>20),y=N+(b^j&(g^b))+_[6]+2821735955&4294967295,N=j+(y<<17&4294967295|y>>>15),y=b+(g^N&(j^g))+_[7]+4249261313&4294967295,b=N+(y<<22&4294967295|y>>>10),y=g+(j^b&(N^j))+_[8]+1770035416&4294967295,g=b+(y<<7&4294967295|y>>>25),y=j+(N^g&(b^N))+_[9]+2336552879&4294967295,j=g+(y<<12&4294967295|y>>>20),y=N+(b^j&(g^b))+_[10]+4294925233&4294967295,N=j+(y<<17&4294967295|y>>>15),y=b+(g^N&(j^g))+_[11]+2304563134&4294967295,b=N+(y<<22&4294967295|y>>>10),y=g+(j^b&(N^j))+_[12]+1804603682&4294967295,g=b+(y<<7&4294967295|y>>>25),y=j+(N^g&(b^N))+_[13]+4254626195&4294967295,j=g+(y<<12&4294967295|y>>>20),y=N+(b^j&(g^b))+_[14]+2792965006&4294967295,N=j+(y<<17&4294967295|y>>>15),y=b+(g^N&(j^g))+_[15]+1236535329&4294967295,b=N+(y<<22&4294967295|y>>>10),y=g+(N^j&(b^N))+_[1]+4129170786&4294967295,g=b+(y<<5&4294967295|y>>>27),y=j+(b^N&(g^b))+_[6]+3225465664&4294967295,j=g+(y<<9&4294967295|y>>>23),y=N+(g^b&(j^g))+_[11]+643717713&4294967295,N=j+(y<<14&4294967295|y>>>18),y=b+(j^g&(N^j))+_[0]+3921069994&4294967295,b=N+(y<<20&4294967295|y>>>12),y=g+(N^j&(b^N))+_[5]+3593408605&4294967295,g=b+(y<<5&4294967295|y>>>27),y=j+(b^N&(g^b))+_[10]+38016083&4294967295,j=g+(y<<9&4294967295|y>>>23),y=N+(g^b&(j^g))+_[15]+3634488961&4294967295,N=j+(y<<14&4294967295|y>>>18),y=b+(j^g&(N^j))+_[4]+3889429448&4294967295,b=N+(y<<20&4294967295|y>>>12),y=g+(N^j&(b^N))+_[9]+568446438&4294967295,g=b+(y<<5&4294967295|y>>>27),y=j+(b^N&(g^b))+_[14]+3275163606&4294967295,j=g+(y<<9&4294967295|y>>>23),y=N+(g^b&(j^g))+_[3]+4107603335&4294967295,N=j+(y<<14&4294967295|y>>>18),y=b+(j^g&(N^j))+_[8]+1163531501&4294967295,b=N+(y<<20&4294967295|y>>>12),y=g+(N^j&(b^N))+_[13]+2850285829&4294967295,g=b+(y<<5&4294967295|y>>>27),y=j+(b^N&(g^b))+_[2]+4243563512&4294967295,j=g+(y<<9&4294967295|y>>>23),y=N+(g^b&(j^g))+_[7]+1735328473&4294967295,N=j+(y<<14&4294967295|y>>>18),y=b+(j^g&(N^j))+_[12]+2368359562&4294967295,b=N+(y<<20&4294967295|y>>>12),y=g+(b^N^j)+_[5]+4294588738&4294967295,g=b+(y<<4&4294967295|y>>>28),y=j+(g^b^N)+_[8]+2272392833&4294967295,j=g+(y<<11&4294967295|y>>>21),y=N+(j^g^b)+_[11]+1839030562&4294967295,N=j+(y<<16&4294967295|y>>>16),y=b+(N^j^g)+_[14]+4259657740&4294967295,b=N+(y<<23&4294967295|y>>>9),y=g+(b^N^j)+_[1]+2763975236&4294967295,g=b+(y<<4&4294967295|y>>>28),y=j+(g^b^N)+_[4]+1272893353&4294967295,j=g+(y<<11&4294967295|y>>>21),y=N+(j^g^b)+_[7]+4139469664&4294967295,N=j+(y<<16&4294967295|y>>>16),y=b+(N^j^g)+_[10]+3200236656&4294967295,b=N+(y<<23&4294967295|y>>>9),y=g+(b^N^j)+_[13]+681279174&4294967295,g=b+(y<<4&4294967295|y>>>28),y=j+(g^b^N)+_[0]+3936430074&4294967295,j=g+(y<<11&4294967295|y>>>21),y=N+(j^g^b)+_[3]+3572445317&4294967295,N=j+(y<<16&4294967295|y>>>16),y=b+(N^j^g)+_[6]+76029189&4294967295,b=N+(y<<23&4294967295|y>>>9),y=g+(b^N^j)+_[9]+3654602809&4294967295,g=b+(y<<4&4294967295|y>>>28),y=j+(g^b^N)+_[12]+3873151461&4294967295,j=g+(y<<11&4294967295|y>>>21),y=N+(j^g^b)+_[15]+530742520&4294967295,N=j+(y<<16&4294967295|y>>>16),y=b+(N^j^g)+_[2]+3299628645&4294967295,b=N+(y<<23&4294967295|y>>>9),y=g+(N^(b|~j))+_[0]+4096336452&4294967295,g=b+(y<<6&4294967295|y>>>26),y=j+(b^(g|~N))+_[7]+1126891415&4294967295,j=g+(y<<10&4294967295|y>>>22),y=N+(g^(j|~b))+_[14]+2878612391&4294967295,N=j+(y<<15&4294967295|y>>>17),y=b+(j^(N|~g))+_[5]+4237533241&4294967295,b=N+(y<<21&4294967295|y>>>11),y=g+(N^(b|~j))+_[12]+1700485571&4294967295,g=b+(y<<6&4294967295|y>>>26),y=j+(b^(g|~N))+_[3]+2399980690&4294967295,j=g+(y<<10&4294967295|y>>>22),y=N+(g^(j|~b))+_[10]+4293915773&4294967295,N=j+(y<<15&4294967295|y>>>17),y=b+(j^(N|~g))+_[1]+2240044497&4294967295,b=N+(y<<21&4294967295|y>>>11),y=g+(N^(b|~j))+_[8]+1873313359&4294967295,g=b+(y<<6&4294967295|y>>>26),y=j+(b^(g|~N))+_[15]+4264355552&4294967295,j=g+(y<<10&4294967295|y>>>22),y=N+(g^(j|~b))+_[6]+2734768916&4294967295,N=j+(y<<15&4294967295|y>>>17),y=b+(j^(N|~g))+_[13]+1309151649&4294967295,b=N+(y<<21&4294967295|y>>>11),y=g+(N^(b|~j))+_[4]+4149444226&4294967295,g=b+(y<<6&4294967295|y>>>26),y=j+(b^(g|~N))+_[11]+3174756917&4294967295,j=g+(y<<10&4294967295|y>>>22),y=N+(g^(j|~b))+_[2]+718787259&4294967295,N=j+(y<<15&4294967295|y>>>17),y=b+(j^(N|~g))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(N+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+N&4294967295,E.g[3]=E.g[3]+j&4294967295}n.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var b=g-this.blockSize,_=this.B,N=this.h,j=0;j<g;){if(N==0)for(;j<=b;)i(this,E,j),j+=this.blockSize;if(typeof E=="string"){for(;j<g;)if(_[N++]=E.charCodeAt(j++),N==this.blockSize){i(this,_),N=0;break}}else for(;j<g;)if(_[N++]=E[j++],N==this.blockSize){i(this,_),N=0;break}}this.h=N,this.o+=g},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var b=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=b&255,b/=256;for(this.u(E),E=Array(16),g=b=0;4>g;++g)for(var _=0;32>_;_+=8)E[b++]=this.g[g]>>>_&255;return E};function o(E,g){var b=u;return Object.prototype.hasOwnProperty.call(b,E)?b[E]:b[E]=g(E)}function l(E,g){this.h=g;for(var b=[],_=!0,N=E.length-1;0<=N;N--){var j=E[N]|0;_&&j==g||(b[N]=j,_=!1)}this.g=b}var u={};function h(E){return-128<=E&&128>E?o(E,function(g){return new l([g|0],0>g?-1:0)}):new l([E|0],0>E?-1:0)}function m(E){if(isNaN(E)||!isFinite(E))return x;if(0>E)return R(m(-E));for(var g=[],b=1,_=0;E>=b;_++)g[_]=E/b|0,b*=4294967296;return new l(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return R(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=m(Math.pow(g,8)),_=x,N=0;N<E.length;N+=8){var j=Math.min(8,E.length-N),y=parseInt(E.substring(N,N+j),g);8>j?(j=m(Math.pow(g,j)),_=_.j(j).add(m(y))):(_=_.j(b),_=_.add(m(y)))}return _}var x=h(0),v=h(1),w=h(16777216);s=l.prototype,s.m=function(){if(P(this))return-R(this).m();for(var E=0,g=1,b=0;b<this.g.length;b++){var _=this.i(b);E+=(0<=_?_:4294967296+_)*g,g*=4294967296}return E},s.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(P(this))return"-"+R(this).toString(E);for(var g=m(Math.pow(E,6)),b=this,_="";;){var N=Z(b,g).g;b=H(b,N.j(g));var j=((0<b.g.length?b.g[0]:b.h)>>>0).toString(E);if(b=N,C(b))return j+_;for(;6>j.length;)j="0"+j;_=j+_}},s.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function P(E){return E.h==-1}s.l=function(E){return E=H(this,E),P(E)?-1:C(E)?0:1};function R(E){for(var g=E.g.length,b=[],_=0;_<g;_++)b[_]=~E.g[_];return new l(b,~E.h).add(v)}s.abs=function(){return P(this)?R(this):this},s.add=function(E){for(var g=Math.max(this.g.length,E.g.length),b=[],_=0,N=0;N<=g;N++){var j=_+(this.i(N)&65535)+(E.i(N)&65535),y=(j>>>16)+(this.i(N)>>>16)+(E.i(N)>>>16);_=y>>>16,j&=65535,y&=65535,b[N]=y<<16|j}return new l(b,b[b.length-1]&-2147483648?-1:0)};function H(E,g){return E.add(R(g))}s.j=function(E){if(C(this)||C(E))return x;if(P(this))return P(E)?R(this).j(R(E)):R(R(this).j(E));if(P(E))return R(this.j(R(E)));if(0>this.l(w)&&0>E.l(w))return m(this.m()*E.m());for(var g=this.g.length+E.g.length,b=[],_=0;_<2*g;_++)b[_]=0;for(_=0;_<this.g.length;_++)for(var N=0;N<E.g.length;N++){var j=this.i(_)>>>16,y=this.i(_)&65535,ot=E.i(N)>>>16,Vs=E.i(N)&65535;b[2*_+2*N]+=y*Vs,z(b,2*_+2*N),b[2*_+2*N+1]+=j*Vs,z(b,2*_+2*N+1),b[2*_+2*N+1]+=y*ot,z(b,2*_+2*N+1),b[2*_+2*N+2]+=j*ot,z(b,2*_+2*N+2)}for(_=0;_<g;_++)b[_]=b[2*_+1]<<16|b[2*_];for(_=g;_<2*g;_++)b[_]=0;return new l(b,0)};function z(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function $(E,g){this.g=E,this.h=g}function Z(E,g){if(C(g))throw Error("division by zero");if(C(E))return new $(x,x);if(P(E))return g=Z(R(E),g),new $(R(g.g),R(g.h));if(P(g))return g=Z(E,R(g)),new $(R(g.g),g.h);if(30<E.g.length){if(P(E)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var b=v,_=g;0>=_.l(E);)b=Ie(b),_=Ie(_);var N=oe(b,1),j=oe(_,1);for(_=oe(_,2),b=oe(b,2);!C(_);){var y=j.add(_);0>=y.l(E)&&(N=N.add(b),j=y),_=oe(_,1),b=oe(b,1)}return g=H(E,N.j(g)),new $(N,g)}for(N=x;0<=E.l(g);){for(b=Math.max(1,Math.floor(E.m()/g.m())),_=Math.ceil(Math.log(b)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),j=m(b),y=j.j(g);P(y)||0<y.l(E);)b-=_,j=m(b),y=j.j(g);C(j)&&(j=v),N=N.add(j),E=H(E,y)}return new $(N,E)}s.A=function(E){return Z(this,E).h},s.and=function(E){for(var g=Math.max(this.g.length,E.g.length),b=[],_=0;_<g;_++)b[_]=this.i(_)&E.i(_);return new l(b,this.h&E.h)},s.or=function(E){for(var g=Math.max(this.g.length,E.g.length),b=[],_=0;_<g;_++)b[_]=this.i(_)|E.i(_);return new l(b,this.h|E.h)},s.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),b=[],_=0;_<g;_++)b[_]=this.i(_)^E.i(_);return new l(b,this.h^E.h)};function Ie(E){for(var g=E.g.length+1,b=[],_=0;_<g;_++)b[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(b,E.h)}function oe(E,g){var b=g>>5;g%=32;for(var _=E.g.length-b,N=[],j=0;j<_;j++)N[j]=0<g?E.i(j+b)>>>g|E.i(j+b+1)<<32-g:E.i(j+b);return new l(N,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Xu=n,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=f,Rt=l}).apply(typeof Kl<"u"?Kl:typeof self<"u"?self:typeof window<"u"?window:{});var rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zu,tn,eh,fr,ra,th,sh,nh;(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof rr=="object"&&rr];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,c){if(c)e:{var d=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var T=a[p];if(!(T in d))break e;d=d[T]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function o(a,c){a instanceof String&&(a+="");var d=0,p=!1,T={next:function(){if(!p&&d<a.length){var I=d++;return{value:c(I,a[I]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(a){return a||function(){return o(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function m(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function x(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),a.apply(c,T)}}return function(){return a.apply(c,arguments)}}function v(a,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:x,v.apply(null,arguments)}function w(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,T,I){for(var D=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)D[ee-2]=arguments[ee];return c.prototype[T].apply(p,D)}}function P(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function R(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(h(p)){const T=a.length||0,I=p.length||0;a.length=T+I;for(let D=0;D<I;D++)a[T+D]=p[D]}else a.push(p)}}class H{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function Z(a){return Z[" "](a),a}Z[" "]=function(){};var Ie=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function oe(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(a,c){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)a[d]=p[d];for(let I=0;I<b.length;I++)d=b[I],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function N(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function j(a){u.setTimeout(()=>{throw a},0)}function y(){var a=ui;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ot{constructor(){this.h=this.g=null}add(c,d){const p=Vs.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Vs=new H(()=>new Sd,a=>a.reset());class Sd{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Os,Ms=!1,ui=new ot,fo=()=>{const a=u.Promise.resolve(void 0);Os=()=>{a.then(Cd)}};var Cd=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){j(d)}var c=Vs;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}Ms=!1};function bt(){this.s=this.s,this.C=this.C}bt.prototype.s=!1,bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Rd=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};u.addEventListener("test",d,c),u.removeEventListener("test",d,c)}catch{}return a}();function Ls(a,c){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(Ie){e:{try{Z(c.nodeName);var T=!0;break e}catch{}T=!1}T||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pd[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ls.aa.h.call(this)}}C(Ls,be);var Pd={2:"touch",3:"pen",4:"mouse"};Ls.prototype.h=function(){Ls.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),kd=0;function Dd(a,c,d,p,T){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=T,this.key=++kd,this.da=this.fa=!1}function Ln(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Un(a){this.src=a,this.g={},this.h=0}Un.prototype.add=function(a,c,d,p,T){var I=a.toString();a=this.g[I],a||(a=this.g[I]=[],this.h++);var D=di(a,c,p,T);return-1<D?(c=a[D],d||(c.fa=!1)):(c=new Dd(c,this.src,I,!!p,T),c.fa=d,a.push(c)),c};function hi(a,c){var d=c.type;if(d in a.g){var p=a.g[d],T=Array.prototype.indexOf.call(p,c,void 0),I;(I=0<=T)&&Array.prototype.splice.call(p,T,1),I&&(Ln(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function di(a,c,d,p){for(var T=0;T<a.length;++T){var I=a[T];if(!I.da&&I.listener==c&&I.capture==!!d&&I.ha==p)return T}return-1}var mi="closure_lm_"+(1e6*Math.random()|0),pi={};function go(a,c,d,p,T){if(Array.isArray(c)){for(var I=0;I<c.length;I++)go(a,c[I],d,p,T);return null}return d=bo(d),a&&a[Mn]?a.K(c,d,m(p)?!!p.capture:!1,T):Vd(a,c,d,!1,p,T)}function Vd(a,c,d,p,T,I){if(!c)throw Error("Invalid event type");var D=m(T)?!!T.capture:!!T,ee=gi(a);if(ee||(a[mi]=ee=new Un(a)),d=ee.add(c,d,p,D,I),d.proxy)return d;if(p=Od(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Rd||(T=D),T===void 0&&(T=!1),a.addEventListener(c.toString(),p,T);else if(a.attachEvent)a.attachEvent(yo(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Od(){function a(d){return c.call(a.src,a.listener,d)}const c=Md;return a}function xo(a,c,d,p,T){if(Array.isArray(c))for(var I=0;I<c.length;I++)xo(a,c[I],d,p,T);else p=m(p)?!!p.capture:!!p,d=bo(d),a&&a[Mn]?(a=a.i,c=String(c).toString(),c in a.g&&(I=a.g[c],d=di(I,d,p,T),-1<d&&(Ln(I[d]),Array.prototype.splice.call(I,d,1),I.length==0&&(delete a.g[c],a.h--)))):a&&(a=gi(a))&&(c=a.g[c.toString()],a=-1,c&&(a=di(c,d,p,T)),(d=-1<a?c[a]:null)&&fi(d))}function fi(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Mn])hi(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(yo(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=gi(c))?(hi(d,a),d.h==0&&(d.src=null,c[mi]=null)):Ln(a)}}}function yo(a){return a in pi?pi[a]:pi[a]="on"+a}function Md(a,c){if(a.da)a=!0;else{c=new Ls(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&fi(a),a=d.call(p,c)}return a}function gi(a){return a=a[mi],a instanceof Un?a:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function bo(a){return typeof a=="function"?a:(a[xi]||(a[xi]=function(c){return a.handleEvent(c)}),a[xi])}function ve(){bt.call(this),this.i=new Un(this),this.M=this,this.F=null}C(ve,bt),ve.prototype[Mn]=!0,ve.prototype.removeEventListener=function(a,c,d,p){xo(this,a,c,d,p)};function Ae(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new be(c,a);else if(c instanceof be)c.target=c.target||a;else{var T=c;c=new be(p,a),_(c,T)}if(T=!0,d)for(var I=d.length-1;0<=I;I--){var D=c.g=d[I];T=Fn(D,p,!0,c)&&T}if(D=c.g=a,T=Fn(D,p,!0,c)&&T,T=Fn(D,p,!1,c)&&T,d)for(I=0;I<d.length;I++)D=c.g=d[I],T=Fn(D,p,!1,c)&&T}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Ln(d[p]);delete a.g[c],a.h--}}this.F=null},ve.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},ve.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Fn(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,I=0;I<c.length;++I){var D=c[I];if(D&&!D.da&&D.capture==d){var ee=D.listener,fe=D.ha||D.src;D.fa&&hi(a.i,D),T=ee.call(fe,p)!==!1&&T}}return T&&!p.defaultPrevented}function vo(a,c,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(a,c||0)}function _o(a){a.g=vo(()=>{a.g=null,a.i&&(a.i=!1,_o(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ld extends bt{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:_o(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(a){bt.call(this),this.h=a,this.g={}}C(Us,bt);var wo=[];function No(a){oe(a.g,function(c,d){this.g.hasOwnProperty(d)&&fi(c)},a),a.g={}}Us.prototype.N=function(){Us.aa.N.call(this),No(this)},Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yi=u.JSON.stringify,Ud=u.JSON.parse,Fd=class{stringify(a){return u.JSON.stringify(a,void 0)}parse(a){return u.JSON.parse(a,void 0)}};function bi(){}bi.prototype.h=null;function Eo(a){return a.h||(a.h=a.i())}function To(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vi(){be.call(this,"d")}C(vi,be);function _i(){be.call(this,"c")}C(_i,be);var qt={},jo=null;function Bn(){return jo=jo||new ve}qt.La="serverreachability";function Io(a){be.call(this,qt.La,a)}C(Io,be);function Bs(a){const c=Bn();Ae(c,new Io(c))}qt.STAT_EVENT="statevent";function Ao(a,c){be.call(this,qt.STAT_EVENT,a),this.stat=c}C(Ao,be);function Se(a){const c=Bn();Ae(c,new Ao(c,a))}qt.Ma="timingevent";function So(a,c){be.call(this,qt.Ma,a),this.size=c}C(So,be);function $s(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},c)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function Bd(a,c,d,p,T,I){a.info(function(){if(a.g)if(I)for(var D="",ee=I.split("&"),fe=0;fe<ee.length;fe++){var J=ee[fe].split("=");if(1<J.length){var _e=J[0];J=J[1];var we=_e.split("_");D=2<=we.length&&we[1]=="type"?D+(_e+"="+J+"&"):D+(_e+"=redacted&")}}else D=null;else D=I;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+c+`
`+d+`
`+D})}function $d(a,c,d,p,T,I,D){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+c+`
`+d+`
`+I+" "+D})}function us(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Hd(a,d)+(p?" "+p:"")})}function qd(a,c){a.info(function(){return"TIMEOUT: "+c})}qs.prototype.info=function(){};function Hd(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var I=T[0];if(I!="noop"&&I!="stop"&&I!="close")for(var D=1;D<T.length;D++)T[D]=""}}}}return yi(d)}catch{return c}}var $n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Co={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wi;function qn(){}C(qn,bi),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},wi=new qn;function vt(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ro}function Ro(){this.i=null,this.g="",this.h=!1}var Po={},Ni={};function Ei(a,c,d){a.L=1,a.v=Gn(lt(c)),a.m=d,a.P=!0,ko(a,null)}function ko(a,c){a.F=Date.now(),Hn(a),a.A=lt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Go(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Ro,a.g=hl(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Ld(v(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var T="readystatechange";Array.isArray(T)||(T&&(wo[0]=T.toString()),T=wo);for(var I=0;I<T.length;I++){var D=go(d,T[I],p||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Bs(),Bd(a.i,a.u,a.A,a.l,a.R,a.m)}vt.prototype.ca=function(a){a=a.target;const c=this.M;c&&ct(a)==3?c.j():this.Y(a)},vt.prototype.Y=function(a){try{if(a==this.g)e:{const we=ct(this.g);var c=this.g.Ba();const ms=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||el(this.g)))){this.J||we!=4||c==7||(c==8||0>=ms?Bs(3):Bs(2)),Ti(this);var d=this.g.Z();this.X=d;t:if(Do(this)){var p=el(this.g);a="";var T=p.length,I=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Hs(this);var D="";break t}this.h.i=new u.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(I&&c==T-1)});p.length=0,this.h.g+=a,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=d==200,$d(this.i,this.u,this.A,this.l,this.R,we,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,fe=this.g;if((ee=fe.g?fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(ee)){var J=ee;break t}}J=null}if(d=J)us(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ji(this,d);else{this.o=!1,this.s=3,Se(12),Ht(this),Hs(this);break e}}if(this.P){d=!0;let Be;for(;!this.J&&this.C<D.length;)if(Be=Wd(this,D),Be==Ni){we==4&&(this.s=4,Se(14),d=!1),us(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==Po){this.s=4,Se(15),us(this.i,this.l,D,"[Invalid Chunk]"),d=!1;break}else us(this.i,this.l,Be,null),ji(this,Be);if(Do(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||D.length!=0||this.h.h||(this.s=1,Se(16),d=!1),this.o=this.o&&d,!d)us(this.i,this.l,D,"[Invalid Chunked Response]"),Ht(this),Hs(this);else if(0<D.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Pi(_e),_e.M=!0,Se(11))}}else us(this.i,this.l,D,null),ji(this,D);we==4&&Ht(this),this.o&&!this.J&&(we==4?ol(this.j,this):(this.o=!1,Hn(this)))}else lm(this.g),d==400&&0<D.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),Ht(this),Hs(this)}}}catch{}finally{}};function Do(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Wd(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Ni:(d=Number(c.substring(d,p)),isNaN(d)?Po:(p+=1,p+d>c.length?Ni:(c=c.slice(p,p+d),a.C=p+d,c)))}vt.prototype.cancel=function(){this.J=!0,Ht(this)};function Hn(a){a.S=Date.now()+a.I,Vo(a,a.I)}function Vo(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=$s(v(a.ba,a),c)}function Ti(a){a.B&&(u.clearTimeout(a.B),a.B=null)}vt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qd(this.i,this.A),this.L!=2&&(Bs(),Se(17)),Ht(this),this.s=2,Hs(this)):Vo(this,this.S-a)};function Hs(a){a.j.G==0||a.J||ol(a.j,a)}function Ht(a){Ti(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,No(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ji(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ii(d.h,a))){if(!a.K&&Ii(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Zn(d),Jn(d);else break e;Ri(d),Se(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=$s(v(d.Za,d),6e3));if(1>=Lo(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else zt(d,11)}else if((a.K||d.g==a)&&Zn(d),!z(c))for(T=d.Da.g.parse(c),c=0;c<T.length;c++){let J=T[c];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const _e=J[3];_e!=null&&(d.la=_e,d.j.info("VER="+d.la));const we=J[4];we!=null&&(d.Aa=we,d.j.info("SVER="+d.Aa));const ms=J[5];ms!=null&&typeof ms=="number"&&0<ms&&(p=1.5*ms,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Be=a.g;if(Be){const tr=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tr){var I=p.h;I.g||tr.indexOf("spdy")==-1&&tr.indexOf("quic")==-1&&tr.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Ai(I,I.h),I.h=null))}if(p.D){const ki=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;ki&&(p.ya=ki,te(p.I,p.D,ki))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var D=a;if(p.qa=ul(p,p.J?p.ia:null,p.W),D.K){Uo(p.h,D);var ee=D,fe=p.L;fe&&(ee.I=fe),ee.B&&(Ti(ee),Hn(ee)),p.g=D}else il(p);0<d.i.length&&Xn(d)}else J[0]!="stop"&&J[0]!="close"||zt(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?zt(d,7):Ci(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}Bs(4)}catch{}}var zd=class{constructor(a,c){this.g=a,this.map=c}};function Oo(a){this.l=a||10,u.PerformanceNavigationTiming?(a=u.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mo(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lo(a){return a.h?1:a.g?a.g.size:0}function Ii(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ai(a,c){a.g?a.g.add(c):a.h=c}function Uo(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Oo.prototype.cancel=function(){if(this.i=Fo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Fo(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return P(a.i)}function Gd(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(h(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function Kd(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(h(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Bo(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(h(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Kd(a),p=Gd(a),T=p.length,I=0;I<T;I++)c.call(void 0,p[I],d&&d[I],a)}var $o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qd(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),T=null;if(0<=p){var I=a[d].substring(0,p);T=a[d].substring(p+1)}else I=a[d];c(I,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Wt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wt){this.h=a.h,Wn(this,a.j),this.o=a.o,this.g=a.g,zn(this,a.s),this.l=a.l;var c=a.i,d=new Gs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),qo(this,d),this.m=a.m}else a&&(c=String(a).match($o))?(this.h=!1,Wn(this,c[1]||"",!0),this.o=Ws(c[2]||""),this.g=Ws(c[3]||"",!0),zn(this,c[4]),this.l=Ws(c[5]||"",!0),qo(this,c[6]||"",!0),this.m=Ws(c[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}Wt.prototype.toString=function(){var a=[],c=this.j;c&&a.push(zs(c,Ho,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(zs(c,Ho,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zs(d,d.charAt(0)=="/"?Xd:Jd,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zs(d,em)),a.join("")};function lt(a){return new Wt(a)}function Wn(a,c,d){a.j=d?Ws(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function zn(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function qo(a,c,d){c instanceof Gs?(a.i=c,tm(a.i,a.h)):(d||(c=zs(c,Zd)),a.i=new Gs(c,a.h))}function te(a,c,d){a.i.set(c,d)}function Gn(a){return te(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ws(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Yd),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yd(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ho=/[#\/\?@]/g,Jd=/[#\?:]/g,Xd=/[#\?]/g,Zd=/[#\?@]/g,em=/#/g;function Gs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function _t(a){a.g||(a.g=new Map,a.h=0,a.i&&Qd(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}s=Gs.prototype,s.add=function(a,c){_t(this),this.i=null,a=hs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Wo(a,c){_t(a),c=hs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function zo(a,c){return _t(a),c=hs(a,c),a.g.has(c)}s.forEach=function(a,c){_t(this),this.g.forEach(function(d,p){d.forEach(function(T){a.call(c,T,p,this)},this)},this)},s.na=function(){_t(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const T=a[p];for(let I=0;I<T.length;I++)d.push(c[p])}return d},s.V=function(a){_t(this);let c=[];if(typeof a=="string")zo(this,a)&&(c=c.concat(this.g.get(hs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},s.set=function(a,c){return _t(this),this.i=null,a=hs(this,a),zo(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},s.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Go(a,c,d){Wo(a,c),0<d.length&&(a.i=null,a.g.set(hs(a,c),P(d)),a.h+=d.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const I=encodeURIComponent(String(p)),D=this.V(p);for(p=0;p<D.length;p++){var T=I;D[p]!==""&&(T+="="+encodeURIComponent(String(D[p]))),a.push(T)}}return this.i=a.join("&")};function hs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function tm(a,c){c&&!a.j&&(_t(a),a.i=null,a.g.forEach(function(d,p){var T=p.toLowerCase();p!=T&&(Wo(this,p),Go(this,T,d))},a)),a.j=c}function sm(a,c){const d=new qs;if(u.Image){const p=new Image;p.onload=w(wt,d,"TestLoadImage: loaded",!0,c,p),p.onerror=w(wt,d,"TestLoadImage: error",!1,c,p),p.onabort=w(wt,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=w(wt,d,"TestLoadImage: timeout",!1,c,p),u.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function nm(a,c){const d=new qs,p=new AbortController,T=setTimeout(()=>{p.abort(),wt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(I=>{clearTimeout(T),I.ok?wt(d,"TestPingServer: ok",!0,c):wt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),wt(d,"TestPingServer: error",!1,c)})}function wt(a,c,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function rm(){this.g=new Fd}function im(a,c,d){const p=d||"";try{Bo(a,function(T,I){let D=T;m(T)&&(D=yi(T)),c.push(p+I+"="+encodeURIComponent(D))})}catch(T){throw c.push(p+"type="+encodeURIComponent("_badmap")),T}}function Kn(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Kn,bi),Kn.prototype.g=function(){return new Qn(this.l,this.j)},Kn.prototype.i=function(a){return function(){return a}}({});function Qn(a,c){ve.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Qn,ve),s=Qn.prototype,s.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Qs(this)},s.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},s.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qs(this)),this.g&&(this.readyState=3,Qs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ko(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ko(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}s.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ks(this):Qs(this),this.readyState==3&&Ko(this)}},s.Ra=function(a){this.g&&(this.response=this.responseText=a,Ks(this))},s.Qa=function(a){this.g&&(this.response=a,Ks(this))},s.ga=function(){this.g&&Ks(this)};function Ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qs(a)}s.setRequestHeader=function(a,c){this.u.append(a,c)},s.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Qs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qo(a){let c="";return oe(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Si(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Qo(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):te(a,c,d))}function ie(a){ve.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ie,ve);var am=/^https?$/i,om=["POST","PUT"];s=ie.prototype,s.Ha=function(a){this.J=a},s.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wi.g(),this.v=this.o?Eo(this.o):Eo(wi),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(I){Yo(this,I);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const I of p.keys())d.set(I,p.get(I));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(I=>I.toLowerCase()=="content-type"),T=u.FormData&&a instanceof u.FormData,!(0<=Array.prototype.indexOf.call(om,c,void 0))||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,D]of d)this.g.setRequestHeader(I,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zo(this),this.u=!0,this.g.send(a),this.u=!1}catch(I){Yo(this,I)}};function Yo(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Jo(a),Yn(a)}function Jo(a){a.A||(a.A=!0,Ae(a,"complete"),Ae(a,"error"))}s.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ae(this,"complete"),Ae(this,"abort"),Yn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yn(this,!0)),ie.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Xo(this):this.bb())},s.bb=function(){Xo(this)};function Xo(a){if(a.h&&typeof l<"u"&&(!a.v[1]||ct(a)!=4||a.Z()!=2)){if(a.u&&ct(a)==4)vo(a.Ea,0,a);else if(Ae(a,"readystatechange"),ct(a)==4){a.h=!1;try{const D=a.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=D===0){var T=String(a.D).match($o)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),p=!am.test(T?T.toLowerCase():"")}d=p}if(d)Ae(a,"complete"),Ae(a,"success");else{a.m=6;try{var I=2<ct(a)?a.g.statusText:""}catch{I=""}a.l=I+" ["+a.Z()+"]",Jo(a)}}finally{Yn(a)}}}}function Yn(a,c){if(a.g){Zo(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Ae(a,"ready");try{d.onreadystatechange=p}catch{}}}function Zo(a){a.I&&(u.clearTimeout(a.I),a.I=null)}s.isActive=function(){return!!this.g};function ct(a){return a.g?a.g.readyState:0}s.Z=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ud(c)}};function el(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function lm(a){const c={};a=(a.g&&2<=ct(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(z(a[p]))continue;var d=N(a[p]);const T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const I=c[T]||[];c[T]=I,I.push(d)}E(c,function(p){return p.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ys(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function tl(a){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ys("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ys("baseRetryDelayMs",5e3,a),this.cb=Ys("retryDelaySeedMs",1e4,a),this.Wa=Ys("forwardChannelMaxRetries",2,a),this.wa=Ys("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Oo(a&&a.concurrentRequestLimit),this.Da=new rm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=tl.prototype,s.la=8,s.G=1,s.connect=function(a,c,d,p){Se(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=ul(this,null,this.W),Xn(this)};function Ci(a){if(sl(a),a.G==3){var c=a.U++,d=lt(a.I);if(te(d,"SID",a.K),te(d,"RID",c),te(d,"TYPE","terminate"),Js(a,d),c=new vt(a,a.j,c),c.L=2,c.v=Gn(lt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=c.v,d=!0),d||(c.g=hl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Hn(c)}cl(a)}function Jn(a){a.g&&(Pi(a),a.g.cancel(),a.g=null)}function sl(a){Jn(a),a.u&&(u.clearTimeout(a.u),a.u=null),Zn(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&u.clearTimeout(a.s),a.s=null)}function Xn(a){if(!Mo(a.h)&&!a.s){a.s=!0;var c=a.Ga;Os||fo(),Ms||(Os(),Ms=!0),ui.add(c,a),a.B=0}}function cm(a,c){return Lo(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=$s(v(a.Ga,a,c),ll(a,a.B)),a.B++,!0)}s.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const T=new vt(this,this.j,a);let I=this.o;if(this.S&&(I?(I=g(I),_(I,this.S)):I=this.S),this.m!==null||this.O||(T.H=I,I=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=rl(this,T,c),d=lt(this.I),te(d,"RID",a),te(d,"CVER",22),this.D&&te(d,"X-HTTP-Session-Id",this.D),Js(this,d),I&&(this.O?c="headers="+encodeURIComponent(String(Qo(I)))+"&"+c:this.m&&Si(d,this.m,I)),Ai(this.h,T),this.Ua&&te(d,"TYPE","init"),this.P?(te(d,"$req",c),te(d,"SID","null"),T.T=!0,Ei(T,d,null)):Ei(T,d,c),this.G=2}}else this.G==3&&(a?nl(this,a):this.i.length==0||Mo(this.h)||nl(this))};function nl(a,c){var d;c?d=c.l:d=a.U++;const p=lt(a.I);te(p,"SID",a.K),te(p,"RID",d),te(p,"AID",a.T),Js(a,p),a.m&&a.o&&Si(p,a.m,a.o),d=new vt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=rl(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ai(a.h,d),Ei(d,p,c)}function Js(a,c){a.H&&oe(a.H,function(d,p){te(c,p,d)}),a.l&&Bo({},function(d,p){te(c,p,d)})}function rl(a,c,d){d=Math.min(a.i.length,d);var p=a.l?v(a.l.Na,a.l,a):null;e:{var T=a.i;let I=-1;for(;;){const D=["count="+d];I==-1?0<d?(I=T[0].g,D.push("ofs="+I)):I=0:D.push("ofs="+I);let ee=!0;for(let fe=0;fe<d;fe++){let J=T[fe].g;const _e=T[fe].map;if(J-=I,0>J)I=Math.max(0,T[fe].g-100),ee=!1;else try{im(_e,D,"req"+J+"_")}catch{p&&p(_e)}}if(ee){p=D.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function il(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Os||fo(),Ms||(Os(),Ms=!0),ui.add(c,a),a.v=0}}function Ri(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=$s(v(a.Fa,a),ll(a,a.v)),a.v++,!0)}s.Fa=function(){if(this.u=null,al(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=$s(v(this.ab,this),a)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),Jn(this),al(this))};function Pi(a){a.A!=null&&(u.clearTimeout(a.A),a.A=null)}function al(a){a.g=new vt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=lt(a.qa);te(c,"RID","rpc"),te(c,"SID",a.K),te(c,"AID",a.T),te(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&te(c,"TO",a.ja),te(c,"TYPE","xmlhttp"),Js(a,c),a.m&&a.o&&Si(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Gn(lt(c)),d.m=null,d.P=!0,ko(d,a)}s.Za=function(){this.C!=null&&(this.C=null,Jn(this),Ri(this),Se(19))};function Zn(a){a.C!=null&&(u.clearTimeout(a.C),a.C=null)}function ol(a,c){var d=null;if(a.g==c){Zn(a),Pi(a),a.g=null;var p=2}else if(Ii(a.h,c))d=c.D,Uo(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var T=a.B;p=Bn(),Ae(p,new So(p,d)),Xn(a)}else il(a);else if(T=c.s,T==3||T==0&&0<c.X||!(p==1&&cm(a,c)||p==2&&Ri(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),T){case 1:zt(a,5);break;case 4:zt(a,10);break;case 3:zt(a,6);break;default:zt(a,2)}}}function ll(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function zt(a,c){if(a.j.info("Error code "+c),c==2){var d=v(a.fb,a),p=a.Xa;const T=!p;p=new Wt(p||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Wn(p,"https"),Gn(p),T?sm(p.toString(),d):nm(p.toString(),d)}else Se(2);a.G=0,a.l&&a.l.sa(c),cl(a),sl(a)}s.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function cl(a){if(a.G=0,a.ka=[],a.l){const c=Fo(a.h);(c.length!=0||a.i.length!=0)&&(R(a.ka,c),R(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function ul(a,c,d){var p=d instanceof Wt?lt(d):new Wt(d);if(p.g!="")c&&(p.g=c+"."+p.g),zn(p,p.s);else{var T=u.location;p=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var I=new Wt(null);p&&Wn(I,p),c&&(I.g=c),T&&zn(I,T),d&&(I.l=d),p=I}return d=a.D,c=a.ya,d&&c&&te(p,d,c),te(p,"VER",a.la),Js(a,p),p}function hl(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ie(new Kn({eb:d})):new ie(a.pa),c.Ha(a.J),c}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function dl(){}s=dl.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function er(){}er.prototype.g=function(a,c){return new De(a,c)};function De(a,c){ve.call(this),this.g=new tl(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!z(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ds(this)}C(De,ve),De.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){Ci(this.g)},De.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=yi(a),a=d);c.i.push(new zd(c.Ya++,a)),c.G==3&&Xn(c)},De.prototype.N=function(){this.g.l=null,delete this.j,Ci(this.g),delete this.g,De.aa.N.call(this)};function ml(a){vi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(ml,vi);function pl(){_i.call(this),this.status=1}C(pl,_i);function ds(a){this.g=a}C(ds,dl),ds.prototype.ua=function(){Ae(this.g,"a")},ds.prototype.ta=function(a){Ae(this.g,new ml(a))},ds.prototype.sa=function(a){Ae(this.g,new pl)},ds.prototype.ra=function(){Ae(this.g,"b")},er.prototype.createWebChannel=er.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,nh=function(){return new er},sh=function(){return Bn()},th=qt,ra={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$n.NO_ERROR=0,$n.TIMEOUT=8,$n.HTTP_ERROR=6,fr=$n,Co.COMPLETE="complete",eh=Co,To.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",ve.prototype.listen=ve.prototype.K,tn=To,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,Zu=ie}).apply(typeof rr<"u"?rr:typeof self<"u"?self:typeof window<"u"?window:{});const Ql="@firebase/firestore",Yl="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Ta("@firebase/firestore");function ps(){return ts.logLevel}function V(s,...e){if(ts.logLevel<=G.DEBUG){const t=e.map(Oa);ts.debug(`Firestore (${Rs}): ${s}`,...t)}}function xt(s,...e){if(ts.logLevel<=G.ERROR){const t=e.map(Oa);ts.error(`Firestore (${Rs}): ${s}`,...t)}}function Es(s,...e){if(ts.logLevel<=G.WARN){const t=e.map(Oa);ts.warn(`Firestore (${Rs}): ${s}`,...t)}}function Oa(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,rh(s,n,t)}function rh(s,e,t){let n=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw xt(n),new Error(n)}function X(s,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,s||rh(e,i,n)}function B(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends it{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ex{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class Tx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jx{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let o=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Pt,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Pt)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(X(typeof n.accessToken=="string",31837,{l:n}),new ih(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Ee(e)}}class Ix{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ax{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Ix(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sx{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const n=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Jl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Cx(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<t&&(n+=e.charAt(i[o]%62))}return n}}function K(s,e){return s<e?-1:s>e?1:0}function ia(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const i=s.charAt(n),o=e.charAt(n);if(i!==o)return Bi(i)===Bi(o)?K(i,o):Bi(i)?1:-1}return K(s.length,e.length)}const Rx=55296,Px=57343;function Bi(s){const e=s.charCodeAt(0);return e>=Rx&&e<=Px}function Ts(s,e,t){return s.length===e.length&&s.every((n,i)=>t(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="__name__";class Ge{constructor(e,t,n){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&U(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ge?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const o=Ge.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return K(e.length,t.length)}static compareSegments(e,t){const n=Ge.isNumericId(e),i=Ge.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Ge.extractNumericId(e).compare(Ge.extractNumericId(t)):ia(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rt.fromString(e.substring(4,e.length-2))}}class ne extends Ge{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const kx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends Ge{construct(e,t,n){return new xe(e,t,n)}static isValidIdentifier(e){return kx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xl}static keyField(){return new xe([Xl])}static fromServerFormat(e){const t=[];let n="",i=0;const o=()=>{if(n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let l=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,i+=2}else u==="`"?(l=!l,i++):u!=="."||l?(n+=u,i++):(o(),i++)}if(o(),l)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(t)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ne.fromString(e))}static fromName(e){return new M(ne.fromString(e).popFirst(5))}static empty(){return new M(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(s,e,t){if(!t)throw new O(S.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function Vx(s,e,t,n){if(e===!0&&n===!0)throw new O(S.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Zl(s){if(!M.isDocumentKey(s))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function ah(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function La(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":U(12329,{type:typeof s})}function yn(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=La(s);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(s,e){const t={typeString:s};return e&&(t.value=e),t}function Pn(s,e){if(!ah(s))throw new O(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,o="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const l=s[n];if(i&&typeof l!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){t=`Expected '${n}' field to equal '${o.value}'`;break}}if(t)throw new O(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=-62135596800,tc=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*tc);return new se(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ec)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tc}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pn(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ec;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:ce("string",se._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new se(0,0))}static max(){return new F(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=-1;function Ox(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,i=F.fromTimestamp(n===1e9?new se(t+1,0):new se(t,n));return new Vt(i,M.empty(),e)}function Mx(s){return new Vt(s.readTime,s.key,bn)}class Vt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Vt(F.min(),M.empty(),bn)}static max(){return new Vt(F.max(),M.empty(),bn)}}function Lx(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(s.documentKey,e.documentKey),t!==0?t:K(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(s){if(s.code!==S.FAILED_PRECONDITION||s.message!==Ux)throw s;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,n)=>{t(e)})}static reject(e){return new A((t,n)=>{n(e)})}static waitFor(e){return new A((t,n)=>{let i=0,o=0,l=!1;e.forEach(u=>{++i,u.next(()=>{++o,l&&o===i&&t()},h=>n(h))}),l=!0,o===i&&t()})}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next(i=>i?A.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,o)=>{n.push(t.call(this,i,o))}),this.waitFor(n)}static mapArray(e,t){return new A((n,i)=>{const o=e.length,l=new Array(o);let u=0;for(let h=0;h<o;h++){const m=h;t(e[m]).next(f=>{l[m]=f,++u,u===o&&n(l)},f=>i(f))}})}static doWhile(e,t){return new A((n,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):n()};o()})}}function Bx(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ks(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Jr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=-1;function Xr(s){return s==null}function Pr(s){return s===0&&1/s==-1/0}function $x(s){return typeof s=="number"&&Number.isInteger(s)&&!Pr(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="";function qx(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=sc(e)),e=Hx(s.get(t),e);return sc(e)}function Hx(s,e){let t=e;const n=s.length;for(let i=0;i<n;i++){const o=s.charAt(i);switch(o){case"\0":t+="";break;case oh:t+="";break;default:t+=o}}return t}function sc(s){return s+oh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function as(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function lh(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ir(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ir(this.root,e,this.comparator,!1)}getReverseIterator(){return new ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ir(this.root,e,this.comparator,!0)}}class ir{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,n,i,o){this.key=e,this.value=t,this.color=n??ge.RED,this.left=i??ge.EMPTY,this.right=o??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,o){return new ge(e??this.key,t??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,n),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,n,i,o){return this}insert(e,t,n){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rc(this.data.getIterator())}getIteratorFrom(e){return new rc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class rc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new He([])}unionWith(e){let t=new he(xe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new He(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ch("Invalid base64 string: "+o):o}}(e);return new ye(t)}static fromUint8Array(e){const t=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(s){if(X(!!s,39018),typeof s=="string"){let e=0;const t=Wx.exec(s);if(X(!!t,46558,{timestamp:s}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ae(s.seconds),nanos:ae(s.nanos)}}function ae(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Mt(s){return typeof s=="string"?ye.fromBase64String(s):ye.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="server_timestamp",hh="__type__",dh="__previous_value__",mh="__local_write_time__";function Fa(s){return(s?.mapValue?.fields||{})[hh]?.stringValue===uh}function Zr(s){const e=s.mapValue.fields[dh];return Fa(e)?Zr(e):e}function vn(s){const e=Ot(s.mapValue.fields[mh].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,t,n,i,o,l,u,h,m,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=m,this.isUsingEmulator=f}}const kr="(default)";class _n{constructor(e,t){this.projectId=e,this.database=t||kr}static empty(){return new _n("","")}get isDefaultDatabase(){return this.database===kr}isEqual(e){return e instanceof _n&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="__type__",Gx="__max__",ar={mapValue:{}},fh="__vector__",Dr="value";function Lt(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Fa(s)?4:Qx(s)?9007199254740991:Kx(s)?10:11:U(28295,{value:s})}function st(s,e){if(s===e)return!0;const t=Lt(s);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return vn(s).isEqual(vn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=Ot(i.timestampValue),u=Ot(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(i,o){return Mt(i.bytesValue).isEqual(Mt(o.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(i,o){return ae(i.geoPointValue.latitude)===ae(o.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(o.geoPointValue.longitude)}(s,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ae(i.integerValue)===ae(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=ae(i.doubleValue),u=ae(o.doubleValue);return l===u?Pr(l)===Pr(u):isNaN(l)&&isNaN(u)}return!1}(s,e);case 9:return Ts(s.arrayValue.values||[],e.arrayValue.values||[],st);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(nc(l)!==nc(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!st(l[h],u[h])))return!1;return!0}(s,e);default:return U(52216,{left:s})}}function wn(s,e){return(s.values||[]).find(t=>st(t,e))!==void 0}function js(s,e){if(s===e)return 0;const t=Lt(s),n=Lt(e);if(t!==n)return K(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(s.booleanValue,e.booleanValue);case 2:return function(o,l){const u=ae(o.integerValue||o.doubleValue),h=ae(l.integerValue||l.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(s,e);case 3:return ic(s.timestampValue,e.timestampValue);case 4:return ic(vn(s),vn(e));case 5:return ia(s.stringValue,e.stringValue);case 6:return function(o,l){const u=Mt(o),h=Mt(l);return u.compareTo(h)}(s.bytesValue,e.bytesValue);case 7:return function(o,l){const u=o.split("/"),h=l.split("/");for(let m=0;m<u.length&&m<h.length;m++){const f=K(u[m],h[m]);if(f!==0)return f}return K(u.length,h.length)}(s.referenceValue,e.referenceValue);case 8:return function(o,l){const u=K(ae(o.latitude),ae(l.latitude));return u!==0?u:K(ae(o.longitude),ae(l.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return ac(s.arrayValue,e.arrayValue);case 10:return function(o,l){const u=o.fields||{},h=l.fields||{},m=u[Dr]?.arrayValue,f=h[Dr]?.arrayValue,x=K(m?.values?.length||0,f?.values?.length||0);return x!==0?x:ac(m,f)}(s.mapValue,e.mapValue);case 11:return function(o,l){if(o===ar.mapValue&&l===ar.mapValue)return 0;if(o===ar.mapValue)return 1;if(l===ar.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),m=l.fields||{},f=Object.keys(m);h.sort(),f.sort();for(let x=0;x<h.length&&x<f.length;++x){const v=ia(h[x],f[x]);if(v!==0)return v;const w=js(u[h[x]],m[f[x]]);if(w!==0)return w}return K(h.length,f.length)}(s.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function ic(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return K(s,e);const t=Ot(s),n=Ot(e),i=K(t.seconds,n.seconds);return i!==0?i:K(t.nanos,n.nanos)}function ac(s,e){const t=s.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const o=js(t[i],n[i]);if(o)return o}return K(t.length,n.length)}function Is(s){return aa(s)}function aa(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(t){const n=Ot(t);return`time(${n.seconds},${n.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(t){return Mt(t).toBase64()}(s.bytesValue):"referenceValue"in s?function(t){return M.fromName(t).toString()}(s.referenceValue):"geoPointValue"in s?function(t){return`geo(${t.latitude},${t.longitude})`}(s.geoPointValue):"arrayValue"in s?function(t){let n="[",i=!0;for(const o of t.values||[])i?i=!1:n+=",",n+=aa(o);return n+"]"}(s.arrayValue):"mapValue"in s?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const l of n)o?o=!1:i+=",",i+=`${l}:${aa(t.fields[l])}`;return i+"}"}(s.mapValue):U(61005,{value:s})}function gr(s){switch(Lt(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zr(s);return e?16+gr(e):16;case 5:return 2*s.stringValue.length;case 6:return Mt(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+gr(o),0)}(s.arrayValue);case 10:case 11:return function(n){let i=0;return as(n.fields,(o,l)=>{i+=o.length+gr(l)}),i}(s.mapValue);default:throw U(13486,{value:s})}}function oa(s){return!!s&&"integerValue"in s}function Ba(s){return!!s&&"arrayValue"in s}function oc(s){return!!s&&"nullValue"in s}function lc(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function xr(s){return!!s&&"mapValue"in s}function Kx(s){return(s?.mapValue?.fields||{})[ph]?.stringValue===fh}function cn(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return as(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=cn(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=cn(s.arrayValue.values[t]);return e}return{...s}}function Qx(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Gx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!xr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cn(t)}setAll(e){let t=xe.emptyPath(),n={},i=[];e.forEach((l,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,n,i),n={},i=[],t=u.popLast()}l?n[u.lastSegment()]=cn(l):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,n,i)}delete(e){const t=this.field(e.popLast());xr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];xr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){as(t,(i,o)=>e[i]=o);for(const i of n)delete e[i]}clone(){return new Me(cn(this.value))}}function gh(s){const e=[];return as(s.fields,(t,n)=>{const i=new xe([t]);if(xr(n)){const o=gh(n.mapValue).fields;if(o.length===0)e.push(i);else for(const l of o)e.push(i.child(l))}else e.push(i)}),new He(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n,i,o,l,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(e){return new Te(e,0,F.min(),F.min(),F.min(),Me.empty(),0)}static newFoundDocument(e,t,n,i){return new Te(e,1,t,F.min(),n,i,0)}static newNoDocument(e,t){return new Te(e,2,t,F.min(),F.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,F.min(),F.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.position=e,this.inclusive=t}}function cc(s,e,t){let n=0;for(let i=0;i<s.position.length;i++){const o=e[i],l=s.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(l.referenceValue),t.key):n=js(l,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function uc(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!st(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yx(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{}class ue extends xh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Xx(e,t,n):t==="array-contains"?new ty(e,n):t==="in"?new sy(e,n):t==="not-in"?new ny(e,n):t==="array-contains-any"?new ry(e,n):new ue(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Zx(e,n):new ey(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(js(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison(js(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nt extends xh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new nt(e,t)}matches(e){return yh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function yh(s){return s.op==="and"}function bh(s){return Jx(s)&&yh(s)}function Jx(s){for(const e of s.filters)if(e instanceof nt)return!1;return!0}function la(s){if(s instanceof ue)return s.field.canonicalString()+s.op.toString()+Is(s.value);if(bh(s))return s.filters.map(e=>la(e)).join(",");{const e=s.filters.map(t=>la(t)).join(",");return`${s.op}(${e})`}}function vh(s,e){return s instanceof ue?function(n,i){return i instanceof ue&&n.op===i.op&&n.field.isEqual(i.field)&&st(n.value,i.value)}(s,e):s instanceof nt?function(n,i){return i instanceof nt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,l,u)=>o&&vh(l,i.filters[u]),!0):!1}(s,e):void U(19439)}function _h(s){return s instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${Is(t.value)}`}(s):s instanceof nt?function(t){return t.op.toString()+" {"+t.getFilters().map(_h).join(" ,")+"}"}(s):"Filter"}class Xx extends ue{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zx extends ue{constructor(e,t){super(e,"in",t),this.keys=wh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ey extends ue{constructor(e,t){super(e,"not-in",t),this.keys=wh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wh(s,e){return(e.arrayValue?.values||[]).map(t=>M.fromName(t.referenceValue))}class ty extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ba(t)&&wn(t.arrayValue,this.value)}}class sy extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wn(this.value.arrayValue,t)}}class ny extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!wn(this.value.arrayValue,t)}}class ry extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>wn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t=null,n=[],i=[],o=null,l=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=l,this.endAt=u,this.Te=null}}function hc(s,e=null,t=[],n=[],i=null,o=null,l=null){return new iy(s,e,t,n,i,o,l)}function $a(s){const e=B(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>la(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Xr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Is(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Is(n)).join(",")),e.Te=t}return e.Te}function qa(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Yx(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!vh(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!uc(s.startAt,e.startAt)&&uc(s.endAt,e.endAt)}function ca(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t=null,n=[],i=[],o=null,l="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ay(s,e,t,n,i,o,l,u){return new ei(s,e,t,n,i,o,l,u)}function Ha(s){return new ei(s)}function dc(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function oy(s){return s.collectionGroup!==null}function un(s){const e=B(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new he(xe.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(m=>{m.isInequality()&&(u=u.add(m.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Or(o,n))}),t.has(xe.keyField().canonicalString())||e.Ie.push(new Or(xe.keyField(),n))}return e.Ie}function Xe(s){const e=B(s);return e.Ee||(e.Ee=ly(e,un(s))),e.Ee}function ly(s,e){if(s.limitType==="F")return hc(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Or(i.field,o)});const t=s.endAt?new Vr(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new Vr(s.startAt.position,s.startAt.inclusive):null;return hc(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function ua(s,e,t){return new ei(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function ti(s,e){return qa(Xe(s),Xe(e))&&s.limitType===e.limitType}function Nh(s){return`${$a(Xe(s))}|lt:${s.limitType}`}function fs(s){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>_h(i)).join(", ")}]`),Xr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Is(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Is(i)).join(",")),`Target(${n})`}(Xe(s))}; limitType=${s.limitType})`}function si(s,e){return e.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(s,e)&&function(n,i){for(const o of un(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(s,e)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(s,e)&&function(n,i){return!(n.startAt&&!function(l,u,h){const m=cc(l,u,h);return l.inclusive?m<=0:m<0}(n.startAt,un(n),i)||n.endAt&&!function(l,u,h){const m=cc(l,u,h);return l.inclusive?m>=0:m>0}(n.endAt,un(n),i))}(s,e)}function cy(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Eh(s){return(e,t)=>{let n=!1;for(const i of un(s)){const o=uy(i,e,t);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function uy(s,e,t){const n=s.field.isKeyField()?M.comparator(e.key,t.key):function(o,l,u){const h=l.data.field(o),m=u.data.field(o);return h!==null&&m!==null?js(h,m):U(42886)}(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return U(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(t,n)=>{for(const[i,o]of n)e(i,o)})}isEmpty(){return lh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new re(M.comparator);function yt(){return hy}const Th=new re(M.comparator);function sn(...s){let e=Th;for(const t of s)e=e.insert(t.key,t);return e}function jh(s){let e=Th;return s.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Kt(){return hn()}function Ih(){return hn()}function hn(){return new os(s=>s.toString(),(s,e)=>s.isEqual(e))}const dy=new re(M.comparator),my=new he(M.comparator);function Q(...s){let e=my;for(const t of s)e=e.add(t);return e}const py=new he(K);function fy(){return py}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pr(e)?"-0":e}}function Ah(s){return{integerValue:""+s}}function gy(s,e){return $x(e)?Ah(e):Wa(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this._=void 0}}function xy(s,e,t){return s instanceof Mr?function(i,o){const l={fields:{[hh]:{stringValue:uh},[mh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Fa(o)&&(o=Zr(o)),o&&(l.fields[dh]=o),{mapValue:l}}(t,e):s instanceof Nn?Ch(s,e):s instanceof En?Rh(s,e):function(i,o){const l=Sh(i,o),u=mc(l)+mc(i.Ae);return oa(l)&&oa(i.Ae)?Ah(u):Wa(i.serializer,u)}(s,e)}function yy(s,e,t){return s instanceof Nn?Ch(s,e):s instanceof En?Rh(s,e):t}function Sh(s,e){return s instanceof Lr?function(n){return oa(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class Mr extends ni{}class Nn extends ni{constructor(e){super(),this.elements=e}}function Ch(s,e){const t=Ph(e);for(const n of s.elements)t.some(i=>st(i,n))||t.push(n);return{arrayValue:{values:t}}}class En extends ni{constructor(e){super(),this.elements=e}}function Rh(s,e){let t=Ph(e);for(const n of s.elements)t=t.filter(i=>!st(i,n));return{arrayValue:{values:t}}}class Lr extends ni{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function mc(s){return ae(s.integerValue||s.doubleValue)}function Ph(s){return Ba(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function by(s,e){return s.field.isEqual(e.field)&&function(n,i){return n instanceof Nn&&i instanceof Nn||n instanceof En&&i instanceof En?Ts(n.elements,i.elements,st):n instanceof Lr&&i instanceof Lr?st(n.Ae,i.Ae):n instanceof Mr&&i instanceof Mr}(s.transform,e.transform)}class vy{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yr(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class ri{}function kh(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Vh(s.key,pt.none()):new kn(s.key,s.data,pt.none());{const t=s.data,n=Me.empty();let i=new he(xe.comparator);for(let o of e.fields)if(!i.has(o)){let l=t.field(o);l===null&&o.length>1&&(o=o.popLast(),l=t.field(o)),l===null?n.delete(o):n.set(o,l),i=i.add(o)}return new ls(s.key,n,new He(i.toArray()),pt.none())}}function _y(s,e,t){s instanceof kn?function(i,o,l){const u=i.value.clone(),h=fc(i.fieldTransforms,o,l.transformResults);u.setAll(h),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(s,e,t):s instanceof ls?function(i,o,l){if(!yr(i.precondition,o))return void o.convertToUnknownDocument(l.version);const u=fc(i.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(Dh(i)),h.setAll(u),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(s,e,t):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function dn(s,e,t,n){return s instanceof kn?function(o,l,u,h){if(!yr(o.precondition,l))return u;const m=o.value.clone(),f=gc(o.fieldTransforms,h,l);return m.setAll(f),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null}(s,e,t,n):s instanceof ls?function(o,l,u,h){if(!yr(o.precondition,l))return u;const m=gc(o.fieldTransforms,h,l),f=l.data;return f.setAll(Dh(o)),f.setAll(m),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(x=>x.field))}(s,e,t,n):function(o,l,u){return yr(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(s,e,t)}function wy(s,e){let t=null;for(const n of s.fieldTransforms){const i=e.data.field(n.field),o=Sh(n.transform,i||null);o!=null&&(t===null&&(t=Me.empty()),t.set(n.field,o))}return t||null}function pc(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ts(n,i,(o,l)=>by(o,l))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class kn extends ri{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ls extends ri{constructor(e,t,n,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Dh(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}}),e}function fc(s,e,t){const n=new Map;X(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let i=0;i<t.length;i++){const o=s[i],l=o.transform,u=e.data.field(o.field);n.set(o.field,yy(l,u,t[i]))}return n}function gc(s,e,t){const n=new Map;for(const i of s){const o=i.transform,l=t.data.field(i.field);n.set(i.field,xy(o,l,e))}return n}class Vh extends ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ny extends ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&_y(o,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=dn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=dn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ih();return this.mutations.forEach(i=>{const o=e.get(i.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=t.has(i.key)?null:u;const h=kh(l,u);h!==null&&n.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(t,n)=>pc(t,n))&&Ts(this.baseMutations,e.baseMutations,(t,n)=>pc(t,n))}}class za{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){X(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let i=function(){return dy}();const o=e.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,n[l].version);return new za(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,Y;function Iy(s){switch(s){case S.OK:return U(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return U(15467,{code:s})}}function Oh(s){if(s===void 0)return xt("GRPC error has no .code"),S.UNKNOWN;switch(s){case le.OK:return S.OK;case le.CANCELLED:return S.CANCELLED;case le.UNKNOWN:return S.UNKNOWN;case le.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case le.INTERNAL:return S.INTERNAL;case le.UNAVAILABLE:return S.UNAVAILABLE;case le.UNAUTHENTICATED:return S.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case le.NOT_FOUND:return S.NOT_FOUND;case le.ALREADY_EXISTS:return S.ALREADY_EXISTS;case le.PERMISSION_DENIED:return S.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case le.ABORTED:return S.ABORTED;case le.OUT_OF_RANGE:return S.OUT_OF_RANGE;case le.UNIMPLEMENTED:return S.UNIMPLEMENTED;case le.DATA_LOSS:return S.DATA_LOSS;default:return U(39323,{code:s})}}(Y=le||(le={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new Rt([4294967295,4294967295],0);function xc(s){const e=Ay().encode(s),t=new Xu;return t.update(e),new Uint8Array(t.digest())}function yc(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Rt([t,n],0),new Rt([i,o],0)]}class Ga{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nn(`Invalid padding: ${t}`);if(n<0)throw new nn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new nn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Rt.fromNumber(this.ge)}ye(e,t,n){let i=e.add(t.multiply(Rt.fromNumber(n)));return i.compare(Sy)===1&&(i=new Rt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=xc(e),[n,i]=yc(t);for(let o=0;o<this.hashCount;o++){const l=this.ye(n,i,o);if(!this.we(l))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),l=new Ga(o,i,t);return n.forEach(u=>l.insert(u)),l}insert(e){if(this.ge===0)return;const t=xc(e),[n,i]=yc(t);for(let o=0;o<this.hashCount;o++){const l=this.ye(n,i,o);this.Se(l)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Dn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ii(F.min(),i,new re(K),yt(),Q())}}class Dn{constructor(e,t,n,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Dn(n,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,n,i){this.be=e,this.removedTargetIds=t,this.key=n,this.De=i}}class Mh{constructor(e,t){this.targetId=e,this.Ce=t}}class Lh{constructor(e,t,n=ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class bc{constructor(){this.ve=0,this.Fe=vc(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),n=Q();return this.Fe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:U(38017,{changeType:o})}}),new Dn(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=vc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Cy{constructor(e){this.Ge=e,this.ze=new Map,this.je=yt(),this.Je=or(),this.He=or(),this.Ye=new re(K)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:U(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,n=e.Ce.count,i=this.ot(t);if(i){const o=i.target;if(ca(o))if(n===0){const l=new M(o.path);this.et(t,l,Te.newNoDocument(l,F.min()))}else X(n===1,20013,{expectedCount:n});else{const l=this._t(t);if(l!==n){const u=this.ut(e),h=u?this.ct(u,e,l):1;if(h!==0){this.it(t);const m=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,m)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=t;let l,u;try{l=Mt(n).toUint8Array()}catch(h){if(h instanceof ch)return Es("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ga(l,i,o)}catch(h){return Es(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let i=0;return n.forEach(o=>{const l=this.Ge.ht(),u=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((o,l)=>{const u=this.ot(l);if(u){if(o.current&&ca(u.target)){const h=new M(u.target.path);this.It(h).has(l)||this.Et(l,h)||this.et(l,h,Te.newNoDocument(h,e))}o.Be&&(t.set(l,o.ke()),o.qe())}});let n=Q();this.He.forEach((o,l)=>{let u=!0;l.forEachWhile(h=>{const m=this.ot(h);return!m||m.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(o))}),this.je.forEach((o,l)=>l.setReadTime(e));const i=new ii(e,t,this.Ye,this.je,n);return this.je=yt(),this.Je=or(),this.He=or(),this.Ye=new re(K),i}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new bc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new he(K),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new he(K),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new bc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function or(){return new re(M.comparator)}function vc(){return new re(M.comparator)}const Ry={asc:"ASCENDING",desc:"DESCENDING"},Py={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ky={and:"AND",or:"OR"};class Dy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ha(s,e){return s.useProto3Json||Xr(e)?e:{value:e}}function Ur(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uh(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function Vy(s,e){return Ur(s,e.toTimestamp())}function Ze(s){return X(!!s,49232),F.fromTimestamp(function(t){const n=Ot(t);return new se(n.seconds,n.nanos)}(s))}function Ka(s,e){return da(s,e).canonicalString()}function da(s,e){const t=function(i){return new ne(["projects",i.projectId,"databases",i.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Fh(s){const e=ne.fromString(s);return X(Wh(e),10190,{key:e.toString()}),e}function ma(s,e){return Ka(s.databaseId,e.path)}function $i(s,e){const t=Fh(e);if(t.get(1)!==s.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new M($h(t))}function Bh(s,e){return Ka(s.databaseId,e)}function Oy(s){const e=Fh(s);return e.length===4?ne.emptyPath():$h(e)}function pa(s){return new ne(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function $h(s){return X(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function _c(s,e,t){return{name:ma(s,e),fields:t.value.mapValue.fields}}function My(s,e){let t;if("targetChange"in e){e.targetChange;const n=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:U(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(m,f){return m.useProto3Json?(X(f===void 0||typeof f=="string",58123),ye.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ye.fromUint8Array(f||new Uint8Array))}(s,e.targetChange.resumeToken),l=e.targetChange.cause,u=l&&function(m){const f=m.code===void 0?S.UNKNOWN:Oh(m.code);return new O(f,m.message||"")}(l);t=new Lh(n,i,o,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=$i(s,n.document.name),o=Ze(n.document.updateTime),l=n.document.createTime?Ze(n.document.createTime):F.min(),u=new Me({mapValue:{fields:n.document.fields}}),h=Te.newFoundDocument(i,o,l,u),m=n.targetIds||[],f=n.removedTargetIds||[];t=new br(m,f,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=$i(s,n.document),o=n.readTime?Ze(n.readTime):F.min(),l=Te.newNoDocument(i,o),u=n.removedTargetIds||[];t=new br([],u,l.key,l)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=$i(s,n.document),o=n.removedTargetIds||[];t=new br([],o,i,null)}else{if(!("filter"in e))return U(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,l=new jy(i,o),u=n.targetId;t=new Mh(u,l)}}return t}function Ly(s,e){let t;if(e instanceof kn)t={update:_c(s,e.key,e.value)};else if(e instanceof Vh)t={delete:ma(s,e.key)};else if(e instanceof ls)t={update:_c(s,e.key,e.data),updateMask:Gy(e.fieldMask)};else{if(!(e instanceof Ny))return U(16599,{Vt:e.type});t={verify:ma(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(o,l){const u=l.transform;if(u instanceof Mr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Nn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof En)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Lr)return{fieldPath:l.field.canonicalString(),increment:u.Ae};throw U(20930,{transform:l.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Vy(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U(27497)}(s,e.precondition)),t}function Uy(s,e){return s&&s.length>0?(X(e!==void 0,14353),s.map(t=>function(i,o){let l=i.updateTime?Ze(i.updateTime):Ze(o);return l.isEqual(F.min())&&(l=Ze(o)),new vy(l,i.transformResults||[])}(t,e))):[]}function Fy(s,e){return{documents:[Bh(s,e.path)]}}function By(s,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Bh(s,i);const o=function(m){if(m.length!==0)return Hh(nt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const l=function(m){if(m.length!==0)return m.map(f=>function(v){return{field:gs(v.field),direction:Hy(v.dir)}}(f))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const u=ha(s,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ft:t,parent:i}}function $y(s){let e=Oy(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){X(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];t.where&&(o=function(x){const v=qh(x);return v instanceof nt&&bh(v)?v.getFilters():[v]}(t.where));let l=[];t.orderBy&&(l=function(x){return x.map(v=>function(C){return new Or(xs(C.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(t.orderBy));let u=null;t.limit&&(u=function(x){let v;return v=typeof x=="object"?x.value:x,Xr(v)?null:v}(t.limit));let h=null;t.startAt&&(h=function(x){const v=!!x.before,w=x.values||[];return new Vr(w,v)}(t.startAt));let m=null;return t.endAt&&(m=function(x){const v=!x.before,w=x.values||[];return new Vr(w,v)}(t.endAt)),ay(e,i,l,o,u,"F",h,m)}function qy(s,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qh(s){return s.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=xs(t.unaryFilter.field);return ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=xs(t.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xs(t.unaryFilter.field);return ue.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=xs(t.unaryFilter.field);return ue.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(s):s.fieldFilter!==void 0?function(t){return ue.create(xs(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(t){return nt.create(t.compositeFilter.filters.map(n=>qh(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(s):U(30097,{filter:s})}function Hy(s){return Ry[s]}function Wy(s){return Py[s]}function zy(s){return ky[s]}function gs(s){return{fieldPath:s.canonicalString()}}function xs(s){return xe.fromServerFormat(s.fieldPath)}function Hh(s){return s instanceof ue?function(t){if(t.op==="=="){if(lc(t.value))return{unaryFilter:{field:gs(t.field),op:"IS_NAN"}};if(oc(t.value))return{unaryFilter:{field:gs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lc(t.value))return{unaryFilter:{field:gs(t.field),op:"IS_NOT_NAN"}};if(oc(t.value))return{unaryFilter:{field:gs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(t.field),op:Wy(t.op),value:t.value}}}(s):s instanceof nt?function(t){const n=t.getFilters().map(i=>Hh(i));return n.length===1?n[0]:{compositeFilter:{op:zy(t.op),filters:n}}}(s):U(54877,{filter:s})}function Gy(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wh(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,n,i,o=F.min(),l=F.min(),u=ye.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.yt=e}}function Qy(s){const e=$y({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?ua(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Cn=new Jy}addToCollectionParentIndex(e,t){return this.Cn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Vt.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class Jy{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new he(ne.comparator),o=!i.has(n);return this.index[t]=i.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new he(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zh=41943040;class Re{static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(zh,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new As(0)}static cr(){return new As(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="LruGarbageCollector",Xy=1048576;function Ec([s,e],[t,n]){const i=K(s,t);return i===0?K(e,n):i}class Zy{constructor(e){this.Ir=e,this.buffer=new he(Ec),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ec(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class e0{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(Nc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ks(t)?V(Nc,"Ignoring IndexedDB error during garbage collection: ",t):await Ps(t)}await this.Vr(3e5)})}}class t0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Jr.ce);const n=new Zy(t);return this.mr.forEachTarget(e,i=>n.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>n.Ar(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(wc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,i,o,l,u,h,m;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(x=>(x>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),i=this.params.maximumSequenceNumbersToCollect):i=x,l=Date.now(),this.nthSequenceNumber(e,i))).next(x=>(n=x,u=Date.now(),this.removeTargets(e,n,t))).next(x=>(o=x,h=Date.now(),this.removeOrphanedDocuments(e,n))).next(x=>(m=Date.now(),ps()<=G.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-f}ms
	Determined least recently used ${i} in `+(u-l)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${x} documents in `+(m-h)+`ms
Total Duration: ${m-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:x})))}}function s0(s,e){return new t0(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.changes=new os(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&dn(n.mutation,i,He.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Q()){const i=Kt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(o=>{let l=sn();return o.forEach((u,h)=>{l=l.insert(u,h.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const n=Kt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Q()))}populateOverlays(e,t,n){const i=[];return n.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((l,u)=>{t.set(l,u)})})}computeViews(e,t,n,i){let o=yt();const l=hn(),u=function(){return hn()}();return t.forEach((h,m)=>{const f=n.get(m.key);i.has(m.key)&&(f===void 0||f.mutation instanceof ls)?o=o.insert(m.key,m):f!==void 0?(l.set(m.key,f.mutation.getFieldMask()),dn(f.mutation,m,f.mutation.getFieldMask(),se.now())):l.set(m.key,He.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((m,f)=>l.set(m,f)),t.forEach((m,f)=>u.set(m,new r0(f,l.get(m)??null))),u))}recalculateAndSaveOverlays(e,t){const n=hn();let i=new re((l,u)=>l-u),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const u of l)u.keys().forEach(h=>{const m=t.get(h);if(m===null)return;let f=n.get(h)||He.empty();f=u.applyToLocalView(m,f),n.set(h,f);const x=(i.get(u.batchId)||Q()).add(h);i=i.insert(u.batchId,x)})}).next(()=>{const l=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),m=h.key,f=h.value,x=Ih();f.forEach(v=>{if(!o.has(v)){const w=kh(t.get(v),n.get(v));w!==null&&x.set(v,w),o=o.add(v)}}),l.push(this.documentOverlayCache.saveOverlays(e,m,x))}return A.waitFor(l)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(l){return M.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-o.size):A.resolve(Kt());let u=bn,h=o;return l.next(m=>A.forEach(m,(f,x)=>(u<x.largestBatchId&&(u=x.largestBatchId),o.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{h=h.insert(f,v)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,h,m,Q())).next(f=>({batchId:u,changes:jh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(n=>{let i=sn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const o=t.collectionGroup;let l=sn();return this.indexManager.getCollectionParents(e,o).next(u=>A.forEach(u,h=>{const m=function(x,v){return new ei(v,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,n,i).next(f=>{f.forEach((x,v)=>{l=l.insert(x,v)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,i))).next(l=>{o.forEach((h,m)=>{const f=m.getKey();l.get(f)===null&&(l=l.insert(f,Te.newInvalidDocument(f)))});let u=sn();return l.forEach((h,m)=>{const f=o.get(h);f!==void 0&&dn(f.mutation,m,He.empty(),se.now()),si(t,m)&&(u=u.insert(h,m))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return A.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ze(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(i){return{name:i.name,query:Qy(i.bundledQuery),readTime:Ze(i.readTime)}}(t)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.overlays=new re(M.comparator),this.qr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Kt();return A.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,o)=>{this.St(e,t,o)}),A.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const i=Kt(),o=t.length+1,l=new M(t.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const h=u.getNext().value,m=h.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let o=new re((m,f)=>m-f);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>n){let f=o.get(m.largestBatchId);f===null&&(f=Kt(),o=o.insert(m.largestBatchId,f)),f.set(m.getKey(),m)}}const u=Kt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((m,f)=>u.set(m,f)),!(u.size()>=i)););return A.resolve(u)}St(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(n.key,new Ty(t,n));let o=this.qr.get(t);o===void 0&&(o=Q(),this.qr.set(t,o)),this.qr.set(t,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.Qr=new he(me.$r),this.Ur=new he(me.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new me(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new me(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new M(new ne([])),n=new me(t,e),i=new me(t,e+1),o=[];return this.Ur.forEachInRange([n,i],l=>{this.Gr(l),o.push(l.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new M(new ne([])),n=new me(t,e),i=new me(t,e+1);let o=Q();return this.Ur.forEachInRange([n,i],l=>{o=o.add(l.key)}),o}containsKey(e){const t=new me(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class me{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return M.comparator(e.key,t.key)||K(e.Yr,t.Yr)}static Kr(e,t){return K(e.Yr,t.Yr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new he(me.$r)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Ey(o,t,n,i);this.mutationQueue.push(l);for(const u of i)this.Zr=this.Zr.add(new me(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return A.resolve(l)}lookupMutationBatch(e,t){return A.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ei(n),o=i<0?0:i;return A.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?Ua:this.tr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new me(t,0),i=new me(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],l=>{const u=this.Xr(l.Yr);o.push(u)}),A.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(K);return t.forEach(i=>{const o=new me(i,0),l=new me(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,l],u=>{n=n.add(u.Yr)})}),A.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const l=new me(new M(o),0);let u=new he(K);return this.Zr.forEachWhile(h=>{const m=h.key.path;return!!n.isPrefixOf(m)&&(m.length===i&&(u=u.add(h.Yr)),!0)},l),A.resolve(this.ti(u))}ti(e){const t=[];return e.forEach(n=>{const i=this.Xr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return A.forEach(t.mutations,i=>{const o=new me(i.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new me(t,0),i=this.Zr.firstAfterOrEqual(n);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.ri=e,this.docs=function(){return new re(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),o=i?i.size:0,l=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let n=yt();return t.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():Te.newInvalidDocument(i))}),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let o=yt();const l=t.path,u=new M(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:m,value:{document:f}}=h.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||Lx(Mx(f),n)<=0||(i.has(f.key)||si(t,f))&&(o=o.insert(f.key,f.mutableCopy()))}return A.resolve(o)}getAllFromCollectionGroup(e,t,n,i){U(9500)}ii(e,t){return A.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new h0(this)}getSize(e){return A.resolve(this.size)}}class h0 extends n0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(n)}),A.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.persistence=e,this.si=new os(t=>$a(t),qa),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new Qa,this.targetCount=0,this.ai=As.ur()}forEachTarget(e,t){return this.si.forEach((n,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),A.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new As(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Pr(t),A.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let i=0;const o=[];return this.si.forEach((l,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),A.waitFor(o).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(l=>{o.push(i.markPotentiallyOrphaned(e,l))}),A.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t){this.ui={},this.overlays={},this.ci=new Jr(0),this.li=!1,this.li=!0,this.hi=new l0,this.referenceDelegate=e(this),this.Pi=new d0(this),this.indexManager=new Yy,this.remoteDocumentCache=function(i){return new u0(i)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Ky(t),this.Ii=new a0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new o0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new c0(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new m0(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(e,t){return A.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class m0 extends Fx{constructor(e){super(),this.currentSequenceNumber=e}}class Ya{constructor(e){this.persistence=e,this.Ri=new Qa,this.Vi=null}static mi(e){return new Ya(e)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.fi,n=>{const i=M.fromPath(n);return this.gi(e,i).next(o=>{o||t.removeEntry(i,F.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Fr{constructor(e,t){this.persistence=e,this.pi=new os(n=>qx(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=s0(this,t)}static mi(e,t){return new Fr(e,t)}Ei(){}di(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return A.forEach(this.pi,(n,i)=>this.br(e,n,i).next(o=>o?A.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(e,l=>this.br(e,l,t).next(u=>{u||(n++,o.removeEntry(l,F.min()))})).next(()=>o.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),A.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gr(e.data.value)),t}br(e,t,n){return A.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return A.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=i}static As(e,t){let n=Q(),i=Q();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ja(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Hm()?8:Bx(je())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,i){const o={result:null};return this.ys(e,t).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ws(e,t,i,n).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new p0;return this.Ss(e,t,l).next(u=>{if(o.result=u,this.Vs)return this.bs(e,t,l,u.size)})}).next(()=>o.result)}bs(e,t,n,i){return n.documentReadCount<this.fs?(ps()<=G.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",fs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),A.resolve()):(ps()<=G.DEBUG&&V("QueryEngine","Query:",fs(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(ps()<=G.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",fs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xe(t))):A.resolve())}ys(e,t){if(dc(t))return A.resolve(null);let n=Xe(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ua(t,null,"F"),n=Xe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const l=Q(...o);return this.ps.getDocuments(e,l).next(u=>this.indexManager.getMinOffset(e,n).next(h=>{const m=this.Ds(t,u);return this.Cs(t,m,l,h.readTime)?this.ys(e,ua(t,null,"F")):this.vs(e,m,t,h)}))})))}ws(e,t,n,i){return dc(t)||i.isEqual(F.min())?A.resolve(null):this.ps.getDocuments(e,n).next(o=>{const l=this.Ds(t,o);return this.Cs(t,l,n,i)?A.resolve(null):(ps()<=G.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fs(t)),this.vs(e,l,t,Ox(i,bn)).next(u=>u))})}Ds(e,t){let n=new he(Eh(e));return t.forEach((i,o)=>{si(e,o)&&(n=n.add(o))}),n}Cs(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,n){return ps()<=G.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",fs(t)),this.ps.getDocumentsMatchingQuery(e,t,Vt.min(),n)}vs(e,t,n,i){return this.ps.getDocumentsMatchingQuery(e,n,i).next(o=>(t.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="LocalStore",g0=3e8;class x0{constructor(e,t,n,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new re(K),this.xs=new os(o=>$a(o),qa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function y0(s,e,t,n){return new x0(s,e,t,n)}async function Kh(s,e){const t=B(s);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(o=>{const l=[],u=[];let h=Q();for(const m of i){l.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}for(const m of o){u.push(m.batchId);for(const f of m.mutations)h=h.add(f.key)}return t.localDocuments.getDocuments(n,h).next(m=>({Ls:m,removedBatchIds:l,addedBatchIds:u}))})})}function b0(s,e){const t=B(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(u,h,m,f){const x=m.batch,v=x.keys();let w=A.resolve();return v.forEach(C=>{w=w.next(()=>f.getEntry(h,C)).next(P=>{const R=m.docVersions.get(C);X(R!==null,48541),P.version.compareTo(R)<0&&(x.applyToRemoteDocument(P,m),P.isValidDocument()&&(P.setReadTime(m.commitVersion),f.addEntry(P)))})}),w.next(()=>u.mutationQueue.removeMutationBatch(h,x))}(t,n,e,o).next(()=>o.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let h=Q();for(let m=0;m<u.mutationResults.length;++m)u.mutationResults[m].transformResults.length>0&&(h=h.add(u.batch.mutations[m].key));return h}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Qh(s){const e=B(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function v0(s,e){const t=B(s),n=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const u=[];e.targetChanges.forEach((f,x)=>{const v=i.get(x);if(!v)return;u.push(t.Pi.removeMatchingKeys(o,f.removedDocuments,x).next(()=>t.Pi.addMatchingKeys(o,f.addedDocuments,x)));let w=v.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(x)!==null?w=w.withResumeToken(ye.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,n)),i=i.insert(x,w),function(P,R,H){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=g0?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(v,w,f)&&u.push(t.Pi.updateTargetData(o,w))});let h=yt(),m=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,f))}),u.push(_0(o,l,e.documentUpdates).next(f=>{h=f.ks,m=f.qs})),!n.isEqual(F.min())){const f=t.Pi.getLastRemoteSnapshotVersion(o).next(x=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));u.push(f)}return A.waitFor(u).next(()=>l.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,m)).next(()=>h)}).then(o=>(t.Ms=i,o))}function _0(s,e,t){let n=Q(),i=Q();return t.forEach(o=>n=n.add(o)),e.getEntries(s,n).next(o=>{let l=yt();return t.forEach((u,h)=>{const m=o.get(u);h.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(F.min())?(e.removeEntry(u,h.readTime),l=l.insert(u,h)):!m.isValidDocument()||h.version.compareTo(m.version)>0||h.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(h),l=l.insert(u,h)):V(Xa,"Ignoring outdated watch update for ",u,". Current version:",m.version," Watch version:",h.version)}),{ks:l,qs:i}})}function w0(s,e){const t=B(s);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Ua),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function N0(s,e){const t=B(s);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Pi.getTargetData(n,e).next(o=>o?(i=o,A.resolve(i)):t.Pi.allocateTargetId(n).next(l=>(i=new At(e,l,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function fa(s,e,t){const n=B(s),i=n.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,l=>n.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!ks(l))throw l;V(Xa,`Failed to update sequence numbers for target ${e}: ${l}`)}n.Ms=n.Ms.remove(e),n.xs.delete(i.target)}function Tc(s,e,t){const n=B(s);let i=F.min(),o=Q();return n.persistence.runTransaction("Execute query","readwrite",l=>function(h,m,f){const x=B(h),v=x.xs.get(f);return v!==void 0?A.resolve(x.Ms.get(v)):x.Pi.getTargetData(m,f)}(n,l,Xe(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(l,u.targetId).next(h=>{o=h})}).next(()=>n.Fs.getDocumentsMatchingQuery(l,e,t?i:F.min(),t?o:Q())).next(u=>(E0(n,cy(e),u),{documents:u,Qs:o})))}function E0(s,e,t){let n=s.Os.get(e)||F.min();t.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),s.Os.set(e,n)}class jc{constructor(){this.activeTargetIds=fy()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T0{constructor(){this.Mo=new jc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new jc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="ConnectivityMonitor";class Ac{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Ic,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(Ic,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr=null;function ga(){return lr===null?lr=function(){return 268435456+Math.round(2147483648*Math.random())}():lr++,"0x"+lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="RestConnection",I0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class A0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===kr?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(e,t,n,i,o){const l=ga(),u=this.zo(e,t.toUriEncodedString());V(qi,`Sending RPC '${e}' ${l}:`,u,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:m}=new URL(u),f=ns(m);return this.Jo(e,u,h,n,f).then(x=>(V(qi,`Received RPC '${e}' ${l}: `,x),x),x=>{throw Es(qi,`RPC '${e}' ${l} failed with error: `,x,"url: ",u,"request:",n),x})}Ho(e,t,n,i,o,l){return this.Go(e,t,n,i,o)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),n&&n.headers.forEach((i,o)=>e[o]=i)}zo(e,t){const n=I0[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="WebChannelConnection";class C0 extends A0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,i,o){const l=ga();return new Promise((u,h)=>{const m=new Zu;m.setWithCredentials(!0),m.listenOnce(eh.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case fr.NO_ERROR:const x=m.getResponseJson();V(Ne,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(x)),u(x);break;case fr.TIMEOUT:V(Ne,`RPC '${e}' ${l} timed out`),h(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case fr.HTTP_ERROR:const v=m.getStatus();if(V(Ne,`RPC '${e}' ${l} failed with status:`,v,"response text:",m.getResponseText()),v>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w?.error;if(C&&C.status&&C.message){const P=function(H){const z=H.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN}(C.status);h(new O(P,C.message))}else h(new O(S.UNKNOWN,"Server responded with status "+m.getStatus()))}else h(new O(S.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:l,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{V(Ne,`RPC '${e}' ${l} completed.`)}});const f=JSON.stringify(i);V(Ne,`RPC '${e}' ${l} sending request:`,i),m.send(t,"POST",f,n,15)})}T_(e,t,n){const i=ga(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=nh(),u=sh(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(h.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,n),h.encodeInitMessageHeaders=!0;const f=o.join("");V(Ne,`Creating RPC '${e}' stream ${i}: ${f}`,h);const x=l.createWebChannel(f,h);this.I_(x);let v=!1,w=!1;const C=new S0({Yo:R=>{w?V(Ne,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(v||(V(Ne,`Opening RPC '${e}' stream ${i} transport.`),x.open(),v=!0),V(Ne,`RPC '${e}' stream ${i} sending:`,R),x.send(R))},Zo:()=>x.close()}),P=(R,H,z)=>{R.listen(H,$=>{try{z($)}catch(Z){setTimeout(()=>{throw Z},0)}})};return P(x,tn.EventType.OPEN,()=>{w||(V(Ne,`RPC '${e}' stream ${i} transport opened.`),C.o_())}),P(x,tn.EventType.CLOSE,()=>{w||(w=!0,V(Ne,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(x))}),P(x,tn.EventType.ERROR,R=>{w||(w=!0,Es(Ne,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),C.a_(new O(S.UNAVAILABLE,"The operation could not be completed")))}),P(x,tn.EventType.MESSAGE,R=>{if(!w){const H=R.data[0];X(!!H,16349);const z=H,$=z?.error||z[0]?.error;if($){V(Ne,`RPC '${e}' stream ${i} received error:`,$);const Z=$.status;let Ie=function(g){const b=le[g];if(b!==void 0)return Oh(b)}(Z),oe=$.message;Ie===void 0&&(Ie=S.INTERNAL,oe="Unknown error status: "+Z+" with message "+$.message),w=!0,C.a_(new O(Ie,oe)),x.close()}else V(Ne,`RPC '${e}' stream ${i} received:`,H),C.u_(H)}}),P(u,th.STAT_EVENT,R=>{R.stat===ra.PROXY?V(Ne,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===ra.NOPROXY&&V(Ne,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Hi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(s){return new Dy(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,n=1e3,i=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="PersistentStream";class Jh{constructor(e,t,n,i,o,l,u,h){this.Mi=e,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(xt(t.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.D_===t&&this.G_(n,i)},n=>{e(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{n(()=>this.z_(i))}),this.stream.onMessage(i=>{n(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(Sc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(V(Sc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R0 extends Jh{constructor(e,t,n,i,o,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,l),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=My(this.serializer,e),n=function(o){if(!("targetChange"in o))return F.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?F.min():l.readTime?Ze(l.readTime):F.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=pa(this.serializer),t.addTarget=function(o,l){let u;const h=l.target;if(u=ca(h)?{documents:Fy(o,h)}:{query:By(o,h).ft},u.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){u.resumeToken=Uh(o,l.resumeToken);const m=ha(o,l.expectedCount);m!==null&&(u.expectedCount=m)}else if(l.snapshotVersion.compareTo(F.min())>0){u.readTime=Ur(o,l.snapshotVersion.toTimestamp());const m=ha(o,l.expectedCount);m!==null&&(u.expectedCount=m)}return u}(this.serializer,e);const n=qy(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=pa(this.serializer),t.removeTarget=e,this.q_(t)}}class P0 extends Jh{constructor(e,t,n,i,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,l),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Uy(e.writeResults,e.commitTime),n=Ze(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=pa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ly(this.serializer,n))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{}class D0 extends k0{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Go(e,da(t,n),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}Ho(e,t,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Ho(e,da(t,n),i,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new O(S.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class V0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="RemoteStore";class O0{constructor(e,t,n,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(l=>{n.enqueueAndForget(async()=>{cs(this)&&(V(ss,"Restarting streams for network reachability change."),await async function(h){const m=B(h);m.Ea.add(4),await Vn(m),m.Ra.set("Unknown"),m.Ea.delete(4),await oi(m)}(this))})}),this.Ra=new V0(n,i)}}async function oi(s){if(cs(s))for(const e of s.da)await e(!0)}async function Vn(s){for(const e of s.da)await e(!1)}function Xh(s,e){const t=B(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),so(t)?to(t):Ds(t).O_()&&eo(t,e))}function Za(s,e){const t=B(s),n=Ds(t);t.Ia.delete(e),n.O_()&&Zh(t,e),t.Ia.size===0&&(n.O_()?n.L_():cs(t)&&t.Ra.set("Unknown"))}function eo(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ds(s).Y_(e)}function Zh(s,e){s.Va.Ue(e),Ds(s).Z_(e)}function to(s){s.Va=new Cy({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),Ds(s).start(),s.Ra.ua()}function so(s){return cs(s)&&!Ds(s).x_()&&s.Ia.size>0}function cs(s){return B(s).Ea.size===0}function ed(s){s.Va=void 0}async function M0(s){s.Ra.set("Online")}async function L0(s){s.Ia.forEach((e,t)=>{eo(s,e)})}async function U0(s,e){ed(s),so(s)?(s.Ra.ha(e),to(s)):s.Ra.set("Unknown")}async function F0(s,e,t){if(s.Ra.set("Online"),e instanceof Lh&&e.state===2&&e.cause)try{await async function(i,o){const l=o.cause;for(const u of o.targetIds)i.Ia.has(u)&&(await i.remoteSyncer.rejectListen(u,l),i.Ia.delete(u),i.Va.removeTarget(u))}(s,e)}catch(n){V(ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Br(s,n)}else if(e instanceof br?s.Va.Ze(e):e instanceof Mh?s.Va.st(e):s.Va.tt(e),!t.isEqual(F.min()))try{const n=await Qh(s.localStore);t.compareTo(n)>=0&&await function(o,l){const u=o.Va.Tt(l);return u.targetChanges.forEach((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const f=o.Ia.get(m);f&&o.Ia.set(m,f.withResumeToken(h.resumeToken,l))}}),u.targetMismatches.forEach((h,m)=>{const f=o.Ia.get(h);if(!f)return;o.Ia.set(h,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),Zh(o,h);const x=new At(f.target,h,m,f.sequenceNumber);eo(o,x)}),o.remoteSyncer.applyRemoteEvent(u)}(s,t)}catch(n){V(ss,"Failed to raise snapshot:",n),await Br(s,n)}}async function Br(s,e,t){if(!ks(e))throw e;s.Ea.add(1),await Vn(s),s.Ra.set("Offline"),t||(t=()=>Qh(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{V(ss,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await oi(s)})}function td(s,e){return e().catch(t=>Br(s,t,e))}async function li(s){const e=B(s),t=Ut(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ua;for(;B0(e);)try{const i=await w0(e.localStore,n);if(i===null){e.Ta.length===0&&t.L_();break}n=i.batchId,$0(e,i)}catch(i){await Br(e,i)}sd(e)&&nd(e)}function B0(s){return cs(s)&&s.Ta.length<10}function $0(s,e){s.Ta.push(e);const t=Ut(s);t.O_()&&t.X_&&t.ea(e.mutations)}function sd(s){return cs(s)&&!Ut(s).x_()&&s.Ta.length>0}function nd(s){Ut(s).start()}async function q0(s){Ut(s).ra()}async function H0(s){const e=Ut(s);for(const t of s.Ta)e.ea(t.mutations)}async function W0(s,e,t){const n=s.Ta.shift(),i=za.from(n,e,t);await td(s,()=>s.remoteSyncer.applySuccessfulWrite(i)),await li(s)}async function z0(s,e){e&&Ut(s).X_&&await async function(n,i){if(function(l){return Iy(l)&&l!==S.ABORTED}(i.code)){const o=n.Ta.shift();Ut(n).B_(),await td(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await li(n)}}(s,e),sd(s)&&nd(s)}async function Cc(s,e){const t=B(s);t.asyncQueue.verifyOperationInProgress(),V(ss,"RemoteStore received new credentials");const n=cs(t);t.Ea.add(3),await Vn(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await oi(t)}async function G0(s,e){const t=B(s);e?(t.Ea.delete(2),await oi(t)):e||(t.Ea.add(2),await Vn(t),t.Ra.set("Unknown"))}function Ds(s){return s.ma||(s.ma=function(t,n,i){const o=B(t);return o.sa(),new R0(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(s.datastore,s.asyncQueue,{Xo:M0.bind(null,s),t_:L0.bind(null,s),r_:U0.bind(null,s),H_:F0.bind(null,s)}),s.da.push(async e=>{e?(s.ma.B_(),so(s)?to(s):s.Ra.set("Unknown")):(await s.ma.stop(),ed(s))})),s.ma}function Ut(s){return s.fa||(s.fa=function(t,n,i){const o=B(t);return o.sa(),new P0(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:q0.bind(null,s),r_:z0.bind(null,s),ta:H0.bind(null,s),na:W0.bind(null,s)}),s.da.push(async e=>{e?(s.fa.B_(),await li(s)):(await s.fa.stop(),s.Ta.length>0&&(V(ss,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))})),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,n,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,o){const l=Date.now()+n,u=new no(e,t,l,i,o);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ro(s,e){if(xt("AsyncQueue",`${e}: ${s}`),ks(s))return new O(S.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{static emptySet(e){return new ws(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=sn(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new ws;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.ga=new re(M.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Ss{constructor(e,t,n,i,o,l,u,h,m){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=m}static fromInitialDocuments(e,t,n,i,o){const l=[];return t.forEach(u=>{l.push({type:0,doc:u})}),new Ss(e,t,ws.emptySet(t),l,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Q0{constructor(){this.queries=Pc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const i=B(t),o=i.queries;i.queries=Pc(),o.forEach((l,u)=>{for(const h of u.Sa)h.onError(n)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Pc(){return new os(s=>Nh(s),ti)}async function Y0(s,e){const t=B(s);let n=3;const i=e.query;let o=t.queries.get(i);o?!o.ba()&&e.Da()&&(n=2):(o=new K0,n=e.Da()?0:1);try{switch(n){case 0:o.wa=await t.onListen(i,!0);break;case 1:o.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const u=ro(l,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&io(t)}async function J0(s,e){const t=B(s),n=e.query;let i=3;const o=t.queries.get(n);if(o){const l=o.Sa.indexOf(e);l>=0&&(o.Sa.splice(l,1),o.Sa.length===0?i=e.Da()?0:1:!o.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function X0(s,e){const t=B(s);let n=!1;for(const i of e){const o=i.query,l=t.queries.get(o);if(l){for(const u of l.Sa)u.Fa(i)&&(n=!0);l.wa=i}}n&&io(t)}function Z0(s,e,t){const n=B(s),i=n.queries.get(e);if(i)for(const o of i.Sa)o.onError(t);n.queries.delete(e)}function io(s){s.Ca.forEach(e=>{e.next()})}var xa,kc;(kc=xa||(xa={})).Ma="default",kc.Cache="cache";class eb{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Ss(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.key=e}}class id{constructor(e){this.key=e}}class tb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=Eh(e),this.tu=new ws(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Rc,i=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,l=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,x)=>{const v=i.get(f),w=si(this.query,x)?x:null,C=!!v&&this.mutatedKeys.has(v.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let R=!1;v&&w?v.data.isEqual(w.data)?C!==P&&(n.track({type:3,doc:w}),R=!0):this.su(v,w)||(n.track({type:2,doc:w}),R=!0,(h&&this.eu(w,h)>0||m&&this.eu(w,m)<0)&&(u=!0)):!v&&w?(n.track({type:0,doc:w}),R=!0):v&&!w&&(n.track({type:1,doc:v}),R=!0,(h||m)&&(u=!0)),R&&(w?(l=l.add(w),o=P?o.add(f):o.delete(f)):(l=l.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const f=this.query.limitType==="F"?l.last():l.first();l=l.delete(f.key),o=o.delete(f.key),n.track({type:1,doc:f})}return{tu:l,iu:n,Cs:u,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const l=e.iu.ya();l.sort((f,x)=>function(w,C){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:R})}};return P(w)-P(C)}(f.type,x.type)||this.eu(f.doc,x.doc)),this.ou(n),i=i??!1;const u=t&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,m=h!==this.Za;return this.Za=h,l.length!==0||m?{snapshot:new Ss(this.query,e.tu,o,l,e.mutatedKeys,h===0,m,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Rc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new id(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new rd(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ss.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ao="SyncEngine";class sb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class nb{constructor(e){this.key=e,this.hu=!1}}class rb{constructor(e,t,n,i,o,l){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new os(u=>Nh(u),ti),this.Iu=new Map,this.Eu=new Set,this.du=new re(M.comparator),this.Au=new Map,this.Ru=new Qa,this.Vu={},this.mu=new Map,this.fu=As.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ib(s,e,t=!0){const n=hd(s);let i;const o=n.Tu.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await ad(n,e,t,!0),i}async function ab(s,e){const t=hd(s);await ad(t,e,!0,!1)}async function ad(s,e,t,n){const i=await N0(s.localStore,Xe(e)),o=i.targetId,l=s.sharedClientState.addLocalQueryTarget(o,t);let u;return n&&(u=await ob(s,e,o,l==="current",i.resumeToken)),s.isPrimaryClient&&t&&Xh(s.remoteStore,i),u}async function ob(s,e,t,n,i){s.pu=(x,v,w)=>async function(P,R,H,z){let $=R.view.ru(H);$.Cs&&($=await Tc(P.localStore,R.query,!1).then(({documents:E})=>R.view.ru(E,$)));const Z=z&&z.targetChanges.get(R.targetId),Ie=z&&z.targetMismatches.get(R.targetId)!=null,oe=R.view.applyChanges($,P.isPrimaryClient,Z,Ie);return Vc(P,R.targetId,oe.au),oe.snapshot}(s,x,v,w);const o=await Tc(s.localStore,e,!0),l=new tb(e,o.Qs),u=l.ru(o.documents),h=Dn.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",i),m=l.applyChanges(u,s.isPrimaryClient,h);Vc(s,t,m.au);const f=new sb(e,t,l);return s.Tu.set(e,f),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),m.snapshot}async function lb(s,e,t){const n=B(s),i=n.Tu.get(e),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter(l=>!ti(l,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await fa(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Za(n.remoteStore,i.targetId),ya(n,i.targetId)}).catch(Ps)):(ya(n,i.targetId),await fa(n.localStore,i.targetId,!0))}async function cb(s,e){const t=B(s),n=t.Tu.get(e),i=t.Iu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Za(t.remoteStore,n.targetId))}async function ub(s,e,t){const n=xb(s);try{const i=await function(l,u){const h=B(l),m=se.now(),f=u.reduce((w,C)=>w.add(C.key),Q());let x,v;return h.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=yt(),P=Q();return h.Ns.getEntries(w,f).next(R=>{C=R,C.forEach((H,z)=>{z.isValidDocument()||(P=P.add(H))})}).next(()=>h.localDocuments.getOverlayedDocuments(w,C)).next(R=>{x=R;const H=[];for(const z of u){const $=wy(z,x.get(z.key).overlayedDocument);$!=null&&H.push(new ls(z.key,$,gh($.value.mapValue),pt.exists(!0)))}return h.mutationQueue.addMutationBatch(w,m,H,u)}).next(R=>{v=R;const H=R.applyToLocalDocumentSet(x,P);return h.documentOverlayCache.saveOverlays(w,R.batchId,H)})}).then(()=>({batchId:v.batchId,changes:jh(x)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(l,u,h){let m=l.Vu[l.currentUser.toKey()];m||(m=new re(K)),m=m.insert(u,h),l.Vu[l.currentUser.toKey()]=m}(n,i.batchId,t),await On(n,i.changes),await li(n.remoteStore)}catch(i){const o=ro(i,"Failed to persist write");t.reject(o)}}async function od(s,e){const t=B(s);try{const n=await v0(t.localStore,e);e.targetChanges.forEach((i,o)=>{const l=t.Au.get(o);l&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.hu=!0:i.modifiedDocuments.size>0?X(l.hu,14607):i.removedDocuments.size>0&&(X(l.hu,42227),l.hu=!1))}),await On(t,n,e)}catch(n){await Ps(n)}}function Dc(s,e,t){const n=B(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Tu.forEach((o,l)=>{const u=l.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(l,u){const h=B(l);h.onlineState=u;let m=!1;h.queries.forEach((f,x)=>{for(const v of x.Sa)v.va(u)&&(m=!0)}),m&&io(h)}(n.eventManager,e),i.length&&n.Pu.H_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function hb(s,e,t){const n=B(s);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Au.get(e),o=i&&i.key;if(o){let l=new re(M.comparator);l=l.insert(o,Te.newNoDocument(o,F.min()));const u=Q().add(o),h=new ii(F.min(),new Map,new re(K),l,u);await od(n,h),n.du=n.du.remove(o),n.Au.delete(e),oo(n)}else await fa(n.localStore,e,!1).then(()=>ya(n,e,t)).catch(Ps)}async function db(s,e){const t=B(s),n=e.batch.batchId;try{const i=await b0(t.localStore,e);cd(t,n,null),ld(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await On(t,i)}catch(i){await Ps(i)}}async function mb(s,e,t){const n=B(s);try{const i=await function(l,u){const h=B(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let f;return h.mutationQueue.lookupMutationBatch(m,u).next(x=>(X(x!==null,37113),f=x.keys(),h.mutationQueue.removeMutationBatch(m,x))).next(()=>h.mutationQueue.performConsistencyCheck(m)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(m,f,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,f)).next(()=>h.localDocuments.getDocuments(m,f))})}(n.localStore,e);cd(n,e,t),ld(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await On(n,i)}catch(i){await Ps(i)}}function ld(s,e){(s.mu.get(e)||[]).forEach(t=>{t.resolve()}),s.mu.delete(e)}function cd(s,e,t){const n=B(s);let i=n.Vu[n.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),n.Vu[n.currentUser.toKey()]=i}}function ya(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach(n=>{s.Ru.containsKey(n)||ud(s,n)})}function ud(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(Za(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),oo(s))}function Vc(s,e,t){for(const n of t)n instanceof rd?(s.Ru.addReference(n.key,e),pb(s,n)):n instanceof id?(V(ao,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||ud(s,n.key)):U(19791,{wu:n})}function pb(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(V(ao,"New document in limbo: "+t),s.Eu.add(n),oo(s))}function oo(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new M(ne.fromString(e)),n=s.fu.next();s.Au.set(n,new nb(t)),s.du=s.du.insert(t,n),Xh(s.remoteStore,new At(Xe(Ha(t.path)),n,"TargetPurposeLimboResolution",Jr.ce))}}async function On(s,e,t){const n=B(s),i=[],o=[],l=[];n.Tu.isEmpty()||(n.Tu.forEach((u,h)=>{l.push(n.pu(h,e,t).then(m=>{if((m||t)&&n.isPrimaryClient){const f=m?!m.fromCache:t?.targetChanges.get(h.targetId)?.current;n.sharedClientState.updateQueryState(h.targetId,f?"current":"not-current")}if(m){i.push(m);const f=Ja.As(h.targetId,m);o.push(f)}}))}),await Promise.all(l),n.Pu.H_(i),await async function(h,m){const f=B(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",x=>A.forEach(m,v=>A.forEach(v.Es,w=>f.persistence.referenceDelegate.addReference(x,v.targetId,w)).next(()=>A.forEach(v.ds,w=>f.persistence.referenceDelegate.removeReference(x,v.targetId,w)))))}catch(x){if(!ks(x))throw x;V(Xa,"Failed to update sequence numbers: "+x)}for(const x of m){const v=x.targetId;if(!x.fromCache){const w=f.Ms.get(v),C=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(v,P)}}}(n.localStore,o))}async function fb(s,e){const t=B(s);if(!t.currentUser.isEqual(e)){V(ao,"User change. New user:",e.toKey());const n=await Kh(t.localStore,e);t.currentUser=e,function(o,l){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new O(S.CANCELLED,l))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await On(t,n.Ls)}}function gb(s,e){const t=B(s),n=t.Au.get(e);if(n&&n.hu)return Q().add(n.key);{let i=Q();const o=t.Iu.get(e);if(!o)return i;for(const l of o){const u=t.Tu.get(l);i=i.unionWith(u.view.nu)}return i}}function hd(s){const e=B(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hb.bind(null,e),e.Pu.H_=X0.bind(null,e.eventManager),e.Pu.yu=Z0.bind(null,e.eventManager),e}function xb(s){const e=B(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mb.bind(null,e),e}class $r{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ai(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return y0(this.persistence,new f0,e.initialUser,this.serializer)}Cu(e){return new Gh(Ya.mi,this.serializer)}Du(e){return new T0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$r.provider={build:()=>new $r};class yb extends $r{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){X(this.persistence.referenceDelegate instanceof Fr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new e0(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new Gh(n=>Fr.mi(n,t),this.serializer)}}class ba{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Dc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=fb.bind(null,this.syncEngine),await G0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Q0}()}createDatastore(e){const t=ai(e.databaseInfo.databaseId),n=function(o){return new C0(o)}(e.databaseInfo);return function(o,l,u,h){return new D0(o,l,u,h)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,o,l,u){return new O0(n,i,o,l,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Dc(this.syncEngine,t,0),function(){return Ac.v()?new Ac:new j0}())}createSyncEngine(e,t){return function(i,o,l,u,h,m,f){const x=new rb(i,o,l,u,h,m);return f&&(x.gu=!0),x}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const n=B(t);V(ss,"RemoteStore shutting down."),n.Ea.add(5),await Vn(n),n.Aa.shutdown(),n.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ba.provider={build:()=>new ba};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="FirestoreClient";class vb{constructor(e,t,n,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=Ma.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async l=>{V(Ft,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(n,l=>(V(Ft,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ro(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Wi(s,e){s.asyncQueue.verifyOperationInProgress(),V(Ft,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Kh(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function Oc(s,e){s.asyncQueue.verifyOperationInProgress();const t=await _b(s);V(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(n=>Cc(e.remoteStore,n)),s.setAppCheckTokenChangeListener((n,i)=>Cc(e.remoteStore,i)),s._onlineComponents=e}async function _b(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){V(Ft,"Using user provided OfflineComponentProvider");try{await Wi(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Es("Error using user provided cache. Falling back to memory cache: "+t),await Wi(s,new $r)}}else V(Ft,"Using default OfflineComponentProvider"),await Wi(s,new yb(void 0));return s._offlineComponents}async function dd(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(V(Ft,"Using user provided OnlineComponentProvider"),await Oc(s,s._uninitializedComponentsProvider._online)):(V(Ft,"Using default OnlineComponentProvider"),await Oc(s,new ba))),s._onlineComponents}function wb(s){return dd(s).then(e=>e.syncEngine)}async function Nb(s){const e=await dd(s),t=e.eventManager;return t.onListen=ib.bind(null,e.syncEngine),t.onUnlisten=lb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ab.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cb.bind(null,e.syncEngine),t}function Eb(s,e,t={}){const n=new Pt;return s.asyncQueue.enqueueAndForget(async()=>function(o,l,u,h,m){const f=new bb({next:v=>{f.Nu(),l.enqueueAndForget(()=>J0(o,x));const w=v.docs.has(u);!w&&v.fromCache?m.reject(new O(S.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&v.fromCache&&h&&h.source==="server"?m.reject(new O(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(v)},error:v=>m.reject(v)}),x=new eb(Ha(u.path),f,{includeMetadataChanges:!0,qa:!0});return Y0(o,x)}(await Nb(s),s.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="firestore.googleapis.com",Lc=!0;class Uc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pd,this.ssl=Lc}else this.host=e.host,this.ssl=e.ssl??Lc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xy)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=md(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lo{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ex;switch(n.type){case"firstParty":return new Ax(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Mc.get(t);n&&(V("ComponentProvider","Removing Datastore"),Mc.delete(t),n.terminate())}(this),Promise.resolve()}}function Tb(s,e,t,n={}){s=yn(s,lo);const i=ns(e),o=s._getSettings(),l={...o,emulatorOptions:s._getEmulatorOptions()},u=`${e}:${t}`;i&&(Na(`https://${u}`),Ea("Firestore",!0)),o.host!==pd&&o.host!==u&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:i,emulatorOptions:n};if(!Jt(h,l)&&(s._setSettings(h),n.mockUserToken)){let m,f;if(typeof n.mockUserToken=="string")m=n.mockUserToken,f=Ee.MOCK_USER;else{m=du(n.mockUserToken,s._app?.options.projectId);const x=n.mockUserToken.sub||n.mockUserToken.user_id;if(!x)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ee(x)}s._authCredentials=new Tx(new ih(m,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new co(this.firestore,e,this._query)}}class pe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Pn(t,pe._jsonSchema))return new pe(e,n||null,new M(ne.fromString(t.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:ce("string",pe._jsonSchemaVersion),referencePath:ce("string")};class Tn extends co{constructor(e,t,n){super(e,t,Ha(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new M(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function Fc(s,e,...t){if(s=ke(s),arguments.length===1&&(e=Ma.newId()),Dx("doc","path",e),s instanceof lo){const n=ne.fromString(e,...t);return Zl(n),new pe(s,null,new M(n))}{if(!(s instanceof pe||s instanceof Tn))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ne.fromString(e,...t));return Zl(n),new pe(s.firestore,s instanceof Tn?s.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="AsyncQueue";class $c{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yh(this,"async_queue_retry"),this._c=()=>{const n=Hi();n&&V(Bc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Hi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Hi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Pt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ks(e))throw e;V(Bc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,xt("INTERNAL UNHANDLED ERROR: ",qc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=no.createAndSchedule(this,e,t,n,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&U(47125,{Pc:qc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function qc(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class uo extends lo{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new $c,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $c(e),this._firestoreClient=void 0,await e}}}function jb(s,e){const t=typeof s=="object"?s:Ia(),n=typeof s=="string"?s:kr,i=Gr(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=cu("firestore");o&&Tb(i,...o)}return i}function fd(s){if(s._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Ib(s),s._firestoreClient}function Ib(s){const e=s._freezeSettings(),t=function(i,o,l,u){return new zx(i,o,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,md(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)}(s._databaseId,s._app?.options.appId||"",s._persistenceKey,e);s._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new vb(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}}(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Le(ye.fromBase64String(e))}catch(t){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Le(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pn(e,Le._jsonSchema))return Le.fromBase64String(e.bytes)}}Le._jsonSchemaVersion="firestore/bytes/1.0",Le._jsonSchema={type:ce("string",Le._jsonSchemaVersion),bytes:ce("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(e){if(Pn(e,et._jsonSchema))return new et(e.latitude,e.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:ce("string",et._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pn(e,tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new tt(e.vectorValues);throw new O(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tt._jsonSchemaVersion="firestore/vectorValue/1.0",tt._jsonSchema={type:ce("string",tt._jsonSchemaVersion),vectorValues:ce("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=/^__.*__$/;class Sb{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,t,this.fieldTransforms):new kn(e,this.data,t,this.fieldTransforms)}}function xd(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ac:s})}}class mo{constructor(e,t,n,i,o,l){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new mo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return qr(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xd(this.Ac)&&Ab.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Cb{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ai(e)}Cc(e,t,n,i=!1){return new mo({Ac:e,methodName:t,Dc:n,path:xe.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rb(s){const e=s._freezeSettings(),t=ai(s._databaseId);return new Cb(s._databaseId,!!e.ignoreUndefinedProperties,t)}function Pb(s,e,t,n,i,o={}){const l=s.Cc(o.merge||o.mergeFields?2:0,e,t,i);_d("Data must be an object, but it was:",l,n);const u=bd(n,l);let h,m;if(o.merge)h=new He(l.fieldMask),m=l.fieldTransforms;else if(o.mergeFields){const f=[];for(const x of o.mergeFields){const v=kb(e,x,t);if(!l.contains(v))throw new O(S.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Vb(f,v)||f.push(v)}h=new He(f),m=l.fieldTransforms.filter(x=>h.covers(x.field))}else h=null,m=l.fieldTransforms;return new Sb(new Me(u),h,m)}function yd(s,e){if(vd(s=ke(s)))return _d("Unsupported field value:",e,s),bd(s,e);if(s instanceof gd)return function(n,i){if(!xd(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,i){const o=[];let l=0;for(const u of n){let h=yd(u,i.wc(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(s,e)}return function(n,i){if((n=ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gy(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=se.fromDate(n);return{timestampValue:Ur(i.serializer,o)}}if(n instanceof se){const o=new se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ur(i.serializer,o)}}if(n instanceof et)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Le)return{bytesValue:Uh(i.serializer,n._byteString)};if(n instanceof pe){const o=i.databaseId,l=n.firestore._databaseId;if(!l.isEqual(o))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ka(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof tt)return function(l,u){return{mapValue:{fields:{[ph]:{stringValue:fh},[Dr]:{arrayValue:{values:l.toArray().map(m=>{if(typeof m!="number")throw u.Sc("VectorValues must only contain numeric values.");return Wa(u.serializer,m)})}}}}}}(n,i);throw i.Sc(`Unsupported field value: ${La(n)}`)}(s,e)}function bd(s,e){const t={};return lh(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(s,(n,i)=>{const o=yd(i,e.mc(n));o!=null&&(t[n]=o)}),{mapValue:{fields:t}}}function vd(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof se||s instanceof et||s instanceof Le||s instanceof pe||s instanceof gd||s instanceof tt)}function _d(s,e,t){if(!vd(t)||!ah(t)){const n=La(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function kb(s,e,t){if((e=ke(e))instanceof ho)return e._internalPath;if(typeof e=="string")return wd(s,e);throw qr("Field path arguments must be of type string or ",s,!1,void 0,t)}const Db=new RegExp("[~\\*/\\[\\]]");function wd(s,e,t){if(e.search(Db)>=0)throw qr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new ho(...e.split("."))._internalPath}catch{throw qr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function qr(s,e,t,n,i){const o=n&&!n.isEmpty(),l=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${n}`),l&&(h+=` in document ${i}`),h+=")"),new O(S.INVALID_ARGUMENT,u+s+h)}function Vb(s,e){return s.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,n,i,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ob(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ed("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ob extends Nd{data(){return super.data()}}function Ed(s,e){return typeof e=="string"?wd(s,e):e instanceof ho?e._internalPath:e._delegate._internalPath}class Mb{convertValue(e,t="none"){switch(Lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return as(e,(i,o)=>{n[i]=this.convertValue(o,t)}),n}convertVectorValue(e){const t=e.fields?.[Dr].arrayValue?.values?.map(n=>ae(n.doubleValue));return new tt(t)}convertGeoPoint(e){return new et(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Zr(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(vn(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);X(Wh(n),9688,{name:e});const i=new _n(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(t)||xt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(s,e,t){let n;return n=s?s.toFirestore(e):e,n}class rn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qt extends Nd{constructor(e,t,n,i,o,l){super(e,t,n,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ed("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Qt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Qt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qt._jsonSchema={type:ce("string",Qt._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class vr extends Qt{data(e={}){return super.data(e)}}class mn{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new rn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new vr(this._firestore,this._userDataWriter,n.key,n,new rn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(u=>{const h=new vr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new rn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new vr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new rn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,f=-1;return u.type!==0&&(m=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),f=l.indexOf(u.doc.key)),{type:Ub(u.type),doc:h,oldIndex:m,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ma.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ub(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(s){s=yn(s,pe);const e=yn(s.firestore,uo);return Eb(fd(e),s._key).then(t=>Hb(e,s,t))}mn._jsonSchemaVersion="firestore/querySnapshot/1.0",mn._jsonSchema={type:ce("string",mn._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};class Bb extends Mb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Le(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function $b(s,e,t){s=yn(s,pe);const n=yn(s.firestore,uo),i=Lb(s.converter,e);return qb(n,[Pb(Rb(n),"setDoc",s._key,i,s.converter!==null,t).toMutation(s._key,pt.none())])}function qb(s,e){return function(n,i){const o=new Pt;return n.asyncQueue.enqueueAndForget(async()=>ub(await wb(n),i,o)),o.promise}(fd(s),e)}function Hb(s,e,t){const n=t.docs.get(e._key),i=new Bb(s);return new Qt(s,i,e._key,n,new rn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Rs=i})(rs),Xt(new Dt("firestore",(n,{instanceIdentifier:i,options:o})=>{const l=n.getProvider("app").getImmediate(),u=new uo(new jx(n.getProvider("auth-internal")),new Sx(l,n.getProvider("app-check-internal")),function(m,f){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(m.options.projectId,f)}(l,i),l);return o={useFetchStreams:t,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Qe(Ql,Yl,e),Qe(Ql,Yl,"esm2020")})();var Wb="firebase",zb="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(Wb,zb,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="firebasestorage.googleapis.com",Gb="storageBucket",Kb=120*1e3,Qb=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends it{constructor(e,t,n=0){super(zi(e),`Firebase Storage: ${t} (${zi(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function zi(s){return"storage/"+s}function Yb(){const s="An unknown error occurred, please check the error payload for server response.";return new at(rt.UNKNOWN,s)}function Jb(){return new at(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xb(){return new at(rt.CANCELED,"User canceled the upload/download.")}function Zb(s){return new at(rt.INVALID_URL,"Invalid URL '"+s+"'.")}function ev(s){return new at(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function Hc(s){return new at(rt.INVALID_ARGUMENT,s)}function jd(){return new at(rt.APP_DELETED,"The Firebase app was deleted.")}function tv(s){return new at(rt.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=We.makeFromUrl(e,t)}catch{return new We(e,"")}if(n.path==="")return n;throw ev(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function o(Z){Z.path.charAt(Z.path.length-1)==="/"&&(Z.path_=Z.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+i+l,"i"),h={bucket:1,path:3};function m(Z){Z.path_=decodeURIComponent(Z.path)}const f="v[A-Za-z0-9_]+",x=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",w=new RegExp(`^https?://${x}/${f}/b/${i}/o${v}`,"i"),C={bucket:1,path:3},P=t===Td?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",H=new RegExp(`^https?://${P}/${i}/${R}`,"i"),$=[{regex:u,indices:h,postModify:o},{regex:w,indices:C,postModify:m},{regex:H,indices:{bucket:1,path:2},postModify:m}];for(let Z=0;Z<$.length;Z++){const Ie=$[Z],oe=Ie.regex.exec(e);if(oe){const E=oe[Ie.indices.bucket];let g=oe[Ie.indices.path];g||(g=""),n=new We(E,g),Ie.postModify(n);break}}if(n==null)throw Zb(e);return n}}class sv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(s,e,t){let n=1,i=null,o=null,l=!1,u=0;function h(){return u===2}let m=!1;function f(...R){m||(m=!0,e.apply(null,R))}function x(R){i=setTimeout(()=>{i=null,s(w,h())},R)}function v(){o&&clearTimeout(o)}function w(R,...H){if(m){v();return}if(R){v(),f.call(null,R,...H);return}if(h()||l){v(),f.call(null,R,...H);return}n<64&&(n*=2);let $;u===1?(u=2,$=0):$=(n+Math.random())*1e3,x($)}let C=!1;function P(R){C||(C=!0,v(),!m&&(i!==null?(R||(u=2),clearTimeout(i),x(0)):R||(u=1)))}return x(0),o=setTimeout(()=>{l=!0,P(!0)},t),P}function rv(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(s){return s!==void 0}function Wc(s,e,t,n){if(n<e)throw Hc(`Invalid value for '${s}'. Expected ${e} or greater.`);if(n>t)throw Hc(`Invalid value for '${s}'. Expected ${t} or less.`)}function av(s){const e=encodeURIComponent;let t="?";for(const n in s)if(s.hasOwnProperty(n)){const i=e(n)+"="+e(s[n]);t=t+i+"&"}return t=t.slice(0,-1),t}var Hr;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(Hr||(Hr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(s,e){const t=s>=500&&s<600,i=[408,429].indexOf(s)!==-1,o=e.indexOf(s)!==-1;return t||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,n,i,o,l,u,h,m,f,x,v=!0,w=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=h,this.timeout_=m,this.progressCallback_=f,this.connectionFactory_=x,this.retry=v,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,P)=>{this.resolve_=C,this.reject_=P,this.start_()})}start_(){const e=(n,i)=>{if(i){n(!1,new cr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=u=>{const h=u.loaded,m=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,m)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const u=o.getErrorCode()===Hr.NO_ERROR,h=o.getStatus();if(!u||ov(h,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===Hr.ABORT;n(!1,new cr(!1,null,f));return}const m=this.successCodes_.indexOf(h)!==-1;n(!0,new cr(m,o))})},t=(n,i)=>{const o=this.resolve_,l=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(u,u.getResponse());iv(h)?o(h):o()}catch(h){l(h)}else if(u!==null){const h=Yb();h.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,h)):l(h)}else if(i.canceled){const h=this.appDelete_?jd():Xb();l(h)}else{const h=Jb();l(h)}};this.canceled_?t(!1,new cr(!1,null,!0)):this.backoffId_=nv(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cr{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function cv(s,e){e!==null&&e.length>0&&(s.Authorization="Firebase "+e)}function uv(s,e){s["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hv(s,e){e&&(s["X-Firebase-GMPID"]=e)}function dv(s,e){e!==null&&(s["X-Firebase-AppCheck"]=e)}function mv(s,e,t,n,i,o,l=!0,u=!1){const h=av(s.urlParams),m=s.url+h,f=Object.assign({},s.headers);return hv(f,e),cv(f,t),uv(f,o),dv(f,n),new lv(m,s.method,f,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,i,l,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(s){if(s.length===0)return null;const e=s.lastIndexOf("/");return e===-1?"":s.slice(0,e)}function fv(s){const e=s.lastIndexOf("/",s.length-2);return e===-1?s:s.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){this._service=e,t instanceof We?this._location=t:this._location=We.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Wr(e,t)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fv(this._location.path)}get storage(){return this._service}get parent(){const e=pv(this._location.path);if(e===null)return null;const t=new We(this._location.bucket,e);return new Wr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw tv(e)}}function zc(s,e){const t=e?.[Gb];return t==null?null:We.makeFromBucketSpec(t,s)}function gv(s,e,t,n={}){s.host=`${e}:${t}`;const i=ns(e);i&&(Na(`https://${s.host}/b`),Ea("Storage",!0)),s._isUsingEmulator=!0,s._protocol=i?"https":"http";const{mockUserToken:o}=n;o&&(s._overrideAuthToken=typeof o=="string"?o:du(o,s.app.options.projectId))}class xv{constructor(e,t,n,i,o,l=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=Td,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kb,this._maxUploadRetryTime=Qb,this._requests=new Set,i!=null?this._bucket=We.makeFromBucketSpec(i,this._host):this._bucket=zc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=zc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,t,n,i,o=!0){if(this._deleted)return new sv(jd());{const l=mv(e,this._appId,n,i,t,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const Gc="@firebase/storage",Kc="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="storage";function yv(s=Ia(),e){s=ke(s);const n=Gr(s,Id).getImmediate({identifier:e}),i=cu("storage");return i&&bv(n,...i),n}function bv(s,e,t,n={}){gv(s,e,t,n)}function vv(s,{instanceIdentifier:e}){const t=s.getProvider("app").getImmediate(),n=s.getProvider("auth-internal"),i=s.getProvider("app-check-internal");return new xv(t,n,i,e,rs)}function _v(){Xt(new Dt(Id,vv,"PUBLIC").setMultipleInstances(!0)),Qe(Gc,Kc,""),Qe(Gc,Kc,"esm2020")}_v();const wv={apiKey:"AIzaSyCqnOTl0EMUsEwPVH92VlikgPLXH8OkatM",authDomain:"feelora-ce00d.firebaseapp.com",projectId:"feelora-ce00d",storageBucket:"feelora-ce00d.firebasestorage.app",messagingSenderId:"983501174854",appId:"1:983501174854:web:6bf7d62b44edb21c2f3247",measurementId:"G-MQ79Q0MNT8"},po=fu(wv),ur=wx(po),Qc=jb(po);yv(po);const Ad=W.createContext(void 0),ci=()=>{const s=W.useContext(Ad);if(s===void 0)throw new Error("useAuth must be used within an AuthProvider");return s},Nv=({children:s})=>{const[e,t]=W.useState(null),[n,i]=W.useState(null),[o,l]=W.useState(!0),u=async(x,v)=>{await og(ur,x,v)},h=async(x,v,w,C)=>{const{user:P}=await ag(ur,x,v),R={uid:P.uid,email:P.email,displayName:C,role:w};await $b(Fc(Qc,"users",P.uid),R),i(R)},m=async()=>{await hg(ur),i(null)};W.useEffect(()=>ug(ur,async v=>{if(t(v),v)try{const w=Fc(Qc,"users",v.uid),C=await Fb(w);C.exists()&&i(C.data())}catch(w){console.error("Error fetching user profile:",w)}else i(null);l(!1)}),[]);const f={currentUser:e,userProfile:n,login:u,signup:h,logout:m,loading:o};return r.jsx(Ad.Provider,{value:f,children:!o&&s})},Ev=()=>{const{currentUser:s,userProfile:e,logout:t}=ci(),n=wa(),[i,o]=W.useState(!1),l=async()=>{try{await t(),n("/")}catch(h){console.error("Failed to log out",h)}},u=()=>e?`/dashboard/${e.role}`:"/";return r.jsxs("header",{className:"bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex justify-between items-center h-16",children:[r.jsxs(q,{to:"/",className:"flex items-center space-x-2 group",children:[r.jsx(k.div,{whileHover:{scale:1.05},className:"bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-xl",children:r.jsx(Pe,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent",children:"Feelora"}),r.jsx("p",{className:"text-xs text-gray-500 -mt-1",children:"Let your soul exhale"})]})]}),r.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[r.jsx(q,{to:"/services",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Services"}),r.jsx(q,{to:"/resources",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Resources"}),r.jsx(q,{to:"/events",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Events"}),r.jsx(q,{to:"/emergency",className:"text-red-600 hover:text-red-700 font-medium transition-colors",children:"Emergency"}),s?r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(q,{to:"/chat",className:"p-2 text-gray-600 hover:text-blue-600 transition-colors",children:r.jsx(kt,{className:"h-5 w-5"})}),r.jsx(q,{to:"/book",className:"p-2 text-gray-600 hover:text-blue-600 transition-colors",children:r.jsx(Ce,{className:"h-5 w-5"})}),r.jsx(q,{to:u(),className:"p-2 text-gray-600 hover:text-blue-600 transition-colors",children:r.jsx(Ke,{className:"h-5 w-5"})}),r.jsx("button",{onClick:l,className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all",children:"Logout"})]}):r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(q,{to:"/login",className:"text-gray-600 hover:text-blue-600 transition-colors",children:"Login"}),r.jsx(q,{to:"/signup",className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all",children:"Sign Up"})]})]}),r.jsx("button",{onClick:()=>o(!i),className:"md:hidden p-2 text-gray-600 hover:text-blue-600",children:i?r.jsx(um,{className:"h-6 w-6"}):r.jsx(hm,{className:"h-6 w-6"})})]})}),r.jsx(Jc,{children:i&&r.jsx(k.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-white border-t border-blue-100",children:r.jsxs("div",{className:"px-4 py-4 space-y-4",children:[r.jsx(q,{to:"/services",className:"block text-gray-600 hover:text-blue-600",children:"Services"}),r.jsx(q,{to:"/resources",className:"block text-gray-600 hover:text-blue-600",children:"Resources"}),r.jsx(q,{to:"/events",className:"block text-gray-600 hover:text-blue-600",children:"Events"}),r.jsx(q,{to:"/emergency",className:"block text-red-600 hover:text-red-700 font-medium",children:"Emergency"}),s?r.jsxs(r.Fragment,{children:[r.jsx(q,{to:"/chat",className:"block text-gray-600 hover:text-blue-600",children:"AI Chat"}),r.jsx(q,{to:"/book",className:"block text-gray-600 hover:text-blue-600",children:"Book Session"}),r.jsx(q,{to:u(),className:"block text-gray-600 hover:text-blue-600",children:"Dashboard"}),r.jsx("button",{onClick:l,className:"w-full text-left text-gray-600 hover:text-blue-600",children:"Logout"})]}):r.jsxs(r.Fragment,{children:[r.jsx(q,{to:"/login",className:"block text-gray-600 hover:text-blue-600",children:"Login"}),r.jsx(q,{to:"/signup",className:"block bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg text-center",children:"Sign Up"})]})]})})})]})},Tv=()=>r.jsx("footer",{className:"bg-gray-900 text-white",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-xl",children:r.jsx(Pe,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-bold",children:"Feelora"}),r.jsx("p",{className:"text-sm text-gray-400",children:"Let your soul exhale"})]})]}),r.jsx("p",{className:"text-gray-400 text-sm",children:"Your trusted companion for emotional wellness and mental health support."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(q,{to:"/services",className:"block text-gray-400 hover:text-white transition-colors",children:"Services"}),r.jsx(q,{to:"/resources",className:"block text-gray-400 hover:text-white transition-colors",children:"Resources"}),r.jsx(q,{to:"/events",className:"block text-gray-400 hover:text-white transition-colors",children:"Events"}),r.jsx(q,{to:"/about",className:"block text-gray-400 hover:text-white transition-colors",children:"About Us"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Support"}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(q,{to:"/emergency",className:"block text-red-400 hover:text-red-300 transition-colors",children:"Emergency Help"}),r.jsx(q,{to:"/contact",className:"block text-gray-400 hover:text-white transition-colors",children:"Contact Us"}),r.jsx(q,{to:"/privacy",className:"block text-gray-400 hover:text-white transition-colors",children:"Privacy Policy"}),r.jsx(q,{to:"/terms",className:"block text-gray-400 hover:text-white transition-colors",children:"Terms of Service"})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Contact"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-center space-x-2 text-gray-400",children:[r.jsx(Xc,{className:"h-4 w-4"}),r.jsx("span",{className:"text-sm",children:"support@feelora.com"})]}),r.jsxs("div",{className:"flex items-center space-x-2 text-gray-400",children:[r.jsx(an,{className:"h-4 w-4"}),r.jsx("span",{className:"text-sm",children:"+1 (555) 123-4567"})]}),r.jsxs("div",{className:"flex items-center space-x-2 text-gray-400",children:[r.jsx(va,{className:"h-4 w-4"}),r.jsx("span",{className:"text-sm",children:"24/7 Online Support"})]})]})]})]}),r.jsxs("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center",children:[r.jsx("p",{className:"text-gray-400 text-sm",children:"© 2025 Feelora. All rights reserved. | Mental health support when you need it most."}),r.jsx("p",{className:"text-gray-500 text-xs mt-2",children:"If you're in crisis, please call emergency services or contact a crisis helpline immediately."})]})]})}),jv=({children:s})=>r.jsxs("div",{className:"min-h-screen flex flex-col",children:[r.jsx(Ev,{}),r.jsx("main",{className:"flex-1",children:s}),r.jsx(Tv,{})]}),Xs=({children:s,requiredRole:e})=>{const{currentUser:t,userProfile:n}=ci();return t?e&&n?.role!==e?r.jsx(gl,{to:"/",replace:!0}):r.jsx(r.Fragment,{children:s}):r.jsx(gl,{to:"/login",replace:!0})},Iv=[{id:"mental-health",title:"Mental Health",description:"Anxiety, Depression, Stress Management",icon:Zc,color:"from-blue-500 to-blue-600",bgColor:"bg-blue-50",textColor:"text-blue-600"},{id:"career",title:"Career Counseling",description:"Job Stress, Work-Life Balance, Career Changes",icon:eu,color:"from-purple-500 to-purple-600",bgColor:"bg-purple-50",textColor:"text-purple-600"},{id:"relationships",title:"Relationships",description:"Couples Therapy, Family Issues, Communication",icon:Pe,color:"from-pink-500 to-pink-600",bgColor:"bg-pink-50",textColor:"text-pink-600"},{id:"lgbtq",title:"LGBTQ+ Support",description:"Identity, Coming Out, Discrimination Support",icon:Ve,color:"from-rainbow-500 to-rainbow-600",bgColor:"bg-gradient-to-r from-red-50 via-yellow-50 to-blue-50",textColor:"text-indigo-600"},{id:"parenting",title:"Parenting",description:"Child Development, Family Dynamics, Teen Issues",icon:tu,color:"from-green-500 to-green-600",bgColor:"bg-green-50",textColor:"text-green-600"},{id:"trauma",title:"Trauma & PTSD",description:"Healing from Past Experiences, Coping Strategies",icon:Ue,color:"from-red-500 to-red-600",bgColor:"bg-red-50",textColor:"text-red-600"}],Yc=()=>r.jsxs("div",{className:"min-h-screen",children:[r.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[r.jsxs(k.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-4xl md:text-6xl font-bold text-gray-900 mb-6",children:["Let Your Soul"," ",r.jsx("span",{className:"bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent",children:"Exhale"})]}),r.jsx(k.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Your trusted companion for emotional wellness. Connect with verified counselors or chat with our AI assistant for immediate support."}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[r.jsxs(q,{to:"/chat",className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center space-x-2",children:[r.jsx(kt,{className:"h-5 w-5"}),r.jsx("span",{children:"Start AI Chat"})]}),r.jsxs(q,{to:"/book",className:"border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center space-x-2",children:[r.jsx(Ce,{className:"h-5 w-5"}),r.jsx("span",{children:"Book Counselor"})]})]})]})}),r.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"}),r.jsx("div",{className:"absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"})]}),r.jsx("section",{className:"py-20 bg-white",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"Find Support That Fits Your Needs"}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Explore our specialized counseling categories and connect with experts who understand your unique situation."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Iv.map((s,e)=>r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:e*.1},whileHover:{y:-5},className:"group",children:r.jsxs(q,{to:`/category/${s.id}`,className:"block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200",children:[r.jsx("div",{className:`${s.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`,children:r.jsx(s.icon,{className:`h-8 w-8 ${s.textColor}`})}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors",children:s.title}),r.jsx("p",{className:"text-gray-600 mb-4 leading-relaxed",children:s.description}),r.jsxs("div",{className:"flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform",children:[r.jsx("span",{children:"Explore Category"}),r.jsx(dm,{className:"h-4 w-4 ml-1"})]})]})},s.id))})]})}),r.jsx("section",{className:"bg-gradient-to-r from-red-500 to-red-600 text-white py-12",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"text-center",children:[r.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Need Immediate Help?"}),r.jsx("p",{className:"text-xl mb-6 opacity-90",children:"If you're in crisis, emergency support is available 24/7"}),r.jsxs(q,{to:"/emergency",className:"bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center space-x-2",children:[r.jsx(Ue,{className:"h-5 w-5"}),r.jsx("span",{children:"Get Emergency Support"})]})]})})}),r.jsx("section",{className:"py-20 bg-gray-50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 text-center",children:[r.jsxs(k.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"bg-white rounded-2xl p-8 shadow-sm",children:[r.jsx("div",{className:"text-4xl font-bold text-blue-600 mb-2",children:"10,000+"}),r.jsx("div",{className:"text-gray-600",children:"People Helped"})]}),r.jsxs(k.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1},className:"bg-white rounded-2xl p-8 shadow-sm",children:[r.jsx("div",{className:"text-4xl font-bold text-green-600 mb-2",children:"500+"}),r.jsx("div",{className:"text-gray-600",children:"Verified Counselors"})]}),r.jsxs(k.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.2},className:"bg-white rounded-2xl p-8 shadow-sm",children:[r.jsx("div",{className:"text-4xl font-bold text-purple-600 mb-2",children:"24/7"}),r.jsx("div",{className:"text-gray-600",children:"Support Available"})]})]})})}),r.jsx("section",{className:"py-20 bg-white",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsx("div",{className:"text-center mb-16",children:r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"What Our Community Says"})}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{name:"Sarah M.",role:"Working Professional",content:"Feelora helped me through my anxiety with both AI support and amazing counselors. The 24/7 availability saved me during my darkest moments.",rating:5},{name:"Mike R.",role:"College Student",content:"The AI chat feature is incredible for immediate support, and booking sessions with counselors is so easy. This platform changed my life.",rating:5},{name:"Jennifer L.",role:"Parent",content:"Found the perfect family counselor through Feelora. The emergency support feature gives me peace of mind knowing help is always available.",rating:5}].map((s,e)=>r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:e*.1},className:"bg-gray-50 rounded-2xl p-8",children:[r.jsx("div",{className:"flex items-center mb-4",children:[...Array(s.rating)].map((t,n)=>r.jsx(dt,{className:"h-5 w-5 text-yellow-400 fill-current"},n))}),r.jsxs("p",{className:"text-gray-700 mb-6 italic",children:['"',s.content,'"']}),r.jsxs("div",{children:[r.jsx("div",{className:"font-semibold text-gray-900",children:s.name}),r.jsx("div",{className:"text-sm text-gray-600",children:s.role})]})]},e))})]})})]}),Av="AIzaSyCiWHaacgsIgIzUkdRmwsdiuUm2EG05HgI",Sv="https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",Cv=async(s,e=[])=>{try{const t=`You are a compassionate, professional AI wellness counselor. Your role is to:
- Provide empathetic, supportive responses
- Offer practical coping strategies when appropriate
- Maintain professional boundaries
- Encourage professional help when needed
- Keep responses conversational and warm
- Focus on mental health and emotional well-being
- Never give medical advice or diagnose conditions
- Always prioritize user safety and well-being

Respond as a caring counselor would, with empathy and practical support. Keep responses under 200 words.`,n=e.length>0?`Previous conversation context: ${e.slice(-3).join(" | ")}

`:"",i=`${t}

${n}User: ${s}

Counselor:`,o=await fetch(`${Sv}?key=${Av}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:i}]}],generationConfig:{temperature:.7,topK:40,topP:.95,maxOutputTokens:300},safetySettings:[{category:"HARM_CATEGORY_HARASSMENT",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_HATE_SPEECH",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_SEXUALLY_EXPLICIT",threshold:"BLOCK_MEDIUM_AND_ABOVE"},{category:"HARM_CATEGORY_DANGEROUS_CONTENT",threshold:"BLOCK_MEDIUM_AND_ABOVE"}]})});if(!o.ok)throw new Error(`API request failed: ${o.status}`);const l=await o.json();if(l.candidates&&l.candidates[0]&&l.candidates[0].content.parts[0])return l.candidates[0].content.parts[0].text.trim();throw new Error("Invalid response format from Gemini API")}catch(t){return console.error("Error calling Gemini API:",t),"I'm here to listen and support you. I'm experiencing some technical difficulties right now, but I want you to know that your feelings are valid and important. Would you like to try sharing again, or would you prefer to connect with one of our human counselors?"}},Rv=()=>{const[s,e]=W.useState([{id:"1",content:"Hello! I'm your AI wellness companion. I'm here to listen and support you. How are you feeling today?",sender:"ai",timestamp:new Date}]),[t,n]=W.useState(""),[i,o]=W.useState(!1),l=W.useRef(null),u=()=>{l.current?.scrollIntoView({behavior:"smooth"})};W.useEffect(()=>{u()},[s]);const h=async()=>{if(!t.trim())return;const x={id:Date.now().toString(),content:t,sender:"user",timestamp:new Date};e(v=>[...v,x]),n(""),o(!0);try{const v=s.filter(P=>P.sender==="user").map(P=>P.content).slice(-5),w=await Cv(t,v),C={id:(Date.now()+1).toString(),content:w,sender:"ai",timestamp:new Date};e(P=>[...P,C])}catch(v){console.error("Error generating AI response:",v);const w={id:(Date.now()+1).toString(),content:"I'm here to listen and support you. I'm experiencing some technical difficulties right now, but I want you to know that your feelings are valid and important. Would you like to try sharing again, or would you prefer to connect with one of our human counselors?",sender:"ai",timestamp:new Date};e(C=>[...C,w])}finally{o(!1)}},m=x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),h())},f=[{text:"I'm feeling anxious",emoji:"😰"},{text:"I need someone to talk to",emoji:"💬"},{text:"I'm having a tough day",emoji:"😔"},{text:"I want to feel better",emoji:"🌱"}];return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto h-screen flex flex-col",children:[r.jsx("div",{className:"bg-white/80 backdrop-blur-md border-b border-blue-100 p-6",children:r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-full",children:r.jsx(mm,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"AI Wellness Assistant"}),r.jsx("p",{className:"text-sm text-gray-600",children:"Available 24/7 • Confidential & Safe"})]})]})}),r.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[r.jsx(Jc,{children:s.map(x=>r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`flex ${x.sender==="user"?"justify-end":"justify-start"}`,children:r.jsxs("div",{className:`flex items-start space-x-3 max-w-xs lg:max-w-md ${x.sender==="user"?"flex-row-reverse space-x-reverse":""}`,children:[r.jsx("div",{className:`p-2 rounded-full ${x.sender==="user"?"bg-blue-600":"bg-gradient-to-r from-blue-600 to-green-500"}`,children:x.sender==="user"?r.jsx(Ke,{className:"h-4 w-4 text-white"}):r.jsx(Pe,{className:"h-4 w-4 text-white"})}),r.jsxs("div",{className:`p-4 rounded-2xl ${x.sender==="user"?"bg-blue-600 text-white rounded-br-sm":"bg-white shadow-sm border border-gray-100 rounded-bl-sm"}`,children:[r.jsx("p",{className:"text-sm leading-relaxed",children:x.content}),r.jsx("p",{className:`text-xs mt-2 ${x.sender==="user"?"text-blue-100":"text-gray-500"}`,children:x.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})},x.id))}),i&&r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex justify-start",children:r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-full",children:r.jsx(Pe,{className:"h-4 w-4 text-white"})}),r.jsx("div",{className:"bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-sm p-4",children:r.jsxs("div",{className:"flex space-x-1",children:[r.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),r.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"}),r.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"})]})})]})}),r.jsx("div",{ref:l})]}),s.length===1&&r.jsxs("div",{className:"px-6 pb-4",children:[r.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Quick responses:"}),r.jsx("div",{className:"flex flex-wrap gap-2",children:f.map((x,v)=>r.jsxs("button",{onClick:()=>n(x.text),className:"bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2",children:[r.jsx("span",{children:x.emoji}),r.jsx("span",{children:x.text})]},v))})]}),r.jsxs("div",{className:"bg-white border-t border-gray-100 p-6",children:[r.jsxs("div",{className:"flex items-end space-x-4",children:[r.jsx("div",{className:"flex-1",children:r.jsx("textarea",{value:t,onChange:x=>n(x.target.value),onKeyPress:m,placeholder:"Share what's on your mind...",className:"w-full px-4 py-3 border border-gray-200 rounded-2xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",rows:1,style:{minHeight:"44px",maxHeight:"120px"}})}),r.jsx("button",{onClick:h,disabled:!t.trim()||i,className:"bg-gradient-to-r from-blue-600 to-green-500 text-white p-3 rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:r.jsx(su,{className:"h-5 w-5"})})]}),r.jsxs("p",{className:"text-xs text-gray-500 mt-3 text-center",children:["This AI assistant provides support but is not a replacement for professional therapy.",r.jsx("br",{}),"For emergencies, please contact crisis services immediately."]})]})]})})},Pv=[{id:"mental-health",title:"Mental Health Counseling",description:"Professional support for anxiety, depression, stress, and other mental health concerns.",icon:Zc,color:"from-blue-500 to-blue-600",features:["Individual Therapy","Group Sessions","Crisis Support","24/7 Availability"],pricing:"Starting at $80/session",duration:"50-60 minutes"},{id:"career",title:"Career & Life Coaching",description:"Navigate career transitions, work-life balance, and professional development.",icon:eu,color:"from-purple-500 to-purple-600",features:["Career Planning","Interview Prep","Leadership Coaching","Work-Life Balance"],pricing:"Starting at $100/session",duration:"60 minutes"},{id:"relationships",title:"Relationship Counseling",description:"Couples therapy, family counseling, and relationship communication skills.",icon:Pe,color:"from-pink-500 to-pink-600",features:["Couples Therapy","Family Sessions","Communication Skills","Conflict Resolution"],pricing:"Starting at $120/session",duration:"60-90 minutes"},{id:"lgbtq",title:"LGBTQ+ Affirming Support",description:"Specialized support for LGBTQ+ individuals and families with affirming counselors.",icon:Ve,color:"from-indigo-500 to-indigo-600",features:["Identity Exploration","Coming Out Support","Family Therapy","Discrimination Support"],pricing:"Starting at $90/session",duration:"50-60 minutes"},{id:"parenting",title:"Parenting & Family Support",description:"Guidance for parents, child development support, and family dynamics.",icon:tu,color:"from-green-500 to-green-600",features:["Parenting Skills","Child Development","Teen Support","Family Dynamics"],pricing:"Starting at $95/session",duration:"50-60 minutes"},{id:"trauma",title:"Trauma & PTSD Support",description:"Specialized trauma-informed therapy for healing and recovery.",icon:Ue,color:"from-red-500 to-red-600",features:["EMDR Therapy","CBT for Trauma","PTSD Support","Healing-Focused"],pricing:"Starting at $110/session",duration:"60-75 minutes"}],kv=()=>r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:[r.jsx("section",{className:"py-20",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[r.jsx(k.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:"Professional Wellness Services"}),r.jsx(k.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Connect with verified, licensed counselors who specialize in your specific needs. All sessions are confidential and available both online and in-person."}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[r.jsxs(q,{to:"/book",className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center space-x-2",children:[r.jsx("span",{children:"Book a Session"}),r.jsx(pm,{className:"h-5 w-5"})]}),r.jsx(q,{to:"/chat",className:"border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all",children:"Try AI Assistant First"})]})]})})}),r.jsx("section",{className:"py-20 bg-white",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:Pv.map((s,e)=>r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:e*.1},className:"bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden",children:r.jsxs("div",{className:"p-8",children:[r.jsxs("div",{className:"flex items-start justify-between mb-6",children:[r.jsx("div",{className:`bg-gradient-to-r ${s.color} w-16 h-16 rounded-xl flex items-center justify-center`,children:r.jsx(s.icon,{className:"h-8 w-8 text-white"})}),r.jsxs("div",{className:"text-right",children:[r.jsx("div",{className:"text-2xl font-bold text-gray-900",children:s.pricing}),r.jsxs("div",{className:"text-sm text-gray-600 flex items-center",children:[r.jsx(Fe,{className:"h-4 w-4 mr-1"}),s.duration]})]})]}),r.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3",children:s.title}),r.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:s.description}),r.jsx("div",{className:"space-y-3 mb-8",children:s.features.map((t,n)=>r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx(Ns,{className:"h-5 w-5 text-green-500"}),r.jsx("span",{className:"text-gray-700",children:t})]},n))}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[r.jsx(q,{to:`/category/${s.id}`,className:"flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all text-center",children:"Learn More"}),r.jsx(q,{to:"/book",className:`flex-1 bg-gradient-to-r ${s.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center`,children:"Book Now"})]})]})},s.id))})})}),r.jsx("section",{className:"py-20 bg-gray-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Why Choose Feelora?"}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"We're committed to providing the highest quality mental health support"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center",children:[r.jsx("div",{className:"bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(dt,{className:"h-8 w-8 text-blue-600"})}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Verified Professionals"}),r.jsx("p",{className:"text-gray-600",children:"All counselors are licensed, verified, and regularly reviewed for quality."})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},className:"text-center",children:[r.jsx("div",{className:"bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(Ue,{className:"h-8 w-8 text-green-600"})}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"100% Confidential"}),r.jsx("p",{className:"text-gray-600",children:"Your privacy is protected with end-to-end encryption and HIPAA compliance."})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:"text-center",children:[r.jsx("div",{className:"bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(Fe,{className:"h-8 w-8 text-purple-600"})}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"24/7 Support"}),r.jsx("p",{className:"text-gray-600",children:"Emergency support and AI assistance available around the clock."})]})]})]})}),r.jsx("section",{className:"py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[r.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Ready to Start Your Wellness Journey?"}),r.jsx("p",{className:"text-xl mb-8 opacity-90",children:"Take the first step towards better mental health today"}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[r.jsx(q,{to:"/book",className:"bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Book Your First Session"}),r.jsx(q,{to:"/emergency",className:"border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all",children:"Need Immediate Help?"})]})]})})]}),Dv=[{name:"National Suicide Prevention Lifeline",number:"988",description:"24/7 free and confidential support for people in distress",type:"Crisis"},{name:"Crisis Text Line",number:"Text HOME to 741741",description:"Free, 24/7 support via text message",type:"Text"},{name:"National Domestic Violence Hotline",number:"1-800-799-7233",description:"24/7 confidential support for domestic violence survivors",type:"Crisis"},{name:"SAMHSA National Helpline",number:"1-800-662-4357",description:"Treatment referral and information service",type:"Support"},{name:"Emergency Services",number:"911",description:"For immediate life-threatening emergencies",type:"Emergency"}],Vv=["Thoughts of suicide or self-harm","Feeling hopeless or trapped","Extreme mood swings","Talking about being a burden to others","Increasing use of alcohol or drugs","Withdrawing from friends and activities","Giving away prized possessions","Saying goodbye to loved ones"],Ov=()=>r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50",children:[r.jsx("div",{className:"bg-gradient-to-r from-red-600 to-red-700 text-white py-6",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"text-center",children:[r.jsx(pn,{className:"h-8 w-8 mx-auto mb-2"}),r.jsx("h1",{className:"text-xl font-bold",children:"Emergency Mental Health Support"}),r.jsx("p",{className:"mt-2 opacity-90",children:"If you're in immediate danger, call 911 or go to your nearest emergency room"})]})})}),r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsx("section",{className:"mb-16",children:r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500",children:[r.jsxs("div",{className:"flex items-center mb-4",children:[r.jsx(Ue,{className:"h-8 w-8 text-red-600 mr-3"}),r.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Immediate Crisis Support"})]}),r.jsx("p",{className:"text-gray-700 mb-6 text-lg",children:"If you're having thoughts of suicide or self-harm, please reach out for help immediately. You are not alone, and support is available 24/7."}),r.jsx("div",{className:"bg-red-50 rounded-xl p-6 mb-6",children:r.jsxs("div",{className:"text-center",children:[r.jsx("h3",{className:"text-xl font-bold text-red-800 mb-3",children:"Crisis Hotline"}),r.jsxs("a",{href:"tel:988",className:"inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-2xl hover:bg-red-700 transition-all",children:[r.jsx(an,{className:"h-6 w-6 mr-3"}),"988"]}),r.jsx("p",{className:"text-red-700 mt-3 font-medium",children:"Suicide & Crisis Lifeline - Free & Confidential"})]})}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("a",{href:"sms:741741?body=HOME",className:"flex items-center justify-center bg-blue-100 text-blue-800 p-4 rounded-xl hover:bg-blue-200 transition-all",children:[r.jsx(kt,{className:"h-5 w-5 mr-2"}),r.jsx("span",{className:"font-semibold",children:"Text HOME to 741741"})]}),r.jsxs("a",{href:"tel:911",className:"flex items-center justify-center bg-red-100 text-red-800 p-4 rounded-xl hover:bg-red-200 transition-all",children:[r.jsx(an,{className:"h-5 w-5 mr-2"}),r.jsx("span",{className:"font-semibold",children:"Call 911 (Emergencies)"})]})]})]})}),r.jsx("section",{className:"mb-16",children:r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8 text-center",children:"Crisis Support Resources"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:Dv.map((s,e)=>r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*e},className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all",children:[r.jsxs("div",{className:"flex items-start justify-between mb-4",children:[r.jsx("h3",{className:"text-lg font-bold text-gray-900",children:s.name}),r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${s.type==="Emergency"?"bg-red-100 text-red-800":s.type==="Crisis"?"bg-orange-100 text-orange-800":s.type==="Text"?"bg-blue-100 text-blue-800":"bg-green-100 text-green-800"}`,children:s.type})]}),r.jsx("div",{className:"mb-4",children:r.jsx("a",{href:s.number.includes("Text")?"sms:741741?body=HOME":`tel:${s.number.replace(/[^\d]/g,"")}`,className:"text-2xl font-bold text-blue-600 hover:text-blue-700",children:s.number})}),r.jsx("p",{className:"text-gray-600",children:s.description}),r.jsxs("div",{className:"mt-4 flex items-center text-sm text-gray-500",children:[r.jsx(Fe,{className:"h-4 w-4 mr-1"}),r.jsx("span",{children:"Available 24/7"})]})]},e))})]})}),r.jsx("section",{className:"mb-16",children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[r.jsxs(k.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},children:[r.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-6 flex items-center",children:[r.jsx(pn,{className:"h-6 w-6 text-orange-500 mr-3"}),"Warning Signs to Watch For"]}),r.jsxs("div",{className:"bg-orange-50 rounded-xl p-6 border border-orange-200",children:[r.jsx("p",{className:"text-gray-700 mb-6",children:"If you or someone you know is experiencing these signs, it's important to seek help immediately:"}),r.jsx("ul",{className:"space-y-3",children:Vv.map((s,e)=>r.jsxs("li",{className:"flex items-start",children:[r.jsx("div",{className:"w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"}),r.jsx("span",{className:"text-gray-700",children:s})]},e))})]})]}),r.jsxs(k.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[r.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-6 flex items-center",children:[r.jsx(Pe,{className:"h-6 w-6 text-green-500 mr-3"}),"How to Help Someone"]}),r.jsxs("div",{className:"bg-green-50 rounded-xl p-6 border border-green-200",children:[r.jsx("p",{className:"text-gray-700 mb-6",children:"If someone you care about is struggling, here's how you can help:"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-start",children:[r.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1",children:"1"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:"Listen without judgment"}),r.jsx("p",{className:"text-gray-600 text-sm",children:"Give them your full attention and let them know you care."})]})]}),r.jsxs("div",{className:"flex items-start",children:[r.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1",children:"2"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:"Ask directly about suicide"}),r.jsx("p",{className:"text-gray-600 text-sm",children:`It's okay to ask "Are you thinking about suicide?"`})]})]}),r.jsxs("div",{className:"flex items-start",children:[r.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1",children:"3"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:"Help them connect to support"}),r.jsx("p",{className:"text-gray-600 text-sm",children:"Offer to help them call a crisis line or seek professional help."})]})]}),r.jsxs("div",{className:"flex items-start",children:[r.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1",children:"4"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:"Stay with them"}),r.jsx("p",{className:"text-gray-600 text-sm",children:"Don't leave them alone if they're in immediate danger."})]})]})]})]})]})]})}),r.jsx("section",{children:r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"bg-white rounded-2xl shadow-lg p-8 text-center",children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Remember: You Are Not Alone"}),r.jsx("p",{className:"text-gray-700 text-lg mb-8 max-w-3xl mx-auto",children:"Mental health struggles are real, but they are treatable. Seeking help is a sign of strength, not weakness. Recovery is possible, and there are people who want to help you through this difficult time."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[r.jsxs("a",{href:"tel:988",className:"bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center",children:[r.jsx(an,{className:"h-5 w-5 mr-2"}),"Call 988 Now"]}),r.jsxs("a",{href:"sms:741741?body=HOME",className:"border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center justify-center",children:[r.jsx(kt,{className:"h-5 w-5 mr-2"}),"Text for Help"]})]})]})})]})]}),Mv=[{id:"1",name:"Dr. Sarah Chen",title:"Licensed Clinical Psychologist",specialties:["Anxiety","Depression","Trauma"],rating:4.9,reviewCount:127,image:"https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",availability:["Today 2:00 PM","Tomorrow 10:00 AM","Friday 3:00 PM"],price:120,location:"San Francisco, CA",sessionTypes:["video","phone","in-person"],languages:["English","Mandarin"]},{id:"2",name:"Michael Rodriguez",title:"Licensed Marriage & Family Therapist",specialties:["Relationships","Couples Therapy","Family Counseling"],rating:4.8,reviewCount:89,image:"https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",availability:["Today 4:00 PM","Tomorrow 2:00 PM","Monday 11:00 AM"],price:110,location:"Los Angeles, CA",sessionTypes:["video","in-person"],languages:["English","Spanish"]},{id:"3",name:"Dr. Ashley Johnson",title:"Clinical Social Worker",specialties:["LGBTQ+ Support","Identity","Coming Out"],rating:5,reviewCount:156,image:"https://images.pexels.com/photos/5327589/pexels-photo-5327589.jpeg?auto=compress&cs=tinysrgb&w=400",availability:["Tomorrow 9:00 AM","Friday 1:00 PM","Saturday 10:00 AM"],price:95,location:"Seattle, WA",sessionTypes:["video","phone"],languages:["English"]},{id:"4",name:"Dr. James Wilson",title:"Psychiatrist & Therapist",specialties:["Career Counseling","Work Stress","Leadership"],rating:4.7,reviewCount:73,image:"https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400",availability:["Today 6:00 PM","Monday 9:00 AM","Tuesday 3:00 PM"],price:140,location:"New York, NY",sessionTypes:["video","phone","in-person"],languages:["English"]}],Lv=()=>{const[s,e]=W.useState(null),[t,n]=W.useState(""),[i,o]=W.useState("video"),[l,u]=W.useState(""),[h,m]=W.useState(""),f=["All","Anxiety","Depression","Trauma","Relationships","LGBTQ+ Support","Career Counseling"],x=Mv.filter(w=>{const C=w.name.toLowerCase().includes(l.toLowerCase())||w.specialties.some(R=>R.toLowerCase().includes(l.toLowerCase())),P=h===""||h==="All"||w.specialties.includes(h);return C&&P}),v=()=>{s&&t&&alert(`Booking confirmed with ${s.name} on ${t} via ${i}`)};return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Book a Counseling Session"}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Connect with verified, licensed counselors who specialize in your needs. All sessions are confidential and available online or in-person."})]}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8",children:r.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[r.jsx("div",{className:"flex-1",children:r.jsxs("div",{className:"relative",children:[r.jsx(_r,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"}),r.jsx("input",{type:"text",placeholder:"Search by name or specialty...",value:l,onChange:w=>u(w.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(_a,{className:"h-5 w-5 text-gray-500"}),r.jsx("select",{value:h,onChange:w=>m(w.target.value),className:"px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:f.map(w=>r.jsx("option",{value:w==="All"?"":w,children:w},w))})]})]})}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"space-y-6",children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Available Counselors"}),x.map((w,C)=>r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:C*.1},className:`bg-white rounded-2xl shadow-sm border-2 transition-all cursor-pointer ${s?.id===w.id?"border-blue-500 shadow-lg":"border-gray-100 hover:border-blue-200 hover:shadow-md"}`,onClick:()=>e(w),children:r.jsx("div",{className:"p-6",children:r.jsxs("div",{className:"flex items-start space-x-4",children:[r.jsx("img",{src:w.image,alt:w.name,className:"w-16 h-16 rounded-full object-cover"}),r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-bold text-gray-900",children:w.name}),r.jsx("p",{className:"text-gray-600 text-sm",children:w.title})]}),r.jsxs("div",{className:"text-right",children:[r.jsxs("div",{className:"text-xl font-bold text-gray-900",children:["$",w.price]}),r.jsx("div",{className:"text-sm text-gray-600",children:"per session"})]})]}),r.jsxs("div",{className:"flex items-center mt-2 mb-3",children:[r.jsx("div",{className:"flex items-center",children:[...Array(5)].map((P,R)=>r.jsx(dt,{className:`h-4 w-4 ${R<Math.floor(w.rating)?"text-yellow-400 fill-current":"text-gray-300"}`},R))}),r.jsxs("span",{className:"ml-2 text-sm text-gray-600",children:[w.rating," (",w.reviewCount," reviews)"]})]}),r.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:w.specialties.slice(0,3).map((P,R)=>r.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",children:P},R))}),r.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-600",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(va,{className:"h-4 w-4 mr-1"}),w.location]}),r.jsxs("div",{className:"flex items-center space-x-3",children:[w.sessionTypes.includes("video")&&r.jsx(nu,{className:"h-4 w-4 text-blue-600",title:"Video sessions"}),w.sessionTypes.includes("phone")&&r.jsx(kt,{className:"h-4 w-4 text-green-600",title:"Phone sessions"}),w.sessionTypes.includes("in-person")&&r.jsx(Ke,{className:"h-4 w-4 text-purple-600",title:"In-person sessions"})]})]})]})]})})},w.id))]}),r.jsx("div",{className:"lg:sticky lg:top-6",children:s?r.jsxs(k.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"bg-white rounded-2xl shadow-lg border border-gray-100 p-6",children:[r.jsxs("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:["Book with ",s.name]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Session Type"}),r.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.sessionTypes.map(w=>r.jsxs("label",{className:`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${i===w?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,children:[r.jsx("input",{type:"radio",name:"sessionType",value:w,checked:i===w,onChange:C=>o(C.target.value),className:"mr-3"}),r.jsx("span",{className:"capitalize font-medium",children:w.replace("-"," ")})]},w))})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Available Times"}),r.jsx("div",{className:"space-y-2",children:s.availability.map((w,C)=>r.jsxs("label",{className:`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${t===w?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,children:[r.jsx("input",{type:"radio",name:"time",value:w,checked:t===w,onChange:P=>n(P.target.value),className:"mr-3"}),r.jsxs("div",{className:"flex items-center",children:[r.jsx(Fe,{className:"h-4 w-4 mr-2 text-gray-500"}),r.jsx("span",{children:w})]})]},C))})]}),r.jsxs("div",{className:"bg-gray-50 rounded-xl p-4 mb-6",children:[r.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Booking Summary"}),r.jsxs("div",{className:"space-y-2 text-sm",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"Counselor:"}),r.jsx("span",{children:s.name})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"Session Type:"}),r.jsx("span",{className:"capitalize",children:i.replace("-"," ")})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"Time:"}),r.jsx("span",{children:t||"Not selected"})]}),r.jsxs("div",{className:"flex justify-between font-semibold",children:[r.jsx("span",{children:"Total:"}),r.jsxs("span",{children:["$",s.price]})]})]})]}),r.jsx("button",{onClick:v,disabled:!t,className:"w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:"Book Session"}),r.jsx("p",{className:"text-xs text-gray-500 mt-4 text-center",children:"You can cancel or reschedule up to 24 hours before your session"})]}):r.jsxs("div",{className:"bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center",children:[r.jsx(Ce,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Select a Counselor"}),r.jsx("p",{className:"text-gray-600",children:"Choose a counselor from the list to view available times and book your session."})]})})]})]})})},Uv=()=>{const{slug:s}=_m(),[e,t]=W.useState("counselors"),n={"mental-health":{title:"Mental Health Support",description:"Professional support for anxiety, depression, stress, and other mental health concerns.",counselors:[{id:"1",name:"Dr. Sarah Chen",title:"Licensed Clinical Psychologist",specialties:["Anxiety","Depression","Trauma"],rating:4.9,image:"https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300",price:120},{id:"2",name:"Dr. Marcus Johnson",title:"Psychiatrist",specialties:["Depression","Bipolar","Anxiety"],rating:4.8,image:"https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300",price:150}],articles:[{id:"1",title:"Understanding Anxiety: Signs, Symptoms, and Solutions",excerpt:"Learn about the different types of anxiety disorders and effective coping strategies.",readTime:"5 min read",author:"Dr. Sarah Chen"},{id:"2",title:"Depression vs. Sadness: When to Seek Help",excerpt:"Understanding the difference between temporary sadness and clinical depression.",readTime:"7 min read",author:"Dr. Marcus Johnson"}],videos:[{id:"1",title:"Breathing Techniques for Anxiety Relief",duration:"8:32",thumbnail:"https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=300",instructor:"Dr. Sarah Chen"},{id:"2",title:"Understanding Your Mental Health Journey",duration:"12:45",thumbnail:"https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=300",instructor:"Dr. Marcus Johnson"}],tools:[{id:"1",title:"Mood Tracker",description:"Track your daily mood and identify patterns over time.",type:"Interactive Tool"},{id:"2",title:"Anxiety Assessment",description:"Quick self-assessment to understand your anxiety levels.",type:"Assessment"}]}},i=n[s]||n["mental-health"],o=[{key:"counselors",label:"Counselors",icon:Ke},{key:"articles",label:"Articles",icon:Yt},{key:"videos",label:"Videos",icon:wr},{key:"tools",label:"Tools",icon:Ce}];return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:i.title}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:i.description})]}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-8",children:r.jsx("div",{className:"flex flex-col sm:flex-row",children:o.map(l=>r.jsxs("button",{onClick:()=>t(l.key),className:`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${e===l.key?"bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md":"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,children:[r.jsx(l.icon,{className:"h-5 w-5"}),r.jsx("span",{children:l.label})]},l.key))})}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[e==="counselors"&&r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.counselors.map(l=>r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all",children:[r.jsxs("div",{className:"text-center mb-4",children:[r.jsx("img",{src:l.image,alt:l.name,className:"w-20 h-20 rounded-full mx-auto mb-4 object-cover"}),r.jsx("h3",{className:"text-lg font-bold text-gray-900",children:l.name}),r.jsx("p",{className:"text-gray-600 text-sm",children:l.title})]}),r.jsxs("div",{className:"flex items-center justify-center mb-4",children:[r.jsx("div",{className:"flex items-center",children:[...Array(5)].map((u,h)=>r.jsx(dt,{className:`h-4 w-4 ${h<Math.floor(l.rating)?"text-yellow-400 fill-current":"text-gray-300"}`},h))}),r.jsx("span",{className:"ml-2 text-sm text-gray-600",children:l.rating})]}),r.jsx("div",{className:"flex flex-wrap gap-2 mb-4 justify-center",children:l.specialties.map((u,h)=>r.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",children:u},h))}),r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-xl font-bold text-gray-900 mb-4",children:["$",l.price,"/session"]}),r.jsx("button",{className:"w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Book Session"})]})]},l.id))}),e==="articles"&&r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:i.articles.map(l=>r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:l.title}),r.jsx("p",{className:"text-gray-600 mb-4",children:l.excerpt}),r.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(Fe,{className:"h-4 w-4 mr-1"}),l.readTime]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx(Ke,{className:"h-4 w-4 mr-1"}),l.author]})]}),r.jsx("button",{className:"text-blue-600 hover:text-blue-700 font-medium",children:"Read More"})]})]},l.id))}),e==="videos"&&r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.videos.map(l=>r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all",children:[r.jsxs("div",{className:"relative",children:[r.jsx("img",{src:l.thumbnail,alt:l.title,className:"w-full h-48 object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center",children:r.jsx("button",{className:"bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all",children:r.jsx(wr,{className:"h-8 w-8 text-blue-600"})})}),r.jsx("div",{className:"absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm",children:l.duration})]}),r.jsxs("div",{className:"p-4",children:[r.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:l.title}),r.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[r.jsx(Ke,{className:"h-4 w-4 mr-1"}),l.instructor]})]})]},l.id))}),e==="tools"&&r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:i.tools.map(l=>r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all",children:[r.jsxs("div",{className:"flex items-start justify-between mb-4",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900",children:l.title}),r.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm",children:l.type})]}),r.jsx("p",{className:"text-gray-600 mb-6",children:l.description}),r.jsx("button",{className:"w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Use Tool"})]},l.id))})]},e)]})})},Fv=[{id:"1",title:"Understanding Anxiety: A Complete Guide",type:"article",category:"Mental Health",author:"Dr. Sarah Chen",readTime:"8 min read",thumbnail:"https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400",excerpt:"Learn about different types of anxiety disorders, their symptoms, and effective coping strategies.",tags:["anxiety","mental health","coping strategies"]},{id:"2",title:"Mindfulness Meditation for Beginners",type:"video",category:"Self-Care",author:"Michael Rodriguez",duration:"15:23",thumbnail:"https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400",excerpt:"A guided meditation session perfect for those new to mindfulness practices.",tags:["meditation","mindfulness","relaxation"]},{id:"3",title:"Building Healthy Relationships Workbook",type:"pdf",category:"Relationships",author:"Dr. Ashley Johnson",pages:"24 pages",thumbnail:"https://images.pexels.com/photos/7176315/pexels-photo-7176315.jpeg?auto=compress&cs=tinysrgb&w=400",excerpt:"Interactive exercises and worksheets to improve communication and strengthen relationships.",tags:["relationships","communication","worksheets"]},{id:"4",title:"Stress Management Techniques",type:"article",category:"Mental Health",author:"Dr. James Wilson",readTime:"6 min read",thumbnail:"https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400",excerpt:"Practical strategies for managing stress in daily life and work environments.",tags:["stress","work-life balance","productivity"]},{id:"5",title:"Depression Recovery: Hope and Healing",type:"video",category:"Mental Health",author:"Dr. Maria Garcia",duration:"22:17",thumbnail:"https://images.pexels.com/photos/4101175/pexels-photo-4101175.jpeg?auto=compress&cs=tinysrgb&w=400",excerpt:"Understanding depression and the journey to recovery with expert insights.",tags:["depression","recovery","hope"]},{id:"6",title:"LGBTQ+ Mental Health Resource Guide",type:"pdf",category:"LGBTQ+ Support",author:"Dr. Alex Thompson",pages:"18 pages",thumbnail:"https://images.pexels.com/photos/7176315/pexels-photo-7176315.jpeg?auto=compress&cs=tinysrgb&w=400",excerpt:"Comprehensive guide addressing unique mental health challenges faced by LGBTQ+ individuals.",tags:["lgbtq+","identity","support"]}],Bv=["All","Mental Health","Self-Care","Relationships","LGBTQ+ Support","Parenting"],$v=["All","article","video","pdf"],qv=()=>{const[s,e]=W.useState(""),[t,n]=W.useState("All"),[i,o]=W.useState("All"),l=Fv.filter(m=>{const f=m.title.toLowerCase().includes(s.toLowerCase())||m.excerpt.toLowerCase().includes(s.toLowerCase())||m.tags.some(w=>w.toLowerCase().includes(s.toLowerCase())),x=t==="All"||m.category===t,v=i==="All"||m.type===i;return f&&x&&v}),u=m=>{switch(m){case"article":return Yt;case"video":return wr;case"pdf":return gm;default:return Yt}},h=m=>{switch(m.type){case"article":return m.readTime;case"video":return m.duration;case"pdf":return m.pages;default:return""}};return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Wellness Resources"}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Explore our curated collection of articles, videos, and downloadable resources to support your mental health journey."})]}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8",children:r.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[r.jsx("div",{className:"flex-1",children:r.jsxs("div",{className:"relative",children:[r.jsx(_r,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"}),r.jsx("input",{type:"text",placeholder:"Search resources...",value:s,onChange:m=>e(m.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(_a,{className:"h-5 w-5 text-gray-500"}),r.jsx("select",{value:t,onChange:m=>n(m.target.value),className:"px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Bv.map(m=>r.jsx("option",{value:m,children:m},m))})]}),r.jsx("select",{value:i,onChange:m=>o(m.target.value),className:"px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:$v.map(m=>r.jsx("option",{value:m,children:m==="All"?"All Types":m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]})}),r.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"mb-8",children:r.jsxs("p",{className:"text-gray-600",children:["Showing ",l.length," resource",l.length!==1?"s":"",t!=="All"&&` in ${t}`]})}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:l.map((m,f)=>{const x=u(m.type);return r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:f*.1},className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group",children:[r.jsxs("div",{className:"relative",children:[r.jsx("img",{src:m.thumbnail,alt:m.title,className:"w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"}),r.jsx("div",{className:"absolute top-4 left-4",children:r.jsxs("div",{className:`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${m.type==="article"?"bg-blue-100 text-blue-800":m.type==="video"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:[r.jsx(x,{className:"h-3 w-3"}),r.jsx("span",{className:"capitalize",children:m.type})]})}),m.type==="video"&&r.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:r.jsx("button",{className:"bg-white bg-opacity-90 p-4 rounded-full",children:r.jsx(wr,{className:"h-6 w-6 text-blue-600"})})})]}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm",children:m.category}),r.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[r.jsx(Fe,{className:"h-4 w-4 mr-1"}),h(m)]})]}),r.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors",children:m.title}),r.jsx("p",{className:"text-gray-600 text-sm mb-4 line-clamp-2",children:m.excerpt}),r.jsx("div",{className:"flex items-center justify-between mb-4",children:r.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[r.jsx(Ke,{className:"h-4 w-4 mr-1"}),m.author]})}),r.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:m.tags.slice(0,3).map((v,w)=>r.jsxs("span",{className:"flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs",children:[r.jsx(fm,{className:"h-3 w-3 mr-1"}),v]},w))}),r.jsx("button",{className:"w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:m.type==="video"?"Watch Now":m.type==="pdf"?"Download":"Read Article"})]})]},m.id)})}),l.length===0&&r.jsxs(k.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center py-16",children:[r.jsx(_r,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"No resources found"}),r.jsx("p",{className:"text-gray-600 mb-6",children:"Try adjusting your search terms or filters to find what you're looking for."}),r.jsx("button",{onClick:()=>{e(""),n("All"),o("All")},className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Clear Filters"})]})]})})},Hv=[{id:"1",title:"Managing Anxiety in Daily Life",type:"webinar",date:"2025-01-15",time:"7:00 PM EST",duration:"60 minutes",instructor:"Dr. Sarah Chen",capacity:100,registered:67,price:"Free",description:"Join us for an interactive webinar on practical strategies for managing anxiety in everyday situations.",image:"https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400",location:"Online",category:"Mental Health"},{id:"2",title:"Couples Communication Workshop",type:"workshop",date:"2025-01-18",time:"2:00 PM EST",duration:"2 hours",instructor:"Michael Rodriguez",capacity:20,registered:14,price:"$49",description:"Interactive workshop for couples to improve communication skills and strengthen relationships.",image:"https://images.pexels.com/photos/7176315/pexels-photo-7176315.jpeg?auto=compress&cs=tinysrgb&w=400",location:"Online",category:"Relationships"},{id:"3",title:"LGBTQ+ Support Group Meeting",type:"support-group",date:"2025-01-20",time:"6:00 PM EST",duration:"90 minutes",instructor:"Dr. Ashley Johnson",capacity:15,registered:8,price:"Free",description:"Safe space for LGBTQ+ individuals to share experiences and support each other.",image:"https://images.pexels.com/photos/5327589/pexels-photo-5327589.jpeg?auto=compress&cs=tinysrgb&w=400",location:"Online",category:"LGBTQ+ Support"},{id:"4",title:"Mindfulness Meditation Session",type:"group-session",date:"2025-01-22",time:"8:00 AM EST",duration:"45 minutes",instructor:"Dr. Maria Garcia",capacity:50,registered:23,price:"$15",description:"Start your week with a guided mindfulness meditation session to reduce stress and increase focus.",image:"https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400",location:"Online",category:"Self-Care"},{id:"5",title:"Parenting Teens: Navigating Challenges",type:"webinar",date:"2025-01-25",time:"7:30 PM EST",duration:"90 minutes",instructor:"Dr. James Wilson",capacity:75,registered:42,price:"$25",description:"Expert guidance for parents dealing with teenage challenges and improving family communication.",image:"https://images.pexels.com/photos/4101175/pexels-photo-4101175.jpeg?auto=compress&cs=tinysrgb&w=400",location:"Online",category:"Parenting"},{id:"6",title:"Trauma Recovery Workshop",type:"workshop",date:"2025-01-28",time:"1:00 PM EST",duration:"3 hours",instructor:"Dr. Alex Thompson",capacity:12,registered:7,price:"$75",description:"Intensive workshop focusing on healing strategies and building resilience after trauma.",image:"https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400",location:"Online",category:"Trauma Support"}],Wv=["All","Mental Health","Relationships","LGBTQ+ Support","Self-Care","Parenting","Trauma Support"],zv=["All","webinar","workshop","support-group","group-session"],Gv=()=>{const[s,e]=W.useState(""),[t,n]=W.useState("All"),[i,o]=W.useState("All"),l=Hv.filter(f=>{const x=f.title.toLowerCase().includes(s.toLowerCase())||f.description.toLowerCase().includes(s.toLowerCase()),v=t==="All"||f.category===t,w=i==="All"||f.type===i;return x&&v&&w}),u=f=>{switch(f){case"webinar":return"Webinar";case"workshop":return"Workshop";case"support-group":return"Support Group";case"group-session":return"Group Session";default:return f}},h=f=>{switch(f){case"webinar":return"bg-blue-100 text-blue-800";case"workshop":return"bg-green-100 text-green-800";case"support-group":return"bg-purple-100 text-purple-800";case"group-session":return"bg-orange-100 text-orange-800";default:return"bg-gray-100 text-gray-800"}},m=f=>new Date(f).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Wellness Events & Workshops"}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Join our community events, workshops, and support groups. Connect with others on similar journeys and learn from expert facilitators."})]}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8",children:r.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[r.jsx("div",{className:"flex-1",children:r.jsxs("div",{className:"relative",children:[r.jsx(_r,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"}),r.jsx("input",{type:"text",placeholder:"Search events...",value:s,onChange:f=>e(f.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(_a,{className:"h-5 w-5 text-gray-500"}),r.jsx("select",{value:t,onChange:f=>n(f.target.value),className:"px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Wv.map(f=>r.jsx("option",{value:f,children:f},f))})]}),r.jsx("select",{value:i,onChange:f=>o(f.target.value),className:"px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:zv.map(f=>r.jsx("option",{value:f,children:f==="All"?"All Types":u(f)},f))})]})]})}),r.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"mb-8",children:r.jsxs("p",{className:"text-gray-600",children:["Showing ",l.length," event",l.length!==1?"s":"",t!=="All"&&` in ${t}`]})}),r.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:l.map((f,x)=>r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:x*.1},className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all",children:[r.jsxs("div",{className:"relative",children:[r.jsx("img",{src:f.image,alt:f.title,className:"w-full h-48 object-cover"}),r.jsx("div",{className:"absolute top-4 left-4",children:r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${h(f.type)}`,children:u(f.type)})}),r.jsx("div",{className:"absolute top-4 right-4",children:r.jsx("span",{className:"bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium",children:f.price})})]}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm",children:f.category}),r.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[r.jsx(Ve,{className:"h-4 w-4 mr-1"}),f.registered,"/",f.capacity]})]}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:f.title}),r.jsx("p",{className:"text-gray-600 mb-4",children:f.description}),r.jsxs("div",{className:"space-y-3 mb-6",children:[r.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[r.jsx(Ce,{className:"h-4 w-4 mr-3 text-blue-500"}),r.jsx("span",{children:m(f.date)})]}),r.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[r.jsx(Fe,{className:"h-4 w-4 mr-3 text-green-500"}),r.jsxs("span",{children:[f.time," • ",f.duration]})]}),r.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[r.jsx(nu,{className:"h-4 w-4 mr-3 text-purple-500"}),r.jsx("span",{children:f.location})]}),r.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[r.jsx(Ve,{className:"h-4 w-4 mr-3 text-orange-500"}),r.jsxs("span",{children:["Facilitated by ",f.instructor]})]})]}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[r.jsx("button",{className:"flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Register Now"}),r.jsx("button",{className:"flex-1 border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all",children:"Learn More"})]}),f.registered>=f.capacity*.8&&r.jsx("div",{className:"mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg",children:r.jsxs("p",{className:"text-sm text-orange-700 font-medium",children:["⚡ Almost full! Only ",f.capacity-f.registered," spots remaining"]})})]})]},f.id))}),l.length===0&&r.jsxs(k.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center py-16",children:[r.jsx(Ce,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),r.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"No events found"}),r.jsx("p",{className:"text-gray-600 mb-6",children:"Try adjusting your search terms or filters to find events that match your interests."}),r.jsx("button",{onClick:()=>{e(""),n("All"),o("All")},className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Clear Filters"})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-16 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-2xl p-8 text-center",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Don't Miss Out!"}),r.jsx("p",{className:"text-lg mb-6 opacity-90",children:"Subscribe to our newsletter to get notified about new events and workshops."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",children:[r.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"}),r.jsx("button",{className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Subscribe"})]})]})]})})},Kv=()=>{const s=[{name:"Dr. Sarah Chen",role:"Founder & Clinical Director",image:"https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300",bio:"Licensed Clinical Psychologist with 15+ years of experience in anxiety and trauma therapy."},{name:"Michael Rodriguez",role:"Lead Therapist",image:"https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300",bio:"Specialized in couples therapy and family counseling with a focus on communication skills."},{name:"Dr. Ashley Johnson",role:"LGBTQ+ Program Director",image:"https://images.pexels.com/photos/5327589/pexels-photo-5327589.jpeg?auto=compress&cs=tinysrgb&w=300",bio:"Dedicated to providing affirming care and support for LGBTQ+ individuals and families."},{name:"Dr. James Wilson",role:"Career Counseling Specialist",image:"https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300",bio:"Expert in workplace mental health and career transition support."}],e=[{icon:Pe,title:"Compassionate Care",description:"We approach every individual with empathy, understanding, and genuine care for their wellbeing."},{icon:Ue,title:"Safe & Confidential",description:"Your privacy and safety are our top priorities. All sessions are completely confidential."},{icon:Ve,title:"Inclusive Community",description:"We welcome everyone regardless of background, identity, or circumstances."},{icon:ym,title:"Expert Excellence",description:"Our team consists of licensed, verified professionals with proven expertise."}],t=[{number:"10,000+",label:"People Helped"},{number:"500+",label:"Licensed Counselors"},{number:"95%",label:"Satisfaction Rate"},{number:"24/7",label:"Available Support"}];return r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:[r.jsx("section",{className:"py-20",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center max-w-3xl mx-auto",children:[r.jsx("div",{className:"flex items-center justify-center space-x-2 mb-6",children:r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-4 rounded-2xl",children:r.jsx(Pe,{className:"h-12 w-12 text-white"})})}),r.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:"About Feelora"}),r.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:"We believe everyone deserves access to quality mental health support. Our mission is to make wellness accessible, affordable, and stigma-free."})]})})}),r.jsx("section",{className:"py-20 bg-white",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[r.jsxs(k.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Our Mission"}),r.jsx("p",{className:"text-lg text-gray-700 mb-6 leading-relaxed",children:"Feelora was founded with a simple yet powerful vision: to create a world where mental health support is as accessible as physical healthcare. We combine the convenience of technology with the warmth of human connection."}),r.jsx("p",{className:"text-lg text-gray-700 mb-8 leading-relaxed",children:"Our platform bridges the gap between immediate AI support and professional counseling, ensuring that help is available whenever and wherever you need it."}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("div",{className:"bg-blue-100 p-3 rounded-full",children:r.jsx(xm,{className:"h-6 w-6 text-blue-600"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900",children:"Our Goal"}),r.jsx("p",{className:"text-gray-600",children:"Making mental wellness accessible to all"})]})]})]}),r.jsxs(k.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"relative",children:[r.jsx("img",{src:"https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Mental health support",className:"rounded-2xl shadow-lg"}),r.jsxs("div",{className:"absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg",children:[r.jsx("p",{className:"text-2xl font-bold text-blue-600",children:"4.9/5"}),r.jsx("p",{className:"text-sm text-gray-600",children:"User Rating"})]})]})]})})}),r.jsx("section",{className:"py-20 bg-gray-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Our Core Values"}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"These principles guide everything we do and shape the experience we create for our community."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((n,i)=>r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:i*.1},className:"bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all",children:[r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(n.icon,{className:"h-8 w-8 text-white"})}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:n.title}),r.jsx("p",{className:"text-gray-600 leading-relaxed",children:n.description})]},i))})]})}),r.jsx("section",{className:"py-20 bg-white",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Meet Our Team"}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Our experienced professionals are dedicated to providing the highest quality care and support."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:s.map((n,i)=>r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:i*.1},className:"bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all",children:[r.jsx("img",{src:n.image,alt:n.name,className:"w-24 h-24 rounded-full mx-auto mb-4 object-cover"}),r.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:n.name}),r.jsx("p",{className:"text-blue-600 font-medium mb-4",children:n.role}),r.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:n.bio})]},i))})]})}),r.jsx("section",{className:"py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Our Impact"}),r.jsx("p",{className:"text-xl opacity-90 max-w-2xl mx-auto",children:"We're proud of the positive impact we've made in the mental health community."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:t.map((n,i)=>r.jsxs(k.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:i*.1},className:"text-center",children:[r.jsx("div",{className:"text-4xl md:text-5xl font-bold mb-2",children:n.number}),r.jsx("div",{className:"text-lg opacity-90",children:n.label})]},i))})]})}),r.jsx("section",{className:"py-20 bg-white",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[r.jsx(k.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:r.jsx("img",{src:"https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"How we help",className:"rounded-2xl shadow-lg"})}),r.jsxs(k.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"How We Make a Difference"}),r.jsx("p",{className:"text-lg text-gray-700 mb-8 leading-relaxed",children:"Feelora combines cutting-edge technology with human expertise to provide comprehensive mental health support that meets you where you are."}),r.jsx("div",{className:"space-y-4",children:["AI-powered immediate support available 24/7","Verified, licensed professional counselors","Personalized treatment plans and resources","Safe, confidential, and stigma-free environment","Affordable pricing with insurance options","Crisis support and emergency resources"].map((n,i)=>r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx(Ns,{className:"h-6 w-6 text-green-500 mt-0.5 flex-shrink-0"}),r.jsx("span",{className:"text-gray-700",children:n})]},i))})]})]})})}),r.jsx("section",{className:"py-20 bg-gray-50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Ready to Start Your Wellness Journey?"}),r.jsx("p",{className:"text-xl text-gray-600 mb-8 max-w-2xl mx-auto",children:"Join thousands of others who have found support, healing, and growth through Feelora."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[r.jsx("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Get Started Today"}),r.jsx("button",{className:"border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all",children:"Learn More"})]})]})})})]})},Qv=()=>{const[s,e]=W.useState({name:"",email:"",subject:"",message:"",category:"general"}),[t,n]=W.useState(!1),i=h=>{e(m=>({...m,[h.target.name]:h.target.value}))},o=async h=>{h.preventDefault(),n(!0),setTimeout(()=>{alert("Thank you for your message! We'll get back to you within 24 hours."),e({name:"",email:"",subject:"",message:"",category:"general"}),n(!1)},1e3)},l=[{icon:Xc,title:"Email Us",description:"Send us a message anytime",contact:"support@feelora.com",action:"mailto:support@feelora.com"},{icon:an,title:"Call Us",description:"Mon-Fri, 9 AM - 6 PM EST",contact:"+1 (555) 123-4567",action:"tel:+15551234567"},{icon:kt,title:"Live Chat",description:"Available 24/7",contact:"Start Chat",action:"/chat"}],u=[{value:"general",label:"General Inquiry"},{value:"support",label:"Technical Support"},{value:"billing",label:"Billing Question"},{value:"counselor",label:"Counselor Application"},{value:"partnership",label:"Partnership Opportunity"},{value:"feedback",label:"Feedback & Suggestions"}];return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-16",children:[r.jsx("div",{className:"flex items-center justify-center space-x-2 mb-6",children:r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-xl",children:r.jsx(Pe,{className:"h-8 w-8 text-white"})})}),r.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Get in Touch"}),r.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"We're here to help and would love to hear from you. Reach out with any questions, feedback, or support needs."})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[r.jsxs(k.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1},className:"space-y-8",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Contact Information"}),r.jsx("div",{className:"space-y-6",children:l.map((h,m)=>r.jsxs(k.a,{href:h.action,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+m*.1},className:"flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group",children:[r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-lg group-hover:shadow-lg transition-all",children:r.jsx(h.icon,{className:"h-6 w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900 group-hover:text-blue-600 transition-colors",children:h.title}),r.jsx("p",{className:"text-gray-600 text-sm mb-1",children:h.description}),r.jsx("p",{className:"text-blue-600 font-medium",children:h.contact})]})]},m))})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:[r.jsxs("div",{className:"flex items-center mb-4",children:[r.jsx(Fe,{className:"h-6 w-6 text-blue-600 mr-3"}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Support Hours"})]}),r.jsxs("div",{className:"space-y-2 text-sm",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"Monday - Friday"}),r.jsx("span",{className:"text-gray-900 font-medium",children:"9:00 AM - 6:00 PM EST"})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"Saturday"}),r.jsx("span",{className:"text-gray-900 font-medium",children:"10:00 AM - 4:00 PM EST"})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"Sunday"}),r.jsx("span",{className:"text-gray-900 font-medium",children:"Emergency Only"})]})]}),r.jsx("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded-lg",children:r.jsxs("p",{className:"text-sm text-red-700",children:[r.jsx("strong",{children:"Crisis Support:"})," Available 24/7 through our emergency hotline"]})})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:[r.jsxs("div",{className:"flex items-center mb-4",children:[r.jsx(va,{className:"h-6 w-6 text-blue-600 mr-3"}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Our Location"})]}),r.jsxs("p",{className:"text-gray-600 mb-2",children:["123 Wellness Street",r.jsx("br",{}),"Suite 456",r.jsx("br",{}),"San Francisco, CA 94102"]}),r.jsx("p",{className:"text-sm text-gray-500",children:"*Currently operating primarily online"})]})]}),r.jsx(k.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.2},className:"lg:col-span-2",children:r.jsxs("div",{className:"bg-white rounded-2xl shadow-lg border border-gray-100 p-8",children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Send Us a Message"}),r.jsxs("form",{onSubmit:o,className:"space-y-6",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),r.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:s.name,onChange:i,className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter your full name"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),r.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:s.email,onChange:i,className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter your email"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700 mb-2",children:"Category"}),r.jsx("select",{id:"category",name:"category",value:s.category,onChange:i,className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",children:u.map(h=>r.jsx("option",{value:h.value,children:h.label},h.value))})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-2",children:"Subject *"}),r.jsx("input",{type:"text",id:"subject",name:"subject",required:!0,value:s.subject,onChange:i,className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Brief subject line"})]})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message *"}),r.jsx("textarea",{id:"message",name:"message",rows:6,required:!0,value:s.message,onChange:i,className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none",placeholder:"Tell us how we can help you..."})]}),r.jsx("button",{type:"submit",disabled:t,className:"w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:t?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),r.jsx("span",{children:"Sending..."})]}):r.jsxs(r.Fragment,{children:[r.jsx(su,{className:"h-5 w-5"}),r.jsx("span",{children:"Send Message"})]})})]}),r.jsx("div",{className:"mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg",children:r.jsxs("p",{className:"text-sm text-blue-700",children:[r.jsx("strong",{children:"Response Time:"})," We typically respond within 24 hours during business hours. For urgent matters, please call our support line or use the emergency resources."]})})]})})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-20",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Frequently Asked Questions"}),r.jsx("p",{className:"text-gray-600",children:"Quick answers to common questions"})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[{question:"How quickly can I get support?",answer:"Our AI assistant is available 24/7 for immediate support. Human counselor sessions can typically be booked within 24-48 hours."},{question:"Is my information confidential?",answer:"Yes, all interactions are completely confidential and protected by HIPAA compliance. Your privacy is our top priority."},{question:"Do you accept insurance?",answer:"We work with most major insurance providers. Contact us to verify your coverage and benefits."},{question:"What if I need emergency help?",answer:"For immediate crisis support, call 988 (Suicide & Crisis Lifeline) or visit our emergency resources page for additional helplines."}].map((h,m)=>r.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:h.question}),r.jsx("p",{className:"text-gray-600",children:h.answer})]},m))})]})]})})},Yv=()=>r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[r.jsx("div",{className:"flex items-center justify-center space-x-2 mb-6",children:r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-xl",children:r.jsx(Ue,{className:"h-8 w-8 text-white"})})}),r.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Privacy Policy"}),r.jsx("p",{className:"text-xl text-gray-600",children:"Your privacy and security are fundamental to everything we do at Feelora"}),r.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-500 mt-4",children:[r.jsx(Fe,{className:"h-4 w-4 mr-2"}),"Last updated: January 1, 2025"]})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-blue-50 rounded-2xl p-8 mb-12 border border-blue-200",children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Privacy at a Glance"}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx(bm,{className:"h-6 w-6 text-blue-600 mt-1"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900",children:"HIPAA Compliant"}),r.jsx("p",{className:"text-gray-600 text-sm",children:"All health information is protected under HIPAA regulations"})]})]}),r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx(Ue,{className:"h-6 w-6 text-green-600 mt-1"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900",children:"End-to-End Encryption"}),r.jsx("p",{className:"text-gray-600 text-sm",children:"Your conversations are encrypted and secure"})]})]}),r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx(Nr,{className:"h-6 w-6 text-purple-600 mt-1"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900",children:"No Data Selling"}),r.jsx("p",{className:"text-gray-600 text-sm",children:"We never sell your personal information to third parties"})]})]})]})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8",children:[r.jsxs("section",{children:[r.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-4 flex items-center",children:[r.jsx(Yt,{className:"h-6 w-6 mr-2 text-blue-600"}),"Information We Collect"]}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Personal Information"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"When you create an account with Feelora, we collect:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-6",children:[r.jsx("li",{children:"Name and email address"}),r.jsx("li",{children:"Account credentials (encrypted passwords)"}),r.jsx("li",{children:"Profile preferences and settings"}),r.jsx("li",{children:"Payment information (processed securely through third-party providers)"})]}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Health Information"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"As a healthcare service, we collect protected health information (PHI) including:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-6",children:[r.jsx("li",{children:"Session notes and counseling records"}),r.jsx("li",{children:"AI chat conversations related to mental health"}),r.jsx("li",{children:"Assessment results and progress tracking"}),r.jsx("li",{children:"Emergency contact information when provided"})]}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Technical Information"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"We automatically collect certain technical information:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[r.jsx("li",{children:"Device information and browser type"}),r.jsx("li",{children:"IP address and location data (city/state level only)"}),r.jsx("li",{children:"Usage patterns and session duration"}),r.jsx("li",{children:"Error reports and performance metrics"})]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"How We Use Your Information"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"We use your information solely to provide and improve our mental health services:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Service Delivery:"})," Matching you with appropriate counselors and providing AI support"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Treatment Records:"})," Maintaining session notes and progress tracking for continuity of care"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Safety & Crisis Support:"})," Ensuring appropriate emergency response when needed"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Platform Improvement:"})," Analyzing usage patterns to enhance user experience (anonymized data only)"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Communication:"})," Sending appointment reminders and important service updates"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Billing:"})," Processing payments and insurance claims"]})]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Information Sharing & Disclosure"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"We take your privacy seriously and limit information sharing to these specific circumstances:"}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"With Your Consent"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"We may share your information when you explicitly authorize us to do so, such as coordinating care with your other healthcare providers."}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Legal Requirements"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"We may disclose information when required by law or to protect safety:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-6",children:[r.jsx("li",{children:"Court orders or legal proceedings"}),r.jsx("li",{children:"Imminent threat to self or others"}),r.jsx("li",{children:"Suspected child or elder abuse (as required by law)"}),r.jsx("li",{children:"Public health emergencies"})]}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Service Providers"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"We work with trusted third-party providers who assist in delivering our services. These partners are bound by strict confidentiality agreements and can only access information necessary for their specific functions."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Data Security"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"We implement industry-leading security measures to protect your information:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Encryption:"})," All data is encrypted in transit and at rest using AES-256 encryption"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Access Controls:"})," Strict role-based access with multi-factor authentication"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Regular Audits:"})," Quarterly security assessments and penetration testing"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Staff Training:"})," Comprehensive privacy and security training for all team members"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Incident Response:"})," 24/7 monitoring and rapid response protocols"]})]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Your Rights & Choices"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"You have important rights regarding your personal and health information:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Access:"})," Request copies of your information and session records"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Correction:"})," Request corrections to inaccurate information"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Deletion:"})," Request deletion of your account and associated data"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Portability:"})," Export your data in a standard format"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Communication Preferences:"})," Opt-out of non-essential communications"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Restriction:"})," Request limits on how we use your information"]})]}),r.jsx("p",{className:"text-gray-700 mt-4",children:"To exercise any of these rights, please contact our Privacy Officer at privacy@feelora.com."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Data Retention"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"We retain your information only as long as necessary:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Active Accounts:"})," Information is retained while your account is active"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Clinical Records:"})," Session notes retained for 7 years as required by law"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Billing Records:"})," Financial information retained for 7 years for tax and audit purposes"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Marketing Data:"})," Deleted immediately upon opt-out request"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Technical Logs:"})," Automatically deleted after 90 days"]})]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"International Users"}),r.jsx("div",{className:"prose prose-gray max-w-none",children:r.jsx("p",{className:"text-gray-700",children:"Feelora is based in the United States and operates under U.S. privacy laws. If you are accessing our services from outside the U.S., please be aware that your information will be transferred to and processed in the United States. We implement appropriate safeguards to protect your privacy regardless of location."})})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Changes to This Policy"}),r.jsx("div",{className:"prose prose-gray max-w-none",children:r.jsx("p",{className:"text-gray-700",children:"We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes via email and prominently display the updated policy on our website. Your continued use of Feelora after changes become effective constitutes acceptance of the updated policy."})})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Contact Us"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"If you have questions about this Privacy Policy or our privacy practices, please contact us:"}),r.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[r.jsx("p",{className:"text-gray-700 mb-2",children:r.jsx("strong",{children:"Privacy Officer"})}),r.jsx("p",{className:"text-gray-700 mb-1",children:"Email: privacy@feelora.com"}),r.jsx("p",{className:"text-gray-700 mb-1",children:"Phone: +1 (555) 123-4567"}),r.jsxs("p",{className:"text-gray-700",children:["Mail: Feelora Privacy Officer",r.jsx("br",{}),"123 Wellness Street, Suite 456",r.jsx("br",{}),"San Francisco, CA 94102"]})]})]})]})]})]})}),Jv=()=>r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[r.jsx("div",{className:"flex items-center justify-center space-x-2 mb-6",children:r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-xl",children:r.jsx(Yt,{className:"h-8 w-8 text-white"})})}),r.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Terms of Service"}),r.jsx("p",{className:"text-xl text-gray-600",children:"Please read these terms carefully before using Feelora"}),r.jsxs("div",{className:"flex items-center justify-center text-sm text-gray-500 mt-4",children:[r.jsx(Fe,{className:"h-4 w-4 mr-2"}),"Last updated: January 1, 2025"]})]}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-red-50 rounded-2xl p-8 mb-12 border border-red-200",children:r.jsxs("div",{className:"flex items-start space-x-4",children:[r.jsx(pn,{className:"h-8 w-8 text-red-600 mt-1 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-3",children:"Important Notice"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"Feelora provides mental health support services but is not a substitute for emergency medical care. If you are experiencing a mental health emergency or having thoughts of self-harm, please:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:[r.jsx("li",{children:"Call 911 or go to your nearest emergency room"}),r.jsx("li",{children:"Call the 988 Suicide & Crisis Lifeline"}),r.jsx("li",{children:"Contact your local emergency services"})]})]})]})}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8",children:[r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"1. Acceptance of Terms"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"By accessing or using Feelora's services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you may not use our services."}),r.jsx("p",{className:"text-gray-700",children:"These terms apply to all users of the service, including visitors, registered users, counselors, and administrators."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"2. Description of Services"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"Feelora provides online mental health and wellness services, including:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-4",children:[r.jsx("li",{children:"AI-powered mental health support and guidance"}),r.jsx("li",{children:"Connection with licensed mental health professionals"}),r.jsx("li",{children:"Online counseling sessions (video, phone, or text)"}),r.jsx("li",{children:"Mental health resources and educational materials"}),r.jsx("li",{children:"Group therapy sessions and support communities"}),r.jsx("li",{children:"Crisis support and emergency resources"})]}),r.jsx("p",{className:"text-gray-700",children:"Our services are designed to support mental wellness but do not replace in-person emergency care or crisis intervention."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"3. User Eligibility"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"To use Feelora, you must:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[r.jsx("li",{children:"Be at least 18 years old (minors require parental consent)"}),r.jsx("li",{children:"Have the legal capacity to enter into binding agreements"}),r.jsx("li",{children:"Provide accurate and complete registration information"}),r.jsx("li",{children:"Maintain the security of your account credentials"}),r.jsx("li",{children:"Use the service in compliance with applicable laws and regulations"})]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"4. Account Registration & Security"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"When you create an account with Feelora:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-4",children:[r.jsx("li",{children:"You must provide accurate, current, and complete information"}),r.jsx("li",{children:"You are responsible for maintaining the confidentiality of your account"}),r.jsx("li",{children:"You must notify us immediately of any unauthorized use"}),r.jsx("li",{children:"You may not share your account with others"}),r.jsx("li",{children:"You may not create multiple accounts without permission"})]}),r.jsx("p",{className:"text-gray-700",children:"We reserve the right to suspend or terminate accounts that violate these terms or are used inappropriately."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"5. Professional Services & Limitations"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Licensed Counselors"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"Our licensed mental health professionals are independent contractors who provide services through our platform. Each counselor is responsible for their own professional conduct and adherence to applicable licensing requirements."}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"AI Assistant"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"Our AI assistant provides general mental health information and support but cannot:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-4",children:[r.jsx("li",{children:"Provide professional medical or psychiatric diagnoses"}),r.jsx("li",{children:"Prescribe medications or treatments"}),r.jsx("li",{children:"Replace professional therapy or counseling"}),r.jsx("li",{children:"Handle emergency or crisis situations"})]}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Service Limitations"}),r.jsx("p",{className:"text-gray-700",children:"Feelora is not appropriate for individuals who require emergency psychiatric care, are at risk of self-harm, or need intensive in-person treatment. We may terminate services if we determine our platform cannot adequately meet a user's clinical needs."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"6. User Conduct & Responsibilities"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"Users agree to:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-4",children:[r.jsx("li",{children:"Use the service only for lawful purposes"}),r.jsx("li",{children:"Treat all staff and other users with respect"}),r.jsx("li",{children:"Provide honest and accurate information about their mental health"}),r.jsx("li",{children:"Attend scheduled sessions or provide reasonable notice of cancellation"}),r.jsx("li",{children:"Maintain appropriate boundaries in professional relationships"})]}),r.jsx("p",{className:"text-gray-700 mb-4",children:"Users agree not to:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[r.jsx("li",{children:"Harass, threaten, or abuse staff or other users"}),r.jsx("li",{children:"Share or distribute content from sessions without consent"}),r.jsx("li",{children:"Attempt to contact counselors outside the platform"}),r.jsx("li",{children:"Use the service to harm themselves or others"}),r.jsx("li",{children:"Violate any applicable laws or regulations"}),r.jsx("li",{children:"Reverse engineer or attempt to access unauthorized areas of the platform"})]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"7. Payment Terms"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Fees & Billing"}),r.jsx("p",{className:"text-gray-700 mb-4",children:"Service fees are clearly displayed before booking and may vary by counselor and session type. Payment is required at the time of booking unless other arrangements are made."}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Cancellation & Refunds"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-4",children:[r.jsx("li",{children:"Cancellations made 24+ hours in advance receive full refunds"}),r.jsx("li",{children:"Cancellations made less than 24 hours in advance may incur fees"}),r.jsx("li",{children:"No-shows are charged the full session fee"}),r.jsx("li",{children:"Emergency cancellations are handled case-by-case"})]}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-3",children:"Insurance"}),r.jsx("p",{className:"text-gray-700",children:"We work with many insurance providers and will help verify your benefits. You are responsible for any copays, deductibles, or non-covered services."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"8. Privacy & Confidentiality"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"Your privacy is protected under HIPAA and our Privacy Policy. However, confidentiality has legal limits:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2",children:[r.jsx("li",{children:"Imminent risk of harm to self or others"}),r.jsx("li",{children:"Suspected abuse of children, elderly, or disabled persons"}),r.jsx("li",{children:"Court orders or legal proceedings"}),r.jsx("li",{children:"When you provide written consent for disclosure"})]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"9. Intellectual Property"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"All content on Feelora, including text, graphics, logos, software, and other materials, is owned by Feelora or our licensors and protected by copyright and other intellectual property laws."}),r.jsx("p",{className:"text-gray-700",children:"You may not reproduce, distribute, modify, or create derivative works of our content without express written permission."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"10. Disclaimers & Limitation of Liability"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6",children:r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx(Ue,{className:"h-6 w-6 text-yellow-600 mt-1 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Important Disclaimer"}),r.jsx("p",{className:"text-gray-700 text-sm",children:'Feelora services are provided "as is" without warranties of any kind. We cannot guarantee specific outcomes from therapy or counseling services.'})]})]})}),r.jsx("p",{className:"text-gray-700 mb-4",children:"To the fullest extent permitted by law, Feelora and its affiliates disclaim all warranties and limit liability for damages arising from use of our services."}),r.jsx("p",{className:"text-gray-700",children:"Our total liability to you for any claims shall not exceed the amount you paid for services in the 12 months preceding the claim."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"11. Termination"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"Either party may terminate the service relationship:"}),r.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-2 mb-4",children:[r.jsx("li",{children:"Users may cancel their account at any time through account settings"}),r.jsx("li",{children:"We may terminate accounts for violations of these terms"}),r.jsx("li",{children:"Counselors may end therapeutic relationships with appropriate notice"}),r.jsx("li",{children:"We may suspend services for non-payment or inappropriate conduct"})]}),r.jsx("p",{className:"text-gray-700",children:"Upon termination, your access to the service will cease, but certain provisions of these terms will survive."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"12. Changes to Terms"}),r.jsx("div",{className:"prose prose-gray max-w-none",children:r.jsx("p",{className:"text-gray-700",children:"We may modify these terms at any time by posting updated terms on our website. Continued use of our services after changes become effective constitutes acceptance of the new terms. We will notify users of material changes via email or platform notification."})})]}),r.jsxs("section",{children:[r.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"13. Contact Information"}),r.jsxs("div",{className:"prose prose-gray max-w-none",children:[r.jsx("p",{className:"text-gray-700 mb-4",children:"If you have questions about these Terms of Service, please contact us:"}),r.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[r.jsx("p",{className:"text-gray-700 mb-2",children:r.jsx("strong",{children:"Legal Department"})}),r.jsx("p",{className:"text-gray-700 mb-1",children:"Email: legal@feelora.com"}),r.jsx("p",{className:"text-gray-700 mb-1",children:"Phone: +1 (555) 123-4567"}),r.jsxs("p",{className:"text-gray-700",children:["Mail: Feelora Legal Department",r.jsx("br",{}),"123 Wellness Street, Suite 456",r.jsx("br",{}),"San Francisco, CA 94102"]})]})]})]})]})]})}),Xv=()=>{const[s,e]=W.useState("overview"),t={name:"Sarah Johnson",upcomingSessions:[{id:"1",counselor:"Dr. Sarah Chen",date:"2025-01-15",time:"2:00 PM",type:"Video Call",topic:"Anxiety Management"},{id:"2",counselor:"Michael Rodriguez",date:"2025-01-18",time:"10:00 AM",type:"Phone Call",topic:"Work Stress"}],recentSessions:[{id:"1",counselor:"Dr. Sarah Chen",date:"2025-01-08",rating:5,notes:"Great session on breathing techniques"},{id:"2",counselor:"Michael Rodriguez",date:"2025-01-05",rating:4,notes:"Helpful discussion about workplace boundaries"}],moodData:[{date:"2025-01-01",mood:7},{date:"2025-01-02",mood:6},{date:"2025-01-03",mood:8},{date:"2025-01-04",mood:7},{date:"2025-01-05",mood:9},{date:"2025-01-06",mood:8},{date:"2025-01-07",mood:7}],streakDays:12,totalSessions:15,aiChats:47},n=[{key:"overview",label:"Overview",icon:Gi},{key:"sessions",label:"Sessions",icon:Ce},{key:"progress",label:"Progress",icon:Pe},{key:"profile",label:"Profile",icon:Ke}];return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"mb-8",children:[r.jsxs("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:["Welcome back, ",t.name,"!"]}),r.jsx("p",{className:"text-gray-600",children:"Here's your wellness dashboard"})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Wellness Streak"}),r.jsxs("p",{className:"text-2xl font-bold text-orange-600",children:[t.streakDays," days"]})]}),r.jsx("div",{className:"bg-orange-100 p-3 rounded-lg",children:r.jsx(Pe,{className:"h-6 w-6 text-orange-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Total Sessions"}),r.jsx("p",{className:"text-2xl font-bold text-blue-600",children:t.totalSessions})]}),r.jsx("div",{className:"bg-blue-100 p-3 rounded-lg",children:r.jsx(Ce,{className:"h-6 w-6 text-blue-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"AI Conversations"}),r.jsx("p",{className:"text-2xl font-bold text-green-600",children:t.aiChats})]}),r.jsx("div",{className:"bg-green-100 p-3 rounded-lg",children:r.jsx(kt,{className:"h-6 w-6 text-green-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Avg. Mood"}),r.jsx("p",{className:"text-2xl font-bold text-purple-600",children:"7.4/10"})]}),r.jsx("div",{className:"bg-purple-100 p-3 rounded-lg",children:r.jsx(Gi,{className:"h-6 w-6 text-purple-600"})})]})})]}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-8",children:r.jsx("div",{className:"flex flex-col sm:flex-row",children:n.map(i=>r.jsxs("button",{onClick:()=>e(i.key),className:`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${s===i.key?"bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md":"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,children:[r.jsx(i.icon,{className:"h-5 w-5"}),r.jsx("span",{children:i.label})]},i.key))})}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[s==="overview"&&r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Upcoming Sessions"}),r.jsx("div",{className:"space-y-4",children:t.upcomingSessions.map(i=>r.jsxs("div",{className:"flex items-center justify-between p-4 bg-blue-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:i.counselor}),r.jsx("p",{className:"text-sm text-gray-600",children:i.topic}),r.jsxs("div",{className:"flex items-center text-sm text-gray-500 mt-1",children:[r.jsx(Ce,{className:"h-4 w-4 mr-1"}),new Date(i.date).toLocaleDateString()," at ",i.time]})]}),r.jsx("div",{className:"text-right",children:r.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",children:i.type})})]},i.id))}),r.jsx("button",{className:"w-full mt-4 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Book New Session"})]}),r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Recent Sessions"}),r.jsx("div",{className:"space-y-4",children:t.recentSessions.map(i=>r.jsxs("div",{className:"p-4 border border-gray-200 rounded-xl",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:i.counselor}),r.jsx("div",{className:"flex items-center",children:[...Array(5)].map((o,l)=>r.jsx(dt,{className:`h-4 w-4 ${l<i.rating?"text-yellow-400 fill-current":"text-gray-300"}`},l))})]}),r.jsx("p",{className:"text-sm text-gray-600 mb-2",children:i.notes}),r.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[r.jsx(Fe,{className:"h-4 w-4 mr-1"}),new Date(i.date).toLocaleDateString()]})]},i.id))})]})]}),s==="sessions"&&r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"Session History"}),r.jsx("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Book New Session"})]}),r.jsx("div",{className:"space-y-4",children:[...t.recentSessions,...t.upcomingSessions].map((i,o)=>r.jsxs("div",{className:"flex items-center justify-between p-6 border border-gray-200 rounded-xl",children:[r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("div",{className:"bg-blue-100 p-3 rounded-full",children:r.jsx(Ke,{className:"h-6 w-6 text-blue-600"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:i.counselor}),r.jsx("p",{className:"text-gray-600",children:i.topic||"General Session"}),r.jsxs("div",{className:"flex items-center text-sm text-gray-500 mt-1",children:[r.jsx(Ce,{className:"h-4 w-4 mr-1"}),new Date(i.date).toLocaleDateString()]})]})]}),r.jsx("div",{className:"text-right",children:"rating"in i?r.jsx("div",{className:"flex items-center",children:[...Array(5)].map((l,u)=>r.jsx(dt,{className:`h-4 w-4 ${u<i.rating?"text-yellow-400 fill-current":"text-gray-300"}`},u))}):r.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm",children:"Upcoming"})})]},o))})]}),s==="progress"&&r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Mood Tracking"}),r.jsx("div",{className:"space-y-4",children:t.moodData.slice(-5).map((i,o)=>r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-gray-600",children:new Date(i.date).toLocaleDateString()}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("div",{className:"w-32 bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full",style:{width:`${i.mood*10}%`}})}),r.jsxs("span",{className:"text-sm font-medium text-gray-900",children:[i.mood,"/10"]})]})]},o))}),r.jsx("button",{className:"w-full mt-6 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all",children:"Log Today's Mood"})]}),r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Goals & Achievements"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center space-x-3 p-4 bg-green-50 rounded-xl",children:[r.jsx(Ns,{className:"h-6 w-6 text-green-600"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:"7-Day Wellness Streak"}),r.jsx("p",{className:"text-sm text-gray-600",children:"Completed daily check-ins"})]})]}),r.jsxs("div",{className:"flex items-center space-x-3 p-4 bg-blue-50 rounded-xl",children:[r.jsx(Ns,{className:"h-6 w-6 text-blue-600"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:"First Session Complete"}),r.jsx("p",{className:"text-sm text-gray-600",children:"Attended your first counseling session"})]})]}),r.jsxs("div",{className:"flex items-center space-x-3 p-4 bg-purple-50 rounded-xl",children:[r.jsx("div",{className:"w-6 h-6 border-2 border-purple-300 rounded-full"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:"Mindfulness Master"}),r.jsx("p",{className:"text-sm text-gray-600",children:"Complete 10 meditation sessions"}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-1 mt-2",children:r.jsx("div",{className:"bg-purple-600 h-1 rounded-full",style:{width:"60%"}})})]})]})]})]})]}),s==="profile"&&r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-8",children:[r.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-8",children:"Profile Settings"}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),r.jsx("input",{type:"text",value:t.name,className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),r.jsx("input",{type:"email",value:"sarah.johnson@email.com",className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),r.jsx("input",{type:"tel",value:"+1 (555) 123-4567",className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Preferred Session Type"}),r.jsxs("select",{className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[r.jsx("option",{children:"Video Call"}),r.jsx("option",{children:"Phone Call"}),r.jsx("option",{children:"Text Chat"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time Zone"}),r.jsxs("select",{className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[r.jsx("option",{children:"Eastern Time (ET)"}),r.jsx("option",{children:"Central Time (CT)"}),r.jsx("option",{children:"Mountain Time (MT)"}),r.jsx("option",{children:"Pacific Time (PT)"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Emergency Contact"}),r.jsx("input",{type:"text",placeholder:"Name and phone number",className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]})]}),r.jsxs("div",{className:"mt-8 flex space-x-4",children:[r.jsx("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Save Changes"}),r.jsx("button",{className:"border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all",children:"Cancel"})]})]})]},s)]})})},Zv=()=>{const[s,e]=W.useState("overview"),t={name:"Dr. Sarah Chen",specialties:["Anxiety","Depression","Trauma"],rating:4.9,totalClients:47,sessionsThisWeek:12,monthlyEarnings:3240,upcomingSessions:[{id:"1",client:"Client A",date:"2025-01-15",time:"2:00 PM",type:"Video Call",topic:"Anxiety Management"},{id:"2",client:"Client B",date:"2025-01-15",time:"4:00 PM",type:"Phone Call",topic:"Depression Support"}],recentSessions:[{id:"1",client:"Client C",date:"2025-01-14",duration:"50 min",notes:"Progress on breathing techniques",rating:5},{id:"2",client:"Client D",date:"2025-01-14",duration:"60 min",notes:"Discussed workplace stress management",rating:5}],weeklySchedule:[{day:"Monday",slots:6,booked:4},{day:"Tuesday",slots:6,booked:6},{day:"Wednesday",slots:6,booked:3},{day:"Thursday",slots:6,booked:5},{day:"Friday",slots:6,booked:4},{day:"Saturday",slots:4,booked:2},{day:"Sunday",slots:0,booked:0}]},n=[{key:"overview",label:"Overview",icon:Ve},{key:"schedule",label:"Schedule",icon:Ce},{key:"clients",label:"Clients",icon:kt},{key:"earnings",label:"Earnings",icon:$e}];return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:t.name}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsxs("div",{className:"flex items-center",children:[[...Array(5)].map((i,o)=>r.jsx(dt,{className:`h-5 w-5 ${o<Math.floor(t.rating)?"text-yellow-400 fill-current":"text-gray-300"}`},o)),r.jsxs("span",{className:"ml-2 text-gray-600",children:[t.rating," rating"]})]}),r.jsx("div",{className:"flex flex-wrap gap-2",children:t.specialties.map((i,o)=>r.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",children:i},o))})]})]}),r.jsx("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Update Availability"})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Total Clients"}),r.jsx("p",{className:"text-2xl font-bold text-blue-600",children:t.totalClients})]}),r.jsx("div",{className:"bg-blue-100 p-3 rounded-lg",children:r.jsx(Ve,{className:"h-6 w-6 text-blue-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"This Week"}),r.jsxs("p",{className:"text-2xl font-bold text-green-600",children:[t.sessionsThisWeek," sessions"]})]}),r.jsx("div",{className:"bg-green-100 p-3 rounded-lg",children:r.jsx(Ce,{className:"h-6 w-6 text-green-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Monthly Earnings"}),r.jsxs("p",{className:"text-2xl font-bold text-purple-600",children:["$",t.monthlyEarnings]})]}),r.jsx("div",{className:"bg-purple-100 p-3 rounded-lg",children:r.jsx($e,{className:"h-6 w-6 text-purple-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Average Rating"}),r.jsxs("p",{className:"text-2xl font-bold text-orange-600",children:[t.rating,"/5.0"]})]}),r.jsx("div",{className:"bg-orange-100 p-3 rounded-lg",children:r.jsx(dt,{className:"h-6 w-6 text-orange-600"})})]})})]}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-8",children:r.jsx("div",{className:"flex flex-col sm:flex-row",children:n.map(i=>r.jsxs("button",{onClick:()=>e(i.key),className:`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${s===i.key?"bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md":"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,children:[r.jsx(i.icon,{className:"h-5 w-5"}),r.jsx("span",{children:i.label})]},i.key))})}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[s==="overview"&&r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Today's Schedule"}),r.jsx("div",{className:"space-y-4",children:t.upcomingSessions.map(i=>r.jsxs("div",{className:"flex items-center justify-between p-4 bg-blue-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:i.client}),r.jsx("p",{className:"text-sm text-gray-600",children:i.topic}),r.jsxs("div",{className:"flex items-center text-sm text-gray-500 mt-1",children:[r.jsx(Fe,{className:"h-4 w-4 mr-1"}),i.time]})]}),r.jsxs("div",{className:"text-right",children:[r.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",children:i.type}),r.jsx("div",{className:"mt-2",children:r.jsx("button",{className:"text-blue-600 hover:text-blue-700 text-sm font-medium",children:"Join Session"})})]})]},i.id))})]}),r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Recent Sessions"}),r.jsx("div",{className:"space-y-4",children:t.recentSessions.map(i=>r.jsxs("div",{className:"p-4 border border-gray-200 rounded-xl",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:i.client}),r.jsx("div",{className:"flex items-center",children:[...Array(5)].map((o,l)=>r.jsx(dt,{className:`h-4 w-4 ${l<i.rating?"text-yellow-400 fill-current":"text-gray-300"}`},l))})]}),r.jsx("p",{className:"text-sm text-gray-600 mb-2",children:i.notes}),r.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[r.jsx("span",{children:new Date(i.date).toLocaleDateString()}),r.jsx("span",{children:i.duration})]})]},i.id))}),r.jsx("button",{className:"w-full mt-4 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all",children:"View All Sessions"})]})]}),s==="schedule"&&r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"Weekly Schedule"}),r.jsx("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Update Availability"})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-7 gap-4",children:t.weeklySchedule.map((i,o)=>r.jsxs("div",{className:"bg-gray-50 rounded-xl p-4",children:[r.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:i.day}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"text-sm text-gray-600",children:["Available: ",i.slots," slots"]}),r.jsxs("div",{className:"text-sm text-green-600",children:["Booked: ",i.booked," sessions"]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full",style:{width:i.slots>0?`${i.booked/i.slots*100}%`:"0%"}})})]})]},o))}),r.jsxs("div",{className:"mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"bg-blue-50 rounded-xl p-6",children:[r.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:"Quick Actions"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("button",{className:"w-full text-left p-3 bg-white rounded-lg hover:shadow-sm transition-all",children:"Block time for personal appointments"}),r.jsx("button",{className:"w-full text-left p-3 bg-white rounded-lg hover:shadow-sm transition-all",children:"Set recurring availability"}),r.jsx("button",{className:"w-full text-left p-3 bg-white rounded-lg hover:shadow-sm transition-all",children:"Manage session types and pricing"})]})]}),r.jsxs("div",{className:"bg-green-50 rounded-xl p-6",children:[r.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:"Schedule Statistics"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"Utilization Rate"}),r.jsx("span",{className:"font-semibold",children:"78%"})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"Average Session Length"}),r.jsx("span",{className:"font-semibold",children:"52 minutes"})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"No-show Rate"}),r.jsx("span",{className:"font-semibold",children:"3%"})]})]})]})]})]}),s==="clients"&&r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"Client Management"}),r.jsxs("div",{className:"flex space-x-4",children:[r.jsx("input",{type:"text",placeholder:"Search clients...",className:"px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),r.jsx("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Add Notes"})]})]}),r.jsx("div",{className:"space-y-4",children:[{id:1,name:"Client A",sessions:8,lastSeen:"2025-01-14",status:"Active"},{id:2,name:"Client B",sessions:12,lastSeen:"2025-01-13",status:"Active"},{id:3,name:"Client C",sessions:5,lastSeen:"2025-01-10",status:"Inactive"},{id:4,name:"Client D",sessions:15,lastSeen:"2025-01-14",status:"Active"}].map(i=>r.jsxs("div",{className:"flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:shadow-sm transition-all",children:[r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("div",{className:"bg-blue-100 p-3 rounded-full",children:r.jsx(Ve,{className:"h-6 w-6 text-blue-600"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-gray-900",children:i.name}),r.jsxs("p",{className:"text-gray-600",children:[i.sessions," sessions completed"]}),r.jsxs("p",{className:"text-sm text-gray-500",children:["Last seen: ",new Date(i.lastSeen).toLocaleDateString()]})]})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("span",{className:`px-3 py-1 rounded-full text-sm ${i.status==="Active"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:i.status}),r.jsx("button",{className:"text-blue-600 hover:text-blue-700 font-medium",children:"View Details"})]})]},i.id))})]}),s==="earnings"&&r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Earnings Overview"}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between p-4 bg-green-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"This Month"}),r.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["$",t.monthlyEarnings]})]}),r.jsx("div",{className:"text-green-600",children:r.jsx($e,{className:"h-8 w-8"})})]}),r.jsxs("div",{className:"flex items-center justify-between p-4 bg-blue-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Last Month"}),r.jsx("p",{className:"text-2xl font-bold text-blue-600",children:"$2,890"})]}),r.jsx("div",{className:"text-blue-600",children:r.jsx($e,{className:"h-8 w-8"})})]}),r.jsxs("div",{className:"flex items-center justify-between p-4 bg-purple-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Average per Session"}),r.jsx("p",{className:"text-2xl font-bold text-purple-600",children:"$120"})]}),r.jsx("div",{className:"text-purple-600",children:r.jsx($e,{className:"h-8 w-8"})})]})]})]}),r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Payment Information"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"p-4 border border-gray-200 rounded-xl",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"font-semibold text-gray-900",children:"Bank Account"}),r.jsx(Ns,{className:"h-5 w-5 text-green-600"})]}),r.jsx("p",{className:"text-gray-600",children:"****1234"}),r.jsx("p",{className:"text-sm text-gray-500",children:"Next payout: January 20, 2025"})]}),r.jsxs("div",{className:"p-4 border border-gray-200 rounded-xl",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"font-semibold text-gray-900",children:"Tax Information"}),r.jsx(Ns,{className:"h-5 w-5 text-green-600"})]}),r.jsx("p",{className:"text-gray-600",children:"W-9 on file"}),r.jsx("p",{className:"text-sm text-gray-500",children:"Updated: December 2024"})]}),r.jsx("button",{className:"w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Download Tax Documents"})]})]})]})]},s)]})})},e_=()=>{const[s,e]=W.useState("overview"),t={totalUsers:10247,activeCounselors:523,sessionsToday:89,monthlyRevenue:124500,pendingApprovals:12,recentActivity:[{type:"user_signup",message:"New user registered: Sarah M.",time:"2 minutes ago"},{type:"counselor_application",message:"Counselor application submitted: Dr. James Wilson",time:"15 minutes ago"},{type:"session_completed",message:"Session completed: Client A with Dr. Chen",time:"23 minutes ago"},{type:"payment_processed",message:"Payment processed: $120 for session #1234",time:"1 hour ago"}]},n=[{key:"overview",label:"Overview",icon:Gi},{key:"users",label:"User Management",icon:Ve},{key:"content",label:"Content Management",icon:Yt},{key:"reports",label:"Reports",icon:$e}];return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Admin Dashboard"}),r.jsx("p",{className:"text-gray-600",children:"Manage Feelora platform and monitor system health"})]}),r.jsxs("div",{className:"flex space-x-4",children:[r.jsxs("button",{className:"bg-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition-all flex items-center space-x-2",children:[r.jsx(pn,{className:"h-4 w-4"}),r.jsx("span",{children:"Emergency Actions"})]}),r.jsxs("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2",children:[r.jsx(fl,{className:"h-4 w-4"}),r.jsx("span",{children:"System Settings"})]})]})]}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Total Users"}),r.jsx("p",{className:"text-2xl font-bold text-blue-600",children:t.totalUsers.toLocaleString()}),r.jsx("p",{className:"text-sm text-green-600",children:"+12% this month"})]}),r.jsx("div",{className:"bg-blue-100 p-3 rounded-lg",children:r.jsx(Ve,{className:"h-6 w-6 text-blue-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Active Counselors"}),r.jsx("p",{className:"text-2xl font-bold text-green-600",children:t.activeCounselors}),r.jsx("p",{className:"text-sm text-green-600",children:"+8% this month"})]}),r.jsx("div",{className:"bg-green-100 p-3 rounded-lg",children:r.jsx(Ue,{className:"h-6 w-6 text-green-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Sessions Today"}),r.jsx("p",{className:"text-2xl font-bold text-purple-600",children:t.sessionsToday}),r.jsx("p",{className:"text-sm text-green-600",children:"+5% vs yesterday"})]}),r.jsx("div",{className:"bg-purple-100 p-3 rounded-lg",children:r.jsx(Ce,{className:"h-6 w-6 text-purple-600"})})]})}),r.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Monthly Revenue"}),r.jsxs("p",{className:"text-2xl font-bold text-orange-600",children:["$",t.monthlyRevenue.toLocaleString()]}),r.jsx("p",{className:"text-sm text-green-600",children:"+18% this month"})]}),r.jsx("div",{className:"bg-orange-100 p-3 rounded-lg",children:r.jsx($e,{className:"h-6 w-6 text-orange-600"})})]})})]}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8",children:r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(pn,{className:"h-8 w-8 text-yellow-600"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900",children:"Pending Actions Required"}),r.jsxs("p",{className:"text-gray-700",children:[t.pendingApprovals," counselor applications awaiting review"]})]}),r.jsx("button",{className:"bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-all",children:"Review Now"})]})}),r.jsx(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-8",children:r.jsx("div",{className:"flex flex-col sm:flex-row",children:n.map(i=>r.jsxs("button",{onClick:()=>e(i.key),className:`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${s===i.key?"bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md":"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,children:[r.jsx(i.icon,{className:"h-5 w-5"}),r.jsx("span",{children:i.label})]},i.key))})}),r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[s==="overview"&&r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Recent Activity"}),r.jsx("div",{className:"space-y-4",children:t.recentActivity.map((i,o)=>r.jsxs("div",{className:"flex items-start space-x-4 p-4 bg-gray-50 rounded-xl",children:[r.jsxs("div",{className:`p-2 rounded-full ${i.type==="user_signup"?"bg-blue-100":i.type==="counselor_application"?"bg-green-100":i.type==="session_completed"?"bg-purple-100":"bg-orange-100"}`,children:[i.type==="user_signup"&&r.jsx(Ve,{className:"h-4 w-4 text-blue-600"}),i.type==="counselor_application"&&r.jsx(Ue,{className:"h-4 w-4 text-green-600"}),i.type==="session_completed"&&r.jsx(Ce,{className:"h-4 w-4 text-purple-600"}),i.type==="payment_processed"&&r.jsx($e,{className:"h-4 w-4 text-orange-600"})]}),r.jsxs("div",{className:"flex-1",children:[r.jsx("p",{className:"text-gray-900",children:i.message}),r.jsx("p",{className:"text-sm text-gray-500",children:i.time})]})]},o))})]}),r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"System Health"}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-gray-700",children:"Server Uptime"}),r.jsx("span",{className:"text-green-600 font-semibold",children:"99.9%"})]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"99.9%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-gray-700",children:"Database Performance"}),r.jsx("span",{className:"text-green-600 font-semibold",children:"Excellent"})]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"95%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-gray-700",children:"API Response Time"}),r.jsx("span",{className:"text-yellow-600 font-semibold",children:"120ms"})]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-yellow-500 h-2 rounded-full",style:{width:"80%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-gray-700",children:"Storage Usage"}),r.jsx("span",{className:"text-blue-600 font-semibold",children:"67%"})]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:"67%"}})})]})]})]})]}),s==="users"&&r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"User Management"}),r.jsxs("div",{className:"flex space-x-4",children:[r.jsx("input",{type:"text",placeholder:"Search users...",className:"px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),r.jsx("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Export Users"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[r.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 text-center",children:[r.jsx("h4",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Regular Users"}),r.jsx("p",{className:"text-3xl font-bold text-blue-600",children:"8,947"}),r.jsx("p",{className:"text-sm text-gray-600",children:"Active accounts"})]}),r.jsxs("div",{className:"bg-green-50 rounded-xl p-6 text-center",children:[r.jsx("h4",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Counselors"}),r.jsx("p",{className:"text-3xl font-bold text-green-600",children:"523"}),r.jsx("p",{className:"text-sm text-gray-600",children:"Verified professionals"})]}),r.jsxs("div",{className:"bg-purple-50 rounded-xl p-6 text-center",children:[r.jsx("h4",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Admins"}),r.jsx("p",{className:"text-3xl font-bold text-purple-600",children:"12"}),r.jsx("p",{className:"text-sm text-gray-600",children:"Platform administrators"})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold text-gray-900",children:"Recent User Activity"}),[{name:"Sarah Johnson",email:"sarah@email.com",role:"User",status:"Active",joined:"2025-01-10"},{name:"Dr. Michael Chen",email:"mchen@email.com",role:"Counselor",status:"Pending",joined:"2025-01-09"},{name:"Emily Rodriguez",email:"emily@email.com",role:"User",status:"Active",joined:"2025-01-08"},{name:"Dr. James Wilson",email:"jwilson@email.com",role:"Counselor",status:"Active",joined:"2025-01-07"}].map((i,o)=>r.jsxs("div",{className:"flex items-center justify-between p-4 border border-gray-200 rounded-xl",children:[r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("div",{className:"bg-gray-100 p-3 rounded-full",children:r.jsx(Ve,{className:"h-5 w-5 text-gray-600"})}),r.jsxs("div",{children:[r.jsx("h5",{className:"font-semibold text-gray-900",children:i.name}),r.jsx("p",{className:"text-sm text-gray-600",children:i.email}),r.jsxs("p",{className:"text-xs text-gray-500",children:["Joined: ",new Date(i.joined).toLocaleDateString()]})]})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm",children:i.role}),r.jsx("span",{className:`px-3 py-1 rounded-full text-sm ${i.status==="Active"?"bg-green-100 text-green-800":i.status==="Pending"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:i.status}),r.jsx("button",{className:"text-blue-600 hover:text-blue-700 font-medium",children:"Manage"})]})]},o))]})]}),s==="content"&&r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"Content Management"}),r.jsx("button",{className:"bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Create New Content"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[r.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 text-center",children:[r.jsx(Yt,{className:"h-8 w-8 text-blue-600 mx-auto mb-3"}),r.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Articles"}),r.jsx("p",{className:"text-2xl font-bold text-blue-600",children:"247"}),r.jsx("button",{className:"mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium",children:"Manage Articles"})]}),r.jsxs("div",{className:"bg-green-50 rounded-xl p-6 text-center",children:[r.jsx(Ce,{className:"h-8 w-8 text-green-600 mx-auto mb-3"}),r.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Events"}),r.jsx("p",{className:"text-2xl font-bold text-green-600",children:"34"}),r.jsx("button",{className:"mt-3 text-green-600 hover:text-green-700 text-sm font-medium",children:"Manage Events"})]}),r.jsxs("div",{className:"bg-purple-50 rounded-xl p-6 text-center",children:[r.jsx(Ve,{className:"h-8 w-8 text-purple-600 mx-auto mb-3"}),r.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Resources"}),r.jsx("p",{className:"text-2xl font-bold text-purple-600",children:"156"}),r.jsx("button",{className:"mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium",children:"Manage Resources"})]}),r.jsxs("div",{className:"bg-orange-50 rounded-xl p-6 text-center",children:[r.jsx(fl,{className:"h-8 w-8 text-orange-600 mx-auto mb-3"}),r.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Pages"}),r.jsx("p",{className:"text-2xl font-bold text-orange-600",children:"12"}),r.jsx("button",{className:"mt-3 text-orange-600 hover:text-orange-700 text-sm font-medium",children:"Manage Pages"})]})]}),r.jsx("div",{className:"space-y-6",children:r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Recent Content Updates"}),r.jsx("div",{className:"space-y-3",children:[{title:"Understanding Anxiety: A Complete Guide",type:"Article",author:"Dr. Sarah Chen",updated:"2 hours ago"},{title:"Mindfulness Workshop Series",type:"Event",author:"Admin",updated:"1 day ago"},{title:"Depression Recovery Resources",type:"Resource",author:"Dr. Michael Rodriguez",updated:"2 days ago"}].map((i,o)=>r.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("h5",{className:"font-semibold text-gray-900",children:i.title}),r.jsxs("p",{className:"text-sm text-gray-600",children:[i.type," • By ",i.author," • ",i.updated]})]}),r.jsxs("div",{className:"flex space-x-2",children:[r.jsx("button",{className:"text-blue-600 hover:text-blue-700 text-sm font-medium",children:"Edit"}),r.jsx("button",{className:"text-red-600 hover:text-red-700 text-sm font-medium",children:"Delete"})]})]},o))})]})})]}),s==="reports"&&r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Financial Reports"}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between p-4 bg-green-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Total Revenue (YTD)"}),r.jsx("p",{className:"text-2xl font-bold text-green-600",children:"$1,247,500"})]}),r.jsx($e,{className:"h-8 w-8 text-green-600"})]}),r.jsxs("div",{className:"flex items-center justify-between p-4 bg-blue-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Platform Fees Collected"}),r.jsx("p",{className:"text-2xl font-bold text-blue-600",children:"$187,125"})]}),r.jsx($e,{className:"h-8 w-8 text-blue-600"})]}),r.jsxs("div",{className:"flex items-center justify-between p-4 bg-purple-50 rounded-xl",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-gray-600",children:"Counselor Payouts"}),r.jsx("p",{className:"text-2xl font-bold text-purple-600",children:"$1,060,375"})]}),r.jsx($e,{className:"h-8 w-8 text-purple-600"})]})]}),r.jsx("button",{className:"w-full mt-6 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all",children:"Generate Financial Report"})]}),r.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Usage Analytics"}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-gray-700",children:"Session Completion Rate"}),r.jsx("span",{className:"text-green-600 font-semibold",children:"94%"})]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"94%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-gray-700",children:"User Satisfaction"}),r.jsx("span",{className:"text-blue-600 font-semibold",children:"4.8/5"})]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:"96%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-gray-700",children:"Platform Uptime"}),r.jsx("span",{className:"text-green-600 font-semibold",children:"99.9%"})]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"99.9%"}})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-gray-700",children:"AI Chat Usage"}),r.jsx("span",{className:"text-purple-600 font-semibold",children:"78%"})]}),r.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:r.jsx("div",{className:"bg-purple-500 h-2 rounded-full",style:{width:"78%"}})})]})]}),r.jsx("button",{className:"w-full mt-6 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all",children:"View Detailed Analytics"})]})]})]},s)]})})},t_=()=>{const[s,e]=W.useState(""),[t,n]=W.useState(""),[i,o]=W.useState(!1),[l,u]=W.useState(!1),[h,m]=W.useState(""),{login:f}=ci(),x=wa(),v=async w=>{w.preventDefault(),u(!0),m("");try{await f(s,t),x("/")}catch{m("Failed to log in. Please check your credentials.")}finally{u(!1)}};return r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8",children:r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-md w-full bg-white rounded-2xl shadow-xl p-8",children:[r.jsxs("div",{className:"text-center mb-8",children:[r.jsx("div",{className:"flex items-center justify-center space-x-2 mb-4",children:r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-xl",children:r.jsx(Pe,{className:"h-8 w-8 text-white"})})}),r.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Welcome Back"}),r.jsx("p",{className:"text-gray-600 mt-2",children:"Sign in to continue your wellness journey"})]}),h&&r.jsx(k.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6",children:h}),r.jsxs("form",{onSubmit:v,className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),r.jsx("input",{id:"email",type:"email",required:!0,value:s,onChange:w=>e(w.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter your email"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{id:"password",type:i?"text":"password",required:!0,value:t,onChange:w=>n(w.target.value),className:"w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter your password"}),r.jsx("button",{type:"button",onClick:()=>o(!i),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700",children:i?r.jsx(Ki,{className:"h-5 w-5"}):r.jsx(Nr,{className:"h-5 w-5"})})]})]}),r.jsx("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:l?r.jsxs(r.Fragment,{children:[r.jsx(ru,{className:"h-5 w-5 animate-spin"}),r.jsx("span",{children:"Signing In..."})]}):r.jsx("span",{children:"Sign In"})})]}),r.jsx("div",{className:"mt-8 text-center",children:r.jsxs("p",{className:"text-gray-600",children:["Don't have an account?"," ",r.jsx(q,{to:"/signup",className:"text-blue-600 hover:text-blue-700 font-medium",children:"Sign up here"})]})}),r.jsx("div",{className:"mt-6 p-4 bg-red-50 rounded-lg border border-red-200",children:r.jsxs("p",{className:"text-sm text-red-700 text-center",children:[r.jsx("strong",{children:"In Crisis?"})," ",r.jsx(q,{to:"/emergency",className:"underline hover:no-underline",children:"Get immediate help"})]})})]})})},s_=()=>{const[s,e]=W.useState({displayName:"",email:"",password:"",confirmPassword:"",role:"user"}),[t,n]=W.useState(!1),[i,o]=W.useState(!1),[l,u]=W.useState(!1),[h,m]=W.useState(""),{signup:f}=ci(),x=wa(),v=async P=>{if(P.preventDefault(),u(!0),m(""),s.password!==s.confirmPassword){m("Passwords do not match"),u(!1);return}if(s.password.length<6){m("Password must be at least 6 characters long"),u(!1);return}try{await f(s.email,s.password,s.role,s.displayName),x("/")}catch{m("Failed to create account. Please try again.")}finally{u(!1)}},w=P=>{e(R=>({...R,[P.target.name]:P.target.value}))},C=[{value:"user",label:"I need support",icon:Ke,description:"Looking for counseling and wellness support"},{value:"counselor",label:"I am a counselor",icon:vm,description:"Licensed professional offering services"},{value:"admin",label:"Administrator",icon:Ue,description:"Platform administration (invite only)"}];return r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8",children:r.jsxs(k.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-md w-full bg-white rounded-2xl shadow-xl p-8",children:[r.jsxs("div",{className:"text-center mb-8",children:[r.jsx("div",{className:"flex items-center justify-center space-x-2 mb-4",children:r.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-xl",children:r.jsx(Pe,{className:"h-8 w-8 text-white"})})}),r.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Join Feelora"}),r.jsx("p",{className:"text-gray-600 mt-2",children:"Start your wellness journey today"})]}),h&&r.jsx(k.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6",children:h}),r.jsxs("form",{onSubmit:v,className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"displayName",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),r.jsx("input",{id:"displayName",name:"displayName",type:"text",required:!0,value:s.displayName,onChange:w,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter your full name"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),r.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:s.email,onChange:w,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter your email"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"role",className:"block text-sm font-medium text-gray-700 mb-3",children:"I am..."}),r.jsx("div",{className:"space-y-3",children:C.map(P=>r.jsxs("label",{className:`flex items-start space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${s.role===P.value?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,children:[r.jsx("input",{type:"radio",name:"role",value:P.value,checked:s.role===P.value,onChange:w,className:"mt-1 text-blue-600"}),r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(P.icon,{className:"h-5 w-5 text-gray-600"}),r.jsx("span",{className:"font-medium text-gray-900",children:P.label})]}),r.jsx("p",{className:"text-sm text-gray-600 mt-1",children:P.description})]})]},P.value))})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{id:"password",name:"password",type:t?"text":"password",required:!0,value:s.password,onChange:w,className:"w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Create a password"}),r.jsx("button",{type:"button",onClick:()=>n(!t),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700",children:t?r.jsx(Ki,{className:"h-5 w-5"}):r.jsx(Nr,{className:"h-5 w-5"})})]})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password"}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:i?"text":"password",required:!0,value:s.confirmPassword,onChange:w,className:"w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Confirm your password"}),r.jsx("button",{type:"button",onClick:()=>o(!i),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700",children:i?r.jsx(Ki,{className:"h-5 w-5"}):r.jsx(Nr,{className:"h-5 w-5"})})]})]}),r.jsx("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:l?r.jsxs(r.Fragment,{children:[r.jsx(ru,{className:"h-5 w-5 animate-spin"}),r.jsx("span",{children:"Creating Account..."})]}):r.jsx("span",{children:"Create Account"})})]}),r.jsx("div",{className:"mt-8 text-center",children:r.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",r.jsx(q,{to:"/login",className:"text-blue-600 hover:text-blue-700 font-medium",children:"Sign in here"})]})}),r.jsx("div",{className:"mt-6 p-4 bg-red-50 rounded-lg border border-red-200",children:r.jsxs("p",{className:"text-sm text-red-700 text-center",children:[r.jsx("strong",{children:"In Crisis?"})," ",r.jsx(q,{to:"/emergency",className:"underline hover:no-underline",children:"Get immediate help"})]})})]})})};function n_(){return r.jsx(Nv,{children:r.jsx(wm,{children:r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:r.jsx(jv,{children:r.jsxs(Nm,{children:[r.jsx(de,{path:"/",element:r.jsx(Yc,{})}),r.jsx(de,{path:"/login",element:r.jsx(t_,{})}),r.jsx(de,{path:"/signup",element:r.jsx(s_,{})}),r.jsx(de,{path:"/services",element:r.jsx(kv,{})}),r.jsx(de,{path:"/emergency",element:r.jsx(Ov,{})}),r.jsx(de,{path:"/category/:slug",element:r.jsx(Uv,{})}),r.jsx(de,{path:"/resources",element:r.jsx(qv,{})}),r.jsx(de,{path:"/events",element:r.jsx(Gv,{})}),r.jsx(de,{path:"/about",element:r.jsx(Kv,{})}),r.jsx(de,{path:"/contact",element:r.jsx(Qv,{})}),r.jsx(de,{path:"/privacy",element:r.jsx(Yv,{})}),r.jsx(de,{path:"/terms",element:r.jsx(Jv,{})}),r.jsx(de,{path:"/chat",element:r.jsx(Xs,{children:r.jsx(Rv,{})})}),r.jsx(de,{path:"/book",element:r.jsx(Xs,{children:r.jsx(Lv,{})})}),r.jsx(de,{path:"/dashboard/user",element:r.jsx(Xs,{requiredRole:"user",children:r.jsx(Xv,{})})}),r.jsx(de,{path:"/dashboard/counselor",element:r.jsx(Xs,{requiredRole:"counselor",children:r.jsx(Zv,{})})}),r.jsx(de,{path:"/dashboard/admin",element:r.jsx(Xs,{requiredRole:"admin",children:r.jsx(e_,{})})}),r.jsx(de,{path:"*",element:r.jsx(Yc,{})})]})})})})})}jm.createRoot(document.getElementById("root")).render(r.jsx(W.StrictMode,{children:r.jsx(n_,{})}));
