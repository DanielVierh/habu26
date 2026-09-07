(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const be of document.querySelectorAll('link[rel="modulepreload"]'))Q(be);new MutationObserver(be=>{for(const ie of be)if(ie.type==="childList")for(const Be of ie.addedNodes)Be.tagName==="LINK"&&Be.rel==="modulepreload"&&Q(Be)}).observe(document,{childList:!0,subtree:!0});function Ie(be){const ie={};return be.integrity&&(ie.integrity=be.integrity),be.referrerPolicy&&(ie.referrerPolicy=be.referrerPolicy),be.crossOrigin==="use-credentials"?ie.credentials="include":be.crossOrigin==="anonymous"?ie.credentials="omit":ie.credentials="same-origin",ie}function Q(be){if(be.ep)return;be.ep=!0;const ie=Ie(be);fetch(be.href,ie)}})();const Fi=[1,2,3,4,5,6,7,8,9,10,11,12];function hs(){return new Date().toISOString()}function kt(M){const h=Math.random().toString(36).slice(2,10);return`${M}_${Date.now()}_${h}`}function Ii(M,h){const Ie=new Date(M,h,0).getDate(),Q=[];for(let be=1;be<=Ie;be+=1){const ie=new Date(Date.UTC(M,h-1,be));Q.push({isoDate:ie.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Q}function Oi(M){return M.map(h=>({id:kt("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Kr(M,h,Ie){const Q=h.reduce((ie,Be)=>ie+Be.plannedCents,0),be=Fi.map(ie=>({month:ie,days:Ii(M,ie),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Oi(h),fixedBudgetCents:Q,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:M,createdAt:hs(),templateVersion:Ie,months:be}}function sr(M,h){return{id:kt("expense"),description:M,amountCents:h,createdAt:hs()}}function Vr(M,h,Ie){const Q={id:kt("income"),description:M,amountCents:h,createdAt:hs()};return Ie?{...Q,incomeSource:Ie}:Q}function Vs(M,h){return M.toLocaleLowerCase("de-DE").includes(h)}function qr(M,h,Ie,Q){const be=h.trim(),ie=be.toLocaleLowerCase("de-DE");if(!ie)return{id:kt("search_eval"),keyword:"",keywordNormalized:"",createdAt:hs(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let Be=0,ue=0,xe=0,ct=0,Ze=0;const he=Math.max(1,Math.min(12,Q)),$t=[],ft=[];return M.slice().sort((Ue,Pt)=>Ue.year-Pt.year).forEach(Ue=>{let Pt=0,hn=0,Zn=0,pn=0;Ue.months.slice().sort((At,wt)=>At.month-wt.month).forEach(At=>{let wt=0,Tt=0;if(At.fixedCosts.forEach(Et=>{Vs(Et.name,ie)&&(wt+=1,Tt+=Et.actualCents)}),At.variableCosts.forEach(Et=>{Vs(Et.description,ie)&&(wt+=1,Tt+=Et.amountCents)}),At.variablePositions.forEach(Et=>{Vs(Et.name,ie)&&(wt+=1,Tt+=Et.actualCents)}),At.miscCosts.forEach(Et=>{Vs(Et.description,ie)&&(wt+=1,Tt+=Et.amountCents)}),wt<=0)return;Pt+=wt,hn+=Tt,(Ue.year<Ie||Ue.year===Ie&&At.month<=he)&&(pn+=1,Zn+=Tt),Be+=wt,ue+=Tt,(Ue.year<Ie||Ue.year===Ie&&At.month<=he)&&(ct+=1,Ze+=Tt),ft.push({year:Ue.year,month:At.month,hitCount:wt,totalCents:Tt})}),!(Pt<=0)&&(Ue.year===Ie&&(xe+=hn),$t.push({year:Ue.year,hitCount:Pt,totalCents:hn,monthsWithHits:pn,monthAverageCents:pn>0?Math.round(Zn/pn):0}))}),{id:kt("search_eval"),keyword:be,keywordNormalized:ie,createdAt:hs(),totalHitCount:Be,totalCents:ue,currentYearCents:xe,monthsWithHits:ct,monthAverageCents:ct>0?Math.round(Ze/ct):0,yearRows:$t,monthRows:ft}}var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Li(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var qs={exports:{}},Ni=qs.exports,Rr;function Ki(){return Rr||(Rr=1,(function(M,h){((Ie,Q)=>{M.exports=Q()})(Ni,function(){var Ie=function(e,t){return(Ie=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(a,s){a.__proto__=s}:function(a,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r])}))(e,t)},Q=function(){return(Q=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function be(e,t,a){for(var s,r=0,l=t.length;r<l;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var ie=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Di,Be=Object.keys,ue=Array.isArray;function xe(e,t){return typeof t=="object"&&Be(t).forEach(function(a){e[a]=t[a]}),e}typeof Promise>"u"||ie.Promise||(ie.Promise=Promise);var ct=Object.getPrototypeOf,Ze={}.hasOwnProperty;function he(e,t){return Ze.call(e,t)}function $t(e,t){typeof t=="function"&&(t=t(ct(e))),(typeof Reflect>"u"?Be:Reflect.ownKeys)(t).forEach(function(a){Ue(e,a,t[a])})}var ft=Object.defineProperty;function Ue(e,t,a,s){ft(e,t,xe(a&&he(a,"get")&&typeof a.get=="function"?{get:a.get,set:a.set,configurable:!0}:{value:a,configurable:!0,writable:!0},s))}function Pt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Ue(e.prototype,"constructor",e),{extend:$t.bind(null,e.prototype)}}}}var hn=Object.getOwnPropertyDescriptor,Zn=[].slice;function pn(e,t,a){return Zn.call(e,t,a)}function At(e,t){return t(e)}function wt(e){if(!e)throw new Error("Assertion Failed")}function Tt(e){ie.setImmediate?setImmediate(e):setTimeout(e,0)}function nn(e,t){if(typeof t=="string"&&he(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var a=[],s=0,r=t.length;s<r;++s){var l=nn(e,t[s]);a.push(l)}return a}var u,p=t.indexOf(".");return p===-1||(u=e[t.substr(0,p)])==null?void 0:nn(u,t.substr(p+1))}function St(e,t,a){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){wt(typeof a!="string"&&"length"in a);for(var s=0,r=t.length;s<r;++s)St(e,t[s],a[s])}else{var l,u,p=t.indexOf(".");p!==-1?(l=t.substr(0,p),(p=t.substr(p+1))===""?a===void 0?ue(e)&&!isNaN(parseInt(l))?e.splice(l,1):delete e[l]:e[l]=a:St(u=(u=e[l])&&he(e,l)?u:e[l]={},p,a)):a===void 0?ue(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=a}}function Et(e){var t,a={};for(t in e)he(e,t)&&(a[t]=e[t]);return a}var Ys=[].concat;function Ga(e){return Ys.apply([],e)}var Gt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ga([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ie[e]}),ps=new Set(Gt.map(function(e){return ie[e]})),ua=null;function Ft(e){return ua=new WeakMap,e=(function t(a){if(!a||typeof a!="object")return a;var s=ua.get(a);if(s)return s;if(ue(a)){s=[],ua.set(a,s);for(var r=0,l=a.length;r<l;++r)s.push(t(a[r]))}else if(ps.has(a.constructor))s=a;else{var u,p=ct(a);for(u in s=p===Object.prototype?{}:Object.create(p),ua.set(a,s),a)he(a,u)&&(s[u]=t(a[u]))}return s})(e),ua=null,e}var da={}.toString;function Wa(e){return da.call(e).slice(8,-1)}var Ua=typeof Symbol<"u"?Symbol.iterator:"@@iterator",zs=typeof Ua=="symbol"?function(e){var t;return e!=null&&(t=e[Ua])&&t.apply(e)}:function(){return null};function Sn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var mt={};function Z(e){var t,a,s,r;if(arguments.length===1){if(ue(e))return e.slice();if(this===mt&&typeof e=="string")return[e];if(r=zs(e))for(a=[];!(s=r.next()).done;)a.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(a=new Array(t);t--;)a[t]=e[t]}}else for(t=arguments.length,a=new Array(t);t--;)a[t]=arguments[t];return a}var fn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Gt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Lt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Gt),fs={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function En(e,t){this.name=e,this.message=t}function Ea(e,t){return e+". Errors: "+Object.keys(t).map(function(a){return t[a].toString()}).filter(function(a,s,r){return r.indexOf(a)===s}).join(`
`)}function ke(e,t,a,s){this.failures=t,this.failedKeys=s,this.successCount=a,this.message=Ea(e,t)}function ea(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(a){return t[a]}),this.failuresByPos=t,this.message=Ea(e,this.failures)}Pt(En).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Pt(ke).from(En),Pt(ea).from(En);var Wt=Lt.reduce(function(e,t){return e[t]=t+"Error",e},{}),ms=En,ne=Lt.reduce(function(e,t){var a=t+"Error";function s(r,l){this.name=a,r?typeof r=="string"?(this.message="".concat(r).concat(l?`
 `+l:""),this.inner=l||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=fs[t]||a,this.inner=null)}return Pt(s).from(ms),e[t]=s,e},{}),Nn=(ne.Syntax=SyntaxError,ne.Type=TypeError,ne.Range=RangeError,Gt.reduce(function(e,t){return e[t+"Error"]=ne[t],e},{}));Gt=Lt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ne[t]),e},{});function De(){}function He(e){return e}function Gs(e,t){return e==null||e===He?t:function(a){return t(e(a))}}function Bn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Ws(e,t){return e===De?t:function(){var a=e.apply(this,arguments),s=(a!==void 0&&(arguments[0]=a),this.onsuccess),r=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Bn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?Bn(r,this.onerror):r),l!==void 0?l:a}}function vs(e,t){return e===De?t:function(){e.apply(this,arguments);var a=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),a&&(this.onsuccess=this.onsuccess?Bn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?Bn(s,this.onerror):s)}}function Us(e,t){return e===De?t:function(r){var s=e.apply(this,arguments),r=(xe(r,s),this.onsuccess),l=this.onerror,u=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Bn(r,this.onsuccess):r),l&&(this.onerror=this.onerror?Bn(l,this.onerror):l),s===void 0?u===void 0?void 0:u:xe(s,u)}}function gs(e,t){return e===De?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Ja(e,t){return e===De?t:function(){var a=e.apply(this,arguments);if(a&&typeof a.then=="function"){for(var s=this,r=arguments.length,l=new Array(r);r--;)l[r]=arguments[r];return a.then(function(){return t.apply(s,l)})}return t.apply(this,arguments)}}Gt.ModifyError=ke,Gt.DexieError=En,Gt.BulkError=ea;var an=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function bs(e){an=e}var ta={},ys=100,na=typeof Promise>"u"?[]:(Lt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[na=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ct(na),Lt]:[Lt,ct(Lt),Lt]),Lt=na[0],ca=na[1],ca=ca&&ca.then,mn=Lt&&Lt.constructor,aa=!!na[2],sn=function(e,t){ha.push([e,t]),Mn&&(queueMicrotask(ra),Mn=!1)},Ba=!0,Mn=!0,Te=[],Ma=[],vn=He,Nt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:De,pgp:!1,env:{},finalize:De},ee=Nt,ha=[],gn=0,sa=[];function G(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=ee;if(typeof e!="function"){if(e!==ta)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&pa(this,this._value)}else this._state=null,this._value=null,++t.ref,(function a(s,r){try{r(function(l){if(s._state===null){if(l===s)throw new TypeError("A promise cannot be resolved with itself.");var u=s._lib&&rn();l&&typeof l.then=="function"?a(s,function(p,y){l instanceof G?l._then(p,y):l.then(p,y)}):(s._state=!0,s._value=l,Xa(s)),u&&ia()}},pa.bind(null,s))}catch(l){pa(s,l)}})(this,e)}var Ha={get:function(){var e=ee,t=oa;function a(s,r){var l=this,u=!e.global&&(e!==ee||t!==oa),p=u&&!gt(),y=new G(function(S,C){vt(l,new _a($s(s,e,u,p),$s(r,e,u,p),S,C,e))});return this._consoleTask&&(y._consoleTask=this._consoleTask),y}return a.prototype=ta,a},set:function(e){Ue(this,"then",e&&e.prototype===ta?Ha:{get:function(){return e},set:Ha.set})}};function _a(e,t,a,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=a,this.reject=s,this.psd=r}function pa(e,t){var a,s;Ma.push(t),e._state===null&&(a=e._lib&&rn(),t=vn(t),e._state=!1,e._value=t,s=e,Te.some(function(r){return r._value===s._value})||Te.push(s),Xa(e),a)&&ia()}function Xa(e){var t=e._listeners;e._listeners=[];for(var a=0,s=t.length;a<s;++a)vt(e,t[a]);var r=e._PSD;--r.ref||r.finalize(),gn===0&&(++gn,sn(function(){--gn==0&&_n()},[]))}function vt(e,t){if(e._state===null)e._listeners.push(t);else{var a=e._state?t.onFulfilled:t.onRejected;if(a===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++gn,sn(Cs,[a,e,t])}}function Cs(e,t,a){try{var s,r=t._value;!t._state&&Ma.length&&(Ma=[]),s=an&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||Ma.indexOf(r)!==-1||(l=>{for(var u=Te.length;u;)if(Te[--u]._value===l._value)return Te.splice(u,1)})(t),a.resolve(s)}catch(l){a.reject(l)}finally{--gn==0&&_n(),--a.psd.ref||a.psd.finalize()}}function ra(){Vn(Nt,function(){rn()&&ia()})}function rn(){var e=Ba;return Mn=Ba=!1,e}function ia(){var e,t,a;do for(;0<ha.length;)for(e=ha,ha=[],a=e.length,t=0;t<a;++t){var s=e[t];s[0].apply(null,s[1])}while(0<ha.length);Mn=Ba=!0}function _n(){for(var e=Te,t=(Te=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),sa.slice(0)),a=t.length;a;)t[--a]()}function Pa(e){return new G(ta,!1,e)}function Ve(e,t){var a=ee;return function(){var s=rn(),r=ee;try{return yn(a,!0),e.apply(this,arguments)}catch(l){t&&t(l)}finally{yn(r,!1),s&&ia()}}}$t(G.prototype,{then:Ha,_then:function(e,t){vt(this,new _a(null,null,e,t,ee))},catch:function(e){var t,a;return arguments.length===1?this.then(null,e):(t=e,a=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?a:Pa)(s)}):this.then(null,function(s){return(s&&s.name===t?a:Pa)(s)}))},finally:function(e){return this.then(function(t){return G.resolve(e()).then(function(){return t})},function(t){return G.resolve(e()).then(function(){return Pa(t)})})},timeout:function(e,t){var a=this;return e<1/0?new G(function(s,r){var l=setTimeout(function(){return r(new ne.Timeout(t))},e);a.then(s,r).finally(clearTimeout.bind(null,l))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Ue(G.prototype,Symbol.toStringTag,"Dexie.Promise"),Nt.env=ks(),$t(G,{all:function(){var e=Z.apply(null,arguments).map(It);return new G(function(t,a){e.length===0&&t([]);var s=e.length;e.forEach(function(r,l){return G.resolve(r).then(function(u){e[l]=u,--s||t(e)},a)})})},resolve:function(e){return e instanceof G?e:e&&typeof e.then=="function"?new G(function(t,a){e.then(t,a)}):new G(ta,!0,e)},reject:Pa,race:function(){var e=Z.apply(null,arguments).map(It);return new G(function(t,a){e.map(function(s){return G.resolve(s).then(t,a)})})},PSD:{get:function(){return ee},set:function(e){return ee=e}},totalEchoes:{get:function(){return oa}},newPSD:on,usePSD:Vn,scheduler:{get:function(){return sn},set:function(e){sn=e}},rejectionMapper:{get:function(){return vn},set:function(e){vn=e}},follow:function(e,t){return new G(function(a,s){return on(function(r,l){var u=ee;u.unhandleds=[],u.onunhandled=l,u.finalize=Bn(function(){var p,y=this;p=function(){y.unhandleds.length===0?r():l(y.unhandleds[0])},sa.push(function S(){p(),sa.splice(sa.indexOf(S),1)}),++gn,sn(function(){--gn==0&&_n()},[])},u.finalize),e()},t,a,s)})}}),mn&&(mn.allSettled&&Ue(G,"allSettled",function(){var e=Z.apply(null,arguments).map(It);return new G(function(t){e.length===0&&t([]);var a=e.length,s=new Array(a);e.forEach(function(r,l){return G.resolve(r).then(function(u){return s[l]={status:"fulfilled",value:u}},function(u){return s[l]={status:"rejected",reason:u}}).then(function(){return--a||t(s)})})})}),mn.any&&typeof AggregateError<"u"&&Ue(G,"any",function(){var e=Z.apply(null,arguments).map(It);return new G(function(t,a){e.length===0&&a(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(l,u){return G.resolve(l).then(function(p){return t(p)},function(p){r[u]=p,--s||a(new AggregateError(r))})})})}),mn.withResolvers)&&(G.withResolvers=mn.withResolvers);var me={awaits:0,echoes:0,id:0},Qt=0,ge=[],bn=0,oa=0,xs=0;function on(e,u,a,s){var r=ee,l=Object.create(r),u=(l.parent=r,l.ref=0,l.global=!1,l.id=++xs,Nt.env,l.env=aa?{Promise:G,PromiseProp:{value:G,configurable:!0,writable:!0},all:G.all,race:G.race,allSettled:G.allSettled,any:G.any,resolve:G.resolve,reject:G.reject}:{},u&&xe(l,u),++r.ref,l.finalize=function(){--this.parent.ref||this.parent.finalize()},Vn(l,e,a,s));return l.ref===0&&l.finalize(),u}function Kn(){return me.id||(me.id=++Qt),++me.awaits,me.echoes+=ys,me.id}function gt(){return!!me.awaits&&(--me.awaits==0&&(me.id=0),me.echoes=me.awaits*ys,!0)}function It(e){return me.echoes&&e&&e.constructor===mn?(Kn(),e.then(function(t){return gt(),t},function(t){return gt(),rt(t)})):e}function Js(){var e=ge[ge.length-1];ge.pop(),yn(e,!1)}function yn(e,t){var a,s,r=ee;(t?!me.echoes||bn++&&e===ee:!bn||--bn&&e===ee)||queueMicrotask(t?(function(l){++oa,me.echoes&&--me.echoes!=0||(me.echoes=me.awaits=me.id=0),ge.push(ee),yn(l,!0)}).bind(null,e):Js),e!==ee&&(ee=e,r===Nt&&(Nt.env=ks()),aa)&&(a=Nt.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(ie,"Promise",s.PromiseProp),a.all=s.all,a.race=s.race,a.resolve=s.resolve,a.reject=s.reject,s.allSettled&&(a.allSettled=s.allSettled),s.any)&&(a.any=s.any)}function ks(){var e=ie.Promise;return aa?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ie,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Vn(e,t,a,s,r){var l=ee;try{return yn(e,!0),t(a,s,r)}finally{yn(l,!1)}}function $s(e,t,a,s){return typeof e!="function"?e:function(){var r=ee;a&&Kn(),yn(t,!0);try{return e.apply(this,arguments)}finally{yn(r,!1),s&&queueMicrotask(gt)}}}function Qa(e){Promise===mn&&me.echoes===0?bn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+ca).indexOf("[native code]")===-1&&(Kn=gt=De);var rt=G.reject,qn="￿",Cn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ws="String expected.",la=[],fa="__dbnames",Za="readonly",es="readwrite";function Rn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Ss={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Aa(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=Ft(t))[e],t}}function Es(){throw ne.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function $e(e,t){try{var a=Bs(e),s=Bs(t);if(a!==s)return a==="Array"?1:s==="Array"?-1:a==="binary"?1:s==="binary"?-1:a==="string"?1:s==="string"?-1:a==="Date"?1:s!=="Date"?NaN:-1;switch(a){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=Ms(e),l=Ms(t),u=r.length,p=l.length,y=u<p?u:p,S=0;S<y;++S)if(r[S]!==l[S])return r[S]<l[S]?-1:1;return u===p?0:u<p?-1:1;case"Array":for(var C=e,b=t,k=C.length,$=b.length,x=k<$?k:$,g=0;g<x;++g){var _=$e(C[g],b[g]);if(_!==0)return _}return k===$?0:k<$?-1:1}}catch{}return NaN}function Bs(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Wa(e))==="ArrayBuffer")?"binary":t}function Ms(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Ta(e,t,a){var s=e.schema.yProps;return s?(t&&0<a.numFailures&&(t=t.filter(function(r,l){return!a.failures[l]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return a})):a}ts.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var a=t.add;if(ue(a))return be(be([],ue(e)?e:[],!0),a).sort();if(typeof a=="number")return(Number(e)||0)+a;if(typeof a=="bigint")try{return BigInt(e)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(t.remove!==void 0){var s=t.remove;if(ue(s))return ue(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return a=(a=t.replacePrefix)==null?void 0:a[0],a&&typeof e=="string"&&e.startsWith(a)?t.replacePrefix[1]+e.substring(a.length):e};var xn=ts;function ts(e){this["@@propmod"]=e}function ns(e,t){for(var a=Be(t),s=a.length,r=!1,l=0;l<s;++l){var u=a[l],p=t[u],y=nn(e,u);p instanceof xn?(St(e,u,p.execute(y)),r=!0):y!==p&&(St(e,u,p),r=!0)}return r}je.prototype._trans=function(e,t,a){var s=this._tx||ee.trans,r=this.name,l=an&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function u(S,C,b){if(b.schema[r])return t(b.idbtrans,b);throw new ne.NotFound("Table "+r+" not part of transaction")}var p=rn();try{var y=s&&s.db._novip===this.db._novip?s===ee.trans?s._promise(e,u,a):on(function(){return s._promise(e,u,a)},{trans:s,transless:ee.transless||ee}):(function S(C,b,k,$){if(C.idbdb&&(C._state.openComplete||ee.letThrough||C._vip)){var x=C._createTransaction(b,k,C._dbSchema);try{x.create(),C._state.PR1398_maxLoop=3}catch(g){return g.name===Wt.InvalidState&&C.isOpen()&&0<--C._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),C.close({disableAutoOpen:!1}),C.open().then(function(){return S(C,b,k,$)})):rt(g)}return x._promise(b,function(g,_){return on(function(){return ee.trans=x,$(g,_,x)})}).then(function(g){if(b==="readwrite")try{x.idbtrans.commit()}catch{}return b==="readonly"?g:x._completion.then(function(){return g})})}if(C._state.openComplete)return rt(new ne.DatabaseClosed(C._state.dbOpenError));if(!C._state.isBeingOpened){if(!C._state.autoOpen)return rt(new ne.DatabaseClosed);C.open().catch(De)}return C._state.dbReadyPromise.then(function(){return S(C,b,k,$)})})(this.db,e,[this.name],u);return l&&(y._consoleTask=l,y=y.catch(function(S){return console.trace(S),rt(S)})),y}finally{p&&ia()}},je.prototype.get=function(e,t){var a=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?rt(new ne.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return a.core.get({trans:s,key:e}).then(function(r){return a.hook.reading.fire(r)})}).then(t)},je.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ue(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Be(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(p){if(p.compound&&t.every(function(S){return 0<=p.keyPath.indexOf(S)})){for(var y=0;y<t.length;++y)if(t.indexOf(p.keyPath[y])===-1)return!1;return!0}return!1}).sort(function(p,y){return p.keyPath.length-y.keyPath.length})[0];if(a&&this.db._maxKey!==qn)return u=a.keyPath.slice(0,t.length),this.where(u).equals(u.map(function(p){return e[p]}));!a&&an&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(p,y){return $e(p,y)===0}var u=t.reduce(function(C,y){var S=C[0],C=C[1],b=s[y],k=e[y];return[S||b,S||!b?Rn(C,b&&b.multi?function($){return $=nn($,y),ue($)&&$.some(function(x){return r(k,x)})}:function($){return r(k,nn($,y))}):C]},[null,null]),l=u[0],u=u[1];return l?this.where(l.name).equals(e[l.keyPath]).filter(u):a?this.filter(u):this.where(t).equals("")},je.prototype.filter=function(e){return this.toCollection().and(e)},je.prototype.count=function(e){return this.toCollection().count(e)},je.prototype.offset=function(e){return this.toCollection().offset(e)},je.prototype.limit=function(e){return this.toCollection().limit(e)},je.prototype.each=function(e){return this.toCollection().each(e)},je.prototype.toArray=function(e){return this.toCollection().toArray(e)},je.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},je.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ue(e)?"[".concat(e.join("+"),"]"):e))},je.prototype.reverse=function(){return this.toCollection().reverse()},je.prototype.mapToClass=function(e){for(var t=this.db,a=this.name,s=((this.schema.mappedClass=e).prototype instanceof Es&&(e=(u=>{var p=C,y=u;if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");function S(){this.constructor=p}function C(){return u!==null&&u.apply(this,arguments)||this}return Ie(p,y),p.prototype=y===null?Object.create(y):(S.prototype=y.prototype,new S),Object.defineProperty(C.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),C.prototype.table=function(){return a},C})(e)),new Set),r=e.prototype;r;r=ct(r))Object.getOwnPropertyNames(r).forEach(function(u){return s.add(u)});function l(u){if(!u)return u;var p,y=Object.create(e.prototype);for(p in u)if(!s.has(p))try{y[p]=u[p]}catch{}return y}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=l,this.hook("reading",l),e},je.prototype.defineClass=function(){return this.mapToClass(function(e){xe(this,e)})},je.prototype.add=function(e,t){var a=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,u=e;return l&&r&&(u=Aa(l)(e)),this._trans("readwrite",function(p){return a.core.mutate({trans:p,type:"add",keys:t!=null?[t]:null,values:[u]})}).then(function(p){return p.numFailures?G.reject(p.failures[0]):p.lastResult}).then(function(p){if(l)try{St(e,l,p)}catch{}return p})},je.prototype.upsert=function(e,t){var a=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return a.core.get({trans:r,key:e}).then(function(l){var u=l??{};return ns(u,t),s&&St(u,s,e),a.core.mutate({trans:r,type:"put",values:[u],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(p){return p.numFailures?G.reject(p.failures[0]):!!l})})})},je.prototype.update=function(e,t){return typeof e!="object"||ue(e)?this.where(":id").equals(e).modify(t):(e=nn(e,this.schema.primKey.keyPath))===void 0?rt(new ne.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},je.prototype.put=function(e,t){var a=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,u=e;return l&&r&&(u=Aa(l)(e)),this._trans("readwrite",function(p){return a.core.mutate({trans:p,type:"put",values:[u],keys:t!=null?[t]:null})}).then(function(p){return p.numFailures?G.reject(p.failures[0]):p.lastResult}).then(function(p){if(l)try{St(e,l,p)}catch{}return p})},je.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:[e]}).then(function(s){return Ta(t,[e],s)}).then(function(s){return s.numFailures?G.reject(s.failures[0]):void 0})})},je.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Ss}).then(function(a){return Ta(e,null,a)})}).then(function(t){return t.numFailures?G.reject(t.failures[0]):void 0})},je.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(a){return t.core.getMany({keys:e,trans:a}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},je.prototype.bulkAdd=function(e,t,a){var s=this,r=Array.isArray(t)?t:void 0,l=(a=a||(r?void 0:t))?a.allKeys:void 0;return this._trans("readwrite",function(u){var p=s.schema.primKey,S=p.auto,p=p.keyPath;if(p&&r)throw new ne.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ne.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,S=p&&S?e.map(Aa(p)):e;return s.core.mutate({trans:u,type:"add",keys:r,values:S,wantResults:l}).then(function(C){var b=C.numFailures,k=C.failures;if(b===0)return l?C.results:C.lastResult;throw new ea("".concat(s.name,".bulkAdd(): ").concat(b," of ").concat(y," operations failed"),k)})})},je.prototype.bulkPut=function(e,t,a){var s=this,r=Array.isArray(t)?t:void 0,l=(a=a||(r?void 0:t))?a.allKeys:void 0;return this._trans("readwrite",function(u){var p=s.schema.primKey,S=p.auto,p=p.keyPath;if(p&&r)throw new ne.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ne.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,S=p&&S?e.map(Aa(p)):e;return s.core.mutate({trans:u,type:"put",keys:r,values:S,wantResults:l}).then(function(C){var b=C.numFailures,k=C.failures;if(b===0)return l?C.results:C.lastResult;throw new ea("".concat(s.name,".bulkPut(): ").concat(b," of ").concat(y," operations failed"),k)})})},je.prototype.bulkUpdate=function(e){var t=this,a=this.core,s=e.map(function(u){return u.key}),r=e.map(function(u){return u.changes}),l=[];return this._trans("readwrite",function(u){return a.getMany({trans:u,keys:s,cache:"clone"}).then(function(p){var y=[],S=[],C=(e.forEach(function(b,k){var $=b.key,x=b.changes,g=p[k];if(g){for(var _=0,E=Object.keys(x);_<E.length;_++){var B=E[_],F=x[B];if(B===t.schema.primKey.keyPath){if($e(F,$)!==0)throw new ne.Constraint("Cannot update primary key in bulkUpdate()")}else St(g,B,F)}l.push(k),y.push($),S.push(g)}}),y.length);return a.mutate({trans:u,type:"put",keys:y,values:S,updates:{keys:s,changeSpecs:r}}).then(function(b){var k=b.numFailures,$=b.failures;if(k===0)return C;for(var x=0,g=Object.keys($);x<g.length;x++){var _,E=g[x],B=l[Number(E)];B!=null&&(_=$[E],delete $[E],$[B]=_)}throw new ea("".concat(t.name,".bulkUpdate(): ").concat(k," of ").concat(C," operations failed"),$)})})})},je.prototype.bulkDelete=function(e){var t=this,a=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Ta(t,e,r)})}).then(function(s){var r=s.numFailures,l=s.failures;if(r===0)return s.lastResult;throw new ea("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(a," operations failed"),l)})};var _s=je;function je(){}function ma(e){function t(u,p){if(p){for(var y=arguments.length,S=new Array(y-1);--y;)S[y-1]=arguments[y];return a[u].subscribe.apply(null,S),e}if(typeof u=="string")return a[u]}var a={};t.addEventType=l;for(var s=1,r=arguments.length;s<r;++s)l(arguments[s]);return t;function l(u,p,y){var S,C;if(typeof u!="object")return p=p||gs,C={subscribers:[],fire:y=y||De,subscribe:function(b){C.subscribers.indexOf(b)===-1&&(C.subscribers.push(b),C.fire=p(C.fire,b))},unsubscribe:function(b){C.subscribers=C.subscribers.filter(function(k){return k!==b}),C.fire=C.subscribers.reduce(p,y)}},a[u]=t[u]=C;Be(S=u).forEach(function(b){var k=S[b];if(ue(k))l(b,S[b][0],S[b][1]);else{if(k!=="asap")throw new ne.InvalidArgument("Invalid event config");var $=l(b,He,function(){for(var x=arguments.length,g=new Array(x);x--;)g[x]=arguments[x];$.subscribers.forEach(function(_){Tt(function(){_.apply(null,g)})})})}})}}function va(e,t){return Pt(t).from({prototype:e}),t}function jn(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function ga(e,t){e.filter=Rn(e.filter,t)}function as(e,t,a){var s=e.replayFilter;e.replayFilter=s?function(){return Rn(s(),t())}:t,e.justLimit=a&&!s}function Fa(e,t){if(e.isPrimKey)return t.primaryKey;var a=t.getIndexByKeyPath(e.index);if(a)return a;throw new ne.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function Ps(e,t,a){var s=Fa(e,t.schema);return t.openCursor({trans:a,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function Ia(e,t,a,s){var r,l,u=e.replayFilter?Rn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},l=function(p,y,S){var C,b;u&&!u(y,S,function(k){return y.stop(k)},function(k){return y.fail(k)})||((b=""+(C=y.primaryKey))=="[object ArrayBuffer]"&&(b=""+new Uint8Array(C)),he(r,b))||(r[b]=!0,t(p,y,S))},Promise.all([e.or._iterate(l,a),ss(Ps(e,s,a),e.algorithm,l,!e.keysOnly&&e.valueMapper)])):ss(Ps(e,s,a),Rn(e.algorithm,u),t,!e.keysOnly&&e.valueMapper)}function ss(e,t,a,s){var r=Ve(s?function(l,u,p){return a(s(l),u,p)}:a);return e.then(function(l){if(l)return l.start(function(){var u=function(){return l.continue()};t&&!t(l,function(p){return u=p},function(p){l.stop(p),u=De},function(p){l.fail(p),u=De})||r(l.value,l,function(p){return u=p}),u()})})}Me.prototype._read=function(e,t){var a=this._ctx;return a.error?a.table._trans(null,rt.bind(null,a.error)):a.table._trans("readonly",e).then(t)},Me.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,rt.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Me.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Rn(t.algorithm,e)},Me.prototype._iterate=function(e,t){return Ia(this._ctx,e,t,this._ctx.table.core)},Me.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return e&&xe(a,e),t._ctx=a,t},Me.prototype.raw=function(){return this._ctx.valueMapper=null,this},Me.prototype.each=function(e){var t=this._ctx;return this._read(function(a){return Ia(t,e,a,t.table.core)})},Me.prototype.count=function(e){var t=this;return this._read(function(a){var s,r=t._ctx,l=r.table.core;return jn(r,!0)?l.count({trans:a,query:{index:Fa(r,l.schema),range:r.range}}).then(function(u){return Math.min(u,r.limit)}):(s=0,Ia(r,function(){return++s,!1},a,l).then(function(){return s}))}).then(e)},Me.prototype.sortBy=function(e,t){var a=e.split(".").reverse(),s=a[0],r=a.length-1;function l(y,S){return S?l(y[a[S]],S-1):y[s]}var u=this._ctx.dir==="next"?1:-1;function p(y,S){return $e(l(y,r),l(S,r))*u}return this.toArray(function(y){return y.sort(p)}).then(t)},Me.prototype.toArray=function(e){var t=this;return this._read(function(a){var s,r,l,u=t._ctx;return u.dir==="next"&&jn(u,!0)&&0<u.limit?(s=u.valueMapper,r=Fa(u,u.table.core.schema),u.table.core.query({trans:a,limit:u.limit,values:!0,query:{index:r,range:u.range}}).then(function(p){return p=p.result,s?p.map(s):p})):(l=[],Ia(u,function(p){return l.push(p)},a,u.table.core).then(function(){return l}))},e)},Me.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,jn(t)?as(t,function(){var a=e;return function(s,r){return a===0||(a===1?--a:r(function(){s.advance(a),a=0}),!1)}}):as(t,function(){var a=e;return function(){return--a<0}})),this},Me.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),as(this._ctx,function(){var t=e;return function(a,s,r){return--t<=0&&s(r),0<=t}},!0),this},Me.prototype.until=function(e,t){return ga(this._ctx,function(a,s,r){return!e(a.value)||(s(r),t)}),this},Me.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},Me.prototype.last=function(e){return this.reverse().first(e)},Me.prototype.filter=function(e){var t;return ga(this._ctx,function(a){return e(a.value)}),(t=this._ctx).isMatch=Rn(t.isMatch,e),this},Me.prototype.and=function(e){return this.filter(e)},Me.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Me.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Me.prototype.desc=function(){return this.reverse()},Me.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,s){e(s.key,s)})},Me.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Me.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,s){e(s.primaryKey,s)})},Me.prototype.keys=function(e){var t=this._ctx,a=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){a.push(r.key)}).then(function(){return a}).then(e)},Me.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&jn(t,!0)&&0<t.limit)return this._read(function(s){var r=Fa(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var a=[];return this.each(function(s,r){a.push(r.primaryKey)}).then(function(){return a}).then(e)},Me.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Me.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},Me.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Me.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},ga(this._ctx,function(s){var s=s.primaryKey.toString(),r=he(e,s);return e[s]=!0,!r})),this},Me.prototype.modify=function(e){var t=this,a=this._ctx;return this._write(function(s){function r(g,_){var E=_.failures;k+=g-_.numFailures;for(var B=0,F=Be(E);B<F.length;B++){var N=F[B];b.push(E[N])}}var l=typeof e=="function"?e:function(g){return ns(g,e)},u=a.table.core,C=u.schema.primaryKey,p=C.outbound,y=C.extractKey,S=200,C=t.db._options.modifyChunkSize,b=(C&&(S=typeof C=="object"?C[u.name]||C["*"]||200:C),[]),k=0,$=[],x=e===rs;return t.clone().primaryKeys().then(function(g){function _(B){var F=Math.min(S,g.length-B),N=g.slice(B,B+F);return(x?Promise.resolve([]):u.getMany({trans:s,keys:N,cache:"immutable"})).then(function(j){var Y=[],K=[],H=p?[]:null,J=x?N:[];if(!x)for(var R=0;R<F;++R){var X=j[R],we={value:Ft(X),primKey:g[B+R]};l.call(we,we.value,we)!==!1&&(we.value==null?J.push(g[B+R]):p||$e(y(X),y(we.value))===0?(K.push(we.value),p&&H.push(g[B+R])):(J.push(g[B+R]),Y.push(we.value)))}return Promise.resolve(0<Y.length&&u.mutate({trans:s,type:"add",values:Y}).then(function(Ee){for(var re in Ee.failures)J.splice(parseInt(re),1);r(Y.length,Ee)})).then(function(){return(0<K.length||E&&typeof e=="object")&&u.mutate({trans:s,type:"put",keys:H,values:K,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<B}).then(function(Ee){return r(K.length,Ee)})}).then(function(){return(0<J.length||E&&x)&&u.mutate({trans:s,type:"delete",keys:J,criteria:E,isAdditionalChunk:0<B}).then(function(Ee){return Ta(a.table,J,Ee)}).then(function(Ee){return r(J.length,Ee)})}).then(function(){return g.length>B+F&&_(B+S)})})}var E=jn(a)&&a.limit===1/0&&(typeof e!="function"||x)&&{index:a.index,range:a.range};return _(0).then(function(){if(0<b.length)throw new ke("Error modifying one or more objects",b,k,$);return g.length})})})},Me.prototype.delete=function(){var e=this._ctx,t=e.range;return!jn(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(rs):this._write(function(a){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:a,query:{index:s,range:r}}).then(function(l){return e.table.core.mutate({trans:a,type:"deleteRange",range:r}).then(function(y){var p=y.failures,y=y.numFailures;if(y)throw new ke("Could not delete some values",Object.keys(p).map(function(S){return p[S]}),l-y);return l-y})})})};var Hs=Me;function Me(){}var rs=function(e,t){return t.value=null};function Xs(e,t){return e<t?-1:e===t?0:1}function As(e,t){return t<e?-1:e===t?0:1}function Kt(e,t,a){return e=e instanceof Ts?new e.Collection(e):e,e._ctx.error=new(a||TypeError)(t),e}function Yn(e){return new e.Collection(e,function(){return ae("")}).limit(0)}function Oa($,t,a,s){var r,l,u,p,y,S,C,b=a.length;if(!a.every(function(g){return typeof g=="string"}))return Kt($,ws);function k(g){r=g==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},l=g==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},u=g==="next"?Xs:As;var _=a.map(function(E){return{lower:l(E),upper:r(E)}}).sort(function(E,B){return u(E.lower,B.lower)});p=_.map(function(E){return E.upper}),y=_.map(function(E){return E.lower}),C=(S=g)==="next"?"":s}k("next");var $=new $.Collection($,function(){return Pn(p[0],y[b-1]+s)}),x=($._ondirectionchange=function(g){k(g)},0);return $._addAlgorithm(function(g,_,E){var B=g.key;if(typeof B=="string"){var F=l(B);if(t(F,y,x))return!0;for(var N=null,j=x;j<b;++j){var Y=((K,H,J,R,X,we)=>{for(var Ee=Math.min(K.length,R.length),re=-1,se=0;se<Ee;++se){var et=H[se];if(et!==R[se])return X(K[se],J[se])<0?K.substr(0,se)+J[se]+J.substr(se+1):X(K[se],R[se])<0?K.substr(0,se)+R[se]+J.substr(se+1):0<=re?K.substr(0,re)+H[re]+J.substr(re+1):null;X(K[se],et)<0&&(re=se)}return Ee<R.length&&we==="next"?K+J.substr(K.length):Ee<K.length&&we==="prev"?K.substr(0,J.length):re<0?null:K.substr(0,re)+R[re]+J.substr(re+1)})(B,F,p[j],y[j],u,S);Y===null&&N===null?x=j+1:(N===null||0<u(N,Y))&&(N=Y)}_(N!==null?function(){g.continue(N+C)}:E)}return!1}),$}function Pn(e,t,a,s){return{type:2,lower:e,upper:t,lowerOpen:a,upperOpen:s}}function ae(e){return{type:1,lower:e,upper:e}}Object.defineProperty(i.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),i.prototype.between=function(e,t,a,s){a=a!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(a||s)&&(!a||!s)?Yn(this):new this.Collection(this,function(){return Pn(e,t,!a,!s)})}catch{return Kt(this,Cn)}},i.prototype.equals=function(e){return e==null?Kt(this,Cn):new this.Collection(this,function(){return ae(e)})},i.prototype.above=function(e){return e==null?Kt(this,Cn):new this.Collection(this,function(){return Pn(e,void 0,!0)})},i.prototype.aboveOrEqual=function(e){return e==null?Kt(this,Cn):new this.Collection(this,function(){return Pn(e,void 0,!1)})},i.prototype.below=function(e){return e==null?Kt(this,Cn):new this.Collection(this,function(){return Pn(void 0,e,!1,!0)})},i.prototype.belowOrEqual=function(e){return e==null?Kt(this,Cn):new this.Collection(this,function(){return Pn(void 0,e)})},i.prototype.startsWith=function(e){return typeof e!="string"?Kt(this,ws):this.between(e,e+qn,!0,!0)},i.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):Oa(this,function(t,a){return t.indexOf(a[0])===0},[e],qn)},i.prototype.equalsIgnoreCase=function(e){return Oa(this,function(t,a){return t===a[0]},[e],"")},i.prototype.anyOfIgnoreCase=function(){var e=Z.apply(mt,arguments);return e.length===0?Yn(this):Oa(this,function(t,a){return a.indexOf(t)!==-1},e,"")},i.prototype.startsWithAnyOfIgnoreCase=function(){var e=Z.apply(mt,arguments);return e.length===0?Yn(this):Oa(this,function(t,a){return a.some(function(s){return t.indexOf(s)===0})},e,qn)},i.prototype.anyOf=function(){var e,t,a=this,s=Z.apply(mt,arguments),r=this._cmp;try{s.sort(r)}catch{return Kt(this,Cn)}return s.length===0?Yn(this):((e=new this.Collection(this,function(){return Pn(s[0],s[s.length-1])}))._ondirectionchange=function(l){r=l==="next"?a._ascending:a._descending,s.sort(r)},t=0,e._addAlgorithm(function(l,u,p){for(var y=l.key;0<r(y,s[t]);)if(++t===s.length)return u(p),!1;return r(y,s[t])===0||(u(function(){l.continue(s[t])}),!1)}),e)},i.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},i.prototype.noneOf=function(){var e=Z.apply(mt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Kt(this,Cn)}var t=e.reduce(function(a,s){return a?a.concat([[a[a.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},i.prototype.inAnyRange=function(e,E){var a=this,s=this._cmp,r=this._ascending,l=this._descending,u=this._min,p=this._max;if(e.length===0)return Yn(this);if(!e.every(function(B){return B[0]!==void 0&&B[1]!==void 0&&r(B[0],B[1])<=0}))return Kt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ne.InvalidArgument);var y=!E||E.includeLowers!==!1,S=E&&E.includeUppers===!0,C,b=r;function k(B,F){return b(B[0],F[0])}try{(C=e.reduce(function(B,F){for(var N=0,j=B.length;N<j;++N){var Y=B[N];if(s(F[0],Y[1])<0&&0<s(F[1],Y[0])){Y[0]=u(Y[0],F[0]),Y[1]=p(Y[1],F[1]);break}}return N===j&&B.push(F),B},[])).sort(k)}catch{return Kt(this,Cn)}var $=0,x=S?function(B){return 0<r(B,C[$][1])}:function(B){return 0<=r(B,C[$][1])},g=y?function(B){return 0<l(B,C[$][0])}:function(B){return 0<=l(B,C[$][0])},_=x,E=new this.Collection(this,function(){return Pn(C[0][0],C[C.length-1][1],!y,!S)});return E._ondirectionchange=function(B){b=B==="next"?(_=x,r):(_=g,l),C.sort(k)},E._addAlgorithm(function(B,F,N){for(var j,Y=B.key;_(Y);)if(++$===C.length)return F(N),!1;return!x(j=Y)&&!g(j)||(a._cmp(Y,C[$][1])===0||a._cmp(Y,C[$][0])===0||F(function(){b===r?B.continue(C[$][0]):B.continue(C[$][1])}),!1)}),E},i.prototype.startsWithAnyOf=function(){var e=Z.apply(mt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Yn(this):this.inAnyRange(e.map(function(t){return[t,t+qn]})):Kt(this,"startsWithAnyOf() only works with strings")};var Ts=i;function i(){}function o(e){return Ve(function(t){return d(t),e(t.target.error),!1})}function d(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var c="storagemutated",v="x-storagemutated-1",w=ma(null,c),T=(I.prototype._lock=function(){return wt(!ee.global),++this._reculock,this._reculock!==1||ee.global||(ee.lockOwnerFor=this),this},I.prototype._unlock=function(){if(wt(!ee.global),--this._reculock==0)for(ee.global||(ee.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{Vn(e[1],e[0])}catch{}}return this},I.prototype._locked=function(){return this._reculock&&ee.lockOwnerFor!==this},I.prototype.create=function(e){var t=this;if(this.mode){var a=this.db.idbdb,s=this.db._state.dbOpenError;if(wt(!this.idbtrans),!e&&!a)switch(s&&s.name){case"DatabaseClosedError":throw new ne.DatabaseClosed(s);case"MissingAPIError":throw new ne.MissingAPI(s.message,s);default:throw new ne.OpenFailed(s)}if(!this.active)throw new ne.TransactionInactive;wt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||a).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ve(function(r){d(r),t._reject(e.error)}),e.onabort=Ve(function(r){d(r),t.active&&t._reject(new ne.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=Ve(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&w.storagemutated.fire(e.mutatedParts)})}return this},I.prototype._promise=function(e,t,a){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?rt(new ne.ReadOnly("Transaction is readonly")):this.active?this._locked()?new G(function(l,u){r._blockedFuncs.push([function(){r._promise(e,t,a).then(l,u)},ee])}):a?on(function(){var l=new G(function(u,p){r._lock();var y=t(u,p,r);y&&y.then&&y.then(u,p)});return l.finally(function(){return r._unlock()}),l._lib=!0,l}):((s=new G(function(l,u){var p=t(l,u,r);p&&p.then&&p.then(l,u)}))._lib=!0,s):rt(new ne.TransactionInactive)},I.prototype._root=function(){return this.parent?this.parent._root():this},I.prototype.waitFor=function(e){var t,a=this._root(),s=G.resolve(e),r=(a._waitingFor?a._waitingFor=a._waitingFor.then(function(){return s}):(a._waitingFor=s,a._waitingQueue=[],t=a.idbtrans.objectStore(a.storeNames[0]),(function l(){for(++a._spinCount;a._waitingQueue.length;)a._waitingQueue.shift()();a._waitingFor&&(t.get(-1/0).onsuccess=l)})()),a._waitingFor);return new G(function(l,u){s.then(function(p){return a._waitingQueue.push(Ve(l.bind(null,p)))},function(p){return a._waitingQueue.push(Ve(u.bind(null,p)))}).finally(function(){a._waitingFor===r&&(a._waitingFor=null)})})},I.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ne.Abort))},I.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(he(t,e))return t[e];var a=this.schema[e];if(a)return(a=new this.db.Table(e,a,this)).core=this.db.core.table(e),t[e]=a;throw new ne.NotFound("Table "+e+" not part of transaction")},I);function I(){}function A(e,t,a,s,r,l,u,p){return{name:e,keyPath:t,unique:a,multi:s,auto:r,compound:l,src:(a&&!u?"&":"")+(s?"*":"")+(r?"++":"")+V(t),type:p}}function V(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function O(e,t,a){return{name:e,primKey:t,indexes:a,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},a.reduce(function(r,l,u){return l=s(l,u),l&&(r[l[0]]=l[1]),r},{}))};var s}var W=function(e){try{return e.only([[]]),W=function(){return[[]]},[[]]}catch{return W=function(){return qn},qn}};function U(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(a){return a[t]}:function(a){return nn(a,t)}:function(a){return nn(a,e)};var t}function oe(e){return[].slice.call(e)}var Se=0;function _e(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function de(e,t,y){function s(x){if(x.type===3)return null;if(x.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var b=x.lower,k=x.upper,$=x.lowerOpen,x=x.upperOpen;return b===void 0?k===void 0?null:t.upperBound(k,!!x):k===void 0?t.lowerBound(b,!!$):t.bound(b,k,!!$,!!x)}function r(C){var b,k=C.name;return{name:k,schema:C,mutate:function($){var x=$.trans,g=$.type,_=$.keys,E=$.values,B=$.range;return new Promise(function(F,N){F=Ve(F);var j=x.objectStore(k),Y=j.keyPath==null,K=g==="put"||g==="add";if(!K&&g!=="delete"&&g!=="deleteRange")throw new Error("Invalid operation type: "+g);var H,J=(_||E||{length:1}).length;if(_&&E&&_.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(J===0)return F({numFailures:0,failures:{},results:[],lastResult:void 0});function R(st){++Ee,d(st)}var X=[],we=[],Ee=0;if(g==="deleteRange"){if(B.type===4)return F({numFailures:Ee,failures:we,results:[],lastResult:void 0});B.type===3?X.push(H=j.clear()):X.push(H=j.delete(s(B)))}else{var Y=K?Y?[E,_]:[E,null]:[_,null],re=Y[0],se=Y[1];if(K)for(var et=0;et<J;++et)X.push(H=se&&se[et]!==void 0?j[g](re[et],se[et]):j[g](re[et])),H.onerror=R;else for(et=0;et<J;++et)X.push(H=j[g](re[et])),H.onerror=R}function Yt(st){st=st.target.result,X.forEach(function(Gn,cs){return Gn.error!=null&&(we[cs]=Gn.error)}),F({numFailures:Ee,failures:we,results:g==="delete"?_:X.map(function(Gn){return Gn.result}),lastResult:st})}H.onerror=function(st){R(st),Yt(st)},H.onsuccess=Yt})},getMany:function($){var x=$.trans,g=$.keys;return new Promise(function(_,E){_=Ve(_);for(var B,F=x.objectStore(k),N=g.length,j=new Array(N),Y=0,K=0,H=function(X){X=X.target,j[X._pos]=X.result,++K===Y&&_(j)},J=o(E),R=0;R<N;++R)g[R]!=null&&((B=F.get(g[R]))._pos=R,B.onsuccess=H,B.onerror=J,++Y);Y===0&&_(j)})},get:function($){var x=$.trans,g=$.key;return new Promise(function(_,E){_=Ve(_);var B=x.objectStore(k).get(g);B.onsuccess=function(F){return _(F.target.result)},B.onerror=o(E)})},query:(b=p,function($){return new Promise(function(x,g){x=Ve(x);var _,E,B,K=$.trans,F=$.values,N=$.limit,Y=$.query,j=N===1/0?void 0:N,H=Y.index,Y=Y.range,K=K.objectStore(k),K=H.isPrimaryKey?K:K.index(H.name),H=s(Y);if(N===0)return x({result:[]});b?((Y=F?K.getAll(H,j):K.getAllKeys(H,j)).onsuccess=function(J){return x({result:J.target.result})},Y.onerror=o(g)):(_=0,E=!F&&"openKeyCursor"in K?K.openKeyCursor(H):K.openCursor(H),B=[],E.onsuccess=function(J){var R=E.result;return!R||(B.push(F?R.value:R.primaryKey),++_===N)?x({result:B}):void R.continue()},E.onerror=o(g))})}),openCursor:function($){var x=$.trans,g=$.values,_=$.query,E=$.reverse,B=$.unique;return new Promise(function(F,N){F=Ve(F);var K=_.index,j=_.range,Y=x.objectStore(k),Y=K.isPrimaryKey?Y:Y.index(K.name),K=E?B?"prevunique":"prev":B?"nextunique":"next",H=!g&&"openKeyCursor"in Y?Y.openKeyCursor(s(j),K):Y.openCursor(s(j),K);H.onerror=o(N),H.onsuccess=Ve(function(J){var R,X,we,Ee,re=H.result;re?(re.___id=++Se,re.done=!1,R=re.continue.bind(re),X=(X=re.continuePrimaryKey)&&X.bind(re),we=re.advance.bind(re),Ee=function(){throw new Error("Cursor not stopped")},re.trans=x,re.stop=re.continue=re.continuePrimaryKey=re.advance=function(){throw new Error("Cursor not started")},re.fail=Ve(N),re.next=function(){var se=this,et=1;return this.start(function(){return et--?se.continue():se.stop()}).then(function(){return se})},re.start=function(se){function et(){if(H.result)try{se()}catch(st){re.fail(st)}else re.done=!0,re.start=function(){throw new Error("Cursor behind last entry")},re.stop()}var Yt=new Promise(function(st,Gn){st=Ve(st),H.onerror=o(Gn),re.fail=Gn,re.stop=function(cs){re.stop=re.continue=re.continuePrimaryKey=re.advance=Ee,st(cs)}});return H.onsuccess=Ve(function(st){H.onsuccess=et,et()}),re.continue=R,re.continuePrimaryKey=X,re.advance=we,et(),Yt},F(re)):F(null)},N)})},count:function($){var x=$.query,g=$.trans,_=x.index,E=x.range;return new Promise(function(B,F){var N=g.objectStore(k),N=_.isPrimaryKey?N:N.index(_.name),j=s(E),j=j?N.count(j):N.count();j.onsuccess=Ve(function(Y){return B(Y.target.result)}),j.onerror=o(F)})}}}l=y,u=oe((y=e).objectStoreNames);var l,y={schema:{name:y.name,tables:u.map(function(C){return l.objectStore(C)}).map(function(C){var b=C.keyPath,k=C.autoIncrement,x=ue(b),$={},x={name:C.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:b==null,compound:x,keyPath:b,autoIncrement:k,unique:!0,extractKey:U(b)},indexes:oe(C.indexNames).map(function(g){return C.index(g)}).map(function(B){var F=B.name,_=B.unique,E=B.multiEntry,B=B.keyPath,F={name:F,compound:ue(B),keyPath:B,unique:_,multiEntry:E,extractKey:U(B)};return $[_e(B)]=F}),getIndexByKeyPath:function(g){return $[_e(g)]}};return $[":id"]=x.primaryKey,b!=null&&($[_e(b)]=x.primaryKey),x})},hasGetAll:0<u.length&&"getAll"in l.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},u=y.schema,p=y.hasGetAll,y=u.tables.map(r),S={};return y.forEach(function(C){return S[C.name]=C}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(C){if(S[C])return S[C];throw new Error("Table '".concat(C,"' not found"))},MIN_KEY:-1/0,MAX_KEY:W(t),schema:u}}function Fe(e,t,a,s){return a=a.IDBKeyRange,t=de(t,a,s),{dbcore:e.dbcore.reduce(function(r,l){return l=l.create,Q(Q({},r),l(r))},t)}}function Le(e,t){var a=t.db,a=Fe(e._middlewares,a,e._deps,t);e.core=a.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(l){return l.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function ce(e,t,a,s){a.forEach(function(r){var l=s[r];t.forEach(function(u){var p=(function y(S,C){return hn(S,C)||(S=ct(S))&&y(S,C)})(u,r);(!p||"value"in p&&p.value===void 0)&&(u===e.Transaction.prototype||u instanceof e.Transaction?Ue(u,r,{get:function(){return this.table(r)},set:function(y){ft(this,r,{value:y,writable:!0,configurable:!0,enumerable:!0})}}):u[r]=new e.Table(r,l))})})}function Ce(e,t){t.forEach(function(a){for(var s in a)a[s]instanceof e.Table&&delete a[s]})}function te(e,t){return e._cfg.version-t._cfg.version}function D(e,t,a,s){var r=e._dbSchema,l=(a.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=O("$meta",tt("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),u=(l.create(a),l._completion.catch(s),l._reject.bind(l)),p=ee.transless||ee;on(function(){if(ee.trans=l,ee.transless=p,t!==0)return Le(e,a),S=t,((y=l).storeNames.includes("$meta")?y.table("$meta").get("version").then(function(C){return C??S}):G.resolve(S)).then(function(_){var b=e,k=_,$=l,x=a,g=[],_=b._versions,E=b._dbSchema=ut(0,b.idbdb,x);return(_=_.filter(function(B){return B._cfg.version>=k})).length===0?G.resolve():(_.forEach(function(B){g.push(function(){var F,N,j,Y=E,K=B._cfg.dbschema,H=(Ne(b,Y,x),Ne(b,K,x),E=b._dbSchema=K,qe(Y,K)),J=(H.add.forEach(function(R){pt(x,R[0],R[1].primKey,R[1].indexes)}),H.change.forEach(function(R){if(R.recreate)throw new ne.Upgrade("Not yet support for changing primary key");var X=x.objectStore(R.name);R.add.forEach(function(we){return ve(X,we)}),R.change.forEach(function(we){X.deleteIndex(we.name),ve(X,we)}),R.del.forEach(function(we){return X.deleteIndex(we)})}),B._cfg.contentUpgrade);if(J&&B._cfg.version>k)return Le(b,x),$._memoizedTables={},F=Et(K),H.del.forEach(function(R){F[R]=Y[R]}),Ce(b,[b.Transaction.prototype]),ce(b,[b.Transaction.prototype],Be(F),F),$.schema=F,(N=fn(J))&&Kn(),K=G.follow(function(){var R;(j=J($))&&N&&(R=gt.bind(null,null),j.then(R,R))}),j&&typeof j.then=="function"?G.resolve(j):K.then(function(){return j})}),g.push(function(F){var N,j,Y=B._cfg.dbschema;N=Y,j=F,[].slice.call(j.db.objectStoreNames).forEach(function(K){return N[K]==null&&j.db.deleteObjectStore(K)}),Ce(b,[b.Transaction.prototype]),ce(b,[b.Transaction.prototype],b._storeNames,b._dbSchema),$.schema=b._dbSchema}),g.push(function(F){b.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(b.idbdb.version/10)===B._cfg.version?(b.idbdb.deleteObjectStore("$meta"),delete b._dbSchema.$meta,b._storeNames=b._storeNames.filter(function(N){return N!=="$meta"})):F.objectStore("$meta").put(B._cfg.version,"version"))})}),(function B(){return g.length?G.resolve(g.shift()($.idbtrans)).then(B):G.resolve()})().then(function(){Bt(E,x)}))}).catch(u);var y,S;Be(r).forEach(function(C){pt(a,C,r[C].primKey,r[C].indexes)}),Le(e,a),G.follow(function(){return e.on.populate.fire(l)}).catch(u)})}function pe(e,t){Bt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var a=ut(0,e.idbdb,t);Ne(e,e._dbSchema,t);for(var s=0,r=qe(a,e._dbSchema).change;s<r.length;s++){var l=(u=>{if(u.change.length||u.recreate)return console.warn("Unable to patch indexes of table ".concat(u.name," because it has changes on the type of index or primary key.")),{value:void 0};var p=t.objectStore(u.name);u.add.forEach(function(y){an&&console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name,".").concat(y.src)),ve(p,y)})})(r[s]);if(typeof l=="object")return l.value}}function qe(e,t){var a,s={del:[],add:[],change:[]};for(a in e)t[a]||s.del.push(a);for(a in t){var r=e[a],l=t[a];if(r){var u={name:a,def:l,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(l.primKey.keyPath||"")||r.primKey.auto!==l.primKey.auto)u.recreate=!0,s.change.push(u);else{var p=r.idxByName,y=l.idxByName,S=void 0;for(S in p)y[S]||u.del.push(S);for(S in y){var C=p[S],b=y[S];C?C.src!==b.src&&u.change.push(b):u.add.push(b)}(0<u.del.length||0<u.add.length||0<u.change.length)&&s.change.push(u)}}else s.add.push([a,l])}return s}function pt(e,t,a,s){var r=e.db.createObjectStore(t,a.keyPath?{keyPath:a.keyPath,autoIncrement:a.auto}:{autoIncrement:a.auto});s.forEach(function(l){return ve(r,l)})}function Bt(e,t){Be(e).forEach(function(a){t.db.objectStoreNames.contains(a)||(an&&console.debug("Dexie: Creating missing table",a),pt(t,a,e[a].primKey,e[a].indexes))})}function ve(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function ut(e,t,a){var s={};return pn(t.objectStoreNames,0).forEach(function(r){for(var l=a.objectStore(r),u=A(V(S=l.keyPath),S||"",!0,!1,!!l.autoIncrement,S&&typeof S!="string",!0),p=[],y=0;y<l.indexNames.length;++y){var C=l.index(l.indexNames[y]),S=C.keyPath,C=A(C.name,S,!!C.unique,!!C.multiEntry,!1,S&&typeof S!="string",!1);p.push(C)}s[r]=O(r,u,p)}),s}function Ne(e,t,a){for(var s=a.db.objectStoreNames,r=0;r<s.length;++r){var l=s[r],u=a.objectStore(l);e._hasGetAll="getAll"in u;for(var p=0;p<u.indexNames.length;++p){var y,S=u.indexNames[p],C=u.index(S).keyPath,C=typeof C=="string"?C:"["+pn(C).join("+")+"]";t[l]&&(y=t[l].idxByName[C])&&(y.name=S,delete t[l].idxByName[C],t[l].idxByName[S]=y)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ie.WorkerGlobalScope&&ie instanceof ie.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function tt(e){return e.split(",").map(function(t,a){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),l=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return A(r,l||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ue(l),a===0,s)})}Xe.prototype._createTableSchema=O,Xe.prototype._parseIndexSyntax=tt,Xe.prototype._parseStoresSpec=function(e,t){var a=this;Be(e).forEach(function(s){if(e[s]!==null){var r=a._parseIndexSyntax(e[s]),l=r.shift();if(!l)throw new ne.Schema("Invalid schema for table "+s+": "+e[s]);if(l.unique=!0,l.multi)throw new ne.Schema("Primary key cannot be multiEntry*");r.forEach(function(u){if(u.auto)throw new ne.Schema("Only primary key can be marked as autoIncrement (++)");if(!u.keyPath)throw new ne.Schema("Index must have a name and cannot be an empty string")}),l=a._createTableSchema(s,l,r),t[s]=l}})},Xe.prototype.stores=function(a){var t=this.db,a=(this._cfg.storesSource=this._cfg.storesSource?xe(this._cfg.storesSource,a):a,t._versions),s={},r={};return a.forEach(function(l){xe(s,l._cfg.storesSource),r=l._cfg.dbschema={},l._parseStoresSpec(s,r)}),t._dbSchema=r,Ce(t,[t._allTables,t,t.Transaction.prototype]),ce(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Be(r),r),t._storeNames=Be(r),this},Xe.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Ja(this._cfg.contentUpgrade||De,e),this};var dt=Xe;function Xe(){}function it(e,t){var a=e._dbNamesDB;return a||(a=e._dbNamesDB=new wn(fa,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),a.table("dbnames")}function Ut(e){return e&&typeof e.databases=="function"}function Jt(e){return on(function(){return ee.letThrough=!0,e()})}function Ht(e){return!("from"in e)}var Ye=function(e,t){var a;if(!this)return a=new Ye,e&&"d"in e&&xe(a,e),a;xe(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function ot(e,t,a){var s=$e(t,a);if(!isNaN(s)){if(0<s)throw RangeError();if(Ht(e))return xe(e,{from:t,to:a,d:1});var s=e.l,r=e.r;if($e(a,e.from)<0)return s?ot(s,t,a):e.l={from:t,to:a,d:1,l:null,r:null},nt(e);if(0<$e(t,e.to))return r?ot(r,t,a):e.r={from:t,to:a,d:1,l:null,r:null},nt(e);$e(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<$e(a,e.to)&&(e.to=a,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&Xt(e,s),r&&t&&Xt(e,r)}}function Xt(e,t){Ht(t)||(function a(s,r){var l=r.from,u=r.l,p=r.r;ot(s,l,r.to),u&&a(s,u),p&&a(s,p)})(e,t)}function Ke(e,t){var a=ze(t),s=a.next();if(!s.done)for(var r=s.value,l=ze(e),u=l.next(r.from),p=u.value;!s.done&&!u.done;){if($e(p.from,r.to)<=0&&0<=$e(p.to,r.from))return!0;$e(r.from,p.from)<0?r=(s=a.next(p.from)).value:p=(u=l.next(r.from)).value}return!1}function ze(e){var t=Ht(e)?null:{s:0,n:e};return{next:function(a){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&$e(a,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||$e(a,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function nt(e){var t,a,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",a=Q({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],a[r]=s[t],(e[t]=a).d=at(a)),e.d=at(e)}function at(a){var t=a.r,a=a.l;return(t?a?Math.max(t.d,a.d):t.d:a?a.d:0)+1}function Je(e,t){return Be(t).forEach(function(a){e[a]?Xt(e[a],t[a]):e[a]=(function s(r){var l,u,p={};for(l in r)he(r,l)&&(u=r[l],p[l]=!u||typeof u!="object"||ps.has(u.constructor)?u:s(u));return p})(t[a])}),e}function kn(e,t){return e.all||t.all||Object.keys(e).some(function(a){return t[a]&&Ke(t[a],e[a])})}$t(Ye.prototype,((Lt={add:function(e){return Xt(this,e),this},addKey:function(e){return ot(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(a){return ot(t,a,a)}),this},hasKey:function(e){var t=ze(this).next(e).value;return t&&$e(t.from,e)<=0&&0<=$e(t.to,e)}})[Ua]=function(){return ze(this)},Lt));var Pe={},$n={},Vt=!1;function le(e){Je($n,e),Vt||(Vt=!0,setTimeout(function(){Vt=!1,Mt($n,!($n={}))},0))}function Mt(e,t){t===void 0&&(t=!1);var a=new Set;if(e.all)for(var s=0,r=Object.values(Pe);s<r.length;s++)qt(p=r[s],e,a,t);else for(var l in e){var u,p,l=/^idb\:\/\/(.*)\/(.*)\//.exec(l);l&&(u=l[1],l=l[2],p=Pe["idb://".concat(u,"/").concat(l)])&&qt(p,e,a,t)}a.forEach(function(y){return y()})}function qt(e,t,a,s){for(var r=[],l=0,u=Object.entries(e.queries.query);l<u.length;l++){for(var p=u[l],y=p[0],S=[],C=0,b=p[1];C<b.length;C++){var k=b[C];kn(t,k.obsSet)?k.subscribers.forEach(function(_){return a.add(_)}):s&&S.push(k)}s&&r.push([y,S])}if(s)for(var $=0,x=r;$<x.length;$++){var g=x[$],y=g[0],S=g[1];e.queries.query[y]=S}}function ba(e){var t=e._state,a=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?rt(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),l=!1;function u(){if(t.openCanceller!==s)throw new ne.DatabaseClosed("db.open() was cancelled")}function p(){return new G(function(k,$){if(u(),!a)throw new ne.MissingAPI;var x=e.name,g=t.autoSchema||!r?a.open(x):a.open(x,r);if(!g)throw new ne.MissingAPI;g.onerror=o($),g.onblocked=Ve(e._fireOnBlocked),g.onupgradeneeded=Ve(function(_){var E;C=g.transaction,t.autoSchema&&!e._options.allowEmptyDB?(g.onerror=d,C.abort(),g.result.close(),(E=a.deleteDatabase(x)).onsuccess=E.onerror=Ve(function(){$(new ne.NoSuchDatabase("Database ".concat(x," doesnt exist")))})):(C.onerror=o($),E=_.oldVersion>Math.pow(2,62)?0:_.oldVersion,b=E<1,e.idbdb=g.result,l&&pe(e,C),D(e,E/10,C,$))},$),g.onsuccess=Ve(function(){C=null;var _,E,B,F,N,j,Y=e.idbdb=g.result,K=pn(Y.objectStoreNames);if(0<K.length)try{var H=Y.transaction((N=K).length===1?N[0]:N,"readonly");if(t.autoSchema)j=Y,F=H,(B=e).verno=j.version/10,F=B._dbSchema=ut(0,j,F),B._storeNames=pn(j.objectStoreNames,0),ce(B,[B._allTables],Be(F),F);else if(Ne(e,e._dbSchema,H),E=H,((E=qe(ut(0,(_=e).idbdb,E),_._dbSchema)).add.length||E.change.some(function(J){return J.add.length||J.change.length}))&&!l)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),r=Y.version+1,l=!0,k(p());Le(e,H)}catch{}la.push(e),Y.onversionchange=Ve(function(J){t.vcFired=!0,e.on("versionchange").fire(J)}),Y.onclose=Ve(function(){e.close({disableAutoOpen:!1})}),b&&(K=e._deps,N=x,Ut(j=K.indexedDB)||N===fa||it(j,K.IDBKeyRange).put({name:N}).catch(De)),k()},$)}).catch(function(k){switch(k?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),p();break;case"VersionError":if(0<r)return r=0,p()}return G.reject(k)})}var y,S=t.dbReadyResolve,C=null,b=!1;return G.race([s,(typeof navigator>"u"?G.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(k){function $(){return indexedDB.databases().finally(k)}y=setInterval($,100),$()}).finally(function(){return clearInterval(y)}):Promise.resolve()).then(p)]).then(function(){return u(),t.onReadyBeingFired=[],G.resolve(Jt(function(){return e.on.ready.fire(e.vip)})).then(function k(){var $;if(0<t.onReadyBeingFired.length)return $=t.onReadyBeingFired.reduce(Ja,De),t.onReadyBeingFired=[],G.resolve(Jt(function(){return $(e.vip)})).then(k)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(k){t.dbOpenError=k;try{C&&C.abort()}catch{}return s===t.openCanceller&&e._close(),rt(k)}).finally(function(){t.openComplete=!0,S()}).then(function(){var k;return b&&(k={},e.tables.forEach(function($){$.schema.indexes.forEach(function(x){x.name&&(k["idb://".concat(e.name,"/").concat($.name,"/").concat(x.name)]=new Ye(-1/0,[[[]]]))}),k["idb://".concat(e.name,"/").concat($.name,"/")]=k["idb://".concat(e.name,"/").concat($.name,"/:dels")]=new Ye(-1/0,[[[]]])}),w(c).fire(k),Mt(k,!0)),e})}function Zt(e){function t(l){return e.next(l)}var a=r(t),s=r(function(l){return e.throw(l)});function r(l){return function(p){var p=l(p),y=p.value;return p.done?y:y&&typeof y.then=="function"?y.then(a,s):ue(y)?Promise.all(y).then(a,s):a(y)}}return r(t)()}function ln(e,t,a){for(var s=ue(e)?e.slice():[e],r=0;r<a;++r)s.push(t);return s}var An={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Q(Q({},e),{table:function(s){var a=e.table(s),s=a.schema,r={},l=[];function u(k,$,x){var B=_e(k),g=r[B]=r[B]||[],_=k==null?0:typeof k=="string"?1:k.length,E=0<$,B=Q(Q({},x),{name:E?"".concat(B,"(virtual-from:").concat(x.name,")"):x.name,lowLevelIndex:x,isVirtual:E,keyTail:$,keyLength:_,extractKey:U(k),unique:!E&&x.unique});return g.push(B),B.isPrimaryKey||l.push(B),1<_&&u(_===2?k[0]:k.slice(0,_-1),$+1,x),g.sort(function(F,N){return F.keyTail-N.keyTail}),B}var p=u(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[p];for(var y=0,S=s.indexes;y<S.length;y++){var C=S[y];u(C.keyPath,0,C)}function b(k){var $,x=k.query.index;return x.isVirtual?Q(Q({},k),{query:{index:x.lowLevelIndex,range:($=k.query.range,x=x.keyTail,{type:$.type===1?2:$.type,lower:ln($.lower,$.lowerOpen?e.MAX_KEY:e.MIN_KEY,x),lowerOpen:!0,upper:ln($.upper,$.upperOpen?e.MIN_KEY:e.MAX_KEY,x),upperOpen:!0})}}):k}return Q(Q({},a),{schema:Q(Q({},s),{primaryKey:p,indexes:l,getIndexByKeyPath:function(k){return(k=r[_e(k)])&&k[0]}}),count:function(k){return a.count(b(k))},query:function(k){return a.query(b(k))},openCursor:function(k){var $=k.query.index,x=$.keyTail,g=$.keyLength;return $.isVirtual?a.openCursor(b(k)).then(function(E){return E&&_(E)}):a.openCursor(k);function _(E){return Object.create(E,{continue:{value:function(B){B!=null?E.continue(ln(B,k.reverse?e.MAX_KEY:e.MIN_KEY,x)):k.unique?E.continue(E.key.slice(0,g).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,x)):E.continue()}},continuePrimaryKey:{value:function(B,F){E.continuePrimaryKey(ln(B,e.MAX_KEY,x),F)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var B=E.key;return g===1?B[0]:B.slice(0,g)}},value:{get:function(){return E.value}}})}}})}})}};function bt(e,t,a,s){return a=a||{},s=s||"",Be(e).forEach(function(r){var l,u,p;he(t,r)?(l=e[r],u=t[r],typeof l=="object"&&typeof u=="object"&&l&&u?(p=Wa(l))!==Wa(u)?a[s+r]=t[r]:p==="Object"?bt(l,u,a,s+r+"."):l!==u&&(a[s+r]=t[r]):l!==u&&(a[s+r]=t[r])):a[s+r]=void 0}),Be(t).forEach(function(r){he(e,r)||(a[s+r]=t[r])}),a}function Ot(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var _t={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Q(Q({},e),{table:function(t){var a=e.table(t),s=a.schema.primaryKey;return Q(Q({},a),{mutate:function(r){var l=ee.trans,u=l.table(t).hook,p=u.deleting,y=u.creating,S=u.updating;switch(r.type){case"add":if(y.fire===De)break;return l._promise("readwrite",function(){return C(r)},!0);case"put":if(y.fire===De&&S.fire===De)break;return l._promise("readwrite",function(){return C(r)},!0);case"delete":if(p.fire===De)break;return l._promise("readwrite",function(){return C(r)},!0);case"deleteRange":if(p.fire===De)break;return l._promise("readwrite",function(){return(function b(k,$,x){return a.query({trans:k,values:!1,query:{index:s,range:$},limit:x}).then(function(g){var _=g.result;return C({type:"delete",keys:_,trans:k}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):_.length<x?{failures:[],numFailures:0,lastResult:void 0}:b(k,Q(Q({},$),{lower:_[_.length-1],lowerOpen:!0}),x)})})})(r.trans,r.range,1e4)},!0)}return a.mutate(r);function C(b){var k,$,x,g=ee.trans,_=b.keys||Ot(s,b);if(_)return(b=b.type==="add"||b.type==="put"?Q(Q({},b),{keys:_}):Q({},b)).type!=="delete"&&(b.values=be([],b.values)),b.keys&&(b.keys=be([],b.keys)),k=a,x=_,(($=b).type==="add"?Promise.resolve([]):k.getMany({trans:$.trans,keys:x,cache:"immutable"})).then(function(E){var B=_.map(function(F,N){var j,Y,K,H=E[N],J={onerror:null,onsuccess:null};return b.type==="delete"?p.fire.call(J,F,H,g):b.type==="add"||H===void 0?(j=y.fire.call(J,F,b.values[N],g),F==null&&j!=null&&(b.keys[N]=F=j,s.outbound||St(b.values[N],s.keyPath,F))):(j=bt(H,b.values[N]),(Y=S.fire.call(J,j,F,H,g))&&(K=b.values[N],Object.keys(Y).forEach(function(R){he(K,R)?K[R]=Y[R]:St(K,R,Y[R])}))),J});return a.mutate(b).then(function(F){for(var N=F.failures,j=F.results,Y=F.numFailures,F=F.lastResult,K=0;K<_.length;++K){var H=(j||_)[K],J=B[K];H==null?J.onerror&&J.onerror(N[K]):J.onsuccess&&J.onsuccess(b.type==="put"&&E[K]?b.values[K]:H)}return{failures:N,results:j,numFailures:Y,lastResult:F}}).catch(function(F){return B.forEach(function(N){return N.onerror&&N.onerror(F)}),Promise.reject(F)})});throw new Error("Keys missing")}}})}})}};function ya(e,t,a){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,l=0;r<t.keys.length&&l<e.length;++r)$e(t.keys[r],e[l])===0&&(s.push(a?Ft(t.values[r]):t.values[r]),++l);return s.length===e.length?s:null}catch{return null}}var Tn={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var a=e.table(t);return Q(Q({},a),{getMany:function(s){var r;return s.cache?(r=ya(s.keys,s.trans._cache,s.cache==="clone"))?G.resolve(r):a.getMany(s).then(function(l){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?Ft(l):l},l}):a.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),a.mutate(s)}})}}}};function Ca(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function xa(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Da={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,a=new Ye(e.MIN_KEY,e.MAX_KEY);return Q(Q({},e),{transaction:function(s,r,l){if(ee.subscr&&r!=="readonly")throw new ne.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));return e.transaction(s,r,l)},table:function(s){function r(_){var g,_=_.query;return[g=_.index,new Ye((g=(_=_.range).lower)!=null?g:e.MIN_KEY,(g=_.upper)!=null?g:e.MAX_KEY)]}var l=e.table(s),u=l.schema,p=u.primaryKey,y=u.indexes,S=p.extractKey,C=p.outbound,b=p.autoIncrement&&y.filter(function(x){return x.compound&&x.keyPath.includes(p.keyPath)}),k=Q(Q({},l),{mutate:function(x){function g(X){return X="idb://".concat(t,"/").concat(s,"/").concat(X),N[X]||(N[X]=new Ye)}var _,E,B,F=x.trans,N=x.mutatedParts||(x.mutatedParts={}),j=g(""),Y=g(":dels"),K=x.type,J=x.type==="deleteRange"?[x.range]:x.type==="delete"?[x.keys]:x.values.length<50?[Ot(p,x).filter(function(X){return X}),x.values]:[],H=J[0],J=J[1],R=x.trans._cache;return ue(H)?(j.addKeys(H),(K=K==="delete"||H.length===J.length?ya(H,R):null)||Y.addKeys(H),(K||J)&&(_=g,E=K,B=J,u.indexes.forEach(function(X){var we=_(X.name||"");function Ee(se){return se!=null?X.extractKey(se):null}function re(se){X.multiEntry&&ue(se)?se.forEach(function(et){return we.addKey(et)}):we.addKey(se)}(E||B).forEach(function(se,st){var Yt=E&&Ee(E[st]),st=B&&Ee(B[st]);$e(Yt,st)!==0&&(Yt!=null&&re(Yt),st!=null)&&re(st)})}))):H?(J={from:(R=H.lower)!=null?R:e.MIN_KEY,to:(K=H.upper)!=null?K:e.MAX_KEY},Y.add(J),j.add(J)):(j.add(a),Y.add(a),u.indexes.forEach(function(X){return g(X.name).add(a)})),l.mutate(x).then(function(X){return!H||x.type!=="add"&&x.type!=="put"||(j.addKeys(X.results),b&&b.forEach(function(we){for(var Ee=x.values.map(function(Yt){return we.extractKey(Yt)}),re=we.keyPath.findIndex(function(Yt){return Yt===p.keyPath}),se=0,et=X.results.length;se<et;++se)Ee[se][re]=X.results[se];g(we.name).addKeys(Ee)})),F.mutatedParts=Je(F.mutatedParts||{},N),X})}}),$={get:function(x){return[p,new Ye(x.key)]},getMany:function(x){return[p,new Ye().addKeys(x.keys)]},count:r,query:r,openCursor:r};return Be($).forEach(function(x){k[x]=function(g){var _=ee.subscr,E=!!_,B=Ca(ee,l)&&xa(x,g)?g.obsSet={}:_;if(E){var F,_=function(J){return J="idb://".concat(t,"/").concat(s,"/").concat(J),B[J]||(B[J]=new Ye)},N=_(""),j=_(":dels"),E=$[x](g),Y=E[0],E=E[1];if((x==="query"&&Y.isPrimaryKey&&!g.values?j:_(Y.name||"")).add(E),!Y.isPrimaryKey){if(x!=="count")return F=x==="query"&&C&&g.values&&l.query(Q(Q({},g),{values:!1})),l[x].apply(this,arguments).then(function(J){if(x==="query"){if(C&&g.values)return F.then(function(Ee){return Ee=Ee.result,N.addKeys(Ee),J});var R=g.values?J.result.map(S):J.result;(g.values?N:j).addKeys(R)}else{var X,we;if(x==="openCursor")return we=g.values,(X=J)&&Object.create(X,{key:{get:function(){return j.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var Ee=X.primaryKey;return j.addKey(Ee),Ee}},value:{get:function(){return we&&N.addKey(X.primaryKey),X.value}}})}return J});j.add(a)}}return l[x].apply(this,arguments)}}),k}})}};function ka(e,t,a){var s;return a.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,a.numFailures===s)?null:(s=Q({},t),ue(s.keys)&&(s.keys=s.keys.filter(function(r,l){return!(l in a.failures)})),"values"in s&&ue(s.values)&&(s.values=s.values.filter(function(r,l){return!(l in a.failures)})),s)}function Fn(e,t){return a=e,((s=t).lower===void 0||(s.lowerOpen?0<$e(a,s.lower):0<=$e(a,s.lower)))&&(a=e,(s=t).upper===void 0||(s.upperOpen?$e(a,s.upper)<0:$e(a,s.upper)<=0));var a,s}function is(e,t,a,s,r,l){var u,p,y,S,C,b;return!a||a.length===0||(u=t.query.index,p=u.multiEntry,y=t.query.range,S=s.schema.primaryKey.extractKey,C=u.extractKey,b=(u.lowLevelIndex||u).extractKey,(s=a.reduce(function(k,$){var x=k,g=[];if($.type==="add"||$.type==="put")for(var _=new Ye,E=$.values.length-1;0<=E;--E){var B,F=$.values[E],N=S(F);!_.hasKey(N)&&(B=C(F),p&&ue(B)?B.some(function(J){return Fn(J,y)}):Fn(B,y))&&(_.addKey(N),g.push(F))}switch($.type){case"add":var j=new Ye().addKeys(t.values?k.map(function(R){return S(R)}):k),x=k.concat(t.values?g.filter(function(R){return R=S(R),!j.hasKey(R)&&(j.addKey(R),!0)}):g.map(function(R){return S(R)}).filter(function(R){return!j.hasKey(R)&&(j.addKey(R),!0)}));break;case"put":var Y=new Ye().addKeys($.values.map(function(R){return S(R)}));x=k.filter(function(R){return!Y.hasKey(t.values?S(R):R)}).concat(t.values?g:g.map(function(R){return S(R)}));break;case"delete":var K=new Ye().addKeys($.keys);x=k.filter(function(R){return!K.hasKey(t.values?S(R):R)});break;case"deleteRange":var H=$.range;x=k.filter(function(R){return!Fn(S(R),H)})}return x},e))===e)?e:(s.sort(function(k,$){return $e(b(k),b($))||$e(S(k),S($))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),l?Object.freeze(s):s)}function P(e,t){return $e(e.lower,t.lower)===0&&$e(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function q(e,t){return((a,s,r,l)=>{if(a===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((a=$e(a,s))===0){if(r&&l)return 0;if(r)return 1;if(l)return-1}return a})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((a,s,r,l)=>{if(a===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((a=$e(a,s))===0){if(r&&l)return 0;if(r)return-1;if(l)return 1}return a})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Rt(e,t,a,s){e.subscribers.add(a),s.addEventListener("abort",function(){var r,l;e.subscribers.delete(a),e.subscribers.size===0&&(r=e,l=t,setTimeout(function(){r.subscribers.size===0&&Sn(l,r)},3e3))})}var os={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Q(Q({},e),{transaction:function(a,s,r){var l,u,p=e.transaction(a,s,r);return s==="readwrite"&&(r=(l=new AbortController).signal,p.addEventListener("abort",(u=function(y){return function(){if(l.abort(),s==="readwrite"){for(var S=new Set,C=0,b=a;C<b.length;C++){var k=b[C],$=Pe["idb://".concat(t,"/").concat(k)];if($){var x=e.table(k),g=$.optimisticOps.filter(function(X){return X.trans===p});if(p._explicit&&y&&p.mutatedParts)for(var _=0,E=Object.values($.queries.query);_<E.length;_++)for(var B=0,F=(Y=E[_]).slice();B<F.length;B++)kn((K=F[B]).obsSet,p.mutatedParts)&&(Sn(Y,K),K.subscribers.forEach(function(X){return S.add(X)}));else if(0<g.length){$.optimisticOps=$.optimisticOps.filter(function(X){return X.trans!==p});for(var N=0,j=Object.values($.queries.query);N<j.length;N++)for(var Y,K,H,J=0,R=(Y=j[N]).slice();J<R.length;J++)(K=R[J]).res!=null&&p.mutatedParts&&(y&&!K.dirty?(H=Object.isFrozen(K.res),H=is(K.res,K.req,g,x,K,H),K.dirty?(Sn(Y,K),K.subscribers.forEach(function(X){return S.add(X)})):H!==K.res&&(K.res=H,K.promise=G.resolve({result:H}))):(K.dirty&&Sn(Y,K),K.subscribers.forEach(function(X){return S.add(X)})))}}}S.forEach(function(X){return X()})}}})(!1),{signal:r}),p.addEventListener("error",u(!1),{signal:r}),p.addEventListener("complete",u(!0),{signal:r})),p},table:function(a){var s=e.table(a),r=s.schema.primaryKey;return Q(Q({},s),{mutate:function(l){var u,p=ee.trans;return!r.outbound&&p.db._options.cache!=="disabled"&&!p.explicit&&p.idbtrans.mode==="readwrite"&&(u=Pe["idb://".concat(t,"/").concat(a)])?(p=s.mutate(l),l.type!=="add"&&l.type!=="put"||!(50<=l.values.length||Ot(r,l).some(function(y){return y==null}))?(u.optimisticOps.push(l),l.mutatedParts&&le(l.mutatedParts),p.then(function(y){0<y.numFailures&&(Sn(u.optimisticOps,l),(y=ka(0,l,y))&&u.optimisticOps.push(y),l.mutatedParts)&&le(l.mutatedParts)}),p.catch(function(){Sn(u.optimisticOps,l),l.mutatedParts&&le(l.mutatedParts)})):p.then(function(y){var S=ka(0,Q(Q({},l),{values:l.values.map(function(C,b){var k;return y.failures[b]?C:(St(k=(k=r.keyPath)!=null&&k.includes(".")?Ft(C):Q({},C),r.keyPath,y.results[b]),k)})}),y);u.optimisticOps.push(S),queueMicrotask(function(){return l.mutatedParts&&le(l.mutatedParts)})}),p):s.mutate(l)},query:function(l){var u,p,y,S,C,b,k;return Ca(ee,s)&&xa("query",l)?(u=((y=ee.trans)==null?void 0:y.db._options.cache)==="immutable",p=(y=ee).requery,y=y.signal,b=(($,x,g,_)=>{var E=Pe["idb://".concat($,"/").concat(x)];if(!E)return[];if(!($=E.queries[g]))return[null,!1,E,null];var B=$[(_.query?_.query.index.name:null)||""];if(!B)return[null,!1,E,null];switch(g){case"query":var F=B.find(function(N){return N.req.limit===_.limit&&N.req.values===_.values&&P(N.req.query.range,_.query.range)});return F?[F,!0,E,B]:[B.find(function(N){return("limit"in N.req?N.req.limit:1/0)>=_.limit&&(!_.values||N.req.values)&&q(N.req.query.range,_.query.range)}),!1,E,B];case"count":return F=B.find(function(N){return P(N.req.query.range,_.query.range)}),[F,!!F,E,B]}})(t,a,"query",l),k=b[0],S=b[2],C=b[3],k&&b[1]?k.obsSet=l.obsSet:(b=s.query(l).then(function($){var x=$.result;if(k&&(k.res=x),u){for(var g=0,_=x.length;g<_;++g)Object.freeze(x[g]);Object.freeze(x)}else $.result=Ft(x);return $}).catch(function($){return C&&k&&Sn(C,k),Promise.reject($)}),k={obsSet:l.obsSet,promise:b,subscribers:new Set,type:"query",req:l,dirty:!1},C?C.push(k):(C=[k],(S=S||(Pe["idb://".concat(t,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[l.query.index.name||""]=C)),Rt(k,C,p,y),k.promise.then(function($){return{result:is($.result,l,S?.optimisticOps,s,k,u)}})):s.query(l)}})}})}};function jt(e,t){return new Proxy(e,{get:function(a,s,r){return s==="db"?t:Reflect.get(a,s,r)}})}Oe.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ne.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ne.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,a=t.filter(function(s){return s._cfg.version===e})[0];return a||(a=new this.Version(e),t.push(a),t.sort(te),a.stores({}),this._state.autoSchema=!1),a},Oe.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||ee.letThrough||this._vip)?e():new G(function(a,s){if(t._state.openComplete)return s(new ne.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ne.DatabaseClosed);t.open().catch(De)}t._state.dbReadyPromise.then(a,s)}).then(e)},Oe.prototype.use=function(r){var t=r.stack,a=r.create,s=r.level,r=r.name,l=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return l.push({stack:t,create:a,level:s??10,name:r}),l.sort(function(u,p){return u.level-p.level}),this},Oe.prototype.unuse=function(e){var t=e.stack,a=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!a&&r.name!==a})),this},Oe.prototype.open=function(){var e=this;return Vn(Nt,function(){return ba(e)})},Oe.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=la.indexOf(this);if(0<=t&&la.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new G(function(a){e.dbReadyResolve=a}),e.openCanceller=new G(function(a,s){e.cancelOpen=s}))},Oe.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,a=this._state;t?(a.isBeingOpened&&a.cancelOpen(new ne.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new ne.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},Oe.prototype.delete=function(e){var t=this,a=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new G(function(r,l){function u(){t.close(e);var p=t._deps.indexedDB.deleteDatabase(t.name);p.onsuccess=Ve(function(){var y,S,C;y=t._deps,S=t.name,Ut(C=y.indexedDB)||S===fa||it(C,y.IDBKeyRange).delete(S).catch(De),r()}),p.onerror=o(l),p.onblocked=t._fireOnBlocked}if(a)throw new ne.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(u):u()})},Oe.prototype.backendDB=function(){return this.idbdb},Oe.prototype.isOpen=function(){return this.idbdb!==null},Oe.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Oe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Oe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Oe.prototype,"tables",{get:function(){var e=this;return Be(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Oe.prototype.transaction=function(){var e=(function(t,a,s){var r=arguments.length;if(r<2)throw new ne.InvalidArgument("Too few arguments");for(var l=new Array(r-1);--r;)l[r-1]=arguments[r];return s=l.pop(),[t,Ga(l),s]}).apply(this,arguments);return this._transaction.apply(this,e)},Oe.prototype._transaction=function(e,t,a){var s,r,l=this,u=ee.trans,p=(u&&u.db===this&&e.indexOf("!")===-1||(u=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(S){if(S=S instanceof l.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),e=="r"||e===Za)s=Za;else{if(e!="rw"&&e!=es)throw new ne.InvalidArgument("Invalid transaction mode: "+e);s=es}if(u){if(u.mode===Za&&s===es){if(!p)throw new ne.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");u=null}u&&r.forEach(function(S){if(u&&u.storeNames.indexOf(S)===-1){if(!p)throw new ne.SubTransaction("Table "+S+" not included in parent transaction.");u=null}}),p&&u&&!u.active&&(u=null)}}catch(S){return u?u._promise(null,function(C,b){b(S)}):rt(S)}var y=(function S(C,b,k,$,x){return G.resolve().then(function(){var B=ee.transless||ee,g=C._createTransaction(b,k,C._dbSchema,$),B=(g.explicit=!0,{trans:g,transless:B});if($)g.idbtrans=$.idbtrans;else try{g.create(),g.idbtrans._explicit=!0,C._state.PR1398_maxLoop=3}catch(F){return F.name===Wt.InvalidState&&C.isOpen()&&0<--C._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),C.close({disableAutoOpen:!1}),C.open().then(function(){return S(C,b,k,null,x)})):rt(F)}var _,E=fn(x),B=(E&&Kn(),G.follow(function(){var F;(_=x.call(g,g))&&(E?(F=gt.bind(null,null),_.then(F,F)):typeof _.next=="function"&&typeof _.throw=="function"&&(_=Zt(_)))},B));return(_&&typeof _.then=="function"?G.resolve(_).then(function(F){return g.active?F:rt(new ne.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):B.then(function(){return _})).then(function(F){return $&&g._resolve(),g._completion.then(function(){return F})}).catch(function(F){return g._reject(F),rt(F)})})}).bind(null,this,s,r,u,a);return u?u._promise(s,y,"lock"):ee.trans?Vn(ee.transless,function(){return l._whenReady(y)}):this._whenReady(y)},Oe.prototype.table=function(e){if(he(this._allTables,e))return this._allTables[e];throw new ne.InvalidTable("Table ".concat(e," does not exist"))};var wn=Oe;function Oe(e,t){var a,s,r,l,u,p=this,y=(this._middlewares={},this.verno=0,Oe.dependencies),y=(this._options=t=Q({addons:Oe.addons,autoOpen:!0,indexedDB:y.indexedDB,IDBKeyRange:y.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:De,dbReadyPromise:null,cancelOpen:De,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),C=(S.dbReadyPromise=new G(function(b){S.dbReadyResolve=b}),S.openCanceller=new G(function(b,k){S.cancelOpen=k}),this._state=S,this.name=e,this.on=ma(this,"populate","blocked","versionchange","close",{ready:[Ja,De]}),this.once=function(b,k){var $=function(){for(var x=[],g=0;g<arguments.length;g++)x[g]=arguments[g];p.on(b).unsubscribe($),k.apply(p,x)};return p.on(b,$)},this.on.ready.subscribe=At(this.on.ready.subscribe,function(b){return function(k,$){Oe.vip(function(){var x,g=p._state;g.openComplete?(g.dbOpenError||G.resolve().then(k),$&&b(k)):g.onReadyBeingFired?(g.onReadyBeingFired.push(k),$&&b(k)):(b(k),x=p,$||b(function _(){x.on.ready.unsubscribe(k),x.on.ready.unsubscribe(_)}))})}}),this.Collection=(a=this,va(Hs.prototype,function(_,g){this.db=a;var $=Ss,x=null;if(g)try{$=g()}catch(B){x=B}var g=_._ctx,_=g.table,E=_.hook.reading.fire;this._ctx={table:_,index:g.index,isPrimKey:!g.index||_.schema.primKey.keyPath&&g.index===_.schema.primKey.name,range:$,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:x,or:g.or,valueMapper:E!==He?E:null}})),this.Table=(s=this,va(_s.prototype,function(b,k,$){this.db=s,this._tx=$,this.name=b,this.schema=k,this.hook=s._allTables[b]?s._allTables[b].hook:ma(null,{creating:[Ws,De],reading:[Gs,He],updating:[Us,De],deleting:[vs,De]})})),this.Transaction=(r=this,va(T.prototype,function(b,k,$,x,g){var _=this;b!=="readonly"&&k.forEach(function(E){E=(E=$[E])==null?void 0:E.yProps,E&&(k=k.concat(E.map(function(B){return B.updatesTable})))}),this.db=r,this.mode=b,this.storeNames=k,this.schema=$,this.chromeTransactionDurability=x,this.idbtrans=null,this.on=ma(this,"complete","error","abort"),this.parent=g||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new G(function(E,B){_._resolve=E,_._reject=B}),this._completion.then(function(){_.active=!1,_.on.complete.fire()},function(E){var B=_.active;return _.active=!1,_.on.error.fire(E),_.parent?_.parent._reject(E):B&&_.idbtrans&&_.idbtrans.abort(),rt(E)})})),this.Version=(l=this,va(dt.prototype,function(b){this.db=l,this._cfg={version:b,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(u=this,va(Ts.prototype,function(b,k,$){if(this.db=u,this._ctx={table:b,index:k===":id"?null:k,or:$},this._cmp=this._ascending=$e,this._descending=function(x,g){return $e(g,x)},this._max=function(x,g){return 0<$e(x,g)?x:g},this._min=function(x,g){return $e(x,g)<0?x:g},this._IDBKeyRange=u._deps.IDBKeyRange,!this._IDBKeyRange)throw new ne.MissingAPI})),this.on("versionchange",function(b){0<b.newVersion?console.warn("Another connection wants to upgrade database '".concat(p.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(p.name,"'. Closing db now to resume the delete request.")),p.close({disableAutoOpen:!1})}),this.on("blocked",function(b){!b.newVersion||b.newVersion<b.oldVersion?console.warn("Dexie.delete('".concat(p.name,"') was blocked")):console.warn("Upgrade '".concat(p.name,"' blocked by other connection holding version ").concat(b.oldVersion/10))}),this._maxKey=W(t.IDBKeyRange),this._createTransaction=function(b,k,$,x){return new p.Transaction(b,k,$,p._options.chromeTransactionDurability,x)},this._fireOnBlocked=function(b){p.on("blocked").fire(b),la.filter(function(k){return k.name===p.name&&k!==p&&!k._state.vcFired}).map(function(k){return k.on("versionchange").fire(b)})},this.use(Tn),this.use(os),this.use(Da),this.use(An),this.use(_t),new Proxy(this,{get:function(b,k,$){var x;return k==="_vip"||(k==="table"?function(g){return jt(p.table(g),C)}:(x=Reflect.get(b,k,$))instanceof _s?jt(x,C):k==="tables"?x.map(function(g){return jt(g,C)}):k==="_createTransaction"?function(){return jt(x.apply(this,arguments),C)}:x)}}));this.vip=C,y.forEach(function(b){return b(p)})}var La,ca=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Fs=(Na.prototype.subscribe=function(e,t,a){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:a})},Na.prototype[ca]=function(){return this},Na);function Na(e){this._subscribe=e}try{La={indexedDB:ie.indexedDB||ie.mozIndexedDB||ie.webkitIndexedDB||ie.msIndexedDB,IDBKeyRange:ie.IDBKeyRange||ie.webkitIDBKeyRange}}catch{La={indexedDB:null,IDBKeyRange:null}}function ls(e){var t,a=!1,s=new Fs(function(r){var l=fn(e),u,p=!1,y={},S={},C={get closed(){return p},unsubscribe:function(){p||(p=!0,u&&u.abort(),b&&w.storagemutated.unsubscribe($))}},b=(r.start&&r.start(C),!1),k=function(){return Qa(x)},$=function(g){Je(y,g),kn(S,y)&&k()},x=function(){var g,_,E;!p&&La.indexedDB&&(y={},g={},u&&u.abort(),u=new AbortController,E=(B=>{var F=rn();try{l&&Kn();var N=on(e,B);return N=l?N.finally(gt):N}finally{F&&ia()}})(_={subscr:g,signal:u.signal,requery:k,querier:e,trans:null}),Promise.resolve(E).then(function(B){a=!0,t=B,p||_.signal.aborted||(y={},(F=>{for(var N in F)if(he(F,N))return;return 1})(S=g)||b||(w(c,$),b=!0),Qa(function(){return!p&&r.next&&r.next(B)}))},function(B){a=!1,["DatabaseClosedError","AbortError"].includes(B?.name)||p||Qa(function(){p||r.error&&r.error(B)})}))};return setTimeout(k,0),C});return s.hasValue=function(){return a},s.getValue=function(){return t},s}var In=wn;function Ka(e){var t=On;try{On=!0,w.storagemutated.fire(e),Mt(e,!0)}finally{On=t}}$t(In,Q(Q({},Gt),{delete:function(e){return new In(e,{addons:[]}).delete()},exists:function(e){return new In(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=In.dependencies,a=t.indexedDB,t=t.IDBKeyRange,(Ut(a)?Promise.resolve(a.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==fa})}):it(a,t).toCollection().primaryKeys()).then(e)}catch{return rt(new ne.MissingAPI)}var t,a},defineClass:function(){return function(e){xe(this,e)}},ignoreTransaction:function(e){return ee.trans?Vn(ee.transless,e):e()},vip:Jt,async:function(e){return function(){try{var t=Zt(e.apply(this,arguments));return t&&typeof t.then=="function"?t:G.resolve(t)}catch(a){return rt(a)}}},spawn:function(e,t,a){try{var s=Zt(e.apply(a,t||[]));return s&&typeof s.then=="function"?s:G.resolve(s)}catch(r){return rt(r)}},currentTransaction:{get:function(){return ee.trans||null}},waitFor:function(e,t){return e=G.resolve(typeof e=="function"?In.ignoreTransaction(e):e).timeout(t||6e4),ee.trans?ee.trans.waitFor(e):e},Promise:G,debug:{get:function(){return an},set:function(e){bs(e)}},derive:Pt,extend:xe,props:$t,override:At,Events:ma,on:w,liveQuery:ls,extendObservabilitySet:Je,getByKeyPath:nn,setByKeyPath:St,delByKeyPath:function(e,t){typeof t=="string"?St(e,t,void 0):"length"in t&&[].map.call(t,function(a){St(e,a,void 0)})},shallowClone:Et,deepClone:Ft,getObjectDiff:bt,cmp:$e,asap:Tt,minKey:-1/0,addons:[],connections:la,errnames:Wt,dependencies:La,cache:Pe,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,a){return e+t/Math.pow(10,2*a)})})),In.maxKey=W(In.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(w(c,function(e){On||(e=new CustomEvent(v,{detail:e}),On=!0,dispatchEvent(e),On=!1)}),addEventListener(v,function(e){e=e.detail,On||Ka(e)}));var zn,On=!1,Is=function(){};return typeof BroadcastChannel<"u"&&((Is=function(){(zn=new BroadcastChannel(v)).onmessage=function(e){return e.data&&Ka(e.data)}})(),typeof zn.unref=="function"&&zn.unref(),w(c,function(e){On||zn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!wn.disableBfCache&&e.persisted){an&&console.debug("Dexie: handling persisted pagehide"),zn?.close();for(var t=0,a=la;t<a.length;t++)a[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!wn.disableBfCache&&e.persisted&&(an&&console.debug("Dexie: handling persisted pageshow"),Is(),Ka({all:new Ye(-1/0,[[]])}))})),G.rejectionMapper=function(e,t){return!e||e instanceof En||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Nn[e.name]?e:(t=new Nn[e.name](t||e.message,e),"stack"in e&&Ue(t,"stack",{get:function(){return this.inner.stack}}),t)},bs(an),Q(wn,Object.freeze({__proto__:null,Dexie:wn,Entity:Es,PropModification:xn,RangeSet:Ye,add:function(e){return new xn({add:e})},cmp:$e,default:wn,liveQuery:ls,mergeRanges:Xt,rangesOverlap:Ke,remove:function(e){return new xn({remove:e})},replacePrefix:function(e,t){return new xn({replacePrefix:[e,t]})}}),{default:wn}),wn})})(qs)),qs.exports}var Vi=Ki();const rr=Li(Vi),jr=Symbol.for("Dexie"),js=globalThis[jr]||(globalThis[jr]=rr);if(rr.semVer!==js.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${rr.semVer} and ${js.semVer}`);const{liveQuery:no,mergeRanges:ao,rangesOverlap:so,RangeSet:ro,cmp:io,Entity:oo,PropModification:lo,replacePrefix:co,add:uo,remove:ho,DexieYProvider:po}=js,We=new js("haushaltsbuch-db");We.version(1).stores({years:"year",fixedTemplateState:"id"});We.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});We.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});We.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Qn="singleton";function za(){return new Date().toISOString()}async function Sa(){return We.years.orderBy("year").toArray()}async function qi(M){return We.years.get(M)}async function wa(M){await We.years.put(M)}async function ir(){const M=await We.fixedTemplateState.get(Qn);if(!M){const h={id:Qn,templates:[],version:za(),updatedAt:new Date().toISOString()};return await We.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function or(M){const h=za();return await We.fixedTemplateState.put({id:Qn,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function lr(){const M=await We.annualVariableFixedTemplateState.get(Qn);if(!M){const h={id:Qn,templates:[],version:za(),updatedAt:new Date().toISOString()};return await We.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function cr(M){const h=za();return await We.annualVariableFixedTemplateState.put({id:Qn,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Ri(M){await We.auditLog.put(M)}async function ur(){const M=await We.searchEvaluationState.get(Qn);if(!M){const h={id:Qn,results:[],version:za(),updatedAt:new Date().toISOString()};return await We.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:M.results,version:M.version}}async function Rs(M){const h=za();return await We.searchEvaluationState.put({id:Qn,results:M,version:h,updatedAt:new Date().toISOString()}),h}async function dr(){return We.auditLog.orderBy("timestampIso").toArray()}async function ji(M){await We.auditLog.clear(),M.length!==0&&await We.auditLog.bulkPut(M)}async function Yi(){const M=await Sa(),[h,Ie,Q,be]=await Promise.all([ir(),lr(),dr(),ur()]);return{exportedAt:new Date().toISOString(),years:M,fixedTemplates:h.templates,annualVariableFixedTemplates:Ie.templates,auditLogEntries:Q,savedSearchEvaluations:be.results}}async function zi(M){await We.transaction("rw",[We.years,We.fixedTemplateState,We.annualVariableFixedTemplateState,We.auditLog,We.searchEvaluationState],async()=>{await We.years.clear(),await We.years.bulkPut(M.years),await or(M.fixedTemplates),await cr(M.annualVariableFixedTemplates??[]),await ji(M.auditLogEntries??[]),await Rs(M.savedSearchEvaluations??[])})}function Ge(M){const h=M.replace(",",".").trim();if(!h)return 0;const Ie=Number.parseFloat(h);return Number.isNaN(Ie)?0:Math.round(Ie*100)}const Gi=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(M){return Gi.format(M/100)}function Dt(M){return(M/100).toFixed(2)}function ye(M){return new Date(2026,M-1,1).toLocaleDateString("de-DE",{month:"long"})}const Wr=["light","high-contrast-light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Yr(M){return Wr.includes(M)}function Wi(M){switch(M){case"light":return"Light";case"high-contrast-light":return"High Contrast Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const zr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Ui(M){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ie="habu-theme",Q="habu-backup-dirty",be="habu-unexported-change-log",ie="habu-last-backup-filename",Be="habu-recurring-budget-defaults";let ue=null,xe=null,ct=null,Ze=null,he=!1,$t=!1;const ft=new WeakMap;function Ue(){const i=M.querySelectorAll("[data-budget-vs-canvas]");if(i.length===0)return;const o=getComputedStyle(document.documentElement),d=o.getPropertyValue("--text-main").trim(),c=o.getPropertyValue("--text-muted").trim(),v=o.getPropertyValue("--table-stripe").trim(),w=o.getPropertyValue("--table-border").trim(),T=o.getPropertyValue("--budget-under").trim(),I=o.getPropertyValue("--danger-2").trim(),A=96,V=250,O=W=>1-Math.pow(1-Math.max(0,Math.min(1,W)),3);i.forEach(W=>{W.dataset.hoverBound!=="1"&&(W.dataset.hoverBound="1",W.addEventListener("mouseenter",()=>{W.dataset.hovering="1",Ue()}),W.addEventListener("mouseleave",()=>{delete W.dataset.hovering,delete W.dataset.hoverX,Ue()}),W.addEventListener("mousemove",Ke=>{const ze=W.getBoundingClientRect(),nt=Math.round(Ke.clientX-ze.left);W.dataset.hoverX=String(nt),Ue()}));const U=Number.parseInt(W.dataset.budgetCents??"0",10),oe=Number.parseInt(W.dataset.actualCents??"0",10),Se=W.dataset.label??"Kategorie",_e=W.dataset.hovering==="1",de=`${Se}|${U}|${oe}`,Fe=W.dataset.lastRenderSignature!==de;W.dataset.lastRenderSignature=de;const Le=Math.max(120,Math.floor(W.clientWidth||120)),ce=window.devicePixelRatio||1,Ce=Math.floor(Le*ce),te=Math.floor(A*ce);(W.width!==Ce||W.height!==te)&&(W.width=Ce,W.height=te);const D=W.getContext("2d");if(!D)return;const pe=Math.max(1,U,oe),qe=Math.min(1,Math.max(0,U/pe)),pt=Math.min(1,Math.max(0,oe/pe)),Bt=U-oe,ve=U>0?oe/U*100:oe>0?100:0,ut=8,Ne=ut,tt=34,dt=Le-ut*2,Xe=22,it=Number.parseInt(W.dataset.hoverX??"-1",10),Ut=(Ke,ze,nt,at,Je)=>{D.beginPath(),D.moveTo(Ke+Je,ze),D.lineTo(Ke+nt-Je,ze),D.quadraticCurveTo(Ke+nt,ze,Ke+nt,ze+Je),D.lineTo(Ke+nt,ze+at-Je),D.quadraticCurveTo(Ke+nt,ze+at,Ke+nt-Je,ze+at),D.lineTo(Ke+Je,ze+at),D.quadraticCurveTo(Ke,ze+at,Ke,ze+at-Je),D.lineTo(Ke,ze+Je),D.quadraticCurveTo(Ke,ze,Ke+Je,ze),D.closePath()},Jt=Ke=>{D.setTransform(1,0,0,1,0,0),D.clearRect(0,0,W.width,W.height),D.scale(ce,ce),Ut(Ne,tt,dt,Xe,8),D.fillStyle=v,D.fill(),D.strokeStyle=w,D.lineWidth=1,D.stroke();const ze=[.6,.25,.15],nt=[.1,.16,.24];let at=0;ze.forEach((Vt,le)=>{const Mt=dt*Vt;D.save(),D.globalAlpha=nt[le]??.1,D.fillStyle=c,D.fillRect(Ne+at,tt,Mt,Xe),D.restore(),at+=Mt});const Je=U>0&&oe>U?I:T,kn=dt*pt*Ke;Ut(Ne,tt+3,kn,Xe-6,6),D.fillStyle=Je,D.fill(),_e&&(D.save(),D.strokeStyle=Je,D.lineWidth=1.5,D.globalAlpha=.8,Ut(Ne-1,tt+2,Math.max(2,kn+2),Xe-4,7),D.stroke(),D.restore());const Pe=Ne+dt*qe;D.strokeStyle=d,D.lineWidth=_e?3:2,D.beginPath(),D.moveTo(Pe,tt-3),D.lineTo(Pe,tt+Xe+3),D.stroke(),_e&&it>=Ne&&it<=Ne+dt&&(D.save(),D.strokeStyle=d,D.globalAlpha=.35,D.lineWidth=1,D.beginPath(),D.moveTo(it,tt-8),D.lineTo(it,tt+Xe+8),D.stroke(),D.restore()),D.fillStyle=d,D.font="600 12px system-ui, -apple-system, sans-serif",D.textAlign="left",D.textBaseline="top",D.fillText(Se,Ne,10);const $n=ve*Ke;if(D.fillStyle=ve>100?I:ve<100?T:c,D.textAlign="right",D.fillText(`${$n.toFixed(0)}%`,Ne+dt,10),D.fillStyle=c,D.font="500 11px system-ui, -apple-system, sans-serif",D.textAlign="left",D.textBaseline="top",D.fillText(`Ist ${f(oe)} · Ziel ${f(U)} · Δ ${Bt>=0?"+":""}${f(Bt)}`,Ne,64),_e){const Vt=`Nutzung ${ve.toFixed(1)}%`;D.font="600 11px system-ui, -apple-system, sans-serif";const le=8,Mt=5,qt=22,Zt=D.measureText(Vt).width+le*2,ln=Number.isFinite(it)?it-Zt/2:Ne+dt-Zt,An=Math.min(Ne+dt-Zt,Math.max(Ne,ln)),bt=tt-qt-8;D.save(),D.fillStyle=d,D.globalAlpha=.92,Ut(An,bt,Zt,qt,6),D.fill(),D.restore(),D.fillStyle=v,D.textAlign="left",D.textBaseline="top",D.fillText(Vt,An+le,bt+Mt)}},Ht=ft.get(W);if(Ht&&window.cancelAnimationFrame(Ht),!Fe){Jt(1);return}const Ye=performance.now(),ot=Ke=>{const ze=Ke-Ye,nt=Math.min(1,ze/V);if(Jt(O(nt)),nt<1){const at=window.requestAnimationFrame(ot);ft.set(W,at);return}ft.delete(W)},Xt=window.requestAnimationFrame(ot);ft.set(W,Xt)})}function Pt(){M.querySelectorAll("[data-year-trend-chart]").forEach(o=>{const d=Array.from(o.querySelectorAll("[data-year-trend-point]"));if(d.length===0)return;const c=o.querySelector("[data-year-trend-active-month]"),v=o.querySelector("[data-year-trend-active-net]"),w=o.querySelector("[data-year-trend-active-income]"),T=o.querySelector("[data-year-trend-active-expense]"),I=o.querySelector("[data-year-trend-active-delta]"),A=o.querySelector("[data-year-trend-live]");if(!c||!v||!w||!T||!I)return;const V=(U,oe)=>{U.classList.remove("danger","budget-under");const Se=oe<0?"danger":oe>0?"budget-under":"";Se&&U.classList.add(Se)},O=U=>{const oe=U.dataset.monthLabel??"-",Se=Number.parseInt(U.dataset.netCents??"0",10),_e=Number.parseInt(U.dataset.actualNetCents??"0",10),de=Number.parseInt(U.dataset.incomeCents??"0",10),Fe=Number.parseInt(U.dataset.expenseCents??"0",10),Le=Number.parseInt(U.dataset.deltaCents??"0",10);c.textContent=oe,v.textContent=f(Se),w.textContent=f(de),T.textContent=f(Fe),I.textContent=`${Le>=0?"+":""}${f(Le)}`,V(v,Se),V(I,Le),d.forEach(ce=>{const Ce=ce===U;ce.classList.toggle("is-active",Ce),ce.setAttribute("aria-pressed",String(Ce))}),A&&(A.textContent=`${oe}: Kalkulierter Saldo ${f(Se)}, Ist-Saldo ${f(_e)}, Einkommen ${f(de)}, Ausgaben ${f(Fe)}`)};d.forEach(U=>{const oe=()=>{O(U)};U.addEventListener("mouseenter",oe),U.addEventListener("focus",oe),U.addEventListener("click",oe)});const W=d.find(U=>U.dataset.pointDefault==="1")??d[d.length-1];W&&O(W)})}function hn(i){if(i==="dashboard"){const o=h.years.slice().sort((c,v)=>v.year-c.year);o.some(c=>c.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??o[0]?.year??null)}h.topModal=i,ae()}function Zn(){h.topModal&&(h.topModal=null,ae())}function pn(){h.showUnexportedChangeLogModal=!0,ae()}function At(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ae())}function wt(){h.showPersistentAuditLogModal=!0,ae()}function Tt(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ae())}function nn(){he||(he=!0,window.addEventListener("keydown",i=>{if(i.key==="Escape"){if(h.showUnexportedChangeLogModal){i.preventDefault(),At();return}if(h.showPersistentAuditLogModal){i.preventDefault(),Tt();return}h.topModal&&(i.preventDefault(),Zn())}}))}function St(){const i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(i<=0)return!1;const o=i/6;return window.scrollY>o}function Et(){const i=M.querySelector("#scroll-up-btn");i&&i.classList.toggle("is-visible",St())}function Ys(){if($t)return;$t=!0;const i=()=>{Et(),Ue()};window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i)}function Ga(){if(ue&&document.body.contains(ue))return ue;const i=document.getElementById("toast-root");if(i instanceof HTMLDivElement)return ue=i,i;const o=document.createElement("div");return o.id="toast-root",o.className="toast-root",o.setAttribute("aria-live","polite"),o.setAttribute("aria-atomic","true"),document.body.appendChild(o),ue=o,o}function ps(){if(xe&&document.body.contains(xe))return xe;const i=document.getElementById("amount-modal-root");if(i instanceof HTMLDivElement)return xe=i,i;const o=document.createElement("div");return o.id="amount-modal-root",document.body.appendChild(o),xe=o,o}function ua(){if(Ze&&document.body.contains(Ze))return Ze;const i=document.getElementById("weekly-shopping-modal-root");if(i instanceof HTMLDivElement)return Ze=i,i;const o=document.createElement("div");return o.id="weekly-shopping-modal-root",document.body.appendChild(o),Ze=o,o}function Ft(){if(!xe){ct=null;return}xe.innerHTML="",ct=null}function da(){Ze&&(Ze.innerHTML="")}function Wa(i,o,d){const c=new Date,v=c.getFullYear(),w=c.getMonth()+1,T=c.getDate(),I=new Date(i,o,0).getDate();if(i<v||i===v&&o<w)return{occurrences:0,remainingDays:0};const A=i===v&&o===w?Math.min(T,I):1,V=Math.max(0,I-A+1);let O=0;for(let W=A;W<=I;W+=1)new Date(i,o-1,W).getDay()===d&&(O+=1);return{occurrences:O,remainingDays:V}}async function Ua(i,o){const d=Te();d&&(d.weeklyShoppingWeekday=i,d.weeklyShoppingEstimateCents=Math.max(0,o),await me(`Wocheneinkauf geplant: ${zr.find(c=>c.value===i)?.label??"Wochentag"} mit ${f(d.weeklyShoppingEstimateCents)} €`),ae())}function zs(){const i=Te(),o=Mn();if(!i||!o)return;const d=ua();da();const c=i.weeklyShoppingWeekday===null||i.weeklyShoppingWeekday===void 0?1:i.weeklyShoppingWeekday,v=i.weeklyShoppingEstimateCents??0,w=o.year,T=i.month,I=Ma(w,T),A=I?vn(I):{foodCents:0},V=I?I.foodBudgetCents??0:0,O=A.foodCents,W=V-O;d.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${zr.map(ve=>`<option value="${ve.value}" ${ve.value===c?"selected":""}>${ve.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${Dt(v)}" />
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
    `;const U=d.querySelector(".weekly-shopping-modal-backdrop"),oe=d.querySelector("#weekly-shopping-weekday"),Se=d.querySelector("#weekly-shopping-estimate"),_e=d.querySelector("#weekly-shopping-occurrences"),de=d.querySelector("#weekly-shopping-total"),Fe=d.querySelector("#weekly-shopping-rest-before"),Le=d.querySelector("#weekly-shopping-rest-after"),ce=d.querySelector("#weekly-shopping-days-left"),Ce=d.querySelector("#weekly-shopping-per-day"),te=d.querySelector("#weekly-shopping-cancel"),D=d.querySelector("#weekly-shopping-save");function pe(){const ve=Number.parseInt(oe?.value??"1",10);return Number.isInteger(ve)&&ve>=0&&ve<=6?ve:1}function qe(){return Math.max(0,Ge(Se?.value??"0"))}function pt(){const ve=pe(),ut=qe(),{occurrences:Ne,remainingDays:tt}=Wa(w,T,ve),dt=Ne*ut,Xe=W-dt,it=tt>0?Math.trunc(Xe/tt):0;_e&&(_e.textContent=`${Ne}`),de&&(de.textContent=`${f(dt)} €`),Fe&&(Fe.textContent=`${f(W)} €`),Le&&(Le.textContent=`${f(Xe)} €`,Le.className=Xe<0?"danger":Xe>0?"budget-under":""),ce&&(ce.textContent=`${tt}`),Ce&&(Ce.textContent=`${f(it)} €`,Ce.className=it<0?"danger":it>0?"budget-under":"")}async function Bt(){await Ua(pe(),qe()),da()}te?.addEventListener("click",()=>{da()}),D?.addEventListener("click",async()=>{await Bt()}),oe?.addEventListener("change",()=>{pt()}),Se?.addEventListener("input",()=>{pt()}),Se?.addEventListener("keydown",async ve=>{if(ve.key==="Escape"){ve.preventDefault(),da();return}ve.key==="Enter"&&(ve.preventDefault(),await Bt())}),U?.addEventListener("click",ve=>{ve.target===U&&da()}),window.setTimeout(()=>{Se?.focus(),Se?.select(),pt()},0)}function Sn(i,o){let d=i;const c=o.min;if(c){const w=Number.parseFloat(c);if(!Number.isNaN(w)){const T=Math.round(w*100);d=Math.max(d,T)}}const v=o.max;if(v){const w=Number.parseFloat(v);if(!Number.isNaN(w)){const T=Math.round(w*100);d=Math.min(d,T)}}return d}function mt(i){if(i.disabled)return;const o=ps();Ft(),ct=i;const d=Ge(i.value||"0"),c="Betrag anpassen";o.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${c}">
        <div class="amount-modal card">
          <h3>${c}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${f(d)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${f(d)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${f(d)} €</strong></div>
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
    `;const v=o.querySelector(".amount-modal-backdrop"),w=o.querySelector("#amount-modal-delta"),T=o.querySelector("#amount-modal-next-delta"),I=o.querySelector("#amount-modal-next-overwrite"),A=o.querySelector("#amount-modal-cancel"),V=o.querySelector("#amount-modal-overwrite"),O=o.querySelector("#amount-modal-apply");function W(){const de=Ge(w?.value??"0");return Sn(d+de,i)}function U(){const de=Ge(w?.value??"0");return Sn(de,i)}function oe(){T&&(T.textContent=`${f(W())} €`),I&&(I.textContent=`${f(U())} €`)}function Se(){const de=ct;if(!de){Ft();return}const Fe=W();Ft(),de.value=Dt(Fe),de.dispatchEvent(new Event("change",{bubbles:!0}))}function _e(){const de=ct;if(!de){Ft();return}const Fe=U();Ft(),de.value=Dt(Fe),de.dispatchEvent(new Event("change",{bubbles:!0}))}A?.addEventListener("click",()=>{Ft()}),V?.addEventListener("click",()=>{_e()}),O?.addEventListener("click",()=>{Se()}),w?.addEventListener("input",()=>{oe()}),w?.addEventListener("keydown",de=>{if(de.key==="Escape"){de.preventDefault(),Ft();return}de.key==="Enter"&&(de.preventDefault(),Se())}),v?.addEventListener("click",de=>{de.target===v&&Ft()}),window.setTimeout(()=>{w?.focus(),w?.select(),oe()},0)}function Z(i,o="success"){const d=Ga(),c=document.createElement("div");c.className=`toast toast-${o}`,c.textContent=i,d.appendChild(c),requestAnimationFrame(()=>{c.classList.add("toast-visible")});const v=o==="error"?5e3:3e3;window.setTimeout(()=>{c.classList.remove("toast-visible"),window.setTimeout(()=>{c.remove()},220)},v)}function fn(){return new Date().getMonth()+1}function Gt(){return new Date().getFullYear()}function fs(i){const o=Gt(),d=i.find(c=>c.year===o);return d?d.year:i[0]?.year??null}function En(){return new Date().toISOString().slice(0,10)}function Ea(){const i=new Date,o=String(i.getHours()).padStart(2,"0"),d=String(i.getMinutes()).padStart(2,"0"),c=String(i.getSeconds()).padStart(2,"0");return`${o}${d}${c}`}function ke(i){return(i/100).toFixed(2).replace(".",",")}function ea(i){return i.includes(";")||i.includes('"')||i.includes(`
`)||i.includes("\r")?`"${i.replaceAll('"','""')}"`:i}function Wt(i){return i.map(o=>ea(String(o))).join(";")}function ms(i){return String(i).padStart(2,"0")}function ne(i){if(!i)return"";const o=i.slice(0,10),d=o.split("-");if(d.length!==3)return o;const[c,v,w]=d;return`${w}.${v}.${c}`}function Nn(i,o,d,c){i.push(o),i.push(Wt(d)),c.length===0?i.push(Wt(["Keine Daten"])):c.forEach(v=>{i.push(Wt(v))}),i.push("")}function De(i){if(!h.selectedYear)return Z("Bitte zuerst ein Jahr auswählen.","error"),null;const o=h.years.find(d=>d.year===h.selectedYear);if(!o)return Z("Ausgewähltes Jahr wurde nicht gefunden.","error"),null;if(i==="month"){const d=o.months.find(c=>c.month===h.selectedMonth);return d?[{year:o.year,month:d}]:(Z("Ausgewählter Monat wurde nicht gefunden.","error"),null)}return o.months.slice().sort((d,c)=>d.month-c.month).map(d=>({year:o.year,month:d}))}function He(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Gs(){const i=localStorage.getItem(Ie);return i&&Yr(i)?i:"light"}function Bn(i){h.theme=i,document.documentElement.setAttribute("data-theme",i),localStorage.setItem(Ie,i)}function Ws(){return localStorage.getItem(Q)==="1"}function vs(i){localStorage.setItem(Q,i?"1":"0")}function Us(){const i=localStorage.getItem(be);if(!i)return[];try{const o=JSON.parse(i);return Array.isArray(o)?o.filter(d=>{if(!d||typeof d!="object")return!1;const c=d;return typeof c.id=="string"&&typeof c.timestampIso=="string"&&typeof c.message=="string"}).slice(-200):[]}catch{return[]}}function gs(i){localStorage.setItem(be,JSON.stringify(i.slice(-200)))}function Ja(){const i=localStorage.getItem(ie);if(!i)return null;const o=i.trim();return o||null}function an(){const i={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},o=localStorage.getItem(Be);if(!o)return i;try{const d=JSON.parse(o),c=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:c(d.foodBudgetCents),goingOutBudgetCents:c(d.goingOutBudgetCents),fixedBudgetCents:c(d.fixedBudgetCents),variableBudgetCents:c(d.variableBudgetCents),miscBudgetCents:c(d.miscBudgetCents)}}catch{return i}}function bs(i){localStorage.setItem(Be,JSON.stringify(i))}function ta(i){i.months.forEach(o=>{const{recurringBudgetDefaults:d}=h;typeof d.foodBudgetCents=="number"&&(o.foodBudgetCents=d.foodBudgetCents),typeof d.goingOutBudgetCents=="number"&&(o.goingOutBudgetCents=d.goingOutBudgetCents),typeof d.fixedBudgetCents=="number"&&(o.fixedBudgetCents=d.fixedBudgetCents),typeof d.variableBudgetCents=="number"&&(o.variableBudgetCents=d.variableBudgetCents),typeof d.miscBudgetCents=="number"&&(o.miscBudgetCents=d.miscBudgetCents)})}function ys(i){const o=i.trim();o&&localStorage.setItem(ie,o)}async function na(){if(h.savedSearchEvaluations.length===0)return;const i=Gt(),o=fn(),d=h.savedSearchEvaluations.map(c=>({...qr(h.years,c.keyword,i,o),id:c.id,createdAt:c.createdAt}));h.savedSearchEvaluations=d,await Rs(d)}async function Lt(){Ga(),Bn(Gs()),h.hasUnexportedChanges=Ws(),h.unexportedChangeLog=Us(),h.persistentAuditLog=await dr(),h.lastBackupFileName=Ja(),h.recurringBudgetDefaults=an(),nn(),Ys();const[i,o,d,c]=await Promise.all([Sa(),ir(),lr(),ur()]);h.years=i,h.annualVariableFixedTemplates=d.templates,h.annualVariableFixedTemplateVersion=d.version,mn(h.years),Kn(h.years),h.fixedTemplates=o.templates,h.fixedTemplateVersion=o.version,h.savedSearchEvaluations=c.results,await Ba(h.years),await na(),i.length>0&&(h.selectedYear=fs(i),h.selectedMonth=fn()),ae()}function mn(i){const o=d=>d==="balance"||d==="fresh"||d==="salary"?d:void 0;i.forEach(d=>{d.months.forEach(c=>{if(c.weeklyShoppingWeekday!==null&&c.weeklyShoppingWeekday!==void 0){const v=Number(c.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?c.weeklyShoppingWeekday=v:c.weeklyShoppingWeekday=null}else c.weeklyShoppingWeekday=null;typeof c.weeklyShoppingEstimateCents!="number"&&(c.weeklyShoppingEstimateCents=0),typeof c.foodBudgetCents!="number"&&(c.foodBudgetCents=0),typeof c.goingOutBudgetCents!="number"&&(c.goingOutBudgetCents=0),Array.isArray(c.incomes)?c.incomes=c.incomes.map(v=>{const w=o(v.incomeSource);if(!w){const{incomeSource:T,...I}=v;return I}return{...v,incomeSource:w}}):c.incomes=[],typeof c.fixedBudgetCents!="number"&&(c.fixedBudgetCents=c.fixedCosts.reduce((v,w)=>v+w.plannedCents,0)),typeof c.variableBudgetCents!="number"&&(c.variableBudgetCents=c.variablePositions.reduce((v,w)=>v+w.budgetCents,0)),Array.isArray(c.variablePositions)||(c.variablePositions=[]),typeof c.miscBudgetCents!="number"&&(c.miscBudgetCents=0)})})}function aa(i){return i==="balance"?"Bestandsguthaben":i==="salary"?"Gehalt":i==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function sn(i){return i==="fresh"||i==="salary"||!i}async function Ba(i){for(const o of i)await wa(o)}function Mn(){if(h.selectedYear)return h.years.find(i=>i.year===h.selectedYear)}function Te(){const i=Mn();if(i)return i.months.find(o=>o.month===h.selectedMonth)}function Ma(i,o){const d=h.years.find(c=>c.year===i);if(d)return d.months.find(c=>c.month===o)}function vn(i){const o=i.days.reduce((I,A)=>I+A.foodCents,0),d=i.days.reduce((I,A)=>I+A.goingOutCents,0),c=i.fixedCosts.reduce((I,A)=>I+A.actualCents,0),v=i.variableCosts.reduce((I,A)=>I+A.amountCents,0)+i.variablePositions.reduce((I,A)=>I+A.actualCents,0),w=i.miscCosts.reduce((I,A)=>I+A.amountCents,0),T=o+d+c+v+w;return{foodCents:o,goingOutCents:d,fixedCents:c,variableCents:v,miscCents:w,totalCents:T}}function Nt(i){const o=i.foodBudgetCents??0,d=i.goingOutBudgetCents??0,c=i.fixedBudgetCents??i.fixedCosts.reduce((T,I)=>T+I.plannedCents,0),v=i.variablePositions.reduce((T,I)=>T+I.budgetCents,0),w=i.miscBudgetCents??0;return o+d+c+(i.variableBudgetCents??v)+w}function ee(i){return i.months.reduce((o,d)=>{const c=vn(d);return{foodCents:o.foodCents+c.foodCents,goingOutCents:o.goingOutCents+c.goingOutCents,fixedCents:o.fixedCents+c.fixedCents,variableCents:o.variableCents+c.variableCents,miscCents:o.miscCents+c.miscCents,totalCents:o.totalCents+c.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function ha(i){return i.months.slice().sort((o,d)=>o.month-d.month).map(o=>({month:o.month,summary:vn(o)}))}function gn(i){const o=i.months.reduce((T,I)=>T+(I.foodBudgetCents??0),0),d=i.months.reduce((T,I)=>T+(I.goingOutBudgetCents??0),0),c=i.months.reduce((T,I)=>T+(I.fixedBudgetCents??I.fixedCosts.reduce((A,V)=>A+V.plannedCents,0)),0),v=i.months.reduce((T,I)=>T+(I.variableBudgetCents??I.variablePositions.reduce((A,V)=>A+V.budgetCents,0)),0),w=i.months.reduce((T,I)=>T+(I.miscBudgetCents??0),0);return{foodCents:o,goingOutCents:d,fixedCents:c,variableCents:v,miscCents:w,totalCents:o+d+c+v+w}}function sa(i){return i.months.reduce((o,d)=>o+d.incomes.reduce((c,v)=>c+(sn(v.incomeSource)?v.amountCents:0),0),0)}function G(i){return i.months.reduce((o,d)=>(d.incomes.forEach(c=>{if(c.incomeSource==="salary"){o.salaryIncomeCents+=c.amountCents;return}(c.incomeSource==="fresh"||c.incomeSource==null)&&(o.freshIncomeCents+=c.amountCents)}),o),{salaryIncomeCents:0,freshIncomeCents:0})}function Ha(i){return i.incomes.reduce((o,d)=>d.incomeSource==="salary"?(o.salaryIncomeCents+=d.amountCents,o):((d.incomeSource==="fresh"||d.incomeSource==null)&&(o.freshIncomeCents+=d.amountCents),o),{salaryIncomeCents:0,freshIncomeCents:0})}function _a(i,o){const d=i.months.slice().sort((c,v)=>c.month-v.month)[0];return d?o.get(ge(i.year,d.month))?.carriedFromPreviousCents??0:0}function pa(i){const{title:o,subtitle:d,rows:c,series:v,zeroLine:w=!1}=i;if(c.length===0)return"";const T=Math.max(760,c.length*44),I=320,A=56,V=20,O=18,W=42,U=T-A-V,oe=I-O-W,Se=v.flatMap(pe=>pe.values),_e=w?Math.min(0,...Se):0,de=Math.max(1,...Se,w?0:1),Fe=Math.max(1,de-_e),Le=pe=>c.length===1?A+U/2:A+pe/(c.length-1)*U,ce=pe=>O+(de-pe)/Fe*oe,Ce=Array.from({length:5},(pe,qe)=>Math.round(_e+Fe*qe/4)),te=v.map(pe=>pe.values.map((qe,pt)=>`${pt===0?"M":"L"} ${Le(pt).toFixed(1)} ${ce(qe).toFixed(1)}`).join(" ")),D=c.map((pe,qe)=>{const pt=Le(qe);if(!(qe===0||qe===c.length-1||pe.month===1||qe%6===0))return"";const ve=pe.month===1?`${pe.monthShortLabel} ${pe.year}`:pe.monthShortLabel;return`
          <text class="year-trend-month-label" x="${pt.toFixed(1)}" y="${I-12}" text-anchor="middle">${He(ve)}</text>
        `}).join("");return`
      <section class="chart-tile">
        <header class="chart-tile-header">
          <div>
            <h4>${He(o)}</h4>
            ${d?`<div class="muted">${He(d)}</div>`:""}
          </div>
          <div class="chart-legend">
            ${v.map(pe=>`
                  <span class="chart-legend-item">
                    <span class="chart-dot" style="background:${pe.color}; border-color:${pe.color};"></span>
                    ${He(pe.label)}
                  </span>
                `).join("")}
          </div>
        </header>
        <svg
          class="year-trend-svg"
          viewBox="0 0 ${T} ${I}"
          role="img"
          aria-label="${He(o)}"
          preserveAspectRatio="none"
        >
          ${Ce.map(pe=>`
                <g>
                  <line class="year-trend-grid-line" x1="${A}" y1="${ce(pe).toFixed(1)}" x2="${T-V}" y2="${ce(pe).toFixed(1)}"></line>
                  <text class="year-trend-axis-label" x="${A-10}" y="${(ce(pe)+4).toFixed(1)}" text-anchor="end">${f(pe)}</text>
                </g>
              `).join("")}
          ${w?`<line class="year-trend-zero-line" x1="${A}" y1="${ce(0).toFixed(1)}" x2="${T-V}" y2="${ce(0).toFixed(1)}"></line>`:""}
          ${v.map((pe,qe)=>{const pt=te[qe],Bt=pe.values.map((ve,ut)=>{const Ne=c[ut];return!Ne||!(ut===0||ut===pe.values.length-1||Ne.month===1||ut%6===0)?"":`
                    <circle
                      class="year-trend-node"
                      cx="${Le(ut).toFixed(1)}"
                      cy="${ce(ve).toFixed(1)}"
                      r="4.5"
                      style="stroke:${pe.color};"
                    ></circle>
                  `}).join("");return`
                <g>
                  <path class="year-trend-line" d="${pt}" style="stroke:${pe.color};"></path>
                  ${Bt}
                </g>
              `}).join("")}
          ${D}
        </svg>
      </section>
    `}function Xa(){const i=h.years.slice().sort((c,v)=>c.year-v.year).flatMap(c=>c.months.slice().sort((v,w)=>v.month-w.month).map(v=>({year:c.year,month:v}))),o=new Map;let d=0;return i.forEach(({year:c,month:v},w)=>{const T=v.carryoverOverrideCents,I=typeof T=="number",A=I?T:d,V=w>0||I,O=v.incomes.reduce((Se,_e)=>Se+(sn(_e.incomeSource)?_e.amountCents:0),0),W=Nt(v),U=O+A,oe=U-W;o.set(ge(c,v.month),{hasPreviousMonth:V,carriedFromPreviousCents:A,recordedIncomeCents:O,effectiveIncomeCents:U,plannedBudgetCents:W,netCents:oe}),d=oe}),o}function vt(i,o){return o<=0?"":i>o?"budget-over":i<o?"budget-under":""}function Cs(i){return`${i>0?"+":""}${f(i)}`}function ra(i,o){const d=i-o,c=vt(o,i);return`${f(i)} <span class="eval-diff ${c}">(Δ ${Cs(d)})</span>`}function rn(i,o){const d=i!==null,c=d?i-o:null,v=d?vt(o,i):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${d?`${f(i)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(o)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${c===null?"-":`${f(c)} €`}</strong>
      </div>
    </div>`}async function ia(i){if(await qi(i)){alert(`Jahr ${i} existiert bereits.`);return}const d=Kr(i,h.fixedTemplates,h.fixedTemplateVersion);ta(d),on(d),await wa(d),h.years=await Sa(),_n(`Jahr ${i} wurde angelegt`),h.selectedYear=i,h.selectedMonth=fn(),Z(`Jahr ${i} wurde angelegt.`),ae()}function _n(i="Änderung an den Daten"){h.hasUnexportedChanges=!0,vs(!0);const o=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",d=new Date().toISOString(),c=`${i} (${o})`,v={id:kt("change"),timestampIso:d,message:c};h.unexportedChangeLog=[...h.unexportedChangeLog,v].slice(-200),gs(h.unexportedChangeLog);const w={id:kt("audit"),timestampIso:d,message:c};h.persistentAuditLog=[...h.persistentAuditLog,w].slice().sort((T,I)=>T.timestampIso.localeCompare(I.timestampIso)),Ri(w).catch(T=>{console.error("Audit-Log konnte nicht gespeichert werden",T),Z("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Pa(i){const o=i.trim();o&&(h.lastBackupFileName=o,ys(o))}function Ve(i){h.hasUnexportedChanges=!1,vs(!1),h.unexportedChangeLog=[],gs([]),h.showUnexportedChangeLogModal=!1,Pa(i)}async function me(i){const o=Mn();o&&(await wa(o),h.years=await Sa(),_n(i))}async function Qt(i){for(const o of h.years)await wa(o);h.years=await Sa(),_n(i)}function ge(i,o){return i*100+o}function bn(i,o,d){const c=`${i} auf ${f(d)} € gesetzt`;return d>o?`${c} (erhöht um ${f(d-o)} €)`:d<o?`${c} (verringert um ${f(o-d)} €)`:c}function oa(i){const o=i.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!o)return null;const d=o[1],c=o[2];return!d||!c?null:{year:Number.parseInt(d,10),month:Number.parseInt(c,10)}}function xs(i,o){const d=oa(i.dueDateIso);if(!d||o.year<d.year)return;const c=o.months.find(w=>w.month===d.month);!c||c.variablePositions.some(w=>w.autoAnnualTemplateId===i.id)||(c.variablePositions=[{id:kt("varpos"),name:i.name,budgetCents:i.plannedCents,actualCents:0,autoAnnualTemplateId:i.id},...c.variablePositions],It(c))}function on(i){h.annualVariableFixedTemplates.forEach(o=>{xs(o,i)})}function Kn(i){const o=new Set(h.annualVariableFixedTemplates.map(d=>d.id));i.forEach(d=>{d.months.forEach(c=>{const v=c.variablePositions.some(T=>typeof T.autoAnnualTemplateId=="string"),w=c.fixedCosts.some(T=>typeof T.autoAnnualTemplateId=="string");v&&(c.variablePositions=c.variablePositions.filter(T=>T.autoAnnualTemplateId?o.has(T.autoAnnualTemplateId):!0),It(c)),w&&(c.fixedCosts=c.fixedCosts.filter(T=>!T.autoAnnualTemplateId),gt(c))}),on(d)})}function gt(i){i.fixedBudgetCents=i.fixedCosts.reduce((o,d)=>o+d.plannedCents,0)}function It(i){i.variableBudgetCents=i.variablePositions.reduce((o,d)=>o+d.budgetCents,0)}function Js(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function yn(){const i=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Js());if(!i)return null;const o=i.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!o)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const d=o[1],c=o[2];return!d||!c?null:{year:Number.parseInt(d,10),month:Number.parseInt(c,10)}}function ks(i,o){const d=ge(o.year,o.month);h.years.forEach(c=>{c.months.forEach(v=>{if(ge(c.year,v.month)<d)return;v.fixedCosts.some(T=>T.templateId===i.id)||(v.fixedCosts.push({id:kt("fixed"),templateId:i.id,name:i.name,plannedCents:i.plannedCents,actualCents:0}),gt(v))})})}function Vn(i,o,d){const c=ge(d.year,d.month);h.years.forEach(v=>{v.months.forEach(w=>{ge(v.year,w.month)<c||(w.fixedCosts=w.fixedCosts.map(T=>T.templateId!==o.id?T:{...T,name:o.name,plannedCents:o.plannedCents,actualCents:T.actualCents===i.plannedCents?o.plannedCents:T.actualCents}),gt(w))})})}function $s(i,o){const d=ge(o.year,o.month);h.years.forEach(c=>{c.months.forEach(v=>{ge(c.year,v.month)<d||(v.fixedCosts=v.fixedCosts.filter(w=>w.templateId!==i),gt(v))})})}async function Qa(i,o){const d=i.trim();if(!d)return;const c=yn();if(!c)return;const v=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const w=h.fixedTemplates.find(I=>I.id===h.editingFixedTemplateId);if(!w)return;const T={...w,name:d,plannedCents:o};h.fixedTemplates=h.fixedTemplates.map(I=>I.id===h.editingFixedTemplateId?T:I),Vn(w,T,c)}else{const w={id:kt("tpl"),name:d,plannedCents:o};h.fixedTemplates=[...h.fixedTemplates,w],ks(w,c)}h.fixedTemplateVersion=await or(h.fixedTemplates),h.editingFixedTemplateId=null,await Qt(v?`Fixkosten-Vorlage aktualisiert: ${d} (${f(o)} €)`:`Fixkosten-Vorlage hinzugefügt: ${d} (${f(o)} €)`),Z(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function rt(i){h.editingFixedTemplateId=i,ae()}function qn(){h.editingFixedTemplateId=null,ae()}async function Cn(i){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const d=yn();if(!d)return;const c=h.fixedTemplates.find(v=>v.id===i);h.fixedTemplates=h.fixedTemplates.filter(v=>v.id!==i),$s(i,d),h.editingFixedTemplateId===i&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await or(h.fixedTemplates),await Qt(`Fixkosten-Vorlage gelöscht: ${c?.name??"Unbekannt"}`),Z("Fixkosten-Vorlage wurde gelöscht."),ae()}async function ws(i,o,d){const c=i.trim();if(!c){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=oa(o);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(d<=0){alert("Bitte einen positiven Betrag eingeben.");return}const w={id:kt("annualtpl"),name:c,plannedCents:d,dueDateIso:o};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,w],h.years.forEach(T=>{xs(w,T)}),h.annualVariableFixedTemplateVersion=await cr(h.annualVariableFixedTemplates),await Qt(`Variable Fixkosten-Vorlage hinzugefügt: ${c} (${f(d)} €, jährlich in ${ye(v.month)})`),Z("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function la(i){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const d=h.annualVariableFixedTemplates.find(c=>c.id===i);d&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(c=>c.id!==i),h.years.forEach(c=>{c.months.forEach(v=>{v.variablePositions=v.variablePositions.filter(w=>w.autoAnnualTemplateId!==i),It(v),v.fixedCosts=v.fixedCosts.filter(w=>w.autoAnnualTemplateId!==i),gt(v)})}),h.annualVariableFixedTemplateVersion=await cr(h.annualVariableFixedTemplates),await Qt(`Variable Fixkosten-Vorlage gelöscht: ${d.name}`),Z("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function fa(i,o,d){const c=Te();if(!c)return;const w=c.days.find(T=>T.isoDate===i)?.[o]??0;c.days=c.days.map(T=>T.isoDate===i?{...T,[o]:d}:T),await me(bn(`${o==="foodCents"?"Essen":"Ausgehen"} am ${i} angepasst`,w,d)),ae()}async function Za(i,o){const d=Te();if(!d)return;const c=d.fixedCosts.find(v=>v.id===i);d.fixedCosts=d.fixedCosts.map(v=>v.id===i?{...v,actualCents:o}:v),await me(`Fixkosten-Ist angepasst: ${c?.name??"Unbekannt"} auf ${f(o)} €`),ae()}async function es(i,o){const d=Te();if(!d)return;const c=d.fixedCosts.find(w=>w.id===i);if(!c)return;const v=c.plannedCents;d.fixedCosts=d.fixedCosts.map(w=>w.id===i?{...w,plannedCents:o}:w),gt(d),await me(bn(`Fixkosten-Budget angepasst: ${c.name}`,v,o)),ae()}async function Rn(i,o){const d=Te();if(!d)return;const c=i.trim();if(!c){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(o<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:kt("fixed"),templateId:kt("fixed-local"),name:c,plannedCents:o,actualCents:0};d.fixedCosts=[v,...d.fixedCosts],gt(d),await me(`Fixkosten-Position hinzugefügt: ${c} (${f(o)} €)`),Z("Fixkosten-Position wurde hinzugefügt."),ae()}async function Ss(i){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const d=Te();if(!d)return;const c=d.fixedCosts.find(v=>v.id===i);c&&(d.fixedCosts=d.fixedCosts.filter(v=>v.id!==i),gt(d),await me(`Fixkosten-Position gelöscht: ${c.name}`),Z("Fixkosten-Position wurde gelöscht."),ae())}async function Aa(){const i=Te();if(!i)return;if(i.fixedCosts.length===0){Z("Keine Fixkosten zum Löschen vorhanden.","error");return}if(!confirm("Alle Fixkosten im aktuellen Monat wirklich löschen?"))return;const d=i.fixedCosts.length;i.fixedCosts=[],gt(i),await me(`Alle Fixkosten im Monat gelöscht: ${d} Position(en)`),Z(`${d} Fixkosten-Position(en) wurden gelöscht.`),ae()}async function Es(i){await xn("fixedBudgetCents",i,"Fixkosten")}async function $e(i){await xn("foodBudgetCents",i,"Essen")}async function Bs(i){await xn("goingOutBudgetCents",i,"Ausgehen")}async function Ms(i){await xn("miscBudgetCents",i,"Sonstiges")}async function Ta(i){await xn("variableBudgetCents",i,"Variable Kosten")}async function xn(i,o,d){const c=Te(),v=h.selectedYear;if(!c||!v||c[i]===o)return;const w=c[i];if(c[i]=o,confirm(`Soll das Budget "${d}" auch für zukünftige Monate übernommen werden?`)){const I=ge(v,h.selectedMonth);h.years.forEach(V=>{V.months.forEach(O=>{ge(V.year,O.month)<=I||(O[i]=o)})}),h.recurringBudgetDefaults[i]=o,bs(h.recurringBudgetDefaults);const A=bn(`Budget "${d}"`,w??0,o);await Qt(`${A} (inkl. zukünftiger Monate)`),Z(`Budget "${d}" wurde für zukünftige Monate übernommen.`),ae();return}await me(bn(`Budget "${d}"`,w??0,o)),ae()}async function ts(i){const o=Te();o&&(i===null?o.carryoverOverrideCents=null:o.carryoverOverrideCents=i,await me(i===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(i)} € gesetzt`),ae())}async function ns(i,o,d){const c=Te(),v=h.selectedYear;if(!c||!v)return;const w=i.trim();if(!w){alert("Bitte Bezeichnung für die Position angeben.");return}if(c.variablePositions=[{id:kt("varpos"),name:w,budgetCents:o,actualCents:0},...c.variablePositions],It(c),d){const T=ge(v,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(A=>{ge(I.year,A.month)<=T||(A.variablePositions=[{id:kt("varpos"),name:w,budgetCents:o,actualCents:0},...A.variablePositions],It(A))})}),await Qt(`Variable Position hinzugefügt: ${w} (${f(o)} €) für zukünftige Monate`),Z("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await me(`Variable Position hinzugefügt: ${w} (${f(o)} €)`),Z("Variable Position wurde hinzugefügt."),ae()}async function _s(i,o){const d=Te();if(!d)return;const c=d.variablePositions.find(w=>w.id===i),v=c?.actualCents??0;d.variablePositions=d.variablePositions.map(w=>w.id===i?{...w,actualCents:o}:w),await me(bn(`Istwert Variable Position angepasst: ${c?.name??"Unbekannt"}`,v,o)),ae()}async function je(i,o){const d=Te();if(!d)return;const c=d.variablePositions.find(w=>w.id===i),v=c?.budgetCents??0;d.variablePositions=d.variablePositions.map(w=>w.id===i?{...w,budgetCents:o}:w),It(d),await me(bn(`Budget Variable Position angepasst: ${c?.name??"Unbekannt"}`,v,o)),ae()}async function ma(i){if(!confirm("Variable Position wirklich löschen?"))return;const d=Te(),c=h.selectedYear;if(!d||!c)return;const v=d.variablePositions.find(A=>A.id===i);if(!v)return;const w=ge(c,h.selectedMonth),I=h.years.some(A=>A.months.some(V=>ge(A.year,V.month)>w&&V.variablePositions.some(O=>O.name===v.name&&O.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(d.variablePositions=d.variablePositions.filter(A=>A.id!==i),It(d),I){h.years.forEach(A=>{A.months.forEach(V=>{ge(A.year,V.month)<=w||(V.variablePositions=V.variablePositions.filter(O=>!(O.name===v.name&&O.budgetCents===v.budgetCents)),It(V))})}),await Qt(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),Z("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await me(`Variable Position gelöscht: ${v.name}`),Z("Variable Position wurde gelöscht."),ae()}async function va(i){const o=Te(),d=h.selectedYear;if(!o||!d)return;const c=o.variablePositions.find(O=>O.id===i);if(!c)return;const v={year:h.selectedMonth===12?d+1:d,month:h.selectedMonth===12?1:h.selectedMonth+1};let w=h.years.find(O=>O.year===v.year);if(!w){const O=Kr(v.year,h.fixedTemplates,h.fixedTemplateVersion);ta(O),on(O),await wa(O),h.years=[...h.years,O].sort((W,U)=>W.year-U.year),w=O}const T=w.months.find(O=>O.month===v.month);if(!T)return;const I=T.variablePositions.some(O=>O.id===c.id||O.name===c.name&&O.budgetCents===c.budgetCents);if(o.variablePositions=o.variablePositions.filter(O=>O.id!==i),It(o),!I){const W=T.variablePositions.some(U=>U.id===c.id)?{...c,id:kt("varpos")}:c;T.variablePositions=[W,...T.variablePositions],It(T)}const A=`${ye(v.month)} ${v.year}`,V=`Variable Position verschoben: ${c.name} → ${A}`;if(v.year===d)await me(V);else{const O=Mn();if(!O)return;await wa(O),await wa(w),h.years=await Sa(),mn(h.years),_n(V)}Z(I?`Position entfernt (im Folgemonat schon vorhanden: ${A}).`:`Position in den Folgemonat verschoben: ${A}.`),ae()}async function jn(i,o,d){const c=Te(),v=h.selectedYear;if(!c||!v)return;const w=i.trim();if(!w){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(o<=0){alert("Bitte einen positiven Betrag eingeben.");return}const T=sr(w,o);if(c.miscCosts=[T,...c.miscCosts],d){const I=ge(v,h.selectedMonth);h.years.forEach(A=>{A.months.forEach(V=>{ge(A.year,V.month)<=I||(V.miscCosts=[sr(w,o),...V.miscCosts])})}),await Qt(`Sonstige Position hinzugefügt: ${w} (${f(o)} €) für zukünftige Monate`),Z("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await me(`Sonstige Position hinzugefügt: ${w} (${f(o)} €)`),Z("Sonstige Position wurde hinzugefügt."),ae()}function ga(i){const o=[];let d="",c=!1;for(let v=0;v<i.length;v+=1){const w=i[v],T=i[v+1];if(w==='"'){c&&T==='"'?(d+='"',v+=1):c=!c;continue}if(w===";"&&!c){o.push(d.trim()),d="";continue}d+=w}return o.push(d.trim()),o}async function as(i){const o=Te();if(!o){Z("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(c.length===0){Z("CSV-Datei ist leer.","error");return}const v=new Set(o.miscCosts.map(A=>`${A.description}__${A.amountCents}`));let w=0,T=0,I=0;if(c.forEach(A=>{const V=ga(A);if(V.length!==2){I+=1;return}const O=V[0]?.trim()??"",W=V[1]?.trim()??"",U=Ge(W);if(!O||U<=0){I+=1;return}const oe=`${O}__${U}`;if(v.has(oe)){T+=1;return}o.miscCosts.push(sr(O,U)),v.add(oe),w+=1}),w===0){const A=I>0||T>0?`Keine Position importiert (Duplikate: ${T}, ungültig: ${I}).`:"Keine Position importiert.";Z(A,"error");return}await me(`Sonstiges CSV-Import: ${w} Position(en), Duplikate übersprungen: ${T}, ungültige Zeilen: ${I}`),Z(`Import abgeschlossen: ${w} übernommen, ${T} Duplikate, ${I} ungültig.`),ae()}async function Fa(i){const o=Te();if(!o){Z("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(c.length===0){Z("CSV-Datei ist leer.","error");return}const v=new Set(o.fixedCosts.map(A=>`${A.name}__${A.plannedCents}__${A.actualCents}`));let w=0,T=0,I=0;if(c.forEach(A=>{const V=ga(A);if(V.length!==2){I+=1;return}const O=V[0]?.trim()??"",W=V[1]?.trim()??"",U=Ge(W);if(!O||U<=0){I+=1;return}const oe=`${O}__${U}__${U}`;if(v.has(oe)){T+=1;return}o.fixedCosts.push({id:kt("fixed"),templateId:kt("fixed-local"),name:O,plannedCents:U,actualCents:U}),v.add(oe),w+=1}),w===0){const A=I>0||T>0?`Keine Position importiert (Duplikate: ${T}, ungültig: ${I}).`:"Keine Position importiert.";Z(A,"error");return}gt(o),await me(`Fixkosten CSV-Import: ${w} Position(en), Duplikate übersprungen: ${T}, ungültige Zeilen: ${I}`),Z(`Import abgeschlossen: ${w} übernommen, ${T} Duplikate, ${I} ungültig.`),ae()}async function Ps(i){const o=Te();if(!o){Z("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(c.length===0){Z("CSV-Datei ist leer.","error");return}const v=new Set(o.variablePositions.map(A=>`${A.name}__${A.budgetCents}__${A.actualCents}`));let w=0,T=0,I=0;if(c.forEach(A=>{const V=ga(A);if(V.length!==2){I+=1;return}const O=V[0]?.trim()??"",W=V[1]?.trim()??"",U=Ge(W);if(!O||U<=0){I+=1;return}const oe=`${O}__${U}__${U}`;if(v.has(oe)){T+=1;return}o.variablePositions.push({id:kt("varpos"),name:O,budgetCents:U,actualCents:U}),v.add(oe),w+=1}),w===0){const A=I>0||T>0?`Keine Position importiert (Duplikate: ${T}, ungültig: ${I}).`:"Keine Position importiert.";Z(A,"error");return}It(o),await me(`Variable CSV-Import: ${w} Position(en), Duplikate übersprungen: ${T}, ungültige Zeilen: ${I}`),Z(`Import abgeschlossen: ${w} übernommen, ${T} Duplikate, ${I} ungültig.`),ae()}async function Ia(i){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const d=Te(),c=h.selectedYear;if(!d||!c)return;const v=d.miscCosts.find(A=>A.id===i);if(!v)return;const w=ge(c,h.selectedMonth),I=h.years.some(A=>A.months.some(V=>ge(A.year,V.month)>w&&V.miscCosts.some(O=>O.description===v.description&&O.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(d.miscCosts=d.miscCosts.filter(A=>A.id!==i),I){h.years.forEach(A=>{A.months.forEach(V=>{ge(A.year,V.month)<=w||(V.miscCosts=V.miscCosts.filter(O=>!(O.description===v.description&&O.amountCents===v.amountCents)))})}),await Qt(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),Z("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await me(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €)`),Z("Sonstige Position wurde gelöscht."),ae()}async function ss(i,o,d,c){const v=Te(),w=h.selectedYear;if(!v||!w)return;const T=i.trim();if(!T){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(o<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const I=Vr(T,o,d);if(v.incomes=[I,...v.incomes],c){const A=ge(w,h.selectedMonth);h.years.forEach(V=>{V.months.forEach(O=>{ge(V.year,O.month)<=A||(O.incomes=[Vr(T,o,d),...O.incomes])})}),await Qt(`Einkommen hinzugefügt: ${T} (${f(o)} €, ${aa(d)}) für zukünftige Monate`),Z("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await me(`Einkommen hinzugefügt: ${T} (${f(o)} €, ${aa(d)})`),Z("Einkommen wurde hinzugefügt."),ae()}async function Hs(i,o){const d=Te();if(!d)return;const c=d.incomes.find(v=>v.id===i);c&&(d.incomes=d.incomes.map(v=>{if(v.id!==i)return v;if(!o){const{incomeSource:w,...T}=v;return T}return{...v,incomeSource:o}}),await me(`Einkommensart angepasst: ${c.description} → ${aa(o)}`),ae())}async function Me(i){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const d=Te(),c=h.selectedYear;if(!d||!c)return;const v=d.incomes.find(A=>A.id===i);if(!v)return;const w=ge(c,h.selectedMonth),I=h.years.some(A=>A.months.some(V=>ge(A.year,V.month)>w&&V.incomes.some(O=>O.description===v.description&&O.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(d.incomes=d.incomes.filter(A=>A.id!==i),I){h.years.forEach(A=>{A.months.forEach(V=>{ge(A.year,V.month)<=w||(V.incomes=V.incomes.filter(O=>!(O.description===v.description&&O.amountCents===v.amountCents)))})}),await Qt(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),Z("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await me(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €)`),Z("Einkommen wurde gelöscht."),ae()}async function rs(){const i=await Yi(),o=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),d=URL.createObjectURL(o),c=`haushaltsbuch-backup-${En()}-${Ea()}.json`,v=document.createElement("a");v.href=d,v.download=c,v.click(),URL.revokeObjectURL(d),Ve(c),ae(),Z("Backup wurde exportiert.")}async function Xs(){const i=[];i.push(Wt(["Jahr","Monat","Essen Budget (€)","Essen Ist (€)","Essen Differenz (€)","Freizeit Budget (€)","Freizeit Ist (€)","Freizeit Differenz (€)","Fixkosten Budget (€)","Fixkosten Ist (€)","Fixkosten Differenz (€)","Variabel Budget (€)","Variabel Ist (€)","Variabel Differenz (€)","Sonstiges Budget (€)","Sonstiges Ist (€)","Sonstiges Differenz (€)","Gesamt Budget (€)","Gesamt Ist (€)","Gesamt Differenz (€)","Einnahmen erfasst (€)","Rückdeckung aus Vormonat (€)"]));const o=h.years.slice().sort((A,V)=>A.year-V.year),d=Xa();o.forEach(A=>{A.months.slice().sort((V,O)=>V.month-O.month).forEach(V=>{const O=vn(V),W=V.foodBudgetCents??0,U=V.goingOutBudgetCents??0,oe=V.fixedBudgetCents??V.fixedCosts.reduce((te,D)=>te+D.plannedCents,0),Se=V.variableBudgetCents??V.variablePositions.reduce((te,D)=>te+D.budgetCents,0),_e=V.miscBudgetCents??0,de=Nt(V),Fe=de-O.totalCents,Le=V.incomes.reduce((te,D)=>te+(sn(D.incomeSource)?D.amountCents:0),0),ce=d.get(ge(A.year,V.month)),Ce=ce?.hasPreviousMonth?ke(ce.carriedFromPreviousCents):"";i.push(Wt([A.year,ye(V.month),ke(W),ke(O.foodCents),ke(W-O.foodCents),ke(U),ke(O.goingOutCents),ke(U-O.goingOutCents),ke(oe),ke(O.fixedCents),ke(oe-O.fixedCents),ke(Se),ke(O.variableCents),ke(Se-O.variableCents),ke(_e),ke(O.miscCents),ke(_e-O.miscCents),ke(de),ke(O.totalCents),ke(Fe),ke(Le),Ce]))})});const c=`\uFEFF${i.join(`
`)}`,v=new Blob([c],{type:"text/csv;charset=utf-8"}),w=URL.createObjectURL(v),T=`haushaltsbuch-backup-${En()}-${Ea()}.csv`,I=document.createElement("a");I.href=w,I.download=T,I.click(),URL.revokeObjectURL(w),Ve(T),ae(),Z("CSV-Backup wurde exportiert.")}async function As(i){const o=De(i);if(!o||o.length===0){Z("Für den gewählten Zeitraum sind keine Daten vorhanden.","error");return}const d=o.at(0);if(!d){Z("Für den gewählten Zeitraum sind keine Daten vorhanden.","error");return}const c=[],v=d.year,w=i==="month"?"Monat":"Jahr",T=d.month;c.push(Wt(["Export","Haushaltsbuch Detail CSV"])),c.push(Wt(["Exportiert am",new Date().toISOString()])),c.push(Wt(["Modus",w])),c.push(Wt(["Jahr",v])),i==="month"&&c.push(Wt(["Monat",`${ye(T.month)} (${ms(T.month)})`])),c.push("");const I=[],A=[],V=[],O=[],W=[],U=[];o.forEach(({year:ce,month:Ce})=>{Ce.days.slice().sort((te,D)=>te.isoDate.localeCompare(D.isoDate)).forEach(te=>{I.push([ce,ye(Ce.month),ne(te.isoDate),ke(te.foodCents),ke(te.goingOutCents),ke(te.foodCents+te.goingOutCents)])}),Ce.incomes.slice().sort((te,D)=>te.createdAt.localeCompare(D.createdAt)).forEach(te=>{A.push([ce,ye(Ce.month),ne(te.createdAt),te.description,aa(te.incomeSource),ke(te.amountCents)])}),Ce.fixedCosts.slice().sort((te,D)=>te.name.localeCompare(D.name,"de-DE")).forEach(te=>{V.push([ce,ye(Ce.month),te.name,ke(te.plannedCents),ke(te.actualCents),ke(te.plannedCents-te.actualCents)])}),Ce.variablePositions.slice().sort((te,D)=>te.name.localeCompare(D.name,"de-DE")).forEach(te=>{O.push([ce,ye(Ce.month),te.name,ke(te.budgetCents),ke(te.actualCents),ke(te.budgetCents-te.actualCents)])}),Ce.variableCosts.slice().sort((te,D)=>te.createdAt.localeCompare(D.createdAt)).forEach(te=>{W.push([ce,ye(Ce.month),ne(te.createdAt),te.description,ke(te.amountCents)])}),Ce.miscCosts.slice().sort((te,D)=>te.createdAt.localeCompare(D.createdAt)).forEach(te=>{U.push([ce,ye(Ce.month),ne(te.createdAt),te.description,ke(te.amountCents)])})}),Nn(c,"Tageswerte",["Jahr","Monat","Datum","Essen (€)","Freizeit (€)","Tag Summe (€)"],I),Nn(c,"Einnahmen",["Jahr","Monat","Datum","Beschreibung","Quelle","Betrag (€)"],A),Nn(c,"Fixkosten",["Jahr","Monat","Beschreibung","Geplant (€)","Ist (€)","Differenz (€)"],V),Nn(c,"Variable Positionen",["Jahr","Monat","Beschreibung","Budget (€)","Ist (€)","Differenz (€)"],O),Nn(c,"Variable Kosten",["Jahr","Monat","Datum","Beschreibung","Betrag (€)"],W),Nn(c,"Sonstiges",["Jahr","Monat","Datum","Beschreibung","Betrag (€)"],U);const oe=`\uFEFF${c.join(`
`)}`,Se=new Blob([oe],{type:"text/csv;charset=utf-8"}),_e=URL.createObjectURL(Se),de=i==="month"?`${v}-${ms(T.month)}`:String(v),Fe=`haushaltsbuch-backup-detail-${i}-${de}-${Ea()}.csv`,Le=document.createElement("a");Le.href=_e,Le.download=Fe,Le.click(),URL.revokeObjectURL(_e),Ve(Fe),ae(),Z(i==="month"?"Detailliertes CSV-Backup für den Monat wurde exportiert.":"Detailliertes CSV-Backup für das Jahr wurde exportiert.")}async function Kt(i){const o=await i.text(),d=JSON.parse(o);await zi(d);const[c,v,w,T]=await Promise.all([Sa(),ir(),lr(),ur()]);h.years=c,h.annualVariableFixedTemplates=w.templates,h.annualVariableFixedTemplateVersion=w.version,mn(h.years),Kn(h.years),h.fixedTemplates=v.templates,h.fixedTemplateVersion=v.version,h.savedSearchEvaluations=T.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await Ba(h.years),await na(),h.persistentAuditLog=await dr(),h.selectedYear=fs(c),h.selectedMonth=fn(),Ve(i.name),Z("Backup wurde importiert."),ae()}function Yn(i){h.evaluationQuery=i,h.evaluationCurrentResult=qr(h.years,i,Gt(),fn()),ae()}async function Oa(){const i=h.evaluationCurrentResult;if(!i||!i.keywordNormalized){Z("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const o=h.savedSearchEvaluations.findIndex(d=>d.id===i.id);o>=0?h.savedSearchEvaluations[o]=i:h.savedSearchEvaluations=[i,...h.savedSearchEvaluations],await Rs(h.savedSearchEvaluations),_n(`Auswertung gespeichert: ${i.keyword}`),Z(`Auswertung "${i.keyword}" wurde gespeichert.`),ae()}async function Pn(i){const o=h.savedSearchEvaluations.find(d=>d.id===i);o&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(d=>d.id!==i),await Rs(h.savedSearchEvaluations),_n(`Auswertung gelöscht: ${o.keyword}`),Z(`Gespeicherte Auswertung "${o.keyword}" wurde gelöscht.`),ae())}function ae(){const i=Mn(),o=Te(),d=En(),c=o?vn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=i?ee(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},w=i?ha(i):[],T=o?o.foodBudgetCents??0:0,I=o?o.goingOutBudgetCents??0:0,A=o?o.fixedBudgetCents??o.fixedCosts.reduce((n,m)=>n+m.plannedCents,0):0,V=o?o.variableBudgetCents??o.variablePositions.reduce((n,m)=>n+m.budgetCents,0):0,O=o?o.miscBudgetCents??0:0,W=i?i.months.reduce((n,m)=>n+(m.foodBudgetCents??0),0):0,U=i?i.months.reduce((n,m)=>n+(m.goingOutBudgetCents??0),0):0,oe=i?i.months.reduce((n,m)=>n+(m.fixedBudgetCents??m.fixedCosts.reduce((L,z)=>L+z.plannedCents,0)),0):0,Se=i?i.months.reduce((n,m)=>n+(m.variableBudgetCents??m.variablePositions.reduce((L,z)=>L+z.budgetCents,0)),0):0,_e=i?i.months.reduce((n,m)=>n+(m.miscBudgetCents??0),0):0,de=o?o.incomes.reduce((n,m)=>n+(sn(m.incomeSource)?m.amountCents:0),0):0,Fe=o?o.incomes.reduce((n,m)=>n+(m.incomeSource==="salary"?m.amountCents:0),0):0,Le=o?o.incomes.reduce((n,m)=>n+(m.incomeSource==="fresh"?m.amountCents:0),0):0,ce=Xa(),Ce=i?ce.get(ge(i.year,h.selectedMonth)):void 0,te=i?i.months.slice().sort((n,m)=>n.month-m.month)[0]:void 0,D=Ce?.carriedFromPreviousCents??0,pe=Ce?.hasPreviousMonth??!1,qe=Ce?.effectiveIncomeCents??de,pt=o?Nt(o):0,Bt=Ce?.netCents??de-pt,ve=qe-c.totalCents,ut=Fe-c.totalCents,Ne=c.totalCents>0?`${(Fe/c.totalCents*100).toFixed(1)} %`:"-",tt=D<0?"danger":D>0?"budget-under":"",dt=Bt<0?"danger":Bt>0?"budget-under":"",Xe=ve<0?"danger":ve>0?"budget-under":"",it=i?i.months.reduce((n,m)=>n+m.incomes.reduce((L,z)=>L+(sn(z.incomeSource)?z.amountCents:0),0),0):0,Ut=i?i.months.reduce((n,m)=>n+m.incomes.reduce((L,z)=>L+(z.incomeSource==="salary"?z.amountCents:0),0),0):0,Jt=i?i.months.reduce((n,m)=>n+m.incomes.reduce((L,z)=>L+(z.incomeSource==="fresh"?z.amountCents:0),0),0):0,Ht=i&&te?ce.get(ge(i.year,te.month))?.carriedFromPreviousCents??0:0,Ye=it+Ht;Ye-v.totalCents,Ut-v.totalCents,v.totalCents>0&&`${(Ut/v.totalCents*100).toFixed(1)}`;const ot=T+I+A+V+O,Xt=T+I,Ke=c.foodCents+c.goingOutCents,ze=Xt-Ke,nt=vt(Ke,Xt),at=W+U+oe+Se+_e,Je=de-ot,kn=ot-c.totalCents;at-v.totalCents;const Pe=n=>n<0?"danger":n>0?"budget-under":"",$n=(n,m)=>m<=0?"muted":n>=m?"budget-under":"danger",Vt=$n(Fe,c.totalCents);$n(Ut,v.totalCents);const le=(n,m)=>{if(m<=0)return"0%";const z=Math.max(0,n)/m*100;return`${Math.min(100,Math.max(0,z)).toFixed(1)}%`},Mt=(n,m)=>{if(m<=0)return n>0?100:0;const L=Math.max(0,n)/m*100;return Math.max(0,L)},qt=[{label:"Essen",budgetCents:T,actualCents:c.foodCents},{label:"Ausgehen",budgetCents:I,actualCents:c.goingOutCents},{label:"Fixkosten",budgetCents:A,actualCents:c.fixedCents},{label:"Variable",budgetCents:V,actualCents:c.variableCents},{label:"Sonstige",budgetCents:O,actualCents:c.miscCents}];Math.max(1,...qt.flatMap(n=>[n.budgetCents,n.actualCents]));const ba=(n,m)=>m<=0?"bar-positive":n<=0||m>n?"bar-negative":"bar-positive",Zt=[{label:"Einkommen gesamt",valueCents:qe,className:"bar-income"},{label:"Budget gesamt",valueCents:ot,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:c.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ve,className:ve<0?"bar-negative":"bar-positive"}],ln=Math.max(1,...Zt.map(n=>Math.abs(n.valueCents))),An=i?i.months.slice().sort((n,m)=>n.month-m.month).map(n=>{const m=n.foodBudgetCents??0,L=n.goingOutBudgetCents??0,z=n.fixedBudgetCents??n.fixedCosts.reduce((yt,tn)=>yt+tn.plannedCents,0),fe=n.variableBudgetCents??n.variablePositions.reduce((yt,tn)=>yt+tn.budgetCents,0),Re=n.miscBudgetCents??0,ht=m+L+z+fe+Re;return{month:n.month,foodBudgetCents:m,goingOutBudgetCents:L,fixedBudgetCents:z,variableBudgetCents:fe,miscBudgetCents:Re,totalBudgetCents:ht}}):[],bt=new Map(An.map(n=>[n.month,n])),Ot=n=>{if(n.length===0)return null;const m=Math.min(...n),L=Math.max(...n),z=Math.round(n.reduce((fe,Re)=>fe+Re,0)/n.length);return{min:m,avg:z,max:L}},_t=i&&i.year===Gt()?w.filter(n=>n.month<=fn()):w,ya=_t.map(n=>n.summary.foodCents),Tn=_t.map(n=>n.summary.goingOutCents),Ca=_t.map(n=>n.summary.fixedCents),xa=_t.map(n=>n.summary.variableCents),Da=_t.map(n=>n.summary.miscCents),ka=_t.map(n=>n.summary.totalCents),Fn=_t.map(n=>i?ce.get(ge(i.year,n.month))?.plannedBudgetCents??0:0),is=_t.map(n=>i?ce.get(ge(i.year,n.month))?.netCents??0:0),P=new Map((i?.months??[]).map(n=>[n.month,n.incomes.reduce((m,L)=>m+(L.incomeSource==="salary"?L.amountCents:0),0)])),q=new Map((i?.months??[]).map(n=>[n.month,n.incomes.reduce((m,L)=>m+(L.incomeSource==="salary"||L.incomeSource==="fresh"?L.amountCents:0),0)])),Rt=_t.map(n=>P.get(n.month)??0),os=_t.map(n=>q.get(n.month)??0),jt={food:Ot(ya),goingOut:Ot(Tn),fixed:Ot(Ca),variable:Ot(xa),misc:Ot(Da),total:Ot(ka),salary:Ot(Rt),income:Ot(os),budget:Ot(Fn),net:Ot(is)},wn=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Oe={food:ya.reduce((n,m)=>n+m,0),goingOut:Tn.reduce((n,m)=>n+m,0),fixed:Ca.reduce((n,m)=>n+m,0),variable:xa.reduce((n,m)=>n+m,0),misc:Da.reduce((n,m)=>n+m,0),total:ka.reduce((n,m)=>n+m,0),salary:Rt.reduce((n,m)=>n+m,0),income:os.reduce((n,m)=>n+m,0),budget:Fn.reduce((n,m)=>n+m,0)},La=wn.map(({key:n,label:m})=>{const L=jt.food?.[n]??null,z=jt.goingOut?.[n]??null,fe=jt.fixed?.[n]??null,Re=jt.variable?.[n]??null,ht=jt.misc?.[n]??null,yt=jt.total?.[n]??null,tn=jt.salary?.[n]??null,lt=jt.income?.[n]??null,Un=jt.budget?.[n]??null,Jn=jt.net?.[n]??null,Ct=un=>un===null?"-":f(un);return`<tr>
                  <td><strong>${m}</strong></td>
                  <td>${Ct(L)}</td>
                  <td>${Ct(z)}</td>
                  <td>${Ct(fe)}</td>
                  <td>${Ct(Re)}</td>
                  <td>${Ct(ht)}</td>
                  <td>${Ct(yt)}</td>
                  <td>${Ct(tn)}</td>
                  <td>${Ct(lt)}</td>
                  <td>${Ct(Un)}</td>
                  <td>${Ct(Jn)}</td>
                </tr>`}).join(""),ca=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(Oe.food)}</td>
                  <td>${f(Oe.goingOut)}</td>
                  <td>${f(Oe.fixed)}</td>
                  <td>${f(Oe.variable)}</td>
                  <td>${f(Oe.misc)}</td>
                  <td>${f(Oe.total)}</td>
                  <td>${f(Oe.salary)}</td>
                  <td>${f(Oe.income)}</td>
                  <td>${f(Oe.budget)}</td>
                  <td>-</td>
                </tr>`,Fs=Math.max(1,...w.flatMap(n=>{const m=bt.get(n.month)?.totalBudgetCents;return[n.summary.totalCents,m??0]})),Na=Math.max(1,...w.flatMap(n=>{const m=bt.get(n.month),L=n.summary.foodCents+n.summary.goingOutCents,z=(m?.foodBudgetCents??0)+(m?.goingOutBudgetCents??0);return[L,z]})),ls=Math.max(1,...w.flatMap(n=>{const m=bt.get(n.month)?.fixedBudgetCents??0;return[n.summary.fixedCents,m]})),In=Math.max(1,...w.flatMap(n=>{const m=bt.get(n.month)?.variableBudgetCents??0;return[n.summary.variableCents,m]})),Ka=Math.max(1,...w.flatMap(n=>{const m=bt.get(n.month)?.miscBudgetCents??0;return[n.summary.miscCents,m]})),zn=vt(c.fixedCents,A),On=vt(c.foodCents,T),Is=vt(c.goingOutCents,I),e=vt(c.variableCents,V),t=vt(c.miscCents,O),a=vt(c.totalCents,ot),s=ot-c.totalCents,r=n=>n===0?"-":f(n),l=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(A)}</div>
        <div class="compact-cost-actual ${zn}">${r(c.fixedCents)}</div>
      </div>`,u=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(V)}</div>
        <div class="compact-cost-actual ${e}">${r(c.variableCents)}</div>
      </div>`,p=o?o.fixedCosts.length>0?o.fixedCosts.map(n=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${He(n.name)}</div>
                  <div class="compact-cost-budget">${f(n.plannedCents)}</div>
                  <div class="compact-cost-actual ${vt(n.actualCents,n.plannedCents)}">${r(n.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,y=o?o.variablePositions.length>0?o.variablePositions.map(n=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${He(n.name)}${n.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(n.budgetCents)}</div>
                  <div class="compact-cost-actual ${vt(n.actualCents,n.budgetCents)}">${r(n.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,S=h.editingFixedTemplateId?h.fixedTemplates.find(n=>n.id===h.editingFixedTemplateId):null,C=h.hasUnexportedChanges,b=h.unexportedChangeLog.slice().reverse(),k=h.persistentAuditLog.slice().sort((n,m)=>m.timestampIso.localeCompare(n.timestampIso)),$=h.lastBackupFileName?He(h.lastBackupFileName):"-",x={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},g=h.years.slice().sort((n,m)=>n.year-m.year),_=g.some(n=>n.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??g[g.length-1]?.year??null,E=typeof _=="number"?g.find(n=>n.year===_):void 0,B=E?E.months.slice().sort((n,m)=>n.month-m.month):[],F=E?ee(E):x,N=E?G(E):{salaryIncomeCents:0,freshIncomeCents:0},j=N.salaryIncomeCents+N.freshIncomeCents,Y=N.salaryIncomeCents,K=E?gn(E):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},H=E?sa(E):0,J=E?_a(E,ce):0,R=H+J,X=E?E.months.reduce((n,m)=>n+Nt(m),0):0,we=R-X,Ee=R-F.totalCents,re=[{label:"Essen",budgetCents:K.foodCents,actualCents:F.foodCents},{label:"Ausgehen",budgetCents:K.goingOutCents,actualCents:F.goingOutCents},{label:"Fixkosten",budgetCents:K.fixedCents,actualCents:F.fixedCents},{label:"Variable",budgetCents:K.variableCents,actualCents:F.variableCents},{label:"Sonstige",budgetCents:K.miscCents,actualCents:F.miscCents}],se=B.map(n=>{const m=E?ce.get(ge(E.year,n.month)):void 0,L=vn(n),z=n.incomes.reduce((un,dn)=>un+(dn.incomeSource==="salary"?dn.amountCents:0),0),fe=n.incomes.reduce((un,dn)=>un+(sn(dn.incomeSource)?dn.amountCents:0),0),Re=m?.effectiveIncomeCents??fe,ht=m?.plannedBudgetCents??Nt(n),yt=L.foodCents,tn=L.goingOutCents,lt=yt+tn,Un=L.totalCents,Jn=Re-ht,Ct=Re-Un;return{month:n.month,salaryIncomeCents:z,incomeCents:fe,foodCents:yt,goingOutCents:tn,foodAndGoingOutCents:lt,effectiveIncomeCents:Re,plannedBudgetCents:ht,actualCostCents:Un,plannedNetCents:Jn,actualNetCents:Ct}}),et=Math.max(1,...se.map(n=>n.actualCostCents)),Yt=Math.max(1,...se.flatMap(n=>[Math.abs(n.plannedNetCents),Math.abs(n.actualNetCents)])),st=Math.max(1,...se.map(n=>n.foodAndGoingOutCents)),Gn=Math.max(1,...se.map(n=>n.foodCents)),cs=Math.max(1,...se.map(n=>n.goingOutCents)),Dn=se.map((n,m,L)=>{const z=m>0?L[m-1]?.plannedNetCents??n.plannedNetCents:n.plannedNetCents;return{...n,monthLabel:ye(n.month),monthShortLabel:ye(n.month).slice(0,3),deltaCents:n.plannedNetCents-z}}),Wn=Dn[Dn.length-1]??null,Jr=Math.min(0,...Dn.map(n=>n.plannedNetCents)),Qs=Math.max(0,...Dn.map(n=>n.plannedNetCents)),hr=Math.max(1,Qs-Jr),us=720,Os=320,Ds=18,Zs=18,Hr=38,Va=56,pr=us-Va-Zs,er=Os-Ds-Hr,Xr=n=>{if(Dn.length<=1)return Va+pr/2;const m=n/(Dn.length-1);return Va+m*pr},tr=n=>Ds+(Qs-n)/hr*er,Ln=Dn.map((n,m)=>{const L=Xr(m),z=tr(n.plannedNetCents);return{...n,x:L,y:z,leftPercent:L/us*100,topPercent:z/Os*100}}),nr=Ln.map((n,m)=>`${m===0?"M":"L"} ${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" "),fr=Ln.length>0?`${nr} L ${Ln[Ln.length-1]?.x.toFixed(1)} ${(Ds+er).toFixed(1)} L ${Ln[0]?.x.toFixed(1)} ${(Ds+er).toFixed(1)} Z`:"",mr=5,Qr=Array.from({length:mr},(n,m)=>{const L=m/(mr-1),z=Qs-L*hr;return{valueCents:Math.round(z/100)*100,y:tr(z)}}),vr=tr(0),Zr=Dn[0]?.plannedNetCents??0,qa=(Dn[Dn.length-1]?.plannedNetCents??0)-Zr,ei=qa<0?"trend-badge-negative":qa>0?"trend-badge-positive":"trend-badge-neutral",gr=qa<0?"↘":qa>0?"↗":"→",ti=qa<0?"Abwärtstrend":qa>0?"Aufwärtstrend":"Seitwärts",$a=g.reduce((n,m)=>{const L=gn(m);return{foodCents:n.foodCents+L.foodCents,goingOutCents:n.goingOutCents+L.goingOutCents,fixedCents:n.fixedCents+L.fixedCents,variableCents:n.variableCents+L.variableCents,miscCents:n.miscCents+L.miscCents,totalCents:n.totalCents+L.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),en=g.reduce((n,m)=>{const L=ee(m);return{foodCents:n.foodCents+L.foodCents,goingOutCents:n.goingOutCents+L.goingOutCents,fixedCents:n.fixedCents+L.fixedCents,variableCents:n.variableCents+L.variableCents,miscCents:n.miscCents+L.miscCents,totalCents:n.totalCents+L.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),ni=g.reduce((n,m)=>n+sa(m),0),ai=g[0]?_a(g[0],ce):0,br=ni+ai,yr=br-$a.totalCents,Cr=br-en.totalCents,xr=[{label:"Essen",budgetCents:$a.foodCents,actualCents:en.foodCents},{label:"Ausgehen",budgetCents:$a.goingOutCents,actualCents:en.goingOutCents},{label:"Fixkosten",budgetCents:$a.fixedCents,actualCents:en.fixedCents},{label:"Variable",budgetCents:$a.variableCents,actualCents:en.variableCents},{label:"Sonstige",budgetCents:$a.miscCents,actualCents:en.miscCents}],kr=Math.max(1,...xr.flatMap(n=>[n.budgetCents,n.actualCents])),ar=[{label:"Essen & Ausgehen",actualCents:en.foodCents+en.goingOutCents},{label:"Fixkosten",actualCents:en.fixedCents},{label:"Variable",actualCents:en.variableCents},{label:"Sonstige",actualCents:en.miscCents}],si=Math.max(1,...ar.map(n=>n.actualCents)),Ae=g.map(n=>{const m=ee(n),L=gn(n),z=sa(n),fe=G(n),Re=_a(n,ce),ht=z+Re;return{year:n.year,salaryIncomeCents:fe.salaryIncomeCents,freshIncomeCents:fe.freshIncomeCents,totalIncomeCents:fe.salaryIncomeCents+fe.freshIncomeCents,foodAndGoingOutCents:m.foodCents+m.goingOutCents,fixedCents:m.fixedCents,variableCents:m.variableCents,miscCents:m.miscCents,budgetTotalCents:L.totalCents,actualTotalCents:m.totalCents,effectiveIncomeCents:ht,plannedNetCents:ht-L.totalCents,actualNetCents:ht-m.totalCents}}),ri=Ae.reduce((n,m)=>n+m.totalIncomeCents,0),ii=Ae.reduce((n,m)=>n+m.salaryIncomeCents,0),$r=Math.max(1,...Ae.flatMap(n=>[Math.abs(n.plannedNetCents),Math.abs(n.actualNetCents)])),oi=Math.max(1,...Ae.map(n=>n.actualTotalCents)),li=Math.max(1,...Ae.map(n=>n.totalIncomeCents)),ci=Math.max(1,...Ae.map(n=>n.salaryIncomeCents)),wr=Math.max(1,...Ae.flatMap(n=>[n.totalIncomeCents,n.actualTotalCents])),Sr=Math.max(1,...Ae.flatMap(n=>[n.salaryIncomeCents,n.actualTotalCents])),ui=Math.max(1,...Ae.map(n=>n.foodAndGoingOutCents)),di=Math.max(1,...Ae.map(n=>n.fixedCents)),hi=Math.max(1,...Ae.map(n=>n.variableCents)),pi=Math.max(1,...Ae.map(n=>n.miscCents)),Qe=g.slice().sort((n,m)=>n.year-m.year).flatMap(n=>n.months.slice().sort((m,L)=>m.month-L.month).map(m=>{const L=vn(m),z=Ha(m),fe=Nt(m),ht=ce.get(ge(n.year,m.month))?.carriedFromPreviousCents??0,yt=z.salaryIncomeCents+z.freshIncomeCents+ht;return{year:n.year,month:m.month,monthLabel:ye(m.month),monthShortLabel:ye(m.month).slice(0,3),salaryIncomeCents:z.salaryIncomeCents,freshIncomeCents:z.freshIncomeCents,totalIncomeCents:z.salaryIncomeCents+z.freshIncomeCents,foodCents:L.foodCents,goingOutCents:L.goingOutCents,fixedCents:L.fixedCents,variableCents:L.variableCents,miscCents:L.miscCents,totalCents:L.totalCents,budgetCents:fe,effectiveIncomeCents:yt,plannedNetCents:yt-fe,actualNetCents:yt-L.totalCents}})),fi=[{label:"Gehalt",values:Qe.map(n=>n.salaryIncomeCents)},{label:"Einkommen",values:Qe.map(n=>n.totalIncomeCents)},{label:"Essen",values:Qe.map(n=>n.foodCents)},{label:"Ausgehen",values:Qe.map(n=>n.goingOutCents)},{label:"Fixkosten",values:Qe.map(n=>n.fixedCents)},{label:"Variable",values:Qe.map(n=>n.variableCents)},{label:"Sonstige",values:Qe.map(n=>n.miscCents)},{label:"Gesamt",values:Qe.map(n=>n.totalCents)},{label:"Budget",values:Qe.map(n=>n.budgetCents)},{label:"Saldo geplant",values:Qe.map(n=>n.plannedNetCents)},{label:"Saldo Ist",values:Qe.map(n=>n.actualNetCents)}],mi=(n,m)=>{if(n.length===0)return"-";const L=n.reduce((z,fe)=>z+fe,0);return f(m==="sum"?L:m==="mean"?Math.round(L/n.length):m==="min"?Math.min(...n):Math.max(...n))},vi=Qe.map(n=>`
          <tr>
            <td>${n.year}</td>
            <td>${n.monthLabel}</td>
            <td>${f(n.salaryIncomeCents)}</td>
            <td>${f(n.totalIncomeCents)}</td>
            <td>${f(n.foodCents)}</td>
            <td>${f(n.goingOutCents)}</td>
            <td>${f(n.fixedCents)}</td>
            <td>${f(n.variableCents)}</td>
            <td>${f(n.miscCents)}</td>
            <td>${f(n.totalCents)}</td>
            <td>${f(n.budgetCents)}</td>
            <td class="${Pe(n.plannedNetCents)}">${f(n.plannedNetCents)}</td>
            <td class="${Pe(n.actualNetCents)}">${f(n.actualNetCents)}</td>
          </tr>
        `).join(""),gi=[{label:"Summe",mode:"sum"},{label:"Mittelwert",mode:"mean"},{label:"Minimum",mode:"min"},{label:"Maximum",mode:"max"}].map(n=>`
          <tr class="monthly-stats-row monthly-stats-${n.mode}">
            <td colspan="2">${n.label}</td>
            ${fi.map(m=>`<td>${mi(m.values,n.mode)}</td>`).join("")}
          </tr>
        `).join(""),bi=Qe.length>0?`
          <article class="card">
            <h3>Alle Monate im Zeitraum</h3>
            <table class="monthly-overview-table">
              <thead>
                <tr>
                  <th>Jahr</th>
                  <th>Monat</th>
                  <th>Gehalt (€)</th>
                  <th>Einkommen (€)</th>
                  <th>Essen (€)</th>
                  <th>Ausgehen (€)</th>
                  <th>Fixkosten (€)</th>
                  <th>Variable (€)</th>
                  <th>Sonstige (€)</th>
                  <th>Gesamt (€)</th>
                  <th>Budget gesamt (€)</th>
                  <th>Saldo geplant (€)</th>
                  <th>Saldo Ist (€)</th>
                </tr>
              </thead>
              <tbody>
                ${vi}
                ${gi}
              </tbody>
            </table>

            <div class="monthly-line-chart-stack">
              ${pa({title:"Kosten nach Rechnungskreisen",subtitle:"Monatliche Summen über den gesamten Zeitraum.",rows:Qe,series:[{label:"Essen",color:"var(--danger-1)",values:Qe.map(n=>n.foodCents)},{label:"Ausgehen",color:"var(--danger-2)",values:Qe.map(n=>n.goingOutCents)},{label:"Fixkosten",color:"var(--text-muted)",values:Qe.map(n=>n.fixedCents)},{label:"Variable",color:"var(--primary-1)",values:Qe.map(n=>n.variableCents)},{label:"Sonstige",color:"var(--budget-under)",values:Qe.map(n=>n.miscCents)}]})}
              ${pa({title:"Einkommen über den gesamten Zeitraum",subtitle:"Gehalt, weiteres Einkommen und die Summe der monatlichen Einnahmen.",rows:Qe,series:[{label:"Gehalt",color:"var(--primary-1)",values:Qe.map(n=>n.salaryIncomeCents)},{label:"Einkommen ohne Gehalt",color:"var(--budget-under)",values:Qe.map(n=>n.freshIncomeCents)},{label:"Einkommen gesamt",color:"var(--text-muted)",values:Qe.map(n=>n.totalIncomeCents)}]})}
              ${pa({title:"Saldo über den gesamten Zeitraum",subtitle:"Geplanter und tatsächlicher Saldo je Monat.",rows:Qe,zeroLine:!0,series:[{label:"Saldo geplant",color:"var(--text-muted)",values:Qe.map(n=>n.plannedNetCents)},{label:"Saldo Ist",color:"var(--primary-1)",values:Qe.map(n=>n.actualNetCents)}]})}
            </div>
          </article>
        `:"",Er=new Map(Ae.map(n=>[n.year,n])),yi=typeof _=="number"?Ae.filter(n=>n.year<=_).slice(-5).map(n=>n.year):[],Ci=[{key:"salaryIncomeCents",label:"Gehalt",currentValueCents:Y,getYearValue:n=>n?.salaryIncomeCents??0},{key:"incomeCents",label:"Einkommen",currentValueCents:j,getYearValue:n=>n?.totalIncomeCents??0},{key:"foodAndGoingOutCents",label:"Essen & Trinken",currentValueCents:F.foodCents+F.goingOutCents,getYearValue:n=>n?.foodAndGoingOutCents??0},{key:"fixedCents",label:"Fixkosten",currentValueCents:F.fixedCents,getYearValue:n=>n?.fixedCents??0},{key:"variableCents",label:"Variable Kosten",currentValueCents:F.variableCents,getYearValue:n=>n?.variableCents??0},{key:"actualTotalCents",label:"Gesamtkosten",currentValueCents:F.totalCents,getYearValue:n=>n?.actualTotalCents??0},{key:"miscCents",label:"Sonstige",currentValueCents:F.miscCents,getYearValue:n=>n?.miscCents??0}].map(n=>{const m=E==null?null:n.getYearValue(Er.get(E.year-1)),L=m===null?null:n.currentValueCents-m,z=yi.map(xt=>({year:xt,valueCents:n.getYearValue(Er.get(xt))})),fe=Math.min(0,...z.map(xt=>xt.valueCents)),Re=Math.max(0,...z.map(xt=>xt.valueCents)),ht=Math.max(1,Re-fe),yt=360,tn=150,lt=14,Un=14,Jn=28,Ct=12,un=yt-Ct-Un,dn=tn-lt-Jn,Ls=xt=>z.length<=1?Ct+un/2:Ct+xt/(z.length-1)*un,Ns=xt=>lt+(Re-xt)/ht*dn,Hn=z.map((xt,Ra)=>({...xt,x:Ls(Ra),y:Ns(xt.valueCents)})),ds=Hn.map((xt,Ra)=>`${Ra===0?"M":"L"} ${xt.x.toFixed(1)} ${xt.y.toFixed(1)}`).join(" "),Ks=Hn.length>0?`${ds} L ${Hn[Hn.length-1]?.x.toFixed(1)} ${(lt+dn).toFixed(1)} L ${Hn[0]?.x.toFixed(1)} ${(lt+dn).toFixed(1)} Z`:"";return{...n,previousYearValueCents:m,diffCents:L,chartWidth:yt,chartHeight:tn,paddingBottom:Jn,points:Hn,linePath:ds,areaPath:Ks}}),xi=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${g.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${g.map(n=>`<option value="${n.year}" ${n.year===_?"selected":""}>${n.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${E?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(j)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(Y)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(X)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(F.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Pe(we)}">${f(we)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Pe(Ee)}">${f(Ee)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${gr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${ei}">${gr} ${ti}</span>
                    </div>
                  </header>
                  ${Wn?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${He(Wn.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${Pe(Wn.plannedNetCents)}" data-year-trend-active-net>${f(Wn.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(Wn.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(Wn.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${Pe(Wn.deltaCents)}" data-year-trend-active-delta>${Wn.deltaCents>=0?"+":""}${f(Wn.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${us} ${Os}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${E?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Qr.map(n=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${Va}" y1="${n.y.toFixed(1)}" x2="${us-Zs}" y2="${n.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${Va-10}" y="${(n.y+4).toFixed(1)}" text-anchor="end">${f(n.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${Va}" y1="${vr.toFixed(1)}" x2="${us-Zs}" y2="${vr.toFixed(1)}"></line>
                              ${fr?`<path class="year-trend-area" d="${fr}"></path>`:""}
                              ${nr?`<path class="year-trend-line" d="${nr}"></path>`:""}
                              ${Ln.map(n=>`
                                    <circle class="year-trend-node ${n.plannedNetCents<0?"is-negative":""}" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${n.x.toFixed(1)}" y="${Os-12}" text-anchor="middle">${He(n.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${Ln.map((n,m)=>`
                                    <button
                                      class="year-trend-point-hit ${m===Ln.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${n.leftPercent.toFixed(2)}%; top:${n.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${m===Ln.length-1?"1":"0"}"
                                      data-month-label="${He(n.monthLabel)}"
                                      data-net-cents="${n.plannedNetCents}"
                                      data-actual-net-cents="${n.actualNetCents}"
                                      data-income-cents="${n.effectiveIncomeCents}"
                                      data-expense-cents="${n.actualCostCents}"
                                      data-delta-cents="${n.deltaCents}"
                                      aria-label="${He(n.monthLabel)}: Kalkulierter Saldo ${f(n.plannedNetCents)}, Einkommen ${f(n.effectiveIncomeCents)}, Ausgaben ${f(n.actualCostCents)}"
                                      aria-pressed="${m===Ln.length-1?"true":"false"}"
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
                    ${re.map(n=>{const m=Mt(n.actualCents,n.budgetCents),L=Math.min(100,m),z=`${m.toFixed(0)}%`,fe=n.budgetCents-n.actualCents,Re=fe<0?"danger":fe>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${ba(n.budgetCents,n.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${L.toFixed(1)}%" title="${n.label}: ${f(n.actualCents)} von ${f(n.budgetCents)}">
                              <span class="circle-chart-value">${z}</span>
                            </div>
                            <div class="circle-chart-label">${n.label}</div>
                            <div class="circle-chart-meta muted">B ${f(n.budgetCents)} / I ${f(n.actualCents)}</div>
                            <div class="circle-chart-meta ${Re}">${fe>=0?"+":""}${f(fe)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(se.length,1)}, minmax(0, 1fr));">
                    ${se.map(n=>{const m=le(n.actualCostCents,et);return`
                          <div class="spark-bar" title="${ye(n.month)}: ${f(n.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                    ${se.map(n=>{const m=le(Math.abs(n.plannedNetCents),Yt),L=le(Math.abs(n.actualNetCents),Yt),z=n.plannedNetCents<0?"bar-negative":"bar-positive",fe=n.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${ye(n.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(n.plannedNetCents)} | Ist-Saldo: ${f(n.actualNetCents)}">
                              <div class="bar ${z}" style="width:${m}; opacity: 0.35;"></div>
                              <div class="bar ${fe}" style="width:${L}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Pe(n.plannedNetCents)}">B ${f(n.plannedNetCents)}</span>
                              <span class="${Pe(n.actualNetCents)}">I ${f(n.actualNetCents)}</span>
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
                  ${se.map(n=>`<tr>
                        <td>${ye(n.month)}</td>
                    <td>${f(n.salaryIncomeCents)}</td>
                    <td>${f(n.incomeCents)}</td>
                        <td>${f(n.plannedBudgetCents)}</td>
                        <td>${f(n.actualCostCents)}</td>
                        <td class="${Pe(n.plannedNetCents)}">${f(n.plannedNetCents)}</td>
                        <td class="${Pe(n.actualNetCents)}">${f(n.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>

              <section class="comparison-section">
                <div class="comparison-section-head">
                  <div>
                    <h4>Jahresvergleich nach Rechnungskreis</h4>
                    <p class="muted">Die Kacheln zeigen den ausgewählten Jahreswert, die Differenz zum Vorjahr und den Verlauf der letzten fünf verfügbaren Jahre.</p>
                  </div>
                </div>

                <div class="comparison-grid">
                  ${Ci.map(n=>{const m=n.diffCents===null?"":n.diffCents<0?"budget-under":n.diffCents>0?"danger":"",L=n.diffCents===null?"Vorjahreswert nicht vorhanden":`Δ ${n.diffCents>=0?"+":""}${f(n.diffCents)}`,z=E?.year??"";return`
                        <section class="chart-tile comparison-tile" aria-label="${He(n.label)} Jahresvergleich">
                          <header class="chart-tile-header comparison-tile-header">
                            <div>
                              <h4>${He(n.label)}</h4>
                              <div class="muted">${z}</div>
                            </div>
                          </header>
                          <div class="comparison-tile-summary">
                            <strong>${f(n.currentValueCents)}</strong>
                            <span class="comparison-tile-diff ${m}">${L}</span>
                          </div>
                          <div class="comparison-tile-chart" role="img" aria-label="${He(n.label)} Verlauf der letzten fünf Jahre">
                            <svg
                              class="comparison-line-svg"
                              viewBox="0 0 ${n.chartWidth} ${n.chartHeight}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="comparison-fill-${n.key}" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.26"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${n.linePath?`<path class="comparison-line-area" d="${n.areaPath}" fill="url(#comparison-fill-${n.key})"></path>`:""}
                              ${n.linePath?`<path class="comparison-line-path" d="${n.linePath}"></path>`:""}
                              ${n.points.map((fe,Re)=>`
                                    <circle class="comparison-line-point ${Re===n.points.length-1?"is-current":""}" cx="${fe.x.toFixed(1)}" cy="${fe.y.toFixed(1)}" r="4.5"></circle>
                                    <text class="comparison-line-year" x="${fe.x.toFixed(1)}" y="${n.chartHeight-10}" text-anchor="middle">${fe.year}</text>
                                  `).join("")}
                            </svg>
                          </div>
                          <div class="comparison-tile-footer muted">${n.previousYearValueCents===null?"Kein Vorjahreswert vorhanden":`Vorjahr: ${f(n.previousYearValueCents)}`}</div>
                        </section>
                      `}).join("")}
                </div>
              </section>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${g.map(n=>`<option value="${n.year}" ${n.year===_?"selected":""}>${n.year}</option>`).join("")}
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
                    ${se.map(n=>{const m=le(n.foodAndGoingOutCents,st);return`
                          <div class="spark-bar" title="${ye(n.month)}: ${f(n.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(se.length,1)}, minmax(0, 1fr));">
                    ${se.map(n=>{const m=le(n.foodCents,Gn);return`
                          <div class="spark-bar" title="${ye(n.month)}: ${f(n.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(se.length,1)}, minmax(0, 1fr));">
                    ${se.map(n=>{const m=le(n.goingOutCents,cs);return`
                          <div class="spark-bar" title="${ye(n.month)}: ${f(n.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${m}"><span class="spark-bar-fill-value">${f(n.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(ri)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(ii)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f($a.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(en.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Pe(yr)}">${f(yr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Pe(Cr)}">${f(Cr)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${ar.map(n=>`<div class="eval-row"><div class="eval-label">${n.label}</div><div class="eval-value">${f(n.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(en.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${xr.map(n=>{const m=le(n.budgetCents,kr),L=le(n.actualCents,kr),z=ba(n.budgetCents,n.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${n.label}</div>
                            <div class="bar-track" title="Budget: ${f(n.budgetCents)} | Ist: ${f(n.actualCents)}">
                              <div class="bar bar-budget" style="width:${m}"></div>
                              <div class="bar-marker" style="left:${m}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${z}" style="width:${L}"></div>
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
                    ${ar.map(n=>{const m=le(n.actualCents,si);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.actualTotalCents,oi);return`
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
                    ${Ae.map(n=>{const m=le(Math.abs(n.plannedNetCents),$r),L=le(Math.abs(n.actualNetCents),$r),z=n.plannedNetCents<0?"bar-negative":"bar-positive",fe=n.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${n.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(n.plannedNetCents)} | Ist-Saldo: ${f(n.actualNetCents)}">
                              <div class="bar ${z}" style="width:${m}; opacity: 0.35;"></div>
                              <div class="bar ${fe}" style="width:${L}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Pe(n.plannedNetCents)}">B ${f(n.plannedNetCents)}</span>
                              <span class="${Pe(n.actualNetCents)}">I ${f(n.actualNetCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.foodAndGoingOutCents,ui);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.fixedCents,di);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.variableCents,hi);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.miscCents,pi);return`
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
                  ${Ae.map(n=>`<tr>
                        <td>${n.year}</td>
                        <td>${f(n.salaryIncomeCents)}</td>
                        <td>${f(n.totalIncomeCents)}</td>
                        <td>${f(n.budgetTotalCents)}</td>
                        <td>${f(n.actualTotalCents)}</td>
                        <td class="${Pe(n.plannedNetCents)}">${f(n.plannedNetCents)}</td>
                        <td class="${Pe(n.actualNetCents)}">${f(n.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.totalIncomeCents,li);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.salaryIncomeCents,ci);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.totalIncomeCents,wr),L=le(n.actualTotalCents,wr);return`
                          <div class="spark-bar" title="${n.year}: Einkommen ${f(n.totalIncomeCents)} | Kosten ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${m}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${L}"><span class="spark-bar-fill-value">${f(n.actualTotalCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ae.length,1)}, minmax(0, 1fr));">
                    ${Ae.map(n=>{const m=le(n.salaryIncomeCents,Sr),L=le(n.actualTotalCents,Sr);return`
                          <div class="spark-bar" title="${n.year}: Gehalt ${f(n.salaryIncomeCents)} | Kosten ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${m}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${L}"><span class="spark-bar-fill-value">${f(n.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${n.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>
              ${bi}
            `}
      </div>
    `,ki=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,$i=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${S?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${S?Dt(S.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${S?"Änderung speichern":"Vorlage speichern"}</button>
          ${S?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,Br=h.annualVariableFixedTemplates.reduce((n,m)=>n+m.plannedCents,0),wi=Math.round(Br/12),Si=`
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
                <div class="eval-value budget-under">${f(Br)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(wi)}</div>
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
            ${h.annualVariableFixedTemplates.map(n=>{const m=oa(n.dueDateIso),L=m?ye(m.month):"-";return`<tr>
                    <td>${n.name}</td>
                    <td>${n.dueDateIso}</td>
                    <td>${L}</td>
                    <td>${f(n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${n.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,cn=h.evaluationCurrentResult,Ei=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${He(h.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${cn&&cn.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${cn?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${He(cn.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${cn.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${f(cn.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${f(cn.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${f(cn.monthAverageCents)}</div>
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
                  ${cn.yearRows.length>0?cn.yearRows.map(n=>`<tr>
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
                  ${cn.monthRows.length>0?cn.monthRows.map(n=>`<tr>
                              <td>${n.year}</td>
                              <td>${ye(n.month)}</td>
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
                      <strong>${He(n.keyword)}</strong>
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
    `,Mr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",Bi=h.topModal==="years"?ki:h.topModal==="fixed"?$i:h.topModal==="variable-fixed"?Si:h.topModal==="dashboard"?xi:h.topModal==="evaluation"?Ei:"";M.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${C?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Wr.map(n=>`<option value="${n}" ${h.theme===n?"selected":""}>${Wi(n)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Mr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Mr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Bi}
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
                  ${b.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${b.map(n=>{const m=new Date(n.timestampIso);return`<li><strong>${m.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${m.toLocaleString("de-DE")}</strong><span>${He(n.message)}</span></li>`}).join("")}</ol>`}
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
                  ${k.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${k.map(n=>{const m=new Date(n.timestampIso);return`<li><strong>${m.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${m.toLocaleString("de-DE")}</strong><span>${He(n.message)}</span></li>`}).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${i?`${ye(h.selectedMonth)} ${i.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(n,m)=>m+1).map(n=>`<option value="${n}" ${n===h.selectedMonth?"selected":""}>${ye(n)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${f(de)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${f(Fe)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(Le)}</strong>
              </div>
              <div class="compact-income-row ${tt}">
                <span>Übernahme aus Vormonat</span>
                <strong>${pe?f(D):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(qe)}</strong>
              </div>
            </section>

            <section class="compact-month-summary-row" aria-label="Monatssummen">
              <article class="compact-month-summary-box">
                <div class="compact-month-summary-label">Budget</div>
                <div class="compact-month-summary-hint">für diesen Monat</div>
                <div class="compact-month-summary-amount">${f(ot)}</div>
              </article>
              <article class="compact-month-summary-box">
                <div class="compact-month-summary-label">Ausgegeben</div>
                <div class="compact-month-summary-amount compact-month-summary-amount-spent ${a}">${r(c.totalCents)} <span class="eval-diff ${a}">(Diff ${Cs(s)})</span></div>
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
                  ${p}
                  ${l}
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
                  ${y}
                  ${u}
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
                    <div class="compact-cost-budget">${f(Xt)}</div>
                    <div class="compact-cost-actual ${nt}">${r(Ke)}</div>
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
                    <div class="compact-cost-budget">${f(O)}</div>
                    <div class="compact-cost-actual ${t}">${r(c.miscCents)}</div>
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
                  ${qt.map(n=>`
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
                  ${Zt.map(n=>{const m=le(Math.abs(n.valueCents),ln),L=n.valueCents>=0?"+":"",z=n.label==="Netto"?n.valueCents<0?"danger":n.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${n.label}</div>
                          <div class="bar-track" title="${f(n.valueCents)}">
                            <div class="bar ${n.className}" style="width:${m}"></div>
                          </div>
                          <div class="bar-meta"><span class="${z}">${L}${f(n.valueCents)}</span></div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Gesamtausgaben (Budget vs. Ist)">
                      ${w.map(n=>{const m=bt.get(n.month)?.totalBudgetCents??0,L=le(m,Fs),z=le(n.summary.totalCents,Fs);return`
                            <div class="spark-bar" title="${ye(n.month)}: Ist ${f(n.summary.totalCents)} € | Budget ${f(m)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${L}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${z}"><span class="spark-bar-fill-value">${f(n.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Essen und Ausgehen (Budget vs. Ist)">
                      ${w.map(n=>{const m=bt.get(n.month),L=(m?.foodBudgetCents??0)+(m?.goingOutBudgetCents??0),z=n.summary.foodCents+n.summary.goingOutCents,fe=le(L,Na),Re=le(z,Na);return`
                            <div class="spark-bar" title="${ye(n.month)}: Ist ${f(z)} € | Budget ${f(L)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${fe}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Re}"><span class="spark-bar-fill-value">${f(z)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Fixkosten (Budget vs. Ist)">
                      ${w.map(n=>{const m=bt.get(n.month)?.fixedBudgetCents??0,L=le(m,ls),z=le(n.summary.fixedCents,ls);return`
                            <div class="spark-bar" title="${ye(n.month)}: Ist ${f(n.summary.fixedCents)} € | Budget ${f(m)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${L}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${z}"><span class="spark-bar-fill-value">${f(n.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Variable Kosten (Budget vs. Ist)">
                      ${w.map(n=>{const m=bt.get(n.month)?.variableBudgetCents??0,L=le(m,In),z=le(n.summary.variableCents,In);return`
                            <div class="spark-bar" title="${ye(n.month)}: Ist ${f(n.summary.variableCents)} € | Budget ${f(m)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${L}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${z}"><span class="spark-bar-fill-value">${f(n.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Sonstige (Budget vs. Ist)">
                      ${w.map(n=>{const m=bt.get(n.month)?.miscBudgetCents??0,L=le(m,Ka),z=le(n.summary.miscCents,Ka);return`
                            <div class="spark-bar" title="${ye(n.month)}: Ist ${f(n.summary.miscCents)} € | Budget ${f(m)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${L}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${z}"><span class="spark-bar-fill-value">${f(n.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${ye(n.month).slice(0,3)}</div>
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
                    <div class="eval-value">${f(de)}</div>
                    <div class="eval-value">${f(it)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(Fe)}</div>
                    <div class="eval-value">${f(Ut)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(Le)}</div>
                    <div class="eval-value">${f(Jt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${tt}">${pe?f(D):"-"}</div>
                    <div class="eval-value muted">-</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(qe)}</div>
                    <div class="eval-value">${f(Ye)}</div>
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
                    <div class="eval-value">${ra(T,c.foodCents)}</div>
                    <div class="eval-value">${f(W)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${ra(I,c.goingOutCents)}</div>
                    <div class="eval-value">${f(U)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${ra(A,c.fixedCents)}</div>
                    <div class="eval-value">${f(oe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${ra(V,c.variableCents)}</div>
                    <div class="eval-value">${f(Se)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${ra(O,c.miscCents)}</div>
                    <div class="eval-value">${f(_e)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${ra(ot,c.totalCents)}</div>
                    <div class="eval-value">${f(at)}</div>
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
                    <div class="eval-value ${On}">${f(c.foodCents)}</div>
                    <div class="eval-value">${f(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Is}">${f(c.goingOutCents)}</div>
                    <div class="eval-value">${f(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${zn}">${f(c.fixedCents)}</div>
                    <div class="eval-value">${f(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${e}">${f(c.variableCents)}</div>
                    <div class="eval-value">${f(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${t}">${f(c.miscCents)}</div>
                    <div class="eval-value">${f(v.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${f(c.totalCents)}</div>
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
                    <div class="eval-value ${Pe(kn)}">${f(kn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Pe(Je)}">${f(Je)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Eigenkapital (Monat)</div>
                    <div class="eval-value ${Xe}">${f(ve)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${Pe(ut)}">${f(ut)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Vt}">${Ne}</div>
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
                ${w.map((n,m,L)=>{const z=i?ce.get(ge(i.year,n.month)):void 0,fe=z?.plannedBudgetCents??0,Re=z?.netCents??0,ht=P.get(n.month)??0,yt=q.get(n.month)??0,tn=Re<0?"danger":Re>0?"budget-under":"",lt=L[m-1],Un=lt?.summary.foodCents??null,Jn=lt?.summary.goingOutCents??null,Ct=lt?.summary.fixedCents??null,un=lt?.summary.variableCents??null,dn=lt?.summary.miscCents??null,Ls=lt?.summary.totalCents??null,Ns=lt!==void 0?P.get(lt.month)??0:null,Hn=lt!==void 0?q.get(lt.month)??0:null,ds=i&&lt?ce.get(ge(i.year,lt.month))?.plannedBudgetCents??0:null,Ks=Un===null?null:n.summary.foodCents-Un,xt=Jn===null?null:n.summary.goingOutCents-Jn,Ra=Ct===null?null:n.summary.fixedCents-Ct,_r=un===null?null:n.summary.variableCents-un,Pr=dn===null?null:n.summary.miscCents-dn,Ar=Ls===null?null:n.summary.totalCents-Ls,Tr=Ns===null?null:ht-Ns,Fr=Hn===null?null:yt-Hn,Ir=ds===null?null:fe-ds,ja=zt=>zt===null?"muted":zt>0?"danger":zt<0?"budget-under":"muted",Or=zt=>zt===null?"muted":zt>0?"budget-under":zt<0?"danger":"muted",Mi=zt=>zt===null?"muted":zt>0?"danger":zt<0?"budget-under":"muted",Xn=zt=>zt===null?"(Δ -)":`(Δ ${zt>0?"+":""}${f(zt)})`,Dr=i&&lt?ce.get(ge(i.year,lt.month))?.netCents??0:null,Ya=Dr===null?null:Re-Dr,_i=Ya===null?"(Δ -)":`(Δ ${Ya>0?"+":""}${f(Ya)})`,Pi=Ya===null?"muted":Ya<0?"danger":Ya>0?"budget-under":"muted",Lr=ht-n.summary.totalCents,Nr=yt-n.summary.totalCents,Ai=n.summary.totalCents>0?`${(ht/n.summary.totalCents*100).toFixed(1)} %`:"-",Ti=$n(ht,n.summary.totalCents);return`<tr>
                  <td>${ye(n.month)}</td>
                  <td>${f(n.summary.foodCents)} <span class="${ja(Ks)}">${Xn(Ks)}</span></td>
                  <td>${f(n.summary.goingOutCents)} <span class="${ja(xt)}">${Xn(xt)}</span></td>
                  <td>${f(n.summary.fixedCents)} <span class="${ja(Ra)}">${Xn(Ra)}</span></td>
                  <td>${f(n.summary.variableCents)} <span class="${ja(_r)}">${Xn(_r)}</span></td>
                  <td>${f(n.summary.miscCents)} <span class="${ja(Pr)}">${Xn(Pr)}</span></td>
                  <td>${f(n.summary.totalCents)} <span class="${ja(Ar)}">${Xn(Ar)}</span></td>
                  <td>${f(ht)} <span class="${Or(Tr)}">${Xn(Tr)}</span></td>
                  <td>${f(yt)} <span class="${Or(Fr)}">${Xn(Fr)}</span></td>
                  <td>${f(fe)} <span class="${Mi(Ir)}">${Xn(Ir)}</span></td>
                  <td class="${tn}">${f(Re)} <span class="${Pi}">${_i}</span></td>
                  <td class="${Pe(Lr)}">${f(Lr)}</td>
                  <td class="${Ti}">${Ai}</td>
                  <td class="${Pe(Nr)}">${f(Nr)}</td>
                </tr>`}).join("")}
                ${La}
                ${ca}
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
                    <td class="${tt}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${Dt(D)}" />
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
                  <strong>${f(de)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${f(Fe)} €</strong>
                </div>
                <div class="column-overview-row ${tt}">
                  <span>Übernahme Vormonat</span>
                  <strong>${o?`${f(D)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(qe)} €</strong>
                </div>
                <div class="column-overview-row ${dt}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${f(Bt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${rn(T,c.foodCents)}
                ${rn(I,c.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(Xt)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(Ke)} €</strong>
                  </div>
                  <div class="column-overview-row ${nt}">
                    <span>Diff</span>
                    <strong>${f(ze)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${Dt(T)}" ${o?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${Dt(I)}" ${o?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${o?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${o?o.days.map(n=>{const m=n.foodCents>0,L=n.goingOutCents>0,z=`${n.isoDate===d?"today-row":""} ${m||L?"day-has-entry":""}`.trim(),fe=`amount-input ${m?"day-input-has-value":""}`.trim(),Re=`amount-input ${L?"day-input-has-value":""}`.trim();return`<tr class="${z}">
                      <td>${new Date(n.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${fe}" data-day-food="${n.isoDate}" type="number" min="0" step="0.01" value="${Dt(n.foodCents)}" /></td>
                      <td><input class="${Re}" data-day-going="${n.isoDate}" type="number" min="0" step="0.01" value="${Dt(n.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${rn(A,c.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${Dt(A)}" ${o?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${n.id}" type="number" min="0" step="0.01" value="${Dt(n.plannedCents)}" /></td>
                    <td class="${vt(n.actualCents,n.plannedCents)}"><input class="amount-input" data-fixed-actual="${n.id}" type="number" min="0" step="0.01" value="${Dt(n.actualCents)}" /></td>
                    <td class="${vt(n.actualCents,n.plannedCents)}">${f(n.actualCents-n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${n.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${rn(V,c.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${Dt(V)}" ${o?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${n.id}" type="number" min="0" step="0.01" value="${Dt(n.budgetCents)}" /></td>
                    <td class="${vt(n.actualCents,n.budgetCents)}"><input class="amount-input" data-variable-position-actual="${n.id}" type="number" min="0" step="0.01" value="${Dt(n.actualCents)}" /></td>
                    <td class="${vt(n.actualCents,n.budgetCents)}">${f(n.actualCents-n.budgetCents)}</td>
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
              ${rn(O,c.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${Dt(O)}" ${o?"":"disabled"} />
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
            <button class="btn" id="backup-export-csv" type="button">Backup exportieren (CSV Monatsübersicht)</button>
            <button class="btn" id="backup-export-detailed-month-csv" type="button">Backup exportieren (CSV Detail Monat)</button>
            <button class="btn" id="backup-export-detailed-year-csv" type="button">Backup exportieren (CSV Detail Jahr)</button>
            <label>
              Backup importieren (JSON)
              <input id="backup-import" type="file" accept="application/json" />
            </label>
          </div>
          <p class="muted">Letztes verwendetes Backup: ${$}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),Ts(),Pt(),Ue(),Et()}function Ts(){const i=M.querySelector("#theme-select"),o=M.querySelector("#open-years-modal"),d=M.querySelector("#open-evaluation-modal"),c=M.querySelector("#open-fixed-modal"),v=M.querySelector("#open-variable-fixed-modal"),w=M.querySelector("#open-dashboard-modal"),T=M.querySelector("#panel-modal-close"),I=M.querySelector("#panel-modal-backdrop"),A=M.querySelector("#open-unexported-change-log"),V=M.querySelector("#open-persistent-audit-log"),O=M.querySelector("#unexported-change-log-close"),W=M.querySelector("#unexported-change-log-backup"),U=M.querySelector("#unexported-change-log-backdrop"),oe=M.querySelector("#persistent-audit-log-close"),Se=M.querySelector("#persistent-audit-log-backdrop"),_e=M.querySelector("#new-year"),de=M.querySelector("#create-year"),Fe=M.querySelector("#evaluation-query"),Le=M.querySelector("#run-evaluation"),ce=M.querySelector("#save-evaluation"),Ce=M.querySelector("#year-select"),te=M.querySelector("#month-select");i?.addEventListener("change",()=>{const P=i.value;Yr(P)&&Bn(P)}),o?.addEventListener("click",()=>{hn("years")}),d?.addEventListener("click",()=>{hn("evaluation")}),c?.addEventListener("click",()=>{hn("fixed")}),v?.addEventListener("click",()=>{hn("variable-fixed")}),w?.addEventListener("click",()=>{hn("dashboard")}),A?.addEventListener("click",()=>{pn()}),V?.addEventListener("click",()=>{wt()}),O?.addEventListener("click",()=>{At()}),W?.addEventListener("click",async()=>{try{await rs()}catch(P){console.error("Backup-Export fehlgeschlagen",P),Z("Backup konnte nicht exportiert werden.","error")}}),U?.addEventListener("click",P=>{P.target===U&&At()}),oe?.addEventListener("click",()=>{Tt()}),Se?.addEventListener("click",P=>{P.target===Se&&Tt()}),M.querySelectorAll("[data-dashboard-tab]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(h.dashboardTab=q,ae())})});const D=M.querySelector("#dashboard-year-select");D?.addEventListener("change",()=>{const P=Number.parseInt(D.value,10);Number.isInteger(P)&&(h.dashboardYear=P,ae())}),T?.addEventListener("click",()=>{Zn()}),I?.addEventListener("click",P=>{P.target===I&&Zn()}),h.topModal&&window.setTimeout(()=>{T?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{O?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{oe?.focus()},0),de?.addEventListener("click",async()=>{const P=Number.parseInt(_e?.value??"",10);if(!Number.isInteger(P)){alert("Bitte gültiges Jahr eingeben.");return}await ia(P)}),Le?.addEventListener("click",()=>{Yn(Fe?.value??"")}),Fe?.addEventListener("keydown",P=>{P.key==="Enter"&&(P.preventDefault(),Yn(Fe.value))}),ce?.addEventListener("click",async()=>{await Oa()}),M.querySelectorAll("[data-remove-saved-evaluation]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeSavedEvaluation;q&&await Pn(q)})}),Ce?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(Ce.value,10),h.selectedMonth=fn(),ae()}),te?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(te.value,10),ae()});const pe=M.querySelector("#fixed-template-name"),qe=M.querySelector("#fixed-template-amount"),pt=M.querySelector("#add-fixed-template"),Bt=M.querySelector("#cancel-fixed-template-edit"),ve=M.querySelector("#annual-variable-fixed-name"),ut=M.querySelector("#annual-variable-fixed-date"),Ne=M.querySelector("#annual-variable-fixed-amount"),tt=M.querySelector("#add-annual-variable-fixed-template");pt?.addEventListener("click",async()=>{const P=pe?.value??"",q=Ge(qe?.value??"0");await Qa(P,q),pe&&(pe.value=""),qe&&(qe.value="")}),Bt?.addEventListener("click",()=>{qn()}),tt?.addEventListener("click",async()=>{const P=ve?.value??"",q=ut?.value??"",Rt=Ge(Ne?.value??"0");await ws(P,q,Rt),ve&&(ve.value=""),ut&&(ut.value=""),Ne&&(Ne.value="")}),M.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeAnnualVariableFixedTemplate;q&&await la(q)})}),M.querySelectorAll("[data-edit-fixed-template]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.editFixedTemplate;q&&rt(q)})}),M.querySelectorAll("[data-remove-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixedTemplate;q&&await Cn(q)})}),M.querySelectorAll("[data-day-food]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),mt(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayFood;q&&await fa(q,"foodCents",Ge(P.value))})}),M.querySelectorAll("[data-day-going]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),mt(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayGoing;q&&await fa(q,"goingOutCents",Ge(P.value))})}),M.querySelectorAll("[data-fixed-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),mt(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedActual;q&&await Za(q,Ge(P.value))})}),M.querySelectorAll("[data-fixed-planned]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),mt(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedPlanned;q&&await es(q,Ge(P.value))})});const dt=M.querySelector("#fixed-budget");dt?.addEventListener("click",P=>{P.preventDefault(),dt.blur(),mt(dt)}),dt?.addEventListener("change",async()=>{await Es(Ge(dt.value))});const Xe=M.querySelector("#food-budget");Xe?.addEventListener("click",P=>{P.preventDefault(),Xe.blur(),mt(Xe)}),Xe?.addEventListener("change",async()=>{await $e(Ge(Xe.value))});const it=M.querySelector("#going-out-budget");it?.addEventListener("click",P=>{P.preventDefault(),it.blur(),mt(it)}),it?.addEventListener("change",async()=>{await Bs(Ge(it.value))}),M.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{zs()});const Jt=M.querySelector("#misc-budget");Jt?.addEventListener("click",P=>{P.preventDefault(),Jt.blur(),mt(Jt)}),Jt?.addEventListener("change",async()=>{await Ms(Ge(Jt.value))});const Ht=M.querySelector("#variable-budget");Ht?.addEventListener("click",P=>{P.preventDefault(),Ht.blur(),mt(Ht)}),Ht?.addEventListener("change",async()=>{await Ta(Ge(Ht.value))});const Ye=M.querySelector("#variable-position-name"),ot=M.querySelector("#variable-position-budget"),Xt=M.querySelector("#add-variable-position"),Ke=M.querySelector("#add-variable-position-recurring"),ze=M.querySelector("#import-variable-csv"),nt=M.querySelector("#import-variable-csv-input"),at=M.querySelector("#misc-description"),Je=M.querySelector("#misc-amount"),kn=M.querySelector("#add-misc"),Pe=M.querySelector("#add-misc-recurring"),$n=M.querySelector("#import-misc-csv"),Vt=M.querySelector("#import-misc-csv-input"),le=M.querySelector("#income-description"),Mt=M.querySelector("#income-source"),qt=M.querySelector("#income-amount"),ba=M.querySelector("#add-income"),Zt=M.querySelector("#add-income-recurring"),ln=M.querySelector("#fixed-cost-name"),An=M.querySelector("#fixed-cost-budget"),bt=M.querySelector("#add-fixed-cost"),Ot=M.querySelector("#import-fixed-csv"),_t=M.querySelector("#import-fixed-csv-input"),ya=M.querySelector("#clear-fixed-costs"),Tn=M.querySelector("#carryover-override");Tn?.addEventListener("click",P=>{P.preventDefault(),Tn.blur(),mt(Tn)}),Tn?.addEventListener("change",async()=>{const P=Tn.value;if(!P.trim()){await ts(null);return}await ts(Ge(P))}),bt?.addEventListener("click",async()=>{const P=Ge(An?.value??"0");await Rn(ln?.value??"",P),ln&&(ln.value=""),An&&(An.value="")}),Ot?.addEventListener("click",()=>{_t?.click()}),_t?.addEventListener("change",async()=>{const P=_t.files?.[0];if(P){try{await Fa(P)}catch(q){console.error("Fixkosten-CSV-Import fehlgeschlagen",q),Z("CSV konnte nicht importiert werden.","error")}_t.value=""}}),ya?.addEventListener("click",async()=>{await Aa()}),Xt?.addEventListener("click",async()=>{const P=Ge(ot?.value??"0");await ns(Ye?.value??"",P,!1),Ye&&(Ye.value=""),ot&&(ot.value="")}),Ke?.addEventListener("click",async()=>{const P=Ge(ot?.value??"0");await ns(Ye?.value??"",P,!0),Ye&&(Ye.value=""),ot&&(ot.value="")}),ze?.addEventListener("click",()=>{nt?.click()}),nt?.addEventListener("change",async()=>{const P=nt.files?.[0];if(P){try{await Ps(P)}catch(q){console.error("Variable-CSV-Import fehlgeschlagen",q),Z("CSV konnte nicht importiert werden.","error")}nt.value=""}}),kn?.addEventListener("click",async()=>{const P=Ge(Je?.value??"0");await jn(at?.value??"",P,!1),at&&(at.value=""),Je&&(Je.value="")}),Pe?.addEventListener("click",async()=>{const P=Ge(Je?.value??"0");await jn(at?.value??"",P,!0),at&&(at.value=""),Je&&(Je.value="")}),$n?.addEventListener("click",()=>{Vt?.click()}),Vt?.addEventListener("change",async()=>{const P=Vt.files?.[0];if(P){try{await as(P)}catch(q){console.error("Sonstiges-CSV-Import fehlgeschlagen",q),Z("CSV konnte nicht importiert werden.","error")}Vt.value=""}}),ba?.addEventListener("click",async()=>{const P=Ge(qt?.value??"0"),q=Mt?.value,Rt=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ss(le?.value??"",P,Rt,!1),le&&(le.value=""),qt&&(qt.value=""),Mt&&(Mt.value="salary")}),Zt?.addEventListener("click",async()=>{const P=Ge(qt?.value??"0"),q=Mt?.value,Rt=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ss(le?.value??"",P,Rt,!0),le&&(le.value=""),qt&&(qt.value=""),Mt&&(Mt.value="salary")}),M.querySelectorAll("[data-income-source]").forEach(P=>{P.addEventListener("change",async()=>{const q=P.dataset.incomeSource;if(!q)return;const Rt=P.value;await Hs(q,Rt==="balance"||Rt==="fresh"||Rt==="salary"?Rt:void 0)})}),M.querySelectorAll("[data-variable-position-budget]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),mt(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionBudget;q&&await je(q,Ge(P.value))})}),M.querySelectorAll("[data-variable-position-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),mt(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionActual;q&&await _s(q,Ge(P.value))})}),M.querySelectorAll("[data-remove-variable-position]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeVariablePosition;q&&await ma(q)})}),M.querySelectorAll("[data-move-variable-position-next]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.moveVariablePositionNext;q&&await va(q)})}),M.querySelectorAll("[data-remove-fixed]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixed;q&&await Ss(q)})}),M.querySelectorAll("[data-remove-income]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeIncome;q&&await Me(q)})}),M.querySelectorAll("[data-remove-misc]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeMisc;q&&await Ia(q)})});const Ca=M.querySelector("#backup-export"),xa=M.querySelector("#backup-export-csv"),Da=M.querySelector("#backup-export-detailed-month-csv"),ka=M.querySelector("#backup-export-detailed-year-csv"),Fn=M.querySelector("#backup-import");M.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Ca?.addEventListener("click",async()=>{await rs()}),xa?.addEventListener("click",async()=>{try{await Xs()}catch(P){console.error("CSV-Backup-Export fehlgeschlagen",P),Z("CSV-Backup konnte nicht exportiert werden.","error")}}),Da?.addEventListener("click",async()=>{try{await As("month")}catch(P){console.error("Detaillierter Monats-CSV-Export fehlgeschlagen",P),Z("Detailliertes Monats-CSV konnte nicht exportiert werden.","error")}}),ka?.addEventListener("click",async()=>{try{await As("year")}catch(P){console.error("Detaillierter Jahres-CSV-Export fehlgeschlagen",P),Z("Detailliertes Jahres-CSV konnte nicht exportiert werden.","error")}}),Fn?.addEventListener("change",async()=>{const P=Fn.files?.[0];if(P){try{await Kt(P)}catch(q){console.error("Backup-Import fehlgeschlagen",q),Z("Backup konnte nicht importiert werden.","error")}Fn.value=""}})}return{init:Lt}}const Ji="modulepreload",Hi=function(M){return"/habu26/"+M},Gr={},Xi=function(h,Ie,Q){let be=Promise.resolve();if(Ie&&Ie.length>0){let ct=function(Ze){return Promise.all(Ze.map(he=>Promise.resolve(he).then($t=>({status:"fulfilled",value:$t}),$t=>({status:"rejected",reason:$t}))))};var Be=ct;document.getElementsByTagName("link");const ue=document.querySelector("meta[property=csp-nonce]"),xe=ue?.nonce||ue?.getAttribute("nonce");be=ct(Ie.map(Ze=>{if(Ze=Hi(Ze),Ze in Gr)return;Gr[Ze]=!0;const he=Ze.endsWith(".css"),$t=he?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ze}"]${$t}`))return;const ft=document.createElement("link");if(ft.rel=he?"stylesheet":Ji,he||(ft.as="script"),ft.crossOrigin="",ft.href=Ze,xe&&ft.setAttribute("nonce",xe),document.head.appendChild(ft),he)return new Promise((Ue,Pt)=>{ft.addEventListener("load",Ue),ft.addEventListener("error",()=>Pt(new Error(`Unable to preload CSS for ${Ze}`)))})}))}function ie(ue){const xe=new Event("vite:preloadError",{cancelable:!0});if(xe.payload=ue,window.dispatchEvent(xe),!xe.defaultPrevented)throw ue}return be.then(ue=>{for(const xe of ue||[])xe.status==="rejected"&&ie(xe.reason);return h().catch(ie)})};function Qi(M={}){const{immediate:h=!1,onNeedRefresh:Ie,onOfflineReady:Q,onRegistered:be,onRegisteredSW:ie,onRegisterError:Be}=M;let ue,xe;const ct=async(he=!0)=>{await xe};async function Ze(){if("serviceWorker"in navigator){if(ue=await Xi(async()=>{const{Workbox:he}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:he}},[]).then(({Workbox:he})=>new he("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(he=>{Be?.(he)}),!ue)return;ue.addEventListener("activated",he=>{(he.isUpdate||he.isExternal)&&window.location.reload()}),ue.addEventListener("installed",he=>{he.isUpdate||Q?.()}),ue.register({immediate:h}).then(he=>{ie?ie("/habu26/sw.js",he):be?.(he)}).catch(he=>{Be?.(he)})}}return xe=Ze(),ct}function Zi(){Qi({immediate:!0})}const Ur=document.getElementById("app");if(!Ur)throw new Error("App-Container nicht gefunden.");Ui(Ur).init();Zi();
