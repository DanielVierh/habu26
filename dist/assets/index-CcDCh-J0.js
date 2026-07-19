(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const de of document.querySelectorAll('link[rel="modulepreload"]'))Q(de);new MutationObserver(de=>{for(const se of de)if(se.type==="childList")for(const be of se.addedNodes)be.tagName==="LINK"&&be.rel==="modulepreload"&&Q(be)}).observe(document,{childList:!0,subtree:!0});function we(de){const se={};return de.integrity&&(se.integrity=de.integrity),de.referrerPolicy&&(se.referrerPolicy=de.referrerPolicy),de.crossOrigin==="use-credentials"?se.credentials="include":de.crossOrigin==="anonymous"?se.credentials="omit":se.credentials="same-origin",se}function Q(de){if(de.ep)return;de.ep=!0;const se=we(de);fetch(de.href,se)}})();const pi=[1,2,3,4,5,6,7,8,9,10,11,12];function Qa(){return new Date().toISOString()}function ut(B){const h=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${h}`}function fi(B,h){const we=new Date(B,h,0).getDate(),Q=[];for(let de=1;de<=we;de+=1){const se=new Date(Date.UTC(B,h-1,de));Q.push({isoDate:se.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Q}function vi(B){return B.map(h=>({id:ut("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Mr(B,h,we){const Q=h.reduce((se,be)=>se+be.plannedCents,0),de=pi.map(se=>({month:se,days:fi(B,se),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:vi(h),fixedBudgetCents:Q,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:Qa(),templateVersion:we,months:de}}function Rs(B,h){return{id:ut("expense"),description:B,amountCents:h,createdAt:Qa()}}function _r(B,h,we){const Q={id:ut("income"),description:B,amountCents:h,createdAt:Qa()};return we?{...Q,incomeSource:we}:Q}function ws(B,h){return B.toLocaleLowerCase("de-DE").includes(h)}function Tr(B,h,we,Q){const de=h.trim(),se=de.toLocaleLowerCase("de-DE");if(!se)return{id:ut("search_eval"),keyword:"",keywordNormalized:"",createdAt:Qa(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let be=0,oe=0,he=0,Ze=0,je=0;const ue=Math.max(1,Math.min(12,Q)),dt=[],rt=[];return B.slice().sort((Le,xt)=>Le.year-xt.year).forEach(Le=>{let xt=0,en=0,qn=0,tn=0;Le.months.slice().sort((kt,ht)=>kt.month-ht.month).forEach(kt=>{let ht=0,wt=0;if(kt.fixedCosts.forEach(vt=>{ws(vt.name,se)&&(ht+=1,wt+=vt.actualCents)}),kt.variableCosts.forEach(vt=>{ws(vt.description,se)&&(ht+=1,wt+=vt.amountCents)}),kt.variablePositions.forEach(vt=>{ws(vt.name,se)&&(ht+=1,wt+=vt.actualCents)}),kt.miscCosts.forEach(vt=>{ws(vt.description,se)&&(ht+=1,wt+=vt.amountCents)}),ht<=0)return;xt+=ht,en+=wt,(Le.year<we||Le.year===we&&kt.month<=ue)&&(tn+=1,qn+=wt),be+=ht,oe+=wt,(Le.year<we||Le.year===we&&kt.month<=ue)&&(Ze+=1,je+=wt),rt.push({year:Le.year,month:kt.month,hitCount:ht,totalCents:wt})}),!(xt<=0)&&(Le.year===we&&(he+=en),dt.push({year:Le.year,hitCount:xt,totalCents:en,monthsWithHits:tn,monthAverageCents:tn>0?Math.round(qn/tn):0}))}),{id:ut("search_eval"),keyword:de,keywordNormalized:se,createdAt:Qa(),totalHitCount:be,totalCents:oe,currentYearCents:he,monthsWithHits:Ze,monthAverageCents:Ze>0?Math.round(je/Ze):0,yearRows:dt,monthRows:rt}}var mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gi(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var $s={exports:{}},bi=$s.exports,Pr;function yi(){return Pr||(Pr=1,(function(B,h){((we,Q)=>{B.exports=Q()})(bi,function(){var we=function(e,t){return(we=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(a,s){a.__proto__=s}:function(a,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r])}))(e,t)},Q=function(){return(Q=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function de(e,t,a){for(var s,r=0,l=t.length;r<l;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:mi,be=Object.keys,oe=Array.isArray;function he(e,t){return typeof t=="object"&&be(t).forEach(function(a){e[a]=t[a]}),e}typeof Promise>"u"||se.Promise||(se.Promise=Promise);var Ze=Object.getPrototypeOf,je={}.hasOwnProperty;function ue(e,t){return je.call(e,t)}function dt(e,t){typeof t=="function"&&(t=t(Ze(e))),(typeof Reflect>"u"?be:Reflect.ownKeys)(t).forEach(function(a){Le(e,a,t[a])})}var rt=Object.defineProperty;function Le(e,t,a,s){rt(e,t,he(a&&ue(a,"get")&&typeof a.get=="function"?{get:a.get,set:a.set,configurable:!0}:{value:a,configurable:!0,writable:!0},s))}function xt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Le(e.prototype,"constructor",e),{extend:dt.bind(null,e.prototype)}}}}var en=Object.getOwnPropertyDescriptor,qn=[].slice;function tn(e,t,a){return qn.call(e,t,a)}function kt(e,t){return t(e)}function ht(e){if(!e)throw new Error("Assertion Failed")}function wt(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Gt(e,t){if(typeof t=="string"&&ue(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var a=[],s=0,r=t.length;s<r;++s){var l=Gt(e,t[s]);a.push(l)}return a}var c,d=t.indexOf(".");return d===-1||(c=e[t.substr(0,d)])==null?void 0:Gt(c,t.substr(d+1))}function ft(e,t,a){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){ht(typeof a!="string"&&"length"in a);for(var s=0,r=t.length;s<r;++s)ft(e,t[s],a[s])}else{var l,c,d=t.indexOf(".");d!==-1?(l=t.substr(0,d),(d=t.substr(d+1))===""?a===void 0?oe(e)&&!isNaN(parseInt(l))?e.splice(l,1):delete e[l]:e[l]=a:ft(c=(c=e[l])&&ue(e,l)?c:e[l]={},d,a)):a===void 0?oe(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=a}}function vt(e){var t,a={};for(t in e)ue(e,t)&&(a[t]=e[t]);return a}var Bs=[].concat;function La(e){return Bs.apply([],e)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(La([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),Za=new Set(At.map(function(e){return se[e]})),aa=null;function $t(e){return aa=new WeakMap,e=(function t(a){if(!a||typeof a!="object")return a;var s=aa.get(a);if(s)return s;if(oe(a)){s=[],aa.set(a,s);for(var r=0,l=a.length;r<l;++r)s.push(t(a[r]))}else if(Za.has(a.constructor))s=a;else{var c,d=Ze(a);for(c in s=d===Object.prototype?{}:Object.create(d),aa.set(a,s),a)ue(a,c)&&(s[c]=t(a[c]))}return s})(e),aa=null,e}var sa={}.toString;function Na(e){return sa.call(e).slice(8,-1)}var Ka=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ms=typeof Ka=="symbol"?function(e){var t;return e!=null&&(t=e[Ka])&&t.apply(e)}:function(){return null};function dn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var it={};function ne(e){var t,a,s,r;if(arguments.length===1){if(oe(e))return e.slice();if(this===it&&typeof e=="string")return[e];if(r=Ms(e))for(a=[];!(s=r.next()).done;)a.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(a=new Array(t);t--;)a[t]=e[t]}}else for(t=arguments.length,a=new Array(t);t--;)a[t]=arguments[t];return a}var nn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},At=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Bt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(At),es={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function En(e,t){this.name=e,this.message=t}function ts(e,t){return e+". Errors: "+Object.keys(t).map(function(a){return t[a].toString()}).filter(function(a,s,r){return r.indexOf(a)===s}).join(`
`)}function mt(e,t,a,s){this.failures=t,this.failedKeys=s,this.successCount=a,this.message=ts(e,t)}function Vn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(a){return t[a]}),this.failuresByPos=t,this.message=ts(e,this.failures)}xt(En).from(Error).extend({toString:function(){return this.name+": "+this.message}}),xt(mt).from(En),xt(Vn).from(En);var xa=Bt.reduce(function(e,t){return e[t]=t+"Error",e},{}),_s=En,ee=Bt.reduce(function(e,t){var a=t+"Error";function s(r,l){this.name=a,r?typeof r=="string"?(this.message="".concat(r).concat(l?`
 `+l:""),this.inner=l||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=es[t]||a,this.inner=null)}return xt(s).from(_s),e[t]=s,e},{}),ns=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,At.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));At=Bt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function $e(){}function ra(e){return e}function Ts(e,t){return e==null||e===ra?t:function(a){return t(e(a))}}function Bn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function as(e,t){return e===$e?t:function(){var a=e.apply(this,arguments),s=(a!==void 0&&(arguments[0]=a),this.onsuccess),r=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Bn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?Bn(r,this.onerror):r),l!==void 0?l:a}}function Ps(e,t){return e===$e?t:function(){e.apply(this,arguments);var a=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),a&&(this.onsuccess=this.onsuccess?Bn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?Bn(s,this.onerror):s)}}function ss(e,t){return e===$e?t:function(r){var s=e.apply(this,arguments),r=(he(r,s),this.onsuccess),l=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Bn(r,this.onsuccess):r),l&&(this.onerror=this.onerror?Bn(l,this.onerror):l),s===void 0?c===void 0?void 0:c:he(s,c)}}function As(e,t){return e===$e?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function ia(e,t){return e===$e?t:function(){var a=e.apply(this,arguments);if(a&&typeof a.then=="function"){for(var s=this,r=arguments.length,l=new Array(r);r--;)l[r]=arguments[r];return a.then(function(){return t.apply(s,l)})}return t.apply(this,arguments)}}At.ModifyError=mt,At.DexieError=En,At.BulkError=Vn;var It=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Rn(e){It=e}var jn={},Yn=100,Ee=typeof Promise>"u"?[]:(Bt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ee=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Ze(Ee),Bt]:[Bt,Ze(Bt),Bt]),Bt=Ee[0],On=Ee[1],On=On&&On.then,Vt=Bt&&Bt.constructor,zn=!!Ee[2],hn=function(e,t){Gn.push([e,t]),Wn&&(queueMicrotask(Un),Wn=!1)},qa=!0,Wn=!0,an=[],oa=[],la=ra,pn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},H=pn,Gn=[],Ot=0,fn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==jn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ka(this,this._value)}else this._state=null,this._value=null,++t.ref,(function a(s,r){try{r(function(l){if(s._state===null){if(l===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&mn();l&&typeof l.then=="function"?a(s,function(d,g){l instanceof z?l._then(d,g):l.then(d,g)}):(s._state=!0,s._value=l,Ye(s)),c&&Mn()}},ka.bind(null,s))}catch(l){ka(s,l)}})(this,e)}var vn={get:function(){var e=H,t=$a;function a(s,r){var l=this,c=!e.global&&(e!==H||t!==$a),d=c&&!bn(),g=new z(function(E,C){Mt(l,new rs(is(s,e,c,d),is(r,e,c,d),E,C,e))});return this._consoleTask&&(g._consoleTask=this._consoleTask),g}return a.prototype=jn,a},set:function(e){Le(this,"then",e&&e.prototype===jn?vn:{get:function(){return e},set:vn.set})}};function rs(e,t,a,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=a,this.reject=s,this.psd=r}function ka(e,t){var a,s;oa.push(t),e._state===null&&(a=e._lib&&mn(),t=la(t),e._state=!1,e._value=t,s=e,an.some(function(r){return r._value===s._value})||an.push(s),Ye(e),a)&&Mn()}function Ye(e){var t=e._listeners;e._listeners=[];for(var a=0,s=t.length;a<s;++a)Mt(e,t[a]);var r=e._PSD;--r.ref||r.finalize(),Ot===0&&(++Ot,hn(function(){--Ot==0&&ca()},[]))}function Mt(e,t){if(e._state===null)e._listeners.push(t);else{var a=e._state?t.onFulfilled:t.onRejected;if(a===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ot,hn(me,[a,e,t])}}function me(e,t,a){try{var s,r=t._value;!t._state&&oa.length&&(oa=[]),s=It&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||oa.indexOf(r)!==-1||(l=>{for(var c=an.length;c;)if(an[--c]._value===l._value)return an.splice(c,1)})(t),a.resolve(s)}catch(l){a.reject(l)}finally{--Ot==0&&ca(),--a.psd.ref||a.psd.finalize()}}function Un(){_n(pn,function(){mn()&&Mn()})}function mn(){var e=qa;return Wn=qa=!1,e}function Mn(){var e,t,a;do for(;0<Gn.length;)for(e=Gn,Gn=[],a=e.length,t=0;t<a;++t){var s=e[t];s[0].apply(null,s[1])}while(0<Gn.length);Wn=qa=!0}function ca(){for(var e=an,t=(an=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),fn.slice(0)),a=t.length;a;)t[--a]()}function ua(e){return new z(jn,!1,e)}function ge(e,t){var a=H;return function(){var s=mn(),r=H;try{return yn(a,!0),e.apply(this,arguments)}catch(l){t&&t(l)}finally{yn(r,!1),s&&Mn()}}}dt(z.prototype,{then:vn,_then:function(e,t){Mt(this,new rs(null,null,e,t,H))},catch:function(e){var t,a;return arguments.length===1?this.then(null,e):(t=e,a=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?a:ua)(s)}):this.then(null,function(s){return(s&&s.name===t?a:ua)(s)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return ua(t)})})},timeout:function(e,t){var a=this;return e<1/0?new z(function(s,r){var l=setTimeout(function(){return r(new ee.Timeout(t))},e);a.then(s,r).finally(clearTimeout.bind(null,l))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Le(z.prototype,Symbol.toStringTag,"Dexie.Promise"),pn.env=Va(),dt(z,{all:function(){var e=ne.apply(null,arguments).map(Sa);return new z(function(t,a){e.length===0&&t([]);var s=e.length;e.forEach(function(r,l){return z.resolve(r).then(function(c){e[l]=c,--s||t(e)},a)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,a){e.then(t,a)}):new z(jn,!0,e)},reject:ua,race:function(){var e=ne.apply(null,arguments).map(Sa);return new z(function(t,a){e.map(function(s){return z.resolve(s).then(t,a)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return $a}},newPSD:gn,usePSD:_n,scheduler:{get:function(){return hn},set:function(e){hn=e}},rejectionMapper:{get:function(){return la},set:function(e){la=e}},follow:function(e,t){return new z(function(a,s){return gn(function(r,l){var c=H;c.unhandleds=[],c.onunhandled=l,c.finalize=Bn(function(){var d,g=this;d=function(){g.unhandleds.length===0?r():l(g.unhandleds[0])},fn.push(function E(){d(),fn.splice(fn.indexOf(E),1)}),++Ot,hn(function(){--Ot==0&&ca()},[])},c.finalize),e()},t,a,s)})}}),Vt&&(Vt.allSettled&&Le(z,"allSettled",function(){var e=ne.apply(null,arguments).map(Sa);return new z(function(t){e.length===0&&t([]);var a=e.length,s=new Array(a);e.forEach(function(r,l){return z.resolve(r).then(function(c){return s[l]={status:"fulfilled",value:c}},function(c){return s[l]={status:"rejected",reason:c}}).then(function(){return--a||t(s)})})})}),Vt.any&&typeof AggregateError<"u"&&Le(z,"any",function(){var e=ne.apply(null,arguments).map(Sa);return new z(function(t,a){e.length===0&&a(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(l,c){return z.resolve(l).then(function(d){return t(d)},function(d){r[c]=d,--s||a(new AggregateError(r))})})})}),Vt.withResolvers)&&(z.withResolvers=Vt.withResolvers);var Be={awaits:0,echoes:0,id:0},Is=0,da=[],wa=0,$a=0,Os=0;function gn(e,c,a,s){var r=H,l=Object.create(r),c=(l.parent=r,l.ref=0,l.global=!1,l.id=++Os,pn.env,l.env=zn?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},c&&he(l,c),++r.ref,l.finalize=function(){--this.parent.ref||this.parent.finalize()},_n(l,e,a,s));return l.ref===0&&l.finalize(),c}function Hn(){return Be.id||(Be.id=++Is),++Be.awaits,Be.echoes+=Yn,Be.id}function bn(){return!!Be.awaits&&(--Be.awaits==0&&(Be.id=0),Be.echoes=Be.awaits*Yn,!0)}function Sa(e){return Be.echoes&&e&&e.constructor===Vt?(Hn(),e.then(function(t){return bn(),t},function(t){return bn(),Ue(t)})):e}function Fs(){var e=da[da.length-1];da.pop(),yn(e,!1)}function yn(e,t){var a,s,r=H;(t?!Be.echoes||wa++&&e===H:!wa||--wa&&e===H)||queueMicrotask(t?(function(l){++$a,Be.echoes&&--Be.echoes!=0||(Be.echoes=Be.awaits=Be.id=0),da.push(H),yn(l,!0)}).bind(null,e):Fs),e!==H&&(H=e,r===pn&&(pn.env=Va()),zn)&&(a=pn.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(se,"Promise",s.PromiseProp),a.all=s.all,a.race=s.race,a.resolve=s.resolve,a.reject=s.reject,s.allSettled&&(a.allSettled=s.allSettled),s.any)&&(a.any=s.any)}function Va(){var e=se.Promise;return zn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function _n(e,t,a,s,r){var l=H;try{return yn(e,!0),t(a,s,r)}finally{yn(l,!1)}}function is(e,t,a,s){return typeof e!="function"?e:function(){var r=H;a&&Hn(),yn(t,!0);try{return e.apply(this,arguments)}finally{yn(r,!1),s&&queueMicrotask(bn)}}}function Ra(e){Promise===Vt&&Be.echoes===0?wa===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+On).indexOf("[native code]")===-1&&(Hn=bn=$e);var Ue=z.reject,Tn="￿",sn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",os="String expected.",Jn=[],Ea="__dbnames",ja="readonly",Pn="readwrite";function Cn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Ya={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ba(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=$t(t))[e],t}}function ls(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function pe(e,t){try{var a=cs(e),s=cs(t);if(a!==s)return a==="Array"?1:s==="Array"?-1:a==="binary"?1:s==="binary"?-1:a==="string"?1:s==="string"?-1:a==="Date"?1:s!=="Date"?NaN:-1;switch(a){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=za(e),l=za(t),c=r.length,d=l.length,g=c<d?c:d,E=0;E<g;++E)if(r[E]!==l[E])return r[E]<l[E]?-1:1;return c===d?0:c<d?-1:1;case"Array":for(var C=e,b=t,k=C.length,w=b.length,x=k<w?k:w,y=0;y<x;++y){var M=pe(C[y],b[y]);if(M!==0)return M}return k===w?0:k<w?-1:1}}catch{}return NaN}function cs(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Na(e))==="ArrayBuffer")?"binary":t}function za(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Xn(e,t,a){var s=e.schema.yProps;return s?(t&&0<a.numFailures&&(t=t.filter(function(r,l){return!a.failures[l]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return a})):a}us.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var a=t.add;if(oe(a))return de(de([],oe(e)?e:[],!0),a).sort();if(typeof a=="number")return(Number(e)||0)+a;if(typeof a=="bigint")try{return BigInt(e)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(t.remove!==void 0){var s=t.remove;if(oe(s))return oe(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return a=(a=t.replacePrefix)==null?void 0:a[0],a&&typeof e=="string"&&e.startsWith(a)?t.replacePrefix[1]+e.substring(a.length):e};var ha=us;function us(e){this["@@propmod"]=e}function ds(e,t){for(var a=be(t),s=a.length,r=!1,l=0;l<s;++l){var c=a[l],d=t[c],g=Gt(e,c);d instanceof ha?(ft(e,c,d.execute(g)),r=!0):g!==d&&(ft(e,c,d),r=!0)}return r}Me.prototype._trans=function(e,t,a){var s=this._tx||H.trans,r=this.name,l=It&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(E,C,b){if(b.schema[r])return t(b.idbtrans,b);throw new ee.NotFound("Table "+r+" not part of transaction")}var d=mn();try{var g=s&&s.db._novip===this.db._novip?s===H.trans?s._promise(e,c,a):gn(function(){return s._promise(e,c,a)},{trans:s,transless:H.transless||H}):(function E(C,b,k,w){if(C.idbdb&&(C._state.openComplete||H.letThrough||C._vip)){var x=C._createTransaction(b,k,C._dbSchema);try{x.create(),C._state.PR1398_maxLoop=3}catch(y){return y.name===xa.InvalidState&&C.isOpen()&&0<--C._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),C.close({disableAutoOpen:!1}),C.open().then(function(){return E(C,b,k,w)})):Ue(y)}return x._promise(b,function(y,M){return gn(function(){return H.trans=x,w(y,M,x)})}).then(function(y){if(b==="readwrite")try{x.idbtrans.commit()}catch{}return b==="readonly"?y:x._completion.then(function(){return y})})}if(C._state.openComplete)return Ue(new ee.DatabaseClosed(C._state.dbOpenError));if(!C._state.isBeingOpened){if(!C._state.autoOpen)return Ue(new ee.DatabaseClosed);C.open().catch($e)}return C._state.dbReadyPromise.then(function(){return E(C,b,k,w)})})(this.db,e,[this.name],c);return l&&(g._consoleTask=l,g=g.catch(function(E){return console.trace(E),Ue(E)})),g}finally{d&&Mn()}},Me.prototype.get=function(e,t){var a=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ue(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return a.core.get({trans:s,key:e}).then(function(r){return a.hook.reading.fire(r)})}).then(t)},Me.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(oe(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=be(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(d){if(d.compound&&t.every(function(E){return 0<=d.keyPath.indexOf(E)})){for(var g=0;g<t.length;++g)if(t.indexOf(d.keyPath[g])===-1)return!1;return!0}return!1}).sort(function(d,g){return d.keyPath.length-g.keyPath.length})[0];if(a&&this.db._maxKey!==Tn)return c=a.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(d){return e[d]}));!a&&It&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(d,g){return pe(d,g)===0}var c=t.reduce(function(C,g){var E=C[0],C=C[1],b=s[g],k=e[g];return[E||b,E||!b?Cn(C,b&&b.multi?function(w){return w=Gt(w,g),oe(w)&&w.some(function(x){return r(k,x)})}:function(w){return r(k,Gt(w,g))}):C]},[null,null]),l=c[0],c=c[1];return l?this.where(l.name).equals(e[l.keyPath]).filter(c):a?this.filter(c):this.where(t).equals("")},Me.prototype.filter=function(e){return this.toCollection().and(e)},Me.prototype.count=function(e){return this.toCollection().count(e)},Me.prototype.offset=function(e){return this.toCollection().offset(e)},Me.prototype.limit=function(e){return this.toCollection().limit(e)},Me.prototype.each=function(e){return this.toCollection().each(e)},Me.prototype.toArray=function(e){return this.toCollection().toArray(e)},Me.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Me.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,oe(e)?"[".concat(e.join("+"),"]"):e))},Me.prototype.reverse=function(){return this.toCollection().reverse()},Me.prototype.mapToClass=function(e){for(var t=this.db,a=this.name,s=((this.schema.mappedClass=e).prototype instanceof ls&&(e=(c=>{var d=C,g=c;if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");function E(){this.constructor=d}function C(){return c!==null&&c.apply(this,arguments)||this}return we(d,g),d.prototype=g===null?Object.create(g):(E.prototype=g.prototype,new E),Object.defineProperty(C.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),C.prototype.table=function(){return a},C})(e)),new Set),r=e.prototype;r;r=Ze(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function l(c){if(!c)return c;var d,g=Object.create(e.prototype);for(d in c)if(!s.has(d))try{g[d]=c[d]}catch{}return g}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=l,this.hook("reading",l),e},Me.prototype.defineClass=function(){return this.mapToClass(function(e){he(this,e)})},Me.prototype.add=function(e,t){var a=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,c=e;return l&&r&&(c=Ba(l)(e)),this._trans("readwrite",function(d){return a.core.mutate({trans:d,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(d){return d.numFailures?z.reject(d.failures[0]):d.lastResult}).then(function(d){if(l)try{ft(e,l,d)}catch{}return d})},Me.prototype.upsert=function(e,t){var a=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return a.core.get({trans:r,key:e}).then(function(l){var c=l??{};return ds(c,t),s&&ft(c,s,e),a.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(d){return d.numFailures?z.reject(d.failures[0]):!!l})})})},Me.prototype.update=function(e,t){return typeof e!="object"||oe(e)?this.where(":id").equals(e).modify(t):(e=Gt(e,this.schema.primKey.keyPath))===void 0?Ue(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Me.prototype.put=function(e,t){var a=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,c=e;return l&&r&&(c=Ba(l)(e)),this._trans("readwrite",function(d){return a.core.mutate({trans:d,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(d){return d.numFailures?z.reject(d.failures[0]):d.lastResult}).then(function(d){if(l)try{ft(e,l,d)}catch{}return d})},Me.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:[e]}).then(function(s){return Xn(t,[e],s)}).then(function(s){return s.numFailures?z.reject(s.failures[0]):void 0})})},Me.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Ya}).then(function(a){return Xn(e,null,a)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},Me.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(a){return t.core.getMany({keys:e,trans:a}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Me.prototype.bulkAdd=function(e,t,a){var s=this,r=Array.isArray(t)?t:void 0,l=(a=a||(r?void 0:t))?a.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var g=e.length,E=d&&E?e.map(Ba(d)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:E,wantResults:l}).then(function(C){var b=C.numFailures,k=C.failures;if(b===0)return l?C.results:C.lastResult;throw new Vn("".concat(s.name,".bulkAdd(): ").concat(b," of ").concat(g," operations failed"),k)})})},Me.prototype.bulkPut=function(e,t,a){var s=this,r=Array.isArray(t)?t:void 0,l=(a=a||(r?void 0:t))?a.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var g=e.length,E=d&&E?e.map(Ba(d)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:E,wantResults:l}).then(function(C){var b=C.numFailures,k=C.failures;if(b===0)return l?C.results:C.lastResult;throw new Vn("".concat(s.name,".bulkPut(): ").concat(b," of ").concat(g," operations failed"),k)})})},Me.prototype.bulkUpdate=function(e){var t=this,a=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),l=[];return this._trans("readwrite",function(c){return a.getMany({trans:c,keys:s,cache:"clone"}).then(function(d){var g=[],E=[],C=(e.forEach(function(b,k){var w=b.key,x=b.changes,y=d[k];if(y){for(var M=0,_=Object.keys(x);M<_.length;M++){var S=_[M],I=x[S];if(S===t.schema.primKey.keyPath){if(pe(I,w)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ft(y,S,I)}l.push(k),g.push(w),E.push(y)}}),g.length);return a.mutate({trans:c,type:"put",keys:g,values:E,updates:{keys:s,changeSpecs:r}}).then(function(b){var k=b.numFailures,w=b.failures;if(k===0)return C;for(var x=0,y=Object.keys(w);x<y.length;x++){var M,_=y[x],S=l[Number(_)];S!=null&&(M=w[_],delete w[_],w[S]=M)}throw new Vn("".concat(t.name,".bulkUpdate(): ").concat(k," of ").concat(C," operations failed"),w)})})})},Me.prototype.bulkDelete=function(e){var t=this,a=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Xn(t,e,r)})}).then(function(s){var r=s.numFailures,l=s.failures;if(r===0)return s.lastResult;throw new Vn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(a," operations failed"),l)})};var hs=Me;function Me(){}function pa(e){function t(c,d){if(d){for(var g=arguments.length,E=new Array(g-1);--g;)E[g-1]=arguments[g];return a[c].subscribe.apply(null,E),e}if(typeof c=="string")return a[c]}var a={};t.addEventType=l;for(var s=1,r=arguments.length;s<r;++s)l(arguments[s]);return t;function l(c,d,g){var E,C;if(typeof c!="object")return d=d||As,C={subscribers:[],fire:g=g||$e,subscribe:function(b){C.subscribers.indexOf(b)===-1&&(C.subscribers.push(b),C.fire=d(C.fire,b))},unsubscribe:function(b){C.subscribers=C.subscribers.filter(function(k){return k!==b}),C.fire=C.subscribers.reduce(d,g)}},a[c]=t[c]=C;be(E=c).forEach(function(b){var k=E[b];if(oe(k))l(b,E[b][0],E[b][1]);else{if(k!=="asap")throw new ee.InvalidArgument("Invalid event config");var w=l(b,ra,function(){for(var x=arguments.length,y=new Array(x);x--;)y[x]=arguments[x];w.subscribers.forEach(function(M){wt(function(){M.apply(null,y)})})})}})}}function fa(e,t){return xt(t).from({prototype:e}),t}function An(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Wa(e,t){e.filter=Cn(e.filter,t)}function Ma(e,t,a){var s=e.replayFilter;e.replayFilter=s?function(){return Cn(s(),t())}:t,e.justLimit=a&&!s}function _a(e,t){if(e.isPrimKey)return t.primaryKey;var a=t.getIndexByKeyPath(e.index);if(a)return a;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function ps(e,t,a){var s=_a(e,t.schema);return t.openCursor({trans:a,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function te(e,t,a,s){var r,l,c=e.replayFilter?Cn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},l=function(d,g,E){var C,b;c&&!c(g,E,function(k){return g.stop(k)},function(k){return g.fail(k)})||((b=""+(C=g.primaryKey))=="[object ArrayBuffer]"&&(b=""+new Uint8Array(C)),ue(r,b))||(r[b]=!0,t(d,g,E))},Promise.all([e.or._iterate(l,a),fs(ps(e,s,a),e.algorithm,l,!e.keysOnly&&e.valueMapper)])):fs(ps(e,s,a),Cn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function fs(e,t,a,s){var r=ge(s?function(l,c,d){return a(s(l),c,d)}:a);return e.then(function(l){if(l)return l.start(function(){var c=function(){return l.continue()};t&&!t(l,function(d){return c=d},function(d){l.stop(d),c=$e},function(d){l.fail(d),c=$e})||r(l.value,l,function(d){return c=d}),c()})})}i.prototype._read=function(e,t){var a=this._ctx;return a.error?a.table._trans(null,Ue.bind(null,a.error)):a.table._trans("readonly",e).then(t)},i.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ue.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},i.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Cn(t.algorithm,e)},i.prototype._iterate=function(e,t){return te(this._ctx,e,t,this._ctx.table.core)},i.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return e&&he(a,e),t._ctx=a,t},i.prototype.raw=function(){return this._ctx.valueMapper=null,this},i.prototype.each=function(e){var t=this._ctx;return this._read(function(a){return te(t,e,a,t.table.core)})},i.prototype.count=function(e){var t=this;return this._read(function(a){var s,r=t._ctx,l=r.table.core;return An(r,!0)?l.count({trans:a,query:{index:_a(r,l.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,te(r,function(){return++s,!1},a,l).then(function(){return s}))}).then(e)},i.prototype.sortBy=function(e,t){var a=e.split(".").reverse(),s=a[0],r=a.length-1;function l(g,E){return E?l(g[a[E]],E-1):g[s]}var c=this._ctx.dir==="next"?1:-1;function d(g,E){return pe(l(g,r),l(E,r))*c}return this.toArray(function(g){return g.sort(d)}).then(t)},i.prototype.toArray=function(e){var t=this;return this._read(function(a){var s,r,l,c=t._ctx;return c.dir==="next"&&An(c,!0)&&0<c.limit?(s=c.valueMapper,r=_a(c,c.table.core.schema),c.table.core.query({trans:a,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(d){return d=d.result,s?d.map(s):d})):(l=[],te(c,function(d){return l.push(d)},a,c.table.core).then(function(){return l}))},e)},i.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,An(t)?Ma(t,function(){var a=e;return function(s,r){return a===0||(a===1?--a:r(function(){s.advance(a),a=0}),!1)}}):Ma(t,function(){var a=e;return function(){return--a<0}})),this},i.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Ma(this._ctx,function(){var t=e;return function(a,s,r){return--t<=0&&s(r),0<=t}},!0),this},i.prototype.until=function(e,t){return Wa(this._ctx,function(a,s,r){return!e(a.value)||(s(r),t)}),this},i.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},i.prototype.last=function(e){return this.reverse().first(e)},i.prototype.filter=function(e){var t;return Wa(this._ctx,function(a){return e(a.value)}),(t=this._ctx).isMatch=Cn(t.isMatch,e),this},i.prototype.and=function(e){return this.filter(e)},i.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},i.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},i.prototype.desc=function(){return this.reverse()},i.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,s){e(s.key,s)})},i.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},i.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,s){e(s.primaryKey,s)})},i.prototype.keys=function(e){var t=this._ctx,a=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){a.push(r.key)}).then(function(){return a}).then(e)},i.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&An(t,!0)&&0<t.limit)return this._read(function(s){var r=_a(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var a=[];return this.each(function(s,r){a.push(r.primaryKey)}).then(function(){return a}).then(e)},i.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},i.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},i.prototype.lastKey=function(e){return this.reverse().firstKey(e)},i.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Wa(this._ctx,function(s){var s=s.primaryKey.toString(),r=ue(e,s);return e[s]=!0,!r})),this},i.prototype.modify=function(e){var t=this,a=this._ctx;return this._write(function(s){function r(y,M){var _=M.failures;k+=y-M.numFailures;for(var S=0,I=be(_);S<I.length;S++){var O=I[S];b.push(_[O])}}var l=typeof e=="function"?e:function(y){return ds(y,e)},c=a.table.core,C=c.schema.primaryKey,d=C.outbound,g=C.extractKey,E=200,C=t.db._options.modifyChunkSize,b=(C&&(E=typeof C=="object"?C[c.name]||C["*"]||200:C),[]),k=0,w=[],x=e===p;return t.clone().primaryKeys().then(function(y){function M(S){var I=Math.min(E,y.length-S),O=y.slice(S,S+I);return(x?Promise.resolve([]):c.getMany({trans:s,keys:O,cache:"immutable"})).then(function(j){var R=[],D=[],X=d?[]:null,U=x?O:[];if(!x)for(var L=0;L<I;++L){var G=j[L],fe={value:$t(G),primKey:y[S+L]};l.call(fe,fe.value,fe)!==!1&&(fe.value==null?U.push(y[S+L]):d||pe(g(G),g(fe.value))===0?(D.push(fe.value),d&&X.push(y[S+L])):(U.push(y[S+L]),R.push(fe.value)))}return Promise.resolve(0<R.length&&c.mutate({trans:s,type:"add",values:R}).then(function(ve){for(var ae in ve.failures)U.splice(parseInt(ae),1);r(R.length,ve)})).then(function(){return(0<D.length||_&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:X,values:D,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(ve){return r(D.length,ve)})}).then(function(){return(0<U.length||_&&x)&&c.mutate({trans:s,type:"delete",keys:U,criteria:_,isAdditionalChunk:0<S}).then(function(ve){return Xn(a.table,U,ve)}).then(function(ve){return r(U.length,ve)})}).then(function(){return y.length>S+I&&M(S+E)})})}var _=An(a)&&a.limit===1/0&&(typeof e!="function"||x)&&{index:a.index,range:a.range};return M(0).then(function(){if(0<b.length)throw new mt("Error modifying one or more objects",b,k,w);return y.length})})})},i.prototype.delete=function(){var e=this._ctx,t=e.range;return!An(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(p):this._write(function(a){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:a,query:{index:s,range:r}}).then(function(l){return e.table.core.mutate({trans:a,type:"deleteRange",range:r}).then(function(g){var d=g.failures,g=g.numFailures;if(g)throw new mt("Could not delete some values",Object.keys(d).map(function(E){return d[E]}),l-g);return l-g})})})};var o=i;function i(){}var p=function(e,t){return t.value=null};function u(e,t){return e<t?-1:e===t?0:1}function v(e,t){return t<e?-1:e===t?0:1}function $(e,t,a){return e=e instanceof V?new e.Collection(e):e,e._ctx.error=new(a||TypeError)(t),e}function P(e){return new e.Collection(e,function(){return W("")}).limit(0)}function F(w,t,a,s){var r,l,c,d,g,E,C,b=a.length;if(!a.every(function(y){return typeof y=="string"}))return $(w,os);function k(y){r=y==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},l=y==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=y==="next"?u:v;var M=a.map(function(_){return{lower:l(_),upper:r(_)}}).sort(function(_,S){return c(_.lower,S.lower)});d=M.map(function(_){return _.upper}),g=M.map(function(_){return _.lower}),C=(E=y)==="next"?"":s}k("next");var w=new w.Collection(w,function(){return A(d[0],g[b-1]+s)}),x=(w._ondirectionchange=function(y){k(y)},0);return w._addAlgorithm(function(y,M,_){var S=y.key;if(typeof S=="string"){var I=l(S);if(t(I,g,x))return!0;for(var O=null,j=x;j<b;++j){var R=((D,X,U,L,G,fe)=>{for(var ve=Math.min(D.length,L.length),ae=-1,ce=0;ce<ve;++ce){var Oe=X[ce];if(Oe!==L[ce])return G(D[ce],U[ce])<0?D.substr(0,ce)+U[ce]+U.substr(ce+1):G(D[ce],L[ce])<0?D.substr(0,ce)+L[ce]+U.substr(ce+1):0<=ae?D.substr(0,ae)+X[ae]+U.substr(ae+1):null;G(D[ce],Oe)<0&&(ae=ce)}return ve<L.length&&fe==="next"?D+U.substr(D.length):ve<D.length&&fe==="prev"?D.substr(0,U.length):ae<0?null:D.substr(0,ae)+L[ae]+U.substr(ae+1)})(S,I,d[j],g[j],c,E);R===null&&O===null?x=j+1:(O===null||0<c(O,R))&&(O=R)}M(O!==null?function(){y.continue(O+C)}:_)}return!1}),w}function A(e,t,a,s){return{type:2,lower:e,upper:t,lowerOpen:a,upperOpen:s}}function W(e){return{type:1,lower:e,upper:e}}Object.defineProperty(Y.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Y.prototype.between=function(e,t,a,s){a=a!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(a||s)&&(!a||!s)?P(this):new this.Collection(this,function(){return A(e,t,!a,!s)})}catch{return $(this,sn)}},Y.prototype.equals=function(e){return e==null?$(this,sn):new this.Collection(this,function(){return W(e)})},Y.prototype.above=function(e){return e==null?$(this,sn):new this.Collection(this,function(){return A(e,void 0,!0)})},Y.prototype.aboveOrEqual=function(e){return e==null?$(this,sn):new this.Collection(this,function(){return A(e,void 0,!1)})},Y.prototype.below=function(e){return e==null?$(this,sn):new this.Collection(this,function(){return A(void 0,e,!1,!0)})},Y.prototype.belowOrEqual=function(e){return e==null?$(this,sn):new this.Collection(this,function(){return A(void 0,e)})},Y.prototype.startsWith=function(e){return typeof e!="string"?$(this,os):this.between(e,e+Tn,!0,!0)},Y.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):F(this,function(t,a){return t.indexOf(a[0])===0},[e],Tn)},Y.prototype.equalsIgnoreCase=function(e){return F(this,function(t,a){return t===a[0]},[e],"")},Y.prototype.anyOfIgnoreCase=function(){var e=ne.apply(it,arguments);return e.length===0?P(this):F(this,function(t,a){return a.indexOf(t)!==-1},e,"")},Y.prototype.startsWithAnyOfIgnoreCase=function(){var e=ne.apply(it,arguments);return e.length===0?P(this):F(this,function(t,a){return a.some(function(s){return t.indexOf(s)===0})},e,Tn)},Y.prototype.anyOf=function(){var e,t,a=this,s=ne.apply(it,arguments),r=this._cmp;try{s.sort(r)}catch{return $(this,sn)}return s.length===0?P(this):((e=new this.Collection(this,function(){return A(s[0],s[s.length-1])}))._ondirectionchange=function(l){r=l==="next"?a._ascending:a._descending,s.sort(r)},t=0,e._addAlgorithm(function(l,c,d){for(var g=l.key;0<r(g,s[t]);)if(++t===s.length)return c(d),!1;return r(g,s[t])===0||(c(function(){l.continue(s[t])}),!1)}),e)},Y.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Y.prototype.noneOf=function(){var e=ne.apply(it,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return $(this,sn)}var t=e.reduce(function(a,s){return a?a.concat([[a[a.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},Y.prototype.inAnyRange=function(e,_){var a=this,s=this._cmp,r=this._ascending,l=this._descending,c=this._min,d=this._max;if(e.length===0)return P(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return $(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var g=!_||_.includeLowers!==!1,E=_&&_.includeUppers===!0,C,b=r;function k(S,I){return b(S[0],I[0])}try{(C=e.reduce(function(S,I){for(var O=0,j=S.length;O<j;++O){var R=S[O];if(s(I[0],R[1])<0&&0<s(I[1],R[0])){R[0]=c(R[0],I[0]),R[1]=d(R[1],I[1]);break}}return O===j&&S.push(I),S},[])).sort(k)}catch{return $(this,sn)}var w=0,x=E?function(S){return 0<r(S,C[w][1])}:function(S){return 0<=r(S,C[w][1])},y=g?function(S){return 0<l(S,C[w][0])}:function(S){return 0<=l(S,C[w][0])},M=x,_=new this.Collection(this,function(){return A(C[0][0],C[C.length-1][1],!g,!E)});return _._ondirectionchange=function(S){b=S==="next"?(M=x,r):(M=y,l),C.sort(k)},_._addAlgorithm(function(S,I,O){for(var j,R=S.key;M(R);)if(++w===C.length)return I(O),!1;return!x(j=R)&&!y(j)||(a._cmp(R,C[w][1])===0||a._cmp(R,C[w][0])===0||I(function(){b===r?S.continue(C[w][0]):S.continue(C[w][1])}),!1)}),_},Y.prototype.startsWithAnyOf=function(){var e=ne.apply(it,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?P(this):this.inAnyRange(e.map(function(t){return[t,t+Tn]})):$(this,"startsWithAnyOf() only works with strings")};var V=Y;function Y(){}function J(e){return ge(function(t){return ie(t),e(t.target.error),!1})}function ie(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Ce="storagemutated",He="x-storagemutated-1",le=pa(null,Ce),We=(Ke.prototype._lock=function(){return ht(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},Ke.prototype._unlock=function(){if(ht(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{_n(e[1],e[0])}catch{}}return this},Ke.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},Ke.prototype.create=function(e){var t=this;if(this.mode){var a=this.db.idbdb,s=this.db._state.dbOpenError;if(ht(!this.idbtrans),!e&&!a)switch(s&&s.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(s);case"MissingAPIError":throw new ee.MissingAPI(s.message,s);default:throw new ee.OpenFailed(s)}if(!this.active)throw new ee.TransactionInactive;ht(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||a).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ge(function(r){ie(r),t._reject(e.error)}),e.onabort=ge(function(r){ie(r),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ge(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&le.storagemutated.fire(e.mutatedParts)})}return this},Ke.prototype._promise=function(e,t,a){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ue(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(l,c){r._blockedFuncs.push([function(){r._promise(e,t,a).then(l,c)},H])}):a?gn(function(){var l=new z(function(c,d){r._lock();var g=t(c,d,r);g&&g.then&&g.then(c,d)});return l.finally(function(){return r._unlock()}),l._lib=!0,l}):((s=new z(function(l,c){var d=t(l,c,r);d&&d.then&&d.then(l,c)}))._lib=!0,s):Ue(new ee.TransactionInactive)},Ke.prototype._root=function(){return this.parent?this.parent._root():this},Ke.prototype.waitFor=function(e){var t,a=this._root(),s=z.resolve(e),r=(a._waitingFor?a._waitingFor=a._waitingFor.then(function(){return s}):(a._waitingFor=s,a._waitingQueue=[],t=a.idbtrans.objectStore(a.storeNames[0]),(function l(){for(++a._spinCount;a._waitingQueue.length;)a._waitingQueue.shift()();a._waitingFor&&(t.get(-1/0).onsuccess=l)})()),a._waitingFor);return new z(function(l,c){s.then(function(d){return a._waitingQueue.push(ge(l.bind(null,d)))},function(d){return a._waitingQueue.push(ge(c.bind(null,d)))}).finally(function(){a._waitingFor===r&&(a._waitingFor=null)})})},Ke.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Ke.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ue(t,e))return t[e];var a=this.schema[e];if(a)return(a=new this.db.Table(e,a,this)).core=this.db.core.table(e),t[e]=a;throw new ee.NotFound("Table "+e+" not part of transaction")},Ke);function Ke(){}function _e(e,t,a,s,r,l,c,d){return{name:e,keyPath:t,unique:a,multi:s,auto:r,compound:l,src:(a&&!c?"&":"")+(s?"*":"")+(r?"++":"")+at(t),type:d}}function at(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ft(e,t,a){return{name:e,primKey:t,indexes:a,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},a.reduce(function(r,l,c){return l=s(l,c),l&&(r[l[0]]=l[1]),r},{}))};var s}var K=function(e){try{return e.only([[]]),K=function(){return[[]]},[[]]}catch{return K=function(){return Tn},Tn}};function St(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(a){return a[t]}:function(a){return Gt(a,t)}:function(a){return Gt(a,e)};var t}function gt(e){return[].slice.call(e)}var rn=0;function bt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function ye(e,t,g){function s(x){if(x.type===3)return null;if(x.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var b=x.lower,k=x.upper,w=x.lowerOpen,x=x.upperOpen;return b===void 0?k===void 0?null:t.upperBound(k,!!x):k===void 0?t.lowerBound(b,!!w):t.bound(b,k,!!w,!!x)}function r(C){var b,k=C.name;return{name:k,schema:C,mutate:function(w){var x=w.trans,y=w.type,M=w.keys,_=w.values,S=w.range;return new Promise(function(I,O){I=ge(I);var j=x.objectStore(k),R=j.keyPath==null,D=y==="put"||y==="add";if(!D&&y!=="delete"&&y!=="deleteRange")throw new Error("Invalid operation type: "+y);var X,U=(M||_||{length:1}).length;if(M&&_&&M.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(U===0)return I({numFailures:0,failures:{},results:[],lastResult:void 0});function L(Re){++ve,ie(Re)}var G=[],fe=[],ve=0;if(y==="deleteRange"){if(S.type===4)return I({numFailures:ve,failures:fe,results:[],lastResult:void 0});S.type===3?G.push(X=j.clear()):G.push(X=j.delete(s(S)))}else{var R=D?R?[_,M]:[_,null]:[M,null],ae=R[0],ce=R[1];if(D)for(var Oe=0;Oe<U;++Oe)G.push(X=ce&&ce[Oe]!==void 0?j[y](ae[Oe],ce[Oe]):j[y](ae[Oe])),X.onerror=L;else for(Oe=0;Oe<U;++Oe)G.push(X=j[y](ae[Oe])),X.onerror=L}function yt(Re){Re=Re.target.result,G.forEach(function(Dn,wn){return Dn.error!=null&&(fe[wn]=Dn.error)}),I({numFailures:ve,failures:fe,results:y==="delete"?M:G.map(function(Dn){return Dn.result}),lastResult:Re})}X.onerror=function(Re){L(Re),yt(Re)},X.onsuccess=yt})},getMany:function(w){var x=w.trans,y=w.keys;return new Promise(function(M,_){M=ge(M);for(var S,I=x.objectStore(k),O=y.length,j=new Array(O),R=0,D=0,X=function(G){G=G.target,j[G._pos]=G.result,++D===R&&M(j)},U=J(_),L=0;L<O;++L)y[L]!=null&&((S=I.get(y[L]))._pos=L,S.onsuccess=X,S.onerror=U,++R);R===0&&M(j)})},get:function(w){var x=w.trans,y=w.key;return new Promise(function(M,_){M=ge(M);var S=x.objectStore(k).get(y);S.onsuccess=function(I){return M(I.target.result)},S.onerror=J(_)})},query:(b=d,function(w){return new Promise(function(x,y){x=ge(x);var M,_,S,D=w.trans,I=w.values,O=w.limit,R=w.query,j=O===1/0?void 0:O,X=R.index,R=R.range,D=D.objectStore(k),D=X.isPrimaryKey?D:D.index(X.name),X=s(R);if(O===0)return x({result:[]});b?((R=I?D.getAll(X,j):D.getAllKeys(X,j)).onsuccess=function(U){return x({result:U.target.result})},R.onerror=J(y)):(M=0,_=!I&&"openKeyCursor"in D?D.openKeyCursor(X):D.openCursor(X),S=[],_.onsuccess=function(U){var L=_.result;return!L||(S.push(I?L.value:L.primaryKey),++M===O)?x({result:S}):void L.continue()},_.onerror=J(y))})}),openCursor:function(w){var x=w.trans,y=w.values,M=w.query,_=w.reverse,S=w.unique;return new Promise(function(I,O){I=ge(I);var D=M.index,j=M.range,R=x.objectStore(k),R=D.isPrimaryKey?R:R.index(D.name),D=_?S?"prevunique":"prev":S?"nextunique":"next",X=!y&&"openKeyCursor"in R?R.openKeyCursor(s(j),D):R.openCursor(s(j),D);X.onerror=J(O),X.onsuccess=ge(function(U){var L,G,fe,ve,ae=X.result;ae?(ae.___id=++rn,ae.done=!1,L=ae.continue.bind(ae),G=(G=ae.continuePrimaryKey)&&G.bind(ae),fe=ae.advance.bind(ae),ve=function(){throw new Error("Cursor not stopped")},ae.trans=x,ae.stop=ae.continue=ae.continuePrimaryKey=ae.advance=function(){throw new Error("Cursor not started")},ae.fail=ge(O),ae.next=function(){var ce=this,Oe=1;return this.start(function(){return Oe--?ce.continue():ce.stop()}).then(function(){return ce})},ae.start=function(ce){function Oe(){if(X.result)try{ce()}catch(Re){ae.fail(Re)}else ae.done=!0,ae.start=function(){throw new Error("Cursor behind last entry")},ae.stop()}var yt=new Promise(function(Re,Dn){Re=ge(Re),X.onerror=J(Dn),ae.fail=Dn,ae.stop=function(wn){ae.stop=ae.continue=ae.continuePrimaryKey=ae.advance=ve,Re(wn)}});return X.onsuccess=ge(function(Re){X.onsuccess=Oe,Oe()}),ae.continue=L,ae.continuePrimaryKey=G,ae.advance=fe,Oe(),yt},I(ae)):I(null)},O)})},count:function(w){var x=w.query,y=w.trans,M=x.index,_=x.range;return new Promise(function(S,I){var O=y.objectStore(k),O=M.isPrimaryKey?O:O.index(M.name),j=s(_),j=j?O.count(j):O.count();j.onsuccess=ge(function(R){return S(R.target.result)}),j.onerror=J(I)})}}}l=g,c=gt((g=e).objectStoreNames);var l,g={schema:{name:g.name,tables:c.map(function(C){return l.objectStore(C)}).map(function(C){var b=C.keyPath,k=C.autoIncrement,x=oe(b),w={},x={name:C.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:b==null,compound:x,keyPath:b,autoIncrement:k,unique:!0,extractKey:St(b)},indexes:gt(C.indexNames).map(function(y){return C.index(y)}).map(function(S){var I=S.name,M=S.unique,_=S.multiEntry,S=S.keyPath,I={name:I,compound:oe(S),keyPath:S,unique:M,multiEntry:_,extractKey:St(S)};return w[bt(S)]=I}),getIndexByKeyPath:function(y){return w[bt(y)]}};return w[":id"]=x.primaryKey,b!=null&&(w[bt(b)]=x.primaryKey),x})},hasGetAll:0<c.length&&"getAll"in l.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=g.schema,d=g.hasGetAll,g=c.tables.map(r),E={};return g.forEach(function(C){return E[C.name]=C}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(C){if(E[C])return E[C];throw new Error("Table '".concat(C,"' not found"))},MIN_KEY:-1/0,MAX_KEY:K(t),schema:c}}function Rt(e,t,a,s){return a=a.IDBKeyRange,t=ye(t,a,s),{dbcore:e.dbcore.reduce(function(r,l){return l=l.create,Q(Q({},r),l(r))},t)}}function Ne(e,t){var a=t.db,a=Rt(e._middlewares,a,e._deps,t);e.core=a.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(l){return l.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function ze(e,t,a,s){a.forEach(function(r){var l=s[r];t.forEach(function(c){var d=(function g(E,C){return en(E,C)||(E=Ze(E))&&g(E,C)})(c,r);(!d||"value"in d&&d.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?Le(c,r,{get:function(){return this.table(r)},set:function(g){rt(this,r,{value:g,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,l))})})}function Je(e,t){t.forEach(function(a){for(var s in a)a[s]instanceof e.Table&&delete a[s]})}function tt(e,t){return e._cfg.version-t._cfg.version}function nt(e,t,a,s){var r=e._dbSchema,l=(a.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=Ft("$meta",qe("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(l.create(a),l._completion.catch(s),l._reject.bind(l)),d=H.transless||H;gn(function(){if(H.trans=l,H.transless=d,t!==0)return Ne(e,a),E=t,((g=l).storeNames.includes("$meta")?g.table("$meta").get("version").then(function(C){return C??E}):z.resolve(E)).then(function(M){var b=e,k=M,w=l,x=a,y=[],M=b._versions,_=b._dbSchema=jt(0,b.idbdb,x);return(M=M.filter(function(S){return S._cfg.version>=k})).length===0?z.resolve():(M.forEach(function(S){y.push(function(){var I,O,j,R=_,D=S._cfg.dbschema,X=(xe(b,R,x),xe(b,D,x),_=b._dbSchema=D,Dt(R,D)),U=(X.add.forEach(function(L){Lt(x,L[0],L[1].primKey,L[1].indexes)}),X.change.forEach(function(L){if(L.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var G=x.objectStore(L.name);L.add.forEach(function(fe){return et(G,fe)}),L.change.forEach(function(fe){G.deleteIndex(fe.name),et(G,fe)}),L.del.forEach(function(fe){return G.deleteIndex(fe)})}),S._cfg.contentUpgrade);if(U&&S._cfg.version>k)return Ne(b,x),w._memoizedTables={},I=vt(D),X.del.forEach(function(L){I[L]=R[L]}),Je(b,[b.Transaction.prototype]),ze(b,[b.Transaction.prototype],be(I),I),w.schema=I,(O=nn(U))&&Hn(),D=z.follow(function(){var L;(j=U(w))&&O&&(L=bn.bind(null,null),j.then(L,L))}),j&&typeof j.then=="function"?z.resolve(j):D.then(function(){return j})}),y.push(function(I){var O,j,R=S._cfg.dbschema;O=R,j=I,[].slice.call(j.db.objectStoreNames).forEach(function(D){return O[D]==null&&j.db.deleteObjectStore(D)}),Je(b,[b.Transaction.prototype]),ze(b,[b.Transaction.prototype],b._storeNames,b._dbSchema),w.schema=b._dbSchema}),y.push(function(I){b.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(b.idbdb.version/10)===S._cfg.version?(b.idbdb.deleteObjectStore("$meta"),delete b._dbSchema.$meta,b._storeNames=b._storeNames.filter(function(O){return O!=="$meta"})):I.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return y.length?z.resolve(y.shift()(w.idbtrans)).then(S):z.resolve()})().then(function(){Nt(_,x)}))}).catch(c);var g,E;be(r).forEach(function(C){Lt(a,C,r[C].primKey,r[C].indexes)}),Ne(e,a),z.follow(function(){return e.on.populate.fire(l)}).catch(c)})}function Ut(e,t){Nt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var a=jt(0,e.idbdb,t);xe(e,e._dbSchema,t);for(var s=0,r=Dt(a,e._dbSchema).change;s<r.length;s++){var l=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var d=t.objectStore(c.name);c.add.forEach(function(g){It&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(g.src)),et(d,g)})})(r[s]);if(typeof l=="object")return l.value}}function Dt(e,t){var a,s={del:[],add:[],change:[]};for(a in e)t[a]||s.del.push(a);for(a in t){var r=e[a],l=t[a];if(r){var c={name:a,def:l,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(l.primKey.keyPath||"")||r.primKey.auto!==l.primKey.auto)c.recreate=!0,s.change.push(c);else{var d=r.idxByName,g=l.idxByName,E=void 0;for(E in d)g[E]||c.del.push(E);for(E in g){var C=d[E],b=g[E];C?C.src!==b.src&&c.change.push(b):c.add.push(b)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([a,l])}return s}function Lt(e,t,a,s){var r=e.db.createObjectStore(t,a.keyPath?{keyPath:a.keyPath,autoIncrement:a.auto}:{autoIncrement:a.auto});s.forEach(function(l){return et(r,l)})}function Nt(e,t){be(e).forEach(function(a){t.db.objectStoreNames.contains(a)||(It&&console.debug("Dexie: Creating missing table",a),Lt(t,a,e[a].primKey,e[a].indexes))})}function et(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function jt(e,t,a){var s={};return tn(t.objectStoreNames,0).forEach(function(r){for(var l=a.objectStore(r),c=_e(at(E=l.keyPath),E||"",!0,!1,!!l.autoIncrement,E&&typeof E!="string",!0),d=[],g=0;g<l.indexNames.length;++g){var C=l.index(l.indexNames[g]),E=C.keyPath,C=_e(C.name,E,!!C.unique,!!C.multiEntry,!1,E&&typeof E!="string",!1);d.push(C)}s[r]=Ft(r,c,d)}),s}function xe(e,t,a){for(var s=a.db.objectStoreNames,r=0;r<s.length;++r){var l=s[r],c=a.objectStore(l);e._hasGetAll="getAll"in c;for(var d=0;d<c.indexNames.length;++d){var g,E=c.indexNames[d],C=c.index(E).keyPath,C=typeof C=="string"?C:"["+tn(C).join("+")+"]";t[l]&&(g=t[l].idxByName[C])&&(g.name=E,delete t[l].idxByName[C],t[l].idxByName[E]=g)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function qe(e){return e.split(",").map(function(t,a){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),l=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return _e(r,l||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),oe(l),a===0,s)})}Pe.prototype._createTableSchema=Ft,Pe.prototype._parseIndexSyntax=qe,Pe.prototype._parseStoresSpec=function(e,t){var a=this;be(e).forEach(function(s){if(e[s]!==null){var r=a._parseIndexSyntax(e[s]),l=r.shift();if(!l)throw new ee.Schema("Invalid schema for table "+s+": "+e[s]);if(l.unique=!0,l.multi)throw new ee.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),l=a._createTableSchema(s,l,r),t[s]=l}})},Pe.prototype.stores=function(a){var t=this.db,a=(this._cfg.storesSource=this._cfg.storesSource?he(this._cfg.storesSource,a):a,t._versions),s={},r={};return a.forEach(function(l){he(s,l._cfg.storesSource),r=l._cfg.dbschema={},l._parseStoresSpec(s,r)}),t._dbSchema=r,Je(t,[t._allTables,t,t.Transaction.prototype]),ze(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],be(r),r),t._storeNames=be(r),this},Pe.prototype.upgrade=function(e){return this._cfg.contentUpgrade=ia(this._cfg.contentUpgrade||$e,e),this};var Xe=Pe;function Pe(){}function Ve(e,t){var a=e._dbNamesDB;return a||(a=e._dbNamesDB=new cn(Ea,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),a.table("dbnames")}function on(e){return e&&typeof e.databases=="function"}function Ae(e){return gn(function(){return H.letThrough=!0,e()})}function ln(e){return!("from"in e)}var Ie=function(e,t){var a;if(!this)return a=new Ie,e&&"d"in e&&he(a,e),a;he(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function re(e,t,a){var s=pe(t,a);if(!isNaN(s)){if(0<s)throw RangeError();if(ln(e))return he(e,{from:t,to:a,d:1});var s=e.l,r=e.r;if(pe(a,e.from)<0)return s?re(s,t,a):e.l={from:t,to:a,d:1,l:null,r:null},Ht(e);if(0<pe(t,e.to))return r?re(r,t,a):e.r={from:t,to:a,d:1,l:null,r:null},Ht(e);pe(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<pe(a,e.to)&&(e.to=a,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&ot(e,s),r&&t&&ot(e,r)}}function ot(e,t){ln(t)||(function a(s,r){var l=r.from,c=r.l,d=r.r;re(s,l,r.to),c&&a(s,c),d&&a(s,d)})(e,t)}function _t(e,t){var a=xn(t),s=a.next();if(!s.done)for(var r=s.value,l=xn(e),c=l.next(r.from),d=c.value;!s.done&&!c.done;){if(pe(d.from,r.to)<=0&&0<=pe(d.to,r.from))return!0;pe(r.from,d.from)<0?r=(s=a.next(d.from)).value:d=(c=l.next(r.from)).value}return!1}function xn(e){var t=ln(e)?null:{s:0,n:e};return{next:function(a){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&pe(a,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||pe(a,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ht(e){var t,a,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",a=Q({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],a[r]=s[t],(e[t]=a).d=kn(a)),e.d=kn(e)}function kn(a){var t=a.r,a=a.l;return(t?a?Math.max(t.d,a.d):t.d:a?a.d:0)+1}function Yt(e,t){return be(t).forEach(function(a){e[a]?ot(e[a],t[a]):e[a]=(function s(r){var l,c,d={};for(l in r)ue(r,l)&&(c=r[l],d[l]=!c||typeof c!="object"||Za.has(c.constructor)?c:s(c));return d})(t[a])}),e}function lt(e,t){return e.all||t.all||Object.keys(e).some(function(a){return t[a]&&_t(t[a],e[a])})}dt(Ie.prototype,((Bt={add:function(e){return ot(this,e),this},addKey:function(e){return re(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(a){return re(t,a,a)}),this},hasKey:function(e){var t=xn(this).next(e).value;return t&&pe(t.from,e)<=0&&0<=pe(t.to,e)}})[Ka]=function(){return xn(this)},Bt));var st={},ct={},Qn=!1;function zt(e){Yt(ct,e),Qn||(Qn=!0,setTimeout(function(){Qn=!1,Zn(ct,!(ct={}))},0))}function Zn(e,t){t===void 0&&(t=!1);var a=new Set;if(e.all)for(var s=0,r=Object.values(st);s<r.length;s++)In(d=r[s],e,a,t);else for(var l in e){var c,d,l=/^idb\:\/\/(.*)\/(.*)\//.exec(l);l&&(c=l[1],l=l[2],d=st["idb://".concat(c,"/").concat(l)])&&In(d,e,a,t)}a.forEach(function(g){return g()})}function In(e,t,a,s){for(var r=[],l=0,c=Object.entries(e.queries.query);l<c.length;l++){for(var d=c[l],g=d[0],E=[],C=0,b=d[1];C<b.length;C++){var k=b[C];lt(t,k.obsSet)?k.subscribers.forEach(function(M){return a.add(M)}):s&&E.push(k)}s&&r.push([g,E])}if(s)for(var w=0,x=r;w<x.length;w++){var y=x[w],g=y[0],E=y[1];e.queries.query[g]=E}}function Ga(e){var t=e._state,a=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ue(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),l=!1;function c(){if(t.openCanceller!==s)throw new ee.DatabaseClosed("db.open() was cancelled")}function d(){return new z(function(k,w){if(c(),!a)throw new ee.MissingAPI;var x=e.name,y=t.autoSchema||!r?a.open(x):a.open(x,r);if(!y)throw new ee.MissingAPI;y.onerror=J(w),y.onblocked=ge(e._fireOnBlocked),y.onupgradeneeded=ge(function(M){var _;C=y.transaction,t.autoSchema&&!e._options.allowEmptyDB?(y.onerror=ie,C.abort(),y.result.close(),(_=a.deleteDatabase(x)).onsuccess=_.onerror=ge(function(){w(new ee.NoSuchDatabase("Database ".concat(x," doesnt exist")))})):(C.onerror=J(w),_=M.oldVersion>Math.pow(2,62)?0:M.oldVersion,b=_<1,e.idbdb=y.result,l&&Ut(e,C),nt(e,_/10,C,w))},w),y.onsuccess=ge(function(){C=null;var M,_,S,I,O,j,R=e.idbdb=y.result,D=tn(R.objectStoreNames);if(0<D.length)try{var X=R.transaction((O=D).length===1?O[0]:O,"readonly");if(t.autoSchema)j=R,I=X,(S=e).verno=j.version/10,I=S._dbSchema=jt(0,j,I),S._storeNames=tn(j.objectStoreNames,0),ze(S,[S._allTables],be(I),I);else if(xe(e,e._dbSchema,X),_=X,((_=Dt(jt(0,(M=e).idbdb,_),M._dbSchema)).add.length||_.change.some(function(U){return U.add.length||U.change.length}))&&!l)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),R.close(),r=R.version+1,l=!0,k(d());Ne(e,X)}catch{}Jn.push(e),R.onversionchange=ge(function(U){t.vcFired=!0,e.on("versionchange").fire(U)}),R.onclose=ge(function(){e.close({disableAutoOpen:!1})}),b&&(D=e._deps,O=x,on(j=D.indexedDB)||O===Ea||Ve(j,D.IDBKeyRange).put({name:O}).catch($e)),k()},w)}).catch(function(k){switch(k?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),d();break;case"VersionError":if(0<r)return r=0,d()}return z.reject(k)})}var g,E=t.dbReadyResolve,C=null,b=!1;return z.race([s,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(k){function w(){return indexedDB.databases().finally(k)}g=setInterval(w,100),w()}).finally(function(){return clearInterval(g)}):Promise.resolve()).then(d)]).then(function(){return c(),t.onReadyBeingFired=[],z.resolve(Ae(function(){return e.on.ready.fire(e.vip)})).then(function k(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(ia,$e),t.onReadyBeingFired=[],z.resolve(Ae(function(){return w(e.vip)})).then(k)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(k){t.dbOpenError=k;try{C&&C.abort()}catch{}return s===t.openCanceller&&e._close(),Ue(k)}).finally(function(){t.openComplete=!0,E()}).then(function(){var k;return b&&(k={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(x){x.name&&(k["idb://".concat(e.name,"/").concat(w.name,"/").concat(x.name)]=new Ie(-1/0,[[[]]]))}),k["idb://".concat(e.name,"/").concat(w.name,"/")]=k["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new Ie(-1/0,[[[]]])}),le(Ce).fire(k),Zn(k,!0)),e})}function T(e){function t(l){return e.next(l)}var a=r(t),s=r(function(l){return e.throw(l)});function r(l){return function(d){var d=l(d),g=d.value;return d.done?g:g&&typeof g.then=="function"?g.then(a,s):oe(g)?Promise.all(g).then(a,s):a(g)}}return r(t)()}function N(e,t,a){for(var s=oe(e)?e.slice():[e],r=0;r<a;++r)s.push(t);return s}var Kt={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Q(Q({},e),{table:function(s){var a=e.table(s),s=a.schema,r={},l=[];function c(k,w,x){var S=bt(k),y=r[S]=r[S]||[],M=k==null?0:typeof k=="string"?1:k.length,_=0<w,S=Q(Q({},x),{name:_?"".concat(S,"(virtual-from:").concat(x.name,")"):x.name,lowLevelIndex:x,isVirtual:_,keyTail:w,keyLength:M,extractKey:St(k),unique:!_&&x.unique});return y.push(S),S.isPrimaryKey||l.push(S),1<M&&c(M===2?k[0]:k.slice(0,M-1),w+1,x),y.sort(function(I,O){return I.keyTail-O.keyTail}),S}var d=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[d];for(var g=0,E=s.indexes;g<E.length;g++){var C=E[g];c(C.keyPath,0,C)}function b(k){var w,x=k.query.index;return x.isVirtual?Q(Q({},k),{query:{index:x.lowLevelIndex,range:(w=k.query.range,x=x.keyTail,{type:w.type===1?2:w.type,lower:N(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,x),lowerOpen:!0,upper:N(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,x),upperOpen:!0})}}):k}return Q(Q({},a),{schema:Q(Q({},s),{primaryKey:d,indexes:l,getIndexByKeyPath:function(k){return(k=r[bt(k)])&&k[0]}}),count:function(k){return a.count(b(k))},query:function(k){return a.query(b(k))},openCursor:function(k){var w=k.query.index,x=w.keyTail,y=w.keyLength;return w.isVirtual?a.openCursor(b(k)).then(function(_){return _&&M(_)}):a.openCursor(k);function M(_){return Object.create(_,{continue:{value:function(S){S!=null?_.continue(N(S,k.reverse?e.MAX_KEY:e.MIN_KEY,x)):k.unique?_.continue(_.key.slice(0,y).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,x)):_.continue()}},continuePrimaryKey:{value:function(S,I){_.continuePrimaryKey(N(S,e.MAX_KEY,x),I)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var S=_.key;return y===1?S[0]:S.slice(0,y)}},value:{get:function(){return _.value}}})}}})}})}};function ea(e,t,a,s){return a=a||{},s=s||"",be(e).forEach(function(r){var l,c,d;ue(t,r)?(l=e[r],c=t[r],typeof l=="object"&&typeof c=="object"&&l&&c?(d=Na(l))!==Na(c)?a[s+r]=t[r]:d==="Object"?ea(l,c,a,s+r+"."):l!==c&&(a[s+r]=t[r]):l!==c&&(a[s+r]=t[r])):a[s+r]=void 0}),be(t).forEach(function(r){ue(e,r)||(a[s+r]=t[r])}),a}function va(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var vs={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Q(Q({},e),{table:function(t){var a=e.table(t),s=a.schema.primaryKey;return Q(Q({},a),{mutate:function(r){var l=H.trans,c=l.table(t).hook,d=c.deleting,g=c.creating,E=c.updating;switch(r.type){case"add":if(g.fire===$e)break;return l._promise("readwrite",function(){return C(r)},!0);case"put":if(g.fire===$e&&E.fire===$e)break;return l._promise("readwrite",function(){return C(r)},!0);case"delete":if(d.fire===$e)break;return l._promise("readwrite",function(){return C(r)},!0);case"deleteRange":if(d.fire===$e)break;return l._promise("readwrite",function(){return(function b(k,w,x){return a.query({trans:k,values:!1,query:{index:s,range:w},limit:x}).then(function(y){var M=y.result;return C({type:"delete",keys:M,trans:k}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):M.length<x?{failures:[],numFailures:0,lastResult:void 0}:b(k,Q(Q({},w),{lower:M[M.length-1],lowerOpen:!0}),x)})})})(r.trans,r.range,1e4)},!0)}return a.mutate(r);function C(b){var k,w,x,y=H.trans,M=b.keys||va(s,b);if(M)return(b=b.type==="add"||b.type==="put"?Q(Q({},b),{keys:M}):Q({},b)).type!=="delete"&&(b.values=de([],b.values)),b.keys&&(b.keys=de([],b.keys)),k=a,x=M,((w=b).type==="add"?Promise.resolve([]):k.getMany({trans:w.trans,keys:x,cache:"immutable"})).then(function(_){var S=M.map(function(I,O){var j,R,D,X=_[O],U={onerror:null,onsuccess:null};return b.type==="delete"?d.fire.call(U,I,X,y):b.type==="add"||X===void 0?(j=g.fire.call(U,I,b.values[O],y),I==null&&j!=null&&(b.keys[O]=I=j,s.outbound||ft(b.values[O],s.keyPath,I))):(j=ea(X,b.values[O]),(R=E.fire.call(U,j,I,X,y))&&(D=b.values[O],Object.keys(R).forEach(function(L){ue(D,L)?D[L]=R[L]:ft(D,L,R[L])}))),U});return a.mutate(b).then(function(I){for(var O=I.failures,j=I.results,R=I.numFailures,I=I.lastResult,D=0;D<M.length;++D){var X=(j||M)[D],U=S[D];X==null?U.onerror&&U.onerror(O[D]):U.onsuccess&&U.onsuccess(b.type==="put"&&_[D]?b.values[D]:X)}return{failures:O,results:j,numFailures:R,lastResult:I}}).catch(function(I){return S.forEach(function(O){return O.onerror&&O.onerror(I)}),Promise.reject(I)})});throw new Error("Keys missing")}}})}})}};function Ua(e,t,a){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,l=0;r<t.keys.length&&l<e.length;++r)pe(t.keys[r],e[l])===0&&(s.push(a?$t(t.values[r]):t.values[r]),++l);return s.length===e.length?s:null}catch{return null}}var Jt={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var a=e.table(t);return Q(Q({},a),{getMany:function(s){var r;return s.cache?(r=Ua(s.keys,s.trans._cache,s.cache==="clone"))?z.resolve(r):a.getMany(s).then(function(l){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?$t(l):l},l}):a.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),a.mutate(s)}})}}}};function ms(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Xt(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ds={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,a=new Ie(e.MIN_KEY,e.MAX_KEY);return Q(Q({},e),{transaction:function(s,r,l){if(H.subscr&&r!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(s,r,l)},table:function(s){function r(M){var y,M=M.query;return[y=M.index,new Ie((y=(M=M.range).lower)!=null?y:e.MIN_KEY,(y=M.upper)!=null?y:e.MAX_KEY)]}var l=e.table(s),c=l.schema,d=c.primaryKey,g=c.indexes,E=d.extractKey,C=d.outbound,b=d.autoIncrement&&g.filter(function(x){return x.compound&&x.keyPath.includes(d.keyPath)}),k=Q(Q({},l),{mutate:function(x){function y(G){return G="idb://".concat(t,"/").concat(s,"/").concat(G),O[G]||(O[G]=new Ie)}var M,_,S,I=x.trans,O=x.mutatedParts||(x.mutatedParts={}),j=y(""),R=y(":dels"),D=x.type,U=x.type==="deleteRange"?[x.range]:x.type==="delete"?[x.keys]:x.values.length<50?[va(d,x).filter(function(G){return G}),x.values]:[],X=U[0],U=U[1],L=x.trans._cache;return oe(X)?(j.addKeys(X),(D=D==="delete"||X.length===U.length?Ua(X,L):null)||R.addKeys(X),(D||U)&&(M=y,_=D,S=U,c.indexes.forEach(function(G){var fe=M(G.name||"");function ve(ce){return ce!=null?G.extractKey(ce):null}function ae(ce){G.multiEntry&&oe(ce)?ce.forEach(function(Oe){return fe.addKey(Oe)}):fe.addKey(ce)}(_||S).forEach(function(ce,Re){var yt=_&&ve(_[Re]),Re=S&&ve(S[Re]);pe(yt,Re)!==0&&(yt!=null&&ae(yt),Re!=null)&&ae(Re)})}))):X?(U={from:(L=X.lower)!=null?L:e.MIN_KEY,to:(D=X.upper)!=null?D:e.MAX_KEY},R.add(U),j.add(U)):(j.add(a),R.add(a),c.indexes.forEach(function(G){return y(G.name).add(a)})),l.mutate(x).then(function(G){return!X||x.type!=="add"&&x.type!=="put"||(j.addKeys(G.results),b&&b.forEach(function(fe){for(var ve=x.values.map(function(yt){return fe.extractKey(yt)}),ae=fe.keyPath.findIndex(function(yt){return yt===d.keyPath}),ce=0,Oe=G.results.length;ce<Oe;++ce)ve[ce][ae]=G.results[ce];y(fe.name).addKeys(ve)})),I.mutatedParts=Yt(I.mutatedParts||{},O),G})}}),w={get:function(x){return[d,new Ie(x.key)]},getMany:function(x){return[d,new Ie().addKeys(x.keys)]},count:r,query:r,openCursor:r};return be(w).forEach(function(x){k[x]=function(y){var M=H.subscr,_=!!M,S=ms(H,l)&&Xt(x,y)?y.obsSet={}:M;if(_){var I,M=function(U){return U="idb://".concat(t,"/").concat(s,"/").concat(U),S[U]||(S[U]=new Ie)},O=M(""),j=M(":dels"),_=w[x](y),R=_[0],_=_[1];if((x==="query"&&R.isPrimaryKey&&!y.values?j:M(R.name||"")).add(_),!R.isPrimaryKey){if(x!=="count")return I=x==="query"&&C&&y.values&&l.query(Q(Q({},y),{values:!1})),l[x].apply(this,arguments).then(function(U){if(x==="query"){if(C&&y.values)return I.then(function(ve){return ve=ve.result,O.addKeys(ve),U});var L=y.values?U.result.map(E):U.result;(y.values?O:j).addKeys(L)}else{var G,fe;if(x==="openCursor")return fe=y.values,(G=U)&&Object.create(G,{key:{get:function(){return j.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var ve=G.primaryKey;return j.addKey(ve),ve}},value:{get:function(){return fe&&O.addKey(G.primaryKey),G.value}}})}return U});j.add(a)}}return l[x].apply(this,arguments)}}),k}})}};function gs(e,t,a){var s;return a.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,a.numFailures===s)?null:(s=Q({},t),oe(s.keys)&&(s.keys=s.keys.filter(function(r,l){return!(l in a.failures)})),"values"in s&&oe(s.values)&&(s.values=s.values.filter(function(r,l){return!(l in a.failures)})),s)}function Ta(e,t){return a=e,((s=t).lower===void 0||(s.lowerOpen?0<pe(a,s.lower):0<=pe(a,s.lower)))&&(a=e,(s=t).upper===void 0||(s.upperOpen?pe(a,s.upper)<0:pe(a,s.upper)<=0));var a,s}function Ha(e,t,a,s,r,l){var c,d,g,E,C,b;return!a||a.length===0||(c=t.query.index,d=c.multiEntry,g=t.query.range,E=s.schema.primaryKey.extractKey,C=c.extractKey,b=(c.lowLevelIndex||c).extractKey,(s=a.reduce(function(k,w){var x=k,y=[];if(w.type==="add"||w.type==="put")for(var M=new Ie,_=w.values.length-1;0<=_;--_){var S,I=w.values[_],O=E(I);!M.hasKey(O)&&(S=C(I),d&&oe(S)?S.some(function(U){return Ta(U,g)}):Ta(S,g))&&(M.addKey(O),y.push(I))}switch(w.type){case"add":var j=new Ie().addKeys(t.values?k.map(function(L){return E(L)}):k),x=k.concat(t.values?y.filter(function(L){return L=E(L),!j.hasKey(L)&&(j.addKey(L),!0)}):y.map(function(L){return E(L)}).filter(function(L){return!j.hasKey(L)&&(j.addKey(L),!0)}));break;case"put":var R=new Ie().addKeys(w.values.map(function(L){return E(L)}));x=k.filter(function(L){return!R.hasKey(t.values?E(L):L)}).concat(t.values?y:y.map(function(L){return E(L)}));break;case"delete":var D=new Ie().addKeys(w.keys);x=k.filter(function(L){return!D.hasKey(t.values?E(L):L)});break;case"deleteRange":var X=w.range;x=k.filter(function(L){return!Ta(E(L),X)})}return x},e))===e)?e:(s.sort(function(k,w){return pe(b(k),b(w))||pe(E(k),E(w))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),l?Object.freeze(s):s)}function Ja(e,t){return pe(e.lower,t.lower)===0&&pe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function bs(e,t){return((a,s,r,l)=>{if(a===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((a=pe(a,s))===0){if(r&&l)return 0;if(r)return 1;if(l)return-1}return a})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((a,s,r,l)=>{if(a===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((a=pe(a,s))===0){if(r&&l)return 0;if(r)return-1;if(l)return 1}return a})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function ys(e,t,a,s){e.subscribers.add(a),s.addEventListener("abort",function(){var r,l;e.subscribers.delete(a),e.subscribers.size===0&&(r=e,l=t,setTimeout(function(){r.subscribers.size===0&&dn(l,r)},3e3))})}var Cs={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Q(Q({},e),{transaction:function(a,s,r){var l,c,d=e.transaction(a,s,r);return s==="readwrite"&&(r=(l=new AbortController).signal,d.addEventListener("abort",(c=function(g){return function(){if(l.abort(),s==="readwrite"){for(var E=new Set,C=0,b=a;C<b.length;C++){var k=b[C],w=st["idb://".concat(t,"/").concat(k)];if(w){var x=e.table(k),y=w.optimisticOps.filter(function(G){return G.trans===d});if(d._explicit&&g&&d.mutatedParts)for(var M=0,_=Object.values(w.queries.query);M<_.length;M++)for(var S=0,I=(R=_[M]).slice();S<I.length;S++)lt((D=I[S]).obsSet,d.mutatedParts)&&(dn(R,D),D.subscribers.forEach(function(G){return E.add(G)}));else if(0<y.length){w.optimisticOps=w.optimisticOps.filter(function(G){return G.trans!==d});for(var O=0,j=Object.values(w.queries.query);O<j.length;O++)for(var R,D,X,U=0,L=(R=j[O]).slice();U<L.length;U++)(D=L[U]).res!=null&&d.mutatedParts&&(g&&!D.dirty?(X=Object.isFrozen(D.res),X=Ha(D.res,D.req,y,x,D,X),D.dirty?(dn(R,D),D.subscribers.forEach(function(G){return E.add(G)})):X!==D.res&&(D.res=X,D.promise=z.resolve({result:X}))):(D.dirty&&dn(R,D),D.subscribers.forEach(function(G){return E.add(G)})))}}}E.forEach(function(G){return G()})}}})(!1),{signal:r}),d.addEventListener("error",c(!1),{signal:r}),d.addEventListener("complete",c(!0),{signal:r})),d},table:function(a){var s=e.table(a),r=s.schema.primaryKey;return Q(Q({},s),{mutate:function(l){var c,d=H.trans;return!r.outbound&&d.db._options.cache!=="disabled"&&!d.explicit&&d.idbtrans.mode==="readwrite"&&(c=st["idb://".concat(t,"/").concat(a)])?(d=s.mutate(l),l.type!=="add"&&l.type!=="put"||!(50<=l.values.length||va(r,l).some(function(g){return g==null}))?(c.optimisticOps.push(l),l.mutatedParts&&zt(l.mutatedParts),d.then(function(g){0<g.numFailures&&(dn(c.optimisticOps,l),(g=gs(0,l,g))&&c.optimisticOps.push(g),l.mutatedParts)&&zt(l.mutatedParts)}),d.catch(function(){dn(c.optimisticOps,l),l.mutatedParts&&zt(l.mutatedParts)})):d.then(function(g){var E=gs(0,Q(Q({},l),{values:l.values.map(function(C,b){var k;return g.failures[b]?C:(ft(k=(k=r.keyPath)!=null&&k.includes(".")?$t(C):Q({},C),r.keyPath,g.results[b]),k)})}),g);c.optimisticOps.push(E),queueMicrotask(function(){return l.mutatedParts&&zt(l.mutatedParts)})}),d):s.mutate(l)},query:function(l){var c,d,g,E,C,b,k;return ms(H,s)&&Xt("query",l)?(c=((g=H.trans)==null?void 0:g.db._options.cache)==="immutable",d=(g=H).requery,g=g.signal,b=((w,x,y,M)=>{var _=st["idb://".concat(w,"/").concat(x)];if(!_)return[];if(!(w=_.queries[y]))return[null,!1,_,null];var S=w[(M.query?M.query.index.name:null)||""];if(!S)return[null,!1,_,null];switch(y){case"query":var I=S.find(function(O){return O.req.limit===M.limit&&O.req.values===M.values&&Ja(O.req.query.range,M.query.range)});return I?[I,!0,_,S]:[S.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=M.limit&&(!M.values||O.req.values)&&bs(O.req.query.range,M.query.range)}),!1,_,S];case"count":return I=S.find(function(O){return Ja(O.req.query.range,M.query.range)}),[I,!!I,_,S]}})(t,a,"query",l),k=b[0],E=b[2],C=b[3],k&&b[1]?k.obsSet=l.obsSet:(b=s.query(l).then(function(w){var x=w.result;if(k&&(k.res=x),c){for(var y=0,M=x.length;y<M;++y)Object.freeze(x[y]);Object.freeze(x)}else w.result=$t(x);return w}).catch(function(w){return C&&k&&dn(C,k),Promise.reject(w)}),k={obsSet:l.obsSet,promise:b,subscribers:new Set,type:"query",req:l,dirty:!1},C?C.push(k):(C=[k],(E=E||(st["idb://".concat(t,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[l.query.index.name||""]=C)),ys(k,C,d,g),k.promise.then(function(w){return{result:Ha(w.result,l,E?.optimisticOps,s,k,c)}})):s.query(l)}})}})}};function Pa(e,t){return new Proxy(e,{get:function(a,s,r){return s==="db"?t:Reflect.get(a,s,r)}})}Ge.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,a=t.filter(function(s){return s._cfg.version===e})[0];return a||(a=new this.Version(e),t.push(a),t.sort(tt),a.stores({}),this._state.autoSchema=!1),a},Ge.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new z(function(a,s){if(t._state.openComplete)return s(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ee.DatabaseClosed);t.open().catch($e)}t._state.dbReadyPromise.then(a,s)}).then(e)},Ge.prototype.use=function(r){var t=r.stack,a=r.create,s=r.level,r=r.name,l=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return l.push({stack:t,create:a,level:s??10,name:r}),l.sort(function(c,d){return c.level-d.level}),this},Ge.prototype.unuse=function(e){var t=e.stack,a=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!a&&r.name!==a})),this},Ge.prototype.open=function(){var e=this;return _n(pn,function(){return Ga(e)})},Ge.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Jn.indexOf(this);if(0<=t&&Jn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(a){e.dbReadyResolve=a}),e.openCanceller=new z(function(a,s){e.cancelOpen=s}))},Ge.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,a=this._state;t?(a.isBeingOpened&&a.cancelOpen(new ee.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new ee.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},Ge.prototype.delete=function(e){var t=this,a=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new z(function(r,l){function c(){t.close(e);var d=t._deps.indexedDB.deleteDatabase(t.name);d.onsuccess=ge(function(){var g,E,C;g=t._deps,E=t.name,on(C=g.indexedDB)||E===Ea||Ve(C,g.IDBKeyRange).delete(E).catch($e),r()}),d.onerror=J(l),d.onblocked=t._fireOnBlocked}if(a)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},Ge.prototype.backendDB=function(){return this.idbdb},Ge.prototype.isOpen=function(){return this.idbdb!==null},Ge.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ge.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ge.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ge.prototype,"tables",{get:function(){var e=this;return be(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ge.prototype.transaction=function(){var e=(function(t,a,s){var r=arguments.length;if(r<2)throw new ee.InvalidArgument("Too few arguments");for(var l=new Array(r-1);--r;)l[r-1]=arguments[r];return s=l.pop(),[t,La(l),s]}).apply(this,arguments);return this._transaction.apply(this,e)},Ge.prototype._transaction=function(e,t,a){var s,r,l=this,c=H.trans,d=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(E){if(E=E instanceof l.Table?E.name:E,typeof E!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return E}),e=="r"||e===ja)s=ja;else{if(e!="rw"&&e!=Pn)throw new ee.InvalidArgument("Invalid transaction mode: "+e);s=Pn}if(c){if(c.mode===ja&&s===Pn){if(!d)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function(E){if(c&&c.storeNames.indexOf(E)===-1){if(!d)throw new ee.SubTransaction("Table "+E+" not included in parent transaction.");c=null}}),d&&c&&!c.active&&(c=null)}}catch(E){return c?c._promise(null,function(C,b){b(E)}):Ue(E)}var g=(function E(C,b,k,w,x){return z.resolve().then(function(){var S=H.transless||H,y=C._createTransaction(b,k,C._dbSchema,w),S=(y.explicit=!0,{trans:y,transless:S});if(w)y.idbtrans=w.idbtrans;else try{y.create(),y.idbtrans._explicit=!0,C._state.PR1398_maxLoop=3}catch(I){return I.name===xa.InvalidState&&C.isOpen()&&0<--C._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),C.close({disableAutoOpen:!1}),C.open().then(function(){return E(C,b,k,null,x)})):Ue(I)}var M,_=nn(x),S=(_&&Hn(),z.follow(function(){var I;(M=x.call(y,y))&&(_?(I=bn.bind(null,null),M.then(I,I)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=T(M)))},S));return(M&&typeof M.then=="function"?z.resolve(M).then(function(I){return y.active?I:Ue(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return M})).then(function(I){return w&&y._resolve(),y._completion.then(function(){return I})}).catch(function(I){return y._reject(I),Ue(I)})})}).bind(null,this,s,r,c,a);return c?c._promise(s,g,"lock"):H.trans?_n(H.transless,function(){return l._whenReady(g)}):this._whenReady(g)},Ge.prototype.table=function(e){if(ue(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var cn=Ge;function Ge(e,t){var a,s,r,l,c,d=this,g=(this._middlewares={},this.verno=0,Ge.dependencies),g=(this._options=t=Q({addons:Ge.addons,autoOpen:!0,indexedDB:g.indexedDB,IDBKeyRange:g.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),E=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),C=(E.dbReadyPromise=new z(function(b){E.dbReadyResolve=b}),E.openCanceller=new z(function(b,k){E.cancelOpen=k}),this._state=E,this.name=e,this.on=pa(this,"populate","blocked","versionchange","close",{ready:[ia,$e]}),this.once=function(b,k){var w=function(){for(var x=[],y=0;y<arguments.length;y++)x[y]=arguments[y];d.on(b).unsubscribe(w),k.apply(d,x)};return d.on(b,w)},this.on.ready.subscribe=kt(this.on.ready.subscribe,function(b){return function(k,w){Ge.vip(function(){var x,y=d._state;y.openComplete?(y.dbOpenError||z.resolve().then(k),w&&b(k)):y.onReadyBeingFired?(y.onReadyBeingFired.push(k),w&&b(k)):(b(k),x=d,w||b(function M(){x.on.ready.unsubscribe(k),x.on.ready.unsubscribe(M)}))})}}),this.Collection=(a=this,fa(o.prototype,function(M,y){this.db=a;var w=Ya,x=null;if(y)try{w=y()}catch(S){x=S}var y=M._ctx,M=y.table,_=M.hook.reading.fire;this._ctx={table:M,index:y.index,isPrimKey:!y.index||M.schema.primKey.keyPath&&y.index===M.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:x,or:y.or,valueMapper:_!==ra?_:null}})),this.Table=(s=this,fa(hs.prototype,function(b,k,w){this.db=s,this._tx=w,this.name=b,this.schema=k,this.hook=s._allTables[b]?s._allTables[b].hook:pa(null,{creating:[as,$e],reading:[Ts,ra],updating:[ss,$e],deleting:[Ps,$e]})})),this.Transaction=(r=this,fa(We.prototype,function(b,k,w,x,y){var M=this;b!=="readonly"&&k.forEach(function(_){_=(_=w[_])==null?void 0:_.yProps,_&&(k=k.concat(_.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=b,this.storeNames=k,this.schema=w,this.chromeTransactionDurability=x,this.idbtrans=null,this.on=pa(this,"complete","error","abort"),this.parent=y||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(_,S){M._resolve=_,M._reject=S}),this._completion.then(function(){M.active=!1,M.on.complete.fire()},function(_){var S=M.active;return M.active=!1,M.on.error.fire(_),M.parent?M.parent._reject(_):S&&M.idbtrans&&M.idbtrans.abort(),Ue(_)})})),this.Version=(l=this,fa(Xe.prototype,function(b){this.db=l,this._cfg={version:b,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,fa(V.prototype,function(b,k,w){if(this.db=c,this._ctx={table:b,index:k===":id"?null:k,or:w},this._cmp=this._ascending=pe,this._descending=function(x,y){return pe(y,x)},this._max=function(x,y){return 0<pe(x,y)?x:y},this._min=function(x,y){return pe(x,y)<0?x:y},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(b){0<b.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(b){!b.newVersion||b.newVersion<b.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(b.oldVersion/10))}),this._maxKey=K(t.IDBKeyRange),this._createTransaction=function(b,k,w,x){return new d.Transaction(b,k,w,d._options.chromeTransactionDurability,x)},this._fireOnBlocked=function(b){d.on("blocked").fire(b),Jn.filter(function(k){return k.name===d.name&&k!==d&&!k._state.vcFired}).map(function(k){return k.on("versionchange").fire(b)})},this.use(Jt),this.use(Cs),this.use(Ds),this.use(Kt),this.use(vs),new Proxy(this,{get:function(b,k,w){var x;return k==="_vip"||(k==="table"?function(y){return Pa(d.table(y),C)}:(x=Reflect.get(b,k,w))instanceof hs?Pa(x,C):k==="tables"?x.map(function(y){return Pa(y,C)}):k==="_createTransaction"?function(){return Pa(x.apply(this,arguments),C)}:x)}}));this.vip=C,g.forEach(function(b){return b(d)})}var ma,On=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ls=(un.prototype.subscribe=function(e,t,a){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:a})},un.prototype[On]=function(){return this},un);function un(e){this._subscribe=e}try{ma={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{ma={indexedDB:null,IDBKeyRange:null}}function xs(e){var t,a=!1,s=new Ls(function(r){var l=nn(e),c,d=!1,g={},E={},C={get closed(){return d},unsubscribe:function(){d||(d=!0,c&&c.abort(),b&&le.storagemutated.unsubscribe(w))}},b=(r.start&&r.start(C),!1),k=function(){return Ra(x)},w=function(y){Yt(g,y),lt(E,g)&&k()},x=function(){var y,M,_;!d&&ma.indexedDB&&(g={},y={},c&&c.abort(),c=new AbortController,_=(S=>{var I=mn();try{l&&Hn();var O=gn(e,S);return O=l?O.finally(bn):O}finally{I&&Mn()}})(M={subscr:y,signal:c.signal,requery:k,querier:e,trans:null}),Promise.resolve(_).then(function(S){a=!0,t=S,d||M.signal.aborted||(g={},(I=>{for(var O in I)if(ue(I,O))return;return 1})(E=y)||b||(le(Ce,w),b=!0),Ra(function(){return!d&&r.next&&r.next(S)}))},function(S){a=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||d||Ra(function(){d||r.error&&r.error(S)})}))};return setTimeout(k,0),C});return s.hasValue=function(){return a},s.getValue=function(){return t},s}var Fn=cn;function Xa(e){var t=qt;try{qt=!0,le.storagemutated.fire(e),Zn(e,!0)}finally{qt=t}}dt(Fn,Q(Q({},At),{delete:function(e){return new Fn(e,{addons:[]}).delete()},exists:function(e){return new Fn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Fn.dependencies,a=t.indexedDB,t=t.IDBKeyRange,(on(a)?Promise.resolve(a.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==Ea})}):Ve(a,t).toCollection().primaryKeys()).then(e)}catch{return Ue(new ee.MissingAPI)}var t,a},defineClass:function(){return function(e){he(this,e)}},ignoreTransaction:function(e){return H.trans?_n(H.transless,e):e()},vip:Ae,async:function(e){return function(){try{var t=T(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(a){return Ue(a)}}},spawn:function(e,t,a){try{var s=T(e.apply(a,t||[]));return s&&typeof s.then=="function"?s:z.resolve(s)}catch(r){return Ue(r)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?Fn.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:z,debug:{get:function(){return It},set:function(e){Rn(e)}},derive:xt,extend:he,props:dt,override:kt,Events:pa,on:le,liveQuery:xs,extendObservabilitySet:Yt,getByKeyPath:Gt,setByKeyPath:ft,delByKeyPath:function(e,t){typeof t=="string"?ft(e,t,void 0):"length"in t&&[].map.call(t,function(a){ft(e,a,void 0)})},shallowClone:vt,deepClone:$t,getObjectDiff:ea,cmp:pe,asap:wt,minKey:-1/0,addons:[],connections:Jn,errnames:xa,dependencies:ma,cache:st,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,a){return e+t/Math.pow(10,2*a)})})),Fn.maxKey=K(Fn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(le(Ce,function(e){qt||(e=new CustomEvent(He,{detail:e}),qt=!0,dispatchEvent(e),qt=!1)}),addEventListener(He,function(e){e=e.detail,qt||Xa(e)}));var ta,qt=!1,ks=function(){};return typeof BroadcastChannel<"u"&&((ks=function(){(ta=new BroadcastChannel(He)).onmessage=function(e){return e.data&&Xa(e.data)}})(),typeof ta.unref=="function"&&ta.unref(),le(Ce,function(e){qt||ta.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!cn.disableBfCache&&e.persisted){It&&console.debug("Dexie: handling persisted pagehide"),ta?.close();for(var t=0,a=Jn;t<a.length;t++)a[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!cn.disableBfCache&&e.persisted&&(It&&console.debug("Dexie: handling persisted pageshow"),ks(),Xa({all:new Ie(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof En||e instanceof TypeError||e instanceof SyntaxError||!e.name||!ns[e.name]?e:(t=new ns[e.name](t||e.message,e),"stack"in e&&Le(t,"stack",{get:function(){return this.inner.stack}}),t)},Rn(It),Q(cn,Object.freeze({__proto__:null,Dexie:cn,Entity:ls,PropModification:ha,RangeSet:Ie,add:function(e){return new ha({add:e})},cmp:pe,default:cn,liveQuery:xs,mergeRanges:ot,rangesOverlap:_t,remove:function(e){return new ha({remove:e})},replacePrefix:function(e,t){return new ha({replacePrefix:[e,t]})}}),{default:cn}),cn})})($s)),$s.exports}var Ci=yi();const js=gi(Ci),Ar=Symbol.for("Dexie"),Es=globalThis[Ar]||(globalThis[Ar]=js);if(js.semVer!==Es.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${js.semVer} and ${Es.semVer}`);const{liveQuery:Fi,mergeRanges:Di,rangesOverlap:Li,RangeSet:Ni,cmp:Ki,Entity:qi,PropModification:Vi,replacePrefix:Ri,add:ji,remove:Yi,DexieYProvider:zi}=Es,De=new Es("haushaltsbuch-db");De.version(1).stores({years:"year",fixedTemplateState:"id"});De.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});De.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});De.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Kn="singleton";function Da(){return new Date().toISOString()}async function Ca(){return De.years.orderBy("year").toArray()}async function xi(B){return De.years.get(B)}async function ya(B){await De.years.put(B)}async function Ys(){const B=await De.fixedTemplateState.get(Kn);if(!B){const h={id:Kn,templates:[],version:Da(),updatedAt:new Date().toISOString()};return await De.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function zs(B){const h=Da();return await De.fixedTemplateState.put({id:Kn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function Ws(){const B=await De.annualVariableFixedTemplateState.get(Kn);if(!B){const h={id:Kn,templates:[],version:Da(),updatedAt:new Date().toISOString()};return await De.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Gs(B){const h=Da();return await De.annualVariableFixedTemplateState.put({id:Kn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function ki(B){await De.auditLog.put(B)}async function Us(){const B=await De.searchEvaluationState.get(Kn);if(!B){const h={id:Kn,results:[],version:Da(),updatedAt:new Date().toISOString()};return await De.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:B.results,version:B.version}}async function Ss(B){const h=Da();return await De.searchEvaluationState.put({id:Kn,results:B,version:h,updatedAt:new Date().toISOString()}),h}async function Hs(){return De.auditLog.orderBy("timestampIso").toArray()}async function wi(B){await De.auditLog.clear(),B.length!==0&&await De.auditLog.bulkPut(B)}async function $i(){const B=await Ca(),[h,we,Q,de]=await Promise.all([Ys(),Ws(),Hs(),Us()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:h.templates,annualVariableFixedTemplates:we.templates,auditLogEntries:Q,savedSearchEvaluations:de.results}}async function Si(B){await De.transaction("rw",[De.years,De.fixedTemplateState,De.annualVariableFixedTemplateState,De.auditLog,De.searchEvaluationState],async()=>{await De.years.clear(),await De.years.bulkPut(B.years),await zs(B.fixedTemplates),await Gs(B.annualVariableFixedTemplates??[]),await wi(B.auditLogEntries??[]),await Ss(B.savedSearchEvaluations??[])})}function Fe(B){const h=B.replace(",",".").trim();if(!h)return 0;const we=Number.parseFloat(h);return Number.isNaN(we)?0:Math.round(we*100)}const Ei=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return Ei.format(B/100)}function Et(B){return(B/100).toFixed(2)}function Te(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const Dr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Ir(B){return Dr.includes(B)}function Bi(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Or=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Mi(B){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},we="habu-theme",Q="habu-backup-dirty",de="habu-unexported-change-log",se="habu-last-backup-filename",be="habu-recurring-budget-defaults";let oe=null,he=null,Ze=null,je=null,ue=!1,dt=!1;const rt=new WeakMap;function Le(){const o=B.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const i=getComputedStyle(document.documentElement),p=i.getPropertyValue("--text-main").trim(),u=i.getPropertyValue("--text-muted").trim(),v=i.getPropertyValue("--table-stripe").trim(),$=i.getPropertyValue("--table-border").trim(),P=i.getPropertyValue("--budget-under").trim(),F=i.getPropertyValue("--danger-2").trim(),A=96,W=250,V=Y=>1-Math.pow(1-Math.max(0,Math.min(1,Y)),3);o.forEach(Y=>{Y.dataset.hoverBound!=="1"&&(Y.dataset.hoverBound="1",Y.addEventListener("mouseenter",()=>{Y.dataset.hovering="1",Le()}),Y.addEventListener("mouseleave",()=>{delete Y.dataset.hovering,delete Y.dataset.hoverX,Le()}),Y.addEventListener("mousemove",xe=>{const qe=Y.getBoundingClientRect(),Xe=Math.round(xe.clientX-qe.left);Y.dataset.hoverX=String(Xe),Le()}));const J=Number.parseInt(Y.dataset.budgetCents??"0",10),ie=Number.parseInt(Y.dataset.actualCents??"0",10),Ce=Y.dataset.label??"Kategorie",He=Y.dataset.hovering==="1",le=`${Ce}|${J}|${ie}`,We=Y.dataset.lastRenderSignature!==le;Y.dataset.lastRenderSignature=le;const Ke=Math.max(120,Math.floor(Y.clientWidth||120)),_e=window.devicePixelRatio||1,at=Math.floor(Ke*_e),Ft=Math.floor(A*_e);(Y.width!==at||Y.height!==Ft)&&(Y.width=at,Y.height=Ft);const K=Y.getContext("2d");if(!K)return;const St=Math.max(1,J,ie),gt=Math.min(1,Math.max(0,J/St)),rn=Math.min(1,Math.max(0,ie/St)),bt=J-ie,ye=J>0?ie/J*100:ie>0?100:0,Rt=8,Ne=Rt,ze=34,Je=Ke-Rt*2,tt=22,nt=Number.parseInt(Y.dataset.hoverX??"-1",10),Ut=(xe,qe,Xe,Pe,Ve)=>{K.beginPath(),K.moveTo(xe+Ve,qe),K.lineTo(xe+Xe-Ve,qe),K.quadraticCurveTo(xe+Xe,qe,xe+Xe,qe+Ve),K.lineTo(xe+Xe,qe+Pe-Ve),K.quadraticCurveTo(xe+Xe,qe+Pe,xe+Xe-Ve,qe+Pe),K.lineTo(xe+Ve,qe+Pe),K.quadraticCurveTo(xe,qe+Pe,xe,qe+Pe-Ve),K.lineTo(xe,qe+Ve),K.quadraticCurveTo(xe,qe,xe+Ve,qe),K.closePath()},Dt=xe=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,Y.width,Y.height),K.scale(_e,_e),Ut(Ne,ze,Je,tt,8),K.fillStyle=v,K.fill(),K.strokeStyle=$,K.lineWidth=1,K.stroke();const qe=[.6,.25,.15],Xe=[.1,.16,.24];let Pe=0;qe.forEach((Ie,re)=>{const ot=Je*Ie;K.save(),K.globalAlpha=Xe[re]??.1,K.fillStyle=u,K.fillRect(Ne+Pe,ze,ot,tt),K.restore(),Pe+=ot});const Ve=J>0&&ie>J?F:P,on=Je*rn*xe;Ut(Ne,ze+3,on,tt-6,6),K.fillStyle=Ve,K.fill(),He&&(K.save(),K.strokeStyle=Ve,K.lineWidth=1.5,K.globalAlpha=.8,Ut(Ne-1,ze+2,Math.max(2,on+2),tt-4,7),K.stroke(),K.restore());const Ae=Ne+Je*gt;K.strokeStyle=p,K.lineWidth=He?3:2,K.beginPath(),K.moveTo(Ae,ze-3),K.lineTo(Ae,ze+tt+3),K.stroke(),He&&nt>=Ne&&nt<=Ne+Je&&(K.save(),K.strokeStyle=p,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(nt,ze-8),K.lineTo(nt,ze+tt+8),K.stroke(),K.restore()),K.fillStyle=p,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(Ce,Ne,10);const ln=ye*xe;if(K.fillStyle=ye>100?F:ye<100?P:u,K.textAlign="right",K.fillText(`${ln.toFixed(0)}%`,Ne+Je,10),K.fillStyle=u,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${f(ie)} · Ziel ${f(J)} · Δ ${bt>=0?"+":""}${f(bt)}`,Ne,64),He){const Ie=`Nutzung ${ye.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const re=8,ot=5,_t=22,Ht=K.measureText(Ie).width+re*2,kn=Number.isFinite(nt)?nt-Ht/2:Ne+Je-Ht,Yt=Math.min(Ne+Je-Ht,Math.max(Ne,kn)),lt=ze-_t-8;K.save(),K.fillStyle=p,K.globalAlpha=.92,Ut(Yt,lt,Ht,_t,6),K.fill(),K.restore(),K.fillStyle=v,K.textAlign="left",K.textBaseline="top",K.fillText(Ie,Yt+re,lt+ot)}},Lt=rt.get(Y);if(Lt&&window.cancelAnimationFrame(Lt),!We){Dt(1);return}const Nt=performance.now(),et=xe=>{const qe=xe-Nt,Xe=Math.min(1,qe/W);if(Dt(V(Xe)),Xe<1){const Pe=window.requestAnimationFrame(et);rt.set(Y,Pe);return}rt.delete(Y)},jt=window.requestAnimationFrame(et);rt.set(Y,jt)})}function xt(){B.querySelectorAll("[data-year-trend-chart]").forEach(i=>{const p=Array.from(i.querySelectorAll("[data-year-trend-point]"));if(p.length===0)return;const u=i.querySelector("[data-year-trend-active-month]"),v=i.querySelector("[data-year-trend-active-net]"),$=i.querySelector("[data-year-trend-active-income]"),P=i.querySelector("[data-year-trend-active-expense]"),F=i.querySelector("[data-year-trend-active-delta]"),A=i.querySelector("[data-year-trend-live]");if(!u||!v||!$||!P||!F)return;const W=(J,ie)=>{J.classList.remove("danger","budget-under");const Ce=ie<0?"danger":ie>0?"budget-under":"";Ce&&J.classList.add(Ce)},V=J=>{const ie=J.dataset.monthLabel??"-",Ce=Number.parseInt(J.dataset.netCents??"0",10),He=Number.parseInt(J.dataset.actualNetCents??"0",10),le=Number.parseInt(J.dataset.incomeCents??"0",10),We=Number.parseInt(J.dataset.expenseCents??"0",10),Ke=Number.parseInt(J.dataset.deltaCents??"0",10);u.textContent=ie,v.textContent=f(Ce),$.textContent=f(le),P.textContent=f(We),F.textContent=`${Ke>=0?"+":""}${f(Ke)}`,W(v,Ce),W(F,Ke),p.forEach(_e=>{const at=_e===J;_e.classList.toggle("is-active",at),_e.setAttribute("aria-pressed",String(at))}),A&&(A.textContent=`${ie}: Kalkulierter Saldo ${f(Ce)}, Ist-Saldo ${f(He)}, Einkommen ${f(le)}, Ausgaben ${f(We)}`)};p.forEach(J=>{const ie=()=>{V(J)};J.addEventListener("mouseenter",ie),J.addEventListener("focus",ie),J.addEventListener("click",ie)});const Y=p.find(J=>J.dataset.pointDefault==="1")??p[p.length-1];Y&&V(Y)})}function en(o){if(o==="dashboard"){const i=h.years.slice().sort((u,v)=>v.year-u.year);i.some(u=>u.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??i[0]?.year??null)}h.topModal=o,te()}function qn(){h.topModal&&(h.topModal=null,te())}function tn(){h.showUnexportedChangeLogModal=!0,te()}function kt(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,te())}function ht(){h.showPersistentAuditLogModal=!0,te()}function wt(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,te())}function Gt(){ue||(ue=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),kt();return}if(h.showPersistentAuditLogModal){o.preventDefault(),wt();return}h.topModal&&(o.preventDefault(),qn())}}))}function ft(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const i=o/6;return window.scrollY>i}function vt(){const o=B.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",ft())}function Bs(){if(dt)return;dt=!0;const o=()=>{vt(),Le()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function La(){if(oe&&document.body.contains(oe))return oe;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return oe=o,o;const i=document.createElement("div");return i.id="toast-root",i.className="toast-root",i.setAttribute("aria-live","polite"),i.setAttribute("aria-atomic","true"),document.body.appendChild(i),oe=i,i}function Za(){if(he&&document.body.contains(he))return he;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return he=o,o;const i=document.createElement("div");return i.id="amount-modal-root",document.body.appendChild(i),he=i,i}function aa(){if(je&&document.body.contains(je))return je;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return je=o,o;const i=document.createElement("div");return i.id="weekly-shopping-modal-root",document.body.appendChild(i),je=i,i}function $t(){if(!he){Ze=null;return}he.innerHTML="",Ze=null}function sa(){je&&(je.innerHTML="")}function Na(o,i,p){const u=new Date,v=u.getFullYear(),$=u.getMonth()+1,P=u.getDate(),F=new Date(o,i,0).getDate();if(o<v||o===v&&i<$)return{occurrences:0,remainingDays:0};const A=o===v&&i===$?Math.min(P,F):1,W=Math.max(0,F-A+1);let V=0;for(let Y=A;Y<=F;Y+=1)new Date(o,i-1,Y).getDay()===p&&(V+=1);return{occurrences:V,remainingDays:W}}async function Ka(o,i){const p=Ee();p&&(p.weeklyShoppingWeekday=o,p.weeklyShoppingEstimateCents=Math.max(0,i),await Ye(`Wocheneinkauf geplant: ${Or.find(u=>u.value===o)?.label??"Wochentag"} mit ${f(p.weeklyShoppingEstimateCents)} €`),te())}function Ms(){const o=Ee(),i=Yn();if(!o||!i)return;const p=aa();sa();const u=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,v=o.weeklyShoppingEstimateCents??0,$=i.year,P=o.month,F=Bt($,P),A=F?Vt(F):{foodCents:0},W=F?F.foodBudgetCents??0:0,V=A.foodCents,Y=W-V;p.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Or.map(ye=>`<option value="${ye.value}" ${ye.value===u?"selected":""}>${ye.label}</option>`).join("")}
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
    `;const J=p.querySelector(".weekly-shopping-modal-backdrop"),ie=p.querySelector("#weekly-shopping-weekday"),Ce=p.querySelector("#weekly-shopping-estimate"),He=p.querySelector("#weekly-shopping-occurrences"),le=p.querySelector("#weekly-shopping-total"),We=p.querySelector("#weekly-shopping-rest-before"),Ke=p.querySelector("#weekly-shopping-rest-after"),_e=p.querySelector("#weekly-shopping-days-left"),at=p.querySelector("#weekly-shopping-per-day"),Ft=p.querySelector("#weekly-shopping-cancel"),K=p.querySelector("#weekly-shopping-save");function St(){const ye=Number.parseInt(ie?.value??"1",10);return Number.isInteger(ye)&&ye>=0&&ye<=6?ye:1}function gt(){return Math.max(0,Fe(Ce?.value??"0"))}function rn(){const ye=St(),Rt=gt(),{occurrences:Ne,remainingDays:ze}=Na($,P,ye),Je=Ne*Rt,tt=Y-Je,nt=ze>0?Math.trunc(tt/ze):0;He&&(He.textContent=`${Ne}`),le&&(le.textContent=`${f(Je)} €`),We&&(We.textContent=`${f(Y)} €`),Ke&&(Ke.textContent=`${f(tt)} €`,Ke.className=tt<0?"danger":tt>0?"budget-under":""),_e&&(_e.textContent=`${ze}`),at&&(at.textContent=`${f(nt)} €`,at.className=nt<0?"danger":nt>0?"budget-under":"")}async function bt(){await Ka(St(),gt()),sa()}Ft?.addEventListener("click",()=>{sa()}),K?.addEventListener("click",async()=>{await bt()}),ie?.addEventListener("change",()=>{rn()}),Ce?.addEventListener("input",()=>{rn()}),Ce?.addEventListener("keydown",async ye=>{if(ye.key==="Escape"){ye.preventDefault(),sa();return}ye.key==="Enter"&&(ye.preventDefault(),await bt())}),J?.addEventListener("click",ye=>{ye.target===J&&sa()}),window.setTimeout(()=>{Ce?.focus(),Ce?.select(),rn()},0)}function dn(o,i){let p=o;const u=i.min;if(u){const $=Number.parseFloat(u);if(!Number.isNaN($)){const P=Math.round($*100);p=Math.max(p,P)}}const v=i.max;if(v){const $=Number.parseFloat(v);if(!Number.isNaN($)){const P=Math.round($*100);p=Math.min(p,P)}}return p}function it(o){if(o.disabled)return;const i=Za();$t(),Ze=o;const p=Fe(o.value||"0"),u="Betrag anpassen";i.innerHTML=`
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
    `;const v=i.querySelector(".amount-modal-backdrop"),$=i.querySelector("#amount-modal-delta"),P=i.querySelector("#amount-modal-next-delta"),F=i.querySelector("#amount-modal-next-overwrite"),A=i.querySelector("#amount-modal-cancel"),W=i.querySelector("#amount-modal-overwrite"),V=i.querySelector("#amount-modal-apply");function Y(){const le=Fe($?.value??"0");return dn(p+le,o)}function J(){const le=Fe($?.value??"0");return dn(le,o)}function ie(){P&&(P.textContent=`${f(Y())} €`),F&&(F.textContent=`${f(J())} €`)}function Ce(){const le=Ze;if(!le){$t();return}const We=Y();$t(),le.value=Et(We),le.dispatchEvent(new Event("change",{bubbles:!0}))}function He(){const le=Ze;if(!le){$t();return}const We=J();$t(),le.value=Et(We),le.dispatchEvent(new Event("change",{bubbles:!0}))}A?.addEventListener("click",()=>{$t()}),W?.addEventListener("click",()=>{He()}),V?.addEventListener("click",()=>{Ce()}),$?.addEventListener("input",()=>{ie()}),$?.addEventListener("keydown",le=>{if(le.key==="Escape"){le.preventDefault(),$t();return}le.key==="Enter"&&(le.preventDefault(),Ce())}),v?.addEventListener("click",le=>{le.target===v&&$t()}),window.setTimeout(()=>{$?.focus(),$?.select(),ie()},0)}function ne(o,i="success"){const p=La(),u=document.createElement("div");u.className=`toast toast-${i}`,u.textContent=o,p.appendChild(u),requestAnimationFrame(()=>{u.classList.add("toast-visible")});const v=i==="error"?5e3:3e3;window.setTimeout(()=>{u.classList.remove("toast-visible"),window.setTimeout(()=>{u.remove()},220)},v)}function nn(){return new Date().getMonth()+1}function At(){return new Date().getFullYear()}function es(o){const i=At(),p=o.find(u=>u.year===i);return p?p.year:o[0]?.year??null}function En(){return new Date().toISOString().slice(0,10)}function ts(){const o=new Date,i=String(o.getHours()).padStart(2,"0"),p=String(o.getMinutes()).padStart(2,"0"),u=String(o.getSeconds()).padStart(2,"0");return`${i}${p}${u}`}function mt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Vn(){const o=localStorage.getItem(we);return o&&Ir(o)?o:"light"}function xa(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(we,o)}function _s(){return localStorage.getItem(Q)==="1"}function ee(o){localStorage.setItem(Q,o?"1":"0")}function ns(){const o=localStorage.getItem(de);if(!o)return[];try{const i=JSON.parse(o);return Array.isArray(i)?i.filter(p=>{if(!p||typeof p!="object")return!1;const u=p;return typeof u.id=="string"&&typeof u.timestampIso=="string"&&typeof u.message=="string"}).slice(-200):[]}catch{return[]}}function $e(o){localStorage.setItem(de,JSON.stringify(o.slice(-200)))}function ra(){const o=localStorage.getItem(se);if(!o)return null;const i=o.trim();return i||null}function Ts(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},i=localStorage.getItem(be);if(!i)return o;try{const p=JSON.parse(i),u=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:u(p.foodBudgetCents),goingOutBudgetCents:u(p.goingOutBudgetCents),fixedBudgetCents:u(p.fixedBudgetCents),variableBudgetCents:u(p.variableBudgetCents),miscBudgetCents:u(p.miscBudgetCents)}}catch{return o}}function Bn(o){localStorage.setItem(be,JSON.stringify(o))}function as(o){o.months.forEach(i=>{const{recurringBudgetDefaults:p}=h;typeof p.foodBudgetCents=="number"&&(i.foodBudgetCents=p.foodBudgetCents),typeof p.goingOutBudgetCents=="number"&&(i.goingOutBudgetCents=p.goingOutBudgetCents),typeof p.fixedBudgetCents=="number"&&(i.fixedBudgetCents=p.fixedBudgetCents),typeof p.variableBudgetCents=="number"&&(i.variableBudgetCents=p.variableBudgetCents),typeof p.miscBudgetCents=="number"&&(i.miscBudgetCents=p.miscBudgetCents)})}function Ps(o){const i=o.trim();i&&localStorage.setItem(se,i)}async function ss(){if(h.savedSearchEvaluations.length===0)return;const o=At(),i=nn(),p=h.savedSearchEvaluations.map(u=>({...Tr(h.years,u.keyword,o,i),id:u.id,createdAt:u.createdAt}));h.savedSearchEvaluations=p,await Ss(p)}async function As(){La(),xa(Vn()),h.hasUnexportedChanges=_s(),h.unexportedChangeLog=ns(),h.persistentAuditLog=await Hs(),h.lastBackupFileName=ra(),h.recurringBudgetDefaults=Ts(),Gt(),Bs();const[o,i,p,u]=await Promise.all([Ca(),Ys(),Ws(),Us()]);h.years=o,h.annualVariableFixedTemplates=p.templates,h.annualVariableFixedTemplateVersion=p.version,ia(h.years),ua(h.years),h.fixedTemplates=i.templates,h.fixedTemplateVersion=i.version,h.savedSearchEvaluations=u.results,await jn(h.years),await ss(),o.length>0&&(h.selectedYear=es(o),h.selectedMonth=nn()),te()}function ia(o){const i=p=>p==="balance"||p==="fresh"||p==="salary"?p:void 0;o.forEach(p=>{p.months.forEach(u=>{if(u.weeklyShoppingWeekday!==null&&u.weeklyShoppingWeekday!==void 0){const v=Number(u.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?u.weeklyShoppingWeekday=v:u.weeklyShoppingWeekday=null}else u.weeklyShoppingWeekday=null;typeof u.weeklyShoppingEstimateCents!="number"&&(u.weeklyShoppingEstimateCents=0),typeof u.foodBudgetCents!="number"&&(u.foodBudgetCents=0),typeof u.goingOutBudgetCents!="number"&&(u.goingOutBudgetCents=0),Array.isArray(u.incomes)?u.incomes=u.incomes.map(v=>{const $=i(v.incomeSource);if(!$){const{incomeSource:P,...F}=v;return F}return{...v,incomeSource:$}}):u.incomes=[],typeof u.fixedBudgetCents!="number"&&(u.fixedBudgetCents=u.fixedCosts.reduce((v,$)=>v+$.plannedCents,0)),typeof u.variableBudgetCents!="number"&&(u.variableBudgetCents=u.variablePositions.reduce((v,$)=>v+$.budgetCents,0)),Array.isArray(u.variablePositions)||(u.variablePositions=[]),typeof u.miscBudgetCents!="number"&&(u.miscBudgetCents=0)})})}function It(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Rn(o){return o==="fresh"||o==="salary"||!o}async function jn(o){for(const i of o)await ya(i)}function Yn(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ee(){const o=Yn();if(o)return o.months.find(i=>i.month===h.selectedMonth)}function Bt(o,i){const p=h.years.find(u=>u.year===o);if(p)return p.months.find(u=>u.month===i)}function Vt(o){const i=o.days.reduce((F,A)=>F+A.foodCents,0),p=o.days.reduce((F,A)=>F+A.goingOutCents,0),u=o.fixedCosts.reduce((F,A)=>F+A.actualCents,0),v=o.variableCosts.reduce((F,A)=>F+A.amountCents,0)+o.variablePositions.reduce((F,A)=>F+A.actualCents,0),$=o.miscCosts.reduce((F,A)=>F+A.amountCents,0),P=i+p+u+v+$;return{foodCents:i,goingOutCents:p,fixedCents:u,variableCents:v,miscCents:$,totalCents:P}}function zn(o){const i=o.foodBudgetCents??0,p=o.goingOutBudgetCents??0,u=o.fixedBudgetCents??o.fixedCosts.reduce((P,F)=>P+F.plannedCents,0),v=o.variablePositions.reduce((P,F)=>P+F.budgetCents,0),$=o.miscBudgetCents??0;return i+p+u+(o.variableBudgetCents??v)+$}function hn(o){return o.months.reduce((i,p)=>{const u=Vt(p);return{foodCents:i.foodCents+u.foodCents,goingOutCents:i.goingOutCents+u.goingOutCents,fixedCents:i.fixedCents+u.fixedCents,variableCents:i.variableCents+u.variableCents,miscCents:i.miscCents+u.miscCents,totalCents:i.totalCents+u.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function qa(o){return o.months.slice().sort((i,p)=>i.month-p.month).map(i=>({month:i.month,summary:Vt(i)}))}function Wn(o){const i=o.months.reduce((P,F)=>P+(F.foodBudgetCents??0),0),p=o.months.reduce((P,F)=>P+(F.goingOutBudgetCents??0),0),u=o.months.reduce((P,F)=>P+(F.fixedBudgetCents??F.fixedCosts.reduce((A,W)=>A+W.plannedCents,0)),0),v=o.months.reduce((P,F)=>P+(F.variableBudgetCents??F.variablePositions.reduce((A,W)=>A+W.budgetCents,0)),0),$=o.months.reduce((P,F)=>P+(F.miscBudgetCents??0),0);return{foodCents:i,goingOutCents:p,fixedCents:u,variableCents:v,miscCents:$,totalCents:i+p+u+v+$}}function an(o){return o.months.reduce((i,p)=>i+p.incomes.reduce((u,v)=>u+(Rn(v.incomeSource)?v.amountCents:0),0),0)}function oa(o){return o.months.reduce((i,p)=>(p.incomes.forEach(u=>{if(u.incomeSource==="salary"){i.salaryIncomeCents+=u.amountCents;return}(u.incomeSource==="fresh"||u.incomeSource==null)&&(i.freshIncomeCents+=u.amountCents)}),i),{salaryIncomeCents:0,freshIncomeCents:0})}function la(o,i){const p=o.months.slice().sort((u,v)=>u.month-v.month)[0];return p?i.get(me(o.year,p.month))?.carriedFromPreviousCents??0:0}function pn(){const o=h.years.slice().sort((u,v)=>u.year-v.year).flatMap(u=>u.months.slice().sort((v,$)=>v.month-$.month).map(v=>({year:u.year,month:v}))),i=new Map;let p=0;return o.forEach(({year:u,month:v},$)=>{const P=v.carryoverOverrideCents,F=typeof P=="number",A=F?P:p,W=$>0||F,V=v.incomes.reduce((Ce,He)=>Ce+(Rn(He.incomeSource)?He.amountCents:0),0),Y=zn(v),J=V+A,ie=J-Y;i.set(me(u,v.month),{hasPreviousMonth:W,carriedFromPreviousCents:A,recordedIncomeCents:V,effectiveIncomeCents:J,plannedBudgetCents:Y,netCents:ie}),p=ie}),i}function H(o,i){return i<=0?"":o>i?"budget-over":o<i?"budget-under":""}function Gn(o){return`${o>0?"+":""}${f(o)}`}function Ot(o,i){const p=o-i,u=H(i,o);return`${f(o)} <span class="eval-diff ${u}">(Δ ${Gn(p)})</span>`}function fn(o,i){const p=o!==null,u=p?o-i:null,v=p?H(i,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${p?`${f(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(i)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${u===null?"-":`${f(u)} €`}</strong>
      </div>
    </div>`}async function z(o){if(await xi(o)){alert(`Jahr ${o} existiert bereits.`);return}const p=Mr(o,h.fixedTemplates,h.fixedTemplateVersion);as(p),ca(p),await ya(p),h.years=await Ca(),vn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=nn(),ne(`Jahr ${o} wurde angelegt.`),te()}function vn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const i=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",p=new Date().toISOString(),u=`${o} (${i})`,v={id:ut("change"),timestampIso:p,message:u};h.unexportedChangeLog=[...h.unexportedChangeLog,v].slice(-200),$e(h.unexportedChangeLog);const $={id:ut("audit"),timestampIso:p,message:u};h.persistentAuditLog=[...h.persistentAuditLog,$].slice().sort((P,F)=>P.timestampIso.localeCompare(F.timestampIso)),ki($).catch(P=>{console.error("Audit-Log konnte nicht gespeichert werden",P),ne("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function rs(o){const i=o.trim();i&&(h.lastBackupFileName=i,Ps(i))}function ka(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],$e([]),h.showUnexportedChangeLogModal=!1,rs(o)}async function Ye(o){const i=Yn();i&&(await ya(i),h.years=await Ca(),vn(o))}async function Mt(o){for(const i of h.years)await ya(i);h.years=await Ca(),vn(o)}function me(o,i){return o*100+i}function Un(o,i,p){const u=`${o} auf ${f(p)} € gesetzt`;return p>i?`${u} (erhöht um ${f(p-i)} €)`:p<i?`${u} (verringert um ${f(i-p)} €)`:u}function mn(o){const i=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!i)return null;const p=i[1],u=i[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function Mn(o,i){const p=mn(o.dueDateIso);if(!p||i.year<p.year)return;const u=i.months.find($=>$.month===p.month);!u||u.variablePositions.some($=>$.autoAnnualTemplateId===o.id)||(u.variablePositions=[{id:ut("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...u.variablePositions],Be(u))}function ca(o){h.annualVariableFixedTemplates.forEach(i=>{Mn(i,o)})}function ua(o){const i=new Set(h.annualVariableFixedTemplates.map(p=>p.id));o.forEach(p=>{p.months.forEach(u=>{const v=u.variablePositions.some(P=>typeof P.autoAnnualTemplateId=="string"),$=u.fixedCosts.some(P=>typeof P.autoAnnualTemplateId=="string");v&&(u.variablePositions=u.variablePositions.filter(P=>P.autoAnnualTemplateId?i.has(P.autoAnnualTemplateId):!0),Be(u)),$&&(u.fixedCosts=u.fixedCosts.filter(P=>!P.autoAnnualTemplateId),ge(u))}),ca(p)})}function ge(o){o.fixedBudgetCents=o.fixedCosts.reduce((i,p)=>i+p.plannedCents,0)}function Be(o){o.variableBudgetCents=o.variablePositions.reduce((i,p)=>i+p.budgetCents,0)}function Is(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function da(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Is());if(!o)return null;const i=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!i)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const p=i[1],u=i[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function wa(o,i){const p=me(i.year,i.month);h.years.forEach(u=>{u.months.forEach(v=>{if(me(u.year,v.month)<p)return;v.fixedCosts.some(P=>P.templateId===o.id)||(v.fixedCosts.push({id:ut("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),ge(v))})})}function $a(o,i,p){const u=me(p.year,p.month);h.years.forEach(v=>{v.months.forEach($=>{me(v.year,$.month)<u||($.fixedCosts=$.fixedCosts.map(P=>P.templateId!==i.id?P:{...P,name:i.name,plannedCents:i.plannedCents,actualCents:P.actualCents===o.plannedCents?i.plannedCents:P.actualCents}),ge($))})})}function Os(o,i){const p=me(i.year,i.month);h.years.forEach(u=>{u.months.forEach(v=>{me(u.year,v.month)<p||(v.fixedCosts=v.fixedCosts.filter($=>$.templateId!==o),ge(v))})})}async function gn(o,i){const p=o.trim();if(!p)return;const u=da();if(!u)return;const v=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const $=h.fixedTemplates.find(F=>F.id===h.editingFixedTemplateId);if(!$)return;const P={...$,name:p,plannedCents:i};h.fixedTemplates=h.fixedTemplates.map(F=>F.id===h.editingFixedTemplateId?P:F),$a($,P,u)}else{const $={id:ut("tpl"),name:p,plannedCents:i};h.fixedTemplates=[...h.fixedTemplates,$],wa($,u)}h.fixedTemplateVersion=await zs(h.fixedTemplates),h.editingFixedTemplateId=null,await Mt(v?`Fixkosten-Vorlage aktualisiert: ${p} (${f(i)} €)`:`Fixkosten-Vorlage hinzugefügt: ${p} (${f(i)} €)`),ne(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),te()}function Hn(o){h.editingFixedTemplateId=o,te()}function bn(){h.editingFixedTemplateId=null,te()}async function Sa(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const p=da();if(!p)return;const u=h.fixedTemplates.find(v=>v.id===o);h.fixedTemplates=h.fixedTemplates.filter(v=>v.id!==o),Os(o,p),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await zs(h.fixedTemplates),await Mt(`Fixkosten-Vorlage gelöscht: ${u?.name??"Unbekannt"}`),ne("Fixkosten-Vorlage wurde gelöscht."),te()}async function Fs(o,i,p){const u=o.trim();if(!u){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=mn(i);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(p<=0){alert("Bitte einen positiven Betrag eingeben.");return}const $={id:ut("annualtpl"),name:u,plannedCents:p,dueDateIso:i};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,$],h.years.forEach(P=>{Mn($,P)}),h.annualVariableFixedTemplateVersion=await Gs(h.annualVariableFixedTemplates),await Mt(`Variable Fixkosten-Vorlage hinzugefügt: ${u} (${f(p)} €, jährlich in ${Te(v.month)})`),ne("Variable Fixkosten-Vorlage wurde hinzugefügt."),te()}async function yn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const p=h.annualVariableFixedTemplates.find(u=>u.id===o);p&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(u=>u.id!==o),h.years.forEach(u=>{u.months.forEach(v=>{v.variablePositions=v.variablePositions.filter($=>$.autoAnnualTemplateId!==o),Be(v),v.fixedCosts=v.fixedCosts.filter($=>$.autoAnnualTemplateId!==o),ge(v)})}),h.annualVariableFixedTemplateVersion=await Gs(h.annualVariableFixedTemplates),await Mt(`Variable Fixkosten-Vorlage gelöscht: ${p.name}`),ne("Variable Fixkosten-Vorlage wurde gelöscht."),te())}async function Va(o,i,p){const u=Ee();if(!u)return;const $=u.days.find(P=>P.isoDate===o)?.[i]??0;u.days=u.days.map(P=>P.isoDate===o?{...P,[i]:p}:P),await Ye(Un(`${i==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,$,p)),te()}async function _n(o,i){const p=Ee();if(!p)return;const u=p.fixedCosts.find(v=>v.id===o);p.fixedCosts=p.fixedCosts.map(v=>v.id===o?{...v,actualCents:i}:v),await Ye(`Fixkosten-Ist angepasst: ${u?.name??"Unbekannt"} auf ${f(i)} €`),te()}async function is(o,i){const p=Ee();if(!p)return;const u=p.fixedCosts.find($=>$.id===o);if(!u)return;const v=u.plannedCents;p.fixedCosts=p.fixedCosts.map($=>$.id===o?{...$,plannedCents:i}:$),ge(p),await Ye(Un(`Fixkosten-Budget angepasst: ${u.name}`,v,i)),te()}async function Ra(o,i){const p=Ee();if(!p)return;const u=o.trim();if(!u){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(i<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:ut("fixed"),templateId:ut("fixed-local"),name:u,plannedCents:i,actualCents:0};p.fixedCosts=[v,...p.fixedCosts],ge(p),await Ye(`Fixkosten-Position hinzugefügt: ${u} (${f(i)} €)`),ne("Fixkosten-Position wurde hinzugefügt."),te()}async function Ue(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const p=Ee();if(!p)return;const u=p.fixedCosts.find(v=>v.id===o);u&&(p.fixedCosts=p.fixedCosts.filter(v=>v.id!==o),ge(p),await Ye(`Fixkosten-Position gelöscht: ${u.name}`),ne("Fixkosten-Position wurde gelöscht."),te())}async function Tn(){const o=Ee();if(!o)return;if(o.fixedCosts.length===0){ne("Keine Fixkosten zum Löschen vorhanden.","error");return}if(!confirm("Alle Fixkosten im aktuellen Monat wirklich löschen?"))return;const p=o.fixedCosts.length;o.fixedCosts=[],ge(o),await Ye(`Alle Fixkosten im Monat gelöscht: ${p} Position(en)`),ne(`${p} Fixkosten-Position(en) wurden gelöscht.`),te()}async function sn(o){await Pn("fixedBudgetCents",o,"Fixkosten")}async function os(o){await Pn("foodBudgetCents",o,"Essen")}async function Jn(o){await Pn("goingOutBudgetCents",o,"Ausgehen")}async function Ea(o){await Pn("miscBudgetCents",o,"Sonstiges")}async function ja(o){await Pn("variableBudgetCents",o,"Variable Kosten")}async function Pn(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v||u[o]===i)return;const $=u[o];if(u[o]=i,confirm(`Soll das Budget "${p}" auch für zukünftige Monate übernommen werden?`)){const F=me(v,h.selectedMonth);h.years.forEach(W=>{W.months.forEach(V=>{me(W.year,V.month)<=F||(V[o]=i)})}),h.recurringBudgetDefaults[o]=i,Bn(h.recurringBudgetDefaults);const A=Un(`Budget "${p}"`,$??0,i);await Mt(`${A} (inkl. zukünftiger Monate)`),ne(`Budget "${p}" wurde für zukünftige Monate übernommen.`),te();return}await Ye(Un(`Budget "${p}"`,$??0,i)),te()}async function Cn(o){const i=Ee();i&&(o===null?i.carryoverOverrideCents=null:i.carryoverOverrideCents=o,await Ye(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(o)} € gesetzt`),te())}async function Ya(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v)return;const $=o.trim();if(!$){alert("Bitte Bezeichnung für die Position angeben.");return}if(u.variablePositions=[{id:ut("varpos"),name:$,budgetCents:i,actualCents:0},...u.variablePositions],Be(u),p){const P=me(v,h.selectedMonth);h.years.forEach(F=>{F.months.forEach(A=>{me(F.year,A.month)<=P||(A.variablePositions=[{id:ut("varpos"),name:$,budgetCents:i,actualCents:0},...A.variablePositions],Be(A))})}),await Mt(`Variable Position hinzugefügt: ${$} (${f(i)} €) für zukünftige Monate`),ne("Variable Position wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Variable Position hinzugefügt: ${$} (${f(i)} €)`),ne("Variable Position wurde hinzugefügt."),te()}async function Ba(o,i){const p=Ee();if(!p)return;const u=p.variablePositions.find($=>$.id===o),v=u?.actualCents??0;p.variablePositions=p.variablePositions.map($=>$.id===o?{...$,actualCents:i}:$),await Ye(Un(`Istwert Variable Position angepasst: ${u?.name??"Unbekannt"}`,v,i)),te()}async function ls(o,i){const p=Ee();if(!p)return;const u=p.variablePositions.find($=>$.id===o),v=u?.budgetCents??0;p.variablePositions=p.variablePositions.map($=>$.id===o?{...$,budgetCents:i}:$),Be(p),await Ye(Un(`Budget Variable Position angepasst: ${u?.name??"Unbekannt"}`,v,i)),te()}async function pe(o){if(!confirm("Variable Position wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.variablePositions.find(A=>A.id===o);if(!v)return;const $=me(u,h.selectedMonth),F=h.years.some(A=>A.months.some(W=>me(A.year,W.month)>$&&W.variablePositions.some(V=>V.name===v.name&&V.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.variablePositions=p.variablePositions.filter(A=>A.id!==o),Be(p),F){h.years.forEach(A=>{A.months.forEach(W=>{me(A.year,W.month)<=$||(W.variablePositions=W.variablePositions.filter(V=>!(V.name===v.name&&V.budgetCents===v.budgetCents)),Be(W))})}),await Mt(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),ne("Variable Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Variable Position gelöscht: ${v.name}`),ne("Variable Position wurde gelöscht."),te()}async function cs(o){const i=Ee(),p=h.selectedYear;if(!i||!p)return;const u=i.variablePositions.find(V=>V.id===o);if(!u)return;const v={year:h.selectedMonth===12?p+1:p,month:h.selectedMonth===12?1:h.selectedMonth+1};let $=h.years.find(V=>V.year===v.year);if(!$){const V=Mr(v.year,h.fixedTemplates,h.fixedTemplateVersion);as(V),ca(V),await ya(V),h.years=[...h.years,V].sort((Y,J)=>Y.year-J.year),$=V}const P=$.months.find(V=>V.month===v.month);if(!P)return;const F=P.variablePositions.some(V=>V.id===u.id||V.name===u.name&&V.budgetCents===u.budgetCents);if(i.variablePositions=i.variablePositions.filter(V=>V.id!==o),Be(i),!F){const Y=P.variablePositions.some(J=>J.id===u.id)?{...u,id:ut("varpos")}:u;P.variablePositions=[Y,...P.variablePositions],Be(P)}const A=`${Te(v.month)} ${v.year}`,W=`Variable Position verschoben: ${u.name} → ${A}`;if(v.year===p)await Ye(W);else{const V=Yn();if(!V)return;await ya(V),await ya($),h.years=await Ca(),ia(h.years),vn(W)}ne(F?`Position entfernt (im Folgemonat schon vorhanden: ${A}).`:`Position in den Folgemonat verschoben: ${A}.`),te()}async function za(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v)return;const $=o.trim();if(!$){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(i<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P=Rs($,i);if(u.miscCosts=[P,...u.miscCosts],p){const F=me(v,h.selectedMonth);h.years.forEach(A=>{A.months.forEach(W=>{me(A.year,W.month)<=F||(W.miscCosts=[Rs($,i),...W.miscCosts])})}),await Mt(`Sonstige Position hinzugefügt: ${$} (${f(i)} €) für zukünftige Monate`),ne("Sonstige Position wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Sonstige Position hinzugefügt: ${$} (${f(i)} €)`),ne("Sonstige Position wurde hinzugefügt."),te()}function Xn(o){const i=[];let p="",u=!1;for(let v=0;v<o.length;v+=1){const $=o[v],P=o[v+1];if($==='"'){u&&P==='"'?(p+='"',v+=1):u=!u;continue}if($===";"&&!u){i.push(p.trim()),p="";continue}p+=$}return i.push(p.trim()),i}async function ha(o){const i=Ee();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const v=new Set(i.miscCosts.map(A=>`${A.description}__${A.amountCents}`));let $=0,P=0,F=0;if(u.forEach(A=>{const W=Xn(A);if(W.length!==2){F+=1;return}const V=W[0]?.trim()??"",Y=W[1]?.trim()??"",J=Fe(Y);if(!V||J<=0){F+=1;return}const ie=`${V}__${J}`;if(v.has(ie)){P+=1;return}i.miscCosts.push(Rs(V,J)),v.add(ie),$+=1}),$===0){const A=F>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${F}).`:"Keine Position importiert.";ne(A,"error");return}await Ye(`Sonstiges CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${F}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${F} ungültig.`),te()}async function us(o){const i=Ee();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const v=new Set(i.fixedCosts.map(A=>`${A.name}__${A.plannedCents}__${A.actualCents}`));let $=0,P=0,F=0;if(u.forEach(A=>{const W=Xn(A);if(W.length!==2){F+=1;return}const V=W[0]?.trim()??"",Y=W[1]?.trim()??"",J=Fe(Y);if(!V||J<=0){F+=1;return}const ie=`${V}__${J}__${J}`;if(v.has(ie)){P+=1;return}i.fixedCosts.push({id:ut("fixed"),templateId:ut("fixed-local"),name:V,plannedCents:J,actualCents:J}),v.add(ie),$+=1}),$===0){const A=F>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${F}).`:"Keine Position importiert.";ne(A,"error");return}ge(i),await Ye(`Fixkosten CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${F}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${F} ungültig.`),te()}async function ds(o){const i=Ee();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const v=new Set(i.variablePositions.map(A=>`${A.name}__${A.budgetCents}__${A.actualCents}`));let $=0,P=0,F=0;if(u.forEach(A=>{const W=Xn(A);if(W.length!==2){F+=1;return}const V=W[0]?.trim()??"",Y=W[1]?.trim()??"",J=Fe(Y);if(!V||J<=0){F+=1;return}const ie=`${V}__${J}__${J}`;if(v.has(ie)){P+=1;return}i.variablePositions.push({id:ut("varpos"),name:V,budgetCents:J,actualCents:J}),v.add(ie),$+=1}),$===0){const A=F>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${F}).`:"Keine Position importiert.";ne(A,"error");return}Be(i),await Ye(`Variable CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${F}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${F} ungültig.`),te()}async function hs(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.miscCosts.find(A=>A.id===o);if(!v)return;const $=me(u,h.selectedMonth),F=h.years.some(A=>A.months.some(W=>me(A.year,W.month)>$&&W.miscCosts.some(V=>V.description===v.description&&V.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.miscCosts=p.miscCosts.filter(A=>A.id!==o),F){h.years.forEach(A=>{A.months.forEach(W=>{me(A.year,W.month)<=$||(W.miscCosts=W.miscCosts.filter(V=>!(V.description===v.description&&V.amountCents===v.amountCents)))})}),await Mt(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),ne("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €)`),ne("Sonstige Position wurde gelöscht."),te()}async function Me(o,i,p,u){const v=Ee(),$=h.selectedYear;if(!v||!$)return;const P=o.trim();if(!P){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(i<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const F=_r(P,i,p);if(v.incomes=[F,...v.incomes],u){const A=me($,h.selectedMonth);h.years.forEach(W=>{W.months.forEach(V=>{me(W.year,V.month)<=A||(V.incomes=[_r(P,i,p),...V.incomes])})}),await Mt(`Einkommen hinzugefügt: ${P} (${f(i)} €, ${It(p)}) für zukünftige Monate`),ne("Einkommen wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Einkommen hinzugefügt: ${P} (${f(i)} €, ${It(p)})`),ne("Einkommen wurde hinzugefügt."),te()}async function pa(o,i){const p=Ee();if(!p)return;const u=p.incomes.find(v=>v.id===o);u&&(p.incomes=p.incomes.map(v=>{if(v.id!==o)return v;if(!i){const{incomeSource:$,...P}=v;return P}return{...v,incomeSource:i}}),await Ye(`Einkommensart angepasst: ${u.description} → ${It(i)}`),te())}async function fa(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.incomes.find(A=>A.id===o);if(!v)return;const $=me(u,h.selectedMonth),F=h.years.some(A=>A.months.some(W=>me(A.year,W.month)>$&&W.incomes.some(V=>V.description===v.description&&V.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.incomes=p.incomes.filter(A=>A.id!==o),F){h.years.forEach(A=>{A.months.forEach(W=>{me(A.year,W.month)<=$||(W.incomes=W.incomes.filter(V=>!(V.description===v.description&&V.amountCents===v.amountCents)))})}),await Mt(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),ne("Einkommen wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €)`),ne("Einkommen wurde gelöscht."),te()}async function An(){const o=await $i(),i=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),p=URL.createObjectURL(i),u=`haushaltsbuch-backup-${En()}-${ts()}.json`,v=document.createElement("a");v.href=p,v.download=u,v.click(),URL.revokeObjectURL(p),ka(u),te(),ne("Backup wurde exportiert.")}async function Wa(o){const i=await o.text(),p=JSON.parse(i);await Si(p);const[u,v,$,P]=await Promise.all([Ca(),Ys(),Ws(),Us()]);h.years=u,h.annualVariableFixedTemplates=$.templates,h.annualVariableFixedTemplateVersion=$.version,ia(h.years),ua(h.years),h.fixedTemplates=v.templates,h.fixedTemplateVersion=v.version,h.savedSearchEvaluations=P.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await jn(h.years),await ss(),h.persistentAuditLog=await Hs(),h.selectedYear=es(u),h.selectedMonth=nn(),ka(o.name),ne("Backup wurde importiert."),te()}function Ma(o){h.evaluationQuery=o,h.evaluationCurrentResult=Tr(h.years,o,At(),nn()),te()}async function _a(){const o=h.evaluationCurrentResult;if(!o||!o.keywordNormalized){ne("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const i=h.savedSearchEvaluations.findIndex(p=>p.id===o.id);i>=0?h.savedSearchEvaluations[i]=o:h.savedSearchEvaluations=[o,...h.savedSearchEvaluations],await Ss(h.savedSearchEvaluations),vn(`Auswertung gespeichert: ${o.keyword}`),ne(`Auswertung "${o.keyword}" wurde gespeichert.`),te()}async function ps(o){const i=h.savedSearchEvaluations.find(p=>p.id===o);i&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(p=>p.id!==o),await Ss(h.savedSearchEvaluations),vn(`Auswertung gelöscht: ${i.keyword}`),ne(`Gespeicherte Auswertung "${i.keyword}" wurde gelöscht.`),te())}function te(){const o=Yn(),i=Ee(),p=En(),u=i?Vt(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=o?hn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},$=o?qa(o):[],P=i?i.foodBudgetCents??0:0,F=i?i.goingOutBudgetCents??0:0,A=i?i.fixedBudgetCents??i.fixedCosts.reduce((n,m)=>n+m.plannedCents,0):0,W=i?i.variableBudgetCents??i.variablePositions.reduce((n,m)=>n+m.budgetCents,0):0,V=i?i.miscBudgetCents??0:0,Y=o?o.months.reduce((n,m)=>n+(m.foodBudgetCents??0),0):0,J=o?o.months.reduce((n,m)=>n+(m.goingOutBudgetCents??0),0):0,ie=o?o.months.reduce((n,m)=>n+(m.fixedBudgetCents??m.fixedCosts.reduce((q,Z)=>q+Z.plannedCents,0)),0):0,Ce=o?o.months.reduce((n,m)=>n+(m.variableBudgetCents??m.variablePositions.reduce((q,Z)=>q+Z.budgetCents,0)),0):0,He=o?o.months.reduce((n,m)=>n+(m.miscBudgetCents??0),0):0,le=i?i.incomes.reduce((n,m)=>n+(Rn(m.incomeSource)?m.amountCents:0),0):0,We=i?i.incomes.reduce((n,m)=>n+(m.incomeSource==="salary"?m.amountCents:0),0):0,Ke=i?i.incomes.reduce((n,m)=>n+(m.incomeSource==="fresh"?m.amountCents:0),0):0,_e=pn(),at=o?_e.get(me(o.year,h.selectedMonth)):void 0,Ft=o?o.months.slice().sort((n,m)=>n.month-m.month)[0]:void 0,K=at?.carriedFromPreviousCents??0,St=at?.hasPreviousMonth??!1,gt=at?.effectiveIncomeCents??le,rn=i?zn(i):0,bt=at?.netCents??le-rn,ye=gt-u.totalCents,Rt=We-u.totalCents,Ne=u.totalCents>0?`${(We/u.totalCents*100).toFixed(1)} %`:"-",ze=K<0?"danger":K>0?"budget-under":"",Je=bt<0?"danger":bt>0?"budget-under":"",tt=ye<0?"danger":ye>0?"budget-under":"",nt=o?o.months.reduce((n,m)=>n+m.incomes.reduce((q,Z)=>q+(Rn(Z.incomeSource)?Z.amountCents:0),0),0):0,Ut=o?o.months.reduce((n,m)=>n+m.incomes.reduce((q,Z)=>q+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,Dt=o?o.months.reduce((n,m)=>n+m.incomes.reduce((q,Z)=>q+(Z.incomeSource==="fresh"?Z.amountCents:0),0),0):0,Lt=o&&Ft?_e.get(me(o.year,Ft.month))?.carriedFromPreviousCents??0:0,Nt=nt+Lt;Nt-v.totalCents,Ut-v.totalCents,v.totalCents>0&&`${(Ut/v.totalCents*100).toFixed(1)}`;const et=P+F+A+W+V,jt=P+F,xe=u.foodCents+u.goingOutCents,qe=jt-xe,Xe=H(xe,jt),Pe=Y+J+ie+Ce+He,Ve=le-et,on=et-u.totalCents;Pe-v.totalCents;const Ae=n=>n<0?"danger":n>0?"budget-under":"",ln=(n,m)=>m<=0?"muted":n>=m?"budget-under":"danger",Ie=ln(We,u.totalCents);ln(Ut,v.totalCents);const re=(n,m)=>{if(m<=0)return"0%";const Z=Math.max(0,n)/m*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},ot=(n,m)=>{if(m<=0)return n>0?100:0;const q=Math.max(0,n)/m*100;return Math.max(0,q)},_t=[{label:"Essen",budgetCents:P,actualCents:u.foodCents},{label:"Ausgehen",budgetCents:F,actualCents:u.goingOutCents},{label:"Fixkosten",budgetCents:A,actualCents:u.fixedCents},{label:"Variable",budgetCents:W,actualCents:u.variableCents},{label:"Sonstige",budgetCents:V,actualCents:u.miscCents}];Math.max(1,..._t.flatMap(n=>[n.budgetCents,n.actualCents]));const xn=(n,m)=>m<=0?"bar-positive":n<=0||m>n?"bar-negative":"bar-positive",Ht=[{label:"Einkommen gesamt",valueCents:gt,className:"bar-income"},{label:"Budget gesamt",valueCents:et,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:u.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ye,className:ye<0?"bar-negative":"bar-positive"}],kn=Math.max(1,...Ht.map(n=>Math.abs(n.valueCents))),Yt=o?o.months.slice().sort((n,m)=>n.month-m.month).map(n=>{const m=n.foodBudgetCents??0,q=n.goingOutBudgetCents??0,Z=n.fixedBudgetCents??n.fixedCosts.reduce((Zt,Sn)=>Zt+Sn.plannedCents,0),Se=n.variableBudgetCents??n.variablePositions.reduce((Zt,Sn)=>Zt+Sn.budgetCents,0),Qe=n.miscBudgetCents??0,Ct=m+q+Z+Se+Qe;return{month:n.month,foodBudgetCents:m,goingOutBudgetCents:q,fixedBudgetCents:Z,variableBudgetCents:Se,miscBudgetCents:Qe,totalBudgetCents:Ct}}):[],lt=new Map(Yt.map(n=>[n.month,n])),st=n=>{if(n.length===0)return null;const m=Math.min(...n),q=Math.max(...n),Z=Math.round(n.reduce((Se,Qe)=>Se+Qe,0)/n.length);return{min:m,avg:Z,max:q}},ct=o&&o.year===At()?$.filter(n=>n.month<=nn()):$,Qn=ct.map(n=>n.summary.foodCents),zt=ct.map(n=>n.summary.goingOutCents),Zn=ct.map(n=>n.summary.fixedCents),In=ct.map(n=>n.summary.variableCents),Ga=ct.map(n=>n.summary.miscCents),T=ct.map(n=>n.summary.totalCents),N=ct.map(n=>o?_e.get(me(o.year,n.month))?.plannedBudgetCents??0:0),Kt=ct.map(n=>o?_e.get(me(o.year,n.month))?.netCents??0:0),ea=new Map((o?.months??[]).map(n=>[n.month,n.incomes.reduce((m,q)=>m+(q.incomeSource==="salary"?q.amountCents:0),0)])),va=new Map((o?.months??[]).map(n=>[n.month,n.incomes.reduce((m,q)=>m+(q.incomeSource==="salary"||q.incomeSource==="fresh"?q.amountCents:0),0)])),vs=ct.map(n=>ea.get(n.month)??0),Ua=ct.map(n=>va.get(n.month)??0),Jt={food:st(Qn),goingOut:st(zt),fixed:st(Zn),variable:st(In),misc:st(Ga),total:st(T),salary:st(vs),income:st(Ua),budget:st(N),net:st(Kt)},ms=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Xt={food:Qn.reduce((n,m)=>n+m,0),goingOut:zt.reduce((n,m)=>n+m,0),fixed:Zn.reduce((n,m)=>n+m,0),variable:In.reduce((n,m)=>n+m,0),misc:Ga.reduce((n,m)=>n+m,0),total:T.reduce((n,m)=>n+m,0),salary:vs.reduce((n,m)=>n+m,0),income:Ua.reduce((n,m)=>n+m,0),budget:N.reduce((n,m)=>n+m,0)},Ds=ms.map(({key:n,label:m})=>{const q=Jt.food?.[n]??null,Z=Jt.goingOut?.[n]??null,Se=Jt.fixed?.[n]??null,Qe=Jt.variable?.[n]??null,Ct=Jt.misc?.[n]??null,Zt=Jt.total?.[n]??null,Sn=Jt.salary?.[n]??null,pt=Jt.income?.[n]??null,ba=Jt.budget?.[n]??null,Ia=Jt.net?.[n]??null,Tt=Ln=>Ln===null?"-":f(Ln);return`<tr>
                  <td><strong>${m}</strong></td>
                  <td>${Tt(q)}</td>
                  <td>${Tt(Z)}</td>
                  <td>${Tt(Se)}</td>
                  <td>${Tt(Qe)}</td>
                  <td>${Tt(Ct)}</td>
                  <td>${Tt(Zt)}</td>
                  <td>${Tt(Sn)}</td>
                  <td>${Tt(pt)}</td>
                  <td>${Tt(ba)}</td>
                  <td>${Tt(Ia)}</td>
                </tr>`}).join(""),gs=`<tr>
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
                </tr>`,Ta=Math.max(1,...$.flatMap(n=>{const m=lt.get(n.month)?.totalBudgetCents;return[n.summary.totalCents,m??0]})),Ha=Math.max(1,...$.flatMap(n=>{const m=lt.get(n.month),q=n.summary.foodCents+n.summary.goingOutCents,Z=(m?.foodBudgetCents??0)+(m?.goingOutBudgetCents??0);return[q,Z]})),Ja=Math.max(1,...$.flatMap(n=>{const m=lt.get(n.month)?.fixedBudgetCents??0;return[n.summary.fixedCents,m]})),bs=Math.max(1,...$.flatMap(n=>{const m=lt.get(n.month)?.variableBudgetCents??0;return[n.summary.variableCents,m]})),ys=Math.max(1,...$.flatMap(n=>{const m=lt.get(n.month)?.miscBudgetCents??0;return[n.summary.miscCents,m]})),Cs=H(u.fixedCents,A),Pa=H(u.foodCents,P),cn=H(u.goingOutCents,F),Ge=H(u.variableCents,W),ma=H(u.miscCents,V),On=H(u.totalCents,et),Ls=et-u.totalCents,un=n=>n===0?"-":f(n),xs=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(A)}</div>
        <div class="compact-cost-actual ${Cs}">${un(u.fixedCents)}</div>
      </div>`,Fn=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(W)}</div>
        <div class="compact-cost-actual ${Ge}">${un(u.variableCents)}</div>
      </div>`,Xa=i?i.fixedCosts.length>0?i.fixedCosts.map(n=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${mt(n.name)}</div>
                  <div class="compact-cost-budget">${f(n.plannedCents)}</div>
                  <div class="compact-cost-actual ${H(n.actualCents,n.plannedCents)}">${un(n.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,ta=i?i.variablePositions.length>0?i.variablePositions.map(n=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${mt(n.name)}${n.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(n.budgetCents)}</div>
                  <div class="compact-cost-actual ${H(n.actualCents,n.budgetCents)}">${un(n.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,qt=h.editingFixedTemplateId?h.fixedTemplates.find(n=>n.id===h.editingFixedTemplateId):null,ks=h.hasUnexportedChanges,e=h.unexportedChangeLog.slice().reverse(),t=h.persistentAuditLog.slice().sort((n,m)=>m.timestampIso.localeCompare(n.timestampIso)),a=h.lastBackupFileName?mt(h.lastBackupFileName):"-",s={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},r=h.years.slice().sort((n,m)=>n.year-m.year),l=r.some(n=>n.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??r[r.length-1]?.year??null,c=typeof l=="number"?r.find(n=>n.year===l):void 0,d=c?c.months.slice().sort((n,m)=>n.month-m.month):[],g=c?hn(c):s,E=c?oa(c):{salaryIncomeCents:0,freshIncomeCents:0},C=E.salaryIncomeCents+E.freshIncomeCents,b=E.salaryIncomeCents,k=c?Wn(c):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},w=c?an(c):0,x=c?la(c,_e):0,y=w+x,M=c?c.months.reduce((n,m)=>n+zn(m),0):0,_=y-M,S=y-g.totalCents,I=[{label:"Essen",budgetCents:k.foodCents,actualCents:g.foodCents},{label:"Ausgehen",budgetCents:k.goingOutCents,actualCents:g.goingOutCents},{label:"Fixkosten",budgetCents:k.fixedCents,actualCents:g.fixedCents},{label:"Variable",budgetCents:k.variableCents,actualCents:g.variableCents},{label:"Sonstige",budgetCents:k.miscCents,actualCents:g.miscCents}],O=d.map(n=>{const m=c?_e.get(me(c.year,n.month)):void 0,q=Vt(n),Z=n.incomes.reduce((Ln,na)=>Ln+(na.incomeSource==="salary"?na.amountCents:0),0),Se=n.incomes.reduce((Ln,na)=>Ln+(Rn(na.incomeSource)?na.amountCents:0),0),Qe=m?.effectiveIncomeCents??Se,Ct=m?.plannedBudgetCents??zn(n),Zt=q.foodCents,Sn=q.goingOutCents,pt=Zt+Sn,ba=q.totalCents,Ia=Qe-Ct,Tt=Qe-ba;return{month:n.month,salaryIncomeCents:Z,incomeCents:Se,foodCents:Zt,goingOutCents:Sn,foodAndGoingOutCents:pt,effectiveIncomeCents:Qe,plannedBudgetCents:Ct,actualCostCents:ba,plannedNetCents:Ia,actualNetCents:Tt}}),j=Math.max(1,...O.map(n=>n.actualCostCents)),R=Math.max(1,...O.flatMap(n=>[Math.abs(n.plannedNetCents),Math.abs(n.actualNetCents)])),D=Math.max(1,...O.map(n=>n.foodAndGoingOutCents)),X=Math.max(1,...O.map(n=>n.foodCents)),U=Math.max(1,...O.map(n=>n.goingOutCents)),L=O.map((n,m,q)=>{const Z=m>0?q[m-1]?.plannedNetCents??n.plannedNetCents:n.plannedNetCents;return{...n,monthLabel:Te(n.month),monthShortLabel:Te(n.month).slice(0,3),deltaCents:n.plannedNetCents-Z}}),G=L[L.length-1]??null,fe=Math.min(0,...L.map(n=>n.plannedNetCents)),ve=Math.max(0,...L.map(n=>n.plannedNetCents)),ae=Math.max(1,ve-fe),ce=720,Oe=320,yt=18,Re=18,Dn=38,wn=56,Js=ce-wn-Re,Ns=Oe-yt-Dn,Nr=n=>{if(L.length<=1)return wn+Js/2;const m=n/(L.length-1);return wn+m*Js},Ks=n=>yt+(ve-n)/ae*Ns,$n=L.map((n,m)=>{const q=Nr(m),Z=Ks(n.plannedNetCents);return{...n,x:q,y:Z,leftPercent:q/ce*100,topPercent:Z/Oe*100}}),qs=$n.map((n,m)=>`${m===0?"M":"L"} ${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" "),Xs=$n.length>0?`${qs} L ${$n[$n.length-1]?.x.toFixed(1)} ${(yt+Ns).toFixed(1)} L ${$n[0]?.x.toFixed(1)} ${(yt+Ns).toFixed(1)} Z`:"",Qs=5,Kr=Array.from({length:Qs},(n,m)=>{const q=m/(Qs-1),Z=ve-q*ae;return{valueCents:Math.round(Z/100)*100,y:Ks(Z)}}),Zs=Ks(0),qr=L[0]?.plannedNetCents??0,Aa=(L[L.length-1]?.plannedNetCents??0)-qr,Vr=Aa<0?"trend-badge-negative":Aa>0?"trend-badge-positive":"trend-badge-neutral",er=Aa<0?"↘":Aa>0?"↗":"→",Rr=Aa<0?"Abwärtstrend":Aa>0?"Aufwärtstrend":"Seitwärts",ga=r.reduce((n,m)=>{const q=Wn(m);return{foodCents:n.foodCents+q.foodCents,goingOutCents:n.goingOutCents+q.goingOutCents,fixedCents:n.fixedCents+q.fixedCents,variableCents:n.variableCents+q.variableCents,miscCents:n.miscCents+q.miscCents,totalCents:n.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Wt=r.reduce((n,m)=>{const q=hn(m);return{foodCents:n.foodCents+q.foodCents,goingOutCents:n.goingOutCents+q.goingOutCents,fixedCents:n.fixedCents+q.fixedCents,variableCents:n.variableCents+q.variableCents,miscCents:n.miscCents+q.miscCents,totalCents:n.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),jr=r.reduce((n,m)=>n+an(m),0),Yr=r[0]?la(r[0],_e):0,tr=jr+Yr,nr=tr-ga.totalCents,ar=tr-Wt.totalCents,sr=[{label:"Essen",budgetCents:ga.foodCents,actualCents:Wt.foodCents},{label:"Ausgehen",budgetCents:ga.goingOutCents,actualCents:Wt.goingOutCents},{label:"Fixkosten",budgetCents:ga.fixedCents,actualCents:Wt.fixedCents},{label:"Variable",budgetCents:ga.variableCents,actualCents:Wt.variableCents},{label:"Sonstige",budgetCents:ga.miscCents,actualCents:Wt.miscCents}],rr=Math.max(1,...sr.flatMap(n=>[n.budgetCents,n.actualCents])),Vs=[{label:"Essen & Ausgehen",actualCents:Wt.foodCents+Wt.goingOutCents},{label:"Fixkosten",actualCents:Wt.fixedCents},{label:"Variable",actualCents:Wt.variableCents},{label:"Sonstige",actualCents:Wt.miscCents}],zr=Math.max(1,...Vs.map(n=>n.actualCents)),ke=r.map(n=>{const m=hn(n),q=Wn(n),Z=an(n),Se=oa(n),Qe=la(n,_e),Ct=Z+Qe;return{year:n.year,salaryIncomeCents:Se.salaryIncomeCents,freshIncomeCents:Se.freshIncomeCents,totalIncomeCents:Se.salaryIncomeCents+Se.freshIncomeCents,foodAndGoingOutCents:m.foodCents+m.goingOutCents,fixedCents:m.fixedCents,variableCents:m.variableCents,miscCents:m.miscCents,budgetTotalCents:q.totalCents,actualTotalCents:m.totalCents,effectiveIncomeCents:Ct,plannedNetCents:Ct-q.totalCents,actualNetCents:Ct-m.totalCents}}),Wr=ke.reduce((n,m)=>n+m.totalIncomeCents,0),Gr=ke.reduce((n,m)=>n+m.salaryIncomeCents,0),ir=Math.max(1,...ke.flatMap(n=>[Math.abs(n.plannedNetCents),Math.abs(n.actualNetCents)])),Ur=Math.max(1,...ke.map(n=>n.actualTotalCents)),Hr=Math.max(1,...ke.map(n=>n.totalIncomeCents)),Jr=Math.max(1,...ke.map(n=>n.salaryIncomeCents)),or=Math.max(1,...ke.flatMap(n=>[n.totalIncomeCents,n.actualTotalCents])),lr=Math.max(1,...ke.flatMap(n=>[n.salaryIncomeCents,n.actualTotalCents])),Xr=Math.max(1,...ke.map(n=>n.foodAndGoingOutCents)),Qr=Math.max(1,...ke.map(n=>n.fixedCents)),Zr=Math.max(1,...ke.map(n=>n.variableCents)),ei=Math.max(1,...ke.map(n=>n.miscCents)),ti=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${r.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${r.map(n=>`<option value="${n.year}" ${n.year===l?"selected":""}>${n.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${c?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(C)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(b)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(M)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(g.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ae(_)}">${f(_)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ae(S)}">${f(S)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${er}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Vr}">${er} ${Rr}</span>
                    </div>
                  </header>
                  ${G?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${mt(G.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${Ae(G.plannedNetCents)}" data-year-trend-active-net>${f(G.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(G.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(G.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${Ae(G.deltaCents)}" data-year-trend-active-delta>${G.deltaCents>=0?"+":""}${f(G.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${ce} ${Oe}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${c?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Kr.map(n=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${wn}" y1="${n.y.toFixed(1)}" x2="${ce-Re}" y2="${n.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${wn-10}" y="${(n.y+4).toFixed(1)}" text-anchor="end">${f(n.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${wn}" y1="${Zs.toFixed(1)}" x2="${ce-Re}" y2="${Zs.toFixed(1)}"></line>
                              ${Xs?`<path class="year-trend-area" d="${Xs}"></path>`:""}
                              ${qs?`<path class="year-trend-line" d="${qs}"></path>`:""}
                              ${$n.map(n=>`
                                    <circle class="year-trend-node ${n.plannedNetCents<0?"is-negative":""}" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${n.x.toFixed(1)}" y="${Oe-12}" text-anchor="middle">${mt(n.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${$n.map((n,m)=>`
                                    <button
                                      class="year-trend-point-hit ${m===$n.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${n.leftPercent.toFixed(2)}%; top:${n.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${m===$n.length-1?"1":"0"}"
                                      data-month-label="${mt(n.monthLabel)}"
                                      data-net-cents="${n.plannedNetCents}"
                                      data-actual-net-cents="${n.actualNetCents}"
                                      data-income-cents="${n.effectiveIncomeCents}"
                                      data-expense-cents="${n.actualCostCents}"
                                      data-delta-cents="${n.deltaCents}"
                                      aria-label="${mt(n.monthLabel)}: Kalkulierter Saldo ${f(n.plannedNetCents)}, Einkommen ${f(n.effectiveIncomeCents)}, Ausgaben ${f(n.actualCostCents)}"
                                      aria-pressed="${m===$n.length-1?"true":"false"}"
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
                    ${I.map(n=>{const m=ot(n.actualCents,n.budgetCents),q=Math.min(100,m),Z=`${m.toFixed(0)}%`,Se=n.budgetCents-n.actualCents,Qe=Se<0?"danger":Se>0?"budget-under":"";return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(O.length,1)}, minmax(0, 1fr));">
                    ${O.map(n=>{const m=re(n.actualCostCents,j);return`
                          <div class="spark-bar" title="${Te(n.month)}: ${f(n.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.actualCostCents)} €</span></div>
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
                    ${O.map(n=>{const m=re(Math.abs(n.plannedNetCents),R),q=re(Math.abs(n.actualNetCents),R),Z=n.plannedNetCents<0?"bar-negative":"bar-positive",Se=n.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Te(n.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(n.plannedNetCents)} | Ist-Saldo: ${f(n.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${m}; opacity: 0.35;"></div>
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
                  ${O.map(n=>`<tr>
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
                    ${r.map(n=>`<option value="${n.year}" ${n.year===l?"selected":""}>${n.year}</option>`).join("")}
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
                    ${O.map(n=>{const m=re(n.foodAndGoingOutCents,D);return`
                          <div class="spark-bar" title="${Te(n.month)}: ${f(n.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(O.length,1)}, minmax(0, 1fr));">
                    ${O.map(n=>{const m=re(n.foodCents,X);return`
                          <div class="spark-bar" title="${Te(n.month)}: ${f(n.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.foodCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(O.length,1)}, minmax(0, 1fr));">
                    ${O.map(n=>{const m=re(n.goingOutCents,U);return`
                          <div class="spark-bar" title="${Te(n.month)}: ${f(n.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.goingOutCents)} €</span></div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(Wr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(Gr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(ga.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Wt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ae(nr)}">${f(nr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ae(ar)}">${f(ar)}</div><div class="eval-value"></div></div>
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
                    ${sr.map(n=>{const m=re(n.budgetCents,rr),q=re(n.actualCents,rr),Z=xn(n.budgetCents,n.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${n.label}</div>
                            <div class="bar-track" title="Budget: ${f(n.budgetCents)} | Ist: ${f(n.actualCents)}">
                              <div class="bar bar-budget" style="width:${m}"></div>
                              <div class="bar-marker" style="left:${m}" aria-hidden="true"></div>
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
                    ${Vs.map(n=>{const m=re(n.actualCents,zr);return`
                          <div class="bar-row">
                            <div class="bar-label">${n.label}</div>
                            <div class="bar-track" title="Ist: ${f(n.actualCents)}">
                              <div class="bar bar-expense" style="width:${m}"></div>
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
                    ${ke.map(n=>{const m=re(n.actualTotalCents,Ur);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.actualTotalCents)} €</span></div>
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
                    ${ke.map(n=>{const m=re(Math.abs(n.plannedNetCents),ir),q=re(Math.abs(n.actualNetCents),ir),Z=n.plannedNetCents<0?"bar-negative":"bar-positive",Se=n.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${n.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(n.plannedNetCents)} | Ist-Saldo: ${f(n.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${m}; opacity: 0.35;"></div>
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
                    ${ke.map(n=>{const m=re(n.foodAndGoingOutCents,Xr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.foodAndGoingOutCents)} €</span></div>
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
                    ${ke.map(n=>{const m=re(n.fixedCents,Qr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.fixedCents)} €</span></div>
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
                    ${ke.map(n=>{const m=re(n.variableCents,Zr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.variableCents)} €</span></div>
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
                    ${ke.map(n=>{const m=re(n.miscCents,ei);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.miscCents)} €</span></div>
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
                    ${ke.map(n=>{const m=re(n.totalIncomeCents,Hr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.totalIncomeCents)} €</span></div>
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
                    ${ke.map(n=>{const m=re(n.salaryIncomeCents,Jr);return`
                          <div class="spark-bar" title="${n.year}: ${f(n.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.salaryIncomeCents)} €</span></div>
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
                    ${ke.map(n=>{const m=re(n.totalIncomeCents,or),q=re(n.actualTotalCents,or);return`
                          <div class="spark-bar" title="${n.year}: Einkommen ${f(n.totalIncomeCents)} | Kosten ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${m}"></div>
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
                    ${ke.map(n=>{const m=re(n.salaryIncomeCents,lr),q=re(n.actualTotalCents,lr);return`
                          <div class="spark-bar" title="${n.year}: Gehalt ${f(n.salaryIncomeCents)} | Kosten ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${m}"></div>
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
    `,ni=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,ai=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${qt?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${qt?Et(qt.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${qt?"Änderung speichern":"Vorlage speichern"}</button>
          ${qt?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,cr=h.annualVariableFixedTemplates.reduce((n,m)=>n+m.plannedCents,0),si=Math.round(cr/12),ri=`
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
                <div class="eval-value budget-under">${f(cr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(si)}</div>
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
            ${h.annualVariableFixedTemplates.map(n=>{const m=mn(n.dueDateIso),q=m?Te(m.month):"-";return`<tr>
                    <td>${n.name}</td>
                    <td>${n.dueDateIso}</td>
                    <td>${q}</td>
                    <td>${f(n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${n.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Qt=h.evaluationCurrentResult,ii=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${mt(h.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${Qt&&Qt.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${Qt?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${mt(Qt.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${Qt.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${f(Qt.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${f(Qt.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${f(Qt.monthAverageCents)}</div>
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
                  ${Qt.yearRows.length>0?Qt.yearRows.map(n=>`<tr>
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
                  ${Qt.monthRows.length>0?Qt.monthRows.map(n=>`<tr>
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
                        ${n.yearRows.length>0?n.yearRows.map(m=>`<tr>
                                <td>${m.year}</td>
                                <td>${m.hitCount}</td>
                                <td>${f(m.totalCents)}</td>
                                <td>${m.monthsWithHits}</td>
                                <td>${f(m.monthAverageCents)}</td>
                              </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                      </tbody>
                    </table>
                  </article>
                `).join("")}
      </div>
    `,ur=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",oi=h.topModal==="years"?ni:h.topModal==="fixed"?ai:h.topModal==="variable-fixed"?ri:h.topModal==="dashboard"?ti:h.topModal==="evaluation"?ii:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${ks?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Dr.map(n=>`<option value="${n}" ${h.theme===n?"selected":""}>${Bi(n)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${ur}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${ur}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${oi}
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
                  ${e.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${e.map(n=>{const m=new Date(n.timestampIso);return`<li><strong>${m.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${m.toLocaleString("de-DE")}</strong><span>${mt(n.message)}</span></li>`}).join("")}</ol>`}
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
                  ${t.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${t.map(n=>{const m=new Date(n.timestampIso);return`<li><strong>${m.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${m.toLocaleString("de-DE")}</strong><span>${mt(n.message)}</span></li>`}).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Te(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(n,m)=>m+1).map(n=>`<option value="${n}" ${n===h.selectedMonth?"selected":""}>${Te(n)}</option>`).join("")}
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
                <strong>${f(We)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(Ke)}</strong>
              </div>
              <div class="compact-income-row ${ze}">
                <span>Übernahme aus Vormonat</span>
                <strong>${St?f(K):"-"}</strong>
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
                <div class="compact-month-summary-amount">${f(et)}</div>
              </article>
              <article class="compact-month-summary-box">
                <div class="compact-month-summary-label">Ausgegeben</div>
                <div class="compact-month-summary-amount compact-month-summary-amount-spent ${On}">${un(u.totalCents)} <span class="eval-diff ${On}">(Diff ${Gn(Ls)})</span></div>
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
                  ${Xa}
                  ${xs}
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
                  ${ta}
                  ${Fn}
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
                    <div class="compact-cost-actual ${Xe}">${un(xe)}</div>
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
                    <div class="compact-cost-actual ${ma}">${un(u.miscCents)}</div>
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
                  ${Ht.map(n=>{const m=re(Math.abs(n.valueCents),kn),q=n.valueCents>=0?"+":"",Z=n.label==="Netto"?n.valueCents<0?"danger":n.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${n.label}</div>
                          <div class="bar-track" title="${f(n.valueCents)}">
                            <div class="bar ${n.className}" style="width:${m}"></div>
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
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Gesamtausgaben (Budget vs. Ist)">
                      ${$.map(n=>{const m=lt.get(n.month)?.totalBudgetCents??0,q=re(m,Ta),Z=re(n.summary.totalCents,Ta);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(n.summary.totalCents)} € | Budget ${f(m)} €">
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
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Essen und Ausgehen (Budget vs. Ist)">
                      ${$.map(n=>{const m=lt.get(n.month),q=(m?.foodBudgetCents??0)+(m?.goingOutBudgetCents??0),Z=n.summary.foodCents+n.summary.goingOutCents,Se=re(q,Ha),Qe=re(Z,Ha);return`
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
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Fixkosten (Budget vs. Ist)">
                      ${$.map(n=>{const m=lt.get(n.month)?.fixedBudgetCents??0,q=re(m,Ja),Z=re(n.summary.fixedCents,Ja);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(n.summary.fixedCents)} € | Budget ${f(m)} €">
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
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Variable Kosten (Budget vs. Ist)">
                      ${$.map(n=>{const m=lt.get(n.month)?.variableBudgetCents??0,q=re(m,bs),Z=re(n.summary.variableCents,bs);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(n.summary.variableCents)} € | Budget ${f(m)} €">
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
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Sonstige (Budget vs. Ist)">
                      ${$.map(n=>{const m=lt.get(n.month)?.miscBudgetCents??0,q=re(m,ys),Z=re(n.summary.miscCents,ys);return`
                            <div class="spark-bar" title="${Te(n.month)}: Ist ${f(n.summary.miscCents)} € | Budget ${f(m)} €">
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
                    <div class="eval-value">${f(nt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(We)}</div>
                    <div class="eval-value">${f(Ut)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(Ke)}</div>
                    <div class="eval-value">${f(Dt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${ze}">${St?f(K):"-"}</div>
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
                    <div class="eval-value">${Ot(P,u.foodCents)}</div>
                    <div class="eval-value">${f(Y)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Ot(F,u.goingOutCents)}</div>
                    <div class="eval-value">${f(J)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Ot(A,u.fixedCents)}</div>
                    <div class="eval-value">${f(ie)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Ot(W,u.variableCents)}</div>
                    <div class="eval-value">${f(Ce)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Ot(V,u.miscCents)}</div>
                    <div class="eval-value">${f(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Ot(et,u.totalCents)}</div>
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
                    <div class="eval-value ${Pa}">${f(u.foodCents)}</div>
                    <div class="eval-value">${f(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${cn}">${f(u.goingOutCents)}</div>
                    <div class="eval-value">${f(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Cs}">${f(u.fixedCents)}</div>
                    <div class="eval-value">${f(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Ge}">${f(u.variableCents)}</div>
                    <div class="eval-value">${f(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${ma}">${f(u.miscCents)}</div>
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
                    <div class="eval-value ${Ae(on)}">${f(on)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Ae(Ve)}">${f(Ve)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Eigenkapital (Monat)</div>
                    <div class="eval-value ${tt}">${f(ye)}</div>
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
                ${$.map((n,m,q)=>{const Z=o?_e.get(me(o.year,n.month)):void 0,Se=Z?.plannedBudgetCents??0,Qe=Z?.netCents??0,Ct=ea.get(n.month)??0,Zt=va.get(n.month)??0,Sn=Qe<0?"danger":Qe>0?"budget-under":"",pt=q[m-1],ba=pt?.summary.foodCents??null,Ia=pt?.summary.goingOutCents??null,Tt=pt?.summary.fixedCents??null,Ln=pt?.summary.variableCents??null,na=pt?.summary.miscCents??null,dr=pt?.summary.totalCents??null,hr=pt!==void 0?ea.get(pt.month)??0:null,pr=pt!==void 0?va.get(pt.month)??0:null,fr=o&&pt?_e.get(me(o.year,pt.month))?.plannedBudgetCents??0:null,vr=ba===null?null:n.summary.foodCents-ba,mr=Ia===null?null:n.summary.goingOutCents-Ia,gr=Tt===null?null:n.summary.fixedCents-Tt,br=Ln===null?null:n.summary.variableCents-Ln,yr=na===null?null:n.summary.miscCents-na,Cr=dr===null?null:n.summary.totalCents-dr,xr=hr===null?null:Ct-hr,kr=pr===null?null:Zt-pr,wr=fr===null?null:Se-fr,Oa=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",$r=Pt=>Pt===null?"muted":Pt>0?"budget-under":Pt<0?"danger":"muted",li=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",Nn=Pt=>Pt===null?"(Δ -)":`(Δ ${Pt>0?"+":""}${f(Pt)})`,Sr=o&&pt?_e.get(me(o.year,pt.month))?.netCents??0:null,Fa=Sr===null?null:Qe-Sr,ci=Fa===null?"(Δ -)":`(Δ ${Fa>0?"+":""}${f(Fa)})`,ui=Fa===null?"muted":Fa<0?"danger":Fa>0?"budget-under":"muted",Er=Ct-n.summary.totalCents,Br=Zt-n.summary.totalCents,di=n.summary.totalCents>0?`${(Ct/n.summary.totalCents*100).toFixed(1)} %`:"-",hi=ln(Ct,n.summary.totalCents);return`<tr>
                  <td>${Te(n.month)}</td>
                  <td>${f(n.summary.foodCents)} <span class="${Oa(vr)}">${Nn(vr)}</span></td>
                  <td>${f(n.summary.goingOutCents)} <span class="${Oa(mr)}">${Nn(mr)}</span></td>
                  <td>${f(n.summary.fixedCents)} <span class="${Oa(gr)}">${Nn(gr)}</span></td>
                  <td>${f(n.summary.variableCents)} <span class="${Oa(br)}">${Nn(br)}</span></td>
                  <td>${f(n.summary.miscCents)} <span class="${Oa(yr)}">${Nn(yr)}</span></td>
                  <td>${f(n.summary.totalCents)} <span class="${Oa(Cr)}">${Nn(Cr)}</span></td>
                  <td>${f(Ct)} <span class="${$r(xr)}">${Nn(xr)}</span></td>
                  <td>${f(Zt)} <span class="${$r(kr)}">${Nn(kr)}</span></td>
                  <td>${f(Se)} <span class="${li(wr)}">${Nn(wr)}</span></td>
                  <td class="${Sn}">${f(Qe)} <span class="${ui}">${ci}</span></td>
                  <td class="${Ae(Er)}">${f(Er)}</td>
                  <td class="${hi}">${di}</td>
                  <td class="${Ae(Br)}">${f(Br)}</td>
                </tr>`}).join("")}
                ${Ds}
                ${gs}
              </tbody>
            </table>
          </article>

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${i?"":"disabled"} />
              </label>
              <label>
                Herkunft
                <select id="income-source" ${i?"":"disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${i?"":"disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${i?"":"disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${i?"":"disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${i?`<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${ze}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${Et(K)}" />
                    </td>
                    <td>-</td>
                  </tr>${i.incomes.map(n=>`<tr>
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
                  <strong>${f(We)} €</strong>
                </div>
                <div class="column-overview-row ${ze}">
                  <span>Übernahme Vormonat</span>
                  <strong>${i?`${f(K)} €`:"-"}</strong>
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
                ${fn(P,u.foodCents)}
                ${fn(F,u.goingOutCents)}
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
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${Et(P)}" ${i?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${Et(F)}" ${i?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${i?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${i?i.days.map(n=>{const m=n.foodCents>0,q=n.goingOutCents>0,Z=`${n.isoDate===p?"today-row":""} ${m||q?"day-has-entry":""}`.trim(),Se=`amount-input ${m?"day-input-has-value":""}`.trim(),Qe=`amount-input ${q?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(n.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Se}" data-day-food="${n.isoDate}" type="number" min="0" step="0.01" value="${Et(n.foodCents)}" /></td>
                      <td><input class="${Qe}" data-day-going="${n.isoDate}" type="number" min="0" step="0.01" value="${Et(n.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${fn(A,u.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${Et(A)}" ${i?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${i?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${i?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${i?"":"disabled"}>Position anlegen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-fixed-csv" type="button" ${i?"":"disabled"}>Import</button>
                <input id="import-fixed-csv-input" type="file" accept=".csv,text/csv" ${i?"":"disabled"} style="display:none" />
                <button class="btn btn-quiet" id="clear-fixed-costs" type="button" ${i?"":"disabled"}>Alle Positionen löschen</button>
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag (Betrag wird als Budget und Ist übernommen)</p>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${i?i.fixedCosts.map(n=>`<tr>
                    <td>${n.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${n.id}" type="number" min="0" step="0.01" value="${Et(n.plannedCents)}" /></td>
                    <td class="${H(n.actualCents,n.plannedCents)}"><input class="amount-input" data-fixed-actual="${n.id}" type="number" min="0" step="0.01" value="${Et(n.actualCents)}" /></td>
                    <td class="${H(n.actualCents,n.plannedCents)}">${f(n.actualCents-n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${n.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${fn(W,u.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${Et(W)}" ${i?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${i?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${i?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${i?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-variable-position-recurring" ${i?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-variable-csv" type="button" ${i?"":"disabled"}>Import</button>
                <input id="import-variable-csv-input" type="file" accept=".csv,text/csv" ${i?"":"disabled"} style="display:none" />
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag (Betrag wird als Budget und Ist übernommen)</p>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${i?i.variablePositions.map(n=>`<tr>
                    <td>${n.name}${n.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${n.id}" type="number" min="0" step="0.01" value="${Et(n.budgetCents)}" /></td>
                    <td class="${H(n.actualCents,n.budgetCents)}"><input class="amount-input" data-variable-position-actual="${n.id}" type="number" min="0" step="0.01" value="${Et(n.actualCents)}" /></td>
                    <td class="${H(n.actualCents,n.budgetCents)}">${f(n.actualCents-n.budgetCents)}</td>
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
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${Et(V)}" ${i?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${i?"":"disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${i?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${i?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${i?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-misc-csv" type="button" ${i?"":"disabled"}>Import</button>
                <input id="import-misc-csv-input" type="file" accept=".csv,text/csv" ${i?"":"disabled"} style="display:none" />
                <span>In csv Datei (betrag;wert). Nä. Wert direkt untereinander</span>
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag</p>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${i?i.miscCosts.map(n=>`<tr>
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
          <p class="muted">Letztes verwendetes Backup: ${a}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),fs(),xt(),Le(),vt()}function fs(){const o=B.querySelector("#theme-select"),i=B.querySelector("#open-years-modal"),p=B.querySelector("#open-evaluation-modal"),u=B.querySelector("#open-fixed-modal"),v=B.querySelector("#open-variable-fixed-modal"),$=B.querySelector("#open-dashboard-modal"),P=B.querySelector("#panel-modal-close"),F=B.querySelector("#panel-modal-backdrop"),A=B.querySelector("#open-unexported-change-log"),W=B.querySelector("#open-persistent-audit-log"),V=B.querySelector("#unexported-change-log-close"),Y=B.querySelector("#unexported-change-log-backup"),J=B.querySelector("#unexported-change-log-backdrop"),ie=B.querySelector("#persistent-audit-log-close"),Ce=B.querySelector("#persistent-audit-log-backdrop"),He=B.querySelector("#new-year"),le=B.querySelector("#create-year"),We=B.querySelector("#evaluation-query"),Ke=B.querySelector("#run-evaluation"),_e=B.querySelector("#save-evaluation"),at=B.querySelector("#year-select"),Ft=B.querySelector("#month-select");o?.addEventListener("change",()=>{const T=o.value;Ir(T)&&xa(T)}),i?.addEventListener("click",()=>{en("years")}),p?.addEventListener("click",()=>{en("evaluation")}),u?.addEventListener("click",()=>{en("fixed")}),v?.addEventListener("click",()=>{en("variable-fixed")}),$?.addEventListener("click",()=>{en("dashboard")}),A?.addEventListener("click",()=>{tn()}),W?.addEventListener("click",()=>{ht()}),V?.addEventListener("click",()=>{kt()}),Y?.addEventListener("click",async()=>{try{await An()}catch(T){console.error("Backup-Export fehlgeschlagen",T),ne("Backup konnte nicht exportiert werden.","error")}}),J?.addEventListener("click",T=>{T.target===J&&kt()}),ie?.addEventListener("click",()=>{wt()}),Ce?.addEventListener("click",T=>{T.target===Ce&&wt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.dashboardTab;N!=="year"&&N!=="food"&&N!=="all"||(h.dashboardTab=N,te())})});const K=B.querySelector("#dashboard-year-select");K?.addEventListener("change",()=>{const T=Number.parseInt(K.value,10);Number.isInteger(T)&&(h.dashboardYear=T,te())}),P?.addEventListener("click",()=>{qn()}),F?.addEventListener("click",T=>{T.target===F&&qn()}),h.topModal&&window.setTimeout(()=>{P?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{V?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{ie?.focus()},0),le?.addEventListener("click",async()=>{const T=Number.parseInt(He?.value??"",10);if(!Number.isInteger(T)){alert("Bitte gültiges Jahr eingeben.");return}await z(T)}),Ke?.addEventListener("click",()=>{Ma(We?.value??"")}),We?.addEventListener("keydown",T=>{T.key==="Enter"&&(T.preventDefault(),Ma(We.value))}),_e?.addEventListener("click",async()=>{await _a()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeSavedEvaluation;N&&await ps(N)})}),at?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(at.value,10),h.selectedMonth=nn(),te()}),Ft?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Ft.value,10),te()});const St=B.querySelector("#fixed-template-name"),gt=B.querySelector("#fixed-template-amount"),rn=B.querySelector("#add-fixed-template"),bt=B.querySelector("#cancel-fixed-template-edit"),ye=B.querySelector("#annual-variable-fixed-name"),Rt=B.querySelector("#annual-variable-fixed-date"),Ne=B.querySelector("#annual-variable-fixed-amount"),ze=B.querySelector("#add-annual-variable-fixed-template");rn?.addEventListener("click",async()=>{const T=St?.value??"",N=Fe(gt?.value??"0");await gn(T,N),St&&(St.value=""),gt&&(gt.value="")}),bt?.addEventListener("click",()=>{bn()}),ze?.addEventListener("click",async()=>{const T=ye?.value??"",N=Rt?.value??"",Kt=Fe(Ne?.value??"0");await Fs(T,N,Kt),ye&&(ye.value=""),Rt&&(Rt.value=""),Ne&&(Ne.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeAnnualVariableFixedTemplate;N&&await yn(N)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.editFixedTemplate;N&&Hn(N)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixedTemplate;N&&await Sa(N)})}),B.querySelectorAll("[data-day-food]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayFood;N&&await Va(N,"foodCents",Fe(T.value))})}),B.querySelectorAll("[data-day-going]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayGoing;N&&await Va(N,"goingOutCents",Fe(T.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedActual;N&&await _n(N,Fe(T.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedPlanned;N&&await is(N,Fe(T.value))})});const Je=B.querySelector("#fixed-budget");Je?.addEventListener("click",T=>{T.preventDefault(),Je.blur(),it(Je)}),Je?.addEventListener("change",async()=>{await sn(Fe(Je.value))});const tt=B.querySelector("#food-budget");tt?.addEventListener("click",T=>{T.preventDefault(),tt.blur(),it(tt)}),tt?.addEventListener("change",async()=>{await os(Fe(tt.value))});const nt=B.querySelector("#going-out-budget");nt?.addEventListener("click",T=>{T.preventDefault(),nt.blur(),it(nt)}),nt?.addEventListener("change",async()=>{await Jn(Fe(nt.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Ms()});const Dt=B.querySelector("#misc-budget");Dt?.addEventListener("click",T=>{T.preventDefault(),Dt.blur(),it(Dt)}),Dt?.addEventListener("change",async()=>{await Ea(Fe(Dt.value))});const Lt=B.querySelector("#variable-budget");Lt?.addEventListener("click",T=>{T.preventDefault(),Lt.blur(),it(Lt)}),Lt?.addEventListener("change",async()=>{await ja(Fe(Lt.value))});const Nt=B.querySelector("#variable-position-name"),et=B.querySelector("#variable-position-budget"),jt=B.querySelector("#add-variable-position"),xe=B.querySelector("#add-variable-position-recurring"),qe=B.querySelector("#import-variable-csv"),Xe=B.querySelector("#import-variable-csv-input"),Pe=B.querySelector("#misc-description"),Ve=B.querySelector("#misc-amount"),on=B.querySelector("#add-misc"),Ae=B.querySelector("#add-misc-recurring"),ln=B.querySelector("#import-misc-csv"),Ie=B.querySelector("#import-misc-csv-input"),re=B.querySelector("#income-description"),ot=B.querySelector("#income-source"),_t=B.querySelector("#income-amount"),xn=B.querySelector("#add-income"),Ht=B.querySelector("#add-income-recurring"),kn=B.querySelector("#fixed-cost-name"),Yt=B.querySelector("#fixed-cost-budget"),lt=B.querySelector("#add-fixed-cost"),st=B.querySelector("#import-fixed-csv"),ct=B.querySelector("#import-fixed-csv-input"),Qn=B.querySelector("#clear-fixed-costs"),zt=B.querySelector("#carryover-override");zt?.addEventListener("click",T=>{T.preventDefault(),zt.blur(),it(zt)}),zt?.addEventListener("change",async()=>{const T=zt.value;if(!T.trim()){await Cn(null);return}await Cn(Fe(T))}),lt?.addEventListener("click",async()=>{const T=Fe(Yt?.value??"0");await Ra(kn?.value??"",T),kn&&(kn.value=""),Yt&&(Yt.value="")}),st?.addEventListener("click",()=>{ct?.click()}),ct?.addEventListener("change",async()=>{const T=ct.files?.[0];if(T){try{await us(T)}catch(N){console.error("Fixkosten-CSV-Import fehlgeschlagen",N),ne("CSV konnte nicht importiert werden.","error")}ct.value=""}}),Qn?.addEventListener("click",async()=>{await Tn()}),jt?.addEventListener("click",async()=>{const T=Fe(et?.value??"0");await Ya(Nt?.value??"",T,!1),Nt&&(Nt.value=""),et&&(et.value="")}),xe?.addEventListener("click",async()=>{const T=Fe(et?.value??"0");await Ya(Nt?.value??"",T,!0),Nt&&(Nt.value=""),et&&(et.value="")}),qe?.addEventListener("click",()=>{Xe?.click()}),Xe?.addEventListener("change",async()=>{const T=Xe.files?.[0];if(T){try{await ds(T)}catch(N){console.error("Variable-CSV-Import fehlgeschlagen",N),ne("CSV konnte nicht importiert werden.","error")}Xe.value=""}}),on?.addEventListener("click",async()=>{const T=Fe(Ve?.value??"0");await za(Pe?.value??"",T,!1),Pe&&(Pe.value=""),Ve&&(Ve.value="")}),Ae?.addEventListener("click",async()=>{const T=Fe(Ve?.value??"0");await za(Pe?.value??"",T,!0),Pe&&(Pe.value=""),Ve&&(Ve.value="")}),ln?.addEventListener("click",()=>{Ie?.click()}),Ie?.addEventListener("change",async()=>{const T=Ie.files?.[0];if(T){try{await ha(T)}catch(N){console.error("Sonstiges-CSV-Import fehlgeschlagen",N),ne("CSV konnte nicht importiert werden.","error")}Ie.value=""}}),xn?.addEventListener("click",async()=>{const T=Fe(_t?.value??"0"),N=ot?.value,Kt=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await Me(re?.value??"",T,Kt,!1),re&&(re.value=""),_t&&(_t.value=""),ot&&(ot.value="salary")}),Ht?.addEventListener("click",async()=>{const T=Fe(_t?.value??"0"),N=ot?.value,Kt=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await Me(re?.value??"",T,Kt,!0),re&&(re.value=""),_t&&(_t.value=""),ot&&(ot.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(T=>{T.addEventListener("change",async()=>{const N=T.dataset.incomeSource;if(!N)return;const Kt=T.value;await pa(N,Kt==="balance"||Kt==="fresh"||Kt==="salary"?Kt:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionBudget;N&&await ls(N,Fe(T.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionActual;N&&await Ba(N,Fe(T.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeVariablePosition;N&&await pe(N)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.moveVariablePositionNext;N&&await cs(N)})}),B.querySelectorAll("[data-remove-fixed]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixed;N&&await Ue(N)})}),B.querySelectorAll("[data-remove-income]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeIncome;N&&await fa(N)})}),B.querySelectorAll("[data-remove-misc]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeMisc;N&&await hs(N)})});const Zn=B.querySelector("#backup-export"),In=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Zn?.addEventListener("click",async()=>{await An()}),In?.addEventListener("change",async()=>{const T=In.files?.[0];if(T){try{await Wa(T)}catch(N){console.error("Backup-Import fehlgeschlagen",N),ne("Backup konnte nicht importiert werden.","error")}In.value=""}})}return{init:As}}const _i="modulepreload",Ti=function(B){return"/habu26/"+B},Fr={},Pi=function(h,we,Q){let de=Promise.resolve();if(we&&we.length>0){let Ze=function(je){return Promise.all(je.map(ue=>Promise.resolve(ue).then(dt=>({status:"fulfilled",value:dt}),dt=>({status:"rejected",reason:dt}))))};var be=Ze;document.getElementsByTagName("link");const oe=document.querySelector("meta[property=csp-nonce]"),he=oe?.nonce||oe?.getAttribute("nonce");de=Ze(we.map(je=>{if(je=Ti(je),je in Fr)return;Fr[je]=!0;const ue=je.endsWith(".css"),dt=ue?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${je}"]${dt}`))return;const rt=document.createElement("link");if(rt.rel=ue?"stylesheet":_i,ue||(rt.as="script"),rt.crossOrigin="",rt.href=je,he&&rt.setAttribute("nonce",he),document.head.appendChild(rt),ue)return new Promise((Le,xt)=>{rt.addEventListener("load",Le),rt.addEventListener("error",()=>xt(new Error(`Unable to preload CSS for ${je}`)))})}))}function se(oe){const he=new Event("vite:preloadError",{cancelable:!0});if(he.payload=oe,window.dispatchEvent(he),!he.defaultPrevented)throw oe}return de.then(oe=>{for(const he of oe||[])he.status==="rejected"&&se(he.reason);return h().catch(se)})};function Ai(B={}){const{immediate:h=!1,onNeedRefresh:we,onOfflineReady:Q,onRegistered:de,onRegisteredSW:se,onRegisterError:be}=B;let oe,he;const Ze=async(ue=!0)=>{await he};async function je(){if("serviceWorker"in navigator){if(oe=await Pi(async()=>{const{Workbox:ue}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ue}},[]).then(({Workbox:ue})=>new ue("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ue=>{be?.(ue)}),!oe)return;oe.addEventListener("activated",ue=>{(ue.isUpdate||ue.isExternal)&&window.location.reload()}),oe.addEventListener("installed",ue=>{ue.isUpdate||Q?.()}),oe.register({immediate:h}).then(ue=>{se?se("/habu26/sw.js",ue):de?.(ue)}).catch(ue=>{be?.(ue)})}}return he=je(),Ze}function Ii(){Ai({immediate:!0})}const Lr=document.getElementById("app");if(!Lr)throw new Error("App-Container nicht gefunden.");Mi(Lr).init();Ii();
