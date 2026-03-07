(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const ce of document.querySelectorAll('link[rel="modulepreload"]'))W(ce);new MutationObserver(ce=>{for(const ae of ce)if(ae.type==="childList")for(const me of ae.addedNodes)me.tagName==="LINK"&&me.rel==="modulepreload"&&W(me)}).observe(document,{childList:!0,subtree:!0});function Ae(ce){const ae={};return ce.integrity&&(ae.integrity=ce.integrity),ce.referrerPolicy&&(ae.referrerPolicy=ce.referrerPolicy),ce.crossOrigin==="use-credentials"?ae.credentials="include":ce.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function W(ce){if(ce.ep)return;ce.ep=!0;const ae=Ae(ce);fetch(ce.href,ae)}})();const kr=[1,2,3,4,5,6,7,8,9,10,11,12];function fr(){return new Date().toISOString()}function Kt(M){const b=Math.random().toString(36).slice(2,10);return`${M}_${Date.now()}_${b}`}function $r(M,b){const Ae=new Date(M,b,0).getDate(),W=[];for(let ce=1;ce<=Ae;ce+=1){const ae=new Date(Date.UTC(M,b-1,ce));W.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return W}function Br(M){return M.map(b=>({id:Kt("fixed"),templateId:b.id,name:b.name,plannedCents:b.plannedCents,actualCents:0}))}function hr(M,b,Ae){const W=b.reduce((ae,me)=>ae+me.plannedCents,0),ce=kr.map(ae=>({month:ae,days:$r(M,ae),foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Br(b),fixedBudgetCents:W,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:M,createdAt:fr(),templateVersion:Ae,months:ce}}function pr(M,b){return{id:Kt("expense"),description:M,amountCents:b,createdAt:fr()}}function vr(M,b,Ae){const W={id:Kt("income"),description:M,amountCents:b,createdAt:fr()};return Ae?{...W,incomeSource:Ae}:W}var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Er(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var Ya={exports:{}},Sr=Ya.exports,mr;function Pr(){return mr||(mr=1,(function(M,b){((Ae,W)=>{M.exports=W()})(Sr,function(){var Ae=function(e,t){return(Ae=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}))(e,t)},W=function(){return(W=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function ce(e,t,n){for(var a,r=0,s=t.length;r<s;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:_r,me=Object.keys,se=Array.isArray;function de(e,t){return typeof t=="object"&&me(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var et=Object.getPrototypeOf,tt={}.hasOwnProperty;function ie(e,t){return tt.call(e,t)}function nt(e,t){typeof t=="function"&&(t=t(et(e))),(typeof Reflect>"u"?me:Reflect.ownKeys)(t).forEach(function(n){mt(e,n,t[n])})}var at=Object.defineProperty;function mt(e,t,n,a){at(e,t,de(n&&ie(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function kt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),mt(e.prototype,"constructor",e),{extend:nt.bind(null,e.prototype)}}}}var za=Object.getOwnPropertyDescriptor,oa=[].slice;function Ln(e,t,n){return oa.call(e,t,n)}function _a(e,t){return t(e)}function un(e){if(!e)throw new Error("Assertion Failed")}function Ea(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function $t(e,t){if(typeof t=="string"&&ie(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,r=t.length;a<r;++a){var s=$t(e,t[a]);n.push(s)}return n}var o,u=t.indexOf(".");return u===-1||(o=e[t.substr(0,u)])==null?void 0:$t(o,t.substr(u+1))}function ot(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){un(typeof n!="string"&&"length"in n);for(var a=0,r=t.length;a<r;++a)ot(e,t[a],n[a])}else{var s,o,u=t.indexOf(".");u!==-1?(s=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?se(e)&&!isNaN(parseInt(s))?e.splice(s,1):delete e[s]:e[s]=n:ot(o=(o=e[s])&&ie(e,s)?o:e[s]={},u,n)):n===void 0?se(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function At(e){var t,n={};for(t in e)ie(e,t)&&(n[t]=e[t]);return n}var Sa=[].concat;function dt(e){return Sa.apply([],e)}var _t="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(dt([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),Be=new Set(_t.map(function(e){return ae[e]})),qt=null;function Xt(e){return qt=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=qt.get(n);if(a)return a;if(se(n)){a=[],qt.set(n,a);for(var r=0,s=n.length;r<s;++r)a.push(t(n[r]))}else if(Be.has(n.constructor))a=n;else{var o,u=et(n);for(o in a=u===Object.prototype?{}:Object.create(u),qt.set(n,a),n)ie(n,o)&&(a[o]=t(n[o]))}return a})(e),qt=null,e}var Pa={}.toString;function la(e){return Pa.call(e).slice(8,-1)}var jn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ua=typeof jn=="symbol"?function(e){var t;return e!=null&&(t=e[jn])&&t.apply(e)}:function(){return null};function Lt(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var cn={};function Bt(e){var t,n,a,r;if(arguments.length===1){if(se(e))return e.slice();if(this===cn&&typeof e=="string")return[e];if(r=Ua(e))for(n=[];!(a=r.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var ua=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},_t=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ye=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(_t),Ga={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function dn(e,t){this.name=e,this.message=t}function Ma(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,r){return r.indexOf(n)===a}).join(`
`)}function xn(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Ma(e,t)}function fn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ma(e,this.failures)}kt(dn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),kt(xn).from(dn),kt(fn).from(dn);var ca=Ye.reduce(function(e,t){return e[t]=t+"Error",e},{}),da=dn,X=Ye.reduce(function(e,t){var n=t+"Error";function a(r,s){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(s?`
 `+s:""),this.inner=s||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=Ga[t]||n,this.inner=null)}return kt(a).from(da),e[t]=a,e},{}),wn=(X.Syntax=SyntaxError,X.Type=TypeError,X.Range=RangeError,_t.reduce(function(e,t){return e[t+"Error"]=X[t],e},{}));_t=Ye.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=X[t]),e},{});function ge(){}function jt(e){return e}function qe(e,t){return e==null||e===jt?t:function(n){return t(e(n))}}function Et(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Rn(e,t){return e===ge?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,s=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?Et(a,this.onsuccess):a),r&&(this.onerror=this.onerror?Et(r,this.onerror):r),s!==void 0?s:n}}function Yn(e,t){return e===ge?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Et(n,this.onsuccess):n),a&&(this.onerror=this.onerror?Et(a,this.onerror):a)}}function Wa(e,t){return e===ge?t:function(r){var a=e.apply(this,arguments),r=(de(r,a),this.onsuccess),s=this.onerror,o=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Et(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Et(s,this.onerror):s),a===void 0?o===void 0?void 0:o:de(a,o)}}function fa(e,t){return e===ge?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function kn(e,t){return e===ge?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,r=arguments.length,s=new Array(r);r--;)s[r]=arguments[r];return n.then(function(){return t.apply(a,s)})}return t.apply(this,arguments)}}_t.ModifyError=xn,_t.DexieError=dn,_t.BulkError=fn;var gt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Oa(e){gt=e}var Je={},Aa=100,St=typeof Promise>"u"?[]:(Ye=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[St=crypto.subtle.digest("SHA-512",new Uint8Array([0])),et(St),Ye]:[Ye,et(Ye),Ye]),Ye=St[0],i=St[1],i=i&&i.then,Qt=Ye&&Ye.constructor,hn=!!St[2],$n=function(e,t){pn.push([e,t]),Ie&&(queueMicrotask(Ha),Ie=!1)},Vn=!0,Ie=!0,rt=[],le=[],Rt=jt,lt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ge,pgp:!1,env:{},finalize:ge},H=lt,pn=[],Zt=0,zn=[];function R(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==Je)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&pa(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,r){try{r(function(s){if(a._state===null){if(s===a)throw new TypeError("A promise cannot be resolved with itself.");var o=a._lib&&vn();s&&typeof s.then=="function"?n(a,function(u,p){s instanceof R?s._then(u,p):s.then(u,p)}):(a._state=!0,a._value=s,Da(a)),o&&mn()}},pa.bind(null,a))}catch(s){pa(a,s)}})(this,e)}var ha={get:function(){var e=H,t=_n;function n(a,r){var s=this,o=!e.global&&(e!==H||t!==_n),u=o&&!zt(),p=new R(function(k,v){Un(s,new Ta(Fa(a,e,o,u),Fa(r,e,o,u),k,v,e))});return this._consoleTask&&(p._consoleTask=this._consoleTask),p}return n.prototype=Je,n},set:function(e){mt(this,"then",e&&e.prototype===Je?ha:{get:function(){return e},set:ha.set})}};function Ta(e,t,n,a,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=r}function pa(e,t){var n,a;le.push(t),e._state===null&&(n=e._lib&&vn(),t=Rt(t),e._state=!1,e._value=t,a=e,rt.some(function(r){return r._value===a._value})||rt.push(a),Da(e),n)&&mn()}function Da(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Un(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),Zt===0&&(++Zt,$n(function(){--Zt==0&&va()},[]))}function Un(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Zt,$n(Ja,[n,e,t])}}function Ja(e,t,n){try{var a,r=t._value;!t._state&&le.length&&(le=[]),a=gt&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||le.indexOf(r)!==-1||(s=>{for(var o=rt.length;o;)if(rt[--o]._value===s._value)return rt.splice(o,1)})(t),n.resolve(a)}catch(s){n.reject(s)}finally{--Zt==0&&va(),--n.psd.ref||n.psd.finalize()}}function Ha(){en(lt,function(){vn()&&mn()})}function vn(){var e=Vn;return Ie=Vn=!1,e}function mn(){var e,t,n;do for(;0<pn.length;)for(e=pn,pn=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<pn.length);Ie=Vn=!0}function va(){for(var e=rt,t=(rt=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),zn.slice(0)),n=t.length;n;)t[--n]()}function Gn(e){return new R(Je,!1,e)}function ke(e,t){var n=H;return function(){var a=vn(),r=H;try{return Tt(n,!0),e.apply(this,arguments)}catch(s){t&&t(s)}finally{Tt(r,!1),a&&mn()}}}nt(R.prototype,{then:ha,_then:function(e,t){Un(this,new Ta(null,null,e,t,H))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:Gn)(a)}):this.then(null,function(a){return(a&&a.name===t?n:Gn)(a)}))},finally:function(e){return this.then(function(t){return R.resolve(e()).then(function(){return t})},function(t){return R.resolve(e()).then(function(){return Gn(t)})})},timeout:function(e,t){var n=this;return e<1/0?new R(function(a,r){var s=setTimeout(function(){return r(new X.Timeout(t))},e);n.then(a,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&mt(R.prototype,Symbol.toStringTag,"Dexie.Promise"),lt.env=Ia(),nt(R,{all:function(){var e=Bt.apply(null,arguments).map(En);return new R(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(r,s){return R.resolve(r).then(function(o){e[s]=o,--a||t(e)},n)})})},resolve:function(e){return e instanceof R?e:e&&typeof e.then=="function"?new R(function(t,n){e.then(t,n)}):new R(Je,!0,e)},reject:Gn,race:function(){var e=Bt.apply(null,arguments).map(En);return new R(function(t,n){e.map(function(a){return R.resolve(a).then(t,n)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return _n}},newPSD:Vt,usePSD:en,scheduler:{get:function(){return $n},set:function(e){$n=e}},rejectionMapper:{get:function(){return Rt},set:function(e){Rt=e}},follow:function(e,t){return new R(function(n,a){return Vt(function(r,s){var o=H;o.unhandleds=[],o.onunhandled=s,o.finalize=Et(function(){var u,p=this;u=function(){p.unhandleds.length===0?r():s(p.unhandleds[0])},zn.push(function k(){u(),zn.splice(zn.indexOf(k),1)}),++Zt,$n(function(){--Zt==0&&va()},[])},o.finalize),e()},t,n,a)})}}),Qt&&(Qt.allSettled&&mt(R,"allSettled",function(){var e=Bt.apply(null,arguments).map(En);return new R(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(r,s){return R.resolve(r).then(function(o){return a[s]={status:"fulfilled",value:o}},function(o){return a[s]={status:"rejected",reason:o}}).then(function(){return--n||t(a)})})})}),Qt.any&&typeof AggregateError<"u"&&mt(R,"any",function(){var e=Bt.apply(null,arguments).map(En);return new R(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,r=new Array(a);e.forEach(function(s,o){return R.resolve(s).then(function(u){return t(u)},function(u){r[o]=u,--a||n(new AggregateError(r))})})})}),Qt.withResolvers)&&(R.withResolvers=Qt.withResolvers);var Le={awaits:0,echoes:0,id:0},Xa=0,Yt=[],Bn=0,_n=0,Qa=0;function Vt(e,o,n,a){var r=H,s=Object.create(r),o=(s.parent=r,s.ref=0,s.global=!1,s.id=++Qa,lt.env,s.env=hn?{Promise:R,PromiseProp:{value:R,configurable:!0,writable:!0},all:R.all,race:R.race,allSettled:R.allSettled,any:R.any,resolve:R.resolve,reject:R.reject}:{},o&&de(s,o),++r.ref,s.finalize=function(){--this.parent.ref||this.parent.finalize()},en(s,e,n,a));return s.ref===0&&s.finalize(),o}function gn(){return Le.id||(Le.id=++Xa),++Le.awaits,Le.echoes+=Aa,Le.id}function zt(){return!!Le.awaits&&(--Le.awaits==0&&(Le.id=0),Le.echoes=Le.awaits*Aa,!0)}function En(e){return Le.echoes&&e&&e.constructor===Qt?(gn(),e.then(function(t){return zt(),t},function(t){return zt(),J(t)})):e}function Za(){var e=Yt[Yt.length-1];Yt.pop(),Tt(e,!1)}function Tt(e,t){var n,a,r=H;(t?!Le.echoes||Bn++&&e===H:!Bn||--Bn&&e===H)||queueMicrotask(t?(function(s){++_n,Le.echoes&&--Le.echoes!=0||(Le.echoes=Le.awaits=Le.id=0),Yt.push(H),Tt(s,!0)}).bind(null,e):Za),e!==H&&(H=e,r===lt&&(lt.env=Ia()),hn)&&(n=lt.env.Promise,a=e.env,r.global||e.global)&&(Object.defineProperty(ae,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function Ia(){var e=ae.Promise;return hn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function en(e,t,n,a,r){var s=H;try{return Tt(e,!0),t(n,a,r)}finally{Tt(s,!1)}}function Fa(e,t,n,a){return typeof e!="function"?e:function(){var r=H;n&&gn(),Tt(t,!0);try{return e.apply(this,arguments)}finally{Tt(r,!1),a&&queueMicrotask(zt)}}}function ma(e){Promise===Qt&&Le.echoes===0?Bn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+i).indexOf("[native code]")===-1&&(gn=zt=ge);var J=R.reject,tn="￿",l="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",c="String expected.",C=[],h="__dbnames",x="readonly",A="readwrite";function q(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Y={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function N(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=Xt(t))[e],t}}function Q(){throw X.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function I(e,t){try{var n=te(e),a=te(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=Ce(e),s=Ce(t),o=r.length,u=s.length,p=o<u?o:u,k=0;k<p;++k)if(r[k]!==s[k])return r[k]<s[k]?-1:1;return o===u?0:o<u?-1:1;case"Array":for(var v=e,d=t,y=v.length,g=d.length,m=y<g?y:g,f=0;f<m;++f){var $=I(v[f],d[f]);if($!==0)return $}return y===g?0:y<g?-1:1}}catch{}return NaN}function te(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=la(e))==="ArrayBuffer")?"binary":t}function Ce(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function _e(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(r,s){return!n.failures[s]})),Promise.all(a.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}Ve.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(se(n))return ce(ce([],se(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(se(a))return se(e)?e.filter(function(r){return!a.includes(r)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var je=Ve;function Ve(e){this["@@propmod"]=e}function be(e,t){for(var n=me(t),a=n.length,r=!1,s=0;s<a;++s){var o=n[s],u=t[o],p=$t(e,o);u instanceof je?(ot(e,o,u.execute(p)),r=!0):p!==u&&(ot(e,o,u),r=!0)}return r}re.prototype._trans=function(e,t,n){var a=this._tx||H.trans,r=this.name,s=gt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function o(k,v,d){if(d.schema[r])return t(d.idbtrans,d);throw new X.NotFound("Table "+r+" not part of transaction")}var u=vn();try{var p=a&&a.db._novip===this.db._novip?a===H.trans?a._promise(e,o,n):Vt(function(){return a._promise(e,o,n)},{trans:a,transless:H.transless||H}):(function k(v,d,y,g){if(v.idbdb&&(v._state.openComplete||H.letThrough||v._vip)){var m=v._createTransaction(d,y,v._dbSchema);try{m.create(),v._state.PR1398_maxLoop=3}catch(f){return f.name===ca.InvalidState&&v.isOpen()&&0<--v._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),v.close({disableAutoOpen:!1}),v.open().then(function(){return k(v,d,y,g)})):J(f)}return m._promise(d,function(f,$){return Vt(function(){return H.trans=m,g(f,$,m)})}).then(function(f){if(d==="readwrite")try{m.idbtrans.commit()}catch{}return d==="readonly"?f:m._completion.then(function(){return f})})}if(v._state.openComplete)return J(new X.DatabaseClosed(v._state.dbOpenError));if(!v._state.isBeingOpened){if(!v._state.autoOpen)return J(new X.DatabaseClosed);v.open().catch(ge)}return v._state.dbReadyPromise.then(function(){return k(v,d,y,g)})})(this.db,e,[this.name],o);return s&&(p._consoleTask=s,p=p.catch(function(k){return console.trace(k),J(k)})),p}finally{u&&mn()}},re.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?J(new X.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},re.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(se(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=me(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function(k){return 0<=u.keyPath.indexOf(k)})){for(var p=0;p<t.length;++p)if(t.indexOf(u.keyPath[p])===-1)return!1;return!0}return!1}).sort(function(u,p){return u.keyPath.length-p.keyPath.length})[0];if(n&&this.db._maxKey!==tn)return o=n.keyPath.slice(0,t.length),this.where(o).equals(o.map(function(u){return e[u]}));!n&&gt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function r(u,p){return I(u,p)===0}var o=t.reduce(function(v,p){var k=v[0],v=v[1],d=a[p],y=e[p];return[k||d,k||!d?q(v,d&&d.multi?function(g){return g=$t(g,p),se(g)&&g.some(function(m){return r(y,m)})}:function(g){return r(y,$t(g,p))}):v]},[null,null]),s=o[0],o=o[1];return s?this.where(s.name).equals(e[s.keyPath]).filter(o):n?this.filter(o):this.where(t).equals("")},re.prototype.filter=function(e){return this.toCollection().and(e)},re.prototype.count=function(e){return this.toCollection().count(e)},re.prototype.offset=function(e){return this.toCollection().offset(e)},re.prototype.limit=function(e){return this.toCollection().limit(e)},re.prototype.each=function(e){return this.toCollection().each(e)},re.prototype.toArray=function(e){return this.toCollection().toArray(e)},re.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},re.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,se(e)?"[".concat(e.join("+"),"]"):e))},re.prototype.reverse=function(){return this.toCollection().reverse()},re.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof Q&&(e=(o=>{var u=v,p=o;if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");function k(){this.constructor=u}function v(){return o!==null&&o.apply(this,arguments)||this}return Ae(u,p),u.prototype=p===null?Object.create(p):(k.prototype=p.prototype,new k),Object.defineProperty(v.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),v.prototype.table=function(){return n},v})(e)),new Set),r=e.prototype;r;r=et(r))Object.getOwnPropertyNames(r).forEach(function(o){return a.add(o)});function s(o){if(!o)return o;var u,p=Object.create(e.prototype);for(u in o)if(!a.has(u))try{p[u]=o[u]}catch{}return p}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=s,this.hook("reading",s),e},re.prototype.defineClass=function(){return this.mapToClass(function(e){de(this,e)})},re.prototype.add=function(e,t){var n=this,a=this.schema.primKey,r=a.auto,s=a.keyPath,o=e;return s&&r&&(o=N(s)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[o]})}).then(function(u){return u.numFailures?R.reject(u.failures[0]):u.lastResult}).then(function(u){if(s)try{ot(e,s,u)}catch{}return u})},re.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(s){var o=s??{};return be(o,t),a&&ot(o,a,e),n.core.mutate({trans:r,type:"put",values:[o],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?R.reject(u.failures[0]):!!s})})})},re.prototype.update=function(e,t){return typeof e!="object"||se(e)?this.where(":id").equals(e).modify(t):(e=$t(e,this.schema.primKey.keyPath))===void 0?J(new X.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},re.prototype.put=function(e,t){var n=this,a=this.schema.primKey,r=a.auto,s=a.keyPath,o=e;return s&&r&&(o=N(s)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[o],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?R.reject(u.failures[0]):u.lastResult}).then(function(u){if(s)try{ot(e,s,u)}catch{}return u})},re.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return _e(t,[e],a)}).then(function(a){return a.numFailures?R.reject(a.failures[0]):void 0})})},re.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Y}).then(function(n){return _e(e,null,n)})}).then(function(t){return t.numFailures?R.reject(t.failures[0]):void 0})},re.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(r){return t.hook.reading.fire(r)})})})},re.prototype.bulkAdd=function(e,t,n){var a=this,r=Array.isArray(t)?t:void 0,s=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(o){var u=a.schema.primKey,k=u.auto,u=u.keyPath;if(u&&r)throw new X.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new X.InvalidArgument("Arguments objects and keys must have the same length");var p=e.length,k=u&&k?e.map(N(u)):e;return a.core.mutate({trans:o,type:"add",keys:r,values:k,wantResults:s}).then(function(v){var d=v.numFailures,y=v.failures;if(d===0)return s?v.results:v.lastResult;throw new fn("".concat(a.name,".bulkAdd(): ").concat(d," of ").concat(p," operations failed"),y)})})},re.prototype.bulkPut=function(e,t,n){var a=this,r=Array.isArray(t)?t:void 0,s=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(o){var u=a.schema.primKey,k=u.auto,u=u.keyPath;if(u&&r)throw new X.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new X.InvalidArgument("Arguments objects and keys must have the same length");var p=e.length,k=u&&k?e.map(N(u)):e;return a.core.mutate({trans:o,type:"put",keys:r,values:k,wantResults:s}).then(function(v){var d=v.numFailures,y=v.failures;if(d===0)return s?v.results:v.lastResult;throw new fn("".concat(a.name,".bulkPut(): ").concat(d," of ").concat(p," operations failed"),y)})})},re.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(o){return o.key}),r=e.map(function(o){return o.changes}),s=[];return this._trans("readwrite",function(o){return n.getMany({trans:o,keys:a,cache:"clone"}).then(function(u){var p=[],k=[],v=(e.forEach(function(d,y){var g=d.key,m=d.changes,f=u[y];if(f){for(var $=0,B=Object.keys(m);$<B.length;$++){var w=B[$],S=m[w];if(w===t.schema.primKey.keyPath){if(I(S,g)!==0)throw new X.Constraint("Cannot update primary key in bulkUpdate()")}else ot(f,w,S)}s.push(y),p.push(g),k.push(f)}}),p.length);return n.mutate({trans:o,type:"put",keys:p,values:k,updates:{keys:a,changeSpecs:r}}).then(function(d){var y=d.numFailures,g=d.failures;if(y===0)return v;for(var m=0,f=Object.keys(g);m<f.length;m++){var $,B=f[m],w=s[Number(B)];w!=null&&($=g[B],delete g[B],g[w]=$)}throw new fn("".concat(t.name,".bulkUpdate(): ").concat(y," of ").concat(v," operations failed"),g)})})})},re.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(r){return _e(t,e,r)})}).then(function(a){var r=a.numFailures,s=a.failures;if(r===0)return a.lastResult;throw new fn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),s)})};var bt=re;function re(){}function Ne(e){function t(o,u){if(u){for(var p=arguments.length,k=new Array(p-1);--p;)k[p-1]=arguments[p];return n[o].subscribe.apply(null,k),e}if(typeof o=="string")return n[o]}var n={};t.addEventType=s;for(var a=1,r=arguments.length;a<r;++a)s(arguments[a]);return t;function s(o,u,p){var k,v;if(typeof o!="object")return u=u||fa,v={subscribers:[],fire:p=p||ge,subscribe:function(d){v.subscribers.indexOf(d)===-1&&(v.subscribers.push(d),v.fire=u(v.fire,d))},unsubscribe:function(d){v.subscribers=v.subscribers.filter(function(y){return y!==d}),v.fire=v.subscribers.reduce(u,p)}},n[o]=t[o]=v;me(k=o).forEach(function(d){var y=k[d];if(se(y))s(d,k[d][0],k[d][1]);else{if(y!=="asap")throw new X.InvalidArgument("Invalid event config");var g=s(d,jt,function(){for(var m=arguments.length,f=new Array(m);m--;)f[m]=arguments[m];g.subscribers.forEach(function($){Ea(function(){$.apply(null,f)})})})}})}}function st(e,t){return kt(t).from({prototype:e}),t}function Ke(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function K(e,t){e.filter=q(e.filter,t)}function ze(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return q(a(),t())}:t,e.justLimit=n&&!a}function ft(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new X.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function Ut(e,t,n){var a=ft(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function ht(e,t,n,a){var r,s,o=e.replayFilter?q(e.filter,e.replayFilter()):e.filter;return e.or?(r={},s=function(u,p,k){var v,d;o&&!o(p,k,function(y){return p.stop(y)},function(y){return p.fail(y)})||((d=""+(v=p.primaryKey))=="[object ArrayBuffer]"&&(d=""+new Uint8Array(v)),ie(r,d))||(r[d]=!0,t(u,p,k))},Promise.all([e.or._iterate(s,n),it(Ut(e,a,n),e.algorithm,s,!e.keysOnly&&e.valueMapper)])):it(Ut(e,a,n),q(e.algorithm,o),t,!e.keysOnly&&e.valueMapper)}function it(e,t,n,a){var r=ke(a?function(s,o,u){return n(a(s),o,u)}:n);return e.then(function(s){if(s)return s.start(function(){var o=function(){return s.continue()};t&&!t(s,function(u){return o=u},function(u){s.stop(u),o=ge},function(u){s.fail(u),o=ge})||r(s.value,s,function(u){return o=u}),o()})})}Z.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,J.bind(null,n.error)):n.table._trans("readonly",e).then(t)},Z.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,J.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Z.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=q(t.algorithm,e)},Z.prototype._iterate=function(e,t){return ht(this._ctx,e,t,this._ctx.table.core)},Z.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&de(n,e),t._ctx=n,t},Z.prototype.raw=function(){return this._ctx.valueMapper=null,this},Z.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return ht(t,e,n,t.table.core)})},Z.prototype.count=function(e){var t=this;return this._read(function(n){var a,r=t._ctx,s=r.table.core;return Ke(r,!0)?s.count({trans:n,query:{index:ft(r,s.schema),range:r.range}}).then(function(o){return Math.min(o,r.limit)}):(a=0,ht(r,function(){return++a,!1},n,s).then(function(){return a}))}).then(e)},Z.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],r=n.length-1;function s(p,k){return k?s(p[n[k]],k-1):p[a]}var o=this._ctx.dir==="next"?1:-1;function u(p,k){return I(s(p,r),s(k,r))*o}return this.toArray(function(p){return p.sort(u)}).then(t)},Z.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,r,s,o=t._ctx;return o.dir==="next"&&Ke(o,!0)&&0<o.limit?(a=o.valueMapper,r=ft(o,o.table.core.schema),o.table.core.query({trans:n,limit:o.limit,values:!0,query:{index:r,range:o.range}}).then(function(u){return u=u.result,a?u.map(a):u})):(s=[],ht(o,function(u){return s.push(u)},n,o.table.core).then(function(){return s}))},e)},Z.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,Ke(t)?ze(t,function(){var n=e;return function(a,r){return n===0||(n===1?--n:r(function(){a.advance(n),n=0}),!1)}}):ze(t,function(){var n=e;return function(){return--n<0}})),this},Z.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),ze(this._ctx,function(){var t=e;return function(n,a,r){return--t<=0&&a(r),0<=t}},!0),this},Z.prototype.until=function(e,t){return K(this._ctx,function(n,a,r){return!e(n.value)||(a(r),t)}),this},Z.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},Z.prototype.last=function(e){return this.reverse().first(e)},Z.prototype.filter=function(e){var t;return K(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=q(t.isMatch,e),this},Z.prototype.and=function(e){return this.filter(e)},Z.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Z.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Z.prototype.desc=function(){return this.reverse()},Z.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},Z.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Z.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},Z.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,r){n.push(r.key)}).then(function(){return n}).then(e)},Z.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&Ke(t,!0)&&0<t.limit)return this._read(function(a){var r=ft(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},Z.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Z.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},Z.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Z.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},K(this._ctx,function(a){var a=a.primaryKey.toString(),r=ie(e,a);return e[a]=!0,!r})),this},Z.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function r(f,$){var B=$.failures;y+=f-$.numFailures;for(var w=0,S=me(B);w<S.length;w++){var O=S[w];d.push(B[O])}}var s=typeof e=="function"?e:function(f){return be(f,e)},o=n.table.core,v=o.schema.primaryKey,u=v.outbound,p=v.extractKey,k=200,v=t.db._options.modifyChunkSize,d=(v&&(k=typeof v=="object"?v[o.name]||v["*"]||200:v),[]),y=0,g=[],m=e===ut;return t.clone().primaryKeys().then(function(f){function $(w){var S=Math.min(k,f.length-w),O=f.slice(w,w+S);return(m?Promise.resolve([]):o.getMany({trans:a,keys:O,cache:"immutable"})).then(function(L){var j=[],T=[],z=u?[]:null,V=m?O:[];if(!m)for(var F=0;F<S;++F){var G=L[F],fe={value:Xt(G),primKey:f[w+F]};s.call(fe,fe.value,fe)!==!1&&(fe.value==null?V.push(f[w+F]):u||I(p(G),p(fe.value))===0?(T.push(fe.value),u&&z.push(f[w+F])):(V.push(f[w+F]),j.push(fe.value)))}return Promise.resolve(0<j.length&&o.mutate({trans:a,type:"add",values:j}).then(function(ve){for(var ee in ve.failures)V.splice(parseInt(ee),1);r(j.length,ve)})).then(function(){return(0<T.length||B&&typeof e=="object")&&o.mutate({trans:a,type:"put",keys:z,values:T,criteria:B,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<w}).then(function(ve){return r(T.length,ve)})}).then(function(){return(0<V.length||B&&m)&&o.mutate({trans:a,type:"delete",keys:V,criteria:B,isAdditionalChunk:0<w}).then(function(ve){return _e(n.table,V,ve)}).then(function(ve){return r(V.length,ve)})}).then(function(){return f.length>w+S&&$(w+k)})})}var B=Ke(n)&&n.limit===1/0&&(typeof e!="function"||m)&&{index:n.index,range:n.range};return $(0).then(function(){if(0<d.length)throw new xn("Error modifying one or more objects",d,y,g);return f.length})})})},Z.prototype.delete=function(){var e=this._ctx,t=e.range;return!Ke(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(ut):this._write(function(n){var a=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:a,range:r}}).then(function(s){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(p){var u=p.failures,p=p.numFailures;if(p)throw new xn("Could not delete some values",Object.keys(u).map(function(k){return u[k]}),s-p);return s-p})})})};var Ct=Z;function Z(){}var ut=function(e,t){return t.value=null};function Ue(e,t){return e<t?-1:e===t?0:1}function He(e,t){return t<e?-1:e===t?0:1}function ye(e,t,n){return e=e instanceof nn?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Xe(e){return new e.Collection(e,function(){return Dt("")}).limit(0)}function xt(g,t,n,a){var r,s,o,u,p,k,v,d=n.length;if(!n.every(function(f){return typeof f=="string"}))return ye(g,c);function y(f){r=f==="next"?function(B){return B.toUpperCase()}:function(B){return B.toLowerCase()},s=f==="next"?function(B){return B.toLowerCase()}:function(B){return B.toUpperCase()},o=f==="next"?Ue:He;var $=n.map(function(B){return{lower:s(B),upper:r(B)}}).sort(function(B,w){return o(B.lower,w.lower)});u=$.map(function(B){return B.upper}),p=$.map(function(B){return B.lower}),v=(k=f)==="next"?"":a}y("next");var g=new g.Collection(g,function(){return Ge(u[0],p[d-1]+a)}),m=(g._ondirectionchange=function(f){y(f)},0);return g._addAlgorithm(function(f,$,B){var w=f.key;if(typeof w=="string"){var S=s(w);if(t(S,p,m))return!0;for(var O=null,L=m;L<d;++L){var j=((T,z,V,F,G,fe)=>{for(var ve=Math.min(T.length,F.length),ee=-1,oe=0;oe<ve;++oe){var Te=z[oe];if(Te!==F[oe])return G(T[oe],V[oe])<0?T.substr(0,oe)+V[oe]+V.substr(oe+1):G(T[oe],F[oe])<0?T.substr(0,oe)+F[oe]+V.substr(oe+1):0<=ee?T.substr(0,ee)+z[ee]+V.substr(ee+1):null;G(T[oe],Te)<0&&(ee=oe)}return ve<F.length&&fe==="next"?T+V.substr(T.length):ve<T.length&&fe==="prev"?T.substr(0,V.length):ee<0?null:T.substr(0,ee)+F[ee]+V.substr(ee+1)})(w,S,u[L],p[L],o,k);j===null&&O===null?m=L+1:(O===null||0<o(O,j))&&(O=j)}$(O!==null?function(){f.continue(O+v)}:B)}return!1}),g}function Ge(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function Dt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(xe.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),xe.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Xe(this):new this.Collection(this,function(){return Ge(e,t,!n,!a)})}catch{return ye(this,l)}},xe.prototype.equals=function(e){return e==null?ye(this,l):new this.Collection(this,function(){return Dt(e)})},xe.prototype.above=function(e){return e==null?ye(this,l):new this.Collection(this,function(){return Ge(e,void 0,!0)})},xe.prototype.aboveOrEqual=function(e){return e==null?ye(this,l):new this.Collection(this,function(){return Ge(e,void 0,!1)})},xe.prototype.below=function(e){return e==null?ye(this,l):new this.Collection(this,function(){return Ge(void 0,e,!1,!0)})},xe.prototype.belowOrEqual=function(e){return e==null?ye(this,l):new this.Collection(this,function(){return Ge(void 0,e)})},xe.prototype.startsWith=function(e){return typeof e!="string"?ye(this,c):this.between(e,e+tn,!0,!0)},xe.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):xt(this,function(t,n){return t.indexOf(n[0])===0},[e],tn)},xe.prototype.equalsIgnoreCase=function(e){return xt(this,function(t,n){return t===n[0]},[e],"")},xe.prototype.anyOfIgnoreCase=function(){var e=Bt.apply(cn,arguments);return e.length===0?Xe(this):xt(this,function(t,n){return n.indexOf(t)!==-1},e,"")},xe.prototype.startsWithAnyOfIgnoreCase=function(){var e=Bt.apply(cn,arguments);return e.length===0?Xe(this):xt(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,tn)},xe.prototype.anyOf=function(){var e,t,n=this,a=Bt.apply(cn,arguments),r=this._cmp;try{a.sort(r)}catch{return ye(this,l)}return a.length===0?Xe(this):((e=new this.Collection(this,function(){return Ge(a[0],a[a.length-1])}))._ondirectionchange=function(s){r=s==="next"?n._ascending:n._descending,a.sort(r)},t=0,e._addAlgorithm(function(s,o,u){for(var p=s.key;0<r(p,a[t]);)if(++t===a.length)return o(u),!1;return r(p,a[t])===0||(o(function(){s.continue(a[t])}),!1)}),e)},xe.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},xe.prototype.noneOf=function(){var e=Bt.apply(cn,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ye(this,l)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},xe.prototype.inAnyRange=function(e,B){var n=this,a=this._cmp,r=this._ascending,s=this._descending,o=this._min,u=this._max;if(e.length===0)return Xe(this);if(!e.every(function(w){return w[0]!==void 0&&w[1]!==void 0&&r(w[0],w[1])<=0}))return ye(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",X.InvalidArgument);var p=!B||B.includeLowers!==!1,k=B&&B.includeUppers===!0,v,d=r;function y(w,S){return d(w[0],S[0])}try{(v=e.reduce(function(w,S){for(var O=0,L=w.length;O<L;++O){var j=w[O];if(a(S[0],j[1])<0&&0<a(S[1],j[0])){j[0]=o(j[0],S[0]),j[1]=u(j[1],S[1]);break}}return O===L&&w.push(S),w},[])).sort(y)}catch{return ye(this,l)}var g=0,m=k?function(w){return 0<r(w,v[g][1])}:function(w){return 0<=r(w,v[g][1])},f=p?function(w){return 0<s(w,v[g][0])}:function(w){return 0<=s(w,v[g][0])},$=m,B=new this.Collection(this,function(){return Ge(v[0][0],v[v.length-1][1],!p,!k)});return B._ondirectionchange=function(w){d=w==="next"?($=m,r):($=f,s),v.sort(y)},B._addAlgorithm(function(w,S,O){for(var L,j=w.key;$(j);)if(++g===v.length)return S(O),!1;return!m(L=j)&&!f(L)||(n._cmp(j,v[g][1])===0||n._cmp(j,v[g][0])===0||S(function(){d===r?w.continue(v[g][0]):w.continue(v[g][1])}),!1)}),B},xe.prototype.startsWithAnyOf=function(){var e=Bt.apply(cn,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Xe(this):this.inAnyRange(e.map(function(t){return[t,t+tn]})):ye(this,"startsWithAnyOf() only works with strings")};var nn=xe;function xe(){}function ue(e){return ke(function(t){return he(t),e(t.target.error),!1})}function he(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Se="storagemutated",E="x-storagemutated-1",D=Ne(null,Se),pt=(Qe.prototype._lock=function(){return un(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},Qe.prototype._unlock=function(){if(un(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{en(e[1],e[0])}catch{}}return this},Qe.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},Qe.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(un(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new X.DatabaseClosed(a);case"MissingAPIError":throw new X.MissingAPI(a.message,a);default:throw new X.OpenFailed(a)}if(!this.active)throw new X.TransactionInactive;un(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ke(function(r){he(r),t._reject(e.error)}),e.onabort=ke(function(r){he(r),t.active&&t._reject(new X.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ke(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&D.storagemutated.fire(e.mutatedParts)})}return this},Qe.prototype._promise=function(e,t,n){var a,r=this;return e==="readwrite"&&this.mode!=="readwrite"?J(new X.ReadOnly("Transaction is readonly")):this.active?this._locked()?new R(function(s,o){r._blockedFuncs.push([function(){r._promise(e,t,n).then(s,o)},H])}):n?Vt(function(){var s=new R(function(o,u){r._lock();var p=t(o,u,r);p&&p.then&&p.then(o,u)});return s.finally(function(){return r._unlock()}),s._lib=!0,s}):((a=new R(function(s,o){var u=t(s,o,r);u&&u.then&&u.then(s,o)}))._lib=!0,a):J(new X.TransactionInactive)},Qe.prototype._root=function(){return this.parent?this.parent._root():this},Qe.prototype.waitFor=function(e){var t,n=this._root(),a=R.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function s(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=s)})()),n._waitingFor);return new R(function(s,o){a.then(function(u){return n._waitingQueue.push(ke(s.bind(null,u)))},function(u){return n._waitingQueue.push(ke(o.bind(null,u)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},Qe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new X.Abort))},Qe.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ie(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new X.NotFound("Table "+e+" not part of transaction")},Qe);function Qe(){}function bn(e,t,n,a,r,s,o,u){return{name:e,keyPath:t,unique:n,multi:a,auto:r,compound:s,src:(n&&!o?"&":"")+(a?"*":"")+(r?"++":"")+Gt(t),type:u}}function Gt(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function It(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(r){return[r.name,r]},n.reduce(function(r,s,o){return s=a(s,o),s&&(r[s[0]]=s[1]),r},{}))};var a}var wt=function(e){try{return e.only([[]]),wt=function(){return[[]]},[[]]}catch{return wt=function(){return tn},tn}};function Ee(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return $t(n,t)}:function(n){return $t(n,e)};var t}function Wn(e){return[].slice.call(e)}var yn=0;function an(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function we(e,t,p){function a(m){if(m.type===3)return null;if(m.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var d=m.lower,y=m.upper,g=m.lowerOpen,m=m.upperOpen;return d===void 0?y===void 0?null:t.upperBound(y,!!m):y===void 0?t.lowerBound(d,!!g):t.bound(d,y,!!g,!!m)}function r(v){var d,y=v.name;return{name:y,schema:v,mutate:function(g){var m=g.trans,f=g.type,$=g.keys,B=g.values,w=g.range;return new Promise(function(S,O){S=ke(S);var L=m.objectStore(y),j=L.keyPath==null,T=f==="put"||f==="add";if(!T&&f!=="delete"&&f!=="deleteRange")throw new Error("Invalid operation type: "+f);var z,V=($||B||{length:1}).length;if($&&B&&$.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(V===0)return S({numFailures:0,failures:{},results:[],lastResult:void 0});function F(Fe){++ve,he(Fe)}var G=[],fe=[],ve=0;if(f==="deleteRange"){if(w.type===4)return S({numFailures:ve,failures:fe,results:[],lastResult:void 0});w.type===3?G.push(z=L.clear()):G.push(z=L.delete(a(w)))}else{var j=T?j?[B,$]:[B,null]:[$,null],ee=j[0],oe=j[1];if(T)for(var Te=0;Te<V;++Te)G.push(z=oe&&oe[Te]!==void 0?L[f](ee[Te],oe[Te]):L[f](ee[Te])),z.onerror=F;else for(Te=0;Te<V;++Te)G.push(z=L[f](ee[Te])),z.onerror=F}function Mt(Fe){Fe=Fe.target.result,G.forEach(function(Nn,or){return Nn.error!=null&&(fe[or]=Nn.error)}),S({numFailures:ve,failures:fe,results:f==="delete"?$:G.map(function(Nn){return Nn.result}),lastResult:Fe})}z.onerror=function(Fe){F(Fe),Mt(Fe)},z.onsuccess=Mt})},getMany:function(g){var m=g.trans,f=g.keys;return new Promise(function($,B){$=ke($);for(var w,S=m.objectStore(y),O=f.length,L=new Array(O),j=0,T=0,z=function(G){G=G.target,L[G._pos]=G.result,++T===j&&$(L)},V=ue(B),F=0;F<O;++F)f[F]!=null&&((w=S.get(f[F]))._pos=F,w.onsuccess=z,w.onerror=V,++j);j===0&&$(L)})},get:function(g){var m=g.trans,f=g.key;return new Promise(function($,B){$=ke($);var w=m.objectStore(y).get(f);w.onsuccess=function(S){return $(S.target.result)},w.onerror=ue(B)})},query:(d=u,function(g){return new Promise(function(m,f){m=ke(m);var $,B,w,T=g.trans,S=g.values,O=g.limit,j=g.query,L=O===1/0?void 0:O,z=j.index,j=j.range,T=T.objectStore(y),T=z.isPrimaryKey?T:T.index(z.name),z=a(j);if(O===0)return m({result:[]});d?((j=S?T.getAll(z,L):T.getAllKeys(z,L)).onsuccess=function(V){return m({result:V.target.result})},j.onerror=ue(f)):($=0,B=!S&&"openKeyCursor"in T?T.openKeyCursor(z):T.openCursor(z),w=[],B.onsuccess=function(V){var F=B.result;return!F||(w.push(S?F.value:F.primaryKey),++$===O)?m({result:w}):void F.continue()},B.onerror=ue(f))})}),openCursor:function(g){var m=g.trans,f=g.values,$=g.query,B=g.reverse,w=g.unique;return new Promise(function(S,O){S=ke(S);var T=$.index,L=$.range,j=m.objectStore(y),j=T.isPrimaryKey?j:j.index(T.name),T=B?w?"prevunique":"prev":w?"nextunique":"next",z=!f&&"openKeyCursor"in j?j.openKeyCursor(a(L),T):j.openCursor(a(L),T);z.onerror=ue(O),z.onsuccess=ke(function(V){var F,G,fe,ve,ee=z.result;ee?(ee.___id=++yn,ee.done=!1,F=ee.continue.bind(ee),G=(G=ee.continuePrimaryKey)&&G.bind(ee),fe=ee.advance.bind(ee),ve=function(){throw new Error("Cursor not stopped")},ee.trans=m,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=ke(O),ee.next=function(){var oe=this,Te=1;return this.start(function(){return Te--?oe.continue():oe.stop()}).then(function(){return oe})},ee.start=function(oe){function Te(){if(z.result)try{oe()}catch(Fe){ee.fail(Fe)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var Mt=new Promise(function(Fe,Nn){Fe=ke(Fe),z.onerror=ue(Nn),ee.fail=Nn,ee.stop=function(or){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=ve,Fe(or)}});return z.onsuccess=ke(function(Fe){z.onsuccess=Te,Te()}),ee.continue=F,ee.continuePrimaryKey=G,ee.advance=fe,Te(),Mt},S(ee)):S(null)},O)})},count:function(g){var m=g.query,f=g.trans,$=m.index,B=m.range;return new Promise(function(w,S){var O=f.objectStore(y),O=$.isPrimaryKey?O:O.index($.name),L=a(B),L=L?O.count(L):O.count();L.onsuccess=ke(function(j){return w(j.target.result)}),L.onerror=ue(S)})}}}s=p,o=Wn((p=e).objectStoreNames);var s,p={schema:{name:p.name,tables:o.map(function(v){return s.objectStore(v)}).map(function(v){var d=v.keyPath,y=v.autoIncrement,m=se(d),g={},m={name:v.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:d==null,compound:m,keyPath:d,autoIncrement:y,unique:!0,extractKey:Ee(d)},indexes:Wn(v.indexNames).map(function(f){return v.index(f)}).map(function(w){var S=w.name,$=w.unique,B=w.multiEntry,w=w.keyPath,S={name:S,compound:se(w),keyPath:w,unique:$,multiEntry:B,extractKey:Ee(w)};return g[an(w)]=S}),getIndexByKeyPath:function(f){return g[an(f)]}};return g[":id"]=m.primaryKey,d!=null&&(g[an(d)]=m.primaryKey),m})},hasGetAll:0<o.length&&"getAll"in s.objectStore(o[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},o=p.schema,u=p.hasGetAll,p=o.tables.map(r),k={};return p.forEach(function(v){return k[v.name]=v}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(v){if(k[v])return k[v];throw new Error("Table '".concat(v,"' not found"))},MIN_KEY:-1/0,MAX_KEY:wt(t),schema:o}}function Jn(e,t,n,a){return n=n.IDBKeyRange,t=we(t,n,a),{dbcore:e.dbcore.reduce(function(r,s){return s=s.create,W(W({},r),s(r))},t)}}function Sn(e,t){var n=t.db,n=Jn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var r=a.name;e.core.schema.tables.some(function(s){return s.name===r})&&(a.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=a.core)})}function Pn(e,t,n,a){n.forEach(function(r){var s=a[r];t.forEach(function(o){var u=(function p(k,v){return za(k,v)||(k=et(k))&&p(k,v)})(o,r);(!u||"value"in u&&u.value===void 0)&&(o===e.Transaction.prototype||o instanceof e.Transaction?mt(o,r,{get:function(){return this.table(r)},set:function(p){at(this,r,{value:p,writable:!0,configurable:!0,enumerable:!0})}}):o[r]=new e.Table(r,s))})})}function Hn(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function er(e,t){return e._cfg.version-t._cfg.version}function tr(e,t,n,a){var r=e._dbSchema,s=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=It("$meta",Na("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),o=(s.create(n),s._completion.catch(a),s._reject.bind(s)),u=H.transless||H;Vt(function(){if(H.trans=s,H.transless=u,t!==0)return Sn(e,n),k=t,((p=s).storeNames.includes("$meta")?p.table("$meta").get("version").then(function(v){return v??k}):R.resolve(k)).then(function($){var d=e,y=$,g=s,m=n,f=[],$=d._versions,B=d._dbSchema=On(0,d.idbdb,m);return($=$.filter(function(w){return w._cfg.version>=y})).length===0?R.resolve():($.forEach(function(w){f.push(function(){var S,O,L,j=B,T=w._cfg.dbschema,z=(Zn(d,j,m),Zn(d,T,m),B=d._dbSchema=T,Xn(j,T)),V=(z.add.forEach(function(F){Qn(m,F[0],F[1].primKey,F[1].indexes)}),z.change.forEach(function(F){if(F.recreate)throw new X.Upgrade("Not yet support for changing primary key");var G=m.objectStore(F.name);F.add.forEach(function(fe){return Mn(G,fe)}),F.change.forEach(function(fe){G.deleteIndex(fe.name),Mn(G,fe)}),F.del.forEach(function(fe){return G.deleteIndex(fe)})}),w._cfg.contentUpgrade);if(V&&w._cfg.version>y)return Sn(d,m),g._memoizedTables={},S=At(T),z.del.forEach(function(F){S[F]=j[F]}),Hn(d,[d.Transaction.prototype]),Pn(d,[d.Transaction.prototype],me(S),S),g.schema=S,(O=ua(V))&&gn(),T=R.follow(function(){var F;(L=V(g))&&O&&(F=zt.bind(null,null),L.then(F,F))}),L&&typeof L.then=="function"?R.resolve(L):T.then(function(){return L})}),f.push(function(S){var O,L,j=w._cfg.dbschema;O=j,L=S,[].slice.call(L.db.objectStoreNames).forEach(function(T){return O[T]==null&&L.db.deleteObjectStore(T)}),Hn(d,[d.Transaction.prototype]),Pn(d,[d.Transaction.prototype],d._storeNames,d._dbSchema),g.schema=d._dbSchema}),f.push(function(S){d.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(d.idbdb.version/10)===w._cfg.version?(d.idbdb.deleteObjectStore("$meta"),delete d._dbSchema.$meta,d._storeNames=d._storeNames.filter(function(O){return O!=="$meta"})):S.objectStore("$meta").put(w._cfg.version,"version"))})}),(function w(){return f.length?R.resolve(f.shift()(g.idbtrans)).then(w):R.resolve()})().then(function(){ga(B,m)}))}).catch(o);var p,k;me(r).forEach(function(v){Qn(n,v,r[v].primKey,r[v].indexes)}),Sn(e,n),R.follow(function(){return e.on.populate.fire(s)}).catch(o)})}function Pt(e,t){ga(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=On(0,e.idbdb,t);Zn(e,e._dbSchema,t);for(var a=0,r=Xn(n,e._dbSchema).change;a<r.length;a++){var s=(o=>{if(o.change.length||o.recreate)return console.warn("Unable to patch indexes of table ".concat(o.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(o.name);o.add.forEach(function(p){gt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(o.name,".").concat(p.src)),Mn(u,p)})})(r[a]);if(typeof s=="object")return s.value}}function Xn(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var r=e[n],s=t[n];if(r){var o={name:n,def:s,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(s.primKey.keyPath||"")||r.primKey.auto!==s.primKey.auto)o.recreate=!0,a.change.push(o);else{var u=r.idxByName,p=s.idxByName,k=void 0;for(k in u)p[k]||o.del.push(k);for(k in p){var v=u[k],d=p[k];v?v.src!==d.src&&o.change.push(d):o.add.push(d)}(0<o.del.length||0<o.add.length||0<o.change.length)&&a.change.push(o)}}else a.add.push([n,s])}return a}function Qn(e,t,n,a){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(s){return Mn(r,s)})}function ga(e,t){me(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(gt&&console.debug("Dexie: Creating missing table",n),Qn(t,n,e[n].primKey,e[n].indexes))})}function Mn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function On(e,t,n){var a={};return Ln(t.objectStoreNames,0).forEach(function(r){for(var s=n.objectStore(r),o=bn(Gt(k=s.keyPath),k||"",!0,!1,!!s.autoIncrement,k&&typeof k!="string",!0),u=[],p=0;p<s.indexNames.length;++p){var v=s.index(s.indexNames[p]),k=v.keyPath,v=bn(v.name,k,!!v.unique,!!v.multiEntry,!1,k&&typeof k!="string",!1);u.push(v)}a[r]=It(r,o,u)}),a}function Zn(e,t,n){for(var a=n.db.objectStoreNames,r=0;r<a.length;++r){var s=a[r],o=n.objectStore(s);e._hasGetAll="getAll"in o;for(var u=0;u<o.indexNames.length;++u){var p,k=o.indexNames[u],v=o.index(k).keyPath,v=typeof v=="string"?v:"["+Ln(v).join("+")+"]";t[s]&&(p=t[s].idxByName[v])&&(p.name=k,delete t[s].idxByName[v],t[s].idxByName[k]=p)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Na(e){return e.split(",").map(function(t,n){var r=t.split(":"),a=(a=r[1])==null?void 0:a.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),s=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return bn(r,s||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),se(s),n===0,a)})}Cn.prototype._createTableSchema=It,Cn.prototype._parseIndexSyntax=Na,Cn.prototype._parseStoresSpec=function(e,t){var n=this;me(e).forEach(function(a){if(e[a]!==null){var r=n._parseIndexSyntax(e[a]),s=r.shift();if(!s)throw new X.Schema("Invalid schema for table "+a+": "+e[a]);if(s.unique=!0,s.multi)throw new X.Schema("Primary key cannot be multiEntry*");r.forEach(function(o){if(o.auto)throw new X.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new X.Schema("Index must have a name and cannot be an empty string")}),s=n._createTableSchema(a,s,r),t[a]=s}})},Cn.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?de(this._cfg.storesSource,n):n,t._versions),a={},r={};return n.forEach(function(s){de(a,s._cfg.storesSource),r=s._cfg.dbschema={},s._parseStoresSpec(a,r)}),t._dbSchema=r,Hn(t,[t._allTables,t,t.Transaction.prototype]),Pn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],me(r),r),t._storeNames=me(r),this},Cn.prototype.upgrade=function(e){return this._cfg.contentUpgrade=kn(this._cfg.contentUpgrade||ge,e),this};var nr=Cn;function Cn(){}function ba(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Ft(h,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function rn(e){return e&&typeof e.databases=="function"}function ya(e){return Vt(function(){return H.letThrough=!0,e()})}function ea(e){return!("from"in e)}var Ze=function(e,t){var n;if(!this)return n=new Ze,e&&"d"in e&&de(n,e),n;de(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function An(e,t,n){var a=I(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(ea(e))return de(e,{from:t,to:n,d:1});var a=e.l,r=e.r;if(I(n,e.from)<0)return a?An(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Ka(e);if(0<I(t,e.to))return r?An(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Ka(e);I(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<I(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&We(e,a),r&&t&&We(e,r)}}function We(e,t){ea(t)||(function n(a,r){var s=r.from,o=r.l,u=r.r;An(a,s,r.to),o&&n(a,o),u&&n(a,u)})(e,t)}function Tn(e,t){var n=Re(t),a=n.next();if(!a.done)for(var r=a.value,s=Re(e),o=s.next(r.from),u=o.value;!a.done&&!o.done;){if(I(u.from,r.to)<=0&&0<=I(u.to,r.from))return!0;I(r.from,u.from)<0?r=(a=n.next(u.from)).value:u=(o=s.next(r.from)).value}return!1}function Re(e){var t=ea(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&I(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||I(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ka(e){var t,n,a,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=W({},e),a=e[r],e.from=a.from,e.to=a.to,e[r]=a[r],n[r]=a[t],(e[t]=n).d=Wt(n)),e.d=Wt(e)}function Wt(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Jt(e,t){return me(t).forEach(function(n){e[n]?We(e[n],t[n]):e[n]=(function a(r){var s,o,u={};for(s in r)ie(r,s)&&(o=r[s],u[s]=!o||typeof o!="object"||Be.has(o.constructor)?o:a(o));return u})(t[n])}),e}function Ca(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Tn(t[n],e[n])})}nt(Ze.prototype,((Ye={add:function(e){return We(this,e),this},addKey:function(e){return An(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return An(t,n,n)}),this},hasKey:function(e){var t=Re(this).next(e).value;return t&&I(t.from,e)<=0&&0<=I(t.to,e)}})[jn]=function(){return Re(this)},Ye));var sn={},Dn={},ta=!1;function In(e){Jt(Dn,e),ta||(ta=!0,setTimeout(function(){ta=!1,na(Dn,!(Dn={}))},0))}function na(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,r=Object.values(sn);a<r.length;a++)qa(u=r[a],e,n,t);else for(var s in e){var o,u,s=/^idb\:\/\/(.*)\/(.*)\//.exec(s);s&&(o=s[1],s=s[2],u=sn["idb://".concat(o,"/").concat(s)])&&qa(u,e,n,t)}n.forEach(function(p){return p()})}function qa(e,t,n,a){for(var r=[],s=0,o=Object.entries(e.queries.query);s<o.length;s++){for(var u=o[s],p=u[0],k=[],v=0,d=u[1];v<d.length;v++){var y=d[v];Ca(t,y.obsSet)?y.subscribers.forEach(function($){return n.add($)}):a&&k.push(y)}a&&r.push([p,k])}if(a)for(var g=0,m=r;g<m.length;g++){var f=m[g],p=f[0],k=f[1];e.queries.query[p]=k}}function ct(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?J(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,r=Math.round(10*e.verno),s=!1;function o(){if(t.openCanceller!==a)throw new X.DatabaseClosed("db.open() was cancelled")}function u(){return new R(function(y,g){if(o(),!n)throw new X.MissingAPI;var m=e.name,f=t.autoSchema||!r?n.open(m):n.open(m,r);if(!f)throw new X.MissingAPI;f.onerror=ue(g),f.onblocked=ke(e._fireOnBlocked),f.onupgradeneeded=ke(function($){var B;v=f.transaction,t.autoSchema&&!e._options.allowEmptyDB?(f.onerror=he,v.abort(),f.result.close(),(B=n.deleteDatabase(m)).onsuccess=B.onerror=ke(function(){g(new X.NoSuchDatabase("Database ".concat(m," doesnt exist")))})):(v.onerror=ue(g),B=$.oldVersion>Math.pow(2,62)?0:$.oldVersion,d=B<1,e.idbdb=f.result,s&&Pt(e,v),tr(e,B/10,v,g))},g),f.onsuccess=ke(function(){v=null;var $,B,w,S,O,L,j=e.idbdb=f.result,T=Ln(j.objectStoreNames);if(0<T.length)try{var z=j.transaction((O=T).length===1?O[0]:O,"readonly");if(t.autoSchema)L=j,S=z,(w=e).verno=L.version/10,S=w._dbSchema=On(0,L,S),w._storeNames=Ln(L.objectStoreNames,0),Pn(w,[w._allTables],me(S),S);else if(Zn(e,e._dbSchema,z),B=z,((B=Xn(On(0,($=e).idbdb,B),$._dbSchema)).add.length||B.change.some(function(V){return V.add.length||V.change.length}))&&!s)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),r=j.version+1,s=!0,y(u());Sn(e,z)}catch{}C.push(e),j.onversionchange=ke(function(V){t.vcFired=!0,e.on("versionchange").fire(V)}),j.onclose=ke(function(){e.close({disableAutoOpen:!1})}),d&&(T=e._deps,O=m,rn(L=T.indexedDB)||O===h||ba(L,T.IDBKeyRange).put({name:O}).catch(ge)),y()},g)}).catch(function(y){switch(y?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<r)return r=0,u()}return R.reject(y)})}var p,k=t.dbReadyResolve,v=null,d=!1;return R.race([a,(typeof navigator>"u"?R.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(y){function g(){return indexedDB.databases().finally(y)}p=setInterval(g,100),g()}).finally(function(){return clearInterval(p)}):Promise.resolve()).then(u)]).then(function(){return o(),t.onReadyBeingFired=[],R.resolve(ya(function(){return e.on.ready.fire(e.vip)})).then(function y(){var g;if(0<t.onReadyBeingFired.length)return g=t.onReadyBeingFired.reduce(kn,ge),t.onReadyBeingFired=[],R.resolve(ya(function(){return g(e.vip)})).then(y)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(y){t.dbOpenError=y;try{v&&v.abort()}catch{}return a===t.openCanceller&&e._close(),J(y)}).finally(function(){t.openComplete=!0,k()}).then(function(){var y;return d&&(y={},e.tables.forEach(function(g){g.schema.indexes.forEach(function(m){m.name&&(y["idb://".concat(e.name,"/").concat(g.name,"/").concat(m.name)]=new Ze(-1/0,[[[]]]))}),y["idb://".concat(e.name,"/").concat(g.name,"/")]=y["idb://".concat(e.name,"/").concat(g.name,"/:dels")]=new Ze(-1/0,[[[]]])}),D(Se).fire(y),na(y,!0)),e})}function xa(e){function t(s){return e.next(s)}var n=r(t),a=r(function(s){return e.throw(s)});function r(s){return function(u){var u=s(u),p=u.value;return u.done?p:p&&typeof p.then=="function"?p.then(n,a):se(p)?Promise.all(p).then(n,a):n(p)}}return r(t)()}function Fn(e,t,n){for(var a=se(e)?e.slice():[e],r=0;r<n;++r)a.push(t);return a}var ar={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return W(W({},e),{table:function(a){var n=e.table(a),a=n.schema,r={},s=[];function o(y,g,m){var w=an(y),f=r[w]=r[w]||[],$=y==null?0:typeof y=="string"?1:y.length,B=0<g,w=W(W({},m),{name:B?"".concat(w,"(virtual-from:").concat(m.name,")"):m.name,lowLevelIndex:m,isVirtual:B,keyTail:g,keyLength:$,extractKey:Ee(y),unique:!B&&m.unique});return f.push(w),w.isPrimaryKey||s.push(w),1<$&&o($===2?y[0]:y.slice(0,$-1),g+1,m),f.sort(function(S,O){return S.keyTail-O.keyTail}),w}var u=o(a.primaryKey.keyPath,0,a.primaryKey);r[":id"]=[u];for(var p=0,k=a.indexes;p<k.length;p++){var v=k[p];o(v.keyPath,0,v)}function d(y){var g,m=y.query.index;return m.isVirtual?W(W({},y),{query:{index:m.lowLevelIndex,range:(g=y.query.range,m=m.keyTail,{type:g.type===1?2:g.type,lower:Fn(g.lower,g.lowerOpen?e.MAX_KEY:e.MIN_KEY,m),lowerOpen:!0,upper:Fn(g.upper,g.upperOpen?e.MIN_KEY:e.MAX_KEY,m),upperOpen:!0})}}):y}return W(W({},n),{schema:W(W({},a),{primaryKey:u,indexes:s,getIndexByKeyPath:function(y){return(y=r[an(y)])&&y[0]}}),count:function(y){return n.count(d(y))},query:function(y){return n.query(d(y))},openCursor:function(y){var g=y.query.index,m=g.keyTail,f=g.keyLength;return g.isVirtual?n.openCursor(d(y)).then(function(B){return B&&$(B)}):n.openCursor(y);function $(B){return Object.create(B,{continue:{value:function(w){w!=null?B.continue(Fn(w,y.reverse?e.MAX_KEY:e.MIN_KEY,m)):y.unique?B.continue(B.key.slice(0,f).concat(y.reverse?e.MIN_KEY:e.MAX_KEY,m)):B.continue()}},continuePrimaryKey:{value:function(w,S){B.continuePrimaryKey(Fn(w,e.MAX_KEY,m),S)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var w=B.key;return f===1?w[0]:w.slice(0,f)}},value:{get:function(){return B.value}}})}}})}})}};function wa(e,t,n,a){return n=n||{},a=a||"",me(e).forEach(function(r){var s,o,u;ie(t,r)?(s=e[r],o=t[r],typeof s=="object"&&typeof o=="object"&&s&&o?(u=la(s))!==la(o)?n[a+r]=t[r]:u==="Object"?wa(s,o,n,a+r+"."):s!==o&&(n[a+r]=t[r]):s!==o&&(n[a+r]=t[r])):n[a+r]=void 0}),me(t).forEach(function(r){ie(e,r)||(n[a+r]=t[r])}),n}function ka(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var on={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return W(W({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return W(W({},n),{mutate:function(r){var s=H.trans,o=s.table(t).hook,u=o.deleting,p=o.creating,k=o.updating;switch(r.type){case"add":if(p.fire===ge)break;return s._promise("readwrite",function(){return v(r)},!0);case"put":if(p.fire===ge&&k.fire===ge)break;return s._promise("readwrite",function(){return v(r)},!0);case"delete":if(u.fire===ge)break;return s._promise("readwrite",function(){return v(r)},!0);case"deleteRange":if(u.fire===ge)break;return s._promise("readwrite",function(){return(function d(y,g,m){return n.query({trans:y,values:!1,query:{index:a,range:g},limit:m}).then(function(f){var $=f.result;return v({type:"delete",keys:$,trans:y}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):$.length<m?{failures:[],numFailures:0,lastResult:void 0}:d(y,W(W({},g),{lower:$[$.length-1],lowerOpen:!0}),m)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function v(d){var y,g,m,f=H.trans,$=d.keys||ka(a,d);if($)return(d=d.type==="add"||d.type==="put"?W(W({},d),{keys:$}):W({},d)).type!=="delete"&&(d.values=ce([],d.values)),d.keys&&(d.keys=ce([],d.keys)),y=n,m=$,((g=d).type==="add"?Promise.resolve([]):y.getMany({trans:g.trans,keys:m,cache:"immutable"})).then(function(B){var w=$.map(function(S,O){var L,j,T,z=B[O],V={onerror:null,onsuccess:null};return d.type==="delete"?u.fire.call(V,S,z,f):d.type==="add"||z===void 0?(L=p.fire.call(V,S,d.values[O],f),S==null&&L!=null&&(d.keys[O]=S=L,a.outbound||ot(d.values[O],a.keyPath,S))):(L=wa(z,d.values[O]),(j=k.fire.call(V,L,S,z,f))&&(T=d.values[O],Object.keys(j).forEach(function(F){ie(T,F)?T[F]=j[F]:ot(T,F,j[F])}))),V});return n.mutate(d).then(function(S){for(var O=S.failures,L=S.results,j=S.numFailures,S=S.lastResult,T=0;T<$.length;++T){var z=(L||$)[T],V=w[T];z==null?V.onerror&&V.onerror(O[T]):V.onsuccess&&V.onsuccess(d.type==="put"&&B[T]?d.values[T]:z)}return{failures:O,results:L,numFailures:j,lastResult:S}}).catch(function(S){return w.forEach(function(O){return O.onerror&&O.onerror(S)}),Promise.reject(S)})});throw new Error("Keys missing")}}})}})}};function Ht(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],r=0,s=0;r<t.keys.length&&s<e.length;++r)I(t.keys[r],e[s])===0&&(a.push(n?Xt(t.values[r]):t.values[r]),++s);return a.length===e.length?a:null}catch{return null}}var rr={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return W(W({},n),{getMany:function(a){var r;return a.cache?(r=Ht(a.keys,a.trans._cache,a.cache==="clone"))?R.resolve(r):n.getMany(a).then(function(s){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?Xt(s):s},s}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function La(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function aa(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ja={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Ze(e.MIN_KEY,e.MAX_KEY);return W(W({},e),{transaction:function(a,r,s){if(H.subscr&&r!=="readonly")throw new X.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(a,r,s)},table:function(a){function r($){var f,$=$.query;return[f=$.index,new Ze((f=($=$.range).lower)!=null?f:e.MIN_KEY,(f=$.upper)!=null?f:e.MAX_KEY)]}var s=e.table(a),o=s.schema,u=o.primaryKey,p=o.indexes,k=u.extractKey,v=u.outbound,d=u.autoIncrement&&p.filter(function(m){return m.compound&&m.keyPath.includes(u.keyPath)}),y=W(W({},s),{mutate:function(m){function f(G){return G="idb://".concat(t,"/").concat(a,"/").concat(G),O[G]||(O[G]=new Ze)}var $,B,w,S=m.trans,O=m.mutatedParts||(m.mutatedParts={}),L=f(""),j=f(":dels"),T=m.type,V=m.type==="deleteRange"?[m.range]:m.type==="delete"?[m.keys]:m.values.length<50?[ka(u,m).filter(function(G){return G}),m.values]:[],z=V[0],V=V[1],F=m.trans._cache;return se(z)?(L.addKeys(z),(T=T==="delete"||z.length===V.length?Ht(z,F):null)||j.addKeys(z),(T||V)&&($=f,B=T,w=V,o.indexes.forEach(function(G){var fe=$(G.name||"");function ve(oe){return oe!=null?G.extractKey(oe):null}function ee(oe){G.multiEntry&&se(oe)?oe.forEach(function(Te){return fe.addKey(Te)}):fe.addKey(oe)}(B||w).forEach(function(oe,Fe){var Mt=B&&ve(B[Fe]),Fe=w&&ve(w[Fe]);I(Mt,Fe)!==0&&(Mt!=null&&ee(Mt),Fe!=null)&&ee(Fe)})}))):z?(V={from:(F=z.lower)!=null?F:e.MIN_KEY,to:(T=z.upper)!=null?T:e.MAX_KEY},j.add(V),L.add(V)):(L.add(n),j.add(n),o.indexes.forEach(function(G){return f(G.name).add(n)})),s.mutate(m).then(function(G){return!z||m.type!=="add"&&m.type!=="put"||(L.addKeys(G.results),d&&d.forEach(function(fe){for(var ve=m.values.map(function(Mt){return fe.extractKey(Mt)}),ee=fe.keyPath.findIndex(function(Mt){return Mt===u.keyPath}),oe=0,Te=G.results.length;oe<Te;++oe)ve[oe][ee]=G.results[oe];f(fe.name).addKeys(ve)})),S.mutatedParts=Jt(S.mutatedParts||{},O),G})}}),g={get:function(m){return[u,new Ze(m.key)]},getMany:function(m){return[u,new Ze().addKeys(m.keys)]},count:r,query:r,openCursor:r};return me(g).forEach(function(m){y[m]=function(f){var $=H.subscr,B=!!$,w=La(H,s)&&aa(m,f)?f.obsSet={}:$;if(B){var S,$=function(V){return V="idb://".concat(t,"/").concat(a,"/").concat(V),w[V]||(w[V]=new Ze)},O=$(""),L=$(":dels"),B=g[m](f),j=B[0],B=B[1];if((m==="query"&&j.isPrimaryKey&&!f.values?L:$(j.name||"")).add(B),!j.isPrimaryKey){if(m!=="count")return S=m==="query"&&v&&f.values&&s.query(W(W({},f),{values:!1})),s[m].apply(this,arguments).then(function(V){if(m==="query"){if(v&&f.values)return S.then(function(ve){return ve=ve.result,O.addKeys(ve),V});var F=f.values?V.result.map(k):V.result;(f.values?O:L).addKeys(F)}else{var G,fe;if(m==="openCursor")return fe=f.values,(G=V)&&Object.create(G,{key:{get:function(){return L.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var ve=G.primaryKey;return L.addKey(ve),ve}},value:{get:function(){return fe&&O.addKey(G.primaryKey),G.value}}})}return V});L.add(n)}}return s[m].apply(this,arguments)}}),y}})}};function $a(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=W({},t),se(a.keys)&&(a.keys=a.keys.filter(function(r,s){return!(s in n.failures)})),"values"in a&&se(a.values)&&(a.values=a.values.filter(function(r,s){return!(s in n.failures)})),a)}function ra(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<I(n,a.lower):0<=I(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?I(n,a.upper)<0:I(n,a.upper)<=0));var n,a}function Ba(e,t,n,a,r,s){var o,u,p,k,v,d;return!n||n.length===0||(o=t.query.index,u=o.multiEntry,p=t.query.range,k=a.schema.primaryKey.extractKey,v=o.extractKey,d=(o.lowLevelIndex||o).extractKey,(a=n.reduce(function(y,g){var m=y,f=[];if(g.type==="add"||g.type==="put")for(var $=new Ze,B=g.values.length-1;0<=B;--B){var w,S=g.values[B],O=k(S);!$.hasKey(O)&&(w=v(S),u&&se(w)?w.some(function(V){return ra(V,p)}):ra(w,p))&&($.addKey(O),f.push(S))}switch(g.type){case"add":var L=new Ze().addKeys(t.values?y.map(function(F){return k(F)}):y),m=y.concat(t.values?f.filter(function(F){return F=k(F),!L.hasKey(F)&&(L.addKey(F),!0)}):f.map(function(F){return k(F)}).filter(function(F){return!L.hasKey(F)&&(L.addKey(F),!0)}));break;case"put":var j=new Ze().addKeys(g.values.map(function(F){return k(F)}));m=y.filter(function(F){return!j.hasKey(t.values?k(F):F)}).concat(t.values?f:f.map(function(F){return k(F)}));break;case"delete":var T=new Ze().addKeys(g.keys);m=y.filter(function(F){return!T.hasKey(t.values?k(F):F)});break;case"deleteRange":var z=g.range;m=y.filter(function(F){return!ra(k(F),z)})}return m},e))===e)?e:(a.sort(function(y,g){return I(d(y),d(g))||I(k(y),k(g))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(r.dirty=!0)),s?Object.freeze(a):a)}function ln(e,t){return I(e.lower,t.lower)===0&&I(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Ra(e,t){return((n,a,r,s)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=I(n,a))===0){if(r&&s)return 0;if(r)return 1;if(s)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,r,s)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=I(n,a))===0){if(r&&s)return 0;if(r)return-1;if(s)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function sr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var r,s;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,s=t,setTimeout(function(){r.subscribers.size===0&&Lt(s,r)},3e3))})}var ir={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return W(W({},e),{transaction:function(n,a,r){var s,o,u=e.transaction(n,a,r);return a==="readwrite"&&(r=(s=new AbortController).signal,u.addEventListener("abort",(o=function(p){return function(){if(s.abort(),a==="readwrite"){for(var k=new Set,v=0,d=n;v<d.length;v++){var y=d[v],g=sn["idb://".concat(t,"/").concat(y)];if(g){var m=e.table(y),f=g.optimisticOps.filter(function(G){return G.trans===u});if(u._explicit&&p&&u.mutatedParts)for(var $=0,B=Object.values(g.queries.query);$<B.length;$++)for(var w=0,S=(j=B[$]).slice();w<S.length;w++)Ca((T=S[w]).obsSet,u.mutatedParts)&&(Lt(j,T),T.subscribers.forEach(function(G){return k.add(G)}));else if(0<f.length){g.optimisticOps=g.optimisticOps.filter(function(G){return G.trans!==u});for(var O=0,L=Object.values(g.queries.query);O<L.length;O++)for(var j,T,z,V=0,F=(j=L[O]).slice();V<F.length;V++)(T=F[V]).res!=null&&u.mutatedParts&&(p&&!T.dirty?(z=Object.isFrozen(T.res),z=Ba(T.res,T.req,f,m,T,z),T.dirty?(Lt(j,T),T.subscribers.forEach(function(G){return k.add(G)})):z!==T.res&&(T.res=z,T.promise=R.resolve({result:z}))):(T.dirty&&Lt(j,T),T.subscribers.forEach(function(G){return k.add(G)})))}}}k.forEach(function(G){return G()})}}})(!1),{signal:r}),u.addEventListener("error",o(!1),{signal:r}),u.addEventListener("complete",o(!0),{signal:r})),u},table:function(n){var a=e.table(n),r=a.schema.primaryKey;return W(W({},a),{mutate:function(s){var o,u=H.trans;return!r.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(o=sn["idb://".concat(t,"/").concat(n)])?(u=a.mutate(s),s.type!=="add"&&s.type!=="put"||!(50<=s.values.length||ka(r,s).some(function(p){return p==null}))?(o.optimisticOps.push(s),s.mutatedParts&&In(s.mutatedParts),u.then(function(p){0<p.numFailures&&(Lt(o.optimisticOps,s),(p=$a(0,s,p))&&o.optimisticOps.push(p),s.mutatedParts)&&In(s.mutatedParts)}),u.catch(function(){Lt(o.optimisticOps,s),s.mutatedParts&&In(s.mutatedParts)})):u.then(function(p){var k=$a(0,W(W({},s),{values:s.values.map(function(v,d){var y;return p.failures[d]?v:(ot(y=(y=r.keyPath)!=null&&y.includes(".")?Xt(v):W({},v),r.keyPath,p.results[d]),y)})}),p);o.optimisticOps.push(k),queueMicrotask(function(){return s.mutatedParts&&In(s.mutatedParts)})}),u):a.mutate(s)},query:function(s){var o,u,p,k,v,d,y;return La(H,a)&&aa("query",s)?(o=((p=H.trans)==null?void 0:p.db._options.cache)==="immutable",u=(p=H).requery,p=p.signal,d=((g,m,f,$)=>{var B=sn["idb://".concat(g,"/").concat(m)];if(!B)return[];if(!(g=B.queries[f]))return[null,!1,B,null];var w=g[($.query?$.query.index.name:null)||""];if(!w)return[null,!1,B,null];switch(f){case"query":var S=w.find(function(O){return O.req.limit===$.limit&&O.req.values===$.values&&ln(O.req.query.range,$.query.range)});return S?[S,!0,B,w]:[w.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=$.limit&&(!$.values||O.req.values)&&Ra(O.req.query.range,$.query.range)}),!1,B,w];case"count":return S=w.find(function(O){return ln(O.req.query.range,$.query.range)}),[S,!!S,B,w]}})(t,n,"query",s),y=d[0],k=d[2],v=d[3],y&&d[1]?y.obsSet=s.obsSet:(d=a.query(s).then(function(g){var m=g.result;if(y&&(y.res=m),o){for(var f=0,$=m.length;f<$;++f)Object.freeze(m[f]);Object.freeze(m)}else g.result=Xt(m);return g}).catch(function(g){return v&&y&&Lt(v,y),Promise.reject(g)}),y={obsSet:s.obsSet,promise:d,subscribers:new Set,type:"query",req:s,dirty:!1},v?v.push(y):(v=[y],(k=k||(sn["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[s.query.index.name||""]=v)),sr(y,v,u,p),y.promise.then(function(g){return{result:Ba(g.result,s,k?.optimisticOps,a,y,o)}})):a.query(s)}})}})}};function sa(e,t){return new Proxy(e,{get:function(n,a,r){return a==="db"?t:Reflect.get(n,a,r)}})}Pe.prototype.version=function(e){if(isNaN(e)||e<.1)throw new X.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new X.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(er),n.stores({}),this._state.autoSchema=!1),n},Pe.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new R(function(n,a){if(t._state.openComplete)return a(new X.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new X.DatabaseClosed);t.open().catch(ge)}t._state.dbReadyPromise.then(n,a)}).then(e)},Pe.prototype.use=function(r){var t=r.stack,n=r.create,a=r.level,r=r.name,s=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return s.push({stack:t,create:n,level:a??10,name:r}),s.sort(function(o,u){return o.level-u.level}),this},Pe.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return a?r.create!==a:!!n&&r.name!==n})),this},Pe.prototype.open=function(){var e=this;return en(lt,function(){return ct(e)})},Pe.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=C.indexOf(this);if(0<=t&&C.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new R(function(n){e.dbReadyResolve=n}),e.openCanceller=new R(function(n,a){e.cancelOpen=a}))},Pe.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new X.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new X.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Pe.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new R(function(r,s){function o(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=ke(function(){var p,k,v;p=t._deps,k=t.name,rn(v=p.indexedDB)||k===h||ba(v,p.IDBKeyRange).delete(k).catch(ge),r()}),u.onerror=ue(s),u.onblocked=t._fireOnBlocked}if(n)throw new X.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(o):o()})},Pe.prototype.backendDB=function(){return this.idbdb},Pe.prototype.isOpen=function(){return this.idbdb!==null},Pe.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Pe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Pe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Pe.prototype,"tables",{get:function(){var e=this;return me(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Pe.prototype.transaction=function(){var e=(function(t,n,a){var r=arguments.length;if(r<2)throw new X.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];return a=s.pop(),[t,dt(s),a]}).apply(this,arguments);return this._transaction.apply(this,e)},Pe.prototype._transaction=function(e,t,n){var a,r,s=this,o=H.trans,u=(o&&o.db===this&&e.indexOf("!")===-1||(o=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(k){if(k=k instanceof s.Table?k.name:k,typeof k!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return k}),e=="r"||e===x)a=x;else{if(e!="rw"&&e!=A)throw new X.InvalidArgument("Invalid transaction mode: "+e);a=A}if(o){if(o.mode===x&&a===A){if(!u)throw new X.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");o=null}o&&r.forEach(function(k){if(o&&o.storeNames.indexOf(k)===-1){if(!u)throw new X.SubTransaction("Table "+k+" not included in parent transaction.");o=null}}),u&&o&&!o.active&&(o=null)}}catch(k){return o?o._promise(null,function(v,d){d(k)}):J(k)}var p=(function k(v,d,y,g,m){return R.resolve().then(function(){var w=H.transless||H,f=v._createTransaction(d,y,v._dbSchema,g),w=(f.explicit=!0,{trans:f,transless:w});if(g)f.idbtrans=g.idbtrans;else try{f.create(),f.idbtrans._explicit=!0,v._state.PR1398_maxLoop=3}catch(S){return S.name===ca.InvalidState&&v.isOpen()&&0<--v._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),v.close({disableAutoOpen:!1}),v.open().then(function(){return k(v,d,y,null,m)})):J(S)}var $,B=ua(m),w=(B&&gn(),R.follow(function(){var S;($=m.call(f,f))&&(B?(S=zt.bind(null,null),$.then(S,S)):typeof $.next=="function"&&typeof $.throw=="function"&&($=xa($)))},w));return($&&typeof $.then=="function"?R.resolve($).then(function(S){return f.active?S:J(new X.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):w.then(function(){return $})).then(function(S){return g&&f._resolve(),f._completion.then(function(){return S})}).catch(function(S){return f._reject(S),J(S)})})}).bind(null,this,a,r,o,n);return o?o._promise(a,p,"lock"):H.trans?en(H.transless,function(){return s._whenReady(p)}):this._whenReady(p)},Pe.prototype.table=function(e){if(ie(this._allTables,e))return this._allTables[e];throw new X.InvalidTable("Table ".concat(e," does not exist"))};var Ft=Pe;function Pe(e,t){var n,a,r,s,o,u=this,p=(this._middlewares={},this.verno=0,Pe.dependencies),p=(this._options=t=W({addons:Pe.addons,autoOpen:!0,indexedDB:p.indexedDB,IDBKeyRange:p.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),k=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ge,dbReadyPromise:null,cancelOpen:ge,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),v=(k.dbReadyPromise=new R(function(d){k.dbReadyResolve=d}),k.openCanceller=new R(function(d,y){k.cancelOpen=y}),this._state=k,this.name=e,this.on=Ne(this,"populate","blocked","versionchange","close",{ready:[kn,ge]}),this.once=function(d,y){var g=function(){for(var m=[],f=0;f<arguments.length;f++)m[f]=arguments[f];u.on(d).unsubscribe(g),y.apply(u,m)};return u.on(d,g)},this.on.ready.subscribe=_a(this.on.ready.subscribe,function(d){return function(y,g){Pe.vip(function(){var m,f=u._state;f.openComplete?(f.dbOpenError||R.resolve().then(y),g&&d(y)):f.onReadyBeingFired?(f.onReadyBeingFired.push(y),g&&d(y)):(d(y),m=u,g||d(function $(){m.on.ready.unsubscribe(y),m.on.ready.unsubscribe($)}))})}}),this.Collection=(n=this,st(Ct.prototype,function($,f){this.db=n;var g=Y,m=null;if(f)try{g=f()}catch(w){m=w}var f=$._ctx,$=f.table,B=$.hook.reading.fire;this._ctx={table:$,index:f.index,isPrimKey:!f.index||$.schema.primKey.keyPath&&f.index===$.schema.primKey.name,range:g,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:m,or:f.or,valueMapper:B!==jt?B:null}})),this.Table=(a=this,st(bt.prototype,function(d,y,g){this.db=a,this._tx=g,this.name=d,this.schema=y,this.hook=a._allTables[d]?a._allTables[d].hook:Ne(null,{creating:[Rn,ge],reading:[qe,jt],updating:[Wa,ge],deleting:[Yn,ge]})})),this.Transaction=(r=this,st(pt.prototype,function(d,y,g,m,f){var $=this;d!=="readonly"&&y.forEach(function(B){B=(B=g[B])==null?void 0:B.yProps,B&&(y=y.concat(B.map(function(w){return w.updatesTable})))}),this.db=r,this.mode=d,this.storeNames=y,this.schema=g,this.chromeTransactionDurability=m,this.idbtrans=null,this.on=Ne(this,"complete","error","abort"),this.parent=f||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new R(function(B,w){$._resolve=B,$._reject=w}),this._completion.then(function(){$.active=!1,$.on.complete.fire()},function(B){var w=$.active;return $.active=!1,$.on.error.fire(B),$.parent?$.parent._reject(B):w&&$.idbtrans&&$.idbtrans.abort(),J(B)})})),this.Version=(s=this,st(nr.prototype,function(d){this.db=s,this._cfg={version:d,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(o=this,st(nn.prototype,function(d,y,g){if(this.db=o,this._ctx={table:d,index:y===":id"?null:y,or:g},this._cmp=this._ascending=I,this._descending=function(m,f){return I(f,m)},this._max=function(m,f){return 0<I(m,f)?m:f},this._min=function(m,f){return I(m,f)<0?m:f},this._IDBKeyRange=o._deps.IDBKeyRange,!this._IDBKeyRange)throw new X.MissingAPI})),this.on("versionchange",function(d){0<d.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(d){!d.newVersion||d.newVersion<d.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(d.oldVersion/10))}),this._maxKey=wt(t.IDBKeyRange),this._createTransaction=function(d,y,g,m){return new u.Transaction(d,y,g,u._options.chromeTransactionDurability,m)},this._fireOnBlocked=function(d){u.on("blocked").fire(d),C.filter(function(y){return y.name===u.name&&y!==u&&!y._state.vcFired}).map(function(y){return y.on("versionchange").fire(d)})},this.use(rr),this.use(ir),this.use(ja),this.use(ar),this.use(on),new Proxy(this,{get:function(d,y,g){var m;return y==="_vip"||(y==="table"?function(f){return sa(u.table(f),v)}:(m=Reflect.get(d,y,g))instanceof bt?sa(m,v):y==="tables"?m.map(function(f){return sa(f,v)}):y==="_createTransaction"?function(){return sa(m.apply(this,arguments),v)}:m)}}));this.vip=v,p.forEach(function(d){return d(u)})}var ia,i=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",P=(U.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},U.prototype[i]=function(){return this},U);function U(e){this._subscribe=e}try{ia={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{ia={indexedDB:null,IDBKeyRange:null}}function ne(e){var t,n=!1,a=new P(function(r){var s=ua(e),o,u=!1,p={},k={},v={get closed(){return u},unsubscribe:function(){u||(u=!0,o&&o.abort(),d&&D.storagemutated.unsubscribe(g))}},d=(r.start&&r.start(v),!1),y=function(){return ma(m)},g=function(f){Jt(p,f),Ca(k,p)&&y()},m=function(){var f,$,B;!u&&ia.indexedDB&&(p={},f={},o&&o.abort(),o=new AbortController,B=(w=>{var S=vn();try{s&&gn();var O=Vt(e,w);return O=s?O.finally(zt):O}finally{S&&mn()}})($={subscr:f,signal:o.signal,requery:y,querier:e,trans:null}),Promise.resolve(B).then(function(w){n=!0,t=w,u||$.signal.aborted||(p={},(S=>{for(var O in S)if(ie(S,O))return;return 1})(k=f)||d||(D(Se,g),d=!0),ma(function(){return!u&&r.next&&r.next(w)}))},function(w){n=!1,["DatabaseClosedError","AbortError"].includes(w?.name)||u||ma(function(){u||r.error&&r.error(w)})}))};return setTimeout(y,0),v});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var pe=Ft;function Me(e){var t=$e;try{$e=!0,D.storagemutated.fire(e),na(e,!0)}finally{$e=t}}nt(pe,W(W({},_t),{delete:function(e){return new pe(e,{addons:[]}).delete()},exists:function(e){return new pe(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=pe.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(rn(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(r){return r.name}).filter(function(r){return r!==h})}):ba(n,t).toCollection().primaryKeys()).then(e)}catch{return J(new X.MissingAPI)}var t,n},defineClass:function(){return function(e){de(this,e)}},ignoreTransaction:function(e){return H.trans?en(H.transless,e):e()},vip:ya,async:function(e){return function(){try{var t=xa(e.apply(this,arguments));return t&&typeof t.then=="function"?t:R.resolve(t)}catch(n){return J(n)}}},spawn:function(e,t,n){try{var a=xa(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:R.resolve(a)}catch(r){return J(r)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=R.resolve(typeof e=="function"?pe.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:R,debug:{get:function(){return gt},set:function(e){Oa(e)}},derive:kt,extend:de,props:nt,override:_a,Events:Ne,on:D,liveQuery:ne,extendObservabilitySet:Jt,getByKeyPath:$t,setByKeyPath:ot,delByKeyPath:function(e,t){typeof t=="string"?ot(e,t,void 0):"length"in t&&[].map.call(t,function(n){ot(e,n,void 0)})},shallowClone:At,deepClone:Xt,getObjectDiff:wa,cmp:I,asap:Ea,minKey:-1/0,addons:[],connections:C,errnames:ca,dependencies:ia,cache:sn,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),pe.maxKey=wt(pe.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(D(Se,function(e){$e||(e=new CustomEvent(E,{detail:e}),$e=!0,dispatchEvent(e),$e=!1)}),addEventListener(E,function(e){e=e.detail,$e||Me(e)}));var yt,$e=!1,Nt=function(){};return typeof BroadcastChannel<"u"&&((Nt=function(){(yt=new BroadcastChannel(E)).onmessage=function(e){return e.data&&Me(e.data)}})(),typeof yt.unref=="function"&&yt.unref(),D(Se,function(e){$e||yt.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Ft.disableBfCache&&e.persisted){gt&&console.debug("Dexie: handling persisted pagehide"),yt?.close();for(var t=0,n=C;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Ft.disableBfCache&&e.persisted&&(gt&&console.debug("Dexie: handling persisted pageshow"),Nt(),Me({all:new Ze(-1/0,[[]])}))})),R.rejectionMapper=function(e,t){return!e||e instanceof dn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!wn[e.name]?e:(t=new wn[e.name](t||e.message,e),"stack"in e&&mt(t,"stack",{get:function(){return this.inner.stack}}),t)},Oa(gt),W(Ft,Object.freeze({__proto__:null,Dexie:Ft,Entity:Q,PropModification:je,RangeSet:Ze,add:function(e){return new je({add:e})},cmp:I,default:Ft,liveQuery:ne,mergeRanges:We,rangesOverlap:Tn,remove:function(e){return new je({remove:e})},replacePrefix:function(e,t){return new je({replacePrefix:[e,t]})}}),{default:Ft}),Ft})})(Ya)),Ya.exports}var Mr=Pr();const lr=Er(Mr),gr=Symbol.for("Dexie"),Va=globalThis[gr]||(globalThis[gr]=lr);if(lr.semVer!==Va.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${lr.semVer} and ${Va.semVer}`);const{liveQuery:Rr,mergeRanges:Yr,rangesOverlap:Vr,RangeSet:zr,cmp:Ur,Entity:Gr,PropModification:Wr,replacePrefix:Jr,add:Hr,remove:Xr,DexieYProvider:Qr}=Va,Ot=new Va("haushaltsbuch-db");Ot.version(1).stores({years:"year",fixedTemplateState:"id"});const ur="singleton";function Cr(){return new Date().toISOString()}async function qn(){return Ot.years.orderBy("year").toArray()}async function Or(M){return Ot.years.get(M)}async function Kn(M){await Ot.years.put(M)}async function cr(){const M=await Ot.fixedTemplateState.get(ur);if(!M){const b={id:ur,templates:[],version:Cr(),updatedAt:new Date().toISOString()};return await Ot.fixedTemplateState.put(b),{templates:[],version:b.version}}return{templates:M.templates,version:M.version}}async function dr(M){const b=Cr();return await Ot.fixedTemplateState.put({id:ur,templates:M,version:b,updatedAt:new Date().toISOString()}),b}async function Ar(){const M=await qn(),b=await cr();return{exportedAt:new Date().toISOString(),years:M,fixedTemplates:b.templates}}async function Tr(M){await Ot.transaction("rw",[Ot.years,Ot.fixedTemplateState],async()=>{await Ot.years.clear(),await Ot.years.bulkPut(M.years),await dr(M.fixedTemplates)})}function De(M){const b=M.replace(",",".").trim();if(!b)return 0;const Ae=Number.parseFloat(b);return Number.isNaN(Ae)?0:Math.round(Ae*100)}const Dr=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function _(M){return Dr.format(M/100)}function vt(M){return(M/100).toFixed(2)}function Oe(M){return new Date(2026,M-1,1).toLocaleDateString("de-DE",{month:"long"})}const xr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function br(M){return xr.includes(M)}function Ir(M){switch(M){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}function Fr(M){const b={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ae="habu-theme",W="habu-backup-dirty",ce="habu-unexported-change-log",ae="habu-last-backup-filename",me="habu-recurring-budget-defaults";let se=null,de=null,et=null,tt=!1,ie=!1;const nt=new WeakMap;function at(){const l=M.querySelectorAll("[data-budget-vs-canvas]");if(l.length===0)return;const c=getComputedStyle(document.documentElement),C=c.getPropertyValue("--text-main").trim(),h=c.getPropertyValue("--text-muted").trim(),x=c.getPropertyValue("--table-stripe").trim(),A=c.getPropertyValue("--table-border").trim(),q=c.getPropertyValue("--budget-under").trim(),Y=c.getPropertyValue("--danger-2").trim(),N=96,Q=250,I=te=>1-Math.pow(1-Math.max(0,Math.min(1,te)),3);l.forEach(te=>{te.dataset.hoverBound!=="1"&&(te.dataset.hoverBound="1",te.addEventListener("mouseenter",()=>{te.dataset.hovering="1",at()}),te.addEventListener("mouseleave",()=>{delete te.dataset.hovering,delete te.dataset.hoverX,at()}),te.addEventListener("mousemove",ue=>{const he=te.getBoundingClientRect(),Se=Math.round(ue.clientX-he.left);te.dataset.hoverX=String(Se),at()}));const Ce=Number.parseInt(te.dataset.budgetCents??"0",10),_e=Number.parseInt(te.dataset.actualCents??"0",10),je=te.dataset.label??"Kategorie",Ve=te.dataset.hovering==="1",be=`${je}|${Ce}|${_e}`,bt=te.dataset.lastRenderSignature!==be;te.dataset.lastRenderSignature=be;const re=Math.max(120,Math.floor(te.clientWidth||120)),Ne=window.devicePixelRatio||1,st=Math.floor(re*Ne),Ke=Math.floor(N*Ne);(te.width!==st||te.height!==Ke)&&(te.width=st,te.height=Ke);const K=te.getContext("2d");if(!K)return;const ze=Math.max(1,Ce,_e),ft=Math.min(1,Math.max(0,Ce/ze)),Ut=Math.min(1,Math.max(0,_e/ze)),ht=Ce-_e,it=Ce>0?_e/Ce*100:_e>0?100:0,Ct=8,Z=Ct,ut=34,Ue=re-Ct*2,He=22,ye=Number.parseInt(te.dataset.hoverX??"-1",10),Xe=(ue,he,Se,E,D)=>{K.beginPath(),K.moveTo(ue+D,he),K.lineTo(ue+Se-D,he),K.quadraticCurveTo(ue+Se,he,ue+Se,he+D),K.lineTo(ue+Se,he+E-D),K.quadraticCurveTo(ue+Se,he+E,ue+Se-D,he+E),K.lineTo(ue+D,he+E),K.quadraticCurveTo(ue,he+E,ue,he+E-D),K.lineTo(ue,he+D),K.quadraticCurveTo(ue,he,ue+D,he),K.closePath()},xt=ue=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,te.width,te.height),K.scale(Ne,Ne),Xe(Z,ut,Ue,He,8),K.fillStyle=x,K.fill(),K.strokeStyle=A,K.lineWidth=1,K.stroke();const he=[.6,.25,.15],Se=[.1,.16,.24];let E=0;he.forEach((Gt,It)=>{const wt=Ue*Gt;K.save(),K.globalAlpha=Se[It]??.1,K.fillStyle=h,K.fillRect(Z+E,ut,wt,He),K.restore(),E+=wt});const D=Ce>0&&_e>Ce?Y:q,pt=Ue*Ut*ue;Xe(Z,ut+3,pt,He-6,6),K.fillStyle=D,K.fill(),Ve&&(K.save(),K.strokeStyle=D,K.lineWidth=1.5,K.globalAlpha=.8,Xe(Z-1,ut+2,Math.max(2,pt+2),He-4,7),K.stroke(),K.restore());const Qe=Z+Ue*ft;K.strokeStyle=C,K.lineWidth=Ve?3:2,K.beginPath(),K.moveTo(Qe,ut-3),K.lineTo(Qe,ut+He+3),K.stroke(),Ve&&ye>=Z&&ye<=Z+Ue&&(K.save(),K.strokeStyle=C,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(ye,ut-8),K.lineTo(ye,ut+He+8),K.stroke(),K.restore()),K.fillStyle=C,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(je,Z,10);const bn=it*ue;if(K.fillStyle=it>100?Y:it<100?q:h,K.textAlign="right",K.fillText(`${bn.toFixed(0)}%`,Z+Ue,10),K.fillStyle=h,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${_(_e)} · Ziel ${_(Ce)} · Δ ${ht>=0?"+":""}${_(ht)}`,Z,64),Ve){const Gt=`Nutzung ${it.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const It=8,wt=5,Ee=22,yn=K.measureText(Gt).width+It*2,an=Number.isFinite(ye)?ye-yn/2:Z+Ue-yn,we=Math.min(Z+Ue-yn,Math.max(Z,an)),Jn=ut-Ee-8;K.save(),K.fillStyle=C,K.globalAlpha=.92,Xe(we,Jn,yn,Ee,6),K.fill(),K.restore(),K.fillStyle=x,K.textAlign="left",K.textBaseline="top",K.fillText(Gt,we+It,Jn+wt)}},Ge=nt.get(te);if(Ge&&window.cancelAnimationFrame(Ge),!bt){xt(1);return}const Dt=performance.now(),nn=ue=>{const he=ue-Dt,Se=Math.min(1,he/Q);if(xt(I(Se)),Se<1){const E=window.requestAnimationFrame(nn);nt.set(te,E);return}nt.delete(te)},xe=window.requestAnimationFrame(nn);nt.set(te,xe)})}function mt(l){if(l==="dashboard"){const c=b.years.slice().sort((h,x)=>x.year-h.year);c.some(h=>h.year===b.dashboardYear)||(b.dashboardYear=b.selectedYear??c[0]?.year??null)}b.topModal=l,J()}function kt(){b.topModal&&(b.topModal=null,J())}function za(){b.showUnexportedChangeLogModal=!0,J()}function oa(){b.showUnexportedChangeLogModal&&(b.showUnexportedChangeLogModal=!1,J())}function Ln(){tt||(tt=!0,window.addEventListener("keydown",l=>{if(l.key==="Escape"){if(b.showUnexportedChangeLogModal){l.preventDefault(),oa();return}b.topModal&&(l.preventDefault(),kt())}}))}function _a(){const l=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(l<=0)return!1;const c=l/6;return window.scrollY>c}function un(){const l=M.querySelector("#scroll-up-btn");l&&l.classList.toggle("is-visible",_a())}function Ea(){if(ie)return;ie=!0;const l=()=>{un(),at()};window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l)}function $t(){if(se&&document.body.contains(se))return se;const l=document.getElementById("toast-root");if(l instanceof HTMLDivElement)return se=l,l;const c=document.createElement("div");return c.id="toast-root",c.className="toast-root",c.setAttribute("aria-live","polite"),c.setAttribute("aria-atomic","true"),document.body.appendChild(c),se=c,c}function ot(){if(de&&document.body.contains(de))return de;const l=document.getElementById("amount-modal-root");if(l instanceof HTMLDivElement)return de=l,l;const c=document.createElement("div");return c.id="amount-modal-root",document.body.appendChild(c),de=c,c}function At(){if(!de){et=null;return}de.innerHTML="",et=null}function Sa(l,c){let C=l;const h=c.min;if(h){const A=Number.parseFloat(h);if(!Number.isNaN(A)){const q=Math.round(A*100);C=Math.max(C,q)}}const x=c.max;if(x){const A=Number.parseFloat(x);if(!Number.isNaN(A)){const q=Math.round(A*100);C=Math.min(C,q)}}return C}function dt(l){if(l.disabled)return;const c=ot();At(),et=l;const C=De(l.value||"0"),h="Betrag anpassen";c.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${h}">
        <div class="amount-modal card">
          <h3>${h}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${_(C)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${_(C)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${_(C)} €</strong></div>
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
    `;const x=c.querySelector(".amount-modal-backdrop"),A=c.querySelector("#amount-modal-delta"),q=c.querySelector("#amount-modal-next-delta"),Y=c.querySelector("#amount-modal-next-overwrite"),N=c.querySelector("#amount-modal-cancel"),Q=c.querySelector("#amount-modal-overwrite"),I=c.querySelector("#amount-modal-apply");function te(){const be=De(A?.value??"0");return Sa(C+be,l)}function Ce(){const be=De(A?.value??"0");return Sa(be,l)}function _e(){q&&(q.textContent=`${_(te())} €`),Y&&(Y.textContent=`${_(Ce())} €`)}function je(){const be=et;if(!be){At();return}const bt=te();At(),be.value=vt(bt),be.dispatchEvent(new Event("change",{bubbles:!0}))}function Ve(){const be=et;if(!be){At();return}const bt=Ce();At(),be.value=vt(bt),be.dispatchEvent(new Event("change",{bubbles:!0}))}N?.addEventListener("click",()=>{At()}),Q?.addEventListener("click",()=>{Ve()}),I?.addEventListener("click",()=>{je()}),A?.addEventListener("input",()=>{_e()}),A?.addEventListener("keydown",be=>{if(be.key==="Escape"){be.preventDefault(),At();return}be.key==="Enter"&&(be.preventDefault(),je())}),x?.addEventListener("click",be=>{be.target===x&&At()}),window.setTimeout(()=>{A?.focus(),A?.select(),_e()},0)}function Be(l,c="success"){const C=$t(),h=document.createElement("div");h.className=`toast toast-${c}`,h.textContent=l,C.appendChild(h),requestAnimationFrame(()=>{h.classList.add("toast-visible")});const x=c==="error"?5e3:3e3;window.setTimeout(()=>{h.classList.remove("toast-visible"),window.setTimeout(()=>{h.remove()},220)},x)}function qt(){return new Date().getMonth()+1}function Xt(){return new Date().getFullYear()}function Pa(l){const c=Xt(),C=l.find(h=>h.year===c);return C?C.year:l[0]?.year??null}function la(){return new Date().toISOString().slice(0,10)}function jn(l){return l.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Ua(){const l=localStorage.getItem(Ae);return l&&br(l)?l:"light"}function Lt(l){b.theme=l,document.documentElement.setAttribute("data-theme",l),localStorage.setItem(Ae,l)}function cn(){return localStorage.getItem(W)==="1"}function Bt(l){localStorage.setItem(W,l?"1":"0")}function ua(){const l=localStorage.getItem(ce);if(!l)return[];try{const c=JSON.parse(l);return Array.isArray(c)?c.filter(C=>{if(!C||typeof C!="object")return!1;const h=C;return typeof h.id=="string"&&typeof h.timestampIso=="string"&&typeof h.message=="string"}).slice(-200):[]}catch{return[]}}function _t(l){localStorage.setItem(ce,JSON.stringify(l.slice(-200)))}function Ga(){const l=localStorage.getItem(ae);if(!l)return null;const c=l.trim();return c||null}function dn(){const l={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},c=localStorage.getItem(me);if(!c)return l;try{const C=JSON.parse(c),h=x=>typeof x=="number"&&Number.isFinite(x)?x:null;return{foodBudgetCents:h(C.foodBudgetCents),goingOutBudgetCents:h(C.goingOutBudgetCents),fixedBudgetCents:h(C.fixedBudgetCents),variableBudgetCents:h(C.variableBudgetCents),miscBudgetCents:h(C.miscBudgetCents)}}catch{return l}}function Ma(l){localStorage.setItem(me,JSON.stringify(l))}function xn(l){l.months.forEach(c=>{const{recurringBudgetDefaults:C}=b;typeof C.foodBudgetCents=="number"&&(c.foodBudgetCents=C.foodBudgetCents),typeof C.goingOutBudgetCents=="number"&&(c.goingOutBudgetCents=C.goingOutBudgetCents),typeof C.fixedBudgetCents=="number"&&(c.fixedBudgetCents=C.fixedBudgetCents),typeof C.variableBudgetCents=="number"&&(c.variableBudgetCents=C.variableBudgetCents),typeof C.miscBudgetCents=="number"&&(c.miscBudgetCents=C.miscBudgetCents)})}function fn(l){const c=l.trim();c&&localStorage.setItem(ae,c)}async function ca(){$t(),Lt(Ua()),b.hasUnexportedChanges=cn(),b.unexportedChangeLog=ua(),b.lastBackupFileName=Ga(),b.recurringBudgetDefaults=dn(),Ln(),Ea();const[l,c]=await Promise.all([qn(),cr()]);b.years=l,da(b.years),b.fixedTemplates=c.templates,b.fixedTemplateVersion=c.version,await ge(b.years),l.length>0&&(b.selectedYear=Pa(l),b.selectedMonth=qt()),J()}function da(l){const c=C=>C==="balance"||C==="fresh"||C==="salary"?C:void 0;l.forEach(C=>{C.months.forEach(h=>{typeof h.foodBudgetCents!="number"&&(h.foodBudgetCents=0),typeof h.goingOutBudgetCents!="number"&&(h.goingOutBudgetCents=0),Array.isArray(h.incomes)?h.incomes=h.incomes.map(x=>{const A=c(x.incomeSource);if(!A){const{incomeSource:q,...Y}=x;return Y}return{...x,incomeSource:A}}):h.incomes=[],typeof h.fixedBudgetCents!="number"&&(h.fixedBudgetCents=h.fixedCosts.reduce((x,A)=>x+A.plannedCents,0)),typeof h.variableBudgetCents!="number"&&(h.variableBudgetCents=h.variablePositions.reduce((x,A)=>x+A.budgetCents,0)),Array.isArray(h.variablePositions)||(h.variablePositions=[]),typeof h.miscBudgetCents!="number"&&(h.miscBudgetCents=0)})})}function X(l){return l==="balance"?"Bestandsguthaben":l==="salary"?"Gehalt":l==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function wn(l){return l==="fresh"||l==="salary"||!l}async function ge(l){for(const c of l)await Kn(c)}function jt(){if(b.selectedYear)return b.years.find(l=>l.year===b.selectedYear)}function qe(){const l=jt();if(l)return l.months.find(c=>c.month===b.selectedMonth)}function Et(l){const c=l.days.reduce((Y,N)=>Y+N.foodCents,0),C=l.days.reduce((Y,N)=>Y+N.goingOutCents,0),h=l.fixedCosts.reduce((Y,N)=>Y+N.actualCents,0),x=l.variableCosts.reduce((Y,N)=>Y+N.amountCents,0)+l.variablePositions.reduce((Y,N)=>Y+N.actualCents,0),A=l.miscCosts.reduce((Y,N)=>Y+N.amountCents,0),q=c+C+h+x+A;return{foodCents:c,goingOutCents:C,fixedCents:h,variableCents:x,miscCents:A,totalCents:q}}function Rn(l){const c=l.foodBudgetCents??0,C=l.goingOutBudgetCents??0,h=l.fixedBudgetCents??l.fixedCosts.reduce((q,Y)=>q+Y.plannedCents,0),x=l.variablePositions.reduce((q,Y)=>q+Y.budgetCents,0),A=l.miscBudgetCents??0;return c+C+h+(l.variableBudgetCents??x)+A}function Yn(l){return l.months.reduce((c,C)=>{const h=Et(C);return{foodCents:c.foodCents+h.foodCents,goingOutCents:c.goingOutCents+h.goingOutCents,fixedCents:c.fixedCents+h.fixedCents,variableCents:c.variableCents+h.variableCents,miscCents:c.miscCents+h.miscCents,totalCents:c.totalCents+h.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Wa(l){return l.months.slice().sort((c,C)=>c.month-C.month).map(c=>({month:c.month,summary:Et(c)}))}function fa(l){const c=l.months.reduce((q,Y)=>q+(Y.foodBudgetCents??0),0),C=l.months.reduce((q,Y)=>q+(Y.goingOutBudgetCents??0),0),h=l.months.reduce((q,Y)=>q+(Y.fixedBudgetCents??Y.fixedCosts.reduce((N,Q)=>N+Q.plannedCents,0)),0),x=l.months.reduce((q,Y)=>q+(Y.variableBudgetCents??Y.variablePositions.reduce((N,Q)=>N+Q.budgetCents,0)),0),A=l.months.reduce((q,Y)=>q+(Y.miscBudgetCents??0),0);return{foodCents:c,goingOutCents:C,fixedCents:h,variableCents:x,miscCents:A,totalCents:c+C+h+x+A}}function kn(l){return l.months.reduce((c,C)=>c+C.incomes.reduce((h,x)=>h+(wn(x.incomeSource)?x.amountCents:0),0),0)}function gt(l,c){const C=l.months.slice().sort((h,x)=>h.month-x.month)[0];return C?c.get(le(l.year,C.month))?.carriedFromPreviousCents??0:0}function Oa(){const l=b.years.slice().sort((h,x)=>h.year-x.year).flatMap(h=>h.months.slice().sort((x,A)=>x.month-A.month).map(x=>({year:h.year,month:x}))),c=new Map;let C=0;return l.forEach(({year:h,month:x},A)=>{const q=x.carryoverOverrideCents,Y=typeof q=="number",N=Y?q:C,Q=A>0||Y,I=x.incomes.reduce((je,Ve)=>je+(wn(Ve.incomeSource)?Ve.amountCents:0),0),te=Rn(x),Ce=I+N,_e=Ce-te;c.set(le(h,x.month),{hasPreviousMonth:Q,carriedFromPreviousCents:N,recordedIncomeCents:I,effectiveIncomeCents:Ce,plannedBudgetCents:te,netCents:_e}),C=_e}),c}function Je(l,c){return c<=0?"":l>c?"budget-over":l<c?"budget-under":""}function Aa(l){return`${l>0?"+":""}${_(l)}`}function St(l,c){const C=l-c,h=Je(c,l);return`${_(l)} <span class="eval-diff ${h}">(Δ ${Aa(C)})</span>`}function Ye(l,c){const C=l!==null,h=C?l-c:null,x=C?Je(c,l):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${C?`${_(l)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${_(c)} €</strong>
      </div>
      <div class="column-overview-row ${x}">
        <span>Diff</span>
        <strong>${h===null?"-":`${_(h)} €`}</strong>
      </div>
    </div>`}async function Qt(l){if(await Or(l)){alert(`Jahr ${l} existiert bereits.`);return}const C=hr(l,b.fixedTemplates,b.fixedTemplateVersion);xn(C),await Kn(C),b.years=await qn(),hn(`Jahr ${l} wurde angelegt`),b.selectedYear=l,b.selectedMonth=qt(),Be(`Jahr ${l} wurde angelegt.`),J()}function hn(l="Änderung an den Daten"){b.hasUnexportedChanges=!0,Bt(!0);const c=b.selectedYear?`${b.selectedYear}-${String(b.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",C={id:Kt("change"),timestampIso:new Date().toISOString(),message:`${l} (${c})`};b.unexportedChangeLog=[...b.unexportedChangeLog,C].slice(-200),_t(b.unexportedChangeLog)}function $n(l){const c=l.trim();c&&(b.lastBackupFileName=c,fn(c))}function Vn(l){b.hasUnexportedChanges=!1,Bt(!1),b.unexportedChangeLog=[],_t([]),b.showUnexportedChangeLogModal=!1,$n(l)}async function Ie(l){const c=jt();c&&(await Kn(c),b.years=await qn(),hn(l))}async function rt(l){for(const c of b.years)await Kn(c);b.years=await qn(),hn(l)}function le(l,c){return l*100+c}function Rt(l){l.fixedBudgetCents=l.fixedCosts.reduce((c,C)=>c+C.plannedCents,0)}function lt(l){l.variableBudgetCents=l.variablePositions.reduce((c,C)=>c+C.budgetCents,0)}function H(){if(b.selectedYear)return`${b.selectedYear}-${String(b.selectedMonth).padStart(2,"0")}`;const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`}function pn(){const l=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",H());if(!l)return null;const c=l.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!c)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const C=c[1],h=c[2];return!C||!h?null:{year:Number.parseInt(C,10),month:Number.parseInt(h,10)}}function Zt(l,c){const C=le(c.year,c.month);b.years.forEach(h=>{h.months.forEach(x=>{if(le(h.year,x.month)<C)return;x.fixedCosts.some(q=>q.templateId===l.id)||(x.fixedCosts.push({id:Kt("fixed"),templateId:l.id,name:l.name,plannedCents:l.plannedCents,actualCents:0}),Rt(x))})})}function zn(l,c,C){const h=le(C.year,C.month);b.years.forEach(x=>{x.months.forEach(A=>{le(x.year,A.month)<h||(A.fixedCosts=A.fixedCosts.map(q=>q.templateId!==c.id?q:{...q,name:c.name,plannedCents:c.plannedCents,actualCents:q.actualCents===l.plannedCents?c.plannedCents:q.actualCents}),Rt(A))})})}function R(l,c){const C=le(c.year,c.month);b.years.forEach(h=>{h.months.forEach(x=>{le(h.year,x.month)<C||(x.fixedCosts=x.fixedCosts.filter(A=>A.templateId!==l),Rt(x))})})}async function ha(l,c){const C=l.trim();if(!C)return;const h=pn();if(!h)return;const x=!!b.editingFixedTemplateId;if(b.editingFixedTemplateId){const A=b.fixedTemplates.find(Y=>Y.id===b.editingFixedTemplateId);if(!A)return;const q={...A,name:C,plannedCents:c};b.fixedTemplates=b.fixedTemplates.map(Y=>Y.id===b.editingFixedTemplateId?q:Y),zn(A,q,h)}else{const A={id:Kt("tpl"),name:C,plannedCents:c};b.fixedTemplates=[...b.fixedTemplates,A],Zt(A,h)}b.fixedTemplateVersion=await dr(b.fixedTemplates),b.editingFixedTemplateId=null,await rt(x?`Fixkosten-Vorlage aktualisiert: ${C} (${_(c)} €)`:`Fixkosten-Vorlage hinzugefügt: ${C} (${_(c)} €)`),Be(x?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),J()}function Ta(l){b.editingFixedTemplateId=l,J()}function pa(){b.editingFixedTemplateId=null,J()}async function Da(l){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const C=pn();if(!C)return;const h=b.fixedTemplates.find(x=>x.id===l);b.fixedTemplates=b.fixedTemplates.filter(x=>x.id!==l),R(l,C),b.editingFixedTemplateId===l&&(b.editingFixedTemplateId=null),b.fixedTemplateVersion=await dr(b.fixedTemplates),await rt(`Fixkosten-Vorlage gelöscht: ${h?.name??"Unbekannt"}`),Be("Fixkosten-Vorlage wurde gelöscht."),J()}async function Un(l,c,C){const h=qe();h&&(h.days=h.days.map(x=>x.isoDate===l?{...x,[c]:C}:x),await Ie(`${c==="foodCents"?"Essen":"Ausgehen"} am ${l} angepasst auf ${_(C)} €`),J())}async function Ja(l,c){const C=qe();if(!C)return;const h=C.fixedCosts.find(x=>x.id===l);C.fixedCosts=C.fixedCosts.map(x=>x.id===l?{...x,actualCents:c}:x),await Ie(`Fixkosten-Ist angepasst: ${h?.name??"Unbekannt"} auf ${_(c)} €`),J()}async function Ha(l,c){const C=qe();if(!C)return;const h=C.fixedCosts.find(x=>x.id===l);h&&(C.fixedCosts=C.fixedCosts.map(x=>x.id===l?{...x,plannedCents:c}:x),Rt(C),await Ie(`Fixkosten-Budget angepasst: ${h.name} auf ${_(c)} €`),J())}async function vn(l,c){const C=qe();if(!C)return;const h=l.trim();if(!h){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(c<=0){alert("Bitte einen positiven Betrag eingeben.");return}const x={id:Kt("fixed"),templateId:Kt("fixed-local"),name:h,plannedCents:c,actualCents:0};C.fixedCosts=[x,...C.fixedCosts],Rt(C),await Ie(`Fixkosten-Position hinzugefügt: ${h} (${_(c)} €)`),Be("Fixkosten-Position wurde hinzugefügt."),J()}async function mn(l){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const C=qe();if(!C)return;const h=C.fixedCosts.find(x=>x.id===l);h&&(C.fixedCosts=C.fixedCosts.filter(x=>x.id!==l),Rt(C),await Ie(`Fixkosten-Position gelöscht: ${h.name}`),Be("Fixkosten-Position wurde gelöscht."),J())}async function va(l){await Yt("fixedBudgetCents",l,"Fixkosten")}async function Gn(l){await Yt("foodBudgetCents",l,"Essen")}async function ke(l){await Yt("goingOutBudgetCents",l,"Ausgehen")}async function Le(l){await Yt("miscBudgetCents",l,"Sonstiges")}async function Xa(l){await Yt("variableBudgetCents",l,"Variable Kosten")}async function Yt(l,c,C){const h=qe(),x=b.selectedYear;if(!h||!x||h[l]===c)return;if(h[l]=c,confirm(`Soll das Budget "${C}" auch für zukünftige Monate übernommen werden?`)){const q=le(x,b.selectedMonth);b.years.forEach(Y=>{Y.months.forEach(N=>{le(Y.year,N.month)<=q||(N[l]=c)})}),b.recurringBudgetDefaults[l]=c,Ma(b.recurringBudgetDefaults),await rt(`Budget "${C}" auf ${_(c)} € gesetzt (inkl. zukünftiger Monate)`),Be(`Budget "${C}" wurde für zukünftige Monate übernommen.`),J();return}await Ie(`Budget "${C}" auf ${_(c)} € gesetzt`),J()}async function Bn(l){const c=qe();c&&(l===null?c.carryoverOverrideCents=null:c.carryoverOverrideCents=l,await Ie(l===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${_(l)} € gesetzt`),J())}async function _n(l,c,C){const h=qe(),x=b.selectedYear;if(!h||!x)return;const A=l.trim();if(!A){alert("Bitte Bezeichnung für die Position angeben.");return}if(h.variablePositions=[{id:Kt("varpos"),name:A,budgetCents:c,actualCents:0},...h.variablePositions],lt(h),C){const q=le(x,b.selectedMonth);b.years.forEach(Y=>{Y.months.forEach(N=>{le(Y.year,N.month)<=q||(N.variablePositions=[{id:Kt("varpos"),name:A,budgetCents:c,actualCents:0},...N.variablePositions],lt(N))})}),await rt(`Variable Position hinzugefügt: ${A} (${_(c)} €) für zukünftige Monate`),Be("Variable Position wurde für zukünftige Monate hinzugefügt."),J();return}await Ie(`Variable Position hinzugefügt: ${A} (${_(c)} €)`),Be("Variable Position wurde hinzugefügt."),J()}async function Qa(l,c){const C=qe();if(!C)return;const h=C.variablePositions.find(x=>x.id===l);C.variablePositions=C.variablePositions.map(x=>x.id===l?{...x,actualCents:c}:x),await Ie(`Istwert Variable Position angepasst: ${h?.name??"Unbekannt"} auf ${_(c)} €`),J()}async function Vt(l,c){const C=qe();if(!C)return;const h=C.variablePositions.find(x=>x.id===l);C.variablePositions=C.variablePositions.map(x=>x.id===l?{...x,budgetCents:c}:x),lt(C),await Ie(`Budget Variable Position angepasst: ${h?.name??"Unbekannt"} auf ${_(c)} €`),J()}async function gn(l){if(!confirm("Variable Position wirklich löschen?"))return;const C=qe(),h=b.selectedYear;if(!C||!h)return;const x=C.variablePositions.find(N=>N.id===l);if(!x)return;const A=le(h,b.selectedMonth),Y=b.years.some(N=>N.months.some(Q=>le(N.year,Q.month)>A&&Q.variablePositions.some(I=>I.name===x.name&&I.budgetCents===x.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(C.variablePositions=C.variablePositions.filter(N=>N.id!==l),lt(C),Y){b.years.forEach(N=>{N.months.forEach(Q=>{le(N.year,Q.month)<=A||(Q.variablePositions=Q.variablePositions.filter(I=>!(I.name===x.name&&I.budgetCents===x.budgetCents)),lt(Q))})}),await rt(`Variable Position gelöscht: ${x.name} (inkl. zukünftiger Monate)`),Be("Variable Position wurde auch in zukünftigen Monaten gelöscht."),J();return}await Ie(`Variable Position gelöscht: ${x.name}`),Be("Variable Position wurde gelöscht."),J()}async function zt(l){const c=qe(),C=b.selectedYear;if(!c||!C)return;const h=c.variablePositions.find(I=>I.id===l);if(!h)return;const x={year:b.selectedMonth===12?C+1:C,month:b.selectedMonth===12?1:b.selectedMonth+1};let A=b.years.find(I=>I.year===x.year);if(!A){const I=hr(x.year,b.fixedTemplates,b.fixedTemplateVersion);xn(I),await Kn(I),b.years=[...b.years,I].sort((te,Ce)=>te.year-Ce.year),A=I}const q=A.months.find(I=>I.month===x.month);if(!q)return;const Y=q.variablePositions.some(I=>I.id===h.id||I.name===h.name&&I.budgetCents===h.budgetCents);if(c.variablePositions=c.variablePositions.filter(I=>I.id!==l),lt(c),!Y){const te=q.variablePositions.some(Ce=>Ce.id===h.id)?{...h,id:Kt("varpos")}:h;q.variablePositions=[te,...q.variablePositions],lt(q)}const N=`${Oe(x.month)} ${x.year}`,Q=`Variable Position verschoben: ${h.name} → ${N}`;if(x.year===C)await Ie(Q);else{const I=jt();if(!I)return;await Kn(I),await Kn(A),b.years=await qn(),da(b.years),hn(Q)}Be(Y?`Position entfernt (im Folgemonat schon vorhanden: ${N}).`:`Position in den Folgemonat verschoben: ${N}.`),J()}async function En(l,c,C){const h=qe(),x=b.selectedYear;if(!h||!x)return;const A=l.trim();if(!A){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(c<=0){alert("Bitte einen positiven Betrag eingeben.");return}const q=pr(A,c);if(h.miscCosts=[q,...h.miscCosts],C){const Y=le(x,b.selectedMonth);b.years.forEach(N=>{N.months.forEach(Q=>{le(N.year,Q.month)<=Y||(Q.miscCosts=[pr(A,c),...Q.miscCosts])})}),await rt(`Sonstige Position hinzugefügt: ${A} (${_(c)} €) für zukünftige Monate`),Be("Sonstige Position wurde für zukünftige Monate hinzugefügt."),J();return}await Ie(`Sonstige Position hinzugefügt: ${A} (${_(c)} €)`),Be("Sonstige Position wurde hinzugefügt."),J()}async function Za(l){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const C=qe(),h=b.selectedYear;if(!C||!h)return;const x=C.miscCosts.find(N=>N.id===l);if(!x)return;const A=le(h,b.selectedMonth),Y=b.years.some(N=>N.months.some(Q=>le(N.year,Q.month)>A&&Q.miscCosts.some(I=>I.description===x.description&&I.amountCents===x.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(C.miscCosts=C.miscCosts.filter(N=>N.id!==l),Y){b.years.forEach(N=>{N.months.forEach(Q=>{le(N.year,Q.month)<=A||(Q.miscCosts=Q.miscCosts.filter(I=>!(I.description===x.description&&I.amountCents===x.amountCents)))})}),await rt(`Sonstige Position gelöscht: ${x.description} (${_(x.amountCents)} €) inkl. zukünftiger Monate`),Be("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),J();return}await Ie(`Sonstige Position gelöscht: ${x.description} (${_(x.amountCents)} €)`),Be("Sonstige Position wurde gelöscht."),J()}async function Tt(l,c,C,h){const x=qe(),A=b.selectedYear;if(!x||!A)return;const q=l.trim();if(!q){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(c<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const Y=vr(q,c,C);if(x.incomes=[Y,...x.incomes],h){const N=le(A,b.selectedMonth);b.years.forEach(Q=>{Q.months.forEach(I=>{le(Q.year,I.month)<=N||(I.incomes=[vr(q,c,C),...I.incomes])})}),await rt(`Einkommen hinzugefügt: ${q} (${_(c)} €, ${X(C)}) für zukünftige Monate`),Be("Einkommen wurde für zukünftige Monate hinzugefügt."),J();return}await Ie(`Einkommen hinzugefügt: ${q} (${_(c)} €, ${X(C)})`),Be("Einkommen wurde hinzugefügt."),J()}async function Ia(l,c){const C=qe();if(!C)return;const h=C.incomes.find(x=>x.id===l);h&&(C.incomes=C.incomes.map(x=>{if(x.id!==l)return x;if(!c){const{incomeSource:A,...q}=x;return q}return{...x,incomeSource:c}}),await Ie(`Einkommensart angepasst: ${h.description} → ${X(c)}`),J())}async function en(l){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const C=qe(),h=b.selectedYear;if(!C||!h)return;const x=C.incomes.find(N=>N.id===l);if(!x)return;const A=le(h,b.selectedMonth),Y=b.years.some(N=>N.months.some(Q=>le(N.year,Q.month)>A&&Q.incomes.some(I=>I.description===x.description&&I.amountCents===x.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(C.incomes=C.incomes.filter(N=>N.id!==l),Y){b.years.forEach(N=>{N.months.forEach(Q=>{le(N.year,Q.month)<=A||(Q.incomes=Q.incomes.filter(I=>!(I.description===x.description&&I.amountCents===x.amountCents)))})}),await rt(`Einkommen gelöscht: ${x.description} (${_(x.amountCents)} €) inkl. zukünftiger Monate`),Be("Einkommen wurde auch in zukünftigen Monaten gelöscht."),J();return}await Ie(`Einkommen gelöscht: ${x.description} (${_(x.amountCents)} €)`),Be("Einkommen wurde gelöscht."),J()}async function Fa(){const l=await Ar(),c=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),C=URL.createObjectURL(c),h=`haushaltsbuch-backup-${new Date().toISOString().slice(0,10)}.json`,x=document.createElement("a");x.href=C,x.download=h,x.click(),URL.revokeObjectURL(C),Vn(h),J(),Be("Backup wurde exportiert.")}async function ma(l){const c=await l.text(),C=JSON.parse(c);await Tr(C);const[h,x]=await Promise.all([qn(),cr()]);b.years=h,da(b.years),b.fixedTemplates=x.templates,b.fixedTemplateVersion=x.version,await ge(b.years),b.selectedYear=Pa(h),b.selectedMonth=qt(),Vn(l.name),Be("Backup wurde importiert."),J()}function J(){const l=jt(),c=qe(),C=la(),h=c?Et(c):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},x=l?Yn(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},A=l?Wa(l):[],q=c?c.foodBudgetCents??0:0,Y=c?c.goingOutBudgetCents??0:0,N=c?c.fixedBudgetCents??c.fixedCosts.reduce((i,P)=>i+P.plannedCents,0):0,Q=c?c.variableBudgetCents??c.variablePositions.reduce((i,P)=>i+P.budgetCents,0):0,I=c?c.miscBudgetCents??0:0,te=l?l.months.reduce((i,P)=>i+(P.foodBudgetCents??0),0):0,Ce=l?l.months.reduce((i,P)=>i+(P.goingOutBudgetCents??0),0):0,_e=l?l.months.reduce((i,P)=>i+(P.fixedBudgetCents??P.fixedCosts.reduce((U,ne)=>U+ne.plannedCents,0)),0):0,je=l?l.months.reduce((i,P)=>i+(P.variableBudgetCents??P.variablePositions.reduce((U,ne)=>U+ne.budgetCents,0)),0):0,Ve=l?l.months.reduce((i,P)=>i+(P.miscBudgetCents??0),0):0,be=c?c.incomes.reduce((i,P)=>i+(wn(P.incomeSource)?P.amountCents:0),0):0,bt=c?c.incomes.reduce((i,P)=>i+(P.incomeSource==="salary"?P.amountCents:0),0):0,re=Oa(),Ne=l?re.get(le(l.year,b.selectedMonth)):void 0,st=l?l.months.slice().sort((i,P)=>i.month-P.month)[0]:void 0,Ke=Ne?.carriedFromPreviousCents??0,K=Ne?.hasPreviousMonth??!1,ze=Ne?.effectiveIncomeCents??be,ft=c?Rn(c):0,Ut=Ne?.netCents??be-ft,ht=ze-h.totalCents,it=bt-h.totalCents,Ct=h.totalCents>0?`${(bt/h.totalCents*100).toFixed(1)} %`:"-",Z=Ke<0?"danger":Ke>0?"budget-under":"",ut=Ut<0?"danger":Ut>0?"budget-under":"",Ue=ht<0?"danger":ht>0?"budget-under":"",He=l?l.months.reduce((i,P)=>i+P.incomes.reduce((U,ne)=>U+(wn(ne.incomeSource)?ne.amountCents:0),0),0):0,ye=l?l.months.reduce((i,P)=>i+P.incomes.reduce((U,ne)=>U+(ne.incomeSource==="salary"?ne.amountCents:0),0),0):0,Xe=l&&st?re.get(le(l.year,st.month))?.carriedFromPreviousCents??0:0,xt=He+Xe,Ge=xt-x.totalCents,Dt=ye-x.totalCents,nn=x.totalCents>0?`${(ye/x.totalCents*100).toFixed(1)} %`:"-",xe=Xe<0?"danger":Xe>0?"budget-under":"",ue=Ge<0?"danger":Ge>0?"budget-under":"",he=q+Y+N+Q+I,Se=q+Y,E=h.foodCents+h.goingOutCents,D=Se-E,pt=Je(E,Se),Qe=te+Ce+_e+je+Ve,bn=ze-he,Gt=xt-Qe,It=he-h.totalCents,wt=Qe-x.totalCents,Ee=i=>i<0?"danger":i>0?"budget-under":"",Wn=(i,P)=>P<=0?"muted":i>=P?"budget-under":"danger",yn=Wn(bt,h.totalCents),an=Wn(ye,x.totalCents),we=(i,P)=>{if(P<=0)return"0%";const ne=Math.max(0,i)/P*100;return`${Math.min(100,Math.max(0,ne)).toFixed(1)}%`},Jn=(i,P)=>{if(P<=0)return i>0?100:0;const U=Math.max(0,i)/P*100;return Math.max(0,U)},Sn=[{label:"Essen",budgetCents:q,actualCents:h.foodCents},{label:"Ausgehen",budgetCents:Y,actualCents:h.goingOutCents},{label:"Fixkosten",budgetCents:N,actualCents:h.fixedCents},{label:"Variable",budgetCents:Q,actualCents:h.variableCents},{label:"Sonstige",budgetCents:I,actualCents:h.miscCents}];Math.max(1,...Sn.flatMap(i=>[i.budgetCents,i.actualCents]));const Pn=(i,P)=>P<=0?"bar-positive":i<=0||P>i?"bar-negative":"bar-positive",Hn=[{label:"Einkommen gesamt",valueCents:ze,className:"bar-income"},{label:"Echte Ausgaben",valueCents:h.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ht,className:ht<0?"bar-negative":"bar-positive"}],er=Math.max(1,...Hn.map(i=>Math.abs(i.valueCents))),tr=l?l.months.slice().sort((i,P)=>i.month-P.month).map(i=>{const P=i.foodBudgetCents??0,U=i.goingOutBudgetCents??0,ne=i.fixedBudgetCents??i.fixedCosts.reduce(($e,Nt)=>$e+Nt.plannedCents,0),pe=i.variableBudgetCents??i.variablePositions.reduce(($e,Nt)=>$e+Nt.budgetCents,0),Me=i.miscBudgetCents??0,yt=P+U+ne+pe+Me;return{month:i.month,foodBudgetCents:P,goingOutBudgetCents:U,fixedBudgetCents:ne,variableBudgetCents:pe,miscBudgetCents:Me,totalBudgetCents:yt}}):[],Pt=new Map(tr.map(i=>[i.month,i])),Xn=Math.max(1,...A.flatMap(i=>{const P=Pt.get(i.month)?.totalBudgetCents;return[i.summary.totalCents,P??0]})),Qn=Math.max(1,...A.flatMap(i=>{const P=Pt.get(i.month),U=i.summary.foodCents+i.summary.goingOutCents,ne=(P?.foodBudgetCents??0)+(P?.goingOutBudgetCents??0);return[U,ne]})),ga=Math.max(1,...A.flatMap(i=>{const P=Pt.get(i.month)?.fixedBudgetCents??0;return[i.summary.fixedCents,P]})),Mn=Math.max(1,...A.flatMap(i=>{const P=Pt.get(i.month)?.variableBudgetCents??0;return[i.summary.variableCents,P]})),On=Math.max(1,...A.flatMap(i=>{const P=Pt.get(i.month)?.miscBudgetCents??0;return[i.summary.miscCents,P]})),Zn=Je(h.fixedCents,N),Na=Je(h.foodCents,q),nr=Je(h.goingOutCents,Y),Cn=Je(h.variableCents,Q),ba=Je(h.miscCents,I),rn=b.editingFixedTemplateId?b.fixedTemplates.find(i=>i.id===b.editingFixedTemplateId):null,ya=b.hasUnexportedChanges,ea=b.unexportedChangeLog.slice().reverse(),Ze=b.lastBackupFileName?jn(b.lastBackupFileName):"-",An={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},We=b.years.slice().sort((i,P)=>i.year-P.year),Tn=We.some(i=>i.year===b.dashboardYear)?b.dashboardYear:b.selectedYear??We[We.length-1]?.year??null,Re=typeof Tn=="number"?We.find(i=>i.year===Tn):void 0,Ka=Re?Re.months.slice().sort((i,P)=>i.month-P.month):[],Wt=Re?Yn(Re):An,Jt=Re?fa(Re):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},Ca=Re?kn(Re):0,sn=Re?gt(Re,re):0,Dn=Ca+sn,ta=Re?Re.months.reduce((i,P)=>i+Rn(P),0):0,In=Dn-ta,na=Dn-Wt.totalCents,qa=[{label:"Essen",budgetCents:Jt.foodCents,actualCents:Wt.foodCents},{label:"Ausgehen",budgetCents:Jt.goingOutCents,actualCents:Wt.goingOutCents},{label:"Fixkosten",budgetCents:Jt.fixedCents,actualCents:Wt.fixedCents},{label:"Variable",budgetCents:Jt.variableCents,actualCents:Wt.variableCents},{label:"Sonstige",budgetCents:Jt.miscCents,actualCents:Wt.miscCents}],ct=Ka.map(i=>{const P=Re?re.get(le(Re.year,i.month)):void 0,U=Et(i),ne=i.incomes.reduce((a,r)=>a+r.amountCents,0),pe=P?.effectiveIncomeCents??ne,Me=P?.plannedBudgetCents??Rn(i),yt=U.foodCents,$e=U.goingOutCents,Nt=yt+$e,e=U.totalCents,t=pe-Me,n=pe-e;return{month:i.month,foodCents:yt,goingOutCents:$e,foodAndGoingOutCents:Nt,effectiveIncomeCents:pe,plannedBudgetCents:Me,actualCostCents:e,plannedNetCents:t,actualNetCents:n}}),xa=Math.max(1,...ct.map(i=>i.actualCostCents)),Fn=Math.max(1,...ct.flatMap(i=>[Math.abs(i.plannedNetCents),Math.abs(i.actualNetCents)])),ar=Math.max(1,...ct.map(i=>i.foodAndGoingOutCents)),wa=Math.max(1,...ct.map(i=>i.foodCents)),ka=Math.max(1,...ct.map(i=>i.goingOutCents)),on=We.reduce((i,P)=>{const U=fa(P);return{foodCents:i.foodCents+U.foodCents,goingOutCents:i.goingOutCents+U.goingOutCents,fixedCents:i.fixedCents+U.fixedCents,variableCents:i.variableCents+U.variableCents,miscCents:i.miscCents+U.miscCents,totalCents:i.totalCents+U.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Ht=We.reduce((i,P)=>{const U=Yn(P);return{foodCents:i.foodCents+U.foodCents,goingOutCents:i.goingOutCents+U.goingOutCents,fixedCents:i.fixedCents+U.fixedCents,variableCents:i.variableCents+U.variableCents,miscCents:i.miscCents+U.miscCents,totalCents:i.totalCents+U.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),rr=We.reduce((i,P)=>i+kn(P),0),La=We[0]?gt(We[0],re):0,aa=rr+La,ja=aa-on.totalCents,$a=aa-Ht.totalCents,ra=[{label:"Essen",budgetCents:on.foodCents,actualCents:Ht.foodCents},{label:"Ausgehen",budgetCents:on.goingOutCents,actualCents:Ht.goingOutCents},{label:"Fixkosten",budgetCents:on.fixedCents,actualCents:Ht.fixedCents},{label:"Variable",budgetCents:on.variableCents,actualCents:Ht.variableCents},{label:"Sonstige",budgetCents:on.miscCents,actualCents:Ht.miscCents}],Ba=Math.max(1,...ra.flatMap(i=>[i.budgetCents,i.actualCents])),ln=We.map(i=>{const P=Yn(i),U=fa(i),ne=kn(i),pe=gt(i,re),Me=ne+pe;return{year:i.year,budgetTotalCents:U.totalCents,actualTotalCents:P.totalCents,effectiveIncomeCents:Me,plannedNetCents:Me-U.totalCents,actualNetCents:Me-P.totalCents}}),Ra=Math.max(1,...ln.flatMap(i=>[Math.abs(i.plannedNetCents),Math.abs(i.actualNetCents)])),sr=Math.max(1,...ln.map(i=>i.actualTotalCents)),ir=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${b.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${b.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${b.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${We.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':b.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${We.map(i=>`<option value="${i.year}" ${i.year===Tn?"selected":""}>${i.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${Re?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${_(Dn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${_(ta)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${_(Wt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ee(In)}">${_(In)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ee(na)}">${_(na)}</div><div class="eval-value"></div></div>
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
                    ${qa.map(i=>{const P=Jn(i.actualCents,i.budgetCents),U=Math.min(100,P),ne=`${P.toFixed(0)}%`,pe=i.budgetCents-i.actualCents,Me=pe<0?"danger":pe>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Pn(i.budgetCents,i.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${U.toFixed(1)}%" title="${i.label}: ${_(i.actualCents)} von ${_(i.budgetCents)}">
                              <span class="circle-chart-value">${ne}</span>
                            </div>
                            <div class="circle-chart-label">${i.label}</div>
                            <div class="circle-chart-meta muted">B ${_(i.budgetCents)} / I ${_(i.actualCents)}</div>
                            <div class="circle-chart-meta ${Me}">${pe>=0?"+":""}${_(pe)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ct.length,1)}, minmax(0, 1fr));">
                    ${ct.map(i=>{const P=we(i.actualCostCents,xa);return`
                          <div class="spark-bar" title="${Oe(i.month)}: ${_(i.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${P}"></div>
                            <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                    ${ct.map(i=>{const P=we(Math.abs(i.plannedNetCents),Fn),U=we(Math.abs(i.actualNetCents),Fn),ne=i.plannedNetCents<0?"bar-negative":"bar-positive",pe=i.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Oe(i.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${_(i.plannedNetCents)} | Ist-Saldo: ${_(i.actualNetCents)}">
                              <div class="bar ${ne}" style="width:${P}; opacity: 0.35;"></div>
                              <div class="bar ${pe}" style="width:${U}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Ee(i.plannedNetCents)}">B ${_(i.plannedNetCents)}</span>
                              <span class="${Ee(i.actualNetCents)}">I ${_(i.actualNetCents)}</span>
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
                  ${ct.map(i=>`<tr>
                        <td>${Oe(i.month)}</td>
                        <td>${_(i.effectiveIncomeCents)}</td>
                        <td>${_(i.plannedBudgetCents)}</td>
                        <td>${_(i.actualCostCents)}</td>
                        <td class="${Ee(i.plannedNetCents)}">${_(i.plannedNetCents)}</td>
                        <td class="${Ee(i.actualNetCents)}">${_(i.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:b.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${We.map(i=>`<option value="${i.year}" ${i.year===Tn?"selected":""}>${i.year}</option>`).join("")}
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
                    ${ct.map(i=>{const P=we(i.foodAndGoingOutCents,ar);return`
                          <div class="spark-bar" title="${Oe(i.month)}: ${_(i.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${P}"></div>
                            <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ct.length,1)}, minmax(0, 1fr));">
                    ${ct.map(i=>{const P=we(i.foodCents,wa);return`
                          <div class="spark-bar" title="${Oe(i.month)}: ${_(i.foodCents)}">
                            <div class="spark-bar-fill" style="height:${P}"></div>
                            <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ct.length,1)}, minmax(0, 1fr));">
                    ${ct.map(i=>{const P=we(i.goingOutCents,ka);return`
                          <div class="spark-bar" title="${Oe(i.month)}: ${_(i.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${P}"></div>
                            <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${_(aa)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${_(on.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${_(Ht.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ee(ja)}">${_(ja)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ee($a)}">${_($a)}</div><div class="eval-value"></div></div>
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
                    ${ra.map(i=>{const P=we(i.budgetCents,Ba),U=we(i.actualCents,Ba),ne=Pn(i.budgetCents,i.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${i.label}</div>
                            <div class="bar-track" title="Budget: ${_(i.budgetCents)} | Ist: ${_(i.actualCents)}">
                              <div class="bar bar-budget" style="width:${P}"></div>
                              <div class="bar-marker" style="left:${P}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${ne}" style="width:${U}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ln.length,1)}, minmax(0, 1fr));">
                    ${ln.map(i=>{const P=we(i.actualTotalCents,sr);return`
                          <div class="spark-bar" title="${i.year}: ${_(i.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${P}"></div>
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
                    ${ln.map(i=>{const P=we(Math.abs(i.plannedNetCents),Ra),U=we(Math.abs(i.actualNetCents),Ra),ne=i.plannedNetCents<0?"bar-negative":"bar-positive",pe=i.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${i.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${_(i.plannedNetCents)} | Ist-Saldo: ${_(i.actualNetCents)}">
                              <div class="bar ${ne}" style="width:${P}; opacity: 0.35;"></div>
                              <div class="bar ${pe}" style="width:${U}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Ee(i.plannedNetCents)}">B ${_(i.plannedNetCents)}</span>
                              <span class="${Ee(i.actualNetCents)}">I ${_(i.actualNetCents)}</span>
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
                  ${ln.map(i=>`<tr>
                        <td>${i.year}</td>
                        <td>${_(i.effectiveIncomeCents)}</td>
                        <td>${_(i.budgetTotalCents)}</td>
                        <td>${_(i.actualTotalCents)}</td>
                        <td class="${Ee(i.plannedNetCents)}">${_(i.plannedNetCents)}</td>
                        <td class="${Ee(i.actualNetCents)}">${_(i.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,sa=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,Ft=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${rn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${rn?vt(rn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${rn?"Änderung speichern":"Vorlage speichern"}</button>
          ${rn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${b.fixedTemplates.map(i=>`<tr>
                    <td>${i.name}</td>
                    <td>${_(i.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${i.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${i.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,Pe=b.topModal==="years"?"Jahr hinzufügen":b.topModal==="fixed"?"Fixe Kosten (zentral)":b.topModal==="dashboard"?"Dashboard":"",ia=b.topModal==="years"?sa:b.topModal==="fixed"?Ft:b.topModal==="dashboard"?ir:"";M.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${ya?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${b.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${xr.map(i=>`<option value="${i}" ${b.theme===i?"selected":""}>${Ir(i)}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>

        <div class="top-shortcuts" role="navigation" aria-label="Schnellzugriff">
          <button class="btn" id="open-years-modal" type="button">Jahr hinzufügen</button>
          <button class="btn" id="open-fixed-modal" type="button">Fixe Kosten (zentral)</button>
          <button class="btn" id="open-dashboard-modal" type="button">Dashboard</button>
          <a class="btn" href="#section-food-costs">Essen</a>
          <a class="btn" href="#section-fixed-costs">Fixe</a>
          <a class="btn" href="#section-variable-costs">Variable</a>
          <a class="btn" href="#section-misc-costs">Sonstige</a>
        </div>

        ${b.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Pe}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Pe}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${ia}
                </div>
              </div>
            </div>
          `:""}

        ${b.showUnexportedChangeLogModal?`
            <div class="panel-modal-backdrop" id="unexported-change-log-backdrop" role="dialog" aria-modal="true" aria-label="Ungesicherte Änderungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Ungesicherte Änderungen</h2>
                  <button class="btn btn-quiet" id="unexported-change-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${ea.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${ea.map(i=>`<li><strong>${new Date(i.timestampIso).toLocaleString("de-DE")}</strong><span>${jn(i.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${l?`${Oe(b.selectedMonth)} ${l.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${b.years.map(i=>`<option value="${i.year}" ${i.year===b.selectedYear?"selected":""}>${i.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${b.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(i,P)=>P+1).map(i=>`<option value="${i}" ${i===b.selectedMonth?"selected":""}>${Oe(i)}</option>`).join("")}
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
                  ${Sn.map(i=>`
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
                  ${Hn.map(i=>{const P=we(Math.abs(i.valueCents),er),U=i.valueCents>=0?"+":"",ne=i.label==="Netto"?i.valueCents<0?"danger":i.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${i.label}</div>
                          <div class="bar-track" title="${_(i.valueCents)}">
                            <div class="bar ${i.className}" style="width:${P}"></div>
                          </div>
                          <div class="bar-meta"><span class="${ne}">${U}${_(i.valueCents)}</span></div>
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
                      ${A.map(i=>{const P=Pt.get(i.month)?.totalBudgetCents??0,U=we(P,Xn),ne=we(i.summary.totalCents,Xn);return`
                            <div class="spark-bar" title="${Oe(i.month)}: Ist ${_(i.summary.totalCents)} € | Budget ${_(P)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${U}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ne}"><span class="spark-bar-fill-value">${_(i.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                      ${A.map(i=>{const P=Pt.get(i.month),U=(P?.foodBudgetCents??0)+(P?.goingOutBudgetCents??0),ne=i.summary.foodCents+i.summary.goingOutCents,pe=we(U,Qn),Me=we(ne,Qn);return`
                            <div class="spark-bar" title="${Oe(i.month)}: Ist ${_(ne)} € | Budget ${_(U)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${pe}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Me}"><span class="spark-bar-fill-value">${_(ne)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                      ${A.map(i=>{const P=Pt.get(i.month)?.fixedBudgetCents??0,U=we(P,ga),ne=we(i.summary.fixedCents,ga);return`
                            <div class="spark-bar" title="${Oe(i.month)}: Ist ${_(i.summary.fixedCents)} € | Budget ${_(P)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${U}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ne}"><span class="spark-bar-fill-value">${_(i.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                      ${A.map(i=>{const P=Pt.get(i.month)?.variableBudgetCents??0,U=we(P,Mn),ne=we(i.summary.variableCents,Mn);return`
                            <div class="spark-bar" title="${Oe(i.month)}: Ist ${_(i.summary.variableCents)} € | Budget ${_(P)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${U}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ne}"><span class="spark-bar-fill-value">${_(i.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                      ${A.map(i=>{const P=Pt.get(i.month)?.miscBudgetCents??0,U=we(P,On),ne=we(i.summary.miscCents,On);return`
                            <div class="spark-bar" title="${Oe(i.month)}: Ist ${_(i.summary.miscCents)} € | Budget ${_(P)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${U}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ne}"><span class="spark-bar-fill-value">${_(i.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(i.month).slice(0,3)}</div>
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
                    <div class="eval-value">${_(be)}</div>
                    <div class="eval-value">${_(He)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Z}">${K?_(Ke):"-"}</div>
                    <div class="eval-value ${xe}">${l?_(Xe):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${_(ze)}</div>
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
                    <div class="eval-value">${St(q,h.foodCents)}</div>
                    <div class="eval-value">${_(te)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${St(Y,h.goingOutCents)}</div>
                    <div class="eval-value">${_(Ce)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${St(N,h.fixedCents)}</div>
                    <div class="eval-value">${_(_e)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${St(Q,h.variableCents)}</div>
                    <div class="eval-value">${_(je)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${St(I,h.miscCents)}</div>
                    <div class="eval-value">${_(Ve)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${St(he,h.totalCents)}</div>
                    <div class="eval-value">${_(Qe)}</div>
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
                    <div class="eval-value ${Na}">${_(h.foodCents)}</div>
                    <div class="eval-value">${_(x.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${nr}">${_(h.goingOutCents)}</div>
                    <div class="eval-value">${_(x.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Zn}">${_(h.fixedCents)}</div>
                    <div class="eval-value">${_(x.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Cn}">${_(h.variableCents)}</div>
                    <div class="eval-value">${_(x.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${ba}">${_(h.miscCents)}</div>
                    <div class="eval-value">${_(x.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${_(h.totalCents)}</div>
                    <div class="eval-value">${_(x.totalCents)}</div>
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
                    <div class="eval-value ${Ee(It)}">${_(It)}</div>
                    <div class="eval-value ${Ee(wt)}">${_(wt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Ee(bn)}">${_(bn)}</div>
                    <div class="eval-value ${Ee(Gt)}">${_(Gt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Ue}">${_(ht)}</div>
                    <div class="eval-value ${ue}">${_(Ge)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${Ee(it)}">${_(it)}</div>
                    <div class="eval-value ${Ee(Dt)}">${_(Dt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${yn}">${Ct}</div>
                    <div class="eval-value ${an}">${nn}</div>
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
                ${A.map((i,P,U)=>{const ne=l?re.get(le(l.year,i.month)):void 0,pe=ne?.plannedBudgetCents??0,Me=ne?.netCents??0,yt=Me<0?"danger":Me>0?"budget-under":"",$e=U[P-1],Nt=$e?.summary.foodCents??null,e=$e?.summary.goingOutCents??null,t=$e?.summary.fixedCents??null,n=$e?.summary.variableCents??null,a=$e?.summary.miscCents??null,r=$e?.summary.totalCents??null,s=l&&$e?re.get(le(l.year,$e.month))?.plannedBudgetCents??0:null,o=Nt===null?null:i.summary.foodCents-Nt,u=e===null?null:i.summary.goingOutCents-e,p=t===null?null:i.summary.fixedCents-t,k=n===null?null:i.summary.variableCents-n,v=a===null?null:i.summary.miscCents-a,d=r===null?null:i.summary.totalCents-r,y=s===null?null:pe-s,g=O=>O===null?"muted":O>0?"danger":O<0?"budget-under":"muted",m=O=>O===null?"muted":O>0?"danger":O<0?"budget-under":"muted",f=O=>O===null?"(Δ -)":`(Δ ${O>0?"+":""}${_(O)})`,$=l&&$e?re.get(le(l.year,$e.month))?.netCents??0:null,B=$===null?null:Me-$,w=B===null?"(Δ -)":`(Δ ${B>0?"+":""}${_(B)})`,S=B===null?"muted":B<0?"danger":B>0?"budget-under":"muted";return`<tr>
                  <td>${Oe(i.month)}</td>
                  <td>${_(i.summary.foodCents)} <span class="${g(o)}">${f(o)}</span></td>
                  <td>${_(i.summary.goingOutCents)} <span class="${g(u)}">${f(u)}</span></td>
                  <td>${_(i.summary.fixedCents)} <span class="${g(p)}">${f(p)}</span></td>
                  <td>${_(i.summary.variableCents)} <span class="${g(k)}">${f(k)}</span></td>
                  <td>${_(i.summary.miscCents)} <span class="${g(v)}">${f(v)}</span></td>
                  <td>${_(i.summary.totalCents)} <span class="${g(d)}">${f(d)}</span></td>
                  <td>${_(pe)} <span class="${m(y)}">${f(y)}</span></td>
                  <td class="${yt}">${_(Me)} <span class="${S}">${w}</span></td>
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
                    <td class="${Z}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${vt(Ke)}" />
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
                  <strong>${_(be)} €</strong>
                </div>
                <div class="column-overview-row ${Z}">
                  <span>Übernahme Vormonat</span>
                  <strong>${c?`${_(Ke)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${_(ze)} €</strong>
                </div>
                <div class="column-overview-row ${ut}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${_(Ut)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Ye(q,h.foodCents)}
                ${Ye(Y,h.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${_(Se)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${_(E)} €</strong>
                  </div>
                  <div class="column-overview-row ${pt}">
                    <span>Diff</span>
                    <strong>${_(D)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${vt(q)}" ${c?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${vt(Y)}" ${c?"":"disabled"} />
                </label>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${c?c.days.map(i=>{const P=i.foodCents>0,U=i.goingOutCents>0,ne=`${i.isoDate===C?"today-row":""} ${P||U?"day-has-entry":""}`.trim(),pe=`amount-input ${P?"day-input-has-value":""}`.trim(),Me=`amount-input ${U?"day-input-has-value":""}`.trim();return`<tr class="${ne}">
                      <td>${new Date(i.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${pe}" data-day-food="${i.isoDate}" type="number" min="0" step="0.01" value="${vt(i.foodCents)}" /></td>
                      <td><input class="${Me}" data-day-going="${i.isoDate}" type="number" min="0" step="0.01" value="${vt(i.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Ye(N,h.fixedCents)}
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
                ${c?c.fixedCosts.map(i=>`<tr>
                    <td>${i.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${i.id}" type="number" min="0" step="0.01" value="${vt(i.plannedCents)}" /></td>
                    <td class="${Je(i.actualCents,i.plannedCents)}"><input class="amount-input" data-fixed-actual="${i.id}" type="number" min="0" step="0.01" value="${vt(i.actualCents)}" /></td>
                    <td class="${Je(i.actualCents,i.plannedCents)}">${_(i.actualCents-i.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${i.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Ye(Q,h.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${vt(Q)}" ${c?"":"disabled"} />
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
                    <td>${i.name}</td>
                    <td><input class="amount-input" data-variable-position-budget="${i.id}" type="number" min="0" step="0.01" value="${vt(i.budgetCents)}" /></td>
                    <td class="${Je(i.actualCents,i.budgetCents)}"><input class="amount-input" data-variable-position-actual="${i.id}" type="number" min="0" step="0.01" value="${vt(i.actualCents)}" /></td>
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
              ${Ye(I,h.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${vt(I)}" ${c?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${Ze}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(b.topModal||b.showUnexportedChangeLogModal)),tn(),at(),un()}function tn(){const l=M.querySelector("#theme-select"),c=M.querySelector("#open-years-modal"),C=M.querySelector("#open-fixed-modal"),h=M.querySelector("#open-dashboard-modal"),x=M.querySelector("#panel-modal-close"),A=M.querySelector("#panel-modal-backdrop"),q=M.querySelector("#open-unexported-change-log"),Y=M.querySelector("#unexported-change-log-close"),N=M.querySelector("#unexported-change-log-backdrop"),Q=M.querySelector("#new-year"),I=M.querySelector("#create-year"),te=M.querySelector("#year-select"),Ce=M.querySelector("#month-select");l?.addEventListener("change",()=>{const E=l.value;br(E)&&Lt(E)}),c?.addEventListener("click",()=>{mt("years")}),C?.addEventListener("click",()=>{mt("fixed")}),h?.addEventListener("click",()=>{mt("dashboard")}),q?.addEventListener("click",()=>{za()}),Y?.addEventListener("click",()=>{oa()}),N?.addEventListener("click",E=>{E.target===N&&oa()}),M.querySelectorAll("[data-dashboard-tab]").forEach(E=>{E.addEventListener("click",()=>{const D=E.dataset.dashboardTab;D!=="year"&&D!=="food"&&D!=="all"||(b.dashboardTab=D,J())})});const _e=M.querySelector("#dashboard-year-select");_e?.addEventListener("change",()=>{const E=Number.parseInt(_e.value,10);Number.isInteger(E)&&(b.dashboardYear=E,J())}),x?.addEventListener("click",()=>{kt()}),A?.addEventListener("click",E=>{E.target===A&&kt()}),b.topModal&&window.setTimeout(()=>{x?.focus()},0),b.showUnexportedChangeLogModal&&window.setTimeout(()=>{Y?.focus()},0),I?.addEventListener("click",async()=>{const E=Number.parseInt(Q?.value??"",10);if(!Number.isInteger(E)){alert("Bitte gültiges Jahr eingeben.");return}await Qt(E)}),te?.addEventListener("change",()=>{b.selectedYear=Number.parseInt(te.value,10),b.selectedMonth=qt(),J()}),Ce?.addEventListener("change",()=>{b.selectedMonth=Number.parseInt(Ce.value,10),J()});const je=M.querySelector("#fixed-template-name"),Ve=M.querySelector("#fixed-template-amount"),be=M.querySelector("#add-fixed-template"),bt=M.querySelector("#cancel-fixed-template-edit");be?.addEventListener("click",async()=>{const E=je?.value??"",D=De(Ve?.value??"0");await ha(E,D),je&&(je.value=""),Ve&&(Ve.value="")}),bt?.addEventListener("click",()=>{pa()}),M.querySelectorAll("[data-edit-fixed-template]").forEach(E=>{E.addEventListener("click",()=>{const D=E.dataset.editFixedTemplate;D&&Ta(D)})}),M.querySelectorAll("[data-remove-fixed-template]").forEach(E=>{E.addEventListener("click",async()=>{const D=E.dataset.removeFixedTemplate;D&&await Da(D)})}),M.querySelectorAll("[data-day-food]").forEach(E=>{E.addEventListener("click",D=>{D.preventDefault(),E.blur(),dt(E)}),E.addEventListener("change",async()=>{const D=E.dataset.dayFood;D&&await Un(D,"foodCents",De(E.value))})}),M.querySelectorAll("[data-day-going]").forEach(E=>{E.addEventListener("click",D=>{D.preventDefault(),E.blur(),dt(E)}),E.addEventListener("change",async()=>{const D=E.dataset.dayGoing;D&&await Un(D,"goingOutCents",De(E.value))})}),M.querySelectorAll("[data-fixed-actual]").forEach(E=>{E.addEventListener("click",D=>{D.preventDefault(),E.blur(),dt(E)}),E.addEventListener("change",async()=>{const D=E.dataset.fixedActual;D&&await Ja(D,De(E.value))})}),M.querySelectorAll("[data-fixed-planned]").forEach(E=>{E.addEventListener("click",D=>{D.preventDefault(),E.blur(),dt(E)}),E.addEventListener("change",async()=>{const D=E.dataset.fixedPlanned;D&&await Ha(D,De(E.value))})});const re=M.querySelector("#fixed-budget");re?.addEventListener("click",E=>{E.preventDefault(),re.blur(),dt(re)}),re?.addEventListener("change",async()=>{await va(De(re.value))});const Ne=M.querySelector("#food-budget");Ne?.addEventListener("click",E=>{E.preventDefault(),Ne.blur(),dt(Ne)}),Ne?.addEventListener("change",async()=>{await Gn(De(Ne.value))});const st=M.querySelector("#going-out-budget");st?.addEventListener("click",E=>{E.preventDefault(),st.blur(),dt(st)}),st?.addEventListener("change",async()=>{await ke(De(st.value))});const Ke=M.querySelector("#misc-budget");Ke?.addEventListener("click",E=>{E.preventDefault(),Ke.blur(),dt(Ke)}),Ke?.addEventListener("change",async()=>{await Le(De(Ke.value))});const K=M.querySelector("#variable-budget");K?.addEventListener("click",E=>{E.preventDefault(),K.blur(),dt(K)}),K?.addEventListener("change",async()=>{await Xa(De(K.value))});const ze=M.querySelector("#variable-position-name"),ft=M.querySelector("#variable-position-budget"),Ut=M.querySelector("#add-variable-position"),ht=M.querySelector("#add-variable-position-recurring"),it=M.querySelector("#misc-description"),Ct=M.querySelector("#misc-amount"),Z=M.querySelector("#add-misc"),ut=M.querySelector("#add-misc-recurring"),Ue=M.querySelector("#income-description"),He=M.querySelector("#income-source"),ye=M.querySelector("#income-amount"),Xe=M.querySelector("#add-income"),xt=M.querySelector("#add-income-recurring"),Ge=M.querySelector("#fixed-cost-name"),Dt=M.querySelector("#fixed-cost-budget"),nn=M.querySelector("#add-fixed-cost"),xe=M.querySelector("#carryover-override");xe?.addEventListener("click",E=>{E.preventDefault(),xe.blur(),dt(xe)}),xe?.addEventListener("change",async()=>{const E=xe.value;if(!E.trim()){await Bn(null);return}await Bn(De(E))}),nn?.addEventListener("click",async()=>{const E=De(Dt?.value??"0");await vn(Ge?.value??"",E),Ge&&(Ge.value=""),Dt&&(Dt.value="")}),Ut?.addEventListener("click",async()=>{const E=De(ft?.value??"0");await _n(ze?.value??"",E,!1),ze&&(ze.value=""),ft&&(ft.value="")}),ht?.addEventListener("click",async()=>{const E=De(ft?.value??"0");await _n(ze?.value??"",E,!0),ze&&(ze.value=""),ft&&(ft.value="")}),Z?.addEventListener("click",async()=>{const E=De(Ct?.value??"0");await En(it?.value??"",E,!1),it&&(it.value=""),Ct&&(Ct.value="")}),ut?.addEventListener("click",async()=>{const E=De(Ct?.value??"0");await En(it?.value??"",E,!0),it&&(it.value=""),Ct&&(Ct.value="")}),Xe?.addEventListener("click",async()=>{const E=De(ye?.value??"0"),D=He?.value,pt=D==="balance"||D==="fresh"||D==="salary"?D:void 0;await Tt(Ue?.value??"",E,pt,!1),Ue&&(Ue.value=""),ye&&(ye.value=""),He&&(He.value="salary")}),xt?.addEventListener("click",async()=>{const E=De(ye?.value??"0"),D=He?.value,pt=D==="balance"||D==="fresh"||D==="salary"?D:void 0;await Tt(Ue?.value??"",E,pt,!0),Ue&&(Ue.value=""),ye&&(ye.value=""),He&&(He.value="salary")}),M.querySelectorAll("[data-income-source]").forEach(E=>{E.addEventListener("change",async()=>{const D=E.dataset.incomeSource;if(!D)return;const pt=E.value;await Ia(D,pt==="balance"||pt==="fresh"||pt==="salary"?pt:void 0)})}),M.querySelectorAll("[data-variable-position-budget]").forEach(E=>{E.addEventListener("click",D=>{D.preventDefault(),E.blur(),dt(E)}),E.addEventListener("change",async()=>{const D=E.dataset.variablePositionBudget;D&&await Vt(D,De(E.value))})}),M.querySelectorAll("[data-variable-position-actual]").forEach(E=>{E.addEventListener("click",D=>{D.preventDefault(),E.blur(),dt(E)}),E.addEventListener("change",async()=>{const D=E.dataset.variablePositionActual;D&&await Qa(D,De(E.value))})}),M.querySelectorAll("[data-remove-variable-position]").forEach(E=>{E.addEventListener("click",async()=>{const D=E.dataset.removeVariablePosition;D&&await gn(D)})}),M.querySelectorAll("[data-move-variable-position-next]").forEach(E=>{E.addEventListener("click",async()=>{const D=E.dataset.moveVariablePositionNext;D&&await zt(D)})}),M.querySelectorAll("[data-remove-fixed]").forEach(E=>{E.addEventListener("click",async()=>{const D=E.dataset.removeFixed;D&&await mn(D)})}),M.querySelectorAll("[data-remove-income]").forEach(E=>{E.addEventListener("click",async()=>{const D=E.dataset.removeIncome;D&&await en(D)})}),M.querySelectorAll("[data-remove-misc]").forEach(E=>{E.addEventListener("click",async()=>{const D=E.dataset.removeMisc;D&&await Za(D)})});const ue=M.querySelector("#backup-export"),he=M.querySelector("#backup-import");M.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),ue?.addEventListener("click",async()=>{await Fa()}),he?.addEventListener("change",async()=>{const E=he.files?.[0];if(E){try{await ma(E)}catch(D){console.error("Backup-Import fehlgeschlagen",D),Be("Backup konnte nicht importiert werden.","error")}he.value=""}})}return{init:ca}}const Nr="modulepreload",Kr=function(M){return"/habu26/"+M},yr={},qr=function(b,Ae,W){let ce=Promise.resolve();if(Ae&&Ae.length>0){let et=function(tt){return Promise.all(tt.map(ie=>Promise.resolve(ie).then(nt=>({status:"fulfilled",value:nt}),nt=>({status:"rejected",reason:nt}))))};var me=et;document.getElementsByTagName("link");const se=document.querySelector("meta[property=csp-nonce]"),de=se?.nonce||se?.getAttribute("nonce");ce=et(Ae.map(tt=>{if(tt=Kr(tt),tt in yr)return;yr[tt]=!0;const ie=tt.endsWith(".css"),nt=ie?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${tt}"]${nt}`))return;const at=document.createElement("link");if(at.rel=ie?"stylesheet":Nr,ie||(at.as="script"),at.crossOrigin="",at.href=tt,de&&at.setAttribute("nonce",de),document.head.appendChild(at),ie)return new Promise((mt,kt)=>{at.addEventListener("load",mt),at.addEventListener("error",()=>kt(new Error(`Unable to preload CSS for ${tt}`)))})}))}function ae(se){const de=new Event("vite:preloadError",{cancelable:!0});if(de.payload=se,window.dispatchEvent(de),!de.defaultPrevented)throw se}return ce.then(se=>{for(const de of se||[])de.status==="rejected"&&ae(de.reason);return b().catch(ae)})};function Lr(M={}){const{immediate:b=!1,onNeedRefresh:Ae,onOfflineReady:W,onRegistered:ce,onRegisteredSW:ae,onRegisterError:me}=M;let se,de;const et=async(ie=!0)=>{await de};async function tt(){if("serviceWorker"in navigator){if(se=await qr(async()=>{const{Workbox:ie}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ie}},[]).then(({Workbox:ie})=>new ie("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ie=>{me?.(ie)}),!se)return;se.addEventListener("activated",ie=>{(ie.isUpdate||ie.isExternal)&&window.location.reload()}),se.addEventListener("installed",ie=>{ie.isUpdate||W?.()}),se.register({immediate:b}).then(ie=>{ae?ae("/habu26/sw.js",ie):ce?.(ie)}).catch(ie=>{me?.(ie)})}}return de=tt(),et}function jr(){Lr({immediate:!0})}const wr=document.getElementById("app");if(!wr)throw new Error("App-Container nicht gefunden.");Fr(wr).init();jr();
