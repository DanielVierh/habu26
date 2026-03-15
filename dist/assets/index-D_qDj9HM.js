(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ge of document.querySelectorAll('link[rel="modulepreload"]'))J(ge);new MutationObserver(ge=>{for(const re of ge)if(re.type==="childList")for(const xe of re.addedNodes)xe.tagName==="LINK"&&xe.rel==="modulepreload"&&J(xe)}).observe(document,{childList:!0,subtree:!0});function Ie(ge){const re={};return ge.integrity&&(re.integrity=ge.integrity),ge.referrerPolicy&&(re.referrerPolicy=ge.referrerPolicy),ge.crossOrigin==="use-credentials"?re.credentials="include":ge.crossOrigin==="anonymous"?re.credentials="omit":re.credentials="same-origin",re}function J(ge){if(ge.ep)return;ge.ep=!0;const re=Ie(ge);fetch(ge.href,re)}})();const Cs=[1,2,3,4,5,6,7,8,9,10,11,12];function Fr(){return new Date().toISOString()}function Ft(P){const h=Math.random().toString(36).slice(2,10);return`${P}_${Date.now()}_${h}`}function xs(P,h){const Ie=new Date(P,h,0).getDate(),J=[];for(let ge=1;ge<=Ie;ge+=1){const re=new Date(Date.UTC(P,h-1,ge));J.push({isoDate:re.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return J}function ws(P){return P.map(h=>({id:Ft("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function es(P,h,Ie){const J=h.reduce((re,xe)=>re+xe.plannedCents,0),ge=Cs.map(re=>({month:re,days:xs(P,re),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:ws(h),fixedBudgetCents:J,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:P,createdAt:Fr(),templateVersion:Ie,months:ge}}function ts(P,h){return{id:Ft("expense"),description:P,amountCents:h,createdAt:Fr()}}function ns(P,h,Ie){const J={id:Ft("income"),description:P,amountCents:h,createdAt:Fr()};return Ie?{...J,incomeSource:Ie}:J}var ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $s(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var hr={exports:{}},Ss=hr.exports,as;function Bs(){return as||(as=1,(function(P,h){((Ie,J)=>{P.exports=J()})(Ss,function(){var Ie=function(e,t){return(Ie=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},J=function(){return(J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ge(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ks,xe=Object.keys,se=Array.isArray;function be(e,t){return typeof t=="object"&&xe(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||re.Promise||(re.Promise=Promise);var ut=Object.getPrototypeOf,We={}.hasOwnProperty;function ie(e,t){return We.call(e,t)}function Ct(e,t){typeof t=="function"&&(t=t(ut(e))),(typeof Reflect>"u"?xe:Reflect.ownKeys)(t).forEach(function(n){ht(e,n,t[n])})}var ft=Object.defineProperty;function ht(e,t,n,a){ft(e,t,be(n&&ie(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function Xt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ht(e.prototype,"constructor",e),{extend:Ct.bind(null,e.prototype)}}}}var Qn=Object.getOwnPropertyDescriptor,_a=[].slice;function Zn(e,t,n){return _a.call(e,t,n)}function ea(e,t){return t(e)}function On(e){if(!e)throw new Error("Assertion Failed")}function Wa(e){re.setImmediate?setImmediate(e):setTimeout(e,0)}function Dt(e,t){if(typeof t=="string"&&ie(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Dt(e,t[a]);n.push(i)}return n}var l,c=t.indexOf(".");return c===-1||(l=e[t.substr(0,c)])==null?void 0:Dt(l,t.substr(c+1))}function pt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){On(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)pt(e,t[a],n[a])}else{var i,l,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?se(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:pt(l=(l=e[i])&&ie(e,i)?l:e[i]={},c,n)):n===void 0?se(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ma(e){var t,n={};for(t in e)ie(e,t)&&(n[t]=e[t]);return n}var mr=[].concat;function Ga(e){return mr.apply([],e)}var It="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ga([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return re[e]}),Yt=new Set(It.map(function(e){return re[e]})),zt=null;function hn(e){return zt=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=zt.get(n);if(a)return a;if(se(n)){a=[],zt.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Yt.has(n.constructor))a=n;else{var l,c=ut(n);for(l in a=c===Object.prototype?{}:Object.create(c),zt.set(n,a),n)ie(n,l)&&(a[l]=t(n[l]))}return a})(e),zt=null,e}var gr={}.toString;function Pa(e){return gr.call(e).slice(8,-1)}var ta=typeof Symbol<"u"?Symbol.iterator:"@@iterator",$t=typeof ta=="symbol"?function(e){var t;return e!=null&&(t=e[ta])&&t.apply(e)}:function(){return null};function Ce(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var Ut={};function Wt(e){var t,n,a,s;if(arguments.length===1){if(se(e))return e.slice();if(this===Ut&&typeof e=="string")return[e];if(s=$t(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var na=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},It=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],st=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(It),br={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Pt(e,t){this.name=e,this.message=t}function Ja(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function An(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Ja(e,t)}function En(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ja(e,this.failures)}Xt(Pt).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Xt(An).from(Pt),Xt(En).from(Pt);var aa=st.reduce(function(e,t){return e[t]=t+"Error",e},{}),yr=Pt,ee=st.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=br[t]||n,this.inner=null)}return Xt(a).from(yr),e[t]=a,e},{}),Ha=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,It.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));It=st.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function $e(){}function Fn(e){return e}function Xa(e,t){return e==null||e===Fn?t:function(n){return t(e(n))}}function pn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Cr(e,t){return e===$e?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?pn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?pn(s,this.onerror):s),i!==void 0?i:n}}function Ta(e,t){return e===$e?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?pn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?pn(a,this.onerror):a)}}function Oa(e,t){return e===$e?t:function(s){var a=e.apply(this,arguments),s=(be(s,a),this.onsuccess),i=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?pn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?pn(i,this.onerror):i),a===void 0?l===void 0?void 0:l:be(a,l)}}function ra(e,t){return e===$e?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function sa(e,t){return e===$e?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}It.ModifyError=An,It.DexieError=Pt,It.BulkError=En;var vt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ve(e){vt=e}var Dn={},_n=100,Qt=typeof Promise>"u"?[]:(st=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Qt=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ut(Qt),st]:[st,ut(st),st]),st=Qt[0],Rt=Qt[1],Rt=Rt&&Rt.then,vn=st&&st.constructor,In=!!Qt[2],mn=function(e,t){en.push([e,t]),ia&&(queueMicrotask(tn),ia=!1)},Nn=!0,ia=!0,Qe=[],oa=[],Zt=Fn,St={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},X=St,en=[],gn=0,qn=[];function D(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=X;if(typeof e!="function"){if(e!==Dn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Kn(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var l=a._lib&&ct();i&&typeof i.then=="function"?n(a,function(c,b){i instanceof D?i._then(c,b):i.then(c,b)}):(a._state=!0,a._value=i,Aa(a)),l&&Mn()}},Kn.bind(null,a))}catch(i){Kn(a,i)}})(this,e)}var xt={get:function(){var e=X,t=fa;function n(a,s){var i=this,l=!e.global&&(e!==X||t!==fa),c=l&&!an(),b=new D(function($,g){Ln(i,new pe(er(a,e,l,c),er(s,e,l,c),$,g,e))});return this._consoleTask&&(b._consoleTask=this._consoleTask),b}return n.prototype=Dn,n},set:function(e){ht(this,"then",e&&e.prototype===Dn?xt:{get:function(){return e},set:xt.set})}};function pe(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function Kn(e,t){var n,a;oa.push(t),e._state===null&&(n=e._lib&&ct(),t=Zt(t),e._state=!1,e._value=t,a=e,Qe.some(function(s){return s._value===a._value})||Qe.push(a),Aa(e),n)&&Mn()}function Aa(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Ln(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),gn===0&&(++gn,mn(function(){--gn==0&&la()},[]))}function Ln(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++gn,mn(Qa,[n,e,t])}}function Qa(e,t,n){try{var a,s=t._value;!t._state&&oa.length&&(oa=[]),a=vt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||oa.indexOf(s)!==-1||(i=>{for(var l=Qe.length;l;)if(Qe[--l]._value===i._value)return Qe.splice(l,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--gn==0&&la(),--n.psd.ref||n.psd.finalize()}}function tn(){yn(St,function(){ct()&&Mn()})}function ct(){var e=Nn;return ia=Nn=!1,e}function Mn(){var e,t,n;do for(;0<en.length;)for(e=en,en=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<en.length);ia=Nn=!0}function la(){for(var e=Qe,t=(Qe=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),qn.slice(0)),n=t.length;n;)t[--n]()}function ua(e){return new D(Dn,!1,e)}function Pe(e,t){var n=X;return function(){var a=ct(),s=X;try{return rn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{rn(s,!1),a&&Mn()}}}Ct(D.prototype,{then:xt,_then:function(e,t){Ln(this,new pe(null,null,e,t,X))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:ua)(a)}):this.then(null,function(a){return(a&&a.name===t?n:ua)(a)}))},finally:function(e){return this.then(function(t){return D.resolve(e()).then(function(){return t})},function(t){return D.resolve(e()).then(function(){return ua(t)})})},timeout:function(e,t){var n=this;return e<1/0?new D(function(a,s){var i=setTimeout(function(){return s(new ee.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ht(D.prototype,Symbol.toStringTag,"Dexie.Promise"),St.env=Za(),Ct(D,{all:function(){var e=Wt.apply(null,arguments).map(ha);return new D(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return D.resolve(s).then(function(l){e[i]=l,--a||t(e)},n)})})},resolve:function(e){return e instanceof D?e:e&&typeof e.then=="function"?new D(function(t,n){e.then(t,n)}):new D(Dn,!0,e)},reject:ua,race:function(){var e=Wt.apply(null,arguments).map(ha);return new D(function(t,n){e.map(function(a){return D.resolve(a).then(t,n)})})},PSD:{get:function(){return X},set:function(e){return X=e}},totalEchoes:{get:function(){return fa}},newPSD:nn,usePSD:yn,scheduler:{get:function(){return mn},set:function(e){mn=e}},rejectionMapper:{get:function(){return Zt},set:function(e){Zt=e}},follow:function(e,t){return new D(function(n,a){return nn(function(s,i){var l=X;l.unhandleds=[],l.onunhandled=i,l.finalize=pn(function(){var c,b=this;c=function(){b.unhandleds.length===0?s():i(b.unhandleds[0])},qn.push(function $(){c(),qn.splice(qn.indexOf($),1)}),++gn,mn(function(){--gn==0&&la()},[])},l.finalize),e()},t,n,a)})}}),vn&&(vn.allSettled&&ht(D,"allSettled",function(){var e=Wt.apply(null,arguments).map(ha);return new D(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return D.resolve(s).then(function(l){return a[i]={status:"fulfilled",value:l}},function(l){return a[i]={status:"rejected",reason:l}}).then(function(){return--n||t(a)})})})}),vn.any&&typeof AggregateError<"u"&&ht(D,"any",function(){var e=Wt.apply(null,arguments).map(ha);return new D(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,l){return D.resolve(i).then(function(c){return t(c)},function(c){s[l]=c,--a||n(new AggregateError(s))})})})}),vn.withResolvers)&&(D.withResolvers=vn.withResolvers);var Ze={awaits:0,echoes:0,id:0},xr=0,ca=[],da=0,fa=0,wr=0;function nn(e,l,n,a){var s=X,i=Object.create(s),l=(i.parent=s,i.ref=0,i.global=!1,i.id=++wr,St.env,i.env=In?{Promise:D,PromiseProp:{value:D,configurable:!0,writable:!0},all:D.all,race:D.race,allSettled:D.allSettled,any:D.any,resolve:D.resolve,reject:D.reject}:{},l&&be(i,l),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},yn(i,e,n,a));return i.ref===0&&i.finalize(),l}function bn(){return Ze.id||(Ze.id=++xr),++Ze.awaits,Ze.echoes+=_n,Ze.id}function an(){return!!Ze.awaits&&(--Ze.awaits==0&&(Ze.id=0),Ze.echoes=Ze.awaits*_n,!0)}function ha(e){return Ze.echoes&&e&&e.constructor===vn?(bn(),e.then(function(t){return an(),t},function(t){return an(),Ye(t)})):e}function kr(){var e=ca[ca.length-1];ca.pop(),rn(e,!1)}function rn(e,t){var n,a,s=X;(t?!Ze.echoes||da++&&e===X:!da||--da&&e===X)||queueMicrotask(t?(function(i){++fa,Ze.echoes&&--Ze.echoes!=0||(Ze.echoes=Ze.awaits=Ze.id=0),ca.push(X),rn(i,!0)}).bind(null,e):kr),e!==X&&(X=e,s===St&&(St.env=Za()),In)&&(n=St.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(re,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function Za(){var e=re.Promise;return In?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(re,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function yn(e,t,n,a,s){var i=X;try{return rn(e,!0),t(n,a,s)}finally{rn(i,!1)}}function er(e,t,n,a){return typeof e!="function"?e:function(){var s=X;n&&bn(),rn(t,!0);try{return e.apply(this,arguments)}finally{rn(s,!1),a&&queueMicrotask(an)}}}function Fa(e){Promise===vn&&Ze.echoes===0?da===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Rt).indexOf("[native code]")===-1&&(bn=an=$e);var Ye=D.reject,Tt="￿",Nt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Da="String expected.",Pn=[],pa="__dbnames",Ia="readonly",Na="readwrite";function sn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var tr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function jn(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=hn(t))[e],t}}function nr(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function fe(e,t){try{var n=ar(e),a=ar(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=rr(e),i=rr(t),l=s.length,c=i.length,b=l<c?l:c,$=0;$<b;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return l===c?0:l<c?-1:1;case"Array":for(var g=e,v=t,C=g.length,x=v.length,y=C<x?C:x,m=0;m<y;++m){var S=fe(g[m],v[m]);if(S!==0)return S}return C===x?0:C<x?-1:1}}catch{}return NaN}function ar(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Pa(e))==="ArrayBuffer")?"binary":t}function rr(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function ae(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}o.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(se(n))return ge(ge([],se(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(se(a))return se(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var Rn=o;function o(e){this["@@propmod"]=e}function u(e,t){for(var n=xe(t),a=n.length,s=!1,i=0;i<a;++i){var l=n[i],c=t[l],b=Dt(e,l);c instanceof Rn?(pt(e,l,c.execute(b)),s=!0):b!==c&&(pt(e,l,c),s=!0)}return s}d.prototype._trans=function(e,t,n){var a=this._tx||X.trans,s=this.name,i=vt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function l($,g,v){if(v.schema[s])return t(v.idbtrans,v);throw new ee.NotFound("Table "+s+" not part of transaction")}var c=ct();try{var b=a&&a.db._novip===this.db._novip?a===X.trans?a._promise(e,l,n):nn(function(){return a._promise(e,l,n)},{trans:a,transless:X.transless||X}):(function $(g,v,C,x){if(g.idbdb&&(g._state.openComplete||X.letThrough||g._vip)){var y=g._createTransaction(v,C,g._dbSchema);try{y.create(),g._state.PR1398_maxLoop=3}catch(m){return m.name===aa.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return $(g,v,C,x)})):Ye(m)}return y._promise(v,function(m,S){return nn(function(){return X.trans=y,x(m,S,y)})}).then(function(m){if(v==="readwrite")try{y.idbtrans.commit()}catch{}return v==="readonly"?m:y._completion.then(function(){return m})})}if(g._state.openComplete)return Ye(new ee.DatabaseClosed(g._state.dbOpenError));if(!g._state.isBeingOpened){if(!g._state.autoOpen)return Ye(new ee.DatabaseClosed);g.open().catch($e)}return g._state.dbReadyPromise.then(function(){return $(g,v,C,x)})})(this.db,e,[this.name],l);return i&&(b._consoleTask=i,b=b.catch(function($){return console.trace($),Ye($)})),b}finally{c&&Mn()}},d.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ye(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},d.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(se(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=xe(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function($){return 0<=c.keyPath.indexOf($)})){for(var b=0;b<t.length;++b)if(t.indexOf(c.keyPath[b])===-1)return!1;return!0}return!1}).sort(function(c,b){return c.keyPath.length-b.keyPath.length})[0];if(n&&this.db._maxKey!==Tt)return l=n.keyPath.slice(0,t.length),this.where(l).equals(l.map(function(c){return e[c]}));!n&&vt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,b){return fe(c,b)===0}var l=t.reduce(function(g,b){var $=g[0],g=g[1],v=a[b],C=e[b];return[$||v,$||!v?sn(g,v&&v.multi?function(x){return x=Dt(x,b),se(x)&&x.some(function(y){return s(C,y)})}:function(x){return s(C,Dt(x,b))}):g]},[null,null]),i=l[0],l=l[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},d.prototype.filter=function(e){return this.toCollection().and(e)},d.prototype.count=function(e){return this.toCollection().count(e)},d.prototype.offset=function(e){return this.toCollection().offset(e)},d.prototype.limit=function(e){return this.toCollection().limit(e)},d.prototype.each=function(e){return this.toCollection().each(e)},d.prototype.toArray=function(e){return this.toCollection().toArray(e)},d.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},d.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,se(e)?"[".concat(e.join("+"),"]"):e))},d.prototype.reverse=function(){return this.toCollection().reverse()},d.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof nr&&(e=(l=>{var c=g,b=l;if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function $(){this.constructor=c}function g(){return l!==null&&l.apply(this,arguments)||this}return Ie(c,b),c.prototype=b===null?Object.create(b):($.prototype=b.prototype,new $),Object.defineProperty(g.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),g.prototype.table=function(){return n},g})(e)),new Set),s=e.prototype;s;s=ut(s))Object.getOwnPropertyNames(s).forEach(function(l){return a.add(l)});function i(l){if(!l)return l;var c,b=Object.create(e.prototype);for(c in l)if(!a.has(c))try{b[c]=l[c]}catch{}return b}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},d.prototype.defineClass=function(){return this.mapToClass(function(e){be(this,e)})},d.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=jn(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[l]})}).then(function(c){return c.numFailures?D.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{pt(e,i,c)}catch{}return c})},d.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var l=i??{};return u(l,t),a&&pt(l,a,e),n.core.mutate({trans:s,type:"put",values:[l],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?D.reject(c.failures[0]):!!i})})})},d.prototype.update=function(e,t){return typeof e!="object"||se(e)?this.where(":id").equals(e).modify(t):(e=Dt(e,this.schema.primKey.keyPath))===void 0?Ye(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},d.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=jn(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[l],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?D.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{pt(e,i,c)}catch{}return c})},d.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return ae(t,[e],a)}).then(function(a){return a.numFailures?D.reject(a.failures[0]):void 0})})},d.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:tr}).then(function(n){return ae(e,null,n)})}).then(function(t){return t.numFailures?D.reject(t.failures[0]):void 0})},d.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},d.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,$=c&&$?e.map(jn(c)):e;return a.core.mutate({trans:l,type:"add",keys:s,values:$,wantResults:i}).then(function(g){var v=g.numFailures,C=g.failures;if(v===0)return i?g.results:g.lastResult;throw new En("".concat(a.name,".bulkAdd(): ").concat(v," of ").concat(b," operations failed"),C)})})},d.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,$=c.auto,c=c.keyPath;if(c&&s)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,$=c&&$?e.map(jn(c)):e;return a.core.mutate({trans:l,type:"put",keys:s,values:$,wantResults:i}).then(function(g){var v=g.numFailures,C=g.failures;if(v===0)return i?g.results:g.lastResult;throw new En("".concat(a.name,".bulkPut(): ").concat(v," of ").concat(b," operations failed"),C)})})},d.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(l){return l.key}),s=e.map(function(l){return l.changes}),i=[];return this._trans("readwrite",function(l){return n.getMany({trans:l,keys:a,cache:"clone"}).then(function(c){var b=[],$=[],g=(e.forEach(function(v,C){var x=v.key,y=v.changes,m=c[C];if(m){for(var S=0,E=Object.keys(y);S<E.length;S++){var k=E[S],T=y[k];if(k===t.schema.primKey.keyPath){if(fe(T,x)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else pt(m,k,T)}i.push(C),b.push(x),$.push(m)}}),b.length);return n.mutate({trans:l,type:"put",keys:b,values:$,updates:{keys:a,changeSpecs:s}}).then(function(v){var C=v.numFailures,x=v.failures;if(C===0)return g;for(var y=0,m=Object.keys(x);y<m.length;y++){var S,E=m[y],k=i[Number(E)];k!=null&&(S=x[E],delete x[E],x[k]=S)}throw new En("".concat(t.name,".bulkUpdate(): ").concat(C," of ").concat(g," operations failed"),x)})})})},d.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return ae(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new En("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var f=d;function d(){}function p(e){function t(l,c){if(c){for(var b=arguments.length,$=new Array(b-1);--b;)$[b-1]=arguments[b];return n[l].subscribe.apply(null,$),e}if(typeof l=="string")return n[l]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(l,c,b){var $,g;if(typeof l!="object")return c=c||ra,g={subscribers:[],fire:b=b||$e,subscribe:function(v){g.subscribers.indexOf(v)===-1&&(g.subscribers.push(v),g.fire=c(g.fire,v))},unsubscribe:function(v){g.subscribers=g.subscribers.filter(function(C){return C!==v}),g.fire=g.subscribers.reduce(c,b)}},n[l]=t[l]=g;xe($=l).forEach(function(v){var C=$[v];if(se(C))i(v,$[v][0],$[v][1]);else{if(C!=="asap")throw new ee.InvalidArgument("Invalid event config");var x=i(v,Fn,function(){for(var y=arguments.length,m=new Array(y);y--;)m[y]=arguments[y];x.subscribers.forEach(function(S){Wa(function(){S.apply(null,m)})})})}})}}function _(e,t){return Xt(t).from({prototype:e}),t}function A(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function q(e,t){e.filter=sn(e.filter,t)}function I(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return sn(a(),t())}:t,e.justLimit=n&&!a}function G(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function z(e,t,n){var a=G(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function H(e,t,n,a){var s,i,l=e.replayFilter?sn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,b,$){var g,v;l&&!l(b,$,function(C){return b.stop(C)},function(C){return b.fail(C)})||((v=""+(g=b.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(g)),ie(s,v))||(s[v]=!0,t(c,b,$))},Promise.all([e.or._iterate(i,n),ne(z(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):ne(z(e,a,n),sn(e.algorithm,l),t,!e.keysOnly&&e.valueMapper)}function ne(e,t,n,a){var s=Pe(a?function(i,l,c){return n(a(i),l,c)}:n);return e.then(function(i){if(i)return i.start(function(){var l=function(){return i.continue()};t&&!t(i,function(c){return l=c},function(c){i.stop(c),l=$e},function(c){i.fail(c),l=$e})||s(i.value,i,function(c){return l=c}),l()})})}Q.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ye.bind(null,n.error)):n.table._trans("readonly",e).then(t)},Q.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ye.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Q.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=sn(t.algorithm,e)},Q.prototype._iterate=function(e,t){return H(this._ctx,e,t,this._ctx.table.core)},Q.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&be(n,e),t._ctx=n,t},Q.prototype.raw=function(){return this._ctx.valueMapper=null,this},Q.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return H(t,e,n,t.table.core)})},Q.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return A(s,!0)?i.count({trans:n,query:{index:G(s,i.schema),range:s.range}}).then(function(l){return Math.min(l,s.limit)}):(a=0,H(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},Q.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(b,$){return $?i(b[n[$]],$-1):b[a]}var l=this._ctx.dir==="next"?1:-1;function c(b,$){return fe(i(b,s),i($,s))*l}return this.toArray(function(b){return b.sort(c)}).then(t)},Q.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,l=t._ctx;return l.dir==="next"&&A(l,!0)&&0<l.limit?(a=l.valueMapper,s=G(l,l.table.core.schema),l.table.core.query({trans:n,limit:l.limit,values:!0,query:{index:s,range:l.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],H(l,function(c){return i.push(c)},n,l.table.core).then(function(){return i}))},e)},Q.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,A(t)?I(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):I(t,function(){var n=e;return function(){return--n<0}})),this},Q.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),I(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},Q.prototype.until=function(e,t){return q(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},Q.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},Q.prototype.last=function(e){return this.reverse().first(e)},Q.prototype.filter=function(e){var t;return q(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=sn(t.isMatch,e),this},Q.prototype.and=function(e){return this.filter(e)},Q.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Q.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Q.prototype.desc=function(){return this.reverse()},Q.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},Q.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Q.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},Q.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},Q.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&A(t,!0)&&0<t.limit)return this._read(function(a){var s=G(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},Q.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Q.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},Q.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Q.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},q(this._ctx,function(a){var a=a.primaryKey.toString(),s=ie(e,a);return e[a]=!0,!s})),this},Q.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(m,S){var E=S.failures;C+=m-S.numFailures;for(var k=0,T=xe(E);k<T.length;k++){var O=T[k];v.push(E[O])}}var i=typeof e=="function"?e:function(m){return u(m,e)},l=n.table.core,g=l.schema.primaryKey,c=g.outbound,b=g.extractKey,$=200,g=t.db._options.modifyChunkSize,v=(g&&($=typeof g=="object"?g[l.name]||g["*"]||200:g),[]),C=0,x=[],y=e===Ke;return t.clone().primaryKeys().then(function(m){function S(k){var T=Math.min($,m.length-k),O=m.slice(k,k+T);return(y?Promise.resolve([]):l.getMany({trans:a,keys:O,cache:"immutable"})).then(function(L){var j=[],F=[],U=c?[]:null,Y=y?O:[];if(!y)for(var N=0;N<T;++N){var W=L[N],oe={value:hn(W),primKey:m[k+N]};i.call(oe,oe.value,oe)!==!1&&(oe.value==null?Y.push(m[k+N]):c||fe(b(W),b(oe.value))===0?(F.push(oe.value),c&&U.push(m[k+N])):(Y.push(m[k+N]),j.push(oe.value)))}return Promise.resolve(0<j.length&&l.mutate({trans:a,type:"add",values:j}).then(function(ye){for(var te in ye.failures)Y.splice(parseInt(te),1);s(j.length,ye)})).then(function(){return(0<F.length||E&&typeof e=="object")&&l.mutate({trans:a,type:"put",keys:U,values:F,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(ye){return s(F.length,ye)})}).then(function(){return(0<Y.length||E&&y)&&l.mutate({trans:a,type:"delete",keys:Y,criteria:E,isAdditionalChunk:0<k}).then(function(ye){return ae(n.table,Y,ye)}).then(function(ye){return s(Y.length,ye)})}).then(function(){return m.length>k+T&&S(k+$)})})}var E=A(n)&&n.limit===1/0&&(typeof e!="function"||y)&&{index:n.index,range:n.range};return S(0).then(function(){if(0<v.length)throw new An("Error modifying one or more objects",v,C,x);return m.length})})})},Q.prototype.delete=function(){var e=this._ctx,t=e.range;return!A(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Ke):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(b){var c=b.failures,b=b.numFailures;if(b)throw new An("Could not delete some values",Object.keys(c).map(function($){return c[$]}),i-b);return i-b})})})};var me=Q;function Q(){}var Ke=function(e,t){return t.value=null};function ce(e,t){return e<t?-1:e===t?0:1}function He(e,t){return t<e?-1:e===t?0:1}function de(e,t,n){return e=e instanceof et?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Ee(e){return new e.Collection(e,function(){return R("")}).limit(0)}function Xe(x,t,n,a){var s,i,l,c,b,$,g,v=n.length;if(!n.every(function(m){return typeof m=="string"}))return de(x,Da);function C(m){s=m==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},i=m==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},l=m==="next"?ce:He;var S=n.map(function(E){return{lower:i(E),upper:s(E)}}).sort(function(E,k){return l(E.lower,k.lower)});c=S.map(function(E){return E.upper}),b=S.map(function(E){return E.lower}),g=($=m)==="next"?"":a}C("next");var x=new x.Collection(x,function(){return ze(c[0],b[v-1]+a)}),y=(x._ondirectionchange=function(m){C(m)},0);return x._addAlgorithm(function(m,S,E){var k=m.key;if(typeof k=="string"){var T=i(k);if(t(T,b,y))return!0;for(var O=null,L=y;L<v;++L){var j=((F,U,Y,N,W,oe)=>{for(var ye=Math.min(F.length,N.length),te=-1,le=0;le<ye;++le){var ke=U[le];if(ke!==N[le])return W(F[le],Y[le])<0?F.substr(0,le)+Y[le]+Y.substr(le+1):W(F[le],N[le])<0?F.substr(0,le)+N[le]+Y.substr(le+1):0<=te?F.substr(0,te)+U[te]+Y.substr(te+1):null;W(F[le],ke)<0&&(te=le)}return ye<N.length&&oe==="next"?F+Y.substr(F.length):ye<F.length&&oe==="prev"?F.substr(0,Y.length):te<0?null:F.substr(0,te)+N[te]+Y.substr(te+1)})(k,T,c[L],b[L],l,$);j===null&&O===null?y=L+1:(O===null||0<l(O,j))&&(O=j)}S(O!==null?function(){m.continue(O+g)}:E)}return!1}),x}function ze(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function R(e){return{type:1,lower:e,upper:e}}Object.defineProperty(we.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),we.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Ee(this):new this.Collection(this,function(){return ze(e,t,!n,!a)})}catch{return de(this,Nt)}},we.prototype.equals=function(e){return e==null?de(this,Nt):new this.Collection(this,function(){return R(e)})},we.prototype.above=function(e){return e==null?de(this,Nt):new this.Collection(this,function(){return ze(e,void 0,!0)})},we.prototype.aboveOrEqual=function(e){return e==null?de(this,Nt):new this.Collection(this,function(){return ze(e,void 0,!1)})},we.prototype.below=function(e){return e==null?de(this,Nt):new this.Collection(this,function(){return ze(void 0,e,!1,!0)})},we.prototype.belowOrEqual=function(e){return e==null?de(this,Nt):new this.Collection(this,function(){return ze(void 0,e)})},we.prototype.startsWith=function(e){return typeof e!="string"?de(this,Da):this.between(e,e+Tt,!0,!0)},we.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):Xe(this,function(t,n){return t.indexOf(n[0])===0},[e],Tt)},we.prototype.equalsIgnoreCase=function(e){return Xe(this,function(t,n){return t===n[0]},[e],"")},we.prototype.anyOfIgnoreCase=function(){var e=Wt.apply(Ut,arguments);return e.length===0?Ee(this):Xe(this,function(t,n){return n.indexOf(t)!==-1},e,"")},we.prototype.startsWithAnyOfIgnoreCase=function(){var e=Wt.apply(Ut,arguments);return e.length===0?Ee(this):Xe(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,Tt)},we.prototype.anyOf=function(){var e,t,n=this,a=Wt.apply(Ut,arguments),s=this._cmp;try{a.sort(s)}catch{return de(this,Nt)}return a.length===0?Ee(this):((e=new this.Collection(this,function(){return ze(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,l,c){for(var b=i.key;0<s(b,a[t]);)if(++t===a.length)return l(c),!1;return s(b,a[t])===0||(l(function(){i.continue(a[t])}),!1)}),e)},we.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},we.prototype.noneOf=function(){var e=Wt.apply(Ut,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return de(this,Nt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},we.prototype.inAnyRange=function(e,E){var n=this,a=this._cmp,s=this._ascending,i=this._descending,l=this._min,c=this._max;if(e.length===0)return Ee(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return de(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var b=!E||E.includeLowers!==!1,$=E&&E.includeUppers===!0,g,v=s;function C(k,T){return v(k[0],T[0])}try{(g=e.reduce(function(k,T){for(var O=0,L=k.length;O<L;++O){var j=k[O];if(a(T[0],j[1])<0&&0<a(T[1],j[0])){j[0]=l(j[0],T[0]),j[1]=c(j[1],T[1]);break}}return O===L&&k.push(T),k},[])).sort(C)}catch{return de(this,Nt)}var x=0,y=$?function(k){return 0<s(k,g[x][1])}:function(k){return 0<=s(k,g[x][1])},m=b?function(k){return 0<i(k,g[x][0])}:function(k){return 0<=i(k,g[x][0])},S=y,E=new this.Collection(this,function(){return ze(g[0][0],g[g.length-1][1],!b,!$)});return E._ondirectionchange=function(k){v=k==="next"?(S=y,s):(S=m,i),g.sort(C)},E._addAlgorithm(function(k,T,O){for(var L,j=k.key;S(j);)if(++x===g.length)return T(O),!1;return!y(L=j)&&!m(L)||(n._cmp(j,g[x][1])===0||n._cmp(j,g[x][0])===0||T(function(){v===s?k.continue(g[x][0]):k.continue(g[x][1])}),!1)}),E},we.prototype.startsWithAnyOf=function(){var e=Wt.apply(Ut,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Ee(this):this.inAnyRange(e.map(function(t){return[t,t+Tt]})):de(this,"startsWithAnyOf() only works with strings")};var et=we;function we(){}function Te(e){return Pe(function(t){return it(t),e(t.target.error),!1})}function it(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var he="storagemutated",mt="x-storagemutated-1",ve=p(null,he),Le=(Oe.prototype._lock=function(){return On(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this},Oe.prototype._unlock=function(){if(On(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{yn(e[1],e[0])}catch{}}return this},Oe.prototype._locked=function(){return this._reculock&&X.lockOwnerFor!==this},Oe.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(On(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(a);case"MissingAPIError":throw new ee.MissingAPI(a.message,a);default:throw new ee.OpenFailed(a)}if(!this.active)throw new ee.TransactionInactive;On(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Pe(function(s){it(s),t._reject(e.error)}),e.onabort=Pe(function(s){it(s),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Pe(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&ve.storagemutated.fire(e.mutatedParts)})}return this},Oe.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Ye(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new D(function(i,l){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,l)},X])}):n?nn(function(){var i=new D(function(l,c){s._lock();var b=t(l,c,s);b&&b.then&&b.then(l,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new D(function(i,l){var c=t(i,l,s);c&&c.then&&c.then(i,l)}))._lib=!0,a):Ye(new ee.TransactionInactive)},Oe.prototype._root=function(){return this.parent?this.parent._root():this},Oe.prototype.waitFor=function(e){var t,n=this._root(),a=D.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new D(function(i,l){a.then(function(c){return n._waitingQueue.push(Pe(i.bind(null,c)))},function(c){return n._waitingQueue.push(Pe(l.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},Oe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Oe.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ie(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},Oe);function Oe(){}function tt(e,t,n,a,s,i,l,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!l?"&":"")+(a?"*":"")+(s?"++":"")+Ne(t),type:c}}function Ne(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function nt(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,l){return i=a(i,l),i&&(s[i[0]]=i[1]),s},{}))};var a}var Bt=function(e){try{return e.only([[]]),Bt=function(){return[[]]},[[]]}catch{return Bt=function(){return Tt},Tt}};function qt(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Dt(n,t)}:function(n){return Dt(n,e)};var t}function Et(e){return[].slice.call(e)}var Ot=0;function gt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Ae(e,t,b){function a(y){if(y.type===3)return null;if(y.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=y.lower,C=y.upper,x=y.lowerOpen,y=y.upperOpen;return v===void 0?C===void 0?null:t.upperBound(C,!!y):C===void 0?t.lowerBound(v,!!x):t.bound(v,C,!!x,!!y)}function s(g){var v,C=g.name;return{name:C,schema:g,mutate:function(x){var y=x.trans,m=x.type,S=x.keys,E=x.values,k=x.range;return new Promise(function(T,O){T=Pe(T);var L=y.objectStore(C),j=L.keyPath==null,F=m==="put"||m==="add";if(!F&&m!=="delete"&&m!=="deleteRange")throw new Error("Invalid operation type: "+m);var U,Y=(S||E||{length:1}).length;if(S&&E&&S.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(Y===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function N(Re){++ye,it(Re)}var W=[],oe=[],ye=0;if(m==="deleteRange"){if(k.type===4)return T({numFailures:ye,failures:oe,results:[],lastResult:void 0});k.type===3?W.push(U=L.clear()):W.push(U=L.delete(a(k)))}else{var j=F?j?[E,S]:[E,null]:[S,null],te=j[0],le=j[1];if(F)for(var ke=0;ke<Y;++ke)W.push(U=le&&le[ke]!==void 0?L[m](te[ke],le[ke]):L[m](te[ke])),U.onerror=N;else for(ke=0;ke<Y;++ke)W.push(U=L[m](te[ke])),U.onerror=N}function rt(Re){Re=Re.target.result,W.forEach(function($n,Wn){return $n.error!=null&&(oe[Wn]=$n.error)}),T({numFailures:ye,failures:oe,results:m==="delete"?S:W.map(function($n){return $n.result}),lastResult:Re})}U.onerror=function(Re){N(Re),rt(Re)},U.onsuccess=rt})},getMany:function(x){var y=x.trans,m=x.keys;return new Promise(function(S,E){S=Pe(S);for(var k,T=y.objectStore(C),O=m.length,L=new Array(O),j=0,F=0,U=function(W){W=W.target,L[W._pos]=W.result,++F===j&&S(L)},Y=Te(E),N=0;N<O;++N)m[N]!=null&&((k=T.get(m[N]))._pos=N,k.onsuccess=U,k.onerror=Y,++j);j===0&&S(L)})},get:function(x){var y=x.trans,m=x.key;return new Promise(function(S,E){S=Pe(S);var k=y.objectStore(C).get(m);k.onsuccess=function(T){return S(T.target.result)},k.onerror=Te(E)})},query:(v=c,function(x){return new Promise(function(y,m){y=Pe(y);var S,E,k,F=x.trans,T=x.values,O=x.limit,j=x.query,L=O===1/0?void 0:O,U=j.index,j=j.range,F=F.objectStore(C),F=U.isPrimaryKey?F:F.index(U.name),U=a(j);if(O===0)return y({result:[]});v?((j=T?F.getAll(U,L):F.getAllKeys(U,L)).onsuccess=function(Y){return y({result:Y.target.result})},j.onerror=Te(m)):(S=0,E=!T&&"openKeyCursor"in F?F.openKeyCursor(U):F.openCursor(U),k=[],E.onsuccess=function(Y){var N=E.result;return!N||(k.push(T?N.value:N.primaryKey),++S===O)?y({result:k}):void N.continue()},E.onerror=Te(m))})}),openCursor:function(x){var y=x.trans,m=x.values,S=x.query,E=x.reverse,k=x.unique;return new Promise(function(T,O){T=Pe(T);var F=S.index,L=S.range,j=y.objectStore(C),j=F.isPrimaryKey?j:j.index(F.name),F=E?k?"prevunique":"prev":k?"nextunique":"next",U=!m&&"openKeyCursor"in j?j.openKeyCursor(a(L),F):j.openCursor(a(L),F);U.onerror=Te(O),U.onsuccess=Pe(function(Y){var N,W,oe,ye,te=U.result;te?(te.___id=++Ot,te.done=!1,N=te.continue.bind(te),W=(W=te.continuePrimaryKey)&&W.bind(te),oe=te.advance.bind(te),ye=function(){throw new Error("Cursor not stopped")},te.trans=y,te.stop=te.continue=te.continuePrimaryKey=te.advance=function(){throw new Error("Cursor not started")},te.fail=Pe(O),te.next=function(){var le=this,ke=1;return this.start(function(){return ke--?le.continue():le.stop()}).then(function(){return le})},te.start=function(le){function ke(){if(U.result)try{le()}catch(Re){te.fail(Re)}else te.done=!0,te.start=function(){throw new Error("Cursor behind last entry")},te.stop()}var rt=new Promise(function(Re,$n){Re=Pe(Re),U.onerror=Te($n),te.fail=$n,te.stop=function(Wn){te.stop=te.continue=te.continuePrimaryKey=te.advance=ye,Re(Wn)}});return U.onsuccess=Pe(function(Re){U.onsuccess=ke,ke()}),te.continue=N,te.continuePrimaryKey=W,te.advance=oe,ke(),rt},T(te)):T(null)},O)})},count:function(x){var y=x.query,m=x.trans,S=y.index,E=y.range;return new Promise(function(k,T){var O=m.objectStore(C),O=S.isPrimaryKey?O:O.index(S.name),L=a(E),L=L?O.count(L):O.count();L.onsuccess=Pe(function(j){return k(j.target.result)}),L.onerror=Te(T)})}}}i=b,l=Et((b=e).objectStoreNames);var i,b={schema:{name:b.name,tables:l.map(function(g){return i.objectStore(g)}).map(function(g){var v=g.keyPath,C=g.autoIncrement,y=se(v),x={},y={name:g.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:y,keyPath:v,autoIncrement:C,unique:!0,extractKey:qt(v)},indexes:Et(g.indexNames).map(function(m){return g.index(m)}).map(function(k){var T=k.name,S=k.unique,E=k.multiEntry,k=k.keyPath,T={name:T,compound:se(k),keyPath:k,unique:S,multiEntry:E,extractKey:qt(k)};return x[gt(k)]=T}),getIndexByKeyPath:function(m){return x[gt(m)]}};return x[":id"]=y.primaryKey,v!=null&&(x[gt(v)]=y.primaryKey),y})},hasGetAll:0<l.length&&"getAll"in i.objectStore(l[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},l=b.schema,c=b.hasGetAll,b=l.tables.map(s),$={};return b.forEach(function(g){return $[g.name]=g}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(g){if($[g])return $[g];throw new Error("Table '".concat(g,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Bt(t),schema:l}}function _e(e,t,n,a){return n=n.IDBKeyRange,t=Ae(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,J(J({},s),i(s))},t)}}function Fe(e,t){var n=t.db,n=_e(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function je(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(l){var c=(function b($,g){return Qn($,g)||($=ut($))&&b($,g)})(l,s);(!c||"value"in c&&c.value===void 0)&&(l===e.Transaction.prototype||l instanceof e.Transaction?ht(l,s,{get:function(){return this.table(s)},set:function(b){ft(this,s,{value:b,writable:!0,configurable:!0,enumerable:!0})}}):l[s]=new e.Table(s,i))})})}function at(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Kt(e,t){return e._cfg.version-t._cfg.version}function on(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=nt("$meta",va("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),l=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=X.transless||X;nn(function(){if(X.trans=i,X.transless=c,t!==0)return Fe(e,n),$=t,((b=i).storeNames.includes("$meta")?b.table("$meta").get("version").then(function(g){return g??$}):D.resolve($)).then(function(S){var v=e,C=S,x=i,y=n,m=[],S=v._versions,E=v._dbSchema=Cn(0,v.idbdb,y);return(S=S.filter(function(k){return k._cfg.version>=C})).length===0?D.resolve():(S.forEach(function(k){m.push(function(){var T,O,L,j=E,F=k._cfg.dbschema,U=(Gt(v,j,y),Gt(v,F,y),E=v._dbSchema=F,Lt(j,F)),Y=(U.add.forEach(function(N){M(y,N[0],N[1].primKey,N[1].indexes)}),U.change.forEach(function(N){if(N.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var W=y.objectStore(N.name);N.add.forEach(function(oe){return ue(W,oe)}),N.change.forEach(function(oe){W.deleteIndex(oe.name),ue(W,oe)}),N.del.forEach(function(oe){return W.deleteIndex(oe)})}),k._cfg.contentUpgrade);if(Y&&k._cfg.version>C)return Fe(v,y),x._memoizedTables={},T=Ma(F),U.del.forEach(function(N){T[N]=j[N]}),at(v,[v.Transaction.prototype]),je(v,[v.Transaction.prototype],xe(T),T),x.schema=T,(O=na(Y))&&bn(),F=D.follow(function(){var N;(L=Y(x))&&O&&(N=an.bind(null,null),L.then(N,N))}),L&&typeof L.then=="function"?D.resolve(L):F.then(function(){return L})}),m.push(function(T){var O,L,j=k._cfg.dbschema;O=j,L=T,[].slice.call(L.db.objectStoreNames).forEach(function(F){return O[F]==null&&L.db.deleteObjectStore(F)}),at(v,[v.Transaction.prototype]),je(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),x.schema=v._dbSchema}),m.push(function(T){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===k._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(O){return O!=="$meta"})):T.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return m.length?D.resolve(m.shift()(x.idbtrans)).then(k):D.resolve()})().then(function(){K(E,y)}))}).catch(l);var b,$;xe(s).forEach(function(g){M(n,g,s[g].primKey,s[g].indexes)}),Fe(e,n),D.follow(function(){return e.on.populate.fire(i)}).catch(l)})}function ln(e,t){K(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Cn(0,e.idbdb,t);Gt(e,e._dbSchema,t);for(var a=0,s=Lt(n,e._dbSchema).change;a<s.length;a++){var i=(l=>{if(l.change.length||l.recreate)return console.warn("Unable to patch indexes of table ".concat(l.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(l.name);l.add.forEach(function(b){vt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name,".").concat(b.src)),ue(c,b)})})(s[a]);if(typeof i=="object")return i.value}}function Lt(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var l={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)l.recreate=!0,a.change.push(l);else{var c=s.idxByName,b=i.idxByName,$=void 0;for($ in c)b[$]||l.del.push($);for($ in b){var g=c[$],v=b[$];g?g.src!==v.src&&l.change.push(v):l.add.push(v)}(0<l.del.length||0<l.add.length||0<l.change.length)&&a.change.push(l)}}else a.add.push([n,i])}return a}function M(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return ue(s,i)})}function K(e,t){xe(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(vt&&console.debug("Dexie: Creating missing table",n),M(t,n,e[n].primKey,e[n].indexes))})}function ue(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Cn(e,t,n){var a={};return Zn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),l=tt(Ne($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),c=[],b=0;b<i.indexNames.length;++b){var g=i.index(i.indexNames[b]),$=g.keyPath,g=tt(g.name,$,!!g.unique,!!g.multiEntry,!1,$&&typeof $!="string",!1);c.push(g)}a[s]=nt(s,l,c)}),a}function Gt(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],l=n.objectStore(i);e._hasGetAll="getAll"in l;for(var c=0;c<l.indexNames.length;++c){var b,$=l.indexNames[c],g=l.index($).keyPath,g=typeof g=="string"?g:"["+Zn(g).join("+")+"]";t[i]&&(b=t[i].idxByName[g])&&(b.name=$,delete t[i].idxByName[g],t[i].idxByName[$]=b)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&re.WorkerGlobalScope&&re instanceof re.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function va(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return tt(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),se(i),n===0,a)})}Jt.prototype._createTableSchema=nt,Jt.prototype._parseIndexSyntax=va,Jt.prototype._parseStoresSpec=function(e,t){var n=this;xe(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new ee.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new ee.Schema("Primary key cannot be multiEntry*");s.forEach(function(l){if(l.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},Jt.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?be(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){be(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,at(t,[t._allTables,t,t.Transaction.prototype]),je(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],xe(s),s),t._storeNames=xe(s),this},Jt.prototype.upgrade=function(e){return this._cfg.contentUpgrade=sa(this._cfg.contentUpgrade||$e,e),this};var Me=Jt;function Jt(){}function ma(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new De(pa,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function ga(e){return e&&typeof e.databases=="function"}function ba(e){return nn(function(){return X.letThrough=!0,e()})}function qa(e){return!("from"in e)}var ot=function(e,t){var n;if(!this)return n=new ot,e&&"d"in e&&be(n,e),n;be(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function bt(e,t,n){var a=fe(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(qa(e))return be(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(fe(n,e.from)<0)return a?bt(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},La(e);if(0<fe(t,e.to))return s?bt(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},La(e);fe(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<fe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&wt(e,a),s&&t&&wt(e,s)}}function wt(e,t){qa(t)||(function n(a,s){var i=s.from,l=s.l,c=s.r;bt(a,i,s.to),l&&n(a,l),c&&n(a,c)})(e,t)}function Ka(e,t){var n=Vn(t),a=n.next();if(!a.done)for(var s=a.value,i=Vn(e),l=i.next(s.from),c=l.value;!a.done&&!l.done;){if(fe(c.from,s.to)<=0&&0<=fe(c.to,s.from))return!0;fe(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(l=i.next(s.from)).value}return!1}function Vn(e){var t=qa(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&fe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||fe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function La(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=J({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=ja(n)),e.d=ja(e)}function ja(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Yn(e,t){return xe(t).forEach(function(n){e[n]?wt(e[n],t[n]):e[n]=(function a(s){var i,l,c={};for(i in s)ie(s,i)&&(l=s[i],c[i]=!l||typeof l!="object"||Yt.has(l.constructor)?l:a(l));return c})(t[n])}),e}function ya(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Ka(t[n],e[n])})}Ct(ot.prototype,((st={add:function(e){return wt(this,e),this},addKey:function(e){return bt(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return bt(t,n,n)}),this},hasKey:function(e){var t=Vn(this).next(e).value;return t&&fe(t.from,e)<=0&&0<=fe(t.to,e)}})[ta]=function(){return Vn(this)},st));var un={},Ra={},zn=!1;function Un(e){Yn(Ra,e),zn||(zn=!0,setTimeout(function(){zn=!1,At(Ra,!(Ra={}))},0))}function At(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(un);a<s.length;a++)sr(c=s[a],e,n,t);else for(var i in e){var l,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(l=i[1],i=i[2],c=un["idb://".concat(l,"/").concat(i)])&&sr(c,e,n,t)}n.forEach(function(b){return b()})}function sr(e,t,n,a){for(var s=[],i=0,l=Object.entries(e.queries.query);i<l.length;i++){for(var c=l[i],b=c[0],$=[],g=0,v=c[1];g<v.length;g++){var C=v[g];ya(t,C.obsSet)?C.subscribers.forEach(function(S){return n.add(S)}):a&&$.push(C)}a&&s.push([b,$])}if(a)for(var x=0,y=s;x<y.length;x++){var m=y[x],b=m[0],$=m[1];e.queries.query[b]=$}}function cn(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ye(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function l(){if(t.openCanceller!==a)throw new ee.DatabaseClosed("db.open() was cancelled")}function c(){return new D(function(C,x){if(l(),!n)throw new ee.MissingAPI;var y=e.name,m=t.autoSchema||!s?n.open(y):n.open(y,s);if(!m)throw new ee.MissingAPI;m.onerror=Te(x),m.onblocked=Pe(e._fireOnBlocked),m.onupgradeneeded=Pe(function(S){var E;g=m.transaction,t.autoSchema&&!e._options.allowEmptyDB?(m.onerror=it,g.abort(),m.result.close(),(E=n.deleteDatabase(y)).onsuccess=E.onerror=Pe(function(){x(new ee.NoSuchDatabase("Database ".concat(y," doesnt exist")))})):(g.onerror=Te(x),E=S.oldVersion>Math.pow(2,62)?0:S.oldVersion,v=E<1,e.idbdb=m.result,i&&ln(e,g),on(e,E/10,g,x))},x),m.onsuccess=Pe(function(){g=null;var S,E,k,T,O,L,j=e.idbdb=m.result,F=Zn(j.objectStoreNames);if(0<F.length)try{var U=j.transaction((O=F).length===1?O[0]:O,"readonly");if(t.autoSchema)L=j,T=U,(k=e).verno=L.version/10,T=k._dbSchema=Cn(0,L,T),k._storeNames=Zn(L.objectStoreNames,0),je(k,[k._allTables],xe(T),T);else if(Gt(e,e._dbSchema,U),E=U,((E=Lt(Cn(0,(S=e).idbdb,E),S._dbSchema)).add.length||E.change.some(function(Y){return Y.add.length||Y.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),s=j.version+1,i=!0,C(c());Fe(e,U)}catch{}Pn.push(e),j.onversionchange=Pe(function(Y){t.vcFired=!0,e.on("versionchange").fire(Y)}),j.onclose=Pe(function(){e.close({disableAutoOpen:!1})}),v&&(F=e._deps,O=y,ga(L=F.indexedDB)||O===pa||ma(L,F.IDBKeyRange).put({name:O}).catch($e)),C()},x)}).catch(function(C){switch(C?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return D.reject(C)})}var b,$=t.dbReadyResolve,g=null,v=!1;return D.race([a,(typeof navigator>"u"?D.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(C){function x(){return indexedDB.databases().finally(C)}b=setInterval(x,100),x()}).finally(function(){return clearInterval(b)}):Promise.resolve()).then(c)]).then(function(){return l(),t.onReadyBeingFired=[],D.resolve(ba(function(){return e.on.ready.fire(e.vip)})).then(function C(){var x;if(0<t.onReadyBeingFired.length)return x=t.onReadyBeingFired.reduce(sa,$e),t.onReadyBeingFired=[],D.resolve(ba(function(){return x(e.vip)})).then(C)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(C){t.dbOpenError=C;try{g&&g.abort()}catch{}return a===t.openCanceller&&e._close(),Ye(C)}).finally(function(){t.openComplete=!0,$()}).then(function(){var C;return v&&(C={},e.tables.forEach(function(x){x.schema.indexes.forEach(function(y){y.name&&(C["idb://".concat(e.name,"/").concat(x.name,"/").concat(y.name)]=new ot(-1/0,[[[]]]))}),C["idb://".concat(e.name,"/").concat(x.name,"/")]=C["idb://".concat(e.name,"/").concat(x.name,"/:dels")]=new ot(-1/0,[[[]]])}),ve(he).fire(C),At(C,!0)),e})}function Va(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),b=c.value;return c.done?b:b&&typeof b.then=="function"?b.then(n,a):se(b)?Promise.all(b).then(n,a):n(b)}}return s(t)()}function Ca(e,t,n){for(var a=se(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var ir={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return J(J({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function l(C,x,y){var k=gt(C),m=s[k]=s[k]||[],S=C==null?0:typeof C=="string"?1:C.length,E=0<x,k=J(J({},y),{name:E?"".concat(k,"(virtual-from:").concat(y.name,")"):y.name,lowLevelIndex:y,isVirtual:E,keyTail:x,keyLength:S,extractKey:qt(C),unique:!E&&y.unique});return m.push(k),k.isPrimaryKey||i.push(k),1<S&&l(S===2?C[0]:C.slice(0,S-1),x+1,y),m.sort(function(T,O){return T.keyTail-O.keyTail}),k}var c=l(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var b=0,$=a.indexes;b<$.length;b++){var g=$[b];l(g.keyPath,0,g)}function v(C){var x,y=C.query.index;return y.isVirtual?J(J({},C),{query:{index:y.lowLevelIndex,range:(x=C.query.range,y=y.keyTail,{type:x.type===1?2:x.type,lower:Ca(x.lower,x.lowerOpen?e.MAX_KEY:e.MIN_KEY,y),lowerOpen:!0,upper:Ca(x.upper,x.upperOpen?e.MIN_KEY:e.MAX_KEY,y),upperOpen:!0})}}):C}return J(J({},n),{schema:J(J({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(C){return(C=s[gt(C)])&&C[0]}}),count:function(C){return n.count(v(C))},query:function(C){return n.query(v(C))},openCursor:function(C){var x=C.query.index,y=x.keyTail,m=x.keyLength;return x.isVirtual?n.openCursor(v(C)).then(function(E){return E&&S(E)}):n.openCursor(C);function S(E){return Object.create(E,{continue:{value:function(k){k!=null?E.continue(Ca(k,C.reverse?e.MAX_KEY:e.MIN_KEY,y)):C.unique?E.continue(E.key.slice(0,m).concat(C.reverse?e.MIN_KEY:e.MAX_KEY,y)):E.continue()}},continuePrimaryKey:{value:function(k,T){E.continuePrimaryKey(Ca(k,e.MAX_KEY,y),T)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var k=E.key;return m===1?k[0]:k.slice(0,m)}},value:{get:function(){return E.value}}})}}})}})}};function xa(e,t,n,a){return n=n||{},a=a||"",xe(e).forEach(function(s){var i,l,c;ie(t,s)?(i=e[s],l=t[s],typeof i=="object"&&typeof l=="object"&&i&&l?(c=Pa(i))!==Pa(l)?n[a+s]=t[s]:c==="Object"?xa(i,l,n,a+s+"."):i!==l&&(n[a+s]=t[s]):i!==l&&(n[a+s]=t[s])):n[a+s]=void 0}),xe(t).forEach(function(s){ie(e,s)||(n[a+s]=t[s])}),n}function wa(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var or={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return J(J({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return J(J({},n),{mutate:function(s){var i=X.trans,l=i.table(t).hook,c=l.deleting,b=l.creating,$=l.updating;switch(s.type){case"add":if(b.fire===$e)break;return i._promise("readwrite",function(){return g(s)},!0);case"put":if(b.fire===$e&&$.fire===$e)break;return i._promise("readwrite",function(){return g(s)},!0);case"delete":if(c.fire===$e)break;return i._promise("readwrite",function(){return g(s)},!0);case"deleteRange":if(c.fire===$e)break;return i._promise("readwrite",function(){return(function v(C,x,y){return n.query({trans:C,values:!1,query:{index:a,range:x},limit:y}).then(function(m){var S=m.result;return g({type:"delete",keys:S,trans:C}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):S.length<y?{failures:[],numFailures:0,lastResult:void 0}:v(C,J(J({},x),{lower:S[S.length-1],lowerOpen:!0}),y)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function g(v){var C,x,y,m=X.trans,S=v.keys||wa(a,v);if(S)return(v=v.type==="add"||v.type==="put"?J(J({},v),{keys:S}):J({},v)).type!=="delete"&&(v.values=ge([],v.values)),v.keys&&(v.keys=ge([],v.keys)),C=n,y=S,((x=v).type==="add"?Promise.resolve([]):C.getMany({trans:x.trans,keys:y,cache:"immutable"})).then(function(E){var k=S.map(function(T,O){var L,j,F,U=E[O],Y={onerror:null,onsuccess:null};return v.type==="delete"?c.fire.call(Y,T,U,m):v.type==="add"||U===void 0?(L=b.fire.call(Y,T,v.values[O],m),T==null&&L!=null&&(v.keys[O]=T=L,a.outbound||pt(v.values[O],a.keyPath,T))):(L=xa(U,v.values[O]),(j=$.fire.call(Y,L,T,U,m))&&(F=v.values[O],Object.keys(j).forEach(function(N){ie(F,N)?F[N]=j[N]:pt(F,N,j[N])}))),Y});return n.mutate(v).then(function(T){for(var O=T.failures,L=T.results,j=T.numFailures,T=T.lastResult,F=0;F<S.length;++F){var U=(L||S)[F],Y=k[F];U==null?Y.onerror&&Y.onerror(O[F]):Y.onsuccess&&Y.onsuccess(v.type==="put"&&E[F]?v.values[F]:U)}return{failures:O,results:L,numFailures:j,lastResult:T}}).catch(function(T){return k.forEach(function(O){return O.onerror&&O.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function Ya(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)fe(t.keys[s],e[i])===0&&(a.push(n?hn(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var $r={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return J(J({},n),{getMany:function(a){var s;return a.cache?(s=Ya(a.keys,a.trans._cache,a.cache==="clone"))?D.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?hn(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function lr(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function ur(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Sr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new ot(e.MIN_KEY,e.MAX_KEY);return J(J({},e),{transaction:function(a,s,i){if(X.subscr&&s!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));return e.transaction(a,s,i)},table:function(a){function s(S){var m,S=S.query;return[m=S.index,new ot((m=(S=S.range).lower)!=null?m:e.MIN_KEY,(m=S.upper)!=null?m:e.MAX_KEY)]}var i=e.table(a),l=i.schema,c=l.primaryKey,b=l.indexes,$=c.extractKey,g=c.outbound,v=c.autoIncrement&&b.filter(function(y){return y.compound&&y.keyPath.includes(c.keyPath)}),C=J(J({},i),{mutate:function(y){function m(W){return W="idb://".concat(t,"/").concat(a,"/").concat(W),O[W]||(O[W]=new ot)}var S,E,k,T=y.trans,O=y.mutatedParts||(y.mutatedParts={}),L=m(""),j=m(":dels"),F=y.type,Y=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[wa(c,y).filter(function(W){return W}),y.values]:[],U=Y[0],Y=Y[1],N=y.trans._cache;return se(U)?(L.addKeys(U),(F=F==="delete"||U.length===Y.length?Ya(U,N):null)||j.addKeys(U),(F||Y)&&(S=m,E=F,k=Y,l.indexes.forEach(function(W){var oe=S(W.name||"");function ye(le){return le!=null?W.extractKey(le):null}function te(le){W.multiEntry&&se(le)?le.forEach(function(ke){return oe.addKey(ke)}):oe.addKey(le)}(E||k).forEach(function(le,Re){var rt=E&&ye(E[Re]),Re=k&&ye(k[Re]);fe(rt,Re)!==0&&(rt!=null&&te(rt),Re!=null)&&te(Re)})}))):U?(Y={from:(N=U.lower)!=null?N:e.MIN_KEY,to:(F=U.upper)!=null?F:e.MAX_KEY},j.add(Y),L.add(Y)):(L.add(n),j.add(n),l.indexes.forEach(function(W){return m(W.name).add(n)})),i.mutate(y).then(function(W){return!U||y.type!=="add"&&y.type!=="put"||(L.addKeys(W.results),v&&v.forEach(function(oe){for(var ye=y.values.map(function(rt){return oe.extractKey(rt)}),te=oe.keyPath.findIndex(function(rt){return rt===c.keyPath}),le=0,ke=W.results.length;le<ke;++le)ye[le][te]=W.results[le];m(oe.name).addKeys(ye)})),T.mutatedParts=Yn(T.mutatedParts||{},O),W})}}),x={get:function(y){return[c,new ot(y.key)]},getMany:function(y){return[c,new ot().addKeys(y.keys)]},count:s,query:s,openCursor:s};return xe(x).forEach(function(y){C[y]=function(m){var S=X.subscr,E=!!S,k=lr(X,i)&&ur(y,m)?m.obsSet={}:S;if(E){var T,S=function(Y){return Y="idb://".concat(t,"/").concat(a,"/").concat(Y),k[Y]||(k[Y]=new ot)},O=S(""),L=S(":dels"),E=x[y](m),j=E[0],E=E[1];if((y==="query"&&j.isPrimaryKey&&!m.values?L:S(j.name||"")).add(E),!j.isPrimaryKey){if(y!=="count")return T=y==="query"&&g&&m.values&&i.query(J(J({},m),{values:!1})),i[y].apply(this,arguments).then(function(Y){if(y==="query"){if(g&&m.values)return T.then(function(ye){return ye=ye.result,O.addKeys(ye),Y});var N=m.values?Y.result.map($):Y.result;(m.values?O:L).addKeys(N)}else{var W,oe;if(y==="openCursor")return oe=m.values,(W=Y)&&Object.create(W,{key:{get:function(){return L.addKey(W.primaryKey),W.key}},primaryKey:{get:function(){var ye=W.primaryKey;return L.addKey(ye),ye}},value:{get:function(){return oe&&O.addKey(W.primaryKey),W.value}}})}return Y});L.add(n)}}return i[y].apply(this,arguments)}}),C}})}};function cr(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=J({},t),se(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&se(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function xn(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<fe(n,a.lower):0<=fe(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?fe(n,a.upper)<0:fe(n,a.upper)<=0));var n,a}function dr(e,t,n,a,s,i){var l,c,b,$,g,v;return!n||n.length===0||(l=t.query.index,c=l.multiEntry,b=t.query.range,$=a.schema.primaryKey.extractKey,g=l.extractKey,v=(l.lowLevelIndex||l).extractKey,(a=n.reduce(function(C,x){var y=C,m=[];if(x.type==="add"||x.type==="put")for(var S=new ot,E=x.values.length-1;0<=E;--E){var k,T=x.values[E],O=$(T);!S.hasKey(O)&&(k=g(T),c&&se(k)?k.some(function(Y){return xn(Y,b)}):xn(k,b))&&(S.addKey(O),m.push(T))}switch(x.type){case"add":var L=new ot().addKeys(t.values?C.map(function(N){return $(N)}):C),y=C.concat(t.values?m.filter(function(N){return N=$(N),!L.hasKey(N)&&(L.addKey(N),!0)}):m.map(function(N){return $(N)}).filter(function(N){return!L.hasKey(N)&&(L.addKey(N),!0)}));break;case"put":var j=new ot().addKeys(x.values.map(function(N){return $(N)}));y=C.filter(function(N){return!j.hasKey(t.values?$(N):N)}).concat(t.values?m:m.map(function(N){return $(N)}));break;case"delete":var F=new ot().addKeys(x.keys);y=C.filter(function(N){return!F.hasKey(t.values?$(N):N)});break;case"deleteRange":var U=x.range;y=C.filter(function(N){return!xn($(N),U)})}return y},e))===e)?e:(a.sort(function(C,x){return fe(v(C),v(x))||fe($(C),$(x))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function za(e,t){return fe(e.lower,t.lower)===0&&fe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Br(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=fe(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=fe(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Er(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&Ce(i,s)},3e3))})}var kt={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return J(J({},e),{transaction:function(n,a,s){var i,l,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(l=function(b){return function(){if(i.abort(),a==="readwrite"){for(var $=new Set,g=0,v=n;g<v.length;g++){var C=v[g],x=un["idb://".concat(t,"/").concat(C)];if(x){var y=e.table(C),m=x.optimisticOps.filter(function(W){return W.trans===c});if(c._explicit&&b&&c.mutatedParts)for(var S=0,E=Object.values(x.queries.query);S<E.length;S++)for(var k=0,T=(j=E[S]).slice();k<T.length;k++)ya((F=T[k]).obsSet,c.mutatedParts)&&(Ce(j,F),F.subscribers.forEach(function(W){return $.add(W)}));else if(0<m.length){x.optimisticOps=x.optimisticOps.filter(function(W){return W.trans!==c});for(var O=0,L=Object.values(x.queries.query);O<L.length;O++)for(var j,F,U,Y=0,N=(j=L[O]).slice();Y<N.length;Y++)(F=N[Y]).res!=null&&c.mutatedParts&&(b&&!F.dirty?(U=Object.isFrozen(F.res),U=dr(F.res,F.req,m,y,F,U),F.dirty?(Ce(j,F),F.subscribers.forEach(function(W){return $.add(W)})):U!==F.res&&(F.res=U,F.promise=D.resolve({result:U}))):(F.dirty&&Ce(j,F),F.subscribers.forEach(function(W){return $.add(W)})))}}}$.forEach(function(W){return W()})}}})(!1),{signal:s}),c.addEventListener("error",l(!1),{signal:s}),c.addEventListener("complete",l(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return J(J({},a),{mutate:function(i){var l,c=X.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(l=un["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||wa(s,i).some(function(b){return b==null}))?(l.optimisticOps.push(i),i.mutatedParts&&Un(i.mutatedParts),c.then(function(b){0<b.numFailures&&(Ce(l.optimisticOps,i),(b=cr(0,i,b))&&l.optimisticOps.push(b),i.mutatedParts)&&Un(i.mutatedParts)}),c.catch(function(){Ce(l.optimisticOps,i),i.mutatedParts&&Un(i.mutatedParts)})):c.then(function(b){var $=cr(0,J(J({},i),{values:i.values.map(function(g,v){var C;return b.failures[v]?g:(pt(C=(C=s.keyPath)!=null&&C.includes(".")?hn(g):J({},g),s.keyPath,b.results[v]),C)})}),b);l.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&Un(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var l,c,b,$,g,v,C;return lr(X,a)&&ur("query",i)?(l=((b=X.trans)==null?void 0:b.db._options.cache)==="immutable",c=(b=X).requery,b=b.signal,v=((x,y,m,S)=>{var E=un["idb://".concat(x,"/").concat(y)];if(!E)return[];if(!(x=E.queries[m]))return[null,!1,E,null];var k=x[(S.query?S.query.index.name:null)||""];if(!k)return[null,!1,E,null];switch(m){case"query":var T=k.find(function(O){return O.req.limit===S.limit&&O.req.values===S.values&&za(O.req.query.range,S.query.range)});return T?[T,!0,E,k]:[k.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=S.limit&&(!S.values||O.req.values)&&Br(O.req.query.range,S.query.range)}),!1,E,k];case"count":return T=k.find(function(O){return za(O.req.query.range,S.query.range)}),[T,!!T,E,k]}})(t,n,"query",i),C=v[0],$=v[2],g=v[3],C&&v[1]?C.obsSet=i.obsSet:(v=a.query(i).then(function(x){var y=x.result;if(C&&(C.res=y),l){for(var m=0,S=y.length;m<S;++m)Object.freeze(y[m]);Object.freeze(y)}else x.result=hn(y);return x}).catch(function(x){return g&&C&&Ce(g,C),Promise.reject(x)}),C={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},g?g.push(C):(g=[C],($=$||(un["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=g)),Er(C,g,c,b),C.promise.then(function(x){return{result:dr(x.result,i,$?.optimisticOps,a,C,l)}})):a.query(i)}})}})}};function wn(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}Ue.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Kt),n.stores({}),this._state.autoSchema=!1),n},Ue.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?e():new D(function(n,a){if(t._state.openComplete)return a(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new ee.DatabaseClosed);t.open().catch($e)}t._state.dbReadyPromise.then(n,a)}).then(e)},Ue.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(l,c){return l.level-c.level}),this},Ue.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Ue.prototype.open=function(){var e=this;return yn(St,function(){return cn(e)})},Ue.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Pn.indexOf(this);if(0<=t&&Pn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new D(function(n){e.dbReadyResolve=n}),e.openCanceller=new D(function(n,a){e.cancelOpen=a}))},Ue.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ue.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new D(function(s,i){function l(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=Pe(function(){var b,$,g;b=t._deps,$=t.name,ga(g=b.indexedDB)||$===pa||ma(g,b.IDBKeyRange).delete($).catch($e),s()}),c.onerror=Te(i),c.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(l):l()})},Ue.prototype.backendDB=function(){return this.idbdb},Ue.prototype.isOpen=function(){return this.idbdb!==null},Ue.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ue.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ue.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ue.prototype,"tables",{get:function(){var e=this;return xe(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ue.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new ee.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Ga(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},Ue.prototype._transaction=function(e,t,n){var a,s,i=this,l=X.trans,c=(l&&l.db===this&&e.indexOf("!")===-1||(l=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===Ia)a=Ia;else{if(e!="rw"&&e!=Na)throw new ee.InvalidArgument("Invalid transaction mode: "+e);a=Na}if(l){if(l.mode===Ia&&a===Na){if(!c)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");l=null}l&&s.forEach(function($){if(l&&l.storeNames.indexOf($)===-1){if(!c)throw new ee.SubTransaction("Table "+$+" not included in parent transaction.");l=null}}),c&&l&&!l.active&&(l=null)}}catch($){return l?l._promise(null,function(g,v){v($)}):Ye($)}var b=(function $(g,v,C,x,y){return D.resolve().then(function(){var k=X.transless||X,m=g._createTransaction(v,C,g._dbSchema,x),k=(m.explicit=!0,{trans:m,transless:k});if(x)m.idbtrans=x.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,g._state.PR1398_maxLoop=3}catch(T){return T.name===aa.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return $(g,v,C,null,y)})):Ye(T)}var S,E=na(y),k=(E&&bn(),D.follow(function(){var T;(S=y.call(m,m))&&(E?(T=an.bind(null,null),S.then(T,T)):typeof S.next=="function"&&typeof S.throw=="function"&&(S=Va(S)))},k));return(S&&typeof S.then=="function"?D.resolve(S).then(function(T){return m.active?T:Ye(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return S})).then(function(T){return x&&m._resolve(),m._completion.then(function(){return T})}).catch(function(T){return m._reject(T),Ye(T)})})}).bind(null,this,a,s,l,n);return l?l._promise(a,b,"lock"):X.trans?yn(X.transless,function(){return i._whenReady(b)}):this._whenReady(b)},Ue.prototype.table=function(e){if(ie(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var De=Ue;function Ue(e,t){var n,a,s,i,l,c=this,b=(this._middlewares={},this.verno=0,Ue.dependencies),b=(this._options=t=J({addons:Ue.addons,autoOpen:!0,indexedDB:b.indexedDB,IDBKeyRange:b.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),g=($.dbReadyPromise=new D(function(v){$.dbReadyResolve=v}),$.openCanceller=new D(function(v,C){$.cancelOpen=C}),this._state=$,this.name=e,this.on=p(this,"populate","blocked","versionchange","close",{ready:[sa,$e]}),this.once=function(v,C){var x=function(){for(var y=[],m=0;m<arguments.length;m++)y[m]=arguments[m];c.on(v).unsubscribe(x),C.apply(c,y)};return c.on(v,x)},this.on.ready.subscribe=ea(this.on.ready.subscribe,function(v){return function(C,x){Ue.vip(function(){var y,m=c._state;m.openComplete?(m.dbOpenError||D.resolve().then(C),x&&v(C)):m.onReadyBeingFired?(m.onReadyBeingFired.push(C),x&&v(C)):(v(C),y=c,x||v(function S(){y.on.ready.unsubscribe(C),y.on.ready.unsubscribe(S)}))})}}),this.Collection=(n=this,_(me.prototype,function(S,m){this.db=n;var x=tr,y=null;if(m)try{x=m()}catch(k){y=k}var m=S._ctx,S=m.table,E=S.hook.reading.fire;this._ctx={table:S,index:m.index,isPrimKey:!m.index||S.schema.primKey.keyPath&&m.index===S.schema.primKey.name,range:x,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:y,or:m.or,valueMapper:E!==Fn?E:null}})),this.Table=(a=this,_(f.prototype,function(v,C,x){this.db=a,this._tx=x,this.name=v,this.schema=C,this.hook=a._allTables[v]?a._allTables[v].hook:p(null,{creating:[Cr,$e],reading:[Xa,Fn],updating:[Oa,$e],deleting:[Ta,$e]})})),this.Transaction=(s=this,_(Le.prototype,function(v,C,x,y,m){var S=this;v!=="readonly"&&C.forEach(function(E){E=(E=x[E])==null?void 0:E.yProps,E&&(C=C.concat(E.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=v,this.storeNames=C,this.schema=x,this.chromeTransactionDurability=y,this.idbtrans=null,this.on=p(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new D(function(E,k){S._resolve=E,S._reject=k}),this._completion.then(function(){S.active=!1,S.on.complete.fire()},function(E){var k=S.active;return S.active=!1,S.on.error.fire(E),S.parent?S.parent._reject(E):k&&S.idbtrans&&S.idbtrans.abort(),Ye(E)})})),this.Version=(i=this,_(Me.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(l=this,_(et.prototype,function(v,C,x){if(this.db=l,this._ctx={table:v,index:C===":id"?null:C,or:x},this._cmp=this._ascending=fe,this._descending=function(y,m){return fe(m,y)},this._max=function(y,m){return 0<fe(y,m)?y:m},this._min=function(y,m){return fe(y,m)<0?y:m},this._IDBKeyRange=l._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Bt(t.IDBKeyRange),this._createTransaction=function(v,C,x,y){return new c.Transaction(v,C,x,c._options.chromeTransactionDurability,y)},this._fireOnBlocked=function(v){c.on("blocked").fire(v),Pn.filter(function(C){return C.name===c.name&&C!==c&&!C._state.vcFired}).map(function(C){return C.on("versionchange").fire(v)})},this.use($r),this.use(kt),this.use(Sr),this.use(ir),this.use(or),new Proxy(this,{get:function(v,C,x){var y;return C==="_vip"||(C==="table"?function(m){return wn(c.table(m),g)}:(y=Reflect.get(v,C,x))instanceof f?wn(y,g):C==="tables"?y.map(function(m){return wn(m,g)}):C==="_createTransaction"?function(){return wn(y.apply(this,arguments),g)}:y)}}));this.vip=g,b.forEach(function(v){return v(c)})}var jt,Rt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",_r=(Ua.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Ua.prototype[Rt]=function(){return this},Ua);function Ua(e){this._subscribe=e}try{jt={indexedDB:re.indexedDB||re.mozIndexedDB||re.webkitIndexedDB||re.msIndexedDB,IDBKeyRange:re.IDBKeyRange||re.webkitIDBKeyRange}}catch{jt={indexedDB:null,IDBKeyRange:null}}function ka(e){var t,n=!1,a=new _r(function(s){var i=na(e),l,c=!1,b={},$={},g={get closed(){return c},unsubscribe:function(){c||(c=!0,l&&l.abort(),v&&ve.storagemutated.unsubscribe(x))}},v=(s.start&&s.start(g),!1),C=function(){return Fa(y)},x=function(m){Yn(b,m),ya($,b)&&C()},y=function(){var m,S,E;!c&&jt.indexedDB&&(b={},m={},l&&l.abort(),l=new AbortController,E=(k=>{var T=ct();try{i&&bn();var O=nn(e,k);return O=i?O.finally(an):O}finally{T&&Mn()}})(S={subscr:m,signal:l.signal,requery:C,querier:e,trans:null}),Promise.resolve(E).then(function(k){n=!0,t=k,c||S.signal.aborted||(b={},(T=>{for(var O in T)if(ie(T,O))return;return 1})($=m)||v||(ve(he,x),v=!0),Fa(function(){return!c&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||c||Fa(function(){c||s.error&&s.error(k)})}))};return setTimeout(C,0),g});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var dn=De;function $a(e){var t=fn;try{fn=!0,ve.storagemutated.fire(e),At(e,!0)}finally{fn=t}}Ct(dn,J(J({},It),{delete:function(e){return new dn(e,{addons:[]}).delete()},exists:function(e){return new dn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=dn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(ga(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==pa})}):ma(n,t).toCollection().primaryKeys()).then(e)}catch{return Ye(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){be(this,e)}},ignoreTransaction:function(e){return X.trans?yn(X.transless,e):e()},vip:ba,async:function(e){return function(){try{var t=Va(e.apply(this,arguments));return t&&typeof t.then=="function"?t:D.resolve(t)}catch(n){return Ye(n)}}},spawn:function(e,t,n){try{var a=Va(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:D.resolve(a)}catch(s){return Ye(s)}},currentTransaction:{get:function(){return X.trans||null}},waitFor:function(e,t){return e=D.resolve(typeof e=="function"?dn.ignoreTransaction(e):e).timeout(t||6e4),X.trans?X.trans.waitFor(e):e},Promise:D,debug:{get:function(){return vt},set:function(e){Ve(e)}},derive:Xt,extend:be,props:Ct,override:ea,Events:p,on:ve,liveQuery:ka,extendObservabilitySet:Yn,getByKeyPath:Dt,setByKeyPath:pt,delByKeyPath:function(e,t){typeof t=="string"?pt(e,t,void 0):"length"in t&&[].map.call(t,function(n){pt(e,n,void 0)})},shallowClone:Ma,deepClone:hn,getObjectDiff:xa,cmp:fe,asap:Wa,minKey:-1/0,addons:[],connections:Pn,errnames:aa,dependencies:jt,cache:un,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),dn.maxKey=Bt(dn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ve(he,function(e){fn||(e=new CustomEvent(mt,{detail:e}),fn=!0,dispatchEvent(e),fn=!1)}),addEventListener(mt,function(e){e=e.detail,fn||$a(e)}));var kn,fn=!1,lt=function(){};return typeof BroadcastChannel<"u"&&((lt=function(){(kn=new BroadcastChannel(mt)).onmessage=function(e){return e.data&&$a(e.data)}})(),typeof kn.unref=="function"&&kn.unref(),ve(he,function(e){fn||kn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!De.disableBfCache&&e.persisted){vt&&console.debug("Dexie: handling persisted pagehide"),kn?.close();for(var t=0,n=Pn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!De.disableBfCache&&e.persisted&&(vt&&console.debug("Dexie: handling persisted pageshow"),lt(),$a({all:new ot(-1/0,[[]])}))})),D.rejectionMapper=function(e,t){return!e||e instanceof Pt||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Ha[e.name]?e:(t=new Ha[e.name](t||e.message,e),"stack"in e&&ht(t,"stack",{get:function(){return this.inner.stack}}),t)},Ve(vt),J(De,Object.freeze({__proto__:null,Dexie:De,Entity:nr,PropModification:Rn,RangeSet:ot,add:function(e){return new Rn({add:e})},cmp:fe,default:De,liveQuery:ka,mergeRanges:wt,rangesOverlap:Ka,remove:function(e){return new Rn({remove:e})},replacePrefix:function(e,t){return new Rn({replacePrefix:[e,t]})}}),{default:De}),De})})(hr)),hr.exports}var Es=Bs();const Mr=$s(Es),rs=Symbol.for("Dexie"),pr=globalThis[rs]||(globalThis[rs]=Mr);if(Mr.semVer!==pr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Mr.semVer} and ${pr.semVer}`);const{liveQuery:Ks,mergeRanges:Ls,rangesOverlap:js,RangeSet:Rs,cmp:Vs,Entity:Ys,PropModification:zs,replacePrefix:Us,add:Ws,remove:Gs,DexieYProvider:Js}=pr,dt=new pr("haushaltsbuch-db");dt.version(1).stores({years:"year",fixedTemplateState:"id"});dt.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const Ea="singleton";function vr(){return new Date().toISOString()}async function Xn(){return dt.years.orderBy("year").toArray()}async function _s(P){return dt.years.get(P)}async function Hn(P){await dt.years.put(P)}async function Pr(){const P=await dt.fixedTemplateState.get(Ea);if(!P){const h={id:Ea,templates:[],version:vr(),updatedAt:new Date().toISOString()};return await dt.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Tr(P){const h=vr();return await dt.fixedTemplateState.put({id:Ea,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Or(){const P=await dt.annualVariableFixedTemplateState.get(Ea);if(!P){const h={id:Ea,templates:[],version:vr(),updatedAt:new Date().toISOString()};return await dt.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Ar(P){const h=vr();return await dt.annualVariableFixedTemplateState.put({id:Ea,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Ms(){const P=await Xn(),[h,Ie]=await Promise.all([Pr(),Or()]);return{exportedAt:new Date().toISOString(),years:P,fixedTemplates:h.templates,annualVariableFixedTemplates:Ie.templates}}async function Ps(P){await dt.transaction("rw",[dt.years,dt.fixedTemplateState,dt.annualVariableFixedTemplateState],async()=>{await dt.years.clear(),await dt.years.bulkPut(P.years),await Tr(P.fixedTemplates),await Ar(P.annualVariableFixedTemplates??[])})}function qe(P){const h=P.replace(",",".").trim();if(!h)return 0;const Ie=Number.parseFloat(h);return Number.isNaN(Ie)?0:Math.round(Ie*100)}const Ts=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function w(P){return Ts.format(P/100)}function yt(P){return(P/100).toFixed(2)}function Be(P){return new Date(2026,P-1,1).toLocaleDateString("de-DE",{month:"long"})}const ls=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function ss(P){return ls.includes(P)}function Os(P){switch(P){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const is=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function As(P){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ie="habu-theme",J="habu-backup-dirty",ge="habu-unexported-change-log",re="habu-last-backup-filename",xe="habu-recurring-budget-defaults";let se=null,be=null,ut=null,We=null,ie=!1,Ct=!1;const ft=new WeakMap;function ht(){const o=P.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const u=getComputedStyle(document.documentElement),f=u.getPropertyValue("--text-main").trim(),d=u.getPropertyValue("--text-muted").trim(),p=u.getPropertyValue("--table-stripe").trim(),_=u.getPropertyValue("--table-border").trim(),A=u.getPropertyValue("--budget-under").trim(),q=u.getPropertyValue("--danger-2").trim(),I=96,G=250,z=H=>1-Math.pow(1-Math.max(0,Math.min(1,H)),3);o.forEach(H=>{H.dataset.hoverBound!=="1"&&(H.dataset.hoverBound="1",H.addEventListener("mouseenter",()=>{H.dataset.hovering="1",ht()}),H.addEventListener("mouseleave",()=>{delete H.dataset.hovering,delete H.dataset.hoverX,ht()}),H.addEventListener("mousemove",Ae=>{const _e=H.getBoundingClientRect(),Fe=Math.round(Ae.clientX-_e.left);H.dataset.hoverX=String(Fe),ht()}));const ne=Number.parseInt(H.dataset.budgetCents??"0",10),me=Number.parseInt(H.dataset.actualCents??"0",10),Q=H.dataset.label??"Kategorie",Ke=H.dataset.hovering==="1",ce=`${Q}|${ne}|${me}`,He=H.dataset.lastRenderSignature!==ce;H.dataset.lastRenderSignature=ce;const de=Math.max(120,Math.floor(H.clientWidth||120)),Ee=window.devicePixelRatio||1,Xe=Math.floor(de*Ee),ze=Math.floor(I*Ee);(H.width!==Xe||H.height!==ze)&&(H.width=Xe,H.height=ze);const R=H.getContext("2d");if(!R)return;const et=Math.max(1,ne,me),we=Math.min(1,Math.max(0,ne/et)),Te=Math.min(1,Math.max(0,me/et)),it=ne-me,he=ne>0?me/ne*100:me>0?100:0,mt=8,ve=mt,Le=34,Oe=de-mt*2,tt=22,Ne=Number.parseInt(H.dataset.hoverX??"-1",10),nt=(Ae,_e,Fe,je,at)=>{R.beginPath(),R.moveTo(Ae+at,_e),R.lineTo(Ae+Fe-at,_e),R.quadraticCurveTo(Ae+Fe,_e,Ae+Fe,_e+at),R.lineTo(Ae+Fe,_e+je-at),R.quadraticCurveTo(Ae+Fe,_e+je,Ae+Fe-at,_e+je),R.lineTo(Ae+at,_e+je),R.quadraticCurveTo(Ae,_e+je,Ae,_e+je-at),R.lineTo(Ae,_e+at),R.quadraticCurveTo(Ae,_e,Ae+at,_e),R.closePath()},Bt=Ae=>{R.setTransform(1,0,0,1,0,0),R.clearRect(0,0,H.width,H.height),R.scale(Ee,Ee),nt(ve,Le,Oe,tt,8),R.fillStyle=p,R.fill(),R.strokeStyle=_,R.lineWidth=1,R.stroke();const _e=[.6,.25,.15],Fe=[.1,.16,.24];let je=0;_e.forEach((Lt,M)=>{const K=Oe*Lt;R.save(),R.globalAlpha=Fe[M]??.1,R.fillStyle=d,R.fillRect(ve+je,Le,K,tt),R.restore(),je+=K});const at=ne>0&&me>ne?q:A,Kt=Oe*Te*Ae;nt(ve,Le+3,Kt,tt-6,6),R.fillStyle=at,R.fill(),Ke&&(R.save(),R.strokeStyle=at,R.lineWidth=1.5,R.globalAlpha=.8,nt(ve-1,Le+2,Math.max(2,Kt+2),tt-4,7),R.stroke(),R.restore());const on=ve+Oe*we;R.strokeStyle=f,R.lineWidth=Ke?3:2,R.beginPath(),R.moveTo(on,Le-3),R.lineTo(on,Le+tt+3),R.stroke(),Ke&&Ne>=ve&&Ne<=ve+Oe&&(R.save(),R.strokeStyle=f,R.globalAlpha=.35,R.lineWidth=1,R.beginPath(),R.moveTo(Ne,Le-8),R.lineTo(Ne,Le+tt+8),R.stroke(),R.restore()),R.fillStyle=f,R.font="600 12px system-ui, -apple-system, sans-serif",R.textAlign="left",R.textBaseline="top",R.fillText(Q,ve,10);const ln=he*Ae;if(R.fillStyle=he>100?q:he<100?A:d,R.textAlign="right",R.fillText(`${ln.toFixed(0)}%`,ve+Oe,10),R.fillStyle=d,R.font="500 11px system-ui, -apple-system, sans-serif",R.textAlign="left",R.textBaseline="top",R.fillText(`Ist ${w(me)} · Ziel ${w(ne)} · Δ ${it>=0?"+":""}${w(it)}`,ve,64),Ke){const Lt=`Nutzung ${he.toFixed(1)}%`;R.font="600 11px system-ui, -apple-system, sans-serif";const M=8,K=5,ue=22,Gt=R.measureText(Lt).width+M*2,va=Number.isFinite(Ne)?Ne-Gt/2:ve+Oe-Gt,Me=Math.min(ve+Oe-Gt,Math.max(ve,va)),Jt=Le-ue-8;R.save(),R.fillStyle=f,R.globalAlpha=.92,nt(Me,Jt,Gt,ue,6),R.fill(),R.restore(),R.fillStyle=p,R.textAlign="left",R.textBaseline="top",R.fillText(Lt,Me+M,Jt+K)}},qt=ft.get(H);if(qt&&window.cancelAnimationFrame(qt),!He){Bt(1);return}const Et=performance.now(),Ot=Ae=>{const _e=Ae-Et,Fe=Math.min(1,_e/G);if(Bt(z(Fe)),Fe<1){const je=window.requestAnimationFrame(Ot);ft.set(H,je);return}ft.delete(H)},gt=window.requestAnimationFrame(Ot);ft.set(H,gt)})}function Xt(){P.querySelectorAll("[data-year-trend-chart]").forEach(u=>{const f=Array.from(u.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=u.querySelector("[data-year-trend-active-month]"),p=u.querySelector("[data-year-trend-active-net]"),_=u.querySelector("[data-year-trend-active-income]"),A=u.querySelector("[data-year-trend-active-expense]"),q=u.querySelector("[data-year-trend-active-delta]"),I=u.querySelector("[data-year-trend-live]");if(!d||!p||!_||!A||!q)return;const G=(ne,me)=>{ne.classList.remove("danger","budget-under");const Q=me<0?"danger":me>0?"budget-under":"";Q&&ne.classList.add(Q)},z=ne=>{const me=ne.dataset.monthLabel??"-",Q=Number.parseInt(ne.dataset.netCents??"0",10),Ke=Number.parseInt(ne.dataset.actualNetCents??"0",10),ce=Number.parseInt(ne.dataset.incomeCents??"0",10),He=Number.parseInt(ne.dataset.expenseCents??"0",10),de=Number.parseInt(ne.dataset.deltaCents??"0",10);d.textContent=me,p.textContent=w(Q),_.textContent=w(ce),A.textContent=w(He),q.textContent=`${de>=0?"+":""}${w(de)}`,G(p,Q),G(q,de),f.forEach(Ee=>{const Xe=Ee===ne;Ee.classList.toggle("is-active",Xe),Ee.setAttribute("aria-pressed",String(Xe))}),I&&(I.textContent=`${me}: Kalkulierter Saldo ${w(Q)}, Ist-Saldo ${w(Ke)}, Einkommen ${w(ce)}, Ausgaben ${w(He)}`)};f.forEach(ne=>{const me=()=>{z(ne)};ne.addEventListener("mouseenter",me),ne.addEventListener("focus",me),ne.addEventListener("click",me)});const H=f.find(ne=>ne.dataset.pointDefault==="1")??f[f.length-1];H&&z(H)})}function Qn(o){if(o==="dashboard"){const u=h.years.slice().sort((d,p)=>p.year-d.year);u.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??u[0]?.year??null)}h.topModal=o,ae()}function _a(){h.topModal&&(h.topModal=null,ae())}function Zn(){h.showUnexportedChangeLogModal=!0,ae()}function ea(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ae())}function On(){ie||(ie=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),ea();return}h.topModal&&(o.preventDefault(),_a())}}))}function Wa(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const u=o/6;return window.scrollY>u}function Dt(){const o=P.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",Wa())}function pt(){if(Ct)return;Ct=!0;const o=()=>{Dt(),ht()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Ma(){if(se&&document.body.contains(se))return se;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return se=o,o;const u=document.createElement("div");return u.id="toast-root",u.className="toast-root",u.setAttribute("aria-live","polite"),u.setAttribute("aria-atomic","true"),document.body.appendChild(u),se=u,u}function mr(){if(be&&document.body.contains(be))return be;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return be=o,o;const u=document.createElement("div");return u.id="amount-modal-root",document.body.appendChild(u),be=u,u}function Ga(){if(We&&document.body.contains(We))return We;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return We=o,o;const u=document.createElement("div");return u.id="weekly-shopping-modal-root",document.body.appendChild(u),We=u,u}function Yt(){if(!be){ut=null;return}be.innerHTML="",ut=null}function zt(){We&&(We.innerHTML="")}function hn(o,u,f){const d=new Date,p=d.getFullYear(),_=d.getMonth()+1,A=d.getDate(),q=new Date(o,u,0).getDate();if(o<p||o===p&&u<_)return{occurrences:0,remainingDays:0};const I=o===p&&u===_?Math.min(A,q):1,G=Math.max(0,q-I+1);let z=0;for(let H=I;H<=q;H+=1)new Date(o,u-1,H).getDay()===f&&(z+=1);return{occurrences:z,remainingDays:G}}async function gr(o,u){const f=Ve();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,u),await D(`Wocheneinkauf geplant: ${is.find(d=>d.value===o)?.label??"Wochentag"} mit ${w(f.weeklyShoppingEstimateCents)} €`),ae())}function Pa(){const o=Ve(),u=vt();if(!o||!u)return;const f=Ga();zt();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,p=o.weeklyShoppingEstimateCents??0,_=u.year,A=o.month,q=Dn(_,A),I=q?_n(q):{foodCents:0},G=q?q.foodBudgetCents??0:0,z=I.foodCents,H=G-z;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${is.map(he=>`<option value="${he.value}" ${he.value===d?"selected":""}>${he.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${yt(p)}" />
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
    `;const ne=f.querySelector(".weekly-shopping-modal-backdrop"),me=f.querySelector("#weekly-shopping-weekday"),Q=f.querySelector("#weekly-shopping-estimate"),Ke=f.querySelector("#weekly-shopping-occurrences"),ce=f.querySelector("#weekly-shopping-total"),He=f.querySelector("#weekly-shopping-rest-before"),de=f.querySelector("#weekly-shopping-rest-after"),Ee=f.querySelector("#weekly-shopping-days-left"),Xe=f.querySelector("#weekly-shopping-per-day"),ze=f.querySelector("#weekly-shopping-cancel"),R=f.querySelector("#weekly-shopping-save");function et(){const he=Number.parseInt(me?.value??"1",10);return Number.isInteger(he)&&he>=0&&he<=6?he:1}function we(){return Math.max(0,qe(Q?.value??"0"))}function Te(){const he=et(),mt=we(),{occurrences:ve,remainingDays:Le}=hn(_,A,he),Oe=ve*mt,tt=H-Oe,Ne=Le>0?Math.trunc(tt/Le):0;Ke&&(Ke.textContent=`${ve}`),ce&&(ce.textContent=`${w(Oe)} €`),He&&(He.textContent=`${w(H)} €`),de&&(de.textContent=`${w(tt)} €`,de.className=tt<0?"danger":tt>0?"budget-under":""),Ee&&(Ee.textContent=`${Le}`),Xe&&(Xe.textContent=`${w(Ne)} €`,Xe.className=Ne<0?"danger":Ne>0?"budget-under":"")}async function it(){await gr(et(),we()),zt()}ze?.addEventListener("click",()=>{zt()}),R?.addEventListener("click",async()=>{await it()}),me?.addEventListener("change",()=>{Te()}),Q?.addEventListener("input",()=>{Te()}),Q?.addEventListener("keydown",async he=>{if(he.key==="Escape"){he.preventDefault(),zt();return}he.key==="Enter"&&(he.preventDefault(),await it())}),ne?.addEventListener("click",he=>{he.target===ne&&zt()}),window.setTimeout(()=>{Q?.focus(),Q?.select(),Te()},0)}function ta(o,u){let f=o;const d=u.min;if(d){const _=Number.parseFloat(d);if(!Number.isNaN(_)){const A=Math.round(_*100);f=Math.max(f,A)}}const p=u.max;if(p){const _=Number.parseFloat(p);if(!Number.isNaN(_)){const A=Math.round(_*100);f=Math.min(f,A)}}return f}function $t(o){if(o.disabled)return;const u=mr();Yt(),ut=o;const f=qe(o.value||"0"),d="Betrag anpassen";u.innerHTML=`
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
    `;const p=u.querySelector(".amount-modal-backdrop"),_=u.querySelector("#amount-modal-delta"),A=u.querySelector("#amount-modal-next-delta"),q=u.querySelector("#amount-modal-next-overwrite"),I=u.querySelector("#amount-modal-cancel"),G=u.querySelector("#amount-modal-overwrite"),z=u.querySelector("#amount-modal-apply");function H(){const ce=qe(_?.value??"0");return ta(f+ce,o)}function ne(){const ce=qe(_?.value??"0");return ta(ce,o)}function me(){A&&(A.textContent=`${w(H())} €`),q&&(q.textContent=`${w(ne())} €`)}function Q(){const ce=ut;if(!ce){Yt();return}const He=H();Yt(),ce.value=yt(He),ce.dispatchEvent(new Event("change",{bubbles:!0}))}function Ke(){const ce=ut;if(!ce){Yt();return}const He=ne();Yt(),ce.value=yt(He),ce.dispatchEvent(new Event("change",{bubbles:!0}))}I?.addEventListener("click",()=>{Yt()}),G?.addEventListener("click",()=>{Ke()}),z?.addEventListener("click",()=>{Q()}),_?.addEventListener("input",()=>{me()}),_?.addEventListener("keydown",ce=>{if(ce.key==="Escape"){ce.preventDefault(),Yt();return}ce.key==="Enter"&&(ce.preventDefault(),Q())}),p?.addEventListener("click",ce=>{ce.target===p&&Yt()}),window.setTimeout(()=>{_?.focus(),_?.select(),me()},0)}function Ce(o,u="success"){const f=Ma(),d=document.createElement("div");d.className=`toast toast-${u}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const p=u==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},p)}function Ut(){return new Date().getMonth()+1}function Wt(){return new Date().getFullYear()}function na(o){const u=Wt(),f=o.find(d=>d.year===u);return f?f.year:o[0]?.year??null}function It(){return new Date().toISOString().slice(0,10)}function br(){const o=new Date,u=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${u}${f}${d}`}function Pt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Ja(){const o=localStorage.getItem(Ie);return o&&ss(o)?o:"light"}function An(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Ie,o)}function En(){return localStorage.getItem(J)==="1"}function aa(o){localStorage.setItem(J,o?"1":"0")}function yr(){const o=localStorage.getItem(ge);if(!o)return[];try{const u=JSON.parse(o);return Array.isArray(u)?u.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function ee(o){localStorage.setItem(ge,JSON.stringify(o.slice(-200)))}function Ha(){const o=localStorage.getItem(re);if(!o)return null;const u=o.trim();return u||null}function $e(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},u=localStorage.getItem(xe);if(!u)return o;try{const f=JSON.parse(u),d=p=>typeof p=="number"&&Number.isFinite(p)?p:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function Fn(o){localStorage.setItem(xe,JSON.stringify(o))}function Xa(o){o.months.forEach(u=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(u.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(u.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(u.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(u.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(u.miscBudgetCents=f.miscBudgetCents)})}function pn(o){const u=o.trim();u&&localStorage.setItem(re,u)}async function Cr(){Ma(),An(Ja()),h.hasUnexportedChanges=En(),h.unexportedChangeLog=yr(),h.lastBackupFileName=Ha(),h.recurringBudgetDefaults=$e(),On(),pt();const[o,u,f]=await Promise.all([Xn(),Pr(),Or()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Ta(h.years),Qa(h.years),h.fixedTemplates=u.templates,h.fixedTemplateVersion=u.version,await sa(h.years),o.length>0&&(h.selectedYear=na(o),h.selectedMonth=Ut()),ae()}function Ta(o){const u=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const p=Number(d.weeklyShoppingWeekday);Number.isInteger(p)&&p>=0&&p<=6?d.weeklyShoppingWeekday=p:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(p=>{const _=u(p.incomeSource);if(!_){const{incomeSource:A,...q}=p;return q}return{...p,incomeSource:_}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((p,_)=>p+_.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((p,_)=>p+_.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Oa(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function ra(o){return o==="fresh"||o==="salary"||!o}async function sa(o){for(const u of o)await Hn(u)}function vt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ve(){const o=vt();if(o)return o.months.find(u=>u.month===h.selectedMonth)}function Dn(o,u){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===u)}function _n(o){const u=o.days.reduce((q,I)=>q+I.foodCents,0),f=o.days.reduce((q,I)=>q+I.goingOutCents,0),d=o.fixedCosts.reduce((q,I)=>q+I.actualCents,0),p=o.variableCosts.reduce((q,I)=>q+I.amountCents,0)+o.variablePositions.reduce((q,I)=>q+I.actualCents,0),_=o.miscCosts.reduce((q,I)=>q+I.amountCents,0),A=u+f+d+p+_;return{foodCents:u,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:_,totalCents:A}}function Qt(o){const u=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((A,q)=>A+q.plannedCents,0),p=o.variablePositions.reduce((A,q)=>A+q.budgetCents,0),_=o.miscBudgetCents??0;return u+f+d+(o.variableBudgetCents??p)+_}function st(o){return o.months.reduce((u,f)=>{const d=_n(f);return{foodCents:u.foodCents+d.foodCents,goingOutCents:u.goingOutCents+d.goingOutCents,fixedCents:u.fixedCents+d.fixedCents,variableCents:u.variableCents+d.variableCents,miscCents:u.miscCents+d.miscCents,totalCents:u.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function vn(o){return o.months.slice().sort((u,f)=>u.month-f.month).map(u=>({month:u.month,summary:_n(u)}))}function In(o){const u=o.months.reduce((A,q)=>A+(q.foodBudgetCents??0),0),f=o.months.reduce((A,q)=>A+(q.goingOutBudgetCents??0),0),d=o.months.reduce((A,q)=>A+(q.fixedBudgetCents??q.fixedCosts.reduce((I,G)=>I+G.plannedCents,0)),0),p=o.months.reduce((A,q)=>A+(q.variableBudgetCents??q.variablePositions.reduce((I,G)=>I+G.budgetCents,0)),0),_=o.months.reduce((A,q)=>A+(q.miscBudgetCents??0),0);return{foodCents:u,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:_,totalCents:u+f+d+p+_}}function mn(o){return o.months.reduce((u,f)=>u+f.incomes.reduce((d,p)=>d+(ra(p.incomeSource)?p.amountCents:0),0),0)}function Nn(o,u){const f=o.months.slice().sort((d,p)=>d.month-p.month)[0];return f?u.get(pe(o.year,f.month))?.carriedFromPreviousCents??0:0}function ia(){const o=h.years.slice().sort((d,p)=>d.year-p.year).flatMap(d=>d.months.slice().sort((p,_)=>p.month-_.month).map(p=>({year:d.year,month:p}))),u=new Map;let f=0;return o.forEach(({year:d,month:p},_)=>{const A=p.carryoverOverrideCents,q=typeof A=="number",I=q?A:f,G=_>0||q,z=p.incomes.reduce((Q,Ke)=>Q+(ra(Ke.incomeSource)?Ke.amountCents:0),0),H=Qt(p),ne=z+I,me=ne-H;u.set(pe(d,p.month),{hasPreviousMonth:G,carriedFromPreviousCents:I,recordedIncomeCents:z,effectiveIncomeCents:ne,plannedBudgetCents:H,netCents:me}),f=me}),u}function Qe(o,u){return u<=0?"":o>u?"budget-over":o<u?"budget-under":""}function oa(o){return`${o>0?"+":""}${w(o)}`}function Zt(o,u){const f=o-u,d=Qe(u,o);return`${w(o)} <span class="eval-diff ${d}">(Δ ${oa(f)})</span>`}function St(o,u){const f=o!==null,d=f?o-u:null,p=f?Qe(u,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${w(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${w(u)} €</strong>
      </div>
      <div class="column-overview-row ${p}">
        <span>Diff</span>
        <strong>${d===null?"-":`${w(d)} €`}</strong>
      </div>
    </div>`}async function X(o){if(await _s(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=es(o,h.fixedTemplates,h.fixedTemplateVersion);Xa(f),Ln(f),await Hn(f),h.years=await Xn(),en(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=Ut(),Ce(`Jahr ${o} wurde angelegt.`),ae()}function en(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,aa(!0);const u=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f={id:Ft("change"),timestampIso:new Date().toISOString(),message:`${o} (${u})`};h.unexportedChangeLog=[...h.unexportedChangeLog,f].slice(-200),ee(h.unexportedChangeLog)}function gn(o){const u=o.trim();u&&(h.lastBackupFileName=u,pn(u))}function qn(o){h.hasUnexportedChanges=!1,aa(!1),h.unexportedChangeLog=[],ee([]),h.showUnexportedChangeLogModal=!1,gn(o)}async function D(o){const u=vt();u&&(await Hn(u),h.years=await Xn(),en(o))}async function xt(o){for(const u of h.years)await Hn(u);h.years=await Xn(),en(o)}function pe(o,u){return o*100+u}function Kn(o){const u=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!u)return null;const f=u[1],d=u[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Aa(o,u){const f=Kn(o.dueDateIso);if(!f||u.year<f.year)return;const d=u.months.find(_=>_.month===f.month);!d||d.variablePositions.some(_=>_.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Ft("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],ct(d))}function Ln(o){h.annualVariableFixedTemplates.forEach(u=>{Aa(u,o)})}function Qa(o){const u=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const p=d.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),_=d.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");p&&(d.variablePositions=d.variablePositions.filter(A=>A.autoAnnualTemplateId?u.has(A.autoAnnualTemplateId):!0),ct(d)),_&&(d.fixedCosts=d.fixedCosts.filter(A=>!A.autoAnnualTemplateId),tn(d))}),Ln(f)})}function tn(o){o.fixedBudgetCents=o.fixedCosts.reduce((u,f)=>u+f.plannedCents,0)}function ct(o){o.variableBudgetCents=o.variablePositions.reduce((u,f)=>u+f.budgetCents,0)}function Mn(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function la(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Mn());if(!o)return null;const u=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!u)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=u[1],d=u[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function ua(o,u){const f=pe(u.year,u.month);h.years.forEach(d=>{d.months.forEach(p=>{if(pe(d.year,p.month)<f)return;p.fixedCosts.some(A=>A.templateId===o.id)||(p.fixedCosts.push({id:Ft("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),tn(p))})})}function Pe(o,u,f){const d=pe(f.year,f.month);h.years.forEach(p=>{p.months.forEach(_=>{pe(p.year,_.month)<d||(_.fixedCosts=_.fixedCosts.map(A=>A.templateId!==u.id?A:{...A,name:u.name,plannedCents:u.plannedCents,actualCents:A.actualCents===o.plannedCents?u.plannedCents:A.actualCents}),tn(_))})})}function Ze(o,u){const f=pe(u.year,u.month);h.years.forEach(d=>{d.months.forEach(p=>{pe(d.year,p.month)<f||(p.fixedCosts=p.fixedCosts.filter(_=>_.templateId!==o),tn(p))})})}async function xr(o,u){const f=o.trim();if(!f)return;const d=la();if(!d)return;const p=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const _=h.fixedTemplates.find(q=>q.id===h.editingFixedTemplateId);if(!_)return;const A={..._,name:f,plannedCents:u};h.fixedTemplates=h.fixedTemplates.map(q=>q.id===h.editingFixedTemplateId?A:q),Pe(_,A,d)}else{const _={id:Ft("tpl"),name:f,plannedCents:u};h.fixedTemplates=[...h.fixedTemplates,_],ua(_,d)}h.fixedTemplateVersion=await Tr(h.fixedTemplates),h.editingFixedTemplateId=null,await xt(p?`Fixkosten-Vorlage aktualisiert: ${f} (${w(u)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${w(u)} €)`),Ce(p?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function ca(o){h.editingFixedTemplateId=o,ae()}function da(){h.editingFixedTemplateId=null,ae()}async function fa(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=la();if(!f)return;const d=h.fixedTemplates.find(p=>p.id===o);h.fixedTemplates=h.fixedTemplates.filter(p=>p.id!==o),Ze(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Tr(h.fixedTemplates),await xt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),Ce("Fixkosten-Vorlage wurde gelöscht."),ae()}async function wr(o,u,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const p=Kn(u);if(!p){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const _={id:Ft("annualtpl"),name:d,plannedCents:f,dueDateIso:u};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,_],h.years.forEach(A=>{Aa(_,A)}),h.annualVariableFixedTemplateVersion=await Ar(h.annualVariableFixedTemplates),await xt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${w(f)} €, jährlich in ${Be(p.month)})`),Ce("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function nn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(p=>{p.variablePositions=p.variablePositions.filter(_=>_.autoAnnualTemplateId!==o),ct(p),p.fixedCosts=p.fixedCosts.filter(_=>_.autoAnnualTemplateId!==o),tn(p)})}),h.annualVariableFixedTemplateVersion=await Ar(h.annualVariableFixedTemplates),await xt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),Ce("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function bn(o,u,f){const d=Ve();d&&(d.days=d.days.map(p=>p.isoDate===o?{...p,[u]:f}:p),await D(`${u==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${w(f)} €`),ae())}async function an(o,u){const f=Ve();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,actualCents:u}:p),await D(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${w(u)} €`),ae()}async function ha(o,u){const f=Ve();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,plannedCents:u}:p),tn(f),await D(`Fixkosten-Budget angepasst: ${d.name} auf ${w(u)} €`),ae())}async function kr(o,u){const f=Ve();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const p={id:Ft("fixed"),templateId:Ft("fixed-local"),name:d,plannedCents:u,actualCents:0};f.fixedCosts=[p,...f.fixedCosts],tn(f),await D(`Fixkosten-Position hinzugefügt: ${d} (${w(u)} €)`),Ce("Fixkosten-Position wurde hinzugefügt."),ae()}async function rn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Ve();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(p=>p.id!==o),tn(f),await D(`Fixkosten-Position gelöscht: ${d.name}`),Ce("Fixkosten-Position wurde gelöscht."),ae())}async function Za(o){await Tt("fixedBudgetCents",o,"Fixkosten")}async function yn(o){await Tt("foodBudgetCents",o,"Essen")}async function er(o){await Tt("goingOutBudgetCents",o,"Ausgehen")}async function Fa(o){await Tt("miscBudgetCents",o,"Sonstiges")}async function Ye(o){await Tt("variableBudgetCents",o,"Variable Kosten")}async function Tt(o,u,f){const d=Ve(),p=h.selectedYear;if(!d||!p||d[o]===u)return;if(d[o]=u,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const A=pe(p,h.selectedMonth);h.years.forEach(q=>{q.months.forEach(I=>{pe(q.year,I.month)<=A||(I[o]=u)})}),h.recurringBudgetDefaults[o]=u,Fn(h.recurringBudgetDefaults),await xt(`Budget "${f}" auf ${w(u)} € gesetzt (inkl. zukünftiger Monate)`),Ce(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ae();return}await D(`Budget "${f}" auf ${w(u)} € gesetzt`),ae()}async function Nt(o){const u=Ve();u&&(o===null?u.carryoverOverrideCents=null:u.carryoverOverrideCents=o,await D(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${w(o)} € gesetzt`),ae())}async function Da(o,u,f){const d=Ve(),p=h.selectedYear;if(!d||!p)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Ft("varpos"),name:_,budgetCents:u,actualCents:0},...d.variablePositions],ct(d),f){const A=pe(p,h.selectedMonth);h.years.forEach(q=>{q.months.forEach(I=>{pe(q.year,I.month)<=A||(I.variablePositions=[{id:Ft("varpos"),name:_,budgetCents:u,actualCents:0},...I.variablePositions],ct(I))})}),await xt(`Variable Position hinzugefügt: ${_} (${w(u)} €) für zukünftige Monate`),Ce("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await D(`Variable Position hinzugefügt: ${_} (${w(u)} €)`),Ce("Variable Position wurde hinzugefügt."),ae()}async function Pn(o,u){const f=Ve();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,actualCents:u}:p),await D(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(u)} €`),ae()}async function pa(o,u){const f=Ve();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,budgetCents:u}:p),ct(f),await D(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${w(u)} €`),ae()}async function Ia(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Ve(),d=h.selectedYear;if(!f||!d)return;const p=f.variablePositions.find(I=>I.id===o);if(!p)return;const _=pe(d,h.selectedMonth),q=h.years.some(I=>I.months.some(G=>pe(I.year,G.month)>_&&G.variablePositions.some(z=>z.name===p.name&&z.budgetCents===p.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(I=>I.id!==o),ct(f),q){h.years.forEach(I=>{I.months.forEach(G=>{pe(I.year,G.month)<=_||(G.variablePositions=G.variablePositions.filter(z=>!(z.name===p.name&&z.budgetCents===p.budgetCents)),ct(G))})}),await xt(`Variable Position gelöscht: ${p.name} (inkl. zukünftiger Monate)`),Ce("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await D(`Variable Position gelöscht: ${p.name}`),Ce("Variable Position wurde gelöscht."),ae()}async function Na(o){const u=Ve(),f=h.selectedYear;if(!u||!f)return;const d=u.variablePositions.find(z=>z.id===o);if(!d)return;const p={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let _=h.years.find(z=>z.year===p.year);if(!_){const z=es(p.year,h.fixedTemplates,h.fixedTemplateVersion);Xa(z),Ln(z),await Hn(z),h.years=[...h.years,z].sort((H,ne)=>H.year-ne.year),_=z}const A=_.months.find(z=>z.month===p.month);if(!A)return;const q=A.variablePositions.some(z=>z.id===d.id||z.name===d.name&&z.budgetCents===d.budgetCents);if(u.variablePositions=u.variablePositions.filter(z=>z.id!==o),ct(u),!q){const H=A.variablePositions.some(ne=>ne.id===d.id)?{...d,id:Ft("varpos")}:d;A.variablePositions=[H,...A.variablePositions],ct(A)}const I=`${Be(p.month)} ${p.year}`,G=`Variable Position verschoben: ${d.name} → ${I}`;if(p.year===f)await D(G);else{const z=vt();if(!z)return;await Hn(z),await Hn(_),h.years=await Xn(),Ta(h.years),en(G)}Ce(q?`Position entfernt (im Folgemonat schon vorhanden: ${I}).`:`Position in den Folgemonat verschoben: ${I}.`),ae()}async function sn(o,u,f){const d=Ve(),p=h.selectedYear;if(!d||!p)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=ts(_,u);if(d.miscCosts=[A,...d.miscCosts],f){const q=pe(p,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(G=>{pe(I.year,G.month)<=q||(G.miscCosts=[ts(_,u),...G.miscCosts])})}),await xt(`Sonstige Position hinzugefügt: ${_} (${w(u)} €) für zukünftige Monate`),Ce("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await D(`Sonstige Position hinzugefügt: ${_} (${w(u)} €)`),Ce("Sonstige Position wurde hinzugefügt."),ae()}async function tr(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Ve(),d=h.selectedYear;if(!f||!d)return;const p=f.miscCosts.find(I=>I.id===o);if(!p)return;const _=pe(d,h.selectedMonth),q=h.years.some(I=>I.months.some(G=>pe(I.year,G.month)>_&&G.miscCosts.some(z=>z.description===p.description&&z.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(I=>I.id!==o),q){h.years.forEach(I=>{I.months.forEach(G=>{pe(I.year,G.month)<=_||(G.miscCosts=G.miscCosts.filter(z=>!(z.description===p.description&&z.amountCents===p.amountCents)))})}),await xt(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),Ce("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await D(`Sonstige Position gelöscht: ${p.description} (${w(p.amountCents)} €)`),Ce("Sonstige Position wurde gelöscht."),ae()}async function jn(o,u,f,d){const p=Ve(),_=h.selectedYear;if(!p||!_)return;const A=o.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(u<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const q=ns(A,u,f);if(p.incomes=[q,...p.incomes],d){const I=pe(_,h.selectedMonth);h.years.forEach(G=>{G.months.forEach(z=>{pe(G.year,z.month)<=I||(z.incomes=[ns(A,u,f),...z.incomes])})}),await xt(`Einkommen hinzugefügt: ${A} (${w(u)} €, ${Oa(f)}) für zukünftige Monate`),Ce("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await D(`Einkommen hinzugefügt: ${A} (${w(u)} €, ${Oa(f)})`),Ce("Einkommen wurde hinzugefügt."),ae()}async function nr(o,u){const f=Ve();if(!f)return;const d=f.incomes.find(p=>p.id===o);d&&(f.incomes=f.incomes.map(p=>{if(p.id!==o)return p;if(!u){const{incomeSource:_,...A}=p;return A}return{...p,incomeSource:u}}),await D(`Einkommensart angepasst: ${d.description} → ${Oa(u)}`),ae())}async function fe(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Ve(),d=h.selectedYear;if(!f||!d)return;const p=f.incomes.find(I=>I.id===o);if(!p)return;const _=pe(d,h.selectedMonth),q=h.years.some(I=>I.months.some(G=>pe(I.year,G.month)>_&&G.incomes.some(z=>z.description===p.description&&z.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(I=>I.id!==o),q){h.years.forEach(I=>{I.months.forEach(G=>{pe(I.year,G.month)<=_||(G.incomes=G.incomes.filter(z=>!(z.description===p.description&&z.amountCents===p.amountCents)))})}),await xt(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €) inkl. zukünftiger Monate`),Ce("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await D(`Einkommen gelöscht: ${p.description} (${w(p.amountCents)} €)`),Ce("Einkommen wurde gelöscht."),ae()}async function ar(){const o=await Ms(),u=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(u),d=`haushaltsbuch-backup-${It()}-${br()}.json`,p=document.createElement("a");p.href=f,p.download=d,p.click(),URL.revokeObjectURL(f),qn(d),ae(),Ce("Backup wurde exportiert.")}async function rr(o){const u=await o.text(),f=JSON.parse(u);await Ps(f);const[d,p,_]=await Promise.all([Xn(),Pr(),Or()]);h.years=d,h.annualVariableFixedTemplates=_.templates,h.annualVariableFixedTemplateVersion=_.version,Ta(h.years),Qa(h.years),h.fixedTemplates=p.templates,h.fixedTemplateVersion=p.version,await sa(h.years),h.selectedYear=na(d),h.selectedMonth=Ut(),qn(o.name),Ce("Backup wurde importiert."),ae()}function ae(){const o=vt(),u=Ve(),f=It(),d=u?_n(u):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},p=o?st(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},_=o?vn(o):[],A=u?u.foodBudgetCents??0:0,q=u?u.goingOutBudgetCents??0:0,I=u?u.fixedBudgetCents??u.fixedCosts.reduce((r,B)=>r+B.plannedCents,0):0,G=u?u.variableBudgetCents??u.variablePositions.reduce((r,B)=>r+B.budgetCents,0):0,z=u?u.miscBudgetCents??0:0,H=o?o.months.reduce((r,B)=>r+(B.foodBudgetCents??0),0):0,ne=o?o.months.reduce((r,B)=>r+(B.goingOutBudgetCents??0),0):0,me=o?o.months.reduce((r,B)=>r+(B.fixedBudgetCents??B.fixedCosts.reduce((V,Z)=>V+Z.plannedCents,0)),0):0,Q=o?o.months.reduce((r,B)=>r+(B.variableBudgetCents??B.variablePositions.reduce((V,Z)=>V+Z.budgetCents,0)),0):0,Ke=o?o.months.reduce((r,B)=>r+(B.miscBudgetCents??0),0):0,ce=u?u.incomes.reduce((r,B)=>r+(ra(B.incomeSource)?B.amountCents:0),0):0,He=u?u.incomes.reduce((r,B)=>r+(B.incomeSource==="salary"?B.amountCents:0),0):0,de=ia(),Ee=o?de.get(pe(o.year,h.selectedMonth)):void 0,Xe=o?o.months.slice().sort((r,B)=>r.month-B.month)[0]:void 0,ze=Ee?.carriedFromPreviousCents??0,R=Ee?.hasPreviousMonth??!1,et=Ee?.effectiveIncomeCents??ce,we=u?Qt(u):0,Te=Ee?.netCents??ce-we,it=et-d.totalCents,he=He-d.totalCents,mt=d.totalCents>0?`${(He/d.totalCents*100).toFixed(1)} %`:"-",ve=ze<0?"danger":ze>0?"budget-under":"",Le=Te<0?"danger":Te>0?"budget-under":"",Oe=it<0?"danger":it>0?"budget-under":"",tt=o?o.months.reduce((r,B)=>r+B.incomes.reduce((V,Z)=>V+(ra(Z.incomeSource)?Z.amountCents:0),0),0):0,Ne=o?o.months.reduce((r,B)=>r+B.incomes.reduce((V,Z)=>V+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,nt=o&&Xe?de.get(pe(o.year,Xe.month))?.carriedFromPreviousCents??0:0,Bt=tt+nt,qt=Bt-p.totalCents,Et=Ne-p.totalCents,Ot=p.totalCents>0?`${(Ne/p.totalCents*100).toFixed(1)} %`:"-",gt=nt<0?"danger":nt>0?"budget-under":"",Ae=qt<0?"danger":qt>0?"budget-under":"",_e=A+q+I+G+z,Fe=A+q,je=d.foodCents+d.goingOutCents,at=Fe-je,Kt=Qe(je,Fe),on=H+ne+me+Q+Ke,ln=et-_e,Lt=Bt-on,M=_e-d.totalCents,K=on-p.totalCents,ue=r=>r<0?"danger":r>0?"budget-under":"",Cn=(r,B)=>B<=0?"muted":r>=B?"budget-under":"danger",Gt=Cn(He,d.totalCents),va=Cn(Ne,p.totalCents),Me=(r,B)=>{if(B<=0)return"0%";const Z=Math.max(0,r)/B*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},Jt=(r,B)=>{if(B<=0)return r>0?100:0;const V=Math.max(0,r)/B*100;return Math.max(0,V)},ma=[{label:"Essen",budgetCents:A,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:q,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:I,actualCents:d.fixedCents},{label:"Variable",budgetCents:G,actualCents:d.variableCents},{label:"Sonstige",budgetCents:z,actualCents:d.miscCents}];Math.max(1,...ma.flatMap(r=>[r.budgetCents,r.actualCents]));const ga=(r,B)=>B<=0?"bar-positive":r<=0||B>r?"bar-negative":"bar-positive",ba=[{label:"Einkommen gesamt",valueCents:et,className:"bar-income"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:it,className:it<0?"bar-negative":"bar-positive"}],qa=Math.max(1,...ba.map(r=>Math.abs(r.valueCents))),ot=o?o.months.slice().sort((r,B)=>r.month-B.month).map(r=>{const B=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,Z=r.fixedBudgetCents??r.fixedCosts.reduce((Vt,Je)=>Vt+Je.plannedCents,0),Se=r.variableBudgetCents??r.variablePositions.reduce((Vt,Je)=>Vt+Je.budgetCents,0),Ge=r.miscBudgetCents??0,_t=B+V+Z+Se+Ge;return{month:r.month,foodBudgetCents:B,goingOutBudgetCents:V,fixedBudgetCents:Z,variableBudgetCents:Se,miscBudgetCents:Ge,totalBudgetCents:_t}}):[],bt=new Map(ot.map(r=>[r.month,r])),wt=r=>{if(r.length===0)return null;const B=Math.min(...r),V=Math.max(...r),Z=Math.round(r.reduce((Se,Ge)=>Se+Ge,0)/r.length);return{min:B,avg:Z,max:V}},Ka=_.map(r=>r.summary.foodCents),Vn=_.map(r=>r.summary.goingOutCents),La=_.map(r=>r.summary.fixedCents),ja=_.map(r=>r.summary.variableCents),Yn=_.map(r=>r.summary.miscCents),ya=_.map(r=>r.summary.totalCents),un=_.map(r=>o?de.get(pe(o.year,r.month))?.plannedBudgetCents??0:0),Ra=_.map(r=>o?de.get(pe(o.year,r.month))?.netCents??0:0),zn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((B,V)=>B+(V.incomeSource==="salary"?V.amountCents:0),0)])),Un=_.map(r=>zn.get(r.month)??0),At={food:wt(Ka),goingOut:wt(Vn),fixed:wt(La),variable:wt(ja),misc:wt(Yn),total:wt(ya),salary:wt(Un),budget:wt(un),net:wt(Ra)},sr=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],cn={food:Ka.reduce((r,B)=>r+B,0),goingOut:Vn.reduce((r,B)=>r+B,0),fixed:La.reduce((r,B)=>r+B,0),variable:ja.reduce((r,B)=>r+B,0),misc:Yn.reduce((r,B)=>r+B,0),total:ya.reduce((r,B)=>r+B,0),salary:Un.reduce((r,B)=>r+B,0),budget:un.reduce((r,B)=>r+B,0)},Va=sr.map(({key:r,label:B})=>{const V=At.food?.[r]??null,Z=At.goingOut?.[r]??null,Se=At.fixed?.[r]??null,Ge=At.variable?.[r]??null,_t=At.misc?.[r]??null,Vt=At.total?.[r]??null,Je=At.salary?.[r]??null,Sn=At.budget?.[r]??null,Bn=At.net?.[r]??null,Mt=Gn=>Gn===null?"-":w(Gn);return`<tr>
                  <td><strong>${B}</strong></td>
                  <td>${Mt(V)}</td>
                  <td>${Mt(Z)}</td>
                  <td>${Mt(Se)}</td>
                  <td>${Mt(Ge)}</td>
                  <td>${Mt(_t)}</td>
                  <td>${Mt(Vt)}</td>
                  <td>${Mt(Je)}</td>
                  <td>${Mt(Sn)}</td>
                  <td>${Mt(Bn)}</td>
                </tr>`}).join(""),Ca=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${w(cn.food)}</td>
                  <td>${w(cn.goingOut)}</td>
                  <td>${w(cn.fixed)}</td>
                  <td>${w(cn.variable)}</td>
                  <td>${w(cn.misc)}</td>
                  <td>${w(cn.total)}</td>
                  <td>${w(cn.salary)}</td>
                  <td>${w(cn.budget)}</td>
                </tr>`,ir=Math.max(1,..._.flatMap(r=>{const B=bt.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,B??0]})),xa=Math.max(1,..._.flatMap(r=>{const B=bt.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,Z=(B?.foodBudgetCents??0)+(B?.goingOutBudgetCents??0);return[V,Z]})),wa=Math.max(1,..._.flatMap(r=>{const B=bt.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,B]})),or=Math.max(1,..._.flatMap(r=>{const B=bt.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,B]})),Ya=Math.max(1,..._.flatMap(r=>{const B=bt.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,B]})),$r=Qe(d.fixedCents,I),lr=Qe(d.foodCents,A),ur=Qe(d.goingOutCents,q),Sr=Qe(d.variableCents,G),cr=Qe(d.miscCents,z),xn=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,dr=h.hasUnexportedChanges,za=h.unexportedChangeLog.slice().reverse(),Br=h.lastBackupFileName?Pt(h.lastBackupFileName):"-",Er={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},kt=h.years.slice().sort((r,B)=>r.year-B.year),wn=kt.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??kt[kt.length-1]?.year??null,De=typeof wn=="number"?kt.find(r=>r.year===wn):void 0,Ue=De?De.months.slice().sort((r,B)=>r.month-B.month):[],jt=De?st(De):Er,Rt=De?In(De):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},_r=De?mn(De):0,Ua=De?Nn(De,de):0,ka=_r+Ua,dn=De?De.months.reduce((r,B)=>r+Qt(B),0):0,$a=ka-dn,kn=ka-jt.totalCents,fn=[{label:"Essen",budgetCents:Rt.foodCents,actualCents:jt.foodCents},{label:"Ausgehen",budgetCents:Rt.goingOutCents,actualCents:jt.goingOutCents},{label:"Fixkosten",budgetCents:Rt.fixedCents,actualCents:jt.fixedCents},{label:"Variable",budgetCents:Rt.variableCents,actualCents:jt.variableCents},{label:"Sonstige",budgetCents:Rt.miscCents,actualCents:jt.miscCents}],lt=Ue.map(r=>{const B=De?de.get(pe(De.year,r.month)):void 0,V=_n(r),Z=r.incomes.reduce((Gn,fr)=>Gn+fr.amountCents,0),Se=B?.effectiveIncomeCents??Z,Ge=B?.plannedBudgetCents??Qt(r),_t=V.foodCents,Vt=V.goingOutCents,Je=_t+Vt,Sn=V.totalCents,Bn=Se-Ge,Mt=Se-Sn;return{month:r.month,foodCents:_t,goingOutCents:Vt,foodAndGoingOutCents:Je,effectiveIncomeCents:Se,plannedBudgetCents:Ge,actualCostCents:Sn,plannedNetCents:Bn,actualNetCents:Mt}}),e=Math.max(1,...lt.map(r=>r.actualCostCents)),t=Math.max(1,...lt.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),n=Math.max(1,...lt.map(r=>r.foodAndGoingOutCents)),a=Math.max(1,...lt.map(r=>r.foodCents)),s=Math.max(1,...lt.map(r=>r.goingOutCents)),i=lt.map((r,B,V)=>{const Z=B>0?V[B-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Be(r.month),monthShortLabel:Be(r.month).slice(0,3),deltaCents:r.plannedNetCents-Z}}),l=i[i.length-1]??null,c=Math.min(0,...i.map(r=>r.plannedNetCents)),b=Math.max(0,...i.map(r=>r.plannedNetCents)),$=Math.max(1,b-c),g=720,v=320,C=18,x=18,y=38,m=56,S=g-m-x,E=v-C-y,k=r=>{if(i.length<=1)return m+S/2;const B=r/(i.length-1);return m+B*S},T=r=>C+(b-r)/$*E,O=i.map((r,B)=>{const V=k(B),Z=T(r.plannedNetCents);return{...r,x:V,y:Z,leftPercent:V/g*100,topPercent:Z/v*100}}),L=O.map((r,B)=>`${B===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),j=O.length>0?`${L} L ${O[O.length-1]?.x.toFixed(1)} ${(C+E).toFixed(1)} L ${O[0]?.x.toFixed(1)} ${(C+E).toFixed(1)} Z`:"",F=5,U=Array.from({length:F},(r,B)=>{const V=B/(F-1),Z=b-V*$;return{valueCents:Math.round(Z/100)*100,y:T(Z)}}),Y=T(0),N=i[0]?.plannedNetCents??0,oe=(i[i.length-1]?.plannedNetCents??0)-N,ye=oe<0?"trend-badge-negative":oe>0?"trend-badge-positive":"trend-badge-neutral",te=oe<0?"↘":oe>0?"↗":"→",le=oe<0?"Abwärtstrend":oe>0?"Aufwärtstrend":"Seitwärts",ke=kt.reduce((r,B)=>{const V=In(B);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),rt=kt.reduce((r,B)=>{const V=st(B);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Re=kt.reduce((r,B)=>r+mn(B),0),$n=kt[0]?Nn(kt[0],de):0,Wn=Re+$n,Dr=Wn-ke.totalCents,Ir=Wn-rt.totalCents,Nr=[{label:"Essen",budgetCents:ke.foodCents,actualCents:rt.foodCents},{label:"Ausgehen",budgetCents:ke.goingOutCents,actualCents:rt.goingOutCents},{label:"Fixkosten",budgetCents:ke.fixedCents,actualCents:rt.fixedCents},{label:"Variable",budgetCents:ke.variableCents,actualCents:rt.variableCents},{label:"Sonstige",budgetCents:ke.miscCents,actualCents:rt.miscCents}],qr=Math.max(1,...Nr.flatMap(r=>[r.budgetCents,r.actualCents])),Sa=kt.map(r=>{const B=st(r),V=In(r),Z=mn(r),Se=r.months.reduce((Vt,Je)=>Vt+Je.incomes.reduce((Sn,Bn)=>Sn+(Bn.incomeSource==="salary"?Bn.amountCents:0),0),0),Ge=Nn(r,de),_t=Z+Ge;return{year:r.year,salaryIncomeCents:Se,budgetTotalCents:V.totalCents,actualTotalCents:B.totalCents,effectiveIncomeCents:_t,plannedNetCents:_t-V.totalCents,actualNetCents:_t-B.totalCents}}),Kr=Math.max(1,...Sa.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),cs=Math.max(1,...Sa.map(r=>r.actualTotalCents)),ds=`
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
                    ${kt.map(r=>`<option value="${r.year}" ${r.year===wn?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${De?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w(ka)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(dn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(jt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ue($a)}">${w($a)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ue(kn)}">${w(kn)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${te}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${ye}">${te} ${le}</span>
                    </div>
                  </header>
                  ${l?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Pt(l.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${ue(l.plannedNetCents)}" data-year-trend-active-net>${w(l.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${w(l.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${w(l.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${ue(l.deltaCents)}" data-year-trend-active-delta>${l.deltaCents>=0?"+":""}${w(l.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${g} ${v}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${De?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${U.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${m}" y1="${r.y.toFixed(1)}" x2="${g-x}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${m-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${w(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${m}" y1="${Y.toFixed(1)}" x2="${g-x}" y2="${Y.toFixed(1)}"></line>
                              ${j?`<path class="year-trend-area" d="${j}"></path>`:""}
                              ${L?`<path class="year-trend-line" d="${L}"></path>`:""}
                              ${O.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${v-12}" text-anchor="middle">${Pt(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${O.map((r,B)=>`
                                    <button
                                      class="year-trend-point-hit ${B===O.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${B===O.length-1?"1":"0"}"
                                      data-month-label="${Pt(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Pt(r.monthLabel)}: Kalkulierter Saldo ${w(r.plannedNetCents)}, Einkommen ${w(r.effectiveIncomeCents)}, Ausgaben ${w(r.actualCostCents)}"
                                      aria-pressed="${B===O.length-1?"true":"false"}"
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
                    ${fn.map(r=>{const B=Jt(r.actualCents,r.budgetCents),V=Math.min(100,B),Z=`${B.toFixed(0)}%`,Se=r.budgetCents-r.actualCents,Ge=Se<0?"danger":Se>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${ga(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${w(r.actualCents)} von ${w(r.budgetCents)}">
                              <span class="circle-chart-value">${Z}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(lt.length,1)}, minmax(0, 1fr));">
                    ${lt.map(r=>{const B=Me(r.actualCostCents,e);return`
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
                    ${lt.map(r=>{const B=Me(Math.abs(r.plannedNetCents),t),V=Me(Math.abs(r.actualNetCents),t),Z=r.plannedNetCents<0?"bar-negative":"bar-positive",Se=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Be(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${B}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${V}"></div>
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
                  ${lt.map(r=>`<tr>
                        <td>${Be(r.month)}</td>
                        <td>${w(r.effectiveIncomeCents)}</td>
                        <td>${w(r.plannedBudgetCents)}</td>
                        <td>${w(r.actualCostCents)}</td>
                        <td class="${ue(r.plannedNetCents)}">${w(r.plannedNetCents)}</td>
                        <td class="${ue(r.actualNetCents)}">${w(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${kt.map(r=>`<option value="${r.year}" ${r.year===wn?"selected":""}>${r.year}</option>`).join("")}
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
                    ${lt.map(r=>{const B=Me(r.foodAndGoingOutCents,n);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(lt.length,1)}, minmax(0, 1fr));">
                    ${lt.map(r=>{const B=Me(r.foodCents,a);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(lt.length,1)}, minmax(0, 1fr));">
                    ${lt.map(r=>{const B=Me(r.goingOutCents,s);return`
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${w(Wn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${w(ke.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${w(rt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ue(Dr)}">${w(Dr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ue(Ir)}">${w(Ir)}</div><div class="eval-value"></div></div>
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
                    ${Nr.map(r=>{const B=Me(r.budgetCents,qr),V=Me(r.actualCents,qr),Z=ga(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${w(r.budgetCents)} | Ist: ${w(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${B}"></div>
                              <div class="bar-marker" style="left:${B}" aria-hidden="true"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Sa.length,1)}, minmax(0, 1fr));">
                    ${Sa.map(r=>{const B=Me(r.actualTotalCents,cs);return`
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
                    ${Sa.map(r=>{const B=Me(Math.abs(r.plannedNetCents),Kr),V=Me(Math.abs(r.actualNetCents),Kr),Z=r.plannedNetCents<0?"bar-negative":"bar-positive",Se=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${w(r.plannedNetCents)} | Ist-Saldo: ${w(r.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${B}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${V}"></div>
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
    `,fs=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,hs=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${xn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${xn?yt(xn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${xn?"Änderung speichern":"Vorlage speichern"}</button>
          ${xn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,Lr=h.annualVariableFixedTemplates.reduce((r,B)=>r+B.plannedCents,0),ps=Math.round(Lr/12),vs=`
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
                <div class="eval-value budget-under">${w(Lr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${w(ps)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const B=Kn(r.dueDateIso),V=B?Be(B.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${w(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,jr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",ms=h.topModal==="years"?fs:h.topModal==="fixed"?hs:h.topModal==="variable-fixed"?vs:h.topModal==="dashboard"?ds:"";P.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${dr?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${ls.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${Os(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${jr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${jr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${ms}
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
                  ${za.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${za.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Pt(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${ba.map(r=>{const B=Me(Math.abs(r.valueCents),qa),V=r.valueCents>=0?"+":"",Z=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${w(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${B}"></div>
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
                      ${_.map(r=>{const B=bt.get(r.month)?.totalBudgetCents??0,V=Me(B,ir),Z=Me(r.summary.totalCents,ir);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(r.summary.totalCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${w(r.summary.totalCents)} €</span></div>
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
                      ${_.map(r=>{const B=bt.get(r.month),V=(B?.foodBudgetCents??0)+(B?.goingOutBudgetCents??0),Z=r.summary.foodCents+r.summary.goingOutCents,Se=Me(V,xa),Ge=Me(Z,xa);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(Z)} € | Budget ${w(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Se}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Ge}"><span class="spark-bar-fill-value">${w(Z)} €</span></div>
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
                      ${_.map(r=>{const B=bt.get(r.month)?.fixedBudgetCents??0,V=Me(B,wa),Z=Me(r.summary.fixedCents,wa);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(r.summary.fixedCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${w(r.summary.fixedCents)} €</span></div>
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
                      ${_.map(r=>{const B=bt.get(r.month)?.variableBudgetCents??0,V=Me(B,or),Z=Me(r.summary.variableCents,or);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(r.summary.variableCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${w(r.summary.variableCents)} €</span></div>
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
                      ${_.map(r=>{const B=bt.get(r.month)?.miscBudgetCents??0,V=Me(B,Ya),Z=Me(r.summary.miscCents,Ya);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${w(r.summary.miscCents)} € | Budget ${w(B)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${w(r.summary.miscCents)} €</span></div>
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
                    <div class="eval-value">${w(ce)}</div>
                    <div class="eval-value">${w(tt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${w(He)}</div>
                    <div class="eval-value">${w(Ne)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${ve}">${R?w(ze):"-"}</div>
                    <div class="eval-value ${gt}">${o?w(nt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${w(et)}</div>
                    <div class="eval-value">${w(Bt)}</div>
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
                    <div class="eval-value">${Zt(A,d.foodCents)}</div>
                    <div class="eval-value">${w(H)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Zt(q,d.goingOutCents)}</div>
                    <div class="eval-value">${w(ne)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Zt(I,d.fixedCents)}</div>
                    <div class="eval-value">${w(me)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Zt(G,d.variableCents)}</div>
                    <div class="eval-value">${w(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Zt(z,d.miscCents)}</div>
                    <div class="eval-value">${w(Ke)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Zt(_e,d.totalCents)}</div>
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
                    <div class="eval-value">${w(p.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${ur}">${w(d.goingOutCents)}</div>
                    <div class="eval-value">${w(p.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${$r}">${w(d.fixedCents)}</div>
                    <div class="eval-value">${w(p.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Sr}">${w(d.variableCents)}</div>
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
                    <div class="eval-value ${ue(M)}">${w(M)}</div>
                    <div class="eval-value ${ue(K)}">${w(K)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${ue(ln)}">${w(ln)}</div>
                    <div class="eval-value ${ue(Lt)}">${w(Lt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Oe}">${w(it)}</div>
                    <div class="eval-value ${Ae}">${w(qt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${ue(he)}">${w(he)}</div>
                    <div class="eval-value ${ue(Et)}">${w(Et)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Gt}">${mt}</div>
                    <div class="eval-value ${va}">${Ot}</div>
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
                ${_.map((r,B,V)=>{const Z=o?de.get(pe(o.year,r.month)):void 0,Se=Z?.plannedBudgetCents??0,Ge=Z?.netCents??0,_t=zn.get(r.month)??0,Vt=Ge<0?"danger":Ge>0?"budget-under":"",Je=V[B-1],Sn=Je?.summary.foodCents??null,Bn=Je?.summary.goingOutCents??null,Mt=Je?.summary.fixedCents??null,Gn=Je?.summary.variableCents??null,fr=Je?.summary.miscCents??null,Rr=Je?.summary.totalCents??null,Vr=Je!==void 0?zn.get(Je.month)??0:null,Yr=o&&Je?de.get(pe(o.year,Je.month))?.plannedBudgetCents??0:null,zr=Sn===null?null:r.summary.foodCents-Sn,Ur=Bn===null?null:r.summary.goingOutCents-Bn,Wr=Mt===null?null:r.summary.fixedCents-Mt,Gr=Gn===null?null:r.summary.variableCents-Gn,Jr=fr===null?null:r.summary.miscCents-fr,Hr=Rr===null?null:r.summary.totalCents-Rr,Xr=Vr===null?null:_t-Vr,Qr=Yr===null?null:Se-Yr,Jn=Ht=>Ht===null?"muted":Ht>0?"danger":Ht<0?"budget-under":"muted",gs=Ht=>Ht===null?"muted":Ht>0?"danger":Ht<0?"budget-under":"muted",Tn=Ht=>Ht===null?"(Δ -)":`(Δ ${Ht>0?"+":""}${w(Ht)})`,Zr=o&&Je?de.get(pe(o.year,Je.month))?.netCents??0:null,Ba=Zr===null?null:Ge-Zr,bs=Ba===null?"(Δ -)":`(Δ ${Ba>0?"+":""}${w(Ba)})`,ys=Ba===null?"muted":Ba<0?"danger":Ba>0?"budget-under":"muted";return`<tr>
                  <td>${Be(r.month)}</td>
                  <td>${w(r.summary.foodCents)} <span class="${Jn(zr)}">${Tn(zr)}</span></td>
                  <td>${w(r.summary.goingOutCents)} <span class="${Jn(Ur)}">${Tn(Ur)}</span></td>
                  <td>${w(r.summary.fixedCents)} <span class="${Jn(Wr)}">${Tn(Wr)}</span></td>
                  <td>${w(r.summary.variableCents)} <span class="${Jn(Gr)}">${Tn(Gr)}</span></td>
                  <td>${w(r.summary.miscCents)} <span class="${Jn(Jr)}">${Tn(Jr)}</span></td>
                  <td>${w(r.summary.totalCents)} <span class="${Jn(Hr)}">${Tn(Hr)}</span></td>
                  <td>${w(_t)} <span class="${Jn(Xr)}">${Tn(Xr)}</span></td>
                  <td>${w(Se)} <span class="${gs(Qr)}">${Tn(Qr)}</span></td>
                  <td class="${Vt}">${w(Ge)} <span class="${ys}">${bs}</span></td>
                </tr>`}).join("")}
                ${Va}
                ${Ca}
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
                    <td class="${ve}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${yt(ze)}" />
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
                  <strong>${w(ce)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${w(He)} €</strong>
                </div>
                <div class="column-overview-row ${ve}">
                  <span>Übernahme Vormonat</span>
                  <strong>${u?`${w(ze)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${w(et)} €</strong>
                </div>
                <div class="column-overview-row ${Le}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${w(Te)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${St(A,d.foodCents)}
                ${St(q,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${w(Fe)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${w(je)} €</strong>
                  </div>
                  <div class="column-overview-row ${Kt}">
                    <span>Diff</span>
                    <strong>${w(at)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${yt(A)}" ${u?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${yt(q)}" ${u?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${u?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${u?u.days.map(r=>{const B=r.foodCents>0,V=r.goingOutCents>0,Z=`${r.isoDate===f?"today-row":""} ${B||V?"day-has-entry":""}`.trim(),Se=`amount-input ${B?"day-input-has-value":""}`.trim(),Ge=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Se}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${yt(r.foodCents)}" /></td>
                      <td><input class="${Ge}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${yt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${St(I,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${yt(I)}" ${u?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${yt(r.plannedCents)}" /></td>
                    <td class="${Qe(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${yt(r.actualCents)}" /></td>
                    <td class="${Qe(r.actualCents,r.plannedCents)}">${w(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${St(G,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${yt(G)}" ${u?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${yt(r.budgetCents)}" /></td>
                    <td class="${Qe(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${yt(r.actualCents)}" /></td>
                    <td class="${Qe(r.actualCents,r.budgetCents)}">${w(r.actualCents-r.budgetCents)}</td>
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
              ${St(z,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${yt(z)}" ${u?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${Br}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal)),Rn(),Xt(),ht(),Dt()}function Rn(){const o=P.querySelector("#theme-select"),u=P.querySelector("#open-years-modal"),f=P.querySelector("#open-fixed-modal"),d=P.querySelector("#open-variable-fixed-modal"),p=P.querySelector("#open-dashboard-modal"),_=P.querySelector("#panel-modal-close"),A=P.querySelector("#panel-modal-backdrop"),q=P.querySelector("#open-unexported-change-log"),I=P.querySelector("#unexported-change-log-close"),G=P.querySelector("#unexported-change-log-backdrop"),z=P.querySelector("#new-year"),H=P.querySelector("#create-year"),ne=P.querySelector("#year-select"),me=P.querySelector("#month-select");o?.addEventListener("change",()=>{const M=o.value;ss(M)&&An(M)}),u?.addEventListener("click",()=>{Qn("years")}),f?.addEventListener("click",()=>{Qn("fixed")}),d?.addEventListener("click",()=>{Qn("variable-fixed")}),p?.addEventListener("click",()=>{Qn("dashboard")}),q?.addEventListener("click",()=>{Zn()}),I?.addEventListener("click",()=>{ea()}),G?.addEventListener("click",M=>{M.target===G&&ea()}),P.querySelectorAll("[data-dashboard-tab]").forEach(M=>{M.addEventListener("click",()=>{const K=M.dataset.dashboardTab;K!=="year"&&K!=="food"&&K!=="all"||(h.dashboardTab=K,ae())})});const Q=P.querySelector("#dashboard-year-select");Q?.addEventListener("change",()=>{const M=Number.parseInt(Q.value,10);Number.isInteger(M)&&(h.dashboardYear=M,ae())}),_?.addEventListener("click",()=>{_a()}),A?.addEventListener("click",M=>{M.target===A&&_a()}),h.topModal&&window.setTimeout(()=>{_?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{I?.focus()},0),H?.addEventListener("click",async()=>{const M=Number.parseInt(z?.value??"",10);if(!Number.isInteger(M)){alert("Bitte gültiges Jahr eingeben.");return}await X(M)}),ne?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ne.value,10),h.selectedMonth=Ut(),ae()}),me?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(me.value,10),ae()});const Ke=P.querySelector("#fixed-template-name"),ce=P.querySelector("#fixed-template-amount"),He=P.querySelector("#add-fixed-template"),de=P.querySelector("#cancel-fixed-template-edit"),Ee=P.querySelector("#annual-variable-fixed-name"),Xe=P.querySelector("#annual-variable-fixed-date"),ze=P.querySelector("#annual-variable-fixed-amount"),R=P.querySelector("#add-annual-variable-fixed-template");He?.addEventListener("click",async()=>{const M=Ke?.value??"",K=qe(ce?.value??"0");await xr(M,K),Ke&&(Ke.value=""),ce&&(ce.value="")}),de?.addEventListener("click",()=>{da()}),R?.addEventListener("click",async()=>{const M=Ee?.value??"",K=Xe?.value??"",ue=qe(ze?.value??"0");await wr(M,K,ue),Ee&&(Ee.value=""),Xe&&(Xe.value=""),ze&&(ze.value="")}),P.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeAnnualVariableFixedTemplate;K&&await nn(K)})}),P.querySelectorAll("[data-edit-fixed-template]").forEach(M=>{M.addEventListener("click",()=>{const K=M.dataset.editFixedTemplate;K&&ca(K)})}),P.querySelectorAll("[data-remove-fixed-template]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeFixedTemplate;K&&await fa(K)})}),P.querySelectorAll("[data-day-food]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),$t(M)}),M.addEventListener("change",async()=>{const K=M.dataset.dayFood;K&&await bn(K,"foodCents",qe(M.value))})}),P.querySelectorAll("[data-day-going]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),$t(M)}),M.addEventListener("change",async()=>{const K=M.dataset.dayGoing;K&&await bn(K,"goingOutCents",qe(M.value))})}),P.querySelectorAll("[data-fixed-actual]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),$t(M)}),M.addEventListener("change",async()=>{const K=M.dataset.fixedActual;K&&await an(K,qe(M.value))})}),P.querySelectorAll("[data-fixed-planned]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),$t(M)}),M.addEventListener("change",async()=>{const K=M.dataset.fixedPlanned;K&&await ha(K,qe(M.value))})});const et=P.querySelector("#fixed-budget");et?.addEventListener("click",M=>{M.preventDefault(),et.blur(),$t(et)}),et?.addEventListener("change",async()=>{await Za(qe(et.value))});const we=P.querySelector("#food-budget");we?.addEventListener("click",M=>{M.preventDefault(),we.blur(),$t(we)}),we?.addEventListener("change",async()=>{await yn(qe(we.value))});const Te=P.querySelector("#going-out-budget");Te?.addEventListener("click",M=>{M.preventDefault(),Te.blur(),$t(Te)}),Te?.addEventListener("change",async()=>{await er(qe(Te.value))}),P.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Pa()});const he=P.querySelector("#misc-budget");he?.addEventListener("click",M=>{M.preventDefault(),he.blur(),$t(he)}),he?.addEventListener("change",async()=>{await Fa(qe(he.value))});const mt=P.querySelector("#variable-budget");mt?.addEventListener("click",M=>{M.preventDefault(),mt.blur(),$t(mt)}),mt?.addEventListener("change",async()=>{await Ye(qe(mt.value))});const ve=P.querySelector("#variable-position-name"),Le=P.querySelector("#variable-position-budget"),Oe=P.querySelector("#add-variable-position"),tt=P.querySelector("#add-variable-position-recurring"),Ne=P.querySelector("#misc-description"),nt=P.querySelector("#misc-amount"),Bt=P.querySelector("#add-misc"),qt=P.querySelector("#add-misc-recurring"),Et=P.querySelector("#income-description"),Ot=P.querySelector("#income-source"),gt=P.querySelector("#income-amount"),Ae=P.querySelector("#add-income"),_e=P.querySelector("#add-income-recurring"),Fe=P.querySelector("#fixed-cost-name"),je=P.querySelector("#fixed-cost-budget"),at=P.querySelector("#add-fixed-cost"),Kt=P.querySelector("#carryover-override");Kt?.addEventListener("click",M=>{M.preventDefault(),Kt.blur(),$t(Kt)}),Kt?.addEventListener("change",async()=>{const M=Kt.value;if(!M.trim()){await Nt(null);return}await Nt(qe(M))}),at?.addEventListener("click",async()=>{const M=qe(je?.value??"0");await kr(Fe?.value??"",M),Fe&&(Fe.value=""),je&&(je.value="")}),Oe?.addEventListener("click",async()=>{const M=qe(Le?.value??"0");await Da(ve?.value??"",M,!1),ve&&(ve.value=""),Le&&(Le.value="")}),tt?.addEventListener("click",async()=>{const M=qe(Le?.value??"0");await Da(ve?.value??"",M,!0),ve&&(ve.value=""),Le&&(Le.value="")}),Bt?.addEventListener("click",async()=>{const M=qe(nt?.value??"0");await sn(Ne?.value??"",M,!1),Ne&&(Ne.value=""),nt&&(nt.value="")}),qt?.addEventListener("click",async()=>{const M=qe(nt?.value??"0");await sn(Ne?.value??"",M,!0),Ne&&(Ne.value=""),nt&&(nt.value="")}),Ae?.addEventListener("click",async()=>{const M=qe(gt?.value??"0"),K=Ot?.value,ue=K==="balance"||K==="fresh"||K==="salary"?K:void 0;await jn(Et?.value??"",M,ue,!1),Et&&(Et.value=""),gt&&(gt.value=""),Ot&&(Ot.value="salary")}),_e?.addEventListener("click",async()=>{const M=qe(gt?.value??"0"),K=Ot?.value,ue=K==="balance"||K==="fresh"||K==="salary"?K:void 0;await jn(Et?.value??"",M,ue,!0),Et&&(Et.value=""),gt&&(gt.value=""),Ot&&(Ot.value="salary")}),P.querySelectorAll("[data-income-source]").forEach(M=>{M.addEventListener("change",async()=>{const K=M.dataset.incomeSource;if(!K)return;const ue=M.value;await nr(K,ue==="balance"||ue==="fresh"||ue==="salary"?ue:void 0)})}),P.querySelectorAll("[data-variable-position-budget]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),$t(M)}),M.addEventListener("change",async()=>{const K=M.dataset.variablePositionBudget;K&&await pa(K,qe(M.value))})}),P.querySelectorAll("[data-variable-position-actual]").forEach(M=>{M.addEventListener("click",K=>{K.preventDefault(),M.blur(),$t(M)}),M.addEventListener("change",async()=>{const K=M.dataset.variablePositionActual;K&&await Pn(K,qe(M.value))})}),P.querySelectorAll("[data-remove-variable-position]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeVariablePosition;K&&await Ia(K)})}),P.querySelectorAll("[data-move-variable-position-next]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.moveVariablePositionNext;K&&await Na(K)})}),P.querySelectorAll("[data-remove-fixed]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeFixed;K&&await rn(K)})}),P.querySelectorAll("[data-remove-income]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeIncome;K&&await fe(K)})}),P.querySelectorAll("[data-remove-misc]").forEach(M=>{M.addEventListener("click",async()=>{const K=M.dataset.removeMisc;K&&await tr(K)})});const on=P.querySelector("#backup-export"),ln=P.querySelector("#backup-import");P.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),on?.addEventListener("click",async()=>{await ar()}),ln?.addEventListener("change",async()=>{const M=ln.files?.[0];if(M){try{await rr(M)}catch(K){console.error("Backup-Import fehlgeschlagen",K),Ce("Backup konnte nicht importiert werden.","error")}ln.value=""}})}return{init:Cr}}const Fs="modulepreload",Ds=function(P){return"/habu26/"+P},os={},Is=function(h,Ie,J){let ge=Promise.resolve();if(Ie&&Ie.length>0){let ut=function(We){return Promise.all(We.map(ie=>Promise.resolve(ie).then(Ct=>({status:"fulfilled",value:Ct}),Ct=>({status:"rejected",reason:Ct}))))};var xe=ut;document.getElementsByTagName("link");const se=document.querySelector("meta[property=csp-nonce]"),be=se?.nonce||se?.getAttribute("nonce");ge=ut(Ie.map(We=>{if(We=Ds(We),We in os)return;os[We]=!0;const ie=We.endsWith(".css"),Ct=ie?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${We}"]${Ct}`))return;const ft=document.createElement("link");if(ft.rel=ie?"stylesheet":Fs,ie||(ft.as="script"),ft.crossOrigin="",ft.href=We,be&&ft.setAttribute("nonce",be),document.head.appendChild(ft),ie)return new Promise((ht,Xt)=>{ft.addEventListener("load",ht),ft.addEventListener("error",()=>Xt(new Error(`Unable to preload CSS for ${We}`)))})}))}function re(se){const be=new Event("vite:preloadError",{cancelable:!0});if(be.payload=se,window.dispatchEvent(be),!be.defaultPrevented)throw se}return ge.then(se=>{for(const be of se||[])be.status==="rejected"&&re(be.reason);return h().catch(re)})};function Ns(P={}){const{immediate:h=!1,onNeedRefresh:Ie,onOfflineReady:J,onRegistered:ge,onRegisteredSW:re,onRegisterError:xe}=P;let se,be;const ut=async(ie=!0)=>{await be};async function We(){if("serviceWorker"in navigator){if(se=await Is(async()=>{const{Workbox:ie}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ie}},[]).then(({Workbox:ie})=>new ie("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ie=>{xe?.(ie)}),!se)return;se.addEventListener("activated",ie=>{(ie.isUpdate||ie.isExternal)&&window.location.reload()}),se.addEventListener("installed",ie=>{ie.isUpdate||J?.()}),se.register({immediate:h}).then(ie=>{re?re("/habu26/sw.js",ie):ge?.(ie)}).catch(ie=>{xe?.(ie)})}}return be=We(),ut}function qs(){Ns({immediate:!0})}const us=document.getElementById("app");if(!us)throw new Error("App-Container nicht gefunden.");As(us).init();qs();
