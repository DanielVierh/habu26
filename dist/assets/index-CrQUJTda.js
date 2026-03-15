(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const be of document.querySelectorAll('link[rel="modulepreload"]'))H(be);new MutationObserver(be=>{for(const se of be)if(se.type==="childList")for(const we of se.addedNodes)we.tagName==="LINK"&&we.rel==="modulepreload"&&H(we)}).observe(document,{childList:!0,subtree:!0});function De(be){const se={};return be.integrity&&(se.integrity=be.integrity),be.referrerPolicy&&(se.referrerPolicy=be.referrerPolicy),be.crossOrigin==="use-credentials"?se.credentials="include":be.crossOrigin==="anonymous"?se.credentials="omit":se.credentials="same-origin",se}function H(be){if(be.ep)return;be.ep=!0;const se=De(be);fetch(be.href,se)}})();const $s=[1,2,3,4,5,6,7,8,9,10,11,12];function Ir(){return new Date().toISOString()}function Tt(_){const h=Math.random().toString(36).slice(2,10);return`${_}_${Date.now()}_${h}`}function Ss(_,h){const De=new Date(_,h,0).getDate(),H=[];for(let be=1;be<=De;be+=1){const se=new Date(Date.UTC(_,h-1,be));H.push({isoDate:se.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return H}function Es(_){return _.map(h=>({id:Tt("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function ns(_,h,De){const H=h.reduce((se,we)=>se+we.plannedCents,0),be=$s.map(se=>({month:se,days:Ss(_,se),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Es(h),fixedBudgetCents:H,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:_,createdAt:Ir(),templateVersion:De,months:be}}function as(_,h){return{id:Tt("expense"),description:_,amountCents:h,createdAt:Ir()}}function rs(_,h,De){const H={id:Tt("income"),description:_,amountCents:h,createdAt:Ir()};return De?{...H,incomeSource:De}:H}var Bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _s(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var hr={exports:{}},Ms=hr.exports,ss;function Ps(){return ss||(ss=1,(function(_,h){((De,H)=>{_.exports=H()})(Ms,function(){var De=function(e,t){return(De=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},H=function(){return(H=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function be(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Bs,we=Object.keys,ie=Array.isArray;function ye(e,t){return typeof t=="object"&&we(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||se.Promise||(se.Promise=Promise);var ot=Object.getPrototypeOf,ze={}.hasOwnProperty;function oe(e,t){return ze.call(e,t)}function gt(e,t){typeof t=="function"&&(t=t(ot(e))),(typeof Reflect>"u"?we:Reflect.ownKeys)(t).forEach(function(n){dt(e,n,t[n])})}var ct=Object.defineProperty;function dt(e,t,n,a){ct(e,t,ye(n&&oe(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function Zt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),dt(e.prototype,"constructor",e),{extend:gt.bind(null,e.prototype)}}}}var aa=Object.getOwnPropertyDescriptor,Sa=[].slice;function ra(e,t,n){return Sa.call(e,t,n)}function sa(e,t){return t(e)}function On(e){if(!e)throw new Error("Assertion Failed")}function ia(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Kt(e,t){if(typeof t=="string"&&oe(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Kt(e,t[a]);n.push(i)}return n}var u,c=t.indexOf(".");return c===-1||(u=e[t.substr(0,c)])==null?void 0:Kt(u,t.substr(c+1))}function ft(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){On(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)ft(e,t[a],n[a])}else{var i,u,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:ft(u=(u=e[i])&&oe(e,i)?u:e[i]={},c,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ea(e){var t,n={};for(t in e)oe(e,t)&&(n[t]=e[t]);return n}var mr=[].concat;function Ba(e){return mr.apply([],e)}var jt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ba([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),Ua=new Set(jt.map(function(e){return se[e]})),Fn=null;function ht(e){return Fn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Fn.get(n);if(a)return a;if(ie(n)){a=[],Fn.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Ua.has(n.constructor))a=n;else{var u,c=ot(n);for(u in a=c===Object.prototype?{}:Object.create(c),Fn.set(n,a),n)oe(n,u)&&(a[u]=t(n[u]))}return a})(e),Fn=null,e}var Dn={}.toString;function _a(e){return Dn.call(e).slice(8,-1)}var Ma=typeof Symbol<"u"?Symbol.iterator:"@@iterator",gr=typeof Ma=="symbol"?function(e){var t;return e!=null&&(t=e[Ma])&&t.apply(e)}:function(){return null};function en(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var et={};function he(e){var t,n,a,s;if(arguments.length===1){if(ie(e))return e.slice();if(this===et&&typeof e=="string")return[e];if(s=gr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var kn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},jt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],tt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(jt),Wa={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function un(e,t){this.name=e,this.message=t}function Ga(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function Dt(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Ga(e,t)}function $n(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ga(e,this.failures)}Zt(un).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Zt(Dt).from(un),Zt($n).from(un);var oa=tt.reduce(function(e,t){return e[t]=t+"Error",e},{}),br=un,ee=tt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Wa[t]||n,this.inner=null)}return Zt(a).from(br),e[t]=a,e},{}),Ja=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,jt.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));jt=tt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function ke(){}function In(e){return e}function yr(e,t){return e==null||e===In?t:function(n){return t(e(n))}}function cn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Ha(e,t){return e===ke?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?cn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?cn(s,this.onerror):s),i!==void 0?i:n}}function Cr(e,t){return e===ke?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?cn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?cn(a,this.onerror):a)}}function xr(e,t){return e===ke?t:function(s){var a=e.apply(this,arguments),s=(ye(s,a),this.onsuccess),i=this.onerror,u=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?cn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?cn(i,this.onerror):i),a===void 0?u===void 0?void 0:u:ye(a,u)}}function Pa(e,t){return e===ke?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Nn(e,t){return e===ke?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}jt.ModifyError=Dt,jt.DexieError=un,jt.BulkError=$n;var bt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ta(e){bt=e}var Rt={},je=100,Ln=typeof Promise>"u"?[]:(tt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ln=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ot(Ln),tt]:[tt,ot(tt),tt]),tt=Ln[0],Ve=Ln[1],Ve=Ve&&Ve.then,It=tt&&tt.constructor,Sn=!!Ln[2],qn=function(e,t){Yt.push([e,t]),En&&(queueMicrotask(Aa),En=!1)},Kn=!0,En=!0,Vt=[],la=[],pt=In,tn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ke,pgp:!1,env:{},finalize:ke},J=tn,Yt=[],dn=0,fn=[];function Y(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=J;if(typeof e!="function"){if(e!==Rt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&yt(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var u=a._lib&&hn();i&&typeof i.then=="function"?n(a,function(c,v){i instanceof Y?i._then(c,v):i.then(c,v)}):(a._state=!0,a._value=i,pe(a)),u&&Ct()}},yt.bind(null,a))}catch(i){yt(a,i)}})(this,e)}var ua={get:function(){var e=J,t=ha;function n(a,s){var i=this,u=!e.global&&(e!==J||t!==ha),c=u&&!an(),v=new Y(function(k,y){jn(i,new Je(Za(a,e,u,c),Za(s,e,u,c),k,y,e))});return this._consoleTask&&(v._consoleTask=this._consoleTask),v}return n.prototype=Rt,n},set:function(e){dt(this,"then",e&&e.prototype===Rt?ua:{get:function(){return e},set:ua.set})}};function Je(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function yt(e,t){var n,a;la.push(t),e._state===null&&(n=e._lib&&hn(),t=pt(t),e._state=!1,e._value=t,a=e,Vt.some(function(s){return s._value===a._value})||Vt.push(a),pe(e),n)&&Ct()}function pe(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)jn(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),dn===0&&(++dn,qn(function(){--dn==0&&$t()},[]))}function jn(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++dn,qn(Xa,[n,e,t])}}function Xa(e,t,n){try{var a,s=t._value;!t._state&&la.length&&(la=[]),a=bt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||la.indexOf(s)!==-1||(i=>{for(var u=Vt.length;u;)if(Vt[--u]._value===i._value)return Vt.splice(u,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--dn==0&&$t(),--n.psd.ref||n.psd.finalize()}}function Aa(){pn(tn,function(){hn()&&Ct()})}function hn(){var e=Kn;return En=Kn=!1,e}function Ct(){var e,t,n;do for(;0<Yt.length;)for(e=Yt,Yt=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<Yt.length);En=Kn=!0}function $t(){for(var e=Vt,t=(Vt=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),fn.slice(0)),n=t.length;n;)t[--n]()}function ca(e){return new Y(Rt,!1,e)}function Te(e,t){var n=J;return function(){var a=hn(),s=J;try{return rn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{rn(s,!1),a&&Ct()}}}gt(Y.prototype,{then:ua,_then:function(e,t){jn(this,new Je(null,null,e,t,J))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:ca)(a)}):this.then(null,function(a){return(a&&a.name===t?n:ca)(a)}))},finally:function(e){return this.then(function(t){return Y.resolve(e()).then(function(){return t})},function(t){return Y.resolve(e()).then(function(){return ca(t)})})},timeout:function(e,t){var n=this;return e<1/0?new Y(function(a,s){var i=setTimeout(function(){return s(new ee.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&dt(Y.prototype,Symbol.toStringTag,"Dexie.Promise"),tn.env=Qa(),gt(Y,{all:function(){var e=he.apply(null,arguments).map(Rn);return new Y(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return Y.resolve(s).then(function(u){e[i]=u,--a||t(e)},n)})})},resolve:function(e){return e instanceof Y?e:e&&typeof e.then=="function"?new Y(function(t,n){e.then(t,n)}):new Y(Rt,!0,e)},reject:ca,race:function(){var e=he.apply(null,arguments).map(Rn);return new Y(function(t,n){e.map(function(a){return Y.resolve(a).then(t,n)})})},PSD:{get:function(){return J},set:function(e){return J=e}},totalEchoes:{get:function(){return ha}},newPSD:nn,usePSD:pn,scheduler:{get:function(){return qn},set:function(e){qn=e}},rejectionMapper:{get:function(){return pt},set:function(e){pt=e}},follow:function(e,t){return new Y(function(n,a){return nn(function(s,i){var u=J;u.unhandleds=[],u.onunhandled=i,u.finalize=cn(function(){var c,v=this;c=function(){v.unhandleds.length===0?s():i(v.unhandleds[0])},fn.push(function k(){c(),fn.splice(fn.indexOf(k),1)}),++dn,qn(function(){--dn==0&&$t()},[])},u.finalize),e()},t,n,a)})}}),It&&(It.allSettled&&dt(Y,"allSettled",function(){var e=he.apply(null,arguments).map(Rn);return new Y(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return Y.resolve(s).then(function(u){return a[i]={status:"fulfilled",value:u}},function(u){return a[i]={status:"rejected",reason:u}}).then(function(){return--n||t(a)})})})}),It.any&&typeof AggregateError<"u"&&dt(Y,"any",function(){var e=he.apply(null,arguments).map(Rn);return new Y(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,u){return Y.resolve(i).then(function(c){return t(c)},function(c){s[u]=c,--a||n(new AggregateError(s))})})})}),It.withResolvers)&&(Y.withResolvers=It.withResolvers);var Xe={awaits:0,echoes:0,id:0},wr=0,da=[],fa=0,ha=0,kr=0;function nn(e,u,n,a){var s=J,i=Object.create(s),u=(i.parent=s,i.ref=0,i.global=!1,i.id=++kr,tn.env,i.env=Sn?{Promise:Y,PromiseProp:{value:Y,configurable:!0,writable:!0},all:Y.all,race:Y.race,allSettled:Y.allSettled,any:Y.any,resolve:Y.resolve,reject:Y.reject}:{},u&&ye(i,u),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},pn(i,e,n,a));return i.ref===0&&i.finalize(),u}function Bn(){return Xe.id||(Xe.id=++wr),++Xe.awaits,Xe.echoes+=je,Xe.id}function an(){return!!Xe.awaits&&(--Xe.awaits==0&&(Xe.id=0),Xe.echoes=Xe.awaits*je,!0)}function Rn(e){return Xe.echoes&&e&&e.constructor===It?(Bn(),e.then(function(t){return an(),t},function(t){return an(),Re(t)})):e}function $r(){var e=da[da.length-1];da.pop(),rn(e,!1)}function rn(e,t){var n,a,s=J;(t?!Xe.echoes||fa++&&e===J:!fa||--fa&&e===J)||queueMicrotask(t?(function(i){++ha,Xe.echoes&&--Xe.echoes!=0||(Xe.echoes=Xe.awaits=Xe.id=0),da.push(J),rn(i,!0)}).bind(null,e):$r),e!==J&&(J=e,s===tn&&(tn.env=Qa()),Sn)&&(n=tn.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(se,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function Qa(){var e=se.Promise;return Sn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function pn(e,t,n,a,s){var i=J;try{return rn(e,!0),t(n,a,s)}finally{rn(i,!1)}}function Za(e,t,n,a){return typeof e!="function"?e:function(){var s=J;n&&Bn(),rn(t,!0);try{return e.apply(this,arguments)}finally{rn(s,!1),a&&queueMicrotask(an)}}}function Oa(e){Promise===It&&Xe.echoes===0?fa===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Ve).indexOf("[native code]")===-1&&(Bn=an=ke);var Re=Y.reject,vn="￿",zt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",_n="String expected.",mn=[],Vn="__dbnames",Fa="readonly",Da="readwrite";function gn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var er={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Yn(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=ht(t))[e],t}}function tr(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ce(e,t){try{var n=nr(e),a=nr(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=ar(e),i=ar(t),u=s.length,c=i.length,v=u<c?u:c,k=0;k<v;++k)if(s[k]!==i[k])return s[k]<i[k]?-1:1;return u===c?0:u<c?-1:1;case"Array":for(var y=e,m=t,x=y.length,C=m.length,b=x<C?x:C,g=0;g<b;++g){var S=ce(y[g],m[g]);if(S!==0)return S}return x===C?0:x<C?-1:1}}catch{}return NaN}function nr(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=_a(e))==="ArrayBuffer")?"binary":t}function ar(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function zn(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}ae.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return be(be([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(ie(a))return ie(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var Un=ae;function ae(e){this["@@propmod"]=e}function rr(e,t){for(var n=we(t),a=n.length,s=!1,i=0;i<a;++i){var u=n[i],c=t[u],v=Kt(e,u);c instanceof Un?(ft(e,u,c.execute(v)),s=!0):v!==c&&(ft(e,u,c),s=!0)}return s}l.prototype._trans=function(e,t,n){var a=this._tx||J.trans,s=this.name,i=bt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function u(k,y,m){if(m.schema[s])return t(m.idbtrans,m);throw new ee.NotFound("Table "+s+" not part of transaction")}var c=hn();try{var v=a&&a.db._novip===this.db._novip?a===J.trans?a._promise(e,u,n):nn(function(){return a._promise(e,u,n)},{trans:a,transless:J.transless||J}):(function k(y,m,x,C){if(y.idbdb&&(y._state.openComplete||J.letThrough||y._vip)){var b=y._createTransaction(m,x,y._dbSchema);try{b.create(),y._state.PR1398_maxLoop=3}catch(g){return g.name===oa.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return k(y,m,x,C)})):Re(g)}return b._promise(m,function(g,S){return nn(function(){return J.trans=b,C(g,S,b)})}).then(function(g){if(m==="readwrite")try{b.idbtrans.commit()}catch{}return m==="readonly"?g:b._completion.then(function(){return g})})}if(y._state.openComplete)return Re(new ee.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Re(new ee.DatabaseClosed);y.open().catch(ke)}return y._state.dbReadyPromise.then(function(){return k(y,m,x,C)})})(this.db,e,[this.name],u);return i&&(v._consoleTask=i,v=v.catch(function(k){return console.trace(k),Re(k)})),v}finally{c&&Ct()}},l.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Re(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},l.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=we(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function(k){return 0<=c.keyPath.indexOf(k)})){for(var v=0;v<t.length;++v)if(t.indexOf(c.keyPath[v])===-1)return!1;return!0}return!1}).sort(function(c,v){return c.keyPath.length-v.keyPath.length})[0];if(n&&this.db._maxKey!==vn)return u=n.keyPath.slice(0,t.length),this.where(u).equals(u.map(function(c){return e[c]}));!n&&bt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,v){return ce(c,v)===0}var u=t.reduce(function(y,v){var k=y[0],y=y[1],m=a[v],x=e[v];return[k||m,k||!m?gn(y,m&&m.multi?function(C){return C=Kt(C,v),ie(C)&&C.some(function(b){return s(x,b)})}:function(C){return s(x,Kt(C,v))}):y]},[null,null]),i=u[0],u=u[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(u):n?this.filter(u):this.where(t).equals("")},l.prototype.filter=function(e){return this.toCollection().and(e)},l.prototype.count=function(e){return this.toCollection().count(e)},l.prototype.offset=function(e){return this.toCollection().offset(e)},l.prototype.limit=function(e){return this.toCollection().limit(e)},l.prototype.each=function(e){return this.toCollection().each(e)},l.prototype.toArray=function(e){return this.toCollection().toArray(e)},l.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},l.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},l.prototype.reverse=function(){return this.toCollection().reverse()},l.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof tr&&(e=(u=>{var c=y,v=u;if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function k(){this.constructor=c}function y(){return u!==null&&u.apply(this,arguments)||this}return De(c,v),c.prototype=v===null?Object.create(v):(k.prototype=v.prototype,new k),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),s=e.prototype;s;s=ot(s))Object.getOwnPropertyNames(s).forEach(function(u){return a.add(u)});function i(u){if(!u)return u;var c,v=Object.create(e.prototype);for(c in u)if(!a.has(c))try{v[c]=u[c]}catch{}return v}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},l.prototype.defineClass=function(){return this.mapToClass(function(e){ye(this,e)})},l.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,u=e;return i&&s&&(u=Yn(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[u]})}).then(function(c){return c.numFailures?Y.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{ft(e,i,c)}catch{}return c})},l.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var u=i??{};return rr(u,t),a&&ft(u,a,e),n.core.mutate({trans:s,type:"put",values:[u],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?Y.reject(c.failures[0]):!!i})})})},l.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=Kt(e,this.schema.primKey.keyPath))===void 0?Re(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},l.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,u=e;return i&&s&&(u=Yn(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[u],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?Y.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{ft(e,i,c)}catch{}return c})},l.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return zn(t,[e],a)}).then(function(a){return a.numFailures?Y.reject(a.failures[0]):void 0})})},l.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:er}).then(function(n){return zn(e,null,n)})}).then(function(t){return t.numFailures?Y.reject(t.failures[0]):void 0})},l.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},l.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var c=a.schema.primKey,k=c.auto,c=c.keyPath;if(c&&s)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,k=c&&k?e.map(Yn(c)):e;return a.core.mutate({trans:u,type:"add",keys:s,values:k,wantResults:i}).then(function(y){var m=y.numFailures,x=y.failures;if(m===0)return i?y.results:y.lastResult;throw new $n("".concat(a.name,".bulkAdd(): ").concat(m," of ").concat(v," operations failed"),x)})})},l.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var c=a.schema.primKey,k=c.auto,c=c.keyPath;if(c&&s)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,k=c&&k?e.map(Yn(c)):e;return a.core.mutate({trans:u,type:"put",keys:s,values:k,wantResults:i}).then(function(y){var m=y.numFailures,x=y.failures;if(m===0)return i?y.results:y.lastResult;throw new $n("".concat(a.name,".bulkPut(): ").concat(m," of ").concat(v," operations failed"),x)})})},l.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(u){return u.key}),s=e.map(function(u){return u.changes}),i=[];return this._trans("readwrite",function(u){return n.getMany({trans:u,keys:a,cache:"clone"}).then(function(c){var v=[],k=[],y=(e.forEach(function(m,x){var C=m.key,b=m.changes,g=c[x];if(g){for(var S=0,B=Object.keys(b);S<B.length;S++){var $=B[S],T=b[$];if($===t.schema.primKey.keyPath){if(ce(T,C)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ft(g,$,T)}i.push(x),v.push(C),k.push(g)}}),v.length);return n.mutate({trans:u,type:"put",keys:v,values:k,updates:{keys:a,changeSpecs:s}}).then(function(m){var x=m.numFailures,C=m.failures;if(x===0)return y;for(var b=0,g=Object.keys(C);b<g.length;b++){var S,B=g[b],$=i[Number(B)];$!=null&&(S=C[B],delete C[B],C[$]=S)}throw new $n("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(y," operations failed"),C)})})})},l.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return zn(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new $n("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var o=l;function l(){}function f(e){function t(u,c){if(c){for(var v=arguments.length,k=new Array(v-1);--v;)k[v-1]=arguments[v];return n[u].subscribe.apply(null,k),e}if(typeof u=="string")return n[u]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(u,c,v){var k,y;if(typeof u!="object")return c=c||Pa,y={subscribers:[],fire:v=v||ke,subscribe:function(m){y.subscribers.indexOf(m)===-1&&(y.subscribers.push(m),y.fire=c(y.fire,m))},unsubscribe:function(m){y.subscribers=y.subscribers.filter(function(x){return x!==m}),y.fire=y.subscribers.reduce(c,v)}},n[u]=t[u]=y;we(k=u).forEach(function(m){var x=k[m];if(ie(x))i(m,k[m][0],k[m][1]);else{if(x!=="asap")throw new ee.InvalidArgument("Invalid event config");var C=i(m,In,function(){for(var b=arguments.length,g=new Array(b);b--;)g[b]=arguments[b];C.subscribers.forEach(function(S){ia(function(){S.apply(null,g)})})})}})}}function d(e,t){return Zt(t).from({prototype:e}),t}function p(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function M(e,t){e.filter=gn(e.filter,t)}function F(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return gn(a(),t())}:t,e.justLimit=n&&!a}function I(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function L(e,t,n){var a=I(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function X(e,t,n,a){var s,i,u=e.replayFilter?gn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,v,k){var y,m;u&&!u(v,k,function(x){return v.stop(x)},function(x){return v.fail(x)})||((m=""+(y=v.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(y)),oe(s,m))||(s[m]=!0,t(c,v,k))},Promise.all([e.or._iterate(i,n),W(L(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):W(L(e,a,n),gn(e.algorithm,u),t,!e.keysOnly&&e.valueMapper)}function W(e,t,n,a){var s=Te(a?function(i,u,c){return n(a(i),u,c)}:n);return e.then(function(i){if(i)return i.start(function(){var u=function(){return i.continue()};t&&!t(i,function(c){return u=c},function(c){i.stop(c),u=ke},function(c){i.fail(c),u=ke})||s(i.value,i,function(c){return u=c}),u()})})}R.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Re.bind(null,n.error)):n.table._trans("readonly",e).then(t)},R.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Re.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},R.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=gn(t.algorithm,e)},R.prototype._iterate=function(e,t){return X(this._ctx,e,t,this._ctx.table.core)},R.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ye(n,e),t._ctx=n,t},R.prototype.raw=function(){return this._ctx.valueMapper=null,this},R.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return X(t,e,n,t.table.core)})},R.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return p(s,!0)?i.count({trans:n,query:{index:I(s,i.schema),range:s.range}}).then(function(u){return Math.min(u,s.limit)}):(a=0,X(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},R.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(v,k){return k?i(v[n[k]],k-1):v[a]}var u=this._ctx.dir==="next"?1:-1;function c(v,k){return ce(i(v,s),i(k,s))*u}return this.toArray(function(v){return v.sort(c)}).then(t)},R.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,u=t._ctx;return u.dir==="next"&&p(u,!0)&&0<u.limit?(a=u.valueMapper,s=I(u,u.table.core.schema),u.table.core.query({trans:n,limit:u.limit,values:!0,query:{index:s,range:u.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],X(u,function(c){return i.push(c)},n,u.table.core).then(function(){return i}))},e)},R.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,p(t)?F(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):F(t,function(){var n=e;return function(){return--n<0}})),this},R.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),F(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},R.prototype.until=function(e,t){return M(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},R.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},R.prototype.last=function(e){return this.reverse().first(e)},R.prototype.filter=function(e){var t;return M(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=gn(t.isMatch,e),this},R.prototype.and=function(e){return this.filter(e)},R.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},R.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},R.prototype.desc=function(){return this.reverse()},R.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},R.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},R.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},R.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},R.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&p(t,!0)&&0<t.limit)return this._read(function(a){var s=I(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},R.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},R.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},R.prototype.lastKey=function(e){return this.reverse().firstKey(e)},R.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},M(this._ctx,function(a){var a=a.primaryKey.toString(),s=oe(e,a);return e[a]=!0,!s})),this},R.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(g,S){var B=S.failures;x+=g-S.numFailures;for(var $=0,T=we(B);$<T.length;$++){var O=T[$];m.push(B[O])}}var i=typeof e=="function"?e:function(g){return rr(g,e)},u=n.table.core,y=u.schema.primaryKey,c=y.outbound,v=y.extractKey,k=200,y=t.db._options.modifyChunkSize,m=(y&&(k=typeof y=="object"?y[u.name]||y["*"]||200:y),[]),x=0,C=[],b=e===ve;return t.clone().primaryKeys().then(function(g){function S($){var T=Math.min(k,g.length-$),O=g.slice($,$+T);return(b?Promise.resolve([]):u.getMany({trans:a,keys:O,cache:"immutable"})).then(function(j){var K=[],A=[],U=c?[]:null,z=b?O:[];if(!b)for(var N=0;N<T;++N){var G=j[N],fe={value:ht(G),primKey:g[$+N]};i.call(fe,fe.value,fe)!==!1&&(fe.value==null?z.push(g[$+N]):c||ce(v(G),v(fe.value))===0?(A.push(fe.value),c&&U.push(g[$+N])):(z.push(g[$+N]),K.push(fe.value)))}return Promise.resolve(0<K.length&&u.mutate({trans:a,type:"add",values:K}).then(function(Ce){for(var te in Ce.failures)z.splice(parseInt(te),1);s(K.length,Ce)})).then(function(){return(0<A.length||B&&typeof e=="object")&&u.mutate({trans:a,type:"put",keys:U,values:A,criteria:B,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<$}).then(function(Ce){return s(A.length,Ce)})}).then(function(){return(0<z.length||B&&b)&&u.mutate({trans:a,type:"delete",keys:z,criteria:B,isAdditionalChunk:0<$}).then(function(Ce){return zn(n.table,z,Ce)}).then(function(Ce){return s(z.length,Ce)})}).then(function(){return g.length>$+T&&S($+k)})})}var B=p(n)&&n.limit===1/0&&(typeof e!="function"||b)&&{index:n.index,range:n.range};return S(0).then(function(){if(0<m.length)throw new Dt("Error modifying one or more objects",m,x,C);return g.length})})})},R.prototype.delete=function(){var e=this._ctx,t=e.range;return!p(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(ve):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(v){var c=v.failures,v=v.numFailures;if(v)throw new Dt("Could not delete some values",Object.keys(c).map(function(k){return c[k]}),i-v);return i-v})})})};var Q=R;function R(){}var ve=function(e,t){return t.value=null};function Ae(e,t){return e<t?-1:e===t?0:1}function He(e,t){return t<e?-1:e===t?0:1}function ne(e,t,n){return e=e instanceof xt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Oe(e){return new e.Collection(e,function(){return nt("")}).limit(0)}function $e(C,t,n,a){var s,i,u,c,v,k,y,m=n.length;if(!n.every(function(g){return typeof g=="string"}))return ne(C,_n);function x(g){s=g==="next"?function(B){return B.toUpperCase()}:function(B){return B.toLowerCase()},i=g==="next"?function(B){return B.toLowerCase()}:function(B){return B.toUpperCase()},u=g==="next"?Ae:He;var S=n.map(function(B){return{lower:i(B),upper:s(B)}}).sort(function(B,$){return u(B.lower,$.lower)});c=S.map(function(B){return B.upper}),v=S.map(function(B){return B.lower}),y=(k=g)==="next"?"":a}x("next");var C=new C.Collection(C,function(){return Se(c[0],v[m-1]+a)}),b=(C._ondirectionchange=function(g){x(g)},0);return C._addAlgorithm(function(g,S,B){var $=g.key;if(typeof $=="string"){var T=i($);if(t(T,v,b))return!0;for(var O=null,j=b;j<m;++j){var K=((A,U,z,N,G,fe)=>{for(var Ce=Math.min(A.length,N.length),te=-1,re=0;re<Ce;++re){var Ie=U[re];if(Ie!==N[re])return G(A[re],z[re])<0?A.substr(0,re)+z[re]+z.substr(re+1):G(A[re],N[re])<0?A.substr(0,re)+N[re]+z.substr(re+1):0<=te?A.substr(0,te)+U[te]+z.substr(te+1):null;G(A[re],Ie)<0&&(te=re)}return Ce<N.length&&fe==="next"?A+z.substr(A.length):Ce<A.length&&fe==="prev"?A.substr(0,z.length):te<0?null:A.substr(0,te)+N[te]+z.substr(te+1)})($,T,c[j],v[j],u,k);K===null&&O===null?b=j+1:(O===null||0<u(O,K))&&(O=K)}S(O!==null?function(){g.continue(O+y)}:B)}return!1}),C}function Se(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function nt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(D.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),D.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Oe(this):new this.Collection(this,function(){return Se(e,t,!n,!a)})}catch{return ne(this,zt)}},D.prototype.equals=function(e){return e==null?ne(this,zt):new this.Collection(this,function(){return nt(e)})},D.prototype.above=function(e){return e==null?ne(this,zt):new this.Collection(this,function(){return Se(e,void 0,!0)})},D.prototype.aboveOrEqual=function(e){return e==null?ne(this,zt):new this.Collection(this,function(){return Se(e,void 0,!1)})},D.prototype.below=function(e){return e==null?ne(this,zt):new this.Collection(this,function(){return Se(void 0,e,!1,!0)})},D.prototype.belowOrEqual=function(e){return e==null?ne(this,zt):new this.Collection(this,function(){return Se(void 0,e)})},D.prototype.startsWith=function(e){return typeof e!="string"?ne(this,_n):this.between(e,e+vn,!0,!0)},D.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):$e(this,function(t,n){return t.indexOf(n[0])===0},[e],vn)},D.prototype.equalsIgnoreCase=function(e){return $e(this,function(t,n){return t===n[0]},[e],"")},D.prototype.anyOfIgnoreCase=function(){var e=he.apply(et,arguments);return e.length===0?Oe(this):$e(this,function(t,n){return n.indexOf(t)!==-1},e,"")},D.prototype.startsWithAnyOfIgnoreCase=function(){var e=he.apply(et,arguments);return e.length===0?Oe(this):$e(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,vn)},D.prototype.anyOf=function(){var e,t,n=this,a=he.apply(et,arguments),s=this._cmp;try{a.sort(s)}catch{return ne(this,zt)}return a.length===0?Oe(this):((e=new this.Collection(this,function(){return Se(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,u,c){for(var v=i.key;0<s(v,a[t]);)if(++t===a.length)return u(c),!1;return s(v,a[t])===0||(u(function(){i.continue(a[t])}),!1)}),e)},D.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},D.prototype.noneOf=function(){var e=he.apply(et,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ne(this,zt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},D.prototype.inAnyRange=function(e,B){var n=this,a=this._cmp,s=this._ascending,i=this._descending,u=this._min,c=this._max;if(e.length===0)return Oe(this);if(!e.every(function($){return $[0]!==void 0&&$[1]!==void 0&&s($[0],$[1])<=0}))return ne(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var v=!B||B.includeLowers!==!1,k=B&&B.includeUppers===!0,y,m=s;function x($,T){return m($[0],T[0])}try{(y=e.reduce(function($,T){for(var O=0,j=$.length;O<j;++O){var K=$[O];if(a(T[0],K[1])<0&&0<a(T[1],K[0])){K[0]=u(K[0],T[0]),K[1]=c(K[1],T[1]);break}}return O===j&&$.push(T),$},[])).sort(x)}catch{return ne(this,zt)}var C=0,b=k?function($){return 0<s($,y[C][1])}:function($){return 0<=s($,y[C][1])},g=v?function($){return 0<i($,y[C][0])}:function($){return 0<=i($,y[C][0])},S=b,B=new this.Collection(this,function(){return Se(y[0][0],y[y.length-1][1],!v,!k)});return B._ondirectionchange=function($){m=$==="next"?(S=b,s):(S=g,i),y.sort(x)},B._addAlgorithm(function($,T,O){for(var j,K=$.key;S(K);)if(++C===y.length)return T(O),!1;return!b(j=K)&&!g(j)||(n._cmp(K,y[C][1])===0||n._cmp(K,y[C][0])===0||T(function(){m===s?$.continue(y[C][0]):$.continue(y[C][1])}),!1)}),B},D.prototype.startsWithAnyOf=function(){var e=he.apply(et,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Oe(this):this.inAnyRange(e.map(function(t){return[t,t+vn]})):ne(this,"startsWithAnyOf() only works with strings")};var xt=D;function D(){}function Fe(e){return Te(function(t){return vt(t),e(t.target.error),!1})}function vt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var at="storagemutated",lt="x-storagemutated-1",le=f(null,at),St=(de.prototype._lock=function(){return On(!J.global),++this._reculock,this._reculock!==1||J.global||(J.lockOwnerFor=this),this},de.prototype._unlock=function(){if(On(!J.global),--this._reculock==0)for(J.global||(J.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{pn(e[1],e[0])}catch{}}return this},de.prototype._locked=function(){return this._reculock&&J.lockOwnerFor!==this},de.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(On(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(a);case"MissingAPIError":throw new ee.MissingAPI(a.message,a);default:throw new ee.OpenFailed(a)}if(!this.active)throw new ee.TransactionInactive;On(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Te(function(s){vt(s),t._reject(e.error)}),e.onabort=Te(function(s){vt(s),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Te(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&le.storagemutated.fire(e.mutatedParts)})}return this},de.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Re(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Y(function(i,u){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,u)},J])}):n?nn(function(){var i=new Y(function(u,c){s._lock();var v=t(u,c,s);v&&v.then&&v.then(u,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new Y(function(i,u){var c=t(i,u,s);c&&c.then&&c.then(i,u)}))._lib=!0,a):Re(new ee.TransactionInactive)},de.prototype._root=function(){return this.parent?this.parent._root():this},de.prototype.waitFor=function(e){var t,n=this._root(),a=Y.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new Y(function(i,u){a.then(function(c){return n._waitingQueue.push(Te(i.bind(null,c)))},function(c){return n._waitingQueue.push(Te(u.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},de.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},de.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(oe(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},de);function de(){}function Qe(e,t,n,a,s,i,u,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!u?"&":"")+(a?"*":"")+(s?"++":"")+Ue(t),type:c}}function Ue(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Le(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,u){return i=a(i,u),i&&(s[i[0]]=i[1]),s},{}))};var a}var _e=function(e){try{return e.only([[]]),_e=function(){return[[]]},[[]]}catch{return _e=function(){return vn},vn}};function Ze(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Kt(n,t)}:function(n){return Kt(n,e)};var t}function Ut(e){return[].slice.call(e)}var sn=0;function ut(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function At(e,t,v){function a(b){if(b.type===3)return null;if(b.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=b.lower,x=b.upper,C=b.lowerOpen,b=b.upperOpen;return m===void 0?x===void 0?null:t.upperBound(x,!!b):x===void 0?t.lowerBound(m,!!C):t.bound(m,x,!!C,!!b)}function s(y){var m,x=y.name;return{name:x,schema:y,mutate:function(C){var b=C.trans,g=C.type,S=C.keys,B=C.values,$=C.range;return new Promise(function(T,O){T=Te(T);var j=b.objectStore(x),K=j.keyPath==null,A=g==="put"||g==="add";if(!A&&g!=="delete"&&g!=="deleteRange")throw new Error("Invalid operation type: "+g);var U,z=(S||B||{length:1}).length;if(S&&B&&S.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(z===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function N(Ke){++Ce,vt(Ke)}var G=[],fe=[],Ce=0;if(g==="deleteRange"){if($.type===4)return T({numFailures:Ce,failures:fe,results:[],lastResult:void 0});$.type===3?G.push(U=j.clear()):G.push(U=j.delete(a($)))}else{var K=A?K?[B,S]:[B,null]:[S,null],te=K[0],re=K[1];if(A)for(var Ie=0;Ie<z;++Ie)G.push(U=re&&re[Ie]!==void 0?j[g](te[Ie],re[Ie]):j[g](te[Ie])),U.onerror=N;else for(Ie=0;Ie<z;++Ie)G.push(U=j[g](te[Ie])),U.onerror=N}function wt(Ke){Ke=Ke.target.result,G.forEach(function(kt,Xt){return kt.error!=null&&(fe[Xt]=kt.error)}),T({numFailures:Ce,failures:fe,results:g==="delete"?S:G.map(function(kt){return kt.result}),lastResult:Ke})}U.onerror=function(Ke){N(Ke),wt(Ke)},U.onsuccess=wt})},getMany:function(C){var b=C.trans,g=C.keys;return new Promise(function(S,B){S=Te(S);for(var $,T=b.objectStore(x),O=g.length,j=new Array(O),K=0,A=0,U=function(G){G=G.target,j[G._pos]=G.result,++A===K&&S(j)},z=Fe(B),N=0;N<O;++N)g[N]!=null&&(($=T.get(g[N]))._pos=N,$.onsuccess=U,$.onerror=z,++K);K===0&&S(j)})},get:function(C){var b=C.trans,g=C.key;return new Promise(function(S,B){S=Te(S);var $=b.objectStore(x).get(g);$.onsuccess=function(T){return S(T.target.result)},$.onerror=Fe(B)})},query:(m=c,function(C){return new Promise(function(b,g){b=Te(b);var S,B,$,A=C.trans,T=C.values,O=C.limit,K=C.query,j=O===1/0?void 0:O,U=K.index,K=K.range,A=A.objectStore(x),A=U.isPrimaryKey?A:A.index(U.name),U=a(K);if(O===0)return b({result:[]});m?((K=T?A.getAll(U,j):A.getAllKeys(U,j)).onsuccess=function(z){return b({result:z.target.result})},K.onerror=Fe(g)):(S=0,B=!T&&"openKeyCursor"in A?A.openKeyCursor(U):A.openCursor(U),$=[],B.onsuccess=function(z){var N=B.result;return!N||($.push(T?N.value:N.primaryKey),++S===O)?b({result:$}):void N.continue()},B.onerror=Fe(g))})}),openCursor:function(C){var b=C.trans,g=C.values,S=C.query,B=C.reverse,$=C.unique;return new Promise(function(T,O){T=Te(T);var A=S.index,j=S.range,K=b.objectStore(x),K=A.isPrimaryKey?K:K.index(A.name),A=B?$?"prevunique":"prev":$?"nextunique":"next",U=!g&&"openKeyCursor"in K?K.openKeyCursor(a(j),A):K.openCursor(a(j),A);U.onerror=Fe(O),U.onsuccess=Te(function(z){var N,G,fe,Ce,te=U.result;te?(te.___id=++sn,te.done=!1,N=te.continue.bind(te),G=(G=te.continuePrimaryKey)&&G.bind(te),fe=te.advance.bind(te),Ce=function(){throw new Error("Cursor not stopped")},te.trans=b,te.stop=te.continue=te.continuePrimaryKey=te.advance=function(){throw new Error("Cursor not started")},te.fail=Te(O),te.next=function(){var re=this,Ie=1;return this.start(function(){return Ie--?re.continue():re.stop()}).then(function(){return re})},te.start=function(re){function Ie(){if(U.result)try{re()}catch(Ke){te.fail(Ke)}else te.done=!0,te.start=function(){throw new Error("Cursor behind last entry")},te.stop()}var wt=new Promise(function(Ke,kt){Ke=Te(Ke),U.onerror=Fe(kt),te.fail=kt,te.stop=function(Xt){te.stop=te.continue=te.continuePrimaryKey=te.advance=Ce,Ke(Xt)}});return U.onsuccess=Te(function(Ke){U.onsuccess=Ie,Ie()}),te.continue=N,te.continuePrimaryKey=G,te.advance=fe,Ie(),wt},T(te)):T(null)},O)})},count:function(C){var b=C.query,g=C.trans,S=b.index,B=b.range;return new Promise(function($,T){var O=g.objectStore(x),O=S.isPrimaryKey?O:O.index(S.name),j=a(B),j=j?O.count(j):O.count();j.onsuccess=Te(function(K){return $(K.target.result)}),j.onerror=Fe(T)})}}}i=v,u=Ut((v=e).objectStoreNames);var i,v={schema:{name:v.name,tables:u.map(function(y){return i.objectStore(y)}).map(function(y){var m=y.keyPath,x=y.autoIncrement,b=ie(m),C={},b={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:b,keyPath:m,autoIncrement:x,unique:!0,extractKey:Ze(m)},indexes:Ut(y.indexNames).map(function(g){return y.index(g)}).map(function($){var T=$.name,S=$.unique,B=$.multiEntry,$=$.keyPath,T={name:T,compound:ie($),keyPath:$,unique:S,multiEntry:B,extractKey:Ze($)};return C[ut($)]=T}),getIndexByKeyPath:function(g){return C[ut(g)]}};return C[":id"]=b.primaryKey,m!=null&&(C[ut(m)]=b.primaryKey),b})},hasGetAll:0<u.length&&"getAll"in i.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},u=v.schema,c=v.hasGetAll,v=u.tables.map(s),k={};return v.forEach(function(y){return k[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if(k[y])return k[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:_e(t),schema:u}}function Wn(e,t,n,a){return n=n.IDBKeyRange,t=At(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,H(H({},s),i(s))},t)}}function Ee(e,t){var n=t.db,n=Wn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function me(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(u){var c=(function v(k,y){return aa(k,y)||(k=ot(k))&&v(k,y)})(u,s);(!c||"value"in c&&c.value===void 0)&&(u===e.Transaction.prototype||u instanceof e.Transaction?dt(u,s,{get:function(){return this.table(s)},set:function(v){ct(this,s,{value:v,writable:!0,configurable:!0,enumerable:!0})}}):u[s]=new e.Table(s,i))})})}function Me(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function qe(e,t){return e._cfg.version-t._cfg.version}function st(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Le("$meta",Gn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),u=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=J.transless||J;nn(function(){if(J.trans=i,J.transless=c,t!==0)return Ee(e,n),k=t,((v=i).storeNames.includes("$meta")?v.table("$meta").get("version").then(function(y){return y??k}):Y.resolve(k)).then(function(S){var m=e,x=S,C=i,b=n,g=[],S=m._versions,B=m._dbSchema=Bt(0,m.idbdb,b);return(S=S.filter(function($){return $._cfg.version>=x})).length===0?Y.resolve():(S.forEach(function($){g.push(function(){var T,O,j,K=B,A=$._cfg.dbschema,U=(xe(m,K,b),xe(m,A,b),B=m._dbSchema=A,Et(K,A)),z=(U.add.forEach(function(N){Nt(b,N[0],N[1].primKey,N[1].indexes)}),U.change.forEach(function(N){if(N.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var G=b.objectStore(N.name);N.add.forEach(function(fe){return it(G,fe)}),N.change.forEach(function(fe){G.deleteIndex(fe.name),it(G,fe)}),N.del.forEach(function(fe){return G.deleteIndex(fe)})}),$._cfg.contentUpgrade);if(z&&$._cfg.version>x)return Ee(m,b),C._memoizedTables={},T=Ea(A),U.del.forEach(function(N){T[N]=K[N]}),Me(m,[m.Transaction.prototype]),me(m,[m.Transaction.prototype],we(T),T),C.schema=T,(O=kn(z))&&Bn(),A=Y.follow(function(){var N;(j=z(C))&&O&&(N=an.bind(null,null),j.then(N,N))}),j&&typeof j.then=="function"?Y.resolve(j):A.then(function(){return j})}),g.push(function(T){var O,j,K=$._cfg.dbschema;O=K,j=T,[].slice.call(j.db.objectStoreNames).forEach(function(A){return O[A]==null&&j.db.deleteObjectStore(A)}),Me(m,[m.Transaction.prototype]),me(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),C.schema=m._dbSchema}),g.push(function(T){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===$._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(O){return O!=="$meta"})):T.objectStore("$meta").put($._cfg.version,"version"))})}),(function $(){return g.length?Y.resolve(g.shift()(C.idbtrans)).then($):Y.resolve()})().then(function(){Lt(B,b)}))}).catch(u);var v,k;we(s).forEach(function(y){Nt(n,y,s[y].primKey,s[y].indexes)}),Ee(e,n),Y.follow(function(){return e.on.populate.fire(i)}).catch(u)})}function Mn(e,t){Lt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Bt(0,e.idbdb,t);xe(e,e._dbSchema,t);for(var a=0,s=Et(n,e._dbSchema).change;a<s.length;a++){var i=(u=>{if(u.change.length||u.recreate)return console.warn("Unable to patch indexes of table ".concat(u.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(u.name);u.add.forEach(function(v){bt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name,".").concat(v.src)),it(c,v)})})(s[a]);if(typeof i=="object")return i.value}}function Et(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var u={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)u.recreate=!0,a.change.push(u);else{var c=s.idxByName,v=i.idxByName,k=void 0;for(k in c)v[k]||u.del.push(k);for(k in v){var y=c[k],m=v[k];y?y.src!==m.src&&u.change.push(m):u.add.push(m)}(0<u.del.length||0<u.add.length||0<u.change.length)&&a.change.push(u)}}else a.add.push([n,i])}return a}function Nt(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return it(s,i)})}function Lt(e,t){we(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(bt&&console.debug("Dexie: Creating missing table",n),Nt(t,n,e[n].primKey,e[n].indexes))})}function it(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Bt(e,t,n){var a={};return ra(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),u=Qe(Ue(k=i.keyPath),k||"",!0,!1,!!i.autoIncrement,k&&typeof k!="string",!0),c=[],v=0;v<i.indexNames.length;++v){var y=i.index(i.indexNames[v]),k=y.keyPath,y=Qe(y.name,k,!!y.unique,!!y.multiEntry,!1,k&&typeof k!="string",!1);c.push(y)}a[s]=Le(s,u,c)}),a}function xe(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],u=n.objectStore(i);e._hasGetAll="getAll"in u;for(var c=0;c<u.indexNames.length;++c){var v,k=u.indexNames[c],y=u.index(k).keyPath,y=typeof y=="string"?y:"["+ra(y).join("+")+"]";t[i]&&(v=t[i].idxByName[y])&&(v.name=k,delete t[i].idxByName[y],t[i].idxByName[k]=v)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Gn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Qe(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(i),n===0,a)})}q.prototype._createTableSchema=Le,q.prototype._parseIndexSyntax=Gn,q.prototype._parseStoresSpec=function(e,t){var n=this;we(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new ee.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new ee.Schema("Primary key cannot be multiEntry*");s.forEach(function(u){if(u.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!u.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},q.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ye(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){ye(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,Me(t,[t._allTables,t,t.Transaction.prototype]),me(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],we(s),s),t._storeNames=we(s),this},q.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Nn(this._cfg.contentUpgrade||ke,e),this};var P=q;function q(){}function ue(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Gt(Vn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function bn(e){return e&&typeof e.databases=="function"}function pa(e){return nn(function(){return J.letThrough=!0,e()})}function va(e){return!("from"in e)}var rt=function(e,t){var n;if(!this)return n=new rt,e&&"d"in e&&ye(n,e),n;ye(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Jn(e,t,n){var a=ce(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(va(e))return ye(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(ce(n,e.from)<0)return a?Jn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Ia(e);if(0<ce(t,e.to))return s?Jn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Ia(e);ce(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<ce(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&Hn(e,a),s&&t&&Hn(e,s)}}function Hn(e,t){va(t)||(function n(a,s){var i=s.from,u=s.l,c=s.r;Jn(a,i,s.to),u&&n(a,u),c&&n(a,c)})(e,t)}function Ot(e,t){var n=_t(t),a=n.next();if(!a.done)for(var s=a.value,i=_t(e),u=i.next(s.from),c=u.value;!a.done&&!u.done;){if(ce(c.from,s.to)<=0&&0<=ce(c.to,s.from))return!0;ce(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(u=i.next(s.from)).value}return!1}function _t(e){var t=va(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&ce(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||ce(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ia(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=H({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Na(n)),e.d=Na(e)}function Na(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Xn(e,t){return we(t).forEach(function(n){e[n]?Hn(e[n],t[n]):e[n]=(function a(s){var i,u,c={};for(i in s)oe(s,i)&&(u=s[i],c[i]=!u||typeof u!="object"||Ua.has(u.constructor)?u:a(u));return c})(t[n])}),e}function ma(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Ot(t[n],e[n])})}gt(rt.prototype,((tt={add:function(e){return Hn(this,e),this},addKey:function(e){return Jn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Jn(t,n,n)}),this},hasKey:function(e){var t=_t(this).next(e).value;return t&&ce(t.from,e)<=0&&0<=ce(t.to,e)}})[Ma]=function(){return _t(this)},tt));var on={},ga={},ba=!1;function ya(e){Xn(ga,e),ba||(ba=!0,setTimeout(function(){ba=!1,Qn(ga,!(ga={}))},0))}function Qn(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(on);a<s.length;a++)La(c=s[a],e,n,t);else for(var i in e){var u,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(u=i[1],i=i[2],c=on["idb://".concat(u,"/").concat(i)])&&La(c,e,n,t)}n.forEach(function(v){return v()})}function La(e,t,n,a){for(var s=[],i=0,u=Object.entries(e.queries.query);i<u.length;i++){for(var c=u[i],v=c[0],k=[],y=0,m=c[1];y<m.length;y++){var x=m[y];ma(t,x.obsSet)?x.subscribers.forEach(function(S){return n.add(S)}):a&&k.push(x)}a&&s.push([v,k])}if(a)for(var C=0,b=s;C<b.length;C++){var g=b[C],v=g[0],k=g[1];e.queries.query[v]=k}}function Wt(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Re(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function u(){if(t.openCanceller!==a)throw new ee.DatabaseClosed("db.open() was cancelled")}function c(){return new Y(function(x,C){if(u(),!n)throw new ee.MissingAPI;var b=e.name,g=t.autoSchema||!s?n.open(b):n.open(b,s);if(!g)throw new ee.MissingAPI;g.onerror=Fe(C),g.onblocked=Te(e._fireOnBlocked),g.onupgradeneeded=Te(function(S){var B;y=g.transaction,t.autoSchema&&!e._options.allowEmptyDB?(g.onerror=vt,y.abort(),g.result.close(),(B=n.deleteDatabase(b)).onsuccess=B.onerror=Te(function(){C(new ee.NoSuchDatabase("Database ".concat(b," doesnt exist")))})):(y.onerror=Fe(C),B=S.oldVersion>Math.pow(2,62)?0:S.oldVersion,m=B<1,e.idbdb=g.result,i&&Mn(e,y),st(e,B/10,y,C))},C),g.onsuccess=Te(function(){y=null;var S,B,$,T,O,j,K=e.idbdb=g.result,A=ra(K.objectStoreNames);if(0<A.length)try{var U=K.transaction((O=A).length===1?O[0]:O,"readonly");if(t.autoSchema)j=K,T=U,($=e).verno=j.version/10,T=$._dbSchema=Bt(0,j,T),$._storeNames=ra(j.objectStoreNames,0),me($,[$._allTables],we(T),T);else if(xe(e,e._dbSchema,U),B=U,((B=Et(Bt(0,(S=e).idbdb,B),S._dbSchema)).add.length||B.change.some(function(z){return z.add.length||z.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),K.close(),s=K.version+1,i=!0,x(c());Ee(e,U)}catch{}mn.push(e),K.onversionchange=Te(function(z){t.vcFired=!0,e.on("versionchange").fire(z)}),K.onclose=Te(function(){e.close({disableAutoOpen:!1})}),m&&(A=e._deps,O=b,bn(j=A.indexedDB)||O===Vn||ue(j,A.IDBKeyRange).put({name:O}).catch(ke)),x()},C)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return Y.reject(x)})}var v,k=t.dbReadyResolve,y=null,m=!1;return Y.race([a,(typeof navigator>"u"?Y.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function C(){return indexedDB.databases().finally(x)}v=setInterval(C,100),C()}).finally(function(){return clearInterval(v)}):Promise.resolve()).then(c)]).then(function(){return u(),t.onReadyBeingFired=[],Y.resolve(pa(function(){return e.on.ready.fire(e.vip)})).then(function x(){var C;if(0<t.onReadyBeingFired.length)return C=t.onReadyBeingFired.reduce(Nn,ke),t.onReadyBeingFired=[],Y.resolve(pa(function(){return C(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{y&&y.abort()}catch{}return a===t.openCanceller&&e._close(),Re(x)}).finally(function(){t.openComplete=!0,k()}).then(function(){var x;return m&&(x={},e.tables.forEach(function(C){C.schema.indexes.forEach(function(b){b.name&&(x["idb://".concat(e.name,"/").concat(C.name,"/").concat(b.name)]=new rt(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(C.name,"/")]=x["idb://".concat(e.name,"/").concat(C.name,"/:dels")]=new rt(-1/0,[[[]]])}),le(at).fire(x),Qn(x,!0)),e})}function qa(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),v=c.value;return c.done?v:v&&typeof v.then=="function"?v.then(n,a):ie(v)?Promise.all(v).then(n,a):n(v)}}return s(t)()}function Ft(e,t,n){for(var a=ie(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Sr={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return H(H({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function u(x,C,b){var $=ut(x),g=s[$]=s[$]||[],S=x==null?0:typeof x=="string"?1:x.length,B=0<C,$=H(H({},b),{name:B?"".concat($,"(virtual-from:").concat(b.name,")"):b.name,lowLevelIndex:b,isVirtual:B,keyTail:C,keyLength:S,extractKey:Ze(x),unique:!B&&b.unique});return g.push($),$.isPrimaryKey||i.push($),1<S&&u(S===2?x[0]:x.slice(0,S-1),C+1,b),g.sort(function(T,O){return T.keyTail-O.keyTail}),$}var c=u(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var v=0,k=a.indexes;v<k.length;v++){var y=k[v];u(y.keyPath,0,y)}function m(x){var C,b=x.query.index;return b.isVirtual?H(H({},x),{query:{index:b.lowLevelIndex,range:(C=x.query.range,b=b.keyTail,{type:C.type===1?2:C.type,lower:Ft(C.lower,C.lowerOpen?e.MAX_KEY:e.MIN_KEY,b),lowerOpen:!0,upper:Ft(C.upper,C.upperOpen?e.MIN_KEY:e.MAX_KEY,b),upperOpen:!0})}}):x}return H(H({},n),{schema:H(H({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(x){return(x=s[ut(x)])&&x[0]}}),count:function(x){return n.count(m(x))},query:function(x){return n.query(m(x))},openCursor:function(x){var C=x.query.index,b=C.keyTail,g=C.keyLength;return C.isVirtual?n.openCursor(m(x)).then(function(B){return B&&S(B)}):n.openCursor(x);function S(B){return Object.create(B,{continue:{value:function($){$!=null?B.continue(Ft($,x.reverse?e.MAX_KEY:e.MIN_KEY,b)):x.unique?B.continue(B.key.slice(0,g).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,b)):B.continue()}},continuePrimaryKey:{value:function($,T){B.continuePrimaryKey(Ft($,e.MAX_KEY,b),T)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var $=B.key;return g===1?$[0]:$.slice(0,g)}},value:{get:function(){return B.value}}})}}})}})}};function Ka(e,t,n,a){return n=n||{},a=a||"",we(e).forEach(function(s){var i,u,c;oe(t,s)?(i=e[s],u=t[s],typeof i=="object"&&typeof u=="object"&&i&&u?(c=_a(i))!==_a(u)?n[a+s]=t[s]:c==="Object"?Ka(i,u,n,a+s+"."):i!==u&&(n[a+s]=t[s]):i!==u&&(n[a+s]=t[s])):n[a+s]=void 0}),we(t).forEach(function(s){oe(e,s)||(n[a+s]=t[s])}),n}function Ca(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var sr={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return H(H({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return H(H({},n),{mutate:function(s){var i=J.trans,u=i.table(t).hook,c=u.deleting,v=u.creating,k=u.updating;switch(s.type){case"add":if(v.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"put":if(v.fire===ke&&k.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"delete":if(c.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"deleteRange":if(c.fire===ke)break;return i._promise("readwrite",function(){return(function m(x,C,b){return n.query({trans:x,values:!1,query:{index:a,range:C},limit:b}).then(function(g){var S=g.result;return y({type:"delete",keys:S,trans:x}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):S.length<b?{failures:[],numFailures:0,lastResult:void 0}:m(x,H(H({},C),{lower:S[S.length-1],lowerOpen:!0}),b)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function y(m){var x,C,b,g=J.trans,S=m.keys||Ca(a,m);if(S)return(m=m.type==="add"||m.type==="put"?H(H({},m),{keys:S}):H({},m)).type!=="delete"&&(m.values=be([],m.values)),m.keys&&(m.keys=be([],m.keys)),x=n,b=S,((C=m).type==="add"?Promise.resolve([]):x.getMany({trans:C.trans,keys:b,cache:"immutable"})).then(function(B){var $=S.map(function(T,O){var j,K,A,U=B[O],z={onerror:null,onsuccess:null};return m.type==="delete"?c.fire.call(z,T,U,g):m.type==="add"||U===void 0?(j=v.fire.call(z,T,m.values[O],g),T==null&&j!=null&&(m.keys[O]=T=j,a.outbound||ft(m.values[O],a.keyPath,T))):(j=Ka(U,m.values[O]),(K=k.fire.call(z,j,T,U,g))&&(A=m.values[O],Object.keys(K).forEach(function(N){oe(A,N)?A[N]=K[N]:ft(A,N,K[N])}))),z});return n.mutate(m).then(function(T){for(var O=T.failures,j=T.results,K=T.numFailures,T=T.lastResult,A=0;A<S.length;++A){var U=(j||S)[A],z=$[A];U==null?z.onerror&&z.onerror(O[A]):z.onsuccess&&z.onsuccess(m.type==="put"&&B[A]?m.values[A]:U)}return{failures:O,results:j,numFailures:K,lastResult:T}}).catch(function(T){return $.forEach(function(O){return O.onerror&&O.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function ja(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)ce(t.keys[s],e[i])===0&&(a.push(n?ht(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var ir={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return H(H({},n),{getMany:function(a){var s;return a.cache?(s=ja(a.keys,a.trans._cache,a.cache==="clone"))?Y.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?ht(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ra(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function or(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Er={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new rt(e.MIN_KEY,e.MAX_KEY);return H(H({},e),{transaction:function(a,s,i){if(J.subscr&&s!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(J.querier));return e.transaction(a,s,i)},table:function(a){function s(S){var g,S=S.query;return[g=S.index,new rt((g=(S=S.range).lower)!=null?g:e.MIN_KEY,(g=S.upper)!=null?g:e.MAX_KEY)]}var i=e.table(a),u=i.schema,c=u.primaryKey,v=u.indexes,k=c.extractKey,y=c.outbound,m=c.autoIncrement&&v.filter(function(b){return b.compound&&b.keyPath.includes(c.keyPath)}),x=H(H({},i),{mutate:function(b){function g(G){return G="idb://".concat(t,"/").concat(a,"/").concat(G),O[G]||(O[G]=new rt)}var S,B,$,T=b.trans,O=b.mutatedParts||(b.mutatedParts={}),j=g(""),K=g(":dels"),A=b.type,z=b.type==="deleteRange"?[b.range]:b.type==="delete"?[b.keys]:b.values.length<50?[Ca(c,b).filter(function(G){return G}),b.values]:[],U=z[0],z=z[1],N=b.trans._cache;return ie(U)?(j.addKeys(U),(A=A==="delete"||U.length===z.length?ja(U,N):null)||K.addKeys(U),(A||z)&&(S=g,B=A,$=z,u.indexes.forEach(function(G){var fe=S(G.name||"");function Ce(re){return re!=null?G.extractKey(re):null}function te(re){G.multiEntry&&ie(re)?re.forEach(function(Ie){return fe.addKey(Ie)}):fe.addKey(re)}(B||$).forEach(function(re,Ke){var wt=B&&Ce(B[Ke]),Ke=$&&Ce($[Ke]);ce(wt,Ke)!==0&&(wt!=null&&te(wt),Ke!=null)&&te(Ke)})}))):U?(z={from:(N=U.lower)!=null?N:e.MIN_KEY,to:(A=U.upper)!=null?A:e.MAX_KEY},K.add(z),j.add(z)):(j.add(n),K.add(n),u.indexes.forEach(function(G){return g(G.name).add(n)})),i.mutate(b).then(function(G){return!U||b.type!=="add"&&b.type!=="put"||(j.addKeys(G.results),m&&m.forEach(function(fe){for(var Ce=b.values.map(function(wt){return fe.extractKey(wt)}),te=fe.keyPath.findIndex(function(wt){return wt===c.keyPath}),re=0,Ie=G.results.length;re<Ie;++re)Ce[re][te]=G.results[re];g(fe.name).addKeys(Ce)})),T.mutatedParts=Xn(T.mutatedParts||{},O),G})}}),C={get:function(b){return[c,new rt(b.key)]},getMany:function(b){return[c,new rt().addKeys(b.keys)]},count:s,query:s,openCursor:s};return we(C).forEach(function(b){x[b]=function(g){var S=J.subscr,B=!!S,$=Ra(J,i)&&or(b,g)?g.obsSet={}:S;if(B){var T,S=function(z){return z="idb://".concat(t,"/").concat(a,"/").concat(z),$[z]||($[z]=new rt)},O=S(""),j=S(":dels"),B=C[b](g),K=B[0],B=B[1];if((b==="query"&&K.isPrimaryKey&&!g.values?j:S(K.name||"")).add(B),!K.isPrimaryKey){if(b!=="count")return T=b==="query"&&y&&g.values&&i.query(H(H({},g),{values:!1})),i[b].apply(this,arguments).then(function(z){if(b==="query"){if(y&&g.values)return T.then(function(Ce){return Ce=Ce.result,O.addKeys(Ce),z});var N=g.values?z.result.map(k):z.result;(g.values?O:j).addKeys(N)}else{var G,fe;if(b==="openCursor")return fe=g.values,(G=z)&&Object.create(G,{key:{get:function(){return j.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var Ce=G.primaryKey;return j.addKey(Ce),Ce}},value:{get:function(){return fe&&O.addKey(G.primaryKey),G.value}}})}return z});j.add(n)}}return i[b].apply(this,arguments)}}),x}})}};function lr(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=H({},t),ie(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&ie(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function Va(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<ce(n,a.lower):0<=ce(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?ce(n,a.upper)<0:ce(n,a.upper)<=0));var n,a}function ur(e,t,n,a,s,i){var u,c,v,k,y,m;return!n||n.length===0||(u=t.query.index,c=u.multiEntry,v=t.query.range,k=a.schema.primaryKey.extractKey,y=u.extractKey,m=(u.lowLevelIndex||u).extractKey,(a=n.reduce(function(x,C){var b=x,g=[];if(C.type==="add"||C.type==="put")for(var S=new rt,B=C.values.length-1;0<=B;--B){var $,T=C.values[B],O=k(T);!S.hasKey(O)&&($=y(T),c&&ie($)?$.some(function(z){return Va(z,v)}):Va($,v))&&(S.addKey(O),g.push(T))}switch(C.type){case"add":var j=new rt().addKeys(t.values?x.map(function(N){return k(N)}):x),b=x.concat(t.values?g.filter(function(N){return N=k(N),!j.hasKey(N)&&(j.addKey(N),!0)}):g.map(function(N){return k(N)}).filter(function(N){return!j.hasKey(N)&&(j.addKey(N),!0)}));break;case"put":var K=new rt().addKeys(C.values.map(function(N){return k(N)}));b=x.filter(function(N){return!K.hasKey(t.values?k(N):N)}).concat(t.values?g:g.map(function(N){return k(N)}));break;case"delete":var A=new rt().addKeys(C.keys);b=x.filter(function(N){return!A.hasKey(t.values?k(N):N)});break;case"deleteRange":var U=C.range;b=x.filter(function(N){return!Va(k(N),U)})}return b},e))===e)?e:(a.sort(function(x,C){return ce(m(x),m(C))||ce(k(x),k(C))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function Pn(e,t){return ce(e.lower,t.lower)===0&&ce(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Br(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=ce(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=ce(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function cr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&en(i,s)},3e3))})}var dr={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return H(H({},e),{transaction:function(n,a,s){var i,u,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(u=function(v){return function(){if(i.abort(),a==="readwrite"){for(var k=new Set,y=0,m=n;y<m.length;y++){var x=m[y],C=on["idb://".concat(t,"/").concat(x)];if(C){var b=e.table(x),g=C.optimisticOps.filter(function(G){return G.trans===c});if(c._explicit&&v&&c.mutatedParts)for(var S=0,B=Object.values(C.queries.query);S<B.length;S++)for(var $=0,T=(K=B[S]).slice();$<T.length;$++)ma((A=T[$]).obsSet,c.mutatedParts)&&(en(K,A),A.subscribers.forEach(function(G){return k.add(G)}));else if(0<g.length){C.optimisticOps=C.optimisticOps.filter(function(G){return G.trans!==c});for(var O=0,j=Object.values(C.queries.query);O<j.length;O++)for(var K,A,U,z=0,N=(K=j[O]).slice();z<N.length;z++)(A=N[z]).res!=null&&c.mutatedParts&&(v&&!A.dirty?(U=Object.isFrozen(A.res),U=ur(A.res,A.req,g,b,A,U),A.dirty?(en(K,A),A.subscribers.forEach(function(G){return k.add(G)})):U!==A.res&&(A.res=U,A.promise=Y.resolve({result:U}))):(A.dirty&&en(K,A),A.subscribers.forEach(function(G){return k.add(G)})))}}}k.forEach(function(G){return G()})}}})(!1),{signal:s}),c.addEventListener("error",u(!1),{signal:s}),c.addEventListener("complete",u(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return H(H({},a),{mutate:function(i){var u,c=J.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(u=on["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Ca(s,i).some(function(v){return v==null}))?(u.optimisticOps.push(i),i.mutatedParts&&ya(i.mutatedParts),c.then(function(v){0<v.numFailures&&(en(u.optimisticOps,i),(v=lr(0,i,v))&&u.optimisticOps.push(v),i.mutatedParts)&&ya(i.mutatedParts)}),c.catch(function(){en(u.optimisticOps,i),i.mutatedParts&&ya(i.mutatedParts)})):c.then(function(v){var k=lr(0,H(H({},i),{values:i.values.map(function(y,m){var x;return v.failures[m]?y:(ft(x=(x=s.keyPath)!=null&&x.includes(".")?ht(y):H({},y),s.keyPath,v.results[m]),x)})}),v);u.optimisticOps.push(k),queueMicrotask(function(){return i.mutatedParts&&ya(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var u,c,v,k,y,m,x;return Ra(J,a)&&or("query",i)?(u=((v=J.trans)==null?void 0:v.db._options.cache)==="immutable",c=(v=J).requery,v=v.signal,m=((C,b,g,S)=>{var B=on["idb://".concat(C,"/").concat(b)];if(!B)return[];if(!(C=B.queries[g]))return[null,!1,B,null];var $=C[(S.query?S.query.index.name:null)||""];if(!$)return[null,!1,B,null];switch(g){case"query":var T=$.find(function(O){return O.req.limit===S.limit&&O.req.values===S.values&&Pn(O.req.query.range,S.query.range)});return T?[T,!0,B,$]:[$.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=S.limit&&(!S.values||O.req.values)&&Br(O.req.query.range,S.query.range)}),!1,B,$];case"count":return T=$.find(function(O){return Pn(O.req.query.range,S.query.range)}),[T,!!T,B,$]}})(t,n,"query",i),x=m[0],k=m[2],y=m[3],x&&m[1]?x.obsSet=i.obsSet:(m=a.query(i).then(function(C){var b=C.result;if(x&&(x.res=b),u){for(var g=0,S=b.length;g<S;++g)Object.freeze(b[g]);Object.freeze(b)}else C.result=ht(b);return C}).catch(function(C){return y&&x&&en(y,x),Promise.reject(C)}),x={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(x):(y=[x],(k=k||(on["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),cr(x,y,c,v),x.promise.then(function(C){return{result:ur(C.result,i,k?.optimisticOps,a,x,u)}})):a.query(i)}})}})}};function xa(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}ge.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(qe),n.stores({}),this._state.autoSchema=!1),n},ge.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||J.letThrough||this._vip)?e():new Y(function(n,a){if(t._state.openComplete)return a(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new ee.DatabaseClosed);t.open().catch(ke)}t._state.dbReadyPromise.then(n,a)}).then(e)},ge.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(u,c){return u.level-c.level}),this},ge.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},ge.prototype.open=function(){var e=this;return pn(tn,function(){return Wt(e)})},ge.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=mn.indexOf(this);if(0<=t&&mn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Y(function(n){e.dbReadyResolve=n}),e.openCanceller=new Y(function(n,a){e.cancelOpen=a}))},ge.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},ge.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new Y(function(s,i){function u(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=Te(function(){var v,k,y;v=t._deps,k=t.name,bn(y=v.indexedDB)||k===Vn||ue(y,v.IDBKeyRange).delete(k).catch(ke),s()}),c.onerror=Fe(i),c.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(u):u()})},ge.prototype.backendDB=function(){return this.idbdb},ge.prototype.isOpen=function(){return this.idbdb!==null},ge.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},ge.prototype.hasFailed=function(){return this._state.dbOpenError!==null},ge.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(ge.prototype,"tables",{get:function(){var e=this;return we(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),ge.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new ee.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Ba(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},ge.prototype._transaction=function(e,t,n){var a,s,i=this,u=J.trans,c=(u&&u.db===this&&e.indexOf("!")===-1||(u=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function(k){if(k=k instanceof i.Table?k.name:k,typeof k!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return k}),e=="r"||e===Fa)a=Fa;else{if(e!="rw"&&e!=Da)throw new ee.InvalidArgument("Invalid transaction mode: "+e);a=Da}if(u){if(u.mode===Fa&&a===Da){if(!c)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");u=null}u&&s.forEach(function(k){if(u&&u.storeNames.indexOf(k)===-1){if(!c)throw new ee.SubTransaction("Table "+k+" not included in parent transaction.");u=null}}),c&&u&&!u.active&&(u=null)}}catch(k){return u?u._promise(null,function(y,m){m(k)}):Re(k)}var v=(function k(y,m,x,C,b){return Y.resolve().then(function(){var $=J.transless||J,g=y._createTransaction(m,x,y._dbSchema,C),$=(g.explicit=!0,{trans:g,transless:$});if(C)g.idbtrans=C.idbtrans;else try{g.create(),g.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(T){return T.name===oa.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return k(y,m,x,null,b)})):Re(T)}var S,B=kn(b),$=(B&&Bn(),Y.follow(function(){var T;(S=b.call(g,g))&&(B?(T=an.bind(null,null),S.then(T,T)):typeof S.next=="function"&&typeof S.throw=="function"&&(S=qa(S)))},$));return(S&&typeof S.then=="function"?Y.resolve(S).then(function(T){return g.active?T:Re(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):$.then(function(){return S})).then(function(T){return C&&g._resolve(),g._completion.then(function(){return T})}).catch(function(T){return g._reject(T),Re(T)})})}).bind(null,this,a,s,u,n);return u?u._promise(a,v,"lock"):J.trans?pn(J.transless,function(){return i._whenReady(v)}):this._whenReady(v)},ge.prototype.table=function(e){if(oe(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var Gt=ge;function ge(e,t){var n,a,s,i,u,c=this,v=(this._middlewares={},this.verno=0,ge.dependencies),v=(this._options=t=H({addons:ge.addons,autoOpen:!0,indexedDB:v.indexedDB,IDBKeyRange:v.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),k=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ke,dbReadyPromise:null,cancelOpen:ke,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=(k.dbReadyPromise=new Y(function(m){k.dbReadyResolve=m}),k.openCanceller=new Y(function(m,x){k.cancelOpen=x}),this._state=k,this.name=e,this.on=f(this,"populate","blocked","versionchange","close",{ready:[Nn,ke]}),this.once=function(m,x){var C=function(){for(var b=[],g=0;g<arguments.length;g++)b[g]=arguments[g];c.on(m).unsubscribe(C),x.apply(c,b)};return c.on(m,C)},this.on.ready.subscribe=sa(this.on.ready.subscribe,function(m){return function(x,C){ge.vip(function(){var b,g=c._state;g.openComplete?(g.dbOpenError||Y.resolve().then(x),C&&m(x)):g.onReadyBeingFired?(g.onReadyBeingFired.push(x),C&&m(x)):(m(x),b=c,C||m(function S(){b.on.ready.unsubscribe(x),b.on.ready.unsubscribe(S)}))})}}),this.Collection=(n=this,d(Q.prototype,function(S,g){this.db=n;var C=er,b=null;if(g)try{C=g()}catch($){b=$}var g=S._ctx,S=g.table,B=S.hook.reading.fire;this._ctx={table:S,index:g.index,isPrimKey:!g.index||S.schema.primKey.keyPath&&g.index===S.schema.primKey.name,range:C,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:b,or:g.or,valueMapper:B!==In?B:null}})),this.Table=(a=this,d(o.prototype,function(m,x,C){this.db=a,this._tx=C,this.name=m,this.schema=x,this.hook=a._allTables[m]?a._allTables[m].hook:f(null,{creating:[Ha,ke],reading:[yr,In],updating:[xr,ke],deleting:[Cr,ke]})})),this.Transaction=(s=this,d(St.prototype,function(m,x,C,b,g){var S=this;m!=="readonly"&&x.forEach(function(B){B=(B=C[B])==null?void 0:B.yProps,B&&(x=x.concat(B.map(function($){return $.updatesTable})))}),this.db=s,this.mode=m,this.storeNames=x,this.schema=C,this.chromeTransactionDurability=b,this.idbtrans=null,this.on=f(this,"complete","error","abort"),this.parent=g||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Y(function(B,$){S._resolve=B,S._reject=$}),this._completion.then(function(){S.active=!1,S.on.complete.fire()},function(B){var $=S.active;return S.active=!1,S.on.error.fire(B),S.parent?S.parent._reject(B):$&&S.idbtrans&&S.idbtrans.abort(),Re(B)})})),this.Version=(i=this,d(P.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(u=this,d(xt.prototype,function(m,x,C){if(this.db=u,this._ctx={table:m,index:x===":id"?null:x,or:C},this._cmp=this._ascending=ce,this._descending=function(b,g){return ce(g,b)},this._max=function(b,g){return 0<ce(b,g)?b:g},this._min=function(b,g){return ce(b,g)<0?b:g},this._IDBKeyRange=u._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=_e(t.IDBKeyRange),this._createTransaction=function(m,x,C,b){return new c.Transaction(m,x,C,c._options.chromeTransactionDurability,b)},this._fireOnBlocked=function(m){c.on("blocked").fire(m),mn.filter(function(x){return x.name===c.name&&x!==c&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(m)})},this.use(ir),this.use(dr),this.use(Er),this.use(Sr),this.use(sr),new Proxy(this,{get:function(m,x,C){var b;return x==="_vip"||(x==="table"?function(g){return xa(c.table(g),y)}:(b=Reflect.get(m,x,C))instanceof o?xa(b,y):x==="tables"?b.map(function(g){return xa(g,y)}):x==="_createTransaction"?function(){return xa(b.apply(this,arguments),y)}:b)}}));this.vip=y,v.forEach(function(m){return m(c)})}var yn,Ve=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",_r=(Jt.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Jt.prototype[Ve]=function(){return this},Jt);function Jt(e){this._subscribe=e}try{yn={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{yn={indexedDB:null,IDBKeyRange:null}}function Tn(e){var t,n=!1,a=new _r(function(s){var i=kn(e),u,c=!1,v={},k={},y={get closed(){return c},unsubscribe:function(){c||(c=!0,u&&u.abort(),m&&le.storagemutated.unsubscribe(C))}},m=(s.start&&s.start(y),!1),x=function(){return Oa(b)},C=function(g){Xn(v,g),ma(k,v)&&x()},b=function(){var g,S,B;!c&&yn.indexedDB&&(v={},g={},u&&u.abort(),u=new AbortController,B=($=>{var T=hn();try{i&&Bn();var O=nn(e,$);return O=i?O.finally(an):O}finally{T&&Ct()}})(S={subscr:g,signal:u.signal,requery:x,querier:e,trans:null}),Promise.resolve(B).then(function($){n=!0,t=$,c||S.signal.aborted||(v={},(T=>{for(var O in T)if(oe(T,O))return;return 1})(k=g)||m||(le(at,C),m=!0),Oa(function(){return!c&&s.next&&s.next($)}))},function($){n=!1,["DatabaseClosedError","AbortError"].includes($?.name)||c||Oa(function(){c||s.error&&s.error($)})}))};return setTimeout(x,0),y});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var Cn=Gt;function Ya(e){var t=Ht;try{Ht=!0,le.storagemutated.fire(e),Qn(e,!0)}finally{Ht=t}}gt(Cn,H(H({},jt),{delete:function(e){return new Cn(e,{addons:[]}).delete()},exists:function(e){return new Cn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Cn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(bn(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==Vn})}):ue(n,t).toCollection().primaryKeys()).then(e)}catch{return Re(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){ye(this,e)}},ignoreTransaction:function(e){return J.trans?pn(J.transless,e):e()},vip:pa,async:function(e){return function(){try{var t=qa(e.apply(this,arguments));return t&&typeof t.then=="function"?t:Y.resolve(t)}catch(n){return Re(n)}}},spawn:function(e,t,n){try{var a=qa(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:Y.resolve(a)}catch(s){return Re(s)}},currentTransaction:{get:function(){return J.trans||null}},waitFor:function(e,t){return e=Y.resolve(typeof e=="function"?Cn.ignoreTransaction(e):e).timeout(t||6e4),J.trans?J.trans.waitFor(e):e},Promise:Y,debug:{get:function(){return bt},set:function(e){Ta(e)}},derive:Zt,extend:ye,props:gt,override:sa,Events:f,on:le,liveQuery:Tn,extendObservabilitySet:Xn,getByKeyPath:Kt,setByKeyPath:ft,delByKeyPath:function(e,t){typeof t=="string"?ft(e,t,void 0):"length"in t&&[].map.call(t,function(n){ft(e,n,void 0)})},shallowClone:Ea,deepClone:ht,getObjectDiff:Ka,cmp:ce,asap:ia,minKey:-1/0,addons:[],connections:mn,errnames:oa,dependencies:yn,cache:on,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),Cn.maxKey=_e(Cn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(le(at,function(e){Ht||(e=new CustomEvent(lt,{detail:e}),Ht=!0,dispatchEvent(e),Ht=!1)}),addEventListener(lt,function(e){e=e.detail,Ht||Ya(e)}));var ln,Ht=!1,za=function(){};return typeof BroadcastChannel<"u"&&((za=function(){(ln=new BroadcastChannel(lt)).onmessage=function(e){return e.data&&Ya(e.data)}})(),typeof ln.unref=="function"&&ln.unref(),le(at,function(e){Ht||ln.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Gt.disableBfCache&&e.persisted){bt&&console.debug("Dexie: handling persisted pagehide"),ln?.close();for(var t=0,n=mn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Gt.disableBfCache&&e.persisted&&(bt&&console.debug("Dexie: handling persisted pageshow"),za(),Ya({all:new rt(-1/0,[[]])}))})),Y.rejectionMapper=function(e,t){return!e||e instanceof un||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Ja[e.name]?e:(t=new Ja[e.name](t||e.message,e),"stack"in e&&dt(t,"stack",{get:function(){return this.inner.stack}}),t)},Ta(bt),H(Gt,Object.freeze({__proto__:null,Dexie:Gt,Entity:tr,PropModification:Un,RangeSet:rt,add:function(e){return new Un({add:e})},cmp:ce,default:Gt,liveQuery:Tn,mergeRanges:Hn,rangesOverlap:Ot,remove:function(e){return new Un({remove:e})},replacePrefix:function(e,t){return new Un({replacePrefix:[e,t]})}}),{default:Gt}),Gt})})(hr)),hr.exports}var Ts=Ps();const Pr=_s(Ts),is=Symbol.for("Dexie"),pr=globalThis[is]||(globalThis[is]=Pr);if(Pr.semVer!==pr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Pr.semVer} and ${pr.semVer}`);const{liveQuery:zs,mergeRanges:Us,rangesOverlap:Ws,RangeSet:Gs,cmp:Js,Entity:Hs,PropModification:Xs,replacePrefix:Qs,add:Zs,remove:ei,DexieYProvider:ti}=pr,Ye=new pr("haushaltsbuch-db");Ye.version(1).stores({years:"year",fixedTemplateState:"id"});Ye.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Ye.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const $a="singleton";function vr(){return new Date().toISOString()}async function na(){return Ye.years.orderBy("year").toArray()}async function As(_){return Ye.years.get(_)}async function ta(_){await Ye.years.put(_)}async function Tr(){const _=await Ye.fixedTemplateState.get($a);if(!_){const h={id:$a,templates:[],version:vr(),updatedAt:new Date().toISOString()};return await Ye.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:_.templates,version:_.version}}async function Ar(_){const h=vr();return await Ye.fixedTemplateState.put({id:$a,templates:_,version:h,updatedAt:new Date().toISOString()}),h}async function Or(){const _=await Ye.annualVariableFixedTemplateState.get($a);if(!_){const h={id:$a,templates:[],version:vr(),updatedAt:new Date().toISOString()};return await Ye.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:_.templates,version:_.version}}async function Fr(_){const h=vr();return await Ye.annualVariableFixedTemplateState.put({id:$a,templates:_,version:h,updatedAt:new Date().toISOString()}),h}async function Os(_){await Ye.auditLog.put(_)}async function Dr(){return Ye.auditLog.orderBy("timestampIso").toArray()}async function Fs(_){await Ye.auditLog.clear(),_.length!==0&&await Ye.auditLog.bulkPut(_)}async function Ds(){const _=await na(),[h,De,H]=await Promise.all([Tr(),Or(),Dr()]);return{exportedAt:new Date().toISOString(),years:_,fixedTemplates:h.templates,annualVariableFixedTemplates:De.templates,auditLogEntries:H}}async function Is(_){await Ye.transaction("rw",[Ye.years,Ye.fixedTemplateState,Ye.annualVariableFixedTemplateState,Ye.auditLog],async()=>{await Ye.years.clear(),await Ye.years.bulkPut(_.years),await Ar(_.fixedTemplates),await Fr(_.annualVariableFixedTemplates??[]),await Fs(_.auditLogEntries??[])})}function Ne(_){const h=_.replace(",",".").trim();if(!h)return 0;const De=Number.parseFloat(h);return Number.isNaN(De)?0:Math.round(De*100)}const Ns=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function w(_){return Ns.format(_/100)}function mt(_){return(_/100).toFixed(2)}function Pe(_){return new Date(2026,_-1,1).toLocaleDateString("de-DE",{month:"long"})}const cs=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function os(_){return cs.includes(_)}function Ls(_){switch(_){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const ls=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function qs(_){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},De="habu-theme",H="habu-backup-dirty",be="habu-unexported-change-log",se="habu-last-backup-filename",we="habu-recurring-budget-defaults";let ie=null,ye=null,ot=null,ze=null,oe=!1,gt=!1;const ct=new WeakMap;function dt(){const o=_.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),p=l.getPropertyValue("--table-stripe").trim(),M=l.getPropertyValue("--table-border").trim(),F=l.getPropertyValue("--budget-under").trim(),I=l.getPropertyValue("--danger-2").trim(),L=96,X=250,W=Q=>1-Math.pow(1-Math.max(0,Math.min(1,Q)),3);o.forEach(Q=>{Q.dataset.hoverBound!=="1"&&(Q.dataset.hoverBound="1",Q.addEventListener("mouseenter",()=>{Q.dataset.hovering="1",dt()}),Q.addEventListener("mouseleave",()=>{delete Q.dataset.hovering,delete Q.dataset.hoverX,dt()}),Q.addEventListener("mousemove",Ee=>{const me=Q.getBoundingClientRect(),Me=Math.round(Ee.clientX-me.left);Q.dataset.hoverX=String(Me),dt()}));const R=Number.parseInt(Q.dataset.budgetCents??"0",10),ve=Number.parseInt(Q.dataset.actualCents??"0",10),Ae=Q.dataset.label??"Kategorie",He=Q.dataset.hovering==="1",ne=`${Ae}|${R}|${ve}`,Oe=Q.dataset.lastRenderSignature!==ne;Q.dataset.lastRenderSignature=ne;const $e=Math.max(120,Math.floor(Q.clientWidth||120)),Se=window.devicePixelRatio||1,nt=Math.floor($e*Se),xt=Math.floor(L*Se);(Q.width!==nt||Q.height!==xt)&&(Q.width=nt,Q.height=xt);const D=Q.getContext("2d");if(!D)return;const Fe=Math.max(1,R,ve),vt=Math.min(1,Math.max(0,R/Fe)),at=Math.min(1,Math.max(0,ve/Fe)),lt=R-ve,le=R>0?ve/R*100:ve>0?100:0,St=8,de=St,Qe=34,Ue=$e-St*2,Le=22,_e=Number.parseInt(Q.dataset.hoverX??"-1",10),Ze=(Ee,me,Me,qe,st)=>{D.beginPath(),D.moveTo(Ee+st,me),D.lineTo(Ee+Me-st,me),D.quadraticCurveTo(Ee+Me,me,Ee+Me,me+st),D.lineTo(Ee+Me,me+qe-st),D.quadraticCurveTo(Ee+Me,me+qe,Ee+Me-st,me+qe),D.lineTo(Ee+st,me+qe),D.quadraticCurveTo(Ee,me+qe,Ee,me+qe-st),D.lineTo(Ee,me+st),D.quadraticCurveTo(Ee,me,Ee+st,me),D.closePath()},Ut=Ee=>{D.setTransform(1,0,0,1,0,0),D.clearRect(0,0,Q.width,Q.height),D.scale(Se,Se),Ze(de,Qe,Ue,Le,8),D.fillStyle=p,D.fill(),D.strokeStyle=M,D.lineWidth=1,D.stroke();const me=[.6,.25,.15],Me=[.1,.16,.24];let qe=0;me.forEach((Lt,it)=>{const Bt=Ue*Lt;D.save(),D.globalAlpha=Me[it]??.1,D.fillStyle=d,D.fillRect(de+qe,Qe,Bt,Le),D.restore(),qe+=Bt});const st=R>0&&ve>R?I:F,Mn=Ue*at*Ee;Ze(de,Qe+3,Mn,Le-6,6),D.fillStyle=st,D.fill(),He&&(D.save(),D.strokeStyle=st,D.lineWidth=1.5,D.globalAlpha=.8,Ze(de-1,Qe+2,Math.max(2,Mn+2),Le-4,7),D.stroke(),D.restore());const Et=de+Ue*vt;D.strokeStyle=f,D.lineWidth=He?3:2,D.beginPath(),D.moveTo(Et,Qe-3),D.lineTo(Et,Qe+Le+3),D.stroke(),He&&_e>=de&&_e<=de+Ue&&(D.save(),D.strokeStyle=f,D.globalAlpha=.35,D.lineWidth=1,D.beginPath(),D.moveTo(_e,Qe-8),D.lineTo(_e,Qe+Le+8),D.stroke(),D.restore()),D.fillStyle=f,D.font="600 12px system-ui, -apple-system, sans-serif",D.textAlign="left",D.textBaseline="top",D.fillText(Ae,de,10);const Nt=le*Ee;if(D.fillStyle=le>100?I:le<100?F:d,D.textAlign="right",D.fillText(`${Nt.toFixed(0)}%`,de+Ue,10),D.fillStyle=d,D.font="500 11px system-ui, -apple-system, sans-serif",D.textAlign="left",D.textBaseline="top",D.fillText(`Ist ${w(ve)} · Ziel ${w(R)} · Δ ${lt>=0?"+":""}${w(lt)}`,de,64),He){const Lt=`Nutzung ${le.toFixed(1)}%`;D.font="600 11px system-ui, -apple-system, sans-serif";const it=8,Bt=5,xe=22,P=D.measureText(Lt).width+it*2,q=Number.isFinite(_e)?_e-P/2:de+Ue-P,ue=Math.min(de+Ue-P,Math.max(de,q)),bn=Qe-xe-8;D.save(),D.fillStyle=f,D.globalAlpha=.92,Ze(ue,bn,P,xe,6),D.fill(),D.restore(),D.fillStyle=p,D.textAlign="left",D.textBaseline="top",D.fillText(Lt,ue+it,bn+Bt)}},sn=ct.get(Q);if(sn&&window.cancelAnimationFrame(sn),!Oe){Ut(1);return}const ut=performance.now(),At=Ee=>{const me=Ee-ut,Me=Math.min(1,me/X);if(Ut(W(Me)),Me<1){const qe=window.requestAnimationFrame(At);ct.set(Q,qe);return}ct.delete(Q)},Wn=window.requestAnimationFrame(At);ct.set(Q,Wn)})}function Zt(){_.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),p=l.querySelector("[data-year-trend-active-net]"),M=l.querySelector("[data-year-trend-active-income]"),F=l.querySelector("[data-year-trend-active-expense]"),I=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!p||!M||!F||!I)return;const X=(R,ve)=>{R.classList.remove("danger","budget-under");const Ae=ve<0?"danger":ve>0?"budget-under":"";Ae&&R.classList.add(Ae)},W=R=>{const ve=R.dataset.monthLabel??"-",Ae=Number.parseInt(R.dataset.netCents??"0",10),He=Number.parseInt(R.dataset.actualNetCents??"0",10),ne=Number.parseInt(R.dataset.incomeCents??"0",10),Oe=Number.parseInt(R.dataset.expenseCents??"0",10),$e=Number.parseInt(R.dataset.deltaCents??"0",10);d.textContent=ve,p.textContent=w(Ae),M.textContent=w(ne),F.textContent=w(Oe),I.textContent=`${$e>=0?"+":""}${w($e)}`,X(p,Ae),X(I,$e),f.forEach(Se=>{const nt=Se===R;Se.classList.toggle("is-active",nt),Se.setAttribute("aria-pressed",String(nt))}),L&&(L.textContent=`${ve}: Kalkulierter Saldo ${w(Ae)}, Ist-Saldo ${w(He)}, Einkommen ${w(ne)}, Ausgaben ${w(Oe)}`)};f.forEach(R=>{const ve=()=>{W(R)};R.addEventListener("mouseenter",ve),R.addEventListener("focus",ve),R.addEventListener("click",ve)});const Q=f.find(R=>R.dataset.pointDefault==="1")??f[f.length-1];Q&&W(Q)})}function aa(o){if(o==="dashboard"){const l=h.years.slice().sort((d,p)=>p.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ae()}function Sa(){h.topModal&&(h.topModal=null,ae())}function ra(){h.showUnexportedChangeLogModal=!0,ae()}function sa(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ae())}function On(){h.showPersistentAuditLogModal=!0,ae()}function ia(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ae())}function Kt(){oe||(oe=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),sa();return}if(h.showPersistentAuditLogModal){o.preventDefault(),ia();return}h.topModal&&(o.preventDefault(),Sa())}}))}function ft(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ea(){const o=_.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",ft())}function mr(){if(gt)return;gt=!0;const o=()=>{Ea(),dt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Ba(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),ie=l,l}function Ua(){if(ye&&document.body.contains(ye))return ye;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return ye=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),ye=l,l}function Fn(){if(ze&&document.body.contains(ze))return ze;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return ze=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),ze=l,l}function ht(){if(!ye){ot=null;return}ye.innerHTML="",ot=null}function Dn(){ze&&(ze.innerHTML="")}function _a(o,l,f){const d=new Date,p=d.getFullYear(),M=d.getMonth()+1,F=d.getDate(),I=new Date(o,l,0).getDate();if(o<p||o===p&&l<M)return{occurrences:0,remainingDays:0};const L=o===p&&l===M?Math.min(F,I):1,X=Math.max(0,I-L+1);let W=0;for(let Q=L;Q<=I;Q+=1)new Date(o,l-1,Q).getDay()===f&&(W+=1);return{occurrences:W,remainingDays:X}}async function Ma(o,l){const f=je();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await Je(`Wocheneinkauf geplant: ${ls.find(d=>d.value===o)?.label??"Wochentag"} mit ${w(f.weeklyShoppingEstimateCents)} €`),ae())}function gr(){const o=je(),l=Rt();if(!o||!l)return;const f=Fn();Dn();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,p=o.weeklyShoppingEstimateCents??0,M=l.year,F=o.month,I=Ln(M,F),L=I?tt(I):{foodCents:0},X=I?I.foodBudgetCents??0:0,W=L.foodCents,Q=X-W;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${ls.map(le=>`<option value="${le.value}" ${le.value===d?"selected":""}>${le.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${mt(p)}" />
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
    `;const R=f.querySelector(".weekly-shopping-modal-backdrop"),ve=f.querySelector("#weekly-shopping-weekday"),Ae=f.querySelector("#weekly-shopping-estimate"),He=f.querySelector("#weekly-shopping-occurrences"),ne=f.querySelector("#weekly-shopping-total"),Oe=f.querySelector("#weekly-shopping-rest-before"),$e=f.querySelector("#weekly-shopping-rest-after"),Se=f.querySelector("#weekly-shopping-days-left"),nt=f.querySelector("#weekly-shopping-per-day"),xt=f.querySelector("#weekly-shopping-cancel"),D=f.querySelector("#weekly-shopping-save");function Fe(){const le=Number.parseInt(ve?.value??"1",10);return Number.isInteger(le)&&le>=0&&le<=6?le:1}function vt(){return Math.max(0,Ne(Ae?.value??"0"))}function at(){const le=Fe(),St=vt(),{occurrences:de,remainingDays:Qe}=_a(M,F,le),Ue=de*St,Le=Q-Ue,_e=Qe>0?Math.trunc(Le/Qe):0;He&&(He.textContent=`${de}`),ne&&(ne.textContent=`${w(Ue)} €`),Oe&&(Oe.textContent=`${w(Q)} €`),$e&&($e.textContent=`${w(Le)} €`,$e.className=Le<0?"danger":Le>0?"budget-under":""),Se&&(Se.textContent=`${Qe}`),nt&&(nt.textContent=`${w(_e)} €`,nt.className=_e<0?"danger":_e>0?"budget-under":"")}async function lt(){await Ma(Fe(),vt()),Dn()}xt?.addEventListener("click",()=>{Dn()}),D?.addEventListener("click",async()=>{await lt()}),ve?.addEventListener("change",()=>{at()}),Ae?.addEventListener("input",()=>{at()}),Ae?.addEventListener("keydown",async le=>{if(le.key==="Escape"){le.preventDefault(),Dn();return}le.key==="Enter"&&(le.preventDefault(),await lt())}),R?.addEventListener("click",le=>{le.target===R&&Dn()}),window.setTimeout(()=>{Ae?.focus(),Ae?.select(),at()},0)}function en(o,l){let f=o;const d=l.min;if(d){const M=Number.parseFloat(d);if(!Number.isNaN(M)){const F=Math.round(M*100);f=Math.max(f,F)}}const p=l.max;if(p){const M=Number.parseFloat(p);if(!Number.isNaN(M)){const F=Math.round(M*100);f=Math.min(f,F)}}return f}function et(o){if(o.disabled)return;const l=Ua();ht(),ot=o;const f=Ne(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
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
    `;const p=l.querySelector(".amount-modal-backdrop"),M=l.querySelector("#amount-modal-delta"),F=l.querySelector("#amount-modal-next-delta"),I=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),X=l.querySelector("#amount-modal-overwrite"),W=l.querySelector("#amount-modal-apply");function Q(){const ne=Ne(M?.value??"0");return en(f+ne,o)}function R(){const ne=Ne(M?.value??"0");return en(ne,o)}function ve(){F&&(F.textContent=`${w(Q())} €`),I&&(I.textContent=`${w(R())} €`)}function Ae(){const ne=ot;if(!ne){ht();return}const Oe=Q();ht(),ne.value=mt(Oe),ne.dispatchEvent(new Event("change",{bubbles:!0}))}function He(){const ne=ot;if(!ne){ht();return}const Oe=R();ht(),ne.value=mt(Oe),ne.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{ht()}),X?.addEventListener("click",()=>{He()}),W?.addEventListener("click",()=>{Ae()}),M?.addEventListener("input",()=>{ve()}),M?.addEventListener("keydown",ne=>{if(ne.key==="Escape"){ne.preventDefault(),ht();return}ne.key==="Enter"&&(ne.preventDefault(),Ae())}),p?.addEventListener("click",ne=>{ne.target===p&&ht()}),window.setTimeout(()=>{M?.focus(),M?.select(),ve()},0)}function he(o,l="success"){const f=Ba(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const p=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},p)}function kn(){return new Date().getMonth()+1}function jt(){return new Date().getFullYear()}function Wa(o){const l=jt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function un(){return new Date().toISOString().slice(0,10)}function Ga(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function Dt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function $n(){const o=localStorage.getItem(De);return o&&os(o)?o:"light"}function oa(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(De,o)}function br(){return localStorage.getItem(H)==="1"}function ee(o){localStorage.setItem(H,o?"1":"0")}function Ja(){const o=localStorage.getItem(be);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function ke(o){localStorage.setItem(be,JSON.stringify(o.slice(-200)))}function In(){const o=localStorage.getItem(se);if(!o)return null;const l=o.trim();return l||null}function yr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(we);if(!l)return o;try{const f=JSON.parse(l),d=p=>typeof p=="number"&&Number.isFinite(p)?p:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function cn(o){localStorage.setItem(we,JSON.stringify(o))}function Ha(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function Cr(o){const l=o.trim();l&&localStorage.setItem(se,l)}async function xr(){Ba(),oa($n()),h.hasUnexportedChanges=br(),h.unexportedChangeLog=Ja(),h.persistentAuditLog=await Dr(),h.lastBackupFileName=In(),h.recurringBudgetDefaults=yr(),Kt(),mr();const[o,l,f]=await Promise.all([na(),Tr(),Or()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Pa(h.years),hn(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Ta(h.years),o.length>0&&(h.selectedYear=Wa(o),h.selectedMonth=kn()),ae()}function Pa(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const p=Number(d.weeklyShoppingWeekday);Number.isInteger(p)&&p>=0&&p<=6?d.weeklyShoppingWeekday=p:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(p=>{const M=l(p.incomeSource);if(!M){const{incomeSource:F,...I}=p;return I}return{...p,incomeSource:M}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((p,M)=>p+M.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((p,M)=>p+M.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Nn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function bt(o){return o==="fresh"||o==="salary"||!o}async function Ta(o){for(const l of o)await ta(l)}function Rt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function je(){const o=Rt();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function Ln(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function tt(o){const l=o.days.reduce((I,L)=>I+L.foodCents,0),f=o.days.reduce((I,L)=>I+L.goingOutCents,0),d=o.fixedCosts.reduce((I,L)=>I+L.actualCents,0),p=o.variableCosts.reduce((I,L)=>I+L.amountCents,0)+o.variablePositions.reduce((I,L)=>I+L.actualCents,0),M=o.miscCosts.reduce((I,L)=>I+L.amountCents,0),F=l+f+d+p+M;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:M,totalCents:F}}function It(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((F,I)=>F+I.plannedCents,0),p=o.variablePositions.reduce((F,I)=>F+I.budgetCents,0),M=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??p)+M}function Sn(o){return o.months.reduce((l,f)=>{const d=tt(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function qn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:tt(l)}))}function Kn(o){const l=o.months.reduce((F,I)=>F+(I.foodBudgetCents??0),0),f=o.months.reduce((F,I)=>F+(I.goingOutBudgetCents??0),0),d=o.months.reduce((F,I)=>F+(I.fixedBudgetCents??I.fixedCosts.reduce((L,X)=>L+X.plannedCents,0)),0),p=o.months.reduce((F,I)=>F+(I.variableBudgetCents??I.variablePositions.reduce((L,X)=>L+X.budgetCents,0)),0),M=o.months.reduce((F,I)=>F+(I.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:M,totalCents:l+f+d+p+M}}function En(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,p)=>d+(bt(p.incomeSource)?p.amountCents:0),0),0)}function Vt(o,l){const f=o.months.slice().sort((d,p)=>d.month-p.month)[0];return f?l.get(pe(o.year,f.month))?.carriedFromPreviousCents??0:0}function la(){const o=h.years.slice().sort((d,p)=>d.year-p.year).flatMap(d=>d.months.slice().sort((p,M)=>p.month-M.month).map(p=>({year:d.year,month:p}))),l=new Map;let f=0;return o.forEach(({year:d,month:p},M)=>{const F=p.carryoverOverrideCents,I=typeof F=="number",L=I?F:f,X=M>0||I,W=p.incomes.reduce((Ae,He)=>Ae+(bt(He.incomeSource)?He.amountCents:0),0),Q=It(p),R=W+L,ve=R-Q;l.set(pe(d,p.month),{hasPreviousMonth:X,carriedFromPreviousCents:L,recordedIncomeCents:W,effectiveIncomeCents:R,plannedBudgetCents:Q,netCents:ve}),f=ve}),l}function pt(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function tn(o){return`${o>0?"+":""}${w(o)}`}function J(o,l){const f=o-l,d=pt(l,o);return`${w(o)} <span class="eval-diff ${d}">(Δ ${tn(f)})</span>`}function Yt(o,l){const f=o!==null,d=f?o-l:null,p=f?pt(l,o):"";return`<div class="column-overview">
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
    </div>`}async function dn(o){if(await As(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=ns(o,h.fixedTemplates,h.fixedTemplateVersion);Ha(f),Aa(f),await ta(f),h.years=await na(),fn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=kn(),he(`Jahr ${o} wurde angelegt.`),ae()}function fn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,p={id:Tt("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,p].slice(-200),ke(h.unexportedChangeLog);const M={id:Tt("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,M].slice().sort((F,I)=>F.timestampIso.localeCompare(I.timestampIso)),Os(M).catch(F=>{console.error("Audit-Log konnte nicht gespeichert werden",F),he("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Y(o){const l=o.trim();l&&(h.lastBackupFileName=l,Cr(l))}function ua(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],ke([]),h.showUnexportedChangeLogModal=!1,Y(o)}async function Je(o){const l=Rt();l&&(await ta(l),h.years=await na(),fn(o))}async function yt(o){for(const l of h.years)await ta(l);h.years=await na(),fn(o)}function pe(o,l){return o*100+l}function jn(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Xa(o,l){const f=jn(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(M=>M.month===f.month);!d||d.variablePositions.some(M=>M.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Tt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],$t(d))}function Aa(o){h.annualVariableFixedTemplates.forEach(l=>{Xa(l,o)})}function hn(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const p=d.variablePositions.some(F=>typeof F.autoAnnualTemplateId=="string"),M=d.fixedCosts.some(F=>typeof F.autoAnnualTemplateId=="string");p&&(d.variablePositions=d.variablePositions.filter(F=>F.autoAnnualTemplateId?l.has(F.autoAnnualTemplateId):!0),$t(d)),M&&(d.fixedCosts=d.fixedCosts.filter(F=>!F.autoAnnualTemplateId),Ct(d))}),Aa(f)})}function Ct(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function $t(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function ca(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function Te(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",ca());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Xe(o,l){const f=pe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{if(pe(d.year,p.month)<f)return;p.fixedCosts.some(F=>F.templateId===o.id)||(p.fixedCosts.push({id:Tt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Ct(p))})})}function wr(o,l,f){const d=pe(f.year,f.month);h.years.forEach(p=>{p.months.forEach(M=>{pe(p.year,M.month)<d||(M.fixedCosts=M.fixedCosts.map(F=>F.templateId!==l.id?F:{...F,name:l.name,plannedCents:l.plannedCents,actualCents:F.actualCents===o.plannedCents?l.plannedCents:F.actualCents}),Ct(M))})})}function da(o,l){const f=pe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{pe(d.year,p.month)<f||(p.fixedCosts=p.fixedCosts.filter(M=>M.templateId!==o),Ct(p))})})}async function fa(o,l){const f=o.trim();if(!f)return;const d=Te();if(!d)return;const p=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const M=h.fixedTemplates.find(I=>I.id===h.editingFixedTemplateId);if(!M)return;const F={...M,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(I=>I.id===h.editingFixedTemplateId?F:I),wr(M,F,d)}else{const M={id:Tt("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,M],Xe(M,d)}h.fixedTemplateVersion=await Ar(h.fixedTemplates),h.editingFixedTemplateId=null,await yt(p?`Fixkosten-Vorlage aktualisiert: ${f} (${w(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${w(l)} €)`),he(p?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function ha(o){h.editingFixedTemplateId=o,ae()}function kr(){h.editingFixedTemplateId=null,ae()}async function nn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=Te();if(!f)return;const d=h.fixedTemplates.find(p=>p.id===o);h.fixedTemplates=h.fixedTemplates.filter(p=>p.id!==o),da(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Ar(h.fixedTemplates),await yt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),he("Fixkosten-Vorlage wurde gelöscht."),ae()}async function Bn(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const p=jn(l);if(!p){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const M={id:Tt("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,M],h.years.forEach(F=>{Xa(M,F)}),h.annualVariableFixedTemplateVersion=await Fr(h.annualVariableFixedTemplates),await yt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${w(f)} €, jährlich in ${Pe(p.month)})`),he("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function an(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(p=>{p.variablePositions=p.variablePositions.filter(M=>M.autoAnnualTemplateId!==o),$t(p),p.fixedCosts=p.fixedCosts.filter(M=>M.autoAnnualTemplateId!==o),Ct(p)})}),h.annualVariableFixedTemplateVersion=await Fr(h.annualVariableFixedTemplates),await yt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),he("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function Rn(o,l,f){const d=je();d&&(d.days=d.days.map(p=>p.isoDate===o?{...p,[l]:f}:p),await Je(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${w(f)} €`),ae())}async function $r(o,l){const f=je();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,actualCents:l}:p),await Je(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function rn(o,l){const f=je();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,plannedCents:l}:p),Ct(f),await Je(`Fixkosten-Budget angepasst: ${d.name} auf ${w(l)} €`),ae())}async function Qa(o,l){const f=je();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const p={id:Tt("fixed"),templateId:Tt("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[p,...f.fixedCosts],Ct(f),await Je(`Fixkosten-Position hinzugefügt: ${d} (${w(l)} €)`),he("Fixkosten-Position wurde hinzugefügt."),ae()}async function pn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=je();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(p=>p.id!==o),Ct(f),await Je(`Fixkosten-Position gelöscht: ${d.name}`),he("Fixkosten-Position wurde gelöscht."),ae())}async function Za(o){await _n("fixedBudgetCents",o,"Fixkosten")}async function Oa(o){await _n("foodBudgetCents",o,"Essen")}async function Re(o){await _n("goingOutBudgetCents",o,"Ausgehen")}async function vn(o){await _n("miscBudgetCents",o,"Sonstiges")}async function zt(o){await _n("variableBudgetCents",o,"Variable Kosten")}async function _n(o,l,f){const d=je(),p=h.selectedYear;if(!d||!p||d[o]===l)return;if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const F=pe(p,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(L=>{pe(I.year,L.month)<=F||(L[o]=l)})}),h.recurringBudgetDefaults[o]=l,cn(h.recurringBudgetDefaults),await yt(`Budget "${f}" auf ${w(l)} € gesetzt (inkl. zukünftiger Monate)`),he(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ae();return}await Je(`Budget "${f}" auf ${w(l)} € gesetzt`),ae()}async function mn(o){const l=je();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Je(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${w(o)} € gesetzt`),ae())}async function Vn(o,l,f){const d=je(),p=h.selectedYear;if(!d||!p)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Tt("varpos"),name:M,budgetCents:l,actualCents:0},...d.variablePositions],$t(d),f){const F=pe(p,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(L=>{pe(I.year,L.month)<=F||(L.variablePositions=[{id:Tt("varpos"),name:M,budgetCents:l,actualCents:0},...L.variablePositions],$t(L))})}),await yt(`Variable Position hinzugefügt: ${M} (${w(l)} €) für zukünftige Monate`),he("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Je(`Variable Position hinzugefügt: ${M} (${w(l)} €)`),he("Variable Position wurde hinzugefügt."),ae()}async function Fa(o,l){const f=je();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,actualCents:l}:p),await Je(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function Da(o,l){const f=je();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,budgetCents:l}:p),$t(f),await Je(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function gn(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=je(),d=h.selectedYear;if(!f||!d)return;const p=f.variablePositions.find(L=>L.id===o);if(!p)return;const M=pe(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>pe(L.year,X.month)>M&&X.variablePositions.some(W=>W.name===p.name&&W.budgetCents===p.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),$t(f),I){h.years.forEach(L=>{L.months.forEach(X=>{pe(L.year,X.month)<=M||(X.variablePositions=X.variablePositions.filter(W=>!(W.name===p.name&&W.budgetCents===p.budgetCents)),$t(X))})}),await yt(`Variable Position gelöscht: ${p.name} (inkl. zukünftiger Monate)`),he("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Je(`Variable Position gelöscht: ${p.name}`),he("Variable Position wurde gelöscht."),ae()}async function er(o){const l=je(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(W=>W.id===o);if(!d)return;const p={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let M=h.years.find(W=>W.year===p.year);if(!M){const W=ns(p.year,h.fixedTemplates,h.fixedTemplateVersion);Ha(W),Aa(W),await ta(W),h.years=[...h.years,W].sort((Q,R)=>Q.year-R.year),M=W}const F=M.months.find(W=>W.month===p.month);if(!F)return;const I=F.variablePositions.some(W=>W.id===d.id||W.name===d.name&&W.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(W=>W.id!==o),$t(l),!I){const Q=F.variablePositions.some(R=>R.id===d.id)?{...d,id:Tt("varpos")}:d;F.variablePositions=[Q,...F.variablePositions],$t(F)}const L=`${Pe(p.month)} ${p.year}`,X=`Variable Position verschoben: ${d.name} → ${L}`;if(p.year===f)await Je(X);else{const W=Rt();if(!W)return;await ta(W),await ta(M),h.years=await na(),Pa(h.years),fn(X)}he(I?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),ae()}async function Yn(o,l,f){const d=je(),p=h.selectedYear;if(!d||!p)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const F=as(M,l);if(d.miscCosts=[F,...d.miscCosts],f){const I=pe(p,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(X=>{pe(L.year,X.month)<=I||(X.miscCosts=[as(M,l),...X.miscCosts])})}),await yt(`Sonstige Position hinzugefügt: ${M} (${w(l)} €) für zukünftige Monate`),he("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Je(`Sonstige Position hinzugefügt: ${M} (${w(l)} €)`),he("Sonstige Position wurde hinzugefügt."),ae()}async function tr(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=je(),d=h.selectedYear;if(!f||!d)return;const p=f.miscCosts.find(L=>L.id===o);if(!p)return;const M=pe(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>pe(L.year,X.month)>M&&X.miscCosts.some(W=>W.description===p.description&&W.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),I){h.years.forEach(L=>{L.months.forEach(X=>{pe(L.year,X.month)<=M||(X.miscCosts=X.miscCosts.filter(W=>!(W.description===p.description&&W.amountCents===p.amountCents)))})}),await yt(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),he("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Je(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €)`),he("Sonstige Position wurde gelöscht."),ae()}async function ce(o,l,f,d){const p=je(),M=h.selectedYear;if(!p||!M)return;const F=o.trim();if(!F){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const I=rs(F,l,f);if(p.incomes=[I,...p.incomes],d){const L=pe(M,h.selectedMonth);h.years.forEach(X=>{X.months.forEach(W=>{pe(X.year,W.month)<=L||(W.incomes=[rs(F,l,f),...W.incomes])})}),await yt(`Einkommen hinzugefügt: ${F} (${w(l)} €, ${Nn(f)}) für zukünftige Monate`),he("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await Je(`Einkommen hinzugefügt: ${F} (${w(l)} €, ${Nn(f)})`),he("Einkommen wurde hinzugefügt."),ae()}async function nr(o,l){const f=je();if(!f)return;const d=f.incomes.find(p=>p.id===o);d&&(f.incomes=f.incomes.map(p=>{if(p.id!==o)return p;if(!l){const{incomeSource:M,...F}=p;return F}return{...p,incomeSource:l}}),await Je(`Einkommensart angepasst: ${d.description} → ${Nn(l)}`),ae())}async function ar(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=je(),d=h.selectedYear;if(!f||!d)return;const p=f.incomes.find(L=>L.id===o);if(!p)return;const M=pe(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>pe(L.year,X.month)>M&&X.incomes.some(W=>W.description===p.description&&W.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),I){h.years.forEach(L=>{L.months.forEach(X=>{pe(L.year,X.month)<=M||(X.incomes=X.incomes.filter(W=>!(W.description===p.description&&W.amountCents===p.amountCents)))})}),await yt(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),he("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Je(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €)`),he("Einkommen wurde gelöscht."),ae()}async function zn(){const o=await Ds(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${un()}-${Ga()}.json`,p=document.createElement("a");p.href=f,p.download=d,p.click(),URL.revokeObjectURL(f),ua(d),ae(),he("Backup wurde exportiert.")}async function Un(o){const l=await o.text(),f=JSON.parse(l);await Is(f);const[d,p,M]=await Promise.all([na(),Tr(),Or()]);h.years=d,h.annualVariableFixedTemplates=M.templates,h.annualVariableFixedTemplateVersion=M.version,Pa(h.years),hn(h.years),h.fixedTemplates=p.templates,h.fixedTemplateVersion=p.version,await Ta(h.years),h.persistentAuditLog=await Dr(),h.selectedYear=Wa(d),h.selectedMonth=kn(),ua(o.name),he("Backup wurde importiert."),ae()}function ae(){const o=Rt(),l=je(),f=un(),d=l?tt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},p=o?Sn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},M=o?qn(o):[],F=l?l.foodBudgetCents??0:0,I=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,E)=>r+E.plannedCents,0):0,X=l?l.variableBudgetCents??l.variablePositions.reduce((r,E)=>r+E.budgetCents,0):0,W=l?l.miscBudgetCents??0:0,Q=o?o.months.reduce((r,E)=>r+(E.foodBudgetCents??0),0):0,R=o?o.months.reduce((r,E)=>r+(E.goingOutBudgetCents??0),0):0,ve=o?o.months.reduce((r,E)=>r+(E.fixedBudgetCents??E.fixedCosts.reduce((V,Z)=>V+Z.plannedCents,0)),0):0,Ae=o?o.months.reduce((r,E)=>r+(E.variableBudgetCents??E.variablePositions.reduce((V,Z)=>V+Z.budgetCents,0)),0):0,He=o?o.months.reduce((r,E)=>r+(E.miscBudgetCents??0),0):0,ne=l?l.incomes.reduce((r,E)=>r+(bt(E.incomeSource)?E.amountCents:0),0):0,Oe=l?l.incomes.reduce((r,E)=>r+(E.incomeSource==="salary"?E.amountCents:0),0):0,$e=la(),Se=o?$e.get(pe(o.year,h.selectedMonth)):void 0,nt=o?o.months.slice().sort((r,E)=>r.month-E.month)[0]:void 0,xt=Se?.carriedFromPreviousCents??0,D=Se?.hasPreviousMonth??!1,Fe=Se?.effectiveIncomeCents??ne,vt=l?It(l):0,at=Se?.netCents??ne-vt,lt=Fe-d.totalCents,le=Oe-d.totalCents,St=d.totalCents>0?`${(Oe/d.totalCents*100).toFixed(1)} %`:"-",de=xt<0?"danger":xt>0?"budget-under":"",Qe=at<0?"danger":at>0?"budget-under":"",Ue=lt<0?"danger":lt>0?"budget-under":"",Le=o?o.months.reduce((r,E)=>r+E.incomes.reduce((V,Z)=>V+(bt(Z.incomeSource)?Z.amountCents:0),0),0):0,_e=o?o.months.reduce((r,E)=>r+E.incomes.reduce((V,Z)=>V+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,Ze=o&&nt?$e.get(pe(o.year,nt.month))?.carriedFromPreviousCents??0:0,Ut=Le+Ze,sn=Ut-p.totalCents,ut=_e-p.totalCents,At=p.totalCents>0?`${(_e/p.totalCents*100).toFixed(1)} %`:"-",Wn=Ze<0?"danger":Ze>0?"budget-under":"",Ee=sn<0?"danger":sn>0?"budget-under":"",me=F+I+L+X+W,Me=F+I,qe=d.foodCents+d.goingOutCents,st=Me-qe,Mn=pt(qe,Me),Et=Q+R+ve+Ae+He,Nt=Fe-me,Lt=Ut-Et,it=me-d.totalCents,Bt=Et-p.totalCents,xe=r=>r<0?"danger":r>0?"budget-under":"",Gn=(r,E)=>E<=0?"muted":r>=E?"budget-under":"danger",P=Gn(Oe,d.totalCents),q=Gn(_e,p.totalCents),ue=(r,E)=>{if(E<=0)return"0%";const Z=Math.max(0,r)/E*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},bn=(r,E)=>{if(E<=0)return r>0?100:0;const V=Math.max(0,r)/E*100;return Math.max(0,V)},pa=[{label:"Essen",budgetCents:F,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:I,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:X,actualCents:d.variableCents},{label:"Sonstige",budgetCents:W,actualCents:d.miscCents}];Math.max(1,...pa.flatMap(r=>[r.budgetCents,r.actualCents]));const va=(r,E)=>E<=0?"bar-positive":r<=0||E>r?"bar-negative":"bar-positive",rt=[{label:"Einkommen gesamt",valueCents:Fe,className:"bar-income"},{label:"Budget gesamt",valueCents:me,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:lt,className:lt<0?"bar-negative":"bar-positive"}],Jn=Math.max(1,...rt.map(r=>Math.abs(r.valueCents))),Hn=o?o.months.slice().sort((r,E)=>r.month-E.month).map(r=>{const E=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,Z=r.fixedBudgetCents??r.fixedCosts.reduce((qt,Ge)=>qt+Ge.plannedCents,0),Be=r.variableBudgetCents??r.variablePositions.reduce((qt,Ge)=>qt+Ge.budgetCents,0),We=r.miscBudgetCents??0,Mt=E+V+Z+Be+We;return{month:r.month,foodBudgetCents:E,goingOutBudgetCents:V,fixedBudgetCents:Z,variableBudgetCents:Be,miscBudgetCents:We,totalBudgetCents:Mt}}):[],Ot=new Map(Hn.map(r=>[r.month,r])),_t=r=>{if(r.length===0)return null;const E=Math.min(...r),V=Math.max(...r),Z=Math.round(r.reduce((Be,We)=>Be+We,0)/r.length);return{min:E,avg:Z,max:V}},Ia=M.map(r=>r.summary.foodCents),Na=M.map(r=>r.summary.goingOutCents),Xn=M.map(r=>r.summary.fixedCents),ma=M.map(r=>r.summary.variableCents),on=M.map(r=>r.summary.miscCents),ga=M.map(r=>r.summary.totalCents),ba=M.map(r=>o?$e.get(pe(o.year,r.month))?.plannedBudgetCents??0:0),ya=M.map(r=>o?$e.get(pe(o.year,r.month))?.netCents??0:0),Qn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((E,V)=>E+(V.incomeSource==="salary"?V.amountCents:0),0)])),La=M.map(r=>Qn.get(r.month)??0),Wt={food:_t(Ia),goingOut:_t(Na),fixed:_t(Xn),variable:_t(ma),misc:_t(on),total:_t(ga),salary:_t(La),budget:_t(ba),net:_t(ya)},qa=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Ft={food:Ia.reduce((r,E)=>r+E,0),goingOut:Na.reduce((r,E)=>r+E,0),fixed:Xn.reduce((r,E)=>r+E,0),variable:ma.reduce((r,E)=>r+E,0),misc:on.reduce((r,E)=>r+E,0),total:ga.reduce((r,E)=>r+E,0),salary:La.reduce((r,E)=>r+E,0),budget:ba.reduce((r,E)=>r+E,0)},Sr=qa.map(({key:r,label:E})=>{const V=Wt.food?.[r]??null,Z=Wt.goingOut?.[r]??null,Be=Wt.fixed?.[r]??null,We=Wt.variable?.[r]??null,Mt=Wt.misc?.[r]??null,qt=Wt.total?.[r]??null,Ge=Wt.salary?.[r]??null,xn=Wt.budget?.[r]??null,wn=Wt.net?.[r]??null,Pt=Zn=>Zn===null?"-":w(Zn);return`<tr>
                  <td><strong>${E}</strong></td>
                  <td>${Pt(V)}</td>
                  <td>${Pt(Z)}</td>
                  <td>${Pt(Be)}</td>
                  <td>${Pt(We)}</td>
                  <td>${Pt(Mt)}</td>
                  <td>${Pt(qt)}</td>
                  <td>${Pt(Ge)}</td>
                  <td>${Pt(xn)}</td>
                  <td>${Pt(wn)}</td>
                </tr>`}).join(""),Ka=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${w(Ft.food)}</td>
                  <td>${w(Ft.goingOut)}</td>
                  <td>${w(Ft.fixed)}</td>
                  <td>${w(Ft.variable)}</td>
                  <td>${w(Ft.misc)}</td>
                  <td>${w(Ft.total)}</td>
                  <td>${w(Ft.salary)}</td>
                  <td>${w(Ft.budget)}</td>
                </tr>`,Ca=Math.max(1,...M.flatMap(r=>{const E=Ot.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,E??0]})),sr=Math.max(1,...M.flatMap(r=>{const E=Ot.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,Z=(E?.foodBudgetCents??0)+(E?.goingOutBudgetCents??0);return[V,Z]})),ja=Math.max(1,...M.flatMap(r=>{const E=Ot.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,E]})),ir=Math.max(1,...M.flatMap(r=>{const E=Ot.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,E]})),Ra=Math.max(1,...M.flatMap(r=>{const E=Ot.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,E]})),or=pt(d.fixedCents,L),Er=pt(d.foodCents,F),lr=pt(d.goingOutCents,I),Va=pt(d.variableCents,X),ur=pt(d.miscCents,W),Pn=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,Br=h.hasUnexportedChanges,cr=h.unexportedChangeLog.slice().reverse(),dr=h.persistentAuditLog.slice().sort((r,E)=>r.timestampIso.localeCompare(E.timestampIso)),xa=h.lastBackupFileName?Dt(h.lastBackupFileName):"-",Gt={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},ge=h.years.slice().sort((r,E)=>r.year-E.year),yn=ge.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??ge[ge.length-1]?.year??null,Ve=typeof yn=="number"?ge.find(r=>r.year===yn):void 0,_r=Ve?Ve.months.slice().sort((r,E)=>r.month-E.month):[],Jt=Ve?Sn(Ve):Gt,Tn=Ve?Kn(Ve):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},Cn=Ve?En(Ve):0,Ya=Ve?Vt(Ve,$e):0,ln=Cn+Ya,Ht=Ve?Ve.months.reduce((r,E)=>r+It(E),0):0,za=ln-Ht,e=ln-Jt.totalCents,t=[{label:"Essen",budgetCents:Tn.foodCents,actualCents:Jt.foodCents},{label:"Ausgehen",budgetCents:Tn.goingOutCents,actualCents:Jt.goingOutCents},{label:"Fixkosten",budgetCents:Tn.fixedCents,actualCents:Jt.fixedCents},{label:"Variable",budgetCents:Tn.variableCents,actualCents:Jt.variableCents},{label:"Sonstige",budgetCents:Tn.miscCents,actualCents:Jt.miscCents}],n=_r.map(r=>{const E=Ve?$e.get(pe(Ve.year,r.month)):void 0,V=tt(r),Z=r.incomes.reduce((Zn,fr)=>Zn+fr.amountCents,0),Be=E?.effectiveIncomeCents??Z,We=E?.plannedBudgetCents??It(r),Mt=V.foodCents,qt=V.goingOutCents,Ge=Mt+qt,xn=V.totalCents,wn=Be-We,Pt=Be-xn;return{month:r.month,foodCents:Mt,goingOutCents:qt,foodAndGoingOutCents:Ge,effectiveIncomeCents:Be,plannedBudgetCents:We,actualCostCents:xn,plannedNetCents:wn,actualNetCents:Pt}}),a=Math.max(1,...n.map(r=>r.actualCostCents)),s=Math.max(1,...n.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),i=Math.max(1,...n.map(r=>r.foodAndGoingOutCents)),u=Math.max(1,...n.map(r=>r.foodCents)),c=Math.max(1,...n.map(r=>r.goingOutCents)),v=n.map((r,E,V)=>{const Z=E>0?V[E-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Pe(r.month),monthShortLabel:Pe(r.month).slice(0,3),deltaCents:r.plannedNetCents-Z}}),k=v[v.length-1]??null,y=Math.min(0,...v.map(r=>r.plannedNetCents)),m=Math.max(0,...v.map(r=>r.plannedNetCents)),x=Math.max(1,m-y),C=720,b=320,g=18,S=18,B=38,$=56,T=C-$-S,O=b-g-B,j=r=>{if(v.length<=1)return $+T/2;const E=r/(v.length-1);return $+E*T},K=r=>g+(m-r)/x*O,A=v.map((r,E)=>{const V=j(E),Z=K(r.plannedNetCents);return{...r,x:V,y:Z,leftPercent:V/C*100,topPercent:Z/b*100}}),U=A.map((r,E)=>`${E===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),z=A.length>0?`${U} L ${A[A.length-1]?.x.toFixed(1)} ${(g+O).toFixed(1)} L ${A[0]?.x.toFixed(1)} ${(g+O).toFixed(1)} Z`:"",N=5,G=Array.from({length:N},(r,E)=>{const V=E/(N-1),Z=m-V*x;return{valueCents:Math.round(Z/100)*100,y:K(Z)}}),fe=K(0),Ce=v[0]?.plannedNetCents??0,re=(v[v.length-1]?.plannedNetCents??0)-Ce,Ie=re<0?"trend-badge-negative":re>0?"trend-badge-positive":"trend-badge-neutral",wt=re<0?"↘":re>0?"↗":"→",Ke=re<0?"Abwärtstrend":re>0?"Aufwärtstrend":"Seitwärts",kt=ge.reduce((r,E)=>{const V=Kn(E);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Xt=ge.reduce((r,E)=>{const V=Sn(E);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),fs=ge.reduce((r,E)=>r+En(E),0),hs=ge[0]?Vt(ge[0],$e):0,Mr=fs+hs,Nr=Mr-kt.totalCents,Lr=Mr-Xt.totalCents,qr=[{label:"Essen",budgetCents:kt.foodCents,actualCents:Xt.foodCents},{label:"Ausgehen",budgetCents:kt.goingOutCents,actualCents:Xt.goingOutCents},{label:"Fixkosten",budgetCents:kt.fixedCents,actualCents:Xt.fixedCents},{label:"Variable",budgetCents:kt.variableCents,actualCents:Xt.variableCents},{label:"Sonstige",budgetCents:kt.miscCents,actualCents:Xt.miscCents}],Kr=Math.max(1,...qr.flatMap(r=>[r.budgetCents,r.actualCents])),wa=ge.map(r=>{const E=Sn(r),V=Kn(r),Z=En(r),Be=r.months.reduce((qt,Ge)=>qt+Ge.incomes.reduce((xn,wn)=>xn+(wn.incomeSource==="salary"?wn.amountCents:0),0),0),We=Vt(r,$e),Mt=Z+We;return{year:r.year,salaryIncomeCents:Be,budgetTotalCents:V.totalCents,actualTotalCents:E.totalCents,effectiveIncomeCents:Mt,plannedNetCents:Mt-V.totalCents,actualNetCents:Mt-E.totalCents}}),jr=Math.max(1,...wa.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),ps=Math.max(1,...wa.map(r=>r.actualTotalCents)),vs=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${ge.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${ge.map(r=>`<option value="${r.year}" ${r.year===yn?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${Ve?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w(ln)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(Ht)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(Jt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${xe(za)}">${w(za)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${xe(e)}">${w(e)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${wt}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Ie}">${wt} ${Ke}</span>
                    </div>
                  </header>
                  ${k?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Dt(k.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${xe(k.plannedNetCents)}" data-year-trend-active-net>${w(k.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${w(k.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${w(k.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${xe(k.deltaCents)}" data-year-trend-active-delta>${k.deltaCents>=0?"+":""}${w(k.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${C} ${b}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${Ve?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${G.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${$}" y1="${r.y.toFixed(1)}" x2="${C-S}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${$-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${w(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${$}" y1="${fe.toFixed(1)}" x2="${C-S}" y2="${fe.toFixed(1)}"></line>
                              ${z?`<path class="year-trend-area" d="${z}"></path>`:""}
                              ${U?`<path class="year-trend-line" d="${U}"></path>`:""}
                              ${A.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${b-12}" text-anchor="middle">${Dt(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${A.map((r,E)=>`
                                    <button
                                      class="year-trend-point-hit ${E===A.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${E===A.length-1?"1":"0"}"
                                      data-month-label="${Dt(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Dt(r.monthLabel)}: Kalkulierter Saldo ${w(r.plannedNetCents)}, Einkommen ${w(r.effectiveIncomeCents)}, Ausgaben ${w(r.actualCostCents)}"
                                      aria-pressed="${E===A.length-1?"true":"false"}"
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
                    ${t.map(r=>{const E=bn(r.actualCents,r.budgetCents),V=Math.min(100,E),Z=`${E.toFixed(0)}%`,Be=r.budgetCents-r.actualCents,We=Be<0?"danger":Be>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${va(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${w(r.actualCents)} von ${w(r.budgetCents)}">
                              <span class="circle-chart-value">${Z}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${w(r.budgetCents)} / I ${w(r.actualCents)}</div>
                            <div class="circle-chart-meta ${We}">${Be>=0?"+":""}${w(Be)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(n.length,1)}, minmax(0, 1fr));">
                    ${n.map(r=>{const E=ue(r.actualCostCents,a);return`
                          <div class="spark-bar" title="${Pe(r.month)}: ${w(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                    ${n.map(r=>{const E=ue(Math.abs(r.plannedNetCents),s),V=ue(Math.abs(r.actualNetCents),s),Z=r.plannedNetCents<0?"bar-negative":"bar-positive",Be=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Pe(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${E}; opacity: 0.35;"></div>
                              <div class="bar ${Be}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${xe(r.plannedNetCents)}">B ${w(r.plannedNetCents)}</span>
                              <span class="${xe(r.actualNetCents)}">I ${w(r.actualNetCents)}</span>
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
                  ${n.map(r=>`<tr>
                        <td>${Pe(r.month)}</td>
                        <td>${w(r.effectiveIncomeCents)}</td>
                        <td>${w(r.plannedBudgetCents)}</td>
                        <td>${w(r.actualCostCents)}</td>
                        <td class="${xe(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${xe(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${ge.map(r=>`<option value="${r.year}" ${r.year===yn?"selected":""}>${r.year}</option>`).join("")}
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
                    ${n.map(r=>{const E=ue(r.foodAndGoingOutCents,i);return`
                          <div class="spark-bar" title="${Pe(r.month)}: ${w(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(n.length,1)}, minmax(0, 1fr));">
                    ${n.map(r=>{const E=ue(r.foodCents,u);return`
                          <div class="spark-bar" title="${Pe(r.month)}: ${w(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(n.length,1)}, minmax(0, 1fr));">
                    ${n.map(r=>{const E=ue(r.goingOutCents,c);return`
                          <div class="spark-bar" title="${Pe(r.month)}: ${w(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w(Mr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(kt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(Xt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${xe(Nr)}">${w(Nr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${xe(Lr)}">${w(Lr)}</div><div class="eval-value"></div></div>
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
                    ${qr.map(r=>{const E=ue(r.budgetCents,Kr),V=ue(r.actualCents,Kr),Z=va(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${w(r.budgetCents)} | Ist: ${w(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${E}"></div>
                              <div class="bar-marker" style="left:${E}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Z}" style="width:${V}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(wa.length,1)}, minmax(0, 1fr));">
                    ${wa.map(r=>{const E=ue(r.actualTotalCents,ps);return`
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
                    ${wa.map(r=>{const E=ue(Math.abs(r.plannedNetCents),jr),V=ue(Math.abs(r.actualNetCents),jr),Z=r.plannedNetCents<0?"bar-negative":"bar-positive",Be=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${E}; opacity: 0.35;"></div>
                              <div class="bar ${Be}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${xe(r.plannedNetCents)}">B ${w(r.plannedNetCents)}</span>
                              <span class="${xe(r.actualNetCents)}">I ${w(r.actualNetCents)}</span>
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
                  ${wa.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${w(r.salaryIncomeCents)}</td>
                        <td>${w(r.effectiveIncomeCents)}</td>
                        <td>${w(r.budgetTotalCents)}</td>
                        <td>${w(r.actualTotalCents)}</td>
                        <td class="${xe(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${xe(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,ms=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,gs=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Pn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Pn?mt(Pn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Pn?"Änderung speichern":"Vorlage speichern"}</button>
          ${Pn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,Rr=h.annualVariableFixedTemplates.reduce((r,E)=>r+E.plannedCents,0),bs=Math.round(Rr/12),ys=`
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
                <div class="eval-value budget-under">${w(Rr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${w(bs)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const E=jn(r.dueDateIso),V=E?Pe(E.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${w(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Vr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",Cs=h.topModal==="years"?ms:h.topModal==="fixed"?gs:h.topModal==="variable-fixed"?ys:h.topModal==="dashboard"?vs:"";_.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Br?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${cs.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${Ls(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Vr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Vr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Cs}
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
                  ${cr.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${cr.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Dt(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${dr.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${dr.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Dt(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Pe(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(r,E)=>E+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Pe(r)}</option>`).join("")}
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
                  ${pa.map(r=>`
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
                  ${rt.map(r=>{const E=ue(Math.abs(r.valueCents),Jn),V=r.valueCents>=0?"+":"",Z=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${w(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${E}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Z}">${V}${w(r.valueCents)}</span></div>
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
                      ${M.map(r=>{const E=Ot.get(r.month)?.totalBudgetCents??0,V=ue(E,Ca),Z=ue(r.summary.totalCents,Ca);return`
                            <div class="spark-bar" title="${Pe(r.month)}: Ist ${w(r.summary.totalCents)} € | Budget ${w(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${w(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const E=Ot.get(r.month),V=(E?.foodBudgetCents??0)+(E?.goingOutBudgetCents??0),Z=r.summary.foodCents+r.summary.goingOutCents,Be=ue(V,sr),We=ue(Z,sr);return`
                            <div class="spark-bar" title="${Pe(r.month)}: Ist ${w(Z)} € | Budget ${w(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Be}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${We}"><span class="spark-bar-fill-value">${w(Z)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const E=Ot.get(r.month)?.fixedBudgetCents??0,V=ue(E,ja),Z=ue(r.summary.fixedCents,ja);return`
                            <div class="spark-bar" title="${Pe(r.month)}: Ist ${w(r.summary.fixedCents)} € | Budget ${w(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${w(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const E=Ot.get(r.month)?.variableBudgetCents??0,V=ue(E,ir),Z=ue(r.summary.variableCents,ir);return`
                            <div class="spark-bar" title="${Pe(r.month)}: Ist ${w(r.summary.variableCents)} € | Budget ${w(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${w(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const E=Ot.get(r.month)?.miscBudgetCents??0,V=ue(E,Ra),Z=ue(r.summary.miscCents,Ra);return`
                            <div class="spark-bar" title="${Pe(r.month)}: Ist ${w(r.summary.miscCents)} € | Budget ${w(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${w(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${w(Le)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${w(Oe)}</div>
                    <div class="eval-value">${w(_e)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${de}">${D?w(xt):"-"}</div>
                    <div class="eval-value ${Wn}">${o?w(Ze):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${w(Fe)}</div>
                    <div class="eval-value">${w(Ut)}</div>
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
                    <div class="eval-value">${J(F,d.foodCents)}</div>
                    <div class="eval-value">${w(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${J(I,d.goingOutCents)}</div>
                    <div class="eval-value">${w(R)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${J(L,d.fixedCents)}</div>
                    <div class="eval-value">${w(ve)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${J(X,d.variableCents)}</div>
                    <div class="eval-value">${w(Ae)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${J(W,d.miscCents)}</div>
                    <div class="eval-value">${w(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${J(me,d.totalCents)}</div>
                    <div class="eval-value">${w(Et)}</div>
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
                    <div class="eval-value ${Er}">${w(d.foodCents)}</div>
                    <div class="eval-value">${w(p.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${lr}">${w(d.goingOutCents)}</div>
                    <div class="eval-value">${w(p.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${or}">${w(d.fixedCents)}</div>
                    <div class="eval-value">${w(p.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Va}">${w(d.variableCents)}</div>
                    <div class="eval-value">${w(p.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${ur}">${w(d.miscCents)}</div>
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
                    <div class="eval-value ${xe(it)}">${w(it)}</div>
                    <div class="eval-value ${xe(Bt)}">${w(Bt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${xe(Nt)}">${w(Nt)}</div>
                    <div class="eval-value ${xe(Lt)}">${w(Lt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Ue}">${w(lt)}</div>
                    <div class="eval-value ${Ee}">${w(sn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${xe(le)}">${w(le)}</div>
                    <div class="eval-value ${xe(ut)}">${w(ut)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${P}">${St}</div>
                    <div class="eval-value ${q}">${At}</div>
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
                ${M.map((r,E,V)=>{const Z=o?$e.get(pe(o.year,r.month)):void 0,Be=Z?.plannedBudgetCents??0,We=Z?.netCents??0,Mt=Qn.get(r.month)??0,qt=We<0?"danger":We>0?"budget-under":"",Ge=V[E-1],xn=Ge?.summary.foodCents??null,wn=Ge?.summary.goingOutCents??null,Pt=Ge?.summary.fixedCents??null,Zn=Ge?.summary.variableCents??null,fr=Ge?.summary.miscCents??null,Yr=Ge?.summary.totalCents??null,zr=Ge!==void 0?Qn.get(Ge.month)??0:null,Ur=o&&Ge?$e.get(pe(o.year,Ge.month))?.plannedBudgetCents??0:null,Wr=xn===null?null:r.summary.foodCents-xn,Gr=wn===null?null:r.summary.goingOutCents-wn,Jr=Pt===null?null:r.summary.fixedCents-Pt,Hr=Zn===null?null:r.summary.variableCents-Zn,Xr=fr===null?null:r.summary.miscCents-fr,Qr=Yr===null?null:r.summary.totalCents-Yr,Zr=zr===null?null:Mt-zr,es=Ur===null?null:Be-Ur,ea=Qt=>Qt===null?"muted":Qt>0?"danger":Qt<0?"budget-under":"muted",xs=Qt=>Qt===null?"muted":Qt>0?"danger":Qt<0?"budget-under":"muted",An=Qt=>Qt===null?"(Δ -)":`(Δ ${Qt>0?"+":""}${w(Qt)})`,ts=o&&Ge?$e.get(pe(o.year,Ge.month))?.netCents??0:null,ka=ts===null?null:We-ts,ws=ka===null?"(Δ -)":`(Δ ${ka>0?"+":""}${w(ka)})`,ks=ka===null?"muted":ka<0?"danger":ka>0?"budget-under":"muted";return`<tr>
                  <td>${Pe(r.month)}</td>
                  <td>${w(r.summary.foodCents)} <span class="${ea(Wr)}">${An(Wr)}</span></td>
                  <td>${w(r.summary.goingOutCents)} <span class="${ea(Gr)}">${An(Gr)}</span></td>
                  <td>${w(r.summary.fixedCents)} <span class="${ea(Jr)}">${An(Jr)}</span></td>
                  <td>${w(r.summary.variableCents)} <span class="${ea(Hr)}">${An(Hr)}</span></td>
                  <td>${w(r.summary.miscCents)} <span class="${ea(Xr)}">${An(Xr)}</span></td>
                  <td>${w(r.summary.totalCents)} <span class="${ea(Qr)}">${An(Qr)}</span></td>
                  <td>${w(Mt)} <span class="${ea(Zr)}">${An(Zr)}</span></td>
                  <td>${w(Be)} <span class="${xs(es)}">${An(es)}</span></td>
                  <td class="${qt}">${w(We)} <span class="${ks}">${ws}</span></td>
                </tr>`}).join("")}
                ${Sr}
                ${Ka}
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
                    <td class="${de}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${mt(xt)}" />
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
                  <strong>${w(Oe)} €</strong>
                </div>
                <div class="column-overview-row ${de}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${w(xt)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${w(Fe)} €</strong>
                </div>
                <div class="column-overview-row ${Qe}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${w(at)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Yt(F,d.foodCents)}
                ${Yt(I,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${w(Me)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${w(qe)} €</strong>
                  </div>
                  <div class="column-overview-row ${Mn}">
                    <span>Diff</span>
                    <strong>${w(st)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${mt(F)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${mt(I)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(r=>{const E=r.foodCents>0,V=r.goingOutCents>0,Z=`${r.isoDate===f?"today-row":""} ${E||V?"day-has-entry":""}`.trim(),Be=`amount-input ${E?"day-input-has-value":""}`.trim(),We=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Be}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${mt(r.foodCents)}" /></td>
                      <td><input class="${We}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${mt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Yt(L,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${mt(L)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${mt(r.plannedCents)}" /></td>
                    <td class="${pt(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${mt(r.actualCents)}" /></td>
                    <td class="${pt(r.actualCents,r.plannedCents)}">${w(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Yt(X,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${mt(X)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${mt(r.budgetCents)}" /></td>
                    <td class="${pt(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${mt(r.actualCents)}" /></td>
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
              ${Yt(W,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${mt(W)}" ${l?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${xa}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),rr(),Zt(),dt(),Ea()}function rr(){const o=_.querySelector("#theme-select"),l=_.querySelector("#open-years-modal"),f=_.querySelector("#open-fixed-modal"),d=_.querySelector("#open-variable-fixed-modal"),p=_.querySelector("#open-dashboard-modal"),M=_.querySelector("#panel-modal-close"),F=_.querySelector("#panel-modal-backdrop"),I=_.querySelector("#open-unexported-change-log"),L=_.querySelector("#open-persistent-audit-log"),X=_.querySelector("#unexported-change-log-close"),W=_.querySelector("#unexported-change-log-backup"),Q=_.querySelector("#unexported-change-log-backdrop"),R=_.querySelector("#persistent-audit-log-close"),ve=_.querySelector("#persistent-audit-log-backdrop"),Ae=_.querySelector("#new-year"),He=_.querySelector("#create-year"),ne=_.querySelector("#year-select"),Oe=_.querySelector("#month-select");o?.addEventListener("change",()=>{const P=o.value;os(P)&&oa(P)}),l?.addEventListener("click",()=>{aa("years")}),f?.addEventListener("click",()=>{aa("fixed")}),d?.addEventListener("click",()=>{aa("variable-fixed")}),p?.addEventListener("click",()=>{aa("dashboard")}),I?.addEventListener("click",()=>{ra()}),L?.addEventListener("click",()=>{On()}),X?.addEventListener("click",()=>{sa()}),W?.addEventListener("click",async()=>{try{await zn()}catch(P){console.error("Backup-Export fehlgeschlagen",P),he("Backup konnte nicht exportiert werden.","error")}}),Q?.addEventListener("click",P=>{P.target===Q&&sa()}),R?.addEventListener("click",()=>{ia()}),ve?.addEventListener("click",P=>{P.target===ve&&ia()}),_.querySelectorAll("[data-dashboard-tab]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(h.dashboardTab=q,ae())})});const $e=_.querySelector("#dashboard-year-select");$e?.addEventListener("change",()=>{const P=Number.parseInt($e.value,10);Number.isInteger(P)&&(h.dashboardYear=P,ae())}),M?.addEventListener("click",()=>{Sa()}),F?.addEventListener("click",P=>{P.target===F&&Sa()}),h.topModal&&window.setTimeout(()=>{M?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{X?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{R?.focus()},0),He?.addEventListener("click",async()=>{const P=Number.parseInt(Ae?.value??"",10);if(!Number.isInteger(P)){alert("Bitte gültiges Jahr eingeben.");return}await dn(P)}),ne?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ne.value,10),h.selectedMonth=kn(),ae()}),Oe?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Oe.value,10),ae()});const Se=_.querySelector("#fixed-template-name"),nt=_.querySelector("#fixed-template-amount"),xt=_.querySelector("#add-fixed-template"),D=_.querySelector("#cancel-fixed-template-edit"),Fe=_.querySelector("#annual-variable-fixed-name"),vt=_.querySelector("#annual-variable-fixed-date"),at=_.querySelector("#annual-variable-fixed-amount"),lt=_.querySelector("#add-annual-variable-fixed-template");xt?.addEventListener("click",async()=>{const P=Se?.value??"",q=Ne(nt?.value??"0");await fa(P,q),Se&&(Se.value=""),nt&&(nt.value="")}),D?.addEventListener("click",()=>{kr()}),lt?.addEventListener("click",async()=>{const P=Fe?.value??"",q=vt?.value??"",ue=Ne(at?.value??"0");await Bn(P,q,ue),Fe&&(Fe.value=""),vt&&(vt.value=""),at&&(at.value="")}),_.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeAnnualVariableFixedTemplate;q&&await an(q)})}),_.querySelectorAll("[data-edit-fixed-template]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.editFixedTemplate;q&&ha(q)})}),_.querySelectorAll("[data-remove-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixedTemplate;q&&await nn(q)})}),_.querySelectorAll("[data-day-food]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),et(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayFood;q&&await Rn(q,"foodCents",Ne(P.value))})}),_.querySelectorAll("[data-day-going]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),et(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayGoing;q&&await Rn(q,"goingOutCents",Ne(P.value))})}),_.querySelectorAll("[data-fixed-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),et(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedActual;q&&await $r(q,Ne(P.value))})}),_.querySelectorAll("[data-fixed-planned]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),et(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedPlanned;q&&await rn(q,Ne(P.value))})});const le=_.querySelector("#fixed-budget");le?.addEventListener("click",P=>{P.preventDefault(),le.blur(),et(le)}),le?.addEventListener("change",async()=>{await Za(Ne(le.value))});const St=_.querySelector("#food-budget");St?.addEventListener("click",P=>{P.preventDefault(),St.blur(),et(St)}),St?.addEventListener("change",async()=>{await Oa(Ne(St.value))});const de=_.querySelector("#going-out-budget");de?.addEventListener("click",P=>{P.preventDefault(),de.blur(),et(de)}),de?.addEventListener("change",async()=>{await Re(Ne(de.value))}),_.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{gr()});const Ue=_.querySelector("#misc-budget");Ue?.addEventListener("click",P=>{P.preventDefault(),Ue.blur(),et(Ue)}),Ue?.addEventListener("change",async()=>{await vn(Ne(Ue.value))});const Le=_.querySelector("#variable-budget");Le?.addEventListener("click",P=>{P.preventDefault(),Le.blur(),et(Le)}),Le?.addEventListener("change",async()=>{await zt(Ne(Le.value))});const _e=_.querySelector("#variable-position-name"),Ze=_.querySelector("#variable-position-budget"),Ut=_.querySelector("#add-variable-position"),sn=_.querySelector("#add-variable-position-recurring"),ut=_.querySelector("#misc-description"),At=_.querySelector("#misc-amount"),Wn=_.querySelector("#add-misc"),Ee=_.querySelector("#add-misc-recurring"),me=_.querySelector("#income-description"),Me=_.querySelector("#income-source"),qe=_.querySelector("#income-amount"),st=_.querySelector("#add-income"),Mn=_.querySelector("#add-income-recurring"),Et=_.querySelector("#fixed-cost-name"),Nt=_.querySelector("#fixed-cost-budget"),Lt=_.querySelector("#add-fixed-cost"),it=_.querySelector("#carryover-override");it?.addEventListener("click",P=>{P.preventDefault(),it.blur(),et(it)}),it?.addEventListener("change",async()=>{const P=it.value;if(!P.trim()){await mn(null);return}await mn(Ne(P))}),Lt?.addEventListener("click",async()=>{const P=Ne(Nt?.value??"0");await Qa(Et?.value??"",P),Et&&(Et.value=""),Nt&&(Nt.value="")}),Ut?.addEventListener("click",async()=>{const P=Ne(Ze?.value??"0");await Vn(_e?.value??"",P,!1),_e&&(_e.value=""),Ze&&(Ze.value="")}),sn?.addEventListener("click",async()=>{const P=Ne(Ze?.value??"0");await Vn(_e?.value??"",P,!0),_e&&(_e.value=""),Ze&&(Ze.value="")}),Wn?.addEventListener("click",async()=>{const P=Ne(At?.value??"0");await Yn(ut?.value??"",P,!1),ut&&(ut.value=""),At&&(At.value="")}),Ee?.addEventListener("click",async()=>{const P=Ne(At?.value??"0");await Yn(ut?.value??"",P,!0),ut&&(ut.value=""),At&&(At.value="")}),st?.addEventListener("click",async()=>{const P=Ne(qe?.value??"0"),q=Me?.value,ue=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ce(me?.value??"",P,ue,!1),me&&(me.value=""),qe&&(qe.value=""),Me&&(Me.value="salary")}),Mn?.addEventListener("click",async()=>{const P=Ne(qe?.value??"0"),q=Me?.value,ue=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ce(me?.value??"",P,ue,!0),me&&(me.value=""),qe&&(qe.value=""),Me&&(Me.value="salary")}),_.querySelectorAll("[data-income-source]").forEach(P=>{P.addEventListener("change",async()=>{const q=P.dataset.incomeSource;if(!q)return;const ue=P.value;await nr(q,ue==="balance"||ue==="fresh"||ue==="salary"?ue:void 0)})}),_.querySelectorAll("[data-variable-position-budget]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),et(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionBudget;q&&await Da(q,Ne(P.value))})}),_.querySelectorAll("[data-variable-position-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),et(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionActual;q&&await Fa(q,Ne(P.value))})}),_.querySelectorAll("[data-remove-variable-position]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeVariablePosition;q&&await gn(q)})}),_.querySelectorAll("[data-move-variable-position-next]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.moveVariablePositionNext;q&&await er(q)})}),_.querySelectorAll("[data-remove-fixed]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixed;q&&await pn(q)})}),_.querySelectorAll("[data-remove-income]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeIncome;q&&await ar(q)})}),_.querySelectorAll("[data-remove-misc]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeMisc;q&&await tr(q)})});const Bt=_.querySelector("#backup-export"),xe=_.querySelector("#backup-import");_.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Bt?.addEventListener("click",async()=>{await zn()}),xe?.addEventListener("change",async()=>{const P=xe.files?.[0];if(P){try{await Un(P)}catch(q){console.error("Backup-Import fehlgeschlagen",q),he("Backup konnte nicht importiert werden.","error")}xe.value=""}})}return{init:xr}}const Ks="modulepreload",js=function(_){return"/habu26/"+_},us={},Rs=function(h,De,H){let be=Promise.resolve();if(De&&De.length>0){let ot=function(ze){return Promise.all(ze.map(oe=>Promise.resolve(oe).then(gt=>({status:"fulfilled",value:gt}),gt=>({status:"rejected",reason:gt}))))};var we=ot;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),ye=ie?.nonce||ie?.getAttribute("nonce");be=ot(De.map(ze=>{if(ze=js(ze),ze in us)return;us[ze]=!0;const oe=ze.endsWith(".css"),gt=oe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${ze}"]${gt}`))return;const ct=document.createElement("link");if(ct.rel=oe?"stylesheet":Ks,oe||(ct.as="script"),ct.crossOrigin="",ct.href=ze,ye&&ct.setAttribute("nonce",ye),document.head.appendChild(ct),oe)return new Promise((dt,Zt)=>{ct.addEventListener("load",dt),ct.addEventListener("error",()=>Zt(new Error(`Unable to preload CSS for ${ze}`)))})}))}function se(ie){const ye=new Event("vite:preloadError",{cancelable:!0});if(ye.payload=ie,window.dispatchEvent(ye),!ye.defaultPrevented)throw ie}return be.then(ie=>{for(const ye of ie||[])ye.status==="rejected"&&se(ye.reason);return h().catch(se)})};function Vs(_={}){const{immediate:h=!1,onNeedRefresh:De,onOfflineReady:H,onRegistered:be,onRegisteredSW:se,onRegisterError:we}=_;let ie,ye;const ot=async(oe=!0)=>{await ye};async function ze(){if("serviceWorker"in navigator){if(ie=await Rs(async()=>{const{Workbox:oe}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:oe}},[]).then(({Workbox:oe})=>new oe("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(oe=>{we?.(oe)}),!ie)return;ie.addEventListener("activated",oe=>{(oe.isUpdate||oe.isExternal)&&window.location.reload()}),ie.addEventListener("installed",oe=>{oe.isUpdate||H?.()}),ie.register({immediate:h}).then(oe=>{se?se("/habu26/sw.js",oe):be?.(oe)}).catch(oe=>{we?.(oe)})}}return ye=ze(),ot}function Ys(){Vs({immediate:!0})}const ds=document.getElementById("app");if(!ds)throw new Error("App-Container nicht gefunden.");qs(ds).init();Ys();
