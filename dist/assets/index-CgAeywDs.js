(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const be of document.querySelectorAll('link[rel="modulepreload"]'))G(be);new MutationObserver(be=>{for(const ae of be)if(ae.type==="childList")for(const ke of ae.addedNodes)ke.tagName==="LINK"&&ke.rel==="modulepreload"&&G(ke)}).observe(document,{childList:!0,subtree:!0});function Fe(be){const ae={};return be.integrity&&(ae.integrity=be.integrity),be.referrerPolicy&&(ae.referrerPolicy=be.referrerPolicy),be.crossOrigin==="use-credentials"?ae.credentials="include":be.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function G(be){if(be.ep)return;be.ep=!0;const ae=Fe(be);fetch(be.href,ae)}})();const Vs=[1,2,3,4,5,6,7,8,9,10,11,12];function qr(){return new Date().toISOString()}function At(P){const h=Math.random().toString(36).slice(2,10);return`${P}_${Date.now()}_${h}`}function Ys(P,h){const Fe=new Date(P,h,0).getDate(),G=[];for(let be=1;be<=Fe;be+=1){const ae=new Date(Date.UTC(P,h-1,be));G.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return G}function zs(P){return P.map(h=>({id:At("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function ms(P,h,Fe){const G=h.reduce((ae,ke)=>ae+ke.plannedCents,0),be=Vs.map(ae=>({month:ae,days:Ys(P,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:zs(h),fixedBudgetCents:G,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:P,createdAt:qr(),templateVersion:Fe,months:be}}function vs(P,h){return{id:At("expense"),description:P,amountCents:h,createdAt:qr()}}function gs(P,h,Fe){const G={id:At("income"),description:P,amountCents:h,createdAt:qr()};return Fe?{...G,incomeSource:Fe}:G}var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ws(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var gr={exports:{}},Gs=gr.exports,bs;function Hs(){return bs||(bs=1,(function(P,h){((Fe,G)=>{P.exports=G()})(Gs,function(){var Fe=function(e,t){return(Fe=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},G=function(){return(G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function be(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Us,ke=Object.keys,ie=Array.isArray;function ye(e,t){return typeof t=="object"&&ke(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var ht=Object.getPrototypeOf,Ge={}.hasOwnProperty;function le(e,t){return Ge.call(e,t)}function Ct(e,t){typeof t=="function"&&(t=t(ht(e))),(typeof Reflect>"u"?ke:Reflect.ownKeys)(t).forEach(function(n){vt(e,n,t[n])})}var mt=Object.defineProperty;function vt(e,t,n,a){mt(e,t,ye(n&&le(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function sn(e){return{from:function(t){return e.prototype=Object.create(t.prototype),vt(e.prototype,"constructor",e),{extend:Ct.bind(null,e.prototype)}}}}var Qn=Object.getOwnPropertyDescriptor,Ba=[].slice;function Zn(e,t,n){return Ba.call(e,t,n)}function ea(e,t){return t(e)}function On(e){if(!e)throw new Error("Assertion Failed")}function ta(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function Wt(e,t){if(typeof t=="string"&&le(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Wt(e,t[a]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:Wt(c,t.substr(u+1))}function gt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){On(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)gt(e,t[a],n[a])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:gt(c=(c=e[i])&&le(e,i)?c:e[i]={},u,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function _a(e){var t,n={};for(t in e)le(e,t)&&(n[t]=e[t]);return n}var Cr=[].concat;function Ma(e){return Cr.apply([],e)}var Kt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ma([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),Ha=new Set(Kt.map(function(e){return ae[e]})),Fn=null;function bt(e){return Fn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Fn.get(n);if(a)return a;if(ie(n)){a=[],Fn.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Ha.has(n.constructor))a=n;else{var c,u=ht(n);for(c in a=u===Object.prototype?{}:Object.create(u),Fn.set(n,a),n)le(n,c)&&(a[c]=t(n[c]))}return a})(e),Fn=null,e}var In={}.toString;function Pa(e){return In.call(e).slice(8,-1)}var Ta=typeof Symbol<"u"?Symbol.iterator:"@@iterator",xr=typeof Ta=="symbol"?function(e){var t;return e!=null&&(t=e[Ta])&&t.apply(e)}:function(){return null};function on(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var et={};function me(e){var t,n,a,s;if(arguments.length===1){if(ie(e))return e.slice();if(this===et&&typeof e=="string")return[e];if(s=xr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var fn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Kt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],tt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Kt),Ja={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function hn(e,t){this.name=e,this.message=t}function Xa(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function Et(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Xa(e,t)}function $n(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Xa(e,this.failures)}sn(hn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),sn(Et).from(hn),sn($n).from(hn);var na=tt.reduce(function(e,t){return e[t]=t+"Error",e},{}),kr=hn,ee=tt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Ja[t]||n,this.inner=null)}return sn(a).from(kr),e[t]=a,e},{}),Qa=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,Kt.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));Kt=tt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function we(){}function Dn(e){return e}function wr(e,t){return e==null||e===Dn?t:function(n){return t(e(n))}}function pn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Za(e,t){return e===we?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?pn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?pn(s,this.onerror):s),i!==void 0?i:n}}function $r(e,t){return e===we?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?pn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?pn(a,this.onerror):a)}}function Sr(e,t){return e===we?t:function(s){var a=e.apply(this,arguments),s=(ye(s,a),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?pn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?pn(i,this.onerror):i),a===void 0?c===void 0?void 0:c:ye(a,c)}}function Aa(e,t){return e===we?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Nn(e,t){return e===we?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}Kt.ModifyError=Et,Kt.DexieError=hn,Kt.BulkError=$n;var xt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Oa(e){xt=e}var Gt={},Ke=100,Ln=typeof Promise>"u"?[]:(tt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ln=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ht(Ln),tt]:[tt,ht(tt),tt]),tt=Ln[0],An=Ln[1],An=An&&An.then,jt=tt&&tt.constructor,Sn=!!Ln[2],qn=function(e,t){Rt.push([e,t]),En&&(queueMicrotask(Na),En=!1)},Kn=!0,En=!0,mn=[],Bn=[],Fa=Dn,je={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:we,pgp:!1,env:{},finalize:we},X=je,Rt=[],Ot=0,aa=[];function Y(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=X;if(typeof e!="function"){if(e!==Gt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&He(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var c=a._lib&&vn();i&&typeof i.then=="function"?n(a,function(u,y){i instanceof Y?i._then(u,y):i.then(u,y)}):(a._state=!0,a._value=i,Bt(a)),c&&ln()}},He.bind(null,a))}catch(i){He(a,i)}})(this,e)}var Ia={get:function(){var e=X,t=oa;function n(a,s){var i=this,c=!e.global&&(e!==X||t!==oa),u=c&&!un(),y=new Y(function(S,g){he(i,new Da(nr(a,e,c,u),nr(s,e,c,u),S,g,e))});return this._consoleTask&&(y._consoleTask=this._consoleTask),y}return n.prototype=Gt,n},set:function(e){vt(this,"then",e&&e.prototype===Gt?Ia:{get:function(){return e},set:Ia.set})}};function Da(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function He(e,t){var n,a;Bn.push(t),e._state===null&&(n=e._lib&&vn(),t=Fa(t),e._state=!1,e._value=t,a=e,mn.some(function(s){return s._value===a._value})||mn.push(a),Bt(e),n)&&ln()}function Bt(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)he(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),Ot===0&&(++Ot,qn(function(){--Ot==0&&ra()},[]))}function he(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ot,qn(_n,[n,e,t])}}function _n(e,t,n){try{var a,s=t._value;!t._state&&Bn.length&&(Bn=[]),a=xt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||Bn.indexOf(s)!==-1||(i=>{for(var c=mn.length;c;)if(mn[--c]._value===i._value)return mn.splice(c,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--Ot==0&&ra(),--n.psd.ref||n.psd.finalize()}}function Na(){gn(je,function(){vn()&&ln()})}function vn(){var e=Kn;return En=Kn=!1,e}function ln(){var e,t,n;do for(;0<Rt.length;)for(e=Rt,Rt=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<Rt.length);En=Kn=!0}function ra(){for(var e=mn,t=(mn=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),aa.slice(0)),n=t.length;n;)t[--n]()}function Ft(e){return new Y(Gt,!1,e)}function ve(e,t){var n=X;return function(){var a=vn(),s=X;try{return Ht(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Ht(s,!1),a&&ln()}}}Ct(Y.prototype,{then:Ia,_then:function(e,t){he(this,new Da(null,null,e,t,X))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:Ft)(a)}):this.then(null,function(a){return(a&&a.name===t?n:Ft)(a)}))},finally:function(e){return this.then(function(t){return Y.resolve(e()).then(function(){return t})},function(t){return Y.resolve(e()).then(function(){return Ft(t)})})},timeout:function(e,t){var n=this;return e<1/0?new Y(function(a,s){var i=setTimeout(function(){return s(new ee.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&vt(Y.prototype,Symbol.toStringTag,"Dexie.Promise"),je.env=tr(),Ct(Y,{all:function(){var e=me.apply(null,arguments).map(la);return new Y(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return Y.resolve(s).then(function(c){e[i]=c,--a||t(e)},n)})})},resolve:function(e){return e instanceof Y?e:e&&typeof e.then=="function"?new Y(function(t,n){e.then(t,n)}):new Y(Gt,!0,e)},reject:Ft,race:function(){var e=me.apply(null,arguments).map(la);return new Y(function(t,n){e.map(function(a){return Y.resolve(a).then(t,n)})})},PSD:{get:function(){return X},set:function(e){return X=e}},totalEchoes:{get:function(){return oa}},newPSD:cn,usePSD:gn,scheduler:{get:function(){return qn},set:function(e){qn=e}},rejectionMapper:{get:function(){return Fa},set:function(e){Fa=e}},follow:function(e,t){return new Y(function(n,a){return cn(function(s,i){var c=X;c.unhandleds=[],c.onunhandled=i,c.finalize=pn(function(){var u,y=this;u=function(){y.unhandleds.length===0?s():i(y.unhandleds[0])},aa.push(function S(){u(),aa.splice(aa.indexOf(S),1)}),++Ot,qn(function(){--Ot==0&&ra()},[])},c.finalize),e()},t,n,a)})}}),jt&&(jt.allSettled&&vt(Y,"allSettled",function(){var e=me.apply(null,arguments).map(la);return new Y(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return Y.resolve(s).then(function(c){return a[i]={status:"fulfilled",value:c}},function(c){return a[i]={status:"rejected",reason:c}}).then(function(){return--n||t(a)})})})}),jt.any&&typeof AggregateError<"u"&&vt(Y,"any",function(){var e=me.apply(null,arguments).map(la);return new Y(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,c){return Y.resolve(i).then(function(u){return t(u)},function(u){s[c]=u,--a||n(new AggregateError(s))})})})}),jt.withResolvers)&&(Y.withResolvers=jt.withResolvers);var Xe={awaits:0,echoes:0,id:0},er=0,sa=[],ia=0,oa=0,Er=0;function cn(e,c,n,a){var s=X,i=Object.create(s),c=(i.parent=s,i.ref=0,i.global=!1,i.id=++Er,je.env,i.env=Sn?{Promise:Y,PromiseProp:{value:Y,configurable:!0,writable:!0},all:Y.all,race:Y.race,allSettled:Y.allSettled,any:Y.any,resolve:Y.resolve,reject:Y.reject}:{},c&&ye(i,c),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},gn(i,e,n,a));return i.ref===0&&i.finalize(),c}function Mn(){return Xe.id||(Xe.id=++er),++Xe.awaits,Xe.echoes+=Ke,Xe.id}function un(){return!!Xe.awaits&&(--Xe.awaits==0&&(Xe.id=0),Xe.echoes=Xe.awaits*Ke,!0)}function la(e){return Xe.echoes&&e&&e.constructor===jt?(Mn(),e.then(function(t){return un(),t},function(t){return un(),Re(t)})):e}function Br(){var e=sa[sa.length-1];sa.pop(),Ht(e,!1)}function Ht(e,t){var n,a,s=X;(t?!Xe.echoes||ia++&&e===X:!ia||--ia&&e===X)||queueMicrotask(t?(function(i){++oa,Xe.echoes&&--Xe.echoes!=0||(Xe.echoes=Xe.awaits=Xe.id=0),sa.push(X),Ht(i,!0)}).bind(null,e):Br),e!==X&&(X=e,s===je&&(je.env=tr()),Sn)&&(n=je.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(ae,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function tr(){var e=ae.Promise;return Sn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function gn(e,t,n,a,s){var i=X;try{return Ht(e,!0),t(n,a,s)}finally{Ht(i,!1)}}function nr(e,t,n,a){return typeof e!="function"?e:function(){var s=X;n&&Mn(),Ht(t,!0);try{return e.apply(this,arguments)}finally{Ht(s,!1),a&&queueMicrotask(un)}}}function La(e){Promise===jt&&Xe.echoes===0?ia===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+An).indexOf("[native code]")===-1&&(Mn=un=we);var Re=Y.reject,bn="￿",Jt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ar="String expected.",Pn=[],dn="__dbnames",ca="readonly",ua="readwrite";function yn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var rr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function da(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=bt(t))[e],t}}function sr(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function de(e,t){try{var n=ir(e),a=ir(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=qa(e),i=qa(t),c=s.length,u=i.length,y=c<u?c:u,S=0;S<y;++S)if(s[S]!==i[S])return s[S]<i[S]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var g=e,v=t,x=g.length,k=v.length,m=x<k?x:k,b=0;b<m;++b){var E=de(g[b],v[b]);if(E!==0)return E}return x===k?0:x<k?-1:1}}catch{}return NaN}function ir(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Pa(e))==="ArrayBuffer")?"binary":t}function qa(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function fa(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}Ka.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return be(be([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(ie(a))return ie(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var jn=Ka;function Ka(e){this["@@propmod"]=e}function or(e,t){for(var n=ke(t),a=n.length,s=!1,i=0;i<a;++i){var c=n[i],u=t[c],y=Wt(e,c);u instanceof jn?(gt(e,c,u.execute(y)),s=!0):y!==u&&(gt(e,c,u),s=!0)}return s}Be.prototype._trans=function(e,t,n){var a=this._tx||X.trans,s=this.name,i=xt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(S,g,v){if(v.schema[s])return t(v.idbtrans,v);throw new ee.NotFound("Table "+s+" not part of transaction")}var u=vn();try{var y=a&&a.db._novip===this.db._novip?a===X.trans?a._promise(e,c,n):cn(function(){return a._promise(e,c,n)},{trans:a,transless:X.transless||X}):(function S(g,v,x,k){if(g.idbdb&&(g._state.openComplete||X.letThrough||g._vip)){var m=g._createTransaction(v,x,g._dbSchema);try{m.create(),g._state.PR1398_maxLoop=3}catch(b){return b.name===na.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return S(g,v,x,k)})):Re(b)}return m._promise(v,function(b,E){return cn(function(){return X.trans=m,k(b,E,m)})}).then(function(b){if(v==="readwrite")try{m.idbtrans.commit()}catch{}return v==="readonly"?b:m._completion.then(function(){return b})})}if(g._state.openComplete)return Re(new ee.DatabaseClosed(g._state.dbOpenError));if(!g._state.isBeingOpened){if(!g._state.autoOpen)return Re(new ee.DatabaseClosed);g.open().catch(we)}return g._state.dbReadyPromise.then(function(){return S(g,v,x,k)})})(this.db,e,[this.name],c);return i&&(y._consoleTask=i,y=y.catch(function(S){return console.trace(S),Re(S)})),y}finally{u&&ln()}},Be.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Re(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},Be.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=ke(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function(S){return 0<=u.keyPath.indexOf(S)})){for(var y=0;y<t.length;++y)if(t.indexOf(u.keyPath[y])===-1)return!1;return!0}return!1}).sort(function(u,y){return u.keyPath.length-y.keyPath.length})[0];if(n&&this.db._maxKey!==bn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&xt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(u,y){return de(u,y)===0}var c=t.reduce(function(g,y){var S=g[0],g=g[1],v=a[y],x=e[y];return[S||v,S||!v?yn(g,v&&v.multi?function(k){return k=Wt(k,y),ie(k)&&k.some(function(m){return s(x,m)})}:function(k){return s(x,Wt(k,y))}):g]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Be.prototype.filter=function(e){return this.toCollection().and(e)},Be.prototype.count=function(e){return this.toCollection().count(e)},Be.prototype.offset=function(e){return this.toCollection().offset(e)},Be.prototype.limit=function(e){return this.toCollection().limit(e)},Be.prototype.each=function(e){return this.toCollection().each(e)},Be.prototype.toArray=function(e){return this.toCollection().toArray(e)},Be.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Be.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},Be.prototype.reverse=function(){return this.toCollection().reverse()},Be.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof sr&&(e=(c=>{var u=g,y=c;if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");function S(){this.constructor=u}function g(){return c!==null&&c.apply(this,arguments)||this}return Fe(u,y),u.prototype=y===null?Object.create(y):(S.prototype=y.prototype,new S),Object.defineProperty(g.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),g.prototype.table=function(){return n},g})(e)),new Set),s=e.prototype;s;s=ht(s))Object.getOwnPropertyNames(s).forEach(function(c){return a.add(c)});function i(c){if(!c)return c;var u,y=Object.create(e.prototype);for(u in c)if(!a.has(u))try{y[u]=c[u]}catch{}return y}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},Be.prototype.defineClass=function(){return this.mapToClass(function(e){ye(this,e)})},Be.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=da(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},Be.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var c=i??{};return or(c,t),a&&gt(c,a,e),n.core.mutate({trans:s,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):!!i})})})},Be.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=Wt(e,this.schema.primKey.keyPath))===void 0?Re(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Be.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=da(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},Be.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return fa(t,[e],a)}).then(function(a){return a.numFailures?Y.reject(a.failures[0]):void 0})})},Be.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:rr}).then(function(n){return fa(e,null,n)})}).then(function(t){return t.numFailures?Y.reject(t.failures[0]):void 0})},Be.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},Be.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,S=u.auto,u=u.keyPath;if(u&&s)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,S=u&&S?e.map(da(u)):e;return a.core.mutate({trans:c,type:"add",keys:s,values:S,wantResults:i}).then(function(g){var v=g.numFailures,x=g.failures;if(v===0)return i?g.results:g.lastResult;throw new $n("".concat(a.name,".bulkAdd(): ").concat(v," of ").concat(y," operations failed"),x)})})},Be.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,S=u.auto,u=u.keyPath;if(u&&s)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,S=u&&S?e.map(da(u)):e;return a.core.mutate({trans:c,type:"put",keys:s,values:S,wantResults:i}).then(function(g){var v=g.numFailures,x=g.failures;if(v===0)return i?g.results:g.lastResult;throw new $n("".concat(a.name,".bulkPut(): ").concat(v," of ").concat(y," operations failed"),x)})})},Be.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(c){return c.key}),s=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:a,cache:"clone"}).then(function(u){var y=[],S=[],g=(e.forEach(function(v,x){var k=v.key,m=v.changes,b=u[x];if(b){for(var E=0,_=Object.keys(m);E<_.length;E++){var $=_[E],T=m[$];if($===t.schema.primKey.keyPath){if(de(T,k)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else gt(b,$,T)}i.push(x),y.push(k),S.push(b)}}),y.length);return n.mutate({trans:c,type:"put",keys:y,values:S,updates:{keys:a,changeSpecs:s}}).then(function(v){var x=v.numFailures,k=v.failures;if(x===0)return g;for(var m=0,b=Object.keys(k);m<b.length;m++){var E,_=b[m],$=i[Number(_)];$!=null&&(E=k[_],delete k[_],k[$]=E)}throw new $n("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(g," operations failed"),k)})})})},Be.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return fa(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new $n("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var ne=Be;function Be(){}function o(e){function t(c,u){if(u){for(var y=arguments.length,S=new Array(y-1);--y;)S[y-1]=arguments[y];return n[c].subscribe.apply(null,S),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(c,u,y){var S,g;if(typeof c!="object")return u=u||Aa,g={subscribers:[],fire:y=y||we,subscribe:function(v){g.subscribers.indexOf(v)===-1&&(g.subscribers.push(v),g.fire=u(g.fire,v))},unsubscribe:function(v){g.subscribers=g.subscribers.filter(function(x){return x!==v}),g.fire=g.subscribers.reduce(u,y)}},n[c]=t[c]=g;ke(S=c).forEach(function(v){var x=S[v];if(ie(x))i(v,S[v][0],S[v][1]);else{if(x!=="asap")throw new ee.InvalidArgument("Invalid event config");var k=i(v,Dn,function(){for(var m=arguments.length,b=new Array(m);m--;)b[m]=arguments[m];k.subscribers.forEach(function(E){ta(function(){E.apply(null,b)})})})}})}}function l(e,t){return sn(t).from({prototype:e}),t}function f(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function d(e,t){e.filter=yn(e.filter,t)}function C(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return yn(a(),t())}:t,e.justLimit=n&&!a}function M(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function O(e,t,n){var a=M(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function L(e,t,n,a){var s,i,c=e.replayFilter?yn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(u,y,S){var g,v;c&&!c(y,S,function(x){return y.stop(x)},function(x){return y.fail(x)})||((v=""+(g=y.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(g)),le(s,v))||(s[v]=!0,t(u,y,S))},Promise.all([e.or._iterate(i,n),q(O(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):q(O(e,a,n),yn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function q(e,t,n,a){var s=ve(a?function(i,c,u){return n(a(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=we},function(u){i.fail(u),c=we})||s(i.value,i,function(u){return c=u}),c()})})}F.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Re.bind(null,n.error)):n.table._trans("readonly",e).then(t)},F.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Re.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},F.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=yn(t.algorithm,e)},F.prototype._iterate=function(e,t){return L(this._ctx,e,t,this._ctx.table.core)},F.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ye(n,e),t._ctx=n,t},F.prototype.raw=function(){return this._ctx.valueMapper=null,this},F.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return L(t,e,n,t.table.core)})},F.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return f(s,!0)?i.count({trans:n,query:{index:M(s,i.schema),range:s.range}}).then(function(c){return Math.min(c,s.limit)}):(a=0,L(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},F.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(y,S){return S?i(y[n[S]],S-1):y[a]}var c=this._ctx.dir==="next"?1:-1;function u(y,S){return de(i(y,s),i(S,s))*c}return this.toArray(function(y){return y.sort(u)}).then(t)},F.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,c=t._ctx;return c.dir==="next"&&f(c,!0)&&0<c.limit?(a=c.valueMapper,s=M(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:s,range:c.range}}).then(function(u){return u=u.result,a?u.map(a):u})):(i=[],L(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},F.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,f(t)?C(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):C(t,function(){var n=e;return function(){return--n<0}})),this},F.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),C(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},F.prototype.until=function(e,t){return d(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},F.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},F.prototype.last=function(e){return this.reverse().first(e)},F.prototype.filter=function(e){var t;return d(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=yn(t.isMatch,e),this},F.prototype.and=function(e){return this.filter(e)},F.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},F.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},F.prototype.desc=function(){return this.reverse()},F.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},F.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},F.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},F.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},F.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&f(t,!0)&&0<t.limit)return this._read(function(a){var s=M(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},F.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},F.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},F.prototype.lastKey=function(e){return this.reverse().firstKey(e)},F.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},d(this._ctx,function(a){var a=a.primaryKey.toString(),s=le(e,a);return e[a]=!0,!s})),this},F.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(b,E){var _=E.failures;x+=b-E.numFailures;for(var $=0,T=ke(_);$<T.length;$++){var A=T[$];v.push(_[A])}}var i=typeof e=="function"?e:function(b){return or(b,e)},c=n.table.core,g=c.schema.primaryKey,u=g.outbound,y=g.extractKey,S=200,g=t.db._options.modifyChunkSize,v=(g&&(S=typeof g=="object"?g[c.name]||g["*"]||200:g),[]),x=0,k=[],m=e===Q;return t.clone().primaryKeys().then(function(b){function E($){var T=Math.min(S,b.length-$),A=b.slice($,$+T);return(m?Promise.resolve([]):c.getMany({trans:a,keys:A,cache:"immutable"})).then(function(N){var V=[],I=[],U=u?[]:null,z=m?A:[];if(!m)for(var D=0;D<T;++D){var W=N[D],fe={value:bt(W),primKey:b[$+D]};i.call(fe,fe.value,fe)!==!1&&(fe.value==null?z.push(b[$+D]):u||de(y(W),y(fe.value))===0?(I.push(fe.value),u&&U.push(b[$+D])):(z.push(b[$+D]),V.push(fe.value)))}return Promise.resolve(0<V.length&&c.mutate({trans:a,type:"add",values:V}).then(function(Ce){for(var Z in Ce.failures)z.splice(parseInt(Z),1);s(V.length,Ce)})).then(function(){return(0<I.length||_&&typeof e=="object")&&c.mutate({trans:a,type:"put",keys:U,values:I,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<$}).then(function(Ce){return s(I.length,Ce)})}).then(function(){return(0<z.length||_&&m)&&c.mutate({trans:a,type:"delete",keys:z,criteria:_,isAdditionalChunk:0<$}).then(function(Ce){return fa(n.table,z,Ce)}).then(function(Ce){return s(z.length,Ce)})}).then(function(){return b.length>$+T&&E($+S)})})}var _=f(n)&&n.limit===1/0&&(typeof e!="function"||m)&&{index:n.index,range:n.range};return E(0).then(function(){if(0<v.length)throw new Et("Error modifying one or more objects",v,x,k);return b.length})})})},F.prototype.delete=function(){var e=this._ctx,t=e.range;return!f(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Q):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(y){var u=y.failures,y=y.numFailures;if(y)throw new Et("Could not delete some values",Object.keys(u).map(function(S){return u[S]}),i-y);return i-y})})})};var H=F;function F(){}var Q=function(e,t){return t.value=null};function te(e,t){return e<t?-1:e===t?0:1}function ge(e,t){return t<e?-1:e===t?0:1}function ue(e,t,n){return e=e instanceof Se?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Ae(e){return new e.Collection(e,function(){return nt("")}).limit(0)}function ce(k,t,n,a){var s,i,c,u,y,S,g,v=n.length;if(!n.every(function(b){return typeof b=="string"}))return ue(k,ar);function x(b){s=b==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},i=b==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=b==="next"?te:ge;var E=n.map(function(_){return{lower:i(_),upper:s(_)}}).sort(function(_,$){return c(_.lower,$.lower)});u=E.map(function(_){return _.upper}),y=E.map(function(_){return _.lower}),g=(S=b)==="next"?"":a}x("next");var k=new k.Collection(k,function(){return $e(u[0],y[v-1]+a)}),m=(k._ondirectionchange=function(b){x(b)},0);return k._addAlgorithm(function(b,E,_){var $=b.key;if(typeof $=="string"){var T=i($);if(t(T,y,m))return!0;for(var A=null,N=m;N<v;++N){var V=((I,U,z,D,W,fe)=>{for(var Ce=Math.min(I.length,D.length),Z=-1,oe=0;oe<Ce;++oe){var Te=U[oe];if(Te!==D[oe])return W(I[oe],z[oe])<0?I.substr(0,oe)+z[oe]+z.substr(oe+1):W(I[oe],D[oe])<0?I.substr(0,oe)+D[oe]+z.substr(oe+1):0<=Z?I.substr(0,Z)+U[Z]+z.substr(Z+1):null;W(I[oe],Te)<0&&(Z=oe)}return Ce<D.length&&fe==="next"?I+z.substr(I.length):Ce<I.length&&fe==="prev"?I.substr(0,z.length):Z<0?null:I.substr(0,Z)+D[Z]+z.substr(Z+1)})($,T,u[N],y[N],c,S);V===null&&A===null?m=N+1:(A===null||0<c(A,V))&&(A=V)}E(A!==null?function(){b.continue(A+g)}:_)}return!1}),k}function $e(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function nt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(pe.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),pe.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Ae(this):new this.Collection(this,function(){return $e(e,t,!n,!a)})}catch{return ue(this,Jt)}},pe.prototype.equals=function(e){return e==null?ue(this,Jt):new this.Collection(this,function(){return nt(e)})},pe.prototype.above=function(e){return e==null?ue(this,Jt):new this.Collection(this,function(){return $e(e,void 0,!0)})},pe.prototype.aboveOrEqual=function(e){return e==null?ue(this,Jt):new this.Collection(this,function(){return $e(e,void 0,!1)})},pe.prototype.below=function(e){return e==null?ue(this,Jt):new this.Collection(this,function(){return $e(void 0,e,!1,!0)})},pe.prototype.belowOrEqual=function(e){return e==null?ue(this,Jt):new this.Collection(this,function(){return $e(void 0,e)})},pe.prototype.startsWith=function(e){return typeof e!="string"?ue(this,ar):this.between(e,e+bn,!0,!0)},pe.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):ce(this,function(t,n){return t.indexOf(n[0])===0},[e],bn)},pe.prototype.equalsIgnoreCase=function(e){return ce(this,function(t,n){return t===n[0]},[e],"")},pe.prototype.anyOfIgnoreCase=function(){var e=me.apply(et,arguments);return e.length===0?Ae(this):ce(this,function(t,n){return n.indexOf(t)!==-1},e,"")},pe.prototype.startsWithAnyOfIgnoreCase=function(){var e=me.apply(et,arguments);return e.length===0?Ae(this):ce(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,bn)},pe.prototype.anyOf=function(){var e,t,n=this,a=me.apply(et,arguments),s=this._cmp;try{a.sort(s)}catch{return ue(this,Jt)}return a.length===0?Ae(this):((e=new this.Collection(this,function(){return $e(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,c,u){for(var y=i.key;0<s(y,a[t]);)if(++t===a.length)return c(u),!1;return s(y,a[t])===0||(c(function(){i.continue(a[t])}),!1)}),e)},pe.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},pe.prototype.noneOf=function(){var e=me.apply(et,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ue(this,Jt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},pe.prototype.inAnyRange=function(e,_){var n=this,a=this._cmp,s=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return Ae(this);if(!e.every(function($){return $[0]!==void 0&&$[1]!==void 0&&s($[0],$[1])<=0}))return ue(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var y=!_||_.includeLowers!==!1,S=_&&_.includeUppers===!0,g,v=s;function x($,T){return v($[0],T[0])}try{(g=e.reduce(function($,T){for(var A=0,N=$.length;A<N;++A){var V=$[A];if(a(T[0],V[1])<0&&0<a(T[1],V[0])){V[0]=c(V[0],T[0]),V[1]=u(V[1],T[1]);break}}return A===N&&$.push(T),$},[])).sort(x)}catch{return ue(this,Jt)}var k=0,m=S?function($){return 0<s($,g[k][1])}:function($){return 0<=s($,g[k][1])},b=y?function($){return 0<i($,g[k][0])}:function($){return 0<=i($,g[k][0])},E=m,_=new this.Collection(this,function(){return $e(g[0][0],g[g.length-1][1],!y,!S)});return _._ondirectionchange=function($){v=$==="next"?(E=m,s):(E=b,i),g.sort(x)},_._addAlgorithm(function($,T,A){for(var N,V=$.key;E(V);)if(++k===g.length)return T(A),!1;return!m(N=V)&&!b(N)||(n._cmp(V,g[k][1])===0||n._cmp(V,g[k][0])===0||T(function(){v===s?$.continue(g[k][0]):$.continue(g[k][1])}),!1)}),_},pe.prototype.startsWithAnyOf=function(){var e=me.apply(et,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Ae(this):this.inAnyRange(e.map(function(t){return[t,t+bn]})):ue(this,"startsWithAnyOf() only works with strings")};var Se=pe;function pe(){}function Qe(e){return ve(function(t){return K(t),e(t.target.error),!1})}function K(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var it="storagemutated",at="x-storagemutated-1",Ze=o(null,it),It=(re.prototype._lock=function(){return On(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this},re.prototype._unlock=function(){if(On(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{gn(e[1],e[0])}catch{}}return this},re.prototype._locked=function(){return this._reculock&&X.lockOwnerFor!==this},re.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(On(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(a);case"MissingAPIError":throw new ee.MissingAPI(a.message,a);default:throw new ee.OpenFailed(a)}if(!this.active)throw new ee.TransactionInactive;On(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ve(function(s){K(s),t._reject(e.error)}),e.onabort=ve(function(s){K(s),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=ve(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&Ze.storagemutated.fire(e.mutatedParts)})}return this},re.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Re(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Y(function(i,c){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,c)},X])}):n?cn(function(){var i=new Y(function(c,u){s._lock();var y=t(c,u,s);y&&y.then&&y.then(c,u)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new Y(function(i,c){var u=t(i,c,s);u&&u.then&&u.then(i,c)}))._lib=!0,a):Re(new ee.TransactionInactive)},re.prototype._root=function(){return this.parent?this.parent._root():this},re.prototype.waitFor=function(e){var t,n=this._root(),a=Y.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new Y(function(i,c){a.then(function(u){return n._waitingQueue.push(ve(i.bind(null,u)))},function(u){return n._waitingQueue.push(ve(c.bind(null,u)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},re.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},re.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(le(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},re);function re(){}function pt(e,t,n,a,s,i,c,u){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!c?"&":"")+(a?"*":"")+(s?"++":"")+Pe(t),type:u}}function Pe(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ve(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,c){return i=a(i,c),i&&(s[i[0]]=i[1]),s},{}))};var a}var Ie=function(e){try{return e.only([[]]),Ie=function(){return[[]]},[[]]}catch{return Ie=function(){return bn},bn}};function Ye(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Wt(n,t)}:function(n){return Wt(n,e)};var t}function ze(e){return[].slice.call(e)}var ot=0;function Vt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Xt(e,t,y){function a(m){if(m.type===3)return null;if(m.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=m.lower,x=m.upper,k=m.lowerOpen,m=m.upperOpen;return v===void 0?x===void 0?null:t.upperBound(x,!!m):x===void 0?t.lowerBound(v,!!k):t.bound(v,x,!!k,!!m)}function s(g){var v,x=g.name;return{name:x,schema:g,mutate:function(k){var m=k.trans,b=k.type,E=k.keys,_=k.values,$=k.range;return new Promise(function(T,A){T=ve(T);var N=m.objectStore(x),V=N.keyPath==null,I=b==="put"||b==="add";if(!I&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var U,z=(E||_||{length:1}).length;if(E&&_&&E.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(z===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function D(Oe){++Ce,K(Oe)}var W=[],fe=[],Ce=0;if(b==="deleteRange"){if($.type===4)return T({numFailures:Ce,failures:fe,results:[],lastResult:void 0});$.type===3?W.push(U=N.clear()):W.push(U=N.delete(a($)))}else{var V=I?V?[_,E]:[_,null]:[E,null],Z=V[0],oe=V[1];if(I)for(var Te=0;Te<z;++Te)W.push(U=oe&&oe[Te]!==void 0?N[b](Z[Te],oe[Te]):N[b](Z[Te])),U.onerror=D;else for(Te=0;Te<z;++Te)W.push(U=N[b](Z[Te])),U.onerror=D}function Pt(Oe){Oe=Oe.target.result,W.forEach(function(dt,Un){return dt.error!=null&&(fe[Un]=dt.error)}),T({numFailures:Ce,failures:fe,results:b==="delete"?E:W.map(function(dt){return dt.result}),lastResult:Oe})}U.onerror=function(Oe){D(Oe),Pt(Oe)},U.onsuccess=Pt})},getMany:function(k){var m=k.trans,b=k.keys;return new Promise(function(E,_){E=ve(E);for(var $,T=m.objectStore(x),A=b.length,N=new Array(A),V=0,I=0,U=function(W){W=W.target,N[W._pos]=W.result,++I===V&&E(N)},z=Qe(_),D=0;D<A;++D)b[D]!=null&&(($=T.get(b[D]))._pos=D,$.onsuccess=U,$.onerror=z,++V);V===0&&E(N)})},get:function(k){var m=k.trans,b=k.key;return new Promise(function(E,_){E=ve(E);var $=m.objectStore(x).get(b);$.onsuccess=function(T){return E(T.target.result)},$.onerror=Qe(_)})},query:(v=u,function(k){return new Promise(function(m,b){m=ve(m);var E,_,$,I=k.trans,T=k.values,A=k.limit,V=k.query,N=A===1/0?void 0:A,U=V.index,V=V.range,I=I.objectStore(x),I=U.isPrimaryKey?I:I.index(U.name),U=a(V);if(A===0)return m({result:[]});v?((V=T?I.getAll(U,N):I.getAllKeys(U,N)).onsuccess=function(z){return m({result:z.target.result})},V.onerror=Qe(b)):(E=0,_=!T&&"openKeyCursor"in I?I.openKeyCursor(U):I.openCursor(U),$=[],_.onsuccess=function(z){var D=_.result;return!D||($.push(T?D.value:D.primaryKey),++E===A)?m({result:$}):void D.continue()},_.onerror=Qe(b))})}),openCursor:function(k){var m=k.trans,b=k.values,E=k.query,_=k.reverse,$=k.unique;return new Promise(function(T,A){T=ve(T);var I=E.index,N=E.range,V=m.objectStore(x),V=I.isPrimaryKey?V:V.index(I.name),I=_?$?"prevunique":"prev":$?"nextunique":"next",U=!b&&"openKeyCursor"in V?V.openKeyCursor(a(N),I):V.openCursor(a(N),I);U.onerror=Qe(A),U.onsuccess=ve(function(z){var D,W,fe,Ce,Z=U.result;Z?(Z.___id=++ot,Z.done=!1,D=Z.continue.bind(Z),W=(W=Z.continuePrimaryKey)&&W.bind(Z),fe=Z.advance.bind(Z),Ce=function(){throw new Error("Cursor not stopped")},Z.trans=m,Z.stop=Z.continue=Z.continuePrimaryKey=Z.advance=function(){throw new Error("Cursor not started")},Z.fail=ve(A),Z.next=function(){var oe=this,Te=1;return this.start(function(){return Te--?oe.continue():oe.stop()}).then(function(){return oe})},Z.start=function(oe){function Te(){if(U.result)try{oe()}catch(Oe){Z.fail(Oe)}else Z.done=!0,Z.start=function(){throw new Error("Cursor behind last entry")},Z.stop()}var Pt=new Promise(function(Oe,dt){Oe=ve(Oe),U.onerror=Qe(dt),Z.fail=dt,Z.stop=function(Un){Z.stop=Z.continue=Z.continuePrimaryKey=Z.advance=Ce,Oe(Un)}});return U.onsuccess=ve(function(Oe){U.onsuccess=Te,Te()}),Z.continue=D,Z.continuePrimaryKey=W,Z.advance=fe,Te(),Pt},T(Z)):T(null)},A)})},count:function(k){var m=k.query,b=k.trans,E=m.index,_=m.range;return new Promise(function($,T){var A=b.objectStore(x),A=E.isPrimaryKey?A:A.index(E.name),N=a(_),N=N?A.count(N):A.count();N.onsuccess=ve(function(V){return $(V.target.result)}),N.onerror=Qe(T)})}}}i=y,c=ze((y=e).objectStoreNames);var i,y={schema:{name:y.name,tables:c.map(function(g){return i.objectStore(g)}).map(function(g){var v=g.keyPath,x=g.autoIncrement,m=ie(v),k={},m={name:g.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:m,keyPath:v,autoIncrement:x,unique:!0,extractKey:Ye(v)},indexes:ze(g.indexNames).map(function(b){return g.index(b)}).map(function($){var T=$.name,E=$.unique,_=$.multiEntry,$=$.keyPath,T={name:T,compound:ie($),keyPath:$,unique:E,multiEntry:_,extractKey:Ye($)};return k[Vt($)]=T}),getIndexByKeyPath:function(b){return k[Vt(b)]}};return k[":id"]=m.primaryKey,v!=null&&(k[Vt(v)]=m.primaryKey),m})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=y.schema,u=y.hasGetAll,y=c.tables.map(s),S={};return y.forEach(function(g){return S[g.name]=g}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(g){if(S[g])return S[g];throw new Error("Table '".concat(g,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Ie(t),schema:c}}function _t(e,t,n,a){return n=n.IDBKeyRange,t=Xt(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,G(G({},s),i(s))},t)}}function lt(e,t){var n=t.db,n=_t(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function Qt(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(c){var u=(function y(S,g){return Qn(S,g)||(S=ht(S))&&y(S,g)})(c,s);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?vt(c,s,{get:function(){return this.table(s)},set:function(y){mt(this,s,{value:y,writable:!0,configurable:!0,enumerable:!0})}}):c[s]=new e.Table(s,i))})})}function _e(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Ee(e,t){return e._cfg.version-t._cfg.version}function Le(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Ve("$meta",Yt("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),c=(i.create(n),i._completion.catch(a),i._reject.bind(i)),u=X.transless||X;cn(function(){if(X.trans=i,X.transless=u,t!==0)return lt(e,n),S=t,((y=i).storeNames.includes("$meta")?y.table("$meta").get("version").then(function(g){return g??S}):Y.resolve(S)).then(function(E){var v=e,x=E,k=i,m=n,b=[],E=v._versions,_=v._dbSchema=kt(0,v.idbdb,m);return(E=E.filter(function($){return $._cfg.version>=x})).length===0?Y.resolve():(E.forEach(function($){b.push(function(){var T,A,N,V=_,I=$._cfg.dbschema,U=(ct(v,V,m),ct(v,I,m),_=v._dbSchema=I,Ue(V,I)),z=(U.add.forEach(function(D){Dt(m,D[0],D[1].primKey,D[1].indexes)}),U.change.forEach(function(D){if(D.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var W=m.objectStore(D.name);D.add.forEach(function(fe){return Nt(W,fe)}),D.change.forEach(function(fe){W.deleteIndex(fe.name),Nt(W,fe)}),D.del.forEach(function(fe){return W.deleteIndex(fe)})}),$._cfg.contentUpgrade);if(z&&$._cfg.version>x)return lt(v,m),k._memoizedTables={},T=_a(I),U.del.forEach(function(D){T[D]=V[D]}),_e(v,[v.Transaction.prototype]),Qt(v,[v.Transaction.prototype],ke(T),T),k.schema=T,(A=fn(z))&&Mn(),I=Y.follow(function(){var D;(N=z(k))&&A&&(D=un.bind(null,null),N.then(D,D))}),N&&typeof N.then=="function"?Y.resolve(N):I.then(function(){return N})}),b.push(function(T){var A,N,V=$._cfg.dbschema;A=V,N=T,[].slice.call(N.db.objectStoreNames).forEach(function(I){return A[I]==null&&N.db.deleteObjectStore(I)}),_e(v,[v.Transaction.prototype]),Qt(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),k.schema=v._dbSchema}),b.push(function(T){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===$._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(A){return A!=="$meta"})):T.objectStore("$meta").put($._cfg.version,"version"))})}),(function $(){return b.length?Y.resolve(b.shift()(k.idbtrans)).then($):Y.resolve()})().then(function(){Zt(_,m)}))}).catch(c);var y,S;ke(s).forEach(function(g){Dt(n,g,s[g].primKey,s[g].indexes)}),lt(e,n),Y.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function De(e,t){Zt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=kt(0,e.idbdb,t);ct(e,e._dbSchema,t);for(var a=0,s=Ue(n,e._dbSchema).change;a<s.length;a++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(y){xt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(y.src)),Nt(u,y)})})(s[a]);if(typeof i=="object")return i.value}}function Ue(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)c.recreate=!0,a.change.push(c);else{var u=s.idxByName,y=i.idxByName,S=void 0;for(S in u)y[S]||c.del.push(S);for(S in y){var g=u[S],v=y[S];g?g.src!==v.src&&c.change.push(v):c.add.push(v)}(0<c.del.length||0<c.add.length||0<c.change.length)&&a.change.push(c)}}else a.add.push([n,i])}return a}function Dt(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return Nt(s,i)})}function Zt(e,t){ke(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(xt&&console.debug("Dexie: Creating missing table",n),Dt(t,n,e[n].primKey,e[n].indexes))})}function Nt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function kt(e,t,n){var a={};return Zn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),c=pt(Pe(S=i.keyPath),S||"",!0,!1,!!i.autoIncrement,S&&typeof S!="string",!0),u=[],y=0;y<i.indexNames.length;++y){var g=i.index(i.indexNames[y]),S=g.keyPath,g=pt(g.name,S,!!g.unique,!!g.multiEntry,!1,S&&typeof S!="string",!1);u.push(g)}a[s]=Ve(s,c,u)}),a}function ct(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var y,S=c.indexNames[u],g=c.index(S).keyPath,g=typeof g=="string"?g:"["+Zn(g).join("+")+"]";t[i]&&(y=t[i].idxByName[g])&&(y.name=S,delete t[i].idxByName[g],t[i].idxByName[S]=y)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Yt(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return pt(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(i),n===0,a)})}tn.prototype._createTableSchema=Ve,tn.prototype._parseIndexSyntax=Yt,tn.prototype._parseStoresSpec=function(e,t){var n=this;ke(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new ee.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new ee.Schema("Primary key cannot be multiEntry*");s.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},tn.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ye(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){ye(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,_e(t,[t._allTables,t,t.Transaction.prototype]),Qt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],ke(s),s),t._storeNames=ke(s),this},tn.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Nn(this._cfg.contentUpgrade||we,e),this};var en=tn;function tn(){}function B(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Ut(dn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function R(e){return e&&typeof e.databases=="function"}function rt(e){return cn(function(){return X.letThrough=!0,e()})}function Cn(e){return!("from"in e)}var se=function(e,t){var n;if(!this)return n=new se,e&&"d"in e&&ye(n,e),n;ye(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Rn(e,t,n){var a=de(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(Cn(e))return ye(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(de(n,e.from)<0)return a?Rn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},lr(e);if(0<de(t,e.to))return s?Rn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},lr(e);de(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<de(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&Tn(e,a),s&&t&&Tn(e,s)}}function Tn(e,t){Cn(t)||(function n(a,s){var i=s.from,c=s.l,u=s.r;Rn(a,i,s.to),c&&n(a,c),u&&n(a,u)})(e,t)}function ja(e,t){var n=Vn(t),a=n.next();if(!a.done)for(var s=a.value,i=Vn(e),c=i.next(s.from),u=c.value;!a.done&&!c.done;){if(de(u.from,s.to)<=0&&0<=de(u.to,s.from))return!0;de(s.from,u.from)<0?s=(a=n.next(u.from)).value:u=(c=i.next(s.from)).value}return!1}function Vn(e){var t=Cn(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&de(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||de(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function lr(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=G({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=cr(n)),e.d=cr(e)}function cr(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function wt(e,t){return ke(t).forEach(function(n){e[n]?Tn(e[n],t[n]):e[n]=(function a(s){var i,c,u={};for(i in s)le(s,i)&&(c=s[i],u[i]=!c||typeof c!="object"||Ha.has(c.constructor)?c:a(c));return u})(t[n])}),e}function Mt(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&ja(t[n],e[n])})}Ct(se.prototype,((tt={add:function(e){return Tn(this,e),this},addKey:function(e){return Rn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Rn(t,n,n)}),this},hasKey:function(e){var t=Vn(this).next(e).value;return t&&de(t.from,e)<=0&&0<=de(t.to,e)}})[Ta]=function(){return Vn(this)},tt));var ut={},ha={},pa=!1;function Yn(e){wt(ha,e),pa||(pa=!0,setTimeout(function(){pa=!1,ma(ha,!(ha={}))},0))}function ma(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(ut);a<s.length;a++)Ra(u=s[a],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=ut["idb://".concat(c,"/").concat(i)])&&Ra(u,e,n,t)}n.forEach(function(y){return y()})}function Ra(e,t,n,a){for(var s=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],y=u[0],S=[],g=0,v=u[1];g<v.length;g++){var x=v[g];Mt(t,x.obsSet)?x.subscribers.forEach(function(E){return n.add(E)}):a&&S.push(x)}a&&s.push([y,S])}if(a)for(var k=0,m=s;k<m.length;k++){var b=m[k],y=b[0],S=b[1];e.queries.query[y]=S}}function ur(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Re(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==a)throw new ee.DatabaseClosed("db.open() was cancelled")}function u(){return new Y(function(x,k){if(c(),!n)throw new ee.MissingAPI;var m=e.name,b=t.autoSchema||!s?n.open(m):n.open(m,s);if(!b)throw new ee.MissingAPI;b.onerror=Qe(k),b.onblocked=ve(e._fireOnBlocked),b.onupgradeneeded=ve(function(E){var _;g=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=K,g.abort(),b.result.close(),(_=n.deleteDatabase(m)).onsuccess=_.onerror=ve(function(){k(new ee.NoSuchDatabase("Database ".concat(m," doesnt exist")))})):(g.onerror=Qe(k),_=E.oldVersion>Math.pow(2,62)?0:E.oldVersion,v=_<1,e.idbdb=b.result,i&&De(e,g),Le(e,_/10,g,k))},k),b.onsuccess=ve(function(){g=null;var E,_,$,T,A,N,V=e.idbdb=b.result,I=Zn(V.objectStoreNames);if(0<I.length)try{var U=V.transaction((A=I).length===1?A[0]:A,"readonly");if(t.autoSchema)N=V,T=U,($=e).verno=N.version/10,T=$._dbSchema=kt(0,N,T),$._storeNames=Zn(N.objectStoreNames,0),Qt($,[$._allTables],ke(T),T);else if(ct(e,e._dbSchema,U),_=U,((_=Ue(kt(0,(E=e).idbdb,_),E._dbSchema)).add.length||_.change.some(function(z){return z.add.length||z.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),s=V.version+1,i=!0,x(u());lt(e,U)}catch{}Pn.push(e),V.onversionchange=ve(function(z){t.vcFired=!0,e.on("versionchange").fire(z)}),V.onclose=ve(function(){e.close({disableAutoOpen:!1})}),v&&(I=e._deps,A=m,R(N=I.indexedDB)||A===dn||B(N,I.IDBKeyRange).put({name:A}).catch(we)),x()},k)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<s)return s=0,u()}return Y.reject(x)})}var y,S=t.dbReadyResolve,g=null,v=!1;return Y.race([a,(typeof navigator>"u"?Y.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function k(){return indexedDB.databases().finally(x)}y=setInterval(k,100),k()}).finally(function(){return clearInterval(y)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],Y.resolve(rt(function(){return e.on.ready.fire(e.vip)})).then(function x(){var k;if(0<t.onReadyBeingFired.length)return k=t.onReadyBeingFired.reduce(Nn,we),t.onReadyBeingFired=[],Y.resolve(rt(function(){return k(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{g&&g.abort()}catch{}return a===t.openCanceller&&e._close(),Re(x)}).finally(function(){t.openComplete=!0,S()}).then(function(){var x;return v&&(x={},e.tables.forEach(function(k){k.schema.indexes.forEach(function(m){m.name&&(x["idb://".concat(e.name,"/").concat(k.name,"/").concat(m.name)]=new se(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(k.name,"/")]=x["idb://".concat(e.name,"/").concat(k.name,"/:dels")]=new se(-1/0,[[[]]])}),Ze(it).fire(x),ma(x,!0)),e})}function va(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(u){var u=i(u),y=u.value;return u.done?y:y&&typeof y.then=="function"?y.then(n,a):ie(y)?Promise.all(y).then(n,a):n(y)}}return s(t)()}function ga(e,t,n){for(var a=ie(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Va={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return G(G({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function c(x,k,m){var $=Vt(x),b=s[$]=s[$]||[],E=x==null?0:typeof x=="string"?1:x.length,_=0<k,$=G(G({},m),{name:_?"".concat($,"(virtual-from:").concat(m.name,")"):m.name,lowLevelIndex:m,isVirtual:_,keyTail:k,keyLength:E,extractKey:Ye(x),unique:!_&&m.unique});return b.push($),$.isPrimaryKey||i.push($),1<E&&c(E===2?x[0]:x.slice(0,E-1),k+1,m),b.sort(function(T,A){return T.keyTail-A.keyTail}),$}var u=c(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[u];for(var y=0,S=a.indexes;y<S.length;y++){var g=S[y];c(g.keyPath,0,g)}function v(x){var k,m=x.query.index;return m.isVirtual?G(G({},x),{query:{index:m.lowLevelIndex,range:(k=x.query.range,m=m.keyTail,{type:k.type===1?2:k.type,lower:ga(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,m),lowerOpen:!0,upper:ga(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,m),upperOpen:!0})}}):x}return G(G({},n),{schema:G(G({},a),{primaryKey:u,indexes:i,getIndexByKeyPath:function(x){return(x=s[Vt(x)])&&x[0]}}),count:function(x){return n.count(v(x))},query:function(x){return n.query(v(x))},openCursor:function(x){var k=x.query.index,m=k.keyTail,b=k.keyLength;return k.isVirtual?n.openCursor(v(x)).then(function(_){return _&&E(_)}):n.openCursor(x);function E(_){return Object.create(_,{continue:{value:function($){$!=null?_.continue(ga($,x.reverse?e.MAX_KEY:e.MIN_KEY,m)):x.unique?_.continue(_.key.slice(0,b).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,m)):_.continue()}},continuePrimaryKey:{value:function($,T){_.continuePrimaryKey(ga($,e.MAX_KEY,m),T)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var $=_.key;return b===1?$[0]:$.slice(0,b)}},value:{get:function(){return _.value}}})}}})}})}};function zn(e,t,n,a){return n=n||{},a=a||"",ke(e).forEach(function(s){var i,c,u;le(t,s)?(i=e[s],c=t[s],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Pa(i))!==Pa(c)?n[a+s]=t[s]:u==="Object"?zn(i,c,n,a+s+"."):i!==c&&(n[a+s]=t[s]):i!==c&&(n[a+s]=t[s])):n[a+s]=void 0}),ke(t).forEach(function(s){le(e,s)||(n[a+s]=t[s])}),n}function ba(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var dr={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return G(G({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return G(G({},n),{mutate:function(s){var i=X.trans,c=i.table(t).hook,u=c.deleting,y=c.creating,S=c.updating;switch(s.type){case"add":if(y.fire===we)break;return i._promise("readwrite",function(){return g(s)},!0);case"put":if(y.fire===we&&S.fire===we)break;return i._promise("readwrite",function(){return g(s)},!0);case"delete":if(u.fire===we)break;return i._promise("readwrite",function(){return g(s)},!0);case"deleteRange":if(u.fire===we)break;return i._promise("readwrite",function(){return(function v(x,k,m){return n.query({trans:x,values:!1,query:{index:a,range:k},limit:m}).then(function(b){var E=b.result;return g({type:"delete",keys:E,trans:x}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):E.length<m?{failures:[],numFailures:0,lastResult:void 0}:v(x,G(G({},k),{lower:E[E.length-1],lowerOpen:!0}),m)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function g(v){var x,k,m,b=X.trans,E=v.keys||ba(a,v);if(E)return(v=v.type==="add"||v.type==="put"?G(G({},v),{keys:E}):G({},v)).type!=="delete"&&(v.values=be([],v.values)),v.keys&&(v.keys=be([],v.keys)),x=n,m=E,((k=v).type==="add"?Promise.resolve([]):x.getMany({trans:k.trans,keys:m,cache:"immutable"})).then(function(_){var $=E.map(function(T,A){var N,V,I,U=_[A],z={onerror:null,onsuccess:null};return v.type==="delete"?u.fire.call(z,T,U,b):v.type==="add"||U===void 0?(N=y.fire.call(z,T,v.values[A],b),T==null&&N!=null&&(v.keys[A]=T=N,a.outbound||gt(v.values[A],a.keyPath,T))):(N=zn(U,v.values[A]),(V=S.fire.call(z,N,T,U,b))&&(I=v.values[A],Object.keys(V).forEach(function(D){le(I,D)?I[D]=V[D]:gt(I,D,V[D])}))),z});return n.mutate(v).then(function(T){for(var A=T.failures,N=T.results,V=T.numFailures,T=T.lastResult,I=0;I<E.length;++I){var U=(N||E)[I],z=$[I];U==null?z.onerror&&z.onerror(A[I]):z.onsuccess&&z.onsuccess(v.type==="put"&&_[I]?v.values[I]:U)}return{failures:A,results:N,numFailures:V,lastResult:T}}).catch(function(T){return $.forEach(function(A){return A.onerror&&A.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function Lt(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)de(t.keys[s],e[i])===0&&(a.push(n?bt(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var _r={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return G(G({},n),{getMany:function(a){var s;return a.cache?(s=Lt(a.keys,a.trans._cache,a.cache==="clone"))?Y.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?bt(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function zt(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function fr(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Mr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new se(e.MIN_KEY,e.MAX_KEY);return G(G({},e),{transaction:function(a,s,i){if(X.subscr&&s!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));return e.transaction(a,s,i)},table:function(a){function s(E){var b,E=E.query;return[b=E.index,new se((b=(E=E.range).lower)!=null?b:e.MIN_KEY,(b=E.upper)!=null?b:e.MAX_KEY)]}var i=e.table(a),c=i.schema,u=c.primaryKey,y=c.indexes,S=u.extractKey,g=u.outbound,v=u.autoIncrement&&y.filter(function(m){return m.compound&&m.keyPath.includes(u.keyPath)}),x=G(G({},i),{mutate:function(m){function b(W){return W="idb://".concat(t,"/").concat(a,"/").concat(W),A[W]||(A[W]=new se)}var E,_,$,T=m.trans,A=m.mutatedParts||(m.mutatedParts={}),N=b(""),V=b(":dels"),I=m.type,z=m.type==="deleteRange"?[m.range]:m.type==="delete"?[m.keys]:m.values.length<50?[ba(u,m).filter(function(W){return W}),m.values]:[],U=z[0],z=z[1],D=m.trans._cache;return ie(U)?(N.addKeys(U),(I=I==="delete"||U.length===z.length?Lt(U,D):null)||V.addKeys(U),(I||z)&&(E=b,_=I,$=z,c.indexes.forEach(function(W){var fe=E(W.name||"");function Ce(oe){return oe!=null?W.extractKey(oe):null}function Z(oe){W.multiEntry&&ie(oe)?oe.forEach(function(Te){return fe.addKey(Te)}):fe.addKey(oe)}(_||$).forEach(function(oe,Oe){var Pt=_&&Ce(_[Oe]),Oe=$&&Ce($[Oe]);de(Pt,Oe)!==0&&(Pt!=null&&Z(Pt),Oe!=null)&&Z(Oe)})}))):U?(z={from:(D=U.lower)!=null?D:e.MIN_KEY,to:(I=U.upper)!=null?I:e.MAX_KEY},V.add(z),N.add(z)):(N.add(n),V.add(n),c.indexes.forEach(function(W){return b(W.name).add(n)})),i.mutate(m).then(function(W){return!U||m.type!=="add"&&m.type!=="put"||(N.addKeys(W.results),v&&v.forEach(function(fe){for(var Ce=m.values.map(function(Pt){return fe.extractKey(Pt)}),Z=fe.keyPath.findIndex(function(Pt){return Pt===u.keyPath}),oe=0,Te=W.results.length;oe<Te;++oe)Ce[oe][Z]=W.results[oe];b(fe.name).addKeys(Ce)})),T.mutatedParts=wt(T.mutatedParts||{},A),W})}}),k={get:function(m){return[u,new se(m.key)]},getMany:function(m){return[u,new se().addKeys(m.keys)]},count:s,query:s,openCursor:s};return ke(k).forEach(function(m){x[m]=function(b){var E=X.subscr,_=!!E,$=zt(X,i)&&fr(m,b)?b.obsSet={}:E;if(_){var T,E=function(z){return z="idb://".concat(t,"/").concat(a,"/").concat(z),$[z]||($[z]=new se)},A=E(""),N=E(":dels"),_=k[m](b),V=_[0],_=_[1];if((m==="query"&&V.isPrimaryKey&&!b.values?N:E(V.name||"")).add(_),!V.isPrimaryKey){if(m!=="count")return T=m==="query"&&g&&b.values&&i.query(G(G({},b),{values:!1})),i[m].apply(this,arguments).then(function(z){if(m==="query"){if(g&&b.values)return T.then(function(Ce){return Ce=Ce.result,A.addKeys(Ce),z});var D=b.values?z.result.map(S):z.result;(b.values?A:N).addKeys(D)}else{var W,fe;if(m==="openCursor")return fe=b.values,(W=z)&&Object.create(W,{key:{get:function(){return N.addKey(W.primaryKey),W.key}},primaryKey:{get:function(){var Ce=W.primaryKey;return N.addKey(Ce),Ce}},value:{get:function(){return fe&&A.addKey(W.primaryKey),W.value}}})}return z});N.add(n)}}return i[m].apply(this,arguments)}}),x}})}};function Ya(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=G({},t),ie(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&ie(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function ya(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<de(n,a.lower):0<=de(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?de(n,a.upper)<0:de(n,a.upper)<=0));var n,a}function za(e,t,n,a,s,i){var c,u,y,S,g,v;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,y=t.query.range,S=a.schema.primaryKey.extractKey,g=c.extractKey,v=(c.lowLevelIndex||c).extractKey,(a=n.reduce(function(x,k){var m=x,b=[];if(k.type==="add"||k.type==="put")for(var E=new se,_=k.values.length-1;0<=_;--_){var $,T=k.values[_],A=S(T);!E.hasKey(A)&&($=g(T),u&&ie($)?$.some(function(z){return ya(z,y)}):ya($,y))&&(E.addKey(A),b.push(T))}switch(k.type){case"add":var N=new se().addKeys(t.values?x.map(function(D){return S(D)}):x),m=x.concat(t.values?b.filter(function(D){return D=S(D),!N.hasKey(D)&&(N.addKey(D),!0)}):b.map(function(D){return S(D)}).filter(function(D){return!N.hasKey(D)&&(N.addKey(D),!0)}));break;case"put":var V=new se().addKeys(k.values.map(function(D){return S(D)}));m=x.filter(function(D){return!V.hasKey(t.values?S(D):D)}).concat(t.values?b:b.map(function(D){return S(D)}));break;case"delete":var I=new se().addKeys(k.keys);m=x.filter(function(D){return!I.hasKey(t.values?S(D):D)});break;case"deleteRange":var U=k.range;m=x.filter(function(D){return!ya(S(D),U)})}return m},e))===e)?e:(a.sort(function(x,k){return de(v(x),v(k))||de(S(x),S(k))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function Ua(e,t){return de(e.lower,t.lower)===0&&de(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function hr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=de(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=de(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function pr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&on(i,s)},3e3))})}var Pr={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return G(G({},e),{transaction:function(n,a,s){var i,c,u=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,u.addEventListener("abort",(c=function(y){return function(){if(i.abort(),a==="readwrite"){for(var S=new Set,g=0,v=n;g<v.length;g++){var x=v[g],k=ut["idb://".concat(t,"/").concat(x)];if(k){var m=e.table(x),b=k.optimisticOps.filter(function(W){return W.trans===u});if(u._explicit&&y&&u.mutatedParts)for(var E=0,_=Object.values(k.queries.query);E<_.length;E++)for(var $=0,T=(V=_[E]).slice();$<T.length;$++)Mt((I=T[$]).obsSet,u.mutatedParts)&&(on(V,I),I.subscribers.forEach(function(W){return S.add(W)}));else if(0<b.length){k.optimisticOps=k.optimisticOps.filter(function(W){return W.trans!==u});for(var A=0,N=Object.values(k.queries.query);A<N.length;A++)for(var V,I,U,z=0,D=(V=N[A]).slice();z<D.length;z++)(I=D[z]).res!=null&&u.mutatedParts&&(y&&!I.dirty?(U=Object.isFrozen(I.res),U=za(I.res,I.req,b,m,I,U),I.dirty?(on(V,I),I.subscribers.forEach(function(W){return S.add(W)})):U!==I.res&&(I.res=U,I.promise=Y.resolve({result:U}))):(I.dirty&&on(V,I),I.subscribers.forEach(function(W){return S.add(W)})))}}}S.forEach(function(W){return W()})}}})(!1),{signal:s}),u.addEventListener("error",c(!1),{signal:s}),u.addEventListener("complete",c(!0),{signal:s})),u},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return G(G({},a),{mutate:function(i){var c,u=X.trans;return!s.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=ut["idb://".concat(t,"/").concat(n)])?(u=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||ba(s,i).some(function(y){return y==null}))?(c.optimisticOps.push(i),i.mutatedParts&&Yn(i.mutatedParts),u.then(function(y){0<y.numFailures&&(on(c.optimisticOps,i),(y=Ya(0,i,y))&&c.optimisticOps.push(y),i.mutatedParts)&&Yn(i.mutatedParts)}),u.catch(function(){on(c.optimisticOps,i),i.mutatedParts&&Yn(i.mutatedParts)})):u.then(function(y){var S=Ya(0,G(G({},i),{values:i.values.map(function(g,v){var x;return y.failures[v]?g:(gt(x=(x=s.keyPath)!=null&&x.includes(".")?bt(g):G({},g),s.keyPath,y.results[v]),x)})}),y);c.optimisticOps.push(S),queueMicrotask(function(){return i.mutatedParts&&Yn(i.mutatedParts)})}),u):a.mutate(i)},query:function(i){var c,u,y,S,g,v,x;return zt(X,a)&&fr("query",i)?(c=((y=X.trans)==null?void 0:y.db._options.cache)==="immutable",u=(y=X).requery,y=y.signal,v=((k,m,b,E)=>{var _=ut["idb://".concat(k,"/").concat(m)];if(!_)return[];if(!(k=_.queries[b]))return[null,!1,_,null];var $=k[(E.query?E.query.index.name:null)||""];if(!$)return[null,!1,_,null];switch(b){case"query":var T=$.find(function(A){return A.req.limit===E.limit&&A.req.values===E.values&&Ua(A.req.query.range,E.query.range)});return T?[T,!0,_,$]:[$.find(function(A){return("limit"in A.req?A.req.limit:1/0)>=E.limit&&(!E.values||A.req.values)&&hr(A.req.query.range,E.query.range)}),!1,_,$];case"count":return T=$.find(function(A){return Ua(A.req.query.range,E.query.range)}),[T,!!T,_,$]}})(t,n,"query",i),x=v[0],S=v[2],g=v[3],x&&v[1]?x.obsSet=i.obsSet:(v=a.query(i).then(function(k){var m=k.result;if(x&&(x.res=m),c){for(var b=0,E=m.length;b<E;++b)Object.freeze(m[b]);Object.freeze(m)}else k.result=bt(m);return k}).catch(function(k){return g&&x&&on(g,x),Promise.reject(k)}),x={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},g?g.push(x):(g=[x],(S=S||(ut["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=g)),pr(x,g,u,y),x.promise.then(function(k){return{result:za(k.result,i,S?.optimisticOps,a,x,c)}})):a.query(i)}})}})}};function Ca(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}qe.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Ee),n.stores({}),this._state.autoSchema=!1),n},qe.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?e():new Y(function(n,a){if(t._state.openComplete)return a(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new ee.DatabaseClosed);t.open().catch(we)}t._state.dbReadyPromise.then(n,a)}).then(e)},qe.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(c,u){return c.level-u.level}),this},qe.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},qe.prototype.open=function(){var e=this;return gn(je,function(){return ur(e)})},qe.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Pn.indexOf(this);if(0<=t&&Pn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Y(function(n){e.dbReadyResolve=n}),e.openCanceller=new Y(function(n,a){e.cancelOpen=a}))},qe.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},qe.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new Y(function(s,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=ve(function(){var y,S,g;y=t._deps,S=t.name,R(g=y.indexedDB)||S===dn||B(g,y.IDBKeyRange).delete(S).catch(we),s()}),u.onerror=Qe(i),u.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(c):c()})},qe.prototype.backendDB=function(){return this.idbdb},qe.prototype.isOpen=function(){return this.idbdb!==null},qe.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},qe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},qe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(qe.prototype,"tables",{get:function(){var e=this;return ke(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),qe.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new ee.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Ma(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},qe.prototype._transaction=function(e,t,n){var a,s,i=this,c=X.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function(S){if(S=S instanceof i.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),e=="r"||e===ca)a=ca;else{if(e!="rw"&&e!=ua)throw new ee.InvalidArgument("Invalid transaction mode: "+e);a=ua}if(c){if(c.mode===ca&&a===ua){if(!u)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&s.forEach(function(S){if(c&&c.storeNames.indexOf(S)===-1){if(!u)throw new ee.SubTransaction("Table "+S+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch(S){return c?c._promise(null,function(g,v){v(S)}):Re(S)}var y=(function S(g,v,x,k,m){return Y.resolve().then(function(){var $=X.transless||X,b=g._createTransaction(v,x,g._dbSchema,k),$=(b.explicit=!0,{trans:b,transless:$});if(k)b.idbtrans=k.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,g._state.PR1398_maxLoop=3}catch(T){return T.name===na.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return S(g,v,x,null,m)})):Re(T)}var E,_=fn(m),$=(_&&Mn(),Y.follow(function(){var T;(E=m.call(b,b))&&(_?(T=un.bind(null,null),E.then(T,T)):typeof E.next=="function"&&typeof E.throw=="function"&&(E=va(E)))},$));return(E&&typeof E.then=="function"?Y.resolve(E).then(function(T){return b.active?T:Re(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):$.then(function(){return E})).then(function(T){return k&&b._resolve(),b._completion.then(function(){return T})}).catch(function(T){return b._reject(T),Re(T)})})}).bind(null,this,a,s,c,n);return c?c._promise(a,y,"lock"):X.trans?gn(X.transless,function(){return i._whenReady(y)}):this._whenReady(y)},qe.prototype.table=function(e){if(le(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var Ut=qe;function qe(e,t){var n,a,s,i,c,u=this,y=(this._middlewares={},this.verno=0,qe.dependencies),y=(this._options=t=G({addons:qe.addons,autoOpen:!0,indexedDB:y.indexedDB,IDBKeyRange:y.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:we,dbReadyPromise:null,cancelOpen:we,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),g=(S.dbReadyPromise=new Y(function(v){S.dbReadyResolve=v}),S.openCanceller=new Y(function(v,x){S.cancelOpen=x}),this._state=S,this.name=e,this.on=o(this,"populate","blocked","versionchange","close",{ready:[Nn,we]}),this.once=function(v,x){var k=function(){for(var m=[],b=0;b<arguments.length;b++)m[b]=arguments[b];u.on(v).unsubscribe(k),x.apply(u,m)};return u.on(v,k)},this.on.ready.subscribe=ea(this.on.ready.subscribe,function(v){return function(x,k){qe.vip(function(){var m,b=u._state;b.openComplete?(b.dbOpenError||Y.resolve().then(x),k&&v(x)):b.onReadyBeingFired?(b.onReadyBeingFired.push(x),k&&v(x)):(v(x),m=u,k||v(function E(){m.on.ready.unsubscribe(x),m.on.ready.unsubscribe(E)}))})}}),this.Collection=(n=this,l(H.prototype,function(E,b){this.db=n;var k=rr,m=null;if(b)try{k=b()}catch($){m=$}var b=E._ctx,E=b.table,_=E.hook.reading.fire;this._ctx={table:E,index:b.index,isPrimKey:!b.index||E.schema.primKey.keyPath&&b.index===E.schema.primKey.name,range:k,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:m,or:b.or,valueMapper:_!==Dn?_:null}})),this.Table=(a=this,l(ne.prototype,function(v,x,k){this.db=a,this._tx=k,this.name=v,this.schema=x,this.hook=a._allTables[v]?a._allTables[v].hook:o(null,{creating:[Za,we],reading:[wr,Dn],updating:[Sr,we],deleting:[$r,we]})})),this.Transaction=(s=this,l(It.prototype,function(v,x,k,m,b){var E=this;v!=="readonly"&&x.forEach(function(_){_=(_=k[_])==null?void 0:_.yProps,_&&(x=x.concat(_.map(function($){return $.updatesTable})))}),this.db=s,this.mode=v,this.storeNames=x,this.schema=k,this.chromeTransactionDurability=m,this.idbtrans=null,this.on=o(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Y(function(_,$){E._resolve=_,E._reject=$}),this._completion.then(function(){E.active=!1,E.on.complete.fire()},function(_){var $=E.active;return E.active=!1,E.on.error.fire(_),E.parent?E.parent._reject(_):$&&E.idbtrans&&E.idbtrans.abort(),Re(_)})})),this.Version=(i=this,l(en.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,l(Se.prototype,function(v,x,k){if(this.db=c,this._ctx={table:v,index:x===":id"?null:x,or:k},this._cmp=this._ascending=de,this._descending=function(m,b){return de(b,m)},this._max=function(m,b){return 0<de(m,b)?m:b},this._min=function(m,b){return de(m,b)<0?m:b},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Ie(t.IDBKeyRange),this._createTransaction=function(v,x,k,m){return new u.Transaction(v,x,k,u._options.chromeTransactionDurability,m)},this._fireOnBlocked=function(v){u.on("blocked").fire(v),Pn.filter(function(x){return x.name===u.name&&x!==u&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(v)})},this.use(_r),this.use(Pr),this.use(Mr),this.use(Va),this.use(dr),new Proxy(this,{get:function(v,x,k){var m;return x==="_vip"||(x==="table"?function(b){return Ca(u.table(b),g)}:(m=Reflect.get(v,x,k))instanceof ne?Ca(m,g):x==="tables"?m.map(function(b){return Ca(b,g)}):x==="_createTransaction"?function(){return Ca(m.apply(this,arguments),g)}:m)}}));this.vip=g,y.forEach(function(v){return v(u)})}var nn,An=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Tr=(Wa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Wa.prototype[An]=function(){return this},Wa);function Wa(e){this._subscribe=e}try{nn={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{nn={indexedDB:null,IDBKeyRange:null}}function mr(e){var t,n=!1,a=new Tr(function(s){var i=fn(e),c,u=!1,y={},S={},g={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),v&&Ze.storagemutated.unsubscribe(k))}},v=(s.start&&s.start(g),!1),x=function(){return La(m)},k=function(b){wt(y,b),Mt(S,y)&&x()},m=function(){var b,E,_;!u&&nn.indexedDB&&(y={},b={},c&&c.abort(),c=new AbortController,_=($=>{var T=vn();try{i&&Mn();var A=cn(e,$);return A=i?A.finally(un):A}finally{T&&ln()}})(E={subscr:b,signal:c.signal,requery:x,querier:e,trans:null}),Promise.resolve(_).then(function($){n=!0,t=$,u||E.signal.aborted||(y={},(T=>{for(var A in T)if(le(T,A))return;return 1})(S=b)||v||(Ze(it,k),v=!0),La(function(){return!u&&s.next&&s.next($)}))},function($){n=!1,["DatabaseClosedError","AbortError"].includes($?.name)||u||La(function(){u||s.error&&s.error($)})}))};return setTimeout(x,0),g});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var qt=Ut;function Ga(e){var t=an;try{an=!0,Ze.storagemutated.fire(e),ma(e,!0)}finally{an=t}}Ct(qt,G(G({},Kt),{delete:function(e){return new qt(e,{addons:[]}).delete()},exists:function(e){return new qt(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=qt.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(R(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==dn})}):B(n,t).toCollection().primaryKeys()).then(e)}catch{return Re(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){ye(this,e)}},ignoreTransaction:function(e){return X.trans?gn(X.transless,e):e()},vip:rt,async:function(e){return function(){try{var t=va(e.apply(this,arguments));return t&&typeof t.then=="function"?t:Y.resolve(t)}catch(n){return Re(n)}}},spawn:function(e,t,n){try{var a=va(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:Y.resolve(a)}catch(s){return Re(s)}},currentTransaction:{get:function(){return X.trans||null}},waitFor:function(e,t){return e=Y.resolve(typeof e=="function"?qt.ignoreTransaction(e):e).timeout(t||6e4),X.trans?X.trans.waitFor(e):e},Promise:Y,debug:{get:function(){return xt},set:function(e){Oa(e)}},derive:sn,extend:ye,props:Ct,override:ea,Events:o,on:Ze,liveQuery:mr,extendObservabilitySet:wt,getByKeyPath:Wt,setByKeyPath:gt,delByKeyPath:function(e,t){typeof t=="string"?gt(e,t,void 0):"length"in t&&[].map.call(t,function(n){gt(e,n,void 0)})},shallowClone:_a,deepClone:bt,getObjectDiff:zn,cmp:de,asap:ta,minKey:-1/0,addons:[],connections:Pn,errnames:na,dependencies:nn,cache:ut,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),qt.maxKey=Ie(qt.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ze(it,function(e){an||(e=new CustomEvent(at,{detail:e}),an=!0,dispatchEvent(e),an=!1)}),addEventListener(at,function(e){e=e.detail,an||Ga(e)}));var xn,an=!1,vr=function(){};return typeof BroadcastChannel<"u"&&((vr=function(){(xn=new BroadcastChannel(at)).onmessage=function(e){return e.data&&Ga(e.data)}})(),typeof xn.unref=="function"&&xn.unref(),Ze(it,function(e){an||xn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Ut.disableBfCache&&e.persisted){xt&&console.debug("Dexie: handling persisted pagehide"),xn?.close();for(var t=0,n=Pn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Ut.disableBfCache&&e.persisted&&(xt&&console.debug("Dexie: handling persisted pageshow"),vr(),Ga({all:new se(-1/0,[[]])}))})),Y.rejectionMapper=function(e,t){return!e||e instanceof hn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Qa[e.name]?e:(t=new Qa[e.name](t||e.message,e),"stack"in e&&vt(t,"stack",{get:function(){return this.inner.stack}}),t)},Oa(xt),G(Ut,Object.freeze({__proto__:null,Dexie:Ut,Entity:sr,PropModification:jn,RangeSet:se,add:function(e){return new jn({add:e})},cmp:de,default:Ut,liveQuery:mr,mergeRanges:Tn,rangesOverlap:ja,remove:function(e){return new jn({remove:e})},replacePrefix:function(e,t){return new jn({replacePrefix:[e,t]})}}),{default:Ut}),Ut})})(gr)),gr.exports}var Js=Hs();const Or=Ws(Js),ys=Symbol.for("Dexie"),br=globalThis[ys]||(globalThis[ys]=Or);if(Or.semVer!==br.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Or.semVer} and ${br.semVer}`);const{liveQuery:di,mergeRanges:fi,rangesOverlap:hi,RangeSet:pi,cmp:mi,Entity:vi,PropModification:gi,replacePrefix:bi,add:yi,remove:Ci,DexieYProvider:xi}=br,We=new br("haushaltsbuch-db");We.version(1).stores({years:"year",fixedTemplateState:"id"});We.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});We.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Ea="singleton";function yr(){return new Date().toISOString()}async function Xn(){return We.years.orderBy("year").toArray()}async function Xs(P){return We.years.get(P)}async function Jn(P){await We.years.put(P)}async function Fr(){const P=await We.fixedTemplateState.get(Ea);if(!P){const h={id:Ea,templates:[],version:yr(),updatedAt:new Date().toISOString()};return await We.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Ir(P){const h=yr();return await We.fixedTemplateState.put({id:Ea,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Dr(){const P=await We.annualVariableFixedTemplateState.get(Ea);if(!P){const h={id:Ea,templates:[],version:yr(),updatedAt:new Date().toISOString()};return await We.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Nr(P){const h=yr();return await We.annualVariableFixedTemplateState.put({id:Ea,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Qs(P){await We.auditLog.put(P)}async function Lr(){return We.auditLog.orderBy("timestampIso").toArray()}async function Zs(P){await We.auditLog.clear(),P.length!==0&&await We.auditLog.bulkPut(P)}async function ei(){const P=await Xn(),[h,Fe,G]=await Promise.all([Fr(),Dr(),Lr()]);return{exportedAt:new Date().toISOString(),years:P,fixedTemplates:h.templates,annualVariableFixedTemplates:Fe.templates,auditLogEntries:G}}async function ti(P){await We.transaction("rw",[We.years,We.fixedTemplateState,We.annualVariableFixedTemplateState,We.auditLog],async()=>{await We.years.clear(),await We.years.bulkPut(P.years),await Ir(P.fixedTemplates),await Nr(P.annualVariableFixedTemplates??[]),await Zs(P.auditLogEntries??[])})}function Ne(P){const h=P.replace(",",".").trim();if(!h)return 0;const Fe=Number.parseFloat(h);return Number.isNaN(Fe)?0:Math.round(Fe*100)}const ni=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function p(P){return ni.format(P/100)}function yt(P){return(P/100).toFixed(2)}function Me(P){return new Date(2026,P-1,1).toLocaleDateString("de-DE",{month:"long"})}const ws=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Cs(P){return ws.includes(P)}function ai(P){switch(P){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const xs=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function ri(P){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Fe="habu-theme",G="habu-backup-dirty",be="habu-unexported-change-log",ae="habu-last-backup-filename",ke="habu-recurring-budget-defaults";let ie=null,ye=null,ht=null,Ge=null,le=!1,Ct=!1;const mt=new WeakMap;function vt(){const o=P.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),C=l.getPropertyValue("--table-stripe").trim(),M=l.getPropertyValue("--table-border").trim(),O=l.getPropertyValue("--budget-under").trim(),L=l.getPropertyValue("--danger-2").trim(),q=96,H=250,F=Q=>1-Math.pow(1-Math.max(0,Math.min(1,Q)),3);o.forEach(Q=>{Q.dataset.hoverBound!=="1"&&(Q.dataset.hoverBound="1",Q.addEventListener("mouseenter",()=>{Q.dataset.hovering="1",vt()}),Q.addEventListener("mouseleave",()=>{delete Q.dataset.hovering,delete Q.dataset.hoverX,vt()}),Q.addEventListener("mousemove",_e=>{const Ee=Q.getBoundingClientRect(),Le=Math.round(_e.clientX-Ee.left);Q.dataset.hoverX=String(Le),vt()}));const te=Number.parseInt(Q.dataset.budgetCents??"0",10),ge=Number.parseInt(Q.dataset.actualCents??"0",10),ue=Q.dataset.label??"Kategorie",Ae=Q.dataset.hovering==="1",ce=`${ue}|${te}|${ge}`,$e=Q.dataset.lastRenderSignature!==ce;Q.dataset.lastRenderSignature=ce;const nt=Math.max(120,Math.floor(Q.clientWidth||120)),Se=window.devicePixelRatio||1,pe=Math.floor(nt*Se),Qe=Math.floor(q*Se);(Q.width!==pe||Q.height!==Qe)&&(Q.width=pe,Q.height=Qe);const K=Q.getContext("2d");if(!K)return;const it=Math.max(1,te,ge),at=Math.min(1,Math.max(0,te/it)),Ze=Math.min(1,Math.max(0,ge/it)),It=te-ge,re=te>0?ge/te*100:ge>0?100:0,pt=8,Pe=pt,Ve=34,Ie=nt-pt*2,Ye=22,ze=Number.parseInt(Q.dataset.hoverX??"-1",10),ot=(_e,Ee,Le,De,Ue)=>{K.beginPath(),K.moveTo(_e+Ue,Ee),K.lineTo(_e+Le-Ue,Ee),K.quadraticCurveTo(_e+Le,Ee,_e+Le,Ee+Ue),K.lineTo(_e+Le,Ee+De-Ue),K.quadraticCurveTo(_e+Le,Ee+De,_e+Le-Ue,Ee+De),K.lineTo(_e+Ue,Ee+De),K.quadraticCurveTo(_e,Ee+De,_e,Ee+De-Ue),K.lineTo(_e,Ee+Ue),K.quadraticCurveTo(_e,Ee,_e+Ue,Ee),K.closePath()},Vt=_e=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,Q.width,Q.height),K.scale(Se,Se),ot(Pe,Ve,Ie,Ye,8),K.fillStyle=C,K.fill(),K.strokeStyle=M,K.lineWidth=1,K.stroke();const Ee=[.6,.25,.15],Le=[.1,.16,.24];let De=0;Ee.forEach((kt,ct)=>{const Yt=Ie*kt;K.save(),K.globalAlpha=Le[ct]??.1,K.fillStyle=d,K.fillRect(Pe+De,Ve,Yt,Ye),K.restore(),De+=Yt});const Ue=te>0&&ge>te?L:O,Dt=Ie*Ze*_e;ot(Pe,Ve+3,Dt,Ye-6,6),K.fillStyle=Ue,K.fill(),Ae&&(K.save(),K.strokeStyle=Ue,K.lineWidth=1.5,K.globalAlpha=.8,ot(Pe-1,Ve+2,Math.max(2,Dt+2),Ye-4,7),K.stroke(),K.restore());const Zt=Pe+Ie*at;K.strokeStyle=f,K.lineWidth=Ae?3:2,K.beginPath(),K.moveTo(Zt,Ve-3),K.lineTo(Zt,Ve+Ye+3),K.stroke(),Ae&&ze>=Pe&&ze<=Pe+Ie&&(K.save(),K.strokeStyle=f,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(ze,Ve-8),K.lineTo(ze,Ve+Ye+8),K.stroke(),K.restore()),K.fillStyle=f,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(ue,Pe,10);const Nt=re*_e;if(K.fillStyle=re>100?L:re<100?O:d,K.textAlign="right",K.fillText(`${Nt.toFixed(0)}%`,Pe+Ie,10),K.fillStyle=d,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${p(ge)} · Ziel ${p(te)} · Δ ${It>=0?"+":""}${p(It)}`,Pe,64),Ae){const kt=`Nutzung ${re.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const ct=8,Yt=5,en=22,B=K.measureText(kt).width+ct*2,R=Number.isFinite(ze)?ze-B/2:Pe+Ie-B,rt=Math.min(Pe+Ie-B,Math.max(Pe,R)),Cn=Ve-en-8;K.save(),K.fillStyle=f,K.globalAlpha=.92,ot(rt,Cn,B,en,6),K.fill(),K.restore(),K.fillStyle=C,K.textAlign="left",K.textBaseline="top",K.fillText(kt,rt+ct,Cn+Yt)}},Xt=mt.get(Q);if(Xt&&window.cancelAnimationFrame(Xt),!$e){Vt(1);return}const _t=performance.now(),lt=_e=>{const Ee=_e-_t,Le=Math.min(1,Ee/H);if(Vt(F(Le)),Le<1){const De=window.requestAnimationFrame(lt);mt.set(Q,De);return}mt.delete(Q)},Qt=window.requestAnimationFrame(lt);mt.set(Q,Qt)})}function sn(){P.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),C=l.querySelector("[data-year-trend-active-net]"),M=l.querySelector("[data-year-trend-active-income]"),O=l.querySelector("[data-year-trend-active-expense]"),L=l.querySelector("[data-year-trend-active-delta]"),q=l.querySelector("[data-year-trend-live]");if(!d||!C||!M||!O||!L)return;const H=(te,ge)=>{te.classList.remove("danger","budget-under");const ue=ge<0?"danger":ge>0?"budget-under":"";ue&&te.classList.add(ue)},F=te=>{const ge=te.dataset.monthLabel??"-",ue=Number.parseInt(te.dataset.netCents??"0",10),Ae=Number.parseInt(te.dataset.actualNetCents??"0",10),ce=Number.parseInt(te.dataset.incomeCents??"0",10),$e=Number.parseInt(te.dataset.expenseCents??"0",10),nt=Number.parseInt(te.dataset.deltaCents??"0",10);d.textContent=ge,C.textContent=p(ue),M.textContent=p(ce),O.textContent=p($e),L.textContent=`${nt>=0?"+":""}${p(nt)}`,H(C,ue),H(L,nt),f.forEach(Se=>{const pe=Se===te;Se.classList.toggle("is-active",pe),Se.setAttribute("aria-pressed",String(pe))}),q&&(q.textContent=`${ge}: Kalkulierter Saldo ${p(ue)}, Ist-Saldo ${p(Ae)}, Einkommen ${p(ce)}, Ausgaben ${p($e)}`)};f.forEach(te=>{const ge=()=>{F(te)};te.addEventListener("mouseenter",ge),te.addEventListener("focus",ge),te.addEventListener("click",ge)});const Q=f.find(te=>te.dataset.pointDefault==="1")??f[f.length-1];Q&&F(Q)})}function Qn(o){if(o==="dashboard"){const l=h.years.slice().sort((d,C)=>C.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ne()}function Ba(){h.topModal&&(h.topModal=null,ne())}function Zn(){h.showUnexportedChangeLogModal=!0,ne()}function ea(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ne())}function On(){h.showPersistentAuditLogModal=!0,ne()}function ta(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ne())}function Wt(){le||(le=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),ea();return}if(h.showPersistentAuditLogModal){o.preventDefault(),ta();return}h.topModal&&(o.preventDefault(),Ba())}}))}function gt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function _a(){const o=P.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",gt())}function Cr(){if(Ct)return;Ct=!0;const o=()=>{_a(),vt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Ma(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),ie=l,l}function Ha(){if(ye&&document.body.contains(ye))return ye;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return ye=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),ye=l,l}function Fn(){if(Ge&&document.body.contains(Ge))return Ge;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return Ge=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),Ge=l,l}function bt(){if(!ye){ht=null;return}ye.innerHTML="",ht=null}function In(){Ge&&(Ge.innerHTML="")}function Pa(o,l,f){const d=new Date,C=d.getFullYear(),M=d.getMonth()+1,O=d.getDate(),L=new Date(o,l,0).getDate();if(o<C||o===C&&l<M)return{occurrences:0,remainingDays:0};const q=o===C&&l===M?Math.min(O,L):1,H=Math.max(0,L-q+1);let F=0;for(let Q=q;Q<=L;Q+=1)new Date(o,l-1,Q).getDay()===f&&(F+=1);return{occurrences:F,remainingDays:H}}async function Ta(o,l){const f=Ke();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await He(`Wocheneinkauf geplant: ${xs.find(d=>d.value===o)?.label??"Wochentag"} mit ${p(f.weeklyShoppingEstimateCents)} €`),ne())}function xr(){const o=Ke(),l=Gt();if(!o||!l)return;const f=Fn();In();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,C=o.weeklyShoppingEstimateCents??0,M=l.year,O=o.month,L=Ln(M,O),q=L?tt(L):{foodCents:0},H=L?L.foodBudgetCents??0:0,F=q.foodCents,Q=H-F;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${xs.map(re=>`<option value="${re.value}" ${re.value===d?"selected":""}>${re.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${yt(C)}" />
              </label>
            </div>

            <div class="weekly-shopping-eval" id="weekly-shopping-eval">
              <div class="column-overview-row"><span>Verbleibende Wocheneinkäufe</span><strong id="weekly-shopping-occurrences">0</strong></div>
              <div class="column-overview-row"><span>Summe Wocheneinkäufe</span><strong id="weekly-shopping-total">0,00 €</strong></div>
              <div class="column-overview-row"><span>Restbudget aktuell (ausgewählter Monat, Essen/Trinken)</span><strong id="weekly-shopping-rest-before">0,00 €</strong></div>
              <div class="column-overview-row"><span>Restbudget nach Abzug</span><strong id="weekly-shopping-rest-after">0,00 €</strong></div>
              <div class="column-overview-row"><span>Verbleibende Tage im Monat</span><strong id="weekly-shopping-days-left">0</strong></div>
              <div class="column-overview-row"><span>Verfügbar pro Tag (Restmonat)</span><strong id="weekly-shopping-per-day">0,00 €</strong></div>
            </div>

            <div class="amount-modal-actions">
              <button class="btn btn-quiet" id="weekly-shopping-cancel" type="button">Schließen</button>
              <button class="btn btn-primary" id="weekly-shopping-save" type="button">Übernehmen</button>
            </div>
          </div>
        </div>
      </div>
    `;const te=f.querySelector(".weekly-shopping-modal-backdrop"),ge=f.querySelector("#weekly-shopping-weekday"),ue=f.querySelector("#weekly-shopping-estimate"),Ae=f.querySelector("#weekly-shopping-occurrences"),ce=f.querySelector("#weekly-shopping-total"),$e=f.querySelector("#weekly-shopping-rest-before"),nt=f.querySelector("#weekly-shopping-rest-after"),Se=f.querySelector("#weekly-shopping-days-left"),pe=f.querySelector("#weekly-shopping-per-day"),Qe=f.querySelector("#weekly-shopping-cancel"),K=f.querySelector("#weekly-shopping-save");function it(){const re=Number.parseInt(ge?.value??"1",10);return Number.isInteger(re)&&re>=0&&re<=6?re:1}function at(){return Math.max(0,Ne(ue?.value??"0"))}function Ze(){const re=it(),pt=at(),{occurrences:Pe,remainingDays:Ve}=Pa(M,O,re),Ie=Pe*pt,Ye=Q-Ie,ze=Ve>0?Math.trunc(Ye/Ve):0;Ae&&(Ae.textContent=`${Pe}`),ce&&(ce.textContent=`${p(Ie)} €`),$e&&($e.textContent=`${p(Q)} €`),nt&&(nt.textContent=`${p(Ye)} €`,nt.className=Ye<0?"danger":Ye>0?"budget-under":""),Se&&(Se.textContent=`${Ve}`),pe&&(pe.textContent=`${p(ze)} €`,pe.className=ze<0?"danger":ze>0?"budget-under":"")}async function It(){await Ta(it(),at()),In()}Qe?.addEventListener("click",()=>{In()}),K?.addEventListener("click",async()=>{await It()}),ge?.addEventListener("change",()=>{Ze()}),ue?.addEventListener("input",()=>{Ze()}),ue?.addEventListener("keydown",async re=>{if(re.key==="Escape"){re.preventDefault(),In();return}re.key==="Enter"&&(re.preventDefault(),await It())}),te?.addEventListener("click",re=>{re.target===te&&In()}),window.setTimeout(()=>{ue?.focus(),ue?.select(),Ze()},0)}function on(o,l){let f=o;const d=l.min;if(d){const M=Number.parseFloat(d);if(!Number.isNaN(M)){const O=Math.round(M*100);f=Math.max(f,O)}}const C=l.max;if(C){const M=Number.parseFloat(C);if(!Number.isNaN(M)){const O=Math.round(M*100);f=Math.min(f,O)}}return f}function et(o){if(o.disabled)return;const l=Ha();bt(),ht=o;const f=Ne(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${p(f)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${p(f)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${p(f)} €</strong></div>
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
    `;const C=l.querySelector(".amount-modal-backdrop"),M=l.querySelector("#amount-modal-delta"),O=l.querySelector("#amount-modal-next-delta"),L=l.querySelector("#amount-modal-next-overwrite"),q=l.querySelector("#amount-modal-cancel"),H=l.querySelector("#amount-modal-overwrite"),F=l.querySelector("#amount-modal-apply");function Q(){const ce=Ne(M?.value??"0");return on(f+ce,o)}function te(){const ce=Ne(M?.value??"0");return on(ce,o)}function ge(){O&&(O.textContent=`${p(Q())} €`),L&&(L.textContent=`${p(te())} €`)}function ue(){const ce=ht;if(!ce){bt();return}const $e=Q();bt(),ce.value=yt($e),ce.dispatchEvent(new Event("change",{bubbles:!0}))}function Ae(){const ce=ht;if(!ce){bt();return}const $e=te();bt(),ce.value=yt($e),ce.dispatchEvent(new Event("change",{bubbles:!0}))}q?.addEventListener("click",()=>{bt()}),H?.addEventListener("click",()=>{Ae()}),F?.addEventListener("click",()=>{ue()}),M?.addEventListener("input",()=>{ge()}),M?.addEventListener("keydown",ce=>{if(ce.key==="Escape"){ce.preventDefault(),bt();return}ce.key==="Enter"&&(ce.preventDefault(),ue())}),C?.addEventListener("click",ce=>{ce.target===C&&bt()}),window.setTimeout(()=>{M?.focus(),M?.select(),ge()},0)}function me(o,l="success"){const f=Ma(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const C=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},C)}function fn(){return new Date().getMonth()+1}function Kt(){return new Date().getFullYear()}function Ja(o){const l=Kt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function hn(){return new Date().toISOString().slice(0,10)}function Xa(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function Et(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function $n(){const o=localStorage.getItem(Fe);return o&&Cs(o)?o:"light"}function na(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Fe,o)}function kr(){return localStorage.getItem(G)==="1"}function ee(o){localStorage.setItem(G,o?"1":"0")}function Qa(){const o=localStorage.getItem(be);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function we(o){localStorage.setItem(be,JSON.stringify(o.slice(-200)))}function Dn(){const o=localStorage.getItem(ae);if(!o)return null;const l=o.trim();return l||null}function wr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(ke);if(!l)return o;try{const f=JSON.parse(l),d=C=>typeof C=="number"&&Number.isFinite(C)?C:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function pn(o){localStorage.setItem(ke,JSON.stringify(o))}function Za(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function $r(o){const l=o.trim();l&&localStorage.setItem(ae,l)}async function Sr(){Ma(),na($n()),h.hasUnexportedChanges=kr(),h.unexportedChangeLog=Qa(),h.persistentAuditLog=await Lr(),h.lastBackupFileName=Dn(),h.recurringBudgetDefaults=wr(),Wt(),Cr();const[o,l,f]=await Promise.all([Xn(),Fr(),Dr()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Aa(h.years),ra(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Oa(h.years),o.length>0&&(h.selectedYear=Ja(o),h.selectedMonth=fn()),ne()}function Aa(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const C=Number(d.weeklyShoppingWeekday);Number.isInteger(C)&&C>=0&&C<=6?d.weeklyShoppingWeekday=C:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(C=>{const M=l(C.incomeSource);if(!M){const{incomeSource:O,...L}=C;return L}return{...C,incomeSource:M}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((C,M)=>C+M.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((C,M)=>C+M.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Nn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function xt(o){return o==="fresh"||o==="salary"||!o}async function Oa(o){for(const l of o)await Jn(l)}function Gt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ke(){const o=Gt();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function Ln(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function tt(o){const l=o.days.reduce((L,q)=>L+q.foodCents,0),f=o.days.reduce((L,q)=>L+q.goingOutCents,0),d=o.fixedCosts.reduce((L,q)=>L+q.actualCents,0),C=o.variableCosts.reduce((L,q)=>L+q.amountCents,0)+o.variablePositions.reduce((L,q)=>L+q.actualCents,0),M=o.miscCosts.reduce((L,q)=>L+q.amountCents,0),O=l+f+d+C+M;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:C,miscCents:M,totalCents:O}}function jt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((O,L)=>O+L.plannedCents,0),C=o.variablePositions.reduce((O,L)=>O+L.budgetCents,0),M=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??C)+M}function Sn(o){return o.months.reduce((l,f)=>{const d=tt(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function qn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:tt(l)}))}function Kn(o){const l=o.months.reduce((O,L)=>O+(L.foodBudgetCents??0),0),f=o.months.reduce((O,L)=>O+(L.goingOutBudgetCents??0),0),d=o.months.reduce((O,L)=>O+(L.fixedBudgetCents??L.fixedCosts.reduce((q,H)=>q+H.plannedCents,0)),0),C=o.months.reduce((O,L)=>O+(L.variableBudgetCents??L.variablePositions.reduce((q,H)=>q+H.budgetCents,0)),0),M=o.months.reduce((O,L)=>O+(L.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:C,miscCents:M,totalCents:l+f+d+C+M}}function En(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,C)=>d+(xt(C.incomeSource)?C.amountCents:0),0),0)}function mn(o){return o.months.reduce((l,f)=>(f.incomes.forEach(d=>{if(d.incomeSource==="salary"){l.salaryIncomeCents+=d.amountCents;return}(d.incomeSource==="fresh"||d.incomeSource==null)&&(l.freshIncomeCents+=d.amountCents)}),l),{salaryIncomeCents:0,freshIncomeCents:0})}function Bn(o,l){const f=o.months.slice().sort((d,C)=>d.month-C.month)[0];return f?l.get(he(o.year,f.month))?.carriedFromPreviousCents??0:0}function Fa(){const o=h.years.slice().sort((d,C)=>d.year-C.year).flatMap(d=>d.months.slice().sort((C,M)=>C.month-M.month).map(C=>({year:d.year,month:C}))),l=new Map;let f=0;return o.forEach(({year:d,month:C},M)=>{const O=C.carryoverOverrideCents,L=typeof O=="number",q=L?O:f,H=M>0||L,F=C.incomes.reduce((ue,Ae)=>ue+(xt(Ae.incomeSource)?Ae.amountCents:0),0),Q=jt(C),te=F+q,ge=te-Q;l.set(he(d,C.month),{hasPreviousMonth:H,carriedFromPreviousCents:q,recordedIncomeCents:F,effectiveIncomeCents:te,plannedBudgetCents:Q,netCents:ge}),f=ge}),l}function je(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function X(o){return`${o>0?"+":""}${p(o)}`}function Rt(o,l){const f=o-l,d=je(l,o);return`${p(o)} <span class="eval-diff ${d}">(Δ ${X(f)})</span>`}function Ot(o,l){const f=o!==null,d=f?o-l:null,C=f?je(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${p(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${p(l)} €</strong>
      </div>
      <div class="column-overview-row ${C}">
        <span>Diff</span>
        <strong>${d===null?"-":`${p(d)} €`}</strong>
      </div>
    </div>`}async function aa(o){if(await Xs(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=ms(o,h.fixedTemplates,h.fixedTemplateVersion);Za(f),ln(f),await Jn(f),h.years=await Xn(),Y(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=fn(),me(`Jahr ${o} wurde angelegt.`),ne()}function Y(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,C={id:At("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,C].slice(-200),we(h.unexportedChangeLog);const M={id:At("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,M].slice().sort((O,L)=>O.timestampIso.localeCompare(L.timestampIso)),Qs(M).catch(O=>{console.error("Audit-Log konnte nicht gespeichert werden",O),me("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Ia(o){const l=o.trim();l&&(h.lastBackupFileName=l,$r(l))}function Da(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],we([]),h.showUnexportedChangeLogModal=!1,Ia(o)}async function He(o){const l=Gt();l&&(await Jn(l),h.years=await Xn(),Y(o))}async function Bt(o){for(const l of h.years)await Jn(l);h.years=await Xn(),Y(o)}function he(o,l){return o*100+l}function _n(o,l,f){const d=`${o} auf ${p(f)} € gesetzt`;return f>l?`${d} (erhöht um ${p(f-l)} €)`:f<l?`${d} (verringert um ${p(l-f)} €)`:d}function Na(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function vn(o,l){const f=Na(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(M=>M.month===f.month);!d||d.variablePositions.some(M=>M.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:At("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],ve(d))}function ln(o){h.annualVariableFixedTemplates.forEach(l=>{vn(l,o)})}function ra(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const C=d.variablePositions.some(O=>typeof O.autoAnnualTemplateId=="string"),M=d.fixedCosts.some(O=>typeof O.autoAnnualTemplateId=="string");C&&(d.variablePositions=d.variablePositions.filter(O=>O.autoAnnualTemplateId?l.has(O.autoAnnualTemplateId):!0),ve(d)),M&&(d.fixedCosts=d.fixedCosts.filter(O=>!O.autoAnnualTemplateId),Ft(d))}),ln(f)})}function Ft(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function ve(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function Xe(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function er(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Xe());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function sa(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(C=>{if(he(d.year,C.month)<f)return;C.fixedCosts.some(O=>O.templateId===o.id)||(C.fixedCosts.push({id:At("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Ft(C))})})}function ia(o,l,f){const d=he(f.year,f.month);h.years.forEach(C=>{C.months.forEach(M=>{he(C.year,M.month)<d||(M.fixedCosts=M.fixedCosts.map(O=>O.templateId!==l.id?O:{...O,name:l.name,plannedCents:l.plannedCents,actualCents:O.actualCents===o.plannedCents?l.plannedCents:O.actualCents}),Ft(M))})})}function oa(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(C=>{he(d.year,C.month)<f||(C.fixedCosts=C.fixedCosts.filter(M=>M.templateId!==o),Ft(C))})})}async function Er(o,l){const f=o.trim();if(!f)return;const d=er();if(!d)return;const C=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const M=h.fixedTemplates.find(L=>L.id===h.editingFixedTemplateId);if(!M)return;const O={...M,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(L=>L.id===h.editingFixedTemplateId?O:L),ia(M,O,d)}else{const M={id:At("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,M],sa(M,d)}h.fixedTemplateVersion=await Ir(h.fixedTemplates),h.editingFixedTemplateId=null,await Bt(C?`Fixkosten-Vorlage aktualisiert: ${f} (${p(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${p(l)} €)`),me(C?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function cn(o){h.editingFixedTemplateId=o,ne()}function Mn(){h.editingFixedTemplateId=null,ne()}async function un(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=er();if(!f)return;const d=h.fixedTemplates.find(C=>C.id===o);h.fixedTemplates=h.fixedTemplates.filter(C=>C.id!==o),oa(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Ir(h.fixedTemplates),await Bt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),me("Fixkosten-Vorlage wurde gelöscht."),ne()}async function la(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const C=Na(l);if(!C){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const M={id:At("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,M],h.years.forEach(O=>{vn(M,O)}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${p(f)} €, jährlich in ${Me(C.month)})`),me("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function Br(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(C=>{C.variablePositions=C.variablePositions.filter(M=>M.autoAnnualTemplateId!==o),ve(C),C.fixedCosts=C.fixedCosts.filter(M=>M.autoAnnualTemplateId!==o),Ft(C)})}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),me("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function Ht(o,l,f){const d=Ke();if(!d)return;const M=d.days.find(O=>O.isoDate===o)?.[l]??0;d.days=d.days.map(O=>O.isoDate===o?{...O,[l]:f}:O),await He(_n(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,M,f)),ne()}async function tr(o,l){const f=Ke();if(!f)return;const d=f.fixedCosts.find(C=>C.id===o);f.fixedCosts=f.fixedCosts.map(C=>C.id===o?{...C,actualCents:l}:C),await He(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${p(l)} €`),ne()}async function gn(o,l){const f=Ke();if(!f)return;const d=f.fixedCosts.find(M=>M.id===o);if(!d)return;const C=d.plannedCents;f.fixedCosts=f.fixedCosts.map(M=>M.id===o?{...M,plannedCents:l}:M),Ft(f),await He(_n(`Fixkosten-Budget angepasst: ${d.name}`,C,l)),ne()}async function nr(o,l){const f=Ke();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const C={id:At("fixed"),templateId:At("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[C,...f.fixedCosts],Ft(f),await He(`Fixkosten-Position hinzugefügt: ${d} (${p(l)} €)`),me("Fixkosten-Position wurde hinzugefügt."),ne()}async function La(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Ke();if(!f)return;const d=f.fixedCosts.find(C=>C.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(C=>C.id!==o),Ft(f),await He(`Fixkosten-Position gelöscht: ${d.name}`),me("Fixkosten-Position wurde gelöscht."),ne())}async function Re(o){await dn("fixedBudgetCents",o,"Fixkosten")}async function bn(o){await dn("foodBudgetCents",o,"Essen")}async function Jt(o){await dn("goingOutBudgetCents",o,"Ausgehen")}async function ar(o){await dn("miscBudgetCents",o,"Sonstiges")}async function Pn(o){await dn("variableBudgetCents",o,"Variable Kosten")}async function dn(o,l,f){const d=Ke(),C=h.selectedYear;if(!d||!C||d[o]===l)return;const M=d[o];if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const L=he(C,h.selectedMonth);h.years.forEach(H=>{H.months.forEach(F=>{he(H.year,F.month)<=L||(F[o]=l)})}),h.recurringBudgetDefaults[o]=l,pn(h.recurringBudgetDefaults);const q=_n(`Budget "${f}"`,M??0,l);await Bt(`${q} (inkl. zukünftiger Monate)`),me(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ne();return}await He(_n(`Budget "${f}"`,M??0,l)),ne()}async function ca(o){const l=Ke();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await He(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${p(o)} € gesetzt`),ne())}async function ua(o,l,f){const d=Ke(),C=h.selectedYear;if(!d||!C)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:At("varpos"),name:M,budgetCents:l,actualCents:0},...d.variablePositions],ve(d),f){const O=he(C,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(q=>{he(L.year,q.month)<=O||(q.variablePositions=[{id:At("varpos"),name:M,budgetCents:l,actualCents:0},...q.variablePositions],ve(q))})}),await Bt(`Variable Position hinzugefügt: ${M} (${p(l)} €) für zukünftige Monate`),me("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await He(`Variable Position hinzugefügt: ${M} (${p(l)} €)`),me("Variable Position wurde hinzugefügt."),ne()}async function yn(o,l){const f=Ke();if(!f)return;const d=f.variablePositions.find(M=>M.id===o),C=d?.actualCents??0;f.variablePositions=f.variablePositions.map(M=>M.id===o?{...M,actualCents:l}:M),await He(_n(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,C,l)),ne()}async function rr(o,l){const f=Ke();if(!f)return;const d=f.variablePositions.find(M=>M.id===o),C=d?.budgetCents??0;f.variablePositions=f.variablePositions.map(M=>M.id===o?{...M,budgetCents:l}:M),ve(f),await He(_n(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,C,l)),ne()}async function da(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Ke(),d=h.selectedYear;if(!f||!d)return;const C=f.variablePositions.find(q=>q.id===o);if(!C)return;const M=he(d,h.selectedMonth),L=h.years.some(q=>q.months.some(H=>he(q.year,H.month)>M&&H.variablePositions.some(F=>F.name===C.name&&F.budgetCents===C.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(q=>q.id!==o),ve(f),L){h.years.forEach(q=>{q.months.forEach(H=>{he(q.year,H.month)<=M||(H.variablePositions=H.variablePositions.filter(F=>!(F.name===C.name&&F.budgetCents===C.budgetCents)),ve(H))})}),await Bt(`Variable Position gelöscht: ${C.name} (inkl. zukünftiger Monate)`),me("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await He(`Variable Position gelöscht: ${C.name}`),me("Variable Position wurde gelöscht."),ne()}async function sr(o){const l=Ke(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(F=>F.id===o);if(!d)return;const C={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let M=h.years.find(F=>F.year===C.year);if(!M){const F=ms(C.year,h.fixedTemplates,h.fixedTemplateVersion);Za(F),ln(F),await Jn(F),h.years=[...h.years,F].sort((Q,te)=>Q.year-te.year),M=F}const O=M.months.find(F=>F.month===C.month);if(!O)return;const L=O.variablePositions.some(F=>F.id===d.id||F.name===d.name&&F.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(F=>F.id!==o),ve(l),!L){const Q=O.variablePositions.some(te=>te.id===d.id)?{...d,id:At("varpos")}:d;O.variablePositions=[Q,...O.variablePositions],ve(O)}const q=`${Me(C.month)} ${C.year}`,H=`Variable Position verschoben: ${d.name} → ${q}`;if(C.year===f)await He(H);else{const F=Gt();if(!F)return;await Jn(F),await Jn(M),h.years=await Xn(),Aa(h.years),Y(H)}me(L?`Position entfernt (im Folgemonat schon vorhanden: ${q}).`:`Position in den Folgemonat verschoben: ${q}.`),ne()}async function de(o,l,f){const d=Ke(),C=h.selectedYear;if(!d||!C)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const O=vs(M,l);if(d.miscCosts=[O,...d.miscCosts],f){const L=he(C,h.selectedMonth);h.years.forEach(q=>{q.months.forEach(H=>{he(q.year,H.month)<=L||(H.miscCosts=[vs(M,l),...H.miscCosts])})}),await Bt(`Sonstige Position hinzugefügt: ${M} (${p(l)} €) für zukünftige Monate`),me("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await He(`Sonstige Position hinzugefügt: ${M} (${p(l)} €)`),me("Sonstige Position wurde hinzugefügt."),ne()}async function ir(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Ke(),d=h.selectedYear;if(!f||!d)return;const C=f.miscCosts.find(q=>q.id===o);if(!C)return;const M=he(d,h.selectedMonth),L=h.years.some(q=>q.months.some(H=>he(q.year,H.month)>M&&H.miscCosts.some(F=>F.description===C.description&&F.amountCents===C.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(q=>q.id!==o),L){h.years.forEach(q=>{q.months.forEach(H=>{he(q.year,H.month)<=M||(H.miscCosts=H.miscCosts.filter(F=>!(F.description===C.description&&F.amountCents===C.amountCents)))})}),await Bt(`Sonstige Position gelöscht: ${C.description} (${p(C.amountCents)} €) inkl. zukünftiger Monate`),me("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await He(`Sonstige Position gelöscht: ${C.description} (${p(C.amountCents)} €)`),me("Sonstige Position wurde gelöscht."),ne()}async function qa(o,l,f,d){const C=Ke(),M=h.selectedYear;if(!C||!M)return;const O=o.trim();if(!O){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const L=gs(O,l,f);if(C.incomes=[L,...C.incomes],d){const q=he(M,h.selectedMonth);h.years.forEach(H=>{H.months.forEach(F=>{he(H.year,F.month)<=q||(F.incomes=[gs(O,l,f),...F.incomes])})}),await Bt(`Einkommen hinzugefügt: ${O} (${p(l)} €, ${Nn(f)}) für zukünftige Monate`),me("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await He(`Einkommen hinzugefügt: ${O} (${p(l)} €, ${Nn(f)})`),me("Einkommen wurde hinzugefügt."),ne()}async function fa(o,l){const f=Ke();if(!f)return;const d=f.incomes.find(C=>C.id===o);d&&(f.incomes=f.incomes.map(C=>{if(C.id!==o)return C;if(!l){const{incomeSource:M,...O}=C;return O}return{...C,incomeSource:l}}),await He(`Einkommensart angepasst: ${d.description} → ${Nn(l)}`),ne())}async function jn(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Ke(),d=h.selectedYear;if(!f||!d)return;const C=f.incomes.find(q=>q.id===o);if(!C)return;const M=he(d,h.selectedMonth),L=h.years.some(q=>q.months.some(H=>he(q.year,H.month)>M&&H.incomes.some(F=>F.description===C.description&&F.amountCents===C.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(q=>q.id!==o),L){h.years.forEach(q=>{q.months.forEach(H=>{he(q.year,H.month)<=M||(H.incomes=H.incomes.filter(F=>!(F.description===C.description&&F.amountCents===C.amountCents)))})}),await Bt(`Einkommen gelöscht: ${C.description} (${p(C.amountCents)} €) inkl. zukünftiger Monate`),me("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await He(`Einkommen gelöscht: ${C.description} (${p(C.amountCents)} €)`),me("Einkommen wurde gelöscht."),ne()}async function Ka(){const o=await ei(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${hn()}-${Xa()}.json`,C=document.createElement("a");C.href=f,C.download=d,C.click(),URL.revokeObjectURL(f),Da(d),ne(),me("Backup wurde exportiert.")}async function or(o){const l=await o.text(),f=JSON.parse(l);await ti(f);const[d,C,M]=await Promise.all([Xn(),Fr(),Dr()]);h.years=d,h.annualVariableFixedTemplates=M.templates,h.annualVariableFixedTemplateVersion=M.version,Aa(h.years),ra(h.years),h.fixedTemplates=C.templates,h.fixedTemplateVersion=C.version,await Oa(h.years),h.persistentAuditLog=await Lr(),h.selectedYear=Ja(d),h.selectedMonth=fn(),Da(o.name),me("Backup wurde importiert."),ne()}function ne(){const o=Gt(),l=Ke(),f=hn(),d=l?tt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},C=o?Sn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},M=o?qn(o):[],O=l?l.foodBudgetCents??0:0,L=l?l.goingOutBudgetCents??0:0,q=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,w)=>r+w.plannedCents,0):0,H=l?l.variableBudgetCents??l.variablePositions.reduce((r,w)=>r+w.budgetCents,0):0,F=l?l.miscBudgetCents??0:0,Q=o?o.months.reduce((r,w)=>r+(w.foodBudgetCents??0),0):0,te=o?o.months.reduce((r,w)=>r+(w.goingOutBudgetCents??0),0):0,ge=o?o.months.reduce((r,w)=>r+(w.fixedBudgetCents??w.fixedCosts.reduce((j,J)=>j+J.plannedCents,0)),0):0,ue=o?o.months.reduce((r,w)=>r+(w.variableBudgetCents??w.variablePositions.reduce((j,J)=>j+J.budgetCents,0)),0):0,Ae=o?o.months.reduce((r,w)=>r+(w.miscBudgetCents??0),0):0,ce=l?l.incomes.reduce((r,w)=>r+(xt(w.incomeSource)?w.amountCents:0),0):0,$e=l?l.incomes.reduce((r,w)=>r+(w.incomeSource==="salary"?w.amountCents:0),0):0,nt=l?l.incomes.reduce((r,w)=>r+(w.incomeSource==="fresh"?w.amountCents:0),0):0,Se=Fa(),pe=o?Se.get(he(o.year,h.selectedMonth)):void 0,Qe=o?o.months.slice().sort((r,w)=>r.month-w.month)[0]:void 0,K=pe?.carriedFromPreviousCents??0,it=pe?.hasPreviousMonth??!1,at=pe?.effectiveIncomeCents??ce,Ze=l?jt(l):0,It=pe?.netCents??ce-Ze,re=at-d.totalCents,pt=$e-d.totalCents,Pe=d.totalCents>0?`${($e/d.totalCents*100).toFixed(1)} %`:"-",Ve=K<0?"danger":K>0?"budget-under":"",Ie=It<0?"danger":It>0?"budget-under":"",Ye=re<0?"danger":re>0?"budget-under":"",ze=o?o.months.reduce((r,w)=>r+w.incomes.reduce((j,J)=>j+(xt(J.incomeSource)?J.amountCents:0),0),0):0,ot=o?o.months.reduce((r,w)=>r+w.incomes.reduce((j,J)=>j+(J.incomeSource==="salary"?J.amountCents:0),0),0):0,Vt=o?o.months.reduce((r,w)=>r+w.incomes.reduce((j,J)=>j+(J.incomeSource==="fresh"?J.amountCents:0),0),0):0,Xt=o&&Qe?Se.get(he(o.year,Qe.month))?.carriedFromPreviousCents??0:0,_t=ze+Xt,lt=_t-C.totalCents,Qt=ot-C.totalCents,_e=C.totalCents>0?`${(ot/C.totalCents*100).toFixed(1)} %`:"-",Ee=Xt<0?"danger":Xt>0?"budget-under":"",Le=lt<0?"danger":lt>0?"budget-under":"",De=O+L+q+H+F,Ue=O+L,Dt=d.foodCents+d.goingOutCents,Zt=Ue-Dt,Nt=je(Dt,Ue),kt=Q+te+ge+ue+Ae,ct=at-De,Yt=_t-kt,en=De-d.totalCents,tn=kt-C.totalCents,B=r=>r<0?"danger":r>0?"budget-under":"",R=(r,w)=>w<=0?"muted":r>=w?"budget-under":"danger",rt=R($e,d.totalCents),Cn=R(ot,C.totalCents),se=(r,w)=>{if(w<=0)return"0%";const J=Math.max(0,r)/w*100;return`${Math.min(100,Math.max(0,J)).toFixed(1)}%`},Rn=(r,w)=>{if(w<=0)return r>0?100:0;const j=Math.max(0,r)/w*100;return Math.max(0,j)},Tn=[{label:"Essen",budgetCents:O,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:L,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:q,actualCents:d.fixedCents},{label:"Variable",budgetCents:H,actualCents:d.variableCents},{label:"Sonstige",budgetCents:F,actualCents:d.miscCents}];Math.max(1,...Tn.flatMap(r=>[r.budgetCents,r.actualCents]));const ja=(r,w)=>w<=0?"bar-positive":r<=0||w>r?"bar-negative":"bar-positive",Vn=[{label:"Einkommen gesamt",valueCents:at,className:"bar-income"},{label:"Budget gesamt",valueCents:De,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:re,className:re<0?"bar-negative":"bar-positive"}],lr=Math.max(1,...Vn.map(r=>Math.abs(r.valueCents))),cr=o?o.months.slice().sort((r,w)=>r.month-w.month).map(r=>{const w=r.foodBudgetCents??0,j=r.goingOutBudgetCents??0,J=r.fixedBudgetCents??r.fixedCosts.reduce((rn,kn)=>rn+kn.plannedCents,0),xe=r.variableBudgetCents??r.variablePositions.reduce((rn,kn)=>rn+kn.budgetCents,0),Je=r.miscBudgetCents??0,Tt=w+j+J+xe+Je;return{month:r.month,foodBudgetCents:w,goingOutBudgetCents:j,fixedBudgetCents:J,variableBudgetCents:xe,miscBudgetCents:Je,totalBudgetCents:Tt}}):[],wt=new Map(cr.map(r=>[r.month,r])),Mt=r=>{if(r.length===0)return null;const w=Math.min(...r),j=Math.max(...r),J=Math.round(r.reduce((xe,Je)=>xe+Je,0)/r.length);return{min:w,avg:J,max:j}},ut=o&&o.year===Kt()?M.filter(r=>r.month<=fn()):M,ha=ut.map(r=>r.summary.foodCents),pa=ut.map(r=>r.summary.goingOutCents),Yn=ut.map(r=>r.summary.fixedCents),ma=ut.map(r=>r.summary.variableCents),Ra=ut.map(r=>r.summary.miscCents),ur=ut.map(r=>r.summary.totalCents),va=ut.map(r=>o?Se.get(he(o.year,r.month))?.plannedBudgetCents??0:0),ga=ut.map(r=>o?Se.get(he(o.year,r.month))?.netCents??0:0),Va=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((w,j)=>w+(j.incomeSource==="salary"?j.amountCents:0),0)])),zn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((w,j)=>w+(j.incomeSource==="salary"||j.incomeSource==="fresh"?j.amountCents:0),0)])),ba=ut.map(r=>Va.get(r.month)??0),dr=ut.map(r=>zn.get(r.month)??0),Lt={food:Mt(ha),goingOut:Mt(pa),fixed:Mt(Yn),variable:Mt(ma),misc:Mt(Ra),total:Mt(ur),salary:Mt(ba),income:Mt(dr),budget:Mt(va),net:Mt(ga)},_r=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],zt={food:ha.reduce((r,w)=>r+w,0),goingOut:pa.reduce((r,w)=>r+w,0),fixed:Yn.reduce((r,w)=>r+w,0),variable:ma.reduce((r,w)=>r+w,0),misc:Ra.reduce((r,w)=>r+w,0),total:ur.reduce((r,w)=>r+w,0),salary:ba.reduce((r,w)=>r+w,0),income:dr.reduce((r,w)=>r+w,0),budget:va.reduce((r,w)=>r+w,0)},fr=_r.map(({key:r,label:w})=>{const j=Lt.food?.[r]??null,J=Lt.goingOut?.[r]??null,xe=Lt.fixed?.[r]??null,Je=Lt.variable?.[r]??null,Tt=Lt.misc?.[r]??null,rn=Lt.total?.[r]??null,kn=Lt.salary?.[r]??null,st=Lt.income?.[r]??null,ka=Lt.budget?.[r]??null,wa=Lt.net?.[r]??null,$t=Hn=>Hn===null?"-":p(Hn);return`<tr>
                  <td><strong>${w}</strong></td>
                  <td>${$t(j)}</td>
                  <td>${$t(J)}</td>
                  <td>${$t(xe)}</td>
                  <td>${$t(Je)}</td>
                  <td>${$t(Tt)}</td>
                  <td>${$t(rn)}</td>
                  <td>${$t(kn)}</td>
                  <td>${$t(st)}</td>
                  <td>${$t(ka)}</td>
                  <td>${$t(wa)}</td>
                </tr>`}).join(""),Mr=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${p(zt.food)}</td>
                  <td>${p(zt.goingOut)}</td>
                  <td>${p(zt.fixed)}</td>
                  <td>${p(zt.variable)}</td>
                  <td>${p(zt.misc)}</td>
                  <td>${p(zt.total)}</td>
                  <td>${p(zt.salary)}</td>
                  <td>${p(zt.income)}</td>
                  <td>${p(zt.budget)}</td>
                  <td>-</td>
                </tr>`,Ya=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,w??0]})),ya=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month),j=r.summary.foodCents+r.summary.goingOutCents,J=(w?.foodBudgetCents??0)+(w?.goingOutBudgetCents??0);return[j,J]})),za=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,w]})),Ua=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,w]})),hr=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,w]})),pr=je(d.fixedCents,q),Pr=je(d.foodCents,O),Ca=je(d.goingOutCents,L),Ut=je(d.variableCents,H),qe=je(d.miscCents,F),nn=r=>r===0?"-":p(r),An=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(q)}</div>
        <div class="compact-cost-actual ${pr}">${nn(d.fixedCents)}</div>
      </div>`,Tr=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(H)}</div>
        <div class="compact-cost-actual ${Ut}">${nn(d.variableCents)}</div>
      </div>`,Wa=l?l.fixedCosts.length>0?l.fixedCosts.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${Et(r.name)}</div>
                  <div class="compact-cost-budget">${p(r.plannedCents)}</div>
                  <div class="compact-cost-actual ${je(r.actualCents,r.plannedCents)}">${nn(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,mr=l?l.variablePositions.length>0?l.variablePositions.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${Et(r.name)}${r.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${p(r.budgetCents)}</div>
                  <div class="compact-cost-actual ${je(r.actualCents,r.budgetCents)}">${nn(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,qt=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,Ga=h.hasUnexportedChanges,xn=h.unexportedChangeLog.slice().reverse(),an=h.persistentAuditLog.slice().sort((r,w)=>w.timestampIso.localeCompare(r.timestampIso)),vr=h.lastBackupFileName?Et(h.lastBackupFileName):"-",e={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},t=h.years.slice().sort((r,w)=>r.year-w.year),n=t.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??t[t.length-1]?.year??null,a=typeof n=="number"?t.find(r=>r.year===n):void 0,s=a?a.months.slice().sort((r,w)=>r.month-w.month):[],i=a?Sn(a):e,c=a?Kn(a):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},u=a?En(a):0,y=a?Bn(a,Se):0,S=u+y,g=a?a.months.reduce((r,w)=>r+jt(w),0):0,v=S-g,x=S-i.totalCents,k=[{label:"Essen",budgetCents:c.foodCents,actualCents:i.foodCents},{label:"Ausgehen",budgetCents:c.goingOutCents,actualCents:i.goingOutCents},{label:"Fixkosten",budgetCents:c.fixedCents,actualCents:i.fixedCents},{label:"Variable",budgetCents:c.variableCents,actualCents:i.variableCents},{label:"Sonstige",budgetCents:c.miscCents,actualCents:i.miscCents}],m=s.map(r=>{const w=a?Se.get(he(a.year,r.month)):void 0,j=tt(r),J=r.incomes.reduce(($t,Hn)=>$t+Hn.amountCents,0),xe=w?.effectiveIncomeCents??J,Je=w?.plannedBudgetCents??jt(r),Tt=j.foodCents,rn=j.goingOutCents,kn=Tt+rn,st=j.totalCents,ka=xe-Je,wa=xe-st;return{month:r.month,foodCents:Tt,goingOutCents:rn,foodAndGoingOutCents:kn,effectiveIncomeCents:xe,plannedBudgetCents:Je,actualCostCents:st,plannedNetCents:ka,actualNetCents:wa}}),b=Math.max(1,...m.map(r=>r.actualCostCents)),E=Math.max(1,...m.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),_=Math.max(1,...m.map(r=>r.foodAndGoingOutCents)),$=Math.max(1,...m.map(r=>r.foodCents)),T=Math.max(1,...m.map(r=>r.goingOutCents)),A=m.map((r,w,j)=>{const J=w>0?j[w-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Me(r.month),monthShortLabel:Me(r.month).slice(0,3),deltaCents:r.plannedNetCents-J}}),N=A[A.length-1]??null,V=Math.min(0,...A.map(r=>r.plannedNetCents)),I=Math.max(0,...A.map(r=>r.plannedNetCents)),U=Math.max(1,I-V),z=720,D=320,W=18,fe=18,Ce=38,Z=56,oe=z-Z-fe,Te=D-W-Ce,Pt=r=>{if(A.length<=1)return Z+oe/2;const w=r/(A.length-1);return Z+w*oe},Oe=r=>W+(I-r)/U*Te,dt=A.map((r,w)=>{const j=Pt(w),J=Oe(r.plannedNetCents);return{...r,x:j,y:J,leftPercent:j/z*100,topPercent:J/D*100}}),Un=dt.map((r,w)=>`${w===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),Kr=dt.length>0?`${Un} L ${dt[dt.length-1]?.x.toFixed(1)} ${(W+Te).toFixed(1)} L ${dt[0]?.x.toFixed(1)} ${(W+Te).toFixed(1)} Z`:"",jr=5,Ss=Array.from({length:jr},(r,w)=>{const j=w/(jr-1),J=I-j*U;return{valueCents:Math.round(J/100)*100,y:Oe(J)}}),Rr=Oe(0),Es=A[0]?.plannedNetCents??0,xa=(A[A.length-1]?.plannedNetCents??0)-Es,Bs=xa<0?"trend-badge-negative":xa>0?"trend-badge-positive":"trend-badge-neutral",Vr=xa<0?"↘":xa>0?"↗":"→",_s=xa<0?"Abwärtstrend":xa>0?"Aufwärtstrend":"Seitwärts",Wn=t.reduce((r,w)=>{const j=Kn(w);return{foodCents:r.foodCents+j.foodCents,goingOutCents:r.goingOutCents+j.goingOutCents,fixedCents:r.fixedCents+j.fixedCents,variableCents:r.variableCents+j.variableCents,miscCents:r.miscCents+j.miscCents,totalCents:r.totalCents+j.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Gn=t.reduce((r,w)=>{const j=Sn(w);return{foodCents:r.foodCents+j.foodCents,goingOutCents:r.goingOutCents+j.goingOutCents,fixedCents:r.fixedCents+j.fixedCents,variableCents:r.variableCents+j.variableCents,miscCents:r.miscCents+j.miscCents,totalCents:r.totalCents+j.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Ms=t.reduce((r,w)=>r+En(w),0),Ps=t[0]?Bn(t[0],Se):0,Ar=Ms+Ps,Yr=Ar-Wn.totalCents,zr=Ar-Gn.totalCents,Ur=[{label:"Essen",budgetCents:Wn.foodCents,actualCents:Gn.foodCents},{label:"Ausgehen",budgetCents:Wn.goingOutCents,actualCents:Gn.goingOutCents},{label:"Fixkosten",budgetCents:Wn.fixedCents,actualCents:Gn.fixedCents},{label:"Variable",budgetCents:Wn.variableCents,actualCents:Gn.variableCents},{label:"Sonstige",budgetCents:Wn.miscCents,actualCents:Gn.miscCents}],Wr=Math.max(1,...Ur.flatMap(r=>[r.budgetCents,r.actualCents])),ft=t.map(r=>{const w=Sn(r),j=Kn(r),J=En(r),xe=mn(r),Je=Bn(r,Se),Tt=J+Je;return{year:r.year,salaryIncomeCents:xe.salaryIncomeCents,freshIncomeCents:xe.freshIncomeCents,totalIncomeCents:xe.salaryIncomeCents+xe.freshIncomeCents,budgetTotalCents:j.totalCents,actualTotalCents:w.totalCents,effectiveIncomeCents:Tt,plannedNetCents:Tt-j.totalCents,actualNetCents:Tt-w.totalCents}}),Gr=Math.max(1,...ft.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),Ts=Math.max(1,...ft.map(r=>r.actualTotalCents)),As=Math.max(1,...ft.map(r=>r.totalIncomeCents)),Os=Math.max(1,...ft.map(r=>r.salaryIncomeCents)),Hr=Math.max(1,...ft.flatMap(r=>[r.totalIncomeCents,r.actualTotalCents])),Jr=Math.max(1,...ft.flatMap(r=>[r.salaryIncomeCents,r.actualTotalCents])),Fs=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${t.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${t.map(r=>`<option value="${r.year}" ${r.year===n?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${a?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${p(S)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(g)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(i.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${B(v)}">${p(v)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${B(x)}">${p(x)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Vr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Bs}">${Vr} ${_s}</span>
                    </div>
                  </header>
                  ${N?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Et(N.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${B(N.plannedNetCents)}" data-year-trend-active-net>${p(N.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${p(N.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${p(N.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${B(N.deltaCents)}" data-year-trend-active-delta>${N.deltaCents>=0?"+":""}${p(N.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${z} ${D}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${a?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Ss.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${Z}" y1="${r.y.toFixed(1)}" x2="${z-fe}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${Z-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${p(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${Z}" y1="${Rr.toFixed(1)}" x2="${z-fe}" y2="${Rr.toFixed(1)}"></line>
                              ${Kr?`<path class="year-trend-area" d="${Kr}"></path>`:""}
                              ${Un?`<path class="year-trend-line" d="${Un}"></path>`:""}
                              ${dt.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${D-12}" text-anchor="middle">${Et(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${dt.map((r,w)=>`
                                    <button
                                      class="year-trend-point-hit ${w===dt.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${w===dt.length-1?"1":"0"}"
                                      data-month-label="${Et(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Et(r.monthLabel)}: Kalkulierter Saldo ${p(r.plannedNetCents)}, Einkommen ${p(r.effectiveIncomeCents)}, Ausgaben ${p(r.actualCostCents)}"
                                      aria-pressed="${w===dt.length-1?"true":"false"}"
                                    ></button>
                                  `).join("")}
                            </div>
                          </div>
                          <div class="year-trend-footer muted">Hover oder Tippen zeigt den kalkulierten Monatswert direkt im Chart an.</div>
                          <div class="year-trend-live" aria-live="polite" data-year-trend-live></div>
                        </div>
                      `:'<p class="muted">Keine Monatsdaten vorhanden.</p>'}
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Budget vs. Ist nach Kategorie (Jahr)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-actual"></span>Ist</span>
                    </div>
                  </header>
                  <div class="circle-chart-container" aria-label="Budgetnutzung je Kategorie (Jahr)">
                    ${k.map(r=>{const w=Rn(r.actualCents,r.budgetCents),j=Math.min(100,w),J=`${w.toFixed(0)}%`,xe=r.budgetCents-r.actualCents,Je=xe<0?"danger":xe>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${ja(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${j.toFixed(1)}%" title="${r.label}: ${p(r.actualCents)} von ${p(r.budgetCents)}">
                              <span class="circle-chart-value">${J}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${p(r.budgetCents)} / I ${p(r.actualCents)}</div>
                            <div class="circle-chart-meta ${Je}">${xe>=0?"+":""}${p(xe)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(m.length,1)}, minmax(0, 1fr));">
                    ${m.map(r=>{const w=se(r.actualCostCents,b);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                    ${m.map(r=>{const w=se(Math.abs(r.plannedNetCents),E),j=se(Math.abs(r.actualNetCents),E),J=r.plannedNetCents<0?"bar-negative":"bar-positive",xe=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Me(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(r.plannedNetCents)} | Ist-Saldo: ${p(r.actualNetCents)}">
                              <div class="bar ${J}" style="width:${w}; opacity: 0.35;"></div>
                              <div class="bar ${xe}" style="width:${j}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${B(r.plannedNetCents)}">B ${p(r.plannedNetCents)}</span>
                              <span class="${B(r.actualNetCents)}">I ${p(r.actualNetCents)}</span>
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
                  ${m.map(r=>`<tr>
                        <td>${Me(r.month)}</td>
                        <td>${p(r.effectiveIncomeCents)}</td>
                        <td>${p(r.plannedBudgetCents)}</td>
                        <td>${p(r.actualCostCents)}</td>
                        <td class="${B(r.plannedNetCents)}">${p(r.plannedNetCents)}</td>
                        <td class="${B(r.actualNetCents)}">${p(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${t.map(r=>`<option value="${r.year}" ${r.year===n?"selected":""}>${r.year}</option>`).join("")}
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
                    ${m.map(r=>{const w=se(r.foodAndGoingOutCents,_);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(m.length,1)}, minmax(0, 1fr));">
                    ${m.map(r=>{const w=se(r.foodCents,$);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(m.length,1)}, minmax(0, 1fr));">
                    ${m.map(r=>{const w=se(r.goingOutCents,T);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${p(Ar)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(Wn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(Gn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${B(Yr)}">${p(Yr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${B(zr)}">${p(zr)}</div><div class="eval-value"></div></div>
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
                    ${Ur.map(r=>{const w=se(r.budgetCents,Wr),j=se(r.actualCents,Wr),J=ja(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${p(r.budgetCents)} | Ist: ${p(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${w}"></div>
                              <div class="bar-marker" style="left:${w}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${J}" style="width:${j}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${p(r.budgetCents)}</span>
                              <span class="muted">I ${p(r.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ft.length,1)}, minmax(0, 1fr));">
                    ${ft.map(r=>{const w=se(r.actualTotalCents,Ts);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
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
                    ${ft.map(r=>{const w=se(Math.abs(r.plannedNetCents),Gr),j=se(Math.abs(r.actualNetCents),Gr),J=r.plannedNetCents<0?"bar-negative":"bar-positive",xe=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(r.plannedNetCents)} | Ist-Saldo: ${p(r.actualNetCents)}">
                              <div class="bar ${J}" style="width:${w}; opacity: 0.35;"></div>
                              <div class="bar ${xe}" style="width:${j}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${B(r.plannedNetCents)}">B ${p(r.plannedNetCents)}</span>
                              <span class="${B(r.actualNetCents)}">I ${p(r.actualNetCents)}</span>
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
                    <th>Einkommen (Gehalt + Einkommen) (€)</th>
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${ft.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${p(r.salaryIncomeCents)}</td>
                        <td>${p(r.totalIncomeCents)}</td>
                        <td>${p(r.effectiveIncomeCents)}</td>
                        <td>${p(r.budgetTotalCents)}</td>
                        <td>${p(r.actualTotalCents)}</td>
                        <td class="${B(r.plannedNetCents)}">${p(r.plannedNetCents)}</td>
                        <td class="${B(r.actualNetCents)}">${p(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>

              <div class="chart-grid">
                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Einkommen pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Einkommen (Gehalt + Einkommen)</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ft.length,1)}, minmax(0, 1fr));">
                    ${ft.map(r=>{const w=se(r.totalIncomeCents,As);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.totalIncomeCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Gehalt pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Gehalt</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ft.length,1)}, minmax(0, 1fr));">
                    ${ft.map(r=>{const w=se(r.salaryIncomeCents,Os);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.salaryIncomeCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Einkommen pro Jahr vs Kosten pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-income"></span>Einkommen</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ft.length,1)}, minmax(0, 1fr));">
                    ${ft.map(r=>{const w=se(r.totalIncomeCents,Hr),j=se(r.actualTotalCents,Hr);return`
                          <div class="spark-bar" title="${r.year}: Einkommen ${p(r.totalIncomeCents)} | Kosten ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${w}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${j}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Gehalt pro Jahr vs Kosten pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-income"></span>Gehalt</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ft.length,1)}, minmax(0, 1fr));">
                    ${ft.map(r=>{const w=se(r.salaryIncomeCents,Jr),j=se(r.actualTotalCents,Jr);return`
                          <div class="spark-bar" title="${r.year}: Gehalt ${p(r.salaryIncomeCents)} | Kosten ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${w}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${j}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>
            `}
      </div>
    `,Is=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,Ds=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${qt?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${qt?yt(qt.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${qt?"Änderung speichern":"Vorlage speichern"}</button>
          ${qt?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${p(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,Xr=h.annualVariableFixedTemplates.reduce((r,w)=>r+w.plannedCents,0),Ns=Math.round(Xr/12),Ls=`
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

        <div class="eval-grid">
          <section class="eval-tile">
            <header class="eval-tile-header">
              <h4>Summenübersicht</h4>
              <div class="eval-tile-columns"><span>Wert</span><span></span></div>
            </header>
            <div class="eval-rows">
              <div class="eval-row eval-strong">
                <div class="eval-label">Gesamtsumme Variable Fixkosten (jährlich)</div>
                <div class="eval-value budget-under">${p(Xr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${p(Ns)}</div>
                <div class="eval-value"></div>
              </div>
            </div>
          </section>
        </div>

        <table>
          <thead>
            <tr><th>Name</th><th>Datum</th><th>Monat (jährlich)</th><th>Betrag (€)</th><th></th></tr>
          </thead>
          <tbody>
            ${h.annualVariableFixedTemplates.map(r=>{const w=Na(r.dueDateIso),j=w?Me(w.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${j}</td>
                    <td>${p(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Qr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",qs=h.topModal==="years"?Is:h.topModal==="fixed"?Ds:h.topModal==="variable-fixed"?Ls:h.topModal==="dashboard"?Fs:"";P.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Ga?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${ws.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${ai(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Qr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Qr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${qs}
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
                  ${xn.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${xn.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Et(r.message)}</span></li>`).join("")}</ol>`}
                  <div class="inline">
                    <button class="btn btn-primary" id="unexported-change-log-backup" type="button">Backup jetzt erstellen</button>
                  </div>
                </div>
              </div>
            </div>
          `:""}

        ${h.showPersistentAuditLogModal?`
            <div class="panel-modal-backdrop" id="persistent-audit-log-backdrop" role="dialog" aria-modal="true" aria-label="Chronik aller Erfassungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Chronik aller Erfassungen</h2>
                  <button class="btn btn-quiet" id="persistent-audit-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${an.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${an.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Et(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Me(h.selectedMonth)} ${o.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${h.years.map(r=>`<option value="${r.year}" ${r.year===h.selectedYear?"selected":""}>${r.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${h.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(r,w)=>w+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Me(r)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${p(ce)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${p($e)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${p(nt)}</strong>
              </div>
              <div class="compact-income-row ${Ve}">
                <span>Übernahme aus Vormonat</span>
                <strong>${it?p(K):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${p(at)}</strong>
              </div>
            </section>

            <div class="compact-costs-grid">
              <section class="compact-cost-section">
                <div class="compact-cost-kicker">Fixkosten</div>
                <div class="compact-cost-table" role="table" aria-label="Fixkosten im Monat">
                  <div class="compact-cost-head" role="row">
                    <span>Name</span>
                    <span>Budget</span>
                    <span>Ist</span>
                  </div>
                  ${Wa}
                  ${An}
                </div>
              </section>

              <section class="compact-cost-section">
                <div class="compact-cost-kicker">Variable</div>
                <div class="compact-cost-table" role="table" aria-label="Variable Kosten im Monat">
                  <div class="compact-cost-head" role="row">
                    <span>Name</span>
                    <span>Budget</span>
                    <span>Ist</span>
                  </div>
                  ${mr}
                  ${Tr}
                </div>
              </section>

              <section class="compact-cost-section compact-cost-section-summary">
                <div class="compact-cost-kicker">Essen + Trinken</div>
                <div class="compact-cost-table" role="table" aria-label="Essen und Trinken Summen">
                  <div class="compact-cost-head" role="row">
                    <span>Bereich</span>
                    <span>Budget</span>
                    <span>Ist</span>
                  </div>
                  <div class="compact-cost-row">
                    <div class="compact-cost-name">Monatssumme</div>
                    <div class="compact-cost-budget">${p(Ue)}</div>
                    <div class="compact-cost-actual ${Nt}">${nn(Dt)}</div>
                  </div>
                </div>
              </section>

              <section class="compact-cost-section compact-cost-section-summary">
                <div class="compact-cost-kicker">Sonstiges</div>
                <div class="compact-cost-table" role="table" aria-label="Sonstige Kosten Summen">
                  <div class="compact-cost-head" role="row">
                    <span>Bereich</span>
                    <span>Budget</span>
                    <span>Ist</span>
                  </div>
                  <div class="compact-cost-row">
                    <div class="compact-cost-name">Monatssumme</div>
                    <div class="compact-cost-budget">${p(F)}</div>
                    <div class="compact-cost-actual ${qe}">${nn(d.miscCents)}</div>
                  </div>
                </div>
              </section>
            </div>
          </article>

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
                  ${Tn.map(r=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${r.label}"
                            data-budget-cents="${r.budgetCents}"
                            data-actual-cents="${r.actualCents}"
                            role="img"
                            aria-label="${r.label}: Budget ${p(r.budgetCents)} €, Ist ${p(r.actualCents)} €"
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
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ausgaben</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Netto</span>
                  </div>
                </header>
                <div class="bar-chart">
                  ${Vn.map(r=>{const w=se(Math.abs(r.valueCents),lr),j=r.valueCents>=0?"+":"",J=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${p(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${w}"></div>
                          </div>
                          <div class="bar-meta"><span class="${J}">${j}${p(r.valueCents)}</span></div>
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
                      ${M.map(r=>{const w=wt.get(r.month)?.totalBudgetCents??0,j=se(w,Ya),J=se(r.summary.totalCents,Ya);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.totalCents)} € | Budget ${p(w)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${j}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${J}"><span class="spark-bar-fill-value">${p(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const w=wt.get(r.month),j=(w?.foodBudgetCents??0)+(w?.goingOutBudgetCents??0),J=r.summary.foodCents+r.summary.goingOutCents,xe=se(j,ya),Je=se(J,ya);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(J)} € | Budget ${p(j)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${xe}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Je}"><span class="spark-bar-fill-value">${p(J)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const w=wt.get(r.month)?.fixedBudgetCents??0,j=se(w,za),J=se(r.summary.fixedCents,za);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.fixedCents)} € | Budget ${p(w)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${j}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${J}"><span class="spark-bar-fill-value">${p(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const w=wt.get(r.month)?.variableBudgetCents??0,j=se(w,Ua),J=se(r.summary.variableCents,Ua);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.variableCents)} € | Budget ${p(w)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${j}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${J}"><span class="spark-bar-fill-value">${p(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const w=wt.get(r.month)?.miscBudgetCents??0,j=se(w,hr),J=se(r.summary.miscCents,hr);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.miscCents)} € | Budget ${p(w)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${j}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${J}"><span class="spark-bar-fill-value">${p(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${p(ce)}</div>
                    <div class="eval-value">${p(ze)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${p($e)}</div>
                    <div class="eval-value">${p(ot)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${p(nt)}</div>
                    <div class="eval-value">${p(Vt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ve}">${it?p(K):"-"}</div>
                    <div class="eval-value ${Ee}">${o?p(Xt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${p(at)}</div>
                    <div class="eval-value">${p(_t)}</div>
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
                    <div class="eval-value">${Rt(O,d.foodCents)}</div>
                    <div class="eval-value">${p(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Rt(L,d.goingOutCents)}</div>
                    <div class="eval-value">${p(te)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Rt(q,d.fixedCents)}</div>
                    <div class="eval-value">${p(ge)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Rt(H,d.variableCents)}</div>
                    <div class="eval-value">${p(ue)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Rt(F,d.miscCents)}</div>
                    <div class="eval-value">${p(Ae)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Rt(De,d.totalCents)}</div>
                    <div class="eval-value">${p(kt)}</div>
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
                    <div class="eval-value ${Pr}">${p(d.foodCents)}</div>
                    <div class="eval-value">${p(C.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Ca}">${p(d.goingOutCents)}</div>
                    <div class="eval-value">${p(C.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${pr}">${p(d.fixedCents)}</div>
                    <div class="eval-value">${p(C.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Ut}">${p(d.variableCents)}</div>
                    <div class="eval-value">${p(C.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${qe}">${p(d.miscCents)}</div>
                    <div class="eval-value">${p(C.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${p(d.totalCents)}</div>
                    <div class="eval-value">${p(C.totalCents)}</div>
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
                    <div class="eval-value ${B(en)}">${p(en)}</div>
                    <div class="eval-value ${B(tn)}">${p(tn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${B(ct)}">${p(ct)}</div>
                    <div class="eval-value ${B(Yt)}">${p(Yt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Ye}">${p(re)}</div>
                    <div class="eval-value ${Le}">${p(lt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${B(pt)}">${p(pt)}</div>
                    <div class="eval-value ${B(Qt)}">${p(Qt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${rt}">${Pe}</div>
                    <div class="eval-value ${Cn}">${_e}</div>
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
                  <th>Einkommen (€)</th>
                  <th>Budget gesamt (€)</th>
                  <th>Kalkulierter Saldo (€)</th>
                </tr>
              </thead>
              <tbody>
                ${M.map((r,w,j)=>{const J=o?Se.get(he(o.year,r.month)):void 0,xe=J?.plannedBudgetCents??0,Je=J?.netCents??0,Tt=Va.get(r.month)??0,rn=zn.get(r.month)??0,kn=Je<0?"danger":Je>0?"budget-under":"",st=j[w-1],ka=st?.summary.foodCents??null,wa=st?.summary.goingOutCents??null,$t=st?.summary.fixedCents??null,Hn=st?.summary.variableCents??null,Zr=st?.summary.miscCents??null,es=st?.summary.totalCents??null,ts=st!==void 0?Va.get(st.month)??0:null,ns=st!==void 0?zn.get(st.month)??0:null,as=o&&st?Se.get(he(o.year,st.month))?.plannedBudgetCents??0:null,rs=ka===null?null:r.summary.foodCents-ka,ss=wa===null?null:r.summary.goingOutCents-wa,is=$t===null?null:r.summary.fixedCents-$t,os=Hn===null?null:r.summary.variableCents-Hn,ls=Zr===null?null:r.summary.miscCents-Zr,cs=es===null?null:r.summary.totalCents-es,us=ts===null?null:Tt-ts,ds=ns===null?null:rn-ns,fs=as===null?null:xe-as,$a=St=>St===null?"muted":St>0?"danger":St<0?"budget-under":"muted",hs=St=>St===null?"muted":St>0?"budget-under":St<0?"danger":"muted",Ks=St=>St===null?"muted":St>0?"danger":St<0?"budget-under":"muted",wn=St=>St===null?"(Δ -)":`(Δ ${St>0?"+":""}${p(St)})`,ps=o&&st?Se.get(he(o.year,st.month))?.netCents??0:null,Sa=ps===null?null:Je-ps,js=Sa===null?"(Δ -)":`(Δ ${Sa>0?"+":""}${p(Sa)})`,Rs=Sa===null?"muted":Sa<0?"danger":Sa>0?"budget-under":"muted";return`<tr>
                  <td>${Me(r.month)}</td>
                  <td>${p(r.summary.foodCents)} <span class="${$a(rs)}">${wn(rs)}</span></td>
                  <td>${p(r.summary.goingOutCents)} <span class="${$a(ss)}">${wn(ss)}</span></td>
                  <td>${p(r.summary.fixedCents)} <span class="${$a(is)}">${wn(is)}</span></td>
                  <td>${p(r.summary.variableCents)} <span class="${$a(os)}">${wn(os)}</span></td>
                  <td>${p(r.summary.miscCents)} <span class="${$a(ls)}">${wn(ls)}</span></td>
                  <td>${p(r.summary.totalCents)} <span class="${$a(cs)}">${wn(cs)}</span></td>
                  <td>${p(Tt)} <span class="${hs(us)}">${wn(us)}</span></td>
                  <td>${p(rn)} <span class="${hs(ds)}">${wn(ds)}</span></td>
                  <td>${p(xe)} <span class="${Ks(fs)}">${wn(fs)}</span></td>
                  <td class="${kn}">${p(Je)} <span class="${Rs}">${js}</span></td>
                </tr>`}).join("")}
                ${fr}
                ${Mr}
              </tbody>
            </table>
          </article>

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${l?"":"disabled"} />
              </label>
              <label>
                Herkunft
                <select id="income-source" ${l?"":"disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${l?"":"disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${l?"":"disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${l?"":"disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${l?`<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${Ve}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${yt(K)}" />
                    </td>
                    <td>-</td>
                  </tr>${l.incomes.map(r=>`<tr>
                    <td>${r.description}</td>
                    <td>
                      <select data-income-source="${r.id}">
                        <option value="" ${r.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${r.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${r.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${r.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${p(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${r.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${p(ce)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${p($e)} €</strong>
                </div>
                <div class="column-overview-row ${Ve}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${p(K)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${p(at)} €</strong>
                </div>
                <div class="column-overview-row ${Ie}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${p(It)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Ot(O,d.foodCents)}
                ${Ot(L,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${p(Ue)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${p(Dt)} €</strong>
                  </div>
                  <div class="column-overview-row ${Nt}">
                    <span>Diff</span>
                    <strong>${p(Zt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${yt(O)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${yt(L)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(r=>{const w=r.foodCents>0,j=r.goingOutCents>0,J=`${r.isoDate===f?"today-row":""} ${w||j?"day-has-entry":""}`.trim(),xe=`amount-input ${w?"day-input-has-value":""}`.trim(),Je=`amount-input ${j?"day-input-has-value":""}`.trim();return`<tr class="${J}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${xe}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${yt(r.foodCents)}" /></td>
                      <td><input class="${Je}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${yt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Ot(q,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${yt(q)}" ${l?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${l?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${l?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${l?"":"disabled"}>Position anlegen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${l?l.fixedCosts.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${yt(r.plannedCents)}" /></td>
                    <td class="${je(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${yt(r.actualCents)}" /></td>
                    <td class="${je(r.actualCents,r.plannedCents)}">${p(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Ot(H,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${yt(H)}" ${l?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${l?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${l?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${l?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-variable-position-recurring" ${l?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${l?l.variablePositions.map(r=>`<tr>
                    <td>${r.name}${r.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${yt(r.budgetCents)}" /></td>
                    <td class="${je(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${yt(r.actualCents)}" /></td>
                    <td class="${je(r.actualCents,r.budgetCents)}">${p(r.actualCents-r.budgetCents)}</td>
                    <td>
                      <button class="btn" data-move-variable-position-next="${r.id}">Nächster Monat</button>
                      <button class="btn btn-quiet" data-remove-variable-position="${r.id}">Löschen</button>
                    </td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-misc-costs">
              <h3>4) Sonstige (unter 30€)</h3>
              ${Ot(F,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${yt(F)}" ${l?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${l?"":"disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${l?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${l?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${l?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${l?l.miscCosts.map(r=>`<tr>
                    <td>${r.description}</td>
                    <td>${p(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-misc="${r.id}">Löschen</button></td>
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
          <p class="muted">Letztes verwendetes Backup: ${vr}</p>
          <p class="muted">Die Daten bleiben lokal im Browser (IndexedDB). Zusätzlich kannst du Backups als Datei sichern und später importieren.</p>
          <div class="inline">
            <button class="btn" id="open-persistent-audit-log" type="button">Chronik öffnen</button>
          </div>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),Be(),sn(),vt(),_a()}function Be(){const o=P.querySelector("#theme-select"),l=P.querySelector("#open-years-modal"),f=P.querySelector("#open-fixed-modal"),d=P.querySelector("#open-variable-fixed-modal"),C=P.querySelector("#open-dashboard-modal"),M=P.querySelector("#panel-modal-close"),O=P.querySelector("#panel-modal-backdrop"),L=P.querySelector("#open-unexported-change-log"),q=P.querySelector("#open-persistent-audit-log"),H=P.querySelector("#unexported-change-log-close"),F=P.querySelector("#unexported-change-log-backup"),Q=P.querySelector("#unexported-change-log-backdrop"),te=P.querySelector("#persistent-audit-log-close"),ge=P.querySelector("#persistent-audit-log-backdrop"),ue=P.querySelector("#new-year"),Ae=P.querySelector("#create-year"),ce=P.querySelector("#year-select"),$e=P.querySelector("#month-select");o?.addEventListener("change",()=>{const B=o.value;Cs(B)&&na(B)}),l?.addEventListener("click",()=>{Qn("years")}),f?.addEventListener("click",()=>{Qn("fixed")}),d?.addEventListener("click",()=>{Qn("variable-fixed")}),C?.addEventListener("click",()=>{Qn("dashboard")}),L?.addEventListener("click",()=>{Zn()}),q?.addEventListener("click",()=>{On()}),H?.addEventListener("click",()=>{ea()}),F?.addEventListener("click",async()=>{try{await Ka()}catch(B){console.error("Backup-Export fehlgeschlagen",B),me("Backup konnte nicht exportiert werden.","error")}}),Q?.addEventListener("click",B=>{B.target===Q&&ea()}),te?.addEventListener("click",()=>{ta()}),ge?.addEventListener("click",B=>{B.target===ge&&ta()}),P.querySelectorAll("[data-dashboard-tab]").forEach(B=>{B.addEventListener("click",()=>{const R=B.dataset.dashboardTab;R!=="year"&&R!=="food"&&R!=="all"||(h.dashboardTab=R,ne())})});const nt=P.querySelector("#dashboard-year-select");nt?.addEventListener("change",()=>{const B=Number.parseInt(nt.value,10);Number.isInteger(B)&&(h.dashboardYear=B,ne())}),M?.addEventListener("click",()=>{Ba()}),O?.addEventListener("click",B=>{B.target===O&&Ba()}),h.topModal&&window.setTimeout(()=>{M?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{H?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{te?.focus()},0),Ae?.addEventListener("click",async()=>{const B=Number.parseInt(ue?.value??"",10);if(!Number.isInteger(B)){alert("Bitte gültiges Jahr eingeben.");return}await aa(B)}),ce?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ce.value,10),h.selectedMonth=fn(),ne()}),$e?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt($e.value,10),ne()});const Se=P.querySelector("#fixed-template-name"),pe=P.querySelector("#fixed-template-amount"),Qe=P.querySelector("#add-fixed-template"),K=P.querySelector("#cancel-fixed-template-edit"),it=P.querySelector("#annual-variable-fixed-name"),at=P.querySelector("#annual-variable-fixed-date"),Ze=P.querySelector("#annual-variable-fixed-amount"),It=P.querySelector("#add-annual-variable-fixed-template");Qe?.addEventListener("click",async()=>{const B=Se?.value??"",R=Ne(pe?.value??"0");await Er(B,R),Se&&(Se.value=""),pe&&(pe.value="")}),K?.addEventListener("click",()=>{Mn()}),It?.addEventListener("click",async()=>{const B=it?.value??"",R=at?.value??"",rt=Ne(Ze?.value??"0");await la(B,R,rt),it&&(it.value=""),at&&(at.value=""),Ze&&(Ze.value="")}),P.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(B=>{B.addEventListener("click",async()=>{const R=B.dataset.removeAnnualVariableFixedTemplate;R&&await Br(R)})}),P.querySelectorAll("[data-edit-fixed-template]").forEach(B=>{B.addEventListener("click",()=>{const R=B.dataset.editFixedTemplate;R&&cn(R)})}),P.querySelectorAll("[data-remove-fixed-template]").forEach(B=>{B.addEventListener("click",async()=>{const R=B.dataset.removeFixedTemplate;R&&await un(R)})}),P.querySelectorAll("[data-day-food]").forEach(B=>{B.addEventListener("click",R=>{R.preventDefault(),B.blur(),et(B)}),B.addEventListener("change",async()=>{const R=B.dataset.dayFood;R&&await Ht(R,"foodCents",Ne(B.value))})}),P.querySelectorAll("[data-day-going]").forEach(B=>{B.addEventListener("click",R=>{R.preventDefault(),B.blur(),et(B)}),B.addEventListener("change",async()=>{const R=B.dataset.dayGoing;R&&await Ht(R,"goingOutCents",Ne(B.value))})}),P.querySelectorAll("[data-fixed-actual]").forEach(B=>{B.addEventListener("click",R=>{R.preventDefault(),B.blur(),et(B)}),B.addEventListener("change",async()=>{const R=B.dataset.fixedActual;R&&await tr(R,Ne(B.value))})}),P.querySelectorAll("[data-fixed-planned]").forEach(B=>{B.addEventListener("click",R=>{R.preventDefault(),B.blur(),et(B)}),B.addEventListener("change",async()=>{const R=B.dataset.fixedPlanned;R&&await gn(R,Ne(B.value))})});const re=P.querySelector("#fixed-budget");re?.addEventListener("click",B=>{B.preventDefault(),re.blur(),et(re)}),re?.addEventListener("change",async()=>{await Re(Ne(re.value))});const pt=P.querySelector("#food-budget");pt?.addEventListener("click",B=>{B.preventDefault(),pt.blur(),et(pt)}),pt?.addEventListener("change",async()=>{await bn(Ne(pt.value))});const Pe=P.querySelector("#going-out-budget");Pe?.addEventListener("click",B=>{B.preventDefault(),Pe.blur(),et(Pe)}),Pe?.addEventListener("change",async()=>{await Jt(Ne(Pe.value))}),P.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{xr()});const Ie=P.querySelector("#misc-budget");Ie?.addEventListener("click",B=>{B.preventDefault(),Ie.blur(),et(Ie)}),Ie?.addEventListener("change",async()=>{await ar(Ne(Ie.value))});const Ye=P.querySelector("#variable-budget");Ye?.addEventListener("click",B=>{B.preventDefault(),Ye.blur(),et(Ye)}),Ye?.addEventListener("change",async()=>{await Pn(Ne(Ye.value))});const ze=P.querySelector("#variable-position-name"),ot=P.querySelector("#variable-position-budget"),Vt=P.querySelector("#add-variable-position"),Xt=P.querySelector("#add-variable-position-recurring"),_t=P.querySelector("#misc-description"),lt=P.querySelector("#misc-amount"),Qt=P.querySelector("#add-misc"),_e=P.querySelector("#add-misc-recurring"),Ee=P.querySelector("#income-description"),Le=P.querySelector("#income-source"),De=P.querySelector("#income-amount"),Ue=P.querySelector("#add-income"),Dt=P.querySelector("#add-income-recurring"),Zt=P.querySelector("#fixed-cost-name"),Nt=P.querySelector("#fixed-cost-budget"),kt=P.querySelector("#add-fixed-cost"),ct=P.querySelector("#carryover-override");ct?.addEventListener("click",B=>{B.preventDefault(),ct.blur(),et(ct)}),ct?.addEventListener("change",async()=>{const B=ct.value;if(!B.trim()){await ca(null);return}await ca(Ne(B))}),kt?.addEventListener("click",async()=>{const B=Ne(Nt?.value??"0");await nr(Zt?.value??"",B),Zt&&(Zt.value=""),Nt&&(Nt.value="")}),Vt?.addEventListener("click",async()=>{const B=Ne(ot?.value??"0");await ua(ze?.value??"",B,!1),ze&&(ze.value=""),ot&&(ot.value="")}),Xt?.addEventListener("click",async()=>{const B=Ne(ot?.value??"0");await ua(ze?.value??"",B,!0),ze&&(ze.value=""),ot&&(ot.value="")}),Qt?.addEventListener("click",async()=>{const B=Ne(lt?.value??"0");await de(_t?.value??"",B,!1),_t&&(_t.value=""),lt&&(lt.value="")}),_e?.addEventListener("click",async()=>{const B=Ne(lt?.value??"0");await de(_t?.value??"",B,!0),_t&&(_t.value=""),lt&&(lt.value="")}),Ue?.addEventListener("click",async()=>{const B=Ne(De?.value??"0"),R=Le?.value,rt=R==="balance"||R==="fresh"||R==="salary"?R:void 0;await qa(Ee?.value??"",B,rt,!1),Ee&&(Ee.value=""),De&&(De.value=""),Le&&(Le.value="salary")}),Dt?.addEventListener("click",async()=>{const B=Ne(De?.value??"0"),R=Le?.value,rt=R==="balance"||R==="fresh"||R==="salary"?R:void 0;await qa(Ee?.value??"",B,rt,!0),Ee&&(Ee.value=""),De&&(De.value=""),Le&&(Le.value="salary")}),P.querySelectorAll("[data-income-source]").forEach(B=>{B.addEventListener("change",async()=>{const R=B.dataset.incomeSource;if(!R)return;const rt=B.value;await fa(R,rt==="balance"||rt==="fresh"||rt==="salary"?rt:void 0)})}),P.querySelectorAll("[data-variable-position-budget]").forEach(B=>{B.addEventListener("click",R=>{R.preventDefault(),B.blur(),et(B)}),B.addEventListener("change",async()=>{const R=B.dataset.variablePositionBudget;R&&await rr(R,Ne(B.value))})}),P.querySelectorAll("[data-variable-position-actual]").forEach(B=>{B.addEventListener("click",R=>{R.preventDefault(),B.blur(),et(B)}),B.addEventListener("change",async()=>{const R=B.dataset.variablePositionActual;R&&await yn(R,Ne(B.value))})}),P.querySelectorAll("[data-remove-variable-position]").forEach(B=>{B.addEventListener("click",async()=>{const R=B.dataset.removeVariablePosition;R&&await da(R)})}),P.querySelectorAll("[data-move-variable-position-next]").forEach(B=>{B.addEventListener("click",async()=>{const R=B.dataset.moveVariablePositionNext;R&&await sr(R)})}),P.querySelectorAll("[data-remove-fixed]").forEach(B=>{B.addEventListener("click",async()=>{const R=B.dataset.removeFixed;R&&await La(R)})}),P.querySelectorAll("[data-remove-income]").forEach(B=>{B.addEventListener("click",async()=>{const R=B.dataset.removeIncome;R&&await jn(R)})}),P.querySelectorAll("[data-remove-misc]").forEach(B=>{B.addEventListener("click",async()=>{const R=B.dataset.removeMisc;R&&await ir(R)})});const Yt=P.querySelector("#backup-export"),en=P.querySelector("#backup-import");P.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Yt?.addEventListener("click",async()=>{await Ka()}),en?.addEventListener("change",async()=>{const B=en.files?.[0];if(B){try{await or(B)}catch(R){console.error("Backup-Import fehlgeschlagen",R),me("Backup konnte nicht importiert werden.","error")}en.value=""}})}return{init:Sr}}const si="modulepreload",ii=function(P){return"/habu26/"+P},ks={},oi=function(h,Fe,G){let be=Promise.resolve();if(Fe&&Fe.length>0){let ht=function(Ge){return Promise.all(Ge.map(le=>Promise.resolve(le).then(Ct=>({status:"fulfilled",value:Ct}),Ct=>({status:"rejected",reason:Ct}))))};var ke=ht;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),ye=ie?.nonce||ie?.getAttribute("nonce");be=ht(Fe.map(Ge=>{if(Ge=ii(Ge),Ge in ks)return;ks[Ge]=!0;const le=Ge.endsWith(".css"),Ct=le?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ge}"]${Ct}`))return;const mt=document.createElement("link");if(mt.rel=le?"stylesheet":si,le||(mt.as="script"),mt.crossOrigin="",mt.href=Ge,ye&&mt.setAttribute("nonce",ye),document.head.appendChild(mt),le)return new Promise((vt,sn)=>{mt.addEventListener("load",vt),mt.addEventListener("error",()=>sn(new Error(`Unable to preload CSS for ${Ge}`)))})}))}function ae(ie){const ye=new Event("vite:preloadError",{cancelable:!0});if(ye.payload=ie,window.dispatchEvent(ye),!ye.defaultPrevented)throw ie}return be.then(ie=>{for(const ye of ie||[])ye.status==="rejected"&&ae(ye.reason);return h().catch(ae)})};function li(P={}){const{immediate:h=!1,onNeedRefresh:Fe,onOfflineReady:G,onRegistered:be,onRegisteredSW:ae,onRegisterError:ke}=P;let ie,ye;const ht=async(le=!0)=>{await ye};async function Ge(){if("serviceWorker"in navigator){if(ie=await oi(async()=>{const{Workbox:le}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:le}},[]).then(({Workbox:le})=>new le("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(le=>{ke?.(le)}),!ie)return;ie.addEventListener("activated",le=>{(le.isUpdate||le.isExternal)&&window.location.reload()}),ie.addEventListener("installed",le=>{le.isUpdate||G?.()}),ie.register({immediate:h}).then(le=>{ae?ae("/habu26/sw.js",le):be?.(le)}).catch(le=>{ke?.(le)})}}return ye=Ge(),ht}function ci(){li({immediate:!0})}const $s=document.getElementById("app");if(!$s)throw new Error("App-Container nicht gefunden.");ri($s).init();ci();
