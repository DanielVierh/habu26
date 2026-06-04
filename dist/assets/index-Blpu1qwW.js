(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const de of document.querySelectorAll('link[rel="modulepreload"]'))Q(de);new MutationObserver(de=>{for(const se of de)if(se.type==="childList")for(const be of se.addedNodes)be.tagName==="LINK"&&be.rel==="modulepreload"&&Q(be)}).observe(document,{childList:!0,subtree:!0});function we(de){const se={};return de.integrity&&(se.integrity=de.integrity),de.referrerPolicy&&(se.referrerPolicy=de.referrerPolicy),de.crossOrigin==="use-credentials"?se.credentials="include":de.crossOrigin==="anonymous"?se.credentials="omit":se.credentials="same-origin",se}function Q(de){if(de.ep)return;de.ep=!0;const se=we(de);fetch(de.href,se)}})();const di=[1,2,3,4,5,6,7,8,9,10,11,12];function Za(){return new Date().toISOString()}function ut(B){const h=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${h}`}function hi(B,h){const we=new Date(B,h,0).getDate(),Q=[];for(let de=1;de<=we;de+=1){const se=new Date(Date.UTC(B,h-1,de));Q.push({isoDate:se.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Q}function pi(B){return B.map(h=>({id:ut("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Er(B,h,we){const Q=h.reduce((se,be)=>se+be.plannedCents,0),de=di.map(se=>({month:se,days:hi(B,se),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:pi(h),fixedBudgetCents:Q,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:Za(),templateVersion:we,months:de}}function Vs(B,h){return{id:ut("expense"),description:B,amountCents:h,createdAt:Za()}}function Br(B,h,we){const Q={id:ut("income"),description:B,amountCents:h,createdAt:Za()};return we?{...Q,incomeSource:we}:Q}function ws(B,h){return B.toLocaleLowerCase("de-DE").includes(h)}function Mr(B,h,we,Q){const de=h.trim(),se=de.toLocaleLowerCase("de-DE");if(!se)return{id:ut("search_eval"),keyword:"",keywordNormalized:"",createdAt:Za(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let be=0,oe=0,pe=0,Ze=0,je=0;const ce=Math.max(1,Math.min(12,Q)),dt=[],st=[];return B.slice().sort((Le,Ct)=>Le.year-Ct.year).forEach(Le=>{let Ct=0,en=0,Kn=0,tn=0;Le.months.slice().sort((xt,ht)=>xt.month-ht.month).forEach(xt=>{let ht=0,kt=0;if(xt.fixedCosts.forEach(vt=>{ws(vt.name,se)&&(ht+=1,kt+=vt.actualCents)}),xt.variableCosts.forEach(vt=>{ws(vt.description,se)&&(ht+=1,kt+=vt.amountCents)}),xt.variablePositions.forEach(vt=>{ws(vt.name,se)&&(ht+=1,kt+=vt.actualCents)}),xt.miscCosts.forEach(vt=>{ws(vt.description,se)&&(ht+=1,kt+=vt.amountCents)}),ht<=0)return;Ct+=ht,en+=kt,(Le.year<we||Le.year===we&&xt.month<=ce)&&(tn+=1,Kn+=kt),be+=ht,oe+=kt,(Le.year<we||Le.year===we&&xt.month<=ce)&&(Ze+=1,je+=kt),st.push({year:Le.year,month:xt.month,hitCount:ht,totalCents:kt})}),!(Ct<=0)&&(Le.year===we&&(pe+=en),dt.push({year:Le.year,hitCount:Ct,totalCents:en,monthsWithHits:tn,monthAverageCents:tn>0?Math.round(Kn/tn):0}))}),{id:ut("search_eval"),keyword:de,keywordNormalized:se,createdAt:Za(),totalHitCount:be,totalCents:oe,currentYearCents:pe,monthsWithHits:Ze,monthAverageCents:Ze>0?Math.round(je/Ze):0,yearRows:dt,monthRows:st}}var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vi(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var $s={exports:{}},mi=$s.exports,_r;function gi(){return _r||(_r=1,(function(B,h){((we,Q)=>{B.exports=Q()})(mi,function(){var we=function(e,t){return(we=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function de(e,t,n){for(var s,r=0,l=t.length;r<l;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:fi,be=Object.keys,oe=Array.isArray;function pe(e,t){return typeof t=="object"&&be(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||se.Promise||(se.Promise=Promise);var Ze=Object.getPrototypeOf,je={}.hasOwnProperty;function ce(e,t){return je.call(e,t)}function dt(e,t){typeof t=="function"&&(t=t(Ze(e))),(typeof Reflect>"u"?be:Reflect.ownKeys)(t).forEach(function(n){Le(e,n,t[n])})}var st=Object.defineProperty;function Le(e,t,n,s){st(e,t,pe(n&&ce(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function Ct(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Le(e.prototype,"constructor",e),{extend:dt.bind(null,e.prototype)}}}}var en=Object.getOwnPropertyDescriptor,Kn=[].slice;function tn(e,t,n){return Kn.call(e,t,n)}function xt(e,t){return t(e)}function ht(e){if(!e)throw new Error("Assertion Failed")}function kt(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Gt(e,t){if(typeof t=="string"&&ce(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var l=Gt(e,t[s]);n.push(l)}return n}var c,d=t.indexOf(".");return d===-1||(c=e[t.substr(0,d)])==null?void 0:Gt(c,t.substr(d+1))}function ft(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){ht(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)ft(e,t[s],n[s])}else{var l,c,d=t.indexOf(".");d!==-1?(l=t.substr(0,d),(d=t.substr(d+1))===""?n===void 0?oe(e)&&!isNaN(parseInt(l))?e.splice(l,1):delete e[l]:e[l]=n:ft(c=(c=e[l])&&ce(e,l)?c:e[l]={},d,n)):n===void 0?oe(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function vt(e){var t,n={};for(t in e)ce(e,t)&&(n[t]=e[t]);return n}var Bs=[].concat;function La(e){return Bs.apply([],e)}var Pt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(La([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),es=new Set(Pt.map(function(e){return se[e]})),ta=null;function wt(e){return ta=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=ta.get(n);if(s)return s;if(oe(n)){s=[],ta.set(n,s);for(var r=0,l=n.length;r<l;++r)s.push(t(n[r]))}else if(es.has(n.constructor))s=n;else{var c,d=Ze(n);for(c in s=d===Object.prototype?{}:Object.create(d),ta.set(n,s),n)ce(n,c)&&(s[c]=t(n[c]))}return s})(e),ta=null,e}var na={}.toString;function Na(e){return na.call(e).slice(8,-1)}var Ka=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ms=typeof Ka=="symbol"?function(e){var t;return e!=null&&(t=e[Ka])&&t.apply(e)}:function(){return null};function dn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var rt={};function ae(e){var t,n,s,r;if(arguments.length===1){if(oe(e))return e.slice();if(this===rt&&typeof e=="string")return[e];if(r=Ms(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var nn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Pt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Et=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Pt),ts={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function En(e,t){this.name=e,this.message=t}function ns(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function mt(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=ns(e,t)}function qn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=ns(e,this.failures)}Ct(En).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Ct(mt).from(En),Ct(qn).from(En);var xa=Et.reduce(function(e,t){return e[t]=t+"Error",e},{}),_s=En,ee=Et.reduce(function(e,t){var n=t+"Error";function s(r,l){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(l?`
 `+l:""),this.inner=l||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=ts[t]||n,this.inner=null)}return Ct(s).from(_s),e[t]=s,e},{}),as=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,Pt.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));Pt=Et.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function $e(){}function aa(e){return e}function Ts(e,t){return e==null||e===aa?t:function(n){return t(e(n))}}function Bn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ss(e,t){return e===$e?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Bn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?Bn(r,this.onerror):r),l!==void 0?l:n}}function Ps(e,t){return e===$e?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Bn(n,this.onsuccess):n),s&&(this.onerror=this.onerror?Bn(s,this.onerror):s)}}function rs(e,t){return e===$e?t:function(r){var s=e.apply(this,arguments),r=(pe(r,s),this.onsuccess),l=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Bn(r,this.onsuccess):r),l&&(this.onerror=this.onerror?Bn(l,this.onerror):l),s===void 0?c===void 0?void 0:c:pe(s,c)}}function As(e,t){return e===$e?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function sa(e,t){return e===$e?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,l=new Array(r);r--;)l[r]=arguments[r];return n.then(function(){return t.apply(s,l)})}return t.apply(this,arguments)}}Pt.ModifyError=mt,Pt.DexieError=En,Pt.BulkError=qn;var At=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Vn(e){At=e}var Rn={},jn=100,Ee=typeof Promise>"u"?[]:(Et=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ee=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Ze(Ee),Et]:[Et,Ze(Et),Et]),Et=Ee[0],zt=Ee[1],zt=zt&&zt.then,qt=Et&&Et.constructor,Yn=!!Ee[2],hn=function(e,t){oa.push([e,t]),zn&&(queueMicrotask(Wn),zn=!1)},qa=!0,zn=!0,an=[],ra=[],ia=aa,pn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},J=pn,oa=[],It=0,fn=[];function G(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=J;if(typeof e!="function"){if(e!==Rn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ka(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(l){if(s._state===null){if(l===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&mn();l&&typeof l.then=="function"?n(s,function(d,x){l instanceof G?l._then(d,x):l.then(d,x)}):(s._state=!0,s._value=l,Ye(s)),c&&Mn()}},ka.bind(null,s))}catch(l){ka(s,l)}})(this,e)}var vn={get:function(){var e=J,t=$a;function n(s,r){var l=this,c=!e.global&&(e!==J||t!==$a),d=c&&!bn(),x=new G(function(E,b){Bt(l,new is(os(s,e,c,d),os(r,e,c,d),E,b,e))});return this._consoleTask&&(x._consoleTask=this._consoleTask),x}return n.prototype=Rn,n},set:function(e){Le(this,"then",e&&e.prototype===Rn?vn:{get:function(){return e},set:vn.set})}};function is(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function ka(e,t){var n,s;ra.push(t),e._state===null&&(n=e._lib&&mn(),t=ia(t),e._state=!1,e._value=t,s=e,an.some(function(r){return r._value===s._value})||an.push(s),Ye(e),n)&&Mn()}function Ye(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)Bt(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),It===0&&(++It,hn(function(){--It==0&&la()},[]))}function Bt(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++It,hn(me,[n,e,t])}}function me(e,t,n){try{var s,r=t._value;!t._state&&ra.length&&(ra=[]),s=At&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||ra.indexOf(r)!==-1||(l=>{for(var c=an.length;c;)if(an[--c]._value===l._value)return an.splice(c,1)})(t),n.resolve(s)}catch(l){n.reject(l)}finally{--It==0&&la(),--n.psd.ref||n.psd.finalize()}}function Wn(){_n(pn,function(){mn()&&Mn()})}function mn(){var e=qa;return zn=qa=!1,e}function Mn(){var e,t,n;do for(;0<oa.length;)for(e=oa,oa=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<oa.length);zn=qa=!0}function la(){for(var e=an,t=(an=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),fn.slice(0)),n=t.length;n;)t[--n]()}function ca(e){return new G(Rn,!1,e)}function ge(e,t){var n=J;return function(){var s=mn(),r=J;try{return yn(n,!0),e.apply(this,arguments)}catch(l){t&&t(l)}finally{yn(r,!1),s&&Mn()}}}dt(G.prototype,{then:vn,_then:function(e,t){Bt(this,new is(null,null,e,t,J))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:ca)(s)}):this.then(null,function(s){return(s&&s.name===t?n:ca)(s)}))},finally:function(e){return this.then(function(t){return G.resolve(e()).then(function(){return t})},function(t){return G.resolve(e()).then(function(){return ca(t)})})},timeout:function(e,t){var n=this;return e<1/0?new G(function(s,r){var l=setTimeout(function(){return r(new ee.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,l))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Le(G.prototype,Symbol.toStringTag,"Dexie.Promise"),pn.env=Va(),dt(G,{all:function(){var e=ae.apply(null,arguments).map(Sa);return new G(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,l){return G.resolve(r).then(function(c){e[l]=c,--s||t(e)},n)})})},resolve:function(e){return e instanceof G?e:e&&typeof e.then=="function"?new G(function(t,n){e.then(t,n)}):new G(Rn,!0,e)},reject:ca,race:function(){var e=ae.apply(null,arguments).map(Sa);return new G(function(t,n){e.map(function(s){return G.resolve(s).then(t,n)})})},PSD:{get:function(){return J},set:function(e){return J=e}},totalEchoes:{get:function(){return $a}},newPSD:gn,usePSD:_n,scheduler:{get:function(){return hn},set:function(e){hn=e}},rejectionMapper:{get:function(){return ia},set:function(e){ia=e}},follow:function(e,t){return new G(function(n,s){return gn(function(r,l){var c=J;c.unhandleds=[],c.onunhandled=l,c.finalize=Bn(function(){var d,x=this;d=function(){x.unhandleds.length===0?r():l(x.unhandleds[0])},fn.push(function E(){d(),fn.splice(fn.indexOf(E),1)}),++It,hn(function(){--It==0&&la()},[])},c.finalize),e()},t,n,s)})}}),qt&&(qt.allSettled&&Le(G,"allSettled",function(){var e=ae.apply(null,arguments).map(Sa);return new G(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,l){return G.resolve(r).then(function(c){return s[l]={status:"fulfilled",value:c}},function(c){return s[l]={status:"rejected",reason:c}}).then(function(){return--n||t(s)})})})}),qt.any&&typeof AggregateError<"u"&&Le(G,"any",function(){var e=ae.apply(null,arguments).map(Sa);return new G(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(l,c){return G.resolve(l).then(function(d){return t(d)},function(d){r[c]=d,--s||n(new AggregateError(r))})})})}),qt.withResolvers)&&(G.withResolvers=qt.withResolvers);var Be={awaits:0,echoes:0,id:0},Is=0,ua=[],wa=0,$a=0,Os=0;function gn(e,c,n,s){var r=J,l=Object.create(r),c=(l.parent=r,l.ref=0,l.global=!1,l.id=++Os,pn.env,l.env=Yn?{Promise:G,PromiseProp:{value:G,configurable:!0,writable:!0},all:G.all,race:G.race,allSettled:G.allSettled,any:G.any,resolve:G.resolve,reject:G.reject}:{},c&&pe(l,c),++r.ref,l.finalize=function(){--this.parent.ref||this.parent.finalize()},_n(l,e,n,s));return l.ref===0&&l.finalize(),c}function Gn(){return Be.id||(Be.id=++Is),++Be.awaits,Be.echoes+=jn,Be.id}function bn(){return!!Be.awaits&&(--Be.awaits==0&&(Be.id=0),Be.echoes=Be.awaits*jn,!0)}function Sa(e){return Be.echoes&&e&&e.constructor===qt?(Gn(),e.then(function(t){return bn(),t},function(t){return bn(),Ue(t)})):e}function Fs(){var e=ua[ua.length-1];ua.pop(),yn(e,!1)}function yn(e,t){var n,s,r=J;(t?!Be.echoes||wa++&&e===J:!wa||--wa&&e===J)||queueMicrotask(t?(function(l){++$a,Be.echoes&&--Be.echoes!=0||(Be.echoes=Be.awaits=Be.id=0),ua.push(J),yn(l,!0)}).bind(null,e):Fs),e!==J&&(J=e,r===pn&&(pn.env=Va()),Yn)&&(n=pn.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(se,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function Va(){var e=se.Promise;return Yn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function _n(e,t,n,s,r){var l=J;try{return yn(e,!0),t(n,s,r)}finally{yn(l,!1)}}function os(e,t,n,s){return typeof e!="function"?e:function(){var r=J;n&&Gn(),yn(t,!0);try{return e.apply(this,arguments)}finally{yn(r,!1),s&&queueMicrotask(bn)}}}function Ra(e){Promise===qt&&Be.echoes===0?wa===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+zt).indexOf("[native code]")===-1&&(Gn=bn=$e);var Ue=G.reject,Tn="￿",sn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ls="String expected.",Un=[],Ea="__dbnames",ja="readonly",Pn="readwrite";function Cn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Ya={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ba(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=wt(t))[e],t}}function cs(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function fe(e,t){try{var n=us(e),s=us(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=za(e),l=za(t),c=r.length,d=l.length,x=c<d?c:d,E=0;E<x;++E)if(r[E]!==l[E])return r[E]<l[E]?-1:1;return c===d?0:c<d?-1:1;case"Array":for(var b=e,g=t,k=b.length,w=g.length,C=k<w?k:w,y=0;y<C;++y){var M=fe(b[y],g[y]);if(M!==0)return M}return k===w?0:k<w?-1:1}}catch{}return NaN}function us(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Na(e))==="ArrayBuffer")?"binary":t}function za(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Hn(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,l){return!n.failures[l]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}ds.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(oe(n))return de(de([],oe(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(oe(s))return oe(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var da=ds;function ds(e){this["@@propmod"]=e}function hs(e,t){for(var n=be(t),s=n.length,r=!1,l=0;l<s;++l){var c=n[l],d=t[c],x=Gt(e,c);d instanceof da?(ft(e,c,d.execute(x)),r=!0):x!==d&&(ft(e,c,d),r=!0)}return r}Me.prototype._trans=function(e,t,n){var s=this._tx||J.trans,r=this.name,l=At&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(E,b,g){if(g.schema[r])return t(g.idbtrans,g);throw new ee.NotFound("Table "+r+" not part of transaction")}var d=mn();try{var x=s&&s.db._novip===this.db._novip?s===J.trans?s._promise(e,c,n):gn(function(){return s._promise(e,c,n)},{trans:s,transless:J.transless||J}):(function E(b,g,k,w){if(b.idbdb&&(b._state.openComplete||J.letThrough||b._vip)){var C=b._createTransaction(g,k,b._dbSchema);try{C.create(),b._state.PR1398_maxLoop=3}catch(y){return y.name===xa.InvalidState&&b.isOpen()&&0<--b._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),b.close({disableAutoOpen:!1}),b.open().then(function(){return E(b,g,k,w)})):Ue(y)}return C._promise(g,function(y,M){return gn(function(){return J.trans=C,w(y,M,C)})}).then(function(y){if(g==="readwrite")try{C.idbtrans.commit()}catch{}return g==="readonly"?y:C._completion.then(function(){return y})})}if(b._state.openComplete)return Ue(new ee.DatabaseClosed(b._state.dbOpenError));if(!b._state.isBeingOpened){if(!b._state.autoOpen)return Ue(new ee.DatabaseClosed);b.open().catch($e)}return b._state.dbReadyPromise.then(function(){return E(b,g,k,w)})})(this.db,e,[this.name],c);return l&&(x._consoleTask=l,x=x.catch(function(E){return console.trace(E),Ue(E)})),x}finally{d&&Mn()}},Me.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ue(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},Me.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(oe(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=be(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(d){if(d.compound&&t.every(function(E){return 0<=d.keyPath.indexOf(E)})){for(var x=0;x<t.length;++x)if(t.indexOf(d.keyPath[x])===-1)return!1;return!0}return!1}).sort(function(d,x){return d.keyPath.length-x.keyPath.length})[0];if(n&&this.db._maxKey!==Tn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(d){return e[d]}));!n&&At&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(d,x){return fe(d,x)===0}var c=t.reduce(function(b,x){var E=b[0],b=b[1],g=s[x],k=e[x];return[E||g,E||!g?Cn(b,g&&g.multi?function(w){return w=Gt(w,x),oe(w)&&w.some(function(C){return r(k,C)})}:function(w){return r(k,Gt(w,x))}):b]},[null,null]),l=c[0],c=c[1];return l?this.where(l.name).equals(e[l.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Me.prototype.filter=function(e){return this.toCollection().and(e)},Me.prototype.count=function(e){return this.toCollection().count(e)},Me.prototype.offset=function(e){return this.toCollection().offset(e)},Me.prototype.limit=function(e){return this.toCollection().limit(e)},Me.prototype.each=function(e){return this.toCollection().each(e)},Me.prototype.toArray=function(e){return this.toCollection().toArray(e)},Me.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Me.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,oe(e)?"[".concat(e.join("+"),"]"):e))},Me.prototype.reverse=function(){return this.toCollection().reverse()},Me.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof cs&&(e=(c=>{var d=b,x=c;if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");function E(){this.constructor=d}function b(){return c!==null&&c.apply(this,arguments)||this}return we(d,x),d.prototype=x===null?Object.create(x):(E.prototype=x.prototype,new E),Object.defineProperty(b.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),b.prototype.table=function(){return n},b})(e)),new Set),r=e.prototype;r;r=Ze(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function l(c){if(!c)return c;var d,x=Object.create(e.prototype);for(d in c)if(!s.has(d))try{x[d]=c[d]}catch{}return x}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=l,this.hook("reading",l),e},Me.prototype.defineClass=function(){return this.mapToClass(function(e){pe(this,e)})},Me.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,c=e;return l&&r&&(c=Ba(l)(e)),this._trans("readwrite",function(d){return n.core.mutate({trans:d,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(d){return d.numFailures?G.reject(d.failures[0]):d.lastResult}).then(function(d){if(l)try{ft(e,l,d)}catch{}return d})},Me.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(l){var c=l??{};return hs(c,t),s&&ft(c,s,e),n.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(d){return d.numFailures?G.reject(d.failures[0]):!!l})})})},Me.prototype.update=function(e,t){return typeof e!="object"||oe(e)?this.where(":id").equals(e).modify(t):(e=Gt(e,this.schema.primKey.keyPath))===void 0?Ue(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Me.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,c=e;return l&&r&&(c=Ba(l)(e)),this._trans("readwrite",function(d){return n.core.mutate({trans:d,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(d){return d.numFailures?G.reject(d.failures[0]):d.lastResult}).then(function(d){if(l)try{ft(e,l,d)}catch{}return d})},Me.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return Hn(t,[e],s)}).then(function(s){return s.numFailures?G.reject(s.failures[0]):void 0})})},Me.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Ya}).then(function(n){return Hn(e,null,n)})}).then(function(t){return t.numFailures?G.reject(t.failures[0]):void 0})},Me.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Me.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,l=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var x=e.length,E=d&&E?e.map(Ba(d)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:E,wantResults:l}).then(function(b){var g=b.numFailures,k=b.failures;if(g===0)return l?b.results:b.lastResult;throw new qn("".concat(s.name,".bulkAdd(): ").concat(g," of ").concat(x," operations failed"),k)})})},Me.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,l=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var x=e.length,E=d&&E?e.map(Ba(d)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:E,wantResults:l}).then(function(b){var g=b.numFailures,k=b.failures;if(g===0)return l?b.results:b.lastResult;throw new qn("".concat(s.name,".bulkPut(): ").concat(g," of ").concat(x," operations failed"),k)})})},Me.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),l=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:s,cache:"clone"}).then(function(d){var x=[],E=[],b=(e.forEach(function(g,k){var w=g.key,C=g.changes,y=d[k];if(y){for(var M=0,_=Object.keys(C);M<_.length;M++){var $=_[M],I=C[$];if($===t.schema.primKey.keyPath){if(fe(I,w)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ft(y,$,I)}l.push(k),x.push(w),E.push(y)}}),x.length);return n.mutate({trans:c,type:"put",keys:x,values:E,updates:{keys:s,changeSpecs:r}}).then(function(g){var k=g.numFailures,w=g.failures;if(k===0)return b;for(var C=0,y=Object.keys(w);C<y.length;C++){var M,_=y[C],$=l[Number(_)];$!=null&&(M=w[_],delete w[_],w[$]=M)}throw new qn("".concat(t.name,".bulkUpdate(): ").concat(k," of ").concat(b," operations failed"),w)})})})},Me.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Hn(t,e,r)})}).then(function(s){var r=s.numFailures,l=s.failures;if(r===0)return s.lastResult;throw new qn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),l)})};var ps=Me;function Me(){}function ha(e){function t(c,d){if(d){for(var x=arguments.length,E=new Array(x-1);--x;)E[x-1]=arguments[x];return n[c].subscribe.apply(null,E),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=l;for(var s=1,r=arguments.length;s<r;++s)l(arguments[s]);return t;function l(c,d,x){var E,b;if(typeof c!="object")return d=d||As,b={subscribers:[],fire:x=x||$e,subscribe:function(g){b.subscribers.indexOf(g)===-1&&(b.subscribers.push(g),b.fire=d(b.fire,g))},unsubscribe:function(g){b.subscribers=b.subscribers.filter(function(k){return k!==g}),b.fire=b.subscribers.reduce(d,x)}},n[c]=t[c]=b;be(E=c).forEach(function(g){var k=E[g];if(oe(k))l(g,E[g][0],E[g][1]);else{if(k!=="asap")throw new ee.InvalidArgument("Invalid event config");var w=l(g,aa,function(){for(var C=arguments.length,y=new Array(C);C--;)y[C]=arguments[C];w.subscribers.forEach(function(M){kt(function(){M.apply(null,y)})})})}})}}function pa(e,t){return Ct(t).from({prototype:e}),t}function An(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Wa(e,t){e.filter=Cn(e.filter,t)}function Ma(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return Cn(s(),t())}:t,e.justLimit=n&&!s}function _a(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function fs(e,t,n){var s=_a(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function te(e,t,n,s){var r,l,c=e.replayFilter?Cn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},l=function(d,x,E){var b,g;c&&!c(x,E,function(k){return x.stop(k)},function(k){return x.fail(k)})||((g=""+(b=x.primaryKey))=="[object ArrayBuffer]"&&(g=""+new Uint8Array(b)),ce(r,g))||(r[g]=!0,t(d,x,E))},Promise.all([e.or._iterate(l,n),vs(fs(e,s,n),e.algorithm,l,!e.keysOnly&&e.valueMapper)])):vs(fs(e,s,n),Cn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function vs(e,t,n,s){var r=ge(s?function(l,c,d){return n(s(l),c,d)}:n);return e.then(function(l){if(l)return l.start(function(){var c=function(){return l.continue()};t&&!t(l,function(d){return c=d},function(d){l.stop(d),c=$e},function(d){l.fail(d),c=$e})||r(l.value,l,function(d){return c=d}),c()})})}i.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ue.bind(null,n.error)):n.table._trans("readonly",e).then(t)},i.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ue.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},i.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Cn(t.algorithm,e)},i.prototype._iterate=function(e,t){return te(this._ctx,e,t,this._ctx.table.core)},i.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&pe(n,e),t._ctx=n,t},i.prototype.raw=function(){return this._ctx.valueMapper=null,this},i.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return te(t,e,n,t.table.core)})},i.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,l=r.table.core;return An(r,!0)?l.count({trans:n,query:{index:_a(r,l.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,te(r,function(){return++s,!1},n,l).then(function(){return s}))}).then(e)},i.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function l(x,E){return E?l(x[n[E]],E-1):x[s]}var c=this._ctx.dir==="next"?1:-1;function d(x,E){return fe(l(x,r),l(E,r))*c}return this.toArray(function(x){return x.sort(d)}).then(t)},i.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,l,c=t._ctx;return c.dir==="next"&&An(c,!0)&&0<c.limit?(s=c.valueMapper,r=_a(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(d){return d=d.result,s?d.map(s):d})):(l=[],te(c,function(d){return l.push(d)},n,c.table.core).then(function(){return l}))},e)},i.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,An(t)?Ma(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):Ma(t,function(){var n=e;return function(){return--n<0}})),this},i.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Ma(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},i.prototype.until=function(e,t){return Wa(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},i.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},i.prototype.last=function(e){return this.reverse().first(e)},i.prototype.filter=function(e){var t;return Wa(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=Cn(t.isMatch,e),this},i.prototype.and=function(e){return this.filter(e)},i.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},i.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},i.prototype.desc=function(){return this.reverse()},i.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},i.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},i.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},i.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},i.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&An(t,!0)&&0<t.limit)return this._read(function(s){var r=_a(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},i.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},i.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},i.prototype.lastKey=function(e){return this.reverse().firstKey(e)},i.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Wa(this._ctx,function(s){var s=s.primaryKey.toString(),r=ce(e,s);return e[s]=!0,!r})),this},i.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(y,M){var _=M.failures;k+=y-M.numFailures;for(var $=0,I=be(_);$<I.length;$++){var F=I[$];g.push(_[F])}}var l=typeof e=="function"?e:function(y){return hs(y,e)},c=n.table.core,b=c.schema.primaryKey,d=b.outbound,x=b.extractKey,E=200,b=t.db._options.modifyChunkSize,g=(b&&(E=typeof b=="object"?b[c.name]||b["*"]||200:b),[]),k=0,w=[],C=e===p;return t.clone().primaryKeys().then(function(y){function M($){var I=Math.min(E,y.length-$),F=y.slice($,$+I);return(C?Promise.resolve([]):c.getMany({trans:s,keys:F,cache:"immutable"})).then(function(R){var j=[],D=[],W=d?[]:null,Y=C?F:[];if(!C)for(var K=0;K<I;++K){var X=R[K],ve={value:wt(X),primKey:y[$+K]};l.call(ve,ve.value,ve)!==!1&&(ve.value==null?Y.push(y[$+K]):d||fe(x(X),x(ve.value))===0?(D.push(ve.value),d&&W.push(y[$+K])):(Y.push(y[$+K]),j.push(ve.value)))}return Promise.resolve(0<j.length&&c.mutate({trans:s,type:"add",values:j}).then(function(he){for(var ne in he.failures)Y.splice(parseInt(ne),1);r(j.length,he)})).then(function(){return(0<D.length||_&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:W,values:D,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<$}).then(function(he){return r(D.length,he)})}).then(function(){return(0<Y.length||_&&C)&&c.mutate({trans:s,type:"delete",keys:Y,criteria:_,isAdditionalChunk:0<$}).then(function(he){return Hn(n.table,Y,he)}).then(function(he){return r(Y.length,he)})}).then(function(){return y.length>$+I&&M($+E)})})}var _=An(n)&&n.limit===1/0&&(typeof e!="function"||C)&&{index:n.index,range:n.range};return M(0).then(function(){if(0<g.length)throw new mt("Error modifying one or more objects",g,k,w);return y.length})})})},i.prototype.delete=function(){var e=this._ctx,t=e.range;return!An(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(p):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(l){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(x){var d=x.failures,x=x.numFailures;if(x)throw new mt("Could not delete some values",Object.keys(d).map(function(E){return d[E]}),l-x);return l-x})})})};var o=i;function i(){}var p=function(e,t){return t.value=null};function u(e,t){return e<t?-1:e===t?0:1}function v(e,t){return t<e?-1:e===t?0:1}function S(e,t,n){return e=e instanceof V?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function P(e){return new e.Collection(e,function(){return U("")}).limit(0)}function O(w,t,n,s){var r,l,c,d,x,E,b,g=n.length;if(!n.every(function(y){return typeof y=="string"}))return S(w,ls);function k(y){r=y==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},l=y==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=y==="next"?u:v;var M=n.map(function(_){return{lower:l(_),upper:r(_)}}).sort(function(_,$){return c(_.lower,$.lower)});d=M.map(function(_){return _.upper}),x=M.map(function(_){return _.lower}),b=(E=y)==="next"?"":s}k("next");var w=new w.Collection(w,function(){return A(d[0],x[g-1]+s)}),C=(w._ondirectionchange=function(y){k(y)},0);return w._addAlgorithm(function(y,M,_){var $=y.key;if(typeof $=="string"){var I=l($);if(t(I,x,C))return!0;for(var F=null,R=C;R<g;++R){var j=((D,W,Y,K,X,ve)=>{for(var he=Math.min(D.length,K.length),ne=-1,ue=0;ue<he;++ue){var Ke=W[ue];if(Ke!==K[ue])return X(D[ue],Y[ue])<0?D.substr(0,ue)+Y[ue]+Y.substr(ue+1):X(D[ue],K[ue])<0?D.substr(0,ue)+K[ue]+Y.substr(ue+1):0<=ne?D.substr(0,ne)+W[ne]+Y.substr(ne+1):null;X(D[ue],Ke)<0&&(ne=ue)}return he<K.length&&ve==="next"?D+Y.substr(D.length):he<D.length&&ve==="prev"?D.substr(0,Y.length):ne<0?null:D.substr(0,ne)+K[ne]+Y.substr(ne+1)})($,I,d[R],x[R],c,E);j===null&&F===null?C=R+1:(F===null||0<c(F,j))&&(F=j)}M(F!==null?function(){y.continue(F+b)}:_)}return!1}),w}function A(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function U(e){return{type:1,lower:e,upper:e}}Object.defineProperty(z.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),z.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?P(this):new this.Collection(this,function(){return A(e,t,!n,!s)})}catch{return S(this,sn)}},z.prototype.equals=function(e){return e==null?S(this,sn):new this.Collection(this,function(){return U(e)})},z.prototype.above=function(e){return e==null?S(this,sn):new this.Collection(this,function(){return A(e,void 0,!0)})},z.prototype.aboveOrEqual=function(e){return e==null?S(this,sn):new this.Collection(this,function(){return A(e,void 0,!1)})},z.prototype.below=function(e){return e==null?S(this,sn):new this.Collection(this,function(){return A(void 0,e,!1,!0)})},z.prototype.belowOrEqual=function(e){return e==null?S(this,sn):new this.Collection(this,function(){return A(void 0,e)})},z.prototype.startsWith=function(e){return typeof e!="string"?S(this,ls):this.between(e,e+Tn,!0,!0)},z.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):O(this,function(t,n){return t.indexOf(n[0])===0},[e],Tn)},z.prototype.equalsIgnoreCase=function(e){return O(this,function(t,n){return t===n[0]},[e],"")},z.prototype.anyOfIgnoreCase=function(){var e=ae.apply(rt,arguments);return e.length===0?P(this):O(this,function(t,n){return n.indexOf(t)!==-1},e,"")},z.prototype.startsWithAnyOfIgnoreCase=function(){var e=ae.apply(rt,arguments);return e.length===0?P(this):O(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,Tn)},z.prototype.anyOf=function(){var e,t,n=this,s=ae.apply(rt,arguments),r=this._cmp;try{s.sort(r)}catch{return S(this,sn)}return s.length===0?P(this):((e=new this.Collection(this,function(){return A(s[0],s[s.length-1])}))._ondirectionchange=function(l){r=l==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(l,c,d){for(var x=l.key;0<r(x,s[t]);)if(++t===s.length)return c(d),!1;return r(x,s[t])===0||(c(function(){l.continue(s[t])}),!1)}),e)},z.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},z.prototype.noneOf=function(){var e=ae.apply(rt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return S(this,sn)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},z.prototype.inAnyRange=function(e,_){var n=this,s=this._cmp,r=this._ascending,l=this._descending,c=this._min,d=this._max;if(e.length===0)return P(this);if(!e.every(function($){return $[0]!==void 0&&$[1]!==void 0&&r($[0],$[1])<=0}))return S(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var x=!_||_.includeLowers!==!1,E=_&&_.includeUppers===!0,b,g=r;function k($,I){return g($[0],I[0])}try{(b=e.reduce(function($,I){for(var F=0,R=$.length;F<R;++F){var j=$[F];if(s(I[0],j[1])<0&&0<s(I[1],j[0])){j[0]=c(j[0],I[0]),j[1]=d(j[1],I[1]);break}}return F===R&&$.push(I),$},[])).sort(k)}catch{return S(this,sn)}var w=0,C=E?function($){return 0<r($,b[w][1])}:function($){return 0<=r($,b[w][1])},y=x?function($){return 0<l($,b[w][0])}:function($){return 0<=l($,b[w][0])},M=C,_=new this.Collection(this,function(){return A(b[0][0],b[b.length-1][1],!x,!E)});return _._ondirectionchange=function($){g=$==="next"?(M=C,r):(M=y,l),b.sort(k)},_._addAlgorithm(function($,I,F){for(var R,j=$.key;M(j);)if(++w===b.length)return I(F),!1;return!C(R=j)&&!y(R)||(n._cmp(j,b[w][1])===0||n._cmp(j,b[w][0])===0||I(function(){g===r?$.continue(b[w][0]):$.continue(b[w][1])}),!1)}),_},z.prototype.startsWithAnyOf=function(){var e=ae.apply(rt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?P(this):this.inAnyRange(e.map(function(t){return[t,t+Tn]})):S(this,"startsWithAnyOf() only works with strings")};var V=z;function z(){}function H(e){return ge(function(t){return ie(t),e(t.target.error),!1})}function ie(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Ce="storagemutated",He="x-storagemutated-1",le=ha(null,Ce),We=(qe.prototype._lock=function(){return ht(!J.global),++this._reculock,this._reculock!==1||J.global||(J.lockOwnerFor=this),this},qe.prototype._unlock=function(){if(ht(!J.global),--this._reculock==0)for(J.global||(J.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{_n(e[1],e[0])}catch{}}return this},qe.prototype._locked=function(){return this._reculock&&J.lockOwnerFor!==this},qe.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(ht(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(s);case"MissingAPIError":throw new ee.MissingAPI(s.message,s);default:throw new ee.OpenFailed(s)}if(!this.active)throw new ee.TransactionInactive;ht(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ge(function(r){ie(r),t._reject(e.error)}),e.onabort=ge(function(r){ie(r),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ge(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&le.storagemutated.fire(e.mutatedParts)})}return this},qe.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ue(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new G(function(l,c){r._blockedFuncs.push([function(){r._promise(e,t,n).then(l,c)},J])}):n?gn(function(){var l=new G(function(c,d){r._lock();var x=t(c,d,r);x&&x.then&&x.then(c,d)});return l.finally(function(){return r._unlock()}),l._lib=!0,l}):((s=new G(function(l,c){var d=t(l,c,r);d&&d.then&&d.then(l,c)}))._lib=!0,s):Ue(new ee.TransactionInactive)},qe.prototype._root=function(){return this.parent?this.parent._root():this},qe.prototype.waitFor=function(e){var t,n=this._root(),s=G.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function l(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=l)})()),n._waitingFor);return new G(function(l,c){s.then(function(d){return n._waitingQueue.push(ge(l.bind(null,d)))},function(d){return n._waitingQueue.push(ge(c.bind(null,d)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},qe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},qe.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ce(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},qe);function qe(){}function _e(e,t,n,s,r,l,c,d){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:l,src:(n&&!c?"&":"")+(s?"*":"")+(r?"++":"")+nt(t),type:d}}function nt(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ot(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,l,c){return l=s(l,c),l&&(r[l[0]]=l[1]),r},{}))};var s}var N=function(e){try{return e.only([[]]),N=function(){return[[]]},[[]]}catch{return N=function(){return Tn},Tn}};function $t(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Gt(n,t)}:function(n){return Gt(n,e)};var t}function gt(e){return[].slice.call(e)}var rn=0;function bt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function ye(e,t,x){function s(C){if(C.type===3)return null;if(C.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var g=C.lower,k=C.upper,w=C.lowerOpen,C=C.upperOpen;return g===void 0?k===void 0?null:t.upperBound(k,!!C):k===void 0?t.lowerBound(g,!!w):t.bound(g,k,!!w,!!C)}function r(b){var g,k=b.name;return{name:k,schema:b,mutate:function(w){var C=w.trans,y=w.type,M=w.keys,_=w.values,$=w.range;return new Promise(function(I,F){I=ge(I);var R=C.objectStore(k),j=R.keyPath==null,D=y==="put"||y==="add";if(!D&&y!=="delete"&&y!=="deleteRange")throw new Error("Invalid operation type: "+y);var W,Y=(M||_||{length:1}).length;if(M&&_&&M.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(Y===0)return I({numFailures:0,failures:{},results:[],lastResult:void 0});function K(Te){++he,ie(Te)}var X=[],ve=[],he=0;if(y==="deleteRange"){if($.type===4)return I({numFailures:he,failures:ve,results:[],lastResult:void 0});$.type===3?X.push(W=R.clear()):X.push(W=R.delete(s($)))}else{var j=D?j?[_,M]:[_,null]:[M,null],ne=j[0],ue=j[1];if(D)for(var Ke=0;Ke<Y;++Ke)X.push(W=ue&&ue[Ke]!==void 0?R[y](ne[Ke],ue[Ke]):R[y](ne[Ke])),W.onerror=K;else for(Ke=0;Ke<Y;++Ke)X.push(W=R[y](ne[Ke])),W.onerror=K}function Kt(Te){Te=Te.target.result,X.forEach(function(wn,ma){return wn.error!=null&&(ve[ma]=wn.error)}),I({numFailures:he,failures:ve,results:y==="delete"?M:X.map(function(wn){return wn.result}),lastResult:Te})}W.onerror=function(Te){K(Te),Kt(Te)},W.onsuccess=Kt})},getMany:function(w){var C=w.trans,y=w.keys;return new Promise(function(M,_){M=ge(M);for(var $,I=C.objectStore(k),F=y.length,R=new Array(F),j=0,D=0,W=function(X){X=X.target,R[X._pos]=X.result,++D===j&&M(R)},Y=H(_),K=0;K<F;++K)y[K]!=null&&(($=I.get(y[K]))._pos=K,$.onsuccess=W,$.onerror=Y,++j);j===0&&M(R)})},get:function(w){var C=w.trans,y=w.key;return new Promise(function(M,_){M=ge(M);var $=C.objectStore(k).get(y);$.onsuccess=function(I){return M(I.target.result)},$.onerror=H(_)})},query:(g=d,function(w){return new Promise(function(C,y){C=ge(C);var M,_,$,D=w.trans,I=w.values,F=w.limit,j=w.query,R=F===1/0?void 0:F,W=j.index,j=j.range,D=D.objectStore(k),D=W.isPrimaryKey?D:D.index(W.name),W=s(j);if(F===0)return C({result:[]});g?((j=I?D.getAll(W,R):D.getAllKeys(W,R)).onsuccess=function(Y){return C({result:Y.target.result})},j.onerror=H(y)):(M=0,_=!I&&"openKeyCursor"in D?D.openKeyCursor(W):D.openCursor(W),$=[],_.onsuccess=function(Y){var K=_.result;return!K||($.push(I?K.value:K.primaryKey),++M===F)?C({result:$}):void K.continue()},_.onerror=H(y))})}),openCursor:function(w){var C=w.trans,y=w.values,M=w.query,_=w.reverse,$=w.unique;return new Promise(function(I,F){I=ge(I);var D=M.index,R=M.range,j=C.objectStore(k),j=D.isPrimaryKey?j:j.index(D.name),D=_?$?"prevunique":"prev":$?"nextunique":"next",W=!y&&"openKeyCursor"in j?j.openKeyCursor(s(R),D):j.openCursor(s(R),D);W.onerror=H(F),W.onsuccess=ge(function(Y){var K,X,ve,he,ne=W.result;ne?(ne.___id=++rn,ne.done=!1,K=ne.continue.bind(ne),X=(X=ne.continuePrimaryKey)&&X.bind(ne),ve=ne.advance.bind(ne),he=function(){throw new Error("Cursor not stopped")},ne.trans=C,ne.stop=ne.continue=ne.continuePrimaryKey=ne.advance=function(){throw new Error("Cursor not started")},ne.fail=ge(F),ne.next=function(){var ue=this,Ke=1;return this.start(function(){return Ke--?ue.continue():ue.stop()}).then(function(){return ue})},ne.start=function(ue){function Ke(){if(W.result)try{ue()}catch(Te){ne.fail(Te)}else ne.done=!0,ne.start=function(){throw new Error("Cursor behind last entry")},ne.stop()}var Kt=new Promise(function(Te,wn){Te=ge(Te),W.onerror=H(wn),ne.fail=wn,ne.stop=function(ma){ne.stop=ne.continue=ne.continuePrimaryKey=ne.advance=he,Te(ma)}});return W.onsuccess=ge(function(Te){W.onsuccess=Ke,Ke()}),ne.continue=K,ne.continuePrimaryKey=X,ne.advance=ve,Ke(),Kt},I(ne)):I(null)},F)})},count:function(w){var C=w.query,y=w.trans,M=C.index,_=C.range;return new Promise(function($,I){var F=y.objectStore(k),F=M.isPrimaryKey?F:F.index(M.name),R=s(_),R=R?F.count(R):F.count();R.onsuccess=ge(function(j){return $(j.target.result)}),R.onerror=H(I)})}}}l=x,c=gt((x=e).objectStoreNames);var l,x={schema:{name:x.name,tables:c.map(function(b){return l.objectStore(b)}).map(function(b){var g=b.keyPath,k=b.autoIncrement,C=oe(g),w={},C={name:b.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:g==null,compound:C,keyPath:g,autoIncrement:k,unique:!0,extractKey:$t(g)},indexes:gt(b.indexNames).map(function(y){return b.index(y)}).map(function($){var I=$.name,M=$.unique,_=$.multiEntry,$=$.keyPath,I={name:I,compound:oe($),keyPath:$,unique:M,multiEntry:_,extractKey:$t($)};return w[bt($)]=I}),getIndexByKeyPath:function(y){return w[bt(y)]}};return w[":id"]=C.primaryKey,g!=null&&(w[bt(g)]=C.primaryKey),C})},hasGetAll:0<c.length&&"getAll"in l.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=x.schema,d=x.hasGetAll,x=c.tables.map(r),E={};return x.forEach(function(b){return E[b.name]=b}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(b){if(E[b])return E[b];throw new Error("Table '".concat(b,"' not found"))},MIN_KEY:-1/0,MAX_KEY:N(t),schema:c}}function Vt(e,t,n,s){return n=n.IDBKeyRange,t=ye(t,n,s),{dbcore:e.dbcore.reduce(function(r,l){return l=l.create,Q(Q({},r),l(r))},t)}}function Ne(e,t){var n=t.db,n=Vt(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(l){return l.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function ze(e,t,n,s){n.forEach(function(r){var l=s[r];t.forEach(function(c){var d=(function x(E,b){return en(E,b)||(E=Ze(E))&&x(E,b)})(c,r);(!d||"value"in d&&d.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?Le(c,r,{get:function(){return this.table(r)},set:function(x){st(this,r,{value:x,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,l))})})}function Je(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function et(e,t){return e._cfg.version-t._cfg.version}function tt(e,t,n,s){var r=e._dbSchema,l=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=Ot("$meta",Ve("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(l.create(n),l._completion.catch(s),l._reject.bind(l)),d=J.transless||J;gn(function(){if(J.trans=l,J.transless=d,t!==0)return Ne(e,n),E=t,((x=l).storeNames.includes("$meta")?x.table("$meta").get("version").then(function(b){return b??E}):G.resolve(E)).then(function(M){var g=e,k=M,w=l,C=n,y=[],M=g._versions,_=g._dbSchema=Rt(0,g.idbdb,C);return(M=M.filter(function($){return $._cfg.version>=k})).length===0?G.resolve():(M.forEach(function($){y.push(function(){var I,F,R,j=_,D=$._cfg.dbschema,W=(xe(g,j,C),xe(g,D,C),_=g._dbSchema=D,Ft(j,D)),Y=(W.add.forEach(function(K){Dt(C,K[0],K[1].primKey,K[1].indexes)}),W.change.forEach(function(K){if(K.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var X=C.objectStore(K.name);K.add.forEach(function(ve){return it(X,ve)}),K.change.forEach(function(ve){X.deleteIndex(ve.name),it(X,ve)}),K.del.forEach(function(ve){return X.deleteIndex(ve)})}),$._cfg.contentUpgrade);if(Y&&$._cfg.version>k)return Ne(g,C),w._memoizedTables={},I=vt(D),W.del.forEach(function(K){I[K]=j[K]}),Je(g,[g.Transaction.prototype]),ze(g,[g.Transaction.prototype],be(I),I),w.schema=I,(F=nn(Y))&&Gn(),D=G.follow(function(){var K;(R=Y(w))&&F&&(K=bn.bind(null,null),R.then(K,K))}),R&&typeof R.then=="function"?G.resolve(R):D.then(function(){return R})}),y.push(function(I){var F,R,j=$._cfg.dbschema;F=j,R=I,[].slice.call(R.db.objectStoreNames).forEach(function(D){return F[D]==null&&R.db.deleteObjectStore(D)}),Je(g,[g.Transaction.prototype]),ze(g,[g.Transaction.prototype],g._storeNames,g._dbSchema),w.schema=g._dbSchema}),y.push(function(I){g.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(g.idbdb.version/10)===$._cfg.version?(g.idbdb.deleteObjectStore("$meta"),delete g._dbSchema.$meta,g._storeNames=g._storeNames.filter(function(F){return F!=="$meta"})):I.objectStore("$meta").put($._cfg.version,"version"))})}),(function $(){return y.length?G.resolve(y.shift()(w.idbtrans)).then($):G.resolve()})().then(function(){Lt(_,C)}))}).catch(c);var x,E;be(r).forEach(function(b){Dt(n,b,r[b].primKey,r[b].indexes)}),Ne(e,n),G.follow(function(){return e.on.populate.fire(l)}).catch(c)})}function Ut(e,t){Lt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Rt(0,e.idbdb,t);xe(e,e._dbSchema,t);for(var s=0,r=Ft(n,e._dbSchema).change;s<r.length;s++){var l=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var d=t.objectStore(c.name);c.add.forEach(function(x){At&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(x.src)),it(d,x)})})(r[s]);if(typeof l=="object")return l.value}}function Ft(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],l=t[n];if(r){var c={name:n,def:l,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(l.primKey.keyPath||"")||r.primKey.auto!==l.primKey.auto)c.recreate=!0,s.change.push(c);else{var d=r.idxByName,x=l.idxByName,E=void 0;for(E in d)x[E]||c.del.push(E);for(E in x){var b=d[E],g=x[E];b?b.src!==g.src&&c.change.push(g):c.add.push(g)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([n,l])}return s}function Dt(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(l){return it(r,l)})}function Lt(e,t){be(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(At&&console.debug("Dexie: Creating missing table",n),Dt(t,n,e[n].primKey,e[n].indexes))})}function it(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Rt(e,t,n){var s={};return tn(t.objectStoreNames,0).forEach(function(r){for(var l=n.objectStore(r),c=_e(nt(E=l.keyPath),E||"",!0,!1,!!l.autoIncrement,E&&typeof E!="string",!0),d=[],x=0;x<l.indexNames.length;++x){var b=l.index(l.indexNames[x]),E=b.keyPath,b=_e(b.name,E,!!b.unique,!!b.multiEntry,!1,E&&typeof E!="string",!1);d.push(b)}s[r]=Ot(r,c,d)}),s}function xe(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var l=s[r],c=n.objectStore(l);e._hasGetAll="getAll"in c;for(var d=0;d<c.indexNames.length;++d){var x,E=c.indexNames[d],b=c.index(E).keyPath,b=typeof b=="string"?b:"["+tn(b).join("+")+"]";t[l]&&(x=t[l].idxByName[b])&&(x.name=E,delete t[l].idxByName[b],t[l].idxByName[E]=x)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Ve(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),l=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return _e(r,l||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),oe(l),n===0,s)})}Ae.prototype._createTableSchema=Ot,Ae.prototype._parseIndexSyntax=Ve,Ae.prototype._parseStoresSpec=function(e,t){var n=this;be(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),l=r.shift();if(!l)throw new ee.Schema("Invalid schema for table "+s+": "+e[s]);if(l.unique=!0,l.multi)throw new ee.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),l=n._createTableSchema(s,l,r),t[s]=l}})},Ae.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?pe(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(l){pe(s,l._cfg.storesSource),r=l._cfg.dbschema={},l._parseStoresSpec(s,r)}),t._dbSchema=r,Je(t,[t._allTables,t,t.Transaction.prototype]),ze(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],be(r),r),t._storeNames=be(r),this},Ae.prototype.upgrade=function(e){return this._cfg.contentUpgrade=sa(this._cfg.contentUpgrade||$e,e),this};var Xe=Ae;function Ae(){}function Re(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new cn(Ea,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function on(e){return e&&typeof e.databases=="function"}function Ie(e){return gn(function(){return J.letThrough=!0,e()})}function ln(e){return!("from"in e)}var Oe=function(e,t){var n;if(!this)return n=new Oe,e&&"d"in e&&pe(n,e),n;pe(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function re(e,t,n){var s=fe(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(ln(e))return pe(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(fe(n,e.from)<0)return s?re(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Ht(e);if(0<fe(t,e.to))return r?re(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Ht(e);fe(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<fe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&ot(e,s),r&&t&&ot(e,r)}}function ot(e,t){ln(t)||(function n(s,r){var l=r.from,c=r.l,d=r.r;re(s,l,r.to),c&&n(s,c),d&&n(s,d)})(e,t)}function Mt(e,t){var n=xn(t),s=n.next();if(!s.done)for(var r=s.value,l=xn(e),c=l.next(r.from),d=c.value;!s.done&&!c.done;){if(fe(d.from,r.to)<=0&&0<=fe(d.to,r.from))return!0;fe(r.from,d.from)<0?r=(s=n.next(d.from)).value:d=(c=l.next(r.from)).value}return!1}function xn(e){var t=ln(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&fe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||fe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ht(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=Q({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=kn(n)),e.d=kn(e)}function kn(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function jt(e,t){return be(t).forEach(function(n){e[n]?ot(e[n],t[n]):e[n]=(function s(r){var l,c,d={};for(l in r)ce(r,l)&&(c=r[l],d[l]=!c||typeof c!="object"||es.has(c.constructor)?c:s(c));return d})(t[n])}),e}function lt(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Mt(t[n],e[n])})}dt(Oe.prototype,((Et={add:function(e){return ot(this,e),this},addKey:function(e){return re(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return re(t,n,n)}),this},hasKey:function(e){var t=xn(this).next(e).value;return t&&fe(t.from,e)<=0&&0<=fe(t.to,e)}})[Ka]=function(){return xn(this)},Et));var at={},ct={},Jn=!1;function Yt(e){jt(ct,e),Jn||(Jn=!0,setTimeout(function(){Jn=!1,Xn(ct,!(ct={}))},0))}function Xn(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(at);s<r.length;s++)In(d=r[s],e,n,t);else for(var l in e){var c,d,l=/^idb\:\/\/(.*)\/(.*)\//.exec(l);l&&(c=l[1],l=l[2],d=at["idb://".concat(c,"/").concat(l)])&&In(d,e,n,t)}n.forEach(function(x){return x()})}function In(e,t,n,s){for(var r=[],l=0,c=Object.entries(e.queries.query);l<c.length;l++){for(var d=c[l],x=d[0],E=[],b=0,g=d[1];b<g.length;b++){var k=g[b];lt(t,k.obsSet)?k.subscribers.forEach(function(M){return n.add(M)}):s&&E.push(k)}s&&r.push([x,E])}if(s)for(var w=0,C=r;w<C.length;w++){var y=C[w],x=y[0],E=y[1];e.queries.query[x]=E}}function Ga(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ue(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),l=!1;function c(){if(t.openCanceller!==s)throw new ee.DatabaseClosed("db.open() was cancelled")}function d(){return new G(function(k,w){if(c(),!n)throw new ee.MissingAPI;var C=e.name,y=t.autoSchema||!r?n.open(C):n.open(C,r);if(!y)throw new ee.MissingAPI;y.onerror=H(w),y.onblocked=ge(e._fireOnBlocked),y.onupgradeneeded=ge(function(M){var _;b=y.transaction,t.autoSchema&&!e._options.allowEmptyDB?(y.onerror=ie,b.abort(),y.result.close(),(_=n.deleteDatabase(C)).onsuccess=_.onerror=ge(function(){w(new ee.NoSuchDatabase("Database ".concat(C," doesnt exist")))})):(b.onerror=H(w),_=M.oldVersion>Math.pow(2,62)?0:M.oldVersion,g=_<1,e.idbdb=y.result,l&&Ut(e,b),tt(e,_/10,b,w))},w),y.onsuccess=ge(function(){b=null;var M,_,$,I,F,R,j=e.idbdb=y.result,D=tn(j.objectStoreNames);if(0<D.length)try{var W=j.transaction((F=D).length===1?F[0]:F,"readonly");if(t.autoSchema)R=j,I=W,($=e).verno=R.version/10,I=$._dbSchema=Rt(0,R,I),$._storeNames=tn(R.objectStoreNames,0),ze($,[$._allTables],be(I),I);else if(xe(e,e._dbSchema,W),_=W,((_=Ft(Rt(0,(M=e).idbdb,_),M._dbSchema)).add.length||_.change.some(function(Y){return Y.add.length||Y.change.length}))&&!l)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),r=j.version+1,l=!0,k(d());Ne(e,W)}catch{}Un.push(e),j.onversionchange=ge(function(Y){t.vcFired=!0,e.on("versionchange").fire(Y)}),j.onclose=ge(function(){e.close({disableAutoOpen:!1})}),g&&(D=e._deps,F=C,on(R=D.indexedDB)||F===Ea||Re(R,D.IDBKeyRange).put({name:F}).catch($e)),k()},w)}).catch(function(k){switch(k?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),d();break;case"VersionError":if(0<r)return r=0,d()}return G.reject(k)})}var x,E=t.dbReadyResolve,b=null,g=!1;return G.race([s,(typeof navigator>"u"?G.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(k){function w(){return indexedDB.databases().finally(k)}x=setInterval(w,100),w()}).finally(function(){return clearInterval(x)}):Promise.resolve()).then(d)]).then(function(){return c(),t.onReadyBeingFired=[],G.resolve(Ie(function(){return e.on.ready.fire(e.vip)})).then(function k(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(sa,$e),t.onReadyBeingFired=[],G.resolve(Ie(function(){return w(e.vip)})).then(k)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(k){t.dbOpenError=k;try{b&&b.abort()}catch{}return s===t.openCanceller&&e._close(),Ue(k)}).finally(function(){t.openComplete=!0,E()}).then(function(){var k;return g&&(k={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(C){C.name&&(k["idb://".concat(e.name,"/").concat(w.name,"/").concat(C.name)]=new Oe(-1/0,[[[]]]))}),k["idb://".concat(e.name,"/").concat(w.name,"/")]=k["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new Oe(-1/0,[[[]]])}),le(Ce).fire(k),Xn(k,!0)),e})}function T(e){function t(l){return e.next(l)}var n=r(t),s=r(function(l){return e.throw(l)});function r(l){return function(d){var d=l(d),x=d.value;return d.done?x:x&&typeof x.then=="function"?x.then(n,s):oe(x)?Promise.all(x).then(n,s):n(x)}}return r(t)()}function L(e,t,n){for(var s=oe(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var Nt={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Q(Q({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},l=[];function c(k,w,C){var $=bt(k),y=r[$]=r[$]||[],M=k==null?0:typeof k=="string"?1:k.length,_=0<w,$=Q(Q({},C),{name:_?"".concat($,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:_,keyTail:w,keyLength:M,extractKey:$t(k),unique:!_&&C.unique});return y.push($),$.isPrimaryKey||l.push($),1<M&&c(M===2?k[0]:k.slice(0,M-1),w+1,C),y.sort(function(I,F){return I.keyTail-F.keyTail}),$}var d=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[d];for(var x=0,E=s.indexes;x<E.length;x++){var b=E[x];c(b.keyPath,0,b)}function g(k){var w,C=k.query.index;return C.isVirtual?Q(Q({},k),{query:{index:C.lowLevelIndex,range:(w=k.query.range,C=C.keyTail,{type:w.type===1?2:w.type,lower:L(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,C),lowerOpen:!0,upper:L(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,C),upperOpen:!0})}}):k}return Q(Q({},n),{schema:Q(Q({},s),{primaryKey:d,indexes:l,getIndexByKeyPath:function(k){return(k=r[bt(k)])&&k[0]}}),count:function(k){return n.count(g(k))},query:function(k){return n.query(g(k))},openCursor:function(k){var w=k.query.index,C=w.keyTail,y=w.keyLength;return w.isVirtual?n.openCursor(g(k)).then(function(_){return _&&M(_)}):n.openCursor(k);function M(_){return Object.create(_,{continue:{value:function($){$!=null?_.continue(L($,k.reverse?e.MAX_KEY:e.MIN_KEY,C)):k.unique?_.continue(_.key.slice(0,y).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,C)):_.continue()}},continuePrimaryKey:{value:function($,I){_.continuePrimaryKey(L($,e.MAX_KEY,C),I)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var $=_.key;return y===1?$[0]:$.slice(0,y)}},value:{get:function(){return _.value}}})}}})}})}};function Qn(e,t,n,s){return n=n||{},s=s||"",be(e).forEach(function(r){var l,c,d;ce(t,r)?(l=e[r],c=t[r],typeof l=="object"&&typeof c=="object"&&l&&c?(d=Na(l))!==Na(c)?n[s+r]=t[r]:d==="Object"?Qn(l,c,n,s+r+"."):l!==c&&(n[s+r]=t[r]):l!==c&&(n[s+r]=t[r])):n[s+r]=void 0}),be(t).forEach(function(r){ce(e,r)||(n[s+r]=t[r])}),n}function fa(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var ms={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Q(Q({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return Q(Q({},n),{mutate:function(r){var l=J.trans,c=l.table(t).hook,d=c.deleting,x=c.creating,E=c.updating;switch(r.type){case"add":if(x.fire===$e)break;return l._promise("readwrite",function(){return b(r)},!0);case"put":if(x.fire===$e&&E.fire===$e)break;return l._promise("readwrite",function(){return b(r)},!0);case"delete":if(d.fire===$e)break;return l._promise("readwrite",function(){return b(r)},!0);case"deleteRange":if(d.fire===$e)break;return l._promise("readwrite",function(){return(function g(k,w,C){return n.query({trans:k,values:!1,query:{index:s,range:w},limit:C}).then(function(y){var M=y.result;return b({type:"delete",keys:M,trans:k}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):M.length<C?{failures:[],numFailures:0,lastResult:void 0}:g(k,Q(Q({},w),{lower:M[M.length-1],lowerOpen:!0}),C)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function b(g){var k,w,C,y=J.trans,M=g.keys||fa(s,g);if(M)return(g=g.type==="add"||g.type==="put"?Q(Q({},g),{keys:M}):Q({},g)).type!=="delete"&&(g.values=de([],g.values)),g.keys&&(g.keys=de([],g.keys)),k=n,C=M,((w=g).type==="add"?Promise.resolve([]):k.getMany({trans:w.trans,keys:C,cache:"immutable"})).then(function(_){var $=M.map(function(I,F){var R,j,D,W=_[F],Y={onerror:null,onsuccess:null};return g.type==="delete"?d.fire.call(Y,I,W,y):g.type==="add"||W===void 0?(R=x.fire.call(Y,I,g.values[F],y),I==null&&R!=null&&(g.keys[F]=I=R,s.outbound||ft(g.values[F],s.keyPath,I))):(R=Qn(W,g.values[F]),(j=E.fire.call(Y,R,I,W,y))&&(D=g.values[F],Object.keys(j).forEach(function(K){ce(D,K)?D[K]=j[K]:ft(D,K,j[K])}))),Y});return n.mutate(g).then(function(I){for(var F=I.failures,R=I.results,j=I.numFailures,I=I.lastResult,D=0;D<M.length;++D){var W=(R||M)[D],Y=$[D];W==null?Y.onerror&&Y.onerror(F[D]):Y.onsuccess&&Y.onsuccess(g.type==="put"&&_[D]?g.values[D]:W)}return{failures:F,results:R,numFailures:j,lastResult:I}}).catch(function(I){return $.forEach(function(F){return F.onerror&&F.onerror(I)}),Promise.reject(I)})});throw new Error("Keys missing")}}})}})}};function Ua(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,l=0;r<t.keys.length&&l<e.length;++r)fe(t.keys[r],e[l])===0&&(s.push(n?wt(t.values[r]):t.values[r]),++l);return s.length===e.length?s:null}catch{return null}}var Jt={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return Q(Q({},n),{getMany:function(s){var r;return s.cache?(r=Ua(s.keys,s.trans._cache,s.cache==="clone"))?G.resolve(r):n.getMany(s).then(function(l){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?wt(l):l},l}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function gs(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Xt(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ds={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Oe(e.MIN_KEY,e.MAX_KEY);return Q(Q({},e),{transaction:function(s,r,l){if(J.subscr&&r!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(J.querier));return e.transaction(s,r,l)},table:function(s){function r(M){var y,M=M.query;return[y=M.index,new Oe((y=(M=M.range).lower)!=null?y:e.MIN_KEY,(y=M.upper)!=null?y:e.MAX_KEY)]}var l=e.table(s),c=l.schema,d=c.primaryKey,x=c.indexes,E=d.extractKey,b=d.outbound,g=d.autoIncrement&&x.filter(function(C){return C.compound&&C.keyPath.includes(d.keyPath)}),k=Q(Q({},l),{mutate:function(C){function y(X){return X="idb://".concat(t,"/").concat(s,"/").concat(X),F[X]||(F[X]=new Oe)}var M,_,$,I=C.trans,F=C.mutatedParts||(C.mutatedParts={}),R=y(""),j=y(":dels"),D=C.type,Y=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[fa(d,C).filter(function(X){return X}),C.values]:[],W=Y[0],Y=Y[1],K=C.trans._cache;return oe(W)?(R.addKeys(W),(D=D==="delete"||W.length===Y.length?Ua(W,K):null)||j.addKeys(W),(D||Y)&&(M=y,_=D,$=Y,c.indexes.forEach(function(X){var ve=M(X.name||"");function he(ue){return ue!=null?X.extractKey(ue):null}function ne(ue){X.multiEntry&&oe(ue)?ue.forEach(function(Ke){return ve.addKey(Ke)}):ve.addKey(ue)}(_||$).forEach(function(ue,Te){var Kt=_&&he(_[Te]),Te=$&&he($[Te]);fe(Kt,Te)!==0&&(Kt!=null&&ne(Kt),Te!=null)&&ne(Te)})}))):W?(Y={from:(K=W.lower)!=null?K:e.MIN_KEY,to:(D=W.upper)!=null?D:e.MAX_KEY},j.add(Y),R.add(Y)):(R.add(n),j.add(n),c.indexes.forEach(function(X){return y(X.name).add(n)})),l.mutate(C).then(function(X){return!W||C.type!=="add"&&C.type!=="put"||(R.addKeys(X.results),g&&g.forEach(function(ve){for(var he=C.values.map(function(Kt){return ve.extractKey(Kt)}),ne=ve.keyPath.findIndex(function(Kt){return Kt===d.keyPath}),ue=0,Ke=X.results.length;ue<Ke;++ue)he[ue][ne]=X.results[ue];y(ve.name).addKeys(he)})),I.mutatedParts=jt(I.mutatedParts||{},F),X})}}),w={get:function(C){return[d,new Oe(C.key)]},getMany:function(C){return[d,new Oe().addKeys(C.keys)]},count:r,query:r,openCursor:r};return be(w).forEach(function(C){k[C]=function(y){var M=J.subscr,_=!!M,$=gs(J,l)&&Xt(C,y)?y.obsSet={}:M;if(_){var I,M=function(Y){return Y="idb://".concat(t,"/").concat(s,"/").concat(Y),$[Y]||($[Y]=new Oe)},F=M(""),R=M(":dels"),_=w[C](y),j=_[0],_=_[1];if((C==="query"&&j.isPrimaryKey&&!y.values?R:M(j.name||"")).add(_),!j.isPrimaryKey){if(C!=="count")return I=C==="query"&&b&&y.values&&l.query(Q(Q({},y),{values:!1})),l[C].apply(this,arguments).then(function(Y){if(C==="query"){if(b&&y.values)return I.then(function(he){return he=he.result,F.addKeys(he),Y});var K=y.values?Y.result.map(E):Y.result;(y.values?F:R).addKeys(K)}else{var X,ve;if(C==="openCursor")return ve=y.values,(X=Y)&&Object.create(X,{key:{get:function(){return R.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var he=X.primaryKey;return R.addKey(he),he}},value:{get:function(){return ve&&F.addKey(X.primaryKey),X.value}}})}return Y});R.add(n)}}return l[C].apply(this,arguments)}}),k}})}};function bs(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=Q({},t),oe(s.keys)&&(s.keys=s.keys.filter(function(r,l){return!(l in n.failures)})),"values"in s&&oe(s.values)&&(s.values=s.values.filter(function(r,l){return!(l in n.failures)})),s)}function Ta(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<fe(n,s.lower):0<=fe(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?fe(n,s.upper)<0:fe(n,s.upper)<=0));var n,s}function Ha(e,t,n,s,r,l){var c,d,x,E,b,g;return!n||n.length===0||(c=t.query.index,d=c.multiEntry,x=t.query.range,E=s.schema.primaryKey.extractKey,b=c.extractKey,g=(c.lowLevelIndex||c).extractKey,(s=n.reduce(function(k,w){var C=k,y=[];if(w.type==="add"||w.type==="put")for(var M=new Oe,_=w.values.length-1;0<=_;--_){var $,I=w.values[_],F=E(I);!M.hasKey(F)&&($=b(I),d&&oe($)?$.some(function(Y){return Ta(Y,x)}):Ta($,x))&&(M.addKey(F),y.push(I))}switch(w.type){case"add":var R=new Oe().addKeys(t.values?k.map(function(K){return E(K)}):k),C=k.concat(t.values?y.filter(function(K){return K=E(K),!R.hasKey(K)&&(R.addKey(K),!0)}):y.map(function(K){return E(K)}).filter(function(K){return!R.hasKey(K)&&(R.addKey(K),!0)}));break;case"put":var j=new Oe().addKeys(w.values.map(function(K){return E(K)}));C=k.filter(function(K){return!j.hasKey(t.values?E(K):K)}).concat(t.values?y:y.map(function(K){return E(K)}));break;case"delete":var D=new Oe().addKeys(w.keys);C=k.filter(function(K){return!D.hasKey(t.values?E(K):K)});break;case"deleteRange":var W=w.range;C=k.filter(function(K){return!Ta(E(K),W)})}return C},e))===e)?e:(s.sort(function(k,w){return fe(g(k),g(w))||fe(E(k),E(w))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),l?Object.freeze(s):s)}function Ja(e,t){return fe(e.lower,t.lower)===0&&fe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function ys(e,t){return((n,s,r,l)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=fe(n,s))===0){if(r&&l)return 0;if(r)return 1;if(l)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,l)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=fe(n,s))===0){if(r&&l)return 0;if(r)return-1;if(l)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Cs(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,l;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,l=t,setTimeout(function(){r.subscribers.size===0&&dn(l,r)},3e3))})}var xs={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Q(Q({},e),{transaction:function(n,s,r){var l,c,d=e.transaction(n,s,r);return s==="readwrite"&&(r=(l=new AbortController).signal,d.addEventListener("abort",(c=function(x){return function(){if(l.abort(),s==="readwrite"){for(var E=new Set,b=0,g=n;b<g.length;b++){var k=g[b],w=at["idb://".concat(t,"/").concat(k)];if(w){var C=e.table(k),y=w.optimisticOps.filter(function(X){return X.trans===d});if(d._explicit&&x&&d.mutatedParts)for(var M=0,_=Object.values(w.queries.query);M<_.length;M++)for(var $=0,I=(j=_[M]).slice();$<I.length;$++)lt((D=I[$]).obsSet,d.mutatedParts)&&(dn(j,D),D.subscribers.forEach(function(X){return E.add(X)}));else if(0<y.length){w.optimisticOps=w.optimisticOps.filter(function(X){return X.trans!==d});for(var F=0,R=Object.values(w.queries.query);F<R.length;F++)for(var j,D,W,Y=0,K=(j=R[F]).slice();Y<K.length;Y++)(D=K[Y]).res!=null&&d.mutatedParts&&(x&&!D.dirty?(W=Object.isFrozen(D.res),W=Ha(D.res,D.req,y,C,D,W),D.dirty?(dn(j,D),D.subscribers.forEach(function(X){return E.add(X)})):W!==D.res&&(D.res=W,D.promise=G.resolve({result:W}))):(D.dirty&&dn(j,D),D.subscribers.forEach(function(X){return E.add(X)})))}}}E.forEach(function(X){return X()})}}})(!1),{signal:r}),d.addEventListener("error",c(!1),{signal:r}),d.addEventListener("complete",c(!0),{signal:r})),d},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return Q(Q({},s),{mutate:function(l){var c,d=J.trans;return!r.outbound&&d.db._options.cache!=="disabled"&&!d.explicit&&d.idbtrans.mode==="readwrite"&&(c=at["idb://".concat(t,"/").concat(n)])?(d=s.mutate(l),l.type!=="add"&&l.type!=="put"||!(50<=l.values.length||fa(r,l).some(function(x){return x==null}))?(c.optimisticOps.push(l),l.mutatedParts&&Yt(l.mutatedParts),d.then(function(x){0<x.numFailures&&(dn(c.optimisticOps,l),(x=bs(0,l,x))&&c.optimisticOps.push(x),l.mutatedParts)&&Yt(l.mutatedParts)}),d.catch(function(){dn(c.optimisticOps,l),l.mutatedParts&&Yt(l.mutatedParts)})):d.then(function(x){var E=bs(0,Q(Q({},l),{values:l.values.map(function(b,g){var k;return x.failures[g]?b:(ft(k=(k=r.keyPath)!=null&&k.includes(".")?wt(b):Q({},b),r.keyPath,x.results[g]),k)})}),x);c.optimisticOps.push(E),queueMicrotask(function(){return l.mutatedParts&&Yt(l.mutatedParts)})}),d):s.mutate(l)},query:function(l){var c,d,x,E,b,g,k;return gs(J,s)&&Xt("query",l)?(c=((x=J.trans)==null?void 0:x.db._options.cache)==="immutable",d=(x=J).requery,x=x.signal,g=((w,C,y,M)=>{var _=at["idb://".concat(w,"/").concat(C)];if(!_)return[];if(!(w=_.queries[y]))return[null,!1,_,null];var $=w[(M.query?M.query.index.name:null)||""];if(!$)return[null,!1,_,null];switch(y){case"query":var I=$.find(function(F){return F.req.limit===M.limit&&F.req.values===M.values&&Ja(F.req.query.range,M.query.range)});return I?[I,!0,_,$]:[$.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=M.limit&&(!M.values||F.req.values)&&ys(F.req.query.range,M.query.range)}),!1,_,$];case"count":return I=$.find(function(F){return Ja(F.req.query.range,M.query.range)}),[I,!!I,_,$]}})(t,n,"query",l),k=g[0],E=g[2],b=g[3],k&&g[1]?k.obsSet=l.obsSet:(g=s.query(l).then(function(w){var C=w.result;if(k&&(k.res=C),c){for(var y=0,M=C.length;y<M;++y)Object.freeze(C[y]);Object.freeze(C)}else w.result=wt(C);return w}).catch(function(w){return b&&k&&dn(b,k),Promise.reject(w)}),k={obsSet:l.obsSet,promise:g,subscribers:new Set,type:"query",req:l,dirty:!1},b?b.push(k):(b=[k],(E=E||(at["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[l.query.index.name||""]=b)),Cs(k,b,d,x),k.promise.then(function(w){return{result:Ha(w.result,l,E?.optimisticOps,s,k,c)}})):s.query(l)}})}})}};function Pa(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}Ge.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(et),n.stores({}),this._state.autoSchema=!1),n},Ge.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||J.letThrough||this._vip)?e():new G(function(n,s){if(t._state.openComplete)return s(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ee.DatabaseClosed);t.open().catch($e)}t._state.dbReadyPromise.then(n,s)}).then(e)},Ge.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,l=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return l.push({stack:t,create:n,level:s??10,name:r}),l.sort(function(c,d){return c.level-d.level}),this},Ge.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},Ge.prototype.open=function(){var e=this;return _n(pn,function(){return Ga(e)})},Ge.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Un.indexOf(this);if(0<=t&&Un.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new G(function(n){e.dbReadyResolve=n}),e.openCanceller=new G(function(n,s){e.cancelOpen=s}))},Ge.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ge.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new G(function(r,l){function c(){t.close(e);var d=t._deps.indexedDB.deleteDatabase(t.name);d.onsuccess=ge(function(){var x,E,b;x=t._deps,E=t.name,on(b=x.indexedDB)||E===Ea||Re(b,x.IDBKeyRange).delete(E).catch($e),r()}),d.onerror=H(l),d.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},Ge.prototype.backendDB=function(){return this.idbdb},Ge.prototype.isOpen=function(){return this.idbdb!==null},Ge.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ge.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ge.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ge.prototype,"tables",{get:function(){var e=this;return be(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ge.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new ee.InvalidArgument("Too few arguments");for(var l=new Array(r-1);--r;)l[r-1]=arguments[r];return s=l.pop(),[t,La(l),s]}).apply(this,arguments);return this._transaction.apply(this,e)},Ge.prototype._transaction=function(e,t,n){var s,r,l=this,c=J.trans,d=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(E){if(E=E instanceof l.Table?E.name:E,typeof E!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return E}),e=="r"||e===ja)s=ja;else{if(e!="rw"&&e!=Pn)throw new ee.InvalidArgument("Invalid transaction mode: "+e);s=Pn}if(c){if(c.mode===ja&&s===Pn){if(!d)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function(E){if(c&&c.storeNames.indexOf(E)===-1){if(!d)throw new ee.SubTransaction("Table "+E+" not included in parent transaction.");c=null}}),d&&c&&!c.active&&(c=null)}}catch(E){return c?c._promise(null,function(b,g){g(E)}):Ue(E)}var x=(function E(b,g,k,w,C){return G.resolve().then(function(){var $=J.transless||J,y=b._createTransaction(g,k,b._dbSchema,w),$=(y.explicit=!0,{trans:y,transless:$});if(w)y.idbtrans=w.idbtrans;else try{y.create(),y.idbtrans._explicit=!0,b._state.PR1398_maxLoop=3}catch(I){return I.name===xa.InvalidState&&b.isOpen()&&0<--b._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),b.close({disableAutoOpen:!1}),b.open().then(function(){return E(b,g,k,null,C)})):Ue(I)}var M,_=nn(C),$=(_&&Gn(),G.follow(function(){var I;(M=C.call(y,y))&&(_?(I=bn.bind(null,null),M.then(I,I)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=T(M)))},$));return(M&&typeof M.then=="function"?G.resolve(M).then(function(I){return y.active?I:Ue(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):$.then(function(){return M})).then(function(I){return w&&y._resolve(),y._completion.then(function(){return I})}).catch(function(I){return y._reject(I),Ue(I)})})}).bind(null,this,s,r,c,n);return c?c._promise(s,x,"lock"):J.trans?_n(J.transless,function(){return l._whenReady(x)}):this._whenReady(x)},Ge.prototype.table=function(e){if(ce(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var cn=Ge;function Ge(e,t){var n,s,r,l,c,d=this,x=(this._middlewares={},this.verno=0,Ge.dependencies),x=(this._options=t=Q({addons:Ge.addons,autoOpen:!0,indexedDB:x.indexedDB,IDBKeyRange:x.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),E=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),b=(E.dbReadyPromise=new G(function(g){E.dbReadyResolve=g}),E.openCanceller=new G(function(g,k){E.cancelOpen=k}),this._state=E,this.name=e,this.on=ha(this,"populate","blocked","versionchange","close",{ready:[sa,$e]}),this.once=function(g,k){var w=function(){for(var C=[],y=0;y<arguments.length;y++)C[y]=arguments[y];d.on(g).unsubscribe(w),k.apply(d,C)};return d.on(g,w)},this.on.ready.subscribe=xt(this.on.ready.subscribe,function(g){return function(k,w){Ge.vip(function(){var C,y=d._state;y.openComplete?(y.dbOpenError||G.resolve().then(k),w&&g(k)):y.onReadyBeingFired?(y.onReadyBeingFired.push(k),w&&g(k)):(g(k),C=d,w||g(function M(){C.on.ready.unsubscribe(k),C.on.ready.unsubscribe(M)}))})}}),this.Collection=(n=this,pa(o.prototype,function(M,y){this.db=n;var w=Ya,C=null;if(y)try{w=y()}catch($){C=$}var y=M._ctx,M=y.table,_=M.hook.reading.fire;this._ctx={table:M,index:y.index,isPrimKey:!y.index||M.schema.primKey.keyPath&&y.index===M.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:C,or:y.or,valueMapper:_!==aa?_:null}})),this.Table=(s=this,pa(ps.prototype,function(g,k,w){this.db=s,this._tx=w,this.name=g,this.schema=k,this.hook=s._allTables[g]?s._allTables[g].hook:ha(null,{creating:[ss,$e],reading:[Ts,aa],updating:[rs,$e],deleting:[Ps,$e]})})),this.Transaction=(r=this,pa(We.prototype,function(g,k,w,C,y){var M=this;g!=="readonly"&&k.forEach(function(_){_=(_=w[_])==null?void 0:_.yProps,_&&(k=k.concat(_.map(function($){return $.updatesTable})))}),this.db=r,this.mode=g,this.storeNames=k,this.schema=w,this.chromeTransactionDurability=C,this.idbtrans=null,this.on=ha(this,"complete","error","abort"),this.parent=y||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new G(function(_,$){M._resolve=_,M._reject=$}),this._completion.then(function(){M.active=!1,M.on.complete.fire()},function(_){var $=M.active;return M.active=!1,M.on.error.fire(_),M.parent?M.parent._reject(_):$&&M.idbtrans&&M.idbtrans.abort(),Ue(_)})})),this.Version=(l=this,pa(Xe.prototype,function(g){this.db=l,this._cfg={version:g,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,pa(V.prototype,function(g,k,w){if(this.db=c,this._ctx={table:g,index:k===":id"?null:k,or:w},this._cmp=this._ascending=fe,this._descending=function(C,y){return fe(y,C)},this._max=function(C,y){return 0<fe(C,y)?C:y},this._min=function(C,y){return fe(C,y)<0?C:y},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(g){0<g.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(g){!g.newVersion||g.newVersion<g.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(g.oldVersion/10))}),this._maxKey=N(t.IDBKeyRange),this._createTransaction=function(g,k,w,C){return new d.Transaction(g,k,w,d._options.chromeTransactionDurability,C)},this._fireOnBlocked=function(g){d.on("blocked").fire(g),Un.filter(function(k){return k.name===d.name&&k!==d&&!k._state.vcFired}).map(function(k){return k.on("versionchange").fire(g)})},this.use(Jt),this.use(xs),this.use(Ds),this.use(Nt),this.use(ms),new Proxy(this,{get:function(g,k,w){var C;return k==="_vip"||(k==="table"?function(y){return Pa(d.table(y),b)}:(C=Reflect.get(g,k,w))instanceof ps?Pa(C,b):k==="tables"?C.map(function(y){return Pa(y,b)}):k==="_createTransaction"?function(){return Pa(C.apply(this,arguments),b)}:C)}}));this.vip=b,x.forEach(function(g){return g(d)})}var va,zt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ls=(Xa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Xa.prototype[zt]=function(){return this},Xa);function Xa(e){this._subscribe=e}try{va={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{va={indexedDB:null,IDBKeyRange:null}}function ks(e){var t,n=!1,s=new Ls(function(r){var l=nn(e),c,d=!1,x={},E={},b={get closed(){return d},unsubscribe:function(){d||(d=!0,c&&c.abort(),g&&le.storagemutated.unsubscribe(w))}},g=(r.start&&r.start(b),!1),k=function(){return Ra(C)},w=function(y){jt(x,y),lt(E,x)&&k()},C=function(){var y,M,_;!d&&va.indexedDB&&(x={},y={},c&&c.abort(),c=new AbortController,_=($=>{var I=mn();try{l&&Gn();var F=gn(e,$);return F=l?F.finally(bn):F}finally{I&&Mn()}})(M={subscr:y,signal:c.signal,requery:k,querier:e,trans:null}),Promise.resolve(_).then(function($){n=!0,t=$,d||M.signal.aborted||(x={},(I=>{for(var F in I)if(ce(I,F))return;return 1})(E=y)||g||(le(Ce,w),g=!0),Ra(function(){return!d&&r.next&&r.next($)}))},function($){n=!1,["DatabaseClosedError","AbortError"].includes($?.name)||d||Ra(function(){d||r.error&&r.error($)})}))};return setTimeout(k,0),b});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var On=cn;function Fn(e){var t=un;try{un=!0,le.storagemutated.fire(e),Xn(e,!0)}finally{un=t}}dt(On,Q(Q({},Pt),{delete:function(e){return new On(e,{addons:[]}).delete()},exists:function(e){return new On(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=On.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(on(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==Ea})}):Re(n,t).toCollection().primaryKeys()).then(e)}catch{return Ue(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){pe(this,e)}},ignoreTransaction:function(e){return J.trans?_n(J.transless,e):e()},vip:Ie,async:function(e){return function(){try{var t=T(e.apply(this,arguments));return t&&typeof t.then=="function"?t:G.resolve(t)}catch(n){return Ue(n)}}},spawn:function(e,t,n){try{var s=T(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:G.resolve(s)}catch(r){return Ue(r)}},currentTransaction:{get:function(){return J.trans||null}},waitFor:function(e,t){return e=G.resolve(typeof e=="function"?On.ignoreTransaction(e):e).timeout(t||6e4),J.trans?J.trans.waitFor(e):e},Promise:G,debug:{get:function(){return At},set:function(e){Vn(e)}},derive:Ct,extend:pe,props:dt,override:xt,Events:ha,on:le,liveQuery:ks,extendObservabilitySet:jt,getByKeyPath:Gt,setByKeyPath:ft,delByKeyPath:function(e,t){typeof t=="string"?ft(e,t,void 0):"length"in t&&[].map.call(t,function(n){ft(e,n,void 0)})},shallowClone:vt,deepClone:wt,getObjectDiff:Qn,cmp:fe,asap:kt,minKey:-1/0,addons:[],connections:Un,errnames:xa,dependencies:va,cache:at,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),On.maxKey=N(On.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(le(Ce,function(e){un||(e=new CustomEvent(He,{detail:e}),un=!0,dispatchEvent(e),un=!1)}),addEventListener(He,function(e){e=e.detail,un||Fn(e)}));var Zn,un=!1,Qa=function(){};return typeof BroadcastChannel<"u"&&((Qa=function(){(Zn=new BroadcastChannel(He)).onmessage=function(e){return e.data&&Fn(e.data)}})(),typeof Zn.unref=="function"&&Zn.unref(),le(Ce,function(e){un||Zn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!cn.disableBfCache&&e.persisted){At&&console.debug("Dexie: handling persisted pagehide"),Zn?.close();for(var t=0,n=Un;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!cn.disableBfCache&&e.persisted&&(At&&console.debug("Dexie: handling persisted pageshow"),Qa(),Fn({all:new Oe(-1/0,[[]])}))})),G.rejectionMapper=function(e,t){return!e||e instanceof En||e instanceof TypeError||e instanceof SyntaxError||!e.name||!as[e.name]?e:(t=new as[e.name](t||e.message,e),"stack"in e&&Le(t,"stack",{get:function(){return this.inner.stack}}),t)},Vn(At),Q(cn,Object.freeze({__proto__:null,Dexie:cn,Entity:cs,PropModification:da,RangeSet:Oe,add:function(e){return new da({add:e})},cmp:fe,default:cn,liveQuery:ks,mergeRanges:ot,rangesOverlap:Mt,remove:function(e){return new da({remove:e})},replacePrefix:function(e,t){return new da({replacePrefix:[e,t]})}}),{default:cn}),cn})})($s)),$s.exports}var bi=gi();const Rs=vi(bi),Tr=Symbol.for("Dexie"),Es=globalThis[Tr]||(globalThis[Tr]=Rs);if(Rs.semVer!==Es.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Rs.semVer} and ${Es.semVer}`);const{liveQuery:Ii,mergeRanges:Oi,rangesOverlap:Fi,RangeSet:Di,cmp:Li,Entity:Ni,PropModification:Ki,replacePrefix:qi,add:Vi,remove:Ri,DexieYProvider:ji}=Es,De=new Es("haushaltsbuch-db");De.version(1).stores({years:"year",fixedTemplateState:"id"});De.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});De.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});De.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Nn="singleton";function Da(){return new Date().toISOString()}async function Ca(){return De.years.orderBy("year").toArray()}async function yi(B){return De.years.get(B)}async function ya(B){await De.years.put(B)}async function js(){const B=await De.fixedTemplateState.get(Nn);if(!B){const h={id:Nn,templates:[],version:Da(),updatedAt:new Date().toISOString()};return await De.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Ys(B){const h=Da();return await De.fixedTemplateState.put({id:Nn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function zs(){const B=await De.annualVariableFixedTemplateState.get(Nn);if(!B){const h={id:Nn,templates:[],version:Da(),updatedAt:new Date().toISOString()};return await De.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Ws(B){const h=Da();return await De.annualVariableFixedTemplateState.put({id:Nn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function Ci(B){await De.auditLog.put(B)}async function Gs(){const B=await De.searchEvaluationState.get(Nn);if(!B){const h={id:Nn,results:[],version:Da(),updatedAt:new Date().toISOString()};return await De.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:B.results,version:B.version}}async function Ss(B){const h=Da();return await De.searchEvaluationState.put({id:Nn,results:B,version:h,updatedAt:new Date().toISOString()}),h}async function Us(){return De.auditLog.orderBy("timestampIso").toArray()}async function xi(B){await De.auditLog.clear(),B.length!==0&&await De.auditLog.bulkPut(B)}async function ki(){const B=await Ca(),[h,we,Q,de]=await Promise.all([js(),zs(),Us(),Gs()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:h.templates,annualVariableFixedTemplates:we.templates,auditLogEntries:Q,savedSearchEvaluations:de.results}}async function wi(B){await De.transaction("rw",[De.years,De.fixedTemplateState,De.annualVariableFixedTemplateState,De.auditLog,De.searchEvaluationState],async()=>{await De.years.clear(),await De.years.bulkPut(B.years),await Ys(B.fixedTemplates),await Ws(B.annualVariableFixedTemplates??[]),await xi(B.auditLogEntries??[]),await Ss(B.savedSearchEvaluations??[])})}function Fe(B){const h=B.replace(",",".").trim();if(!h)return 0;const we=Number.parseFloat(h);return Number.isNaN(we)?0:Math.round(we*100)}const $i=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return $i.format(B/100)}function St(B){return(B/100).toFixed(2)}function Pe(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const Or=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Pr(B){return Or.includes(B)}function Si(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Ar=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Ei(B){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},we="habu-theme",Q="habu-backup-dirty",de="habu-unexported-change-log",se="habu-last-backup-filename",be="habu-recurring-budget-defaults";let oe=null,pe=null,Ze=null,je=null,ce=!1,dt=!1;const st=new WeakMap;function Le(){const o=B.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const i=getComputedStyle(document.documentElement),p=i.getPropertyValue("--text-main").trim(),u=i.getPropertyValue("--text-muted").trim(),v=i.getPropertyValue("--table-stripe").trim(),S=i.getPropertyValue("--table-border").trim(),P=i.getPropertyValue("--budget-under").trim(),O=i.getPropertyValue("--danger-2").trim(),A=96,U=250,V=z=>1-Math.pow(1-Math.max(0,Math.min(1,z)),3);o.forEach(z=>{z.dataset.hoverBound!=="1"&&(z.dataset.hoverBound="1",z.addEventListener("mouseenter",()=>{z.dataset.hovering="1",Le()}),z.addEventListener("mouseleave",()=>{delete z.dataset.hovering,delete z.dataset.hoverX,Le()}),z.addEventListener("mousemove",xe=>{const Ve=z.getBoundingClientRect(),Xe=Math.round(xe.clientX-Ve.left);z.dataset.hoverX=String(Xe),Le()}));const H=Number.parseInt(z.dataset.budgetCents??"0",10),ie=Number.parseInt(z.dataset.actualCents??"0",10),Ce=z.dataset.label??"Kategorie",He=z.dataset.hovering==="1",le=`${Ce}|${H}|${ie}`,We=z.dataset.lastRenderSignature!==le;z.dataset.lastRenderSignature=le;const qe=Math.max(120,Math.floor(z.clientWidth||120)),_e=window.devicePixelRatio||1,nt=Math.floor(qe*_e),Ot=Math.floor(A*_e);(z.width!==nt||z.height!==Ot)&&(z.width=nt,z.height=Ot);const N=z.getContext("2d");if(!N)return;const $t=Math.max(1,H,ie),gt=Math.min(1,Math.max(0,H/$t)),rn=Math.min(1,Math.max(0,ie/$t)),bt=H-ie,ye=H>0?ie/H*100:ie>0?100:0,Vt=8,Ne=Vt,ze=34,Je=qe-Vt*2,et=22,tt=Number.parseInt(z.dataset.hoverX??"-1",10),Ut=(xe,Ve,Xe,Ae,Re)=>{N.beginPath(),N.moveTo(xe+Re,Ve),N.lineTo(xe+Xe-Re,Ve),N.quadraticCurveTo(xe+Xe,Ve,xe+Xe,Ve+Re),N.lineTo(xe+Xe,Ve+Ae-Re),N.quadraticCurveTo(xe+Xe,Ve+Ae,xe+Xe-Re,Ve+Ae),N.lineTo(xe+Re,Ve+Ae),N.quadraticCurveTo(xe,Ve+Ae,xe,Ve+Ae-Re),N.lineTo(xe,Ve+Re),N.quadraticCurveTo(xe,Ve,xe+Re,Ve),N.closePath()},Ft=xe=>{N.setTransform(1,0,0,1,0,0),N.clearRect(0,0,z.width,z.height),N.scale(_e,_e),Ut(Ne,ze,Je,et,8),N.fillStyle=v,N.fill(),N.strokeStyle=S,N.lineWidth=1,N.stroke();const Ve=[.6,.25,.15],Xe=[.1,.16,.24];let Ae=0;Ve.forEach((Oe,re)=>{const ot=Je*Oe;N.save(),N.globalAlpha=Xe[re]??.1,N.fillStyle=u,N.fillRect(Ne+Ae,ze,ot,et),N.restore(),Ae+=ot});const Re=H>0&&ie>H?O:P,on=Je*rn*xe;Ut(Ne,ze+3,on,et-6,6),N.fillStyle=Re,N.fill(),He&&(N.save(),N.strokeStyle=Re,N.lineWidth=1.5,N.globalAlpha=.8,Ut(Ne-1,ze+2,Math.max(2,on+2),et-4,7),N.stroke(),N.restore());const Ie=Ne+Je*gt;N.strokeStyle=p,N.lineWidth=He?3:2,N.beginPath(),N.moveTo(Ie,ze-3),N.lineTo(Ie,ze+et+3),N.stroke(),He&&tt>=Ne&&tt<=Ne+Je&&(N.save(),N.strokeStyle=p,N.globalAlpha=.35,N.lineWidth=1,N.beginPath(),N.moveTo(tt,ze-8),N.lineTo(tt,ze+et+8),N.stroke(),N.restore()),N.fillStyle=p,N.font="600 12px system-ui, -apple-system, sans-serif",N.textAlign="left",N.textBaseline="top",N.fillText(Ce,Ne,10);const ln=ye*xe;if(N.fillStyle=ye>100?O:ye<100?P:u,N.textAlign="right",N.fillText(`${ln.toFixed(0)}%`,Ne+Je,10),N.fillStyle=u,N.font="500 11px system-ui, -apple-system, sans-serif",N.textAlign="left",N.textBaseline="top",N.fillText(`Ist ${f(ie)} · Ziel ${f(H)} · Δ ${bt>=0?"+":""}${f(bt)}`,Ne,64),He){const Oe=`Nutzung ${ye.toFixed(1)}%`;N.font="600 11px system-ui, -apple-system, sans-serif";const re=8,ot=5,Mt=22,Ht=N.measureText(Oe).width+re*2,kn=Number.isFinite(tt)?tt-Ht/2:Ne+Je-Ht,jt=Math.min(Ne+Je-Ht,Math.max(Ne,kn)),lt=ze-Mt-8;N.save(),N.fillStyle=p,N.globalAlpha=.92,Ut(jt,lt,Ht,Mt,6),N.fill(),N.restore(),N.fillStyle=v,N.textAlign="left",N.textBaseline="top",N.fillText(Oe,jt+re,lt+ot)}},Dt=st.get(z);if(Dt&&window.cancelAnimationFrame(Dt),!We){Ft(1);return}const Lt=performance.now(),it=xe=>{const Ve=xe-Lt,Xe=Math.min(1,Ve/U);if(Ft(V(Xe)),Xe<1){const Ae=window.requestAnimationFrame(it);st.set(z,Ae);return}st.delete(z)},Rt=window.requestAnimationFrame(it);st.set(z,Rt)})}function Ct(){B.querySelectorAll("[data-year-trend-chart]").forEach(i=>{const p=Array.from(i.querySelectorAll("[data-year-trend-point]"));if(p.length===0)return;const u=i.querySelector("[data-year-trend-active-month]"),v=i.querySelector("[data-year-trend-active-net]"),S=i.querySelector("[data-year-trend-active-income]"),P=i.querySelector("[data-year-trend-active-expense]"),O=i.querySelector("[data-year-trend-active-delta]"),A=i.querySelector("[data-year-trend-live]");if(!u||!v||!S||!P||!O)return;const U=(H,ie)=>{H.classList.remove("danger","budget-under");const Ce=ie<0?"danger":ie>0?"budget-under":"";Ce&&H.classList.add(Ce)},V=H=>{const ie=H.dataset.monthLabel??"-",Ce=Number.parseInt(H.dataset.netCents??"0",10),He=Number.parseInt(H.dataset.actualNetCents??"0",10),le=Number.parseInt(H.dataset.incomeCents??"0",10),We=Number.parseInt(H.dataset.expenseCents??"0",10),qe=Number.parseInt(H.dataset.deltaCents??"0",10);u.textContent=ie,v.textContent=f(Ce),S.textContent=f(le),P.textContent=f(We),O.textContent=`${qe>=0?"+":""}${f(qe)}`,U(v,Ce),U(O,qe),p.forEach(_e=>{const nt=_e===H;_e.classList.toggle("is-active",nt),_e.setAttribute("aria-pressed",String(nt))}),A&&(A.textContent=`${ie}: Kalkulierter Saldo ${f(Ce)}, Ist-Saldo ${f(He)}, Einkommen ${f(le)}, Ausgaben ${f(We)}`)};p.forEach(H=>{const ie=()=>{V(H)};H.addEventListener("mouseenter",ie),H.addEventListener("focus",ie),H.addEventListener("click",ie)});const z=p.find(H=>H.dataset.pointDefault==="1")??p[p.length-1];z&&V(z)})}function en(o){if(o==="dashboard"){const i=h.years.slice().sort((u,v)=>v.year-u.year);i.some(u=>u.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??i[0]?.year??null)}h.topModal=o,te()}function Kn(){h.topModal&&(h.topModal=null,te())}function tn(){h.showUnexportedChangeLogModal=!0,te()}function xt(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,te())}function ht(){h.showPersistentAuditLogModal=!0,te()}function kt(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,te())}function Gt(){ce||(ce=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),xt();return}if(h.showPersistentAuditLogModal){o.preventDefault(),kt();return}h.topModal&&(o.preventDefault(),Kn())}}))}function ft(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const i=o/6;return window.scrollY>i}function vt(){const o=B.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",ft())}function Bs(){if(dt)return;dt=!0;const o=()=>{vt(),Le()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function La(){if(oe&&document.body.contains(oe))return oe;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return oe=o,o;const i=document.createElement("div");return i.id="toast-root",i.className="toast-root",i.setAttribute("aria-live","polite"),i.setAttribute("aria-atomic","true"),document.body.appendChild(i),oe=i,i}function es(){if(pe&&document.body.contains(pe))return pe;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return pe=o,o;const i=document.createElement("div");return i.id="amount-modal-root",document.body.appendChild(i),pe=i,i}function ta(){if(je&&document.body.contains(je))return je;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return je=o,o;const i=document.createElement("div");return i.id="weekly-shopping-modal-root",document.body.appendChild(i),je=i,i}function wt(){if(!pe){Ze=null;return}pe.innerHTML="",Ze=null}function na(){je&&(je.innerHTML="")}function Na(o,i,p){const u=new Date,v=u.getFullYear(),S=u.getMonth()+1,P=u.getDate(),O=new Date(o,i,0).getDate();if(o<v||o===v&&i<S)return{occurrences:0,remainingDays:0};const A=o===v&&i===S?Math.min(P,O):1,U=Math.max(0,O-A+1);let V=0;for(let z=A;z<=O;z+=1)new Date(o,i-1,z).getDay()===p&&(V+=1);return{occurrences:V,remainingDays:U}}async function Ka(o,i){const p=Ee();p&&(p.weeklyShoppingWeekday=o,p.weeklyShoppingEstimateCents=Math.max(0,i),await Ye(`Wocheneinkauf geplant: ${Ar.find(u=>u.value===o)?.label??"Wochentag"} mit ${f(p.weeklyShoppingEstimateCents)} €`),te())}function Ms(){const o=Ee(),i=jn();if(!o||!i)return;const p=ta();na();const u=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,v=o.weeklyShoppingEstimateCents??0,S=i.year,P=o.month,O=Et(S,P),A=O?qt(O):{foodCents:0},U=O?O.foodBudgetCents??0:0,V=A.foodCents,z=U-V;p.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Ar.map(ye=>`<option value="${ye.value}" ${ye.value===u?"selected":""}>${ye.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${St(v)}" />
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
    `;const H=p.querySelector(".weekly-shopping-modal-backdrop"),ie=p.querySelector("#weekly-shopping-weekday"),Ce=p.querySelector("#weekly-shopping-estimate"),He=p.querySelector("#weekly-shopping-occurrences"),le=p.querySelector("#weekly-shopping-total"),We=p.querySelector("#weekly-shopping-rest-before"),qe=p.querySelector("#weekly-shopping-rest-after"),_e=p.querySelector("#weekly-shopping-days-left"),nt=p.querySelector("#weekly-shopping-per-day"),Ot=p.querySelector("#weekly-shopping-cancel"),N=p.querySelector("#weekly-shopping-save");function $t(){const ye=Number.parseInt(ie?.value??"1",10);return Number.isInteger(ye)&&ye>=0&&ye<=6?ye:1}function gt(){return Math.max(0,Fe(Ce?.value??"0"))}function rn(){const ye=$t(),Vt=gt(),{occurrences:Ne,remainingDays:ze}=Na(S,P,ye),Je=Ne*Vt,et=z-Je,tt=ze>0?Math.trunc(et/ze):0;He&&(He.textContent=`${Ne}`),le&&(le.textContent=`${f(Je)} €`),We&&(We.textContent=`${f(z)} €`),qe&&(qe.textContent=`${f(et)} €`,qe.className=et<0?"danger":et>0?"budget-under":""),_e&&(_e.textContent=`${ze}`),nt&&(nt.textContent=`${f(tt)} €`,nt.className=tt<0?"danger":tt>0?"budget-under":"")}async function bt(){await Ka($t(),gt()),na()}Ot?.addEventListener("click",()=>{na()}),N?.addEventListener("click",async()=>{await bt()}),ie?.addEventListener("change",()=>{rn()}),Ce?.addEventListener("input",()=>{rn()}),Ce?.addEventListener("keydown",async ye=>{if(ye.key==="Escape"){ye.preventDefault(),na();return}ye.key==="Enter"&&(ye.preventDefault(),await bt())}),H?.addEventListener("click",ye=>{ye.target===H&&na()}),window.setTimeout(()=>{Ce?.focus(),Ce?.select(),rn()},0)}function dn(o,i){let p=o;const u=i.min;if(u){const S=Number.parseFloat(u);if(!Number.isNaN(S)){const P=Math.round(S*100);p=Math.max(p,P)}}const v=i.max;if(v){const S=Number.parseFloat(v);if(!Number.isNaN(S)){const P=Math.round(S*100);p=Math.min(p,P)}}return p}function rt(o){if(o.disabled)return;const i=es();wt(),Ze=o;const p=Fe(o.value||"0"),u="Betrag anpassen";i.innerHTML=`
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
    `;const v=i.querySelector(".amount-modal-backdrop"),S=i.querySelector("#amount-modal-delta"),P=i.querySelector("#amount-modal-next-delta"),O=i.querySelector("#amount-modal-next-overwrite"),A=i.querySelector("#amount-modal-cancel"),U=i.querySelector("#amount-modal-overwrite"),V=i.querySelector("#amount-modal-apply");function z(){const le=Fe(S?.value??"0");return dn(p+le,o)}function H(){const le=Fe(S?.value??"0");return dn(le,o)}function ie(){P&&(P.textContent=`${f(z())} €`),O&&(O.textContent=`${f(H())} €`)}function Ce(){const le=Ze;if(!le){wt();return}const We=z();wt(),le.value=St(We),le.dispatchEvent(new Event("change",{bubbles:!0}))}function He(){const le=Ze;if(!le){wt();return}const We=H();wt(),le.value=St(We),le.dispatchEvent(new Event("change",{bubbles:!0}))}A?.addEventListener("click",()=>{wt()}),U?.addEventListener("click",()=>{He()}),V?.addEventListener("click",()=>{Ce()}),S?.addEventListener("input",()=>{ie()}),S?.addEventListener("keydown",le=>{if(le.key==="Escape"){le.preventDefault(),wt();return}le.key==="Enter"&&(le.preventDefault(),Ce())}),v?.addEventListener("click",le=>{le.target===v&&wt()}),window.setTimeout(()=>{S?.focus(),S?.select(),ie()},0)}function ae(o,i="success"){const p=La(),u=document.createElement("div");u.className=`toast toast-${i}`,u.textContent=o,p.appendChild(u),requestAnimationFrame(()=>{u.classList.add("toast-visible")});const v=i==="error"?5e3:3e3;window.setTimeout(()=>{u.classList.remove("toast-visible"),window.setTimeout(()=>{u.remove()},220)},v)}function nn(){return new Date().getMonth()+1}function Pt(){return new Date().getFullYear()}function ts(o){const i=Pt(),p=o.find(u=>u.year===i);return p?p.year:o[0]?.year??null}function En(){return new Date().toISOString().slice(0,10)}function ns(){const o=new Date,i=String(o.getHours()).padStart(2,"0"),p=String(o.getMinutes()).padStart(2,"0"),u=String(o.getSeconds()).padStart(2,"0");return`${i}${p}${u}`}function mt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function qn(){const o=localStorage.getItem(we);return o&&Pr(o)?o:"light"}function xa(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(we,o)}function _s(){return localStorage.getItem(Q)==="1"}function ee(o){localStorage.setItem(Q,o?"1":"0")}function as(){const o=localStorage.getItem(de);if(!o)return[];try{const i=JSON.parse(o);return Array.isArray(i)?i.filter(p=>{if(!p||typeof p!="object")return!1;const u=p;return typeof u.id=="string"&&typeof u.timestampIso=="string"&&typeof u.message=="string"}).slice(-200):[]}catch{return[]}}function $e(o){localStorage.setItem(de,JSON.stringify(o.slice(-200)))}function aa(){const o=localStorage.getItem(se);if(!o)return null;const i=o.trim();return i||null}function Ts(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},i=localStorage.getItem(be);if(!i)return o;try{const p=JSON.parse(i),u=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:u(p.foodBudgetCents),goingOutBudgetCents:u(p.goingOutBudgetCents),fixedBudgetCents:u(p.fixedBudgetCents),variableBudgetCents:u(p.variableBudgetCents),miscBudgetCents:u(p.miscBudgetCents)}}catch{return o}}function Bn(o){localStorage.setItem(be,JSON.stringify(o))}function ss(o){o.months.forEach(i=>{const{recurringBudgetDefaults:p}=h;typeof p.foodBudgetCents=="number"&&(i.foodBudgetCents=p.foodBudgetCents),typeof p.goingOutBudgetCents=="number"&&(i.goingOutBudgetCents=p.goingOutBudgetCents),typeof p.fixedBudgetCents=="number"&&(i.fixedBudgetCents=p.fixedBudgetCents),typeof p.variableBudgetCents=="number"&&(i.variableBudgetCents=p.variableBudgetCents),typeof p.miscBudgetCents=="number"&&(i.miscBudgetCents=p.miscBudgetCents)})}function Ps(o){const i=o.trim();i&&localStorage.setItem(se,i)}async function rs(){if(h.savedSearchEvaluations.length===0)return;const o=Pt(),i=nn(),p=h.savedSearchEvaluations.map(u=>({...Mr(h.years,u.keyword,o,i),id:u.id,createdAt:u.createdAt}));h.savedSearchEvaluations=p,await Ss(p)}async function As(){La(),xa(qn()),h.hasUnexportedChanges=_s(),h.unexportedChangeLog=as(),h.persistentAuditLog=await Us(),h.lastBackupFileName=aa(),h.recurringBudgetDefaults=Ts(),Gt(),Bs();const[o,i,p,u]=await Promise.all([Ca(),js(),zs(),Gs()]);h.years=o,h.annualVariableFixedTemplates=p.templates,h.annualVariableFixedTemplateVersion=p.version,sa(h.years),ca(h.years),h.fixedTemplates=i.templates,h.fixedTemplateVersion=i.version,h.savedSearchEvaluations=u.results,await Rn(h.years),await rs(),o.length>0&&(h.selectedYear=ts(o),h.selectedMonth=nn()),te()}function sa(o){const i=p=>p==="balance"||p==="fresh"||p==="salary"?p:void 0;o.forEach(p=>{p.months.forEach(u=>{if(u.weeklyShoppingWeekday!==null&&u.weeklyShoppingWeekday!==void 0){const v=Number(u.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?u.weeklyShoppingWeekday=v:u.weeklyShoppingWeekday=null}else u.weeklyShoppingWeekday=null;typeof u.weeklyShoppingEstimateCents!="number"&&(u.weeklyShoppingEstimateCents=0),typeof u.foodBudgetCents!="number"&&(u.foodBudgetCents=0),typeof u.goingOutBudgetCents!="number"&&(u.goingOutBudgetCents=0),Array.isArray(u.incomes)?u.incomes=u.incomes.map(v=>{const S=i(v.incomeSource);if(!S){const{incomeSource:P,...O}=v;return O}return{...v,incomeSource:S}}):u.incomes=[],typeof u.fixedBudgetCents!="number"&&(u.fixedBudgetCents=u.fixedCosts.reduce((v,S)=>v+S.plannedCents,0)),typeof u.variableBudgetCents!="number"&&(u.variableBudgetCents=u.variablePositions.reduce((v,S)=>v+S.budgetCents,0)),Array.isArray(u.variablePositions)||(u.variablePositions=[]),typeof u.miscBudgetCents!="number"&&(u.miscBudgetCents=0)})})}function At(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Vn(o){return o==="fresh"||o==="salary"||!o}async function Rn(o){for(const i of o)await ya(i)}function jn(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ee(){const o=jn();if(o)return o.months.find(i=>i.month===h.selectedMonth)}function Et(o,i){const p=h.years.find(u=>u.year===o);if(p)return p.months.find(u=>u.month===i)}function qt(o){const i=o.days.reduce((O,A)=>O+A.foodCents,0),p=o.days.reduce((O,A)=>O+A.goingOutCents,0),u=o.fixedCosts.reduce((O,A)=>O+A.actualCents,0),v=o.variableCosts.reduce((O,A)=>O+A.amountCents,0)+o.variablePositions.reduce((O,A)=>O+A.actualCents,0),S=o.miscCosts.reduce((O,A)=>O+A.amountCents,0),P=i+p+u+v+S;return{foodCents:i,goingOutCents:p,fixedCents:u,variableCents:v,miscCents:S,totalCents:P}}function Yn(o){const i=o.foodBudgetCents??0,p=o.goingOutBudgetCents??0,u=o.fixedBudgetCents??o.fixedCosts.reduce((P,O)=>P+O.plannedCents,0),v=o.variablePositions.reduce((P,O)=>P+O.budgetCents,0),S=o.miscBudgetCents??0;return i+p+u+(o.variableBudgetCents??v)+S}function hn(o){return o.months.reduce((i,p)=>{const u=qt(p);return{foodCents:i.foodCents+u.foodCents,goingOutCents:i.goingOutCents+u.goingOutCents,fixedCents:i.fixedCents+u.fixedCents,variableCents:i.variableCents+u.variableCents,miscCents:i.miscCents+u.miscCents,totalCents:i.totalCents+u.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function qa(o){return o.months.slice().sort((i,p)=>i.month-p.month).map(i=>({month:i.month,summary:qt(i)}))}function zn(o){const i=o.months.reduce((P,O)=>P+(O.foodBudgetCents??0),0),p=o.months.reduce((P,O)=>P+(O.goingOutBudgetCents??0),0),u=o.months.reduce((P,O)=>P+(O.fixedBudgetCents??O.fixedCosts.reduce((A,U)=>A+U.plannedCents,0)),0),v=o.months.reduce((P,O)=>P+(O.variableBudgetCents??O.variablePositions.reduce((A,U)=>A+U.budgetCents,0)),0),S=o.months.reduce((P,O)=>P+(O.miscBudgetCents??0),0);return{foodCents:i,goingOutCents:p,fixedCents:u,variableCents:v,miscCents:S,totalCents:i+p+u+v+S}}function an(o){return o.months.reduce((i,p)=>i+p.incomes.reduce((u,v)=>u+(Vn(v.incomeSource)?v.amountCents:0),0),0)}function ra(o){return o.months.reduce((i,p)=>(p.incomes.forEach(u=>{if(u.incomeSource==="salary"){i.salaryIncomeCents+=u.amountCents;return}(u.incomeSource==="fresh"||u.incomeSource==null)&&(i.freshIncomeCents+=u.amountCents)}),i),{salaryIncomeCents:0,freshIncomeCents:0})}function ia(o,i){const p=o.months.slice().sort((u,v)=>u.month-v.month)[0];return p?i.get(me(o.year,p.month))?.carriedFromPreviousCents??0:0}function pn(){const o=h.years.slice().sort((u,v)=>u.year-v.year).flatMap(u=>u.months.slice().sort((v,S)=>v.month-S.month).map(v=>({year:u.year,month:v}))),i=new Map;let p=0;return o.forEach(({year:u,month:v},S)=>{const P=v.carryoverOverrideCents,O=typeof P=="number",A=O?P:p,U=S>0||O,V=v.incomes.reduce((Ce,He)=>Ce+(Vn(He.incomeSource)?He.amountCents:0),0),z=Yn(v),H=V+A,ie=H-z;i.set(me(u,v.month),{hasPreviousMonth:U,carriedFromPreviousCents:A,recordedIncomeCents:V,effectiveIncomeCents:H,plannedBudgetCents:z,netCents:ie}),p=ie}),i}function J(o,i){return i<=0?"":o>i?"budget-over":o<i?"budget-under":""}function oa(o){return`${o>0?"+":""}${f(o)}`}function It(o,i){const p=o-i,u=J(i,o);return`${f(o)} <span class="eval-diff ${u}">(Δ ${oa(p)})</span>`}function fn(o,i){const p=o!==null,u=p?o-i:null,v=p?J(i,o):"";return`<div class="column-overview">
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
    </div>`}async function G(o){if(await yi(o)){alert(`Jahr ${o} existiert bereits.`);return}const p=Er(o,h.fixedTemplates,h.fixedTemplateVersion);ss(p),la(p),await ya(p),h.years=await Ca(),vn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=nn(),ae(`Jahr ${o} wurde angelegt.`),te()}function vn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const i=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",p=new Date().toISOString(),u=`${o} (${i})`,v={id:ut("change"),timestampIso:p,message:u};h.unexportedChangeLog=[...h.unexportedChangeLog,v].slice(-200),$e(h.unexportedChangeLog);const S={id:ut("audit"),timestampIso:p,message:u};h.persistentAuditLog=[...h.persistentAuditLog,S].slice().sort((P,O)=>P.timestampIso.localeCompare(O.timestampIso)),Ci(S).catch(P=>{console.error("Audit-Log konnte nicht gespeichert werden",P),ae("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function is(o){const i=o.trim();i&&(h.lastBackupFileName=i,Ps(i))}function ka(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],$e([]),h.showUnexportedChangeLogModal=!1,is(o)}async function Ye(o){const i=jn();i&&(await ya(i),h.years=await Ca(),vn(o))}async function Bt(o){for(const i of h.years)await ya(i);h.years=await Ca(),vn(o)}function me(o,i){return o*100+i}function Wn(o,i,p){const u=`${o} auf ${f(p)} € gesetzt`;return p>i?`${u} (erhöht um ${f(p-i)} €)`:p<i?`${u} (verringert um ${f(i-p)} €)`:u}function mn(o){const i=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!i)return null;const p=i[1],u=i[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function Mn(o,i){const p=mn(o.dueDateIso);if(!p||i.year<p.year)return;const u=i.months.find(S=>S.month===p.month);!u||u.variablePositions.some(S=>S.autoAnnualTemplateId===o.id)||(u.variablePositions=[{id:ut("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...u.variablePositions],Be(u))}function la(o){h.annualVariableFixedTemplates.forEach(i=>{Mn(i,o)})}function ca(o){const i=new Set(h.annualVariableFixedTemplates.map(p=>p.id));o.forEach(p=>{p.months.forEach(u=>{const v=u.variablePositions.some(P=>typeof P.autoAnnualTemplateId=="string"),S=u.fixedCosts.some(P=>typeof P.autoAnnualTemplateId=="string");v&&(u.variablePositions=u.variablePositions.filter(P=>P.autoAnnualTemplateId?i.has(P.autoAnnualTemplateId):!0),Be(u)),S&&(u.fixedCosts=u.fixedCosts.filter(P=>!P.autoAnnualTemplateId),ge(u))}),la(p)})}function ge(o){o.fixedBudgetCents=o.fixedCosts.reduce((i,p)=>i+p.plannedCents,0)}function Be(o){o.variableBudgetCents=o.variablePositions.reduce((i,p)=>i+p.budgetCents,0)}function Is(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function ua(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Is());if(!o)return null;const i=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!i)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const p=i[1],u=i[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function wa(o,i){const p=me(i.year,i.month);h.years.forEach(u=>{u.months.forEach(v=>{if(me(u.year,v.month)<p)return;v.fixedCosts.some(P=>P.templateId===o.id)||(v.fixedCosts.push({id:ut("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),ge(v))})})}function $a(o,i,p){const u=me(p.year,p.month);h.years.forEach(v=>{v.months.forEach(S=>{me(v.year,S.month)<u||(S.fixedCosts=S.fixedCosts.map(P=>P.templateId!==i.id?P:{...P,name:i.name,plannedCents:i.plannedCents,actualCents:P.actualCents===o.plannedCents?i.plannedCents:P.actualCents}),ge(S))})})}function Os(o,i){const p=me(i.year,i.month);h.years.forEach(u=>{u.months.forEach(v=>{me(u.year,v.month)<p||(v.fixedCosts=v.fixedCosts.filter(S=>S.templateId!==o),ge(v))})})}async function gn(o,i){const p=o.trim();if(!p)return;const u=ua();if(!u)return;const v=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const S=h.fixedTemplates.find(O=>O.id===h.editingFixedTemplateId);if(!S)return;const P={...S,name:p,plannedCents:i};h.fixedTemplates=h.fixedTemplates.map(O=>O.id===h.editingFixedTemplateId?P:O),$a(S,P,u)}else{const S={id:ut("tpl"),name:p,plannedCents:i};h.fixedTemplates=[...h.fixedTemplates,S],wa(S,u)}h.fixedTemplateVersion=await Ys(h.fixedTemplates),h.editingFixedTemplateId=null,await Bt(v?`Fixkosten-Vorlage aktualisiert: ${p} (${f(i)} €)`:`Fixkosten-Vorlage hinzugefügt: ${p} (${f(i)} €)`),ae(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),te()}function Gn(o){h.editingFixedTemplateId=o,te()}function bn(){h.editingFixedTemplateId=null,te()}async function Sa(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const p=ua();if(!p)return;const u=h.fixedTemplates.find(v=>v.id===o);h.fixedTemplates=h.fixedTemplates.filter(v=>v.id!==o),Os(o,p),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Ys(h.fixedTemplates),await Bt(`Fixkosten-Vorlage gelöscht: ${u?.name??"Unbekannt"}`),ae("Fixkosten-Vorlage wurde gelöscht."),te()}async function Fs(o,i,p){const u=o.trim();if(!u){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=mn(i);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(p<=0){alert("Bitte einen positiven Betrag eingeben.");return}const S={id:ut("annualtpl"),name:u,plannedCents:p,dueDateIso:i};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,S],h.years.forEach(P=>{Mn(S,P)}),h.annualVariableFixedTemplateVersion=await Ws(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage hinzugefügt: ${u} (${f(p)} €, jährlich in ${Pe(v.month)})`),ae("Variable Fixkosten-Vorlage wurde hinzugefügt."),te()}async function yn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const p=h.annualVariableFixedTemplates.find(u=>u.id===o);p&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(u=>u.id!==o),h.years.forEach(u=>{u.months.forEach(v=>{v.variablePositions=v.variablePositions.filter(S=>S.autoAnnualTemplateId!==o),Be(v),v.fixedCosts=v.fixedCosts.filter(S=>S.autoAnnualTemplateId!==o),ge(v)})}),h.annualVariableFixedTemplateVersion=await Ws(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage gelöscht: ${p.name}`),ae("Variable Fixkosten-Vorlage wurde gelöscht."),te())}async function Va(o,i,p){const u=Ee();if(!u)return;const S=u.days.find(P=>P.isoDate===o)?.[i]??0;u.days=u.days.map(P=>P.isoDate===o?{...P,[i]:p}:P),await Ye(Wn(`${i==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,S,p)),te()}async function _n(o,i){const p=Ee();if(!p)return;const u=p.fixedCosts.find(v=>v.id===o);p.fixedCosts=p.fixedCosts.map(v=>v.id===o?{...v,actualCents:i}:v),await Ye(`Fixkosten-Ist angepasst: ${u?.name??"Unbekannt"} auf ${f(i)} €`),te()}async function os(o,i){const p=Ee();if(!p)return;const u=p.fixedCosts.find(S=>S.id===o);if(!u)return;const v=u.plannedCents;p.fixedCosts=p.fixedCosts.map(S=>S.id===o?{...S,plannedCents:i}:S),ge(p),await Ye(Wn(`Fixkosten-Budget angepasst: ${u.name}`,v,i)),te()}async function Ra(o,i){const p=Ee();if(!p)return;const u=o.trim();if(!u){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(i<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:ut("fixed"),templateId:ut("fixed-local"),name:u,plannedCents:i,actualCents:0};p.fixedCosts=[v,...p.fixedCosts],ge(p),await Ye(`Fixkosten-Position hinzugefügt: ${u} (${f(i)} €)`),ae("Fixkosten-Position wurde hinzugefügt."),te()}async function Ue(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const p=Ee();if(!p)return;const u=p.fixedCosts.find(v=>v.id===o);u&&(p.fixedCosts=p.fixedCosts.filter(v=>v.id!==o),ge(p),await Ye(`Fixkosten-Position gelöscht: ${u.name}`),ae("Fixkosten-Position wurde gelöscht."),te())}async function Tn(){const o=Ee();if(!o)return;if(o.fixedCosts.length===0){ae("Keine Fixkosten zum Löschen vorhanden.","error");return}if(!confirm("Alle Fixkosten im aktuellen Monat wirklich löschen?"))return;const p=o.fixedCosts.length;o.fixedCosts=[],ge(o),await Ye(`Alle Fixkosten im Monat gelöscht: ${p} Position(en)`),ae(`${p} Fixkosten-Position(en) wurden gelöscht.`),te()}async function sn(o){await Pn("fixedBudgetCents",o,"Fixkosten")}async function ls(o){await Pn("foodBudgetCents",o,"Essen")}async function Un(o){await Pn("goingOutBudgetCents",o,"Ausgehen")}async function Ea(o){await Pn("miscBudgetCents",o,"Sonstiges")}async function ja(o){await Pn("variableBudgetCents",o,"Variable Kosten")}async function Pn(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v||u[o]===i)return;const S=u[o];if(u[o]=i,confirm(`Soll das Budget "${p}" auch für zukünftige Monate übernommen werden?`)){const O=me(v,h.selectedMonth);h.years.forEach(U=>{U.months.forEach(V=>{me(U.year,V.month)<=O||(V[o]=i)})}),h.recurringBudgetDefaults[o]=i,Bn(h.recurringBudgetDefaults);const A=Wn(`Budget "${p}"`,S??0,i);await Bt(`${A} (inkl. zukünftiger Monate)`),ae(`Budget "${p}" wurde für zukünftige Monate übernommen.`),te();return}await Ye(Wn(`Budget "${p}"`,S??0,i)),te()}async function Cn(o){const i=Ee();i&&(o===null?i.carryoverOverrideCents=null:i.carryoverOverrideCents=o,await Ye(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(o)} € gesetzt`),te())}async function Ya(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v)return;const S=o.trim();if(!S){alert("Bitte Bezeichnung für die Position angeben.");return}if(u.variablePositions=[{id:ut("varpos"),name:S,budgetCents:i,actualCents:0},...u.variablePositions],Be(u),p){const P=me(v,h.selectedMonth);h.years.forEach(O=>{O.months.forEach(A=>{me(O.year,A.month)<=P||(A.variablePositions=[{id:ut("varpos"),name:S,budgetCents:i,actualCents:0},...A.variablePositions],Be(A))})}),await Bt(`Variable Position hinzugefügt: ${S} (${f(i)} €) für zukünftige Monate`),ae("Variable Position wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Variable Position hinzugefügt: ${S} (${f(i)} €)`),ae("Variable Position wurde hinzugefügt."),te()}async function Ba(o,i){const p=Ee();if(!p)return;const u=p.variablePositions.find(S=>S.id===o),v=u?.actualCents??0;p.variablePositions=p.variablePositions.map(S=>S.id===o?{...S,actualCents:i}:S),await Ye(Wn(`Istwert Variable Position angepasst: ${u?.name??"Unbekannt"}`,v,i)),te()}async function cs(o,i){const p=Ee();if(!p)return;const u=p.variablePositions.find(S=>S.id===o),v=u?.budgetCents??0;p.variablePositions=p.variablePositions.map(S=>S.id===o?{...S,budgetCents:i}:S),Be(p),await Ye(Wn(`Budget Variable Position angepasst: ${u?.name??"Unbekannt"}`,v,i)),te()}async function fe(o){if(!confirm("Variable Position wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.variablePositions.find(A=>A.id===o);if(!v)return;const S=me(u,h.selectedMonth),O=h.years.some(A=>A.months.some(U=>me(A.year,U.month)>S&&U.variablePositions.some(V=>V.name===v.name&&V.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.variablePositions=p.variablePositions.filter(A=>A.id!==o),Be(p),O){h.years.forEach(A=>{A.months.forEach(U=>{me(A.year,U.month)<=S||(U.variablePositions=U.variablePositions.filter(V=>!(V.name===v.name&&V.budgetCents===v.budgetCents)),Be(U))})}),await Bt(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),ae("Variable Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Variable Position gelöscht: ${v.name}`),ae("Variable Position wurde gelöscht."),te()}async function us(o){const i=Ee(),p=h.selectedYear;if(!i||!p)return;const u=i.variablePositions.find(V=>V.id===o);if(!u)return;const v={year:h.selectedMonth===12?p+1:p,month:h.selectedMonth===12?1:h.selectedMonth+1};let S=h.years.find(V=>V.year===v.year);if(!S){const V=Er(v.year,h.fixedTemplates,h.fixedTemplateVersion);ss(V),la(V),await ya(V),h.years=[...h.years,V].sort((z,H)=>z.year-H.year),S=V}const P=S.months.find(V=>V.month===v.month);if(!P)return;const O=P.variablePositions.some(V=>V.id===u.id||V.name===u.name&&V.budgetCents===u.budgetCents);if(i.variablePositions=i.variablePositions.filter(V=>V.id!==o),Be(i),!O){const z=P.variablePositions.some(H=>H.id===u.id)?{...u,id:ut("varpos")}:u;P.variablePositions=[z,...P.variablePositions],Be(P)}const A=`${Pe(v.month)} ${v.year}`,U=`Variable Position verschoben: ${u.name} → ${A}`;if(v.year===p)await Ye(U);else{const V=jn();if(!V)return;await ya(V),await ya(S),h.years=await Ca(),sa(h.years),vn(U)}ae(O?`Position entfernt (im Folgemonat schon vorhanden: ${A}).`:`Position in den Folgemonat verschoben: ${A}.`),te()}async function za(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v)return;const S=o.trim();if(!S){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(i<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P=Vs(S,i);if(u.miscCosts=[P,...u.miscCosts],p){const O=me(v,h.selectedMonth);h.years.forEach(A=>{A.months.forEach(U=>{me(A.year,U.month)<=O||(U.miscCosts=[Vs(S,i),...U.miscCosts])})}),await Bt(`Sonstige Position hinzugefügt: ${S} (${f(i)} €) für zukünftige Monate`),ae("Sonstige Position wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Sonstige Position hinzugefügt: ${S} (${f(i)} €)`),ae("Sonstige Position wurde hinzugefügt."),te()}function Hn(o){const i=[];let p="",u=!1;for(let v=0;v<o.length;v+=1){const S=o[v],P=o[v+1];if(S==='"'){u&&P==='"'?(p+='"',v+=1):u=!u;continue}if(S===";"&&!u){i.push(p.trim()),p="";continue}p+=S}return i.push(p.trim()),i}async function da(o){const i=Ee();if(!i){ae("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ae("CSV-Datei ist leer.","error");return}const v=new Set(i.miscCosts.map(A=>`${A.description}__${A.amountCents}`));let S=0,P=0,O=0;if(u.forEach(A=>{const U=Hn(A);if(U.length!==2){O+=1;return}const V=U[0]?.trim()??"",z=U[1]?.trim()??"",H=Fe(z);if(!V||H<=0){O+=1;return}const ie=`${V}__${H}`;if(v.has(ie)){P+=1;return}i.miscCosts.push(Vs(V,H)),v.add(ie),S+=1}),S===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ae(A,"error");return}await Ye(`Sonstiges CSV-Import: ${S} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ae(`Import abgeschlossen: ${S} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function ds(o){const i=Ee();if(!i){ae("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ae("CSV-Datei ist leer.","error");return}const v=new Set(i.fixedCosts.map(A=>`${A.name}__${A.plannedCents}__${A.actualCents}`));let S=0,P=0,O=0;if(u.forEach(A=>{const U=Hn(A);if(U.length!==2){O+=1;return}const V=U[0]?.trim()??"",z=U[1]?.trim()??"",H=Fe(z);if(!V||H<=0){O+=1;return}const ie=`${V}__${H}__${H}`;if(v.has(ie)){P+=1;return}i.fixedCosts.push({id:ut("fixed"),templateId:ut("fixed-local"),name:V,plannedCents:H,actualCents:H}),v.add(ie),S+=1}),S===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ae(A,"error");return}ge(i),await Ye(`Fixkosten CSV-Import: ${S} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ae(`Import abgeschlossen: ${S} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function hs(o){const i=Ee();if(!i){ae("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ae("CSV-Datei ist leer.","error");return}const v=new Set(i.variablePositions.map(A=>`${A.name}__${A.budgetCents}__${A.actualCents}`));let S=0,P=0,O=0;if(u.forEach(A=>{const U=Hn(A);if(U.length!==2){O+=1;return}const V=U[0]?.trim()??"",z=U[1]?.trim()??"",H=Fe(z);if(!V||H<=0){O+=1;return}const ie=`${V}__${H}__${H}`;if(v.has(ie)){P+=1;return}i.variablePositions.push({id:ut("varpos"),name:V,budgetCents:H,actualCents:H}),v.add(ie),S+=1}),S===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ae(A,"error");return}Be(i),await Ye(`Variable CSV-Import: ${S} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ae(`Import abgeschlossen: ${S} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function ps(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.miscCosts.find(A=>A.id===o);if(!v)return;const S=me(u,h.selectedMonth),O=h.years.some(A=>A.months.some(U=>me(A.year,U.month)>S&&U.miscCosts.some(V=>V.description===v.description&&V.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.miscCosts=p.miscCosts.filter(A=>A.id!==o),O){h.years.forEach(A=>{A.months.forEach(U=>{me(A.year,U.month)<=S||(U.miscCosts=U.miscCosts.filter(V=>!(V.description===v.description&&V.amountCents===v.amountCents)))})}),await Bt(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),ae("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €)`),ae("Sonstige Position wurde gelöscht."),te()}async function Me(o,i,p,u){const v=Ee(),S=h.selectedYear;if(!v||!S)return;const P=o.trim();if(!P){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(i<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const O=Br(P,i,p);if(v.incomes=[O,...v.incomes],u){const A=me(S,h.selectedMonth);h.years.forEach(U=>{U.months.forEach(V=>{me(U.year,V.month)<=A||(V.incomes=[Br(P,i,p),...V.incomes])})}),await Bt(`Einkommen hinzugefügt: ${P} (${f(i)} €, ${At(p)}) für zukünftige Monate`),ae("Einkommen wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Einkommen hinzugefügt: ${P} (${f(i)} €, ${At(p)})`),ae("Einkommen wurde hinzugefügt."),te()}async function ha(o,i){const p=Ee();if(!p)return;const u=p.incomes.find(v=>v.id===o);u&&(p.incomes=p.incomes.map(v=>{if(v.id!==o)return v;if(!i){const{incomeSource:S,...P}=v;return P}return{...v,incomeSource:i}}),await Ye(`Einkommensart angepasst: ${u.description} → ${At(i)}`),te())}async function pa(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.incomes.find(A=>A.id===o);if(!v)return;const S=me(u,h.selectedMonth),O=h.years.some(A=>A.months.some(U=>me(A.year,U.month)>S&&U.incomes.some(V=>V.description===v.description&&V.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.incomes=p.incomes.filter(A=>A.id!==o),O){h.years.forEach(A=>{A.months.forEach(U=>{me(A.year,U.month)<=S||(U.incomes=U.incomes.filter(V=>!(V.description===v.description&&V.amountCents===v.amountCents)))})}),await Bt(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),ae("Einkommen wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €)`),ae("Einkommen wurde gelöscht."),te()}async function An(){const o=await ki(),i=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),p=URL.createObjectURL(i),u=`haushaltsbuch-backup-${En()}-${ns()}.json`,v=document.createElement("a");v.href=p,v.download=u,v.click(),URL.revokeObjectURL(p),ka(u),te(),ae("Backup wurde exportiert.")}async function Wa(o){const i=await o.text(),p=JSON.parse(i);await wi(p);const[u,v,S,P]=await Promise.all([Ca(),js(),zs(),Gs()]);h.years=u,h.annualVariableFixedTemplates=S.templates,h.annualVariableFixedTemplateVersion=S.version,sa(h.years),ca(h.years),h.fixedTemplates=v.templates,h.fixedTemplateVersion=v.version,h.savedSearchEvaluations=P.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await Rn(h.years),await rs(),h.persistentAuditLog=await Us(),h.selectedYear=ts(u),h.selectedMonth=nn(),ka(o.name),ae("Backup wurde importiert."),te()}function Ma(o){h.evaluationQuery=o,h.evaluationCurrentResult=Mr(h.years,o,Pt(),nn()),te()}async function _a(){const o=h.evaluationCurrentResult;if(!o||!o.keywordNormalized){ae("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const i=h.savedSearchEvaluations.findIndex(p=>p.id===o.id);i>=0?h.savedSearchEvaluations[i]=o:h.savedSearchEvaluations=[o,...h.savedSearchEvaluations],await Ss(h.savedSearchEvaluations),vn(`Auswertung gespeichert: ${o.keyword}`),ae(`Auswertung "${o.keyword}" wurde gespeichert.`),te()}async function fs(o){const i=h.savedSearchEvaluations.find(p=>p.id===o);i&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(p=>p.id!==o),await Ss(h.savedSearchEvaluations),vn(`Auswertung gelöscht: ${i.keyword}`),ae(`Gespeicherte Auswertung "${i.keyword}" wurde gelöscht.`),te())}function te(){const o=jn(),i=Ee(),p=En(),u=i?qt(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=o?hn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},S=o?qa(o):[],P=i?i.foodBudgetCents??0:0,O=i?i.goingOutBudgetCents??0:0,A=i?i.fixedBudgetCents??i.fixedCosts.reduce((a,m)=>a+m.plannedCents,0):0,U=i?i.variableBudgetCents??i.variablePositions.reduce((a,m)=>a+m.budgetCents,0):0,V=i?i.miscBudgetCents??0:0,z=o?o.months.reduce((a,m)=>a+(m.foodBudgetCents??0),0):0,H=o?o.months.reduce((a,m)=>a+(m.goingOutBudgetCents??0),0):0,ie=o?o.months.reduce((a,m)=>a+(m.fixedBudgetCents??m.fixedCosts.reduce((q,Z)=>q+Z.plannedCents,0)),0):0,Ce=o?o.months.reduce((a,m)=>a+(m.variableBudgetCents??m.variablePositions.reduce((q,Z)=>q+Z.budgetCents,0)),0):0,He=o?o.months.reduce((a,m)=>a+(m.miscBudgetCents??0),0):0,le=i?i.incomes.reduce((a,m)=>a+(Vn(m.incomeSource)?m.amountCents:0),0):0,We=i?i.incomes.reduce((a,m)=>a+(m.incomeSource==="salary"?m.amountCents:0),0):0,qe=i?i.incomes.reduce((a,m)=>a+(m.incomeSource==="fresh"?m.amountCents:0),0):0,_e=pn(),nt=o?_e.get(me(o.year,h.selectedMonth)):void 0,Ot=o?o.months.slice().sort((a,m)=>a.month-m.month)[0]:void 0,N=nt?.carriedFromPreviousCents??0,$t=nt?.hasPreviousMonth??!1,gt=nt?.effectiveIncomeCents??le,rn=i?Yn(i):0,bt=nt?.netCents??le-rn,ye=gt-u.totalCents,Vt=We-u.totalCents,Ne=u.totalCents>0?`${(We/u.totalCents*100).toFixed(1)} %`:"-",ze=N<0?"danger":N>0?"budget-under":"",Je=bt<0?"danger":bt>0?"budget-under":"",et=ye<0?"danger":ye>0?"budget-under":"",tt=o?o.months.reduce((a,m)=>a+m.incomes.reduce((q,Z)=>q+(Vn(Z.incomeSource)?Z.amountCents:0),0),0):0,Ut=o?o.months.reduce((a,m)=>a+m.incomes.reduce((q,Z)=>q+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,Ft=o?o.months.reduce((a,m)=>a+m.incomes.reduce((q,Z)=>q+(Z.incomeSource==="fresh"?Z.amountCents:0),0),0):0,Dt=o&&Ot?_e.get(me(o.year,Ot.month))?.carriedFromPreviousCents??0:0,Lt=tt+Dt;Lt-v.totalCents,Ut-v.totalCents,v.totalCents>0&&`${(Ut/v.totalCents*100).toFixed(1)}`;const it=P+O+A+U+V,Rt=P+O,xe=u.foodCents+u.goingOutCents,Ve=Rt-xe,Xe=J(xe,Rt),Ae=z+H+ie+Ce+He,Re=le-it,on=it-u.totalCents;Ae-v.totalCents;const Ie=a=>a<0?"danger":a>0?"budget-under":"",ln=(a,m)=>m<=0?"muted":a>=m?"budget-under":"danger",Oe=ln(We,u.totalCents);ln(Ut,v.totalCents);const re=(a,m)=>{if(m<=0)return"0%";const Z=Math.max(0,a)/m*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},ot=(a,m)=>{if(m<=0)return a>0?100:0;const q=Math.max(0,a)/m*100;return Math.max(0,q)},Mt=[{label:"Essen",budgetCents:P,actualCents:u.foodCents},{label:"Ausgehen",budgetCents:O,actualCents:u.goingOutCents},{label:"Fixkosten",budgetCents:A,actualCents:u.fixedCents},{label:"Variable",budgetCents:U,actualCents:u.variableCents},{label:"Sonstige",budgetCents:V,actualCents:u.miscCents}];Math.max(1,...Mt.flatMap(a=>[a.budgetCents,a.actualCents]));const xn=(a,m)=>m<=0?"bar-positive":a<=0||m>a?"bar-negative":"bar-positive",Ht=[{label:"Einkommen gesamt",valueCents:gt,className:"bar-income"},{label:"Budget gesamt",valueCents:it,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:u.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ye,className:ye<0?"bar-negative":"bar-positive"}],kn=Math.max(1,...Ht.map(a=>Math.abs(a.valueCents))),jt=o?o.months.slice().sort((a,m)=>a.month-m.month).map(a=>{const m=a.foodBudgetCents??0,q=a.goingOutBudgetCents??0,Z=a.fixedBudgetCents??a.fixedCosts.reduce((Zt,Sn)=>Zt+Sn.plannedCents,0),Se=a.variableBudgetCents??a.variablePositions.reduce((Zt,Sn)=>Zt+Sn.budgetCents,0),Qe=a.miscBudgetCents??0,yt=m+q+Z+Se+Qe;return{month:a.month,foodBudgetCents:m,goingOutBudgetCents:q,fixedBudgetCents:Z,variableBudgetCents:Se,miscBudgetCents:Qe,totalBudgetCents:yt}}):[],lt=new Map(jt.map(a=>[a.month,a])),at=a=>{if(a.length===0)return null;const m=Math.min(...a),q=Math.max(...a),Z=Math.round(a.reduce((Se,Qe)=>Se+Qe,0)/a.length);return{min:m,avg:Z,max:q}},ct=o&&o.year===Pt()?S.filter(a=>a.month<=nn()):S,Jn=ct.map(a=>a.summary.foodCents),Yt=ct.map(a=>a.summary.goingOutCents),Xn=ct.map(a=>a.summary.fixedCents),In=ct.map(a=>a.summary.variableCents),Ga=ct.map(a=>a.summary.miscCents),T=ct.map(a=>a.summary.totalCents),L=ct.map(a=>o?_e.get(me(o.year,a.month))?.plannedBudgetCents??0:0),Nt=ct.map(a=>o?_e.get(me(o.year,a.month))?.netCents??0:0),Qn=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((m,q)=>m+(q.incomeSource==="salary"?q.amountCents:0),0)])),fa=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((m,q)=>m+(q.incomeSource==="salary"||q.incomeSource==="fresh"?q.amountCents:0),0)])),ms=ct.map(a=>Qn.get(a.month)??0),Ua=ct.map(a=>fa.get(a.month)??0),Jt={food:at(Jn),goingOut:at(Yt),fixed:at(Xn),variable:at(In),misc:at(Ga),total:at(T),salary:at(ms),income:at(Ua),budget:at(L),net:at(Nt)},gs=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Xt={food:Jn.reduce((a,m)=>a+m,0),goingOut:Yt.reduce((a,m)=>a+m,0),fixed:Xn.reduce((a,m)=>a+m,0),variable:In.reduce((a,m)=>a+m,0),misc:Ga.reduce((a,m)=>a+m,0),total:T.reduce((a,m)=>a+m,0),salary:ms.reduce((a,m)=>a+m,0),income:Ua.reduce((a,m)=>a+m,0),budget:L.reduce((a,m)=>a+m,0)},Ds=gs.map(({key:a,label:m})=>{const q=Jt.food?.[a]??null,Z=Jt.goingOut?.[a]??null,Se=Jt.fixed?.[a]??null,Qe=Jt.variable?.[a]??null,yt=Jt.misc?.[a]??null,Zt=Jt.total?.[a]??null,Sn=Jt.salary?.[a]??null,pt=Jt.income?.[a]??null,ba=Jt.budget?.[a]??null,Ia=Jt.net?.[a]??null,_t=Dn=>Dn===null?"-":f(Dn);return`<tr>
                  <td><strong>${m}</strong></td>
                  <td>${_t(q)}</td>
                  <td>${_t(Z)}</td>
                  <td>${_t(Se)}</td>
                  <td>${_t(Qe)}</td>
                  <td>${_t(yt)}</td>
                  <td>${_t(Zt)}</td>
                  <td>${_t(Sn)}</td>
                  <td>${_t(pt)}</td>
                  <td>${_t(ba)}</td>
                  <td>${_t(Ia)}</td>
                </tr>`}).join(""),bs=`<tr>
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
                </tr>`,Ta=Math.max(1,...S.flatMap(a=>{const m=lt.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,m??0]})),Ha=Math.max(1,...S.flatMap(a=>{const m=lt.get(a.month),q=a.summary.foodCents+a.summary.goingOutCents,Z=(m?.foodBudgetCents??0)+(m?.goingOutBudgetCents??0);return[q,Z]})),Ja=Math.max(1,...S.flatMap(a=>{const m=lt.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,m]})),ys=Math.max(1,...S.flatMap(a=>{const m=lt.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,m]})),Cs=Math.max(1,...S.flatMap(a=>{const m=lt.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,m]})),xs=J(u.fixedCents,A),Pa=J(u.foodCents,P),cn=J(u.goingOutCents,O),Ge=J(u.variableCents,U),va=J(u.miscCents,V),zt=a=>a===0?"-":f(a),Ls=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(A)}</div>
        <div class="compact-cost-actual ${xs}">${zt(u.fixedCents)}</div>
      </div>`,Xa=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(U)}</div>
        <div class="compact-cost-actual ${Ge}">${zt(u.variableCents)}</div>
      </div>`,ks=i?i.fixedCosts.length>0?i.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${mt(a.name)}</div>
                  <div class="compact-cost-budget">${f(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${J(a.actualCents,a.plannedCents)}">${zt(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,On=i?i.variablePositions.length>0?i.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${mt(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${J(a.actualCents,a.budgetCents)}">${zt(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Fn=h.editingFixedTemplateId?h.fixedTemplates.find(a=>a.id===h.editingFixedTemplateId):null,Zn=h.hasUnexportedChanges,un=h.unexportedChangeLog.slice().reverse(),Qa=h.persistentAuditLog.slice().sort((a,m)=>m.timestampIso.localeCompare(a.timestampIso)),e=h.lastBackupFileName?mt(h.lastBackupFileName):"-",t={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},n=h.years.slice().sort((a,m)=>a.year-m.year),s=n.some(a=>a.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??n[n.length-1]?.year??null,r=typeof s=="number"?n.find(a=>a.year===s):void 0,l=r?r.months.slice().sort((a,m)=>a.month-m.month):[],c=r?hn(r):t,d=r?ra(r):{salaryIncomeCents:0,freshIncomeCents:0},x=d.salaryIncomeCents+d.freshIncomeCents,E=d.salaryIncomeCents,b=r?zn(r):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},g=r?an(r):0,k=r?ia(r,_e):0,w=g+k,C=r?r.months.reduce((a,m)=>a+Yn(m),0):0,y=w-C,M=w-c.totalCents,_=[{label:"Essen",budgetCents:b.foodCents,actualCents:c.foodCents},{label:"Ausgehen",budgetCents:b.goingOutCents,actualCents:c.goingOutCents},{label:"Fixkosten",budgetCents:b.fixedCents,actualCents:c.fixedCents},{label:"Variable",budgetCents:b.variableCents,actualCents:c.variableCents},{label:"Sonstige",budgetCents:b.miscCents,actualCents:c.miscCents}],$=l.map(a=>{const m=r?_e.get(me(r.year,a.month)):void 0,q=qt(a),Z=a.incomes.reduce((Dn,ea)=>Dn+(ea.incomeSource==="salary"?ea.amountCents:0),0),Se=a.incomes.reduce((Dn,ea)=>Dn+(Vn(ea.incomeSource)?ea.amountCents:0),0),Qe=m?.effectiveIncomeCents??Se,yt=m?.plannedBudgetCents??Yn(a),Zt=q.foodCents,Sn=q.goingOutCents,pt=Zt+Sn,ba=q.totalCents,Ia=Qe-yt,_t=Qe-ba;return{month:a.month,salaryIncomeCents:Z,incomeCents:Se,foodCents:Zt,goingOutCents:Sn,foodAndGoingOutCents:pt,effectiveIncomeCents:Qe,plannedBudgetCents:yt,actualCostCents:ba,plannedNetCents:Ia,actualNetCents:_t}}),I=Math.max(1,...$.map(a=>a.actualCostCents)),F=Math.max(1,...$.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),R=Math.max(1,...$.map(a=>a.foodAndGoingOutCents)),j=Math.max(1,...$.map(a=>a.foodCents)),D=Math.max(1,...$.map(a=>a.goingOutCents)),W=$.map((a,m,q)=>{const Z=m>0?q[m-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Pe(a.month),monthShortLabel:Pe(a.month).slice(0,3),deltaCents:a.plannedNetCents-Z}}),Y=W[W.length-1]??null,K=Math.min(0,...W.map(a=>a.plannedNetCents)),X=Math.max(0,...W.map(a=>a.plannedNetCents)),ve=Math.max(1,X-K),he=720,ne=320,ue=18,Ke=18,Kt=38,Te=56,wn=he-Te-Ke,ma=ne-ue-Kt,Dr=a=>{if(W.length<=1)return Te+wn/2;const m=a/(W.length-1);return Te+m*wn},Ns=a=>ue+(X-a)/ve*ma,$n=W.map((a,m)=>{const q=Dr(m),Z=Ns(a.plannedNetCents);return{...a,x:q,y:Z,leftPercent:q/he*100,topPercent:Z/ne*100}}),Ks=$n.map((a,m)=>`${m===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),Hs=$n.length>0?`${Ks} L ${$n[$n.length-1]?.x.toFixed(1)} ${(ue+ma).toFixed(1)} L ${$n[0]?.x.toFixed(1)} ${(ue+ma).toFixed(1)} Z`:"",Js=5,Lr=Array.from({length:Js},(a,m)=>{const q=m/(Js-1),Z=X-q*ve;return{valueCents:Math.round(Z/100)*100,y:Ns(Z)}}),Xs=Ns(0),Nr=W[0]?.plannedNetCents??0,Aa=(W[W.length-1]?.plannedNetCents??0)-Nr,Kr=Aa<0?"trend-badge-negative":Aa>0?"trend-badge-positive":"trend-badge-neutral",Qs=Aa<0?"↘":Aa>0?"↗":"→",qr=Aa<0?"Abwärtstrend":Aa>0?"Aufwärtstrend":"Seitwärts",ga=n.reduce((a,m)=>{const q=zn(m);return{foodCents:a.foodCents+q.foodCents,goingOutCents:a.goingOutCents+q.goingOutCents,fixedCents:a.fixedCents+q.fixedCents,variableCents:a.variableCents+q.variableCents,miscCents:a.miscCents+q.miscCents,totalCents:a.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Wt=n.reduce((a,m)=>{const q=hn(m);return{foodCents:a.foodCents+q.foodCents,goingOutCents:a.goingOutCents+q.goingOutCents,fixedCents:a.fixedCents+q.fixedCents,variableCents:a.variableCents+q.variableCents,miscCents:a.miscCents+q.miscCents,totalCents:a.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Vr=n.reduce((a,m)=>a+an(m),0),Rr=n[0]?ia(n[0],_e):0,Zs=Vr+Rr,er=Zs-ga.totalCents,tr=Zs-Wt.totalCents,nr=[{label:"Essen",budgetCents:ga.foodCents,actualCents:Wt.foodCents},{label:"Ausgehen",budgetCents:ga.goingOutCents,actualCents:Wt.goingOutCents},{label:"Fixkosten",budgetCents:ga.fixedCents,actualCents:Wt.fixedCents},{label:"Variable",budgetCents:ga.variableCents,actualCents:Wt.variableCents},{label:"Sonstige",budgetCents:ga.miscCents,actualCents:Wt.miscCents}],ar=Math.max(1,...nr.flatMap(a=>[a.budgetCents,a.actualCents])),qs=[{label:"Essen & Ausgehen",actualCents:Wt.foodCents+Wt.goingOutCents},{label:"Fixkosten",actualCents:Wt.fixedCents},{label:"Variable",actualCents:Wt.variableCents},{label:"Sonstige",actualCents:Wt.miscCents}],jr=Math.max(1,...qs.map(a=>a.actualCents)),ke=n.map(a=>{const m=hn(a),q=zn(a),Z=an(a),Se=ra(a),Qe=ia(a,_e),yt=Z+Qe;return{year:a.year,salaryIncomeCents:Se.salaryIncomeCents,freshIncomeCents:Se.freshIncomeCents,totalIncomeCents:Se.salaryIncomeCents+Se.freshIncomeCents,foodAndGoingOutCents:m.foodCents+m.goingOutCents,fixedCents:m.fixedCents,variableCents:m.variableCents,miscCents:m.miscCents,budgetTotalCents:q.totalCents,actualTotalCents:m.totalCents,effectiveIncomeCents:yt,plannedNetCents:yt-q.totalCents,actualNetCents:yt-m.totalCents}}),Yr=ke.reduce((a,m)=>a+m.totalIncomeCents,0),zr=ke.reduce((a,m)=>a+m.salaryIncomeCents,0),sr=Math.max(1,...ke.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Wr=Math.max(1,...ke.map(a=>a.actualTotalCents)),Gr=Math.max(1,...ke.map(a=>a.totalIncomeCents)),Ur=Math.max(1,...ke.map(a=>a.salaryIncomeCents)),rr=Math.max(1,...ke.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),ir=Math.max(1,...ke.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),Hr=Math.max(1,...ke.map(a=>a.foodAndGoingOutCents)),Jr=Math.max(1,...ke.map(a=>a.fixedCents)),Xr=Math.max(1,...ke.map(a=>a.variableCents)),Qr=Math.max(1,...ke.map(a=>a.miscCents)),Zr=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${n.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${n.map(a=>`<option value="${a.year}" ${a.year===s?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${r?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(x)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(E)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(C)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(c.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ie(y)}">${f(y)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ie(M)}">${f(M)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Qs}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Kr}">${Qs} ${qr}</span>
                    </div>
                  </header>
                  ${Y?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${mt(Y.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${Ie(Y.plannedNetCents)}" data-year-trend-active-net>${f(Y.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(Y.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(Y.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${Ie(Y.deltaCents)}" data-year-trend-active-delta>${Y.deltaCents>=0?"+":""}${f(Y.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${he} ${ne}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${r?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Lr.map(a=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${Te}" y1="${a.y.toFixed(1)}" x2="${he-Ke}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${Te-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${f(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${Te}" y1="${Xs.toFixed(1)}" x2="${he-Ke}" y2="${Xs.toFixed(1)}"></line>
                              ${Hs?`<path class="year-trend-area" d="${Hs}"></path>`:""}
                              ${Ks?`<path class="year-trend-line" d="${Ks}"></path>`:""}
                              ${$n.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${ne-12}" text-anchor="middle">${mt(a.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${$n.map((a,m)=>`
                                    <button
                                      class="year-trend-point-hit ${m===$n.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${a.leftPercent.toFixed(2)}%; top:${a.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${m===$n.length-1?"1":"0"}"
                                      data-month-label="${mt(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${mt(a.monthLabel)}: Kalkulierter Saldo ${f(a.plannedNetCents)}, Einkommen ${f(a.effectiveIncomeCents)}, Ausgaben ${f(a.actualCostCents)}"
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
                    ${_.map(a=>{const m=ot(a.actualCents,a.budgetCents),q=Math.min(100,m),Z=`${m.toFixed(0)}%`,Se=a.budgetCents-a.actualCents,Qe=Se<0?"danger":Se>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${xn(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${q.toFixed(1)}%" title="${a.label}: ${f(a.actualCents)} von ${f(a.budgetCents)}">
                              <span class="circle-chart-value">${Z}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${f(a.budgetCents)} / I ${f(a.actualCents)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($.length,1)}, minmax(0, 1fr));">
                    ${$.map(a=>{const m=re(a.actualCostCents,I);return`
                          <div class="spark-bar" title="${Pe(a.month)}: ${f(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                    ${$.map(a=>{const m=re(Math.abs(a.plannedNetCents),F),q=re(Math.abs(a.actualNetCents),F),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Se=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Pe(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${m}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Ie(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${Ie(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  ${$.map(a=>`<tr>
                        <td>${Pe(a.month)}</td>
                    <td>${f(a.salaryIncomeCents)}</td>
                    <td>${f(a.incomeCents)}</td>
                        <td>${f(a.plannedBudgetCents)}</td>
                        <td>${f(a.actualCostCents)}</td>
                        <td class="${Ie(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${Ie(a.actualNetCents)}">${f(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${n.map(a=>`<option value="${a.year}" ${a.year===s?"selected":""}>${a.year}</option>`).join("")}
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
                    ${$.map(a=>{const m=re(a.foodAndGoingOutCents,R);return`
                          <div class="spark-bar" title="${Pe(a.month)}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($.length,1)}, minmax(0, 1fr));">
                    ${$.map(a=>{const m=re(a.foodCents,j);return`
                          <div class="spark-bar" title="${Pe(a.month)}: ${f(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($.length,1)}, minmax(0, 1fr));">
                    ${$.map(a=>{const m=re(a.goingOutCents,D);return`
                          <div class="spark-bar" title="${Pe(a.month)}: ${f(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(Yr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(zr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(ga.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Wt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Ie(er)}">${f(er)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Ie(tr)}">${f(tr)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${qs.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${f(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
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
                    ${nr.map(a=>{const m=re(a.budgetCents,ar),q=re(a.actualCents,ar),Z=xn(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${f(a.budgetCents)} | Ist: ${f(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${m}"></div>
                              <div class="bar-marker" style="left:${m}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Z}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${f(a.budgetCents)}</span>
                              <span class="muted">I ${f(a.actualCents)}</span>
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
                    ${qs.map(a=>{const m=re(a.actualCents,jr);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Ist: ${f(a.actualCents)}">
                              <div class="bar bar-expense" style="width:${m}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">I ${f(a.actualCents)}</span>
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
                    ${ke.map(a=>{const m=re(a.actualTotalCents,Wr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
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
                    ${ke.map(a=>{const m=re(Math.abs(a.plannedNetCents),sr),q=re(Math.abs(a.actualNetCents),sr),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Se=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${m}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Ie(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${Ie(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                    ${ke.map(a=>{const m=re(a.foodAndGoingOutCents,Hr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
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
                    ${ke.map(a=>{const m=re(a.fixedCents,Jr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.fixedCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
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
                    ${ke.map(a=>{const m=re(a.variableCents,Xr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.variableCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
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
                    ${ke.map(a=>{const m=re(a.miscCents,Qr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.miscCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
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
                  ${ke.map(a=>`<tr>
                        <td>${a.year}</td>
                        <td>${f(a.salaryIncomeCents)}</td>
                        <td>${f(a.totalIncomeCents)}</td>
                        <td>${f(a.budgetTotalCents)}</td>
                        <td>${f(a.actualTotalCents)}</td>
                        <td class="${Ie(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${Ie(a.actualNetCents)}">${f(a.actualNetCents)}</td>
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
                    ${ke.map(a=>{const m=re(a.totalIncomeCents,Gr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.totalIncomeCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
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
                    ${ke.map(a=>{const m=re(a.salaryIncomeCents,Ur);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(a.salaryIncomeCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
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
                    ${ke.map(a=>{const m=re(a.totalIncomeCents,rr),q=re(a.actualTotalCents,rr);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${f(a.totalIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${m}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${q}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
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
                    ${ke.map(a=>{const m=re(a.salaryIncomeCents,ir),q=re(a.actualTotalCents,ir);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${f(a.salaryIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${m}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${q}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${a.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>
            `}
      </div>
    `,ei=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,ti=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Fn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Fn?St(Fn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Fn?"Änderung speichern":"Vorlage speichern"}</button>
          ${Fn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${a.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,or=h.annualVariableFixedTemplates.reduce((a,m)=>a+m.plannedCents,0),ni=Math.round(or/12),ai=`
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
                <div class="eval-value budget-under">${f(or)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(ni)}</div>
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
            ${h.annualVariableFixedTemplates.map(a=>{const m=mn(a.dueDateIso),q=m?Pe(m.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${q}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Qt=h.evaluationCurrentResult,si=`
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
                  ${Qt.yearRows.length>0?Qt.yearRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${a.hitCount}</td>
                              <td>${f(a.totalCents)}</td>
                              <td>${a.monthsWithHits}</td>
                              <td>${f(a.monthAverageCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>

              <h3>Treffer nach Monat</h3>
              <table>
                <thead>
                  <tr><th>Jahr</th><th>Monat</th><th>Treffer</th><th>Summe (€)</th></tr>
                </thead>
                <tbody>
                  ${Qt.monthRows.length>0?Qt.monthRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${Pe(a.month)}</td>
                              <td>${a.hitCount}</td>
                              <td>${f(a.totalCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="4" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>
            `:'<p class="muted">Noch keine Auswertung ausgeführt.</p>'}

        <h3>Gespeicherte Auswertungen</h3>
        ${h.savedSearchEvaluations.length===0?'<p class="muted">Noch keine gespeicherten Auswertungen vorhanden.</p>':h.savedSearchEvaluations.map(a=>`
                  <article class="card">
                    <div class="inline">
                      <strong>${mt(a.keyword)}</strong>
                      <span class="muted">${new Date(a.createdAt).toLocaleString("de-DE")}</span>
                      <button class="btn btn-quiet" data-remove-saved-evaluation="${a.id}" type="button">Löschen</button>
                    </div>
                    <div class="inline">
                      <span>Treffer: <strong>${a.totalHitCount}</strong></span>
                      <span>Summe: <strong>${f(a.totalCents)}</strong></span>
                      <span>Laufendes Jahr: <strong>${f(a.currentYearCents)}</strong></span>
                      <span>Monatsschnitt: <strong>${f(a.monthAverageCents)}</strong></span>
                    </div>
                    <table>
                      <thead>
                        <tr><th>Jahr</th><th>Treffer</th><th>Summe (€)</th><th>Treffer-Monate</th><th>Monatsschnitt (€)</th></tr>
                      </thead>
                      <tbody>
                        ${a.yearRows.length>0?a.yearRows.map(m=>`<tr>
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
    `,lr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",ri=h.topModal==="years"?ei:h.topModal==="fixed"?ti:h.topModal==="variable-fixed"?ai:h.topModal==="dashboard"?Zr:h.topModal==="evaluation"?si:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Zn?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Or.map(a=>`<option value="${a}" ${h.theme===a?"selected":""}>${Si(a)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${lr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${lr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${ri}
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
                  ${un.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${un.map(a=>{const m=new Date(a.timestampIso);return`<li><strong>${m.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${m.toLocaleString("de-DE")}</strong><span>${mt(a.message)}</span></li>`}).join("")}</ol>`}
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
                  ${Qa.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${Qa.map(a=>{const m=new Date(a.timestampIso);return`<li><strong>${m.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${m.toLocaleString("de-DE")}</strong><span>${mt(a.message)}</span></li>`}).join("")}</ol>`}
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
                  ${h.years.map(a=>`<option value="${a.year}" ${a.year===h.selectedYear?"selected":""}>${a.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${h.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(a,m)=>m+1).map(a=>`<option value="${a}" ${a===h.selectedMonth?"selected":""}>${Pe(a)}</option>`).join("")}
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
                <strong>${f(qe)}</strong>
              </div>
              <div class="compact-income-row ${ze}">
                <span>Übernahme aus Vormonat</span>
                <strong>${$t?f(N):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(gt)}</strong>
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
                  ${ks}
                  ${Ls}
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
                  ${On}
                  ${Xa}
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
                    <div class="compact-cost-budget">${f(Rt)}</div>
                    <div class="compact-cost-actual ${Xe}">${zt(xe)}</div>
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
                    <div class="compact-cost-actual ${va}">${zt(u.miscCents)}</div>
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
                  ${Mt.map(a=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${a.label}"
                            data-budget-cents="${a.budgetCents}"
                            data-actual-cents="${a.actualCents}"
                            role="img"
                            aria-label="${a.label}: Budget ${f(a.budgetCents)} €, Ist ${f(a.actualCents)} €"
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
                  ${Ht.map(a=>{const m=re(Math.abs(a.valueCents),kn),q=a.valueCents>=0?"+":"",Z=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${f(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${m}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Z}">${q}${f(a.valueCents)}</span></div>
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
                      ${S.map(a=>{const m=lt.get(a.month)?.totalBudgetCents??0,q=re(m,Ta),Z=re(a.summary.totalCents,Ta);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(a.summary.totalCents)} € | Budget ${f(m)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                      ${S.map(a=>{const m=lt.get(a.month),q=(m?.foodBudgetCents??0)+(m?.goingOutBudgetCents??0),Z=a.summary.foodCents+a.summary.goingOutCents,Se=re(q,Ha),Qe=re(Z,Ha);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(Z)} € | Budget ${f(q)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Se}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Qe}"><span class="spark-bar-fill-value">${f(Z)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                      ${S.map(a=>{const m=lt.get(a.month)?.fixedBudgetCents??0,q=re(m,Ja),Z=re(a.summary.fixedCents,Ja);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(a.summary.fixedCents)} € | Budget ${f(m)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                      ${S.map(a=>{const m=lt.get(a.month)?.variableBudgetCents??0,q=re(m,ys),Z=re(a.summary.variableCents,ys);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(a.summary.variableCents)} € | Budget ${f(m)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                      ${S.map(a=>{const m=lt.get(a.month)?.miscBudgetCents??0,q=re(m,Cs),Z=re(a.summary.miscCents,Cs);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(a.summary.miscCents)} € | Budget ${f(m)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Pe(a.month).slice(0,3)}</div>
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
                    <div class="eval-value">${f(We)}</div>
                    <div class="eval-value">${f(Ut)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(qe)}</div>
                    <div class="eval-value">${f(Ft)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${ze}">${$t?f(N):"-"}</div>
                    <div class="eval-value muted">-</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(gt)}</div>
                    <div class="eval-value">${f(Lt)}</div>
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
                    <div class="eval-value">${It(P,u.foodCents)}</div>
                    <div class="eval-value">${f(z)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${It(O,u.goingOutCents)}</div>
                    <div class="eval-value">${f(H)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${It(A,u.fixedCents)}</div>
                    <div class="eval-value">${f(ie)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${It(U,u.variableCents)}</div>
                    <div class="eval-value">${f(Ce)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${It(V,u.miscCents)}</div>
                    <div class="eval-value">${f(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${It(it,u.totalCents)}</div>
                    <div class="eval-value">${f(Ae)}</div>
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
                    <div class="eval-value ${xs}">${f(u.fixedCents)}</div>
                    <div class="eval-value">${f(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Ge}">${f(u.variableCents)}</div>
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
                    <div class="eval-value ${Ie(on)}">${f(on)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Ie(Re)}">${f(Re)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Eigenkapital (Monat)</div>
                    <div class="eval-value ${et}">${f(ye)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${Ie(Vt)}">${f(Vt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Oe}">${Ne}</div>
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
                ${S.map((a,m,q)=>{const Z=o?_e.get(me(o.year,a.month)):void 0,Se=Z?.plannedBudgetCents??0,Qe=Z?.netCents??0,yt=Qn.get(a.month)??0,Zt=fa.get(a.month)??0,Sn=Qe<0?"danger":Qe>0?"budget-under":"",pt=q[m-1],ba=pt?.summary.foodCents??null,Ia=pt?.summary.goingOutCents??null,_t=pt?.summary.fixedCents??null,Dn=pt?.summary.variableCents??null,ea=pt?.summary.miscCents??null,cr=pt?.summary.totalCents??null,ur=pt!==void 0?Qn.get(pt.month)??0:null,dr=pt!==void 0?fa.get(pt.month)??0:null,hr=o&&pt?_e.get(me(o.year,pt.month))?.plannedBudgetCents??0:null,pr=ba===null?null:a.summary.foodCents-ba,fr=Ia===null?null:a.summary.goingOutCents-Ia,vr=_t===null?null:a.summary.fixedCents-_t,mr=Dn===null?null:a.summary.variableCents-Dn,gr=ea===null?null:a.summary.miscCents-ea,br=cr===null?null:a.summary.totalCents-cr,yr=ur===null?null:yt-ur,Cr=dr===null?null:Zt-dr,xr=hr===null?null:Se-hr,Oa=Tt=>Tt===null?"muted":Tt>0?"danger":Tt<0?"budget-under":"muted",kr=Tt=>Tt===null?"muted":Tt>0?"budget-under":Tt<0?"danger":"muted",ii=Tt=>Tt===null?"muted":Tt>0?"danger":Tt<0?"budget-under":"muted",Ln=Tt=>Tt===null?"(Δ -)":`(Δ ${Tt>0?"+":""}${f(Tt)})`,wr=o&&pt?_e.get(me(o.year,pt.month))?.netCents??0:null,Fa=wr===null?null:Qe-wr,oi=Fa===null?"(Δ -)":`(Δ ${Fa>0?"+":""}${f(Fa)})`,li=Fa===null?"muted":Fa<0?"danger":Fa>0?"budget-under":"muted",$r=yt-a.summary.totalCents,Sr=Zt-a.summary.totalCents,ci=a.summary.totalCents>0?`${(yt/a.summary.totalCents*100).toFixed(1)} %`:"-",ui=ln(yt,a.summary.totalCents);return`<tr>
                  <td>${Pe(a.month)}</td>
                  <td>${f(a.summary.foodCents)} <span class="${Oa(pr)}">${Ln(pr)}</span></td>
                  <td>${f(a.summary.goingOutCents)} <span class="${Oa(fr)}">${Ln(fr)}</span></td>
                  <td>${f(a.summary.fixedCents)} <span class="${Oa(vr)}">${Ln(vr)}</span></td>
                  <td>${f(a.summary.variableCents)} <span class="${Oa(mr)}">${Ln(mr)}</span></td>
                  <td>${f(a.summary.miscCents)} <span class="${Oa(gr)}">${Ln(gr)}</span></td>
                  <td>${f(a.summary.totalCents)} <span class="${Oa(br)}">${Ln(br)}</span></td>
                  <td>${f(yt)} <span class="${kr(yr)}">${Ln(yr)}</span></td>
                  <td>${f(Zt)} <span class="${kr(Cr)}">${Ln(Cr)}</span></td>
                  <td>${f(Se)} <span class="${ii(xr)}">${Ln(xr)}</span></td>
                  <td class="${Sn}">${f(Qe)} <span class="${li}">${oi}</span></td>
                  <td class="${Ie($r)}">${f($r)}</td>
                  <td class="${ui}">${ci}</td>
                  <td class="${Ie(Sr)}">${f(Sr)}</td>
                </tr>`}).join("")}
                ${Ds}
                ${bs}
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
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${St(N)}" />
                    </td>
                    <td>-</td>
                  </tr>${i.incomes.map(a=>`<tr>
                    <td>${a.description}</td>
                    <td>
                      <select data-income-source="${a.id}">
                        <option value="" ${a.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${a.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${a.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${a.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${f(a.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${a.id}">Löschen</button></td>
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
                  <strong>${i?`${f(N)} €`:"-"}</strong>
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
                ${fn(O,u.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(Rt)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(xe)} €</strong>
                  </div>
                  <div class="column-overview-row ${Xe}">
                    <span>Diff</span>
                    <strong>${f(Ve)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${St(P)}" ${i?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${St(O)}" ${i?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${i?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${i?i.days.map(a=>{const m=a.foodCents>0,q=a.goingOutCents>0,Z=`${a.isoDate===p?"today-row":""} ${m||q?"day-has-entry":""}`.trim(),Se=`amount-input ${m?"day-input-has-value":""}`.trim(),Qe=`amount-input ${q?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Se}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${St(a.foodCents)}" /></td>
                      <td><input class="${Qe}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${St(a.goingOutCents)}" /></td>
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
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${St(A)}" ${i?"":"disabled"} />
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
                ${i?i.fixedCosts.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${St(a.plannedCents)}" /></td>
                    <td class="${J(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${St(a.actualCents)}" /></td>
                    <td class="${J(a.actualCents,a.plannedCents)}">${f(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${fn(U,u.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${St(U)}" ${i?"":"disabled"} />
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
                ${i?i.variablePositions.map(a=>`<tr>
                    <td>${a.name}${a.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${St(a.budgetCents)}" /></td>
                    <td class="${J(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${St(a.actualCents)}" /></td>
                    <td class="${J(a.actualCents,a.budgetCents)}">${f(a.actualCents-a.budgetCents)}</td>
                    <td>
                      <button class="btn" data-move-variable-position-next="${a.id}">Nächster Monat</button>
                      <button class="btn btn-quiet" data-remove-variable-position="${a.id}">Löschen</button>
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
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${St(V)}" ${i?"":"disabled"} />
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
                ${i?i.miscCosts.map(a=>`<tr>
                    <td>${a.description}</td>
                    <td>${f(a.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-misc="${a.id}">Löschen</button></td>
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
          <p class="muted">Letztes verwendetes Backup: ${e}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),vs(),Ct(),Le(),vt()}function vs(){const o=B.querySelector("#theme-select"),i=B.querySelector("#open-years-modal"),p=B.querySelector("#open-evaluation-modal"),u=B.querySelector("#open-fixed-modal"),v=B.querySelector("#open-variable-fixed-modal"),S=B.querySelector("#open-dashboard-modal"),P=B.querySelector("#panel-modal-close"),O=B.querySelector("#panel-modal-backdrop"),A=B.querySelector("#open-unexported-change-log"),U=B.querySelector("#open-persistent-audit-log"),V=B.querySelector("#unexported-change-log-close"),z=B.querySelector("#unexported-change-log-backup"),H=B.querySelector("#unexported-change-log-backdrop"),ie=B.querySelector("#persistent-audit-log-close"),Ce=B.querySelector("#persistent-audit-log-backdrop"),He=B.querySelector("#new-year"),le=B.querySelector("#create-year"),We=B.querySelector("#evaluation-query"),qe=B.querySelector("#run-evaluation"),_e=B.querySelector("#save-evaluation"),nt=B.querySelector("#year-select"),Ot=B.querySelector("#month-select");o?.addEventListener("change",()=>{const T=o.value;Pr(T)&&xa(T)}),i?.addEventListener("click",()=>{en("years")}),p?.addEventListener("click",()=>{en("evaluation")}),u?.addEventListener("click",()=>{en("fixed")}),v?.addEventListener("click",()=>{en("variable-fixed")}),S?.addEventListener("click",()=>{en("dashboard")}),A?.addEventListener("click",()=>{tn()}),U?.addEventListener("click",()=>{ht()}),V?.addEventListener("click",()=>{xt()}),z?.addEventListener("click",async()=>{try{await An()}catch(T){console.error("Backup-Export fehlgeschlagen",T),ae("Backup konnte nicht exportiert werden.","error")}}),H?.addEventListener("click",T=>{T.target===H&&xt()}),ie?.addEventListener("click",()=>{kt()}),Ce?.addEventListener("click",T=>{T.target===Ce&&kt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(T=>{T.addEventListener("click",()=>{const L=T.dataset.dashboardTab;L!=="year"&&L!=="food"&&L!=="all"||(h.dashboardTab=L,te())})});const N=B.querySelector("#dashboard-year-select");N?.addEventListener("change",()=>{const T=Number.parseInt(N.value,10);Number.isInteger(T)&&(h.dashboardYear=T,te())}),P?.addEventListener("click",()=>{Kn()}),O?.addEventListener("click",T=>{T.target===O&&Kn()}),h.topModal&&window.setTimeout(()=>{P?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{V?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{ie?.focus()},0),le?.addEventListener("click",async()=>{const T=Number.parseInt(He?.value??"",10);if(!Number.isInteger(T)){alert("Bitte gültiges Jahr eingeben.");return}await G(T)}),qe?.addEventListener("click",()=>{Ma(We?.value??"")}),We?.addEventListener("keydown",T=>{T.key==="Enter"&&(T.preventDefault(),Ma(We.value))}),_e?.addEventListener("click",async()=>{await _a()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(T=>{T.addEventListener("click",async()=>{const L=T.dataset.removeSavedEvaluation;L&&await fs(L)})}),nt?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(nt.value,10),h.selectedMonth=nn(),te()}),Ot?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Ot.value,10),te()});const $t=B.querySelector("#fixed-template-name"),gt=B.querySelector("#fixed-template-amount"),rn=B.querySelector("#add-fixed-template"),bt=B.querySelector("#cancel-fixed-template-edit"),ye=B.querySelector("#annual-variable-fixed-name"),Vt=B.querySelector("#annual-variable-fixed-date"),Ne=B.querySelector("#annual-variable-fixed-amount"),ze=B.querySelector("#add-annual-variable-fixed-template");rn?.addEventListener("click",async()=>{const T=$t?.value??"",L=Fe(gt?.value??"0");await gn(T,L),$t&&($t.value=""),gt&&(gt.value="")}),bt?.addEventListener("click",()=>{bn()}),ze?.addEventListener("click",async()=>{const T=ye?.value??"",L=Vt?.value??"",Nt=Fe(Ne?.value??"0");await Fs(T,L,Nt),ye&&(ye.value=""),Vt&&(Vt.value=""),Ne&&(Ne.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const L=T.dataset.removeAnnualVariableFixedTemplate;L&&await yn(L)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(T=>{T.addEventListener("click",()=>{const L=T.dataset.editFixedTemplate;L&&Gn(L)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const L=T.dataset.removeFixedTemplate;L&&await Sa(L)})}),B.querySelectorAll("[data-day-food]").forEach(T=>{T.addEventListener("click",L=>{L.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const L=T.dataset.dayFood;L&&await Va(L,"foodCents",Fe(T.value))})}),B.querySelectorAll("[data-day-going]").forEach(T=>{T.addEventListener("click",L=>{L.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const L=T.dataset.dayGoing;L&&await Va(L,"goingOutCents",Fe(T.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(T=>{T.addEventListener("click",L=>{L.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const L=T.dataset.fixedActual;L&&await _n(L,Fe(T.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(T=>{T.addEventListener("click",L=>{L.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const L=T.dataset.fixedPlanned;L&&await os(L,Fe(T.value))})});const Je=B.querySelector("#fixed-budget");Je?.addEventListener("click",T=>{T.preventDefault(),Je.blur(),rt(Je)}),Je?.addEventListener("change",async()=>{await sn(Fe(Je.value))});const et=B.querySelector("#food-budget");et?.addEventListener("click",T=>{T.preventDefault(),et.blur(),rt(et)}),et?.addEventListener("change",async()=>{await ls(Fe(et.value))});const tt=B.querySelector("#going-out-budget");tt?.addEventListener("click",T=>{T.preventDefault(),tt.blur(),rt(tt)}),tt?.addEventListener("change",async()=>{await Un(Fe(tt.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Ms()});const Ft=B.querySelector("#misc-budget");Ft?.addEventListener("click",T=>{T.preventDefault(),Ft.blur(),rt(Ft)}),Ft?.addEventListener("change",async()=>{await Ea(Fe(Ft.value))});const Dt=B.querySelector("#variable-budget");Dt?.addEventListener("click",T=>{T.preventDefault(),Dt.blur(),rt(Dt)}),Dt?.addEventListener("change",async()=>{await ja(Fe(Dt.value))});const Lt=B.querySelector("#variable-position-name"),it=B.querySelector("#variable-position-budget"),Rt=B.querySelector("#add-variable-position"),xe=B.querySelector("#add-variable-position-recurring"),Ve=B.querySelector("#import-variable-csv"),Xe=B.querySelector("#import-variable-csv-input"),Ae=B.querySelector("#misc-description"),Re=B.querySelector("#misc-amount"),on=B.querySelector("#add-misc"),Ie=B.querySelector("#add-misc-recurring"),ln=B.querySelector("#import-misc-csv"),Oe=B.querySelector("#import-misc-csv-input"),re=B.querySelector("#income-description"),ot=B.querySelector("#income-source"),Mt=B.querySelector("#income-amount"),xn=B.querySelector("#add-income"),Ht=B.querySelector("#add-income-recurring"),kn=B.querySelector("#fixed-cost-name"),jt=B.querySelector("#fixed-cost-budget"),lt=B.querySelector("#add-fixed-cost"),at=B.querySelector("#import-fixed-csv"),ct=B.querySelector("#import-fixed-csv-input"),Jn=B.querySelector("#clear-fixed-costs"),Yt=B.querySelector("#carryover-override");Yt?.addEventListener("click",T=>{T.preventDefault(),Yt.blur(),rt(Yt)}),Yt?.addEventListener("change",async()=>{const T=Yt.value;if(!T.trim()){await Cn(null);return}await Cn(Fe(T))}),lt?.addEventListener("click",async()=>{const T=Fe(jt?.value??"0");await Ra(kn?.value??"",T),kn&&(kn.value=""),jt&&(jt.value="")}),at?.addEventListener("click",()=>{ct?.click()}),ct?.addEventListener("change",async()=>{const T=ct.files?.[0];if(T){try{await ds(T)}catch(L){console.error("Fixkosten-CSV-Import fehlgeschlagen",L),ae("CSV konnte nicht importiert werden.","error")}ct.value=""}}),Jn?.addEventListener("click",async()=>{await Tn()}),Rt?.addEventListener("click",async()=>{const T=Fe(it?.value??"0");await Ya(Lt?.value??"",T,!1),Lt&&(Lt.value=""),it&&(it.value="")}),xe?.addEventListener("click",async()=>{const T=Fe(it?.value??"0");await Ya(Lt?.value??"",T,!0),Lt&&(Lt.value=""),it&&(it.value="")}),Ve?.addEventListener("click",()=>{Xe?.click()}),Xe?.addEventListener("change",async()=>{const T=Xe.files?.[0];if(T){try{await hs(T)}catch(L){console.error("Variable-CSV-Import fehlgeschlagen",L),ae("CSV konnte nicht importiert werden.","error")}Xe.value=""}}),on?.addEventListener("click",async()=>{const T=Fe(Re?.value??"0");await za(Ae?.value??"",T,!1),Ae&&(Ae.value=""),Re&&(Re.value="")}),Ie?.addEventListener("click",async()=>{const T=Fe(Re?.value??"0");await za(Ae?.value??"",T,!0),Ae&&(Ae.value=""),Re&&(Re.value="")}),ln?.addEventListener("click",()=>{Oe?.click()}),Oe?.addEventListener("change",async()=>{const T=Oe.files?.[0];if(T){try{await da(T)}catch(L){console.error("Sonstiges-CSV-Import fehlgeschlagen",L),ae("CSV konnte nicht importiert werden.","error")}Oe.value=""}}),xn?.addEventListener("click",async()=>{const T=Fe(Mt?.value??"0"),L=ot?.value,Nt=L==="balance"||L==="fresh"||L==="salary"?L:void 0;await Me(re?.value??"",T,Nt,!1),re&&(re.value=""),Mt&&(Mt.value=""),ot&&(ot.value="salary")}),Ht?.addEventListener("click",async()=>{const T=Fe(Mt?.value??"0"),L=ot?.value,Nt=L==="balance"||L==="fresh"||L==="salary"?L:void 0;await Me(re?.value??"",T,Nt,!0),re&&(re.value=""),Mt&&(Mt.value=""),ot&&(ot.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(T=>{T.addEventListener("change",async()=>{const L=T.dataset.incomeSource;if(!L)return;const Nt=T.value;await ha(L,Nt==="balance"||Nt==="fresh"||Nt==="salary"?Nt:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(T=>{T.addEventListener("click",L=>{L.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const L=T.dataset.variablePositionBudget;L&&await cs(L,Fe(T.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(T=>{T.addEventListener("click",L=>{L.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const L=T.dataset.variablePositionActual;L&&await Ba(L,Fe(T.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(T=>{T.addEventListener("click",async()=>{const L=T.dataset.removeVariablePosition;L&&await fe(L)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(T=>{T.addEventListener("click",async()=>{const L=T.dataset.moveVariablePositionNext;L&&await us(L)})}),B.querySelectorAll("[data-remove-fixed]").forEach(T=>{T.addEventListener("click",async()=>{const L=T.dataset.removeFixed;L&&await Ue(L)})}),B.querySelectorAll("[data-remove-income]").forEach(T=>{T.addEventListener("click",async()=>{const L=T.dataset.removeIncome;L&&await pa(L)})}),B.querySelectorAll("[data-remove-misc]").forEach(T=>{T.addEventListener("click",async()=>{const L=T.dataset.removeMisc;L&&await ps(L)})});const Xn=B.querySelector("#backup-export"),In=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Xn?.addEventListener("click",async()=>{await An()}),In?.addEventListener("change",async()=>{const T=In.files?.[0];if(T){try{await Wa(T)}catch(L){console.error("Backup-Import fehlgeschlagen",L),ae("Backup konnte nicht importiert werden.","error")}In.value=""}})}return{init:As}}const Bi="modulepreload",Mi=function(B){return"/habu26/"+B},Ir={},_i=function(h,we,Q){let de=Promise.resolve();if(we&&we.length>0){let Ze=function(je){return Promise.all(je.map(ce=>Promise.resolve(ce).then(dt=>({status:"fulfilled",value:dt}),dt=>({status:"rejected",reason:dt}))))};var be=Ze;document.getElementsByTagName("link");const oe=document.querySelector("meta[property=csp-nonce]"),pe=oe?.nonce||oe?.getAttribute("nonce");de=Ze(we.map(je=>{if(je=Mi(je),je in Ir)return;Ir[je]=!0;const ce=je.endsWith(".css"),dt=ce?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${je}"]${dt}`))return;const st=document.createElement("link");if(st.rel=ce?"stylesheet":Bi,ce||(st.as="script"),st.crossOrigin="",st.href=je,pe&&st.setAttribute("nonce",pe),document.head.appendChild(st),ce)return new Promise((Le,Ct)=>{st.addEventListener("load",Le),st.addEventListener("error",()=>Ct(new Error(`Unable to preload CSS for ${je}`)))})}))}function se(oe){const pe=new Event("vite:preloadError",{cancelable:!0});if(pe.payload=oe,window.dispatchEvent(pe),!pe.defaultPrevented)throw oe}return de.then(oe=>{for(const pe of oe||[])pe.status==="rejected"&&se(pe.reason);return h().catch(se)})};function Ti(B={}){const{immediate:h=!1,onNeedRefresh:we,onOfflineReady:Q,onRegistered:de,onRegisteredSW:se,onRegisterError:be}=B;let oe,pe;const Ze=async(ce=!0)=>{await pe};async function je(){if("serviceWorker"in navigator){if(oe=await _i(async()=>{const{Workbox:ce}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ce}},[]).then(({Workbox:ce})=>new ce("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ce=>{be?.(ce)}),!oe)return;oe.addEventListener("activated",ce=>{(ce.isUpdate||ce.isExternal)&&window.location.reload()}),oe.addEventListener("installed",ce=>{ce.isUpdate||Q?.()}),oe.register({immediate:h}).then(ce=>{se?se("/habu26/sw.js",ce):de?.(ce)}).catch(ce=>{be?.(ce)})}}return pe=je(),Ze}function Pi(){Ti({immediate:!0})}const Fr=document.getElementById("app");if(!Fr)throw new Error("App-Container nicht gefunden.");Ei(Fr).init();Pi();
