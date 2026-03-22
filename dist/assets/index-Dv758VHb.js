(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ge of document.querySelectorAll('link[rel="modulepreload"]'))H(ge);new MutationObserver(ge=>{for(const re of ge)if(re.type==="childList")for(const Ce of re.addedNodes)Ce.tagName==="LINK"&&Ce.rel==="modulepreload"&&H(Ce)}).observe(document,{childList:!0,subtree:!0});function Ae(ge){const re={};return ge.integrity&&(re.integrity=ge.integrity),ge.referrerPolicy&&(re.referrerPolicy=ge.referrerPolicy),ge.crossOrigin==="use-credentials"?re.credentials="include":ge.crossOrigin==="anonymous"?re.credentials="omit":re.credentials="same-origin",re}function H(ge){if(ge.ep)return;ge.ep=!0;const re=Ae(ge);fetch(ge.href,re)}})();const _s=[1,2,3,4,5,6,7,8,9,10,11,12];function Lr(){return new Date().toISOString()}function Tt(M){const h=Math.random().toString(36).slice(2,10);return`${M}_${Date.now()}_${h}`}function Ms(M,h){const Ae=new Date(M,h,0).getDate(),H=[];for(let ge=1;ge<=Ae;ge+=1){const re=new Date(Date.UTC(M,h-1,ge));H.push({isoDate:re.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return H}function Ps(M){return M.map(h=>({id:Tt("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function rs(M,h,Ae){const H=h.reduce((re,Ce)=>re+Ce.plannedCents,0),ge=_s.map(re=>({month:re,days:Ms(M,re),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Ps(h),fixedBudgetCents:H,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:M,createdAt:Lr(),templateVersion:Ae,months:ge}}function ss(M,h){return{id:Tt("expense"),description:M,amountCents:h,createdAt:Lr()}}function is(M,h,Ae){const H={id:Tt("income"),description:M,amountCents:h,createdAt:Lr()};return Ae?{...H,incomeSource:Ae}:H}var Ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function As(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var vr={exports:{}},Os=vr.exports,os;function Fs(){return os||(os=1,(function(M,h){((Ae,H)=>{M.exports=H()})(Os,function(){var Ae=function(e,t){return(Ae=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},H=function(){return(H=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ge(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ts,Ce=Object.keys,se=Array.isArray;function be(e,t){return typeof t=="object"&&Ce(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||re.Promise||(re.Promise=Promise);var lt=Object.getPrototypeOf,je={}.hasOwnProperty;function le(e,t){return je.call(e,t)}function mt(e,t){typeof t=="function"&&(t=t(lt(e))),(typeof Reflect>"u"?Ce:Reflect.ownKeys)(t).forEach(function(n){dt(e,n,t[n])})}var ct=Object.defineProperty;function dt(e,t,n,a){ct(e,t,be(n&&le(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function en(e){return{from:function(t){return e.prototype=Object.create(t.prototype),dt(e.prototype,"constructor",e),{extend:mt.bind(null,e.prototype)}}}}var oa=Object.getOwnPropertyDescriptor,Pa=[].slice;function la(e,t,n){return Pa.call(e,t,n)}function ua(e,t){return t(e)}function Nn(e){if(!e)throw new Error("Assertion Failed")}function ca(e){re.setImmediate?setImmediate(e):setTimeout(e,0)}function zt(e,t){if(typeof t=="string"&&le(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=zt(e,t[a]);n.push(i)}return n}var u,c=t.indexOf(".");return c===-1||(u=e[t.substr(0,c)])==null?void 0:zt(u,t.substr(c+1))}function ft(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Nn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)ft(e,t[a],n[a])}else{var i,u,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?se(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:ft(u=(u=e[i])&&le(e,i)?u:e[i]={},c,n)):n===void 0?se(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ta(e){var t,n={};for(t in e)le(e,t)&&(n[t]=e[t]);return n}var br=[].concat;function Aa(e){return br.apply([],e)}var Dt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Aa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return re[e]}),Ga=new Set(Dt.map(function(e){return re[e]})),Ln=null;function ht(e){return Ln=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Ln.get(n);if(a)return a;if(se(n)){a=[],Ln.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Ga.has(n.constructor))a=n;else{var u,c=lt(n);for(u in a=c===Object.prototype?{}:Object.create(c),Ln.set(n,a),n)le(n,u)&&(a[u]=t(n[u]))}return a})(e),Ln=null,e}var qn={}.toString;function Oa(e){return qn.call(e).slice(8,-1)}var Fa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",yr=typeof Fa=="symbol"?function(e){var t;return e!=null&&(t=e[Fa])&&t.apply(e)}:function(){return null};function tn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var tt={};function de(e){var t,n,a,s;if(arguments.length===1){if(se(e))return e.slice();if(this===tt&&typeof e=="string")return[e];if(s=yr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var cn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Dt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],nt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Dt),Ja={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function dn(e,t){this.name=e,this.message=t}function Ha(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function It(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Ha(e,t)}function En(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ha(e,this.failures)}en(dn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),en(It).from(dn),en(En).from(dn);var da=nt.reduce(function(e,t){return e[t]=t+"Error",e},{}),Cr=dn,ee=nt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Ja[t]||n,this.inner=null)}return en(a).from(Cr),e[t]=a,e},{}),Xa=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,Dt.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));Dt=nt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function xe(){}function Kn(e){return e}function xr(e,t){return e==null||e===Kn?t:function(n){return t(e(n))}}function fn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Qa(e,t){return e===xe?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?fn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?fn(s,this.onerror):s),i!==void 0?i:n}}function wr(e,t){return e===xe?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?fn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?fn(a,this.onerror):a)}}function kr(e,t){return e===xe?t:function(s){var a=e.apply(this,arguments),s=(be(s,a),this.onsuccess),i=this.onerror,u=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?fn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?fn(i,this.onerror):i),a===void 0?u===void 0?void 0:u:be(a,u)}}function Da(e,t){return e===xe?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function jn(e,t){return e===xe?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}Dt.ModifyError=It,Dt.DexieError=dn,Dt.BulkError=En;var gt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ia(e){gt=e}var Ut={},Ne=100,Rn=typeof Promise>"u"?[]:(nt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Rn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),lt(Rn),nt]:[nt,lt(nt),nt]),nt=Rn[0],Fn=Rn[1],Fn=Fn&&Fn.then,Nt=nt&&nt.constructor,Bn=!!Rn[2],Vn=function(e,t){Gt.push([e,t]),_n&&(queueMicrotask(Na),_n=!1)},Yn=!0,_n=!0,Wt=[],fa=[],pt=Kn,nn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xe,pgp:!1,env:{},finalize:xe},J=nn,Gt=[],hn=0,pn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=J;if(typeof e!="function"){if(e!==Ut)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&bt(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var u=a._lib&&vn();i&&typeof i.then=="function"?n(a,function(c,y){i instanceof z?i._then(c,y):i.then(c,y)}):(a._state=!0,a._value=i,fe(a)),u&&yt()}},bt.bind(null,a))}catch(i){bt(a,i)}})(this,e)}var ha={get:function(){var e=J,t=ga;function n(a,s){var i=this,u=!e.global&&(e!==J||t!==ga),c=u&&!rn(),y=new z(function($,C){zn(i,new We(tr(a,e,u,c),tr(s,e,u,c),$,C,e))});return this._consoleTask&&(y._consoleTask=this._consoleTask),y}return n.prototype=Ut,n},set:function(e){dt(this,"then",e&&e.prototype===Ut?ha:{get:function(){return e},set:ha.set})}};function We(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function bt(e,t){var n,a;fa.push(t),e._state===null&&(n=e._lib&&vn(),t=pt(t),e._state=!1,e._value=t,a=e,Wt.some(function(s){return s._value===a._value})||Wt.push(a),fe(e),n)&&yt()}function fe(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)zn(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),hn===0&&(++hn,Vn(function(){--hn==0&&St()},[]))}function zn(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++hn,Vn(Za,[n,e,t])}}function Za(e,t,n){try{var a,s=t._value;!t._state&&fa.length&&(fa=[]),a=gt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||fa.indexOf(s)!==-1||(i=>{for(var u=Wt.length;u;)if(Wt[--u]._value===i._value)return Wt.splice(u,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--hn==0&&St(),--n.psd.ref||n.psd.finalize()}}function Na(){mn(nn,function(){vn()&&yt()})}function vn(){var e=Yn;return _n=Yn=!1,e}function yt(){var e,t,n;do for(;0<Gt.length;)for(e=Gt,Gt=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<Gt.length);_n=Yn=!0}function St(){for(var e=Wt,t=(Wt=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),pn.slice(0)),n=t.length;n;)t[--n]()}function pa(e){return new z(Ut,!1,e)}function Ee(e,t){var n=J;return function(){var a=vn(),s=J;try{return sn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{sn(s,!1),a&&yt()}}}mt(z.prototype,{then:ha,_then:function(e,t){zn(this,new We(null,null,e,t,J))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:pa)(a)}):this.then(null,function(a){return(a&&a.name===t?n:pa)(a)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return pa(t)})})},timeout:function(e,t){var n=this;return e<1/0?new z(function(a,s){var i=setTimeout(function(){return s(new ee.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&dt(z.prototype,Symbol.toStringTag,"Dexie.Promise"),nn.env=er(),mt(z,{all:function(){var e=de.apply(null,arguments).map(Un);return new z(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return z.resolve(s).then(function(u){e[i]=u,--a||t(e)},n)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,n){e.then(t,n)}):new z(Ut,!0,e)},reject:pa,race:function(){var e=de.apply(null,arguments).map(Un);return new z(function(t,n){e.map(function(a){return z.resolve(a).then(t,n)})})},PSD:{get:function(){return J},set:function(e){return J=e}},totalEchoes:{get:function(){return ga}},newPSD:an,usePSD:mn,scheduler:{get:function(){return Vn},set:function(e){Vn=e}},rejectionMapper:{get:function(){return pt},set:function(e){pt=e}},follow:function(e,t){return new z(function(n,a){return an(function(s,i){var u=J;u.unhandleds=[],u.onunhandled=i,u.finalize=fn(function(){var c,y=this;c=function(){y.unhandleds.length===0?s():i(y.unhandleds[0])},pn.push(function $(){c(),pn.splice(pn.indexOf($),1)}),++hn,Vn(function(){--hn==0&&St()},[])},u.finalize),e()},t,n,a)})}}),Nt&&(Nt.allSettled&&dt(z,"allSettled",function(){var e=de.apply(null,arguments).map(Un);return new z(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return z.resolve(s).then(function(u){return a[i]={status:"fulfilled",value:u}},function(u){return a[i]={status:"rejected",reason:u}}).then(function(){return--n||t(a)})})})}),Nt.any&&typeof AggregateError<"u"&&dt(z,"any",function(){var e=de.apply(null,arguments).map(Un);return new z(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,u){return z.resolve(i).then(function(c){return t(c)},function(c){s[u]=c,--a||n(new AggregateError(s))})})})}),Nt.withResolvers)&&(z.withResolvers=Nt.withResolvers);var He={awaits:0,echoes:0,id:0},$r=0,va=[],ma=0,ga=0,Sr=0;function an(e,u,n,a){var s=J,i=Object.create(s),u=(i.parent=s,i.ref=0,i.global=!1,i.id=++Sr,nn.env,i.env=Bn?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},u&&be(i,u),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},mn(i,e,n,a));return i.ref===0&&i.finalize(),u}function Mn(){return He.id||(He.id=++$r),++He.awaits,He.echoes+=Ne,He.id}function rn(){return!!He.awaits&&(--He.awaits==0&&(He.id=0),He.echoes=He.awaits*Ne,!0)}function Un(e){return He.echoes&&e&&e.constructor===Nt?(Mn(),e.then(function(t){return rn(),t},function(t){return rn(),Le(t)})):e}function Er(){var e=va[va.length-1];va.pop(),sn(e,!1)}function sn(e,t){var n,a,s=J;(t?!He.echoes||ma++&&e===J:!ma||--ma&&e===J)||queueMicrotask(t?(function(i){++ga,He.echoes&&--He.echoes!=0||(He.echoes=He.awaits=He.id=0),va.push(J),sn(i,!0)}).bind(null,e):Er),e!==J&&(J=e,s===nn&&(nn.env=er()),Bn)&&(n=nn.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(re,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function er(){var e=re.Promise;return Bn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(re,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function mn(e,t,n,a,s){var i=J;try{return sn(e,!0),t(n,a,s)}finally{sn(i,!1)}}function tr(e,t,n,a){return typeof e!="function"?e:function(){var s=J;n&&Mn(),sn(t,!0);try{return e.apply(this,arguments)}finally{sn(s,!1),a&&queueMicrotask(rn)}}}function La(e){Promise===Nt&&He.echoes===0?ma===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Fn).indexOf("[native code]")===-1&&(Mn=rn=xe);var Le=z.reject,gn="￿",Jt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Pn="String expected.",bn=[],Wn="__dbnames",qa="readonly",Ka="readwrite";function yn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var nr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Gn(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=ht(t))[e],t}}function ar(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ue(e,t){try{var n=rr(e),a=rr(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=sr(e),i=sr(t),u=s.length,c=i.length,y=u<c?u:c,$=0;$<y;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return u===c?0:u<c?-1:1;case"Array":for(var C=e,v=t,m=C.length,x=v.length,g=m<x?m:x,b=0;b<g;++b){var S=ue(C[b],v[b]);if(S!==0)return S}return m===x?0:m<x?-1:1}}catch{}return NaN}function rr(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Oa(e))==="ArrayBuffer")?"binary":t}function sr(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Jn(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}ae.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(se(n))return ge(ge([],se(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(se(a))return se(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var Hn=ae;function ae(e){this["@@propmod"]=e}function ir(e,t){for(var n=Ce(t),a=n.length,s=!1,i=0;i<a;++i){var u=n[i],c=t[u],y=zt(e,u);c instanceof Hn?(ft(e,u,c.execute(y)),s=!0):y!==c&&(ft(e,u,c),s=!0)}return s}l.prototype._trans=function(e,t,n){var a=this._tx||J.trans,s=this.name,i=gt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function u($,C,v){if(v.schema[s])return t(v.idbtrans,v);throw new ee.NotFound("Table "+s+" not part of transaction")}var c=vn();try{var y=a&&a.db._novip===this.db._novip?a===J.trans?a._promise(e,u,n):an(function(){return a._promise(e,u,n)},{trans:a,transless:J.transless||J}):(function $(C,v,m,x){if(C.idbdb&&(C._state.openComplete||J.letThrough||C._vip)){var g=C._createTransaction(v,m,C._dbSchema);try{g.create(),C._state.PR1398_maxLoop=3}catch(b){return b.name===da.InvalidState&&C.isOpen()&&0<--C._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),C.close({disableAutoOpen:!1}),C.open().then(function(){return $(C,v,m,x)})):Le(b)}return g._promise(v,function(b,S){return an(function(){return J.trans=g,x(b,S,g)})}).then(function(b){if(v==="readwrite")try{g.idbtrans.commit()}catch{}return v==="readonly"?b:g._completion.then(function(){return b})})}if(C._state.openComplete)return Le(new ee.DatabaseClosed(C._state.dbOpenError));if(!C._state.isBeingOpened){if(!C._state.autoOpen)return Le(new ee.DatabaseClosed);C.open().catch(xe)}return C._state.dbReadyPromise.then(function(){return $(C,v,m,x)})})(this.db,e,[this.name],u);return i&&(y._consoleTask=i,y=y.catch(function($){return console.trace($),Le($)})),y}finally{c&&yt()}},l.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Le(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},l.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(se(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Ce(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function($){return 0<=c.keyPath.indexOf($)})){for(var y=0;y<t.length;++y)if(t.indexOf(c.keyPath[y])===-1)return!1;return!0}return!1}).sort(function(c,y){return c.keyPath.length-y.keyPath.length})[0];if(n&&this.db._maxKey!==gn)return u=n.keyPath.slice(0,t.length),this.where(u).equals(u.map(function(c){return e[c]}));!n&&gt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,y){return ue(c,y)===0}var u=t.reduce(function(C,y){var $=C[0],C=C[1],v=a[y],m=e[y];return[$||v,$||!v?yn(C,v&&v.multi?function(x){return x=zt(x,y),se(x)&&x.some(function(g){return s(m,g)})}:function(x){return s(m,zt(x,y))}):C]},[null,null]),i=u[0],u=u[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(u):n?this.filter(u):this.where(t).equals("")},l.prototype.filter=function(e){return this.toCollection().and(e)},l.prototype.count=function(e){return this.toCollection().count(e)},l.prototype.offset=function(e){return this.toCollection().offset(e)},l.prototype.limit=function(e){return this.toCollection().limit(e)},l.prototype.each=function(e){return this.toCollection().each(e)},l.prototype.toArray=function(e){return this.toCollection().toArray(e)},l.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},l.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,se(e)?"[".concat(e.join("+"),"]"):e))},l.prototype.reverse=function(){return this.toCollection().reverse()},l.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof ar&&(e=(u=>{var c=C,y=u;if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");function $(){this.constructor=c}function C(){return u!==null&&u.apply(this,arguments)||this}return Ae(c,y),c.prototype=y===null?Object.create(y):($.prototype=y.prototype,new $),Object.defineProperty(C.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),C.prototype.table=function(){return n},C})(e)),new Set),s=e.prototype;s;s=lt(s))Object.getOwnPropertyNames(s).forEach(function(u){return a.add(u)});function i(u){if(!u)return u;var c,y=Object.create(e.prototype);for(c in u)if(!a.has(c))try{y[c]=u[c]}catch{}return y}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},l.prototype.defineClass=function(){return this.mapToClass(function(e){be(this,e)})},l.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,u=e;return i&&s&&(u=Gn(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[u]})}).then(function(c){return c.numFailures?z.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{ft(e,i,c)}catch{}return c})},l.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var u=i??{};return ir(u,t),a&&ft(u,a,e),n.core.mutate({trans:s,type:"put",values:[u],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?z.reject(c.failures[0]):!!i})})})},l.prototype.update=function(e,t){return typeof e!="object"||se(e)?this.where(":id").equals(e).modify(t):(e=zt(e,this.schema.primKey.keyPath))===void 0?Le(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},l.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,u=e;return i&&s&&(u=Gn(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[u],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?z.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{ft(e,i,c)}catch{}return c})},l.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return Jn(t,[e],a)}).then(function(a){return a.numFailures?z.reject(a.failures[0]):void 0})})},l.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:nr}).then(function(n){return Jn(e,null,n)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},l.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},l.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,$=c&&$?e.map(Gn(c)):e;return a.core.mutate({trans:u,type:"add",keys:s,values:$,wantResults:i}).then(function(C){var v=C.numFailures,m=C.failures;if(v===0)return i?C.results:C.lastResult;throw new En("".concat(a.name,".bulkAdd(): ").concat(v," of ").concat(y," operations failed"),m)})})},l.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,$=c&&$?e.map(Gn(c)):e;return a.core.mutate({trans:u,type:"put",keys:s,values:$,wantResults:i}).then(function(C){var v=C.numFailures,m=C.failures;if(v===0)return i?C.results:C.lastResult;throw new En("".concat(a.name,".bulkPut(): ").concat(v," of ").concat(y," operations failed"),m)})})},l.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(u){return u.key}),s=e.map(function(u){return u.changes}),i=[];return this._trans("readwrite",function(u){return n.getMany({trans:u,keys:a,cache:"clone"}).then(function(c){var y=[],$=[],C=(e.forEach(function(v,m){var x=v.key,g=v.changes,b=c[m];if(b){for(var S=0,B=Object.keys(g);S<B.length;S++){var k=B[S],T=g[k];if(k===t.schema.primKey.keyPath){if(ue(T,x)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ft(b,k,T)}i.push(m),y.push(x),$.push(b)}}),y.length);return n.mutate({trans:u,type:"put",keys:y,values:$,updates:{keys:a,changeSpecs:s}}).then(function(v){var m=v.numFailures,x=v.failures;if(m===0)return C;for(var g=0,b=Object.keys(x);g<b.length;g++){var S,B=b[g],k=i[Number(B)];k!=null&&(S=x[B],delete x[B],x[k]=S)}throw new En("".concat(t.name,".bulkUpdate(): ").concat(m," of ").concat(C," operations failed"),x)})})})},l.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return Jn(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new En("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var o=l;function l(){}function f(e){function t(u,c){if(c){for(var y=arguments.length,$=new Array(y-1);--y;)$[y-1]=arguments[y];return n[u].subscribe.apply(null,$),e}if(typeof u=="string")return n[u]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(u,c,y){var $,C;if(typeof u!="object")return c=c||Da,C={subscribers:[],fire:y=y||xe,subscribe:function(v){C.subscribers.indexOf(v)===-1&&(C.subscribers.push(v),C.fire=c(C.fire,v))},unsubscribe:function(v){C.subscribers=C.subscribers.filter(function(m){return m!==v}),C.fire=C.subscribers.reduce(c,y)}},n[u]=t[u]=C;Ce($=u).forEach(function(v){var m=$[v];if(se(m))i(v,$[v][0],$[v][1]);else{if(m!=="asap")throw new ee.InvalidArgument("Invalid event config");var x=i(v,Kn,function(){for(var g=arguments.length,b=new Array(g);g--;)b[g]=arguments[g];x.subscribers.forEach(function(S){ca(function(){S.apply(null,b)})})})}})}}function d(e,t){return en(t).from({prototype:e}),t}function p(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function P(e,t){e.filter=yn(e.filter,t)}function A(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return yn(a(),t())}:t,e.justLimit=n&&!a}function N(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function L(e,t,n){var a=N(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function X(e,t,n,a){var s,i,u=e.replayFilter?yn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,y,$){var C,v;u&&!u(y,$,function(m){return y.stop(m)},function(m){return y.fail(m)})||((v=""+(C=y.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(C)),le(s,v))||(s[v]=!0,t(c,y,$))},Promise.all([e.or._iterate(i,n),U(L(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):U(L(e,a,n),yn(e.algorithm,u),t,!e.keysOnly&&e.valueMapper)}function U(e,t,n,a){var s=Ee(a?function(i,u,c){return n(a(i),u,c)}:n);return e.then(function(i){if(i)return i.start(function(){var u=function(){return i.continue()};t&&!t(i,function(c){return u=c},function(c){i.stop(c),u=xe},function(c){i.fail(c),u=xe})||s(i.value,i,function(c){return u=c}),u()})})}R.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Le.bind(null,n.error)):n.table._trans("readonly",e).then(t)},R.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Le.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},R.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=yn(t.algorithm,e)},R.prototype._iterate=function(e,t){return X(this._ctx,e,t,this._ctx.table.core)},R.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&be(n,e),t._ctx=n,t},R.prototype.raw=function(){return this._ctx.valueMapper=null,this},R.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return X(t,e,n,t.table.core)})},R.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return p(s,!0)?i.count({trans:n,query:{index:N(s,i.schema),range:s.range}}).then(function(u){return Math.min(u,s.limit)}):(a=0,X(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},R.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(y,$){return $?i(y[n[$]],$-1):y[a]}var u=this._ctx.dir==="next"?1:-1;function c(y,$){return ue(i(y,s),i($,s))*u}return this.toArray(function(y){return y.sort(c)}).then(t)},R.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,u=t._ctx;return u.dir==="next"&&p(u,!0)&&0<u.limit?(a=u.valueMapper,s=N(u,u.table.core.schema),u.table.core.query({trans:n,limit:u.limit,values:!0,query:{index:s,range:u.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],X(u,function(c){return i.push(c)},n,u.table.core).then(function(){return i}))},e)},R.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,p(t)?A(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):A(t,function(){var n=e;return function(){return--n<0}})),this},R.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),A(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},R.prototype.until=function(e,t){return P(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},R.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},R.prototype.last=function(e){return this.reverse().first(e)},R.prototype.filter=function(e){var t;return P(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=yn(t.isMatch,e),this},R.prototype.and=function(e){return this.filter(e)},R.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},R.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},R.prototype.desc=function(){return this.reverse()},R.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},R.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},R.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},R.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},R.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&p(t,!0)&&0<t.limit)return this._read(function(a){var s=N(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},R.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},R.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},R.prototype.lastKey=function(e){return this.reverse().firstKey(e)},R.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},P(this._ctx,function(a){var a=a.primaryKey.toString(),s=le(e,a);return e[a]=!0,!s})),this},R.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(b,S){var B=S.failures;m+=b-S.numFailures;for(var k=0,T=Ce(B);k<T.length;k++){var F=T[k];v.push(B[F])}}var i=typeof e=="function"?e:function(b){return ir(b,e)},u=n.table.core,C=u.schema.primaryKey,c=C.outbound,y=C.extractKey,$=200,C=t.db._options.modifyChunkSize,v=(C&&($=typeof C=="object"?C[u.name]||C["*"]||200:C),[]),m=0,x=[],g=e===he;return t.clone().primaryKeys().then(function(b){function S(k){var T=Math.min($,b.length-k),F=b.slice(k,k+T);return(g?Promise.resolve([]):u.getMany({trans:a,keys:F,cache:"immutable"})).then(function(K){var j=[],D=[],W=c?[]:null,Y=g?F:[];if(!g)for(var I=0;I<T;++I){var G=K[I],ce={value:ht(G),primKey:b[k+I]};i.call(ce,ce.value,ce)!==!1&&(ce.value==null?Y.push(b[k+I]):c||ue(y(G),y(ce.value))===0?(D.push(ce.value),c&&W.push(b[k+I])):(Y.push(b[k+I]),j.push(ce.value)))}return Promise.resolve(0<j.length&&u.mutate({trans:a,type:"add",values:j}).then(function(me){for(var te in me.failures)Y.splice(parseInt(te),1);s(j.length,me)})).then(function(){return(0<D.length||B&&typeof e=="object")&&u.mutate({trans:a,type:"put",keys:W,values:D,criteria:B,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(me){return s(D.length,me)})}).then(function(){return(0<Y.length||B&&g)&&u.mutate({trans:a,type:"delete",keys:Y,criteria:B,isAdditionalChunk:0<k}).then(function(me){return Jn(n.table,Y,me)}).then(function(me){return s(Y.length,me)})}).then(function(){return b.length>k+T&&S(k+$)})})}var B=p(n)&&n.limit===1/0&&(typeof e!="function"||g)&&{index:n.index,range:n.range};return S(0).then(function(){if(0<v.length)throw new It("Error modifying one or more objects",v,m,x);return b.length})})})},R.prototype.delete=function(){var e=this._ctx,t=e.range;return!p(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(he):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(y){var c=y.failures,y=y.numFailures;if(y)throw new It("Could not delete some values",Object.keys(c).map(function($){return c[$]}),i-y);return i-y})})})};var Z=R;function R(){}var he=function(e,t){return t.value=null};function Be(e,t){return e<t?-1:e===t?0:1}function Ge(e,t){return t<e?-1:e===t?0:1}function ne(e,t,n){return e=e instanceof Lt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function _e(e){return new e.Collection(e,function(){return Je("")}).limit(0)}function Xe(x,t,n,a){var s,i,u,c,y,$,C,v=n.length;if(!n.every(function(b){return typeof b=="string"}))return ne(x,Pn);function m(b){s=b==="next"?function(B){return B.toUpperCase()}:function(B){return B.toLowerCase()},i=b==="next"?function(B){return B.toLowerCase()}:function(B){return B.toUpperCase()},u=b==="next"?Be:Ge;var S=n.map(function(B){return{lower:i(B),upper:s(B)}}).sort(function(B,k){return u(B.lower,k.lower)});c=S.map(function(B){return B.upper}),y=S.map(function(B){return B.lower}),C=($=b)==="next"?"":a}m("next");var x=new x.Collection(x,function(){return pe(c[0],y[v-1]+a)}),g=(x._ondirectionchange=function(b){m(b)},0);return x._addAlgorithm(function(b,S,B){var k=b.key;if(typeof k=="string"){var T=i(k);if(t(T,y,g))return!0;for(var F=null,K=g;K<v;++K){var j=((D,W,Y,I,G,ce)=>{for(var me=Math.min(D.length,I.length),te=-1,oe=0;oe<me;++oe){var Fe=W[oe];if(Fe!==I[oe])return G(D[oe],Y[oe])<0?D.substr(0,oe)+Y[oe]+Y.substr(oe+1):G(D[oe],I[oe])<0?D.substr(0,oe)+I[oe]+Y.substr(oe+1):0<=te?D.substr(0,te)+W[te]+Y.substr(te+1):null;G(D[oe],Fe)<0&&(te=oe)}return me<I.length&&ce==="next"?D+Y.substr(D.length):me<D.length&&ce==="prev"?D.substr(0,Y.length):te<0?null:D.substr(0,te)+I[te]+Y.substr(te+1)})(k,T,c[K],y[K],u,$);j===null&&F===null?g=K+1:(F===null||0<u(F,j))&&(F=j)}S(F!==null?function(){b.continue(F+C)}:B)}return!1}),x}function pe(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function Je(e){return{type:1,lower:e,upper:e}}Object.defineProperty(O.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),O.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?_e(this):new this.Collection(this,function(){return pe(e,t,!n,!a)})}catch{return ne(this,Jt)}},O.prototype.equals=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return Je(e)})},O.prototype.above=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return pe(e,void 0,!0)})},O.prototype.aboveOrEqual=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return pe(e,void 0,!1)})},O.prototype.below=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return pe(void 0,e,!1,!0)})},O.prototype.belowOrEqual=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return pe(void 0,e)})},O.prototype.startsWith=function(e){return typeof e!="string"?ne(this,Pn):this.between(e,e+gn,!0,!0)},O.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):Xe(this,function(t,n){return t.indexOf(n[0])===0},[e],gn)},O.prototype.equalsIgnoreCase=function(e){return Xe(this,function(t,n){return t===n[0]},[e],"")},O.prototype.anyOfIgnoreCase=function(){var e=de.apply(tt,arguments);return e.length===0?_e(this):Xe(this,function(t,n){return n.indexOf(t)!==-1},e,"")},O.prototype.startsWithAnyOfIgnoreCase=function(){var e=de.apply(tt,arguments);return e.length===0?_e(this):Xe(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,gn)},O.prototype.anyOf=function(){var e,t,n=this,a=de.apply(tt,arguments),s=this._cmp;try{a.sort(s)}catch{return ne(this,Jt)}return a.length===0?_e(this):((e=new this.Collection(this,function(){return pe(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,u,c){for(var y=i.key;0<s(y,a[t]);)if(++t===a.length)return u(c),!1;return s(y,a[t])===0||(u(function(){i.continue(a[t])}),!1)}),e)},O.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},O.prototype.noneOf=function(){var e=de.apply(tt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ne(this,Jt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},O.prototype.inAnyRange=function(e,B){var n=this,a=this._cmp,s=this._ascending,i=this._descending,u=this._min,c=this._max;if(e.length===0)return _e(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return ne(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var y=!B||B.includeLowers!==!1,$=B&&B.includeUppers===!0,C,v=s;function m(k,T){return v(k[0],T[0])}try{(C=e.reduce(function(k,T){for(var F=0,K=k.length;F<K;++F){var j=k[F];if(a(T[0],j[1])<0&&0<a(T[1],j[0])){j[0]=u(j[0],T[0]),j[1]=c(j[1],T[1]);break}}return F===K&&k.push(T),k},[])).sort(m)}catch{return ne(this,Jt)}var x=0,g=$?function(k){return 0<s(k,C[x][1])}:function(k){return 0<=s(k,C[x][1])},b=y?function(k){return 0<i(k,C[x][0])}:function(k){return 0<=i(k,C[x][0])},S=g,B=new this.Collection(this,function(){return pe(C[0][0],C[C.length-1][1],!y,!$)});return B._ondirectionchange=function(k){v=k==="next"?(S=g,s):(S=b,i),C.sort(m)},B._addAlgorithm(function(k,T,F){for(var K,j=k.key;S(j);)if(++x===C.length)return T(F),!1;return!g(K=j)&&!b(K)||(n._cmp(j,C[x][1])===0||n._cmp(j,C[x][0])===0||T(function(){v===s?k.continue(C[x][0]):k.continue(C[x][1])}),!1)}),B},O.prototype.startsWithAnyOf=function(){var e=de.apply(tt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?_e(this):this.inAnyRange(e.map(function(t){return[t,t+gn]})):ne(this,"startsWithAnyOf() only works with strings")};var Lt=O;function O(){}function Re(e){return Ee(function(t){return Qe(t),e(t.target.error),!1})}function Qe(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var ut="storagemutated",Ct="x-storagemutated-1",ie=f(null,ut),xt=(ve.prototype._lock=function(){return Nn(!J.global),++this._reculock,this._reculock!==1||J.global||(J.lockOwnerFor=this),this},ve.prototype._unlock=function(){if(Nn(!J.global),--this._reculock==0)for(J.global||(J.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{mn(e[1],e[0])}catch{}}return this},ve.prototype._locked=function(){return this._reculock&&J.lockOwnerFor!==this},ve.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Nn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(a);case"MissingAPIError":throw new ee.MissingAPI(a.message,a);default:throw new ee.OpenFailed(a)}if(!this.active)throw new ee.TransactionInactive;Nn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ee(function(s){Qe(s),t._reject(e.error)}),e.onabort=Ee(function(s){Qe(s),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Ee(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&ie.storagemutated.fire(e.mutatedParts)})}return this},ve.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Le(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(i,u){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,u)},J])}):n?an(function(){var i=new z(function(u,c){s._lock();var y=t(u,c,s);y&&y.then&&y.then(u,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new z(function(i,u){var c=t(i,u,s);c&&c.then&&c.then(i,u)}))._lib=!0,a):Le(new ee.TransactionInactive)},ve.prototype._root=function(){return this.parent?this.parent._root():this},ve.prototype.waitFor=function(e){var t,n=this._root(),a=z.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new z(function(i,u){a.then(function(c){return n._waitingQueue.push(Ee(i.bind(null,c)))},function(c){return n._waitingQueue.push(Ee(u.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},ve.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},ve.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(le(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},ve);function ve(){}function Ve(e,t,n,a,s,i,u,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!u?"&":"")+(a?"*":"")+(s?"++":"")+Ye(t),type:c}}function Ye(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function qe(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,u){return i=a(i,u),i&&(s[i[0]]=i[1]),s},{}))};var a}var Me=function(e){try{return e.only([[]]),Me=function(){return[[]]},[[]]}catch{return Me=function(){return gn},gn}};function Ze(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return zt(n,t)}:function(n){return zt(n,e)};var t}function Cn(e){return[].slice.call(e)}var Ht=0;function it(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function wt(e,t,y){function a(g){if(g.type===3)return null;if(g.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=g.lower,m=g.upper,x=g.lowerOpen,g=g.upperOpen;return v===void 0?m===void 0?null:t.upperBound(m,!!g):m===void 0?t.lowerBound(v,!!x):t.bound(v,m,!!x,!!g)}function s(C){var v,m=C.name;return{name:m,schema:C,mutate:function(x){var g=x.trans,b=x.type,S=x.keys,B=x.values,k=x.range;return new Promise(function(T,F){T=Ee(T);var K=g.objectStore(m),j=K.keyPath==null,D=b==="put"||b==="add";if(!D&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var W,Y=(S||B||{length:1}).length;if(S&&B&&S.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(Y===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function I(ke){++me,Qe(ke)}var G=[],ce=[],me=0;if(b==="deleteRange"){if(k.type===4)return T({numFailures:me,failures:ce,results:[],lastResult:void 0});k.type===3?G.push(W=K.clear()):G.push(W=K.delete(a(k)))}else{var j=D?j?[B,S]:[B,null]:[S,null],te=j[0],oe=j[1];if(D)for(var Fe=0;Fe<Y;++Fe)G.push(W=oe&&oe[Fe]!==void 0?K[b](te[Fe],oe[Fe]):K[b](te[Fe])),W.onerror=I;else for(Fe=0;Fe<Y;++Fe)G.push(W=K[b](te[Fe])),W.onerror=I}function Ft(ke){ke=ke.target.result,G.forEach(function(kn,Sa){return kn.error!=null&&(ce[Sa]=kn.error)}),T({numFailures:me,failures:ce,results:b==="delete"?S:G.map(function(kn){return kn.result}),lastResult:ke})}W.onerror=function(ke){I(ke),Ft(ke)},W.onsuccess=Ft})},getMany:function(x){var g=x.trans,b=x.keys;return new Promise(function(S,B){S=Ee(S);for(var k,T=g.objectStore(m),F=b.length,K=new Array(F),j=0,D=0,W=function(G){G=G.target,K[G._pos]=G.result,++D===j&&S(K)},Y=Re(B),I=0;I<F;++I)b[I]!=null&&((k=T.get(b[I]))._pos=I,k.onsuccess=W,k.onerror=Y,++j);j===0&&S(K)})},get:function(x){var g=x.trans,b=x.key;return new Promise(function(S,B){S=Ee(S);var k=g.objectStore(m).get(b);k.onsuccess=function(T){return S(T.target.result)},k.onerror=Re(B)})},query:(v=c,function(x){return new Promise(function(g,b){g=Ee(g);var S,B,k,D=x.trans,T=x.values,F=x.limit,j=x.query,K=F===1/0?void 0:F,W=j.index,j=j.range,D=D.objectStore(m),D=W.isPrimaryKey?D:D.index(W.name),W=a(j);if(F===0)return g({result:[]});v?((j=T?D.getAll(W,K):D.getAllKeys(W,K)).onsuccess=function(Y){return g({result:Y.target.result})},j.onerror=Re(b)):(S=0,B=!T&&"openKeyCursor"in D?D.openKeyCursor(W):D.openCursor(W),k=[],B.onsuccess=function(Y){var I=B.result;return!I||(k.push(T?I.value:I.primaryKey),++S===F)?g({result:k}):void I.continue()},B.onerror=Re(b))})}),openCursor:function(x){var g=x.trans,b=x.values,S=x.query,B=x.reverse,k=x.unique;return new Promise(function(T,F){T=Ee(T);var D=S.index,K=S.range,j=g.objectStore(m),j=D.isPrimaryKey?j:j.index(D.name),D=B?k?"prevunique":"prev":k?"nextunique":"next",W=!b&&"openKeyCursor"in j?j.openKeyCursor(a(K),D):j.openCursor(a(K),D);W.onerror=Re(F),W.onsuccess=Ee(function(Y){var I,G,ce,me,te=W.result;te?(te.___id=++Ht,te.done=!1,I=te.continue.bind(te),G=(G=te.continuePrimaryKey)&&G.bind(te),ce=te.advance.bind(te),me=function(){throw new Error("Cursor not stopped")},te.trans=g,te.stop=te.continue=te.continuePrimaryKey=te.advance=function(){throw new Error("Cursor not started")},te.fail=Ee(F),te.next=function(){var oe=this,Fe=1;return this.start(function(){return Fe--?oe.continue():oe.stop()}).then(function(){return oe})},te.start=function(oe){function Fe(){if(W.result)try{oe()}catch(ke){te.fail(ke)}else te.done=!0,te.start=function(){throw new Error("Cursor behind last entry")},te.stop()}var Ft=new Promise(function(ke,kn){ke=Ee(ke),W.onerror=Re(kn),te.fail=kn,te.stop=function(Sa){te.stop=te.continue=te.continuePrimaryKey=te.advance=me,ke(Sa)}});return W.onsuccess=Ee(function(ke){W.onsuccess=Fe,Fe()}),te.continue=I,te.continuePrimaryKey=G,te.advance=ce,Fe(),Ft},T(te)):T(null)},F)})},count:function(x){var g=x.query,b=x.trans,S=g.index,B=g.range;return new Promise(function(k,T){var F=b.objectStore(m),F=S.isPrimaryKey?F:F.index(S.name),K=a(B),K=K?F.count(K):F.count();K.onsuccess=Ee(function(j){return k(j.target.result)}),K.onerror=Re(T)})}}}i=y,u=Cn((y=e).objectStoreNames);var i,y={schema:{name:y.name,tables:u.map(function(C){return i.objectStore(C)}).map(function(C){var v=C.keyPath,m=C.autoIncrement,g=se(v),x={},g={name:C.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:g,keyPath:v,autoIncrement:m,unique:!0,extractKey:Ze(v)},indexes:Cn(C.indexNames).map(function(b){return C.index(b)}).map(function(k){var T=k.name,S=k.unique,B=k.multiEntry,k=k.keyPath,T={name:T,compound:se(k),keyPath:k,unique:S,multiEntry:B,extractKey:Ze(k)};return x[it(k)]=T}),getIndexByKeyPath:function(b){return x[it(b)]}};return x[":id"]=g.primaryKey,v!=null&&(x[it(v)]=g.primaryKey),g})},hasGetAll:0<u.length&&"getAll"in i.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},u=y.schema,c=y.hasGetAll,y=u.tables.map(s),$={};return y.forEach(function(C){return $[C.name]=C}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(C){if($[C])return $[C];throw new Error("Table '".concat(C,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Me(t),schema:u}}function Tn(e,t,n,a){return n=n.IDBKeyRange,t=wt(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,H(H({},s),i(s))},t)}}function we(e,t){var n=t.db,n=Tn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function ye(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(u){var c=(function y($,C){return oa($,C)||($=lt($))&&y($,C)})(u,s);(!c||"value"in c&&c.value===void 0)&&(u===e.Transaction.prototype||u instanceof e.Transaction?dt(u,s,{get:function(){return this.table(s)},set:function(y){ct(this,s,{value:y,writable:!0,configurable:!0,enumerable:!0})}}):u[s]=new e.Table(s,i))})})}function Pe(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Oe(e,t){return e._cfg.version-t._cfg.version}function et(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=qe("$meta",Xn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),u=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=J.transless||J;an(function(){if(J.trans=i,J.transless=c,t!==0)return we(e,n),$=t,((y=i).storeNames.includes("$meta")?y.table("$meta").get("version").then(function(C){return C??$}):z.resolve($)).then(function(S){var v=e,m=S,x=i,g=n,b=[],S=v._versions,B=v._dbSchema=Et(0,v.idbdb,g);return(S=S.filter(function(k){return k._cfg.version>=m})).length===0?z.resolve():(S.forEach(function(k){b.push(function(){var T,F,K,j=B,D=k._cfg.dbschema,W=(Bt(v,j,g),Bt(v,D,g),B=v._dbSchema=D,qt(j,D)),Y=(W.add.forEach(function(I){Xt(g,I[0],I[1].primKey,I[1].indexes)}),W.change.forEach(function(I){if(I.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var G=g.objectStore(I.name);I.add.forEach(function(ce){return ot(G,ce)}),I.change.forEach(function(ce){G.deleteIndex(ce.name),ot(G,ce)}),I.del.forEach(function(ce){return G.deleteIndex(ce)})}),k._cfg.contentUpgrade);if(Y&&k._cfg.version>m)return we(v,g),x._memoizedTables={},T=Ta(D),W.del.forEach(function(I){T[I]=j[I]}),Pe(v,[v.Transaction.prototype]),ye(v,[v.Transaction.prototype],Ce(T),T),x.schema=T,(F=cn(Y))&&Mn(),D=z.follow(function(){var I;(K=Y(x))&&F&&(I=rn.bind(null,null),K.then(I,I))}),K&&typeof K.then=="function"?z.resolve(K):D.then(function(){return K})}),b.push(function(T){var F,K,j=k._cfg.dbschema;F=j,K=T,[].slice.call(K.db.objectStoreNames).forEach(function(D){return F[D]==null&&K.db.deleteObjectStore(D)}),Pe(v,[v.Transaction.prototype]),ye(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),x.schema=v._dbSchema}),b.push(function(T){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===k._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(F){return F!=="$meta"})):T.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return b.length?z.resolve(b.shift()(x.idbtrans)).then(k):z.resolve()})().then(function(){At(B,g)}))}).catch(u);var y,$;Ce(s).forEach(function(C){Xt(n,C,s[C].primKey,s[C].indexes)}),we(e,n),z.follow(function(){return e.on.populate.fire(i)}).catch(u)})}function on(e,t){At(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Et(0,e.idbdb,t);Bt(e,e._dbSchema,t);for(var a=0,s=qt(n,e._dbSchema).change;a<s.length;a++){var i=(u=>{if(u.change.length||u.recreate)return console.warn("Unable to patch indexes of table ".concat(u.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(u.name);u.add.forEach(function(y){gt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name,".").concat(y.src)),ot(c,y)})})(s[a]);if(typeof i=="object")return i.value}}function qt(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var u={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)u.recreate=!0,a.change.push(u);else{var c=s.idxByName,y=i.idxByName,$=void 0;for($ in c)y[$]||u.del.push($);for($ in y){var C=c[$],v=y[$];C?C.src!==v.src&&u.change.push(v):u.add.push(v)}(0<u.del.length||0<u.add.length||0<u.change.length)&&a.change.push(u)}}else a.add.push([n,i])}return a}function Xt(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return ot(s,i)})}function At(e,t){Ce(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(gt&&console.debug("Dexie: Creating missing table",n),Xt(t,n,e[n].primKey,e[n].indexes))})}function ot(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Et(e,t,n){var a={};return la(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),u=Ve(Ye($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),c=[],y=0;y<i.indexNames.length;++y){var C=i.index(i.indexNames[y]),$=C.keyPath,C=Ve(C.name,$,!!C.unique,!!C.multiEntry,!1,$&&typeof $!="string",!1);c.push(C)}a[s]=qe(s,u,c)}),a}function Bt(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],u=n.objectStore(i);e._hasGetAll="getAll"in u;for(var c=0;c<u.indexNames.length;++c){var y,$=u.indexNames[c],C=u.index($).keyPath,C=typeof C=="string"?C:"["+la(C).join("+")+"]";t[i]&&(y=t[i].idxByName[C])&&(y.name=$,delete t[i].idxByName[C],t[i].idxByName[$]=y)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&re.WorkerGlobalScope&&re instanceof re.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Xn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Ve(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),se(i),n===0,a)})}q.prototype._createTableSchema=qe,q.prototype._parseIndexSyntax=Xn,q.prototype._parseStoresSpec=function(e,t){var n=this;Ce(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new ee.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new ee.Schema("Primary key cannot be multiEntry*");s.forEach(function(u){if(u.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!u.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},q.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?be(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){be(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,Pe(t,[t._allTables,t,t.Transaction.prototype]),ye(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Ce(s),s),t._storeNames=Ce(s),this},q.prototype.upgrade=function(e){return this._cfg.contentUpgrade=jn(this._cfg.contentUpgrade||xe,e),this};var _=q;function q(){}function at(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Rt(Wn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function xn(e){return e&&typeof e.databases=="function"}function Te(e){return an(function(){return J.letThrough=!0,e()})}function ja(e){return!("from"in e)}var rt=function(e,t){var n;if(!this)return n=new rt,e&&"d"in e&&be(n,e),n;be(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function An(e,t,n){var a=ue(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(ja(e))return be(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(ue(n,e.from)<0)return a?An(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Ot(e);if(0<ue(t,e.to))return s?An(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Ot(e);ue(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<ue(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&On(e,a),s&&t&&On(e,s)}}function On(e,t){ja(t)||(function n(a,s){var i=s.from,u=s.l,c=s.r;An(a,i,s.to),u&&n(a,u),c&&n(a,c)})(e,t)}function or(e,t){var n=ba(t),a=n.next();if(!a.done)for(var s=a.value,i=ba(e),u=i.next(s.from),c=u.value;!a.done&&!u.done;){if(ue(c.from,s.to)<=0&&0<=ue(c.to,s.from))return!0;ue(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(u=i.next(s.from)).value}return!1}function ba(e){var t=ja(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&ue(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||ue(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ot(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=H({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Kt(n)),e.d=Kt(e)}function Kt(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function _t(e,t){return Ce(t).forEach(function(n){e[n]?On(e[n],t[n]):e[n]=(function a(s){var i,u,c={};for(i in s)le(s,i)&&(u=s[i],c[i]=!u||typeof u!="object"||Ga.has(u.constructor)?u:a(u));return c})(t[n])}),e}function ya(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&or(t[n],e[n])})}mt(rt.prototype,((nt={add:function(e){return On(this,e),this},addKey:function(e){return An(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return An(t,n,n)}),this},hasKey:function(e){var t=ba(this).next(e).value;return t&&ue(t.from,e)<=0&&0<=ue(t.to,e)}})[Fa]=function(){return ba(this)},nt));var ln={},Ca={},xa=!1;function Qn(e){_t(Ca,e),xa||(xa=!0,setTimeout(function(){xa=!1,wa(Ca,!(Ca={}))},0))}function wa(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(ln);a<s.length;a++)Ra(c=s[a],e,n,t);else for(var i in e){var u,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(u=i[1],i=i[2],c=ln["idb://".concat(u,"/").concat(i)])&&Ra(c,e,n,t)}n.forEach(function(y){return y()})}function Ra(e,t,n,a){for(var s=[],i=0,u=Object.entries(e.queries.query);i<u.length;i++){for(var c=u[i],y=c[0],$=[],C=0,v=c[1];C<v.length;C++){var m=v[C];ya(t,m.obsSet)?m.subscribers.forEach(function(S){return n.add(S)}):a&&$.push(m)}a&&s.push([y,$])}if(a)for(var x=0,g=s;x<g.length;x++){var b=g[x],y=b[0],$=b[1];e.queries.query[y]=$}}function Br(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Le(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function u(){if(t.openCanceller!==a)throw new ee.DatabaseClosed("db.open() was cancelled")}function c(){return new z(function(m,x){if(u(),!n)throw new ee.MissingAPI;var g=e.name,b=t.autoSchema||!s?n.open(g):n.open(g,s);if(!b)throw new ee.MissingAPI;b.onerror=Re(x),b.onblocked=Ee(e._fireOnBlocked),b.onupgradeneeded=Ee(function(S){var B;C=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=Qe,C.abort(),b.result.close(),(B=n.deleteDatabase(g)).onsuccess=B.onerror=Ee(function(){x(new ee.NoSuchDatabase("Database ".concat(g," doesnt exist")))})):(C.onerror=Re(x),B=S.oldVersion>Math.pow(2,62)?0:S.oldVersion,v=B<1,e.idbdb=b.result,i&&on(e,C),et(e,B/10,C,x))},x),b.onsuccess=Ee(function(){C=null;var S,B,k,T,F,K,j=e.idbdb=b.result,D=la(j.objectStoreNames);if(0<D.length)try{var W=j.transaction((F=D).length===1?F[0]:F,"readonly");if(t.autoSchema)K=j,T=W,(k=e).verno=K.version/10,T=k._dbSchema=Et(0,K,T),k._storeNames=la(K.objectStoreNames,0),ye(k,[k._allTables],Ce(T),T);else if(Bt(e,e._dbSchema,W),B=W,((B=qt(Et(0,(S=e).idbdb,B),S._dbSchema)).add.length||B.change.some(function(Y){return Y.add.length||Y.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),s=j.version+1,i=!0,m(c());we(e,W)}catch{}bn.push(e),j.onversionchange=Ee(function(Y){t.vcFired=!0,e.on("versionchange").fire(Y)}),j.onclose=Ee(function(){e.close({disableAutoOpen:!1})}),v&&(D=e._deps,F=g,xn(K=D.indexedDB)||F===Wn||at(K,D.IDBKeyRange).put({name:F}).catch(xe)),m()},x)}).catch(function(m){switch(m?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return z.reject(m)})}var y,$=t.dbReadyResolve,C=null,v=!1;return z.race([a,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(m){function x(){return indexedDB.databases().finally(m)}y=setInterval(x,100),x()}).finally(function(){return clearInterval(y)}):Promise.resolve()).then(c)]).then(function(){return u(),t.onReadyBeingFired=[],z.resolve(Te(function(){return e.on.ready.fire(e.vip)})).then(function m(){var x;if(0<t.onReadyBeingFired.length)return x=t.onReadyBeingFired.reduce(jn,xe),t.onReadyBeingFired=[],z.resolve(Te(function(){return x(e.vip)})).then(m)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(m){t.dbOpenError=m;try{C&&C.abort()}catch{}return a===t.openCanceller&&e._close(),Le(m)}).finally(function(){t.openComplete=!0,$()}).then(function(){var m;return v&&(m={},e.tables.forEach(function(x){x.schema.indexes.forEach(function(g){g.name&&(m["idb://".concat(e.name,"/").concat(x.name,"/").concat(g.name)]=new rt(-1/0,[[[]]]))}),m["idb://".concat(e.name,"/").concat(x.name,"/")]=m["idb://".concat(e.name,"/").concat(x.name,"/:dels")]=new rt(-1/0,[[[]]])}),ie(ut).fire(m),wa(m,!0)),e})}function Zn(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),y=c.value;return c.done?y:y&&typeof y.then=="function"?y.then(n,a):se(y)?Promise.all(y).then(n,a):n(y)}}return s(t)()}function ea(e,t,n){for(var a=se(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Qt={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return H(H({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function u(m,x,g){var k=it(m),b=s[k]=s[k]||[],S=m==null?0:typeof m=="string"?1:m.length,B=0<x,k=H(H({},g),{name:B?"".concat(k,"(virtual-from:").concat(g.name,")"):g.name,lowLevelIndex:g,isVirtual:B,keyTail:x,keyLength:S,extractKey:Ze(m),unique:!B&&g.unique});return b.push(k),k.isPrimaryKey||i.push(k),1<S&&u(S===2?m[0]:m.slice(0,S-1),x+1,g),b.sort(function(T,F){return T.keyTail-F.keyTail}),k}var c=u(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var y=0,$=a.indexes;y<$.length;y++){var C=$[y];u(C.keyPath,0,C)}function v(m){var x,g=m.query.index;return g.isVirtual?H(H({},m),{query:{index:g.lowLevelIndex,range:(x=m.query.range,g=g.keyTail,{type:x.type===1?2:x.type,lower:ea(x.lower,x.lowerOpen?e.MAX_KEY:e.MIN_KEY,g),lowerOpen:!0,upper:ea(x.upper,x.upperOpen?e.MIN_KEY:e.MAX_KEY,g),upperOpen:!0})}}):m}return H(H({},n),{schema:H(H({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(m){return(m=s[it(m)])&&m[0]}}),count:function(m){return n.count(v(m))},query:function(m){return n.query(v(m))},openCursor:function(m){var x=m.query.index,g=x.keyTail,b=x.keyLength;return x.isVirtual?n.openCursor(v(m)).then(function(B){return B&&S(B)}):n.openCursor(m);function S(B){return Object.create(B,{continue:{value:function(k){k!=null?B.continue(ea(k,m.reverse?e.MAX_KEY:e.MIN_KEY,g)):m.unique?B.continue(B.key.slice(0,b).concat(m.reverse?e.MIN_KEY:e.MAX_KEY,g)):B.continue()}},continuePrimaryKey:{value:function(k,T){B.continuePrimaryKey(ea(k,e.MAX_KEY,g),T)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var k=B.key;return b===1?k[0]:k.slice(0,b)}},value:{get:function(){return B.value}}})}}})}})}};function Va(e,t,n,a){return n=n||{},a=a||"",Ce(e).forEach(function(s){var i,u,c;le(t,s)?(i=e[s],u=t[s],typeof i=="object"&&typeof u=="object"&&i&&u?(c=Oa(i))!==Oa(u)?n[a+s]=t[s]:c==="Object"?Va(i,u,n,a+s+"."):i!==u&&(n[a+s]=t[s]):i!==u&&(n[a+s]=t[s])):n[a+s]=void 0}),Ce(t).forEach(function(s){le(e,s)||(n[a+s]=t[s])}),n}function jt(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var _r={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return H(H({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return H(H({},n),{mutate:function(s){var i=J.trans,u=i.table(t).hook,c=u.deleting,y=u.creating,$=u.updating;switch(s.type){case"add":if(y.fire===xe)break;return i._promise("readwrite",function(){return C(s)},!0);case"put":if(y.fire===xe&&$.fire===xe)break;return i._promise("readwrite",function(){return C(s)},!0);case"delete":if(c.fire===xe)break;return i._promise("readwrite",function(){return C(s)},!0);case"deleteRange":if(c.fire===xe)break;return i._promise("readwrite",function(){return(function v(m,x,g){return n.query({trans:m,values:!1,query:{index:a,range:x},limit:g}).then(function(b){var S=b.result;return C({type:"delete",keys:S,trans:m}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):S.length<g?{failures:[],numFailures:0,lastResult:void 0}:v(m,H(H({},x),{lower:S[S.length-1],lowerOpen:!0}),g)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function C(v){var m,x,g,b=J.trans,S=v.keys||jt(a,v);if(S)return(v=v.type==="add"||v.type==="put"?H(H({},v),{keys:S}):H({},v)).type!=="delete"&&(v.values=ge([],v.values)),v.keys&&(v.keys=ge([],v.keys)),m=n,g=S,((x=v).type==="add"?Promise.resolve([]):m.getMany({trans:x.trans,keys:g,cache:"immutable"})).then(function(B){var k=S.map(function(T,F){var K,j,D,W=B[F],Y={onerror:null,onsuccess:null};return v.type==="delete"?c.fire.call(Y,T,W,b):v.type==="add"||W===void 0?(K=y.fire.call(Y,T,v.values[F],b),T==null&&K!=null&&(v.keys[F]=T=K,a.outbound||ft(v.values[F],a.keyPath,T))):(K=Va(W,v.values[F]),(j=$.fire.call(Y,K,T,W,b))&&(D=v.values[F],Object.keys(j).forEach(function(I){le(D,I)?D[I]=j[I]:ft(D,I,j[I])}))),Y});return n.mutate(v).then(function(T){for(var F=T.failures,K=T.results,j=T.numFailures,T=T.lastResult,D=0;D<S.length;++D){var W=(K||S)[D],Y=k[D];W==null?Y.onerror&&Y.onerror(F[D]):Y.onsuccess&&Y.onsuccess(v.type==="put"&&B[D]?v.values[D]:W)}return{failures:F,results:K,numFailures:j,lastResult:T}}).catch(function(T){return k.forEach(function(F){return F.onerror&&F.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function lr(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)ue(t.keys[s],e[i])===0&&(a.push(n?ht(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var ur={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return H(H({},n),{getMany:function(a){var s;return a.cache?(s=lr(a.keys,a.trans._cache,a.cache==="clone"))?z.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?ht(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ya(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function za(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var cr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new rt(e.MIN_KEY,e.MAX_KEY);return H(H({},e),{transaction:function(a,s,i){if(J.subscr&&s!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(J.querier));return e.transaction(a,s,i)},table:function(a){function s(S){var b,S=S.query;return[b=S.index,new rt((b=(S=S.range).lower)!=null?b:e.MIN_KEY,(b=S.upper)!=null?b:e.MAX_KEY)]}var i=e.table(a),u=i.schema,c=u.primaryKey,y=u.indexes,$=c.extractKey,C=c.outbound,v=c.autoIncrement&&y.filter(function(g){return g.compound&&g.keyPath.includes(c.keyPath)}),m=H(H({},i),{mutate:function(g){function b(G){return G="idb://".concat(t,"/").concat(a,"/").concat(G),F[G]||(F[G]=new rt)}var S,B,k,T=g.trans,F=g.mutatedParts||(g.mutatedParts={}),K=b(""),j=b(":dels"),D=g.type,Y=g.type==="deleteRange"?[g.range]:g.type==="delete"?[g.keys]:g.values.length<50?[jt(c,g).filter(function(G){return G}),g.values]:[],W=Y[0],Y=Y[1],I=g.trans._cache;return se(W)?(K.addKeys(W),(D=D==="delete"||W.length===Y.length?lr(W,I):null)||j.addKeys(W),(D||Y)&&(S=b,B=D,k=Y,u.indexes.forEach(function(G){var ce=S(G.name||"");function me(oe){return oe!=null?G.extractKey(oe):null}function te(oe){G.multiEntry&&se(oe)?oe.forEach(function(Fe){return ce.addKey(Fe)}):ce.addKey(oe)}(B||k).forEach(function(oe,ke){var Ft=B&&me(B[ke]),ke=k&&me(k[ke]);ue(Ft,ke)!==0&&(Ft!=null&&te(Ft),ke!=null)&&te(ke)})}))):W?(Y={from:(I=W.lower)!=null?I:e.MIN_KEY,to:(D=W.upper)!=null?D:e.MAX_KEY},j.add(Y),K.add(Y)):(K.add(n),j.add(n),u.indexes.forEach(function(G){return b(G.name).add(n)})),i.mutate(g).then(function(G){return!W||g.type!=="add"&&g.type!=="put"||(K.addKeys(G.results),v&&v.forEach(function(ce){for(var me=g.values.map(function(Ft){return ce.extractKey(Ft)}),te=ce.keyPath.findIndex(function(Ft){return Ft===c.keyPath}),oe=0,Fe=G.results.length;oe<Fe;++oe)me[oe][te]=G.results[oe];b(ce.name).addKeys(me)})),T.mutatedParts=_t(T.mutatedParts||{},F),G})}}),x={get:function(g){return[c,new rt(g.key)]},getMany:function(g){return[c,new rt().addKeys(g.keys)]},count:s,query:s,openCursor:s};return Ce(x).forEach(function(g){m[g]=function(b){var S=J.subscr,B=!!S,k=Ya(J,i)&&za(g,b)?b.obsSet={}:S;if(B){var T,S=function(Y){return Y="idb://".concat(t,"/").concat(a,"/").concat(Y),k[Y]||(k[Y]=new rt)},F=S(""),K=S(":dels"),B=x[g](b),j=B[0],B=B[1];if((g==="query"&&j.isPrimaryKey&&!b.values?K:S(j.name||"")).add(B),!j.isPrimaryKey){if(g!=="count")return T=g==="query"&&C&&b.values&&i.query(H(H({},b),{values:!1})),i[g].apply(this,arguments).then(function(Y){if(g==="query"){if(C&&b.values)return T.then(function(me){return me=me.result,F.addKeys(me),Y});var I=b.values?Y.result.map($):Y.result;(b.values?F:K).addKeys(I)}else{var G,ce;if(g==="openCursor")return ce=b.values,(G=Y)&&Object.create(G,{key:{get:function(){return K.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var me=G.primaryKey;return K.addKey(me),me}},value:{get:function(){return ce&&F.addKey(G.primaryKey),G.value}}})}return Y});K.add(n)}}return i[g].apply(this,arguments)}}),m}})}};function Ua(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=H({},t),se(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&se(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function Wa(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<ue(n,a.lower):0<=ue(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?ue(n,a.upper)<0:ue(n,a.upper)<=0));var n,a}function dr(e,t,n,a,s,i){var u,c,y,$,C,v;return!n||n.length===0||(u=t.query.index,c=u.multiEntry,y=t.query.range,$=a.schema.primaryKey.extractKey,C=u.extractKey,v=(u.lowLevelIndex||u).extractKey,(a=n.reduce(function(m,x){var g=m,b=[];if(x.type==="add"||x.type==="put")for(var S=new rt,B=x.values.length-1;0<=B;--B){var k,T=x.values[B],F=$(T);!S.hasKey(F)&&(k=C(T),c&&se(k)?k.some(function(Y){return Wa(Y,y)}):Wa(k,y))&&(S.addKey(F),b.push(T))}switch(x.type){case"add":var K=new rt().addKeys(t.values?m.map(function(I){return $(I)}):m),g=m.concat(t.values?b.filter(function(I){return I=$(I),!K.hasKey(I)&&(K.addKey(I),!0)}):b.map(function(I){return $(I)}).filter(function(I){return!K.hasKey(I)&&(K.addKey(I),!0)}));break;case"put":var j=new rt().addKeys(x.values.map(function(I){return $(I)}));g=m.filter(function(I){return!j.hasKey(t.values?$(I):I)}).concat(t.values?b:b.map(function(I){return $(I)}));break;case"delete":var D=new rt().addKeys(x.keys);g=m.filter(function(I){return!D.hasKey(t.values?$(I):I)});break;case"deleteRange":var W=x.range;g=m.filter(function(I){return!Wa($(I),W)})}return g},e))===e)?e:(a.sort(function(m,x){return ue(v(m),v(x))||ue($(m),$(x))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function fr(e,t){return ue(e.lower,t.lower)===0&&ue(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Mr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=ue(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=ue(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Pr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&tn(i,s)},3e3))})}var ta={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return H(H({},e),{transaction:function(n,a,s){var i,u,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(u=function(y){return function(){if(i.abort(),a==="readwrite"){for(var $=new Set,C=0,v=n;C<v.length;C++){var m=v[C],x=ln["idb://".concat(t,"/").concat(m)];if(x){var g=e.table(m),b=x.optimisticOps.filter(function(G){return G.trans===c});if(c._explicit&&y&&c.mutatedParts)for(var S=0,B=Object.values(x.queries.query);S<B.length;S++)for(var k=0,T=(j=B[S]).slice();k<T.length;k++)ya((D=T[k]).obsSet,c.mutatedParts)&&(tn(j,D),D.subscribers.forEach(function(G){return $.add(G)}));else if(0<b.length){x.optimisticOps=x.optimisticOps.filter(function(G){return G.trans!==c});for(var F=0,K=Object.values(x.queries.query);F<K.length;F++)for(var j,D,W,Y=0,I=(j=K[F]).slice();Y<I.length;Y++)(D=I[Y]).res!=null&&c.mutatedParts&&(y&&!D.dirty?(W=Object.isFrozen(D.res),W=dr(D.res,D.req,b,g,D,W),D.dirty?(tn(j,D),D.subscribers.forEach(function(G){return $.add(G)})):W!==D.res&&(D.res=W,D.promise=z.resolve({result:W}))):(D.dirty&&tn(j,D),D.subscribers.forEach(function(G){return $.add(G)})))}}}$.forEach(function(G){return G()})}}})(!1),{signal:s}),c.addEventListener("error",u(!1),{signal:s}),c.addEventListener("complete",u(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return H(H({},a),{mutate:function(i){var u,c=J.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(u=ln["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||jt(s,i).some(function(y){return y==null}))?(u.optimisticOps.push(i),i.mutatedParts&&Qn(i.mutatedParts),c.then(function(y){0<y.numFailures&&(tn(u.optimisticOps,i),(y=Ua(0,i,y))&&u.optimisticOps.push(y),i.mutatedParts)&&Qn(i.mutatedParts)}),c.catch(function(){tn(u.optimisticOps,i),i.mutatedParts&&Qn(i.mutatedParts)})):c.then(function(y){var $=Ua(0,H(H({},i),{values:i.values.map(function(C,v){var m;return y.failures[v]?C:(ft(m=(m=s.keyPath)!=null&&m.includes(".")?ht(C):H({},C),s.keyPath,y.results[v]),m)})}),y);u.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&Qn(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var u,c,y,$,C,v,m;return Ya(J,a)&&za("query",i)?(u=((y=J.trans)==null?void 0:y.db._options.cache)==="immutable",c=(y=J).requery,y=y.signal,v=((x,g,b,S)=>{var B=ln["idb://".concat(x,"/").concat(g)];if(!B)return[];if(!(x=B.queries[b]))return[null,!1,B,null];var k=x[(S.query?S.query.index.name:null)||""];if(!k)return[null,!1,B,null];switch(b){case"query":var T=k.find(function(F){return F.req.limit===S.limit&&F.req.values===S.values&&fr(F.req.query.range,S.query.range)});return T?[T,!0,B,k]:[k.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=S.limit&&(!S.values||F.req.values)&&Mr(F.req.query.range,S.query.range)}),!1,B,k];case"count":return T=k.find(function(F){return fr(F.req.query.range,S.query.range)}),[T,!!T,B,k]}})(t,n,"query",i),m=v[0],$=v[2],C=v[3],m&&v[1]?m.obsSet=i.obsSet:(v=a.query(i).then(function(x){var g=x.result;if(m&&(m.res=g),u){for(var b=0,S=g.length;b<S;++b)Object.freeze(g[b]);Object.freeze(g)}else x.result=ht(g);return x}).catch(function(x){return C&&m&&tn(C,m),Promise.reject(x)}),m={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},C?C.push(m):(C=[m],($=$||(ln["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=C)),Pr(m,C,c,y),m.promise.then(function(x){return{result:dr(x.result,i,$?.optimisticOps,a,m,u)}})):a.query(i)}})}})}};function ka(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}Ie.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Oe),n.stores({}),this._state.autoSchema=!1),n},Ie.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||J.letThrough||this._vip)?e():new z(function(n,a){if(t._state.openComplete)return a(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new ee.DatabaseClosed);t.open().catch(xe)}t._state.dbReadyPromise.then(n,a)}).then(e)},Ie.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(u,c){return u.level-c.level}),this},Ie.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Ie.prototype.open=function(){var e=this;return mn(nn,function(){return Br(e)})},Ie.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=bn.indexOf(this);if(0<=t&&bn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(n){e.dbReadyResolve=n}),e.openCanceller=new z(function(n,a){e.cancelOpen=a}))},Ie.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ie.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new z(function(s,i){function u(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=Ee(function(){var y,$,C;y=t._deps,$=t.name,xn(C=y.indexedDB)||$===Wn||at(C,y.IDBKeyRange).delete($).catch(xe),s()}),c.onerror=Re(i),c.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(u):u()})},Ie.prototype.backendDB=function(){return this.idbdb},Ie.prototype.isOpen=function(){return this.idbdb!==null},Ie.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ie.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ie.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ie.prototype,"tables",{get:function(){var e=this;return Ce(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ie.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new ee.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Aa(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},Ie.prototype._transaction=function(e,t,n){var a,s,i=this,u=J.trans,c=(u&&u.db===this&&e.indexOf("!")===-1||(u=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===qa)a=qa;else{if(e!="rw"&&e!=Ka)throw new ee.InvalidArgument("Invalid transaction mode: "+e);a=Ka}if(u){if(u.mode===qa&&a===Ka){if(!c)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");u=null}u&&s.forEach(function($){if(u&&u.storeNames.indexOf($)===-1){if(!c)throw new ee.SubTransaction("Table "+$+" not included in parent transaction.");u=null}}),c&&u&&!u.active&&(u=null)}}catch($){return u?u._promise(null,function(C,v){v($)}):Le($)}var y=(function $(C,v,m,x,g){return z.resolve().then(function(){var k=J.transless||J,b=C._createTransaction(v,m,C._dbSchema,x),k=(b.explicit=!0,{trans:b,transless:k});if(x)b.idbtrans=x.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,C._state.PR1398_maxLoop=3}catch(T){return T.name===da.InvalidState&&C.isOpen()&&0<--C._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),C.close({disableAutoOpen:!1}),C.open().then(function(){return $(C,v,m,null,g)})):Le(T)}var S,B=cn(g),k=(B&&Mn(),z.follow(function(){var T;(S=g.call(b,b))&&(B?(T=rn.bind(null,null),S.then(T,T)):typeof S.next=="function"&&typeof S.throw=="function"&&(S=Zn(S)))},k));return(S&&typeof S.then=="function"?z.resolve(S).then(function(T){return b.active?T:Le(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return S})).then(function(T){return x&&b._resolve(),b._completion.then(function(){return T})}).catch(function(T){return b._reject(T),Le(T)})})}).bind(null,this,a,s,u,n);return u?u._promise(a,y,"lock"):J.trans?mn(J.transless,function(){return i._whenReady(y)}):this._whenReady(y)},Ie.prototype.table=function(e){if(le(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var Rt=Ie;function Ie(e,t){var n,a,s,i,u,c=this,y=(this._middlewares={},this.verno=0,Ie.dependencies),y=(this._options=t=H({addons:Ie.addons,autoOpen:!0,indexedDB:y.indexedDB,IDBKeyRange:y.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:xe,dbReadyPromise:null,cancelOpen:xe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),C=($.dbReadyPromise=new z(function(v){$.dbReadyResolve=v}),$.openCanceller=new z(function(v,m){$.cancelOpen=m}),this._state=$,this.name=e,this.on=f(this,"populate","blocked","versionchange","close",{ready:[jn,xe]}),this.once=function(v,m){var x=function(){for(var g=[],b=0;b<arguments.length;b++)g[b]=arguments[b];c.on(v).unsubscribe(x),m.apply(c,g)};return c.on(v,x)},this.on.ready.subscribe=ua(this.on.ready.subscribe,function(v){return function(m,x){Ie.vip(function(){var g,b=c._state;b.openComplete?(b.dbOpenError||z.resolve().then(m),x&&v(m)):b.onReadyBeingFired?(b.onReadyBeingFired.push(m),x&&v(m)):(v(m),g=c,x||v(function S(){g.on.ready.unsubscribe(m),g.on.ready.unsubscribe(S)}))})}}),this.Collection=(n=this,d(Z.prototype,function(S,b){this.db=n;var x=nr,g=null;if(b)try{x=b()}catch(k){g=k}var b=S._ctx,S=b.table,B=S.hook.reading.fire;this._ctx={table:S,index:b.index,isPrimKey:!b.index||S.schema.primKey.keyPath&&b.index===S.schema.primKey.name,range:x,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:g,or:b.or,valueMapper:B!==Kn?B:null}})),this.Table=(a=this,d(o.prototype,function(v,m,x){this.db=a,this._tx=x,this.name=v,this.schema=m,this.hook=a._allTables[v]?a._allTables[v].hook:f(null,{creating:[Qa,xe],reading:[xr,Kn],updating:[kr,xe],deleting:[wr,xe]})})),this.Transaction=(s=this,d(xt.prototype,function(v,m,x,g,b){var S=this;v!=="readonly"&&m.forEach(function(B){B=(B=x[B])==null?void 0:B.yProps,B&&(m=m.concat(B.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=v,this.storeNames=m,this.schema=x,this.chromeTransactionDurability=g,this.idbtrans=null,this.on=f(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(B,k){S._resolve=B,S._reject=k}),this._completion.then(function(){S.active=!1,S.on.complete.fire()},function(B){var k=S.active;return S.active=!1,S.on.error.fire(B),S.parent?S.parent._reject(B):k&&S.idbtrans&&S.idbtrans.abort(),Le(B)})})),this.Version=(i=this,d(_.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(u=this,d(Lt.prototype,function(v,m,x){if(this.db=u,this._ctx={table:v,index:m===":id"?null:m,or:x},this._cmp=this._ascending=ue,this._descending=function(g,b){return ue(b,g)},this._max=function(g,b){return 0<ue(g,b)?g:b},this._min=function(g,b){return ue(g,b)<0?g:b},this._IDBKeyRange=u._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Me(t.IDBKeyRange),this._createTransaction=function(v,m,x,g){return new c.Transaction(v,m,x,c._options.chromeTransactionDurability,g)},this._fireOnBlocked=function(v){c.on("blocked").fire(v),bn.filter(function(m){return m.name===c.name&&m!==c&&!m._state.vcFired}).map(function(m){return m.on("versionchange").fire(v)})},this.use(ur),this.use(ta),this.use(cr),this.use(Qt),this.use(_r),new Proxy(this,{get:function(v,m,x){var g;return m==="_vip"||(m==="table"?function(b){return ka(c.table(b),C)}:(g=Reflect.get(v,m,x))instanceof o?ka(g,C):m==="tables"?g.map(function(b){return ka(b,C)}):m==="_createTransaction"?function(){return ka(g.apply(this,arguments),C)}:g)}}));this.vip=C,y.forEach(function(v){return v(c)})}var $a,Fn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",kt=(Dn.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Dn.prototype[Fn]=function(){return this},Dn);function Dn(e){this._subscribe=e}try{$a={indexedDB:re.indexedDB||re.mozIndexedDB||re.webkitIndexedDB||re.msIndexedDB,IDBKeyRange:re.IDBKeyRange||re.webkitIDBKeyRange}}catch{$a={indexedDB:null,IDBKeyRange:null}}function st(e){var t,n=!1,a=new kt(function(s){var i=cn(e),u,c=!1,y={},$={},C={get closed(){return c},unsubscribe:function(){c||(c=!0,u&&u.abort(),v&&ie.storagemutated.unsubscribe(x))}},v=(s.start&&s.start(C),!1),m=function(){return La(g)},x=function(b){_t(y,b),ya($,y)&&m()},g=function(){var b,S,B;!c&&$a.indexedDB&&(y={},b={},u&&u.abort(),u=new AbortController,B=(k=>{var T=vn();try{i&&Mn();var F=an(e,k);return F=i?F.finally(rn):F}finally{T&&yt()}})(S={subscr:b,signal:u.signal,requery:m,querier:e,trans:null}),Promise.resolve(B).then(function(k){n=!0,t=k,c||S.signal.aborted||(y={},(T=>{for(var F in T)if(le(T,F))return;return 1})($=b)||v||(ie(ut,x),v=!0),La(function(){return!c&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||c||La(function(){c||s.error&&s.error(k)})}))};return setTimeout(m,0),C});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var wn=Rt;function Zt(e){var t=un;try{un=!0,ie.storagemutated.fire(e),wa(e,!0)}finally{un=t}}mt(wn,H(H({},Dt),{delete:function(e){return new wn(e,{addons:[]}).delete()},exists:function(e){return new wn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=wn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(xn(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==Wn})}):at(n,t).toCollection().primaryKeys()).then(e)}catch{return Le(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){be(this,e)}},ignoreTransaction:function(e){return J.trans?mn(J.transless,e):e()},vip:Te,async:function(e){return function(){try{var t=Zn(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(n){return Le(n)}}},spawn:function(e,t,n){try{var a=Zn(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:z.resolve(a)}catch(s){return Le(s)}},currentTransaction:{get:function(){return J.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?wn.ignoreTransaction(e):e).timeout(t||6e4),J.trans?J.trans.waitFor(e):e},Promise:z,debug:{get:function(){return gt},set:function(e){Ia(e)}},derive:en,extend:be,props:mt,override:ua,Events:f,on:ie,liveQuery:st,extendObservabilitySet:_t,getByKeyPath:zt,setByKeyPath:ft,delByKeyPath:function(e,t){typeof t=="string"?ft(e,t,void 0):"length"in t&&[].map.call(t,function(n){ft(e,n,void 0)})},shallowClone:Ta,deepClone:ht,getObjectDiff:Va,cmp:ue,asap:ca,minKey:-1/0,addons:[],connections:bn,errnames:da,dependencies:$a,cache:ln,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),wn.maxKey=Me(wn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ie(ut,function(e){un||(e=new CustomEvent(Ct,{detail:e}),un=!0,dispatchEvent(e),un=!1)}),addEventListener(Ct,function(e){e=e.detail,un||Zt(e)}));var Vt,un=!1,hr=function(){};return typeof BroadcastChannel<"u"&&((hr=function(){(Vt=new BroadcastChannel(Ct)).onmessage=function(e){return e.data&&Zt(e.data)}})(),typeof Vt.unref=="function"&&Vt.unref(),ie(ut,function(e){un||Vt.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Rt.disableBfCache&&e.persisted){gt&&console.debug("Dexie: handling persisted pagehide"),Vt?.close();for(var t=0,n=bn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Rt.disableBfCache&&e.persisted&&(gt&&console.debug("Dexie: handling persisted pageshow"),hr(),Zt({all:new rt(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof dn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Xa[e.name]?e:(t=new Xa[e.name](t||e.message,e),"stack"in e&&dt(t,"stack",{get:function(){return this.inner.stack}}),t)},Ia(gt),H(Rt,Object.freeze({__proto__:null,Dexie:Rt,Entity:ar,PropModification:Hn,RangeSet:rt,add:function(e){return new Hn({add:e})},cmp:ue,default:Rt,liveQuery:st,mergeRanges:On,rangesOverlap:or,remove:function(e){return new Hn({remove:e})},replacePrefix:function(e,t){return new Hn({replacePrefix:[e,t]})}}),{default:Rt}),Rt})})(vr)),vr.exports}var Ds=Fs();const Ar=As(Ds),ls=Symbol.for("Dexie"),mr=globalThis[ls]||(globalThis[ls]=Ar);if(Ar.semVer!==mr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ar.semVer} and ${mr.semVer}`);const{liveQuery:Js,mergeRanges:Hs,rangesOverlap:Xs,RangeSet:Qs,cmp:Zs,Entity:ei,PropModification:ti,replacePrefix:ni,add:ai,remove:ri,DexieYProvider:si}=mr,Ke=new mr("haushaltsbuch-db");Ke.version(1).stores({years:"year",fixedTemplateState:"id"});Ke.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Ke.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Ma="singleton";function gr(){return new Date().toISOString()}async function ia(){return Ke.years.orderBy("year").toArray()}async function Is(M){return Ke.years.get(M)}async function sa(M){await Ke.years.put(M)}async function Or(){const M=await Ke.fixedTemplateState.get(Ma);if(!M){const h={id:Ma,templates:[],version:gr(),updatedAt:new Date().toISOString()};return await Ke.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Fr(M){const h=gr();return await Ke.fixedTemplateState.put({id:Ma,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Dr(){const M=await Ke.annualVariableFixedTemplateState.get(Ma);if(!M){const h={id:Ma,templates:[],version:gr(),updatedAt:new Date().toISOString()};return await Ke.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Ir(M){const h=gr();return await Ke.annualVariableFixedTemplateState.put({id:Ma,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Ns(M){await Ke.auditLog.put(M)}async function Nr(){return Ke.auditLog.orderBy("timestampIso").toArray()}async function Ls(M){await Ke.auditLog.clear(),M.length!==0&&await Ke.auditLog.bulkPut(M)}async function qs(){const M=await ia(),[h,Ae,H]=await Promise.all([Or(),Dr(),Nr()]);return{exportedAt:new Date().toISOString(),years:M,fixedTemplates:h.templates,annualVariableFixedTemplates:Ae.templates,auditLogEntries:H}}async function Ks(M){await Ke.transaction("rw",[Ke.years,Ke.fixedTemplateState,Ke.annualVariableFixedTemplateState,Ke.auditLog],async()=>{await Ke.years.clear(),await Ke.years.bulkPut(M.years),await Fr(M.fixedTemplates),await Ir(M.annualVariableFixedTemplates??[]),await Ls(M.auditLogEntries??[])})}function De(M){const h=M.replace(",",".").trim();if(!h)return 0;const Ae=Number.parseFloat(h);return Number.isNaN(Ae)?0:Math.round(Ae*100)}const js=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function w(M){return js.format(M/100)}function vt(M){return(M/100).toFixed(2)}function Se(M){return new Date(2026,M-1,1).toLocaleDateString("de-DE",{month:"long"})}const fs=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function us(M){return fs.includes(M)}function Rs(M){switch(M){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const cs=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Vs(M){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ae="habu-theme",H="habu-backup-dirty",ge="habu-unexported-change-log",re="habu-last-backup-filename",Ce="habu-recurring-budget-defaults";let se=null,be=null,lt=null,je=null,le=!1,mt=!1;const ct=new WeakMap;function dt(){const o=M.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),p=l.getPropertyValue("--table-stripe").trim(),P=l.getPropertyValue("--table-border").trim(),A=l.getPropertyValue("--budget-under").trim(),N=l.getPropertyValue("--danger-2").trim(),L=96,X=250,U=Z=>1-Math.pow(1-Math.max(0,Math.min(1,Z)),3);o.forEach(Z=>{Z.dataset.hoverBound!=="1"&&(Z.dataset.hoverBound="1",Z.addEventListener("mouseenter",()=>{Z.dataset.hovering="1",dt()}),Z.addEventListener("mouseleave",()=>{delete Z.dataset.hovering,delete Z.dataset.hoverX,dt()}),Z.addEventListener("mousemove",we=>{const ye=Z.getBoundingClientRect(),Pe=Math.round(we.clientX-ye.left);Z.dataset.hoverX=String(Pe),dt()}));const R=Number.parseInt(Z.dataset.budgetCents??"0",10),he=Number.parseInt(Z.dataset.actualCents??"0",10),Be=Z.dataset.label??"Kategorie",Ge=Z.dataset.hovering==="1",ne=`${Be}|${R}|${he}`,_e=Z.dataset.lastRenderSignature!==ne;Z.dataset.lastRenderSignature=ne;const Xe=Math.max(120,Math.floor(Z.clientWidth||120)),pe=window.devicePixelRatio||1,Je=Math.floor(Xe*pe),Lt=Math.floor(L*pe);(Z.width!==Je||Z.height!==Lt)&&(Z.width=Je,Z.height=Lt);const O=Z.getContext("2d");if(!O)return;const Re=Math.max(1,R,he),Qe=Math.min(1,Math.max(0,R/Re)),ut=Math.min(1,Math.max(0,he/Re)),Ct=R-he,ie=R>0?he/R*100:he>0?100:0,xt=8,ve=xt,Ve=34,Ye=Xe-xt*2,qe=22,Me=Number.parseInt(Z.dataset.hoverX??"-1",10),Ze=(we,ye,Pe,Oe,et)=>{O.beginPath(),O.moveTo(we+et,ye),O.lineTo(we+Pe-et,ye),O.quadraticCurveTo(we+Pe,ye,we+Pe,ye+et),O.lineTo(we+Pe,ye+Oe-et),O.quadraticCurveTo(we+Pe,ye+Oe,we+Pe-et,ye+Oe),O.lineTo(we+et,ye+Oe),O.quadraticCurveTo(we,ye+Oe,we,ye+Oe-et),O.lineTo(we,ye+et),O.quadraticCurveTo(we,ye,we+et,ye),O.closePath()},Cn=we=>{O.setTransform(1,0,0,1,0,0),O.clearRect(0,0,Z.width,Z.height),O.scale(pe,pe),Ze(ve,Ve,Ye,qe,8),O.fillStyle=p,O.fill(),O.strokeStyle=P,O.lineWidth=1,O.stroke();const ye=[.6,.25,.15],Pe=[.1,.16,.24];let Oe=0;ye.forEach((At,ot)=>{const Et=Ye*At;O.save(),O.globalAlpha=Pe[ot]??.1,O.fillStyle=d,O.fillRect(ve+Oe,Ve,Et,qe),O.restore(),Oe+=Et});const et=R>0&&he>R?N:A,on=Ye*ut*we;Ze(ve,Ve+3,on,qe-6,6),O.fillStyle=et,O.fill(),Ge&&(O.save(),O.strokeStyle=et,O.lineWidth=1.5,O.globalAlpha=.8,Ze(ve-1,Ve+2,Math.max(2,on+2),qe-4,7),O.stroke(),O.restore());const qt=ve+Ye*Qe;O.strokeStyle=f,O.lineWidth=Ge?3:2,O.beginPath(),O.moveTo(qt,Ve-3),O.lineTo(qt,Ve+qe+3),O.stroke(),Ge&&Me>=ve&&Me<=ve+Ye&&(O.save(),O.strokeStyle=f,O.globalAlpha=.35,O.lineWidth=1,O.beginPath(),O.moveTo(Me,Ve-8),O.lineTo(Me,Ve+qe+8),O.stroke(),O.restore()),O.fillStyle=f,O.font="600 12px system-ui, -apple-system, sans-serif",O.textAlign="left",O.textBaseline="top",O.fillText(Be,ve,10);const Xt=ie*we;if(O.fillStyle=ie>100?N:ie<100?A:d,O.textAlign="right",O.fillText(`${Xt.toFixed(0)}%`,ve+Ye,10),O.fillStyle=d,O.font="500 11px system-ui, -apple-system, sans-serif",O.textAlign="left",O.textBaseline="top",O.fillText(`Ist ${w(he)} · Ziel ${w(R)} · Δ ${Ct>=0?"+":""}${w(Ct)}`,ve,64),Ge){const At=`Nutzung ${ie.toFixed(1)}%`;O.font="600 11px system-ui, -apple-system, sans-serif";const ot=8,Et=5,Bt=22,_=O.measureText(At).width+ot*2,q=Number.isFinite(Me)?Me-_/2:ve+Ye-_,at=Math.min(ve+Ye-_,Math.max(ve,q)),xn=Ve-Bt-8;O.save(),O.fillStyle=f,O.globalAlpha=.92,Ze(at,xn,_,Bt,6),O.fill(),O.restore(),O.fillStyle=p,O.textAlign="left",O.textBaseline="top",O.fillText(At,at+ot,xn+Et)}},Ht=ct.get(Z);if(Ht&&window.cancelAnimationFrame(Ht),!_e){Cn(1);return}const it=performance.now(),wt=we=>{const ye=we-it,Pe=Math.min(1,ye/X);if(Cn(U(Pe)),Pe<1){const Oe=window.requestAnimationFrame(wt);ct.set(Z,Oe);return}ct.delete(Z)},Tn=window.requestAnimationFrame(wt);ct.set(Z,Tn)})}function en(){M.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),p=l.querySelector("[data-year-trend-active-net]"),P=l.querySelector("[data-year-trend-active-income]"),A=l.querySelector("[data-year-trend-active-expense]"),N=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!p||!P||!A||!N)return;const X=(R,he)=>{R.classList.remove("danger","budget-under");const Be=he<0?"danger":he>0?"budget-under":"";Be&&R.classList.add(Be)},U=R=>{const he=R.dataset.monthLabel??"-",Be=Number.parseInt(R.dataset.netCents??"0",10),Ge=Number.parseInt(R.dataset.actualNetCents??"0",10),ne=Number.parseInt(R.dataset.incomeCents??"0",10),_e=Number.parseInt(R.dataset.expenseCents??"0",10),Xe=Number.parseInt(R.dataset.deltaCents??"0",10);d.textContent=he,p.textContent=w(Be),P.textContent=w(ne),A.textContent=w(_e),N.textContent=`${Xe>=0?"+":""}${w(Xe)}`,X(p,Be),X(N,Xe),f.forEach(pe=>{const Je=pe===R;pe.classList.toggle("is-active",Je),pe.setAttribute("aria-pressed",String(Je))}),L&&(L.textContent=`${he}: Kalkulierter Saldo ${w(Be)}, Ist-Saldo ${w(Ge)}, Einkommen ${w(ne)}, Ausgaben ${w(_e)}`)};f.forEach(R=>{const he=()=>{U(R)};R.addEventListener("mouseenter",he),R.addEventListener("focus",he),R.addEventListener("click",he)});const Z=f.find(R=>R.dataset.pointDefault==="1")??f[f.length-1];Z&&U(Z)})}function oa(o){if(o==="dashboard"){const l=h.years.slice().sort((d,p)=>p.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ae()}function Pa(){h.topModal&&(h.topModal=null,ae())}function la(){h.showUnexportedChangeLogModal=!0,ae()}function ua(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ae())}function Nn(){h.showPersistentAuditLogModal=!0,ae()}function ca(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ae())}function zt(){le||(le=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),ua();return}if(h.showPersistentAuditLogModal){o.preventDefault(),ca();return}h.topModal&&(o.preventDefault(),Pa())}}))}function ft(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ta(){const o=M.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",ft())}function br(){if(mt)return;mt=!0;const o=()=>{Ta(),dt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Aa(){if(se&&document.body.contains(se))return se;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return se=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),se=l,l}function Ga(){if(be&&document.body.contains(be))return be;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return be=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),be=l,l}function Ln(){if(je&&document.body.contains(je))return je;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return je=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),je=l,l}function ht(){if(!be){lt=null;return}be.innerHTML="",lt=null}function qn(){je&&(je.innerHTML="")}function Oa(o,l,f){const d=new Date,p=d.getFullYear(),P=d.getMonth()+1,A=d.getDate(),N=new Date(o,l,0).getDate();if(o<p||o===p&&l<P)return{occurrences:0,remainingDays:0};const L=o===p&&l===P?Math.min(A,N):1,X=Math.max(0,N-L+1);let U=0;for(let Z=L;Z<=N;Z+=1)new Date(o,l-1,Z).getDay()===f&&(U+=1);return{occurrences:U,remainingDays:X}}async function Fa(o,l){const f=Ne();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await We(`Wocheneinkauf geplant: ${cs.find(d=>d.value===o)?.label??"Wochentag"} mit ${w(f.weeklyShoppingEstimateCents)} €`),ae())}function yr(){const o=Ne(),l=Ut();if(!o||!l)return;const f=Ln();qn();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,p=o.weeklyShoppingEstimateCents??0,P=l.year,A=o.month,N=Rn(P,A),L=N?nt(N):{foodCents:0},X=N?N.foodBudgetCents??0:0,U=L.foodCents,Z=X-U;f.innerHTML=`
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
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${vt(p)}" />
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
    `;const R=f.querySelector(".weekly-shopping-modal-backdrop"),he=f.querySelector("#weekly-shopping-weekday"),Be=f.querySelector("#weekly-shopping-estimate"),Ge=f.querySelector("#weekly-shopping-occurrences"),ne=f.querySelector("#weekly-shopping-total"),_e=f.querySelector("#weekly-shopping-rest-before"),Xe=f.querySelector("#weekly-shopping-rest-after"),pe=f.querySelector("#weekly-shopping-days-left"),Je=f.querySelector("#weekly-shopping-per-day"),Lt=f.querySelector("#weekly-shopping-cancel"),O=f.querySelector("#weekly-shopping-save");function Re(){const ie=Number.parseInt(he?.value??"1",10);return Number.isInteger(ie)&&ie>=0&&ie<=6?ie:1}function Qe(){return Math.max(0,De(Be?.value??"0"))}function ut(){const ie=Re(),xt=Qe(),{occurrences:ve,remainingDays:Ve}=Oa(P,A,ie),Ye=ve*xt,qe=Z-Ye,Me=Ve>0?Math.trunc(qe/Ve):0;Ge&&(Ge.textContent=`${ve}`),ne&&(ne.textContent=`${w(Ye)} €`),_e&&(_e.textContent=`${w(Z)} €`),Xe&&(Xe.textContent=`${w(qe)} €`,Xe.className=qe<0?"danger":qe>0?"budget-under":""),pe&&(pe.textContent=`${Ve}`),Je&&(Je.textContent=`${w(Me)} €`,Je.className=Me<0?"danger":Me>0?"budget-under":"")}async function Ct(){await Fa(Re(),Qe()),qn()}Lt?.addEventListener("click",()=>{qn()}),O?.addEventListener("click",async()=>{await Ct()}),he?.addEventListener("change",()=>{ut()}),Be?.addEventListener("input",()=>{ut()}),Be?.addEventListener("keydown",async ie=>{if(ie.key==="Escape"){ie.preventDefault(),qn();return}ie.key==="Enter"&&(ie.preventDefault(),await Ct())}),R?.addEventListener("click",ie=>{ie.target===R&&qn()}),window.setTimeout(()=>{Be?.focus(),Be?.select(),ut()},0)}function tn(o,l){let f=o;const d=l.min;if(d){const P=Number.parseFloat(d);if(!Number.isNaN(P)){const A=Math.round(P*100);f=Math.max(f,A)}}const p=l.max;if(p){const P=Number.parseFloat(p);if(!Number.isNaN(P)){const A=Math.round(P*100);f=Math.min(f,A)}}return f}function tt(o){if(o.disabled)return;const l=Ga();ht(),lt=o;const f=De(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
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
    `;const p=l.querySelector(".amount-modal-backdrop"),P=l.querySelector("#amount-modal-delta"),A=l.querySelector("#amount-modal-next-delta"),N=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),X=l.querySelector("#amount-modal-overwrite"),U=l.querySelector("#amount-modal-apply");function Z(){const ne=De(P?.value??"0");return tn(f+ne,o)}function R(){const ne=De(P?.value??"0");return tn(ne,o)}function he(){A&&(A.textContent=`${w(Z())} €`),N&&(N.textContent=`${w(R())} €`)}function Be(){const ne=lt;if(!ne){ht();return}const _e=Z();ht(),ne.value=vt(_e),ne.dispatchEvent(new Event("change",{bubbles:!0}))}function Ge(){const ne=lt;if(!ne){ht();return}const _e=R();ht(),ne.value=vt(_e),ne.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{ht()}),X?.addEventListener("click",()=>{Ge()}),U?.addEventListener("click",()=>{Be()}),P?.addEventListener("input",()=>{he()}),P?.addEventListener("keydown",ne=>{if(ne.key==="Escape"){ne.preventDefault(),ht();return}ne.key==="Enter"&&(ne.preventDefault(),Be())}),p?.addEventListener("click",ne=>{ne.target===p&&ht()}),window.setTimeout(()=>{P?.focus(),P?.select(),he()},0)}function de(o,l="success"){const f=Aa(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const p=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},p)}function cn(){return new Date().getMonth()+1}function Dt(){return new Date().getFullYear()}function Ja(o){const l=Dt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function dn(){return new Date().toISOString().slice(0,10)}function Ha(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function It(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function En(){const o=localStorage.getItem(Ae);return o&&us(o)?o:"light"}function da(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Ae,o)}function Cr(){return localStorage.getItem(H)==="1"}function ee(o){localStorage.setItem(H,o?"1":"0")}function Xa(){const o=localStorage.getItem(ge);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function xe(o){localStorage.setItem(ge,JSON.stringify(o.slice(-200)))}function Kn(){const o=localStorage.getItem(re);if(!o)return null;const l=o.trim();return l||null}function xr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(Ce);if(!l)return o;try{const f=JSON.parse(l),d=p=>typeof p=="number"&&Number.isFinite(p)?p:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function fn(o){localStorage.setItem(Ce,JSON.stringify(o))}function Qa(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function wr(o){const l=o.trim();l&&localStorage.setItem(re,l)}async function kr(){Aa(),da(En()),h.hasUnexportedChanges=Cr(),h.unexportedChangeLog=Xa(),h.persistentAuditLog=await Nr(),h.lastBackupFileName=Kn(),h.recurringBudgetDefaults=xr(),zt(),br();const[o,l,f]=await Promise.all([ia(),Or(),Dr()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Da(h.years),vn(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Ia(h.years),o.length>0&&(h.selectedYear=Ja(o),h.selectedMonth=cn()),ae()}function Da(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const p=Number(d.weeklyShoppingWeekday);Number.isInteger(p)&&p>=0&&p<=6?d.weeklyShoppingWeekday=p:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(p=>{const P=l(p.incomeSource);if(!P){const{incomeSource:A,...N}=p;return N}return{...p,incomeSource:P}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((p,P)=>p+P.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((p,P)=>p+P.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function jn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function gt(o){return o==="fresh"||o==="salary"||!o}async function Ia(o){for(const l of o)await sa(l)}function Ut(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ne(){const o=Ut();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function Rn(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function nt(o){const l=o.days.reduce((N,L)=>N+L.foodCents,0),f=o.days.reduce((N,L)=>N+L.goingOutCents,0),d=o.fixedCosts.reduce((N,L)=>N+L.actualCents,0),p=o.variableCosts.reduce((N,L)=>N+L.amountCents,0)+o.variablePositions.reduce((N,L)=>N+L.actualCents,0),P=o.miscCosts.reduce((N,L)=>N+L.amountCents,0),A=l+f+d+p+P;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:P,totalCents:A}}function Nt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((A,N)=>A+N.plannedCents,0),p=o.variablePositions.reduce((A,N)=>A+N.budgetCents,0),P=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??p)+P}function Bn(o){return o.months.reduce((l,f)=>{const d=nt(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Vn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:nt(l)}))}function Yn(o){const l=o.months.reduce((A,N)=>A+(N.foodBudgetCents??0),0),f=o.months.reduce((A,N)=>A+(N.goingOutBudgetCents??0),0),d=o.months.reduce((A,N)=>A+(N.fixedBudgetCents??N.fixedCosts.reduce((L,X)=>L+X.plannedCents,0)),0),p=o.months.reduce((A,N)=>A+(N.variableBudgetCents??N.variablePositions.reduce((L,X)=>L+X.budgetCents,0)),0),P=o.months.reduce((A,N)=>A+(N.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:P,totalCents:l+f+d+p+P}}function _n(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,p)=>d+(gt(p.incomeSource)?p.amountCents:0),0),0)}function Wt(o,l){const f=o.months.slice().sort((d,p)=>d.month-p.month)[0];return f?l.get(fe(o.year,f.month))?.carriedFromPreviousCents??0:0}function fa(){const o=h.years.slice().sort((d,p)=>d.year-p.year).flatMap(d=>d.months.slice().sort((p,P)=>p.month-P.month).map(p=>({year:d.year,month:p}))),l=new Map;let f=0;return o.forEach(({year:d,month:p},P)=>{const A=p.carryoverOverrideCents,N=typeof A=="number",L=N?A:f,X=P>0||N,U=p.incomes.reduce((Be,Ge)=>Be+(gt(Ge.incomeSource)?Ge.amountCents:0),0),Z=Nt(p),R=U+L,he=R-Z;l.set(fe(d,p.month),{hasPreviousMonth:X,carriedFromPreviousCents:L,recordedIncomeCents:U,effectiveIncomeCents:R,plannedBudgetCents:Z,netCents:he}),f=he}),l}function pt(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function nn(o){return`${o>0?"+":""}${w(o)}`}function J(o,l){const f=o-l,d=pt(l,o);return`${w(o)} <span class="eval-diff ${d}">(Δ ${nn(f)})</span>`}function Gt(o,l){const f=o!==null,d=f?o-l:null,p=f?pt(l,o):"";return`<div class="column-overview">
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
    </div>`}async function hn(o){if(await Is(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=rs(o,h.fixedTemplates,h.fixedTemplateVersion);Qa(f),Na(f),await sa(f),h.years=await ia(),pn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=cn(),de(`Jahr ${o} wurde angelegt.`),ae()}function pn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,p={id:Tt("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,p].slice(-200),xe(h.unexportedChangeLog);const P={id:Tt("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,P].slice().sort((A,N)=>A.timestampIso.localeCompare(N.timestampIso)),Ns(P).catch(A=>{console.error("Audit-Log konnte nicht gespeichert werden",A),de("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function z(o){const l=o.trim();l&&(h.lastBackupFileName=l,wr(l))}function ha(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],xe([]),h.showUnexportedChangeLogModal=!1,z(o)}async function We(o){const l=Ut();l&&(await sa(l),h.years=await ia(),pn(o))}async function bt(o){for(const l of h.years)await sa(l);h.years=await ia(),pn(o)}function fe(o,l){return o*100+l}function zn(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Za(o,l){const f=zn(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(P=>P.month===f.month);!d||d.variablePositions.some(P=>P.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Tt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],St(d))}function Na(o){h.annualVariableFixedTemplates.forEach(l=>{Za(l,o)})}function vn(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const p=d.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),P=d.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");p&&(d.variablePositions=d.variablePositions.filter(A=>A.autoAnnualTemplateId?l.has(A.autoAnnualTemplateId):!0),St(d)),P&&(d.fixedCosts=d.fixedCosts.filter(A=>!A.autoAnnualTemplateId),yt(d))}),Na(f)})}function yt(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function St(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function pa(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function Ee(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",pa());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function He(o,l){const f=fe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{if(fe(d.year,p.month)<f)return;p.fixedCosts.some(A=>A.templateId===o.id)||(p.fixedCosts.push({id:Tt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),yt(p))})})}function $r(o,l,f){const d=fe(f.year,f.month);h.years.forEach(p=>{p.months.forEach(P=>{fe(p.year,P.month)<d||(P.fixedCosts=P.fixedCosts.map(A=>A.templateId!==l.id?A:{...A,name:l.name,plannedCents:l.plannedCents,actualCents:A.actualCents===o.plannedCents?l.plannedCents:A.actualCents}),yt(P))})})}function va(o,l){const f=fe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{fe(d.year,p.month)<f||(p.fixedCosts=p.fixedCosts.filter(P=>P.templateId!==o),yt(p))})})}async function ma(o,l){const f=o.trim();if(!f)return;const d=Ee();if(!d)return;const p=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const P=h.fixedTemplates.find(N=>N.id===h.editingFixedTemplateId);if(!P)return;const A={...P,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(N=>N.id===h.editingFixedTemplateId?A:N),$r(P,A,d)}else{const P={id:Tt("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,P],He(P,d)}h.fixedTemplateVersion=await Fr(h.fixedTemplates),h.editingFixedTemplateId=null,await bt(p?`Fixkosten-Vorlage aktualisiert: ${f} (${w(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${w(l)} €)`),de(p?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function ga(o){h.editingFixedTemplateId=o,ae()}function Sr(){h.editingFixedTemplateId=null,ae()}async function an(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=Ee();if(!f)return;const d=h.fixedTemplates.find(p=>p.id===o);h.fixedTemplates=h.fixedTemplates.filter(p=>p.id!==o),va(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Fr(h.fixedTemplates),await bt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),de("Fixkosten-Vorlage wurde gelöscht."),ae()}async function Mn(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const p=zn(l);if(!p){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P={id:Tt("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,P],h.years.forEach(A=>{Za(P,A)}),h.annualVariableFixedTemplateVersion=await Ir(h.annualVariableFixedTemplates),await bt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${w(f)} €, jährlich in ${Se(p.month)})`),de("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function rn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(p=>{p.variablePositions=p.variablePositions.filter(P=>P.autoAnnualTemplateId!==o),St(p),p.fixedCosts=p.fixedCosts.filter(P=>P.autoAnnualTemplateId!==o),yt(p)})}),h.annualVariableFixedTemplateVersion=await Ir(h.annualVariableFixedTemplates),await bt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),de("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function Un(o,l,f){const d=Ne();d&&(d.days=d.days.map(p=>p.isoDate===o?{...p,[l]:f}:p),await We(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${w(f)} €`),ae())}async function Er(o,l){const f=Ne();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,actualCents:l}:p),await We(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function sn(o,l){const f=Ne();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,plannedCents:l}:p),yt(f),await We(`Fixkosten-Budget angepasst: ${d.name} auf ${w(l)} €`),ae())}async function er(o,l){const f=Ne();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const p={id:Tt("fixed"),templateId:Tt("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[p,...f.fixedCosts],yt(f),await We(`Fixkosten-Position hinzugefügt: ${d} (${w(l)} €)`),de("Fixkosten-Position wurde hinzugefügt."),ae()}async function mn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Ne();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(p=>p.id!==o),yt(f),await We(`Fixkosten-Position gelöscht: ${d.name}`),de("Fixkosten-Position wurde gelöscht."),ae())}async function tr(o){await Pn("fixedBudgetCents",o,"Fixkosten")}async function La(o){await Pn("foodBudgetCents",o,"Essen")}async function Le(o){await Pn("goingOutBudgetCents",o,"Ausgehen")}async function gn(o){await Pn("miscBudgetCents",o,"Sonstiges")}async function Jt(o){await Pn("variableBudgetCents",o,"Variable Kosten")}async function Pn(o,l,f){const d=Ne(),p=h.selectedYear;if(!d||!p||d[o]===l)return;if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const A=fe(p,h.selectedMonth);h.years.forEach(N=>{N.months.forEach(L=>{fe(N.year,L.month)<=A||(L[o]=l)})}),h.recurringBudgetDefaults[o]=l,fn(h.recurringBudgetDefaults),await bt(`Budget "${f}" auf ${w(l)} € gesetzt (inkl. zukünftiger Monate)`),de(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ae();return}await We(`Budget "${f}" auf ${w(l)} € gesetzt`),ae()}async function bn(o){const l=Ne();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await We(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${w(o)} € gesetzt`),ae())}async function Wn(o,l,f){const d=Ne(),p=h.selectedYear;if(!d||!p)return;const P=o.trim();if(!P){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Tt("varpos"),name:P,budgetCents:l,actualCents:0},...d.variablePositions],St(d),f){const A=fe(p,h.selectedMonth);h.years.forEach(N=>{N.months.forEach(L=>{fe(N.year,L.month)<=A||(L.variablePositions=[{id:Tt("varpos"),name:P,budgetCents:l,actualCents:0},...L.variablePositions],St(L))})}),await bt(`Variable Position hinzugefügt: ${P} (${w(l)} €) für zukünftige Monate`),de("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await We(`Variable Position hinzugefügt: ${P} (${w(l)} €)`),de("Variable Position wurde hinzugefügt."),ae()}async function qa(o,l){const f=Ne();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,actualCents:l}:p),await We(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function Ka(o,l){const f=Ne();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,budgetCents:l}:p),St(f),await We(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function yn(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Ne(),d=h.selectedYear;if(!f||!d)return;const p=f.variablePositions.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),N=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.variablePositions.some(U=>U.name===p.name&&U.budgetCents===p.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),St(f),N){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.variablePositions=X.variablePositions.filter(U=>!(U.name===p.name&&U.budgetCents===p.budgetCents)),St(X))})}),await bt(`Variable Position gelöscht: ${p.name} (inkl. zukünftiger Monate)`),de("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await We(`Variable Position gelöscht: ${p.name}`),de("Variable Position wurde gelöscht."),ae()}async function nr(o){const l=Ne(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(U=>U.id===o);if(!d)return;const p={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let P=h.years.find(U=>U.year===p.year);if(!P){const U=rs(p.year,h.fixedTemplates,h.fixedTemplateVersion);Qa(U),Na(U),await sa(U),h.years=[...h.years,U].sort((Z,R)=>Z.year-R.year),P=U}const A=P.months.find(U=>U.month===p.month);if(!A)return;const N=A.variablePositions.some(U=>U.id===d.id||U.name===d.name&&U.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(U=>U.id!==o),St(l),!N){const Z=A.variablePositions.some(R=>R.id===d.id)?{...d,id:Tt("varpos")}:d;A.variablePositions=[Z,...A.variablePositions],St(A)}const L=`${Se(p.month)} ${p.year}`,X=`Variable Position verschoben: ${d.name} → ${L}`;if(p.year===f)await We(X);else{const U=Ut();if(!U)return;await sa(U),await sa(P),h.years=await ia(),Da(h.years),pn(X)}de(N?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),ae()}async function Gn(o,l,f){const d=Ne(),p=h.selectedYear;if(!d||!p)return;const P=o.trim();if(!P){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=ss(P,l);if(d.miscCosts=[A,...d.miscCosts],f){const N=fe(p,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=N||(X.miscCosts=[ss(P,l),...X.miscCosts])})}),await bt(`Sonstige Position hinzugefügt: ${P} (${w(l)} €) für zukünftige Monate`),de("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await We(`Sonstige Position hinzugefügt: ${P} (${w(l)} €)`),de("Sonstige Position wurde hinzugefügt."),ae()}async function ar(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Ne(),d=h.selectedYear;if(!f||!d)return;const p=f.miscCosts.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),N=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.miscCosts.some(U=>U.description===p.description&&U.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),N){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.miscCosts=X.miscCosts.filter(U=>!(U.description===p.description&&U.amountCents===p.amountCents)))})}),await bt(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),de("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await We(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €)`),de("Sonstige Position wurde gelöscht."),ae()}async function ue(o,l,f,d){const p=Ne(),P=h.selectedYear;if(!p||!P)return;const A=o.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const N=is(A,l,f);if(p.incomes=[N,...p.incomes],d){const L=fe(P,h.selectedMonth);h.years.forEach(X=>{X.months.forEach(U=>{fe(X.year,U.month)<=L||(U.incomes=[is(A,l,f),...U.incomes])})}),await bt(`Einkommen hinzugefügt: ${A} (${w(l)} €, ${jn(f)}) für zukünftige Monate`),de("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await We(`Einkommen hinzugefügt: ${A} (${w(l)} €, ${jn(f)})`),de("Einkommen wurde hinzugefügt."),ae()}async function rr(o,l){const f=Ne();if(!f)return;const d=f.incomes.find(p=>p.id===o);d&&(f.incomes=f.incomes.map(p=>{if(p.id!==o)return p;if(!l){const{incomeSource:P,...A}=p;return A}return{...p,incomeSource:l}}),await We(`Einkommensart angepasst: ${d.description} → ${jn(l)}`),ae())}async function sr(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Ne(),d=h.selectedYear;if(!f||!d)return;const p=f.incomes.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),N=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.incomes.some(U=>U.description===p.description&&U.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),N){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.incomes=X.incomes.filter(U=>!(U.description===p.description&&U.amountCents===p.amountCents)))})}),await bt(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),de("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await We(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €)`),de("Einkommen wurde gelöscht."),ae()}async function Jn(){const o=await qs(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${dn()}-${Ha()}.json`,p=document.createElement("a");p.href=f,p.download=d,p.click(),URL.revokeObjectURL(f),ha(d),ae(),de("Backup wurde exportiert.")}async function Hn(o){const l=await o.text(),f=JSON.parse(l);await Ks(f);const[d,p,P]=await Promise.all([ia(),Or(),Dr()]);h.years=d,h.annualVariableFixedTemplates=P.templates,h.annualVariableFixedTemplateVersion=P.version,Da(h.years),vn(h.years),h.fixedTemplates=p.templates,h.fixedTemplateVersion=p.version,await Ia(h.years),h.persistentAuditLog=await Nr(),h.selectedYear=Ja(d),h.selectedMonth=cn(),ha(o.name),de("Backup wurde importiert."),ae()}function ae(){const o=Ut(),l=Ne(),f=dn(),d=l?nt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},p=o?Bn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},P=o?Vn(o):[],A=l?l.foodBudgetCents??0:0,N=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,E)=>r+E.plannedCents,0):0,X=l?l.variableBudgetCents??l.variablePositions.reduce((r,E)=>r+E.budgetCents,0):0,U=l?l.miscBudgetCents??0:0,Z=o?o.months.reduce((r,E)=>r+(E.foodBudgetCents??0),0):0,R=o?o.months.reduce((r,E)=>r+(E.goingOutBudgetCents??0),0):0,he=o?o.months.reduce((r,E)=>r+(E.fixedBudgetCents??E.fixedCosts.reduce((V,Q)=>V+Q.plannedCents,0)),0):0,Be=o?o.months.reduce((r,E)=>r+(E.variableBudgetCents??E.variablePositions.reduce((V,Q)=>V+Q.budgetCents,0)),0):0,Ge=o?o.months.reduce((r,E)=>r+(E.miscBudgetCents??0),0):0,ne=l?l.incomes.reduce((r,E)=>r+(gt(E.incomeSource)?E.amountCents:0),0):0,_e=l?l.incomes.reduce((r,E)=>r+(E.incomeSource==="salary"?E.amountCents:0),0):0,Xe=l?l.incomes.reduce((r,E)=>r+(E.incomeSource==="fresh"?E.amountCents:0),0):0,pe=fa(),Je=o?pe.get(fe(o.year,h.selectedMonth)):void 0,Lt=o?o.months.slice().sort((r,E)=>r.month-E.month)[0]:void 0,O=Je?.carriedFromPreviousCents??0,Re=Je?.hasPreviousMonth??!1,Qe=Je?.effectiveIncomeCents??ne,ut=l?Nt(l):0,Ct=Je?.netCents??ne-ut,ie=Qe-d.totalCents,xt=_e-d.totalCents,ve=d.totalCents>0?`${(_e/d.totalCents*100).toFixed(1)} %`:"-",Ve=O<0?"danger":O>0?"budget-under":"",Ye=Ct<0?"danger":Ct>0?"budget-under":"",qe=ie<0?"danger":ie>0?"budget-under":"",Me=o?o.months.reduce((r,E)=>r+E.incomes.reduce((V,Q)=>V+(gt(Q.incomeSource)?Q.amountCents:0),0),0):0,Ze=o?o.months.reduce((r,E)=>r+E.incomes.reduce((V,Q)=>V+(Q.incomeSource==="salary"?Q.amountCents:0),0),0):0,Cn=o?o.months.reduce((r,E)=>r+E.incomes.reduce((V,Q)=>V+(Q.incomeSource==="fresh"?Q.amountCents:0),0),0):0,Ht=o&&Lt?pe.get(fe(o.year,Lt.month))?.carriedFromPreviousCents??0:0,it=Me+Ht,wt=it-p.totalCents,Tn=Ze-p.totalCents,we=p.totalCents>0?`${(Ze/p.totalCents*100).toFixed(1)} %`:"-",ye=Ht<0?"danger":Ht>0?"budget-under":"",Pe=wt<0?"danger":wt>0?"budget-under":"",Oe=A+N+L+X+U,et=A+N,on=d.foodCents+d.goingOutCents,qt=et-on,Xt=pt(on,et),At=Z+R+he+Be+Ge,ot=Qe-Oe,Et=it-At,Bt=Oe-d.totalCents,Xn=At-p.totalCents,_=r=>r<0?"danger":r>0?"budget-under":"",q=(r,E)=>E<=0?"muted":r>=E?"budget-under":"danger",at=q(_e,d.totalCents),xn=q(Ze,p.totalCents),Te=(r,E)=>{if(E<=0)return"0%";const Q=Math.max(0,r)/E*100;return`${Math.min(100,Math.max(0,Q)).toFixed(1)}%`},ja=(r,E)=>{if(E<=0)return r>0?100:0;const V=Math.max(0,r)/E*100;return Math.max(0,V)},rt=[{label:"Essen",budgetCents:A,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:N,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:X,actualCents:d.variableCents},{label:"Sonstige",budgetCents:U,actualCents:d.miscCents}];Math.max(1,...rt.flatMap(r=>[r.budgetCents,r.actualCents]));const An=(r,E)=>E<=0?"bar-positive":r<=0||E>r?"bar-negative":"bar-positive",On=[{label:"Einkommen gesamt",valueCents:Qe,className:"bar-income"},{label:"Budget gesamt",valueCents:Oe,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ie,className:ie<0?"bar-negative":"bar-positive"}],or=Math.max(1,...On.map(r=>Math.abs(r.valueCents))),ba=o?o.months.slice().sort((r,E)=>r.month-E.month).map(r=>{const E=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,Q=r.fixedBudgetCents??r.fixedCosts.reduce((Yt,Ue)=>Yt+Ue.plannedCents,0),$e=r.variableBudgetCents??r.variablePositions.reduce((Yt,Ue)=>Yt+Ue.budgetCents,0),ze=r.miscBudgetCents??0,Mt=E+V+Q+$e+ze;return{month:r.month,foodBudgetCents:E,goingOutBudgetCents:V,fixedBudgetCents:Q,variableBudgetCents:$e,miscBudgetCents:ze,totalBudgetCents:Mt}}):[],Ot=new Map(ba.map(r=>[r.month,r])),Kt=r=>{if(r.length===0)return null;const E=Math.min(...r),V=Math.max(...r),Q=Math.round(r.reduce(($e,ze)=>$e+ze,0)/r.length);return{min:E,avg:Q,max:V}},_t=o&&o.year===Dt()?P.filter(r=>r.month<=cn()):P,ya=_t.map(r=>r.summary.foodCents),ln=_t.map(r=>r.summary.goingOutCents),Ca=_t.map(r=>r.summary.fixedCents),xa=_t.map(r=>r.summary.variableCents),Qn=_t.map(r=>r.summary.miscCents),wa=_t.map(r=>r.summary.totalCents),Ra=_t.map(r=>o?pe.get(fe(o.year,r.month))?.plannedBudgetCents??0:0),Br=_t.map(r=>o?pe.get(fe(o.year,r.month))?.netCents??0:0),Zn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((E,V)=>E+(V.incomeSource==="salary"?V.amountCents:0),0)])),ea=_t.map(r=>Zn.get(r.month)??0),Qt={food:Kt(ya),goingOut:Kt(ln),fixed:Kt(Ca),variable:Kt(xa),misc:Kt(Qn),total:Kt(wa),salary:Kt(ea),budget:Kt(Ra),net:Kt(Br)},Va=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],jt={food:ya.reduce((r,E)=>r+E,0),goingOut:ln.reduce((r,E)=>r+E,0),fixed:Ca.reduce((r,E)=>r+E,0),variable:xa.reduce((r,E)=>r+E,0),misc:Qn.reduce((r,E)=>r+E,0),total:wa.reduce((r,E)=>r+E,0),salary:ea.reduce((r,E)=>r+E,0),budget:Ra.reduce((r,E)=>r+E,0)},_r=Va.map(({key:r,label:E})=>{const V=Qt.food?.[r]??null,Q=Qt.goingOut?.[r]??null,$e=Qt.fixed?.[r]??null,ze=Qt.variable?.[r]??null,Mt=Qt.misc?.[r]??null,Yt=Qt.total?.[r]??null,Ue=Qt.salary?.[r]??null,$n=Qt.budget?.[r]??null,Sn=Qt.net?.[r]??null,Pt=ra=>ra===null?"-":w(ra);return`<tr>
                  <td><strong>${E}</strong></td>
                  <td>${Pt(V)}</td>
                  <td>${Pt(Q)}</td>
                  <td>${Pt($e)}</td>
                  <td>${Pt(ze)}</td>
                  <td>${Pt(Mt)}</td>
                  <td>${Pt(Yt)}</td>
                  <td>${Pt(Ue)}</td>
                  <td>${Pt($n)}</td>
                  <td>${Pt(Sn)}</td>
                </tr>`}).join(""),lr=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${w(jt.food)}</td>
                  <td>${w(jt.goingOut)}</td>
                  <td>${w(jt.fixed)}</td>
                  <td>${w(jt.variable)}</td>
                  <td>${w(jt.misc)}</td>
                  <td>${w(jt.total)}</td>
                  <td>${w(jt.salary)}</td>
                  <td>${w(jt.budget)}</td>
                </tr>`,ur=Math.max(1,...P.flatMap(r=>{const E=Ot.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,E??0]})),Ya=Math.max(1,...P.flatMap(r=>{const E=Ot.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,Q=(E?.foodBudgetCents??0)+(E?.goingOutBudgetCents??0);return[V,Q]})),za=Math.max(1,...P.flatMap(r=>{const E=Ot.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,E]})),cr=Math.max(1,...P.flatMap(r=>{const E=Ot.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,E]})),Ua=Math.max(1,...P.flatMap(r=>{const E=Ot.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,E]})),Wa=pt(d.fixedCents,L),dr=pt(d.foodCents,A),fr=pt(d.goingOutCents,N),Mr=pt(d.variableCents,X),Pr=pt(d.miscCents,U),ta=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,ka=h.hasUnexportedChanges,Rt=h.unexportedChangeLog.slice().reverse(),Ie=h.persistentAuditLog.slice().sort((r,E)=>E.timestampIso.localeCompare(r.timestampIso)),$a=h.lastBackupFileName?It(h.lastBackupFileName):"-",Fn={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},kt=h.years.slice().sort((r,E)=>r.year-E.year),Dn=kt.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??kt[kt.length-1]?.year??null,st=typeof Dn=="number"?kt.find(r=>r.year===Dn):void 0,wn=st?st.months.slice().sort((r,E)=>r.month-E.month):[],Zt=st?Bn(st):Fn,Vt=st?Yn(st):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},un=st?_n(st):0,hr=st?Wt(st,pe):0,e=un+hr,t=st?st.months.reduce((r,E)=>r+Nt(E),0):0,n=e-t,a=e-Zt.totalCents,s=[{label:"Essen",budgetCents:Vt.foodCents,actualCents:Zt.foodCents},{label:"Ausgehen",budgetCents:Vt.goingOutCents,actualCents:Zt.goingOutCents},{label:"Fixkosten",budgetCents:Vt.fixedCents,actualCents:Zt.fixedCents},{label:"Variable",budgetCents:Vt.variableCents,actualCents:Zt.variableCents},{label:"Sonstige",budgetCents:Vt.miscCents,actualCents:Zt.miscCents}],i=wn.map(r=>{const E=st?pe.get(fe(st.year,r.month)):void 0,V=nt(r),Q=r.incomes.reduce((ra,pr)=>ra+pr.amountCents,0),$e=E?.effectiveIncomeCents??Q,ze=E?.plannedBudgetCents??Nt(r),Mt=V.foodCents,Yt=V.goingOutCents,Ue=Mt+Yt,$n=V.totalCents,Sn=$e-ze,Pt=$e-$n;return{month:r.month,foodCents:Mt,goingOutCents:Yt,foodAndGoingOutCents:Ue,effectiveIncomeCents:$e,plannedBudgetCents:ze,actualCostCents:$n,plannedNetCents:Sn,actualNetCents:Pt}}),u=Math.max(1,...i.map(r=>r.actualCostCents)),c=Math.max(1,...i.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),y=Math.max(1,...i.map(r=>r.foodAndGoingOutCents)),$=Math.max(1,...i.map(r=>r.foodCents)),C=Math.max(1,...i.map(r=>r.goingOutCents)),v=i.map((r,E,V)=>{const Q=E>0?V[E-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Se(r.month),monthShortLabel:Se(r.month).slice(0,3),deltaCents:r.plannedNetCents-Q}}),m=v[v.length-1]??null,x=Math.min(0,...v.map(r=>r.plannedNetCents)),g=Math.max(0,...v.map(r=>r.plannedNetCents)),b=Math.max(1,g-x),S=720,B=320,k=18,T=18,F=38,K=56,j=S-K-T,D=B-k-F,W=r=>{if(v.length<=1)return K+j/2;const E=r/(v.length-1);return K+E*j},Y=r=>k+(g-r)/b*D,I=v.map((r,E)=>{const V=W(E),Q=Y(r.plannedNetCents);return{...r,x:V,y:Q,leftPercent:V/S*100,topPercent:Q/B*100}}),G=I.map((r,E)=>`${E===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),ce=I.length>0?`${G} L ${I[I.length-1]?.x.toFixed(1)} ${(k+D).toFixed(1)} L ${I[0]?.x.toFixed(1)} ${(k+D).toFixed(1)} Z`:"",me=5,te=Array.from({length:me},(r,E)=>{const V=E/(me-1),Q=g-V*b;return{valueCents:Math.round(Q/100)*100,y:Y(Q)}}),oe=Y(0),Fe=v[0]?.plannedNetCents??0,ke=(v[v.length-1]?.plannedNetCents??0)-Fe,kn=ke<0?"trend-badge-negative":ke>0?"trend-badge-positive":"trend-badge-neutral",Sa=ke<0?"↘":ke>0?"↗":"→",ps=ke<0?"Abwärtstrend":ke>0?"Aufwärtstrend":"Seitwärts",na=kt.reduce((r,E)=>{const V=Yn(E);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),aa=kt.reduce((r,E)=>{const V=Bn(E);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),vs=kt.reduce((r,E)=>r+_n(E),0),ms=kt[0]?Wt(kt[0],pe):0,Tr=vs+ms,qr=Tr-na.totalCents,Kr=Tr-aa.totalCents,jr=[{label:"Essen",budgetCents:na.foodCents,actualCents:aa.foodCents},{label:"Ausgehen",budgetCents:na.goingOutCents,actualCents:aa.goingOutCents},{label:"Fixkosten",budgetCents:na.fixedCents,actualCents:aa.fixedCents},{label:"Variable",budgetCents:na.variableCents,actualCents:aa.variableCents},{label:"Sonstige",budgetCents:na.miscCents,actualCents:aa.miscCents}],Rr=Math.max(1,...jr.flatMap(r=>[r.budgetCents,r.actualCents])),Ea=kt.map(r=>{const E=Bn(r),V=Yn(r),Q=_n(r),$e=r.months.reduce((Yt,Ue)=>Yt+Ue.incomes.reduce(($n,Sn)=>$n+(Sn.incomeSource==="salary"?Sn.amountCents:0),0),0),ze=Wt(r,pe),Mt=Q+ze;return{year:r.year,salaryIncomeCents:$e,budgetTotalCents:V.totalCents,actualTotalCents:E.totalCents,effectiveIncomeCents:Mt,plannedNetCents:Mt-V.totalCents,actualNetCents:Mt-E.totalCents}}),Vr=Math.max(1,...Ea.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),gs=Math.max(1,...Ea.map(r=>r.actualTotalCents)),bs=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${kt.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${kt.map(r=>`<option value="${r.year}" ${r.year===Dn?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${st?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w(e)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(t)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(Zt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(n)}">${w(n)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(a)}">${w(a)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Sa}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${kn}">${Sa} ${ps}</span>
                    </div>
                  </header>
                  ${m?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${It(m.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${_(m.plannedNetCents)}" data-year-trend-active-net>${w(m.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${w(m.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${w(m.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${_(m.deltaCents)}" data-year-trend-active-delta>${m.deltaCents>=0?"+":""}${w(m.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${S} ${B}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${st?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${te.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${K}" y1="${r.y.toFixed(1)}" x2="${S-T}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${K-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${w(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${K}" y1="${oe.toFixed(1)}" x2="${S-T}" y2="${oe.toFixed(1)}"></line>
                              ${ce?`<path class="year-trend-area" d="${ce}"></path>`:""}
                              ${G?`<path class="year-trend-line" d="${G}"></path>`:""}
                              ${I.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${B-12}" text-anchor="middle">${It(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${I.map((r,E)=>`
                                    <button
                                      class="year-trend-point-hit ${E===I.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${E===I.length-1?"1":"0"}"
                                      data-month-label="${It(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${It(r.monthLabel)}: Kalkulierter Saldo ${w(r.plannedNetCents)}, Einkommen ${w(r.effectiveIncomeCents)}, Ausgaben ${w(r.actualCostCents)}"
                                      aria-pressed="${E===I.length-1?"true":"false"}"
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
                    ${s.map(r=>{const E=ja(r.actualCents,r.budgetCents),V=Math.min(100,E),Q=`${E.toFixed(0)}%`,$e=r.budgetCents-r.actualCents,ze=$e<0?"danger":$e>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${An(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${w(r.actualCents)} von ${w(r.budgetCents)}">
                              <span class="circle-chart-value">${Q}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${w(r.budgetCents)} / I ${w(r.actualCents)}</div>
                            <div class="circle-chart-meta ${ze}">${$e>=0?"+":""}${w($e)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(i.length,1)}, minmax(0, 1fr));">
                    ${i.map(r=>{const E=Te(r.actualCostCents,u);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${w(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                    ${i.map(r=>{const E=Te(Math.abs(r.plannedNetCents),c),V=Te(Math.abs(r.actualNetCents),c),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",$e=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Se(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${E}; opacity: 0.35;"></div>
                              <div class="bar ${$e}" style="width:${V}"></div>
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
                  ${i.map(r=>`<tr>
                        <td>${Se(r.month)}</td>
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
                    ${kt.map(r=>`<option value="${r.year}" ${r.year===Dn?"selected":""}>${r.year}</option>`).join("")}
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
                    ${i.map(r=>{const E=Te(r.foodAndGoingOutCents,y);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${w(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(i.length,1)}, minmax(0, 1fr));">
                    ${i.map(r=>{const E=Te(r.foodCents,$);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${w(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(i.length,1)}, minmax(0, 1fr));">
                    ${i.map(r=>{const E=Te(r.goingOutCents,C);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${w(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(na.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(aa.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${jr.map(r=>{const E=Te(r.budgetCents,Rr),V=Te(r.actualCents,Rr),Q=An(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${w(r.budgetCents)} | Ist: ${w(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${E}"></div>
                              <div class="bar-marker" style="left:${E}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Q}" style="width:${V}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ea.length,1)}, minmax(0, 1fr));">
                    ${Ea.map(r=>{const E=Te(r.actualTotalCents,gs);return`
                          <div class="spark-bar" title="${r.year}: ${w(r.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
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
                    ${Ea.map(r=>{const E=Te(Math.abs(r.plannedNetCents),Vr),V=Te(Math.abs(r.actualNetCents),Vr),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",$e=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${E}; opacity: 0.35;"></div>
                              <div class="bar ${$e}" style="width:${V}"></div>
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
                  ${Ea.map(r=>`<tr>
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
    `,ys=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,Cs=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${ta?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${ta?vt(ta.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${ta?"Änderung speichern":"Vorlage speichern"}</button>
          ${ta?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,Yr=h.annualVariableFixedTemplates.reduce((r,E)=>r+E.plannedCents,0),xs=Math.round(Yr/12),ws=`
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
                <div class="eval-value">${w(xs)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const E=zn(r.dueDateIso),V=E?Se(E.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${w(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,zr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",ks=h.topModal==="years"?ys:h.topModal==="fixed"?Cs:h.topModal==="variable-fixed"?ws:h.topModal==="dashboard"?bs:"";M.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${ka?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${fs.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${Rs(r)}</option>`).join("")}
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
                  ${ks}
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
                  ${Rt.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${Rt.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${It(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${Ie.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${Ie.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${It(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Se(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(r,E)=>E+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Se(r)}</option>`).join("")}
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
                  ${rt.map(r=>`
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
                  ${On.map(r=>{const E=Te(Math.abs(r.valueCents),or),V=r.valueCents>=0?"+":"",Q=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${w(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${E}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Q}">${V}${w(r.valueCents)}</span></div>
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
                      ${P.map(r=>{const E=Ot.get(r.month)?.totalBudgetCents??0,V=Te(E,ur),Q=Te(r.summary.totalCents,ur);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${w(r.summary.totalCents)} € | Budget ${w(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const E=Ot.get(r.month),V=(E?.foodBudgetCents??0)+(E?.goingOutBudgetCents??0),Q=r.summary.foodCents+r.summary.goingOutCents,$e=Te(V,Ya),ze=Te(Q,Ya);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${w(Q)} € | Budget ${w(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${$e}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ze}"><span class="spark-bar-fill-value">${w(Q)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const E=Ot.get(r.month)?.fixedBudgetCents??0,V=Te(E,za),Q=Te(r.summary.fixedCents,za);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${w(r.summary.fixedCents)} € | Budget ${w(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const E=Ot.get(r.month)?.variableBudgetCents??0,V=Te(E,cr),Q=Te(r.summary.variableCents,cr);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${w(r.summary.variableCents)} € | Budget ${w(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const E=Ot.get(r.month)?.miscBudgetCents??0,V=Te(E,Ua),Q=Te(r.summary.miscCents,Ua);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${w(r.summary.miscCents)} € | Budget ${w(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${w(Me)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${w(_e)}</div>
                    <div class="eval-value">${w(Ze)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${w(Xe)}</div>
                    <div class="eval-value">${w(Cn)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ve}">${Re?w(O):"-"}</div>
                    <div class="eval-value ${ye}">${o?w(Ht):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${w(Qe)}</div>
                    <div class="eval-value">${w(it)}</div>
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
                    <div class="eval-value">${J(A,d.foodCents)}</div>
                    <div class="eval-value">${w(Z)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${J(N,d.goingOutCents)}</div>
                    <div class="eval-value">${w(R)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${J(L,d.fixedCents)}</div>
                    <div class="eval-value">${w(he)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${J(X,d.variableCents)}</div>
                    <div class="eval-value">${w(Be)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${J(U,d.miscCents)}</div>
                    <div class="eval-value">${w(Ge)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${J(Oe,d.totalCents)}</div>
                    <div class="eval-value">${w(At)}</div>
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
                    <div class="eval-value ${dr}">${w(d.foodCents)}</div>
                    <div class="eval-value">${w(p.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${fr}">${w(d.goingOutCents)}</div>
                    <div class="eval-value">${w(p.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Wa}">${w(d.fixedCents)}</div>
                    <div class="eval-value">${w(p.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Mr}">${w(d.variableCents)}</div>
                    <div class="eval-value">${w(p.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Pr}">${w(d.miscCents)}</div>
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
                    <div class="eval-value ${_(Bt)}">${w(Bt)}</div>
                    <div class="eval-value ${_(Xn)}">${w(Xn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${_(ot)}">${w(ot)}</div>
                    <div class="eval-value ${_(Et)}">${w(Et)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${qe}">${w(ie)}</div>
                    <div class="eval-value ${Pe}">${w(wt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${_(xt)}">${w(xt)}</div>
                    <div class="eval-value ${_(Tn)}">${w(Tn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${at}">${ve}</div>
                    <div class="eval-value ${xn}">${we}</div>
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
                ${P.map((r,E,V)=>{const Q=o?pe.get(fe(o.year,r.month)):void 0,$e=Q?.plannedBudgetCents??0,ze=Q?.netCents??0,Mt=Zn.get(r.month)??0,Yt=ze<0?"danger":ze>0?"budget-under":"",Ue=V[E-1],$n=Ue?.summary.foodCents??null,Sn=Ue?.summary.goingOutCents??null,Pt=Ue?.summary.fixedCents??null,ra=Ue?.summary.variableCents??null,pr=Ue?.summary.miscCents??null,Ur=Ue?.summary.totalCents??null,Wr=Ue!==void 0?Zn.get(Ue.month)??0:null,Gr=o&&Ue?pe.get(fe(o.year,Ue.month))?.plannedBudgetCents??0:null,Jr=$n===null?null:r.summary.foodCents-$n,Hr=Sn===null?null:r.summary.goingOutCents-Sn,Xr=Pt===null?null:r.summary.fixedCents-Pt,Qr=ra===null?null:r.summary.variableCents-ra,Zr=pr===null?null:r.summary.miscCents-pr,es=Ur===null?null:r.summary.totalCents-Ur,ts=Wr===null?null:Mt-Wr,ns=Gr===null?null:$e-Gr,Ba=$t=>$t===null?"muted":$t>0?"danger":$t<0?"budget-under":"muted",$s=$t=>$t===null?"muted":$t>0?"budget-under":$t<0?"danger":"muted",Ss=$t=>$t===null?"muted":$t>0?"danger":$t<0?"budget-under":"muted",In=$t=>$t===null?"(Δ -)":`(Δ ${$t>0?"+":""}${w($t)})`,as=o&&Ue?pe.get(fe(o.year,Ue.month))?.netCents??0:null,_a=as===null?null:ze-as,Es=_a===null?"(Δ -)":`(Δ ${_a>0?"+":""}${w(_a)})`,Bs=_a===null?"muted":_a<0?"danger":_a>0?"budget-under":"muted";return`<tr>
                  <td>${Se(r.month)}</td>
                  <td>${w(r.summary.foodCents)} <span class="${Ba(Jr)}">${In(Jr)}</span></td>
                  <td>${w(r.summary.goingOutCents)} <span class="${Ba(Hr)}">${In(Hr)}</span></td>
                  <td>${w(r.summary.fixedCents)} <span class="${Ba(Xr)}">${In(Xr)}</span></td>
                  <td>${w(r.summary.variableCents)} <span class="${Ba(Qr)}">${In(Qr)}</span></td>
                  <td>${w(r.summary.miscCents)} <span class="${Ba(Zr)}">${In(Zr)}</span></td>
                  <td>${w(r.summary.totalCents)} <span class="${Ba(es)}">${In(es)}</span></td>
                  <td>${w(Mt)} <span class="${$s(ts)}">${In(ts)}</span></td>
                  <td>${w($e)} <span class="${Ss(ns)}">${In(ns)}</span></td>
                  <td class="${Yt}">${w(ze)} <span class="${Bs}">${Es}</span></td>
                </tr>`}).join("")}
                ${_r}
                ${lr}
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
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${vt(O)}" />
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
                  <strong>${w(_e)} €</strong>
                </div>
                <div class="column-overview-row ${Ve}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${w(O)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${w(Qe)} €</strong>
                </div>
                <div class="column-overview-row ${Ye}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${w(Ct)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Gt(A,d.foodCents)}
                ${Gt(N,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${w(et)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${w(on)} €</strong>
                  </div>
                  <div class="column-overview-row ${Xt}">
                    <span>Diff</span>
                    <strong>${w(qt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${vt(A)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${vt(N)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(r=>{const E=r.foodCents>0,V=r.goingOutCents>0,Q=`${r.isoDate===f?"today-row":""} ${E||V?"day-has-entry":""}`.trim(),$e=`amount-input ${E?"day-input-has-value":""}`.trim(),ze=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${Q}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${$e}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${vt(r.foodCents)}" /></td>
                      <td><input class="${ze}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${vt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Gt(L,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${vt(L)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${vt(r.plannedCents)}" /></td>
                    <td class="${pt(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${vt(r.actualCents)}" /></td>
                    <td class="${pt(r.actualCents,r.plannedCents)}">${w(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Gt(X,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${vt(X)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${vt(r.budgetCents)}" /></td>
                    <td class="${pt(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${vt(r.actualCents)}" /></td>
                    <td class="${pt(r.actualCents,r.budgetCents)}">${w(r.actualCents-r.budgetCents)}</td>
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
              ${Gt(U,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${vt(U)}" ${l?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${$a}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),ir(),en(),dt(),Ta()}function ir(){const o=M.querySelector("#theme-select"),l=M.querySelector("#open-years-modal"),f=M.querySelector("#open-fixed-modal"),d=M.querySelector("#open-variable-fixed-modal"),p=M.querySelector("#open-dashboard-modal"),P=M.querySelector("#panel-modal-close"),A=M.querySelector("#panel-modal-backdrop"),N=M.querySelector("#open-unexported-change-log"),L=M.querySelector("#open-persistent-audit-log"),X=M.querySelector("#unexported-change-log-close"),U=M.querySelector("#unexported-change-log-backup"),Z=M.querySelector("#unexported-change-log-backdrop"),R=M.querySelector("#persistent-audit-log-close"),he=M.querySelector("#persistent-audit-log-backdrop"),Be=M.querySelector("#new-year"),Ge=M.querySelector("#create-year"),ne=M.querySelector("#year-select"),_e=M.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;us(_)&&da(_)}),l?.addEventListener("click",()=>{oa("years")}),f?.addEventListener("click",()=>{oa("fixed")}),d?.addEventListener("click",()=>{oa("variable-fixed")}),p?.addEventListener("click",()=>{oa("dashboard")}),N?.addEventListener("click",()=>{la()}),L?.addEventListener("click",()=>{Nn()}),X?.addEventListener("click",()=>{ua()}),U?.addEventListener("click",async()=>{try{await Jn()}catch(_){console.error("Backup-Export fehlgeschlagen",_),de("Backup konnte nicht exportiert werden.","error")}}),Z?.addEventListener("click",_=>{_.target===Z&&ua()}),R?.addEventListener("click",()=>{ca()}),he?.addEventListener("click",_=>{_.target===he&&ca()}),M.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const q=_.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(h.dashboardTab=q,ae())})});const Xe=M.querySelector("#dashboard-year-select");Xe?.addEventListener("change",()=>{const _=Number.parseInt(Xe.value,10);Number.isInteger(_)&&(h.dashboardYear=_,ae())}),P?.addEventListener("click",()=>{Pa()}),A?.addEventListener("click",_=>{_.target===A&&Pa()}),h.topModal&&window.setTimeout(()=>{P?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{X?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{R?.focus()},0),Ge?.addEventListener("click",async()=>{const _=Number.parseInt(Be?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await hn(_)}),ne?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ne.value,10),h.selectedMonth=cn(),ae()}),_e?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(_e.value,10),ae()});const pe=M.querySelector("#fixed-template-name"),Je=M.querySelector("#fixed-template-amount"),Lt=M.querySelector("#add-fixed-template"),O=M.querySelector("#cancel-fixed-template-edit"),Re=M.querySelector("#annual-variable-fixed-name"),Qe=M.querySelector("#annual-variable-fixed-date"),ut=M.querySelector("#annual-variable-fixed-amount"),Ct=M.querySelector("#add-annual-variable-fixed-template");Lt?.addEventListener("click",async()=>{const _=pe?.value??"",q=De(Je?.value??"0");await ma(_,q),pe&&(pe.value=""),Je&&(Je.value="")}),O?.addEventListener("click",()=>{Sr()}),Ct?.addEventListener("click",async()=>{const _=Re?.value??"",q=Qe?.value??"",at=De(ut?.value??"0");await Mn(_,q,at),Re&&(Re.value=""),Qe&&(Qe.value=""),ut&&(ut.value="")}),M.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeAnnualVariableFixedTemplate;q&&await rn(q)})}),M.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const q=_.dataset.editFixedTemplate;q&&ga(q)})}),M.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeFixedTemplate;q&&await an(q)})}),M.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.dayFood;q&&await Un(q,"foodCents",De(_.value))})}),M.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.dayGoing;q&&await Un(q,"goingOutCents",De(_.value))})}),M.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.fixedActual;q&&await Er(q,De(_.value))})}),M.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.fixedPlanned;q&&await sn(q,De(_.value))})});const ie=M.querySelector("#fixed-budget");ie?.addEventListener("click",_=>{_.preventDefault(),ie.blur(),tt(ie)}),ie?.addEventListener("change",async()=>{await tr(De(ie.value))});const xt=M.querySelector("#food-budget");xt?.addEventListener("click",_=>{_.preventDefault(),xt.blur(),tt(xt)}),xt?.addEventListener("change",async()=>{await La(De(xt.value))});const ve=M.querySelector("#going-out-budget");ve?.addEventListener("click",_=>{_.preventDefault(),ve.blur(),tt(ve)}),ve?.addEventListener("change",async()=>{await Le(De(ve.value))}),M.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{yr()});const Ye=M.querySelector("#misc-budget");Ye?.addEventListener("click",_=>{_.preventDefault(),Ye.blur(),tt(Ye)}),Ye?.addEventListener("change",async()=>{await gn(De(Ye.value))});const qe=M.querySelector("#variable-budget");qe?.addEventListener("click",_=>{_.preventDefault(),qe.blur(),tt(qe)}),qe?.addEventListener("change",async()=>{await Jt(De(qe.value))});const Me=M.querySelector("#variable-position-name"),Ze=M.querySelector("#variable-position-budget"),Cn=M.querySelector("#add-variable-position"),Ht=M.querySelector("#add-variable-position-recurring"),it=M.querySelector("#misc-description"),wt=M.querySelector("#misc-amount"),Tn=M.querySelector("#add-misc"),we=M.querySelector("#add-misc-recurring"),ye=M.querySelector("#income-description"),Pe=M.querySelector("#income-source"),Oe=M.querySelector("#income-amount"),et=M.querySelector("#add-income"),on=M.querySelector("#add-income-recurring"),qt=M.querySelector("#fixed-cost-name"),Xt=M.querySelector("#fixed-cost-budget"),At=M.querySelector("#add-fixed-cost"),ot=M.querySelector("#carryover-override");ot?.addEventListener("click",_=>{_.preventDefault(),ot.blur(),tt(ot)}),ot?.addEventListener("change",async()=>{const _=ot.value;if(!_.trim()){await bn(null);return}await bn(De(_))}),At?.addEventListener("click",async()=>{const _=De(Xt?.value??"0");await er(qt?.value??"",_),qt&&(qt.value=""),Xt&&(Xt.value="")}),Cn?.addEventListener("click",async()=>{const _=De(Ze?.value??"0");await Wn(Me?.value??"",_,!1),Me&&(Me.value=""),Ze&&(Ze.value="")}),Ht?.addEventListener("click",async()=>{const _=De(Ze?.value??"0");await Wn(Me?.value??"",_,!0),Me&&(Me.value=""),Ze&&(Ze.value="")}),Tn?.addEventListener("click",async()=>{const _=De(wt?.value??"0");await Gn(it?.value??"",_,!1),it&&(it.value=""),wt&&(wt.value="")}),we?.addEventListener("click",async()=>{const _=De(wt?.value??"0");await Gn(it?.value??"",_,!0),it&&(it.value=""),wt&&(wt.value="")}),et?.addEventListener("click",async()=>{const _=De(Oe?.value??"0"),q=Pe?.value,at=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ue(ye?.value??"",_,at,!1),ye&&(ye.value=""),Oe&&(Oe.value=""),Pe&&(Pe.value="salary")}),on?.addEventListener("click",async()=>{const _=De(Oe?.value??"0"),q=Pe?.value,at=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ue(ye?.value??"",_,at,!0),ye&&(ye.value=""),Oe&&(Oe.value=""),Pe&&(Pe.value="salary")}),M.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const q=_.dataset.incomeSource;if(!q)return;const at=_.value;await rr(q,at==="balance"||at==="fresh"||at==="salary"?at:void 0)})}),M.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.variablePositionBudget;q&&await Ka(q,De(_.value))})}),M.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.variablePositionActual;q&&await qa(q,De(_.value))})}),M.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeVariablePosition;q&&await yn(q)})}),M.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.moveVariablePositionNext;q&&await nr(q)})}),M.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeFixed;q&&await mn(q)})}),M.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeIncome;q&&await sr(q)})}),M.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeMisc;q&&await ar(q)})});const Et=M.querySelector("#backup-export"),Bt=M.querySelector("#backup-import");M.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Et?.addEventListener("click",async()=>{await Jn()}),Bt?.addEventListener("change",async()=>{const _=Bt.files?.[0];if(_){try{await Hn(_)}catch(q){console.error("Backup-Import fehlgeschlagen",q),de("Backup konnte nicht importiert werden.","error")}Bt.value=""}})}return{init:kr}}const Ys="modulepreload",zs=function(M){return"/habu26/"+M},ds={},Us=function(h,Ae,H){let ge=Promise.resolve();if(Ae&&Ae.length>0){let lt=function(je){return Promise.all(je.map(le=>Promise.resolve(le).then(mt=>({status:"fulfilled",value:mt}),mt=>({status:"rejected",reason:mt}))))};var Ce=lt;document.getElementsByTagName("link");const se=document.querySelector("meta[property=csp-nonce]"),be=se?.nonce||se?.getAttribute("nonce");ge=lt(Ae.map(je=>{if(je=zs(je),je in ds)return;ds[je]=!0;const le=je.endsWith(".css"),mt=le?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${je}"]${mt}`))return;const ct=document.createElement("link");if(ct.rel=le?"stylesheet":Ys,le||(ct.as="script"),ct.crossOrigin="",ct.href=je,be&&ct.setAttribute("nonce",be),document.head.appendChild(ct),le)return new Promise((dt,en)=>{ct.addEventListener("load",dt),ct.addEventListener("error",()=>en(new Error(`Unable to preload CSS for ${je}`)))})}))}function re(se){const be=new Event("vite:preloadError",{cancelable:!0});if(be.payload=se,window.dispatchEvent(be),!be.defaultPrevented)throw se}return ge.then(se=>{for(const be of se||[])be.status==="rejected"&&re(be.reason);return h().catch(re)})};function Ws(M={}){const{immediate:h=!1,onNeedRefresh:Ae,onOfflineReady:H,onRegistered:ge,onRegisteredSW:re,onRegisterError:Ce}=M;let se,be;const lt=async(le=!0)=>{await be};async function je(){if("serviceWorker"in navigator){if(se=await Us(async()=>{const{Workbox:le}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:le}},[]).then(({Workbox:le})=>new le("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(le=>{Ce?.(le)}),!se)return;se.addEventListener("activated",le=>{(le.isUpdate||le.isExternal)&&window.location.reload()}),se.addEventListener("installed",le=>{le.isUpdate||H?.()}),se.register({immediate:h}).then(le=>{re?re("/habu26/sw.js",le):ge?.(le)}).catch(le=>{Ce?.(le)})}}return be=je(),lt}function Gs(){Ws({immediate:!0})}const hs=document.getElementById("app");if(!hs)throw new Error("App-Container nicht gefunden.");Vs(hs).init();Gs();
