(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ge of document.querySelectorAll('link[rel="modulepreload"]'))J(ge);new MutationObserver(ge=>{for(const re of ge)if(re.type==="childList")for(const Ce of re.addedNodes)Ce.tagName==="LINK"&&Ce.rel==="modulepreload"&&J(Ce)}).observe(document,{childList:!0,subtree:!0});function Oe(ge){const re={};return ge.integrity&&(re.integrity=ge.integrity),ge.referrerPolicy&&(re.referrerPolicy=ge.referrerPolicy),ge.crossOrigin==="use-credentials"?re.credentials="include":ge.crossOrigin==="anonymous"?re.credentials="omit":re.credentials="same-origin",re}function J(ge){if(ge.ep)return;ge.ep=!0;const re=Oe(ge);fetch(ge.href,re)}})();const Ts=[1,2,3,4,5,6,7,8,9,10,11,12];function qr(){return new Date().toISOString()}function Ot(M){const h=Math.random().toString(36).slice(2,10);return`${M}_${Date.now()}_${h}`}function As(M,h){const Oe=new Date(M,h,0).getDate(),J=[];for(let ge=1;ge<=Oe;ge+=1){const re=new Date(Date.UTC(M,h-1,ge));J.push({isoDate:re.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return J}function Os(M){return M.map(h=>({id:Ot("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function is(M,h,Oe){const J=h.reduce((re,Ce)=>re+Ce.plannedCents,0),ge=Ts.map(re=>({month:re,days:As(M,re),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Os(h),fixedBudgetCents:J,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:M,createdAt:qr(),templateVersion:Oe,months:ge}}function os(M,h){return{id:Ot("expense"),description:M,amountCents:h,createdAt:qr()}}function ls(M,h,Oe){const J={id:Ot("income"),description:M,amountCents:h,createdAt:qr()};return Oe?{...J,incomeSource:Oe}:J}var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ds(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var gr={exports:{}},Is=gr.exports,cs;function Ns(){return cs||(cs=1,(function(M,h){((Oe,J)=>{M.exports=J()})(Is,function(){var Oe=function(e,t){return(Oe=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},J=function(){return(J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ge(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Fs,Ce=Object.keys,se=Array.isArray;function be(e,t){return typeof t=="object"&&Ce(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||re.Promise||(re.Promise=Promise);var ut=Object.getPrototypeOf,Ye={}.hasOwnProperty;function ce(e,t){return Ye.call(e,t)}function gt(e,t){typeof t=="function"&&(t=t(ut(e))),(typeof Reflect>"u"?Ce:Reflect.ownKeys)(t).forEach(function(n){ht(e,n,t[n])})}var ft=Object.defineProperty;function ht(e,t,n,a){ft(e,t,be(n&&ce(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function Zt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ht(e.prototype,"constructor",e),{extend:gt.bind(null,e.prototype)}}}}var ra=Object.getOwnPropertyDescriptor,_a=[].slice;function sa(e,t,n){return _a.call(e,t,n)}function ia(e,t){return t(e)}function Dn(e){if(!e)throw new Error("Assertion Failed")}function oa(e){re.setImmediate?setImmediate(e):setTimeout(e,0)}function Yt(e,t){if(typeof t=="string"&&ce(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Yt(e,t[a]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:Yt(c,t.substr(u+1))}function pt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Dn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)pt(e,t[a],n[a])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?se(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:pt(c=(c=e[i])&&ce(e,i)?c:e[i]={},u,n)):n===void 0?se(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ma(e){var t,n={};for(t in e)ce(e,t)&&(n[t]=e[t]);return n}var Cr=[].concat;function Pa(e){return Cr.apply([],e)}var It="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Pa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return re[e]}),Wa=new Set(It.map(function(e){return re[e]})),In=null;function vt(e){return In=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=In.get(n);if(a)return a;if(se(n)){a=[],In.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Wa.has(n.constructor))a=n;else{var c,u=ut(n);for(c in a=u===Object.prototype?{}:Object.create(u),In.set(n,a),n)ce(n,c)&&(a[c]=t(n[c]))}return a})(e),In=null,e}var Nn={}.toString;function Ta(e){return Nn.call(e).slice(8,-1)}var Aa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",xr=typeof Aa=="symbol"?function(e){var t;return e!=null&&(t=e[Aa])&&t.apply(e)}:function(){return null};function en(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var at={};function fe(e){var t,n,a,s;if(arguments.length===1){if(se(e))return e.slice();if(this===at&&typeof e=="string")return[e];if(s=xr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var cn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},It=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],rt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(It),Ga={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function un(e,t){this.name=e,this.message=t}function Ha(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function St(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Ha(e,t)}function Sn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Ha(e,this.failures)}Zt(un).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Zt(St).from(un),Zt(Sn).from(un);var la=rt.reduce(function(e,t){return e[t]=t+"Error",e},{}),wr=un,ee=rt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Ga[t]||n,this.inner=null)}return Zt(a).from(wr),e[t]=a,e},{}),Ja=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,It.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));It=rt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function xe(){}function Ln(e){return e}function kr(e,t){return e==null||e===Ln?t:function(n){return t(e(n))}}function dn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Xa(e,t){return e===xe?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?dn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?dn(s,this.onerror):s),i!==void 0?i:n}}function $r(e,t){return e===xe?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?dn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?dn(a,this.onerror):a)}}function Sr(e,t){return e===xe?t:function(s){var a=e.apply(this,arguments),s=(be(s,a),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?dn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?dn(i,this.onerror):i),a===void 0?c===void 0?void 0:c:be(a,c)}}function Oa(e,t){return e===xe?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function qn(e,t){return e===xe?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}It.ModifyError=St,It.DexieError=un,It.BulkError=Sn;var bt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Fa(e){bt=e}var zt={},Ne=100,Kn=typeof Promise>"u"?[]:(rt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Kn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ut(Kn),rt]:[rt,ut(rt),rt]),rt=Kn[0],xn=Kn[1],xn=xn&&xn.then,Nt=rt&&rt.constructor,En=!!Kn[2],jn=function(e,t){Wt.push([e,t]),Bn&&(queueMicrotask(Da),Bn=!1)},Rn=!0,Bn=!0,Ut=[],ca=[],ot=Ln,tn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xe,pgp:!1,env:{},finalize:xe},H=tn,Wt=[],fn=0,hn=[];function Y(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==zt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&yt(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var c=a._lib&&pn();i&&typeof i.then=="function"?n(a,function(u,v){i instanceof Y?i._then(u,v):i.then(u,v)}):(a._state=!0,a._value=i,he(a)),c&&Ct()}},yt.bind(null,a))}catch(i){yt(a,i)}})(this,e)}var ua={get:function(){var e=H,t=pa;function n(a,s){var i=this,c=!e.global&&(e!==H||t!==pa),u=c&&!an(),v=new Y(function($,y){Vn(i,new Ge(er(a,e,c,u),er(s,e,c,u),$,y,e))});return this._consoleTask&&(v._consoleTask=this._consoleTask),v}return n.prototype=zt,n},set:function(e){ht(this,"then",e&&e.prototype===zt?ua:{get:function(){return e},set:ua.set})}};function Ge(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function yt(e,t){var n,a;ca.push(t),e._state===null&&(n=e._lib&&pn(),t=ot(t),e._state=!1,e._value=t,a=e,Ut.some(function(s){return s._value===a._value})||Ut.push(a),he(e),n)&&Ct()}function he(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Vn(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),fn===0&&(++fn,jn(function(){--fn==0&&Et()},[]))}function Vn(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++fn,jn(Qa,[n,e,t])}}function Qa(e,t,n){try{var a,s=t._value;!t._state&&ca.length&&(ca=[]),a=bt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||ca.indexOf(s)!==-1||(i=>{for(var c=Ut.length;c;)if(Ut[--c]._value===i._value)return Ut.splice(c,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--fn==0&&Et(),--n.psd.ref||n.psd.finalize()}}function Da(){vn(tn,function(){pn()&&Ct()})}function pn(){var e=Rn;return Bn=Rn=!1,e}function Ct(){var e,t,n;do for(;0<Wt.length;)for(e=Wt,Wt=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<Wt.length);Bn=Rn=!0}function Et(){for(var e=Ut,t=(Ut=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),hn.slice(0)),n=t.length;n;)t[--n]()}function da(e){return new Y(zt,!1,e)}function Ee(e,t){var n=H;return function(){var a=pn(),s=H;try{return rn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{rn(s,!1),a&&Ct()}}}gt(Y.prototype,{then:ua,_then:function(e,t){Vn(this,new Ge(null,null,e,t,H))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:da)(a)}):this.then(null,function(a){return(a&&a.name===t?n:da)(a)}))},finally:function(e){return this.then(function(t){return Y.resolve(e()).then(function(){return t})},function(t){return Y.resolve(e()).then(function(){return da(t)})})},timeout:function(e,t){var n=this;return e<1/0?new Y(function(a,s){var i=setTimeout(function(){return s(new ee.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ht(Y.prototype,Symbol.toStringTag,"Dexie.Promise"),tn.env=Za(),gt(Y,{all:function(){var e=fe.apply(null,arguments).map(Yn);return new Y(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return Y.resolve(s).then(function(c){e[i]=c,--a||t(e)},n)})})},resolve:function(e){return e instanceof Y?e:e&&typeof e.then=="function"?new Y(function(t,n){e.then(t,n)}):new Y(zt,!0,e)},reject:da,race:function(){var e=fe.apply(null,arguments).map(Yn);return new Y(function(t,n){e.map(function(a){return Y.resolve(a).then(t,n)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return pa}},newPSD:nn,usePSD:vn,scheduler:{get:function(){return jn},set:function(e){jn=e}},rejectionMapper:{get:function(){return ot},set:function(e){ot=e}},follow:function(e,t){return new Y(function(n,a){return nn(function(s,i){var c=H;c.unhandleds=[],c.onunhandled=i,c.finalize=dn(function(){var u,v=this;u=function(){v.unhandleds.length===0?s():i(v.unhandleds[0])},hn.push(function $(){u(),hn.splice(hn.indexOf($),1)}),++fn,jn(function(){--fn==0&&Et()},[])},c.finalize),e()},t,n,a)})}}),Nt&&(Nt.allSettled&&ht(Y,"allSettled",function(){var e=fe.apply(null,arguments).map(Yn);return new Y(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return Y.resolve(s).then(function(c){return a[i]={status:"fulfilled",value:c}},function(c){return a[i]={status:"rejected",reason:c}}).then(function(){return--n||t(a)})})})}),Nt.any&&typeof AggregateError<"u"&&ht(Y,"any",function(){var e=fe.apply(null,arguments).map(Yn);return new Y(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,c){return Y.resolve(i).then(function(u){return t(u)},function(u){s[c]=u,--a||n(new AggregateError(s))})})})}),Nt.withResolvers)&&(Y.withResolvers=Nt.withResolvers);var tt={awaits:0,echoes:0,id:0},Er=0,fa=[],ha=0,pa=0,Br=0;function nn(e,c,n,a){var s=H,i=Object.create(s),c=(i.parent=s,i.ref=0,i.global=!1,i.id=++Br,tn.env,i.env=En?{Promise:Y,PromiseProp:{value:Y,configurable:!0,writable:!0},all:Y.all,race:Y.race,allSettled:Y.allSettled,any:Y.any,resolve:Y.resolve,reject:Y.reject}:{},c&&be(i,c),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},vn(i,e,n,a));return i.ref===0&&i.finalize(),c}function _n(){return tt.id||(tt.id=++Er),++tt.awaits,tt.echoes+=Ne,tt.id}function an(){return!!tt.awaits&&(--tt.awaits==0&&(tt.id=0),tt.echoes=tt.awaits*Ne,!0)}function Yn(e){return tt.echoes&&e&&e.constructor===Nt?(_n(),e.then(function(t){return an(),t},function(t){return an(),Le(t)})):e}function _r(){var e=fa[fa.length-1];fa.pop(),rn(e,!1)}function rn(e,t){var n,a,s=H;(t?!tt.echoes||ha++&&e===H:!ha||--ha&&e===H)||queueMicrotask(t?(function(i){++pa,tt.echoes&&--tt.echoes!=0||(tt.echoes=tt.awaits=tt.id=0),fa.push(H),rn(i,!0)}).bind(null,e):_r),e!==H&&(H=e,s===tn&&(tn.env=Za()),En)&&(n=tn.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(re,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function Za(){var e=re.Promise;return En?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(re,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function vn(e,t,n,a,s){var i=H;try{return rn(e,!0),t(n,a,s)}finally{rn(i,!1)}}function er(e,t,n,a){return typeof e!="function"?e:function(){var s=H;n&&_n(),rn(t,!0);try{return e.apply(this,arguments)}finally{rn(s,!1),a&&queueMicrotask(an)}}}function Ia(e){Promise===Nt&&tt.echoes===0?ha===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+xn).indexOf("[native code]")===-1&&(_n=an=xe);var Le=Y.reject,mn="￿",Gt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Mn="String expected.",gn=[],zn="__dbnames",Na="readonly",La="readwrite";function bn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var tr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Un(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=vt(t))[e],t}}function nr(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ue(e,t){try{var n=ar(e),a=ar(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=rr(e),i=rr(t),c=s.length,u=i.length,v=c<u?c:u,$=0;$<v;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var y=e,b=t,x=y.length,w=b.length,m=x<w?x:w,g=0;g<m;++g){var E=ue(y[g],b[g]);if(E!==0)return E}return x===w?0:x<w?-1:1}}catch{}return NaN}function ar(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ta(e))==="ArrayBuffer")?"binary":t}function rr(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Wn(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}ae.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(se(n))return ge(ge([],se(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(se(a))return se(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var Gn=ae;function ae(e){this["@@propmod"]=e}function sr(e,t){for(var n=Ce(t),a=n.length,s=!1,i=0;i<a;++i){var c=n[i],u=t[c],v=Yt(e,c);u instanceof Gn?(pt(e,c,u.execute(v)),s=!0):v!==u&&(pt(e,c,u),s=!0)}return s}l.prototype._trans=function(e,t,n){var a=this._tx||H.trans,s=this.name,i=bt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c($,y,b){if(b.schema[s])return t(b.idbtrans,b);throw new ee.NotFound("Table "+s+" not part of transaction")}var u=pn();try{var v=a&&a.db._novip===this.db._novip?a===H.trans?a._promise(e,c,n):nn(function(){return a._promise(e,c,n)},{trans:a,transless:H.transless||H}):(function $(y,b,x,w){if(y.idbdb&&(y._state.openComplete||H.letThrough||y._vip)){var m=y._createTransaction(b,x,y._dbSchema);try{m.create(),y._state.PR1398_maxLoop=3}catch(g){return g.name===la.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return $(y,b,x,w)})):Le(g)}return m._promise(b,function(g,E){return nn(function(){return H.trans=m,w(g,E,m)})}).then(function(g){if(b==="readwrite")try{m.idbtrans.commit()}catch{}return b==="readonly"?g:m._completion.then(function(){return g})})}if(y._state.openComplete)return Le(new ee.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Le(new ee.DatabaseClosed);y.open().catch(xe)}return y._state.dbReadyPromise.then(function(){return $(y,b,x,w)})})(this.db,e,[this.name],c);return i&&(v._consoleTask=i,v=v.catch(function($){return console.trace($),Le($)})),v}finally{u&&Ct()}},l.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Le(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},l.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(se(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Ce(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function($){return 0<=u.keyPath.indexOf($)})){for(var v=0;v<t.length;++v)if(t.indexOf(u.keyPath[v])===-1)return!1;return!0}return!1}).sort(function(u,v){return u.keyPath.length-v.keyPath.length})[0];if(n&&this.db._maxKey!==mn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&bt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(u,v){return ue(u,v)===0}var c=t.reduce(function(y,v){var $=y[0],y=y[1],b=a[v],x=e[v];return[$||b,$||!b?bn(y,b&&b.multi?function(w){return w=Yt(w,v),se(w)&&w.some(function(m){return s(x,m)})}:function(w){return s(x,Yt(w,v))}):y]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},l.prototype.filter=function(e){return this.toCollection().and(e)},l.prototype.count=function(e){return this.toCollection().count(e)},l.prototype.offset=function(e){return this.toCollection().offset(e)},l.prototype.limit=function(e){return this.toCollection().limit(e)},l.prototype.each=function(e){return this.toCollection().each(e)},l.prototype.toArray=function(e){return this.toCollection().toArray(e)},l.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},l.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,se(e)?"[".concat(e.join("+"),"]"):e))},l.prototype.reverse=function(){return this.toCollection().reverse()},l.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof nr&&(e=(c=>{var u=y,v=c;if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function $(){this.constructor=u}function y(){return c!==null&&c.apply(this,arguments)||this}return Oe(u,v),u.prototype=v===null?Object.create(v):($.prototype=v.prototype,new $),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),s=e.prototype;s;s=ut(s))Object.getOwnPropertyNames(s).forEach(function(c){return a.add(c)});function i(c){if(!c)return c;var u,v=Object.create(e.prototype);for(u in c)if(!a.has(u))try{v[u]=c[u]}catch{}return v}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},l.prototype.defineClass=function(){return this.mapToClass(function(e){be(this,e)})},l.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=Un(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{pt(e,i,u)}catch{}return u})},l.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var c=i??{};return sr(c,t),a&&pt(c,a,e),n.core.mutate({trans:s,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):!!i})})})},l.prototype.update=function(e,t){return typeof e!="object"||se(e)?this.where(":id").equals(e).modify(t):(e=Yt(e,this.schema.primKey.keyPath))===void 0?Le(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},l.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=Un(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{pt(e,i,u)}catch{}return u})},l.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return Wn(t,[e],a)}).then(function(a){return a.numFailures?Y.reject(a.failures[0]):void 0})})},l.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:tr}).then(function(n){return Wn(e,null,n)})}).then(function(t){return t.numFailures?Y.reject(t.failures[0]):void 0})},l.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},l.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,$=u.auto,u=u.keyPath;if(u&&s)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,$=u&&$?e.map(Un(u)):e;return a.core.mutate({trans:c,type:"add",keys:s,values:$,wantResults:i}).then(function(y){var b=y.numFailures,x=y.failures;if(b===0)return i?y.results:y.lastResult;throw new Sn("".concat(a.name,".bulkAdd(): ").concat(b," of ").concat(v," operations failed"),x)})})},l.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,$=u.auto,u=u.keyPath;if(u&&s)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,$=u&&$?e.map(Un(u)):e;return a.core.mutate({trans:c,type:"put",keys:s,values:$,wantResults:i}).then(function(y){var b=y.numFailures,x=y.failures;if(b===0)return i?y.results:y.lastResult;throw new Sn("".concat(a.name,".bulkPut(): ").concat(b," of ").concat(v," operations failed"),x)})})},l.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(c){return c.key}),s=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:a,cache:"clone"}).then(function(u){var v=[],$=[],y=(e.forEach(function(b,x){var w=b.key,m=b.changes,g=u[x];if(g){for(var E=0,B=Object.keys(m);E<B.length;E++){var k=B[E],P=m[k];if(k===t.schema.primKey.keyPath){if(ue(P,w)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else pt(g,k,P)}i.push(x),v.push(w),$.push(g)}}),v.length);return n.mutate({trans:c,type:"put",keys:v,values:$,updates:{keys:a,changeSpecs:s}}).then(function(b){var x=b.numFailures,w=b.failures;if(x===0)return y;for(var m=0,g=Object.keys(w);m<g.length;m++){var E,B=g[m],k=i[Number(B)];k!=null&&(E=w[B],delete w[B],w[k]=E)}throw new Sn("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(y," operations failed"),w)})})})},l.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return Wn(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new Sn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var o=l;function l(){}function f(e){function t(c,u){if(u){for(var v=arguments.length,$=new Array(v-1);--v;)$[v-1]=arguments[v];return n[c].subscribe.apply(null,$),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(c,u,v){var $,y;if(typeof c!="object")return u=u||Oa,y={subscribers:[],fire:v=v||xe,subscribe:function(b){y.subscribers.indexOf(b)===-1&&(y.subscribers.push(b),y.fire=u(y.fire,b))},unsubscribe:function(b){y.subscribers=y.subscribers.filter(function(x){return x!==b}),y.fire=y.subscribers.reduce(u,v)}},n[c]=t[c]=y;Ce($=c).forEach(function(b){var x=$[b];if(se(x))i(b,$[b][0],$[b][1]);else{if(x!=="asap")throw new ee.InvalidArgument("Invalid event config");var w=i(b,Ln,function(){for(var m=arguments.length,g=new Array(m);m--;)g[m]=arguments[m];w.subscribers.forEach(function(E){oa(function(){E.apply(null,g)})})})}})}}function d(e,t){return Zt(t).from({prototype:e}),t}function p(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function T(e,t){e.filter=bn(e.filter,t)}function O(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return bn(a(),t())}:t,e.justLimit=n&&!a}function I(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function L(e,t,n){var a=I(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function X(e,t,n,a){var s,i,c=e.replayFilter?bn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(u,v,$){var y,b;c&&!c(v,$,function(x){return v.stop(x)},function(x){return v.fail(x)})||((b=""+(y=v.primaryKey))=="[object ArrayBuffer]"&&(b=""+new Uint8Array(y)),ce(s,b))||(s[b]=!0,t(u,v,$))},Promise.all([e.or._iterate(i,n),W(L(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):W(L(e,a,n),bn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function W(e,t,n,a){var s=Ee(a?function(i,c,u){return n(a(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=xe},function(u){i.fail(u),c=xe})||s(i.value,i,function(u){return c=u}),c()})})}R.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Le.bind(null,n.error)):n.table._trans("readonly",e).then(t)},R.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Le.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},R.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=bn(t.algorithm,e)},R.prototype._iterate=function(e,t){return X(this._ctx,e,t,this._ctx.table.core)},R.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&be(n,e),t._ctx=n,t},R.prototype.raw=function(){return this._ctx.valueMapper=null,this},R.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return X(t,e,n,t.table.core)})},R.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return p(s,!0)?i.count({trans:n,query:{index:I(s,i.schema),range:s.range}}).then(function(c){return Math.min(c,s.limit)}):(a=0,X(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},R.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(v,$){return $?i(v[n[$]],$-1):v[a]}var c=this._ctx.dir==="next"?1:-1;function u(v,$){return ue(i(v,s),i($,s))*c}return this.toArray(function(v){return v.sort(u)}).then(t)},R.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,c=t._ctx;return c.dir==="next"&&p(c,!0)&&0<c.limit?(a=c.valueMapper,s=I(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:s,range:c.range}}).then(function(u){return u=u.result,a?u.map(a):u})):(i=[],X(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},R.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,p(t)?O(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):O(t,function(){var n=e;return function(){return--n<0}})),this},R.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),O(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},R.prototype.until=function(e,t){return T(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},R.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},R.prototype.last=function(e){return this.reverse().first(e)},R.prototype.filter=function(e){var t;return T(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=bn(t.isMatch,e),this},R.prototype.and=function(e){return this.filter(e)},R.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},R.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},R.prototype.desc=function(){return this.reverse()},R.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},R.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},R.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},R.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},R.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&p(t,!0)&&0<t.limit)return this._read(function(a){var s=I(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},R.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},R.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},R.prototype.lastKey=function(e){return this.reverse().firstKey(e)},R.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},T(this._ctx,function(a){var a=a.primaryKey.toString(),s=ce(e,a);return e[a]=!0,!s})),this},R.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(g,E){var B=E.failures;x+=g-E.numFailures;for(var k=0,P=Ce(B);k<P.length;k++){var A=P[k];b.push(B[A])}}var i=typeof e=="function"?e:function(g){return sr(g,e)},c=n.table.core,y=c.schema.primaryKey,u=y.outbound,v=y.extractKey,$=200,y=t.db._options.modifyChunkSize,b=(y&&($=typeof y=="object"?y[c.name]||y["*"]||200:y),[]),x=0,w=[],m=e===pe;return t.clone().primaryKeys().then(function(g){function E(k){var P=Math.min($,g.length-k),A=g.slice(k,k+P);return(m?Promise.resolve([]):c.getMany({trans:a,keys:A,cache:"immutable"})).then(function(K){var j=[],D=[],U=u?[]:null,z=m?A:[];if(!m)for(var N=0;N<P;++N){var G=K[N],de={value:vt(G),primKey:g[k+N]};i.call(de,de.value,de)!==!1&&(de.value==null?z.push(g[k+N]):u||ue(v(G),v(de.value))===0?(D.push(de.value),u&&U.push(g[k+N])):(z.push(g[k+N]),j.push(de.value)))}return Promise.resolve(0<j.length&&c.mutate({trans:a,type:"add",values:j}).then(function(oe){for(var te in oe.failures)z.splice(parseInt(te),1);s(j.length,oe)})).then(function(){return(0<D.length||B&&typeof e=="object")&&c.mutate({trans:a,type:"put",keys:U,values:D,criteria:B,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(oe){return s(D.length,oe)})}).then(function(){return(0<z.length||B&&m)&&c.mutate({trans:a,type:"delete",keys:z,criteria:B,isAdditionalChunk:0<k}).then(function(oe){return Wn(n.table,z,oe)}).then(function(oe){return s(z.length,oe)})}).then(function(){return g.length>k+P&&E(k+$)})})}var B=p(n)&&n.limit===1/0&&(typeof e!="function"||m)&&{index:n.index,range:n.range};return E(0).then(function(){if(0<b.length)throw new St("Error modifying one or more objects",b,x,w);return g.length})})})},R.prototype.delete=function(){var e=this._ctx,t=e.range;return!p(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(pe):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(v){var u=v.failures,v=v.numFailures;if(v)throw new St("Could not delete some values",Object.keys(u).map(function($){return u[$]}),i-v);return i-v})})})};var Z=R;function R(){}var pe=function(e,t){return t.value=null};function Be(e,t){return e<t?-1:e===t?0:1}function He(e,t){return t<e?-1:e===t?0:1}function ne(e,t,n){return e=e instanceof Lt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function $e(e){return new e.Collection(e,function(){return Xe("")}).limit(0)}function Je(w,t,n,a){var s,i,c,u,v,$,y,b=n.length;if(!n.every(function(g){return typeof g=="string"}))return ne(w,Mn);function x(g){s=g==="next"?function(B){return B.toUpperCase()}:function(B){return B.toLowerCase()},i=g==="next"?function(B){return B.toLowerCase()}:function(B){return B.toUpperCase()},c=g==="next"?Be:He;var E=n.map(function(B){return{lower:i(B),upper:s(B)}}).sort(function(B,k){return c(B.lower,k.lower)});u=E.map(function(B){return B.upper}),v=E.map(function(B){return B.lower}),y=($=g)==="next"?"":a}x("next");var w=new w.Collection(w,function(){return ve(u[0],v[b-1]+a)}),m=(w._ondirectionchange=function(g){x(g)},0);return w._addAlgorithm(function(g,E,B){var k=g.key;if(typeof k=="string"){var P=i(k);if(t(P,v,m))return!0;for(var A=null,K=m;K<b;++K){var j=((D,U,z,N,G,de)=>{for(var oe=Math.min(D.length,N.length),te=-1,le=0;le<oe;++le){var Ae=U[le];if(Ae!==N[le])return G(D[le],z[le])<0?D.substr(0,le)+z[le]+z.substr(le+1):G(D[le],N[le])<0?D.substr(0,le)+N[le]+z.substr(le+1):0<=te?D.substr(0,te)+U[te]+z.substr(te+1):null;G(D[le],Ae)<0&&(te=le)}return oe<N.length&&de==="next"?D+z.substr(D.length):oe<D.length&&de==="prev"?D.substr(0,z.length):te<0?null:D.substr(0,te)+N[te]+z.substr(te+1)})(k,P,u[K],v[K],c,$);j===null&&A===null?m=K+1:(A===null||0<c(A,j))&&(A=j)}E(A!==null?function(){g.continue(A+y)}:B)}return!1}),w}function ve(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function Xe(e){return{type:1,lower:e,upper:e}}Object.defineProperty(F.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),F.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?$e(this):new this.Collection(this,function(){return ve(e,t,!n,!a)})}catch{return ne(this,Gt)}},F.prototype.equals=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return Xe(e)})},F.prototype.above=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return ve(e,void 0,!0)})},F.prototype.aboveOrEqual=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return ve(e,void 0,!1)})},F.prototype.below=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return ve(void 0,e,!1,!0)})},F.prototype.belowOrEqual=function(e){return e==null?ne(this,Gt):new this.Collection(this,function(){return ve(void 0,e)})},F.prototype.startsWith=function(e){return typeof e!="string"?ne(this,Mn):this.between(e,e+mn,!0,!0)},F.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):Je(this,function(t,n){return t.indexOf(n[0])===0},[e],mn)},F.prototype.equalsIgnoreCase=function(e){return Je(this,function(t,n){return t===n[0]},[e],"")},F.prototype.anyOfIgnoreCase=function(){var e=fe.apply(at,arguments);return e.length===0?$e(this):Je(this,function(t,n){return n.indexOf(t)!==-1},e,"")},F.prototype.startsWithAnyOfIgnoreCase=function(){var e=fe.apply(at,arguments);return e.length===0?$e(this):Je(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,mn)},F.prototype.anyOf=function(){var e,t,n=this,a=fe.apply(at,arguments),s=this._cmp;try{a.sort(s)}catch{return ne(this,Gt)}return a.length===0?$e(this):((e=new this.Collection(this,function(){return ve(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,c,u){for(var v=i.key;0<s(v,a[t]);)if(++t===a.length)return c(u),!1;return s(v,a[t])===0||(c(function(){i.continue(a[t])}),!1)}),e)},F.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},F.prototype.noneOf=function(){var e=fe.apply(at,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ne(this,Gt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},F.prototype.inAnyRange=function(e,B){var n=this,a=this._cmp,s=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return $e(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return ne(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var v=!B||B.includeLowers!==!1,$=B&&B.includeUppers===!0,y,b=s;function x(k,P){return b(k[0],P[0])}try{(y=e.reduce(function(k,P){for(var A=0,K=k.length;A<K;++A){var j=k[A];if(a(P[0],j[1])<0&&0<a(P[1],j[0])){j[0]=c(j[0],P[0]),j[1]=u(j[1],P[1]);break}}return A===K&&k.push(P),k},[])).sort(x)}catch{return ne(this,Gt)}var w=0,m=$?function(k){return 0<s(k,y[w][1])}:function(k){return 0<=s(k,y[w][1])},g=v?function(k){return 0<i(k,y[w][0])}:function(k){return 0<=i(k,y[w][0])},E=m,B=new this.Collection(this,function(){return ve(y[0][0],y[y.length-1][1],!v,!$)});return B._ondirectionchange=function(k){b=k==="next"?(E=m,s):(E=g,i),y.sort(x)},B._addAlgorithm(function(k,P,A){for(var K,j=k.key;E(j);)if(++w===y.length)return P(A),!1;return!m(K=j)&&!g(K)||(n._cmp(j,y[w][1])===0||n._cmp(j,y[w][0])===0||P(function(){b===s?k.continue(y[w][0]):k.continue(y[w][1])}),!1)}),B},F.prototype.startsWithAnyOf=function(){var e=fe.apply(at,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?$e(this):this.inAnyRange(e.map(function(t){return[t,t+mn]})):ne(this,"startsWithAnyOf() only works with strings")};var Lt=F;function F(){}function qe(e){return Ee(function(t){return Qe(t),e(t.target.error),!1})}function Qe(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var dt="storagemutated",xt="x-storagemutated-1",ie=f(null,dt),wt=(me.prototype._lock=function(){return Dn(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},me.prototype._unlock=function(){if(Dn(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{vn(e[1],e[0])}catch{}}return this},me.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},me.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Dn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(a);case"MissingAPIError":throw new ee.MissingAPI(a.message,a);default:throw new ee.OpenFailed(a)}if(!this.active)throw new ee.TransactionInactive;Dn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ee(function(s){Qe(s),t._reject(e.error)}),e.onabort=Ee(function(s){Qe(s),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Ee(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&ie.storagemutated.fire(e.mutatedParts)})}return this},me.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Le(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Y(function(i,c){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,c)},H])}):n?nn(function(){var i=new Y(function(c,u){s._lock();var v=t(c,u,s);v&&v.then&&v.then(c,u)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new Y(function(i,c){var u=t(i,c,s);u&&u.then&&u.then(i,c)}))._lib=!0,a):Le(new ee.TransactionInactive)},me.prototype._root=function(){return this.parent?this.parent._root():this},me.prototype.waitFor=function(e){var t,n=this._root(),a=Y.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new Y(function(i,c){a.then(function(u){return n._waitingQueue.push(Ee(i.bind(null,u)))},function(u){return n._waitingQueue.push(Ee(c.bind(null,u)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},me.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},me.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ce(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},me);function me(){}function Ke(e,t,n,a,s,i,c,u){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!c?"&":"")+(a?"*":"")+(s?"++":"")+ze(t),type:u}}function ze(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function je(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,c){return i=a(i,c),i&&(s[i[0]]=i[1]),s},{}))};var a}var Me=function(e){try{return e.only([[]]),Me=function(){return[[]]},[[]]}catch{return Me=function(){return mn},mn}};function nt(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Yt(n,t)}:function(n){return Yt(n,e)};var t}function yn(e){return[].slice.call(e)}var Ht=0;function lt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function kt(e,t,v){function a(m){if(m.type===3)return null;if(m.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var b=m.lower,x=m.upper,w=m.lowerOpen,m=m.upperOpen;return b===void 0?x===void 0?null:t.upperBound(x,!!m):x===void 0?t.lowerBound(b,!!w):t.bound(b,x,!!w,!!m)}function s(y){var b,x=y.name;return{name:x,schema:y,mutate:function(w){var m=w.trans,g=w.type,E=w.keys,B=w.values,k=w.range;return new Promise(function(P,A){P=Ee(P);var K=m.objectStore(x),j=K.keyPath==null,D=g==="put"||g==="add";if(!D&&g!=="delete"&&g!=="deleteRange")throw new Error("Invalid operation type: "+g);var U,z=(E||B||{length:1}).length;if(E&&B&&E.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(z===0)return P({numFailures:0,failures:{},results:[],lastResult:void 0});function N(De){++oe,Qe(De)}var G=[],de=[],oe=0;if(g==="deleteRange"){if(k.type===4)return P({numFailures:oe,failures:de,results:[],lastResult:void 0});k.type===3?G.push(U=K.clear()):G.push(U=K.delete(a(k)))}else{var j=D?j?[B,E]:[B,null]:[E,null],te=j[0],le=j[1];if(D)for(var Ae=0;Ae<z;++Ae)G.push(U=le&&le[Ae]!==void 0?K[g](te[Ae],le[Ae]):K[g](te[Ae])),U.onerror=N;else for(Ae=0;Ae<z;++Ae)G.push(U=K[g](te[Ae])),U.onerror=N}function Pt(De){De=De.target.result,G.forEach(function(wn,vr){return wn.error!=null&&(de[vr]=wn.error)}),P({numFailures:oe,failures:de,results:g==="delete"?E:G.map(function(wn){return wn.result}),lastResult:De})}U.onerror=function(De){N(De),Pt(De)},U.onsuccess=Pt})},getMany:function(w){var m=w.trans,g=w.keys;return new Promise(function(E,B){E=Ee(E);for(var k,P=m.objectStore(x),A=g.length,K=new Array(A),j=0,D=0,U=function(G){G=G.target,K[G._pos]=G.result,++D===j&&E(K)},z=qe(B),N=0;N<A;++N)g[N]!=null&&((k=P.get(g[N]))._pos=N,k.onsuccess=U,k.onerror=z,++j);j===0&&E(K)})},get:function(w){var m=w.trans,g=w.key;return new Promise(function(E,B){E=Ee(E);var k=m.objectStore(x).get(g);k.onsuccess=function(P){return E(P.target.result)},k.onerror=qe(B)})},query:(b=u,function(w){return new Promise(function(m,g){m=Ee(m);var E,B,k,D=w.trans,P=w.values,A=w.limit,j=w.query,K=A===1/0?void 0:A,U=j.index,j=j.range,D=D.objectStore(x),D=U.isPrimaryKey?D:D.index(U.name),U=a(j);if(A===0)return m({result:[]});b?((j=P?D.getAll(U,K):D.getAllKeys(U,K)).onsuccess=function(z){return m({result:z.target.result})},j.onerror=qe(g)):(E=0,B=!P&&"openKeyCursor"in D?D.openKeyCursor(U):D.openCursor(U),k=[],B.onsuccess=function(z){var N=B.result;return!N||(k.push(P?N.value:N.primaryKey),++E===A)?m({result:k}):void N.continue()},B.onerror=qe(g))})}),openCursor:function(w){var m=w.trans,g=w.values,E=w.query,B=w.reverse,k=w.unique;return new Promise(function(P,A){P=Ee(P);var D=E.index,K=E.range,j=m.objectStore(x),j=D.isPrimaryKey?j:j.index(D.name),D=B?k?"prevunique":"prev":k?"nextunique":"next",U=!g&&"openKeyCursor"in j?j.openKeyCursor(a(K),D):j.openCursor(a(K),D);U.onerror=qe(A),U.onsuccess=Ee(function(z){var N,G,de,oe,te=U.result;te?(te.___id=++Ht,te.done=!1,N=te.continue.bind(te),G=(G=te.continuePrimaryKey)&&G.bind(te),de=te.advance.bind(te),oe=function(){throw new Error("Cursor not stopped")},te.trans=m,te.stop=te.continue=te.continuePrimaryKey=te.advance=function(){throw new Error("Cursor not started")},te.fail=Ee(A),te.next=function(){var le=this,Ae=1;return this.start(function(){return Ae--?le.continue():le.stop()}).then(function(){return le})},te.start=function(le){function Ae(){if(U.result)try{le()}catch(De){te.fail(De)}else te.done=!0,te.start=function(){throw new Error("Cursor behind last entry")},te.stop()}var Pt=new Promise(function(De,wn){De=Ee(De),U.onerror=qe(wn),te.fail=wn,te.stop=function(vr){te.stop=te.continue=te.continuePrimaryKey=te.advance=oe,De(vr)}});return U.onsuccess=Ee(function(De){U.onsuccess=Ae,Ae()}),te.continue=N,te.continuePrimaryKey=G,te.advance=de,Ae(),Pt},P(te)):P(null)},A)})},count:function(w){var m=w.query,g=w.trans,E=m.index,B=m.range;return new Promise(function(k,P){var A=g.objectStore(x),A=E.isPrimaryKey?A:A.index(E.name),K=a(B),K=K?A.count(K):A.count();K.onsuccess=Ee(function(j){return k(j.target.result)}),K.onerror=qe(P)})}}}i=v,c=yn((v=e).objectStoreNames);var i,v={schema:{name:v.name,tables:c.map(function(y){return i.objectStore(y)}).map(function(y){var b=y.keyPath,x=y.autoIncrement,m=se(b),w={},m={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:b==null,compound:m,keyPath:b,autoIncrement:x,unique:!0,extractKey:nt(b)},indexes:yn(y.indexNames).map(function(g){return y.index(g)}).map(function(k){var P=k.name,E=k.unique,B=k.multiEntry,k=k.keyPath,P={name:P,compound:se(k),keyPath:k,unique:E,multiEntry:B,extractKey:nt(k)};return w[lt(k)]=P}),getIndexByKeyPath:function(g){return w[lt(g)]}};return w[":id"]=m.primaryKey,b!=null&&(w[lt(b)]=m.primaryKey),m})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=v.schema,u=v.hasGetAll,v=c.tables.map(s),$={};return v.forEach(function(y){return $[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if($[y])return $[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Me(t),schema:c}}function Pn(e,t,n,a){return n=n.IDBKeyRange,t=kt(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,J(J({},s),i(s))},t)}}function we(e,t){var n=t.db,n=Pn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function ye(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(c){var u=(function v($,y){return ra($,y)||($=ut($))&&v($,y)})(c,s);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?ht(c,s,{get:function(){return this.table(s)},set:function(v){ft(this,s,{value:v,writable:!0,configurable:!0,enumerable:!0})}}):c[s]=new e.Table(s,i))})})}function Pe(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Fe(e,t){return e._cfg.version-t._cfg.version}function Ze(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=je("$meta",Hn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),c=(i.create(n),i._completion.catch(a),i._reject.bind(i)),u=H.transless||H;nn(function(){if(H.trans=i,H.transless=u,t!==0)return we(e,n),$=t,((v=i).storeNames.includes("$meta")?v.table("$meta").get("version").then(function(y){return y??$}):Y.resolve($)).then(function(E){var b=e,x=E,w=i,m=n,g=[],E=b._versions,B=b._dbSchema=Bt(0,b.idbdb,m);return(E=E.filter(function(k){return k._cfg.version>=x})).length===0?Y.resolve():(E.forEach(function(k){g.push(function(){var P,A,K,j=B,D=k._cfg.dbschema,U=(_t(b,j,m),_t(b,D,m),B=b._dbSchema=D,qt(j,D)),z=(U.add.forEach(function(N){Kt(m,N[0],N[1].primKey,N[1].indexes)}),U.change.forEach(function(N){if(N.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var G=m.objectStore(N.name);N.add.forEach(function(de){return ct(G,de)}),N.change.forEach(function(de){G.deleteIndex(de.name),ct(G,de)}),N.del.forEach(function(de){return G.deleteIndex(de)})}),k._cfg.contentUpgrade);if(z&&k._cfg.version>x)return we(b,m),w._memoizedTables={},P=Ma(D),U.del.forEach(function(N){P[N]=j[N]}),Pe(b,[b.Transaction.prototype]),ye(b,[b.Transaction.prototype],Ce(P),P),w.schema=P,(A=cn(z))&&_n(),D=Y.follow(function(){var N;(K=z(w))&&A&&(N=an.bind(null,null),K.then(N,N))}),K&&typeof K.then=="function"?Y.resolve(K):D.then(function(){return K})}),g.push(function(P){var A,K,j=k._cfg.dbschema;A=j,K=P,[].slice.call(K.db.objectStoreNames).forEach(function(D){return A[D]==null&&K.db.deleteObjectStore(D)}),Pe(b,[b.Transaction.prototype]),ye(b,[b.Transaction.prototype],b._storeNames,b._dbSchema),w.schema=b._dbSchema}),g.push(function(P){b.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(b.idbdb.version/10)===k._cfg.version?(b.idbdb.deleteObjectStore("$meta"),delete b._dbSchema.$meta,b._storeNames=b._storeNames.filter(function(A){return A!=="$meta"})):P.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return g.length?Y.resolve(g.shift()(w.idbtrans)).then(k):Y.resolve()})().then(function(){Ft(B,m)}))}).catch(c);var v,$;Ce(s).forEach(function(y){Kt(n,y,s[y].primKey,s[y].indexes)}),we(e,n),Y.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function Jt(e,t){Ft(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Bt(0,e.idbdb,t);_t(e,e._dbSchema,t);for(var a=0,s=qt(n,e._dbSchema).change;a<s.length;a++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(v){bt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(v.src)),ct(u,v)})})(s[a]);if(typeof i=="object")return i.value}}function qt(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)c.recreate=!0,a.change.push(c);else{var u=s.idxByName,v=i.idxByName,$=void 0;for($ in u)v[$]||c.del.push($);for($ in v){var y=u[$],b=v[$];y?y.src!==b.src&&c.change.push(b):c.add.push(b)}(0<c.del.length||0<c.add.length||0<c.change.length)&&a.change.push(c)}}else a.add.push([n,i])}return a}function Kt(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return ct(s,i)})}function Ft(e,t){Ce(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(bt&&console.debug("Dexie: Creating missing table",n),Kt(t,n,e[n].primKey,e[n].indexes))})}function ct(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Bt(e,t,n){var a={};return sa(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),c=Ke(ze($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),u=[],v=0;v<i.indexNames.length;++v){var y=i.index(i.indexNames[v]),$=y.keyPath,y=Ke(y.name,$,!!y.unique,!!y.multiEntry,!1,$&&typeof $!="string",!1);u.push(y)}a[s]=je(s,c,u)}),a}function _t(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var v,$=c.indexNames[u],y=c.index($).keyPath,y=typeof y=="string"?y:"["+sa(y).join("+")+"]";t[i]&&(v=t[i].idxByName[y])&&(v.name=$,delete t[i].idxByName[y],t[i].idxByName[$]=v)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&re.WorkerGlobalScope&&re instanceof re.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Hn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Ke(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),se(i),n===0,a)})}q.prototype._createTableSchema=je,q.prototype._parseIndexSyntax=Hn,q.prototype._parseStoresSpec=function(e,t){var n=this;Ce(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new ee.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new ee.Schema("Primary key cannot be multiEntry*");s.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},q.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?be(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){be(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,Pe(t,[t._allTables,t,t.Transaction.prototype]),ye(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Ce(s),s),t._storeNames=Ce(s),this},q.prototype.upgrade=function(e){return this._cfg.contentUpgrade=qn(this._cfg.contentUpgrade||xe,e),this};var _=q;function q(){}function st(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Qt(zn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Cn(e){return e&&typeof e.databases=="function"}function Te(e){return nn(function(){return H.letThrough=!0,e()})}function qa(e){return!("from"in e)}var it=function(e,t){var n;if(!this)return n=new it,e&&"d"in e&&be(n,e),n;be(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Tn(e,t,n){var a=ue(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(qa(e))return be(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(ue(n,e.from)<0)return a?Tn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Dt(e);if(0<ue(t,e.to))return s?Tn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Dt(e);ue(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<ue(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&An(e,a),s&&t&&An(e,s)}}function An(e,t){qa(t)||(function n(a,s){var i=s.from,c=s.l,u=s.r;Tn(a,i,s.to),c&&n(a,c),u&&n(a,u)})(e,t)}function ir(e,t){var n=va(t),a=n.next();if(!a.done)for(var s=a.value,i=va(e),c=i.next(s.from),u=c.value;!a.done&&!c.done;){if(ue(u.from,s.to)<=0&&0<=ue(u.to,s.from))return!0;ue(s.from,u.from)<0?s=(a=n.next(u.from)).value:u=(c=i.next(s.from)).value}return!1}function va(e){var t=qa(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&ue(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||ue(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Dt(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=J({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=jt(n)),e.d=jt(e)}function jt(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Mt(e,t){return Ce(t).forEach(function(n){e[n]?An(e[n],t[n]):e[n]=(function a(s){var i,c,u={};for(i in s)ce(s,i)&&(c=s[i],u[i]=!c||typeof c!="object"||Wa.has(c.constructor)?c:a(c));return u})(t[n])}),e}function ma(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&ir(t[n],e[n])})}gt(it.prototype,((rt={add:function(e){return An(this,e),this},addKey:function(e){return Tn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Tn(t,n,n)}),this},hasKey:function(e){var t=va(this).next(e).value;return t&&ue(t.from,e)<=0&&0<=ue(t.to,e)}})[Aa]=function(){return va(this)},rt));var sn={},ga={},ba=!1;function Jn(e){Mt(ga,e),ba||(ba=!0,setTimeout(function(){ba=!1,ya(ga,!(ga={}))},0))}function ya(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(sn);a<s.length;a++)Ka(u=s[a],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=sn["idb://".concat(c,"/").concat(i)])&&Ka(u,e,n,t)}n.forEach(function(v){return v()})}function Ka(e,t,n,a){for(var s=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],v=u[0],$=[],y=0,b=u[1];y<b.length;y++){var x=b[y];ma(t,x.obsSet)?x.subscribers.forEach(function(E){return n.add(E)}):a&&$.push(x)}a&&s.push([v,$])}if(a)for(var w=0,m=s;w<m.length;w++){var g=m[w],v=g[0],$=g[1];e.queries.query[v]=$}}function Mr(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Le(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==a)throw new ee.DatabaseClosed("db.open() was cancelled")}function u(){return new Y(function(x,w){if(c(),!n)throw new ee.MissingAPI;var m=e.name,g=t.autoSchema||!s?n.open(m):n.open(m,s);if(!g)throw new ee.MissingAPI;g.onerror=qe(w),g.onblocked=Ee(e._fireOnBlocked),g.onupgradeneeded=Ee(function(E){var B;y=g.transaction,t.autoSchema&&!e._options.allowEmptyDB?(g.onerror=Qe,y.abort(),g.result.close(),(B=n.deleteDatabase(m)).onsuccess=B.onerror=Ee(function(){w(new ee.NoSuchDatabase("Database ".concat(m," doesnt exist")))})):(y.onerror=qe(w),B=E.oldVersion>Math.pow(2,62)?0:E.oldVersion,b=B<1,e.idbdb=g.result,i&&Jt(e,y),Ze(e,B/10,y,w))},w),g.onsuccess=Ee(function(){y=null;var E,B,k,P,A,K,j=e.idbdb=g.result,D=sa(j.objectStoreNames);if(0<D.length)try{var U=j.transaction((A=D).length===1?A[0]:A,"readonly");if(t.autoSchema)K=j,P=U,(k=e).verno=K.version/10,P=k._dbSchema=Bt(0,K,P),k._storeNames=sa(K.objectStoreNames,0),ye(k,[k._allTables],Ce(P),P);else if(_t(e,e._dbSchema,U),B=U,((B=qt(Bt(0,(E=e).idbdb,B),E._dbSchema)).add.length||B.change.some(function(z){return z.add.length||z.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),s=j.version+1,i=!0,x(u());we(e,U)}catch{}gn.push(e),j.onversionchange=Ee(function(z){t.vcFired=!0,e.on("versionchange").fire(z)}),j.onclose=Ee(function(){e.close({disableAutoOpen:!1})}),b&&(D=e._deps,A=m,Cn(K=D.indexedDB)||A===zn||st(K,D.IDBKeyRange).put({name:A}).catch(xe)),x()},w)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<s)return s=0,u()}return Y.reject(x)})}var v,$=t.dbReadyResolve,y=null,b=!1;return Y.race([a,(typeof navigator>"u"?Y.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function w(){return indexedDB.databases().finally(x)}v=setInterval(w,100),w()}).finally(function(){return clearInterval(v)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],Y.resolve(Te(function(){return e.on.ready.fire(e.vip)})).then(function x(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(qn,xe),t.onReadyBeingFired=[],Y.resolve(Te(function(){return w(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{y&&y.abort()}catch{}return a===t.openCanceller&&e._close(),Le(x)}).finally(function(){t.openComplete=!0,$()}).then(function(){var x;return b&&(x={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(m){m.name&&(x["idb://".concat(e.name,"/").concat(w.name,"/").concat(m.name)]=new it(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(w.name,"/")]=x["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new it(-1/0,[[[]]])}),ie(dt).fire(x),ya(x,!0)),e})}function Xn(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(u){var u=i(u),v=u.value;return u.done?v:v&&typeof v.then=="function"?v.then(n,a):se(v)?Promise.all(v).then(n,a):n(v)}}return s(t)()}function Qn(e,t,n){for(var a=se(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Xt={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return J(J({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function c(x,w,m){var k=lt(x),g=s[k]=s[k]||[],E=x==null?0:typeof x=="string"?1:x.length,B=0<w,k=J(J({},m),{name:B?"".concat(k,"(virtual-from:").concat(m.name,")"):m.name,lowLevelIndex:m,isVirtual:B,keyTail:w,keyLength:E,extractKey:nt(x),unique:!B&&m.unique});return g.push(k),k.isPrimaryKey||i.push(k),1<E&&c(E===2?x[0]:x.slice(0,E-1),w+1,m),g.sort(function(P,A){return P.keyTail-A.keyTail}),k}var u=c(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[u];for(var v=0,$=a.indexes;v<$.length;v++){var y=$[v];c(y.keyPath,0,y)}function b(x){var w,m=x.query.index;return m.isVirtual?J(J({},x),{query:{index:m.lowLevelIndex,range:(w=x.query.range,m=m.keyTail,{type:w.type===1?2:w.type,lower:Qn(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,m),lowerOpen:!0,upper:Qn(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,m),upperOpen:!0})}}):x}return J(J({},n),{schema:J(J({},a),{primaryKey:u,indexes:i,getIndexByKeyPath:function(x){return(x=s[lt(x)])&&x[0]}}),count:function(x){return n.count(b(x))},query:function(x){return n.query(b(x))},openCursor:function(x){var w=x.query.index,m=w.keyTail,g=w.keyLength;return w.isVirtual?n.openCursor(b(x)).then(function(B){return B&&E(B)}):n.openCursor(x);function E(B){return Object.create(B,{continue:{value:function(k){k!=null?B.continue(Qn(k,x.reverse?e.MAX_KEY:e.MIN_KEY,m)):x.unique?B.continue(B.key.slice(0,g).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,m)):B.continue()}},continuePrimaryKey:{value:function(k,P){B.continuePrimaryKey(Qn(k,e.MAX_KEY,m),P)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var k=B.key;return g===1?k[0]:k.slice(0,g)}},value:{get:function(){return B.value}}})}}})}})}};function ja(e,t,n,a){return n=n||{},a=a||"",Ce(e).forEach(function(s){var i,c,u;ce(t,s)?(i=e[s],c=t[s],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Ta(i))!==Ta(c)?n[a+s]=t[s]:u==="Object"?ja(i,c,n,a+s+"."):i!==c&&(n[a+s]=t[s]):i!==c&&(n[a+s]=t[s])):n[a+s]=void 0}),Ce(t).forEach(function(s){ce(e,s)||(n[a+s]=t[s])}),n}function Rt(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Pr={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return J(J({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return J(J({},n),{mutate:function(s){var i=H.trans,c=i.table(t).hook,u=c.deleting,v=c.creating,$=c.updating;switch(s.type){case"add":if(v.fire===xe)break;return i._promise("readwrite",function(){return y(s)},!0);case"put":if(v.fire===xe&&$.fire===xe)break;return i._promise("readwrite",function(){return y(s)},!0);case"delete":if(u.fire===xe)break;return i._promise("readwrite",function(){return y(s)},!0);case"deleteRange":if(u.fire===xe)break;return i._promise("readwrite",function(){return(function b(x,w,m){return n.query({trans:x,values:!1,query:{index:a,range:w},limit:m}).then(function(g){var E=g.result;return y({type:"delete",keys:E,trans:x}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):E.length<m?{failures:[],numFailures:0,lastResult:void 0}:b(x,J(J({},w),{lower:E[E.length-1],lowerOpen:!0}),m)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function y(b){var x,w,m,g=H.trans,E=b.keys||Rt(a,b);if(E)return(b=b.type==="add"||b.type==="put"?J(J({},b),{keys:E}):J({},b)).type!=="delete"&&(b.values=ge([],b.values)),b.keys&&(b.keys=ge([],b.keys)),x=n,m=E,((w=b).type==="add"?Promise.resolve([]):x.getMany({trans:w.trans,keys:m,cache:"immutable"})).then(function(B){var k=E.map(function(P,A){var K,j,D,U=B[A],z={onerror:null,onsuccess:null};return b.type==="delete"?u.fire.call(z,P,U,g):b.type==="add"||U===void 0?(K=v.fire.call(z,P,b.values[A],g),P==null&&K!=null&&(b.keys[A]=P=K,a.outbound||pt(b.values[A],a.keyPath,P))):(K=ja(U,b.values[A]),(j=$.fire.call(z,K,P,U,g))&&(D=b.values[A],Object.keys(j).forEach(function(N){ce(D,N)?D[N]=j[N]:pt(D,N,j[N])}))),z});return n.mutate(b).then(function(P){for(var A=P.failures,K=P.results,j=P.numFailures,P=P.lastResult,D=0;D<E.length;++D){var U=(K||E)[D],z=k[D];U==null?z.onerror&&z.onerror(A[D]):z.onsuccess&&z.onsuccess(b.type==="put"&&B[D]?b.values[D]:U)}return{failures:A,results:K,numFailures:j,lastResult:P}}).catch(function(P){return k.forEach(function(A){return A.onerror&&A.onerror(P)}),Promise.reject(P)})});throw new Error("Keys missing")}}})}})}};function or(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)ue(t.keys[s],e[i])===0&&(a.push(n?vt(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var lr={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return J(J({},n),{getMany:function(a){var s;return a.cache?(s=or(a.keys,a.trans._cache,a.cache==="clone"))?Y.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?vt(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ra(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Va(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var cr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new it(e.MIN_KEY,e.MAX_KEY);return J(J({},e),{transaction:function(a,s,i){if(H.subscr&&s!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(a,s,i)},table:function(a){function s(E){var g,E=E.query;return[g=E.index,new it((g=(E=E.range).lower)!=null?g:e.MIN_KEY,(g=E.upper)!=null?g:e.MAX_KEY)]}var i=e.table(a),c=i.schema,u=c.primaryKey,v=c.indexes,$=u.extractKey,y=u.outbound,b=u.autoIncrement&&v.filter(function(m){return m.compound&&m.keyPath.includes(u.keyPath)}),x=J(J({},i),{mutate:function(m){function g(G){return G="idb://".concat(t,"/").concat(a,"/").concat(G),A[G]||(A[G]=new it)}var E,B,k,P=m.trans,A=m.mutatedParts||(m.mutatedParts={}),K=g(""),j=g(":dels"),D=m.type,z=m.type==="deleteRange"?[m.range]:m.type==="delete"?[m.keys]:m.values.length<50?[Rt(u,m).filter(function(G){return G}),m.values]:[],U=z[0],z=z[1],N=m.trans._cache;return se(U)?(K.addKeys(U),(D=D==="delete"||U.length===z.length?or(U,N):null)||j.addKeys(U),(D||z)&&(E=g,B=D,k=z,c.indexes.forEach(function(G){var de=E(G.name||"");function oe(le){return le!=null?G.extractKey(le):null}function te(le){G.multiEntry&&se(le)?le.forEach(function(Ae){return de.addKey(Ae)}):de.addKey(le)}(B||k).forEach(function(le,De){var Pt=B&&oe(B[De]),De=k&&oe(k[De]);ue(Pt,De)!==0&&(Pt!=null&&te(Pt),De!=null)&&te(De)})}))):U?(z={from:(N=U.lower)!=null?N:e.MIN_KEY,to:(D=U.upper)!=null?D:e.MAX_KEY},j.add(z),K.add(z)):(K.add(n),j.add(n),c.indexes.forEach(function(G){return g(G.name).add(n)})),i.mutate(m).then(function(G){return!U||m.type!=="add"&&m.type!=="put"||(K.addKeys(G.results),b&&b.forEach(function(de){for(var oe=m.values.map(function(Pt){return de.extractKey(Pt)}),te=de.keyPath.findIndex(function(Pt){return Pt===u.keyPath}),le=0,Ae=G.results.length;le<Ae;++le)oe[le][te]=G.results[le];g(de.name).addKeys(oe)})),P.mutatedParts=Mt(P.mutatedParts||{},A),G})}}),w={get:function(m){return[u,new it(m.key)]},getMany:function(m){return[u,new it().addKeys(m.keys)]},count:s,query:s,openCursor:s};return Ce(w).forEach(function(m){x[m]=function(g){var E=H.subscr,B=!!E,k=Ra(H,i)&&Va(m,g)?g.obsSet={}:E;if(B){var P,E=function(z){return z="idb://".concat(t,"/").concat(a,"/").concat(z),k[z]||(k[z]=new it)},A=E(""),K=E(":dels"),B=w[m](g),j=B[0],B=B[1];if((m==="query"&&j.isPrimaryKey&&!g.values?K:E(j.name||"")).add(B),!j.isPrimaryKey){if(m!=="count")return P=m==="query"&&y&&g.values&&i.query(J(J({},g),{values:!1})),i[m].apply(this,arguments).then(function(z){if(m==="query"){if(y&&g.values)return P.then(function(oe){return oe=oe.result,A.addKeys(oe),z});var N=g.values?z.result.map($):z.result;(g.values?A:K).addKeys(N)}else{var G,de;if(m==="openCursor")return de=g.values,(G=z)&&Object.create(G,{key:{get:function(){return K.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var oe=G.primaryKey;return K.addKey(oe),oe}},value:{get:function(){return de&&A.addKey(G.primaryKey),G.value}}})}return z});K.add(n)}}return i[m].apply(this,arguments)}}),x}})}};function Ya(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=J({},t),se(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&se(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function za(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<ue(n,a.lower):0<=ue(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?ue(n,a.upper)<0:ue(n,a.upper)<=0));var n,a}function ur(e,t,n,a,s,i){var c,u,v,$,y,b;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,v=t.query.range,$=a.schema.primaryKey.extractKey,y=c.extractKey,b=(c.lowLevelIndex||c).extractKey,(a=n.reduce(function(x,w){var m=x,g=[];if(w.type==="add"||w.type==="put")for(var E=new it,B=w.values.length-1;0<=B;--B){var k,P=w.values[B],A=$(P);!E.hasKey(A)&&(k=y(P),u&&se(k)?k.some(function(z){return za(z,v)}):za(k,v))&&(E.addKey(A),g.push(P))}switch(w.type){case"add":var K=new it().addKeys(t.values?x.map(function(N){return $(N)}):x),m=x.concat(t.values?g.filter(function(N){return N=$(N),!K.hasKey(N)&&(K.addKey(N),!0)}):g.map(function(N){return $(N)}).filter(function(N){return!K.hasKey(N)&&(K.addKey(N),!0)}));break;case"put":var j=new it().addKeys(w.values.map(function(N){return $(N)}));m=x.filter(function(N){return!j.hasKey(t.values?$(N):N)}).concat(t.values?g:g.map(function(N){return $(N)}));break;case"delete":var D=new it().addKeys(w.keys);m=x.filter(function(N){return!D.hasKey(t.values?$(N):N)});break;case"deleteRange":var U=w.range;m=x.filter(function(N){return!za($(N),U)})}return m},e))===e)?e:(a.sort(function(x,w){return ue(b(x),b(w))||ue($(x),$(w))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function dr(e,t){return ue(e.lower,t.lower)===0&&ue(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Tr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=ue(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=ue(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function fr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&en(i,s)},3e3))})}var Ca={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return J(J({},e),{transaction:function(n,a,s){var i,c,u=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,u.addEventListener("abort",(c=function(v){return function(){if(i.abort(),a==="readwrite"){for(var $=new Set,y=0,b=n;y<b.length;y++){var x=b[y],w=sn["idb://".concat(t,"/").concat(x)];if(w){var m=e.table(x),g=w.optimisticOps.filter(function(G){return G.trans===u});if(u._explicit&&v&&u.mutatedParts)for(var E=0,B=Object.values(w.queries.query);E<B.length;E++)for(var k=0,P=(j=B[E]).slice();k<P.length;k++)ma((D=P[k]).obsSet,u.mutatedParts)&&(en(j,D),D.subscribers.forEach(function(G){return $.add(G)}));else if(0<g.length){w.optimisticOps=w.optimisticOps.filter(function(G){return G.trans!==u});for(var A=0,K=Object.values(w.queries.query);A<K.length;A++)for(var j,D,U,z=0,N=(j=K[A]).slice();z<N.length;z++)(D=N[z]).res!=null&&u.mutatedParts&&(v&&!D.dirty?(U=Object.isFrozen(D.res),U=ur(D.res,D.req,g,m,D,U),D.dirty?(en(j,D),D.subscribers.forEach(function(G){return $.add(G)})):U!==D.res&&(D.res=U,D.promise=Y.resolve({result:U}))):(D.dirty&&en(j,D),D.subscribers.forEach(function(G){return $.add(G)})))}}}$.forEach(function(G){return G()})}}})(!1),{signal:s}),u.addEventListener("error",c(!1),{signal:s}),u.addEventListener("complete",c(!0),{signal:s})),u},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return J(J({},a),{mutate:function(i){var c,u=H.trans;return!s.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=sn["idb://".concat(t,"/").concat(n)])?(u=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Rt(s,i).some(function(v){return v==null}))?(c.optimisticOps.push(i),i.mutatedParts&&Jn(i.mutatedParts),u.then(function(v){0<v.numFailures&&(en(c.optimisticOps,i),(v=Ya(0,i,v))&&c.optimisticOps.push(v),i.mutatedParts)&&Jn(i.mutatedParts)}),u.catch(function(){en(c.optimisticOps,i),i.mutatedParts&&Jn(i.mutatedParts)})):u.then(function(v){var $=Ya(0,J(J({},i),{values:i.values.map(function(y,b){var x;return v.failures[b]?y:(pt(x=(x=s.keyPath)!=null&&x.includes(".")?vt(y):J({},y),s.keyPath,v.results[b]),x)})}),v);c.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&Jn(i.mutatedParts)})}),u):a.mutate(i)},query:function(i){var c,u,v,$,y,b,x;return Ra(H,a)&&Va("query",i)?(c=((v=H.trans)==null?void 0:v.db._options.cache)==="immutable",u=(v=H).requery,v=v.signal,b=((w,m,g,E)=>{var B=sn["idb://".concat(w,"/").concat(m)];if(!B)return[];if(!(w=B.queries[g]))return[null,!1,B,null];var k=w[(E.query?E.query.index.name:null)||""];if(!k)return[null,!1,B,null];switch(g){case"query":var P=k.find(function(A){return A.req.limit===E.limit&&A.req.values===E.values&&dr(A.req.query.range,E.query.range)});return P?[P,!0,B,k]:[k.find(function(A){return("limit"in A.req?A.req.limit:1/0)>=E.limit&&(!E.values||A.req.values)&&Tr(A.req.query.range,E.query.range)}),!1,B,k];case"count":return P=k.find(function(A){return dr(A.req.query.range,E.query.range)}),[P,!!P,B,k]}})(t,n,"query",i),x=b[0],$=b[2],y=b[3],x&&b[1]?x.obsSet=i.obsSet:(b=a.query(i).then(function(w){var m=w.result;if(x&&(x.res=m),c){for(var g=0,E=m.length;g<E;++g)Object.freeze(m[g]);Object.freeze(m)}else w.result=vt(m);return w}).catch(function(w){return y&&x&&en(y,x),Promise.reject(w)}),x={obsSet:i.obsSet,promise:b,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(x):(y=[x],($=$||(sn["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),fr(x,y,u,v),x.promise.then(function(w){return{result:ur(w.result,i,$?.optimisticOps,a,x,c)}})):a.query(i)}})}})}};function xa(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}_e.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Fe),n.stores({}),this._state.autoSchema=!1),n},_e.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new Y(function(n,a){if(t._state.openComplete)return a(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new ee.DatabaseClosed);t.open().catch(xe)}t._state.dbReadyPromise.then(n,a)}).then(e)},_e.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(c,u){return c.level-u.level}),this},_e.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},_e.prototype.open=function(){var e=this;return vn(tn,function(){return Mr(e)})},_e.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=gn.indexOf(this);if(0<=t&&gn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Y(function(n){e.dbReadyResolve=n}),e.openCanceller=new Y(function(n,a){e.cancelOpen=a}))},_e.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},_e.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new Y(function(s,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=Ee(function(){var v,$,y;v=t._deps,$=t.name,Cn(y=v.indexedDB)||$===zn||st(y,v.IDBKeyRange).delete($).catch(xe),s()}),u.onerror=qe(i),u.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(c):c()})},_e.prototype.backendDB=function(){return this.idbdb},_e.prototype.isOpen=function(){return this.idbdb!==null},_e.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},_e.prototype.hasFailed=function(){return this._state.dbOpenError!==null},_e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(_e.prototype,"tables",{get:function(){var e=this;return Ce(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),_e.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new ee.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Pa(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},_e.prototype._transaction=function(e,t,n){var a,s,i=this,c=H.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===Na)a=Na;else{if(e!="rw"&&e!=La)throw new ee.InvalidArgument("Invalid transaction mode: "+e);a=La}if(c){if(c.mode===Na&&a===La){if(!u)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&s.forEach(function($){if(c&&c.storeNames.indexOf($)===-1){if(!u)throw new ee.SubTransaction("Table "+$+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch($){return c?c._promise(null,function(y,b){b($)}):Le($)}var v=(function $(y,b,x,w,m){return Y.resolve().then(function(){var k=H.transless||H,g=y._createTransaction(b,x,y._dbSchema,w),k=(g.explicit=!0,{trans:g,transless:k});if(w)g.idbtrans=w.idbtrans;else try{g.create(),g.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(P){return P.name===la.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return $(y,b,x,null,m)})):Le(P)}var E,B=cn(m),k=(B&&_n(),Y.follow(function(){var P;(E=m.call(g,g))&&(B?(P=an.bind(null,null),E.then(P,P)):typeof E.next=="function"&&typeof E.throw=="function"&&(E=Xn(E)))},k));return(E&&typeof E.then=="function"?Y.resolve(E).then(function(P){return g.active?P:Le(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return E})).then(function(P){return w&&g._resolve(),g._completion.then(function(){return P})}).catch(function(P){return g._reject(P),Le(P)})})}).bind(null,this,a,s,c,n);return c?c._promise(a,v,"lock"):H.trans?vn(H.transless,function(){return i._whenReady(v)}):this._whenReady(v)},_e.prototype.table=function(e){if(ce(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var Qt=_e;function _e(e,t){var n,a,s,i,c,u=this,v=(this._middlewares={},this.verno=0,_e.dependencies),v=(this._options=t=J({addons:_e.addons,autoOpen:!0,indexedDB:v.indexedDB,IDBKeyRange:v.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:xe,dbReadyPromise:null,cancelOpen:xe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=($.dbReadyPromise=new Y(function(b){$.dbReadyResolve=b}),$.openCanceller=new Y(function(b,x){$.cancelOpen=x}),this._state=$,this.name=e,this.on=f(this,"populate","blocked","versionchange","close",{ready:[qn,xe]}),this.once=function(b,x){var w=function(){for(var m=[],g=0;g<arguments.length;g++)m[g]=arguments[g];u.on(b).unsubscribe(w),x.apply(u,m)};return u.on(b,w)},this.on.ready.subscribe=ia(this.on.ready.subscribe,function(b){return function(x,w){_e.vip(function(){var m,g=u._state;g.openComplete?(g.dbOpenError||Y.resolve().then(x),w&&b(x)):g.onReadyBeingFired?(g.onReadyBeingFired.push(x),w&&b(x)):(b(x),m=u,w||b(function E(){m.on.ready.unsubscribe(x),m.on.ready.unsubscribe(E)}))})}}),this.Collection=(n=this,d(Z.prototype,function(E,g){this.db=n;var w=tr,m=null;if(g)try{w=g()}catch(k){m=k}var g=E._ctx,E=g.table,B=E.hook.reading.fire;this._ctx={table:E,index:g.index,isPrimKey:!g.index||E.schema.primKey.keyPath&&g.index===E.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:m,or:g.or,valueMapper:B!==Ln?B:null}})),this.Table=(a=this,d(o.prototype,function(b,x,w){this.db=a,this._tx=w,this.name=b,this.schema=x,this.hook=a._allTables[b]?a._allTables[b].hook:f(null,{creating:[Xa,xe],reading:[kr,Ln],updating:[Sr,xe],deleting:[$r,xe]})})),this.Transaction=(s=this,d(wt.prototype,function(b,x,w,m,g){var E=this;b!=="readonly"&&x.forEach(function(B){B=(B=w[B])==null?void 0:B.yProps,B&&(x=x.concat(B.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=b,this.storeNames=x,this.schema=w,this.chromeTransactionDurability=m,this.idbtrans=null,this.on=f(this,"complete","error","abort"),this.parent=g||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Y(function(B,k){E._resolve=B,E._reject=k}),this._completion.then(function(){E.active=!1,E.on.complete.fire()},function(B){var k=E.active;return E.active=!1,E.on.error.fire(B),E.parent?E.parent._reject(B):k&&E.idbtrans&&E.idbtrans.abort(),Le(B)})})),this.Version=(i=this,d(_.prototype,function(b){this.db=i,this._cfg={version:b,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,d(Lt.prototype,function(b,x,w){if(this.db=c,this._ctx={table:b,index:x===":id"?null:x,or:w},this._cmp=this._ascending=ue,this._descending=function(m,g){return ue(g,m)},this._max=function(m,g){return 0<ue(m,g)?m:g},this._min=function(m,g){return ue(m,g)<0?m:g},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(b){0<b.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(b){!b.newVersion||b.newVersion<b.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(b.oldVersion/10))}),this._maxKey=Me(t.IDBKeyRange),this._createTransaction=function(b,x,w,m){return new u.Transaction(b,x,w,u._options.chromeTransactionDurability,m)},this._fireOnBlocked=function(b){u.on("blocked").fire(b),gn.filter(function(x){return x.name===u.name&&x!==u&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(b)})},this.use(lr),this.use(Ca),this.use(cr),this.use(Xt),this.use(Pr),new Proxy(this,{get:function(b,x,w){var m;return x==="_vip"||(x==="table"?function(g){return xa(u.table(g),y)}:(m=Reflect.get(b,x,w))instanceof o?xa(m,y):x==="tables"?m.map(function(g){return xa(g,y)}):x==="_createTransaction"?function(){return xa(m.apply(this,arguments),y)}:m)}}));this.vip=y,v.forEach(function(b){return b(u)})}var wa,xn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",hr=(Ua.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Ua.prototype[xn]=function(){return this},Ua);function Ua(e){this._subscribe=e}try{wa={indexedDB:re.indexedDB||re.mozIndexedDB||re.webkitIndexedDB||re.msIndexedDB,IDBKeyRange:re.IDBKeyRange||re.webkitIDBKeyRange}}catch{wa={indexedDB:null,IDBKeyRange:null}}function pr(e){var t,n=!1,a=new hr(function(s){var i=cn(e),c,u=!1,v={},$={},y={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),b&&ie.storagemutated.unsubscribe(w))}},b=(s.start&&s.start(y),!1),x=function(){return Ia(m)},w=function(g){Mt(v,g),ma($,v)&&x()},m=function(){var g,E,B;!u&&wa.indexedDB&&(v={},g={},c&&c.abort(),c=new AbortController,B=(k=>{var P=pn();try{i&&_n();var A=nn(e,k);return A=i?A.finally(an):A}finally{P&&Ct()}})(E={subscr:g,signal:c.signal,requery:x,querier:e,trans:null}),Promise.resolve(B).then(function(k){n=!0,t=k,u||E.signal.aborted||(v={},(P=>{for(var A in P)if(ce(P,A))return;return 1})($=g)||b||(ie(dt,w),b=!0),Ia(function(){return!u&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||u||Ia(function(){u||s.error&&s.error(k)})}))};return setTimeout(x,0),y});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var et=Qt;function On(e){var t=on;try{on=!0,ie.storagemutated.fire(e),ya(e,!0)}finally{on=t}}gt(et,J(J({},It),{delete:function(e){return new et(e,{addons:[]}).delete()},exists:function(e){return new et(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=et.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(Cn(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==zn})}):st(n,t).toCollection().primaryKeys()).then(e)}catch{return Le(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){be(this,e)}},ignoreTransaction:function(e){return H.trans?vn(H.transless,e):e()},vip:Te,async:function(e){return function(){try{var t=Xn(e.apply(this,arguments));return t&&typeof t.then=="function"?t:Y.resolve(t)}catch(n){return Le(n)}}},spawn:function(e,t,n){try{var a=Xn(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:Y.resolve(a)}catch(s){return Le(s)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=Y.resolve(typeof e=="function"?et.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:Y,debug:{get:function(){return bt},set:function(e){Fa(e)}},derive:Zt,extend:be,props:gt,override:ia,Events:f,on:ie,liveQuery:pr,extendObservabilitySet:Mt,getByKeyPath:Yt,setByKeyPath:pt,delByKeyPath:function(e,t){typeof t=="string"?pt(e,t,void 0):"length"in t&&[].map.call(t,function(n){pt(e,n,void 0)})},shallowClone:Ma,deepClone:vt,getObjectDiff:ja,cmp:ue,asap:oa,minKey:-1/0,addons:[],connections:gn,errnames:la,dependencies:wa,cache:sn,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),et.maxKey=Me(et.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ie(dt,function(e){on||(e=new CustomEvent(xt,{detail:e}),on=!0,dispatchEvent(e),on=!1)}),addEventListener(xt,function(e){e=e.detail,on||On(e)}));var Re,on=!1,ln=function(){};return typeof BroadcastChannel<"u"&&((ln=function(){(Re=new BroadcastChannel(xt)).onmessage=function(e){return e.data&&On(e.data)}})(),typeof Re.unref=="function"&&Re.unref(),ie(dt,function(e){on||Re.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Qt.disableBfCache&&e.persisted){bt&&console.debug("Dexie: handling persisted pagehide"),Re?.close();for(var t=0,n=gn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Qt.disableBfCache&&e.persisted&&(bt&&console.debug("Dexie: handling persisted pageshow"),ln(),On({all:new it(-1/0,[[]])}))})),Y.rejectionMapper=function(e,t){return!e||e instanceof un||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Ja[e.name]?e:(t=new Ja[e.name](t||e.message,e),"stack"in e&&ht(t,"stack",{get:function(){return this.inner.stack}}),t)},Fa(bt),J(Qt,Object.freeze({__proto__:null,Dexie:Qt,Entity:nr,PropModification:Gn,RangeSet:it,add:function(e){return new Gn({add:e})},cmp:ue,default:Qt,liveQuery:pr,mergeRanges:An,rangesOverlap:ir,remove:function(e){return new Gn({remove:e})},replacePrefix:function(e,t){return new Gn({replacePrefix:[e,t]})}}),{default:Qt}),Qt})})(gr)),gr.exports}var Ls=Ns();const Or=Ds(Ls),us=Symbol.for("Dexie"),br=globalThis[us]||(globalThis[us]=Or);if(Or.semVer!==br.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Or.semVer} and ${br.semVer}`);const{liveQuery:Qs,mergeRanges:Zs,rangesOverlap:ei,RangeSet:ti,cmp:ni,Entity:ai,PropModification:ri,replacePrefix:si,add:ii,remove:oi,DexieYProvider:li}=br,Ve=new br("haushaltsbuch-db");Ve.version(1).stores({years:"year",fixedTemplateState:"id"});Ve.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Ve.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Ba="singleton";function yr(){return new Date().toISOString()}async function aa(){return Ve.years.orderBy("year").toArray()}async function qs(M){return Ve.years.get(M)}async function na(M){await Ve.years.put(M)}async function Fr(){const M=await Ve.fixedTemplateState.get(Ba);if(!M){const h={id:Ba,templates:[],version:yr(),updatedAt:new Date().toISOString()};return await Ve.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Dr(M){const h=yr();return await Ve.fixedTemplateState.put({id:Ba,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Ir(){const M=await Ve.annualVariableFixedTemplateState.get(Ba);if(!M){const h={id:Ba,templates:[],version:yr(),updatedAt:new Date().toISOString()};return await Ve.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Nr(M){const h=yr();return await Ve.annualVariableFixedTemplateState.put({id:Ba,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Ks(M){await Ve.auditLog.put(M)}async function Lr(){return Ve.auditLog.orderBy("timestampIso").toArray()}async function js(M){await Ve.auditLog.clear(),M.length!==0&&await Ve.auditLog.bulkPut(M)}async function Rs(){const M=await aa(),[h,Oe,J]=await Promise.all([Fr(),Ir(),Lr()]);return{exportedAt:new Date().toISOString(),years:M,fixedTemplates:h.templates,annualVariableFixedTemplates:Oe.templates,auditLogEntries:J}}async function Vs(M){await Ve.transaction("rw",[Ve.years,Ve.fixedTemplateState,Ve.annualVariableFixedTemplateState,Ve.auditLog],async()=>{await Ve.years.clear(),await Ve.years.bulkPut(M.years),await Dr(M.fixedTemplates),await Nr(M.annualVariableFixedTemplates??[]),await js(M.auditLogEntries??[])})}function Ie(M){const h=M.replace(",",".").trim();if(!h)return 0;const Oe=Number.parseFloat(h);return Number.isNaN(Oe)?0:Math.round(Oe*100)}const Ys=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function C(M){return Ys.format(M/100)}function mt(M){return(M/100).toFixed(2)}function Se(M){return new Date(2026,M-1,1).toLocaleDateString("de-DE",{month:"long"})}const ps=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function ds(M){return ps.includes(M)}function zs(M){switch(M){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const fs=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Us(M){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Oe="habu-theme",J="habu-backup-dirty",ge="habu-unexported-change-log",re="habu-last-backup-filename",Ce="habu-recurring-budget-defaults";let se=null,be=null,ut=null,Ye=null,ce=!1,gt=!1;const ft=new WeakMap;function ht(){const o=M.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),p=l.getPropertyValue("--table-stripe").trim(),T=l.getPropertyValue("--table-border").trim(),O=l.getPropertyValue("--budget-under").trim(),I=l.getPropertyValue("--danger-2").trim(),L=96,X=250,W=Z=>1-Math.pow(1-Math.max(0,Math.min(1,Z)),3);o.forEach(Z=>{Z.dataset.hoverBound!=="1"&&(Z.dataset.hoverBound="1",Z.addEventListener("mouseenter",()=>{Z.dataset.hovering="1",ht()}),Z.addEventListener("mouseleave",()=>{delete Z.dataset.hovering,delete Z.dataset.hoverX,ht()}),Z.addEventListener("mousemove",we=>{const ye=Z.getBoundingClientRect(),Pe=Math.round(we.clientX-ye.left);Z.dataset.hoverX=String(Pe),ht()}));const R=Number.parseInt(Z.dataset.budgetCents??"0",10),pe=Number.parseInt(Z.dataset.actualCents??"0",10),Be=Z.dataset.label??"Kategorie",He=Z.dataset.hovering==="1",ne=`${Be}|${R}|${pe}`,$e=Z.dataset.lastRenderSignature!==ne;Z.dataset.lastRenderSignature=ne;const Je=Math.max(120,Math.floor(Z.clientWidth||120)),ve=window.devicePixelRatio||1,Xe=Math.floor(Je*ve),Lt=Math.floor(L*ve);(Z.width!==Xe||Z.height!==Lt)&&(Z.width=Xe,Z.height=Lt);const F=Z.getContext("2d");if(!F)return;const qe=Math.max(1,R,pe),Qe=Math.min(1,Math.max(0,R/qe)),dt=Math.min(1,Math.max(0,pe/qe)),xt=R-pe,ie=R>0?pe/R*100:pe>0?100:0,wt=8,me=wt,Ke=34,ze=Je-wt*2,je=22,Me=Number.parseInt(Z.dataset.hoverX??"-1",10),nt=(we,ye,Pe,Fe,Ze)=>{F.beginPath(),F.moveTo(we+Ze,ye),F.lineTo(we+Pe-Ze,ye),F.quadraticCurveTo(we+Pe,ye,we+Pe,ye+Ze),F.lineTo(we+Pe,ye+Fe-Ze),F.quadraticCurveTo(we+Pe,ye+Fe,we+Pe-Ze,ye+Fe),F.lineTo(we+Ze,ye+Fe),F.quadraticCurveTo(we,ye+Fe,we,ye+Fe-Ze),F.lineTo(we,ye+Ze),F.quadraticCurveTo(we,ye,we+Ze,ye),F.closePath()},yn=we=>{F.setTransform(1,0,0,1,0,0),F.clearRect(0,0,Z.width,Z.height),F.scale(ve,ve),nt(me,Ke,ze,je,8),F.fillStyle=p,F.fill(),F.strokeStyle=T,F.lineWidth=1,F.stroke();const ye=[.6,.25,.15],Pe=[.1,.16,.24];let Fe=0;ye.forEach((Ft,ct)=>{const Bt=ze*Ft;F.save(),F.globalAlpha=Pe[ct]??.1,F.fillStyle=d,F.fillRect(me+Fe,Ke,Bt,je),F.restore(),Fe+=Bt});const Ze=R>0&&pe>R?I:O,Jt=ze*dt*we;nt(me,Ke+3,Jt,je-6,6),F.fillStyle=Ze,F.fill(),He&&(F.save(),F.strokeStyle=Ze,F.lineWidth=1.5,F.globalAlpha=.8,nt(me-1,Ke+2,Math.max(2,Jt+2),je-4,7),F.stroke(),F.restore());const qt=me+ze*Qe;F.strokeStyle=f,F.lineWidth=He?3:2,F.beginPath(),F.moveTo(qt,Ke-3),F.lineTo(qt,Ke+je+3),F.stroke(),He&&Me>=me&&Me<=me+ze&&(F.save(),F.strokeStyle=f,F.globalAlpha=.35,F.lineWidth=1,F.beginPath(),F.moveTo(Me,Ke-8),F.lineTo(Me,Ke+je+8),F.stroke(),F.restore()),F.fillStyle=f,F.font="600 12px system-ui, -apple-system, sans-serif",F.textAlign="left",F.textBaseline="top",F.fillText(Be,me,10);const Kt=ie*we;if(F.fillStyle=ie>100?I:ie<100?O:d,F.textAlign="right",F.fillText(`${Kt.toFixed(0)}%`,me+ze,10),F.fillStyle=d,F.font="500 11px system-ui, -apple-system, sans-serif",F.textAlign="left",F.textBaseline="top",F.fillText(`Ist ${C(pe)} · Ziel ${C(R)} · Δ ${xt>=0?"+":""}${C(xt)}`,me,64),He){const Ft=`Nutzung ${ie.toFixed(1)}%`;F.font="600 11px system-ui, -apple-system, sans-serif";const ct=8,Bt=5,_t=22,_=F.measureText(Ft).width+ct*2,q=Number.isFinite(Me)?Me-_/2:me+ze-_,st=Math.min(me+ze-_,Math.max(me,q)),Cn=Ke-_t-8;F.save(),F.fillStyle=f,F.globalAlpha=.92,nt(st,Cn,_,_t,6),F.fill(),F.restore(),F.fillStyle=p,F.textAlign="left",F.textBaseline="top",F.fillText(Ft,st+ct,Cn+Bt)}},Ht=ft.get(Z);if(Ht&&window.cancelAnimationFrame(Ht),!$e){yn(1);return}const lt=performance.now(),kt=we=>{const ye=we-lt,Pe=Math.min(1,ye/X);if(yn(W(Pe)),Pe<1){const Fe=window.requestAnimationFrame(kt);ft.set(Z,Fe);return}ft.delete(Z)},Pn=window.requestAnimationFrame(kt);ft.set(Z,Pn)})}function Zt(){M.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),p=l.querySelector("[data-year-trend-active-net]"),T=l.querySelector("[data-year-trend-active-income]"),O=l.querySelector("[data-year-trend-active-expense]"),I=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!p||!T||!O||!I)return;const X=(R,pe)=>{R.classList.remove("danger","budget-under");const Be=pe<0?"danger":pe>0?"budget-under":"";Be&&R.classList.add(Be)},W=R=>{const pe=R.dataset.monthLabel??"-",Be=Number.parseInt(R.dataset.netCents??"0",10),He=Number.parseInt(R.dataset.actualNetCents??"0",10),ne=Number.parseInt(R.dataset.incomeCents??"0",10),$e=Number.parseInt(R.dataset.expenseCents??"0",10),Je=Number.parseInt(R.dataset.deltaCents??"0",10);d.textContent=pe,p.textContent=C(Be),T.textContent=C(ne),O.textContent=C($e),I.textContent=`${Je>=0?"+":""}${C(Je)}`,X(p,Be),X(I,Je),f.forEach(ve=>{const Xe=ve===R;ve.classList.toggle("is-active",Xe),ve.setAttribute("aria-pressed",String(Xe))}),L&&(L.textContent=`${pe}: Kalkulierter Saldo ${C(Be)}, Ist-Saldo ${C(He)}, Einkommen ${C(ne)}, Ausgaben ${C($e)}`)};f.forEach(R=>{const pe=()=>{W(R)};R.addEventListener("mouseenter",pe),R.addEventListener("focus",pe),R.addEventListener("click",pe)});const Z=f.find(R=>R.dataset.pointDefault==="1")??f[f.length-1];Z&&W(Z)})}function ra(o){if(o==="dashboard"){const l=h.years.slice().sort((d,p)=>p.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ae()}function _a(){h.topModal&&(h.topModal=null,ae())}function sa(){h.showUnexportedChangeLogModal=!0,ae()}function ia(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ae())}function Dn(){h.showPersistentAuditLogModal=!0,ae()}function oa(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ae())}function Yt(){ce||(ce=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),ia();return}if(h.showPersistentAuditLogModal){o.preventDefault(),oa();return}h.topModal&&(o.preventDefault(),_a())}}))}function pt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ma(){const o=M.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",pt())}function Cr(){if(gt)return;gt=!0;const o=()=>{Ma(),ht()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Pa(){if(se&&document.body.contains(se))return se;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return se=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),se=l,l}function Wa(){if(be&&document.body.contains(be))return be;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return be=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),be=l,l}function In(){if(Ye&&document.body.contains(Ye))return Ye;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return Ye=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),Ye=l,l}function vt(){if(!be){ut=null;return}be.innerHTML="",ut=null}function Nn(){Ye&&(Ye.innerHTML="")}function Ta(o,l,f){const d=new Date,p=d.getFullYear(),T=d.getMonth()+1,O=d.getDate(),I=new Date(o,l,0).getDate();if(o<p||o===p&&l<T)return{occurrences:0,remainingDays:0};const L=o===p&&l===T?Math.min(O,I):1,X=Math.max(0,I-L+1);let W=0;for(let Z=L;Z<=I;Z+=1)new Date(o,l-1,Z).getDay()===f&&(W+=1);return{occurrences:W,remainingDays:X}}async function Aa(o,l){const f=Ne();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await Ge(`Wocheneinkauf geplant: ${fs.find(d=>d.value===o)?.label??"Wochentag"} mit ${C(f.weeklyShoppingEstimateCents)} €`),ae())}function xr(){const o=Ne(),l=zt();if(!o||!l)return;const f=In();Nn();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,p=o.weeklyShoppingEstimateCents??0,T=l.year,O=o.month,I=Kn(T,O),L=I?rt(I):{foodCents:0},X=I?I.foodBudgetCents??0:0,W=L.foodCents,Z=X-W;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${fs.map(ie=>`<option value="${ie.value}" ${ie.value===d?"selected":""}>${ie.label}</option>`).join("")}
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
    `;const R=f.querySelector(".weekly-shopping-modal-backdrop"),pe=f.querySelector("#weekly-shopping-weekday"),Be=f.querySelector("#weekly-shopping-estimate"),He=f.querySelector("#weekly-shopping-occurrences"),ne=f.querySelector("#weekly-shopping-total"),$e=f.querySelector("#weekly-shopping-rest-before"),Je=f.querySelector("#weekly-shopping-rest-after"),ve=f.querySelector("#weekly-shopping-days-left"),Xe=f.querySelector("#weekly-shopping-per-day"),Lt=f.querySelector("#weekly-shopping-cancel"),F=f.querySelector("#weekly-shopping-save");function qe(){const ie=Number.parseInt(pe?.value??"1",10);return Number.isInteger(ie)&&ie>=0&&ie<=6?ie:1}function Qe(){return Math.max(0,Ie(Be?.value??"0"))}function dt(){const ie=qe(),wt=Qe(),{occurrences:me,remainingDays:Ke}=Ta(T,O,ie),ze=me*wt,je=Z-ze,Me=Ke>0?Math.trunc(je/Ke):0;He&&(He.textContent=`${me}`),ne&&(ne.textContent=`${C(ze)} €`),$e&&($e.textContent=`${C(Z)} €`),Je&&(Je.textContent=`${C(je)} €`,Je.className=je<0?"danger":je>0?"budget-under":""),ve&&(ve.textContent=`${Ke}`),Xe&&(Xe.textContent=`${C(Me)} €`,Xe.className=Me<0?"danger":Me>0?"budget-under":"")}async function xt(){await Aa(qe(),Qe()),Nn()}Lt?.addEventListener("click",()=>{Nn()}),F?.addEventListener("click",async()=>{await xt()}),pe?.addEventListener("change",()=>{dt()}),Be?.addEventListener("input",()=>{dt()}),Be?.addEventListener("keydown",async ie=>{if(ie.key==="Escape"){ie.preventDefault(),Nn();return}ie.key==="Enter"&&(ie.preventDefault(),await xt())}),R?.addEventListener("click",ie=>{ie.target===R&&Nn()}),window.setTimeout(()=>{Be?.focus(),Be?.select(),dt()},0)}function en(o,l){let f=o;const d=l.min;if(d){const T=Number.parseFloat(d);if(!Number.isNaN(T)){const O=Math.round(T*100);f=Math.max(f,O)}}const p=l.max;if(p){const T=Number.parseFloat(p);if(!Number.isNaN(T)){const O=Math.round(T*100);f=Math.min(f,O)}}return f}function at(o){if(o.disabled)return;const l=Wa();vt(),ut=o;const f=Ie(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${C(f)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${C(f)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${C(f)} €</strong></div>
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
    `;const p=l.querySelector(".amount-modal-backdrop"),T=l.querySelector("#amount-modal-delta"),O=l.querySelector("#amount-modal-next-delta"),I=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),X=l.querySelector("#amount-modal-overwrite"),W=l.querySelector("#amount-modal-apply");function Z(){const ne=Ie(T?.value??"0");return en(f+ne,o)}function R(){const ne=Ie(T?.value??"0");return en(ne,o)}function pe(){O&&(O.textContent=`${C(Z())} €`),I&&(I.textContent=`${C(R())} €`)}function Be(){const ne=ut;if(!ne){vt();return}const $e=Z();vt(),ne.value=mt($e),ne.dispatchEvent(new Event("change",{bubbles:!0}))}function He(){const ne=ut;if(!ne){vt();return}const $e=R();vt(),ne.value=mt($e),ne.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{vt()}),X?.addEventListener("click",()=>{He()}),W?.addEventListener("click",()=>{Be()}),T?.addEventListener("input",()=>{pe()}),T?.addEventListener("keydown",ne=>{if(ne.key==="Escape"){ne.preventDefault(),vt();return}ne.key==="Enter"&&(ne.preventDefault(),Be())}),p?.addEventListener("click",ne=>{ne.target===p&&vt()}),window.setTimeout(()=>{T?.focus(),T?.select(),pe()},0)}function fe(o,l="success"){const f=Pa(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const p=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},p)}function cn(){return new Date().getMonth()+1}function It(){return new Date().getFullYear()}function Ga(o){const l=It(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function un(){return new Date().toISOString().slice(0,10)}function Ha(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function St(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Sn(){const o=localStorage.getItem(Oe);return o&&ds(o)?o:"light"}function la(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Oe,o)}function wr(){return localStorage.getItem(J)==="1"}function ee(o){localStorage.setItem(J,o?"1":"0")}function Ja(){const o=localStorage.getItem(ge);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function xe(o){localStorage.setItem(ge,JSON.stringify(o.slice(-200)))}function Ln(){const o=localStorage.getItem(re);if(!o)return null;const l=o.trim();return l||null}function kr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(Ce);if(!l)return o;try{const f=JSON.parse(l),d=p=>typeof p=="number"&&Number.isFinite(p)?p:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function dn(o){localStorage.setItem(Ce,JSON.stringify(o))}function Xa(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function $r(o){const l=o.trim();l&&localStorage.setItem(re,l)}async function Sr(){Pa(),la(Sn()),h.hasUnexportedChanges=wr(),h.unexportedChangeLog=Ja(),h.persistentAuditLog=await Lr(),h.lastBackupFileName=Ln(),h.recurringBudgetDefaults=kr(),Yt(),Cr();const[o,l,f]=await Promise.all([aa(),Fr(),Ir()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Oa(h.years),pn(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Fa(h.years),o.length>0&&(h.selectedYear=Ga(o),h.selectedMonth=cn()),ae()}function Oa(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const p=Number(d.weeklyShoppingWeekday);Number.isInteger(p)&&p>=0&&p<=6?d.weeklyShoppingWeekday=p:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(p=>{const T=l(p.incomeSource);if(!T){const{incomeSource:O,...I}=p;return I}return{...p,incomeSource:T}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((p,T)=>p+T.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((p,T)=>p+T.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function qn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function bt(o){return o==="fresh"||o==="salary"||!o}async function Fa(o){for(const l of o)await na(l)}function zt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ne(){const o=zt();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function Kn(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function rt(o){const l=o.days.reduce((I,L)=>I+L.foodCents,0),f=o.days.reduce((I,L)=>I+L.goingOutCents,0),d=o.fixedCosts.reduce((I,L)=>I+L.actualCents,0),p=o.variableCosts.reduce((I,L)=>I+L.amountCents,0)+o.variablePositions.reduce((I,L)=>I+L.actualCents,0),T=o.miscCosts.reduce((I,L)=>I+L.amountCents,0),O=l+f+d+p+T;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:T,totalCents:O}}function Nt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((O,I)=>O+I.plannedCents,0),p=o.variablePositions.reduce((O,I)=>O+I.budgetCents,0),T=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??p)+T}function En(o){return o.months.reduce((l,f)=>{const d=rt(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function jn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:rt(l)}))}function Rn(o){const l=o.months.reduce((O,I)=>O+(I.foodBudgetCents??0),0),f=o.months.reduce((O,I)=>O+(I.goingOutBudgetCents??0),0),d=o.months.reduce((O,I)=>O+(I.fixedBudgetCents??I.fixedCosts.reduce((L,X)=>L+X.plannedCents,0)),0),p=o.months.reduce((O,I)=>O+(I.variableBudgetCents??I.variablePositions.reduce((L,X)=>L+X.budgetCents,0)),0),T=o.months.reduce((O,I)=>O+(I.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:T,totalCents:l+f+d+p+T}}function Bn(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,p)=>d+(bt(p.incomeSource)?p.amountCents:0),0),0)}function Ut(o,l){const f=o.months.slice().sort((d,p)=>d.month-p.month)[0];return f?l.get(he(o.year,f.month))?.carriedFromPreviousCents??0:0}function ca(){const o=h.years.slice().sort((d,p)=>d.year-p.year).flatMap(d=>d.months.slice().sort((p,T)=>p.month-T.month).map(p=>({year:d.year,month:p}))),l=new Map;let f=0;return o.forEach(({year:d,month:p},T)=>{const O=p.carryoverOverrideCents,I=typeof O=="number",L=I?O:f,X=T>0||I,W=p.incomes.reduce((Be,He)=>Be+(bt(He.incomeSource)?He.amountCents:0),0),Z=Nt(p),R=W+L,pe=R-Z;l.set(he(d,p.month),{hasPreviousMonth:X,carriedFromPreviousCents:L,recordedIncomeCents:W,effectiveIncomeCents:R,plannedBudgetCents:Z,netCents:pe}),f=pe}),l}function ot(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function tn(o){return`${o>0?"+":""}${C(o)}`}function H(o,l){const f=o-l,d=ot(l,o);return`${C(o)} <span class="eval-diff ${d}">(Δ ${tn(f)})</span>`}function Wt(o,l){const f=o!==null,d=f?o-l:null,p=f?ot(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${C(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${C(l)} €</strong>
      </div>
      <div class="column-overview-row ${p}">
        <span>Diff</span>
        <strong>${d===null?"-":`${C(d)} €`}</strong>
      </div>
    </div>`}async function fn(o){if(await qs(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=is(o,h.fixedTemplates,h.fixedTemplateVersion);Xa(f),Da(f),await na(f),h.years=await aa(),hn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=cn(),fe(`Jahr ${o} wurde angelegt.`),ae()}function hn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,p={id:Ot("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,p].slice(-200),xe(h.unexportedChangeLog);const T={id:Ot("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,T].slice().sort((O,I)=>O.timestampIso.localeCompare(I.timestampIso)),Ks(T).catch(O=>{console.error("Audit-Log konnte nicht gespeichert werden",O),fe("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Y(o){const l=o.trim();l&&(h.lastBackupFileName=l,$r(l))}function ua(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],xe([]),h.showUnexportedChangeLogModal=!1,Y(o)}async function Ge(o){const l=zt();l&&(await na(l),h.years=await aa(),hn(o))}async function yt(o){for(const l of h.years)await na(l);h.years=await aa(),hn(o)}function he(o,l){return o*100+l}function Vn(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Qa(o,l){const f=Vn(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(T=>T.month===f.month);!d||d.variablePositions.some(T=>T.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Ot("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],Et(d))}function Da(o){h.annualVariableFixedTemplates.forEach(l=>{Qa(l,o)})}function pn(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const p=d.variablePositions.some(O=>typeof O.autoAnnualTemplateId=="string"),T=d.fixedCosts.some(O=>typeof O.autoAnnualTemplateId=="string");p&&(d.variablePositions=d.variablePositions.filter(O=>O.autoAnnualTemplateId?l.has(O.autoAnnualTemplateId):!0),Et(d)),T&&(d.fixedCosts=d.fixedCosts.filter(O=>!O.autoAnnualTemplateId),Ct(d))}),Da(f)})}function Ct(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function Et(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function da(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function Ee(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",da());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function tt(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{if(he(d.year,p.month)<f)return;p.fixedCosts.some(O=>O.templateId===o.id)||(p.fixedCosts.push({id:Ot("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Ct(p))})})}function Er(o,l,f){const d=he(f.year,f.month);h.years.forEach(p=>{p.months.forEach(T=>{he(p.year,T.month)<d||(T.fixedCosts=T.fixedCosts.map(O=>O.templateId!==l.id?O:{...O,name:l.name,plannedCents:l.plannedCents,actualCents:O.actualCents===o.plannedCents?l.plannedCents:O.actualCents}),Ct(T))})})}function fa(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{he(d.year,p.month)<f||(p.fixedCosts=p.fixedCosts.filter(T=>T.templateId!==o),Ct(p))})})}async function ha(o,l){const f=o.trim();if(!f)return;const d=Ee();if(!d)return;const p=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const T=h.fixedTemplates.find(I=>I.id===h.editingFixedTemplateId);if(!T)return;const O={...T,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(I=>I.id===h.editingFixedTemplateId?O:I),Er(T,O,d)}else{const T={id:Ot("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,T],tt(T,d)}h.fixedTemplateVersion=await Dr(h.fixedTemplates),h.editingFixedTemplateId=null,await yt(p?`Fixkosten-Vorlage aktualisiert: ${f} (${C(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${C(l)} €)`),fe(p?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function pa(o){h.editingFixedTemplateId=o,ae()}function Br(){h.editingFixedTemplateId=null,ae()}async function nn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=Ee();if(!f)return;const d=h.fixedTemplates.find(p=>p.id===o);h.fixedTemplates=h.fixedTemplates.filter(p=>p.id!==o),fa(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Dr(h.fixedTemplates),await yt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),fe("Fixkosten-Vorlage wurde gelöscht."),ae()}async function _n(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const p=Vn(l);if(!p){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const T={id:Ot("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,T],h.years.forEach(O=>{Qa(T,O)}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await yt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${C(f)} €, jährlich in ${Se(p.month)})`),fe("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function an(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(p=>{p.variablePositions=p.variablePositions.filter(T=>T.autoAnnualTemplateId!==o),Et(p),p.fixedCosts=p.fixedCosts.filter(T=>T.autoAnnualTemplateId!==o),Ct(p)})}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await yt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),fe("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function Yn(o,l,f){const d=Ne();d&&(d.days=d.days.map(p=>p.isoDate===o?{...p,[l]:f}:p),await Ge(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${C(f)} €`),ae())}async function _r(o,l){const f=Ne();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,actualCents:l}:p),await Ge(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${C(l)} €`),ae()}async function rn(o,l){const f=Ne();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,plannedCents:l}:p),Ct(f),await Ge(`Fixkosten-Budget angepasst: ${d.name} auf ${C(l)} €`),ae())}async function Za(o,l){const f=Ne();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const p={id:Ot("fixed"),templateId:Ot("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[p,...f.fixedCosts],Ct(f),await Ge(`Fixkosten-Position hinzugefügt: ${d} (${C(l)} €)`),fe("Fixkosten-Position wurde hinzugefügt."),ae()}async function vn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Ne();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(p=>p.id!==o),Ct(f),await Ge(`Fixkosten-Position gelöscht: ${d.name}`),fe("Fixkosten-Position wurde gelöscht."),ae())}async function er(o){await Mn("fixedBudgetCents",o,"Fixkosten")}async function Ia(o){await Mn("foodBudgetCents",o,"Essen")}async function Le(o){await Mn("goingOutBudgetCents",o,"Ausgehen")}async function mn(o){await Mn("miscBudgetCents",o,"Sonstiges")}async function Gt(o){await Mn("variableBudgetCents",o,"Variable Kosten")}async function Mn(o,l,f){const d=Ne(),p=h.selectedYear;if(!d||!p||d[o]===l)return;if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const O=he(p,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(L=>{he(I.year,L.month)<=O||(L[o]=l)})}),h.recurringBudgetDefaults[o]=l,dn(h.recurringBudgetDefaults),await yt(`Budget "${f}" auf ${C(l)} € gesetzt (inkl. zukünftiger Monate)`),fe(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ae();return}await Ge(`Budget "${f}" auf ${C(l)} € gesetzt`),ae()}async function gn(o){const l=Ne();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Ge(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${C(o)} € gesetzt`),ae())}async function zn(o,l,f){const d=Ne(),p=h.selectedYear;if(!d||!p)return;const T=o.trim();if(!T){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Ot("varpos"),name:T,budgetCents:l,actualCents:0},...d.variablePositions],Et(d),f){const O=he(p,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(L=>{he(I.year,L.month)<=O||(L.variablePositions=[{id:Ot("varpos"),name:T,budgetCents:l,actualCents:0},...L.variablePositions],Et(L))})}),await yt(`Variable Position hinzugefügt: ${T} (${C(l)} €) für zukünftige Monate`),fe("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Ge(`Variable Position hinzugefügt: ${T} (${C(l)} €)`),fe("Variable Position wurde hinzugefügt."),ae()}async function Na(o,l){const f=Ne();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,actualCents:l}:p),await Ge(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${C(l)} €`),ae()}async function La(o,l){const f=Ne();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,budgetCents:l}:p),Et(f),await Ge(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${C(l)} €`),ae()}async function bn(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Ne(),d=h.selectedYear;if(!f||!d)return;const p=f.variablePositions.find(L=>L.id===o);if(!p)return;const T=he(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>he(L.year,X.month)>T&&X.variablePositions.some(W=>W.name===p.name&&W.budgetCents===p.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),Et(f),I){h.years.forEach(L=>{L.months.forEach(X=>{he(L.year,X.month)<=T||(X.variablePositions=X.variablePositions.filter(W=>!(W.name===p.name&&W.budgetCents===p.budgetCents)),Et(X))})}),await yt(`Variable Position gelöscht: ${p.name} (inkl. zukünftiger Monate)`),fe("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ge(`Variable Position gelöscht: ${p.name}`),fe("Variable Position wurde gelöscht."),ae()}async function tr(o){const l=Ne(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(W=>W.id===o);if(!d)return;const p={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let T=h.years.find(W=>W.year===p.year);if(!T){const W=is(p.year,h.fixedTemplates,h.fixedTemplateVersion);Xa(W),Da(W),await na(W),h.years=[...h.years,W].sort((Z,R)=>Z.year-R.year),T=W}const O=T.months.find(W=>W.month===p.month);if(!O)return;const I=O.variablePositions.some(W=>W.id===d.id||W.name===d.name&&W.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(W=>W.id!==o),Et(l),!I){const Z=O.variablePositions.some(R=>R.id===d.id)?{...d,id:Ot("varpos")}:d;O.variablePositions=[Z,...O.variablePositions],Et(O)}const L=`${Se(p.month)} ${p.year}`,X=`Variable Position verschoben: ${d.name} → ${L}`;if(p.year===f)await Ge(X);else{const W=zt();if(!W)return;await na(W),await na(T),h.years=await aa(),Oa(h.years),hn(X)}fe(I?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),ae()}async function Un(o,l,f){const d=Ne(),p=h.selectedYear;if(!d||!p)return;const T=o.trim();if(!T){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const O=os(T,l);if(d.miscCosts=[O,...d.miscCosts],f){const I=he(p,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(X=>{he(L.year,X.month)<=I||(X.miscCosts=[os(T,l),...X.miscCosts])})}),await yt(`Sonstige Position hinzugefügt: ${T} (${C(l)} €) für zukünftige Monate`),fe("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Ge(`Sonstige Position hinzugefügt: ${T} (${C(l)} €)`),fe("Sonstige Position wurde hinzugefügt."),ae()}async function nr(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Ne(),d=h.selectedYear;if(!f||!d)return;const p=f.miscCosts.find(L=>L.id===o);if(!p)return;const T=he(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>he(L.year,X.month)>T&&X.miscCosts.some(W=>W.description===p.description&&W.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),I){h.years.forEach(L=>{L.months.forEach(X=>{he(L.year,X.month)<=T||(X.miscCosts=X.miscCosts.filter(W=>!(W.description===p.description&&W.amountCents===p.amountCents)))})}),await yt(`Sonstige Position gelöscht: ${p.description} (${C(p.amountCents)} €) inkl. zukünftiger Monate`),fe("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ge(`Sonstige Position gelöscht: ${p.description} (${C(p.amountCents)} €)`),fe("Sonstige Position wurde gelöscht."),ae()}async function ue(o,l,f,d){const p=Ne(),T=h.selectedYear;if(!p||!T)return;const O=o.trim();if(!O){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const I=ls(O,l,f);if(p.incomes=[I,...p.incomes],d){const L=he(T,h.selectedMonth);h.years.forEach(X=>{X.months.forEach(W=>{he(X.year,W.month)<=L||(W.incomes=[ls(O,l,f),...W.incomes])})}),await yt(`Einkommen hinzugefügt: ${O} (${C(l)} €, ${qn(f)}) für zukünftige Monate`),fe("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await Ge(`Einkommen hinzugefügt: ${O} (${C(l)} €, ${qn(f)})`),fe("Einkommen wurde hinzugefügt."),ae()}async function ar(o,l){const f=Ne();if(!f)return;const d=f.incomes.find(p=>p.id===o);d&&(f.incomes=f.incomes.map(p=>{if(p.id!==o)return p;if(!l){const{incomeSource:T,...O}=p;return O}return{...p,incomeSource:l}}),await Ge(`Einkommensart angepasst: ${d.description} → ${qn(l)}`),ae())}async function rr(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Ne(),d=h.selectedYear;if(!f||!d)return;const p=f.incomes.find(L=>L.id===o);if(!p)return;const T=he(d,h.selectedMonth),I=h.years.some(L=>L.months.some(X=>he(L.year,X.month)>T&&X.incomes.some(W=>W.description===p.description&&W.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),I){h.years.forEach(L=>{L.months.forEach(X=>{he(L.year,X.month)<=T||(X.incomes=X.incomes.filter(W=>!(W.description===p.description&&W.amountCents===p.amountCents)))})}),await yt(`Einkommen gelöscht: ${p.description} (${C(p.amountCents)} €) inkl. zukünftiger Monate`),fe("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ge(`Einkommen gelöscht: ${p.description} (${C(p.amountCents)} €)`),fe("Einkommen wurde gelöscht."),ae()}async function Wn(){const o=await Rs(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${un()}-${Ha()}.json`,p=document.createElement("a");p.href=f,p.download=d,p.click(),URL.revokeObjectURL(f),ua(d),ae(),fe("Backup wurde exportiert.")}async function Gn(o){const l=await o.text(),f=JSON.parse(l);await Vs(f);const[d,p,T]=await Promise.all([aa(),Fr(),Ir()]);h.years=d,h.annualVariableFixedTemplates=T.templates,h.annualVariableFixedTemplateVersion=T.version,Oa(h.years),pn(h.years),h.fixedTemplates=p.templates,h.fixedTemplateVersion=p.version,await Fa(h.years),h.persistentAuditLog=await Lr(),h.selectedYear=Ga(d),h.selectedMonth=cn(),ua(o.name),fe("Backup wurde importiert."),ae()}function ae(){const o=zt(),l=Ne(),f=un(),d=l?rt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},p=o?En(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},T=o?jn(o):[],O=l?l.foodBudgetCents??0:0,I=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,S)=>r+S.plannedCents,0):0,X=l?l.variableBudgetCents??l.variablePositions.reduce((r,S)=>r+S.budgetCents,0):0,W=l?l.miscBudgetCents??0:0,Z=o?o.months.reduce((r,S)=>r+(S.foodBudgetCents??0),0):0,R=o?o.months.reduce((r,S)=>r+(S.goingOutBudgetCents??0),0):0,pe=o?o.months.reduce((r,S)=>r+(S.fixedBudgetCents??S.fixedCosts.reduce((V,Q)=>V+Q.plannedCents,0)),0):0,Be=o?o.months.reduce((r,S)=>r+(S.variableBudgetCents??S.variablePositions.reduce((V,Q)=>V+Q.budgetCents,0)),0):0,He=o?o.months.reduce((r,S)=>r+(S.miscBudgetCents??0),0):0,ne=l?l.incomes.reduce((r,S)=>r+(bt(S.incomeSource)?S.amountCents:0),0):0,$e=l?l.incomes.reduce((r,S)=>r+(S.incomeSource==="salary"?S.amountCents:0),0):0,Je=l?l.incomes.reduce((r,S)=>r+(S.incomeSource==="fresh"?S.amountCents:0),0):0,ve=ca(),Xe=o?ve.get(he(o.year,h.selectedMonth)):void 0,Lt=o?o.months.slice().sort((r,S)=>r.month-S.month)[0]:void 0,F=Xe?.carriedFromPreviousCents??0,qe=Xe?.hasPreviousMonth??!1,Qe=Xe?.effectiveIncomeCents??ne,dt=l?Nt(l):0,xt=Xe?.netCents??ne-dt,ie=Qe-d.totalCents,wt=$e-d.totalCents,me=d.totalCents>0?`${($e/d.totalCents*100).toFixed(1)} %`:"-",Ke=F<0?"danger":F>0?"budget-under":"",ze=xt<0?"danger":xt>0?"budget-under":"",je=ie<0?"danger":ie>0?"budget-under":"",Me=o?o.months.reduce((r,S)=>r+S.incomes.reduce((V,Q)=>V+(bt(Q.incomeSource)?Q.amountCents:0),0),0):0,nt=o?o.months.reduce((r,S)=>r+S.incomes.reduce((V,Q)=>V+(Q.incomeSource==="salary"?Q.amountCents:0),0),0):0,yn=o?o.months.reduce((r,S)=>r+S.incomes.reduce((V,Q)=>V+(Q.incomeSource==="fresh"?Q.amountCents:0),0),0):0,Ht=o&&Lt?ve.get(he(o.year,Lt.month))?.carriedFromPreviousCents??0:0,lt=Me+Ht,kt=lt-p.totalCents,Pn=nt-p.totalCents,we=p.totalCents>0?`${(nt/p.totalCents*100).toFixed(1)} %`:"-",ye=Ht<0?"danger":Ht>0?"budget-under":"",Pe=kt<0?"danger":kt>0?"budget-under":"",Fe=O+I+L+X+W,Ze=O+I,Jt=d.foodCents+d.goingOutCents,qt=Ze-Jt,Kt=ot(Jt,Ze),Ft=Z+R+pe+Be+He,ct=Qe-Fe,Bt=lt-Ft,_t=Fe-d.totalCents,Hn=Ft-p.totalCents,_=r=>r<0?"danger":r>0?"budget-under":"",q=(r,S)=>S<=0?"muted":r>=S?"budget-under":"danger",st=q($e,d.totalCents),Cn=q(nt,p.totalCents),Te=(r,S)=>{if(S<=0)return"0%";const Q=Math.max(0,r)/S*100;return`${Math.min(100,Math.max(0,Q)).toFixed(1)}%`},qa=(r,S)=>{if(S<=0)return r>0?100:0;const V=Math.max(0,r)/S*100;return Math.max(0,V)},it=[{label:"Essen",budgetCents:O,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:I,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:X,actualCents:d.variableCents},{label:"Sonstige",budgetCents:W,actualCents:d.miscCents}];Math.max(1,...it.flatMap(r=>[r.budgetCents,r.actualCents]));const Tn=(r,S)=>S<=0?"bar-positive":r<=0||S>r?"bar-negative":"bar-positive",An=[{label:"Einkommen gesamt",valueCents:Qe,className:"bar-income"},{label:"Budget gesamt",valueCents:Fe,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ie,className:ie<0?"bar-negative":"bar-positive"}],ir=Math.max(1,...An.map(r=>Math.abs(r.valueCents))),va=o?o.months.slice().sort((r,S)=>r.month-S.month).map(r=>{const S=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,Q=r.fixedBudgetCents??r.fixedCosts.reduce((Vt,We)=>Vt+We.plannedCents,0),ke=r.variableBudgetCents??r.variablePositions.reduce((Vt,We)=>Vt+We.budgetCents,0),Ue=r.miscBudgetCents??0,Tt=S+V+Q+ke+Ue;return{month:r.month,foodBudgetCents:S,goingOutBudgetCents:V,fixedBudgetCents:Q,variableBudgetCents:ke,miscBudgetCents:Ue,totalBudgetCents:Tt}}):[],Dt=new Map(va.map(r=>[r.month,r])),jt=r=>{if(r.length===0)return null;const S=Math.min(...r),V=Math.max(...r),Q=Math.round(r.reduce((ke,Ue)=>ke+Ue,0)/r.length);return{min:S,avg:Q,max:V}},Mt=o&&o.year===It()?T.filter(r=>r.month<=cn()):T,ma=Mt.map(r=>r.summary.foodCents),sn=Mt.map(r=>r.summary.goingOutCents),ga=Mt.map(r=>r.summary.fixedCents),ba=Mt.map(r=>r.summary.variableCents),Jn=Mt.map(r=>r.summary.miscCents),ya=Mt.map(r=>r.summary.totalCents),Ka=Mt.map(r=>o?ve.get(he(o.year,r.month))?.plannedBudgetCents??0:0),Mr=Mt.map(r=>o?ve.get(he(o.year,r.month))?.netCents??0:0),Xn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((S,V)=>S+(V.incomeSource==="salary"?V.amountCents:0),0)])),Qn=Mt.map(r=>Xn.get(r.month)??0),Xt={food:jt(ma),goingOut:jt(sn),fixed:jt(ga),variable:jt(ba),misc:jt(Jn),total:jt(ya),salary:jt(Qn),budget:jt(Ka),net:jt(Mr)},ja=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Rt={food:ma.reduce((r,S)=>r+S,0),goingOut:sn.reduce((r,S)=>r+S,0),fixed:ga.reduce((r,S)=>r+S,0),variable:ba.reduce((r,S)=>r+S,0),misc:Jn.reduce((r,S)=>r+S,0),total:ya.reduce((r,S)=>r+S,0),salary:Qn.reduce((r,S)=>r+S,0),budget:Ka.reduce((r,S)=>r+S,0)},Pr=ja.map(({key:r,label:S})=>{const V=Xt.food?.[r]??null,Q=Xt.goingOut?.[r]??null,ke=Xt.fixed?.[r]??null,Ue=Xt.variable?.[r]??null,Tt=Xt.misc?.[r]??null,Vt=Xt.total?.[r]??null,We=Xt.salary?.[r]??null,kn=Xt.budget?.[r]??null,$n=Xt.net?.[r]??null,At=ta=>ta===null?"-":C(ta);return`<tr>
                  <td><strong>${S}</strong></td>
                  <td>${At(V)}</td>
                  <td>${At(Q)}</td>
                  <td>${At(ke)}</td>
                  <td>${At(Ue)}</td>
                  <td>${At(Tt)}</td>
                  <td>${At(Vt)}</td>
                  <td>${At(We)}</td>
                  <td>${At(kn)}</td>
                  <td>${At($n)}</td>
                </tr>`}).join(""),or=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${C(Rt.food)}</td>
                  <td>${C(Rt.goingOut)}</td>
                  <td>${C(Rt.fixed)}</td>
                  <td>${C(Rt.variable)}</td>
                  <td>${C(Rt.misc)}</td>
                  <td>${C(Rt.total)}</td>
                  <td>${C(Rt.salary)}</td>
                  <td>${C(Rt.budget)}</td>
                </tr>`,lr=Math.max(1,...T.flatMap(r=>{const S=Dt.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,S??0]})),Ra=Math.max(1,...T.flatMap(r=>{const S=Dt.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,Q=(S?.foodBudgetCents??0)+(S?.goingOutBudgetCents??0);return[V,Q]})),Va=Math.max(1,...T.flatMap(r=>{const S=Dt.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,S]})),cr=Math.max(1,...T.flatMap(r=>{const S=Dt.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,S]})),Ya=Math.max(1,...T.flatMap(r=>{const S=Dt.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,S]})),za=ot(d.fixedCents,L),ur=ot(d.foodCents,O),dr=ot(d.goingOutCents,I),Tr=ot(d.variableCents,X),fr=ot(d.miscCents,W),Ca=r=>r===0?"-":C(r),xa=l?l.fixedCosts.length>0?l.fixedCosts.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${St(r.name)}</div>
                  <div class="compact-cost-budget">${C(r.plannedCents)}</div>
                  <div class="compact-cost-actual ${ot(r.actualCents,r.plannedCents)}">${Ca(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Qt=l?l.variablePositions.length>0?l.variablePositions.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${St(r.name)}${r.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${C(r.budgetCents)}</div>
                  <div class="compact-cost-actual ${ot(r.actualCents,r.budgetCents)}">${Ca(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,_e=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,wa=h.hasUnexportedChanges,xn=h.unexportedChangeLog.slice().reverse(),hr=h.persistentAuditLog.slice().sort((r,S)=>S.timestampIso.localeCompare(r.timestampIso)),Ua=h.lastBackupFileName?St(h.lastBackupFileName):"-",pr={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},et=h.years.slice().sort((r,S)=>r.year-S.year),On=et.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??et[et.length-1]?.year??null,Re=typeof On=="number"?et.find(r=>r.year===On):void 0,on=Re?Re.months.slice().sort((r,S)=>r.month-S.month):[],ln=Re?En(Re):pr,e=Re?Rn(Re):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},t=Re?Bn(Re):0,n=Re?Ut(Re,ve):0,a=t+n,s=Re?Re.months.reduce((r,S)=>r+Nt(S),0):0,i=a-s,c=a-ln.totalCents,u=[{label:"Essen",budgetCents:e.foodCents,actualCents:ln.foodCents},{label:"Ausgehen",budgetCents:e.goingOutCents,actualCents:ln.goingOutCents},{label:"Fixkosten",budgetCents:e.fixedCents,actualCents:ln.fixedCents},{label:"Variable",budgetCents:e.variableCents,actualCents:ln.variableCents},{label:"Sonstige",budgetCents:e.miscCents,actualCents:ln.miscCents}],v=on.map(r=>{const S=Re?ve.get(he(Re.year,r.month)):void 0,V=rt(r),Q=r.incomes.reduce((ta,mr)=>ta+mr.amountCents,0),ke=S?.effectiveIncomeCents??Q,Ue=S?.plannedBudgetCents??Nt(r),Tt=V.foodCents,Vt=V.goingOutCents,We=Tt+Vt,kn=V.totalCents,$n=ke-Ue,At=ke-kn;return{month:r.month,foodCents:Tt,goingOutCents:Vt,foodAndGoingOutCents:We,effectiveIncomeCents:ke,plannedBudgetCents:Ue,actualCostCents:kn,plannedNetCents:$n,actualNetCents:At}}),$=Math.max(1,...v.map(r=>r.actualCostCents)),y=Math.max(1,...v.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),b=Math.max(1,...v.map(r=>r.foodAndGoingOutCents)),x=Math.max(1,...v.map(r=>r.foodCents)),w=Math.max(1,...v.map(r=>r.goingOutCents)),m=v.map((r,S,V)=>{const Q=S>0?V[S-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Se(r.month),monthShortLabel:Se(r.month).slice(0,3),deltaCents:r.plannedNetCents-Q}}),g=m[m.length-1]??null,E=Math.min(0,...m.map(r=>r.plannedNetCents)),B=Math.max(0,...m.map(r=>r.plannedNetCents)),k=Math.max(1,B-E),P=720,A=320,K=18,j=18,D=38,U=56,z=P-U-j,N=A-K-D,G=r=>{if(m.length<=1)return U+z/2;const S=r/(m.length-1);return U+S*z},de=r=>K+(B-r)/k*N,oe=m.map((r,S)=>{const V=G(S),Q=de(r.plannedNetCents);return{...r,x:V,y:Q,leftPercent:V/P*100,topPercent:Q/A*100}}),te=oe.map((r,S)=>`${S===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),le=oe.length>0?`${te} L ${oe[oe.length-1]?.x.toFixed(1)} ${(K+N).toFixed(1)} L ${oe[0]?.x.toFixed(1)} ${(K+N).toFixed(1)} Z`:"",Ae=5,Pt=Array.from({length:Ae},(r,S)=>{const V=S/(Ae-1),Q=B-V*k;return{valueCents:Math.round(Q/100)*100,y:de(Q)}}),De=de(0),wn=m[0]?.plannedNetCents??0,ka=(m[m.length-1]?.plannedNetCents??0)-wn,ms=ka<0?"trend-badge-negative":ka>0?"trend-badge-positive":"trend-badge-neutral",Kr=ka<0?"↘":ka>0?"↗":"→",gs=ka<0?"Abwärtstrend":ka>0?"Aufwärtstrend":"Seitwärts",Zn=et.reduce((r,S)=>{const V=Rn(S);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),ea=et.reduce((r,S)=>{const V=En(S);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),bs=et.reduce((r,S)=>r+Bn(S),0),ys=et[0]?Ut(et[0],ve):0,Ar=bs+ys,jr=Ar-Zn.totalCents,Rr=Ar-ea.totalCents,Vr=[{label:"Essen",budgetCents:Zn.foodCents,actualCents:ea.foodCents},{label:"Ausgehen",budgetCents:Zn.goingOutCents,actualCents:ea.goingOutCents},{label:"Fixkosten",budgetCents:Zn.fixedCents,actualCents:ea.fixedCents},{label:"Variable",budgetCents:Zn.variableCents,actualCents:ea.variableCents},{label:"Sonstige",budgetCents:Zn.miscCents,actualCents:ea.miscCents}],Yr=Math.max(1,...Vr.flatMap(r=>[r.budgetCents,r.actualCents])),$a=et.map(r=>{const S=En(r),V=Rn(r),Q=Bn(r),ke=r.months.reduce((Vt,We)=>Vt+We.incomes.reduce((kn,$n)=>kn+($n.incomeSource==="salary"?$n.amountCents:0),0),0),Ue=Ut(r,ve),Tt=Q+Ue;return{year:r.year,salaryIncomeCents:ke,budgetTotalCents:V.totalCents,actualTotalCents:S.totalCents,effectiveIncomeCents:Tt,plannedNetCents:Tt-V.totalCents,actualNetCents:Tt-S.totalCents}}),zr=Math.max(1,...$a.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),Cs=Math.max(1,...$a.map(r=>r.actualTotalCents)),xs=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${et.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${et.map(r=>`<option value="${r.year}" ${r.year===On?"selected":""}>${r.year}</option>`).join("")}
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${C(a)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${C(s)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${C(ln.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(i)}">${C(i)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(c)}">${C(c)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Kr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${ms}">${Kr} ${gs}</span>
                    </div>
                  </header>
                  ${g?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${St(g.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${_(g.plannedNetCents)}" data-year-trend-active-net>${C(g.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${C(g.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${C(g.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${_(g.deltaCents)}" data-year-trend-active-delta>${g.deltaCents>=0?"+":""}${C(g.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${P} ${A}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${Re?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Pt.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${U}" y1="${r.y.toFixed(1)}" x2="${P-j}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${U-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${C(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${U}" y1="${De.toFixed(1)}" x2="${P-j}" y2="${De.toFixed(1)}"></line>
                              ${le?`<path class="year-trend-area" d="${le}"></path>`:""}
                              ${te?`<path class="year-trend-line" d="${te}"></path>`:""}
                              ${oe.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${A-12}" text-anchor="middle">${St(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${oe.map((r,S)=>`
                                    <button
                                      class="year-trend-point-hit ${S===oe.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${S===oe.length-1?"1":"0"}"
                                      data-month-label="${St(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${St(r.monthLabel)}: Kalkulierter Saldo ${C(r.plannedNetCents)}, Einkommen ${C(r.effectiveIncomeCents)}, Ausgaben ${C(r.actualCostCents)}"
                                      aria-pressed="${S===oe.length-1?"true":"false"}"
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
                    ${u.map(r=>{const S=qa(r.actualCents,r.budgetCents),V=Math.min(100,S),Q=`${S.toFixed(0)}%`,ke=r.budgetCents-r.actualCents,Ue=ke<0?"danger":ke>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Tn(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${C(r.actualCents)} von ${C(r.budgetCents)}">
                              <span class="circle-chart-value">${Q}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${C(r.budgetCents)} / I ${C(r.actualCents)}</div>
                            <div class="circle-chart-meta ${Ue}">${ke>=0?"+":""}${C(ke)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(v.length,1)}, minmax(0, 1fr));">
                    ${v.map(r=>{const S=Te(r.actualCostCents,$);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${C(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
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
                    ${v.map(r=>{const S=Te(Math.abs(r.plannedNetCents),y),V=Te(Math.abs(r.actualNetCents),y),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",ke=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Se(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${C(r.plannedNetCents)} | Ist-Saldo: ${C(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${S}; opacity: 0.35;"></div>
                              <div class="bar ${ke}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${C(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${C(r.actualNetCents)}</span>
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
                  ${v.map(r=>`<tr>
                        <td>${Se(r.month)}</td>
                        <td>${C(r.effectiveIncomeCents)}</td>
                        <td>${C(r.plannedBudgetCents)}</td>
                        <td>${C(r.actualCostCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${C(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${C(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${et.map(r=>`<option value="${r.year}" ${r.year===On?"selected":""}>${r.year}</option>`).join("")}
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
                    ${v.map(r=>{const S=Te(r.foodAndGoingOutCents,b);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${C(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(v.length,1)}, minmax(0, 1fr));">
                    ${v.map(r=>{const S=Te(r.foodCents,x);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${C(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(v.length,1)}, minmax(0, 1fr));">
                    ${v.map(r=>{const S=Te(r.goingOutCents,w);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${C(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${S}"></div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${C(Ar)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${C(Zn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${C(ea.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(jr)}">${C(jr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(Rr)}">${C(Rr)}</div><div class="eval-value"></div></div>
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
                    ${Vr.map(r=>{const S=Te(r.budgetCents,Yr),V=Te(r.actualCents,Yr),Q=Tn(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${C(r.budgetCents)} | Ist: ${C(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${S}"></div>
                              <div class="bar-marker" style="left:${S}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Q}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${C(r.budgetCents)}</span>
                              <span class="muted">I ${C(r.actualCents)}</span>
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
                    ${$a.map(r=>{const S=Te(r.actualTotalCents,Cs);return`
                          <div class="spark-bar" title="${r.year}: ${C(r.actualTotalCents)}">
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
                    ${$a.map(r=>{const S=Te(Math.abs(r.plannedNetCents),zr),V=Te(Math.abs(r.actualNetCents),zr),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",ke=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${C(r.plannedNetCents)} | Ist-Saldo: ${C(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${S}; opacity: 0.35;"></div>
                              <div class="bar ${ke}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${C(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${C(r.actualNetCents)}</span>
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
                        <td>${C(r.salaryIncomeCents)}</td>
                        <td>${C(r.effectiveIncomeCents)}</td>
                        <td>${C(r.budgetTotalCents)}</td>
                        <td>${C(r.actualTotalCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${C(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${C(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,ws=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,ks=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${_e?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${_e?mt(_e.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${_e?"Änderung speichern":"Vorlage speichern"}</button>
          ${_e?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${C(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,Ur=h.annualVariableFixedTemplates.reduce((r,S)=>r+S.plannedCents,0),$s=Math.round(Ur/12),Ss=`
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
                <div class="eval-value budget-under">${C(Ur)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${C($s)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const S=Vn(r.dueDateIso),V=S?Se(S.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${C(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Wr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",Es=h.topModal==="years"?ws:h.topModal==="fixed"?ks:h.topModal==="variable-fixed"?Ss:h.topModal==="dashboard"?xs:"";M.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${wa?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${ps.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${zs(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Wr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Wr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Es}
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
                  ${xn.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${xn.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${St(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${hr.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${hr.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${St(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${Array.from({length:12},(r,S)=>S+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Se(r)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${C(ne)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${C($e)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${C(Je)}</strong>
              </div>
              <div class="compact-income-row ${Ke}">
                <span>Übernahme aus Vormonat</span>
                <strong>${qe?C(F):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${C(Qe)}</strong>
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
                  ${xa}
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
                  ${Qt}
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
                    <div class="compact-cost-budget">${C(Ze)}</div>
                    <div class="compact-cost-actual ${Kt}">${Ca(Jt)}</div>
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
                    <div class="compact-cost-budget">${C(W)}</div>
                    <div class="compact-cost-actual ${fr}">${Ca(d.miscCents)}</div>
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
                  ${it.map(r=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${r.label}"
                            data-budget-cents="${r.budgetCents}"
                            data-actual-cents="${r.actualCents}"
                            role="img"
                            aria-label="${r.label}: Budget ${C(r.budgetCents)} €, Ist ${C(r.actualCents)} €"
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
                  ${An.map(r=>{const S=Te(Math.abs(r.valueCents),ir),V=r.valueCents>=0?"+":"",Q=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${C(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${S}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Q}">${V}${C(r.valueCents)}</span></div>
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
                      ${T.map(r=>{const S=Dt.get(r.month)?.totalBudgetCents??0,V=Te(S,lr),Q=Te(r.summary.totalCents,lr);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(r.summary.totalCents)} € | Budget ${C(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${C(r.summary.totalCents)} €</span></div>
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
                      ${T.map(r=>{const S=Dt.get(r.month),V=(S?.foodBudgetCents??0)+(S?.goingOutBudgetCents??0),Q=r.summary.foodCents+r.summary.goingOutCents,ke=Te(V,Ra),Ue=Te(Q,Ra);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(Q)} € | Budget ${C(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${ke}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Ue}"><span class="spark-bar-fill-value">${C(Q)} €</span></div>
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
                      ${T.map(r=>{const S=Dt.get(r.month)?.fixedBudgetCents??0,V=Te(S,Va),Q=Te(r.summary.fixedCents,Va);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(r.summary.fixedCents)} € | Budget ${C(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${C(r.summary.fixedCents)} €</span></div>
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
                      ${T.map(r=>{const S=Dt.get(r.month)?.variableBudgetCents??0,V=Te(S,cr),Q=Te(r.summary.variableCents,cr);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(r.summary.variableCents)} € | Budget ${C(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${C(r.summary.variableCents)} €</span></div>
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
                      ${T.map(r=>{const S=Dt.get(r.month)?.miscBudgetCents??0,V=Te(S,Ya),Q=Te(r.summary.miscCents,Ya);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(r.summary.miscCents)} € | Budget ${C(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${C(r.summary.miscCents)} €</span></div>
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
                    <div class="eval-value">${C(ne)}</div>
                    <div class="eval-value">${C(Me)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${C($e)}</div>
                    <div class="eval-value">${C(nt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${C(Je)}</div>
                    <div class="eval-value">${C(yn)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ke}">${qe?C(F):"-"}</div>
                    <div class="eval-value ${ye}">${o?C(Ht):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${C(Qe)}</div>
                    <div class="eval-value">${C(lt)}</div>
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
                    <div class="eval-value">${H(O,d.foodCents)}</div>
                    <div class="eval-value">${C(Z)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${H(I,d.goingOutCents)}</div>
                    <div class="eval-value">${C(R)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${H(L,d.fixedCents)}</div>
                    <div class="eval-value">${C(pe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${H(X,d.variableCents)}</div>
                    <div class="eval-value">${C(Be)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${H(W,d.miscCents)}</div>
                    <div class="eval-value">${C(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${H(Fe,d.totalCents)}</div>
                    <div class="eval-value">${C(Ft)}</div>
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
                    <div class="eval-value ${ur}">${C(d.foodCents)}</div>
                    <div class="eval-value">${C(p.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${dr}">${C(d.goingOutCents)}</div>
                    <div class="eval-value">${C(p.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${za}">${C(d.fixedCents)}</div>
                    <div class="eval-value">${C(p.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Tr}">${C(d.variableCents)}</div>
                    <div class="eval-value">${C(p.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${fr}">${C(d.miscCents)}</div>
                    <div class="eval-value">${C(p.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${C(d.totalCents)}</div>
                    <div class="eval-value">${C(p.totalCents)}</div>
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
                    <div class="eval-value ${_(_t)}">${C(_t)}</div>
                    <div class="eval-value ${_(Hn)}">${C(Hn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${_(ct)}">${C(ct)}</div>
                    <div class="eval-value ${_(Bt)}">${C(Bt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${je}">${C(ie)}</div>
                    <div class="eval-value ${Pe}">${C(kt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${_(wt)}">${C(wt)}</div>
                    <div class="eval-value ${_(Pn)}">${C(Pn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${st}">${me}</div>
                    <div class="eval-value ${Cn}">${we}</div>
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
                ${T.map((r,S,V)=>{const Q=o?ve.get(he(o.year,r.month)):void 0,ke=Q?.plannedBudgetCents??0,Ue=Q?.netCents??0,Tt=Xn.get(r.month)??0,Vt=Ue<0?"danger":Ue>0?"budget-under":"",We=V[S-1],kn=We?.summary.foodCents??null,$n=We?.summary.goingOutCents??null,At=We?.summary.fixedCents??null,ta=We?.summary.variableCents??null,mr=We?.summary.miscCents??null,Gr=We?.summary.totalCents??null,Hr=We!==void 0?Xn.get(We.month)??0:null,Jr=o&&We?ve.get(he(o.year,We.month))?.plannedBudgetCents??0:null,Xr=kn===null?null:r.summary.foodCents-kn,Qr=$n===null?null:r.summary.goingOutCents-$n,Zr=At===null?null:r.summary.fixedCents-At,es=ta===null?null:r.summary.variableCents-ta,ts=mr===null?null:r.summary.miscCents-mr,ns=Gr===null?null:r.summary.totalCents-Gr,as=Hr===null?null:Tt-Hr,rs=Jr===null?null:ke-Jr,Sa=$t=>$t===null?"muted":$t>0?"danger":$t<0?"budget-under":"muted",Bs=$t=>$t===null?"muted":$t>0?"budget-under":$t<0?"danger":"muted",_s=$t=>$t===null?"muted":$t>0?"danger":$t<0?"budget-under":"muted",Fn=$t=>$t===null?"(Δ -)":`(Δ ${$t>0?"+":""}${C($t)})`,ss=o&&We?ve.get(he(o.year,We.month))?.netCents??0:null,Ea=ss===null?null:Ue-ss,Ms=Ea===null?"(Δ -)":`(Δ ${Ea>0?"+":""}${C(Ea)})`,Ps=Ea===null?"muted":Ea<0?"danger":Ea>0?"budget-under":"muted";return`<tr>
                  <td>${Se(r.month)}</td>
                  <td>${C(r.summary.foodCents)} <span class="${Sa(Xr)}">${Fn(Xr)}</span></td>
                  <td>${C(r.summary.goingOutCents)} <span class="${Sa(Qr)}">${Fn(Qr)}</span></td>
                  <td>${C(r.summary.fixedCents)} <span class="${Sa(Zr)}">${Fn(Zr)}</span></td>
                  <td>${C(r.summary.variableCents)} <span class="${Sa(es)}">${Fn(es)}</span></td>
                  <td>${C(r.summary.miscCents)} <span class="${Sa(ts)}">${Fn(ts)}</span></td>
                  <td>${C(r.summary.totalCents)} <span class="${Sa(ns)}">${Fn(ns)}</span></td>
                  <td>${C(Tt)} <span class="${Bs(as)}">${Fn(as)}</span></td>
                  <td>${C(ke)} <span class="${_s(rs)}">${Fn(rs)}</span></td>
                  <td class="${Vt}">${C(Ue)} <span class="${Ps}">${Ms}</span></td>
                </tr>`}).join("")}
                ${Pr}
                ${or}
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
                    <td class="${Ke}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${mt(F)}" />
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
                    <td>${C(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${r.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${C(ne)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${C($e)} €</strong>
                </div>
                <div class="column-overview-row ${Ke}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${C(F)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${C(Qe)} €</strong>
                </div>
                <div class="column-overview-row ${ze}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${C(xt)} €</strong>
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
                    <strong>${C(Ze)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${C(Jt)} €</strong>
                  </div>
                  <div class="column-overview-row ${Kt}">
                    <span>Diff</span>
                    <strong>${C(qt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${mt(O)}" ${l?"":"disabled"} />
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
                  ${l?l.days.map(r=>{const S=r.foodCents>0,V=r.goingOutCents>0,Q=`${r.isoDate===f?"today-row":""} ${S||V?"day-has-entry":""}`.trim(),ke=`amount-input ${S?"day-input-has-value":""}`.trim(),Ue=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${Q}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${ke}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${mt(r.foodCents)}" /></td>
                      <td><input class="${Ue}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${mt(r.goingOutCents)}" /></td>
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
                    <td class="${ot(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${mt(r.actualCents)}" /></td>
                    <td class="${ot(r.actualCents,r.plannedCents)}">${C(r.actualCents-r.plannedCents)}</td>
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
                    <td class="${ot(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${mt(r.actualCents)}" /></td>
                    <td class="${ot(r.actualCents,r.budgetCents)}">${C(r.actualCents-r.budgetCents)}</td>
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
                    <td>${C(r.amountCents)}</td>
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
          <p class="muted">Letztes verwendetes Backup: ${Ua}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),sr(),Zt(),ht(),Ma()}function sr(){const o=M.querySelector("#theme-select"),l=M.querySelector("#open-years-modal"),f=M.querySelector("#open-fixed-modal"),d=M.querySelector("#open-variable-fixed-modal"),p=M.querySelector("#open-dashboard-modal"),T=M.querySelector("#panel-modal-close"),O=M.querySelector("#panel-modal-backdrop"),I=M.querySelector("#open-unexported-change-log"),L=M.querySelector("#open-persistent-audit-log"),X=M.querySelector("#unexported-change-log-close"),W=M.querySelector("#unexported-change-log-backup"),Z=M.querySelector("#unexported-change-log-backdrop"),R=M.querySelector("#persistent-audit-log-close"),pe=M.querySelector("#persistent-audit-log-backdrop"),Be=M.querySelector("#new-year"),He=M.querySelector("#create-year"),ne=M.querySelector("#year-select"),$e=M.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;ds(_)&&la(_)}),l?.addEventListener("click",()=>{ra("years")}),f?.addEventListener("click",()=>{ra("fixed")}),d?.addEventListener("click",()=>{ra("variable-fixed")}),p?.addEventListener("click",()=>{ra("dashboard")}),I?.addEventListener("click",()=>{sa()}),L?.addEventListener("click",()=>{Dn()}),X?.addEventListener("click",()=>{ia()}),W?.addEventListener("click",async()=>{try{await Wn()}catch(_){console.error("Backup-Export fehlgeschlagen",_),fe("Backup konnte nicht exportiert werden.","error")}}),Z?.addEventListener("click",_=>{_.target===Z&&ia()}),R?.addEventListener("click",()=>{oa()}),pe?.addEventListener("click",_=>{_.target===pe&&oa()}),M.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const q=_.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(h.dashboardTab=q,ae())})});const Je=M.querySelector("#dashboard-year-select");Je?.addEventListener("change",()=>{const _=Number.parseInt(Je.value,10);Number.isInteger(_)&&(h.dashboardYear=_,ae())}),T?.addEventListener("click",()=>{_a()}),O?.addEventListener("click",_=>{_.target===O&&_a()}),h.topModal&&window.setTimeout(()=>{T?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{X?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{R?.focus()},0),He?.addEventListener("click",async()=>{const _=Number.parseInt(Be?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await fn(_)}),ne?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ne.value,10),h.selectedMonth=cn(),ae()}),$e?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt($e.value,10),ae()});const ve=M.querySelector("#fixed-template-name"),Xe=M.querySelector("#fixed-template-amount"),Lt=M.querySelector("#add-fixed-template"),F=M.querySelector("#cancel-fixed-template-edit"),qe=M.querySelector("#annual-variable-fixed-name"),Qe=M.querySelector("#annual-variable-fixed-date"),dt=M.querySelector("#annual-variable-fixed-amount"),xt=M.querySelector("#add-annual-variable-fixed-template");Lt?.addEventListener("click",async()=>{const _=ve?.value??"",q=Ie(Xe?.value??"0");await ha(_,q),ve&&(ve.value=""),Xe&&(Xe.value="")}),F?.addEventListener("click",()=>{Br()}),xt?.addEventListener("click",async()=>{const _=qe?.value??"",q=Qe?.value??"",st=Ie(dt?.value??"0");await _n(_,q,st),qe&&(qe.value=""),Qe&&(Qe.value=""),dt&&(dt.value="")}),M.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeAnnualVariableFixedTemplate;q&&await an(q)})}),M.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const q=_.dataset.editFixedTemplate;q&&pa(q)})}),M.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeFixedTemplate;q&&await nn(q)})}),M.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.dayFood;q&&await Yn(q,"foodCents",Ie(_.value))})}),M.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.dayGoing;q&&await Yn(q,"goingOutCents",Ie(_.value))})}),M.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.fixedActual;q&&await _r(q,Ie(_.value))})}),M.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.fixedPlanned;q&&await rn(q,Ie(_.value))})});const ie=M.querySelector("#fixed-budget");ie?.addEventListener("click",_=>{_.preventDefault(),ie.blur(),at(ie)}),ie?.addEventListener("change",async()=>{await er(Ie(ie.value))});const wt=M.querySelector("#food-budget");wt?.addEventListener("click",_=>{_.preventDefault(),wt.blur(),at(wt)}),wt?.addEventListener("change",async()=>{await Ia(Ie(wt.value))});const me=M.querySelector("#going-out-budget");me?.addEventListener("click",_=>{_.preventDefault(),me.blur(),at(me)}),me?.addEventListener("change",async()=>{await Le(Ie(me.value))}),M.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{xr()});const ze=M.querySelector("#misc-budget");ze?.addEventListener("click",_=>{_.preventDefault(),ze.blur(),at(ze)}),ze?.addEventListener("change",async()=>{await mn(Ie(ze.value))});const je=M.querySelector("#variable-budget");je?.addEventListener("click",_=>{_.preventDefault(),je.blur(),at(je)}),je?.addEventListener("change",async()=>{await Gt(Ie(je.value))});const Me=M.querySelector("#variable-position-name"),nt=M.querySelector("#variable-position-budget"),yn=M.querySelector("#add-variable-position"),Ht=M.querySelector("#add-variable-position-recurring"),lt=M.querySelector("#misc-description"),kt=M.querySelector("#misc-amount"),Pn=M.querySelector("#add-misc"),we=M.querySelector("#add-misc-recurring"),ye=M.querySelector("#income-description"),Pe=M.querySelector("#income-source"),Fe=M.querySelector("#income-amount"),Ze=M.querySelector("#add-income"),Jt=M.querySelector("#add-income-recurring"),qt=M.querySelector("#fixed-cost-name"),Kt=M.querySelector("#fixed-cost-budget"),Ft=M.querySelector("#add-fixed-cost"),ct=M.querySelector("#carryover-override");ct?.addEventListener("click",_=>{_.preventDefault(),ct.blur(),at(ct)}),ct?.addEventListener("change",async()=>{const _=ct.value;if(!_.trim()){await gn(null);return}await gn(Ie(_))}),Ft?.addEventListener("click",async()=>{const _=Ie(Kt?.value??"0");await Za(qt?.value??"",_),qt&&(qt.value=""),Kt&&(Kt.value="")}),yn?.addEventListener("click",async()=>{const _=Ie(nt?.value??"0");await zn(Me?.value??"",_,!1),Me&&(Me.value=""),nt&&(nt.value="")}),Ht?.addEventListener("click",async()=>{const _=Ie(nt?.value??"0");await zn(Me?.value??"",_,!0),Me&&(Me.value=""),nt&&(nt.value="")}),Pn?.addEventListener("click",async()=>{const _=Ie(kt?.value??"0");await Un(lt?.value??"",_,!1),lt&&(lt.value=""),kt&&(kt.value="")}),we?.addEventListener("click",async()=>{const _=Ie(kt?.value??"0");await Un(lt?.value??"",_,!0),lt&&(lt.value=""),kt&&(kt.value="")}),Ze?.addEventListener("click",async()=>{const _=Ie(Fe?.value??"0"),q=Pe?.value,st=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ue(ye?.value??"",_,st,!1),ye&&(ye.value=""),Fe&&(Fe.value=""),Pe&&(Pe.value="salary")}),Jt?.addEventListener("click",async()=>{const _=Ie(Fe?.value??"0"),q=Pe?.value,st=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ue(ye?.value??"",_,st,!0),ye&&(ye.value=""),Fe&&(Fe.value=""),Pe&&(Pe.value="salary")}),M.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const q=_.dataset.incomeSource;if(!q)return;const st=_.value;await ar(q,st==="balance"||st==="fresh"||st==="salary"?st:void 0)})}),M.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.variablePositionBudget;q&&await La(q,Ie(_.value))})}),M.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const q=_.dataset.variablePositionActual;q&&await Na(q,Ie(_.value))})}),M.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeVariablePosition;q&&await bn(q)})}),M.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.moveVariablePositionNext;q&&await tr(q)})}),M.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeFixed;q&&await vn(q)})}),M.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeIncome;q&&await rr(q)})}),M.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeMisc;q&&await nr(q)})});const Bt=M.querySelector("#backup-export"),_t=M.querySelector("#backup-import");M.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Bt?.addEventListener("click",async()=>{await Wn()}),_t?.addEventListener("change",async()=>{const _=_t.files?.[0];if(_){try{await Gn(_)}catch(q){console.error("Backup-Import fehlgeschlagen",q),fe("Backup konnte nicht importiert werden.","error")}_t.value=""}})}return{init:Sr}}const Ws="modulepreload",Gs=function(M){return"/habu26/"+M},hs={},Hs=function(h,Oe,J){let ge=Promise.resolve();if(Oe&&Oe.length>0){let ut=function(Ye){return Promise.all(Ye.map(ce=>Promise.resolve(ce).then(gt=>({status:"fulfilled",value:gt}),gt=>({status:"rejected",reason:gt}))))};var Ce=ut;document.getElementsByTagName("link");const se=document.querySelector("meta[property=csp-nonce]"),be=se?.nonce||se?.getAttribute("nonce");ge=ut(Oe.map(Ye=>{if(Ye=Gs(Ye),Ye in hs)return;hs[Ye]=!0;const ce=Ye.endsWith(".css"),gt=ce?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ye}"]${gt}`))return;const ft=document.createElement("link");if(ft.rel=ce?"stylesheet":Ws,ce||(ft.as="script"),ft.crossOrigin="",ft.href=Ye,be&&ft.setAttribute("nonce",be),document.head.appendChild(ft),ce)return new Promise((ht,Zt)=>{ft.addEventListener("load",ht),ft.addEventListener("error",()=>Zt(new Error(`Unable to preload CSS for ${Ye}`)))})}))}function re(se){const be=new Event("vite:preloadError",{cancelable:!0});if(be.payload=se,window.dispatchEvent(be),!be.defaultPrevented)throw se}return ge.then(se=>{for(const be of se||[])be.status==="rejected"&&re(be.reason);return h().catch(re)})};function Js(M={}){const{immediate:h=!1,onNeedRefresh:Oe,onOfflineReady:J,onRegistered:ge,onRegisteredSW:re,onRegisterError:Ce}=M;let se,be;const ut=async(ce=!0)=>{await be};async function Ye(){if("serviceWorker"in navigator){if(se=await Hs(async()=>{const{Workbox:ce}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ce}},[]).then(({Workbox:ce})=>new ce("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ce=>{Ce?.(ce)}),!se)return;se.addEventListener("activated",ce=>{(ce.isUpdate||ce.isExternal)&&window.location.reload()}),se.addEventListener("installed",ce=>{ce.isUpdate||J?.()}),se.register({immediate:h}).then(ce=>{re?re("/habu26/sw.js",ce):ge?.(ce)}).catch(ce=>{Ce?.(ce)})}}return be=Ye(),ut}function Xs(){Js({immediate:!0})}const vs=document.getElementById("app");if(!vs)throw new Error("App-Container nicht gefunden.");Us(vs).init();Xs();
