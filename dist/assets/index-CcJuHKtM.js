(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const ue of document.querySelectorAll('link[rel="modulepreload"]'))Y(ue);new MutationObserver(ue=>{for(const ee of ue)if(ee.type==="childList")for(const fe of ee.addedNodes)fe.tagName==="LINK"&&fe.rel==="modulepreload"&&Y(fe)}).observe(document,{childList:!0,subtree:!0});function Se(ue){const ee={};return ue.integrity&&(ee.integrity=ue.integrity),ue.referrerPolicy&&(ee.referrerPolicy=ue.referrerPolicy),ue.crossOrigin==="use-credentials"?ee.credentials="include":ue.crossOrigin==="anonymous"?ee.credentials="omit":ee.credentials="same-origin",ee}function Y(ue){if(ue.ep)return;ue.ep=!0;const ee=Se(ue);fetch(ue.href,ee)}})();const Er=[1,2,3,4,5,6,7,8,9,10,11,12];function mr(){return new Date().toISOString()}function $t(E){const g=Math.random().toString(36).slice(2,10);return`${E}_${Date.now()}_${g}`}function Pr(E,g){const Se=new Date(E,g,0).getDate(),Y=[];for(let ue=1;ue<=Se;ue+=1){const ee=new Date(Date.UTC(E,g-1,ue));Y.push({isoDate:ee.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Y}function Mr(E){return E.map(g=>({id:$t("fixed"),templateId:g.id,name:g.name,plannedCents:g.plannedCents,actualCents:0}))}function gr(E,g,Se){const Y=g.reduce((ee,fe)=>ee+fe.plannedCents,0),ue=Er.map(ee=>({month:ee,days:Pr(E,ee),foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Mr(g),fixedBudgetCents:Y,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:E,createdAt:mr(),templateVersion:Se,months:ue}}function br(E,g){return{id:$t("expense"),description:E,amountCents:g,createdAt:mr()}}function yr(E,g,Se){const Y={id:$t("income"),description:E,amountCents:g,createdAt:mr()};return Se?{...Y,incomeSource:Se}:Y}var Or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tr(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var Wa={exports:{}},Ar=Wa.exports,Cr;function Fr(){return Cr||(Cr=1,(function(E,g){((Se,Y)=>{E.exports=Y()})(Ar,function(){var Se=function(e,t){return(Se=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,r){n.__proto__=r}:function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}))(e,t)},Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ue(e,t,n){for(var r,s=0,i=t.length;s<i;s++)!r&&s in t||((r=r||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))}var ee=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Or,fe=Object.keys,te=Array.isArray;function ce(e,t){return typeof t=="object"&&fe(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ee.Promise||(ee.Promise=Promise);var He=Object.getPrototypeOf,Xe={}.hasOwnProperty;function ae(e,t){return Xe.call(e,t)}function Qe(e,t){typeof t=="function"&&(t=t(He(e))),(typeof Reflect>"u"?fe:Reflect.ownKeys)(t).forEach(function(n){ot(e,n,t[n])})}var Ze=Object.defineProperty;function ot(e,t,n,r){Ze(e,t,ce(n&&ae(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Bt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ot(e.prototype,"constructor",e),{extend:Qe.bind(null,e.prototype)}}}}var Xa=Object.getOwnPropertyDescriptor,sa=[].slice;function In(e,t,n){return sa.call(e,t,n)}function Oa(e,t){return t(e)}function rn(e){if(!e)throw new Error("Assertion Failed")}function Ta(e){ee.setImmediate?setImmediate(e):setTimeout(e,0)}function St(e,t){if(typeof t=="string"&&ae(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],r=0,s=t.length;r<s;++r){var i=St(e,t[r]);n.push(i)}return n}var u,d=t.indexOf(".");return d===-1||(u=e[t.substr(0,d)])==null?void 0:St(u,t.substr(d+1))}function nt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){rn(typeof n!="string"&&"length"in n);for(var r=0,s=t.length;r<s;++r)nt(e,t[r],n[r])}else{var i,u,d=t.indexOf(".");d!==-1?(i=t.substr(0,d),(d=t.substr(d+1))===""?n===void 0?te(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:nt(u=(u=e[i])&&ae(e,i)?u:e[i]={},d,n)):n===void 0?te(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function At(e){var t,n={};for(t in e)ae(e,t)&&(n[t]=e[t]);return n}var Aa=[].concat;function lt(e){return Aa.apply([],e)}var Et="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(lt([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ee[e]}),be=new Set(Et.map(function(e){return ee[e]})),Lt=null;function Qt(e){return Lt=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var r=Lt.get(n);if(r)return r;if(te(n)){r=[],Lt.set(n,r);for(var s=0,i=n.length;s<i;++s)r.push(t(n[s]))}else if(be.has(n.constructor))r=n;else{var u,d=He(n);for(u in r=d===Object.prototype?{}:Object.create(d),Lt.set(n,r),n)ae(n,u)&&(r[u]=t(n[u]))}return r})(e),Lt=null,e}var Fa={}.toString;function ia(e){return Fa.call(e).slice(8,-1)}var Nn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Qa=typeof Nn=="symbol"?function(e){var t;return e!=null&&(t=e[Nn])&&t.apply(e)}:function(){return null};function jt(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var sn={};function _t(e){var t,n,r,s;if(arguments.length===1){if(te(e))return e.slice();if(this===sn&&typeof e=="string")return[e];if(s=Qa(e))for(n=[];!(r=s.next()).done;)n.push(r.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var oa=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Et=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],je=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Et),Za={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function on(e,t){this.name=e,this.message=t}function Da(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,r,s){return s.indexOf(n)===r}).join(`
`)}function yn(e,t,n,r){this.failures=t,this.failedKeys=r,this.successCount=n,this.message=Da(e,t)}function ln(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Da(e,this.failures)}Bt(on).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Bt(yn).from(on),Bt(ln).from(on);var la=je.reduce(function(e,t){return e[t]=t+"Error",e},{}),ua=on,G=je.reduce(function(e,t){var n=t+"Error";function r(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Za[t]||n,this.inner=null)}return Bt(r).from(ua),e[t]=r,e},{}),Cn=(G.Syntax=SyntaxError,G.Type=TypeError,G.Range=RangeError,Et.reduce(function(e,t){return e[t+"Error"]=G[t],e},{}));Et=je.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=G[t]),e},{});function he(){}function Rt(e){return e}function Ne(e,t){return e==null||e===Rt?t:function(n){return t(e(n))}}function Pt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Kn(e,t){return e===he?t:function(){var n=e.apply(this,arguments),r=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Pt(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Pt(s,this.onerror):s),i!==void 0?i:n}}function qn(e,t){return e===he?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Pt(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Pt(r,this.onerror):r)}}function er(e,t){return e===he?t:function(s){var r=e.apply(this,arguments),s=(ce(s,r),this.onsuccess),i=this.onerror,u=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Pt(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Pt(i,this.onerror):i),r===void 0?u===void 0?void 0:u:ce(r,u)}}function ca(e,t){return e===he?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function xn(e,t){return e===he?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(r,i)})}return t.apply(this,arguments)}}Et.ModifyError=yn,Et.DexieError=on,Et.BulkError=ln;var mt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ia(e){mt=e}var Ue={},Na=100,Mt=typeof Promise>"u"?[]:(je=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Mt=crypto.subtle.digest("SHA-512",new Uint8Array([0])),He(Mt),je]:[je,He(je),je]),je=Mt[0],bn=Mt[1],bn=bn&&bn.then,Zt=je&&je.constructor,un=!!Mt[2],wn=function(e,t){cn.push([e,t]),Te&&(queueMicrotask(nr),Te=!1)},Ln=!0,Te=!0,Re=[],re=[],kn=Rt,Ft={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:he,pgp:!1,env:{},finalize:he},z=Ft,cn=[],at=0,ut=[];function L(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=z;if(typeof e!="function"){if(e!==Ue)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&da(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(r,s){try{s(function(i){if(r._state===null){if(i===r)throw new TypeError("A promise cannot be resolved with itself.");var u=r._lib&&dn();i&&typeof i.then=="function"?n(r,function(d,C){i instanceof L?i._then(d,C):i.then(d,C)}):(r._state=!0,r._value=i,qa(r)),u&&fn()}},da.bind(null,r))}catch(i){da(r,i)}})(this,e)}var jn={get:function(){var e=z,t=Yn;function n(r,s){var i=this,u=!e.global&&(e!==z||t!==Yn),d=u&&!gt(),C=new L(function($,a){fa(i,new Ka(Ra(r,e,u,d),Ra(s,e,u,d),$,a,e))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return n.prototype=Ue,n},set:function(e){ot(this,"then",e&&e.prototype===Ue?jn:{get:function(){return e},set:jn.set})}};function Ka(e,t,n,r,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=r,this.psd=s}function da(e,t){var n,r;re.push(t),e._state===null&&(n=e._lib&&dn(),t=kn(t),e._state=!1,e._value=t,r=e,Re.some(function(s){return s._value===r._value})||Re.push(r),qa(e),n)&&fn()}function qa(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)fa(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),at===0&&(++at,wn(function(){--at==0&&ha()},[]))}function fa(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++at,wn(tr,[n,e,t])}}function tr(e,t,n){try{var r,s=t._value;!t._state&&re.length&&(re=[]),r=mt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||re.indexOf(s)!==-1||(i=>{for(var u=Re.length;u;)if(Re[--u]._value===i._value)return Re.splice(u,1)})(t),n.resolve(r)}catch(i){n.reject(i)}finally{--at==0&&ha(),--n.psd.ref||n.psd.finalize()}}function nr(){en(Ft,function(){dn()&&fn()})}function dn(){var e=Ln;return Te=Ln=!1,e}function fn(){var e,t,n;do for(;0<cn.length;)for(e=cn,cn=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}while(0<cn.length);Te=Ln=!0}function ha(){for(var e=Re,t=(Re=[],e.forEach(function(r){r._PSD.onunhandled.call(null,r._value,r)}),ut.slice(0)),n=t.length;n;)t[--n]()}function $n(e){return new L(Ue,!1,e)}function we(e,t){var n=z;return function(){var r=dn(),s=z;try{return Yt(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Yt(s,!1),r&&fn()}}}Qe(L.prototype,{then:jn,_then:function(e,t){fa(this,new Ka(null,null,e,t,z))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(r){return(r instanceof t?n:$n)(r)}):this.then(null,function(r){return(r&&r.name===t?n:$n)(r)}))},finally:function(e){return this.then(function(t){return L.resolve(e()).then(function(){return t})},function(t){return L.resolve(e()).then(function(){return $n(t)})})},timeout:function(e,t){var n=this;return e<1/0?new L(function(r,s){var i=setTimeout(function(){return s(new G.Timeout(t))},e);n.then(r,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ot(L.prototype,Symbol.toStringTag,"Dexie.Promise"),Ft.env=ja(),Qe(L,{all:function(){var e=_t.apply(null,arguments).map(Bn);return new L(function(t,n){e.length===0&&t([]);var r=e.length;e.forEach(function(s,i){return L.resolve(s).then(function(u){e[i]=u,--r||t(e)},n)})})},resolve:function(e){return e instanceof L?e:e&&typeof e.then=="function"?new L(function(t,n){e.then(t,n)}):new L(Ue,!0,e)},reject:$n,race:function(){var e=_t.apply(null,arguments).map(Bn);return new L(function(t,n){e.map(function(r){return L.resolve(r).then(t,n)})})},PSD:{get:function(){return z},set:function(e){return z=e}},totalEchoes:{get:function(){return Yn}},newPSD:Vt,usePSD:en,scheduler:{get:function(){return wn},set:function(e){wn=e}},rejectionMapper:{get:function(){return kn},set:function(e){kn=e}},follow:function(e,t){return new L(function(n,r){return Vt(function(s,i){var u=z;u.unhandleds=[],u.onunhandled=i,u.finalize=Pt(function(){var d,C=this;d=function(){C.unhandleds.length===0?s():i(C.unhandleds[0])},ut.push(function $(){d(),ut.splice(ut.indexOf($),1)}),++at,wn(function(){--at==0&&ha()},[])},u.finalize),e()},t,n,r)})}}),Zt&&(Zt.allSettled&&ot(L,"allSettled",function(){var e=_t.apply(null,arguments).map(Bn);return new L(function(t){e.length===0&&t([]);var n=e.length,r=new Array(n);e.forEach(function(s,i){return L.resolve(s).then(function(u){return r[i]={status:"fulfilled",value:u}},function(u){return r[i]={status:"rejected",reason:u}}).then(function(){return--n||t(r)})})})}),Zt.any&&typeof AggregateError<"u"&&ot(L,"any",function(){var e=_t.apply(null,arguments).map(Bn);return new L(function(t,n){e.length===0&&n(new AggregateError([]));var r=e.length,s=new Array(r);e.forEach(function(i,u){return L.resolve(i).then(function(d){return t(d)},function(d){s[u]=d,--r||n(new AggregateError(s))})})})}),Zt.withResolvers)&&(L.withResolvers=Zt.withResolvers);var Ke={awaits:0,echoes:0,id:0},ar=0,Rn=[],Vn=0,Yn=0,rr=0;function Vt(e,u,n,r){var s=z,i=Object.create(s),u=(i.parent=s,i.ref=0,i.global=!1,i.id=++rr,Ft.env,i.env=un?{Promise:L,PromiseProp:{value:L,configurable:!0,writable:!0},all:L.all,race:L.race,allSettled:L.allSettled,any:L.any,resolve:L.resolve,reject:L.reject}:{},u&&ce(i,u),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},en(i,e,n,r));return i.ref===0&&i.finalize(),u}function hn(){return Ke.id||(Ke.id=++ar),++Ke.awaits,Ke.echoes+=Na,Ke.id}function gt(){return!!Ke.awaits&&(--Ke.awaits==0&&(Ke.id=0),Ke.echoes=Ke.awaits*Na,!0)}function Bn(e){return Ke.echoes&&e&&e.constructor===Zt?(hn(),e.then(function(t){return gt(),t},function(t){return gt(),Pe(t)})):e}function La(){var e=Rn[Rn.length-1];Rn.pop(),Yt(e,!1)}function Yt(e,t){var n,r,s=z;(t?!Ke.echoes||Vn++&&e===z:!Vn||--Vn&&e===z)||queueMicrotask(t?(function(i){++Yn,Ke.echoes&&--Ke.echoes!=0||(Ke.echoes=Ke.awaits=Ke.id=0),Rn.push(z),Yt(i,!0)}).bind(null,e):La),e!==z&&(z=e,s===Ft&&(Ft.env=ja()),un)&&(n=Ft.env.Promise,r=e.env,s.global||e.global)&&(Object.defineProperty(ee,"Promise",r.PromiseProp),n.all=r.all,n.race=r.race,n.resolve=r.resolve,n.reject=r.reject,r.allSettled&&(n.allSettled=r.allSettled),r.any)&&(n.any=r.any)}function ja(){var e=ee.Promise;return un?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ee,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function en(e,t,n,r,s){var i=z;try{return Yt(e,!0),t(n,r,s)}finally{Yt(i,!1)}}function Ra(e,t,n,r){return typeof e!="function"?e:function(){var s=z;n&&hn(),Yt(t,!0);try{return e.apply(this,arguments)}finally{Yt(s,!1),r&&queueMicrotask(gt)}}}function zn(e){Promise===Zt&&Ke.echoes===0?Vn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+bn).indexOf("[native code]")===-1&&(hn=gt=he);var Pe=L.reject,zt="￿",Dt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Va="String expected.",pn=[],Un="__dbnames",Z="readonly",pa="readwrite";function l(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var c={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function y(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=Qt(t))[e],t}}function p(){throw G.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function v(e,t){try{var n=P(e),r=P(t);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=F(e),i=F(t),u=s.length,d=i.length,C=u<d?u:d,$=0;$<C;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return u===d?0:u<d?-1:1;case"Array":for(var a=e,o=t,f=a.length,h=o.length,m=f<h?f:h,b=0;b<m;++b){var k=v(a[b],o[b]);if(k!==0)return k}return f===h?0:f<h?-1:1}}catch{}return NaN}function P(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=ia(e))==="ArrayBuffer")?"binary":t}function F(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function q(e,t,n){var r=e.schema.yProps;return r?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(r.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}J.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(te(n))return ue(ue([],te(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var r=t.remove;if(te(r))return te(e)?e.filter(function(s){return!r.includes(s)}).sort():[];if(typeof r=="number")return Number(e)-r;if(typeof r=="bigint")try{return BigInt(e)-r}catch{return BigInt(0)-r}throw new TypeError("Invalid subtrahend ".concat(r))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var N=J;function J(e){this["@@propmod"]=e}function U(e,t){for(var n=fe(t),r=n.length,s=!1,i=0;i<r;++i){var u=n[i],d=t[u],C=St(e,u);d instanceof N?(nt(e,u,d.execute(C)),s=!0):C!==d&&(nt(e,u,d),s=!0)}return s}H.prototype._trans=function(e,t,n){var r=this._tx||z.trans,s=this.name,i=mt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function u($,a,o){if(o.schema[s])return t(o.idbtrans,o);throw new G.NotFound("Table "+s+" not part of transaction")}var d=dn();try{var C=r&&r.db._novip===this.db._novip?r===z.trans?r._promise(e,u,n):Vt(function(){return r._promise(e,u,n)},{trans:r,transless:z.transless||z}):(function $(a,o,f,h){if(a.idbdb&&(a._state.openComplete||z.letThrough||a._vip)){var m=a._createTransaction(o,f,a._dbSchema);try{m.create(),a._state.PR1398_maxLoop=3}catch(b){return b.name===la.InvalidState&&a.isOpen()&&0<--a._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),a.close({disableAutoOpen:!1}),a.open().then(function(){return $(a,o,f,h)})):Pe(b)}return m._promise(o,function(b,k){return Vt(function(){return z.trans=m,h(b,k,m)})}).then(function(b){if(o==="readwrite")try{m.idbtrans.commit()}catch{}return o==="readonly"?b:m._completion.then(function(){return b})})}if(a._state.openComplete)return Pe(new G.DatabaseClosed(a._state.dbOpenError));if(!a._state.isBeingOpened){if(!a._state.autoOpen)return Pe(new G.DatabaseClosed);a.open().catch(he)}return a._state.dbReadyPromise.then(function(){return $(a,o,f,h)})})(this.db,e,[this.name],u);return i&&(C._consoleTask=i,C=C.catch(function($){return console.trace($),Pe($)})),C}finally{d&&fn()}},H.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Pe(new G.Type("Invalid argument to Table.get()")):this._trans("readonly",function(r){return n.core.get({trans:r,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},H.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(te(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=fe(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(d){if(d.compound&&t.every(function($){return 0<=d.keyPath.indexOf($)})){for(var C=0;C<t.length;++C)if(t.indexOf(d.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(d,C){return d.keyPath.length-C.keyPath.length})[0];if(n&&this.db._maxKey!==zt)return u=n.keyPath.slice(0,t.length),this.where(u).equals(u.map(function(d){return e[d]}));!n&&mt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var r=this.schema.idxByName;function s(d,C){return v(d,C)===0}var u=t.reduce(function(a,C){var $=a[0],a=a[1],o=r[C],f=e[C];return[$||o,$||!o?l(a,o&&o.multi?function(h){return h=St(h,C),te(h)&&h.some(function(m){return s(f,m)})}:function(h){return s(f,St(h,C))}):a]},[null,null]),i=u[0],u=u[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(u):n?this.filter(u):this.where(t).equals("")},H.prototype.filter=function(e){return this.toCollection().and(e)},H.prototype.count=function(e){return this.toCollection().count(e)},H.prototype.offset=function(e){return this.toCollection().offset(e)},H.prototype.limit=function(e){return this.toCollection().limit(e)},H.prototype.each=function(e){return this.toCollection().each(e)},H.prototype.toArray=function(e){return this.toCollection().toArray(e)},H.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},H.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,te(e)?"[".concat(e.join("+"),"]"):e))},H.prototype.reverse=function(){return this.toCollection().reverse()},H.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,r=((this.schema.mappedClass=e).prototype instanceof p&&(e=(u=>{var d=a,C=u;if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");function $(){this.constructor=d}function a(){return u!==null&&u.apply(this,arguments)||this}return Se(d,C),d.prototype=C===null?Object.create(C):($.prototype=C.prototype,new $),Object.defineProperty(a.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),a.prototype.table=function(){return n},a})(e)),new Set),s=e.prototype;s;s=He(s))Object.getOwnPropertyNames(s).forEach(function(u){return r.add(u)});function i(u){if(!u)return u;var d,C=Object.create(e.prototype);for(d in u)if(!r.has(d))try{C[d]=u[d]}catch{}return C}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},H.prototype.defineClass=function(){return this.mapToClass(function(e){ce(this,e)})},H.prototype.add=function(e,t){var n=this,r=this.schema.primKey,s=r.auto,i=r.keyPath,u=e;return i&&s&&(u=y(i)(e)),this._trans("readwrite",function(d){return n.core.mutate({trans:d,type:"add",keys:t!=null?[t]:null,values:[u]})}).then(function(d){return d.numFailures?L.reject(d.failures[0]):d.lastResult}).then(function(d){if(i)try{nt(e,i,d)}catch{}return d})},H.prototype.upsert=function(e,t){var n=this,r=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var u=i??{};return U(u,t),r&&nt(u,r,e),n.core.mutate({trans:s,type:"put",values:[u],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(d){return d.numFailures?L.reject(d.failures[0]):!!i})})})},H.prototype.update=function(e,t){return typeof e!="object"||te(e)?this.where(":id").equals(e).modify(t):(e=St(e,this.schema.primKey.keyPath))===void 0?Pe(new G.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},H.prototype.put=function(e,t){var n=this,r=this.schema.primKey,s=r.auto,i=r.keyPath,u=e;return i&&s&&(u=y(i)(e)),this._trans("readwrite",function(d){return n.core.mutate({trans:d,type:"put",values:[u],keys:t!=null?[t]:null})}).then(function(d){return d.numFailures?L.reject(d.failures[0]):d.lastResult}).then(function(d){if(i)try{nt(e,i,d)}catch{}return d})},H.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(r){return q(t,[e],r)}).then(function(r){return r.numFailures?L.reject(r.failures[0]):void 0})})},H.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:c}).then(function(n){return q(e,null,n)})}).then(function(t){return t.numFailures?L.reject(t.failures[0]):void 0})},H.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(r){return r.map(function(s){return t.hook.reading.fire(s)})})})},H.prototype.bulkAdd=function(e,t,n){var r=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var d=r.schema.primKey,$=d.auto,d=d.keyPath;if(d&&s)throw new G.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");var C=e.length,$=d&&$?e.map(y(d)):e;return r.core.mutate({trans:u,type:"add",keys:s,values:$,wantResults:i}).then(function(a){var o=a.numFailures,f=a.failures;if(o===0)return i?a.results:a.lastResult;throw new ln("".concat(r.name,".bulkAdd(): ").concat(o," of ").concat(C," operations failed"),f)})})},H.prototype.bulkPut=function(e,t,n){var r=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var d=r.schema.primKey,$=d.auto,d=d.keyPath;if(d&&s)throw new G.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");var C=e.length,$=d&&$?e.map(y(d)):e;return r.core.mutate({trans:u,type:"put",keys:s,values:$,wantResults:i}).then(function(a){var o=a.numFailures,f=a.failures;if(o===0)return i?a.results:a.lastResult;throw new ln("".concat(r.name,".bulkPut(): ").concat(o," of ").concat(C," operations failed"),f)})})},H.prototype.bulkUpdate=function(e){var t=this,n=this.core,r=e.map(function(u){return u.key}),s=e.map(function(u){return u.changes}),i=[];return this._trans("readwrite",function(u){return n.getMany({trans:u,keys:r,cache:"clone"}).then(function(d){var C=[],$=[],a=(e.forEach(function(o,f){var h=o.key,m=o.changes,b=d[f];if(b){for(var k=0,w=Object.keys(m);k<w.length;k++){var x=w[k],_=m[x];if(x===t.schema.primKey.keyPath){if(v(_,h)!==0)throw new G.Constraint("Cannot update primary key in bulkUpdate()")}else nt(b,x,_)}i.push(f),C.push(h),$.push(b)}}),C.length);return n.mutate({trans:u,type:"put",keys:C,values:$,updates:{keys:r,changeSpecs:s}}).then(function(o){var f=o.numFailures,h=o.failures;if(f===0)return a;for(var m=0,b=Object.keys(h);m<b.length;m++){var k,w=b[m],x=i[Number(w)];x!=null&&(k=h[w],delete h[w],h[x]=k)}throw new ln("".concat(t.name,".bulkUpdate(): ").concat(f," of ").concat(a," operations failed"),h)})})})},H.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(r){return t.core.mutate({trans:r,type:"delete",keys:e}).then(function(s){return q(t,e,s)})}).then(function(r){var s=r.numFailures,i=r.failures;if(s===0)return r.lastResult;throw new ln("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var X=H;function H(){}function ke(e){function t(u,d){if(d){for(var C=arguments.length,$=new Array(C-1);--C;)$[C-1]=arguments[C];return n[u].subscribe.apply(null,$),e}if(typeof u=="string")return n[u]}var n={};t.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return t;function i(u,d,C){var $,a;if(typeof u!="object")return d=d||ca,a={subscribers:[],fire:C=C||he,subscribe:function(o){a.subscribers.indexOf(o)===-1&&(a.subscribers.push(o),a.fire=d(a.fire,o))},unsubscribe:function(o){a.subscribers=a.subscribers.filter(function(f){return f!==o}),a.fire=a.subscribers.reduce(d,C)}},n[u]=t[u]=a;fe($=u).forEach(function(o){var f=$[o];if(te(f))i(o,$[o][0],$[o][1]);else{if(f!=="asap")throw new G.InvalidArgument("Invalid event config");var h=i(o,Rt,function(){for(var m=arguments.length,b=new Array(m);m--;)b[m]=arguments[m];h.subscribers.forEach(function(k){Ta(function(){k.apply(null,b)})})})}})}}function Ve(e,t){return Bt(t).from({prototype:e}),t}function Me(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function de(e,t){e.filter=l(e.filter,t)}function ct(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return l(r(),t())}:t,e.justLimit=n&&!r}function De(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new G.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function rt(e,t,n){var r=De(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:r,range:e.range}})}function bt(e,t,n,r){var s,i,u=e.replayFilter?l(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(d,C,$){var a,o;u&&!u(C,$,function(f){return C.stop(f)},function(f){return C.fail(f)})||((o=""+(a=C.primaryKey))=="[object ArrayBuffer]"&&(o=""+new Uint8Array(a)),ae(s,o))||(s[o]=!0,t(d,C,$))},Promise.all([e.or._iterate(i,n),dt(rt(e,r,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):dt(rt(e,r,n),l(e.algorithm,u),t,!e.keysOnly&&e.valueMapper)}function dt(e,t,n,r){var s=we(r?function(i,u,d){return n(r(i),u,d)}:n);return e.then(function(i){if(i)return i.start(function(){var u=function(){return i.continue()};t&&!t(i,function(d){return u=d},function(d){i.stop(d),u=he},function(d){i.fail(d),u=he})||s(i.value,i,function(d){return u=d}),u()})})}Q.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Pe.bind(null,n.error)):n.table._trans("readonly",e).then(t)},Q.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Pe.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Q.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=l(t.algorithm,e)},Q.prototype._iterate=function(e,t){return bt(this._ctx,e,t,this._ctx.table.core)},Q.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ce(n,e),t._ctx=n,t},Q.prototype.raw=function(){return this._ctx.valueMapper=null,this},Q.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return bt(t,e,n,t.table.core)})},Q.prototype.count=function(e){var t=this;return this._read(function(n){var r,s=t._ctx,i=s.table.core;return Me(s,!0)?i.count({trans:n,query:{index:De(s,i.schema),range:s.range}}).then(function(u){return Math.min(u,s.limit)}):(r=0,bt(s,function(){return++r,!1},n,i).then(function(){return r}))}).then(e)},Q.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),r=n[0],s=n.length-1;function i(C,$){return $?i(C[n[$]],$-1):C[r]}var u=this._ctx.dir==="next"?1:-1;function d(C,$){return v(i(C,s),i($,s))*u}return this.toArray(function(C){return C.sort(d)}).then(t)},Q.prototype.toArray=function(e){var t=this;return this._read(function(n){var r,s,i,u=t._ctx;return u.dir==="next"&&Me(u,!0)&&0<u.limit?(r=u.valueMapper,s=De(u,u.table.core.schema),u.table.core.query({trans:n,limit:u.limit,values:!0,query:{index:s,range:u.range}}).then(function(d){return d=d.result,r?d.map(r):d})):(i=[],bt(u,function(d){return i.push(d)},n,u.table.core).then(function(){return i}))},e)},Q.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,Me(t)?ct(t,function(){var n=e;return function(r,s){return n===0||(n===1?--n:s(function(){r.advance(n),n=0}),!1)}}):ct(t,function(){var n=e;return function(){return--n<0}})),this},Q.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),ct(this._ctx,function(){var t=e;return function(n,r,s){return--t<=0&&r(s),0<=t}},!0),this},Q.prototype.until=function(e,t){return de(this._ctx,function(n,r,s){return!e(n.value)||(r(s),t)}),this},Q.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},Q.prototype.last=function(e){return this.reverse().first(e)},Q.prototype.filter=function(e){var t;return de(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=l(t.isMatch,e),this},Q.prototype.and=function(e){return this.filter(e)},Q.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Q.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Q.prototype.desc=function(){return this.reverse()},Q.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,r){e(r.key,r)})},Q.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Q.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,r){e(r.primaryKey,r)})},Q.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(r,s){n.push(s.key)}).then(function(){return n}).then(e)},Q.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&Me(t,!0)&&0<t.limit)return this._read(function(r){var s=De(t,t.table.core.schema);return t.table.core.query({trans:r,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(r){return r.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(r,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},Q.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Q.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},Q.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Q.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},de(this._ctx,function(r){var r=r.primaryKey.toString(),s=ae(e,r);return e[r]=!0,!s})),this},Q.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(r){function s(b,k){var w=k.failures;f+=b-k.numFailures;for(var x=0,_=fe(w);x<_.length;x++){var M=_[x];o.push(w[M])}}var i=typeof e=="function"?e:function(b){return U(b,e)},u=n.table.core,a=u.schema.primaryKey,d=a.outbound,C=a.extractKey,$=200,a=t.db._options.modifyChunkSize,o=(a&&($=typeof a=="object"?a[u.name]||a["*"]||200:a),[]),f=0,h=[],m=e===Ot;return t.clone().primaryKeys().then(function(b){function k(x){var _=Math.min($,b.length-x),M=b.slice(x,x+_);return(m?Promise.resolve([]):u.getMany({trans:r,keys:M,cache:"immutable"})).then(function(A){var I=[],O=[],R=d?[]:null,j=m?M:[];if(!m)for(var T=0;T<_;++T){var V=A[T],se={value:Qt(V),primKey:b[x+T]};i.call(se,se.value,se)!==!1&&(se.value==null?j.push(b[x+T]):d||v(C(V),C(se.value))===0?(O.push(se.value),d&&R.push(b[x+T])):(j.push(b[x+T]),I.push(se.value)))}return Promise.resolve(0<I.length&&u.mutate({trans:r,type:"add",values:I}).then(function(le){for(var W in le.failures)j.splice(parseInt(W),1);s(I.length,le)})).then(function(){return(0<O.length||w&&typeof e=="object")&&u.mutate({trans:r,type:"put",keys:R,values:O,criteria:w,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<x}).then(function(le){return s(O.length,le)})}).then(function(){return(0<j.length||w&&m)&&u.mutate({trans:r,type:"delete",keys:j,criteria:w,isAdditionalChunk:0<x}).then(function(le){return q(n.table,j,le)}).then(function(le){return s(j.length,le)})}).then(function(){return b.length>x+_&&k(x+$)})})}var w=Me(n)&&n.limit===1/0&&(typeof e!="function"||m)&&{index:n.index,range:n.range};return k(0).then(function(){if(0<o.length)throw new yn("Error modifying one or more objects",o,f,h);return b.length})})})},Q.prototype.delete=function(){var e=this._ctx,t=e.range;return!Me(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Ot):this._write(function(n){var r=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:r,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(C){var d=C.failures,C=C.numFailures;if(C)throw new yn("Could not delete some values",Object.keys(d).map(function($){return d[$]}),i-C);return i-C})})})};var K=Q;function Q(){}var Ot=function(e,t){return t.value=null};function wt(e,t){return e<t?-1:e===t?0:1}function st(e,t){return t<e?-1:e===t?0:1}function ye(e,t,n){return e=e instanceof Ye?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Ge(e){return new e.Collection(e,function(){return ft("")}).limit(0)}function ge(h,t,n,r){var s,i,u,d,C,$,a,o=n.length;if(!n.every(function(b){return typeof b=="string"}))return ye(h,Va);function f(b){s=b==="next"?function(w){return w.toUpperCase()}:function(w){return w.toLowerCase()},i=b==="next"?function(w){return w.toLowerCase()}:function(w){return w.toUpperCase()},u=b==="next"?wt:st;var k=n.map(function(w){return{lower:i(w),upper:s(w)}}).sort(function(w,x){return u(w.lower,x.lower)});d=k.map(function(w){return w.upper}),C=k.map(function(w){return w.lower}),a=($=b)==="next"?"":r}f("next");var h=new h.Collection(h,function(){return Ae(d[0],C[o-1]+r)}),m=(h._ondirectionchange=function(b){f(b)},0);return h._addAlgorithm(function(b,k,w){var x=b.key;if(typeof x=="string"){var _=i(x);if(t(_,C,m))return!0;for(var M=null,A=m;A<o;++A){var I=((O,R,j,T,V,se)=>{for(var le=Math.min(O.length,T.length),W=-1,ne=0;ne<le;++ne){var ve=R[ne];if(ve!==T[ne])return V(O[ne],j[ne])<0?O.substr(0,ne)+j[ne]+j.substr(ne+1):V(O[ne],T[ne])<0?O.substr(0,ne)+T[ne]+j.substr(ne+1):0<=W?O.substr(0,W)+R[W]+j.substr(W+1):null;V(O[ne],ve)<0&&(W=ne)}return le<T.length&&se==="next"?O+j.substr(O.length):le<O.length&&se==="prev"?O.substr(0,j.length):W<0?null:O.substr(0,W)+T[W]+j.substr(W+1)})(x,_,d[A],C[A],u,$);I===null&&M===null?m=A+1:(M===null||0<u(M,I))&&(M=I)}k(M!==null?function(){b.continue(M+a)}:w)}return!1}),h}function Ae(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function ft(e){return{type:1,lower:e,upper:e}}Object.defineProperty(ie.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ie.prototype.between=function(e,t,n,r){n=n!==!1,r=r===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||r)&&(!n||!r)?Ge(this):new this.Collection(this,function(){return Ae(e,t,!n,!r)})}catch{return ye(this,Dt)}},ie.prototype.equals=function(e){return e==null?ye(this,Dt):new this.Collection(this,function(){return ft(e)})},ie.prototype.above=function(e){return e==null?ye(this,Dt):new this.Collection(this,function(){return Ae(e,void 0,!0)})},ie.prototype.aboveOrEqual=function(e){return e==null?ye(this,Dt):new this.Collection(this,function(){return Ae(e,void 0,!1)})},ie.prototype.below=function(e){return e==null?ye(this,Dt):new this.Collection(this,function(){return Ae(void 0,e,!1,!0)})},ie.prototype.belowOrEqual=function(e){return e==null?ye(this,Dt):new this.Collection(this,function(){return Ae(void 0,e)})},ie.prototype.startsWith=function(e){return typeof e!="string"?ye(this,Va):this.between(e,e+zt,!0,!0)},ie.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):ge(this,function(t,n){return t.indexOf(n[0])===0},[e],zt)},ie.prototype.equalsIgnoreCase=function(e){return ge(this,function(t,n){return t===n[0]},[e],"")},ie.prototype.anyOfIgnoreCase=function(){var e=_t.apply(sn,arguments);return e.length===0?Ge(this):ge(this,function(t,n){return n.indexOf(t)!==-1},e,"")},ie.prototype.startsWithAnyOfIgnoreCase=function(){var e=_t.apply(sn,arguments);return e.length===0?Ge(this):ge(this,function(t,n){return n.some(function(r){return t.indexOf(r)===0})},e,zt)},ie.prototype.anyOf=function(){var e,t,n=this,r=_t.apply(sn,arguments),s=this._cmp;try{r.sort(s)}catch{return ye(this,Dt)}return r.length===0?Ge(this):((e=new this.Collection(this,function(){return Ae(r[0],r[r.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,r.sort(s)},t=0,e._addAlgorithm(function(i,u,d){for(var C=i.key;0<s(C,r[t]);)if(++t===r.length)return u(d),!1;return s(C,r[t])===0||(u(function(){i.continue(r[t])}),!1)}),e)},ie.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ie.prototype.noneOf=function(){var e=_t.apply(sn,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ye(this,Dt)}var t=e.reduce(function(n,r){return n?n.concat([[n[n.length-1][1],r]]):[[-1/0,r]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},ie.prototype.inAnyRange=function(e,w){var n=this,r=this._cmp,s=this._ascending,i=this._descending,u=this._min,d=this._max;if(e.length===0)return Ge(this);if(!e.every(function(x){return x[0]!==void 0&&x[1]!==void 0&&s(x[0],x[1])<=0}))return ye(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",G.InvalidArgument);var C=!w||w.includeLowers!==!1,$=w&&w.includeUppers===!0,a,o=s;function f(x,_){return o(x[0],_[0])}try{(a=e.reduce(function(x,_){for(var M=0,A=x.length;M<A;++M){var I=x[M];if(r(_[0],I[1])<0&&0<r(_[1],I[0])){I[0]=u(I[0],_[0]),I[1]=d(I[1],_[1]);break}}return M===A&&x.push(_),x},[])).sort(f)}catch{return ye(this,Dt)}var h=0,m=$?function(x){return 0<s(x,a[h][1])}:function(x){return 0<=s(x,a[h][1])},b=C?function(x){return 0<i(x,a[h][0])}:function(x){return 0<=i(x,a[h][0])},k=m,w=new this.Collection(this,function(){return Ae(a[0][0],a[a.length-1][1],!C,!$)});return w._ondirectionchange=function(x){o=x==="next"?(k=m,s):(k=b,i),a.sort(f)},w._addAlgorithm(function(x,_,M){for(var A,I=x.key;k(I);)if(++h===a.length)return _(M),!1;return!m(A=I)&&!b(A)||(n._cmp(I,a[h][1])===0||n._cmp(I,a[h][0])===0||_(function(){o===s?x.continue(a[h][0]):x.continue(a[h][1])}),!1)}),w},ie.prototype.startsWithAnyOf=function(){var e=_t.apply(sn,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Ge(this):this.inAnyRange(e.map(function(t){return[t,t+zt]})):ye(this,"startsWithAnyOf() only works with strings")};var Ye=ie;function ie(){}function Fe(e){return we(function(t){return yt(t),e(t.target.error),!1})}function yt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var ze="storagemutated",ht="x-storagemutated-1",qe=ke(null,ze),Sn=(oe.prototype._lock=function(){return rn(!z.global),++this._reculock,this._reculock!==1||z.global||(z.lockOwnerFor=this),this},oe.prototype._unlock=function(){if(rn(!z.global),--this._reculock==0)for(z.global||(z.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{en(e[1],e[0])}catch{}}return this},oe.prototype._locked=function(){return this._reculock&&z.lockOwnerFor!==this},oe.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,r=this.db._state.dbOpenError;if(rn(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new G.DatabaseClosed(r);case"MissingAPIError":throw new G.MissingAPI(r.message,r);default:throw new G.OpenFailed(r)}if(!this.active)throw new G.TransactionInactive;rn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=we(function(s){yt(s),t._reject(e.error)}),e.onabort=we(function(s){yt(s),t.active&&t._reject(new G.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=we(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&qe.storagemutated.fire(e.mutatedParts)})}return this},oe.prototype._promise=function(e,t,n){var r,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Pe(new G.ReadOnly("Transaction is readonly")):this.active?this._locked()?new L(function(i,u){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,u)},z])}):n?Vt(function(){var i=new L(function(u,d){s._lock();var C=t(u,d,s);C&&C.then&&C.then(u,d)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((r=new L(function(i,u){var d=t(i,u,s);d&&d.then&&d.then(i,u)}))._lib=!0,r):Pe(new G.TransactionInactive)},oe.prototype._root=function(){return this.parent?this.parent._root():this},oe.prototype.waitFor=function(e){var t,n=this._root(),r=L.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return r}):(n._waitingFor=r,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new L(function(i,u){r.then(function(d){return n._waitingQueue.push(we(i.bind(null,d)))},function(d){return n._waitingQueue.push(we(u.bind(null,d)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},oe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new G.Abort))},oe.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ae(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new G.NotFound("Table "+e+" not part of transaction")},oe);function oe(){}function pe(e,t,n,r,s,i,u,d){return{name:e,keyPath:t,unique:n,multi:r,auto:s,compound:i,src:(n&&!u?"&":"")+(r?"*":"")+(s?"++":"")+_e(t),type:d}}function _e(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ie(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(r=function(s){return[s.name,s]},n.reduce(function(s,i,u){return i=r(i,u),i&&(s[i[0]]=i[1]),s},{}))};var r}var $e=function(e){try{return e.only([[]]),$e=function(){return[[]]},[[]]}catch{return $e=function(){return zt},zt}};function Ut(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return St(n,t)}:function(n){return St(n,e)};var t}function kt(e){return[].slice.call(e)}var _n=0;function S(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function D(e,t,C){function r(m){if(m.type===3)return null;if(m.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var o=m.lower,f=m.upper,h=m.lowerOpen,m=m.upperOpen;return o===void 0?f===void 0?null:t.upperBound(f,!!m):f===void 0?t.lowerBound(o,!!h):t.bound(o,f,!!h,!!m)}function s(a){var o,f=a.name;return{name:f,schema:a,mutate:function(h){var m=h.trans,b=h.type,k=h.keys,w=h.values,x=h.range;return new Promise(function(_,M){_=we(_);var A=m.objectStore(f),I=A.keyPath==null,O=b==="put"||b==="add";if(!O&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var R,j=(k||w||{length:1}).length;if(k&&w&&k.length!==w.length)throw new Error("Given keys array must have same length as given values array.");if(j===0)return _({numFailures:0,failures:{},results:[],lastResult:void 0});function T(me){++le,yt(me)}var V=[],se=[],le=0;if(b==="deleteRange"){if(x.type===4)return _({numFailures:le,failures:se,results:[],lastResult:void 0});x.type===3?V.push(R=A.clear()):V.push(R=A.delete(r(x)))}else{var I=O?I?[w,k]:[w,null]:[k,null],W=I[0],ne=I[1];if(O)for(var ve=0;ve<j;++ve)V.push(R=ne&&ne[ve]!==void 0?A[b](W[ve],ne[ve]):A[b](W[ve])),R.onerror=T;else for(ve=0;ve<j;++ve)V.push(R=A[b](W[ve])),R.onerror=T}function xt(me){me=me.target.result,V.forEach(function(Ht,Xt){return Ht.error!=null&&(se[Xt]=Ht.error)}),_({numFailures:le,failures:se,results:b==="delete"?k:V.map(function(Ht){return Ht.result}),lastResult:me})}R.onerror=function(me){T(me),xt(me)},R.onsuccess=xt})},getMany:function(h){var m=h.trans,b=h.keys;return new Promise(function(k,w){k=we(k);for(var x,_=m.objectStore(f),M=b.length,A=new Array(M),I=0,O=0,R=function(V){V=V.target,A[V._pos]=V.result,++O===I&&k(A)},j=Fe(w),T=0;T<M;++T)b[T]!=null&&((x=_.get(b[T]))._pos=T,x.onsuccess=R,x.onerror=j,++I);I===0&&k(A)})},get:function(h){var m=h.trans,b=h.key;return new Promise(function(k,w){k=we(k);var x=m.objectStore(f).get(b);x.onsuccess=function(_){return k(_.target.result)},x.onerror=Fe(w)})},query:(o=d,function(h){return new Promise(function(m,b){m=we(m);var k,w,x,O=h.trans,_=h.values,M=h.limit,I=h.query,A=M===1/0?void 0:M,R=I.index,I=I.range,O=O.objectStore(f),O=R.isPrimaryKey?O:O.index(R.name),R=r(I);if(M===0)return m({result:[]});o?((I=_?O.getAll(R,A):O.getAllKeys(R,A)).onsuccess=function(j){return m({result:j.target.result})},I.onerror=Fe(b)):(k=0,w=!_&&"openKeyCursor"in O?O.openKeyCursor(R):O.openCursor(R),x=[],w.onsuccess=function(j){var T=w.result;return!T||(x.push(_?T.value:T.primaryKey),++k===M)?m({result:x}):void T.continue()},w.onerror=Fe(b))})}),openCursor:function(h){var m=h.trans,b=h.values,k=h.query,w=h.reverse,x=h.unique;return new Promise(function(_,M){_=we(_);var O=k.index,A=k.range,I=m.objectStore(f),I=O.isPrimaryKey?I:I.index(O.name),O=w?x?"prevunique":"prev":x?"nextunique":"next",R=!b&&"openKeyCursor"in I?I.openKeyCursor(r(A),O):I.openCursor(r(A),O);R.onerror=Fe(M),R.onsuccess=we(function(j){var T,V,se,le,W=R.result;W?(W.___id=++_n,W.done=!1,T=W.continue.bind(W),V=(V=W.continuePrimaryKey)&&V.bind(W),se=W.advance.bind(W),le=function(){throw new Error("Cursor not stopped")},W.trans=m,W.stop=W.continue=W.continuePrimaryKey=W.advance=function(){throw new Error("Cursor not started")},W.fail=we(M),W.next=function(){var ne=this,ve=1;return this.start(function(){return ve--?ne.continue():ne.stop()}).then(function(){return ne})},W.start=function(ne){function ve(){if(R.result)try{ne()}catch(me){W.fail(me)}else W.done=!0,W.start=function(){throw new Error("Cursor behind last entry")},W.stop()}var xt=new Promise(function(me,Ht){me=we(me),R.onerror=Fe(Ht),W.fail=Ht,W.stop=function(Xt){W.stop=W.continue=W.continuePrimaryKey=W.advance=le,me(Xt)}});return R.onsuccess=we(function(me){R.onsuccess=ve,ve()}),W.continue=T,W.continuePrimaryKey=V,W.advance=se,ve(),xt},_(W)):_(null)},M)})},count:function(h){var m=h.query,b=h.trans,k=m.index,w=m.range;return new Promise(function(x,_){var M=b.objectStore(f),M=k.isPrimaryKey?M:M.index(k.name),A=r(w),A=A?M.count(A):M.count();A.onsuccess=we(function(I){return x(I.target.result)}),A.onerror=Fe(_)})}}}i=C,u=kt((C=e).objectStoreNames);var i,C={schema:{name:C.name,tables:u.map(function(a){return i.objectStore(a)}).map(function(a){var o=a.keyPath,f=a.autoIncrement,m=te(o),h={},m={name:a.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:o==null,compound:m,keyPath:o,autoIncrement:f,unique:!0,extractKey:Ut(o)},indexes:kt(a.indexNames).map(function(b){return a.index(b)}).map(function(x){var _=x.name,k=x.unique,w=x.multiEntry,x=x.keyPath,_={name:_,compound:te(x),keyPath:x,unique:k,multiEntry:w,extractKey:Ut(x)};return h[S(x)]=_}),getIndexByKeyPath:function(b){return h[S(b)]}};return h[":id"]=m.primaryKey,o!=null&&(h[S(o)]=m.primaryKey),m})},hasGetAll:0<u.length&&"getAll"in i.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},u=C.schema,d=C.hasGetAll,C=u.tables.map(s),$={};return C.forEach(function(a){return $[a.name]=a}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(a){if($[a])return $[a];throw new Error("Table '".concat(a,"' not found"))},MIN_KEY:-1/0,MAX_KEY:$e(t),schema:u}}function Le(e,t,n,r){return n=n.IDBKeyRange,t=D(t,n,r),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,Y(Y({},s),i(s))},t)}}function Ce(e,t){var n=t.db,n=Le(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(r){var s=r.name;e.core.schema.tables.some(function(i){return i.name===s})&&(r.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=r.core)})}function vn(e,t,n,r){n.forEach(function(s){var i=r[s];t.forEach(function(u){var d=(function C($,a){return Xa($,a)||($=He($))&&C($,a)})(u,s);(!d||"value"in d&&d.value===void 0)&&(u===e.Transaction.prototype||u instanceof e.Transaction?ot(u,s,{get:function(){return this.table(s)},set:function(C){Ze(this,s,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):u[s]=new e.Table(s,i))})})}function Gt(e,t){t.forEach(function(n){for(var r in n)n[r]instanceof e.Table&&delete n[r]})}function va(e,t){return e._cfg.version-t._cfg.version}function xe(e,t,n,r){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Ie("$meta",It("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),u=(i.create(n),i._completion.catch(r),i._reject.bind(i)),d=z.transless||z;Vt(function(){if(z.trans=i,z.transless=d,t!==0)return Ce(e,n),$=t,((C=i).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(a){return a??$}):L.resolve($)).then(function(k){var o=e,f=k,h=i,m=n,b=[],k=o._versions,w=o._dbSchema=Xn(0,o.idbdb,m);return(k=k.filter(function(x){return x._cfg.version>=f})).length===0?L.resolve():(k.forEach(function(x){b.push(function(){var _,M,A,I=w,O=x._cfg.dbschema,R=(pt(o,I,m),pt(o,O,m),w=o._dbSchema=O,Wn(I,O)),j=(R.add.forEach(function(T){Jn(m,T[0],T[1].primKey,T[1].indexes)}),R.change.forEach(function(T){if(T.recreate)throw new G.Upgrade("Not yet support for changing primary key");var V=m.objectStore(T.name);T.add.forEach(function(se){return Hn(V,se)}),T.change.forEach(function(se){V.deleteIndex(se.name),Hn(V,se)}),T.del.forEach(function(se){return V.deleteIndex(se)})}),x._cfg.contentUpgrade);if(j&&x._cfg.version>f)return Ce(o,m),h._memoizedTables={},_=At(O),R.del.forEach(function(T){_[T]=I[T]}),Gt(o,[o.Transaction.prototype]),vn(o,[o.Transaction.prototype],fe(_),_),h.schema=_,(M=oa(j))&&hn(),O=L.follow(function(){var T;(A=j(h))&&M&&(T=gt.bind(null,null),A.then(T,T))}),A&&typeof A.then=="function"?L.resolve(A):O.then(function(){return A})}),b.push(function(_){var M,A,I=x._cfg.dbschema;M=I,A=_,[].slice.call(A.db.objectStoreNames).forEach(function(O){return M[O]==null&&A.db.deleteObjectStore(O)}),Gt(o,[o.Transaction.prototype]),vn(o,[o.Transaction.prototype],o._storeNames,o._dbSchema),h.schema=o._dbSchema}),b.push(function(_){o.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(o.idbdb.version/10)===x._cfg.version?(o.idbdb.deleteObjectStore("$meta"),delete o._dbSchema.$meta,o._storeNames=o._storeNames.filter(function(M){return M!=="$meta"})):_.objectStore("$meta").put(x._cfg.version,"version"))})}),(function x(){return b.length?L.resolve(b.shift()(h.idbtrans)).then(x):L.resolve()})().then(function(){ma(w,m)}))}).catch(u);var C,$;fe(s).forEach(function(a){Jn(n,a,s[a].primKey,s[a].indexes)}),Ce(e,n),L.follow(function(){return e.on.populate.fire(i)}).catch(u)})}function Gn(e,t){ma(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Xn(0,e.idbdb,t);pt(e,e._dbSchema,t);for(var r=0,s=Wn(n,e._dbSchema).change;r<s.length;r++){var i=(u=>{if(u.change.length||u.recreate)return console.warn("Unable to patch indexes of table ".concat(u.name," because it has changes on the type of index or primary key.")),{value:void 0};var d=t.objectStore(u.name);u.add.forEach(function(C){mt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name,".").concat(C.src)),Hn(d,C)})})(s[r]);if(typeof i=="object")return i.value}}function Wn(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var u={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)u.recreate=!0,r.change.push(u);else{var d=s.idxByName,C=i.idxByName,$=void 0;for($ in d)C[$]||u.del.push($);for($ in C){var a=d[$],o=C[$];a?a.src!==o.src&&u.change.push(o):u.add.push(o)}(0<u.del.length||0<u.add.length||0<u.change.length)&&r.change.push(u)}}else r.add.push([n,i])}return r}function Jn(e,t,n,r){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});r.forEach(function(i){return Hn(s,i)})}function ma(e,t){fe(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(mt&&console.debug("Dexie: Creating missing table",n),Jn(t,n,e[n].primKey,e[n].indexes))})}function Hn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Xn(e,t,n){var r={};return In(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),u=pe(_e($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),d=[],C=0;C<i.indexNames.length;++C){var a=i.index(i.indexNames[C]),$=a.keyPath,a=pe(a.name,$,!!a.unique,!!a.multiEntry,!1,$&&typeof $!="string",!1);d.push(a)}r[s]=Ie(s,u,d)}),r}function pt(e,t,n){for(var r=n.db.objectStoreNames,s=0;s<r.length;++s){var i=r[s],u=n.objectStore(i);e._hasGetAll="getAll"in u;for(var d=0;d<u.indexNames.length;++d){var C,$=u.indexNames[d],a=u.index($).keyPath,a=typeof a=="string"?a:"["+In(a).join("+")+"]";t[i]&&(C=t[i].idxByName[a])&&(C.name=$,delete t[i].idxByName[a],t[i].idxByName[$]=C)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ee.WorkerGlobalScope&&ee instanceof ee.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function It(e){return e.split(",").map(function(t,n){var s=t.split(":"),r=(r=s[1])==null?void 0:r.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return pe(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),te(i),n===0,r)})}mn.prototype._createTableSchema=Ie,mn.prototype._parseIndexSyntax=It,mn.prototype._parseStoresSpec=function(e,t){var n=this;fe(e).forEach(function(r){if(e[r]!==null){var s=n._parseIndexSyntax(e[r]),i=s.shift();if(!i)throw new G.Schema("Invalid schema for table "+r+": "+e[r]);if(i.unique=!0,i.multi)throw new G.Schema("Primary key cannot be multiEntry*");s.forEach(function(u){if(u.auto)throw new G.Schema("Only primary key can be marked as autoIncrement (++)");if(!u.keyPath)throw new G.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(r,i,s),t[r]=i}})},mn.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ce(this._cfg.storesSource,n):n,t._versions),r={},s={};return n.forEach(function(i){ce(r,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(r,s)}),t._dbSchema=s,Gt(t,[t._allTables,t,t.Transaction.prototype]),vn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],fe(s),s),t._storeNames=fe(s),this},mn.prototype.upgrade=function(e){return this._cfg.contentUpgrade=xn(this._cfg.contentUpgrade||he,e),this};var sr=mn;function mn(){}function ga(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Tt(Un,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function ba(e){return e&&typeof e.databases=="function"}function ya(e){return Vt(function(){return z.letThrough=!0,e()})}function Ca(e){return!("from"in e)}var We=function(e,t){var n;if(!this)return n=new We,e&&"d"in e&&ce(n,e),n;ce(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function En(e,t,n){var r=v(t,n);if(!isNaN(r)){if(0<r)throw RangeError();if(Ca(e))return ce(e,{from:t,to:n,d:1});var r=e.l,s=e.r;if(v(n,e.from)<0)return r?En(r,t,n):e.l={from:t,to:n,d:1,l:null,r:null},xa(e);if(0<v(t,e.to))return s?En(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},xa(e);v(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<v(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,r&&!e.l&&Ct(e,r),s&&t&&Ct(e,s)}}function Ct(e,t){Ca(t)||(function n(r,s){var i=s.from,u=s.l,d=s.r;En(r,i,s.to),u&&n(r,u),d&&n(r,d)})(e,t)}function ir(e,t){var n=Qn(t),r=n.next();if(!r.done)for(var s=r.value,i=Qn(e),u=i.next(s.from),d=u.value;!r.done&&!u.done;){if(v(d.from,s.to)<=0&&0<=v(d.to,s.from))return!0;v(s.from,d.from)<0?s=(r=n.next(d.from)).value:d=(u=i.next(s.from)).value}return!1}function Qn(e){var t=Ca(e)?null:{s:0,n:e};return{next:function(n){for(var r=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,r)for(;t.n.l&&v(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!r||v(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function xa(e){var t,n,r,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=Y({},e),r=e[s],e.from=r.from,e.to=r.to,e[s]=r[s],n[s]=r[t],(e[t]=n).d=wa(n)),e.d=wa(e)}function wa(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Pn(e,t){return fe(t).forEach(function(n){e[n]?Ct(e[n],t[n]):e[n]=(function r(s){var i,u,d={};for(i in s)ae(s,i)&&(u=s[i],d[i]=!u||typeof u!="object"||be.has(u.constructor)?u:r(u));return d})(t[n])}),e}function Zn(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&ir(t[n],e[n])})}Qe(We.prototype,((je={add:function(e){return Ct(this,e),this},addKey:function(e){return En(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return En(t,n,n)}),this},hasKey:function(e){var t=Qn(this).next(e).value;return t&&v(t.from,e)<=0&&0<=v(t.to,e)}})[Nn]=function(){return Qn(this)},je));var Wt={},ka={},$a=!1;function ea(e){Pn(ka,e),$a||($a=!0,setTimeout(function(){$a=!1,Ba(ka,!(ka={}))},0))}function Ba(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var r=0,s=Object.values(Wt);r<s.length;r++)Ya(d=s[r],e,n,t);else for(var i in e){var u,d,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(u=i[1],i=i[2],d=Wt["idb://".concat(u,"/").concat(i)])&&Ya(d,e,n,t)}n.forEach(function(C){return C()})}function Ya(e,t,n,r){for(var s=[],i=0,u=Object.entries(e.queries.query);i<u.length;i++){for(var d=u[i],C=d[0],$=[],a=0,o=d[1];a<o.length;a++){var f=o[a];Zn(t,f.obsSet)?f.subscribers.forEach(function(k){return n.add(k)}):r&&$.push(f)}r&&s.push([C,$])}if(r)for(var h=0,m=s;h<m.length;h++){var b=m[h],C=b[0],$=b[1];e.queries.query[C]=$}}function Mn(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Pe(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var r=t.openCanceller,s=Math.round(10*e.verno),i=!1;function u(){if(t.openCanceller!==r)throw new G.DatabaseClosed("db.open() was cancelled")}function d(){return new L(function(f,h){if(u(),!n)throw new G.MissingAPI;var m=e.name,b=t.autoSchema||!s?n.open(m):n.open(m,s);if(!b)throw new G.MissingAPI;b.onerror=Fe(h),b.onblocked=we(e._fireOnBlocked),b.onupgradeneeded=we(function(k){var w;a=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=yt,a.abort(),b.result.close(),(w=n.deleteDatabase(m)).onsuccess=w.onerror=we(function(){h(new G.NoSuchDatabase("Database ".concat(m," doesnt exist")))})):(a.onerror=Fe(h),w=k.oldVersion>Math.pow(2,62)?0:k.oldVersion,o=w<1,e.idbdb=b.result,i&&Gn(e,a),xe(e,w/10,a,h))},h),b.onsuccess=we(function(){a=null;var k,w,x,_,M,A,I=e.idbdb=b.result,O=In(I.objectStoreNames);if(0<O.length)try{var R=I.transaction((M=O).length===1?M[0]:M,"readonly");if(t.autoSchema)A=I,_=R,(x=e).verno=A.version/10,_=x._dbSchema=Xn(0,A,_),x._storeNames=In(A.objectStoreNames,0),vn(x,[x._allTables],fe(_),_);else if(pt(e,e._dbSchema,R),w=R,((w=Wn(Xn(0,(k=e).idbdb,w),k._dbSchema)).add.length||w.change.some(function(j){return j.add.length||j.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),I.close(),s=I.version+1,i=!0,f(d());Ce(e,R)}catch{}pn.push(e),I.onversionchange=we(function(j){t.vcFired=!0,e.on("versionchange").fire(j)}),I.onclose=we(function(){e.close({disableAutoOpen:!1})}),o&&(O=e._deps,M=m,ba(A=O.indexedDB)||M===Un||ga(A,O.IDBKeyRange).put({name:M}).catch(he)),f()},h)}).catch(function(f){switch(f?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),d();break;case"VersionError":if(0<s)return s=0,d()}return L.reject(f)})}var C,$=t.dbReadyResolve,a=null,o=!1;return L.race([r,(typeof navigator>"u"?L.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(f){function h(){return indexedDB.databases().finally(f)}C=setInterval(h,100),h()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(d)]).then(function(){return u(),t.onReadyBeingFired=[],L.resolve(ya(function(){return e.on.ready.fire(e.vip)})).then(function f(){var h;if(0<t.onReadyBeingFired.length)return h=t.onReadyBeingFired.reduce(xn,he),t.onReadyBeingFired=[],L.resolve(ya(function(){return h(e.vip)})).then(f)})}).finally(function(){t.openCanceller===r&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(f){t.dbOpenError=f;try{a&&a.abort()}catch{}return r===t.openCanceller&&e._close(),Pe(f)}).finally(function(){t.openComplete=!0,$()}).then(function(){var f;return o&&(f={},e.tables.forEach(function(h){h.schema.indexes.forEach(function(m){m.name&&(f["idb://".concat(e.name,"/").concat(h.name,"/").concat(m.name)]=new We(-1/0,[[[]]]))}),f["idb://".concat(e.name,"/").concat(h.name,"/")]=f["idb://".concat(e.name,"/").concat(h.name,"/:dels")]=new We(-1/0,[[[]]])}),qe(ze).fire(f),Ba(f,!0)),e})}function Sa(e){function t(i){return e.next(i)}var n=s(t),r=s(function(i){return e.throw(i)});function s(i){return function(d){var d=i(d),C=d.value;return d.done?C:C&&typeof C.then=="function"?C.then(n,r):te(C)?Promise.all(C).then(n,r):n(C)}}return s(t)()}function On(e,t,n){for(var r=te(e)?e.slice():[e],s=0;s<n;++s)r.push(t);return r}var or={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Y(Y({},e),{table:function(r){var n=e.table(r),r=n.schema,s={},i=[];function u(f,h,m){var x=S(f),b=s[x]=s[x]||[],k=f==null?0:typeof f=="string"?1:f.length,w=0<h,x=Y(Y({},m),{name:w?"".concat(x,"(virtual-from:").concat(m.name,")"):m.name,lowLevelIndex:m,isVirtual:w,keyTail:h,keyLength:k,extractKey:Ut(f),unique:!w&&m.unique});return b.push(x),x.isPrimaryKey||i.push(x),1<k&&u(k===2?f[0]:f.slice(0,k-1),h+1,m),b.sort(function(_,M){return _.keyTail-M.keyTail}),x}var d=u(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[d];for(var C=0,$=r.indexes;C<$.length;C++){var a=$[C];u(a.keyPath,0,a)}function o(f){var h,m=f.query.index;return m.isVirtual?Y(Y({},f),{query:{index:m.lowLevelIndex,range:(h=f.query.range,m=m.keyTail,{type:h.type===1?2:h.type,lower:On(h.lower,h.lowerOpen?e.MAX_KEY:e.MIN_KEY,m),lowerOpen:!0,upper:On(h.upper,h.upperOpen?e.MIN_KEY:e.MAX_KEY,m),upperOpen:!0})}}):f}return Y(Y({},n),{schema:Y(Y({},r),{primaryKey:d,indexes:i,getIndexByKeyPath:function(f){return(f=s[S(f)])&&f[0]}}),count:function(f){return n.count(o(f))},query:function(f){return n.query(o(f))},openCursor:function(f){var h=f.query.index,m=h.keyTail,b=h.keyLength;return h.isVirtual?n.openCursor(o(f)).then(function(w){return w&&k(w)}):n.openCursor(f);function k(w){return Object.create(w,{continue:{value:function(x){x!=null?w.continue(On(x,f.reverse?e.MAX_KEY:e.MIN_KEY,m)):f.unique?w.continue(w.key.slice(0,b).concat(f.reverse?e.MIN_KEY:e.MAX_KEY,m)):w.continue()}},continuePrimaryKey:{value:function(x,_){w.continuePrimaryKey(On(x,e.MAX_KEY,m),_)}},primaryKey:{get:function(){return w.primaryKey}},key:{get:function(){var x=w.key;return b===1?x[0]:x.slice(0,b)}},value:{get:function(){return w.value}}})}}})}})}};function _a(e,t,n,r){return n=n||{},r=r||"",fe(e).forEach(function(s){var i,u,d;ae(t,s)?(i=e[s],u=t[s],typeof i=="object"&&typeof u=="object"&&i&&u?(d=ia(i))!==ia(u)?n[r+s]=t[s]:d==="Object"?_a(i,u,n,r+s+"."):i!==u&&(n[r+s]=t[s]):i!==u&&(n[r+s]=t[s])):n[r+s]=void 0}),fe(t).forEach(function(s){ae(e,s)||(n[r+s]=t[s])}),n}function et(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var ta={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Y(Y({},e),{table:function(t){var n=e.table(t),r=n.schema.primaryKey;return Y(Y({},n),{mutate:function(s){var i=z.trans,u=i.table(t).hook,d=u.deleting,C=u.creating,$=u.updating;switch(s.type){case"add":if(C.fire===he)break;return i._promise("readwrite",function(){return a(s)},!0);case"put":if(C.fire===he&&$.fire===he)break;return i._promise("readwrite",function(){return a(s)},!0);case"delete":if(d.fire===he)break;return i._promise("readwrite",function(){return a(s)},!0);case"deleteRange":if(d.fire===he)break;return i._promise("readwrite",function(){return(function o(f,h,m){return n.query({trans:f,values:!1,query:{index:r,range:h},limit:m}).then(function(b){var k=b.result;return a({type:"delete",keys:k,trans:f}).then(function(w){return 0<w.numFailures?Promise.reject(w.failures[0]):k.length<m?{failures:[],numFailures:0,lastResult:void 0}:o(f,Y(Y({},h),{lower:k[k.length-1],lowerOpen:!0}),m)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function a(o){var f,h,m,b=z.trans,k=o.keys||et(r,o);if(k)return(o=o.type==="add"||o.type==="put"?Y(Y({},o),{keys:k}):Y({},o)).type!=="delete"&&(o.values=ue([],o.values)),o.keys&&(o.keys=ue([],o.keys)),f=n,m=k,((h=o).type==="add"?Promise.resolve([]):f.getMany({trans:h.trans,keys:m,cache:"immutable"})).then(function(w){var x=k.map(function(_,M){var A,I,O,R=w[M],j={onerror:null,onsuccess:null};return o.type==="delete"?d.fire.call(j,_,R,b):o.type==="add"||R===void 0?(A=C.fire.call(j,_,o.values[M],b),_==null&&A!=null&&(o.keys[M]=_=A,r.outbound||nt(o.values[M],r.keyPath,_))):(A=_a(R,o.values[M]),(I=$.fire.call(j,A,_,R,b))&&(O=o.values[M],Object.keys(I).forEach(function(T){ae(O,T)?O[T]=I[T]:nt(O,T,I[T])}))),j});return n.mutate(o).then(function(_){for(var M=_.failures,A=_.results,I=_.numFailures,_=_.lastResult,O=0;O<k.length;++O){var R=(A||k)[O],j=x[O];R==null?j.onerror&&j.onerror(M[O]):j.onsuccess&&j.onsuccess(o.type==="put"&&w[O]?o.values[O]:R)}return{failures:M,results:A,numFailures:I,lastResult:_}}).catch(function(_){return x.forEach(function(M){return M.onerror&&M.onerror(_)}),Promise.reject(_)})});throw new Error("Keys missing")}}})}})}};function Je(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var r=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)v(t.keys[s],e[i])===0&&(r.push(n?Qt(t.values[s]):t.values[s]),++i);return r.length===e.length?r:null}catch{return null}}var lr={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return Y(Y({},n),{getMany:function(r){var s;return r.cache?(s=Je(r.keys,r.trans._cache,r.cache==="clone"))?L.resolve(s):n.getMany(r).then(function(i){return r.trans._cache={keys:r.keys,values:r.cache==="clone"?Qt(i):i},i}):n.getMany(r)},mutate:function(r){return r.type!=="add"&&(r.trans._cache=null),n.mutate(r)}})}}}};function Jt(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function gn(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ur={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new We(e.MIN_KEY,e.MAX_KEY);return Y(Y({},e),{transaction:function(r,s,i){if(z.subscr&&s!=="readonly")throw new G.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(z.querier));return e.transaction(r,s,i)},table:function(r){function s(k){var b,k=k.query;return[b=k.index,new We((b=(k=k.range).lower)!=null?b:e.MIN_KEY,(b=k.upper)!=null?b:e.MAX_KEY)]}var i=e.table(r),u=i.schema,d=u.primaryKey,C=u.indexes,$=d.extractKey,a=d.outbound,o=d.autoIncrement&&C.filter(function(m){return m.compound&&m.keyPath.includes(d.keyPath)}),f=Y(Y({},i),{mutate:function(m){function b(V){return V="idb://".concat(t,"/").concat(r,"/").concat(V),M[V]||(M[V]=new We)}var k,w,x,_=m.trans,M=m.mutatedParts||(m.mutatedParts={}),A=b(""),I=b(":dels"),O=m.type,j=m.type==="deleteRange"?[m.range]:m.type==="delete"?[m.keys]:m.values.length<50?[et(d,m).filter(function(V){return V}),m.values]:[],R=j[0],j=j[1],T=m.trans._cache;return te(R)?(A.addKeys(R),(O=O==="delete"||R.length===j.length?Je(R,T):null)||I.addKeys(R),(O||j)&&(k=b,w=O,x=j,u.indexes.forEach(function(V){var se=k(V.name||"");function le(ne){return ne!=null?V.extractKey(ne):null}function W(ne){V.multiEntry&&te(ne)?ne.forEach(function(ve){return se.addKey(ve)}):se.addKey(ne)}(w||x).forEach(function(ne,me){var xt=w&&le(w[me]),me=x&&le(x[me]);v(xt,me)!==0&&(xt!=null&&W(xt),me!=null)&&W(me)})}))):R?(j={from:(T=R.lower)!=null?T:e.MIN_KEY,to:(O=R.upper)!=null?O:e.MAX_KEY},I.add(j),A.add(j)):(A.add(n),I.add(n),u.indexes.forEach(function(V){return b(V.name).add(n)})),i.mutate(m).then(function(V){return!R||m.type!=="add"&&m.type!=="put"||(A.addKeys(V.results),o&&o.forEach(function(se){for(var le=m.values.map(function(xt){return se.extractKey(xt)}),W=se.keyPath.findIndex(function(xt){return xt===d.keyPath}),ne=0,ve=V.results.length;ne<ve;++ne)le[ne][W]=V.results[ne];b(se.name).addKeys(le)})),_.mutatedParts=Pn(_.mutatedParts||{},M),V})}}),h={get:function(m){return[d,new We(m.key)]},getMany:function(m){return[d,new We().addKeys(m.keys)]},count:s,query:s,openCursor:s};return fe(h).forEach(function(m){f[m]=function(b){var k=z.subscr,w=!!k,x=Jt(z,i)&&gn(m,b)?b.obsSet={}:k;if(w){var _,k=function(j){return j="idb://".concat(t,"/").concat(r,"/").concat(j),x[j]||(x[j]=new We)},M=k(""),A=k(":dels"),w=h[m](b),I=w[0],w=w[1];if((m==="query"&&I.isPrimaryKey&&!b.values?A:k(I.name||"")).add(w),!I.isPrimaryKey){if(m!=="count")return _=m==="query"&&a&&b.values&&i.query(Y(Y({},b),{values:!1})),i[m].apply(this,arguments).then(function(j){if(m==="query"){if(a&&b.values)return _.then(function(le){return le=le.result,M.addKeys(le),j});var T=b.values?j.result.map($):j.result;(b.values?M:A).addKeys(T)}else{var V,se;if(m==="openCursor")return se=b.values,(V=j)&&Object.create(V,{key:{get:function(){return A.addKey(V.primaryKey),V.key}},primaryKey:{get:function(){var le=V.primaryKey;return A.addKey(le),le}},value:{get:function(){return se&&M.addKey(V.primaryKey),V.value}}})}return j});A.add(n)}}return i[m].apply(this,arguments)}}),f}})}};function za(e,t,n){var r;return n.numFailures===0?t:t.type==="deleteRange"||(r=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===r)?null:(r=Y({},t),te(r.keys)&&(r.keys=r.keys.filter(function(s,i){return!(i in n.failures)})),"values"in r&&te(r.values)&&(r.values=r.values.filter(function(s,i){return!(i in n.failures)})),r)}function Tn(e,t){return n=e,((r=t).lower===void 0||(r.lowerOpen?0<v(n,r.lower):0<=v(n,r.lower)))&&(n=e,(r=t).upper===void 0||(r.upperOpen?v(n,r.upper)<0:v(n,r.upper)<=0));var n,r}function Ea(e,t,n,r,s,i){var u,d,C,$,a,o;return!n||n.length===0||(u=t.query.index,d=u.multiEntry,C=t.query.range,$=r.schema.primaryKey.extractKey,a=u.extractKey,o=(u.lowLevelIndex||u).extractKey,(r=n.reduce(function(f,h){var m=f,b=[];if(h.type==="add"||h.type==="put")for(var k=new We,w=h.values.length-1;0<=w;--w){var x,_=h.values[w],M=$(_);!k.hasKey(M)&&(x=a(_),d&&te(x)?x.some(function(j){return Tn(j,C)}):Tn(x,C))&&(k.addKey(M),b.push(_))}switch(h.type){case"add":var A=new We().addKeys(t.values?f.map(function(T){return $(T)}):f),m=f.concat(t.values?b.filter(function(T){return T=$(T),!A.hasKey(T)&&(A.addKey(T),!0)}):b.map(function(T){return $(T)}).filter(function(T){return!A.hasKey(T)&&(A.addKey(T),!0)}));break;case"put":var I=new We().addKeys(h.values.map(function(T){return $(T)}));m=f.filter(function(T){return!I.hasKey(t.values?$(T):T)}).concat(t.values?b:b.map(function(T){return $(T)}));break;case"delete":var O=new We().addKeys(h.keys);m=f.filter(function(T){return!O.hasKey(t.values?$(T):T)});break;case"deleteRange":var R=h.range;m=f.filter(function(T){return!Tn($(T),R)})}return m},e))===e)?e:(r.sort(function(f,h){return v(o(f),o(h))||v($(f),$(h))}),t.limit&&t.limit<1/0&&(r.length>t.limit?r.length=t.limit:e.length===t.limit&&r.length<t.limit&&(s.dirty=!0)),i?Object.freeze(r):r)}function Pa(e,t){return v(e.lower,t.lower)===0&&v(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Ua(e,t){return((n,r,s,i)=>{if(n===void 0)return r!==void 0?-1:0;if(r===void 0)return 1;if((n=v(n,r))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,r,s,i)=>{if(n===void 0)return r!==void 0?1:0;if(r===void 0)return-1;if((n=v(n,r))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function cr(e,t,n,r){e.subscribers.add(n),r.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&jt(i,s)},3e3))})}var it={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Y(Y({},e),{transaction:function(n,r,s){var i,u,d=e.transaction(n,r,s);return r==="readwrite"&&(s=(i=new AbortController).signal,d.addEventListener("abort",(u=function(C){return function(){if(i.abort(),r==="readwrite"){for(var $=new Set,a=0,o=n;a<o.length;a++){var f=o[a],h=Wt["idb://".concat(t,"/").concat(f)];if(h){var m=e.table(f),b=h.optimisticOps.filter(function(V){return V.trans===d});if(d._explicit&&C&&d.mutatedParts)for(var k=0,w=Object.values(h.queries.query);k<w.length;k++)for(var x=0,_=(I=w[k]).slice();x<_.length;x++)Zn((O=_[x]).obsSet,d.mutatedParts)&&(jt(I,O),O.subscribers.forEach(function(V){return $.add(V)}));else if(0<b.length){h.optimisticOps=h.optimisticOps.filter(function(V){return V.trans!==d});for(var M=0,A=Object.values(h.queries.query);M<A.length;M++)for(var I,O,R,j=0,T=(I=A[M]).slice();j<T.length;j++)(O=T[j]).res!=null&&d.mutatedParts&&(C&&!O.dirty?(R=Object.isFrozen(O.res),R=Ea(O.res,O.req,b,m,O,R),O.dirty?(jt(I,O),O.subscribers.forEach(function(V){return $.add(V)})):R!==O.res&&(O.res=R,O.promise=L.resolve({result:R}))):(O.dirty&&jt(I,O),O.subscribers.forEach(function(V){return $.add(V)})))}}}$.forEach(function(V){return V()})}}})(!1),{signal:s}),d.addEventListener("error",u(!1),{signal:s}),d.addEventListener("complete",u(!0),{signal:s})),d},table:function(n){var r=e.table(n),s=r.schema.primaryKey;return Y(Y({},r),{mutate:function(i){var u,d=z.trans;return!s.outbound&&d.db._options.cache!=="disabled"&&!d.explicit&&d.idbtrans.mode==="readwrite"&&(u=Wt["idb://".concat(t,"/").concat(n)])?(d=r.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||et(s,i).some(function(C){return C==null}))?(u.optimisticOps.push(i),i.mutatedParts&&ea(i.mutatedParts),d.then(function(C){0<C.numFailures&&(jt(u.optimisticOps,i),(C=za(0,i,C))&&u.optimisticOps.push(C),i.mutatedParts)&&ea(i.mutatedParts)}),d.catch(function(){jt(u.optimisticOps,i),i.mutatedParts&&ea(i.mutatedParts)})):d.then(function(C){var $=za(0,Y(Y({},i),{values:i.values.map(function(a,o){var f;return C.failures[o]?a:(nt(f=(f=s.keyPath)!=null&&f.includes(".")?Qt(a):Y({},a),s.keyPath,C.results[o]),f)})}),C);u.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&ea(i.mutatedParts)})}),d):r.mutate(i)},query:function(i){var u,d,C,$,a,o,f;return Jt(z,r)&&gn("query",i)?(u=((C=z.trans)==null?void 0:C.db._options.cache)==="immutable",d=(C=z).requery,C=C.signal,o=((h,m,b,k)=>{var w=Wt["idb://".concat(h,"/").concat(m)];if(!w)return[];if(!(h=w.queries[b]))return[null,!1,w,null];var x=h[(k.query?k.query.index.name:null)||""];if(!x)return[null,!1,w,null];switch(b){case"query":var _=x.find(function(M){return M.req.limit===k.limit&&M.req.values===k.values&&Pa(M.req.query.range,k.query.range)});return _?[_,!0,w,x]:[x.find(function(M){return("limit"in M.req?M.req.limit:1/0)>=k.limit&&(!k.values||M.req.values)&&Ua(M.req.query.range,k.query.range)}),!1,w,x];case"count":return _=x.find(function(M){return Pa(M.req.query.range,k.query.range)}),[_,!!_,w,x]}})(t,n,"query",i),f=o[0],$=o[2],a=o[3],f&&o[1]?f.obsSet=i.obsSet:(o=r.query(i).then(function(h){var m=h.result;if(f&&(f.res=m),u){for(var b=0,k=m.length;b<k;++b)Object.freeze(m[b]);Object.freeze(m)}else h.result=Qt(m);return h}).catch(function(h){return a&&f&&jt(a,f),Promise.reject(h)}),f={obsSet:i.obsSet,promise:o,subscribers:new Set,type:"query",req:i,dirty:!1},a?a.push(f):(a=[f],($=$||(Wt["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=a)),cr(f,a,d,C),f.promise.then(function(h){return{result:Ea(h.result,i,$?.optimisticOps,r,f,u)}})):r.query(i)}})}})}};function na(e,t){return new Proxy(e,{get:function(n,r,s){return r==="db"?t:Reflect.get(n,r,s)}})}Oe.prototype.version=function(e){if(isNaN(e)||e<.1)throw new G.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new G.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(r){return r._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(va),n.stores({}),this._state.autoSchema=!1),n},Oe.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||z.letThrough||this._vip)?e():new L(function(n,r){if(t._state.openComplete)return r(new G.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void r(new G.DatabaseClosed);t.open().catch(he)}t._state.dbReadyPromise.then(n,r)}).then(e)},Oe.prototype.use=function(s){var t=s.stack,n=s.create,r=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:r??10,name:s}),i.sort(function(u,d){return u.level-d.level}),this},Oe.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return r?s.create!==r:!!n&&s.name!==n})),this},Oe.prototype.open=function(){var e=this;return en(Ft,function(){return Mn(e)})},Oe.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=pn.indexOf(this);if(0<=t&&pn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new L(function(n){e.dbReadyResolve=n}),e.openCanceller=new L(function(n,r){e.cancelOpen=r}))},Oe.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new G.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new G.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Oe.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),r=this._state;return new L(function(s,i){function u(){t.close(e);var d=t._deps.indexedDB.deleteDatabase(t.name);d.onsuccess=we(function(){var C,$,a;C=t._deps,$=t.name,ba(a=C.indexedDB)||$===Un||ga(a,C.IDBKeyRange).delete($).catch(he),s()}),d.onerror=Fe(i),d.onblocked=t._fireOnBlocked}if(n)throw new G.InvalidArgument("Invalid closeOptions argument to db.delete()");r.isBeingOpened?r.dbReadyPromise.then(u):u()})},Oe.prototype.backendDB=function(){return this.idbdb},Oe.prototype.isOpen=function(){return this.idbdb!==null},Oe.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Oe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Oe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Oe.prototype,"tables",{get:function(){var e=this;return fe(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Oe.prototype.transaction=function(){var e=(function(t,n,r){var s=arguments.length;if(s<2)throw new G.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return r=i.pop(),[t,lt(i),r]}).apply(this,arguments);return this._transaction.apply(this,e)},Oe.prototype._transaction=function(e,t,n){var r,s,i=this,u=z.trans,d=(u&&u.db===this&&e.indexOf("!")===-1||(u=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===Z)r=Z;else{if(e!="rw"&&e!=pa)throw new G.InvalidArgument("Invalid transaction mode: "+e);r=pa}if(u){if(u.mode===Z&&r===pa){if(!d)throw new G.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");u=null}u&&s.forEach(function($){if(u&&u.storeNames.indexOf($)===-1){if(!d)throw new G.SubTransaction("Table "+$+" not included in parent transaction.");u=null}}),d&&u&&!u.active&&(u=null)}}catch($){return u?u._promise(null,function(a,o){o($)}):Pe($)}var C=(function $(a,o,f,h,m){return L.resolve().then(function(){var x=z.transless||z,b=a._createTransaction(o,f,a._dbSchema,h),x=(b.explicit=!0,{trans:b,transless:x});if(h)b.idbtrans=h.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,a._state.PR1398_maxLoop=3}catch(_){return _.name===la.InvalidState&&a.isOpen()&&0<--a._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),a.close({disableAutoOpen:!1}),a.open().then(function(){return $(a,o,f,null,m)})):Pe(_)}var k,w=oa(m),x=(w&&hn(),L.follow(function(){var _;(k=m.call(b,b))&&(w?(_=gt.bind(null,null),k.then(_,_)):typeof k.next=="function"&&typeof k.throw=="function"&&(k=Sa(k)))},x));return(k&&typeof k.then=="function"?L.resolve(k).then(function(_){return b.active?_:Pe(new G.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):x.then(function(){return k})).then(function(_){return h&&b._resolve(),b._completion.then(function(){return _})}).catch(function(_){return b._reject(_),Pe(_)})})}).bind(null,this,r,s,u,n);return u?u._promise(r,C,"lock"):z.trans?en(z.transless,function(){return i._whenReady(C)}):this._whenReady(C)},Oe.prototype.table=function(e){if(ae(this._allTables,e))return this._allTables[e];throw new G.InvalidTable("Table ".concat(e," does not exist"))};var Tt=Oe;function Oe(e,t){var n,r,s,i,u,d=this,C=(this._middlewares={},this.verno=0,Oe.dependencies),C=(this._options=t=Y({addons:Oe.addons,autoOpen:!0,indexedDB:C.indexedDB,IDBKeyRange:C.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:he,dbReadyPromise:null,cancelOpen:he,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),a=($.dbReadyPromise=new L(function(o){$.dbReadyResolve=o}),$.openCanceller=new L(function(o,f){$.cancelOpen=f}),this._state=$,this.name=e,this.on=ke(this,"populate","blocked","versionchange","close",{ready:[xn,he]}),this.once=function(o,f){var h=function(){for(var m=[],b=0;b<arguments.length;b++)m[b]=arguments[b];d.on(o).unsubscribe(h),f.apply(d,m)};return d.on(o,h)},this.on.ready.subscribe=Oa(this.on.ready.subscribe,function(o){return function(f,h){Oe.vip(function(){var m,b=d._state;b.openComplete?(b.dbOpenError||L.resolve().then(f),h&&o(f)):b.onReadyBeingFired?(b.onReadyBeingFired.push(f),h&&o(f)):(o(f),m=d,h||o(function k(){m.on.ready.unsubscribe(f),m.on.ready.unsubscribe(k)}))})}}),this.Collection=(n=this,Ve(K.prototype,function(k,b){this.db=n;var h=c,m=null;if(b)try{h=b()}catch(x){m=x}var b=k._ctx,k=b.table,w=k.hook.reading.fire;this._ctx={table:k,index:b.index,isPrimKey:!b.index||k.schema.primKey.keyPath&&b.index===k.schema.primKey.name,range:h,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:m,or:b.or,valueMapper:w!==Rt?w:null}})),this.Table=(r=this,Ve(X.prototype,function(o,f,h){this.db=r,this._tx=h,this.name=o,this.schema=f,this.hook=r._allTables[o]?r._allTables[o].hook:ke(null,{creating:[Kn,he],reading:[Ne,Rt],updating:[er,he],deleting:[qn,he]})})),this.Transaction=(s=this,Ve(Sn.prototype,function(o,f,h,m,b){var k=this;o!=="readonly"&&f.forEach(function(w){w=(w=h[w])==null?void 0:w.yProps,w&&(f=f.concat(w.map(function(x){return x.updatesTable})))}),this.db=s,this.mode=o,this.storeNames=f,this.schema=h,this.chromeTransactionDurability=m,this.idbtrans=null,this.on=ke(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new L(function(w,x){k._resolve=w,k._reject=x}),this._completion.then(function(){k.active=!1,k.on.complete.fire()},function(w){var x=k.active;return k.active=!1,k.on.error.fire(w),k.parent?k.parent._reject(w):x&&k.idbtrans&&k.idbtrans.abort(),Pe(w)})})),this.Version=(i=this,Ve(sr.prototype,function(o){this.db=i,this._cfg={version:o,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(u=this,Ve(Ye.prototype,function(o,f,h){if(this.db=u,this._ctx={table:o,index:f===":id"?null:f,or:h},this._cmp=this._ascending=v,this._descending=function(m,b){return v(b,m)},this._max=function(m,b){return 0<v(m,b)?m:b},this._min=function(m,b){return v(m,b)<0?m:b},this._IDBKeyRange=u._deps.IDBKeyRange,!this._IDBKeyRange)throw new G.MissingAPI})),this.on("versionchange",function(o){0<o.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(o){!o.newVersion||o.newVersion<o.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(o.oldVersion/10))}),this._maxKey=$e(t.IDBKeyRange),this._createTransaction=function(o,f,h,m){return new d.Transaction(o,f,h,d._options.chromeTransactionDurability,m)},this._fireOnBlocked=function(o){d.on("blocked").fire(o),pn.filter(function(f){return f.name===d.name&&f!==d&&!f._state.vcFired}).map(function(f){return f.on("versionchange").fire(o)})},this.use(lr),this.use(it),this.use(ur),this.use(or),this.use(ta),new Proxy(this,{get:function(o,f,h){var m;return f==="_vip"||(f==="table"?function(b){return na(d.table(b),a)}:(m=Reflect.get(o,f,h))instanceof X?na(m,a):f==="tables"?m.map(function(b){return na(b,a)}):f==="_createTransaction"?function(){return na(m.apply(this,arguments),a)}:m)}}));this.vip=a,C.forEach(function(o){return o(d)})}var aa,bn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",tn=(Nt.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Nt.prototype[bn]=function(){return this},Nt);function Nt(e){this._subscribe=e}try{aa={indexedDB:ee.indexedDB||ee.mozIndexedDB||ee.webkitIndexedDB||ee.msIndexedDB,IDBKeyRange:ee.IDBKeyRange||ee.webkitIDBKeyRange}}catch{aa={indexedDB:null,IDBKeyRange:null}}function Ga(e){var t,n=!1,r=new tn(function(s){var i=oa(e),u,d=!1,C={},$={},a={get closed(){return d},unsubscribe:function(){d||(d=!0,u&&u.abort(),o&&qe.storagemutated.unsubscribe(h))}},o=(s.start&&s.start(a),!1),f=function(){return zn(m)},h=function(b){Pn(C,b),Zn($,C)&&f()},m=function(){var b,k,w;!d&&aa.indexedDB&&(C={},b={},u&&u.abort(),u=new AbortController,w=(x=>{var _=dn();try{i&&hn();var M=Vt(e,x);return M=i?M.finally(gt):M}finally{_&&fn()}})(k={subscr:b,signal:u.signal,requery:f,querier:e,trans:null}),Promise.resolve(w).then(function(x){n=!0,t=x,d||k.signal.aborted||(C={},(_=>{for(var M in _)if(ae(_,M))return;return 1})($=b)||o||(qe(ze,h),o=!0),zn(function(){return!d&&s.next&&s.next(x)}))},function(x){n=!1,["DatabaseClosedError","AbortError"].includes(x?.name)||d||zn(function(){d||s.error&&s.error(x)})}))};return setTimeout(f,0),a});return r.hasValue=function(){return n},r.getValue=function(){return t},r}var nn=Tt;function An(e){var t=Kt;try{Kt=!0,qe.storagemutated.fire(e),Ba(e,!0)}finally{Kt=t}}Qe(nn,Y(Y({},Et),{delete:function(e){return new nn(e,{addons:[]}).delete()},exists:function(e){return new nn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=nn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(ba(n)?Promise.resolve(n.databases()).then(function(r){return r.map(function(s){return s.name}).filter(function(s){return s!==Un})}):ga(n,t).toCollection().primaryKeys()).then(e)}catch{return Pe(new G.MissingAPI)}var t,n},defineClass:function(){return function(e){ce(this,e)}},ignoreTransaction:function(e){return z.trans?en(z.transless,e):e()},vip:ya,async:function(e){return function(){try{var t=Sa(e.apply(this,arguments));return t&&typeof t.then=="function"?t:L.resolve(t)}catch(n){return Pe(n)}}},spawn:function(e,t,n){try{var r=Sa(e.apply(n,t||[]));return r&&typeof r.then=="function"?r:L.resolve(r)}catch(s){return Pe(s)}},currentTransaction:{get:function(){return z.trans||null}},waitFor:function(e,t){return e=L.resolve(typeof e=="function"?nn.ignoreTransaction(e):e).timeout(t||6e4),z.trans?z.trans.waitFor(e):e},Promise:L,debug:{get:function(){return mt},set:function(e){Ia(e)}},derive:Bt,extend:ce,props:Qe,override:Oa,Events:ke,on:qe,liveQuery:Ga,extendObservabilitySet:Pn,getByKeyPath:St,setByKeyPath:nt,delByKeyPath:function(e,t){typeof t=="string"?nt(e,t,void 0):"length"in t&&[].map.call(t,function(n){nt(e,n,void 0)})},shallowClone:At,deepClone:Qt,getObjectDiff:_a,cmp:v,asap:Ta,minKey:-1/0,addons:[],connections:pn,errnames:la,dependencies:aa,cache:Wt,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),nn.maxKey=$e(nn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(qe(ze,function(e){Kt||(e=new CustomEvent(ht,{detail:e}),Kt=!0,dispatchEvent(e),Kt=!1)}),addEventListener(ht,function(e){e=e.detail,Kt||An(e)}));var an,Kt=!1,Ma=function(){};return typeof BroadcastChannel<"u"&&((Ma=function(){(an=new BroadcastChannel(ht)).onmessage=function(e){return e.data&&An(e.data)}})(),typeof an.unref=="function"&&an.unref(),qe(ze,function(e){Kt||an.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Tt.disableBfCache&&e.persisted){mt&&console.debug("Dexie: handling persisted pagehide"),an?.close();for(var t=0,n=pn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Tt.disableBfCache&&e.persisted&&(mt&&console.debug("Dexie: handling persisted pageshow"),Ma(),An({all:new We(-1/0,[[]])}))})),L.rejectionMapper=function(e,t){return!e||e instanceof on||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Cn[e.name]?e:(t=new Cn[e.name](t||e.message,e),"stack"in e&&ot(t,"stack",{get:function(){return this.inner.stack}}),t)},Ia(mt),Y(Tt,Object.freeze({__proto__:null,Dexie:Tt,Entity:p,PropModification:N,RangeSet:We,add:function(e){return new N({add:e})},cmp:v,default:Tt,liveQuery:Ga,mergeRanges:Ct,rangesOverlap:ir,remove:function(e){return new N({remove:e})},replacePrefix:function(e,t){return new N({replacePrefix:[e,t]})}}),{default:Tt}),Tt})})(Wa)),Wa.exports}var Dr=Fr();const dr=Tr(Dr),xr=Symbol.for("Dexie"),Ja=globalThis[xr]||(globalThis[xr]=dr);if(dr.semVer!==Ja.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${dr.semVer} and ${Ja.semVer}`);const{liveQuery:Gr,mergeRanges:Wr,rangesOverlap:Jr,RangeSet:Hr,cmp:Xr,Entity:Qr,PropModification:Zr,replacePrefix:es,add:ts,remove:ns,DexieYProvider:as}=Ja,tt=new Ja("haushaltsbuch-db");tt.version(1).stores({years:"year",fixedTemplateState:"id"});tt.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const ra="singleton";function Ha(){return new Date().toISOString()}async function Dn(){return tt.years.orderBy("year").toArray()}async function Ir(E){return tt.years.get(E)}async function Fn(E){await tt.years.put(E)}async function fr(){const E=await tt.fixedTemplateState.get(ra);if(!E){const g={id:ra,templates:[],version:Ha(),updatedAt:new Date().toISOString()};return await tt.fixedTemplateState.put(g),{templates:[],version:g.version}}return{templates:E.templates,version:E.version}}async function hr(E){const g=Ha();return await tt.fixedTemplateState.put({id:ra,templates:E,version:g,updatedAt:new Date().toISOString()}),g}async function pr(){const E=await tt.annualVariableFixedTemplateState.get(ra);if(!E){const g={id:ra,templates:[],version:Ha(),updatedAt:new Date().toISOString()};return await tt.annualVariableFixedTemplateState.put(g),{templates:[],version:g.version}}return{templates:E.templates,version:E.version}}async function vr(E){const g=Ha();return await tt.annualVariableFixedTemplateState.put({id:ra,templates:E,version:g,updatedAt:new Date().toISOString()}),g}async function Nr(){const E=await Dn(),[g,Se]=await Promise.all([fr(),pr()]);return{exportedAt:new Date().toISOString(),years:E,fixedTemplates:g.templates,annualVariableFixedTemplates:Se.templates}}async function Kr(E){await tt.transaction("rw",[tt.years,tt.fixedTemplateState,tt.annualVariableFixedTemplateState],async()=>{await tt.years.clear(),await tt.years.bulkPut(E.years),await hr(E.fixedTemplates),await vr(E.annualVariableFixedTemplates??[])})}function Ee(E){const g=E.replace(",",".").trim();if(!g)return 0;const Se=Number.parseFloat(g);return Number.isNaN(Se)?0:Math.round(Se*100)}const qr=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function B(E){return qr.format(E/100)}function vt(E){return(E/100).toFixed(2)}function Be(E){return new Date(2026,E-1,1).toLocaleDateString("de-DE",{month:"long"})}const $r=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function wr(E){return $r.includes(E)}function Lr(E){switch(E){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}function jr(E){const g={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Se="habu-theme",Y="habu-backup-dirty",ue="habu-unexported-change-log",ee="habu-last-backup-filename",fe="habu-recurring-budget-defaults";let te=null,ce=null,He=null,Xe=!1,ae=!1;const Qe=new WeakMap;function Ze(){const l=E.querySelectorAll("[data-budget-vs-canvas]");if(l.length===0)return;const c=getComputedStyle(document.documentElement),y=c.getPropertyValue("--text-main").trim(),p=c.getPropertyValue("--text-muted").trim(),v=c.getPropertyValue("--table-stripe").trim(),P=c.getPropertyValue("--table-border").trim(),F=c.getPropertyValue("--budget-under").trim(),q=c.getPropertyValue("--danger-2").trim(),N=96,J=250,U=X=>1-Math.pow(1-Math.max(0,Math.min(1,X)),3);l.forEach(X=>{X.dataset.hoverBound!=="1"&&(X.dataset.hoverBound="1",X.addEventListener("mouseenter",()=>{X.dataset.hovering="1",Ze()}),X.addEventListener("mouseleave",()=>{delete X.dataset.hovering,delete X.dataset.hoverX,Ze()}),X.addEventListener("mousemove",oe=>{const pe=X.getBoundingClientRect(),_e=Math.round(oe.clientX-pe.left);X.dataset.hoverX=String(_e),Ze()}));const H=Number.parseInt(X.dataset.budgetCents??"0",10),ke=Number.parseInt(X.dataset.actualCents??"0",10),Ve=X.dataset.label??"Kategorie",Me=X.dataset.hovering==="1",de=`${Ve}|${H}|${ke}`,ct=X.dataset.lastRenderSignature!==de;X.dataset.lastRenderSignature=de;const De=Math.max(120,Math.floor(X.clientWidth||120)),rt=window.devicePixelRatio||1,bt=Math.floor(De*rt),dt=Math.floor(N*rt);(X.width!==bt||X.height!==dt)&&(X.width=bt,X.height=dt);const K=X.getContext("2d");if(!K)return;const Q=Math.max(1,H,ke),Ot=Math.min(1,Math.max(0,H/Q)),wt=Math.min(1,Math.max(0,ke/Q)),st=H-ke,ye=H>0?ke/H*100:ke>0?100:0,Ge=8,ge=Ge,Ae=34,ft=De-Ge*2,Ye=22,ie=Number.parseInt(X.dataset.hoverX??"-1",10),Fe=(oe,pe,_e,Ie,$e)=>{K.beginPath(),K.moveTo(oe+$e,pe),K.lineTo(oe+_e-$e,pe),K.quadraticCurveTo(oe+_e,pe,oe+_e,pe+$e),K.lineTo(oe+_e,pe+Ie-$e),K.quadraticCurveTo(oe+_e,pe+Ie,oe+_e-$e,pe+Ie),K.lineTo(oe+$e,pe+Ie),K.quadraticCurveTo(oe,pe+Ie,oe,pe+Ie-$e),K.lineTo(oe,pe+$e),K.quadraticCurveTo(oe,pe,oe+$e,pe),K.closePath()},yt=oe=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,X.width,X.height),K.scale(rt,rt),Fe(ge,Ae,ft,Ye,8),K.fillStyle=v,K.fill(),K.strokeStyle=P,K.lineWidth=1,K.stroke();const pe=[.6,.25,.15],_e=[.1,.16,.24];let Ie=0;pe.forEach((S,D)=>{const Le=ft*S;K.save(),K.globalAlpha=_e[D]??.1,K.fillStyle=p,K.fillRect(ge+Ie,Ae,Le,Ye),K.restore(),Ie+=Le});const $e=H>0&&ke>H?q:F,Ut=ft*wt*oe;Fe(ge,Ae+3,Ut,Ye-6,6),K.fillStyle=$e,K.fill(),Me&&(K.save(),K.strokeStyle=$e,K.lineWidth=1.5,K.globalAlpha=.8,Fe(ge-1,Ae+2,Math.max(2,Ut+2),Ye-4,7),K.stroke(),K.restore());const kt=ge+ft*Ot;K.strokeStyle=y,K.lineWidth=Me?3:2,K.beginPath(),K.moveTo(kt,Ae-3),K.lineTo(kt,Ae+Ye+3),K.stroke(),Me&&ie>=ge&&ie<=ge+ft&&(K.save(),K.strokeStyle=y,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(ie,Ae-8),K.lineTo(ie,Ae+Ye+8),K.stroke(),K.restore()),K.fillStyle=y,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(Ve,ge,10);const _n=ye*oe;if(K.fillStyle=ye>100?q:ye<100?F:p,K.textAlign="right",K.fillText(`${_n.toFixed(0)}%`,ge+ft,10),K.fillStyle=p,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${B(ke)} · Ziel ${B(H)} · Δ ${st>=0?"+":""}${B(st)}`,ge,64),Me){const S=`Nutzung ${ye.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const D=8,Le=5,Ce=22,Gt=K.measureText(S).width+D*2,va=Number.isFinite(ie)?ie-Gt/2:ge+ft-Gt,xe=Math.min(ge+ft-Gt,Math.max(ge,va)),Gn=Ae-Ce-8;K.save(),K.fillStyle=y,K.globalAlpha=.92,Fe(xe,Gn,Gt,Ce,6),K.fill(),K.restore(),K.fillStyle=v,K.textAlign="left",K.textBaseline="top",K.fillText(S,xe+D,Gn+Le)}},ze=Qe.get(X);if(ze&&window.cancelAnimationFrame(ze),!ct){yt(1);return}const ht=performance.now(),qe=oe=>{const pe=oe-ht,_e=Math.min(1,pe/J);if(yt(U(_e)),_e<1){const Ie=window.requestAnimationFrame(qe);Qe.set(X,Ie);return}Qe.delete(X)},Sn=window.requestAnimationFrame(qe);Qe.set(X,Sn)})}function ot(l){if(l==="dashboard"){const c=g.years.slice().sort((p,v)=>v.year-p.year);c.some(p=>p.year===g.dashboardYear)||(g.dashboardYear=g.selectedYear??c[0]?.year??null)}g.topModal=l,Z()}function Bt(){g.topModal&&(g.topModal=null,Z())}function Xa(){g.showUnexportedChangeLogModal=!0,Z()}function sa(){g.showUnexportedChangeLogModal&&(g.showUnexportedChangeLogModal=!1,Z())}function In(){Xe||(Xe=!0,window.addEventListener("keydown",l=>{if(l.key==="Escape"){if(g.showUnexportedChangeLogModal){l.preventDefault(),sa();return}g.topModal&&(l.preventDefault(),Bt())}}))}function Oa(){const l=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(l<=0)return!1;const c=l/6;return window.scrollY>c}function rn(){const l=E.querySelector("#scroll-up-btn");l&&l.classList.toggle("is-visible",Oa())}function Ta(){if(ae)return;ae=!0;const l=()=>{rn(),Ze()};window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l)}function St(){if(te&&document.body.contains(te))return te;const l=document.getElementById("toast-root");if(l instanceof HTMLDivElement)return te=l,l;const c=document.createElement("div");return c.id="toast-root",c.className="toast-root",c.setAttribute("aria-live","polite"),c.setAttribute("aria-atomic","true"),document.body.appendChild(c),te=c,c}function nt(){if(ce&&document.body.contains(ce))return ce;const l=document.getElementById("amount-modal-root");if(l instanceof HTMLDivElement)return ce=l,l;const c=document.createElement("div");return c.id="amount-modal-root",document.body.appendChild(c),ce=c,c}function At(){if(!ce){He=null;return}ce.innerHTML="",He=null}function Aa(l,c){let y=l;const p=c.min;if(p){const P=Number.parseFloat(p);if(!Number.isNaN(P)){const F=Math.round(P*100);y=Math.max(y,F)}}const v=c.max;if(v){const P=Number.parseFloat(v);if(!Number.isNaN(P)){const F=Math.round(P*100);y=Math.min(y,F)}}return y}function lt(l){if(l.disabled)return;const c=nt();At(),He=l;const y=Ee(l.value||"0"),p="Betrag anpassen";c.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${p}">
        <div class="amount-modal card">
          <h3>${p}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${B(y)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${B(y)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${B(y)} €</strong></div>
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
    `;const v=c.querySelector(".amount-modal-backdrop"),P=c.querySelector("#amount-modal-delta"),F=c.querySelector("#amount-modal-next-delta"),q=c.querySelector("#amount-modal-next-overwrite"),N=c.querySelector("#amount-modal-cancel"),J=c.querySelector("#amount-modal-overwrite"),U=c.querySelector("#amount-modal-apply");function X(){const de=Ee(P?.value??"0");return Aa(y+de,l)}function H(){const de=Ee(P?.value??"0");return Aa(de,l)}function ke(){F&&(F.textContent=`${B(X())} €`),q&&(q.textContent=`${B(H())} €`)}function Ve(){const de=He;if(!de){At();return}const ct=X();At(),de.value=vt(ct),de.dispatchEvent(new Event("change",{bubbles:!0}))}function Me(){const de=He;if(!de){At();return}const ct=H();At(),de.value=vt(ct),de.dispatchEvent(new Event("change",{bubbles:!0}))}N?.addEventListener("click",()=>{At()}),J?.addEventListener("click",()=>{Me()}),U?.addEventListener("click",()=>{Ve()}),P?.addEventListener("input",()=>{ke()}),P?.addEventListener("keydown",de=>{if(de.key==="Escape"){de.preventDefault(),At();return}de.key==="Enter"&&(de.preventDefault(),Ve())}),v?.addEventListener("click",de=>{de.target===v&&At()}),window.setTimeout(()=>{P?.focus(),P?.select(),ke()},0)}function be(l,c="success"){const y=St(),p=document.createElement("div");p.className=`toast toast-${c}`,p.textContent=l,y.appendChild(p),requestAnimationFrame(()=>{p.classList.add("toast-visible")});const v=c==="error"?5e3:3e3;window.setTimeout(()=>{p.classList.remove("toast-visible"),window.setTimeout(()=>{p.remove()},220)},v)}function Lt(){return new Date().getMonth()+1}function Qt(){return new Date().getFullYear()}function Fa(l){const c=Qt(),y=l.find(p=>p.year===c);return y?y.year:l[0]?.year??null}function ia(){return new Date().toISOString().slice(0,10)}function Nn(l){return l.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Qa(){const l=localStorage.getItem(Se);return l&&wr(l)?l:"light"}function jt(l){g.theme=l,document.documentElement.setAttribute("data-theme",l),localStorage.setItem(Se,l)}function sn(){return localStorage.getItem(Y)==="1"}function _t(l){localStorage.setItem(Y,l?"1":"0")}function oa(){const l=localStorage.getItem(ue);if(!l)return[];try{const c=JSON.parse(l);return Array.isArray(c)?c.filter(y=>{if(!y||typeof y!="object")return!1;const p=y;return typeof p.id=="string"&&typeof p.timestampIso=="string"&&typeof p.message=="string"}).slice(-200):[]}catch{return[]}}function Et(l){localStorage.setItem(ue,JSON.stringify(l.slice(-200)))}function Za(){const l=localStorage.getItem(ee);if(!l)return null;const c=l.trim();return c||null}function on(){const l={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},c=localStorage.getItem(fe);if(!c)return l;try{const y=JSON.parse(c),p=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:p(y.foodBudgetCents),goingOutBudgetCents:p(y.goingOutBudgetCents),fixedBudgetCents:p(y.fixedBudgetCents),variableBudgetCents:p(y.variableBudgetCents),miscBudgetCents:p(y.miscBudgetCents)}}catch{return l}}function Da(l){localStorage.setItem(fe,JSON.stringify(l))}function yn(l){l.months.forEach(c=>{const{recurringBudgetDefaults:y}=g;typeof y.foodBudgetCents=="number"&&(c.foodBudgetCents=y.foodBudgetCents),typeof y.goingOutBudgetCents=="number"&&(c.goingOutBudgetCents=y.goingOutBudgetCents),typeof y.fixedBudgetCents=="number"&&(c.fixedBudgetCents=y.fixedBudgetCents),typeof y.variableBudgetCents=="number"&&(c.variableBudgetCents=y.variableBudgetCents),typeof y.miscBudgetCents=="number"&&(c.miscBudgetCents=y.miscBudgetCents)})}function ln(l){const c=l.trim();c&&localStorage.setItem(ee,c)}async function la(){St(),jt(Qa()),g.hasUnexportedChanges=sn(),g.unexportedChangeLog=oa(),g.lastBackupFileName=Za(),g.recurringBudgetDefaults=on(),In(),Ta();const[l,c,y]=await Promise.all([Dn(),fr(),pr()]);g.years=l,g.annualVariableFixedTemplates=y.templates,g.annualVariableFixedTemplateVersion=y.version,ua(g.years),cn(g.years),g.fixedTemplates=c.templates,g.fixedTemplateVersion=c.version,await he(g.years),l.length>0&&(g.selectedYear=Fa(l),g.selectedMonth=Lt()),Z()}function ua(l){const c=y=>y==="balance"||y==="fresh"||y==="salary"?y:void 0;l.forEach(y=>{y.months.forEach(p=>{typeof p.foodBudgetCents!="number"&&(p.foodBudgetCents=0),typeof p.goingOutBudgetCents!="number"&&(p.goingOutBudgetCents=0),Array.isArray(p.incomes)?p.incomes=p.incomes.map(v=>{const P=c(v.incomeSource);if(!P){const{incomeSource:F,...q}=v;return q}return{...v,incomeSource:P}}):p.incomes=[],typeof p.fixedBudgetCents!="number"&&(p.fixedBudgetCents=p.fixedCosts.reduce((v,P)=>v+P.plannedCents,0)),typeof p.variableBudgetCents!="number"&&(p.variableBudgetCents=p.variablePositions.reduce((v,P)=>v+P.budgetCents,0)),Array.isArray(p.variablePositions)||(p.variablePositions=[]),typeof p.miscBudgetCents!="number"&&(p.miscBudgetCents=0)})})}function G(l){return l==="balance"?"Bestandsguthaben":l==="salary"?"Gehalt":l==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Cn(l){return l==="fresh"||l==="salary"||!l}async function he(l){for(const c of l)await Fn(c)}function Rt(){if(g.selectedYear)return g.years.find(l=>l.year===g.selectedYear)}function Ne(){const l=Rt();if(l)return l.months.find(c=>c.month===g.selectedMonth)}function Pt(l){const c=l.days.reduce((q,N)=>q+N.foodCents,0),y=l.days.reduce((q,N)=>q+N.goingOutCents,0),p=l.fixedCosts.reduce((q,N)=>q+N.actualCents,0),v=l.variableCosts.reduce((q,N)=>q+N.amountCents,0)+l.variablePositions.reduce((q,N)=>q+N.actualCents,0),P=l.miscCosts.reduce((q,N)=>q+N.amountCents,0),F=c+y+p+v+P;return{foodCents:c,goingOutCents:y,fixedCents:p,variableCents:v,miscCents:P,totalCents:F}}function Kn(l){const c=l.foodBudgetCents??0,y=l.goingOutBudgetCents??0,p=l.fixedBudgetCents??l.fixedCosts.reduce((F,q)=>F+q.plannedCents,0),v=l.variablePositions.reduce((F,q)=>F+q.budgetCents,0),P=l.miscBudgetCents??0;return c+y+p+(l.variableBudgetCents??v)+P}function qn(l){return l.months.reduce((c,y)=>{const p=Pt(y);return{foodCents:c.foodCents+p.foodCents,goingOutCents:c.goingOutCents+p.goingOutCents,fixedCents:c.fixedCents+p.fixedCents,variableCents:c.variableCents+p.variableCents,miscCents:c.miscCents+p.miscCents,totalCents:c.totalCents+p.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function er(l){return l.months.slice().sort((c,y)=>c.month-y.month).map(c=>({month:c.month,summary:Pt(c)}))}function ca(l){const c=l.months.reduce((F,q)=>F+(q.foodBudgetCents??0),0),y=l.months.reduce((F,q)=>F+(q.goingOutBudgetCents??0),0),p=l.months.reduce((F,q)=>F+(q.fixedBudgetCents??q.fixedCosts.reduce((N,J)=>N+J.plannedCents,0)),0),v=l.months.reduce((F,q)=>F+(q.variableBudgetCents??q.variablePositions.reduce((N,J)=>N+J.budgetCents,0)),0),P=l.months.reduce((F,q)=>F+(q.miscBudgetCents??0),0);return{foodCents:c,goingOutCents:y,fixedCents:p,variableCents:v,miscCents:P,totalCents:c+y+p+v+P}}function xn(l){return l.months.reduce((c,y)=>c+y.incomes.reduce((p,v)=>p+(Cn(v.incomeSource)?v.amountCents:0),0),0)}function mt(l,c){const y=l.months.slice().sort((p,v)=>p.month-v.month)[0];return y?c.get(re(l.year,y.month))?.carriedFromPreviousCents??0:0}function Ia(){const l=g.years.slice().sort((p,v)=>p.year-v.year).flatMap(p=>p.months.slice().sort((v,P)=>v.month-P.month).map(v=>({year:p.year,month:v}))),c=new Map;let y=0;return l.forEach(({year:p,month:v},P)=>{const F=v.carryoverOverrideCents,q=typeof F=="number",N=q?F:y,J=P>0||q,U=v.incomes.reduce((Ve,Me)=>Ve+(Cn(Me.incomeSource)?Me.amountCents:0),0),X=Kn(v),H=U+N,ke=H-X;c.set(re(p,v.month),{hasPreviousMonth:J,carriedFromPreviousCents:N,recordedIncomeCents:U,effectiveIncomeCents:H,plannedBudgetCents:X,netCents:ke}),y=ke}),c}function Ue(l,c){return c<=0?"":l>c?"budget-over":l<c?"budget-under":""}function Na(l){return`${l>0?"+":""}${B(l)}`}function Mt(l,c){const y=l-c,p=Ue(c,l);return`${B(l)} <span class="eval-diff ${p}">(Δ ${Na(y)})</span>`}function je(l,c){const y=l!==null,p=y?l-c:null,v=y?Ue(c,l):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${y?`${B(l)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${B(c)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${p===null?"-":`${B(p)} €`}</strong>
      </div>
    </div>`}async function Zt(l){if(await Ir(l)){alert(`Jahr ${l} existiert bereits.`);return}const y=gr(l,g.fixedTemplates,g.fixedTemplateVersion);yn(y),z(y),await Fn(y),g.years=await Dn(),un(`Jahr ${l} wurde angelegt`),g.selectedYear=l,g.selectedMonth=Lt(),be(`Jahr ${l} wurde angelegt.`),Z()}function un(l="Änderung an den Daten"){g.hasUnexportedChanges=!0,_t(!0);const c=g.selectedYear?`${g.selectedYear}-${String(g.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",y={id:$t("change"),timestampIso:new Date().toISOString(),message:`${l} (${c})`};g.unexportedChangeLog=[...g.unexportedChangeLog,y].slice(-200),Et(g.unexportedChangeLog)}function wn(l){const c=l.trim();c&&(g.lastBackupFileName=c,ln(c))}function Ln(l){g.hasUnexportedChanges=!1,_t(!1),g.unexportedChangeLog=[],Et([]),g.showUnexportedChangeLogModal=!1,wn(l)}async function Te(l){const c=Rt();c&&(await Fn(c),g.years=await Dn(),un(l))}async function Re(l){for(const c of g.years)await Fn(c);g.years=await Dn(),un(l)}function re(l,c){return l*100+c}function kn(l){const c=l.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!c)return null;const y=c[1],p=c[2];return!y||!p?null:{year:Number.parseInt(y,10),month:Number.parseInt(p,10)}}function Ft(l,c){const y=kn(l.dueDateIso);if(!y||c.year<y.year)return;const p=c.months.find(P=>P.month===y.month);!p||p.variablePositions.some(P=>P.autoAnnualTemplateId===l.id)||(p.variablePositions=[{id:$t("varpos"),name:l.name,budgetCents:l.plannedCents,actualCents:0,autoAnnualTemplateId:l.id},...p.variablePositions],ut(p))}function z(l){g.annualVariableFixedTemplates.forEach(c=>{Ft(c,l)})}function cn(l){const c=new Set(g.annualVariableFixedTemplates.map(y=>y.id));l.forEach(y=>{y.months.forEach(p=>{const v=p.variablePositions.some(F=>typeof F.autoAnnualTemplateId=="string"),P=p.fixedCosts.some(F=>typeof F.autoAnnualTemplateId=="string");v&&(p.variablePositions=p.variablePositions.filter(F=>F.autoAnnualTemplateId?c.has(F.autoAnnualTemplateId):!0),ut(p)),P&&(p.fixedCosts=p.fixedCosts.filter(F=>!F.autoAnnualTemplateId),at(p))}),z(y)})}function at(l){l.fixedBudgetCents=l.fixedCosts.reduce((c,y)=>c+y.plannedCents,0)}function ut(l){l.variableBudgetCents=l.variablePositions.reduce((c,y)=>c+y.budgetCents,0)}function L(){if(g.selectedYear)return`${g.selectedYear}-${String(g.selectedMonth).padStart(2,"0")}`;const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`}function jn(){const l=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",L());if(!l)return null;const c=l.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!c)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const y=c[1],p=c[2];return!y||!p?null:{year:Number.parseInt(y,10),month:Number.parseInt(p,10)}}function Ka(l,c){const y=re(c.year,c.month);g.years.forEach(p=>{p.months.forEach(v=>{if(re(p.year,v.month)<y)return;v.fixedCosts.some(F=>F.templateId===l.id)||(v.fixedCosts.push({id:$t("fixed"),templateId:l.id,name:l.name,plannedCents:l.plannedCents,actualCents:0}),at(v))})})}function da(l,c,y){const p=re(y.year,y.month);g.years.forEach(v=>{v.months.forEach(P=>{re(v.year,P.month)<p||(P.fixedCosts=P.fixedCosts.map(F=>F.templateId!==c.id?F:{...F,name:c.name,plannedCents:c.plannedCents,actualCents:F.actualCents===l.plannedCents?c.plannedCents:F.actualCents}),at(P))})})}function qa(l,c){const y=re(c.year,c.month);g.years.forEach(p=>{p.months.forEach(v=>{re(p.year,v.month)<y||(v.fixedCosts=v.fixedCosts.filter(P=>P.templateId!==l),at(v))})})}async function fa(l,c){const y=l.trim();if(!y)return;const p=jn();if(!p)return;const v=!!g.editingFixedTemplateId;if(g.editingFixedTemplateId){const P=g.fixedTemplates.find(q=>q.id===g.editingFixedTemplateId);if(!P)return;const F={...P,name:y,plannedCents:c};g.fixedTemplates=g.fixedTemplates.map(q=>q.id===g.editingFixedTemplateId?F:q),da(P,F,p)}else{const P={id:$t("tpl"),name:y,plannedCents:c};g.fixedTemplates=[...g.fixedTemplates,P],Ka(P,p)}g.fixedTemplateVersion=await hr(g.fixedTemplates),g.editingFixedTemplateId=null,await Re(v?`Fixkosten-Vorlage aktualisiert: ${y} (${B(c)} €)`:`Fixkosten-Vorlage hinzugefügt: ${y} (${B(c)} €)`),be(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),Z()}function tr(l){g.editingFixedTemplateId=l,Z()}function nr(){g.editingFixedTemplateId=null,Z()}async function dn(l){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const y=jn();if(!y)return;const p=g.fixedTemplates.find(v=>v.id===l);g.fixedTemplates=g.fixedTemplates.filter(v=>v.id!==l),qa(l,y),g.editingFixedTemplateId===l&&(g.editingFixedTemplateId=null),g.fixedTemplateVersion=await hr(g.fixedTemplates),await Re(`Fixkosten-Vorlage gelöscht: ${p?.name??"Unbekannt"}`),be("Fixkosten-Vorlage wurde gelöscht."),Z()}async function fn(l,c,y){const p=l.trim();if(!p){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=kn(c);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(y<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P={id:$t("annualtpl"),name:p,plannedCents:y,dueDateIso:c};g.annualVariableFixedTemplates=[...g.annualVariableFixedTemplates,P],g.years.forEach(F=>{Ft(P,F)}),g.annualVariableFixedTemplateVersion=await vr(g.annualVariableFixedTemplates),await Re(`Variable Fixkosten-Vorlage hinzugefügt: ${p} (${B(y)} €, jährlich in ${Be(v.month)})`),be("Variable Fixkosten-Vorlage wurde hinzugefügt."),Z()}async function ha(l){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const y=g.annualVariableFixedTemplates.find(p=>p.id===l);y&&(g.annualVariableFixedTemplates=g.annualVariableFixedTemplates.filter(p=>p.id!==l),g.years.forEach(p=>{p.months.forEach(v=>{v.variablePositions=v.variablePositions.filter(P=>P.autoAnnualTemplateId!==l),ut(v),v.fixedCosts=v.fixedCosts.filter(P=>P.autoAnnualTemplateId!==l),at(v)})}),g.annualVariableFixedTemplateVersion=await vr(g.annualVariableFixedTemplates),await Re(`Variable Fixkosten-Vorlage gelöscht: ${y.name}`),be("Variable Fixkosten-Vorlage wurde gelöscht."),Z())}async function $n(l,c,y){const p=Ne();p&&(p.days=p.days.map(v=>v.isoDate===l?{...v,[c]:y}:v),await Te(`${c==="foodCents"?"Essen":"Ausgehen"} am ${l} angepasst auf ${B(y)} €`),Z())}async function we(l,c){const y=Ne();if(!y)return;const p=y.fixedCosts.find(v=>v.id===l);y.fixedCosts=y.fixedCosts.map(v=>v.id===l?{...v,actualCents:c}:v),await Te(`Fixkosten-Ist angepasst: ${p?.name??"Unbekannt"} auf ${B(c)} €`),Z()}async function Ke(l,c){const y=Ne();if(!y)return;const p=y.fixedCosts.find(v=>v.id===l);p&&(y.fixedCosts=y.fixedCosts.map(v=>v.id===l?{...v,plannedCents:c}:v),at(y),await Te(`Fixkosten-Budget angepasst: ${p.name} auf ${B(c)} €`),Z())}async function ar(l,c){const y=Ne();if(!y)return;const p=l.trim();if(!p){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(c<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:$t("fixed"),templateId:$t("fixed-local"),name:p,plannedCents:c,actualCents:0};y.fixedCosts=[v,...y.fixedCosts],at(y),await Te(`Fixkosten-Position hinzugefügt: ${p} (${B(c)} €)`),be("Fixkosten-Position wurde hinzugefügt."),Z()}async function Rn(l){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const y=Ne();if(!y)return;const p=y.fixedCosts.find(v=>v.id===l);p&&(y.fixedCosts=y.fixedCosts.filter(v=>v.id!==l),at(y),await Te(`Fixkosten-Position gelöscht: ${p.name}`),be("Fixkosten-Position wurde gelöscht."),Z())}async function Vn(l){await gt("fixedBudgetCents",l,"Fixkosten")}async function Yn(l){await gt("foodBudgetCents",l,"Essen")}async function rr(l){await gt("goingOutBudgetCents",l,"Ausgehen")}async function Vt(l){await gt("miscBudgetCents",l,"Sonstiges")}async function hn(l){await gt("variableBudgetCents",l,"Variable Kosten")}async function gt(l,c,y){const p=Ne(),v=g.selectedYear;if(!p||!v||p[l]===c)return;if(p[l]=c,confirm(`Soll das Budget "${y}" auch für zukünftige Monate übernommen werden?`)){const F=re(v,g.selectedMonth);g.years.forEach(q=>{q.months.forEach(N=>{re(q.year,N.month)<=F||(N[l]=c)})}),g.recurringBudgetDefaults[l]=c,Da(g.recurringBudgetDefaults),await Re(`Budget "${y}" auf ${B(c)} € gesetzt (inkl. zukünftiger Monate)`),be(`Budget "${y}" wurde für zukünftige Monate übernommen.`),Z();return}await Te(`Budget "${y}" auf ${B(c)} € gesetzt`),Z()}async function Bn(l){const c=Ne();c&&(l===null?c.carryoverOverrideCents=null:c.carryoverOverrideCents=l,await Te(l===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${B(l)} € gesetzt`),Z())}async function La(l,c,y){const p=Ne(),v=g.selectedYear;if(!p||!v)return;const P=l.trim();if(!P){alert("Bitte Bezeichnung für die Position angeben.");return}if(p.variablePositions=[{id:$t("varpos"),name:P,budgetCents:c,actualCents:0},...p.variablePositions],ut(p),y){const F=re(v,g.selectedMonth);g.years.forEach(q=>{q.months.forEach(N=>{re(q.year,N.month)<=F||(N.variablePositions=[{id:$t("varpos"),name:P,budgetCents:c,actualCents:0},...N.variablePositions],ut(N))})}),await Re(`Variable Position hinzugefügt: ${P} (${B(c)} €) für zukünftige Monate`),be("Variable Position wurde für zukünftige Monate hinzugefügt."),Z();return}await Te(`Variable Position hinzugefügt: ${P} (${B(c)} €)`),be("Variable Position wurde hinzugefügt."),Z()}async function Yt(l,c){const y=Ne();if(!y)return;const p=y.variablePositions.find(v=>v.id===l);y.variablePositions=y.variablePositions.map(v=>v.id===l?{...v,actualCents:c}:v),await Te(`Istwert Variable Position angepasst: ${p?.name??"Unbekannt"} auf ${B(c)} €`),Z()}async function ja(l,c){const y=Ne();if(!y)return;const p=y.variablePositions.find(v=>v.id===l);y.variablePositions=y.variablePositions.map(v=>v.id===l?{...v,budgetCents:c}:v),ut(y),await Te(`Budget Variable Position angepasst: ${p?.name??"Unbekannt"} auf ${B(c)} €`),Z()}async function en(l){if(!confirm("Variable Position wirklich löschen?"))return;const y=Ne(),p=g.selectedYear;if(!y||!p)return;const v=y.variablePositions.find(N=>N.id===l);if(!v)return;const P=re(p,g.selectedMonth),q=g.years.some(N=>N.months.some(J=>re(N.year,J.month)>P&&J.variablePositions.some(U=>U.name===v.name&&U.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(y.variablePositions=y.variablePositions.filter(N=>N.id!==l),ut(y),q){g.years.forEach(N=>{N.months.forEach(J=>{re(N.year,J.month)<=P||(J.variablePositions=J.variablePositions.filter(U=>!(U.name===v.name&&U.budgetCents===v.budgetCents)),ut(J))})}),await Re(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),be("Variable Position wurde auch in zukünftigen Monaten gelöscht."),Z();return}await Te(`Variable Position gelöscht: ${v.name}`),be("Variable Position wurde gelöscht."),Z()}async function Ra(l){const c=Ne(),y=g.selectedYear;if(!c||!y)return;const p=c.variablePositions.find(U=>U.id===l);if(!p)return;const v={year:g.selectedMonth===12?y+1:y,month:g.selectedMonth===12?1:g.selectedMonth+1};let P=g.years.find(U=>U.year===v.year);if(!P){const U=gr(v.year,g.fixedTemplates,g.fixedTemplateVersion);yn(U),z(U),await Fn(U),g.years=[...g.years,U].sort((X,H)=>X.year-H.year),P=U}const F=P.months.find(U=>U.month===v.month);if(!F)return;const q=F.variablePositions.some(U=>U.id===p.id||U.name===p.name&&U.budgetCents===p.budgetCents);if(c.variablePositions=c.variablePositions.filter(U=>U.id!==l),ut(c),!q){const X=F.variablePositions.some(H=>H.id===p.id)?{...p,id:$t("varpos")}:p;F.variablePositions=[X,...F.variablePositions],ut(F)}const N=`${Be(v.month)} ${v.year}`,J=`Variable Position verschoben: ${p.name} → ${N}`;if(v.year===y)await Te(J);else{const U=Rt();if(!U)return;await Fn(U),await Fn(P),g.years=await Dn(),ua(g.years),un(J)}be(q?`Position entfernt (im Folgemonat schon vorhanden: ${N}).`:`Position in den Folgemonat verschoben: ${N}.`),Z()}async function zn(l,c,y){const p=Ne(),v=g.selectedYear;if(!p||!v)return;const P=l.trim();if(!P){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(c<=0){alert("Bitte einen positiven Betrag eingeben.");return}const F=br(P,c);if(p.miscCosts=[F,...p.miscCosts],y){const q=re(v,g.selectedMonth);g.years.forEach(N=>{N.months.forEach(J=>{re(N.year,J.month)<=q||(J.miscCosts=[br(P,c),...J.miscCosts])})}),await Re(`Sonstige Position hinzugefügt: ${P} (${B(c)} €) für zukünftige Monate`),be("Sonstige Position wurde für zukünftige Monate hinzugefügt."),Z();return}await Te(`Sonstige Position hinzugefügt: ${P} (${B(c)} €)`),be("Sonstige Position wurde hinzugefügt."),Z()}async function Pe(l){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const y=Ne(),p=g.selectedYear;if(!y||!p)return;const v=y.miscCosts.find(N=>N.id===l);if(!v)return;const P=re(p,g.selectedMonth),q=g.years.some(N=>N.months.some(J=>re(N.year,J.month)>P&&J.miscCosts.some(U=>U.description===v.description&&U.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(y.miscCosts=y.miscCosts.filter(N=>N.id!==l),q){g.years.forEach(N=>{N.months.forEach(J=>{re(N.year,J.month)<=P||(J.miscCosts=J.miscCosts.filter(U=>!(U.description===v.description&&U.amountCents===v.amountCents)))})}),await Re(`Sonstige Position gelöscht: ${v.description} (${B(v.amountCents)} €) inkl. zukünftiger Monate`),be("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),Z();return}await Te(`Sonstige Position gelöscht: ${v.description} (${B(v.amountCents)} €)`),be("Sonstige Position wurde gelöscht."),Z()}async function zt(l,c,y,p){const v=Ne(),P=g.selectedYear;if(!v||!P)return;const F=l.trim();if(!F){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(c<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const q=yr(F,c,y);if(v.incomes=[q,...v.incomes],p){const N=re(P,g.selectedMonth);g.years.forEach(J=>{J.months.forEach(U=>{re(J.year,U.month)<=N||(U.incomes=[yr(F,c,y),...U.incomes])})}),await Re(`Einkommen hinzugefügt: ${F} (${B(c)} €, ${G(y)}) für zukünftige Monate`),be("Einkommen wurde für zukünftige Monate hinzugefügt."),Z();return}await Te(`Einkommen hinzugefügt: ${F} (${B(c)} €, ${G(y)})`),be("Einkommen wurde hinzugefügt."),Z()}async function Dt(l,c){const y=Ne();if(!y)return;const p=y.incomes.find(v=>v.id===l);p&&(y.incomes=y.incomes.map(v=>{if(v.id!==l)return v;if(!c){const{incomeSource:P,...F}=v;return F}return{...v,incomeSource:c}}),await Te(`Einkommensart angepasst: ${p.description} → ${G(c)}`),Z())}async function Va(l){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const y=Ne(),p=g.selectedYear;if(!y||!p)return;const v=y.incomes.find(N=>N.id===l);if(!v)return;const P=re(p,g.selectedMonth),q=g.years.some(N=>N.months.some(J=>re(N.year,J.month)>P&&J.incomes.some(U=>U.description===v.description&&U.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(y.incomes=y.incomes.filter(N=>N.id!==l),q){g.years.forEach(N=>{N.months.forEach(J=>{re(N.year,J.month)<=P||(J.incomes=J.incomes.filter(U=>!(U.description===v.description&&U.amountCents===v.amountCents)))})}),await Re(`Einkommen gelöscht: ${v.description} (${B(v.amountCents)} €) inkl. zukünftiger Monate`),be("Einkommen wurde auch in zukünftigen Monaten gelöscht."),Z();return}await Te(`Einkommen gelöscht: ${v.description} (${B(v.amountCents)} €)`),be("Einkommen wurde gelöscht."),Z()}async function pn(){const l=await Nr(),c=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),y=URL.createObjectURL(c),p=`haushaltsbuch-backup-${new Date().toISOString().slice(0,10)}.json`,v=document.createElement("a");v.href=y,v.download=p,v.click(),URL.revokeObjectURL(y),Ln(p),Z(),be("Backup wurde exportiert.")}async function Un(l){const c=await l.text(),y=JSON.parse(c);await Kr(y);const[p,v,P]=await Promise.all([Dn(),fr(),pr()]);g.years=p,g.annualVariableFixedTemplates=P.templates,g.annualVariableFixedTemplateVersion=P.version,ua(g.years),cn(g.years),g.fixedTemplates=v.templates,g.fixedTemplateVersion=v.version,await he(g.years),g.selectedYear=Fa(p),g.selectedMonth=Lt(),Ln(l.name),be("Backup wurde importiert."),Z()}function Z(){const l=Rt(),c=Ne(),y=ia(),p=c?Pt(c):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=l?qn(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},P=l?er(l):[],F=c?c.foodBudgetCents??0:0,q=c?c.goingOutBudgetCents??0:0,N=c?c.fixedBudgetCents??c.fixedCosts.reduce((a,o)=>a+o.plannedCents,0):0,J=c?c.variableBudgetCents??c.variablePositions.reduce((a,o)=>a+o.budgetCents,0):0,U=c?c.miscBudgetCents??0:0,X=l?l.months.reduce((a,o)=>a+(o.foodBudgetCents??0),0):0,H=l?l.months.reduce((a,o)=>a+(o.goingOutBudgetCents??0),0):0,ke=l?l.months.reduce((a,o)=>a+(o.fixedBudgetCents??o.fixedCosts.reduce((f,h)=>f+h.plannedCents,0)),0):0,Ve=l?l.months.reduce((a,o)=>a+(o.variableBudgetCents??o.variablePositions.reduce((f,h)=>f+h.budgetCents,0)),0):0,Me=l?l.months.reduce((a,o)=>a+(o.miscBudgetCents??0),0):0,de=c?c.incomes.reduce((a,o)=>a+(Cn(o.incomeSource)?o.amountCents:0),0):0,ct=c?c.incomes.reduce((a,o)=>a+(o.incomeSource==="salary"?o.amountCents:0),0):0,De=Ia(),rt=l?De.get(re(l.year,g.selectedMonth)):void 0,bt=l?l.months.slice().sort((a,o)=>a.month-o.month)[0]:void 0,dt=rt?.carriedFromPreviousCents??0,K=rt?.hasPreviousMonth??!1,Q=rt?.effectiveIncomeCents??de,Ot=c?Kn(c):0,wt=rt?.netCents??de-Ot,st=Q-p.totalCents,ye=ct-p.totalCents,Ge=p.totalCents>0?`${(ct/p.totalCents*100).toFixed(1)} %`:"-",ge=dt<0?"danger":dt>0?"budget-under":"",Ae=wt<0?"danger":wt>0?"budget-under":"",ft=st<0?"danger":st>0?"budget-under":"",Ye=l?l.months.reduce((a,o)=>a+o.incomes.reduce((f,h)=>f+(Cn(h.incomeSource)?h.amountCents:0),0),0):0,ie=l?l.months.reduce((a,o)=>a+o.incomes.reduce((f,h)=>f+(h.incomeSource==="salary"?h.amountCents:0),0),0):0,Fe=l&&bt?De.get(re(l.year,bt.month))?.carriedFromPreviousCents??0:0,yt=Ye+Fe,ze=yt-v.totalCents,ht=ie-v.totalCents,qe=v.totalCents>0?`${(ie/v.totalCents*100).toFixed(1)} %`:"-",Sn=Fe<0?"danger":Fe>0?"budget-under":"",oe=ze<0?"danger":ze>0?"budget-under":"",pe=F+q+N+J+U,_e=F+q,Ie=p.foodCents+p.goingOutCents,$e=_e-Ie,Ut=Ue(Ie,_e),kt=X+H+ke+Ve+Me,_n=Q-pe,S=yt-kt,D=pe-p.totalCents,Le=kt-v.totalCents,Ce=a=>a<0?"danger":a>0?"budget-under":"",vn=(a,o)=>o<=0?"muted":a>=o?"budget-under":"danger",Gt=vn(ct,p.totalCents),va=vn(ie,v.totalCents),xe=(a,o)=>{if(o<=0)return"0%";const h=Math.max(0,a)/o*100;return`${Math.min(100,Math.max(0,h)).toFixed(1)}%`},Gn=(a,o)=>{if(o<=0)return a>0?100:0;const f=Math.max(0,a)/o*100;return Math.max(0,f)},Wn=[{label:"Essen",budgetCents:F,actualCents:p.foodCents},{label:"Ausgehen",budgetCents:q,actualCents:p.goingOutCents},{label:"Fixkosten",budgetCents:N,actualCents:p.fixedCents},{label:"Variable",budgetCents:J,actualCents:p.variableCents},{label:"Sonstige",budgetCents:U,actualCents:p.miscCents}];Math.max(1,...Wn.flatMap(a=>[a.budgetCents,a.actualCents]));const Jn=(a,o)=>o<=0?"bar-positive":a<=0||o>a?"bar-negative":"bar-positive",ma=[{label:"Einkommen gesamt",valueCents:Q,className:"bar-income"},{label:"Echte Ausgaben",valueCents:p.totalCents,className:"bar-expense"},{label:"Netto",valueCents:st,className:st<0?"bar-negative":"bar-positive"}],Hn=Math.max(1,...ma.map(a=>Math.abs(a.valueCents))),Xn=l?l.months.slice().sort((a,o)=>a.month-o.month).map(a=>{const o=a.foodBudgetCents??0,f=a.goingOutBudgetCents??0,h=a.fixedBudgetCents??a.fixedCosts.reduce((w,x)=>w+x.plannedCents,0),m=a.variableBudgetCents??a.variablePositions.reduce((w,x)=>w+x.budgetCents,0),b=a.miscBudgetCents??0,k=o+f+h+m+b;return{month:a.month,foodBudgetCents:o,goingOutBudgetCents:f,fixedBudgetCents:h,variableBudgetCents:m,miscBudgetCents:b,totalBudgetCents:k}}):[],pt=new Map(Xn.map(a=>[a.month,a])),It=a=>{if(a.length===0)return null;const o=Math.min(...a),f=Math.max(...a),h=Math.round(a.reduce((m,b)=>m+b,0)/a.length);return{min:o,avg:h,max:f}},sr=P.map(a=>a.summary.foodCents),mn=P.map(a=>a.summary.goingOutCents),ga=P.map(a=>a.summary.fixedCents),ba=P.map(a=>a.summary.variableCents),ya=P.map(a=>a.summary.miscCents),Ca=P.map(a=>a.summary.totalCents),We=P.map(a=>l?De.get(re(l.year,a.month))?.plannedBudgetCents??0:0),En=P.map(a=>l?De.get(re(l.year,a.month))?.netCents??0:0),Ct={food:It(sr),goingOut:It(mn),fixed:It(ga),variable:It(ba),misc:It(ya),total:It(Ca),budget:It(We),net:It(En)},Qn=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}].map(({key:a,label:o})=>{const f=Ct.food?.[a]??null,h=Ct.goingOut?.[a]??null,m=Ct.fixed?.[a]??null,b=Ct.variable?.[a]??null,k=Ct.misc?.[a]??null,w=Ct.total?.[a]??null,x=Ct.budget?.[a]??null,_=Ct.net?.[a]??null,M=A=>A===null?"-":B(A);return`<tr>
                  <td><strong>${o}</strong></td>
                  <td>${M(f)}</td>
                  <td>${M(h)}</td>
                  <td>${M(m)}</td>
                  <td>${M(b)}</td>
                  <td>${M(k)}</td>
                  <td>${M(w)}</td>
                  <td>${M(x)}</td>
                  <td>${M(_)}</td>
                </tr>`}).join(""),xa=Math.max(1,...P.flatMap(a=>{const o=pt.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,o??0]})),wa=Math.max(1,...P.flatMap(a=>{const o=pt.get(a.month),f=a.summary.foodCents+a.summary.goingOutCents,h=(o?.foodBudgetCents??0)+(o?.goingOutBudgetCents??0);return[f,h]})),Pn=Math.max(1,...P.flatMap(a=>{const o=pt.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,o]})),Zn=Math.max(1,...P.flatMap(a=>{const o=pt.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,o]})),Wt=Math.max(1,...P.flatMap(a=>{const o=pt.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,o]})),ka=Ue(p.fixedCents,N),$a=Ue(p.foodCents,F),ea=Ue(p.goingOutCents,q),Ba=Ue(p.variableCents,J),Ya=Ue(p.miscCents,U),Mn=g.editingFixedTemplateId?g.fixedTemplates.find(a=>a.id===g.editingFixedTemplateId):null,Sa=g.hasUnexportedChanges,On=g.unexportedChangeLog.slice().reverse(),or=g.lastBackupFileName?Nn(g.lastBackupFileName):"-",_a={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},et=g.years.slice().sort((a,o)=>a.year-o.year),ta=et.some(a=>a.year===g.dashboardYear)?g.dashboardYear:g.selectedYear??et[et.length-1]?.year??null,Je=typeof ta=="number"?et.find(a=>a.year===ta):void 0,lr=Je?Je.months.slice().sort((a,o)=>a.month-o.month):[],Jt=Je?qn(Je):_a,gn=Je?ca(Je):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},ur=Je?xn(Je):0,za=Je?mt(Je,De):0,Tn=ur+za,Ea=Je?Je.months.reduce((a,o)=>a+Kn(o),0):0,Pa=Tn-Ea,Ua=Tn-Jt.totalCents,cr=[{label:"Essen",budgetCents:gn.foodCents,actualCents:Jt.foodCents},{label:"Ausgehen",budgetCents:gn.goingOutCents,actualCents:Jt.goingOutCents},{label:"Fixkosten",budgetCents:gn.fixedCents,actualCents:Jt.fixedCents},{label:"Variable",budgetCents:gn.variableCents,actualCents:Jt.variableCents},{label:"Sonstige",budgetCents:gn.miscCents,actualCents:Jt.miscCents}],it=lr.map(a=>{const o=Je?De.get(re(Je.year,a.month)):void 0,f=Pt(a),h=a.incomes.reduce((I,O)=>I+O.amountCents,0),m=o?.effectiveIncomeCents??h,b=o?.plannedBudgetCents??Kn(a),k=f.foodCents,w=f.goingOutCents,x=k+w,_=f.totalCents,M=m-b,A=m-_;return{month:a.month,foodCents:k,goingOutCents:w,foodAndGoingOutCents:x,effectiveIncomeCents:m,plannedBudgetCents:b,actualCostCents:_,plannedNetCents:M,actualNetCents:A}}),na=Math.max(1,...it.map(a=>a.actualCostCents)),Tt=Math.max(1,...it.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Oe=Math.max(1,...it.map(a=>a.foodAndGoingOutCents)),aa=Math.max(1,...it.map(a=>a.foodCents)),bn=Math.max(1,...it.map(a=>a.goingOutCents)),tn=et.reduce((a,o)=>{const f=ca(o);return{foodCents:a.foodCents+f.foodCents,goingOutCents:a.goingOutCents+f.goingOutCents,fixedCents:a.fixedCents+f.fixedCents,variableCents:a.variableCents+f.variableCents,miscCents:a.miscCents+f.miscCents,totalCents:a.totalCents+f.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Nt=et.reduce((a,o)=>{const f=qn(o);return{foodCents:a.foodCents+f.foodCents,goingOutCents:a.goingOutCents+f.goingOutCents,fixedCents:a.fixedCents+f.fixedCents,variableCents:a.variableCents+f.variableCents,miscCents:a.miscCents+f.miscCents,totalCents:a.totalCents+f.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Ga=et.reduce((a,o)=>a+xn(o),0),nn=et[0]?mt(et[0],De):0,An=Ga+nn,an=An-tn.totalCents,Kt=An-Nt.totalCents,Ma=[{label:"Essen",budgetCents:tn.foodCents,actualCents:Nt.foodCents},{label:"Ausgehen",budgetCents:tn.goingOutCents,actualCents:Nt.goingOutCents},{label:"Fixkosten",budgetCents:tn.fixedCents,actualCents:Nt.fixedCents},{label:"Variable",budgetCents:tn.variableCents,actualCents:Nt.variableCents},{label:"Sonstige",budgetCents:tn.miscCents,actualCents:Nt.miscCents}],e=Math.max(1,...Ma.flatMap(a=>[a.budgetCents,a.actualCents])),t=et.map(a=>{const o=qn(a),f=ca(a),h=xn(a),m=mt(a,De),b=h+m;return{year:a.year,budgetTotalCents:f.totalCents,actualTotalCents:o.totalCents,effectiveIncomeCents:b,plannedNetCents:b-f.totalCents,actualNetCents:b-o.totalCents}}),n=Math.max(1,...t.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),r=Math.max(1,...t.map(a=>a.actualTotalCents)),s=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${g.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${g.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${g.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${et.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':g.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${et.map(a=>`<option value="${a.year}" ${a.year===ta?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${Je?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${B(Tn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${B(Ea)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${B(Jt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ce(Pa)}">${B(Pa)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ce(Ua)}">${B(Ua)}</div><div class="eval-value"></div></div>
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
                    ${cr.map(a=>{const o=Gn(a.actualCents,a.budgetCents),f=Math.min(100,o),h=`${o.toFixed(0)}%`,m=a.budgetCents-a.actualCents,b=m<0?"danger":m>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Jn(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${f.toFixed(1)}%" title="${a.label}: ${B(a.actualCents)} von ${B(a.budgetCents)}">
                              <span class="circle-chart-value">${h}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${B(a.budgetCents)} / I ${B(a.actualCents)}</div>
                            <div class="circle-chart-meta ${b}">${m>=0?"+":""}${B(m)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(it.length,1)}, minmax(0, 1fr));">
                    ${it.map(a=>{const o=xe(a.actualCostCents,na);return`
                          <div class="spark-bar" title="${Be(a.month)}: ${B(a.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${o}"></div>
                            <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                    ${it.map(a=>{const o=xe(Math.abs(a.plannedNetCents),Tt),f=xe(Math.abs(a.actualNetCents),Tt),h=a.plannedNetCents<0?"bar-negative":"bar-positive",m=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Be(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${B(a.plannedNetCents)} | Ist-Saldo: ${B(a.actualNetCents)}">
                              <div class="bar ${h}" style="width:${o}; opacity: 0.35;"></div>
                              <div class="bar ${m}" style="width:${f}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Ce(a.plannedNetCents)}">B ${B(a.plannedNetCents)}</span>
                              <span class="${Ce(a.actualNetCents)}">I ${B(a.actualNetCents)}</span>
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
                  ${it.map(a=>`<tr>
                        <td>${Be(a.month)}</td>
                        <td>${B(a.effectiveIncomeCents)}</td>
                        <td>${B(a.plannedBudgetCents)}</td>
                        <td>${B(a.actualCostCents)}</td>
                        <td class="${Ce(a.plannedNetCents)}">${B(a.plannedNetCents)}</td>
                        <td class="${Ce(a.actualNetCents)}">${B(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:g.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${et.map(a=>`<option value="${a.year}" ${a.year===ta?"selected":""}>${a.year}</option>`).join("")}
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
                    ${it.map(a=>{const o=xe(a.foodAndGoingOutCents,Oe);return`
                          <div class="spark-bar" title="${Be(a.month)}: ${B(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${o}"></div>
                            <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(it.length,1)}, minmax(0, 1fr));">
                    ${it.map(a=>{const o=xe(a.foodCents,aa);return`
                          <div class="spark-bar" title="${Be(a.month)}: ${B(a.foodCents)}">
                            <div class="spark-bar-fill" style="height:${o}"></div>
                            <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(it.length,1)}, minmax(0, 1fr));">
                    ${it.map(a=>{const o=xe(a.goingOutCents,bn);return`
                          <div class="spark-bar" title="${Be(a.month)}: ${B(a.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${o}"></div>
                            <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${B(An)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${B(tn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${B(Nt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ce(an)}">${B(an)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ce(Kt)}">${B(Kt)}</div><div class="eval-value"></div></div>
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
                    ${Ma.map(a=>{const o=xe(a.budgetCents,e),f=xe(a.actualCents,e),h=Jn(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${B(a.budgetCents)} | Ist: ${B(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${o}"></div>
                              <div class="bar-marker" style="left:${o}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${h}" style="width:${f}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${B(a.budgetCents)}</span>
                              <span class="muted">I ${B(a.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(t.length,1)}, minmax(0, 1fr));">
                    ${t.map(a=>{const o=xe(a.actualTotalCents,r);return`
                          <div class="spark-bar" title="${a.year}: ${B(a.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${o}"></div>
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
                    ${t.map(a=>{const o=xe(Math.abs(a.plannedNetCents),n),f=xe(Math.abs(a.actualNetCents),n),h=a.plannedNetCents<0?"bar-negative":"bar-positive",m=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${B(a.plannedNetCents)} | Ist-Saldo: ${B(a.actualNetCents)}">
                              <div class="bar ${h}" style="width:${o}; opacity: 0.35;"></div>
                              <div class="bar ${m}" style="width:${f}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Ce(a.plannedNetCents)}">B ${B(a.plannedNetCents)}</span>
                              <span class="${Ce(a.actualNetCents)}">I ${B(a.actualNetCents)}</span>
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
                  ${t.map(a=>`<tr>
                        <td>${a.year}</td>
                        <td>${B(a.effectiveIncomeCents)}</td>
                        <td>${B(a.budgetTotalCents)}</td>
                        <td>${B(a.actualTotalCents)}</td>
                        <td class="${Ce(a.plannedNetCents)}">${B(a.plannedNetCents)}</td>
                        <td class="${Ce(a.actualNetCents)}">${B(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,i=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,u=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Mn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Mn?vt(Mn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Mn?"Änderung speichern":"Vorlage speichern"}</button>
          ${Mn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${g.fixedTemplates.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td>${B(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${a.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,d=`
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
            ${g.annualVariableFixedTemplates.map(a=>{const o=kn(a.dueDateIso),f=o?Be(o.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${f}</td>
                    <td>${B(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,C=g.topModal==="years"?"Jahr hinzufügen":g.topModal==="fixed"?"Fixe Kosten (zentral)":g.topModal==="variable-fixed"?"Variable Fixkosten":g.topModal==="dashboard"?"Dashboard":"",$=g.topModal==="years"?i:g.topModal==="fixed"?u:g.topModal==="variable-fixed"?d:g.topModal==="dashboard"?s:"";E.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Sa?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${g.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${$r.map(a=>`<option value="${a}" ${g.theme===a?"selected":""}>${Lr(a)}</option>`).join("")}
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

        ${g.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${C}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${C}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${$}
                </div>
              </div>
            </div>
          `:""}

        ${g.showUnexportedChangeLogModal?`
            <div class="panel-modal-backdrop" id="unexported-change-log-backdrop" role="dialog" aria-modal="true" aria-label="Ungesicherte Änderungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Ungesicherte Änderungen</h2>
                  <button class="btn btn-quiet" id="unexported-change-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${On.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${On.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${Nn(a.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${l?`${Be(g.selectedMonth)} ${l.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${g.years.map(a=>`<option value="${a.year}" ${a.year===g.selectedYear?"selected":""}>${a.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${g.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(a,o)=>o+1).map(a=>`<option value="${a}" ${a===g.selectedMonth?"selected":""}>${Be(a)}</option>`).join("")}
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
                  ${Wn.map(a=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${a.label}"
                            data-budget-cents="${a.budgetCents}"
                            data-actual-cents="${a.actualCents}"
                            role="img"
                            aria-label="${a.label}: Budget ${B(a.budgetCents)} €, Ist ${B(a.actualCents)} €"
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
                  ${ma.map(a=>{const o=xe(Math.abs(a.valueCents),Hn),f=a.valueCents>=0?"+":"",h=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${B(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${o}"></div>
                          </div>
                          <div class="bar-meta"><span class="${h}">${f}${B(a.valueCents)}</span></div>
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
                ${l?`
                    <div class="spark-bars" aria-label="Jahresverlauf Gesamtausgaben (Budget vs. Ist)">
                      ${P.map(a=>{const o=pt.get(a.month)?.totalBudgetCents??0,f=xe(o,xa),h=xe(a.summary.totalCents,xa);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${B(a.summary.totalCents)} € | Budget ${B(o)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${f}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${h}"><span class="spark-bar-fill-value">${B(a.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                ${l?`
                    <div class="spark-bars" aria-label="Jahresverlauf Essen und Ausgehen (Budget vs. Ist)">
                      ${P.map(a=>{const o=pt.get(a.month),f=(o?.foodBudgetCents??0)+(o?.goingOutBudgetCents??0),h=a.summary.foodCents+a.summary.goingOutCents,m=xe(f,wa),b=xe(h,wa);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${B(h)} € | Budget ${B(f)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${m}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${B(h)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                ${l?`
                    <div class="spark-bars" aria-label="Jahresverlauf Fixkosten (Budget vs. Ist)">
                      ${P.map(a=>{const o=pt.get(a.month)?.fixedBudgetCents??0,f=xe(o,Pn),h=xe(a.summary.fixedCents,Pn);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${B(a.summary.fixedCents)} € | Budget ${B(o)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${f}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${h}"><span class="spark-bar-fill-value">${B(a.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                ${l?`
                    <div class="spark-bars" aria-label="Jahresverlauf Variable Kosten (Budget vs. Ist)">
                      ${P.map(a=>{const o=pt.get(a.month)?.variableBudgetCents??0,f=xe(o,Zn),h=xe(a.summary.variableCents,Zn);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${B(a.summary.variableCents)} € | Budget ${B(o)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${f}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${h}"><span class="spark-bar-fill-value">${B(a.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                ${l?`
                    <div class="spark-bars" aria-label="Jahresverlauf Sonstige (Budget vs. Ist)">
                      ${P.map(a=>{const o=pt.get(a.month)?.miscBudgetCents??0,f=xe(o,Wt),h=xe(a.summary.miscCents,Wt);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${B(a.summary.miscCents)} € | Budget ${B(o)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${f}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${h}"><span class="spark-bar-fill-value">${B(a.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                    <div class="eval-value">${B(de)}</div>
                    <div class="eval-value">${B(Ye)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${ge}">${K?B(dt):"-"}</div>
                    <div class="eval-value ${Sn}">${l?B(Fe):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${B(Q)}</div>
                    <div class="eval-value">${B(yt)}</div>
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
                    <div class="eval-value">${Mt(F,p.foodCents)}</div>
                    <div class="eval-value">${B(X)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Mt(q,p.goingOutCents)}</div>
                    <div class="eval-value">${B(H)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Mt(N,p.fixedCents)}</div>
                    <div class="eval-value">${B(ke)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Mt(J,p.variableCents)}</div>
                    <div class="eval-value">${B(Ve)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Mt(U,p.miscCents)}</div>
                    <div class="eval-value">${B(Me)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Mt(pe,p.totalCents)}</div>
                    <div class="eval-value">${B(kt)}</div>
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
                    <div class="eval-value ${$a}">${B(p.foodCents)}</div>
                    <div class="eval-value">${B(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${ea}">${B(p.goingOutCents)}</div>
                    <div class="eval-value">${B(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${ka}">${B(p.fixedCents)}</div>
                    <div class="eval-value">${B(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Ba}">${B(p.variableCents)}</div>
                    <div class="eval-value">${B(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Ya}">${B(p.miscCents)}</div>
                    <div class="eval-value">${B(v.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${B(p.totalCents)}</div>
                    <div class="eval-value">${B(v.totalCents)}</div>
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
                    <div class="eval-value ${Ce(D)}">${B(D)}</div>
                    <div class="eval-value ${Ce(Le)}">${B(Le)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Ce(_n)}">${B(_n)}</div>
                    <div class="eval-value ${Ce(S)}">${B(S)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${ft}">${B(st)}</div>
                    <div class="eval-value ${oe}">${B(ze)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${Ce(ye)}">${B(ye)}</div>
                    <div class="eval-value ${Ce(ht)}">${B(ht)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Gt}">${Ge}</div>
                    <div class="eval-value ${va}">${qe}</div>
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
                ${P.map((a,o,f)=>{const h=l?De.get(re(l.year,a.month)):void 0,m=h?.plannedBudgetCents??0,b=h?.netCents??0,k=b<0?"danger":b>0?"budget-under":"",w=f[o-1],x=w?.summary.foodCents??null,_=w?.summary.goingOutCents??null,M=w?.summary.fixedCents??null,A=w?.summary.variableCents??null,I=w?.summary.miscCents??null,O=w?.summary.totalCents??null,R=l&&w?De.get(re(l.year,w.month))?.plannedBudgetCents??0:null,j=x===null?null:a.summary.foodCents-x,T=_===null?null:a.summary.goingOutCents-_,V=M===null?null:a.summary.fixedCents-M,se=A===null?null:a.summary.variableCents-A,le=I===null?null:a.summary.miscCents-I,W=O===null?null:a.summary.totalCents-O,ne=R===null?null:m-R,ve=qt=>qt===null?"muted":qt>0?"danger":qt<0?"budget-under":"muted",xt=qt=>qt===null?"muted":qt>0?"danger":qt<0?"budget-under":"muted",me=qt=>qt===null?"(Δ -)":`(Δ ${qt>0?"+":""}${B(qt)})`,Ht=l&&w?De.get(re(l.year,w.month))?.netCents??0:null,Xt=Ht===null?null:b-Ht,Sr=Xt===null?"(Δ -)":`(Δ ${Xt>0?"+":""}${B(Xt)})`,_r=Xt===null?"muted":Xt<0?"danger":Xt>0?"budget-under":"muted";return`<tr>
                  <td>${Be(a.month)}</td>
                  <td>${B(a.summary.foodCents)} <span class="${ve(j)}">${me(j)}</span></td>
                  <td>${B(a.summary.goingOutCents)} <span class="${ve(T)}">${me(T)}</span></td>
                  <td>${B(a.summary.fixedCents)} <span class="${ve(V)}">${me(V)}</span></td>
                  <td>${B(a.summary.variableCents)} <span class="${ve(se)}">${me(se)}</span></td>
                  <td>${B(a.summary.miscCents)} <span class="${ve(le)}">${me(le)}</span></td>
                  <td>${B(a.summary.totalCents)} <span class="${ve(W)}">${me(W)}</span></td>
                  <td>${B(m)} <span class="${xt(ne)}">${me(ne)}</span></td>
                  <td class="${k}">${B(b)} <span class="${_r}">${Sr}</span></td>
                </tr>`}).join("")}
                ${Qn}
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
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${vt(dt)}" />
                    </td>
                    <td>-</td>
                  </tr>${c.incomes.map(a=>`<tr>
                    <td>${a.description}</td>
                    <td>
                      <select data-income-source="${a.id}">
                        <option value="" ${a.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${a.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${a.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${a.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${B(a.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${a.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${B(de)} €</strong>
                </div>
                <div class="column-overview-row ${ge}">
                  <span>Übernahme Vormonat</span>
                  <strong>${c?`${B(dt)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${B(Q)} €</strong>
                </div>
                <div class="column-overview-row ${Ae}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${B(wt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${je(F,p.foodCents)}
                ${je(q,p.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${B(_e)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${B(Ie)} €</strong>
                  </div>
                  <div class="column-overview-row ${Ut}">
                    <span>Diff</span>
                    <strong>${B($e)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${vt(F)}" ${c?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${vt(q)}" ${c?"":"disabled"} />
                </label>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${c?c.days.map(a=>{const o=a.foodCents>0,f=a.goingOutCents>0,h=`${a.isoDate===y?"today-row":""} ${o||f?"day-has-entry":""}`.trim(),m=`amount-input ${o?"day-input-has-value":""}`.trim(),b=`amount-input ${f?"day-input-has-value":""}`.trim();return`<tr class="${h}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${m}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${vt(a.foodCents)}" /></td>
                      <td><input class="${b}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${vt(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${je(N,p.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${vt(N)}" ${c?"":"disabled"} />
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
                ${c?c.fixedCosts.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${vt(a.plannedCents)}" /></td>
                    <td class="${Ue(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${vt(a.actualCents)}" /></td>
                    <td class="${Ue(a.actualCents,a.plannedCents)}">${B(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${je(J,p.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${vt(J)}" ${c?"":"disabled"} />
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
                ${c?c.variablePositions.map(a=>`<tr>
                    <td>${a.name}${a.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${vt(a.budgetCents)}" /></td>
                    <td class="${Ue(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${vt(a.actualCents)}" /></td>
                    <td class="${Ue(a.actualCents,a.budgetCents)}">${B(a.actualCents-a.budgetCents)}</td>
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
              ${je(U,p.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${vt(U)}" ${c?"":"disabled"} />
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
                ${c?c.miscCosts.map(a=>`<tr>
                    <td>${a.description}</td>
                    <td>${B(a.amountCents)}</td>
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
          <p class="muted">Letztes verwendetes Backup: ${or}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(g.topModal||g.showUnexportedChangeLogModal)),pa(),Ze(),rn()}function pa(){const l=E.querySelector("#theme-select"),c=E.querySelector("#open-years-modal"),y=E.querySelector("#open-fixed-modal"),p=E.querySelector("#open-variable-fixed-modal"),v=E.querySelector("#open-dashboard-modal"),P=E.querySelector("#panel-modal-close"),F=E.querySelector("#panel-modal-backdrop"),q=E.querySelector("#open-unexported-change-log"),N=E.querySelector("#unexported-change-log-close"),J=E.querySelector("#unexported-change-log-backdrop"),U=E.querySelector("#new-year"),X=E.querySelector("#create-year"),H=E.querySelector("#year-select"),ke=E.querySelector("#month-select");l?.addEventListener("change",()=>{const S=l.value;wr(S)&&jt(S)}),c?.addEventListener("click",()=>{ot("years")}),y?.addEventListener("click",()=>{ot("fixed")}),p?.addEventListener("click",()=>{ot("variable-fixed")}),v?.addEventListener("click",()=>{ot("dashboard")}),q?.addEventListener("click",()=>{Xa()}),N?.addEventListener("click",()=>{sa()}),J?.addEventListener("click",S=>{S.target===J&&sa()}),E.querySelectorAll("[data-dashboard-tab]").forEach(S=>{S.addEventListener("click",()=>{const D=S.dataset.dashboardTab;D!=="year"&&D!=="food"&&D!=="all"||(g.dashboardTab=D,Z())})});const Ve=E.querySelector("#dashboard-year-select");Ve?.addEventListener("change",()=>{const S=Number.parseInt(Ve.value,10);Number.isInteger(S)&&(g.dashboardYear=S,Z())}),P?.addEventListener("click",()=>{Bt()}),F?.addEventListener("click",S=>{S.target===F&&Bt()}),g.topModal&&window.setTimeout(()=>{P?.focus()},0),g.showUnexportedChangeLogModal&&window.setTimeout(()=>{N?.focus()},0),X?.addEventListener("click",async()=>{const S=Number.parseInt(U?.value??"",10);if(!Number.isInteger(S)){alert("Bitte gültiges Jahr eingeben.");return}await Zt(S)}),H?.addEventListener("change",()=>{g.selectedYear=Number.parseInt(H.value,10),g.selectedMonth=Lt(),Z()}),ke?.addEventListener("change",()=>{g.selectedMonth=Number.parseInt(ke.value,10),Z()});const Me=E.querySelector("#fixed-template-name"),de=E.querySelector("#fixed-template-amount"),ct=E.querySelector("#add-fixed-template"),De=E.querySelector("#cancel-fixed-template-edit"),rt=E.querySelector("#annual-variable-fixed-name"),bt=E.querySelector("#annual-variable-fixed-date"),dt=E.querySelector("#annual-variable-fixed-amount"),K=E.querySelector("#add-annual-variable-fixed-template");ct?.addEventListener("click",async()=>{const S=Me?.value??"",D=Ee(de?.value??"0");await fa(S,D),Me&&(Me.value=""),de&&(de.value="")}),De?.addEventListener("click",()=>{nr()}),K?.addEventListener("click",async()=>{const S=rt?.value??"",D=bt?.value??"",Le=Ee(dt?.value??"0");await fn(S,D,Le),rt&&(rt.value=""),bt&&(bt.value=""),dt&&(dt.value="")}),E.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(S=>{S.addEventListener("click",async()=>{const D=S.dataset.removeAnnualVariableFixedTemplate;D&&await ha(D)})}),E.querySelectorAll("[data-edit-fixed-template]").forEach(S=>{S.addEventListener("click",()=>{const D=S.dataset.editFixedTemplate;D&&tr(D)})}),E.querySelectorAll("[data-remove-fixed-template]").forEach(S=>{S.addEventListener("click",async()=>{const D=S.dataset.removeFixedTemplate;D&&await dn(D)})}),E.querySelectorAll("[data-day-food]").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault(),S.blur(),lt(S)}),S.addEventListener("change",async()=>{const D=S.dataset.dayFood;D&&await $n(D,"foodCents",Ee(S.value))})}),E.querySelectorAll("[data-day-going]").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault(),S.blur(),lt(S)}),S.addEventListener("change",async()=>{const D=S.dataset.dayGoing;D&&await $n(D,"goingOutCents",Ee(S.value))})}),E.querySelectorAll("[data-fixed-actual]").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault(),S.blur(),lt(S)}),S.addEventListener("change",async()=>{const D=S.dataset.fixedActual;D&&await we(D,Ee(S.value))})}),E.querySelectorAll("[data-fixed-planned]").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault(),S.blur(),lt(S)}),S.addEventListener("change",async()=>{const D=S.dataset.fixedPlanned;D&&await Ke(D,Ee(S.value))})});const Q=E.querySelector("#fixed-budget");Q?.addEventListener("click",S=>{S.preventDefault(),Q.blur(),lt(Q)}),Q?.addEventListener("change",async()=>{await Vn(Ee(Q.value))});const Ot=E.querySelector("#food-budget");Ot?.addEventListener("click",S=>{S.preventDefault(),Ot.blur(),lt(Ot)}),Ot?.addEventListener("change",async()=>{await Yn(Ee(Ot.value))});const wt=E.querySelector("#going-out-budget");wt?.addEventListener("click",S=>{S.preventDefault(),wt.blur(),lt(wt)}),wt?.addEventListener("change",async()=>{await rr(Ee(wt.value))});const st=E.querySelector("#misc-budget");st?.addEventListener("click",S=>{S.preventDefault(),st.blur(),lt(st)}),st?.addEventListener("change",async()=>{await Vt(Ee(st.value))});const ye=E.querySelector("#variable-budget");ye?.addEventListener("click",S=>{S.preventDefault(),ye.blur(),lt(ye)}),ye?.addEventListener("change",async()=>{await hn(Ee(ye.value))});const Ge=E.querySelector("#variable-position-name"),ge=E.querySelector("#variable-position-budget"),Ae=E.querySelector("#add-variable-position"),ft=E.querySelector("#add-variable-position-recurring"),Ye=E.querySelector("#misc-description"),ie=E.querySelector("#misc-amount"),Fe=E.querySelector("#add-misc"),yt=E.querySelector("#add-misc-recurring"),ze=E.querySelector("#income-description"),ht=E.querySelector("#income-source"),qe=E.querySelector("#income-amount"),Sn=E.querySelector("#add-income"),oe=E.querySelector("#add-income-recurring"),pe=E.querySelector("#fixed-cost-name"),_e=E.querySelector("#fixed-cost-budget"),Ie=E.querySelector("#add-fixed-cost"),$e=E.querySelector("#carryover-override");$e?.addEventListener("click",S=>{S.preventDefault(),$e.blur(),lt($e)}),$e?.addEventListener("change",async()=>{const S=$e.value;if(!S.trim()){await Bn(null);return}await Bn(Ee(S))}),Ie?.addEventListener("click",async()=>{const S=Ee(_e?.value??"0");await ar(pe?.value??"",S),pe&&(pe.value=""),_e&&(_e.value="")}),Ae?.addEventListener("click",async()=>{const S=Ee(ge?.value??"0");await La(Ge?.value??"",S,!1),Ge&&(Ge.value=""),ge&&(ge.value="")}),ft?.addEventListener("click",async()=>{const S=Ee(ge?.value??"0");await La(Ge?.value??"",S,!0),Ge&&(Ge.value=""),ge&&(ge.value="")}),Fe?.addEventListener("click",async()=>{const S=Ee(ie?.value??"0");await zn(Ye?.value??"",S,!1),Ye&&(Ye.value=""),ie&&(ie.value="")}),yt?.addEventListener("click",async()=>{const S=Ee(ie?.value??"0");await zn(Ye?.value??"",S,!0),Ye&&(Ye.value=""),ie&&(ie.value="")}),Sn?.addEventListener("click",async()=>{const S=Ee(qe?.value??"0"),D=ht?.value,Le=D==="balance"||D==="fresh"||D==="salary"?D:void 0;await zt(ze?.value??"",S,Le,!1),ze&&(ze.value=""),qe&&(qe.value=""),ht&&(ht.value="salary")}),oe?.addEventListener("click",async()=>{const S=Ee(qe?.value??"0"),D=ht?.value,Le=D==="balance"||D==="fresh"||D==="salary"?D:void 0;await zt(ze?.value??"",S,Le,!0),ze&&(ze.value=""),qe&&(qe.value=""),ht&&(ht.value="salary")}),E.querySelectorAll("[data-income-source]").forEach(S=>{S.addEventListener("change",async()=>{const D=S.dataset.incomeSource;if(!D)return;const Le=S.value;await Dt(D,Le==="balance"||Le==="fresh"||Le==="salary"?Le:void 0)})}),E.querySelectorAll("[data-variable-position-budget]").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault(),S.blur(),lt(S)}),S.addEventListener("change",async()=>{const D=S.dataset.variablePositionBudget;D&&await ja(D,Ee(S.value))})}),E.querySelectorAll("[data-variable-position-actual]").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault(),S.blur(),lt(S)}),S.addEventListener("change",async()=>{const D=S.dataset.variablePositionActual;D&&await Yt(D,Ee(S.value))})}),E.querySelectorAll("[data-remove-variable-position]").forEach(S=>{S.addEventListener("click",async()=>{const D=S.dataset.removeVariablePosition;D&&await en(D)})}),E.querySelectorAll("[data-move-variable-position-next]").forEach(S=>{S.addEventListener("click",async()=>{const D=S.dataset.moveVariablePositionNext;D&&await Ra(D)})}),E.querySelectorAll("[data-remove-fixed]").forEach(S=>{S.addEventListener("click",async()=>{const D=S.dataset.removeFixed;D&&await Rn(D)})}),E.querySelectorAll("[data-remove-income]").forEach(S=>{S.addEventListener("click",async()=>{const D=S.dataset.removeIncome;D&&await Va(D)})}),E.querySelectorAll("[data-remove-misc]").forEach(S=>{S.addEventListener("click",async()=>{const D=S.dataset.removeMisc;D&&await Pe(D)})});const Ut=E.querySelector("#backup-export"),kt=E.querySelector("#backup-import");E.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Ut?.addEventListener("click",async()=>{await pn()}),kt?.addEventListener("change",async()=>{const S=kt.files?.[0];if(S){try{await Un(S)}catch(D){console.error("Backup-Import fehlgeschlagen",D),be("Backup konnte nicht importiert werden.","error")}kt.value=""}})}return{init:la}}const Rr="modulepreload",Vr=function(E){return"/habu26/"+E},kr={},Yr=function(g,Se,Y){let ue=Promise.resolve();if(Se&&Se.length>0){let He=function(Xe){return Promise.all(Xe.map(ae=>Promise.resolve(ae).then(Qe=>({status:"fulfilled",value:Qe}),Qe=>({status:"rejected",reason:Qe}))))};var fe=He;document.getElementsByTagName("link");const te=document.querySelector("meta[property=csp-nonce]"),ce=te?.nonce||te?.getAttribute("nonce");ue=He(Se.map(Xe=>{if(Xe=Vr(Xe),Xe in kr)return;kr[Xe]=!0;const ae=Xe.endsWith(".css"),Qe=ae?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Xe}"]${Qe}`))return;const Ze=document.createElement("link");if(Ze.rel=ae?"stylesheet":Rr,ae||(Ze.as="script"),Ze.crossOrigin="",Ze.href=Xe,ce&&Ze.setAttribute("nonce",ce),document.head.appendChild(Ze),ae)return new Promise((ot,Bt)=>{Ze.addEventListener("load",ot),Ze.addEventListener("error",()=>Bt(new Error(`Unable to preload CSS for ${Xe}`)))})}))}function ee(te){const ce=new Event("vite:preloadError",{cancelable:!0});if(ce.payload=te,window.dispatchEvent(ce),!ce.defaultPrevented)throw te}return ue.then(te=>{for(const ce of te||[])ce.status==="rejected"&&ee(ce.reason);return g().catch(ee)})};function zr(E={}){const{immediate:g=!1,onNeedRefresh:Se,onOfflineReady:Y,onRegistered:ue,onRegisteredSW:ee,onRegisterError:fe}=E;let te,ce;const He=async(ae=!0)=>{await ce};async function Xe(){if("serviceWorker"in navigator){if(te=await Yr(async()=>{const{Workbox:ae}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ae}},[]).then(({Workbox:ae})=>new ae("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ae=>{fe?.(ae)}),!te)return;te.addEventListener("activated",ae=>{(ae.isUpdate||ae.isExternal)&&window.location.reload()}),te.addEventListener("installed",ae=>{ae.isUpdate||Y?.()}),te.register({immediate:g}).then(ae=>{ee?ee("/habu26/sw.js",ae):ue?.(ae)}).catch(ae=>{fe?.(ae)})}}return ce=Xe(),He}function Ur(){zr({immediate:!0})}const Br=document.getElementById("app");if(!Br)throw new Error("App-Container nicht gefunden.");jr(Br).init();Ur();
