(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ge of document.querySelectorAll('link[rel="modulepreload"]'))J(ge);new MutationObserver(ge=>{for(const re of ge)if(re.type==="childList")for(const xe of re.addedNodes)xe.tagName==="LINK"&&xe.rel==="modulepreload"&&J(xe)}).observe(document,{childList:!0,subtree:!0});function Ne(ge){const re={};return ge.integrity&&(re.integrity=ge.integrity),ge.referrerPolicy&&(re.referrerPolicy=ge.referrerPolicy),ge.crossOrigin==="use-credentials"?re.credentials="include":ge.crossOrigin==="anonymous"?re.credentials="omit":re.credentials="same-origin",re}function J(ge){if(ge.ep)return;ge.ep=!0;const re=Ne(ge);fetch(ge.href,re)}})();const ws=[1,2,3,4,5,6,7,8,9,10,11,12];function Dr(){return new Date().toISOString()}function It(P){const h=Math.random().toString(36).slice(2,10);return`${P}_${Date.now()}_${h}`}function ks(P,h){const Ne=new Date(P,h,0).getDate(),J=[];for(let ge=1;ge<=Ne;ge+=1){const re=new Date(Date.UTC(P,h-1,ge));J.push({isoDate:re.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return J}function $s(P){return P.map(h=>({id:It("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function ts(P,h,Ne){const J=h.reduce((re,xe)=>re+xe.plannedCents,0),ge=ws.map(re=>({month:re,days:ks(P,re),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:$s(h),fixedBudgetCents:J,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:P,createdAt:Dr(),templateVersion:Ne,months:ge}}function ns(P,h){return{id:It("expense"),description:P,amountCents:h,createdAt:Dr()}}function as(P,h,Ne){const J={id:It("income"),description:P,amountCents:h,createdAt:Dr()};return Ne?{...J,incomeSource:Ne}:J}var Ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bs(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var pr={exports:{}},Es=pr.exports,rs;function _s(){return rs||(rs=1,(function(P,h){((Ne,J)=>{P.exports=J()})(Es,function(){var Ne=function(e,t){return(Ne=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},J=function(){return(J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ge(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ss,xe=Object.keys,se=Array.isArray;function be(e,t){return typeof t=="object"&&xe(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||re.Promise||(re.Promise=Promise);var lt=Object.getPrototypeOf,We={}.hasOwnProperty;function ie(e,t){return We.call(e,t)}function bt(e,t){typeof t=="function"&&(t=t(lt(e))),(typeof Reflect>"u"?xe:Reflect.ownKeys)(t).forEach(function(n){ft(e,n,t[n])})}var dt=Object.defineProperty;function ft(e,t,n,a){dt(e,t,be(n&&ie(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function Qt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ft(e.prototype,"constructor",e),{extend:bt.bind(null,e.prototype)}}}}var Qn=Object.getOwnPropertyDescriptor,Ea=[].slice;function Zn(e,t,n){return Ea.call(e,t,n)}function ea(e,t){return t(e)}function Tn(e){if(!e)throw new Error("Assertion Failed")}function Ga(e){re.setImmediate?setImmediate(e):setTimeout(e,0)}function Nt(e,t){if(typeof t=="string"&&ie(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Nt(e,t[a]);n.push(i)}return n}var u,c=t.indexOf(".");return c===-1||(u=e[t.substr(0,c)])==null?void 0:Nt(u,t.substr(c+1))}function ht(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Tn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)ht(e,t[a],n[a])}else{var i,u,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?se(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:ht(u=(u=e[i])&&ie(e,i)?u:e[i]={},c,n)):n===void 0?se(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function _a(e){var t,n={};for(t in e)ie(e,t)&&(n[t]=e[t]);return n}var gr=[].concat;function Ja(e){return gr.apply([],e)}var qt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ja([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return re[e]}),Vt=new Set(qt.map(function(e){return re[e]})),Yt=null;function cn(e){return Yt=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Yt.get(n);if(a)return a;if(se(n)){a=[],Yt.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Vt.has(n.constructor))a=n;else{var u,c=lt(n);for(u in a=c===Object.prototype?{}:Object.create(c),Yt.set(n,a),n)ie(n,u)&&(a[u]=t(n[u]))}return a})(e),Yt=null,e}var br={}.toString;function Ma(e){return br.call(e).slice(8,-1)}var ta=typeof Symbol<"u"?Symbol.iterator:"@@iterator",wt=typeof ta=="symbol"?function(e){var t;return e!=null&&(t=e[ta])&&t.apply(e)}:function(){return null};function Ce(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var zt={};function Ut(e){var t,n,a,s;if(arguments.length===1){if(se(e))return e.slice();if(this===zt&&typeof e=="string")return[e];if(s=wt(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var na=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},qt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ot=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(qt),yr={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Mt(e,t){this.name=e,this.message=t}function Ha(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function On(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Ha(e,t)}function $n(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ha(e,this.failures)}Qt(Mt).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Qt(On).from(Mt),Qt($n).from(Mt);var aa=ot.reduce(function(e,t){return e[t]=t+"Error",e},{}),Cr=Mt,te=ot.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=yr[t]||n,this.inner=null)}return Qt(a).from(Cr),e[t]=a,e},{}),Xa=(te.Syntax=SyntaxError,te.Type=TypeError,te.Range=RangeError,qt.reduce(function(e,t){return e[t+"Error"]=te[t],e},{}));qt=ot.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=te[t]),e},{});function ke(){}function An(e){return e}function Qa(e,t){return e==null||e===An?t:function(n){return t(e(n))}}function dn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function xr(e,t){return e===ke?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?dn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?dn(s,this.onerror):s),i!==void 0?i:n}}function Pa(e,t){return e===ke?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?dn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?dn(a,this.onerror):a)}}function Ta(e,t){return e===ke?t:function(s){var a=e.apply(this,arguments),s=(be(s,a),this.onsuccess),i=this.onerror,u=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?dn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?dn(i,this.onerror):i),a===void 0?u===void 0?void 0:u:be(a,u)}}function ra(e,t){return e===ke?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function sa(e,t){return e===ke?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}qt.ModifyError=On,qt.DexieError=Mt,qt.BulkError=$n;var pt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ve(e){pt=e}var Fn={},Sn=100,Zt=typeof Promise>"u"?[]:(ot=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Zt=crypto.subtle.digest("SHA-512",new Uint8Array([0])),lt(Zt),ot]:[ot,lt(ot),ot]),ot=Zt[0],Mn=Zt[1],Mn=Mn&&Mn.then,fn=ot&&ot.constructor,Dn=!!Zt[2],hn=function(e,t){tn.push([e,t]),ia&&(queueMicrotask(nn),ia=!1)},In=!0,ia=!0,Ze=[],oa=[],en=An,kt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ke,pgp:!1,env:{},finalize:ke},X=kt,tn=[],pn=0,Nn=[];function D(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=X;if(typeof e!="function"){if(e!==Fn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&qn(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var u=a._lib&&ut();i&&typeof i.then=="function"?n(a,function(c,v){i instanceof D?i._then(c,v):i.then(c,v)}):(a._state=!0,a._value=i,Oa(a)),u&&Bn()}},qn.bind(null,a))}catch(i){qn(a,i)}})(this,e)}var yt={get:function(){var e=X,t=fa;function n(a,s){var i=this,u=!e.global&&(e!==X||t!==fa),c=u&&!rn(),v=new D(function($,y){Kn(i,new he(tr(a,e,u,c),tr(s,e,u,c),$,y,e))});return this._consoleTask&&(v._consoleTask=this._consoleTask),v}return n.prototype=Fn,n},set:function(e){ft(this,"then",e&&e.prototype===Fn?yt:{get:function(){return e},set:yt.set})}};function he(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function qn(e,t){var n,a;oa.push(t),e._state===null&&(n=e._lib&&ut(),t=en(t),e._state=!1,e._value=t,a=e,Ze.some(function(s){return s._value===a._value})||Ze.push(a),Oa(e),n)&&Bn()}function Oa(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Kn(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),pn===0&&(++pn,hn(function(){--pn==0&&la()},[]))}function Kn(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++pn,hn(Za,[n,e,t])}}function Za(e,t,n){try{var a,s=t._value;!t._state&&oa.length&&(oa=[]),a=pt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||oa.indexOf(s)!==-1||(i=>{for(var u=Ze.length;u;)if(Ze[--u]._value===i._value)return Ze.splice(u,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--pn==0&&la(),--n.psd.ref||n.psd.finalize()}}function nn(){mn(kt,function(){ut()&&Bn()})}function ut(){var e=In;return ia=In=!1,e}function Bn(){var e,t,n;do for(;0<tn.length;)for(e=tn,tn=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<tn.length);ia=In=!0}function la(){for(var e=Ze,t=(Ze=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),Nn.slice(0)),n=t.length;n;)t[--n]()}function ua(e){return new D(Fn,!1,e)}function Me(e,t){var n=X;return function(){var a=ut(),s=X;try{return sn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{sn(s,!1),a&&Bn()}}}bt(D.prototype,{then:yt,_then:function(e,t){Kn(this,new he(null,null,e,t,X))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:ua)(a)}):this.then(null,function(a){return(a&&a.name===t?n:ua)(a)}))},finally:function(e){return this.then(function(t){return D.resolve(e()).then(function(){return t})},function(t){return D.resolve(e()).then(function(){return ua(t)})})},timeout:function(e,t){var n=this;return e<1/0?new D(function(a,s){var i=setTimeout(function(){return s(new te.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ft(D.prototype,Symbol.toStringTag,"Dexie.Promise"),kt.env=er(),bt(D,{all:function(){var e=Ut.apply(null,arguments).map(ha);return new D(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return D.resolve(s).then(function(u){e[i]=u,--a||t(e)},n)})})},resolve:function(e){return e instanceof D?e:e&&typeof e.then=="function"?new D(function(t,n){e.then(t,n)}):new D(Fn,!0,e)},reject:ua,race:function(){var e=Ut.apply(null,arguments).map(ha);return new D(function(t,n){e.map(function(a){return D.resolve(a).then(t,n)})})},PSD:{get:function(){return X},set:function(e){return X=e}},totalEchoes:{get:function(){return fa}},newPSD:an,usePSD:mn,scheduler:{get:function(){return hn},set:function(e){hn=e}},rejectionMapper:{get:function(){return en},set:function(e){en=e}},follow:function(e,t){return new D(function(n,a){return an(function(s,i){var u=X;u.unhandleds=[],u.onunhandled=i,u.finalize=dn(function(){var c,v=this;c=function(){v.unhandleds.length===0?s():i(v.unhandleds[0])},Nn.push(function $(){c(),Nn.splice(Nn.indexOf($),1)}),++pn,hn(function(){--pn==0&&la()},[])},u.finalize),e()},t,n,a)})}}),fn&&(fn.allSettled&&ft(D,"allSettled",function(){var e=Ut.apply(null,arguments).map(ha);return new D(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return D.resolve(s).then(function(u){return a[i]={status:"fulfilled",value:u}},function(u){return a[i]={status:"rejected",reason:u}}).then(function(){return--n||t(a)})})})}),fn.any&&typeof AggregateError<"u"&&ft(D,"any",function(){var e=Ut.apply(null,arguments).map(ha);return new D(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,u){return D.resolve(i).then(function(c){return t(c)},function(c){s[u]=c,--a||n(new AggregateError(s))})})})}),fn.withResolvers)&&(D.withResolvers=fn.withResolvers);var et={awaits:0,echoes:0,id:0},wr=0,ca=[],da=0,fa=0,kr=0;function an(e,u,n,a){var s=X,i=Object.create(s),u=(i.parent=s,i.ref=0,i.global=!1,i.id=++kr,kt.env,i.env=Dn?{Promise:D,PromiseProp:{value:D,configurable:!0,writable:!0},all:D.all,race:D.race,allSettled:D.allSettled,any:D.any,resolve:D.resolve,reject:D.reject}:{},u&&be(i,u),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},mn(i,e,n,a));return i.ref===0&&i.finalize(),u}function vn(){return et.id||(et.id=++wr),++et.awaits,et.echoes+=Sn,et.id}function rn(){return!!et.awaits&&(--et.awaits==0&&(et.id=0),et.echoes=et.awaits*Sn,!0)}function ha(e){return et.echoes&&e&&e.constructor===fn?(vn(),e.then(function(t){return rn(),t},function(t){return rn(),Ye(t)})):e}function $r(){var e=ca[ca.length-1];ca.pop(),sn(e,!1)}function sn(e,t){var n,a,s=X;(t?!et.echoes||da++&&e===X:!da||--da&&e===X)||queueMicrotask(t?(function(i){++fa,et.echoes&&--et.echoes!=0||(et.echoes=et.awaits=et.id=0),ca.push(X),sn(i,!0)}).bind(null,e):$r),e!==X&&(X=e,s===kt&&(kt.env=er()),Dn)&&(n=kt.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(re,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function er(){var e=re.Promise;return Dn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(re,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function mn(e,t,n,a,s){var i=X;try{return sn(e,!0),t(n,a,s)}finally{sn(i,!1)}}function tr(e,t,n,a){return typeof e!="function"?e:function(){var s=X;n&&vn(),sn(t,!0);try{return e.apply(this,arguments)}finally{sn(s,!1),a&&queueMicrotask(rn)}}}function Aa(e){Promise===fn&&et.echoes===0?da===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Mn).indexOf("[native code]")===-1&&(vn=rn=ke);var Ye=D.reject,Pt="￿",Kt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Fa="String expected.",En=[],pa="__dbnames",Da="readonly",Ia="readwrite";function on(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var nr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ln(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=cn(t))[e],t}}function ar(){throw te.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function fe(e,t){try{var n=rr(e),a=rr(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=sr(e),i=sr(t),u=s.length,c=i.length,v=u<c?u:c,$=0;$<v;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return u===c?0:u<c?-1:1;case"Array":for(var y=e,m=t,C=y.length,x=m.length,g=C<x?C:x,b=0;b<g;++b){var S=fe(y[b],m[b]);if(S!==0)return S}return C===x?0:C<x?-1:1}}catch{}return NaN}function rr(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ma(e))==="ArrayBuffer")?"binary":t}function sr(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function ae(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}o.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(se(n))return ge(ge([],se(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(se(a))return se(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var jn=o;function o(e){this["@@propmod"]=e}function l(e,t){for(var n=xe(t),a=n.length,s=!1,i=0;i<a;++i){var u=n[i],c=t[u],v=Nt(e,u);c instanceof jn?(ht(e,u,c.execute(v)),s=!0):v!==c&&(ht(e,u,c),s=!0)}return s}d.prototype._trans=function(e,t,n){var a=this._tx||X.trans,s=this.name,i=pt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function u($,y,m){if(m.schema[s])return t(m.idbtrans,m);throw new te.NotFound("Table "+s+" not part of transaction")}var c=ut();try{var v=a&&a.db._novip===this.db._novip?a===X.trans?a._promise(e,u,n):an(function(){return a._promise(e,u,n)},{trans:a,transless:X.transless||X}):(function $(y,m,C,x){if(y.idbdb&&(y._state.openComplete||X.letThrough||y._vip)){var g=y._createTransaction(m,C,y._dbSchema);try{g.create(),y._state.PR1398_maxLoop=3}catch(b){return b.name===aa.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return $(y,m,C,x)})):Ye(b)}return g._promise(m,function(b,S){return an(function(){return X.trans=g,x(b,S,g)})}).then(function(b){if(m==="readwrite")try{g.idbtrans.commit()}catch{}return m==="readonly"?b:g._completion.then(function(){return b})})}if(y._state.openComplete)return Ye(new te.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Ye(new te.DatabaseClosed);y.open().catch(ke)}return y._state.dbReadyPromise.then(function(){return $(y,m,C,x)})})(this.db,e,[this.name],u);return i&&(v._consoleTask=i,v=v.catch(function($){return console.trace($),Ye($)})),v}finally{c&&Bn()}},d.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ye(new te.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},d.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(se(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=xe(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function($){return 0<=c.keyPath.indexOf($)})){for(var v=0;v<t.length;++v)if(t.indexOf(c.keyPath[v])===-1)return!1;return!0}return!1}).sort(function(c,v){return c.keyPath.length-v.keyPath.length})[0];if(n&&this.db._maxKey!==Pt)return u=n.keyPath.slice(0,t.length),this.where(u).equals(u.map(function(c){return e[c]}));!n&&pt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,v){return fe(c,v)===0}var u=t.reduce(function(y,v){var $=y[0],y=y[1],m=a[v],C=e[v];return[$||m,$||!m?on(y,m&&m.multi?function(x){return x=Nt(x,v),se(x)&&x.some(function(g){return s(C,g)})}:function(x){return s(C,Nt(x,v))}):y]},[null,null]),i=u[0],u=u[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(u):n?this.filter(u):this.where(t).equals("")},d.prototype.filter=function(e){return this.toCollection().and(e)},d.prototype.count=function(e){return this.toCollection().count(e)},d.prototype.offset=function(e){return this.toCollection().offset(e)},d.prototype.limit=function(e){return this.toCollection().limit(e)},d.prototype.each=function(e){return this.toCollection().each(e)},d.prototype.toArray=function(e){return this.toCollection().toArray(e)},d.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},d.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,se(e)?"[".concat(e.join("+"),"]"):e))},d.prototype.reverse=function(){return this.toCollection().reverse()},d.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof ar&&(e=(u=>{var c=y,v=u;if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function $(){this.constructor=c}function y(){return u!==null&&u.apply(this,arguments)||this}return Ne(c,v),c.prototype=v===null?Object.create(v):($.prototype=v.prototype,new $),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),s=e.prototype;s;s=lt(s))Object.getOwnPropertyNames(s).forEach(function(u){return a.add(u)});function i(u){if(!u)return u;var c,v=Object.create(e.prototype);for(c in u)if(!a.has(c))try{v[c]=u[c]}catch{}return v}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},d.prototype.defineClass=function(){return this.mapToClass(function(e){be(this,e)})},d.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,u=e;return i&&s&&(u=Ln(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[u]})}).then(function(c){return c.numFailures?D.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{ht(e,i,c)}catch{}return c})},d.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var u=i??{};return l(u,t),a&&ht(u,a,e),n.core.mutate({trans:s,type:"put",values:[u],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?D.reject(c.failures[0]):!!i})})})},d.prototype.update=function(e,t){return typeof e!="object"||se(e)?this.where(":id").equals(e).modify(t):(e=Nt(e,this.schema.primKey.keyPath))===void 0?Ye(new te.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},d.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,u=e;return i&&s&&(u=Ln(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[u],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?D.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{ht(e,i,c)}catch{}return c})},d.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return ae(t,[e],a)}).then(function(a){return a.numFailures?D.reject(a.failures[0]):void 0})})},d.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:nr}).then(function(n){return ae(e,null,n)})}).then(function(t){return t.numFailures?D.reject(t.failures[0]):void 0})},d.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},d.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new te.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,$=c&&$?e.map(Ln(c)):e;return a.core.mutate({trans:u,type:"add",keys:s,values:$,wantResults:i}).then(function(y){var m=y.numFailures,C=y.failures;if(m===0)return i?y.results:y.lastResult;throw new $n("".concat(a.name,".bulkAdd(): ").concat(m," of ").concat(v," operations failed"),C)})})},d.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(u){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new te.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,$=c&&$?e.map(Ln(c)):e;return a.core.mutate({trans:u,type:"put",keys:s,values:$,wantResults:i}).then(function(y){var m=y.numFailures,C=y.failures;if(m===0)return i?y.results:y.lastResult;throw new $n("".concat(a.name,".bulkPut(): ").concat(m," of ").concat(v," operations failed"),C)})})},d.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(u){return u.key}),s=e.map(function(u){return u.changes}),i=[];return this._trans("readwrite",function(u){return n.getMany({trans:u,keys:a,cache:"clone"}).then(function(c){var v=[],$=[],y=(e.forEach(function(m,C){var x=m.key,g=m.changes,b=c[C];if(b){for(var S=0,E=Object.keys(g);S<E.length;S++){var k=E[S],T=g[k];if(k===t.schema.primKey.keyPath){if(fe(T,x)!==0)throw new te.Constraint("Cannot update primary key in bulkUpdate()")}else ht(b,k,T)}i.push(C),v.push(x),$.push(b)}}),v.length);return n.mutate({trans:u,type:"put",keys:v,values:$,updates:{keys:a,changeSpecs:s}}).then(function(m){var C=m.numFailures,x=m.failures;if(C===0)return y;for(var g=0,b=Object.keys(x);g<b.length;g++){var S,E=b[g],k=i[Number(E)];k!=null&&(S=x[E],delete x[E],x[k]=S)}throw new $n("".concat(t.name,".bulkUpdate(): ").concat(C," of ").concat(y," operations failed"),x)})})})},d.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return ae(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new $n("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var f=d;function d(){}function p(e){function t(u,c){if(c){for(var v=arguments.length,$=new Array(v-1);--v;)$[v-1]=arguments[v];return n[u].subscribe.apply(null,$),e}if(typeof u=="string")return n[u]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(u,c,v){var $,y;if(typeof u!="object")return c=c||ra,y={subscribers:[],fire:v=v||ke,subscribe:function(m){y.subscribers.indexOf(m)===-1&&(y.subscribers.push(m),y.fire=c(y.fire,m))},unsubscribe:function(m){y.subscribers=y.subscribers.filter(function(C){return C!==m}),y.fire=y.subscribers.reduce(c,v)}},n[u]=t[u]=y;xe($=u).forEach(function(m){var C=$[m];if(se(C))i(m,$[m][0],$[m][1]);else{if(C!=="asap")throw new te.InvalidArgument("Invalid event config");var x=i(m,An,function(){for(var g=arguments.length,b=new Array(g);g--;)b[g]=arguments[g];x.subscribers.forEach(function(S){Ga(function(){S.apply(null,b)})})})}})}}function _(e,t){return Qt(t).from({prototype:e}),t}function O(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function K(e,t){e.filter=on(e.filter,t)}function N(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return on(a(),t())}:t,e.justLimit=n&&!a}function G(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new te.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function U(e,t,n){var a=G(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function H(e,t,n,a){var s,i,u=e.replayFilter?on(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,v,$){var y,m;u&&!u(v,$,function(C){return v.stop(C)},function(C){return v.fail(C)})||((m=""+(y=v.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(y)),ie(s,m))||(s[m]=!0,t(c,v,$))},Promise.all([e.or._iterate(i,n),ne(U(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):ne(U(e,a,n),on(e.algorithm,u),t,!e.keysOnly&&e.valueMapper)}function ne(e,t,n,a){var s=Me(a?function(i,u,c){return n(a(i),u,c)}:n);return e.then(function(i){if(i)return i.start(function(){var u=function(){return i.continue()};t&&!t(i,function(c){return u=c},function(c){i.stop(c),u=ke},function(c){i.fail(c),u=ke})||s(i.value,i,function(c){return u=c}),u()})})}Q.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ye.bind(null,n.error)):n.table._trans("readonly",e).then(t)},Q.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ye.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Q.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=on(t.algorithm,e)},Q.prototype._iterate=function(e,t){return H(this._ctx,e,t,this._ctx.table.core)},Q.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&be(n,e),t._ctx=n,t},Q.prototype.raw=function(){return this._ctx.valueMapper=null,this},Q.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return H(t,e,n,t.table.core)})},Q.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return O(s,!0)?i.count({trans:n,query:{index:G(s,i.schema),range:s.range}}).then(function(u){return Math.min(u,s.limit)}):(a=0,H(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},Q.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(v,$){return $?i(v[n[$]],$-1):v[a]}var u=this._ctx.dir==="next"?1:-1;function c(v,$){return fe(i(v,s),i($,s))*u}return this.toArray(function(v){return v.sort(c)}).then(t)},Q.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,u=t._ctx;return u.dir==="next"&&O(u,!0)&&0<u.limit?(a=u.valueMapper,s=G(u,u.table.core.schema),u.table.core.query({trans:n,limit:u.limit,values:!0,query:{index:s,range:u.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],H(u,function(c){return i.push(c)},n,u.table.core).then(function(){return i}))},e)},Q.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,O(t)?N(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):N(t,function(){var n=e;return function(){return--n<0}})),this},Q.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),N(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},Q.prototype.until=function(e,t){return K(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},Q.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},Q.prototype.last=function(e){return this.reverse().first(e)},Q.prototype.filter=function(e){var t;return K(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=on(t.isMatch,e),this},Q.prototype.and=function(e){return this.filter(e)},Q.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Q.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Q.prototype.desc=function(){return this.reverse()},Q.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},Q.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Q.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},Q.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},Q.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&O(t,!0)&&0<t.limit)return this._read(function(a){var s=G(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},Q.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Q.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},Q.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Q.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},K(this._ctx,function(a){var a=a.primaryKey.toString(),s=ie(e,a);return e[a]=!0,!s})),this},Q.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(b,S){var E=S.failures;C+=b-S.numFailures;for(var k=0,T=xe(E);k<T.length;k++){var A=T[k];m.push(E[A])}}var i=typeof e=="function"?e:function(b){return l(b,e)},u=n.table.core,y=u.schema.primaryKey,c=y.outbound,v=y.extractKey,$=200,y=t.db._options.modifyChunkSize,m=(y&&($=typeof y=="object"?y[u.name]||y["*"]||200:y),[]),C=0,x=[],g=e===Le;return t.clone().primaryKeys().then(function(b){function S(k){var T=Math.min($,b.length-k),A=b.slice(k,k+T);return(g?Promise.resolve([]):u.getMany({trans:a,keys:A,cache:"immutable"})).then(function(j){var I=[],F=[],z=c?[]:null,Y=g?A:[];if(!g)for(var q=0;q<T;++q){var W=j[q],ve={value:cn(W),primKey:b[k+q]};i.call(ve,ve.value,ve)!==!1&&(ve.value==null?Y.push(b[k+q]):c||fe(v(W),v(ve.value))===0?(F.push(ve.value),c&&z.push(b[k+q])):(Y.push(b[k+q]),I.push(ve.value)))}return Promise.resolve(0<I.length&&u.mutate({trans:a,type:"add",values:I}).then(function(ye){for(var Z in ye.failures)Y.splice(parseInt(Z),1);s(I.length,ye)})).then(function(){return(0<F.length||E&&typeof e=="object")&&u.mutate({trans:a,type:"put",keys:z,values:F,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(ye){return s(F.length,ye)})}).then(function(){return(0<Y.length||E&&g)&&u.mutate({trans:a,type:"delete",keys:Y,criteria:E,isAdditionalChunk:0<k}).then(function(ye){return ae(n.table,Y,ye)}).then(function(ye){return s(Y.length,ye)})}).then(function(){return b.length>k+T&&S(k+$)})})}var E=O(n)&&n.limit===1/0&&(typeof e!="function"||g)&&{index:n.index,range:n.range};return S(0).then(function(){if(0<m.length)throw new On("Error modifying one or more objects",m,C,x);return b.length})})})},Q.prototype.delete=function(){var e=this._ctx,t=e.range;return!O(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Le):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(v){var c=v.failures,v=v.numFailures;if(v)throw new On("Could not delete some values",Object.keys(c).map(function($){return c[$]}),i-v);return i-v})})})};var me=Q;function Q(){}var Le=function(e,t){return t.value=null};function ue(e,t){return e<t?-1:e===t?0:1}function He(e,t){return t<e?-1:e===t?0:1}function ce(e,t,n){return e=e instanceof tt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Ee(e){return new e.Collection(e,function(){return R("")}).limit(0)}function Xe(x,t,n,a){var s,i,u,c,v,$,y,m=n.length;if(!n.every(function(b){return typeof b=="string"}))return ce(x,Fa);function C(b){s=b==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},i=b==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},u=b==="next"?ue:He;var S=n.map(function(E){return{lower:i(E),upper:s(E)}}).sort(function(E,k){return u(E.lower,k.lower)});c=S.map(function(E){return E.upper}),v=S.map(function(E){return E.lower}),y=($=b)==="next"?"":a}C("next");var x=new x.Collection(x,function(){return ze(c[0],v[m-1]+a)}),g=(x._ondirectionchange=function(b){C(b)},0);return x._addAlgorithm(function(b,S,E){var k=b.key;if(typeof k=="string"){var T=i(k);if(t(T,v,g))return!0;for(var A=null,j=g;j<m;++j){var I=((F,z,Y,q,W,ve)=>{for(var ye=Math.min(F.length,q.length),Z=-1,le=0;le<ye;++le){var Ie=z[le];if(Ie!==q[le])return W(F[le],Y[le])<0?F.substr(0,le)+Y[le]+Y.substr(le+1):W(F[le],q[le])<0?F.substr(0,le)+q[le]+Y.substr(le+1):0<=Z?F.substr(0,Z)+z[Z]+Y.substr(Z+1):null;W(F[le],Ie)<0&&(Z=le)}return ye<q.length&&ve==="next"?F+Y.substr(F.length):ye<F.length&&ve==="prev"?F.substr(0,Y.length):Z<0?null:F.substr(0,Z)+q[Z]+Y.substr(Z+1)})(k,T,c[j],v[j],u,$);I===null&&A===null?g=j+1:(A===null||0<u(A,I))&&(A=I)}S(A!==null?function(){b.continue(A+y)}:E)}return!1}),x}function ze(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function R(e){return{type:1,lower:e,upper:e}}Object.defineProperty(we.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),we.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Ee(this):new this.Collection(this,function(){return ze(e,t,!n,!a)})}catch{return ce(this,Kt)}},we.prototype.equals=function(e){return e==null?ce(this,Kt):new this.Collection(this,function(){return R(e)})},we.prototype.above=function(e){return e==null?ce(this,Kt):new this.Collection(this,function(){return ze(e,void 0,!0)})},we.prototype.aboveOrEqual=function(e){return e==null?ce(this,Kt):new this.Collection(this,function(){return ze(e,void 0,!1)})},we.prototype.below=function(e){return e==null?ce(this,Kt):new this.Collection(this,function(){return ze(void 0,e,!1,!0)})},we.prototype.belowOrEqual=function(e){return e==null?ce(this,Kt):new this.Collection(this,function(){return ze(void 0,e)})},we.prototype.startsWith=function(e){return typeof e!="string"?ce(this,Fa):this.between(e,e+Pt,!0,!0)},we.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):Xe(this,function(t,n){return t.indexOf(n[0])===0},[e],Pt)},we.prototype.equalsIgnoreCase=function(e){return Xe(this,function(t,n){return t===n[0]},[e],"")},we.prototype.anyOfIgnoreCase=function(){var e=Ut.apply(zt,arguments);return e.length===0?Ee(this):Xe(this,function(t,n){return n.indexOf(t)!==-1},e,"")},we.prototype.startsWithAnyOfIgnoreCase=function(){var e=Ut.apply(zt,arguments);return e.length===0?Ee(this):Xe(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,Pt)},we.prototype.anyOf=function(){var e,t,n=this,a=Ut.apply(zt,arguments),s=this._cmp;try{a.sort(s)}catch{return ce(this,Kt)}return a.length===0?Ee(this):((e=new this.Collection(this,function(){return ze(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,u,c){for(var v=i.key;0<s(v,a[t]);)if(++t===a.length)return u(c),!1;return s(v,a[t])===0||(u(function(){i.continue(a[t])}),!1)}),e)},we.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},we.prototype.noneOf=function(){var e=Ut.apply(zt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ce(this,Kt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},we.prototype.inAnyRange=function(e,E){var n=this,a=this._cmp,s=this._ascending,i=this._descending,u=this._min,c=this._max;if(e.length===0)return Ee(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return ce(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",te.InvalidArgument);var v=!E||E.includeLowers!==!1,$=E&&E.includeUppers===!0,y,m=s;function C(k,T){return m(k[0],T[0])}try{(y=e.reduce(function(k,T){for(var A=0,j=k.length;A<j;++A){var I=k[A];if(a(T[0],I[1])<0&&0<a(T[1],I[0])){I[0]=u(I[0],T[0]),I[1]=c(I[1],T[1]);break}}return A===j&&k.push(T),k},[])).sort(C)}catch{return ce(this,Kt)}var x=0,g=$?function(k){return 0<s(k,y[x][1])}:function(k){return 0<=s(k,y[x][1])},b=v?function(k){return 0<i(k,y[x][0])}:function(k){return 0<=i(k,y[x][0])},S=g,E=new this.Collection(this,function(){return ze(y[0][0],y[y.length-1][1],!v,!$)});return E._ondirectionchange=function(k){m=k==="next"?(S=g,s):(S=b,i),y.sort(C)},E._addAlgorithm(function(k,T,A){for(var j,I=k.key;S(I);)if(++x===y.length)return T(A),!1;return!g(j=I)&&!b(j)||(n._cmp(I,y[x][1])===0||n._cmp(I,y[x][0])===0||T(function(){m===s?k.continue(y[x][0]):k.continue(y[x][1])}),!1)}),E},we.prototype.startsWithAnyOf=function(){var e=Ut.apply(zt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Ee(this):this.inAnyRange(e.map(function(t){return[t,t+Pt]})):ce(this,"startsWithAnyOf() only works with strings")};var tt=we;function we(){}function Pe(e){return Me(function(t){return st(t),e(t.target.error),!1})}function st(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var de="storagemutated",vt="x-storagemutated-1",pe=p(null,de),je=(Te.prototype._lock=function(){return Tn(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this},Te.prototype._unlock=function(){if(Tn(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{mn(e[1],e[0])}catch{}}return this},Te.prototype._locked=function(){return this._reculock&&X.lockOwnerFor!==this},Te.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Tn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new te.DatabaseClosed(a);case"MissingAPIError":throw new te.MissingAPI(a.message,a);default:throw new te.OpenFailed(a)}if(!this.active)throw new te.TransactionInactive;Tn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Me(function(s){st(s),t._reject(e.error)}),e.onabort=Me(function(s){st(s),t.active&&t._reject(new te.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Me(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&pe.storagemutated.fire(e.mutatedParts)})}return this},Te.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Ye(new te.ReadOnly("Transaction is readonly")):this.active?this._locked()?new D(function(i,u){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,u)},X])}):n?an(function(){var i=new D(function(u,c){s._lock();var v=t(u,c,s);v&&v.then&&v.then(u,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new D(function(i,u){var c=t(i,u,s);c&&c.then&&c.then(i,u)}))._lib=!0,a):Ye(new te.TransactionInactive)},Te.prototype._root=function(){return this.parent?this.parent._root():this},Te.prototype.waitFor=function(e){var t,n=this._root(),a=D.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new D(function(i,u){a.then(function(c){return n._waitingQueue.push(Me(i.bind(null,c)))},function(c){return n._waitingQueue.push(Me(u.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},Te.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new te.Abort))},Te.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ie(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new te.NotFound("Table "+e+" not part of transaction")},Te);function Te(){}function nt(e,t,n,a,s,i,u,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!u?"&":"")+(a?"*":"")+(s?"++":"")+qe(t),type:c}}function qe(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function at(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,u){return i=a(i,u),i&&(s[i[0]]=i[1]),s},{}))};var a}var $t=function(e){try{return e.only([[]]),$t=function(){return[[]]},[[]]}catch{return $t=function(){return Pt},Pt}};function Tt(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Nt(n,t)}:function(n){return Nt(n,e)};var t}function Ct(e){return[].slice.call(e)}var Ot=0;function mt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Oe(e,t,v){function a(g){if(g.type===3)return null;if(g.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=g.lower,C=g.upper,x=g.lowerOpen,g=g.upperOpen;return m===void 0?C===void 0?null:t.upperBound(C,!!g):C===void 0?t.lowerBound(m,!!x):t.bound(m,C,!!x,!!g)}function s(y){var m,C=y.name;return{name:C,schema:y,mutate:function(x){var g=x.trans,b=x.type,S=x.keys,E=x.values,k=x.range;return new Promise(function(T,A){T=Me(T);var j=g.objectStore(C),I=j.keyPath==null,F=b==="put"||b==="add";if(!F&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var z,Y=(S||E||{length:1}).length;if(S&&E&&S.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(Y===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function q($e){++ye,st($e)}var W=[],ve=[],ye=0;if(b==="deleteRange"){if(k.type===4)return T({numFailures:ye,failures:ve,results:[],lastResult:void 0});k.type===3?W.push(z=j.clear()):W.push(z=j.delete(a(k)))}else{var I=F?I?[E,S]:[E,null]:[S,null],Z=I[0],le=I[1];if(F)for(var Ie=0;Ie<Y;++Ie)W.push(z=le&&le[Ie]!==void 0?j[b](Z[Ie],le[Ie]):j[b](Z[Ie])),z.onerror=q;else for(Ie=0;Ie<Y;++Ie)W.push(z=j[b](Z[Ie])),z.onerror=q}function Bt($e){$e=$e.target.result,W.forEach(function(xt,Wa){return xt.error!=null&&(ve[Wa]=xt.error)}),T({numFailures:ye,failures:ve,results:b==="delete"?S:W.map(function(xt){return xt.result}),lastResult:$e})}z.onerror=function($e){q($e),Bt($e)},z.onsuccess=Bt})},getMany:function(x){var g=x.trans,b=x.keys;return new Promise(function(S,E){S=Me(S);for(var k,T=g.objectStore(C),A=b.length,j=new Array(A),I=0,F=0,z=function(W){W=W.target,j[W._pos]=W.result,++F===I&&S(j)},Y=Pe(E),q=0;q<A;++q)b[q]!=null&&((k=T.get(b[q]))._pos=q,k.onsuccess=z,k.onerror=Y,++I);I===0&&S(j)})},get:function(x){var g=x.trans,b=x.key;return new Promise(function(S,E){S=Me(S);var k=g.objectStore(C).get(b);k.onsuccess=function(T){return S(T.target.result)},k.onerror=Pe(E)})},query:(m=c,function(x){return new Promise(function(g,b){g=Me(g);var S,E,k,F=x.trans,T=x.values,A=x.limit,I=x.query,j=A===1/0?void 0:A,z=I.index,I=I.range,F=F.objectStore(C),F=z.isPrimaryKey?F:F.index(z.name),z=a(I);if(A===0)return g({result:[]});m?((I=T?F.getAll(z,j):F.getAllKeys(z,j)).onsuccess=function(Y){return g({result:Y.target.result})},I.onerror=Pe(b)):(S=0,E=!T&&"openKeyCursor"in F?F.openKeyCursor(z):F.openCursor(z),k=[],E.onsuccess=function(Y){var q=E.result;return!q||(k.push(T?q.value:q.primaryKey),++S===A)?g({result:k}):void q.continue()},E.onerror=Pe(b))})}),openCursor:function(x){var g=x.trans,b=x.values,S=x.query,E=x.reverse,k=x.unique;return new Promise(function(T,A){T=Me(T);var F=S.index,j=S.range,I=g.objectStore(C),I=F.isPrimaryKey?I:I.index(F.name),F=E?k?"prevunique":"prev":k?"nextunique":"next",z=!b&&"openKeyCursor"in I?I.openKeyCursor(a(j),F):I.openCursor(a(j),F);z.onerror=Pe(A),z.onsuccess=Me(function(Y){var q,W,ve,ye,Z=z.result;Z?(Z.___id=++Ot,Z.done=!1,q=Z.continue.bind(Z),W=(W=Z.continuePrimaryKey)&&W.bind(Z),ve=Z.advance.bind(Z),ye=function(){throw new Error("Cursor not stopped")},Z.trans=g,Z.stop=Z.continue=Z.continuePrimaryKey=Z.advance=function(){throw new Error("Cursor not started")},Z.fail=Me(A),Z.next=function(){var le=this,Ie=1;return this.start(function(){return Ie--?le.continue():le.stop()}).then(function(){return le})},Z.start=function(le){function Ie(){if(z.result)try{le()}catch($e){Z.fail($e)}else Z.done=!0,Z.start=function(){throw new Error("Cursor behind last entry")},Z.stop()}var Bt=new Promise(function($e,xt){$e=Me($e),z.onerror=Pe(xt),Z.fail=xt,Z.stop=function(Wa){Z.stop=Z.continue=Z.continuePrimaryKey=Z.advance=ye,$e(Wa)}});return z.onsuccess=Me(function($e){z.onsuccess=Ie,Ie()}),Z.continue=q,Z.continuePrimaryKey=W,Z.advance=ve,Ie(),Bt},T(Z)):T(null)},A)})},count:function(x){var g=x.query,b=x.trans,S=g.index,E=g.range;return new Promise(function(k,T){var A=b.objectStore(C),A=S.isPrimaryKey?A:A.index(S.name),j=a(E),j=j?A.count(j):A.count();j.onsuccess=Me(function(I){return k(I.target.result)}),j.onerror=Pe(T)})}}}i=v,u=Ct((v=e).objectStoreNames);var i,v={schema:{name:v.name,tables:u.map(function(y){return i.objectStore(y)}).map(function(y){var m=y.keyPath,C=y.autoIncrement,g=se(m),x={},g={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:g,keyPath:m,autoIncrement:C,unique:!0,extractKey:Tt(m)},indexes:Ct(y.indexNames).map(function(b){return y.index(b)}).map(function(k){var T=k.name,S=k.unique,E=k.multiEntry,k=k.keyPath,T={name:T,compound:se(k),keyPath:k,unique:S,multiEntry:E,extractKey:Tt(k)};return x[mt(k)]=T}),getIndexByKeyPath:function(b){return x[mt(b)]}};return x[":id"]=g.primaryKey,m!=null&&(x[mt(m)]=g.primaryKey),g})},hasGetAll:0<u.length&&"getAll"in i.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},u=v.schema,c=v.hasGetAll,v=u.tables.map(s),$={};return v.forEach(function(y){return $[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if($[y])return $[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:$t(t),schema:u}}function _e(e,t,n,a){return n=n.IDBKeyRange,t=Oe(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,J(J({},s),i(s))},t)}}function Ae(e,t){var n=t.db,n=_e(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function Re(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(u){var c=(function v($,y){return Qn($,y)||($=lt($))&&v($,y)})(u,s);(!c||"value"in c&&c.value===void 0)&&(u===e.Transaction.prototype||u instanceof e.Transaction?ft(u,s,{get:function(){return this.table(s)},set:function(v){dt(this,s,{value:v,writable:!0,configurable:!0,enumerable:!0})}}):u[s]=new e.Table(s,i))})})}function rt(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Lt(e,t){return e._cfg.version-t._cfg.version}function ln(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=at("$meta",va("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),u=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=X.transless||X;an(function(){if(X.trans=i,X.transless=c,t!==0)return Ae(e,n),$=t,((v=i).storeNames.includes("$meta")?v.table("$meta").get("version").then(function(y){return y??$}):D.resolve($)).then(function(S){var m=e,C=S,x=i,g=n,b=[],S=m._versions,E=m._dbSchema=gn(0,m.idbdb,g);return(S=S.filter(function(k){return k._cfg.version>=C})).length===0?D.resolve():(S.forEach(function(k){b.push(function(){var T,A,j,I=E,F=k._cfg.dbschema,z=(Gt(m,I,g),Gt(m,F,g),E=m._dbSchema=F,At(I,F)),Y=(z.add.forEach(function(q){M(g,q[0],q[1].primKey,q[1].indexes)}),z.change.forEach(function(q){if(q.recreate)throw new te.Upgrade("Not yet support for changing primary key");var W=g.objectStore(q.name);q.add.forEach(function(ve){return oe(W,ve)}),q.change.forEach(function(ve){W.deleteIndex(ve.name),oe(W,ve)}),q.del.forEach(function(ve){return W.deleteIndex(ve)})}),k._cfg.contentUpgrade);if(Y&&k._cfg.version>C)return Ae(m,g),x._memoizedTables={},T=_a(F),z.del.forEach(function(q){T[q]=I[q]}),rt(m,[m.Transaction.prototype]),Re(m,[m.Transaction.prototype],xe(T),T),x.schema=T,(A=na(Y))&&vn(),F=D.follow(function(){var q;(j=Y(x))&&A&&(q=rn.bind(null,null),j.then(q,q))}),j&&typeof j.then=="function"?D.resolve(j):F.then(function(){return j})}),b.push(function(T){var A,j,I=k._cfg.dbschema;A=I,j=T,[].slice.call(j.db.objectStoreNames).forEach(function(F){return A[F]==null&&j.db.deleteObjectStore(F)}),rt(m,[m.Transaction.prototype]),Re(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),x.schema=m._dbSchema}),b.push(function(T){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===k._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(A){return A!=="$meta"})):T.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return b.length?D.resolve(b.shift()(x.idbtrans)).then(k):D.resolve()})().then(function(){L(E,g)}))}).catch(u);var v,$;xe(s).forEach(function(y){M(n,y,s[y].primKey,s[y].indexes)}),Ae(e,n),D.follow(function(){return e.on.populate.fire(i)}).catch(u)})}function Wt(e,t){L(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=gn(0,e.idbdb,t);Gt(e,e._dbSchema,t);for(var a=0,s=At(n,e._dbSchema).change;a<s.length;a++){var i=(u=>{if(u.change.length||u.recreate)return console.warn("Unable to patch indexes of table ".concat(u.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(u.name);u.add.forEach(function(v){pt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name,".").concat(v.src)),oe(c,v)})})(s[a]);if(typeof i=="object")return i.value}}function At(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var u={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)u.recreate=!0,a.change.push(u);else{var c=s.idxByName,v=i.idxByName,$=void 0;for($ in c)v[$]||u.del.push($);for($ in v){var y=c[$],m=v[$];y?y.src!==m.src&&u.change.push(m):u.add.push(m)}(0<u.del.length||0<u.add.length||0<u.change.length)&&a.change.push(u)}}else a.add.push([n,i])}return a}function M(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return oe(s,i)})}function L(e,t){xe(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(pt&&console.debug("Dexie: Creating missing table",n),M(t,n,e[n].primKey,e[n].indexes))})}function oe(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function gn(e,t,n){var a={};return Zn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),u=nt(qe($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),c=[],v=0;v<i.indexNames.length;++v){var y=i.index(i.indexNames[v]),$=y.keyPath,y=nt(y.name,$,!!y.unique,!!y.multiEntry,!1,$&&typeof $!="string",!1);c.push(y)}a[s]=at(s,u,c)}),a}function Gt(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],u=n.objectStore(i);e._hasGetAll="getAll"in u;for(var c=0;c<u.indexNames.length;++c){var v,$=u.indexNames[c],y=u.index($).keyPath,y=typeof y=="string"?y:"["+Zn(y).join("+")+"]";t[i]&&(v=t[i].idxByName[y])&&(v.name=$,delete t[i].idxByName[y],t[i].idxByName[$]=v)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&re.WorkerGlobalScope&&re instanceof re.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function va(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return nt(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),se(i),n===0,a)})}jt.prototype._createTableSchema=at,jt.prototype._parseIndexSyntax=va,jt.prototype._parseStoresSpec=function(e,t){var n=this;xe(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new te.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new te.Schema("Primary key cannot be multiEntry*");s.forEach(function(u){if(u.auto)throw new te.Schema("Only primary key can be marked as autoIncrement (++)");if(!u.keyPath)throw new te.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},jt.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?be(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){be(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,rt(t,[t._allTables,t,t.Transaction.prototype]),Re(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],xe(s),s),t._storeNames=xe(s),this},jt.prototype.upgrade=function(e){return this._cfg.contentUpgrade=sa(this._cfg.contentUpgrade||ke,e),this};var Rn=jt;function jt(){}function Fe(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Ue(pa,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Na(e){return e&&typeof e.databases=="function"}function ma(e){return an(function(){return X.letThrough=!0,e()})}function ga(e){return!("from"in e)}var it=function(e,t){var n;if(!this)return n=new it,e&&"d"in e&&be(n,e),n;be(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Vn(e,t,n){var a=fe(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(ga(e))return be(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(fe(n,e.from)<0)return a?Vn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},qa(e);if(0<fe(t,e.to))return s?Vn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},qa(e);fe(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<fe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&Yn(e,a),s&&t&&Yn(e,s)}}function Yn(e,t){ga(t)||(function n(a,s){var i=s.from,u=s.l,c=s.r;Vn(a,i,s.to),u&&n(a,u),c&&n(a,c)})(e,t)}function Ft(e,t){var n=St(t),a=n.next();if(!a.done)for(var s=a.value,i=St(e),u=i.next(s.from),c=u.value;!a.done&&!u.done;){if(fe(c.from,s.to)<=0&&0<=fe(c.to,s.from))return!0;fe(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(u=i.next(s.from)).value}return!1}function St(e){var t=ga(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&fe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||fe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function qa(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=J({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Ka(n)),e.d=Ka(e)}function Ka(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function zn(e,t){return xe(t).forEach(function(n){e[n]?Yn(e[n],t[n]):e[n]=(function a(s){var i,u,c={};for(i in s)ie(s,i)&&(u=s[i],c[i]=!u||typeof u!="object"||Vt.has(u.constructor)?u:a(u));return c})(t[n])}),e}function ba(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Ft(t[n],e[n])})}bt(it.prototype,((ot={add:function(e){return Yn(this,e),this},addKey:function(e){return Vn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Vn(t,n,n)}),this},hasKey:function(e){var t=St(this).next(e).value;return t&&fe(t.from,e)<=0&&0<=fe(t.to,e)}})[ta]=function(){return St(this)},ot));var un={},ya={},Ca=!1;function xa(e){zn(ya,e),Ca||(Ca=!0,setTimeout(function(){Ca=!1,Un(ya,!(ya={}))},0))}function Un(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(un);a<s.length;a++)La(c=s[a],e,n,t);else for(var i in e){var u,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(u=i[1],i=i[2],c=un["idb://".concat(u,"/").concat(i)])&&La(c,e,n,t)}n.forEach(function(v){return v()})}function La(e,t,n,a){for(var s=[],i=0,u=Object.entries(e.queries.query);i<u.length;i++){for(var c=u[i],v=c[0],$=[],y=0,m=c[1];y<m.length;y++){var C=m[y];ba(t,C.obsSet)?C.subscribers.forEach(function(S){return n.add(S)}):a&&$.push(C)}a&&s.push([v,$])}if(a)for(var x=0,g=s;x<g.length;x++){var b=g[x],v=b[0],$=b[1];e.queries.query[v]=$}}function Jt(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ye(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function u(){if(t.openCanceller!==a)throw new te.DatabaseClosed("db.open() was cancelled")}function c(){return new D(function(C,x){if(u(),!n)throw new te.MissingAPI;var g=e.name,b=t.autoSchema||!s?n.open(g):n.open(g,s);if(!b)throw new te.MissingAPI;b.onerror=Pe(x),b.onblocked=Me(e._fireOnBlocked),b.onupgradeneeded=Me(function(S){var E;y=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=st,y.abort(),b.result.close(),(E=n.deleteDatabase(g)).onsuccess=E.onerror=Me(function(){x(new te.NoSuchDatabase("Database ".concat(g," doesnt exist")))})):(y.onerror=Pe(x),E=S.oldVersion>Math.pow(2,62)?0:S.oldVersion,m=E<1,e.idbdb=b.result,i&&Wt(e,y),ln(e,E/10,y,x))},x),b.onsuccess=Me(function(){y=null;var S,E,k,T,A,j,I=e.idbdb=b.result,F=Zn(I.objectStoreNames);if(0<F.length)try{var z=I.transaction((A=F).length===1?A[0]:A,"readonly");if(t.autoSchema)j=I,T=z,(k=e).verno=j.version/10,T=k._dbSchema=gn(0,j,T),k._storeNames=Zn(j.objectStoreNames,0),Re(k,[k._allTables],xe(T),T);else if(Gt(e,e._dbSchema,z),E=z,((E=At(gn(0,(S=e).idbdb,E),S._dbSchema)).add.length||E.change.some(function(Y){return Y.add.length||Y.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),I.close(),s=I.version+1,i=!0,C(c());Ae(e,z)}catch{}En.push(e),I.onversionchange=Me(function(Y){t.vcFired=!0,e.on("versionchange").fire(Y)}),I.onclose=Me(function(){e.close({disableAutoOpen:!1})}),m&&(F=e._deps,A=g,Na(j=F.indexedDB)||A===pa||Fe(j,F.IDBKeyRange).put({name:A}).catch(ke)),C()},x)}).catch(function(C){switch(C?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return D.reject(C)})}var v,$=t.dbReadyResolve,y=null,m=!1;return D.race([a,(typeof navigator>"u"?D.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(C){function x(){return indexedDB.databases().finally(C)}v=setInterval(x,100),x()}).finally(function(){return clearInterval(v)}):Promise.resolve()).then(c)]).then(function(){return u(),t.onReadyBeingFired=[],D.resolve(ma(function(){return e.on.ready.fire(e.vip)})).then(function C(){var x;if(0<t.onReadyBeingFired.length)return x=t.onReadyBeingFired.reduce(sa,ke),t.onReadyBeingFired=[],D.resolve(ma(function(){return x(e.vip)})).then(C)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(C){t.dbOpenError=C;try{y&&y.abort()}catch{}return a===t.openCanceller&&e._close(),Ye(C)}).finally(function(){t.openComplete=!0,$()}).then(function(){var C;return m&&(C={},e.tables.forEach(function(x){x.schema.indexes.forEach(function(g){g.name&&(C["idb://".concat(e.name,"/").concat(x.name,"/").concat(g.name)]=new it(-1/0,[[[]]]))}),C["idb://".concat(e.name,"/").concat(x.name,"/")]=C["idb://".concat(e.name,"/").concat(x.name,"/:dels")]=new it(-1/0,[[[]]])}),pe(de).fire(C),Un(C,!0)),e})}function ja(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),v=c.value;return c.done?v:v&&typeof v.then=="function"?v.then(n,a):se(v)?Promise.all(v).then(n,a):n(v)}}return s(t)()}function Dt(e,t,n){for(var a=se(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Sr={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return J(J({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function u(C,x,g){var k=mt(C),b=s[k]=s[k]||[],S=C==null?0:typeof C=="string"?1:C.length,E=0<x,k=J(J({},g),{name:E?"".concat(k,"(virtual-from:").concat(g.name,")"):g.name,lowLevelIndex:g,isVirtual:E,keyTail:x,keyLength:S,extractKey:Tt(C),unique:!E&&g.unique});return b.push(k),k.isPrimaryKey||i.push(k),1<S&&u(S===2?C[0]:C.slice(0,S-1),x+1,g),b.sort(function(T,A){return T.keyTail-A.keyTail}),k}var c=u(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var v=0,$=a.indexes;v<$.length;v++){var y=$[v];u(y.keyPath,0,y)}function m(C){var x,g=C.query.index;return g.isVirtual?J(J({},C),{query:{index:g.lowLevelIndex,range:(x=C.query.range,g=g.keyTail,{type:x.type===1?2:x.type,lower:Dt(x.lower,x.lowerOpen?e.MAX_KEY:e.MIN_KEY,g),lowerOpen:!0,upper:Dt(x.upper,x.upperOpen?e.MIN_KEY:e.MAX_KEY,g),upperOpen:!0})}}):C}return J(J({},n),{schema:J(J({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(C){return(C=s[mt(C)])&&C[0]}}),count:function(C){return n.count(m(C))},query:function(C){return n.query(m(C))},openCursor:function(C){var x=C.query.index,g=x.keyTail,b=x.keyLength;return x.isVirtual?n.openCursor(m(C)).then(function(E){return E&&S(E)}):n.openCursor(C);function S(E){return Object.create(E,{continue:{value:function(k){k!=null?E.continue(Dt(k,C.reverse?e.MAX_KEY:e.MIN_KEY,g)):C.unique?E.continue(E.key.slice(0,b).concat(C.reverse?e.MIN_KEY:e.MAX_KEY,g)):E.continue()}},continuePrimaryKey:{value:function(k,T){E.continuePrimaryKey(Dt(k,e.MAX_KEY,g),T)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var k=E.key;return b===1?k[0]:k.slice(0,b)}},value:{get:function(){return E.value}}})}}})}})}};function Ra(e,t,n,a){return n=n||{},a=a||"",xe(e).forEach(function(s){var i,u,c;ie(t,s)?(i=e[s],u=t[s],typeof i=="object"&&typeof u=="object"&&i&&u?(c=Ma(i))!==Ma(u)?n[a+s]=t[s]:c==="Object"?Ra(i,u,n,a+s+"."):i!==u&&(n[a+s]=t[s]):i!==u&&(n[a+s]=t[s])):n[a+s]=void 0}),xe(t).forEach(function(s){ie(e,s)||(n[a+s]=t[s])}),n}function wa(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var ir={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return J(J({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return J(J({},n),{mutate:function(s){var i=X.trans,u=i.table(t).hook,c=u.deleting,v=u.creating,$=u.updating;switch(s.type){case"add":if(v.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"put":if(v.fire===ke&&$.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"delete":if(c.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"deleteRange":if(c.fire===ke)break;return i._promise("readwrite",function(){return(function m(C,x,g){return n.query({trans:C,values:!1,query:{index:a,range:x},limit:g}).then(function(b){var S=b.result;return y({type:"delete",keys:S,trans:C}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):S.length<g?{failures:[],numFailures:0,lastResult:void 0}:m(C,J(J({},x),{lower:S[S.length-1],lowerOpen:!0}),g)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function y(m){var C,x,g,b=X.trans,S=m.keys||wa(a,m);if(S)return(m=m.type==="add"||m.type==="put"?J(J({},m),{keys:S}):J({},m)).type!=="delete"&&(m.values=ge([],m.values)),m.keys&&(m.keys=ge([],m.keys)),C=n,g=S,((x=m).type==="add"?Promise.resolve([]):C.getMany({trans:x.trans,keys:g,cache:"immutable"})).then(function(E){var k=S.map(function(T,A){var j,I,F,z=E[A],Y={onerror:null,onsuccess:null};return m.type==="delete"?c.fire.call(Y,T,z,b):m.type==="add"||z===void 0?(j=v.fire.call(Y,T,m.values[A],b),T==null&&j!=null&&(m.keys[A]=T=j,a.outbound||ht(m.values[A],a.keyPath,T))):(j=Ra(z,m.values[A]),(I=$.fire.call(Y,j,T,z,b))&&(F=m.values[A],Object.keys(I).forEach(function(q){ie(F,q)?F[q]=I[q]:ht(F,q,I[q])}))),Y});return n.mutate(m).then(function(T){for(var A=T.failures,j=T.results,I=T.numFailures,T=T.lastResult,F=0;F<S.length;++F){var z=(j||S)[F],Y=k[F];z==null?Y.onerror&&Y.onerror(A[F]):Y.onsuccess&&Y.onsuccess(m.type==="put"&&E[F]?m.values[F]:z)}return{failures:A,results:j,numFailures:I,lastResult:T}}).catch(function(T){return k.forEach(function(A){return A.onerror&&A.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function Va(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)fe(t.keys[s],e[i])===0&&(a.push(n?cn(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var or={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return J(J({},n),{getMany:function(a){var s;return a.cache?(s=Va(a.keys,a.trans._cache,a.cache==="clone"))?D.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?cn(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ya(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function lr(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Br={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new it(e.MIN_KEY,e.MAX_KEY);return J(J({},e),{transaction:function(a,s,i){if(X.subscr&&s!=="readonly")throw new te.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));return e.transaction(a,s,i)},table:function(a){function s(S){var b,S=S.query;return[b=S.index,new it((b=(S=S.range).lower)!=null?b:e.MIN_KEY,(b=S.upper)!=null?b:e.MAX_KEY)]}var i=e.table(a),u=i.schema,c=u.primaryKey,v=u.indexes,$=c.extractKey,y=c.outbound,m=c.autoIncrement&&v.filter(function(g){return g.compound&&g.keyPath.includes(c.keyPath)}),C=J(J({},i),{mutate:function(g){function b(W){return W="idb://".concat(t,"/").concat(a,"/").concat(W),A[W]||(A[W]=new it)}var S,E,k,T=g.trans,A=g.mutatedParts||(g.mutatedParts={}),j=b(""),I=b(":dels"),F=g.type,Y=g.type==="deleteRange"?[g.range]:g.type==="delete"?[g.keys]:g.values.length<50?[wa(c,g).filter(function(W){return W}),g.values]:[],z=Y[0],Y=Y[1],q=g.trans._cache;return se(z)?(j.addKeys(z),(F=F==="delete"||z.length===Y.length?Va(z,q):null)||I.addKeys(z),(F||Y)&&(S=b,E=F,k=Y,u.indexes.forEach(function(W){var ve=S(W.name||"");function ye(le){return le!=null?W.extractKey(le):null}function Z(le){W.multiEntry&&se(le)?le.forEach(function(Ie){return ve.addKey(Ie)}):ve.addKey(le)}(E||k).forEach(function(le,$e){var Bt=E&&ye(E[$e]),$e=k&&ye(k[$e]);fe(Bt,$e)!==0&&(Bt!=null&&Z(Bt),$e!=null)&&Z($e)})}))):z?(Y={from:(q=z.lower)!=null?q:e.MIN_KEY,to:(F=z.upper)!=null?F:e.MAX_KEY},I.add(Y),j.add(Y)):(j.add(n),I.add(n),u.indexes.forEach(function(W){return b(W.name).add(n)})),i.mutate(g).then(function(W){return!z||g.type!=="add"&&g.type!=="put"||(j.addKeys(W.results),m&&m.forEach(function(ve){for(var ye=g.values.map(function(Bt){return ve.extractKey(Bt)}),Z=ve.keyPath.findIndex(function(Bt){return Bt===c.keyPath}),le=0,Ie=W.results.length;le<Ie;++le)ye[le][Z]=W.results[le];b(ve.name).addKeys(ye)})),T.mutatedParts=zn(T.mutatedParts||{},A),W})}}),x={get:function(g){return[c,new it(g.key)]},getMany:function(g){return[c,new it().addKeys(g.keys)]},count:s,query:s,openCursor:s};return xe(x).forEach(function(g){C[g]=function(b){var S=X.subscr,E=!!S,k=Ya(X,i)&&lr(g,b)?b.obsSet={}:S;if(E){var T,S=function(Y){return Y="idb://".concat(t,"/").concat(a,"/").concat(Y),k[Y]||(k[Y]=new it)},A=S(""),j=S(":dels"),E=x[g](b),I=E[0],E=E[1];if((g==="query"&&I.isPrimaryKey&&!b.values?j:S(I.name||"")).add(E),!I.isPrimaryKey){if(g!=="count")return T=g==="query"&&y&&b.values&&i.query(J(J({},b),{values:!1})),i[g].apply(this,arguments).then(function(Y){if(g==="query"){if(y&&b.values)return T.then(function(ye){return ye=ye.result,A.addKeys(ye),Y});var q=b.values?Y.result.map($):Y.result;(b.values?A:j).addKeys(q)}else{var W,ve;if(g==="openCursor")return ve=b.values,(W=Y)&&Object.create(W,{key:{get:function(){return j.addKey(W.primaryKey),W.key}},primaryKey:{get:function(){var ye=W.primaryKey;return j.addKey(ye),ye}},value:{get:function(){return ve&&A.addKey(W.primaryKey),W.value}}})}return Y});j.add(n)}}return i[g].apply(this,arguments)}}),C}})}};function ur(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=J({},t),se(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&se(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function za(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<fe(n,a.lower):0<=fe(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?fe(n,a.upper)<0:fe(n,a.upper)<=0));var n,a}function cr(e,t,n,a,s,i){var u,c,v,$,y,m;return!n||n.length===0||(u=t.query.index,c=u.multiEntry,v=t.query.range,$=a.schema.primaryKey.extractKey,y=u.extractKey,m=(u.lowLevelIndex||u).extractKey,(a=n.reduce(function(C,x){var g=C,b=[];if(x.type==="add"||x.type==="put")for(var S=new it,E=x.values.length-1;0<=E;--E){var k,T=x.values[E],A=$(T);!S.hasKey(A)&&(k=y(T),c&&se(k)?k.some(function(Y){return za(Y,v)}):za(k,v))&&(S.addKey(A),b.push(T))}switch(x.type){case"add":var j=new it().addKeys(t.values?C.map(function(q){return $(q)}):C),g=C.concat(t.values?b.filter(function(q){return q=$(q),!j.hasKey(q)&&(j.addKey(q),!0)}):b.map(function(q){return $(q)}).filter(function(q){return!j.hasKey(q)&&(j.addKey(q),!0)}));break;case"put":var I=new it().addKeys(x.values.map(function(q){return $(q)}));g=C.filter(function(q){return!I.hasKey(t.values?$(q):q)}).concat(t.values?b:b.map(function(q){return $(q)}));break;case"delete":var F=new it().addKeys(x.keys);g=C.filter(function(q){return!F.hasKey(t.values?$(q):q)});break;case"deleteRange":var z=x.range;g=C.filter(function(q){return!za($(q),z)})}return g},e))===e)?e:(a.sort(function(C,x){return fe(m(C),m(x))||fe($(C),$(x))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function _n(e,t){return fe(e.lower,t.lower)===0&&fe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Er(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=fe(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=fe(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function dr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&Ce(i,s)},3e3))})}var _r={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return J(J({},e),{transaction:function(n,a,s){var i,u,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(u=function(v){return function(){if(i.abort(),a==="readwrite"){for(var $=new Set,y=0,m=n;y<m.length;y++){var C=m[y],x=un["idb://".concat(t,"/").concat(C)];if(x){var g=e.table(C),b=x.optimisticOps.filter(function(W){return W.trans===c});if(c._explicit&&v&&c.mutatedParts)for(var S=0,E=Object.values(x.queries.query);S<E.length;S++)for(var k=0,T=(I=E[S]).slice();k<T.length;k++)ba((F=T[k]).obsSet,c.mutatedParts)&&(Ce(I,F),F.subscribers.forEach(function(W){return $.add(W)}));else if(0<b.length){x.optimisticOps=x.optimisticOps.filter(function(W){return W.trans!==c});for(var A=0,j=Object.values(x.queries.query);A<j.length;A++)for(var I,F,z,Y=0,q=(I=j[A]).slice();Y<q.length;Y++)(F=q[Y]).res!=null&&c.mutatedParts&&(v&&!F.dirty?(z=Object.isFrozen(F.res),z=cr(F.res,F.req,b,g,F,z),F.dirty?(Ce(I,F),F.subscribers.forEach(function(W){return $.add(W)})):z!==F.res&&(F.res=z,F.promise=D.resolve({result:z}))):(F.dirty&&Ce(I,F),F.subscribers.forEach(function(W){return $.add(W)})))}}}$.forEach(function(W){return W()})}}})(!1),{signal:s}),c.addEventListener("error",u(!1),{signal:s}),c.addEventListener("complete",u(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return J(J({},a),{mutate:function(i){var u,c=X.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(u=un["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||wa(s,i).some(function(v){return v==null}))?(u.optimisticOps.push(i),i.mutatedParts&&xa(i.mutatedParts),c.then(function(v){0<v.numFailures&&(Ce(u.optimisticOps,i),(v=ur(0,i,v))&&u.optimisticOps.push(v),i.mutatedParts)&&xa(i.mutatedParts)}),c.catch(function(){Ce(u.optimisticOps,i),i.mutatedParts&&xa(i.mutatedParts)})):c.then(function(v){var $=ur(0,J(J({},i),{values:i.values.map(function(y,m){var C;return v.failures[m]?y:(ht(C=(C=s.keyPath)!=null&&C.includes(".")?cn(y):J({},y),s.keyPath,v.results[m]),C)})}),v);u.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&xa(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var u,c,v,$,y,m,C;return Ya(X,a)&&lr("query",i)?(u=((v=X.trans)==null?void 0:v.db._options.cache)==="immutable",c=(v=X).requery,v=v.signal,m=((x,g,b,S)=>{var E=un["idb://".concat(x,"/").concat(g)];if(!E)return[];if(!(x=E.queries[b]))return[null,!1,E,null];var k=x[(S.query?S.query.index.name:null)||""];if(!k)return[null,!1,E,null];switch(b){case"query":var T=k.find(function(A){return A.req.limit===S.limit&&A.req.values===S.values&&_n(A.req.query.range,S.query.range)});return T?[T,!0,E,k]:[k.find(function(A){return("limit"in A.req?A.req.limit:1/0)>=S.limit&&(!S.values||A.req.values)&&Er(A.req.query.range,S.query.range)}),!1,E,k];case"count":return T=k.find(function(A){return _n(A.req.query.range,S.query.range)}),[T,!!T,E,k]}})(t,n,"query",i),C=m[0],$=m[2],y=m[3],C&&m[1]?C.obsSet=i.obsSet:(m=a.query(i).then(function(x){var g=x.result;if(C&&(C.res=g),u){for(var b=0,S=g.length;b<S;++b)Object.freeze(g[b]);Object.freeze(g)}else x.result=cn(g);return x}).catch(function(x){return y&&C&&Ce(y,C),Promise.reject(x)}),C={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(C):(y=[C],($=$||(un["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),dr(C,y,c,v),C.promise.then(function(x){return{result:cr(x.result,i,$?.optimisticOps,a,C,u)}})):a.query(i)}})}})}};function ka(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}De.prototype.version=function(e){if(isNaN(e)||e<.1)throw new te.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new te.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Lt),n.stores({}),this._state.autoSchema=!1),n},De.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?e():new D(function(n,a){if(t._state.openComplete)return a(new te.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new te.DatabaseClosed);t.open().catch(ke)}t._state.dbReadyPromise.then(n,a)}).then(e)},De.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(u,c){return u.level-c.level}),this},De.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},De.prototype.open=function(){var e=this;return mn(kt,function(){return Jt(e)})},De.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=En.indexOf(this);if(0<=t&&En.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new D(function(n){e.dbReadyResolve=n}),e.openCanceller=new D(function(n,a){e.cancelOpen=a}))},De.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new te.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new te.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},De.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new D(function(s,i){function u(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=Me(function(){var v,$,y;v=t._deps,$=t.name,Na(y=v.indexedDB)||$===pa||Fe(y,v.IDBKeyRange).delete($).catch(ke),s()}),c.onerror=Pe(i),c.onblocked=t._fireOnBlocked}if(n)throw new te.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(u):u()})},De.prototype.backendDB=function(){return this.idbdb},De.prototype.isOpen=function(){return this.idbdb!==null},De.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},De.prototype.hasFailed=function(){return this._state.dbOpenError!==null},De.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(De.prototype,"tables",{get:function(){var e=this;return xe(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),De.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new te.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Ja(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},De.prototype._transaction=function(e,t,n){var a,s,i=this,u=X.trans,c=(u&&u.db===this&&e.indexOf("!")===-1||(u=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===Da)a=Da;else{if(e!="rw"&&e!=Ia)throw new te.InvalidArgument("Invalid transaction mode: "+e);a=Ia}if(u){if(u.mode===Da&&a===Ia){if(!c)throw new te.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");u=null}u&&s.forEach(function($){if(u&&u.storeNames.indexOf($)===-1){if(!c)throw new te.SubTransaction("Table "+$+" not included in parent transaction.");u=null}}),c&&u&&!u.active&&(u=null)}}catch($){return u?u._promise(null,function(y,m){m($)}):Ye($)}var v=(function $(y,m,C,x,g){return D.resolve().then(function(){var k=X.transless||X,b=y._createTransaction(m,C,y._dbSchema,x),k=(b.explicit=!0,{trans:b,transless:k});if(x)b.idbtrans=x.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(T){return T.name===aa.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return $(y,m,C,null,g)})):Ye(T)}var S,E=na(g),k=(E&&vn(),D.follow(function(){var T;(S=g.call(b,b))&&(E?(T=rn.bind(null,null),S.then(T,T)):typeof S.next=="function"&&typeof S.throw=="function"&&(S=ja(S)))},k));return(S&&typeof S.then=="function"?D.resolve(S).then(function(T){return b.active?T:Ye(new te.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return S})).then(function(T){return x&&b._resolve(),b._completion.then(function(){return T})}).catch(function(T){return b._reject(T),Ye(T)})})}).bind(null,this,a,s,u,n);return u?u._promise(a,v,"lock"):X.trans?mn(X.transless,function(){return i._whenReady(v)}):this._whenReady(v)},De.prototype.table=function(e){if(ie(this._allTables,e))return this._allTables[e];throw new te.InvalidTable("Table ".concat(e," does not exist"))};var Ue=De;function De(e,t){var n,a,s,i,u,c=this,v=(this._middlewares={},this.verno=0,De.dependencies),v=(this._options=t=J({addons:De.addons,autoOpen:!0,indexedDB:v.indexedDB,IDBKeyRange:v.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ke,dbReadyPromise:null,cancelOpen:ke,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=($.dbReadyPromise=new D(function(m){$.dbReadyResolve=m}),$.openCanceller=new D(function(m,C){$.cancelOpen=C}),this._state=$,this.name=e,this.on=p(this,"populate","blocked","versionchange","close",{ready:[sa,ke]}),this.once=function(m,C){var x=function(){for(var g=[],b=0;b<arguments.length;b++)g[b]=arguments[b];c.on(m).unsubscribe(x),C.apply(c,g)};return c.on(m,x)},this.on.ready.subscribe=ea(this.on.ready.subscribe,function(m){return function(C,x){De.vip(function(){var g,b=c._state;b.openComplete?(b.dbOpenError||D.resolve().then(C),x&&m(C)):b.onReadyBeingFired?(b.onReadyBeingFired.push(C),x&&m(C)):(m(C),g=c,x||m(function S(){g.on.ready.unsubscribe(C),g.on.ready.unsubscribe(S)}))})}}),this.Collection=(n=this,_(me.prototype,function(S,b){this.db=n;var x=nr,g=null;if(b)try{x=b()}catch(k){g=k}var b=S._ctx,S=b.table,E=S.hook.reading.fire;this._ctx={table:S,index:b.index,isPrimKey:!b.index||S.schema.primKey.keyPath&&b.index===S.schema.primKey.name,range:x,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:g,or:b.or,valueMapper:E!==An?E:null}})),this.Table=(a=this,_(f.prototype,function(m,C,x){this.db=a,this._tx=x,this.name=m,this.schema=C,this.hook=a._allTables[m]?a._allTables[m].hook:p(null,{creating:[xr,ke],reading:[Qa,An],updating:[Ta,ke],deleting:[Pa,ke]})})),this.Transaction=(s=this,_(je.prototype,function(m,C,x,g,b){var S=this;m!=="readonly"&&C.forEach(function(E){E=(E=x[E])==null?void 0:E.yProps,E&&(C=C.concat(E.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=m,this.storeNames=C,this.schema=x,this.chromeTransactionDurability=g,this.idbtrans=null,this.on=p(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new D(function(E,k){S._resolve=E,S._reject=k}),this._completion.then(function(){S.active=!1,S.on.complete.fire()},function(E){var k=S.active;return S.active=!1,S.on.error.fire(E),S.parent?S.parent._reject(E):k&&S.idbtrans&&S.idbtrans.abort(),Ye(E)})})),this.Version=(i=this,_(Rn.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(u=this,_(tt.prototype,function(m,C,x){if(this.db=u,this._ctx={table:m,index:C===":id"?null:C,or:x},this._cmp=this._ascending=fe,this._descending=function(g,b){return fe(b,g)},this._max=function(g,b){return 0<fe(g,b)?g:b},this._min=function(g,b){return fe(g,b)<0?g:b},this._IDBKeyRange=u._deps.IDBKeyRange,!this._IDBKeyRange)throw new te.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=$t(t.IDBKeyRange),this._createTransaction=function(m,C,x,g){return new c.Transaction(m,C,x,c._options.chromeTransactionDurability,g)},this._fireOnBlocked=function(m){c.on("blocked").fire(m),En.filter(function(C){return C.name===c.name&&C!==c&&!C._state.vcFired}).map(function(C){return C.on("versionchange").fire(m)})},this.use(or),this.use(_r),this.use(Br),this.use(Sr),this.use(ir),new Proxy(this,{get:function(m,C,x){var g;return C==="_vip"||(C==="table"?function(b){return ka(c.table(b),y)}:(g=Reflect.get(m,C,x))instanceof f?ka(g,y):C==="tables"?g.map(function(b){return ka(b,y)}):C==="_createTransaction"?function(){return ka(g.apply(this,arguments),y)}:g)}}));this.vip=y,v.forEach(function(m){return m(c)})}var Qe,Mn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",bn=(yn.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},yn.prototype[Mn]=function(){return this},yn);function yn(e){this._subscribe=e}try{Qe={indexedDB:re.indexedDB||re.mozIndexedDB||re.webkitIndexedDB||re.msIndexedDB,IDBKeyRange:re.IDBKeyRange||re.webkitIDBKeyRange}}catch{Qe={indexedDB:null,IDBKeyRange:null}}function fr(e){var t,n=!1,a=new bn(function(s){var i=na(e),u,c=!1,v={},$={},y={get closed(){return c},unsubscribe:function(){c||(c=!0,u&&u.abort(),m&&pe.storagemutated.unsubscribe(x))}},m=(s.start&&s.start(y),!1),C=function(){return Aa(g)},x=function(b){zn(v,b),ba($,v)&&C()},g=function(){var b,S,E;!c&&Qe.indexedDB&&(v={},b={},u&&u.abort(),u=new AbortController,E=(k=>{var T=ut();try{i&&vn();var A=an(e,k);return A=i?A.finally(rn):A}finally{T&&Bn()}})(S={subscr:b,signal:u.signal,requery:C,querier:e,trans:null}),Promise.resolve(E).then(function(k){n=!0,t=k,c||S.signal.aborted||(v={},(T=>{for(var A in T)if(ie(T,A))return;return 1})($=b)||m||(pe(de,x),m=!0),Aa(function(){return!c&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||c||Aa(function(){c||s.error&&s.error(k)})}))};return setTimeout(C,0),y});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var Cn=Ue;function Wn(e){var t=Ht;try{Ht=!0,pe.storagemutated.fire(e),Un(e,!0)}finally{Ht=t}}bt(Cn,J(J({},qt),{delete:function(e){return new Cn(e,{addons:[]}).delete()},exists:function(e){return new Cn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Cn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(Na(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==pa})}):Fe(n,t).toCollection().primaryKeys()).then(e)}catch{return Ye(new te.MissingAPI)}var t,n},defineClass:function(){return function(e){be(this,e)}},ignoreTransaction:function(e){return X.trans?mn(X.transless,e):e()},vip:ma,async:function(e){return function(){try{var t=ja(e.apply(this,arguments));return t&&typeof t.then=="function"?t:D.resolve(t)}catch(n){return Ye(n)}}},spawn:function(e,t,n){try{var a=ja(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:D.resolve(a)}catch(s){return Ye(s)}},currentTransaction:{get:function(){return X.trans||null}},waitFor:function(e,t){return e=D.resolve(typeof e=="function"?Cn.ignoreTransaction(e):e).timeout(t||6e4),X.trans?X.trans.waitFor(e):e},Promise:D,debug:{get:function(){return pt},set:function(e){Ve(e)}},derive:Qt,extend:be,props:bt,override:ea,Events:p,on:pe,liveQuery:fr,extendObservabilitySet:zn,getByKeyPath:Nt,setByKeyPath:ht,delByKeyPath:function(e,t){typeof t=="string"?ht(e,t,void 0):"length"in t&&[].map.call(t,function(n){ht(e,n,void 0)})},shallowClone:_a,deepClone:cn,getObjectDiff:Ra,cmp:fe,asap:Ga,minKey:-1/0,addons:[],connections:En,errnames:aa,dependencies:Qe,cache:un,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),Cn.maxKey=$t(Cn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(pe(de,function(e){Ht||(e=new CustomEvent(vt,{detail:e}),Ht=!0,dispatchEvent(e),Ht=!1)}),addEventListener(vt,function(e){e=e.detail,Ht||Wn(e)}));var xn,Ht=!1,Ua=function(){};return typeof BroadcastChannel<"u"&&((Ua=function(){(xn=new BroadcastChannel(vt)).onmessage=function(e){return e.data&&Wn(e.data)}})(),typeof xn.unref=="function"&&xn.unref(),pe(de,function(e){Ht||xn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Ue.disableBfCache&&e.persisted){pt&&console.debug("Dexie: handling persisted pagehide"),xn?.close();for(var t=0,n=En;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Ue.disableBfCache&&e.persisted&&(pt&&console.debug("Dexie: handling persisted pageshow"),Ua(),Wn({all:new it(-1/0,[[]])}))})),D.rejectionMapper=function(e,t){return!e||e instanceof Mt||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Xa[e.name]?e:(t=new Xa[e.name](t||e.message,e),"stack"in e&&ft(t,"stack",{get:function(){return this.inner.stack}}),t)},Ve(pt),J(Ue,Object.freeze({__proto__:null,Dexie:Ue,Entity:ar,PropModification:jn,RangeSet:it,add:function(e){return new jn({add:e})},cmp:fe,default:Ue,liveQuery:fr,mergeRanges:Yn,rangesOverlap:Ft,remove:function(e){return new jn({remove:e})},replacePrefix:function(e,t){return new jn({replacePrefix:[e,t]})}}),{default:Ue}),Ue})})(pr)),pr.exports}var Ms=_s();const Pr=Bs(Ms),ss=Symbol.for("Dexie"),vr=globalThis[ss]||(globalThis[ss]=Pr);if(Pr.semVer!==vr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Pr.semVer} and ${vr.semVer}`);const{liveQuery:js,mergeRanges:Rs,rangesOverlap:Vs,RangeSet:Ys,cmp:zs,Entity:Us,PropModification:Ws,replacePrefix:Gs,add:Js,remove:Hs,DexieYProvider:Xs}=vr,ct=new vr("haushaltsbuch-db");ct.version(1).stores({years:"year",fixedTemplateState:"id"});ct.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const Ba="singleton";function mr(){return new Date().toISOString()}async function Xn(){return ct.years.orderBy("year").toArray()}async function Ps(P){return ct.years.get(P)}async function Hn(P){await ct.years.put(P)}async function Tr(){const P=await ct.fixedTemplateState.get(Ba);if(!P){const h={id:Ba,templates:[],version:mr(),updatedAt:new Date().toISOString()};return await ct.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Or(P){const h=mr();return await ct.fixedTemplateState.put({id:Ba,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Ar(){const P=await ct.annualVariableFixedTemplateState.get(Ba);if(!P){const h={id:Ba,templates:[],version:mr(),updatedAt:new Date().toISOString()};return await ct.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Fr(P){const h=mr();return await ct.annualVariableFixedTemplateState.put({id:Ba,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Ts(){const P=await Xn(),[h,Ne]=await Promise.all([Tr(),Ar()]);return{exportedAt:new Date().toISOString(),years:P,fixedTemplates:h.templates,annualVariableFixedTemplates:Ne.templates}}async function Os(P){await ct.transaction("rw",[ct.years,ct.fixedTemplateState,ct.annualVariableFixedTemplateState],async()=>{await ct.years.clear(),await ct.years.bulkPut(P.years),await Or(P.fixedTemplates),await Fr(P.annualVariableFixedTemplates??[])})}function Ke(P){const h=P.replace(",",".").trim();if(!h)return 0;const Ne=Number.parseFloat(h);return Number.isNaN(Ne)?0:Math.round(Ne*100)}const As=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function w(P){return As.format(P/100)}function gt(P){return(P/100).toFixed(2)}function Be(P){return new Date(2026,P-1,1).toLocaleDateString("de-DE",{month:"long"})}const us=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function is(P){return us.includes(P)}function Fs(P){switch(P){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const os=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Ds(P){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ne="habu-theme",J="habu-backup-dirty",ge="habu-unexported-change-log",re="habu-last-backup-filename",xe="habu-recurring-budget-defaults";let se=null,be=null,lt=null,We=null,ie=!1,bt=!1;const dt=new WeakMap;function ft(){const o=P.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),p=l.getPropertyValue("--table-stripe").trim(),_=l.getPropertyValue("--table-border").trim(),O=l.getPropertyValue("--budget-under").trim(),K=l.getPropertyValue("--danger-2").trim(),N=96,G=250,U=H=>1-Math.pow(1-Math.max(0,Math.min(1,H)),3);o.forEach(H=>{H.dataset.hoverBound!=="1"&&(H.dataset.hoverBound="1",H.addEventListener("mouseenter",()=>{H.dataset.hovering="1",ft()}),H.addEventListener("mouseleave",()=>{delete H.dataset.hovering,delete H.dataset.hoverX,ft()}),H.addEventListener("mousemove",Oe=>{const _e=H.getBoundingClientRect(),Ae=Math.round(Oe.clientX-_e.left);H.dataset.hoverX=String(Ae),ft()}));const ne=Number.parseInt(H.dataset.budgetCents??"0",10),me=Number.parseInt(H.dataset.actualCents??"0",10),Q=H.dataset.label??"Kategorie",Le=H.dataset.hovering==="1",ue=`${Q}|${ne}|${me}`,He=H.dataset.lastRenderSignature!==ue;H.dataset.lastRenderSignature=ue;const ce=Math.max(120,Math.floor(H.clientWidth||120)),Ee=window.devicePixelRatio||1,Xe=Math.floor(ce*Ee),ze=Math.floor(N*Ee);(H.width!==Xe||H.height!==ze)&&(H.width=Xe,H.height=ze);const R=H.getContext("2d");if(!R)return;const tt=Math.max(1,ne,me),we=Math.min(1,Math.max(0,ne/tt)),Pe=Math.min(1,Math.max(0,me/tt)),st=ne-me,de=ne>0?me/ne*100:me>0?100:0,vt=8,pe=vt,je=34,Te=ce-vt*2,nt=22,qe=Number.parseInt(H.dataset.hoverX??"-1",10),at=(Oe,_e,Ae,Re,rt)=>{R.beginPath(),R.moveTo(Oe+rt,_e),R.lineTo(Oe+Ae-rt,_e),R.quadraticCurveTo(Oe+Ae,_e,Oe+Ae,_e+rt),R.lineTo(Oe+Ae,_e+Re-rt),R.quadraticCurveTo(Oe+Ae,_e+Re,Oe+Ae-rt,_e+Re),R.lineTo(Oe+rt,_e+Re),R.quadraticCurveTo(Oe,_e+Re,Oe,_e+Re-rt),R.lineTo(Oe,_e+rt),R.quadraticCurveTo(Oe,_e,Oe+rt,_e),R.closePath()},$t=Oe=>{R.setTransform(1,0,0,1,0,0),R.clearRect(0,0,H.width,H.height),R.scale(Ee,Ee),at(pe,je,Te,nt,8),R.fillStyle=p,R.fill(),R.strokeStyle=_,R.lineWidth=1,R.stroke();const _e=[.6,.25,.15],Ae=[.1,.16,.24];let Re=0;_e.forEach((At,M)=>{const L=Te*At;R.save(),R.globalAlpha=Ae[M]??.1,R.fillStyle=d,R.fillRect(pe+Re,je,L,nt),R.restore(),Re+=L});const rt=ne>0&&me>ne?K:O,Lt=Te*Pe*Oe;at(pe,je+3,Lt,nt-6,6),R.fillStyle=rt,R.fill(),Le&&(R.save(),R.strokeStyle=rt,R.lineWidth=1.5,R.globalAlpha=.8,at(pe-1,je+2,Math.max(2,Lt+2),nt-4,7),R.stroke(),R.restore());const ln=pe+Te*we;R.strokeStyle=f,R.lineWidth=Le?3:2,R.beginPath(),R.moveTo(ln,je-3),R.lineTo(ln,je+nt+3),R.stroke(),Le&&qe>=pe&&qe<=pe+Te&&(R.save(),R.strokeStyle=f,R.globalAlpha=.35,R.lineWidth=1,R.beginPath(),R.moveTo(qe,je-8),R.lineTo(qe,je+nt+8),R.stroke(),R.restore()),R.fillStyle=f,R.font="600 12px system-ui, -apple-system, sans-serif",R.textAlign="left",R.textBaseline="top",R.fillText(Q,pe,10);const Wt=de*Oe;if(R.fillStyle=de>100?K:de<100?O:d,R.textAlign="right",R.fillText(`${Wt.toFixed(0)}%`,pe+Te,10),R.fillStyle=d,R.font="500 11px system-ui, -apple-system, sans-serif",R.textAlign="left",R.textBaseline="top",R.fillText(`Ist ${w(me)} · Ziel ${w(ne)} · Δ ${st>=0?"+":""}${w(st)}`,pe,64),Le){const At=`Nutzung ${de.toFixed(1)}%`;R.font="600 11px system-ui, -apple-system, sans-serif";const M=8,L=5,oe=22,Gt=R.measureText(At).width+M*2,va=Number.isFinite(qe)?qe-Gt/2:pe+Te-Gt,Rn=Math.min(pe+Te-Gt,Math.max(pe,va)),jt=je-oe-8;R.save(),R.fillStyle=f,R.globalAlpha=.92,at(Rn,jt,Gt,oe,6),R.fill(),R.restore(),R.fillStyle=p,R.textAlign="left",R.textBaseline="top",R.fillText(At,Rn+M,jt+L)}},Tt=dt.get(H);if(Tt&&window.cancelAnimationFrame(Tt),!He){$t(1);return}const Ct=performance.now(),Ot=Oe=>{const _e=Oe-Ct,Ae=Math.min(1,_e/G);if($t(U(Ae)),Ae<1){const Re=window.requestAnimationFrame(Ot);dt.set(H,Re);return}dt.delete(H)},mt=window.requestAnimationFrame(Ot);dt.set(H,mt)})}function Qt(){P.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),p=l.querySelector("[data-year-trend-active-net]"),_=l.querySelector("[data-year-trend-active-income]"),O=l.querySelector("[data-year-trend-active-expense]"),K=l.querySelector("[data-year-trend-active-delta]"),N=l.querySelector("[data-year-trend-live]");if(!d||!p||!_||!O||!K)return;const G=(ne,me)=>{ne.classList.remove("danger","budget-under");const Q=me<0?"danger":me>0?"budget-under":"";Q&&ne.classList.add(Q)},U=ne=>{const me=ne.dataset.monthLabel??"-",Q=Number.parseInt(ne.dataset.netCents??"0",10),Le=Number.parseInt(ne.dataset.actualNetCents??"0",10),ue=Number.parseInt(ne.dataset.incomeCents??"0",10),He=Number.parseInt(ne.dataset.expenseCents??"0",10),ce=Number.parseInt(ne.dataset.deltaCents??"0",10);d.textContent=me,p.textContent=w(Q),_.textContent=w(ue),O.textContent=w(He),K.textContent=`${ce>=0?"+":""}${w(ce)}`,G(p,Q),G(K,ce),f.forEach(Ee=>{const Xe=Ee===ne;Ee.classList.toggle("is-active",Xe),Ee.setAttribute("aria-pressed",String(Xe))}),N&&(N.textContent=`${me}: Kalkulierter Saldo ${w(Q)}, Ist-Saldo ${w(Le)}, Einkommen ${w(ue)}, Ausgaben ${w(He)}`)};f.forEach(ne=>{const me=()=>{U(ne)};ne.addEventListener("mouseenter",me),ne.addEventListener("focus",me),ne.addEventListener("click",me)});const H=f.find(ne=>ne.dataset.pointDefault==="1")??f[f.length-1];H&&U(H)})}function Qn(o){if(o==="dashboard"){const l=h.years.slice().sort((d,p)=>p.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ae()}function Ea(){h.topModal&&(h.topModal=null,ae())}function Zn(){h.showUnexportedChangeLogModal=!0,ae()}function ea(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ae())}function Tn(){ie||(ie=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),ea();return}h.topModal&&(o.preventDefault(),Ea())}}))}function Ga(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Nt(){const o=P.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",Ga())}function ht(){if(bt)return;bt=!0;const o=()=>{Nt(),ft()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function _a(){if(se&&document.body.contains(se))return se;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return se=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),se=l,l}function gr(){if(be&&document.body.contains(be))return be;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return be=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),be=l,l}function Ja(){if(We&&document.body.contains(We))return We;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return We=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),We=l,l}function Vt(){if(!be){lt=null;return}be.innerHTML="",lt=null}function Yt(){We&&(We.innerHTML="")}function cn(o,l,f){const d=new Date,p=d.getFullYear(),_=d.getMonth()+1,O=d.getDate(),K=new Date(o,l,0).getDate();if(o<p||o===p&&l<_)return{occurrences:0,remainingDays:0};const N=o===p&&l===_?Math.min(O,K):1,G=Math.max(0,K-N+1);let U=0;for(let H=N;H<=K;H+=1)new Date(o,l-1,H).getDay()===f&&(U+=1);return{occurrences:U,remainingDays:G}}async function br(o,l){const f=Ve();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await D(`Wocheneinkauf geplant: ${os.find(d=>d.value===o)?.label??"Wochentag"} mit ${w(f.weeklyShoppingEstimateCents)} €`),ae())}function Ma(){const o=Ve(),l=pt();if(!o||!l)return;const f=Ja();Yt();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,p=o.weeklyShoppingEstimateCents??0,_=l.year,O=o.month,K=Fn(_,O),N=K?Sn(K):{foodCents:0},G=K?K.foodBudgetCents??0:0,U=N.foodCents,H=G-U;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${os.map(de=>`<option value="${de.value}" ${de.value===d?"selected":""}>${de.label}</option>`).join("")}
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
    `;const ne=f.querySelector(".weekly-shopping-modal-backdrop"),me=f.querySelector("#weekly-shopping-weekday"),Q=f.querySelector("#weekly-shopping-estimate"),Le=f.querySelector("#weekly-shopping-occurrences"),ue=f.querySelector("#weekly-shopping-total"),He=f.querySelector("#weekly-shopping-rest-before"),ce=f.querySelector("#weekly-shopping-rest-after"),Ee=f.querySelector("#weekly-shopping-days-left"),Xe=f.querySelector("#weekly-shopping-per-day"),ze=f.querySelector("#weekly-shopping-cancel"),R=f.querySelector("#weekly-shopping-save");function tt(){const de=Number.parseInt(me?.value??"1",10);return Number.isInteger(de)&&de>=0&&de<=6?de:1}function we(){return Math.max(0,Ke(Q?.value??"0"))}function Pe(){const de=tt(),vt=we(),{occurrences:pe,remainingDays:je}=cn(_,O,de),Te=pe*vt,nt=H-Te,qe=je>0?Math.trunc(nt/je):0;Le&&(Le.textContent=`${pe}`),ue&&(ue.textContent=`${w(Te)} €`),He&&(He.textContent=`${w(H)} €`),ce&&(ce.textContent=`${w(nt)} €`,ce.className=nt<0?"danger":nt>0?"budget-under":""),Ee&&(Ee.textContent=`${je}`),Xe&&(Xe.textContent=`${w(qe)} €`,Xe.className=qe<0?"danger":qe>0?"budget-under":"")}async function st(){await br(tt(),we()),Yt()}ze?.addEventListener("click",()=>{Yt()}),R?.addEventListener("click",async()=>{await st()}),me?.addEventListener("change",()=>{Pe()}),Q?.addEventListener("input",()=>{Pe()}),Q?.addEventListener("keydown",async de=>{if(de.key==="Escape"){de.preventDefault(),Yt();return}de.key==="Enter"&&(de.preventDefault(),await st())}),ne?.addEventListener("click",de=>{de.target===ne&&Yt()}),window.setTimeout(()=>{Q?.focus(),Q?.select(),Pe()},0)}function ta(o,l){let f=o;const d=l.min;if(d){const _=Number.parseFloat(d);if(!Number.isNaN(_)){const O=Math.round(_*100);f=Math.max(f,O)}}const p=l.max;if(p){const _=Number.parseFloat(p);if(!Number.isNaN(_)){const O=Math.round(_*100);f=Math.min(f,O)}}return f}function wt(o){if(o.disabled)return;const l=gr();Vt(),lt=o;const f=Ke(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
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
    `;const p=l.querySelector(".amount-modal-backdrop"),_=l.querySelector("#amount-modal-delta"),O=l.querySelector("#amount-modal-next-delta"),K=l.querySelector("#amount-modal-next-overwrite"),N=l.querySelector("#amount-modal-cancel"),G=l.querySelector("#amount-modal-overwrite"),U=l.querySelector("#amount-modal-apply");function H(){const ue=Ke(_?.value??"0");return ta(f+ue,o)}function ne(){const ue=Ke(_?.value??"0");return ta(ue,o)}function me(){O&&(O.textContent=`${w(H())} €`),K&&(K.textContent=`${w(ne())} €`)}function Q(){const ue=lt;if(!ue){Vt();return}const He=H();Vt(),ue.value=gt(He),ue.dispatchEvent(new Event("change",{bubbles:!0}))}function Le(){const ue=lt;if(!ue){Vt();return}const He=ne();Vt(),ue.value=gt(He),ue.dispatchEvent(new Event("change",{bubbles:!0}))}N?.addEventListener("click",()=>{Vt()}),G?.addEventListener("click",()=>{Le()}),U?.addEventListener("click",()=>{Q()}),_?.addEventListener("input",()=>{me()}),_?.addEventListener("keydown",ue=>{if(ue.key==="Escape"){ue.preventDefault(),Vt();return}ue.key==="Enter"&&(ue.preventDefault(),Q())}),p?.addEventListener("click",ue=>{ue.target===p&&Vt()}),window.setTimeout(()=>{_?.focus(),_?.select(),me()},0)}function Ce(o,l="success"){const f=_a(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const p=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},p)}function zt(){return new Date().getMonth()+1}function Ut(){return new Date().getFullYear()}function na(o){const l=Ut(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function qt(){return new Date().toISOString().slice(0,10)}function yr(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function Mt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Ha(){const o=localStorage.getItem(Ne);return o&&is(o)?o:"light"}function On(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Ne,o)}function $n(){return localStorage.getItem(J)==="1"}function aa(o){localStorage.setItem(J,o?"1":"0")}function Cr(){const o=localStorage.getItem(ge);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function te(o){localStorage.setItem(ge,JSON.stringify(o.slice(-200)))}function Xa(){const o=localStorage.getItem(re);if(!o)return null;const l=o.trim();return l||null}function ke(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(xe);if(!l)return o;try{const f=JSON.parse(l),d=p=>typeof p=="number"&&Number.isFinite(p)?p:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function An(o){localStorage.setItem(xe,JSON.stringify(o))}function Qa(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function dn(o){const l=o.trim();l&&localStorage.setItem(re,l)}async function xr(){_a(),On(Ha()),h.hasUnexportedChanges=$n(),h.unexportedChangeLog=Cr(),h.lastBackupFileName=Xa(),h.recurringBudgetDefaults=ke(),Tn(),ht();const[o,l,f]=await Promise.all([Xn(),Tr(),Ar()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Pa(h.years),Za(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await sa(h.years),o.length>0&&(h.selectedYear=na(o),h.selectedMonth=zt()),ae()}function Pa(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const p=Number(d.weeklyShoppingWeekday);Number.isInteger(p)&&p>=0&&p<=6?d.weeklyShoppingWeekday=p:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(p=>{const _=l(p.incomeSource);if(!_){const{incomeSource:O,...K}=p;return K}return{...p,incomeSource:_}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((p,_)=>p+_.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((p,_)=>p+_.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Ta(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function ra(o){return o==="fresh"||o==="salary"||!o}async function sa(o){for(const l of o)await Hn(l)}function pt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ve(){const o=pt();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function Fn(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function Sn(o){const l=o.days.reduce((K,N)=>K+N.foodCents,0),f=o.days.reduce((K,N)=>K+N.goingOutCents,0),d=o.fixedCosts.reduce((K,N)=>K+N.actualCents,0),p=o.variableCosts.reduce((K,N)=>K+N.amountCents,0)+o.variablePositions.reduce((K,N)=>K+N.actualCents,0),_=o.miscCosts.reduce((K,N)=>K+N.amountCents,0),O=l+f+d+p+_;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:_,totalCents:O}}function Zt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((O,K)=>O+K.plannedCents,0),p=o.variablePositions.reduce((O,K)=>O+K.budgetCents,0),_=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??p)+_}function ot(o){return o.months.reduce((l,f)=>{const d=Sn(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function fn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:Sn(l)}))}function Dn(o){const l=o.months.reduce((O,K)=>O+(K.foodBudgetCents??0),0),f=o.months.reduce((O,K)=>O+(K.goingOutBudgetCents??0),0),d=o.months.reduce((O,K)=>O+(K.fixedBudgetCents??K.fixedCosts.reduce((N,G)=>N+G.plannedCents,0)),0),p=o.months.reduce((O,K)=>O+(K.variableBudgetCents??K.variablePositions.reduce((N,G)=>N+G.budgetCents,0)),0),_=o.months.reduce((O,K)=>O+(K.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:_,totalCents:l+f+d+p+_}}function hn(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,p)=>d+(ra(p.incomeSource)?p.amountCents:0),0),0)}function In(o,l){const f=o.months.slice().sort((d,p)=>d.month-p.month)[0];return f?l.get(he(o.year,f.month))?.carriedFromPreviousCents??0:0}function ia(){const o=h.years.slice().sort((d,p)=>d.year-p.year).flatMap(d=>d.months.slice().sort((p,_)=>p.month-_.month).map(p=>({year:d.year,month:p}))),l=new Map;let f=0;return o.forEach(({year:d,month:p},_)=>{const O=p.carryoverOverrideCents,K=typeof O=="number",N=K?O:f,G=_>0||K,U=p.incomes.reduce((Q,Le)=>Q+(ra(Le.incomeSource)?Le.amountCents:0),0),H=Zt(p),ne=U+N,me=ne-H;l.set(he(d,p.month),{hasPreviousMonth:G,carriedFromPreviousCents:N,recordedIncomeCents:U,effectiveIncomeCents:ne,plannedBudgetCents:H,netCents:me}),f=me}),l}function Ze(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function oa(o){return`${o>0?"+":""}${w(o)}`}function en(o,l){const f=o-l,d=Ze(l,o);return`${w(o)} <span class="eval-diff ${d}">(Δ ${oa(f)})</span>`}function kt(o,l){const f=o!==null,d=f?o-l:null,p=f?Ze(l,o):"";return`<div class="column-overview">
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
    </div>`}async function X(o){if(await Ps(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=ts(o,h.fixedTemplates,h.fixedTemplateVersion);Qa(f),Kn(f),await Hn(f),h.years=await Xn(),tn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=zt(),Ce(`Jahr ${o} wurde angelegt.`),ae()}function tn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,aa(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f={id:It("change"),timestampIso:new Date().toISOString(),message:`${o} (${l})`};h.unexportedChangeLog=[...h.unexportedChangeLog,f].slice(-200),te(h.unexportedChangeLog)}function pn(o){const l=o.trim();l&&(h.lastBackupFileName=l,dn(l))}function Nn(o){h.hasUnexportedChanges=!1,aa(!1),h.unexportedChangeLog=[],te([]),h.showUnexportedChangeLogModal=!1,pn(o)}async function D(o){const l=pt();l&&(await Hn(l),h.years=await Xn(),tn(o))}async function yt(o){for(const l of h.years)await Hn(l);h.years=await Xn(),tn(o)}function he(o,l){return o*100+l}function qn(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Oa(o,l){const f=qn(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(_=>_.month===f.month);!d||d.variablePositions.some(_=>_.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:It("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],ut(d))}function Kn(o){h.annualVariableFixedTemplates.forEach(l=>{Oa(l,o)})}function Za(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const p=d.variablePositions.some(O=>typeof O.autoAnnualTemplateId=="string"),_=d.fixedCosts.some(O=>typeof O.autoAnnualTemplateId=="string");p&&(d.variablePositions=d.variablePositions.filter(O=>O.autoAnnualTemplateId?l.has(O.autoAnnualTemplateId):!0),ut(d)),_&&(d.fixedCosts=d.fixedCosts.filter(O=>!O.autoAnnualTemplateId),nn(d))}),Kn(f)})}function nn(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function ut(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function Bn(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function la(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Bn());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function ua(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{if(he(d.year,p.month)<f)return;p.fixedCosts.some(O=>O.templateId===o.id)||(p.fixedCosts.push({id:It("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),nn(p))})})}function Me(o,l,f){const d=he(f.year,f.month);h.years.forEach(p=>{p.months.forEach(_=>{he(p.year,_.month)<d||(_.fixedCosts=_.fixedCosts.map(O=>O.templateId!==l.id?O:{...O,name:l.name,plannedCents:l.plannedCents,actualCents:O.actualCents===o.plannedCents?l.plannedCents:O.actualCents}),nn(_))})})}function et(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{he(d.year,p.month)<f||(p.fixedCosts=p.fixedCosts.filter(_=>_.templateId!==o),nn(p))})})}async function wr(o,l){const f=o.trim();if(!f)return;const d=la();if(!d)return;const p=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const _=h.fixedTemplates.find(K=>K.id===h.editingFixedTemplateId);if(!_)return;const O={..._,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(K=>K.id===h.editingFixedTemplateId?O:K),Me(_,O,d)}else{const _={id:It("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,_],ua(_,d)}h.fixedTemplateVersion=await Or(h.fixedTemplates),h.editingFixedTemplateId=null,await yt(p?`Fixkosten-Vorlage aktualisiert: ${f} (${w(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${w(l)} €)`),Ce(p?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function ca(o){h.editingFixedTemplateId=o,ae()}function da(){h.editingFixedTemplateId=null,ae()}async function fa(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=la();if(!f)return;const d=h.fixedTemplates.find(p=>p.id===o);h.fixedTemplates=h.fixedTemplates.filter(p=>p.id!==o),et(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Or(h.fixedTemplates),await yt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),Ce("Fixkosten-Vorlage wurde gelöscht."),ae()}async function kr(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const p=qn(l);if(!p){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const _={id:It("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,_],h.years.forEach(O=>{Oa(_,O)}),h.annualVariableFixedTemplateVersion=await Fr(h.annualVariableFixedTemplates),await yt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${w(f)} €, jährlich in ${Be(p.month)})`),Ce("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function an(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(p=>{p.variablePositions=p.variablePositions.filter(_=>_.autoAnnualTemplateId!==o),ut(p),p.fixedCosts=p.fixedCosts.filter(_=>_.autoAnnualTemplateId!==o),nn(p)})}),h.annualVariableFixedTemplateVersion=await Fr(h.annualVariableFixedTemplates),await yt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),Ce("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function vn(o,l,f){const d=Ve();d&&(d.days=d.days.map(p=>p.isoDate===o?{...p,[l]:f}:p),await D(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${w(f)} €`),ae())}async function rn(o,l){const f=Ve();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,actualCents:l}:p),await D(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function ha(o,l){const f=Ve();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,plannedCents:l}:p),nn(f),await D(`Fixkosten-Budget angepasst: ${d.name} auf ${w(l)} €`),ae())}async function $r(o,l){const f=Ve();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const p={id:It("fixed"),templateId:It("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[p,...f.fixedCosts],nn(f),await D(`Fixkosten-Position hinzugefügt: ${d} (${w(l)} €)`),Ce("Fixkosten-Position wurde hinzugefügt."),ae()}async function sn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Ve();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(p=>p.id!==o),nn(f),await D(`Fixkosten-Position gelöscht: ${d.name}`),Ce("Fixkosten-Position wurde gelöscht."),ae())}async function er(o){await Pt("fixedBudgetCents",o,"Fixkosten")}async function mn(o){await Pt("foodBudgetCents",o,"Essen")}async function tr(o){await Pt("goingOutBudgetCents",o,"Ausgehen")}async function Aa(o){await Pt("miscBudgetCents",o,"Sonstiges")}async function Ye(o){await Pt("variableBudgetCents",o,"Variable Kosten")}async function Pt(o,l,f){const d=Ve(),p=h.selectedYear;if(!d||!p||d[o]===l)return;if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const O=he(p,h.selectedMonth);h.years.forEach(K=>{K.months.forEach(N=>{he(K.year,N.month)<=O||(N[o]=l)})}),h.recurringBudgetDefaults[o]=l,An(h.recurringBudgetDefaults),await yt(`Budget "${f}" auf ${w(l)} € gesetzt (inkl. zukünftiger Monate)`),Ce(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ae();return}await D(`Budget "${f}" auf ${w(l)} € gesetzt`),ae()}async function Kt(o){const l=Ve();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await D(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${w(o)} € gesetzt`),ae())}async function Fa(o,l,f){const d=Ve(),p=h.selectedYear;if(!d||!p)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:It("varpos"),name:_,budgetCents:l,actualCents:0},...d.variablePositions],ut(d),f){const O=he(p,h.selectedMonth);h.years.forEach(K=>{K.months.forEach(N=>{he(K.year,N.month)<=O||(N.variablePositions=[{id:It("varpos"),name:_,budgetCents:l,actualCents:0},...N.variablePositions],ut(N))})}),await yt(`Variable Position hinzugefügt: ${_} (${w(l)} €) für zukünftige Monate`),Ce("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await D(`Variable Position hinzugefügt: ${_} (${w(l)} €)`),Ce("Variable Position wurde hinzugefügt."),ae()}async function En(o,l){const f=Ve();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,actualCents:l}:p),await D(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function pa(o,l){const f=Ve();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,budgetCents:l}:p),ut(f),await D(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(l)} €`),ae()}async function Da(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Ve(),d=h.selectedYear;if(!f||!d)return;const p=f.variablePositions.find(N=>N.id===o);if(!p)return;const _=he(d,h.selectedMonth),K=h.years.some(N=>N.months.some(G=>he(N.year,G.month)>_&&G.variablePositions.some(U=>U.name===p.name&&U.budgetCents===p.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(N=>N.id!==o),ut(f),K){h.years.forEach(N=>{N.months.forEach(G=>{he(N.year,G.month)<=_||(G.variablePositions=G.variablePositions.filter(U=>!(U.name===p.name&&U.budgetCents===p.budgetCents)),ut(G))})}),await yt(`Variable Position gelöscht: ${p.name} (inkl. zukünftiger Monate)`),Ce("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await D(`Variable Position gelöscht: ${p.name}`),Ce("Variable Position wurde gelöscht."),ae()}async function Ia(o){const l=Ve(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(U=>U.id===o);if(!d)return;const p={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let _=h.years.find(U=>U.year===p.year);if(!_){const U=ts(p.year,h.fixedTemplates,h.fixedTemplateVersion);Qa(U),Kn(U),await Hn(U),h.years=[...h.years,U].sort((H,ne)=>H.year-ne.year),_=U}const O=_.months.find(U=>U.month===p.month);if(!O)return;const K=O.variablePositions.some(U=>U.id===d.id||U.name===d.name&&U.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(U=>U.id!==o),ut(l),!K){const H=O.variablePositions.some(ne=>ne.id===d.id)?{...d,id:It("varpos")}:d;O.variablePositions=[H,...O.variablePositions],ut(O)}const N=`${Be(p.month)} ${p.year}`,G=`Variable Position verschoben: ${d.name} → ${N}`;if(p.year===f)await D(G);else{const U=pt();if(!U)return;await Hn(U),await Hn(_),h.years=await Xn(),Pa(h.years),tn(G)}Ce(K?`Position entfernt (im Folgemonat schon vorhanden: ${N}).`:`Position in den Folgemonat verschoben: ${N}.`),ae()}async function on(o,l,f){const d=Ve(),p=h.selectedYear;if(!d||!p)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const O=ns(_,l);if(d.miscCosts=[O,...d.miscCosts],f){const K=he(p,h.selectedMonth);h.years.forEach(N=>{N.months.forEach(G=>{he(N.year,G.month)<=K||(G.miscCosts=[ns(_,l),...G.miscCosts])})}),await yt(`Sonstige Position hinzugefügt: ${_} (${w(l)} €) für zukünftige Monate`),Ce("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await D(`Sonstige Position hinzugefügt: ${_} (${w(l)} €)`),Ce("Sonstige Position wurde hinzugefügt."),ae()}async function nr(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Ve(),d=h.selectedYear;if(!f||!d)return;const p=f.miscCosts.find(N=>N.id===o);if(!p)return;const _=he(d,h.selectedMonth),K=h.years.some(N=>N.months.some(G=>he(N.year,G.month)>_&&G.miscCosts.some(U=>U.description===p.description&&U.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(N=>N.id!==o),K){h.years.forEach(N=>{N.months.forEach(G=>{he(N.year,G.month)<=_||(G.miscCosts=G.miscCosts.filter(U=>!(U.description===p.description&&U.amountCents===p.amountCents)))})}),await yt(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),Ce("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await D(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €)`),Ce("Sonstige Position wurde gelöscht."),ae()}async function Ln(o,l,f,d){const p=Ve(),_=h.selectedYear;if(!p||!_)return;const O=o.trim();if(!O){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const K=as(O,l,f);if(p.incomes=[K,...p.incomes],d){const N=he(_,h.selectedMonth);h.years.forEach(G=>{G.months.forEach(U=>{he(G.year,U.month)<=N||(U.incomes=[as(O,l,f),...U.incomes])})}),await yt(`Einkommen hinzugefügt: ${O} (${w(l)} €, ${Ta(f)}) für zukünftige Monate`),Ce("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await D(`Einkommen hinzugefügt: ${O} (${w(l)} €, ${Ta(f)})`),Ce("Einkommen wurde hinzugefügt."),ae()}async function ar(o,l){const f=Ve();if(!f)return;const d=f.incomes.find(p=>p.id===o);d&&(f.incomes=f.incomes.map(p=>{if(p.id!==o)return p;if(!l){const{incomeSource:_,...O}=p;return O}return{...p,incomeSource:l}}),await D(`Einkommensart angepasst: ${d.description} → ${Ta(l)}`),ae())}async function fe(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Ve(),d=h.selectedYear;if(!f||!d)return;const p=f.incomes.find(N=>N.id===o);if(!p)return;const _=he(d,h.selectedMonth),K=h.years.some(N=>N.months.some(G=>he(N.year,G.month)>_&&G.incomes.some(U=>U.description===p.description&&U.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(N=>N.id!==o),K){h.years.forEach(N=>{N.months.forEach(G=>{he(N.year,G.month)<=_||(G.incomes=G.incomes.filter(U=>!(U.description===p.description&&U.amountCents===p.amountCents)))})}),await yt(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),Ce("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await D(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €)`),Ce("Einkommen wurde gelöscht."),ae()}async function rr(){const o=await Ts(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${qt()}-${yr()}.json`,p=document.createElement("a");p.href=f,p.download=d,p.click(),URL.revokeObjectURL(f),Nn(d),ae(),Ce("Backup wurde exportiert.")}async function sr(o){const l=await o.text(),f=JSON.parse(l);await Os(f);const[d,p,_]=await Promise.all([Xn(),Tr(),Ar()]);h.years=d,h.annualVariableFixedTemplates=_.templates,h.annualVariableFixedTemplateVersion=_.version,Pa(h.years),Za(h.years),h.fixedTemplates=p.templates,h.fixedTemplateVersion=p.version,await sa(h.years),h.selectedYear=na(d),h.selectedMonth=zt(),Nn(o.name),Ce("Backup wurde importiert."),ae()}function ae(){const o=pt(),l=Ve(),f=qt(),d=l?Sn(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},p=o?ot(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},_=o?fn(o):[],O=l?l.foodBudgetCents??0:0,K=l?l.goingOutBudgetCents??0:0,N=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,B)=>r+B.plannedCents,0):0,G=l?l.variableBudgetCents??l.variablePositions.reduce((r,B)=>r+B.budgetCents,0):0,U=l?l.miscBudgetCents??0:0,H=o?o.months.reduce((r,B)=>r+(B.foodBudgetCents??0),0):0,ne=o?o.months.reduce((r,B)=>r+(B.goingOutBudgetCents??0),0):0,me=o?o.months.reduce((r,B)=>r+(B.fixedBudgetCents??B.fixedCosts.reduce((V,ee)=>V+ee.plannedCents,0)),0):0,Q=o?o.months.reduce((r,B)=>r+(B.variableBudgetCents??B.variablePositions.reduce((V,ee)=>V+ee.budgetCents,0)),0):0,Le=o?o.months.reduce((r,B)=>r+(B.miscBudgetCents??0),0):0,ue=l?l.incomes.reduce((r,B)=>r+(ra(B.incomeSource)?B.amountCents:0),0):0,He=l?l.incomes.reduce((r,B)=>r+(B.incomeSource==="salary"?B.amountCents:0),0):0,ce=ia(),Ee=o?ce.get(he(o.year,h.selectedMonth)):void 0,Xe=o?o.months.slice().sort((r,B)=>r.month-B.month)[0]:void 0,ze=Ee?.carriedFromPreviousCents??0,R=Ee?.hasPreviousMonth??!1,tt=Ee?.effectiveIncomeCents??ue,we=l?Zt(l):0,Pe=Ee?.netCents??ue-we,st=tt-d.totalCents,de=He-d.totalCents,vt=d.totalCents>0?`${(He/d.totalCents*100).toFixed(1)} %`:"-",pe=ze<0?"danger":ze>0?"budget-under":"",je=Pe<0?"danger":Pe>0?"budget-under":"",Te=st<0?"danger":st>0?"budget-under":"",nt=o?o.months.reduce((r,B)=>r+B.incomes.reduce((V,ee)=>V+(ra(ee.incomeSource)?ee.amountCents:0),0),0):0,qe=o?o.months.reduce((r,B)=>r+B.incomes.reduce((V,ee)=>V+(ee.incomeSource==="salary"?ee.amountCents:0),0),0):0,at=o&&Xe?ce.get(he(o.year,Xe.month))?.carriedFromPreviousCents??0:0,$t=nt+at,Tt=$t-p.totalCents,Ct=qe-p.totalCents,Ot=p.totalCents>0?`${(qe/p.totalCents*100).toFixed(1)} %`:"-",mt=at<0?"danger":at>0?"budget-under":"",Oe=Tt<0?"danger":Tt>0?"budget-under":"",_e=O+K+N+G+U,Ae=O+K,Re=d.foodCents+d.goingOutCents,rt=Ae-Re,Lt=Ze(Re,Ae),ln=H+ne+me+Q+Le,Wt=tt-_e,At=$t-ln,M=_e-d.totalCents,L=ln-p.totalCents,oe=r=>r<0?"danger":r>0?"budget-under":"",gn=(r,B)=>B<=0?"muted":r>=B?"budget-under":"danger",Gt=gn(He,d.totalCents),va=gn(qe,p.totalCents),Rn=M+Wt+st+de,jt=L+At+Tt+Ct,Fe=(r,B)=>{if(B<=0)return"0%";const ee=Math.max(0,r)/B*100;return`${Math.min(100,Math.max(0,ee)).toFixed(1)}%`},Na=(r,B)=>{if(B<=0)return r>0?100:0;const V=Math.max(0,r)/B*100;return Math.max(0,V)},ma=[{label:"Essen",budgetCents:O,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:K,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:N,actualCents:d.fixedCents},{label:"Variable",budgetCents:G,actualCents:d.variableCents},{label:"Sonstige",budgetCents:U,actualCents:d.miscCents}];Math.max(1,...ma.flatMap(r=>[r.budgetCents,r.actualCents]));const ga=(r,B)=>B<=0?"bar-positive":r<=0||B>r?"bar-negative":"bar-positive",it=[{label:"Einkommen gesamt",valueCents:tt,className:"bar-income"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:st,className:st<0?"bar-negative":"bar-positive"}],Vn=Math.max(1,...it.map(r=>Math.abs(r.valueCents))),Yn=o?o.months.slice().sort((r,B)=>r.month-B.month).map(r=>{const B=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,ee=r.fixedBudgetCents??r.fixedCosts.reduce((Rt,Je)=>Rt+Je.plannedCents,0),Se=r.variableBudgetCents??r.variablePositions.reduce((Rt,Je)=>Rt+Je.budgetCents,0),Ge=r.miscBudgetCents??0,Et=B+V+ee+Se+Ge;return{month:r.month,foodBudgetCents:B,goingOutBudgetCents:V,fixedBudgetCents:ee,variableBudgetCents:Se,miscBudgetCents:Ge,totalBudgetCents:Et}}):[],Ft=new Map(Yn.map(r=>[r.month,r])),St=r=>{if(r.length===0)return null;const B=Math.min(...r),V=Math.max(...r),ee=Math.round(r.reduce((Se,Ge)=>Se+Ge,0)/r.length);return{min:B,avg:ee,max:V}},qa=_.map(r=>r.summary.foodCents),Ka=_.map(r=>r.summary.goingOutCents),zn=_.map(r=>r.summary.fixedCents),ba=_.map(r=>r.summary.variableCents),un=_.map(r=>r.summary.miscCents),ya=_.map(r=>r.summary.totalCents),Ca=_.map(r=>o?ce.get(he(o.year,r.month))?.plannedBudgetCents??0:0),xa=_.map(r=>o?ce.get(he(o.year,r.month))?.netCents??0:0),Un=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((B,V)=>B+(V.incomeSource==="salary"?V.amountCents:0),0)])),La=_.map(r=>Un.get(r.month)??0),Jt={food:St(qa),goingOut:St(Ka),fixed:St(zn),variable:St(ba),misc:St(un),total:St(ya),salary:St(La),budget:St(Ca),net:St(xa)},ja=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Dt={food:qa.reduce((r,B)=>r+B,0),goingOut:Ka.reduce((r,B)=>r+B,0),fixed:zn.reduce((r,B)=>r+B,0),variable:ba.reduce((r,B)=>r+B,0),misc:un.reduce((r,B)=>r+B,0),total:ya.reduce((r,B)=>r+B,0),salary:La.reduce((r,B)=>r+B,0),budget:Ca.reduce((r,B)=>r+B,0)},Sr=ja.map(({key:r,label:B})=>{const V=Jt.food?.[r]??null,ee=Jt.goingOut?.[r]??null,Se=Jt.fixed?.[r]??null,Ge=Jt.variable?.[r]??null,Et=Jt.misc?.[r]??null,Rt=Jt.total?.[r]??null,Je=Jt.salary?.[r]??null,wn=Jt.budget?.[r]??null,kn=Jt.net?.[r]??null,_t=Gn=>Gn===null?"-":w(Gn);return`<tr>
                  <td><strong>${B}</strong></td>
                  <td>${_t(V)}</td>
                  <td>${_t(ee)}</td>
                  <td>${_t(Se)}</td>
                  <td>${_t(Ge)}</td>
                  <td>${_t(Et)}</td>
                  <td>${_t(Rt)}</td>
                  <td>${_t(Je)}</td>
                  <td>${_t(wn)}</td>
                  <td>${_t(kn)}</td>
                </tr>`}).join(""),Ra=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${w(Dt.food)}</td>
                  <td>${w(Dt.goingOut)}</td>
                  <td>${w(Dt.fixed)}</td>
                  <td>${w(Dt.variable)}</td>
                  <td>${w(Dt.misc)}</td>
                  <td>${w(Dt.total)}</td>
                  <td>${w(Dt.salary)}</td>
                  <td>${w(Dt.budget)}</td>
                </tr>`,wa=Math.max(1,..._.flatMap(r=>{const B=Ft.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,B??0]})),ir=Math.max(1,..._.flatMap(r=>{const B=Ft.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,ee=(B?.foodBudgetCents??0)+(B?.goingOutBudgetCents??0);return[V,ee]})),Va=Math.max(1,..._.flatMap(r=>{const B=Ft.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,B]})),or=Math.max(1,..._.flatMap(r=>{const B=Ft.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,B]})),Ya=Math.max(1,..._.flatMap(r=>{const B=Ft.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,B]})),lr=Ze(d.fixedCents,N),Br=Ze(d.foodCents,O),ur=Ze(d.goingOutCents,K),za=Ze(d.variableCents,G),cr=Ze(d.miscCents,U),_n=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,Er=h.hasUnexportedChanges,dr=h.unexportedChangeLog.slice().reverse(),_r=h.lastBackupFileName?Mt(h.lastBackupFileName):"-",ka={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},Ue=h.years.slice().sort((r,B)=>r.year-B.year),De=Ue.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??Ue[Ue.length-1]?.year??null,Qe=typeof De=="number"?Ue.find(r=>r.year===De):void 0,Mn=Qe?Qe.months.slice().sort((r,B)=>r.month-B.month):[],bn=Qe?ot(Qe):ka,yn=Qe?Dn(Qe):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},fr=Qe?hn(Qe):0,Cn=Qe?In(Qe,ce):0,Wn=fr+Cn,xn=Qe?Qe.months.reduce((r,B)=>r+Zt(B),0):0,Ht=Wn-xn,Ua=Wn-bn.totalCents,e=[{label:"Essen",budgetCents:yn.foodCents,actualCents:bn.foodCents},{label:"Ausgehen",budgetCents:yn.goingOutCents,actualCents:bn.goingOutCents},{label:"Fixkosten",budgetCents:yn.fixedCents,actualCents:bn.fixedCents},{label:"Variable",budgetCents:yn.variableCents,actualCents:bn.variableCents},{label:"Sonstige",budgetCents:yn.miscCents,actualCents:bn.miscCents}],t=Mn.map(r=>{const B=Qe?ce.get(he(Qe.year,r.month)):void 0,V=Sn(r),ee=r.incomes.reduce((Gn,hr)=>Gn+hr.amountCents,0),Se=B?.effectiveIncomeCents??ee,Ge=B?.plannedBudgetCents??Zt(r),Et=V.foodCents,Rt=V.goingOutCents,Je=Et+Rt,wn=V.totalCents,kn=Se-Ge,_t=Se-wn;return{month:r.month,foodCents:Et,goingOutCents:Rt,foodAndGoingOutCents:Je,effectiveIncomeCents:Se,plannedBudgetCents:Ge,actualCostCents:wn,plannedNetCents:kn,actualNetCents:_t}}),n=Math.max(1,...t.map(r=>r.actualCostCents)),a=Math.max(1,...t.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),s=Math.max(1,...t.map(r=>r.foodAndGoingOutCents)),i=Math.max(1,...t.map(r=>r.foodCents)),u=Math.max(1,...t.map(r=>r.goingOutCents)),c=t.map((r,B,V)=>{const ee=B>0?V[B-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Be(r.month),monthShortLabel:Be(r.month).slice(0,3),deltaCents:r.plannedNetCents-ee}}),v=c[c.length-1]??null,$=Math.min(0,...c.map(r=>r.plannedNetCents)),y=Math.max(0,...c.map(r=>r.plannedNetCents)),m=Math.max(1,y-$),C=720,x=320,g=18,b=18,S=38,E=56,k=C-E-b,T=x-g-S,A=r=>{if(c.length<=1)return E+k/2;const B=r/(c.length-1);return E+B*k},j=r=>g+(y-r)/m*T,I=c.map((r,B)=>{const V=A(B),ee=j(r.plannedNetCents);return{...r,x:V,y:ee,leftPercent:V/C*100,topPercent:ee/x*100}}),F=I.map((r,B)=>`${B===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),z=I.length>0?`${F} L ${I[I.length-1]?.x.toFixed(1)} ${(g+T).toFixed(1)} L ${I[0]?.x.toFixed(1)} ${(g+T).toFixed(1)} Z`:"",Y=5,q=Array.from({length:Y},(r,B)=>{const V=B/(Y-1),ee=y-V*m;return{valueCents:Math.round(ee/100)*100,y:j(ee)}}),W=j(0),ve=c[0]?.plannedNetCents??0,Z=(c[c.length-1]?.plannedNetCents??0)-ve,le=Z<0?"trend-badge-negative":Z>0?"trend-badge-positive":"trend-badge-neutral",Ie=Z<0?"↘":Z>0?"↗":"→",Bt=Z<0?"Abwärtstrend":Z>0?"Aufwärtstrend":"Seitwärts",$e=Ue.reduce((r,B)=>{const V=Dn(B);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),xt=Ue.reduce((r,B)=>{const V=ot(B);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Wa=Ue.reduce((r,B)=>r+hn(B),0),ds=Ue[0]?In(Ue[0],ce):0,Mr=Wa+ds,Ir=Mr-$e.totalCents,Nr=Mr-xt.totalCents,qr=[{label:"Essen",budgetCents:$e.foodCents,actualCents:xt.foodCents},{label:"Ausgehen",budgetCents:$e.goingOutCents,actualCents:xt.goingOutCents},{label:"Fixkosten",budgetCents:$e.fixedCents,actualCents:xt.fixedCents},{label:"Variable",budgetCents:$e.variableCents,actualCents:xt.variableCents},{label:"Sonstige",budgetCents:$e.miscCents,actualCents:xt.miscCents}],Kr=Math.max(1,...qr.flatMap(r=>[r.budgetCents,r.actualCents])),$a=Ue.map(r=>{const B=ot(r),V=Dn(r),ee=hn(r),Se=r.months.reduce((Rt,Je)=>Rt+Je.incomes.reduce((wn,kn)=>wn+(kn.incomeSource==="salary"?kn.amountCents:0),0),0),Ge=In(r,ce),Et=ee+Ge;return{year:r.year,salaryIncomeCents:Se,budgetTotalCents:V.totalCents,actualTotalCents:B.totalCents,effectiveIncomeCents:Et,plannedNetCents:Et-V.totalCents,actualNetCents:Et-B.totalCents}}),Lr=Math.max(1,...$a.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),fs=Math.max(1,...$a.map(r=>r.actualTotalCents)),hs=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${Ue.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${Ue.map(r=>`<option value="${r.year}" ${r.year===De?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${Qe?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w(Wn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(xn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(bn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${oe(Ht)}">${w(Ht)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${oe(Ua)}">${w(Ua)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Ie}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${le}">${Ie} ${Bt}</span>
                    </div>
                  </header>
                  ${v?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Mt(v.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${oe(v.plannedNetCents)}" data-year-trend-active-net>${w(v.plannedNetCents)}</strong>
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
                                <strong class="${oe(v.deltaCents)}" data-year-trend-active-delta>${v.deltaCents>=0?"+":""}${w(v.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${C} ${x}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${Qe?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${q.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${E}" y1="${r.y.toFixed(1)}" x2="${C-b}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${E-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${w(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${E}" y1="${W.toFixed(1)}" x2="${C-b}" y2="${W.toFixed(1)}"></line>
                              ${z?`<path class="year-trend-area" d="${z}"></path>`:""}
                              ${F?`<path class="year-trend-line" d="${F}"></path>`:""}
                              ${I.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${x-12}" text-anchor="middle">${Mt(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${I.map((r,B)=>`
                                    <button
                                      class="year-trend-point-hit ${B===I.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${B===I.length-1?"1":"0"}"
                                      data-month-label="${Mt(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Mt(r.monthLabel)}: Kalkulierter Saldo ${w(r.plannedNetCents)}, Einkommen ${w(r.effectiveIncomeCents)}, Ausgaben ${w(r.actualCostCents)}"
                                      aria-pressed="${B===I.length-1?"true":"false"}"
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
                    ${e.map(r=>{const B=Na(r.actualCents,r.budgetCents),V=Math.min(100,B),ee=`${B.toFixed(0)}%`,Se=r.budgetCents-r.actualCents,Ge=Se<0?"danger":Se>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${ga(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${w(r.actualCents)} von ${w(r.budgetCents)}">
                              <span class="circle-chart-value">${ee}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${w(r.budgetCents)} / I ${w(r.actualCents)}</div>
                            <div class="circle-chart-meta ${Ge}">${Se>=0?"+":""}${w(Se)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(t.length,1)}, minmax(0, 1fr));">
                    ${t.map(r=>{const B=Fe(r.actualCostCents,n);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${w(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
                            <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                    ${t.map(r=>{const B=Fe(Math.abs(r.plannedNetCents),a),V=Fe(Math.abs(r.actualNetCents),a),ee=r.plannedNetCents<0?"bar-negative":"bar-positive",Se=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Be(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${ee}" style="width:${B}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${oe(r.plannedNetCents)}">B ${w(r.plannedNetCents)}</span>
                              <span class="${oe(r.actualNetCents)}">I ${w(r.actualNetCents)}</span>
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
                  ${t.map(r=>`<tr>
                        <td>${Be(r.month)}</td>
                        <td>${w(r.effectiveIncomeCents)}</td>
                        <td>${w(r.plannedBudgetCents)}</td>
                        <td>${w(r.actualCostCents)}</td>
                        <td class="${oe(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${oe(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${Ue.map(r=>`<option value="${r.year}" ${r.year===De?"selected":""}>${r.year}</option>`).join("")}
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
                    ${t.map(r=>{const B=Fe(r.foodAndGoingOutCents,s);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${w(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
                            <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(t.length,1)}, minmax(0, 1fr));">
                    ${t.map(r=>{const B=Fe(r.foodCents,i);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${w(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
                            <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(t.length,1)}, minmax(0, 1fr));">
                    ${t.map(r=>{const B=Fe(r.goingOutCents,u);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${w(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
                            <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w($e.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(xt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${oe(Ir)}">${w(Ir)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${oe(Nr)}">${w(Nr)}</div><div class="eval-value"></div></div>
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
                    ${qr.map(r=>{const B=Fe(r.budgetCents,Kr),V=Fe(r.actualCents,Kr),ee=ga(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${w(r.budgetCents)} | Ist: ${w(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${B}"></div>
                              <div class="bar-marker" style="left:${B}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${ee}" style="width:${V}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($a.length,1)}, minmax(0, 1fr));">
                    ${$a.map(r=>{const B=Fe(r.actualTotalCents,fs);return`
                          <div class="spark-bar" title="${r.year}: ${w(r.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
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
                    ${$a.map(r=>{const B=Fe(Math.abs(r.plannedNetCents),Lr),V=Fe(Math.abs(r.actualNetCents),Lr),ee=r.plannedNetCents<0?"bar-negative":"bar-positive",Se=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${ee}" style="width:${B}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${oe(r.plannedNetCents)}">B ${w(r.plannedNetCents)}</span>
                              <span class="${oe(r.actualNetCents)}">I ${w(r.actualNetCents)}</span>
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
                  ${$a.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${w(r.salaryIncomeCents)}</td>
                        <td>${w(r.effectiveIncomeCents)}</td>
                        <td>${w(r.budgetTotalCents)}</td>
                        <td>${w(r.actualTotalCents)}</td>
                        <td class="${oe(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${oe(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,ps=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,vs=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${_n?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${_n?gt(_n.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${_n?"Änderung speichern":"Vorlage speichern"}</button>
          ${_n?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,jr=h.annualVariableFixedTemplates.reduce((r,B)=>r+B.plannedCents,0),ms=Math.round(jr/12),gs=`
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
                <div class="eval-value budget-under">${w(jr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${w(ms)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const B=qn(r.dueDateIso),V=B?Be(B.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${w(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Rr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",bs=h.topModal==="years"?ps:h.topModal==="fixed"?vs:h.topModal==="variable-fixed"?gs:h.topModal==="dashboard"?hs:"";P.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Er?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${us.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${Fs(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Rr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Rr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${bs}
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
                  ${dr.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${dr.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Mt(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Be(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(r,B)=>B+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Be(r)}</option>`).join("")}
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
                  ${ma.map(r=>`
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
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ausgaben</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Netto</span>
                  </div>
                </header>
                <div class="bar-chart">
                  ${it.map(r=>{const B=Fe(Math.abs(r.valueCents),Vn),V=r.valueCents>=0?"+":"",ee=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${w(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${B}"></div>
                          </div>
                          <div class="bar-meta"><span class="${ee}">${V}${w(r.valueCents)}</span></div>
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
                      ${_.map(r=>{const B=Ft.get(r.month)?.totalBudgetCents??0,V=Fe(B,wa),ee=Fe(r.summary.totalCents,wa);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(r.summary.totalCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ee}"><span class="spark-bar-fill-value">${w(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const B=Ft.get(r.month),V=(B?.foodBudgetCents??0)+(B?.goingOutBudgetCents??0),ee=r.summary.foodCents+r.summary.goingOutCents,Se=Fe(V,ir),Ge=Fe(ee,ir);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(ee)} € | Budget ${w(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Se}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Ge}"><span class="spark-bar-fill-value">${w(ee)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const B=Ft.get(r.month)?.fixedBudgetCents??0,V=Fe(B,Va),ee=Fe(r.summary.fixedCents,Va);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(r.summary.fixedCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ee}"><span class="spark-bar-fill-value">${w(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const B=Ft.get(r.month)?.variableBudgetCents??0,V=Fe(B,or),ee=Fe(r.summary.variableCents,or);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(r.summary.variableCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ee}"><span class="spark-bar-fill-value">${w(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const B=Ft.get(r.month)?.miscBudgetCents??0,V=Fe(B,Ya),ee=Fe(r.summary.miscCents,Ya);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(r.summary.miscCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ee}"><span class="spark-bar-fill-value">${w(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${w(ue)}</div>
                    <div class="eval-value">${w(nt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${w(He)}</div>
                    <div class="eval-value">${w(qe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${pe}">${R?w(ze):"-"}</div>
                    <div class="eval-value ${mt}">${o?w(at):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${w(tt)}</div>
                    <div class="eval-value">${w($t)}</div>
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
                    <div class="eval-value">${en(O,d.foodCents)}</div>
                    <div class="eval-value">${w(H)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${en(K,d.goingOutCents)}</div>
                    <div class="eval-value">${w(ne)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${en(N,d.fixedCents)}</div>
                    <div class="eval-value">${w(me)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${en(G,d.variableCents)}</div>
                    <div class="eval-value">${w(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${en(U,d.miscCents)}</div>
                    <div class="eval-value">${w(Le)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${en(_e,d.totalCents)}</div>
                    <div class="eval-value">${w(ln)}</div>
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
                    <div class="eval-value ${Br}">${w(d.foodCents)}</div>
                    <div class="eval-value">${w(p.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${ur}">${w(d.goingOutCents)}</div>
                    <div class="eval-value">${w(p.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${lr}">${w(d.fixedCents)}</div>
                    <div class="eval-value">${w(p.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${za}">${w(d.variableCents)}</div>
                    <div class="eval-value">${w(p.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${cr}">${w(d.miscCents)}</div>
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
                    <div class="eval-value ${oe(M)}">${w(M)}</div>
                    <div class="eval-value ${oe(L)}">${w(L)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${oe(Wt)}">${w(Wt)}</div>
                    <div class="eval-value ${oe(At)}">${w(At)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Te}">${w(st)}</div>
                    <div class="eval-value ${Oe}">${w(Tt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${oe(de)}">${w(de)}</div>
                    <div class="eval-value ${oe(Ct)}">${w(Ct)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Gt}">${vt}</div>
                    <div class="eval-value ${va}">${Ot}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Summe (ohne %)</div>
                    <div class="eval-value ${oe(Rn)}">${w(Rn)}</div>
                    <div class="eval-value ${oe(jt)}">${w(jt)}</div>
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
                ${_.map((r,B,V)=>{const ee=o?ce.get(he(o.year,r.month)):void 0,Se=ee?.plannedBudgetCents??0,Ge=ee?.netCents??0,Et=Un.get(r.month)??0,Rt=Ge<0?"danger":Ge>0?"budget-under":"",Je=V[B-1],wn=Je?.summary.foodCents??null,kn=Je?.summary.goingOutCents??null,_t=Je?.summary.fixedCents??null,Gn=Je?.summary.variableCents??null,hr=Je?.summary.miscCents??null,Vr=Je?.summary.totalCents??null,Yr=Je!==void 0?Un.get(Je.month)??0:null,zr=o&&Je?ce.get(he(o.year,Je.month))?.plannedBudgetCents??0:null,Ur=wn===null?null:r.summary.foodCents-wn,Wr=kn===null?null:r.summary.goingOutCents-kn,Gr=_t===null?null:r.summary.fixedCents-_t,Jr=Gn===null?null:r.summary.variableCents-Gn,Hr=hr===null?null:r.summary.miscCents-hr,Xr=Vr===null?null:r.summary.totalCents-Vr,Qr=Yr===null?null:Et-Yr,Zr=zr===null?null:Se-zr,Jn=Xt=>Xt===null?"muted":Xt>0?"danger":Xt<0?"budget-under":"muted",ys=Xt=>Xt===null?"muted":Xt>0?"danger":Xt<0?"budget-under":"muted",Pn=Xt=>Xt===null?"(Δ -)":`(Δ ${Xt>0?"+":""}${w(Xt)})`,es=o&&Je?ce.get(he(o.year,Je.month))?.netCents??0:null,Sa=es===null?null:Ge-es,Cs=Sa===null?"(Δ -)":`(Δ ${Sa>0?"+":""}${w(Sa)})`,xs=Sa===null?"muted":Sa<0?"danger":Sa>0?"budget-under":"muted";return`<tr>
                  <td>${Be(r.month)}</td>
                  <td>${w(r.summary.foodCents)} <span class="${Jn(Ur)}">${Pn(Ur)}</span></td>
                  <td>${w(r.summary.goingOutCents)} <span class="${Jn(Wr)}">${Pn(Wr)}</span></td>
                  <td>${w(r.summary.fixedCents)} <span class="${Jn(Gr)}">${Pn(Gr)}</span></td>
                  <td>${w(r.summary.variableCents)} <span class="${Jn(Jr)}">${Pn(Jr)}</span></td>
                  <td>${w(r.summary.miscCents)} <span class="${Jn(Hr)}">${Pn(Hr)}</span></td>
                  <td>${w(r.summary.totalCents)} <span class="${Jn(Xr)}">${Pn(Xr)}</span></td>
                  <td>${w(Et)} <span class="${Jn(Qr)}">${Pn(Qr)}</span></td>
                  <td>${w(Se)} <span class="${ys(Zr)}">${Pn(Zr)}</span></td>
                  <td class="${Rt}">${w(Ge)} <span class="${xs}">${Cs}</span></td>
                </tr>`}).join("")}
                ${Sr}
                ${Ra}
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
                    <td class="${pe}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${gt(ze)}" />
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
                  <strong>${w(ue)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${w(He)} €</strong>
                </div>
                <div class="column-overview-row ${pe}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${w(ze)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${w(tt)} €</strong>
                </div>
                <div class="column-overview-row ${je}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${w(Pe)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${kt(O,d.foodCents)}
                ${kt(K,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${w(Ae)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${w(Re)} €</strong>
                  </div>
                  <div class="column-overview-row ${Lt}">
                    <span>Diff</span>
                    <strong>${w(rt)} €</strong>
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
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${gt(K)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(r=>{const B=r.foodCents>0,V=r.goingOutCents>0,ee=`${r.isoDate===f?"today-row":""} ${B||V?"day-has-entry":""}`.trim(),Se=`amount-input ${B?"day-input-has-value":""}`.trim(),Ge=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${ee}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Se}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${gt(r.foodCents)}" /></td>
                      <td><input class="${Ge}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${gt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${kt(N,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${gt(N)}" ${l?"":"disabled"} />
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
                    <td class="${Ze(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${gt(r.actualCents)}" /></td>
                    <td class="${Ze(r.actualCents,r.plannedCents)}">${w(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${kt(G,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${gt(G)}" ${l?"":"disabled"} />
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
                    <td class="${Ze(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${gt(r.actualCents)}" /></td>
                    <td class="${Ze(r.actualCents,r.budgetCents)}">${w(r.actualCents-r.budgetCents)}</td>
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
              ${kt(U,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${gt(U)}" ${l?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${_r}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal)),jn(),Qt(),ft(),Nt()}function jn(){const o=P.querySelector("#theme-select"),l=P.querySelector("#open-years-modal"),f=P.querySelector("#open-fixed-modal"),d=P.querySelector("#open-variable-fixed-modal"),p=P.querySelector("#open-dashboard-modal"),_=P.querySelector("#panel-modal-close"),O=P.querySelector("#panel-modal-backdrop"),K=P.querySelector("#open-unexported-change-log"),N=P.querySelector("#unexported-change-log-close"),G=P.querySelector("#unexported-change-log-backdrop"),U=P.querySelector("#new-year"),H=P.querySelector("#create-year"),ne=P.querySelector("#year-select"),me=P.querySelector("#month-select");o?.addEventListener("change",()=>{const M=o.value;is(M)&&On(M)}),l?.addEventListener("click",()=>{Qn("years")}),f?.addEventListener("click",()=>{Qn("fixed")}),d?.addEventListener("click",()=>{Qn("variable-fixed")}),p?.addEventListener("click",()=>{Qn("dashboard")}),K?.addEventListener("click",()=>{Zn()}),N?.addEventListener("click",()=>{ea()}),G?.addEventListener("click",M=>{M.target===G&&ea()}),P.querySelectorAll("[data-dashboard-tab]").forEach(M=>{M.addEventListener("click",()=>{const L=M.dataset.dashboardTab;L!=="year"&&L!=="food"&&L!=="all"||(h.dashboardTab=L,ae())})});const Q=P.querySelector("#dashboard-year-select");Q?.addEventListener("change",()=>{const M=Number.parseInt(Q.value,10);Number.isInteger(M)&&(h.dashboardYear=M,ae())}),_?.addEventListener("click",()=>{Ea()}),O?.addEventListener("click",M=>{M.target===O&&Ea()}),h.topModal&&window.setTimeout(()=>{_?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{N?.focus()},0),H?.addEventListener("click",async()=>{const M=Number.parseInt(U?.value??"",10);if(!Number.isInteger(M)){alert("Bitte gültiges Jahr eingeben.");return}await X(M)}),ne?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ne.value,10),h.selectedMonth=zt(),ae()}),me?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(me.value,10),ae()});const Le=P.querySelector("#fixed-template-name"),ue=P.querySelector("#fixed-template-amount"),He=P.querySelector("#add-fixed-template"),ce=P.querySelector("#cancel-fixed-template-edit"),Ee=P.querySelector("#annual-variable-fixed-name"),Xe=P.querySelector("#annual-variable-fixed-date"),ze=P.querySelector("#annual-variable-fixed-amount"),R=P.querySelector("#add-annual-variable-fixed-template");He?.addEventListener("click",async()=>{const M=Le?.value??"",L=Ke(ue?.value??"0");await wr(M,L),Le&&(Le.value=""),ue&&(ue.value="")}),ce?.addEventListener("click",()=>{da()}),R?.addEventListener("click",async()=>{const M=Ee?.value??"",L=Xe?.value??"",oe=Ke(ze?.value??"0");await kr(M,L,oe),Ee&&(Ee.value=""),Xe&&(Xe.value=""),ze&&(ze.value="")}),P.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(M=>{M.addEventListener("click",async()=>{const L=M.dataset.removeAnnualVariableFixedTemplate;L&&await an(L)})}),P.querySelectorAll("[data-edit-fixed-template]").forEach(M=>{M.addEventListener("click",()=>{const L=M.dataset.editFixedTemplate;L&&ca(L)})}),P.querySelectorAll("[data-remove-fixed-template]").forEach(M=>{M.addEventListener("click",async()=>{const L=M.dataset.removeFixedTemplate;L&&await fa(L)})}),P.querySelectorAll("[data-day-food]").forEach(M=>{M.addEventListener("click",L=>{L.preventDefault(),M.blur(),wt(M)}),M.addEventListener("change",async()=>{const L=M.dataset.dayFood;L&&await vn(L,"foodCents",Ke(M.value))})}),P.querySelectorAll("[data-day-going]").forEach(M=>{M.addEventListener("click",L=>{L.preventDefault(),M.blur(),wt(M)}),M.addEventListener("change",async()=>{const L=M.dataset.dayGoing;L&&await vn(L,"goingOutCents",Ke(M.value))})}),P.querySelectorAll("[data-fixed-actual]").forEach(M=>{M.addEventListener("click",L=>{L.preventDefault(),M.blur(),wt(M)}),M.addEventListener("change",async()=>{const L=M.dataset.fixedActual;L&&await rn(L,Ke(M.value))})}),P.querySelectorAll("[data-fixed-planned]").forEach(M=>{M.addEventListener("click",L=>{L.preventDefault(),M.blur(),wt(M)}),M.addEventListener("change",async()=>{const L=M.dataset.fixedPlanned;L&&await ha(L,Ke(M.value))})});const tt=P.querySelector("#fixed-budget");tt?.addEventListener("click",M=>{M.preventDefault(),tt.blur(),wt(tt)}),tt?.addEventListener("change",async()=>{await er(Ke(tt.value))});const we=P.querySelector("#food-budget");we?.addEventListener("click",M=>{M.preventDefault(),we.blur(),wt(we)}),we?.addEventListener("change",async()=>{await mn(Ke(we.value))});const Pe=P.querySelector("#going-out-budget");Pe?.addEventListener("click",M=>{M.preventDefault(),Pe.blur(),wt(Pe)}),Pe?.addEventListener("change",async()=>{await tr(Ke(Pe.value))}),P.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Ma()});const de=P.querySelector("#misc-budget");de?.addEventListener("click",M=>{M.preventDefault(),de.blur(),wt(de)}),de?.addEventListener("change",async()=>{await Aa(Ke(de.value))});const vt=P.querySelector("#variable-budget");vt?.addEventListener("click",M=>{M.preventDefault(),vt.blur(),wt(vt)}),vt?.addEventListener("change",async()=>{await Ye(Ke(vt.value))});const pe=P.querySelector("#variable-position-name"),je=P.querySelector("#variable-position-budget"),Te=P.querySelector("#add-variable-position"),nt=P.querySelector("#add-variable-position-recurring"),qe=P.querySelector("#misc-description"),at=P.querySelector("#misc-amount"),$t=P.querySelector("#add-misc"),Tt=P.querySelector("#add-misc-recurring"),Ct=P.querySelector("#income-description"),Ot=P.querySelector("#income-source"),mt=P.querySelector("#income-amount"),Oe=P.querySelector("#add-income"),_e=P.querySelector("#add-income-recurring"),Ae=P.querySelector("#fixed-cost-name"),Re=P.querySelector("#fixed-cost-budget"),rt=P.querySelector("#add-fixed-cost"),Lt=P.querySelector("#carryover-override");Lt?.addEventListener("click",M=>{M.preventDefault(),Lt.blur(),wt(Lt)}),Lt?.addEventListener("change",async()=>{const M=Lt.value;if(!M.trim()){await Kt(null);return}await Kt(Ke(M))}),rt?.addEventListener("click",async()=>{const M=Ke(Re?.value??"0");await $r(Ae?.value??"",M),Ae&&(Ae.value=""),Re&&(Re.value="")}),Te?.addEventListener("click",async()=>{const M=Ke(je?.value??"0");await Fa(pe?.value??"",M,!1),pe&&(pe.value=""),je&&(je.value="")}),nt?.addEventListener("click",async()=>{const M=Ke(je?.value??"0");await Fa(pe?.value??"",M,!0),pe&&(pe.value=""),je&&(je.value="")}),$t?.addEventListener("click",async()=>{const M=Ke(at?.value??"0");await on(qe?.value??"",M,!1),qe&&(qe.value=""),at&&(at.value="")}),Tt?.addEventListener("click",async()=>{const M=Ke(at?.value??"0");await on(qe?.value??"",M,!0),qe&&(qe.value=""),at&&(at.value="")}),Oe?.addEventListener("click",async()=>{const M=Ke(mt?.value??"0"),L=Ot?.value,oe=L==="balance"||L==="fresh"||L==="salary"?L:void 0;await Ln(Ct?.value??"",M,oe,!1),Ct&&(Ct.value=""),mt&&(mt.value=""),Ot&&(Ot.value="salary")}),_e?.addEventListener("click",async()=>{const M=Ke(mt?.value??"0"),L=Ot?.value,oe=L==="balance"||L==="fresh"||L==="salary"?L:void 0;await Ln(Ct?.value??"",M,oe,!0),Ct&&(Ct.value=""),mt&&(mt.value=""),Ot&&(Ot.value="salary")}),P.querySelectorAll("[data-income-source]").forEach(M=>{M.addEventListener("change",async()=>{const L=M.dataset.incomeSource;if(!L)return;const oe=M.value;await ar(L,oe==="balance"||oe==="fresh"||oe==="salary"?oe:void 0)})}),P.querySelectorAll("[data-variable-position-budget]").forEach(M=>{M.addEventListener("click",L=>{L.preventDefault(),M.blur(),wt(M)}),M.addEventListener("change",async()=>{const L=M.dataset.variablePositionBudget;L&&await pa(L,Ke(M.value))})}),P.querySelectorAll("[data-variable-position-actual]").forEach(M=>{M.addEventListener("click",L=>{L.preventDefault(),M.blur(),wt(M)}),M.addEventListener("change",async()=>{const L=M.dataset.variablePositionActual;L&&await En(L,Ke(M.value))})}),P.querySelectorAll("[data-remove-variable-position]").forEach(M=>{M.addEventListener("click",async()=>{const L=M.dataset.removeVariablePosition;L&&await Da(L)})}),P.querySelectorAll("[data-move-variable-position-next]").forEach(M=>{M.addEventListener("click",async()=>{const L=M.dataset.moveVariablePositionNext;L&&await Ia(L)})}),P.querySelectorAll("[data-remove-fixed]").forEach(M=>{M.addEventListener("click",async()=>{const L=M.dataset.removeFixed;L&&await sn(L)})}),P.querySelectorAll("[data-remove-income]").forEach(M=>{M.addEventListener("click",async()=>{const L=M.dataset.removeIncome;L&&await fe(L)})}),P.querySelectorAll("[data-remove-misc]").forEach(M=>{M.addEventListener("click",async()=>{const L=M.dataset.removeMisc;L&&await nr(L)})});const ln=P.querySelector("#backup-export"),Wt=P.querySelector("#backup-import");P.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),ln?.addEventListener("click",async()=>{await rr()}),Wt?.addEventListener("change",async()=>{const M=Wt.files?.[0];if(M){try{await sr(M)}catch(L){console.error("Backup-Import fehlgeschlagen",L),Ce("Backup konnte nicht importiert werden.","error")}Wt.value=""}})}return{init:xr}}const Is="modulepreload",Ns=function(P){return"/habu26/"+P},ls={},qs=function(h,Ne,J){let ge=Promise.resolve();if(Ne&&Ne.length>0){let lt=function(We){return Promise.all(We.map(ie=>Promise.resolve(ie).then(bt=>({status:"fulfilled",value:bt}),bt=>({status:"rejected",reason:bt}))))};var xe=lt;document.getElementsByTagName("link");const se=document.querySelector("meta[property=csp-nonce]"),be=se?.nonce||se?.getAttribute("nonce");ge=lt(Ne.map(We=>{if(We=Ns(We),We in ls)return;ls[We]=!0;const ie=We.endsWith(".css"),bt=ie?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${We}"]${bt}`))return;const dt=document.createElement("link");if(dt.rel=ie?"stylesheet":Is,ie||(dt.as="script"),dt.crossOrigin="",dt.href=We,be&&dt.setAttribute("nonce",be),document.head.appendChild(dt),ie)return new Promise((ft,Qt)=>{dt.addEventListener("load",ft),dt.addEventListener("error",()=>Qt(new Error(`Unable to preload CSS for ${We}`)))})}))}function re(se){const be=new Event("vite:preloadError",{cancelable:!0});if(be.payload=se,window.dispatchEvent(be),!be.defaultPrevented)throw se}return ge.then(se=>{for(const be of se||[])be.status==="rejected"&&re(be.reason);return h().catch(re)})};function Ks(P={}){const{immediate:h=!1,onNeedRefresh:Ne,onOfflineReady:J,onRegistered:ge,onRegisteredSW:re,onRegisterError:xe}=P;let se,be;const lt=async(ie=!0)=>{await be};async function We(){if("serviceWorker"in navigator){if(se=await qs(async()=>{const{Workbox:ie}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ie}},[]).then(({Workbox:ie})=>new ie("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ie=>{xe?.(ie)}),!se)return;se.addEventListener("activated",ie=>{(ie.isUpdate||ie.isExternal)&&window.location.reload()}),se.addEventListener("installed",ie=>{ie.isUpdate||J?.()}),se.register({immediate:h}).then(ie=>{re?re("/habu26/sw.js",ie):ge?.(ie)}).catch(ie=>{xe?.(ie)})}}return be=We(),lt}function Ls(){Ks({immediate:!0})}const cs=document.getElementById("app");if(!cs)throw new Error("App-Container nicht gefunden.");Ds(cs).init();Ls();
