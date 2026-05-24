(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const he of document.querySelectorAll('link[rel="modulepreload"]'))X(he);new MutationObserver(he=>{for(const ae of he)if(ae.type==="childList")for(const Ce of ae.addedNodes)Ce.tagName==="LINK"&&Ce.rel==="modulepreload"&&X(Ce)}).observe(document,{childList:!0,subtree:!0});function Se(he){const ae={};return he.integrity&&(ae.integrity=he.integrity),he.referrerPolicy&&(ae.referrerPolicy=he.referrerPolicy),he.crossOrigin==="use-credentials"?ae.credentials="include":he.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function X(he){if(he.ep)return;he.ep=!0;const ae=Se(he);fetch(he.href,ae)}})();const hi=[1,2,3,4,5,6,7,8,9,10,11,12];function ts(){return new Date().toISOString()}function wt(B){const h=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${h}`}function pi(B,h){const Se=new Date(B,h,0).getDate(),X=[];for(let he=1;he<=Se;he+=1){const ae=new Date(Date.UTC(B,h-1,he));X.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return X}function fi(B){return B.map(h=>({id:wt("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Mr(B,h,Se){const X=h.reduce((ae,Ce)=>ae+Ce.plannedCents,0),he=hi.map(ae=>({month:ae,days:pi(B,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:fi(h),fixedBudgetCents:X,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:ts(),templateVersion:Se,months:he}}function Ys(B,h){return{id:wt("expense"),description:B,amountCents:h,createdAt:ts()}}function _r(B,h,Se){const X={id:wt("income"),description:B,amountCents:h,createdAt:ts()};return Se?{...X,incomeSource:Se}:X}function ks(B,h){return B.toLocaleLowerCase("de-DE").includes(h)}function Tr(B,h,Se,X){const he=h.trim(),ae=he.toLocaleLowerCase("de-DE");if(!ae)return{id:wt("search_eval"),keyword:"",keywordNormalized:"",createdAt:ts(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let Ce=0,se=0,fe=0,Je=0,je=0;const ie=Math.max(1,Math.min(12,X)),lt=[],nt=[];return B.slice().sort((De,gt)=>De.year-gt.year).forEach(De=>{let gt=0,nn=0,Ln=0,an=0;De.months.slice().sort((bt,ct)=>bt.month-ct.month).forEach(bt=>{let ct=0,yt=0;if(bt.fixedCosts.forEach(pt=>{ks(pt.name,ae)&&(ct+=1,yt+=pt.actualCents)}),bt.variableCosts.forEach(pt=>{ks(pt.description,ae)&&(ct+=1,yt+=pt.amountCents)}),bt.variablePositions.forEach(pt=>{ks(pt.name,ae)&&(ct+=1,yt+=pt.actualCents)}),bt.miscCosts.forEach(pt=>{ks(pt.description,ae)&&(ct+=1,yt+=pt.amountCents)}),ct<=0)return;gt+=ct,nn+=yt,(De.year<Se||De.year===Se&&bt.month<=ie)&&(an+=1,Ln+=yt),Ce+=ct,se+=yt,(De.year<Se||De.year===Se&&bt.month<=ie)&&(Je+=1,je+=yt),nt.push({year:De.year,month:bt.month,hitCount:ct,totalCents:yt})}),!(gt<=0)&&(De.year===Se&&(fe+=nn),lt.push({year:De.year,hitCount:gt,totalCents:nn,monthsWithHits:an,monthAverageCents:an>0?Math.round(Ln/an):0}))}),{id:wt("search_eval"),keyword:he,keywordNormalized:ae,createdAt:ts(),totalHitCount:Ce,totalCents:se,currentYearCents:fe,monthsWithHits:Je,monthAverageCents:Je>0?Math.round(je/Je):0,yearRows:lt,monthRows:nt}}var vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mi(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var ws={exports:{}},gi=ws.exports,Ar;function bi(){return Ar||(Ar=1,(function(B,h){((Se,X)=>{B.exports=X()})(gi,function(){var Se=function(e,t){return(Se=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},X=function(){return(X=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function he(e,t,n){for(var s,r=0,i=t.length;r<i;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:vi,Ce=Object.keys,se=Array.isArray;function fe(e,t){return typeof t=="object"&&Ce(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var Je=Object.getPrototypeOf,je={}.hasOwnProperty;function ie(e,t){return je.call(e,t)}function lt(e,t){typeof t=="function"&&(t=t(Je(e))),(typeof Reflect>"u"?Ce:Reflect.ownKeys)(t).forEach(function(n){De(e,n,t[n])})}var nt=Object.defineProperty;function De(e,t,n,s){nt(e,t,fe(n&&ie(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function gt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),De(e.prototype,"constructor",e),{extend:lt.bind(null,e.prototype)}}}}var nn=Object.getOwnPropertyDescriptor,Ln=[].slice;function an(e,t,n){return Ln.call(e,t,n)}function bt(e,t){return t(e)}function ct(e){if(!e)throw new Error("Assertion Failed")}function yt(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function Ht(e,t){if(typeof t=="string"&&ie(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var i=Ht(e,t[s]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:Ht(c,t.substr(u+1))}function ht(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){ct(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)ht(e,t[s],n[s])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?se(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:ht(c=(c=e[i])&&ie(e,i)?c:e[i]={},u,n)):n===void 0?se(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function pt(e){var t,n={};for(t in e)ie(e,t)&&(n[t]=e[t]);return n}var Es=[].concat;function ja(e){return Es.apply([],e)}var Ft="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ja([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),ns=new Set(Ft.map(function(e){return ae[e]})),Zn=null;function Ct(e){return Zn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=Zn.get(n);if(s)return s;if(se(n)){s=[],Zn.set(n,s);for(var r=0,i=n.length;r<i;++r)s.push(t(n[r]))}else if(ns.has(n.constructor))s=n;else{var c,u=Je(n);for(c in s=u===Object.prototype?{}:Object.create(u),Zn.set(n,s),n)ie(n,c)&&(s[c]=t(n[c]))}return s})(e),Zn=null,e}var ea={}.toString;function Va(e){return ea.call(e).slice(8,-1)}var Ya=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Bs=typeof Ya=="symbol"?function(e){var t;return e!=null&&(t=e[Ya])&&t.apply(e)}:function(){return null};function un(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var at={};function oe(e){var t,n,s,r;if(arguments.length===1){if(se(e))return e.slice();if(this===at&&typeof e=="string")return[e];if(r=Bs(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var sn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ft=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],$t=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ft),as={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function En(e,t){this.name=e,this.message=t}function ss(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function ft(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=ss(e,t)}function Kn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=ss(e,this.failures)}gt(En).from(Error).extend({toString:function(){return this.name+": "+this.message}}),gt(ft).from(En),gt(Kn).from(En);var ya=$t.reduce(function(e,t){return e[t]=t+"Error",e},{}),Ms=En,ee=$t.reduce(function(e,t){var n=t+"Error";function s(r,i){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(i?`
 `+i:""),this.inner=i||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=as[t]||n,this.inner=null)}return gt(s).from(Ms),e[t]=s,e},{}),rs=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,Ft.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));Ft=$t.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function Ee(){}function ta(e){return e}function _s(e,t){return e==null||e===ta?t:function(n){return t(e(n))}}function Bn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function is(e,t){return e===Ee?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Bn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?Bn(r,this.onerror):r),i!==void 0?i:n}}function Ts(e,t){return e===Ee?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Bn(n,this.onsuccess):n),s&&(this.onerror=this.onerror?Bn(s,this.onerror):s)}}function os(e,t){return e===Ee?t:function(r){var s=e.apply(this,arguments),r=(fe(r,s),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Bn(r,this.onsuccess):r),i&&(this.onerror=this.onerror?Bn(i,this.onerror):i),s===void 0?c===void 0?void 0:c:fe(s,c)}}function As(e,t){return e===Ee?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function na(e,t){return e===Ee?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,i=new Array(r);r--;)i[r]=arguments[r];return n.then(function(){return t.apply(s,i)})}return t.apply(this,arguments)}}Ft.ModifyError=ft,Ft.DexieError=En,Ft.BulkError=Kn;var Dt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function qn(e){Dt=e}var Rn={},jn=100,Ne=typeof Promise>"u"?[]:($t=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ne=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Je(Ne),$t]:[$t,Je($t),$t]),$t=Ne[0],In=Ne[1],In=In&&In.then,Vt=$t&&$t.constructor,Vn=!!Ne[2],dn=function(e,t){ra.push([e,t]),Yn&&(queueMicrotask(zn),Yn=!1)},za=!0,Yn=!0,rn=[],aa=[],sa=ta,hn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ee,pgp:!1,env:{},finalize:Ee},W=hn,ra=[],Nt=0,pn=[];function Y(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=W;if(typeof e!="function"){if(e!==Rn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Ca(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(i){if(s._state===null){if(i===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&vn();i&&typeof i.then=="function"?n(s,function(u,b){i instanceof Y?i._then(u,b):i.then(u,b)}):(s._state=!0,s._value=i,Xe(s)),c&&Mn()}},Ca.bind(null,s))}catch(i){Ca(s,i)}})(this,e)}var fn={get:function(){var e=W,t=ka;function n(s,r){var i=this,c=!e.global&&(e!==W||t!==ka),u=c&&!gn(),b=new Y(function($,C){St(i,new ls(cs(s,e,c,u),cs(r,e,c,u),$,C,e))});return this._consoleTask&&(b._consoleTask=this._consoleTask),b}return n.prototype=Rn,n},set:function(e){De(this,"then",e&&e.prototype===Rn?fn:{get:function(){return e},set:fn.set})}};function ls(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function Ca(e,t){var n,s;aa.push(t),e._state===null&&(n=e._lib&&vn(),t=sa(t),e._state=!1,e._value=t,s=e,rn.some(function(r){return r._value===s._value})||rn.push(s),Xe(e),n)&&Mn()}function Xe(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)St(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),Nt===0&&(++Nt,dn(function(){--Nt==0&&ia()},[]))}function St(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Nt,dn(ge,[n,e,t])}}function ge(e,t,n){try{var s,r=t._value;!t._state&&aa.length&&(aa=[]),s=Dt&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||aa.indexOf(r)!==-1||(i=>{for(var c=rn.length;c;)if(rn[--c]._value===i._value)return rn.splice(c,1)})(t),n.resolve(s)}catch(i){n.reject(i)}finally{--Nt==0&&ia(),--n.psd.ref||n.psd.finalize()}}function zn(){_n(hn,function(){vn()&&Mn()})}function vn(){var e=za;return Yn=za=!1,e}function Mn(){var e,t,n;do for(;0<ra.length;)for(e=ra,ra=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<ra.length);Yn=za=!0}function ia(){for(var e=rn,t=(rn=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),pn.slice(0)),n=t.length;n;)t[--n]()}function oa(e){return new Y(Rn,!1,e)}function ke(e,t){var n=W;return function(){var s=vn(),r=W;try{return bn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{bn(r,!1),s&&Mn()}}}lt(Y.prototype,{then:fn,_then:function(e,t){St(this,new ls(null,null,e,t,W))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:oa)(s)}):this.then(null,function(s){return(s&&s.name===t?n:oa)(s)}))},finally:function(e){return this.then(function(t){return Y.resolve(e()).then(function(){return t})},function(t){return Y.resolve(e()).then(function(){return oa(t)})})},timeout:function(e,t){var n=this;return e<1/0?new Y(function(s,r){var i=setTimeout(function(){return r(new ee.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&De(Y.prototype,Symbol.toStringTag,"Dexie.Promise"),hn.env=Wa(),lt(Y,{all:function(){var e=oe.apply(null,arguments).map(wa);return new Y(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,i){return Y.resolve(r).then(function(c){e[i]=c,--s||t(e)},n)})})},resolve:function(e){return e instanceof Y?e:e&&typeof e.then=="function"?new Y(function(t,n){e.then(t,n)}):new Y(Rn,!0,e)},reject:oa,race:function(){var e=oe.apply(null,arguments).map(wa);return new Y(function(t,n){e.map(function(s){return Y.resolve(s).then(t,n)})})},PSD:{get:function(){return W},set:function(e){return W=e}},totalEchoes:{get:function(){return ka}},newPSD:mn,usePSD:_n,scheduler:{get:function(){return dn},set:function(e){dn=e}},rejectionMapper:{get:function(){return sa},set:function(e){sa=e}},follow:function(e,t){return new Y(function(n,s){return mn(function(r,i){var c=W;c.unhandleds=[],c.onunhandled=i,c.finalize=Bn(function(){var u,b=this;u=function(){b.unhandleds.length===0?r():i(b.unhandleds[0])},pn.push(function $(){u(),pn.splice(pn.indexOf($),1)}),++Nt,dn(function(){--Nt==0&&ia()},[])},c.finalize),e()},t,n,s)})}}),Vt&&(Vt.allSettled&&De(Y,"allSettled",function(){var e=oe.apply(null,arguments).map(wa);return new Y(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,i){return Y.resolve(r).then(function(c){return s[i]={status:"fulfilled",value:c}},function(c){return s[i]={status:"rejected",reason:c}}).then(function(){return--n||t(s)})})})}),Vt.any&&typeof AggregateError<"u"&&De(Y,"any",function(){var e=oe.apply(null,arguments).map(wa);return new Y(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(i,c){return Y.resolve(i).then(function(u){return t(u)},function(u){r[c]=u,--s||n(new AggregateError(r))})})})}),Vt.withResolvers)&&(Y.withResolvers=Vt.withResolvers);var _e={awaits:0,echoes:0,id:0},Ps=0,la=[],xa=0,ka=0,Os=0;function mn(e,c,n,s){var r=W,i=Object.create(r),c=(i.parent=r,i.ref=0,i.global=!1,i.id=++Os,hn.env,i.env=Vn?{Promise:Y,PromiseProp:{value:Y,configurable:!0,writable:!0},all:Y.all,race:Y.race,allSettled:Y.allSettled,any:Y.any,resolve:Y.resolve,reject:Y.reject}:{},c&&fe(i,c),++r.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},_n(i,e,n,s));return i.ref===0&&i.finalize(),c}function Wn(){return _e.id||(_e.id=++Ps),++_e.awaits,_e.echoes+=jn,_e.id}function gn(){return!!_e.awaits&&(--_e.awaits==0&&(_e.id=0),_e.echoes=_e.awaits*jn,!0)}function wa(e){return _e.echoes&&e&&e.constructor===Vt?(Wn(),e.then(function(t){return gn(),t},function(t){return gn(),Ge(t)})):e}function Is(){var e=la[la.length-1];la.pop(),bn(e,!1)}function bn(e,t){var n,s,r=W;(t?!_e.echoes||xa++&&e===W:!xa||--xa&&e===W)||queueMicrotask(t?(function(i){++ka,_e.echoes&&--_e.echoes!=0||(_e.echoes=_e.awaits=_e.id=0),la.push(W),bn(i,!0)}).bind(null,e):Is),e!==W&&(W=e,r===hn&&(hn.env=Wa()),Vn)&&(n=hn.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(ae,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function Wa(){var e=ae.Promise;return Vn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function _n(e,t,n,s,r){var i=W;try{return bn(e,!0),t(n,s,r)}finally{bn(i,!1)}}function cs(e,t,n,s){return typeof e!="function"?e:function(){var r=W;n&&Wn(),bn(t,!0);try{return e.apply(this,arguments)}finally{bn(r,!1),s&&queueMicrotask(gn)}}}function Ga(e){Promise===Vt&&_e.echoes===0?xa===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+In).indexOf("[native code]")===-1&&(Wn=gn=Ee);var Ge=Y.reject,Tn="￿",on="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",us="String expected.",Gn=[],$a="__dbnames",An="readonly",Sa="readwrite";function yn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ds={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ea(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=Ct(t))[e],t}}function hs(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ve(e,t){try{var n=Ua(e),s=Ua(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=ps(e),i=ps(t),c=r.length,u=i.length,b=c<u?c:u,$=0;$<b;++$)if(r[$]!==i[$])return r[$]<i[$]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var C=e,m=t,k=C.length,w=m.length,x=k<w?k:w,g=0;g<x;++g){var E=ve(C[g],m[g]);if(E!==0)return E}return k===w?0:k<w?-1:1}}catch{}return NaN}function Ua(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Va(e))==="ArrayBuffer")?"binary":t}function ps(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Ba(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,i){return!n.failures[i]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}Ha.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(se(n))return he(he([],se(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(se(s))return se(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var ca=Ha;function Ha(e){this["@@propmod"]=e}function fs(e,t){for(var n=Ce(t),s=n.length,r=!1,i=0;i<s;++i){var c=n[i],u=t[c],b=Ht(e,c);u instanceof ca?(ht(e,c,u.execute(b)),r=!0):b!==u&&(ht(e,c,u),r=!0)}return r}Te.prototype._trans=function(e,t,n){var s=this._tx||W.trans,r=this.name,i=Dt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c($,C,m){if(m.schema[r])return t(m.idbtrans,m);throw new ee.NotFound("Table "+r+" not part of transaction")}var u=vn();try{var b=s&&s.db._novip===this.db._novip?s===W.trans?s._promise(e,c,n):mn(function(){return s._promise(e,c,n)},{trans:s,transless:W.transless||W}):(function $(C,m,k,w){if(C.idbdb&&(C._state.openComplete||W.letThrough||C._vip)){var x=C._createTransaction(m,k,C._dbSchema);try{x.create(),C._state.PR1398_maxLoop=3}catch(g){return g.name===ya.InvalidState&&C.isOpen()&&0<--C._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),C.close({disableAutoOpen:!1}),C.open().then(function(){return $(C,m,k,w)})):Ge(g)}return x._promise(m,function(g,E){return mn(function(){return W.trans=x,w(g,E,x)})}).then(function(g){if(m==="readwrite")try{x.idbtrans.commit()}catch{}return m==="readonly"?g:x._completion.then(function(){return g})})}if(C._state.openComplete)return Ge(new ee.DatabaseClosed(C._state.dbOpenError));if(!C._state.isBeingOpened){if(!C._state.autoOpen)return Ge(new ee.DatabaseClosed);C.open().catch(Ee)}return C._state.dbReadyPromise.then(function(){return $(C,m,k,w)})})(this.db,e,[this.name],c);return i&&(b._consoleTask=i,b=b.catch(function($){return console.trace($),Ge($)})),b}finally{u&&Mn()}},Te.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ge(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},Te.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(se(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Ce(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function($){return 0<=u.keyPath.indexOf($)})){for(var b=0;b<t.length;++b)if(t.indexOf(u.keyPath[b])===-1)return!1;return!0}return!1}).sort(function(u,b){return u.keyPath.length-b.keyPath.length})[0];if(n&&this.db._maxKey!==Tn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&Dt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(u,b){return ve(u,b)===0}var c=t.reduce(function(C,b){var $=C[0],C=C[1],m=s[b],k=e[b];return[$||m,$||!m?yn(C,m&&m.multi?function(w){return w=Ht(w,b),se(w)&&w.some(function(x){return r(k,x)})}:function(w){return r(k,Ht(w,b))}):C]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Te.prototype.filter=function(e){return this.toCollection().and(e)},Te.prototype.count=function(e){return this.toCollection().count(e)},Te.prototype.offset=function(e){return this.toCollection().offset(e)},Te.prototype.limit=function(e){return this.toCollection().limit(e)},Te.prototype.each=function(e){return this.toCollection().each(e)},Te.prototype.toArray=function(e){return this.toCollection().toArray(e)},Te.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Te.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,se(e)?"[".concat(e.join("+"),"]"):e))},Te.prototype.reverse=function(){return this.toCollection().reverse()},Te.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof hs&&(e=(c=>{var u=C,b=c;if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function $(){this.constructor=u}function C(){return c!==null&&c.apply(this,arguments)||this}return Se(u,b),u.prototype=b===null?Object.create(b):($.prototype=b.prototype,new $),Object.defineProperty(C.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),C.prototype.table=function(){return n},C})(e)),new Set),r=e.prototype;r;r=Je(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function i(c){if(!c)return c;var u,b=Object.create(e.prototype);for(u in c)if(!s.has(u))try{b[u]=c[u]}catch{}return b}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},Te.prototype.defineClass=function(){return this.mapToClass(function(e){fe(this,e)})},Te.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=Ea(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{ht(e,i,u)}catch{}return u})},Te.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(i){var c=i??{};return fs(c,t),s&&ht(c,s,e),n.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):!!i})})})},Te.prototype.update=function(e,t){return typeof e!="object"||se(e)?this.where(":id").equals(e).modify(t):(e=Ht(e,this.schema.primKey.keyPath))===void 0?Ge(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Te.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=Ea(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{ht(e,i,u)}catch{}return u})},Te.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return Ba(t,[e],s)}).then(function(s){return s.numFailures?Y.reject(s.failures[0]):void 0})})},Te.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:ds}).then(function(n){return Ba(e,null,n)})}).then(function(t){return t.numFailures?Y.reject(t.failures[0]):void 0})},Te.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Te.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,i=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=s.schema.primKey,$=u.auto,u=u.keyPath;if(u&&r)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,$=u&&$?e.map(Ea(u)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:$,wantResults:i}).then(function(C){var m=C.numFailures,k=C.failures;if(m===0)return i?C.results:C.lastResult;throw new Kn("".concat(s.name,".bulkAdd(): ").concat(m," of ").concat(b," operations failed"),k)})})},Te.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,i=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=s.schema.primKey,$=u.auto,u=u.keyPath;if(u&&r)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,$=u&&$?e.map(Ea(u)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:$,wantResults:i}).then(function(C){var m=C.numFailures,k=C.failures;if(m===0)return i?C.results:C.lastResult;throw new Kn("".concat(s.name,".bulkPut(): ").concat(m," of ").concat(b," operations failed"),k)})})},Te.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:s,cache:"clone"}).then(function(u){var b=[],$=[],C=(e.forEach(function(m,k){var w=m.key,x=m.changes,g=u[k];if(g){for(var E=0,_=Object.keys(x);E<_.length;E++){var S=_[E],A=x[S];if(S===t.schema.primKey.keyPath){if(ve(A,w)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ht(g,S,A)}i.push(k),b.push(w),$.push(g)}}),b.length);return n.mutate({trans:c,type:"put",keys:b,values:$,updates:{keys:s,changeSpecs:r}}).then(function(m){var k=m.numFailures,w=m.failures;if(k===0)return C;for(var x=0,g=Object.keys(w);x<g.length;x++){var E,_=g[x],S=i[Number(_)];S!=null&&(E=w[_],delete w[_],w[S]=E)}throw new Kn("".concat(t.name,".bulkUpdate(): ").concat(k," of ").concat(C," operations failed"),w)})})})},Te.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Ba(t,e,r)})}).then(function(s){var r=s.numFailures,i=s.failures;if(r===0)return s.lastResult;throw new Kn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),i)})};var vs=Te;function Te(){}function ua(e){function t(c,u){if(u){for(var b=arguments.length,$=new Array(b-1);--b;)$[b-1]=arguments[b];return n[c].subscribe.apply(null,$),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var s=1,r=arguments.length;s<r;++s)i(arguments[s]);return t;function i(c,u,b){var $,C;if(typeof c!="object")return u=u||As,C={subscribers:[],fire:b=b||Ee,subscribe:function(m){C.subscribers.indexOf(m)===-1&&(C.subscribers.push(m),C.fire=u(C.fire,m))},unsubscribe:function(m){C.subscribers=C.subscribers.filter(function(k){return k!==m}),C.fire=C.subscribers.reduce(u,b)}},n[c]=t[c]=C;Ce($=c).forEach(function(m){var k=$[m];if(se(k))i(m,$[m][0],$[m][1]);else{if(k!=="asap")throw new ee.InvalidArgument("Invalid event config");var w=i(m,ta,function(){for(var x=arguments.length,g=new Array(x);x--;)g[x]=arguments[x];w.subscribers.forEach(function(E){yt(function(){E.apply(null,g)})})})}})}}function Un(e,t){return gt(t).from({prototype:e}),t}function Hn(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ja(e,t){e.filter=yn(e.filter,t)}function ne(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return yn(s(),t())}:t,e.justLimit=n&&!s}function Ma(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function o(e,t,n){var s=Ma(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function l(e,t,n,s){var r,i,c=e.replayFilter?yn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},i=function(u,b,$){var C,m;c&&!c(b,$,function(k){return b.stop(k)},function(k){return b.fail(k)})||((m=""+(C=b.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(C)),ie(r,m))||(r[m]=!0,t(u,b,$))},Promise.all([e.or._iterate(i,n),p(o(e,s,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):p(o(e,s,n),yn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function p(e,t,n,s){var r=ke(s?function(i,c,u){return n(s(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=Ee},function(u){i.fail(u),c=Ee})||r(i.value,i,function(u){return c=u}),c()})})}v.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ge.bind(null,n.error)):n.table._trans("readonly",e).then(t)},v.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ge.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},v.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=yn(t.algorithm,e)},v.prototype._iterate=function(e,t){return l(this._ctx,e,t,this._ctx.table.core)},v.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&fe(n,e),t._ctx=n,t},v.prototype.raw=function(){return this._ctx.valueMapper=null,this},v.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return l(t,e,n,t.table.core)})},v.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,i=r.table.core;return Hn(r,!0)?i.count({trans:n,query:{index:Ma(r,i.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,l(r,function(){return++s,!1},n,i).then(function(){return s}))}).then(e)},v.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function i(b,$){return $?i(b[n[$]],$-1):b[s]}var c=this._ctx.dir==="next"?1:-1;function u(b,$){return ve(i(b,r),i($,r))*c}return this.toArray(function(b){return b.sort(u)}).then(t)},v.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,i,c=t._ctx;return c.dir==="next"&&Hn(c,!0)&&0<c.limit?(s=c.valueMapper,r=Ma(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(u){return u=u.result,s?u.map(s):u})):(i=[],l(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},v.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,Hn(t)?ne(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):ne(t,function(){var n=e;return function(){return--n<0}})),this},v.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),ne(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},v.prototype.until=function(e,t){return Ja(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},v.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},v.prototype.last=function(e){return this.reverse().first(e)},v.prototype.filter=function(e){var t;return Ja(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=yn(t.isMatch,e),this},v.prototype.and=function(e){return this.filter(e)},v.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},v.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},v.prototype.desc=function(){return this.reverse()},v.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},v.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},v.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},v.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},v.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&Hn(t,!0)&&0<t.limit)return this._read(function(s){var r=Ma(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},v.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},v.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},v.prototype.lastKey=function(e){return this.reverse().firstKey(e)},v.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Ja(this._ctx,function(s){var s=s.primaryKey.toString(),r=ie(e,s);return e[s]=!0,!r})),this},v.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(g,E){var _=E.failures;k+=g-E.numFailures;for(var S=0,A=Ce(_);S<A.length;S++){var F=A[S];m.push(_[F])}}var i=typeof e=="function"?e:function(g){return fs(g,e)},c=n.table.core,C=c.schema.primaryKey,u=C.outbound,b=C.extractKey,$=200,C=t.db._options.modifyChunkSize,m=(C&&($=typeof C=="object"?C[c.name]||C["*"]||200:C),[]),k=0,w=[],x=e===M;return t.clone().primaryKeys().then(function(g){function E(S){var A=Math.min($,g.length-S),F=g.slice(S,S+A);return(x?Promise.resolve([]):c.getMany({trans:s,keys:F,cache:"immutable"})).then(function(R){var j=[],O=[],U=u?[]:null,z=x?F:[];if(!x)for(var L=0;L<A;++L){var H=R[L],me={value:Ct(H),primKey:g[S+L]};i.call(me,me.value,me)!==!1&&(me.value==null?z.push(g[S+L]):u||ve(b(H),b(me.value))===0?(O.push(me.value),u&&U.push(g[S+L])):(z.push(g[S+L]),j.push(me.value)))}return Promise.resolve(0<j.length&&c.mutate({trans:s,type:"add",values:j}).then(function(le){for(var Q in le.failures)z.splice(parseInt(Q),1);r(j.length,le)})).then(function(){return(0<O.length||_&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:U,values:O,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(le){return r(O.length,le)})}).then(function(){return(0<z.length||_&&x)&&c.mutate({trans:s,type:"delete",keys:z,criteria:_,isAdditionalChunk:0<S}).then(function(le){return Ba(n.table,z,le)}).then(function(le){return r(z.length,le)})}).then(function(){return g.length>S+A&&E(S+$)})})}var _=Hn(n)&&n.limit===1/0&&(typeof e!="function"||x)&&{index:n.index,range:n.range};return E(0).then(function(){if(0<m.length)throw new ft("Error modifying one or more objects",m,k,w);return g.length})})})},v.prototype.delete=function(){var e=this._ctx,t=e.range;return!Hn(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(M):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(b){var u=b.failures,b=b.numFailures;if(b)throw new ft("Could not delete some values",Object.keys(u).map(function($){return u[$]}),i-b);return i-b})})})};var d=v;function v(){}var M=function(e,t){return t.value=null};function P(e,t){return e<t?-1:e===t?0:1}function D(e,t){return t<e?-1:e===t?0:1}function I(e,t,n){return e=e instanceof pe?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function G(e){return new e.Collection(e,function(){return te("")}).limit(0)}function V(w,t,n,s){var r,i,c,u,b,$,C,m=n.length;if(!n.every(function(g){return typeof g=="string"}))return I(w,us);function k(g){r=g==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},i=g==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=g==="next"?P:D;var E=n.map(function(_){return{lower:i(_),upper:r(_)}}).sort(function(_,S){return c(_.lower,S.lower)});u=E.map(function(_){return _.upper}),b=E.map(function(_){return _.lower}),C=($=g)==="next"?"":s}k("next");var w=new w.Collection(w,function(){return J(u[0],b[m-1]+s)}),x=(w._ondirectionchange=function(g){k(g)},0);return w._addAlgorithm(function(g,E,_){var S=g.key;if(typeof S=="string"){var A=i(S);if(t(A,b,x))return!0;for(var F=null,R=x;R<m;++R){var j=((O,U,z,L,H,me)=>{for(var le=Math.min(O.length,L.length),Q=-1,ue=0;ue<le;++ue){var qe=U[ue];if(qe!==L[ue])return H(O[ue],z[ue])<0?O.substr(0,ue)+z[ue]+z.substr(ue+1):H(O[ue],L[ue])<0?O.substr(0,ue)+L[ue]+z.substr(ue+1):0<=Q?O.substr(0,Q)+U[Q]+z.substr(Q+1):null;H(O[ue],qe)<0&&(Q=ue)}return le<L.length&&me==="next"?O+z.substr(O.length):le<O.length&&me==="prev"?O.substr(0,z.length):Q<0?null:O.substr(0,Q)+L[Q]+z.substr(Q+1)})(S,A,u[R],b[R],c,$);j===null&&F===null?x=R+1:(F===null||0<c(F,j))&&(F=j)}E(F!==null?function(){g.continue(F+C)}:_)}return!1}),w}function J(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function te(e){return{type:1,lower:e,upper:e}}Object.defineProperty(re.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),re.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?G(this):new this.Collection(this,function(){return J(e,t,!n,!s)})}catch{return I(this,on)}},re.prototype.equals=function(e){return e==null?I(this,on):new this.Collection(this,function(){return te(e)})},re.prototype.above=function(e){return e==null?I(this,on):new this.Collection(this,function(){return J(e,void 0,!0)})},re.prototype.aboveOrEqual=function(e){return e==null?I(this,on):new this.Collection(this,function(){return J(e,void 0,!1)})},re.prototype.below=function(e){return e==null?I(this,on):new this.Collection(this,function(){return J(void 0,e,!1,!0)})},re.prototype.belowOrEqual=function(e){return e==null?I(this,on):new this.Collection(this,function(){return J(void 0,e)})},re.prototype.startsWith=function(e){return typeof e!="string"?I(this,us):this.between(e,e+Tn,!0,!0)},re.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):V(this,function(t,n){return t.indexOf(n[0])===0},[e],Tn)},re.prototype.equalsIgnoreCase=function(e){return V(this,function(t,n){return t===n[0]},[e],"")},re.prototype.anyOfIgnoreCase=function(){var e=oe.apply(at,arguments);return e.length===0?G(this):V(this,function(t,n){return n.indexOf(t)!==-1},e,"")},re.prototype.startsWithAnyOfIgnoreCase=function(){var e=oe.apply(at,arguments);return e.length===0?G(this):V(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,Tn)},re.prototype.anyOf=function(){var e,t,n=this,s=oe.apply(at,arguments),r=this._cmp;try{s.sort(r)}catch{return I(this,on)}return s.length===0?G(this):((e=new this.Collection(this,function(){return J(s[0],s[s.length-1])}))._ondirectionchange=function(i){r=i==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(i,c,u){for(var b=i.key;0<r(b,s[t]);)if(++t===s.length)return c(u),!1;return r(b,s[t])===0||(c(function(){i.continue(s[t])}),!1)}),e)},re.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},re.prototype.noneOf=function(){var e=oe.apply(at,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return I(this,on)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},re.prototype.inAnyRange=function(e,_){var n=this,s=this._cmp,r=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return G(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return I(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var b=!_||_.includeLowers!==!1,$=_&&_.includeUppers===!0,C,m=r;function k(S,A){return m(S[0],A[0])}try{(C=e.reduce(function(S,A){for(var F=0,R=S.length;F<R;++F){var j=S[F];if(s(A[0],j[1])<0&&0<s(A[1],j[0])){j[0]=c(j[0],A[0]),j[1]=u(j[1],A[1]);break}}return F===R&&S.push(A),S},[])).sort(k)}catch{return I(this,on)}var w=0,x=$?function(S){return 0<r(S,C[w][1])}:function(S){return 0<=r(S,C[w][1])},g=b?function(S){return 0<i(S,C[w][0])}:function(S){return 0<=i(S,C[w][0])},E=x,_=new this.Collection(this,function(){return J(C[0][0],C[C.length-1][1],!b,!$)});return _._ondirectionchange=function(S){m=S==="next"?(E=x,r):(E=g,i),C.sort(k)},_._addAlgorithm(function(S,A,F){for(var R,j=S.key;E(j);)if(++w===C.length)return A(F),!1;return!x(R=j)&&!g(R)||(n._cmp(j,C[w][1])===0||n._cmp(j,C[w][0])===0||A(function(){m===r?S.continue(C[w][0]):S.continue(C[w][1])}),!1)}),_},re.prototype.startsWithAnyOf=function(){var e=oe.apply(at,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?G(this):this.inAnyRange(e.map(function(t){return[t,t+Tn]})):I(this,"startsWithAnyOf() only works with strings")};var pe=re;function re(){}function Me(e){return ke(function(t){return ce(t),e(t.target.error),!1})}function ce(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Pe="storagemutated",st="x-storagemutated-1",xe=ua(null,Pe),rt=(et.prototype._lock=function(){return ct(!W.global),++this._reculock,this._reculock!==1||W.global||(W.lockOwnerFor=this),this},et.prototype._unlock=function(){if(ct(!W.global),--this._reculock==0)for(W.global||(W.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{_n(e[1],e[0])}catch{}}return this},et.prototype._locked=function(){return this._reculock&&W.lockOwnerFor!==this},et.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(ct(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(s);case"MissingAPIError":throw new ee.MissingAPI(s.message,s);default:throw new ee.OpenFailed(s)}if(!this.active)throw new ee.TransactionInactive;ct(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ke(function(r){ce(r),t._reject(e.error)}),e.onabort=ke(function(r){ce(r),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ke(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&xe.storagemutated.fire(e.mutatedParts)})}return this},et.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ge(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Y(function(i,c){r._blockedFuncs.push([function(){r._promise(e,t,n).then(i,c)},W])}):n?mn(function(){var i=new Y(function(c,u){r._lock();var b=t(c,u,r);b&&b.then&&b.then(c,u)});return i.finally(function(){return r._unlock()}),i._lib=!0,i}):((s=new Y(function(i,c){var u=t(i,c,r);u&&u.then&&u.then(i,c)}))._lib=!0,s):Ge(new ee.TransactionInactive)},et.prototype._root=function(){return this.parent?this.parent._root():this},et.prototype.waitFor=function(e){var t,n=this._root(),s=Y.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new Y(function(i,c){s.then(function(u){return n._waitingQueue.push(ke(i.bind(null,u)))},function(u){return n._waitingQueue.push(ke(c.bind(null,u)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},et.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},et.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ie(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},et);function et(){}function K(e,t,n,s,r,i,c,u){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:i,src:(n&&!c?"&":"")+(s?"*":"")+(r?"++":"")+Et(t),type:u}}function Et(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function it(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,i,c){return i=s(i,c),i&&(r[i[0]]=i[1]),r},{}))};var s}var Bt=function(e){try{return e.only([[]]),Bt=function(){return[[]]},[[]]}catch{return Bt=function(){return Tn},Tn}};function Mt(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Ht(n,t)}:function(n){return Ht(n,e)};var t}function be(e){return[].slice.call(e)}var Yt=0;function Oe(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Qe(e,t,b){function s(x){if(x.type===3)return null;if(x.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=x.lower,k=x.upper,w=x.lowerOpen,x=x.upperOpen;return m===void 0?k===void 0?null:t.upperBound(k,!!x):k===void 0?t.lowerBound(m,!!w):t.bound(m,k,!!w,!!x)}function r(C){var m,k=C.name;return{name:k,schema:C,mutate:function(w){var x=w.trans,g=w.type,E=w.keys,_=w.values,S=w.range;return new Promise(function(A,F){A=ke(A);var R=x.objectStore(k),j=R.keyPath==null,O=g==="put"||g==="add";if(!O&&g!=="delete"&&g!=="deleteRange")throw new Error("Invalid operation type: "+g);var U,z=(E||_||{length:1}).length;if(E&&_&&E.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(z===0)return A({numFailures:0,failures:{},results:[],lastResult:void 0});function L(Ie){++le,ce(Ie)}var H=[],me=[],le=0;if(g==="deleteRange"){if(S.type===4)return A({numFailures:le,failures:me,results:[],lastResult:void 0});S.type===3?H.push(U=R.clear()):H.push(U=R.delete(s(S)))}else{var j=O?j?[_,E]:[_,null]:[E,null],Q=j[0],ue=j[1];if(O)for(var qe=0;qe<z;++qe)H.push(U=ue&&ue[qe]!==void 0?R[g](Q[qe],ue[qe]):R[g](Q[qe])),U.onerror=L;else for(qe=0;qe<z;++qe)H.push(U=R[g](Q[qe])),U.onerror=L}function Pt(Ie){Ie=Ie.target.result,H.forEach(function(en,Xn){return en.error!=null&&(me[Xn]=en.error)}),A({numFailures:le,failures:me,results:g==="delete"?E:H.map(function(en){return en.result}),lastResult:Ie})}U.onerror=function(Ie){L(Ie),Pt(Ie)},U.onsuccess=Pt})},getMany:function(w){var x=w.trans,g=w.keys;return new Promise(function(E,_){E=ke(E);for(var S,A=x.objectStore(k),F=g.length,R=new Array(F),j=0,O=0,U=function(H){H=H.target,R[H._pos]=H.result,++O===j&&E(R)},z=Me(_),L=0;L<F;++L)g[L]!=null&&((S=A.get(g[L]))._pos=L,S.onsuccess=U,S.onerror=z,++j);j===0&&E(R)})},get:function(w){var x=w.trans,g=w.key;return new Promise(function(E,_){E=ke(E);var S=x.objectStore(k).get(g);S.onsuccess=function(A){return E(A.target.result)},S.onerror=Me(_)})},query:(m=u,function(w){return new Promise(function(x,g){x=ke(x);var E,_,S,O=w.trans,A=w.values,F=w.limit,j=w.query,R=F===1/0?void 0:F,U=j.index,j=j.range,O=O.objectStore(k),O=U.isPrimaryKey?O:O.index(U.name),U=s(j);if(F===0)return x({result:[]});m?((j=A?O.getAll(U,R):O.getAllKeys(U,R)).onsuccess=function(z){return x({result:z.target.result})},j.onerror=Me(g)):(E=0,_=!A&&"openKeyCursor"in O?O.openKeyCursor(U):O.openCursor(U),S=[],_.onsuccess=function(z){var L=_.result;return!L||(S.push(A?L.value:L.primaryKey),++E===F)?x({result:S}):void L.continue()},_.onerror=Me(g))})}),openCursor:function(w){var x=w.trans,g=w.values,E=w.query,_=w.reverse,S=w.unique;return new Promise(function(A,F){A=ke(A);var O=E.index,R=E.range,j=x.objectStore(k),j=O.isPrimaryKey?j:j.index(O.name),O=_?S?"prevunique":"prev":S?"nextunique":"next",U=!g&&"openKeyCursor"in j?j.openKeyCursor(s(R),O):j.openCursor(s(R),O);U.onerror=Me(F),U.onsuccess=ke(function(z){var L,H,me,le,Q=U.result;Q?(Q.___id=++Yt,Q.done=!1,L=Q.continue.bind(Q),H=(H=Q.continuePrimaryKey)&&H.bind(Q),me=Q.advance.bind(Q),le=function(){throw new Error("Cursor not stopped")},Q.trans=x,Q.stop=Q.continue=Q.continuePrimaryKey=Q.advance=function(){throw new Error("Cursor not started")},Q.fail=ke(F),Q.next=function(){var ue=this,qe=1;return this.start(function(){return qe--?ue.continue():ue.stop()}).then(function(){return ue})},Q.start=function(ue){function qe(){if(U.result)try{ue()}catch(Ie){Q.fail(Ie)}else Q.done=!0,Q.start=function(){throw new Error("Cursor behind last entry")},Q.stop()}var Pt=new Promise(function(Ie,en){Ie=ke(Ie),U.onerror=Me(en),Q.fail=en,Q.stop=function(Xn){Q.stop=Q.continue=Q.continuePrimaryKey=Q.advance=le,Ie(Xn)}});return U.onsuccess=ke(function(Ie){U.onsuccess=qe,qe()}),Q.continue=L,Q.continuePrimaryKey=H,Q.advance=me,qe(),Pt},A(Q)):A(null)},F)})},count:function(w){var x=w.query,g=w.trans,E=x.index,_=x.range;return new Promise(function(S,A){var F=g.objectStore(k),F=E.isPrimaryKey?F:F.index(E.name),R=s(_),R=R?F.count(R):F.count();R.onsuccess=ke(function(j){return S(j.target.result)}),R.onerror=Me(A)})}}}i=b,c=be((b=e).objectStoreNames);var i,b={schema:{name:b.name,tables:c.map(function(C){return i.objectStore(C)}).map(function(C){var m=C.keyPath,k=C.autoIncrement,x=se(m),w={},x={name:C.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:x,keyPath:m,autoIncrement:k,unique:!0,extractKey:Mt(m)},indexes:be(C.indexNames).map(function(g){return C.index(g)}).map(function(S){var A=S.name,E=S.unique,_=S.multiEntry,S=S.keyPath,A={name:A,compound:se(S),keyPath:S,unique:E,multiEntry:_,extractKey:Mt(S)};return w[Oe(S)]=A}),getIndexByKeyPath:function(g){return w[Oe(g)]}};return w[":id"]=x.primaryKey,m!=null&&(w[Oe(m)]=x.primaryKey),x})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=b.schema,u=b.hasGetAll,b=c.tables.map(r),$={};return b.forEach(function(C){return $[C.name]=C}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(C){if($[C])return $[C];throw new Error("Table '".concat(C,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Bt(t),schema:c}}function tt(e,t,n,s){return n=n.IDBKeyRange,t=Qe(t,n,s),{dbcore:e.dbcore.reduce(function(r,i){return i=i.create,X(X({},r),i(r))},t)}}function Ve(e,t){var n=t.db,n=tt(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(i){return i.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function Ye(e,t,n,s){n.forEach(function(r){var i=s[r];t.forEach(function(c){var u=(function b($,C){return nn($,C)||($=Je($))&&b($,C)})(c,r);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?De(c,r,{get:function(){return this.table(r)},set:function(b){nt(this,r,{value:b,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,i))})})}function Lt(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function Jt(e,t){return e._cfg.version-t._cfg.version}function _t(e,t,n,s){var r=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=it("$meta",Ze("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(i.create(n),i._completion.catch(s),i._reject.bind(i)),u=W.transless||W;mn(function(){if(W.trans=i,W.transless=u,t!==0)return Ve(e,n),$=t,((b=i).storeNames.includes("$meta")?b.table("$meta").get("version").then(function(C){return C??$}):Y.resolve($)).then(function(E){var m=e,k=E,w=i,x=n,g=[],E=m._versions,_=m._dbSchema=Ke(0,m.idbdb,x);return(E=E.filter(function(S){return S._cfg.version>=k})).length===0?Y.resolve():(E.forEach(function(S){g.push(function(){var A,F,R,j=_,O=S._cfg.dbschema,U=(Ue(m,j,x),Ue(m,O,x),_=m._dbSchema=O,vt(j,O)),z=(U.add.forEach(function(L){Cn(x,L[0],L[1].primKey,L[1].indexes)}),U.change.forEach(function(L){if(L.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var H=x.objectStore(L.name);L.add.forEach(function(me){return we(H,me)}),L.change.forEach(function(me){H.deleteIndex(me.name),we(H,me)}),L.del.forEach(function(me){return H.deleteIndex(me)})}),S._cfg.contentUpgrade);if(z&&S._cfg.version>k)return Ve(m,x),w._memoizedTables={},A=pt(O),U.del.forEach(function(L){A[L]=j[L]}),Lt(m,[m.Transaction.prototype]),Ye(m,[m.Transaction.prototype],Ce(A),A),w.schema=A,(F=sn(z))&&Wn(),O=Y.follow(function(){var L;(R=z(w))&&F&&(L=gn.bind(null,null),R.then(L,L))}),R&&typeof R.then=="function"?Y.resolve(R):O.then(function(){return R})}),g.push(function(A){var F,R,j=S._cfg.dbschema;F=j,R=A,[].slice.call(R.db.objectStoreNames).forEach(function(O){return F[O]==null&&R.db.deleteObjectStore(O)}),Lt(m,[m.Transaction.prototype]),Ye(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),w.schema=m._dbSchema}),g.push(function(A){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===S._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(F){return F!=="$meta"})):A.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return g.length?Y.resolve(g.shift()(w.idbtrans)).then(S):Y.resolve()})().then(function(){Le(_,x)}))}).catch(c);var b,$;Ce(r).forEach(function(C){Cn(n,C,r[C].primKey,r[C].indexes)}),Ve(e,n),Y.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function Kt(e,t){Le(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Ke(0,e.idbdb,t);Ue(e,e._dbSchema,t);for(var s=0,r=vt(n,e._dbSchema).change;s<r.length;s++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(b){Dt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(b.src)),we(u,b)})})(r[s]);if(typeof i=="object")return i.value}}function vt(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],i=t[n];if(r){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||r.primKey.auto!==i.primKey.auto)c.recreate=!0,s.change.push(c);else{var u=r.idxByName,b=i.idxByName,$=void 0;for($ in u)b[$]||c.del.push($);for($ in b){var C=u[$],m=b[$];C?C.src!==m.src&&c.change.push(m):c.add.push(m)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([n,i])}return s}function Cn(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(i){return we(r,i)})}function Le(e,t){Ce(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(Dt&&console.debug("Dexie: Creating missing table",n),Cn(t,n,e[n].primKey,e[n].indexes))})}function we(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Ke(e,t,n){var s={};return an(t.objectStoreNames,0).forEach(function(r){for(var i=n.objectStore(r),c=K(Et($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),u=[],b=0;b<i.indexNames.length;++b){var C=i.index(i.indexNames[b]),$=C.keyPath,C=K(C.name,$,!!C.unique,!!C.multiEntry,!1,$&&typeof $!="string",!1);u.push(C)}s[r]=it(r,c,u)}),s}function Ue(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var i=s[r],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var b,$=c.indexNames[u],C=c.index($).keyPath,C=typeof C=="string"?C:"["+an(C).join("+")+"]";t[i]&&(b=t[i].idxByName[C])&&(b.name=$,delete t[i].idxByName[C],t[i].idxByName[$]=b)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Ze(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return K(r,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),se(i),n===0,s)})}xt.prototype._createTableSchema=it,xt.prototype._parseIndexSyntax=Ze,xt.prototype._parseStoresSpec=function(e,t){var n=this;Ce(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),i=r.shift();if(!i)throw new ee.Schema("Invalid schema for table "+s+": "+e[s]);if(i.unique=!0,i.multi)throw new ee.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(s,i,r),t[s]=i}})},xt.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?fe(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(i){fe(s,i._cfg.storesSource),r=i._cfg.dbschema={},i._parseStoresSpec(s,r)}),t._dbSchema=r,Lt(t,[t._allTables,t,t.Transaction.prototype]),Ye(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Ce(r),r),t._storeNames=Ce(r),this},xt.prototype.upgrade=function(e){return this._cfg.contentUpgrade=na(this._cfg.contentUpgrade||Ee,e),this};var ln=xt;function xt(){}function Tt(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Zt($a,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function ot(e){return e&&typeof e.databases=="function"}function ut(e){return mn(function(){return W.letThrough=!0,e()})}function zt(e){return!("from"in e)}var ze=function(e,t){var n;if(!this)return n=new ze,e&&"d"in e&&fe(n,e),n;fe(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Wt(e,t,n){var s=ve(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(zt(e))return fe(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(ve(n,e.from)<0)return s?Wt(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},On(e);if(0<ve(t,e.to))return r?Wt(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},On(e);ve(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<ve(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&ye(e,s),r&&t&&ye(e,r)}}function ye(e,t){zt(t)||(function n(s,r){var i=r.from,c=r.l,u=r.r;Wt(s,i,r.to),c&&n(s,c),u&&n(s,u)})(e,t)}function Pn(e,t){var n=At(t),s=n.next();if(!s.done)for(var r=s.value,i=At(e),c=i.next(r.from),u=c.value;!s.done&&!c.done;){if(ve(u.from,r.to)<=0&&0<=ve(u.to,r.from))return!0;ve(r.from,u.from)<0?r=(s=n.next(u.from)).value:u=(c=i.next(r.from)).value}return!1}function At(e){var t=zt(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&ve(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||ve(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function On(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=X({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=de(n)),e.d=de(e)}function de(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function da(e,t){return Ce(t).forEach(function(n){e[n]?ye(e[n],t[n]):e[n]=(function s(r){var i,c,u={};for(i in r)ie(r,i)&&(c=r[i],u[i]=!c||typeof c!="object"||ns.has(c.constructor)?c:s(c));return u})(t[n])}),e}function T(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Pn(t[n],e[n])})}lt(ze.prototype,(($t={add:function(e){return ye(this,e),this},addKey:function(e){return Wt(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Wt(t,n,n)}),this},hasKey:function(e){var t=At(this).next(e).value;return t&&ve(t.from,e)<=0&&0<=ve(t.to,e)}})[Ya]=function(){return At(this)},$t));var N={},mt={},_a=!1;function Ta(e){da(mt,e),_a||(_a=!0,setTimeout(function(){_a=!1,qt(mt,!(mt={}))},0))}function qt(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(N);s<r.length;s++)Gt(u=r[s],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=N["idb://".concat(c,"/").concat(i)])&&Gt(u,e,n,t)}n.forEach(function(b){return b()})}function Gt(e,t,n,s){for(var r=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],b=u[0],$=[],C=0,m=u[1];C<m.length;C++){var k=m[C];T(t,k.obsSet)?k.subscribers.forEach(function(E){return n.add(E)}):s&&$.push(k)}s&&r.push([b,$])}if(s)for(var w=0,x=r;w<x.length;w++){var g=x[w],b=g[0],$=g[1];e.queries.query[b]=$}}function Xt(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ge(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==s)throw new ee.DatabaseClosed("db.open() was cancelled")}function u(){return new Y(function(k,w){if(c(),!n)throw new ee.MissingAPI;var x=e.name,g=t.autoSchema||!r?n.open(x):n.open(x,r);if(!g)throw new ee.MissingAPI;g.onerror=Me(w),g.onblocked=ke(e._fireOnBlocked),g.onupgradeneeded=ke(function(E){var _;C=g.transaction,t.autoSchema&&!e._options.allowEmptyDB?(g.onerror=ce,C.abort(),g.result.close(),(_=n.deleteDatabase(x)).onsuccess=_.onerror=ke(function(){w(new ee.NoSuchDatabase("Database ".concat(x," doesnt exist")))})):(C.onerror=Me(w),_=E.oldVersion>Math.pow(2,62)?0:E.oldVersion,m=_<1,e.idbdb=g.result,i&&Kt(e,C),_t(e,_/10,C,w))},w),g.onsuccess=ke(function(){C=null;var E,_,S,A,F,R,j=e.idbdb=g.result,O=an(j.objectStoreNames);if(0<O.length)try{var U=j.transaction((F=O).length===1?F[0]:F,"readonly");if(t.autoSchema)R=j,A=U,(S=e).verno=R.version/10,A=S._dbSchema=Ke(0,R,A),S._storeNames=an(R.objectStoreNames,0),Ye(S,[S._allTables],Ce(A),A);else if(Ue(e,e._dbSchema,U),_=U,((_=vt(Ke(0,(E=e).idbdb,_),E._dbSchema)).add.length||_.change.some(function(z){return z.add.length||z.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),r=j.version+1,i=!0,k(u());Ve(e,U)}catch{}Gn.push(e),j.onversionchange=ke(function(z){t.vcFired=!0,e.on("versionchange").fire(z)}),j.onclose=ke(function(){e.close({disableAutoOpen:!1})}),m&&(O=e._deps,F=x,ot(R=O.indexedDB)||F===$a||Tt(R,O.IDBKeyRange).put({name:F}).catch(Ee)),k()},w)}).catch(function(k){switch(k?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<r)return r=0,u()}return Y.reject(k)})}var b,$=t.dbReadyResolve,C=null,m=!1;return Y.race([s,(typeof navigator>"u"?Y.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(k){function w(){return indexedDB.databases().finally(k)}b=setInterval(w,100),w()}).finally(function(){return clearInterval(b)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],Y.resolve(ut(function(){return e.on.ready.fire(e.vip)})).then(function k(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(na,Ee),t.onReadyBeingFired=[],Y.resolve(ut(function(){return w(e.vip)})).then(k)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(k){t.dbOpenError=k;try{C&&C.abort()}catch{}return s===t.openCanceller&&e._close(),Ge(k)}).finally(function(){t.openComplete=!0,$()}).then(function(){var k;return m&&(k={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(x){x.name&&(k["idb://".concat(e.name,"/").concat(w.name,"/").concat(x.name)]=new ze(-1/0,[[[]]]))}),k["idb://".concat(e.name,"/").concat(w.name,"/")]=k["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new ze(-1/0,[[[]]])}),xe(Pe).fire(k),qt(k,!0)),e})}function Aa(e){function t(i){return e.next(i)}var n=r(t),s=r(function(i){return e.throw(i)});function r(i){return function(u){var u=i(u),b=u.value;return u.done?b:b&&typeof b.then=="function"?b.then(n,s):se(b)?Promise.all(b).then(n,s):n(b)}}return r(t)()}function ha(e,t,n){for(var s=se(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var ms={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return X(X({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},i=[];function c(k,w,x){var S=Oe(k),g=r[S]=r[S]||[],E=k==null?0:typeof k=="string"?1:k.length,_=0<w,S=X(X({},x),{name:_?"".concat(S,"(virtual-from:").concat(x.name,")"):x.name,lowLevelIndex:x,isVirtual:_,keyTail:w,keyLength:E,extractKey:Mt(k),unique:!_&&x.unique});return g.push(S),S.isPrimaryKey||i.push(S),1<E&&c(E===2?k[0]:k.slice(0,E-1),w+1,x),g.sort(function(A,F){return A.keyTail-F.keyTail}),S}var u=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[u];for(var b=0,$=s.indexes;b<$.length;b++){var C=$[b];c(C.keyPath,0,C)}function m(k){var w,x=k.query.index;return x.isVirtual?X(X({},k),{query:{index:x.lowLevelIndex,range:(w=k.query.range,x=x.keyTail,{type:w.type===1?2:w.type,lower:ha(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,x),lowerOpen:!0,upper:ha(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,x),upperOpen:!0})}}):k}return X(X({},n),{schema:X(X({},s),{primaryKey:u,indexes:i,getIndexByKeyPath:function(k){return(k=r[Oe(k)])&&k[0]}}),count:function(k){return n.count(m(k))},query:function(k){return n.query(m(k))},openCursor:function(k){var w=k.query.index,x=w.keyTail,g=w.keyLength;return w.isVirtual?n.openCursor(m(k)).then(function(_){return _&&E(_)}):n.openCursor(k);function E(_){return Object.create(_,{continue:{value:function(S){S!=null?_.continue(ha(S,k.reverse?e.MAX_KEY:e.MIN_KEY,x)):k.unique?_.continue(_.key.slice(0,g).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,x)):_.continue()}},continuePrimaryKey:{value:function(S,A){_.continuePrimaryKey(ha(S,e.MAX_KEY,x),A)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var S=_.key;return g===1?S[0]:S.slice(0,g)}},value:{get:function(){return _.value}}})}}})}})}};function Pa(e,t,n,s){return n=n||{},s=s||"",Ce(e).forEach(function(r){var i,c,u;ie(t,r)?(i=e[r],c=t[r],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Va(i))!==Va(c)?n[s+r]=t[r]:u==="Object"?Pa(i,c,n,s+r+"."):i!==c&&(n[s+r]=t[r]):i!==c&&(n[s+r]=t[r])):n[s+r]=void 0}),Ce(t).forEach(function(r){ie(e,r)||(n[s+r]=t[r])}),n}function Oa(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var gs={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return X(X({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return X(X({},n),{mutate:function(r){var i=W.trans,c=i.table(t).hook,u=c.deleting,b=c.creating,$=c.updating;switch(r.type){case"add":if(b.fire===Ee)break;return i._promise("readwrite",function(){return C(r)},!0);case"put":if(b.fire===Ee&&$.fire===Ee)break;return i._promise("readwrite",function(){return C(r)},!0);case"delete":if(u.fire===Ee)break;return i._promise("readwrite",function(){return C(r)},!0);case"deleteRange":if(u.fire===Ee)break;return i._promise("readwrite",function(){return(function m(k,w,x){return n.query({trans:k,values:!1,query:{index:s,range:w},limit:x}).then(function(g){var E=g.result;return C({type:"delete",keys:E,trans:k}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):E.length<x?{failures:[],numFailures:0,lastResult:void 0}:m(k,X(X({},w),{lower:E[E.length-1],lowerOpen:!0}),x)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function C(m){var k,w,x,g=W.trans,E=m.keys||Oa(s,m);if(E)return(m=m.type==="add"||m.type==="put"?X(X({},m),{keys:E}):X({},m)).type!=="delete"&&(m.values=he([],m.values)),m.keys&&(m.keys=he([],m.keys)),k=n,x=E,((w=m).type==="add"?Promise.resolve([]):k.getMany({trans:w.trans,keys:x,cache:"immutable"})).then(function(_){var S=E.map(function(A,F){var R,j,O,U=_[F],z={onerror:null,onsuccess:null};return m.type==="delete"?u.fire.call(z,A,U,g):m.type==="add"||U===void 0?(R=b.fire.call(z,A,m.values[F],g),A==null&&R!=null&&(m.keys[F]=A=R,s.outbound||ht(m.values[F],s.keyPath,A))):(R=Pa(U,m.values[F]),(j=$.fire.call(z,R,A,U,g))&&(O=m.values[F],Object.keys(j).forEach(function(L){ie(O,L)?O[L]=j[L]:ht(O,L,j[L])}))),z});return n.mutate(m).then(function(A){for(var F=A.failures,R=A.results,j=A.numFailures,A=A.lastResult,O=0;O<E.length;++O){var U=(R||E)[O],z=S[O];U==null?z.onerror&&z.onerror(F[O]):z.onsuccess&&z.onsuccess(m.type==="put"&&_[O]?m.values[O]:U)}return{failures:F,results:R,numFailures:j,lastResult:A}}).catch(function(A){return S.forEach(function(F){return F.onerror&&F.onerror(A)}),Promise.reject(A)})});throw new Error("Keys missing")}}})}})}};function Xa(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,i=0;r<t.keys.length&&i<e.length;++r)ve(t.keys[r],e[i])===0&&(s.push(n?Ct(t.values[r]):t.values[r]),++i);return s.length===e.length?s:null}catch{return null}}var Fs={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return X(X({},n),{getMany:function(s){var r;return s.cache?(r=Xa(s.keys,s.trans._cache,s.cache==="clone"))?Y.resolve(r):n.getMany(s).then(function(i){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?Ct(i):i},i}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function Ia(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Fa(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var bs={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new ze(e.MIN_KEY,e.MAX_KEY);return X(X({},e),{transaction:function(s,r,i){if(W.subscr&&r!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(W.querier));return e.transaction(s,r,i)},table:function(s){function r(E){var g,E=E.query;return[g=E.index,new ze((g=(E=E.range).lower)!=null?g:e.MIN_KEY,(g=E.upper)!=null?g:e.MAX_KEY)]}var i=e.table(s),c=i.schema,u=c.primaryKey,b=c.indexes,$=u.extractKey,C=u.outbound,m=u.autoIncrement&&b.filter(function(x){return x.compound&&x.keyPath.includes(u.keyPath)}),k=X(X({},i),{mutate:function(x){function g(H){return H="idb://".concat(t,"/").concat(s,"/").concat(H),F[H]||(F[H]=new ze)}var E,_,S,A=x.trans,F=x.mutatedParts||(x.mutatedParts={}),R=g(""),j=g(":dels"),O=x.type,z=x.type==="deleteRange"?[x.range]:x.type==="delete"?[x.keys]:x.values.length<50?[Oa(u,x).filter(function(H){return H}),x.values]:[],U=z[0],z=z[1],L=x.trans._cache;return se(U)?(R.addKeys(U),(O=O==="delete"||U.length===z.length?Xa(U,L):null)||j.addKeys(U),(O||z)&&(E=g,_=O,S=z,c.indexes.forEach(function(H){var me=E(H.name||"");function le(ue){return ue!=null?H.extractKey(ue):null}function Q(ue){H.multiEntry&&se(ue)?ue.forEach(function(qe){return me.addKey(qe)}):me.addKey(ue)}(_||S).forEach(function(ue,Ie){var Pt=_&&le(_[Ie]),Ie=S&&le(S[Ie]);ve(Pt,Ie)!==0&&(Pt!=null&&Q(Pt),Ie!=null)&&Q(Ie)})}))):U?(z={from:(L=U.lower)!=null?L:e.MIN_KEY,to:(O=U.upper)!=null?O:e.MAX_KEY},j.add(z),R.add(z)):(R.add(n),j.add(n),c.indexes.forEach(function(H){return g(H.name).add(n)})),i.mutate(x).then(function(H){return!U||x.type!=="add"&&x.type!=="put"||(R.addKeys(H.results),m&&m.forEach(function(me){for(var le=x.values.map(function(Pt){return me.extractKey(Pt)}),Q=me.keyPath.findIndex(function(Pt){return Pt===u.keyPath}),ue=0,qe=H.results.length;ue<qe;++ue)le[ue][Q]=H.results[ue];g(me.name).addKeys(le)})),A.mutatedParts=da(A.mutatedParts||{},F),H})}}),w={get:function(x){return[u,new ze(x.key)]},getMany:function(x){return[u,new ze().addKeys(x.keys)]},count:r,query:r,openCursor:r};return Ce(w).forEach(function(x){k[x]=function(g){var E=W.subscr,_=!!E,S=Ia(W,i)&&Fa(x,g)?g.obsSet={}:E;if(_){var A,E=function(z){return z="idb://".concat(t,"/").concat(s,"/").concat(z),S[z]||(S[z]=new ze)},F=E(""),R=E(":dels"),_=w[x](g),j=_[0],_=_[1];if((x==="query"&&j.isPrimaryKey&&!g.values?R:E(j.name||"")).add(_),!j.isPrimaryKey){if(x!=="count")return A=x==="query"&&C&&g.values&&i.query(X(X({},g),{values:!1})),i[x].apply(this,arguments).then(function(z){if(x==="query"){if(C&&g.values)return A.then(function(le){return le=le.result,F.addKeys(le),z});var L=g.values?z.result.map($):z.result;(g.values?F:R).addKeys(L)}else{var H,me;if(x==="openCursor")return me=g.values,(H=z)&&Object.create(H,{key:{get:function(){return R.addKey(H.primaryKey),H.key}},primaryKey:{get:function(){var le=H.primaryKey;return R.addKey(le),le}},value:{get:function(){return me&&F.addKey(H.primaryKey),H.value}}})}return z});R.add(n)}}return i[x].apply(this,arguments)}}),k}})}};function Qa(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=X({},t),se(s.keys)&&(s.keys=s.keys.filter(function(r,i){return!(i in n.failures)})),"values"in s&&se(s.values)&&(s.values=s.values.filter(function(r,i){return!(i in n.failures)})),s)}function Rt(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<ve(n,s.lower):0<=ve(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?ve(n,s.upper)<0:ve(n,s.upper)<=0));var n,s}function ys(e,t,n,s,r,i){var c,u,b,$,C,m;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,b=t.query.range,$=s.schema.primaryKey.extractKey,C=c.extractKey,m=(c.lowLevelIndex||c).extractKey,(s=n.reduce(function(k,w){var x=k,g=[];if(w.type==="add"||w.type==="put")for(var E=new ze,_=w.values.length-1;0<=_;--_){var S,A=w.values[_],F=$(A);!E.hasKey(F)&&(S=C(A),u&&se(S)?S.some(function(z){return Rt(z,b)}):Rt(S,b))&&(E.addKey(F),g.push(A))}switch(w.type){case"add":var R=new ze().addKeys(t.values?k.map(function(L){return $(L)}):k),x=k.concat(t.values?g.filter(function(L){return L=$(L),!R.hasKey(L)&&(R.addKey(L),!0)}):g.map(function(L){return $(L)}).filter(function(L){return!R.hasKey(L)&&(R.addKey(L),!0)}));break;case"put":var j=new ze().addKeys(w.values.map(function(L){return $(L)}));x=k.filter(function(L){return!j.hasKey(t.values?$(L):L)}).concat(t.values?g:g.map(function(L){return $(L)}));break;case"delete":var O=new ze().addKeys(w.keys);x=k.filter(function(L){return!O.hasKey(t.values?$(L):L)});break;case"deleteRange":var U=w.range;x=k.filter(function(L){return!Rt($(L),U)})}return x},e))===e)?e:(s.sort(function(k,w){return ve(m(k),m(w))||ve($(k),$(w))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),i?Object.freeze(s):s)}function Qt(e,t){return ve(e.lower,t.lower)===0&&ve(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Ds(e,t){return((n,s,r,i)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=ve(n,s))===0){if(r&&i)return 0;if(r)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,i)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=ve(n,s))===0){if(r&&i)return 0;if(r)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Ns(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,i;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&un(i,r)},3e3))})}var Cs={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return X(X({},e),{transaction:function(n,s,r){var i,c,u=e.transaction(n,s,r);return s==="readwrite"&&(r=(i=new AbortController).signal,u.addEventListener("abort",(c=function(b){return function(){if(i.abort(),s==="readwrite"){for(var $=new Set,C=0,m=n;C<m.length;C++){var k=m[C],w=N["idb://".concat(t,"/").concat(k)];if(w){var x=e.table(k),g=w.optimisticOps.filter(function(H){return H.trans===u});if(u._explicit&&b&&u.mutatedParts)for(var E=0,_=Object.values(w.queries.query);E<_.length;E++)for(var S=0,A=(j=_[E]).slice();S<A.length;S++)T((O=A[S]).obsSet,u.mutatedParts)&&(un(j,O),O.subscribers.forEach(function(H){return $.add(H)}));else if(0<g.length){w.optimisticOps=w.optimisticOps.filter(function(H){return H.trans!==u});for(var F=0,R=Object.values(w.queries.query);F<R.length;F++)for(var j,O,U,z=0,L=(j=R[F]).slice();z<L.length;z++)(O=L[z]).res!=null&&u.mutatedParts&&(b&&!O.dirty?(U=Object.isFrozen(O.res),U=ys(O.res,O.req,g,x,O,U),O.dirty?(un(j,O),O.subscribers.forEach(function(H){return $.add(H)})):U!==O.res&&(O.res=U,O.promise=Y.resolve({result:U}))):(O.dirty&&un(j,O),O.subscribers.forEach(function(H){return $.add(H)})))}}}$.forEach(function(H){return H()})}}})(!1),{signal:r}),u.addEventListener("error",c(!1),{signal:r}),u.addEventListener("complete",c(!0),{signal:r})),u},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return X(X({},s),{mutate:function(i){var c,u=W.trans;return!r.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=N["idb://".concat(t,"/").concat(n)])?(u=s.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Oa(r,i).some(function(b){return b==null}))?(c.optimisticOps.push(i),i.mutatedParts&&Ta(i.mutatedParts),u.then(function(b){0<b.numFailures&&(un(c.optimisticOps,i),(b=Qa(0,i,b))&&c.optimisticOps.push(b),i.mutatedParts)&&Ta(i.mutatedParts)}),u.catch(function(){un(c.optimisticOps,i),i.mutatedParts&&Ta(i.mutatedParts)})):u.then(function(b){var $=Qa(0,X(X({},i),{values:i.values.map(function(C,m){var k;return b.failures[m]?C:(ht(k=(k=r.keyPath)!=null&&k.includes(".")?Ct(C):X({},C),r.keyPath,b.results[m]),k)})}),b);c.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&Ta(i.mutatedParts)})}),u):s.mutate(i)},query:function(i){var c,u,b,$,C,m,k;return Ia(W,s)&&Fa("query",i)?(c=((b=W.trans)==null?void 0:b.db._options.cache)==="immutable",u=(b=W).requery,b=b.signal,m=((w,x,g,E)=>{var _=N["idb://".concat(w,"/").concat(x)];if(!_)return[];if(!(w=_.queries[g]))return[null,!1,_,null];var S=w[(E.query?E.query.index.name:null)||""];if(!S)return[null,!1,_,null];switch(g){case"query":var A=S.find(function(F){return F.req.limit===E.limit&&F.req.values===E.values&&Qt(F.req.query.range,E.query.range)});return A?[A,!0,_,S]:[S.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=E.limit&&(!E.values||F.req.values)&&Ds(F.req.query.range,E.query.range)}),!1,_,S];case"count":return A=S.find(function(F){return Qt(F.req.query.range,E.query.range)}),[A,!!A,_,S]}})(t,n,"query",i),k=m[0],$=m[2],C=m[3],k&&m[1]?k.obsSet=i.obsSet:(m=s.query(i).then(function(w){var x=w.result;if(k&&(k.res=x),c){for(var g=0,E=x.length;g<E;++g)Object.freeze(x[g]);Object.freeze(x)}else w.result=Ct(x);return w}).catch(function(w){return C&&k&&un(C,k),Promise.reject(w)}),k={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},C?C.push(k):(C=[k],($=$||(N["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=C)),Ns(k,C,u,b),k.promise.then(function(w){return{result:ys(w.result,i,$?.optimisticOps,s,k,c)}})):s.query(i)}})}})}};function pa(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}We.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Jt),n.stores({}),this._state.autoSchema=!1),n},We.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||W.letThrough||this._vip)?e():new Y(function(n,s){if(t._state.openComplete)return s(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ee.DatabaseClosed);t.open().catch(Ee)}t._state.dbReadyPromise.then(n,s)}).then(e)},We.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,i=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:s??10,name:r}),i.sort(function(c,u){return c.level-u.level}),this},We.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},We.prototype.open=function(){var e=this;return _n(hn,function(){return Xt(e)})},We.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Gn.indexOf(this);if(0<=t&&Gn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Y(function(n){e.dbReadyResolve=n}),e.openCanceller=new Y(function(n,s){e.cancelOpen=s}))},We.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},We.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new Y(function(r,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=ke(function(){var b,$,C;b=t._deps,$=t.name,ot(C=b.indexedDB)||$===$a||Tt(C,b.IDBKeyRange).delete($).catch(Ee),r()}),u.onerror=Me(i),u.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},We.prototype.backendDB=function(){return this.idbdb},We.prototype.isOpen=function(){return this.idbdb!==null},We.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},We.prototype.hasFailed=function(){return this._state.dbOpenError!==null},We.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(We.prototype,"tables",{get:function(){var e=this;return Ce(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),We.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new ee.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];return s=i.pop(),[t,ja(i),s]}).apply(this,arguments);return this._transaction.apply(this,e)},We.prototype._transaction=function(e,t,n){var s,r,i=this,c=W.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===An)s=An;else{if(e!="rw"&&e!=Sa)throw new ee.InvalidArgument("Invalid transaction mode: "+e);s=Sa}if(c){if(c.mode===An&&s===Sa){if(!u)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function($){if(c&&c.storeNames.indexOf($)===-1){if(!u)throw new ee.SubTransaction("Table "+$+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch($){return c?c._promise(null,function(C,m){m($)}):Ge($)}var b=(function $(C,m,k,w,x){return Y.resolve().then(function(){var S=W.transless||W,g=C._createTransaction(m,k,C._dbSchema,w),S=(g.explicit=!0,{trans:g,transless:S});if(w)g.idbtrans=w.idbtrans;else try{g.create(),g.idbtrans._explicit=!0,C._state.PR1398_maxLoop=3}catch(A){return A.name===ya.InvalidState&&C.isOpen()&&0<--C._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),C.close({disableAutoOpen:!1}),C.open().then(function(){return $(C,m,k,null,x)})):Ge(A)}var E,_=sn(x),S=(_&&Wn(),Y.follow(function(){var A;(E=x.call(g,g))&&(_?(A=gn.bind(null,null),E.then(A,A)):typeof E.next=="function"&&typeof E.throw=="function"&&(E=Aa(E)))},S));return(E&&typeof E.then=="function"?Y.resolve(E).then(function(A){return g.active?A:Ge(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return E})).then(function(A){return w&&g._resolve(),g._completion.then(function(){return A})}).catch(function(A){return g._reject(A),Ge(A)})})}).bind(null,this,s,r,c,n);return c?c._promise(s,b,"lock"):W.trans?_n(W.transless,function(){return i._whenReady(b)}):this._whenReady(b)},We.prototype.table=function(e){if(ie(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var Zt=We;function We(e,t){var n,s,r,i,c,u=this,b=(this._middlewares={},this.verno=0,We.dependencies),b=(this._options=t=X({addons:We.addons,autoOpen:!0,indexedDB:b.indexedDB,IDBKeyRange:b.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Ee,dbReadyPromise:null,cancelOpen:Ee,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),C=($.dbReadyPromise=new Y(function(m){$.dbReadyResolve=m}),$.openCanceller=new Y(function(m,k){$.cancelOpen=k}),this._state=$,this.name=e,this.on=ua(this,"populate","blocked","versionchange","close",{ready:[na,Ee]}),this.once=function(m,k){var w=function(){for(var x=[],g=0;g<arguments.length;g++)x[g]=arguments[g];u.on(m).unsubscribe(w),k.apply(u,x)};return u.on(m,w)},this.on.ready.subscribe=bt(this.on.ready.subscribe,function(m){return function(k,w){We.vip(function(){var x,g=u._state;g.openComplete?(g.dbOpenError||Y.resolve().then(k),w&&m(k)):g.onReadyBeingFired?(g.onReadyBeingFired.push(k),w&&m(k)):(m(k),x=u,w||m(function E(){x.on.ready.unsubscribe(k),x.on.ready.unsubscribe(E)}))})}}),this.Collection=(n=this,Un(d.prototype,function(E,g){this.db=n;var w=ds,x=null;if(g)try{w=g()}catch(S){x=S}var g=E._ctx,E=g.table,_=E.hook.reading.fire;this._ctx={table:E,index:g.index,isPrimKey:!g.index||E.schema.primKey.keyPath&&g.index===E.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:x,or:g.or,valueMapper:_!==ta?_:null}})),this.Table=(s=this,Un(vs.prototype,function(m,k,w){this.db=s,this._tx=w,this.name=m,this.schema=k,this.hook=s._allTables[m]?s._allTables[m].hook:ua(null,{creating:[is,Ee],reading:[_s,ta],updating:[os,Ee],deleting:[Ts,Ee]})})),this.Transaction=(r=this,Un(rt.prototype,function(m,k,w,x,g){var E=this;m!=="readonly"&&k.forEach(function(_){_=(_=w[_])==null?void 0:_.yProps,_&&(k=k.concat(_.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=m,this.storeNames=k,this.schema=w,this.chromeTransactionDurability=x,this.idbtrans=null,this.on=ua(this,"complete","error","abort"),this.parent=g||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Y(function(_,S){E._resolve=_,E._reject=S}),this._completion.then(function(){E.active=!1,E.on.complete.fire()},function(_){var S=E.active;return E.active=!1,E.on.error.fire(_),E.parent?E.parent._reject(_):S&&E.idbtrans&&E.idbtrans.abort(),Ge(_)})})),this.Version=(i=this,Un(ln.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,Un(pe.prototype,function(m,k,w){if(this.db=c,this._ctx={table:m,index:k===":id"?null:k,or:w},this._cmp=this._ascending=ve,this._descending=function(x,g){return ve(g,x)},this._max=function(x,g){return 0<ve(x,g)?x:g},this._min=function(x,g){return ve(x,g)<0?x:g},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=Bt(t.IDBKeyRange),this._createTransaction=function(m,k,w,x){return new u.Transaction(m,k,w,u._options.chromeTransactionDurability,x)},this._fireOnBlocked=function(m){u.on("blocked").fire(m),Gn.filter(function(k){return k.name===u.name&&k!==u&&!k._state.vcFired}).map(function(k){return k.on("versionchange").fire(m)})},this.use(Fs),this.use(Cs),this.use(bs),this.use(ms),this.use(gs),new Proxy(this,{get:function(m,k,w){var x;return k==="_vip"||(k==="table"?function(g){return pa(u.table(g),C)}:(x=Reflect.get(m,k,w))instanceof vs?pa(x,C):k==="tables"?x.map(function(g){return pa(g,C)}):k==="_createTransaction"?function(){return pa(x.apply(this,arguments),C)}:x)}}));this.vip=C,b.forEach(function(m){return m(u)})}var fa,In=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ls=(Za.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Za.prototype[In]=function(){return this},Za);function Za(e){this._subscribe=e}try{fa={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{fa={indexedDB:null,IDBKeyRange:null}}function es(e){var t,n=!1,s=new Ls(function(r){var i=sn(e),c,u=!1,b={},$={},C={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),m&&xe.storagemutated.unsubscribe(w))}},m=(r.start&&r.start(C),!1),k=function(){return Ga(x)},w=function(g){da(b,g),T($,b)&&k()},x=function(){var g,E,_;!u&&fa.indexedDB&&(b={},g={},c&&c.abort(),c=new AbortController,_=(S=>{var A=vn();try{i&&Wn();var F=mn(e,S);return F=i?F.finally(gn):F}finally{A&&Mn()}})(E={subscr:g,signal:c.signal,requery:k,querier:e,trans:null}),Promise.resolve(_).then(function(S){n=!0,t=S,u||E.signal.aborted||(b={},(A=>{for(var F in A)if(ie(A,F))return;return 1})($=g)||m||(xe(Pe,w),m=!0),Ga(function(){return!u&&r.next&&r.next(S)}))},function(S){n=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||u||Ga(function(){u||r.error&&r.error(S)})}))};return setTimeout(k,0),C});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var xn=Zt;function kn(e){var t=wn;try{wn=!0,xe.storagemutated.fire(e),qt(e,!0)}finally{wn=t}}lt(xn,X(X({},Ft),{delete:function(e){return new xn(e,{addons:[]}).delete()},exists:function(e){return new xn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=xn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(ot(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==$a})}):Tt(n,t).toCollection().primaryKeys()).then(e)}catch{return Ge(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){fe(this,e)}},ignoreTransaction:function(e){return W.trans?_n(W.transless,e):e()},vip:ut,async:function(e){return function(){try{var t=Aa(e.apply(this,arguments));return t&&typeof t.then=="function"?t:Y.resolve(t)}catch(n){return Ge(n)}}},spawn:function(e,t,n){try{var s=Aa(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:Y.resolve(s)}catch(r){return Ge(r)}},currentTransaction:{get:function(){return W.trans||null}},waitFor:function(e,t){return e=Y.resolve(typeof e=="function"?xn.ignoreTransaction(e):e).timeout(t||6e4),W.trans?W.trans.waitFor(e):e},Promise:Y,debug:{get:function(){return Dt},set:function(e){qn(e)}},derive:gt,extend:fe,props:lt,override:bt,Events:ua,on:xe,liveQuery:es,extendObservabilitySet:da,getByKeyPath:Ht,setByKeyPath:ht,delByKeyPath:function(e,t){typeof t=="string"?ht(e,t,void 0):"length"in t&&[].map.call(t,function(n){ht(e,n,void 0)})},shallowClone:pt,deepClone:Ct,getObjectDiff:Pa,cmp:ve,asap:yt,minKey:-1/0,addons:[],connections:Gn,errnames:ya,dependencies:fa,cache:N,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),xn.maxKey=Bt(xn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(xe(Pe,function(e){wn||(e=new CustomEvent(st,{detail:e}),wn=!0,dispatchEvent(e),wn=!1)}),addEventListener(st,function(e){e=e.detail,wn||kn(e)}));var Jn,wn=!1,xs=function(){};return typeof BroadcastChannel<"u"&&((xs=function(){(Jn=new BroadcastChannel(st)).onmessage=function(e){return e.data&&kn(e.data)}})(),typeof Jn.unref=="function"&&Jn.unref(),xe(Pe,function(e){wn||Jn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Zt.disableBfCache&&e.persisted){Dt&&console.debug("Dexie: handling persisted pagehide"),Jn?.close();for(var t=0,n=Gn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Zt.disableBfCache&&e.persisted&&(Dt&&console.debug("Dexie: handling persisted pageshow"),xs(),kn({all:new ze(-1/0,[[]])}))})),Y.rejectionMapper=function(e,t){return!e||e instanceof En||e instanceof TypeError||e instanceof SyntaxError||!e.name||!rs[e.name]?e:(t=new rs[e.name](t||e.message,e),"stack"in e&&De(t,"stack",{get:function(){return this.inner.stack}}),t)},qn(Dt),X(Zt,Object.freeze({__proto__:null,Dexie:Zt,Entity:hs,PropModification:ca,RangeSet:ze,add:function(e){return new ca({add:e})},cmp:ve,default:Zt,liveQuery:es,mergeRanges:ye,rangesOverlap:Pn,remove:function(e){return new ca({remove:e})},replacePrefix:function(e,t){return new ca({replacePrefix:[e,t]})}}),{default:Zt}),Zt})})(ws)),ws.exports}var yi=bi();const zs=mi(yi),Pr=Symbol.for("Dexie"),Ss=globalThis[Pr]||(globalThis[Pr]=zs);if(zs.semVer!==Ss.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${zs.semVer} and ${Ss.semVer}`);const{liveQuery:Ii,mergeRanges:Fi,rangesOverlap:Di,RangeSet:Ni,cmp:Li,Entity:Ki,PropModification:qi,replacePrefix:Ri,add:ji,remove:Vi,DexieYProvider:Yi}=Ss,Fe=new Ss("haushaltsbuch-db");Fe.version(1).stores({years:"year",fixedTemplateState:"id"});Fe.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Fe.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});Fe.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Nn="singleton";function Ra(){return new Date().toISOString()}async function ba(){return Fe.years.orderBy("year").toArray()}async function Ci(B){return Fe.years.get(B)}async function ga(B){await Fe.years.put(B)}async function Ws(){const B=await Fe.fixedTemplateState.get(Nn);if(!B){const h={id:Nn,templates:[],version:Ra(),updatedAt:new Date().toISOString()};return await Fe.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Gs(B){const h=Ra();return await Fe.fixedTemplateState.put({id:Nn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function Us(){const B=await Fe.annualVariableFixedTemplateState.get(Nn);if(!B){const h={id:Nn,templates:[],version:Ra(),updatedAt:new Date().toISOString()};return await Fe.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Hs(B){const h=Ra();return await Fe.annualVariableFixedTemplateState.put({id:Nn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function xi(B){await Fe.auditLog.put(B)}async function Js(){const B=await Fe.searchEvaluationState.get(Nn);if(!B){const h={id:Nn,results:[],version:Ra(),updatedAt:new Date().toISOString()};return await Fe.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:B.results,version:B.version}}async function $s(B){const h=Ra();return await Fe.searchEvaluationState.put({id:Nn,results:B,version:h,updatedAt:new Date().toISOString()}),h}async function Xs(){return Fe.auditLog.orderBy("timestampIso").toArray()}async function ki(B){await Fe.auditLog.clear(),B.length!==0&&await Fe.auditLog.bulkPut(B)}async function wi(){const B=await ba(),[h,Se,X,he]=await Promise.all([Ws(),Us(),Xs(),Js()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:h.templates,annualVariableFixedTemplates:Se.templates,auditLogEntries:X,savedSearchEvaluations:he.results}}async function $i(B){await Fe.transaction("rw",[Fe.years,Fe.fixedTemplateState,Fe.annualVariableFixedTemplateState,Fe.auditLog,Fe.searchEvaluationState],async()=>{await Fe.years.clear(),await Fe.years.bulkPut(B.years),await Gs(B.fixedTemplates),await Hs(B.annualVariableFixedTemplates??[]),await ki(B.auditLogEntries??[]),await $s(B.savedSearchEvaluations??[])})}function Re(B){const h=B.replace(",",".").trim();if(!h)return 0;const Se=Number.parseFloat(h);return Number.isNaN(Se)?0:Math.round(Se*100)}const Si=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return Si.format(B/100)}function kt(B){return(B/100).toFixed(2)}function Ae(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const Dr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Or(B){return Dr.includes(B)}function Ei(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Ir=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Bi(B){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Se="habu-theme",X="habu-backup-dirty",he="habu-unexported-change-log",ae="habu-last-backup-filename",Ce="habu-recurring-budget-defaults";let se=null,fe=null,Je=null,je=null,ie=!1,lt=!1;const nt=new WeakMap;function De(){const o=B.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),p=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),v=l.getPropertyValue("--table-stripe").trim(),M=l.getPropertyValue("--table-border").trim(),P=l.getPropertyValue("--budget-under").trim(),D=l.getPropertyValue("--danger-2").trim(),I=96,G=250,V=J=>1-Math.pow(1-Math.max(0,Math.min(1,J)),3);o.forEach(J=>{J.dataset.hoverBound!=="1"&&(J.dataset.hoverBound="1",J.addEventListener("mouseenter",()=>{J.dataset.hovering="1",De()}),J.addEventListener("mouseleave",()=>{delete J.dataset.hovering,delete J.dataset.hoverX,De()}),J.addEventListener("mousemove",Le=>{const we=J.getBoundingClientRect(),Ke=Math.round(Le.clientX-we.left);J.dataset.hoverX=String(Ke),De()}));const te=Number.parseInt(J.dataset.budgetCents??"0",10),pe=Number.parseInt(J.dataset.actualCents??"0",10),re=J.dataset.label??"Kategorie",Me=J.dataset.hovering==="1",ce=`${re}|${te}|${pe}`,Pe=J.dataset.lastRenderSignature!==ce;J.dataset.lastRenderSignature=ce;const st=Math.max(120,Math.floor(J.clientWidth||120)),xe=window.devicePixelRatio||1,rt=Math.floor(st*xe),et=Math.floor(I*xe);(J.width!==rt||J.height!==et)&&(J.width=rt,J.height=et);const K=J.getContext("2d");if(!K)return;const Et=Math.max(1,te,pe),it=Math.min(1,Math.max(0,te/Et)),Bt=Math.min(1,Math.max(0,pe/Et)),Mt=te-pe,be=te>0?pe/te*100:pe>0?100:0,Yt=8,Oe=Yt,Qe=34,tt=st-Yt*2,Ve=22,Ye=Number.parseInt(J.dataset.hoverX??"-1",10),Lt=(Le,we,Ke,Ue,Ze)=>{K.beginPath(),K.moveTo(Le+Ze,we),K.lineTo(Le+Ke-Ze,we),K.quadraticCurveTo(Le+Ke,we,Le+Ke,we+Ze),K.lineTo(Le+Ke,we+Ue-Ze),K.quadraticCurveTo(Le+Ke,we+Ue,Le+Ke-Ze,we+Ue),K.lineTo(Le+Ze,we+Ue),K.quadraticCurveTo(Le,we+Ue,Le,we+Ue-Ze),K.lineTo(Le,we+Ze),K.quadraticCurveTo(Le,we,Le+Ze,we),K.closePath()},Jt=Le=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,J.width,J.height),K.scale(xe,xe),Lt(Oe,Qe,tt,Ve,8),K.fillStyle=v,K.fill(),K.strokeStyle=M,K.lineWidth=1,K.stroke();const we=[.6,.25,.15],Ke=[.1,.16,.24];let Ue=0;we.forEach((ot,ut)=>{const zt=tt*ot;K.save(),K.globalAlpha=Ke[ut]??.1,K.fillStyle=d,K.fillRect(Oe+Ue,Qe,zt,Ve),K.restore(),Ue+=zt});const Ze=te>0&&pe>te?D:P,ln=tt*Bt*Le;Lt(Oe,Qe+3,ln,Ve-6,6),K.fillStyle=Ze,K.fill(),Me&&(K.save(),K.strokeStyle=Ze,K.lineWidth=1.5,K.globalAlpha=.8,Lt(Oe-1,Qe+2,Math.max(2,ln+2),Ve-4,7),K.stroke(),K.restore());const xt=Oe+tt*it;K.strokeStyle=p,K.lineWidth=Me?3:2,K.beginPath(),K.moveTo(xt,Qe-3),K.lineTo(xt,Qe+Ve+3),K.stroke(),Me&&Ye>=Oe&&Ye<=Oe+tt&&(K.save(),K.strokeStyle=p,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(Ye,Qe-8),K.lineTo(Ye,Qe+Ve+8),K.stroke(),K.restore()),K.fillStyle=p,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(re,Oe,10);const Tt=be*Le;if(K.fillStyle=be>100?D:be<100?P:d,K.textAlign="right",K.fillText(`${Tt.toFixed(0)}%`,Oe+tt,10),K.fillStyle=d,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${f(pe)} · Ziel ${f(te)} · Δ ${Mt>=0?"+":""}${f(Mt)}`,Oe,64),Me){const ot=`Nutzung ${be.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const ut=8,zt=5,ze=22,ye=K.measureText(ot).width+ut*2,Pn=Number.isFinite(Ye)?Ye-ye/2:Oe+tt-ye,At=Math.min(Oe+tt-ye,Math.max(Oe,Pn)),On=Qe-ze-8;K.save(),K.fillStyle=p,K.globalAlpha=.92,Lt(At,On,ye,ze,6),K.fill(),K.restore(),K.fillStyle=v,K.textAlign="left",K.textBaseline="top",K.fillText(ot,At+ut,On+zt)}},_t=nt.get(J);if(_t&&window.cancelAnimationFrame(_t),!Pe){Jt(1);return}const Kt=performance.now(),vt=Le=>{const we=Le-Kt,Ke=Math.min(1,we/G);if(Jt(V(Ke)),Ke<1){const Ue=window.requestAnimationFrame(vt);nt.set(J,Ue);return}nt.delete(J)},Cn=window.requestAnimationFrame(vt);nt.set(J,Cn)})}function gt(){B.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const p=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(p.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),v=l.querySelector("[data-year-trend-active-net]"),M=l.querySelector("[data-year-trend-active-income]"),P=l.querySelector("[data-year-trend-active-expense]"),D=l.querySelector("[data-year-trend-active-delta]"),I=l.querySelector("[data-year-trend-live]");if(!d||!v||!M||!P||!D)return;const G=(te,pe)=>{te.classList.remove("danger","budget-under");const re=pe<0?"danger":pe>0?"budget-under":"";re&&te.classList.add(re)},V=te=>{const pe=te.dataset.monthLabel??"-",re=Number.parseInt(te.dataset.netCents??"0",10),Me=Number.parseInt(te.dataset.actualNetCents??"0",10),ce=Number.parseInt(te.dataset.incomeCents??"0",10),Pe=Number.parseInt(te.dataset.expenseCents??"0",10),st=Number.parseInt(te.dataset.deltaCents??"0",10);d.textContent=pe,v.textContent=f(re),M.textContent=f(ce),P.textContent=f(Pe),D.textContent=`${st>=0?"+":""}${f(st)}`,G(v,re),G(D,st),p.forEach(xe=>{const rt=xe===te;xe.classList.toggle("is-active",rt),xe.setAttribute("aria-pressed",String(rt))}),I&&(I.textContent=`${pe}: Kalkulierter Saldo ${f(re)}, Ist-Saldo ${f(Me)}, Einkommen ${f(ce)}, Ausgaben ${f(Pe)}`)};p.forEach(te=>{const pe=()=>{V(te)};te.addEventListener("mouseenter",pe),te.addEventListener("focus",pe),te.addEventListener("click",pe)});const J=p.find(te=>te.dataset.pointDefault==="1")??p[p.length-1];J&&V(J)})}function nn(o){if(o==="dashboard"){const l=h.years.slice().sort((d,v)=>v.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ne()}function Ln(){h.topModal&&(h.topModal=null,ne())}function an(){h.showUnexportedChangeLogModal=!0,ne()}function bt(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ne())}function ct(){h.showPersistentAuditLogModal=!0,ne()}function yt(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ne())}function Ht(){ie||(ie=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),bt();return}if(h.showPersistentAuditLogModal){o.preventDefault(),yt();return}h.topModal&&(o.preventDefault(),Ln())}}))}function ht(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function pt(){const o=B.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",ht())}function Es(){if(lt)return;lt=!0;const o=()=>{pt(),De()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function ja(){if(se&&document.body.contains(se))return se;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return se=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),se=l,l}function ns(){if(fe&&document.body.contains(fe))return fe;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return fe=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),fe=l,l}function Zn(){if(je&&document.body.contains(je))return je;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return je=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),je=l,l}function Ct(){if(!fe){Je=null;return}fe.innerHTML="",Je=null}function ea(){je&&(je.innerHTML="")}function Va(o,l,p){const d=new Date,v=d.getFullYear(),M=d.getMonth()+1,P=d.getDate(),D=new Date(o,l,0).getDate();if(o<v||o===v&&l<M)return{occurrences:0,remainingDays:0};const I=o===v&&l===M?Math.min(P,D):1,G=Math.max(0,D-I+1);let V=0;for(let J=I;J<=D;J+=1)new Date(o,l-1,J).getDay()===p&&(V+=1);return{occurrences:V,remainingDays:G}}async function Ya(o,l){const p=Ne();p&&(p.weeklyShoppingWeekday=o,p.weeklyShoppingEstimateCents=Math.max(0,l),await Xe(`Wocheneinkauf geplant: ${Ir.find(d=>d.value===o)?.label??"Wochentag"} mit ${f(p.weeklyShoppingEstimateCents)} €`),ne())}function Bs(){const o=Ne(),l=jn();if(!o||!l)return;const p=Zn();ea();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,v=o.weeklyShoppingEstimateCents??0,M=l.year,P=o.month,D=$t(M,P),I=D?Vt(D):{foodCents:0},G=D?D.foodBudgetCents??0:0,V=I.foodCents,J=G-V;p.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Ir.map(be=>`<option value="${be.value}" ${be.value===d?"selected":""}>${be.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${kt(v)}" />
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
    `;const te=p.querySelector(".weekly-shopping-modal-backdrop"),pe=p.querySelector("#weekly-shopping-weekday"),re=p.querySelector("#weekly-shopping-estimate"),Me=p.querySelector("#weekly-shopping-occurrences"),ce=p.querySelector("#weekly-shopping-total"),Pe=p.querySelector("#weekly-shopping-rest-before"),st=p.querySelector("#weekly-shopping-rest-after"),xe=p.querySelector("#weekly-shopping-days-left"),rt=p.querySelector("#weekly-shopping-per-day"),et=p.querySelector("#weekly-shopping-cancel"),K=p.querySelector("#weekly-shopping-save");function Et(){const be=Number.parseInt(pe?.value??"1",10);return Number.isInteger(be)&&be>=0&&be<=6?be:1}function it(){return Math.max(0,Re(re?.value??"0"))}function Bt(){const be=Et(),Yt=it(),{occurrences:Oe,remainingDays:Qe}=Va(M,P,be),tt=Oe*Yt,Ve=J-tt,Ye=Qe>0?Math.trunc(Ve/Qe):0;Me&&(Me.textContent=`${Oe}`),ce&&(ce.textContent=`${f(tt)} €`),Pe&&(Pe.textContent=`${f(J)} €`),st&&(st.textContent=`${f(Ve)} €`,st.className=Ve<0?"danger":Ve>0?"budget-under":""),xe&&(xe.textContent=`${Qe}`),rt&&(rt.textContent=`${f(Ye)} €`,rt.className=Ye<0?"danger":Ye>0?"budget-under":"")}async function Mt(){await Ya(Et(),it()),ea()}et?.addEventListener("click",()=>{ea()}),K?.addEventListener("click",async()=>{await Mt()}),pe?.addEventListener("change",()=>{Bt()}),re?.addEventListener("input",()=>{Bt()}),re?.addEventListener("keydown",async be=>{if(be.key==="Escape"){be.preventDefault(),ea();return}be.key==="Enter"&&(be.preventDefault(),await Mt())}),te?.addEventListener("click",be=>{be.target===te&&ea()}),window.setTimeout(()=>{re?.focus(),re?.select(),Bt()},0)}function un(o,l){let p=o;const d=l.min;if(d){const M=Number.parseFloat(d);if(!Number.isNaN(M)){const P=Math.round(M*100);p=Math.max(p,P)}}const v=l.max;if(v){const M=Number.parseFloat(v);if(!Number.isNaN(M)){const P=Math.round(M*100);p=Math.min(p,P)}}return p}function at(o){if(o.disabled)return;const l=ns();Ct(),Je=o;const p=Re(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
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
    `;const v=l.querySelector(".amount-modal-backdrop"),M=l.querySelector("#amount-modal-delta"),P=l.querySelector("#amount-modal-next-delta"),D=l.querySelector("#amount-modal-next-overwrite"),I=l.querySelector("#amount-modal-cancel"),G=l.querySelector("#amount-modal-overwrite"),V=l.querySelector("#amount-modal-apply");function J(){const ce=Re(M?.value??"0");return un(p+ce,o)}function te(){const ce=Re(M?.value??"0");return un(ce,o)}function pe(){P&&(P.textContent=`${f(J())} €`),D&&(D.textContent=`${f(te())} €`)}function re(){const ce=Je;if(!ce){Ct();return}const Pe=J();Ct(),ce.value=kt(Pe),ce.dispatchEvent(new Event("change",{bubbles:!0}))}function Me(){const ce=Je;if(!ce){Ct();return}const Pe=te();Ct(),ce.value=kt(Pe),ce.dispatchEvent(new Event("change",{bubbles:!0}))}I?.addEventListener("click",()=>{Ct()}),G?.addEventListener("click",()=>{Me()}),V?.addEventListener("click",()=>{re()}),M?.addEventListener("input",()=>{pe()}),M?.addEventListener("keydown",ce=>{if(ce.key==="Escape"){ce.preventDefault(),Ct();return}ce.key==="Enter"&&(ce.preventDefault(),re())}),v?.addEventListener("click",ce=>{ce.target===v&&Ct()}),window.setTimeout(()=>{M?.focus(),M?.select(),pe()},0)}function oe(o,l="success"){const p=ja(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,p.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const v=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},v)}function sn(){return new Date().getMonth()+1}function Ft(){return new Date().getFullYear()}function as(o){const l=Ft(),p=o.find(d=>d.year===l);return p?p.year:o[0]?.year??null}function En(){return new Date().toISOString().slice(0,10)}function ss(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),p=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${p}${d}`}function ft(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Kn(){const o=localStorage.getItem(Se);return o&&Or(o)?o:"light"}function ya(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Se,o)}function Ms(){return localStorage.getItem(X)==="1"}function ee(o){localStorage.setItem(X,o?"1":"0")}function rs(){const o=localStorage.getItem(he);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(p=>{if(!p||typeof p!="object")return!1;const d=p;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function Ee(o){localStorage.setItem(he,JSON.stringify(o.slice(-200)))}function ta(){const o=localStorage.getItem(ae);if(!o)return null;const l=o.trim();return l||null}function _s(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(Ce);if(!l)return o;try{const p=JSON.parse(l),d=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:d(p.foodBudgetCents),goingOutBudgetCents:d(p.goingOutBudgetCents),fixedBudgetCents:d(p.fixedBudgetCents),variableBudgetCents:d(p.variableBudgetCents),miscBudgetCents:d(p.miscBudgetCents)}}catch{return o}}function Bn(o){localStorage.setItem(Ce,JSON.stringify(o))}function is(o){o.months.forEach(l=>{const{recurringBudgetDefaults:p}=h;typeof p.foodBudgetCents=="number"&&(l.foodBudgetCents=p.foodBudgetCents),typeof p.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=p.goingOutBudgetCents),typeof p.fixedBudgetCents=="number"&&(l.fixedBudgetCents=p.fixedBudgetCents),typeof p.variableBudgetCents=="number"&&(l.variableBudgetCents=p.variableBudgetCents),typeof p.miscBudgetCents=="number"&&(l.miscBudgetCents=p.miscBudgetCents)})}function Ts(o){const l=o.trim();l&&localStorage.setItem(ae,l)}async function os(){if(h.savedSearchEvaluations.length===0)return;const o=Ft(),l=sn(),p=h.savedSearchEvaluations.map(d=>({...Tr(h.years,d.keyword,o,l),id:d.id,createdAt:d.createdAt}));h.savedSearchEvaluations=p,await $s(p)}async function As(){ja(),ya(Kn()),h.hasUnexportedChanges=Ms(),h.unexportedChangeLog=rs(),h.persistentAuditLog=await Xs(),h.lastBackupFileName=ta(),h.recurringBudgetDefaults=_s(),Ht(),Es();const[o,l,p,d]=await Promise.all([ba(),Ws(),Us(),Js()]);h.years=o,h.annualVariableFixedTemplates=p.templates,h.annualVariableFixedTemplateVersion=p.version,na(h.years),oa(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,h.savedSearchEvaluations=d.results,await Rn(h.years),await os(),o.length>0&&(h.selectedYear=as(o),h.selectedMonth=sn()),ne()}function na(o){const l=p=>p==="balance"||p==="fresh"||p==="salary"?p:void 0;o.forEach(p=>{p.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const v=Number(d.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?d.weeklyShoppingWeekday=v:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(v=>{const M=l(v.incomeSource);if(!M){const{incomeSource:P,...D}=v;return D}return{...v,incomeSource:M}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((v,M)=>v+M.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((v,M)=>v+M.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Dt(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function qn(o){return o==="fresh"||o==="salary"||!o}async function Rn(o){for(const l of o)await ga(l)}function jn(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ne(){const o=jn();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function $t(o,l){const p=h.years.find(d=>d.year===o);if(p)return p.months.find(d=>d.month===l)}function Vt(o){const l=o.days.reduce((D,I)=>D+I.foodCents,0),p=o.days.reduce((D,I)=>D+I.goingOutCents,0),d=o.fixedCosts.reduce((D,I)=>D+I.actualCents,0),v=o.variableCosts.reduce((D,I)=>D+I.amountCents,0)+o.variablePositions.reduce((D,I)=>D+I.actualCents,0),M=o.miscCosts.reduce((D,I)=>D+I.amountCents,0),P=l+p+d+v+M;return{foodCents:l,goingOutCents:p,fixedCents:d,variableCents:v,miscCents:M,totalCents:P}}function Vn(o){const l=o.foodBudgetCents??0,p=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((P,D)=>P+D.plannedCents,0),v=o.variablePositions.reduce((P,D)=>P+D.budgetCents,0),M=o.miscBudgetCents??0;return l+p+d+(o.variableBudgetCents??v)+M}function dn(o){return o.months.reduce((l,p)=>{const d=Vt(p);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function za(o){return o.months.slice().sort((l,p)=>l.month-p.month).map(l=>({month:l.month,summary:Vt(l)}))}function Yn(o){const l=o.months.reduce((P,D)=>P+(D.foodBudgetCents??0),0),p=o.months.reduce((P,D)=>P+(D.goingOutBudgetCents??0),0),d=o.months.reduce((P,D)=>P+(D.fixedBudgetCents??D.fixedCosts.reduce((I,G)=>I+G.plannedCents,0)),0),v=o.months.reduce((P,D)=>P+(D.variableBudgetCents??D.variablePositions.reduce((I,G)=>I+G.budgetCents,0)),0),M=o.months.reduce((P,D)=>P+(D.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:p,fixedCents:d,variableCents:v,miscCents:M,totalCents:l+p+d+v+M}}function rn(o){return o.months.reduce((l,p)=>l+p.incomes.reduce((d,v)=>d+(qn(v.incomeSource)?v.amountCents:0),0),0)}function aa(o){return o.months.reduce((l,p)=>(p.incomes.forEach(d=>{if(d.incomeSource==="salary"){l.salaryIncomeCents+=d.amountCents;return}(d.incomeSource==="fresh"||d.incomeSource==null)&&(l.freshIncomeCents+=d.amountCents)}),l),{salaryIncomeCents:0,freshIncomeCents:0})}function sa(o,l){const p=o.months.slice().sort((d,v)=>d.month-v.month)[0];return p?l.get(ge(o.year,p.month))?.carriedFromPreviousCents??0:0}function hn(){const o=h.years.slice().sort((d,v)=>d.year-v.year).flatMap(d=>d.months.slice().sort((v,M)=>v.month-M.month).map(v=>({year:d.year,month:v}))),l=new Map;let p=0;return o.forEach(({year:d,month:v},M)=>{const P=v.carryoverOverrideCents,D=typeof P=="number",I=D?P:p,G=M>0||D,V=v.incomes.reduce((re,Me)=>re+(qn(Me.incomeSource)?Me.amountCents:0),0),J=Vn(v),te=V+I,pe=te-J;l.set(ge(d,v.month),{hasPreviousMonth:G,carriedFromPreviousCents:I,recordedIncomeCents:V,effectiveIncomeCents:te,plannedBudgetCents:J,netCents:pe}),p=pe}),l}function W(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function ra(o){return`${o>0?"+":""}${f(o)}`}function Nt(o,l){const p=o-l,d=W(l,o);return`${f(o)} <span class="eval-diff ${d}">(Δ ${ra(p)})</span>`}function pn(o,l){const p=o!==null,d=p?o-l:null,v=p?W(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${p?`${f(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(l)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${d===null?"-":`${f(d)} €`}</strong>
      </div>
    </div>`}async function Y(o){if(await Ci(o)){alert(`Jahr ${o} existiert bereits.`);return}const p=Mr(o,h.fixedTemplates,h.fixedTemplateVersion);is(p),ia(p),await ga(p),h.years=await ba(),fn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=sn(),oe(`Jahr ${o} wurde angelegt.`),ne()}function fn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",p=new Date().toISOString(),d=`${o} (${l})`,v={id:wt("change"),timestampIso:p,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,v].slice(-200),Ee(h.unexportedChangeLog);const M={id:wt("audit"),timestampIso:p,message:d};h.persistentAuditLog=[...h.persistentAuditLog,M].slice().sort((P,D)=>P.timestampIso.localeCompare(D.timestampIso)),xi(M).catch(P=>{console.error("Audit-Log konnte nicht gespeichert werden",P),oe("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function ls(o){const l=o.trim();l&&(h.lastBackupFileName=l,Ts(l))}function Ca(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],Ee([]),h.showUnexportedChangeLogModal=!1,ls(o)}async function Xe(o){const l=jn();l&&(await ga(l),h.years=await ba(),fn(o))}async function St(o){for(const l of h.years)await ga(l);h.years=await ba(),fn(o)}function ge(o,l){return o*100+l}function zn(o,l,p){const d=`${o} auf ${f(p)} € gesetzt`;return p>l?`${d} (erhöht um ${f(p-l)} €)`:p<l?`${d} (verringert um ${f(l-p)} €)`:d}function vn(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const p=l[1],d=l[2];return!p||!d?null:{year:Number.parseInt(p,10),month:Number.parseInt(d,10)}}function Mn(o,l){const p=vn(o.dueDateIso);if(!p||l.year<p.year)return;const d=l.months.find(M=>M.month===p.month);!d||d.variablePositions.some(M=>M.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:wt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],_e(d))}function ia(o){h.annualVariableFixedTemplates.forEach(l=>{Mn(l,o)})}function oa(o){const l=new Set(h.annualVariableFixedTemplates.map(p=>p.id));o.forEach(p=>{p.months.forEach(d=>{const v=d.variablePositions.some(P=>typeof P.autoAnnualTemplateId=="string"),M=d.fixedCosts.some(P=>typeof P.autoAnnualTemplateId=="string");v&&(d.variablePositions=d.variablePositions.filter(P=>P.autoAnnualTemplateId?l.has(P.autoAnnualTemplateId):!0),_e(d)),M&&(d.fixedCosts=d.fixedCosts.filter(P=>!P.autoAnnualTemplateId),ke(d))}),ia(p)})}function ke(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,p)=>l+p.plannedCents,0)}function _e(o){o.variableBudgetCents=o.variablePositions.reduce((l,p)=>l+p.budgetCents,0)}function Ps(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function la(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Ps());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const p=l[1],d=l[2];return!p||!d?null:{year:Number.parseInt(p,10),month:Number.parseInt(d,10)}}function xa(o,l){const p=ge(l.year,l.month);h.years.forEach(d=>{d.months.forEach(v=>{if(ge(d.year,v.month)<p)return;v.fixedCosts.some(P=>P.templateId===o.id)||(v.fixedCosts.push({id:wt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),ke(v))})})}function ka(o,l,p){const d=ge(p.year,p.month);h.years.forEach(v=>{v.months.forEach(M=>{ge(v.year,M.month)<d||(M.fixedCosts=M.fixedCosts.map(P=>P.templateId!==l.id?P:{...P,name:l.name,plannedCents:l.plannedCents,actualCents:P.actualCents===o.plannedCents?l.plannedCents:P.actualCents}),ke(M))})})}function Os(o,l){const p=ge(l.year,l.month);h.years.forEach(d=>{d.months.forEach(v=>{ge(d.year,v.month)<p||(v.fixedCosts=v.fixedCosts.filter(M=>M.templateId!==o),ke(v))})})}async function mn(o,l){const p=o.trim();if(!p)return;const d=la();if(!d)return;const v=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const M=h.fixedTemplates.find(D=>D.id===h.editingFixedTemplateId);if(!M)return;const P={...M,name:p,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(D=>D.id===h.editingFixedTemplateId?P:D),ka(M,P,d)}else{const M={id:wt("tpl"),name:p,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,M],xa(M,d)}h.fixedTemplateVersion=await Gs(h.fixedTemplates),h.editingFixedTemplateId=null,await St(v?`Fixkosten-Vorlage aktualisiert: ${p} (${f(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${p} (${f(l)} €)`),oe(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function Wn(o){h.editingFixedTemplateId=o,ne()}function gn(){h.editingFixedTemplateId=null,ne()}async function wa(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const p=la();if(!p)return;const d=h.fixedTemplates.find(v=>v.id===o);h.fixedTemplates=h.fixedTemplates.filter(v=>v.id!==o),Os(o,p),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Gs(h.fixedTemplates),await St(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),oe("Fixkosten-Vorlage wurde gelöscht."),ne()}async function Is(o,l,p){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=vn(l);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(p<=0){alert("Bitte einen positiven Betrag eingeben.");return}const M={id:wt("annualtpl"),name:d,plannedCents:p,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,M],h.years.forEach(P=>{Mn(M,P)}),h.annualVariableFixedTemplateVersion=await Hs(h.annualVariableFixedTemplates),await St(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${f(p)} €, jährlich in ${Ae(v.month)})`),oe("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function bn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const p=h.annualVariableFixedTemplates.find(d=>d.id===o);p&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(v=>{v.variablePositions=v.variablePositions.filter(M=>M.autoAnnualTemplateId!==o),_e(v),v.fixedCosts=v.fixedCosts.filter(M=>M.autoAnnualTemplateId!==o),ke(v)})}),h.annualVariableFixedTemplateVersion=await Hs(h.annualVariableFixedTemplates),await St(`Variable Fixkosten-Vorlage gelöscht: ${p.name}`),oe("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function Wa(o,l,p){const d=Ne();if(!d)return;const M=d.days.find(P=>P.isoDate===o)?.[l]??0;d.days=d.days.map(P=>P.isoDate===o?{...P,[l]:p}:P),await Xe(zn(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,M,p)),ne()}async function _n(o,l){const p=Ne();if(!p)return;const d=p.fixedCosts.find(v=>v.id===o);p.fixedCosts=p.fixedCosts.map(v=>v.id===o?{...v,actualCents:l}:v),await Xe(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${f(l)} €`),ne()}async function cs(o,l){const p=Ne();if(!p)return;const d=p.fixedCosts.find(M=>M.id===o);if(!d)return;const v=d.plannedCents;p.fixedCosts=p.fixedCosts.map(M=>M.id===o?{...M,plannedCents:l}:M),ke(p),await Xe(zn(`Fixkosten-Budget angepasst: ${d.name}`,v,l)),ne()}async function Ga(o,l){const p=Ne();if(!p)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:wt("fixed"),templateId:wt("fixed-local"),name:d,plannedCents:l,actualCents:0};p.fixedCosts=[v,...p.fixedCosts],ke(p),await Xe(`Fixkosten-Position hinzugefügt: ${d} (${f(l)} €)`),oe("Fixkosten-Position wurde hinzugefügt."),ne()}async function Ge(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const p=Ne();if(!p)return;const d=p.fixedCosts.find(v=>v.id===o);d&&(p.fixedCosts=p.fixedCosts.filter(v=>v.id!==o),ke(p),await Xe(`Fixkosten-Position gelöscht: ${d.name}`),oe("Fixkosten-Position wurde gelöscht."),ne())}async function Tn(o){await An("fixedBudgetCents",o,"Fixkosten")}async function on(o){await An("foodBudgetCents",o,"Essen")}async function us(o){await An("goingOutBudgetCents",o,"Ausgehen")}async function Gn(o){await An("miscBudgetCents",o,"Sonstiges")}async function $a(o){await An("variableBudgetCents",o,"Variable Kosten")}async function An(o,l,p){const d=Ne(),v=h.selectedYear;if(!d||!v||d[o]===l)return;const M=d[o];if(d[o]=l,confirm(`Soll das Budget "${p}" auch für zukünftige Monate übernommen werden?`)){const D=ge(v,h.selectedMonth);h.years.forEach(G=>{G.months.forEach(V=>{ge(G.year,V.month)<=D||(V[o]=l)})}),h.recurringBudgetDefaults[o]=l,Bn(h.recurringBudgetDefaults);const I=zn(`Budget "${p}"`,M??0,l);await St(`${I} (inkl. zukünftiger Monate)`),oe(`Budget "${p}" wurde für zukünftige Monate übernommen.`),ne();return}await Xe(zn(`Budget "${p}"`,M??0,l)),ne()}async function Sa(o){const l=Ne();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Xe(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(o)} € gesetzt`),ne())}async function yn(o,l,p){const d=Ne(),v=h.selectedYear;if(!d||!v)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:wt("varpos"),name:M,budgetCents:l,actualCents:0},...d.variablePositions],_e(d),p){const P=ge(v,h.selectedMonth);h.years.forEach(D=>{D.months.forEach(I=>{ge(D.year,I.month)<=P||(I.variablePositions=[{id:wt("varpos"),name:M,budgetCents:l,actualCents:0},...I.variablePositions],_e(I))})}),await St(`Variable Position hinzugefügt: ${M} (${f(l)} €) für zukünftige Monate`),oe("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await Xe(`Variable Position hinzugefügt: ${M} (${f(l)} €)`),oe("Variable Position wurde hinzugefügt."),ne()}async function ds(o,l){const p=Ne();if(!p)return;const d=p.variablePositions.find(M=>M.id===o),v=d?.actualCents??0;p.variablePositions=p.variablePositions.map(M=>M.id===o?{...M,actualCents:l}:M),await Xe(zn(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,v,l)),ne()}async function Ea(o,l){const p=Ne();if(!p)return;const d=p.variablePositions.find(M=>M.id===o),v=d?.budgetCents??0;p.variablePositions=p.variablePositions.map(M=>M.id===o?{...M,budgetCents:l}:M),_e(p),await Xe(zn(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,v,l)),ne()}async function hs(o){if(!confirm("Variable Position wirklich löschen?"))return;const p=Ne(),d=h.selectedYear;if(!p||!d)return;const v=p.variablePositions.find(I=>I.id===o);if(!v)return;const M=ge(d,h.selectedMonth),D=h.years.some(I=>I.months.some(G=>ge(I.year,G.month)>M&&G.variablePositions.some(V=>V.name===v.name&&V.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.variablePositions=p.variablePositions.filter(I=>I.id!==o),_e(p),D){h.years.forEach(I=>{I.months.forEach(G=>{ge(I.year,G.month)<=M||(G.variablePositions=G.variablePositions.filter(V=>!(V.name===v.name&&V.budgetCents===v.budgetCents)),_e(G))})}),await St(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),oe("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Xe(`Variable Position gelöscht: ${v.name}`),oe("Variable Position wurde gelöscht."),ne()}async function ve(o){const l=Ne(),p=h.selectedYear;if(!l||!p)return;const d=l.variablePositions.find(V=>V.id===o);if(!d)return;const v={year:h.selectedMonth===12?p+1:p,month:h.selectedMonth===12?1:h.selectedMonth+1};let M=h.years.find(V=>V.year===v.year);if(!M){const V=Mr(v.year,h.fixedTemplates,h.fixedTemplateVersion);is(V),ia(V),await ga(V),h.years=[...h.years,V].sort((J,te)=>J.year-te.year),M=V}const P=M.months.find(V=>V.month===v.month);if(!P)return;const D=P.variablePositions.some(V=>V.id===d.id||V.name===d.name&&V.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(V=>V.id!==o),_e(l),!D){const J=P.variablePositions.some(te=>te.id===d.id)?{...d,id:wt("varpos")}:d;P.variablePositions=[J,...P.variablePositions],_e(P)}const I=`${Ae(v.month)} ${v.year}`,G=`Variable Position verschoben: ${d.name} → ${I}`;if(v.year===p)await Xe(G);else{const V=jn();if(!V)return;await ga(V),await ga(M),h.years=await ba(),na(h.years),fn(G)}oe(D?`Position entfernt (im Folgemonat schon vorhanden: ${I}).`:`Position in den Folgemonat verschoben: ${I}.`),ne()}async function Ua(o,l,p){const d=Ne(),v=h.selectedYear;if(!d||!v)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P=Ys(M,l);if(d.miscCosts=[P,...d.miscCosts],p){const D=ge(v,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(G=>{ge(I.year,G.month)<=D||(G.miscCosts=[Ys(M,l),...G.miscCosts])})}),await St(`Sonstige Position hinzugefügt: ${M} (${f(l)} €) für zukünftige Monate`),oe("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await Xe(`Sonstige Position hinzugefügt: ${M} (${f(l)} €)`),oe("Sonstige Position wurde hinzugefügt."),ne()}function ps(o){const l=[];let p="",d=!1;for(let v=0;v<o.length;v+=1){const M=o[v],P=o[v+1];if(M==='"'){d&&P==='"'?(p+='"',v+=1):d=!d;continue}if(M===";"&&!d){l.push(p.trim()),p="";continue}p+=M}return l.push(p.trim()),l}async function Ba(o){const l=Ne();if(!l){oe("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const d=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(I=>I.trim()).filter(I=>I.length>0);if(d.length===0){oe("CSV-Datei ist leer.","error");return}const v=new Set(l.miscCosts.map(I=>`${I.description}__${I.amountCents}`));let M=0,P=0,D=0;if(d.forEach(I=>{const G=ps(I);if(G.length!==2){D+=1;return}const V=G[0]?.trim()??"",J=G[1]?.trim()??"",te=Re(J);if(!V||te<=0){D+=1;return}const pe=`${V}__${te}`;if(v.has(pe)){P+=1;return}l.miscCosts.push(Ys(V,te)),v.add(pe),M+=1}),M===0){const I=D>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${D}).`:"Keine Position importiert.";oe(I,"error");return}await Xe(`Sonstiges CSV-Import: ${M} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${D}`),oe(`Import abgeschlossen: ${M} übernommen, ${P} Duplikate, ${D} ungültig.`),ne()}async function ca(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const p=Ne(),d=h.selectedYear;if(!p||!d)return;const v=p.miscCosts.find(I=>I.id===o);if(!v)return;const M=ge(d,h.selectedMonth),D=h.years.some(I=>I.months.some(G=>ge(I.year,G.month)>M&&G.miscCosts.some(V=>V.description===v.description&&V.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.miscCosts=p.miscCosts.filter(I=>I.id!==o),D){h.years.forEach(I=>{I.months.forEach(G=>{ge(I.year,G.month)<=M||(G.miscCosts=G.miscCosts.filter(V=>!(V.description===v.description&&V.amountCents===v.amountCents)))})}),await St(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),oe("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Xe(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €)`),oe("Sonstige Position wurde gelöscht."),ne()}async function Ha(o,l,p,d){const v=Ne(),M=h.selectedYear;if(!v||!M)return;const P=o.trim();if(!P){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const D=_r(P,l,p);if(v.incomes=[D,...v.incomes],d){const I=ge(M,h.selectedMonth);h.years.forEach(G=>{G.months.forEach(V=>{ge(G.year,V.month)<=I||(V.incomes=[_r(P,l,p),...V.incomes])})}),await St(`Einkommen hinzugefügt: ${P} (${f(l)} €, ${Dt(p)}) für zukünftige Monate`),oe("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await Xe(`Einkommen hinzugefügt: ${P} (${f(l)} €, ${Dt(p)})`),oe("Einkommen wurde hinzugefügt."),ne()}async function fs(o,l){const p=Ne();if(!p)return;const d=p.incomes.find(v=>v.id===o);d&&(p.incomes=p.incomes.map(v=>{if(v.id!==o)return v;if(!l){const{incomeSource:M,...P}=v;return P}return{...v,incomeSource:l}}),await Xe(`Einkommensart angepasst: ${d.description} → ${Dt(l)}`),ne())}async function vs(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const p=Ne(),d=h.selectedYear;if(!p||!d)return;const v=p.incomes.find(I=>I.id===o);if(!v)return;const M=ge(d,h.selectedMonth),D=h.years.some(I=>I.months.some(G=>ge(I.year,G.month)>M&&G.incomes.some(V=>V.description===v.description&&V.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.incomes=p.incomes.filter(I=>I.id!==o),D){h.years.forEach(I=>{I.months.forEach(G=>{ge(I.year,G.month)<=M||(G.incomes=G.incomes.filter(V=>!(V.description===v.description&&V.amountCents===v.amountCents)))})}),await St(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),oe("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Xe(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €)`),oe("Einkommen wurde gelöscht."),ne()}async function Te(){const o=await wi(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),p=URL.createObjectURL(l),d=`haushaltsbuch-backup-${En()}-${ss()}.json`,v=document.createElement("a");v.href=p,v.download=d,v.click(),URL.revokeObjectURL(p),Ca(d),ne(),oe("Backup wurde exportiert.")}async function ua(o){const l=await o.text(),p=JSON.parse(l);await $i(p);const[d,v,M,P]=await Promise.all([ba(),Ws(),Us(),Js()]);h.years=d,h.annualVariableFixedTemplates=M.templates,h.annualVariableFixedTemplateVersion=M.version,na(h.years),oa(h.years),h.fixedTemplates=v.templates,h.fixedTemplateVersion=v.version,h.savedSearchEvaluations=P.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await Rn(h.years),await os(),h.persistentAuditLog=await Xs(),h.selectedYear=as(d),h.selectedMonth=sn(),Ca(o.name),oe("Backup wurde importiert."),ne()}function Un(o){h.evaluationQuery=o,h.evaluationCurrentResult=Tr(h.years,o,Ft(),sn()),ne()}async function Hn(){const o=h.evaluationCurrentResult;if(!o||!o.keywordNormalized){oe("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const l=h.savedSearchEvaluations.findIndex(p=>p.id===o.id);l>=0?h.savedSearchEvaluations[l]=o:h.savedSearchEvaluations=[o,...h.savedSearchEvaluations],await $s(h.savedSearchEvaluations),fn(`Auswertung gespeichert: ${o.keyword}`),oe(`Auswertung "${o.keyword}" wurde gespeichert.`),ne()}async function Ja(o){const l=h.savedSearchEvaluations.find(p=>p.id===o);l&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(p=>p.id!==o),await $s(h.savedSearchEvaluations),fn(`Auswertung gelöscht: ${l.keyword}`),oe(`Gespeicherte Auswertung "${l.keyword}" wurde gelöscht.`),ne())}function ne(){const o=jn(),l=Ne(),p=En(),d=l?Vt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=o?dn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},M=o?za(o):[],P=l?l.foodBudgetCents??0:0,D=l?l.goingOutBudgetCents??0:0,I=l?l.fixedBudgetCents??l.fixedCosts.reduce((a,y)=>a+y.plannedCents,0):0,G=l?l.variableBudgetCents??l.variablePositions.reduce((a,y)=>a+y.budgetCents,0):0,V=l?l.miscBudgetCents??0:0,J=o?o.months.reduce((a,y)=>a+(y.foodBudgetCents??0),0):0,te=o?o.months.reduce((a,y)=>a+(y.goingOutBudgetCents??0),0):0,pe=o?o.months.reduce((a,y)=>a+(y.fixedBudgetCents??y.fixedCosts.reduce((q,Z)=>q+Z.plannedCents,0)),0):0,re=o?o.months.reduce((a,y)=>a+(y.variableBudgetCents??y.variablePositions.reduce((q,Z)=>q+Z.budgetCents,0)),0):0,Me=o?o.months.reduce((a,y)=>a+(y.miscBudgetCents??0),0):0,ce=l?l.incomes.reduce((a,y)=>a+(qn(y.incomeSource)?y.amountCents:0),0):0,Pe=l?l.incomes.reduce((a,y)=>a+(y.incomeSource==="salary"?y.amountCents:0),0):0,st=l?l.incomes.reduce((a,y)=>a+(y.incomeSource==="fresh"?y.amountCents:0),0):0,xe=hn(),rt=o?xe.get(ge(o.year,h.selectedMonth)):void 0,et=o?o.months.slice().sort((a,y)=>a.month-y.month)[0]:void 0,K=rt?.carriedFromPreviousCents??0,Et=rt?.hasPreviousMonth??!1,it=rt?.effectiveIncomeCents??ce,Bt=l?Vn(l):0,Mt=rt?.netCents??ce-Bt,be=it-d.totalCents,Yt=Pe-d.totalCents,Oe=d.totalCents>0?`${(Pe/d.totalCents*100).toFixed(1)} %`:"-",Qe=K<0?"danger":K>0?"budget-under":"",tt=Mt<0?"danger":Mt>0?"budget-under":"",Ve=be<0?"danger":be>0?"budget-under":"",Ye=o?o.months.reduce((a,y)=>a+y.incomes.reduce((q,Z)=>q+(qn(Z.incomeSource)?Z.amountCents:0),0),0):0,Lt=o?o.months.reduce((a,y)=>a+y.incomes.reduce((q,Z)=>q+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,Jt=o?o.months.reduce((a,y)=>a+y.incomes.reduce((q,Z)=>q+(Z.incomeSource==="fresh"?Z.amountCents:0),0),0):0,_t=o&&et?xe.get(ge(o.year,et.month))?.carriedFromPreviousCents??0:0,Kt=Ye+_t,vt=Kt-v.totalCents,Cn=Lt-v.totalCents,Le=v.totalCents>0?`${(Lt/v.totalCents*100).toFixed(1)} %`:"-",we=_t<0?"danger":_t>0?"budget-under":"",Ke=vt<0?"danger":vt>0?"budget-under":"",Ue=P+D+I+G+V,Ze=P+D,ln=d.foodCents+d.goingOutCents,xt=Ze-ln,Tt=W(ln,Ze),ot=J+te+pe+re+Me,ut=it-Ue,zt=Kt-ot,ze=Ue-d.totalCents,Wt=ot-v.totalCents,ye=a=>a<0?"danger":a>0?"budget-under":"",Pn=(a,y)=>y<=0?"muted":a>=y?"budget-under":"danger",At=Pn(Pe,d.totalCents),On=Pn(Lt,v.totalCents),de=(a,y)=>{if(y<=0)return"0%";const Z=Math.max(0,a)/y*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},da=(a,y)=>{if(y<=0)return a>0?100:0;const q=Math.max(0,a)/y*100;return Math.max(0,q)},T=[{label:"Essen",budgetCents:P,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:D,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:I,actualCents:d.fixedCents},{label:"Variable",budgetCents:G,actualCents:d.variableCents},{label:"Sonstige",budgetCents:V,actualCents:d.miscCents}];Math.max(1,...T.flatMap(a=>[a.budgetCents,a.actualCents]));const N=(a,y)=>y<=0?"bar-positive":a<=0||y>a?"bar-negative":"bar-positive",mt=[{label:"Einkommen gesamt",valueCents:it,className:"bar-income"},{label:"Budget gesamt",valueCents:Ue,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:be,className:be<0?"bar-negative":"bar-positive"}],_a=Math.max(1,...mt.map(a=>Math.abs(a.valueCents))),Ta=o?o.months.slice().sort((a,y)=>a.month-y.month).map(a=>{const y=a.foodBudgetCents??0,q=a.goingOutBudgetCents??0,Z=a.fixedBudgetCents??a.fixedCosts.reduce((cn,Sn)=>cn+Sn.plannedCents,0),Be=a.variableBudgetCents??a.variablePositions.reduce((cn,Sn)=>cn+Sn.budgetCents,0),He=a.miscBudgetCents??0,jt=y+q+Z+Be+He;return{month:a.month,foodBudgetCents:y,goingOutBudgetCents:q,fixedBudgetCents:Z,variableBudgetCents:Be,miscBudgetCents:He,totalBudgetCents:jt}}):[],qt=new Map(Ta.map(a=>[a.month,a])),Gt=a=>{if(a.length===0)return null;const y=Math.min(...a),q=Math.max(...a),Z=Math.round(a.reduce((Be,He)=>Be+He,0)/a.length);return{min:y,avg:Z,max:q}},Xt=o&&o.year===Ft()?M.filter(a=>a.month<=sn()):M,Aa=Xt.map(a=>a.summary.foodCents),ha=Xt.map(a=>a.summary.goingOutCents),ms=Xt.map(a=>a.summary.fixedCents),Pa=Xt.map(a=>a.summary.variableCents),Oa=Xt.map(a=>a.summary.miscCents),gs=Xt.map(a=>a.summary.totalCents),Xa=Xt.map(a=>o?xe.get(ge(o.year,a.month))?.plannedBudgetCents??0:0),Fs=Xt.map(a=>o?xe.get(ge(o.year,a.month))?.netCents??0:0),Ia=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((y,q)=>y+(q.incomeSource==="salary"?q.amountCents:0),0)])),Fa=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((y,q)=>y+(q.incomeSource==="salary"||q.incomeSource==="fresh"?q.amountCents:0),0)])),bs=Xt.map(a=>Ia.get(a.month)??0),Qa=Xt.map(a=>Fa.get(a.month)??0),Rt={food:Gt(Aa),goingOut:Gt(ha),fixed:Gt(ms),variable:Gt(Pa),misc:Gt(Oa),total:Gt(gs),salary:Gt(bs),income:Gt(Qa),budget:Gt(Xa),net:Gt(Fs)},ys=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Qt={food:Aa.reduce((a,y)=>a+y,0),goingOut:ha.reduce((a,y)=>a+y,0),fixed:ms.reduce((a,y)=>a+y,0),variable:Pa.reduce((a,y)=>a+y,0),misc:Oa.reduce((a,y)=>a+y,0),total:gs.reduce((a,y)=>a+y,0),salary:bs.reduce((a,y)=>a+y,0),income:Qa.reduce((a,y)=>a+y,0),budget:Xa.reduce((a,y)=>a+y,0)},Ds=ys.map(({key:a,label:y})=>{const q=Rt.food?.[a]??null,Z=Rt.goingOut?.[a]??null,Be=Rt.fixed?.[a]??null,He=Rt.variable?.[a]??null,jt=Rt.misc?.[a]??null,cn=Rt.total?.[a]??null,Sn=Rt.salary?.[a]??null,dt=Rt.income?.[a]??null,ma=Rt.budget?.[a]??null,La=Rt.net?.[a]??null,Ot=Fn=>Fn===null?"-":f(Fn);return`<tr>
                  <td><strong>${y}</strong></td>
                  <td>${Ot(q)}</td>
                  <td>${Ot(Z)}</td>
                  <td>${Ot(Be)}</td>
                  <td>${Ot(He)}</td>
                  <td>${Ot(jt)}</td>
                  <td>${Ot(cn)}</td>
                  <td>${Ot(Sn)}</td>
                  <td>${Ot(dt)}</td>
                  <td>${Ot(ma)}</td>
                  <td>${Ot(La)}</td>
                </tr>`}).join(""),Ns=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(Qt.food)}</td>
                  <td>${f(Qt.goingOut)}</td>
                  <td>${f(Qt.fixed)}</td>
                  <td>${f(Qt.variable)}</td>
                  <td>${f(Qt.misc)}</td>
                  <td>${f(Qt.total)}</td>
                  <td>${f(Qt.salary)}</td>
                  <td>${f(Qt.income)}</td>
                  <td>${f(Qt.budget)}</td>
                  <td>-</td>
                </tr>`,Cs=Math.max(1,...M.flatMap(a=>{const y=qt.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,y??0]})),pa=Math.max(1,...M.flatMap(a=>{const y=qt.get(a.month),q=a.summary.foodCents+a.summary.goingOutCents,Z=(y?.foodBudgetCents??0)+(y?.goingOutBudgetCents??0);return[q,Z]})),Zt=Math.max(1,...M.flatMap(a=>{const y=qt.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,y]})),We=Math.max(1,...M.flatMap(a=>{const y=qt.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,y]})),fa=Math.max(1,...M.flatMap(a=>{const y=qt.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,y]})),In=W(d.fixedCents,I),Ls=W(d.foodCents,P),Za=W(d.goingOutCents,D),es=W(d.variableCents,G),xn=W(d.miscCents,V),kn=a=>a===0?"-":f(a),Jn=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(I)}</div>
        <div class="compact-cost-actual ${In}">${kn(d.fixedCents)}</div>
      </div>`,wn=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(G)}</div>
        <div class="compact-cost-actual ${es}">${kn(d.variableCents)}</div>
      </div>`,xs=l?l.fixedCosts.length>0?l.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${ft(a.name)}</div>
                  <div class="compact-cost-budget">${f(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${W(a.actualCents,a.plannedCents)}">${kn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,e=l?l.variablePositions.length>0?l.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${ft(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${W(a.actualCents,a.budgetCents)}">${kn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,t=h.editingFixedTemplateId?h.fixedTemplates.find(a=>a.id===h.editingFixedTemplateId):null,n=h.hasUnexportedChanges,s=h.unexportedChangeLog.slice().reverse(),r=h.persistentAuditLog.slice().sort((a,y)=>y.timestampIso.localeCompare(a.timestampIso)),i=h.lastBackupFileName?ft(h.lastBackupFileName):"-",c={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},u=h.years.slice().sort((a,y)=>a.year-y.year),b=u.some(a=>a.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??u[u.length-1]?.year??null,$=typeof b=="number"?u.find(a=>a.year===b):void 0,C=$?$.months.slice().sort((a,y)=>a.month-y.month):[],m=$?dn($):c,k=$?aa($):{salaryIncomeCents:0,freshIncomeCents:0},w=k.salaryIncomeCents+k.freshIncomeCents,x=k.salaryIncomeCents,g=$?Yn($):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},E=$?rn($):0,_=$?sa($,xe):0,S=E+_,A=$?$.months.reduce((a,y)=>a+Vn(y),0):0,F=S-A,R=S-m.totalCents,j=[{label:"Essen",budgetCents:g.foodCents,actualCents:m.foodCents},{label:"Ausgehen",budgetCents:g.goingOutCents,actualCents:m.goingOutCents},{label:"Fixkosten",budgetCents:g.fixedCents,actualCents:m.fixedCents},{label:"Variable",budgetCents:g.variableCents,actualCents:m.variableCents},{label:"Sonstige",budgetCents:g.miscCents,actualCents:m.miscCents}],O=C.map(a=>{const y=$?xe.get(ge($.year,a.month)):void 0,q=Vt(a),Z=a.incomes.reduce((Fn,Qn)=>Fn+(Qn.incomeSource==="salary"?Qn.amountCents:0),0),Be=a.incomes.reduce((Fn,Qn)=>Fn+(qn(Qn.incomeSource)?Qn.amountCents:0),0),He=y?.effectiveIncomeCents??Be,jt=y?.plannedBudgetCents??Vn(a),cn=q.foodCents,Sn=q.goingOutCents,dt=cn+Sn,ma=q.totalCents,La=He-jt,Ot=He-ma;return{month:a.month,salaryIncomeCents:Z,incomeCents:Be,foodCents:cn,goingOutCents:Sn,foodAndGoingOutCents:dt,effectiveIncomeCents:He,plannedBudgetCents:jt,actualCostCents:ma,plannedNetCents:La,actualNetCents:Ot}}),U=Math.max(1,...O.map(a=>a.actualCostCents)),z=Math.max(1,...O.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),L=Math.max(1,...O.map(a=>a.foodAndGoingOutCents)),H=Math.max(1,...O.map(a=>a.foodCents)),me=Math.max(1,...O.map(a=>a.goingOutCents)),le=O.map((a,y,q)=>{const Z=y>0?q[y-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Ae(a.month),monthShortLabel:Ae(a.month).slice(0,3),deltaCents:a.plannedNetCents-Z}}),Q=le[le.length-1]??null,ue=Math.min(0,...le.map(a=>a.plannedNetCents)),qe=Math.max(0,...le.map(a=>a.plannedNetCents)),Pt=Math.max(1,qe-ue),Ie=720,en=320,Xn=18,Ks=18,Lr=38,Da=56,Qs=Ie-Da-Ks,qs=en-Xn-Lr,Kr=a=>{if(le.length<=1)return Da+Qs/2;const y=a/(le.length-1);return Da+y*Qs},Rs=a=>Xn+(qe-a)/Pt*qs,$n=le.map((a,y)=>{const q=Kr(y),Z=Rs(a.plannedNetCents);return{...a,x:q,y:Z,leftPercent:q/Ie*100,topPercent:Z/en*100}}),js=$n.map((a,y)=>`${y===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),Zs=$n.length>0?`${js} L ${$n[$n.length-1]?.x.toFixed(1)} ${(Xn+qs).toFixed(1)} L ${$n[0]?.x.toFixed(1)} ${(Xn+qs).toFixed(1)} Z`:"",er=5,qr=Array.from({length:er},(a,y)=>{const q=y/(er-1),Z=qe-q*Pt;return{valueCents:Math.round(Z/100)*100,y:Rs(Z)}}),tr=Rs(0),Rr=le[0]?.plannedNetCents??0,Na=(le[le.length-1]?.plannedNetCents??0)-Rr,jr=Na<0?"trend-badge-negative":Na>0?"trend-badge-positive":"trend-badge-neutral",nr=Na<0?"↘":Na>0?"↗":"→",Vr=Na<0?"Abwärtstrend":Na>0?"Aufwärtstrend":"Seitwärts",va=u.reduce((a,y)=>{const q=Yn(y);return{foodCents:a.foodCents+q.foodCents,goingOutCents:a.goingOutCents+q.goingOutCents,fixedCents:a.fixedCents+q.fixedCents,variableCents:a.variableCents+q.variableCents,miscCents:a.miscCents+q.miscCents,totalCents:a.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Ut=u.reduce((a,y)=>{const q=dn(y);return{foodCents:a.foodCents+q.foodCents,goingOutCents:a.goingOutCents+q.goingOutCents,fixedCents:a.fixedCents+q.fixedCents,variableCents:a.variableCents+q.variableCents,miscCents:a.miscCents+q.miscCents,totalCents:a.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Yr=u.reduce((a,y)=>a+rn(y),0),zr=u[0]?sa(u[0],xe):0,ar=Yr+zr,sr=ar-va.totalCents,rr=ar-Ut.totalCents,ir=[{label:"Essen",budgetCents:va.foodCents,actualCents:Ut.foodCents},{label:"Ausgehen",budgetCents:va.goingOutCents,actualCents:Ut.goingOutCents},{label:"Fixkosten",budgetCents:va.fixedCents,actualCents:Ut.fixedCents},{label:"Variable",budgetCents:va.variableCents,actualCents:Ut.variableCents},{label:"Sonstige",budgetCents:va.miscCents,actualCents:Ut.miscCents}],or=Math.max(1,...ir.flatMap(a=>[a.budgetCents,a.actualCents])),Vs=[{label:"Essen & Ausgehen",actualCents:Ut.foodCents+Ut.goingOutCents},{label:"Fixkosten",actualCents:Ut.fixedCents},{label:"Variable",actualCents:Ut.variableCents},{label:"Sonstige",actualCents:Ut.miscCents}],Wr=Math.max(1,...Vs.map(a=>a.actualCents)),$e=u.map(a=>{const y=dn(a),q=Yn(a),Z=rn(a),Be=aa(a),He=sa(a,xe),jt=Z+He;return{year:a.year,salaryIncomeCents:Be.salaryIncomeCents,freshIncomeCents:Be.freshIncomeCents,totalIncomeCents:Be.salaryIncomeCents+Be.freshIncomeCents,foodAndGoingOutCents:y.foodCents+y.goingOutCents,fixedCents:y.fixedCents,variableCents:y.variableCents,miscCents:y.miscCents,budgetTotalCents:q.totalCents,actualTotalCents:y.totalCents,effectiveIncomeCents:jt,plannedNetCents:jt-q.totalCents,actualNetCents:jt-y.totalCents}}),Gr=$e.reduce((a,y)=>a+y.totalIncomeCents,0),Ur=$e.reduce((a,y)=>a+y.salaryIncomeCents,0),lr=Math.max(1,...$e.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Hr=Math.max(1,...$e.map(a=>a.actualTotalCents)),Jr=Math.max(1,...$e.map(a=>a.totalIncomeCents)),Xr=Math.max(1,...$e.map(a=>a.salaryIncomeCents)),cr=Math.max(1,...$e.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),ur=Math.max(1,...$e.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),Qr=Math.max(1,...$e.map(a=>a.foodAndGoingOutCents)),Zr=Math.max(1,...$e.map(a=>a.fixedCents)),ei=Math.max(1,...$e.map(a=>a.variableCents)),ti=Math.max(1,...$e.map(a=>a.miscCents)),ni=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${u.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${u.map(a=>`<option value="${a.year}" ${a.year===b?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${$?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(w)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(x)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(A)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(m.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ye(F)}">${f(F)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ye(R)}">${f(R)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${nr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${jr}">${nr} ${Vr}</span>
                    </div>
                  </header>
                  ${Q?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${ft(Q.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${ye(Q.plannedNetCents)}" data-year-trend-active-net>${f(Q.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(Q.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(Q.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${ye(Q.deltaCents)}" data-year-trend-active-delta>${Q.deltaCents>=0?"+":""}${f(Q.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${Ie} ${en}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${$?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${qr.map(a=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${Da}" y1="${a.y.toFixed(1)}" x2="${Ie-Ks}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${Da-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${f(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${Da}" y1="${tr.toFixed(1)}" x2="${Ie-Ks}" y2="${tr.toFixed(1)}"></line>
                              ${Zs?`<path class="year-trend-area" d="${Zs}"></path>`:""}
                              ${js?`<path class="year-trend-line" d="${js}"></path>`:""}
                              ${$n.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${en-12}" text-anchor="middle">${ft(a.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${$n.map((a,y)=>`
                                    <button
                                      class="year-trend-point-hit ${y===$n.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${a.leftPercent.toFixed(2)}%; top:${a.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${y===$n.length-1?"1":"0"}"
                                      data-month-label="${ft(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${ft(a.monthLabel)}: Kalkulierter Saldo ${f(a.plannedNetCents)}, Einkommen ${f(a.effectiveIncomeCents)}, Ausgaben ${f(a.actualCostCents)}"
                                      aria-pressed="${y===$n.length-1?"true":"false"}"
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
                    ${j.map(a=>{const y=da(a.actualCents,a.budgetCents),q=Math.min(100,y),Z=`${y.toFixed(0)}%`,Be=a.budgetCents-a.actualCents,He=Be<0?"danger":Be>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${N(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${q.toFixed(1)}%" title="${a.label}: ${f(a.actualCents)} von ${f(a.budgetCents)}">
                              <span class="circle-chart-value">${Z}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${f(a.budgetCents)} / I ${f(a.actualCents)}</div>
                            <div class="circle-chart-meta ${He}">${Be>=0?"+":""}${f(Be)}</div>
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
                    ${O.map(a=>{const y=de(a.actualCostCents,U);return`
                          <div class="spark-bar" title="${Ae(a.month)}: ${f(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                    ${O.map(a=>{const y=de(Math.abs(a.plannedNetCents),z),q=de(Math.abs(a.actualNetCents),z),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Be=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Ae(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${y}; opacity: 0.35;"></div>
                              <div class="bar ${Be}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${ye(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${ye(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                        <td>${Ae(a.month)}</td>
                    <td>${f(a.salaryIncomeCents)}</td>
                    <td>${f(a.incomeCents)}</td>
                        <td>${f(a.plannedBudgetCents)}</td>
                        <td>${f(a.actualCostCents)}</td>
                        <td class="${ye(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${ye(a.actualNetCents)}">${f(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${u.map(a=>`<option value="${a.year}" ${a.year===b?"selected":""}>${a.year}</option>`).join("")}
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
                    ${O.map(a=>{const y=de(a.foodAndGoingOutCents,L);return`
                          <div class="spark-bar" title="${Ae(a.month)}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                    ${O.map(a=>{const y=de(a.foodCents,H);return`
                          <div class="spark-bar" title="${Ae(a.month)}: ${f(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                    ${O.map(a=>{const y=de(a.goingOutCents,me);return`
                          <div class="spark-bar" title="${Ae(a.month)}: ${f(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(Gr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(Ur)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(va.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Ut.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ye(sr)}">${f(sr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ye(rr)}">${f(rr)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${Vs.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${f(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Ut.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${ir.map(a=>{const y=de(a.budgetCents,or),q=de(a.actualCents,or),Z=N(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${f(a.budgetCents)} | Ist: ${f(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${y}"></div>
                              <div class="bar-marker" style="left:${y}" aria-hidden="true"></div>
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
                    ${Vs.map(a=>{const y=de(a.actualCents,Wr);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Ist: ${f(a.actualCents)}">
                              <div class="bar bar-expense" style="width:${y}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.actualTotalCents,Hr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
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
                    ${$e.map(a=>{const y=de(Math.abs(a.plannedNetCents),lr),q=de(Math.abs(a.actualNetCents),lr),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Be=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${y}; opacity: 0.35;"></div>
                              <div class="bar ${Be}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${ye(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${ye(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.foodAndGoingOutCents,Qr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.fixedCents,Zr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.fixedCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.variableCents,ei);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.variableCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.miscCents,ti);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.miscCents)} €</span></div>
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
                  ${$e.map(a=>`<tr>
                        <td>${a.year}</td>
                        <td>${f(a.salaryIncomeCents)}</td>
                        <td>${f(a.totalIncomeCents)}</td>
                        <td>${f(a.budgetTotalCents)}</td>
                        <td>${f(a.actualTotalCents)}</td>
                        <td class="${ye(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${ye(a.actualNetCents)}">${f(a.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.totalIncomeCents,Jr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.totalIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.salaryIncomeCents,Xr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.salaryIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.totalIncomeCents,cr),q=de(a.actualTotalCents,cr);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${f(a.totalIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${y}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max($e.length,1)}, minmax(0, 1fr));">
                    ${$e.map(a=>{const y=de(a.salaryIncomeCents,ur),q=de(a.actualTotalCents,ur);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${f(a.salaryIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${y}"></div>
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
    `,ai=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,si=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${t?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${t?kt(t.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${t?"Änderung speichern":"Vorlage speichern"}</button>
          ${t?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,dr=h.annualVariableFixedTemplates.reduce((a,y)=>a+y.plannedCents,0),ri=Math.round(dr/12),ii=`
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
                <div class="eval-value budget-under">${f(dr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(ri)}</div>
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
            ${h.annualVariableFixedTemplates.map(a=>{const y=vn(a.dueDateIso),q=y?Ae(y.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${q}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,tn=h.evaluationCurrentResult,oi=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${ft(h.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${tn&&tn.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${tn?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${ft(tn.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${tn.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${f(tn.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${f(tn.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${f(tn.monthAverageCents)}</div>
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
                  ${tn.yearRows.length>0?tn.yearRows.map(a=>`<tr>
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
                  ${tn.monthRows.length>0?tn.monthRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${Ae(a.month)}</td>
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
                      <strong>${ft(a.keyword)}</strong>
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
                        ${a.yearRows.length>0?a.yearRows.map(y=>`<tr>
                                <td>${y.year}</td>
                                <td>${y.hitCount}</td>
                                <td>${f(y.totalCents)}</td>
                                <td>${y.monthsWithHits}</td>
                                <td>${f(y.monthAverageCents)}</td>
                              </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                      </tbody>
                    </table>
                  </article>
                `).join("")}
      </div>
    `,hr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",li=h.topModal==="years"?ai:h.topModal==="fixed"?si:h.topModal==="variable-fixed"?ii:h.topModal==="dashboard"?ni:h.topModal==="evaluation"?oi:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${n?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Dr.map(a=>`<option value="${a}" ${h.theme===a?"selected":""}>${Ei(a)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${hr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${hr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${li}
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
                  ${s.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${s.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${ft(a.message)}</span></li>`).join("")}</ol>`}
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
                  ${r.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${r.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${ft(a.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Ae(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(a,y)=>y+1).map(a=>`<option value="${a}" ${a===h.selectedMonth?"selected":""}>${Ae(a)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${f(ce)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${f(Pe)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(st)}</strong>
              </div>
              <div class="compact-income-row ${Qe}">
                <span>Übernahme aus Vormonat</span>
                <strong>${Et?f(K):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(it)}</strong>
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
                  ${xs}
                  ${Jn}
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
                  ${e}
                  ${wn}
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
                    <div class="compact-cost-budget">${f(Ze)}</div>
                    <div class="compact-cost-actual ${Tt}">${kn(ln)}</div>
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
                    <div class="compact-cost-actual ${xn}">${kn(d.miscCents)}</div>
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
                  ${T.map(a=>`
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
                  ${mt.map(a=>{const y=de(Math.abs(a.valueCents),_a),q=a.valueCents>=0?"+":"",Z=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${f(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${y}"></div>
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
                      ${M.map(a=>{const y=qt.get(a.month)?.totalBudgetCents??0,q=de(y,Cs),Z=de(a.summary.totalCents,Cs);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${f(a.summary.totalCents)} € | Budget ${f(y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                      ${M.map(a=>{const y=qt.get(a.month),q=(y?.foodBudgetCents??0)+(y?.goingOutBudgetCents??0),Z=a.summary.foodCents+a.summary.goingOutCents,Be=de(q,pa),He=de(Z,pa);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${f(Z)} € | Budget ${f(q)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Be}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${He}"><span class="spark-bar-fill-value">${f(Z)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                      ${M.map(a=>{const y=qt.get(a.month)?.fixedBudgetCents??0,q=de(y,Zt),Z=de(a.summary.fixedCents,Zt);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${f(a.summary.fixedCents)} € | Budget ${f(y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                      ${M.map(a=>{const y=qt.get(a.month)?.variableBudgetCents??0,q=de(y,We),Z=de(a.summary.variableCents,We);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${f(a.summary.variableCents)} € | Budget ${f(y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                      ${M.map(a=>{const y=qt.get(a.month)?.miscBudgetCents??0,q=de(y,fa),Z=de(a.summary.miscCents,fa);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${f(a.summary.miscCents)} € | Budget ${f(y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ae(a.month).slice(0,3)}</div>
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
                    <div class="eval-value">${f(ce)}</div>
                    <div class="eval-value">${f(Ye)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(Pe)}</div>
                    <div class="eval-value">${f(Lt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(st)}</div>
                    <div class="eval-value">${f(Jt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Qe}">${Et?f(K):"-"}</div>
                    <div class="eval-value ${we}">${o?f(_t):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(it)}</div>
                    <div class="eval-value">${f(Kt)}</div>
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
                    <div class="eval-value">${Nt(P,d.foodCents)}</div>
                    <div class="eval-value">${f(J)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Nt(D,d.goingOutCents)}</div>
                    <div class="eval-value">${f(te)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Nt(I,d.fixedCents)}</div>
                    <div class="eval-value">${f(pe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Nt(G,d.variableCents)}</div>
                    <div class="eval-value">${f(re)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Nt(V,d.miscCents)}</div>
                    <div class="eval-value">${f(Me)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Nt(Ue,d.totalCents)}</div>
                    <div class="eval-value">${f(ot)}</div>
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
                    <div class="eval-value ${Ls}">${f(d.foodCents)}</div>
                    <div class="eval-value">${f(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Za}">${f(d.goingOutCents)}</div>
                    <div class="eval-value">${f(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${In}">${f(d.fixedCents)}</div>
                    <div class="eval-value">${f(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${es}">${f(d.variableCents)}</div>
                    <div class="eval-value">${f(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${xn}">${f(d.miscCents)}</div>
                    <div class="eval-value">${f(v.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${f(d.totalCents)}</div>
                    <div class="eval-value">${f(v.totalCents)}</div>
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
                    <div class="eval-value ${ye(ze)}">${f(ze)}</div>
                    <div class="eval-value ${ye(Wt)}">${f(Wt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${ye(ut)}">${f(ut)}</div>
                    <div class="eval-value ${ye(zt)}">${f(zt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Ve}">${f(be)}</div>
                    <div class="eval-value ${Ke}">${f(vt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${ye(Yt)}">${f(Yt)}</div>
                    <div class="eval-value ${ye(Cn)}">${f(Cn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${At}">${Oe}</div>
                    <div class="eval-value ${On}">${Le}</div>
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
                ${M.map((a,y,q)=>{const Z=o?xe.get(ge(o.year,a.month)):void 0,Be=Z?.plannedBudgetCents??0,He=Z?.netCents??0,jt=Ia.get(a.month)??0,cn=Fa.get(a.month)??0,Sn=He<0?"danger":He>0?"budget-under":"",dt=q[y-1],ma=dt?.summary.foodCents??null,La=dt?.summary.goingOutCents??null,Ot=dt?.summary.fixedCents??null,Fn=dt?.summary.variableCents??null,Qn=dt?.summary.miscCents??null,pr=dt?.summary.totalCents??null,fr=dt!==void 0?Ia.get(dt.month)??0:null,vr=dt!==void 0?Fa.get(dt.month)??0:null,mr=o&&dt?xe.get(ge(o.year,dt.month))?.plannedBudgetCents??0:null,gr=ma===null?null:a.summary.foodCents-ma,br=La===null?null:a.summary.goingOutCents-La,yr=Ot===null?null:a.summary.fixedCents-Ot,Cr=Fn===null?null:a.summary.variableCents-Fn,xr=Qn===null?null:a.summary.miscCents-Qn,kr=pr===null?null:a.summary.totalCents-pr,wr=fr===null?null:jt-fr,$r=vr===null?null:cn-vr,Sr=mr===null?null:Be-mr,Ka=It=>It===null?"muted":It>0?"danger":It<0?"budget-under":"muted",Er=It=>It===null?"muted":It>0?"budget-under":It<0?"danger":"muted",ci=It=>It===null?"muted":It>0?"danger":It<0?"budget-under":"muted",Dn=It=>It===null?"(Δ -)":`(Δ ${It>0?"+":""}${f(It)})`,Br=o&&dt?xe.get(ge(o.year,dt.month))?.netCents??0:null,qa=Br===null?null:He-Br,ui=qa===null?"(Δ -)":`(Δ ${qa>0?"+":""}${f(qa)})`,di=qa===null?"muted":qa<0?"danger":qa>0?"budget-under":"muted";return`<tr>
                  <td>${Ae(a.month)}</td>
                  <td>${f(a.summary.foodCents)} <span class="${Ka(gr)}">${Dn(gr)}</span></td>
                  <td>${f(a.summary.goingOutCents)} <span class="${Ka(br)}">${Dn(br)}</span></td>
                  <td>${f(a.summary.fixedCents)} <span class="${Ka(yr)}">${Dn(yr)}</span></td>
                  <td>${f(a.summary.variableCents)} <span class="${Ka(Cr)}">${Dn(Cr)}</span></td>
                  <td>${f(a.summary.miscCents)} <span class="${Ka(xr)}">${Dn(xr)}</span></td>
                  <td>${f(a.summary.totalCents)} <span class="${Ka(kr)}">${Dn(kr)}</span></td>
                  <td>${f(jt)} <span class="${Er(wr)}">${Dn(wr)}</span></td>
                  <td>${f(cn)} <span class="${Er($r)}">${Dn($r)}</span></td>
                  <td>${f(Be)} <span class="${ci(Sr)}">${Dn(Sr)}</span></td>
                  <td class="${Sn}">${f(He)} <span class="${di}">${ui}</span></td>
                </tr>`}).join("")}
                ${Ds}
                ${Ns}
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
                    <td class="${Qe}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${kt(K)}" />
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
                    <td>${f(a.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${a.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${f(ce)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${f(Pe)} €</strong>
                </div>
                <div class="column-overview-row ${Qe}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${f(K)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(it)} €</strong>
                </div>
                <div class="column-overview-row ${tt}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${f(Mt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${pn(P,d.foodCents)}
                ${pn(D,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(Ze)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(ln)} €</strong>
                  </div>
                  <div class="column-overview-row ${Tt}">
                    <span>Diff</span>
                    <strong>${f(xt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${kt(P)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${kt(D)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(a=>{const y=a.foodCents>0,q=a.goingOutCents>0,Z=`${a.isoDate===p?"today-row":""} ${y||q?"day-has-entry":""}`.trim(),Be=`amount-input ${y?"day-input-has-value":""}`.trim(),He=`amount-input ${q?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Be}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${kt(a.foodCents)}" /></td>
                      <td><input class="${He}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${kt(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${pn(I,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${kt(I)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${kt(a.plannedCents)}" /></td>
                    <td class="${W(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${kt(a.actualCents)}" /></td>
                    <td class="${W(a.actualCents,a.plannedCents)}">${f(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${pn(G,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${kt(G)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${kt(a.budgetCents)}" /></td>
                    <td class="${W(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${kt(a.actualCents)}" /></td>
                    <td class="${W(a.actualCents,a.budgetCents)}">${f(a.actualCents-a.budgetCents)}</td>
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
              ${pn(V,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${kt(V)}" ${l?"":"disabled"} />
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
              <div class="inline">
                <button class="btn" id="import-misc-csv" type="button" ${l?"":"disabled"}>Import</button>
                <input id="import-misc-csv-input" type="file" accept=".csv,text/csv" ${l?"":"disabled"} style="display:none" />
                <a class="btn btn-quiet" href="/misc-import-template.csv" download>CSV-Vorlage</a>
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag</p>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${l?l.miscCosts.map(a=>`<tr>
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
          <p class="muted">Letztes verwendetes Backup: ${i}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),Ma(),gt(),De(),pt()}function Ma(){const o=B.querySelector("#theme-select"),l=B.querySelector("#open-years-modal"),p=B.querySelector("#open-evaluation-modal"),d=B.querySelector("#open-fixed-modal"),v=B.querySelector("#open-variable-fixed-modal"),M=B.querySelector("#open-dashboard-modal"),P=B.querySelector("#panel-modal-close"),D=B.querySelector("#panel-modal-backdrop"),I=B.querySelector("#open-unexported-change-log"),G=B.querySelector("#open-persistent-audit-log"),V=B.querySelector("#unexported-change-log-close"),J=B.querySelector("#unexported-change-log-backup"),te=B.querySelector("#unexported-change-log-backdrop"),pe=B.querySelector("#persistent-audit-log-close"),re=B.querySelector("#persistent-audit-log-backdrop"),Me=B.querySelector("#new-year"),ce=B.querySelector("#create-year"),Pe=B.querySelector("#evaluation-query"),st=B.querySelector("#run-evaluation"),xe=B.querySelector("#save-evaluation"),rt=B.querySelector("#year-select"),et=B.querySelector("#month-select");o?.addEventListener("change",()=>{const T=o.value;Or(T)&&ya(T)}),l?.addEventListener("click",()=>{nn("years")}),p?.addEventListener("click",()=>{nn("evaluation")}),d?.addEventListener("click",()=>{nn("fixed")}),v?.addEventListener("click",()=>{nn("variable-fixed")}),M?.addEventListener("click",()=>{nn("dashboard")}),I?.addEventListener("click",()=>{an()}),G?.addEventListener("click",()=>{ct()}),V?.addEventListener("click",()=>{bt()}),J?.addEventListener("click",async()=>{try{await Te()}catch(T){console.error("Backup-Export fehlgeschlagen",T),oe("Backup konnte nicht exportiert werden.","error")}}),te?.addEventListener("click",T=>{T.target===te&&bt()}),pe?.addEventListener("click",()=>{yt()}),re?.addEventListener("click",T=>{T.target===re&&yt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.dashboardTab;N!=="year"&&N!=="food"&&N!=="all"||(h.dashboardTab=N,ne())})});const K=B.querySelector("#dashboard-year-select");K?.addEventListener("change",()=>{const T=Number.parseInt(K.value,10);Number.isInteger(T)&&(h.dashboardYear=T,ne())}),P?.addEventListener("click",()=>{Ln()}),D?.addEventListener("click",T=>{T.target===D&&Ln()}),h.topModal&&window.setTimeout(()=>{P?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{V?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{pe?.focus()},0),ce?.addEventListener("click",async()=>{const T=Number.parseInt(Me?.value??"",10);if(!Number.isInteger(T)){alert("Bitte gültiges Jahr eingeben.");return}await Y(T)}),st?.addEventListener("click",()=>{Un(Pe?.value??"")}),Pe?.addEventListener("keydown",T=>{T.key==="Enter"&&(T.preventDefault(),Un(Pe.value))}),xe?.addEventListener("click",async()=>{await Hn()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeSavedEvaluation;N&&await Ja(N)})}),rt?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(rt.value,10),h.selectedMonth=sn(),ne()}),et?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(et.value,10),ne()});const Et=B.querySelector("#fixed-template-name"),it=B.querySelector("#fixed-template-amount"),Bt=B.querySelector("#add-fixed-template"),Mt=B.querySelector("#cancel-fixed-template-edit"),be=B.querySelector("#annual-variable-fixed-name"),Yt=B.querySelector("#annual-variable-fixed-date"),Oe=B.querySelector("#annual-variable-fixed-amount"),Qe=B.querySelector("#add-annual-variable-fixed-template");Bt?.addEventListener("click",async()=>{const T=Et?.value??"",N=Re(it?.value??"0");await mn(T,N),Et&&(Et.value=""),it&&(it.value="")}),Mt?.addEventListener("click",()=>{gn()}),Qe?.addEventListener("click",async()=>{const T=be?.value??"",N=Yt?.value??"",mt=Re(Oe?.value??"0");await Is(T,N,mt),be&&(be.value=""),Yt&&(Yt.value=""),Oe&&(Oe.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeAnnualVariableFixedTemplate;N&&await bn(N)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.editFixedTemplate;N&&Wn(N)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixedTemplate;N&&await wa(N)})}),B.querySelectorAll("[data-day-food]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),at(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayFood;N&&await Wa(N,"foodCents",Re(T.value))})}),B.querySelectorAll("[data-day-going]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),at(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayGoing;N&&await Wa(N,"goingOutCents",Re(T.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),at(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedActual;N&&await _n(N,Re(T.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),at(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedPlanned;N&&await cs(N,Re(T.value))})});const tt=B.querySelector("#fixed-budget");tt?.addEventListener("click",T=>{T.preventDefault(),tt.blur(),at(tt)}),tt?.addEventListener("change",async()=>{await Tn(Re(tt.value))});const Ve=B.querySelector("#food-budget");Ve?.addEventListener("click",T=>{T.preventDefault(),Ve.blur(),at(Ve)}),Ve?.addEventListener("change",async()=>{await on(Re(Ve.value))});const Ye=B.querySelector("#going-out-budget");Ye?.addEventListener("click",T=>{T.preventDefault(),Ye.blur(),at(Ye)}),Ye?.addEventListener("change",async()=>{await us(Re(Ye.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Bs()});const Jt=B.querySelector("#misc-budget");Jt?.addEventListener("click",T=>{T.preventDefault(),Jt.blur(),at(Jt)}),Jt?.addEventListener("change",async()=>{await Gn(Re(Jt.value))});const _t=B.querySelector("#variable-budget");_t?.addEventListener("click",T=>{T.preventDefault(),_t.blur(),at(_t)}),_t?.addEventListener("change",async()=>{await $a(Re(_t.value))});const Kt=B.querySelector("#variable-position-name"),vt=B.querySelector("#variable-position-budget"),Cn=B.querySelector("#add-variable-position"),Le=B.querySelector("#add-variable-position-recurring"),we=B.querySelector("#misc-description"),Ke=B.querySelector("#misc-amount"),Ue=B.querySelector("#add-misc"),Ze=B.querySelector("#add-misc-recurring"),ln=B.querySelector("#import-misc-csv"),xt=B.querySelector("#import-misc-csv-input"),Tt=B.querySelector("#income-description"),ot=B.querySelector("#income-source"),ut=B.querySelector("#income-amount"),zt=B.querySelector("#add-income"),ze=B.querySelector("#add-income-recurring"),Wt=B.querySelector("#fixed-cost-name"),ye=B.querySelector("#fixed-cost-budget"),Pn=B.querySelector("#add-fixed-cost"),At=B.querySelector("#carryover-override");At?.addEventListener("click",T=>{T.preventDefault(),At.blur(),at(At)}),At?.addEventListener("change",async()=>{const T=At.value;if(!T.trim()){await Sa(null);return}await Sa(Re(T))}),Pn?.addEventListener("click",async()=>{const T=Re(ye?.value??"0");await Ga(Wt?.value??"",T),Wt&&(Wt.value=""),ye&&(ye.value="")}),Cn?.addEventListener("click",async()=>{const T=Re(vt?.value??"0");await yn(Kt?.value??"",T,!1),Kt&&(Kt.value=""),vt&&(vt.value="")}),Le?.addEventListener("click",async()=>{const T=Re(vt?.value??"0");await yn(Kt?.value??"",T,!0),Kt&&(Kt.value=""),vt&&(vt.value="")}),Ue?.addEventListener("click",async()=>{const T=Re(Ke?.value??"0");await Ua(we?.value??"",T,!1),we&&(we.value=""),Ke&&(Ke.value="")}),Ze?.addEventListener("click",async()=>{const T=Re(Ke?.value??"0");await Ua(we?.value??"",T,!0),we&&(we.value=""),Ke&&(Ke.value="")}),ln?.addEventListener("click",()=>{xt?.click()}),xt?.addEventListener("change",async()=>{const T=xt.files?.[0];if(T){try{await Ba(T)}catch(N){console.error("Sonstiges-CSV-Import fehlgeschlagen",N),oe("CSV konnte nicht importiert werden.","error")}xt.value=""}}),zt?.addEventListener("click",async()=>{const T=Re(ut?.value??"0"),N=ot?.value,mt=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await Ha(Tt?.value??"",T,mt,!1),Tt&&(Tt.value=""),ut&&(ut.value=""),ot&&(ot.value="salary")}),ze?.addEventListener("click",async()=>{const T=Re(ut?.value??"0"),N=ot?.value,mt=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await Ha(Tt?.value??"",T,mt,!0),Tt&&(Tt.value=""),ut&&(ut.value=""),ot&&(ot.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(T=>{T.addEventListener("change",async()=>{const N=T.dataset.incomeSource;if(!N)return;const mt=T.value;await fs(N,mt==="balance"||mt==="fresh"||mt==="salary"?mt:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),at(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionBudget;N&&await Ea(N,Re(T.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),at(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionActual;N&&await ds(N,Re(T.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeVariablePosition;N&&await hs(N)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.moveVariablePositionNext;N&&await ve(N)})}),B.querySelectorAll("[data-remove-fixed]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixed;N&&await Ge(N)})}),B.querySelectorAll("[data-remove-income]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeIncome;N&&await vs(N)})}),B.querySelectorAll("[data-remove-misc]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeMisc;N&&await ca(N)})});const On=B.querySelector("#backup-export"),de=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),On?.addEventListener("click",async()=>{await Te()}),de?.addEventListener("change",async()=>{const T=de.files?.[0];if(T){try{await ua(T)}catch(N){console.error("Backup-Import fehlgeschlagen",N),oe("Backup konnte nicht importiert werden.","error")}de.value=""}})}return{init:As}}const Mi="modulepreload",_i=function(B){return"/habu26/"+B},Fr={},Ti=function(h,Se,X){let he=Promise.resolve();if(Se&&Se.length>0){let Je=function(je){return Promise.all(je.map(ie=>Promise.resolve(ie).then(lt=>({status:"fulfilled",value:lt}),lt=>({status:"rejected",reason:lt}))))};var Ce=Je;document.getElementsByTagName("link");const se=document.querySelector("meta[property=csp-nonce]"),fe=se?.nonce||se?.getAttribute("nonce");he=Je(Se.map(je=>{if(je=_i(je),je in Fr)return;Fr[je]=!0;const ie=je.endsWith(".css"),lt=ie?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${je}"]${lt}`))return;const nt=document.createElement("link");if(nt.rel=ie?"stylesheet":Mi,ie||(nt.as="script"),nt.crossOrigin="",nt.href=je,fe&&nt.setAttribute("nonce",fe),document.head.appendChild(nt),ie)return new Promise((De,gt)=>{nt.addEventListener("load",De),nt.addEventListener("error",()=>gt(new Error(`Unable to preload CSS for ${je}`)))})}))}function ae(se){const fe=new Event("vite:preloadError",{cancelable:!0});if(fe.payload=se,window.dispatchEvent(fe),!fe.defaultPrevented)throw se}return he.then(se=>{for(const fe of se||[])fe.status==="rejected"&&ae(fe.reason);return h().catch(ae)})};function Ai(B={}){const{immediate:h=!1,onNeedRefresh:Se,onOfflineReady:X,onRegistered:he,onRegisteredSW:ae,onRegisterError:Ce}=B;let se,fe;const Je=async(ie=!0)=>{await fe};async function je(){if("serviceWorker"in navigator){if(se=await Ti(async()=>{const{Workbox:ie}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ie}},[]).then(({Workbox:ie})=>new ie("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ie=>{Ce?.(ie)}),!se)return;se.addEventListener("activated",ie=>{(ie.isUpdate||ie.isExternal)&&window.location.reload()}),se.addEventListener("installed",ie=>{ie.isUpdate||X?.()}),se.register({immediate:h}).then(ie=>{ae?ae("/habu26/sw.js",ie):he?.(ie)}).catch(ie=>{Ce?.(ie)})}}return fe=je(),Je}function Pi(){Ai({immediate:!0})}const Nr=document.getElementById("app");if(!Nr)throw new Error("App-Container nicht gefunden.");Bi(Nr).init();Pi();
