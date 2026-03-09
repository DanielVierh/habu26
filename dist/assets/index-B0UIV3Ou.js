(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ue of document.querySelectorAll('link[rel="modulepreload"]'))U(ue);new MutationObserver(ue=>{for(const ne of ue)if(ne.type==="childList")for(const pe of ne.addedNodes)pe.tagName==="LINK"&&pe.rel==="modulepreload"&&U(pe)}).observe(document,{childList:!0,subtree:!0});function Se(ue){const ne={};return ue.integrity&&(ne.integrity=ue.integrity),ue.referrerPolicy&&(ne.referrerPolicy=ue.referrerPolicy),ue.crossOrigin==="use-credentials"?ne.credentials="include":ue.crossOrigin==="anonymous"?ne.credentials="omit":ne.credentials="same-origin",ne}function U(ue){if(ue.ep)return;ue.ep=!0;const ne=Se(ue);fetch(ue.href,ne)}})();const Br=[1,2,3,4,5,6,7,8,9,10,11,12];function vr(){return new Date().toISOString()}function $t(E){const h=Math.random().toString(36).slice(2,10);return`${E}_${Date.now()}_${h}`}function _r(E,h){const Se=new Date(E,h,0).getDate(),U=[];for(let ue=1;ue<=Se;ue+=1){const ne=new Date(Date.UTC(E,h-1,ue));U.push({isoDate:ne.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return U}function Sr(E){return E.map(h=>({id:$t("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function mr(E,h,Se){const U=h.reduce((ne,pe)=>ne+pe.plannedCents,0),ue=Br.map(ne=>({month:ne,days:_r(E,ne),foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Sr(h),fixedBudgetCents:U,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:E,createdAt:vr(),templateVersion:Se,months:ue}}function gr(E,h){return{id:$t("expense"),description:E,amountCents:h,createdAt:vr()}}function br(E,h,Se){const U={id:$t("income"),description:E,amountCents:h,createdAt:vr()};return Se?{...U,incomeSource:Se}:U}var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pr(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var Ja={exports:{}},Mr=Ja.exports,yr;function Tr(){return yr||(yr=1,(function(E,h){((Se,U)=>{E.exports=U()})(Mr,function(){var Se=function(e,t){return(Se=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}))(e,t)},U=function(){return(U=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function ue(e,t,n){for(var a,r=0,s=t.length;r<s;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ne=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Er,pe=Object.keys,ae=Array.isArray;function ce(e,t){return typeof t=="object"&&pe(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ne.Promise||(ne.Promise=Promise);var Qe=Object.getPrototypeOf,Ze={}.hasOwnProperty;function re(e,t){return Ze.call(e,t)}function et(e,t){typeof t=="function"&&(t=t(Qe(e))),(typeof Reflect>"u"?pe:Reflect.ownKeys)(t).forEach(function(n){ut(e,n,t[n])})}var tt=Object.defineProperty;function ut(e,t,n,a){tt(e,t,ce(n&&re(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function Bt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ut(e.prototype,"constructor",e),{extend:et.bind(null,e.prototype)}}}}var Qa=Object.getOwnPropertyDescriptor,aa=[].slice;function Fn(e,t,n){return aa.call(e,t,n)}function ka(e,t){return t(e)}function tn(e){if(!e)throw new Error("Assertion Failed")}function $a(e){ne.setImmediate?setImmediate(e):setTimeout(e,0)}function _t(e,t){if(typeof t=="string"&&re(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,r=t.length;a<r;++a){var s=_t(e,t[a]);n.push(s)}return n}var l,u=t.indexOf(".");return u===-1||(l=e[t.substr(0,u)])==null?void 0:_t(l,t.substr(u+1))}function rt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){tn(typeof n!="string"&&"length"in n);for(var a=0,r=t.length;a<r;++a)rt(e,t[a],n[a])}else{var s,l,u=t.indexOf(".");u!==-1?(s=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?ae(e)&&!isNaN(parseInt(s))?e.splice(s,1):delete e[s]:e[s]=n:rt(l=(l=e[s])&&re(e,s)?l:e[s]={},u,n)):n===void 0?ae(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function It(e){var t,n={};for(t in e)re(e,t)&&(n[t]=e[t]);return n}var Ba=[].concat;function ct(e){return Ba.apply([],e)}var Et="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ct([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ne[e]}),ye=new Set(Et.map(function(e){return ne[e]})),Lt=null;function Jt(e){return Lt=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Lt.get(n);if(a)return a;if(ae(n)){a=[],Lt.set(n,a);for(var r=0,s=n.length;r<s;++r)a.push(t(n[r]))}else if(ye.has(n.constructor))a=n;else{var l,u=Qe(n);for(l in a=u===Object.prototype?{}:Object.create(u),Lt.set(n,a),n)re(n,l)&&(a[l]=t(n[l]))}return a})(e),Lt=null,e}var _a={}.toString;function ra(e){return _a.call(e).slice(8,-1)}var Dn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Za=typeof Dn=="symbol"?function(e){var t;return e!=null&&(t=e[Dn])&&t.apply(e)}:function(){return null};function jt(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var nn={};function St(e){var t,n,a,r;if(arguments.length===1){if(ae(e))return e.slice();if(this===nn&&typeof e=="string")return[e];if(r=Za(e))for(n=[];!(a=r.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var sa=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Et=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Re=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Et),er={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function an(e,t){this.name=e,this.message=t}function Sa(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,r){return r.indexOf(n)===a}).join(`
`)}function mn(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Sa(e,t)}function rn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Sa(e,this.failures)}Bt(an).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Bt(mn).from(an),Bt(rn).from(an);var ia=Re.reduce(function(e,t){return e[t]=t+"Error",e},{}),oa=an,J=Re.reduce(function(e,t){var n=t+"Error";function a(r,s){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(s?`
 `+s:""),this.inner=s||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=er[t]||n,this.inner=null)}return Bt(a).from(oa),e[t]=a,e},{}),gn=(J.Syntax=SyntaxError,J.Type=TypeError,J.Range=RangeError,Et.reduce(function(e,t){return e[t+"Error"]=J[t],e},{}));Et=Re.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=J[t]),e},{});function ve(){}function Rt(e){return e}function Ke(e,t){return e==null||e===Rt?t:function(n){return t(e(n))}}function Pt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function In(e,t){return e===ve?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,s=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?Pt(a,this.onsuccess):a),r&&(this.onerror=this.onerror?Pt(r,this.onerror):r),s!==void 0?s:n}}function Nn(e,t){return e===ve?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Pt(n,this.onsuccess):n),a&&(this.onerror=this.onerror?Pt(a,this.onerror):a)}}function tr(e,t){return e===ve?t:function(r){var a=e.apply(this,arguments),r=(ce(r,a),this.onsuccess),s=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Pt(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Pt(s,this.onerror):s),a===void 0?l===void 0?void 0:l:ce(a,l)}}function la(e,t){return e===ve?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function bn(e,t){return e===ve?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,r=arguments.length,s=new Array(r);r--;)s[r]=arguments[r];return n.then(function(){return t.apply(a,s)})}return t.apply(this,arguments)}}Et.ModifyError=mn,Et.DexieError=an,Et.BulkError=rn;var bt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ea(e){bt=e}var Je={},Pa=100,Mt=typeof Promise>"u"?[]:(Re=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Mt=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Qe(Mt),Re]:[Re,Qe(Re),Re]),Re=Mt[0],pn=Mt[1],pn=pn&&pn.then,Ht=Re&&Re.constructor,sn=!!Mt[2],yn=function(e,t){on.push([e,t]),Ae&&(queueMicrotask(ar),Ae=!1)},Kn=!0,Ae=!0,Ve=[],ie=[],Cn=Rt,Nt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ve,pgp:!1,env:{},finalize:ve},G=Nt,on=[],st=0,dt=[];function V(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=G;if(typeof e!="function"){if(e!==Je)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ua(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,r){try{r(function(s){if(a._state===null){if(s===a)throw new TypeError("A promise cannot be resolved with itself.");var l=a._lib&&ln();s&&typeof s.then=="function"?n(a,function(u,m){s instanceof V?s._then(u,m):s.then(u,m)}):(a._state=!0,a._value=s,Ta(a)),l&&un()}},ua.bind(null,a))}catch(s){ua(a,s)}})(this,e)}var qn={get:function(){var e=G,t=Rn;function n(a,r){var s=this,l=!e.global&&(e!==G||t!==Rn),u=l&&!yt(),m=new V(function(k,g){ca(s,new Ma(Fa(a,e,l,u),Fa(r,e,l,u),k,g,e))});return this._consoleTask&&(m._consoleTask=this._consoleTask),m}return n.prototype=Je,n},set:function(e){ut(this,"then",e&&e.prototype===Je?qn:{get:function(){return e},set:qn.set})}};function Ma(e,t,n,a,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=r}function ua(e,t){var n,a;ie.push(t),e._state===null&&(n=e._lib&&ln(),t=Cn(t),e._state=!1,e._value=t,a=e,Ve.some(function(r){return r._value===a._value})||Ve.push(a),Ta(e),n)&&un()}function Ta(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)ca(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),st===0&&(++st,yn(function(){--st==0&&da()},[]))}function ca(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++st,yn(nr,[n,e,t])}}function nr(e,t,n){try{var a,r=t._value;!t._state&&ie.length&&(ie=[]),a=bt&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||ie.indexOf(r)!==-1||(s=>{for(var l=Ve.length;l;)if(Ve[--l]._value===s._value)return Ve.splice(l,1)})(t),n.resolve(a)}catch(s){n.reject(s)}finally{--st==0&&da(),--n.psd.ref||n.psd.finalize()}}function ar(){Xt(Nt,function(){ln()&&un()})}function ln(){var e=Kn;return Ae=Kn=!1,e}function un(){var e,t,n;do for(;0<on.length;)for(e=on,on=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<on.length);Ae=Kn=!0}function da(){for(var e=Ve,t=(Ve=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),dt.slice(0)),n=t.length;n;)t[--n]()}function xn(e){return new V(Je,!1,e)}function ke(e,t){var n=G;return function(){var a=ln(),r=G;try{return Yt(n,!0),e.apply(this,arguments)}catch(s){t&&t(s)}finally{Yt(r,!1),a&&un()}}}et(V.prototype,{then:qn,_then:function(e,t){ca(this,new Ma(null,null,e,t,G))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:xn)(a)}):this.then(null,function(a){return(a&&a.name===t?n:xn)(a)}))},finally:function(e){return this.then(function(t){return V.resolve(e()).then(function(){return t})},function(t){return V.resolve(e()).then(function(){return xn(t)})})},timeout:function(e,t){var n=this;return e<1/0?new V(function(a,r){var s=setTimeout(function(){return r(new J.Timeout(t))},e);n.then(a,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ut(V.prototype,Symbol.toStringTag,"Dexie.Promise"),Nt.env=Aa(),et(V,{all:function(){var e=St.apply(null,arguments).map(wn);return new V(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(r,s){return V.resolve(r).then(function(l){e[s]=l,--a||t(e)},n)})})},resolve:function(e){return e instanceof V?e:e&&typeof e.then=="function"?new V(function(t,n){e.then(t,n)}):new V(Je,!0,e)},reject:xn,race:function(){var e=St.apply(null,arguments).map(wn);return new V(function(t,n){e.map(function(a){return V.resolve(a).then(t,n)})})},PSD:{get:function(){return G},set:function(e){return G=e}},totalEchoes:{get:function(){return Rn}},newPSD:Vt,usePSD:Xt,scheduler:{get:function(){return yn},set:function(e){yn=e}},rejectionMapper:{get:function(){return Cn},set:function(e){Cn=e}},follow:function(e,t){return new V(function(n,a){return Vt(function(r,s){var l=G;l.unhandleds=[],l.onunhandled=s,l.finalize=Pt(function(){var u,m=this;u=function(){m.unhandleds.length===0?r():s(m.unhandleds[0])},dt.push(function k(){u(),dt.splice(dt.indexOf(k),1)}),++st,yn(function(){--st==0&&da()},[])},l.finalize),e()},t,n,a)})}}),Ht&&(Ht.allSettled&&ut(V,"allSettled",function(){var e=St.apply(null,arguments).map(wn);return new V(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(r,s){return V.resolve(r).then(function(l){return a[s]={status:"fulfilled",value:l}},function(l){return a[s]={status:"rejected",reason:l}}).then(function(){return--n||t(a)})})})}),Ht.any&&typeof AggregateError<"u"&&ut(V,"any",function(){var e=St.apply(null,arguments).map(wn);return new V(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,r=new Array(a);e.forEach(function(s,l){return V.resolve(s).then(function(u){return t(u)},function(u){r[l]=u,--a||n(new AggregateError(r))})})})}),Ht.withResolvers)&&(V.withResolvers=Ht.withResolvers);var qe={awaits:0,echoes:0,id:0},rr=0,Ln=[],jn=0,Rn=0,sr=0;function Vt(e,l,n,a){var r=G,s=Object.create(r),l=(s.parent=r,s.ref=0,s.global=!1,s.id=++sr,Nt.env,s.env=sn?{Promise:V,PromiseProp:{value:V,configurable:!0,writable:!0},all:V.all,race:V.race,allSettled:V.allSettled,any:V.any,resolve:V.resolve,reject:V.reject}:{},l&&ce(s,l),++r.ref,s.finalize=function(){--this.parent.ref||this.parent.finalize()},Xt(s,e,n,a));return s.ref===0&&s.finalize(),l}function cn(){return qe.id||(qe.id=++rr),++qe.awaits,qe.echoes+=Pa,qe.id}function yt(){return!!qe.awaits&&(--qe.awaits==0&&(qe.id=0),qe.echoes=qe.awaits*Pa,!0)}function wn(e){return qe.echoes&&e&&e.constructor===Ht?(cn(),e.then(function(t){return yt(),t},function(t){return yt(),Me(t)})):e}function Oa(){var e=Ln[Ln.length-1];Ln.pop(),Yt(e,!1)}function Yt(e,t){var n,a,r=G;(t?!qe.echoes||jn++&&e===G:!jn||--jn&&e===G)||queueMicrotask(t?(function(s){++Rn,qe.echoes&&--qe.echoes!=0||(qe.echoes=qe.awaits=qe.id=0),Ln.push(G),Yt(s,!0)}).bind(null,e):Oa),e!==G&&(G=e,r===Nt&&(Nt.env=Aa()),sn)&&(n=Nt.env.Promise,a=e.env,r.global||e.global)&&(Object.defineProperty(ne,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function Aa(){var e=ne.Promise;return sn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ne,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Xt(e,t,n,a,r){var s=G;try{return Yt(e,!0),t(n,a,r)}finally{Yt(s,!1)}}function Fa(e,t,n,a){return typeof e!="function"?e:function(){var r=G;n&&cn(),Yt(t,!0);try{return e.apply(this,arguments)}finally{Yt(r,!1),a&&queueMicrotask(yt)}}}function Vn(e){Promise===Ht&&qe.echoes===0?jn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+pn).indexOf("[native code]")===-1&&(cn=yt=ve);var Me=V.reject,zt="￿",Kt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Da="String expected.",dn=[],Yn="__dbnames",te="readonly",fa="readwrite";function o(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var c={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function p(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=Jt(t))[e],t}}function d(){throw J.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function f(e,t){try{var n=T(e),a=T(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=I(e),s=I(t),l=r.length,u=s.length,m=l<u?l:u,k=0;k<m;++k)if(r[k]!==s[k])return r[k]<s[k]?-1:1;return l===u?0:l<u?-1:1;case"Array":for(var g=e,v=t,C=g.length,x=v.length,y=C<x?C:x,b=0;b<y;++b){var $=f(g[b],v[b]);if($!==0)return $}return C===x?0:C<x?-1:1}}catch{}return NaN}function T(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=ra(e))==="ArrayBuffer")?"binary":t}function I(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function R(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(r,s){return!n.failures[s]})),Promise.all(a.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}H.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ae(n))return ue(ue([],ae(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(ae(a))return ae(e)?e.filter(function(r){return!a.includes(r)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var K=H;function H(e){this["@@propmod"]=e}function W(e,t){for(var n=pe(t),a=n.length,r=!1,s=0;s<a;++s){var l=n[s],u=t[l],m=_t(e,l);u instanceof K?(rt(e,l,u.execute(m)),r=!0):m!==u&&(rt(e,l,u),r=!0)}return r}X.prototype._trans=function(e,t,n){var a=this._tx||G.trans,r=this.name,s=bt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function l(k,g,v){if(v.schema[r])return t(v.idbtrans,v);throw new J.NotFound("Table "+r+" not part of transaction")}var u=ln();try{var m=a&&a.db._novip===this.db._novip?a===G.trans?a._promise(e,l,n):Vt(function(){return a._promise(e,l,n)},{trans:a,transless:G.transless||G}):(function k(g,v,C,x){if(g.idbdb&&(g._state.openComplete||G.letThrough||g._vip)){var y=g._createTransaction(v,C,g._dbSchema);try{y.create(),g._state.PR1398_maxLoop=3}catch(b){return b.name===ia.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return k(g,v,C,x)})):Me(b)}return y._promise(v,function(b,$){return Vt(function(){return G.trans=y,x(b,$,y)})}).then(function(b){if(v==="readwrite")try{y.idbtrans.commit()}catch{}return v==="readonly"?b:y._completion.then(function(){return b})})}if(g._state.openComplete)return Me(new J.DatabaseClosed(g._state.dbOpenError));if(!g._state.isBeingOpened){if(!g._state.autoOpen)return Me(new J.DatabaseClosed);g.open().catch(ve)}return g._state.dbReadyPromise.then(function(){return k(g,v,C,x)})})(this.db,e,[this.name],l);return s&&(m._consoleTask=s,m=m.catch(function(k){return console.trace(k),Me(k)})),m}finally{u&&un()}},X.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Me(new J.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},X.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ae(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=pe(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function(k){return 0<=u.keyPath.indexOf(k)})){for(var m=0;m<t.length;++m)if(t.indexOf(u.keyPath[m])===-1)return!1;return!0}return!1}).sort(function(u,m){return u.keyPath.length-m.keyPath.length})[0];if(n&&this.db._maxKey!==zt)return l=n.keyPath.slice(0,t.length),this.where(l).equals(l.map(function(u){return e[u]}));!n&&bt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function r(u,m){return f(u,m)===0}var l=t.reduce(function(g,m){var k=g[0],g=g[1],v=a[m],C=e[m];return[k||v,k||!v?o(g,v&&v.multi?function(x){return x=_t(x,m),ae(x)&&x.some(function(y){return r(C,y)})}:function(x){return r(C,_t(x,m))}):g]},[null,null]),s=l[0],l=l[1];return s?this.where(s.name).equals(e[s.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},X.prototype.filter=function(e){return this.toCollection().and(e)},X.prototype.count=function(e){return this.toCollection().count(e)},X.prototype.offset=function(e){return this.toCollection().offset(e)},X.prototype.limit=function(e){return this.toCollection().limit(e)},X.prototype.each=function(e){return this.toCollection().each(e)},X.prototype.toArray=function(e){return this.toCollection().toArray(e)},X.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},X.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ae(e)?"[".concat(e.join("+"),"]"):e))},X.prototype.reverse=function(){return this.toCollection().reverse()},X.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof d&&(e=(l=>{var u=g,m=l;if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");function k(){this.constructor=u}function g(){return l!==null&&l.apply(this,arguments)||this}return Se(u,m),u.prototype=m===null?Object.create(m):(k.prototype=m.prototype,new k),Object.defineProperty(g.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),g.prototype.table=function(){return n},g})(e)),new Set),r=e.prototype;r;r=Qe(r))Object.getOwnPropertyNames(r).forEach(function(l){return a.add(l)});function s(l){if(!l)return l;var u,m=Object.create(e.prototype);for(u in l)if(!a.has(u))try{m[u]=l[u]}catch{}return m}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=s,this.hook("reading",s),e},X.prototype.defineClass=function(){return this.mapToClass(function(e){ce(this,e)})},X.prototype.add=function(e,t){var n=this,a=this.schema.primKey,r=a.auto,s=a.keyPath,l=e;return s&&r&&(l=p(s)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[l]})}).then(function(u){return u.numFailures?V.reject(u.failures[0]):u.lastResult}).then(function(u){if(s)try{rt(e,s,u)}catch{}return u})},X.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(s){var l=s??{};return W(l,t),a&&rt(l,a,e),n.core.mutate({trans:r,type:"put",values:[l],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?V.reject(u.failures[0]):!!s})})})},X.prototype.update=function(e,t){return typeof e!="object"||ae(e)?this.where(":id").equals(e).modify(t):(e=_t(e,this.schema.primKey.keyPath))===void 0?Me(new J.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},X.prototype.put=function(e,t){var n=this,a=this.schema.primKey,r=a.auto,s=a.keyPath,l=e;return s&&r&&(l=p(s)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[l],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?V.reject(u.failures[0]):u.lastResult}).then(function(u){if(s)try{rt(e,s,u)}catch{}return u})},X.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return R(t,[e],a)}).then(function(a){return a.numFailures?V.reject(a.failures[0]):void 0})})},X.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:c}).then(function(n){return R(e,null,n)})}).then(function(t){return t.numFailures?V.reject(t.failures[0]):void 0})},X.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(r){return t.hook.reading.fire(r)})})})},X.prototype.bulkAdd=function(e,t,n){var a=this,r=Array.isArray(t)?t:void 0,s=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var u=a.schema.primKey,k=u.auto,u=u.keyPath;if(u&&r)throw new J.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var m=e.length,k=u&&k?e.map(p(u)):e;return a.core.mutate({trans:l,type:"add",keys:r,values:k,wantResults:s}).then(function(g){var v=g.numFailures,C=g.failures;if(v===0)return s?g.results:g.lastResult;throw new rn("".concat(a.name,".bulkAdd(): ").concat(v," of ").concat(m," operations failed"),C)})})},X.prototype.bulkPut=function(e,t,n){var a=this,r=Array.isArray(t)?t:void 0,s=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var u=a.schema.primKey,k=u.auto,u=u.keyPath;if(u&&r)throw new J.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var m=e.length,k=u&&k?e.map(p(u)):e;return a.core.mutate({trans:l,type:"put",keys:r,values:k,wantResults:s}).then(function(g){var v=g.numFailures,C=g.failures;if(v===0)return s?g.results:g.lastResult;throw new rn("".concat(a.name,".bulkPut(): ").concat(v," of ").concat(m," operations failed"),C)})})},X.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(l){return l.key}),r=e.map(function(l){return l.changes}),s=[];return this._trans("readwrite",function(l){return n.getMany({trans:l,keys:a,cache:"clone"}).then(function(u){var m=[],k=[],g=(e.forEach(function(v,C){var x=v.key,y=v.changes,b=u[C];if(b){for(var $=0,B=Object.keys(y);$<B.length;$++){var w=B[$],P=y[w];if(w===t.schema.primKey.keyPath){if(f(P,x)!==0)throw new J.Constraint("Cannot update primary key in bulkUpdate()")}else rt(b,w,P)}s.push(C),m.push(x),k.push(b)}}),m.length);return n.mutate({trans:l,type:"put",keys:m,values:k,updates:{keys:a,changeSpecs:r}}).then(function(v){var C=v.numFailures,x=v.failures;if(C===0)return g;for(var y=0,b=Object.keys(x);y<b.length;y++){var $,B=b[y],w=s[Number(B)];w!=null&&($=x[B],delete x[B],x[w]=$)}throw new rn("".concat(t.name,".bulkUpdate(): ").concat(C," of ").concat(g," operations failed"),x)})})})},X.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(r){return R(t,e,r)})}).then(function(a){var r=a.numFailures,s=a.failures;if(r===0)return a.lastResult;throw new rn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),s)})};var Z=X;function X(){}function $e(e){function t(l,u){if(u){for(var m=arguments.length,k=new Array(m-1);--m;)k[m-1]=arguments[m];return n[l].subscribe.apply(null,k),e}if(typeof l=="string")return n[l]}var n={};t.addEventType=s;for(var a=1,r=arguments.length;a<r;++a)s(arguments[a]);return t;function s(l,u,m){var k,g;if(typeof l!="object")return u=u||la,g={subscribers:[],fire:m=m||ve,subscribe:function(v){g.subscribers.indexOf(v)===-1&&(g.subscribers.push(v),g.fire=u(g.fire,v))},unsubscribe:function(v){g.subscribers=g.subscribers.filter(function(C){return C!==v}),g.fire=g.subscribers.reduce(u,m)}},n[l]=t[l]=g;pe(k=l).forEach(function(v){var C=k[v];if(ae(C))s(v,k[v][0],k[v][1]);else{if(C!=="asap")throw new J.InvalidArgument("Invalid event config");var x=s(v,Rt,function(){for(var y=arguments.length,b=new Array(y);y--;)b[y]=arguments[y];x.subscribers.forEach(function($){$a(function(){$.apply(null,b)})})})}})}}function Ye(e,t){return Bt(t).from({prototype:e}),t}function Te(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function de(e,t){e.filter=o(e.filter,t)}function ft(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return o(a(),t())}:t,e.justLimit=n&&!a}function ze(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new J.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function it(e,t,n){var a=ze(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function Ct(e,t,n,a){var r,s,l=e.replayFilter?o(e.filter,e.replayFilter()):e.filter;return e.or?(r={},s=function(u,m,k){var g,v;l&&!l(m,k,function(C){return m.stop(C)},function(C){return m.fail(C)})||((v=""+(g=m.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(g)),re(r,v))||(r[v]=!0,t(u,m,k))},Promise.all([e.or._iterate(s,n),ht(it(e,a,n),e.algorithm,s,!e.keysOnly&&e.valueMapper)])):ht(it(e,a,n),o(e.algorithm,l),t,!e.keysOnly&&e.valueMapper)}function ht(e,t,n,a){var r=ke(a?function(s,l,u){return n(a(s),l,u)}:n);return e.then(function(s){if(s)return s.start(function(){var l=function(){return s.continue()};t&&!t(s,function(u){return l=u},function(u){s.stop(u),l=ve},function(u){s.fail(u),l=ve})||r(s.value,s,function(u){return l=u}),l()})})}ee.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Me.bind(null,n.error)):n.table._trans("readonly",e).then(t)},ee.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Me.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},ee.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=o(t.algorithm,e)},ee.prototype._iterate=function(e,t){return Ct(this._ctx,e,t,this._ctx.table.core)},ee.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ce(n,e),t._ctx=n,t},ee.prototype.raw=function(){return this._ctx.valueMapper=null,this},ee.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return Ct(t,e,n,t.table.core)})},ee.prototype.count=function(e){var t=this;return this._read(function(n){var a,r=t._ctx,s=r.table.core;return Te(r,!0)?s.count({trans:n,query:{index:ze(r,s.schema),range:r.range}}).then(function(l){return Math.min(l,r.limit)}):(a=0,Ct(r,function(){return++a,!1},n,s).then(function(){return a}))}).then(e)},ee.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],r=n.length-1;function s(m,k){return k?s(m[n[k]],k-1):m[a]}var l=this._ctx.dir==="next"?1:-1;function u(m,k){return f(s(m,r),s(k,r))*l}return this.toArray(function(m){return m.sort(u)}).then(t)},ee.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,r,s,l=t._ctx;return l.dir==="next"&&Te(l,!0)&&0<l.limit?(a=l.valueMapper,r=ze(l,l.table.core.schema),l.table.core.query({trans:n,limit:l.limit,values:!0,query:{index:r,range:l.range}}).then(function(u){return u=u.result,a?u.map(a):u})):(s=[],Ct(l,function(u){return s.push(u)},n,l.table.core).then(function(){return s}))},e)},ee.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,Te(t)?ft(t,function(){var n=e;return function(a,r){return n===0||(n===1?--n:r(function(){a.advance(n),n=0}),!1)}}):ft(t,function(){var n=e;return function(){return--n<0}})),this},ee.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),ft(this._ctx,function(){var t=e;return function(n,a,r){return--t<=0&&a(r),0<=t}},!0),this},ee.prototype.until=function(e,t){return de(this._ctx,function(n,a,r){return!e(n.value)||(a(r),t)}),this},ee.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},ee.prototype.last=function(e){return this.reverse().first(e)},ee.prototype.filter=function(e){var t;return de(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=o(t.isMatch,e),this},ee.prototype.and=function(e){return this.filter(e)},ee.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},ee.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ee.prototype.desc=function(){return this.reverse()},ee.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},ee.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},ee.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},ee.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,r){n.push(r.key)}).then(function(){return n}).then(e)},ee.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&Te(t,!0)&&0<t.limit)return this._read(function(a){var r=ze(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},ee.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},ee.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},ee.prototype.lastKey=function(e){return this.reverse().firstKey(e)},ee.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},de(this._ctx,function(a){var a=a.primaryKey.toString(),r=re(e,a);return e[a]=!0,!r})),this},ee.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function r(b,$){var B=$.failures;C+=b-$.numFailures;for(var w=0,P=pe(B);w<P.length;w++){var O=P[w];v.push(B[O])}}var s=typeof e=="function"?e:function(b){return W(b,e)},l=n.table.core,g=l.schema.primaryKey,u=g.outbound,m=g.extractKey,k=200,g=t.db._options.modifyChunkSize,v=(g&&(k=typeof g=="object"?g[l.name]||g["*"]||200:g),[]),C=0,x=[],y=e===Tt;return t.clone().primaryKeys().then(function(b){function $(w){var P=Math.min(k,b.length-w),O=b.slice(w,w+P);return(y?Promise.resolve([]):l.getMany({trans:a,keys:O,cache:"immutable"})).then(function(q){var F=[],A=[],Y=u?[]:null,z=y?O:[];if(!y)for(var D=0;D<P;++D){var j=q[D],fe={value:Jt(j),primKey:b[w+D]};s.call(fe,fe.value,fe)!==!1&&(fe.value==null?z.push(b[w+D]):u||f(m(j),m(fe.value))===0?(A.push(fe.value),u&&Y.push(b[w+D])):(z.push(b[w+D]),F.push(fe.value)))}return Promise.resolve(0<F.length&&l.mutate({trans:a,type:"add",values:F}).then(function(he){for(var Q in he.failures)z.splice(parseInt(Q),1);r(F.length,he)})).then(function(){return(0<A.length||B&&typeof e=="object")&&l.mutate({trans:a,type:"put",keys:Y,values:A,criteria:B,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<w}).then(function(he){return r(A.length,he)})}).then(function(){return(0<z.length||B&&y)&&l.mutate({trans:a,type:"delete",keys:z,criteria:B,isAdditionalChunk:0<w}).then(function(he){return R(n.table,z,he)}).then(function(he){return r(z.length,he)})}).then(function(){return b.length>w+P&&$(w+k)})})}var B=Te(n)&&n.limit===1/0&&(typeof e!="function"||y)&&{index:n.index,range:n.range};return $(0).then(function(){if(0<v.length)throw new mn("Error modifying one or more objects",v,C,x);return b.length})})})},ee.prototype.delete=function(){var e=this._ctx,t=e.range;return!Te(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Tt):this._write(function(n){var a=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:a,range:r}}).then(function(s){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(m){var u=m.failures,m=m.numFailures;if(m)throw new mn("Could not delete some values",Object.keys(u).map(function(k){return u[k]}),s-m);return s-m})})})};var L=ee;function ee(){}var Tt=function(e,t){return t.value=null};function wt(e,t){return e<t?-1:e===t?0:1}function ot(e,t){return t<e?-1:e===t?0:1}function Ce(e,t,n){return e=e instanceof Ue?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function He(e){return new e.Collection(e,function(){return pt("")}).limit(0)}function ge(x,t,n,a){var r,s,l,u,m,k,g,v=n.length;if(!n.every(function(b){return typeof b=="string"}))return Ce(x,Da);function C(b){r=b==="next"?function(B){return B.toUpperCase()}:function(B){return B.toLowerCase()},s=b==="next"?function(B){return B.toLowerCase()}:function(B){return B.toUpperCase()},l=b==="next"?wt:ot;var $=n.map(function(B){return{lower:s(B),upper:r(B)}}).sort(function(B,w){return l(B.lower,w.lower)});u=$.map(function(B){return B.upper}),m=$.map(function(B){return B.lower}),g=(k=b)==="next"?"":a}C("next");var x=new x.Collection(x,function(){return Fe(u[0],m[v-1]+a)}),y=(x._ondirectionchange=function(b){C(b)},0);return x._addAlgorithm(function(b,$,B){var w=b.key;if(typeof w=="string"){var P=s(w);if(t(P,m,y))return!0;for(var O=null,q=y;q<v;++q){var F=((A,Y,z,D,j,fe)=>{for(var he=Math.min(A.length,D.length),Q=-1,se=0;se<he;++se){var Oe=Y[se];if(Oe!==D[se])return j(A[se],z[se])<0?A.substr(0,se)+z[se]+z.substr(se+1):j(A[se],D[se])<0?A.substr(0,se)+D[se]+z.substr(se+1):0<=Q?A.substr(0,Q)+Y[Q]+z.substr(Q+1):null;j(A[se],Oe)<0&&(Q=se)}return he<D.length&&fe==="next"?A+z.substr(A.length):he<A.length&&fe==="prev"?A.substr(0,z.length):Q<0?null:A.substr(0,Q)+D[Q]+z.substr(Q+1)})(w,P,u[q],m[q],l,k);F===null&&O===null?y=q+1:(O===null||0<l(O,F))&&(O=F)}$(O!==null?function(){b.continue(O+g)}:B)}return!1}),x}function Fe(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function pt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(oe.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),oe.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?He(this):new this.Collection(this,function(){return Fe(e,t,!n,!a)})}catch{return Ce(this,Kt)}},oe.prototype.equals=function(e){return e==null?Ce(this,Kt):new this.Collection(this,function(){return pt(e)})},oe.prototype.above=function(e){return e==null?Ce(this,Kt):new this.Collection(this,function(){return Fe(e,void 0,!0)})},oe.prototype.aboveOrEqual=function(e){return e==null?Ce(this,Kt):new this.Collection(this,function(){return Fe(e,void 0,!1)})},oe.prototype.below=function(e){return e==null?Ce(this,Kt):new this.Collection(this,function(){return Fe(void 0,e,!1,!0)})},oe.prototype.belowOrEqual=function(e){return e==null?Ce(this,Kt):new this.Collection(this,function(){return Fe(void 0,e)})},oe.prototype.startsWith=function(e){return typeof e!="string"?Ce(this,Da):this.between(e,e+zt,!0,!0)},oe.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):ge(this,function(t,n){return t.indexOf(n[0])===0},[e],zt)},oe.prototype.equalsIgnoreCase=function(e){return ge(this,function(t,n){return t===n[0]},[e],"")},oe.prototype.anyOfIgnoreCase=function(){var e=St.apply(nn,arguments);return e.length===0?He(this):ge(this,function(t,n){return n.indexOf(t)!==-1},e,"")},oe.prototype.startsWithAnyOfIgnoreCase=function(){var e=St.apply(nn,arguments);return e.length===0?He(this):ge(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,zt)},oe.prototype.anyOf=function(){var e,t,n=this,a=St.apply(nn,arguments),r=this._cmp;try{a.sort(r)}catch{return Ce(this,Kt)}return a.length===0?He(this):((e=new this.Collection(this,function(){return Fe(a[0],a[a.length-1])}))._ondirectionchange=function(s){r=s==="next"?n._ascending:n._descending,a.sort(r)},t=0,e._addAlgorithm(function(s,l,u){for(var m=s.key;0<r(m,a[t]);)if(++t===a.length)return l(u),!1;return r(m,a[t])===0||(l(function(){s.continue(a[t])}),!1)}),e)},oe.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},oe.prototype.noneOf=function(){var e=St.apply(nn,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Ce(this,Kt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},oe.prototype.inAnyRange=function(e,B){var n=this,a=this._cmp,r=this._ascending,s=this._descending,l=this._min,u=this._max;if(e.length===0)return He(this);if(!e.every(function(w){return w[0]!==void 0&&w[1]!==void 0&&r(w[0],w[1])<=0}))return Ce(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",J.InvalidArgument);var m=!B||B.includeLowers!==!1,k=B&&B.includeUppers===!0,g,v=r;function C(w,P){return v(w[0],P[0])}try{(g=e.reduce(function(w,P){for(var O=0,q=w.length;O<q;++O){var F=w[O];if(a(P[0],F[1])<0&&0<a(P[1],F[0])){F[0]=l(F[0],P[0]),F[1]=u(F[1],P[1]);break}}return O===q&&w.push(P),w},[])).sort(C)}catch{return Ce(this,Kt)}var x=0,y=k?function(w){return 0<r(w,g[x][1])}:function(w){return 0<=r(w,g[x][1])},b=m?function(w){return 0<s(w,g[x][0])}:function(w){return 0<=s(w,g[x][0])},$=y,B=new this.Collection(this,function(){return Fe(g[0][0],g[g.length-1][1],!m,!k)});return B._ondirectionchange=function(w){v=w==="next"?($=y,r):($=b,s),g.sort(C)},B._addAlgorithm(function(w,P,O){for(var q,F=w.key;$(F);)if(++x===g.length)return P(O),!1;return!y(q=F)&&!b(q)||(n._cmp(F,g[x][1])===0||n._cmp(F,g[x][0])===0||P(function(){v===r?w.continue(g[x][0]):w.continue(g[x][1])}),!1)}),B},oe.prototype.startsWithAnyOf=function(){var e=St.apply(nn,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?He(this):this.inAnyRange(e.map(function(t){return[t,t+zt]})):Ce(this,"startsWithAnyOf() only works with strings")};var Ue=oe;function oe(){}function De(e){return ke(function(t){return xt(t),e(t.target.error),!1})}function xt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Ge="storagemutated",vt="x-storagemutated-1",Le=$e(null,Ge),kn=(le.prototype._lock=function(){return tn(!G.global),++this._reculock,this._reculock!==1||G.global||(G.lockOwnerFor=this),this},le.prototype._unlock=function(){if(tn(!G.global),--this._reculock==0)for(G.global||(G.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{Xt(e[1],e[0])}catch{}}return this},le.prototype._locked=function(){return this._reculock&&G.lockOwnerFor!==this},le.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(tn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new J.DatabaseClosed(a);case"MissingAPIError":throw new J.MissingAPI(a.message,a);default:throw new J.OpenFailed(a)}if(!this.active)throw new J.TransactionInactive;tn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ke(function(r){xt(r),t._reject(e.error)}),e.onabort=ke(function(r){xt(r),t.active&&t._reject(new J.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ke(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&Le.storagemutated.fire(e.mutatedParts)})}return this},le.prototype._promise=function(e,t,n){var a,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Me(new J.ReadOnly("Transaction is readonly")):this.active?this._locked()?new V(function(s,l){r._blockedFuncs.push([function(){r._promise(e,t,n).then(s,l)},G])}):n?Vt(function(){var s=new V(function(l,u){r._lock();var m=t(l,u,r);m&&m.then&&m.then(l,u)});return s.finally(function(){return r._unlock()}),s._lib=!0,s}):((a=new V(function(s,l){var u=t(s,l,r);u&&u.then&&u.then(s,l)}))._lib=!0,a):Me(new J.TransactionInactive)},le.prototype._root=function(){return this.parent?this.parent._root():this},le.prototype.waitFor=function(e){var t,n=this._root(),a=V.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function s(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=s)})()),n._waitingFor);return new V(function(s,l){a.then(function(u){return n._waitingQueue.push(ke(s.bind(null,u)))},function(u){return n._waitingQueue.push(ke(l.bind(null,u)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},le.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new J.Abort))},le.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(re(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new J.NotFound("Table "+e+" not part of transaction")},le);function le(){}function me(e,t,n,a,r,s,l,u){return{name:e,keyPath:t,unique:n,multi:a,auto:r,compound:s,src:(n&&!l?"&":"")+(a?"*":"")+(r?"++":"")+Ee(t),type:u}}function Ee(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ne(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(r){return[r.name,r]},n.reduce(function(r,s,l){return s=a(s,l),s&&(r[s[0]]=s[1]),r},{}))};var a}var Be=function(e){try{return e.only([[]]),Be=function(){return[[]]},[[]]}catch{return Be=function(){return zt},zt}};function Ut(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return _t(n,t)}:function(n){return _t(n,e)};var t}function kt(e){return[].slice.call(e)}var $n=0;function S(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function N(e,t,m){function a(y){if(y.type===3)return null;if(y.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=y.lower,C=y.upper,x=y.lowerOpen,y=y.upperOpen;return v===void 0?C===void 0?null:t.upperBound(C,!!y):C===void 0?t.lowerBound(v,!!x):t.bound(v,C,!!x,!!y)}function r(g){var v,C=g.name;return{name:C,schema:g,mutate:function(x){var y=x.trans,b=x.type,$=x.keys,B=x.values,w=x.range;return new Promise(function(P,O){P=ke(P);var q=y.objectStore(C),F=q.keyPath==null,A=b==="put"||b==="add";if(!A&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var Y,z=($||B||{length:1}).length;if($&&B&&$.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(z===0)return P({numFailures:0,failures:{},results:[],lastResult:void 0});function D(Ie){++he,xt(Ie)}var j=[],fe=[],he=0;if(b==="deleteRange"){if(w.type===4)return P({numFailures:he,failures:fe,results:[],lastResult:void 0});w.type===3?j.push(Y=q.clear()):j.push(Y=q.delete(a(w)))}else{var F=A?F?[B,$]:[B,null]:[$,null],Q=F[0],se=F[1];if(A)for(var Oe=0;Oe<z;++Oe)j.push(Y=se&&se[Oe]!==void 0?q[b](Q[Oe],se[Oe]):q[b](Q[Oe])),Y.onerror=D;else for(Oe=0;Oe<z;++Oe)j.push(Y=q[b](Q[Oe])),Y.onerror=D}function Dt(Ie){Ie=Ie.target.result,j.forEach(function(Tn,ur){return Tn.error!=null&&(fe[ur]=Tn.error)}),P({numFailures:he,failures:fe,results:b==="delete"?$:j.map(function(Tn){return Tn.result}),lastResult:Ie})}Y.onerror=function(Ie){D(Ie),Dt(Ie)},Y.onsuccess=Dt})},getMany:function(x){var y=x.trans,b=x.keys;return new Promise(function($,B){$=ke($);for(var w,P=y.objectStore(C),O=b.length,q=new Array(O),F=0,A=0,Y=function(j){j=j.target,q[j._pos]=j.result,++A===F&&$(q)},z=De(B),D=0;D<O;++D)b[D]!=null&&((w=P.get(b[D]))._pos=D,w.onsuccess=Y,w.onerror=z,++F);F===0&&$(q)})},get:function(x){var y=x.trans,b=x.key;return new Promise(function($,B){$=ke($);var w=y.objectStore(C).get(b);w.onsuccess=function(P){return $(P.target.result)},w.onerror=De(B)})},query:(v=u,function(x){return new Promise(function(y,b){y=ke(y);var $,B,w,A=x.trans,P=x.values,O=x.limit,F=x.query,q=O===1/0?void 0:O,Y=F.index,F=F.range,A=A.objectStore(C),A=Y.isPrimaryKey?A:A.index(Y.name),Y=a(F);if(O===0)return y({result:[]});v?((F=P?A.getAll(Y,q):A.getAllKeys(Y,q)).onsuccess=function(z){return y({result:z.target.result})},F.onerror=De(b)):($=0,B=!P&&"openKeyCursor"in A?A.openKeyCursor(Y):A.openCursor(Y),w=[],B.onsuccess=function(z){var D=B.result;return!D||(w.push(P?D.value:D.primaryKey),++$===O)?y({result:w}):void D.continue()},B.onerror=De(b))})}),openCursor:function(x){var y=x.trans,b=x.values,$=x.query,B=x.reverse,w=x.unique;return new Promise(function(P,O){P=ke(P);var A=$.index,q=$.range,F=y.objectStore(C),F=A.isPrimaryKey?F:F.index(A.name),A=B?w?"prevunique":"prev":w?"nextunique":"next",Y=!b&&"openKeyCursor"in F?F.openKeyCursor(a(q),A):F.openCursor(a(q),A);Y.onerror=De(O),Y.onsuccess=ke(function(z){var D,j,fe,he,Q=Y.result;Q?(Q.___id=++$n,Q.done=!1,D=Q.continue.bind(Q),j=(j=Q.continuePrimaryKey)&&j.bind(Q),fe=Q.advance.bind(Q),he=function(){throw new Error("Cursor not stopped")},Q.trans=y,Q.stop=Q.continue=Q.continuePrimaryKey=Q.advance=function(){throw new Error("Cursor not started")},Q.fail=ke(O),Q.next=function(){var se=this,Oe=1;return this.start(function(){return Oe--?se.continue():se.stop()}).then(function(){return se})},Q.start=function(se){function Oe(){if(Y.result)try{se()}catch(Ie){Q.fail(Ie)}else Q.done=!0,Q.start=function(){throw new Error("Cursor behind last entry")},Q.stop()}var Dt=new Promise(function(Ie,Tn){Ie=ke(Ie),Y.onerror=De(Tn),Q.fail=Tn,Q.stop=function(ur){Q.stop=Q.continue=Q.continuePrimaryKey=Q.advance=he,Ie(ur)}});return Y.onsuccess=ke(function(Ie){Y.onsuccess=Oe,Oe()}),Q.continue=D,Q.continuePrimaryKey=j,Q.advance=fe,Oe(),Dt},P(Q)):P(null)},O)})},count:function(x){var y=x.query,b=x.trans,$=y.index,B=y.range;return new Promise(function(w,P){var O=b.objectStore(C),O=$.isPrimaryKey?O:O.index($.name),q=a(B),q=q?O.count(q):O.count();q.onsuccess=ke(function(F){return w(F.target.result)}),q.onerror=De(P)})}}}s=m,l=kt((m=e).objectStoreNames);var s,m={schema:{name:m.name,tables:l.map(function(g){return s.objectStore(g)}).map(function(g){var v=g.keyPath,C=g.autoIncrement,y=ae(v),x={},y={name:g.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:y,keyPath:v,autoIncrement:C,unique:!0,extractKey:Ut(v)},indexes:kt(g.indexNames).map(function(b){return g.index(b)}).map(function(w){var P=w.name,$=w.unique,B=w.multiEntry,w=w.keyPath,P={name:P,compound:ae(w),keyPath:w,unique:$,multiEntry:B,extractKey:Ut(w)};return x[S(w)]=P}),getIndexByKeyPath:function(b){return x[S(b)]}};return x[":id"]=y.primaryKey,v!=null&&(x[S(v)]=y.primaryKey),y})},hasGetAll:0<l.length&&"getAll"in s.objectStore(l[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},l=m.schema,u=m.hasGetAll,m=l.tables.map(r),k={};return m.forEach(function(g){return k[g.name]=g}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(g){if(k[g])return k[g];throw new Error("Table '".concat(g,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Be(t),schema:l}}function je(e,t,n,a){return n=n.IDBKeyRange,t=N(t,n,a),{dbcore:e.dbcore.reduce(function(r,s){return s=s.create,U(U({},r),s(r))},t)}}function xe(e,t){var n=t.db,n=je(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var r=a.name;e.core.schema.tables.some(function(s){return s.name===r})&&(a.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=a.core)})}function fn(e,t,n,a){n.forEach(function(r){var s=a[r];t.forEach(function(l){var u=(function m(k,g){return Qa(k,g)||(k=Qe(k))&&m(k,g)})(l,r);(!u||"value"in u&&u.value===void 0)&&(l===e.Transaction.prototype||l instanceof e.Transaction?ut(l,r,{get:function(){return this.table(r)},set:function(m){tt(this,r,{value:m,writable:!0,configurable:!0,enumerable:!0})}}):l[r]=new e.Table(r,s))})})}function Gt(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function ha(e,t){return e._cfg.version-t._cfg.version}function we(e,t,n,a){var r=e._dbSchema,s=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=Ne("$meta",va("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),l=(s.create(n),s._completion.catch(a),s._reject.bind(s)),u=G.transless||G;Vt(function(){if(G.trans=s,G.transless=u,t!==0)return xe(e,n),k=t,((m=s).storeNames.includes("$meta")?m.table("$meta").get("version").then(function(g){return g??k}):V.resolve(k)).then(function($){var v=e,C=$,x=s,y=n,b=[],$=v._versions,B=v._dbSchema=Jn(0,v.idbdb,y);return($=$.filter(function(w){return w._cfg.version>=C})).length===0?V.resolve():($.forEach(function(w){b.push(function(){var P,O,q,F=B,A=w._cfg.dbschema,Y=(mt(v,F,y),mt(v,A,y),B=v._dbSchema=A,Un(F,A)),z=(Y.add.forEach(function(D){Gn(y,D[0],D[1].primKey,D[1].indexes)}),Y.change.forEach(function(D){if(D.recreate)throw new J.Upgrade("Not yet support for changing primary key");var j=y.objectStore(D.name);D.add.forEach(function(fe){return Wn(j,fe)}),D.change.forEach(function(fe){j.deleteIndex(fe.name),Wn(j,fe)}),D.del.forEach(function(fe){return j.deleteIndex(fe)})}),w._cfg.contentUpgrade);if(z&&w._cfg.version>C)return xe(v,y),x._memoizedTables={},P=It(A),Y.del.forEach(function(D){P[D]=F[D]}),Gt(v,[v.Transaction.prototype]),fn(v,[v.Transaction.prototype],pe(P),P),x.schema=P,(O=sa(z))&&cn(),A=V.follow(function(){var D;(q=z(x))&&O&&(D=yt.bind(null,null),q.then(D,D))}),q&&typeof q.then=="function"?V.resolve(q):A.then(function(){return q})}),b.push(function(P){var O,q,F=w._cfg.dbschema;O=F,q=P,[].slice.call(q.db.objectStoreNames).forEach(function(A){return O[A]==null&&q.db.deleteObjectStore(A)}),Gt(v,[v.Transaction.prototype]),fn(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),x.schema=v._dbSchema}),b.push(function(P){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===w._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(O){return O!=="$meta"})):P.objectStore("$meta").put(w._cfg.version,"version"))})}),(function w(){return b.length?V.resolve(b.shift()(x.idbtrans)).then(w):V.resolve()})().then(function(){pa(B,y)}))}).catch(l);var m,k;pe(r).forEach(function(g){Gn(n,g,r[g].primKey,r[g].indexes)}),xe(e,n),V.follow(function(){return e.on.populate.fire(s)}).catch(l)})}function zn(e,t){pa(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Jn(0,e.idbdb,t);mt(e,e._dbSchema,t);for(var a=0,r=Un(n,e._dbSchema).change;a<r.length;a++){var s=(l=>{if(l.change.length||l.recreate)return console.warn("Unable to patch indexes of table ".concat(l.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(l.name);l.add.forEach(function(m){bt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name,".").concat(m.src)),Wn(u,m)})})(r[a]);if(typeof s=="object")return s.value}}function Un(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var r=e[n],s=t[n];if(r){var l={name:n,def:s,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(s.primKey.keyPath||"")||r.primKey.auto!==s.primKey.auto)l.recreate=!0,a.change.push(l);else{var u=r.idxByName,m=s.idxByName,k=void 0;for(k in u)m[k]||l.del.push(k);for(k in m){var g=u[k],v=m[k];g?g.src!==v.src&&l.change.push(v):l.add.push(v)}(0<l.del.length||0<l.add.length||0<l.change.length)&&a.change.push(l)}}else a.add.push([n,s])}return a}function Gn(e,t,n,a){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(s){return Wn(r,s)})}function pa(e,t){pe(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(bt&&console.debug("Dexie: Creating missing table",n),Gn(t,n,e[n].primKey,e[n].indexes))})}function Wn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Jn(e,t,n){var a={};return Fn(t.objectStoreNames,0).forEach(function(r){for(var s=n.objectStore(r),l=me(Ee(k=s.keyPath),k||"",!0,!1,!!s.autoIncrement,k&&typeof k!="string",!0),u=[],m=0;m<s.indexNames.length;++m){var g=s.index(s.indexNames[m]),k=g.keyPath,g=me(g.name,k,!!g.unique,!!g.multiEntry,!1,k&&typeof k!="string",!1);u.push(g)}a[r]=Ne(r,l,u)}),a}function mt(e,t,n){for(var a=n.db.objectStoreNames,r=0;r<a.length;++r){var s=a[r],l=n.objectStore(s);e._hasGetAll="getAll"in l;for(var u=0;u<l.indexNames.length;++u){var m,k=l.indexNames[u],g=l.index(k).keyPath,g=typeof g=="string"?g:"["+Fn(g).join("+")+"]";t[s]&&(m=t[s].idxByName[g])&&(m.name=k,delete t[s].idxByName[g],t[s].idxByName[k]=m)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ne.WorkerGlobalScope&&ne instanceof ne.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function va(e){return e.split(",").map(function(t,n){var r=t.split(":"),a=(a=r[1])==null?void 0:a.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),s=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return me(r,s||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ae(s),n===0,a)})}Qt.prototype._createTableSchema=Ne,Qt.prototype._parseIndexSyntax=va,Qt.prototype._parseStoresSpec=function(e,t){var n=this;pe(e).forEach(function(a){if(e[a]!==null){var r=n._parseIndexSyntax(e[a]),s=r.shift();if(!s)throw new J.Schema("Invalid schema for table "+a+": "+e[a]);if(s.unique=!0,s.multi)throw new J.Schema("Primary key cannot be multiEntry*");r.forEach(function(l){if(l.auto)throw new J.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new J.Schema("Index must have a name and cannot be an empty string")}),s=n._createTableSchema(a,s,r),t[a]=s}})},Qt.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ce(this._cfg.storesSource,n):n,t._versions),a={},r={};return n.forEach(function(s){ce(a,s._cfg.storesSource),r=s._cfg.dbschema={},s._parseStoresSpec(a,r)}),t._dbSchema=r,Gt(t,[t._allTables,t,t.Transaction.prototype]),fn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],pe(r),r),t._storeNames=pe(r),this},Qt.prototype.upgrade=function(e){return this._cfg.contentUpgrade=bn(this._cfg.contentUpgrade||ve,e),this};var Ia=Qt;function Qt(){}function Hn(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Ft(Yn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Xn(e){return e&&typeof e.databases=="function"}function ma(e){return Vt(function(){return G.letThrough=!0,e()})}function ga(e){return!("from"in e)}var Xe=function(e,t){var n;if(!this)return n=new Xe,e&&"d"in e&&ce(n,e),n;ce(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Bn(e,t,n){var a=f(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(ga(e))return ce(e,{from:t,to:n,d:1});var a=e.l,r=e.r;if(f(n,e.from)<0)return a?Bn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},ba(e);if(0<f(t,e.to))return r?Bn(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},ba(e);f(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<f(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&_n(e,a),r&&t&&_n(e,r)}}function _n(e,t){ga(t)||(function n(a,r){var s=r.from,l=r.l,u=r.r;Bn(a,s,r.to),l&&n(a,l),u&&n(a,u)})(e,t)}function hn(e,t){var n=Qn(t),a=n.next();if(!a.done)for(var r=a.value,s=Qn(e),l=s.next(r.from),u=l.value;!a.done&&!l.done;){if(f(u.from,r.to)<=0&&0<=f(u.to,r.from))return!0;f(r.from,u.from)<0?r=(a=n.next(u.from)).value:u=(l=s.next(r.from)).value}return!1}function Qn(e){var t=ga(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&f(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||f(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function ba(e){var t,n,a,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=U({},e),a=e[r],e.from=a.from,e.to=a.to,e[r]=a[r],n[r]=a[t],(e[t]=n).d=Na(n)),e.d=Na(e)}function Na(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Zn(e,t){return pe(t).forEach(function(n){e[n]?_n(e[n],t[n]):e[n]=(function a(r){var s,l,u={};for(s in r)re(r,s)&&(l=r[s],u[s]=!l||typeof l!="object"||ye.has(l.constructor)?l:a(l));return u})(t[n])}),e}function nt(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&hn(t[n],e[n])})}et(Xe.prototype,((Re={add:function(e){return _n(this,e),this},addKey:function(e){return Bn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Bn(t,n,n)}),this},hasKey:function(e){var t=Qn(this).next(e).value;return t&&f(t.from,e)<=0&&0<=f(t.to,e)}})[Dn]=function(){return Qn(this)},Re));var Ot={},We={},ya=!1;function At(e){Zn(We,e),ya||(ya=!0,setTimeout(function(){ya=!1,Zt(We,!(We={}))},0))}function Zt(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,r=Object.values(Ot);a<r.length;a++)Ka(u=r[a],e,n,t);else for(var s in e){var l,u,s=/^idb\:\/\/(.*)\/(.*)\//.exec(s);s&&(l=s[1],s=s[2],u=Ot["idb://".concat(l,"/").concat(s)])&&Ka(u,e,n,t)}n.forEach(function(m){return m()})}function Ka(e,t,n,a){for(var r=[],s=0,l=Object.entries(e.queries.query);s<l.length;s++){for(var u=l[s],m=u[0],k=[],g=0,v=u[1];g<v.length;g++){var C=v[g];nt(t,C.obsSet)?C.subscribers.forEach(function($){return n.add($)}):a&&k.push(C)}a&&r.push([m,k])}if(a)for(var x=0,y=r;x<y.length;x++){var b=y[x],m=b[0],k=b[1];e.queries.query[m]=k}}function ir(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Me(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,r=Math.round(10*e.verno),s=!1;function l(){if(t.openCanceller!==a)throw new J.DatabaseClosed("db.open() was cancelled")}function u(){return new V(function(C,x){if(l(),!n)throw new J.MissingAPI;var y=e.name,b=t.autoSchema||!r?n.open(y):n.open(y,r);if(!b)throw new J.MissingAPI;b.onerror=De(x),b.onblocked=ke(e._fireOnBlocked),b.onupgradeneeded=ke(function($){var B;g=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=xt,g.abort(),b.result.close(),(B=n.deleteDatabase(y)).onsuccess=B.onerror=ke(function(){x(new J.NoSuchDatabase("Database ".concat(y," doesnt exist")))})):(g.onerror=De(x),B=$.oldVersion>Math.pow(2,62)?0:$.oldVersion,v=B<1,e.idbdb=b.result,s&&zn(e,g),we(e,B/10,g,x))},x),b.onsuccess=ke(function(){g=null;var $,B,w,P,O,q,F=e.idbdb=b.result,A=Fn(F.objectStoreNames);if(0<A.length)try{var Y=F.transaction((O=A).length===1?O[0]:O,"readonly");if(t.autoSchema)q=F,P=Y,(w=e).verno=q.version/10,P=w._dbSchema=Jn(0,q,P),w._storeNames=Fn(q.objectStoreNames,0),fn(w,[w._allTables],pe(P),P);else if(mt(e,e._dbSchema,Y),B=Y,((B=Un(Jn(0,($=e).idbdb,B),$._dbSchema)).add.length||B.change.some(function(z){return z.add.length||z.change.length}))&&!s)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),F.close(),r=F.version+1,s=!0,C(u());xe(e,Y)}catch{}dn.push(e),F.onversionchange=ke(function(z){t.vcFired=!0,e.on("versionchange").fire(z)}),F.onclose=ke(function(){e.close({disableAutoOpen:!1})}),v&&(A=e._deps,O=y,Xn(q=A.indexedDB)||O===Yn||Hn(q,A.IDBKeyRange).put({name:O}).catch(ve)),C()},x)}).catch(function(C){switch(C?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<r)return r=0,u()}return V.reject(C)})}var m,k=t.dbReadyResolve,g=null,v=!1;return V.race([a,(typeof navigator>"u"?V.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(C){function x(){return indexedDB.databases().finally(C)}m=setInterval(x,100),x()}).finally(function(){return clearInterval(m)}):Promise.resolve()).then(u)]).then(function(){return l(),t.onReadyBeingFired=[],V.resolve(ma(function(){return e.on.ready.fire(e.vip)})).then(function C(){var x;if(0<t.onReadyBeingFired.length)return x=t.onReadyBeingFired.reduce(bn,ve),t.onReadyBeingFired=[],V.resolve(ma(function(){return x(e.vip)})).then(C)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(C){t.dbOpenError=C;try{g&&g.abort()}catch{}return a===t.openCanceller&&e._close(),Me(C)}).finally(function(){t.openComplete=!0,k()}).then(function(){var C;return v&&(C={},e.tables.forEach(function(x){x.schema.indexes.forEach(function(y){y.name&&(C["idb://".concat(e.name,"/").concat(x.name,"/").concat(y.name)]=new Xe(-1/0,[[[]]]))}),C["idb://".concat(e.name,"/").concat(x.name,"/")]=C["idb://".concat(e.name,"/").concat(x.name,"/:dels")]=new Xe(-1/0,[[[]]])}),Le(Ge).fire(C),Zt(C,!0)),e})}function Sn(e){function t(s){return e.next(s)}var n=r(t),a=r(function(s){return e.throw(s)});function r(s){return function(u){var u=s(u),m=u.value;return u.done?m:m&&typeof m.then=="function"?m.then(n,a):ae(m)?Promise.all(m).then(n,a):n(m)}}return r(t)()}function En(e,t,n){for(var a=ae(e)?e.slice():[e],r=0;r<n;++r)a.push(t);return a}var qa={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return U(U({},e),{table:function(a){var n=e.table(a),a=n.schema,r={},s=[];function l(C,x,y){var w=S(C),b=r[w]=r[w]||[],$=C==null?0:typeof C=="string"?1:C.length,B=0<x,w=U(U({},y),{name:B?"".concat(w,"(virtual-from:").concat(y.name,")"):y.name,lowLevelIndex:y,isVirtual:B,keyTail:x,keyLength:$,extractKey:Ut(C),unique:!B&&y.unique});return b.push(w),w.isPrimaryKey||s.push(w),1<$&&l($===2?C[0]:C.slice(0,$-1),x+1,y),b.sort(function(P,O){return P.keyTail-O.keyTail}),w}var u=l(a.primaryKey.keyPath,0,a.primaryKey);r[":id"]=[u];for(var m=0,k=a.indexes;m<k.length;m++){var g=k[m];l(g.keyPath,0,g)}function v(C){var x,y=C.query.index;return y.isVirtual?U(U({},C),{query:{index:y.lowLevelIndex,range:(x=C.query.range,y=y.keyTail,{type:x.type===1?2:x.type,lower:En(x.lower,x.lowerOpen?e.MAX_KEY:e.MIN_KEY,y),lowerOpen:!0,upper:En(x.upper,x.upperOpen?e.MIN_KEY:e.MAX_KEY,y),upperOpen:!0})}}):C}return U(U({},n),{schema:U(U({},a),{primaryKey:u,indexes:s,getIndexByKeyPath:function(C){return(C=r[S(C)])&&C[0]}}),count:function(C){return n.count(v(C))},query:function(C){return n.query(v(C))},openCursor:function(C){var x=C.query.index,y=x.keyTail,b=x.keyLength;return x.isVirtual?n.openCursor(v(C)).then(function(B){return B&&$(B)}):n.openCursor(C);function $(B){return Object.create(B,{continue:{value:function(w){w!=null?B.continue(En(w,C.reverse?e.MAX_KEY:e.MIN_KEY,y)):C.unique?B.continue(B.key.slice(0,b).concat(C.reverse?e.MIN_KEY:e.MAX_KEY,y)):B.continue()}},continuePrimaryKey:{value:function(w,P){B.continuePrimaryKey(En(w,e.MAX_KEY,y),P)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var w=B.key;return b===1?w[0]:w.slice(0,b)}},value:{get:function(){return B.value}}})}}})}})}};function ea(e,t,n,a){return n=n||{},a=a||"",pe(e).forEach(function(r){var s,l,u;re(t,r)?(s=e[r],l=t[r],typeof s=="object"&&typeof l=="object"&&s&&l?(u=ra(s))!==ra(l)?n[a+r]=t[r]:u==="Object"?ea(s,l,n,a+r+"."):s!==l&&(n[a+r]=t[r]):s!==l&&(n[a+r]=t[r])):n[a+r]=void 0}),pe(t).forEach(function(r){re(e,r)||(n[a+r]=t[r])}),n}function Ca(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var lt={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return U(U({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return U(U({},n),{mutate:function(r){var s=G.trans,l=s.table(t).hook,u=l.deleting,m=l.creating,k=l.updating;switch(r.type){case"add":if(m.fire===ve)break;return s._promise("readwrite",function(){return g(r)},!0);case"put":if(m.fire===ve&&k.fire===ve)break;return s._promise("readwrite",function(){return g(r)},!0);case"delete":if(u.fire===ve)break;return s._promise("readwrite",function(){return g(r)},!0);case"deleteRange":if(u.fire===ve)break;return s._promise("readwrite",function(){return(function v(C,x,y){return n.query({trans:C,values:!1,query:{index:a,range:x},limit:y}).then(function(b){var $=b.result;return g({type:"delete",keys:$,trans:C}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):$.length<y?{failures:[],numFailures:0,lastResult:void 0}:v(C,U(U({},x),{lower:$[$.length-1],lowerOpen:!0}),y)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function g(v){var C,x,y,b=G.trans,$=v.keys||Ca(a,v);if($)return(v=v.type==="add"||v.type==="put"?U(U({},v),{keys:$}):U({},v)).type!=="delete"&&(v.values=ue([],v.values)),v.keys&&(v.keys=ue([],v.keys)),C=n,y=$,((x=v).type==="add"?Promise.resolve([]):C.getMany({trans:x.trans,keys:y,cache:"immutable"})).then(function(B){var w=$.map(function(P,O){var q,F,A,Y=B[O],z={onerror:null,onsuccess:null};return v.type==="delete"?u.fire.call(z,P,Y,b):v.type==="add"||Y===void 0?(q=m.fire.call(z,P,v.values[O],b),P==null&&q!=null&&(v.keys[O]=P=q,a.outbound||rt(v.values[O],a.keyPath,P))):(q=ea(Y,v.values[O]),(F=k.fire.call(z,q,P,Y,b))&&(A=v.values[O],Object.keys(F).forEach(function(D){re(A,D)?A[D]=F[D]:rt(A,D,F[D])}))),z});return n.mutate(v).then(function(P){for(var O=P.failures,q=P.results,F=P.numFailures,P=P.lastResult,A=0;A<$.length;++A){var Y=(q||$)[A],z=w[A];Y==null?z.onerror&&z.onerror(O[A]):z.onsuccess&&z.onsuccess(v.type==="put"&&B[A]?v.values[A]:Y)}return{failures:O,results:q,numFailures:F,lastResult:P}}).catch(function(P){return w.forEach(function(O){return O.onerror&&O.onerror(P)}),Promise.reject(P)})});throw new Error("Keys missing")}}})}})}};function La(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],r=0,s=0;r<t.keys.length&&s<e.length;++r)f(t.keys[r],e[s])===0&&(a.push(n?Jt(t.values[r]):t.values[r]),++s);return a.length===e.length?a:null}catch{return null}}var ja={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return U(U({},n),{getMany:function(a){var r;return a.cache?(r=La(a.keys,a.trans._cache,a.cache==="clone"))?V.resolve(r):n.getMany(a).then(function(s){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?Jt(s):s},s}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ra(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Va(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var or={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Xe(e.MIN_KEY,e.MAX_KEY);return U(U({},e),{transaction:function(a,r,s){if(G.subscr&&r!=="readonly")throw new J.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));return e.transaction(a,r,s)},table:function(a){function r($){var b,$=$.query;return[b=$.index,new Xe((b=($=$.range).lower)!=null?b:e.MIN_KEY,(b=$.upper)!=null?b:e.MAX_KEY)]}var s=e.table(a),l=s.schema,u=l.primaryKey,m=l.indexes,k=u.extractKey,g=u.outbound,v=u.autoIncrement&&m.filter(function(y){return y.compound&&y.keyPath.includes(u.keyPath)}),C=U(U({},s),{mutate:function(y){function b(j){return j="idb://".concat(t,"/").concat(a,"/").concat(j),O[j]||(O[j]=new Xe)}var $,B,w,P=y.trans,O=y.mutatedParts||(y.mutatedParts={}),q=b(""),F=b(":dels"),A=y.type,z=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[Ca(u,y).filter(function(j){return j}),y.values]:[],Y=z[0],z=z[1],D=y.trans._cache;return ae(Y)?(q.addKeys(Y),(A=A==="delete"||Y.length===z.length?La(Y,D):null)||F.addKeys(Y),(A||z)&&($=b,B=A,w=z,l.indexes.forEach(function(j){var fe=$(j.name||"");function he(se){return se!=null?j.extractKey(se):null}function Q(se){j.multiEntry&&ae(se)?se.forEach(function(Oe){return fe.addKey(Oe)}):fe.addKey(se)}(B||w).forEach(function(se,Ie){var Dt=B&&he(B[Ie]),Ie=w&&he(w[Ie]);f(Dt,Ie)!==0&&(Dt!=null&&Q(Dt),Ie!=null)&&Q(Ie)})}))):Y?(z={from:(D=Y.lower)!=null?D:e.MIN_KEY,to:(A=Y.upper)!=null?A:e.MAX_KEY},F.add(z),q.add(z)):(q.add(n),F.add(n),l.indexes.forEach(function(j){return b(j.name).add(n)})),s.mutate(y).then(function(j){return!Y||y.type!=="add"&&y.type!=="put"||(q.addKeys(j.results),v&&v.forEach(function(fe){for(var he=y.values.map(function(Dt){return fe.extractKey(Dt)}),Q=fe.keyPath.findIndex(function(Dt){return Dt===u.keyPath}),se=0,Oe=j.results.length;se<Oe;++se)he[se][Q]=j.results[se];b(fe.name).addKeys(he)})),P.mutatedParts=Zn(P.mutatedParts||{},O),j})}}),x={get:function(y){return[u,new Xe(y.key)]},getMany:function(y){return[u,new Xe().addKeys(y.keys)]},count:r,query:r,openCursor:r};return pe(x).forEach(function(y){C[y]=function(b){var $=G.subscr,B=!!$,w=Ra(G,s)&&Va(y,b)?b.obsSet={}:$;if(B){var P,$=function(z){return z="idb://".concat(t,"/").concat(a,"/").concat(z),w[z]||(w[z]=new Xe)},O=$(""),q=$(":dels"),B=x[y](b),F=B[0],B=B[1];if((y==="query"&&F.isPrimaryKey&&!b.values?q:$(F.name||"")).add(B),!F.isPrimaryKey){if(y!=="count")return P=y==="query"&&g&&b.values&&s.query(U(U({},b),{values:!1})),s[y].apply(this,arguments).then(function(z){if(y==="query"){if(g&&b.values)return P.then(function(he){return he=he.result,O.addKeys(he),z});var D=b.values?z.result.map(k):z.result;(b.values?O:q).addKeys(D)}else{var j,fe;if(y==="openCursor")return fe=b.values,(j=z)&&Object.create(j,{key:{get:function(){return q.addKey(j.primaryKey),j.key}},primaryKey:{get:function(){var he=j.primaryKey;return q.addKey(he),he}},value:{get:function(){return fe&&O.addKey(j.primaryKey),j.value}}})}return z});q.add(n)}}return s[y].apply(this,arguments)}}),C}})}};function Wt(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=U({},t),ae(a.keys)&&(a.keys=a.keys.filter(function(r,s){return!(s in n.failures)})),"values"in a&&ae(a.values)&&(a.values=a.values.filter(function(r,s){return!(s in n.failures)})),a)}function qt(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<f(n,a.lower):0<=f(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?f(n,a.upper)<0:f(n,a.upper)<=0));var n,a}function Ya(e,t,n,a,r,s){var l,u,m,k,g,v;return!n||n.length===0||(l=t.query.index,u=l.multiEntry,m=t.query.range,k=a.schema.primaryKey.extractKey,g=l.extractKey,v=(l.lowLevelIndex||l).extractKey,(a=n.reduce(function(C,x){var y=C,b=[];if(x.type==="add"||x.type==="put")for(var $=new Xe,B=x.values.length-1;0<=B;--B){var w,P=x.values[B],O=k(P);!$.hasKey(O)&&(w=g(P),u&&ae(w)?w.some(function(z){return qt(z,m)}):qt(w,m))&&($.addKey(O),b.push(P))}switch(x.type){case"add":var q=new Xe().addKeys(t.values?C.map(function(D){return k(D)}):C),y=C.concat(t.values?b.filter(function(D){return D=k(D),!q.hasKey(D)&&(q.addKey(D),!0)}):b.map(function(D){return k(D)}).filter(function(D){return!q.hasKey(D)&&(q.addKey(D),!0)}));break;case"put":var F=new Xe().addKeys(x.values.map(function(D){return k(D)}));y=C.filter(function(D){return!F.hasKey(t.values?k(D):D)}).concat(t.values?b:b.map(function(D){return k(D)}));break;case"delete":var A=new Xe().addKeys(x.keys);y=C.filter(function(D){return!A.hasKey(t.values?k(D):D)});break;case"deleteRange":var Y=x.range;y=C.filter(function(D){return!qt(k(D),Y)})}return y},e))===e)?e:(a.sort(function(C,x){return f(v(C),v(x))||f(k(C),k(x))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(r.dirty=!0)),s?Object.freeze(a):a)}function za(e,t){return f(e.lower,t.lower)===0&&f(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function xa(e,t){return((n,a,r,s)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=f(n,a))===0){if(r&&s)return 0;if(r)return 1;if(s)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,r,s)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=f(n,a))===0){if(r&&s)return 0;if(r)return-1;if(s)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Ua(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var r,s;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,s=t,setTimeout(function(){r.subscribers.size===0&&jt(s,r)},3e3))})}var Ga={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return U(U({},e),{transaction:function(n,a,r){var s,l,u=e.transaction(n,a,r);return a==="readwrite"&&(r=(s=new AbortController).signal,u.addEventListener("abort",(l=function(m){return function(){if(s.abort(),a==="readwrite"){for(var k=new Set,g=0,v=n;g<v.length;g++){var C=v[g],x=Ot["idb://".concat(t,"/").concat(C)];if(x){var y=e.table(C),b=x.optimisticOps.filter(function(j){return j.trans===u});if(u._explicit&&m&&u.mutatedParts)for(var $=0,B=Object.values(x.queries.query);$<B.length;$++)for(var w=0,P=(F=B[$]).slice();w<P.length;w++)nt((A=P[w]).obsSet,u.mutatedParts)&&(jt(F,A),A.subscribers.forEach(function(j){return k.add(j)}));else if(0<b.length){x.optimisticOps=x.optimisticOps.filter(function(j){return j.trans!==u});for(var O=0,q=Object.values(x.queries.query);O<q.length;O++)for(var F,A,Y,z=0,D=(F=q[O]).slice();z<D.length;z++)(A=D[z]).res!=null&&u.mutatedParts&&(m&&!A.dirty?(Y=Object.isFrozen(A.res),Y=Ya(A.res,A.req,b,y,A,Y),A.dirty?(jt(F,A),A.subscribers.forEach(function(j){return k.add(j)})):Y!==A.res&&(A.res=Y,A.promise=V.resolve({result:Y}))):(A.dirty&&jt(F,A),A.subscribers.forEach(function(j){return k.add(j)})))}}}k.forEach(function(j){return j()})}}})(!1),{signal:r}),u.addEventListener("error",l(!1),{signal:r}),u.addEventListener("complete",l(!0),{signal:r})),u},table:function(n){var a=e.table(n),r=a.schema.primaryKey;return U(U({},a),{mutate:function(s){var l,u=G.trans;return!r.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(l=Ot["idb://".concat(t,"/").concat(n)])?(u=a.mutate(s),s.type!=="add"&&s.type!=="put"||!(50<=s.values.length||Ca(r,s).some(function(m){return m==null}))?(l.optimisticOps.push(s),s.mutatedParts&&At(s.mutatedParts),u.then(function(m){0<m.numFailures&&(jt(l.optimisticOps,s),(m=Wt(0,s,m))&&l.optimisticOps.push(m),s.mutatedParts)&&At(s.mutatedParts)}),u.catch(function(){jt(l.optimisticOps,s),s.mutatedParts&&At(s.mutatedParts)})):u.then(function(m){var k=Wt(0,U(U({},s),{values:s.values.map(function(g,v){var C;return m.failures[v]?g:(rt(C=(C=r.keyPath)!=null&&C.includes(".")?Jt(g):U({},g),r.keyPath,m.results[v]),C)})}),m);l.optimisticOps.push(k),queueMicrotask(function(){return s.mutatedParts&&At(s.mutatedParts)})}),u):a.mutate(s)},query:function(s){var l,u,m,k,g,v,C;return Ra(G,a)&&Va("query",s)?(l=((m=G.trans)==null?void 0:m.db._options.cache)==="immutable",u=(m=G).requery,m=m.signal,v=((x,y,b,$)=>{var B=Ot["idb://".concat(x,"/").concat(y)];if(!B)return[];if(!(x=B.queries[b]))return[null,!1,B,null];var w=x[($.query?$.query.index.name:null)||""];if(!w)return[null,!1,B,null];switch(b){case"query":var P=w.find(function(O){return O.req.limit===$.limit&&O.req.values===$.values&&za(O.req.query.range,$.query.range)});return P?[P,!0,B,w]:[w.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=$.limit&&(!$.values||O.req.values)&&xa(O.req.query.range,$.query.range)}),!1,B,w];case"count":return P=w.find(function(O){return za(O.req.query.range,$.query.range)}),[P,!!P,B,w]}})(t,n,"query",s),C=v[0],k=v[2],g=v[3],C&&v[1]?C.obsSet=s.obsSet:(v=a.query(s).then(function(x){var y=x.result;if(C&&(C.res=y),l){for(var b=0,$=y.length;b<$;++b)Object.freeze(y[b]);Object.freeze(y)}else x.result=Jt(y);return x}).catch(function(x){return g&&C&&jt(g,C),Promise.reject(x)}),C={obsSet:s.obsSet,promise:v,subscribers:new Set,type:"query",req:s,dirty:!1},g?g.push(C):(g=[C],(k=k||(Ot["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[s.query.index.name||""]=g)),Ua(C,g,u,m),C.promise.then(function(x){return{result:Ya(x.result,s,k?.optimisticOps,a,C,l)}})):a.query(s)}})}})}};function Pn(e,t){return new Proxy(e,{get:function(n,a,r){return a==="db"?t:Reflect.get(n,a,r)}})}be.prototype.version=function(e){if(isNaN(e)||e<.1)throw new J.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new J.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(ha),n.stores({}),this._state.autoSchema=!1),n},be.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||G.letThrough||this._vip)?e():new V(function(n,a){if(t._state.openComplete)return a(new J.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new J.DatabaseClosed);t.open().catch(ve)}t._state.dbReadyPromise.then(n,a)}).then(e)},be.prototype.use=function(r){var t=r.stack,n=r.create,a=r.level,r=r.name,s=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return s.push({stack:t,create:n,level:a??10,name:r}),s.sort(function(l,u){return l.level-u.level}),this},be.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return a?r.create!==a:!!n&&r.name!==n})),this},be.prototype.open=function(){var e=this;return Xt(Nt,function(){return ir(e)})},be.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=dn.indexOf(this);if(0<=t&&dn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new V(function(n){e.dbReadyResolve=n}),e.openCanceller=new V(function(n,a){e.cancelOpen=a}))},be.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new J.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new J.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},be.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new V(function(r,s){function l(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=ke(function(){var m,k,g;m=t._deps,k=t.name,Xn(g=m.indexedDB)||k===Yn||Hn(g,m.IDBKeyRange).delete(k).catch(ve),r()}),u.onerror=De(s),u.onblocked=t._fireOnBlocked}if(n)throw new J.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(l):l()})},be.prototype.backendDB=function(){return this.idbdb},be.prototype.isOpen=function(){return this.idbdb!==null},be.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},be.prototype.hasFailed=function(){return this._state.dbOpenError!==null},be.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(be.prototype,"tables",{get:function(){var e=this;return pe(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),be.prototype.transaction=function(){var e=(function(t,n,a){var r=arguments.length;if(r<2)throw new J.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];return a=s.pop(),[t,ct(s),a]}).apply(this,arguments);return this._transaction.apply(this,e)},be.prototype._transaction=function(e,t,n){var a,r,s=this,l=G.trans,u=(l&&l.db===this&&e.indexOf("!")===-1||(l=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(k){if(k=k instanceof s.Table?k.name:k,typeof k!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return k}),e=="r"||e===te)a=te;else{if(e!="rw"&&e!=fa)throw new J.InvalidArgument("Invalid transaction mode: "+e);a=fa}if(l){if(l.mode===te&&a===fa){if(!u)throw new J.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");l=null}l&&r.forEach(function(k){if(l&&l.storeNames.indexOf(k)===-1){if(!u)throw new J.SubTransaction("Table "+k+" not included in parent transaction.");l=null}}),u&&l&&!l.active&&(l=null)}}catch(k){return l?l._promise(null,function(g,v){v(k)}):Me(k)}var m=(function k(g,v,C,x,y){return V.resolve().then(function(){var w=G.transless||G,b=g._createTransaction(v,C,g._dbSchema,x),w=(b.explicit=!0,{trans:b,transless:w});if(x)b.idbtrans=x.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,g._state.PR1398_maxLoop=3}catch(P){return P.name===ia.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return k(g,v,C,null,y)})):Me(P)}var $,B=sa(y),w=(B&&cn(),V.follow(function(){var P;($=y.call(b,b))&&(B?(P=yt.bind(null,null),$.then(P,P)):typeof $.next=="function"&&typeof $.throw=="function"&&($=Sn($)))},w));return($&&typeof $.then=="function"?V.resolve($).then(function(P){return b.active?P:Me(new J.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):w.then(function(){return $})).then(function(P){return x&&b._resolve(),b._completion.then(function(){return P})}).catch(function(P){return b._reject(P),Me(P)})})}).bind(null,this,a,r,l,n);return l?l._promise(a,m,"lock"):G.trans?Xt(G.transless,function(){return s._whenReady(m)}):this._whenReady(m)},be.prototype.table=function(e){if(re(this._allTables,e))return this._allTables[e];throw new J.InvalidTable("Table ".concat(e," does not exist"))};var Ft=be;function be(e,t){var n,a,r,s,l,u=this,m=(this._middlewares={},this.verno=0,be.dependencies),m=(this._options=t=U({addons:be.addons,autoOpen:!0,indexedDB:m.indexedDB,IDBKeyRange:m.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),k=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ve,dbReadyPromise:null,cancelOpen:ve,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),g=(k.dbReadyPromise=new V(function(v){k.dbReadyResolve=v}),k.openCanceller=new V(function(v,C){k.cancelOpen=C}),this._state=k,this.name=e,this.on=$e(this,"populate","blocked","versionchange","close",{ready:[bn,ve]}),this.once=function(v,C){var x=function(){for(var y=[],b=0;b<arguments.length;b++)y[b]=arguments[b];u.on(v).unsubscribe(x),C.apply(u,y)};return u.on(v,x)},this.on.ready.subscribe=ka(this.on.ready.subscribe,function(v){return function(C,x){be.vip(function(){var y,b=u._state;b.openComplete?(b.dbOpenError||V.resolve().then(C),x&&v(C)):b.onReadyBeingFired?(b.onReadyBeingFired.push(C),x&&v(C)):(v(C),y=u,x||v(function $(){y.on.ready.unsubscribe(C),y.on.ready.unsubscribe($)}))})}}),this.Collection=(n=this,Ye(L.prototype,function($,b){this.db=n;var x=c,y=null;if(b)try{x=b()}catch(w){y=w}var b=$._ctx,$=b.table,B=$.hook.reading.fire;this._ctx={table:$,index:b.index,isPrimKey:!b.index||$.schema.primKey.keyPath&&b.index===$.schema.primKey.name,range:x,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:y,or:b.or,valueMapper:B!==Rt?B:null}})),this.Table=(a=this,Ye(Z.prototype,function(v,C,x){this.db=a,this._tx=x,this.name=v,this.schema=C,this.hook=a._allTables[v]?a._allTables[v].hook:$e(null,{creating:[In,ve],reading:[Ke,Rt],updating:[tr,ve],deleting:[Nn,ve]})})),this.Transaction=(r=this,Ye(kn.prototype,function(v,C,x,y,b){var $=this;v!=="readonly"&&C.forEach(function(B){B=(B=x[B])==null?void 0:B.yProps,B&&(C=C.concat(B.map(function(w){return w.updatesTable})))}),this.db=r,this.mode=v,this.storeNames=C,this.schema=x,this.chromeTransactionDurability=y,this.idbtrans=null,this.on=$e(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new V(function(B,w){$._resolve=B,$._reject=w}),this._completion.then(function(){$.active=!1,$.on.complete.fire()},function(B){var w=$.active;return $.active=!1,$.on.error.fire(B),$.parent?$.parent._reject(B):w&&$.idbtrans&&$.idbtrans.abort(),Me(B)})})),this.Version=(s=this,Ye(Ia.prototype,function(v){this.db=s,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(l=this,Ye(Ue.prototype,function(v,C,x){if(this.db=l,this._ctx={table:v,index:C===":id"?null:C,or:x},this._cmp=this._ascending=f,this._descending=function(y,b){return f(b,y)},this._max=function(y,b){return 0<f(y,b)?y:b},this._min=function(y,b){return f(y,b)<0?y:b},this._IDBKeyRange=l._deps.IDBKeyRange,!this._IDBKeyRange)throw new J.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Be(t.IDBKeyRange),this._createTransaction=function(v,C,x,y){return new u.Transaction(v,C,x,u._options.chromeTransactionDurability,y)},this._fireOnBlocked=function(v){u.on("blocked").fire(v),dn.filter(function(C){return C.name===u.name&&C!==u&&!C._state.vcFired}).map(function(C){return C.on("versionchange").fire(v)})},this.use(ja),this.use(Ga),this.use(or),this.use(qa),this.use(lt),new Proxy(this,{get:function(v,C,x){var y;return C==="_vip"||(C==="table"?function(b){return Pn(u.table(b),g)}:(y=Reflect.get(v,C,x))instanceof Z?Pn(y,g):C==="tables"?y.map(function(b){return Pn(b,g)}):C==="_createTransaction"?function(){return Pn(y.apply(this,arguments),g)}:y)}}));this.vip=g,m.forEach(function(v){return v(u)})}var Mn,pn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",lr=(wa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},wa.prototype[pn]=function(){return this},wa);function wa(e){this._subscribe=e}try{Mn={indexedDB:ne.indexedDB||ne.mozIndexedDB||ne.webkitIndexedDB||ne.msIndexedDB,IDBKeyRange:ne.IDBKeyRange||ne.webkitIDBKeyRange}}catch{Mn={indexedDB:null,IDBKeyRange:null}}function Wa(e){var t,n=!1,a=new lr(function(r){var s=sa(e),l,u=!1,m={},k={},g={get closed(){return u},unsubscribe:function(){u||(u=!0,l&&l.abort(),v&&Le.storagemutated.unsubscribe(x))}},v=(r.start&&r.start(g),!1),C=function(){return Vn(y)},x=function(b){Zn(m,b),nt(k,m)&&C()},y=function(){var b,$,B;!u&&Mn.indexedDB&&(m={},b={},l&&l.abort(),l=new AbortController,B=(w=>{var P=ln();try{s&&cn();var O=Vt(e,w);return O=s?O.finally(yt):O}finally{P&&un()}})($={subscr:b,signal:l.signal,requery:C,querier:e,trans:null}),Promise.resolve(B).then(function(w){n=!0,t=w,u||$.signal.aborted||(m={},(P=>{for(var O in P)if(re(P,O))return;return 1})(k=b)||v||(Le(Ge,x),v=!0),Vn(function(){return!u&&r.next&&r.next(w)}))},function(w){n=!1,["DatabaseClosedError","AbortError"].includes(w?.name)||u||Vn(function(){u||r.error&&r.error(w)})}))};return setTimeout(C,0),g});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var en=Ft;function ta(e){var t=i;try{i=!0,Le.storagemutated.fire(e),Zt(e,!0)}finally{i=t}}et(en,U(U({},Et),{delete:function(e){return new en(e,{addons:[]}).delete()},exists:function(e){return new en(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=en.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(Xn(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(r){return r.name}).filter(function(r){return r!==Yn})}):Hn(n,t).toCollection().primaryKeys()).then(e)}catch{return Me(new J.MissingAPI)}var t,n},defineClass:function(){return function(e){ce(this,e)}},ignoreTransaction:function(e){return G.trans?Xt(G.transless,e):e()},vip:ma,async:function(e){return function(){try{var t=Sn(e.apply(this,arguments));return t&&typeof t.then=="function"?t:V.resolve(t)}catch(n){return Me(n)}}},spawn:function(e,t,n){try{var a=Sn(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:V.resolve(a)}catch(r){return Me(r)}},currentTransaction:{get:function(){return G.trans||null}},waitFor:function(e,t){return e=V.resolve(typeof e=="function"?en.ignoreTransaction(e):e).timeout(t||6e4),G.trans?G.trans.waitFor(e):e},Promise:V,debug:{get:function(){return bt},set:function(e){Ea(e)}},derive:Bt,extend:ce,props:et,override:ka,Events:$e,on:Le,liveQuery:Wa,extendObservabilitySet:Zn,getByKeyPath:_t,setByKeyPath:rt,delByKeyPath:function(e,t){typeof t=="string"?rt(e,t,void 0):"length"in t&&[].map.call(t,function(n){rt(e,n,void 0)})},shallowClone:It,deepClone:Jt,getObjectDiff:ea,cmp:f,asap:$a,minKey:-1/0,addons:[],connections:dn,errnames:ia,dependencies:Mn,cache:Ot,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),en.maxKey=Be(en.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Le(Ge,function(e){i||(e=new CustomEvent(vt,{detail:e}),i=!0,dispatchEvent(e),i=!1)}),addEventListener(vt,function(e){e=e.detail,i||ta(e)}));var vn,i=!1,M=function(){};return typeof BroadcastChannel<"u"&&((M=function(){(vn=new BroadcastChannel(vt)).onmessage=function(e){return e.data&&ta(e.data)}})(),typeof vn.unref=="function"&&vn.unref(),Le(Ge,function(e){i||vn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Ft.disableBfCache&&e.persisted){bt&&console.debug("Dexie: handling persisted pagehide"),vn?.close();for(var t=0,n=dn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Ft.disableBfCache&&e.persisted&&(bt&&console.debug("Dexie: handling persisted pageshow"),M(),ta({all:new Xe(-1/0,[[]])}))})),V.rejectionMapper=function(e,t){return!e||e instanceof an||e instanceof TypeError||e instanceof SyntaxError||!e.name||!gn[e.name]?e:(t=new gn[e.name](t||e.message,e),"stack"in e&&ut(t,"stack",{get:function(){return this.inner.stack}}),t)},Ea(bt),U(Ft,Object.freeze({__proto__:null,Dexie:Ft,Entity:d,PropModification:K,RangeSet:Xe,add:function(e){return new K({add:e})},cmp:f,default:Ft,liveQuery:Wa,mergeRanges:_n,rangesOverlap:hn,remove:function(e){return new K({remove:e})},replacePrefix:function(e,t){return new K({replacePrefix:[e,t]})}}),{default:Ft}),Ft})})(Ja)),Ja.exports}var Or=Tr();const cr=Pr(Or),Cr=Symbol.for("Dexie"),Ha=globalThis[Cr]||(globalThis[Cr]=cr);if(cr.semVer!==Ha.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${cr.semVer} and ${Ha.semVer}`);const{liveQuery:Yr,mergeRanges:zr,rangesOverlap:Ur,RangeSet:Gr,cmp:Wr,Entity:Jr,PropModification:Hr,replacePrefix:Xr,add:Qr,remove:Zr,DexieYProvider:es}=Ha,at=new Ha("haushaltsbuch-db");at.version(1).stores({years:"year",fixedTemplateState:"id"});at.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const na="singleton";function Xa(){return new Date().toISOString()}async function An(){return at.years.orderBy("year").toArray()}async function Ar(E){return at.years.get(E)}async function On(E){await at.years.put(E)}async function dr(){const E=await at.fixedTemplateState.get(na);if(!E){const h={id:na,templates:[],version:Xa(),updatedAt:new Date().toISOString()};return await at.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:E.templates,version:E.version}}async function fr(E){const h=Xa();return await at.fixedTemplateState.put({id:na,templates:E,version:h,updatedAt:new Date().toISOString()}),h}async function hr(){const E=await at.annualVariableFixedTemplateState.get(na);if(!E){const h={id:na,templates:[],version:Xa(),updatedAt:new Date().toISOString()};return await at.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:E.templates,version:E.version}}async function pr(E){const h=Xa();return await at.annualVariableFixedTemplateState.put({id:na,templates:E,version:h,updatedAt:new Date().toISOString()}),h}async function Fr(){const E=await An(),[h,Se]=await Promise.all([dr(),hr()]);return{exportedAt:new Date().toISOString(),years:E,fixedTemplates:h.templates,annualVariableFixedTemplates:Se.templates}}async function Dr(E){await at.transaction("rw",[at.years,at.fixedTemplateState,at.annualVariableFixedTemplateState],async()=>{await at.years.clear(),await at.years.bulkPut(E.years),await fr(E.fixedTemplates),await pr(E.annualVariableFixedTemplates??[])})}function Pe(E){const h=E.replace(",",".").trim();if(!h)return 0;const Se=Number.parseFloat(h);return Number.isNaN(Se)?0:Math.round(Se*100)}const Ir=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function _(E){return Ir.format(E/100)}function gt(E){return(E/100).toFixed(2)}function _e(E){return new Date(2026,E-1,1).toLocaleDateString("de-DE",{month:"long"})}const kr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function xr(E){return kr.includes(E)}function Nr(E){switch(E){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}function Kr(E){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Se="habu-theme",U="habu-backup-dirty",ue="habu-unexported-change-log",ne="habu-last-backup-filename",pe="habu-recurring-budget-defaults";let ae=null,ce=null,Qe=null,Ze=!1,re=!1;const et=new WeakMap;function tt(){const o=E.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const c=getComputedStyle(document.documentElement),p=c.getPropertyValue("--text-main").trim(),d=c.getPropertyValue("--text-muted").trim(),f=c.getPropertyValue("--table-stripe").trim(),T=c.getPropertyValue("--table-border").trim(),I=c.getPropertyValue("--budget-under").trim(),R=c.getPropertyValue("--danger-2").trim(),K=96,H=250,W=Z=>1-Math.pow(1-Math.max(0,Math.min(1,Z)),3);o.forEach(Z=>{Z.dataset.hoverBound!=="1"&&(Z.dataset.hoverBound="1",Z.addEventListener("mouseenter",()=>{Z.dataset.hovering="1",tt()}),Z.addEventListener("mouseleave",()=>{delete Z.dataset.hovering,delete Z.dataset.hoverX,tt()}),Z.addEventListener("mousemove",le=>{const me=Z.getBoundingClientRect(),Ee=Math.round(le.clientX-me.left);Z.dataset.hoverX=String(Ee),tt()}));const X=Number.parseInt(Z.dataset.budgetCents??"0",10),$e=Number.parseInt(Z.dataset.actualCents??"0",10),Ye=Z.dataset.label??"Kategorie",Te=Z.dataset.hovering==="1",de=`${Ye}|${X}|${$e}`,ft=Z.dataset.lastRenderSignature!==de;Z.dataset.lastRenderSignature=de;const ze=Math.max(120,Math.floor(Z.clientWidth||120)),it=window.devicePixelRatio||1,Ct=Math.floor(ze*it),ht=Math.floor(K*it);(Z.width!==Ct||Z.height!==ht)&&(Z.width=Ct,Z.height=ht);const L=Z.getContext("2d");if(!L)return;const ee=Math.max(1,X,$e),Tt=Math.min(1,Math.max(0,X/ee)),wt=Math.min(1,Math.max(0,$e/ee)),ot=X-$e,Ce=X>0?$e/X*100:$e>0?100:0,He=8,ge=He,Fe=34,pt=ze-He*2,Ue=22,oe=Number.parseInt(Z.dataset.hoverX??"-1",10),De=(le,me,Ee,Ne,Be)=>{L.beginPath(),L.moveTo(le+Be,me),L.lineTo(le+Ee-Be,me),L.quadraticCurveTo(le+Ee,me,le+Ee,me+Be),L.lineTo(le+Ee,me+Ne-Be),L.quadraticCurveTo(le+Ee,me+Ne,le+Ee-Be,me+Ne),L.lineTo(le+Be,me+Ne),L.quadraticCurveTo(le,me+Ne,le,me+Ne-Be),L.lineTo(le,me+Be),L.quadraticCurveTo(le,me,le+Be,me),L.closePath()},xt=le=>{L.setTransform(1,0,0,1,0,0),L.clearRect(0,0,Z.width,Z.height),L.scale(it,it),De(ge,Fe,pt,Ue,8),L.fillStyle=f,L.fill(),L.strokeStyle=T,L.lineWidth=1,L.stroke();const me=[.6,.25,.15],Ee=[.1,.16,.24];let Ne=0;me.forEach((S,N)=>{const je=pt*S;L.save(),L.globalAlpha=Ee[N]??.1,L.fillStyle=d,L.fillRect(ge+Ne,Fe,je,Ue),L.restore(),Ne+=je});const Be=X>0&&$e>X?R:I,Ut=pt*wt*le;De(ge,Fe+3,Ut,Ue-6,6),L.fillStyle=Be,L.fill(),Te&&(L.save(),L.strokeStyle=Be,L.lineWidth=1.5,L.globalAlpha=.8,De(ge-1,Fe+2,Math.max(2,Ut+2),Ue-4,7),L.stroke(),L.restore());const kt=ge+pt*Tt;L.strokeStyle=p,L.lineWidth=Te?3:2,L.beginPath(),L.moveTo(kt,Fe-3),L.lineTo(kt,Fe+Ue+3),L.stroke(),Te&&oe>=ge&&oe<=ge+pt&&(L.save(),L.strokeStyle=p,L.globalAlpha=.35,L.lineWidth=1,L.beginPath(),L.moveTo(oe,Fe-8),L.lineTo(oe,Fe+Ue+8),L.stroke(),L.restore()),L.fillStyle=p,L.font="600 12px system-ui, -apple-system, sans-serif",L.textAlign="left",L.textBaseline="top",L.fillText(Ye,ge,10);const $n=Ce*le;if(L.fillStyle=Ce>100?R:Ce<100?I:d,L.textAlign="right",L.fillText(`${$n.toFixed(0)}%`,ge+pt,10),L.fillStyle=d,L.font="500 11px system-ui, -apple-system, sans-serif",L.textAlign="left",L.textBaseline="top",L.fillText(`Ist ${_($e)} · Ziel ${_(X)} · Δ ${ot>=0?"+":""}${_(ot)}`,ge,64),Te){const S=`Nutzung ${Ce.toFixed(1)}%`;L.font="600 11px system-ui, -apple-system, sans-serif";const N=8,je=5,xe=22,Gt=L.measureText(S).width+N*2,ha=Number.isFinite(oe)?oe-Gt/2:ge+pt-Gt,we=Math.min(ge+pt-Gt,Math.max(ge,ha)),zn=Fe-xe-8;L.save(),L.fillStyle=p,L.globalAlpha=.92,De(we,zn,Gt,xe,6),L.fill(),L.restore(),L.fillStyle=f,L.textAlign="left",L.textBaseline="top",L.fillText(S,we+N,zn+je)}},Ge=et.get(Z);if(Ge&&window.cancelAnimationFrame(Ge),!ft){xt(1);return}const vt=performance.now(),Le=le=>{const me=le-vt,Ee=Math.min(1,me/H);if(xt(W(Ee)),Ee<1){const Ne=window.requestAnimationFrame(Le);et.set(Z,Ne);return}et.delete(Z)},kn=window.requestAnimationFrame(Le);et.set(Z,kn)})}function ut(o){if(o==="dashboard"){const c=h.years.slice().sort((d,f)=>f.year-d.year);c.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??c[0]?.year??null)}h.topModal=o,te()}function Bt(){h.topModal&&(h.topModal=null,te())}function Qa(){h.showUnexportedChangeLogModal=!0,te()}function aa(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,te())}function Fn(){Ze||(Ze=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),aa();return}h.topModal&&(o.preventDefault(),Bt())}}))}function ka(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const c=o/6;return window.scrollY>c}function tn(){const o=E.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",ka())}function $a(){if(re)return;re=!0;const o=()=>{tn(),tt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function _t(){if(ae&&document.body.contains(ae))return ae;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ae=o,o;const c=document.createElement("div");return c.id="toast-root",c.className="toast-root",c.setAttribute("aria-live","polite"),c.setAttribute("aria-atomic","true"),document.body.appendChild(c),ae=c,c}function rt(){if(ce&&document.body.contains(ce))return ce;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return ce=o,o;const c=document.createElement("div");return c.id="amount-modal-root",document.body.appendChild(c),ce=c,c}function It(){if(!ce){Qe=null;return}ce.innerHTML="",Qe=null}function Ba(o,c){let p=o;const d=c.min;if(d){const T=Number.parseFloat(d);if(!Number.isNaN(T)){const I=Math.round(T*100);p=Math.max(p,I)}}const f=c.max;if(f){const T=Number.parseFloat(f);if(!Number.isNaN(T)){const I=Math.round(T*100);p=Math.min(p,I)}}return p}function ct(o){if(o.disabled)return;const c=rt();It(),Qe=o;const p=Pe(o.value||"0"),d="Betrag anpassen";c.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${_(p)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${_(p)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${_(p)} €</strong></div>
            </div>
            <label>
              Betrag (€)
              <input id="amount-modal-delta" type="number" step="0.01" value="0.00" />
            </label>
            <div class="amount-modal-actions">
              <button class="btn btn-quiet" id="amount-modal-cancel" type="button">Abbrechen</button>
              <button class="btn" id="amount-modal-overwrite" type="button">Korrigieren</button>
              <button class="btn btn-primary" id="amount-modal-apply" type="button">Verrechnen</button>
            </div>
          </div>
        </div>
      </div>
    `;const f=c.querySelector(".amount-modal-backdrop"),T=c.querySelector("#amount-modal-delta"),I=c.querySelector("#amount-modal-next-delta"),R=c.querySelector("#amount-modal-next-overwrite"),K=c.querySelector("#amount-modal-cancel"),H=c.querySelector("#amount-modal-overwrite"),W=c.querySelector("#amount-modal-apply");function Z(){const de=Pe(T?.value??"0");return Ba(p+de,o)}function X(){const de=Pe(T?.value??"0");return Ba(de,o)}function $e(){I&&(I.textContent=`${_(Z())} €`),R&&(R.textContent=`${_(X())} €`)}function Ye(){const de=Qe;if(!de){It();return}const ft=Z();It(),de.value=gt(ft),de.dispatchEvent(new Event("change",{bubbles:!0}))}function Te(){const de=Qe;if(!de){It();return}const ft=X();It(),de.value=gt(ft),de.dispatchEvent(new Event("change",{bubbles:!0}))}K?.addEventListener("click",()=>{It()}),H?.addEventListener("click",()=>{Te()}),W?.addEventListener("click",()=>{Ye()}),T?.addEventListener("input",()=>{$e()}),T?.addEventListener("keydown",de=>{if(de.key==="Escape"){de.preventDefault(),It();return}de.key==="Enter"&&(de.preventDefault(),Ye())}),f?.addEventListener("click",de=>{de.target===f&&It()}),window.setTimeout(()=>{T?.focus(),T?.select(),$e()},0)}function ye(o,c="success"){const p=_t(),d=document.createElement("div");d.className=`toast toast-${c}`,d.textContent=o,p.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const f=c==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},f)}function Lt(){return new Date().getMonth()+1}function Jt(){return new Date().getFullYear()}function _a(o){const c=Jt(),p=o.find(d=>d.year===c);return p?p.year:o[0]?.year??null}function ra(){return new Date().toISOString().slice(0,10)}function Dn(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Za(){const o=localStorage.getItem(Se);return o&&xr(o)?o:"light"}function jt(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Se,o)}function nn(){return localStorage.getItem(U)==="1"}function St(o){localStorage.setItem(U,o?"1":"0")}function sa(){const o=localStorage.getItem(ue);if(!o)return[];try{const c=JSON.parse(o);return Array.isArray(c)?c.filter(p=>{if(!p||typeof p!="object")return!1;const d=p;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function Et(o){localStorage.setItem(ue,JSON.stringify(o.slice(-200)))}function er(){const o=localStorage.getItem(ne);if(!o)return null;const c=o.trim();return c||null}function an(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},c=localStorage.getItem(pe);if(!c)return o;try{const p=JSON.parse(c),d=f=>typeof f=="number"&&Number.isFinite(f)?f:null;return{foodBudgetCents:d(p.foodBudgetCents),goingOutBudgetCents:d(p.goingOutBudgetCents),fixedBudgetCents:d(p.fixedBudgetCents),variableBudgetCents:d(p.variableBudgetCents),miscBudgetCents:d(p.miscBudgetCents)}}catch{return o}}function Sa(o){localStorage.setItem(pe,JSON.stringify(o))}function mn(o){o.months.forEach(c=>{const{recurringBudgetDefaults:p}=h;typeof p.foodBudgetCents=="number"&&(c.foodBudgetCents=p.foodBudgetCents),typeof p.goingOutBudgetCents=="number"&&(c.goingOutBudgetCents=p.goingOutBudgetCents),typeof p.fixedBudgetCents=="number"&&(c.fixedBudgetCents=p.fixedBudgetCents),typeof p.variableBudgetCents=="number"&&(c.variableBudgetCents=p.variableBudgetCents),typeof p.miscBudgetCents=="number"&&(c.miscBudgetCents=p.miscBudgetCents)})}function rn(o){const c=o.trim();c&&localStorage.setItem(ne,c)}async function ia(){_t(),jt(Za()),h.hasUnexportedChanges=nn(),h.unexportedChangeLog=sa(),h.lastBackupFileName=er(),h.recurringBudgetDefaults=an(),Fn(),$a();const[o,c,p]=await Promise.all([An(),dr(),hr()]);h.years=o,h.annualVariableFixedTemplates=p.templates,h.annualVariableFixedTemplateVersion=p.version,oa(h.years),on(h.years),h.fixedTemplates=c.templates,h.fixedTemplateVersion=c.version,await ve(h.years),o.length>0&&(h.selectedYear=_a(o),h.selectedMonth=Lt()),te()}function oa(o){const c=p=>p==="balance"||p==="fresh"||p==="salary"?p:void 0;o.forEach(p=>{p.months.forEach(d=>{typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(f=>{const T=c(f.incomeSource);if(!T){const{incomeSource:I,...R}=f;return R}return{...f,incomeSource:T}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((f,T)=>f+T.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((f,T)=>f+T.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function J(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function gn(o){return o==="fresh"||o==="salary"||!o}async function ve(o){for(const c of o)await On(c)}function Rt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ke(){const o=Rt();if(o)return o.months.find(c=>c.month===h.selectedMonth)}function Pt(o){const c=o.days.reduce((R,K)=>R+K.foodCents,0),p=o.days.reduce((R,K)=>R+K.goingOutCents,0),d=o.fixedCosts.reduce((R,K)=>R+K.actualCents,0),f=o.variableCosts.reduce((R,K)=>R+K.amountCents,0)+o.variablePositions.reduce((R,K)=>R+K.actualCents,0),T=o.miscCosts.reduce((R,K)=>R+K.amountCents,0),I=c+p+d+f+T;return{foodCents:c,goingOutCents:p,fixedCents:d,variableCents:f,miscCents:T,totalCents:I}}function In(o){const c=o.foodBudgetCents??0,p=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((I,R)=>I+R.plannedCents,0),f=o.variablePositions.reduce((I,R)=>I+R.budgetCents,0),T=o.miscBudgetCents??0;return c+p+d+(o.variableBudgetCents??f)+T}function Nn(o){return o.months.reduce((c,p)=>{const d=Pt(p);return{foodCents:c.foodCents+d.foodCents,goingOutCents:c.goingOutCents+d.goingOutCents,fixedCents:c.fixedCents+d.fixedCents,variableCents:c.variableCents+d.variableCents,miscCents:c.miscCents+d.miscCents,totalCents:c.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function tr(o){return o.months.slice().sort((c,p)=>c.month-p.month).map(c=>({month:c.month,summary:Pt(c)}))}function la(o){const c=o.months.reduce((I,R)=>I+(R.foodBudgetCents??0),0),p=o.months.reduce((I,R)=>I+(R.goingOutBudgetCents??0),0),d=o.months.reduce((I,R)=>I+(R.fixedBudgetCents??R.fixedCosts.reduce((K,H)=>K+H.plannedCents,0)),0),f=o.months.reduce((I,R)=>I+(R.variableBudgetCents??R.variablePositions.reduce((K,H)=>K+H.budgetCents,0)),0),T=o.months.reduce((I,R)=>I+(R.miscBudgetCents??0),0);return{foodCents:c,goingOutCents:p,fixedCents:d,variableCents:f,miscCents:T,totalCents:c+p+d+f+T}}function bn(o){return o.months.reduce((c,p)=>c+p.incomes.reduce((d,f)=>d+(gn(f.incomeSource)?f.amountCents:0),0),0)}function bt(o,c){const p=o.months.slice().sort((d,f)=>d.month-f.month)[0];return p?c.get(ie(o.year,p.month))?.carriedFromPreviousCents??0:0}function Ea(){const o=h.years.slice().sort((d,f)=>d.year-f.year).flatMap(d=>d.months.slice().sort((f,T)=>f.month-T.month).map(f=>({year:d.year,month:f}))),c=new Map;let p=0;return o.forEach(({year:d,month:f},T)=>{const I=f.carryoverOverrideCents,R=typeof I=="number",K=R?I:p,H=T>0||R,W=f.incomes.reduce((Ye,Te)=>Ye+(gn(Te.incomeSource)?Te.amountCents:0),0),Z=In(f),X=W+K,$e=X-Z;c.set(ie(d,f.month),{hasPreviousMonth:H,carriedFromPreviousCents:K,recordedIncomeCents:W,effectiveIncomeCents:X,plannedBudgetCents:Z,netCents:$e}),p=$e}),c}function Je(o,c){return c<=0?"":o>c?"budget-over":o<c?"budget-under":""}function Pa(o){return`${o>0?"+":""}${_(o)}`}function Mt(o,c){const p=o-c,d=Je(c,o);return`${_(o)} <span class="eval-diff ${d}">(Δ ${Pa(p)})</span>`}function Re(o,c){const p=o!==null,d=p?o-c:null,f=p?Je(c,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${p?`${_(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${_(c)} €</strong>
      </div>
      <div class="column-overview-row ${f}">
        <span>Diff</span>
        <strong>${d===null?"-":`${_(d)} €`}</strong>
      </div>
    </div>`}async function Ht(o){if(await Ar(o)){alert(`Jahr ${o} existiert bereits.`);return}const p=mr(o,h.fixedTemplates,h.fixedTemplateVersion);mn(p),G(p),await On(p),h.years=await An(),sn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=Lt(),ye(`Jahr ${o} wurde angelegt.`),te()}function sn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,St(!0);const c=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",p={id:$t("change"),timestampIso:new Date().toISOString(),message:`${o} (${c})`};h.unexportedChangeLog=[...h.unexportedChangeLog,p].slice(-200),Et(h.unexportedChangeLog)}function yn(o){const c=o.trim();c&&(h.lastBackupFileName=c,rn(c))}function Kn(o){h.hasUnexportedChanges=!1,St(!1),h.unexportedChangeLog=[],Et([]),h.showUnexportedChangeLogModal=!1,yn(o)}async function Ae(o){const c=Rt();c&&(await On(c),h.years=await An(),sn(o))}async function Ve(o){for(const c of h.years)await On(c);h.years=await An(),sn(o)}function ie(o,c){return o*100+c}function Cn(o){const c=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!c)return null;const p=c[1],d=c[2];return!p||!d?null:{year:Number.parseInt(p,10),month:Number.parseInt(d,10)}}function Nt(o,c){const p=Cn(o.dueDateIso);if(!p||c.year<p.year)return;const d=c.months.find(T=>T.month===p.month);!d||d.variablePositions.some(T=>T.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:$t("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],dt(d))}function G(o){h.annualVariableFixedTemplates.forEach(c=>{Nt(c,o)})}function on(o){const c=new Set(h.annualVariableFixedTemplates.map(p=>p.id));o.forEach(p=>{p.months.forEach(d=>{const f=d.variablePositions.some(I=>typeof I.autoAnnualTemplateId=="string"),T=d.fixedCosts.some(I=>typeof I.autoAnnualTemplateId=="string");f&&(d.variablePositions=d.variablePositions.filter(I=>I.autoAnnualTemplateId?c.has(I.autoAnnualTemplateId):!0),dt(d)),T&&(d.fixedCosts=d.fixedCosts.filter(I=>!I.autoAnnualTemplateId),st(d))}),G(p)})}function st(o){o.fixedBudgetCents=o.fixedCosts.reduce((c,p)=>c+p.plannedCents,0)}function dt(o){o.variableBudgetCents=o.variablePositions.reduce((c,p)=>c+p.budgetCents,0)}function V(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function qn(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",V());if(!o)return null;const c=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!c)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const p=c[1],d=c[2];return!p||!d?null:{year:Number.parseInt(p,10),month:Number.parseInt(d,10)}}function Ma(o,c){const p=ie(c.year,c.month);h.years.forEach(d=>{d.months.forEach(f=>{if(ie(d.year,f.month)<p)return;f.fixedCosts.some(I=>I.templateId===o.id)||(f.fixedCosts.push({id:$t("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),st(f))})})}function ua(o,c,p){const d=ie(p.year,p.month);h.years.forEach(f=>{f.months.forEach(T=>{ie(f.year,T.month)<d||(T.fixedCosts=T.fixedCosts.map(I=>I.templateId!==c.id?I:{...I,name:c.name,plannedCents:c.plannedCents,actualCents:I.actualCents===o.plannedCents?c.plannedCents:I.actualCents}),st(T))})})}function Ta(o,c){const p=ie(c.year,c.month);h.years.forEach(d=>{d.months.forEach(f=>{ie(d.year,f.month)<p||(f.fixedCosts=f.fixedCosts.filter(T=>T.templateId!==o),st(f))})})}async function ca(o,c){const p=o.trim();if(!p)return;const d=qn();if(!d)return;const f=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const T=h.fixedTemplates.find(R=>R.id===h.editingFixedTemplateId);if(!T)return;const I={...T,name:p,plannedCents:c};h.fixedTemplates=h.fixedTemplates.map(R=>R.id===h.editingFixedTemplateId?I:R),ua(T,I,d)}else{const T={id:$t("tpl"),name:p,plannedCents:c};h.fixedTemplates=[...h.fixedTemplates,T],Ma(T,d)}h.fixedTemplateVersion=await fr(h.fixedTemplates),h.editingFixedTemplateId=null,await Ve(f?`Fixkosten-Vorlage aktualisiert: ${p} (${_(c)} €)`:`Fixkosten-Vorlage hinzugefügt: ${p} (${_(c)} €)`),ye(f?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),te()}function nr(o){h.editingFixedTemplateId=o,te()}function ar(){h.editingFixedTemplateId=null,te()}async function ln(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const p=qn();if(!p)return;const d=h.fixedTemplates.find(f=>f.id===o);h.fixedTemplates=h.fixedTemplates.filter(f=>f.id!==o),Ta(o,p),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await fr(h.fixedTemplates),await Ve(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),ye("Fixkosten-Vorlage wurde gelöscht."),te()}async function un(o,c,p){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const f=Cn(c);if(!f){alert("Bitte ein gültiges Datum auswählen.");return}if(p<=0){alert("Bitte einen positiven Betrag eingeben.");return}const T={id:$t("annualtpl"),name:d,plannedCents:p,dueDateIso:c};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,T],h.years.forEach(I=>{Nt(T,I)}),h.annualVariableFixedTemplateVersion=await pr(h.annualVariableFixedTemplates),await Ve(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${_(p)} €, jährlich in ${_e(f.month)})`),ye("Variable Fixkosten-Vorlage wurde hinzugefügt."),te()}async function da(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const p=h.annualVariableFixedTemplates.find(d=>d.id===o);p&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(f=>{f.variablePositions=f.variablePositions.filter(T=>T.autoAnnualTemplateId!==o),dt(f),f.fixedCosts=f.fixedCosts.filter(T=>T.autoAnnualTemplateId!==o),st(f)})}),h.annualVariableFixedTemplateVersion=await pr(h.annualVariableFixedTemplates),await Ve(`Variable Fixkosten-Vorlage gelöscht: ${p.name}`),ye("Variable Fixkosten-Vorlage wurde gelöscht."),te())}async function xn(o,c,p){const d=Ke();d&&(d.days=d.days.map(f=>f.isoDate===o?{...f,[c]:p}:f),await Ae(`${c==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${_(p)} €`),te())}async function ke(o,c){const p=Ke();if(!p)return;const d=p.fixedCosts.find(f=>f.id===o);p.fixedCosts=p.fixedCosts.map(f=>f.id===o?{...f,actualCents:c}:f),await Ae(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${_(c)} €`),te()}async function qe(o,c){const p=Ke();if(!p)return;const d=p.fixedCosts.find(f=>f.id===o);d&&(p.fixedCosts=p.fixedCosts.map(f=>f.id===o?{...f,plannedCents:c}:f),st(p),await Ae(`Fixkosten-Budget angepasst: ${d.name} auf ${_(c)} €`),te())}async function rr(o,c){const p=Ke();if(!p)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(c<=0){alert("Bitte einen positiven Betrag eingeben.");return}const f={id:$t("fixed"),templateId:$t("fixed-local"),name:d,plannedCents:c,actualCents:0};p.fixedCosts=[f,...p.fixedCosts],st(p),await Ae(`Fixkosten-Position hinzugefügt: ${d} (${_(c)} €)`),ye("Fixkosten-Position wurde hinzugefügt."),te()}async function Ln(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const p=Ke();if(!p)return;const d=p.fixedCosts.find(f=>f.id===o);d&&(p.fixedCosts=p.fixedCosts.filter(f=>f.id!==o),st(p),await Ae(`Fixkosten-Position gelöscht: ${d.name}`),ye("Fixkosten-Position wurde gelöscht."),te())}async function jn(o){await yt("fixedBudgetCents",o,"Fixkosten")}async function Rn(o){await yt("foodBudgetCents",o,"Essen")}async function sr(o){await yt("goingOutBudgetCents",o,"Ausgehen")}async function Vt(o){await yt("miscBudgetCents",o,"Sonstiges")}async function cn(o){await yt("variableBudgetCents",o,"Variable Kosten")}async function yt(o,c,p){const d=Ke(),f=h.selectedYear;if(!d||!f||d[o]===c)return;if(d[o]=c,confirm(`Soll das Budget "${p}" auch für zukünftige Monate übernommen werden?`)){const I=ie(f,h.selectedMonth);h.years.forEach(R=>{R.months.forEach(K=>{ie(R.year,K.month)<=I||(K[o]=c)})}),h.recurringBudgetDefaults[o]=c,Sa(h.recurringBudgetDefaults),await Ve(`Budget "${p}" auf ${_(c)} € gesetzt (inkl. zukünftiger Monate)`),ye(`Budget "${p}" wurde für zukünftige Monate übernommen.`),te();return}await Ae(`Budget "${p}" auf ${_(c)} € gesetzt`),te()}async function wn(o){const c=Ke();c&&(o===null?c.carryoverOverrideCents=null:c.carryoverOverrideCents=o,await Ae(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${_(o)} € gesetzt`),te())}async function Oa(o,c,p){const d=Ke(),f=h.selectedYear;if(!d||!f)return;const T=o.trim();if(!T){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:$t("varpos"),name:T,budgetCents:c,actualCents:0},...d.variablePositions],dt(d),p){const I=ie(f,h.selectedMonth);h.years.forEach(R=>{R.months.forEach(K=>{ie(R.year,K.month)<=I||(K.variablePositions=[{id:$t("varpos"),name:T,budgetCents:c,actualCents:0},...K.variablePositions],dt(K))})}),await Ve(`Variable Position hinzugefügt: ${T} (${_(c)} €) für zukünftige Monate`),ye("Variable Position wurde für zukünftige Monate hinzugefügt."),te();return}await Ae(`Variable Position hinzugefügt: ${T} (${_(c)} €)`),ye("Variable Position wurde hinzugefügt."),te()}async function Yt(o,c){const p=Ke();if(!p)return;const d=p.variablePositions.find(f=>f.id===o);p.variablePositions=p.variablePositions.map(f=>f.id===o?{...f,actualCents:c}:f),await Ae(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${_(c)} €`),te()}async function Aa(o,c){const p=Ke();if(!p)return;const d=p.variablePositions.find(f=>f.id===o);p.variablePositions=p.variablePositions.map(f=>f.id===o?{...f,budgetCents:c}:f),dt(p),await Ae(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${_(c)} €`),te()}async function Xt(o){if(!confirm("Variable Position wirklich löschen?"))return;const p=Ke(),d=h.selectedYear;if(!p||!d)return;const f=p.variablePositions.find(K=>K.id===o);if(!f)return;const T=ie(d,h.selectedMonth),R=h.years.some(K=>K.months.some(H=>ie(K.year,H.month)>T&&H.variablePositions.some(W=>W.name===f.name&&W.budgetCents===f.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.variablePositions=p.variablePositions.filter(K=>K.id!==o),dt(p),R){h.years.forEach(K=>{K.months.forEach(H=>{ie(K.year,H.month)<=T||(H.variablePositions=H.variablePositions.filter(W=>!(W.name===f.name&&W.budgetCents===f.budgetCents)),dt(H))})}),await Ve(`Variable Position gelöscht: ${f.name} (inkl. zukünftiger Monate)`),ye("Variable Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ae(`Variable Position gelöscht: ${f.name}`),ye("Variable Position wurde gelöscht."),te()}async function Fa(o){const c=Ke(),p=h.selectedYear;if(!c||!p)return;const d=c.variablePositions.find(W=>W.id===o);if(!d)return;const f={year:h.selectedMonth===12?p+1:p,month:h.selectedMonth===12?1:h.selectedMonth+1};let T=h.years.find(W=>W.year===f.year);if(!T){const W=mr(f.year,h.fixedTemplates,h.fixedTemplateVersion);mn(W),G(W),await On(W),h.years=[...h.years,W].sort((Z,X)=>Z.year-X.year),T=W}const I=T.months.find(W=>W.month===f.month);if(!I)return;const R=I.variablePositions.some(W=>W.id===d.id||W.name===d.name&&W.budgetCents===d.budgetCents);if(c.variablePositions=c.variablePositions.filter(W=>W.id!==o),dt(c),!R){const Z=I.variablePositions.some(X=>X.id===d.id)?{...d,id:$t("varpos")}:d;I.variablePositions=[Z,...I.variablePositions],dt(I)}const K=`${_e(f.month)} ${f.year}`,H=`Variable Position verschoben: ${d.name} → ${K}`;if(f.year===p)await Ae(H);else{const W=Rt();if(!W)return;await On(W),await On(T),h.years=await An(),oa(h.years),sn(H)}ye(R?`Position entfernt (im Folgemonat schon vorhanden: ${K}).`:`Position in den Folgemonat verschoben: ${K}.`),te()}async function Vn(o,c,p){const d=Ke(),f=h.selectedYear;if(!d||!f)return;const T=o.trim();if(!T){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(c<=0){alert("Bitte einen positiven Betrag eingeben.");return}const I=gr(T,c);if(d.miscCosts=[I,...d.miscCosts],p){const R=ie(f,h.selectedMonth);h.years.forEach(K=>{K.months.forEach(H=>{ie(K.year,H.month)<=R||(H.miscCosts=[gr(T,c),...H.miscCosts])})}),await Ve(`Sonstige Position hinzugefügt: ${T} (${_(c)} €) für zukünftige Monate`),ye("Sonstige Position wurde für zukünftige Monate hinzugefügt."),te();return}await Ae(`Sonstige Position hinzugefügt: ${T} (${_(c)} €)`),ye("Sonstige Position wurde hinzugefügt."),te()}async function Me(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const p=Ke(),d=h.selectedYear;if(!p||!d)return;const f=p.miscCosts.find(K=>K.id===o);if(!f)return;const T=ie(d,h.selectedMonth),R=h.years.some(K=>K.months.some(H=>ie(K.year,H.month)>T&&H.miscCosts.some(W=>W.description===f.description&&W.amountCents===f.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.miscCosts=p.miscCosts.filter(K=>K.id!==o),R){h.years.forEach(K=>{K.months.forEach(H=>{ie(K.year,H.month)<=T||(H.miscCosts=H.miscCosts.filter(W=>!(W.description===f.description&&W.amountCents===f.amountCents)))})}),await Ve(`Sonstige Position gelöscht: ${f.description} (${_(f.amountCents)} €) inkl. zukünftiger Monate`),ye("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ae(`Sonstige Position gelöscht: ${f.description} (${_(f.amountCents)} €)`),ye("Sonstige Position wurde gelöscht."),te()}async function zt(o,c,p,d){const f=Ke(),T=h.selectedYear;if(!f||!T)return;const I=o.trim();if(!I){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(c<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const R=br(I,c,p);if(f.incomes=[R,...f.incomes],d){const K=ie(T,h.selectedMonth);h.years.forEach(H=>{H.months.forEach(W=>{ie(H.year,W.month)<=K||(W.incomes=[br(I,c,p),...W.incomes])})}),await Ve(`Einkommen hinzugefügt: ${I} (${_(c)} €, ${J(p)}) für zukünftige Monate`),ye("Einkommen wurde für zukünftige Monate hinzugefügt."),te();return}await Ae(`Einkommen hinzugefügt: ${I} (${_(c)} €, ${J(p)})`),ye("Einkommen wurde hinzugefügt."),te()}async function Kt(o,c){const p=Ke();if(!p)return;const d=p.incomes.find(f=>f.id===o);d&&(p.incomes=p.incomes.map(f=>{if(f.id!==o)return f;if(!c){const{incomeSource:T,...I}=f;return I}return{...f,incomeSource:c}}),await Ae(`Einkommensart angepasst: ${d.description} → ${J(c)}`),te())}async function Da(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const p=Ke(),d=h.selectedYear;if(!p||!d)return;const f=p.incomes.find(K=>K.id===o);if(!f)return;const T=ie(d,h.selectedMonth),R=h.years.some(K=>K.months.some(H=>ie(K.year,H.month)>T&&H.incomes.some(W=>W.description===f.description&&W.amountCents===f.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.incomes=p.incomes.filter(K=>K.id!==o),R){h.years.forEach(K=>{K.months.forEach(H=>{ie(K.year,H.month)<=T||(H.incomes=H.incomes.filter(W=>!(W.description===f.description&&W.amountCents===f.amountCents)))})}),await Ve(`Einkommen gelöscht: ${f.description} (${_(f.amountCents)} €) inkl. zukünftiger Monate`),ye("Einkommen wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ae(`Einkommen gelöscht: ${f.description} (${_(f.amountCents)} €)`),ye("Einkommen wurde gelöscht."),te()}async function dn(){const o=await Fr(),c=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),p=URL.createObjectURL(c),d=`haushaltsbuch-backup-${new Date().toISOString().slice(0,10)}.json`,f=document.createElement("a");f.href=p,f.download=d,f.click(),URL.revokeObjectURL(p),Kn(d),te(),ye("Backup wurde exportiert.")}async function Yn(o){const c=await o.text(),p=JSON.parse(c);await Dr(p);const[d,f,T]=await Promise.all([An(),dr(),hr()]);h.years=d,h.annualVariableFixedTemplates=T.templates,h.annualVariableFixedTemplateVersion=T.version,oa(h.years),on(h.years),h.fixedTemplates=f.templates,h.fixedTemplateVersion=f.version,await ve(h.years),h.selectedYear=_a(d),h.selectedMonth=Lt(),Kn(o.name),ye("Backup wurde importiert."),te()}function te(){const o=Rt(),c=Ke(),p=ra(),d=c?Pt(c):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},f=o?Nn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},T=o?tr(o):[],I=c?c.foodBudgetCents??0:0,R=c?c.goingOutBudgetCents??0:0,K=c?c.fixedBudgetCents??c.fixedCosts.reduce((i,M)=>i+M.plannedCents,0):0,H=c?c.variableBudgetCents??c.variablePositions.reduce((i,M)=>i+M.budgetCents,0):0,W=c?c.miscBudgetCents??0:0,Z=o?o.months.reduce((i,M)=>i+(M.foodBudgetCents??0),0):0,X=o?o.months.reduce((i,M)=>i+(M.goingOutBudgetCents??0),0):0,$e=o?o.months.reduce((i,M)=>i+(M.fixedBudgetCents??M.fixedCosts.reduce((e,t)=>e+t.plannedCents,0)),0):0,Ye=o?o.months.reduce((i,M)=>i+(M.variableBudgetCents??M.variablePositions.reduce((e,t)=>e+t.budgetCents,0)),0):0,Te=o?o.months.reduce((i,M)=>i+(M.miscBudgetCents??0),0):0,de=c?c.incomes.reduce((i,M)=>i+(gn(M.incomeSource)?M.amountCents:0),0):0,ft=c?c.incomes.reduce((i,M)=>i+(M.incomeSource==="salary"?M.amountCents:0),0):0,ze=Ea(),it=o?ze.get(ie(o.year,h.selectedMonth)):void 0,Ct=o?o.months.slice().sort((i,M)=>i.month-M.month)[0]:void 0,ht=it?.carriedFromPreviousCents??0,L=it?.hasPreviousMonth??!1,ee=it?.effectiveIncomeCents??de,Tt=c?In(c):0,wt=it?.netCents??de-Tt,ot=ee-d.totalCents,Ce=ft-d.totalCents,He=d.totalCents>0?`${(ft/d.totalCents*100).toFixed(1)} %`:"-",ge=ht<0?"danger":ht>0?"budget-under":"",Fe=wt<0?"danger":wt>0?"budget-under":"",pt=ot<0?"danger":ot>0?"budget-under":"",Ue=o?o.months.reduce((i,M)=>i+M.incomes.reduce((e,t)=>e+(gn(t.incomeSource)?t.amountCents:0),0),0):0,oe=o?o.months.reduce((i,M)=>i+M.incomes.reduce((e,t)=>e+(t.incomeSource==="salary"?t.amountCents:0),0),0):0,De=o&&Ct?ze.get(ie(o.year,Ct.month))?.carriedFromPreviousCents??0:0,xt=Ue+De,Ge=xt-f.totalCents,vt=oe-f.totalCents,Le=f.totalCents>0?`${(oe/f.totalCents*100).toFixed(1)} %`:"-",kn=De<0?"danger":De>0?"budget-under":"",le=Ge<0?"danger":Ge>0?"budget-under":"",me=I+R+K+H+W,Ee=I+R,Ne=d.foodCents+d.goingOutCents,Be=Ee-Ne,Ut=Je(Ne,Ee),kt=Z+X+$e+Ye+Te,$n=ee-me,S=xt-kt,N=me-d.totalCents,je=kt-f.totalCents,xe=i=>i<0?"danger":i>0?"budget-under":"",fn=(i,M)=>M<=0?"muted":i>=M?"budget-under":"danger",Gt=fn(ft,d.totalCents),ha=fn(oe,f.totalCents),we=(i,M)=>{if(M<=0)return"0%";const t=Math.max(0,i)/M*100;return`${Math.min(100,Math.max(0,t)).toFixed(1)}%`},zn=(i,M)=>{if(M<=0)return i>0?100:0;const e=Math.max(0,i)/M*100;return Math.max(0,e)},Un=[{label:"Essen",budgetCents:I,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:R,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:K,actualCents:d.fixedCents},{label:"Variable",budgetCents:H,actualCents:d.variableCents},{label:"Sonstige",budgetCents:W,actualCents:d.miscCents}];Math.max(1,...Un.flatMap(i=>[i.budgetCents,i.actualCents]));const Gn=(i,M)=>M<=0?"bar-positive":i<=0||M>i?"bar-negative":"bar-positive",pa=[{label:"Einkommen gesamt",valueCents:ee,className:"bar-income"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ot,className:ot<0?"bar-negative":"bar-positive"}],Wn=Math.max(1,...pa.map(i=>Math.abs(i.valueCents))),Jn=o?o.months.slice().sort((i,M)=>i.month-M.month).map(i=>{const M=i.foodBudgetCents??0,e=i.goingOutBudgetCents??0,t=i.fixedBudgetCents??i.fixedCosts.reduce((s,l)=>s+l.plannedCents,0),n=i.variableBudgetCents??i.variablePositions.reduce((s,l)=>s+l.budgetCents,0),a=i.miscBudgetCents??0,r=M+e+t+n+a;return{month:i.month,foodBudgetCents:M,goingOutBudgetCents:e,fixedBudgetCents:t,variableBudgetCents:n,miscBudgetCents:a,totalBudgetCents:r}}):[],mt=new Map(Jn.map(i=>[i.month,i])),va=Math.max(1,...T.flatMap(i=>{const M=mt.get(i.month)?.totalBudgetCents;return[i.summary.totalCents,M??0]})),Ia=Math.max(1,...T.flatMap(i=>{const M=mt.get(i.month),e=i.summary.foodCents+i.summary.goingOutCents,t=(M?.foodBudgetCents??0)+(M?.goingOutBudgetCents??0);return[e,t]})),Qt=Math.max(1,...T.flatMap(i=>{const M=mt.get(i.month)?.fixedBudgetCents??0;return[i.summary.fixedCents,M]})),Hn=Math.max(1,...T.flatMap(i=>{const M=mt.get(i.month)?.variableBudgetCents??0;return[i.summary.variableCents,M]})),Xn=Math.max(1,...T.flatMap(i=>{const M=mt.get(i.month)?.miscBudgetCents??0;return[i.summary.miscCents,M]})),ma=Je(d.fixedCents,K),ga=Je(d.foodCents,I),Xe=Je(d.goingOutCents,R),Bn=Je(d.variableCents,H),_n=Je(d.miscCents,W),hn=h.editingFixedTemplateId?h.fixedTemplates.find(i=>i.id===h.editingFixedTemplateId):null,Qn=h.hasUnexportedChanges,ba=h.unexportedChangeLog.slice().reverse(),Na=h.lastBackupFileName?Dn(h.lastBackupFileName):"-",Zn={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},nt=h.years.slice().sort((i,M)=>i.year-M.year),Ot=nt.some(i=>i.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??nt[nt.length-1]?.year??null,We=typeof Ot=="number"?nt.find(i=>i.year===Ot):void 0,ya=We?We.months.slice().sort((i,M)=>i.month-M.month):[],At=We?Nn(We):Zn,Zt=We?la(We):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},Ka=We?bn(We):0,ir=We?bt(We,ze):0,Sn=Ka+ir,En=We?We.months.reduce((i,M)=>i+In(M),0):0,qa=Sn-En,ea=Sn-At.totalCents,Ca=[{label:"Essen",budgetCents:Zt.foodCents,actualCents:At.foodCents},{label:"Ausgehen",budgetCents:Zt.goingOutCents,actualCents:At.goingOutCents},{label:"Fixkosten",budgetCents:Zt.fixedCents,actualCents:At.fixedCents},{label:"Variable",budgetCents:Zt.variableCents,actualCents:At.variableCents},{label:"Sonstige",budgetCents:Zt.miscCents,actualCents:At.miscCents}],lt=ya.map(i=>{const M=We?ze.get(ie(We.year,i.month)):void 0,e=Pt(i),t=i.incomes.reduce((g,v)=>g+v.amountCents,0),n=M?.effectiveIncomeCents??t,a=M?.plannedBudgetCents??In(i),r=e.foodCents,s=e.goingOutCents,l=r+s,u=e.totalCents,m=n-a,k=n-u;return{month:i.month,foodCents:r,goingOutCents:s,foodAndGoingOutCents:l,effectiveIncomeCents:n,plannedBudgetCents:a,actualCostCents:u,plannedNetCents:m,actualNetCents:k}}),La=Math.max(1,...lt.map(i=>i.actualCostCents)),ja=Math.max(1,...lt.flatMap(i=>[Math.abs(i.plannedNetCents),Math.abs(i.actualNetCents)])),Ra=Math.max(1,...lt.map(i=>i.foodAndGoingOutCents)),Va=Math.max(1,...lt.map(i=>i.foodCents)),or=Math.max(1,...lt.map(i=>i.goingOutCents)),Wt=nt.reduce((i,M)=>{const e=la(M);return{foodCents:i.foodCents+e.foodCents,goingOutCents:i.goingOutCents+e.goingOutCents,fixedCents:i.fixedCents+e.fixedCents,variableCents:i.variableCents+e.variableCents,miscCents:i.miscCents+e.miscCents,totalCents:i.totalCents+e.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),qt=nt.reduce((i,M)=>{const e=Nn(M);return{foodCents:i.foodCents+e.foodCents,goingOutCents:i.goingOutCents+e.goingOutCents,fixedCents:i.fixedCents+e.fixedCents,variableCents:i.variableCents+e.variableCents,miscCents:i.miscCents+e.miscCents,totalCents:i.totalCents+e.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Ya=nt.reduce((i,M)=>i+bn(M),0),za=nt[0]?bt(nt[0],ze):0,xa=Ya+za,Ua=xa-Wt.totalCents,Ga=xa-qt.totalCents,Pn=[{label:"Essen",budgetCents:Wt.foodCents,actualCents:qt.foodCents},{label:"Ausgehen",budgetCents:Wt.goingOutCents,actualCents:qt.goingOutCents},{label:"Fixkosten",budgetCents:Wt.fixedCents,actualCents:qt.fixedCents},{label:"Variable",budgetCents:Wt.variableCents,actualCents:qt.variableCents},{label:"Sonstige",budgetCents:Wt.miscCents,actualCents:qt.miscCents}],Ft=Math.max(1,...Pn.flatMap(i=>[i.budgetCents,i.actualCents])),be=nt.map(i=>{const M=Nn(i),e=la(i),t=bn(i),n=bt(i,ze),a=t+n;return{year:i.year,budgetTotalCents:e.totalCents,actualTotalCents:M.totalCents,effectiveIncomeCents:a,plannedNetCents:a-e.totalCents,actualNetCents:a-M.totalCents}}),Mn=Math.max(1,...be.flatMap(i=>[Math.abs(i.plannedNetCents),Math.abs(i.actualNetCents)])),pn=Math.max(1,...be.map(i=>i.actualTotalCents)),lr=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${nt.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${nt.map(i=>`<option value="${i.year}" ${i.year===Ot?"selected":""}>${i.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${We?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${_(Sn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${_(En)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${_(At.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${xe(qa)}">${_(qa)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${xe(ea)}">${_(ea)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Budget vs. Ist nach Kategorie (Jahr)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-actual"></span>Ist</span>
                    </div>
                  </header>
                  <div class="circle-chart-container" aria-label="Budgetnutzung je Kategorie (Jahr)">
                    ${Ca.map(i=>{const M=zn(i.actualCents,i.budgetCents),e=Math.min(100,M),t=`${M.toFixed(0)}%`,n=i.budgetCents-i.actualCents,a=n<0?"danger":n>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Gn(i.budgetCents,i.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${e.toFixed(1)}%" title="${i.label}: ${_(i.actualCents)} von ${_(i.budgetCents)}">
                              <span class="circle-chart-value">${t}</span>
                            </div>
                            <div class="circle-chart-label">${i.label}</div>
                            <div class="circle-chart-meta muted">B ${_(i.budgetCents)} / I ${_(i.actualCents)}</div>
                            <div class="circle-chart-meta ${a}">${n>=0?"+":""}${_(n)}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Monatliche Ausgaben (Jahr)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(lt.length,1)}, minmax(0, 1fr));">
                    ${lt.map(i=>{const M=we(i.actualCostCents,La);return`
                          <div class="spark-bar" title="${_e(i.month)}: ${_(i.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${M}"></div>
                            <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Saldo pro Monat (Budget vs. Ist)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget-Saldo</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Ist-Saldo</span>
                    </div>
                  </header>
                  <div class="bar-chart">
                    ${lt.map(i=>{const M=we(Math.abs(i.plannedNetCents),ja),e=we(Math.abs(i.actualNetCents),ja),t=i.plannedNetCents<0?"bar-negative":"bar-positive",n=i.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${_e(i.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${_(i.plannedNetCents)} | Ist-Saldo: ${_(i.actualNetCents)}">
                              <div class="bar ${t}" style="width:${M}; opacity: 0.35;"></div>
                              <div class="bar ${n}" style="width:${e}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${xe(i.plannedNetCents)}">B ${_(i.plannedNetCents)}</span>
                              <span class="${xe(i.actualNetCents)}">I ${_(i.actualNetCents)}</span>
                            </div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Monat</th>
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${lt.map(i=>`<tr>
                        <td>${_e(i.month)}</td>
                        <td>${_(i.effectiveIncomeCents)}</td>
                        <td>${_(i.plannedBudgetCents)}</td>
                        <td>${_(i.actualCostCents)}</td>
                        <td class="${xe(i.plannedNetCents)}">${_(i.plannedNetCents)}</td>
                        <td class="${xe(i.actualNetCents)}">${_(i.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${nt.map(i=>`<option value="${i.year}" ${i.year===Ot?"selected":""}>${i.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="chart-grid">
                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Essen + Ausgehen Gesamt</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars">
                    ${lt.map(i=>{const M=we(i.foodAndGoingOutCents,Ra);return`
                          <div class="spark-bar" title="${_e(i.month)}: ${_(i.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${M}"></div>
                            <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Essen & Trinken</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(lt.length,1)}, minmax(0, 1fr));">
                    ${lt.map(i=>{const M=we(i.foodCents,Va);return`
                          <div class="spark-bar" title="${_e(i.month)}: ${_(i.foodCents)}">
                            <div class="spark-bar-fill" style="height:${M}"></div>
                            <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Ausgehen</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(lt.length,1)}, minmax(0, 1fr));">
                    ${lt.map(i=>{const M=we(i.goingOutCents,or);return`
                          <div class="spark-bar" title="${_e(i.month)}: ${_(i.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${M}"></div>
                            <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>
            `:`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen über alle Jahre</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${_(xa)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${_(Wt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${_(qt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${xe(Ua)}">${_(Ua)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${xe(Ga)}">${_(Ga)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Kategorien über alle Jahre</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-actual"></span>Ist</span>
                    </div>
                  </header>
                  <div class="bar-chart">
                    ${Pn.map(i=>{const M=we(i.budgetCents,Ft),e=we(i.actualCents,Ft),t=Gn(i.budgetCents,i.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${i.label}</div>
                            <div class="bar-track" title="Budget: ${_(i.budgetCents)} | Ist: ${_(i.actualCents)}">
                              <div class="bar bar-budget" style="width:${M}"></div>
                              <div class="bar-marker" style="left:${M}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${t}" style="width:${e}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${_(i.budgetCents)}</span>
                              <span class="muted">I ${_(i.actualCents)}</span>
                            </div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Ist-Kosten pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(be.length,1)}, minmax(0, 1fr));">
                    ${be.map(i=>{const M=we(i.actualTotalCents,pn);return`
                          <div class="spark-bar" title="${i.year}: ${_(i.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${M}"></div>
                            <div class="spark-bar-label">${i.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Saldo pro Jahr (Budget vs. Ist)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget-Saldo</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Ist-Saldo</span>
                    </div>
                  </header>
                  <div class="bar-chart">
                    ${be.map(i=>{const M=we(Math.abs(i.plannedNetCents),Mn),e=we(Math.abs(i.actualNetCents),Mn),t=i.plannedNetCents<0?"bar-negative":"bar-positive",n=i.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${i.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${_(i.plannedNetCents)} | Ist-Saldo: ${_(i.actualNetCents)}">
                              <div class="bar ${t}" style="width:${M}; opacity: 0.35;"></div>
                              <div class="bar ${n}" style="width:${e}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${xe(i.plannedNetCents)}">B ${_(i.plannedNetCents)}</span>
                              <span class="${xe(i.actualNetCents)}">I ${_(i.actualNetCents)}</span>
                            </div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Jahr</th>
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${be.map(i=>`<tr>
                        <td>${i.year}</td>
                        <td>${_(i.effectiveIncomeCents)}</td>
                        <td>${_(i.budgetTotalCents)}</td>
                        <td>${_(i.actualTotalCents)}</td>
                        <td class="${xe(i.plannedNetCents)}">${_(i.plannedNetCents)}</td>
                        <td class="${xe(i.actualNetCents)}">${_(i.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,wa=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,Wa=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${hn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${hn?gt(hn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${hn?"Änderung speichern":"Vorlage speichern"}</button>
          ${hn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(i=>`<tr>
                    <td>${i.name}</td>
                    <td>${_(i.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${i.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${i.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,en=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="annual-variable-fixed-name" type="text" placeholder="z.B. Versicherungsnachzahlung" />
          </label>
          <label>
            Datum
            <input id="annual-variable-fixed-date" type="date" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="annual-variable-fixed-amount" type="number" min="0" step="0.01" placeholder="0.00" />
          </label>
          <button class="btn btn-primary" id="add-annual-variable-fixed-template">Vorlage speichern</button>
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Datum</th><th>Monat (jährlich)</th><th>Betrag (€)</th><th></th></tr>
          </thead>
          <tbody>
            ${h.annualVariableFixedTemplates.map(i=>{const M=Cn(i.dueDateIso),e=M?_e(M.month):"-";return`<tr>
                    <td>${i.name}</td>
                    <td>${i.dueDateIso}</td>
                    <td>${e}</td>
                    <td>${_(i.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${i.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,ta=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",vn=h.topModal==="years"?wa:h.topModal==="fixed"?Wa:h.topModal==="variable-fixed"?en:h.topModal==="dashboard"?lr:"";E.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Qn?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${kr.map(i=>`<option value="${i}" ${h.theme===i?"selected":""}>${Nr(i)}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>

        <div class="top-shortcuts" role="navigation" aria-label="Schnellzugriff">
          <button class="btn" id="open-years-modal" type="button">Jahr hinzufügen</button>
          <button class="btn" id="open-fixed-modal" type="button">Fixe Kosten (zentral)</button>
          <button class="btn" id="open-variable-fixed-modal" type="button">Variable Fixkosten</button>
          <button class="btn" id="open-dashboard-modal" type="button">Dashboard</button>
          <a class="btn" href="#section-food-costs">Essen</a>
          <a class="btn" href="#section-fixed-costs">Fixe</a>
          <a class="btn" href="#section-variable-costs">Variable</a>
          <a class="btn" href="#section-misc-costs">Sonstige</a>
        </div>

        ${h.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${ta}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${ta}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${vn}
                </div>
              </div>
            </div>
          `:""}

        ${h.showUnexportedChangeLogModal?`
            <div class="panel-modal-backdrop" id="unexported-change-log-backdrop" role="dialog" aria-modal="true" aria-label="Ungesicherte Änderungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Ungesicherte Änderungen</h2>
                  <button class="btn btn-quiet" id="unexported-change-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${ba.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${ba.map(i=>`<li><strong>${new Date(i.timestampIso).toLocaleString("de-DE")}</strong><span>${Dn(i.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${_e(h.selectedMonth)} ${o.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${h.years.map(i=>`<option value="${i.year}" ${i.year===h.selectedYear?"selected":""}>${i.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${h.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(i,M)=>M+1).map(i=>`<option value="${i}" ${i===h.selectedMonth?"selected":""}>${_e(i)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card">
            <h3>Auswertung (Monat & Jahr)</h3>
            <div class="chart-grid chart-grid-wide">
              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Budget vs. Ist (Monat)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-actual"></span>Ist</span>
                  </div>
                </header>
                <div class="budget-canvas-grid">
                  ${Un.map(i=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${i.label}"
                            data-budget-cents="${i.budgetCents}"
                            data-actual-cents="${i.actualCents}"
                            role="img"
                            aria-label="${i.label}: Budget ${_(i.budgetCents)} €, Ist ${_(i.actualCents)} €"
                          ></canvas>
                        </div>
                      `).join("")}
                </div>
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Einkommen / Ausgaben / Netto (Monat)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-income"></span>Einkommen</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ausgaben</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Netto</span>
                  </div>
                </header>
                <div class="bar-chart">
                  ${pa.map(i=>{const M=we(Math.abs(i.valueCents),Wn),e=i.valueCents>=0?"+":"",t=i.label==="Netto"?i.valueCents<0?"danger":i.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${i.label}</div>
                          <div class="bar-track" title="${_(i.valueCents)}">
                            <div class="bar ${i.className}" style="width:${M}"></div>
                          </div>
                          <div class="bar-meta"><span class="${t}">${e}${_(i.valueCents)}</span></div>
                        </div>
                      `}).join("")}
                </div>
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Jahresverlauf Gesamtausgaben</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Gesamtausgaben (Budget vs. Ist)">
                      ${T.map(i=>{const M=mt.get(i.month)?.totalBudgetCents??0,e=we(M,va),t=we(i.summary.totalCents,va);return`
                            <div class="spark-bar" title="${_e(i.month)}: Ist ${_(i.summary.totalCents)} € | Budget ${_(M)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${e}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${t}"><span class="spark-bar-fill-value">${_(i.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                            </div>
                          `}).join("")}
                    </div>
                  `:'<p class="muted">Kein Jahr gewählt.</p>'}
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Essen + Ausgehen (Jahr)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Essen und Ausgehen (Budget vs. Ist)">
                      ${T.map(i=>{const M=mt.get(i.month),e=(M?.foodBudgetCents??0)+(M?.goingOutBudgetCents??0),t=i.summary.foodCents+i.summary.goingOutCents,n=we(e,Ia),a=we(t,Ia);return`
                            <div class="spark-bar" title="${_e(i.month)}: Ist ${_(t)} € | Budget ${_(e)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${n}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${a}"><span class="spark-bar-fill-value">${_(t)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                            </div>
                          `}).join("")}
                    </div>
                  `:'<p class="muted">Kein Jahr gewählt.</p>'}
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Fixe Kosten (Jahr)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Fixkosten (Budget vs. Ist)">
                      ${T.map(i=>{const M=mt.get(i.month)?.fixedBudgetCents??0,e=we(M,Qt),t=we(i.summary.fixedCents,Qt);return`
                            <div class="spark-bar" title="${_e(i.month)}: Ist ${_(i.summary.fixedCents)} € | Budget ${_(M)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${e}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${t}"><span class="spark-bar-fill-value">${_(i.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                            </div>
                          `}).join("")}
                    </div>
                  `:'<p class="muted">Kein Jahr gewählt.</p>'}
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Variable Kosten (Jahr)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Variable Kosten (Budget vs. Ist)">
                      ${T.map(i=>{const M=mt.get(i.month)?.variableBudgetCents??0,e=we(M,Hn),t=we(i.summary.variableCents,Hn);return`
                            <div class="spark-bar" title="${_e(i.month)}: Ist ${_(i.summary.variableCents)} € | Budget ${_(M)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${e}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${t}"><span class="spark-bar-fill-value">${_(i.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                            </div>
                          `}).join("")}
                    </div>
                  `:'<p class="muted">Kein Jahr gewählt.</p>'}
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Sonstige (Jahr)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Sonstige (Budget vs. Ist)">
                      ${T.map(i=>{const M=mt.get(i.month)?.miscBudgetCents??0,e=we(M,Xn),t=we(i.summary.miscCents,Xn);return`
                            <div class="spark-bar" title="${_e(i.month)}: Ist ${_(i.summary.miscCents)} € | Budget ${_(M)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${e}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${t}"><span class="spark-bar-fill-value">${_(i.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(i.month).slice(0,3)}</div>
                            </div>
                          `}).join("")}
                    </div>
                  `:'<p class="muted">Kein Jahr gewählt.</p>'}
              </section>
            </div>
            <div class="eval-grid">
              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Einkommen</h4>
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row">
                    <div class="eval-label">Einkommen (erfasst)</div>
                    <div class="eval-value">${_(de)}</div>
                    <div class="eval-value">${_(Ue)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${ge}">${L?_(ht):"-"}</div>
                    <div class="eval-value ${kn}">${o?_(De):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${_(ee)}</div>
                    <div class="eval-value">${_(xt)}</div>
                  </div>
                </div>
              </section>

              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Budgets (geplant)</h4>
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row">
                    <div class="eval-label">Essen</div>
                    <div class="eval-value">${Mt(I,d.foodCents)}</div>
                    <div class="eval-value">${_(Z)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Mt(R,d.goingOutCents)}</div>
                    <div class="eval-value">${_(X)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Mt(K,d.fixedCents)}</div>
                    <div class="eval-value">${_($e)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Mt(H,d.variableCents)}</div>
                    <div class="eval-value">${_(Ye)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Mt(W,d.miscCents)}</div>
                    <div class="eval-value">${_(Te)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Mt(me,d.totalCents)}</div>
                    <div class="eval-value">${_(kt)}</div>
                  </div>
                </div>
              </section>

              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Realkosten (Ist)</h4>
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row">
                    <div class="eval-label">Essen</div>
                    <div class="eval-value ${ga}">${_(d.foodCents)}</div>
                    <div class="eval-value">${_(f.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Xe}">${_(d.goingOutCents)}</div>
                    <div class="eval-value">${_(f.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${ma}">${_(d.fixedCents)}</div>
                    <div class="eval-value">${_(f.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Bn}">${_(d.variableCents)}</div>
                    <div class="eval-value">${_(f.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${_n}">${_(d.miscCents)}</div>
                    <div class="eval-value">${_(f.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${_(d.totalCents)}</div>
                    <div class="eval-value">${_(f.totalCents)}</div>
                  </div>
                </div>
              </section>

              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Salden</h4>
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budget übrig</div>
                    <div class="eval-value ${xe(N)}">${_(N)}</div>
                    <div class="eval-value ${xe(je)}">${_(je)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${xe($n)}">${_($n)}</div>
                    <div class="eval-value ${xe(S)}">${_(S)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${pt}">${_(ot)}</div>
                    <div class="eval-value ${le}">${_(Ge)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${xe(Ce)}">${_(Ce)}</div>
                    <div class="eval-value ${xe(vt)}">${_(vt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Gt}">${He}</div>
                    <div class="eval-value ${ha}">${Le}</div>
                  </div>
                </div>
              </section>
            </div>

            <h3>Jahresvergleich (Monat zu Monat)</h3>
            <table>
              <thead>
                <tr>
                  <th>Monat</th>
                  <th>Essen (€)</th>
                  <th>Ausgehen (€)</th>
                  <th>Fixe Kosten (€)</th>
                  <th>Variable (€)</th>
                  <th>Sonstige (€)</th>
                  <th>Gesamt (€)</th>
                  <th>Budget gesamt (€)</th>
                  <th>Kalkulierter Saldo (€)</th>
                </tr>
              </thead>
              <tbody>
                ${T.map((i,M,e)=>{const t=o?ze.get(ie(o.year,i.month)):void 0,n=t?.plannedBudgetCents??0,a=t?.netCents??0,r=a<0?"danger":a>0?"budget-under":"",s=e[M-1],l=s?.summary.foodCents??null,u=s?.summary.goingOutCents??null,m=s?.summary.fixedCents??null,k=s?.summary.variableCents??null,g=s?.summary.miscCents??null,v=s?.summary.totalCents??null,C=o&&s?ze.get(ie(o.year,s.month))?.plannedBudgetCents??0:null,x=l===null?null:i.summary.foodCents-l,y=u===null?null:i.summary.goingOutCents-u,b=m===null?null:i.summary.fixedCents-m,$=k===null?null:i.summary.variableCents-k,B=g===null?null:i.summary.miscCents-g,w=v===null?null:i.summary.totalCents-v,P=C===null?null:n-C,O=j=>j===null?"muted":j>0?"danger":j<0?"budget-under":"muted",q=j=>j===null?"muted":j>0?"danger":j<0?"budget-under":"muted",F=j=>j===null?"(Δ -)":`(Δ ${j>0?"+":""}${_(j)})`,A=o&&s?ze.get(ie(o.year,s.month))?.netCents??0:null,Y=A===null?null:a-A,z=Y===null?"(Δ -)":`(Δ ${Y>0?"+":""}${_(Y)})`,D=Y===null?"muted":Y<0?"danger":Y>0?"budget-under":"muted";return`<tr>
                  <td>${_e(i.month)}</td>
                  <td>${_(i.summary.foodCents)} <span class="${O(x)}">${F(x)}</span></td>
                  <td>${_(i.summary.goingOutCents)} <span class="${O(y)}">${F(y)}</span></td>
                  <td>${_(i.summary.fixedCents)} <span class="${O(b)}">${F(b)}</span></td>
                  <td>${_(i.summary.variableCents)} <span class="${O($)}">${F($)}</span></td>
                  <td>${_(i.summary.miscCents)} <span class="${O(B)}">${F(B)}</span></td>
                  <td>${_(i.summary.totalCents)} <span class="${O(w)}">${F(w)}</span></td>
                  <td>${_(n)} <span class="${q(P)}">${F(P)}</span></td>
                  <td class="${r}">${_(a)} <span class="${D}">${z}</span></td>
                </tr>`}).join("")}
              </tbody>
            </table>
          </article>

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${c?"":"disabled"} />
              </label>
              <label>
                Herkunft
                <select id="income-source" ${c?"":"disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${c?"":"disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${c?"":"disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${c?"":"disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${c?`<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${ge}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${gt(ht)}" />
                    </td>
                    <td>-</td>
                  </tr>${c.incomes.map(i=>`<tr>
                    <td>${i.description}</td>
                    <td>
                      <select data-income-source="${i.id}">
                        <option value="" ${i.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${i.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${i.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${i.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${_(i.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${i.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${_(de)} €</strong>
                </div>
                <div class="column-overview-row ${ge}">
                  <span>Übernahme Vormonat</span>
                  <strong>${c?`${_(ht)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${_(ee)} €</strong>
                </div>
                <div class="column-overview-row ${Fe}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${_(wt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Re(I,d.foodCents)}
                ${Re(R,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${_(Ee)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${_(Ne)} €</strong>
                  </div>
                  <div class="column-overview-row ${Ut}">
                    <span>Diff</span>
                    <strong>${_(Be)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${gt(I)}" ${c?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${gt(R)}" ${c?"":"disabled"} />
                </label>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${c?c.days.map(i=>{const M=i.foodCents>0,e=i.goingOutCents>0,t=`${i.isoDate===p?"today-row":""} ${M||e?"day-has-entry":""}`.trim(),n=`amount-input ${M?"day-input-has-value":""}`.trim(),a=`amount-input ${e?"day-input-has-value":""}`.trim();return`<tr class="${t}">
                      <td>${new Date(i.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${n}" data-day-food="${i.isoDate}" type="number" min="0" step="0.01" value="${gt(i.foodCents)}" /></td>
                      <td><input class="${a}" data-day-going="${i.isoDate}" type="number" min="0" step="0.01" value="${gt(i.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Re(K,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${gt(K)}" ${c?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${c?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${c?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${c?"":"disabled"}>Position anlegen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${c?c.fixedCosts.map(i=>`<tr>
                    <td>${i.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${i.id}" type="number" min="0" step="0.01" value="${gt(i.plannedCents)}" /></td>
                    <td class="${Je(i.actualCents,i.plannedCents)}"><input class="amount-input" data-fixed-actual="${i.id}" type="number" min="0" step="0.01" value="${gt(i.actualCents)}" /></td>
                    <td class="${Je(i.actualCents,i.plannedCents)}">${_(i.actualCents-i.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${i.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Re(H,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${gt(H)}" ${c?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${c?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${c?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${c?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-variable-position-recurring" ${c?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${c?c.variablePositions.map(i=>`<tr>
                    <td>${i.name}${i.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${i.id}" type="number" min="0" step="0.01" value="${gt(i.budgetCents)}" /></td>
                    <td class="${Je(i.actualCents,i.budgetCents)}"><input class="amount-input" data-variable-position-actual="${i.id}" type="number" min="0" step="0.01" value="${gt(i.actualCents)}" /></td>
                    <td class="${Je(i.actualCents,i.budgetCents)}">${_(i.actualCents-i.budgetCents)}</td>
                    <td>
                      <button class="btn" data-move-variable-position-next="${i.id}">Nächster Monat</button>
                      <button class="btn btn-quiet" data-remove-variable-position="${i.id}">Löschen</button>
                    </td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-misc-costs">
              <h3>4) Sonstige (unter 30€)</h3>
              ${Re(W,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${gt(W)}" ${c?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${c?"":"disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${c?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${c?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${c?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${c?c.miscCosts.map(i=>`<tr>
                    <td>${i.description}</td>
                    <td>${_(i.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-misc="${i.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>
          </div>
        </section>

        <section class="card grid">
          <h2>Lokale Datensicherung</h2>
          <div class="inline">
            <button class="btn btn-primary" id="backup-export">Backup exportieren (JSON)</button>
            <label>
              Backup importieren (JSON)
              <input id="backup-import" type="file" accept="application/json" />
            </label>
          </div>
          <p class="muted">Letztes verwendetes Backup: ${Na}</p>
          <p class="muted">Die Daten bleiben lokal im Browser (IndexedDB). Zusätzlich kannst du Backups als Datei sichern und später importieren.</p>
        </section>

        <button
          id="scroll-up-btn"
          class="scroll-up-btn"
          type="button"
          aria-label="Nach oben scrollen"
          title="Nach oben"
        >
          ↑
        </button>
      </div>
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal)),fa(),tt(),tn()}function fa(){const o=E.querySelector("#theme-select"),c=E.querySelector("#open-years-modal"),p=E.querySelector("#open-fixed-modal"),d=E.querySelector("#open-variable-fixed-modal"),f=E.querySelector("#open-dashboard-modal"),T=E.querySelector("#panel-modal-close"),I=E.querySelector("#panel-modal-backdrop"),R=E.querySelector("#open-unexported-change-log"),K=E.querySelector("#unexported-change-log-close"),H=E.querySelector("#unexported-change-log-backdrop"),W=E.querySelector("#new-year"),Z=E.querySelector("#create-year"),X=E.querySelector("#year-select"),$e=E.querySelector("#month-select");o?.addEventListener("change",()=>{const S=o.value;xr(S)&&jt(S)}),c?.addEventListener("click",()=>{ut("years")}),p?.addEventListener("click",()=>{ut("fixed")}),d?.addEventListener("click",()=>{ut("variable-fixed")}),f?.addEventListener("click",()=>{ut("dashboard")}),R?.addEventListener("click",()=>{Qa()}),K?.addEventListener("click",()=>{aa()}),H?.addEventListener("click",S=>{S.target===H&&aa()}),E.querySelectorAll("[data-dashboard-tab]").forEach(S=>{S.addEventListener("click",()=>{const N=S.dataset.dashboardTab;N!=="year"&&N!=="food"&&N!=="all"||(h.dashboardTab=N,te())})});const Ye=E.querySelector("#dashboard-year-select");Ye?.addEventListener("change",()=>{const S=Number.parseInt(Ye.value,10);Number.isInteger(S)&&(h.dashboardYear=S,te())}),T?.addEventListener("click",()=>{Bt()}),I?.addEventListener("click",S=>{S.target===I&&Bt()}),h.topModal&&window.setTimeout(()=>{T?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{K?.focus()},0),Z?.addEventListener("click",async()=>{const S=Number.parseInt(W?.value??"",10);if(!Number.isInteger(S)){alert("Bitte gültiges Jahr eingeben.");return}await Ht(S)}),X?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(X.value,10),h.selectedMonth=Lt(),te()}),$e?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt($e.value,10),te()});const Te=E.querySelector("#fixed-template-name"),de=E.querySelector("#fixed-template-amount"),ft=E.querySelector("#add-fixed-template"),ze=E.querySelector("#cancel-fixed-template-edit"),it=E.querySelector("#annual-variable-fixed-name"),Ct=E.querySelector("#annual-variable-fixed-date"),ht=E.querySelector("#annual-variable-fixed-amount"),L=E.querySelector("#add-annual-variable-fixed-template");ft?.addEventListener("click",async()=>{const S=Te?.value??"",N=Pe(de?.value??"0");await ca(S,N),Te&&(Te.value=""),de&&(de.value="")}),ze?.addEventListener("click",()=>{ar()}),L?.addEventListener("click",async()=>{const S=it?.value??"",N=Ct?.value??"",je=Pe(ht?.value??"0");await un(S,N,je),it&&(it.value=""),Ct&&(Ct.value=""),ht&&(ht.value="")}),E.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(S=>{S.addEventListener("click",async()=>{const N=S.dataset.removeAnnualVariableFixedTemplate;N&&await da(N)})}),E.querySelectorAll("[data-edit-fixed-template]").forEach(S=>{S.addEventListener("click",()=>{const N=S.dataset.editFixedTemplate;N&&nr(N)})}),E.querySelectorAll("[data-remove-fixed-template]").forEach(S=>{S.addEventListener("click",async()=>{const N=S.dataset.removeFixedTemplate;N&&await ln(N)})}),E.querySelectorAll("[data-day-food]").forEach(S=>{S.addEventListener("click",N=>{N.preventDefault(),S.blur(),ct(S)}),S.addEventListener("change",async()=>{const N=S.dataset.dayFood;N&&await xn(N,"foodCents",Pe(S.value))})}),E.querySelectorAll("[data-day-going]").forEach(S=>{S.addEventListener("click",N=>{N.preventDefault(),S.blur(),ct(S)}),S.addEventListener("change",async()=>{const N=S.dataset.dayGoing;N&&await xn(N,"goingOutCents",Pe(S.value))})}),E.querySelectorAll("[data-fixed-actual]").forEach(S=>{S.addEventListener("click",N=>{N.preventDefault(),S.blur(),ct(S)}),S.addEventListener("change",async()=>{const N=S.dataset.fixedActual;N&&await ke(N,Pe(S.value))})}),E.querySelectorAll("[data-fixed-planned]").forEach(S=>{S.addEventListener("click",N=>{N.preventDefault(),S.blur(),ct(S)}),S.addEventListener("change",async()=>{const N=S.dataset.fixedPlanned;N&&await qe(N,Pe(S.value))})});const ee=E.querySelector("#fixed-budget");ee?.addEventListener("click",S=>{S.preventDefault(),ee.blur(),ct(ee)}),ee?.addEventListener("change",async()=>{await jn(Pe(ee.value))});const Tt=E.querySelector("#food-budget");Tt?.addEventListener("click",S=>{S.preventDefault(),Tt.blur(),ct(Tt)}),Tt?.addEventListener("change",async()=>{await Rn(Pe(Tt.value))});const wt=E.querySelector("#going-out-budget");wt?.addEventListener("click",S=>{S.preventDefault(),wt.blur(),ct(wt)}),wt?.addEventListener("change",async()=>{await sr(Pe(wt.value))});const ot=E.querySelector("#misc-budget");ot?.addEventListener("click",S=>{S.preventDefault(),ot.blur(),ct(ot)}),ot?.addEventListener("change",async()=>{await Vt(Pe(ot.value))});const Ce=E.querySelector("#variable-budget");Ce?.addEventListener("click",S=>{S.preventDefault(),Ce.blur(),ct(Ce)}),Ce?.addEventListener("change",async()=>{await cn(Pe(Ce.value))});const He=E.querySelector("#variable-position-name"),ge=E.querySelector("#variable-position-budget"),Fe=E.querySelector("#add-variable-position"),pt=E.querySelector("#add-variable-position-recurring"),Ue=E.querySelector("#misc-description"),oe=E.querySelector("#misc-amount"),De=E.querySelector("#add-misc"),xt=E.querySelector("#add-misc-recurring"),Ge=E.querySelector("#income-description"),vt=E.querySelector("#income-source"),Le=E.querySelector("#income-amount"),kn=E.querySelector("#add-income"),le=E.querySelector("#add-income-recurring"),me=E.querySelector("#fixed-cost-name"),Ee=E.querySelector("#fixed-cost-budget"),Ne=E.querySelector("#add-fixed-cost"),Be=E.querySelector("#carryover-override");Be?.addEventListener("click",S=>{S.preventDefault(),Be.blur(),ct(Be)}),Be?.addEventListener("change",async()=>{const S=Be.value;if(!S.trim()){await wn(null);return}await wn(Pe(S))}),Ne?.addEventListener("click",async()=>{const S=Pe(Ee?.value??"0");await rr(me?.value??"",S),me&&(me.value=""),Ee&&(Ee.value="")}),Fe?.addEventListener("click",async()=>{const S=Pe(ge?.value??"0");await Oa(He?.value??"",S,!1),He&&(He.value=""),ge&&(ge.value="")}),pt?.addEventListener("click",async()=>{const S=Pe(ge?.value??"0");await Oa(He?.value??"",S,!0),He&&(He.value=""),ge&&(ge.value="")}),De?.addEventListener("click",async()=>{const S=Pe(oe?.value??"0");await Vn(Ue?.value??"",S,!1),Ue&&(Ue.value=""),oe&&(oe.value="")}),xt?.addEventListener("click",async()=>{const S=Pe(oe?.value??"0");await Vn(Ue?.value??"",S,!0),Ue&&(Ue.value=""),oe&&(oe.value="")}),kn?.addEventListener("click",async()=>{const S=Pe(Le?.value??"0"),N=vt?.value,je=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await zt(Ge?.value??"",S,je,!1),Ge&&(Ge.value=""),Le&&(Le.value=""),vt&&(vt.value="salary")}),le?.addEventListener("click",async()=>{const S=Pe(Le?.value??"0"),N=vt?.value,je=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await zt(Ge?.value??"",S,je,!0),Ge&&(Ge.value=""),Le&&(Le.value=""),vt&&(vt.value="salary")}),E.querySelectorAll("[data-income-source]").forEach(S=>{S.addEventListener("change",async()=>{const N=S.dataset.incomeSource;if(!N)return;const je=S.value;await Kt(N,je==="balance"||je==="fresh"||je==="salary"?je:void 0)})}),E.querySelectorAll("[data-variable-position-budget]").forEach(S=>{S.addEventListener("click",N=>{N.preventDefault(),S.blur(),ct(S)}),S.addEventListener("change",async()=>{const N=S.dataset.variablePositionBudget;N&&await Aa(N,Pe(S.value))})}),E.querySelectorAll("[data-variable-position-actual]").forEach(S=>{S.addEventListener("click",N=>{N.preventDefault(),S.blur(),ct(S)}),S.addEventListener("change",async()=>{const N=S.dataset.variablePositionActual;N&&await Yt(N,Pe(S.value))})}),E.querySelectorAll("[data-remove-variable-position]").forEach(S=>{S.addEventListener("click",async()=>{const N=S.dataset.removeVariablePosition;N&&await Xt(N)})}),E.querySelectorAll("[data-move-variable-position-next]").forEach(S=>{S.addEventListener("click",async()=>{const N=S.dataset.moveVariablePositionNext;N&&await Fa(N)})}),E.querySelectorAll("[data-remove-fixed]").forEach(S=>{S.addEventListener("click",async()=>{const N=S.dataset.removeFixed;N&&await Ln(N)})}),E.querySelectorAll("[data-remove-income]").forEach(S=>{S.addEventListener("click",async()=>{const N=S.dataset.removeIncome;N&&await Da(N)})}),E.querySelectorAll("[data-remove-misc]").forEach(S=>{S.addEventListener("click",async()=>{const N=S.dataset.removeMisc;N&&await Me(N)})});const Ut=E.querySelector("#backup-export"),kt=E.querySelector("#backup-import");E.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Ut?.addEventListener("click",async()=>{await dn()}),kt?.addEventListener("change",async()=>{const S=kt.files?.[0];if(S){try{await Yn(S)}catch(N){console.error("Backup-Import fehlgeschlagen",N),ye("Backup konnte nicht importiert werden.","error")}kt.value=""}})}return{init:ia}}const qr="modulepreload",Lr=function(E){return"/habu26/"+E},wr={},jr=function(h,Se,U){let ue=Promise.resolve();if(Se&&Se.length>0){let Qe=function(Ze){return Promise.all(Ze.map(re=>Promise.resolve(re).then(et=>({status:"fulfilled",value:et}),et=>({status:"rejected",reason:et}))))};var pe=Qe;document.getElementsByTagName("link");const ae=document.querySelector("meta[property=csp-nonce]"),ce=ae?.nonce||ae?.getAttribute("nonce");ue=Qe(Se.map(Ze=>{if(Ze=Lr(Ze),Ze in wr)return;wr[Ze]=!0;const re=Ze.endsWith(".css"),et=re?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ze}"]${et}`))return;const tt=document.createElement("link");if(tt.rel=re?"stylesheet":qr,re||(tt.as="script"),tt.crossOrigin="",tt.href=Ze,ce&&tt.setAttribute("nonce",ce),document.head.appendChild(tt),re)return new Promise((ut,Bt)=>{tt.addEventListener("load",ut),tt.addEventListener("error",()=>Bt(new Error(`Unable to preload CSS for ${Ze}`)))})}))}function ne(ae){const ce=new Event("vite:preloadError",{cancelable:!0});if(ce.payload=ae,window.dispatchEvent(ce),!ce.defaultPrevented)throw ae}return ue.then(ae=>{for(const ce of ae||[])ce.status==="rejected"&&ne(ce.reason);return h().catch(ne)})};function Rr(E={}){const{immediate:h=!1,onNeedRefresh:Se,onOfflineReady:U,onRegistered:ue,onRegisteredSW:ne,onRegisterError:pe}=E;let ae,ce;const Qe=async(re=!0)=>{await ce};async function Ze(){if("serviceWorker"in navigator){if(ae=await jr(async()=>{const{Workbox:re}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:re}},[]).then(({Workbox:re})=>new re("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(re=>{pe?.(re)}),!ae)return;ae.addEventListener("activated",re=>{(re.isUpdate||re.isExternal)&&window.location.reload()}),ae.addEventListener("installed",re=>{re.isUpdate||U?.()}),ae.register({immediate:h}).then(re=>{ne?ne("/habu26/sw.js",re):ue?.(re)}).catch(re=>{pe?.(re)})}}return ce=Ze(),Qe}function Vr(){Rr({immediate:!0})}const $r=document.getElementById("app");if(!$r)throw new Error("App-Container nicht gefunden.");Kr($r).init();Vr();
