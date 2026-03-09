(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const ue of document.querySelectorAll('link[rel="modulepreload"]'))Y(ue);new MutationObserver(ue=>{for(const ee of ue)if(ee.type==="childList")for(const fe of ee.addedNodes)fe.tagName==="LINK"&&fe.rel==="modulepreload"&&Y(fe)}).observe(document,{childList:!0,subtree:!0});function Be(ue){const ee={};return ue.integrity&&(ee.integrity=ue.integrity),ue.referrerPolicy&&(ee.referrerPolicy=ue.referrerPolicy),ue.crossOrigin==="use-credentials"?ee.credentials="include":ue.crossOrigin==="anonymous"?ee.credentials="omit":ee.credentials="same-origin",ee}function Y(ue){if(ue.ep)return;ue.ep=!0;const ee=Be(ue);fetch(ue.href,ee)}})();const Nr=[1,2,3,4,5,6,7,8,9,10,11,12];function yr(){return new Date().toISOString()}function Bt(E){const v=Math.random().toString(36).slice(2,10);return`${E}_${Date.now()}_${v}`}function Kr(E,v){const Be=new Date(E,v,0).getDate(),Y=[];for(let ue=1;ue<=Be;ue+=1){const ee=new Date(Date.UTC(E,v-1,ue));Y.push({isoDate:ee.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Y}function qr(E){return E.map(v=>({id:Bt("fixed"),templateId:v.id,name:v.name,plannedCents:v.plannedCents,actualCents:0}))}function Br(E,v,Be){const Y=v.reduce((ee,fe)=>ee+fe.plannedCents,0),ue=Nr.map(ee=>({month:ee,days:Kr(E,ee),foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:qr(v),fixedBudgetCents:Y,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:E,createdAt:yr(),templateVersion:Be,months:ue}}function Sr(E,v){return{id:Bt("expense"),description:E,amountCents:v,createdAt:yr()}}function _r(E,v,Be){const Y={id:Bt("income"),description:E,amountCents:v,createdAt:yr()};return Be?{...Y,incomeSource:Be}:Y}var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jr(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var er={exports:{}},Rr=er.exports,Er;function Vr(){return Er||(Er=1,(function(E,v){((Be,Y)=>{E.exports=Y()})(Rr,function(){var Be=function(e,t){return(Be=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,r){n.__proto__=r}:function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}))(e,t)},Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ue(e,t,n){for(var r,s=0,i=t.length;s<i;s++)!r&&s in t||((r=r||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))}var ee=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Lr,fe=Object.keys,te=Array.isArray;function ce(e,t){return typeof t=="object"&&fe(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ee.Promise||(ee.Promise=Promise);var He=Object.getPrototypeOf,Xe={}.hasOwnProperty;function re(e,t){return Xe.call(e,t)}function Qe(e,t){typeof t=="function"&&(t=t(He(e))),(typeof Reflect>"u"?fe:Reflect.ownKeys)(t).forEach(function(n){ct(e,n,t[n])})}var Ze=Object.defineProperty;function ct(e,t,n,r){Ze(e,t,ce(n&&re(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function St(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ct(e.prototype,"constructor",e),{extend:Qe.bind(null,e.prototype)}}}}var ar=Object.getOwnPropertyDescriptor,da=[].slice;function Rn(e,t,n){return da.call(e,t,n)}function Fa(e,t){return t(e)}function nn(e){if(!e)throw new Error("Assertion Failed")}function Da(e){ee.setImmediate?setImmediate(e):setTimeout(e,0)}function _t(e,t){if(typeof t=="string"&&re(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],r=0,s=t.length;r<s;++r){var i=_t(e,t[r]);n.push(i)}return n}var l,c=t.indexOf(".");return c===-1||(l=e[t.substr(0,c)])==null?void 0:_t(l,t.substr(c+1))}function at(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){nn(typeof n!="string"&&"length"in n);for(var r=0,s=t.length;r<s;++r)at(e,t[r],n[r])}else{var i,l,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?te(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:at(l=(l=e[i])&&re(e,i)?l:e[i]={},c,n)):n===void 0?te(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function It(e){var t,n={};for(t in e)re(e,t)&&(n[t]=e[t]);return n}var Ia=[].concat;function dt(e){return Ia.apply([],e)}var Pt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(dt([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ee[e]}),be=new Set(Pt.map(function(e){return ee[e]})),Lt=null;function Xt(e){return Lt=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var r=Lt.get(n);if(r)return r;if(te(n)){r=[],Lt.set(n,r);for(var s=0,i=n.length;s<i;++s)r.push(t(n[s]))}else if(be.has(n.constructor))r=n;else{var l,c=He(n);for(l in r=c===Object.prototype?{}:Object.create(c),Lt.set(n,r),n)re(n,l)&&(r[l]=t(n[l]))}return r})(e),Lt=null,e}var Na={}.toString;function fa(e){return Na.call(e).slice(8,-1)}var Vn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",rr=typeof Vn=="symbol"?function(e){var t;return e!=null&&(t=e[Vn])&&t.apply(e)}:function(){return null};function jt(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var an={};function Et(e){var t,n,r,s;if(arguments.length===1){if(te(e))return e.slice();if(this===an&&typeof e=="string")return[e];if(s=rr(e))for(n=[];!(r=s.next()).done;)n.push(r.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var ha=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Pt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Re=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Pt),sr={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function rn(e,t){this.name=e,this.message=t}function Ka(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,r,s){return s.indexOf(n)===r}).join(`
`)}function wn(e,t,n,r){this.failures=t,this.failedKeys=r,this.successCount=n,this.message=Ka(e,t)}function sn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ka(e,this.failures)}St(rn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),St(wn).from(rn),St(sn).from(rn);var pa=Re.reduce(function(e,t){return e[t]=t+"Error",e},{}),va=rn,G=Re.reduce(function(e,t){var n=t+"Error";function r(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=sr[t]||n,this.inner=null)}return St(r).from(va),e[t]=r,e},{}),kn=(G.Syntax=SyntaxError,G.Type=TypeError,G.Range=RangeError,Pt.reduce(function(e,t){return e[t+"Error"]=G[t],e},{}));Pt=Re.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=G[t]),e},{});function he(){}function Rt(e){return e}function Ke(e,t){return e==null||e===Rt?t:function(n){return t(e(n))}}function Mt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Yn(e,t){return e===he?t:function(){var n=e.apply(this,arguments),r=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Mt(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Mt(s,this.onerror):s),i!==void 0?i:n}}function zn(e,t){return e===he?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Mt(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Mt(r,this.onerror):r)}}function ir(e,t){return e===he?t:function(s){var r=e.apply(this,arguments),s=(ce(s,r),this.onsuccess),i=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Mt(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Mt(i,this.onerror):i),r===void 0?l===void 0?void 0:l:ce(r,l)}}function ma(e,t){return e===he?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function $n(e,t){return e===he?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(r,i)})}return t.apply(this,arguments)}}Pt.ModifyError=wn,Pt.DexieError=rn,Pt.BulkError=sn;var bt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function qa(e){bt=e}var We={},La=100,Ot=typeof Promise>"u"?[]:(Re=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ot=crypto.subtle.digest("SHA-512",new Uint8Array([0])),He(Ot),Re]:[Re,He(Re),Re]),Re=Ot[0],yn=Ot[1],yn=yn&&yn.then,Qt=Re&&Re.constructor,on=!!Ot[2],Bn=function(e,t){ln.push([e,t]),Te&&(queueMicrotask(lr),Te=!1)},Un=!0,Te=!0,Ve=[],se=[],Sn=Rt,Nt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:he,pgp:!1,env:{},finalize:he},z=Nt,ln=[],rt=0,ft=[];function V(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=z;if(typeof e!="function"){if(e!==We)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ga(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(r,s){try{s(function(i){if(r._state===null){if(i===r)throw new TypeError("A promise cannot be resolved with itself.");var l=r._lib&&un();i&&typeof i.then=="function"?n(r,function(c,b){i instanceof V?i._then(c,b):i.then(c,b)}):(r._state=!0,r._value=i,Ra(r)),l&&cn()}},ga.bind(null,r))}catch(i){ga(r,i)}})(this,e)}var Gn={get:function(){var e=z,t=Hn;function n(r,s){var i=this,l=!e.global&&(e!==z||t!==Hn),c=l&&!yt(),b=new V(function(B,x){ba(i,new ja(za(r,e,l,c),za(s,e,l,c),B,x,e))});return this._consoleTask&&(b._consoleTask=this._consoleTask),b}return n.prototype=We,n},set:function(e){ct(this,"then",e&&e.prototype===We?Gn:{get:function(){return e},set:Gn.set})}};function ja(e,t,n,r,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=r,this.psd=s}function ga(e,t){var n,r;se.push(t),e._state===null&&(n=e._lib&&un(),t=Sn(t),e._state=!1,e._value=t,r=e,Ve.some(function(s){return s._value===r._value})||Ve.push(r),Ra(e),n)&&cn()}function Ra(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)ba(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),rt===0&&(++rt,Bn(function(){--rt==0&&ya()},[]))}function ba(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++rt,Bn(or,[n,e,t])}}function or(e,t,n){try{var r,s=t._value;!t._state&&se.length&&(se=[]),r=bt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||se.indexOf(s)!==-1||(i=>{for(var l=Ve.length;l;)if(Ve[--l]._value===i._value)return Ve.splice(l,1)})(t),n.resolve(r)}catch(i){n.reject(i)}finally{--rt==0&&ya(),--n.psd.ref||n.psd.finalize()}}function lr(){Zt(Nt,function(){un()&&cn()})}function un(){var e=Un;return Te=Un=!1,e}function cn(){var e,t,n;do for(;0<ln.length;)for(e=ln,ln=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}while(0<ln.length);Te=Un=!0}function ya(){for(var e=Ve,t=(Ve=[],e.forEach(function(r){r._PSD.onunhandled.call(null,r._value,r)}),ft.slice(0)),n=t.length;n;)t[--n]()}function _n(e){return new V(We,!1,e)}function ye(e,t){var n=z;return function(){var r=un(),s=z;try{return Yt(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Yt(s,!1),r&&cn()}}}Qe(V.prototype,{then:Gn,_then:function(e,t){ba(this,new ja(null,null,e,t,z))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(r){return(r instanceof t?n:_n)(r)}):this.then(null,function(r){return(r&&r.name===t?n:_n)(r)}))},finally:function(e){return this.then(function(t){return V.resolve(e()).then(function(){return t})},function(t){return V.resolve(e()).then(function(){return _n(t)})})},timeout:function(e,t){var n=this;return e<1/0?new V(function(r,s){var i=setTimeout(function(){return s(new G.Timeout(t))},e);n.then(r,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ct(V.prototype,Symbol.toStringTag,"Dexie.Promise"),Nt.env=Ya(),Qe(V,{all:function(){var e=Et.apply(null,arguments).map(En);return new V(function(t,n){e.length===0&&t([]);var r=e.length;e.forEach(function(s,i){return V.resolve(s).then(function(l){e[i]=l,--r||t(e)},n)})})},resolve:function(e){return e instanceof V?e:e&&typeof e.then=="function"?new V(function(t,n){e.then(t,n)}):new V(We,!0,e)},reject:_n,race:function(){var e=Et.apply(null,arguments).map(En);return new V(function(t,n){e.map(function(r){return V.resolve(r).then(t,n)})})},PSD:{get:function(){return z},set:function(e){return z=e}},totalEchoes:{get:function(){return Hn}},newPSD:Vt,usePSD:Zt,scheduler:{get:function(){return Bn},set:function(e){Bn=e}},rejectionMapper:{get:function(){return Sn},set:function(e){Sn=e}},follow:function(e,t){return new V(function(n,r){return Vt(function(s,i){var l=z;l.unhandleds=[],l.onunhandled=i,l.finalize=Mt(function(){var c,b=this;c=function(){b.unhandleds.length===0?s():i(b.unhandleds[0])},ft.push(function B(){c(),ft.splice(ft.indexOf(B),1)}),++rt,Bn(function(){--rt==0&&ya()},[])},l.finalize),e()},t,n,r)})}}),Qt&&(Qt.allSettled&&ct(V,"allSettled",function(){var e=Et.apply(null,arguments).map(En);return new V(function(t){e.length===0&&t([]);var n=e.length,r=new Array(n);e.forEach(function(s,i){return V.resolve(s).then(function(l){return r[i]={status:"fulfilled",value:l}},function(l){return r[i]={status:"rejected",reason:l}}).then(function(){return--n||t(r)})})})}),Qt.any&&typeof AggregateError<"u"&&ct(V,"any",function(){var e=Et.apply(null,arguments).map(En);return new V(function(t,n){e.length===0&&n(new AggregateError([]));var r=e.length,s=new Array(r);e.forEach(function(i,l){return V.resolve(i).then(function(c){return t(c)},function(c){s[l]=c,--r||n(new AggregateError(s))})})})}),Qt.withResolvers)&&(V.withResolvers=Qt.withResolvers);var qe={awaits:0,echoes:0,id:0},ur=0,Wn=[],Jn=0,Hn=0,cr=0;function Vt(e,l,n,r){var s=z,i=Object.create(s),l=(i.parent=s,i.ref=0,i.global=!1,i.id=++cr,Nt.env,i.env=on?{Promise:V,PromiseProp:{value:V,configurable:!0,writable:!0},all:V.all,race:V.race,allSettled:V.allSettled,any:V.any,resolve:V.resolve,reject:V.reject}:{},l&&ce(i,l),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},Zt(i,e,n,r));return i.ref===0&&i.finalize(),l}function dn(){return qe.id||(qe.id=++ur),++qe.awaits,qe.echoes+=La,qe.id}function yt(){return!!qe.awaits&&(--qe.awaits==0&&(qe.id=0),qe.echoes=qe.awaits*La,!0)}function En(e){return qe.echoes&&e&&e.constructor===Qt?(dn(),e.then(function(t){return yt(),t},function(t){return yt(),Me(t)})):e}function Va(){var e=Wn[Wn.length-1];Wn.pop(),Yt(e,!1)}function Yt(e,t){var n,r,s=z;(t?!qe.echoes||Jn++&&e===z:!Jn||--Jn&&e===z)||queueMicrotask(t?(function(i){++Hn,qe.echoes&&--qe.echoes!=0||(qe.echoes=qe.awaits=qe.id=0),Wn.push(z),Yt(i,!0)}).bind(null,e):Va),e!==z&&(z=e,s===Nt&&(Nt.env=Ya()),on)&&(n=Nt.env.Promise,r=e.env,s.global||e.global)&&(Object.defineProperty(ee,"Promise",r.PromiseProp),n.all=r.all,n.race=r.race,n.resolve=r.resolve,n.reject=r.reject,r.allSettled&&(n.allSettled=r.allSettled),r.any)&&(n.any=r.any)}function Ya(){var e=ee.Promise;return on?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ee,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Zt(e,t,n,r,s){var i=z;try{return Yt(e,!0),t(n,r,s)}finally{Yt(i,!1)}}function za(e,t,n,r){return typeof e!="function"?e:function(){var s=z;n&&dn(),Yt(t,!0);try{return e.apply(this,arguments)}finally{Yt(s,!1),r&&queueMicrotask(yt)}}}function Xn(e){Promise===Qt&&qe.echoes===0?Jn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+yn).indexOf("[native code]")===-1&&(dn=yt=he);var Me=V.reject,zt="￿",Kt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ua="String expected.",fn=[],Qn="__dbnames",Z="readonly",Ca="readwrite";function o(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var d={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function m(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=Xt(t))[e],t}}function h(){throw G.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function p(e,t){try{var n=M(e),r=M(t);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=I(e),i=I(t),l=s.length,c=i.length,b=l<c?l:c,B=0;B<b;++B)if(s[B]!==i[B])return s[B]<i[B]?-1:1;return l===c?0:l<c?-1:1;case"Array":for(var x=e,g=t,w=x.length,k=g.length,y=w<k?w:k,C=0;C<y;++C){var a=p(x[C],g[C]);if(a!==0)return a}return w===k?0:w<k?-1:1}}catch{}return NaN}function M(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=fa(e))==="ArrayBuffer")?"binary":t}function I(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function R(e,t,n){var r=e.schema.yProps;return r?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(r.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}J.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(te(n))return ue(ue([],te(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var r=t.remove;if(te(r))return te(e)?e.filter(function(s){return!r.includes(s)}).sort():[];if(typeof r=="number")return Number(e)-r;if(typeof r=="bigint")try{return BigInt(e)-r}catch{return BigInt(0)-r}throw new TypeError("Invalid subtrahend ".concat(r))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var K=J;function J(e){this["@@propmod"]=e}function U(e,t){for(var n=fe(t),r=n.length,s=!1,i=0;i<r;++i){var l=n[i],c=t[l],b=_t(e,l);c instanceof K?(at(e,l,c.execute(b)),s=!0):b!==c&&(at(e,l,c),s=!0)}return s}H.prototype._trans=function(e,t,n){var r=this._tx||z.trans,s=this.name,i=bt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function l(B,x,g){if(g.schema[s])return t(g.idbtrans,g);throw new G.NotFound("Table "+s+" not part of transaction")}var c=un();try{var b=r&&r.db._novip===this.db._novip?r===z.trans?r._promise(e,l,n):Vt(function(){return r._promise(e,l,n)},{trans:r,transless:z.transless||z}):(function B(x,g,w,k){if(x.idbdb&&(x._state.openComplete||z.letThrough||x._vip)){var y=x._createTransaction(g,w,x._dbSchema);try{y.create(),x._state.PR1398_maxLoop=3}catch(C){return C.name===pa.InvalidState&&x.isOpen()&&0<--x._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),x.close({disableAutoOpen:!1}),x.open().then(function(){return B(x,g,w,k)})):Me(C)}return y._promise(g,function(C,a){return Vt(function(){return z.trans=y,k(C,a,y)})}).then(function(C){if(g==="readwrite")try{y.idbtrans.commit()}catch{}return g==="readonly"?C:y._completion.then(function(){return C})})}if(x._state.openComplete)return Me(new G.DatabaseClosed(x._state.dbOpenError));if(!x._state.isBeingOpened){if(!x._state.autoOpen)return Me(new G.DatabaseClosed);x.open().catch(he)}return x._state.dbReadyPromise.then(function(){return B(x,g,w,k)})})(this.db,e,[this.name],l);return i&&(b._consoleTask=i,b=b.catch(function(B){return console.trace(B),Me(B)})),b}finally{c&&cn()}},H.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Me(new G.Type("Invalid argument to Table.get()")):this._trans("readonly",function(r){return n.core.get({trans:r,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},H.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(te(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=fe(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function(B){return 0<=c.keyPath.indexOf(B)})){for(var b=0;b<t.length;++b)if(t.indexOf(c.keyPath[b])===-1)return!1;return!0}return!1}).sort(function(c,b){return c.keyPath.length-b.keyPath.length})[0];if(n&&this.db._maxKey!==zt)return l=n.keyPath.slice(0,t.length),this.where(l).equals(l.map(function(c){return e[c]}));!n&&bt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var r=this.schema.idxByName;function s(c,b){return p(c,b)===0}var l=t.reduce(function(x,b){var B=x[0],x=x[1],g=r[b],w=e[b];return[B||g,B||!g?o(x,g&&g.multi?function(k){return k=_t(k,b),te(k)&&k.some(function(y){return s(w,y)})}:function(k){return s(w,_t(k,b))}):x]},[null,null]),i=l[0],l=l[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},H.prototype.filter=function(e){return this.toCollection().and(e)},H.prototype.count=function(e){return this.toCollection().count(e)},H.prototype.offset=function(e){return this.toCollection().offset(e)},H.prototype.limit=function(e){return this.toCollection().limit(e)},H.prototype.each=function(e){return this.toCollection().each(e)},H.prototype.toArray=function(e){return this.toCollection().toArray(e)},H.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},H.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,te(e)?"[".concat(e.join("+"),"]"):e))},H.prototype.reverse=function(){return this.toCollection().reverse()},H.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,r=((this.schema.mappedClass=e).prototype instanceof h&&(e=(l=>{var c=x,b=l;if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function B(){this.constructor=c}function x(){return l!==null&&l.apply(this,arguments)||this}return Be(c,b),c.prototype=b===null?Object.create(b):(B.prototype=b.prototype,new B),Object.defineProperty(x.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),x.prototype.table=function(){return n},x})(e)),new Set),s=e.prototype;s;s=He(s))Object.getOwnPropertyNames(s).forEach(function(l){return r.add(l)});function i(l){if(!l)return l;var c,b=Object.create(e.prototype);for(c in l)if(!r.has(c))try{b[c]=l[c]}catch{}return b}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},H.prototype.defineClass=function(){return this.mapToClass(function(e){ce(this,e)})},H.prototype.add=function(e,t){var n=this,r=this.schema.primKey,s=r.auto,i=r.keyPath,l=e;return i&&s&&(l=m(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[l]})}).then(function(c){return c.numFailures?V.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{at(e,i,c)}catch{}return c})},H.prototype.upsert=function(e,t){var n=this,r=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var l=i??{};return U(l,t),r&&at(l,r,e),n.core.mutate({trans:s,type:"put",values:[l],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?V.reject(c.failures[0]):!!i})})})},H.prototype.update=function(e,t){return typeof e!="object"||te(e)?this.where(":id").equals(e).modify(t):(e=_t(e,this.schema.primKey.keyPath))===void 0?Me(new G.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},H.prototype.put=function(e,t){var n=this,r=this.schema.primKey,s=r.auto,i=r.keyPath,l=e;return i&&s&&(l=m(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[l],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?V.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{at(e,i,c)}catch{}return c})},H.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(r){return R(t,[e],r)}).then(function(r){return r.numFailures?V.reject(r.failures[0]):void 0})})},H.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:d}).then(function(n){return R(e,null,n)})}).then(function(t){return t.numFailures?V.reject(t.failures[0]):void 0})},H.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(r){return r.map(function(s){return t.hook.reading.fire(s)})})})},H.prototype.bulkAdd=function(e,t,n){var r=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=r.schema.primKey,B=c.auto,c=c.keyPath;if(c&&s)throw new G.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,B=c&&B?e.map(m(c)):e;return r.core.mutate({trans:l,type:"add",keys:s,values:B,wantResults:i}).then(function(x){var g=x.numFailures,w=x.failures;if(g===0)return i?x.results:x.lastResult;throw new sn("".concat(r.name,".bulkAdd(): ").concat(g," of ").concat(b," operations failed"),w)})})},H.prototype.bulkPut=function(e,t,n){var r=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=r.schema.primKey,B=c.auto,c=c.keyPath;if(c&&s)throw new G.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,B=c&&B?e.map(m(c)):e;return r.core.mutate({trans:l,type:"put",keys:s,values:B,wantResults:i}).then(function(x){var g=x.numFailures,w=x.failures;if(g===0)return i?x.results:x.lastResult;throw new sn("".concat(r.name,".bulkPut(): ").concat(g," of ").concat(b," operations failed"),w)})})},H.prototype.bulkUpdate=function(e){var t=this,n=this.core,r=e.map(function(l){return l.key}),s=e.map(function(l){return l.changes}),i=[];return this._trans("readwrite",function(l){return n.getMany({trans:l,keys:r,cache:"clone"}).then(function(c){var b=[],B=[],x=(e.forEach(function(g,w){var k=g.key,y=g.changes,C=c[w];if(C){for(var a=0,u=Object.keys(y);a<u.length;a++){var f=u[a],$=y[f];if(f===t.schema.primKey.keyPath){if(p($,k)!==0)throw new G.Constraint("Cannot update primary key in bulkUpdate()")}else at(C,f,$)}i.push(w),b.push(k),B.push(C)}}),b.length);return n.mutate({trans:l,type:"put",keys:b,values:B,updates:{keys:r,changeSpecs:s}}).then(function(g){var w=g.numFailures,k=g.failures;if(w===0)return x;for(var y=0,C=Object.keys(k);y<C.length;y++){var a,u=C[y],f=i[Number(u)];f!=null&&(a=k[u],delete k[u],k[f]=a)}throw new sn("".concat(t.name,".bulkUpdate(): ").concat(w," of ").concat(x," operations failed"),k)})})})},H.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(r){return t.core.mutate({trans:r,type:"delete",keys:e}).then(function(s){return R(t,e,s)})}).then(function(r){var s=r.numFailures,i=r.failures;if(s===0)return r.lastResult;throw new sn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var X=H;function H(){}function Ce(e){function t(l,c){if(c){for(var b=arguments.length,B=new Array(b-1);--b;)B[b-1]=arguments[b];return n[l].subscribe.apply(null,B),e}if(typeof l=="string")return n[l]}var n={};t.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return t;function i(l,c,b){var B,x;if(typeof l!="object")return c=c||ma,x={subscribers:[],fire:b=b||he,subscribe:function(g){x.subscribers.indexOf(g)===-1&&(x.subscribers.push(g),x.fire=c(x.fire,g))},unsubscribe:function(g){x.subscribers=x.subscribers.filter(function(w){return w!==g}),x.fire=x.subscribers.reduce(c,b)}},n[l]=t[l]=x;fe(B=l).forEach(function(g){var w=B[g];if(te(w))i(g,B[g][0],B[g][1]);else{if(w!=="asap")throw new G.InvalidArgument("Invalid event config");var k=i(g,Rt,function(){for(var y=arguments.length,C=new Array(y);y--;)C[y]=arguments[y];k.subscribers.forEach(function(a){Da(function(){a.apply(null,C)})})})}})}}function Ye(e,t){return St(t).from({prototype:e}),t}function Oe(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function de(e,t){e.filter=o(e.filter,t)}function et(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return o(r(),t())}:t,e.justLimit=n&&!r}function De(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new G.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function st(e,t,n){var r=De(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:r,range:e.range}})}function Ct(e,t,n,r){var s,i,l=e.replayFilter?o(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,b,B){var x,g;l&&!l(b,B,function(w){return b.stop(w)},function(w){return b.fail(w)})||((g=""+(x=b.primaryKey))=="[object ArrayBuffer]"&&(g=""+new Uint8Array(x)),re(s,g))||(s[g]=!0,t(c,b,B))},Promise.all([e.or._iterate(i,n),ht(st(e,r,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):ht(st(e,r,n),o(e.algorithm,l),t,!e.keysOnly&&e.valueMapper)}function ht(e,t,n,r){var s=ye(r?function(i,l,c){return n(r(i),l,c)}:n);return e.then(function(i){if(i)return i.start(function(){var l=function(){return i.continue()};t&&!t(i,function(c){return l=c},function(c){i.stop(c),l=he},function(c){i.fail(c),l=he})||s(i.value,i,function(c){return l=c}),l()})})}Q.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Me.bind(null,n.error)):n.table._trans("readonly",e).then(t)},Q.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Me.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Q.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=o(t.algorithm,e)},Q.prototype._iterate=function(e,t){return Ct(this._ctx,e,t,this._ctx.table.core)},Q.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ce(n,e),t._ctx=n,t},Q.prototype.raw=function(){return this._ctx.valueMapper=null,this},Q.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return Ct(t,e,n,t.table.core)})},Q.prototype.count=function(e){var t=this;return this._read(function(n){var r,s=t._ctx,i=s.table.core;return Oe(s,!0)?i.count({trans:n,query:{index:De(s,i.schema),range:s.range}}).then(function(l){return Math.min(l,s.limit)}):(r=0,Ct(s,function(){return++r,!1},n,i).then(function(){return r}))}).then(e)},Q.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),r=n[0],s=n.length-1;function i(b,B){return B?i(b[n[B]],B-1):b[r]}var l=this._ctx.dir==="next"?1:-1;function c(b,B){return p(i(b,s),i(B,s))*l}return this.toArray(function(b){return b.sort(c)}).then(t)},Q.prototype.toArray=function(e){var t=this;return this._read(function(n){var r,s,i,l=t._ctx;return l.dir==="next"&&Oe(l,!0)&&0<l.limit?(r=l.valueMapper,s=De(l,l.table.core.schema),l.table.core.query({trans:n,limit:l.limit,values:!0,query:{index:s,range:l.range}}).then(function(c){return c=c.result,r?c.map(r):c})):(i=[],Ct(l,function(c){return i.push(c)},n,l.table.core).then(function(){return i}))},e)},Q.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,Oe(t)?et(t,function(){var n=e;return function(r,s){return n===0||(n===1?--n:s(function(){r.advance(n),n=0}),!1)}}):et(t,function(){var n=e;return function(){return--n<0}})),this},Q.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),et(this._ctx,function(){var t=e;return function(n,r,s){return--t<=0&&r(s),0<=t}},!0),this},Q.prototype.until=function(e,t){return de(this._ctx,function(n,r,s){return!e(n.value)||(r(s),t)}),this},Q.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},Q.prototype.last=function(e){return this.reverse().first(e)},Q.prototype.filter=function(e){var t;return de(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=o(t.isMatch,e),this},Q.prototype.and=function(e){return this.filter(e)},Q.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Q.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Q.prototype.desc=function(){return this.reverse()},Q.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,r){e(r.key,r)})},Q.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Q.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,r){e(r.primaryKey,r)})},Q.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(r,s){n.push(s.key)}).then(function(){return n}).then(e)},Q.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&Oe(t,!0)&&0<t.limit)return this._read(function(r){var s=De(t,t.table.core.schema);return t.table.core.query({trans:r,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(r){return r.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(r,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},Q.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Q.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},Q.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Q.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},de(this._ctx,function(r){var r=r.primaryKey.toString(),s=re(e,r);return e[r]=!0,!s})),this},Q.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(r){function s(C,a){var u=a.failures;w+=C-a.numFailures;for(var f=0,$=fe(u);f<$.length;f++){var P=$[f];g.push(u[P])}}var i=typeof e=="function"?e:function(C){return U(C,e)},l=n.table.core,x=l.schema.primaryKey,c=x.outbound,b=x.extractKey,B=200,x=t.db._options.modifyChunkSize,g=(x&&(B=typeof x=="object"?x[l.name]||x["*"]||200:x),[]),w=0,k=[],y=e===Tt;return t.clone().primaryKeys().then(function(C){function a(f){var $=Math.min(B,C.length-f),P=C.slice(f,f+$);return(y?Promise.resolve([]):l.getMany({trans:r,keys:P,cache:"immutable"})).then(function(T){var F=[],O=[],D=c?[]:null,q=y?P:[];if(!y)for(var A=0;A<$;++A){var L=T[A],ne={value:Xt(L),primKey:C[f+A]};i.call(ne,ne.value,ne)!==!1&&(ne.value==null?q.push(C[f+A]):c||p(b(L),b(ne.value))===0?(O.push(ne.value),c&&D.push(C[f+A])):(q.push(C[f+A]),F.push(ne.value)))}return Promise.resolve(0<F.length&&l.mutate({trans:r,type:"add",values:F}).then(function(oe){for(var W in oe.failures)q.splice(parseInt(W),1);s(F.length,oe)})).then(function(){return(0<O.length||u&&typeof e=="object")&&l.mutate({trans:r,type:"put",keys:D,values:O,criteria:u,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<f}).then(function(oe){return s(O.length,oe)})}).then(function(){return(0<q.length||u&&y)&&l.mutate({trans:r,type:"delete",keys:q,criteria:u,isAdditionalChunk:0<f}).then(function(oe){return R(n.table,q,oe)}).then(function(oe){return s(q.length,oe)})}).then(function(){return C.length>f+$&&a(f+B)})})}var u=Oe(n)&&n.limit===1/0&&(typeof e!="function"||y)&&{index:n.index,range:n.range};return a(0).then(function(){if(0<g.length)throw new wn("Error modifying one or more objects",g,w,k);return C.length})})})},Q.prototype.delete=function(){var e=this._ctx,t=e.range;return!Oe(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Tt):this._write(function(n){var r=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:r,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(b){var c=b.failures,b=b.numFailures;if(b)throw new wn("Could not delete some values",Object.keys(c).map(function(B){return c[B]}),i-b);return i-b})})})};var j=Q;function Q(){}var Tt=function(e,t){return t.value=null};function wt(e,t){return e<t?-1:e===t?0:1}function tt(e,t){return t<e?-1:e===t?0:1}function ge(e,t,n){return e=e instanceof ze?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Je(e){return new e.Collection(e,function(){return pt("")}).limit(0)}function ve(k,t,n,r){var s,i,l,c,b,B,x,g=n.length;if(!n.every(function(C){return typeof C=="string"}))return ge(k,Ua);function w(C){s=C==="next"?function(u){return u.toUpperCase()}:function(u){return u.toLowerCase()},i=C==="next"?function(u){return u.toLowerCase()}:function(u){return u.toUpperCase()},l=C==="next"?wt:tt;var a=n.map(function(u){return{lower:i(u),upper:s(u)}}).sort(function(u,f){return l(u.lower,f.lower)});c=a.map(function(u){return u.upper}),b=a.map(function(u){return u.lower}),x=(B=C)==="next"?"":r}w("next");var k=new k.Collection(k,function(){return Ae(c[0],b[g-1]+r)}),y=(k._ondirectionchange=function(C){w(C)},0);return k._addAlgorithm(function(C,a,u){var f=C.key;if(typeof f=="string"){var $=i(f);if(t($,b,y))return!0;for(var P=null,T=y;T<g;++T){var F=((O,D,q,A,L,ne)=>{for(var oe=Math.min(O.length,A.length),W=-1,ae=0;ae<oe;++ae){var ke=D[ae];if(ke!==A[ae])return L(O[ae],q[ae])<0?O.substr(0,ae)+q[ae]+q.substr(ae+1):L(O[ae],A[ae])<0?O.substr(0,ae)+A[ae]+q.substr(ae+1):0<=W?O.substr(0,W)+D[W]+q.substr(W+1):null;L(O[ae],ke)<0&&(W=ae)}return oe<A.length&&ne==="next"?O+q.substr(O.length):oe<O.length&&ne==="prev"?O.substr(0,q.length):W<0?null:O.substr(0,W)+A[W]+q.substr(W+1)})(f,$,c[T],b[T],l,B);F===null&&P===null?y=T+1:(P===null||0<l(P,F))&&(P=F)}a(P!==null?function(){C.continue(P+x)}:u)}return!1}),k}function Ae(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function pt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(ie.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ie.prototype.between=function(e,t,n,r){n=n!==!1,r=r===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||r)&&(!n||!r)?Je(this):new this.Collection(this,function(){return Ae(e,t,!n,!r)})}catch{return ge(this,Kt)}},ie.prototype.equals=function(e){return e==null?ge(this,Kt):new this.Collection(this,function(){return pt(e)})},ie.prototype.above=function(e){return e==null?ge(this,Kt):new this.Collection(this,function(){return Ae(e,void 0,!0)})},ie.prototype.aboveOrEqual=function(e){return e==null?ge(this,Kt):new this.Collection(this,function(){return Ae(e,void 0,!1)})},ie.prototype.below=function(e){return e==null?ge(this,Kt):new this.Collection(this,function(){return Ae(void 0,e,!1,!0)})},ie.prototype.belowOrEqual=function(e){return e==null?ge(this,Kt):new this.Collection(this,function(){return Ae(void 0,e)})},ie.prototype.startsWith=function(e){return typeof e!="string"?ge(this,Ua):this.between(e,e+zt,!0,!0)},ie.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):ve(this,function(t,n){return t.indexOf(n[0])===0},[e],zt)},ie.prototype.equalsIgnoreCase=function(e){return ve(this,function(t,n){return t===n[0]},[e],"")},ie.prototype.anyOfIgnoreCase=function(){var e=Et.apply(an,arguments);return e.length===0?Je(this):ve(this,function(t,n){return n.indexOf(t)!==-1},e,"")},ie.prototype.startsWithAnyOfIgnoreCase=function(){var e=Et.apply(an,arguments);return e.length===0?Je(this):ve(this,function(t,n){return n.some(function(r){return t.indexOf(r)===0})},e,zt)},ie.prototype.anyOf=function(){var e,t,n=this,r=Et.apply(an,arguments),s=this._cmp;try{r.sort(s)}catch{return ge(this,Kt)}return r.length===0?Je(this):((e=new this.Collection(this,function(){return Ae(r[0],r[r.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,r.sort(s)},t=0,e._addAlgorithm(function(i,l,c){for(var b=i.key;0<s(b,r[t]);)if(++t===r.length)return l(c),!1;return s(b,r[t])===0||(l(function(){i.continue(r[t])}),!1)}),e)},ie.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ie.prototype.noneOf=function(){var e=Et.apply(an,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ge(this,Kt)}var t=e.reduce(function(n,r){return n?n.concat([[n[n.length-1][1],r]]):[[-1/0,r]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},ie.prototype.inAnyRange=function(e,u){var n=this,r=this._cmp,s=this._ascending,i=this._descending,l=this._min,c=this._max;if(e.length===0)return Je(this);if(!e.every(function(f){return f[0]!==void 0&&f[1]!==void 0&&s(f[0],f[1])<=0}))return ge(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",G.InvalidArgument);var b=!u||u.includeLowers!==!1,B=u&&u.includeUppers===!0,x,g=s;function w(f,$){return g(f[0],$[0])}try{(x=e.reduce(function(f,$){for(var P=0,T=f.length;P<T;++P){var F=f[P];if(r($[0],F[1])<0&&0<r($[1],F[0])){F[0]=l(F[0],$[0]),F[1]=c(F[1],$[1]);break}}return P===T&&f.push($),f},[])).sort(w)}catch{return ge(this,Kt)}var k=0,y=B?function(f){return 0<s(f,x[k][1])}:function(f){return 0<=s(f,x[k][1])},C=b?function(f){return 0<i(f,x[k][0])}:function(f){return 0<=i(f,x[k][0])},a=y,u=new this.Collection(this,function(){return Ae(x[0][0],x[x.length-1][1],!b,!B)});return u._ondirectionchange=function(f){g=f==="next"?(a=y,s):(a=C,i),x.sort(w)},u._addAlgorithm(function(f,$,P){for(var T,F=f.key;a(F);)if(++k===x.length)return $(P),!1;return!y(T=F)&&!C(T)||(n._cmp(F,x[k][1])===0||n._cmp(F,x[k][0])===0||$(function(){g===s?f.continue(x[k][0]):f.continue(x[k][1])}),!1)}),u},ie.prototype.startsWithAnyOf=function(){var e=Et.apply(an,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Je(this):this.inAnyRange(e.map(function(t){return[t,t+zt]})):ge(this,"startsWithAnyOf() only works with strings")};var ze=ie;function ie(){}function Fe(e){return ye(function(t){return xt(t),e(t.target.error),!1})}function xt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Le="storagemutated",it="x-storagemutated-1",je=Ce(null,Le),Pn=(le.prototype._lock=function(){return nn(!z.global),++this._reculock,this._reculock!==1||z.global||(z.lockOwnerFor=this),this},le.prototype._unlock=function(){if(nn(!z.global),--this._reculock==0)for(z.global||(z.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{Zt(e[1],e[0])}catch{}}return this},le.prototype._locked=function(){return this._reculock&&z.lockOwnerFor!==this},le.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,r=this.db._state.dbOpenError;if(nn(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new G.DatabaseClosed(r);case"MissingAPIError":throw new G.MissingAPI(r.message,r);default:throw new G.OpenFailed(r)}if(!this.active)throw new G.TransactionInactive;nn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ye(function(s){xt(s),t._reject(e.error)}),e.onabort=ye(function(s){xt(s),t.active&&t._reject(new G.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=ye(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&je.storagemutated.fire(e.mutatedParts)})}return this},le.prototype._promise=function(e,t,n){var r,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Me(new G.ReadOnly("Transaction is readonly")):this.active?this._locked()?new V(function(i,l){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,l)},z])}):n?Vt(function(){var i=new V(function(l,c){s._lock();var b=t(l,c,s);b&&b.then&&b.then(l,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((r=new V(function(i,l){var c=t(i,l,s);c&&c.then&&c.then(i,l)}))._lib=!0,r):Me(new G.TransactionInactive)},le.prototype._root=function(){return this.parent?this.parent._root():this},le.prototype.waitFor=function(e){var t,n=this._root(),r=V.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return r}):(n._waitingFor=r,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new V(function(i,l){r.then(function(c){return n._waitingQueue.push(ye(i.bind(null,c)))},function(c){return n._waitingQueue.push(ye(l.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},le.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new G.Abort))},le.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(re(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new G.NotFound("Table "+e+" not part of transaction")},le);function le(){}function pe(e,t,n,r,s,i,l,c){return{name:e,keyPath:t,unique:n,multi:r,auto:s,compound:i,src:(n&&!l?"&":"")+(r?"*":"")+(s?"++":"")+_e(t),type:c}}function _e(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ie(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(r=function(s){return[s.name,s]},n.reduce(function(s,i,l){return i=r(i,l),i&&(s[i[0]]=i[1]),s},{}))};var r}var xe=function(e){try{return e.only([[]]),xe=function(){return[[]]},[[]]}catch{return xe=function(){return zt},zt}};function Ut(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return _t(n,t)}:function(n){return _t(n,e)};var t}function kt(e){return[].slice.call(e)}var hn=0;function _(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function N(e,t,b){function r(y){if(y.type===3)return null;if(y.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var g=y.lower,w=y.upper,k=y.lowerOpen,y=y.upperOpen;return g===void 0?w===void 0?null:t.upperBound(w,!!y):w===void 0?t.lowerBound(g,!!k):t.bound(g,w,!!k,!!y)}function s(x){var g,w=x.name;return{name:w,schema:x,mutate:function(k){var y=k.trans,C=k.type,a=k.keys,u=k.values,f=k.range;return new Promise(function($,P){$=ye($);var T=y.objectStore(w),F=T.keyPath==null,O=C==="put"||C==="add";if(!O&&C!=="delete"&&C!=="deleteRange")throw new Error("Invalid operation type: "+C);var D,q=(a||u||{length:1}).length;if(a&&u&&a.length!==u.length)throw new Error("Given keys array must have same length as given values array.");if(q===0)return $({numFailures:0,failures:{},results:[],lastResult:void 0});function A(Se){++oe,xt(Se)}var L=[],ne=[],oe=0;if(C==="deleteRange"){if(f.type===4)return $({numFailures:oe,failures:ne,results:[],lastResult:void 0});f.type===3?L.push(D=T.clear()):L.push(D=T.delete(r(f)))}else{var F=O?F?[u,a]:[u,null]:[a,null],W=F[0],ae=F[1];if(O)for(var ke=0;ke<q;++ke)L.push(D=ae&&ae[ke]!==void 0?T[C](W[ke],ae[ke]):T[C](W[ke])),D.onerror=A;else for(ke=0;ke<q;++ke)L.push(D=T[C](W[ke])),D.onerror=A}function mt(Se){Se=Se.target.result,L.forEach(function(Ht,la){return Ht.error!=null&&(ne[la]=Ht.error)}),$({numFailures:oe,failures:ne,results:C==="delete"?a:L.map(function(Ht){return Ht.result}),lastResult:Se})}D.onerror=function(Se){A(Se),mt(Se)},D.onsuccess=mt})},getMany:function(k){var y=k.trans,C=k.keys;return new Promise(function(a,u){a=ye(a);for(var f,$=y.objectStore(w),P=C.length,T=new Array(P),F=0,O=0,D=function(L){L=L.target,T[L._pos]=L.result,++O===F&&a(T)},q=Fe(u),A=0;A<P;++A)C[A]!=null&&((f=$.get(C[A]))._pos=A,f.onsuccess=D,f.onerror=q,++F);F===0&&a(T)})},get:function(k){var y=k.trans,C=k.key;return new Promise(function(a,u){a=ye(a);var f=y.objectStore(w).get(C);f.onsuccess=function($){return a($.target.result)},f.onerror=Fe(u)})},query:(g=c,function(k){return new Promise(function(y,C){y=ye(y);var a,u,f,O=k.trans,$=k.values,P=k.limit,F=k.query,T=P===1/0?void 0:P,D=F.index,F=F.range,O=O.objectStore(w),O=D.isPrimaryKey?O:O.index(D.name),D=r(F);if(P===0)return y({result:[]});g?((F=$?O.getAll(D,T):O.getAllKeys(D,T)).onsuccess=function(q){return y({result:q.target.result})},F.onerror=Fe(C)):(a=0,u=!$&&"openKeyCursor"in O?O.openKeyCursor(D):O.openCursor(D),f=[],u.onsuccess=function(q){var A=u.result;return!A||(f.push($?A.value:A.primaryKey),++a===P)?y({result:f}):void A.continue()},u.onerror=Fe(C))})}),openCursor:function(k){var y=k.trans,C=k.values,a=k.query,u=k.reverse,f=k.unique;return new Promise(function($,P){$=ye($);var O=a.index,T=a.range,F=y.objectStore(w),F=O.isPrimaryKey?F:F.index(O.name),O=u?f?"prevunique":"prev":f?"nextunique":"next",D=!C&&"openKeyCursor"in F?F.openKeyCursor(r(T),O):F.openCursor(r(T),O);D.onerror=Fe(P),D.onsuccess=ye(function(q){var A,L,ne,oe,W=D.result;W?(W.___id=++hn,W.done=!1,A=W.continue.bind(W),L=(L=W.continuePrimaryKey)&&L.bind(W),ne=W.advance.bind(W),oe=function(){throw new Error("Cursor not stopped")},W.trans=y,W.stop=W.continue=W.continuePrimaryKey=W.advance=function(){throw new Error("Cursor not started")},W.fail=ye(P),W.next=function(){var ae=this,ke=1;return this.start(function(){return ke--?ae.continue():ae.stop()}).then(function(){return ae})},W.start=function(ae){function ke(){if(D.result)try{ae()}catch(Se){W.fail(Se)}else W.done=!0,W.start=function(){throw new Error("Cursor behind last entry")},W.stop()}var mt=new Promise(function(Se,Ht){Se=ye(Se),D.onerror=Fe(Ht),W.fail=Ht,W.stop=function(la){W.stop=W.continue=W.continuePrimaryKey=W.advance=oe,Se(la)}});return D.onsuccess=ye(function(Se){D.onsuccess=ke,ke()}),W.continue=A,W.continuePrimaryKey=L,W.advance=ne,ke(),mt},$(W)):$(null)},P)})},count:function(k){var y=k.query,C=k.trans,a=y.index,u=y.range;return new Promise(function(f,$){var P=C.objectStore(w),P=a.isPrimaryKey?P:P.index(a.name),T=r(u),T=T?P.count(T):P.count();T.onsuccess=ye(function(F){return f(F.target.result)}),T.onerror=Fe($)})}}}i=b,l=kt((b=e).objectStoreNames);var i,b={schema:{name:b.name,tables:l.map(function(x){return i.objectStore(x)}).map(function(x){var g=x.keyPath,w=x.autoIncrement,y=te(g),k={},y={name:x.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:g==null,compound:y,keyPath:g,autoIncrement:w,unique:!0,extractKey:Ut(g)},indexes:kt(x.indexNames).map(function(C){return x.index(C)}).map(function(f){var $=f.name,a=f.unique,u=f.multiEntry,f=f.keyPath,$={name:$,compound:te(f),keyPath:f,unique:a,multiEntry:u,extractKey:Ut(f)};return k[_(f)]=$}),getIndexByKeyPath:function(C){return k[_(C)]}};return k[":id"]=y.primaryKey,g!=null&&(k[_(g)]=y.primaryKey),y})},hasGetAll:0<l.length&&"getAll"in i.objectStore(l[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},l=b.schema,c=b.hasGetAll,b=l.tables.map(s),B={};return b.forEach(function(x){return B[x.name]=x}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(x){if(B[x])return B[x];throw new Error("Table '".concat(x,"' not found"))},MIN_KEY:-1/0,MAX_KEY:xe(t),schema:l}}function Ne(e,t,n,r){return n=n.IDBKeyRange,t=N(t,n,r),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,Y(Y({},s),i(s))},t)}}function me(e,t){var n=t.db,n=Ne(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(r){var s=r.name;e.core.schema.tables.some(function(i){return i.name===s})&&(r.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=r.core)})}function pn(e,t,n,r){n.forEach(function(s){var i=r[s];t.forEach(function(l){var c=(function b(B,x){return ar(B,x)||(B=He(B))&&b(B,x)})(l,s);(!c||"value"in c&&c.value===void 0)&&(l===e.Transaction.prototype||l instanceof e.Transaction?ct(l,s,{get:function(){return this.table(s)},set:function(b){Ze(this,s,{value:b,writable:!0,configurable:!0,enumerable:!0})}}):l[s]=new e.Table(s,i))})})}function Gt(e,t){t.forEach(function(n){for(var r in n)n[r]instanceof e.Table&&delete n[r]})}function xa(e,t){return e._cfg.version-t._cfg.version}function Mn(e,t,n,r){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Ie("$meta",Ga("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),l=(i.create(n),i._completion.catch(r),i._reject.bind(i)),c=z.transless||z;Vt(function(){if(z.trans=i,z.transless=c,t!==0)return me(e,n),B=t,((b=i).storeNames.includes("$meta")?b.table("$meta").get("version").then(function(x){return x??B}):V.resolve(B)).then(function(a){var g=e,w=a,k=i,y=n,C=[],a=g._versions,u=g._dbSchema=An(0,g.idbdb,y);return(a=a.filter(function(f){return f._cfg.version>=w})).length===0?V.resolve():(a.forEach(function(f){C.push(function(){var $,P,T,F=u,O=f._cfg.dbschema,D=(Zn(g,F,y),Zn(g,O,y),u=g._dbSchema=O,we(F,O)),q=(D.add.forEach(function(A){wa(y,A[0],A[1].primKey,A[1].indexes)}),D.change.forEach(function(A){if(A.recreate)throw new G.Upgrade("Not yet support for changing primary key");var L=y.objectStore(A.name);A.add.forEach(function(ne){return Tn(L,ne)}),A.change.forEach(function(ne){L.deleteIndex(ne.name),Tn(L,ne)}),A.del.forEach(function(ne){return L.deleteIndex(ne)})}),f._cfg.contentUpgrade);if(q&&f._cfg.version>w)return me(g,y),k._memoizedTables={},$=It(O),D.del.forEach(function(A){$[A]=F[A]}),Gt(g,[g.Transaction.prototype]),pn(g,[g.Transaction.prototype],fe($),$),k.schema=$,(P=ha(q))&&dn(),O=V.follow(function(){var A;(T=q(k))&&P&&(A=yt.bind(null,null),T.then(A,A))}),T&&typeof T.then=="function"?V.resolve(T):O.then(function(){return T})}),C.push(function($){var P,T,F=f._cfg.dbschema;P=F,T=$,[].slice.call(T.db.objectStoreNames).forEach(function(O){return P[O]==null&&T.db.deleteObjectStore(O)}),Gt(g,[g.Transaction.prototype]),pn(g,[g.Transaction.prototype],g._storeNames,g._dbSchema),k.schema=g._dbSchema}),C.push(function($){g.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(g.idbdb.version/10)===f._cfg.version?(g.idbdb.deleteObjectStore("$meta"),delete g._dbSchema.$meta,g._storeNames=g._storeNames.filter(function(P){return P!=="$meta"})):$.objectStore("$meta").put(f._cfg.version,"version"))})}),(function f(){return C.length?V.resolve(C.shift()(k.idbtrans)).then(f):V.resolve()})().then(function(){ka(u,y)}))}).catch(l);var b,B;fe(s).forEach(function(x){wa(n,x,s[x].primKey,s[x].indexes)}),me(e,n),V.follow(function(){return e.on.populate.fire(i)}).catch(l)})}function On(e,t){ka(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=An(0,e.idbdb,t);Zn(e,e._dbSchema,t);for(var r=0,s=we(n,e._dbSchema).change;r<s.length;r++){var i=(l=>{if(l.change.length||l.recreate)return console.warn("Unable to patch indexes of table ".concat(l.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(l.name);l.add.forEach(function(b){bt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name,".").concat(b.src)),Tn(c,b)})})(s[r]);if(typeof i=="object")return i.value}}function we(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var l={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)l.recreate=!0,r.change.push(l);else{var c=s.idxByName,b=i.idxByName,B=void 0;for(B in c)b[B]||l.del.push(B);for(B in b){var x=c[B],g=b[B];x?x.src!==g.src&&l.change.push(g):l.add.push(g)}(0<l.del.length||0<l.add.length||0<l.change.length)&&r.change.push(l)}}else r.add.push([n,i])}return r}function wa(e,t,n,r){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});r.forEach(function(i){return Tn(s,i)})}function ka(e,t){fe(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(bt&&console.debug("Dexie: Creating missing table",n),wa(t,n,e[n].primKey,e[n].indexes))})}function Tn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function An(e,t,n){var r={};return Rn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),l=pe(_e(B=i.keyPath),B||"",!0,!1,!!i.autoIncrement,B&&typeof B!="string",!0),c=[],b=0;b<i.indexNames.length;++b){var x=i.index(i.indexNames[b]),B=x.keyPath,x=pe(x.name,B,!!x.unique,!!x.multiEntry,!1,B&&typeof B!="string",!1);c.push(x)}r[s]=Ie(s,l,c)}),r}function Zn(e,t,n){for(var r=n.db.objectStoreNames,s=0;s<r.length;++s){var i=r[s],l=n.objectStore(i);e._hasGetAll="getAll"in l;for(var c=0;c<l.indexNames.length;++c){var b,B=l.indexNames[c],x=l.index(B).keyPath,x=typeof x=="string"?x:"["+Rn(x).join("+")+"]";t[i]&&(b=t[i].idxByName[x])&&(b.name=B,delete t[i].idxByName[x],t[i].idxByName[B]=b)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ee.WorkerGlobalScope&&ee instanceof ee.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Ga(e){return e.split(",").map(function(t,n){var s=t.split(":"),r=(r=s[1])==null?void 0:r.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return pe(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),te(i),n===0,r)})}ot.prototype._createTableSchema=Ie,ot.prototype._parseIndexSyntax=Ga,ot.prototype._parseStoresSpec=function(e,t){var n=this;fe(e).forEach(function(r){if(e[r]!==null){var s=n._parseIndexSyntax(e[r]),i=s.shift();if(!i)throw new G.Schema("Invalid schema for table "+r+": "+e[r]);if(i.unique=!0,i.multi)throw new G.Schema("Primary key cannot be multiEntry*");s.forEach(function(l){if(l.auto)throw new G.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new G.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(r,i,s),t[r]=i}})},ot.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ce(this._cfg.storesSource,n):n,t._versions),r={},s={};return n.forEach(function(i){ce(r,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(r,s)}),t._dbSchema=s,Gt(t,[t._allTables,t,t.Transaction.prototype]),pn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],fe(s),s),t._storeNames=fe(s),this},ot.prototype.upgrade=function(e){return this._cfg.contentUpgrade=$n(this._cfg.contentUpgrade||he,e),this};var At=ot;function ot(){}function ea(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Dt(Qn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function ta(e){return e&&typeof e.databases=="function"}function na(e){return Vt(function(){return z.letThrough=!0,e()})}function aa(e){return!("from"in e)}var Ue=function(e,t){var n;if(!this)return n=new Ue,e&&"d"in e&&ce(n,e),n;ce(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function vn(e,t,n){var r=p(t,n);if(!isNaN(r)){if(0<r)throw RangeError();if(aa(e))return ce(e,{from:t,to:n,d:1});var r=e.l,s=e.r;if(p(n,e.from)<0)return r?vn(r,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Ba(e);if(0<p(t,e.to))return s?vn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Ba(e);p(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<p(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,r&&!e.l&&mn(e,r),s&&t&&mn(e,s)}}function mn(e,t){aa(t)||(function n(r,s){var i=s.from,l=s.l,c=s.r;vn(r,i,s.to),l&&n(r,l),c&&n(r,c)})(e,t)}function $a(e,t){var n=gn(t),r=n.next();if(!r.done)for(var s=r.value,i=gn(e),l=i.next(s.from),c=l.value;!r.done&&!l.done;){if(p(c.from,s.to)<=0&&0<=p(c.to,s.from))return!0;p(s.from,c.from)<0?s=(r=n.next(c.from)).value:c=(l=i.next(s.from)).value}return!1}function gn(e){var t=aa(e)?null:{s:0,n:e};return{next:function(n){for(var r=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,r)for(;t.n.l&&p(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!r||p(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ba(e){var t,n,r,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=Y({},e),r=e[s],e.from=r.from,e.to=r.to,e[s]=r[s],n[s]=r[t],(e[t]=n).d=Ft(n)),e.d=Ft(e)}function Ft(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function ra(e,t){return fe(t).forEach(function(n){e[n]?mn(e[n],t[n]):e[n]=(function r(s){var i,l,c={};for(i in s)re(s,i)&&(l=s[i],c[i]=!l||typeof l!="object"||be.has(l.constructor)?l:r(l));return c})(t[n])}),e}function $t(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&$a(t[n],e[n])})}Qe(Ue.prototype,((Re={add:function(e){return mn(this,e),this},addKey:function(e){return vn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return vn(t,n,n)}),this},hasKey:function(e){var t=gn(this).next(e).value;return t&&p(t.from,e)<=0&&0<=p(t.to,e)}})[Vn]=function(){return gn(this)},Re));var en={},Sa={},sa=!1;function Fn(e){ra(Sa,e),sa||(sa=!0,setTimeout(function(){sa=!1,ia(Sa,!(Sa={}))},0))}function ia(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var r=0,s=Object.values(en);r<s.length;r++)_a(c=s[r],e,n,t);else for(var i in e){var l,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(l=i[1],i=i[2],c=en["idb://".concat(l,"/").concat(i)])&&_a(c,e,n,t)}n.forEach(function(b){return b()})}function _a(e,t,n,r){for(var s=[],i=0,l=Object.entries(e.queries.query);i<l.length;i++){for(var c=l[i],b=c[0],B=[],x=0,g=c[1];x<g.length;x++){var w=g[x];$t(t,w.obsSet)?w.subscribers.forEach(function(a){return n.add(a)}):r&&B.push(w)}r&&s.push([b,B])}if(r)for(var k=0,y=s;k<y.length;k++){var C=y[k],b=C[0],B=C[1];e.queries.query[b]=B}}function Wa(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Me(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var r=t.openCanceller,s=Math.round(10*e.verno),i=!1;function l(){if(t.openCanceller!==r)throw new G.DatabaseClosed("db.open() was cancelled")}function c(){return new V(function(w,k){if(l(),!n)throw new G.MissingAPI;var y=e.name,C=t.autoSchema||!s?n.open(y):n.open(y,s);if(!C)throw new G.MissingAPI;C.onerror=Fe(k),C.onblocked=ye(e._fireOnBlocked),C.onupgradeneeded=ye(function(a){var u;x=C.transaction,t.autoSchema&&!e._options.allowEmptyDB?(C.onerror=xt,x.abort(),C.result.close(),(u=n.deleteDatabase(y)).onsuccess=u.onerror=ye(function(){k(new G.NoSuchDatabase("Database ".concat(y," doesnt exist")))})):(x.onerror=Fe(k),u=a.oldVersion>Math.pow(2,62)?0:a.oldVersion,g=u<1,e.idbdb=C.result,i&&On(e,x),Mn(e,u/10,x,k))},k),C.onsuccess=ye(function(){x=null;var a,u,f,$,P,T,F=e.idbdb=C.result,O=Rn(F.objectStoreNames);if(0<O.length)try{var D=F.transaction((P=O).length===1?P[0]:P,"readonly");if(t.autoSchema)T=F,$=D,(f=e).verno=T.version/10,$=f._dbSchema=An(0,T,$),f._storeNames=Rn(T.objectStoreNames,0),pn(f,[f._allTables],fe($),$);else if(Zn(e,e._dbSchema,D),u=D,((u=we(An(0,(a=e).idbdb,u),a._dbSchema)).add.length||u.change.some(function(q){return q.add.length||q.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),F.close(),s=F.version+1,i=!0,w(c());me(e,D)}catch{}fn.push(e),F.onversionchange=ye(function(q){t.vcFired=!0,e.on("versionchange").fire(q)}),F.onclose=ye(function(){e.close({disableAutoOpen:!1})}),g&&(O=e._deps,P=y,ta(T=O.indexedDB)||P===Qn||ea(T,O.IDBKeyRange).put({name:P}).catch(he)),w()},k)}).catch(function(w){switch(w?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return V.reject(w)})}var b,B=t.dbReadyResolve,x=null,g=!1;return V.race([r,(typeof navigator>"u"?V.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(w){function k(){return indexedDB.databases().finally(w)}b=setInterval(k,100),k()}).finally(function(){return clearInterval(b)}):Promise.resolve()).then(c)]).then(function(){return l(),t.onReadyBeingFired=[],V.resolve(na(function(){return e.on.ready.fire(e.vip)})).then(function w(){var k;if(0<t.onReadyBeingFired.length)return k=t.onReadyBeingFired.reduce($n,he),t.onReadyBeingFired=[],V.resolve(na(function(){return k(e.vip)})).then(w)})}).finally(function(){t.openCanceller===r&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(w){t.dbOpenError=w;try{x&&x.abort()}catch{}return r===t.openCanceller&&e._close(),Me(w)}).finally(function(){t.openComplete=!0,B()}).then(function(){var w;return g&&(w={},e.tables.forEach(function(k){k.schema.indexes.forEach(function(y){y.name&&(w["idb://".concat(e.name,"/").concat(k.name,"/").concat(y.name)]=new Ue(-1/0,[[[]]]))}),w["idb://".concat(e.name,"/").concat(k.name,"/")]=w["idb://".concat(e.name,"/").concat(k.name,"/:dels")]=new Ue(-1/0,[[[]]])}),je(Le).fire(w),ia(w,!0)),e})}function Ea(e){function t(i){return e.next(i)}var n=s(t),r=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),b=c.value;return c.done?b:b&&typeof b.then=="function"?b.then(n,r):te(b)?Promise.all(b).then(n,r):n(b)}}return s(t)()}function oa(e,t,n){for(var r=te(e)?e.slice():[e],s=0;s<n;++s)r.push(t);return r}var dr={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Y(Y({},e),{table:function(r){var n=e.table(r),r=n.schema,s={},i=[];function l(w,k,y){var f=_(w),C=s[f]=s[f]||[],a=w==null?0:typeof w=="string"?1:w.length,u=0<k,f=Y(Y({},y),{name:u?"".concat(f,"(virtual-from:").concat(y.name,")"):y.name,lowLevelIndex:y,isVirtual:u,keyTail:k,keyLength:a,extractKey:Ut(w),unique:!u&&y.unique});return C.push(f),f.isPrimaryKey||i.push(f),1<a&&l(a===2?w[0]:w.slice(0,a-1),k+1,y),C.sort(function($,P){return $.keyTail-P.keyTail}),f}var c=l(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[c];for(var b=0,B=r.indexes;b<B.length;b++){var x=B[b];l(x.keyPath,0,x)}function g(w){var k,y=w.query.index;return y.isVirtual?Y(Y({},w),{query:{index:y.lowLevelIndex,range:(k=w.query.range,y=y.keyTail,{type:k.type===1?2:k.type,lower:oa(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,y),lowerOpen:!0,upper:oa(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,y),upperOpen:!0})}}):w}return Y(Y({},n),{schema:Y(Y({},r),{primaryKey:c,indexes:i,getIndexByKeyPath:function(w){return(w=s[_(w)])&&w[0]}}),count:function(w){return n.count(g(w))},query:function(w){return n.query(g(w))},openCursor:function(w){var k=w.query.index,y=k.keyTail,C=k.keyLength;return k.isVirtual?n.openCursor(g(w)).then(function(u){return u&&a(u)}):n.openCursor(w);function a(u){return Object.create(u,{continue:{value:function(f){f!=null?u.continue(oa(f,w.reverse?e.MAX_KEY:e.MIN_KEY,y)):w.unique?u.continue(u.key.slice(0,C).concat(w.reverse?e.MIN_KEY:e.MAX_KEY,y)):u.continue()}},continuePrimaryKey:{value:function(f,$){u.continuePrimaryKey(oa(f,e.MAX_KEY,y),$)}},primaryKey:{get:function(){return u.primaryKey}},key:{get:function(){var f=u.key;return C===1?f[0]:f.slice(0,C)}},value:{get:function(){return u.value}}})}}})}})}};function Pa(e,t,n,r){return n=n||{},r=r||"",fe(e).forEach(function(s){var i,l,c;re(t,s)?(i=e[s],l=t[s],typeof i=="object"&&typeof l=="object"&&i&&l?(c=fa(i))!==fa(l)?n[r+s]=t[s]:c==="Object"?Pa(i,l,n,r+s+"."):i!==l&&(n[r+s]=t[s]):i!==l&&(n[r+s]=t[s])):n[r+s]=void 0}),fe(t).forEach(function(s){re(e,s)||(n[r+s]=t[s])}),n}function Ma(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Dn={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Y(Y({},e),{table:function(t){var n=e.table(t),r=n.schema.primaryKey;return Y(Y({},n),{mutate:function(s){var i=z.trans,l=i.table(t).hook,c=l.deleting,b=l.creating,B=l.updating;switch(s.type){case"add":if(b.fire===he)break;return i._promise("readwrite",function(){return x(s)},!0);case"put":if(b.fire===he&&B.fire===he)break;return i._promise("readwrite",function(){return x(s)},!0);case"delete":if(c.fire===he)break;return i._promise("readwrite",function(){return x(s)},!0);case"deleteRange":if(c.fire===he)break;return i._promise("readwrite",function(){return(function g(w,k,y){return n.query({trans:w,values:!1,query:{index:r,range:k},limit:y}).then(function(C){var a=C.result;return x({type:"delete",keys:a,trans:w}).then(function(u){return 0<u.numFailures?Promise.reject(u.failures[0]):a.length<y?{failures:[],numFailures:0,lastResult:void 0}:g(w,Y(Y({},k),{lower:a[a.length-1],lowerOpen:!0}),y)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function x(g){var w,k,y,C=z.trans,a=g.keys||Ma(r,g);if(a)return(g=g.type==="add"||g.type==="put"?Y(Y({},g),{keys:a}):Y({},g)).type!=="delete"&&(g.values=ue([],g.values)),g.keys&&(g.keys=ue([],g.keys)),w=n,y=a,((k=g).type==="add"?Promise.resolve([]):w.getMany({trans:k.trans,keys:y,cache:"immutable"})).then(function(u){var f=a.map(function($,P){var T,F,O,D=u[P],q={onerror:null,onsuccess:null};return g.type==="delete"?c.fire.call(q,$,D,C):g.type==="add"||D===void 0?(T=b.fire.call(q,$,g.values[P],C),$==null&&T!=null&&(g.keys[P]=$=T,r.outbound||at(g.values[P],r.keyPath,$))):(T=Pa(D,g.values[P]),(F=B.fire.call(q,T,$,D,C))&&(O=g.values[P],Object.keys(F).forEach(function(A){re(O,A)?O[A]=F[A]:at(O,A,F[A])}))),q});return n.mutate(g).then(function($){for(var P=$.failures,T=$.results,F=$.numFailures,$=$.lastResult,O=0;O<a.length;++O){var D=(T||a)[O],q=f[O];D==null?q.onerror&&q.onerror(P[O]):q.onsuccess&&q.onsuccess(g.type==="put"&&u[O]?g.values[O]:D)}return{failures:P,results:T,numFailures:F,lastResult:$}}).catch(function($){return f.forEach(function(P){return P.onerror&&P.onerror($)}),Promise.reject($)})});throw new Error("Keys missing")}}})}})}};function Ja(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var r=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)p(t.keys[s],e[i])===0&&(r.push(n?Xt(t.values[s]):t.values[s]),++i);return r.length===e.length?r:null}catch{return null}}var Ha={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return Y(Y({},n),{getMany:function(r){var s;return r.cache?(s=Ja(r.keys,r.trans._cache,r.cache==="clone"))?V.resolve(s):n.getMany(r).then(function(i){return r.trans._cache={keys:r.keys,values:r.cache==="clone"?Xt(i):i},i}):n.getMany(r)},mutate:function(r){return r.type!=="add"&&(r.trans._cache=null),n.mutate(r)}})}}}};function Xa(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Qa(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var vt={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Ue(e.MIN_KEY,e.MAX_KEY);return Y(Y({},e),{transaction:function(r,s,i){if(z.subscr&&s!=="readonly")throw new G.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(z.querier));return e.transaction(r,s,i)},table:function(r){function s(a){var C,a=a.query;return[C=a.index,new Ue((C=(a=a.range).lower)!=null?C:e.MIN_KEY,(C=a.upper)!=null?C:e.MAX_KEY)]}var i=e.table(r),l=i.schema,c=l.primaryKey,b=l.indexes,B=c.extractKey,x=c.outbound,g=c.autoIncrement&&b.filter(function(y){return y.compound&&y.keyPath.includes(c.keyPath)}),w=Y(Y({},i),{mutate:function(y){function C(L){return L="idb://".concat(t,"/").concat(r,"/").concat(L),P[L]||(P[L]=new Ue)}var a,u,f,$=y.trans,P=y.mutatedParts||(y.mutatedParts={}),T=C(""),F=C(":dels"),O=y.type,q=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[Ma(c,y).filter(function(L){return L}),y.values]:[],D=q[0],q=q[1],A=y.trans._cache;return te(D)?(T.addKeys(D),(O=O==="delete"||D.length===q.length?Ja(D,A):null)||F.addKeys(D),(O||q)&&(a=C,u=O,f=q,l.indexes.forEach(function(L){var ne=a(L.name||"");function oe(ae){return ae!=null?L.extractKey(ae):null}function W(ae){L.multiEntry&&te(ae)?ae.forEach(function(ke){return ne.addKey(ke)}):ne.addKey(ae)}(u||f).forEach(function(ae,Se){var mt=u&&oe(u[Se]),Se=f&&oe(f[Se]);p(mt,Se)!==0&&(mt!=null&&W(mt),Se!=null)&&W(Se)})}))):D?(q={from:(A=D.lower)!=null?A:e.MIN_KEY,to:(O=D.upper)!=null?O:e.MAX_KEY},F.add(q),T.add(q)):(T.add(n),F.add(n),l.indexes.forEach(function(L){return C(L.name).add(n)})),i.mutate(y).then(function(L){return!D||y.type!=="add"&&y.type!=="put"||(T.addKeys(L.results),g&&g.forEach(function(ne){for(var oe=y.values.map(function(mt){return ne.extractKey(mt)}),W=ne.keyPath.findIndex(function(mt){return mt===c.keyPath}),ae=0,ke=L.results.length;ae<ke;++ae)oe[ae][W]=L.results[ae];C(ne.name).addKeys(oe)})),$.mutatedParts=ra($.mutatedParts||{},P),L})}}),k={get:function(y){return[c,new Ue(y.key)]},getMany:function(y){return[c,new Ue().addKeys(y.keys)]},count:s,query:s,openCursor:s};return fe(k).forEach(function(y){w[y]=function(C){var a=z.subscr,u=!!a,f=Xa(z,i)&&Qa(y,C)?C.obsSet={}:a;if(u){var $,a=function(q){return q="idb://".concat(t,"/").concat(r,"/").concat(q),f[q]||(f[q]=new Ue)},P=a(""),T=a(":dels"),u=k[y](C),F=u[0],u=u[1];if((y==="query"&&F.isPrimaryKey&&!C.values?T:a(F.name||"")).add(u),!F.isPrimaryKey){if(y!=="count")return $=y==="query"&&x&&C.values&&i.query(Y(Y({},C),{values:!1})),i[y].apply(this,arguments).then(function(q){if(y==="query"){if(x&&C.values)return $.then(function(oe){return oe=oe.result,P.addKeys(oe),q});var A=C.values?q.result.map(B):q.result;(C.values?P:T).addKeys(A)}else{var L,ne;if(y==="openCursor")return ne=C.values,(L=q)&&Object.create(L,{key:{get:function(){return T.addKey(L.primaryKey),L.key}},primaryKey:{get:function(){var oe=L.primaryKey;return T.addKey(oe),oe}},value:{get:function(){return ne&&P.addKey(L.primaryKey),L.value}}})}return q});T.add(n)}}return i[y].apply(this,arguments)}}),w}})}};function In(e,t,n){var r;return n.numFailures===0?t:t.type==="deleteRange"||(r=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===r)?null:(r=Y({},t),te(r.keys)&&(r.keys=r.keys.filter(function(s,i){return!(i in n.failures)})),"values"in r&&te(r.values)&&(r.values=r.values.filter(function(s,i){return!(i in n.failures)})),r)}function Ge(e,t){return n=e,((r=t).lower===void 0||(r.lowerOpen?0<p(n,r.lower):0<=p(n,r.lower)))&&(n=e,(r=t).upper===void 0||(r.upperOpen?p(n,r.upper)<0:p(n,r.upper)<=0));var n,r}function Za(e,t,n,r,s,i){var l,c,b,B,x,g;return!n||n.length===0||(l=t.query.index,c=l.multiEntry,b=t.query.range,B=r.schema.primaryKey.extractKey,x=l.extractKey,g=(l.lowLevelIndex||l).extractKey,(r=n.reduce(function(w,k){var y=w,C=[];if(k.type==="add"||k.type==="put")for(var a=new Ue,u=k.values.length-1;0<=u;--u){var f,$=k.values[u],P=B($);!a.hasKey(P)&&(f=x($),c&&te(f)?f.some(function(q){return Ge(q,b)}):Ge(f,b))&&(a.addKey(P),C.push($))}switch(k.type){case"add":var T=new Ue().addKeys(t.values?w.map(function(A){return B(A)}):w),y=w.concat(t.values?C.filter(function(A){return A=B(A),!T.hasKey(A)&&(T.addKey(A),!0)}):C.map(function(A){return B(A)}).filter(function(A){return!T.hasKey(A)&&(T.addKey(A),!0)}));break;case"put":var F=new Ue().addKeys(k.values.map(function(A){return B(A)}));y=w.filter(function(A){return!F.hasKey(t.values?B(A):A)}).concat(t.values?C:C.map(function(A){return B(A)}));break;case"delete":var O=new Ue().addKeys(k.keys);y=w.filter(function(A){return!O.hasKey(t.values?B(A):A)});break;case"deleteRange":var D=k.range;y=w.filter(function(A){return!Ge(B(A),D)})}return y},e))===e)?e:(r.sort(function(w,k){return p(g(w),g(k))||p(B(w),B(k))}),t.limit&&t.limit<1/0&&(r.length>t.limit?r.length=t.limit:e.length===t.limit&&r.length<t.limit&&(s.dirty=!0)),i?Object.freeze(r):r)}function Wt(e,t){return p(e.lower,t.lower)===0&&p(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Nn(e,t){return((n,r,s,i)=>{if(n===void 0)return r!==void 0?-1:0;if(r===void 0)return 1;if((n=p(n,r))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,r,s,i)=>{if(n===void 0)return r!==void 0?1:0;if(r===void 0)return-1;if((n=p(n,r))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function fr(e,t,n,r){e.subscribers.add(n),r.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&jt(i,s)},3e3))})}var hr={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Y(Y({},e),{transaction:function(n,r,s){var i,l,c=e.transaction(n,r,s);return r==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(l=function(b){return function(){if(i.abort(),r==="readwrite"){for(var B=new Set,x=0,g=n;x<g.length;x++){var w=g[x],k=en["idb://".concat(t,"/").concat(w)];if(k){var y=e.table(w),C=k.optimisticOps.filter(function(L){return L.trans===c});if(c._explicit&&b&&c.mutatedParts)for(var a=0,u=Object.values(k.queries.query);a<u.length;a++)for(var f=0,$=(F=u[a]).slice();f<$.length;f++)$t((O=$[f]).obsSet,c.mutatedParts)&&(jt(F,O),O.subscribers.forEach(function(L){return B.add(L)}));else if(0<C.length){k.optimisticOps=k.optimisticOps.filter(function(L){return L.trans!==c});for(var P=0,T=Object.values(k.queries.query);P<T.length;P++)for(var F,O,D,q=0,A=(F=T[P]).slice();q<A.length;q++)(O=A[q]).res!=null&&c.mutatedParts&&(b&&!O.dirty?(D=Object.isFrozen(O.res),D=Za(O.res,O.req,C,y,O,D),O.dirty?(jt(F,O),O.subscribers.forEach(function(L){return B.add(L)})):D!==O.res&&(O.res=D,O.promise=V.resolve({result:D}))):(O.dirty&&jt(F,O),O.subscribers.forEach(function(L){return B.add(L)})))}}}B.forEach(function(L){return L()})}}})(!1),{signal:s}),c.addEventListener("error",l(!1),{signal:s}),c.addEventListener("complete",l(!0),{signal:s})),c},table:function(n){var r=e.table(n),s=r.schema.primaryKey;return Y(Y({},r),{mutate:function(i){var l,c=z.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(l=en["idb://".concat(t,"/").concat(n)])?(c=r.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Ma(s,i).some(function(b){return b==null}))?(l.optimisticOps.push(i),i.mutatedParts&&Fn(i.mutatedParts),c.then(function(b){0<b.numFailures&&(jt(l.optimisticOps,i),(b=In(0,i,b))&&l.optimisticOps.push(b),i.mutatedParts)&&Fn(i.mutatedParts)}),c.catch(function(){jt(l.optimisticOps,i),i.mutatedParts&&Fn(i.mutatedParts)})):c.then(function(b){var B=In(0,Y(Y({},i),{values:i.values.map(function(x,g){var w;return b.failures[g]?x:(at(w=(w=s.keyPath)!=null&&w.includes(".")?Xt(x):Y({},x),s.keyPath,b.results[g]),w)})}),b);l.optimisticOps.push(B),queueMicrotask(function(){return i.mutatedParts&&Fn(i.mutatedParts)})}),c):r.mutate(i)},query:function(i){var l,c,b,B,x,g,w;return Xa(z,r)&&Qa("query",i)?(l=((b=z.trans)==null?void 0:b.db._options.cache)==="immutable",c=(b=z).requery,b=b.signal,g=((k,y,C,a)=>{var u=en["idb://".concat(k,"/").concat(y)];if(!u)return[];if(!(k=u.queries[C]))return[null,!1,u,null];var f=k[(a.query?a.query.index.name:null)||""];if(!f)return[null,!1,u,null];switch(C){case"query":var $=f.find(function(P){return P.req.limit===a.limit&&P.req.values===a.values&&Wt(P.req.query.range,a.query.range)});return $?[$,!0,u,f]:[f.find(function(P){return("limit"in P.req?P.req.limit:1/0)>=a.limit&&(!a.values||P.req.values)&&Nn(P.req.query.range,a.query.range)}),!1,u,f];case"count":return $=f.find(function(P){return Wt(P.req.query.range,a.query.range)}),[$,!!$,u,f]}})(t,n,"query",i),w=g[0],B=g[2],x=g[3],w&&g[1]?w.obsSet=i.obsSet:(g=r.query(i).then(function(k){var y=k.result;if(w&&(w.res=y),l){for(var C=0,a=y.length;C<a;++C)Object.freeze(y[C]);Object.freeze(y)}else k.result=Xt(y);return k}).catch(function(k){return x&&w&&jt(x,w),Promise.reject(k)}),w={obsSet:i.obsSet,promise:g,subscribers:new Set,type:"query",req:i,dirty:!1},x?x.push(w):(x=[w],(B=B||(en["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=x)),fr(w,x,c,b),w.promise.then(function(k){return{result:Za(k.result,i,B?.optimisticOps,r,w,l)}})):r.query(i)}})}})}};function bn(e,t){return new Proxy(e,{get:function(n,r,s){return r==="db"?t:Reflect.get(n,r,s)}})}Ee.prototype.version=function(e){if(isNaN(e)||e<.1)throw new G.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new G.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(r){return r._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(xa),n.stores({}),this._state.autoSchema=!1),n},Ee.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||z.letThrough||this._vip)?e():new V(function(n,r){if(t._state.openComplete)return r(new G.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void r(new G.DatabaseClosed);t.open().catch(he)}t._state.dbReadyPromise.then(n,r)}).then(e)},Ee.prototype.use=function(s){var t=s.stack,n=s.create,r=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:r??10,name:s}),i.sort(function(l,c){return l.level-c.level}),this},Ee.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return r?s.create!==r:!!n&&s.name!==n})),this},Ee.prototype.open=function(){var e=this;return Zt(Nt,function(){return Wa(e)})},Ee.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=fn.indexOf(this);if(0<=t&&fn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new V(function(n){e.dbReadyResolve=n}),e.openCanceller=new V(function(n,r){e.cancelOpen=r}))},Ee.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new G.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new G.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ee.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),r=this._state;return new V(function(s,i){function l(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=ye(function(){var b,B,x;b=t._deps,B=t.name,ta(x=b.indexedDB)||B===Qn||ea(x,b.IDBKeyRange).delete(B).catch(he),s()}),c.onerror=Fe(i),c.onblocked=t._fireOnBlocked}if(n)throw new G.InvalidArgument("Invalid closeOptions argument to db.delete()");r.isBeingOpened?r.dbReadyPromise.then(l):l()})},Ee.prototype.backendDB=function(){return this.idbdb},Ee.prototype.isOpen=function(){return this.idbdb!==null},Ee.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ee.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ee.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ee.prototype,"tables",{get:function(){var e=this;return fe(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ee.prototype.transaction=function(){var e=(function(t,n,r){var s=arguments.length;if(s<2)throw new G.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return r=i.pop(),[t,dt(i),r]}).apply(this,arguments);return this._transaction.apply(this,e)},Ee.prototype._transaction=function(e,t,n){var r,s,i=this,l=z.trans,c=(l&&l.db===this&&e.indexOf("!")===-1||(l=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function(B){if(B=B instanceof i.Table?B.name:B,typeof B!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return B}),e=="r"||e===Z)r=Z;else{if(e!="rw"&&e!=Ca)throw new G.InvalidArgument("Invalid transaction mode: "+e);r=Ca}if(l){if(l.mode===Z&&r===Ca){if(!c)throw new G.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");l=null}l&&s.forEach(function(B){if(l&&l.storeNames.indexOf(B)===-1){if(!c)throw new G.SubTransaction("Table "+B+" not included in parent transaction.");l=null}}),c&&l&&!l.active&&(l=null)}}catch(B){return l?l._promise(null,function(x,g){g(B)}):Me(B)}var b=(function B(x,g,w,k,y){return V.resolve().then(function(){var f=z.transless||z,C=x._createTransaction(g,w,x._dbSchema,k),f=(C.explicit=!0,{trans:C,transless:f});if(k)C.idbtrans=k.idbtrans;else try{C.create(),C.idbtrans._explicit=!0,x._state.PR1398_maxLoop=3}catch($){return $.name===pa.InvalidState&&x.isOpen()&&0<--x._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),x.close({disableAutoOpen:!1}),x.open().then(function(){return B(x,g,w,null,y)})):Me($)}var a,u=ha(y),f=(u&&dn(),V.follow(function(){var $;(a=y.call(C,C))&&(u?($=yt.bind(null,null),a.then($,$)):typeof a.next=="function"&&typeof a.throw=="function"&&(a=Ea(a)))},f));return(a&&typeof a.then=="function"?V.resolve(a).then(function($){return C.active?$:Me(new G.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):f.then(function(){return a})).then(function($){return k&&C._resolve(),C._completion.then(function(){return $})}).catch(function($){return C._reject($),Me($)})})}).bind(null,this,r,s,l,n);return l?l._promise(r,b,"lock"):z.trans?Zt(z.transless,function(){return i._whenReady(b)}):this._whenReady(b)},Ee.prototype.table=function(e){if(re(this._allTables,e))return this._allTables[e];throw new G.InvalidTable("Table ".concat(e," does not exist"))};var Dt=Ee;function Ee(e,t){var n,r,s,i,l,c=this,b=(this._middlewares={},this.verno=0,Ee.dependencies),b=(this._options=t=Y({addons:Ee.addons,autoOpen:!0,indexedDB:b.indexedDB,IDBKeyRange:b.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),B=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:he,dbReadyPromise:null,cancelOpen:he,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),x=(B.dbReadyPromise=new V(function(g){B.dbReadyResolve=g}),B.openCanceller=new V(function(g,w){B.cancelOpen=w}),this._state=B,this.name=e,this.on=Ce(this,"populate","blocked","versionchange","close",{ready:[$n,he]}),this.once=function(g,w){var k=function(){for(var y=[],C=0;C<arguments.length;C++)y[C]=arguments[C];c.on(g).unsubscribe(k),w.apply(c,y)};return c.on(g,k)},this.on.ready.subscribe=Fa(this.on.ready.subscribe,function(g){return function(w,k){Ee.vip(function(){var y,C=c._state;C.openComplete?(C.dbOpenError||V.resolve().then(w),k&&g(w)):C.onReadyBeingFired?(C.onReadyBeingFired.push(w),k&&g(w)):(g(w),y=c,k||g(function a(){y.on.ready.unsubscribe(w),y.on.ready.unsubscribe(a)}))})}}),this.Collection=(n=this,Ye(j.prototype,function(a,C){this.db=n;var k=d,y=null;if(C)try{k=C()}catch(f){y=f}var C=a._ctx,a=C.table,u=a.hook.reading.fire;this._ctx={table:a,index:C.index,isPrimKey:!C.index||a.schema.primKey.keyPath&&C.index===a.schema.primKey.name,range:k,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:y,or:C.or,valueMapper:u!==Rt?u:null}})),this.Table=(r=this,Ye(X.prototype,function(g,w,k){this.db=r,this._tx=k,this.name=g,this.schema=w,this.hook=r._allTables[g]?r._allTables[g].hook:Ce(null,{creating:[Yn,he],reading:[Ke,Rt],updating:[ir,he],deleting:[zn,he]})})),this.Transaction=(s=this,Ye(Pn.prototype,function(g,w,k,y,C){var a=this;g!=="readonly"&&w.forEach(function(u){u=(u=k[u])==null?void 0:u.yProps,u&&(w=w.concat(u.map(function(f){return f.updatesTable})))}),this.db=s,this.mode=g,this.storeNames=w,this.schema=k,this.chromeTransactionDurability=y,this.idbtrans=null,this.on=Ce(this,"complete","error","abort"),this.parent=C||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new V(function(u,f){a._resolve=u,a._reject=f}),this._completion.then(function(){a.active=!1,a.on.complete.fire()},function(u){var f=a.active;return a.active=!1,a.on.error.fire(u),a.parent?a.parent._reject(u):f&&a.idbtrans&&a.idbtrans.abort(),Me(u)})})),this.Version=(i=this,Ye(At.prototype,function(g){this.db=i,this._cfg={version:g,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(l=this,Ye(ze.prototype,function(g,w,k){if(this.db=l,this._ctx={table:g,index:w===":id"?null:w,or:k},this._cmp=this._ascending=p,this._descending=function(y,C){return p(C,y)},this._max=function(y,C){return 0<p(y,C)?y:C},this._min=function(y,C){return p(y,C)<0?y:C},this._IDBKeyRange=l._deps.IDBKeyRange,!this._IDBKeyRange)throw new G.MissingAPI})),this.on("versionchange",function(g){0<g.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(g){!g.newVersion||g.newVersion<g.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(g.oldVersion/10))}),this._maxKey=xe(t.IDBKeyRange),this._createTransaction=function(g,w,k,y){return new c.Transaction(g,w,k,c._options.chromeTransactionDurability,y)},this._fireOnBlocked=function(g){c.on("blocked").fire(g),fn.filter(function(w){return w.name===c.name&&w!==c&&!w._state.vcFired}).map(function(w){return w.on("versionchange").fire(g)})},this.use(Ha),this.use(hr),this.use(vt),this.use(dr),this.use(Dn),new Proxy(this,{get:function(g,w,k){var y;return w==="_vip"||(w==="table"?function(C){return bn(c.table(C),x)}:(y=Reflect.get(g,w,k))instanceof X?bn(y,x):w==="tables"?y.map(function(C){return bn(C,x)}):w==="_createTransaction"?function(){return bn(y.apply(this,arguments),x)}:y)}}));this.vip=x,b.forEach(function(g){return g(c)})}var Kn,yn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",lt=(Oa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Oa.prototype[yn]=function(){return this},Oa);function Oa(e){this._subscribe=e}try{Kn={indexedDB:ee.indexedDB||ee.mozIndexedDB||ee.webkitIndexedDB||ee.msIndexedDB,IDBKeyRange:ee.IDBKeyRange||ee.webkitIDBKeyRange}}catch{Kn={indexedDB:null,IDBKeyRange:null}}function Ta(e){var t,n=!1,r=new lt(function(s){var i=ha(e),l,c=!1,b={},B={},x={get closed(){return c},unsubscribe:function(){c||(c=!0,l&&l.abort(),g&&je.storagemutated.unsubscribe(k))}},g=(s.start&&s.start(x),!1),w=function(){return Xn(y)},k=function(C){ra(b,C),$t(B,b)&&w()},y=function(){var C,a,u;!c&&Kn.indexedDB&&(b={},C={},l&&l.abort(),l=new AbortController,u=(f=>{var $=un();try{i&&dn();var P=Vt(e,f);return P=i?P.finally(yt):P}finally{$&&cn()}})(a={subscr:C,signal:l.signal,requery:w,querier:e,trans:null}),Promise.resolve(u).then(function(f){n=!0,t=f,c||a.signal.aborted||(b={},($=>{for(var P in $)if(re($,P))return;return 1})(B=C)||g||(je(Le,k),g=!0),Xn(function(){return!c&&s.next&&s.next(f)}))},function(f){n=!1,["DatabaseClosedError","AbortError"].includes(f?.name)||c||Xn(function(){c||s.error&&s.error(f)})}))};return setTimeout(w,0),x});return r.hasValue=function(){return n},r.getValue=function(){return t},r}var tn=Dt;function Aa(e){var t=ut;try{ut=!0,je.storagemutated.fire(e),ia(e,!0)}finally{ut=t}}Qe(tn,Y(Y({},Pt),{delete:function(e){return new tn(e,{addons:[]}).delete()},exists:function(e){return new tn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=tn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(ta(n)?Promise.resolve(n.databases()).then(function(r){return r.map(function(s){return s.name}).filter(function(s){return s!==Qn})}):ea(n,t).toCollection().primaryKeys()).then(e)}catch{return Me(new G.MissingAPI)}var t,n},defineClass:function(){return function(e){ce(this,e)}},ignoreTransaction:function(e){return z.trans?Zt(z.transless,e):e()},vip:na,async:function(e){return function(){try{var t=Ea(e.apply(this,arguments));return t&&typeof t.then=="function"?t:V.resolve(t)}catch(n){return Me(n)}}},spawn:function(e,t,n){try{var r=Ea(e.apply(n,t||[]));return r&&typeof r.then=="function"?r:V.resolve(r)}catch(s){return Me(s)}},currentTransaction:{get:function(){return z.trans||null}},waitFor:function(e,t){return e=V.resolve(typeof e=="function"?tn.ignoreTransaction(e):e).timeout(t||6e4),z.trans?z.trans.waitFor(e):e},Promise:V,debug:{get:function(){return bt},set:function(e){qa(e)}},derive:St,extend:ce,props:Qe,override:Fa,Events:Ce,on:je,liveQuery:Ta,extendObservabilitySet:ra,getByKeyPath:_t,setByKeyPath:at,delByKeyPath:function(e,t){typeof t=="string"?at(e,t,void 0):"length"in t&&[].map.call(t,function(n){at(e,n,void 0)})},shallowClone:It,deepClone:Xt,getObjectDiff:Pa,cmp:p,asap:Da,minKey:-1/0,addons:[],connections:fn,errnames:pa,dependencies:Kn,cache:en,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),tn.maxKey=xe(tn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(je(Le,function(e){ut||(e=new CustomEvent(it,{detail:e}),ut=!0,dispatchEvent(e),ut=!1)}),addEventListener(it,function(e){e=e.detail,ut||Aa(e)}));var Cn,ut=!1,Jt=function(){};return typeof BroadcastChannel<"u"&&((Jt=function(){(Cn=new BroadcastChannel(it)).onmessage=function(e){return e.data&&Aa(e.data)}})(),typeof Cn.unref=="function"&&Cn.unref(),je(Le,function(e){ut||Cn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Dt.disableBfCache&&e.persisted){bt&&console.debug("Dexie: handling persisted pagehide"),Cn?.close();for(var t=0,n=fn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Dt.disableBfCache&&e.persisted&&(bt&&console.debug("Dexie: handling persisted pageshow"),Jt(),Aa({all:new Ue(-1/0,[[]])}))})),V.rejectionMapper=function(e,t){return!e||e instanceof rn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!kn[e.name]?e:(t=new kn[e.name](t||e.message,e),"stack"in e&&ct(t,"stack",{get:function(){return this.inner.stack}}),t)},qa(bt),Y(Dt,Object.freeze({__proto__:null,Dexie:Dt,Entity:h,PropModification:K,RangeSet:Ue,add:function(e){return new K({add:e})},cmp:p,default:Dt,liveQuery:Ta,mergeRanges:mn,rangesOverlap:$a,remove:function(e){return new K({remove:e})},replacePrefix:function(e,t){return new K({replacePrefix:[e,t]})}}),{default:Dt}),Dt})})(er)),er.exports}var Yr=Vr();const pr=jr(Yr),Pr=Symbol.for("Dexie"),tr=globalThis[Pr]||(globalThis[Pr]=pr);if(pr.semVer!==tr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${pr.semVer} and ${tr.semVer}`);const{liveQuery:ns,mergeRanges:as,rangesOverlap:rs,RangeSet:ss,cmp:is,Entity:os,PropModification:ls,replacePrefix:us,add:cs,remove:ds,DexieYProvider:fs}=tr,nt=new tr("haushaltsbuch-db");nt.version(1).stores({years:"year",fixedTemplateState:"id"});nt.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const ca="singleton";function nr(){return new Date().toISOString()}async function jn(){return nt.years.orderBy("year").toArray()}async function zr(E){return nt.years.get(E)}async function Ln(E){await nt.years.put(E)}async function vr(){const E=await nt.fixedTemplateState.get(ca);if(!E){const v={id:ca,templates:[],version:nr(),updatedAt:new Date().toISOString()};return await nt.fixedTemplateState.put(v),{templates:[],version:v.version}}return{templates:E.templates,version:E.version}}async function mr(E){const v=nr();return await nt.fixedTemplateState.put({id:ca,templates:E,version:v,updatedAt:new Date().toISOString()}),v}async function gr(){const E=await nt.annualVariableFixedTemplateState.get(ca);if(!E){const v={id:ca,templates:[],version:nr(),updatedAt:new Date().toISOString()};return await nt.annualVariableFixedTemplateState.put(v),{templates:[],version:v.version}}return{templates:E.templates,version:E.version}}async function br(E){const v=nr();return await nt.annualVariableFixedTemplateState.put({id:ca,templates:E,version:v,updatedAt:new Date().toISOString()}),v}async function Ur(){const E=await jn(),[v,Be]=await Promise.all([vr(),gr()]);return{exportedAt:new Date().toISOString(),years:E,fixedTemplates:v.templates,annualVariableFixedTemplates:Be.templates}}async function Gr(E){await nt.transaction("rw",[nt.years,nt.fixedTemplateState,nt.annualVariableFixedTemplateState],async()=>{await nt.years.clear(),await nt.years.bulkPut(E.years),await mr(E.fixedTemplates),await br(E.annualVariableFixedTemplates??[])})}function Pe(E){const v=E.replace(",",".").trim();if(!v)return 0;const Be=Number.parseFloat(v);return Number.isNaN(Be)?0:Math.round(Be*100)}const Wr=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function S(E){return Wr.format(E/100)}function gt(E){return(E/100).toFixed(2)}function $e(E){return new Date(2026,E-1,1).toLocaleDateString("de-DE",{month:"long"})}const Tr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Mr(E){return Tr.includes(E)}function Jr(E){switch(E){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}function Hr(E){const v={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Be="habu-theme",Y="habu-backup-dirty",ue="habu-unexported-change-log",ee="habu-last-backup-filename",fe="habu-recurring-budget-defaults";let te=null,ce=null,He=null,Xe=!1,re=!1;const Qe=new WeakMap;function Ze(){const o=E.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const d=getComputedStyle(document.documentElement),m=d.getPropertyValue("--text-main").trim(),h=d.getPropertyValue("--text-muted").trim(),p=d.getPropertyValue("--table-stripe").trim(),M=d.getPropertyValue("--table-border").trim(),I=d.getPropertyValue("--budget-under").trim(),R=d.getPropertyValue("--danger-2").trim(),K=96,J=250,U=X=>1-Math.pow(1-Math.max(0,Math.min(1,X)),3);o.forEach(X=>{X.dataset.hoverBound!=="1"&&(X.dataset.hoverBound="1",X.addEventListener("mouseenter",()=>{X.dataset.hovering="1",Ze()}),X.addEventListener("mouseleave",()=>{delete X.dataset.hovering,delete X.dataset.hoverX,Ze()}),X.addEventListener("mousemove",le=>{const pe=X.getBoundingClientRect(),_e=Math.round(le.clientX-pe.left);X.dataset.hoverX=String(_e),Ze()}));const H=Number.parseInt(X.dataset.budgetCents??"0",10),Ce=Number.parseInt(X.dataset.actualCents??"0",10),Ye=X.dataset.label??"Kategorie",Oe=X.dataset.hovering==="1",de=`${Ye}|${H}|${Ce}`,et=X.dataset.lastRenderSignature!==de;X.dataset.lastRenderSignature=de;const De=Math.max(120,Math.floor(X.clientWidth||120)),st=window.devicePixelRatio||1,Ct=Math.floor(De*st),ht=Math.floor(K*st);(X.width!==Ct||X.height!==ht)&&(X.width=Ct,X.height=ht);const j=X.getContext("2d");if(!j)return;const Q=Math.max(1,H,Ce),Tt=Math.min(1,Math.max(0,H/Q)),wt=Math.min(1,Math.max(0,Ce/Q)),tt=H-Ce,ge=H>0?Ce/H*100:Ce>0?100:0,Je=8,ve=Je,Ae=34,pt=De-Je*2,ze=22,ie=Number.parseInt(X.dataset.hoverX??"-1",10),Fe=(le,pe,_e,Ie,xe)=>{j.beginPath(),j.moveTo(le+xe,pe),j.lineTo(le+_e-xe,pe),j.quadraticCurveTo(le+_e,pe,le+_e,pe+xe),j.lineTo(le+_e,pe+Ie-xe),j.quadraticCurveTo(le+_e,pe+Ie,le+_e-xe,pe+Ie),j.lineTo(le+xe,pe+Ie),j.quadraticCurveTo(le,pe+Ie,le,pe+Ie-xe),j.lineTo(le,pe+xe),j.quadraticCurveTo(le,pe,le+xe,pe),j.closePath()},xt=le=>{j.setTransform(1,0,0,1,0,0),j.clearRect(0,0,X.width,X.height),j.scale(st,st),Fe(ve,Ae,pt,ze,8),j.fillStyle=p,j.fill(),j.strokeStyle=M,j.lineWidth=1,j.stroke();const pe=[.6,.25,.15],_e=[.1,.16,.24];let Ie=0;pe.forEach((_,N)=>{const Ne=pt*_;j.save(),j.globalAlpha=_e[N]??.1,j.fillStyle=h,j.fillRect(ve+Ie,Ae,Ne,ze),j.restore(),Ie+=Ne});const xe=H>0&&Ce>H?R:I,Ut=pt*wt*le;Fe(ve,Ae+3,Ut,ze-6,6),j.fillStyle=xe,j.fill(),Oe&&(j.save(),j.strokeStyle=xe,j.lineWidth=1.5,j.globalAlpha=.8,Fe(ve-1,Ae+2,Math.max(2,Ut+2),ze-4,7),j.stroke(),j.restore());const kt=ve+pt*Tt;j.strokeStyle=m,j.lineWidth=Oe?3:2,j.beginPath(),j.moveTo(kt,Ae-3),j.lineTo(kt,Ae+ze+3),j.stroke(),Oe&&ie>=ve&&ie<=ve+pt&&(j.save(),j.strokeStyle=m,j.globalAlpha=.35,j.lineWidth=1,j.beginPath(),j.moveTo(ie,Ae-8),j.lineTo(ie,Ae+ze+8),j.stroke(),j.restore()),j.fillStyle=m,j.font="600 12px system-ui, -apple-system, sans-serif",j.textAlign="left",j.textBaseline="top",j.fillText(Ye,ve,10);const hn=ge*le;if(j.fillStyle=ge>100?R:ge<100?I:h,j.textAlign="right",j.fillText(`${hn.toFixed(0)}%`,ve+pt,10),j.fillStyle=h,j.font="500 11px system-ui, -apple-system, sans-serif",j.textAlign="left",j.textBaseline="top",j.fillText(`Ist ${S(Ce)} · Ziel ${S(H)} · Δ ${tt>=0?"+":""}${S(tt)}`,ve,64),Oe){const _=`Nutzung ${ge.toFixed(1)}%`;j.font="600 11px system-ui, -apple-system, sans-serif";const N=8,Ne=5,me=22,Gt=j.measureText(_).width+N*2,xa=Number.isFinite(ie)?ie-Gt/2:ve+pt-Gt,Mn=Math.min(ve+pt-Gt,Math.max(ve,xa)),On=Ae-me-8;j.save(),j.fillStyle=m,j.globalAlpha=.92,Fe(Mn,On,Gt,me,6),j.fill(),j.restore(),j.fillStyle=p,j.textAlign="left",j.textBaseline="top",j.fillText(_,Mn+N,On+Ne)}},Le=Qe.get(X);if(Le&&window.cancelAnimationFrame(Le),!et){xt(1);return}const it=performance.now(),je=le=>{const pe=le-it,_e=Math.min(1,pe/J);if(xt(U(_e)),_e<1){const Ie=window.requestAnimationFrame(je);Qe.set(X,Ie);return}Qe.delete(X)},Pn=window.requestAnimationFrame(je);Qe.set(X,Pn)})}function ct(o){if(o==="dashboard"){const d=v.years.slice().sort((h,p)=>p.year-h.year);d.some(h=>h.year===v.dashboardYear)||(v.dashboardYear=v.selectedYear??d[0]?.year??null)}v.topModal=o,Z()}function St(){v.topModal&&(v.topModal=null,Z())}function ar(){v.showUnexportedChangeLogModal=!0,Z()}function da(){v.showUnexportedChangeLogModal&&(v.showUnexportedChangeLogModal=!1,Z())}function Rn(){Xe||(Xe=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(v.showUnexportedChangeLogModal){o.preventDefault(),da();return}v.topModal&&(o.preventDefault(),St())}}))}function Fa(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const d=o/6;return window.scrollY>d}function nn(){const o=E.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",Fa())}function Da(){if(re)return;re=!0;const o=()=>{nn(),Ze()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function _t(){if(te&&document.body.contains(te))return te;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return te=o,o;const d=document.createElement("div");return d.id="toast-root",d.className="toast-root",d.setAttribute("aria-live","polite"),d.setAttribute("aria-atomic","true"),document.body.appendChild(d),te=d,d}function at(){if(ce&&document.body.contains(ce))return ce;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return ce=o,o;const d=document.createElement("div");return d.id="amount-modal-root",document.body.appendChild(d),ce=d,d}function It(){if(!ce){He=null;return}ce.innerHTML="",He=null}function Ia(o,d){let m=o;const h=d.min;if(h){const M=Number.parseFloat(h);if(!Number.isNaN(M)){const I=Math.round(M*100);m=Math.max(m,I)}}const p=d.max;if(p){const M=Number.parseFloat(p);if(!Number.isNaN(M)){const I=Math.round(M*100);m=Math.min(m,I)}}return m}function dt(o){if(o.disabled)return;const d=at();It(),He=o;const m=Pe(o.value||"0"),h="Betrag anpassen";d.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${h}">
        <div class="amount-modal card">
          <h3>${h}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${S(m)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${S(m)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${S(m)} €</strong></div>
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
    `;const p=d.querySelector(".amount-modal-backdrop"),M=d.querySelector("#amount-modal-delta"),I=d.querySelector("#amount-modal-next-delta"),R=d.querySelector("#amount-modal-next-overwrite"),K=d.querySelector("#amount-modal-cancel"),J=d.querySelector("#amount-modal-overwrite"),U=d.querySelector("#amount-modal-apply");function X(){const de=Pe(M?.value??"0");return Ia(m+de,o)}function H(){const de=Pe(M?.value??"0");return Ia(de,o)}function Ce(){I&&(I.textContent=`${S(X())} €`),R&&(R.textContent=`${S(H())} €`)}function Ye(){const de=He;if(!de){It();return}const et=X();It(),de.value=gt(et),de.dispatchEvent(new Event("change",{bubbles:!0}))}function Oe(){const de=He;if(!de){It();return}const et=H();It(),de.value=gt(et),de.dispatchEvent(new Event("change",{bubbles:!0}))}K?.addEventListener("click",()=>{It()}),J?.addEventListener("click",()=>{Oe()}),U?.addEventListener("click",()=>{Ye()}),M?.addEventListener("input",()=>{Ce()}),M?.addEventListener("keydown",de=>{if(de.key==="Escape"){de.preventDefault(),It();return}de.key==="Enter"&&(de.preventDefault(),Ye())}),p?.addEventListener("click",de=>{de.target===p&&It()}),window.setTimeout(()=>{M?.focus(),M?.select(),Ce()},0)}function be(o,d="success"){const m=_t(),h=document.createElement("div");h.className=`toast toast-${d}`,h.textContent=o,m.appendChild(h),requestAnimationFrame(()=>{h.classList.add("toast-visible")});const p=d==="error"?5e3:3e3;window.setTimeout(()=>{h.classList.remove("toast-visible"),window.setTimeout(()=>{h.remove()},220)},p)}function Lt(){return new Date().getMonth()+1}function Xt(){return new Date().getFullYear()}function Na(o){const d=Xt(),m=o.find(h=>h.year===d);return m?m.year:o[0]?.year??null}function fa(){return new Date().toISOString().slice(0,10)}function Vn(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function rr(){const o=localStorage.getItem(Be);return o&&Mr(o)?o:"light"}function jt(o){v.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Be,o)}function an(){return localStorage.getItem(Y)==="1"}function Et(o){localStorage.setItem(Y,o?"1":"0")}function ha(){const o=localStorage.getItem(ue);if(!o)return[];try{const d=JSON.parse(o);return Array.isArray(d)?d.filter(m=>{if(!m||typeof m!="object")return!1;const h=m;return typeof h.id=="string"&&typeof h.timestampIso=="string"&&typeof h.message=="string"}).slice(-200):[]}catch{return[]}}function Pt(o){localStorage.setItem(ue,JSON.stringify(o.slice(-200)))}function sr(){const o=localStorage.getItem(ee);if(!o)return null;const d=o.trim();return d||null}function rn(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},d=localStorage.getItem(fe);if(!d)return o;try{const m=JSON.parse(d),h=p=>typeof p=="number"&&Number.isFinite(p)?p:null;return{foodBudgetCents:h(m.foodBudgetCents),goingOutBudgetCents:h(m.goingOutBudgetCents),fixedBudgetCents:h(m.fixedBudgetCents),variableBudgetCents:h(m.variableBudgetCents),miscBudgetCents:h(m.miscBudgetCents)}}catch{return o}}function Ka(o){localStorage.setItem(fe,JSON.stringify(o))}function wn(o){o.months.forEach(d=>{const{recurringBudgetDefaults:m}=v;typeof m.foodBudgetCents=="number"&&(d.foodBudgetCents=m.foodBudgetCents),typeof m.goingOutBudgetCents=="number"&&(d.goingOutBudgetCents=m.goingOutBudgetCents),typeof m.fixedBudgetCents=="number"&&(d.fixedBudgetCents=m.fixedBudgetCents),typeof m.variableBudgetCents=="number"&&(d.variableBudgetCents=m.variableBudgetCents),typeof m.miscBudgetCents=="number"&&(d.miscBudgetCents=m.miscBudgetCents)})}function sn(o){const d=o.trim();d&&localStorage.setItem(ee,d)}async function pa(){_t(),jt(rr()),v.hasUnexportedChanges=an(),v.unexportedChangeLog=ha(),v.lastBackupFileName=sr(),v.recurringBudgetDefaults=rn(),Rn(),Da();const[o,d,m]=await Promise.all([jn(),vr(),gr()]);v.years=o,v.annualVariableFixedTemplates=m.templates,v.annualVariableFixedTemplateVersion=m.version,va(v.years),ln(v.years),v.fixedTemplates=d.templates,v.fixedTemplateVersion=d.version,await he(v.years),o.length>0&&(v.selectedYear=Na(o),v.selectedMonth=Lt()),Z()}function va(o){const d=m=>m==="balance"||m==="fresh"||m==="salary"?m:void 0;o.forEach(m=>{m.months.forEach(h=>{typeof h.foodBudgetCents!="number"&&(h.foodBudgetCents=0),typeof h.goingOutBudgetCents!="number"&&(h.goingOutBudgetCents=0),Array.isArray(h.incomes)?h.incomes=h.incomes.map(p=>{const M=d(p.incomeSource);if(!M){const{incomeSource:I,...R}=p;return R}return{...p,incomeSource:M}}):h.incomes=[],typeof h.fixedBudgetCents!="number"&&(h.fixedBudgetCents=h.fixedCosts.reduce((p,M)=>p+M.plannedCents,0)),typeof h.variableBudgetCents!="number"&&(h.variableBudgetCents=h.variablePositions.reduce((p,M)=>p+M.budgetCents,0)),Array.isArray(h.variablePositions)||(h.variablePositions=[]),typeof h.miscBudgetCents!="number"&&(h.miscBudgetCents=0)})})}function G(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function kn(o){return o==="fresh"||o==="salary"||!o}async function he(o){for(const d of o)await Ln(d)}function Rt(){if(v.selectedYear)return v.years.find(o=>o.year===v.selectedYear)}function Ke(){const o=Rt();if(o)return o.months.find(d=>d.month===v.selectedMonth)}function Mt(o){const d=o.days.reduce((R,K)=>R+K.foodCents,0),m=o.days.reduce((R,K)=>R+K.goingOutCents,0),h=o.fixedCosts.reduce((R,K)=>R+K.actualCents,0),p=o.variableCosts.reduce((R,K)=>R+K.amountCents,0)+o.variablePositions.reduce((R,K)=>R+K.actualCents,0),M=o.miscCosts.reduce((R,K)=>R+K.amountCents,0),I=d+m+h+p+M;return{foodCents:d,goingOutCents:m,fixedCents:h,variableCents:p,miscCents:M,totalCents:I}}function Yn(o){const d=o.foodBudgetCents??0,m=o.goingOutBudgetCents??0,h=o.fixedBudgetCents??o.fixedCosts.reduce((I,R)=>I+R.plannedCents,0),p=o.variablePositions.reduce((I,R)=>I+R.budgetCents,0),M=o.miscBudgetCents??0;return d+m+h+(o.variableBudgetCents??p)+M}function zn(o){return o.months.reduce((d,m)=>{const h=Mt(m);return{foodCents:d.foodCents+h.foodCents,goingOutCents:d.goingOutCents+h.goingOutCents,fixedCents:d.fixedCents+h.fixedCents,variableCents:d.variableCents+h.variableCents,miscCents:d.miscCents+h.miscCents,totalCents:d.totalCents+h.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function ir(o){return o.months.slice().sort((d,m)=>d.month-m.month).map(d=>({month:d.month,summary:Mt(d)}))}function ma(o){const d=o.months.reduce((I,R)=>I+(R.foodBudgetCents??0),0),m=o.months.reduce((I,R)=>I+(R.goingOutBudgetCents??0),0),h=o.months.reduce((I,R)=>I+(R.fixedBudgetCents??R.fixedCosts.reduce((K,J)=>K+J.plannedCents,0)),0),p=o.months.reduce((I,R)=>I+(R.variableBudgetCents??R.variablePositions.reduce((K,J)=>K+J.budgetCents,0)),0),M=o.months.reduce((I,R)=>I+(R.miscBudgetCents??0),0);return{foodCents:d,goingOutCents:m,fixedCents:h,variableCents:p,miscCents:M,totalCents:d+m+h+p+M}}function $n(o){return o.months.reduce((d,m)=>d+m.incomes.reduce((h,p)=>h+(kn(p.incomeSource)?p.amountCents:0),0),0)}function bt(o,d){const m=o.months.slice().sort((h,p)=>h.month-p.month)[0];return m?d.get(se(o.year,m.month))?.carriedFromPreviousCents??0:0}function qa(){const o=v.years.slice().sort((h,p)=>h.year-p.year).flatMap(h=>h.months.slice().sort((p,M)=>p.month-M.month).map(p=>({year:h.year,month:p}))),d=new Map;let m=0;return o.forEach(({year:h,month:p},M)=>{const I=p.carryoverOverrideCents,R=typeof I=="number",K=R?I:m,J=M>0||R,U=p.incomes.reduce((Ye,Oe)=>Ye+(kn(Oe.incomeSource)?Oe.amountCents:0),0),X=Yn(p),H=U+K,Ce=H-X;d.set(se(h,p.month),{hasPreviousMonth:J,carriedFromPreviousCents:K,recordedIncomeCents:U,effectiveIncomeCents:H,plannedBudgetCents:X,netCents:Ce}),m=Ce}),d}function We(o,d){return d<=0?"":o>d?"budget-over":o<d?"budget-under":""}function La(o){return`${o>0?"+":""}${S(o)}`}function Ot(o,d){const m=o-d,h=We(d,o);return`${S(o)} <span class="eval-diff ${h}">(Δ ${La(m)})</span>`}function Re(o,d){const m=o!==null,h=m?o-d:null,p=m?We(d,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${m?`${S(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${S(d)} €</strong>
      </div>
      <div class="column-overview-row ${p}">
        <span>Diff</span>
        <strong>${h===null?"-":`${S(h)} €`}</strong>
      </div>
    </div>`}async function Qt(o){if(await zr(o)){alert(`Jahr ${o} existiert bereits.`);return}const m=Br(o,v.fixedTemplates,v.fixedTemplateVersion);wn(m),z(m),await Ln(m),v.years=await jn(),on(`Jahr ${o} wurde angelegt`),v.selectedYear=o,v.selectedMonth=Lt(),be(`Jahr ${o} wurde angelegt.`),Z()}function on(o="Änderung an den Daten"){v.hasUnexportedChanges=!0,Et(!0);const d=v.selectedYear?`${v.selectedYear}-${String(v.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",m={id:Bt("change"),timestampIso:new Date().toISOString(),message:`${o} (${d})`};v.unexportedChangeLog=[...v.unexportedChangeLog,m].slice(-200),Pt(v.unexportedChangeLog)}function Bn(o){const d=o.trim();d&&(v.lastBackupFileName=d,sn(d))}function Un(o){v.hasUnexportedChanges=!1,Et(!1),v.unexportedChangeLog=[],Pt([]),v.showUnexportedChangeLogModal=!1,Bn(o)}async function Te(o){const d=Rt();d&&(await Ln(d),v.years=await jn(),on(o))}async function Ve(o){for(const d of v.years)await Ln(d);v.years=await jn(),on(o)}function se(o,d){return o*100+d}function Sn(o){const d=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!d)return null;const m=d[1],h=d[2];return!m||!h?null:{year:Number.parseInt(m,10),month:Number.parseInt(h,10)}}function Nt(o,d){const m=Sn(o.dueDateIso);if(!m||d.year<m.year)return;const h=d.months.find(M=>M.month===m.month);!h||h.variablePositions.some(M=>M.autoAnnualTemplateId===o.id)||(h.variablePositions=[{id:Bt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...h.variablePositions],ft(h))}function z(o){v.annualVariableFixedTemplates.forEach(d=>{Nt(d,o)})}function ln(o){const d=new Set(v.annualVariableFixedTemplates.map(m=>m.id));o.forEach(m=>{m.months.forEach(h=>{const p=h.variablePositions.some(I=>typeof I.autoAnnualTemplateId=="string"),M=h.fixedCosts.some(I=>typeof I.autoAnnualTemplateId=="string");p&&(h.variablePositions=h.variablePositions.filter(I=>I.autoAnnualTemplateId?d.has(I.autoAnnualTemplateId):!0),ft(h)),M&&(h.fixedCosts=h.fixedCosts.filter(I=>!I.autoAnnualTemplateId),rt(h))}),z(m)})}function rt(o){o.fixedBudgetCents=o.fixedCosts.reduce((d,m)=>d+m.plannedCents,0)}function ft(o){o.variableBudgetCents=o.variablePositions.reduce((d,m)=>d+m.budgetCents,0)}function V(){if(v.selectedYear)return`${v.selectedYear}-${String(v.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function Gn(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",V());if(!o)return null;const d=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!d)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const m=d[1],h=d[2];return!m||!h?null:{year:Number.parseInt(m,10),month:Number.parseInt(h,10)}}function ja(o,d){const m=se(d.year,d.month);v.years.forEach(h=>{h.months.forEach(p=>{if(se(h.year,p.month)<m)return;p.fixedCosts.some(I=>I.templateId===o.id)||(p.fixedCosts.push({id:Bt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),rt(p))})})}function ga(o,d,m){const h=se(m.year,m.month);v.years.forEach(p=>{p.months.forEach(M=>{se(p.year,M.month)<h||(M.fixedCosts=M.fixedCosts.map(I=>I.templateId!==d.id?I:{...I,name:d.name,plannedCents:d.plannedCents,actualCents:I.actualCents===o.plannedCents?d.plannedCents:I.actualCents}),rt(M))})})}function Ra(o,d){const m=se(d.year,d.month);v.years.forEach(h=>{h.months.forEach(p=>{se(h.year,p.month)<m||(p.fixedCosts=p.fixedCosts.filter(M=>M.templateId!==o),rt(p))})})}async function ba(o,d){const m=o.trim();if(!m)return;const h=Gn();if(!h)return;const p=!!v.editingFixedTemplateId;if(v.editingFixedTemplateId){const M=v.fixedTemplates.find(R=>R.id===v.editingFixedTemplateId);if(!M)return;const I={...M,name:m,plannedCents:d};v.fixedTemplates=v.fixedTemplates.map(R=>R.id===v.editingFixedTemplateId?I:R),ga(M,I,h)}else{const M={id:Bt("tpl"),name:m,plannedCents:d};v.fixedTemplates=[...v.fixedTemplates,M],ja(M,h)}v.fixedTemplateVersion=await mr(v.fixedTemplates),v.editingFixedTemplateId=null,await Ve(p?`Fixkosten-Vorlage aktualisiert: ${m} (${S(d)} €)`:`Fixkosten-Vorlage hinzugefügt: ${m} (${S(d)} €)`),be(p?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),Z()}function or(o){v.editingFixedTemplateId=o,Z()}function lr(){v.editingFixedTemplateId=null,Z()}async function un(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const m=Gn();if(!m)return;const h=v.fixedTemplates.find(p=>p.id===o);v.fixedTemplates=v.fixedTemplates.filter(p=>p.id!==o),Ra(o,m),v.editingFixedTemplateId===o&&(v.editingFixedTemplateId=null),v.fixedTemplateVersion=await mr(v.fixedTemplates),await Ve(`Fixkosten-Vorlage gelöscht: ${h?.name??"Unbekannt"}`),be("Fixkosten-Vorlage wurde gelöscht."),Z()}async function cn(o,d,m){const h=o.trim();if(!h){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const p=Sn(d);if(!p){alert("Bitte ein gültiges Datum auswählen.");return}if(m<=0){alert("Bitte einen positiven Betrag eingeben.");return}const M={id:Bt("annualtpl"),name:h,plannedCents:m,dueDateIso:d};v.annualVariableFixedTemplates=[...v.annualVariableFixedTemplates,M],v.years.forEach(I=>{Nt(M,I)}),v.annualVariableFixedTemplateVersion=await br(v.annualVariableFixedTemplates),await Ve(`Variable Fixkosten-Vorlage hinzugefügt: ${h} (${S(m)} €, jährlich in ${$e(p.month)})`),be("Variable Fixkosten-Vorlage wurde hinzugefügt."),Z()}async function ya(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const m=v.annualVariableFixedTemplates.find(h=>h.id===o);m&&(v.annualVariableFixedTemplates=v.annualVariableFixedTemplates.filter(h=>h.id!==o),v.years.forEach(h=>{h.months.forEach(p=>{p.variablePositions=p.variablePositions.filter(M=>M.autoAnnualTemplateId!==o),ft(p),p.fixedCosts=p.fixedCosts.filter(M=>M.autoAnnualTemplateId!==o),rt(p)})}),v.annualVariableFixedTemplateVersion=await br(v.annualVariableFixedTemplates),await Ve(`Variable Fixkosten-Vorlage gelöscht: ${m.name}`),be("Variable Fixkosten-Vorlage wurde gelöscht."),Z())}async function _n(o,d,m){const h=Ke();h&&(h.days=h.days.map(p=>p.isoDate===o?{...p,[d]:m}:p),await Te(`${d==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${S(m)} €`),Z())}async function ye(o,d){const m=Ke();if(!m)return;const h=m.fixedCosts.find(p=>p.id===o);m.fixedCosts=m.fixedCosts.map(p=>p.id===o?{...p,actualCents:d}:p),await Te(`Fixkosten-Ist angepasst: ${h?.name??"Unbekannt"} auf ${S(d)} €`),Z()}async function qe(o,d){const m=Ke();if(!m)return;const h=m.fixedCosts.find(p=>p.id===o);h&&(m.fixedCosts=m.fixedCosts.map(p=>p.id===o?{...p,plannedCents:d}:p),rt(m),await Te(`Fixkosten-Budget angepasst: ${h.name} auf ${S(d)} €`),Z())}async function ur(o,d){const m=Ke();if(!m)return;const h=o.trim();if(!h){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(d<=0){alert("Bitte einen positiven Betrag eingeben.");return}const p={id:Bt("fixed"),templateId:Bt("fixed-local"),name:h,plannedCents:d,actualCents:0};m.fixedCosts=[p,...m.fixedCosts],rt(m),await Te(`Fixkosten-Position hinzugefügt: ${h} (${S(d)} €)`),be("Fixkosten-Position wurde hinzugefügt."),Z()}async function Wn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const m=Ke();if(!m)return;const h=m.fixedCosts.find(p=>p.id===o);h&&(m.fixedCosts=m.fixedCosts.filter(p=>p.id!==o),rt(m),await Te(`Fixkosten-Position gelöscht: ${h.name}`),be("Fixkosten-Position wurde gelöscht."),Z())}async function Jn(o){await yt("fixedBudgetCents",o,"Fixkosten")}async function Hn(o){await yt("foodBudgetCents",o,"Essen")}async function cr(o){await yt("goingOutBudgetCents",o,"Ausgehen")}async function Vt(o){await yt("miscBudgetCents",o,"Sonstiges")}async function dn(o){await yt("variableBudgetCents",o,"Variable Kosten")}async function yt(o,d,m){const h=Ke(),p=v.selectedYear;if(!h||!p||h[o]===d)return;if(h[o]=d,confirm(`Soll das Budget "${m}" auch für zukünftige Monate übernommen werden?`)){const I=se(p,v.selectedMonth);v.years.forEach(R=>{R.months.forEach(K=>{se(R.year,K.month)<=I||(K[o]=d)})}),v.recurringBudgetDefaults[o]=d,Ka(v.recurringBudgetDefaults),await Ve(`Budget "${m}" auf ${S(d)} € gesetzt (inkl. zukünftiger Monate)`),be(`Budget "${m}" wurde für zukünftige Monate übernommen.`),Z();return}await Te(`Budget "${m}" auf ${S(d)} € gesetzt`),Z()}async function En(o){const d=Ke();d&&(o===null?d.carryoverOverrideCents=null:d.carryoverOverrideCents=o,await Te(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${S(o)} € gesetzt`),Z())}async function Va(o,d,m){const h=Ke(),p=v.selectedYear;if(!h||!p)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für die Position angeben.");return}if(h.variablePositions=[{id:Bt("varpos"),name:M,budgetCents:d,actualCents:0},...h.variablePositions],ft(h),m){const I=se(p,v.selectedMonth);v.years.forEach(R=>{R.months.forEach(K=>{se(R.year,K.month)<=I||(K.variablePositions=[{id:Bt("varpos"),name:M,budgetCents:d,actualCents:0},...K.variablePositions],ft(K))})}),await Ve(`Variable Position hinzugefügt: ${M} (${S(d)} €) für zukünftige Monate`),be("Variable Position wurde für zukünftige Monate hinzugefügt."),Z();return}await Te(`Variable Position hinzugefügt: ${M} (${S(d)} €)`),be("Variable Position wurde hinzugefügt."),Z()}async function Yt(o,d){const m=Ke();if(!m)return;const h=m.variablePositions.find(p=>p.id===o);m.variablePositions=m.variablePositions.map(p=>p.id===o?{...p,actualCents:d}:p),await Te(`Istwert Variable Position angepasst: ${h?.name??"Unbekannt"} auf ${S(d)} €`),Z()}async function Ya(o,d){const m=Ke();if(!m)return;const h=m.variablePositions.find(p=>p.id===o);m.variablePositions=m.variablePositions.map(p=>p.id===o?{...p,budgetCents:d}:p),ft(m),await Te(`Budget Variable Position angepasst: ${h?.name??"Unbekannt"} auf ${S(d)} €`),Z()}async function Zt(o){if(!confirm("Variable Position wirklich löschen?"))return;const m=Ke(),h=v.selectedYear;if(!m||!h)return;const p=m.variablePositions.find(K=>K.id===o);if(!p)return;const M=se(h,v.selectedMonth),R=v.years.some(K=>K.months.some(J=>se(K.year,J.month)>M&&J.variablePositions.some(U=>U.name===p.name&&U.budgetCents===p.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(m.variablePositions=m.variablePositions.filter(K=>K.id!==o),ft(m),R){v.years.forEach(K=>{K.months.forEach(J=>{se(K.year,J.month)<=M||(J.variablePositions=J.variablePositions.filter(U=>!(U.name===p.name&&U.budgetCents===p.budgetCents)),ft(J))})}),await Ve(`Variable Position gelöscht: ${p.name} (inkl. zukünftiger Monate)`),be("Variable Position wurde auch in zukünftigen Monaten gelöscht."),Z();return}await Te(`Variable Position gelöscht: ${p.name}`),be("Variable Position wurde gelöscht."),Z()}async function za(o){const d=Ke(),m=v.selectedYear;if(!d||!m)return;const h=d.variablePositions.find(U=>U.id===o);if(!h)return;const p={year:v.selectedMonth===12?m+1:m,month:v.selectedMonth===12?1:v.selectedMonth+1};let M=v.years.find(U=>U.year===p.year);if(!M){const U=Br(p.year,v.fixedTemplates,v.fixedTemplateVersion);wn(U),z(U),await Ln(U),v.years=[...v.years,U].sort((X,H)=>X.year-H.year),M=U}const I=M.months.find(U=>U.month===p.month);if(!I)return;const R=I.variablePositions.some(U=>U.id===h.id||U.name===h.name&&U.budgetCents===h.budgetCents);if(d.variablePositions=d.variablePositions.filter(U=>U.id!==o),ft(d),!R){const X=I.variablePositions.some(H=>H.id===h.id)?{...h,id:Bt("varpos")}:h;I.variablePositions=[X,...I.variablePositions],ft(I)}const K=`${$e(p.month)} ${p.year}`,J=`Variable Position verschoben: ${h.name} → ${K}`;if(p.year===m)await Te(J);else{const U=Rt();if(!U)return;await Ln(U),await Ln(M),v.years=await jn(),va(v.years),on(J)}be(R?`Position entfernt (im Folgemonat schon vorhanden: ${K}).`:`Position in den Folgemonat verschoben: ${K}.`),Z()}async function Xn(o,d,m){const h=Ke(),p=v.selectedYear;if(!h||!p)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(d<=0){alert("Bitte einen positiven Betrag eingeben.");return}const I=Sr(M,d);if(h.miscCosts=[I,...h.miscCosts],m){const R=se(p,v.selectedMonth);v.years.forEach(K=>{K.months.forEach(J=>{se(K.year,J.month)<=R||(J.miscCosts=[Sr(M,d),...J.miscCosts])})}),await Ve(`Sonstige Position hinzugefügt: ${M} (${S(d)} €) für zukünftige Monate`),be("Sonstige Position wurde für zukünftige Monate hinzugefügt."),Z();return}await Te(`Sonstige Position hinzugefügt: ${M} (${S(d)} €)`),be("Sonstige Position wurde hinzugefügt."),Z()}async function Me(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const m=Ke(),h=v.selectedYear;if(!m||!h)return;const p=m.miscCosts.find(K=>K.id===o);if(!p)return;const M=se(h,v.selectedMonth),R=v.years.some(K=>K.months.some(J=>se(K.year,J.month)>M&&J.miscCosts.some(U=>U.description===p.description&&U.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(m.miscCosts=m.miscCosts.filter(K=>K.id!==o),R){v.years.forEach(K=>{K.months.forEach(J=>{se(K.year,J.month)<=M||(J.miscCosts=J.miscCosts.filter(U=>!(U.description===p.description&&U.amountCents===p.amountCents)))})}),await Ve(`Sonstige Position gelöscht: ${p.description} (${S(p.amountCents)} €) inkl. zukünftiger Monate`),be("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),Z();return}await Te(`Sonstige Position gelöscht: ${p.description} (${S(p.amountCents)} €)`),be("Sonstige Position wurde gelöscht."),Z()}async function zt(o,d,m,h){const p=Ke(),M=v.selectedYear;if(!p||!M)return;const I=o.trim();if(!I){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(d<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const R=_r(I,d,m);if(p.incomes=[R,...p.incomes],h){const K=se(M,v.selectedMonth);v.years.forEach(J=>{J.months.forEach(U=>{se(J.year,U.month)<=K||(U.incomes=[_r(I,d,m),...U.incomes])})}),await Ve(`Einkommen hinzugefügt: ${I} (${S(d)} €, ${G(m)}) für zukünftige Monate`),be("Einkommen wurde für zukünftige Monate hinzugefügt."),Z();return}await Te(`Einkommen hinzugefügt: ${I} (${S(d)} €, ${G(m)})`),be("Einkommen wurde hinzugefügt."),Z()}async function Kt(o,d){const m=Ke();if(!m)return;const h=m.incomes.find(p=>p.id===o);h&&(m.incomes=m.incomes.map(p=>{if(p.id!==o)return p;if(!d){const{incomeSource:M,...I}=p;return I}return{...p,incomeSource:d}}),await Te(`Einkommensart angepasst: ${h.description} → ${G(d)}`),Z())}async function Ua(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const m=Ke(),h=v.selectedYear;if(!m||!h)return;const p=m.incomes.find(K=>K.id===o);if(!p)return;const M=se(h,v.selectedMonth),R=v.years.some(K=>K.months.some(J=>se(K.year,J.month)>M&&J.incomes.some(U=>U.description===p.description&&U.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(m.incomes=m.incomes.filter(K=>K.id!==o),R){v.years.forEach(K=>{K.months.forEach(J=>{se(K.year,J.month)<=M||(J.incomes=J.incomes.filter(U=>!(U.description===p.description&&U.amountCents===p.amountCents)))})}),await Ve(`Einkommen gelöscht: ${p.description} (${S(p.amountCents)} €) inkl. zukünftiger Monate`),be("Einkommen wurde auch in zukünftigen Monaten gelöscht."),Z();return}await Te(`Einkommen gelöscht: ${p.description} (${S(p.amountCents)} €)`),be("Einkommen wurde gelöscht."),Z()}async function fn(){const o=await Ur(),d=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),m=URL.createObjectURL(d),h=`haushaltsbuch-backup-${new Date().toISOString().slice(0,10)}.json`,p=document.createElement("a");p.href=m,p.download=h,p.click(),URL.revokeObjectURL(m),Un(h),Z(),be("Backup wurde exportiert.")}async function Qn(o){const d=await o.text(),m=JSON.parse(d);await Gr(m);const[h,p,M]=await Promise.all([jn(),vr(),gr()]);v.years=h,v.annualVariableFixedTemplates=M.templates,v.annualVariableFixedTemplateVersion=M.version,va(v.years),ln(v.years),v.fixedTemplates=p.templates,v.fixedTemplateVersion=p.version,await he(v.years),v.selectedYear=Na(h),v.selectedMonth=Lt(),Un(o.name),be("Backup wurde importiert."),Z()}function Z(){const o=Rt(),d=Ke(),m=fa(),h=d?Mt(d):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},p=o?zn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},M=o?ir(o):[],I=d?d.foodBudgetCents??0:0,R=d?d.goingOutBudgetCents??0:0,K=d?d.fixedBudgetCents??d.fixedCosts.reduce((a,u)=>a+u.plannedCents,0):0,J=d?d.variableBudgetCents??d.variablePositions.reduce((a,u)=>a+u.budgetCents,0):0,U=d?d.miscBudgetCents??0:0,X=o?o.months.reduce((a,u)=>a+(u.foodBudgetCents??0),0):0,H=o?o.months.reduce((a,u)=>a+(u.goingOutBudgetCents??0),0):0,Ce=o?o.months.reduce((a,u)=>a+(u.fixedBudgetCents??u.fixedCosts.reduce((f,$)=>f+$.plannedCents,0)),0):0,Ye=o?o.months.reduce((a,u)=>a+(u.variableBudgetCents??u.variablePositions.reduce((f,$)=>f+$.budgetCents,0)),0):0,Oe=o?o.months.reduce((a,u)=>a+(u.miscBudgetCents??0),0):0,de=d?d.incomes.reduce((a,u)=>a+(kn(u.incomeSource)?u.amountCents:0),0):0,et=d?d.incomes.reduce((a,u)=>a+(u.incomeSource==="salary"?u.amountCents:0),0):0,De=qa(),st=o?De.get(se(o.year,v.selectedMonth)):void 0,Ct=o?o.months.slice().sort((a,u)=>a.month-u.month)[0]:void 0,ht=st?.carriedFromPreviousCents??0,j=st?.hasPreviousMonth??!1,Q=st?.effectiveIncomeCents??de,Tt=d?Yn(d):0,wt=st?.netCents??de-Tt,tt=Q-h.totalCents,ge=et-h.totalCents,Je=h.totalCents>0?`${(et/h.totalCents*100).toFixed(1)} %`:"-",ve=ht<0?"danger":ht>0?"budget-under":"",Ae=wt<0?"danger":wt>0?"budget-under":"",pt=tt<0?"danger":tt>0?"budget-under":"",ze=o?o.months.reduce((a,u)=>a+u.incomes.reduce((f,$)=>f+(kn($.incomeSource)?$.amountCents:0),0),0):0,ie=o?o.months.reduce((a,u)=>a+u.incomes.reduce((f,$)=>f+($.incomeSource==="salary"?$.amountCents:0),0),0):0,Fe=o&&Ct?De.get(se(o.year,Ct.month))?.carriedFromPreviousCents??0:0,xt=ze+Fe,Le=xt-p.totalCents,it=ie-p.totalCents,je=p.totalCents>0?`${(ie/p.totalCents*100).toFixed(1)} %`:"-",Pn=Fe<0?"danger":Fe>0?"budget-under":"",le=Le<0?"danger":Le>0?"budget-under":"",pe=I+R+K+J+U,_e=I+R,Ie=h.foodCents+h.goingOutCents,xe=_e-Ie,Ut=We(Ie,_e),kt=X+H+Ce+Ye+Oe,hn=Q-pe,_=xt-kt,N=pe-h.totalCents,Ne=kt-p.totalCents,me=a=>a<0?"danger":a>0?"budget-under":"",pn=(a,u)=>u<=0?"muted":a>=u?"budget-under":"danger",Gt=pn(et,h.totalCents),xa=pn(ie,p.totalCents),Mn=N+hn+tt+ge,On=Ne+_+Le+it,we=(a,u)=>{if(u<=0)return"0%";const $=Math.max(0,a)/u*100;return`${Math.min(100,Math.max(0,$)).toFixed(1)}%`},wa=(a,u)=>{if(u<=0)return a>0?100:0;const f=Math.max(0,a)/u*100;return Math.max(0,f)},ka=[{label:"Essen",budgetCents:I,actualCents:h.foodCents},{label:"Ausgehen",budgetCents:R,actualCents:h.goingOutCents},{label:"Fixkosten",budgetCents:K,actualCents:h.fixedCents},{label:"Variable",budgetCents:J,actualCents:h.variableCents},{label:"Sonstige",budgetCents:U,actualCents:h.miscCents}];Math.max(1,...ka.flatMap(a=>[a.budgetCents,a.actualCents]));const Tn=(a,u)=>u<=0?"bar-positive":a<=0||u>a?"bar-negative":"bar-positive",An=[{label:"Einkommen gesamt",valueCents:Q,className:"bar-income"},{label:"Echte Ausgaben",valueCents:h.totalCents,className:"bar-expense"},{label:"Netto",valueCents:tt,className:tt<0?"bar-negative":"bar-positive"}],Zn=Math.max(1,...An.map(a=>Math.abs(a.valueCents))),Ga=o?o.months.slice().sort((a,u)=>a.month-u.month).map(a=>{const u=a.foodBudgetCents??0,f=a.goingOutBudgetCents??0,$=a.fixedBudgetCents??a.fixedCosts.reduce((O,D)=>O+D.plannedCents,0),P=a.variableBudgetCents??a.variablePositions.reduce((O,D)=>O+D.budgetCents,0),T=a.miscBudgetCents??0,F=u+f+$+P+T;return{month:a.month,foodBudgetCents:u,goingOutBudgetCents:f,fixedBudgetCents:$,variableBudgetCents:P,miscBudgetCents:T,totalBudgetCents:F}}):[],At=new Map(Ga.map(a=>[a.month,a])),ot=a=>{if(a.length===0)return null;const u=Math.min(...a),f=Math.max(...a),$=Math.round(a.reduce((P,T)=>P+T,0)/a.length);return{min:u,avg:$,max:f}},ea=M.map(a=>a.summary.foodCents),ta=M.map(a=>a.summary.goingOutCents),na=M.map(a=>a.summary.fixedCents),aa=M.map(a=>a.summary.variableCents),Ue=M.map(a=>a.summary.miscCents),vn=M.map(a=>a.summary.totalCents),mn=M.map(a=>o?De.get(se(o.year,a.month))?.plannedBudgetCents??0:0),$a=M.map(a=>o?De.get(se(o.year,a.month))?.netCents??0:0),gn=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((u,f)=>u+(f.incomeSource==="salary"?f.amountCents:0),0)])),Ba=M.map(a=>gn.get(a.month)??0),Ft={food:ot(ea),goingOut:ot(ta),fixed:ot(na),variable:ot(aa),misc:ot(Ue),total:ot(vn),salary:ot(Ba),budget:ot(mn),net:ot($a)},ra=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],$t={food:ea.reduce((a,u)=>a+u,0),goingOut:ta.reduce((a,u)=>a+u,0),fixed:na.reduce((a,u)=>a+u,0),variable:aa.reduce((a,u)=>a+u,0),misc:Ue.reduce((a,u)=>a+u,0),total:vn.reduce((a,u)=>a+u,0),salary:Ba.reduce((a,u)=>a+u,0),budget:mn.reduce((a,u)=>a+u,0),net:$a.reduce((a,u)=>a+u,0)},en=ra.map(({key:a,label:u})=>{const f=Ft.food?.[a]??null,$=Ft.goingOut?.[a]??null,P=Ft.fixed?.[a]??null,T=Ft.variable?.[a]??null,F=Ft.misc?.[a]??null,O=Ft.total?.[a]??null,D=Ft.salary?.[a]??null,q=Ft.budget?.[a]??null,A=Ft.net?.[a]??null,L=ne=>ne===null?"-":S(ne);return`<tr>
                  <td><strong>${u}</strong></td>
                  <td>${L(f)}</td>
                  <td>${L($)}</td>
                  <td>${L(P)}</td>
                  <td>${L(T)}</td>
                  <td>${L(F)}</td>
                  <td>${L(O)}</td>
                  <td>${L(D)}</td>
                  <td>${L(q)}</td>
                  <td>${L(A)}</td>
                </tr>`}).join(""),Sa=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${S($t.food)}</td>
                  <td>${S($t.goingOut)}</td>
                  <td>${S($t.fixed)}</td>
                  <td>${S($t.variable)}</td>
                  <td>${S($t.misc)}</td>
                  <td>${S($t.total)}</td>
                  <td>${S($t.salary)}</td>
                  <td>${S($t.budget)}</td>
                  <td>${S($t.net)}</td>
                </tr>`,sa=Math.max(1,...M.flatMap(a=>{const u=At.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,u??0]})),Fn=Math.max(1,...M.flatMap(a=>{const u=At.get(a.month),f=a.summary.foodCents+a.summary.goingOutCents,$=(u?.foodBudgetCents??0)+(u?.goingOutBudgetCents??0);return[f,$]})),ia=Math.max(1,...M.flatMap(a=>{const u=At.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,u]})),_a=Math.max(1,...M.flatMap(a=>{const u=At.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,u]})),Wa=Math.max(1,...M.flatMap(a=>{const u=At.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,u]})),Ea=We(h.fixedCents,K),oa=We(h.foodCents,I),dr=We(h.goingOutCents,R),Pa=We(h.variableCents,J),Ma=We(h.miscCents,U),Dn=v.editingFixedTemplateId?v.fixedTemplates.find(a=>a.id===v.editingFixedTemplateId):null,Ja=v.hasUnexportedChanges,Ha=v.unexportedChangeLog.slice().reverse(),Xa=v.lastBackupFileName?Vn(v.lastBackupFileName):"-",Qa={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},vt=v.years.slice().sort((a,u)=>a.year-u.year),In=vt.some(a=>a.year===v.dashboardYear)?v.dashboardYear:v.selectedYear??vt[vt.length-1]?.year??null,Ge=typeof In=="number"?vt.find(a=>a.year===In):void 0,Za=Ge?Ge.months.slice().sort((a,u)=>a.month-u.month):[],Wt=Ge?zn(Ge):Qa,Nn=Ge?ma(Ge):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},fr=Ge?$n(Ge):0,hr=Ge?bt(Ge,De):0,bn=fr+hr,Dt=Ge?Ge.months.reduce((a,u)=>a+Yn(u),0):0,Ee=bn-Dt,Kn=bn-Wt.totalCents,yn=[{label:"Essen",budgetCents:Nn.foodCents,actualCents:Wt.foodCents},{label:"Ausgehen",budgetCents:Nn.goingOutCents,actualCents:Wt.goingOutCents},{label:"Fixkosten",budgetCents:Nn.fixedCents,actualCents:Wt.fixedCents},{label:"Variable",budgetCents:Nn.variableCents,actualCents:Wt.variableCents},{label:"Sonstige",budgetCents:Nn.miscCents,actualCents:Wt.miscCents}],lt=Za.map(a=>{const u=Ge?De.get(se(Ge.year,a.month)):void 0,f=Mt(a),$=a.incomes.reduce((ne,oe)=>ne+oe.amountCents,0),P=u?.effectiveIncomeCents??$,T=u?.plannedBudgetCents??Yn(a),F=f.foodCents,O=f.goingOutCents,D=F+O,q=f.totalCents,A=P-T,L=P-q;return{month:a.month,foodCents:F,goingOutCents:O,foodAndGoingOutCents:D,effectiveIncomeCents:P,plannedBudgetCents:T,actualCostCents:q,plannedNetCents:A,actualNetCents:L}}),Oa=Math.max(1,...lt.map(a=>a.actualCostCents)),Ta=Math.max(1,...lt.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),tn=Math.max(1,...lt.map(a=>a.foodAndGoingOutCents)),Aa=Math.max(1,...lt.map(a=>a.foodCents)),Cn=Math.max(1,...lt.map(a=>a.goingOutCents)),ut=vt.reduce((a,u)=>{const f=ma(u);return{foodCents:a.foodCents+f.foodCents,goingOutCents:a.goingOutCents+f.goingOutCents,fixedCents:a.fixedCents+f.fixedCents,variableCents:a.variableCents+f.variableCents,miscCents:a.miscCents+f.miscCents,totalCents:a.totalCents+f.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Jt=vt.reduce((a,u)=>{const f=zn(u);return{foodCents:a.foodCents+f.foodCents,goingOutCents:a.goingOutCents+f.goingOutCents,fixedCents:a.fixedCents+f.fixedCents,variableCents:a.variableCents+f.variableCents,miscCents:a.miscCents+f.miscCents,totalCents:a.totalCents+f.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),e=vt.reduce((a,u)=>a+$n(u),0),t=vt[0]?bt(vt[0],De):0,n=e+t,r=n-ut.totalCents,s=n-Jt.totalCents,i=[{label:"Essen",budgetCents:ut.foodCents,actualCents:Jt.foodCents},{label:"Ausgehen",budgetCents:ut.goingOutCents,actualCents:Jt.goingOutCents},{label:"Fixkosten",budgetCents:ut.fixedCents,actualCents:Jt.fixedCents},{label:"Variable",budgetCents:ut.variableCents,actualCents:Jt.variableCents},{label:"Sonstige",budgetCents:ut.miscCents,actualCents:Jt.miscCents}],l=Math.max(1,...i.flatMap(a=>[a.budgetCents,a.actualCents])),c=vt.map(a=>{const u=zn(a),f=ma(a),$=$n(a),P=a.months.reduce((O,D)=>O+D.incomes.reduce((q,A)=>q+(A.incomeSource==="salary"?A.amountCents:0),0),0),T=bt(a,De),F=$+T;return{year:a.year,salaryIncomeCents:P,budgetTotalCents:f.totalCents,actualTotalCents:u.totalCents,effectiveIncomeCents:F,plannedNetCents:F-f.totalCents,actualNetCents:F-u.totalCents}}),b=Math.max(1,...c.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),B=Math.max(1,...c.map(a=>a.actualTotalCents)),x=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${v.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${v.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${v.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${vt.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':v.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${vt.map(a=>`<option value="${a.year}" ${a.year===In?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${Ge?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${S(bn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${S(Dt)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${S(Wt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${me(Ee)}">${S(Ee)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${me(Kn)}">${S(Kn)}</div><div class="eval-value"></div></div>
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
                    ${yn.map(a=>{const u=wa(a.actualCents,a.budgetCents),f=Math.min(100,u),$=`${u.toFixed(0)}%`,P=a.budgetCents-a.actualCents,T=P<0?"danger":P>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Tn(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${f.toFixed(1)}%" title="${a.label}: ${S(a.actualCents)} von ${S(a.budgetCents)}">
                              <span class="circle-chart-value">${$}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${S(a.budgetCents)} / I ${S(a.actualCents)}</div>
                            <div class="circle-chart-meta ${T}">${P>=0?"+":""}${S(P)}</div>
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
                    ${lt.map(a=>{const u=we(a.actualCostCents,Oa);return`
                          <div class="spark-bar" title="${$e(a.month)}: ${S(a.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${u}"></div>
                            <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                    ${lt.map(a=>{const u=we(Math.abs(a.plannedNetCents),Ta),f=we(Math.abs(a.actualNetCents),Ta),$=a.plannedNetCents<0?"bar-negative":"bar-positive",P=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${$e(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${S(a.plannedNetCents)} | Ist-Saldo: ${S(a.actualNetCents)}">
                              <div class="bar ${$}" style="width:${u}; opacity: 0.35;"></div>
                              <div class="bar ${P}" style="width:${f}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${me(a.plannedNetCents)}">B ${S(a.plannedNetCents)}</span>
                              <span class="${me(a.actualNetCents)}">I ${S(a.actualNetCents)}</span>
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
                  ${lt.map(a=>`<tr>
                        <td>${$e(a.month)}</td>
                        <td>${S(a.effectiveIncomeCents)}</td>
                        <td>${S(a.plannedBudgetCents)}</td>
                        <td>${S(a.actualCostCents)}</td>
                        <td class="${me(a.plannedNetCents)}">${S(a.plannedNetCents)}</td>
                        <td class="${me(a.actualNetCents)}">${S(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:v.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${vt.map(a=>`<option value="${a.year}" ${a.year===In?"selected":""}>${a.year}</option>`).join("")}
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
                    ${lt.map(a=>{const u=we(a.foodAndGoingOutCents,tn);return`
                          <div class="spark-bar" title="${$e(a.month)}: ${S(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${u}"></div>
                            <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                    ${lt.map(a=>{const u=we(a.foodCents,Aa);return`
                          <div class="spark-bar" title="${$e(a.month)}: ${S(a.foodCents)}">
                            <div class="spark-bar-fill" style="height:${u}"></div>
                            <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                    ${lt.map(a=>{const u=we(a.goingOutCents,Cn);return`
                          <div class="spark-bar" title="${$e(a.month)}: ${S(a.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${u}"></div>
                            <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${S(n)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${S(ut.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${S(Jt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${me(r)}">${S(r)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${me(s)}">${S(s)}</div><div class="eval-value"></div></div>
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
                    ${i.map(a=>{const u=we(a.budgetCents,l),f=we(a.actualCents,l),$=Tn(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${S(a.budgetCents)} | Ist: ${S(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${u}"></div>
                              <div class="bar-marker" style="left:${u}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${$}" style="width:${f}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${S(a.budgetCents)}</span>
                              <span class="muted">I ${S(a.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(c.length,1)}, minmax(0, 1fr));">
                    ${c.map(a=>{const u=we(a.actualTotalCents,B);return`
                          <div class="spark-bar" title="${a.year}: ${S(a.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${u}"></div>
                            <div class="spark-bar-label">${a.year}</div>
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
                    ${c.map(a=>{const u=we(Math.abs(a.plannedNetCents),b),f=we(Math.abs(a.actualNetCents),b),$=a.plannedNetCents<0?"bar-negative":"bar-positive",P=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${S(a.plannedNetCents)} | Ist-Saldo: ${S(a.actualNetCents)}">
                              <div class="bar ${$}" style="width:${u}; opacity: 0.35;"></div>
                              <div class="bar ${P}" style="width:${f}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${me(a.plannedNetCents)}">B ${S(a.plannedNetCents)}</span>
                              <span class="${me(a.actualNetCents)}">I ${S(a.actualNetCents)}</span>
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
                    <th>Gehalt (€)</th>
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${c.map(a=>`<tr>
                        <td>${a.year}</td>
                        <td>${S(a.salaryIncomeCents)}</td>
                        <td>${S(a.effectiveIncomeCents)}</td>
                        <td>${S(a.budgetTotalCents)}</td>
                        <td>${S(a.actualTotalCents)}</td>
                        <td class="${me(a.plannedNetCents)}">${S(a.plannedNetCents)}</td>
                        <td class="${me(a.actualNetCents)}">${S(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,g=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,w=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Dn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Dn?gt(Dn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Dn?"Änderung speichern":"Vorlage speichern"}</button>
          ${Dn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${v.fixedTemplates.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td>${S(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${a.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,k=`
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
            ${v.annualVariableFixedTemplates.map(a=>{const u=Sn(a.dueDateIso),f=u?$e(u.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${f}</td>
                    <td>${S(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,y=v.topModal==="years"?"Jahr hinzufügen":v.topModal==="fixed"?"Fixe Kosten (zentral)":v.topModal==="variable-fixed"?"Variable Fixkosten":v.topModal==="dashboard"?"Dashboard":"",C=v.topModal==="years"?g:v.topModal==="fixed"?w:v.topModal==="variable-fixed"?k:v.topModal==="dashboard"?x:"";E.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Ja?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${v.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Tr.map(a=>`<option value="${a}" ${v.theme===a?"selected":""}>${Jr(a)}</option>`).join("")}
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

        ${v.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${y}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${y}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${C}
                </div>
              </div>
            </div>
          `:""}

        ${v.showUnexportedChangeLogModal?`
            <div class="panel-modal-backdrop" id="unexported-change-log-backdrop" role="dialog" aria-modal="true" aria-label="Ungesicherte Änderungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Ungesicherte Änderungen</h2>
                  <button class="btn btn-quiet" id="unexported-change-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Ha.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${Ha.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${Vn(a.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${$e(v.selectedMonth)} ${o.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${v.years.map(a=>`<option value="${a.year}" ${a.year===v.selectedYear?"selected":""}>${a.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${v.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(a,u)=>u+1).map(a=>`<option value="${a}" ${a===v.selectedMonth?"selected":""}>${$e(a)}</option>`).join("")}
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
                  ${ka.map(a=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${a.label}"
                            data-budget-cents="${a.budgetCents}"
                            data-actual-cents="${a.actualCents}"
                            role="img"
                            aria-label="${a.label}: Budget ${S(a.budgetCents)} €, Ist ${S(a.actualCents)} €"
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
                  ${An.map(a=>{const u=we(Math.abs(a.valueCents),Zn),f=a.valueCents>=0?"+":"",$=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${S(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${u}"></div>
                          </div>
                          <div class="bar-meta"><span class="${$}">${f}${S(a.valueCents)}</span></div>
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
                      ${M.map(a=>{const u=At.get(a.month)?.totalBudgetCents??0,f=we(u,sa),$=we(a.summary.totalCents,sa);return`
                            <div class="spark-bar" title="${$e(a.month)}: Ist ${S(a.summary.totalCents)} € | Budget ${S(u)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${f}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${S(a.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                      ${M.map(a=>{const u=At.get(a.month),f=(u?.foodBudgetCents??0)+(u?.goingOutBudgetCents??0),$=a.summary.foodCents+a.summary.goingOutCents,P=we(f,Fn),T=we($,Fn);return`
                            <div class="spark-bar" title="${$e(a.month)}: Ist ${S($)} € | Budget ${S(f)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${P}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${T}"><span class="spark-bar-fill-value">${S($)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                      ${M.map(a=>{const u=At.get(a.month)?.fixedBudgetCents??0,f=we(u,ia),$=we(a.summary.fixedCents,ia);return`
                            <div class="spark-bar" title="${$e(a.month)}: Ist ${S(a.summary.fixedCents)} € | Budget ${S(u)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${f}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${S(a.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                      ${M.map(a=>{const u=At.get(a.month)?.variableBudgetCents??0,f=we(u,_a),$=we(a.summary.variableCents,_a);return`
                            <div class="spark-bar" title="${$e(a.month)}: Ist ${S(a.summary.variableCents)} € | Budget ${S(u)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${f}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${S(a.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                      ${M.map(a=>{const u=At.get(a.month)?.miscBudgetCents??0,f=we(u,Wa),$=we(a.summary.miscCents,Wa);return`
                            <div class="spark-bar" title="${$e(a.month)}: Ist ${S(a.summary.miscCents)} € | Budget ${S(u)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${f}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${S(a.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(a.month).slice(0,3)}</div>
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
                    <div class="eval-value">${S(de)}</div>
                    <div class="eval-value">${S(ze)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${S(et)}</div>
                    <div class="eval-value">${S(ie)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${ve}">${j?S(ht):"-"}</div>
                    <div class="eval-value ${Pn}">${o?S(Fe):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${S(Q)}</div>
                    <div class="eval-value">${S(xt)}</div>
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
                    <div class="eval-value">${Ot(I,h.foodCents)}</div>
                    <div class="eval-value">${S(X)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Ot(R,h.goingOutCents)}</div>
                    <div class="eval-value">${S(H)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Ot(K,h.fixedCents)}</div>
                    <div class="eval-value">${S(Ce)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Ot(J,h.variableCents)}</div>
                    <div class="eval-value">${S(Ye)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Ot(U,h.miscCents)}</div>
                    <div class="eval-value">${S(Oe)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Ot(pe,h.totalCents)}</div>
                    <div class="eval-value">${S(kt)}</div>
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
                    <div class="eval-value ${oa}">${S(h.foodCents)}</div>
                    <div class="eval-value">${S(p.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${dr}">${S(h.goingOutCents)}</div>
                    <div class="eval-value">${S(p.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Ea}">${S(h.fixedCents)}</div>
                    <div class="eval-value">${S(p.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Pa}">${S(h.variableCents)}</div>
                    <div class="eval-value">${S(p.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Ma}">${S(h.miscCents)}</div>
                    <div class="eval-value">${S(p.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${S(h.totalCents)}</div>
                    <div class="eval-value">${S(p.totalCents)}</div>
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
                    <div class="eval-value ${me(N)}">${S(N)}</div>
                    <div class="eval-value ${me(Ne)}">${S(Ne)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${me(hn)}">${S(hn)}</div>
                    <div class="eval-value ${me(_)}">${S(_)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${pt}">${S(tt)}</div>
                    <div class="eval-value ${le}">${S(Le)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${me(ge)}">${S(ge)}</div>
                    <div class="eval-value ${me(it)}">${S(it)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Gt}">${Je}</div>
                    <div class="eval-value ${xa}">${je}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Summe (ohne %)</div>
                    <div class="eval-value ${me(Mn)}">${S(Mn)}</div>
                    <div class="eval-value ${me(On)}">${S(On)}</div>
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
                  <th>Gehalt (€)</th>
                  <th>Budget gesamt (€)</th>
                  <th>Kalkulierter Saldo (€)</th>
                </tr>
              </thead>
              <tbody>
                ${M.map((a,u,f)=>{const $=o?De.get(se(o.year,a.month)):void 0,P=$?.plannedBudgetCents??0,T=$?.netCents??0,F=gn.get(a.month)??0,O=T<0?"danger":T>0?"budget-under":"",D=f[u-1],q=D?.summary.foodCents??null,A=D?.summary.goingOutCents??null,L=D?.summary.fixedCents??null,ne=D?.summary.variableCents??null,oe=D?.summary.miscCents??null,W=D?.summary.totalCents??null,ae=D!==void 0?gn.get(D.month)??0:null,ke=o&&D?De.get(se(o.year,D.month))?.plannedBudgetCents??0:null,mt=q===null?null:a.summary.foodCents-q,Se=A===null?null:a.summary.goingOutCents-A,Ht=L===null?null:a.summary.fixedCents-L,la=ne===null?null:a.summary.variableCents-ne,Cr=oe===null?null:a.summary.miscCents-oe,xr=W===null?null:a.summary.totalCents-W,wr=ae===null?null:F-ae,kr=ke===null?null:P-ke,qn=qt=>qt===null?"muted":qt>0?"danger":qt<0?"budget-under":"muted",Fr=qt=>qt===null?"muted":qt>0?"danger":qt<0?"budget-under":"muted",xn=qt=>qt===null?"(Δ -)":`(Δ ${qt>0?"+":""}${S(qt)})`,$r=o&&D?De.get(se(o.year,D.month))?.netCents??0:null,ua=$r===null?null:T-$r,Dr=ua===null?"(Δ -)":`(Δ ${ua>0?"+":""}${S(ua)})`,Ir=ua===null?"muted":ua<0?"danger":ua>0?"budget-under":"muted";return`<tr>
                  <td>${$e(a.month)}</td>
                  <td>${S(a.summary.foodCents)} <span class="${qn(mt)}">${xn(mt)}</span></td>
                  <td>${S(a.summary.goingOutCents)} <span class="${qn(Se)}">${xn(Se)}</span></td>
                  <td>${S(a.summary.fixedCents)} <span class="${qn(Ht)}">${xn(Ht)}</span></td>
                  <td>${S(a.summary.variableCents)} <span class="${qn(la)}">${xn(la)}</span></td>
                  <td>${S(a.summary.miscCents)} <span class="${qn(Cr)}">${xn(Cr)}</span></td>
                  <td>${S(a.summary.totalCents)} <span class="${qn(xr)}">${xn(xr)}</span></td>
                  <td>${S(F)} <span class="${qn(wr)}">${xn(wr)}</span></td>
                  <td>${S(P)} <span class="${Fr(kr)}">${xn(kr)}</span></td>
                  <td class="${O}">${S(T)} <span class="${Ir}">${Dr}</span></td>
                </tr>`}).join("")}
                ${en}
                ${Sa}
              </tbody>
            </table>
          </article>

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${d?"":"disabled"} />
              </label>
              <label>
                Herkunft
                <select id="income-source" ${d?"":"disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${d?"":"disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${d?"":"disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${d?"":"disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${d?`<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${ve}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${gt(ht)}" />
                    </td>
                    <td>-</td>
                  </tr>${d.incomes.map(a=>`<tr>
                    <td>${a.description}</td>
                    <td>
                      <select data-income-source="${a.id}">
                        <option value="" ${a.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${a.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${a.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${a.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${S(a.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${a.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${S(de)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${S(et)} €</strong>
                </div>
                <div class="column-overview-row ${ve}">
                  <span>Übernahme Vormonat</span>
                  <strong>${d?`${S(ht)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${S(Q)} €</strong>
                </div>
                <div class="column-overview-row ${Ae}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${S(wt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Re(I,h.foodCents)}
                ${Re(R,h.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${S(_e)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${S(Ie)} €</strong>
                  </div>
                  <div class="column-overview-row ${Ut}">
                    <span>Diff</span>
                    <strong>${S(xe)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${gt(I)}" ${d?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${gt(R)}" ${d?"":"disabled"} />
                </label>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${d?d.days.map(a=>{const u=a.foodCents>0,f=a.goingOutCents>0,$=`${a.isoDate===m?"today-row":""} ${u||f?"day-has-entry":""}`.trim(),P=`amount-input ${u?"day-input-has-value":""}`.trim(),T=`amount-input ${f?"day-input-has-value":""}`.trim();return`<tr class="${$}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${P}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${gt(a.foodCents)}" /></td>
                      <td><input class="${T}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${gt(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Re(K,h.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${gt(K)}" ${d?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${d?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${d?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${d?"":"disabled"}>Position anlegen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${d?d.fixedCosts.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${gt(a.plannedCents)}" /></td>
                    <td class="${We(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${gt(a.actualCents)}" /></td>
                    <td class="${We(a.actualCents,a.plannedCents)}">${S(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Re(J,h.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${gt(J)}" ${d?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${d?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${d?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${d?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-variable-position-recurring" ${d?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${d?d.variablePositions.map(a=>`<tr>
                    <td>${a.name}${a.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${gt(a.budgetCents)}" /></td>
                    <td class="${We(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${gt(a.actualCents)}" /></td>
                    <td class="${We(a.actualCents,a.budgetCents)}">${S(a.actualCents-a.budgetCents)}</td>
                    <td>
                      <button class="btn" data-move-variable-position-next="${a.id}">Nächster Monat</button>
                      <button class="btn btn-quiet" data-remove-variable-position="${a.id}">Löschen</button>
                    </td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-misc-costs">
              <h3>4) Sonstige (unter 30€)</h3>
              ${Re(U,h.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${gt(U)}" ${d?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${d?"":"disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${d?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${d?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${d?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${d?d.miscCosts.map(a=>`<tr>
                    <td>${a.description}</td>
                    <td>${S(a.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-misc="${a.id}">Löschen</button></td>
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
          <p class="muted">Letztes verwendetes Backup: ${Xa}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(v.topModal||v.showUnexportedChangeLogModal)),Ca(),Ze(),nn()}function Ca(){const o=E.querySelector("#theme-select"),d=E.querySelector("#open-years-modal"),m=E.querySelector("#open-fixed-modal"),h=E.querySelector("#open-variable-fixed-modal"),p=E.querySelector("#open-dashboard-modal"),M=E.querySelector("#panel-modal-close"),I=E.querySelector("#panel-modal-backdrop"),R=E.querySelector("#open-unexported-change-log"),K=E.querySelector("#unexported-change-log-close"),J=E.querySelector("#unexported-change-log-backdrop"),U=E.querySelector("#new-year"),X=E.querySelector("#create-year"),H=E.querySelector("#year-select"),Ce=E.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;Mr(_)&&jt(_)}),d?.addEventListener("click",()=>{ct("years")}),m?.addEventListener("click",()=>{ct("fixed")}),h?.addEventListener("click",()=>{ct("variable-fixed")}),p?.addEventListener("click",()=>{ct("dashboard")}),R?.addEventListener("click",()=>{ar()}),K?.addEventListener("click",()=>{da()}),J?.addEventListener("click",_=>{_.target===J&&da()}),E.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const N=_.dataset.dashboardTab;N!=="year"&&N!=="food"&&N!=="all"||(v.dashboardTab=N,Z())})});const Ye=E.querySelector("#dashboard-year-select");Ye?.addEventListener("change",()=>{const _=Number.parseInt(Ye.value,10);Number.isInteger(_)&&(v.dashboardYear=_,Z())}),M?.addEventListener("click",()=>{St()}),I?.addEventListener("click",_=>{_.target===I&&St()}),v.topModal&&window.setTimeout(()=>{M?.focus()},0),v.showUnexportedChangeLogModal&&window.setTimeout(()=>{K?.focus()},0),X?.addEventListener("click",async()=>{const _=Number.parseInt(U?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await Qt(_)}),H?.addEventListener("change",()=>{v.selectedYear=Number.parseInt(H.value,10),v.selectedMonth=Lt(),Z()}),Ce?.addEventListener("change",()=>{v.selectedMonth=Number.parseInt(Ce.value,10),Z()});const Oe=E.querySelector("#fixed-template-name"),de=E.querySelector("#fixed-template-amount"),et=E.querySelector("#add-fixed-template"),De=E.querySelector("#cancel-fixed-template-edit"),st=E.querySelector("#annual-variable-fixed-name"),Ct=E.querySelector("#annual-variable-fixed-date"),ht=E.querySelector("#annual-variable-fixed-amount"),j=E.querySelector("#add-annual-variable-fixed-template");et?.addEventListener("click",async()=>{const _=Oe?.value??"",N=Pe(de?.value??"0");await ba(_,N),Oe&&(Oe.value=""),de&&(de.value="")}),De?.addEventListener("click",()=>{lr()}),j?.addEventListener("click",async()=>{const _=st?.value??"",N=Ct?.value??"",Ne=Pe(ht?.value??"0");await cn(_,N,Ne),st&&(st.value=""),Ct&&(Ct.value=""),ht&&(ht.value="")}),E.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const N=_.dataset.removeAnnualVariableFixedTemplate;N&&await ya(N)})}),E.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const N=_.dataset.editFixedTemplate;N&&or(N)})}),E.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const N=_.dataset.removeFixedTemplate;N&&await un(N)})}),E.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",N=>{N.preventDefault(),_.blur(),dt(_)}),_.addEventListener("change",async()=>{const N=_.dataset.dayFood;N&&await _n(N,"foodCents",Pe(_.value))})}),E.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",N=>{N.preventDefault(),_.blur(),dt(_)}),_.addEventListener("change",async()=>{const N=_.dataset.dayGoing;N&&await _n(N,"goingOutCents",Pe(_.value))})}),E.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",N=>{N.preventDefault(),_.blur(),dt(_)}),_.addEventListener("change",async()=>{const N=_.dataset.fixedActual;N&&await ye(N,Pe(_.value))})}),E.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",N=>{N.preventDefault(),_.blur(),dt(_)}),_.addEventListener("change",async()=>{const N=_.dataset.fixedPlanned;N&&await qe(N,Pe(_.value))})});const Q=E.querySelector("#fixed-budget");Q?.addEventListener("click",_=>{_.preventDefault(),Q.blur(),dt(Q)}),Q?.addEventListener("change",async()=>{await Jn(Pe(Q.value))});const Tt=E.querySelector("#food-budget");Tt?.addEventListener("click",_=>{_.preventDefault(),Tt.blur(),dt(Tt)}),Tt?.addEventListener("change",async()=>{await Hn(Pe(Tt.value))});const wt=E.querySelector("#going-out-budget");wt?.addEventListener("click",_=>{_.preventDefault(),wt.blur(),dt(wt)}),wt?.addEventListener("change",async()=>{await cr(Pe(wt.value))});const tt=E.querySelector("#misc-budget");tt?.addEventListener("click",_=>{_.preventDefault(),tt.blur(),dt(tt)}),tt?.addEventListener("change",async()=>{await Vt(Pe(tt.value))});const ge=E.querySelector("#variable-budget");ge?.addEventListener("click",_=>{_.preventDefault(),ge.blur(),dt(ge)}),ge?.addEventListener("change",async()=>{await dn(Pe(ge.value))});const Je=E.querySelector("#variable-position-name"),ve=E.querySelector("#variable-position-budget"),Ae=E.querySelector("#add-variable-position"),pt=E.querySelector("#add-variable-position-recurring"),ze=E.querySelector("#misc-description"),ie=E.querySelector("#misc-amount"),Fe=E.querySelector("#add-misc"),xt=E.querySelector("#add-misc-recurring"),Le=E.querySelector("#income-description"),it=E.querySelector("#income-source"),je=E.querySelector("#income-amount"),Pn=E.querySelector("#add-income"),le=E.querySelector("#add-income-recurring"),pe=E.querySelector("#fixed-cost-name"),_e=E.querySelector("#fixed-cost-budget"),Ie=E.querySelector("#add-fixed-cost"),xe=E.querySelector("#carryover-override");xe?.addEventListener("click",_=>{_.preventDefault(),xe.blur(),dt(xe)}),xe?.addEventListener("change",async()=>{const _=xe.value;if(!_.trim()){await En(null);return}await En(Pe(_))}),Ie?.addEventListener("click",async()=>{const _=Pe(_e?.value??"0");await ur(pe?.value??"",_),pe&&(pe.value=""),_e&&(_e.value="")}),Ae?.addEventListener("click",async()=>{const _=Pe(ve?.value??"0");await Va(Je?.value??"",_,!1),Je&&(Je.value=""),ve&&(ve.value="")}),pt?.addEventListener("click",async()=>{const _=Pe(ve?.value??"0");await Va(Je?.value??"",_,!0),Je&&(Je.value=""),ve&&(ve.value="")}),Fe?.addEventListener("click",async()=>{const _=Pe(ie?.value??"0");await Xn(ze?.value??"",_,!1),ze&&(ze.value=""),ie&&(ie.value="")}),xt?.addEventListener("click",async()=>{const _=Pe(ie?.value??"0");await Xn(ze?.value??"",_,!0),ze&&(ze.value=""),ie&&(ie.value="")}),Pn?.addEventListener("click",async()=>{const _=Pe(je?.value??"0"),N=it?.value,Ne=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await zt(Le?.value??"",_,Ne,!1),Le&&(Le.value=""),je&&(je.value=""),it&&(it.value="salary")}),le?.addEventListener("click",async()=>{const _=Pe(je?.value??"0"),N=it?.value,Ne=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await zt(Le?.value??"",_,Ne,!0),Le&&(Le.value=""),je&&(je.value=""),it&&(it.value="salary")}),E.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const N=_.dataset.incomeSource;if(!N)return;const Ne=_.value;await Kt(N,Ne==="balance"||Ne==="fresh"||Ne==="salary"?Ne:void 0)})}),E.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",N=>{N.preventDefault(),_.blur(),dt(_)}),_.addEventListener("change",async()=>{const N=_.dataset.variablePositionBudget;N&&await Ya(N,Pe(_.value))})}),E.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",N=>{N.preventDefault(),_.blur(),dt(_)}),_.addEventListener("change",async()=>{const N=_.dataset.variablePositionActual;N&&await Yt(N,Pe(_.value))})}),E.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const N=_.dataset.removeVariablePosition;N&&await Zt(N)})}),E.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const N=_.dataset.moveVariablePositionNext;N&&await za(N)})}),E.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const N=_.dataset.removeFixed;N&&await Wn(N)})}),E.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const N=_.dataset.removeIncome;N&&await Ua(N)})}),E.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const N=_.dataset.removeMisc;N&&await Me(N)})});const Ut=E.querySelector("#backup-export"),kt=E.querySelector("#backup-import");E.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Ut?.addEventListener("click",async()=>{await fn()}),kt?.addEventListener("change",async()=>{const _=kt.files?.[0];if(_){try{await Qn(_)}catch(N){console.error("Backup-Import fehlgeschlagen",N),be("Backup konnte nicht importiert werden.","error")}kt.value=""}})}return{init:pa}}const Xr="modulepreload",Qr=function(E){return"/habu26/"+E},Or={},Zr=function(v,Be,Y){let ue=Promise.resolve();if(Be&&Be.length>0){let He=function(Xe){return Promise.all(Xe.map(re=>Promise.resolve(re).then(Qe=>({status:"fulfilled",value:Qe}),Qe=>({status:"rejected",reason:Qe}))))};var fe=He;document.getElementsByTagName("link");const te=document.querySelector("meta[property=csp-nonce]"),ce=te?.nonce||te?.getAttribute("nonce");ue=He(Be.map(Xe=>{if(Xe=Qr(Xe),Xe in Or)return;Or[Xe]=!0;const re=Xe.endsWith(".css"),Qe=re?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Xe}"]${Qe}`))return;const Ze=document.createElement("link");if(Ze.rel=re?"stylesheet":Xr,re||(Ze.as="script"),Ze.crossOrigin="",Ze.href=Xe,ce&&Ze.setAttribute("nonce",ce),document.head.appendChild(Ze),re)return new Promise((ct,St)=>{Ze.addEventListener("load",ct),Ze.addEventListener("error",()=>St(new Error(`Unable to preload CSS for ${Xe}`)))})}))}function ee(te){const ce=new Event("vite:preloadError",{cancelable:!0});if(ce.payload=te,window.dispatchEvent(ce),!ce.defaultPrevented)throw te}return ue.then(te=>{for(const ce of te||[])ce.status==="rejected"&&ee(ce.reason);return v().catch(ee)})};function es(E={}){const{immediate:v=!1,onNeedRefresh:Be,onOfflineReady:Y,onRegistered:ue,onRegisteredSW:ee,onRegisterError:fe}=E;let te,ce;const He=async(re=!0)=>{await ce};async function Xe(){if("serviceWorker"in navigator){if(te=await Zr(async()=>{const{Workbox:re}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:re}},[]).then(({Workbox:re})=>new re("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(re=>{fe?.(re)}),!te)return;te.addEventListener("activated",re=>{(re.isUpdate||re.isExternal)&&window.location.reload()}),te.addEventListener("installed",re=>{re.isUpdate||Y?.()}),te.register({immediate:v}).then(re=>{ee?ee("/habu26/sw.js",re):ue?.(re)}).catch(re=>{fe?.(re)})}}return ce=Xe(),He}function ts(){es({immediate:!0})}const Ar=document.getElementById("app");if(!Ar)throw new Error("App-Container nicht gefunden.");Hr(Ar).init();ts();
