(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const oe of document.querySelectorAll('link[rel="modulepreload"]'))H(oe);new MutationObserver(oe=>{for(const ae of oe)if(ae.type==="childList")for(const be of ae.addedNodes)be.tagName==="LINK"&&be.rel==="modulepreload"&&H(be)}).observe(document,{childList:!0,subtree:!0});function Pe(oe){const ae={};return oe.integrity&&(ae.integrity=oe.integrity),oe.referrerPolicy&&(ae.referrerPolicy=oe.referrerPolicy),oe.crossOrigin==="use-credentials"?ae.credentials="include":oe.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function H(oe){if(oe.ep)return;oe.ep=!0;const ae=Pe(oe);fetch(oe.href,ae)}})();const li=[1,2,3,4,5,6,7,8,9,10,11,12];function ts(){return new Date().toISOString()}function St(M){const h=Math.random().toString(36).slice(2,10);return`${M}_${Date.now()}_${h}`}function ci(M,h){const Pe=new Date(M,h,0).getDate(),H=[];for(let oe=1;oe<=Pe;oe+=1){const ae=new Date(Date.UTC(M,h-1,oe));H.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return H}function ui(M){return M.map(h=>({id:St("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Sr(M,h,Pe){const H=h.reduce((ae,be)=>ae+be.plannedCents,0),oe=li.map(ae=>({month:ae,days:ci(M,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:ui(h),fixedBudgetCents:H,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:M,createdAt:ts(),templateVersion:Pe,months:oe}}function Er(M,h){return{id:St("expense"),description:M,amountCents:h,createdAt:ts()}}function Br(M,h,Pe){const H={id:St("income"),description:M,amountCents:h,createdAt:ts()};return Pe?{...H,incomeSource:Pe}:H}function Ss(M,h){return M.toLocaleLowerCase("de-DE").includes(h)}function di(M,h,Pe){const H=h.trim(),oe=H.toLocaleLowerCase("de-DE");if(!oe)return{id:St("search_eval"),keyword:"",keywordNormalized:"",createdAt:ts(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let ae=0,be=0,re=0,ce=0;const st=[],Le=[];return M.slice().sort((se,Qe)=>se.year-Qe.year).forEach(se=>{let Qe=0,Ze=0,et=0;se.months.slice().sort((ct,ut)=>ct.month-ut.month).forEach(ct=>{let ut=0,jt=0;ct.fixedCosts.forEach(dt=>{Ss(dt.name,oe)&&(ut+=1,jt+=dt.actualCents)}),ct.variableCosts.forEach(dt=>{Ss(dt.description,oe)&&(ut+=1,jt+=dt.amountCents)}),ct.variablePositions.forEach(dt=>{Ss(dt.name,oe)&&(ut+=1,jt+=dt.actualCents)}),ct.miscCosts.forEach(dt=>{Ss(dt.description,oe)&&(ut+=1,jt+=dt.amountCents)}),!(ut<=0)&&(Qe+=ut,Ze+=jt,et+=1,ae+=ut,be+=jt,ce+=1,Le.push({year:se.year,month:ct.month,hitCount:ut,totalCents:jt}))}),!(Qe<=0)&&(se.year===Pe&&(re+=Ze),st.push({year:se.year,hitCount:Qe,totalCents:Ze,monthsWithHits:et,monthAverageCents:et>0?Math.round(Ze/et):0}))}),{id:St("search_eval"),keyword:H,keywordNormalized:oe,createdAt:ts(),totalHitCount:ae,totalCents:be,currentYearCents:re,monthsWithHits:ce,monthAverageCents:ce>0?Math.round(be/ce):0,yearRows:st,monthRows:Le}}var hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fi(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var Es={exports:{}},pi=Es.exports,Mr;function vi(){return Mr||(Mr=1,(function(M,h){((Pe,H)=>{M.exports=H()})(pi,function(){var Pe=function(e,t){return(Pe=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},H=function(){return(H=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function oe(e,t,n){for(var s,r=0,i=t.length;r<i;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:hi,be=Object.keys,re=Array.isArray;function ce(e,t){return typeof t=="object"&&be(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var st=Object.getPrototypeOf,Le={}.hasOwnProperty;function se(e,t){return Le.call(e,t)}function Qe(e,t){typeof t=="function"&&(t=t(st(e))),(typeof Reflect>"u"?be:Reflect.ownKeys)(t).forEach(function(n){et(e,n,t[n])})}var Ze=Object.defineProperty;function et(e,t,n,s){Ze(e,t,ce(n&&se(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function ct(e){return{from:function(t){return e.prototype=Object.create(t.prototype),et(e.prototype,"constructor",e),{extend:Qe.bind(null,e.prototype)}}}}var ut=Object.getOwnPropertyDescriptor,jt=[].slice;function dt(e,t,n){return jt.call(e,t,n)}function ca(e,t){return t(e)}function Wn(e){if(!e)throw new Error("Assertion Failed")}function ua(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function an(e,t){if(typeof t=="string"&&se(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var i=an(e,t[s]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:an(c,t.substr(u+1))}function gt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Wn(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)gt(e,t[s],n[s])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?re(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:gt(c=(c=e[i])&&se(e,i)?c:e[i]={},u,n)):n===void 0?re(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Oa(e){var t,n={};for(t in e)se(e,t)&&(n[t]=e[t]);return n}var Ms=[].concat;function Ia(e){return Ms.apply([],e)}var Vt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ia([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),ns=new Set(Vt.map(function(e){return ae[e]})),Gn=null;function bt(e){return Gn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=Gn.get(n);if(s)return s;if(re(n)){s=[],Gn.set(n,s);for(var r=0,i=n.length;r<i;++r)s.push(t(n[r]))}else if(ns.has(n.constructor))s=n;else{var c,u=st(n);for(c in s=u===Object.prototype?{}:Object.create(u),Gn.set(n,s),n)se(n,c)&&(s[c]=t(n[c]))}return s})(e),Gn=null,e}var Un={}.toString;function Fa(e){return Un.call(e).slice(8,-1)}var Da=typeof Symbol<"u"?Symbol.iterator:"@@iterator",_s=typeof Da=="symbol"?function(e){var t;return e!=null&&(t=e[Da])&&t.apply(e)}:function(){return null};function un(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var it={};function ue(e){var t,n,s,r;if(arguments.length===1){if(re(e))return e.slice();if(this===it&&typeof e=="string")return[e];if(r=_s(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var Cn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Vt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ot=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Vt),as={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function xn(e,t){this.name=e,this.message=t}function ss(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function pt(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=ss(e,t)}function Fn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=ss(e,this.failures)}ct(xn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),ct(pt).from(xn),ct(Fn).from(xn);var da=ot.reduce(function(e,t){return e[t]=t+"Error",e},{}),Ts=xn,Z=ot.reduce(function(e,t){var n=t+"Error";function s(r,i){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(i?`
 `+i:""),this.inner=i||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=as[t]||n,this.inner=null)}return ct(s).from(Ts),e[t]=s,e},{}),rs=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,Vt.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));Vt=ot.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function $e(){}function Hn(e){return e}function Ps(e,t){return e==null||e===Hn?t:function(n){return t(e(n))}}function kn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function is(e,t){return e===$e?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?kn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?kn(r,this.onerror):r),i!==void 0?i:n}}function As(e,t){return e===$e?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?kn(n,this.onsuccess):n),s&&(this.onerror=this.onerror?kn(s,this.onerror):s)}}function Os(e,t){return e===$e?t:function(r){var s=e.apply(this,arguments),r=(ce(r,s),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?kn(r,this.onsuccess):r),i&&(this.onerror=this.onerror?kn(i,this.onerror):i),s===void 0?c===void 0?void 0:c:ce(s,c)}}function Na(e,t){return e===$e?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Jn(e,t){return e===$e?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,i=new Array(r);r--;)i[r]=arguments[r];return n.then(function(){return t.apply(s,i)})}return t.apply(this,arguments)}}Vt.ModifyError=pt,Vt.DexieError=xn,Vt.BulkError=Fn;var yt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function La(e){yt=e}var sn={},je=100,Xn=typeof Promise>"u"?[]:(ot=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Xn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),st(Xn),ot]:[ot,st(ot),ot]),ot=Xn[0],_n=Xn[1],_n=_n&&_n.then,Jt=ot&&ot.constructor,Dn=!!Xn[2],Qn=function(e,t){Xt.push([e,t]),Nn&&(queueMicrotask(ja),Nn=!1)},Zn=!0,Nn=!0,dn=[],Ln=[],Ka=Hn,Ve={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},Q=Ve,Xt=[],Yt=0,ha=[];function V(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=Q;if(typeof e!="function"){if(e!==sn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Je(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(i){if(s._state===null){if(i===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&wn();i&&typeof i.then=="function"?n(s,function(u,v){i instanceof V?i._then(u,v):i.then(u,v)}):(s._state=!0,s._value=i,At(s)),c&&hn()}},Je.bind(null,s))}catch(i){Je(s,i)}})(this,e)}var qa={get:function(){var e=Q,t=ma;function n(s,r){var i=this,c=!e.global&&(e!==Q||t!==ma),u=c&&!pn(),v=new V(function(S,y){pe(i,new Ra(cs(s,e,c,u),cs(r,e,c,u),S,y,e))});return this._consoleTask&&(v._consoleTask=this._consoleTask),v}return n.prototype=sn,n},set:function(e){et(this,"then",e&&e.prototype===sn?qa:{get:function(){return e},set:qa.set})}};function Ra(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function Je(e,t){var n,s;Ln.push(t),e._state===null&&(n=e._lib&&wn(),t=Ka(t),e._state=!1,e._value=t,s=e,dn.some(function(r){return r._value===s._value})||dn.push(s),At(e),n)&&hn()}function At(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)pe(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),Yt===0&&(++Yt,Qn(function(){--Yt==0&&fa()},[]))}function pe(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Yt,Qn(Kn,[n,e,t])}}function Kn(e,t,n){try{var s,r=t._value;!t._state&&Ln.length&&(Ln=[]),s=yt&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||Ln.indexOf(r)!==-1||(i=>{for(var c=dn.length;c;)if(dn[--c]._value===i._value)return dn.splice(c,1)})(t),n.resolve(s)}catch(i){n.reject(i)}finally{--Yt==0&&fa(),--n.psd.ref||n.psd.finalize()}}function ja(){$n(Ve,function(){wn()&&hn()})}function wn(){var e=Zn;return Nn=Zn=!1,e}function hn(){var e,t,n;do for(;0<Xt.length;)for(e=Xt,Xt=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<Xt.length);Nn=Zn=!0}function fa(){for(var e=dn,t=(dn=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),ha.slice(0)),n=t.length;n;)t[--n]()}function zt(e){return new V(sn,!1,e)}function ye(e,t){var n=Q;return function(){var s=wn(),r=Q;try{return rn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{rn(r,!1),s&&hn()}}}Qe(V.prototype,{then:qa,_then:function(e,t){pe(this,new Ra(null,null,e,t,Q))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:zt)(s)}):this.then(null,function(s){return(s&&s.name===t?n:zt)(s)}))},finally:function(e){return this.then(function(t){return V.resolve(e()).then(function(){return t})},function(t){return V.resolve(e()).then(function(){return zt(t)})})},timeout:function(e,t){var n=this;return e<1/0?new V(function(s,r){var i=setTimeout(function(){return r(new Z.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&et(V.prototype,Symbol.toStringTag,"Dexie.Promise"),Ve.env=ls(),Qe(V,{all:function(){var e=ue.apply(null,arguments).map(ga);return new V(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,i){return V.resolve(r).then(function(c){e[i]=c,--s||t(e)},n)})})},resolve:function(e){return e instanceof V?e:e&&typeof e.then=="function"?new V(function(t,n){e.then(t,n)}):new V(sn,!0,e)},reject:zt,race:function(){var e=ue.apply(null,arguments).map(ga);return new V(function(t,n){e.map(function(s){return V.resolve(s).then(t,n)})})},PSD:{get:function(){return Q},set:function(e){return Q=e}},totalEchoes:{get:function(){return ma}},newPSD:fn,usePSD:$n,scheduler:{get:function(){return Qn},set:function(e){Qn=e}},rejectionMapper:{get:function(){return Ka},set:function(e){Ka=e}},follow:function(e,t){return new V(function(n,s){return fn(function(r,i){var c=Q;c.unhandleds=[],c.onunhandled=i,c.finalize=kn(function(){var u,v=this;u=function(){v.unhandleds.length===0?r():i(v.unhandleds[0])},ha.push(function S(){u(),ha.splice(ha.indexOf(S),1)}),++Yt,Qn(function(){--Yt==0&&fa()},[])},c.finalize),e()},t,n,s)})}}),Jt&&(Jt.allSettled&&et(V,"allSettled",function(){var e=ue.apply(null,arguments).map(ga);return new V(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,i){return V.resolve(r).then(function(c){return s[i]={status:"fulfilled",value:c}},function(c){return s[i]={status:"rejected",reason:c}}).then(function(){return--n||t(s)})})})}),Jt.any&&typeof AggregateError<"u"&&et(V,"any",function(){var e=ue.apply(null,arguments).map(ga);return new V(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(i,c){return V.resolve(i).then(function(u){return t(u)},function(u){r[c]=u,--s||n(new AggregateError(r))})})})}),Jt.withResolvers)&&(V.withResolvers=Jt.withResolvers);var rt={awaits:0,echoes:0,id:0},os=0,pa=[],va=0,ma=0,Is=0;function fn(e,c,n,s){var r=Q,i=Object.create(r),c=(i.parent=r,i.ref=0,i.global=!1,i.id=++Is,Ve.env,i.env=Dn?{Promise:V,PromiseProp:{value:V,configurable:!0,writable:!0},all:V.all,race:V.race,allSettled:V.allSettled,any:V.any,resolve:V.resolve,reject:V.reject}:{},c&&ce(i,c),++r.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},$n(i,e,n,s));return i.ref===0&&i.finalize(),c}function qn(){return rt.id||(rt.id=++os),++rt.awaits,rt.echoes+=je,rt.id}function pn(){return!!rt.awaits&&(--rt.awaits==0&&(rt.id=0),rt.echoes=rt.awaits*je,!0)}function ga(e){return rt.echoes&&e&&e.constructor===Jt?(qn(),e.then(function(t){return pn(),t},function(t){return pn(),Ye(t)})):e}function Fs(){var e=pa[pa.length-1];pa.pop(),rn(e,!1)}function rn(e,t){var n,s,r=Q;(t?!rt.echoes||va++&&e===Q:!va||--va&&e===Q)||queueMicrotask(t?(function(i){++ma,rt.echoes&&--rt.echoes!=0||(rt.echoes=rt.awaits=rt.id=0),pa.push(Q),rn(i,!0)}).bind(null,e):Fs),e!==Q&&(Q=e,r===Ve&&(Ve.env=ls()),Dn)&&(n=Ve.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(ae,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function ls(){var e=ae.Promise;return Dn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function $n(e,t,n,s,r){var i=Q;try{return rn(e,!0),t(n,s,r)}finally{rn(i,!1)}}function cs(e,t,n,s){return typeof e!="function"?e:function(){var r=Q;n&&qn(),rn(t,!0);try{return e.apply(this,arguments)}finally{rn(r,!1),s&&queueMicrotask(pn)}}}function Va(e){Promise===Jt&&rt.echoes===0?va===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+_n).indexOf("[native code]")===-1&&(qn=pn=$e);var Ye=V.reject,Sn="￿",on="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",us="String expected.",Rn=[],vn="__dbnames",ba="readonly",ya="readwrite";function En(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ds={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ca(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=bt(t))[e],t}}function hs(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function de(e,t){try{var n=fs(e),s=fs(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=Ya(e),i=Ya(t),c=r.length,u=i.length,v=c<u?c:u,S=0;S<v;++S)if(r[S]!==i[S])return r[S]<i[S]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var y=e,m=t,k=y.length,w=m.length,C=k<w?k:w,g=0;g<C;++g){var B=de(y[g],m[g]);if(B!==0)return B}return k===w?0:k<w?-1:1}}catch{}return NaN}function fs(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Fa(e))==="ArrayBuffer")?"binary":t}function Ya(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function xa(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,i){return!n.failures[i]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}za.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(re(n))return oe(oe([],re(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(re(s))return re(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var ea=za;function za(e){this["@@propmod"]=e}function ps(e,t){for(var n=be(t),s=n.length,r=!1,i=0;i<s;++i){var c=n[i],u=t[c],v=an(e,c);u instanceof ea?(gt(e,c,u.execute(v)),r=!0):v!==u&&(gt(e,c,u),r=!0)}return r}Me.prototype._trans=function(e,t,n){var s=this._tx||Q.trans,r=this.name,i=yt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(S,y,m){if(m.schema[r])return t(m.idbtrans,m);throw new Z.NotFound("Table "+r+" not part of transaction")}var u=wn();try{var v=s&&s.db._novip===this.db._novip?s===Q.trans?s._promise(e,c,n):fn(function(){return s._promise(e,c,n)},{trans:s,transless:Q.transless||Q}):(function S(y,m,k,w){if(y.idbdb&&(y._state.openComplete||Q.letThrough||y._vip)){var C=y._createTransaction(m,k,y._dbSchema);try{C.create(),y._state.PR1398_maxLoop=3}catch(g){return g.name===da.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return S(y,m,k,w)})):Ye(g)}return C._promise(m,function(g,B){return fn(function(){return Q.trans=C,w(g,B,C)})}).then(function(g){if(m==="readwrite")try{C.idbtrans.commit()}catch{}return m==="readonly"?g:C._completion.then(function(){return g})})}if(y._state.openComplete)return Ye(new Z.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Ye(new Z.DatabaseClosed);y.open().catch($e)}return y._state.dbReadyPromise.then(function(){return S(y,m,k,w)})})(this.db,e,[this.name],c);return i&&(v._consoleTask=i,v=v.catch(function(S){return console.trace(S),Ye(S)})),v}finally{u&&hn()}},Me.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ye(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},Me.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(re(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=be(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function(S){return 0<=u.keyPath.indexOf(S)})){for(var v=0;v<t.length;++v)if(t.indexOf(u.keyPath[v])===-1)return!1;return!0}return!1}).sort(function(u,v){return u.keyPath.length-v.keyPath.length})[0];if(n&&this.db._maxKey!==Sn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&yt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(u,v){return de(u,v)===0}var c=t.reduce(function(y,v){var S=y[0],y=y[1],m=s[v],k=e[v];return[S||m,S||!m?En(y,m&&m.multi?function(w){return w=an(w,v),re(w)&&w.some(function(C){return r(k,C)})}:function(w){return r(k,an(w,v))}):y]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Me.prototype.filter=function(e){return this.toCollection().and(e)},Me.prototype.count=function(e){return this.toCollection().count(e)},Me.prototype.offset=function(e){return this.toCollection().offset(e)},Me.prototype.limit=function(e){return this.toCollection().limit(e)},Me.prototype.each=function(e){return this.toCollection().each(e)},Me.prototype.toArray=function(e){return this.toCollection().toArray(e)},Me.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Me.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,re(e)?"[".concat(e.join("+"),"]"):e))},Me.prototype.reverse=function(){return this.toCollection().reverse()},Me.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof hs&&(e=(c=>{var u=y,v=c;if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function S(){this.constructor=u}function y(){return c!==null&&c.apply(this,arguments)||this}return Pe(u,v),u.prototype=v===null?Object.create(v):(S.prototype=v.prototype,new S),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),r=e.prototype;r;r=st(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function i(c){if(!c)return c;var u,v=Object.create(e.prototype);for(u in c)if(!s.has(u))try{v[u]=c[u]}catch{}return v}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},Me.prototype.defineClass=function(){return this.mapToClass(function(e){ce(this,e)})},Me.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=Ca(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?V.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},Me.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(i){var c=i??{};return ps(c,t),s&&gt(c,s,e),n.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?V.reject(u.failures[0]):!!i})})})},Me.prototype.update=function(e,t){return typeof e!="object"||re(e)?this.where(":id").equals(e).modify(t):(e=an(e,this.schema.primKey.keyPath))===void 0?Ye(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Me.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=Ca(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?V.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},Me.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return xa(t,[e],s)}).then(function(s){return s.numFailures?V.reject(s.failures[0]):void 0})})},Me.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:ds}).then(function(n){return xa(e,null,n)})}).then(function(t){return t.numFailures?V.reject(t.failures[0]):void 0})},Me.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Me.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,i=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=s.schema.primKey,S=u.auto,u=u.keyPath;if(u&&r)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,S=u&&S?e.map(Ca(u)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:S,wantResults:i}).then(function(y){var m=y.numFailures,k=y.failures;if(m===0)return i?y.results:y.lastResult;throw new Fn("".concat(s.name,".bulkAdd(): ").concat(m," of ").concat(v," operations failed"),k)})})},Me.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,i=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=s.schema.primKey,S=u.auto,u=u.keyPath;if(u&&r)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,S=u&&S?e.map(Ca(u)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:S,wantResults:i}).then(function(y){var m=y.numFailures,k=y.failures;if(m===0)return i?y.results:y.lastResult;throw new Fn("".concat(s.name,".bulkPut(): ").concat(m," of ").concat(v," operations failed"),k)})})},Me.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:s,cache:"clone"}).then(function(u){var v=[],S=[],y=(e.forEach(function(m,k){var w=m.key,C=m.changes,g=u[k];if(g){for(var B=0,_=Object.keys(C);B<_.length;B++){var $=_[B],P=C[$];if($===t.schema.primKey.keyPath){if(de(P,w)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else gt(g,$,P)}i.push(k),v.push(w),S.push(g)}}),v.length);return n.mutate({trans:c,type:"put",keys:v,values:S,updates:{keys:s,changeSpecs:r}}).then(function(m){var k=m.numFailures,w=m.failures;if(k===0)return y;for(var C=0,g=Object.keys(w);C<g.length;C++){var B,_=g[C],$=i[Number(_)];$!=null&&(B=w[_],delete w[_],w[$]=B)}throw new Fn("".concat(t.name,".bulkUpdate(): ").concat(k," of ").concat(y," operations failed"),w)})})})},Me.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return xa(t,e,r)})}).then(function(s){var r=s.numFailures,i=s.failures;if(r===0)return s.lastResult;throw new Fn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),i)})};var Wa=Me;function Me(){}function ta(e){function t(c,u){if(u){for(var v=arguments.length,S=new Array(v-1);--v;)S[v-1]=arguments[v];return n[c].subscribe.apply(null,S),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var s=1,r=arguments.length;s<r;++s)i(arguments[s]);return t;function i(c,u,v){var S,y;if(typeof c!="object")return u=u||Na,y={subscribers:[],fire:v=v||$e,subscribe:function(m){y.subscribers.indexOf(m)===-1&&(y.subscribers.push(m),y.fire=u(y.fire,m))},unsubscribe:function(m){y.subscribers=y.subscribers.filter(function(k){return k!==m}),y.fire=y.subscribers.reduce(u,v)}},n[c]=t[c]=y;be(S=c).forEach(function(m){var k=S[m];if(re(k))i(m,S[m][0],S[m][1]);else{if(k!=="asap")throw new Z.InvalidArgument("Invalid event config");var w=i(m,Hn,function(){for(var C=arguments.length,g=new Array(C);C--;)g[C]=arguments[C];w.subscribers.forEach(function(B){ua(function(){B.apply(null,g)})})})}})}}function te(e,t){return ct(t).from({prototype:e}),t}function jn(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function o(e,t){e.filter=En(e.filter,t)}function l(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return En(s(),t())}:t,e.justLimit=n&&!s}function f(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function d(e,t,n){var s=f(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function x(e,t,n,s){var r,i,c=e.replayFilter?En(e.filter,e.replayFilter()):e.filter;return e.or?(r={},i=function(u,v,S){var y,m;c&&!c(v,S,function(k){return v.stop(k)},function(k){return v.fail(k)})||((m=""+(y=v.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(y)),se(r,m))||(r[m]=!0,t(u,v,S))},Promise.all([e.or._iterate(i,n),T(d(e,s,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):T(d(e,s,n),En(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function T(e,t,n,s){var r=ye(s?function(i,c,u){return n(s(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=$e},function(u){i.fail(u),c=$e})||r(i.value,i,function(u){return c=u}),c()})})}A.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ye.bind(null,n.error)):n.table._trans("readonly",e).then(t)},A.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ye.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},A.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=En(t.algorithm,e)},A.prototype._iterate=function(e,t){return x(this._ctx,e,t,this._ctx.table.core)},A.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ce(n,e),t._ctx=n,t},A.prototype.raw=function(){return this._ctx.valueMapper=null,this},A.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return x(t,e,n,t.table.core)})},A.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,i=r.table.core;return jn(r,!0)?i.count({trans:n,query:{index:f(r,i.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,x(r,function(){return++s,!1},n,i).then(function(){return s}))}).then(e)},A.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function i(v,S){return S?i(v[n[S]],S-1):v[s]}var c=this._ctx.dir==="next"?1:-1;function u(v,S){return de(i(v,r),i(S,r))*c}return this.toArray(function(v){return v.sort(u)}).then(t)},A.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,i,c=t._ctx;return c.dir==="next"&&jn(c,!0)&&0<c.limit?(s=c.valueMapper,r=f(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(u){return u=u.result,s?u.map(s):u})):(i=[],x(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},A.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,jn(t)?l(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):l(t,function(){var n=e;return function(){return--n<0}})),this},A.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),l(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},A.prototype.until=function(e,t){return o(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},A.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},A.prototype.last=function(e){return this.reverse().first(e)},A.prototype.filter=function(e){var t;return o(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=En(t.isMatch,e),this},A.prototype.and=function(e){return this.filter(e)},A.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},A.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},A.prototype.desc=function(){return this.reverse()},A.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},A.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},A.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},A.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},A.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&jn(t,!0)&&0<t.limit)return this._read(function(s){var r=f(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},A.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},A.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},A.prototype.lastKey=function(e){return this.reverse().firstKey(e)},A.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},o(this._ctx,function(s){var s=s.primaryKey.toString(),r=se(e,s);return e[s]=!0,!r})),this},A.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(g,B){var _=B.failures;k+=g-B.numFailures;for(var $=0,P=be(_);$<P.length;$++){var O=P[$];m.push(_[O])}}var i=typeof e=="function"?e:function(g){return ps(g,e)},c=n.table.core,y=c.schema.primaryKey,u=y.outbound,v=y.extractKey,S=200,y=t.db._options.modifyChunkSize,m=(y&&(S=typeof y=="object"?y[c.name]||y["*"]||200:y),[]),k=0,w=[],C=e===L;return t.clone().primaryKeys().then(function(g){function B($){var P=Math.min(S,g.length-$),O=g.slice($,$+P);return(C?Promise.resolve([]):c.getMany({trans:s,keys:O,cache:"immutable"})).then(function(j){var R=[],F=[],U=u?[]:null,z=C?O:[];if(!C)for(var D=0;D<P;++D){var Y=j[D],me={value:bt(Y),primKey:g[$+D]};i.call(me,me.value,me)!==!1&&(me.value==null?z.push(g[$+D]):u||de(v(Y),v(me.value))===0?(F.push(me.value),u&&U.push(g[$+D])):(z.push(g[$+D]),R.push(me.value)))}return Promise.resolve(0<R.length&&c.mutate({trans:s,type:"add",values:R}).then(function(ge){for(var ee in ge.failures)z.splice(parseInt(ee),1);r(R.length,ge)})).then(function(){return(0<F.length||_&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:U,values:F,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<$}).then(function(ge){return r(F.length,ge)})}).then(function(){return(0<z.length||_&&C)&&c.mutate({trans:s,type:"delete",keys:z,criteria:_,isAdditionalChunk:0<$}).then(function(ge){return xa(n.table,z,ge)}).then(function(ge){return r(z.length,ge)})}).then(function(){return g.length>$+P&&B($+S)})})}var _=jn(n)&&n.limit===1/0&&(typeof e!="function"||C)&&{index:n.index,range:n.range};return B(0).then(function(){if(0<m.length)throw new pt("Error modifying one or more objects",m,k,w);return g.length})})})},A.prototype.delete=function(){var e=this._ctx,t=e.range;return!jn(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(L):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(v){var u=v.failures,v=v.numFailures;if(v)throw new pt("Could not delete some values",Object.keys(u).map(function(S){return u[S]}),i-v);return i-v})})})};var I=A;function A(){}var L=function(e,t){return t.value=null};function J(e,t){return e<t?-1:e===t?0:1}function W(e,t){return t<e?-1:e===t?0:1}function G(e,t,n){return e=e instanceof fe?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function ne(e){return new e.Collection(e,function(){return Xe("")}).limit(0)}function he(w,t,n,s){var r,i,c,u,v,S,y,m=n.length;if(!n.every(function(g){return typeof g=="string"}))return G(w,us);function k(g){r=g==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},i=g==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=g==="next"?J:W;var B=n.map(function(_){return{lower:i(_),upper:r(_)}}).sort(function(_,$){return c(_.lower,$.lower)});u=B.map(function(_){return _.upper}),v=B.map(function(_){return _.lower}),y=(S=g)==="next"?"":s}k("next");var w=new w.Collection(w,function(){return Ce(u[0],v[m-1]+s)}),C=(w._ondirectionchange=function(g){k(g)},0);return w._addAlgorithm(function(g,B,_){var $=g.key;if(typeof $=="string"){var P=i($);if(t(P,v,C))return!0;for(var O=null,j=C;j<m;++j){var R=((F,U,z,D,Y,me)=>{for(var ge=Math.min(F.length,D.length),ee=-1,ie=0;ie<ge;++ie){var _e=U[ie];if(_e!==D[ie])return Y(F[ie],z[ie])<0?F.substr(0,ie)+z[ie]+z.substr(ie+1):Y(F[ie],D[ie])<0?F.substr(0,ie)+D[ie]+z.substr(ie+1):0<=ee?F.substr(0,ee)+U[ee]+z.substr(ee+1):null;Y(F[ie],_e)<0&&(ee=ie)}return ge<D.length&&me==="next"?F+z.substr(F.length):ge<F.length&&me==="prev"?F.substr(0,z.length):ee<0?null:F.substr(0,ee)+D[ee]+z.substr(ee+1)})($,P,u[j],v[j],c,S);R===null&&O===null?C=j+1:(O===null||0<c(O,R))&&(O=R)}B(O!==null?function(){g.continue(O+y)}:_)}return!1}),w}function Ce(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function Xe(e){return{type:1,lower:e,upper:e}}Object.defineProperty(le.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),le.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?ne(this):new this.Collection(this,function(){return Ce(e,t,!n,!s)})}catch{return G(this,on)}},le.prototype.equals=function(e){return e==null?G(this,on):new this.Collection(this,function(){return Xe(e)})},le.prototype.above=function(e){return e==null?G(this,on):new this.Collection(this,function(){return Ce(e,void 0,!0)})},le.prototype.aboveOrEqual=function(e){return e==null?G(this,on):new this.Collection(this,function(){return Ce(e,void 0,!1)})},le.prototype.below=function(e){return e==null?G(this,on):new this.Collection(this,function(){return Ce(void 0,e,!1,!0)})},le.prototype.belowOrEqual=function(e){return e==null?G(this,on):new this.Collection(this,function(){return Ce(void 0,e)})},le.prototype.startsWith=function(e){return typeof e!="string"?G(this,us):this.between(e,e+Sn,!0,!0)},le.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):he(this,function(t,n){return t.indexOf(n[0])===0},[e],Sn)},le.prototype.equalsIgnoreCase=function(e){return he(this,function(t,n){return t===n[0]},[e],"")},le.prototype.anyOfIgnoreCase=function(){var e=ue.apply(it,arguments);return e.length===0?ne(this):he(this,function(t,n){return n.indexOf(t)!==-1},e,"")},le.prototype.startsWithAnyOfIgnoreCase=function(){var e=ue.apply(it,arguments);return e.length===0?ne(this):he(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,Sn)},le.prototype.anyOf=function(){var e,t,n=this,s=ue.apply(it,arguments),r=this._cmp;try{s.sort(r)}catch{return G(this,on)}return s.length===0?ne(this):((e=new this.Collection(this,function(){return Ce(s[0],s[s.length-1])}))._ondirectionchange=function(i){r=i==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(i,c,u){for(var v=i.key;0<r(v,s[t]);)if(++t===s.length)return c(u),!1;return r(v,s[t])===0||(c(function(){i.continue(s[t])}),!1)}),e)},le.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},le.prototype.noneOf=function(){var e=ue.apply(it,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return G(this,on)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},le.prototype.inAnyRange=function(e,_){var n=this,s=this._cmp,r=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return ne(this);if(!e.every(function($){return $[0]!==void 0&&$[1]!==void 0&&r($[0],$[1])<=0}))return G(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var v=!_||_.includeLowers!==!1,S=_&&_.includeUppers===!0,y,m=r;function k($,P){return m($[0],P[0])}try{(y=e.reduce(function($,P){for(var O=0,j=$.length;O<j;++O){var R=$[O];if(s(P[0],R[1])<0&&0<s(P[1],R[0])){R[0]=c(R[0],P[0]),R[1]=u(R[1],P[1]);break}}return O===j&&$.push(P),$},[])).sort(k)}catch{return G(this,on)}var w=0,C=S?function($){return 0<r($,y[w][1])}:function($){return 0<=r($,y[w][1])},g=v?function($){return 0<i($,y[w][0])}:function($){return 0<=i($,y[w][0])},B=C,_=new this.Collection(this,function(){return Ce(y[0][0],y[y.length-1][1],!v,!S)});return _._ondirectionchange=function($){m=$==="next"?(B=C,r):(B=g,i),y.sort(k)},_._addAlgorithm(function($,P,O){for(var j,R=$.key;B(R);)if(++w===y.length)return P(O),!1;return!C(j=R)&&!g(j)||(n._cmp(R,y[w][1])===0||n._cmp(R,y[w][0])===0||P(function(){m===r?$.continue(y[w][0]):$.continue(y[w][1])}),!1)}),_},le.prototype.startsWithAnyOf=function(){var e=ue.apply(it,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?ne(this):this.inAnyRange(e.map(function(t){return[t,t+Sn]})):G(this,"startsWithAnyOf() only works with strings")};var fe=le;function le(){}function Ae(e){return ye(function(t){return Se(t),e(t.target.error),!1})}function Se(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var ze="storagemutated",Ot="x-storagemutated-1",N=ta(null,ze),It=(Oe.prototype._lock=function(){return Wn(!Q.global),++this._reculock,this._reculock!==1||Q.global||(Q.lockOwnerFor=this),this},Oe.prototype._unlock=function(){if(Wn(!Q.global),--this._reculock==0)for(Q.global||(Q.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{$n(e[1],e[0])}catch{}}return this},Oe.prototype._locked=function(){return this._reculock&&Q.lockOwnerFor!==this},Oe.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(Wn(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(s);case"MissingAPIError":throw new Z.MissingAPI(s.message,s);default:throw new Z.OpenFailed(s)}if(!this.active)throw new Z.TransactionInactive;Wn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ye(function(r){Se(r),t._reject(e.error)}),e.onabort=ye(function(r){Se(r),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ye(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&N.storagemutated.fire(e.mutatedParts)})}return this},Oe.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ye(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new V(function(i,c){r._blockedFuncs.push([function(){r._promise(e,t,n).then(i,c)},Q])}):n?fn(function(){var i=new V(function(c,u){r._lock();var v=t(c,u,r);v&&v.then&&v.then(c,u)});return i.finally(function(){return r._unlock()}),i._lib=!0,i}):((s=new V(function(i,c){var u=t(i,c,r);u&&u.then&&u.then(i,c)}))._lib=!0,s):Ye(new Z.TransactionInactive)},Oe.prototype._root=function(){return this.parent?this.parent._root():this},Oe.prototype.waitFor=function(e){var t,n=this._root(),s=V.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new V(function(i,c){s.then(function(u){return n._waitingQueue.push(ye(i.bind(null,u)))},function(u){return n._waitingQueue.push(ye(c.bind(null,u)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},Oe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},Oe.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(se(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},Oe);function Oe(){}function Wt(e,t,n,s,r,i,c,u){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:i,src:(n&&!c?"&":"")+(s?"*":"")+(r?"++":"")+Ft(t),type:u}}function Ft(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function ve(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,i,c){return i=s(i,c),i&&(r[i[0]]=i[1]),r},{}))};var s}var vt=function(e){try{return e.only([[]]),vt=function(){return[[]]},[[]]}catch{return vt=function(){return Sn},Sn}};function Ie(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return an(n,t)}:function(n){return an(n,e)};var t}function We(e){return[].slice.call(e)}var tt=0;function Ke(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function nt(e,t,v){function s(C){if(C.type===3)return null;if(C.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=C.lower,k=C.upper,w=C.lowerOpen,C=C.upperOpen;return m===void 0?k===void 0?null:t.upperBound(k,!!C):k===void 0?t.lowerBound(m,!!w):t.bound(m,k,!!w,!!C)}function r(y){var m,k=y.name;return{name:k,schema:y,mutate:function(w){var C=w.trans,g=w.type,B=w.keys,_=w.values,$=w.range;return new Promise(function(P,O){P=ye(P);var j=C.objectStore(k),R=j.keyPath==null,F=g==="put"||g==="add";if(!F&&g!=="delete"&&g!=="deleteRange")throw new Error("Invalid operation type: "+g);var U,z=(B||_||{length:1}).length;if(B&&_&&B.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(z===0)return P({numFailures:0,failures:{},results:[],lastResult:void 0});function D(Ne){++ge,Se(Ne)}var Y=[],me=[],ge=0;if(g==="deleteRange"){if($.type===4)return P({numFailures:ge,failures:me,results:[],lastResult:void 0});$.type===3?Y.push(U=j.clear()):Y.push(U=j.delete(s($)))}else{var R=F?R?[_,B]:[_,null]:[B,null],ee=R[0],ie=R[1];if(F)for(var _e=0;_e<z;++_e)Y.push(U=ie&&ie[_e]!==void 0?j[g](ee[_e],ie[_e]):j[g](ee[_e])),U.onerror=D;else for(_e=0;_e<z;++_e)Y.push(U=j[g](ee[_e])),U.onerror=D}function mt(Ne){Ne=Ne.target.result,Y.forEach(function(Pn,gn){return Pn.error!=null&&(me[gn]=Pn.error)}),P({numFailures:ge,failures:me,results:g==="delete"?B:Y.map(function(Pn){return Pn.result}),lastResult:Ne})}U.onerror=function(Ne){D(Ne),mt(Ne)},U.onsuccess=mt})},getMany:function(w){var C=w.trans,g=w.keys;return new Promise(function(B,_){B=ye(B);for(var $,P=C.objectStore(k),O=g.length,j=new Array(O),R=0,F=0,U=function(Y){Y=Y.target,j[Y._pos]=Y.result,++F===R&&B(j)},z=Ae(_),D=0;D<O;++D)g[D]!=null&&(($=P.get(g[D]))._pos=D,$.onsuccess=U,$.onerror=z,++R);R===0&&B(j)})},get:function(w){var C=w.trans,g=w.key;return new Promise(function(B,_){B=ye(B);var $=C.objectStore(k).get(g);$.onsuccess=function(P){return B(P.target.result)},$.onerror=Ae(_)})},query:(m=u,function(w){return new Promise(function(C,g){C=ye(C);var B,_,$,F=w.trans,P=w.values,O=w.limit,R=w.query,j=O===1/0?void 0:O,U=R.index,R=R.range,F=F.objectStore(k),F=U.isPrimaryKey?F:F.index(U.name),U=s(R);if(O===0)return C({result:[]});m?((R=P?F.getAll(U,j):F.getAllKeys(U,j)).onsuccess=function(z){return C({result:z.target.result})},R.onerror=Ae(g)):(B=0,_=!P&&"openKeyCursor"in F?F.openKeyCursor(U):F.openCursor(U),$=[],_.onsuccess=function(z){var D=_.result;return!D||($.push(P?D.value:D.primaryKey),++B===O)?C({result:$}):void D.continue()},_.onerror=Ae(g))})}),openCursor:function(w){var C=w.trans,g=w.values,B=w.query,_=w.reverse,$=w.unique;return new Promise(function(P,O){P=ye(P);var F=B.index,j=B.range,R=C.objectStore(k),R=F.isPrimaryKey?R:R.index(F.name),F=_?$?"prevunique":"prev":$?"nextunique":"next",U=!g&&"openKeyCursor"in R?R.openKeyCursor(s(j),F):R.openCursor(s(j),F);U.onerror=Ae(O),U.onsuccess=ye(function(z){var D,Y,me,ge,ee=U.result;ee?(ee.___id=++tt,ee.done=!1,D=ee.continue.bind(ee),Y=(Y=ee.continuePrimaryKey)&&Y.bind(ee),me=ee.advance.bind(ee),ge=function(){throw new Error("Cursor not stopped")},ee.trans=C,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=ye(O),ee.next=function(){var ie=this,_e=1;return this.start(function(){return _e--?ie.continue():ie.stop()}).then(function(){return ie})},ee.start=function(ie){function _e(){if(U.result)try{ie()}catch(Ne){ee.fail(Ne)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var mt=new Promise(function(Ne,Pn){Ne=ye(Ne),U.onerror=Ae(Pn),ee.fail=Pn,ee.stop=function(gn){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=ge,Ne(gn)}});return U.onsuccess=ye(function(Ne){U.onsuccess=_e,_e()}),ee.continue=D,ee.continuePrimaryKey=Y,ee.advance=me,_e(),mt},P(ee)):P(null)},O)})},count:function(w){var C=w.query,g=w.trans,B=C.index,_=C.range;return new Promise(function($,P){var O=g.objectStore(k),O=B.isPrimaryKey?O:O.index(B.name),j=s(_),j=j?O.count(j):O.count();j.onsuccess=ye(function(R){return $(R.target.result)}),j.onerror=Ae(P)})}}}i=v,c=We((v=e).objectStoreNames);var i,v={schema:{name:v.name,tables:c.map(function(y){return i.objectStore(y)}).map(function(y){var m=y.keyPath,k=y.autoIncrement,C=re(m),w={},C={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:C,keyPath:m,autoIncrement:k,unique:!0,extractKey:Ie(m)},indexes:We(y.indexNames).map(function(g){return y.index(g)}).map(function($){var P=$.name,B=$.unique,_=$.multiEntry,$=$.keyPath,P={name:P,compound:re($),keyPath:$,unique:B,multiEntry:_,extractKey:Ie($)};return w[Ke($)]=P}),getIndexByKeyPath:function(g){return w[Ke(g)]}};return w[":id"]=C.primaryKey,m!=null&&(w[Ke(m)]=C.primaryKey),C})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=v.schema,u=v.hasGetAll,v=c.tables.map(r),S={};return v.forEach(function(y){return S[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if(S[y])return S[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:vt(t),schema:c}}function Qt(e,t,n,s){return n=n.IDBKeyRange,t=nt(t,n,s),{dbcore:e.dbcore.reduce(function(r,i){return i=i.create,H(H({},r),i(r))},t)}}function Et(e,t){var n=t.db,n=Qt(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(i){return i.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function ht(e,t,n,s){n.forEach(function(r){var i=s[r];t.forEach(function(c){var u=(function v(S,y){return ut(S,y)||(S=st(S))&&v(S,y)})(c,r);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?et(c,r,{get:function(){return this.table(r)},set:function(v){Ze(this,r,{value:v,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,i))})})}function Ct(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function Bt(e,t){return e._cfg.version-t._cfg.version}function Vn(e,t,n,s){var r=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=ve("$meta",Dt("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(i.create(n),i._completion.catch(s),i._reject.bind(i)),u=Q.transless||Q;fn(function(){if(Q.trans=i,Q.transless=u,t!==0)return Et(e,n),S=t,((v=i).storeNames.includes("$meta")?v.table("$meta").get("version").then(function(y){return y??S}):V.resolve(S)).then(function(B){var m=e,k=B,w=i,C=n,g=[],B=m._versions,_=m._dbSchema=lt(0,m.idbdb,C);return(B=B.filter(function($){return $._cfg.version>=k})).length===0?V.resolve():(B.forEach(function($){g.push(function(){var P,O,j,R=_,F=$._cfg.dbschema,U=(xt(m,R,C),xt(m,F,C),_=m._dbSchema=F,ke(R,F)),z=(U.add.forEach(function(D){De(C,D[0],D[1].primKey,D[1].indexes)}),U.change.forEach(function(D){if(D.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var Y=C.objectStore(D.name);D.add.forEach(function(me){return Re(Y,me)}),D.change.forEach(function(me){Y.deleteIndex(me.name),Re(Y,me)}),D.del.forEach(function(me){return Y.deleteIndex(me)})}),$._cfg.contentUpgrade);if(z&&$._cfg.version>k)return Et(m,C),w._memoizedTables={},P=Oa(F),U.del.forEach(function(D){P[D]=R[D]}),Ct(m,[m.Transaction.prototype]),ht(m,[m.Transaction.prototype],be(P),P),w.schema=P,(O=Cn(z))&&qn(),F=V.follow(function(){var D;(j=z(w))&&O&&(D=pn.bind(null,null),j.then(D,D))}),j&&typeof j.then=="function"?V.resolve(j):F.then(function(){return j})}),g.push(function(P){var O,j,R=$._cfg.dbschema;O=R,j=P,[].slice.call(j.db.objectStoreNames).forEach(function(F){return O[F]==null&&j.db.deleteObjectStore(F)}),Ct(m,[m.Transaction.prototype]),ht(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),w.schema=m._dbSchema}),g.push(function(P){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===$._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(O){return O!=="$meta"})):P.objectStore("$meta").put($._cfg.version,"version"))})}),(function $(){return g.length?V.resolve(g.shift()(w.idbtrans)).then($):V.resolve()})().then(function(){at(_,C)}))}).catch(c);var v,S;be(r).forEach(function(y){De(n,y,r[y].primKey,r[y].indexes)}),Et(e,n),V.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function Fe(e,t){at(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=lt(0,e.idbdb,t);xt(e,e._dbSchema,t);for(var s=0,r=ke(n,e._dbSchema).change;s<r.length;s++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(v){yt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(v.src)),Re(u,v)})})(r[s]);if(typeof i=="object")return i.value}}function ke(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],i=t[n];if(r){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||r.primKey.auto!==i.primKey.auto)c.recreate=!0,s.change.push(c);else{var u=r.idxByName,v=i.idxByName,S=void 0;for(S in u)v[S]||c.del.push(S);for(S in v){var y=u[S],m=v[S];y?y.src!==m.src&&c.change.push(m):c.add.push(m)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([n,i])}return s}function De(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(i){return Re(r,i)})}function at(e,t){be(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(yt&&console.debug("Dexie: Creating missing table",n),De(t,n,e[n].primKey,e[n].indexes))})}function Re(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function lt(e,t,n){var s={};return dt(t.objectStoreNames,0).forEach(function(r){for(var i=n.objectStore(r),c=Wt(Ft(S=i.keyPath),S||"",!0,!1,!!i.autoIncrement,S&&typeof S!="string",!0),u=[],v=0;v<i.indexNames.length;++v){var y=i.index(i.indexNames[v]),S=y.keyPath,y=Wt(y.name,S,!!y.unique,!!y.multiEntry,!1,S&&typeof S!="string",!1);u.push(y)}s[r]=ve(r,c,u)}),s}function xt(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var i=s[r],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var v,S=c.indexNames[u],y=c.index(S).keyPath,y=typeof y=="string"?y:"["+dt(y).join("+")+"]";t[i]&&(v=t[i].idxByName[y])&&(v.name=S,delete t[i].idxByName[y],t[i].idxByName[S]=v)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Dt(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return Wt(r,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),re(i),n===0,s)})}kt.prototype._createTableSchema=ve,kt.prototype._parseIndexSyntax=Dt,kt.prototype._parseStoresSpec=function(e,t){var n=this;be(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),i=r.shift();if(!i)throw new Z.Schema("Invalid schema for table "+s+": "+e[s]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(s,i,r),t[s]=i}})},kt.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ce(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(i){ce(s,i._cfg.storesSource),r=i._cfg.dbschema={},i._parseStoresSpec(s,r)}),t._dbSchema=r,Ct(t,[t._allTables,t,t.Transaction.prototype]),ht(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],be(r),r),t._storeNames=be(r),this},kt.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Jn(this._cfg.contentUpgrade||$e,e),this};var Zt=kt;function kt(){}function Mt(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new tn(vn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Gt(e){return e&&typeof e.databases=="function"}function Bn(e){return fn(function(){return Q.letThrough=!0,e()})}function xe(e){return!("from"in e)}var Ge=function(e,t){var n;if(!this)return n=new Ge,e&&"d"in e&&ce(n,e),n;ce(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Nt(e,t,n){var s=de(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(xe(e))return ce(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(de(n,e.from)<0)return s?Nt(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},wt(e);if(0<de(t,e.to))return r?Nt(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},wt(e);de(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<de(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&ln(e,s),r&&t&&ln(e,r)}}function ln(e,t){xe(t)||(function n(s,r){var i=r.from,c=r.l,u=r.r;Nt(s,i,r.to),c&&n(s,c),u&&n(s,u)})(e,t)}function E(e,t){var n=q(t),s=n.next();if(!s.done)for(var r=s.value,i=q(e),c=i.next(r.from),u=c.value;!s.done&&!c.done;){if(de(u.from,r.to)<=0&&0<=de(u.to,r.from))return!0;de(r.from,u.from)<0?r=(s=n.next(u.from)).value:u=(c=i.next(r.from)).value}return!1}function q(e){var t=xe(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&de(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||de(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function wt(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=H({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=ka(n)),e.d=ka(e)}function ka(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function na(e,t){return be(t).forEach(function(n){e[n]?ln(e[n],t[n]):e[n]=(function s(r){var i,c,u={};for(i in r)se(r,i)&&(c=r[i],u[i]=!c||typeof c!="object"||ns.has(c.constructor)?c:s(c));return u})(t[n])}),e}function Ga(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&E(t[n],e[n])})}Qe(Ge.prototype,((ot={add:function(e){return ln(this,e),this},addKey:function(e){return Nt(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Nt(t,n,n)}),this},hasKey:function(e){var t=q(this).next(e).value;return t&&de(t.from,e)<=0&&0<=de(t.to,e)}})[Da]=function(){return q(this)},ot));var Mn={},Lt={},Kt=!1;function _t(e){na(Lt,e),Kt||(Kt=!0,setTimeout(function(){Kt=!1,wa(Lt,!(Lt={}))},0))}function wa(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(Mn);s<r.length;s++)Ua(u=r[s],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=Mn["idb://".concat(c,"/").concat(i)])&&Ua(u,e,n,t)}n.forEach(function(v){return v()})}function Ua(e,t,n,s){for(var r=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],v=u[0],S=[],y=0,m=u[1];y<m.length;y++){var k=m[y];Ga(t,k.obsSet)?k.subscribers.forEach(function(B){return n.add(B)}):s&&S.push(k)}s&&r.push([v,S])}if(s)for(var w=0,C=r;w<C.length;w++){var g=C[w],v=g[0],S=g[1];e.queries.query[v]=S}}function vs(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ye(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==s)throw new Z.DatabaseClosed("db.open() was cancelled")}function u(){return new V(function(k,w){if(c(),!n)throw new Z.MissingAPI;var C=e.name,g=t.autoSchema||!r?n.open(C):n.open(C,r);if(!g)throw new Z.MissingAPI;g.onerror=Ae(w),g.onblocked=ye(e._fireOnBlocked),g.onupgradeneeded=ye(function(B){var _;y=g.transaction,t.autoSchema&&!e._options.allowEmptyDB?(g.onerror=Se,y.abort(),g.result.close(),(_=n.deleteDatabase(C)).onsuccess=_.onerror=ye(function(){w(new Z.NoSuchDatabase("Database ".concat(C," doesnt exist")))})):(y.onerror=Ae(w),_=B.oldVersion>Math.pow(2,62)?0:B.oldVersion,m=_<1,e.idbdb=g.result,i&&Fe(e,y),Vn(e,_/10,y,w))},w),g.onsuccess=ye(function(){y=null;var B,_,$,P,O,j,R=e.idbdb=g.result,F=dt(R.objectStoreNames);if(0<F.length)try{var U=R.transaction((O=F).length===1?O[0]:O,"readonly");if(t.autoSchema)j=R,P=U,($=e).verno=j.version/10,P=$._dbSchema=lt(0,j,P),$._storeNames=dt(j.objectStoreNames,0),ht($,[$._allTables],be(P),P);else if(xt(e,e._dbSchema,U),_=U,((_=ke(lt(0,(B=e).idbdb,_),B._dbSchema)).add.length||_.change.some(function(z){return z.add.length||z.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),R.close(),r=R.version+1,i=!0,k(u());Et(e,U)}catch{}Rn.push(e),R.onversionchange=ye(function(z){t.vcFired=!0,e.on("versionchange").fire(z)}),R.onclose=ye(function(){e.close({disableAutoOpen:!1})}),m&&(F=e._deps,O=C,Gt(j=F.indexedDB)||O===vn||Mt(j,F.IDBKeyRange).put({name:O}).catch($e)),k()},w)}).catch(function(k){switch(k?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<r)return r=0,u()}return V.reject(k)})}var v,S=t.dbReadyResolve,y=null,m=!1;return V.race([s,(typeof navigator>"u"?V.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(k){function w(){return indexedDB.databases().finally(k)}v=setInterval(w,100),w()}).finally(function(){return clearInterval(v)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],V.resolve(Bn(function(){return e.on.ready.fire(e.vip)})).then(function k(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(Jn,$e),t.onReadyBeingFired=[],V.resolve(Bn(function(){return w(e.vip)})).then(k)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(k){t.dbOpenError=k;try{y&&y.abort()}catch{}return s===t.openCanceller&&e._close(),Ye(k)}).finally(function(){t.openComplete=!0,S()}).then(function(){var k;return m&&(k={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(C){C.name&&(k["idb://".concat(e.name,"/").concat(w.name,"/").concat(C.name)]=new Ge(-1/0,[[[]]]))}),k["idb://".concat(e.name,"/").concat(w.name,"/")]=k["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new Ge(-1/0,[[[]]])}),N(ze).fire(k),wa(k,!0)),e})}function $a(e){function t(i){return e.next(i)}var n=r(t),s=r(function(i){return e.throw(i)});function r(i){return function(u){var u=i(u),v=u.value;return u.done?v:v&&typeof v.then=="function"?v.then(n,s):re(v)?Promise.all(v).then(n,s):n(v)}}return r(t)()}function aa(e,t,n){for(var s=re(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var ms={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return H(H({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},i=[];function c(k,w,C){var $=Ke(k),g=r[$]=r[$]||[],B=k==null?0:typeof k=="string"?1:k.length,_=0<w,$=H(H({},C),{name:_?"".concat($,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:_,keyTail:w,keyLength:B,extractKey:Ie(k),unique:!_&&C.unique});return g.push($),$.isPrimaryKey||i.push($),1<B&&c(B===2?k[0]:k.slice(0,B-1),w+1,C),g.sort(function(P,O){return P.keyTail-O.keyTail}),$}var u=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[u];for(var v=0,S=s.indexes;v<S.length;v++){var y=S[v];c(y.keyPath,0,y)}function m(k){var w,C=k.query.index;return C.isVirtual?H(H({},k),{query:{index:C.lowLevelIndex,range:(w=k.query.range,C=C.keyTail,{type:w.type===1?2:w.type,lower:aa(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,C),lowerOpen:!0,upper:aa(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,C),upperOpen:!0})}}):k}return H(H({},n),{schema:H(H({},s),{primaryKey:u,indexes:i,getIndexByKeyPath:function(k){return(k=r[Ke(k)])&&k[0]}}),count:function(k){return n.count(m(k))},query:function(k){return n.query(m(k))},openCursor:function(k){var w=k.query.index,C=w.keyTail,g=w.keyLength;return w.isVirtual?n.openCursor(m(k)).then(function(_){return _&&B(_)}):n.openCursor(k);function B(_){return Object.create(_,{continue:{value:function($){$!=null?_.continue(aa($,k.reverse?e.MAX_KEY:e.MIN_KEY,C)):k.unique?_.continue(_.key.slice(0,g).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,C)):_.continue()}},continuePrimaryKey:{value:function($,P){_.continuePrimaryKey(aa($,e.MAX_KEY,C),P)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var $=_.key;return g===1?$[0]:$.slice(0,g)}},value:{get:function(){return _.value}}})}}})}})}};function Sa(e,t,n,s){return n=n||{},s=s||"",be(e).forEach(function(r){var i,c,u;se(t,r)?(i=e[r],c=t[r],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Fa(i))!==Fa(c)?n[s+r]=t[r]:u==="Object"?Sa(i,c,n,s+r+"."):i!==c&&(n[s+r]=t[r]):i!==c&&(n[s+r]=t[r])):n[s+r]=void 0}),be(t).forEach(function(r){se(e,r)||(n[s+r]=t[r])}),n}function Ha(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Ja={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return H(H({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return H(H({},n),{mutate:function(r){var i=Q.trans,c=i.table(t).hook,u=c.deleting,v=c.creating,S=c.updating;switch(r.type){case"add":if(v.fire===$e)break;return i._promise("readwrite",function(){return y(r)},!0);case"put":if(v.fire===$e&&S.fire===$e)break;return i._promise("readwrite",function(){return y(r)},!0);case"delete":if(u.fire===$e)break;return i._promise("readwrite",function(){return y(r)},!0);case"deleteRange":if(u.fire===$e)break;return i._promise("readwrite",function(){return(function m(k,w,C){return n.query({trans:k,values:!1,query:{index:s,range:w},limit:C}).then(function(g){var B=g.result;return y({type:"delete",keys:B,trans:k}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):B.length<C?{failures:[],numFailures:0,lastResult:void 0}:m(k,H(H({},w),{lower:B[B.length-1],lowerOpen:!0}),C)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function y(m){var k,w,C,g=Q.trans,B=m.keys||Ha(s,m);if(B)return(m=m.type==="add"||m.type==="put"?H(H({},m),{keys:B}):H({},m)).type!=="delete"&&(m.values=oe([],m.values)),m.keys&&(m.keys=oe([],m.keys)),k=n,C=B,((w=m).type==="add"?Promise.resolve([]):k.getMany({trans:w.trans,keys:C,cache:"immutable"})).then(function(_){var $=B.map(function(P,O){var j,R,F,U=_[O],z={onerror:null,onsuccess:null};return m.type==="delete"?u.fire.call(z,P,U,g):m.type==="add"||U===void 0?(j=v.fire.call(z,P,m.values[O],g),P==null&&j!=null&&(m.keys[O]=P=j,s.outbound||gt(m.values[O],s.keyPath,P))):(j=Sa(U,m.values[O]),(R=S.fire.call(z,j,P,U,g))&&(F=m.values[O],Object.keys(R).forEach(function(D){se(F,D)?F[D]=R[D]:gt(F,D,R[D])}))),z});return n.mutate(m).then(function(P){for(var O=P.failures,j=P.results,R=P.numFailures,P=P.lastResult,F=0;F<B.length;++F){var U=(j||B)[F],z=$[F];U==null?z.onerror&&z.onerror(O[F]):z.onsuccess&&z.onsuccess(m.type==="put"&&_[F]?m.values[F]:U)}return{failures:O,results:j,numFailures:R,lastResult:P}}).catch(function(P){return $.forEach(function(O){return O.onerror&&O.onerror(P)}),Promise.reject(P)})});throw new Error("Keys missing")}}})}})}};function Ea(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,i=0;r<t.keys.length&&i<e.length;++r)de(t.keys[r],e[i])===0&&(s.push(n?bt(t.values[r]):t.values[r]),++i);return s.length===e.length?s:null}catch{return null}}var gs={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return H(H({},n),{getMany:function(s){var r;return s.cache?(r=Ea(s.keys,s.trans._cache,s.cache==="clone"))?V.resolve(r):n.getMany(s).then(function(i){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?bt(i):i},i}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function Xa(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Ut(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ds={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Ge(e.MIN_KEY,e.MAX_KEY);return H(H({},e),{transaction:function(s,r,i){if(Q.subscr&&r!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Q.querier));return e.transaction(s,r,i)},table:function(s){function r(B){var g,B=B.query;return[g=B.index,new Ge((g=(B=B.range).lower)!=null?g:e.MIN_KEY,(g=B.upper)!=null?g:e.MAX_KEY)]}var i=e.table(s),c=i.schema,u=c.primaryKey,v=c.indexes,S=u.extractKey,y=u.outbound,m=u.autoIncrement&&v.filter(function(C){return C.compound&&C.keyPath.includes(u.keyPath)}),k=H(H({},i),{mutate:function(C){function g(Y){return Y="idb://".concat(t,"/").concat(s,"/").concat(Y),O[Y]||(O[Y]=new Ge)}var B,_,$,P=C.trans,O=C.mutatedParts||(C.mutatedParts={}),j=g(""),R=g(":dels"),F=C.type,z=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[Ha(u,C).filter(function(Y){return Y}),C.values]:[],U=z[0],z=z[1],D=C.trans._cache;return re(U)?(j.addKeys(U),(F=F==="delete"||U.length===z.length?Ea(U,D):null)||R.addKeys(U),(F||z)&&(B=g,_=F,$=z,c.indexes.forEach(function(Y){var me=B(Y.name||"");function ge(ie){return ie!=null?Y.extractKey(ie):null}function ee(ie){Y.multiEntry&&re(ie)?ie.forEach(function(_e){return me.addKey(_e)}):me.addKey(ie)}(_||$).forEach(function(ie,Ne){var mt=_&&ge(_[Ne]),Ne=$&&ge($[Ne]);de(mt,Ne)!==0&&(mt!=null&&ee(mt),Ne!=null)&&ee(Ne)})}))):U?(z={from:(D=U.lower)!=null?D:e.MIN_KEY,to:(F=U.upper)!=null?F:e.MAX_KEY},R.add(z),j.add(z)):(j.add(n),R.add(n),c.indexes.forEach(function(Y){return g(Y.name).add(n)})),i.mutate(C).then(function(Y){return!U||C.type!=="add"&&C.type!=="put"||(j.addKeys(Y.results),m&&m.forEach(function(me){for(var ge=C.values.map(function(mt){return me.extractKey(mt)}),ee=me.keyPath.findIndex(function(mt){return mt===u.keyPath}),ie=0,_e=Y.results.length;ie<_e;++ie)ge[ie][ee]=Y.results[ie];g(me.name).addKeys(ge)})),P.mutatedParts=na(P.mutatedParts||{},O),Y})}}),w={get:function(C){return[u,new Ge(C.key)]},getMany:function(C){return[u,new Ge().addKeys(C.keys)]},count:r,query:r,openCursor:r};return be(w).forEach(function(C){k[C]=function(g){var B=Q.subscr,_=!!B,$=Xa(Q,i)&&Ut(C,g)?g.obsSet={}:B;if(_){var P,B=function(z){return z="idb://".concat(t,"/").concat(s,"/").concat(z),$[z]||($[z]=new Ge)},O=B(""),j=B(":dels"),_=w[C](g),R=_[0],_=_[1];if((C==="query"&&R.isPrimaryKey&&!g.values?j:B(R.name||"")).add(_),!R.isPrimaryKey){if(C!=="count")return P=C==="query"&&y&&g.values&&i.query(H(H({},g),{values:!1})),i[C].apply(this,arguments).then(function(z){if(C==="query"){if(y&&g.values)return P.then(function(ge){return ge=ge.result,O.addKeys(ge),z});var D=g.values?z.result.map(S):z.result;(g.values?O:j).addKeys(D)}else{var Y,me;if(C==="openCursor")return me=g.values,(Y=z)&&Object.create(Y,{key:{get:function(){return j.addKey(Y.primaryKey),Y.key}},primaryKey:{get:function(){var ge=Y.primaryKey;return j.addKey(ge),ge}},value:{get:function(){return me&&O.addKey(Y.primaryKey),Y.value}}})}return z});j.add(n)}}return i[C].apply(this,arguments)}}),k}})}};function en(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=H({},t),re(s.keys)&&(s.keys=s.keys.filter(function(r,i){return!(i in n.failures)})),"values"in s&&re(s.values)&&(s.values=s.values.filter(function(r,i){return!(i in n.failures)})),s)}function Qa(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<de(n,s.lower):0<=de(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?de(n,s.upper)<0:de(n,s.upper)<=0));var n,s}function bs(e,t,n,s,r,i){var c,u,v,S,y,m;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,v=t.query.range,S=s.schema.primaryKey.extractKey,y=c.extractKey,m=(c.lowLevelIndex||c).extractKey,(s=n.reduce(function(k,w){var C=k,g=[];if(w.type==="add"||w.type==="put")for(var B=new Ge,_=w.values.length-1;0<=_;--_){var $,P=w.values[_],O=S(P);!B.hasKey(O)&&($=y(P),u&&re($)?$.some(function(z){return Qa(z,v)}):Qa($,v))&&(B.addKey(O),g.push(P))}switch(w.type){case"add":var j=new Ge().addKeys(t.values?k.map(function(D){return S(D)}):k),C=k.concat(t.values?g.filter(function(D){return D=S(D),!j.hasKey(D)&&(j.addKey(D),!0)}):g.map(function(D){return S(D)}).filter(function(D){return!j.hasKey(D)&&(j.addKey(D),!0)}));break;case"put":var R=new Ge().addKeys(w.values.map(function(D){return S(D)}));C=k.filter(function(D){return!R.hasKey(t.values?S(D):D)}).concat(t.values?g:g.map(function(D){return S(D)}));break;case"delete":var F=new Ge().addKeys(w.keys);C=k.filter(function(D){return!F.hasKey(t.values?S(D):D)});break;case"deleteRange":var U=w.range;C=k.filter(function(D){return!Qa(S(D),U)})}return C},e))===e)?e:(s.sort(function(k,w){return de(m(k),m(w))||de(S(k),S(w))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),i?Object.freeze(s):s)}function Za(e,t){return de(e.lower,t.lower)===0&&de(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function ys(e,t){return((n,s,r,i)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=de(n,s))===0){if(r&&i)return 0;if(r)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,i)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=de(n,s))===0){if(r&&i)return 0;if(r)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Cs(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,i;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&un(i,r)},3e3))})}var xs={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return H(H({},e),{transaction:function(n,s,r){var i,c,u=e.transaction(n,s,r);return s==="readwrite"&&(r=(i=new AbortController).signal,u.addEventListener("abort",(c=function(v){return function(){if(i.abort(),s==="readwrite"){for(var S=new Set,y=0,m=n;y<m.length;y++){var k=m[y],w=Mn["idb://".concat(t,"/").concat(k)];if(w){var C=e.table(k),g=w.optimisticOps.filter(function(Y){return Y.trans===u});if(u._explicit&&v&&u.mutatedParts)for(var B=0,_=Object.values(w.queries.query);B<_.length;B++)for(var $=0,P=(R=_[B]).slice();$<P.length;$++)Ga((F=P[$]).obsSet,u.mutatedParts)&&(un(R,F),F.subscribers.forEach(function(Y){return S.add(Y)}));else if(0<g.length){w.optimisticOps=w.optimisticOps.filter(function(Y){return Y.trans!==u});for(var O=0,j=Object.values(w.queries.query);O<j.length;O++)for(var R,F,U,z=0,D=(R=j[O]).slice();z<D.length;z++)(F=D[z]).res!=null&&u.mutatedParts&&(v&&!F.dirty?(U=Object.isFrozen(F.res),U=bs(F.res,F.req,g,C,F,U),F.dirty?(un(R,F),F.subscribers.forEach(function(Y){return S.add(Y)})):U!==F.res&&(F.res=U,F.promise=V.resolve({result:U}))):(F.dirty&&un(R,F),F.subscribers.forEach(function(Y){return S.add(Y)})))}}}S.forEach(function(Y){return Y()})}}})(!1),{signal:r}),u.addEventListener("error",c(!1),{signal:r}),u.addEventListener("complete",c(!0),{signal:r})),u},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return H(H({},s),{mutate:function(i){var c,u=Q.trans;return!r.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=Mn["idb://".concat(t,"/").concat(n)])?(u=s.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Ha(r,i).some(function(v){return v==null}))?(c.optimisticOps.push(i),i.mutatedParts&&_t(i.mutatedParts),u.then(function(v){0<v.numFailures&&(un(c.optimisticOps,i),(v=en(0,i,v))&&c.optimisticOps.push(v),i.mutatedParts)&&_t(i.mutatedParts)}),u.catch(function(){un(c.optimisticOps,i),i.mutatedParts&&_t(i.mutatedParts)})):u.then(function(v){var S=en(0,H(H({},i),{values:i.values.map(function(y,m){var k;return v.failures[m]?y:(gt(k=(k=r.keyPath)!=null&&k.includes(".")?bt(y):H({},y),r.keyPath,v.results[m]),k)})}),v);c.optimisticOps.push(S),queueMicrotask(function(){return i.mutatedParts&&_t(i.mutatedParts)})}),u):s.mutate(i)},query:function(i){var c,u,v,S,y,m,k;return Xa(Q,s)&&Ut("query",i)?(c=((v=Q.trans)==null?void 0:v.db._options.cache)==="immutable",u=(v=Q).requery,v=v.signal,m=((w,C,g,B)=>{var _=Mn["idb://".concat(w,"/").concat(C)];if(!_)return[];if(!(w=_.queries[g]))return[null,!1,_,null];var $=w[(B.query?B.query.index.name:null)||""];if(!$)return[null,!1,_,null];switch(g){case"query":var P=$.find(function(O){return O.req.limit===B.limit&&O.req.values===B.values&&Za(O.req.query.range,B.query.range)});return P?[P,!0,_,$]:[$.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=B.limit&&(!B.values||O.req.values)&&ys(O.req.query.range,B.query.range)}),!1,_,$];case"count":return P=$.find(function(O){return Za(O.req.query.range,B.query.range)}),[P,!!P,_,$]}})(t,n,"query",i),k=m[0],S=m[2],y=m[3],k&&m[1]?k.obsSet=i.obsSet:(m=s.query(i).then(function(w){var C=w.result;if(k&&(k.res=C),c){for(var g=0,B=C.length;g<B;++g)Object.freeze(C[g]);Object.freeze(C)}else w.result=bt(C);return w}).catch(function(w){return y&&k&&un(y,k),Promise.reject(w)}),k={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(k):(y=[k],(S=S||(Mn["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),Cs(k,y,u,v),k.promise.then(function(w){return{result:bs(w.result,i,S?.optimisticOps,s,k,c)}})):s.query(i)}})}})}};function sa(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}Ue.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Bt),n.stores({}),this._state.autoSchema=!1),n},Ue.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||Q.letThrough||this._vip)?e():new V(function(n,s){if(t._state.openComplete)return s(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new Z.DatabaseClosed);t.open().catch($e)}t._state.dbReadyPromise.then(n,s)}).then(e)},Ue.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,i=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:s??10,name:r}),i.sort(function(c,u){return c.level-u.level}),this},Ue.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},Ue.prototype.open=function(){var e=this;return $n(Ve,function(){return vs(e)})},Ue.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Rn.indexOf(this);if(0<=t&&Rn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new V(function(n){e.dbReadyResolve=n}),e.openCanceller=new V(function(n,s){e.cancelOpen=s}))},Ue.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ue.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new V(function(r,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=ye(function(){var v,S,y;v=t._deps,S=t.name,Gt(y=v.indexedDB)||S===vn||Mt(y,v.IDBKeyRange).delete(S).catch($e),r()}),u.onerror=Ae(i),u.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},Ue.prototype.backendDB=function(){return this.idbdb},Ue.prototype.isOpen=function(){return this.idbdb!==null},Ue.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ue.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ue.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ue.prototype,"tables",{get:function(){var e=this;return be(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ue.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];return s=i.pop(),[t,Ia(i),s]}).apply(this,arguments);return this._transaction.apply(this,e)},Ue.prototype._transaction=function(e,t,n){var s,r,i=this,c=Q.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(S){if(S=S instanceof i.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),e=="r"||e===ba)s=ba;else{if(e!="rw"&&e!=ya)throw new Z.InvalidArgument("Invalid transaction mode: "+e);s=ya}if(c){if(c.mode===ba&&s===ya){if(!u)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function(S){if(c&&c.storeNames.indexOf(S)===-1){if(!u)throw new Z.SubTransaction("Table "+S+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch(S){return c?c._promise(null,function(y,m){m(S)}):Ye(S)}var v=(function S(y,m,k,w,C){return V.resolve().then(function(){var $=Q.transless||Q,g=y._createTransaction(m,k,y._dbSchema,w),$=(g.explicit=!0,{trans:g,transless:$});if(w)g.idbtrans=w.idbtrans;else try{g.create(),g.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(P){return P.name===da.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return S(y,m,k,null,C)})):Ye(P)}var B,_=Cn(C),$=(_&&qn(),V.follow(function(){var P;(B=C.call(g,g))&&(_?(P=pn.bind(null,null),B.then(P,P)):typeof B.next=="function"&&typeof B.throw=="function"&&(B=$a(B)))},$));return(B&&typeof B.then=="function"?V.resolve(B).then(function(P){return g.active?P:Ye(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):$.then(function(){return B})).then(function(P){return w&&g._resolve(),g._completion.then(function(){return P})}).catch(function(P){return g._reject(P),Ye(P)})})}).bind(null,this,s,r,c,n);return c?c._promise(s,v,"lock"):Q.trans?$n(Q.transless,function(){return i._whenReady(v)}):this._whenReady(v)},Ue.prototype.table=function(e){if(se(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var tn=Ue;function Ue(e,t){var n,s,r,i,c,u=this,v=(this._middlewares={},this.verno=0,Ue.dependencies),v=(this._options=t=H({addons:Ue.addons,autoOpen:!0,indexedDB:v.indexedDB,IDBKeyRange:v.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=(S.dbReadyPromise=new V(function(m){S.dbReadyResolve=m}),S.openCanceller=new V(function(m,k){S.cancelOpen=k}),this._state=S,this.name=e,this.on=ta(this,"populate","blocked","versionchange","close",{ready:[Jn,$e]}),this.once=function(m,k){var w=function(){for(var C=[],g=0;g<arguments.length;g++)C[g]=arguments[g];u.on(m).unsubscribe(w),k.apply(u,C)};return u.on(m,w)},this.on.ready.subscribe=ca(this.on.ready.subscribe,function(m){return function(k,w){Ue.vip(function(){var C,g=u._state;g.openComplete?(g.dbOpenError||V.resolve().then(k),w&&m(k)):g.onReadyBeingFired?(g.onReadyBeingFired.push(k),w&&m(k)):(m(k),C=u,w||m(function B(){C.on.ready.unsubscribe(k),C.on.ready.unsubscribe(B)}))})}}),this.Collection=(n=this,te(I.prototype,function(B,g){this.db=n;var w=ds,C=null;if(g)try{w=g()}catch($){C=$}var g=B._ctx,B=g.table,_=B.hook.reading.fire;this._ctx={table:B,index:g.index,isPrimKey:!g.index||B.schema.primKey.keyPath&&g.index===B.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:C,or:g.or,valueMapper:_!==Hn?_:null}})),this.Table=(s=this,te(Wa.prototype,function(m,k,w){this.db=s,this._tx=w,this.name=m,this.schema=k,this.hook=s._allTables[m]?s._allTables[m].hook:ta(null,{creating:[is,$e],reading:[Ps,Hn],updating:[Os,$e],deleting:[As,$e]})})),this.Transaction=(r=this,te(It.prototype,function(m,k,w,C,g){var B=this;m!=="readonly"&&k.forEach(function(_){_=(_=w[_])==null?void 0:_.yProps,_&&(k=k.concat(_.map(function($){return $.updatesTable})))}),this.db=r,this.mode=m,this.storeNames=k,this.schema=w,this.chromeTransactionDurability=C,this.idbtrans=null,this.on=ta(this,"complete","error","abort"),this.parent=g||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new V(function(_,$){B._resolve=_,B._reject=$}),this._completion.then(function(){B.active=!1,B.on.complete.fire()},function(_){var $=B.active;return B.active=!1,B.on.error.fire(_),B.parent?B.parent._reject(_):$&&B.idbtrans&&B.idbtrans.abort(),Ye(_)})})),this.Version=(i=this,te(Zt.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,te(fe.prototype,function(m,k,w){if(this.db=c,this._ctx={table:m,index:k===":id"?null:k,or:w},this._cmp=this._ascending=de,this._descending=function(C,g){return de(g,C)},this._max=function(C,g){return 0<de(C,g)?C:g},this._min=function(C,g){return de(C,g)<0?C:g},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=vt(t.IDBKeyRange),this._createTransaction=function(m,k,w,C){return new u.Transaction(m,k,w,u._options.chromeTransactionDurability,C)},this._fireOnBlocked=function(m){u.on("blocked").fire(m),Rn.filter(function(k){return k.name===u.name&&k!==u&&!k._state.vcFired}).map(function(k){return k.on("versionchange").fire(m)})},this.use(gs),this.use(xs),this.use(Ds),this.use(ms),this.use(Ja),new Proxy(this,{get:function(m,k,w){var C;return k==="_vip"||(k==="table"?function(g){return sa(u.table(g),y)}:(C=Reflect.get(m,k,w))instanceof Wa?sa(C,y):k==="tables"?C.map(function(g){return sa(g,y)}):k==="_createTransaction"?function(){return sa(C.apply(this,arguments),y)}:C)}}));this.vip=y,v.forEach(function(m){return m(u)})}var Ba,_n=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ks=(mn.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},mn.prototype[_n]=function(){return this},mn);function mn(e){this._subscribe=e}try{Ba={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{Ba={indexedDB:null,IDBKeyRange:null}}function ws(e){var t,n=!1,s=new ks(function(r){var i=Cn(e),c,u=!1,v={},S={},y={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),m&&N.storagemutated.unsubscribe(w))}},m=(r.start&&r.start(y),!1),k=function(){return Va(C)},w=function(g){na(v,g),Ga(S,v)&&k()},C=function(){var g,B,_;!u&&Ba.indexedDB&&(v={},g={},c&&c.abort(),c=new AbortController,_=($=>{var P=wn();try{i&&qn();var O=fn(e,$);return O=i?O.finally(pn):O}finally{P&&hn()}})(B={subscr:g,signal:c.signal,requery:k,querier:e,trans:null}),Promise.resolve(_).then(function($){n=!0,t=$,u||B.signal.aborted||(v={},(P=>{for(var O in P)if(se(P,O))return;return 1})(S=g)||m||(N(ze,w),m=!0),Va(function(){return!u&&r.next&&r.next($)}))},function($){n=!1,["DatabaseClosedError","AbortError"].includes($?.name)||u||Va(function(){u||r.error&&r.error($)})}))};return setTimeout(k,0),y});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var Tn=tn;function es(e){var t=qt;try{qt=!0,N.storagemutated.fire(e),wa(e,!0)}finally{qt=t}}Qe(Tn,H(H({},Vt),{delete:function(e){return new Tn(e,{addons:[]}).delete()},exists:function(e){return new Tn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Tn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(Gt(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==vn})}):Mt(n,t).toCollection().primaryKeys()).then(e)}catch{return Ye(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){ce(this,e)}},ignoreTransaction:function(e){return Q.trans?$n(Q.transless,e):e()},vip:Bn,async:function(e){return function(){try{var t=$a(e.apply(this,arguments));return t&&typeof t.then=="function"?t:V.resolve(t)}catch(n){return Ye(n)}}},spawn:function(e,t,n){try{var s=$a(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:V.resolve(s)}catch(r){return Ye(r)}},currentTransaction:{get:function(){return Q.trans||null}},waitFor:function(e,t){return e=V.resolve(typeof e=="function"?Tn.ignoreTransaction(e):e).timeout(t||6e4),Q.trans?Q.trans.waitFor(e):e},Promise:V,debug:{get:function(){return yt},set:function(e){La(e)}},derive:ct,extend:ce,props:Qe,override:ca,Events:ta,on:N,liveQuery:ws,extendObservabilitySet:na,getByKeyPath:an,setByKeyPath:gt,delByKeyPath:function(e,t){typeof t=="string"?gt(e,t,void 0):"length"in t&&[].map.call(t,function(n){gt(e,n,void 0)})},shallowClone:Oa,deepClone:bt,getObjectDiff:Sa,cmp:de,asap:ua,minKey:-1/0,addons:[],connections:Rn,errnames:da,dependencies:Ba,cache:Mn,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),Tn.maxKey=vt(Tn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(N(ze,function(e){qt||(e=new CustomEvent(Ot,{detail:e}),qt=!0,dispatchEvent(e),qt=!1)}),addEventListener(Ot,function(e){e=e.detail,qt||es(e)}));var Yn,qt=!1,$s=function(){};return typeof BroadcastChannel<"u"&&(($s=function(){(Yn=new BroadcastChannel(Ot)).onmessage=function(e){return e.data&&es(e.data)}})(),typeof Yn.unref=="function"&&Yn.unref(),N(ze,function(e){qt||Yn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!tn.disableBfCache&&e.persisted){yt&&console.debug("Dexie: handling persisted pagehide"),Yn?.close();for(var t=0,n=Rn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!tn.disableBfCache&&e.persisted&&(yt&&console.debug("Dexie: handling persisted pageshow"),$s(),es({all:new Ge(-1/0,[[]])}))})),V.rejectionMapper=function(e,t){return!e||e instanceof xn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!rs[e.name]?e:(t=new rs[e.name](t||e.message,e),"stack"in e&&et(t,"stack",{get:function(){return this.inner.stack}}),t)},La(yt),H(tn,Object.freeze({__proto__:null,Dexie:tn,Entity:hs,PropModification:ea,RangeSet:Ge,add:function(e){return new ea({add:e})},cmp:de,default:tn,liveQuery:ws,mergeRanges:ln,rangesOverlap:E,remove:function(e){return new ea({remove:e})},replacePrefix:function(e,t){return new ea({replacePrefix:[e,t]})}}),{default:tn}),tn})})(Es)),Es.exports}var mi=vi();const Rs=fi(mi),_r=Symbol.for("Dexie"),Bs=globalThis[_r]||(globalThis[_r]=Rs);if(Rs.semVer!==Bs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Rs.semVer} and ${Bs.semVer}`);const{liveQuery:Pi,mergeRanges:Ai,rangesOverlap:Oi,RangeSet:Ii,cmp:Fi,Entity:Di,PropModification:Ni,replacePrefix:Li,add:Ki,remove:qi,DexieYProvider:Ri}=Bs,Te=new Bs("haushaltsbuch-db");Te.version(1).stores({years:"year",fixedTemplateState:"id"});Te.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Te.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});Te.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const In="singleton";function Aa(){return new Date().toISOString()}async function la(){return Te.years.orderBy("year").toArray()}async function gi(M){return Te.years.get(M)}async function oa(M){await Te.years.put(M)}async function js(){const M=await Te.fixedTemplateState.get(In);if(!M){const h={id:In,templates:[],version:Aa(),updatedAt:new Date().toISOString()};return await Te.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Vs(M){const h=Aa();return await Te.fixedTemplateState.put({id:In,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Ys(){const M=await Te.annualVariableFixedTemplateState.get(In);if(!M){const h={id:In,templates:[],version:Aa(),updatedAt:new Date().toISOString()};return await Te.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function zs(M){const h=Aa();return await Te.annualVariableFixedTemplateState.put({id:In,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function bi(M){await Te.auditLog.put(M)}async function Ws(){const M=await Te.searchEvaluationState.get(In);if(!M){const h={id:In,results:[],version:Aa(),updatedAt:new Date().toISOString()};return await Te.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:M.results,version:M.version}}async function Gs(M){const h=Aa();return await Te.searchEvaluationState.put({id:In,results:M,version:h,updatedAt:new Date().toISOString()}),h}async function Us(){return Te.auditLog.orderBy("timestampIso").toArray()}async function yi(M){await Te.auditLog.clear(),M.length!==0&&await Te.auditLog.bulkPut(M)}async function Ci(){const M=await la(),[h,Pe,H,oe]=await Promise.all([js(),Ys(),Us(),Ws()]);return{exportedAt:new Date().toISOString(),years:M,fixedTemplates:h.templates,annualVariableFixedTemplates:Pe.templates,auditLogEntries:H,savedSearchEvaluations:oe.results}}async function xi(M){await Te.transaction("rw",[Te.years,Te.fixedTemplateState,Te.annualVariableFixedTemplateState,Te.auditLog,Te.searchEvaluationState],async()=>{await Te.years.clear(),await Te.years.bulkPut(M.years),await Vs(M.fixedTemplates),await zs(M.annualVariableFixedTemplates??[]),await yi(M.auditLogEntries??[]),await Gs(M.savedSearchEvaluations??[])})}function qe(M){const h=M.replace(",",".").trim();if(!h)return 0;const Pe=Number.parseFloat(h);return Number.isNaN(Pe)?0:Math.round(Pe*100)}const ki=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function p(M){return ki.format(M/100)}function $t(M){return(M/100).toFixed(2)}function Be(M){return new Date(2026,M-1,1).toLocaleDateString("de-DE",{month:"long"})}const Or=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Tr(M){return Or.includes(M)}function wi(M){switch(M){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Pr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function $i(M){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Pe="habu-theme",H="habu-backup-dirty",oe="habu-unexported-change-log",ae="habu-last-backup-filename",be="habu-recurring-budget-defaults";let re=null,ce=null,st=null,Le=null,se=!1,Qe=!1;const Ze=new WeakMap;function et(){const o=M.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),x=l.getPropertyValue("--table-stripe").trim(),T=l.getPropertyValue("--table-border").trim(),I=l.getPropertyValue("--budget-under").trim(),A=l.getPropertyValue("--danger-2").trim(),L=96,J=250,W=G=>1-Math.pow(1-Math.max(0,Math.min(1,G)),3);o.forEach(G=>{G.dataset.hoverBound!=="1"&&(G.dataset.hoverBound="1",G.addEventListener("mouseenter",()=>{G.dataset.hovering="1",et()}),G.addEventListener("mouseleave",()=>{delete G.dataset.hovering,delete G.dataset.hoverX,et()}),G.addEventListener("mousemove",Fe=>{const ke=G.getBoundingClientRect(),De=Math.round(Fe.clientX-ke.left);G.dataset.hoverX=String(De),et()}));const ne=Number.parseInt(G.dataset.budgetCents??"0",10),he=Number.parseInt(G.dataset.actualCents??"0",10),Ce=G.dataset.label??"Kategorie",Xe=G.dataset.hovering==="1",fe=`${Ce}|${ne}|${he}`,le=G.dataset.lastRenderSignature!==fe;G.dataset.lastRenderSignature=fe;const Ae=Math.max(120,Math.floor(G.clientWidth||120)),Se=window.devicePixelRatio||1,ze=Math.floor(Ae*Se),Ot=Math.floor(L*Se);(G.width!==ze||G.height!==Ot)&&(G.width=ze,G.height=Ot);const N=G.getContext("2d");if(!N)return;const It=Math.max(1,ne,he),Oe=Math.min(1,Math.max(0,ne/It)),Wt=Math.min(1,Math.max(0,he/It)),Ft=ne-he,ve=ne>0?he/ne*100:he>0?100:0,vt=8,Ie=vt,We=34,tt=Ae-vt*2,Ke=22,nt=Number.parseInt(G.dataset.hoverX??"-1",10),Qt=(Fe,ke,De,at,Re)=>{N.beginPath(),N.moveTo(Fe+Re,ke),N.lineTo(Fe+De-Re,ke),N.quadraticCurveTo(Fe+De,ke,Fe+De,ke+Re),N.lineTo(Fe+De,ke+at-Re),N.quadraticCurveTo(Fe+De,ke+at,Fe+De-Re,ke+at),N.lineTo(Fe+Re,ke+at),N.quadraticCurveTo(Fe,ke+at,Fe,ke+at-Re),N.lineTo(Fe,ke+Re),N.quadraticCurveTo(Fe,ke,Fe+Re,ke),N.closePath()},Et=Fe=>{N.setTransform(1,0,0,1,0,0),N.clearRect(0,0,G.width,G.height),N.scale(Se,Se),Qt(Ie,We,tt,Ke,8),N.fillStyle=x,N.fill(),N.strokeStyle=T,N.lineWidth=1,N.stroke();const ke=[.6,.25,.15],De=[.1,.16,.24];let at=0;ke.forEach((Zt,kt)=>{const Mt=tt*Zt;N.save(),N.globalAlpha=De[kt]??.1,N.fillStyle=d,N.fillRect(Ie+at,We,Mt,Ke),N.restore(),at+=Mt});const Re=ne>0&&he>ne?A:I,lt=tt*Wt*Fe;Qt(Ie,We+3,lt,Ke-6,6),N.fillStyle=Re,N.fill(),Xe&&(N.save(),N.strokeStyle=Re,N.lineWidth=1.5,N.globalAlpha=.8,Qt(Ie-1,We+2,Math.max(2,lt+2),Ke-4,7),N.stroke(),N.restore());const xt=Ie+tt*Oe;N.strokeStyle=f,N.lineWidth=Xe?3:2,N.beginPath(),N.moveTo(xt,We-3),N.lineTo(xt,We+Ke+3),N.stroke(),Xe&&nt>=Ie&&nt<=Ie+tt&&(N.save(),N.strokeStyle=f,N.globalAlpha=.35,N.lineWidth=1,N.beginPath(),N.moveTo(nt,We-8),N.lineTo(nt,We+Ke+8),N.stroke(),N.restore()),N.fillStyle=f,N.font="600 12px system-ui, -apple-system, sans-serif",N.textAlign="left",N.textBaseline="top",N.fillText(Ce,Ie,10);const Dt=ve*Fe;if(N.fillStyle=ve>100?A:ve<100?I:d,N.textAlign="right",N.fillText(`${Dt.toFixed(0)}%`,Ie+tt,10),N.fillStyle=d,N.font="500 11px system-ui, -apple-system, sans-serif",N.textAlign="left",N.textBaseline="top",N.fillText(`Ist ${p(he)} · Ziel ${p(ne)} · Δ ${Ft>=0?"+":""}${p(Ft)}`,Ie,64),Xe){const Zt=`Nutzung ${ve.toFixed(1)}%`;N.font="600 11px system-ui, -apple-system, sans-serif";const kt=8,Mt=5,Gt=22,xe=N.measureText(Zt).width+kt*2,Ge=Number.isFinite(nt)?nt-xe/2:Ie+tt-xe,Nt=Math.min(Ie+tt-xe,Math.max(Ie,Ge)),ln=We-Gt-8;N.save(),N.fillStyle=f,N.globalAlpha=.92,Qt(Nt,ln,xe,Gt,6),N.fill(),N.restore(),N.fillStyle=x,N.textAlign="left",N.textBaseline="top",N.fillText(Zt,Nt+kt,ln+Mt)}},ht=Ze.get(G);if(ht&&window.cancelAnimationFrame(ht),!le){Et(1);return}const Ct=performance.now(),Bt=Fe=>{const ke=Fe-Ct,De=Math.min(1,ke/J);if(Et(W(De)),De<1){const at=window.requestAnimationFrame(Bt);Ze.set(G,at);return}Ze.delete(G)},Vn=window.requestAnimationFrame(Bt);Ze.set(G,Vn)})}function ct(){M.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),x=l.querySelector("[data-year-trend-active-net]"),T=l.querySelector("[data-year-trend-active-income]"),I=l.querySelector("[data-year-trend-active-expense]"),A=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!x||!T||!I||!A)return;const J=(ne,he)=>{ne.classList.remove("danger","budget-under");const Ce=he<0?"danger":he>0?"budget-under":"";Ce&&ne.classList.add(Ce)},W=ne=>{const he=ne.dataset.monthLabel??"-",Ce=Number.parseInt(ne.dataset.netCents??"0",10),Xe=Number.parseInt(ne.dataset.actualNetCents??"0",10),fe=Number.parseInt(ne.dataset.incomeCents??"0",10),le=Number.parseInt(ne.dataset.expenseCents??"0",10),Ae=Number.parseInt(ne.dataset.deltaCents??"0",10);d.textContent=he,x.textContent=p(Ce),T.textContent=p(fe),I.textContent=p(le),A.textContent=`${Ae>=0?"+":""}${p(Ae)}`,J(x,Ce),J(A,Ae),f.forEach(Se=>{const ze=Se===ne;Se.classList.toggle("is-active",ze),Se.setAttribute("aria-pressed",String(ze))}),L&&(L.textContent=`${he}: Kalkulierter Saldo ${p(Ce)}, Ist-Saldo ${p(Xe)}, Einkommen ${p(fe)}, Ausgaben ${p(le)}`)};f.forEach(ne=>{const he=()=>{W(ne)};ne.addEventListener("mouseenter",he),ne.addEventListener("focus",he),ne.addEventListener("click",he)});const G=f.find(ne=>ne.dataset.pointDefault==="1")??f[f.length-1];G&&W(G)})}function ut(o){if(o==="dashboard"){const l=h.years.slice().sort((d,x)=>x.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,te()}function jt(){h.topModal&&(h.topModal=null,te())}function dt(){h.showUnexportedChangeLogModal=!0,te()}function ca(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,te())}function Wn(){h.showPersistentAuditLogModal=!0,te()}function ua(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,te())}function an(){se||(se=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),ca();return}if(h.showPersistentAuditLogModal){o.preventDefault(),ua();return}h.topModal&&(o.preventDefault(),jt())}}))}function gt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Oa(){const o=M.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",gt())}function Ms(){if(Qe)return;Qe=!0;const o=()=>{Oa(),et()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Ia(){if(re&&document.body.contains(re))return re;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return re=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),re=l,l}function ns(){if(ce&&document.body.contains(ce))return ce;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return ce=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),ce=l,l}function Gn(){if(Le&&document.body.contains(Le))return Le;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return Le=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),Le=l,l}function bt(){if(!ce){st=null;return}ce.innerHTML="",st=null}function Un(){Le&&(Le.innerHTML="")}function Fa(o,l,f){const d=new Date,x=d.getFullYear(),T=d.getMonth()+1,I=d.getDate(),A=new Date(o,l,0).getDate();if(o<x||o===x&&l<T)return{occurrences:0,remainingDays:0};const L=o===x&&l===T?Math.min(I,A):1,J=Math.max(0,A-L+1);let W=0;for(let G=L;G<=A;G+=1)new Date(o,l-1,G).getDay()===f&&(W+=1);return{occurrences:W,remainingDays:J}}async function Da(o,l){const f=je();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await Je(`Wocheneinkauf geplant: ${Pr.find(d=>d.value===o)?.label??"Wochentag"} mit ${p(f.weeklyShoppingEstimateCents)} €`),te())}function _s(){const o=je(),l=sn();if(!o||!l)return;const f=Gn();Un();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,x=o.weeklyShoppingEstimateCents??0,T=l.year,I=o.month,A=Xn(T,I),L=A?ot(A):{foodCents:0},J=A?A.foodBudgetCents??0:0,W=L.foodCents,G=J-W;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Pr.map(ve=>`<option value="${ve.value}" ${ve.value===d?"selected":""}>${ve.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${$t(x)}" />
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
    `;const ne=f.querySelector(".weekly-shopping-modal-backdrop"),he=f.querySelector("#weekly-shopping-weekday"),Ce=f.querySelector("#weekly-shopping-estimate"),Xe=f.querySelector("#weekly-shopping-occurrences"),fe=f.querySelector("#weekly-shopping-total"),le=f.querySelector("#weekly-shopping-rest-before"),Ae=f.querySelector("#weekly-shopping-rest-after"),Se=f.querySelector("#weekly-shopping-days-left"),ze=f.querySelector("#weekly-shopping-per-day"),Ot=f.querySelector("#weekly-shopping-cancel"),N=f.querySelector("#weekly-shopping-save");function It(){const ve=Number.parseInt(he?.value??"1",10);return Number.isInteger(ve)&&ve>=0&&ve<=6?ve:1}function Oe(){return Math.max(0,qe(Ce?.value??"0"))}function Wt(){const ve=It(),vt=Oe(),{occurrences:Ie,remainingDays:We}=Fa(T,I,ve),tt=Ie*vt,Ke=G-tt,nt=We>0?Math.trunc(Ke/We):0;Xe&&(Xe.textContent=`${Ie}`),fe&&(fe.textContent=`${p(tt)} €`),le&&(le.textContent=`${p(G)} €`),Ae&&(Ae.textContent=`${p(Ke)} €`,Ae.className=Ke<0?"danger":Ke>0?"budget-under":""),Se&&(Se.textContent=`${We}`),ze&&(ze.textContent=`${p(nt)} €`,ze.className=nt<0?"danger":nt>0?"budget-under":"")}async function Ft(){await Da(It(),Oe()),Un()}Ot?.addEventListener("click",()=>{Un()}),N?.addEventListener("click",async()=>{await Ft()}),he?.addEventListener("change",()=>{Wt()}),Ce?.addEventListener("input",()=>{Wt()}),Ce?.addEventListener("keydown",async ve=>{if(ve.key==="Escape"){ve.preventDefault(),Un();return}ve.key==="Enter"&&(ve.preventDefault(),await Ft())}),ne?.addEventListener("click",ve=>{ve.target===ne&&Un()}),window.setTimeout(()=>{Ce?.focus(),Ce?.select(),Wt()},0)}function un(o,l){let f=o;const d=l.min;if(d){const T=Number.parseFloat(d);if(!Number.isNaN(T)){const I=Math.round(T*100);f=Math.max(f,I)}}const x=l.max;if(x){const T=Number.parseFloat(x);if(!Number.isNaN(T)){const I=Math.round(T*100);f=Math.min(f,I)}}return f}function it(o){if(o.disabled)return;const l=ns();bt(),st=o;const f=qe(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${p(f)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${p(f)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${p(f)} €</strong></div>
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
    `;const x=l.querySelector(".amount-modal-backdrop"),T=l.querySelector("#amount-modal-delta"),I=l.querySelector("#amount-modal-next-delta"),A=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),J=l.querySelector("#amount-modal-overwrite"),W=l.querySelector("#amount-modal-apply");function G(){const fe=qe(T?.value??"0");return un(f+fe,o)}function ne(){const fe=qe(T?.value??"0");return un(fe,o)}function he(){I&&(I.textContent=`${p(G())} €`),A&&(A.textContent=`${p(ne())} €`)}function Ce(){const fe=st;if(!fe){bt();return}const le=G();bt(),fe.value=$t(le),fe.dispatchEvent(new Event("change",{bubbles:!0}))}function Xe(){const fe=st;if(!fe){bt();return}const le=ne();bt(),fe.value=$t(le),fe.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{bt()}),J?.addEventListener("click",()=>{Xe()}),W?.addEventListener("click",()=>{Ce()}),T?.addEventListener("input",()=>{he()}),T?.addEventListener("keydown",fe=>{if(fe.key==="Escape"){fe.preventDefault(),bt();return}fe.key==="Enter"&&(fe.preventDefault(),Ce())}),x?.addEventListener("click",fe=>{fe.target===x&&bt()}),window.setTimeout(()=>{T?.focus(),T?.select(),he()},0)}function ue(o,l="success"){const f=Ia(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const x=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},x)}function Cn(){return new Date().getMonth()+1}function Vt(){return new Date().getFullYear()}function as(o){const l=Vt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function xn(){return new Date().toISOString().slice(0,10)}function ss(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function pt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Fn(){const o=localStorage.getItem(Pe);return o&&Tr(o)?o:"light"}function da(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Pe,o)}function Ts(){return localStorage.getItem(H)==="1"}function Z(o){localStorage.setItem(H,o?"1":"0")}function rs(){const o=localStorage.getItem(oe);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function $e(o){localStorage.setItem(oe,JSON.stringify(o.slice(-200)))}function Hn(){const o=localStorage.getItem(ae);if(!o)return null;const l=o.trim();return l||null}function Ps(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(be);if(!l)return o;try{const f=JSON.parse(l),d=x=>typeof x=="number"&&Number.isFinite(x)?x:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function kn(o){localStorage.setItem(be,JSON.stringify(o))}function is(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function As(o){const l=o.trim();l&&localStorage.setItem(ae,l)}async function Os(){Ia(),da(Fn()),h.hasUnexportedChanges=Ts(),h.unexportedChangeLog=rs(),h.persistentAuditLog=await Us(),h.lastBackupFileName=Hn(),h.recurringBudgetDefaults=Ps(),an(),Ms();const[o,l,f,d]=await Promise.all([la(),js(),Ys(),Ws()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Na(h.years),fa(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,h.savedSearchEvaluations=d.results,await La(h.years),o.length>0&&(h.selectedYear=as(o),h.selectedMonth=Cn()),te()}function Na(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const x=Number(d.weeklyShoppingWeekday);Number.isInteger(x)&&x>=0&&x<=6?d.weeklyShoppingWeekday=x:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(x=>{const T=l(x.incomeSource);if(!T){const{incomeSource:I,...A}=x;return A}return{...x,incomeSource:T}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((x,T)=>x+T.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((x,T)=>x+T.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Jn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function yt(o){return o==="fresh"||o==="salary"||!o}async function La(o){for(const l of o)await oa(l)}function sn(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function je(){const o=sn();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function Xn(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function ot(o){const l=o.days.reduce((A,L)=>A+L.foodCents,0),f=o.days.reduce((A,L)=>A+L.goingOutCents,0),d=o.fixedCosts.reduce((A,L)=>A+L.actualCents,0),x=o.variableCosts.reduce((A,L)=>A+L.amountCents,0)+o.variablePositions.reduce((A,L)=>A+L.actualCents,0),T=o.miscCosts.reduce((A,L)=>A+L.amountCents,0),I=l+f+d+x+T;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:x,miscCents:T,totalCents:I}}function Jt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((I,A)=>I+A.plannedCents,0),x=o.variablePositions.reduce((I,A)=>I+A.budgetCents,0),T=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??x)+T}function Dn(o){return o.months.reduce((l,f)=>{const d=ot(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Qn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:ot(l)}))}function Zn(o){const l=o.months.reduce((I,A)=>I+(A.foodBudgetCents??0),0),f=o.months.reduce((I,A)=>I+(A.goingOutBudgetCents??0),0),d=o.months.reduce((I,A)=>I+(A.fixedBudgetCents??A.fixedCosts.reduce((L,J)=>L+J.plannedCents,0)),0),x=o.months.reduce((I,A)=>I+(A.variableBudgetCents??A.variablePositions.reduce((L,J)=>L+J.budgetCents,0)),0),T=o.months.reduce((I,A)=>I+(A.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:x,miscCents:T,totalCents:l+f+d+x+T}}function Nn(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,x)=>d+(yt(x.incomeSource)?x.amountCents:0),0),0)}function dn(o){return o.months.reduce((l,f)=>(f.incomes.forEach(d=>{if(d.incomeSource==="salary"){l.salaryIncomeCents+=d.amountCents;return}(d.incomeSource==="fresh"||d.incomeSource==null)&&(l.freshIncomeCents+=d.amountCents)}),l),{salaryIncomeCents:0,freshIncomeCents:0})}function Ln(o,l){const f=o.months.slice().sort((d,x)=>d.month-x.month)[0];return f?l.get(pe(o.year,f.month))?.carriedFromPreviousCents??0:0}function Ka(){const o=h.years.slice().sort((d,x)=>d.year-x.year).flatMap(d=>d.months.slice().sort((x,T)=>x.month-T.month).map(x=>({year:d.year,month:x}))),l=new Map;let f=0;return o.forEach(({year:d,month:x},T)=>{const I=x.carryoverOverrideCents,A=typeof I=="number",L=A?I:f,J=T>0||A,W=x.incomes.reduce((Ce,Xe)=>Ce+(yt(Xe.incomeSource)?Xe.amountCents:0),0),G=Jt(x),ne=W+L,he=ne-G;l.set(pe(d,x.month),{hasPreviousMonth:J,carriedFromPreviousCents:L,recordedIncomeCents:W,effectiveIncomeCents:ne,plannedBudgetCents:G,netCents:he}),f=he}),l}function Ve(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function Q(o){return`${o>0?"+":""}${p(o)}`}function Xt(o,l){const f=o-l,d=Ve(l,o);return`${p(o)} <span class="eval-diff ${d}">(Δ ${Q(f)})</span>`}function Yt(o,l){const f=o!==null,d=f?o-l:null,x=f?Ve(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${p(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${p(l)} €</strong>
      </div>
      <div class="column-overview-row ${x}">
        <span>Diff</span>
        <strong>${d===null?"-":`${p(d)} €`}</strong>
      </div>
    </div>`}async function ha(o){if(await gi(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=Sr(o,h.fixedTemplates,h.fixedTemplateVersion);is(f),hn(f),await oa(f),h.years=await la(),V(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=Cn(),ue(`Jahr ${o} wurde angelegt.`),te()}function V(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,Z(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,x={id:St("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,x].slice(-200),$e(h.unexportedChangeLog);const T={id:St("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,T].slice().sort((I,A)=>I.timestampIso.localeCompare(A.timestampIso)),bi(T).catch(I=>{console.error("Audit-Log konnte nicht gespeichert werden",I),ue("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function qa(o){const l=o.trim();l&&(h.lastBackupFileName=l,As(l))}function Ra(o){h.hasUnexportedChanges=!1,Z(!1),h.unexportedChangeLog=[],$e([]),h.showUnexportedChangeLogModal=!1,qa(o)}async function Je(o){const l=sn();l&&(await oa(l),h.years=await la(),V(o))}async function At(o){for(const l of h.years)await oa(l);h.years=await la(),V(o)}function pe(o,l){return o*100+l}function Kn(o,l,f){const d=`${o} auf ${p(f)} € gesetzt`;return f>l?`${d} (erhöht um ${p(f-l)} €)`:f<l?`${d} (verringert um ${p(l-f)} €)`:d}function ja(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function wn(o,l){const f=ja(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(T=>T.month===f.month);!d||d.variablePositions.some(T=>T.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:St("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],ye(d))}function hn(o){h.annualVariableFixedTemplates.forEach(l=>{wn(l,o)})}function fa(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const x=d.variablePositions.some(I=>typeof I.autoAnnualTemplateId=="string"),T=d.fixedCosts.some(I=>typeof I.autoAnnualTemplateId=="string");x&&(d.variablePositions=d.variablePositions.filter(I=>I.autoAnnualTemplateId?l.has(I.autoAnnualTemplateId):!0),ye(d)),T&&(d.fixedCosts=d.fixedCosts.filter(I=>!I.autoAnnualTemplateId),zt(d))}),hn(f)})}function zt(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function ye(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function rt(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function os(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",rt());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function pa(o,l){const f=pe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(x=>{if(pe(d.year,x.month)<f)return;x.fixedCosts.some(I=>I.templateId===o.id)||(x.fixedCosts.push({id:St("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),zt(x))})})}function va(o,l,f){const d=pe(f.year,f.month);h.years.forEach(x=>{x.months.forEach(T=>{pe(x.year,T.month)<d||(T.fixedCosts=T.fixedCosts.map(I=>I.templateId!==l.id?I:{...I,name:l.name,plannedCents:l.plannedCents,actualCents:I.actualCents===o.plannedCents?l.plannedCents:I.actualCents}),zt(T))})})}function ma(o,l){const f=pe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(x=>{pe(d.year,x.month)<f||(x.fixedCosts=x.fixedCosts.filter(T=>T.templateId!==o),zt(x))})})}async function Is(o,l){const f=o.trim();if(!f)return;const d=os();if(!d)return;const x=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const T=h.fixedTemplates.find(A=>A.id===h.editingFixedTemplateId);if(!T)return;const I={...T,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(A=>A.id===h.editingFixedTemplateId?I:A),va(T,I,d)}else{const T={id:St("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,T],pa(T,d)}h.fixedTemplateVersion=await Vs(h.fixedTemplates),h.editingFixedTemplateId=null,await At(x?`Fixkosten-Vorlage aktualisiert: ${f} (${p(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${p(l)} €)`),ue(x?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),te()}function fn(o){h.editingFixedTemplateId=o,te()}function qn(){h.editingFixedTemplateId=null,te()}async function pn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=os();if(!f)return;const d=h.fixedTemplates.find(x=>x.id===o);h.fixedTemplates=h.fixedTemplates.filter(x=>x.id!==o),ma(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Vs(h.fixedTemplates),await At(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),ue("Fixkosten-Vorlage wurde gelöscht."),te()}async function ga(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const x=ja(l);if(!x){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const T={id:St("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,T],h.years.forEach(I=>{wn(T,I)}),h.annualVariableFixedTemplateVersion=await zs(h.annualVariableFixedTemplates),await At(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${p(f)} €, jährlich in ${Be(x.month)})`),ue("Variable Fixkosten-Vorlage wurde hinzugefügt."),te()}async function Fs(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(x=>{x.variablePositions=x.variablePositions.filter(T=>T.autoAnnualTemplateId!==o),ye(x),x.fixedCosts=x.fixedCosts.filter(T=>T.autoAnnualTemplateId!==o),zt(x)})}),h.annualVariableFixedTemplateVersion=await zs(h.annualVariableFixedTemplates),await At(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),ue("Variable Fixkosten-Vorlage wurde gelöscht."),te())}async function rn(o,l,f){const d=je();if(!d)return;const T=d.days.find(I=>I.isoDate===o)?.[l]??0;d.days=d.days.map(I=>I.isoDate===o?{...I,[l]:f}:I),await Je(Kn(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,T,f)),te()}async function ls(o,l){const f=je();if(!f)return;const d=f.fixedCosts.find(x=>x.id===o);f.fixedCosts=f.fixedCosts.map(x=>x.id===o?{...x,actualCents:l}:x),await Je(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${p(l)} €`),te()}async function $n(o,l){const f=je();if(!f)return;const d=f.fixedCosts.find(T=>T.id===o);if(!d)return;const x=d.plannedCents;f.fixedCosts=f.fixedCosts.map(T=>T.id===o?{...T,plannedCents:l}:T),zt(f),await Je(Kn(`Fixkosten-Budget angepasst: ${d.name}`,x,l)),te()}async function cs(o,l){const f=je();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const x={id:St("fixed"),templateId:St("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[x,...f.fixedCosts],zt(f),await Je(`Fixkosten-Position hinzugefügt: ${d} (${p(l)} €)`),ue("Fixkosten-Position wurde hinzugefügt."),te()}async function Va(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=je();if(!f)return;const d=f.fixedCosts.find(x=>x.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(x=>x.id!==o),zt(f),await Je(`Fixkosten-Position gelöscht: ${d.name}`),ue("Fixkosten-Position wurde gelöscht."),te())}async function Ye(o){await vn("fixedBudgetCents",o,"Fixkosten")}async function Sn(o){await vn("foodBudgetCents",o,"Essen")}async function on(o){await vn("goingOutBudgetCents",o,"Ausgehen")}async function us(o){await vn("miscBudgetCents",o,"Sonstiges")}async function Rn(o){await vn("variableBudgetCents",o,"Variable Kosten")}async function vn(o,l,f){const d=je(),x=h.selectedYear;if(!d||!x||d[o]===l)return;const T=d[o];if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const A=pe(x,h.selectedMonth);h.years.forEach(J=>{J.months.forEach(W=>{pe(J.year,W.month)<=A||(W[o]=l)})}),h.recurringBudgetDefaults[o]=l,kn(h.recurringBudgetDefaults);const L=Kn(`Budget "${f}"`,T??0,l);await At(`${L} (inkl. zukünftiger Monate)`),ue(`Budget "${f}" wurde für zukünftige Monate übernommen.`),te();return}await Je(Kn(`Budget "${f}"`,T??0,l)),te()}async function ba(o){const l=je();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Je(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${p(o)} € gesetzt`),te())}async function ya(o,l,f){const d=je(),x=h.selectedYear;if(!d||!x)return;const T=o.trim();if(!T){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:St("varpos"),name:T,budgetCents:l,actualCents:0},...d.variablePositions],ye(d),f){const I=pe(x,h.selectedMonth);h.years.forEach(A=>{A.months.forEach(L=>{pe(A.year,L.month)<=I||(L.variablePositions=[{id:St("varpos"),name:T,budgetCents:l,actualCents:0},...L.variablePositions],ye(L))})}),await At(`Variable Position hinzugefügt: ${T} (${p(l)} €) für zukünftige Monate`),ue("Variable Position wurde für zukünftige Monate hinzugefügt."),te();return}await Je(`Variable Position hinzugefügt: ${T} (${p(l)} €)`),ue("Variable Position wurde hinzugefügt."),te()}async function En(o,l){const f=je();if(!f)return;const d=f.variablePositions.find(T=>T.id===o),x=d?.actualCents??0;f.variablePositions=f.variablePositions.map(T=>T.id===o?{...T,actualCents:l}:T),await Je(Kn(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,x,l)),te()}async function ds(o,l){const f=je();if(!f)return;const d=f.variablePositions.find(T=>T.id===o),x=d?.budgetCents??0;f.variablePositions=f.variablePositions.map(T=>T.id===o?{...T,budgetCents:l}:T),ye(f),await Je(Kn(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,x,l)),te()}async function Ca(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=je(),d=h.selectedYear;if(!f||!d)return;const x=f.variablePositions.find(L=>L.id===o);if(!x)return;const T=pe(d,h.selectedMonth),A=h.years.some(L=>L.months.some(J=>pe(L.year,J.month)>T&&J.variablePositions.some(W=>W.name===x.name&&W.budgetCents===x.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),ye(f),A){h.years.forEach(L=>{L.months.forEach(J=>{pe(L.year,J.month)<=T||(J.variablePositions=J.variablePositions.filter(W=>!(W.name===x.name&&W.budgetCents===x.budgetCents)),ye(J))})}),await At(`Variable Position gelöscht: ${x.name} (inkl. zukünftiger Monate)`),ue("Variable Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Je(`Variable Position gelöscht: ${x.name}`),ue("Variable Position wurde gelöscht."),te()}async function hs(o){const l=je(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(W=>W.id===o);if(!d)return;const x={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let T=h.years.find(W=>W.year===x.year);if(!T){const W=Sr(x.year,h.fixedTemplates,h.fixedTemplateVersion);is(W),hn(W),await oa(W),h.years=[...h.years,W].sort((G,ne)=>G.year-ne.year),T=W}const I=T.months.find(W=>W.month===x.month);if(!I)return;const A=I.variablePositions.some(W=>W.id===d.id||W.name===d.name&&W.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(W=>W.id!==o),ye(l),!A){const G=I.variablePositions.some(ne=>ne.id===d.id)?{...d,id:St("varpos")}:d;I.variablePositions=[G,...I.variablePositions],ye(I)}const L=`${Be(x.month)} ${x.year}`,J=`Variable Position verschoben: ${d.name} → ${L}`;if(x.year===f)await Je(J);else{const W=sn();if(!W)return;await oa(W),await oa(T),h.years=await la(),Na(h.years),V(J)}ue(A?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),te()}async function de(o,l,f){const d=je(),x=h.selectedYear;if(!d||!x)return;const T=o.trim();if(!T){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const I=Er(T,l);if(d.miscCosts=[I,...d.miscCosts],f){const A=pe(x,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(J=>{pe(L.year,J.month)<=A||(J.miscCosts=[Er(T,l),...J.miscCosts])})}),await At(`Sonstige Position hinzugefügt: ${T} (${p(l)} €) für zukünftige Monate`),ue("Sonstige Position wurde für zukünftige Monate hinzugefügt."),te();return}await Je(`Sonstige Position hinzugefügt: ${T} (${p(l)} €)`),ue("Sonstige Position wurde hinzugefügt."),te()}async function fs(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=je(),d=h.selectedYear;if(!f||!d)return;const x=f.miscCosts.find(L=>L.id===o);if(!x)return;const T=pe(d,h.selectedMonth),A=h.years.some(L=>L.months.some(J=>pe(L.year,J.month)>T&&J.miscCosts.some(W=>W.description===x.description&&W.amountCents===x.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),A){h.years.forEach(L=>{L.months.forEach(J=>{pe(L.year,J.month)<=T||(J.miscCosts=J.miscCosts.filter(W=>!(W.description===x.description&&W.amountCents===x.amountCents)))})}),await At(`Sonstige Position gelöscht: ${x.description} (${p(x.amountCents)} €) inkl. zukünftiger Monate`),ue("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Je(`Sonstige Position gelöscht: ${x.description} (${p(x.amountCents)} €)`),ue("Sonstige Position wurde gelöscht."),te()}async function Ya(o,l,f,d){const x=je(),T=h.selectedYear;if(!x||!T)return;const I=o.trim();if(!I){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const A=Br(I,l,f);if(x.incomes=[A,...x.incomes],d){const L=pe(T,h.selectedMonth);h.years.forEach(J=>{J.months.forEach(W=>{pe(J.year,W.month)<=L||(W.incomes=[Br(I,l,f),...W.incomes])})}),await At(`Einkommen hinzugefügt: ${I} (${p(l)} €, ${Jn(f)}) für zukünftige Monate`),ue("Einkommen wurde für zukünftige Monate hinzugefügt."),te();return}await Je(`Einkommen hinzugefügt: ${I} (${p(l)} €, ${Jn(f)})`),ue("Einkommen wurde hinzugefügt."),te()}async function xa(o,l){const f=je();if(!f)return;const d=f.incomes.find(x=>x.id===o);d&&(f.incomes=f.incomes.map(x=>{if(x.id!==o)return x;if(!l){const{incomeSource:T,...I}=x;return I}return{...x,incomeSource:l}}),await Je(`Einkommensart angepasst: ${d.description} → ${Jn(l)}`),te())}async function ea(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=je(),d=h.selectedYear;if(!f||!d)return;const x=f.incomes.find(L=>L.id===o);if(!x)return;const T=pe(d,h.selectedMonth),A=h.years.some(L=>L.months.some(J=>pe(L.year,J.month)>T&&J.incomes.some(W=>W.description===x.description&&W.amountCents===x.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),A){h.years.forEach(L=>{L.months.forEach(J=>{pe(L.year,J.month)<=T||(J.incomes=J.incomes.filter(W=>!(W.description===x.description&&W.amountCents===x.amountCents)))})}),await At(`Einkommen gelöscht: ${x.description} (${p(x.amountCents)} €) inkl. zukünftiger Monate`),ue("Einkommen wurde auch in zukünftigen Monaten gelöscht."),te();return}await Je(`Einkommen gelöscht: ${x.description} (${p(x.amountCents)} €)`),ue("Einkommen wurde gelöscht."),te()}async function za(){const o=await Ci(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${xn()}-${ss()}.json`,x=document.createElement("a");x.href=f,x.download=d,x.click(),URL.revokeObjectURL(f),Ra(d),te(),ue("Backup wurde exportiert.")}async function ps(o){const l=await o.text(),f=JSON.parse(l);await xi(f);const[d,x,T,I]=await Promise.all([la(),js(),Ys(),Ws()]);h.years=d,h.annualVariableFixedTemplates=T.templates,h.annualVariableFixedTemplateVersion=T.version,Na(h.years),fa(h.years),h.fixedTemplates=x.templates,h.fixedTemplateVersion=x.version,h.savedSearchEvaluations=I.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await La(h.years),h.persistentAuditLog=await Us(),h.selectedYear=as(d),h.selectedMonth=Cn(),Ra(o.name),ue("Backup wurde importiert."),te()}function Wa(o){h.evaluationQuery=o,h.evaluationCurrentResult=di(h.years,o,Vt()),te()}async function Me(){const o=h.evaluationCurrentResult;if(!o||!o.keywordNormalized){ue("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const l=h.savedSearchEvaluations.findIndex(f=>f.id===o.id);l>=0?h.savedSearchEvaluations[l]=o:h.savedSearchEvaluations=[o,...h.savedSearchEvaluations],await Gs(h.savedSearchEvaluations),V(`Auswertung gespeichert: ${o.keyword}`),ue(`Auswertung "${o.keyword}" wurde gespeichert.`),te()}async function ta(o){const l=h.savedSearchEvaluations.find(f=>f.id===o);l&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(f=>f.id!==o),await Gs(h.savedSearchEvaluations),V(`Auswertung gelöscht: ${l.keyword}`),ue(`Gespeicherte Auswertung "${l.keyword}" wurde gelöscht.`),te())}function te(){const o=sn(),l=je(),f=xn(),d=l?ot(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},x=o?Dn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},T=o?Qn(o):[],I=l?l.foodBudgetCents??0:0,A=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((a,b)=>a+b.plannedCents,0):0,J=l?l.variableBudgetCents??l.variablePositions.reduce((a,b)=>a+b.budgetCents,0):0,W=l?l.miscBudgetCents??0:0,G=o?o.months.reduce((a,b)=>a+(b.foodBudgetCents??0),0):0,ne=o?o.months.reduce((a,b)=>a+(b.goingOutBudgetCents??0),0):0,he=o?o.months.reduce((a,b)=>a+(b.fixedBudgetCents??b.fixedCosts.reduce((K,X)=>K+X.plannedCents,0)),0):0,Ce=o?o.months.reduce((a,b)=>a+(b.variableBudgetCents??b.variablePositions.reduce((K,X)=>K+X.budgetCents,0)),0):0,Xe=o?o.months.reduce((a,b)=>a+(b.miscBudgetCents??0),0):0,fe=l?l.incomes.reduce((a,b)=>a+(yt(b.incomeSource)?b.amountCents:0),0):0,le=l?l.incomes.reduce((a,b)=>a+(b.incomeSource==="salary"?b.amountCents:0),0):0,Ae=l?l.incomes.reduce((a,b)=>a+(b.incomeSource==="fresh"?b.amountCents:0),0):0,Se=Ka(),ze=o?Se.get(pe(o.year,h.selectedMonth)):void 0,Ot=o?o.months.slice().sort((a,b)=>a.month-b.month)[0]:void 0,N=ze?.carriedFromPreviousCents??0,It=ze?.hasPreviousMonth??!1,Oe=ze?.effectiveIncomeCents??fe,Wt=l?Jt(l):0,Ft=ze?.netCents??fe-Wt,ve=Oe-d.totalCents,vt=le-d.totalCents,Ie=d.totalCents>0?`${(le/d.totalCents*100).toFixed(1)} %`:"-",We=N<0?"danger":N>0?"budget-under":"",tt=Ft<0?"danger":Ft>0?"budget-under":"",Ke=ve<0?"danger":ve>0?"budget-under":"",nt=o?o.months.reduce((a,b)=>a+b.incomes.reduce((K,X)=>K+(yt(X.incomeSource)?X.amountCents:0),0),0):0,Qt=o?o.months.reduce((a,b)=>a+b.incomes.reduce((K,X)=>K+(X.incomeSource==="salary"?X.amountCents:0),0),0):0,Et=o?o.months.reduce((a,b)=>a+b.incomes.reduce((K,X)=>K+(X.incomeSource==="fresh"?X.amountCents:0),0),0):0,ht=o&&Ot?Se.get(pe(o.year,Ot.month))?.carriedFromPreviousCents??0:0,Ct=nt+ht,Bt=Ct-x.totalCents,Vn=Qt-x.totalCents,Fe=x.totalCents>0?`${(Qt/x.totalCents*100).toFixed(1)} %`:"-",ke=ht<0?"danger":ht>0?"budget-under":"",De=Bt<0?"danger":Bt>0?"budget-under":"",at=I+A+L+J+W,Re=I+A,lt=d.foodCents+d.goingOutCents,xt=Re-lt,Dt=Ve(lt,Re),Zt=G+ne+he+Ce+Xe,kt=Oe-at,Mt=Ct-Zt,Gt=at-d.totalCents,Bn=Zt-x.totalCents,xe=a=>a<0?"danger":a>0?"budget-under":"",Ge=(a,b)=>b<=0?"muted":a>=b?"budget-under":"danger",Nt=Ge(le,d.totalCents),ln=Ge(Qt,x.totalCents),E=(a,b)=>{if(b<=0)return"0%";const X=Math.max(0,a)/b*100;return`${Math.min(100,Math.max(0,X)).toFixed(1)}%`},q=(a,b)=>{if(b<=0)return a>0?100:0;const K=Math.max(0,a)/b*100;return Math.max(0,K)},wt=[{label:"Essen",budgetCents:I,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:A,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:J,actualCents:d.variableCents},{label:"Sonstige",budgetCents:W,actualCents:d.miscCents}];Math.max(1,...wt.flatMap(a=>[a.budgetCents,a.actualCents]));const ka=(a,b)=>b<=0?"bar-positive":a<=0||b>a?"bar-negative":"bar-positive",na=[{label:"Einkommen gesamt",valueCents:Oe,className:"bar-income"},{label:"Budget gesamt",valueCents:at,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ve,className:ve<0?"bar-negative":"bar-positive"}],Ga=Math.max(1,...na.map(a=>Math.abs(a.valueCents))),Mn=o?o.months.slice().sort((a,b)=>a.month-b.month).map(a=>{const b=a.foodBudgetCents??0,K=a.goingOutBudgetCents??0,X=a.fixedBudgetCents??a.fixedCosts.reduce((cn,yn)=>cn+yn.plannedCents,0),Ee=a.variableBudgetCents??a.variablePositions.reduce((cn,yn)=>cn+yn.budgetCents,0),He=a.miscBudgetCents??0,Rt=b+K+X+Ee+He;return{month:a.month,foodBudgetCents:b,goingOutBudgetCents:K,fixedBudgetCents:X,variableBudgetCents:Ee,miscBudgetCents:He,totalBudgetCents:Rt}}):[],Lt=new Map(Mn.map(a=>[a.month,a])),Kt=a=>{if(a.length===0)return null;const b=Math.min(...a),K=Math.max(...a),X=Math.round(a.reduce((Ee,He)=>Ee+He,0)/a.length);return{min:b,avg:X,max:K}},_t=o&&o.year===Vt()?T.filter(a=>a.month<=Cn()):T,wa=_t.map(a=>a.summary.foodCents),Ua=_t.map(a=>a.summary.goingOutCents),vs=_t.map(a=>a.summary.fixedCents),$a=_t.map(a=>a.summary.variableCents),aa=_t.map(a=>a.summary.miscCents),ms=_t.map(a=>a.summary.totalCents),Sa=_t.map(a=>o?Se.get(pe(o.year,a.month))?.plannedBudgetCents??0:0),Ha=_t.map(a=>o?Se.get(pe(o.year,a.month))?.netCents??0:0),Ja=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((b,K)=>b+(K.incomeSource==="salary"?K.amountCents:0),0)])),Ea=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((b,K)=>b+(K.incomeSource==="salary"||K.incomeSource==="fresh"?K.amountCents:0),0)])),gs=_t.map(a=>Ja.get(a.month)??0),Xa=_t.map(a=>Ea.get(a.month)??0),Ut={food:Kt(wa),goingOut:Kt(Ua),fixed:Kt(vs),variable:Kt($a),misc:Kt(aa),total:Kt(ms),salary:Kt(gs),income:Kt(Xa),budget:Kt(Sa),net:Kt(Ha)},Ds=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],en={food:wa.reduce((a,b)=>a+b,0),goingOut:Ua.reduce((a,b)=>a+b,0),fixed:vs.reduce((a,b)=>a+b,0),variable:$a.reduce((a,b)=>a+b,0),misc:aa.reduce((a,b)=>a+b,0),total:ms.reduce((a,b)=>a+b,0),salary:gs.reduce((a,b)=>a+b,0),income:Xa.reduce((a,b)=>a+b,0),budget:Sa.reduce((a,b)=>a+b,0)},Qa=Ds.map(({key:a,label:b})=>{const K=Ut.food?.[a]??null,X=Ut.goingOut?.[a]??null,Ee=Ut.fixed?.[a]??null,He=Ut.variable?.[a]??null,Rt=Ut.misc?.[a]??null,cn=Ut.total?.[a]??null,yn=Ut.salary?.[a]??null,ft=Ut.income?.[a]??null,ia=Ut.budget?.[a]??null,_a=Ut.net?.[a]??null,Tt=An=>An===null?"-":p(An);return`<tr>
                  <td><strong>${b}</strong></td>
                  <td>${Tt(K)}</td>
                  <td>${Tt(X)}</td>
                  <td>${Tt(Ee)}</td>
                  <td>${Tt(He)}</td>
                  <td>${Tt(Rt)}</td>
                  <td>${Tt(cn)}</td>
                  <td>${Tt(yn)}</td>
                  <td>${Tt(ft)}</td>
                  <td>${Tt(ia)}</td>
                  <td>${Tt(_a)}</td>
                </tr>`}).join(""),bs=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${p(en.food)}</td>
                  <td>${p(en.goingOut)}</td>
                  <td>${p(en.fixed)}</td>
                  <td>${p(en.variable)}</td>
                  <td>${p(en.misc)}</td>
                  <td>${p(en.total)}</td>
                  <td>${p(en.salary)}</td>
                  <td>${p(en.income)}</td>
                  <td>${p(en.budget)}</td>
                  <td>-</td>
                </tr>`,Za=Math.max(1,...T.flatMap(a=>{const b=Lt.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,b??0]})),ys=Math.max(1,...T.flatMap(a=>{const b=Lt.get(a.month),K=a.summary.foodCents+a.summary.goingOutCents,X=(b?.foodBudgetCents??0)+(b?.goingOutBudgetCents??0);return[K,X]})),Cs=Math.max(1,...T.flatMap(a=>{const b=Lt.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,b]})),xs=Math.max(1,...T.flatMap(a=>{const b=Lt.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,b]})),sa=Math.max(1,...T.flatMap(a=>{const b=Lt.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,b]})),tn=Ve(d.fixedCents,L),Ue=Ve(d.foodCents,I),Ba=Ve(d.goingOutCents,A),_n=Ve(d.variableCents,J),ks=Ve(d.miscCents,W),mn=a=>a===0?"-":p(a),ws=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(L)}</div>
        <div class="compact-cost-actual ${tn}">${mn(d.fixedCents)}</div>
      </div>`,Tn=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(J)}</div>
        <div class="compact-cost-actual ${_n}">${mn(d.variableCents)}</div>
      </div>`,es=l?l.fixedCosts.length>0?l.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${pt(a.name)}</div>
                  <div class="compact-cost-budget">${p(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${Ve(a.actualCents,a.plannedCents)}">${mn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Yn=l?l.variablePositions.length>0?l.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${pt(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${p(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${Ve(a.actualCents,a.budgetCents)}">${mn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,qt=h.editingFixedTemplateId?h.fixedTemplates.find(a=>a.id===h.editingFixedTemplateId):null,$s=h.hasUnexportedChanges,e=h.unexportedChangeLog.slice().reverse(),t=h.persistentAuditLog.slice().sort((a,b)=>b.timestampIso.localeCompare(a.timestampIso)),n=h.lastBackupFileName?pt(h.lastBackupFileName):"-",s={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},r=h.years.slice().sort((a,b)=>a.year-b.year),i=r.some(a=>a.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??r[r.length-1]?.year??null,c=typeof i=="number"?r.find(a=>a.year===i):void 0,u=c?c.months.slice().sort((a,b)=>a.month-b.month):[],v=c?Dn(c):s,S=c?dn(c):{salaryIncomeCents:0,freshIncomeCents:0},y=S.salaryIncomeCents+S.freshIncomeCents,m=S.salaryIncomeCents,k=c?Zn(c):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},w=c?Nn(c):0,C=c?Ln(c,Se):0,g=w+C,B=c?c.months.reduce((a,b)=>a+Jt(b),0):0,_=g-B,$=g-v.totalCents,P=[{label:"Essen",budgetCents:k.foodCents,actualCents:v.foodCents},{label:"Ausgehen",budgetCents:k.goingOutCents,actualCents:v.goingOutCents},{label:"Fixkosten",budgetCents:k.fixedCents,actualCents:v.fixedCents},{label:"Variable",budgetCents:k.variableCents,actualCents:v.variableCents},{label:"Sonstige",budgetCents:k.miscCents,actualCents:v.miscCents}],O=u.map(a=>{const b=c?Se.get(pe(c.year,a.month)):void 0,K=ot(a),X=a.incomes.reduce((An,zn)=>An+(zn.incomeSource==="salary"?zn.amountCents:0),0),Ee=a.incomes.reduce((An,zn)=>An+(yt(zn.incomeSource)?zn.amountCents:0),0),He=b?.effectiveIncomeCents??Ee,Rt=b?.plannedBudgetCents??Jt(a),cn=K.foodCents,yn=K.goingOutCents,ft=cn+yn,ia=K.totalCents,_a=He-Rt,Tt=He-ia;return{month:a.month,salaryIncomeCents:X,incomeCents:Ee,foodCents:cn,goingOutCents:yn,foodAndGoingOutCents:ft,effectiveIncomeCents:He,plannedBudgetCents:Rt,actualCostCents:ia,plannedNetCents:_a,actualNetCents:Tt}}),j=Math.max(1,...O.map(a=>a.actualCostCents)),R=Math.max(1,...O.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),F=Math.max(1,...O.map(a=>a.foodAndGoingOutCents)),U=Math.max(1,...O.map(a=>a.foodCents)),z=Math.max(1,...O.map(a=>a.goingOutCents)),D=O.map((a,b,K)=>{const X=b>0?K[b-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Be(a.month),monthShortLabel:Be(a.month).slice(0,3),deltaCents:a.plannedNetCents-X}}),Y=D[D.length-1]??null,me=Math.min(0,...D.map(a=>a.plannedNetCents)),ge=Math.max(0,...D.map(a=>a.plannedNetCents)),ee=Math.max(1,ge-me),ie=720,_e=320,mt=18,Ne=18,Pn=38,gn=56,Hs=ie-gn-Ne,Ns=_e-mt-Pn,Fr=a=>{if(D.length<=1)return gn+Hs/2;const b=a/(D.length-1);return gn+b*Hs},Ls=a=>mt+(ge-a)/ee*Ns,bn=D.map((a,b)=>{const K=Fr(b),X=Ls(a.plannedNetCents);return{...a,x:K,y:X,leftPercent:K/ie*100,topPercent:X/_e*100}}),Ks=bn.map((a,b)=>`${b===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),Js=bn.length>0?`${Ks} L ${bn[bn.length-1]?.x.toFixed(1)} ${(mt+Ns).toFixed(1)} L ${bn[0]?.x.toFixed(1)} ${(mt+Ns).toFixed(1)} Z`:"",Xs=5,Dr=Array.from({length:Xs},(a,b)=>{const K=b/(Xs-1),X=ge-K*ee;return{valueCents:Math.round(X/100)*100,y:Ls(X)}}),Qs=Ls(0),Nr=D[0]?.plannedNetCents??0,Ma=(D[D.length-1]?.plannedNetCents??0)-Nr,Lr=Ma<0?"trend-badge-negative":Ma>0?"trend-badge-positive":"trend-badge-neutral",Zs=Ma<0?"↘":Ma>0?"↗":"→",Kr=Ma<0?"Abwärtstrend":Ma>0?"Aufwärtstrend":"Seitwärts",ra=r.reduce((a,b)=>{const K=Zn(b);return{foodCents:a.foodCents+K.foodCents,goingOutCents:a.goingOutCents+K.goingOutCents,fixedCents:a.fixedCents+K.fixedCents,variableCents:a.variableCents+K.variableCents,miscCents:a.miscCents+K.miscCents,totalCents:a.totalCents+K.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Ht=r.reduce((a,b)=>{const K=Dn(b);return{foodCents:a.foodCents+K.foodCents,goingOutCents:a.goingOutCents+K.goingOutCents,fixedCents:a.fixedCents+K.fixedCents,variableCents:a.variableCents+K.variableCents,miscCents:a.miscCents+K.miscCents,totalCents:a.totalCents+K.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),qr=r.reduce((a,b)=>a+Nn(b),0),Rr=r[0]?Ln(r[0],Se):0,er=qr+Rr,tr=er-ra.totalCents,nr=er-Ht.totalCents,ar=[{label:"Essen",budgetCents:ra.foodCents,actualCents:Ht.foodCents},{label:"Ausgehen",budgetCents:ra.goingOutCents,actualCents:Ht.goingOutCents},{label:"Fixkosten",budgetCents:ra.fixedCents,actualCents:Ht.fixedCents},{label:"Variable",budgetCents:ra.variableCents,actualCents:Ht.variableCents},{label:"Sonstige",budgetCents:ra.miscCents,actualCents:Ht.miscCents}],sr=Math.max(1,...ar.flatMap(a=>[a.budgetCents,a.actualCents])),qs=[{label:"Essen & Ausgehen",actualCents:Ht.foodCents+Ht.goingOutCents},{label:"Fixkosten",actualCents:Ht.fixedCents},{label:"Variable",actualCents:Ht.variableCents},{label:"Sonstige",actualCents:Ht.miscCents}],jr=Math.max(1,...qs.map(a=>a.actualCents)),we=r.map(a=>{const b=Dn(a),K=Zn(a),X=Nn(a),Ee=dn(a),He=Ln(a,Se),Rt=X+He;return{year:a.year,salaryIncomeCents:Ee.salaryIncomeCents,freshIncomeCents:Ee.freshIncomeCents,totalIncomeCents:Ee.salaryIncomeCents+Ee.freshIncomeCents,foodAndGoingOutCents:b.foodCents+b.goingOutCents,fixedCents:b.fixedCents,variableCents:b.variableCents,miscCents:b.miscCents,budgetTotalCents:K.totalCents,actualTotalCents:b.totalCents,effectiveIncomeCents:Rt,plannedNetCents:Rt-K.totalCents,actualNetCents:Rt-b.totalCents}}),Vr=we.reduce((a,b)=>a+b.totalIncomeCents,0),Yr=we.reduce((a,b)=>a+b.salaryIncomeCents,0),rr=Math.max(1,...we.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),zr=Math.max(1,...we.map(a=>a.actualTotalCents)),Wr=Math.max(1,...we.map(a=>a.totalIncomeCents)),Gr=Math.max(1,...we.map(a=>a.salaryIncomeCents)),ir=Math.max(1,...we.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),or=Math.max(1,...we.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),Ur=Math.max(1,...we.map(a=>a.foodAndGoingOutCents)),Hr=Math.max(1,...we.map(a=>a.fixedCents)),Jr=Math.max(1,...we.map(a=>a.variableCents)),Xr=Math.max(1,...we.map(a=>a.miscCents)),Qr=`
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
                    ${r.map(a=>`<option value="${a.year}" ${a.year===i?"selected":""}>${a.year}</option>`).join("")}
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${p(y)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${p(m)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(B)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(v.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${xe(_)}">${p(_)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${xe($)}">${p($)}</div><div class="eval-value"></div></div>
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
                      <span class="trend-badge ${Lr}">${Zs} ${Kr}</span>
                    </div>
                  </header>
                  ${Y?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${pt(Y.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${xe(Y.plannedNetCents)}" data-year-trend-active-net>${p(Y.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${p(Y.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${p(Y.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${xe(Y.deltaCents)}" data-year-trend-active-delta>${Y.deltaCents>=0?"+":""}${p(Y.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${ie} ${_e}"
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
                              ${Dr.map(a=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${gn}" y1="${a.y.toFixed(1)}" x2="${ie-Ne}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${gn-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${p(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${gn}" y1="${Qs.toFixed(1)}" x2="${ie-Ne}" y2="${Qs.toFixed(1)}"></line>
                              ${Js?`<path class="year-trend-area" d="${Js}"></path>`:""}
                              ${Ks?`<path class="year-trend-line" d="${Ks}"></path>`:""}
                              ${bn.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${_e-12}" text-anchor="middle">${pt(a.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${bn.map((a,b)=>`
                                    <button
                                      class="year-trend-point-hit ${b===bn.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${a.leftPercent.toFixed(2)}%; top:${a.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${b===bn.length-1?"1":"0"}"
                                      data-month-label="${pt(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${pt(a.monthLabel)}: Kalkulierter Saldo ${p(a.plannedNetCents)}, Einkommen ${p(a.effectiveIncomeCents)}, Ausgaben ${p(a.actualCostCents)}"
                                      aria-pressed="${b===bn.length-1?"true":"false"}"
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
                    ${P.map(a=>{const b=q(a.actualCents,a.budgetCents),K=Math.min(100,b),X=`${b.toFixed(0)}%`,Ee=a.budgetCents-a.actualCents,He=Ee<0?"danger":Ee>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${ka(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${K.toFixed(1)}%" title="${a.label}: ${p(a.actualCents)} von ${p(a.budgetCents)}">
                              <span class="circle-chart-value">${X}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${p(a.budgetCents)} / I ${p(a.actualCents)}</div>
                            <div class="circle-chart-meta ${He}">${Ee>=0?"+":""}${p(Ee)}</div>
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
                    ${O.map(a=>{const b=E(a.actualCostCents,j);return`
                          <div class="spark-bar" title="${Be(a.month)}: ${p(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                    ${O.map(a=>{const b=E(Math.abs(a.plannedNetCents),R),K=E(Math.abs(a.actualNetCents),R),X=a.plannedNetCents<0?"bar-negative":"bar-positive",Ee=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Be(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(a.plannedNetCents)} | Ist-Saldo: ${p(a.actualNetCents)}">
                              <div class="bar ${X}" style="width:${b}; opacity: 0.35;"></div>
                              <div class="bar ${Ee}" style="width:${K}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${xe(a.plannedNetCents)}">B ${p(a.plannedNetCents)}</span>
                              <span class="${xe(a.actualNetCents)}">I ${p(a.actualNetCents)}</span>
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
                  ${O.map(a=>`<tr>
                        <td>${Be(a.month)}</td>
                    <td>${p(a.salaryIncomeCents)}</td>
                    <td>${p(a.incomeCents)}</td>
                        <td>${p(a.plannedBudgetCents)}</td>
                        <td>${p(a.actualCostCents)}</td>
                        <td class="${xe(a.plannedNetCents)}">${p(a.plannedNetCents)}</td>
                        <td class="${xe(a.actualNetCents)}">${p(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${r.map(a=>`<option value="${a.year}" ${a.year===i?"selected":""}>${a.year}</option>`).join("")}
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
                    ${O.map(a=>{const b=E(a.foodAndGoingOutCents,F);return`
                          <div class="spark-bar" title="${Be(a.month)}: ${p(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                    ${O.map(a=>{const b=E(a.foodCents,U);return`
                          <div class="spark-bar" title="${Be(a.month)}: ${p(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                    ${O.map(a=>{const b=E(a.goingOutCents,z);return`
                          <div class="spark-bar" title="${Be(a.month)}: ${p(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${p(Vr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${p(Yr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(ra.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(Ht.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${xe(tr)}">${p(tr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${xe(nr)}">${p(nr)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${qs.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${p(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(Ht.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${ar.map(a=>{const b=E(a.budgetCents,sr),K=E(a.actualCents,sr),X=ka(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${p(a.budgetCents)} | Ist: ${p(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${b}"></div>
                              <div class="bar-marker" style="left:${b}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${X}" style="width:${K}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${p(a.budgetCents)}</span>
                              <span class="muted">I ${p(a.actualCents)}</span>
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
                    ${qs.map(a=>{const b=E(a.actualCents,jr);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Ist: ${p(a.actualCents)}">
                              <div class="bar bar-expense" style="width:${b}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">I ${p(a.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.actualTotalCents,zr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.actualTotalCents)} €</span></div>
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
                    ${we.map(a=>{const b=E(Math.abs(a.plannedNetCents),rr),K=E(Math.abs(a.actualNetCents),rr),X=a.plannedNetCents<0?"bar-negative":"bar-positive",Ee=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(a.plannedNetCents)} | Ist-Saldo: ${p(a.actualNetCents)}">
                              <div class="bar ${X}" style="width:${b}; opacity: 0.35;"></div>
                              <div class="bar ${Ee}" style="width:${K}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${xe(a.plannedNetCents)}">B ${p(a.plannedNetCents)}</span>
                              <span class="${xe(a.actualNetCents)}">I ${p(a.actualNetCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.foodAndGoingOutCents,Ur);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.fixedCents,Hr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.fixedCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.variableCents,Jr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.variableCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.miscCents,Xr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.miscCents)} €</span></div>
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
                  ${we.map(a=>`<tr>
                        <td>${a.year}</td>
                        <td>${p(a.salaryIncomeCents)}</td>
                        <td>${p(a.totalIncomeCents)}</td>
                        <td>${p(a.budgetTotalCents)}</td>
                        <td>${p(a.actualTotalCents)}</td>
                        <td class="${xe(a.plannedNetCents)}">${p(a.plannedNetCents)}</td>
                        <td class="${xe(a.actualNetCents)}">${p(a.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.totalIncomeCents,Wr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.totalIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.salaryIncomeCents,Gr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${p(a.salaryIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.totalIncomeCents,ir),K=E(a.actualTotalCents,ir);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${p(a.totalIncomeCents)} | Kosten ${p(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${b}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${K}"><span class="spark-bar-fill-value">${p(a.actualTotalCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=E(a.salaryIncomeCents,or),K=E(a.actualTotalCents,or);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${p(a.salaryIncomeCents)} | Kosten ${p(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${b}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${K}"><span class="spark-bar-fill-value">${p(a.actualTotalCents)} €</span></div>
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
    `,Zr=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,ei=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${qt?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${qt?$t(qt.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${qt?"Änderung speichern":"Vorlage speichern"}</button>
          ${qt?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td>${p(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${a.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,lr=h.annualVariableFixedTemplates.reduce((a,b)=>a+b.plannedCents,0),ti=Math.round(lr/12),ni=`
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
                <div class="eval-value budget-under">${p(lr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${p(ti)}</div>
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
            ${h.annualVariableFixedTemplates.map(a=>{const b=ja(a.dueDateIso),K=b?Be(b.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${K}</td>
                    <td>${p(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,nn=h.evaluationCurrentResult,ai=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${pt(h.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${nn&&nn.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${nn?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${pt(nn.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${nn.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${p(nn.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${p(nn.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${p(nn.monthAverageCents)}</div>
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
                  ${nn.yearRows.length>0?nn.yearRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${a.hitCount}</td>
                              <td>${p(a.totalCents)}</td>
                              <td>${a.monthsWithHits}</td>
                              <td>${p(a.monthAverageCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>

              <h3>Treffer nach Monat</h3>
              <table>
                <thead>
                  <tr><th>Jahr</th><th>Monat</th><th>Treffer</th><th>Summe (€)</th></tr>
                </thead>
                <tbody>
                  ${nn.monthRows.length>0?nn.monthRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${Be(a.month)}</td>
                              <td>${a.hitCount}</td>
                              <td>${p(a.totalCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="4" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>
            `:'<p class="muted">Noch keine Auswertung ausgeführt.</p>'}

        <h3>Gespeicherte Auswertungen</h3>
        ${h.savedSearchEvaluations.length===0?'<p class="muted">Noch keine gespeicherten Auswertungen vorhanden.</p>':h.savedSearchEvaluations.map(a=>`
                  <article class="card">
                    <div class="inline">
                      <strong>${pt(a.keyword)}</strong>
                      <span class="muted">${new Date(a.createdAt).toLocaleString("de-DE")}</span>
                      <button class="btn btn-quiet" data-remove-saved-evaluation="${a.id}" type="button">Löschen</button>
                    </div>
                    <div class="inline">
                      <span>Treffer: <strong>${a.totalHitCount}</strong></span>
                      <span>Summe: <strong>${p(a.totalCents)}</strong></span>
                      <span>Laufendes Jahr: <strong>${p(a.currentYearCents)}</strong></span>
                      <span>Monatsschnitt: <strong>${p(a.monthAverageCents)}</strong></span>
                    </div>
                    <table>
                      <thead>
                        <tr><th>Jahr</th><th>Treffer</th><th>Summe (€)</th><th>Treffer-Monate</th><th>Monatsschnitt (€)</th></tr>
                      </thead>
                      <tbody>
                        ${a.yearRows.length>0?a.yearRows.map(b=>`<tr>
                                <td>${b.year}</td>
                                <td>${b.hitCount}</td>
                                <td>${p(b.totalCents)}</td>
                                <td>${b.monthsWithHits}</td>
                                <td>${p(b.monthAverageCents)}</td>
                              </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                      </tbody>
                    </table>
                  </article>
                `).join("")}
      </div>
    `,cr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",si=h.topModal==="years"?Zr:h.topModal==="fixed"?ei:h.topModal==="variable-fixed"?ni:h.topModal==="dashboard"?Qr:h.topModal==="evaluation"?ai:"";M.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${$s?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Or.map(a=>`<option value="${a}" ${h.theme===a?"selected":""}>${wi(a)}</option>`).join("")}
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
                  ${si}
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
                  ${e.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${e.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${pt(a.message)}</span></li>`).join("")}</ol>`}
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
                  ${t.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${t.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${pt(a.message)}</span></li>`).join("")}</ol>`}
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
                  ${h.years.map(a=>`<option value="${a.year}" ${a.year===h.selectedYear?"selected":""}>${a.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${h.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(a,b)=>b+1).map(a=>`<option value="${a}" ${a===h.selectedMonth?"selected":""}>${Be(a)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${p(fe)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${p(le)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${p(Ae)}</strong>
              </div>
              <div class="compact-income-row ${We}">
                <span>Übernahme aus Vormonat</span>
                <strong>${It?p(N):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${p(Oe)}</strong>
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
                  ${es}
                  ${ws}
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
                  ${Yn}
                  ${Tn}
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
                    <div class="compact-cost-budget">${p(Re)}</div>
                    <div class="compact-cost-actual ${Dt}">${mn(lt)}</div>
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
                    <div class="compact-cost-budget">${p(W)}</div>
                    <div class="compact-cost-actual ${ks}">${mn(d.miscCents)}</div>
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
                  ${wt.map(a=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${a.label}"
                            data-budget-cents="${a.budgetCents}"
                            data-actual-cents="${a.actualCents}"
                            role="img"
                            aria-label="${a.label}: Budget ${p(a.budgetCents)} €, Ist ${p(a.actualCents)} €"
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
                  ${na.map(a=>{const b=E(Math.abs(a.valueCents),Ga),K=a.valueCents>=0?"+":"",X=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${p(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${b}"></div>
                          </div>
                          <div class="bar-meta"><span class="${X}">${K}${p(a.valueCents)}</span></div>
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
                      ${T.map(a=>{const b=Lt.get(a.month)?.totalBudgetCents??0,K=E(b,Za),X=E(a.summary.totalCents,Za);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${p(a.summary.totalCents)} € | Budget ${p(b)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${X}"><span class="spark-bar-fill-value">${p(a.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                      ${T.map(a=>{const b=Lt.get(a.month),K=(b?.foodBudgetCents??0)+(b?.goingOutBudgetCents??0),X=a.summary.foodCents+a.summary.goingOutCents,Ee=E(K,ys),He=E(X,ys);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${p(X)} € | Budget ${p(K)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Ee}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${He}"><span class="spark-bar-fill-value">${p(X)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                      ${T.map(a=>{const b=Lt.get(a.month)?.fixedBudgetCents??0,K=E(b,Cs),X=E(a.summary.fixedCents,Cs);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${p(a.summary.fixedCents)} € | Budget ${p(b)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${X}"><span class="spark-bar-fill-value">${p(a.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                      ${T.map(a=>{const b=Lt.get(a.month)?.variableBudgetCents??0,K=E(b,xs),X=E(a.summary.variableCents,xs);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${p(a.summary.variableCents)} € | Budget ${p(b)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${X}"><span class="spark-bar-fill-value">${p(a.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                      ${T.map(a=>{const b=Lt.get(a.month)?.miscBudgetCents??0,K=E(b,sa),X=E(a.summary.miscCents,sa);return`
                            <div class="spark-bar" title="${Be(a.month)}: Ist ${p(a.summary.miscCents)} € | Budget ${p(b)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${X}"><span class="spark-bar-fill-value">${p(a.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(a.month).slice(0,3)}</div>
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
                    <div class="eval-value">${p(fe)}</div>
                    <div class="eval-value">${p(nt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${p(le)}</div>
                    <div class="eval-value">${p(Qt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${p(Ae)}</div>
                    <div class="eval-value">${p(Et)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${We}">${It?p(N):"-"}</div>
                    <div class="eval-value ${ke}">${o?p(ht):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${p(Oe)}</div>
                    <div class="eval-value">${p(Ct)}</div>
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
                    <div class="eval-value">${Xt(I,d.foodCents)}</div>
                    <div class="eval-value">${p(G)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Xt(A,d.goingOutCents)}</div>
                    <div class="eval-value">${p(ne)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Xt(L,d.fixedCents)}</div>
                    <div class="eval-value">${p(he)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Xt(J,d.variableCents)}</div>
                    <div class="eval-value">${p(Ce)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Xt(W,d.miscCents)}</div>
                    <div class="eval-value">${p(Xe)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Xt(at,d.totalCents)}</div>
                    <div class="eval-value">${p(Zt)}</div>
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
                    <div class="eval-value ${Ue}">${p(d.foodCents)}</div>
                    <div class="eval-value">${p(x.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Ba}">${p(d.goingOutCents)}</div>
                    <div class="eval-value">${p(x.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${tn}">${p(d.fixedCents)}</div>
                    <div class="eval-value">${p(x.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${_n}">${p(d.variableCents)}</div>
                    <div class="eval-value">${p(x.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${ks}">${p(d.miscCents)}</div>
                    <div class="eval-value">${p(x.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${p(d.totalCents)}</div>
                    <div class="eval-value">${p(x.totalCents)}</div>
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
                    <div class="eval-value ${xe(Gt)}">${p(Gt)}</div>
                    <div class="eval-value ${xe(Bn)}">${p(Bn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${xe(kt)}">${p(kt)}</div>
                    <div class="eval-value ${xe(Mt)}">${p(Mt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Ke}">${p(ve)}</div>
                    <div class="eval-value ${De}">${p(Bt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${xe(vt)}">${p(vt)}</div>
                    <div class="eval-value ${xe(Vn)}">${p(Vn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Nt}">${Ie}</div>
                    <div class="eval-value ${ln}">${Fe}</div>
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
                </tr>
              </thead>
              <tbody>
                ${T.map((a,b,K)=>{const X=o?Se.get(pe(o.year,a.month)):void 0,Ee=X?.plannedBudgetCents??0,He=X?.netCents??0,Rt=Ja.get(a.month)??0,cn=Ea.get(a.month)??0,yn=He<0?"danger":He>0?"budget-under":"",ft=K[b-1],ia=ft?.summary.foodCents??null,_a=ft?.summary.goingOutCents??null,Tt=ft?.summary.fixedCents??null,An=ft?.summary.variableCents??null,zn=ft?.summary.miscCents??null,ur=ft?.summary.totalCents??null,dr=ft!==void 0?Ja.get(ft.month)??0:null,hr=ft!==void 0?Ea.get(ft.month)??0:null,fr=o&&ft?Se.get(pe(o.year,ft.month))?.plannedBudgetCents??0:null,pr=ia===null?null:a.summary.foodCents-ia,vr=_a===null?null:a.summary.goingOutCents-_a,mr=Tt===null?null:a.summary.fixedCents-Tt,gr=An===null?null:a.summary.variableCents-An,br=zn===null?null:a.summary.miscCents-zn,yr=ur===null?null:a.summary.totalCents-ur,Cr=dr===null?null:Rt-dr,xr=hr===null?null:cn-hr,kr=fr===null?null:Ee-fr,Ta=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",wr=Pt=>Pt===null?"muted":Pt>0?"budget-under":Pt<0?"danger":"muted",ri=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",On=Pt=>Pt===null?"(Δ -)":`(Δ ${Pt>0?"+":""}${p(Pt)})`,$r=o&&ft?Se.get(pe(o.year,ft.month))?.netCents??0:null,Pa=$r===null?null:He-$r,ii=Pa===null?"(Δ -)":`(Δ ${Pa>0?"+":""}${p(Pa)})`,oi=Pa===null?"muted":Pa<0?"danger":Pa>0?"budget-under":"muted";return`<tr>
                  <td>${Be(a.month)}</td>
                  <td>${p(a.summary.foodCents)} <span class="${Ta(pr)}">${On(pr)}</span></td>
                  <td>${p(a.summary.goingOutCents)} <span class="${Ta(vr)}">${On(vr)}</span></td>
                  <td>${p(a.summary.fixedCents)} <span class="${Ta(mr)}">${On(mr)}</span></td>
                  <td>${p(a.summary.variableCents)} <span class="${Ta(gr)}">${On(gr)}</span></td>
                  <td>${p(a.summary.miscCents)} <span class="${Ta(br)}">${On(br)}</span></td>
                  <td>${p(a.summary.totalCents)} <span class="${Ta(yr)}">${On(yr)}</span></td>
                  <td>${p(Rt)} <span class="${wr(Cr)}">${On(Cr)}</span></td>
                  <td>${p(cn)} <span class="${wr(xr)}">${On(xr)}</span></td>
                  <td>${p(Ee)} <span class="${ri(kr)}">${On(kr)}</span></td>
                  <td class="${yn}">${p(He)} <span class="${oi}">${ii}</span></td>
                </tr>`}).join("")}
                ${Qa}
                ${bs}
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
                    <td class="${We}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${$t(N)}" />
                    </td>
                    <td>-</td>
                  </tr>${l.incomes.map(a=>`<tr>
                    <td>${a.description}</td>
                    <td>
                      <select data-income-source="${a.id}">
                        <option value="" ${a.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${a.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${a.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${a.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${p(a.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${a.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${p(fe)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${p(le)} €</strong>
                </div>
                <div class="column-overview-row ${We}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${p(N)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${p(Oe)} €</strong>
                </div>
                <div class="column-overview-row ${tt}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${p(Ft)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Yt(I,d.foodCents)}
                ${Yt(A,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${p(Re)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${p(lt)} €</strong>
                  </div>
                  <div class="column-overview-row ${Dt}">
                    <span>Diff</span>
                    <strong>${p(xt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${$t(I)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${$t(A)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(a=>{const b=a.foodCents>0,K=a.goingOutCents>0,X=`${a.isoDate===f?"today-row":""} ${b||K?"day-has-entry":""}`.trim(),Ee=`amount-input ${b?"day-input-has-value":""}`.trim(),He=`amount-input ${K?"day-input-has-value":""}`.trim();return`<tr class="${X}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Ee}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${$t(a.foodCents)}" /></td>
                      <td><input class="${He}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${$t(a.goingOutCents)}" /></td>
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
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${$t(L)}" ${l?"":"disabled"} />
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
                ${l?l.fixedCosts.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${$t(a.plannedCents)}" /></td>
                    <td class="${Ve(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${$t(a.actualCents)}" /></td>
                    <td class="${Ve(a.actualCents,a.plannedCents)}">${p(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Yt(J,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${$t(J)}" ${l?"":"disabled"} />
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
                ${l?l.variablePositions.map(a=>`<tr>
                    <td>${a.name}${a.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${$t(a.budgetCents)}" /></td>
                    <td class="${Ve(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${$t(a.actualCents)}" /></td>
                    <td class="${Ve(a.actualCents,a.budgetCents)}">${p(a.actualCents-a.budgetCents)}</td>
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
              ${Yt(W,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${$t(W)}" ${l?"":"disabled"} />
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
                ${l?l.miscCosts.map(a=>`<tr>
                    <td>${a.description}</td>
                    <td>${p(a.amountCents)}</td>
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
          <p class="muted">Letztes verwendetes Backup: ${n}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),jn(),ct(),et(),Oa()}function jn(){const o=M.querySelector("#theme-select"),l=M.querySelector("#open-years-modal"),f=M.querySelector("#open-evaluation-modal"),d=M.querySelector("#open-fixed-modal"),x=M.querySelector("#open-variable-fixed-modal"),T=M.querySelector("#open-dashboard-modal"),I=M.querySelector("#panel-modal-close"),A=M.querySelector("#panel-modal-backdrop"),L=M.querySelector("#open-unexported-change-log"),J=M.querySelector("#open-persistent-audit-log"),W=M.querySelector("#unexported-change-log-close"),G=M.querySelector("#unexported-change-log-backup"),ne=M.querySelector("#unexported-change-log-backdrop"),he=M.querySelector("#persistent-audit-log-close"),Ce=M.querySelector("#persistent-audit-log-backdrop"),Xe=M.querySelector("#new-year"),fe=M.querySelector("#create-year"),le=M.querySelector("#evaluation-query"),Ae=M.querySelector("#run-evaluation"),Se=M.querySelector("#save-evaluation"),ze=M.querySelector("#year-select"),Ot=M.querySelector("#month-select");o?.addEventListener("change",()=>{const E=o.value;Tr(E)&&da(E)}),l?.addEventListener("click",()=>{ut("years")}),f?.addEventListener("click",()=>{ut("evaluation")}),d?.addEventListener("click",()=>{ut("fixed")}),x?.addEventListener("click",()=>{ut("variable-fixed")}),T?.addEventListener("click",()=>{ut("dashboard")}),L?.addEventListener("click",()=>{dt()}),J?.addEventListener("click",()=>{Wn()}),W?.addEventListener("click",()=>{ca()}),G?.addEventListener("click",async()=>{try{await za()}catch(E){console.error("Backup-Export fehlgeschlagen",E),ue("Backup konnte nicht exportiert werden.","error")}}),ne?.addEventListener("click",E=>{E.target===ne&&ca()}),he?.addEventListener("click",()=>{ua()}),Ce?.addEventListener("click",E=>{E.target===Ce&&ua()}),M.querySelectorAll("[data-dashboard-tab]").forEach(E=>{E.addEventListener("click",()=>{const q=E.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(h.dashboardTab=q,te())})});const N=M.querySelector("#dashboard-year-select");N?.addEventListener("change",()=>{const E=Number.parseInt(N.value,10);Number.isInteger(E)&&(h.dashboardYear=E,te())}),I?.addEventListener("click",()=>{jt()}),A?.addEventListener("click",E=>{E.target===A&&jt()}),h.topModal&&window.setTimeout(()=>{I?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{W?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{he?.focus()},0),fe?.addEventListener("click",async()=>{const E=Number.parseInt(Xe?.value??"",10);if(!Number.isInteger(E)){alert("Bitte gültiges Jahr eingeben.");return}await ha(E)}),Ae?.addEventListener("click",()=>{Wa(le?.value??"")}),le?.addEventListener("keydown",E=>{E.key==="Enter"&&(E.preventDefault(),Wa(le.value))}),Se?.addEventListener("click",async()=>{await Me()}),M.querySelectorAll("[data-remove-saved-evaluation]").forEach(E=>{E.addEventListener("click",async()=>{const q=E.dataset.removeSavedEvaluation;q&&await ta(q)})}),ze?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ze.value,10),h.selectedMonth=Cn(),te()}),Ot?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Ot.value,10),te()});const It=M.querySelector("#fixed-template-name"),Oe=M.querySelector("#fixed-template-amount"),Wt=M.querySelector("#add-fixed-template"),Ft=M.querySelector("#cancel-fixed-template-edit"),ve=M.querySelector("#annual-variable-fixed-name"),vt=M.querySelector("#annual-variable-fixed-date"),Ie=M.querySelector("#annual-variable-fixed-amount"),We=M.querySelector("#add-annual-variable-fixed-template");Wt?.addEventListener("click",async()=>{const E=It?.value??"",q=qe(Oe?.value??"0");await Is(E,q),It&&(It.value=""),Oe&&(Oe.value="")}),Ft?.addEventListener("click",()=>{qn()}),We?.addEventListener("click",async()=>{const E=ve?.value??"",q=vt?.value??"",wt=qe(Ie?.value??"0");await ga(E,q,wt),ve&&(ve.value=""),vt&&(vt.value=""),Ie&&(Ie.value="")}),M.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(E=>{E.addEventListener("click",async()=>{const q=E.dataset.removeAnnualVariableFixedTemplate;q&&await Fs(q)})}),M.querySelectorAll("[data-edit-fixed-template]").forEach(E=>{E.addEventListener("click",()=>{const q=E.dataset.editFixedTemplate;q&&fn(q)})}),M.querySelectorAll("[data-remove-fixed-template]").forEach(E=>{E.addEventListener("click",async()=>{const q=E.dataset.removeFixedTemplate;q&&await pn(q)})}),M.querySelectorAll("[data-day-food]").forEach(E=>{E.addEventListener("click",q=>{q.preventDefault(),E.blur(),it(E)}),E.addEventListener("change",async()=>{const q=E.dataset.dayFood;q&&await rn(q,"foodCents",qe(E.value))})}),M.querySelectorAll("[data-day-going]").forEach(E=>{E.addEventListener("click",q=>{q.preventDefault(),E.blur(),it(E)}),E.addEventListener("change",async()=>{const q=E.dataset.dayGoing;q&&await rn(q,"goingOutCents",qe(E.value))})}),M.querySelectorAll("[data-fixed-actual]").forEach(E=>{E.addEventListener("click",q=>{q.preventDefault(),E.blur(),it(E)}),E.addEventListener("change",async()=>{const q=E.dataset.fixedActual;q&&await ls(q,qe(E.value))})}),M.querySelectorAll("[data-fixed-planned]").forEach(E=>{E.addEventListener("click",q=>{q.preventDefault(),E.blur(),it(E)}),E.addEventListener("change",async()=>{const q=E.dataset.fixedPlanned;q&&await $n(q,qe(E.value))})});const tt=M.querySelector("#fixed-budget");tt?.addEventListener("click",E=>{E.preventDefault(),tt.blur(),it(tt)}),tt?.addEventListener("change",async()=>{await Ye(qe(tt.value))});const Ke=M.querySelector("#food-budget");Ke?.addEventListener("click",E=>{E.preventDefault(),Ke.blur(),it(Ke)}),Ke?.addEventListener("change",async()=>{await Sn(qe(Ke.value))});const nt=M.querySelector("#going-out-budget");nt?.addEventListener("click",E=>{E.preventDefault(),nt.blur(),it(nt)}),nt?.addEventListener("change",async()=>{await on(qe(nt.value))}),M.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{_s()});const Et=M.querySelector("#misc-budget");Et?.addEventListener("click",E=>{E.preventDefault(),Et.blur(),it(Et)}),Et?.addEventListener("change",async()=>{await us(qe(Et.value))});const ht=M.querySelector("#variable-budget");ht?.addEventListener("click",E=>{E.preventDefault(),ht.blur(),it(ht)}),ht?.addEventListener("change",async()=>{await Rn(qe(ht.value))});const Ct=M.querySelector("#variable-position-name"),Bt=M.querySelector("#variable-position-budget"),Vn=M.querySelector("#add-variable-position"),Fe=M.querySelector("#add-variable-position-recurring"),ke=M.querySelector("#misc-description"),De=M.querySelector("#misc-amount"),at=M.querySelector("#add-misc"),Re=M.querySelector("#add-misc-recurring"),lt=M.querySelector("#income-description"),xt=M.querySelector("#income-source"),Dt=M.querySelector("#income-amount"),Zt=M.querySelector("#add-income"),kt=M.querySelector("#add-income-recurring"),Mt=M.querySelector("#fixed-cost-name"),Gt=M.querySelector("#fixed-cost-budget"),Bn=M.querySelector("#add-fixed-cost"),xe=M.querySelector("#carryover-override");xe?.addEventListener("click",E=>{E.preventDefault(),xe.blur(),it(xe)}),xe?.addEventListener("change",async()=>{const E=xe.value;if(!E.trim()){await ba(null);return}await ba(qe(E))}),Bn?.addEventListener("click",async()=>{const E=qe(Gt?.value??"0");await cs(Mt?.value??"",E),Mt&&(Mt.value=""),Gt&&(Gt.value="")}),Vn?.addEventListener("click",async()=>{const E=qe(Bt?.value??"0");await ya(Ct?.value??"",E,!1),Ct&&(Ct.value=""),Bt&&(Bt.value="")}),Fe?.addEventListener("click",async()=>{const E=qe(Bt?.value??"0");await ya(Ct?.value??"",E,!0),Ct&&(Ct.value=""),Bt&&(Bt.value="")}),at?.addEventListener("click",async()=>{const E=qe(De?.value??"0");await de(ke?.value??"",E,!1),ke&&(ke.value=""),De&&(De.value="")}),Re?.addEventListener("click",async()=>{const E=qe(De?.value??"0");await de(ke?.value??"",E,!0),ke&&(ke.value=""),De&&(De.value="")}),Zt?.addEventListener("click",async()=>{const E=qe(Dt?.value??"0"),q=xt?.value,wt=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await Ya(lt?.value??"",E,wt,!1),lt&&(lt.value=""),Dt&&(Dt.value=""),xt&&(xt.value="salary")}),kt?.addEventListener("click",async()=>{const E=qe(Dt?.value??"0"),q=xt?.value,wt=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await Ya(lt?.value??"",E,wt,!0),lt&&(lt.value=""),Dt&&(Dt.value=""),xt&&(xt.value="salary")}),M.querySelectorAll("[data-income-source]").forEach(E=>{E.addEventListener("change",async()=>{const q=E.dataset.incomeSource;if(!q)return;const wt=E.value;await xa(q,wt==="balance"||wt==="fresh"||wt==="salary"?wt:void 0)})}),M.querySelectorAll("[data-variable-position-budget]").forEach(E=>{E.addEventListener("click",q=>{q.preventDefault(),E.blur(),it(E)}),E.addEventListener("change",async()=>{const q=E.dataset.variablePositionBudget;q&&await ds(q,qe(E.value))})}),M.querySelectorAll("[data-variable-position-actual]").forEach(E=>{E.addEventListener("click",q=>{q.preventDefault(),E.blur(),it(E)}),E.addEventListener("change",async()=>{const q=E.dataset.variablePositionActual;q&&await En(q,qe(E.value))})}),M.querySelectorAll("[data-remove-variable-position]").forEach(E=>{E.addEventListener("click",async()=>{const q=E.dataset.removeVariablePosition;q&&await Ca(q)})}),M.querySelectorAll("[data-move-variable-position-next]").forEach(E=>{E.addEventListener("click",async()=>{const q=E.dataset.moveVariablePositionNext;q&&await hs(q)})}),M.querySelectorAll("[data-remove-fixed]").forEach(E=>{E.addEventListener("click",async()=>{const q=E.dataset.removeFixed;q&&await Va(q)})}),M.querySelectorAll("[data-remove-income]").forEach(E=>{E.addEventListener("click",async()=>{const q=E.dataset.removeIncome;q&&await ea(q)})}),M.querySelectorAll("[data-remove-misc]").forEach(E=>{E.addEventListener("click",async()=>{const q=E.dataset.removeMisc;q&&await fs(q)})});const Ge=M.querySelector("#backup-export"),Nt=M.querySelector("#backup-import");M.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Ge?.addEventListener("click",async()=>{await za()}),Nt?.addEventListener("change",async()=>{const E=Nt.files?.[0];if(E){try{await ps(E)}catch(q){console.error("Backup-Import fehlgeschlagen",q),ue("Backup konnte nicht importiert werden.","error")}Nt.value=""}})}return{init:Os}}const Si="modulepreload",Ei=function(M){return"/habu26/"+M},Ar={},Bi=function(h,Pe,H){let oe=Promise.resolve();if(Pe&&Pe.length>0){let st=function(Le){return Promise.all(Le.map(se=>Promise.resolve(se).then(Qe=>({status:"fulfilled",value:Qe}),Qe=>({status:"rejected",reason:Qe}))))};var be=st;document.getElementsByTagName("link");const re=document.querySelector("meta[property=csp-nonce]"),ce=re?.nonce||re?.getAttribute("nonce");oe=st(Pe.map(Le=>{if(Le=Ei(Le),Le in Ar)return;Ar[Le]=!0;const se=Le.endsWith(".css"),Qe=se?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Le}"]${Qe}`))return;const Ze=document.createElement("link");if(Ze.rel=se?"stylesheet":Si,se||(Ze.as="script"),Ze.crossOrigin="",Ze.href=Le,ce&&Ze.setAttribute("nonce",ce),document.head.appendChild(Ze),se)return new Promise((et,ct)=>{Ze.addEventListener("load",et),Ze.addEventListener("error",()=>ct(new Error(`Unable to preload CSS for ${Le}`)))})}))}function ae(re){const ce=new Event("vite:preloadError",{cancelable:!0});if(ce.payload=re,window.dispatchEvent(ce),!ce.defaultPrevented)throw re}return oe.then(re=>{for(const ce of re||[])ce.status==="rejected"&&ae(ce.reason);return h().catch(ae)})};function Mi(M={}){const{immediate:h=!1,onNeedRefresh:Pe,onOfflineReady:H,onRegistered:oe,onRegisteredSW:ae,onRegisterError:be}=M;let re,ce;const st=async(se=!0)=>{await ce};async function Le(){if("serviceWorker"in navigator){if(re=await Bi(async()=>{const{Workbox:se}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:se}},[]).then(({Workbox:se})=>new se("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(se=>{be?.(se)}),!re)return;re.addEventListener("activated",se=>{(se.isUpdate||se.isExternal)&&window.location.reload()}),re.addEventListener("installed",se=>{se.isUpdate||H?.()}),re.register({immediate:h}).then(se=>{ae?ae("/habu26/sw.js",se):oe?.(se)}).catch(se=>{be?.(se)})}}return ce=Le(),st}function _i(){Mi({immediate:!0})}const Ir=document.getElementById("app");if(!Ir)throw new Error("App-Container nicht gefunden.");$i(Ir).init();_i();
