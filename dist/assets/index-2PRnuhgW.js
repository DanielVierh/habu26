(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const de of document.querySelectorAll('link[rel="modulepreload"]'))Q(de);new MutationObserver(de=>{for(const se of de)if(se.type==="childList")for(const be of se.addedNodes)be.tagName==="LINK"&&be.rel==="modulepreload"&&Q(be)}).observe(document,{childList:!0,subtree:!0});function we(de){const se={};return de.integrity&&(se.integrity=de.integrity),de.referrerPolicy&&(se.referrerPolicy=de.referrerPolicy),de.crossOrigin==="use-credentials"?se.credentials="include":de.crossOrigin==="anonymous"?se.credentials="omit":se.credentials="same-origin",se}function Q(de){if(de.ep)return;de.ep=!0;const se=we(de);fetch(de.href,se)}})();const hi=[1,2,3,4,5,6,7,8,9,10,11,12];function es(){return new Date().toISOString()}function ut(B){const h=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${h}`}function pi(B,h){const we=new Date(B,h,0).getDate(),Q=[];for(let de=1;de<=we;de+=1){const se=new Date(Date.UTC(B,h-1,de));Q.push({isoDate:se.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Q}function fi(B){return B.map(h=>({id:ut("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Br(B,h,we){const Q=h.reduce((se,be)=>se+be.plannedCents,0),de=hi.map(se=>({month:se,days:pi(B,se),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:fi(h),fixedBudgetCents:Q,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:es(),templateVersion:we,months:de}}function Rs(B,h){return{id:ut("expense"),description:B,amountCents:h,createdAt:es()}}function Mr(B,h,we){const Q={id:ut("income"),description:B,amountCents:h,createdAt:es()};return we?{...Q,incomeSource:we}:Q}function $s(B,h){return B.toLocaleLowerCase("de-DE").includes(h)}function _r(B,h,we,Q){const de=h.trim(),se=de.toLocaleLowerCase("de-DE");if(!se)return{id:ut("search_eval"),keyword:"",keywordNormalized:"",createdAt:es(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let be=0,oe=0,pe=0,Ze=0,Re=0;const ce=Math.max(1,Math.min(12,Q)),dt=[],rt=[];return B.slice().sort((Le,Ct)=>Le.year-Ct.year).forEach(Le=>{let Ct=0,tn=0,Kn=0,nn=0;Le.months.slice().sort((xt,ht)=>xt.month-ht.month).forEach(xt=>{let ht=0,kt=0;if(xt.fixedCosts.forEach(vt=>{$s(vt.name,se)&&(ht+=1,kt+=vt.actualCents)}),xt.variableCosts.forEach(vt=>{$s(vt.description,se)&&(ht+=1,kt+=vt.amountCents)}),xt.variablePositions.forEach(vt=>{$s(vt.name,se)&&(ht+=1,kt+=vt.actualCents)}),xt.miscCosts.forEach(vt=>{$s(vt.description,se)&&(ht+=1,kt+=vt.amountCents)}),ht<=0)return;Ct+=ht,tn+=kt,(Le.year<we||Le.year===we&&xt.month<=ce)&&(nn+=1,Kn+=kt),be+=ht,oe+=kt,(Le.year<we||Le.year===we&&xt.month<=ce)&&(Ze+=1,Re+=kt),rt.push({year:Le.year,month:xt.month,hitCount:ht,totalCents:kt})}),!(Ct<=0)&&(Le.year===we&&(pe+=tn),dt.push({year:Le.year,hitCount:Ct,totalCents:tn,monthsWithHits:nn,monthAverageCents:nn>0?Math.round(Kn/nn):0}))}),{id:ut("search_eval"),keyword:de,keywordNormalized:se,createdAt:es(),totalHitCount:be,totalCents:oe,currentYearCents:pe,monthsWithHits:Ze,monthAverageCents:Ze>0?Math.round(Re/Ze):0,yearRows:dt,monthRows:rt}}var vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mi(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var Ss={exports:{}},gi=Ss.exports,Tr;function bi(){return Tr||(Tr=1,(function(B,h){((we,Q)=>{B.exports=Q()})(gi,function(){var we=function(e,t){return(we=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(a,s){a.__proto__=s}:function(a,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r])}))(e,t)},Q=function(){return(Q=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function de(e,t,a){for(var s,r=0,i=t.length;r<i;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:vi,be=Object.keys,oe=Array.isArray;function pe(e,t){return typeof t=="object"&&be(t).forEach(function(a){e[a]=t[a]}),e}typeof Promise>"u"||se.Promise||(se.Promise=Promise);var Ze=Object.getPrototypeOf,Re={}.hasOwnProperty;function ce(e,t){return Re.call(e,t)}function dt(e,t){typeof t=="function"&&(t=t(Ze(e))),(typeof Reflect>"u"?be:Reflect.ownKeys)(t).forEach(function(a){Le(e,a,t[a])})}var rt=Object.defineProperty;function Le(e,t,a,s){rt(e,t,pe(a&&ce(a,"get")&&typeof a.get=="function"?{get:a.get,set:a.set,configurable:!0}:{value:a,configurable:!0,writable:!0},s))}function Ct(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Le(e.prototype,"constructor",e),{extend:dt.bind(null,e.prototype)}}}}var tn=Object.getOwnPropertyDescriptor,Kn=[].slice;function nn(e,t,a){return Kn.call(e,t,a)}function xt(e,t){return t(e)}function ht(e){if(!e)throw new Error("Assertion Failed")}function kt(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Gt(e,t){if(typeof t=="string"&&ce(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var a=[],s=0,r=t.length;s<r;++s){var i=Gt(e,t[s]);a.push(i)}return a}var c,d=t.indexOf(".");return d===-1||(c=e[t.substr(0,d)])==null?void 0:Gt(c,t.substr(d+1))}function ft(e,t,a){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){ht(typeof a!="string"&&"length"in a);for(var s=0,r=t.length;s<r;++s)ft(e,t[s],a[s])}else{var i,c,d=t.indexOf(".");d!==-1?(i=t.substr(0,d),(d=t.substr(d+1))===""?a===void 0?oe(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=a:ft(c=(c=e[i])&&ce(e,i)?c:e[i]={},d,a)):a===void 0?oe(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=a}}function vt(e){var t,a={};for(t in e)ce(e,t)&&(a[t]=e[t]);return a}var Ms=[].concat;function La(e){return Ms.apply([],e)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(La([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),ts=new Set(At.map(function(e){return se[e]})),ta=null;function wt(e){return ta=new WeakMap,e=(function t(a){if(!a||typeof a!="object")return a;var s=ta.get(a);if(s)return s;if(oe(a)){s=[],ta.set(a,s);for(var r=0,i=a.length;r<i;++r)s.push(t(a[r]))}else if(ts.has(a.constructor))s=a;else{var c,d=Ze(a);for(c in s=d===Object.prototype?{}:Object.create(d),ta.set(a,s),a)ce(a,c)&&(s[c]=t(a[c]))}return s})(e),ta=null,e}var na={}.toString;function Na(e){return na.call(e).slice(8,-1)}var Ka=typeof Symbol<"u"?Symbol.iterator:"@@iterator",_s=typeof Ka=="symbol"?function(e){var t;return e!=null&&(t=e[Ka])&&t.apply(e)}:function(){return null};function dn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var it={};function ae(e){var t,a,s,r;if(arguments.length===1){if(oe(e))return e.slice();if(this===it&&typeof e=="string")return[e];if(r=_s(e))for(a=[];!(s=r.next()).done;)a.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(a=new Array(t);t--;)a[t]=e[t]}}else for(t=arguments.length,a=new Array(t);t--;)a[t]=arguments[t];return a}var an=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},At=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Bt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(At),ns={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function En(e,t){this.name=e,this.message=t}function as(e,t){return e+". Errors: "+Object.keys(t).map(function(a){return t[a].toString()}).filter(function(a,s,r){return r.indexOf(a)===s}).join(`
`)}function mt(e,t,a,s){this.failures=t,this.failedKeys=s,this.successCount=a,this.message=as(e,t)}function qn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(a){return t[a]}),this.failuresByPos=t,this.message=as(e,this.failures)}Ct(En).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Ct(mt).from(En),Ct(qn).from(En);var Ca=Bt.reduce(function(e,t){return e[t]=t+"Error",e},{}),Ts=En,te=Bt.reduce(function(e,t){var a=t+"Error";function s(r,i){this.name=a,r?typeof r=="string"?(this.message="".concat(r).concat(i?`
 `+i:""),this.inner=i||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=ns[t]||a,this.inner=null)}return Ct(s).from(Ts),e[t]=s,e},{}),ss=(te.Syntax=SyntaxError,te.Type=TypeError,te.Range=RangeError,At.reduce(function(e,t){return e[t+"Error"]=te[t],e},{}));At=Bt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=te[t]),e},{});function $e(){}function aa(e){return e}function Ps(e,t){return e==null||e===aa?t:function(a){return t(e(a))}}function Bn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function rs(e,t){return e===$e?t:function(){var a=e.apply(this,arguments),s=(a!==void 0&&(arguments[0]=a),this.onsuccess),r=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Bn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?Bn(r,this.onerror):r),i!==void 0?i:a}}function As(e,t){return e===$e?t:function(){e.apply(this,arguments);var a=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),a&&(this.onsuccess=this.onsuccess?Bn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?Bn(s,this.onerror):s)}}function is(e,t){return e===$e?t:function(r){var s=e.apply(this,arguments),r=(pe(r,s),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Bn(r,this.onsuccess):r),i&&(this.onerror=this.onerror?Bn(i,this.onerror):i),s===void 0?c===void 0?void 0:c:pe(s,c)}}function Is(e,t){return e===$e?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function sa(e,t){return e===$e?t:function(){var a=e.apply(this,arguments);if(a&&typeof a.then=="function"){for(var s=this,r=arguments.length,i=new Array(r);r--;)i[r]=arguments[r];return a.then(function(){return t.apply(s,i)})}return t.apply(this,arguments)}}At.ModifyError=mt,At.DexieError=En,At.BulkError=qn;var It=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Vn(e){It=e}var Rn={},jn=100,Ee=typeof Promise>"u"?[]:(Bt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ee=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Ze(Ee),Bt]:[Bt,Ze(Bt),Bt]),Bt=Ee[0],Zn=Ee[1],Zn=Zn&&Zn.then,Vt=Bt&&Bt.constructor,Yn=!!Ee[2],hn=function(e,t){oa.push([e,t]),zn&&(queueMicrotask(Wn),zn=!1)},qa=!0,zn=!0,sn=[],ra=[],ia=aa,pn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},U=pn,oa=[],Ot=0,fn=[];function W(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=U;if(typeof e!="function"){if(e!==Rn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&xa(this,this._value)}else this._state=null,this._value=null,++t.ref,(function a(s,r){try{r(function(i){if(s._state===null){if(i===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&mn();i&&typeof i.then=="function"?a(s,function(d,b){i instanceof W?i._then(d,b):i.then(d,b)}):(s._state=!0,s._value=i,je(s)),c&&Mn()}},xa.bind(null,s))}catch(i){xa(s,i)}})(this,e)}var vn={get:function(){var e=U,t=wa;function a(s,r){var i=this,c=!e.global&&(e!==U||t!==wa),d=c&&!bn(),b=new W(function(E,x){Mt(i,new os(ls(s,e,c,d),ls(r,e,c,d),E,x,e))});return this._consoleTask&&(b._consoleTask=this._consoleTask),b}return a.prototype=Rn,a},set:function(e){Le(this,"then",e&&e.prototype===Rn?vn:{get:function(){return e},set:vn.set})}};function os(e,t,a,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=a,this.reject=s,this.psd=r}function xa(e,t){var a,s;ra.push(t),e._state===null&&(a=e._lib&&mn(),t=ia(t),e._state=!1,e._value=t,s=e,sn.some(function(r){return r._value===s._value})||sn.push(s),je(e),a)&&Mn()}function je(e){var t=e._listeners;e._listeners=[];for(var a=0,s=t.length;a<s;++a)Mt(e,t[a]);var r=e._PSD;--r.ref||r.finalize(),Ot===0&&(++Ot,hn(function(){--Ot==0&&la()},[]))}function Mt(e,t){if(e._state===null)e._listeners.push(t);else{var a=e._state?t.onFulfilled:t.onRejected;if(a===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ot,hn(ve,[a,e,t])}}function ve(e,t,a){try{var s,r=t._value;!t._state&&ra.length&&(ra=[]),s=It&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||ra.indexOf(r)!==-1||(i=>{for(var c=sn.length;c;)if(sn[--c]._value===i._value)return sn.splice(c,1)})(t),a.resolve(s)}catch(i){a.reject(i)}finally{--Ot==0&&la(),--a.psd.ref||a.psd.finalize()}}function Wn(){_n(pn,function(){mn()&&Mn()})}function mn(){var e=qa;return zn=qa=!1,e}function Mn(){var e,t,a;do for(;0<oa.length;)for(e=oa,oa=[],a=e.length,t=0;t<a;++t){var s=e[t];s[0].apply(null,s[1])}while(0<oa.length);zn=qa=!0}function la(){for(var e=sn,t=(sn=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),fn.slice(0)),a=t.length;a;)t[--a]()}function ca(e){return new W(Rn,!1,e)}function me(e,t){var a=U;return function(){var s=mn(),r=U;try{return yn(a,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{yn(r,!1),s&&Mn()}}}dt(W.prototype,{then:vn,_then:function(e,t){Mt(this,new os(null,null,e,t,U))},catch:function(e){var t,a;return arguments.length===1?this.then(null,e):(t=e,a=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?a:ca)(s)}):this.then(null,function(s){return(s&&s.name===t?a:ca)(s)}))},finally:function(e){return this.then(function(t){return W.resolve(e()).then(function(){return t})},function(t){return W.resolve(e()).then(function(){return ca(t)})})},timeout:function(e,t){var a=this;return e<1/0?new W(function(s,r){var i=setTimeout(function(){return r(new te.Timeout(t))},e);a.then(s,r).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Le(W.prototype,Symbol.toStringTag,"Dexie.Promise"),pn.env=Va(),dt(W,{all:function(){var e=ae.apply(null,arguments).map($a);return new W(function(t,a){e.length===0&&t([]);var s=e.length;e.forEach(function(r,i){return W.resolve(r).then(function(c){e[i]=c,--s||t(e)},a)})})},resolve:function(e){return e instanceof W?e:e&&typeof e.then=="function"?new W(function(t,a){e.then(t,a)}):new W(Rn,!0,e)},reject:ca,race:function(){var e=ae.apply(null,arguments).map($a);return new W(function(t,a){e.map(function(s){return W.resolve(s).then(t,a)})})},PSD:{get:function(){return U},set:function(e){return U=e}},totalEchoes:{get:function(){return wa}},newPSD:gn,usePSD:_n,scheduler:{get:function(){return hn},set:function(e){hn=e}},rejectionMapper:{get:function(){return ia},set:function(e){ia=e}},follow:function(e,t){return new W(function(a,s){return gn(function(r,i){var c=U;c.unhandleds=[],c.onunhandled=i,c.finalize=Bn(function(){var d,b=this;d=function(){b.unhandleds.length===0?r():i(b.unhandleds[0])},fn.push(function E(){d(),fn.splice(fn.indexOf(E),1)}),++Ot,hn(function(){--Ot==0&&la()},[])},c.finalize),e()},t,a,s)})}}),Vt&&(Vt.allSettled&&Le(W,"allSettled",function(){var e=ae.apply(null,arguments).map($a);return new W(function(t){e.length===0&&t([]);var a=e.length,s=new Array(a);e.forEach(function(r,i){return W.resolve(r).then(function(c){return s[i]={status:"fulfilled",value:c}},function(c){return s[i]={status:"rejected",reason:c}}).then(function(){return--a||t(s)})})})}),Vt.any&&typeof AggregateError<"u"&&Le(W,"any",function(){var e=ae.apply(null,arguments).map($a);return new W(function(t,a){e.length===0&&a(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(i,c){return W.resolve(i).then(function(d){return t(d)},function(d){r[c]=d,--s||a(new AggregateError(r))})})})}),Vt.withResolvers)&&(W.withResolvers=Vt.withResolvers);var Be={awaits:0,echoes:0,id:0},Os=0,ua=[],ka=0,wa=0,Fs=0;function gn(e,c,a,s){var r=U,i=Object.create(r),c=(i.parent=r,i.ref=0,i.global=!1,i.id=++Fs,pn.env,i.env=Yn?{Promise:W,PromiseProp:{value:W,configurable:!0,writable:!0},all:W.all,race:W.race,allSettled:W.allSettled,any:W.any,resolve:W.resolve,reject:W.reject}:{},c&&pe(i,c),++r.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},_n(i,e,a,s));return i.ref===0&&i.finalize(),c}function Gn(){return Be.id||(Be.id=++Os),++Be.awaits,Be.echoes+=jn,Be.id}function bn(){return!!Be.awaits&&(--Be.awaits==0&&(Be.id=0),Be.echoes=Be.awaits*jn,!0)}function $a(e){return Be.echoes&&e&&e.constructor===Vt?(Gn(),e.then(function(t){return bn(),t},function(t){return bn(),Ue(t)})):e}function Ds(){var e=ua[ua.length-1];ua.pop(),yn(e,!1)}function yn(e,t){var a,s,r=U;(t?!Be.echoes||ka++&&e===U:!ka||--ka&&e===U)||queueMicrotask(t?(function(i){++wa,Be.echoes&&--Be.echoes!=0||(Be.echoes=Be.awaits=Be.id=0),ua.push(U),yn(i,!0)}).bind(null,e):Ds),e!==U&&(U=e,r===pn&&(pn.env=Va()),Yn)&&(a=pn.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(se,"Promise",s.PromiseProp),a.all=s.all,a.race=s.race,a.resolve=s.resolve,a.reject=s.reject,s.allSettled&&(a.allSettled=s.allSettled),s.any)&&(a.any=s.any)}function Va(){var e=se.Promise;return Yn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function _n(e,t,a,s,r){var i=U;try{return yn(e,!0),t(a,s,r)}finally{yn(i,!1)}}function ls(e,t,a,s){return typeof e!="function"?e:function(){var r=U;a&&Gn(),yn(t,!0);try{return e.apply(this,arguments)}finally{yn(r,!1),s&&queueMicrotask(bn)}}}function Ra(e){Promise===Vt&&Be.echoes===0?ka===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Zn).indexOf("[native code]")===-1&&(Gn=bn=$e);var Ue=W.reject,Tn="￿",rn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",cs="String expected.",Un=[],Sa="__dbnames",ja="readonly",Pn="readwrite";function Cn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Ya={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ea(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=wt(t))[e],t}}function us(){throw te.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function fe(e,t){try{var a=ds(e),s=ds(t);if(a!==s)return a==="Array"?1:s==="Array"?-1:a==="binary"?1:s==="binary"?-1:a==="string"?1:s==="string"?-1:a==="Date"?1:s!=="Date"?NaN:-1;switch(a){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=za(e),i=za(t),c=r.length,d=i.length,b=c<d?c:d,E=0;E<b;++E)if(r[E]!==i[E])return r[E]<i[E]?-1:1;return c===d?0:c<d?-1:1;case"Array":for(var x=e,m=t,k=x.length,w=m.length,C=k<w?k:w,y=0;y<C;++y){var M=fe(x[y],m[y]);if(M!==0)return M}return k===w?0:k<w?-1:1}}catch{}return NaN}function ds(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Na(e))==="ArrayBuffer")?"binary":t}function za(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Hn(e,t,a){var s=e.schema.yProps;return s?(t&&0<a.numFailures&&(t=t.filter(function(r,i){return!a.failures[i]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return a})):a}hs.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var a=t.add;if(oe(a))return de(de([],oe(e)?e:[],!0),a).sort();if(typeof a=="number")return(Number(e)||0)+a;if(typeof a=="bigint")try{return BigInt(e)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(t.remove!==void 0){var s=t.remove;if(oe(s))return oe(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return a=(a=t.replacePrefix)==null?void 0:a[0],a&&typeof e=="string"&&e.startsWith(a)?t.replacePrefix[1]+e.substring(a.length):e};var da=hs;function hs(e){this["@@propmod"]=e}function ps(e,t){for(var a=be(t),s=a.length,r=!1,i=0;i<s;++i){var c=a[i],d=t[c],b=Gt(e,c);d instanceof da?(ft(e,c,d.execute(b)),r=!0):b!==d&&(ft(e,c,d),r=!0)}return r}Me.prototype._trans=function(e,t,a){var s=this._tx||U.trans,r=this.name,i=It&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(E,x,m){if(m.schema[r])return t(m.idbtrans,m);throw new te.NotFound("Table "+r+" not part of transaction")}var d=mn();try{var b=s&&s.db._novip===this.db._novip?s===U.trans?s._promise(e,c,a):gn(function(){return s._promise(e,c,a)},{trans:s,transless:U.transless||U}):(function E(x,m,k,w){if(x.idbdb&&(x._state.openComplete||U.letThrough||x._vip)){var C=x._createTransaction(m,k,x._dbSchema);try{C.create(),x._state.PR1398_maxLoop=3}catch(y){return y.name===Ca.InvalidState&&x.isOpen()&&0<--x._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),x.close({disableAutoOpen:!1}),x.open().then(function(){return E(x,m,k,w)})):Ue(y)}return C._promise(m,function(y,M){return gn(function(){return U.trans=C,w(y,M,C)})}).then(function(y){if(m==="readwrite")try{C.idbtrans.commit()}catch{}return m==="readonly"?y:C._completion.then(function(){return y})})}if(x._state.openComplete)return Ue(new te.DatabaseClosed(x._state.dbOpenError));if(!x._state.isBeingOpened){if(!x._state.autoOpen)return Ue(new te.DatabaseClosed);x.open().catch($e)}return x._state.dbReadyPromise.then(function(){return E(x,m,k,w)})})(this.db,e,[this.name],c);return i&&(b._consoleTask=i,b=b.catch(function(E){return console.trace(E),Ue(E)})),b}finally{d&&Mn()}},Me.prototype.get=function(e,t){var a=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ue(new te.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return a.core.get({trans:s,key:e}).then(function(r){return a.hook.reading.fire(r)})}).then(t)},Me.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(oe(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=be(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(d){if(d.compound&&t.every(function(E){return 0<=d.keyPath.indexOf(E)})){for(var b=0;b<t.length;++b)if(t.indexOf(d.keyPath[b])===-1)return!1;return!0}return!1}).sort(function(d,b){return d.keyPath.length-b.keyPath.length})[0];if(a&&this.db._maxKey!==Tn)return c=a.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(d){return e[d]}));!a&&It&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(d,b){return fe(d,b)===0}var c=t.reduce(function(x,b){var E=x[0],x=x[1],m=s[b],k=e[b];return[E||m,E||!m?Cn(x,m&&m.multi?function(w){return w=Gt(w,b),oe(w)&&w.some(function(C){return r(k,C)})}:function(w){return r(k,Gt(w,b))}):x]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):a?this.filter(c):this.where(t).equals("")},Me.prototype.filter=function(e){return this.toCollection().and(e)},Me.prototype.count=function(e){return this.toCollection().count(e)},Me.prototype.offset=function(e){return this.toCollection().offset(e)},Me.prototype.limit=function(e){return this.toCollection().limit(e)},Me.prototype.each=function(e){return this.toCollection().each(e)},Me.prototype.toArray=function(e){return this.toCollection().toArray(e)},Me.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Me.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,oe(e)?"[".concat(e.join("+"),"]"):e))},Me.prototype.reverse=function(){return this.toCollection().reverse()},Me.prototype.mapToClass=function(e){for(var t=this.db,a=this.name,s=((this.schema.mappedClass=e).prototype instanceof us&&(e=(c=>{var d=x,b=c;if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function E(){this.constructor=d}function x(){return c!==null&&c.apply(this,arguments)||this}return we(d,b),d.prototype=b===null?Object.create(b):(E.prototype=b.prototype,new E),Object.defineProperty(x.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),x.prototype.table=function(){return a},x})(e)),new Set),r=e.prototype;r;r=Ze(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function i(c){if(!c)return c;var d,b=Object.create(e.prototype);for(d in c)if(!s.has(d))try{b[d]=c[d]}catch{}return b}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},Me.prototype.defineClass=function(){return this.mapToClass(function(e){pe(this,e)})},Me.prototype.add=function(e,t){var a=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=Ea(i)(e)),this._trans("readwrite",function(d){return a.core.mutate({trans:d,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(d){return d.numFailures?W.reject(d.failures[0]):d.lastResult}).then(function(d){if(i)try{ft(e,i,d)}catch{}return d})},Me.prototype.upsert=function(e,t){var a=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return a.core.get({trans:r,key:e}).then(function(i){var c=i??{};return ps(c,t),s&&ft(c,s,e),a.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(d){return d.numFailures?W.reject(d.failures[0]):!!i})})})},Me.prototype.update=function(e,t){return typeof e!="object"||oe(e)?this.where(":id").equals(e).modify(t):(e=Gt(e,this.schema.primKey.keyPath))===void 0?Ue(new te.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Me.prototype.put=function(e,t){var a=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=Ea(i)(e)),this._trans("readwrite",function(d){return a.core.mutate({trans:d,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(d){return d.numFailures?W.reject(d.failures[0]):d.lastResult}).then(function(d){if(i)try{ft(e,i,d)}catch{}return d})},Me.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:[e]}).then(function(s){return Hn(t,[e],s)}).then(function(s){return s.numFailures?W.reject(s.failures[0]):void 0})})},Me.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Ya}).then(function(a){return Hn(e,null,a)})}).then(function(t){return t.numFailures?W.reject(t.failures[0]):void 0})},Me.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(a){return t.core.getMany({keys:e,trans:a}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Me.prototype.bulkAdd=function(e,t,a){var s=this,r=Array.isArray(t)?t:void 0,i=(a=a||(r?void 0:t))?a.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new te.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,E=d&&E?e.map(Ea(d)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:E,wantResults:i}).then(function(x){var m=x.numFailures,k=x.failures;if(m===0)return i?x.results:x.lastResult;throw new qn("".concat(s.name,".bulkAdd(): ").concat(m," of ").concat(b," operations failed"),k)})})},Me.prototype.bulkPut=function(e,t,a){var s=this,r=Array.isArray(t)?t:void 0,i=(a=a||(r?void 0:t))?a.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new te.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,E=d&&E?e.map(Ea(d)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:E,wantResults:i}).then(function(x){var m=x.numFailures,k=x.failures;if(m===0)return i?x.results:x.lastResult;throw new qn("".concat(s.name,".bulkPut(): ").concat(m," of ").concat(b," operations failed"),k)})})},Me.prototype.bulkUpdate=function(e){var t=this,a=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return a.getMany({trans:c,keys:s,cache:"clone"}).then(function(d){var b=[],E=[],x=(e.forEach(function(m,k){var w=m.key,C=m.changes,y=d[k];if(y){for(var M=0,_=Object.keys(C);M<_.length;M++){var S=_[M],P=C[S];if(S===t.schema.primKey.keyPath){if(fe(P,w)!==0)throw new te.Constraint("Cannot update primary key in bulkUpdate()")}else ft(y,S,P)}i.push(k),b.push(w),E.push(y)}}),b.length);return a.mutate({trans:c,type:"put",keys:b,values:E,updates:{keys:s,changeSpecs:r}}).then(function(m){var k=m.numFailures,w=m.failures;if(k===0)return x;for(var C=0,y=Object.keys(w);C<y.length;C++){var M,_=y[C],S=i[Number(_)];S!=null&&(M=w[_],delete w[_],w[S]=M)}throw new qn("".concat(t.name,".bulkUpdate(): ").concat(k," of ").concat(x," operations failed"),w)})})})},Me.prototype.bulkDelete=function(e){var t=this,a=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Hn(t,e,r)})}).then(function(s){var r=s.numFailures,i=s.failures;if(r===0)return s.lastResult;throw new qn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(a," operations failed"),i)})};var fs=Me;function Me(){}function ha(e){function t(c,d){if(d){for(var b=arguments.length,E=new Array(b-1);--b;)E[b-1]=arguments[b];return a[c].subscribe.apply(null,E),e}if(typeof c=="string")return a[c]}var a={};t.addEventType=i;for(var s=1,r=arguments.length;s<r;++s)i(arguments[s]);return t;function i(c,d,b){var E,x;if(typeof c!="object")return d=d||Is,x={subscribers:[],fire:b=b||$e,subscribe:function(m){x.subscribers.indexOf(m)===-1&&(x.subscribers.push(m),x.fire=d(x.fire,m))},unsubscribe:function(m){x.subscribers=x.subscribers.filter(function(k){return k!==m}),x.fire=x.subscribers.reduce(d,b)}},a[c]=t[c]=x;be(E=c).forEach(function(m){var k=E[m];if(oe(k))i(m,E[m][0],E[m][1]);else{if(k!=="asap")throw new te.InvalidArgument("Invalid event config");var w=i(m,aa,function(){for(var C=arguments.length,y=new Array(C);C--;)y[C]=arguments[C];w.subscribers.forEach(function(M){kt(function(){M.apply(null,y)})})})}})}}function pa(e,t){return Ct(t).from({prototype:e}),t}function An(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Wa(e,t){e.filter=Cn(e.filter,t)}function Ba(e,t,a){var s=e.replayFilter;e.replayFilter=s?function(){return Cn(s(),t())}:t,e.justLimit=a&&!s}function Ma(e,t){if(e.isPrimKey)return t.primaryKey;var a=t.getIndexByKeyPath(e.index);if(a)return a;throw new te.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function vs(e,t,a){var s=Ma(e,t.schema);return t.openCursor({trans:a,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function ne(e,t,a,s){var r,i,c=e.replayFilter?Cn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},i=function(d,b,E){var x,m;c&&!c(b,E,function(k){return b.stop(k)},function(k){return b.fail(k)})||((m=""+(x=b.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(x)),ce(r,m))||(r[m]=!0,t(d,b,E))},Promise.all([e.or._iterate(i,a),ms(vs(e,s,a),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):ms(vs(e,s,a),Cn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function ms(e,t,a,s){var r=me(s?function(i,c,d){return a(s(i),c,d)}:a);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(d){return c=d},function(d){i.stop(d),c=$e},function(d){i.fail(d),c=$e})||r(i.value,i,function(d){return c=d}),c()})})}o.prototype._read=function(e,t){var a=this._ctx;return a.error?a.table._trans(null,Ue.bind(null,a.error)):a.table._trans("readonly",e).then(t)},o.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ue.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},o.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Cn(t.algorithm,e)},o.prototype._iterate=function(e,t){return ne(this._ctx,e,t,this._ctx.table.core)},o.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return e&&pe(a,e),t._ctx=a,t},o.prototype.raw=function(){return this._ctx.valueMapper=null,this},o.prototype.each=function(e){var t=this._ctx;return this._read(function(a){return ne(t,e,a,t.table.core)})},o.prototype.count=function(e){var t=this;return this._read(function(a){var s,r=t._ctx,i=r.table.core;return An(r,!0)?i.count({trans:a,query:{index:Ma(r,i.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,ne(r,function(){return++s,!1},a,i).then(function(){return s}))}).then(e)},o.prototype.sortBy=function(e,t){var a=e.split(".").reverse(),s=a[0],r=a.length-1;function i(b,E){return E?i(b[a[E]],E-1):b[s]}var c=this._ctx.dir==="next"?1:-1;function d(b,E){return fe(i(b,r),i(E,r))*c}return this.toArray(function(b){return b.sort(d)}).then(t)},o.prototype.toArray=function(e){var t=this;return this._read(function(a){var s,r,i,c=t._ctx;return c.dir==="next"&&An(c,!0)&&0<c.limit?(s=c.valueMapper,r=Ma(c,c.table.core.schema),c.table.core.query({trans:a,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(d){return d=d.result,s?d.map(s):d})):(i=[],ne(c,function(d){return i.push(d)},a,c.table.core).then(function(){return i}))},e)},o.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,An(t)?Ba(t,function(){var a=e;return function(s,r){return a===0||(a===1?--a:r(function(){s.advance(a),a=0}),!1)}}):Ba(t,function(){var a=e;return function(){return--a<0}})),this},o.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Ba(this._ctx,function(){var t=e;return function(a,s,r){return--t<=0&&s(r),0<=t}},!0),this},o.prototype.until=function(e,t){return Wa(this._ctx,function(a,s,r){return!e(a.value)||(s(r),t)}),this},o.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},o.prototype.last=function(e){return this.reverse().first(e)},o.prototype.filter=function(e){var t;return Wa(this._ctx,function(a){return e(a.value)}),(t=this._ctx).isMatch=Cn(t.isMatch,e),this},o.prototype.and=function(e){return this.filter(e)},o.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},o.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},o.prototype.desc=function(){return this.reverse()},o.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,s){e(s.key,s)})},o.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},o.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,s){e(s.primaryKey,s)})},o.prototype.keys=function(e){var t=this._ctx,a=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){a.push(r.key)}).then(function(){return a}).then(e)},o.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&An(t,!0)&&0<t.limit)return this._read(function(s){var r=Ma(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var a=[];return this.each(function(s,r){a.push(r.primaryKey)}).then(function(){return a}).then(e)},o.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},o.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},o.prototype.lastKey=function(e){return this.reverse().firstKey(e)},o.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Wa(this._ctx,function(s){var s=s.primaryKey.toString(),r=ce(e,s);return e[s]=!0,!r})),this},o.prototype.modify=function(e){var t=this,a=this._ctx;return this._write(function(s){function r(y,M){var _=M.failures;k+=y-M.numFailures;for(var S=0,P=be(_);S<P.length;S++){var F=P[S];m.push(_[F])}}var i=typeof e=="function"?e:function(y){return ps(y,e)},c=a.table.core,x=c.schema.primaryKey,d=x.outbound,b=x.extractKey,E=200,x=t.db._options.modifyChunkSize,m=(x&&(E=typeof x=="object"?x[c.name]||x["*"]||200:x),[]),k=0,w=[],C=e===p;return t.clone().primaryKeys().then(function(y){function M(S){var P=Math.min(E,y.length-S),F=y.slice(S,S+P);return(C?Promise.resolve([]):c.getMany({trans:s,keys:F,cache:"immutable"})).then(function(R){var j=[],D=[],J=d?[]:null,Y=C?F:[];if(!C)for(var L=0;L<P;++L){var X=R[L],he={value:wt(X),primKey:y[S+L]};i.call(he,he.value,he)!==!1&&(he.value==null?Y.push(y[S+L]):d||fe(b(X),b(he.value))===0?(D.push(he.value),d&&J.push(y[S+L])):(Y.push(y[S+L]),j.push(he.value)))}return Promise.resolve(0<j.length&&c.mutate({trans:s,type:"add",values:j}).then(function(ge){for(var ee in ge.failures)Y.splice(parseInt(ee),1);r(j.length,ge)})).then(function(){return(0<D.length||_&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:J,values:D,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(ge){return r(D.length,ge)})}).then(function(){return(0<Y.length||_&&C)&&c.mutate({trans:s,type:"delete",keys:Y,criteria:_,isAdditionalChunk:0<S}).then(function(ge){return Hn(a.table,Y,ge)}).then(function(ge){return r(Y.length,ge)})}).then(function(){return y.length>S+P&&M(S+E)})})}var _=An(a)&&a.limit===1/0&&(typeof e!="function"||C)&&{index:a.index,range:a.range};return M(0).then(function(){if(0<m.length)throw new mt("Error modifying one or more objects",m,k,w);return y.length})})})},o.prototype.delete=function(){var e=this._ctx,t=e.range;return!An(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(p):this._write(function(a){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:a,query:{index:s,range:r}}).then(function(i){return e.table.core.mutate({trans:a,type:"deleteRange",range:r}).then(function(b){var d=b.failures,b=b.numFailures;if(b)throw new mt("Could not delete some values",Object.keys(d).map(function(E){return d[E]}),i-b);return i-b})})})};var l=o;function o(){}var p=function(e,t){return t.value=null};function u(e,t){return e<t?-1:e===t?0:1}function v(e,t){return t<e?-1:e===t?0:1}function $(e,t,a){return e=e instanceof V?new e.Collection(e):e,e._ctx.error=new(a||TypeError)(t),e}function A(e){return new e.Collection(e,function(){return G("")}).limit(0)}function O(w,t,a,s){var r,i,c,d,b,E,x,m=a.length;if(!a.every(function(y){return typeof y=="string"}))return $(w,cs);function k(y){r=y==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},i=y==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=y==="next"?u:v;var M=a.map(function(_){return{lower:i(_),upper:r(_)}}).sort(function(_,S){return c(_.lower,S.lower)});d=M.map(function(_){return _.upper}),b=M.map(function(_){return _.lower}),x=(E=y)==="next"?"":s}k("next");var w=new w.Collection(w,function(){return I(d[0],b[m-1]+s)}),C=(w._ondirectionchange=function(y){k(y)},0);return w._addAlgorithm(function(y,M,_){var S=y.key;if(typeof S=="string"){var P=i(S);if(t(P,b,C))return!0;for(var F=null,R=C;R<m;++R){var j=((D,J,Y,L,X,he)=>{for(var ge=Math.min(D.length,L.length),ee=-1,ue=0;ue<ge;++ue){var Oe=J[ue];if(Oe!==L[ue])return X(D[ue],Y[ue])<0?D.substr(0,ue)+Y[ue]+Y.substr(ue+1):X(D[ue],L[ue])<0?D.substr(0,ue)+L[ue]+Y.substr(ue+1):0<=ee?D.substr(0,ee)+J[ee]+Y.substr(ee+1):null;X(D[ue],Oe)<0&&(ee=ue)}return ge<L.length&&he==="next"?D+Y.substr(D.length):ge<D.length&&he==="prev"?D.substr(0,Y.length):ee<0?null:D.substr(0,ee)+L[ee]+Y.substr(ee+1)})(S,P,d[R],b[R],c,E);j===null&&F===null?C=R+1:(F===null||0<c(F,j))&&(F=j)}M(F!==null?function(){y.continue(F+x)}:_)}return!1}),w}function I(e,t,a,s){return{type:2,lower:e,upper:t,lowerOpen:a,upperOpen:s}}function G(e){return{type:1,lower:e,upper:e}}Object.defineProperty(z.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),z.prototype.between=function(e,t,a,s){a=a!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(a||s)&&(!a||!s)?A(this):new this.Collection(this,function(){return I(e,t,!a,!s)})}catch{return $(this,rn)}},z.prototype.equals=function(e){return e==null?$(this,rn):new this.Collection(this,function(){return G(e)})},z.prototype.above=function(e){return e==null?$(this,rn):new this.Collection(this,function(){return I(e,void 0,!0)})},z.prototype.aboveOrEqual=function(e){return e==null?$(this,rn):new this.Collection(this,function(){return I(e,void 0,!1)})},z.prototype.below=function(e){return e==null?$(this,rn):new this.Collection(this,function(){return I(void 0,e,!1,!0)})},z.prototype.belowOrEqual=function(e){return e==null?$(this,rn):new this.Collection(this,function(){return I(void 0,e)})},z.prototype.startsWith=function(e){return typeof e!="string"?$(this,cs):this.between(e,e+Tn,!0,!0)},z.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):O(this,function(t,a){return t.indexOf(a[0])===0},[e],Tn)},z.prototype.equalsIgnoreCase=function(e){return O(this,function(t,a){return t===a[0]},[e],"")},z.prototype.anyOfIgnoreCase=function(){var e=ae.apply(it,arguments);return e.length===0?A(this):O(this,function(t,a){return a.indexOf(t)!==-1},e,"")},z.prototype.startsWithAnyOfIgnoreCase=function(){var e=ae.apply(it,arguments);return e.length===0?A(this):O(this,function(t,a){return a.some(function(s){return t.indexOf(s)===0})},e,Tn)},z.prototype.anyOf=function(){var e,t,a=this,s=ae.apply(it,arguments),r=this._cmp;try{s.sort(r)}catch{return $(this,rn)}return s.length===0?A(this):((e=new this.Collection(this,function(){return I(s[0],s[s.length-1])}))._ondirectionchange=function(i){r=i==="next"?a._ascending:a._descending,s.sort(r)},t=0,e._addAlgorithm(function(i,c,d){for(var b=i.key;0<r(b,s[t]);)if(++t===s.length)return c(d),!1;return r(b,s[t])===0||(c(function(){i.continue(s[t])}),!1)}),e)},z.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},z.prototype.noneOf=function(){var e=ae.apply(it,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return $(this,rn)}var t=e.reduce(function(a,s){return a?a.concat([[a[a.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},z.prototype.inAnyRange=function(e,_){var a=this,s=this._cmp,r=this._ascending,i=this._descending,c=this._min,d=this._max;if(e.length===0)return A(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return $(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",te.InvalidArgument);var b=!_||_.includeLowers!==!1,E=_&&_.includeUppers===!0,x,m=r;function k(S,P){return m(S[0],P[0])}try{(x=e.reduce(function(S,P){for(var F=0,R=S.length;F<R;++F){var j=S[F];if(s(P[0],j[1])<0&&0<s(P[1],j[0])){j[0]=c(j[0],P[0]),j[1]=d(j[1],P[1]);break}}return F===R&&S.push(P),S},[])).sort(k)}catch{return $(this,rn)}var w=0,C=E?function(S){return 0<r(S,x[w][1])}:function(S){return 0<=r(S,x[w][1])},y=b?function(S){return 0<i(S,x[w][0])}:function(S){return 0<=i(S,x[w][0])},M=C,_=new this.Collection(this,function(){return I(x[0][0],x[x.length-1][1],!b,!E)});return _._ondirectionchange=function(S){m=S==="next"?(M=C,r):(M=y,i),x.sort(k)},_._addAlgorithm(function(S,P,F){for(var R,j=S.key;M(j);)if(++w===x.length)return P(F),!1;return!C(R=j)&&!y(R)||(a._cmp(j,x[w][1])===0||a._cmp(j,x[w][0])===0||P(function(){m===r?S.continue(x[w][0]):S.continue(x[w][1])}),!1)}),_},z.prototype.startsWithAnyOf=function(){var e=ae.apply(it,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?A(this):this.inAnyRange(e.map(function(t){return[t,t+Tn]})):$(this,"startsWithAnyOf() only works with strings")};var V=z;function z(){}function H(e){return me(function(t){return ie(t),e(t.target.error),!1})}function ie(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Ce="storagemutated",He="x-storagemutated-1",le=ha(null,Ce),ze=(Ke.prototype._lock=function(){return ht(!U.global),++this._reculock,this._reculock!==1||U.global||(U.lockOwnerFor=this),this},Ke.prototype._unlock=function(){if(ht(!U.global),--this._reculock==0)for(U.global||(U.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{_n(e[1],e[0])}catch{}}return this},Ke.prototype._locked=function(){return this._reculock&&U.lockOwnerFor!==this},Ke.prototype.create=function(e){var t=this;if(this.mode){var a=this.db.idbdb,s=this.db._state.dbOpenError;if(ht(!this.idbtrans),!e&&!a)switch(s&&s.name){case"DatabaseClosedError":throw new te.DatabaseClosed(s);case"MissingAPIError":throw new te.MissingAPI(s.message,s);default:throw new te.OpenFailed(s)}if(!this.active)throw new te.TransactionInactive;ht(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||a).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=me(function(r){ie(r),t._reject(e.error)}),e.onabort=me(function(r){ie(r),t.active&&t._reject(new te.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=me(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&le.storagemutated.fire(e.mutatedParts)})}return this},Ke.prototype._promise=function(e,t,a){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ue(new te.ReadOnly("Transaction is readonly")):this.active?this._locked()?new W(function(i,c){r._blockedFuncs.push([function(){r._promise(e,t,a).then(i,c)},U])}):a?gn(function(){var i=new W(function(c,d){r._lock();var b=t(c,d,r);b&&b.then&&b.then(c,d)});return i.finally(function(){return r._unlock()}),i._lib=!0,i}):((s=new W(function(i,c){var d=t(i,c,r);d&&d.then&&d.then(i,c)}))._lib=!0,s):Ue(new te.TransactionInactive)},Ke.prototype._root=function(){return this.parent?this.parent._root():this},Ke.prototype.waitFor=function(e){var t,a=this._root(),s=W.resolve(e),r=(a._waitingFor?a._waitingFor=a._waitingFor.then(function(){return s}):(a._waitingFor=s,a._waitingQueue=[],t=a.idbtrans.objectStore(a.storeNames[0]),(function i(){for(++a._spinCount;a._waitingQueue.length;)a._waitingQueue.shift()();a._waitingFor&&(t.get(-1/0).onsuccess=i)})()),a._waitingFor);return new W(function(i,c){s.then(function(d){return a._waitingQueue.push(me(i.bind(null,d)))},function(d){return a._waitingQueue.push(me(c.bind(null,d)))}).finally(function(){a._waitingFor===r&&(a._waitingFor=null)})})},Ke.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new te.Abort))},Ke.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ce(t,e))return t[e];var a=this.schema[e];if(a)return(a=new this.db.Table(e,a,this)).core=this.db.core.table(e),t[e]=a;throw new te.NotFound("Table "+e+" not part of transaction")},Ke);function Ke(){}function _e(e,t,a,s,r,i,c,d){return{name:e,keyPath:t,unique:a,multi:s,auto:r,compound:i,src:(a&&!c?"&":"")+(s?"*":"")+(r?"++":"")+at(t),type:d}}function at(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ft(e,t,a){return{name:e,primKey:t,indexes:a,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},a.reduce(function(r,i,c){return i=s(i,c),i&&(r[i[0]]=i[1]),r},{}))};var s}var K=function(e){try{return e.only([[]]),K=function(){return[[]]},[[]]}catch{return K=function(){return Tn},Tn}};function $t(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(a){return a[t]}:function(a){return Gt(a,t)}:function(a){return Gt(a,e)};var t}function gt(e){return[].slice.call(e)}var on=0;function bt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function ye(e,t,b){function s(C){if(C.type===3)return null;if(C.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=C.lower,k=C.upper,w=C.lowerOpen,C=C.upperOpen;return m===void 0?k===void 0?null:t.upperBound(k,!!C):k===void 0?t.lowerBound(m,!!w):t.bound(m,k,!!w,!!C)}function r(x){var m,k=x.name;return{name:k,schema:x,mutate:function(w){var C=w.trans,y=w.type,M=w.keys,_=w.values,S=w.range;return new Promise(function(P,F){P=me(P);var R=C.objectStore(k),j=R.keyPath==null,D=y==="put"||y==="add";if(!D&&y!=="delete"&&y!=="deleteRange")throw new Error("Invalid operation type: "+y);var J,Y=(M||_||{length:1}).length;if(M&&_&&M.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(Y===0)return P({numFailures:0,failures:{},results:[],lastResult:void 0});function L(Ge){++ge,ie(Ge)}var X=[],he=[],ge=0;if(y==="deleteRange"){if(S.type===4)return P({numFailures:ge,failures:he,results:[],lastResult:void 0});S.type===3?X.push(J=R.clear()):X.push(J=R.delete(s(S)))}else{var j=D?j?[_,M]:[_,null]:[M,null],ee=j[0],ue=j[1];if(D)for(var Oe=0;Oe<Y;++Oe)X.push(J=ue&&ue[Oe]!==void 0?R[y](ee[Oe],ue[Oe]):R[y](ee[Oe])),J.onerror=L;else for(Oe=0;Oe<Y;++Oe)X.push(J=R[y](ee[Oe])),J.onerror=L}function St(Ge){Ge=Ge.target.result,X.forEach(function(qt,Pa){return qt.error!=null&&(he[Pa]=qt.error)}),P({numFailures:ge,failures:he,results:y==="delete"?M:X.map(function(qt){return qt.result}),lastResult:Ge})}J.onerror=function(Ge){L(Ge),St(Ge)},J.onsuccess=St})},getMany:function(w){var C=w.trans,y=w.keys;return new Promise(function(M,_){M=me(M);for(var S,P=C.objectStore(k),F=y.length,R=new Array(F),j=0,D=0,J=function(X){X=X.target,R[X._pos]=X.result,++D===j&&M(R)},Y=H(_),L=0;L<F;++L)y[L]!=null&&((S=P.get(y[L]))._pos=L,S.onsuccess=J,S.onerror=Y,++j);j===0&&M(R)})},get:function(w){var C=w.trans,y=w.key;return new Promise(function(M,_){M=me(M);var S=C.objectStore(k).get(y);S.onsuccess=function(P){return M(P.target.result)},S.onerror=H(_)})},query:(m=d,function(w){return new Promise(function(C,y){C=me(C);var M,_,S,D=w.trans,P=w.values,F=w.limit,j=w.query,R=F===1/0?void 0:F,J=j.index,j=j.range,D=D.objectStore(k),D=J.isPrimaryKey?D:D.index(J.name),J=s(j);if(F===0)return C({result:[]});m?((j=P?D.getAll(J,R):D.getAllKeys(J,R)).onsuccess=function(Y){return C({result:Y.target.result})},j.onerror=H(y)):(M=0,_=!P&&"openKeyCursor"in D?D.openKeyCursor(J):D.openCursor(J),S=[],_.onsuccess=function(Y){var L=_.result;return!L||(S.push(P?L.value:L.primaryKey),++M===F)?C({result:S}):void L.continue()},_.onerror=H(y))})}),openCursor:function(w){var C=w.trans,y=w.values,M=w.query,_=w.reverse,S=w.unique;return new Promise(function(P,F){P=me(P);var D=M.index,R=M.range,j=C.objectStore(k),j=D.isPrimaryKey?j:j.index(D.name),D=_?S?"prevunique":"prev":S?"nextunique":"next",J=!y&&"openKeyCursor"in j?j.openKeyCursor(s(R),D):j.openCursor(s(R),D);J.onerror=H(F),J.onsuccess=me(function(Y){var L,X,he,ge,ee=J.result;ee?(ee.___id=++on,ee.done=!1,L=ee.continue.bind(ee),X=(X=ee.continuePrimaryKey)&&X.bind(ee),he=ee.advance.bind(ee),ge=function(){throw new Error("Cursor not stopped")},ee.trans=C,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=me(F),ee.next=function(){var ue=this,Oe=1;return this.start(function(){return Oe--?ue.continue():ue.stop()}).then(function(){return ue})},ee.start=function(ue){function Oe(){if(J.result)try{ue()}catch(Ge){ee.fail(Ge)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var St=new Promise(function(Ge,qt){Ge=me(Ge),J.onerror=H(qt),ee.fail=qt,ee.stop=function(Pa){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=ge,Ge(Pa)}});return J.onsuccess=me(function(Ge){J.onsuccess=Oe,Oe()}),ee.continue=L,ee.continuePrimaryKey=X,ee.advance=he,Oe(),St},P(ee)):P(null)},F)})},count:function(w){var C=w.query,y=w.trans,M=C.index,_=C.range;return new Promise(function(S,P){var F=y.objectStore(k),F=M.isPrimaryKey?F:F.index(M.name),R=s(_),R=R?F.count(R):F.count();R.onsuccess=me(function(j){return S(j.target.result)}),R.onerror=H(P)})}}}i=b,c=gt((b=e).objectStoreNames);var i,b={schema:{name:b.name,tables:c.map(function(x){return i.objectStore(x)}).map(function(x){var m=x.keyPath,k=x.autoIncrement,C=oe(m),w={},C={name:x.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:C,keyPath:m,autoIncrement:k,unique:!0,extractKey:$t(m)},indexes:gt(x.indexNames).map(function(y){return x.index(y)}).map(function(S){var P=S.name,M=S.unique,_=S.multiEntry,S=S.keyPath,P={name:P,compound:oe(S),keyPath:S,unique:M,multiEntry:_,extractKey:$t(S)};return w[bt(S)]=P}),getIndexByKeyPath:function(y){return w[bt(y)]}};return w[":id"]=C.primaryKey,m!=null&&(w[bt(m)]=C.primaryKey),C})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=b.schema,d=b.hasGetAll,b=c.tables.map(r),E={};return b.forEach(function(x){return E[x.name]=x}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(x){if(E[x])return E[x];throw new Error("Table '".concat(x,"' not found"))},MIN_KEY:-1/0,MAX_KEY:K(t),schema:c}}function Rt(e,t,a,s){return a=a.IDBKeyRange,t=ye(t,a,s),{dbcore:e.dbcore.reduce(function(r,i){return i=i.create,Q(Q({},r),i(r))},t)}}function Ne(e,t){var a=t.db,a=Rt(e._middlewares,a,e._deps,t);e.core=a.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(i){return i.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function Ye(e,t,a,s){a.forEach(function(r){var i=s[r];t.forEach(function(c){var d=(function b(E,x){return tn(E,x)||(E=Ze(E))&&b(E,x)})(c,r);(!d||"value"in d&&d.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?Le(c,r,{get:function(){return this.table(r)},set:function(b){rt(this,r,{value:b,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,i))})})}function Je(e,t){t.forEach(function(a){for(var s in a)a[s]instanceof e.Table&&delete a[s]})}function et(e,t){return e._cfg.version-t._cfg.version}function tt(e,t,a,s){var r=e._dbSchema,i=(a.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=Ft("$meta",qe("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(i.create(a),i._completion.catch(s),i._reject.bind(i)),d=U.transless||U;gn(function(){if(U.trans=i,U.transless=d,t!==0)return Ne(e,a),E=t,((b=i).storeNames.includes("$meta")?b.table("$meta").get("version").then(function(x){return x??E}):W.resolve(E)).then(function(M){var m=e,k=M,w=i,C=a,y=[],M=m._versions,_=m._dbSchema=jt(0,m.idbdb,C);return(M=M.filter(function(S){return S._cfg.version>=k})).length===0?W.resolve():(M.forEach(function(S){y.push(function(){var P,F,R,j=_,D=S._cfg.dbschema,J=(xe(m,j,C),xe(m,D,C),_=m._dbSchema=D,Dt(j,D)),Y=(J.add.forEach(function(L){Lt(C,L[0],L[1].primKey,L[1].indexes)}),J.change.forEach(function(L){if(L.recreate)throw new te.Upgrade("Not yet support for changing primary key");var X=C.objectStore(L.name);L.add.forEach(function(he){return nt(X,he)}),L.change.forEach(function(he){X.deleteIndex(he.name),nt(X,he)}),L.del.forEach(function(he){return X.deleteIndex(he)})}),S._cfg.contentUpgrade);if(Y&&S._cfg.version>k)return Ne(m,C),w._memoizedTables={},P=vt(D),J.del.forEach(function(L){P[L]=j[L]}),Je(m,[m.Transaction.prototype]),Ye(m,[m.Transaction.prototype],be(P),P),w.schema=P,(F=an(Y))&&Gn(),D=W.follow(function(){var L;(R=Y(w))&&F&&(L=bn.bind(null,null),R.then(L,L))}),R&&typeof R.then=="function"?W.resolve(R):D.then(function(){return R})}),y.push(function(P){var F,R,j=S._cfg.dbschema;F=j,R=P,[].slice.call(R.db.objectStoreNames).forEach(function(D){return F[D]==null&&R.db.deleteObjectStore(D)}),Je(m,[m.Transaction.prototype]),Ye(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),w.schema=m._dbSchema}),y.push(function(P){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===S._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(F){return F!=="$meta"})):P.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return y.length?W.resolve(y.shift()(w.idbtrans)).then(S):W.resolve()})().then(function(){Nt(_,C)}))}).catch(c);var b,E;be(r).forEach(function(x){Lt(a,x,r[x].primKey,r[x].indexes)}),Ne(e,a),W.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function Ut(e,t){Nt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var a=jt(0,e.idbdb,t);xe(e,e._dbSchema,t);for(var s=0,r=Dt(a,e._dbSchema).change;s<r.length;s++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var d=t.objectStore(c.name);c.add.forEach(function(b){It&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(b.src)),nt(d,b)})})(r[s]);if(typeof i=="object")return i.value}}function Dt(e,t){var a,s={del:[],add:[],change:[]};for(a in e)t[a]||s.del.push(a);for(a in t){var r=e[a],i=t[a];if(r){var c={name:a,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||r.primKey.auto!==i.primKey.auto)c.recreate=!0,s.change.push(c);else{var d=r.idxByName,b=i.idxByName,E=void 0;for(E in d)b[E]||c.del.push(E);for(E in b){var x=d[E],m=b[E];x?x.src!==m.src&&c.change.push(m):c.add.push(m)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([a,i])}return s}function Lt(e,t,a,s){var r=e.db.createObjectStore(t,a.keyPath?{keyPath:a.keyPath,autoIncrement:a.auto}:{autoIncrement:a.auto});s.forEach(function(i){return nt(r,i)})}function Nt(e,t){be(e).forEach(function(a){t.db.objectStoreNames.contains(a)||(It&&console.debug("Dexie: Creating missing table",a),Lt(t,a,e[a].primKey,e[a].indexes))})}function nt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function jt(e,t,a){var s={};return nn(t.objectStoreNames,0).forEach(function(r){for(var i=a.objectStore(r),c=_e(at(E=i.keyPath),E||"",!0,!1,!!i.autoIncrement,E&&typeof E!="string",!0),d=[],b=0;b<i.indexNames.length;++b){var x=i.index(i.indexNames[b]),E=x.keyPath,x=_e(x.name,E,!!x.unique,!!x.multiEntry,!1,E&&typeof E!="string",!1);d.push(x)}s[r]=Ft(r,c,d)}),s}function xe(e,t,a){for(var s=a.db.objectStoreNames,r=0;r<s.length;++r){var i=s[r],c=a.objectStore(i);e._hasGetAll="getAll"in c;for(var d=0;d<c.indexNames.length;++d){var b,E=c.indexNames[d],x=c.index(E).keyPath,x=typeof x=="string"?x:"["+nn(x).join("+")+"]";t[i]&&(b=t[i].idxByName[x])&&(b.name=E,delete t[i].idxByName[x],t[i].idxByName[E]=b)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function qe(e){return e.split(",").map(function(t,a){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return _e(r,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),oe(i),a===0,s)})}Pe.prototype._createTableSchema=Ft,Pe.prototype._parseIndexSyntax=qe,Pe.prototype._parseStoresSpec=function(e,t){var a=this;be(e).forEach(function(s){if(e[s]!==null){var r=a._parseIndexSyntax(e[s]),i=r.shift();if(!i)throw new te.Schema("Invalid schema for table "+s+": "+e[s]);if(i.unique=!0,i.multi)throw new te.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new te.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new te.Schema("Index must have a name and cannot be an empty string")}),i=a._createTableSchema(s,i,r),t[s]=i}})},Pe.prototype.stores=function(a){var t=this.db,a=(this._cfg.storesSource=this._cfg.storesSource?pe(this._cfg.storesSource,a):a,t._versions),s={},r={};return a.forEach(function(i){pe(s,i._cfg.storesSource),r=i._cfg.dbschema={},i._parseStoresSpec(s,r)}),t._dbSchema=r,Je(t,[t._allTables,t,t.Transaction.prototype]),Ye(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],be(r),r),t._storeNames=be(r),this},Pe.prototype.upgrade=function(e){return this._cfg.contentUpgrade=sa(this._cfg.contentUpgrade||$e,e),this};var Xe=Pe;function Pe(){}function Ve(e,t){var a=e._dbNamesDB;return a||(a=e._dbNamesDB=new un(Sa,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),a.table("dbnames")}function ln(e){return e&&typeof e.databases=="function"}function Ae(e){return gn(function(){return U.letThrough=!0,e()})}function cn(e){return!("from"in e)}var Ie=function(e,t){var a;if(!this)return a=new Ie,e&&"d"in e&&pe(a,e),a;pe(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function re(e,t,a){var s=fe(t,a);if(!isNaN(s)){if(0<s)throw RangeError();if(cn(e))return pe(e,{from:t,to:a,d:1});var s=e.l,r=e.r;if(fe(a,e.from)<0)return s?re(s,t,a):e.l={from:t,to:a,d:1,l:null,r:null},Ht(e);if(0<fe(t,e.to))return r?re(r,t,a):e.r={from:t,to:a,d:1,l:null,r:null},Ht(e);fe(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<fe(a,e.to)&&(e.to=a,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&ot(e,s),r&&t&&ot(e,r)}}function ot(e,t){cn(t)||(function a(s,r){var i=r.from,c=r.l,d=r.r;re(s,i,r.to),c&&a(s,c),d&&a(s,d)})(e,t)}function _t(e,t){var a=xn(t),s=a.next();if(!s.done)for(var r=s.value,i=xn(e),c=i.next(r.from),d=c.value;!s.done&&!c.done;){if(fe(d.from,r.to)<=0&&0<=fe(d.to,r.from))return!0;fe(r.from,d.from)<0?r=(s=a.next(d.from)).value:d=(c=i.next(r.from)).value}return!1}function xn(e){var t=cn(e)?null:{s:0,n:e};return{next:function(a){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&fe(a,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||fe(a,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ht(e){var t,a,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",a=Q({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],a[r]=s[t],(e[t]=a).d=kn(a)),e.d=kn(e)}function kn(a){var t=a.r,a=a.l;return(t?a?Math.max(t.d,a.d):t.d:a?a.d:0)+1}function Yt(e,t){return be(t).forEach(function(a){e[a]?ot(e[a],t[a]):e[a]=(function s(r){var i,c,d={};for(i in r)ce(r,i)&&(c=r[i],d[i]=!c||typeof c!="object"||ts.has(c.constructor)?c:s(c));return d})(t[a])}),e}function lt(e,t){return e.all||t.all||Object.keys(e).some(function(a){return t[a]&&_t(t[a],e[a])})}dt(Ie.prototype,((Bt={add:function(e){return ot(this,e),this},addKey:function(e){return re(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(a){return re(t,a,a)}),this},hasKey:function(e){var t=xn(this).next(e).value;return t&&fe(t.from,e)<=0&&0<=fe(t.to,e)}})[Ka]=function(){return xn(this)},Bt));var st={},ct={},Jn=!1;function zt(e){Yt(ct,e),Jn||(Jn=!0,setTimeout(function(){Jn=!1,Xn(ct,!(ct={}))},0))}function Xn(e,t){t===void 0&&(t=!1);var a=new Set;if(e.all)for(var s=0,r=Object.values(st);s<r.length;s++)In(d=r[s],e,a,t);else for(var i in e){var c,d,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],d=st["idb://".concat(c,"/").concat(i)])&&In(d,e,a,t)}a.forEach(function(b){return b()})}function In(e,t,a,s){for(var r=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var d=c[i],b=d[0],E=[],x=0,m=d[1];x<m.length;x++){var k=m[x];lt(t,k.obsSet)?k.subscribers.forEach(function(M){return a.add(M)}):s&&E.push(k)}s&&r.push([b,E])}if(s)for(var w=0,C=r;w<C.length;w++){var y=C[w],b=y[0],E=y[1];e.queries.query[b]=E}}function Ga(e){var t=e._state,a=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ue(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==s)throw new te.DatabaseClosed("db.open() was cancelled")}function d(){return new W(function(k,w){if(c(),!a)throw new te.MissingAPI;var C=e.name,y=t.autoSchema||!r?a.open(C):a.open(C,r);if(!y)throw new te.MissingAPI;y.onerror=H(w),y.onblocked=me(e._fireOnBlocked),y.onupgradeneeded=me(function(M){var _;x=y.transaction,t.autoSchema&&!e._options.allowEmptyDB?(y.onerror=ie,x.abort(),y.result.close(),(_=a.deleteDatabase(C)).onsuccess=_.onerror=me(function(){w(new te.NoSuchDatabase("Database ".concat(C," doesnt exist")))})):(x.onerror=H(w),_=M.oldVersion>Math.pow(2,62)?0:M.oldVersion,m=_<1,e.idbdb=y.result,i&&Ut(e,x),tt(e,_/10,x,w))},w),y.onsuccess=me(function(){x=null;var M,_,S,P,F,R,j=e.idbdb=y.result,D=nn(j.objectStoreNames);if(0<D.length)try{var J=j.transaction((F=D).length===1?F[0]:F,"readonly");if(t.autoSchema)R=j,P=J,(S=e).verno=R.version/10,P=S._dbSchema=jt(0,R,P),S._storeNames=nn(R.objectStoreNames,0),Ye(S,[S._allTables],be(P),P);else if(xe(e,e._dbSchema,J),_=J,((_=Dt(jt(0,(M=e).idbdb,_),M._dbSchema)).add.length||_.change.some(function(Y){return Y.add.length||Y.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),r=j.version+1,i=!0,k(d());Ne(e,J)}catch{}Un.push(e),j.onversionchange=me(function(Y){t.vcFired=!0,e.on("versionchange").fire(Y)}),j.onclose=me(function(){e.close({disableAutoOpen:!1})}),m&&(D=e._deps,F=C,ln(R=D.indexedDB)||F===Sa||Ve(R,D.IDBKeyRange).put({name:F}).catch($e)),k()},w)}).catch(function(k){switch(k?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),d();break;case"VersionError":if(0<r)return r=0,d()}return W.reject(k)})}var b,E=t.dbReadyResolve,x=null,m=!1;return W.race([s,(typeof navigator>"u"?W.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(k){function w(){return indexedDB.databases().finally(k)}b=setInterval(w,100),w()}).finally(function(){return clearInterval(b)}):Promise.resolve()).then(d)]).then(function(){return c(),t.onReadyBeingFired=[],W.resolve(Ae(function(){return e.on.ready.fire(e.vip)})).then(function k(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(sa,$e),t.onReadyBeingFired=[],W.resolve(Ae(function(){return w(e.vip)})).then(k)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(k){t.dbOpenError=k;try{x&&x.abort()}catch{}return s===t.openCanceller&&e._close(),Ue(k)}).finally(function(){t.openComplete=!0,E()}).then(function(){var k;return m&&(k={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(C){C.name&&(k["idb://".concat(e.name,"/").concat(w.name,"/").concat(C.name)]=new Ie(-1/0,[[[]]]))}),k["idb://".concat(e.name,"/").concat(w.name,"/")]=k["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new Ie(-1/0,[[[]]])}),le(Ce).fire(k),Xn(k,!0)),e})}function T(e){function t(i){return e.next(i)}var a=r(t),s=r(function(i){return e.throw(i)});function r(i){return function(d){var d=i(d),b=d.value;return d.done?b:b&&typeof b.then=="function"?b.then(a,s):oe(b)?Promise.all(b).then(a,s):a(b)}}return r(t)()}function N(e,t,a){for(var s=oe(e)?e.slice():[e],r=0;r<a;++r)s.push(t);return s}var Kt={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Q(Q({},e),{table:function(s){var a=e.table(s),s=a.schema,r={},i=[];function c(k,w,C){var S=bt(k),y=r[S]=r[S]||[],M=k==null?0:typeof k=="string"?1:k.length,_=0<w,S=Q(Q({},C),{name:_?"".concat(S,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:_,keyTail:w,keyLength:M,extractKey:$t(k),unique:!_&&C.unique});return y.push(S),S.isPrimaryKey||i.push(S),1<M&&c(M===2?k[0]:k.slice(0,M-1),w+1,C),y.sort(function(P,F){return P.keyTail-F.keyTail}),S}var d=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[d];for(var b=0,E=s.indexes;b<E.length;b++){var x=E[b];c(x.keyPath,0,x)}function m(k){var w,C=k.query.index;return C.isVirtual?Q(Q({},k),{query:{index:C.lowLevelIndex,range:(w=k.query.range,C=C.keyTail,{type:w.type===1?2:w.type,lower:N(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,C),lowerOpen:!0,upper:N(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,C),upperOpen:!0})}}):k}return Q(Q({},a),{schema:Q(Q({},s),{primaryKey:d,indexes:i,getIndexByKeyPath:function(k){return(k=r[bt(k)])&&k[0]}}),count:function(k){return a.count(m(k))},query:function(k){return a.query(m(k))},openCursor:function(k){var w=k.query.index,C=w.keyTail,y=w.keyLength;return w.isVirtual?a.openCursor(m(k)).then(function(_){return _&&M(_)}):a.openCursor(k);function M(_){return Object.create(_,{continue:{value:function(S){S!=null?_.continue(N(S,k.reverse?e.MAX_KEY:e.MIN_KEY,C)):k.unique?_.continue(_.key.slice(0,y).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,C)):_.continue()}},continuePrimaryKey:{value:function(S,P){_.continuePrimaryKey(N(S,e.MAX_KEY,C),P)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var S=_.key;return y===1?S[0]:S.slice(0,y)}},value:{get:function(){return _.value}}})}}})}})}};function Qn(e,t,a,s){return a=a||{},s=s||"",be(e).forEach(function(r){var i,c,d;ce(t,r)?(i=e[r],c=t[r],typeof i=="object"&&typeof c=="object"&&i&&c?(d=Na(i))!==Na(c)?a[s+r]=t[r]:d==="Object"?Qn(i,c,a,s+r+"."):i!==c&&(a[s+r]=t[r]):i!==c&&(a[s+r]=t[r])):a[s+r]=void 0}),be(t).forEach(function(r){ce(e,r)||(a[s+r]=t[r])}),a}function fa(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var gs={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Q(Q({},e),{table:function(t){var a=e.table(t),s=a.schema.primaryKey;return Q(Q({},a),{mutate:function(r){var i=U.trans,c=i.table(t).hook,d=c.deleting,b=c.creating,E=c.updating;switch(r.type){case"add":if(b.fire===$e)break;return i._promise("readwrite",function(){return x(r)},!0);case"put":if(b.fire===$e&&E.fire===$e)break;return i._promise("readwrite",function(){return x(r)},!0);case"delete":if(d.fire===$e)break;return i._promise("readwrite",function(){return x(r)},!0);case"deleteRange":if(d.fire===$e)break;return i._promise("readwrite",function(){return(function m(k,w,C){return a.query({trans:k,values:!1,query:{index:s,range:w},limit:C}).then(function(y){var M=y.result;return x({type:"delete",keys:M,trans:k}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):M.length<C?{failures:[],numFailures:0,lastResult:void 0}:m(k,Q(Q({},w),{lower:M[M.length-1],lowerOpen:!0}),C)})})})(r.trans,r.range,1e4)},!0)}return a.mutate(r);function x(m){var k,w,C,y=U.trans,M=m.keys||fa(s,m);if(M)return(m=m.type==="add"||m.type==="put"?Q(Q({},m),{keys:M}):Q({},m)).type!=="delete"&&(m.values=de([],m.values)),m.keys&&(m.keys=de([],m.keys)),k=a,C=M,((w=m).type==="add"?Promise.resolve([]):k.getMany({trans:w.trans,keys:C,cache:"immutable"})).then(function(_){var S=M.map(function(P,F){var R,j,D,J=_[F],Y={onerror:null,onsuccess:null};return m.type==="delete"?d.fire.call(Y,P,J,y):m.type==="add"||J===void 0?(R=b.fire.call(Y,P,m.values[F],y),P==null&&R!=null&&(m.keys[F]=P=R,s.outbound||ft(m.values[F],s.keyPath,P))):(R=Qn(J,m.values[F]),(j=E.fire.call(Y,R,P,J,y))&&(D=m.values[F],Object.keys(j).forEach(function(L){ce(D,L)?D[L]=j[L]:ft(D,L,j[L])}))),Y});return a.mutate(m).then(function(P){for(var F=P.failures,R=P.results,j=P.numFailures,P=P.lastResult,D=0;D<M.length;++D){var J=(R||M)[D],Y=S[D];J==null?Y.onerror&&Y.onerror(F[D]):Y.onsuccess&&Y.onsuccess(m.type==="put"&&_[D]?m.values[D]:J)}return{failures:F,results:R,numFailures:j,lastResult:P}}).catch(function(P){return S.forEach(function(F){return F.onerror&&F.onerror(P)}),Promise.reject(P)})});throw new Error("Keys missing")}}})}})}};function Ua(e,t,a){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,i=0;r<t.keys.length&&i<e.length;++r)fe(t.keys[r],e[i])===0&&(s.push(a?wt(t.values[r]):t.values[r]),++i);return s.length===e.length?s:null}catch{return null}}var Jt={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var a=e.table(t);return Q(Q({},a),{getMany:function(s){var r;return s.cache?(r=Ua(s.keys,s.trans._cache,s.cache==="clone"))?W.resolve(r):a.getMany(s).then(function(i){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?wt(i):i},i}):a.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),a.mutate(s)}})}}}};function bs(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Xt(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ls={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,a=new Ie(e.MIN_KEY,e.MAX_KEY);return Q(Q({},e),{transaction:function(s,r,i){if(U.subscr&&r!=="readonly")throw new te.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(U.querier));return e.transaction(s,r,i)},table:function(s){function r(M){var y,M=M.query;return[y=M.index,new Ie((y=(M=M.range).lower)!=null?y:e.MIN_KEY,(y=M.upper)!=null?y:e.MAX_KEY)]}var i=e.table(s),c=i.schema,d=c.primaryKey,b=c.indexes,E=d.extractKey,x=d.outbound,m=d.autoIncrement&&b.filter(function(C){return C.compound&&C.keyPath.includes(d.keyPath)}),k=Q(Q({},i),{mutate:function(C){function y(X){return X="idb://".concat(t,"/").concat(s,"/").concat(X),F[X]||(F[X]=new Ie)}var M,_,S,P=C.trans,F=C.mutatedParts||(C.mutatedParts={}),R=y(""),j=y(":dels"),D=C.type,Y=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[fa(d,C).filter(function(X){return X}),C.values]:[],J=Y[0],Y=Y[1],L=C.trans._cache;return oe(J)?(R.addKeys(J),(D=D==="delete"||J.length===Y.length?Ua(J,L):null)||j.addKeys(J),(D||Y)&&(M=y,_=D,S=Y,c.indexes.forEach(function(X){var he=M(X.name||"");function ge(ue){return ue!=null?X.extractKey(ue):null}function ee(ue){X.multiEntry&&oe(ue)?ue.forEach(function(Oe){return he.addKey(Oe)}):he.addKey(ue)}(_||S).forEach(function(ue,Ge){var St=_&&ge(_[Ge]),Ge=S&&ge(S[Ge]);fe(St,Ge)!==0&&(St!=null&&ee(St),Ge!=null)&&ee(Ge)})}))):J?(Y={from:(L=J.lower)!=null?L:e.MIN_KEY,to:(D=J.upper)!=null?D:e.MAX_KEY},j.add(Y),R.add(Y)):(R.add(a),j.add(a),c.indexes.forEach(function(X){return y(X.name).add(a)})),i.mutate(C).then(function(X){return!J||C.type!=="add"&&C.type!=="put"||(R.addKeys(X.results),m&&m.forEach(function(he){for(var ge=C.values.map(function(St){return he.extractKey(St)}),ee=he.keyPath.findIndex(function(St){return St===d.keyPath}),ue=0,Oe=X.results.length;ue<Oe;++ue)ge[ue][ee]=X.results[ue];y(he.name).addKeys(ge)})),P.mutatedParts=Yt(P.mutatedParts||{},F),X})}}),w={get:function(C){return[d,new Ie(C.key)]},getMany:function(C){return[d,new Ie().addKeys(C.keys)]},count:r,query:r,openCursor:r};return be(w).forEach(function(C){k[C]=function(y){var M=U.subscr,_=!!M,S=bs(U,i)&&Xt(C,y)?y.obsSet={}:M;if(_){var P,M=function(Y){return Y="idb://".concat(t,"/").concat(s,"/").concat(Y),S[Y]||(S[Y]=new Ie)},F=M(""),R=M(":dels"),_=w[C](y),j=_[0],_=_[1];if((C==="query"&&j.isPrimaryKey&&!y.values?R:M(j.name||"")).add(_),!j.isPrimaryKey){if(C!=="count")return P=C==="query"&&x&&y.values&&i.query(Q(Q({},y),{values:!1})),i[C].apply(this,arguments).then(function(Y){if(C==="query"){if(x&&y.values)return P.then(function(ge){return ge=ge.result,F.addKeys(ge),Y});var L=y.values?Y.result.map(E):Y.result;(y.values?F:R).addKeys(L)}else{var X,he;if(C==="openCursor")return he=y.values,(X=Y)&&Object.create(X,{key:{get:function(){return R.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var ge=X.primaryKey;return R.addKey(ge),ge}},value:{get:function(){return he&&F.addKey(X.primaryKey),X.value}}})}return Y});R.add(a)}}return i[C].apply(this,arguments)}}),k}})}};function ys(e,t,a){var s;return a.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,a.numFailures===s)?null:(s=Q({},t),oe(s.keys)&&(s.keys=s.keys.filter(function(r,i){return!(i in a.failures)})),"values"in s&&oe(s.values)&&(s.values=s.values.filter(function(r,i){return!(i in a.failures)})),s)}function _a(e,t){return a=e,((s=t).lower===void 0||(s.lowerOpen?0<fe(a,s.lower):0<=fe(a,s.lower)))&&(a=e,(s=t).upper===void 0||(s.upperOpen?fe(a,s.upper)<0:fe(a,s.upper)<=0));var a,s}function Ha(e,t,a,s,r,i){var c,d,b,E,x,m;return!a||a.length===0||(c=t.query.index,d=c.multiEntry,b=t.query.range,E=s.schema.primaryKey.extractKey,x=c.extractKey,m=(c.lowLevelIndex||c).extractKey,(s=a.reduce(function(k,w){var C=k,y=[];if(w.type==="add"||w.type==="put")for(var M=new Ie,_=w.values.length-1;0<=_;--_){var S,P=w.values[_],F=E(P);!M.hasKey(F)&&(S=x(P),d&&oe(S)?S.some(function(Y){return _a(Y,b)}):_a(S,b))&&(M.addKey(F),y.push(P))}switch(w.type){case"add":var R=new Ie().addKeys(t.values?k.map(function(L){return E(L)}):k),C=k.concat(t.values?y.filter(function(L){return L=E(L),!R.hasKey(L)&&(R.addKey(L),!0)}):y.map(function(L){return E(L)}).filter(function(L){return!R.hasKey(L)&&(R.addKey(L),!0)}));break;case"put":var j=new Ie().addKeys(w.values.map(function(L){return E(L)}));C=k.filter(function(L){return!j.hasKey(t.values?E(L):L)}).concat(t.values?y:y.map(function(L){return E(L)}));break;case"delete":var D=new Ie().addKeys(w.keys);C=k.filter(function(L){return!D.hasKey(t.values?E(L):L)});break;case"deleteRange":var J=w.range;C=k.filter(function(L){return!_a(E(L),J)})}return C},e))===e)?e:(s.sort(function(k,w){return fe(m(k),m(w))||fe(E(k),E(w))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),i?Object.freeze(s):s)}function Ja(e,t){return fe(e.lower,t.lower)===0&&fe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Cs(e,t){return((a,s,r,i)=>{if(a===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((a=fe(a,s))===0){if(r&&i)return 0;if(r)return 1;if(i)return-1}return a})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((a,s,r,i)=>{if(a===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((a=fe(a,s))===0){if(r&&i)return 0;if(r)return-1;if(i)return 1}return a})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function xs(e,t,a,s){e.subscribers.add(a),s.addEventListener("abort",function(){var r,i;e.subscribers.delete(a),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&dn(i,r)},3e3))})}var ks={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Q(Q({},e),{transaction:function(a,s,r){var i,c,d=e.transaction(a,s,r);return s==="readwrite"&&(r=(i=new AbortController).signal,d.addEventListener("abort",(c=function(b){return function(){if(i.abort(),s==="readwrite"){for(var E=new Set,x=0,m=a;x<m.length;x++){var k=m[x],w=st["idb://".concat(t,"/").concat(k)];if(w){var C=e.table(k),y=w.optimisticOps.filter(function(X){return X.trans===d});if(d._explicit&&b&&d.mutatedParts)for(var M=0,_=Object.values(w.queries.query);M<_.length;M++)for(var S=0,P=(j=_[M]).slice();S<P.length;S++)lt((D=P[S]).obsSet,d.mutatedParts)&&(dn(j,D),D.subscribers.forEach(function(X){return E.add(X)}));else if(0<y.length){w.optimisticOps=w.optimisticOps.filter(function(X){return X.trans!==d});for(var F=0,R=Object.values(w.queries.query);F<R.length;F++)for(var j,D,J,Y=0,L=(j=R[F]).slice();Y<L.length;Y++)(D=L[Y]).res!=null&&d.mutatedParts&&(b&&!D.dirty?(J=Object.isFrozen(D.res),J=Ha(D.res,D.req,y,C,D,J),D.dirty?(dn(j,D),D.subscribers.forEach(function(X){return E.add(X)})):J!==D.res&&(D.res=J,D.promise=W.resolve({result:J}))):(D.dirty&&dn(j,D),D.subscribers.forEach(function(X){return E.add(X)})))}}}E.forEach(function(X){return X()})}}})(!1),{signal:r}),d.addEventListener("error",c(!1),{signal:r}),d.addEventListener("complete",c(!0),{signal:r})),d},table:function(a){var s=e.table(a),r=s.schema.primaryKey;return Q(Q({},s),{mutate:function(i){var c,d=U.trans;return!r.outbound&&d.db._options.cache!=="disabled"&&!d.explicit&&d.idbtrans.mode==="readwrite"&&(c=st["idb://".concat(t,"/").concat(a)])?(d=s.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||fa(r,i).some(function(b){return b==null}))?(c.optimisticOps.push(i),i.mutatedParts&&zt(i.mutatedParts),d.then(function(b){0<b.numFailures&&(dn(c.optimisticOps,i),(b=ys(0,i,b))&&c.optimisticOps.push(b),i.mutatedParts)&&zt(i.mutatedParts)}),d.catch(function(){dn(c.optimisticOps,i),i.mutatedParts&&zt(i.mutatedParts)})):d.then(function(b){var E=ys(0,Q(Q({},i),{values:i.values.map(function(x,m){var k;return b.failures[m]?x:(ft(k=(k=r.keyPath)!=null&&k.includes(".")?wt(x):Q({},x),r.keyPath,b.results[m]),k)})}),b);c.optimisticOps.push(E),queueMicrotask(function(){return i.mutatedParts&&zt(i.mutatedParts)})}),d):s.mutate(i)},query:function(i){var c,d,b,E,x,m,k;return bs(U,s)&&Xt("query",i)?(c=((b=U.trans)==null?void 0:b.db._options.cache)==="immutable",d=(b=U).requery,b=b.signal,m=((w,C,y,M)=>{var _=st["idb://".concat(w,"/").concat(C)];if(!_)return[];if(!(w=_.queries[y]))return[null,!1,_,null];var S=w[(M.query?M.query.index.name:null)||""];if(!S)return[null,!1,_,null];switch(y){case"query":var P=S.find(function(F){return F.req.limit===M.limit&&F.req.values===M.values&&Ja(F.req.query.range,M.query.range)});return P?[P,!0,_,S]:[S.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=M.limit&&(!M.values||F.req.values)&&Cs(F.req.query.range,M.query.range)}),!1,_,S];case"count":return P=S.find(function(F){return Ja(F.req.query.range,M.query.range)}),[P,!!P,_,S]}})(t,a,"query",i),k=m[0],E=m[2],x=m[3],k&&m[1]?k.obsSet=i.obsSet:(m=s.query(i).then(function(w){var C=w.result;if(k&&(k.res=C),c){for(var y=0,M=C.length;y<M;++y)Object.freeze(C[y]);Object.freeze(C)}else w.result=wt(C);return w}).catch(function(w){return x&&k&&dn(x,k),Promise.reject(w)}),k={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},x?x.push(k):(x=[k],(E=E||(st["idb://".concat(t,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=x)),xs(k,x,d,b),k.promise.then(function(w){return{result:Ha(w.result,i,E?.optimisticOps,s,k,c)}})):s.query(i)}})}})}};function Ta(e,t){return new Proxy(e,{get:function(a,s,r){return s==="db"?t:Reflect.get(a,s,r)}})}We.prototype.version=function(e){if(isNaN(e)||e<.1)throw new te.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new te.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,a=t.filter(function(s){return s._cfg.version===e})[0];return a||(a=new this.Version(e),t.push(a),t.sort(et),a.stores({}),this._state.autoSchema=!1),a},We.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||U.letThrough||this._vip)?e():new W(function(a,s){if(t._state.openComplete)return s(new te.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new te.DatabaseClosed);t.open().catch($e)}t._state.dbReadyPromise.then(a,s)}).then(e)},We.prototype.use=function(r){var t=r.stack,a=r.create,s=r.level,r=r.name,i=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:a,level:s??10,name:r}),i.sort(function(c,d){return c.level-d.level}),this},We.prototype.unuse=function(e){var t=e.stack,a=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!a&&r.name!==a})),this},We.prototype.open=function(){var e=this;return _n(pn,function(){return Ga(e)})},We.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Un.indexOf(this);if(0<=t&&Un.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new W(function(a){e.dbReadyResolve=a}),e.openCanceller=new W(function(a,s){e.cancelOpen=s}))},We.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,a=this._state;t?(a.isBeingOpened&&a.cancelOpen(new te.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new te.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},We.prototype.delete=function(e){var t=this,a=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new W(function(r,i){function c(){t.close(e);var d=t._deps.indexedDB.deleteDatabase(t.name);d.onsuccess=me(function(){var b,E,x;b=t._deps,E=t.name,ln(x=b.indexedDB)||E===Sa||Ve(x,b.IDBKeyRange).delete(E).catch($e),r()}),d.onerror=H(i),d.onblocked=t._fireOnBlocked}if(a)throw new te.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},We.prototype.backendDB=function(){return this.idbdb},We.prototype.isOpen=function(){return this.idbdb!==null},We.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},We.prototype.hasFailed=function(){return this._state.dbOpenError!==null},We.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(We.prototype,"tables",{get:function(){var e=this;return be(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),We.prototype.transaction=function(){var e=(function(t,a,s){var r=arguments.length;if(r<2)throw new te.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];return s=i.pop(),[t,La(i),s]}).apply(this,arguments);return this._transaction.apply(this,e)},We.prototype._transaction=function(e,t,a){var s,r,i=this,c=U.trans,d=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(E){if(E=E instanceof i.Table?E.name:E,typeof E!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return E}),e=="r"||e===ja)s=ja;else{if(e!="rw"&&e!=Pn)throw new te.InvalidArgument("Invalid transaction mode: "+e);s=Pn}if(c){if(c.mode===ja&&s===Pn){if(!d)throw new te.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function(E){if(c&&c.storeNames.indexOf(E)===-1){if(!d)throw new te.SubTransaction("Table "+E+" not included in parent transaction.");c=null}}),d&&c&&!c.active&&(c=null)}}catch(E){return c?c._promise(null,function(x,m){m(E)}):Ue(E)}var b=(function E(x,m,k,w,C){return W.resolve().then(function(){var S=U.transless||U,y=x._createTransaction(m,k,x._dbSchema,w),S=(y.explicit=!0,{trans:y,transless:S});if(w)y.idbtrans=w.idbtrans;else try{y.create(),y.idbtrans._explicit=!0,x._state.PR1398_maxLoop=3}catch(P){return P.name===Ca.InvalidState&&x.isOpen()&&0<--x._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),x.close({disableAutoOpen:!1}),x.open().then(function(){return E(x,m,k,null,C)})):Ue(P)}var M,_=an(C),S=(_&&Gn(),W.follow(function(){var P;(M=C.call(y,y))&&(_?(P=bn.bind(null,null),M.then(P,P)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=T(M)))},S));return(M&&typeof M.then=="function"?W.resolve(M).then(function(P){return y.active?P:Ue(new te.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return M})).then(function(P){return w&&y._resolve(),y._completion.then(function(){return P})}).catch(function(P){return y._reject(P),Ue(P)})})}).bind(null,this,s,r,c,a);return c?c._promise(s,b,"lock"):U.trans?_n(U.transless,function(){return i._whenReady(b)}):this._whenReady(b)},We.prototype.table=function(e){if(ce(this._allTables,e))return this._allTables[e];throw new te.InvalidTable("Table ".concat(e," does not exist"))};var un=We;function We(e,t){var a,s,r,i,c,d=this,b=(this._middlewares={},this.verno=0,We.dependencies),b=(this._options=t=Q({addons:We.addons,autoOpen:!0,indexedDB:b.indexedDB,IDBKeyRange:b.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),E=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),x=(E.dbReadyPromise=new W(function(m){E.dbReadyResolve=m}),E.openCanceller=new W(function(m,k){E.cancelOpen=k}),this._state=E,this.name=e,this.on=ha(this,"populate","blocked","versionchange","close",{ready:[sa,$e]}),this.once=function(m,k){var w=function(){for(var C=[],y=0;y<arguments.length;y++)C[y]=arguments[y];d.on(m).unsubscribe(w),k.apply(d,C)};return d.on(m,w)},this.on.ready.subscribe=xt(this.on.ready.subscribe,function(m){return function(k,w){We.vip(function(){var C,y=d._state;y.openComplete?(y.dbOpenError||W.resolve().then(k),w&&m(k)):y.onReadyBeingFired?(y.onReadyBeingFired.push(k),w&&m(k)):(m(k),C=d,w||m(function M(){C.on.ready.unsubscribe(k),C.on.ready.unsubscribe(M)}))})}}),this.Collection=(a=this,pa(l.prototype,function(M,y){this.db=a;var w=Ya,C=null;if(y)try{w=y()}catch(S){C=S}var y=M._ctx,M=y.table,_=M.hook.reading.fire;this._ctx={table:M,index:y.index,isPrimKey:!y.index||M.schema.primKey.keyPath&&y.index===M.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:C,or:y.or,valueMapper:_!==aa?_:null}})),this.Table=(s=this,pa(fs.prototype,function(m,k,w){this.db=s,this._tx=w,this.name=m,this.schema=k,this.hook=s._allTables[m]?s._allTables[m].hook:ha(null,{creating:[rs,$e],reading:[Ps,aa],updating:[is,$e],deleting:[As,$e]})})),this.Transaction=(r=this,pa(ze.prototype,function(m,k,w,C,y){var M=this;m!=="readonly"&&k.forEach(function(_){_=(_=w[_])==null?void 0:_.yProps,_&&(k=k.concat(_.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=m,this.storeNames=k,this.schema=w,this.chromeTransactionDurability=C,this.idbtrans=null,this.on=ha(this,"complete","error","abort"),this.parent=y||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new W(function(_,S){M._resolve=_,M._reject=S}),this._completion.then(function(){M.active=!1,M.on.complete.fire()},function(_){var S=M.active;return M.active=!1,M.on.error.fire(_),M.parent?M.parent._reject(_):S&&M.idbtrans&&M.idbtrans.abort(),Ue(_)})})),this.Version=(i=this,pa(Xe.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,pa(V.prototype,function(m,k,w){if(this.db=c,this._ctx={table:m,index:k===":id"?null:k,or:w},this._cmp=this._ascending=fe,this._descending=function(C,y){return fe(y,C)},this._max=function(C,y){return 0<fe(C,y)?C:y},this._min=function(C,y){return fe(C,y)<0?C:y},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new te.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=K(t.IDBKeyRange),this._createTransaction=function(m,k,w,C){return new d.Transaction(m,k,w,d._options.chromeTransactionDurability,C)},this._fireOnBlocked=function(m){d.on("blocked").fire(m),Un.filter(function(k){return k.name===d.name&&k!==d&&!k._state.vcFired}).map(function(k){return k.on("versionchange").fire(m)})},this.use(Jt),this.use(ks),this.use(Ls),this.use(Kt),this.use(gs),new Proxy(this,{get:function(m,k,w){var C;return k==="_vip"||(k==="table"?function(y){return Ta(d.table(y),x)}:(C=Reflect.get(m,k,w))instanceof fs?Ta(C,x):k==="tables"?C.map(function(y){return Ta(y,x)}):k==="_createTransaction"?function(){return Ta(C.apply(this,arguments),x)}:C)}}));this.vip=x,b.forEach(function(m){return m(d)})}var va,Zn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",On=(Xa.prototype.subscribe=function(e,t,a){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:a})},Xa.prototype[Zn]=function(){return this},Xa);function Xa(e){this._subscribe=e}try{va={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{va={indexedDB:null,IDBKeyRange:null}}function ws(e){var t,a=!1,s=new On(function(r){var i=an(e),c,d=!1,b={},E={},x={get closed(){return d},unsubscribe:function(){d||(d=!0,c&&c.abort(),m&&le.storagemutated.unsubscribe(w))}},m=(r.start&&r.start(x),!1),k=function(){return Ra(C)},w=function(y){Yt(b,y),lt(E,b)&&k()},C=function(){var y,M,_;!d&&va.indexedDB&&(b={},y={},c&&c.abort(),c=new AbortController,_=(S=>{var P=mn();try{i&&Gn();var F=gn(e,S);return F=i?F.finally(bn):F}finally{P&&Mn()}})(M={subscr:y,signal:c.signal,requery:k,querier:e,trans:null}),Promise.resolve(_).then(function(S){a=!0,t=S,d||M.signal.aborted||(b={},(P=>{for(var F in P)if(ce(P,F))return;return 1})(E=y)||m||(le(Ce,w),m=!0),Ra(function(){return!d&&r.next&&r.next(S)}))},function(S){a=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||d||Ra(function(){d||r.error&&r.error(S)})}))};return setTimeout(k,0),x});return s.hasValue=function(){return a},s.getValue=function(){return t},s}var Fn=un;function Qa(e){var t=wn;try{wn=!0,le.storagemutated.fire(e),Xn(e,!0)}finally{wn=t}}dt(Fn,Q(Q({},At),{delete:function(e){return new Fn(e,{addons:[]}).delete()},exists:function(e){return new Fn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Fn.dependencies,a=t.indexedDB,t=t.IDBKeyRange,(ln(a)?Promise.resolve(a.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==Sa})}):Ve(a,t).toCollection().primaryKeys()).then(e)}catch{return Ue(new te.MissingAPI)}var t,a},defineClass:function(){return function(e){pe(this,e)}},ignoreTransaction:function(e){return U.trans?_n(U.transless,e):e()},vip:Ae,async:function(e){return function(){try{var t=T(e.apply(this,arguments));return t&&typeof t.then=="function"?t:W.resolve(t)}catch(a){return Ue(a)}}},spawn:function(e,t,a){try{var s=T(e.apply(a,t||[]));return s&&typeof s.then=="function"?s:W.resolve(s)}catch(r){return Ue(r)}},currentTransaction:{get:function(){return U.trans||null}},waitFor:function(e,t){return e=W.resolve(typeof e=="function"?Fn.ignoreTransaction(e):e).timeout(t||6e4),U.trans?U.trans.waitFor(e):e},Promise:W,debug:{get:function(){return It},set:function(e){Vn(e)}},derive:Ct,extend:pe,props:dt,override:xt,Events:ha,on:le,liveQuery:ws,extendObservabilitySet:Yt,getByKeyPath:Gt,setByKeyPath:ft,delByKeyPath:function(e,t){typeof t=="string"?ft(e,t,void 0):"length"in t&&[].map.call(t,function(a){ft(e,a,void 0)})},shallowClone:vt,deepClone:wt,getObjectDiff:Qn,cmp:fe,asap:kt,minKey:-1/0,addons:[],connections:Un,errnames:Ca,dependencies:va,cache:st,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,a){return e+t/Math.pow(10,2*a)})})),Fn.maxKey=K(Fn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(le(Ce,function(e){wn||(e=new CustomEvent(He,{detail:e}),wn=!0,dispatchEvent(e),wn=!1)}),addEventListener(He,function(e){e=e.detail,wn||Qa(e)}));var Qt,wn=!1,Za=function(){};return typeof BroadcastChannel<"u"&&((Za=function(){(Qt=new BroadcastChannel(He)).onmessage=function(e){return e.data&&Qa(e.data)}})(),typeof Qt.unref=="function"&&Qt.unref(),le(Ce,function(e){wn||Qt.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!un.disableBfCache&&e.persisted){It&&console.debug("Dexie: handling persisted pagehide"),Qt?.close();for(var t=0,a=Un;t<a.length;t++)a[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!un.disableBfCache&&e.persisted&&(It&&console.debug("Dexie: handling persisted pageshow"),Za(),Qa({all:new Ie(-1/0,[[]])}))})),W.rejectionMapper=function(e,t){return!e||e instanceof En||e instanceof TypeError||e instanceof SyntaxError||!e.name||!ss[e.name]?e:(t=new ss[e.name](t||e.message,e),"stack"in e&&Le(t,"stack",{get:function(){return this.inner.stack}}),t)},Vn(It),Q(un,Object.freeze({__proto__:null,Dexie:un,Entity:us,PropModification:da,RangeSet:Ie,add:function(e){return new da({add:e})},cmp:fe,default:un,liveQuery:ws,mergeRanges:ot,rangesOverlap:_t,remove:function(e){return new da({remove:e})},replacePrefix:function(e,t){return new da({replacePrefix:[e,t]})}}),{default:un}),un})})(Ss)),Ss.exports}var yi=bi();const js=mi(yi),Pr=Symbol.for("Dexie"),Bs=globalThis[Pr]||(globalThis[Pr]=js);if(js.semVer!==Bs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${js.semVer} and ${Bs.semVer}`);const{liveQuery:Oi,mergeRanges:Fi,rangesOverlap:Di,RangeSet:Li,cmp:Ni,Entity:Ki,PropModification:qi,replacePrefix:Vi,add:Ri,remove:ji,DexieYProvider:Yi}=Bs,De=new Bs("haushaltsbuch-db");De.version(1).stores({years:"year",fixedTemplateState:"id"});De.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});De.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});De.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Nn="singleton";function Da(){return new Date().toISOString()}async function ya(){return De.years.orderBy("year").toArray()}async function Ci(B){return De.years.get(B)}async function ba(B){await De.years.put(B)}async function Ys(){const B=await De.fixedTemplateState.get(Nn);if(!B){const h={id:Nn,templates:[],version:Da(),updatedAt:new Date().toISOString()};return await De.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function zs(B){const h=Da();return await De.fixedTemplateState.put({id:Nn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function Ws(){const B=await De.annualVariableFixedTemplateState.get(Nn);if(!B){const h={id:Nn,templates:[],version:Da(),updatedAt:new Date().toISOString()};return await De.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Gs(B){const h=Da();return await De.annualVariableFixedTemplateState.put({id:Nn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function xi(B){await De.auditLog.put(B)}async function Us(){const B=await De.searchEvaluationState.get(Nn);if(!B){const h={id:Nn,results:[],version:Da(),updatedAt:new Date().toISOString()};return await De.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:B.results,version:B.version}}async function Es(B){const h=Da();return await De.searchEvaluationState.put({id:Nn,results:B,version:h,updatedAt:new Date().toISOString()}),h}async function Hs(){return De.auditLog.orderBy("timestampIso").toArray()}async function ki(B){await De.auditLog.clear(),B.length!==0&&await De.auditLog.bulkPut(B)}async function wi(){const B=await ya(),[h,we,Q,de]=await Promise.all([Ys(),Ws(),Hs(),Us()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:h.templates,annualVariableFixedTemplates:we.templates,auditLogEntries:Q,savedSearchEvaluations:de.results}}async function $i(B){await De.transaction("rw",[De.years,De.fixedTemplateState,De.annualVariableFixedTemplateState,De.auditLog,De.searchEvaluationState],async()=>{await De.years.clear(),await De.years.bulkPut(B.years),await zs(B.fixedTemplates),await Gs(B.annualVariableFixedTemplates??[]),await ki(B.auditLogEntries??[]),await Es(B.savedSearchEvaluations??[])})}function Fe(B){const h=B.replace(",",".").trim();if(!h)return 0;const we=Number.parseFloat(h);return Number.isNaN(we)?0:Math.round(we*100)}const Si=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return Si.format(B/100)}function Et(B){return(B/100).toFixed(2)}function Te(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const Fr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Ar(B){return Fr.includes(B)}function Ei(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Ir=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Bi(B){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},we="habu-theme",Q="habu-backup-dirty",de="habu-unexported-change-log",se="habu-last-backup-filename",be="habu-recurring-budget-defaults";let oe=null,pe=null,Ze=null,Re=null,ce=!1,dt=!1;const rt=new WeakMap;function Le(){const l=B.querySelectorAll("[data-budget-vs-canvas]");if(l.length===0)return;const o=getComputedStyle(document.documentElement),p=o.getPropertyValue("--text-main").trim(),u=o.getPropertyValue("--text-muted").trim(),v=o.getPropertyValue("--table-stripe").trim(),$=o.getPropertyValue("--table-border").trim(),A=o.getPropertyValue("--budget-under").trim(),O=o.getPropertyValue("--danger-2").trim(),I=96,G=250,V=z=>1-Math.pow(1-Math.max(0,Math.min(1,z)),3);l.forEach(z=>{z.dataset.hoverBound!=="1"&&(z.dataset.hoverBound="1",z.addEventListener("mouseenter",()=>{z.dataset.hovering="1",Le()}),z.addEventListener("mouseleave",()=>{delete z.dataset.hovering,delete z.dataset.hoverX,Le()}),z.addEventListener("mousemove",xe=>{const qe=z.getBoundingClientRect(),Xe=Math.round(xe.clientX-qe.left);z.dataset.hoverX=String(Xe),Le()}));const H=Number.parseInt(z.dataset.budgetCents??"0",10),ie=Number.parseInt(z.dataset.actualCents??"0",10),Ce=z.dataset.label??"Kategorie",He=z.dataset.hovering==="1",le=`${Ce}|${H}|${ie}`,ze=z.dataset.lastRenderSignature!==le;z.dataset.lastRenderSignature=le;const Ke=Math.max(120,Math.floor(z.clientWidth||120)),_e=window.devicePixelRatio||1,at=Math.floor(Ke*_e),Ft=Math.floor(I*_e);(z.width!==at||z.height!==Ft)&&(z.width=at,z.height=Ft);const K=z.getContext("2d");if(!K)return;const $t=Math.max(1,H,ie),gt=Math.min(1,Math.max(0,H/$t)),on=Math.min(1,Math.max(0,ie/$t)),bt=H-ie,ye=H>0?ie/H*100:ie>0?100:0,Rt=8,Ne=Rt,Ye=34,Je=Ke-Rt*2,et=22,tt=Number.parseInt(z.dataset.hoverX??"-1",10),Ut=(xe,qe,Xe,Pe,Ve)=>{K.beginPath(),K.moveTo(xe+Ve,qe),K.lineTo(xe+Xe-Ve,qe),K.quadraticCurveTo(xe+Xe,qe,xe+Xe,qe+Ve),K.lineTo(xe+Xe,qe+Pe-Ve),K.quadraticCurveTo(xe+Xe,qe+Pe,xe+Xe-Ve,qe+Pe),K.lineTo(xe+Ve,qe+Pe),K.quadraticCurveTo(xe,qe+Pe,xe,qe+Pe-Ve),K.lineTo(xe,qe+Ve),K.quadraticCurveTo(xe,qe,xe+Ve,qe),K.closePath()},Dt=xe=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,z.width,z.height),K.scale(_e,_e),Ut(Ne,Ye,Je,et,8),K.fillStyle=v,K.fill(),K.strokeStyle=$,K.lineWidth=1,K.stroke();const qe=[.6,.25,.15],Xe=[.1,.16,.24];let Pe=0;qe.forEach((Ie,re)=>{const ot=Je*Ie;K.save(),K.globalAlpha=Xe[re]??.1,K.fillStyle=u,K.fillRect(Ne+Pe,Ye,ot,et),K.restore(),Pe+=ot});const Ve=H>0&&ie>H?O:A,ln=Je*on*xe;Ut(Ne,Ye+3,ln,et-6,6),K.fillStyle=Ve,K.fill(),He&&(K.save(),K.strokeStyle=Ve,K.lineWidth=1.5,K.globalAlpha=.8,Ut(Ne-1,Ye+2,Math.max(2,ln+2),et-4,7),K.stroke(),K.restore());const Ae=Ne+Je*gt;K.strokeStyle=p,K.lineWidth=He?3:2,K.beginPath(),K.moveTo(Ae,Ye-3),K.lineTo(Ae,Ye+et+3),K.stroke(),He&&tt>=Ne&&tt<=Ne+Je&&(K.save(),K.strokeStyle=p,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(tt,Ye-8),K.lineTo(tt,Ye+et+8),K.stroke(),K.restore()),K.fillStyle=p,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(Ce,Ne,10);const cn=ye*xe;if(K.fillStyle=ye>100?O:ye<100?A:u,K.textAlign="right",K.fillText(`${cn.toFixed(0)}%`,Ne+Je,10),K.fillStyle=u,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${f(ie)} · Ziel ${f(H)} · Δ ${bt>=0?"+":""}${f(bt)}`,Ne,64),He){const Ie=`Nutzung ${ye.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const re=8,ot=5,_t=22,Ht=K.measureText(Ie).width+re*2,kn=Number.isFinite(tt)?tt-Ht/2:Ne+Je-Ht,Yt=Math.min(Ne+Je-Ht,Math.max(Ne,kn)),lt=Ye-_t-8;K.save(),K.fillStyle=p,K.globalAlpha=.92,Ut(Yt,lt,Ht,_t,6),K.fill(),K.restore(),K.fillStyle=v,K.textAlign="left",K.textBaseline="top",K.fillText(Ie,Yt+re,lt+ot)}},Lt=rt.get(z);if(Lt&&window.cancelAnimationFrame(Lt),!ze){Dt(1);return}const Nt=performance.now(),nt=xe=>{const qe=xe-Nt,Xe=Math.min(1,qe/G);if(Dt(V(Xe)),Xe<1){const Pe=window.requestAnimationFrame(nt);rt.set(z,Pe);return}rt.delete(z)},jt=window.requestAnimationFrame(nt);rt.set(z,jt)})}function Ct(){B.querySelectorAll("[data-year-trend-chart]").forEach(o=>{const p=Array.from(o.querySelectorAll("[data-year-trend-point]"));if(p.length===0)return;const u=o.querySelector("[data-year-trend-active-month]"),v=o.querySelector("[data-year-trend-active-net]"),$=o.querySelector("[data-year-trend-active-income]"),A=o.querySelector("[data-year-trend-active-expense]"),O=o.querySelector("[data-year-trend-active-delta]"),I=o.querySelector("[data-year-trend-live]");if(!u||!v||!$||!A||!O)return;const G=(H,ie)=>{H.classList.remove("danger","budget-under");const Ce=ie<0?"danger":ie>0?"budget-under":"";Ce&&H.classList.add(Ce)},V=H=>{const ie=H.dataset.monthLabel??"-",Ce=Number.parseInt(H.dataset.netCents??"0",10),He=Number.parseInt(H.dataset.actualNetCents??"0",10),le=Number.parseInt(H.dataset.incomeCents??"0",10),ze=Number.parseInt(H.dataset.expenseCents??"0",10),Ke=Number.parseInt(H.dataset.deltaCents??"0",10);u.textContent=ie,v.textContent=f(Ce),$.textContent=f(le),A.textContent=f(ze),O.textContent=`${Ke>=0?"+":""}${f(Ke)}`,G(v,Ce),G(O,Ke),p.forEach(_e=>{const at=_e===H;_e.classList.toggle("is-active",at),_e.setAttribute("aria-pressed",String(at))}),I&&(I.textContent=`${ie}: Kalkulierter Saldo ${f(Ce)}, Ist-Saldo ${f(He)}, Einkommen ${f(le)}, Ausgaben ${f(ze)}`)};p.forEach(H=>{const ie=()=>{V(H)};H.addEventListener("mouseenter",ie),H.addEventListener("focus",ie),H.addEventListener("click",ie)});const z=p.find(H=>H.dataset.pointDefault==="1")??p[p.length-1];z&&V(z)})}function tn(l){if(l==="dashboard"){const o=h.years.slice().sort((u,v)=>v.year-u.year);o.some(u=>u.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??o[0]?.year??null)}h.topModal=l,ne()}function Kn(){h.topModal&&(h.topModal=null,ne())}function nn(){h.showUnexportedChangeLogModal=!0,ne()}function xt(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ne())}function ht(){h.showPersistentAuditLogModal=!0,ne()}function kt(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ne())}function Gt(){ce||(ce=!0,window.addEventListener("keydown",l=>{if(l.key==="Escape"){if(h.showUnexportedChangeLogModal){l.preventDefault(),xt();return}if(h.showPersistentAuditLogModal){l.preventDefault(),kt();return}h.topModal&&(l.preventDefault(),Kn())}}))}function ft(){const l=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(l<=0)return!1;const o=l/6;return window.scrollY>o}function vt(){const l=B.querySelector("#scroll-up-btn");l&&l.classList.toggle("is-visible",ft())}function Ms(){if(dt)return;dt=!0;const l=()=>{vt(),Le()};window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l)}function La(){if(oe&&document.body.contains(oe))return oe;const l=document.getElementById("toast-root");if(l instanceof HTMLDivElement)return oe=l,l;const o=document.createElement("div");return o.id="toast-root",o.className="toast-root",o.setAttribute("aria-live","polite"),o.setAttribute("aria-atomic","true"),document.body.appendChild(o),oe=o,o}function ts(){if(pe&&document.body.contains(pe))return pe;const l=document.getElementById("amount-modal-root");if(l instanceof HTMLDivElement)return pe=l,l;const o=document.createElement("div");return o.id="amount-modal-root",document.body.appendChild(o),pe=o,o}function ta(){if(Re&&document.body.contains(Re))return Re;const l=document.getElementById("weekly-shopping-modal-root");if(l instanceof HTMLDivElement)return Re=l,l;const o=document.createElement("div");return o.id="weekly-shopping-modal-root",document.body.appendChild(o),Re=o,o}function wt(){if(!pe){Ze=null;return}pe.innerHTML="",Ze=null}function na(){Re&&(Re.innerHTML="")}function Na(l,o,p){const u=new Date,v=u.getFullYear(),$=u.getMonth()+1,A=u.getDate(),O=new Date(l,o,0).getDate();if(l<v||l===v&&o<$)return{occurrences:0,remainingDays:0};const I=l===v&&o===$?Math.min(A,O):1,G=Math.max(0,O-I+1);let V=0;for(let z=I;z<=O;z+=1)new Date(l,o-1,z).getDay()===p&&(V+=1);return{occurrences:V,remainingDays:G}}async function Ka(l,o){const p=Ee();p&&(p.weeklyShoppingWeekday=l,p.weeklyShoppingEstimateCents=Math.max(0,o),await je(`Wocheneinkauf geplant: ${Ir.find(u=>u.value===l)?.label??"Wochentag"} mit ${f(p.weeklyShoppingEstimateCents)} €`),ne())}function _s(){const l=Ee(),o=jn();if(!l||!o)return;const p=ta();na();const u=l.weeklyShoppingWeekday===null||l.weeklyShoppingWeekday===void 0?1:l.weeklyShoppingWeekday,v=l.weeklyShoppingEstimateCents??0,$=o.year,A=l.month,O=Bt($,A),I=O?Vt(O):{foodCents:0},G=O?O.foodBudgetCents??0:0,V=I.foodCents,z=G-V;p.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Ir.map(ye=>`<option value="${ye.value}" ${ye.value===u?"selected":""}>${ye.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${Et(v)}" />
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
    `;const H=p.querySelector(".weekly-shopping-modal-backdrop"),ie=p.querySelector("#weekly-shopping-weekday"),Ce=p.querySelector("#weekly-shopping-estimate"),He=p.querySelector("#weekly-shopping-occurrences"),le=p.querySelector("#weekly-shopping-total"),ze=p.querySelector("#weekly-shopping-rest-before"),Ke=p.querySelector("#weekly-shopping-rest-after"),_e=p.querySelector("#weekly-shopping-days-left"),at=p.querySelector("#weekly-shopping-per-day"),Ft=p.querySelector("#weekly-shopping-cancel"),K=p.querySelector("#weekly-shopping-save");function $t(){const ye=Number.parseInt(ie?.value??"1",10);return Number.isInteger(ye)&&ye>=0&&ye<=6?ye:1}function gt(){return Math.max(0,Fe(Ce?.value??"0"))}function on(){const ye=$t(),Rt=gt(),{occurrences:Ne,remainingDays:Ye}=Na($,A,ye),Je=Ne*Rt,et=z-Je,tt=Ye>0?Math.trunc(et/Ye):0;He&&(He.textContent=`${Ne}`),le&&(le.textContent=`${f(Je)} €`),ze&&(ze.textContent=`${f(z)} €`),Ke&&(Ke.textContent=`${f(et)} €`,Ke.className=et<0?"danger":et>0?"budget-under":""),_e&&(_e.textContent=`${Ye}`),at&&(at.textContent=`${f(tt)} €`,at.className=tt<0?"danger":tt>0?"budget-under":"")}async function bt(){await Ka($t(),gt()),na()}Ft?.addEventListener("click",()=>{na()}),K?.addEventListener("click",async()=>{await bt()}),ie?.addEventListener("change",()=>{on()}),Ce?.addEventListener("input",()=>{on()}),Ce?.addEventListener("keydown",async ye=>{if(ye.key==="Escape"){ye.preventDefault(),na();return}ye.key==="Enter"&&(ye.preventDefault(),await bt())}),H?.addEventListener("click",ye=>{ye.target===H&&na()}),window.setTimeout(()=>{Ce?.focus(),Ce?.select(),on()},0)}function dn(l,o){let p=l;const u=o.min;if(u){const $=Number.parseFloat(u);if(!Number.isNaN($)){const A=Math.round($*100);p=Math.max(p,A)}}const v=o.max;if(v){const $=Number.parseFloat(v);if(!Number.isNaN($)){const A=Math.round($*100);p=Math.min(p,A)}}return p}function it(l){if(l.disabled)return;const o=ts();wt(),Ze=l;const p=Fe(l.value||"0"),u="Betrag anpassen";o.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${u}">
        <div class="amount-modal card">
          <h3>${u}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${f(p)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${f(p)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${f(p)} €</strong></div>
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
    `;const v=o.querySelector(".amount-modal-backdrop"),$=o.querySelector("#amount-modal-delta"),A=o.querySelector("#amount-modal-next-delta"),O=o.querySelector("#amount-modal-next-overwrite"),I=o.querySelector("#amount-modal-cancel"),G=o.querySelector("#amount-modal-overwrite"),V=o.querySelector("#amount-modal-apply");function z(){const le=Fe($?.value??"0");return dn(p+le,l)}function H(){const le=Fe($?.value??"0");return dn(le,l)}function ie(){A&&(A.textContent=`${f(z())} €`),O&&(O.textContent=`${f(H())} €`)}function Ce(){const le=Ze;if(!le){wt();return}const ze=z();wt(),le.value=Et(ze),le.dispatchEvent(new Event("change",{bubbles:!0}))}function He(){const le=Ze;if(!le){wt();return}const ze=H();wt(),le.value=Et(ze),le.dispatchEvent(new Event("change",{bubbles:!0}))}I?.addEventListener("click",()=>{wt()}),G?.addEventListener("click",()=>{He()}),V?.addEventListener("click",()=>{Ce()}),$?.addEventListener("input",()=>{ie()}),$?.addEventListener("keydown",le=>{if(le.key==="Escape"){le.preventDefault(),wt();return}le.key==="Enter"&&(le.preventDefault(),Ce())}),v?.addEventListener("click",le=>{le.target===v&&wt()}),window.setTimeout(()=>{$?.focus(),$?.select(),ie()},0)}function ae(l,o="success"){const p=La(),u=document.createElement("div");u.className=`toast toast-${o}`,u.textContent=l,p.appendChild(u),requestAnimationFrame(()=>{u.classList.add("toast-visible")});const v=o==="error"?5e3:3e3;window.setTimeout(()=>{u.classList.remove("toast-visible"),window.setTimeout(()=>{u.remove()},220)},v)}function an(){return new Date().getMonth()+1}function At(){return new Date().getFullYear()}function ns(l){const o=At(),p=l.find(u=>u.year===o);return p?p.year:l[0]?.year??null}function En(){return new Date().toISOString().slice(0,10)}function as(){const l=new Date,o=String(l.getHours()).padStart(2,"0"),p=String(l.getMinutes()).padStart(2,"0"),u=String(l.getSeconds()).padStart(2,"0");return`${o}${p}${u}`}function mt(l){return l.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function qn(){const l=localStorage.getItem(we);return l&&Ar(l)?l:"light"}function Ca(l){h.theme=l,document.documentElement.setAttribute("data-theme",l),localStorage.setItem(we,l)}function Ts(){return localStorage.getItem(Q)==="1"}function te(l){localStorage.setItem(Q,l?"1":"0")}function ss(){const l=localStorage.getItem(de);if(!l)return[];try{const o=JSON.parse(l);return Array.isArray(o)?o.filter(p=>{if(!p||typeof p!="object")return!1;const u=p;return typeof u.id=="string"&&typeof u.timestampIso=="string"&&typeof u.message=="string"}).slice(-200):[]}catch{return[]}}function $e(l){localStorage.setItem(de,JSON.stringify(l.slice(-200)))}function aa(){const l=localStorage.getItem(se);if(!l)return null;const o=l.trim();return o||null}function Ps(){const l={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},o=localStorage.getItem(be);if(!o)return l;try{const p=JSON.parse(o),u=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:u(p.foodBudgetCents),goingOutBudgetCents:u(p.goingOutBudgetCents),fixedBudgetCents:u(p.fixedBudgetCents),variableBudgetCents:u(p.variableBudgetCents),miscBudgetCents:u(p.miscBudgetCents)}}catch{return l}}function Bn(l){localStorage.setItem(be,JSON.stringify(l))}function rs(l){l.months.forEach(o=>{const{recurringBudgetDefaults:p}=h;typeof p.foodBudgetCents=="number"&&(o.foodBudgetCents=p.foodBudgetCents),typeof p.goingOutBudgetCents=="number"&&(o.goingOutBudgetCents=p.goingOutBudgetCents),typeof p.fixedBudgetCents=="number"&&(o.fixedBudgetCents=p.fixedBudgetCents),typeof p.variableBudgetCents=="number"&&(o.variableBudgetCents=p.variableBudgetCents),typeof p.miscBudgetCents=="number"&&(o.miscBudgetCents=p.miscBudgetCents)})}function As(l){const o=l.trim();o&&localStorage.setItem(se,o)}async function is(){if(h.savedSearchEvaluations.length===0)return;const l=At(),o=an(),p=h.savedSearchEvaluations.map(u=>({..._r(h.years,u.keyword,l,o),id:u.id,createdAt:u.createdAt}));h.savedSearchEvaluations=p,await Es(p)}async function Is(){La(),Ca(qn()),h.hasUnexportedChanges=Ts(),h.unexportedChangeLog=ss(),h.persistentAuditLog=await Hs(),h.lastBackupFileName=aa(),h.recurringBudgetDefaults=Ps(),Gt(),Ms();const[l,o,p,u]=await Promise.all([ya(),Ys(),Ws(),Us()]);h.years=l,h.annualVariableFixedTemplates=p.templates,h.annualVariableFixedTemplateVersion=p.version,sa(h.years),ca(h.years),h.fixedTemplates=o.templates,h.fixedTemplateVersion=o.version,h.savedSearchEvaluations=u.results,await Rn(h.years),await is(),l.length>0&&(h.selectedYear=ns(l),h.selectedMonth=an()),ne()}function sa(l){const o=p=>p==="balance"||p==="fresh"||p==="salary"?p:void 0;l.forEach(p=>{p.months.forEach(u=>{if(u.weeklyShoppingWeekday!==null&&u.weeklyShoppingWeekday!==void 0){const v=Number(u.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?u.weeklyShoppingWeekday=v:u.weeklyShoppingWeekday=null}else u.weeklyShoppingWeekday=null;typeof u.weeklyShoppingEstimateCents!="number"&&(u.weeklyShoppingEstimateCents=0),typeof u.foodBudgetCents!="number"&&(u.foodBudgetCents=0),typeof u.goingOutBudgetCents!="number"&&(u.goingOutBudgetCents=0),Array.isArray(u.incomes)?u.incomes=u.incomes.map(v=>{const $=o(v.incomeSource);if(!$){const{incomeSource:A,...O}=v;return O}return{...v,incomeSource:$}}):u.incomes=[],typeof u.fixedBudgetCents!="number"&&(u.fixedBudgetCents=u.fixedCosts.reduce((v,$)=>v+$.plannedCents,0)),typeof u.variableBudgetCents!="number"&&(u.variableBudgetCents=u.variablePositions.reduce((v,$)=>v+$.budgetCents,0)),Array.isArray(u.variablePositions)||(u.variablePositions=[]),typeof u.miscBudgetCents!="number"&&(u.miscBudgetCents=0)})})}function It(l){return l==="balance"?"Bestandsguthaben":l==="salary"?"Gehalt":l==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Vn(l){return l==="fresh"||l==="salary"||!l}async function Rn(l){for(const o of l)await ba(o)}function jn(){if(h.selectedYear)return h.years.find(l=>l.year===h.selectedYear)}function Ee(){const l=jn();if(l)return l.months.find(o=>o.month===h.selectedMonth)}function Bt(l,o){const p=h.years.find(u=>u.year===l);if(p)return p.months.find(u=>u.month===o)}function Vt(l){const o=l.days.reduce((O,I)=>O+I.foodCents,0),p=l.days.reduce((O,I)=>O+I.goingOutCents,0),u=l.fixedCosts.reduce((O,I)=>O+I.actualCents,0),v=l.variableCosts.reduce((O,I)=>O+I.amountCents,0)+l.variablePositions.reduce((O,I)=>O+I.actualCents,0),$=l.miscCosts.reduce((O,I)=>O+I.amountCents,0),A=o+p+u+v+$;return{foodCents:o,goingOutCents:p,fixedCents:u,variableCents:v,miscCents:$,totalCents:A}}function Yn(l){const o=l.foodBudgetCents??0,p=l.goingOutBudgetCents??0,u=l.fixedBudgetCents??l.fixedCosts.reduce((A,O)=>A+O.plannedCents,0),v=l.variablePositions.reduce((A,O)=>A+O.budgetCents,0),$=l.miscBudgetCents??0;return o+p+u+(l.variableBudgetCents??v)+$}function hn(l){return l.months.reduce((o,p)=>{const u=Vt(p);return{foodCents:o.foodCents+u.foodCents,goingOutCents:o.goingOutCents+u.goingOutCents,fixedCents:o.fixedCents+u.fixedCents,variableCents:o.variableCents+u.variableCents,miscCents:o.miscCents+u.miscCents,totalCents:o.totalCents+u.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function qa(l){return l.months.slice().sort((o,p)=>o.month-p.month).map(o=>({month:o.month,summary:Vt(o)}))}function zn(l){const o=l.months.reduce((A,O)=>A+(O.foodBudgetCents??0),0),p=l.months.reduce((A,O)=>A+(O.goingOutBudgetCents??0),0),u=l.months.reduce((A,O)=>A+(O.fixedBudgetCents??O.fixedCosts.reduce((I,G)=>I+G.plannedCents,0)),0),v=l.months.reduce((A,O)=>A+(O.variableBudgetCents??O.variablePositions.reduce((I,G)=>I+G.budgetCents,0)),0),$=l.months.reduce((A,O)=>A+(O.miscBudgetCents??0),0);return{foodCents:o,goingOutCents:p,fixedCents:u,variableCents:v,miscCents:$,totalCents:o+p+u+v+$}}function sn(l){return l.months.reduce((o,p)=>o+p.incomes.reduce((u,v)=>u+(Vn(v.incomeSource)?v.amountCents:0),0),0)}function ra(l){return l.months.reduce((o,p)=>(p.incomes.forEach(u=>{if(u.incomeSource==="salary"){o.salaryIncomeCents+=u.amountCents;return}(u.incomeSource==="fresh"||u.incomeSource==null)&&(o.freshIncomeCents+=u.amountCents)}),o),{salaryIncomeCents:0,freshIncomeCents:0})}function ia(l,o){const p=l.months.slice().sort((u,v)=>u.month-v.month)[0];return p?o.get(ve(l.year,p.month))?.carriedFromPreviousCents??0:0}function pn(){const l=h.years.slice().sort((u,v)=>u.year-v.year).flatMap(u=>u.months.slice().sort((v,$)=>v.month-$.month).map(v=>({year:u.year,month:v}))),o=new Map;let p=0;return l.forEach(({year:u,month:v},$)=>{const A=v.carryoverOverrideCents,O=typeof A=="number",I=O?A:p,G=$>0||O,V=v.incomes.reduce((Ce,He)=>Ce+(Vn(He.incomeSource)?He.amountCents:0),0),z=Yn(v),H=V+I,ie=H-z;o.set(ve(u,v.month),{hasPreviousMonth:G,carriedFromPreviousCents:I,recordedIncomeCents:V,effectiveIncomeCents:H,plannedBudgetCents:z,netCents:ie}),p=ie}),o}function U(l,o){return o<=0?"":l>o?"budget-over":l<o?"budget-under":""}function oa(l){return`${l>0?"+":""}${f(l)}`}function Ot(l,o){const p=l-o,u=U(o,l);return`${f(l)} <span class="eval-diff ${u}">(Δ ${oa(p)})</span>`}function fn(l,o){const p=l!==null,u=p?l-o:null,v=p?U(o,l):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${p?`${f(l)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(o)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${u===null?"-":`${f(u)} €`}</strong>
      </div>
    </div>`}async function W(l){if(await Ci(l)){alert(`Jahr ${l} existiert bereits.`);return}const p=Br(l,h.fixedTemplates,h.fixedTemplateVersion);rs(p),la(p),await ba(p),h.years=await ya(),vn(`Jahr ${l} wurde angelegt`),h.selectedYear=l,h.selectedMonth=an(),ae(`Jahr ${l} wurde angelegt.`),ne()}function vn(l="Änderung an den Daten"){h.hasUnexportedChanges=!0,te(!0);const o=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",p=new Date().toISOString(),u=`${l} (${o})`,v={id:ut("change"),timestampIso:p,message:u};h.unexportedChangeLog=[...h.unexportedChangeLog,v].slice(-200),$e(h.unexportedChangeLog);const $={id:ut("audit"),timestampIso:p,message:u};h.persistentAuditLog=[...h.persistentAuditLog,$].slice().sort((A,O)=>A.timestampIso.localeCompare(O.timestampIso)),xi($).catch(A=>{console.error("Audit-Log konnte nicht gespeichert werden",A),ae("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function os(l){const o=l.trim();o&&(h.lastBackupFileName=o,As(o))}function xa(l){h.hasUnexportedChanges=!1,te(!1),h.unexportedChangeLog=[],$e([]),h.showUnexportedChangeLogModal=!1,os(l)}async function je(l){const o=jn();o&&(await ba(o),h.years=await ya(),vn(l))}async function Mt(l){for(const o of h.years)await ba(o);h.years=await ya(),vn(l)}function ve(l,o){return l*100+o}function Wn(l,o,p){const u=`${l} auf ${f(p)} € gesetzt`;return p>o?`${u} (erhöht um ${f(p-o)} €)`:p<o?`${u} (verringert um ${f(o-p)} €)`:u}function mn(l){const o=l.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!o)return null;const p=o[1],u=o[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function Mn(l,o){const p=mn(l.dueDateIso);if(!p||o.year<p.year)return;const u=o.months.find($=>$.month===p.month);!u||u.variablePositions.some($=>$.autoAnnualTemplateId===l.id)||(u.variablePositions=[{id:ut("varpos"),name:l.name,budgetCents:l.plannedCents,actualCents:0,autoAnnualTemplateId:l.id},...u.variablePositions],Be(u))}function la(l){h.annualVariableFixedTemplates.forEach(o=>{Mn(o,l)})}function ca(l){const o=new Set(h.annualVariableFixedTemplates.map(p=>p.id));l.forEach(p=>{p.months.forEach(u=>{const v=u.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),$=u.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");v&&(u.variablePositions=u.variablePositions.filter(A=>A.autoAnnualTemplateId?o.has(A.autoAnnualTemplateId):!0),Be(u)),$&&(u.fixedCosts=u.fixedCosts.filter(A=>!A.autoAnnualTemplateId),me(u))}),la(p)})}function me(l){l.fixedBudgetCents=l.fixedCosts.reduce((o,p)=>o+p.plannedCents,0)}function Be(l){l.variableBudgetCents=l.variablePositions.reduce((o,p)=>o+p.budgetCents,0)}function Os(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`}function ua(){const l=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Os());if(!l)return null;const o=l.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!o)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const p=o[1],u=o[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function ka(l,o){const p=ve(o.year,o.month);h.years.forEach(u=>{u.months.forEach(v=>{if(ve(u.year,v.month)<p)return;v.fixedCosts.some(A=>A.templateId===l.id)||(v.fixedCosts.push({id:ut("fixed"),templateId:l.id,name:l.name,plannedCents:l.plannedCents,actualCents:0}),me(v))})})}function wa(l,o,p){const u=ve(p.year,p.month);h.years.forEach(v=>{v.months.forEach($=>{ve(v.year,$.month)<u||($.fixedCosts=$.fixedCosts.map(A=>A.templateId!==o.id?A:{...A,name:o.name,plannedCents:o.plannedCents,actualCents:A.actualCents===l.plannedCents?o.plannedCents:A.actualCents}),me($))})})}function Fs(l,o){const p=ve(o.year,o.month);h.years.forEach(u=>{u.months.forEach(v=>{ve(u.year,v.month)<p||(v.fixedCosts=v.fixedCosts.filter($=>$.templateId!==l),me(v))})})}async function gn(l,o){const p=l.trim();if(!p)return;const u=ua();if(!u)return;const v=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const $=h.fixedTemplates.find(O=>O.id===h.editingFixedTemplateId);if(!$)return;const A={...$,name:p,plannedCents:o};h.fixedTemplates=h.fixedTemplates.map(O=>O.id===h.editingFixedTemplateId?A:O),wa($,A,u)}else{const $={id:ut("tpl"),name:p,plannedCents:o};h.fixedTemplates=[...h.fixedTemplates,$],ka($,u)}h.fixedTemplateVersion=await zs(h.fixedTemplates),h.editingFixedTemplateId=null,await Mt(v?`Fixkosten-Vorlage aktualisiert: ${p} (${f(o)} €)`:`Fixkosten-Vorlage hinzugefügt: ${p} (${f(o)} €)`),ae(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function Gn(l){h.editingFixedTemplateId=l,ne()}function bn(){h.editingFixedTemplateId=null,ne()}async function $a(l){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const p=ua();if(!p)return;const u=h.fixedTemplates.find(v=>v.id===l);h.fixedTemplates=h.fixedTemplates.filter(v=>v.id!==l),Fs(l,p),h.editingFixedTemplateId===l&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await zs(h.fixedTemplates),await Mt(`Fixkosten-Vorlage gelöscht: ${u?.name??"Unbekannt"}`),ae("Fixkosten-Vorlage wurde gelöscht."),ne()}async function Ds(l,o,p){const u=l.trim();if(!u){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=mn(o);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(p<=0){alert("Bitte einen positiven Betrag eingeben.");return}const $={id:ut("annualtpl"),name:u,plannedCents:p,dueDateIso:o};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,$],h.years.forEach(A=>{Mn($,A)}),h.annualVariableFixedTemplateVersion=await Gs(h.annualVariableFixedTemplates),await Mt(`Variable Fixkosten-Vorlage hinzugefügt: ${u} (${f(p)} €, jährlich in ${Te(v.month)})`),ae("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function yn(l){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const p=h.annualVariableFixedTemplates.find(u=>u.id===l);p&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(u=>u.id!==l),h.years.forEach(u=>{u.months.forEach(v=>{v.variablePositions=v.variablePositions.filter($=>$.autoAnnualTemplateId!==l),Be(v),v.fixedCosts=v.fixedCosts.filter($=>$.autoAnnualTemplateId!==l),me(v)})}),h.annualVariableFixedTemplateVersion=await Gs(h.annualVariableFixedTemplates),await Mt(`Variable Fixkosten-Vorlage gelöscht: ${p.name}`),ae("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function Va(l,o,p){const u=Ee();if(!u)return;const $=u.days.find(A=>A.isoDate===l)?.[o]??0;u.days=u.days.map(A=>A.isoDate===l?{...A,[o]:p}:A),await je(Wn(`${o==="foodCents"?"Essen":"Ausgehen"} am ${l} angepasst`,$,p)),ne()}async function _n(l,o){const p=Ee();if(!p)return;const u=p.fixedCosts.find(v=>v.id===l);p.fixedCosts=p.fixedCosts.map(v=>v.id===l?{...v,actualCents:o}:v),await je(`Fixkosten-Ist angepasst: ${u?.name??"Unbekannt"} auf ${f(o)} €`),ne()}async function ls(l,o){const p=Ee();if(!p)return;const u=p.fixedCosts.find($=>$.id===l);if(!u)return;const v=u.plannedCents;p.fixedCosts=p.fixedCosts.map($=>$.id===l?{...$,plannedCents:o}:$),me(p),await je(Wn(`Fixkosten-Budget angepasst: ${u.name}`,v,o)),ne()}async function Ra(l,o){const p=Ee();if(!p)return;const u=l.trim();if(!u){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(o<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:ut("fixed"),templateId:ut("fixed-local"),name:u,plannedCents:o,actualCents:0};p.fixedCosts=[v,...p.fixedCosts],me(p),await je(`Fixkosten-Position hinzugefügt: ${u} (${f(o)} €)`),ae("Fixkosten-Position wurde hinzugefügt."),ne()}async function Ue(l){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const p=Ee();if(!p)return;const u=p.fixedCosts.find(v=>v.id===l);u&&(p.fixedCosts=p.fixedCosts.filter(v=>v.id!==l),me(p),await je(`Fixkosten-Position gelöscht: ${u.name}`),ae("Fixkosten-Position wurde gelöscht."),ne())}async function Tn(){const l=Ee();if(!l)return;if(l.fixedCosts.length===0){ae("Keine Fixkosten zum Löschen vorhanden.","error");return}if(!confirm("Alle Fixkosten im aktuellen Monat wirklich löschen?"))return;const p=l.fixedCosts.length;l.fixedCosts=[],me(l),await je(`Alle Fixkosten im Monat gelöscht: ${p} Position(en)`),ae(`${p} Fixkosten-Position(en) wurden gelöscht.`),ne()}async function rn(l){await Pn("fixedBudgetCents",l,"Fixkosten")}async function cs(l){await Pn("foodBudgetCents",l,"Essen")}async function Un(l){await Pn("goingOutBudgetCents",l,"Ausgehen")}async function Sa(l){await Pn("miscBudgetCents",l,"Sonstiges")}async function ja(l){await Pn("variableBudgetCents",l,"Variable Kosten")}async function Pn(l,o,p){const u=Ee(),v=h.selectedYear;if(!u||!v||u[l]===o)return;const $=u[l];if(u[l]=o,confirm(`Soll das Budget "${p}" auch für zukünftige Monate übernommen werden?`)){const O=ve(v,h.selectedMonth);h.years.forEach(G=>{G.months.forEach(V=>{ve(G.year,V.month)<=O||(V[l]=o)})}),h.recurringBudgetDefaults[l]=o,Bn(h.recurringBudgetDefaults);const I=Wn(`Budget "${p}"`,$??0,o);await Mt(`${I} (inkl. zukünftiger Monate)`),ae(`Budget "${p}" wurde für zukünftige Monate übernommen.`),ne();return}await je(Wn(`Budget "${p}"`,$??0,o)),ne()}async function Cn(l){const o=Ee();o&&(l===null?o.carryoverOverrideCents=null:o.carryoverOverrideCents=l,await je(l===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(l)} € gesetzt`),ne())}async function Ya(l,o,p){const u=Ee(),v=h.selectedYear;if(!u||!v)return;const $=l.trim();if(!$){alert("Bitte Bezeichnung für die Position angeben.");return}if(u.variablePositions=[{id:ut("varpos"),name:$,budgetCents:o,actualCents:0},...u.variablePositions],Be(u),p){const A=ve(v,h.selectedMonth);h.years.forEach(O=>{O.months.forEach(I=>{ve(O.year,I.month)<=A||(I.variablePositions=[{id:ut("varpos"),name:$,budgetCents:o,actualCents:0},...I.variablePositions],Be(I))})}),await Mt(`Variable Position hinzugefügt: ${$} (${f(o)} €) für zukünftige Monate`),ae("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await je(`Variable Position hinzugefügt: ${$} (${f(o)} €)`),ae("Variable Position wurde hinzugefügt."),ne()}async function Ea(l,o){const p=Ee();if(!p)return;const u=p.variablePositions.find($=>$.id===l),v=u?.actualCents??0;p.variablePositions=p.variablePositions.map($=>$.id===l?{...$,actualCents:o}:$),await je(Wn(`Istwert Variable Position angepasst: ${u?.name??"Unbekannt"}`,v,o)),ne()}async function us(l,o){const p=Ee();if(!p)return;const u=p.variablePositions.find($=>$.id===l),v=u?.budgetCents??0;p.variablePositions=p.variablePositions.map($=>$.id===l?{...$,budgetCents:o}:$),Be(p),await je(Wn(`Budget Variable Position angepasst: ${u?.name??"Unbekannt"}`,v,o)),ne()}async function fe(l){if(!confirm("Variable Position wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.variablePositions.find(I=>I.id===l);if(!v)return;const $=ve(u,h.selectedMonth),O=h.years.some(I=>I.months.some(G=>ve(I.year,G.month)>$&&G.variablePositions.some(V=>V.name===v.name&&V.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.variablePositions=p.variablePositions.filter(I=>I.id!==l),Be(p),O){h.years.forEach(I=>{I.months.forEach(G=>{ve(I.year,G.month)<=$||(G.variablePositions=G.variablePositions.filter(V=>!(V.name===v.name&&V.budgetCents===v.budgetCents)),Be(G))})}),await Mt(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),ae("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await je(`Variable Position gelöscht: ${v.name}`),ae("Variable Position wurde gelöscht."),ne()}async function ds(l){const o=Ee(),p=h.selectedYear;if(!o||!p)return;const u=o.variablePositions.find(V=>V.id===l);if(!u)return;const v={year:h.selectedMonth===12?p+1:p,month:h.selectedMonth===12?1:h.selectedMonth+1};let $=h.years.find(V=>V.year===v.year);if(!$){const V=Br(v.year,h.fixedTemplates,h.fixedTemplateVersion);rs(V),la(V),await ba(V),h.years=[...h.years,V].sort((z,H)=>z.year-H.year),$=V}const A=$.months.find(V=>V.month===v.month);if(!A)return;const O=A.variablePositions.some(V=>V.id===u.id||V.name===u.name&&V.budgetCents===u.budgetCents);if(o.variablePositions=o.variablePositions.filter(V=>V.id!==l),Be(o),!O){const z=A.variablePositions.some(H=>H.id===u.id)?{...u,id:ut("varpos")}:u;A.variablePositions=[z,...A.variablePositions],Be(A)}const I=`${Te(v.month)} ${v.year}`,G=`Variable Position verschoben: ${u.name} → ${I}`;if(v.year===p)await je(G);else{const V=jn();if(!V)return;await ba(V),await ba($),h.years=await ya(),sa(h.years),vn(G)}ae(O?`Position entfernt (im Folgemonat schon vorhanden: ${I}).`:`Position in den Folgemonat verschoben: ${I}.`),ne()}async function za(l,o,p){const u=Ee(),v=h.selectedYear;if(!u||!v)return;const $=l.trim();if(!$){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(o<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=Rs($,o);if(u.miscCosts=[A,...u.miscCosts],p){const O=ve(v,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(G=>{ve(I.year,G.month)<=O||(G.miscCosts=[Rs($,o),...G.miscCosts])})}),await Mt(`Sonstige Position hinzugefügt: ${$} (${f(o)} €) für zukünftige Monate`),ae("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await je(`Sonstige Position hinzugefügt: ${$} (${f(o)} €)`),ae("Sonstige Position wurde hinzugefügt."),ne()}function Hn(l){const o=[];let p="",u=!1;for(let v=0;v<l.length;v+=1){const $=l[v],A=l[v+1];if($==='"'){u&&A==='"'?(p+='"',v+=1):u=!u;continue}if($===";"&&!u){o.push(p.trim()),p="";continue}p+=$}return o.push(p.trim()),o}async function da(l){const o=Ee();if(!o){ae("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await l.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(I=>I.trim()).filter(I=>I.length>0);if(u.length===0){ae("CSV-Datei ist leer.","error");return}const v=new Set(o.miscCosts.map(I=>`${I.description}__${I.amountCents}`));let $=0,A=0,O=0;if(u.forEach(I=>{const G=Hn(I);if(G.length!==2){O+=1;return}const V=G[0]?.trim()??"",z=G[1]?.trim()??"",H=Fe(z);if(!V||H<=0){O+=1;return}const ie=`${V}__${H}`;if(v.has(ie)){A+=1;return}o.miscCosts.push(Rs(V,H)),v.add(ie),$+=1}),$===0){const I=O>0||A>0?`Keine Position importiert (Duplikate: ${A}, ungültig: ${O}).`:"Keine Position importiert.";ae(I,"error");return}await je(`Sonstiges CSV-Import: ${$} Position(en), Duplikate übersprungen: ${A}, ungültige Zeilen: ${O}`),ae(`Import abgeschlossen: ${$} übernommen, ${A} Duplikate, ${O} ungültig.`),ne()}async function hs(l){const o=Ee();if(!o){ae("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await l.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(I=>I.trim()).filter(I=>I.length>0);if(u.length===0){ae("CSV-Datei ist leer.","error");return}const v=new Set(o.fixedCosts.map(I=>`${I.name}__${I.plannedCents}__${I.actualCents}`));let $=0,A=0,O=0;if(u.forEach(I=>{const G=Hn(I);if(G.length!==2){O+=1;return}const V=G[0]?.trim()??"",z=G[1]?.trim()??"",H=Fe(z);if(!V||H<=0){O+=1;return}const ie=`${V}__${H}__${H}`;if(v.has(ie)){A+=1;return}o.fixedCosts.push({id:ut("fixed"),templateId:ut("fixed-local"),name:V,plannedCents:H,actualCents:H}),v.add(ie),$+=1}),$===0){const I=O>0||A>0?`Keine Position importiert (Duplikate: ${A}, ungültig: ${O}).`:"Keine Position importiert.";ae(I,"error");return}me(o),await je(`Fixkosten CSV-Import: ${$} Position(en), Duplikate übersprungen: ${A}, ungültige Zeilen: ${O}`),ae(`Import abgeschlossen: ${$} übernommen, ${A} Duplikate, ${O} ungültig.`),ne()}async function ps(l){const o=Ee();if(!o){ae("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await l.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(I=>I.trim()).filter(I=>I.length>0);if(u.length===0){ae("CSV-Datei ist leer.","error");return}const v=new Set(o.variablePositions.map(I=>`${I.name}__${I.budgetCents}__${I.actualCents}`));let $=0,A=0,O=0;if(u.forEach(I=>{const G=Hn(I);if(G.length!==2){O+=1;return}const V=G[0]?.trim()??"",z=G[1]?.trim()??"",H=Fe(z);if(!V||H<=0){O+=1;return}const ie=`${V}__${H}__${H}`;if(v.has(ie)){A+=1;return}o.variablePositions.push({id:ut("varpos"),name:V,budgetCents:H,actualCents:H}),v.add(ie),$+=1}),$===0){const I=O>0||A>0?`Keine Position importiert (Duplikate: ${A}, ungültig: ${O}).`:"Keine Position importiert.";ae(I,"error");return}Be(o),await je(`Variable CSV-Import: ${$} Position(en), Duplikate übersprungen: ${A}, ungültige Zeilen: ${O}`),ae(`Import abgeschlossen: ${$} übernommen, ${A} Duplikate, ${O} ungültig.`),ne()}async function fs(l){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.miscCosts.find(I=>I.id===l);if(!v)return;const $=ve(u,h.selectedMonth),O=h.years.some(I=>I.months.some(G=>ve(I.year,G.month)>$&&G.miscCosts.some(V=>V.description===v.description&&V.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.miscCosts=p.miscCosts.filter(I=>I.id!==l),O){h.years.forEach(I=>{I.months.forEach(G=>{ve(I.year,G.month)<=$||(G.miscCosts=G.miscCosts.filter(V=>!(V.description===v.description&&V.amountCents===v.amountCents)))})}),await Mt(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),ae("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await je(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €)`),ae("Sonstige Position wurde gelöscht."),ne()}async function Me(l,o,p,u){const v=Ee(),$=h.selectedYear;if(!v||!$)return;const A=l.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(o<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const O=Mr(A,o,p);if(v.incomes=[O,...v.incomes],u){const I=ve($,h.selectedMonth);h.years.forEach(G=>{G.months.forEach(V=>{ve(G.year,V.month)<=I||(V.incomes=[Mr(A,o,p),...V.incomes])})}),await Mt(`Einkommen hinzugefügt: ${A} (${f(o)} €, ${It(p)}) für zukünftige Monate`),ae("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await je(`Einkommen hinzugefügt: ${A} (${f(o)} €, ${It(p)})`),ae("Einkommen wurde hinzugefügt."),ne()}async function ha(l,o){const p=Ee();if(!p)return;const u=p.incomes.find(v=>v.id===l);u&&(p.incomes=p.incomes.map(v=>{if(v.id!==l)return v;if(!o){const{incomeSource:$,...A}=v;return A}return{...v,incomeSource:o}}),await je(`Einkommensart angepasst: ${u.description} → ${It(o)}`),ne())}async function pa(l){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.incomes.find(I=>I.id===l);if(!v)return;const $=ve(u,h.selectedMonth),O=h.years.some(I=>I.months.some(G=>ve(I.year,G.month)>$&&G.incomes.some(V=>V.description===v.description&&V.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.incomes=p.incomes.filter(I=>I.id!==l),O){h.years.forEach(I=>{I.months.forEach(G=>{ve(I.year,G.month)<=$||(G.incomes=G.incomes.filter(V=>!(V.description===v.description&&V.amountCents===v.amountCents)))})}),await Mt(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),ae("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await je(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €)`),ae("Einkommen wurde gelöscht."),ne()}async function An(){const l=await wi(),o=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),p=URL.createObjectURL(o),u=`haushaltsbuch-backup-${En()}-${as()}.json`,v=document.createElement("a");v.href=p,v.download=u,v.click(),URL.revokeObjectURL(p),xa(u),ne(),ae("Backup wurde exportiert.")}async function Wa(l){const o=await l.text(),p=JSON.parse(o);await $i(p);const[u,v,$,A]=await Promise.all([ya(),Ys(),Ws(),Us()]);h.years=u,h.annualVariableFixedTemplates=$.templates,h.annualVariableFixedTemplateVersion=$.version,sa(h.years),ca(h.years),h.fixedTemplates=v.templates,h.fixedTemplateVersion=v.version,h.savedSearchEvaluations=A.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await Rn(h.years),await is(),h.persistentAuditLog=await Hs(),h.selectedYear=ns(u),h.selectedMonth=an(),xa(l.name),ae("Backup wurde importiert."),ne()}function Ba(l){h.evaluationQuery=l,h.evaluationCurrentResult=_r(h.years,l,At(),an()),ne()}async function Ma(){const l=h.evaluationCurrentResult;if(!l||!l.keywordNormalized){ae("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const o=h.savedSearchEvaluations.findIndex(p=>p.id===l.id);o>=0?h.savedSearchEvaluations[o]=l:h.savedSearchEvaluations=[l,...h.savedSearchEvaluations],await Es(h.savedSearchEvaluations),vn(`Auswertung gespeichert: ${l.keyword}`),ae(`Auswertung "${l.keyword}" wurde gespeichert.`),ne()}async function vs(l){const o=h.savedSearchEvaluations.find(p=>p.id===l);o&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(p=>p.id!==l),await Es(h.savedSearchEvaluations),vn(`Auswertung gelöscht: ${o.keyword}`),ae(`Gespeicherte Auswertung "${o.keyword}" wurde gelöscht.`),ne())}function ne(){const l=jn(),o=Ee(),p=En(),u=o?Vt(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=l?hn(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},$=l?qa(l):[],A=o?o.foodBudgetCents??0:0,O=o?o.goingOutBudgetCents??0:0,I=o?o.fixedBudgetCents??o.fixedCosts.reduce((n,g)=>n+g.plannedCents,0):0,G=o?o.variableBudgetCents??o.variablePositions.reduce((n,g)=>n+g.budgetCents,0):0,V=o?o.miscBudgetCents??0:0,z=l?l.months.reduce((n,g)=>n+(g.foodBudgetCents??0),0):0,H=l?l.months.reduce((n,g)=>n+(g.goingOutBudgetCents??0),0):0,ie=l?l.months.reduce((n,g)=>n+(g.fixedBudgetCents??g.fixedCosts.reduce((q,Z)=>q+Z.plannedCents,0)),0):0,Ce=l?l.months.reduce((n,g)=>n+(g.variableBudgetCents??g.variablePositions.reduce((q,Z)=>q+Z.budgetCents,0)),0):0,He=l?l.months.reduce((n,g)=>n+(g.miscBudgetCents??0),0):0,le=o?o.incomes.reduce((n,g)=>n+(Vn(g.incomeSource)?g.amountCents:0),0):0,ze=o?o.incomes.reduce((n,g)=>n+(g.incomeSource==="salary"?g.amountCents:0),0):0,Ke=o?o.incomes.reduce((n,g)=>n+(g.incomeSource==="fresh"?g.amountCents:0),0):0,_e=pn(),at=l?_e.get(ve(l.year,h.selectedMonth)):void 0,Ft=l?l.months.slice().sort((n,g)=>n.month-g.month)[0]:void 0,K=at?.carriedFromPreviousCents??0,$t=at?.hasPreviousMonth??!1,gt=at?.effectiveIncomeCents??le,on=o?Yn(o):0,bt=at?.netCents??le-on,ye=gt-u.totalCents,Rt=ze-u.totalCents,Ne=u.totalCents>0?`${(ze/u.totalCents*100).toFixed(1)} %`:"-",Ye=K<0?"danger":K>0?"budget-under":"",Je=bt<0?"danger":bt>0?"budget-under":"",et=ye<0?"danger":ye>0?"budget-under":"",tt=l?l.months.reduce((n,g)=>n+g.incomes.reduce((q,Z)=>q+(Vn(Z.incomeSource)?Z.amountCents:0),0),0):0,Ut=l?l.months.reduce((n,g)=>n+g.incomes.reduce((q,Z)=>q+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,Dt=l?l.months.reduce((n,g)=>n+g.incomes.reduce((q,Z)=>q+(Z.incomeSource==="fresh"?Z.amountCents:0),0),0):0,Lt=l&&Ft?_e.get(ve(l.year,Ft.month))?.carriedFromPreviousCents??0:0,Nt=tt+Lt;Nt-v.totalCents,Ut-v.totalCents,v.totalCents>0&&`${(Ut/v.totalCents*100).toFixed(1)}`;const nt=A+O+I+G+V,jt=A+O,xe=u.foodCents+u.goingOutCents,qe=jt-xe,Xe=U(xe,jt),Pe=z+H+ie+Ce+He,Ve=le-nt,ln=nt-u.totalCents;Pe-v.totalCents;const Ae=n=>n<0?"danger":n>0?"budget-under":"",cn=(n,g)=>g<=0?"muted":n>=g?"budget-under":"danger",Ie=cn(ze,u.totalCents);cn(Ut,v.totalCents);const re=(n,g)=>{if(g<=0)return"0%";const Z=Math.max(0,n)/g*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},ot=(n,g)=>{if(g<=0)return n>0?100:0;const q=Math.max(0,n)/g*100;return Math.max(0,q)},_t=[{label:"Essen",budgetCents:A,actualCents:u.foodCents},{label:"Ausgehen",budgetCents:O,actualCents:u.goingOutCents},{label:"Fixkosten",budgetCents:I,actualCents:u.fixedCents},{label:"Variable",budgetCents:G,actualCents:u.variableCents},{label:"Sonstige",budgetCents:V,actualCents:u.miscCents}];Math.max(1,..._t.flatMap(n=>[n.budgetCents,n.actualCents]));const xn=(n,g)=>g<=0?"bar-positive":n<=0||g>n?"bar-negative":"bar-positive",Ht=[{label:"Einkommen gesamt",valueCents:gt,className:"bar-income"},{label:"Budget gesamt",valueCents:nt,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:u.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ye,className:ye<0?"bar-negative":"bar-positive"}],kn=Math.max(1,...Ht.map(n=>Math.abs(n.valueCents))),Yt=l?l.months.slice().sort((n,g)=>n.month-g.month).map(n=>{const g=n.foodBudgetCents??0,q=n.goingOutBudgetCents??0,Z=n.fixedBudgetCents??n.fixedCosts.reduce((en,Sn)=>en+Sn.plannedCents,0),Se=n.variableBudgetCents??n.variablePositions.reduce((en,Sn)=>en+Sn.budgetCents,0),Qe=n.miscBudgetCents??0,yt=g+q+Z+Se+Qe;return{month:n.month,foodBudgetCents:g,goingOutBudgetCents:q,fixedBudgetCents:Z,variableBudgetCents:Se,miscBudgetCents:Qe,totalBudgetCents:yt}}):[],lt=new Map(Yt.map(n=>[n.month,n])),st=n=>{if(n.length===0)return null;const g=Math.min(...n),q=Math.max(...n),Z=Math.round(n.reduce((Se,Qe)=>Se+Qe,0)/n.length);return{min:g,avg:Z,max:q}},ct=l&&l.year===At()?$.filter(n=>n.month<=an()):$,Jn=ct.map(n=>n.summary.foodCents),zt=ct.map(n=>n.summary.goingOutCents),Xn=ct.map(n=>n.summary.fixedCents),In=ct.map(n=>n.summary.variableCents),Ga=ct.map(n=>n.summary.miscCents),T=ct.map(n=>n.summary.totalCents),N=ct.map(n=>l?_e.get(ve(l.year,n.month))?.plannedBudgetCents??0:0),Kt=ct.map(n=>l?_e.get(ve(l.year,n.month))?.netCents??0:0),Qn=new Map((l?.months??[]).map(n=>[n.month,n.incomes.reduce((g,q)=>g+(q.incomeSource==="salary"?q.amountCents:0),0)])),fa=new Map((l?.months??[]).map(n=>[n.month,n.incomes.reduce((g,q)=>g+(q.incomeSource==="salary"||q.incomeSource==="fresh"?q.amountCents:0),0)])),gs=ct.map(n=>Qn.get(n.month)??0),Ua=ct.map(n=>fa.get(n.month)??0),Jt={food:st(Jn),goingOut:st(zt),fixed:st(Xn),variable:st(In),misc:st(Ga),total:st(T),salary:st(gs),income:st(Ua),budget:st(N),net:st(Kt)},bs=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Xt={food:Jn.reduce((n,g)=>n+g,0),goingOut:zt.reduce((n,g)=>n+g,0),fixed:Xn.reduce((n,g)=>n+g,0),variable:In.reduce((n,g)=>n+g,0),misc:Ga.reduce((n,g)=>n+g,0),total:T.reduce((n,g)=>n+g,0),salary:gs.reduce((n,g)=>n+g,0),income:Ua.reduce((n,g)=>n+g,0),budget:N.reduce((n,g)=>n+g,0)},Ls=bs.map(({key:n,label:g})=>{const q=Jt.food?.[n]??null,Z=Jt.goingOut?.[n]??null,Se=Jt.fixed?.[n]??null,Qe=Jt.variable?.[n]??null,yt=Jt.misc?.[n]??null,en=Jt.total?.[n]??null,Sn=Jt.salary?.[n]??null,pt=Jt.income?.[n]??null,ga=Jt.budget?.[n]??null,Ia=Jt.net?.[n]??null,Tt=Dn=>Dn===null?"-":f(Dn);return`<tr>
                  <td><strong>${g}</strong></td>
                  <td>${Tt(q)}</td>
                  <td>${Tt(Z)}</td>
                  <td>${Tt(Se)}</td>
                  <td>${Tt(Qe)}</td>
                  <td>${Tt(yt)}</td>
                  <td>${Tt(en)}</td>
                  <td>${Tt(Sn)}</td>
                  <td>${Tt(pt)}</td>
                  <td>${Tt(ga)}</td>
                  <td>${Tt(Ia)}</td>
                </tr>`}).join(""),ys=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(Xt.food)}</td>
                  <td>${f(Xt.goingOut)}</td>
                  <td>${f(Xt.fixed)}</td>
                  <td>${f(Xt.variable)}</td>
                  <td>${f(Xt.misc)}</td>
                  <td>${f(Xt.total)}</td>
                  <td>${f(Xt.salary)}</td>
                  <td>${f(Xt.income)}</td>
                  <td>${f(Xt.budget)}</td>
                  <td>-</td>
                </tr>`,_a=Math.max(1,...$.flatMap(n=>{const g=lt.get(n.month)?.totalBudgetCents;return[n.summary.totalCents,g??0]})),Ha=Math.max(1,...$.flatMap(n=>{const g=lt.get(n.month),q=n.summary.foodCents+n.summary.goingOutCents,Z=(g?.foodBudgetCents??0)+(g?.goingOutBudgetCents??0);return[q,Z]})),Ja=Math.max(1,...$.flatMap(n=>{const g=lt.get(n.month)?.fixedBudgetCents??0;return[n.summary.fixedCents,g]})),Cs=Math.max(1,...$.flatMap(n=>{const g=lt.get(n.month)?.variableBudgetCents??0;return[n.summary.variableCents,g]})),xs=Math.max(1,...$.flatMap(n=>{const g=lt.get(n.month)?.miscBudgetCents??0;return[n.summary.miscCents,g]})),ks=U(u.fixedCents,I),Ta=U(u.foodCents,A),un=U(u.goingOutCents,O),We=U(u.variableCents,G),va=U(u.miscCents,V),Zn=U(u.totalCents,nt),On=n=>n===0?"-":f(n),Xa=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(I)}</div>
        <div class="compact-cost-actual ${ks}">${On(u.fixedCents)}</div>
      </div>`,ws=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(G)}</div>
        <div class="compact-cost-actual ${We}">${On(u.variableCents)}</div>
      </div>`,Fn=o?o.fixedCosts.length>0?o.fixedCosts.map(n=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${mt(n.name)}</div>
                  <div class="compact-cost-budget">${f(n.plannedCents)}</div>
                  <div class="compact-cost-actual ${U(n.actualCents,n.plannedCents)}">${On(n.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Qa=o?o.variablePositions.length>0?o.variablePositions.map(n=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${mt(n.name)}${n.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(n.budgetCents)}</div>
                  <div class="compact-cost-actual ${U(n.actualCents,n.budgetCents)}">${On(n.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Qt=h.editingFixedTemplateId?h.fixedTemplates.find(n=>n.id===h.editingFixedTemplateId):null,wn=h.hasUnexportedChanges,Za=h.unexportedChangeLog.slice().reverse(),e=h.persistentAuditLog.slice().sort((n,g)=>g.timestampIso.localeCompare(n.timestampIso)),t=h.lastBackupFileName?mt(h.lastBackupFileName):"-",a={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},s=h.years.slice().sort((n,g)=>n.year-g.year),r=s.some(n=>n.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??s[s.length-1]?.year??null,i=typeof r=="number"?s.find(n=>n.year===r):void 0,c=i?i.months.slice().sort((n,g)=>n.month-g.month):[],d=i?hn(i):a,b=i?ra(i):{salaryIncomeCents:0,freshIncomeCents:0},E=b.salaryIncomeCents+b.freshIncomeCents,x=b.salaryIncomeCents,m=i?zn(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},k=i?sn(i):0,w=i?ia(i,_e):0,C=k+w,y=i?i.months.reduce((n,g)=>n+Yn(g),0):0,M=C-y,_=C-d.totalCents,S=[{label:"Essen",budgetCents:m.foodCents,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:m.goingOutCents,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:m.fixedCents,actualCents:d.fixedCents},{label:"Variable",budgetCents:m.variableCents,actualCents:d.variableCents},{label:"Sonstige",budgetCents:m.miscCents,actualCents:d.miscCents}],P=c.map(n=>{const g=i?_e.get(ve(i.year,n.month)):void 0,q=Vt(n),Z=n.incomes.reduce((Dn,ea)=>Dn+(ea.incomeSource==="salary"?ea.amountCents:0),0),Se=n.incomes.reduce((Dn,ea)=>Dn+(Vn(ea.incomeSource)?ea.amountCents:0),0),Qe=g?.effectiveIncomeCents??Se,yt=g?.plannedBudgetCents??Yn(n),en=q.foodCents,Sn=q.goingOutCents,pt=en+Sn,ga=q.totalCents,Ia=Qe-yt,Tt=Qe-ga;return{month:n.month,salaryIncomeCents:Z,incomeCents:Se,foodCents:en,goingOutCents:Sn,foodAndGoingOutCents:pt,effectiveIncomeCents:Qe,plannedBudgetCents:yt,actualCostCents:ga,plannedNetCents:Ia,actualNetCents:Tt}}),F=Math.max(1,...P.map(n=>n.actualCostCents)),R=Math.max(1,...P.flatMap(n=>[Math.abs(n.plannedNetCents),Math.abs(n.actualNetCents)])),j=Math.max(1,...P.map(n=>n.foodAndGoingOutCents)),D=Math.max(1,...P.map(n=>n.foodCents)),J=Math.max(1,...P.map(n=>n.goingOutCents)),Y=P.map((n,g,q)=>{const Z=g>0?q[g-1]?.plannedNetCents??n.plannedNetCents:n.plannedNetCents;return{...n,monthLabel:Te(n.month),monthShortLabel:Te(n.month).slice(0,3),deltaCents:n.plannedNetCents-Z}}),L=Y[Y.length-1]??null,X=Math.min(0,...Y.map(n=>n.plannedNetCents)),he=Math.max(0,...Y.map(n=>n.plannedNetCents)),ge=Math.max(1,he-X),ee=720,ue=320,Oe=18,St=18,Ge=38,qt=56,Pa=ee-qt-St,Ns=ue-Oe-Ge,Lr=n=>{if(Y.length<=1)return qt+Pa/2;const g=n/(Y.length-1);return qt+g*Pa},Ks=n=>Oe+(he-n)/ge*Ns,$n=Y.map((n,g)=>{const q=Lr(g),Z=Ks(n.plannedNetCents);return{...n,x:q,y:Z,leftPercent:q/ee*100,topPercent:Z/ue*100}}),qs=$n.map((n,g)=>`${g===0?"M":"L"} ${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" "),Js=$n.length>0?`${qs} L ${$n[$n.length-1]?.x.toFixed(1)} ${(Oe+Ns).toFixed(1)} L ${$n[0]?.x.toFixed(1)} ${(Oe+Ns).toFixed(1)} Z`:"",Xs=5,Nr=Array.from({length:Xs},(n,g)=>{const q=g/(Xs-1),Z=he-q*ge;return{valueCents:Math.round(Z/100)*100,y:Ks(Z)}}),Qs=Ks(0),Kr=Y[0]?.plannedNetCents??0,Aa=(Y[Y.length-1]?.plannedNetCents??0)-Kr,qr=Aa<0?"trend-badge-negative":Aa>0?"trend-badge-positive":"trend-badge-neutral",Zs=Aa<0?"↘":Aa>0?"↗":"→",Vr=Aa<0?"Abwärtstrend":Aa>0?"Aufwärtstrend":"Seitwärts",ma=s.reduce((n,g)=>{const q=zn(g);return{foodCents:n.foodCents+q.foodCents,goingOutCents:n.goingOutCents+q.goingOutCents,fixedCents:n.fixedCents+q.fixedCents,variableCents:n.variableCents+q.variableCents,miscCents:n.miscCents+q.miscCents,totalCents:n.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Wt=s.reduce((n,g)=>{const q=hn(g);return{foodCents:n.foodCents+q.foodCents,goingOutCents:n.goingOutCents+q.goingOutCents,fixedCents:n.fixedCents+q.fixedCents,variableCents:n.variableCents+q.variableCents,miscCents:n.miscCents+q.miscCents,totalCents:n.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Rr=s.reduce((n,g)=>n+sn(g),0),jr=s[0]?ia(s[0],_e):0,er=Rr+jr,tr=er-ma.totalCents,nr=er-Wt.totalCents,ar=[{label:"Essen",budgetCents:ma.foodCents,actualCents:Wt.foodCents},{label:"Ausgehen",budgetCents:ma.goingOutCents,actualCents:Wt.goingOutCents},{label:"Fixkosten",budgetCents:ma.fixedCents,actualCents:Wt.fixedCents},{label:"Variable",budgetCents:ma.variableCents,actualCents:Wt.variableCents},{label:"Sonstige",budgetCents:ma.miscCents,actualCents:Wt.miscCents}],sr=Math.max(1,...ar.flatMap(n=>[n.budgetCents,n.actualCents])),Vs=[{label:"Essen & Ausgehen",actualCents:Wt.foodCents+Wt.goingOutCents},{label:"Fixkosten",actualCents:Wt.fixedCents},{label:"Variable",actualCents:Wt.variableCents},{label:"Sonstige",actualCents:Wt.miscCents}],Yr=Math.max(1,...Vs.map(n=>n.actualCents)),ke=s.map(n=>{const g=hn(n),q=zn(n),Z=sn(n),Se=ra(n),Qe=ia(n,_e),yt=Z+Qe;return{year:n.year,salaryIncomeCents:Se.salaryIncomeCents,freshIncomeCents:Se.freshIncomeCents,totalIncomeCents:Se.salaryIncomeCents+Se.freshIncomeCents,foodAndGoingOutCents:g.foodCents+g.goingOutCents,fixedCents:g.fixedCents,variableCents:g.variableCents,miscCents:g.miscCents,budgetTotalCents:q.totalCents,actualTotalCents:g.totalCents,effectiveIncomeCents:yt,plannedNetCents:yt-q.totalCents,actualNetCents:yt-g.totalCents}}),zr=ke.reduce((n,g)=>n+g.totalIncomeCents,0),Wr=ke.reduce((n,g)=>n+g.salaryIncomeCents,0),rr=Math.max(1,...ke.flatMap(n=>[Math.abs(n.plannedNetCents),Math.abs(n.actualNetCents)])),Gr=Math.max(1,...ke.map(n=>n.actualTotalCents)),Ur=Math.max(1,...ke.map(n=>n.totalIncomeCents)),Hr=Math.max(1,...ke.map(n=>n.salaryIncomeCents)),ir=Math.max(1,...ke.flatMap(n=>[n.totalIncomeCents,n.actualTotalCents])),or=Math.max(1,...ke.flatMap(n=>[n.salaryIncomeCents,n.actualTotalCents])),Jr=Math.max(1,...ke.map(n=>n.foodAndGoingOutCents)),Xr=Math.max(1,...ke.map(n=>n.fixedCents)),Qr=Math.max(1,...ke.map(n=>n.variableCents)),Zr=Math.max(1,...ke.map(n=>n.miscCents)),ei=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${s.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${s.map(n=>`<option value="${n.year}" ${n.year===r?"selected":""}>${n.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${i?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(E)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(x)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(y)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(d.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ae(M)}">${f(M)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ae(_)}">${f(_)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Zs}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${qr}">${Zs} ${Vr}</span>
                    </div>
                  </header>
                  ${L?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${mt(L.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${Ae(L.plannedNetCents)}" data-year-trend-active-net>${f(L.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(L.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(L.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${Ae(L.deltaCents)}" data-year-trend-active-delta>${L.deltaCents>=0?"+":""}${f(L.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${ee} ${ue}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${i?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Nr.map(n=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${qt}" y1="${n.y.toFixed(1)}" x2="${ee-St}" y2="${n.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${qt-10}" y="${(n.y+4).toFixed(1)}" text-anchor="end">${f(n.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${qt}" y1="${Qs.toFixed(1)}" x2="${ee-St}" y2="${Qs.toFixed(1)}"></line>
                              ${Js?`<path class="year-trend-area" d="${Js}"></path>`:""}
                              ${qs?`<path class="year-trend-line" d="${qs}"></path>`:""}
                              ${$n.map(n=>`
                                    <circle class="year-trend-node ${n.plannedNetCents<0?"is-negative":""}" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${n.x.toFixed(1)}" y="${ue-12}" text-anchor="middle">${mt(n.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${$n.map((n,g)=>`
                                    <button
                                      class="year-trend-point-hit ${g===$n.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${n.leftPercent.toFixed(2)}%; top:${n.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${g===$n.length-1?"1":"0"}"
                                      data-month-label="${mt(n.monthLabel)}"
                                      data-net-cents="${n.plannedNetCents}"
                                      data-actual-net-cents="${n.actualNetCents}"
                                      data-income-cents="${n.effectiveIncomeCents}"
                                      data-expense-cents="${n.actualCostCents}"
                                      data-delta-cents="${n.deltaCents}"
                                      aria-label="${mt(n.monthLabel)}: Kalkulierter Saldo ${f(n.plannedNetCents)}, Einkommen ${f(n.effectiveIncomeCents)}, Ausgaben ${f(n.actualCostCents)}"
                                      aria-pressed="${g===$n.length-1?"true":"false"}"
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
                    ${S.map(n=>{const g=ot(n.actualCents,n.budgetCents),q=Math.min(100,g),Z=`${g.toFixed(0)}%`,Se=n.budgetCents-n.actualCents,Qe=Se<0?"danger":Se>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${xn(n.budgetCents,n.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${q.toFixed(1)}%" title="${n.label}: ${f(n.actualCents)} von ${f(n.budgetCents)}">
                              <span class="circle-chart-value">${Z}</span>
                            </div>
                            <div class="circle-chart-label">${n.label}</div>
                            <div class="circle-chart-meta muted">B ${f(n.budgetCents)} / I ${f(n.actualCents)}</div>
                            <div class="circle-chart-meta ${Qe}">${Se>=0?"+":""}${f(Se)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(P.length,1)}, minmax(0, 1fr));">
                    ${P.map(n=>{const g=re(n.actualCostCents,F);return`
                          <div class="spark-bar" title="${Te(n.month)}: ${f(n.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                    ${P.map(n=>{const g=re(Math.abs(n.plannedNetCents),R),q=re(Math.abs(n.actualNetCents),R),Z=n.plannedNetCents<0?"bar-negative":"bar-positive",Se=n.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Te(n.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(n.plannedNetCents)} | Ist-Saldo: ${f(n.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${g}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Ae(n.plannedNetCents)}">B ${f(n.plannedNetCents)}</span>
                              <span class="${Ae(n.actualNetCents)}">I ${f(n.actualNetCents)}</span>
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
                    <th>Gehalt (€)</th>
                    <th>Einkommen (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${P.map(n=>`<tr>
                        <td>${Te(n.month)}</td>
                    <td>${f(n.salaryIncomeCents)}</td>
                    <td>${f(n.incomeCents)}</td>
                        <td>${f(n.plannedBudgetCents)}</td>
                        <td>${f(n.actualCostCents)}</td>
                        <td class="${Ae(n.plannedNetCents)}">${f(n.plannedNetCents)}</td>
                        <td class="${Ae(n.actualNetCents)}">${f(n.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${s.map(n=>`<option value="${n.year}" ${n.year===r?"selected":""}>${n.year}</option>`).join("")}
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
                    ${P.map(n=>{const g=re(n.foodAndGoingOutCents,j);return`
                          <div class="spark-bar" title="${Te(n.month)}: ${f(n.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(P.length,1)}, minmax(0, 1fr));">
                    ${P.map(n=>{const g=re(n.foodCents,D);return`
                          <div class="spark-bar" title="${Te(n.month)}: ${f(n.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(P.length,1)}, minmax(0, 1fr));">
                    ${P.map(n=>{const g=re(n.goingOutCents,J);return`
                          <div class="spark-bar" title="${Te(n.month)}: ${f(n.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(zr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(Wr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(ma.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Wt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ae(tr)}">${f(tr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ae(nr)}">${f(nr)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${Vs.map(n=>`<div class="eval-row"><div class="eval-label">${n.label}</div><div class="eval-value">${f(n.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Wt.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${ar.map(n=>{const g=re(n.budgetCents,sr),q=re(n.actualCents,sr),Z=xn(n.budgetCents,n.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${n.label}</div>
                            <div class="bar-track" title="Budget: ${f(n.budgetCents)} | Ist: ${f(n.actualCents)}">
                              <div class="bar bar-budget" style="width:${g}"></div>
                              <div class="bar-marker" style="left:${g}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Z}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${f(n.budgetCents)}</span>
                              <span class="muted">I ${f(n.actualCents)}</span>
                            </div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Gesamtkosten nach Kategorien (Ist)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="bar-chart">
                    ${Vs.map(n=>{const g=re(n.actualCents,Yr);return`
                          <div class="bar-row">
                            <div class="bar-label">${n.label}</div>
                            <div class="bar-track" title="Ist: ${f(n.actualCents)}">
                              <div class="bar bar-expense" style="width:${g}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">I ${f(n.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.actualTotalCents,Gr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
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
                    ${ke.map(n=>{const g=re(Math.abs(n.plannedNetCents),rr),q=re(Math.abs(n.actualNetCents),rr),Z=n.plannedNetCents<0?"bar-negative":"bar-positive",Se=n.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${n.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(n.plannedNetCents)} | Ist-Saldo: ${f(n.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${g}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Ae(n.plannedNetCents)}">B ${f(n.plannedNetCents)}</span>
                              <span class="${Ae(n.actualNetCents)}">I ${f(n.actualNetCents)}</span>
                            </div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Essen & Ausgehen pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.foodAndGoingOutCents,Jr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Fixkosten pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.fixedCents,Xr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.fixedCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Variable Kosten pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.variableCents,Qr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.variableCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Sonstige Kosten pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.miscCents,Zr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.miscCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
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
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${ke.map(n=>`<tr>
                        <td>${n.year}</td>
                        <td>${f(n.salaryIncomeCents)}</td>
                        <td>${f(n.totalIncomeCents)}</td>
                        <td>${f(n.budgetTotalCents)}</td>
                        <td>${f(n.actualTotalCents)}</td>
                        <td class="${Ae(n.plannedNetCents)}">${f(n.plannedNetCents)}</td>
                        <td class="${Ae(n.actualNetCents)}">${f(n.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.totalIncomeCents,Ur);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.totalIncomeCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.salaryIncomeCents,Hr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.salaryIncomeCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.totalIncomeCents,ir),q=re(n.actualTotalCents,ir);return`
                          <div class="spark-bar" title="${n.year}: Einkommen ${f(n.totalIncomeCents)} | Kosten ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${g}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${q}"><span class="spark-bar-fill-value">${f(n.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(n=>{const g=re(n.salaryIncomeCents,or),q=re(n.actualTotalCents,or);return`
                          <div class="spark-bar" title="${n.year}: Gehalt ${f(n.salaryIncomeCents)} | Kosten ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${g}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${q}"><span class="spark-bar-fill-value">${f(n.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>
            `}
      </div>
    `,ti=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,ni=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Qt?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Qt?Et(Qt.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Qt?"Änderung speichern":"Vorlage speichern"}</button>
          ${Qt?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(n=>`<tr>
                    <td>${n.name}</td>
                    <td>${f(n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${n.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${n.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,lr=h.annualVariableFixedTemplates.reduce((n,g)=>n+g.plannedCents,0),ai=Math.round(lr/12),si=`
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
                <div class="eval-value budget-under">${f(lr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(ai)}</div>
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
            ${h.annualVariableFixedTemplates.map(n=>{const g=mn(n.dueDateIso),q=g?Te(g.month):"-";return`<tr>
                    <td>${n.name}</td>
                    <td>${n.dueDateIso}</td>
                    <td>${q}</td>
                    <td>${f(n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${n.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Zt=h.evaluationCurrentResult,ri=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${mt(h.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${Zt&&Zt.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${Zt?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${mt(Zt.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${Zt.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${f(Zt.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${f(Zt.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${f(Zt.monthAverageCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                  </div>
                </section>
              </div>

              <h3>Treffer nach Jahr</h3>
              <table>
                <thead>
                  <tr><th>Jahr</th><th>Treffer</th><th>Summe (€)</th><th>Treffer-Monate</th><th>Monatsschnitt (€)</th></tr>
                </thead>
                <tbody>
                  ${Zt.yearRows.length>0?Zt.yearRows.map(n=>`<tr>
                              <td>${n.year}</td>
                              <td>${n.hitCount}</td>
                              <td>${f(n.totalCents)}</td>
                              <td>${n.monthsWithHits}</td>
                              <td>${f(n.monthAverageCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>

              <h3>Treffer nach Monat</h3>
              <table>
                <thead>
                  <tr><th>Jahr</th><th>Monat</th><th>Treffer</th><th>Summe (€)</th></tr>
                </thead>
                <tbody>
                  ${Zt.monthRows.length>0?Zt.monthRows.map(n=>`<tr>
                              <td>${n.year}</td>
                              <td>${Te(n.month)}</td>
                              <td>${n.hitCount}</td>
                              <td>${f(n.totalCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="4" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>
            `:'<p class="muted">Noch keine Auswertung ausgeführt.</p>'}

        <h3>Gespeicherte Auswertungen</h3>
        ${h.savedSearchEvaluations.length===0?'<p class="muted">Noch keine gespeicherten Auswertungen vorhanden.</p>':h.savedSearchEvaluations.map(n=>`
                  <article class="card">
                    <div class="inline">
                      <strong>${mt(n.keyword)}</strong>
                      <span class="muted">${new Date(n.createdAt).toLocaleString("de-DE")}</span>
                      <button class="btn btn-quiet" data-remove-saved-evaluation="${n.id}" type="button">Löschen</button>
                    </div>
                    <div class="inline">
                      <span>Treffer: <strong>${n.totalHitCount}</strong></span>
                      <span>Summe: <strong>${f(n.totalCents)}</strong></span>
                      <span>Laufendes Jahr: <strong>${f(n.currentYearCents)}</strong></span>
                      <span>Monatsschnitt: <strong>${f(n.monthAverageCents)}</strong></span>
                    </div>
                    <table>
                      <thead>
                        <tr><th>Jahr</th><th>Treffer</th><th>Summe (€)</th><th>Treffer-Monate</th><th>Monatsschnitt (€)</th></tr>
                      </thead>
                      <tbody>
                        ${n.yearRows.length>0?n.yearRows.map(g=>`<tr>
                                <td>${g.year}</td>
                                <td>${g.hitCount}</td>
                                <td>${f(g.totalCents)}</td>
                                <td>${g.monthsWithHits}</td>
                                <td>${f(g.monthAverageCents)}</td>
                              </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                      </tbody>
                    </table>
                  </article>
                `).join("")}
      </div>
    `,cr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",ii=h.topModal==="years"?ti:h.topModal==="fixed"?ni:h.topModal==="variable-fixed"?si:h.topModal==="dashboard"?ei:h.topModal==="evaluation"?ri:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${wn?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Fr.map(n=>`<option value="${n}" ${h.theme===n?"selected":""}>${Ei(n)}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>

        <div class="top-shortcuts" role="navigation" aria-label="Schnellzugriff">
          <button class="btn" id="open-years-modal" type="button">Jahr hinzufügen</button>
          <button class="btn" id="open-evaluation-modal" type="button">Auswertung</button>
          <button class="btn" id="open-fixed-modal" type="button">Fixe Kosten (zentral)</button>
          <button class="btn" id="open-variable-fixed-modal" type="button">Variable Fixkosten</button>
          <button class="btn" id="open-dashboard-modal" type="button">Dashboard</button>
          <a class="btn" href="#section-food-costs">Essen</a>
          <a class="btn" href="#section-fixed-costs">Fixe</a>
          <a class="btn" href="#section-variable-costs">Variable</a>
          <a class="btn" href="#section-misc-costs">Sonstige</a>
        </div>

        ${h.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${cr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${cr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${ii}
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
                  ${Za.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${Za.map(n=>{const g=new Date(n.timestampIso);return`<li><strong>${g.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${g.toLocaleString("de-DE")}</strong><span>${mt(n.message)}</span></li>`}).join("")}</ol>`}
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
                  ${e.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${e.map(n=>{const g=new Date(n.timestampIso);return`<li><strong>${g.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${g.toLocaleString("de-DE")}</strong><span>${mt(n.message)}</span></li>`}).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${l?`${Te(h.selectedMonth)} ${l.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${h.years.map(n=>`<option value="${n.year}" ${n.year===h.selectedYear?"selected":""}>${n.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${h.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(n,g)=>g+1).map(n=>`<option value="${n}" ${n===h.selectedMonth?"selected":""}>${Te(n)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${f(le)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${f(ze)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(Ke)}</strong>
              </div>
              <div class="compact-income-row ${Ye}">
                <span>Übernahme aus Vormonat</span>
                <strong>${$t?f(K):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(gt)}</strong>
              </div>
            </section>

            <section class="compact-month-summary-row" aria-label="Monatssummen">
              <article class="compact-month-summary-box">
                <div class="compact-month-summary-label">Budget</div>
                <div class="compact-month-summary-hint">für diesen Monat</div>
                <div class="compact-month-summary-amount">${f(nt)}</div>
              </article>
              <article class="compact-month-summary-box">
                <div class="compact-month-summary-label">Ausgegeben</div>
                <div class="compact-month-summary-amount compact-month-summary-amount-spent ${Zn}">${On(u.totalCents)}</div>
              </article>
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
                  ${Fn}
                  ${Xa}
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
                  ${Qa}
                  ${ws}
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
                    <div class="compact-cost-budget">${f(jt)}</div>
                    <div class="compact-cost-actual ${Xe}">${On(xe)}</div>
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
                    <div class="compact-cost-budget">${f(V)}</div>
                    <div class="compact-cost-actual ${va}">${On(u.miscCents)}</div>
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
                  ${_t.map(n=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${n.label}"
                            data-budget-cents="${n.budgetCents}"
                            data-actual-cents="${n.actualCents}"
                            role="img"
                            aria-label="${n.label}: Budget ${f(n.budgetCents)} €, Ist ${f(n.actualCents)} €"
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
                  ${Ht.map(n=>{const g=re(Math.abs(n.valueCents),kn),q=n.valueCents>=0?"+":"",Z=n.label==="Netto"?n.valueCents<0?"danger":n.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${n.label}</div>
                          <div class="bar-track" title="${f(n.valueCents)}">
                            <div class="bar ${n.className}" style="width:${g}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Z}">${q}${f(n.valueCents)}</span></div>
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
                      ${$.map(n=>{const g=lt.get(n.month)?.totalBudgetCents??0,q=re(g,_a),Z=re(n.summary.totalCents,_a);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(n.summary.totalCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(n.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                      ${$.map(n=>{const g=lt.get(n.month),q=(g?.foodBudgetCents??0)+(g?.goingOutBudgetCents??0),Z=n.summary.foodCents+n.summary.goingOutCents,Se=re(q,Ha),Qe=re(Z,Ha);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(Z)} € | Budget ${f(q)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Se}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Qe}"><span class="spark-bar-fill-value">${f(Z)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                      ${$.map(n=>{const g=lt.get(n.month)?.fixedBudgetCents??0,q=re(g,Ja),Z=re(n.summary.fixedCents,Ja);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(n.summary.fixedCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(n.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                      ${$.map(n=>{const g=lt.get(n.month)?.variableBudgetCents??0,q=re(g,Cs),Z=re(n.summary.variableCents,Cs);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(n.summary.variableCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(n.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                      ${$.map(n=>{const g=lt.get(n.month)?.miscBudgetCents??0,q=re(g,xs),Z=re(n.summary.miscCents,xs);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(n.summary.miscCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(n.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Te(n.month).slice(0,3)}</div>
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
                    <div class="eval-value">${f(le)}</div>
                    <div class="eval-value">${f(tt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(ze)}</div>
                    <div class="eval-value">${f(Ut)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(Ke)}</div>
                    <div class="eval-value">${f(Dt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ye}">${$t?f(K):"-"}</div>
                    <div class="eval-value muted">-</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(gt)}</div>
                    <div class="eval-value">${f(Nt)}</div>
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
                    <div class="eval-value">${Ot(A,u.foodCents)}</div>
                    <div class="eval-value">${f(z)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Ot(O,u.goingOutCents)}</div>
                    <div class="eval-value">${f(H)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Ot(I,u.fixedCents)}</div>
                    <div class="eval-value">${f(ie)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Ot(G,u.variableCents)}</div>
                    <div class="eval-value">${f(Ce)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Ot(V,u.miscCents)}</div>
                    <div class="eval-value">${f(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Ot(nt,u.totalCents)}</div>
                    <div class="eval-value">${f(Pe)}</div>
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
                    <div class="eval-value ${Ta}">${f(u.foodCents)}</div>
                    <div class="eval-value">${f(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${un}">${f(u.goingOutCents)}</div>
                    <div class="eval-value">${f(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${ks}">${f(u.fixedCents)}</div>
                    <div class="eval-value">${f(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${We}">${f(u.variableCents)}</div>
                    <div class="eval-value">${f(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${va}">${f(u.miscCents)}</div>
                    <div class="eval-value">${f(v.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${f(u.totalCents)}</div>
                    <div class="eval-value">${f(v.totalCents)}</div>
                  </div>
                </div>
              </section>

              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Salden</h4>
                </header>
                <div class="eval-rows">
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budget übrig</div>
                    <div class="eval-value ${Ae(ln)}">${f(ln)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Ae(Ve)}">${f(Ve)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Eigenkapital (Monat)</div>
                    <div class="eval-value ${et}">${f(ye)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${Ae(Rt)}">${f(Rt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Ie}">${Ne}</div>
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
                  <th>Gehalt - Ausgaben (€)</th>
                  <th>Gehalt vs. Ausgaben (%)</th>
                  <th>Einkommen - Ausgaben (€)</th>
                </tr>
              </thead>
              <tbody>
                ${$.map((n,g,q)=>{const Z=l?_e.get(ve(l.year,n.month)):void 0,Se=Z?.plannedBudgetCents??0,Qe=Z?.netCents??0,yt=Qn.get(n.month)??0,en=fa.get(n.month)??0,Sn=Qe<0?"danger":Qe>0?"budget-under":"",pt=q[g-1],ga=pt?.summary.foodCents??null,Ia=pt?.summary.goingOutCents??null,Tt=pt?.summary.fixedCents??null,Dn=pt?.summary.variableCents??null,ea=pt?.summary.miscCents??null,ur=pt?.summary.totalCents??null,dr=pt!==void 0?Qn.get(pt.month)??0:null,hr=pt!==void 0?fa.get(pt.month)??0:null,pr=l&&pt?_e.get(ve(l.year,pt.month))?.plannedBudgetCents??0:null,fr=ga===null?null:n.summary.foodCents-ga,vr=Ia===null?null:n.summary.goingOutCents-Ia,mr=Tt===null?null:n.summary.fixedCents-Tt,gr=Dn===null?null:n.summary.variableCents-Dn,br=ea===null?null:n.summary.miscCents-ea,yr=ur===null?null:n.summary.totalCents-ur,Cr=dr===null?null:yt-dr,xr=hr===null?null:en-hr,kr=pr===null?null:Se-pr,Oa=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",wr=Pt=>Pt===null?"muted":Pt>0?"budget-under":Pt<0?"danger":"muted",oi=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",Ln=Pt=>Pt===null?"(Δ -)":`(Δ ${Pt>0?"+":""}${f(Pt)})`,$r=l&&pt?_e.get(ve(l.year,pt.month))?.netCents??0:null,Fa=$r===null?null:Qe-$r,li=Fa===null?"(Δ -)":`(Δ ${Fa>0?"+":""}${f(Fa)})`,ci=Fa===null?"muted":Fa<0?"danger":Fa>0?"budget-under":"muted",Sr=yt-n.summary.totalCents,Er=en-n.summary.totalCents,ui=n.summary.totalCents>0?`${(yt/n.summary.totalCents*100).toFixed(1)} %`:"-",di=cn(yt,n.summary.totalCents);return`<tr>
                  <td>${Te(n.month)}</td>
                  <td>${f(n.summary.foodCents)} <span class="${Oa(fr)}">${Ln(fr)}</span></td>
                  <td>${f(n.summary.goingOutCents)} <span class="${Oa(vr)}">${Ln(vr)}</span></td>
                  <td>${f(n.summary.fixedCents)} <span class="${Oa(mr)}">${Ln(mr)}</span></td>
                  <td>${f(n.summary.variableCents)} <span class="${Oa(gr)}">${Ln(gr)}</span></td>
                  <td>${f(n.summary.miscCents)} <span class="${Oa(br)}">${Ln(br)}</span></td>
                  <td>${f(n.summary.totalCents)} <span class="${Oa(yr)}">${Ln(yr)}</span></td>
                  <td>${f(yt)} <span class="${wr(Cr)}">${Ln(Cr)}</span></td>
                  <td>${f(en)} <span class="${wr(xr)}">${Ln(xr)}</span></td>
                  <td>${f(Se)} <span class="${oi(kr)}">${Ln(kr)}</span></td>
                  <td class="${Sn}">${f(Qe)} <span class="${ci}">${li}</span></td>
                  <td class="${Ae(Sr)}">${f(Sr)}</td>
                  <td class="${di}">${ui}</td>
                  <td class="${Ae(Er)}">${f(Er)}</td>
                </tr>`}).join("")}
                ${Ls}
                ${ys}
              </tbody>
            </table>
          </article>

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${o?"":"disabled"} />
              </label>
              <label>
                Herkunft
                <select id="income-source" ${o?"":"disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${o?"":"disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${o?"":"disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${o?"":"disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${o?`<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${Ye}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${Et(K)}" />
                    </td>
                    <td>-</td>
                  </tr>${o.incomes.map(n=>`<tr>
                    <td>${n.description}</td>
                    <td>
                      <select data-income-source="${n.id}">
                        <option value="" ${n.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${n.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${n.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${n.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${f(n.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${n.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${f(le)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${f(ze)} €</strong>
                </div>
                <div class="column-overview-row ${Ye}">
                  <span>Übernahme Vormonat</span>
                  <strong>${o?`${f(K)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(gt)} €</strong>
                </div>
                <div class="column-overview-row ${Je}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${f(bt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${fn(A,u.foodCents)}
                ${fn(O,u.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(jt)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(xe)} €</strong>
                  </div>
                  <div class="column-overview-row ${Xe}">
                    <span>Diff</span>
                    <strong>${f(qe)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${Et(A)}" ${o?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${Et(O)}" ${o?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${o?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${o?o.days.map(n=>{const g=n.foodCents>0,q=n.goingOutCents>0,Z=`${n.isoDate===p?"today-row":""} ${g||q?"day-has-entry":""}`.trim(),Se=`amount-input ${g?"day-input-has-value":""}`.trim(),Qe=`amount-input ${q?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(n.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Se}" data-day-food="${n.isoDate}" type="number" min="0" step="0.01" value="${Et(n.foodCents)}" /></td>
                      <td><input class="${Qe}" data-day-going="${n.isoDate}" type="number" min="0" step="0.01" value="${Et(n.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${fn(I,u.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${Et(I)}" ${o?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${o?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${o?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${o?"":"disabled"}>Position anlegen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-fixed-csv" type="button" ${o?"":"disabled"}>Import</button>
                <input id="import-fixed-csv-input" type="file" accept=".csv,text/csv" ${o?"":"disabled"} style="display:none" />
                <button class="btn btn-quiet" id="clear-fixed-costs" type="button" ${o?"":"disabled"}>Alle Positionen löschen</button>
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag (Betrag wird als Budget und Ist übernommen)</p>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${o?o.fixedCosts.map(n=>`<tr>
                    <td>${n.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${n.id}" type="number" min="0" step="0.01" value="${Et(n.plannedCents)}" /></td>
                    <td class="${U(n.actualCents,n.plannedCents)}"><input class="amount-input" data-fixed-actual="${n.id}" type="number" min="0" step="0.01" value="${Et(n.actualCents)}" /></td>
                    <td class="${U(n.actualCents,n.plannedCents)}">${f(n.actualCents-n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${n.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${fn(G,u.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${Et(G)}" ${o?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${o?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${o?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${o?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-variable-position-recurring" ${o?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-variable-csv" type="button" ${o?"":"disabled"}>Import</button>
                <input id="import-variable-csv-input" type="file" accept=".csv,text/csv" ${o?"":"disabled"} style="display:none" />
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag (Betrag wird als Budget und Ist übernommen)</p>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${o?o.variablePositions.map(n=>`<tr>
                    <td>${n.name}${n.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${n.id}" type="number" min="0" step="0.01" value="${Et(n.budgetCents)}" /></td>
                    <td class="${U(n.actualCents,n.budgetCents)}"><input class="amount-input" data-variable-position-actual="${n.id}" type="number" min="0" step="0.01" value="${Et(n.actualCents)}" /></td>
                    <td class="${U(n.actualCents,n.budgetCents)}">${f(n.actualCents-n.budgetCents)}</td>
                    <td>
                      <button class="btn" data-move-variable-position-next="${n.id}">Nächster Monat</button>
                      <button class="btn btn-quiet" data-remove-variable-position="${n.id}">Löschen</button>
                    </td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-misc-costs">
              <h3>4) Sonstige (unter 30€)</h3>
              ${fn(V,u.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${Et(V)}" ${o?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${o?"":"disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${o?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${o?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${o?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-misc-csv" type="button" ${o?"":"disabled"}>Import</button>
                <input id="import-misc-csv-input" type="file" accept=".csv,text/csv" ${o?"":"disabled"} style="display:none" />
                <span>In csv Datei (betrag;wert). Nä. Wert direkt untereinander</span>
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag</p>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${o?o.miscCosts.map(n=>`<tr>
                    <td>${n.description}</td>
                    <td>${f(n.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-misc="${n.id}">Löschen</button></td>
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
          <p class="muted">Letztes verwendetes Backup: ${t}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),ms(),Ct(),Le(),vt()}function ms(){const l=B.querySelector("#theme-select"),o=B.querySelector("#open-years-modal"),p=B.querySelector("#open-evaluation-modal"),u=B.querySelector("#open-fixed-modal"),v=B.querySelector("#open-variable-fixed-modal"),$=B.querySelector("#open-dashboard-modal"),A=B.querySelector("#panel-modal-close"),O=B.querySelector("#panel-modal-backdrop"),I=B.querySelector("#open-unexported-change-log"),G=B.querySelector("#open-persistent-audit-log"),V=B.querySelector("#unexported-change-log-close"),z=B.querySelector("#unexported-change-log-backup"),H=B.querySelector("#unexported-change-log-backdrop"),ie=B.querySelector("#persistent-audit-log-close"),Ce=B.querySelector("#persistent-audit-log-backdrop"),He=B.querySelector("#new-year"),le=B.querySelector("#create-year"),ze=B.querySelector("#evaluation-query"),Ke=B.querySelector("#run-evaluation"),_e=B.querySelector("#save-evaluation"),at=B.querySelector("#year-select"),Ft=B.querySelector("#month-select");l?.addEventListener("change",()=>{const T=l.value;Ar(T)&&Ca(T)}),o?.addEventListener("click",()=>{tn("years")}),p?.addEventListener("click",()=>{tn("evaluation")}),u?.addEventListener("click",()=>{tn("fixed")}),v?.addEventListener("click",()=>{tn("variable-fixed")}),$?.addEventListener("click",()=>{tn("dashboard")}),I?.addEventListener("click",()=>{nn()}),G?.addEventListener("click",()=>{ht()}),V?.addEventListener("click",()=>{xt()}),z?.addEventListener("click",async()=>{try{await An()}catch(T){console.error("Backup-Export fehlgeschlagen",T),ae("Backup konnte nicht exportiert werden.","error")}}),H?.addEventListener("click",T=>{T.target===H&&xt()}),ie?.addEventListener("click",()=>{kt()}),Ce?.addEventListener("click",T=>{T.target===Ce&&kt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.dashboardTab;N!=="year"&&N!=="food"&&N!=="all"||(h.dashboardTab=N,ne())})});const K=B.querySelector("#dashboard-year-select");K?.addEventListener("change",()=>{const T=Number.parseInt(K.value,10);Number.isInteger(T)&&(h.dashboardYear=T,ne())}),A?.addEventListener("click",()=>{Kn()}),O?.addEventListener("click",T=>{T.target===O&&Kn()}),h.topModal&&window.setTimeout(()=>{A?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{V?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{ie?.focus()},0),le?.addEventListener("click",async()=>{const T=Number.parseInt(He?.value??"",10);if(!Number.isInteger(T)){alert("Bitte gültiges Jahr eingeben.");return}await W(T)}),Ke?.addEventListener("click",()=>{Ba(ze?.value??"")}),ze?.addEventListener("keydown",T=>{T.key==="Enter"&&(T.preventDefault(),Ba(ze.value))}),_e?.addEventListener("click",async()=>{await Ma()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeSavedEvaluation;N&&await vs(N)})}),at?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(at.value,10),h.selectedMonth=an(),ne()}),Ft?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Ft.value,10),ne()});const $t=B.querySelector("#fixed-template-name"),gt=B.querySelector("#fixed-template-amount"),on=B.querySelector("#add-fixed-template"),bt=B.querySelector("#cancel-fixed-template-edit"),ye=B.querySelector("#annual-variable-fixed-name"),Rt=B.querySelector("#annual-variable-fixed-date"),Ne=B.querySelector("#annual-variable-fixed-amount"),Ye=B.querySelector("#add-annual-variable-fixed-template");on?.addEventListener("click",async()=>{const T=$t?.value??"",N=Fe(gt?.value??"0");await gn(T,N),$t&&($t.value=""),gt&&(gt.value="")}),bt?.addEventListener("click",()=>{bn()}),Ye?.addEventListener("click",async()=>{const T=ye?.value??"",N=Rt?.value??"",Kt=Fe(Ne?.value??"0");await Ds(T,N,Kt),ye&&(ye.value=""),Rt&&(Rt.value=""),Ne&&(Ne.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeAnnualVariableFixedTemplate;N&&await yn(N)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.editFixedTemplate;N&&Gn(N)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixedTemplate;N&&await $a(N)})}),B.querySelectorAll("[data-day-food]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayFood;N&&await Va(N,"foodCents",Fe(T.value))})}),B.querySelectorAll("[data-day-going]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayGoing;N&&await Va(N,"goingOutCents",Fe(T.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedActual;N&&await _n(N,Fe(T.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedPlanned;N&&await ls(N,Fe(T.value))})});const Je=B.querySelector("#fixed-budget");Je?.addEventListener("click",T=>{T.preventDefault(),Je.blur(),it(Je)}),Je?.addEventListener("change",async()=>{await rn(Fe(Je.value))});const et=B.querySelector("#food-budget");et?.addEventListener("click",T=>{T.preventDefault(),et.blur(),it(et)}),et?.addEventListener("change",async()=>{await cs(Fe(et.value))});const tt=B.querySelector("#going-out-budget");tt?.addEventListener("click",T=>{T.preventDefault(),tt.blur(),it(tt)}),tt?.addEventListener("change",async()=>{await Un(Fe(tt.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{_s()});const Dt=B.querySelector("#misc-budget");Dt?.addEventListener("click",T=>{T.preventDefault(),Dt.blur(),it(Dt)}),Dt?.addEventListener("change",async()=>{await Sa(Fe(Dt.value))});const Lt=B.querySelector("#variable-budget");Lt?.addEventListener("click",T=>{T.preventDefault(),Lt.blur(),it(Lt)}),Lt?.addEventListener("change",async()=>{await ja(Fe(Lt.value))});const Nt=B.querySelector("#variable-position-name"),nt=B.querySelector("#variable-position-budget"),jt=B.querySelector("#add-variable-position"),xe=B.querySelector("#add-variable-position-recurring"),qe=B.querySelector("#import-variable-csv"),Xe=B.querySelector("#import-variable-csv-input"),Pe=B.querySelector("#misc-description"),Ve=B.querySelector("#misc-amount"),ln=B.querySelector("#add-misc"),Ae=B.querySelector("#add-misc-recurring"),cn=B.querySelector("#import-misc-csv"),Ie=B.querySelector("#import-misc-csv-input"),re=B.querySelector("#income-description"),ot=B.querySelector("#income-source"),_t=B.querySelector("#income-amount"),xn=B.querySelector("#add-income"),Ht=B.querySelector("#add-income-recurring"),kn=B.querySelector("#fixed-cost-name"),Yt=B.querySelector("#fixed-cost-budget"),lt=B.querySelector("#add-fixed-cost"),st=B.querySelector("#import-fixed-csv"),ct=B.querySelector("#import-fixed-csv-input"),Jn=B.querySelector("#clear-fixed-costs"),zt=B.querySelector("#carryover-override");zt?.addEventListener("click",T=>{T.preventDefault(),zt.blur(),it(zt)}),zt?.addEventListener("change",async()=>{const T=zt.value;if(!T.trim()){await Cn(null);return}await Cn(Fe(T))}),lt?.addEventListener("click",async()=>{const T=Fe(Yt?.value??"0");await Ra(kn?.value??"",T),kn&&(kn.value=""),Yt&&(Yt.value="")}),st?.addEventListener("click",()=>{ct?.click()}),ct?.addEventListener("change",async()=>{const T=ct.files?.[0];if(T){try{await hs(T)}catch(N){console.error("Fixkosten-CSV-Import fehlgeschlagen",N),ae("CSV konnte nicht importiert werden.","error")}ct.value=""}}),Jn?.addEventListener("click",async()=>{await Tn()}),jt?.addEventListener("click",async()=>{const T=Fe(nt?.value??"0");await Ya(Nt?.value??"",T,!1),Nt&&(Nt.value=""),nt&&(nt.value="")}),xe?.addEventListener("click",async()=>{const T=Fe(nt?.value??"0");await Ya(Nt?.value??"",T,!0),Nt&&(Nt.value=""),nt&&(nt.value="")}),qe?.addEventListener("click",()=>{Xe?.click()}),Xe?.addEventListener("change",async()=>{const T=Xe.files?.[0];if(T){try{await ps(T)}catch(N){console.error("Variable-CSV-Import fehlgeschlagen",N),ae("CSV konnte nicht importiert werden.","error")}Xe.value=""}}),ln?.addEventListener("click",async()=>{const T=Fe(Ve?.value??"0");await za(Pe?.value??"",T,!1),Pe&&(Pe.value=""),Ve&&(Ve.value="")}),Ae?.addEventListener("click",async()=>{const T=Fe(Ve?.value??"0");await za(Pe?.value??"",T,!0),Pe&&(Pe.value=""),Ve&&(Ve.value="")}),cn?.addEventListener("click",()=>{Ie?.click()}),Ie?.addEventListener("change",async()=>{const T=Ie.files?.[0];if(T){try{await da(T)}catch(N){console.error("Sonstiges-CSV-Import fehlgeschlagen",N),ae("CSV konnte nicht importiert werden.","error")}Ie.value=""}}),xn?.addEventListener("click",async()=>{const T=Fe(_t?.value??"0"),N=ot?.value,Kt=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await Me(re?.value??"",T,Kt,!1),re&&(re.value=""),_t&&(_t.value=""),ot&&(ot.value="salary")}),Ht?.addEventListener("click",async()=>{const T=Fe(_t?.value??"0"),N=ot?.value,Kt=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await Me(re?.value??"",T,Kt,!0),re&&(re.value=""),_t&&(_t.value=""),ot&&(ot.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(T=>{T.addEventListener("change",async()=>{const N=T.dataset.incomeSource;if(!N)return;const Kt=T.value;await ha(N,Kt==="balance"||Kt==="fresh"||Kt==="salary"?Kt:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionBudget;N&&await us(N,Fe(T.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionActual;N&&await Ea(N,Fe(T.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeVariablePosition;N&&await fe(N)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.moveVariablePositionNext;N&&await ds(N)})}),B.querySelectorAll("[data-remove-fixed]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixed;N&&await Ue(N)})}),B.querySelectorAll("[data-remove-income]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeIncome;N&&await pa(N)})}),B.querySelectorAll("[data-remove-misc]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeMisc;N&&await fs(N)})});const Xn=B.querySelector("#backup-export"),In=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Xn?.addEventListener("click",async()=>{await An()}),In?.addEventListener("change",async()=>{const T=In.files?.[0];if(T){try{await Wa(T)}catch(N){console.error("Backup-Import fehlgeschlagen",N),ae("Backup konnte nicht importiert werden.","error")}In.value=""}})}return{init:Is}}const Mi="modulepreload",_i=function(B){return"/habu26/"+B},Or={},Ti=function(h,we,Q){let de=Promise.resolve();if(we&&we.length>0){let Ze=function(Re){return Promise.all(Re.map(ce=>Promise.resolve(ce).then(dt=>({status:"fulfilled",value:dt}),dt=>({status:"rejected",reason:dt}))))};var be=Ze;document.getElementsByTagName("link");const oe=document.querySelector("meta[property=csp-nonce]"),pe=oe?.nonce||oe?.getAttribute("nonce");de=Ze(we.map(Re=>{if(Re=_i(Re),Re in Or)return;Or[Re]=!0;const ce=Re.endsWith(".css"),dt=ce?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Re}"]${dt}`))return;const rt=document.createElement("link");if(rt.rel=ce?"stylesheet":Mi,ce||(rt.as="script"),rt.crossOrigin="",rt.href=Re,pe&&rt.setAttribute("nonce",pe),document.head.appendChild(rt),ce)return new Promise((Le,Ct)=>{rt.addEventListener("load",Le),rt.addEventListener("error",()=>Ct(new Error(`Unable to preload CSS for ${Re}`)))})}))}function se(oe){const pe=new Event("vite:preloadError",{cancelable:!0});if(pe.payload=oe,window.dispatchEvent(pe),!pe.defaultPrevented)throw oe}return de.then(oe=>{for(const pe of oe||[])pe.status==="rejected"&&se(pe.reason);return h().catch(se)})};function Pi(B={}){const{immediate:h=!1,onNeedRefresh:we,onOfflineReady:Q,onRegistered:de,onRegisteredSW:se,onRegisterError:be}=B;let oe,pe;const Ze=async(ce=!0)=>{await pe};async function Re(){if("serviceWorker"in navigator){if(oe=await Ti(async()=>{const{Workbox:ce}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ce}},[]).then(({Workbox:ce})=>new ce("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ce=>{be?.(ce)}),!oe)return;oe.addEventListener("activated",ce=>{(ce.isUpdate||ce.isExternal)&&window.location.reload()}),oe.addEventListener("installed",ce=>{ce.isUpdate||Q?.()}),oe.register({immediate:h}).then(ce=>{se?se("/habu26/sw.js",ce):de?.(ce)}).catch(ce=>{be?.(ce)})}}return pe=Re(),Ze}function Ai(){Pi({immediate:!0})}const Dr=document.getElementById("app");if(!Dr)throw new Error("App-Container nicht gefunden.");Bi(Dr).init();Ai();
