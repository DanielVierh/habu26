(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const ge of document.querySelectorAll('link[rel="modulepreload"]'))J(ge);new MutationObserver(ge=>{for(const re of ge)if(re.type==="childList")for(const we of re.addedNodes)we.tagName==="LINK"&&we.rel==="modulepreload"&&J(we)}).observe(document,{childList:!0,subtree:!0});function Ke(ge){const re={};return ge.integrity&&(re.integrity=ge.integrity),ge.referrerPolicy&&(re.referrerPolicy=ge.referrerPolicy),ge.crossOrigin==="use-credentials"?re.credentials="include":ge.crossOrigin==="anonymous"?re.credentials="omit":re.credentials="same-origin",re}function J(ge){if(ge.ep)return;ge.ep=!0;const re=Ke(ge);fetch(ge.href,re)}})();const xs=[1,2,3,4,5,6,7,8,9,10,11,12];function Dr(){return new Date().toISOString()}function Et(P){const p=Math.random().toString(36).slice(2,10);return`${P}_${Date.now()}_${p}`}function ws(P,p){const Ke=new Date(P,p,0).getDate(),J=[];for(let ge=1;ge<=Ke;ge+=1){const re=new Date(Date.UTC(P,p-1,ge));J.push({isoDate:re.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return J}function ks(P){return P.map(p=>({id:Et("fixed"),templateId:p.id,name:p.name,plannedCents:p.plannedCents,actualCents:0}))}function ts(P,p,Ke){const J=p.reduce((re,we)=>re+we.plannedCents,0),ge=xs.map(re=>({month:re,days:ws(P,re),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:ks(p),fixedBudgetCents:J,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:P,createdAt:Dr(),templateVersion:Ke,months:ge}}function ns(P,p){return{id:Et("expense"),description:P,amountCents:p,createdAt:Dr()}}function as(P,p,Ke){const J={id:Et("income"),description:P,amountCents:p,createdAt:Dr()};return Ke?{...J,incomeSource:Ke}:J}var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ss(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var vr={exports:{}},Bs=vr.exports,rs;function Es(){return rs||(rs=1,(function(P,p){((Ke,J)=>{P.exports=J()})(Bs,function(){var Ke=function(e,t){return(Ke=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},J=function(){return(J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ge(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:$s,we=Object.keys,se=Array.isArray;function be(e,t){return typeof t=="object"&&we(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||re.Promise||(re.Promise=Promise);var it=Object.getPrototypeOf,We={}.hasOwnProperty;function oe(e,t){return We.call(e,t)}function mt(e,t){typeof t=="function"&&(t=t(it(e))),(typeof Reflect>"u"?we:Reflect.ownKeys)(t).forEach(function(n){dt(e,n,t[n])})}var ct=Object.defineProperty;function dt(e,t,n,a){ct(e,t,be(n&&oe(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function Qt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),dt(e.prototype,"constructor",e),{extend:mt.bind(null,e.prototype)}}}}var Gn=Object.getOwnPropertyDescriptor,_a=[].slice;function Jn(e,t,n){return _a.call(e,t,n)}function Hn(e,t){return t(e)}function Dn(e){if(!e)throw new Error("Assertion Failed")}function Ga(e){re.setImmediate?setImmediate(e):setTimeout(e,0)}function _t(e,t){if(typeof t=="string"&&oe(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=_t(e,t[a]);n.push(i)}return n}var l,c=t.indexOf(".");return c===-1||(l=e[t.substr(0,c)])==null?void 0:_t(l,t.substr(c+1))}function ft(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Dn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)ft(e,t[a],n[a])}else{var i,l,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?se(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:ft(l=(l=e[i])&&oe(e,i)?l:e[i]={},c,n)):n===void 0?se(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ma(e){var t,n={};for(t in e)oe(e,t)&&(n[t]=e[t]);return n}var br=[].concat;function Ja(e){return br.apply([],e)}var jt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ja([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return re[e]}),Nt=new Set(jt.map(function(e){return re[e]})),qt=null;function un(e){return qt=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=qt.get(n);if(a)return a;if(se(n)){a=[],qt.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Nt.has(n.constructor))a=n;else{var l,c=it(n);for(l in a=c===Object.prototype?{}:Object.create(c),qt.set(n,a),n)oe(n,l)&&(a[l]=t(n[l]))}return a})(e),qt=null,e}var yr={}.toString;function Pa(e){return yr.call(e).slice(8,-1)}var Xn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ct=typeof Xn=="symbol"?function(e){var t;return e!=null&&(t=e[Xn])&&t.apply(e)}:function(){return null};function xe(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var Kt={};function Lt(e){var t,n,a,s;if(arguments.length===1){if(se(e))return e.slice();if(this===Kt&&typeof e=="string")return[e];if(s=Ct(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var Qn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},jt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],gt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(jt),$n={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Sn(e,t){this.name=e,this.message=t}function Ta(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function Zn(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Ta(e,t)}function cn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ta(e,this.failures)}Qt(Sn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Qt(Zn).from(Sn),Qt(cn).from(Sn);var Oa=gt.reduce(function(e,t){return e[t]=t+"Error",e},{}),Ha=Sn,Z=gt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=$n[t]||n,this.inner=null)}return Qt(a).from(Ha),e[t]=a,e},{}),Xa=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,jt.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));jt=gt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function Be(){}function Bn(e){return e}function Cr(e,t){return e==null||e===Bn?t:function(n){return t(e(n))}}function dn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Aa(e,t){return e===Be?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?dn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?dn(s,this.onerror):s),i!==void 0?i:n}}function Fa(e,t){return e===Be?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?dn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?dn(a,this.onerror):a)}}function ea(e,t){return e===Be?t:function(s){var a=e.apply(this,arguments),s=(be(s,a),this.onsuccess),i=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?dn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?dn(i,this.onerror):i),a===void 0?l===void 0?void 0:l:be(a,l)}}function Qa(e,t){return e===Be?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function fn(e,t){return e===Be?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}jt.ModifyError=Zn,jt.DexieError=Sn,jt.BulkError=cn;var ke=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Za(e){ke=e}var Rt={},In=100,Zt=typeof Promise>"u"?[]:(gt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Zt=crypto.subtle.digest("SHA-512",new Uint8Array([0])),it(Zt),gt]:[gt,it(gt),gt]),gt=Zt[0],$t=Zt[1],$t=$t&&$t.then,Vt=gt&&gt.constructor,Nn=!!Zt[2],hn=function(e,t){qn.push([e,t]),ot&&(queueMicrotask(Mt),ot=!1)},Da=!0,ot=!0,pn=[],Yt=[],vn=Bn,en={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Be,pgp:!1,env:{},finalize:Be},G=en,qn=[],tn=0,Ye=[];function j(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=G;if(typeof e!="function"){if(e!==Rt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&na(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var l=a._lib&&En();i&&typeof i.then=="function"?n(a,function(c,y){i instanceof j?i._then(c,y):i.then(c,y)}):(a._state=!0,a._value=i,aa(a)),l&&mn()}},na.bind(null,a))}catch(i){na(a,i)}})(this,e)}var he={get:function(){var e=G,t=la;function n(a,s){var i=this,l=!e.global&&(e!==G||t!==la),c=l&&!an(),y=new j(function($,g){ra(i,new ta(tr(a,e,l,c),tr(s,e,l,c),$,g,e))});return this._consoleTask&&(y._consoleTask=this._consoleTask),y}return n.prototype=Rt,n},set:function(e){dt(this,"then",e&&e.prototype===Rt?he:{get:function(){return e},set:he.set})}};function ta(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function na(e,t){var n,a;Yt.push(t),e._state===null&&(n=e._lib&&En(),t=vn(t),e._state=!1,e._value=t,a=e,pn.some(function(s){return s._value===a._value})||pn.push(a),aa(e),n)&&mn()}function aa(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)ra(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),tn===0&&(++tn,hn(function(){--tn==0&&Ia()},[]))}function ra(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++tn,hn(nn,[n,e,t])}}function nn(e,t,n){try{var a,s=t._value;!t._state&&Yt.length&&(Yt=[]),a=ke&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||Yt.indexOf(s)!==-1||(i=>{for(var l=pn.length;l;)if(pn[--l]._value===i._value)return pn.splice(l,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--tn==0&&Ia(),--n.psd.ref||n.psd.finalize()}}function Mt(){gn(en,function(){En()&&mn()})}function En(){var e=Da;return ot=Da=!1,e}function mn(){var e,t,n;do for(;0<qn.length;)for(e=qn,qn=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<qn.length);ot=Da=!0}function Ia(){for(var e=pn,t=(pn=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),Ye.slice(0)),n=t.length;n;)t[--n]()}function sa(e){return new j(Rt,!1,e)}function Ie(e,t){var n=G;return function(){var a=En(),s=G;try{return rn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{rn(s,!1),a&&mn()}}}mt(j.prototype,{then:he,_then:function(e,t){ra(this,new ta(null,null,e,t,G))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:sa)(a)}):this.then(null,function(a){return(a&&a.name===t?n:sa)(a)}))},finally:function(e){return this.then(function(t){return j.resolve(e()).then(function(){return t})},function(t){return j.resolve(e()).then(function(){return sa(t)})})},timeout:function(e,t){var n=this;return e<1/0?new j(function(a,s){var i=setTimeout(function(){return s(new Z.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&dt(j.prototype,Symbol.toStringTag,"Dexie.Promise"),en.env=er(),mt(j,{all:function(){var e=Lt.apply(null,arguments).map(ua);return new j(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return j.resolve(s).then(function(l){e[i]=l,--a||t(e)},n)})})},resolve:function(e){return e instanceof j?e:e&&typeof e.then=="function"?new j(function(t,n){e.then(t,n)}):new j(Rt,!0,e)},reject:sa,race:function(){var e=Lt.apply(null,arguments).map(ua);return new j(function(t,n){e.map(function(a){return j.resolve(a).then(t,n)})})},PSD:{get:function(){return G},set:function(e){return G=e}},totalEchoes:{get:function(){return la}},newPSD:zt,usePSD:gn,scheduler:{get:function(){return hn},set:function(e){hn=e}},rejectionMapper:{get:function(){return vn},set:function(e){vn=e}},follow:function(e,t){return new j(function(n,a){return zt(function(s,i){var l=G;l.unhandleds=[],l.onunhandled=i,l.finalize=dn(function(){var c,y=this;c=function(){y.unhandleds.length===0?s():i(y.unhandleds[0])},Ye.push(function $(){c(),Ye.splice(Ye.indexOf($),1)}),++tn,hn(function(){--tn==0&&Ia()},[])},l.finalize),e()},t,n,a)})}}),Vt&&(Vt.allSettled&&dt(j,"allSettled",function(){var e=Lt.apply(null,arguments).map(ua);return new j(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return j.resolve(s).then(function(l){return a[i]={status:"fulfilled",value:l}},function(l){return a[i]={status:"rejected",reason:l}}).then(function(){return--n||t(a)})})})}),Vt.any&&typeof AggregateError<"u"&&dt(j,"any",function(){var e=Lt.apply(null,arguments).map(ua);return new j(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,l){return j.resolve(i).then(function(c){return t(c)},function(c){s[l]=c,--a||n(new AggregateError(s))})})})}),Vt.withResolvers)&&(j.withResolvers=Vt.withResolvers);var Qe={awaits:0,echoes:0,id:0},xr=0,ia=[],oa=0,la=0,wr=0;function zt(e,l,n,a){var s=G,i=Object.create(s),l=(i.parent=s,i.ref=0,i.global=!1,i.id=++wr,en.env,i.env=Nn?{Promise:j,PromiseProp:{value:j,configurable:!0,writable:!0},all:j.all,race:j.race,allSettled:j.allSettled,any:j.any,resolve:j.resolve,reject:j.reject}:{},l&&be(i,l),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},gn(i,e,n,a));return i.ref===0&&i.finalize(),l}function _n(){return Qe.id||(Qe.id=++xr),++Qe.awaits,Qe.echoes+=In,Qe.id}function an(){return!!Qe.awaits&&(--Qe.awaits==0&&(Qe.id=0),Qe.echoes=Qe.awaits*In,!0)}function ua(e){return Qe.echoes&&e&&e.constructor===Vt?(_n(),e.then(function(t){return an(),t},function(t){return an(),Ae(t)})):e}function kr(){var e=ia[ia.length-1];ia.pop(),rn(e,!1)}function rn(e,t){var n,a,s=G;(t?!Qe.echoes||oa++&&e===G:!oa||--oa&&e===G)||queueMicrotask(t?(function(i){++la,Qe.echoes&&--Qe.echoes!=0||(Qe.echoes=Qe.awaits=Qe.id=0),ia.push(G),rn(i,!0)}).bind(null,e):kr),e!==G&&(G=e,s===en&&(en.env=er()),Nn)&&(n=en.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(re,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function er(){var e=re.Promise;return Nn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(re,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function gn(e,t,n,a,s){var i=G;try{return rn(e,!0),t(n,a,s)}finally{rn(i,!1)}}function tr(e,t,n,a){return typeof e!="function"?e:function(){var s=G;n&&_n(),rn(t,!0);try{return e.apply(this,arguments)}finally{rn(s,!1),a&&queueMicrotask(an)}}}function Na(e){Promise===Vt&&Qe.echoes===0?oa===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+$t).indexOf("[native code]")===-1&&(_n=an=Be);var Ae=j.reject,sn="￿",Pt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",nr="String expected.",Mn=[],ca="__dbnames",qa="readonly",da="readwrite";function bn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Ka={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function fa(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=un(t))[e],t}}function ar(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function pe(e,t){try{var n=rr(e),a=rr(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=ae(e),i=ae(t),l=s.length,c=i.length,y=l<c?l:c,$=0;$<y;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return l===c?0:l<c?-1:1;case"Array":for(var g=e,v=t,C=g.length,x=v.length,m=C<x?C:x,b=0;b<m;++b){var S=pe(g[b],v[b]);if(S!==0)return S}return C===x?0:C<x?-1:1}}catch{}return NaN}function rr(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Pa(e))==="ArrayBuffer")?"binary":t}function ae(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function ha(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}u.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(se(n))return ge(ge([],se(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(se(a))return se(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var o=u;function u(e){this["@@propmod"]=e}function f(e,t){for(var n=we(t),a=n.length,s=!1,i=0;i<a;++i){var l=n[i],c=t[l],y=_t(e,l);c instanceof o?(ft(e,l,c.execute(y)),s=!0):y!==c&&(ft(e,l,c),s=!0)}return s}h.prototype._trans=function(e,t,n){var a=this._tx||G.trans,s=this.name,i=ke&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function l($,g,v){if(v.schema[s])return t(v.idbtrans,v);throw new Z.NotFound("Table "+s+" not part of transaction")}var c=En();try{var y=a&&a.db._novip===this.db._novip?a===G.trans?a._promise(e,l,n):zt(function(){return a._promise(e,l,n)},{trans:a,transless:G.transless||G}):(function $(g,v,C,x){if(g.idbdb&&(g._state.openComplete||G.letThrough||g._vip)){var m=g._createTransaction(v,C,g._dbSchema);try{m.create(),g._state.PR1398_maxLoop=3}catch(b){return b.name===Oa.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return $(g,v,C,x)})):Ae(b)}return m._promise(v,function(b,S){return zt(function(){return G.trans=m,x(b,S,m)})}).then(function(b){if(v==="readwrite")try{m.idbtrans.commit()}catch{}return v==="readonly"?b:m._completion.then(function(){return b})})}if(g._state.openComplete)return Ae(new Z.DatabaseClosed(g._state.dbOpenError));if(!g._state.isBeingOpened){if(!g._state.autoOpen)return Ae(new Z.DatabaseClosed);g.open().catch(Be)}return g._state.dbReadyPromise.then(function(){return $(g,v,C,x)})})(this.db,e,[this.name],l);return i&&(y._consoleTask=i,y=y.catch(function($){return console.trace($),Ae($)})),y}finally{c&&mn()}},h.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ae(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},h.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(se(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=we(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function($){return 0<=c.keyPath.indexOf($)})){for(var y=0;y<t.length;++y)if(t.indexOf(c.keyPath[y])===-1)return!1;return!0}return!1}).sort(function(c,y){return c.keyPath.length-y.keyPath.length})[0];if(n&&this.db._maxKey!==sn)return l=n.keyPath.slice(0,t.length),this.where(l).equals(l.map(function(c){return e[c]}));!n&&ke&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,y){return pe(c,y)===0}var l=t.reduce(function(g,y){var $=g[0],g=g[1],v=a[y],C=e[y];return[$||v,$||!v?bn(g,v&&v.multi?function(x){return x=_t(x,y),se(x)&&x.some(function(m){return s(C,m)})}:function(x){return s(C,_t(x,y))}):g]},[null,null]),i=l[0],l=l[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},h.prototype.filter=function(e){return this.toCollection().and(e)},h.prototype.count=function(e){return this.toCollection().count(e)},h.prototype.offset=function(e){return this.toCollection().offset(e)},h.prototype.limit=function(e){return this.toCollection().limit(e)},h.prototype.each=function(e){return this.toCollection().each(e)},h.prototype.toArray=function(e){return this.toCollection().toArray(e)},h.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},h.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,se(e)?"[".concat(e.join("+"),"]"):e))},h.prototype.reverse=function(){return this.toCollection().reverse()},h.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof ar&&(e=(l=>{var c=g,y=l;if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");function $(){this.constructor=c}function g(){return l!==null&&l.apply(this,arguments)||this}return Ke(c,y),c.prototype=y===null?Object.create(y):($.prototype=y.prototype,new $),Object.defineProperty(g.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),g.prototype.table=function(){return n},g})(e)),new Set),s=e.prototype;s;s=it(s))Object.getOwnPropertyNames(s).forEach(function(l){return a.add(l)});function i(l){if(!l)return l;var c,y=Object.create(e.prototype);for(c in l)if(!a.has(c))try{y[c]=l[c]}catch{}return y}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},h.prototype.defineClass=function(){return this.mapToClass(function(e){be(this,e)})},h.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=fa(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[l]})}).then(function(c){return c.numFailures?j.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{ft(e,i,c)}catch{}return c})},h.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var l=i??{};return f(l,t),a&&ft(l,a,e),n.core.mutate({trans:s,type:"put",values:[l],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?j.reject(c.failures[0]):!!i})})})},h.prototype.update=function(e,t){return typeof e!="object"||se(e)?this.where(":id").equals(e).modify(t):(e=_t(e,this.schema.primKey.keyPath))===void 0?Ae(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},h.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=fa(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[l],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?j.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{ft(e,i,c)}catch{}return c})},h.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return ha(t,[e],a)}).then(function(a){return a.numFailures?j.reject(a.failures[0]):void 0})})},h.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Ka}).then(function(n){return ha(e,null,n)})}).then(function(t){return t.numFailures?j.reject(t.failures[0]):void 0})},h.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},h.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,$=c&&$?e.map(fa(c)):e;return a.core.mutate({trans:l,type:"add",keys:s,values:$,wantResults:i}).then(function(g){var v=g.numFailures,C=g.failures;if(v===0)return i?g.results:g.lastResult;throw new cn("".concat(a.name,".bulkAdd(): ").concat(v," of ").concat(y," operations failed"),C)})})},h.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,$=c&&$?e.map(fa(c)):e;return a.core.mutate({trans:l,type:"put",keys:s,values:$,wantResults:i}).then(function(g){var v=g.numFailures,C=g.failures;if(v===0)return i?g.results:g.lastResult;throw new cn("".concat(a.name,".bulkPut(): ").concat(v," of ").concat(y," operations failed"),C)})})},h.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(l){return l.key}),s=e.map(function(l){return l.changes}),i=[];return this._trans("readwrite",function(l){return n.getMany({trans:l,keys:a,cache:"clone"}).then(function(c){var y=[],$=[],g=(e.forEach(function(v,C){var x=v.key,m=v.changes,b=c[C];if(b){for(var S=0,E=Object.keys(m);S<E.length;S++){var k=E[S],T=m[k];if(k===t.schema.primKey.keyPath){if(pe(T,x)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else ft(b,k,T)}i.push(C),y.push(x),$.push(b)}}),y.length);return n.mutate({trans:l,type:"put",keys:y,values:$,updates:{keys:a,changeSpecs:s}}).then(function(v){var C=v.numFailures,x=v.failures;if(C===0)return g;for(var m=0,b=Object.keys(x);m<b.length;m++){var S,E=b[m],k=i[Number(E)];k!=null&&(S=x[E],delete x[E],x[k]=S)}throw new cn("".concat(t.name,".bulkUpdate(): ").concat(C," of ").concat(g," operations failed"),x)})})})},h.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return ha(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new cn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var d=h;function h(){}function _(e){function t(l,c){if(c){for(var y=arguments.length,$=new Array(y-1);--y;)$[y-1]=arguments[y];return n[l].subscribe.apply(null,$),e}if(typeof l=="string")return n[l]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(l,c,y){var $,g;if(typeof l!="object")return c=c||Qa,g={subscribers:[],fire:y=y||Be,subscribe:function(v){g.subscribers.indexOf(v)===-1&&(g.subscribers.push(v),g.fire=c(g.fire,v))},unsubscribe:function(v){g.subscribers=g.subscribers.filter(function(C){return C!==v}),g.fire=g.subscribers.reduce(c,y)}},n[l]=t[l]=g;we($=l).forEach(function(v){var C=$[v];if(se(C))i(v,$[v][0],$[v][1]);else{if(C!=="asap")throw new Z.InvalidArgument("Invalid event config");var x=i(v,Bn,function(){for(var m=arguments.length,b=new Array(m);m--;)b[m]=arguments[m];x.subscribers.forEach(function(S){Ga(function(){S.apply(null,b)})})})}})}}function A(e,t){return Qt(t).from({prototype:e}),t}function I(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function N(e,t){e.filter=bn(e.filter,t)}function H(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return bn(a(),t())}:t,e.justLimit=n&&!a}function z(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function X(e,t,n){var a=z(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function ne(e,t,n,a){var s,i,l=e.replayFilter?bn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,y,$){var g,v;l&&!l(y,$,function(C){return y.stop(C)},function(C){return y.fail(C)})||((v=""+(g=y.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(g)),oe(s,v))||(s[v]=!0,t(c,y,$))},Promise.all([e.or._iterate(i,n),ve(X(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):ve(X(e,a,n),bn(e.algorithm,l),t,!e.keysOnly&&e.valueMapper)}function ve(e,t,n,a){var s=Ie(a?function(i,l,c){return n(a(i),l,c)}:n);return e.then(function(i){if(i)return i.start(function(){var l=function(){return i.continue()};t&&!t(i,function(c){return l=c},function(c){i.stop(c),l=Be},function(c){i.fail(c),l=Be})||s(i.value,i,function(c){return l=c}),l()})})}ee.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ae.bind(null,n.error)):n.table._trans("readonly",e).then(t)},ee.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ae.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},ee.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=bn(t.algorithm,e)},ee.prototype._iterate=function(e,t){return ne(this._ctx,e,t,this._ctx.table.core)},ee.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&be(n,e),t._ctx=n,t},ee.prototype.raw=function(){return this._ctx.valueMapper=null,this},ee.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return ne(t,e,n,t.table.core)})},ee.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return I(s,!0)?i.count({trans:n,query:{index:z(s,i.schema),range:s.range}}).then(function(l){return Math.min(l,s.limit)}):(a=0,ne(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},ee.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(y,$){return $?i(y[n[$]],$-1):y[a]}var l=this._ctx.dir==="next"?1:-1;function c(y,$){return pe(i(y,s),i($,s))*l}return this.toArray(function(y){return y.sort(c)}).then(t)},ee.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,l=t._ctx;return l.dir==="next"&&I(l,!0)&&0<l.limit?(a=l.valueMapper,s=z(l,l.table.core.schema),l.table.core.query({trans:n,limit:l.limit,values:!0,query:{index:s,range:l.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],ne(l,function(c){return i.push(c)},n,l.table.core).then(function(){return i}))},e)},ee.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,I(t)?H(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):H(t,function(){var n=e;return function(){return--n<0}})),this},ee.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),H(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},ee.prototype.until=function(e,t){return N(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},ee.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},ee.prototype.last=function(e){return this.reverse().first(e)},ee.prototype.filter=function(e){var t;return N(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=bn(t.isMatch,e),this},ee.prototype.and=function(e){return this.filter(e)},ee.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},ee.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ee.prototype.desc=function(){return this.reverse()},ee.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},ee.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},ee.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},ee.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},ee.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&I(t,!0)&&0<t.limit)return this._read(function(a){var s=z(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},ee.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},ee.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},ee.prototype.lastKey=function(e){return this.reverse().firstKey(e)},ee.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},N(this._ctx,function(a){var a=a.primaryKey.toString(),s=oe(e,a);return e[a]=!0,!s})),this},ee.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(b,S){var E=S.failures;C+=b-S.numFailures;for(var k=0,T=we(E);k<T.length;k++){var O=T[k];v.push(E[O])}}var i=typeof e=="function"?e:function(b){return f(b,e)},l=n.table.core,g=l.schema.primaryKey,c=g.outbound,y=g.extractKey,$=200,g=t.db._options.modifyChunkSize,v=(g&&($=typeof g=="object"?g[l.name]||g["*"]||200:g),[]),C=0,x=[],m=e===le;return t.clone().primaryKeys().then(function(b){function S(k){var T=Math.min($,b.length-k),O=b.slice(k,k+T);return(m?Promise.resolve([]):l.getMany({trans:a,keys:O,cache:"immutable"})).then(function(D){var R=[],F=[],U=c?[]:null,Y=m?O:[];if(!m)for(var q=0;q<T;++q){var W=D[q],me={value:un(W),primKey:b[k+q]};i.call(me,me.value,me)!==!1&&(me.value==null?Y.push(b[k+q]):c||pe(y(W),y(me.value))===0?(F.push(me.value),c&&U.push(b[k+q])):(Y.push(b[k+q]),R.push(me.value)))}return Promise.resolve(0<R.length&&l.mutate({trans:a,type:"add",values:R}).then(function(ce){for(var te in ce.failures)Y.splice(parseInt(te),1);s(R.length,ce)})).then(function(){return(0<F.length||E&&typeof e=="object")&&l.mutate({trans:a,type:"put",keys:U,values:F,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(ce){return s(F.length,ce)})}).then(function(){return(0<Y.length||E&&m)&&l.mutate({trans:a,type:"delete",keys:Y,criteria:E,isAdditionalChunk:0<k}).then(function(ce){return ha(n.table,Y,ce)}).then(function(ce){return s(Y.length,ce)})}).then(function(){return b.length>k+T&&S(k+$)})})}var E=I(n)&&n.limit===1/0&&(typeof e!="function"||m)&&{index:n.index,range:n.range};return S(0).then(function(){if(0<v.length)throw new Zn("Error modifying one or more objects",v,C,x);return b.length})})})},ee.prototype.delete=function(){var e=this._ctx,t=e.range;return!I(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(le):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(y){var c=y.failures,y=y.numFailures;if(y)throw new Zn("Could not delete some values",Object.keys(c).map(function($){return c[$]}),i-y);return i-y})})})};var Te=ee;function ee(){}var le=function(e,t){return t.value=null};function He(e,t){return e<t?-1:e===t?0:1}function Ne(e,t){return t<e?-1:e===t?0:1}function ye(e,t,n){return e=e instanceof bt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function ze(e){return new e.Collection(e,function(){return Ze("")}).limit(0)}function tt(x,t,n,a){var s,i,l,c,y,$,g,v=n.length;if(!n.every(function(b){return typeof b=="string"}))return ye(x,nr);function C(b){s=b==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},i=b==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},l=b==="next"?He:Ne;var S=n.map(function(E){return{lower:i(E),upper:s(E)}}).sort(function(E,k){return l(E.lower,k.lower)});c=S.map(function(E){return E.upper}),y=S.map(function(E){return E.lower}),g=($=b)==="next"?"":a}C("next");var x=new x.Collection(x,function(){return L(c[0],y[v-1]+a)}),m=(x._ondirectionchange=function(b){C(b)},0);return x._addAlgorithm(function(b,S,E){var k=b.key;if(typeof k=="string"){var T=i(k);if(t(T,y,m))return!0;for(var O=null,D=m;D<v;++D){var R=((F,U,Y,q,W,me)=>{for(var ce=Math.min(F.length,q.length),te=-1,ie=0;ie<ce;++ie){var Le=U[ie];if(Le!==q[ie])return W(F[ie],Y[ie])<0?F.substr(0,ie)+Y[ie]+Y.substr(ie+1):W(F[ie],q[ie])<0?F.substr(0,ie)+q[ie]+Y.substr(ie+1):0<=te?F.substr(0,te)+U[te]+Y.substr(te+1):null;W(F[ie],Le)<0&&(te=ie)}return ce<q.length&&me==="next"?F+Y.substr(F.length):ce<F.length&&me==="prev"?F.substr(0,Y.length):te<0?null:F.substr(0,te)+q[te]+Y.substr(te+1)})(k,T,c[D],y[D],l,$);R===null&&O===null?m=D+1:(O===null||0<l(O,R))&&(O=R)}S(O!==null?function(){b.continue(O+g)}:E)}return!1}),x}function L(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function Ze(e){return{type:1,lower:e,upper:e}}Object.defineProperty(Ce.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Ce.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?ze(this):new this.Collection(this,function(){return L(e,t,!n,!a)})}catch{return ye(this,Pt)}},Ce.prototype.equals=function(e){return e==null?ye(this,Pt):new this.Collection(this,function(){return Ze(e)})},Ce.prototype.above=function(e){return e==null?ye(this,Pt):new this.Collection(this,function(){return L(e,void 0,!0)})},Ce.prototype.aboveOrEqual=function(e){return e==null?ye(this,Pt):new this.Collection(this,function(){return L(e,void 0,!1)})},Ce.prototype.below=function(e){return e==null?ye(this,Pt):new this.Collection(this,function(){return L(void 0,e,!1,!0)})},Ce.prototype.belowOrEqual=function(e){return e==null?ye(this,Pt):new this.Collection(this,function(){return L(void 0,e)})},Ce.prototype.startsWith=function(e){return typeof e!="string"?ye(this,nr):this.between(e,e+sn,!0,!0)},Ce.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):tt(this,function(t,n){return t.indexOf(n[0])===0},[e],sn)},Ce.prototype.equalsIgnoreCase=function(e){return tt(this,function(t,n){return t===n[0]},[e],"")},Ce.prototype.anyOfIgnoreCase=function(){var e=Lt.apply(Kt,arguments);return e.length===0?ze(this):tt(this,function(t,n){return n.indexOf(t)!==-1},e,"")},Ce.prototype.startsWithAnyOfIgnoreCase=function(){var e=Lt.apply(Kt,arguments);return e.length===0?ze(this):tt(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,sn)},Ce.prototype.anyOf=function(){var e,t,n=this,a=Lt.apply(Kt,arguments),s=this._cmp;try{a.sort(s)}catch{return ye(this,Pt)}return a.length===0?ze(this):((e=new this.Collection(this,function(){return L(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,l,c){for(var y=i.key;0<s(y,a[t]);)if(++t===a.length)return l(c),!1;return s(y,a[t])===0||(l(function(){i.continue(a[t])}),!1)}),e)},Ce.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Ce.prototype.noneOf=function(){var e=Lt.apply(Kt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ye(this,Pt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},Ce.prototype.inAnyRange=function(e,E){var n=this,a=this._cmp,s=this._ascending,i=this._descending,l=this._min,c=this._max;if(e.length===0)return ze(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return ye(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var y=!E||E.includeLowers!==!1,$=E&&E.includeUppers===!0,g,v=s;function C(k,T){return v(k[0],T[0])}try{(g=e.reduce(function(k,T){for(var O=0,D=k.length;O<D;++O){var R=k[O];if(a(T[0],R[1])<0&&0<a(T[1],R[0])){R[0]=l(R[0],T[0]),R[1]=c(R[1],T[1]);break}}return O===D&&k.push(T),k},[])).sort(C)}catch{return ye(this,Pt)}var x=0,m=$?function(k){return 0<s(k,g[x][1])}:function(k){return 0<=s(k,g[x][1])},b=y?function(k){return 0<i(k,g[x][0])}:function(k){return 0<=i(k,g[x][0])},S=m,E=new this.Collection(this,function(){return L(g[0][0],g[g.length-1][1],!y,!$)});return E._ondirectionchange=function(k){v=k==="next"?(S=m,s):(S=b,i),g.sort(C)},E._addAlgorithm(function(k,T,O){for(var D,R=k.key;S(R);)if(++x===g.length)return T(O),!1;return!m(D=R)&&!b(D)||(n._cmp(R,g[x][1])===0||n._cmp(R,g[x][0])===0||T(function(){v===s?k.continue(g[x][0]):k.continue(g[x][1])}),!1)}),E},Ce.prototype.startsWithAnyOf=function(){var e=Lt.apply(Kt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?ze(this):this.inAnyRange(e.map(function(t){return[t,t+sn]})):ye(this,"startsWithAnyOf() only works with strings")};var bt=Ce;function Ce(){}function Re(e){return Ie(function(t){return de(t),e(t.target.error),!1})}function de(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var at="storagemutated",$e="x-storagemutated-1",Se=_(null,at),lt=(Fe.prototype._lock=function(){return Dn(!G.global),++this._reculock,this._reculock!==1||G.global||(G.lockOwnerFor=this),this},Fe.prototype._unlock=function(){if(Dn(!G.global),--this._reculock==0)for(G.global||(G.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{gn(e[1],e[0])}catch{}}return this},Fe.prototype._locked=function(){return this._reculock&&G.lockOwnerFor!==this},Fe.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Dn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(a);case"MissingAPIError":throw new Z.MissingAPI(a.message,a);default:throw new Z.OpenFailed(a)}if(!this.active)throw new Z.TransactionInactive;Dn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ie(function(s){de(s),t._reject(e.error)}),e.onabort=Ie(function(s){de(s),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Ie(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&Se.storagemutated.fire(e.mutatedParts)})}return this},Fe.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Ae(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new j(function(i,l){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,l)},G])}):n?zt(function(){var i=new j(function(l,c){s._lock();var y=t(l,c,s);y&&y.then&&y.then(l,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new j(function(i,l){var c=t(i,l,s);c&&c.then&&c.then(i,l)}))._lib=!0,a):Ae(new Z.TransactionInactive)},Fe.prototype._root=function(){return this.parent?this.parent._root():this},Fe.prototype.waitFor=function(e){var t,n=this._root(),a=j.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new j(function(i,l){a.then(function(c){return n._waitingQueue.push(Ie(i.bind(null,c)))},function(c){return n._waitingQueue.push(Ie(l.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},Fe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},Fe.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(oe(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},Fe);function Fe(){}function qe(e,t,n,a,s,i,l,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!l?"&":"")+(a?"*":"")+(s?"++":"")+nt(t),type:c}}function nt(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Tt(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,l){return i=a(i,l),i&&(s[i[0]]=i[1]),s},{}))};var a}var yt=function(e){try{return e.only([[]]),yt=function(){return[[]]},[[]]}catch{return yt=function(){return sn},sn}};function ht(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return _t(n,t)}:function(n){return _t(n,e)};var t}function xt(e){return[].slice.call(e)}var Ot=0;function Ee(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function De(e,t,y){function a(m){if(m.type===3)return null;if(m.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=m.lower,C=m.upper,x=m.lowerOpen,m=m.upperOpen;return v===void 0?C===void 0?null:t.upperBound(C,!!m):C===void 0?t.lowerBound(v,!!x):t.bound(v,C,!!x,!!m)}function s(g){var v,C=g.name;return{name:C,schema:g,mutate:function(x){var m=x.trans,b=x.type,S=x.keys,E=x.values,k=x.range;return new Promise(function(T,O){T=Ie(T);var D=m.objectStore(C),R=D.keyPath==null,F=b==="put"||b==="add";if(!F&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var U,Y=(S||E||{length:1}).length;if(S&&E&&S.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(Y===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function q(_e){++ce,de(_e)}var W=[],me=[],ce=0;if(b==="deleteRange"){if(k.type===4)return T({numFailures:ce,failures:me,results:[],lastResult:void 0});k.type===3?W.push(U=D.clear()):W.push(U=D.delete(a(k)))}else{var R=F?R?[E,S]:[E,null]:[S,null],te=R[0],ie=R[1];if(F)for(var Le=0;Le<Y;++Le)W.push(U=ie&&ie[Le]!==void 0?D[b](te[Le],ie[Le]):D[b](te[Le])),U.onerror=q;else for(Le=0;Le<Y;++Le)W.push(U=D[b](te[Le])),U.onerror=q}function et(_e){_e=_e.target.result,W.forEach(function(xn,Wa){return xn.error!=null&&(me[Wa]=xn.error)}),T({numFailures:ce,failures:me,results:b==="delete"?S:W.map(function(xn){return xn.result}),lastResult:_e})}U.onerror=function(_e){q(_e),et(_e)},U.onsuccess=et})},getMany:function(x){var m=x.trans,b=x.keys;return new Promise(function(S,E){S=Ie(S);for(var k,T=m.objectStore(C),O=b.length,D=new Array(O),R=0,F=0,U=function(W){W=W.target,D[W._pos]=W.result,++F===R&&S(D)},Y=Re(E),q=0;q<O;++q)b[q]!=null&&((k=T.get(b[q]))._pos=q,k.onsuccess=U,k.onerror=Y,++R);R===0&&S(D)})},get:function(x){var m=x.trans,b=x.key;return new Promise(function(S,E){S=Ie(S);var k=m.objectStore(C).get(b);k.onsuccess=function(T){return S(T.target.result)},k.onerror=Re(E)})},query:(v=c,function(x){return new Promise(function(m,b){m=Ie(m);var S,E,k,F=x.trans,T=x.values,O=x.limit,R=x.query,D=O===1/0?void 0:O,U=R.index,R=R.range,F=F.objectStore(C),F=U.isPrimaryKey?F:F.index(U.name),U=a(R);if(O===0)return m({result:[]});v?((R=T?F.getAll(U,D):F.getAllKeys(U,D)).onsuccess=function(Y){return m({result:Y.target.result})},R.onerror=Re(b)):(S=0,E=!T&&"openKeyCursor"in F?F.openKeyCursor(U):F.openCursor(U),k=[],E.onsuccess=function(Y){var q=E.result;return!q||(k.push(T?q.value:q.primaryKey),++S===O)?m({result:k}):void q.continue()},E.onerror=Re(b))})}),openCursor:function(x){var m=x.trans,b=x.values,S=x.query,E=x.reverse,k=x.unique;return new Promise(function(T,O){T=Ie(T);var F=S.index,D=S.range,R=m.objectStore(C),R=F.isPrimaryKey?R:R.index(F.name),F=E?k?"prevunique":"prev":k?"nextunique":"next",U=!b&&"openKeyCursor"in R?R.openKeyCursor(a(D),F):R.openCursor(a(D),F);U.onerror=Re(O),U.onsuccess=Ie(function(Y){var q,W,me,ce,te=U.result;te?(te.___id=++Ot,te.done=!1,q=te.continue.bind(te),W=(W=te.continuePrimaryKey)&&W.bind(te),me=te.advance.bind(te),ce=function(){throw new Error("Cursor not stopped")},te.trans=m,te.stop=te.continue=te.continuePrimaryKey=te.advance=function(){throw new Error("Cursor not started")},te.fail=Ie(O),te.next=function(){var ie=this,Le=1;return this.start(function(){return Le--?ie.continue():ie.stop()}).then(function(){return ie})},te.start=function(ie){function Le(){if(U.result)try{ie()}catch(_e){te.fail(_e)}else te.done=!0,te.start=function(){throw new Error("Cursor behind last entry")},te.stop()}var et=new Promise(function(_e,xn){_e=Ie(_e),U.onerror=Re(xn),te.fail=xn,te.stop=function(Wa){te.stop=te.continue=te.continuePrimaryKey=te.advance=ce,_e(Wa)}});return U.onsuccess=Ie(function(_e){U.onsuccess=Le,Le()}),te.continue=q,te.continuePrimaryKey=W,te.advance=me,Le(),et},T(te)):T(null)},O)})},count:function(x){var m=x.query,b=x.trans,S=m.index,E=m.range;return new Promise(function(k,T){var O=b.objectStore(C),O=S.isPrimaryKey?O:O.index(S.name),D=a(E),D=D?O.count(D):O.count();D.onsuccess=Ie(function(R){return k(R.target.result)}),D.onerror=Re(T)})}}}i=y,l=xt((y=e).objectStoreNames);var i,y={schema:{name:y.name,tables:l.map(function(g){return i.objectStore(g)}).map(function(g){var v=g.keyPath,C=g.autoIncrement,m=se(v),x={},m={name:g.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:m,keyPath:v,autoIncrement:C,unique:!0,extractKey:ht(v)},indexes:xt(g.indexNames).map(function(b){return g.index(b)}).map(function(k){var T=k.name,S=k.unique,E=k.multiEntry,k=k.keyPath,T={name:T,compound:se(k),keyPath:k,unique:S,multiEntry:E,extractKey:ht(k)};return x[Ee(k)]=T}),getIndexByKeyPath:function(b){return x[Ee(b)]}};return x[":id"]=m.primaryKey,v!=null&&(x[Ee(v)]=m.primaryKey),m})},hasGetAll:0<l.length&&"getAll"in i.objectStore(l[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},l=y.schema,c=y.hasGetAll,y=l.tables.map(s),$={};return y.forEach(function(g){return $[g.name]=g}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(g){if($[g])return $[g];throw new Error("Table '".concat(g,"' not found"))},MIN_KEY:-1/0,MAX_KEY:yt(t),schema:l}}function Ue(e,t,n,a){return n=n.IDBKeyRange,t=De(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,J(J({},s),i(s))},t)}}function Ve(e,t){var n=t.db,n=Ue(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function Xe(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(l){var c=(function y($,g){return Gn($,g)||($=it($))&&y($,g)})(l,s);(!c||"value"in c&&c.value===void 0)&&(l===e.Transaction.prototype||l instanceof e.Transaction?dt(l,s,{get:function(){return this.table(s)},set:function(y){ct(this,s,{value:y,writable:!0,configurable:!0,enumerable:!0})}}):l[s]=new e.Table(s,i))})})}function wt(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function on(e,t){return e._cfg.version-t._cfg.version}function Ut(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Tt("$meta",Tn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),l=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=G.transless||G;zt(function(){if(G.trans=i,G.transless=c,t!==0)return Ve(e,n),$=t,((y=i).storeNames.includes("$meta")?y.table("$meta").get("version").then(function(g){return g??$}):j.resolve($)).then(function(S){var v=e,C=S,x=i,m=n,b=[],S=v._versions,E=v._dbSchema=Gt(0,v.idbdb,m);return(S=S.filter(function(k){return k._cfg.version>=C})).length===0?j.resolve():(S.forEach(function(k){b.push(function(){var T,O,D,R=E,F=k._cfg.dbschema,U=(Pn(v,R,m),Pn(v,F,m),E=v._dbSchema=F,M(R,F)),Y=(U.add.forEach(function(q){K(m,q[0],q[1].primKey,q[1].indexes)}),U.change.forEach(function(q){if(q.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var W=m.objectStore(q.name);q.add.forEach(function(me){return yn(W,me)}),q.change.forEach(function(me){W.deleteIndex(me.name),yn(W,me)}),q.del.forEach(function(me){return W.deleteIndex(me)})}),k._cfg.contentUpgrade);if(Y&&k._cfg.version>C)return Ve(v,m),x._memoizedTables={},T=Ma(F),U.del.forEach(function(q){T[q]=R[q]}),wt(v,[v.Transaction.prototype]),Xe(v,[v.Transaction.prototype],we(T),T),x.schema=T,(O=Qn(Y))&&_n(),F=j.follow(function(){var q;(D=Y(x))&&O&&(q=an.bind(null,null),D.then(q,q))}),D&&typeof D.then=="function"?j.resolve(D):F.then(function(){return D})}),b.push(function(T){var O,D,R=k._cfg.dbschema;O=R,D=T,[].slice.call(D.db.objectStoreNames).forEach(function(F){return O[F]==null&&D.db.deleteObjectStore(F)}),wt(v,[v.Transaction.prototype]),Xe(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),x.schema=v._dbSchema}),b.push(function(T){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===k._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(O){return O!=="$meta"})):T.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return b.length?j.resolve(b.shift()(x.idbtrans)).then(k):j.resolve()})().then(function(){ue(E,m)}))}).catch(l);var y,$;we(s).forEach(function(g){K(n,g,s[g].primKey,s[g].indexes)}),Ve(e,n),j.follow(function(){return e.on.populate.fire(i)}).catch(l)})}function Wt(e,t){ue(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Gt(0,e.idbdb,t);Pn(e,e._dbSchema,t);for(var a=0,s=M(n,e._dbSchema).change;a<s.length;a++){var i=(l=>{if(l.change.length||l.recreate)return console.warn("Unable to patch indexes of table ".concat(l.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(l.name);l.add.forEach(function(y){ke&&console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name,".").concat(y.src)),yn(c,y)})})(s[a]);if(typeof i=="object")return i.value}}function M(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var l={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)l.recreate=!0,a.change.push(l);else{var c=s.idxByName,y=i.idxByName,$=void 0;for($ in c)y[$]||l.del.push($);for($ in y){var g=c[$],v=y[$];g?g.src!==v.src&&l.change.push(v):l.add.push(v)}(0<l.del.length||0<l.add.length||0<l.change.length)&&a.change.push(l)}}else a.add.push([n,i])}return a}function K(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return yn(s,i)})}function ue(e,t){we(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(ke&&console.debug("Dexie: Creating missing table",n),K(t,n,e[n].primKey,e[n].indexes))})}function yn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Gt(e,t,n){var a={};return Jn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),l=qe(nt($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),c=[],y=0;y<i.indexNames.length;++y){var g=i.index(i.indexNames[y]),$=g.keyPath,g=qe(g.name,$,!!g.unique,!!g.multiEntry,!1,$&&typeof $!="string",!1);c.push(g)}a[s]=Tt(s,l,c)}),a}function Pn(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],l=n.objectStore(i);e._hasGetAll="getAll"in l;for(var c=0;c<l.indexNames.length;++c){var y,$=l.indexNames[c],g=l.index($).keyPath,g=typeof g=="string"?g:"["+Jn(g).join("+")+"]";t[i]&&(y=t[i].idxByName[g])&&(y.name=$,delete t[i].idxByName[g],t[i].idxByName[$]=y)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&re.WorkerGlobalScope&&re instanceof re.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Tn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return qe(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),se(i),n===0,a)})}Me.prototype._createTableSchema=Tt,Me.prototype._parseIndexSyntax=Tn,Me.prototype._parseStoresSpec=function(e,t){var n=this;we(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new Z.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");s.forEach(function(l){if(l.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},Me.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?be(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){be(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,wt(t,[t._allTables,t,t.Transaction.prototype]),Xe(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],we(s),s),t._storeNames=we(s),this},Me.prototype.upgrade=function(e){return this._cfg.contentUpgrade=fn(this._cfg.contentUpgrade||Be,e),this};var Kn=Me;function Me(){}function La(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new kt(ca,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function pa(e){return e&&typeof e.databases=="function"}function va(e){return zt(function(){return G.letThrough=!0,e()})}function ma(e){return!("from"in e)}var rt=function(e,t){var n;if(!this)return n=new rt,e&&"d"in e&&be(n,e),n;be(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Ln(e,t,n){var a=pe(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(ma(e))return be(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(pe(n,e.from)<0)return a?Ln(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},ja(e);if(0<pe(t,e.to))return s?Ln(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},ja(e);pe(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<pe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&pt(e,a),s&&t&&pt(e,s)}}function pt(e,t){ma(t)||(function n(a,s){var i=s.from,l=s.l,c=s.r;Ln(a,i,s.to),l&&n(a,l),c&&n(a,c)})(e,t)}function At(e,t){var n=jn(t),a=n.next();if(!a.done)for(var s=a.value,i=jn(e),l=i.next(s.from),c=l.value;!a.done&&!l.done;){if(pe(c.from,s.to)<=0&&0<=pe(c.to,s.from))return!0;pe(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(l=i.next(s.from)).value}return!1}function jn(e){var t=ma(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&pe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||pe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function ja(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=J({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Ra(n)),e.d=Ra(e)}function Ra(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Rn(e,t){return we(t).forEach(function(n){e[n]?pt(e[n],t[n]):e[n]=(function a(s){var i,l,c={};for(i in s)oe(s,i)&&(l=s[i],c[i]=!l||typeof l!="object"||Nt.has(l.constructor)?l:a(l));return c})(t[n])}),e}function ga(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&At(t[n],e[n])})}mt(rt.prototype,((gt={add:function(e){return pt(this,e),this},addKey:function(e){return Ln(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Ln(t,n,n)}),this},hasKey:function(e){var t=jn(this).next(e).value;return t&&pe(t.from,e)<=0&&0<=pe(t.to,e)}})[Xn]=function(){return jn(this)},gt));var ln={},ba={},Va=!1;function On(e){Rn(ba,e),Va||(Va=!0,setTimeout(function(){Va=!1,ya(ba,!(ba={}))},0))}function ya(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(ln);a<s.length;a++)Ft(c=s[a],e,n,t);else for(var i in e){var l,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(l=i[1],i=i[2],c=ln["idb://".concat(l,"/").concat(i)])&&Ft(c,e,n,t)}n.forEach(function(y){return y()})}function Ft(e,t,n,a){for(var s=[],i=0,l=Object.entries(e.queries.query);i<l.length;i++){for(var c=l[i],y=c[0],$=[],g=0,v=c[1];g<v.length;g++){var C=v[g];ga(t,C.obsSet)?C.subscribers.forEach(function(S){return n.add(S)}):a&&$.push(C)}a&&s.push([y,$])}if(a)for(var x=0,m=s;x<m.length;x++){var b=m[x],y=b[0],$=b[1];e.queries.query[y]=$}}function $r(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ae(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function l(){if(t.openCanceller!==a)throw new Z.DatabaseClosed("db.open() was cancelled")}function c(){return new j(function(C,x){if(l(),!n)throw new Z.MissingAPI;var m=e.name,b=t.autoSchema||!s?n.open(m):n.open(m,s);if(!b)throw new Z.MissingAPI;b.onerror=Re(x),b.onblocked=Ie(e._fireOnBlocked),b.onupgradeneeded=Ie(function(S){var E;g=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=de,g.abort(),b.result.close(),(E=n.deleteDatabase(m)).onsuccess=E.onerror=Ie(function(){x(new Z.NoSuchDatabase("Database ".concat(m," doesnt exist")))})):(g.onerror=Re(x),E=S.oldVersion>Math.pow(2,62)?0:S.oldVersion,v=E<1,e.idbdb=b.result,i&&Wt(e,g),Ut(e,E/10,g,x))},x),b.onsuccess=Ie(function(){g=null;var S,E,k,T,O,D,R=e.idbdb=b.result,F=Jn(R.objectStoreNames);if(0<F.length)try{var U=R.transaction((O=F).length===1?O[0]:O,"readonly");if(t.autoSchema)D=R,T=U,(k=e).verno=D.version/10,T=k._dbSchema=Gt(0,D,T),k._storeNames=Jn(D.objectStoreNames,0),Xe(k,[k._allTables],we(T),T);else if(Pn(e,e._dbSchema,U),E=U,((E=M(Gt(0,(S=e).idbdb,E),S._dbSchema)).add.length||E.change.some(function(Y){return Y.add.length||Y.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),R.close(),s=R.version+1,i=!0,C(c());Ve(e,U)}catch{}Mn.push(e),R.onversionchange=Ie(function(Y){t.vcFired=!0,e.on("versionchange").fire(Y)}),R.onclose=Ie(function(){e.close({disableAutoOpen:!1})}),v&&(F=e._deps,O=m,pa(D=F.indexedDB)||O===ca||La(D,F.IDBKeyRange).put({name:O}).catch(Be)),C()},x)}).catch(function(C){switch(C?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return j.reject(C)})}var y,$=t.dbReadyResolve,g=null,v=!1;return j.race([a,(typeof navigator>"u"?j.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(C){function x(){return indexedDB.databases().finally(C)}y=setInterval(x,100),x()}).finally(function(){return clearInterval(y)}):Promise.resolve()).then(c)]).then(function(){return l(),t.onReadyBeingFired=[],j.resolve(va(function(){return e.on.ready.fire(e.vip)})).then(function C(){var x;if(0<t.onReadyBeingFired.length)return x=t.onReadyBeingFired.reduce(fn,Be),t.onReadyBeingFired=[],j.resolve(va(function(){return x(e.vip)})).then(C)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(C){t.dbOpenError=C;try{g&&g.abort()}catch{}return a===t.openCanceller&&e._close(),Ae(C)}).finally(function(){t.openComplete=!0,$()}).then(function(){var C;return v&&(C={},e.tables.forEach(function(x){x.schema.indexes.forEach(function(m){m.name&&(C["idb://".concat(e.name,"/").concat(x.name,"/").concat(m.name)]=new rt(-1/0,[[[]]]))}),C["idb://".concat(e.name,"/").concat(x.name,"/")]=C["idb://".concat(e.name,"/").concat(x.name,"/:dels")]=new rt(-1/0,[[[]]])}),Se(at).fire(C),ya(C,!0)),e})}function Dt(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),y=c.value;return c.done?y:y&&typeof y.then=="function"?y.then(n,a):se(y)?Promise.all(y).then(n,a):n(y)}}return s(t)()}function Ca(e,t,n){for(var a=se(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Sr={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return J(J({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function l(C,x,m){var k=Ee(C),b=s[k]=s[k]||[],S=C==null?0:typeof C=="string"?1:C.length,E=0<x,k=J(J({},m),{name:E?"".concat(k,"(virtual-from:").concat(m.name,")"):m.name,lowLevelIndex:m,isVirtual:E,keyTail:x,keyLength:S,extractKey:ht(C),unique:!E&&m.unique});return b.push(k),k.isPrimaryKey||i.push(k),1<S&&l(S===2?C[0]:C.slice(0,S-1),x+1,m),b.sort(function(T,O){return T.keyTail-O.keyTail}),k}var c=l(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var y=0,$=a.indexes;y<$.length;y++){var g=$[y];l(g.keyPath,0,g)}function v(C){var x,m=C.query.index;return m.isVirtual?J(J({},C),{query:{index:m.lowLevelIndex,range:(x=C.query.range,m=m.keyTail,{type:x.type===1?2:x.type,lower:Ca(x.lower,x.lowerOpen?e.MAX_KEY:e.MIN_KEY,m),lowerOpen:!0,upper:Ca(x.upper,x.upperOpen?e.MIN_KEY:e.MAX_KEY,m),upperOpen:!0})}}):C}return J(J({},n),{schema:J(J({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(C){return(C=s[Ee(C)])&&C[0]}}),count:function(C){return n.count(v(C))},query:function(C){return n.query(v(C))},openCursor:function(C){var x=C.query.index,m=x.keyTail,b=x.keyLength;return x.isVirtual?n.openCursor(v(C)).then(function(E){return E&&S(E)}):n.openCursor(C);function S(E){return Object.create(E,{continue:{value:function(k){k!=null?E.continue(Ca(k,C.reverse?e.MAX_KEY:e.MIN_KEY,m)):C.unique?E.continue(E.key.slice(0,b).concat(C.reverse?e.MIN_KEY:e.MAX_KEY,m)):E.continue()}},continuePrimaryKey:{value:function(k,T){E.continuePrimaryKey(Ca(k,e.MAX_KEY,m),T)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var k=E.key;return b===1?k[0]:k.slice(0,b)}},value:{get:function(){return E.value}}})}}})}})}};function xa(e,t,n,a){return n=n||{},a=a||"",we(e).forEach(function(s){var i,l,c;oe(t,s)?(i=e[s],l=t[s],typeof i=="object"&&typeof l=="object"&&i&&l?(c=Pa(i))!==Pa(l)?n[a+s]=t[s]:c==="Object"?xa(i,l,n,a+s+"."):i!==l&&(n[a+s]=t[s]):i!==l&&(n[a+s]=t[s])):n[a+s]=void 0}),we(t).forEach(function(s){oe(e,s)||(n[a+s]=t[s])}),n}function wa(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var sr={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return J(J({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return J(J({},n),{mutate:function(s){var i=G.trans,l=i.table(t).hook,c=l.deleting,y=l.creating,$=l.updating;switch(s.type){case"add":if(y.fire===Be)break;return i._promise("readwrite",function(){return g(s)},!0);case"put":if(y.fire===Be&&$.fire===Be)break;return i._promise("readwrite",function(){return g(s)},!0);case"delete":if(c.fire===Be)break;return i._promise("readwrite",function(){return g(s)},!0);case"deleteRange":if(c.fire===Be)break;return i._promise("readwrite",function(){return(function v(C,x,m){return n.query({trans:C,values:!1,query:{index:a,range:x},limit:m}).then(function(b){var S=b.result;return g({type:"delete",keys:S,trans:C}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):S.length<m?{failures:[],numFailures:0,lastResult:void 0}:v(C,J(J({},x),{lower:S[S.length-1],lowerOpen:!0}),m)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function g(v){var C,x,m,b=G.trans,S=v.keys||wa(a,v);if(S)return(v=v.type==="add"||v.type==="put"?J(J({},v),{keys:S}):J({},v)).type!=="delete"&&(v.values=ge([],v.values)),v.keys&&(v.keys=ge([],v.keys)),C=n,m=S,((x=v).type==="add"?Promise.resolve([]):C.getMany({trans:x.trans,keys:m,cache:"immutable"})).then(function(E){var k=S.map(function(T,O){var D,R,F,U=E[O],Y={onerror:null,onsuccess:null};return v.type==="delete"?c.fire.call(Y,T,U,b):v.type==="add"||U===void 0?(D=y.fire.call(Y,T,v.values[O],b),T==null&&D!=null&&(v.keys[O]=T=D,a.outbound||ft(v.values[O],a.keyPath,T))):(D=xa(U,v.values[O]),(R=$.fire.call(Y,D,T,U,b))&&(F=v.values[O],Object.keys(R).forEach(function(q){oe(F,q)?F[q]=R[q]:ft(F,q,R[q])}))),Y});return n.mutate(v).then(function(T){for(var O=T.failures,D=T.results,R=T.numFailures,T=T.lastResult,F=0;F<S.length;++F){var U=(D||S)[F],Y=k[F];U==null?Y.onerror&&Y.onerror(O[F]):Y.onsuccess&&Y.onsuccess(v.type==="put"&&E[F]?v.values[F]:U)}return{failures:O,results:D,numFailures:R,lastResult:T}}).catch(function(T){return k.forEach(function(O){return O.onerror&&O.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function Ya(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)pe(t.keys[s],e[i])===0&&(a.push(n?un(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var ir={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return J(J({},n),{getMany:function(a){var s;return a.cache?(s=Ya(a.keys,a.trans._cache,a.cache==="clone"))?j.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?un(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function or(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function lr(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Br={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new rt(e.MIN_KEY,e.MAX_KEY);return J(J({},e),{transaction:function(a,s,i){if(G.subscr&&s!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));return e.transaction(a,s,i)},table:function(a){function s(S){var b,S=S.query;return[b=S.index,new rt((b=(S=S.range).lower)!=null?b:e.MIN_KEY,(b=S.upper)!=null?b:e.MAX_KEY)]}var i=e.table(a),l=i.schema,c=l.primaryKey,y=l.indexes,$=c.extractKey,g=c.outbound,v=c.autoIncrement&&y.filter(function(m){return m.compound&&m.keyPath.includes(c.keyPath)}),C=J(J({},i),{mutate:function(m){function b(W){return W="idb://".concat(t,"/").concat(a,"/").concat(W),O[W]||(O[W]=new rt)}var S,E,k,T=m.trans,O=m.mutatedParts||(m.mutatedParts={}),D=b(""),R=b(":dels"),F=m.type,Y=m.type==="deleteRange"?[m.range]:m.type==="delete"?[m.keys]:m.values.length<50?[wa(c,m).filter(function(W){return W}),m.values]:[],U=Y[0],Y=Y[1],q=m.trans._cache;return se(U)?(D.addKeys(U),(F=F==="delete"||U.length===Y.length?Ya(U,q):null)||R.addKeys(U),(F||Y)&&(S=b,E=F,k=Y,l.indexes.forEach(function(W){var me=S(W.name||"");function ce(ie){return ie!=null?W.extractKey(ie):null}function te(ie){W.multiEntry&&se(ie)?ie.forEach(function(Le){return me.addKey(Le)}):me.addKey(ie)}(E||k).forEach(function(ie,_e){var et=E&&ce(E[_e]),_e=k&&ce(k[_e]);pe(et,_e)!==0&&(et!=null&&te(et),_e!=null)&&te(_e)})}))):U?(Y={from:(q=U.lower)!=null?q:e.MIN_KEY,to:(F=U.upper)!=null?F:e.MAX_KEY},R.add(Y),D.add(Y)):(D.add(n),R.add(n),l.indexes.forEach(function(W){return b(W.name).add(n)})),i.mutate(m).then(function(W){return!U||m.type!=="add"&&m.type!=="put"||(D.addKeys(W.results),v&&v.forEach(function(me){for(var ce=m.values.map(function(et){return me.extractKey(et)}),te=me.keyPath.findIndex(function(et){return et===c.keyPath}),ie=0,Le=W.results.length;ie<Le;++ie)ce[ie][te]=W.results[ie];b(me.name).addKeys(ce)})),T.mutatedParts=Rn(T.mutatedParts||{},O),W})}}),x={get:function(m){return[c,new rt(m.key)]},getMany:function(m){return[c,new rt().addKeys(m.keys)]},count:s,query:s,openCursor:s};return we(x).forEach(function(m){C[m]=function(b){var S=G.subscr,E=!!S,k=or(G,i)&&lr(m,b)?b.obsSet={}:S;if(E){var T,S=function(Y){return Y="idb://".concat(t,"/").concat(a,"/").concat(Y),k[Y]||(k[Y]=new rt)},O=S(""),D=S(":dels"),E=x[m](b),R=E[0],E=E[1];if((m==="query"&&R.isPrimaryKey&&!b.values?D:S(R.name||"")).add(E),!R.isPrimaryKey){if(m!=="count")return T=m==="query"&&g&&b.values&&i.query(J(J({},b),{values:!1})),i[m].apply(this,arguments).then(function(Y){if(m==="query"){if(g&&b.values)return T.then(function(ce){return ce=ce.result,O.addKeys(ce),Y});var q=b.values?Y.result.map($):Y.result;(b.values?O:D).addKeys(q)}else{var W,me;if(m==="openCursor")return me=b.values,(W=Y)&&Object.create(W,{key:{get:function(){return D.addKey(W.primaryKey),W.key}},primaryKey:{get:function(){var ce=W.primaryKey;return D.addKey(ce),ce}},value:{get:function(){return me&&O.addKey(W.primaryKey),W.value}}})}return Y});D.add(n)}}return i[m].apply(this,arguments)}}),C}})}};function ur(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=J({},t),se(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&se(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function za(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<pe(n,a.lower):0<=pe(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?pe(n,a.upper)<0:pe(n,a.upper)<=0));var n,a}function An(e,t,n,a,s,i){var l,c,y,$,g,v;return!n||n.length===0||(l=t.query.index,c=l.multiEntry,y=t.query.range,$=a.schema.primaryKey.extractKey,g=l.extractKey,v=(l.lowLevelIndex||l).extractKey,(a=n.reduce(function(C,x){var m=C,b=[];if(x.type==="add"||x.type==="put")for(var S=new rt,E=x.values.length-1;0<=E;--E){var k,T=x.values[E],O=$(T);!S.hasKey(O)&&(k=g(T),c&&se(k)?k.some(function(Y){return za(Y,y)}):za(k,y))&&(S.addKey(O),b.push(T))}switch(x.type){case"add":var D=new rt().addKeys(t.values?C.map(function(q){return $(q)}):C),m=C.concat(t.values?b.filter(function(q){return q=$(q),!D.hasKey(q)&&(D.addKey(q),!0)}):b.map(function(q){return $(q)}).filter(function(q){return!D.hasKey(q)&&(D.addKey(q),!0)}));break;case"put":var R=new rt().addKeys(x.values.map(function(q){return $(q)}));m=C.filter(function(q){return!R.hasKey(t.values?$(q):q)}).concat(t.values?b:b.map(function(q){return $(q)}));break;case"delete":var F=new rt().addKeys(x.keys);m=C.filter(function(q){return!F.hasKey(t.values?$(q):q)});break;case"deleteRange":var U=x.range;m=C.filter(function(q){return!za($(q),U)})}return m},e))===e)?e:(a.sort(function(C,x){return pe(v(C),v(x))||pe($(C),$(x))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function cr(e,t){return pe(e.lower,t.lower)===0&&pe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function dr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=pe(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=pe(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Er(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&xe(i,s)},3e3))})}var _r={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return J(J({},e),{transaction:function(n,a,s){var i,l,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(l=function(y){return function(){if(i.abort(),a==="readwrite"){for(var $=new Set,g=0,v=n;g<v.length;g++){var C=v[g],x=ln["idb://".concat(t,"/").concat(C)];if(x){var m=e.table(C),b=x.optimisticOps.filter(function(W){return W.trans===c});if(c._explicit&&y&&c.mutatedParts)for(var S=0,E=Object.values(x.queries.query);S<E.length;S++)for(var k=0,T=(R=E[S]).slice();k<T.length;k++)ga((F=T[k]).obsSet,c.mutatedParts)&&(xe(R,F),F.subscribers.forEach(function(W){return $.add(W)}));else if(0<b.length){x.optimisticOps=x.optimisticOps.filter(function(W){return W.trans!==c});for(var O=0,D=Object.values(x.queries.query);O<D.length;O++)for(var R,F,U,Y=0,q=(R=D[O]).slice();Y<q.length;Y++)(F=q[Y]).res!=null&&c.mutatedParts&&(y&&!F.dirty?(U=Object.isFrozen(F.res),U=An(F.res,F.req,b,m,F,U),F.dirty?(xe(R,F),F.subscribers.forEach(function(W){return $.add(W)})):U!==F.res&&(F.res=U,F.promise=j.resolve({result:U}))):(F.dirty&&xe(R,F),F.subscribers.forEach(function(W){return $.add(W)})))}}}$.forEach(function(W){return W()})}}})(!1),{signal:s}),c.addEventListener("error",l(!1),{signal:s}),c.addEventListener("complete",l(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return J(J({},a),{mutate:function(i){var l,c=G.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(l=ln["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||wa(s,i).some(function(y){return y==null}))?(l.optimisticOps.push(i),i.mutatedParts&&On(i.mutatedParts),c.then(function(y){0<y.numFailures&&(xe(l.optimisticOps,i),(y=ur(0,i,y))&&l.optimisticOps.push(y),i.mutatedParts)&&On(i.mutatedParts)}),c.catch(function(){xe(l.optimisticOps,i),i.mutatedParts&&On(i.mutatedParts)})):c.then(function(y){var $=ur(0,J(J({},i),{values:i.values.map(function(g,v){var C;return y.failures[v]?g:(ft(C=(C=s.keyPath)!=null&&C.includes(".")?un(g):J({},g),s.keyPath,y.results[v]),C)})}),y);l.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&On(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var l,c,y,$,g,v,C;return or(G,a)&&lr("query",i)?(l=((y=G.trans)==null?void 0:y.db._options.cache)==="immutable",c=(y=G).requery,y=y.signal,v=((x,m,b,S)=>{var E=ln["idb://".concat(x,"/").concat(m)];if(!E)return[];if(!(x=E.queries[b]))return[null,!1,E,null];var k=x[(S.query?S.query.index.name:null)||""];if(!k)return[null,!1,E,null];switch(b){case"query":var T=k.find(function(O){return O.req.limit===S.limit&&O.req.values===S.values&&cr(O.req.query.range,S.query.range)});return T?[T,!0,E,k]:[k.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=S.limit&&(!S.values||O.req.values)&&dr(O.req.query.range,S.query.range)}),!1,E,k];case"count":return T=k.find(function(O){return cr(O.req.query.range,S.query.range)}),[T,!!T,E,k]}})(t,n,"query",i),C=v[0],$=v[2],g=v[3],C&&v[1]?C.obsSet=i.obsSet:(v=a.query(i).then(function(x){var m=x.result;if(C&&(C.res=m),l){for(var b=0,S=m.length;b<S;++b)Object.freeze(m[b]);Object.freeze(m)}else x.result=un(m);return x}).catch(function(x){return g&&C&&xe(g,C),Promise.reject(x)}),C={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},g?g.push(C):(g=[C],($=$||(ln["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=g)),Er(C,g,c,y),C.promise.then(function(x){return{result:An(x.result,i,$?.optimisticOps,a,C,l)}})):a.query(i)}})}})}};function st(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}fe.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(on),n.stores({}),this._state.autoSchema=!1),n},fe.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||G.letThrough||this._vip)?e():new j(function(n,a){if(t._state.openComplete)return a(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new Z.DatabaseClosed);t.open().catch(Be)}t._state.dbReadyPromise.then(n,a)}).then(e)},fe.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(l,c){return l.level-c.level}),this},fe.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},fe.prototype.open=function(){var e=this;return gn(en,function(){return $r(e)})},fe.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Mn.indexOf(this);if(0<=t&&Mn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new j(function(n){e.dbReadyResolve=n}),e.openCanceller=new j(function(n,a){e.cancelOpen=a}))},fe.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},fe.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new j(function(s,i){function l(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=Ie(function(){var y,$,g;y=t._deps,$=t.name,pa(g=y.indexedDB)||$===ca||La(g,y.IDBKeyRange).delete($).catch(Be),s()}),c.onerror=Re(i),c.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(l):l()})},fe.prototype.backendDB=function(){return this.idbdb},fe.prototype.isOpen=function(){return this.idbdb!==null},fe.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},fe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},fe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(fe.prototype,"tables",{get:function(){var e=this;return we(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),fe.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Ja(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},fe.prototype._transaction=function(e,t,n){var a,s,i=this,l=G.trans,c=(l&&l.db===this&&e.indexOf("!")===-1||(l=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===qa)a=qa;else{if(e!="rw"&&e!=da)throw new Z.InvalidArgument("Invalid transaction mode: "+e);a=da}if(l){if(l.mode===qa&&a===da){if(!c)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");l=null}l&&s.forEach(function($){if(l&&l.storeNames.indexOf($)===-1){if(!c)throw new Z.SubTransaction("Table "+$+" not included in parent transaction.");l=null}}),c&&l&&!l.active&&(l=null)}}catch($){return l?l._promise(null,function(g,v){v($)}):Ae($)}var y=(function $(g,v,C,x,m){return j.resolve().then(function(){var k=G.transless||G,b=g._createTransaction(v,C,g._dbSchema,x),k=(b.explicit=!0,{trans:b,transless:k});if(x)b.idbtrans=x.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,g._state.PR1398_maxLoop=3}catch(T){return T.name===Oa.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return $(g,v,C,null,m)})):Ae(T)}var S,E=Qn(m),k=(E&&_n(),j.follow(function(){var T;(S=m.call(b,b))&&(E?(T=an.bind(null,null),S.then(T,T)):typeof S.next=="function"&&typeof S.throw=="function"&&(S=Dt(S)))},k));return(S&&typeof S.then=="function"?j.resolve(S).then(function(T){return b.active?T:Ae(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return S})).then(function(T){return x&&b._resolve(),b._completion.then(function(){return T})}).catch(function(T){return b._reject(T),Ae(T)})})}).bind(null,this,a,s,l,n);return l?l._promise(a,y,"lock"):G.trans?gn(G.transless,function(){return i._whenReady(y)}):this._whenReady(y)},fe.prototype.table=function(e){if(oe(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var kt=fe;function fe(e,t){var n,a,s,i,l,c=this,y=(this._middlewares={},this.verno=0,fe.dependencies),y=(this._options=t=J({addons:fe.addons,autoOpen:!0,indexedDB:y.indexedDB,IDBKeyRange:y.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Be,dbReadyPromise:null,cancelOpen:Be,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),g=($.dbReadyPromise=new j(function(v){$.dbReadyResolve=v}),$.openCanceller=new j(function(v,C){$.cancelOpen=C}),this._state=$,this.name=e,this.on=_(this,"populate","blocked","versionchange","close",{ready:[fn,Be]}),this.once=function(v,C){var x=function(){for(var m=[],b=0;b<arguments.length;b++)m[b]=arguments[b];c.on(v).unsubscribe(x),C.apply(c,m)};return c.on(v,x)},this.on.ready.subscribe=Hn(this.on.ready.subscribe,function(v){return function(C,x){fe.vip(function(){var m,b=c._state;b.openComplete?(b.dbOpenError||j.resolve().then(C),x&&v(C)):b.onReadyBeingFired?(b.onReadyBeingFired.push(C),x&&v(C)):(v(C),m=c,x||v(function S(){m.on.ready.unsubscribe(C),m.on.ready.unsubscribe(S)}))})}}),this.Collection=(n=this,A(Te.prototype,function(S,b){this.db=n;var x=Ka,m=null;if(b)try{x=b()}catch(k){m=k}var b=S._ctx,S=b.table,E=S.hook.reading.fire;this._ctx={table:S,index:b.index,isPrimKey:!b.index||S.schema.primKey.keyPath&&b.index===S.schema.primKey.name,range:x,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:m,or:b.or,valueMapper:E!==Bn?E:null}})),this.Table=(a=this,A(d.prototype,function(v,C,x){this.db=a,this._tx=x,this.name=v,this.schema=C,this.hook=a._allTables[v]?a._allTables[v].hook:_(null,{creating:[Aa,Be],reading:[Cr,Bn],updating:[ea,Be],deleting:[Fa,Be]})})),this.Transaction=(s=this,A(lt.prototype,function(v,C,x,m,b){var S=this;v!=="readonly"&&C.forEach(function(E){E=(E=x[E])==null?void 0:E.yProps,E&&(C=C.concat(E.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=v,this.storeNames=C,this.schema=x,this.chromeTransactionDurability=m,this.idbtrans=null,this.on=_(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new j(function(E,k){S._resolve=E,S._reject=k}),this._completion.then(function(){S.active=!1,S.on.complete.fire()},function(E){var k=S.active;return S.active=!1,S.on.error.fire(E),S.parent?S.parent._reject(E):k&&S.idbtrans&&S.idbtrans.abort(),Ae(E)})})),this.Version=(i=this,A(Kn.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(l=this,A(bt.prototype,function(v,C,x){if(this.db=l,this._ctx={table:v,index:C===":id"?null:C,or:x},this._cmp=this._ascending=pe,this._descending=function(m,b){return pe(b,m)},this._max=function(m,b){return 0<pe(m,b)?m:b},this._min=function(m,b){return pe(m,b)<0?m:b},this._IDBKeyRange=l._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=yt(t.IDBKeyRange),this._createTransaction=function(v,C,x,m){return new c.Transaction(v,C,x,c._options.chromeTransactionDurability,m)},this._fireOnBlocked=function(v){c.on("blocked").fire(v),Mn.filter(function(C){return C.name===c.name&&C!==c&&!C._state.vcFired}).map(function(C){return C.on("versionchange").fire(v)})},this.use(ir),this.use(_r),this.use(Br),this.use(Sr),this.use(sr),new Proxy(this,{get:function(v,C,x){var m;return C==="_vip"||(C==="table"?function(b){return st(c.table(b),g)}:(m=Reflect.get(v,C,x))instanceof d?st(m,g):C==="tables"?m.map(function(b){return st(b,g)}):C==="_createTransaction"?function(){return st(m.apply(this,arguments),g)}:m)}}));this.vip=g,y.forEach(function(v){return v(c)})}var ka,$t=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Vn=(Ua.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Ua.prototype[$t]=function(){return this},Ua);function Ua(e){this._subscribe=e}try{ka={indexedDB:re.indexedDB||re.mozIndexedDB||re.webkitIndexedDB||re.msIndexedDB,IDBKeyRange:re.IDBKeyRange||re.webkitIDBKeyRange}}catch{ka={indexedDB:null,IDBKeyRange:null}}function fr(e){var t,n=!1,a=new Vn(function(s){var i=Qn(e),l,c=!1,y={},$={},g={get closed(){return c},unsubscribe:function(){c||(c=!0,l&&l.abort(),v&&Se.storagemutated.unsubscribe(x))}},v=(s.start&&s.start(g),!1),C=function(){return Na(m)},x=function(b){Rn(y,b),ga($,y)&&C()},m=function(){var b,S,E;!c&&ka.indexedDB&&(y={},b={},l&&l.abort(),l=new AbortController,E=(k=>{var T=En();try{i&&_n();var O=zt(e,k);return O=i?O.finally(an):O}finally{T&&mn()}})(S={subscr:b,signal:l.signal,requery:C,querier:e,trans:null}),Promise.resolve(E).then(function(k){n=!0,t=k,c||S.signal.aborted||(y={},(T=>{for(var O in T)if(oe(T,O))return;return 1})($=b)||v||(Se(at,x),v=!0),Na(function(){return!c&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||c||Na(function(){c||s.error&&s.error(k)})}))};return setTimeout(C,0),g});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var Jt=kt;function $a(e){var t=Ht;try{Ht=!0,Se.storagemutated.fire(e),ya(e,!0)}finally{Ht=t}}mt(Jt,J(J({},jt),{delete:function(e){return new Jt(e,{addons:[]}).delete()},exists:function(e){return new Jt(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Jt.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(pa(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==ca})}):La(n,t).toCollection().primaryKeys()).then(e)}catch{return Ae(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){be(this,e)}},ignoreTransaction:function(e){return G.trans?gn(G.transless,e):e()},vip:va,async:function(e){return function(){try{var t=Dt(e.apply(this,arguments));return t&&typeof t.then=="function"?t:j.resolve(t)}catch(n){return Ae(n)}}},spawn:function(e,t,n){try{var a=Dt(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:j.resolve(a)}catch(s){return Ae(s)}},currentTransaction:{get:function(){return G.trans||null}},waitFor:function(e,t){return e=j.resolve(typeof e=="function"?Jt.ignoreTransaction(e):e).timeout(t||6e4),G.trans?G.trans.waitFor(e):e},Promise:j,debug:{get:function(){return ke},set:function(e){Za(e)}},derive:Qt,extend:be,props:mt,override:Hn,Events:_,on:Se,liveQuery:fr,extendObservabilitySet:Rn,getByKeyPath:_t,setByKeyPath:ft,delByKeyPath:function(e,t){typeof t=="string"?ft(e,t,void 0):"length"in t&&[].map.call(t,function(n){ft(e,n,void 0)})},shallowClone:Ma,deepClone:un,getObjectDiff:xa,cmp:pe,asap:Ga,minKey:-1/0,addons:[],connections:Mn,errnames:Oa,dependencies:ka,cache:ln,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),Jt.maxKey=yt(Jt.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Se(at,function(e){Ht||(e=new CustomEvent($e,{detail:e}),Ht=!0,dispatchEvent(e),Ht=!1)}),addEventListener($e,function(e){e=e.detail,Ht||$a(e)}));var Cn,Ht=!1,hr=function(){};return typeof BroadcastChannel<"u"&&((hr=function(){(Cn=new BroadcastChannel($e)).onmessage=function(e){return e.data&&$a(e.data)}})(),typeof Cn.unref=="function"&&Cn.unref(),Se(at,function(e){Ht||Cn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!kt.disableBfCache&&e.persisted){ke&&console.debug("Dexie: handling persisted pagehide"),Cn?.close();for(var t=0,n=Mn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!kt.disableBfCache&&e.persisted&&(ke&&console.debug("Dexie: handling persisted pageshow"),hr(),$a({all:new rt(-1/0,[[]])}))})),j.rejectionMapper=function(e,t){return!e||e instanceof Sn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Xa[e.name]?e:(t=new Xa[e.name](t||e.message,e),"stack"in e&&dt(t,"stack",{get:function(){return this.inner.stack}}),t)},Za(ke),J(kt,Object.freeze({__proto__:null,Dexie:kt,Entity:ar,PropModification:o,RangeSet:rt,add:function(e){return new o({add:e})},cmp:pe,default:kt,liveQuery:fr,mergeRanges:pt,rangesOverlap:At,remove:function(e){return new o({remove:e})},replacePrefix:function(e,t){return new o({replacePrefix:[e,t]})}}),{default:kt}),kt})})(vr)),vr.exports}var _s=Es();const Pr=Ss(_s),ss=Symbol.for("Dexie"),mr=globalThis[ss]||(globalThis[ss]=Pr);if(Pr.semVer!==mr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Pr.semVer} and ${mr.semVer}`);const{liveQuery:Ls,mergeRanges:js,rangesOverlap:Rs,RangeSet:Vs,cmp:Ys,Entity:zs,PropModification:Us,replacePrefix:Ws,add:Gs,remove:Js,DexieYProvider:Hs}=mr,ut=new mr("haushaltsbuch-db");ut.version(1).stores({years:"year",fixedTemplateState:"id"});ut.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const Ea="singleton";function gr(){return new Date().toISOString()}async function Wn(){return ut.years.orderBy("year").toArray()}async function Ms(P){return ut.years.get(P)}async function Un(P){await ut.years.put(P)}async function Tr(){const P=await ut.fixedTemplateState.get(Ea);if(!P){const p={id:Ea,templates:[],version:gr(),updatedAt:new Date().toISOString()};return await ut.fixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:P.templates,version:P.version}}async function Or(P){const p=gr();return await ut.fixedTemplateState.put({id:Ea,templates:P,version:p,updatedAt:new Date().toISOString()}),p}async function Ar(){const P=await ut.annualVariableFixedTemplateState.get(Ea);if(!P){const p={id:Ea,templates:[],version:gr(),updatedAt:new Date().toISOString()};return await ut.annualVariableFixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:P.templates,version:P.version}}async function Fr(P){const p=gr();return await ut.annualVariableFixedTemplateState.put({id:Ea,templates:P,version:p,updatedAt:new Date().toISOString()}),p}async function Ps(){const P=await Wn(),[p,Ke]=await Promise.all([Tr(),Ar()]);return{exportedAt:new Date().toISOString(),years:P,fixedTemplates:p.templates,annualVariableFixedTemplates:Ke.templates}}async function Ts(P){await ut.transaction("rw",[ut.years,ut.fixedTemplateState,ut.annualVariableFixedTemplateState],async()=>{await ut.years.clear(),await ut.years.bulkPut(P.years),await Or(P.fixedTemplates),await Fr(P.annualVariableFixedTemplates??[])})}function je(P){const p=P.replace(",",".").trim();if(!p)return 0;const Ke=Number.parseFloat(p);return Number.isNaN(Ke)?0:Math.round(Ke*100)}const Os=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function w(P){return Os.format(P/100)}function vt(P){return(P/100).toFixed(2)}function Oe(P){return new Date(2026,P-1,1).toLocaleDateString("de-DE",{month:"long"})}const us=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function is(P){return us.includes(P)}function As(P){switch(P){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const os=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Fs(P){const p={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ke="habu-theme",J="habu-backup-dirty",ge="habu-unexported-change-log",re="habu-last-backup-filename",we="habu-recurring-budget-defaults";let se=null,be=null,it=null,We=null,oe=!1,mt=!1;const ct=new WeakMap;function dt(){const o=P.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const u=getComputedStyle(document.documentElement),f=u.getPropertyValue("--text-main").trim(),d=u.getPropertyValue("--text-muted").trim(),h=u.getPropertyValue("--table-stripe").trim(),_=u.getPropertyValue("--table-border").trim(),A=u.getPropertyValue("--budget-under").trim(),I=u.getPropertyValue("--danger-2").trim(),N=96,H=250,z=X=>1-Math.pow(1-Math.max(0,Math.min(1,X)),3);o.forEach(X=>{X.dataset.hoverBound!=="1"&&(X.dataset.hoverBound="1",X.addEventListener("mouseenter",()=>{X.dataset.hovering="1",dt()}),X.addEventListener("mouseleave",()=>{delete X.dataset.hovering,delete X.dataset.hoverX,dt()}),X.addEventListener("mousemove",Ee=>{const De=X.getBoundingClientRect(),Ue=Math.round(Ee.clientX-De.left);X.dataset.hoverX=String(Ue),dt()}));const ne=Number.parseInt(X.dataset.budgetCents??"0",10),ve=Number.parseInt(X.dataset.actualCents??"0",10),Te=X.dataset.label??"Kategorie",ee=X.dataset.hovering==="1",le=`${Te}|${ne}|${ve}`,He=X.dataset.lastRenderSignature!==le;X.dataset.lastRenderSignature=le;const Ne=Math.max(120,Math.floor(X.clientWidth||120)),ye=window.devicePixelRatio||1,ze=Math.floor(Ne*ye),tt=Math.floor(N*ye);(X.width!==ze||X.height!==tt)&&(X.width=ze,X.height=tt);const L=X.getContext("2d");if(!L)return;const Ze=Math.max(1,ne,ve),bt=Math.min(1,Math.max(0,ne/Ze)),Ce=Math.min(1,Math.max(0,ve/Ze)),Re=ne-ve,de=ne>0?ve/ne*100:ve>0?100:0,at=8,$e=at,Se=34,lt=Ne-at*2,Fe=22,qe=Number.parseInt(X.dataset.hoverX??"-1",10),nt=(Ee,De,Ue,Ve,Xe)=>{L.beginPath(),L.moveTo(Ee+Xe,De),L.lineTo(Ee+Ue-Xe,De),L.quadraticCurveTo(Ee+Ue,De,Ee+Ue,De+Xe),L.lineTo(Ee+Ue,De+Ve-Xe),L.quadraticCurveTo(Ee+Ue,De+Ve,Ee+Ue-Xe,De+Ve),L.lineTo(Ee+Xe,De+Ve),L.quadraticCurveTo(Ee,De+Ve,Ee,De+Ve-Xe),L.lineTo(Ee,De+Xe),L.quadraticCurveTo(Ee,De,Ee+Xe,De),L.closePath()},Tt=Ee=>{L.setTransform(1,0,0,1,0,0),L.clearRect(0,0,X.width,X.height),L.scale(ye,ye),nt($e,Se,lt,Fe,8),L.fillStyle=h,L.fill(),L.strokeStyle=_,L.lineWidth=1,L.stroke();const De=[.6,.25,.15],Ue=[.1,.16,.24];let Ve=0;De.forEach((Wt,M)=>{const K=lt*Wt;L.save(),L.globalAlpha=Ue[M]??.1,L.fillStyle=d,L.fillRect($e+Ve,Se,K,Fe),L.restore(),Ve+=K});const Xe=ne>0&&ve>ne?I:A,wt=lt*Ce*Ee;nt($e,Se+3,wt,Fe-6,6),L.fillStyle=Xe,L.fill(),ee&&(L.save(),L.strokeStyle=Xe,L.lineWidth=1.5,L.globalAlpha=.8,nt($e-1,Se+2,Math.max(2,wt+2),Fe-4,7),L.stroke(),L.restore());const on=$e+lt*bt;L.strokeStyle=f,L.lineWidth=ee?3:2,L.beginPath(),L.moveTo(on,Se-3),L.lineTo(on,Se+Fe+3),L.stroke(),ee&&qe>=$e&&qe<=$e+lt&&(L.save(),L.strokeStyle=f,L.globalAlpha=.35,L.lineWidth=1,L.beginPath(),L.moveTo(qe,Se-8),L.lineTo(qe,Se+Fe+8),L.stroke(),L.restore()),L.fillStyle=f,L.font="600 12px system-ui, -apple-system, sans-serif",L.textAlign="left",L.textBaseline="top",L.fillText(Te,$e,10);const Ut=de*Ee;if(L.fillStyle=de>100?I:de<100?A:d,L.textAlign="right",L.fillText(`${Ut.toFixed(0)}%`,$e+lt,10),L.fillStyle=d,L.font="500 11px system-ui, -apple-system, sans-serif",L.textAlign="left",L.textBaseline="top",L.fillText(`Ist ${w(ve)} · Ziel ${w(ne)} · Δ ${Re>=0?"+":""}${w(Re)}`,$e,64),ee){const Wt=`Nutzung ${de.toFixed(1)}%`;L.font="600 11px system-ui, -apple-system, sans-serif";const M=8,K=5,ue=22,Gt=L.measureText(Wt).width+M*2,Pn=Number.isFinite(qe)?qe-Gt/2:$e+lt-Gt,Tn=Math.min($e+lt-Gt,Math.max($e,Pn)),Kn=Se-ue-8;L.save(),L.fillStyle=f,L.globalAlpha=.92,nt(Tn,Kn,Gt,ue,6),L.fill(),L.restore(),L.fillStyle=h,L.textAlign="left",L.textBaseline="top",L.fillText(Wt,Tn+M,Kn+K)}},yt=ct.get(X);if(yt&&window.cancelAnimationFrame(yt),!He){Tt(1);return}const ht=performance.now(),xt=Ee=>{const De=Ee-ht,Ue=Math.min(1,De/H);if(Tt(z(Ue)),Ue<1){const Ve=window.requestAnimationFrame(xt);ct.set(X,Ve);return}ct.delete(X)},Ot=window.requestAnimationFrame(xt);ct.set(X,Ot)})}function Qt(){P.querySelectorAll("[data-year-trend-chart]").forEach(u=>{const f=Array.from(u.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=u.querySelector("[data-year-trend-active-month]"),h=u.querySelector("[data-year-trend-active-net]"),_=u.querySelector("[data-year-trend-active-income]"),A=u.querySelector("[data-year-trend-active-expense]"),I=u.querySelector("[data-year-trend-active-delta]"),N=u.querySelector("[data-year-trend-live]");if(!d||!h||!_||!A||!I)return;const H=(ne,ve)=>{ne.classList.remove("danger","budget-under");const Te=ve<0?"danger":ve>0?"budget-under":"";Te&&ne.classList.add(Te)},z=ne=>{const ve=ne.dataset.monthLabel??"-",Te=Number.parseInt(ne.dataset.netCents??"0",10),ee=Number.parseInt(ne.dataset.actualNetCents??"0",10),le=Number.parseInt(ne.dataset.incomeCents??"0",10),He=Number.parseInt(ne.dataset.expenseCents??"0",10),Ne=Number.parseInt(ne.dataset.deltaCents??"0",10);d.textContent=ve,h.textContent=w(Te),_.textContent=w(le),A.textContent=w(He),I.textContent=`${Ne>=0?"+":""}${w(Ne)}`,H(h,Te),H(I,Ne),f.forEach(ye=>{const ze=ye===ne;ye.classList.toggle("is-active",ze),ye.setAttribute("aria-pressed",String(ze))}),N&&(N.textContent=`${ve}: Kalkulierter Saldo ${w(Te)}, Ist-Saldo ${w(ee)}, Einkommen ${w(le)}, Ausgaben ${w(He)}`)};f.forEach(ne=>{const ve=()=>{z(ne)};ne.addEventListener("mouseenter",ve),ne.addEventListener("focus",ve),ne.addEventListener("click",ve)});const X=f.find(ne=>ne.dataset.pointDefault==="1")??f[f.length-1];X&&z(X)})}function Gn(o){if(o==="dashboard"){const u=p.years.slice().sort((d,h)=>h.year-d.year);u.some(d=>d.year===p.dashboardYear)||(p.dashboardYear=p.selectedYear??u[0]?.year??null)}p.topModal=o,ae()}function _a(){p.topModal&&(p.topModal=null,ae())}function Jn(){p.showUnexportedChangeLogModal=!0,ae()}function Hn(){p.showUnexportedChangeLogModal&&(p.showUnexportedChangeLogModal=!1,ae())}function Dn(){oe||(oe=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(p.showUnexportedChangeLogModal){o.preventDefault(),Hn();return}p.topModal&&(o.preventDefault(),_a())}}))}function Ga(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const u=o/6;return window.scrollY>u}function _t(){const o=P.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",Ga())}function ft(){if(mt)return;mt=!0;const o=()=>{_t(),dt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Ma(){if(se&&document.body.contains(se))return se;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return se=o,o;const u=document.createElement("div");return u.id="toast-root",u.className="toast-root",u.setAttribute("aria-live","polite"),u.setAttribute("aria-atomic","true"),document.body.appendChild(u),se=u,u}function br(){if(be&&document.body.contains(be))return be;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return be=o,o;const u=document.createElement("div");return u.id="amount-modal-root",document.body.appendChild(u),be=u,u}function Ja(){if(We&&document.body.contains(We))return We;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return We=o,o;const u=document.createElement("div");return u.id="weekly-shopping-modal-root",document.body.appendChild(u),We=u,u}function Nt(){if(!be){it=null;return}be.innerHTML="",it=null}function qt(){We&&(We.innerHTML="")}function un(o,u,f){const d=new Date,h=d.getFullYear(),_=d.getMonth()+1,A=d.getDate(),I=new Date(o,u,0).getDate();if(o<h||o===h&&u<_)return{occurrences:0,remainingDays:0};const N=o===h&&u===_?Math.min(A,I):1,H=Math.max(0,I-N+1);let z=0;for(let X=N;X<=I;X+=1)new Date(o,u-1,X).getDay()===f&&(z+=1);return{occurrences:z,remainingDays:H}}async function yr(o,u){const f=ke();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,u),await Ye(`Wocheneinkauf geplant: ${os.find(d=>d.value===o)?.label??"Wochentag"} mit ${w(f.weeklyShoppingEstimateCents)} €`),ae())}function Pa(){const o=ke(),u=fn();if(!o||!u)return;const f=Ja();qt();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,h=o.weeklyShoppingEstimateCents??0,_=u.year,A=o.month,I=Za(_,A),N=I?Rt(I):{foodCents:0},H=I?I.foodBudgetCents??0:0,z=N.foodCents,X=H-z;f.innerHTML=`
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
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${vt(h)}" />
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
    `;const ne=f.querySelector(".weekly-shopping-modal-backdrop"),ve=f.querySelector("#weekly-shopping-weekday"),Te=f.querySelector("#weekly-shopping-estimate"),ee=f.querySelector("#weekly-shopping-occurrences"),le=f.querySelector("#weekly-shopping-total"),He=f.querySelector("#weekly-shopping-rest-before"),Ne=f.querySelector("#weekly-shopping-rest-after"),ye=f.querySelector("#weekly-shopping-days-left"),ze=f.querySelector("#weekly-shopping-per-day"),tt=f.querySelector("#weekly-shopping-cancel"),L=f.querySelector("#weekly-shopping-save");function Ze(){const de=Number.parseInt(ve?.value??"1",10);return Number.isInteger(de)&&de>=0&&de<=6?de:1}function bt(){return Math.max(0,je(Te?.value??"0"))}function Ce(){const de=Ze(),at=bt(),{occurrences:$e,remainingDays:Se}=un(_,A,de),lt=$e*at,Fe=X-lt,qe=Se>0?Math.trunc(Fe/Se):0;ee&&(ee.textContent=`${$e}`),le&&(le.textContent=`${w(lt)} €`),He&&(He.textContent=`${w(X)} €`),Ne&&(Ne.textContent=`${w(Fe)} €`,Ne.className=Fe<0?"danger":Fe>0?"budget-under":""),ye&&(ye.textContent=`${Se}`),ze&&(ze.textContent=`${w(qe)} €`,ze.className=qe<0?"danger":qe>0?"budget-under":"")}async function Re(){await yr(Ze(),bt()),qt()}tt?.addEventListener("click",()=>{qt()}),L?.addEventListener("click",async()=>{await Re()}),ve?.addEventListener("change",()=>{Ce()}),Te?.addEventListener("input",()=>{Ce()}),Te?.addEventListener("keydown",async de=>{if(de.key==="Escape"){de.preventDefault(),qt();return}de.key==="Enter"&&(de.preventDefault(),await Re())}),ne?.addEventListener("click",de=>{de.target===ne&&qt()}),window.setTimeout(()=>{Te?.focus(),Te?.select(),Ce()},0)}function Xn(o,u){let f=o;const d=u.min;if(d){const _=Number.parseFloat(d);if(!Number.isNaN(_)){const A=Math.round(_*100);f=Math.max(f,A)}}const h=u.max;if(h){const _=Number.parseFloat(h);if(!Number.isNaN(_)){const A=Math.round(_*100);f=Math.min(f,A)}}return f}function Ct(o){if(o.disabled)return;const u=br();Nt(),it=o;const f=je(o.value||"0"),d="Betrag anpassen";u.innerHTML=`
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
    `;const h=u.querySelector(".amount-modal-backdrop"),_=u.querySelector("#amount-modal-delta"),A=u.querySelector("#amount-modal-next-delta"),I=u.querySelector("#amount-modal-next-overwrite"),N=u.querySelector("#amount-modal-cancel"),H=u.querySelector("#amount-modal-overwrite"),z=u.querySelector("#amount-modal-apply");function X(){const le=je(_?.value??"0");return Xn(f+le,o)}function ne(){const le=je(_?.value??"0");return Xn(le,o)}function ve(){A&&(A.textContent=`${w(X())} €`),I&&(I.textContent=`${w(ne())} €`)}function Te(){const le=it;if(!le){Nt();return}const He=X();Nt(),le.value=vt(He),le.dispatchEvent(new Event("change",{bubbles:!0}))}function ee(){const le=it;if(!le){Nt();return}const He=ne();Nt(),le.value=vt(He),le.dispatchEvent(new Event("change",{bubbles:!0}))}N?.addEventListener("click",()=>{Nt()}),H?.addEventListener("click",()=>{ee()}),z?.addEventListener("click",()=>{Te()}),_?.addEventListener("input",()=>{ve()}),_?.addEventListener("keydown",le=>{if(le.key==="Escape"){le.preventDefault(),Nt();return}le.key==="Enter"&&(le.preventDefault(),Te())}),h?.addEventListener("click",le=>{le.target===h&&Nt()}),window.setTimeout(()=>{_?.focus(),_?.select(),ve()},0)}function xe(o,u="success"){const f=Ma(),d=document.createElement("div");d.className=`toast toast-${u}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const h=u==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},h)}function Kt(){return new Date().getMonth()+1}function Lt(){return new Date().getFullYear()}function Qn(o){const u=Lt(),f=o.find(d=>d.year===u);return f?f.year:o[0]?.year??null}function jt(){return new Date().toISOString().slice(0,10)}function $n(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Sn(){const o=localStorage.getItem(Ke);return o&&is(o)?o:"light"}function Ta(o){p.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Ke,o)}function Zn(){return localStorage.getItem(J)==="1"}function cn(o){localStorage.setItem(J,o?"1":"0")}function Oa(){const o=localStorage.getItem(ge);if(!o)return[];try{const u=JSON.parse(o);return Array.isArray(u)?u.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function Ha(o){localStorage.setItem(ge,JSON.stringify(o.slice(-200)))}function Z(){const o=localStorage.getItem(re);if(!o)return null;const u=o.trim();return u||null}function Xa(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},u=localStorage.getItem(we);if(!u)return o;try{const f=JSON.parse(u),d=h=>typeof h=="number"&&Number.isFinite(h)?h:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function Be(o){localStorage.setItem(we,JSON.stringify(o))}function Bn(o){o.months.forEach(u=>{const{recurringBudgetDefaults:f}=p;typeof f.foodBudgetCents=="number"&&(u.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(u.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(u.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(u.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(u.miscBudgetCents=f.miscBudgetCents)})}function Cr(o){const u=o.trim();u&&localStorage.setItem(re,u)}async function dn(){Ma(),Ta(Sn()),p.hasUnexportedChanges=Zn(),p.unexportedChangeLog=Oa(),p.lastBackupFileName=Z(),p.recurringBudgetDefaults=Xa(),Dn(),ft();const[o,u,f]=await Promise.all([Wn(),Tr(),Ar()]);p.years=o,p.annualVariableFixedTemplates=f.templates,p.annualVariableFixedTemplateVersion=f.version,Aa(p.years),ra(p.years),p.fixedTemplates=u.templates,p.fixedTemplateVersion=u.version,await Qa(p.years),o.length>0&&(p.selectedYear=Qn(o),p.selectedMonth=Kt()),ae()}function Aa(o){const u=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const h=Number(d.weeklyShoppingWeekday);Number.isInteger(h)&&h>=0&&h<=6?d.weeklyShoppingWeekday=h:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(h=>{const _=u(h.incomeSource);if(!_){const{incomeSource:A,...I}=h;return I}return{...h,incomeSource:_}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((h,_)=>h+_.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((h,_)=>h+_.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Fa(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function ea(o){return o==="fresh"||o==="salary"||!o}async function Qa(o){for(const u of o)await Un(u)}function fn(){if(p.selectedYear)return p.years.find(o=>o.year===p.selectedYear)}function ke(){const o=fn();if(o)return o.months.find(u=>u.month===p.selectedMonth)}function Za(o,u){const f=p.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===u)}function Rt(o){const u=o.days.reduce((I,N)=>I+N.foodCents,0),f=o.days.reduce((I,N)=>I+N.goingOutCents,0),d=o.fixedCosts.reduce((I,N)=>I+N.actualCents,0),h=o.variableCosts.reduce((I,N)=>I+N.amountCents,0)+o.variablePositions.reduce((I,N)=>I+N.actualCents,0),_=o.miscCosts.reduce((I,N)=>I+N.amountCents,0),A=u+f+d+h+_;return{foodCents:u,goingOutCents:f,fixedCents:d,variableCents:h,miscCents:_,totalCents:A}}function In(o){const u=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((A,I)=>A+I.plannedCents,0),h=o.variablePositions.reduce((A,I)=>A+I.budgetCents,0),_=o.miscBudgetCents??0;return u+f+d+(o.variableBudgetCents??h)+_}function Zt(o){return o.months.reduce((u,f)=>{const d=Rt(f);return{foodCents:u.foodCents+d.foodCents,goingOutCents:u.goingOutCents+d.goingOutCents,fixedCents:u.fixedCents+d.fixedCents,variableCents:u.variableCents+d.variableCents,miscCents:u.miscCents+d.miscCents,totalCents:u.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function gt(o){return o.months.slice().sort((u,f)=>u.month-f.month).map(u=>({month:u.month,summary:Rt(u)}))}function Vt(o){const u=o.months.reduce((A,I)=>A+(I.foodBudgetCents??0),0),f=o.months.reduce((A,I)=>A+(I.goingOutBudgetCents??0),0),d=o.months.reduce((A,I)=>A+(I.fixedBudgetCents??I.fixedCosts.reduce((N,H)=>N+H.plannedCents,0)),0),h=o.months.reduce((A,I)=>A+(I.variableBudgetCents??I.variablePositions.reduce((N,H)=>N+H.budgetCents,0)),0),_=o.months.reduce((A,I)=>A+(I.miscBudgetCents??0),0);return{foodCents:u,goingOutCents:f,fixedCents:d,variableCents:h,miscCents:_,totalCents:u+f+d+h+_}}function Nn(o){return o.months.reduce((u,f)=>u+f.incomes.reduce((d,h)=>d+(ea(h.incomeSource)?h.amountCents:0),0),0)}function hn(o,u){const f=o.months.slice().sort((d,h)=>d.month-h.month)[0];return f?u.get(he(o.year,f.month))?.carriedFromPreviousCents??0:0}function Da(){const o=p.years.slice().sort((d,h)=>d.year-h.year).flatMap(d=>d.months.slice().sort((h,_)=>h.month-_.month).map(h=>({year:d.year,month:h}))),u=new Map;let f=0;return o.forEach(({year:d,month:h},_)=>{const A=h.carryoverOverrideCents,I=typeof A=="number",N=I?A:f,H=_>0||I,z=h.incomes.reduce((Te,ee)=>Te+(ea(ee.incomeSource)?ee.amountCents:0),0),X=In(h),ne=z+N,ve=ne-X;u.set(he(d,h.month),{hasPreviousMonth:H,carriedFromPreviousCents:N,recordedIncomeCents:z,effectiveIncomeCents:ne,plannedBudgetCents:X,netCents:ve}),f=ve}),u}function ot(o,u){return u<=0?"":o>u?"budget-over":o<u?"budget-under":""}function pn(o){return`${o>0?"+":""}${w(o)}`}function Yt(o,u){const f=o-u,d=ot(u,o);return`${w(o)} <span class="eval-diff ${d}">(Δ ${pn(f)})</span>`}function vn(o,u){const f=o!==null,d=f?o-u:null,h=f?ot(u,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${w(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${w(u)} €</strong>
      </div>
      <div class="column-overview-row ${h}">
        <span>Diff</span>
        <strong>${d===null?"-":`${w(d)} €`}</strong>
      </div>
    </div>`}async function en(o){if(await Ms(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=ts(o,p.fixedTemplates,p.fixedTemplateVersion);Bn(f),aa(f),await Un(f),p.years=await Wn(),G(`Jahr ${o} wurde angelegt`),p.selectedYear=o,p.selectedMonth=Kt(),xe(`Jahr ${o} wurde angelegt.`),ae()}function G(o="Änderung an den Daten"){p.hasUnexportedChanges=!0,cn(!0);const u=p.selectedYear?`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f={id:Et("change"),timestampIso:new Date().toISOString(),message:`${o} (${u})`};p.unexportedChangeLog=[...p.unexportedChangeLog,f].slice(-200),Ha(p.unexportedChangeLog)}function qn(o){const u=o.trim();u&&(p.lastBackupFileName=u,Cr(u))}function tn(o){p.hasUnexportedChanges=!1,cn(!1),p.unexportedChangeLog=[],Ha([]),p.showUnexportedChangeLogModal=!1,qn(o)}async function Ye(o){const u=fn();u&&(await Un(u),p.years=await Wn(),G(o))}async function j(o){for(const u of p.years)await Un(u);p.years=await Wn(),G(o)}function he(o,u){return o*100+u}function ta(o){const u=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!u)return null;const f=u[1],d=u[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function na(o,u){const f=ta(o.dueDateIso);if(!f||u.year<f.year)return;const d=u.months.find(_=>_.month===f.month);!d||d.variablePositions.some(_=>_.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Et("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],Mt(d))}function aa(o){p.annualVariableFixedTemplates.forEach(u=>{na(u,o)})}function ra(o){const u=new Set(p.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const h=d.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),_=d.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");h&&(d.variablePositions=d.variablePositions.filter(A=>A.autoAnnualTemplateId?u.has(A.autoAnnualTemplateId):!0),Mt(d)),_&&(d.fixedCosts=d.fixedCosts.filter(A=>!A.autoAnnualTemplateId),nn(d))}),aa(f)})}function nn(o){o.fixedBudgetCents=o.fixedCosts.reduce((u,f)=>u+f.plannedCents,0)}function Mt(o){o.variableBudgetCents=o.variablePositions.reduce((u,f)=>u+f.budgetCents,0)}function En(){if(p.selectedYear)return`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function mn(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",En());if(!o)return null;const u=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!u)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=u[1],d=u[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Ia(o,u){const f=he(u.year,u.month);p.years.forEach(d=>{d.months.forEach(h=>{if(he(d.year,h.month)<f)return;h.fixedCosts.some(A=>A.templateId===o.id)||(h.fixedCosts.push({id:Et("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),nn(h))})})}function sa(o,u,f){const d=he(f.year,f.month);p.years.forEach(h=>{h.months.forEach(_=>{he(h.year,_.month)<d||(_.fixedCosts=_.fixedCosts.map(A=>A.templateId!==u.id?A:{...A,name:u.name,plannedCents:u.plannedCents,actualCents:A.actualCents===o.plannedCents?u.plannedCents:A.actualCents}),nn(_))})})}function Ie(o,u){const f=he(u.year,u.month);p.years.forEach(d=>{d.months.forEach(h=>{he(d.year,h.month)<f||(h.fixedCosts=h.fixedCosts.filter(_=>_.templateId!==o),nn(h))})})}async function Qe(o,u){const f=o.trim();if(!f)return;const d=mn();if(!d)return;const h=!!p.editingFixedTemplateId;if(p.editingFixedTemplateId){const _=p.fixedTemplates.find(I=>I.id===p.editingFixedTemplateId);if(!_)return;const A={..._,name:f,plannedCents:u};p.fixedTemplates=p.fixedTemplates.map(I=>I.id===p.editingFixedTemplateId?A:I),sa(_,A,d)}else{const _={id:Et("tpl"),name:f,plannedCents:u};p.fixedTemplates=[...p.fixedTemplates,_],Ia(_,d)}p.fixedTemplateVersion=await Or(p.fixedTemplates),p.editingFixedTemplateId=null,await j(h?`Fixkosten-Vorlage aktualisiert: ${f} (${w(u)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${w(u)} €)`),xe(h?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function xr(o){p.editingFixedTemplateId=o,ae()}function ia(){p.editingFixedTemplateId=null,ae()}async function oa(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=mn();if(!f)return;const d=p.fixedTemplates.find(h=>h.id===o);p.fixedTemplates=p.fixedTemplates.filter(h=>h.id!==o),Ie(o,f),p.editingFixedTemplateId===o&&(p.editingFixedTemplateId=null),p.fixedTemplateVersion=await Or(p.fixedTemplates),await j(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),xe("Fixkosten-Vorlage wurde gelöscht."),ae()}async function la(o,u,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const h=ta(u);if(!h){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const _={id:Et("annualtpl"),name:d,plannedCents:f,dueDateIso:u};p.annualVariableFixedTemplates=[...p.annualVariableFixedTemplates,_],p.years.forEach(A=>{na(_,A)}),p.annualVariableFixedTemplateVersion=await Fr(p.annualVariableFixedTemplates),await j(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${w(f)} €, jährlich in ${Oe(h.month)})`),xe("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function wr(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=p.annualVariableFixedTemplates.find(d=>d.id===o);f&&(p.annualVariableFixedTemplates=p.annualVariableFixedTemplates.filter(d=>d.id!==o),p.years.forEach(d=>{d.months.forEach(h=>{h.variablePositions=h.variablePositions.filter(_=>_.autoAnnualTemplateId!==o),Mt(h),h.fixedCosts=h.fixedCosts.filter(_=>_.autoAnnualTemplateId!==o),nn(h)})}),p.annualVariableFixedTemplateVersion=await Fr(p.annualVariableFixedTemplates),await j(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),xe("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function zt(o,u,f){const d=ke();d&&(d.days=d.days.map(h=>h.isoDate===o?{...h,[u]:f}:h),await Ye(`${u==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${w(f)} €`),ae())}async function _n(o,u){const f=ke();if(!f)return;const d=f.fixedCosts.find(h=>h.id===o);f.fixedCosts=f.fixedCosts.map(h=>h.id===o?{...h,actualCents:u}:h),await Ye(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${w(u)} €`),ae()}async function an(o,u){const f=ke();if(!f)return;const d=f.fixedCosts.find(h=>h.id===o);d&&(f.fixedCosts=f.fixedCosts.map(h=>h.id===o?{...h,plannedCents:u}:h),nn(f),await Ye(`Fixkosten-Budget angepasst: ${d.name} auf ${w(u)} €`),ae())}async function ua(o,u){const f=ke();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const h={id:Et("fixed"),templateId:Et("fixed-local"),name:d,plannedCents:u,actualCents:0};f.fixedCosts=[h,...f.fixedCosts],nn(f),await Ye(`Fixkosten-Position hinzugefügt: ${d} (${w(u)} €)`),xe("Fixkosten-Position wurde hinzugefügt."),ae()}async function kr(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=ke();if(!f)return;const d=f.fixedCosts.find(h=>h.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(h=>h.id!==o),nn(f),await Ye(`Fixkosten-Position gelöscht: ${d.name}`),xe("Fixkosten-Position wurde gelöscht."),ae())}async function rn(o){await Ae("fixedBudgetCents",o,"Fixkosten")}async function er(o){await Ae("foodBudgetCents",o,"Essen")}async function gn(o){await Ae("goingOutBudgetCents",o,"Ausgehen")}async function tr(o){await Ae("miscBudgetCents",o,"Sonstiges")}async function Na(o){await Ae("variableBudgetCents",o,"Variable Kosten")}async function Ae(o,u,f){const d=ke(),h=p.selectedYear;if(!d||!h||d[o]===u)return;if(d[o]=u,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const A=he(h,p.selectedMonth);p.years.forEach(I=>{I.months.forEach(N=>{he(I.year,N.month)<=A||(N[o]=u)})}),p.recurringBudgetDefaults[o]=u,Be(p.recurringBudgetDefaults),await j(`Budget "${f}" auf ${w(u)} € gesetzt (inkl. zukünftiger Monate)`),xe(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ae();return}await Ye(`Budget "${f}" auf ${w(u)} € gesetzt`),ae()}async function sn(o){const u=ke();u&&(o===null?u.carryoverOverrideCents=null:u.carryoverOverrideCents=o,await Ye(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${w(o)} € gesetzt`),ae())}async function Pt(o,u,f){const d=ke(),h=p.selectedYear;if(!d||!h)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Et("varpos"),name:_,budgetCents:u,actualCents:0},...d.variablePositions],Mt(d),f){const A=he(h,p.selectedMonth);p.years.forEach(I=>{I.months.forEach(N=>{he(I.year,N.month)<=A||(N.variablePositions=[{id:Et("varpos"),name:_,budgetCents:u,actualCents:0},...N.variablePositions],Mt(N))})}),await j(`Variable Position hinzugefügt: ${_} (${w(u)} €) für zukünftige Monate`),xe("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Ye(`Variable Position hinzugefügt: ${_} (${w(u)} €)`),xe("Variable Position wurde hinzugefügt."),ae()}async function nr(o,u){const f=ke();if(!f)return;const d=f.variablePositions.find(h=>h.id===o);f.variablePositions=f.variablePositions.map(h=>h.id===o?{...h,actualCents:u}:h),await Ye(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(u)} €`),ae()}async function Mn(o,u){const f=ke();if(!f)return;const d=f.variablePositions.find(h=>h.id===o);f.variablePositions=f.variablePositions.map(h=>h.id===o?{...h,budgetCents:u}:h),Mt(f),await Ye(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(u)} €`),ae()}async function ca(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=ke(),d=p.selectedYear;if(!f||!d)return;const h=f.variablePositions.find(N=>N.id===o);if(!h)return;const _=he(d,p.selectedMonth),I=p.years.some(N=>N.months.some(H=>he(N.year,H.month)>_&&H.variablePositions.some(z=>z.name===h.name&&z.budgetCents===h.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(N=>N.id!==o),Mt(f),I){p.years.forEach(N=>{N.months.forEach(H=>{he(N.year,H.month)<=_||(H.variablePositions=H.variablePositions.filter(z=>!(z.name===h.name&&z.budgetCents===h.budgetCents)),Mt(H))})}),await j(`Variable Position gelöscht: ${h.name} (inkl. zukünftiger Monate)`),xe("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ye(`Variable Position gelöscht: ${h.name}`),xe("Variable Position wurde gelöscht."),ae()}async function qa(o){const u=ke(),f=p.selectedYear;if(!u||!f)return;const d=u.variablePositions.find(z=>z.id===o);if(!d)return;const h={year:p.selectedMonth===12?f+1:f,month:p.selectedMonth===12?1:p.selectedMonth+1};let _=p.years.find(z=>z.year===h.year);if(!_){const z=ts(h.year,p.fixedTemplates,p.fixedTemplateVersion);Bn(z),aa(z),await Un(z),p.years=[...p.years,z].sort((X,ne)=>X.year-ne.year),_=z}const A=_.months.find(z=>z.month===h.month);if(!A)return;const I=A.variablePositions.some(z=>z.id===d.id||z.name===d.name&&z.budgetCents===d.budgetCents);if(u.variablePositions=u.variablePositions.filter(z=>z.id!==o),Mt(u),!I){const X=A.variablePositions.some(ne=>ne.id===d.id)?{...d,id:Et("varpos")}:d;A.variablePositions=[X,...A.variablePositions],Mt(A)}const N=`${Oe(h.month)} ${h.year}`,H=`Variable Position verschoben: ${d.name} → ${N}`;if(h.year===f)await Ye(H);else{const z=fn();if(!z)return;await Un(z),await Un(_),p.years=await Wn(),Aa(p.years),G(H)}xe(I?`Position entfernt (im Folgemonat schon vorhanden: ${N}).`:`Position in den Folgemonat verschoben: ${N}.`),ae()}async function da(o,u,f){const d=ke(),h=p.selectedYear;if(!d||!h)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=ns(_,u);if(d.miscCosts=[A,...d.miscCosts],f){const I=he(h,p.selectedMonth);p.years.forEach(N=>{N.months.forEach(H=>{he(N.year,H.month)<=I||(H.miscCosts=[ns(_,u),...H.miscCosts])})}),await j(`Sonstige Position hinzugefügt: ${_} (${w(u)} €) für zukünftige Monate`),xe("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Ye(`Sonstige Position hinzugefügt: ${_} (${w(u)} €)`),xe("Sonstige Position wurde hinzugefügt."),ae()}async function bn(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=ke(),d=p.selectedYear;if(!f||!d)return;const h=f.miscCosts.find(N=>N.id===o);if(!h)return;const _=he(d,p.selectedMonth),I=p.years.some(N=>N.months.some(H=>he(N.year,H.month)>_&&H.miscCosts.some(z=>z.description===h.description&&z.amountCents===h.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(N=>N.id!==o),I){p.years.forEach(N=>{N.months.forEach(H=>{he(N.year,H.month)<=_||(H.miscCosts=H.miscCosts.filter(z=>!(z.description===h.description&&z.amountCents===h.amountCents)))})}),await j(`Sonstige Position gelöscht: ${h.description} (${w(h.amountCents)} €) inkl. zukünftiger Monate`),xe("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ye(`Sonstige Position gelöscht: ${h.description} (${w(h.amountCents)} €)`),xe("Sonstige Position wurde gelöscht."),ae()}async function Ka(o,u,f,d){const h=ke(),_=p.selectedYear;if(!h||!_)return;const A=o.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(u<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const I=as(A,u,f);if(h.incomes=[I,...h.incomes],d){const N=he(_,p.selectedMonth);p.years.forEach(H=>{H.months.forEach(z=>{he(H.year,z.month)<=N||(z.incomes=[as(A,u,f),...z.incomes])})}),await j(`Einkommen hinzugefügt: ${A} (${w(u)} €, ${Fa(f)}) für zukünftige Monate`),xe("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await Ye(`Einkommen hinzugefügt: ${A} (${w(u)} €, ${Fa(f)})`),xe("Einkommen wurde hinzugefügt."),ae()}async function fa(o,u){const f=ke();if(!f)return;const d=f.incomes.find(h=>h.id===o);d&&(f.incomes=f.incomes.map(h=>{if(h.id!==o)return h;if(!u){const{incomeSource:_,...A}=h;return A}return{...h,incomeSource:u}}),await Ye(`Einkommensart angepasst: ${d.description} → ${Fa(u)}`),ae())}async function ar(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=ke(),d=p.selectedYear;if(!f||!d)return;const h=f.incomes.find(N=>N.id===o);if(!h)return;const _=he(d,p.selectedMonth),I=p.years.some(N=>N.months.some(H=>he(N.year,H.month)>_&&H.incomes.some(z=>z.description===h.description&&z.amountCents===h.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(N=>N.id!==o),I){p.years.forEach(N=>{N.months.forEach(H=>{he(N.year,H.month)<=_||(H.incomes=H.incomes.filter(z=>!(z.description===h.description&&z.amountCents===h.amountCents)))})}),await j(`Einkommen gelöscht: ${h.description} (${w(h.amountCents)} €) inkl. zukünftiger Monate`),xe("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ye(`Einkommen gelöscht: ${h.description} (${w(h.amountCents)} €)`),xe("Einkommen wurde gelöscht."),ae()}async function pe(){const o=await Ps(),u=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(u),d=`haushaltsbuch-backup-${new Date().toISOString().slice(0,10)}.json`,h=document.createElement("a");h.href=f,h.download=d,h.click(),URL.revokeObjectURL(f),tn(d),ae(),xe("Backup wurde exportiert.")}async function rr(o){const u=await o.text(),f=JSON.parse(u);await Ts(f);const[d,h,_]=await Promise.all([Wn(),Tr(),Ar()]);p.years=d,p.annualVariableFixedTemplates=_.templates,p.annualVariableFixedTemplateVersion=_.version,Aa(p.years),ra(p.years),p.fixedTemplates=h.templates,p.fixedTemplateVersion=h.version,await Qa(p.years),p.selectedYear=Qn(d),p.selectedMonth=Kt(),tn(o.name),xe("Backup wurde importiert."),ae()}function ae(){const o=fn(),u=ke(),f=jt(),d=u?Rt(u):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},h=o?Zt(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},_=o?gt(o):[],A=u?u.foodBudgetCents??0:0,I=u?u.goingOutBudgetCents??0:0,N=u?u.fixedBudgetCents??u.fixedCosts.reduce((r,B)=>r+B.plannedCents,0):0,H=u?u.variableBudgetCents??u.variablePositions.reduce((r,B)=>r+B.budgetCents,0):0,z=u?u.miscBudgetCents??0:0,X=o?o.months.reduce((r,B)=>r+(B.foodBudgetCents??0),0):0,ne=o?o.months.reduce((r,B)=>r+(B.goingOutBudgetCents??0),0):0,ve=o?o.months.reduce((r,B)=>r+(B.fixedBudgetCents??B.fixedCosts.reduce((V,Q)=>V+Q.plannedCents,0)),0):0,Te=o?o.months.reduce((r,B)=>r+(B.variableBudgetCents??B.variablePositions.reduce((V,Q)=>V+Q.budgetCents,0)),0):0,ee=o?o.months.reduce((r,B)=>r+(B.miscBudgetCents??0),0):0,le=u?u.incomes.reduce((r,B)=>r+(ea(B.incomeSource)?B.amountCents:0),0):0,He=u?u.incomes.reduce((r,B)=>r+(B.incomeSource==="salary"?B.amountCents:0),0):0,Ne=Da(),ye=o?Ne.get(he(o.year,p.selectedMonth)):void 0,ze=o?o.months.slice().sort((r,B)=>r.month-B.month)[0]:void 0,tt=ye?.carriedFromPreviousCents??0,L=ye?.hasPreviousMonth??!1,Ze=ye?.effectiveIncomeCents??le,bt=u?In(u):0,Ce=ye?.netCents??le-bt,Re=Ze-d.totalCents,de=He-d.totalCents,at=d.totalCents>0?`${(He/d.totalCents*100).toFixed(1)} %`:"-",$e=tt<0?"danger":tt>0?"budget-under":"",Se=Ce<0?"danger":Ce>0?"budget-under":"",lt=Re<0?"danger":Re>0?"budget-under":"",Fe=o?o.months.reduce((r,B)=>r+B.incomes.reduce((V,Q)=>V+(ea(Q.incomeSource)?Q.amountCents:0),0),0):0,qe=o?o.months.reduce((r,B)=>r+B.incomes.reduce((V,Q)=>V+(Q.incomeSource==="salary"?Q.amountCents:0),0),0):0,nt=o&&ze?Ne.get(he(o.year,ze.month))?.carriedFromPreviousCents??0:0,Tt=Fe+nt,yt=Tt-h.totalCents,ht=qe-h.totalCents,xt=h.totalCents>0?`${(qe/h.totalCents*100).toFixed(1)} %`:"-",Ot=nt<0?"danger":nt>0?"budget-under":"",Ee=yt<0?"danger":yt>0?"budget-under":"",De=A+I+N+H+z,Ue=A+I,Ve=d.foodCents+d.goingOutCents,Xe=Ue-Ve,wt=ot(Ve,Ue),on=X+ne+ve+Te+ee,Ut=Ze-De,Wt=Tt-on,M=De-d.totalCents,K=on-h.totalCents,ue=r=>r<0?"danger":r>0?"budget-under":"",yn=(r,B)=>B<=0?"muted":r>=B?"budget-under":"danger",Gt=yn(He,d.totalCents),Pn=yn(qe,h.totalCents),Tn=M+Ut+Re+de,Kn=K+Wt+yt+ht,Me=(r,B)=>{if(B<=0)return"0%";const Q=Math.max(0,r)/B*100;return`${Math.min(100,Math.max(0,Q)).toFixed(1)}%`},La=(r,B)=>{if(B<=0)return r>0?100:0;const V=Math.max(0,r)/B*100;return Math.max(0,V)},pa=[{label:"Essen",budgetCents:A,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:I,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:N,actualCents:d.fixedCents},{label:"Variable",budgetCents:H,actualCents:d.variableCents},{label:"Sonstige",budgetCents:z,actualCents:d.miscCents}];Math.max(1,...pa.flatMap(r=>[r.budgetCents,r.actualCents]));const va=(r,B)=>B<=0?"bar-positive":r<=0||B>r?"bar-negative":"bar-positive",ma=[{label:"Einkommen gesamt",valueCents:Ze,className:"bar-income"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:Re,className:Re<0?"bar-negative":"bar-positive"}],rt=Math.max(1,...ma.map(r=>Math.abs(r.valueCents))),Ln=o?o.months.slice().sort((r,B)=>r.month-B.month).map(r=>{const B=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,Q=r.fixedBudgetCents??r.fixedCosts.reduce((It,Je)=>It+Je.plannedCents,0),Pe=r.variableBudgetCents??r.variablePositions.reduce((It,Je)=>It+Je.budgetCents,0),Ge=r.miscBudgetCents??0,St=B+V+Q+Pe+Ge;return{month:r.month,foodBudgetCents:B,goingOutBudgetCents:V,fixedBudgetCents:Q,variableBudgetCents:Pe,miscBudgetCents:Ge,totalBudgetCents:St}}):[],pt=new Map(Ln.map(r=>[r.month,r])),At=r=>{if(r.length===0)return null;const B=Math.min(...r),V=Math.max(...r),Q=Math.round(r.reduce((Pe,Ge)=>Pe+Ge,0)/r.length);return{min:B,avg:Q,max:V}},jn=_.map(r=>r.summary.foodCents),ja=_.map(r=>r.summary.goingOutCents),Ra=_.map(r=>r.summary.fixedCents),Rn=_.map(r=>r.summary.variableCents),ga=_.map(r=>r.summary.miscCents),ln=_.map(r=>r.summary.totalCents),ba=_.map(r=>o?Ne.get(he(o.year,r.month))?.plannedBudgetCents??0:0),Va=_.map(r=>o?Ne.get(he(o.year,r.month))?.netCents??0:0),On=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((B,V)=>B+(V.incomeSource==="salary"?V.amountCents:0),0)])),ya=_.map(r=>On.get(r.month)??0),Ft={food:At(jn),goingOut:At(ja),fixed:At(Ra),variable:At(Rn),misc:At(ga),total:At(ln),salary:At(ya),budget:At(ba),net:At(Va)},$r=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Dt={food:jn.reduce((r,B)=>r+B,0),goingOut:ja.reduce((r,B)=>r+B,0),fixed:Ra.reduce((r,B)=>r+B,0),variable:Rn.reduce((r,B)=>r+B,0),misc:ga.reduce((r,B)=>r+B,0),total:ln.reduce((r,B)=>r+B,0),salary:ya.reduce((r,B)=>r+B,0),budget:ba.reduce((r,B)=>r+B,0)},Ca=$r.map(({key:r,label:B})=>{const V=Ft.food?.[r]??null,Q=Ft.goingOut?.[r]??null,Pe=Ft.fixed?.[r]??null,Ge=Ft.variable?.[r]??null,St=Ft.misc?.[r]??null,It=Ft.total?.[r]??null,Je=Ft.salary?.[r]??null,wn=Ft.budget?.[r]??null,kn=Ft.net?.[r]??null,Bt=Yn=>Yn===null?"-":w(Yn);return`<tr>
                  <td><strong>${B}</strong></td>
                  <td>${Bt(V)}</td>
                  <td>${Bt(Q)}</td>
                  <td>${Bt(Pe)}</td>
                  <td>${Bt(Ge)}</td>
                  <td>${Bt(St)}</td>
                  <td>${Bt(It)}</td>
                  <td>${Bt(Je)}</td>
                  <td>${Bt(wn)}</td>
                  <td>${Bt(kn)}</td>
                </tr>`}).join(""),Sr=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${w(Dt.food)}</td>
                  <td>${w(Dt.goingOut)}</td>
                  <td>${w(Dt.fixed)}</td>
                  <td>${w(Dt.variable)}</td>
                  <td>${w(Dt.misc)}</td>
                  <td>${w(Dt.total)}</td>
                  <td>${w(Dt.salary)}</td>
                  <td>${w(Dt.budget)}</td>
                </tr>`,xa=Math.max(1,..._.flatMap(r=>{const B=pt.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,B??0]})),wa=Math.max(1,..._.flatMap(r=>{const B=pt.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,Q=(B?.foodBudgetCents??0)+(B?.goingOutBudgetCents??0);return[V,Q]})),sr=Math.max(1,..._.flatMap(r=>{const B=pt.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,B]})),Ya=Math.max(1,..._.flatMap(r=>{const B=pt.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,B]})),ir=Math.max(1,..._.flatMap(r=>{const B=pt.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,B]})),or=ot(d.fixedCents,N),lr=ot(d.foodCents,A),Br=ot(d.goingOutCents,I),ur=ot(d.variableCents,H),za=ot(d.miscCents,z),An=p.editingFixedTemplateId?p.fixedTemplates.find(r=>r.id===p.editingFixedTemplateId):null,cr=p.hasUnexportedChanges,dr=p.unexportedChangeLog.slice().reverse(),Er=p.lastBackupFileName?$n(p.lastBackupFileName):"-",_r={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},st=p.years.slice().sort((r,B)=>r.year-B.year),kt=st.some(r=>r.year===p.dashboardYear)?p.dashboardYear:p.selectedYear??st[st.length-1]?.year??null,fe=typeof kt=="number"?st.find(r=>r.year===kt):void 0,ka=fe?fe.months.slice().sort((r,B)=>r.month-B.month):[],$t=fe?Zt(fe):_r,Vn=fe?Vt(fe):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},Ua=fe?Nn(fe):0,fr=fe?hn(fe,Ne):0,Jt=Ua+fr,$a=fe?fe.months.reduce((r,B)=>r+In(B),0):0,Cn=Jt-$a,Ht=Jt-$t.totalCents,hr=[{label:"Essen",budgetCents:Vn.foodCents,actualCents:$t.foodCents},{label:"Ausgehen",budgetCents:Vn.goingOutCents,actualCents:$t.goingOutCents},{label:"Fixkosten",budgetCents:Vn.fixedCents,actualCents:$t.fixedCents},{label:"Variable",budgetCents:Vn.variableCents,actualCents:$t.variableCents},{label:"Sonstige",budgetCents:Vn.miscCents,actualCents:$t.miscCents}],e=ka.map(r=>{const B=fe?Ne.get(he(fe.year,r.month)):void 0,V=Rt(r),Q=r.incomes.reduce((Yn,pr)=>Yn+pr.amountCents,0),Pe=B?.effectiveIncomeCents??Q,Ge=B?.plannedBudgetCents??In(r),St=V.foodCents,It=V.goingOutCents,Je=St+It,wn=V.totalCents,kn=Pe-Ge,Bt=Pe-wn;return{month:r.month,foodCents:St,goingOutCents:It,foodAndGoingOutCents:Je,effectiveIncomeCents:Pe,plannedBudgetCents:Ge,actualCostCents:wn,plannedNetCents:kn,actualNetCents:Bt}}),t=Math.max(1,...e.map(r=>r.actualCostCents)),n=Math.max(1,...e.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),a=Math.max(1,...e.map(r=>r.foodAndGoingOutCents)),s=Math.max(1,...e.map(r=>r.foodCents)),i=Math.max(1,...e.map(r=>r.goingOutCents)),l=e.map((r,B,V)=>{const Q=B>0?V[B-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Oe(r.month),monthShortLabel:Oe(r.month).slice(0,3),deltaCents:r.plannedNetCents-Q}}),c=l[l.length-1]??null,y=Math.min(0,...l.map(r=>r.plannedNetCents)),$=Math.max(0,...l.map(r=>r.plannedNetCents)),g=Math.max(1,$-y),v=720,C=320,x=18,m=18,b=38,S=56,E=v-S-m,k=C-x-b,T=r=>{if(l.length<=1)return S+E/2;const B=r/(l.length-1);return S+B*E},O=r=>x+($-r)/g*k,D=l.map((r,B)=>{const V=T(B),Q=O(r.plannedNetCents);return{...r,x:V,y:Q,leftPercent:V/v*100,topPercent:Q/C*100}}),R=D.map((r,B)=>`${B===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),F=D.length>0?`${R} L ${D[D.length-1]?.x.toFixed(1)} ${(x+k).toFixed(1)} L ${D[0]?.x.toFixed(1)} ${(x+k).toFixed(1)} Z`:"",U=5,Y=Array.from({length:U},(r,B)=>{const V=B/(U-1),Q=$-V*g;return{valueCents:Math.round(Q/100)*100,y:O(Q)}}),q=O(0),W=l[0]?.plannedNetCents??0,ce=(l[l.length-1]?.plannedNetCents??0)-W,te=ce<0?"trend-badge-negative":ce>0?"trend-badge-positive":"trend-badge-neutral",ie=ce<0?"↘":ce>0?"↗":"→",Le=ce<0?"Abwärtstrend":ce>0?"Aufwärtstrend":"Seitwärts",et=st.reduce((r,B)=>{const V=Vt(B);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),_e=st.reduce((r,B)=>{const V=Zt(B);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),xn=st.reduce((r,B)=>r+Nn(B),0),Wa=st[0]?hn(st[0],Ne):0,Mr=xn+Wa,Ir=Mr-et.totalCents,Nr=Mr-_e.totalCents,qr=[{label:"Essen",budgetCents:et.foodCents,actualCents:_e.foodCents},{label:"Ausgehen",budgetCents:et.goingOutCents,actualCents:_e.goingOutCents},{label:"Fixkosten",budgetCents:et.fixedCents,actualCents:_e.fixedCents},{label:"Variable",budgetCents:et.variableCents,actualCents:_e.variableCents},{label:"Sonstige",budgetCents:et.miscCents,actualCents:_e.miscCents}],Kr=Math.max(1,...qr.flatMap(r=>[r.budgetCents,r.actualCents])),Sa=st.map(r=>{const B=Zt(r),V=Vt(r),Q=Nn(r),Pe=r.months.reduce((It,Je)=>It+Je.incomes.reduce((wn,kn)=>wn+(kn.incomeSource==="salary"?kn.amountCents:0),0),0),Ge=hn(r,Ne),St=Q+Ge;return{year:r.year,salaryIncomeCents:Pe,budgetTotalCents:V.totalCents,actualTotalCents:B.totalCents,effectiveIncomeCents:St,plannedNetCents:St-V.totalCents,actualNetCents:St-B.totalCents}}),Lr=Math.max(1,...Sa.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),ds=Math.max(1,...Sa.map(r=>r.actualTotalCents)),fs=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${p.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${p.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${p.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${st.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':p.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${st.map(r=>`<option value="${r.year}" ${r.year===kt?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${fe?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w(Jt)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w($a)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w($t.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ue(Cn)}">${w(Cn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ue(Ht)}">${w(Ht)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${ie}</h4>
                      <div class="muted">Aktienähnliche Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${te}">${ie} ${Le}</span>
                    </div>
                  </header>
                  ${c?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${$n(c.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${ue(c.plannedNetCents)}" data-year-trend-active-net>${w(c.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${w(c.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${w(c.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${ue(c.deltaCents)}" data-year-trend-active-delta>${c.deltaCents>=0?"+":""}${w(c.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${v} ${C}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${fe?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Y.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${S}" y1="${r.y.toFixed(1)}" x2="${v-m}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${S-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${w(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${S}" y1="${q.toFixed(1)}" x2="${v-m}" y2="${q.toFixed(1)}"></line>
                              ${F?`<path class="year-trend-area" d="${F}"></path>`:""}
                              ${R?`<path class="year-trend-line" d="${R}"></path>`:""}
                              ${D.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${C-12}" text-anchor="middle">${$n(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${D.map((r,B)=>`
                                    <button
                                      class="year-trend-point-hit ${B===D.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${B===D.length-1?"1":"0"}"
                                      data-month-label="${$n(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${$n(r.monthLabel)}: Kalkulierter Saldo ${w(r.plannedNetCents)}, Einkommen ${w(r.effectiveIncomeCents)}, Ausgaben ${w(r.actualCostCents)}"
                                      aria-pressed="${B===D.length-1?"true":"false"}"
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
                    ${hr.map(r=>{const B=La(r.actualCents,r.budgetCents),V=Math.min(100,B),Q=`${B.toFixed(0)}%`,Pe=r.budgetCents-r.actualCents,Ge=Pe<0?"danger":Pe>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${va(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${w(r.actualCents)} von ${w(r.budgetCents)}">
                              <span class="circle-chart-value">${Q}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${w(r.budgetCents)} / I ${w(r.actualCents)}</div>
                            <div class="circle-chart-meta ${Ge}">${Pe>=0?"+":""}${w(Pe)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(e.length,1)}, minmax(0, 1fr));">
                    ${e.map(r=>{const B=Me(r.actualCostCents,t);return`
                          <div class="spark-bar" title="${Oe(r.month)}: ${w(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
                            <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                    ${e.map(r=>{const B=Me(Math.abs(r.plannedNetCents),n),V=Me(Math.abs(r.actualNetCents),n),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",Pe=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Oe(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${B}; opacity: 0.35;"></div>
                              <div class="bar ${Pe}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${ue(r.plannedNetCents)}">B ${w(r.plannedNetCents)}</span>
                              <span class="${ue(r.actualNetCents)}">I ${w(r.actualNetCents)}</span>
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
                  ${e.map(r=>`<tr>
                        <td>${Oe(r.month)}</td>
                        <td>${w(r.effectiveIncomeCents)}</td>
                        <td>${w(r.plannedBudgetCents)}</td>
                        <td>${w(r.actualCostCents)}</td>
                        <td class="${ue(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${ue(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:p.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${st.map(r=>`<option value="${r.year}" ${r.year===kt?"selected":""}>${r.year}</option>`).join("")}
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
                    ${e.map(r=>{const B=Me(r.foodAndGoingOutCents,a);return`
                          <div class="spark-bar" title="${Oe(r.month)}: ${w(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
                            <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(e.length,1)}, minmax(0, 1fr));">
                    ${e.map(r=>{const B=Me(r.foodCents,s);return`
                          <div class="spark-bar" title="${Oe(r.month)}: ${w(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
                            <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(e.length,1)}, minmax(0, 1fr));">
                    ${e.map(r=>{const B=Me(r.goingOutCents,i);return`
                          <div class="spark-bar" title="${Oe(r.month)}: ${w(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${B}"></div>
                            <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(et.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(_e.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ue(Ir)}">${w(Ir)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ue(Nr)}">${w(Nr)}</div><div class="eval-value"></div></div>
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
                    ${qr.map(r=>{const B=Me(r.budgetCents,Kr),V=Me(r.actualCents,Kr),Q=va(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${w(r.budgetCents)} | Ist: ${w(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${B}"></div>
                              <div class="bar-marker" style="left:${B}" aria-hidden="true"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Sa.length,1)}, minmax(0, 1fr));">
                    ${Sa.map(r=>{const B=Me(r.actualTotalCents,ds);return`
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
                    ${Sa.map(r=>{const B=Me(Math.abs(r.plannedNetCents),Lr),V=Me(Math.abs(r.actualNetCents),Lr),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",Pe=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${B}; opacity: 0.35;"></div>
                              <div class="bar ${Pe}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${ue(r.plannedNetCents)}">B ${w(r.plannedNetCents)}</span>
                              <span class="${ue(r.actualNetCents)}">I ${w(r.actualNetCents)}</span>
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
                        <td class="${ue(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${ue(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,hs=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,ps=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${An?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${An?vt(An.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${An?"Änderung speichern":"Vorlage speichern"}</button>
          ${An?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${p.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${w(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,jr=p.annualVariableFixedTemplates.reduce((r,B)=>r+B.plannedCents,0),vs=Math.round(jr/12),ms=`
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
                <div class="eval-value">${w(vs)}</div>
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
            ${p.annualVariableFixedTemplates.map(r=>{const B=ta(r.dueDateIso),V=B?Oe(B.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${w(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Rr=p.topModal==="years"?"Jahr hinzufügen":p.topModal==="fixed"?"Fixe Kosten (zentral)":p.topModal==="variable-fixed"?"Variable Fixkosten":p.topModal==="dashboard"?"Dashboard":"",gs=p.topModal==="years"?hs:p.topModal==="fixed"?ps:p.topModal==="variable-fixed"?ms:p.topModal==="dashboard"?fs:"";P.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${cr?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${p.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${us.map(r=>`<option value="${r}" ${p.theme===r?"selected":""}>${As(r)}</option>`).join("")}
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

        ${p.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Rr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Rr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${gs}
                </div>
              </div>
            </div>
          `:""}

        ${p.showUnexportedChangeLogModal?`
            <div class="panel-modal-backdrop" id="unexported-change-log-backdrop" role="dialog" aria-modal="true" aria-label="Ungesicherte Änderungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Ungesicherte Änderungen</h2>
                  <button class="btn btn-quiet" id="unexported-change-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${dr.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${dr.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${$n(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Oe(p.selectedMonth)} ${o.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${p.years.map(r=>`<option value="${r.year}" ${r.year===p.selectedYear?"selected":""}>${r.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${p.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(r,B)=>B+1).map(r=>`<option value="${r}" ${r===p.selectedMonth?"selected":""}>${Oe(r)}</option>`).join("")}
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
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ausgaben</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Netto</span>
                  </div>
                </header>
                <div class="bar-chart">
                  ${ma.map(r=>{const B=Me(Math.abs(r.valueCents),rt),V=r.valueCents>=0?"+":"",Q=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${w(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${B}"></div>
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
                      ${_.map(r=>{const B=pt.get(r.month)?.totalBudgetCents??0,V=Me(B,xa),Q=Me(r.summary.totalCents,xa);return`
                            <div class="spark-bar" title="${Oe(r.month)}: Ist ${w(r.summary.totalCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const B=pt.get(r.month),V=(B?.foodBudgetCents??0)+(B?.goingOutBudgetCents??0),Q=r.summary.foodCents+r.summary.goingOutCents,Pe=Me(V,wa),Ge=Me(Q,wa);return`
                            <div class="spark-bar" title="${Oe(r.month)}: Ist ${w(Q)} € | Budget ${w(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Pe}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Ge}"><span class="spark-bar-fill-value">${w(Q)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const B=pt.get(r.month)?.fixedBudgetCents??0,V=Me(B,sr),Q=Me(r.summary.fixedCents,sr);return`
                            <div class="spark-bar" title="${Oe(r.month)}: Ist ${w(r.summary.fixedCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const B=pt.get(r.month)?.variableBudgetCents??0,V=Me(B,Ya),Q=Me(r.summary.variableCents,Ya);return`
                            <div class="spark-bar" title="${Oe(r.month)}: Ist ${w(r.summary.variableCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const B=pt.get(r.month)?.miscBudgetCents??0,V=Me(B,ir),Q=Me(r.summary.miscCents,ir);return`
                            <div class="spark-bar" title="${Oe(r.month)}: Ist ${w(r.summary.miscCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${w(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${w(le)}</div>
                    <div class="eval-value">${w(Fe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${w(He)}</div>
                    <div class="eval-value">${w(qe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${$e}">${L?w(tt):"-"}</div>
                    <div class="eval-value ${Ot}">${o?w(nt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${w(Ze)}</div>
                    <div class="eval-value">${w(Tt)}</div>
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
                    <div class="eval-value">${Yt(A,d.foodCents)}</div>
                    <div class="eval-value">${w(X)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Yt(I,d.goingOutCents)}</div>
                    <div class="eval-value">${w(ne)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Yt(N,d.fixedCents)}</div>
                    <div class="eval-value">${w(ve)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Yt(H,d.variableCents)}</div>
                    <div class="eval-value">${w(Te)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Yt(z,d.miscCents)}</div>
                    <div class="eval-value">${w(ee)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Yt(De,d.totalCents)}</div>
                    <div class="eval-value">${w(on)}</div>
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
                    <div class="eval-value ${lr}">${w(d.foodCents)}</div>
                    <div class="eval-value">${w(h.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Br}">${w(d.goingOutCents)}</div>
                    <div class="eval-value">${w(h.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${or}">${w(d.fixedCents)}</div>
                    <div class="eval-value">${w(h.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${ur}">${w(d.variableCents)}</div>
                    <div class="eval-value">${w(h.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${za}">${w(d.miscCents)}</div>
                    <div class="eval-value">${w(h.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${w(d.totalCents)}</div>
                    <div class="eval-value">${w(h.totalCents)}</div>
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
                    <div class="eval-value ${ue(M)}">${w(M)}</div>
                    <div class="eval-value ${ue(K)}">${w(K)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${ue(Ut)}">${w(Ut)}</div>
                    <div class="eval-value ${ue(Wt)}">${w(Wt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${lt}">${w(Re)}</div>
                    <div class="eval-value ${Ee}">${w(yt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${ue(de)}">${w(de)}</div>
                    <div class="eval-value ${ue(ht)}">${w(ht)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Gt}">${at}</div>
                    <div class="eval-value ${Pn}">${xt}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Summe (ohne %)</div>
                    <div class="eval-value ${ue(Tn)}">${w(Tn)}</div>
                    <div class="eval-value ${ue(Kn)}">${w(Kn)}</div>
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
                ${_.map((r,B,V)=>{const Q=o?Ne.get(he(o.year,r.month)):void 0,Pe=Q?.plannedBudgetCents??0,Ge=Q?.netCents??0,St=On.get(r.month)??0,It=Ge<0?"danger":Ge>0?"budget-under":"",Je=V[B-1],wn=Je?.summary.foodCents??null,kn=Je?.summary.goingOutCents??null,Bt=Je?.summary.fixedCents??null,Yn=Je?.summary.variableCents??null,pr=Je?.summary.miscCents??null,Vr=Je?.summary.totalCents??null,Yr=Je!==void 0?On.get(Je.month)??0:null,zr=o&&Je?Ne.get(he(o.year,Je.month))?.plannedBudgetCents??0:null,Ur=wn===null?null:r.summary.foodCents-wn,Wr=kn===null?null:r.summary.goingOutCents-kn,Gr=Bt===null?null:r.summary.fixedCents-Bt,Jr=Yn===null?null:r.summary.variableCents-Yn,Hr=pr===null?null:r.summary.miscCents-pr,Xr=Vr===null?null:r.summary.totalCents-Vr,Qr=Yr===null?null:St-Yr,Zr=zr===null?null:Pe-zr,zn=Xt=>Xt===null?"muted":Xt>0?"danger":Xt<0?"budget-under":"muted",bs=Xt=>Xt===null?"muted":Xt>0?"danger":Xt<0?"budget-under":"muted",Fn=Xt=>Xt===null?"(Δ -)":`(Δ ${Xt>0?"+":""}${w(Xt)})`,es=o&&Je?Ne.get(he(o.year,Je.month))?.netCents??0:null,Ba=es===null?null:Ge-es,ys=Ba===null?"(Δ -)":`(Δ ${Ba>0?"+":""}${w(Ba)})`,Cs=Ba===null?"muted":Ba<0?"danger":Ba>0?"budget-under":"muted";return`<tr>
                  <td>${Oe(r.month)}</td>
                  <td>${w(r.summary.foodCents)} <span class="${zn(Ur)}">${Fn(Ur)}</span></td>
                  <td>${w(r.summary.goingOutCents)} <span class="${zn(Wr)}">${Fn(Wr)}</span></td>
                  <td>${w(r.summary.fixedCents)} <span class="${zn(Gr)}">${Fn(Gr)}</span></td>
                  <td>${w(r.summary.variableCents)} <span class="${zn(Jr)}">${Fn(Jr)}</span></td>
                  <td>${w(r.summary.miscCents)} <span class="${zn(Hr)}">${Fn(Hr)}</span></td>
                  <td>${w(r.summary.totalCents)} <span class="${zn(Xr)}">${Fn(Xr)}</span></td>
                  <td>${w(St)} <span class="${zn(Qr)}">${Fn(Qr)}</span></td>
                  <td>${w(Pe)} <span class="${bs(Zr)}">${Fn(Zr)}</span></td>
                  <td class="${It}">${w(Ge)} <span class="${Cs}">${ys}</span></td>
                </tr>`}).join("")}
                ${Ca}
                ${Sr}
              </tbody>
            </table>
          </article>

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${u?"":"disabled"} />
              </label>
              <label>
                Herkunft
                <select id="income-source" ${u?"":"disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${u?"":"disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${u?"":"disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${u?"":"disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${u?`<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${$e}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${vt(tt)}" />
                    </td>
                    <td>-</td>
                  </tr>${u.incomes.map(r=>`<tr>
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
                  <strong>${w(le)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${w(He)} €</strong>
                </div>
                <div class="column-overview-row ${$e}">
                  <span>Übernahme Vormonat</span>
                  <strong>${u?`${w(tt)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${w(Ze)} €</strong>
                </div>
                <div class="column-overview-row ${Se}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${w(Ce)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${vn(A,d.foodCents)}
                ${vn(I,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${w(Ue)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${w(Ve)} €</strong>
                  </div>
                  <div class="column-overview-row ${wt}">
                    <span>Diff</span>
                    <strong>${w(Xe)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${vt(A)}" ${u?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${vt(I)}" ${u?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${u?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${u?u.days.map(r=>{const B=r.foodCents>0,V=r.goingOutCents>0,Q=`${r.isoDate===f?"today-row":""} ${B||V?"day-has-entry":""}`.trim(),Pe=`amount-input ${B?"day-input-has-value":""}`.trim(),Ge=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${Q}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Pe}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${vt(r.foodCents)}" /></td>
                      <td><input class="${Ge}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${vt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${vn(N,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${vt(N)}" ${u?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${u?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${u?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${u?"":"disabled"}>Position anlegen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${u?u.fixedCosts.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${vt(r.plannedCents)}" /></td>
                    <td class="${ot(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${vt(r.actualCents)}" /></td>
                    <td class="${ot(r.actualCents,r.plannedCents)}">${w(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${vn(H,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${vt(H)}" ${u?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${u?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${u?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${u?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-variable-position-recurring" ${u?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${u?u.variablePositions.map(r=>`<tr>
                    <td>${r.name}${r.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${vt(r.budgetCents)}" /></td>
                    <td class="${ot(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${vt(r.actualCents)}" /></td>
                    <td class="${ot(r.actualCents,r.budgetCents)}">${w(r.actualCents-r.budgetCents)}</td>
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
              ${vn(z,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${vt(z)}" ${u?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${u?"":"disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${u?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${u?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${u?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${u?u.miscCosts.map(r=>`<tr>
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
          <p class="muted">Letztes verwendetes Backup: ${Er}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(p.topModal||p.showUnexportedChangeLogModal)),ha(),Qt(),dt(),_t()}function ha(){const o=P.querySelector("#theme-select"),u=P.querySelector("#open-years-modal"),f=P.querySelector("#open-fixed-modal"),d=P.querySelector("#open-variable-fixed-modal"),h=P.querySelector("#open-dashboard-modal"),_=P.querySelector("#panel-modal-close"),A=P.querySelector("#panel-modal-backdrop"),I=P.querySelector("#open-unexported-change-log"),N=P.querySelector("#unexported-change-log-close"),H=P.querySelector("#unexported-change-log-backdrop"),z=P.querySelector("#new-year"),X=P.querySelector("#create-year"),ne=P.querySelector("#year-select"),ve=P.querySelector("#month-select");o?.addEventListener("change",()=>{const M=o.value;is(M)&&Ta(M)}),u?.addEventListener("click",()=>{Gn("years")}),f?.addEventListener("click",()=>{Gn("fixed")}),d?.addEventListener("click",()=>{Gn("variable-fixed")}),h?.addEventListener("click",()=>{Gn("dashboard")}),I?.addEventListener("click",()=>{Jn()}),N?.addEventListener("click",()=>{Hn()}),H?.addEventListener("click",M=>{M.target===H&&Hn()}),P.querySelectorAll("[data-dashboard-tab]").forEach(M=>{M.addEventListener("click",()=>{const K=M.dataset.dashboardTab;K!=="year"&&K!=="food"&&K!=="all"||(p.dashboardTab=K,ae())})});const Te=P.querySelector("#dashboard-year-select");Te?.addEventListener("change",()=>{const M=Number.parseInt(Te.value,10);Number.isInteger(M)&&(p.dashboardYear=M,ae())}),_?.addEventListener("click",()=>{_a()}),A?.addEventListener("click",M=>{M.target===A&&_a()}),p.topModal&&window.setTimeout(()=>{_?.focus()},0),p.showUnexportedChangeLogModal&&window.setTimeout(()=>{N?.focus()},0),X?.addEventListener("click",async()=>{const M=Number.parseInt(z?.value??"",10);if(!Number.isInteger(M)){alert("Bitte gültiges Jahr eingeben.");return}await en(M)}),ne?.addEventListener("change",()=>{p.selectedYear=Number.parseInt(ne.value,10),p.selectedMonth=Kt(),ae()}),ve?.addEventListener("change",()=>{p.selectedMonth=Number.parseInt(ve.value,10),ae()});const ee=P.querySelector("#fixed-template-name"),le=P.querySelector("#fixed-template-amount"),He=P.querySelector("#add-fixed-template"),Ne=P.querySelector("#cancel-fixed-template-edit"),ye=P.querySelector("#annual-variable-fixed-name"),ze=P.querySelector("#annual-variable-fixed-date"),tt=P.querySelector("#annual-variable-fixed-amount"),L=P.querySelector("#add-annual-variable-fixed-template");He?.addEventListener("click",async()=>{const M=ee?.value??"",K=je(le?.value??"0");await Qe(M,K),ee&&(ee.value=""),le&&(le.value="")}),Ne?.addEventListener("click",()=>{ia()}),L?.addEventListener("click",async()=>{const M=ye?.value??"",K=ze?.value??"",ue=je(tt?.value??"0");await la(M,K,ue),ye&&(ye.value=""),ze&&(ze.value=""),tt&&(tt.value="")}),P.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeAnnualVariableFixedTemplate;K&&await wr(K)})}),P.querySelectorAll("[data-edit-fixed-template]").forEach(M=>{M.addEventListener("click",()=>{const K=M.dataset.editFixedTemplate;K&&xr(K)})}),P.querySelectorAll("[data-remove-fixed-template]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeFixedTemplate;K&&await oa(K)})}),P.querySelectorAll("[data-day-food]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),Ct(M)}),M.addEventListener("change",async()=>{const K=M.dataset.dayFood;K&&await zt(K,"foodCents",je(M.value))})}),P.querySelectorAll("[data-day-going]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),Ct(M)}),M.addEventListener("change",async()=>{const K=M.dataset.dayGoing;K&&await zt(K,"goingOutCents",je(M.value))})}),P.querySelectorAll("[data-fixed-actual]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),Ct(M)}),M.addEventListener("change",async()=>{const K=M.dataset.fixedActual;K&&await _n(K,je(M.value))})}),P.querySelectorAll("[data-fixed-planned]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),Ct(M)}),M.addEventListener("change",async()=>{const K=M.dataset.fixedPlanned;K&&await an(K,je(M.value))})});const Ze=P.querySelector("#fixed-budget");Ze?.addEventListener("click",M=>{M.preventDefault(),Ze.blur(),Ct(Ze)}),Ze?.addEventListener("change",async()=>{await rn(je(Ze.value))});const bt=P.querySelector("#food-budget");bt?.addEventListener("click",M=>{M.preventDefault(),bt.blur(),Ct(bt)}),bt?.addEventListener("change",async()=>{await er(je(bt.value))});const Ce=P.querySelector("#going-out-budget");Ce?.addEventListener("click",M=>{M.preventDefault(),Ce.blur(),Ct(Ce)}),Ce?.addEventListener("change",async()=>{await gn(je(Ce.value))}),P.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Pa()});const de=P.querySelector("#misc-budget");de?.addEventListener("click",M=>{M.preventDefault(),de.blur(),Ct(de)}),de?.addEventListener("change",async()=>{await tr(je(de.value))});const at=P.querySelector("#variable-budget");at?.addEventListener("click",M=>{M.preventDefault(),at.blur(),Ct(at)}),at?.addEventListener("change",async()=>{await Na(je(at.value))});const $e=P.querySelector("#variable-position-name"),Se=P.querySelector("#variable-position-budget"),lt=P.querySelector("#add-variable-position"),Fe=P.querySelector("#add-variable-position-recurring"),qe=P.querySelector("#misc-description"),nt=P.querySelector("#misc-amount"),Tt=P.querySelector("#add-misc"),yt=P.querySelector("#add-misc-recurring"),ht=P.querySelector("#income-description"),xt=P.querySelector("#income-source"),Ot=P.querySelector("#income-amount"),Ee=P.querySelector("#add-income"),De=P.querySelector("#add-income-recurring"),Ue=P.querySelector("#fixed-cost-name"),Ve=P.querySelector("#fixed-cost-budget"),Xe=P.querySelector("#add-fixed-cost"),wt=P.querySelector("#carryover-override");wt?.addEventListener("click",M=>{M.preventDefault(),wt.blur(),Ct(wt)}),wt?.addEventListener("change",async()=>{const M=wt.value;if(!M.trim()){await sn(null);return}await sn(je(M))}),Xe?.addEventListener("click",async()=>{const M=je(Ve?.value??"0");await ua(Ue?.value??"",M),Ue&&(Ue.value=""),Ve&&(Ve.value="")}),lt?.addEventListener("click",async()=>{const M=je(Se?.value??"0");await Pt($e?.value??"",M,!1),$e&&($e.value=""),Se&&(Se.value="")}),Fe?.addEventListener("click",async()=>{const M=je(Se?.value??"0");await Pt($e?.value??"",M,!0),$e&&($e.value=""),Se&&(Se.value="")}),Tt?.addEventListener("click",async()=>{const M=je(nt?.value??"0");await da(qe?.value??"",M,!1),qe&&(qe.value=""),nt&&(nt.value="")}),yt?.addEventListener("click",async()=>{const M=je(nt?.value??"0");await da(qe?.value??"",M,!0),qe&&(qe.value=""),nt&&(nt.value="")}),Ee?.addEventListener("click",async()=>{const M=je(Ot?.value??"0"),K=xt?.value,ue=K==="balance"||K==="fresh"||K==="salary"?K:void 0;await Ka(ht?.value??"",M,ue,!1),ht&&(ht.value=""),Ot&&(Ot.value=""),xt&&(xt.value="salary")}),De?.addEventListener("click",async()=>{const M=je(Ot?.value??"0"),K=xt?.value,ue=K==="balance"||K==="fresh"||K==="salary"?K:void 0;await Ka(ht?.value??"",M,ue,!0),ht&&(ht.value=""),Ot&&(Ot.value=""),xt&&(xt.value="salary")}),P.querySelectorAll("[data-income-source]").forEach(M=>{M.addEventListener("change",async()=>{const K=M.dataset.incomeSource;if(!K)return;const ue=M.value;await fa(K,ue==="balance"||ue==="fresh"||ue==="salary"?ue:void 0)})}),P.querySelectorAll("[data-variable-position-budget]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),Ct(M)}),M.addEventListener("change",async()=>{const K=M.dataset.variablePositionBudget;K&&await Mn(K,je(M.value))})}),P.querySelectorAll("[data-variable-position-actual]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),Ct(M)}),M.addEventListener("change",async()=>{const K=M.dataset.variablePositionActual;K&&await nr(K,je(M.value))})}),P.querySelectorAll("[data-remove-variable-position]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeVariablePosition;K&&await ca(K)})}),P.querySelectorAll("[data-move-variable-position-next]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.moveVariablePositionNext;K&&await qa(K)})}),P.querySelectorAll("[data-remove-fixed]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeFixed;K&&await kr(K)})}),P.querySelectorAll("[data-remove-income]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeIncome;K&&await ar(K)})}),P.querySelectorAll("[data-remove-misc]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeMisc;K&&await bn(K)})});const on=P.querySelector("#backup-export"),Ut=P.querySelector("#backup-import");P.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),on?.addEventListener("click",async()=>{await pe()}),Ut?.addEventListener("change",async()=>{const M=Ut.files?.[0];if(M){try{await rr(M)}catch(K){console.error("Backup-Import fehlgeschlagen",K),xe("Backup konnte nicht importiert werden.","error")}Ut.value=""}})}return{init:dn}}const Ds="modulepreload",Is=function(P){return"/habu26/"+P},ls={},Ns=function(p,Ke,J){let ge=Promise.resolve();if(Ke&&Ke.length>0){let it=function(We){return Promise.all(We.map(oe=>Promise.resolve(oe).then(mt=>({status:"fulfilled",value:mt}),mt=>({status:"rejected",reason:mt}))))};var we=it;document.getElementsByTagName("link");const se=document.querySelector("meta[property=csp-nonce]"),be=se?.nonce||se?.getAttribute("nonce");ge=it(Ke.map(We=>{if(We=Is(We),We in ls)return;ls[We]=!0;const oe=We.endsWith(".css"),mt=oe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${We}"]${mt}`))return;const ct=document.createElement("link");if(ct.rel=oe?"stylesheet":Ds,oe||(ct.as="script"),ct.crossOrigin="",ct.href=We,be&&ct.setAttribute("nonce",be),document.head.appendChild(ct),oe)return new Promise((dt,Qt)=>{ct.addEventListener("load",dt),ct.addEventListener("error",()=>Qt(new Error(`Unable to preload CSS for ${We}`)))})}))}function re(se){const be=new Event("vite:preloadError",{cancelable:!0});if(be.payload=se,window.dispatchEvent(be),!be.defaultPrevented)throw se}return ge.then(se=>{for(const be of se||[])be.status==="rejected"&&re(be.reason);return p().catch(re)})};function qs(P={}){const{immediate:p=!1,onNeedRefresh:Ke,onOfflineReady:J,onRegistered:ge,onRegisteredSW:re,onRegisterError:we}=P;let se,be;const it=async(oe=!0)=>{await be};async function We(){if("serviceWorker"in navigator){if(se=await Ns(async()=>{const{Workbox:oe}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:oe}},[]).then(({Workbox:oe})=>new oe("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(oe=>{we?.(oe)}),!se)return;se.addEventListener("activated",oe=>{(oe.isUpdate||oe.isExternal)&&window.location.reload()}),se.addEventListener("installed",oe=>{oe.isUpdate||J?.()}),se.register({immediate:p}).then(oe=>{re?re("/habu26/sw.js",oe):ge?.(oe)}).catch(oe=>{we?.(oe)})}}return be=We(),it}function Ks(){qs({immediate:!0})}const cs=document.getElementById("app");if(!cs)throw new Error("App-Container nicht gefunden.");Fs(cs).init();Ks();
