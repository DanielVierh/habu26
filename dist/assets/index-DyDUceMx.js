(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const me of document.querySelectorAll('link[rel="modulepreload"]'))H(me);new MutationObserver(me=>{for(const re of me)if(re.type==="childList")for(const Ce of re.addedNodes)Ce.tagName==="LINK"&&Ce.rel==="modulepreload"&&H(Ce)}).observe(document,{childList:!0,subtree:!0});function Te(me){const re={};return me.integrity&&(re.integrity=me.integrity),me.referrerPolicy&&(re.referrerPolicy=me.referrerPolicy),me.crossOrigin==="use-credentials"?re.credentials="include":me.crossOrigin==="anonymous"?re.credentials="omit":re.credentials="same-origin",re}function H(me){if(me.ep)return;me.ep=!0;const re=Te(me);fetch(me.href,re)}})();const Es=[1,2,3,4,5,6,7,8,9,10,11,12];function Lr(){return new Date().toISOString()}function At(M){const h=Math.random().toString(36).slice(2,10);return`${M}_${Date.now()}_${h}`}function Bs(M,h){const Te=new Date(M,h,0).getDate(),H=[];for(let me=1;me<=Te;me+=1){const re=new Date(Date.UTC(M,h-1,me));H.push({isoDate:re.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return H}function _s(M){return M.map(h=>({id:At("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function rs(M,h,Te){const H=h.reduce((re,Ce)=>re+Ce.plannedCents,0),me=Es.map(re=>({month:re,days:Bs(M,re),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:_s(h),fixedBudgetCents:H,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:M,createdAt:Lr(),templateVersion:Te,months:me}}function ss(M,h){return{id:At("expense"),description:M,amountCents:h,createdAt:Lr()}}function is(M,h,Te){const H={id:At("income"),description:M,amountCents:h,createdAt:Lr()};return Te?{...H,incomeSource:Te}:H}var Ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ps(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var vr={exports:{}},Ts=vr.exports,os;function As(){return os||(os=1,(function(M,h){((Te,H)=>{M.exports=H()})(Ts,function(){var Te=function(e,t){return(Te=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},H=function(){return(H=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function me(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ms,Ce=Object.keys,se=Array.isArray;function ge(e,t){return typeof t=="object"&&Ce(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||re.Promise||(re.Promise=Promise);var ct=Object.getPrototypeOf,je={}.hasOwnProperty;function oe(e,t){return je.call(e,t)}function bt(e,t){typeof t=="function"&&(t=t(ct(e))),(typeof Reflect>"u"?Ce:Reflect.ownKeys)(t).forEach(function(n){ht(e,n,t[n])})}var ft=Object.defineProperty;function ht(e,t,n,a){ft(e,t,ge(n&&oe(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function Qt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ht(e.prototype,"constructor",e),{extend:bt.bind(null,e.prototype)}}}}var sa=Object.getOwnPropertyDescriptor,_a=[].slice;function ia(e,t,n){return _a.call(e,t,n)}function oa(e,t){return t(e)}function Fn(e){if(!e)throw new Error("Assertion Failed")}function la(e){re.setImmediate?setImmediate(e):setTimeout(e,0)}function Vt(e,t){if(typeof t=="string"&&oe(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Vt(e,t[a]);n.push(i)}return n}var u,c=t.indexOf(".");return c===-1||(u=e[t.substr(0,c)])==null?void 0:Vt(u,t.substr(c+1))}function pt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Fn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)pt(e,t[a],n[a])}else{var i,u,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?se(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:pt(u=(u=e[i])&&oe(e,i)?u:e[i]={},c,n)):n===void 0?se(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ma(e){var t,n={};for(t in e)oe(e,t)&&(n[t]=e[t]);return n}var br=[].concat;function Pa(e){return br.apply([],e)}var Yt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Pa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return re[e]}),Wa=new Set(Yt.map(function(e){return re[e]})),Dn=null;function vt(e){return Dn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Dn.get(n);if(a)return a;if(se(n)){a=[],Dn.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Wa.has(n.constructor))a=n;else{var u,c=ct(n);for(u in a=c===Object.prototype?{}:Object.create(c),Dn.set(n,a),n)oe(n,u)&&(a[u]=t(n[u]))}return a})(e),Dn=null,e}var In={}.toString;function Ta(e){return In.call(e).slice(8,-1)}var Aa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",yr=typeof Aa=="symbol"?function(e){var t;return e!=null&&(t=e[Aa])&&t.apply(e)}:function(){return null};function Zt(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var at={};function de(e){var t,n,a,s;if(arguments.length===1){if(se(e))return e.slice();if(this===at&&typeof e=="string")return[e];if(s=yr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var kn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Yt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],rt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Yt),Ga={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function un(e,t){this.name=e,this.message=t}function Ja(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function Dt(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Ja(e,t)}function $n(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ja(e,this.failures)}Qt(un).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Qt(Dt).from(un),Qt($n).from(un);var ua=rt.reduce(function(e,t){return e[t]=t+"Error",e},{}),Cr=un,ee=rt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Ga[t]||n,this.inner=null)}return Qt(a).from(Cr),e[t]=a,e},{}),Ha=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,Yt.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));Yt=rt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function xe(){}function Nn(e){return e}function xr(e,t){return e==null||e===Nn?t:function(n){return t(e(n))}}function cn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Xa(e,t){return e===xe?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?cn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?cn(s,this.onerror):s),i!==void 0?i:n}}function wr(e,t){return e===xe?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?cn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?cn(a,this.onerror):a)}}function kr(e,t){return e===xe?t:function(s){var a=e.apply(this,arguments),s=(ge(s,a),this.onsuccess),i=this.onerror,u=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?cn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?cn(i,this.onerror):i),a===void 0?u===void 0?void 0:u:ge(a,u)}}function Oa(e,t){return e===xe?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Ln(e,t){return e===xe?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}Yt.ModifyError=Dt,Yt.DexieError=un,Yt.BulkError=$n;var yt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Fa(e){yt=e}var zt={},Ie=100,qn=typeof Promise>"u"?[]:(rt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[qn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ct(qn),rt]:[rt,ct(rt),rt]),rt=qn[0],tt=qn[1],tt=tt&&tt.then,It=rt&&rt.constructor,Sn=!!qn[2],Kn=function(e,t){Wt.push([e,t]),En&&(queueMicrotask(Da),En=!1)},jn=!0,En=!0,Ut=[],ca=[],mt=Nn,en={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xe,pgp:!1,env:{},finalize:xe},J=en,Wt=[],dn=0,fn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=J;if(typeof e!="function"){if(e!==zt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Ct(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var u=a._lib&&hn();i&&typeof i.then=="function"?n(a,function(c,y){i instanceof z?i._then(c,y):i.then(c,y)}):(a._state=!0,a._value=i,fe(a)),u&&xt()}},Ct.bind(null,a))}catch(i){Ct(a,i)}})(this,e)}var da={get:function(){var e=J,t=va;function n(a,s){var i=this,u=!e.global&&(e!==J||t!==va),c=u&&!nn(),y=new z(function($,m){Rn(i,new We(er(a,e,u,c),er(s,e,u,c),$,m,e))});return this._consoleTask&&(y._consoleTask=this._consoleTask),y}return n.prototype=zt,n},set:function(e){ht(this,"then",e&&e.prototype===zt?da:{get:function(){return e},set:da.set})}};function We(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function Ct(e,t){var n,a;ca.push(t),e._state===null&&(n=e._lib&&hn(),t=mt(t),e._state=!1,e._value=t,a=e,Ut.some(function(s){return s._value===a._value})||Ut.push(a),fe(e),n)&&xt()}function fe(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Rn(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),dn===0&&(++dn,Kn(function(){--dn==0&&Et()},[]))}function Rn(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++dn,Kn(Qa,[n,e,t])}}function Qa(e,t,n){try{var a,s=t._value;!t._state&&ca.length&&(ca=[]),a=yt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||ca.indexOf(s)!==-1||(i=>{for(var u=Ut.length;u;)if(Ut[--u]._value===i._value)return Ut.splice(u,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--dn==0&&Et(),--n.psd.ref||n.psd.finalize()}}function Da(){pn(en,function(){hn()&&xt()})}function hn(){var e=jn;return En=jn=!1,e}function xt(){var e,t,n;do for(;0<Wt.length;)for(e=Wt,Wt=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<Wt.length);En=jn=!0}function Et(){for(var e=Ut,t=(Ut=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),fn.slice(0)),n=t.length;n;)t[--n]()}function fa(e){return new z(zt,!1,e)}function Se(e,t){var n=J;return function(){var a=hn(),s=J;try{return an(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{an(s,!1),a&&xt()}}}bt(z.prototype,{then:da,_then:function(e,t){Rn(this,new We(null,null,e,t,J))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:fa)(a)}):this.then(null,function(a){return(a&&a.name===t?n:fa)(a)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return fa(t)})})},timeout:function(e,t){var n=this;return e<1/0?new z(function(a,s){var i=setTimeout(function(){return s(new ee.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ht(z.prototype,Symbol.toStringTag,"Dexie.Promise"),en.env=Za(),bt(z,{all:function(){var e=de.apply(null,arguments).map(Vn);return new z(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return z.resolve(s).then(function(u){e[i]=u,--a||t(e)},n)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,n){e.then(t,n)}):new z(zt,!0,e)},reject:fa,race:function(){var e=de.apply(null,arguments).map(Vn);return new z(function(t,n){e.map(function(a){return z.resolve(a).then(t,n)})})},PSD:{get:function(){return J},set:function(e){return J=e}},totalEchoes:{get:function(){return va}},newPSD:tn,usePSD:pn,scheduler:{get:function(){return Kn},set:function(e){Kn=e}},rejectionMapper:{get:function(){return mt},set:function(e){mt=e}},follow:function(e,t){return new z(function(n,a){return tn(function(s,i){var u=J;u.unhandleds=[],u.onunhandled=i,u.finalize=cn(function(){var c,y=this;c=function(){y.unhandleds.length===0?s():i(y.unhandleds[0])},fn.push(function $(){c(),fn.splice(fn.indexOf($),1)}),++dn,Kn(function(){--dn==0&&Et()},[])},u.finalize),e()},t,n,a)})}}),It&&(It.allSettled&&ht(z,"allSettled",function(){var e=de.apply(null,arguments).map(Vn);return new z(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return z.resolve(s).then(function(u){return a[i]={status:"fulfilled",value:u}},function(u){return a[i]={status:"rejected",reason:u}}).then(function(){return--n||t(a)})})})}),It.any&&typeof AggregateError<"u"&&ht(z,"any",function(){var e=de.apply(null,arguments).map(Vn);return new z(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,u){return z.resolve(i).then(function(c){return t(c)},function(c){s[u]=c,--a||n(new AggregateError(s))})})})}),It.withResolvers)&&(z.withResolvers=It.withResolvers);var He={awaits:0,echoes:0,id:0},$r=0,ha=[],pa=0,va=0,Sr=0;function tn(e,u,n,a){var s=J,i=Object.create(s),u=(i.parent=s,i.ref=0,i.global=!1,i.id=++Sr,en.env,i.env=Sn?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},u&&ge(i,u),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},pn(i,e,n,a));return i.ref===0&&i.finalize(),u}function Bn(){return He.id||(He.id=++$r),++He.awaits,He.echoes+=Ie,He.id}function nn(){return!!He.awaits&&(--He.awaits==0&&(He.id=0),He.echoes=He.awaits*Ie,!0)}function Vn(e){return He.echoes&&e&&e.constructor===It?(Bn(),e.then(function(t){return nn(),t},function(t){return nn(),Ne(t)})):e}function Er(){var e=ha[ha.length-1];ha.pop(),an(e,!1)}function an(e,t){var n,a,s=J;(t?!He.echoes||pa++&&e===J:!pa||--pa&&e===J)||queueMicrotask(t?(function(i){++va,He.echoes&&--He.echoes!=0||(He.echoes=He.awaits=He.id=0),ha.push(J),an(i,!0)}).bind(null,e):Er),e!==J&&(J=e,s===en&&(en.env=Za()),Sn)&&(n=en.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(re,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function Za(){var e=re.Promise;return Sn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(re,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function pn(e,t,n,a,s){var i=J;try{return an(e,!0),t(n,a,s)}finally{an(i,!1)}}function er(e,t,n,a){return typeof e!="function"?e:function(){var s=J;n&&Bn(),an(t,!0);try{return e.apply(this,arguments)}finally{an(s,!1),a&&queueMicrotask(nn)}}}function Ia(e){Promise===It&&He.echoes===0?pa===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+tt).indexOf("[native code]")===-1&&(Bn=nn=xe);var Ne=z.reject,vn="￿",Gt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",_n="String expected.",mn=[],Yn="__dbnames",Na="readonly",La="readwrite";function gn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var tr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function zn(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=vt(t))[e],t}}function nr(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ue(e,t){try{var n=ar(e),a=ar(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=rr(e),i=rr(t),u=s.length,c=i.length,y=u<c?u:c,$=0;$<y;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return u===c?0:u<c?-1:1;case"Array":for(var m=e,v=t,x=m.length,C=v.length,b=x<C?x:C,g=0;g<b;++g){var E=ue(m[g],v[g]);if(E!==0)return E}return x===C?0:x<C?-1:1}}catch{}return NaN}function ar(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ta(e))==="ArrayBuffer")?"binary":t}function rr(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Un(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}ae.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(se(n))return me(me([],se(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(se(a))return se(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var Wn=ae;function ae(e){this["@@propmod"]=e}function sr(e,t){for(var n=Ce(t),a=n.length,s=!1,i=0;i<a;++i){var u=n[i],c=t[u],y=Vt(e,u);c instanceof Wn?(pt(e,u,c.execute(y)),s=!0):y!==c&&(pt(e,u,c),s=!0)}return s}l.prototype._trans=function(e,t,n){var a=this._tx||J.trans,s=this.name,i=yt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function u($,m,v){if(v.schema[s])return t(v.idbtrans,v);throw new ee.NotFound("Table "+s+" not part of transaction")}var c=hn();try{var y=a&&a.db._novip===this.db._novip?a===J.trans?a._promise(e,u,n):tn(function(){return a._promise(e,u,n)},{trans:a,transless:J.transless||J}):(function $(m,v,x,C){if(m.idbdb&&(m._state.openComplete||J.letThrough||m._vip)){var b=m._createTransaction(v,x,m._dbSchema);try{b.create(),m._state.PR1398_maxLoop=3}catch(g){return g.name===ua.InvalidState&&m.isOpen()&&0<--m._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),m.close({disableAutoOpen:!1}),m.open().then(function(){return $(m,v,x,C)})):Ne(g)}return b._promise(v,function(g,E){return tn(function(){return J.trans=b,C(g,E,b)})}).then(function(g){if(v==="readwrite")try{b.idbtrans.commit()}catch{}return v==="readonly"?g:b._completion.then(function(){return g})})}if(m._state.openComplete)return Ne(new ee.DatabaseClosed(m._state.dbOpenError));if(!m._state.isBeingOpened){if(!m._state.autoOpen)return Ne(new ee.DatabaseClosed);m.open().catch(xe)}return m._state.dbReadyPromise.then(function(){return $(m,v,x,C)})})(this.db,e,[this.name],u);return i&&(y._consoleTask=i,y=y.catch(function($){return console.trace($),Ne($)})),y}finally{c&&xt()}},l.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ne(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},l.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(se(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Ce(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function($){return 0<=c.keyPath.indexOf($)})){for(var y=0;y<t.length;++y)if(t.indexOf(c.keyPath[y])===-1)return!1;return!0}return!1}).sort(function(c,y){return c.keyPath.length-y.keyPath.length})[0];if(n&&this.db._maxKey!==vn)return u=n.keyPath.slice(0,t.length),this.where(u).equals(u.map(function(c){return e[c]}));!n&&yt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,y){return ue(c,y)===0}var u=t.reduce(function(m,y){var $=m[0],m=m[1],v=a[y],x=e[y];return[$||v,$||!v?gn(m,v&&v.multi?function(C){return C=Vt(C,y),se(C)&&C.some(function(b){return s(x,b)})}:function(C){return s(x,Vt(C,y))}):m]},[null,null]),i=u[0],u=u[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(u):n?this.filter(u):this.where(t).equals("")},l.prototype.filter=function(e){return this.toCollection().and(e)},l.prototype.count=function(e){return this.toCollection().count(e)},l.prototype.offset=function(e){return this.toCollection().offset(e)},l.prototype.limit=function(e){return this.toCollection().limit(e)},l.prototype.each=function(e){return this.toCollection().each(e)},l.prototype.toArray=function(e){return this.toCollection().toArray(e)},l.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},l.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,se(e)?"[".concat(e.join("+"),"]"):e))},l.prototype.reverse=function(){return this.toCollection().reverse()},l.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof nr&&(e=(u=>{var c=m,y=u;if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");function $(){this.constructor=c}function m(){return u!==null&&u.apply(this,arguments)||this}return Te(c,y),c.prototype=y===null?Object.create(y):($.prototype=y.prototype,new $),Object.defineProperty(m.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),m.prototype.table=function(){return n},m})(e)),new Set),s=e.prototype;s;s=ct(s))Object.getOwnPropertyNames(s).forEach(function(u){return a.add(u)});function i(u){if(!u)return u;var c,y=Object.create(e.prototype);for(c in u)if(!a.has(c))try{y[c]=u[c]}catch{}return y}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},l.prototype.defineClass=function(){return this.mapToClass(function(e){ge(this,e)})},l.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,u=e;return i&&s&&(u=zn(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[u]})}).then(function(c){return c.numFailures?z.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{pt(e,i,c)}catch{}return c})},l.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var u=i??{};return sr(u,t),a&&pt(u,a,e),n.core.mutate({trans:s,type:"put",values:[u],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?z.reject(c.failures[0]):!!i})})})},l.prototype.update=function(e,t){return typeof e!="object"||se(e)?this.where(":id").equals(e).modify(t):(e=Vt(e,this.schema.primKey.keyPath))===void 0?Ne(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},l.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,u=e;return i&&s&&(u=zn(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[u],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?z.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{pt(e,i,c)}catch{}return c})},l.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return Un(t,[e],a)}).then(function(a){return a.numFailures?z.reject(a.failures[0]):void 0})})},l.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:tr}).then(function(n){return Un(e,null,n)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},l.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},l.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,$=c&&$?e.map(zn(c)):e;return a.core.mutate({trans:u,type:"add",keys:s,values:$,wantResults:i}).then(function(m){var v=m.numFailures,x=m.failures;if(v===0)return i?m.results:m.lastResult;throw new $n("".concat(a.name,".bulkAdd(): ").concat(v," of ").concat(y," operations failed"),x)})})},l.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,$=c&&$?e.map(zn(c)):e;return a.core.mutate({trans:u,type:"put",keys:s,values:$,wantResults:i}).then(function(m){var v=m.numFailures,x=m.failures;if(v===0)return i?m.results:m.lastResult;throw new $n("".concat(a.name,".bulkPut(): ").concat(v," of ").concat(y," operations failed"),x)})})},l.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(u){return u.key}),s=e.map(function(u){return u.changes}),i=[];return this._trans("readwrite",function(u){return n.getMany({trans:u,keys:a,cache:"clone"}).then(function(c){var y=[],$=[],m=(e.forEach(function(v,x){var C=v.key,b=v.changes,g=c[x];if(g){for(var E=0,B=Object.keys(b);E<B.length;E++){var k=B[E],T=b[k];if(k===t.schema.primKey.keyPath){if(ue(T,C)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else pt(g,k,T)}i.push(x),y.push(C),$.push(g)}}),y.length);return n.mutate({trans:u,type:"put",keys:y,values:$,updates:{keys:a,changeSpecs:s}}).then(function(v){var x=v.numFailures,C=v.failures;if(x===0)return m;for(var b=0,g=Object.keys(C);b<g.length;b++){var E,B=g[b],k=i[Number(B)];k!=null&&(E=C[B],delete C[B],C[k]=E)}throw new $n("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(m," operations failed"),C)})})})},l.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return Un(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new $n("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var o=l;function l(){}function f(e){function t(u,c){if(c){for(var y=arguments.length,$=new Array(y-1);--y;)$[y-1]=arguments[y];return n[u].subscribe.apply(null,$),e}if(typeof u=="string")return n[u]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(u,c,y){var $,m;if(typeof u!="object")return c=c||Oa,m={subscribers:[],fire:y=y||xe,subscribe:function(v){m.subscribers.indexOf(v)===-1&&(m.subscribers.push(v),m.fire=c(m.fire,v))},unsubscribe:function(v){m.subscribers=m.subscribers.filter(function(x){return x!==v}),m.fire=m.subscribers.reduce(c,y)}},n[u]=t[u]=m;Ce($=u).forEach(function(v){var x=$[v];if(se(x))i(v,$[v][0],$[v][1]);else{if(x!=="asap")throw new ee.InvalidArgument("Invalid event config");var C=i(v,Nn,function(){for(var b=arguments.length,g=new Array(b);b--;)g[b]=arguments[b];C.subscribers.forEach(function(E){la(function(){E.apply(null,g)})})})}})}}function d(e,t){return Qt(t).from({prototype:e}),t}function p(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function P(e,t){e.filter=gn(e.filter,t)}function O(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return gn(a(),t())}:t,e.justLimit=n&&!a}function I(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function L(e,t,n){var a=I(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function X(e,t,n,a){var s,i,u=e.replayFilter?gn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,y,$){var m,v;u&&!u(y,$,function(x){return y.stop(x)},function(x){return y.fail(x)})||((v=""+(m=y.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(m)),oe(s,v))||(s[v]=!0,t(c,y,$))},Promise.all([e.or._iterate(i,n),W(L(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):W(L(e,a,n),gn(e.algorithm,u),t,!e.keysOnly&&e.valueMapper)}function W(e,t,n,a){var s=Se(a?function(i,u,c){return n(a(i),u,c)}:n);return e.then(function(i){if(i)return i.start(function(){var u=function(){return i.continue()};t&&!t(i,function(c){return u=c},function(c){i.stop(c),u=xe},function(c){i.fail(c),u=xe})||s(i.value,i,function(c){return u=c}),u()})})}V.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ne.bind(null,n.error)):n.table._trans("readonly",e).then(t)},V.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ne.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},V.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=gn(t.algorithm,e)},V.prototype._iterate=function(e,t){return X(this._ctx,e,t,this._ctx.table.core)},V.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ge(n,e),t._ctx=n,t},V.prototype.raw=function(){return this._ctx.valueMapper=null,this},V.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return X(t,e,n,t.table.core)})},V.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return p(s,!0)?i.count({trans:n,query:{index:I(s,i.schema),range:s.range}}).then(function(u){return Math.min(u,s.limit)}):(a=0,X(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},V.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(y,$){return $?i(y[n[$]],$-1):y[a]}var u=this._ctx.dir==="next"?1:-1;function c(y,$){return ue(i(y,s),i($,s))*u}return this.toArray(function(y){return y.sort(c)}).then(t)},V.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,u=t._ctx;return u.dir==="next"&&p(u,!0)&&0<u.limit?(a=u.valueMapper,s=I(u,u.table.core.schema),u.table.core.query({trans:n,limit:u.limit,values:!0,query:{index:s,range:u.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],X(u,function(c){return i.push(c)},n,u.table.core).then(function(){return i}))},e)},V.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,p(t)?O(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):O(t,function(){var n=e;return function(){return--n<0}})),this},V.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),O(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},V.prototype.until=function(e,t){return P(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},V.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},V.prototype.last=function(e){return this.reverse().first(e)},V.prototype.filter=function(e){var t;return P(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=gn(t.isMatch,e),this},V.prototype.and=function(e){return this.filter(e)},V.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},V.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},V.prototype.desc=function(){return this.reverse()},V.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},V.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},V.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},V.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},V.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&p(t,!0)&&0<t.limit)return this._read(function(a){var s=I(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},V.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},V.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},V.prototype.lastKey=function(e){return this.reverse().firstKey(e)},V.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},P(this._ctx,function(a){var a=a.primaryKey.toString(),s=oe(e,a);return e[a]=!0,!s})),this},V.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(g,E){var B=E.failures;x+=g-E.numFailures;for(var k=0,T=Ce(B);k<T.length;k++){var A=T[k];v.push(B[A])}}var i=typeof e=="function"?e:function(g){return sr(g,e)},u=n.table.core,m=u.schema.primaryKey,c=m.outbound,y=m.extractKey,$=200,m=t.db._options.modifyChunkSize,v=(m&&($=typeof m=="object"?m[u.name]||m["*"]||200:m),[]),x=0,C=[],b=e===he;return t.clone().primaryKeys().then(function(g){function E(k){var T=Math.min($,g.length-k),A=g.slice(k,k+T);return(b?Promise.resolve([]):u.getMany({trans:a,keys:A,cache:"immutable"})).then(function(j){var K=[],D=[],U=c?[]:null,R=b?A:[];if(!b)for(var N=0;N<T;++N){var G=j[N],ce={value:vt(G),primKey:g[k+N]};i.call(ce,ce.value,ce)!==!1&&(ce.value==null?R.push(g[k+N]):c||ue(y(G),y(ce.value))===0?(D.push(ce.value),c&&U.push(g[k+N])):(R.push(g[k+N]),K.push(ce.value)))}return Promise.resolve(0<K.length&&u.mutate({trans:a,type:"add",values:K}).then(function(be){for(var te in be.failures)R.splice(parseInt(te),1);s(K.length,be)})).then(function(){return(0<D.length||B&&typeof e=="object")&&u.mutate({trans:a,type:"put",keys:U,values:D,criteria:B,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(be){return s(D.length,be)})}).then(function(){return(0<R.length||B&&b)&&u.mutate({trans:a,type:"delete",keys:R,criteria:B,isAdditionalChunk:0<k}).then(function(be){return Un(n.table,R,be)}).then(function(be){return s(R.length,be)})}).then(function(){return g.length>k+T&&E(k+$)})})}var B=p(n)&&n.limit===1/0&&(typeof e!="function"||b)&&{index:n.index,range:n.range};return E(0).then(function(){if(0<v.length)throw new Dt("Error modifying one or more objects",v,x,C);return g.length})})})},V.prototype.delete=function(){var e=this._ctx,t=e.range;return!p(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(he):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(y){var c=y.failures,y=y.numFailures;if(y)throw new Dt("Could not delete some values",Object.keys(c).map(function($){return c[$]}),i-y);return i-y})})})};var Z=V;function V(){}var he=function(e,t){return t.value=null};function Ee(e,t){return e<t?-1:e===t?0:1}function Ge(e,t){return t<e?-1:e===t?0:1}function ne(e,t,n){return e=e instanceof Nt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Be(e){return new e.Collection(e,function(){return Je("")}).limit(0)}function Xe(C,t,n,a){var s,i,u,c,y,$,m,v=n.length;if(!n.every(function(g){return typeof g=="string"}))return ne(C,_n);function x(g){s=g==="next"?function(B){return B.toUpperCase()}:function(B){return B.toLowerCase()},i=g==="next"?function(B){return B.toLowerCase()}:function(B){return B.toUpperCase()},u=g==="next"?Ee:Ge;var E=n.map(function(B){return{lower:i(B),upper:s(B)}}).sort(function(B,k){return u(B.lower,k.lower)});c=E.map(function(B){return B.upper}),y=E.map(function(B){return B.lower}),m=($=g)==="next"?"":a}x("next");var C=new C.Collection(C,function(){return pe(c[0],y[v-1]+a)}),b=(C._ondirectionchange=function(g){x(g)},0);return C._addAlgorithm(function(g,E,B){var k=g.key;if(typeof k=="string"){var T=i(k);if(t(T,y,b))return!0;for(var A=null,j=b;j<v;++j){var K=((D,U,R,N,G,ce)=>{for(var be=Math.min(D.length,N.length),te=-1,le=0;le<be;++le){var Fe=U[le];if(Fe!==N[le])return G(D[le],R[le])<0?D.substr(0,le)+R[le]+R.substr(le+1):G(D[le],N[le])<0?D.substr(0,le)+N[le]+R.substr(le+1):0<=te?D.substr(0,te)+U[te]+R.substr(te+1):null;G(D[le],Fe)<0&&(te=le)}return be<N.length&&ce==="next"?D+R.substr(D.length):be<D.length&&ce==="prev"?D.substr(0,R.length):te<0?null:D.substr(0,te)+N[te]+R.substr(te+1)})(k,T,c[j],y[j],u,$);K===null&&A===null?b=j+1:(A===null||0<u(A,K))&&(A=K)}E(A!==null?function(){g.continue(A+m)}:B)}return!1}),C}function pe(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function Je(e){return{type:1,lower:e,upper:e}}Object.defineProperty(F.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),F.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Be(this):new this.Collection(this,function(){return pe(e,t,!n,!a)})}catch{return ne(this,Gt)}},F.prototype.equals=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return Je(e)})},F.prototype.above=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return pe(e,void 0,!0)})},F.prototype.aboveOrEqual=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return pe(e,void 0,!1)})},F.prototype.below=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return pe(void 0,e,!1,!0)})},F.prototype.belowOrEqual=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return pe(void 0,e)})},F.prototype.startsWith=function(e){return typeof e!="string"?ne(this,_n):this.between(e,e+vn,!0,!0)},F.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):Xe(this,function(t,n){return t.indexOf(n[0])===0},[e],vn)},F.prototype.equalsIgnoreCase=function(e){return Xe(this,function(t,n){return t===n[0]},[e],"")},F.prototype.anyOfIgnoreCase=function(){var e=de.apply(at,arguments);return e.length===0?Be(this):Xe(this,function(t,n){return n.indexOf(t)!==-1},e,"")},F.prototype.startsWithAnyOfIgnoreCase=function(){var e=de.apply(at,arguments);return e.length===0?Be(this):Xe(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,vn)},F.prototype.anyOf=function(){var e,t,n=this,a=de.apply(at,arguments),s=this._cmp;try{a.sort(s)}catch{return ne(this,Gt)}return a.length===0?Be(this):((e=new this.Collection(this,function(){return pe(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,u,c){for(var y=i.key;0<s(y,a[t]);)if(++t===a.length)return u(c),!1;return s(y,a[t])===0||(u(function(){i.continue(a[t])}),!1)}),e)},F.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},F.prototype.noneOf=function(){var e=de.apply(at,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ne(this,Gt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},F.prototype.inAnyRange=function(e,B){var n=this,a=this._cmp,s=this._ascending,i=this._descending,u=this._min,c=this._max;if(e.length===0)return Be(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return ne(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var y=!B||B.includeLowers!==!1,$=B&&B.includeUppers===!0,m,v=s;function x(k,T){return v(k[0],T[0])}try{(m=e.reduce(function(k,T){for(var A=0,j=k.length;A<j;++A){var K=k[A];if(a(T[0],K[1])<0&&0<a(T[1],K[0])){K[0]=u(K[0],T[0]),K[1]=c(K[1],T[1]);break}}return A===j&&k.push(T),k},[])).sort(x)}catch{return ne(this,Gt)}var C=0,b=$?function(k){return 0<s(k,m[C][1])}:function(k){return 0<=s(k,m[C][1])},g=y?function(k){return 0<i(k,m[C][0])}:function(k){return 0<=i(k,m[C][0])},E=b,B=new this.Collection(this,function(){return pe(m[0][0],m[m.length-1][1],!y,!$)});return B._ondirectionchange=function(k){v=k==="next"?(E=b,s):(E=g,i),m.sort(x)},B._addAlgorithm(function(k,T,A){for(var j,K=k.key;E(K);)if(++C===m.length)return T(A),!1;return!b(j=K)&&!g(j)||(n._cmp(K,m[C][1])===0||n._cmp(K,m[C][0])===0||T(function(){v===s?k.continue(m[C][0]):k.continue(m[C][1])}),!1)}),B},F.prototype.startsWithAnyOf=function(){var e=de.apply(at,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Be(this):this.inAnyRange(e.map(function(t){return[t,t+vn]})):ne(this,"startsWithAnyOf() only works with strings")};var Nt=F;function F(){}function Re(e){return Se(function(t){return Qe(t),e(t.target.error),!1})}function Qe(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var dt="storagemutated",wt="x-storagemutated-1",ie=f(null,dt),kt=(ve.prototype._lock=function(){return Fn(!J.global),++this._reculock,this._reculock!==1||J.global||(J.lockOwnerFor=this),this},ve.prototype._unlock=function(){if(Fn(!J.global),--this._reculock==0)for(J.global||(J.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{pn(e[1],e[0])}catch{}}return this},ve.prototype._locked=function(){return this._reculock&&J.lockOwnerFor!==this},ve.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Fn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(a);case"MissingAPIError":throw new ee.MissingAPI(a.message,a);default:throw new ee.OpenFailed(a)}if(!this.active)throw new ee.TransactionInactive;Fn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Se(function(s){Qe(s),t._reject(e.error)}),e.onabort=Se(function(s){Qe(s),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Se(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&ie.storagemutated.fire(e.mutatedParts)})}return this},ve.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Ne(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(i,u){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,u)},J])}):n?tn(function(){var i=new z(function(u,c){s._lock();var y=t(u,c,s);y&&y.then&&y.then(u,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new z(function(i,u){var c=t(i,u,s);c&&c.then&&c.then(i,u)}))._lib=!0,a):Ne(new ee.TransactionInactive)},ve.prototype._root=function(){return this.parent?this.parent._root():this},ve.prototype.waitFor=function(e){var t,n=this._root(),a=z.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new z(function(i,u){a.then(function(c){return n._waitingQueue.push(Se(i.bind(null,c)))},function(c){return n._waitingQueue.push(Se(u.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},ve.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},ve.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(oe(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},ve);function ve(){}function Ve(e,t,n,a,s,i,u,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!u?"&":"")+(a?"*":"")+(s?"++":"")+Ye(t),type:c}}function Ye(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Le(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,u){return i=a(i,u),i&&(s[i[0]]=i[1]),s},{}))};var a}var _e=function(e){try{return e.only([[]]),_e=function(){return[[]]},[[]]}catch{return _e=function(){return vn},vn}};function Ze(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Vt(n,t)}:function(n){return Vt(n,e)};var t}function bn(e){return[].slice.call(e)}var Jt=0;function lt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function $t(e,t,y){function a(b){if(b.type===3)return null;if(b.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=b.lower,x=b.upper,C=b.lowerOpen,b=b.upperOpen;return v===void 0?x===void 0?null:t.upperBound(x,!!b):x===void 0?t.lowerBound(v,!!C):t.bound(v,x,!!C,!!b)}function s(m){var v,x=m.name;return{name:x,schema:m,mutate:function(C){var b=C.trans,g=C.type,E=C.keys,B=C.values,k=C.range;return new Promise(function(T,A){T=Se(T);var j=b.objectStore(x),K=j.keyPath==null,D=g==="put"||g==="add";if(!D&&g!=="delete"&&g!=="deleteRange")throw new Error("Invalid operation type: "+g);var U,R=(E||B||{length:1}).length;if(E&&B&&E.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(R===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function N(De){++be,Qe(De)}var G=[],ce=[],be=0;if(g==="deleteRange"){if(k.type===4)return T({numFailures:be,failures:ce,results:[],lastResult:void 0});k.type===3?G.push(U=j.clear()):G.push(U=j.delete(a(k)))}else{var K=D?K?[B,E]:[B,null]:[E,null],te=K[0],le=K[1];if(D)for(var Fe=0;Fe<R;++Fe)G.push(U=le&&le[Fe]!==void 0?j[g](te[Fe],le[Fe]):j[g](te[Fe])),U.onerror=N;else for(Fe=0;Fe<R;++Fe)G.push(U=j[g](te[Fe])),U.onerror=N}function ot(De){De=De.target.result,G.forEach(function(ln,Ua){return ln.error!=null&&(ce[Ua]=ln.error)}),T({numFailures:be,failures:ce,results:g==="delete"?E:G.map(function(ln){return ln.result}),lastResult:De})}U.onerror=function(De){N(De),ot(De)},U.onsuccess=ot})},getMany:function(C){var b=C.trans,g=C.keys;return new Promise(function(E,B){E=Se(E);for(var k,T=b.objectStore(x),A=g.length,j=new Array(A),K=0,D=0,U=function(G){G=G.target,j[G._pos]=G.result,++D===K&&E(j)},R=Re(B),N=0;N<A;++N)g[N]!=null&&((k=T.get(g[N]))._pos=N,k.onsuccess=U,k.onerror=R,++K);K===0&&E(j)})},get:function(C){var b=C.trans,g=C.key;return new Promise(function(E,B){E=Se(E);var k=b.objectStore(x).get(g);k.onsuccess=function(T){return E(T.target.result)},k.onerror=Re(B)})},query:(v=c,function(C){return new Promise(function(b,g){b=Se(b);var E,B,k,D=C.trans,T=C.values,A=C.limit,K=C.query,j=A===1/0?void 0:A,U=K.index,K=K.range,D=D.objectStore(x),D=U.isPrimaryKey?D:D.index(U.name),U=a(K);if(A===0)return b({result:[]});v?((K=T?D.getAll(U,j):D.getAllKeys(U,j)).onsuccess=function(R){return b({result:R.target.result})},K.onerror=Re(g)):(E=0,B=!T&&"openKeyCursor"in D?D.openKeyCursor(U):D.openCursor(U),k=[],B.onsuccess=function(R){var N=B.result;return!N||(k.push(T?N.value:N.primaryKey),++E===A)?b({result:k}):void N.continue()},B.onerror=Re(g))})}),openCursor:function(C){var b=C.trans,g=C.values,E=C.query,B=C.reverse,k=C.unique;return new Promise(function(T,A){T=Se(T);var D=E.index,j=E.range,K=b.objectStore(x),K=D.isPrimaryKey?K:K.index(D.name),D=B?k?"prevunique":"prev":k?"nextunique":"next",U=!g&&"openKeyCursor"in K?K.openKeyCursor(a(j),D):K.openCursor(a(j),D);U.onerror=Re(A),U.onsuccess=Se(function(R){var N,G,ce,be,te=U.result;te?(te.___id=++Jt,te.done=!1,N=te.continue.bind(te),G=(G=te.continuePrimaryKey)&&G.bind(te),ce=te.advance.bind(te),be=function(){throw new Error("Cursor not stopped")},te.trans=b,te.stop=te.continue=te.continuePrimaryKey=te.advance=function(){throw new Error("Cursor not started")},te.fail=Se(A),te.next=function(){var le=this,Fe=1;return this.start(function(){return Fe--?le.continue():le.stop()}).then(function(){return le})},te.start=function(le){function Fe(){if(U.result)try{le()}catch(De){te.fail(De)}else te.done=!0,te.start=function(){throw new Error("Cursor behind last entry")},te.stop()}var ot=new Promise(function(De,ln){De=Se(De),U.onerror=Re(ln),te.fail=ln,te.stop=function(Ua){te.stop=te.continue=te.continuePrimaryKey=te.advance=be,De(Ua)}});return U.onsuccess=Se(function(De){U.onsuccess=Fe,Fe()}),te.continue=N,te.continuePrimaryKey=G,te.advance=ce,Fe(),ot},T(te)):T(null)},A)})},count:function(C){var b=C.query,g=C.trans,E=b.index,B=b.range;return new Promise(function(k,T){var A=g.objectStore(x),A=E.isPrimaryKey?A:A.index(E.name),j=a(B),j=j?A.count(j):A.count();j.onsuccess=Se(function(K){return k(K.target.result)}),j.onerror=Re(T)})}}}i=y,u=bn((y=e).objectStoreNames);var i,y={schema:{name:y.name,tables:u.map(function(m){return i.objectStore(m)}).map(function(m){var v=m.keyPath,x=m.autoIncrement,b=se(v),C={},b={name:m.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:b,keyPath:v,autoIncrement:x,unique:!0,extractKey:Ze(v)},indexes:bn(m.indexNames).map(function(g){return m.index(g)}).map(function(k){var T=k.name,E=k.unique,B=k.multiEntry,k=k.keyPath,T={name:T,compound:se(k),keyPath:k,unique:E,multiEntry:B,extractKey:Ze(k)};return C[lt(k)]=T}),getIndexByKeyPath:function(g){return C[lt(g)]}};return C[":id"]=b.primaryKey,v!=null&&(C[lt(v)]=b.primaryKey),b})},hasGetAll:0<u.length&&"getAll"in i.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},u=y.schema,c=y.hasGetAll,y=u.tables.map(s),$={};return y.forEach(function(m){return $[m.name]=m}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(m){if($[m])return $[m];throw new Error("Table '".concat(m,"' not found"))},MIN_KEY:-1/0,MAX_KEY:_e(t),schema:u}}function Mn(e,t,n,a){return n=n.IDBKeyRange,t=$t(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,H(H({},s),i(s))},t)}}function we(e,t){var n=t.db,n=Mn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function ye(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(u){var c=(function y($,m){return sa($,m)||($=ct($))&&y($,m)})(u,s);(!c||"value"in c&&c.value===void 0)&&(u===e.Transaction.prototype||u instanceof e.Transaction?ht(u,s,{get:function(){return this.table(s)},set:function(y){ft(this,s,{value:y,writable:!0,configurable:!0,enumerable:!0})}}):u[s]=new e.Table(s,i))})})}function Me(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Ae(e,t){return e._cfg.version-t._cfg.version}function et(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Le("$meta",Gn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),u=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=J.transless||J;tn(function(){if(J.trans=i,J.transless=c,t!==0)return we(e,n),$=t,((y=i).storeNames.includes("$meta")?y.table("$meta").get("version").then(function(m){return m??$}):z.resolve($)).then(function(E){var v=e,x=E,C=i,b=n,g=[],E=v._versions,B=v._dbSchema=Bt(0,v.idbdb,b);return(E=E.filter(function(k){return k._cfg.version>=x})).length===0?z.resolve():(E.forEach(function(k){g.push(function(){var T,A,j,K=B,D=k._cfg.dbschema,U=(_t(v,K,b),_t(v,D,b),B=v._dbSchema=D,Lt(K,D)),R=(U.add.forEach(function(N){Ht(b,N[0],N[1].primKey,N[1].indexes)}),U.change.forEach(function(N){if(N.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var G=b.objectStore(N.name);N.add.forEach(function(ce){return ut(G,ce)}),N.change.forEach(function(ce){G.deleteIndex(ce.name),ut(G,ce)}),N.del.forEach(function(ce){return G.deleteIndex(ce)})}),k._cfg.contentUpgrade);if(R&&k._cfg.version>x)return we(v,b),C._memoizedTables={},T=Ma(D),U.del.forEach(function(N){T[N]=K[N]}),Me(v,[v.Transaction.prototype]),ye(v,[v.Transaction.prototype],Ce(T),T),C.schema=T,(A=kn(R))&&Bn(),D=z.follow(function(){var N;(j=R(C))&&A&&(N=nn.bind(null,null),j.then(N,N))}),j&&typeof j.then=="function"?z.resolve(j):D.then(function(){return j})}),g.push(function(T){var A,j,K=k._cfg.dbschema;A=K,j=T,[].slice.call(j.db.objectStoreNames).forEach(function(D){return A[D]==null&&j.db.deleteObjectStore(D)}),Me(v,[v.Transaction.prototype]),ye(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),C.schema=v._dbSchema}),g.push(function(T){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===k._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(A){return A!=="$meta"})):T.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return g.length?z.resolve(g.shift()(C.idbtrans)).then(k):z.resolve()})().then(function(){Ot(B,b)}))}).catch(u);var y,$;Ce(s).forEach(function(m){Ht(n,m,s[m].primKey,s[m].indexes)}),we(e,n),z.follow(function(){return e.on.populate.fire(i)}).catch(u)})}function rn(e,t){Ot(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Bt(0,e.idbdb,t);_t(e,e._dbSchema,t);for(var a=0,s=Lt(n,e._dbSchema).change;a<s.length;a++){var i=(u=>{if(u.change.length||u.recreate)return console.warn("Unable to patch indexes of table ".concat(u.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(u.name);u.add.forEach(function(y){yt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name,".").concat(y.src)),ut(c,y)})})(s[a]);if(typeof i=="object")return i.value}}function Lt(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var u={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)u.recreate=!0,a.change.push(u);else{var c=s.idxByName,y=i.idxByName,$=void 0;for($ in c)y[$]||u.del.push($);for($ in y){var m=c[$],v=y[$];m?m.src!==v.src&&u.change.push(v):u.add.push(v)}(0<u.del.length||0<u.add.length||0<u.change.length)&&a.change.push(u)}}else a.add.push([n,i])}return a}function Ht(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return ut(s,i)})}function Ot(e,t){Ce(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(yt&&console.debug("Dexie: Creating missing table",n),Ht(t,n,e[n].primKey,e[n].indexes))})}function ut(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Bt(e,t,n){var a={};return ia(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),u=Ve(Ye($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),c=[],y=0;y<i.indexNames.length;++y){var m=i.index(i.indexNames[y]),$=m.keyPath,m=Ve(m.name,$,!!m.unique,!!m.multiEntry,!1,$&&typeof $!="string",!1);c.push(m)}a[s]=Le(s,u,c)}),a}function _t(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],u=n.objectStore(i);e._hasGetAll="getAll"in u;for(var c=0;c<u.indexNames.length;++c){var y,$=u.indexNames[c],m=u.index($).keyPath,m=typeof m=="string"?m:"["+ia(m).join("+")+"]";t[i]&&(y=t[i].idxByName[m])&&(y.name=$,delete t[i].idxByName[m],t[i].idxByName[$]=y)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&re.WorkerGlobalScope&&re instanceof re.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Gn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Ve(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),se(i),n===0,a)})}q.prototype._createTableSchema=Le,q.prototype._parseIndexSyntax=Gn,q.prototype._parseStoresSpec=function(e,t){var n=this;Ce(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new ee.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new ee.Schema("Primary key cannot be multiEntry*");s.forEach(function(u){if(u.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!u.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},q.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ge(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){ge(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,Me(t,[t._allTables,t,t.Transaction.prototype]),ye(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Ce(s),s),t._storeNames=Ce(s),this},q.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Ln(this._cfg.contentUpgrade||xe,e),this};var _=q;function q(){}function st(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new jt(Yn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function yn(e){return e&&typeof e.databases=="function"}function Pe(e){return tn(function(){return J.letThrough=!0,e()})}function qa(e){return!("from"in e)}var it=function(e,t){var n;if(!this)return n=new it,e&&"d"in e&&ge(n,e),n;ge(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Pn(e,t,n){var a=ue(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(qa(e))return ge(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(ue(n,e.from)<0)return a?Pn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Ft(e);if(0<ue(t,e.to))return s?Pn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Ft(e);ue(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<ue(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&Tn(e,a),s&&t&&Tn(e,s)}}function Tn(e,t){qa(t)||(function n(a,s){var i=s.from,u=s.l,c=s.r;Pn(a,i,s.to),u&&n(a,u),c&&n(a,c)})(e,t)}function ir(e,t){var n=ma(t),a=n.next();if(!a.done)for(var s=a.value,i=ma(e),u=i.next(s.from),c=u.value;!a.done&&!u.done;){if(ue(c.from,s.to)<=0&&0<=ue(c.to,s.from))return!0;ue(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(u=i.next(s.from)).value}return!1}function ma(e){var t=qa(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&ue(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||ue(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ft(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=H({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=qt(n)),e.d=qt(e)}function qt(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Jn(e,t){return Ce(t).forEach(function(n){e[n]?Tn(e[n],t[n]):e[n]=(function a(s){var i,u,c={};for(i in s)oe(s,i)&&(u=s[i],c[i]=!u||typeof u!="object"||Wa.has(u.constructor)?u:a(u));return c})(t[n])}),e}function ga(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&ir(t[n],e[n])})}bt(it.prototype,((rt={add:function(e){return Tn(this,e),this},addKey:function(e){return Pn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Pn(t,n,n)}),this},hasKey:function(e){var t=ma(this).next(e).value;return t&&ue(t.from,e)<=0&&0<=ue(t.to,e)}})[Aa]=function(){return ma(this)},rt));var sn={},ba={},ya=!1;function Hn(e){Jn(ba,e),ya||(ya=!0,setTimeout(function(){ya=!1,Ca(ba,!(ba={}))},0))}function Ca(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(sn);a<s.length;a++)or(c=s[a],e,n,t);else for(var i in e){var u,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(u=i[1],i=i[2],c=sn["idb://".concat(u,"/").concat(i)])&&or(c,e,n,t)}n.forEach(function(y){return y()})}function or(e,t,n,a){for(var s=[],i=0,u=Object.entries(e.queries.query);i<u.length;i++){for(var c=u[i],y=c[0],$=[],m=0,v=c[1];m<v.length;m++){var x=v[m];ga(t,x.obsSet)?x.subscribers.forEach(function(E){return n.add(E)}):a&&$.push(x)}a&&s.push([y,$])}if(a)for(var C=0,b=s;C<b.length;C++){var g=b[C],y=g[0],$=g[1];e.queries.query[y]=$}}function Ka(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ne(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function u(){if(t.openCanceller!==a)throw new ee.DatabaseClosed("db.open() was cancelled")}function c(){return new z(function(x,C){if(u(),!n)throw new ee.MissingAPI;var b=e.name,g=t.autoSchema||!s?n.open(b):n.open(b,s);if(!g)throw new ee.MissingAPI;g.onerror=Re(C),g.onblocked=Se(e._fireOnBlocked),g.onupgradeneeded=Se(function(E){var B;m=g.transaction,t.autoSchema&&!e._options.allowEmptyDB?(g.onerror=Qe,m.abort(),g.result.close(),(B=n.deleteDatabase(b)).onsuccess=B.onerror=Se(function(){C(new ee.NoSuchDatabase("Database ".concat(b," doesnt exist")))})):(m.onerror=Re(C),B=E.oldVersion>Math.pow(2,62)?0:E.oldVersion,v=B<1,e.idbdb=g.result,i&&rn(e,m),et(e,B/10,m,C))},C),g.onsuccess=Se(function(){m=null;var E,B,k,T,A,j,K=e.idbdb=g.result,D=ia(K.objectStoreNames);if(0<D.length)try{var U=K.transaction((A=D).length===1?A[0]:A,"readonly");if(t.autoSchema)j=K,T=U,(k=e).verno=j.version/10,T=k._dbSchema=Bt(0,j,T),k._storeNames=ia(j.objectStoreNames,0),ye(k,[k._allTables],Ce(T),T);else if(_t(e,e._dbSchema,U),B=U,((B=Lt(Bt(0,(E=e).idbdb,B),E._dbSchema)).add.length||B.change.some(function(R){return R.add.length||R.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),K.close(),s=K.version+1,i=!0,x(c());we(e,U)}catch{}mn.push(e),K.onversionchange=Se(function(R){t.vcFired=!0,e.on("versionchange").fire(R)}),K.onclose=Se(function(){e.close({disableAutoOpen:!1})}),v&&(D=e._deps,A=b,yn(j=D.indexedDB)||A===Yn||st(j,D.IDBKeyRange).put({name:A}).catch(xe)),x()},C)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return z.reject(x)})}var y,$=t.dbReadyResolve,m=null,v=!1;return z.race([a,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function C(){return indexedDB.databases().finally(x)}y=setInterval(C,100),C()}).finally(function(){return clearInterval(y)}):Promise.resolve()).then(c)]).then(function(){return u(),t.onReadyBeingFired=[],z.resolve(Pe(function(){return e.on.ready.fire(e.vip)})).then(function x(){var C;if(0<t.onReadyBeingFired.length)return C=t.onReadyBeingFired.reduce(Ln,xe),t.onReadyBeingFired=[],z.resolve(Pe(function(){return C(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{m&&m.abort()}catch{}return a===t.openCanceller&&e._close(),Ne(x)}).finally(function(){t.openComplete=!0,$()}).then(function(){var x;return v&&(x={},e.tables.forEach(function(C){C.schema.indexes.forEach(function(b){b.name&&(x["idb://".concat(e.name,"/").concat(C.name,"/").concat(b.name)]=new it(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(C.name,"/")]=x["idb://".concat(e.name,"/").concat(C.name,"/:dels")]=new it(-1/0,[[[]]])}),ie(dt).fire(x),Ca(x,!0)),e})}function xa(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),y=c.value;return c.done?y:y&&typeof y.then=="function"?y.then(n,a):se(y)?Promise.all(y).then(n,a):n(y)}}return s(t)()}function Mt(e,t,n){for(var a=se(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Br={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return H(H({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function u(x,C,b){var k=lt(x),g=s[k]=s[k]||[],E=x==null?0:typeof x=="string"?1:x.length,B=0<C,k=H(H({},b),{name:B?"".concat(k,"(virtual-from:").concat(b.name,")"):b.name,lowLevelIndex:b,isVirtual:B,keyTail:C,keyLength:E,extractKey:Ze(x),unique:!B&&b.unique});return g.push(k),k.isPrimaryKey||i.push(k),1<E&&u(E===2?x[0]:x.slice(0,E-1),C+1,b),g.sort(function(T,A){return T.keyTail-A.keyTail}),k}var c=u(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var y=0,$=a.indexes;y<$.length;y++){var m=$[y];u(m.keyPath,0,m)}function v(x){var C,b=x.query.index;return b.isVirtual?H(H({},x),{query:{index:b.lowLevelIndex,range:(C=x.query.range,b=b.keyTail,{type:C.type===1?2:C.type,lower:Mt(C.lower,C.lowerOpen?e.MAX_KEY:e.MIN_KEY,b),lowerOpen:!0,upper:Mt(C.upper,C.upperOpen?e.MIN_KEY:e.MAX_KEY,b),upperOpen:!0})}}):x}return H(H({},n),{schema:H(H({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(x){return(x=s[lt(x)])&&x[0]}}),count:function(x){return n.count(v(x))},query:function(x){return n.query(v(x))},openCursor:function(x){var C=x.query.index,b=C.keyTail,g=C.keyLength;return C.isVirtual?n.openCursor(v(x)).then(function(B){return B&&E(B)}):n.openCursor(x);function E(B){return Object.create(B,{continue:{value:function(k){k!=null?B.continue(Mt(k,x.reverse?e.MAX_KEY:e.MIN_KEY,b)):x.unique?B.continue(B.key.slice(0,g).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,b)):B.continue()}},continuePrimaryKey:{value:function(k,T){B.continuePrimaryKey(Mt(k,e.MAX_KEY,b),T)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var k=B.key;return g===1?k[0]:k.slice(0,g)}},value:{get:function(){return B.value}}})}}})}})}};function Kt(e,t,n,a){return n=n||{},a=a||"",Ce(e).forEach(function(s){var i,u,c;oe(t,s)?(i=e[s],u=t[s],typeof i=="object"&&typeof u=="object"&&i&&u?(c=Ta(i))!==Ta(u)?n[a+s]=t[s]:c==="Object"?Kt(i,u,n,a+s+"."):i!==u&&(n[a+s]=t[s]):i!==u&&(n[a+s]=t[s])):n[a+s]=void 0}),Ce(t).forEach(function(s){oe(e,s)||(n[a+s]=t[s])}),n}function ja(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var _r={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return H(H({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return H(H({},n),{mutate:function(s){var i=J.trans,u=i.table(t).hook,c=u.deleting,y=u.creating,$=u.updating;switch(s.type){case"add":if(y.fire===xe)break;return i._promise("readwrite",function(){return m(s)},!0);case"put":if(y.fire===xe&&$.fire===xe)break;return i._promise("readwrite",function(){return m(s)},!0);case"delete":if(c.fire===xe)break;return i._promise("readwrite",function(){return m(s)},!0);case"deleteRange":if(c.fire===xe)break;return i._promise("readwrite",function(){return(function v(x,C,b){return n.query({trans:x,values:!1,query:{index:a,range:C},limit:b}).then(function(g){var E=g.result;return m({type:"delete",keys:E,trans:x}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):E.length<b?{failures:[],numFailures:0,lastResult:void 0}:v(x,H(H({},C),{lower:E[E.length-1],lowerOpen:!0}),b)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function m(v){var x,C,b,g=J.trans,E=v.keys||ja(a,v);if(E)return(v=v.type==="add"||v.type==="put"?H(H({},v),{keys:E}):H({},v)).type!=="delete"&&(v.values=me([],v.values)),v.keys&&(v.keys=me([],v.keys)),x=n,b=E,((C=v).type==="add"?Promise.resolve([]):x.getMany({trans:C.trans,keys:b,cache:"immutable"})).then(function(B){var k=E.map(function(T,A){var j,K,D,U=B[A],R={onerror:null,onsuccess:null};return v.type==="delete"?c.fire.call(R,T,U,g):v.type==="add"||U===void 0?(j=y.fire.call(R,T,v.values[A],g),T==null&&j!=null&&(v.keys[A]=T=j,a.outbound||pt(v.values[A],a.keyPath,T))):(j=Kt(U,v.values[A]),(K=$.fire.call(R,j,T,U,g))&&(D=v.values[A],Object.keys(K).forEach(function(N){oe(D,N)?D[N]=K[N]:pt(D,N,K[N])}))),R});return n.mutate(v).then(function(T){for(var A=T.failures,j=T.results,K=T.numFailures,T=T.lastResult,D=0;D<E.length;++D){var U=(j||E)[D],R=k[D];U==null?R.onerror&&R.onerror(A[D]):R.onsuccess&&R.onsuccess(v.type==="put"&&B[D]?v.values[D]:U)}return{failures:A,results:j,numFailures:K,lastResult:T}}).catch(function(T){return k.forEach(function(A){return A.onerror&&A.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function Ra(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)ue(t.keys[s],e[i])===0&&(a.push(n?vt(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var lr={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return H(H({},n),{getMany:function(a){var s;return a.cache?(s=Ra(a.keys,a.trans._cache,a.cache==="clone"))?z.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?vt(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Va(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Ya(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ur={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new it(e.MIN_KEY,e.MAX_KEY);return H(H({},e),{transaction:function(a,s,i){if(J.subscr&&s!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(J.querier));return e.transaction(a,s,i)},table:function(a){function s(E){var g,E=E.query;return[g=E.index,new it((g=(E=E.range).lower)!=null?g:e.MIN_KEY,(g=E.upper)!=null?g:e.MAX_KEY)]}var i=e.table(a),u=i.schema,c=u.primaryKey,y=u.indexes,$=c.extractKey,m=c.outbound,v=c.autoIncrement&&y.filter(function(b){return b.compound&&b.keyPath.includes(c.keyPath)}),x=H(H({},i),{mutate:function(b){function g(G){return G="idb://".concat(t,"/").concat(a,"/").concat(G),A[G]||(A[G]=new it)}var E,B,k,T=b.trans,A=b.mutatedParts||(b.mutatedParts={}),j=g(""),K=g(":dels"),D=b.type,R=b.type==="deleteRange"?[b.range]:b.type==="delete"?[b.keys]:b.values.length<50?[ja(c,b).filter(function(G){return G}),b.values]:[],U=R[0],R=R[1],N=b.trans._cache;return se(U)?(j.addKeys(U),(D=D==="delete"||U.length===R.length?Ra(U,N):null)||K.addKeys(U),(D||R)&&(E=g,B=D,k=R,u.indexes.forEach(function(G){var ce=E(G.name||"");function be(le){return le!=null?G.extractKey(le):null}function te(le){G.multiEntry&&se(le)?le.forEach(function(Fe){return ce.addKey(Fe)}):ce.addKey(le)}(B||k).forEach(function(le,De){var ot=B&&be(B[De]),De=k&&be(k[De]);ue(ot,De)!==0&&(ot!=null&&te(ot),De!=null)&&te(De)})}))):U?(R={from:(N=U.lower)!=null?N:e.MIN_KEY,to:(D=U.upper)!=null?D:e.MAX_KEY},K.add(R),j.add(R)):(j.add(n),K.add(n),u.indexes.forEach(function(G){return g(G.name).add(n)})),i.mutate(b).then(function(G){return!U||b.type!=="add"&&b.type!=="put"||(j.addKeys(G.results),v&&v.forEach(function(ce){for(var be=b.values.map(function(ot){return ce.extractKey(ot)}),te=ce.keyPath.findIndex(function(ot){return ot===c.keyPath}),le=0,Fe=G.results.length;le<Fe;++le)be[le][te]=G.results[le];g(ce.name).addKeys(be)})),T.mutatedParts=Jn(T.mutatedParts||{},A),G})}}),C={get:function(b){return[c,new it(b.key)]},getMany:function(b){return[c,new it().addKeys(b.keys)]},count:s,query:s,openCursor:s};return Ce(C).forEach(function(b){x[b]=function(g){var E=J.subscr,B=!!E,k=Va(J,i)&&Ya(b,g)?g.obsSet={}:E;if(B){var T,E=function(R){return R="idb://".concat(t,"/").concat(a,"/").concat(R),k[R]||(k[R]=new it)},A=E(""),j=E(":dels"),B=C[b](g),K=B[0],B=B[1];if((b==="query"&&K.isPrimaryKey&&!g.values?j:E(K.name||"")).add(B),!K.isPrimaryKey){if(b!=="count")return T=b==="query"&&m&&g.values&&i.query(H(H({},g),{values:!1})),i[b].apply(this,arguments).then(function(R){if(b==="query"){if(m&&g.values)return T.then(function(be){return be=be.result,A.addKeys(be),R});var N=g.values?R.result.map($):R.result;(g.values?A:j).addKeys(N)}else{var G,ce;if(b==="openCursor")return ce=g.values,(G=R)&&Object.create(G,{key:{get:function(){return j.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var be=G.primaryKey;return j.addKey(be),be}},value:{get:function(){return ce&&A.addKey(G.primaryKey),G.value}}})}return R});j.add(n)}}return i[b].apply(this,arguments)}}),x}})}};function cr(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=H({},t),se(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&se(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function za(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<ue(n,a.lower):0<=ue(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?ue(n,a.upper)<0:ue(n,a.upper)<=0));var n,a}function dr(e,t,n,a,s,i){var u,c,y,$,m,v;return!n||n.length===0||(u=t.query.index,c=u.multiEntry,y=t.query.range,$=a.schema.primaryKey.extractKey,m=u.extractKey,v=(u.lowLevelIndex||u).extractKey,(a=n.reduce(function(x,C){var b=x,g=[];if(C.type==="add"||C.type==="put")for(var E=new it,B=C.values.length-1;0<=B;--B){var k,T=C.values[B],A=$(T);!E.hasKey(A)&&(k=m(T),c&&se(k)?k.some(function(R){return za(R,y)}):za(k,y))&&(E.addKey(A),g.push(T))}switch(C.type){case"add":var j=new it().addKeys(t.values?x.map(function(N){return $(N)}):x),b=x.concat(t.values?g.filter(function(N){return N=$(N),!j.hasKey(N)&&(j.addKey(N),!0)}):g.map(function(N){return $(N)}).filter(function(N){return!j.hasKey(N)&&(j.addKey(N),!0)}));break;case"put":var K=new it().addKeys(C.values.map(function(N){return $(N)}));b=x.filter(function(N){return!K.hasKey(t.values?$(N):N)}).concat(t.values?g:g.map(function(N){return $(N)}));break;case"delete":var D=new it().addKeys(C.keys);b=x.filter(function(N){return!D.hasKey(t.values?$(N):N)});break;case"deleteRange":var U=C.range;b=x.filter(function(N){return!za($(N),U)})}return b},e))===e)?e:(a.sort(function(x,C){return ue(v(x),v(C))||ue($(x),$(C))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function fr(e,t){return ue(e.lower,t.lower)===0&&ue(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Mr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=ue(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=ue(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Xn(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&Zt(i,s)},3e3))})}var Pr={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return H(H({},e),{transaction:function(n,a,s){var i,u,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(u=function(y){return function(){if(i.abort(),a==="readwrite"){for(var $=new Set,m=0,v=n;m<v.length;m++){var x=v[m],C=sn["idb://".concat(t,"/").concat(x)];if(C){var b=e.table(x),g=C.optimisticOps.filter(function(G){return G.trans===c});if(c._explicit&&y&&c.mutatedParts)for(var E=0,B=Object.values(C.queries.query);E<B.length;E++)for(var k=0,T=(K=B[E]).slice();k<T.length;k++)ga((D=T[k]).obsSet,c.mutatedParts)&&(Zt(K,D),D.subscribers.forEach(function(G){return $.add(G)}));else if(0<g.length){C.optimisticOps=C.optimisticOps.filter(function(G){return G.trans!==c});for(var A=0,j=Object.values(C.queries.query);A<j.length;A++)for(var K,D,U,R=0,N=(K=j[A]).slice();R<N.length;R++)(D=N[R]).res!=null&&c.mutatedParts&&(y&&!D.dirty?(U=Object.isFrozen(D.res),U=dr(D.res,D.req,g,b,D,U),D.dirty?(Zt(K,D),D.subscribers.forEach(function(G){return $.add(G)})):U!==D.res&&(D.res=U,D.promise=z.resolve({result:U}))):(D.dirty&&Zt(K,D),D.subscribers.forEach(function(G){return $.add(G)})))}}}$.forEach(function(G){return G()})}}})(!1),{signal:s}),c.addEventListener("error",u(!1),{signal:s}),c.addEventListener("complete",u(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return H(H({},a),{mutate:function(i){var u,c=J.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(u=sn["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||ja(s,i).some(function(y){return y==null}))?(u.optimisticOps.push(i),i.mutatedParts&&Hn(i.mutatedParts),c.then(function(y){0<y.numFailures&&(Zt(u.optimisticOps,i),(y=cr(0,i,y))&&u.optimisticOps.push(y),i.mutatedParts)&&Hn(i.mutatedParts)}),c.catch(function(){Zt(u.optimisticOps,i),i.mutatedParts&&Hn(i.mutatedParts)})):c.then(function(y){var $=cr(0,H(H({},i),{values:i.values.map(function(m,v){var x;return y.failures[v]?m:(pt(x=(x=s.keyPath)!=null&&x.includes(".")?vt(m):H({},m),s.keyPath,y.results[v]),x)})}),y);u.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&Hn(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var u,c,y,$,m,v,x;return Va(J,a)&&Ya("query",i)?(u=((y=J.trans)==null?void 0:y.db._options.cache)==="immutable",c=(y=J).requery,y=y.signal,v=((C,b,g,E)=>{var B=sn["idb://".concat(C,"/").concat(b)];if(!B)return[];if(!(C=B.queries[g]))return[null,!1,B,null];var k=C[(E.query?E.query.index.name:null)||""];if(!k)return[null,!1,B,null];switch(g){case"query":var T=k.find(function(A){return A.req.limit===E.limit&&A.req.values===E.values&&fr(A.req.query.range,E.query.range)});return T?[T,!0,B,k]:[k.find(function(A){return("limit"in A.req?A.req.limit:1/0)>=E.limit&&(!E.values||A.req.values)&&Mr(A.req.query.range,E.query.range)}),!1,B,k];case"count":return T=k.find(function(A){return fr(A.req.query.range,E.query.range)}),[T,!!T,B,k]}})(t,n,"query",i),x=v[0],$=v[2],m=v[3],x&&v[1]?x.obsSet=i.obsSet:(v=a.query(i).then(function(C){var b=C.result;if(x&&(x.res=b),u){for(var g=0,E=b.length;g<E;++g)Object.freeze(b[g]);Object.freeze(b)}else C.result=vt(b);return C}).catch(function(C){return m&&x&&Zt(m,x),Promise.reject(C)}),x={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},m?m.push(x):(m=[x],($=$||(sn["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=m)),Xn(x,m,c,y),x.promise.then(function(C){return{result:dr(C.result,i,$?.optimisticOps,a,x,u)}})):a.query(i)}})}})}};function Qn(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}qe.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Ae),n.stores({}),this._state.autoSchema=!1),n},qe.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||J.letThrough||this._vip)?e():new z(function(n,a){if(t._state.openComplete)return a(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new ee.DatabaseClosed);t.open().catch(xe)}t._state.dbReadyPromise.then(n,a)}).then(e)},qe.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(u,c){return u.level-c.level}),this},qe.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},qe.prototype.open=function(){var e=this;return pn(en,function(){return Ka(e)})},qe.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=mn.indexOf(this);if(0<=t&&mn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(n){e.dbReadyResolve=n}),e.openCanceller=new z(function(n,a){e.cancelOpen=a}))},qe.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},qe.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new z(function(s,i){function u(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=Se(function(){var y,$,m;y=t._deps,$=t.name,yn(m=y.indexedDB)||$===Yn||st(m,y.IDBKeyRange).delete($).catch(xe),s()}),c.onerror=Re(i),c.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(u):u()})},qe.prototype.backendDB=function(){return this.idbdb},qe.prototype.isOpen=function(){return this.idbdb!==null},qe.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},qe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},qe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(qe.prototype,"tables",{get:function(){var e=this;return Ce(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),qe.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new ee.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Pa(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},qe.prototype._transaction=function(e,t,n){var a,s,i=this,u=J.trans,c=(u&&u.db===this&&e.indexOf("!")===-1||(u=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===Na)a=Na;else{if(e!="rw"&&e!=La)throw new ee.InvalidArgument("Invalid transaction mode: "+e);a=La}if(u){if(u.mode===Na&&a===La){if(!c)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");u=null}u&&s.forEach(function($){if(u&&u.storeNames.indexOf($)===-1){if(!c)throw new ee.SubTransaction("Table "+$+" not included in parent transaction.");u=null}}),c&&u&&!u.active&&(u=null)}}catch($){return u?u._promise(null,function(m,v){v($)}):Ne($)}var y=(function $(m,v,x,C,b){return z.resolve().then(function(){var k=J.transless||J,g=m._createTransaction(v,x,m._dbSchema,C),k=(g.explicit=!0,{trans:g,transless:k});if(C)g.idbtrans=C.idbtrans;else try{g.create(),g.idbtrans._explicit=!0,m._state.PR1398_maxLoop=3}catch(T){return T.name===ua.InvalidState&&m.isOpen()&&0<--m._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),m.close({disableAutoOpen:!1}),m.open().then(function(){return $(m,v,x,null,b)})):Ne(T)}var E,B=kn(b),k=(B&&Bn(),z.follow(function(){var T;(E=b.call(g,g))&&(B?(T=nn.bind(null,null),E.then(T,T)):typeof E.next=="function"&&typeof E.throw=="function"&&(E=xa(E)))},k));return(E&&typeof E.then=="function"?z.resolve(E).then(function(T){return g.active?T:Ne(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return E})).then(function(T){return C&&g._resolve(),g._completion.then(function(){return T})}).catch(function(T){return g._reject(T),Ne(T)})})}).bind(null,this,a,s,u,n);return u?u._promise(a,y,"lock"):J.trans?pn(J.transless,function(){return i._whenReady(y)}):this._whenReady(y)},qe.prototype.table=function(e){if(oe(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var jt=qe;function qe(e,t){var n,a,s,i,u,c=this,y=(this._middlewares={},this.verno=0,qe.dependencies),y=(this._options=t=H({addons:qe.addons,autoOpen:!0,indexedDB:y.indexedDB,IDBKeyRange:y.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:xe,dbReadyPromise:null,cancelOpen:xe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),m=($.dbReadyPromise=new z(function(v){$.dbReadyResolve=v}),$.openCanceller=new z(function(v,x){$.cancelOpen=x}),this._state=$,this.name=e,this.on=f(this,"populate","blocked","versionchange","close",{ready:[Ln,xe]}),this.once=function(v,x){var C=function(){for(var b=[],g=0;g<arguments.length;g++)b[g]=arguments[g];c.on(v).unsubscribe(C),x.apply(c,b)};return c.on(v,C)},this.on.ready.subscribe=oa(this.on.ready.subscribe,function(v){return function(x,C){qe.vip(function(){var b,g=c._state;g.openComplete?(g.dbOpenError||z.resolve().then(x),C&&v(x)):g.onReadyBeingFired?(g.onReadyBeingFired.push(x),C&&v(x)):(v(x),b=c,C||v(function E(){b.on.ready.unsubscribe(x),b.on.ready.unsubscribe(E)}))})}}),this.Collection=(n=this,d(Z.prototype,function(E,g){this.db=n;var C=tr,b=null;if(g)try{C=g()}catch(k){b=k}var g=E._ctx,E=g.table,B=E.hook.reading.fire;this._ctx={table:E,index:g.index,isPrimKey:!g.index||E.schema.primKey.keyPath&&g.index===E.schema.primKey.name,range:C,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:b,or:g.or,valueMapper:B!==Nn?B:null}})),this.Table=(a=this,d(o.prototype,function(v,x,C){this.db=a,this._tx=C,this.name=v,this.schema=x,this.hook=a._allTables[v]?a._allTables[v].hook:f(null,{creating:[Xa,xe],reading:[xr,Nn],updating:[kr,xe],deleting:[wr,xe]})})),this.Transaction=(s=this,d(kt.prototype,function(v,x,C,b,g){var E=this;v!=="readonly"&&x.forEach(function(B){B=(B=C[B])==null?void 0:B.yProps,B&&(x=x.concat(B.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=v,this.storeNames=x,this.schema=C,this.chromeTransactionDurability=b,this.idbtrans=null,this.on=f(this,"complete","error","abort"),this.parent=g||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(B,k){E._resolve=B,E._reject=k}),this._completion.then(function(){E.active=!1,E.on.complete.fire()},function(B){var k=E.active;return E.active=!1,E.on.error.fire(B),E.parent?E.parent._reject(B):k&&E.idbtrans&&E.idbtrans.abort(),Ne(B)})})),this.Version=(i=this,d(_.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(u=this,d(Nt.prototype,function(v,x,C){if(this.db=u,this._ctx={table:v,index:x===":id"?null:x,or:C},this._cmp=this._ascending=ue,this._descending=function(b,g){return ue(g,b)},this._max=function(b,g){return 0<ue(b,g)?b:g},this._min=function(b,g){return ue(b,g)<0?b:g},this._IDBKeyRange=u._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=_e(t.IDBKeyRange),this._createTransaction=function(v,x,C,b){return new c.Transaction(v,x,C,c._options.chromeTransactionDurability,b)},this._fireOnBlocked=function(v){c.on("blocked").fire(v),mn.filter(function(x){return x.name===c.name&&x!==c&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(v)})},this.use(lr),this.use(Pr),this.use(ur),this.use(Br),this.use(_r),new Proxy(this,{get:function(v,x,C){var b;return x==="_vip"||(x==="table"?function(g){return Qn(c.table(g),m)}:(b=Reflect.get(v,x,C))instanceof o?Qn(b,m):x==="tables"?b.map(function(g){return Qn(g,m)}):x==="_createTransaction"?function(){return Qn(b.apply(this,arguments),m)}:b)}}));this.vip=m,y.forEach(function(v){return v(c)})}var wa,tt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ka=(nt.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},nt.prototype[tt]=function(){return this},nt);function nt(e){this._subscribe=e}try{wa={indexedDB:re.indexedDB||re.mozIndexedDB||re.webkitIndexedDB||re.msIndexedDB,IDBKeyRange:re.IDBKeyRange||re.webkitIDBKeyRange}}catch{wa={indexedDB:null,IDBKeyRange:null}}function hr(e){var t,n=!1,a=new ka(function(s){var i=kn(e),u,c=!1,y={},$={},m={get closed(){return c},unsubscribe:function(){c||(c=!0,u&&u.abort(),v&&ie.storagemutated.unsubscribe(C))}},v=(s.start&&s.start(m),!1),x=function(){return Ia(b)},C=function(g){Jn(y,g),ga($,y)&&x()},b=function(){var g,E,B;!c&&wa.indexedDB&&(y={},g={},u&&u.abort(),u=new AbortController,B=(k=>{var T=hn();try{i&&Bn();var A=tn(e,k);return A=i?A.finally(nn):A}finally{T&&xt()}})(E={subscr:g,signal:u.signal,requery:x,querier:e,trans:null}),Promise.resolve(B).then(function(k){n=!0,t=k,c||E.signal.aborted||(y={},(T=>{for(var A in T)if(oe(T,A))return;return 1})($=g)||v||(ie(dt,C),v=!0),Ia(function(){return!c&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||c||Ia(function(){c||s.error&&s.error(k)})}))};return setTimeout(x,0),m});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var St=jt;function Cn(e){var t=on;try{on=!0,ie.storagemutated.fire(e),Ca(e,!0)}finally{on=t}}bt(St,H(H({},Yt),{delete:function(e){return new St(e,{addons:[]}).delete()},exists:function(e){return new St(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=St.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(yn(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==Yn})}):st(n,t).toCollection().primaryKeys()).then(e)}catch{return Ne(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){ge(this,e)}},ignoreTransaction:function(e){return J.trans?pn(J.transless,e):e()},vip:Pe,async:function(e){return function(){try{var t=xa(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(n){return Ne(n)}}},spawn:function(e,t,n){try{var a=xa(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:z.resolve(a)}catch(s){return Ne(s)}},currentTransaction:{get:function(){return J.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?St.ignoreTransaction(e):e).timeout(t||6e4),J.trans?J.trans.waitFor(e):e},Promise:z,debug:{get:function(){return yt},set:function(e){Fa(e)}},derive:Qt,extend:ge,props:bt,override:oa,Events:f,on:ie,liveQuery:hr,extendObservabilitySet:Jn,getByKeyPath:Vt,setByKeyPath:pt,delByKeyPath:function(e,t){typeof t=="string"?pt(e,t,void 0):"length"in t&&[].map.call(t,function(n){pt(e,n,void 0)})},shallowClone:Ma,deepClone:vt,getObjectDiff:Kt,cmp:ue,asap:la,minKey:-1/0,addons:[],connections:mn,errnames:ua,dependencies:wa,cache:sn,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),St.maxKey=_e(St.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ie(dt,function(e){on||(e=new CustomEvent(wt,{detail:e}),on=!0,dispatchEvent(e),on=!1)}),addEventListener(wt,function(e){e=e.detail,on||Cn(e)}));var An,on=!1,$a=function(){};return typeof BroadcastChannel<"u"&&(($a=function(){(An=new BroadcastChannel(wt)).onmessage=function(e){return e.data&&Cn(e.data)}})(),typeof An.unref=="function"&&An.unref(),ie(dt,function(e){on||An.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!jt.disableBfCache&&e.persisted){yt&&console.debug("Dexie: handling persisted pagehide"),An?.close();for(var t=0,n=mn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!jt.disableBfCache&&e.persisted&&(yt&&console.debug("Dexie: handling persisted pageshow"),$a(),Cn({all:new it(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof un||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Ha[e.name]?e:(t=new Ha[e.name](t||e.message,e),"stack"in e&&ht(t,"stack",{get:function(){return this.inner.stack}}),t)},Fa(yt),H(jt,Object.freeze({__proto__:null,Dexie:jt,Entity:nr,PropModification:Wn,RangeSet:it,add:function(e){return new Wn({add:e})},cmp:ue,default:jt,liveQuery:hr,mergeRanges:Tn,rangesOverlap:ir,remove:function(e){return new Wn({remove:e})},replacePrefix:function(e,t){return new Wn({replacePrefix:[e,t]})}}),{default:jt}),jt})})(vr)),vr.exports}var Os=As();const Ar=Ps(Os),ls=Symbol.for("Dexie"),mr=globalThis[ls]||(globalThis[ls]=Ar);if(Ar.semVer!==mr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ar.semVer} and ${mr.semVer}`);const{liveQuery:Ws,mergeRanges:Gs,rangesOverlap:Js,RangeSet:Hs,cmp:Xs,Entity:Qs,PropModification:Zs,replacePrefix:ei,add:ti,remove:ni,DexieYProvider:ai}=mr,Ke=new mr("haushaltsbuch-db");Ke.version(1).stores({years:"year",fixedTemplateState:"id"});Ke.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Ke.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Ba="singleton";function gr(){return new Date().toISOString()}async function ra(){return Ke.years.orderBy("year").toArray()}async function Fs(M){return Ke.years.get(M)}async function aa(M){await Ke.years.put(M)}async function Or(){const M=await Ke.fixedTemplateState.get(Ba);if(!M){const h={id:Ba,templates:[],version:gr(),updatedAt:new Date().toISOString()};return await Ke.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Fr(M){const h=gr();return await Ke.fixedTemplateState.put({id:Ba,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Dr(){const M=await Ke.annualVariableFixedTemplateState.get(Ba);if(!M){const h={id:Ba,templates:[],version:gr(),updatedAt:new Date().toISOString()};return await Ke.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Ir(M){const h=gr();return await Ke.annualVariableFixedTemplateState.put({id:Ba,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Ds(M){await Ke.auditLog.put(M)}async function Nr(){return Ke.auditLog.orderBy("timestampIso").toArray()}async function Is(M){await Ke.auditLog.clear(),M.length!==0&&await Ke.auditLog.bulkPut(M)}async function Ns(){const M=await ra(),[h,Te,H]=await Promise.all([Or(),Dr(),Nr()]);return{exportedAt:new Date().toISOString(),years:M,fixedTemplates:h.templates,annualVariableFixedTemplates:Te.templates,auditLogEntries:H}}async function Ls(M){await Ke.transaction("rw",[Ke.years,Ke.fixedTemplateState,Ke.annualVariableFixedTemplateState,Ke.auditLog],async()=>{await Ke.years.clear(),await Ke.years.bulkPut(M.years),await Fr(M.fixedTemplates),await Ir(M.annualVariableFixedTemplates??[]),await Is(M.auditLogEntries??[])})}function Oe(M){const h=M.replace(",",".").trim();if(!h)return 0;const Te=Number.parseFloat(h);return Number.isNaN(Te)?0:Math.round(Te*100)}const qs=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function w(M){return qs.format(M/100)}function gt(M){return(M/100).toFixed(2)}function $e(M){return new Date(2026,M-1,1).toLocaleDateString("de-DE",{month:"long"})}const fs=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function us(M){return fs.includes(M)}function Ks(M){switch(M){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const cs=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function js(M){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Te="habu-theme",H="habu-backup-dirty",me="habu-unexported-change-log",re="habu-last-backup-filename",Ce="habu-recurring-budget-defaults";let se=null,ge=null,ct=null,je=null,oe=!1,bt=!1;const ft=new WeakMap;function ht(){const o=M.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),p=l.getPropertyValue("--table-stripe").trim(),P=l.getPropertyValue("--table-border").trim(),O=l.getPropertyValue("--budget-under").trim(),I=l.getPropertyValue("--danger-2").trim(),L=96,X=250,W=Z=>1-Math.pow(1-Math.max(0,Math.min(1,Z)),3);o.forEach(Z=>{Z.dataset.hoverBound!=="1"&&(Z.dataset.hoverBound="1",Z.addEventListener("mouseenter",()=>{Z.dataset.hovering="1",ht()}),Z.addEventListener("mouseleave",()=>{delete Z.dataset.hovering,delete Z.dataset.hoverX,ht()}),Z.addEventListener("mousemove",we=>{const ye=Z.getBoundingClientRect(),Me=Math.round(we.clientX-ye.left);Z.dataset.hoverX=String(Me),ht()}));const V=Number.parseInt(Z.dataset.budgetCents??"0",10),he=Number.parseInt(Z.dataset.actualCents??"0",10),Ee=Z.dataset.label??"Kategorie",Ge=Z.dataset.hovering==="1",ne=`${Ee}|${V}|${he}`,Be=Z.dataset.lastRenderSignature!==ne;Z.dataset.lastRenderSignature=ne;const Xe=Math.max(120,Math.floor(Z.clientWidth||120)),pe=window.devicePixelRatio||1,Je=Math.floor(Xe*pe),Nt=Math.floor(L*pe);(Z.width!==Je||Z.height!==Nt)&&(Z.width=Je,Z.height=Nt);const F=Z.getContext("2d");if(!F)return;const Re=Math.max(1,V,he),Qe=Math.min(1,Math.max(0,V/Re)),dt=Math.min(1,Math.max(0,he/Re)),wt=V-he,ie=V>0?he/V*100:he>0?100:0,kt=8,ve=kt,Ve=34,Ye=Xe-kt*2,Le=22,_e=Number.parseInt(Z.dataset.hoverX??"-1",10),Ze=(we,ye,Me,Ae,et)=>{F.beginPath(),F.moveTo(we+et,ye),F.lineTo(we+Me-et,ye),F.quadraticCurveTo(we+Me,ye,we+Me,ye+et),F.lineTo(we+Me,ye+Ae-et),F.quadraticCurveTo(we+Me,ye+Ae,we+Me-et,ye+Ae),F.lineTo(we+et,ye+Ae),F.quadraticCurveTo(we,ye+Ae,we,ye+Ae-et),F.lineTo(we,ye+et),F.quadraticCurveTo(we,ye,we+et,ye),F.closePath()},bn=we=>{F.setTransform(1,0,0,1,0,0),F.clearRect(0,0,Z.width,Z.height),F.scale(pe,pe),Ze(ve,Ve,Ye,Le,8),F.fillStyle=p,F.fill(),F.strokeStyle=P,F.lineWidth=1,F.stroke();const ye=[.6,.25,.15],Me=[.1,.16,.24];let Ae=0;ye.forEach((Ot,ut)=>{const Bt=Ye*Ot;F.save(),F.globalAlpha=Me[ut]??.1,F.fillStyle=d,F.fillRect(ve+Ae,Ve,Bt,Le),F.restore(),Ae+=Bt});const et=V>0&&he>V?I:O,rn=Ye*dt*we;Ze(ve,Ve+3,rn,Le-6,6),F.fillStyle=et,F.fill(),Ge&&(F.save(),F.strokeStyle=et,F.lineWidth=1.5,F.globalAlpha=.8,Ze(ve-1,Ve+2,Math.max(2,rn+2),Le-4,7),F.stroke(),F.restore());const Lt=ve+Ye*Qe;F.strokeStyle=f,F.lineWidth=Ge?3:2,F.beginPath(),F.moveTo(Lt,Ve-3),F.lineTo(Lt,Ve+Le+3),F.stroke(),Ge&&_e>=ve&&_e<=ve+Ye&&(F.save(),F.strokeStyle=f,F.globalAlpha=.35,F.lineWidth=1,F.beginPath(),F.moveTo(_e,Ve-8),F.lineTo(_e,Ve+Le+8),F.stroke(),F.restore()),F.fillStyle=f,F.font="600 12px system-ui, -apple-system, sans-serif",F.textAlign="left",F.textBaseline="top",F.fillText(Ee,ve,10);const Ht=ie*we;if(F.fillStyle=ie>100?I:ie<100?O:d,F.textAlign="right",F.fillText(`${Ht.toFixed(0)}%`,ve+Ye,10),F.fillStyle=d,F.font="500 11px system-ui, -apple-system, sans-serif",F.textAlign="left",F.textBaseline="top",F.fillText(`Ist ${w(he)} · Ziel ${w(V)} · Δ ${wt>=0?"+":""}${w(wt)}`,ve,64),Ge){const Ot=`Nutzung ${ie.toFixed(1)}%`;F.font="600 11px system-ui, -apple-system, sans-serif";const ut=8,Bt=5,_t=22,_=F.measureText(Ot).width+ut*2,q=Number.isFinite(_e)?_e-_/2:ve+Ye-_,st=Math.min(ve+Ye-_,Math.max(ve,q)),yn=Ve-_t-8;F.save(),F.fillStyle=f,F.globalAlpha=.92,Ze(st,yn,_,_t,6),F.fill(),F.restore(),F.fillStyle=p,F.textAlign="left",F.textBaseline="top",F.fillText(Ot,st+ut,yn+Bt)}},Jt=ft.get(Z);if(Jt&&window.cancelAnimationFrame(Jt),!Be){bn(1);return}const lt=performance.now(),$t=we=>{const ye=we-lt,Me=Math.min(1,ye/X);if(bn(W(Me)),Me<1){const Ae=window.requestAnimationFrame($t);ft.set(Z,Ae);return}ft.delete(Z)},Mn=window.requestAnimationFrame($t);ft.set(Z,Mn)})}function Qt(){M.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),p=l.querySelector("[data-year-trend-active-net]"),P=l.querySelector("[data-year-trend-active-income]"),O=l.querySelector("[data-year-trend-active-expense]"),I=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!p||!P||!O||!I)return;const X=(V,he)=>{V.classList.remove("danger","budget-under");const Ee=he<0?"danger":he>0?"budget-under":"";Ee&&V.classList.add(Ee)},W=V=>{const he=V.dataset.monthLabel??"-",Ee=Number.parseInt(V.dataset.netCents??"0",10),Ge=Number.parseInt(V.dataset.actualNetCents??"0",10),ne=Number.parseInt(V.dataset.incomeCents??"0",10),Be=Number.parseInt(V.dataset.expenseCents??"0",10),Xe=Number.parseInt(V.dataset.deltaCents??"0",10);d.textContent=he,p.textContent=w(Ee),P.textContent=w(ne),O.textContent=w(Be),I.textContent=`${Xe>=0?"+":""}${w(Xe)}`,X(p,Ee),X(I,Xe),f.forEach(pe=>{const Je=pe===V;pe.classList.toggle("is-active",Je),pe.setAttribute("aria-pressed",String(Je))}),L&&(L.textContent=`${he}: Kalkulierter Saldo ${w(Ee)}, Ist-Saldo ${w(Ge)}, Einkommen ${w(ne)}, Ausgaben ${w(Be)}`)};f.forEach(V=>{const he=()=>{W(V)};V.addEventListener("mouseenter",he),V.addEventListener("focus",he),V.addEventListener("click",he)});const Z=f.find(V=>V.dataset.pointDefault==="1")??f[f.length-1];Z&&W(Z)})}function sa(o){if(o==="dashboard"){const l=h.years.slice().sort((d,p)=>p.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ae()}function _a(){h.topModal&&(h.topModal=null,ae())}function ia(){h.showUnexportedChangeLogModal=!0,ae()}function oa(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ae())}function Fn(){h.showPersistentAuditLogModal=!0,ae()}function la(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ae())}function Vt(){oe||(oe=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),oa();return}if(h.showPersistentAuditLogModal){o.preventDefault(),la();return}h.topModal&&(o.preventDefault(),_a())}}))}function pt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ma(){const o=M.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",pt())}function br(){if(bt)return;bt=!0;const o=()=>{Ma(),ht()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Pa(){if(se&&document.body.contains(se))return se;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return se=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),se=l,l}function Wa(){if(ge&&document.body.contains(ge))return ge;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return ge=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),ge=l,l}function Dn(){if(je&&document.body.contains(je))return je;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return je=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),je=l,l}function vt(){if(!ge){ct=null;return}ge.innerHTML="",ct=null}function In(){je&&(je.innerHTML="")}function Ta(o,l,f){const d=new Date,p=d.getFullYear(),P=d.getMonth()+1,O=d.getDate(),I=new Date(o,l,0).getDate();if(o<p||o===p&&l<P)return{occurrences:0,remainingDays:0};const L=o===p&&l===P?Math.min(O,I):1,X=Math.max(0,I-L+1);let W=0;for(let Z=L;Z<=I;Z+=1)new Date(o,l-1,Z).getDay()===f&&(W+=1);return{occurrences:W,remainingDays:X}}async function Aa(o,l){const f=Ie();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await We(`Wocheneinkauf geplant: ${cs.find(d=>d.value===o)?.label??"Wochentag"} mit ${w(f.weeklyShoppingEstimateCents)} €`),ae())}function yr(){const o=Ie(),l=zt();if(!o||!l)return;const f=Dn();In();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,p=o.weeklyShoppingEstimateCents??0,P=l.year,O=o.month,I=qn(P,O),L=I?rt(I):{foodCents:0},X=I?I.foodBudgetCents??0:0,W=L.foodCents,Z=X-W;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${cs.map(ie=>`<option value="${ie.value}" ${ie.value===d?"selected":""}>${ie.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${gt(p)}" />
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
    `;const V=f.querySelector(".weekly-shopping-modal-backdrop"),he=f.querySelector("#weekly-shopping-weekday"),Ee=f.querySelector("#weekly-shopping-estimate"),Ge=f.querySelector("#weekly-shopping-occurrences"),ne=f.querySelector("#weekly-shopping-total"),Be=f.querySelector("#weekly-shopping-rest-before"),Xe=f.querySelector("#weekly-shopping-rest-after"),pe=f.querySelector("#weekly-shopping-days-left"),Je=f.querySelector("#weekly-shopping-per-day"),Nt=f.querySelector("#weekly-shopping-cancel"),F=f.querySelector("#weekly-shopping-save");function Re(){const ie=Number.parseInt(he?.value??"1",10);return Number.isInteger(ie)&&ie>=0&&ie<=6?ie:1}function Qe(){return Math.max(0,Oe(Ee?.value??"0"))}function dt(){const ie=Re(),kt=Qe(),{occurrences:ve,remainingDays:Ve}=Ta(P,O,ie),Ye=ve*kt,Le=Z-Ye,_e=Ve>0?Math.trunc(Le/Ve):0;Ge&&(Ge.textContent=`${ve}`),ne&&(ne.textContent=`${w(Ye)} €`),Be&&(Be.textContent=`${w(Z)} €`),Xe&&(Xe.textContent=`${w(Le)} €`,Xe.className=Le<0?"danger":Le>0?"budget-under":""),pe&&(pe.textContent=`${Ve}`),Je&&(Je.textContent=`${w(_e)} €`,Je.className=_e<0?"danger":_e>0?"budget-under":"")}async function wt(){await Aa(Re(),Qe()),In()}Nt?.addEventListener("click",()=>{In()}),F?.addEventListener("click",async()=>{await wt()}),he?.addEventListener("change",()=>{dt()}),Ee?.addEventListener("input",()=>{dt()}),Ee?.addEventListener("keydown",async ie=>{if(ie.key==="Escape"){ie.preventDefault(),In();return}ie.key==="Enter"&&(ie.preventDefault(),await wt())}),V?.addEventListener("click",ie=>{ie.target===V&&In()}),window.setTimeout(()=>{Ee?.focus(),Ee?.select(),dt()},0)}function Zt(o,l){let f=o;const d=l.min;if(d){const P=Number.parseFloat(d);if(!Number.isNaN(P)){const O=Math.round(P*100);f=Math.max(f,O)}}const p=l.max;if(p){const P=Number.parseFloat(p);if(!Number.isNaN(P)){const O=Math.round(P*100);f=Math.min(f,O)}}return f}function at(o){if(o.disabled)return;const l=Wa();vt(),ct=o;const f=Oe(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${w(f)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${w(f)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${w(f)} €</strong></div>
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
    `;const p=l.querySelector(".amount-modal-backdrop"),P=l.querySelector("#amount-modal-delta"),O=l.querySelector("#amount-modal-next-delta"),I=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),X=l.querySelector("#amount-modal-overwrite"),W=l.querySelector("#amount-modal-apply");function Z(){const ne=Oe(P?.value??"0");return Zt(f+ne,o)}function V(){const ne=Oe(P?.value??"0");return Zt(ne,o)}function he(){O&&(O.textContent=`${w(Z())} €`),I&&(I.textContent=`${w(V())} €`)}function Ee(){const ne=ct;if(!ne){vt();return}const Be=Z();vt(),ne.value=gt(Be),ne.dispatchEvent(new Event("change",{bubbles:!0}))}function Ge(){const ne=ct;if(!ne){vt();return}const Be=V();vt(),ne.value=gt(Be),ne.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{vt()}),X?.addEventListener("click",()=>{Ge()}),W?.addEventListener("click",()=>{Ee()}),P?.addEventListener("input",()=>{he()}),P?.addEventListener("keydown",ne=>{if(ne.key==="Escape"){ne.preventDefault(),vt();return}ne.key==="Enter"&&(ne.preventDefault(),Ee())}),p?.addEventListener("click",ne=>{ne.target===p&&vt()}),window.setTimeout(()=>{P?.focus(),P?.select(),he()},0)}function de(o,l="success"){const f=Pa(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const p=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},p)}function kn(){return new Date().getMonth()+1}function Yt(){return new Date().getFullYear()}function Ga(o){const l=Yt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function un(){return new Date().toISOString().slice(0,10)}function Ja(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function Dt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function $n(){const o=localStorage.getItem(Te);return o&&us(o)?o:"light"}function ua(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Te,o)}function Cr(){return localStorage.getItem(H)==="1"}function ee(o){localStorage.setItem(H,o?"1":"0")}function Ha(){const o=localStorage.getItem(me);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function xe(o){localStorage.setItem(me,JSON.stringify(o.slice(-200)))}function Nn(){const o=localStorage.getItem(re);if(!o)return null;const l=o.trim();return l||null}function xr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(Ce);if(!l)return o;try{const f=JSON.parse(l),d=p=>typeof p=="number"&&Number.isFinite(p)?p:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function cn(o){localStorage.setItem(Ce,JSON.stringify(o))}function Xa(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function wr(o){const l=o.trim();l&&localStorage.setItem(re,l)}async function kr(){Pa(),ua($n()),h.hasUnexportedChanges=Cr(),h.unexportedChangeLog=Ha(),h.persistentAuditLog=await Nr(),h.lastBackupFileName=Nn(),h.recurringBudgetDefaults=xr(),Vt(),br();const[o,l,f]=await Promise.all([ra(),Or(),Dr()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Oa(h.years),hn(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Fa(h.years),o.length>0&&(h.selectedYear=Ga(o),h.selectedMonth=kn()),ae()}function Oa(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const p=Number(d.weeklyShoppingWeekday);Number.isInteger(p)&&p>=0&&p<=6?d.weeklyShoppingWeekday=p:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(p=>{const P=l(p.incomeSource);if(!P){const{incomeSource:O,...I}=p;return I}return{...p,incomeSource:P}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((p,P)=>p+P.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((p,P)=>p+P.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Ln(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function yt(o){return o==="fresh"||o==="salary"||!o}async function Fa(o){for(const l of o)await aa(l)}function zt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ie(){const o=zt();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function qn(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function rt(o){const l=o.days.reduce((I,L)=>I+L.foodCents,0),f=o.days.reduce((I,L)=>I+L.goingOutCents,0),d=o.fixedCosts.reduce((I,L)=>I+L.actualCents,0),p=o.variableCosts.reduce((I,L)=>I+L.amountCents,0)+o.variablePositions.reduce((I,L)=>I+L.actualCents,0),P=o.miscCosts.reduce((I,L)=>I+L.amountCents,0),O=l+f+d+p+P;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:P,totalCents:O}}function It(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((O,I)=>O+I.plannedCents,0),p=o.variablePositions.reduce((O,I)=>O+I.budgetCents,0),P=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??p)+P}function Sn(o){return o.months.reduce((l,f)=>{const d=rt(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Kn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:rt(l)}))}function jn(o){const l=o.months.reduce((O,I)=>O+(I.foodBudgetCents??0),0),f=o.months.reduce((O,I)=>O+(I.goingOutBudgetCents??0),0),d=o.months.reduce((O,I)=>O+(I.fixedBudgetCents??I.fixedCosts.reduce((L,X)=>L+X.plannedCents,0)),0),p=o.months.reduce((O,I)=>O+(I.variableBudgetCents??I.variablePositions.reduce((L,X)=>L+X.budgetCents,0)),0),P=o.months.reduce((O,I)=>O+(I.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:P,totalCents:l+f+d+p+P}}function En(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,p)=>d+(yt(p.incomeSource)?p.amountCents:0),0),0)}function Ut(o,l){const f=o.months.slice().sort((d,p)=>d.month-p.month)[0];return f?l.get(fe(o.year,f.month))?.carriedFromPreviousCents??0:0}function ca(){const o=h.years.slice().sort((d,p)=>d.year-p.year).flatMap(d=>d.months.slice().sort((p,P)=>p.month-P.month).map(p=>({year:d.year,month:p}))),l=new Map;let f=0;return o.forEach(({year:d,month:p},P)=>{const O=p.carryoverOverrideCents,I=typeof O=="number",L=I?O:f,X=P>0||I,W=p.incomes.reduce((Ee,Ge)=>Ee+(yt(Ge.incomeSource)?Ge.amountCents:0),0),Z=It(p),V=W+L,he=V-Z;l.set(fe(d,p.month),{hasPreviousMonth:X,carriedFromPreviousCents:L,recordedIncomeCents:W,effectiveIncomeCents:V,plannedBudgetCents:Z,netCents:he}),f=he}),l}function mt(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function en(o){return`${o>0?"+":""}${w(o)}`}function J(o,l){const f=o-l,d=mt(l,o);return`${w(o)} <span class="eval-diff ${d}">(Δ ${en(f)})</span>`}function Wt(o,l){const f=o!==null,d=f?o-l:null,p=f?mt(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${w(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${w(l)} €</strong>
      </div>
      <div class="column-overview-row ${p}">
        <span>Diff</span>
        <strong>${d===null?"-":`${w(d)} €`}</strong>
      </div>
    </div>`}async function dn(o){if(await Fs(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=rs(o,h.fixedTemplates,h.fixedTemplateVersion);Xa(f),Da(f),await aa(f),h.years=await ra(),fn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=kn(),de(`Jahr ${o} wurde angelegt.`),ae()}function fn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,p={id:At("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,p].slice(-200),xe(h.unexportedChangeLog);const P={id:At("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,P].slice().sort((O,I)=>O.timestampIso.localeCompare(I.timestampIso)),Ds(P).catch(O=>{console.error("Audit-Log konnte nicht gespeichert werden",O),de("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function z(o){const l=o.trim();l&&(h.lastBackupFileName=l,wr(l))}function da(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],xe([]),h.showUnexportedChangeLogModal=!1,z(o)}async function We(o){const l=zt();l&&(await aa(l),h.years=await ra(),fn(o))}async function Ct(o){for(const l of h.years)await aa(l);h.years=await ra(),fn(o)}function fe(o,l){return o*100+l}function Rn(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Qa(o,l){const f=Rn(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(P=>P.month===f.month);!d||d.variablePositions.some(P=>P.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:At("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],Et(d))}function Da(o){h.annualVariableFixedTemplates.forEach(l=>{Qa(l,o)})}function hn(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const p=d.variablePositions.some(O=>typeof O.autoAnnualTemplateId=="string"),P=d.fixedCosts.some(O=>typeof O.autoAnnualTemplateId=="string");p&&(d.variablePositions=d.variablePositions.filter(O=>O.autoAnnualTemplateId?l.has(O.autoAnnualTemplateId):!0),Et(d)),P&&(d.fixedCosts=d.fixedCosts.filter(O=>!O.autoAnnualTemplateId),xt(d))}),Da(f)})}function xt(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function Et(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function fa(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function Se(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",fa());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function He(o,l){const f=fe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{if(fe(d.year,p.month)<f)return;p.fixedCosts.some(O=>O.templateId===o.id)||(p.fixedCosts.push({id:At("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),xt(p))})})}function $r(o,l,f){const d=fe(f.year,f.month);h.years.forEach(p=>{p.months.forEach(P=>{fe(p.year,P.month)<d||(P.fixedCosts=P.fixedCosts.map(O=>O.templateId!==l.id?O:{...O,name:l.name,plannedCents:l.plannedCents,actualCents:O.actualCents===o.plannedCents?l.plannedCents:O.actualCents}),xt(P))})})}function ha(o,l){const f=fe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{fe(d.year,p.month)<f||(p.fixedCosts=p.fixedCosts.filter(P=>P.templateId!==o),xt(p))})})}async function pa(o,l){const f=o.trim();if(!f)return;const d=Se();if(!d)return;const p=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const P=h.fixedTemplates.find(I=>I.id===h.editingFixedTemplateId);if(!P)return;const O={...P,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(I=>I.id===h.editingFixedTemplateId?O:I),$r(P,O,d)}else{const P={id:At("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,P],He(P,d)}h.fixedTemplateVersion=await Fr(h.fixedTemplates),h.editingFixedTemplateId=null,await Ct(p?`Fixkosten-Vorlage aktualisiert: ${f} (${w(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${w(l)} €)`),de(p?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function va(o){h.editingFixedTemplateId=o,ae()}function Sr(){h.editingFixedTemplateId=null,ae()}async function tn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=Se();if(!f)return;const d=h.fixedTemplates.find(p=>p.id===o);h.fixedTemplates=h.fixedTemplates.filter(p=>p.id!==o),ha(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Fr(h.fixedTemplates),await Ct(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),de("Fixkosten-Vorlage wurde gelöscht."),ae()}async function Bn(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const p=Rn(l);if(!p){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P={id:At("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,P],h.years.forEach(O=>{Qa(P,O)}),h.annualVariableFixedTemplateVersion=await Ir(h.annualVariableFixedTemplates),await Ct(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${w(f)} €, jährlich in ${$e(p.month)})`),de("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function nn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(p=>{p.variablePositions=p.variablePositions.filter(P=>P.autoAnnualTemplateId!==o),Et(p),p.fixedCosts=p.fixedCosts.filter(P=>P.autoAnnualTemplateId!==o),xt(p)})}),h.annualVariableFixedTemplateVersion=await Ir(h.annualVariableFixedTemplates),await Ct(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),de("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function Vn(o,l,f){const d=Ie();d&&(d.days=d.days.map(p=>p.isoDate===o?{...p,[l]:f}:p),await We(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${w(f)} €`),ae())}async function Er(o,l){const f=Ie();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,actualCents:l}:p),await We(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function an(o,l){const f=Ie();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,plannedCents:l}:p),xt(f),await We(`Fixkosten-Budget angepasst: ${d.name} auf ${w(l)} €`),ae())}async function Za(o,l){const f=Ie();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const p={id:At("fixed"),templateId:At("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[p,...f.fixedCosts],xt(f),await We(`Fixkosten-Position hinzugefügt: ${d} (${w(l)} €)`),de("Fixkosten-Position wurde hinzugefügt."),ae()}async function pn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Ie();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(p=>p.id!==o),xt(f),await We(`Fixkosten-Position gelöscht: ${d.name}`),de("Fixkosten-Position wurde gelöscht."),ae())}async function er(o){await _n("fixedBudgetCents",o,"Fixkosten")}async function Ia(o){await _n("foodBudgetCents",o,"Essen")}async function Ne(o){await _n("goingOutBudgetCents",o,"Ausgehen")}async function vn(o){await _n("miscBudgetCents",o,"Sonstiges")}async function Gt(o){await _n("variableBudgetCents",o,"Variable Kosten")}async function _n(o,l,f){const d=Ie(),p=h.selectedYear;if(!d||!p||d[o]===l)return;if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const O=fe(p,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(L=>{fe(I.year,L.month)<=O||(L[o]=l)})}),h.recurringBudgetDefaults[o]=l,cn(h.recurringBudgetDefaults),await Ct(`Budget "${f}" auf ${w(l)} € gesetzt (inkl. zukünftiger Monate)`),de(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ae();return}await We(`Budget "${f}" auf ${w(l)} € gesetzt`),ae()}async function mn(o){const l=Ie();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await We(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${w(o)} € gesetzt`),ae())}async function Yn(o,l,f){const d=Ie(),p=h.selectedYear;if(!d||!p)return;const P=o.trim();if(!P){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:At("varpos"),name:P,budgetCents:l,actualCents:0},...d.variablePositions],Et(d),f){const O=fe(p,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(L=>{fe(I.year,L.month)<=O||(L.variablePositions=[{id:At("varpos"),name:P,budgetCents:l,actualCents:0},...L.variablePositions],Et(L))})}),await Ct(`Variable Position hinzugefügt: ${P} (${w(l)} €) für zukünftige Monate`),de("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await We(`Variable Position hinzugefügt: ${P} (${w(l)} €)`),de("Variable Position wurde hinzugefügt."),ae()}async function Na(o,l){const f=Ie();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,actualCents:l}:p),await We(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function La(o,l){const f=Ie();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,budgetCents:l}:p),Et(f),await We(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function gn(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Ie(),d=h.selectedYear;if(!f||!d)return;const p=f.variablePositions.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.variablePositions.some(W=>W.name===p.name&&W.budgetCents===p.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),Et(f),I){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.variablePositions=X.variablePositions.filter(W=>!(W.name===p.name&&W.budgetCents===p.budgetCents)),Et(X))})}),await Ct(`Variable Position gelöscht: ${p.name} (inkl. zukünftiger Monate)`),de("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await We(`Variable Position gelöscht: ${p.name}`),de("Variable Position wurde gelöscht."),ae()}async function tr(o){const l=Ie(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(W=>W.id===o);if(!d)return;const p={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let P=h.years.find(W=>W.year===p.year);if(!P){const W=rs(p.year,h.fixedTemplates,h.fixedTemplateVersion);Xa(W),Da(W),await aa(W),h.years=[...h.years,W].sort((Z,V)=>Z.year-V.year),P=W}const O=P.months.find(W=>W.month===p.month);if(!O)return;const I=O.variablePositions.some(W=>W.id===d.id||W.name===d.name&&W.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(W=>W.id!==o),Et(l),!I){const Z=O.variablePositions.some(V=>V.id===d.id)?{...d,id:At("varpos")}:d;O.variablePositions=[Z,...O.variablePositions],Et(O)}const L=`${$e(p.month)} ${p.year}`,X=`Variable Position verschoben: ${d.name} → ${L}`;if(p.year===f)await We(X);else{const W=zt();if(!W)return;await aa(W),await aa(P),h.years=await ra(),Oa(h.years),fn(X)}de(I?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),ae()}async function zn(o,l,f){const d=Ie(),p=h.selectedYear;if(!d||!p)return;const P=o.trim();if(!P){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const O=ss(P,l);if(d.miscCosts=[O,...d.miscCosts],f){const I=fe(p,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=I||(X.miscCosts=[ss(P,l),...X.miscCosts])})}),await Ct(`Sonstige Position hinzugefügt: ${P} (${w(l)} €) für zukünftige Monate`),de("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await We(`Sonstige Position hinzugefügt: ${P} (${w(l)} €)`),de("Sonstige Position wurde hinzugefügt."),ae()}async function nr(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Ie(),d=h.selectedYear;if(!f||!d)return;const p=f.miscCosts.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.miscCosts.some(W=>W.description===p.description&&W.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),I){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.miscCosts=X.miscCosts.filter(W=>!(W.description===p.description&&W.amountCents===p.amountCents)))})}),await Ct(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),de("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await We(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €)`),de("Sonstige Position wurde gelöscht."),ae()}async function ue(o,l,f,d){const p=Ie(),P=h.selectedYear;if(!p||!P)return;const O=o.trim();if(!O){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const I=is(O,l,f);if(p.incomes=[I,...p.incomes],d){const L=fe(P,h.selectedMonth);h.years.forEach(X=>{X.months.forEach(W=>{fe(X.year,W.month)<=L||(W.incomes=[is(O,l,f),...W.incomes])})}),await Ct(`Einkommen hinzugefügt: ${O} (${w(l)} €, ${Ln(f)}) für zukünftige Monate`),de("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await We(`Einkommen hinzugefügt: ${O} (${w(l)} €, ${Ln(f)})`),de("Einkommen wurde hinzugefügt."),ae()}async function ar(o,l){const f=Ie();if(!f)return;const d=f.incomes.find(p=>p.id===o);d&&(f.incomes=f.incomes.map(p=>{if(p.id!==o)return p;if(!l){const{incomeSource:P,...O}=p;return O}return{...p,incomeSource:l}}),await We(`Einkommensart angepasst: ${d.description} → ${Ln(l)}`),ae())}async function rr(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Ie(),d=h.selectedYear;if(!f||!d)return;const p=f.incomes.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.incomes.some(W=>W.description===p.description&&W.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),I){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.incomes=X.incomes.filter(W=>!(W.description===p.description&&W.amountCents===p.amountCents)))})}),await Ct(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),de("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await We(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €)`),de("Einkommen wurde gelöscht."),ae()}async function Un(){const o=await Ns(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${un()}-${Ja()}.json`,p=document.createElement("a");p.href=f,p.download=d,p.click(),URL.revokeObjectURL(f),da(d),ae(),de("Backup wurde exportiert.")}async function Wn(o){const l=await o.text(),f=JSON.parse(l);await Ls(f);const[d,p,P]=await Promise.all([ra(),Or(),Dr()]);h.years=d,h.annualVariableFixedTemplates=P.templates,h.annualVariableFixedTemplateVersion=P.version,Oa(h.years),hn(h.years),h.fixedTemplates=p.templates,h.fixedTemplateVersion=p.version,await Fa(h.years),h.persistentAuditLog=await Nr(),h.selectedYear=Ga(d),h.selectedMonth=kn(),da(o.name),de("Backup wurde importiert."),ae()}function ae(){const o=zt(),l=Ie(),f=un(),d=l?rt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},p=o?Sn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},P=o?Kn(o):[],O=l?l.foodBudgetCents??0:0,I=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,S)=>r+S.plannedCents,0):0,X=l?l.variableBudgetCents??l.variablePositions.reduce((r,S)=>r+S.budgetCents,0):0,W=l?l.miscBudgetCents??0:0,Z=o?o.months.reduce((r,S)=>r+(S.foodBudgetCents??0),0):0,V=o?o.months.reduce((r,S)=>r+(S.goingOutBudgetCents??0),0):0,he=o?o.months.reduce((r,S)=>r+(S.fixedBudgetCents??S.fixedCosts.reduce((Y,Q)=>Y+Q.plannedCents,0)),0):0,Ee=o?o.months.reduce((r,S)=>r+(S.variableBudgetCents??S.variablePositions.reduce((Y,Q)=>Y+Q.budgetCents,0)),0):0,Ge=o?o.months.reduce((r,S)=>r+(S.miscBudgetCents??0),0):0,ne=l?l.incomes.reduce((r,S)=>r+(yt(S.incomeSource)?S.amountCents:0),0):0,Be=l?l.incomes.reduce((r,S)=>r+(S.incomeSource==="salary"?S.amountCents:0),0):0,Xe=l?l.incomes.reduce((r,S)=>r+(S.incomeSource==="fresh"?S.amountCents:0),0):0,pe=ca(),Je=o?pe.get(fe(o.year,h.selectedMonth)):void 0,Nt=o?o.months.slice().sort((r,S)=>r.month-S.month)[0]:void 0,F=Je?.carriedFromPreviousCents??0,Re=Je?.hasPreviousMonth??!1,Qe=Je?.effectiveIncomeCents??ne,dt=l?It(l):0,wt=Je?.netCents??ne-dt,ie=Qe-d.totalCents,kt=Be-d.totalCents,ve=d.totalCents>0?`${(Be/d.totalCents*100).toFixed(1)} %`:"-",Ve=F<0?"danger":F>0?"budget-under":"",Ye=wt<0?"danger":wt>0?"budget-under":"",Le=ie<0?"danger":ie>0?"budget-under":"",_e=o?o.months.reduce((r,S)=>r+S.incomes.reduce((Y,Q)=>Y+(yt(Q.incomeSource)?Q.amountCents:0),0),0):0,Ze=o?o.months.reduce((r,S)=>r+S.incomes.reduce((Y,Q)=>Y+(Q.incomeSource==="salary"?Q.amountCents:0),0),0):0,bn=o?o.months.reduce((r,S)=>r+S.incomes.reduce((Y,Q)=>Y+(Q.incomeSource==="fresh"?Q.amountCents:0),0),0):0,Jt=o&&Nt?pe.get(fe(o.year,Nt.month))?.carriedFromPreviousCents??0:0,lt=_e+Jt,$t=lt-p.totalCents,Mn=Ze-p.totalCents,we=p.totalCents>0?`${(Ze/p.totalCents*100).toFixed(1)} %`:"-",ye=Jt<0?"danger":Jt>0?"budget-under":"",Me=$t<0?"danger":$t>0?"budget-under":"",Ae=O+I+L+X+W,et=O+I,rn=d.foodCents+d.goingOutCents,Lt=et-rn,Ht=mt(rn,et),Ot=Z+V+he+Ee+Ge,ut=Qe-Ae,Bt=lt-Ot,_t=Ae-d.totalCents,Gn=Ot-p.totalCents,_=r=>r<0?"danger":r>0?"budget-under":"",q=(r,S)=>S<=0?"muted":r>=S?"budget-under":"danger",st=q(Be,d.totalCents),yn=q(Ze,p.totalCents),Pe=(r,S)=>{if(S<=0)return"0%";const Q=Math.max(0,r)/S*100;return`${Math.min(100,Math.max(0,Q)).toFixed(1)}%`},qa=(r,S)=>{if(S<=0)return r>0?100:0;const Y=Math.max(0,r)/S*100;return Math.max(0,Y)},it=[{label:"Essen",budgetCents:O,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:I,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:X,actualCents:d.variableCents},{label:"Sonstige",budgetCents:W,actualCents:d.miscCents}];Math.max(1,...it.flatMap(r=>[r.budgetCents,r.actualCents]));const Pn=(r,S)=>S<=0?"bar-positive":r<=0||S>r?"bar-negative":"bar-positive",Tn=[{label:"Einkommen gesamt",valueCents:Qe,className:"bar-income"},{label:"Budget gesamt",valueCents:Ae,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ie,className:ie<0?"bar-negative":"bar-positive"}],ir=Math.max(1,...Tn.map(r=>Math.abs(r.valueCents))),ma=o?o.months.slice().sort((r,S)=>r.month-S.month).map(r=>{const S=r.foodBudgetCents??0,Y=r.goingOutBudgetCents??0,Q=r.fixedBudgetCents??r.fixedCosts.reduce((Rt,Ue)=>Rt+Ue.plannedCents,0),ke=r.variableBudgetCents??r.variablePositions.reduce((Rt,Ue)=>Rt+Ue.budgetCents,0),ze=r.miscBudgetCents??0,Pt=S+Y+Q+ke+ze;return{month:r.month,foodBudgetCents:S,goingOutBudgetCents:Y,fixedBudgetCents:Q,variableBudgetCents:ke,miscBudgetCents:ze,totalBudgetCents:Pt}}):[],Ft=new Map(ma.map(r=>[r.month,r])),qt=r=>{if(r.length===0)return null;const S=Math.min(...r),Y=Math.max(...r),Q=Math.round(r.reduce((ke,ze)=>ke+ze,0)/r.length);return{min:S,avg:Q,max:Y}},Jn=P.map(r=>r.summary.foodCents),ga=P.map(r=>r.summary.goingOutCents),sn=P.map(r=>r.summary.fixedCents),ba=P.map(r=>r.summary.variableCents),ya=P.map(r=>r.summary.miscCents),Hn=P.map(r=>r.summary.totalCents),Ca=P.map(r=>o?pe.get(fe(o.year,r.month))?.plannedBudgetCents??0:0),or=P.map(r=>o?pe.get(fe(o.year,r.month))?.netCents??0:0),Ka=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((S,Y)=>S+(Y.incomeSource==="salary"?Y.amountCents:0),0)])),xa=P.map(r=>Ka.get(r.month)??0),Mt={food:qt(Jn),goingOut:qt(ga),fixed:qt(sn),variable:qt(ba),misc:qt(ya),total:qt(Hn),salary:qt(xa),budget:qt(Ca),net:qt(or)},Br=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Kt={food:Jn.reduce((r,S)=>r+S,0),goingOut:ga.reduce((r,S)=>r+S,0),fixed:sn.reduce((r,S)=>r+S,0),variable:ba.reduce((r,S)=>r+S,0),misc:ya.reduce((r,S)=>r+S,0),total:Hn.reduce((r,S)=>r+S,0),salary:xa.reduce((r,S)=>r+S,0),budget:Ca.reduce((r,S)=>r+S,0)},ja=Br.map(({key:r,label:S})=>{const Y=Mt.food?.[r]??null,Q=Mt.goingOut?.[r]??null,ke=Mt.fixed?.[r]??null,ze=Mt.variable?.[r]??null,Pt=Mt.misc?.[r]??null,Rt=Mt.total?.[r]??null,Ue=Mt.salary?.[r]??null,xn=Mt.budget?.[r]??null,wn=Mt.net?.[r]??null,Tt=ta=>ta===null?"-":w(ta);return`<tr>
                  <td><strong>${S}</strong></td>
                  <td>${Tt(Y)}</td>
                  <td>${Tt(Q)}</td>
                  <td>${Tt(ke)}</td>
                  <td>${Tt(ze)}</td>
                  <td>${Tt(Pt)}</td>
                  <td>${Tt(Rt)}</td>
                  <td>${Tt(Ue)}</td>
                  <td>${Tt(xn)}</td>
                  <td>${Tt(wn)}</td>
                </tr>`}).join(""),_r=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${w(Kt.food)}</td>
                  <td>${w(Kt.goingOut)}</td>
                  <td>${w(Kt.fixed)}</td>
                  <td>${w(Kt.variable)}</td>
                  <td>${w(Kt.misc)}</td>
                  <td>${w(Kt.total)}</td>
                  <td>${w(Kt.salary)}</td>
                  <td>${w(Kt.budget)}</td>
                </tr>`,Ra=Math.max(1,...P.flatMap(r=>{const S=Ft.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,S??0]})),lr=Math.max(1,...P.flatMap(r=>{const S=Ft.get(r.month),Y=r.summary.foodCents+r.summary.goingOutCents,Q=(S?.foodBudgetCents??0)+(S?.goingOutBudgetCents??0);return[Y,Q]})),Va=Math.max(1,...P.flatMap(r=>{const S=Ft.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,S]})),Ya=Math.max(1,...P.flatMap(r=>{const S=Ft.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,S]})),ur=Math.max(1,...P.flatMap(r=>{const S=Ft.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,S]})),cr=mt(d.fixedCents,L),za=mt(d.foodCents,O),dr=mt(d.goingOutCents,I),fr=mt(d.variableCents,X),Mr=mt(d.miscCents,W),Xn=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,Pr=h.hasUnexportedChanges,Qn=h.unexportedChangeLog.slice().reverse(),jt=h.persistentAuditLog.slice().sort((r,S)=>S.timestampIso.localeCompare(r.timestampIso)),qe=h.lastBackupFileName?Dt(h.lastBackupFileName):"-",wa={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},tt=h.years.slice().sort((r,S)=>r.year-S.year),ka=tt.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??tt[tt.length-1]?.year??null,nt=typeof ka=="number"?tt.find(r=>r.year===ka):void 0,hr=nt?nt.months.slice().sort((r,S)=>r.month-S.month):[],St=nt?Sn(nt):wa,Cn=nt?jn(nt):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},An=nt?En(nt):0,on=nt?Ut(nt,pe):0,$a=An+on,e=nt?nt.months.reduce((r,S)=>r+It(S),0):0,t=$a-e,n=$a-St.totalCents,a=[{label:"Essen",budgetCents:Cn.foodCents,actualCents:St.foodCents},{label:"Ausgehen",budgetCents:Cn.goingOutCents,actualCents:St.goingOutCents},{label:"Fixkosten",budgetCents:Cn.fixedCents,actualCents:St.fixedCents},{label:"Variable",budgetCents:Cn.variableCents,actualCents:St.variableCents},{label:"Sonstige",budgetCents:Cn.miscCents,actualCents:St.miscCents}],s=hr.map(r=>{const S=nt?pe.get(fe(nt.year,r.month)):void 0,Y=rt(r),Q=r.incomes.reduce((ta,pr)=>ta+pr.amountCents,0),ke=S?.effectiveIncomeCents??Q,ze=S?.plannedBudgetCents??It(r),Pt=Y.foodCents,Rt=Y.goingOutCents,Ue=Pt+Rt,xn=Y.totalCents,wn=ke-ze,Tt=ke-xn;return{month:r.month,foodCents:Pt,goingOutCents:Rt,foodAndGoingOutCents:Ue,effectiveIncomeCents:ke,plannedBudgetCents:ze,actualCostCents:xn,plannedNetCents:wn,actualNetCents:Tt}}),i=Math.max(1,...s.map(r=>r.actualCostCents)),u=Math.max(1,...s.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),c=Math.max(1,...s.map(r=>r.foodAndGoingOutCents)),y=Math.max(1,...s.map(r=>r.foodCents)),$=Math.max(1,...s.map(r=>r.goingOutCents)),m=s.map((r,S,Y)=>{const Q=S>0?Y[S-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:$e(r.month),monthShortLabel:$e(r.month).slice(0,3),deltaCents:r.plannedNetCents-Q}}),v=m[m.length-1]??null,x=Math.min(0,...m.map(r=>r.plannedNetCents)),C=Math.max(0,...m.map(r=>r.plannedNetCents)),b=Math.max(1,C-x),g=720,E=320,B=18,k=18,T=38,A=56,j=g-A-k,K=E-B-T,D=r=>{if(m.length<=1)return A+j/2;const S=r/(m.length-1);return A+S*j},U=r=>B+(C-r)/b*K,R=m.map((r,S)=>{const Y=D(S),Q=U(r.plannedNetCents);return{...r,x:Y,y:Q,leftPercent:Y/g*100,topPercent:Q/E*100}}),N=R.map((r,S)=>`${S===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),G=R.length>0?`${N} L ${R[R.length-1]?.x.toFixed(1)} ${(B+K).toFixed(1)} L ${R[0]?.x.toFixed(1)} ${(B+K).toFixed(1)} Z`:"",ce=5,be=Array.from({length:ce},(r,S)=>{const Y=S/(ce-1),Q=C-Y*b;return{valueCents:Math.round(Q/100)*100,y:U(Q)}}),te=U(0),le=m[0]?.plannedNetCents??0,ot=(m[m.length-1]?.plannedNetCents??0)-le,De=ot<0?"trend-badge-negative":ot>0?"trend-badge-positive":"trend-badge-neutral",ln=ot<0?"↘":ot>0?"↗":"→",Ua=ot<0?"Abwärtstrend":ot>0?"Aufwärtstrend":"Seitwärts",Zn=tt.reduce((r,S)=>{const Y=jn(S);return{foodCents:r.foodCents+Y.foodCents,goingOutCents:r.goingOutCents+Y.goingOutCents,fixedCents:r.fixedCents+Y.fixedCents,variableCents:r.variableCents+Y.variableCents,miscCents:r.miscCents+Y.miscCents,totalCents:r.totalCents+Y.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),ea=tt.reduce((r,S)=>{const Y=Sn(S);return{foodCents:r.foodCents+Y.foodCents,goingOutCents:r.goingOutCents+Y.goingOutCents,fixedCents:r.fixedCents+Y.fixedCents,variableCents:r.variableCents+Y.variableCents,miscCents:r.miscCents+Y.miscCents,totalCents:r.totalCents+Y.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),ps=tt.reduce((r,S)=>r+En(S),0),vs=tt[0]?Ut(tt[0],pe):0,Tr=ps+vs,qr=Tr-Zn.totalCents,Kr=Tr-ea.totalCents,jr=[{label:"Essen",budgetCents:Zn.foodCents,actualCents:ea.foodCents},{label:"Ausgehen",budgetCents:Zn.goingOutCents,actualCents:ea.goingOutCents},{label:"Fixkosten",budgetCents:Zn.fixedCents,actualCents:ea.fixedCents},{label:"Variable",budgetCents:Zn.variableCents,actualCents:ea.variableCents},{label:"Sonstige",budgetCents:Zn.miscCents,actualCents:ea.miscCents}],Rr=Math.max(1,...jr.flatMap(r=>[r.budgetCents,r.actualCents])),Sa=tt.map(r=>{const S=Sn(r),Y=jn(r),Q=En(r),ke=r.months.reduce((Rt,Ue)=>Rt+Ue.incomes.reduce((xn,wn)=>xn+(wn.incomeSource==="salary"?wn.amountCents:0),0),0),ze=Ut(r,pe),Pt=Q+ze;return{year:r.year,salaryIncomeCents:ke,budgetTotalCents:Y.totalCents,actualTotalCents:S.totalCents,effectiveIncomeCents:Pt,plannedNetCents:Pt-Y.totalCents,actualNetCents:Pt-S.totalCents}}),Vr=Math.max(1,...Sa.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),ms=Math.max(1,...Sa.map(r=>r.actualTotalCents)),gs=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${tt.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${tt.map(r=>`<option value="${r.year}" ${r.year===ka?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${nt?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w($a)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(e)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(St.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(t)}">${w(t)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(n)}">${w(n)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${ln}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${De}">${ln} ${Ua}</span>
                    </div>
                  </header>
                  ${v?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Dt(v.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${_(v.plannedNetCents)}" data-year-trend-active-net>${w(v.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${w(v.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${w(v.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${_(v.deltaCents)}" data-year-trend-active-delta>${v.deltaCents>=0?"+":""}${w(v.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${g} ${E}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${nt?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${be.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${A}" y1="${r.y.toFixed(1)}" x2="${g-k}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${A-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${w(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${A}" y1="${te.toFixed(1)}" x2="${g-k}" y2="${te.toFixed(1)}"></line>
                              ${G?`<path class="year-trend-area" d="${G}"></path>`:""}
                              ${N?`<path class="year-trend-line" d="${N}"></path>`:""}
                              ${R.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${E-12}" text-anchor="middle">${Dt(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${R.map((r,S)=>`
                                    <button
                                      class="year-trend-point-hit ${S===R.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${S===R.length-1?"1":"0"}"
                                      data-month-label="${Dt(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Dt(r.monthLabel)}: Kalkulierter Saldo ${w(r.plannedNetCents)}, Einkommen ${w(r.effectiveIncomeCents)}, Ausgaben ${w(r.actualCostCents)}"
                                      aria-pressed="${S===R.length-1?"true":"false"}"
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
                    ${a.map(r=>{const S=qa(r.actualCents,r.budgetCents),Y=Math.min(100,S),Q=`${S.toFixed(0)}%`,ke=r.budgetCents-r.actualCents,ze=ke<0?"danger":ke>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Pn(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${Y.toFixed(1)}%" title="${r.label}: ${w(r.actualCents)} von ${w(r.budgetCents)}">
                              <span class="circle-chart-value">${Q}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${w(r.budgetCents)} / I ${w(r.actualCents)}</div>
                            <div class="circle-chart-meta ${ze}">${ke>=0?"+":""}${w(ke)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(s.length,1)}, minmax(0, 1fr));">
                    ${s.map(r=>{const S=Pe(r.actualCostCents,i);return`
                          <div class="spark-bar" title="${$e(r.month)}: ${w(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
                            <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                    ${s.map(r=>{const S=Pe(Math.abs(r.plannedNetCents),u),Y=Pe(Math.abs(r.actualNetCents),u),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",ke=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${$e(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${S}; opacity: 0.35;"></div>
                              <div class="bar ${ke}" style="width:${Y}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${w(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${w(r.actualNetCents)}</span>
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
                  ${s.map(r=>`<tr>
                        <td>${$e(r.month)}</td>
                        <td>${w(r.effectiveIncomeCents)}</td>
                        <td>${w(r.plannedBudgetCents)}</td>
                        <td>${w(r.actualCostCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${tt.map(r=>`<option value="${r.year}" ${r.year===ka?"selected":""}>${r.year}</option>`).join("")}
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
                    ${s.map(r=>{const S=Pe(r.foodAndGoingOutCents,c);return`
                          <div class="spark-bar" title="${$e(r.month)}: ${w(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
                            <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(s.length,1)}, minmax(0, 1fr));">
                    ${s.map(r=>{const S=Pe(r.foodCents,y);return`
                          <div class="spark-bar" title="${$e(r.month)}: ${w(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
                            <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(s.length,1)}, minmax(0, 1fr));">
                    ${s.map(r=>{const S=Pe(r.goingOutCents,$);return`
                          <div class="spark-bar" title="${$e(r.month)}: ${w(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
                            <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w(Tr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(Zn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(ea.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(qr)}">${w(qr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(Kr)}">${w(Kr)}</div><div class="eval-value"></div></div>
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
                    ${jr.map(r=>{const S=Pe(r.budgetCents,Rr),Y=Pe(r.actualCents,Rr),Q=Pn(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${w(r.budgetCents)} | Ist: ${w(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${S}"></div>
                              <div class="bar-marker" style="left:${S}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Q}" style="width:${Y}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${w(r.budgetCents)}</span>
                              <span class="muted">I ${w(r.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Sa.length,1)}, minmax(0, 1fr));">
                    ${Sa.map(r=>{const S=Pe(r.actualTotalCents,ms);return`
                          <div class="spark-bar" title="${r.year}: ${w(r.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
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
                    ${Sa.map(r=>{const S=Pe(Math.abs(r.plannedNetCents),Vr),Y=Pe(Math.abs(r.actualNetCents),Vr),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",ke=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${S}; opacity: 0.35;"></div>
                              <div class="bar ${ke}" style="width:${Y}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${w(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${w(r.actualNetCents)}</span>
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
                  ${Sa.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${w(r.salaryIncomeCents)}</td>
                        <td>${w(r.effectiveIncomeCents)}</td>
                        <td>${w(r.budgetTotalCents)}</td>
                        <td>${w(r.actualTotalCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,bs=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,ys=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Xn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Xn?gt(Xn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Xn?"Änderung speichern":"Vorlage speichern"}</button>
          ${Xn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${w(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,Yr=h.annualVariableFixedTemplates.reduce((r,S)=>r+S.plannedCents,0),Cs=Math.round(Yr/12),xs=`
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
                <div class="eval-value budget-under">${w(Yr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${w(Cs)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const S=Rn(r.dueDateIso),Y=S?$e(S.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${Y}</td>
                    <td>${w(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,zr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",ws=h.topModal==="years"?bs:h.topModal==="fixed"?ys:h.topModal==="variable-fixed"?xs:h.topModal==="dashboard"?gs:"";M.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Pr?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${fs.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${Ks(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${zr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${zr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${ws}
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
                  ${Qn.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${Qn.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Dt(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${jt.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${jt.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Dt(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${$e(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(r,S)=>S+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${$e(r)}</option>`).join("")}
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
                  ${it.map(r=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${r.label}"
                            data-budget-cents="${r.budgetCents}"
                            data-actual-cents="${r.actualCents}"
                            role="img"
                            aria-label="${r.label}: Budget ${w(r.budgetCents)} €, Ist ${w(r.actualCents)} €"
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
                  ${Tn.map(r=>{const S=Pe(Math.abs(r.valueCents),ir),Y=r.valueCents>=0?"+":"",Q=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${w(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${S}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Q}">${Y}${w(r.valueCents)}</span></div>
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
                      ${P.map(r=>{const S=Ft.get(r.month)?.totalBudgetCents??0,Y=Pe(S,Ra),Q=Pe(r.summary.totalCents,Ra);return`
                            <div class="spark-bar" title="${$e(r.month)}: Ist ${w(r.summary.totalCents)} € | Budget ${w(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Y}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const S=Ft.get(r.month),Y=(S?.foodBudgetCents??0)+(S?.goingOutBudgetCents??0),Q=r.summary.foodCents+r.summary.goingOutCents,ke=Pe(Y,lr),ze=Pe(Q,lr);return`
                            <div class="spark-bar" title="${$e(r.month)}: Ist ${w(Q)} € | Budget ${w(Y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${ke}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ze}"><span class="spark-bar-fill-value">${w(Q)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const S=Ft.get(r.month)?.fixedBudgetCents??0,Y=Pe(S,Va),Q=Pe(r.summary.fixedCents,Va);return`
                            <div class="spark-bar" title="${$e(r.month)}: Ist ${w(r.summary.fixedCents)} € | Budget ${w(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Y}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const S=Ft.get(r.month)?.variableBudgetCents??0,Y=Pe(S,Ya),Q=Pe(r.summary.variableCents,Ya);return`
                            <div class="spark-bar" title="${$e(r.month)}: Ist ${w(r.summary.variableCents)} € | Budget ${w(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Y}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const S=Ft.get(r.month)?.miscBudgetCents??0,Y=Pe(S,ur),Q=Pe(r.summary.miscCents,ur);return`
                            <div class="spark-bar" title="${$e(r.month)}: Ist ${w(r.summary.miscCents)} € | Budget ${w(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Y}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${$e(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${w(ne)}</div>
                    <div class="eval-value">${w(_e)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${w(Be)}</div>
                    <div class="eval-value">${w(Ze)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${w(Xe)}</div>
                    <div class="eval-value">${w(bn)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ve}">${Re?w(F):"-"}</div>
                    <div class="eval-value ${ye}">${o?w(Jt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${w(Qe)}</div>
                    <div class="eval-value">${w(lt)}</div>
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
                    <div class="eval-value">${J(O,d.foodCents)}</div>
                    <div class="eval-value">${w(Z)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${J(I,d.goingOutCents)}</div>
                    <div class="eval-value">${w(V)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${J(L,d.fixedCents)}</div>
                    <div class="eval-value">${w(he)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${J(X,d.variableCents)}</div>
                    <div class="eval-value">${w(Ee)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${J(W,d.miscCents)}</div>
                    <div class="eval-value">${w(Ge)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${J(Ae,d.totalCents)}</div>
                    <div class="eval-value">${w(Ot)}</div>
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
                    <div class="eval-value ${za}">${w(d.foodCents)}</div>
                    <div class="eval-value">${w(p.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${dr}">${w(d.goingOutCents)}</div>
                    <div class="eval-value">${w(p.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${cr}">${w(d.fixedCents)}</div>
                    <div class="eval-value">${w(p.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${fr}">${w(d.variableCents)}</div>
                    <div class="eval-value">${w(p.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Mr}">${w(d.miscCents)}</div>
                    <div class="eval-value">${w(p.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${w(d.totalCents)}</div>
                    <div class="eval-value">${w(p.totalCents)}</div>
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
                    <div class="eval-value ${_(_t)}">${w(_t)}</div>
                    <div class="eval-value ${_(Gn)}">${w(Gn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${_(ut)}">${w(ut)}</div>
                    <div class="eval-value ${_(Bt)}">${w(Bt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Le}">${w(ie)}</div>
                    <div class="eval-value ${Me}">${w($t)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${_(kt)}">${w(kt)}</div>
                    <div class="eval-value ${_(Mn)}">${w(Mn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${st}">${ve}</div>
                    <div class="eval-value ${yn}">${we}</div>
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
                ${P.map((r,S,Y)=>{const Q=o?pe.get(fe(o.year,r.month)):void 0,ke=Q?.plannedBudgetCents??0,ze=Q?.netCents??0,Pt=Ka.get(r.month)??0,Rt=ze<0?"danger":ze>0?"budget-under":"",Ue=Y[S-1],xn=Ue?.summary.foodCents??null,wn=Ue?.summary.goingOutCents??null,Tt=Ue?.summary.fixedCents??null,ta=Ue?.summary.variableCents??null,pr=Ue?.summary.miscCents??null,Ur=Ue?.summary.totalCents??null,Wr=Ue!==void 0?Ka.get(Ue.month)??0:null,Gr=o&&Ue?pe.get(fe(o.year,Ue.month))?.plannedBudgetCents??0:null,Jr=xn===null?null:r.summary.foodCents-xn,Hr=wn===null?null:r.summary.goingOutCents-wn,Xr=Tt===null?null:r.summary.fixedCents-Tt,Qr=ta===null?null:r.summary.variableCents-ta,Zr=pr===null?null:r.summary.miscCents-pr,es=Ur===null?null:r.summary.totalCents-Ur,ts=Wr===null?null:Pt-Wr,ns=Gr===null?null:ke-Gr,na=Xt=>Xt===null?"muted":Xt>0?"danger":Xt<0?"budget-under":"muted",ks=Xt=>Xt===null?"muted":Xt>0?"danger":Xt<0?"budget-under":"muted",On=Xt=>Xt===null?"(Δ -)":`(Δ ${Xt>0?"+":""}${w(Xt)})`,as=o&&Ue?pe.get(fe(o.year,Ue.month))?.netCents??0:null,Ea=as===null?null:ze-as,$s=Ea===null?"(Δ -)":`(Δ ${Ea>0?"+":""}${w(Ea)})`,Ss=Ea===null?"muted":Ea<0?"danger":Ea>0?"budget-under":"muted";return`<tr>
                  <td>${$e(r.month)}</td>
                  <td>${w(r.summary.foodCents)} <span class="${na(Jr)}">${On(Jr)}</span></td>
                  <td>${w(r.summary.goingOutCents)} <span class="${na(Hr)}">${On(Hr)}</span></td>
                  <td>${w(r.summary.fixedCents)} <span class="${na(Xr)}">${On(Xr)}</span></td>
                  <td>${w(r.summary.variableCents)} <span class="${na(Qr)}">${On(Qr)}</span></td>
                  <td>${w(r.summary.miscCents)} <span class="${na(Zr)}">${On(Zr)}</span></td>
                  <td>${w(r.summary.totalCents)} <span class="${na(es)}">${On(es)}</span></td>
                  <td>${w(Pt)} <span class="${na(ts)}">${On(ts)}</span></td>
                  <td>${w(ke)} <span class="${ks(ns)}">${On(ns)}</span></td>
                  <td class="${Rt}">${w(ze)} <span class="${Ss}">${$s}</span></td>
                </tr>`}).join("")}
                ${ja}
                ${_r}
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
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${gt(F)}" />
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
                    <td>${w(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${r.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${w(ne)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${w(Be)} €</strong>
                </div>
                <div class="column-overview-row ${Ve}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${w(F)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${w(Qe)} €</strong>
                </div>
                <div class="column-overview-row ${Ye}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${w(wt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Wt(O,d.foodCents)}
                ${Wt(I,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${w(et)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${w(rn)} €</strong>
                  </div>
                  <div class="column-overview-row ${Ht}">
                    <span>Diff</span>
                    <strong>${w(Lt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${gt(O)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${gt(I)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(r=>{const S=r.foodCents>0,Y=r.goingOutCents>0,Q=`${r.isoDate===f?"today-row":""} ${S||Y?"day-has-entry":""}`.trim(),ke=`amount-input ${S?"day-input-has-value":""}`.trim(),ze=`amount-input ${Y?"day-input-has-value":""}`.trim();return`<tr class="${Q}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${ke}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${gt(r.foodCents)}" /></td>
                      <td><input class="${ze}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${gt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Wt(L,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${gt(L)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${gt(r.plannedCents)}" /></td>
                    <td class="${mt(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${gt(r.actualCents)}" /></td>
                    <td class="${mt(r.actualCents,r.plannedCents)}">${w(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Wt(X,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${gt(X)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${gt(r.budgetCents)}" /></td>
                    <td class="${mt(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${gt(r.actualCents)}" /></td>
                    <td class="${mt(r.actualCents,r.budgetCents)}">${w(r.actualCents-r.budgetCents)}</td>
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
              ${Wt(W,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${gt(W)}" ${l?"":"disabled"} />
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
                    <td>${w(r.amountCents)}</td>
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
          <p class="muted">Letztes verwendetes Backup: ${qe}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),sr(),Qt(),ht(),Ma()}function sr(){const o=M.querySelector("#theme-select"),l=M.querySelector("#open-years-modal"),f=M.querySelector("#open-fixed-modal"),d=M.querySelector("#open-variable-fixed-modal"),p=M.querySelector("#open-dashboard-modal"),P=M.querySelector("#panel-modal-close"),O=M.querySelector("#panel-modal-backdrop"),I=M.querySelector("#open-unexported-change-log"),L=M.querySelector("#open-persistent-audit-log"),X=M.querySelector("#unexported-change-log-close"),W=M.querySelector("#unexported-change-log-backup"),Z=M.querySelector("#unexported-change-log-backdrop"),V=M.querySelector("#persistent-audit-log-close"),he=M.querySelector("#persistent-audit-log-backdrop"),Ee=M.querySelector("#new-year"),Ge=M.querySelector("#create-year"),ne=M.querySelector("#year-select"),Be=M.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;us(_)&&ua(_)}),l?.addEventListener("click",()=>{sa("years")}),f?.addEventListener("click",()=>{sa("fixed")}),d?.addEventListener("click",()=>{sa("variable-fixed")}),p?.addEventListener("click",()=>{sa("dashboard")}),I?.addEventListener("click",()=>{ia()}),L?.addEventListener("click",()=>{Fn()}),X?.addEventListener("click",()=>{oa()}),W?.addEventListener("click",async()=>{try{await Un()}catch(_){console.error("Backup-Export fehlgeschlagen",_),de("Backup konnte nicht exportiert werden.","error")}}),Z?.addEventListener("click",_=>{_.target===Z&&oa()}),V?.addEventListener("click",()=>{la()}),he?.addEventListener("click",_=>{_.target===he&&la()}),M.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const q=_.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(h.dashboardTab=q,ae())})});const Xe=M.querySelector("#dashboard-year-select");Xe?.addEventListener("change",()=>{const _=Number.parseInt(Xe.value,10);Number.isInteger(_)&&(h.dashboardYear=_,ae())}),P?.addEventListener("click",()=>{_a()}),O?.addEventListener("click",_=>{_.target===O&&_a()}),h.topModal&&window.setTimeout(()=>{P?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{X?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{V?.focus()},0),Ge?.addEventListener("click",async()=>{const _=Number.parseInt(Ee?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await dn(_)}),ne?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ne.value,10),h.selectedMonth=kn(),ae()}),Be?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Be.value,10),ae()});const pe=M.querySelector("#fixed-template-name"),Je=M.querySelector("#fixed-template-amount"),Nt=M.querySelector("#add-fixed-template"),F=M.querySelector("#cancel-fixed-template-edit"),Re=M.querySelector("#annual-variable-fixed-name"),Qe=M.querySelector("#annual-variable-fixed-date"),dt=M.querySelector("#annual-variable-fixed-amount"),wt=M.querySelector("#add-annual-variable-fixed-template");Nt?.addEventListener("click",async()=>{const _=pe?.value??"",q=Oe(Je?.value??"0");await pa(_,q),pe&&(pe.value=""),Je&&(Je.value="")}),F?.addEventListener("click",()=>{Sr()}),wt?.addEventListener("click",async()=>{const _=Re?.value??"",q=Qe?.value??"",st=Oe(dt?.value??"0");await Bn(_,q,st),Re&&(Re.value=""),Qe&&(Qe.value=""),dt&&(dt.value="")}),M.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeAnnualVariableFixedTemplate;q&&await nn(q)})}),M.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const q=_.dataset.editFixedTemplate;q&&va(q)})}),M.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeFixedTemplate;q&&await tn(q)})}),M.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.dayFood;q&&await Vn(q,"foodCents",Oe(_.value))})}),M.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.dayGoing;q&&await Vn(q,"goingOutCents",Oe(_.value))})}),M.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.fixedActual;q&&await Er(q,Oe(_.value))})}),M.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.fixedPlanned;q&&await an(q,Oe(_.value))})});const ie=M.querySelector("#fixed-budget");ie?.addEventListener("click",_=>{_.preventDefault(),ie.blur(),at(ie)}),ie?.addEventListener("change",async()=>{await er(Oe(ie.value))});const kt=M.querySelector("#food-budget");kt?.addEventListener("click",_=>{_.preventDefault(),kt.blur(),at(kt)}),kt?.addEventListener("change",async()=>{await Ia(Oe(kt.value))});const ve=M.querySelector("#going-out-budget");ve?.addEventListener("click",_=>{_.preventDefault(),ve.blur(),at(ve)}),ve?.addEventListener("change",async()=>{await Ne(Oe(ve.value))}),M.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{yr()});const Ye=M.querySelector("#misc-budget");Ye?.addEventListener("click",_=>{_.preventDefault(),Ye.blur(),at(Ye)}),Ye?.addEventListener("change",async()=>{await vn(Oe(Ye.value))});const Le=M.querySelector("#variable-budget");Le?.addEventListener("click",_=>{_.preventDefault(),Le.blur(),at(Le)}),Le?.addEventListener("change",async()=>{await Gt(Oe(Le.value))});const _e=M.querySelector("#variable-position-name"),Ze=M.querySelector("#variable-position-budget"),bn=M.querySelector("#add-variable-position"),Jt=M.querySelector("#add-variable-position-recurring"),lt=M.querySelector("#misc-description"),$t=M.querySelector("#misc-amount"),Mn=M.querySelector("#add-misc"),we=M.querySelector("#add-misc-recurring"),ye=M.querySelector("#income-description"),Me=M.querySelector("#income-source"),Ae=M.querySelector("#income-amount"),et=M.querySelector("#add-income"),rn=M.querySelector("#add-income-recurring"),Lt=M.querySelector("#fixed-cost-name"),Ht=M.querySelector("#fixed-cost-budget"),Ot=M.querySelector("#add-fixed-cost"),ut=M.querySelector("#carryover-override");ut?.addEventListener("click",_=>{_.preventDefault(),ut.blur(),at(ut)}),ut?.addEventListener("change",async()=>{const _=ut.value;if(!_.trim()){await mn(null);return}await mn(Oe(_))}),Ot?.addEventListener("click",async()=>{const _=Oe(Ht?.value??"0");await Za(Lt?.value??"",_),Lt&&(Lt.value=""),Ht&&(Ht.value="")}),bn?.addEventListener("click",async()=>{const _=Oe(Ze?.value??"0");await Yn(_e?.value??"",_,!1),_e&&(_e.value=""),Ze&&(Ze.value="")}),Jt?.addEventListener("click",async()=>{const _=Oe(Ze?.value??"0");await Yn(_e?.value??"",_,!0),_e&&(_e.value=""),Ze&&(Ze.value="")}),Mn?.addEventListener("click",async()=>{const _=Oe($t?.value??"0");await zn(lt?.value??"",_,!1),lt&&(lt.value=""),$t&&($t.value="")}),we?.addEventListener("click",async()=>{const _=Oe($t?.value??"0");await zn(lt?.value??"",_,!0),lt&&(lt.value=""),$t&&($t.value="")}),et?.addEventListener("click",async()=>{const _=Oe(Ae?.value??"0"),q=Me?.value,st=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ue(ye?.value??"",_,st,!1),ye&&(ye.value=""),Ae&&(Ae.value=""),Me&&(Me.value="salary")}),rn?.addEventListener("click",async()=>{const _=Oe(Ae?.value??"0"),q=Me?.value,st=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ue(ye?.value??"",_,st,!0),ye&&(ye.value=""),Ae&&(Ae.value=""),Me&&(Me.value="salary")}),M.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const q=_.dataset.incomeSource;if(!q)return;const st=_.value;await ar(q,st==="balance"||st==="fresh"||st==="salary"?st:void 0)})}),M.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.variablePositionBudget;q&&await La(q,Oe(_.value))})}),M.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.variablePositionActual;q&&await Na(q,Oe(_.value))})}),M.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeVariablePosition;q&&await gn(q)})}),M.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.moveVariablePositionNext;q&&await tr(q)})}),M.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeFixed;q&&await pn(q)})}),M.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeIncome;q&&await rr(q)})}),M.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeMisc;q&&await nr(q)})});const Bt=M.querySelector("#backup-export"),_t=M.querySelector("#backup-import");M.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Bt?.addEventListener("click",async()=>{await Un()}),_t?.addEventListener("change",async()=>{const _=_t.files?.[0];if(_){try{await Wn(_)}catch(q){console.error("Backup-Import fehlgeschlagen",q),de("Backup konnte nicht importiert werden.","error")}_t.value=""}})}return{init:kr}}const Rs="modulepreload",Vs=function(M){return"/habu26/"+M},ds={},Ys=function(h,Te,H){let me=Promise.resolve();if(Te&&Te.length>0){let ct=function(je){return Promise.all(je.map(oe=>Promise.resolve(oe).then(bt=>({status:"fulfilled",value:bt}),bt=>({status:"rejected",reason:bt}))))};var Ce=ct;document.getElementsByTagName("link");const se=document.querySelector("meta[property=csp-nonce]"),ge=se?.nonce||se?.getAttribute("nonce");me=ct(Te.map(je=>{if(je=Vs(je),je in ds)return;ds[je]=!0;const oe=je.endsWith(".css"),bt=oe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${je}"]${bt}`))return;const ft=document.createElement("link");if(ft.rel=oe?"stylesheet":Rs,oe||(ft.as="script"),ft.crossOrigin="",ft.href=je,ge&&ft.setAttribute("nonce",ge),document.head.appendChild(ft),oe)return new Promise((ht,Qt)=>{ft.addEventListener("load",ht),ft.addEventListener("error",()=>Qt(new Error(`Unable to preload CSS for ${je}`)))})}))}function re(se){const ge=new Event("vite:preloadError",{cancelable:!0});if(ge.payload=se,window.dispatchEvent(ge),!ge.defaultPrevented)throw se}return me.then(se=>{for(const ge of se||[])ge.status==="rejected"&&re(ge.reason);return h().catch(re)})};function zs(M={}){const{immediate:h=!1,onNeedRefresh:Te,onOfflineReady:H,onRegistered:me,onRegisteredSW:re,onRegisterError:Ce}=M;let se,ge;const ct=async(oe=!0)=>{await ge};async function je(){if("serviceWorker"in navigator){if(se=await Ys(async()=>{const{Workbox:oe}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:oe}},[]).then(({Workbox:oe})=>new oe("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(oe=>{Ce?.(oe)}),!se)return;se.addEventListener("activated",oe=>{(oe.isUpdate||oe.isExternal)&&window.location.reload()}),se.addEventListener("installed",oe=>{oe.isUpdate||H?.()}),se.register({immediate:h}).then(oe=>{re?re("/habu26/sw.js",oe):me?.(oe)}).catch(oe=>{Ce?.(oe)})}}return ge=je(),ct}function Us(){zs({immediate:!0})}const hs=document.getElementById("app");if(!hs)throw new Error("App-Container nicht gefunden.");js(hs).init();Us();
