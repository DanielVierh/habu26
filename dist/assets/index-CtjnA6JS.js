(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const fe of document.querySelectorAll('link[rel="modulepreload"]'))Q(fe);new MutationObserver(fe=>{for(const oe of fe)if(oe.type==="childList")for(const Ee of oe.addedNodes)Ee.tagName==="LINK"&&Ee.rel==="modulepreload"&&Q(Ee)}).observe(document,{childList:!0,subtree:!0});function Ae(fe){const oe={};return fe.integrity&&(oe.integrity=fe.integrity),fe.referrerPolicy&&(oe.referrerPolicy=fe.referrerPolicy),fe.crossOrigin==="use-credentials"?oe.credentials="include":fe.crossOrigin==="anonymous"?oe.credentials="omit":oe.credentials="same-origin",oe}function Q(fe){if(fe.ep)return;fe.ep=!0;const oe=Ae(fe);fetch(fe.href,oe)}})();const Si=[1,2,3,4,5,6,7,8,9,10,11,12];function us(){return new Date().toISOString()}function bt(B){const p=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${p}`}function Ei(B,p){const Ae=new Date(B,p,0).getDate(),Q=[];for(let fe=1;fe<=Ae;fe+=1){const oe=new Date(Date.UTC(B,p-1,fe));Q.push({isoDate:oe.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Q}function Bi(B){return B.map(p=>({id:bt("fixed"),templateId:p.id,name:p.name,plannedCents:p.plannedCents,actualCents:0}))}function Ir(B,p,Ae){const Q=p.reduce((oe,Ee)=>oe+Ee.plannedCents,0),fe=Si.map(oe=>({month:oe,days:Ei(B,oe),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Bi(p),fixedBudgetCents:Q,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:us(),templateVersion:Ae,months:fe}}function tr(B,p){return{id:bt("expense"),description:B,amountCents:p,createdAt:us()}}function Lr(B,p,Ae){const Q={id:bt("income"),description:B,amountCents:p,createdAt:us()};return Ae?{...Q,incomeSource:Ae}:Q}function Is(B,p){return B.toLocaleLowerCase("de-DE").includes(p)}function Nr(B,p,Ae,Q){const fe=p.trim(),oe=fe.toLocaleLowerCase("de-DE");if(!oe)return{id:bt("search_eval"),keyword:"",keywordNormalized:"",createdAt:us(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let Ee=0,ue=0,me=0,at=0,ze=0;const de=Math.max(1,Math.min(12,Q)),yt=[],ct=[];return B.slice().sort((qe,Mt)=>qe.year-Mt.year).forEach(qe=>{let Mt=0,dn=0,Wn=0,hn=0;qe.months.slice().sort((_t,Ct)=>_t.month-Ct.month).forEach(_t=>{let Ct=0,Pt=0;if(_t.fixedCosts.forEach(wt=>{Is(wt.name,oe)&&(Ct+=1,Pt+=wt.actualCents)}),_t.variableCosts.forEach(wt=>{Is(wt.description,oe)&&(Ct+=1,Pt+=wt.amountCents)}),_t.variablePositions.forEach(wt=>{Is(wt.name,oe)&&(Ct+=1,Pt+=wt.actualCents)}),_t.miscCosts.forEach(wt=>{Is(wt.description,oe)&&(Ct+=1,Pt+=wt.amountCents)}),Ct<=0)return;Mt+=Ct,dn+=Pt,(qe.year<Ae||qe.year===Ae&&_t.month<=de)&&(hn+=1,Wn+=Pt),Ee+=Ct,ue+=Pt,(qe.year<Ae||qe.year===Ae&&_t.month<=de)&&(at+=1,ze+=Pt),ct.push({year:qe.year,month:_t.month,hitCount:Ct,totalCents:Pt})}),!(Mt<=0)&&(qe.year===Ae&&(me+=dn),yt.push({year:qe.year,hitCount:Mt,totalCents:dn,monthsWithHits:hn,monthAverageCents:hn>0?Math.round(Wn/hn):0}))}),{id:bt("search_eval"),keyword:fe,keywordNormalized:oe,createdAt:us(),totalHitCount:Ee,totalCents:ue,currentYearCents:me,monthsWithHits:at,monthAverageCents:at>0?Math.round(ze/at):0,yearRows:yt,monthRows:ct}}var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _i(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var Ls={exports:{}},Pi=Ls.exports,Kr;function Ti(){return Kr||(Kr=1,(function(B,p){((Ae,Q)=>{B.exports=Q()})(Pi,function(){var Ae=function(e,t){return(Ae=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(a,s){a.__proto__=s}:function(a,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r])}))(e,t)},Q=function(){return(Q=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function fe(e,t,a){for(var s,r=0,l=t.length;r<l;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var oe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Mi,Ee=Object.keys,ue=Array.isArray;function me(e,t){return typeof t=="object"&&Ee(t).forEach(function(a){e[a]=t[a]}),e}typeof Promise>"u"||oe.Promise||(oe.Promise=Promise);var at=Object.getPrototypeOf,ze={}.hasOwnProperty;function de(e,t){return ze.call(e,t)}function yt(e,t){typeof t=="function"&&(t=t(at(e))),(typeof Reflect>"u"?Ee:Reflect.ownKeys)(t).forEach(function(a){qe(e,a,t[a])})}var ct=Object.defineProperty;function qe(e,t,a,s){ct(e,t,me(a&&de(a,"get")&&typeof a.get=="function"?{get:a.get,set:a.set,configurable:!0}:{value:a,configurable:!0,writable:!0},s))}function Mt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),qe(e.prototype,"constructor",e),{extend:yt.bind(null,e.prototype)}}}}var dn=Object.getOwnPropertyDescriptor,Wn=[].slice;function hn(e,t,a){return Wn.call(e,t,a)}function _t(e,t){return t(e)}function Ct(e){if(!e)throw new Error("Assertion Failed")}function Pt(e){oe.setImmediate?setImmediate(e):setTimeout(e,0)}function tn(e,t){if(typeof t=="string"&&de(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var a=[],s=0,r=t.length;s<r;++s){var l=tn(e,t[s]);a.push(l)}return a}var d,h=t.indexOf(".");return h===-1||(d=e[t.substr(0,h)])==null?void 0:tn(d,t.substr(h+1))}function $t(e,t,a){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Ct(typeof a!="string"&&"length"in a);for(var s=0,r=t.length;s<r;++s)$t(e,t[s],a[s])}else{var l,d,h=t.indexOf(".");h!==-1?(l=t.substr(0,h),(h=t.substr(h+1))===""?a===void 0?ue(e)&&!isNaN(parseInt(l))?e.splice(l,1):delete e[l]:e[l]=a:$t(d=(d=e[l])&&de(e,l)?d:e[l]={},h,a)):a===void 0?ue(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=a}}function wt(e){var t,a={};for(t in e)de(e,t)&&(a[t]=e[t]);return a}var Vs=[].concat;function ja(e){return Vs.apply([],e)}var qt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ja([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return oe[e]}),ds=new Set(qt.map(function(e){return oe[e]})),pa=null;function Tt(e){return pa=new WeakMap,e=(function t(a){if(!a||typeof a!="object")return a;var s=pa.get(a);if(s)return s;if(ue(a)){s=[],pa.set(a,s);for(var r=0,l=a.length;r<l;++r)s.push(t(a[r]))}else if(ds.has(a.constructor))s=a;else{var d,h=at(a);for(d in s=h===Object.prototype?{}:Object.create(h),pa.set(a,s),a)de(a,d)&&(s[d]=t(a[d]))}return s})(e),pa=null,e}var fa={}.toString;function Ya(e){return fa.call(e).slice(8,-1)}var za=typeof Symbol<"u"?Symbol.iterator:"@@iterator",qs=typeof za=="symbol"?function(e){var t;return e!=null&&(t=e[za])&&t.apply(e)}:function(){return null};function xn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var ut={};function Z(e){var t,a,s,r;if(arguments.length===1){if(ue(e))return e.slice();if(this===ut&&typeof e=="string")return[e];if(r=qs(e))for(a=[];!(s=r.next()).done;)a.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(a=new Array(t);t--;)a[t]=e[t]}}else for(t=arguments.length,a=new Array(t);t--;)a[t]=arguments[t];return a}var pn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},qt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ot=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(qt),hs={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function kn(e,t){this.name=e,this.message=t}function Ma(e,t){return e+". Errors: "+Object.keys(t).map(function(a){return t[a].toString()}).filter(function(a,s,r){return r.indexOf(a)===s}).join(`
`)}function ge(e,t,a,s){this.failures=t,this.failedKeys=s,this.successCount=a,this.message=Ma(e,t)}function Un(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(a){return t[a]}),this.failuresByPos=t,this.message=Ma(e,this.failures)}Mt(kn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Mt(ge).from(kn),Mt(Un).from(kn);var Rt=Ot.reduce(function(e,t){return e[t]=t+"Error",e},{}),ps=kn,ne=Ot.reduce(function(e,t){var a=t+"Error";function s(r,l){this.name=a,r?typeof r=="string"?(this.message="".concat(r).concat(l?`
 `+l:""),this.inner=l||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=hs[t]||a,this.inner=null)}return Mt(s).from(ps),e[t]=s,e},{}),Dn=(ne.Syntax=SyntaxError,ne.Type=TypeError,ne.Range=RangeError,qt.reduce(function(e,t){return e[t+"Error"]=ne[t],e},{}));qt=Ot.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ne[t]),e},{});function Fe(){}function rt(e){return e}function Rs(e,t){return e==null||e===rt?t:function(a){return t(e(a))}}function $n(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function js(e,t){return e===Fe?t:function(){var a=e.apply(this,arguments),s=(a!==void 0&&(arguments[0]=a),this.onsuccess),r=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?$n(s,this.onsuccess):s),r&&(this.onerror=this.onerror?$n(r,this.onerror):r),l!==void 0?l:a}}function fs(e,t){return e===Fe?t:function(){e.apply(this,arguments);var a=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),a&&(this.onsuccess=this.onsuccess?$n(a,this.onsuccess):a),s&&(this.onerror=this.onerror?$n(s,this.onerror):s)}}function Ys(e,t){return e===Fe?t:function(r){var s=e.apply(this,arguments),r=(me(r,s),this.onsuccess),l=this.onerror,d=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?$n(r,this.onsuccess):r),l&&(this.onerror=this.onerror?$n(l,this.onerror):l),s===void 0?d===void 0?void 0:d:me(s,d)}}function vs(e,t){return e===Fe?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Ga(e,t){return e===Fe?t:function(){var a=e.apply(this,arguments);if(a&&typeof a.then=="function"){for(var s=this,r=arguments.length,l=new Array(r);r--;)l[r]=arguments[r];return a.then(function(){return t.apply(s,l)})}return t.apply(this,arguments)}}qt.ModifyError=ge,qt.DexieError=kn,qt.BulkError=Un;var nn=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ms(e){nn=e}var Jn={},gs=100,Hn=typeof Promise>"u"?[]:(Ot=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Hn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),at(Hn),Ot]:[Ot,at(Ot),Ot]),Ot=Hn[0],qn=Hn[1],qn=qn&&qn.then,fn=Ot&&Ot.constructor,Xn=!!Hn[2],an=function(e,t){va.push([e,t]),wn&&(queueMicrotask(zs),wn=!1)},_a=!0,wn=!0,Te=[],Pa=[],Sn=rt,jt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Fe,pgp:!1,env:{},finalize:Fe},te=jt,va=[],vn=0,Qn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=te;if(typeof e!="function"){if(e!==Jn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&dt(this,this._value)}else this._state=null,this._value=null,++t.ref,(function a(s,r){try{r(function(l){if(s._state===null){if(l===s)throw new TypeError("A promise cannot be resolved with itself.");var d=s._lib&&Xt();l&&typeof l.then=="function"?a(s,function(h,k){l instanceof z?l._then(h,k):l.then(h,k)}):(s._state=!0,s._value=l,Ua(s)),d&&Zn()}},dt.bind(null,s))}catch(l){dt(s,l)}})(this,e)}var ma={get:function(){var e=te,t=aa;function a(s,r){var l=this,d=!e.global&&(e!==te||t!==aa),h=d&&!Bn(),k=new z(function(E,x){En(l,new Wa(Cs(s,e,d,h),Cs(r,e,d,h),E,x,e))});return this._consoleTask&&(k._consoleTask=this._consoleTask),k}return a.prototype=Jn,a},set:function(e){qe(this,"then",e&&e.prototype===Jn?ma:{get:function(){return e},set:ma.set})}};function Wa(e,t,a,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=a,this.reject=s,this.psd=r}function dt(e,t){var a,s;Pa.push(t),e._state===null&&(a=e._lib&&Xt(),t=Sn(t),e._state=!1,e._value=t,s=e,Te.some(function(r){return r._value===s._value})||Te.push(s),Ua(e),a)&&Zn()}function Ua(e){var t=e._listeners;e._listeners=[];for(var a=0,s=t.length;a<s;++a)En(e,t[a]);var r=e._PSD;--r.ref||r.finalize(),vn===0&&(++vn,an(function(){--vn==0&&ea()},[]))}function En(e,t){if(e._state===null)e._listeners.push(t);else{var a=e._state?t.onFulfilled:t.onRejected;if(a===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++vn,an(ga,[a,e,t])}}function ga(e,t,a){try{var s,r=t._value;!t._state&&Pa.length&&(Pa=[]),s=nn&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||Pa.indexOf(r)!==-1||(l=>{for(var d=Te.length;d;)if(Te[--d]._value===l._value)return Te.splice(d,1)})(t),a.resolve(s)}catch(l){a.reject(l)}finally{--vn==0&&ea(),--a.psd.ref||a.psd.finalize()}}function zs(){On(jt,function(){Xt()&&Zn()})}function Xt(){var e=_a;return wn=_a=!1,e}function Zn(){var e,t,a;do for(;0<va.length;)for(e=va,va=[],a=e.length,t=0;t<a;++t){var s=e[t];s[0].apply(null,s[1])}while(0<va.length);wn=_a=!0}function ea(){for(var e=Te,t=(Te=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),Qn.slice(0)),a=t.length;a;)t[--a]()}function Re(e){return new z(Jn,!1,e)}function ke(e,t){var a=te;return function(){var s=Xt(),r=te;try{return Mn(a,!0),e.apply(this,arguments)}catch(l){t&&t(l)}finally{Mn(r,!1),s&&Zn()}}}yt(z.prototype,{then:ma,_then:function(e,t){En(this,new Wa(null,null,e,t,te))},catch:function(e){var t,a;return arguments.length===1?this.then(null,e):(t=e,a=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?a:Re)(s)}):this.then(null,function(s){return(s&&s.name===t?a:Re)(s)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return Re(t)})})},timeout:function(e,t){var a=this;return e<1/0?new z(function(s,r){var l=setTimeout(function(){return r(new ne.Timeout(t))},e);a.then(s,r).finally(clearTimeout.bind(null,l))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&qe(z.prototype,Symbol.toStringTag,"Dexie.Promise"),jt.env=ys(),yt(z,{all:function(){var e=Z.apply(null,arguments).map(ya);return new z(function(t,a){e.length===0&&t([]);var s=e.length;e.forEach(function(r,l){return z.resolve(r).then(function(d){e[l]=d,--s||t(e)},a)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,a){e.then(t,a)}):new z(Jn,!0,e)},reject:Re,race:function(){var e=Z.apply(null,arguments).map(ya);return new z(function(t,a){e.map(function(s){return z.resolve(s).then(t,a)})})},PSD:{get:function(){return te},set:function(e){return te=e}},totalEchoes:{get:function(){return aa}},newPSD:ht,usePSD:On,scheduler:{get:function(){return an},set:function(e){an=e}},rejectionMapper:{get:function(){return Sn},set:function(e){Sn=e}},follow:function(e,t){return new z(function(a,s){return ht(function(r,l){var d=te;d.unhandleds=[],d.onunhandled=l,d.finalize=$n(function(){var h,k=this;h=function(){k.unhandleds.length===0?r():l(k.unhandleds[0])},Qn.push(function E(){h(),Qn.splice(Qn.indexOf(E),1)}),++vn,an(function(){--vn==0&&ea()},[])},d.finalize),e()},t,a,s)})}}),fn&&(fn.allSettled&&qe(z,"allSettled",function(){var e=Z.apply(null,arguments).map(ya);return new z(function(t){e.length===0&&t([]);var a=e.length,s=new Array(a);e.forEach(function(r,l){return z.resolve(r).then(function(d){return s[l]={status:"fulfilled",value:d}},function(d){return s[l]={status:"rejected",reason:d}}).then(function(){return--a||t(s)})})})}),fn.any&&typeof AggregateError<"u"&&qe(z,"any",function(){var e=Z.apply(null,arguments).map(ya);return new z(function(t,a){e.length===0&&a(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(l,d){return z.resolve(l).then(function(h){return t(h)},function(h){r[d]=h,--s||a(new AggregateError(r))})})})}),fn.withResolvers)&&(z.withResolvers=fn.withResolvers);var re={awaits:0,echoes:0,id:0},ta=0,na=[],ba=0,aa=0,bs=0;function ht(e,d,a,s){var r=te,l=Object.create(r),d=(l.parent=r,l.ref=0,l.global=!1,l.id=++bs,jt.env,l.env=Xn?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},d&&me(l,d),++r.ref,l.finalize=function(){--this.parent.ref||this.parent.finalize()},On(l,e,a,s));return l.ref===0&&l.finalize(),d}function xt(){return re.id||(re.id=++ta),++re.awaits,re.echoes+=gs,re.id}function Bn(){return!!re.awaits&&(--re.awaits==0&&(re.id=0),re.echoes=re.awaits*gs,!0)}function ya(e){return re.echoes&&e&&e.constructor===fn?(xt(),e.then(function(t){return Bn(),t},function(t){return Bn(),Ze(t)})):e}function Gs(){var e=na[na.length-1];na.pop(),Mn(e,!1)}function Mn(e,t){var a,s,r=te;(t?!re.echoes||ba++&&e===te:!ba||--ba&&e===te)||queueMicrotask(t?(function(l){++aa,re.echoes&&--re.echoes!=0||(re.echoes=re.awaits=re.id=0),na.push(te),Mn(l,!0)}).bind(null,e):Gs),e!==te&&(te=e,r===jt&&(jt.env=ys()),Xn)&&(a=jt.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(oe,"Promise",s.PromiseProp),a.all=s.all,a.race=s.race,a.resolve=s.resolve,a.reject=s.reject,s.allSettled&&(a.allSettled=s.allSettled),s.any)&&(a.any=s.any)}function ys(){var e=oe.Promise;return Xn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(oe,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function On(e,t,a,s,r){var l=te;try{return Mn(e,!0),t(a,s,r)}finally{Mn(l,!1)}}function Cs(e,t,a,s){return typeof e!="function"?e:function(){var r=te;a&&xt(),Mn(t,!0);try{return e.apply(this,arguments)}finally{Mn(r,!1),s&&queueMicrotask(Bn)}}}function Ja(e){Promise===fn&&re.echoes===0?ba===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+qn).indexOf("[native code]")===-1&&(xt=Bn=Fe);var Ze=z.reject,In="￿",mn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ha="String expected.",sa=[],Ta="__dbnames",Xa="readonly",Qa="readwrite";function Ln(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var xs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Aa(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=Tt(t))[e],t}}function ks(){throw ne.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function be(e,t){try{var a=$s(e),s=$s(t);if(a!==s)return a==="Array"?1:s==="Array"?-1:a==="binary"?1:s==="binary"?-1:a==="string"?1:s==="string"?-1:a==="Date"?1:s!=="Date"?NaN:-1;switch(a){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=ra(e),l=ra(t),d=r.length,h=l.length,k=d<h?d:h,E=0;E<k;++E)if(r[E]!==l[E])return r[E]<l[E]?-1:1;return d===h?0:d<h?-1:1;case"Array":for(var x=e,b=t,$=x.length,y=b.length,C=$<y?$:y,m=0;m<C;++m){var _=be(x[m],b[m]);if(_!==0)return _}return $===y?0:$<y?-1:1}}catch{}return NaN}function $s(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ya(e))==="ArrayBuffer")?"binary":t}function ra(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Ca(e,t,a){var s=e.schema.yProps;return s?(t&&0<a.numFailures&&(t=t.filter(function(r,l){return!a.failures[l]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return a})):a}ws.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var a=t.add;if(ue(a))return fe(fe([],ue(e)?e:[],!0),a).sort();if(typeof a=="number")return(Number(e)||0)+a;if(typeof a=="bigint")try{return BigInt(e)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(t.remove!==void 0){var s=t.remove;if(ue(s))return ue(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return a=(a=t.replacePrefix)==null?void 0:a[0],a&&typeof e=="string"&&e.startsWith(a)?t.replacePrefix[1]+e.substring(a.length):e};var ia=ws;function ws(e){this["@@propmod"]=e}function Ss(e,t){for(var a=Ee(t),s=a.length,r=!1,l=0;l<s;++l){var d=a[l],h=t[d],k=tn(e,d);h instanceof ia?($t(e,d,h.execute(k)),r=!0):k!==h&&($t(e,d,h),r=!0)}return r}Ie.prototype._trans=function(e,t,a){var s=this._tx||te.trans,r=this.name,l=nn&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function d(E,x,b){if(b.schema[r])return t(b.idbtrans,b);throw new ne.NotFound("Table "+r+" not part of transaction")}var h=Xt();try{var k=s&&s.db._novip===this.db._novip?s===te.trans?s._promise(e,d,a):ht(function(){return s._promise(e,d,a)},{trans:s,transless:te.transless||te}):(function E(x,b,$,y){if(x.idbdb&&(x._state.openComplete||te.letThrough||x._vip)){var C=x._createTransaction(b,$,x._dbSchema);try{C.create(),x._state.PR1398_maxLoop=3}catch(m){return m.name===Rt.InvalidState&&x.isOpen()&&0<--x._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),x.close({disableAutoOpen:!1}),x.open().then(function(){return E(x,b,$,y)})):Ze(m)}return C._promise(b,function(m,_){return ht(function(){return te.trans=C,y(m,_,C)})}).then(function(m){if(b==="readwrite")try{C.idbtrans.commit()}catch{}return b==="readonly"?m:C._completion.then(function(){return m})})}if(x._state.openComplete)return Ze(new ne.DatabaseClosed(x._state.dbOpenError));if(!x._state.isBeingOpened){if(!x._state.autoOpen)return Ze(new ne.DatabaseClosed);x.open().catch(Fe)}return x._state.dbReadyPromise.then(function(){return E(x,b,$,y)})})(this.db,e,[this.name],d);return l&&(k._consoleTask=l,k=k.catch(function(E){return console.trace(E),Ze(E)})),k}finally{h&&Zn()}},Ie.prototype.get=function(e,t){var a=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ze(new ne.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return a.core.get({trans:s,key:e}).then(function(r){return a.hook.reading.fire(r)})}).then(t)},Ie.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ue(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Ee(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(h){if(h.compound&&t.every(function(E){return 0<=h.keyPath.indexOf(E)})){for(var k=0;k<t.length;++k)if(t.indexOf(h.keyPath[k])===-1)return!1;return!0}return!1}).sort(function(h,k){return h.keyPath.length-k.keyPath.length})[0];if(a&&this.db._maxKey!==In)return d=a.keyPath.slice(0,t.length),this.where(d).equals(d.map(function(h){return e[h]}));!a&&nn&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(h,k){return be(h,k)===0}var d=t.reduce(function(x,k){var E=x[0],x=x[1],b=s[k],$=e[k];return[E||b,E||!b?Ln(x,b&&b.multi?function(y){return y=tn(y,k),ue(y)&&y.some(function(C){return r($,C)})}:function(y){return r($,tn(y,k))}):x]},[null,null]),l=d[0],d=d[1];return l?this.where(l.name).equals(e[l.keyPath]).filter(d):a?this.filter(d):this.where(t).equals("")},Ie.prototype.filter=function(e){return this.toCollection().and(e)},Ie.prototype.count=function(e){return this.toCollection().count(e)},Ie.prototype.offset=function(e){return this.toCollection().offset(e)},Ie.prototype.limit=function(e){return this.toCollection().limit(e)},Ie.prototype.each=function(e){return this.toCollection().each(e)},Ie.prototype.toArray=function(e){return this.toCollection().toArray(e)},Ie.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ie.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ue(e)?"[".concat(e.join("+"),"]"):e))},Ie.prototype.reverse=function(){return this.toCollection().reverse()},Ie.prototype.mapToClass=function(e){for(var t=this.db,a=this.name,s=((this.schema.mappedClass=e).prototype instanceof ks&&(e=(d=>{var h=x,k=d;if(typeof k!="function"&&k!==null)throw new TypeError("Class extends value "+String(k)+" is not a constructor or null");function E(){this.constructor=h}function x(){return d!==null&&d.apply(this,arguments)||this}return Ae(h,k),h.prototype=k===null?Object.create(k):(E.prototype=k.prototype,new E),Object.defineProperty(x.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),x.prototype.table=function(){return a},x})(e)),new Set),r=e.prototype;r;r=at(r))Object.getOwnPropertyNames(r).forEach(function(d){return s.add(d)});function l(d){if(!d)return d;var h,k=Object.create(e.prototype);for(h in d)if(!s.has(h))try{k[h]=d[h]}catch{}return k}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=l,this.hook("reading",l),e},Ie.prototype.defineClass=function(){return this.mapToClass(function(e){me(this,e)})},Ie.prototype.add=function(e,t){var a=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,d=e;return l&&r&&(d=Aa(l)(e)),this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"add",keys:t!=null?[t]:null,values:[d]})}).then(function(h){return h.numFailures?z.reject(h.failures[0]):h.lastResult}).then(function(h){if(l)try{$t(e,l,h)}catch{}return h})},Ie.prototype.upsert=function(e,t){var a=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return a.core.get({trans:r,key:e}).then(function(l){var d=l??{};return Ss(d,t),s&&$t(d,s,e),a.core.mutate({trans:r,type:"put",values:[d],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(h){return h.numFailures?z.reject(h.failures[0]):!!l})})})},Ie.prototype.update=function(e,t){return typeof e!="object"||ue(e)?this.where(":id").equals(e).modify(t):(e=tn(e,this.schema.primKey.keyPath))===void 0?Ze(new ne.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Ie.prototype.put=function(e,t){var a=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,d=e;return l&&r&&(d=Aa(l)(e)),this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"put",values:[d],keys:t!=null?[t]:null})}).then(function(h){return h.numFailures?z.reject(h.failures[0]):h.lastResult}).then(function(h){if(l)try{$t(e,l,h)}catch{}return h})},Ie.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:[e]}).then(function(s){return Ca(t,[e],s)}).then(function(s){return s.numFailures?z.reject(s.failures[0]):void 0})})},Ie.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:xs}).then(function(a){return Ca(e,null,a)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},Ie.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(a){return t.core.getMany({keys:e,trans:a}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Ie.prototype.bulkAdd=function(e,t,a){var s=this,r=Array.isArray(t)?t:void 0,l=(a=a||(r?void 0:t))?a.allKeys:void 0;return this._trans("readwrite",function(d){var h=s.schema.primKey,E=h.auto,h=h.keyPath;if(h&&r)throw new ne.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ne.InvalidArgument("Arguments objects and keys must have the same length");var k=e.length,E=h&&E?e.map(Aa(h)):e;return s.core.mutate({trans:d,type:"add",keys:r,values:E,wantResults:l}).then(function(x){var b=x.numFailures,$=x.failures;if(b===0)return l?x.results:x.lastResult;throw new Un("".concat(s.name,".bulkAdd(): ").concat(b," of ").concat(k," operations failed"),$)})})},Ie.prototype.bulkPut=function(e,t,a){var s=this,r=Array.isArray(t)?t:void 0,l=(a=a||(r?void 0:t))?a.allKeys:void 0;return this._trans("readwrite",function(d){var h=s.schema.primKey,E=h.auto,h=h.keyPath;if(h&&r)throw new ne.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ne.InvalidArgument("Arguments objects and keys must have the same length");var k=e.length,E=h&&E?e.map(Aa(h)):e;return s.core.mutate({trans:d,type:"put",keys:r,values:E,wantResults:l}).then(function(x){var b=x.numFailures,$=x.failures;if(b===0)return l?x.results:x.lastResult;throw new Un("".concat(s.name,".bulkPut(): ").concat(b," of ").concat(k," operations failed"),$)})})},Ie.prototype.bulkUpdate=function(e){var t=this,a=this.core,s=e.map(function(d){return d.key}),r=e.map(function(d){return d.changes}),l=[];return this._trans("readwrite",function(d){return a.getMany({trans:d,keys:s,cache:"clone"}).then(function(h){var k=[],E=[],x=(e.forEach(function(b,$){var y=b.key,C=b.changes,m=h[$];if(m){for(var _=0,M=Object.keys(C);_<M.length;_++){var S=M[_],F=C[S];if(S===t.schema.primKey.keyPath){if(be(F,y)!==0)throw new ne.Constraint("Cannot update primary key in bulkUpdate()")}else $t(m,S,F)}l.push($),k.push(y),E.push(m)}}),k.length);return a.mutate({trans:d,type:"put",keys:k,values:E,updates:{keys:s,changeSpecs:r}}).then(function(b){var $=b.numFailures,y=b.failures;if($===0)return x;for(var C=0,m=Object.keys(y);C<m.length;C++){var _,M=m[C],S=l[Number(M)];S!=null&&(_=y[M],delete y[M],y[S]=_)}throw new Un("".concat(t.name,".bulkUpdate(): ").concat($," of ").concat(x," operations failed"),y)})})})},Ie.prototype.bulkDelete=function(e){var t=this,a=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Ca(t,e,r)})}).then(function(s){var r=s.numFailures,l=s.failures;if(r===0)return s.lastResult;throw new Un("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(a," operations failed"),l)})};var Es=Ie;function Ie(){}function oa(e){function t(d,h){if(h){for(var k=arguments.length,E=new Array(k-1);--k;)E[k-1]=arguments[k];return a[d].subscribe.apply(null,E),e}if(typeof d=="string")return a[d]}var a={};t.addEventType=l;for(var s=1,r=arguments.length;s<r;++s)l(arguments[s]);return t;function l(d,h,k){var E,x;if(typeof d!="object")return h=h||vs,x={subscribers:[],fire:k=k||Fe,subscribe:function(b){x.subscribers.indexOf(b)===-1&&(x.subscribers.push(b),x.fire=h(x.fire,b))},unsubscribe:function(b){x.subscribers=x.subscribers.filter(function($){return $!==b}),x.fire=x.subscribers.reduce(h,k)}},a[d]=t[d]=x;Ee(E=d).forEach(function(b){var $=E[b];if(ue($))l(b,E[b][0],E[b][1]);else{if($!=="asap")throw new ne.InvalidArgument("Invalid event config");var y=l(b,rt,function(){for(var C=arguments.length,m=new Array(C);C--;)m[C]=arguments[C];y.subscribers.forEach(function(_){Pt(function(){_.apply(null,m)})})})}})}}function Nn(e,t){return Mt(t).from({prototype:e}),t}function la(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Za(e,t){e.filter=Ln(e.filter,t)}function es(e,t,a){var s=e.replayFilter;e.replayFilter=s?function(){return Ln(s(),t())}:t,e.justLimit=a&&!s}function Fa(e,t){if(e.isPrimKey)return t.primaryKey;var a=t.getIndexByKeyPath(e.index);if(a)return a;throw new ne.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function ts(e,t,a){var s=Fa(e,t.schema);return t.openCursor({trans:a,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function Da(e,t,a,s){var r,l,d=e.replayFilter?Ln(e.filter,e.replayFilter()):e.filter;return e.or?(r={},l=function(h,k,E){var x,b;d&&!d(k,E,function($){return k.stop($)},function($){return k.fail($)})||((b=""+(x=k.primaryKey))=="[object ArrayBuffer]"&&(b=""+new Uint8Array(x)),de(r,b))||(r[b]=!0,t(h,k,E))},Promise.all([e.or._iterate(l,a),Bs(ts(e,s,a),e.algorithm,l,!e.keysOnly&&e.valueMapper)])):Bs(ts(e,s,a),Ln(e.algorithm,d),t,!e.keysOnly&&e.valueMapper)}function Bs(e,t,a,s){var r=ke(s?function(l,d,h){return a(s(l),d,h)}:a);return e.then(function(l){if(l)return l.start(function(){var d=function(){return l.continue()};t&&!t(l,function(h){return d=h},function(h){l.stop(h),d=Fe},function(h){l.fail(h),d=Fe})||r(l.value,l,function(h){return d=h}),d()})})}Be.prototype._read=function(e,t){var a=this._ctx;return a.error?a.table._trans(null,Ze.bind(null,a.error)):a.table._trans("readonly",e).then(t)},Be.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ze.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Be.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Ln(t.algorithm,e)},Be.prototype._iterate=function(e,t){return Da(this._ctx,e,t,this._ctx.table.core)},Be.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return e&&me(a,e),t._ctx=a,t},Be.prototype.raw=function(){return this._ctx.valueMapper=null,this},Be.prototype.each=function(e){var t=this._ctx;return this._read(function(a){return Da(t,e,a,t.table.core)})},Be.prototype.count=function(e){var t=this;return this._read(function(a){var s,r=t._ctx,l=r.table.core;return la(r,!0)?l.count({trans:a,query:{index:Fa(r,l.schema),range:r.range}}).then(function(d){return Math.min(d,r.limit)}):(s=0,Da(r,function(){return++s,!1},a,l).then(function(){return s}))}).then(e)},Be.prototype.sortBy=function(e,t){var a=e.split(".").reverse(),s=a[0],r=a.length-1;function l(k,E){return E?l(k[a[E]],E-1):k[s]}var d=this._ctx.dir==="next"?1:-1;function h(k,E){return be(l(k,r),l(E,r))*d}return this.toArray(function(k){return k.sort(h)}).then(t)},Be.prototype.toArray=function(e){var t=this;return this._read(function(a){var s,r,l,d=t._ctx;return d.dir==="next"&&la(d,!0)&&0<d.limit?(s=d.valueMapper,r=Fa(d,d.table.core.schema),d.table.core.query({trans:a,limit:d.limit,values:!0,query:{index:r,range:d.range}}).then(function(h){return h=h.result,s?h.map(s):h})):(l=[],Da(d,function(h){return l.push(h)},a,d.table.core).then(function(){return l}))},e)},Be.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,la(t)?es(t,function(){var a=e;return function(s,r){return a===0||(a===1?--a:r(function(){s.advance(a),a=0}),!1)}}):es(t,function(){var a=e;return function(){return--a<0}})),this},Be.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),es(this._ctx,function(){var t=e;return function(a,s,r){return--t<=0&&s(r),0<=t}},!0),this},Be.prototype.until=function(e,t){return Za(this._ctx,function(a,s,r){return!e(a.value)||(s(r),t)}),this},Be.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},Be.prototype.last=function(e){return this.reverse().first(e)},Be.prototype.filter=function(e){var t;return Za(this._ctx,function(a){return e(a.value)}),(t=this._ctx).isMatch=Ln(t.isMatch,e),this},Be.prototype.and=function(e){return this.filter(e)},Be.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Be.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Be.prototype.desc=function(){return this.reverse()},Be.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,s){e(s.key,s)})},Be.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Be.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,s){e(s.primaryKey,s)})},Be.prototype.keys=function(e){var t=this._ctx,a=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){a.push(r.key)}).then(function(){return a}).then(e)},Be.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&la(t,!0)&&0<t.limit)return this._read(function(s){var r=Fa(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var a=[];return this.each(function(s,r){a.push(r.primaryKey)}).then(function(){return a}).then(e)},Be.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Be.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},Be.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Be.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Za(this._ctx,function(s){var s=s.primaryKey.toString(),r=de(e,s);return e[s]=!0,!r})),this},Be.prototype.modify=function(e){var t=this,a=this._ctx;return this._write(function(s){function r(m,_){var M=_.failures;$+=m-_.numFailures;for(var S=0,F=Ee(M);S<F.length;S++){var N=F[S];b.push(M[N])}}var l=typeof e=="function"?e:function(m){return Ss(m,e)},d=a.table.core,x=d.schema.primaryKey,h=x.outbound,k=x.extractKey,E=200,x=t.db._options.modifyChunkSize,b=(x&&(E=typeof x=="object"?x[d.name]||x["*"]||200:x),[]),$=0,y=[],C=e===ns;return t.clone().primaryKeys().then(function(m){function _(S){var F=Math.min(E,m.length-S),N=m.slice(S,S+F);return(C?Promise.resolve([]):d.getMany({trans:s,keys:N,cache:"immutable"})).then(function(j){var Y=[],K=[],J=h?[]:null,G=C?N:[];if(!C)for(var R=0;R<F;++R){var X=j[R],we={value:Tt(X),primKey:m[S+R]};l.call(we,we.value,we)!==!1&&(we.value==null?G.push(m[S+R]):h||be(k(X),k(we.value))===0?(K.push(we.value),h&&J.push(m[S+R])):(G.push(m[S+R]),Y.push(we.value)))}return Promise.resolve(0<Y.length&&d.mutate({trans:s,type:"add",values:Y}).then(function(ce){for(var se in ce.failures)G.splice(parseInt(se),1);r(Y.length,ce)})).then(function(){return(0<K.length||M&&typeof e=="object")&&d.mutate({trans:s,type:"put",keys:J,values:K,criteria:M,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(ce){return r(K.length,ce)})}).then(function(){return(0<G.length||M&&C)&&d.mutate({trans:s,type:"delete",keys:G,criteria:M,isAdditionalChunk:0<S}).then(function(ce){return Ca(a.table,G,ce)}).then(function(ce){return r(G.length,ce)})}).then(function(){return m.length>S+F&&_(S+E)})})}var M=la(a)&&a.limit===1/0&&(typeof e!="function"||C)&&{index:a.index,range:a.range};return _(0).then(function(){if(0<b.length)throw new ge("Error modifying one or more objects",b,$,y);return m.length})})})},Be.prototype.delete=function(){var e=this._ctx,t=e.range;return!la(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(ns):this._write(function(a){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:a,query:{index:s,range:r}}).then(function(l){return e.table.core.mutate({trans:a,type:"deleteRange",range:r}).then(function(k){var h=k.failures,k=k.numFailures;if(k)throw new ge("Could not delete some values",Object.keys(h).map(function(E){return h[E]}),l-k);return l-k})})})};var Ms=Be;function Be(){}var ns=function(e,t){return t.value=null};function Ws(e,t){return e<t?-1:e===t?0:1}function _s(e,t){return t<e?-1:e===t?0:1}function It(e,t,a){return e=e instanceof o?new e.Collection(e):e,e._ctx.error=new(a||TypeError)(t),e}function ca(e){return new e.Collection(e,function(){return i("")}).limit(0)}function ae(y,t,a,s){var r,l,d,h,k,E,x,b=a.length;if(!a.every(function(m){return typeof m=="string"}))return It(y,Ha);function $(m){r=m==="next"?function(M){return M.toUpperCase()}:function(M){return M.toLowerCase()},l=m==="next"?function(M){return M.toLowerCase()}:function(M){return M.toUpperCase()},d=m==="next"?Ws:_s;var _=a.map(function(M){return{lower:l(M),upper:r(M)}}).sort(function(M,S){return d(M.lower,S.lower)});h=_.map(function(M){return M.upper}),k=_.map(function(M){return M.lower}),x=(E=m)==="next"?"":s}$("next");var y=new y.Collection(y,function(){return _n(h[0],k[b-1]+s)}),C=(y._ondirectionchange=function(m){$(m)},0);return y._addAlgorithm(function(m,_,M){var S=m.key;if(typeof S=="string"){var F=l(S);if(t(F,k,C))return!0;for(var N=null,j=C;j<b;++j){var Y=((K,J,G,R,X,we)=>{for(var ce=Math.min(K.length,R.length),se=-1,pe=0;pe<ce;++pe){var Je=J[pe];if(Je!==R[pe])return X(K[pe],G[pe])<0?K.substr(0,pe)+G[pe]+G.substr(pe+1):X(K[pe],R[pe])<0?K.substr(0,pe)+R[pe]+G.substr(pe+1):0<=se?K.substr(0,se)+J[se]+G.substr(se+1):null;X(K[pe],Je)<0&&(se=pe)}return ce<R.length&&we==="next"?K+G.substr(K.length):ce<K.length&&we==="prev"?K.substr(0,G.length):se<0?null:K.substr(0,se)+R[se]+G.substr(se+1)})(S,F,h[j],k[j],d,E);Y===null&&N===null?C=j+1:(N===null||0<d(N,Y))&&(N=Y)}_(N!==null?function(){m.continue(N+x)}:M)}return!1}),y}function _n(e,t,a,s){return{type:2,lower:e,upper:t,lowerOpen:a,upperOpen:s}}function i(e){return{type:1,lower:e,upper:e}}Object.defineProperty(u.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),u.prototype.between=function(e,t,a,s){a=a!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(a||s)&&(!a||!s)?ca(this):new this.Collection(this,function(){return _n(e,t,!a,!s)})}catch{return It(this,mn)}},u.prototype.equals=function(e){return e==null?It(this,mn):new this.Collection(this,function(){return i(e)})},u.prototype.above=function(e){return e==null?It(this,mn):new this.Collection(this,function(){return _n(e,void 0,!0)})},u.prototype.aboveOrEqual=function(e){return e==null?It(this,mn):new this.Collection(this,function(){return _n(e,void 0,!1)})},u.prototype.below=function(e){return e==null?It(this,mn):new this.Collection(this,function(){return _n(void 0,e,!1,!0)})},u.prototype.belowOrEqual=function(e){return e==null?It(this,mn):new this.Collection(this,function(){return _n(void 0,e)})},u.prototype.startsWith=function(e){return typeof e!="string"?It(this,Ha):this.between(e,e+In,!0,!0)},u.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):ae(this,function(t,a){return t.indexOf(a[0])===0},[e],In)},u.prototype.equalsIgnoreCase=function(e){return ae(this,function(t,a){return t===a[0]},[e],"")},u.prototype.anyOfIgnoreCase=function(){var e=Z.apply(ut,arguments);return e.length===0?ca(this):ae(this,function(t,a){return a.indexOf(t)!==-1},e,"")},u.prototype.startsWithAnyOfIgnoreCase=function(){var e=Z.apply(ut,arguments);return e.length===0?ca(this):ae(this,function(t,a){return a.some(function(s){return t.indexOf(s)===0})},e,In)},u.prototype.anyOf=function(){var e,t,a=this,s=Z.apply(ut,arguments),r=this._cmp;try{s.sort(r)}catch{return It(this,mn)}return s.length===0?ca(this):((e=new this.Collection(this,function(){return _n(s[0],s[s.length-1])}))._ondirectionchange=function(l){r=l==="next"?a._ascending:a._descending,s.sort(r)},t=0,e._addAlgorithm(function(l,d,h){for(var k=l.key;0<r(k,s[t]);)if(++t===s.length)return d(h),!1;return r(k,s[t])===0||(d(function(){l.continue(s[t])}),!1)}),e)},u.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},u.prototype.noneOf=function(){var e=Z.apply(ut,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return It(this,mn)}var t=e.reduce(function(a,s){return a?a.concat([[a[a.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},u.prototype.inAnyRange=function(e,M){var a=this,s=this._cmp,r=this._ascending,l=this._descending,d=this._min,h=this._max;if(e.length===0)return ca(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return It(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ne.InvalidArgument);var k=!M||M.includeLowers!==!1,E=M&&M.includeUppers===!0,x,b=r;function $(S,F){return b(S[0],F[0])}try{(x=e.reduce(function(S,F){for(var N=0,j=S.length;N<j;++N){var Y=S[N];if(s(F[0],Y[1])<0&&0<s(F[1],Y[0])){Y[0]=d(Y[0],F[0]),Y[1]=h(Y[1],F[1]);break}}return N===j&&S.push(F),S},[])).sort($)}catch{return It(this,mn)}var y=0,C=E?function(S){return 0<r(S,x[y][1])}:function(S){return 0<=r(S,x[y][1])},m=k?function(S){return 0<l(S,x[y][0])}:function(S){return 0<=l(S,x[y][0])},_=C,M=new this.Collection(this,function(){return _n(x[0][0],x[x.length-1][1],!k,!E)});return M._ondirectionchange=function(S){b=S==="next"?(_=C,r):(_=m,l),x.sort($)},M._addAlgorithm(function(S,F,N){for(var j,Y=S.key;_(Y);)if(++y===x.length)return F(N),!1;return!C(j=Y)&&!m(j)||(a._cmp(Y,x[y][1])===0||a._cmp(Y,x[y][0])===0||F(function(){b===r?S.continue(x[y][0]):S.continue(x[y][1])}),!1)}),M},u.prototype.startsWithAnyOf=function(){var e=Z.apply(ut,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?ca(this):this.inAnyRange(e.map(function(t){return[t,t+In]})):It(this,"startsWithAnyOf() only works with strings")};var o=u;function u(){}function c(e){return ke(function(t){return v(t),e(t.target.error),!1})}function v(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var w="storagemutated",T="x-storagemutated-1",D=oa(null,w),A=(L.prototype._lock=function(){return Ct(!te.global),++this._reculock,this._reculock!==1||te.global||(te.lockOwnerFor=this),this},L.prototype._unlock=function(){if(Ct(!te.global),--this._reculock==0)for(te.global||(te.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{On(e[1],e[0])}catch{}}return this},L.prototype._locked=function(){return this._reculock&&te.lockOwnerFor!==this},L.prototype.create=function(e){var t=this;if(this.mode){var a=this.db.idbdb,s=this.db._state.dbOpenError;if(Ct(!this.idbtrans),!e&&!a)switch(s&&s.name){case"DatabaseClosedError":throw new ne.DatabaseClosed(s);case"MissingAPIError":throw new ne.MissingAPI(s.message,s);default:throw new ne.OpenFailed(s)}if(!this.active)throw new ne.TransactionInactive;Ct(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||a).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ke(function(r){v(r),t._reject(e.error)}),e.onabort=ke(function(r){v(r),t.active&&t._reject(new ne.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ke(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&D.storagemutated.fire(e.mutatedParts)})}return this},L.prototype._promise=function(e,t,a){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ze(new ne.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(l,d){r._blockedFuncs.push([function(){r._promise(e,t,a).then(l,d)},te])}):a?ht(function(){var l=new z(function(d,h){r._lock();var k=t(d,h,r);k&&k.then&&k.then(d,h)});return l.finally(function(){return r._unlock()}),l._lib=!0,l}):((s=new z(function(l,d){var h=t(l,d,r);h&&h.then&&h.then(l,d)}))._lib=!0,s):Ze(new ne.TransactionInactive)},L.prototype._root=function(){return this.parent?this.parent._root():this},L.prototype.waitFor=function(e){var t,a=this._root(),s=z.resolve(e),r=(a._waitingFor?a._waitingFor=a._waitingFor.then(function(){return s}):(a._waitingFor=s,a._waitingQueue=[],t=a.idbtrans.objectStore(a.storeNames[0]),(function l(){for(++a._spinCount;a._waitingQueue.length;)a._waitingQueue.shift()();a._waitingFor&&(t.get(-1/0).onsuccess=l)})()),a._waitingFor);return new z(function(l,d){s.then(function(h){return a._waitingQueue.push(ke(l.bind(null,h)))},function(h){return a._waitingQueue.push(ke(d.bind(null,h)))}).finally(function(){a._waitingFor===r&&(a._waitingFor=null)})})},L.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ne.Abort))},L.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(de(t,e))return t[e];var a=this.schema[e];if(a)return(a=new this.db.Table(e,a,this)).core=this.db.core.table(e),t[e]=a;throw new ne.NotFound("Table "+e+" not part of transaction")},L);function L(){}function I(e,t,a,s,r,l,d,h){return{name:e,keyPath:t,unique:a,multi:s,auto:r,compound:l,src:(a&&!d?"&":"")+(s?"*":"")+(r?"++":"")+U(t),type:h}}function U(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function W(e,t,a){return{name:e,primKey:t,indexes:a,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},a.reduce(function(r,l,d){return l=s(l,d),l&&(r[l[0]]=l[1]),r},{}))};var s}var ie=function(e){try{return e.only([[]]),ie=function(){return[[]]},[[]]}catch{return ie=function(){return In},In}};function Se(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(a){return a[t]}:function(a){return tn(a,t)}:function(a){return tn(a,e)};var t}function Le(e){return[].slice.call(e)}var he=0;function _e(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function et(e,t,k){function s(C){if(C.type===3)return null;if(C.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var b=C.lower,$=C.upper,y=C.lowerOpen,C=C.upperOpen;return b===void 0?$===void 0?null:t.upperBound($,!!C):$===void 0?t.lowerBound(b,!!y):t.bound(b,$,!!y,!!C)}function r(x){var b,$=x.name;return{name:$,schema:x,mutate:function(y){var C=y.trans,m=y.type,_=y.keys,M=y.values,S=y.range;return new Promise(function(F,N){F=ke(F);var j=C.objectStore($),Y=j.keyPath==null,K=m==="put"||m==="add";if(!K&&m!=="delete"&&m!=="deleteRange")throw new Error("Invalid operation type: "+m);var J,G=(_||M||{length:1}).length;if(_&&M&&_.length!==M.length)throw new Error("Given keys array must have same length as given values array.");if(G===0)return F({numFailures:0,failures:{},results:[],lastResult:void 0});function R(Qe){++ce,v(Qe)}var X=[],we=[],ce=0;if(m==="deleteRange"){if(S.type===4)return F({numFailures:ce,failures:we,results:[],lastResult:void 0});S.type===3?X.push(J=j.clear()):X.push(J=j.delete(s(S)))}else{var Y=K?Y?[M,_]:[M,null]:[_,null],se=Y[0],pe=Y[1];if(K)for(var Je=0;Je<G;++Je)X.push(J=pe&&pe[Je]!==void 0?j[m](se[Je],pe[Je]):j[m](se[Je])),J.onerror=R;else for(Je=0;Je<G;++Je)X.push(J=j[m](se[Je])),J.onerror=R}function Ht(Qe){Qe=Qe.target.result,X.forEach(function(kt,Qt){return kt.error!=null&&(we[Qt]=kt.error)}),F({numFailures:ce,failures:we,results:m==="delete"?_:X.map(function(kt){return kt.result}),lastResult:Qe})}J.onerror=function(Qe){R(Qe),Ht(Qe)},J.onsuccess=Ht})},getMany:function(y){var C=y.trans,m=y.keys;return new Promise(function(_,M){_=ke(_);for(var S,F=C.objectStore($),N=m.length,j=new Array(N),Y=0,K=0,J=function(X){X=X.target,j[X._pos]=X.result,++K===Y&&_(j)},G=c(M),R=0;R<N;++R)m[R]!=null&&((S=F.get(m[R]))._pos=R,S.onsuccess=J,S.onerror=G,++Y);Y===0&&_(j)})},get:function(y){var C=y.trans,m=y.key;return new Promise(function(_,M){_=ke(_);var S=C.objectStore($).get(m);S.onsuccess=function(F){return _(F.target.result)},S.onerror=c(M)})},query:(b=h,function(y){return new Promise(function(C,m){C=ke(C);var _,M,S,K=y.trans,F=y.values,N=y.limit,Y=y.query,j=N===1/0?void 0:N,J=Y.index,Y=Y.range,K=K.objectStore($),K=J.isPrimaryKey?K:K.index(J.name),J=s(Y);if(N===0)return C({result:[]});b?((Y=F?K.getAll(J,j):K.getAllKeys(J,j)).onsuccess=function(G){return C({result:G.target.result})},Y.onerror=c(m)):(_=0,M=!F&&"openKeyCursor"in K?K.openKeyCursor(J):K.openCursor(J),S=[],M.onsuccess=function(G){var R=M.result;return!R||(S.push(F?R.value:R.primaryKey),++_===N)?C({result:S}):void R.continue()},M.onerror=c(m))})}),openCursor:function(y){var C=y.trans,m=y.values,_=y.query,M=y.reverse,S=y.unique;return new Promise(function(F,N){F=ke(F);var K=_.index,j=_.range,Y=C.objectStore($),Y=K.isPrimaryKey?Y:Y.index(K.name),K=M?S?"prevunique":"prev":S?"nextunique":"next",J=!m&&"openKeyCursor"in Y?Y.openKeyCursor(s(j),K):Y.openCursor(s(j),K);J.onerror=c(N),J.onsuccess=ke(function(G){var R,X,we,ce,se=J.result;se?(se.___id=++he,se.done=!1,R=se.continue.bind(se),X=(X=se.continuePrimaryKey)&&X.bind(se),we=se.advance.bind(se),ce=function(){throw new Error("Cursor not stopped")},se.trans=C,se.stop=se.continue=se.continuePrimaryKey=se.advance=function(){throw new Error("Cursor not started")},se.fail=ke(N),se.next=function(){var pe=this,Je=1;return this.start(function(){return Je--?pe.continue():pe.stop()}).then(function(){return pe})},se.start=function(pe){function Je(){if(J.result)try{pe()}catch(Qe){se.fail(Qe)}else se.done=!0,se.start=function(){throw new Error("Cursor behind last entry")},se.stop()}var Ht=new Promise(function(Qe,kt){Qe=ke(Qe),J.onerror=c(kt),se.fail=kt,se.stop=function(Qt){se.stop=se.continue=se.continuePrimaryKey=se.advance=ce,Qe(Qt)}});return J.onsuccess=ke(function(Qe){J.onsuccess=Je,Je()}),se.continue=R,se.continuePrimaryKey=X,se.advance=we,Je(),Ht},F(se)):F(null)},N)})},count:function(y){var C=y.query,m=y.trans,_=C.index,M=C.range;return new Promise(function(S,F){var N=m.objectStore($),N=_.isPrimaryKey?N:N.index(_.name),j=s(M),j=j?N.count(j):N.count();j.onsuccess=ke(function(Y){return S(Y.target.result)}),j.onerror=c(F)})}}}l=k,d=Le((k=e).objectStoreNames);var l,k={schema:{name:k.name,tables:d.map(function(x){return l.objectStore(x)}).map(function(x){var b=x.keyPath,$=x.autoIncrement,C=ue(b),y={},C={name:x.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:b==null,compound:C,keyPath:b,autoIncrement:$,unique:!0,extractKey:Se(b)},indexes:Le(x.indexNames).map(function(m){return x.index(m)}).map(function(S){var F=S.name,_=S.unique,M=S.multiEntry,S=S.keyPath,F={name:F,compound:ue(S),keyPath:S,unique:_,multiEntry:M,extractKey:Se(S)};return y[_e(S)]=F}),getIndexByKeyPath:function(m){return y[_e(m)]}};return y[":id"]=C.primaryKey,b!=null&&(y[_e(b)]=C.primaryKey),C})},hasGetAll:0<d.length&&"getAll"in l.objectStore(d[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},d=k.schema,h=k.hasGetAll,k=d.tables.map(r),E={};return k.forEach(function(x){return E[x.name]=x}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(x){if(E[x])return E[x];throw new Error("Table '".concat(x,"' not found"))},MIN_KEY:-1/0,MAX_KEY:ie(t),schema:d}}function ye(e,t,a,s){return a=a.IDBKeyRange,t=et(t,a,s),{dbcore:e.dbcore.reduce(function(r,l){return l=l.create,Q(Q({},r),l(r))},t)}}function Ce(e,t){var a=t.db,a=ye(e._middlewares,a,e._deps,t);e.core=a.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(l){return l.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function ee(e,t,a,s){a.forEach(function(r){var l=s[r];t.forEach(function(d){var h=(function k(E,x){return dn(E,x)||(E=at(E))&&k(E,x)})(d,r);(!h||"value"in h&&h.value===void 0)&&(d===e.Transaction.prototype||d instanceof e.Transaction?qe(d,r,{get:function(){return this.table(r)},set:function(k){ct(this,r,{value:k,writable:!0,configurable:!0,enumerable:!0})}}):d[r]=new e.Table(r,l))})})}function O(e,t){t.forEach(function(a){for(var s in a)a[s]instanceof e.Table&&delete a[s]})}function Yt(e,t){return e._cfg.version-t._cfg.version}function At(e,t,a,s){var r=e._dbSchema,l=(a.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=W("$meta",st("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),d=(l.create(a),l._completion.catch(s),l._reject.bind(l)),h=te.transless||te;ht(function(){if(te.trans=l,te.transless=h,t!==0)return Ce(e,a),E=t,((k=l).storeNames.includes("$meta")?k.table("$meta").get("version").then(function(x){return x??E}):z.resolve(E)).then(function(_){var b=e,$=_,y=l,C=a,m=[],_=b._versions,M=b._dbSchema=Ge(0,b.idbdb,C);return(_=_.filter(function(S){return S._cfg.version>=$})).length===0?z.resolve():(_.forEach(function(S){m.push(function(){var F,N,j,Y=M,K=S._cfg.dbschema,J=(He(b,Y,C),He(b,K,C),M=b._dbSchema=K,Lt(Y,K)),G=(J.add.forEach(function(R){$e(C,R[0],R[1].primKey,R[1].indexes)}),J.change.forEach(function(R){if(R.recreate)throw new ne.Upgrade("Not yet support for changing primary key");var X=C.objectStore(R.name);R.add.forEach(function(we){return je(X,we)}),R.change.forEach(function(we){X.deleteIndex(we.name),je(X,we)}),R.del.forEach(function(we){return X.deleteIndex(we)})}),S._cfg.contentUpgrade);if(G&&S._cfg.version>$)return Ce(b,C),y._memoizedTables={},F=wt(K),J.del.forEach(function(R){F[R]=Y[R]}),O(b,[b.Transaction.prototype]),ee(b,[b.Transaction.prototype],Ee(F),F),y.schema=F,(N=pn(G))&&xt(),K=z.follow(function(){var R;(j=G(y))&&N&&(R=Bn.bind(null,null),j.then(R,R))}),j&&typeof j.then=="function"?z.resolve(j):K.then(function(){return j})}),m.push(function(F){var N,j,Y=S._cfg.dbschema;N=Y,j=F,[].slice.call(j.db.objectStoreNames).forEach(function(K){return N[K]==null&&j.db.deleteObjectStore(K)}),O(b,[b.Transaction.prototype]),ee(b,[b.Transaction.prototype],b._storeNames,b._dbSchema),y.schema=b._dbSchema}),m.push(function(F){b.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(b.idbdb.version/10)===S._cfg.version?(b.idbdb.deleteObjectStore("$meta"),delete b._dbSchema.$meta,b._storeNames=b._storeNames.filter(function(N){return N!=="$meta"})):F.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return m.length?z.resolve(m.shift()(y.idbtrans)).then(S):z.resolve()})().then(function(){zt(M,C)}))}).catch(d);var k,E;Ee(r).forEach(function(x){$e(a,x,r[x].primKey,r[x].indexes)}),Ce(e,a),z.follow(function(){return e.on.populate.fire(l)}).catch(d)})}function gn(e,t){zt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var a=Ge(0,e.idbdb,t);He(e,e._dbSchema,t);for(var s=0,r=Lt(a,e._dbSchema).change;s<r.length;s++){var l=(d=>{if(d.change.length||d.recreate)return console.warn("Unable to patch indexes of table ".concat(d.name," because it has changes on the type of index or primary key.")),{value:void 0};var h=t.objectStore(d.name);d.add.forEach(function(k){nn&&console.debug("Dexie upgrade patch: Creating missing index ".concat(d.name,".").concat(k.src)),je(h,k)})})(r[s]);if(typeof l=="object")return l.value}}function Lt(e,t){var a,s={del:[],add:[],change:[]};for(a in e)t[a]||s.del.push(a);for(a in t){var r=e[a],l=t[a];if(r){var d={name:a,def:l,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(l.primKey.keyPath||"")||r.primKey.auto!==l.primKey.auto)d.recreate=!0,s.change.push(d);else{var h=r.idxByName,k=l.idxByName,E=void 0;for(E in h)k[E]||d.del.push(E);for(E in k){var x=h[E],b=k[E];x?x.src!==b.src&&d.change.push(b):d.add.push(b)}(0<d.del.length||0<d.add.length||0<d.change.length)&&s.change.push(d)}}else s.add.push([a,l])}return s}function $e(e,t,a,s){var r=e.db.createObjectStore(t,a.keyPath?{keyPath:a.keyPath,autoIncrement:a.auto}:{autoIncrement:a.auto});s.forEach(function(l){return je(r,l)})}function zt(e,t){Ee(e).forEach(function(a){t.db.objectStoreNames.contains(a)||(nn&&console.debug("Dexie: Creating missing table",a),$e(t,a,e[a].primKey,e[a].indexes))})}function je(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Ge(e,t,a){var s={};return hn(t.objectStoreNames,0).forEach(function(r){for(var l=a.objectStore(r),d=I(U(E=l.keyPath),E||"",!0,!1,!!l.autoIncrement,E&&typeof E!="string",!0),h=[],k=0;k<l.indexNames.length;++k){var x=l.index(l.indexNames[k]),E=x.keyPath,x=I(x.name,E,!!x.unique,!!x.multiEntry,!1,E&&typeof E!="string",!1);h.push(x)}s[r]=W(r,d,h)}),s}function He(e,t,a){for(var s=a.db.objectStoreNames,r=0;r<s.length;++r){var l=s[r],d=a.objectStore(l);e._hasGetAll="getAll"in d;for(var h=0;h<d.indexNames.length;++h){var k,E=d.indexNames[h],x=d.index(E).keyPath,x=typeof x=="string"?x:"["+hn(x).join("+")+"]";t[l]&&(k=t[l].idxByName[x])&&(k.name=E,delete t[l].idxByName[x],t[l].idxByName[E]=k)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&oe.WorkerGlobalScope&&oe instanceof oe.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function st(e){return e.split(",").map(function(t,a){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),l=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return I(r,l||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ue(l),a===0,s)})}St.prototype._createTableSchema=W,St.prototype._parseIndexSyntax=st,St.prototype._parseStoresSpec=function(e,t){var a=this;Ee(e).forEach(function(s){if(e[s]!==null){var r=a._parseIndexSyntax(e[s]),l=r.shift();if(!l)throw new ne.Schema("Invalid schema for table "+s+": "+e[s]);if(l.unique=!0,l.multi)throw new ne.Schema("Primary key cannot be multiEntry*");r.forEach(function(d){if(d.auto)throw new ne.Schema("Only primary key can be marked as autoIncrement (++)");if(!d.keyPath)throw new ne.Schema("Index must have a name and cannot be an empty string")}),l=a._createTableSchema(s,l,r),t[s]=l}})},St.prototype.stores=function(a){var t=this.db,a=(this._cfg.storesSource=this._cfg.storesSource?me(this._cfg.storesSource,a):a,t._versions),s={},r={};return a.forEach(function(l){me(s,l._cfg.storesSource),r=l._cfg.dbschema={},l._parseStoresSpec(s,r)}),t._dbSchema=r,O(t,[t._allTables,t,t.Transaction.prototype]),ee(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Ee(r),r),t._storeNames=Ee(r),this},St.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Ga(this._cfg.contentUpgrade||Fe,e),this};var it=St;function St(){}function Gt(e,t){var a=e._dbNamesDB;return a||(a=e._dbNamesDB=new yn(Ta,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),a.table("dbnames")}function Wt(e){return e&&typeof e.databases=="function"}function Nt(e){return ht(function(){return te.letThrough=!0,e()})}function ot(e){return!("from"in e)}var We=function(e,t){var a;if(!this)return a=new We,e&&"d"in e&&me(a,e),a;me(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Pe(e,t,a){var s=be(t,a);if(!isNaN(s)){if(0<s)throw RangeError();if(ot(e))return me(e,{from:t,to:a,d:1});var s=e.l,r=e.r;if(be(a,e.from)<0)return s?Pe(s,t,a):e.l={from:t,to:a,d:1,l:null,r:null},Ue(e);if(0<be(t,e.to))return r?Pe(r,t,a):e.r={from:t,to:a,d:1,l:null,r:null},Ue(e);be(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<be(a,e.to)&&(e.to=a,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&De(e,s),r&&t&&De(e,r)}}function De(e,t){ot(t)||(function a(s,r){var l=r.from,d=r.l,h=r.r;Pe(s,l,r.to),d&&a(s,d),h&&a(s,h)})(e,t)}function Xe(e,t){var a=Ye(t),s=a.next();if(!s.done)for(var r=s.value,l=Ye(e),d=l.next(r.from),h=d.value;!s.done&&!d.done;){if(be(h.from,r.to)<=0&&0<=be(h.to,r.from))return!0;be(r.from,h.from)<0?r=(s=a.next(h.from)).value:h=(d=l.next(r.from)).value}return!1}function Ye(e){var t=ot(e)?null:{s:0,n:e};return{next:function(a){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&be(a,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||be(a,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ue(e){var t,a,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",a=Q({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],a[r]=s[t],(e[t]=a).d=Pn(a)),e.d=Pn(e)}function Pn(a){var t=a.r,a=a.l;return(t?a?Math.max(t.d,a.d):t.d:a?a.d:0)+1}function Oe(e,t){return Ee(t).forEach(function(a){e[a]?De(e[a],t[a]):e[a]=(function s(r){var l,d,h={};for(l in r)de(r,l)&&(d=r[l],h[l]=!d||typeof d!="object"||ds.has(d.constructor)?d:s(d));return h})(t[a])}),e}function bn(e,t){return e.all||t.all||Object.keys(e).some(function(a){return t[a]&&Xe(t[a],e[a])})}yt(We.prototype,((Ot={add:function(e){return De(this,e),this},addKey:function(e){return Pe(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(a){return Pe(t,a,a)}),this},hasKey:function(e){var t=Ye(this).next(e).value;return t&&be(t.from,e)<=0&&0<=be(t.to,e)}})[za]=function(){return Ye(this)},Ot));var pt={},le={},Et=!1;function Bt(e){Oe(le,e),Et||(Et=!0,setTimeout(function(){Et=!1,Kn(le,!(le={}))},0))}function Kn(e,t){t===void 0&&(t=!1);var a=new Set;if(e.all)for(var s=0,r=Object.values(pt);s<r.length;s++)sn(h=r[s],e,a,t);else for(var l in e){var d,h,l=/^idb\:\/\/(.*)\/(.*)\//.exec(l);l&&(d=l[1],l=l[2],h=pt["idb://".concat(d,"/").concat(l)])&&sn(h,e,a,t)}a.forEach(function(k){return k()})}function sn(e,t,a,s){for(var r=[],l=0,d=Object.entries(e.queries.query);l<d.length;l++){for(var h=d[l],k=h[0],E=[],x=0,b=h[1];x<b.length;x++){var $=b[x];bn(t,$.obsSet)?$.subscribers.forEach(function(_){return a.add(_)}):s&&E.push($)}s&&r.push([k,E])}if(s)for(var y=0,C=r;y<C.length;y++){var m=C[y],k=m[0],E=m[1];e.queries.query[k]=E}}function Vn(e){var t=e._state,a=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ze(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),l=!1;function d(){if(t.openCanceller!==s)throw new ne.DatabaseClosed("db.open() was cancelled")}function h(){return new z(function($,y){if(d(),!a)throw new ne.MissingAPI;var C=e.name,m=t.autoSchema||!r?a.open(C):a.open(C,r);if(!m)throw new ne.MissingAPI;m.onerror=c(y),m.onblocked=ke(e._fireOnBlocked),m.onupgradeneeded=ke(function(_){var M;x=m.transaction,t.autoSchema&&!e._options.allowEmptyDB?(m.onerror=v,x.abort(),m.result.close(),(M=a.deleteDatabase(C)).onsuccess=M.onerror=ke(function(){y(new ne.NoSuchDatabase("Database ".concat(C," doesnt exist")))})):(x.onerror=c(y),M=_.oldVersion>Math.pow(2,62)?0:_.oldVersion,b=M<1,e.idbdb=m.result,l&&gn(e,x),At(e,M/10,x,y))},y),m.onsuccess=ke(function(){x=null;var _,M,S,F,N,j,Y=e.idbdb=m.result,K=hn(Y.objectStoreNames);if(0<K.length)try{var J=Y.transaction((N=K).length===1?N[0]:N,"readonly");if(t.autoSchema)j=Y,F=J,(S=e).verno=j.version/10,F=S._dbSchema=Ge(0,j,F),S._storeNames=hn(j.objectStoreNames,0),ee(S,[S._allTables],Ee(F),F);else if(He(e,e._dbSchema,J),M=J,((M=Lt(Ge(0,(_=e).idbdb,M),_._dbSchema)).add.length||M.change.some(function(G){return G.add.length||G.change.length}))&&!l)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),r=Y.version+1,l=!0,$(h());Ce(e,J)}catch{}sa.push(e),Y.onversionchange=ke(function(G){t.vcFired=!0,e.on("versionchange").fire(G)}),Y.onclose=ke(function(){e.close({disableAutoOpen:!1})}),b&&(K=e._deps,N=C,Wt(j=K.indexedDB)||N===Ta||Gt(j,K.IDBKeyRange).put({name:N}).catch(Fe)),$()},y)}).catch(function($){switch($?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),h();break;case"VersionError":if(0<r)return r=0,h()}return z.reject($)})}var k,E=t.dbReadyResolve,x=null,b=!1;return z.race([s,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function($){function y(){return indexedDB.databases().finally($)}k=setInterval(y,100),y()}).finally(function(){return clearInterval(k)}):Promise.resolve()).then(h)]).then(function(){return d(),t.onReadyBeingFired=[],z.resolve(Nt(function(){return e.on.ready.fire(e.vip)})).then(function $(){var y;if(0<t.onReadyBeingFired.length)return y=t.onReadyBeingFired.reduce(Ga,Fe),t.onReadyBeingFired=[],z.resolve(Nt(function(){return y(e.vip)})).then($)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function($){t.dbOpenError=$;try{x&&x.abort()}catch{}return s===t.openCanceller&&e._close(),Ze($)}).finally(function(){t.openComplete=!0,E()}).then(function(){var $;return b&&($={},e.tables.forEach(function(y){y.schema.indexes.forEach(function(C){C.name&&($["idb://".concat(e.name,"/").concat(y.name,"/").concat(C.name)]=new We(-1/0,[[[]]]))}),$["idb://".concat(e.name,"/").concat(y.name,"/")]=$["idb://".concat(e.name,"/").concat(y.name,"/:dels")]=new We(-1/0,[[[]]])}),D(w).fire($),Kn($,!0)),e})}function rn(e){function t(l){return e.next(l)}var a=r(t),s=r(function(l){return e.throw(l)});function r(l){return function(h){var h=l(h),k=h.value;return h.done?k:k&&typeof k.then=="function"?k.then(a,s):ue(k)?Promise.all(k).then(a,s):a(k)}}return r(t)()}function lt(e,t,a){for(var s=ue(e)?e.slice():[e],r=0;r<a;++r)s.push(t);return s}var Ut={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Q(Q({},e),{table:function(s){var a=e.table(s),s=a.schema,r={},l=[];function d($,y,C){var S=_e($),m=r[S]=r[S]||[],_=$==null?0:typeof $=="string"?1:$.length,M=0<y,S=Q(Q({},C),{name:M?"".concat(S,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:M,keyTail:y,keyLength:_,extractKey:Se($),unique:!M&&C.unique});return m.push(S),S.isPrimaryKey||l.push(S),1<_&&d(_===2?$[0]:$.slice(0,_-1),y+1,C),m.sort(function(F,N){return F.keyTail-N.keyTail}),S}var h=d(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[h];for(var k=0,E=s.indexes;k<E.length;k++){var x=E[k];d(x.keyPath,0,x)}function b($){var y,C=$.query.index;return C.isVirtual?Q(Q({},$),{query:{index:C.lowLevelIndex,range:(y=$.query.range,C=C.keyTail,{type:y.type===1?2:y.type,lower:lt(y.lower,y.lowerOpen?e.MAX_KEY:e.MIN_KEY,C),lowerOpen:!0,upper:lt(y.upper,y.upperOpen?e.MIN_KEY:e.MAX_KEY,C),upperOpen:!0})}}):$}return Q(Q({},a),{schema:Q(Q({},s),{primaryKey:h,indexes:l,getIndexByKeyPath:function($){return($=r[_e($)])&&$[0]}}),count:function($){return a.count(b($))},query:function($){return a.query(b($))},openCursor:function($){var y=$.query.index,C=y.keyTail,m=y.keyLength;return y.isVirtual?a.openCursor(b($)).then(function(M){return M&&_(M)}):a.openCursor($);function _(M){return Object.create(M,{continue:{value:function(S){S!=null?M.continue(lt(S,$.reverse?e.MAX_KEY:e.MIN_KEY,C)):$.unique?M.continue(M.key.slice(0,m).concat($.reverse?e.MIN_KEY:e.MAX_KEY,C)):M.continue()}},continuePrimaryKey:{value:function(S,F){M.continuePrimaryKey(lt(S,e.MAX_KEY,C),F)}},primaryKey:{get:function(){return M.primaryKey}},key:{get:function(){var S=M.key;return m===1?S[0]:S.slice(0,m)}},value:{get:function(){return M.value}}})}}})}})}};function ft(e,t,a,s){return a=a||{},s=s||"",Ee(e).forEach(function(r){var l,d,h;de(t,r)?(l=e[r],d=t[r],typeof l=="object"&&typeof d=="object"&&l&&d?(h=Ya(l))!==Ya(d)?a[s+r]=t[r]:h==="Object"?ft(l,d,a,s+r+"."):l!==d&&(a[s+r]=t[r]):l!==d&&(a[s+r]=t[r])):a[s+r]=void 0}),Ee(t).forEach(function(r){de(e,r)||(a[s+r]=t[r])}),a}function ua(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Tn={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Q(Q({},e),{table:function(t){var a=e.table(t),s=a.schema.primaryKey;return Q(Q({},a),{mutate:function(r){var l=te.trans,d=l.table(t).hook,h=d.deleting,k=d.creating,E=d.updating;switch(r.type){case"add":if(k.fire===Fe)break;return l._promise("readwrite",function(){return x(r)},!0);case"put":if(k.fire===Fe&&E.fire===Fe)break;return l._promise("readwrite",function(){return x(r)},!0);case"delete":if(h.fire===Fe)break;return l._promise("readwrite",function(){return x(r)},!0);case"deleteRange":if(h.fire===Fe)break;return l._promise("readwrite",function(){return(function b($,y,C){return a.query({trans:$,values:!1,query:{index:s,range:y},limit:C}).then(function(m){var _=m.result;return x({type:"delete",keys:_,trans:$}).then(function(M){return 0<M.numFailures?Promise.reject(M.failures[0]):_.length<C?{failures:[],numFailures:0,lastResult:void 0}:b($,Q(Q({},y),{lower:_[_.length-1],lowerOpen:!0}),C)})})})(r.trans,r.range,1e4)},!0)}return a.mutate(r);function x(b){var $,y,C,m=te.trans,_=b.keys||ua(s,b);if(_)return(b=b.type==="add"||b.type==="put"?Q(Q({},b),{keys:_}):Q({},b)).type!=="delete"&&(b.values=fe([],b.values)),b.keys&&(b.keys=fe([],b.keys)),$=a,C=_,((y=b).type==="add"?Promise.resolve([]):$.getMany({trans:y.trans,keys:C,cache:"immutable"})).then(function(M){var S=_.map(function(F,N){var j,Y,K,J=M[N],G={onerror:null,onsuccess:null};return b.type==="delete"?h.fire.call(G,F,J,m):b.type==="add"||J===void 0?(j=k.fire.call(G,F,b.values[N],m),F==null&&j!=null&&(b.keys[N]=F=j,s.outbound||$t(b.values[N],s.keyPath,F))):(j=ft(J,b.values[N]),(Y=E.fire.call(G,j,F,J,m))&&(K=b.values[N],Object.keys(Y).forEach(function(R){de(K,R)?K[R]=Y[R]:$t(K,R,Y[R])}))),G});return a.mutate(b).then(function(F){for(var N=F.failures,j=F.results,Y=F.numFailures,F=F.lastResult,K=0;K<_.length;++K){var J=(j||_)[K],G=S[K];J==null?G.onerror&&G.onerror(N[K]):G.onsuccess&&G.onsuccess(b.type==="put"&&M[K]?b.values[K]:J)}return{failures:N,results:j,numFailures:Y,lastResult:F}}).catch(function(F){return S.forEach(function(N){return N.onerror&&N.onerror(F)}),Promise.reject(F)})});throw new Error("Keys missing")}}})}})}};function xa(e,t,a){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,l=0;r<t.keys.length&&l<e.length;++r)be(t.keys[r],e[l])===0&&(s.push(a?Tt(t.values[r]):t.values[r]),++l);return s.length===e.length?s:null}catch{return null}}var Oa={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var a=e.table(t);return Q(Q({},a),{getMany:function(s){var r;return s.cache?(r=xa(s.keys,s.trans._cache,s.cache==="clone"))?z.resolve(r):a.getMany(s).then(function(l){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?Tt(l):l},l}):a.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),a.mutate(s)}})}}}};function ka(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function $a(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var da={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,a=new We(e.MIN_KEY,e.MAX_KEY);return Q(Q({},e),{transaction:function(s,r,l){if(te.subscr&&r!=="readonly")throw new ne.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(te.querier));return e.transaction(s,r,l)},table:function(s){function r(_){var m,_=_.query;return[m=_.index,new We((m=(_=_.range).lower)!=null?m:e.MIN_KEY,(m=_.upper)!=null?m:e.MAX_KEY)]}var l=e.table(s),d=l.schema,h=d.primaryKey,k=d.indexes,E=h.extractKey,x=h.outbound,b=h.autoIncrement&&k.filter(function(C){return C.compound&&C.keyPath.includes(h.keyPath)}),$=Q(Q({},l),{mutate:function(C){function m(X){return X="idb://".concat(t,"/").concat(s,"/").concat(X),N[X]||(N[X]=new We)}var _,M,S,F=C.trans,N=C.mutatedParts||(C.mutatedParts={}),j=m(""),Y=m(":dels"),K=C.type,G=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[ua(h,C).filter(function(X){return X}),C.values]:[],J=G[0],G=G[1],R=C.trans._cache;return ue(J)?(j.addKeys(J),(K=K==="delete"||J.length===G.length?xa(J,R):null)||Y.addKeys(J),(K||G)&&(_=m,M=K,S=G,d.indexes.forEach(function(X){var we=_(X.name||"");function ce(pe){return pe!=null?X.extractKey(pe):null}function se(pe){X.multiEntry&&ue(pe)?pe.forEach(function(Je){return we.addKey(Je)}):we.addKey(pe)}(M||S).forEach(function(pe,Qe){var Ht=M&&ce(M[Qe]),Qe=S&&ce(S[Qe]);be(Ht,Qe)!==0&&(Ht!=null&&se(Ht),Qe!=null)&&se(Qe)})}))):J?(G={from:(R=J.lower)!=null?R:e.MIN_KEY,to:(K=J.upper)!=null?K:e.MAX_KEY},Y.add(G),j.add(G)):(j.add(a),Y.add(a),d.indexes.forEach(function(X){return m(X.name).add(a)})),l.mutate(C).then(function(X){return!J||C.type!=="add"&&C.type!=="put"||(j.addKeys(X.results),b&&b.forEach(function(we){for(var ce=C.values.map(function(Ht){return we.extractKey(Ht)}),se=we.keyPath.findIndex(function(Ht){return Ht===h.keyPath}),pe=0,Je=X.results.length;pe<Je;++pe)ce[pe][se]=X.results[pe];m(we.name).addKeys(ce)})),F.mutatedParts=Oe(F.mutatedParts||{},N),X})}}),y={get:function(C){return[h,new We(C.key)]},getMany:function(C){return[h,new We().addKeys(C.keys)]},count:r,query:r,openCursor:r};return Ee(y).forEach(function(C){$[C]=function(m){var _=te.subscr,M=!!_,S=ka(te,l)&&$a(C,m)?m.obsSet={}:_;if(M){var F,_=function(G){return G="idb://".concat(t,"/").concat(s,"/").concat(G),S[G]||(S[G]=new We)},N=_(""),j=_(":dels"),M=y[C](m),Y=M[0],M=M[1];if((C==="query"&&Y.isPrimaryKey&&!m.values?j:_(Y.name||"")).add(M),!Y.isPrimaryKey){if(C!=="count")return F=C==="query"&&x&&m.values&&l.query(Q(Q({},m),{values:!1})),l[C].apply(this,arguments).then(function(G){if(C==="query"){if(x&&m.values)return F.then(function(ce){return ce=ce.result,N.addKeys(ce),G});var R=m.values?G.result.map(E):G.result;(m.values?N:j).addKeys(R)}else{var X,we;if(C==="openCursor")return we=m.values,(X=G)&&Object.create(X,{key:{get:function(){return j.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var ce=X.primaryKey;return j.addKey(ce),ce}},value:{get:function(){return we&&N.addKey(X.primaryKey),X.value}}})}return G});j.add(a)}}return l[C].apply(this,arguments)}}),$}})}};function as(e,t,a){var s;return a.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,a.numFailures===s)?null:(s=Q({},t),ue(s.keys)&&(s.keys=s.keys.filter(function(r,l){return!(l in a.failures)})),"values"in s&&ue(s.values)&&(s.values=s.values.filter(function(r,l){return!(l in a.failures)})),s)}function P(e,t){return a=e,((s=t).lower===void 0||(s.lowerOpen?0<be(a,s.lower):0<=be(a,s.lower)))&&(a=e,(s=t).upper===void 0||(s.upperOpen?be(a,s.upper)<0:be(a,s.upper)<=0));var a,s}function q(e,t,a,s,r,l){var d,h,k,E,x,b;return!a||a.length===0||(d=t.query.index,h=d.multiEntry,k=t.query.range,E=s.schema.primaryKey.extractKey,x=d.extractKey,b=(d.lowLevelIndex||d).extractKey,(s=a.reduce(function($,y){var C=$,m=[];if(y.type==="add"||y.type==="put")for(var _=new We,M=y.values.length-1;0<=M;--M){var S,F=y.values[M],N=E(F);!_.hasKey(N)&&(S=x(F),h&&ue(S)?S.some(function(G){return P(G,k)}):P(S,k))&&(_.addKey(N),m.push(F))}switch(y.type){case"add":var j=new We().addKeys(t.values?$.map(function(R){return E(R)}):$),C=$.concat(t.values?m.filter(function(R){return R=E(R),!j.hasKey(R)&&(j.addKey(R),!0)}):m.map(function(R){return E(R)}).filter(function(R){return!j.hasKey(R)&&(j.addKey(R),!0)}));break;case"put":var Y=new We().addKeys(y.values.map(function(R){return E(R)}));C=$.filter(function(R){return!Y.hasKey(t.values?E(R):R)}).concat(t.values?m:m.map(function(R){return E(R)}));break;case"delete":var K=new We().addKeys(y.keys);C=$.filter(function(R){return!K.hasKey(t.values?E(R):R)});break;case"deleteRange":var J=y.range;C=$.filter(function(R){return!P(E(R),J)})}return C},e))===e)?e:(s.sort(function($,y){return be(b($),b(y))||be(E($),E(y))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),l?Object.freeze(s):s)}function Ft(e,t){return be(e.lower,t.lower)===0&&be(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function ss(e,t){return((a,s,r,l)=>{if(a===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((a=be(a,s))===0){if(r&&l)return 0;if(r)return 1;if(l)return-1}return a})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((a,s,r,l)=>{if(a===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((a=be(a,s))===0){if(r&&l)return 0;if(r)return-1;if(l)return 1}return a})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function on(e,t,a,s){e.subscribers.add(a),s.addEventListener("abort",function(){var r,l;e.subscribers.delete(a),e.subscribers.size===0&&(r=e,l=t,setTimeout(function(){r.subscribers.size===0&&xn(l,r)},3e3))})}var Us={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Q(Q({},e),{transaction:function(a,s,r){var l,d,h=e.transaction(a,s,r);return s==="readwrite"&&(r=(l=new AbortController).signal,h.addEventListener("abort",(d=function(k){return function(){if(l.abort(),s==="readwrite"){for(var E=new Set,x=0,b=a;x<b.length;x++){var $=b[x],y=pt["idb://".concat(t,"/").concat($)];if(y){var C=e.table($),m=y.optimisticOps.filter(function(X){return X.trans===h});if(h._explicit&&k&&h.mutatedParts)for(var _=0,M=Object.values(y.queries.query);_<M.length;_++)for(var S=0,F=(Y=M[_]).slice();S<F.length;S++)bn((K=F[S]).obsSet,h.mutatedParts)&&(xn(Y,K),K.subscribers.forEach(function(X){return E.add(X)}));else if(0<m.length){y.optimisticOps=y.optimisticOps.filter(function(X){return X.trans!==h});for(var N=0,j=Object.values(y.queries.query);N<j.length;N++)for(var Y,K,J,G=0,R=(Y=j[N]).slice();G<R.length;G++)(K=R[G]).res!=null&&h.mutatedParts&&(k&&!K.dirty?(J=Object.isFrozen(K.res),J=q(K.res,K.req,m,C,K,J),K.dirty?(xn(Y,K),K.subscribers.forEach(function(X){return E.add(X)})):J!==K.res&&(K.res=J,K.promise=z.resolve({result:J}))):(K.dirty&&xn(Y,K),K.subscribers.forEach(function(X){return E.add(X)})))}}}E.forEach(function(X){return X()})}}})(!1),{signal:r}),h.addEventListener("error",d(!1),{signal:r}),h.addEventListener("complete",d(!0),{signal:r})),h},table:function(a){var s=e.table(a),r=s.schema.primaryKey;return Q(Q({},s),{mutate:function(l){var d,h=te.trans;return!r.outbound&&h.db._options.cache!=="disabled"&&!h.explicit&&h.idbtrans.mode==="readwrite"&&(d=pt["idb://".concat(t,"/").concat(a)])?(h=s.mutate(l),l.type!=="add"&&l.type!=="put"||!(50<=l.values.length||ua(r,l).some(function(k){return k==null}))?(d.optimisticOps.push(l),l.mutatedParts&&Bt(l.mutatedParts),h.then(function(k){0<k.numFailures&&(xn(d.optimisticOps,l),(k=as(0,l,k))&&d.optimisticOps.push(k),l.mutatedParts)&&Bt(l.mutatedParts)}),h.catch(function(){xn(d.optimisticOps,l),l.mutatedParts&&Bt(l.mutatedParts)})):h.then(function(k){var E=as(0,Q(Q({},l),{values:l.values.map(function(x,b){var $;return k.failures[b]?x:($t($=($=r.keyPath)!=null&&$.includes(".")?Tt(x):Q({},x),r.keyPath,k.results[b]),$)})}),k);d.optimisticOps.push(E),queueMicrotask(function(){return l.mutatedParts&&Bt(l.mutatedParts)})}),h):s.mutate(l)},query:function(l){var d,h,k,E,x,b,$;return ka(te,s)&&$a("query",l)?(d=((k=te.trans)==null?void 0:k.db._options.cache)==="immutable",h=(k=te).requery,k=k.signal,b=((y,C,m,_)=>{var M=pt["idb://".concat(y,"/").concat(C)];if(!M)return[];if(!(y=M.queries[m]))return[null,!1,M,null];var S=y[(_.query?_.query.index.name:null)||""];if(!S)return[null,!1,M,null];switch(m){case"query":var F=S.find(function(N){return N.req.limit===_.limit&&N.req.values===_.values&&Ft(N.req.query.range,_.query.range)});return F?[F,!0,M,S]:[S.find(function(N){return("limit"in N.req?N.req.limit:1/0)>=_.limit&&(!_.values||N.req.values)&&ss(N.req.query.range,_.query.range)}),!1,M,S];case"count":return F=S.find(function(N){return Ft(N.req.query.range,_.query.range)}),[F,!!F,M,S]}})(t,a,"query",l),$=b[0],E=b[2],x=b[3],$&&b[1]?$.obsSet=l.obsSet:(b=s.query(l).then(function(y){var C=y.result;if($&&($.res=C),d){for(var m=0,_=C.length;m<_;++m)Object.freeze(C[m]);Object.freeze(C)}else y.result=Tt(C);return y}).catch(function(y){return x&&$&&xn(x,$),Promise.reject(y)}),$={obsSet:l.obsSet,promise:b,subscribers:new Set,type:"query",req:l,dirty:!1},x?x.push($):(x=[$],(E=E||(pt["idb://".concat(t,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[l.query.index.name||""]=x)),on($,x,h,k),$.promise.then(function(y){return{result:q(y.result,l,E?.optimisticOps,s,$,d)}})):s.query(l)}})}})}};function Jt(e,t){return new Proxy(e,{get:function(a,s,r){return s==="db"?t:Reflect.get(a,s,r)}})}tt.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ne.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ne.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,a=t.filter(function(s){return s._cfg.version===e})[0];return a||(a=new this.Version(e),t.push(a),t.sort(Yt),a.stores({}),this._state.autoSchema=!1),a},tt.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||te.letThrough||this._vip)?e():new z(function(a,s){if(t._state.openComplete)return s(new ne.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ne.DatabaseClosed);t.open().catch(Fe)}t._state.dbReadyPromise.then(a,s)}).then(e)},tt.prototype.use=function(r){var t=r.stack,a=r.create,s=r.level,r=r.name,l=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return l.push({stack:t,create:a,level:s??10,name:r}),l.sort(function(d,h){return d.level-h.level}),this},tt.prototype.unuse=function(e){var t=e.stack,a=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!a&&r.name!==a})),this},tt.prototype.open=function(){var e=this;return On(jt,function(){return Vn(e)})},tt.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=sa.indexOf(this);if(0<=t&&sa.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(a){e.dbReadyResolve=a}),e.openCanceller=new z(function(a,s){e.cancelOpen=s}))},tt.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,a=this._state;t?(a.isBeingOpened&&a.cancelOpen(new ne.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new ne.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},tt.prototype.delete=function(e){var t=this,a=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new z(function(r,l){function d(){t.close(e);var h=t._deps.indexedDB.deleteDatabase(t.name);h.onsuccess=ke(function(){var k,E,x;k=t._deps,E=t.name,Wt(x=k.indexedDB)||E===Ta||Gt(x,k.IDBKeyRange).delete(E).catch(Fe),r()}),h.onerror=c(l),h.onblocked=t._fireOnBlocked}if(a)throw new ne.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(d):d()})},tt.prototype.backendDB=function(){return this.idbdb},tt.prototype.isOpen=function(){return this.idbdb!==null},tt.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},tt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},tt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(tt.prototype,"tables",{get:function(){var e=this;return Ee(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),tt.prototype.transaction=function(){var e=(function(t,a,s){var r=arguments.length;if(r<2)throw new ne.InvalidArgument("Too few arguments");for(var l=new Array(r-1);--r;)l[r-1]=arguments[r];return s=l.pop(),[t,ja(l),s]}).apply(this,arguments);return this._transaction.apply(this,e)},tt.prototype._transaction=function(e,t,a){var s,r,l=this,d=te.trans,h=(d&&d.db===this&&e.indexOf("!")===-1||(d=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(E){if(E=E instanceof l.Table?E.name:E,typeof E!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return E}),e=="r"||e===Xa)s=Xa;else{if(e!="rw"&&e!=Qa)throw new ne.InvalidArgument("Invalid transaction mode: "+e);s=Qa}if(d){if(d.mode===Xa&&s===Qa){if(!h)throw new ne.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&r.forEach(function(E){if(d&&d.storeNames.indexOf(E)===-1){if(!h)throw new ne.SubTransaction("Table "+E+" not included in parent transaction.");d=null}}),h&&d&&!d.active&&(d=null)}}catch(E){return d?d._promise(null,function(x,b){b(E)}):Ze(E)}var k=(function E(x,b,$,y,C){return z.resolve().then(function(){var S=te.transless||te,m=x._createTransaction(b,$,x._dbSchema,y),S=(m.explicit=!0,{trans:m,transless:S});if(y)m.idbtrans=y.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,x._state.PR1398_maxLoop=3}catch(F){return F.name===Rt.InvalidState&&x.isOpen()&&0<--x._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),x.close({disableAutoOpen:!1}),x.open().then(function(){return E(x,b,$,null,C)})):Ze(F)}var _,M=pn(C),S=(M&&xt(),z.follow(function(){var F;(_=C.call(m,m))&&(M?(F=Bn.bind(null,null),_.then(F,F)):typeof _.next=="function"&&typeof _.throw=="function"&&(_=rn(_)))},S));return(_&&typeof _.then=="function"?z.resolve(_).then(function(F){return m.active?F:Ze(new ne.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return _})).then(function(F){return y&&m._resolve(),m._completion.then(function(){return F})}).catch(function(F){return m._reject(F),Ze(F)})})}).bind(null,this,s,r,d,a);return d?d._promise(s,k,"lock"):te.trans?On(te.transless,function(){return l._whenReady(k)}):this._whenReady(k)},tt.prototype.table=function(e){if(de(this._allTables,e))return this._allTables[e];throw new ne.InvalidTable("Table ".concat(e," does not exist"))};var yn=tt;function tt(e,t){var a,s,r,l,d,h=this,k=(this._middlewares={},this.verno=0,tt.dependencies),k=(this._options=t=Q({addons:tt.addons,autoOpen:!0,indexedDB:k.indexedDB,IDBKeyRange:k.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),E=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Fe,dbReadyPromise:null,cancelOpen:Fe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),x=(E.dbReadyPromise=new z(function(b){E.dbReadyResolve=b}),E.openCanceller=new z(function(b,$){E.cancelOpen=$}),this._state=E,this.name=e,this.on=oa(this,"populate","blocked","versionchange","close",{ready:[Ga,Fe]}),this.once=function(b,$){var y=function(){for(var C=[],m=0;m<arguments.length;m++)C[m]=arguments[m];h.on(b).unsubscribe(y),$.apply(h,C)};return h.on(b,y)},this.on.ready.subscribe=_t(this.on.ready.subscribe,function(b){return function($,y){tt.vip(function(){var C,m=h._state;m.openComplete?(m.dbOpenError||z.resolve().then($),y&&b($)):m.onReadyBeingFired?(m.onReadyBeingFired.push($),y&&b($)):(b($),C=h,y||b(function _(){C.on.ready.unsubscribe($),C.on.ready.unsubscribe(_)}))})}}),this.Collection=(a=this,Nn(Ms.prototype,function(_,m){this.db=a;var y=xs,C=null;if(m)try{y=m()}catch(S){C=S}var m=_._ctx,_=m.table,M=_.hook.reading.fire;this._ctx={table:_,index:m.index,isPrimKey:!m.index||_.schema.primKey.keyPath&&m.index===_.schema.primKey.name,range:y,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:C,or:m.or,valueMapper:M!==rt?M:null}})),this.Table=(s=this,Nn(Es.prototype,function(b,$,y){this.db=s,this._tx=y,this.name=b,this.schema=$,this.hook=s._allTables[b]?s._allTables[b].hook:oa(null,{creating:[js,Fe],reading:[Rs,rt],updating:[Ys,Fe],deleting:[fs,Fe]})})),this.Transaction=(r=this,Nn(A.prototype,function(b,$,y,C,m){var _=this;b!=="readonly"&&$.forEach(function(M){M=(M=y[M])==null?void 0:M.yProps,M&&($=$.concat(M.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=b,this.storeNames=$,this.schema=y,this.chromeTransactionDurability=C,this.idbtrans=null,this.on=oa(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(M,S){_._resolve=M,_._reject=S}),this._completion.then(function(){_.active=!1,_.on.complete.fire()},function(M){var S=_.active;return _.active=!1,_.on.error.fire(M),_.parent?_.parent._reject(M):S&&_.idbtrans&&_.idbtrans.abort(),Ze(M)})})),this.Version=(l=this,Nn(it.prototype,function(b){this.db=l,this._cfg={version:b,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(d=this,Nn(o.prototype,function(b,$,y){if(this.db=d,this._ctx={table:b,index:$===":id"?null:$,or:y},this._cmp=this._ascending=be,this._descending=function(C,m){return be(m,C)},this._max=function(C,m){return 0<be(C,m)?C:m},this._min=function(C,m){return be(C,m)<0?C:m},this._IDBKeyRange=d._deps.IDBKeyRange,!this._IDBKeyRange)throw new ne.MissingAPI})),this.on("versionchange",function(b){0<b.newVersion?console.warn("Another connection wants to upgrade database '".concat(h.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(h.name,"'. Closing db now to resume the delete request.")),h.close({disableAutoOpen:!1})}),this.on("blocked",function(b){!b.newVersion||b.newVersion<b.oldVersion?console.warn("Dexie.delete('".concat(h.name,"') was blocked")):console.warn("Upgrade '".concat(h.name,"' blocked by other connection holding version ").concat(b.oldVersion/10))}),this._maxKey=ie(t.IDBKeyRange),this._createTransaction=function(b,$,y,C){return new h.Transaction(b,$,y,h._options.chromeTransactionDurability,C)},this._fireOnBlocked=function(b){h.on("blocked").fire(b),sa.filter(function($){return $.name===h.name&&$!==h&&!$._state.vcFired}).map(function($){return $.on("versionchange").fire(b)})},this.use(Oa),this.use(Us),this.use(da),this.use(Ut),this.use(Tn),new Proxy(this,{get:function(b,$,y){var C;return $==="_vip"||($==="table"?function(m){return Jt(h.table(m),x)}:(C=Reflect.get(b,$,y))instanceof Es?Jt(C,x):$==="tables"?C.map(function(m){return Jt(m,x)}):$==="_createTransaction"?function(){return Jt(C.apply(this,arguments),x)}:C)}}));this.vip=x,k.forEach(function(b){return b(h)})}var wa,qn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ps=(Ia.prototype.subscribe=function(e,t,a){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:a})},Ia.prototype[qn]=function(){return this},Ia);function Ia(e){this._subscribe=e}try{wa={indexedDB:oe.indexedDB||oe.mozIndexedDB||oe.webkitIndexedDB||oe.msIndexedDB,IDBKeyRange:oe.IDBKeyRange||oe.webkitIDBKeyRange}}catch{wa={indexedDB:null,IDBKeyRange:null}}function rs(e){var t,a=!1,s=new Ps(function(r){var l=pn(e),d,h=!1,k={},E={},x={get closed(){return h},unsubscribe:function(){h||(h=!0,d&&d.abort(),b&&D.storagemutated.unsubscribe(y))}},b=(r.start&&r.start(x),!1),$=function(){return Ja(C)},y=function(m){Oe(k,m),bn(E,k)&&$()},C=function(){var m,_,M;!h&&wa.indexedDB&&(k={},m={},d&&d.abort(),d=new AbortController,M=(S=>{var F=Xt();try{l&&xt();var N=ht(e,S);return N=l?N.finally(Bn):N}finally{F&&Zn()}})(_={subscr:m,signal:d.signal,requery:$,querier:e,trans:null}),Promise.resolve(M).then(function(S){a=!0,t=S,h||_.signal.aborted||(k={},(F=>{for(var N in F)if(de(F,N))return;return 1})(E=m)||b||(D(w,y),b=!0),Ja(function(){return!h&&r.next&&r.next(S)}))},function(S){a=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||h||Ja(function(){h||r.error&&r.error(S)})}))};return setTimeout($,0),x});return s.hasValue=function(){return a},s.getValue=function(){return t},s}var An=yn;function is(e){var t=Cn;try{Cn=!0,D.storagemutated.fire(e),Kn(e,!0)}finally{Cn=t}}yt(An,Q(Q({},qt),{delete:function(e){return new An(e,{addons:[]}).delete()},exists:function(e){return new An(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=An.dependencies,a=t.indexedDB,t=t.IDBKeyRange,(Wt(a)?Promise.resolve(a.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==Ta})}):Gt(a,t).toCollection().primaryKeys()).then(e)}catch{return Ze(new ne.MissingAPI)}var t,a},defineClass:function(){return function(e){me(this,e)}},ignoreTransaction:function(e){return te.trans?On(te.transless,e):e()},vip:Nt,async:function(e){return function(){try{var t=rn(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(a){return Ze(a)}}},spawn:function(e,t,a){try{var s=rn(e.apply(a,t||[]));return s&&typeof s.then=="function"?s:z.resolve(s)}catch(r){return Ze(r)}},currentTransaction:{get:function(){return te.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?An.ignoreTransaction(e):e).timeout(t||6e4),te.trans?te.trans.waitFor(e):e},Promise:z,debug:{get:function(){return nn},set:function(e){ms(e)}},derive:Mt,extend:me,props:yt,override:_t,Events:oa,on:D,liveQuery:rs,extendObservabilitySet:Oe,getByKeyPath:tn,setByKeyPath:$t,delByKeyPath:function(e,t){typeof t=="string"?$t(e,t,void 0):"length"in t&&[].map.call(t,function(a){$t(e,a,void 0)})},shallowClone:wt,deepClone:Tt,getObjectDiff:ft,cmp:be,asap:Pt,minKey:-1/0,addons:[],connections:sa,errnames:Rt,dependencies:wa,cache:pt,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,a){return e+t/Math.pow(10,2*a)})})),An.maxKey=ie(An.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(D(w,function(e){Cn||(e=new CustomEvent(T,{detail:e}),Cn=!0,dispatchEvent(e),Cn=!1)}),addEventListener(T,function(e){e=e.detail,Cn||is(e)}));var ha,Cn=!1,os=function(){};return typeof BroadcastChannel<"u"&&((os=function(){(ha=new BroadcastChannel(T)).onmessage=function(e){return e.data&&is(e.data)}})(),typeof ha.unref=="function"&&ha.unref(),D(w,function(e){Cn||ha.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!yn.disableBfCache&&e.persisted){nn&&console.debug("Dexie: handling persisted pagehide"),ha?.close();for(var t=0,a=sa;t<a.length;t++)a[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!yn.disableBfCache&&e.persisted&&(nn&&console.debug("Dexie: handling persisted pageshow"),os(),is({all:new We(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof kn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Dn[e.name]?e:(t=new Dn[e.name](t||e.message,e),"stack"in e&&qe(t,"stack",{get:function(){return this.inner.stack}}),t)},ms(nn),Q(yn,Object.freeze({__proto__:null,Dexie:yn,Entity:ks,PropModification:ia,RangeSet:We,add:function(e){return new ia({add:e})},cmp:be,default:yn,liveQuery:rs,mergeRanges:De,rangesOverlap:Xe,remove:function(e){return new ia({remove:e})},replacePrefix:function(e,t){return new ia({replacePrefix:[e,t]})}}),{default:yn}),yn})})(Ls)),Ls.exports}var Ai=Ti();const nr=_i(Ai),Vr=Symbol.for("Dexie"),Ks=globalThis[Vr]||(globalThis[Vr]=nr);if(nr.semVer!==Ks.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${nr.semVer} and ${Ks.semVer}`);const{liveQuery:Ui,mergeRanges:Ji,rangesOverlap:Hi,RangeSet:Xi,cmp:Qi,Entity:Zi,PropModification:eo,replacePrefix:to,add:no,remove:ao,DexieYProvider:so}=Ks,Ve=new Ks("haushaltsbuch-db");Ve.version(1).stores({years:"year",fixedTemplateState:"id"});Ve.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Ve.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});Ve.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Gn="singleton";function Ra(){return new Date().toISOString()}async function Ba(){return Ve.years.orderBy("year").toArray()}async function Fi(B){return Ve.years.get(B)}async function Ea(B){await Ve.years.put(B)}async function ar(){const B=await Ve.fixedTemplateState.get(Gn);if(!B){const p={id:Gn,templates:[],version:Ra(),updatedAt:new Date().toISOString()};return await Ve.fixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:B.templates,version:B.version}}async function sr(B){const p=Ra();return await Ve.fixedTemplateState.put({id:Gn,templates:B,version:p,updatedAt:new Date().toISOString()}),p}async function rr(){const B=await Ve.annualVariableFixedTemplateState.get(Gn);if(!B){const p={id:Gn,templates:[],version:Ra(),updatedAt:new Date().toISOString()};return await Ve.annualVariableFixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:B.templates,version:B.version}}async function ir(B){const p=Ra();return await Ve.annualVariableFixedTemplateState.put({id:Gn,templates:B,version:p,updatedAt:new Date().toISOString()}),p}async function Di(B){await Ve.auditLog.put(B)}async function or(){const B=await Ve.searchEvaluationState.get(Gn);if(!B){const p={id:Gn,results:[],version:Ra(),updatedAt:new Date().toISOString()};return await Ve.searchEvaluationState.put(p),{results:[],version:p.version}}return{results:B.results,version:B.version}}async function Ns(B){const p=Ra();return await Ve.searchEvaluationState.put({id:Gn,results:B,version:p,updatedAt:new Date().toISOString()}),p}async function lr(){return Ve.auditLog.orderBy("timestampIso").toArray()}async function Oi(B){await Ve.auditLog.clear(),B.length!==0&&await Ve.auditLog.bulkPut(B)}async function Ii(){const B=await Ba(),[p,Ae,Q,fe]=await Promise.all([ar(),rr(),lr(),or()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:p.templates,annualVariableFixedTemplates:Ae.templates,auditLogEntries:Q,savedSearchEvaluations:fe.results}}async function Li(B){await Ve.transaction("rw",[Ve.years,Ve.fixedTemplateState,Ve.annualVariableFixedTemplateState,Ve.auditLog,Ve.searchEvaluationState],async()=>{await Ve.years.clear(),await Ve.years.bulkPut(B.years),await sr(B.fixedTemplates),await ir(B.annualVariableFixedTemplates??[]),await Oi(B.auditLogEntries??[]),await Ns(B.savedSearchEvaluations??[])})}function Ke(B){const p=B.replace(",",".").trim();if(!p)return 0;const Ae=Number.parseFloat(p);return Number.isNaN(Ae)?0:Math.round(Ae*100)}const Ni=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return Ni.format(B/100)}function Dt(B){return(B/100).toFixed(2)}function xe(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const Yr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function qr(B){return Yr.includes(B)}function Ki(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Rr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Vi(B){const p={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ae="habu-theme",Q="habu-backup-dirty",fe="habu-unexported-change-log",oe="habu-last-backup-filename",Ee="habu-recurring-budget-defaults";let ue=null,me=null,at=null,ze=null,de=!1,yt=!1;const ct=new WeakMap;function qe(){const i=B.querySelectorAll("[data-budget-vs-canvas]");if(i.length===0)return;const o=getComputedStyle(document.documentElement),u=o.getPropertyValue("--text-main").trim(),c=o.getPropertyValue("--text-muted").trim(),v=o.getPropertyValue("--table-stripe").trim(),w=o.getPropertyValue("--table-border").trim(),T=o.getPropertyValue("--budget-under").trim(),D=o.getPropertyValue("--danger-2").trim(),A=96,L=250,I=U=>1-Math.pow(1-Math.max(0,Math.min(1,U)),3);i.forEach(U=>{U.dataset.hoverBound!=="1"&&(U.dataset.hoverBound="1",U.addEventListener("mouseenter",()=>{U.dataset.hovering="1",qe()}),U.addEventListener("mouseleave",()=>{delete U.dataset.hovering,delete U.dataset.hoverX,qe()}),U.addEventListener("mousemove",Pe=>{const De=U.getBoundingClientRect(),Xe=Math.round(Pe.clientX-De.left);U.dataset.hoverX=String(Xe),qe()}));const W=Number.parseInt(U.dataset.budgetCents??"0",10),ie=Number.parseInt(U.dataset.actualCents??"0",10),Se=U.dataset.label??"Kategorie",Le=U.dataset.hovering==="1",he=`${Se}|${W}|${ie}`,_e=U.dataset.lastRenderSignature!==he;U.dataset.lastRenderSignature=he;const et=Math.max(120,Math.floor(U.clientWidth||120)),ye=window.devicePixelRatio||1,Ce=Math.floor(et*ye),ee=Math.floor(A*ye);(U.width!==Ce||U.height!==ee)&&(U.width=Ce,U.height=ee);const O=U.getContext("2d");if(!O)return;const Yt=Math.max(1,W,ie),At=Math.min(1,Math.max(0,W/Yt)),gn=Math.min(1,Math.max(0,ie/Yt)),Lt=W-ie,$e=W>0?ie/W*100:ie>0?100:0,zt=8,je=zt,Ge=34,He=et-zt*2,st=22,it=Number.parseInt(U.dataset.hoverX??"-1",10),St=(Pe,De,Xe,Ye,Ue)=>{O.beginPath(),O.moveTo(Pe+Ue,De),O.lineTo(Pe+Xe-Ue,De),O.quadraticCurveTo(Pe+Xe,De,Pe+Xe,De+Ue),O.lineTo(Pe+Xe,De+Ye-Ue),O.quadraticCurveTo(Pe+Xe,De+Ye,Pe+Xe-Ue,De+Ye),O.lineTo(Pe+Ue,De+Ye),O.quadraticCurveTo(Pe,De+Ye,Pe,De+Ye-Ue),O.lineTo(Pe,De+Ue),O.quadraticCurveTo(Pe,De,Pe+Ue,De),O.closePath()},Gt=Pe=>{O.setTransform(1,0,0,1,0,0),O.clearRect(0,0,U.width,U.height),O.scale(ye,ye),St(je,Ge,He,st,8),O.fillStyle=v,O.fill(),O.strokeStyle=w,O.lineWidth=1,O.stroke();const De=[.6,.25,.15],Xe=[.1,.16,.24];let Ye=0;De.forEach((pt,le)=>{const Et=He*pt;O.save(),O.globalAlpha=Xe[le]??.1,O.fillStyle=c,O.fillRect(je+Ye,Ge,Et,st),O.restore(),Ye+=Et});const Ue=W>0&&ie>W?D:T,Pn=He*gn*Pe;St(je,Ge+3,Pn,st-6,6),O.fillStyle=Ue,O.fill(),Le&&(O.save(),O.strokeStyle=Ue,O.lineWidth=1.5,O.globalAlpha=.8,St(je-1,Ge+2,Math.max(2,Pn+2),st-4,7),O.stroke(),O.restore());const Oe=je+He*At;O.strokeStyle=u,O.lineWidth=Le?3:2,O.beginPath(),O.moveTo(Oe,Ge-3),O.lineTo(Oe,Ge+st+3),O.stroke(),Le&&it>=je&&it<=je+He&&(O.save(),O.strokeStyle=u,O.globalAlpha=.35,O.lineWidth=1,O.beginPath(),O.moveTo(it,Ge-8),O.lineTo(it,Ge+st+8),O.stroke(),O.restore()),O.fillStyle=u,O.font="600 12px system-ui, -apple-system, sans-serif",O.textAlign="left",O.textBaseline="top",O.fillText(Se,je,10);const bn=$e*Pe;if(O.fillStyle=$e>100?D:$e<100?T:c,O.textAlign="right",O.fillText(`${bn.toFixed(0)}%`,je+He,10),O.fillStyle=c,O.font="500 11px system-ui, -apple-system, sans-serif",O.textAlign="left",O.textBaseline="top",O.fillText(`Ist ${f(ie)} · Ziel ${f(W)} · Δ ${Lt>=0?"+":""}${f(Lt)}`,je,64),Le){const pt=`Nutzung ${$e.toFixed(1)}%`;O.font="600 11px system-ui, -apple-system, sans-serif";const le=8,Et=5,Bt=22,sn=O.measureText(pt).width+le*2,Vn=Number.isFinite(it)?it-sn/2:je+He-sn,rn=Math.min(je+He-sn,Math.max(je,Vn)),lt=Ge-Bt-8;O.save(),O.fillStyle=u,O.globalAlpha=.92,St(rn,lt,sn,Bt,6),O.fill(),O.restore(),O.fillStyle=v,O.textAlign="left",O.textBaseline="top",O.fillText(pt,rn+le,lt+Et)}},Wt=ct.get(U);if(Wt&&window.cancelAnimationFrame(Wt),!_e){Gt(1);return}const Nt=performance.now(),ot=Pe=>{const De=Pe-Nt,Xe=Math.min(1,De/L);if(Gt(I(Xe)),Xe<1){const Ye=window.requestAnimationFrame(ot);ct.set(U,Ye);return}ct.delete(U)},We=window.requestAnimationFrame(ot);ct.set(U,We)})}function Mt(){B.querySelectorAll("[data-year-trend-chart]").forEach(o=>{const u=Array.from(o.querySelectorAll("[data-year-trend-point]"));if(u.length===0)return;const c=o.querySelector("[data-year-trend-active-month]"),v=o.querySelector("[data-year-trend-active-net]"),w=o.querySelector("[data-year-trend-active-income]"),T=o.querySelector("[data-year-trend-active-expense]"),D=o.querySelector("[data-year-trend-active-delta]"),A=o.querySelector("[data-year-trend-live]");if(!c||!v||!w||!T||!D)return;const L=(W,ie)=>{W.classList.remove("danger","budget-under");const Se=ie<0?"danger":ie>0?"budget-under":"";Se&&W.classList.add(Se)},I=W=>{const ie=W.dataset.monthLabel??"-",Se=Number.parseInt(W.dataset.netCents??"0",10),Le=Number.parseInt(W.dataset.actualNetCents??"0",10),he=Number.parseInt(W.dataset.incomeCents??"0",10),_e=Number.parseInt(W.dataset.expenseCents??"0",10),et=Number.parseInt(W.dataset.deltaCents??"0",10);c.textContent=ie,v.textContent=f(Se),w.textContent=f(he),T.textContent=f(_e),D.textContent=`${et>=0?"+":""}${f(et)}`,L(v,Se),L(D,et),u.forEach(ye=>{const Ce=ye===W;ye.classList.toggle("is-active",Ce),ye.setAttribute("aria-pressed",String(Ce))}),A&&(A.textContent=`${ie}: Kalkulierter Saldo ${f(Se)}, Ist-Saldo ${f(Le)}, Einkommen ${f(he)}, Ausgaben ${f(_e)}`)};u.forEach(W=>{const ie=()=>{I(W)};W.addEventListener("mouseenter",ie),W.addEventListener("focus",ie),W.addEventListener("click",ie)});const U=u.find(W=>W.dataset.pointDefault==="1")??u[u.length-1];U&&I(U)})}function dn(i){if(i==="dashboard"){const o=p.years.slice().sort((c,v)=>v.year-c.year);o.some(c=>c.year===p.dashboardYear)||(p.dashboardYear=p.selectedYear??o[0]?.year??null)}p.topModal=i,ae()}function Wn(){p.topModal&&(p.topModal=null,ae())}function hn(){p.showUnexportedChangeLogModal=!0,ae()}function _t(){p.showUnexportedChangeLogModal&&(p.showUnexportedChangeLogModal=!1,ae())}function Ct(){p.showPersistentAuditLogModal=!0,ae()}function Pt(){p.showPersistentAuditLogModal&&(p.showPersistentAuditLogModal=!1,ae())}function tn(){de||(de=!0,window.addEventListener("keydown",i=>{if(i.key==="Escape"){if(p.showUnexportedChangeLogModal){i.preventDefault(),_t();return}if(p.showPersistentAuditLogModal){i.preventDefault(),Pt();return}p.topModal&&(i.preventDefault(),Wn())}}))}function $t(){const i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(i<=0)return!1;const o=i/6;return window.scrollY>o}function wt(){const i=B.querySelector("#scroll-up-btn");i&&i.classList.toggle("is-visible",$t())}function Vs(){if(yt)return;yt=!0;const i=()=>{wt(),qe()};window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i)}function ja(){if(ue&&document.body.contains(ue))return ue;const i=document.getElementById("toast-root");if(i instanceof HTMLDivElement)return ue=i,i;const o=document.createElement("div");return o.id="toast-root",o.className="toast-root",o.setAttribute("aria-live","polite"),o.setAttribute("aria-atomic","true"),document.body.appendChild(o),ue=o,o}function ds(){if(me&&document.body.contains(me))return me;const i=document.getElementById("amount-modal-root");if(i instanceof HTMLDivElement)return me=i,i;const o=document.createElement("div");return o.id="amount-modal-root",document.body.appendChild(o),me=o,o}function pa(){if(ze&&document.body.contains(ze))return ze;const i=document.getElementById("weekly-shopping-modal-root");if(i instanceof HTMLDivElement)return ze=i,i;const o=document.createElement("div");return o.id="weekly-shopping-modal-root",document.body.appendChild(o),ze=o,o}function Tt(){if(!me){at=null;return}me.innerHTML="",at=null}function fa(){ze&&(ze.innerHTML="")}function Ya(i,o,u){const c=new Date,v=c.getFullYear(),w=c.getMonth()+1,T=c.getDate(),D=new Date(i,o,0).getDate();if(i<v||i===v&&o<w)return{occurrences:0,remainingDays:0};const A=i===v&&o===w?Math.min(T,D):1,L=Math.max(0,D-A+1);let I=0;for(let U=A;U<=D;U+=1)new Date(i,o-1,U).getDay()===u&&(I+=1);return{occurrences:I,remainingDays:L}}async function za(i,o){const u=Te();u&&(u.weeklyShoppingWeekday=i,u.weeklyShoppingEstimateCents=Math.max(0,o),await Re(`Wocheneinkauf geplant: ${Rr.find(c=>c.value===i)?.label??"Wochentag"} mit ${f(u.weeklyShoppingEstimateCents)} €`),ae())}function qs(){const i=Te(),o=wn();if(!i||!o)return;const u=pa();fa();const c=i.weeklyShoppingWeekday===null||i.weeklyShoppingWeekday===void 0?1:i.weeklyShoppingWeekday,v=i.weeklyShoppingEstimateCents??0,w=o.year,T=i.month,D=Pa(w,T),A=D?Sn(D):{foodCents:0},L=D?D.foodBudgetCents??0:0,I=A.foodCents,U=L-I;u.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Rr.map($e=>`<option value="${$e.value}" ${$e.value===c?"selected":""}>${$e.label}</option>`).join("")}
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
    `;const W=u.querySelector(".weekly-shopping-modal-backdrop"),ie=u.querySelector("#weekly-shopping-weekday"),Se=u.querySelector("#weekly-shopping-estimate"),Le=u.querySelector("#weekly-shopping-occurrences"),he=u.querySelector("#weekly-shopping-total"),_e=u.querySelector("#weekly-shopping-rest-before"),et=u.querySelector("#weekly-shopping-rest-after"),ye=u.querySelector("#weekly-shopping-days-left"),Ce=u.querySelector("#weekly-shopping-per-day"),ee=u.querySelector("#weekly-shopping-cancel"),O=u.querySelector("#weekly-shopping-save");function Yt(){const $e=Number.parseInt(ie?.value??"1",10);return Number.isInteger($e)&&$e>=0&&$e<=6?$e:1}function At(){return Math.max(0,Ke(Se?.value??"0"))}function gn(){const $e=Yt(),zt=At(),{occurrences:je,remainingDays:Ge}=Ya(w,T,$e),He=je*zt,st=U-He,it=Ge>0?Math.trunc(st/Ge):0;Le&&(Le.textContent=`${je}`),he&&(he.textContent=`${f(He)} €`),_e&&(_e.textContent=`${f(U)} €`),et&&(et.textContent=`${f(st)} €`,et.className=st<0?"danger":st>0?"budget-under":""),ye&&(ye.textContent=`${Ge}`),Ce&&(Ce.textContent=`${f(it)} €`,Ce.className=it<0?"danger":it>0?"budget-under":"")}async function Lt(){await za(Yt(),At()),fa()}ee?.addEventListener("click",()=>{fa()}),O?.addEventListener("click",async()=>{await Lt()}),ie?.addEventListener("change",()=>{gn()}),Se?.addEventListener("input",()=>{gn()}),Se?.addEventListener("keydown",async $e=>{if($e.key==="Escape"){$e.preventDefault(),fa();return}$e.key==="Enter"&&($e.preventDefault(),await Lt())}),W?.addEventListener("click",$e=>{$e.target===W&&fa()}),window.setTimeout(()=>{Se?.focus(),Se?.select(),gn()},0)}function xn(i,o){let u=i;const c=o.min;if(c){const w=Number.parseFloat(c);if(!Number.isNaN(w)){const T=Math.round(w*100);u=Math.max(u,T)}}const v=o.max;if(v){const w=Number.parseFloat(v);if(!Number.isNaN(w)){const T=Math.round(w*100);u=Math.min(u,T)}}return u}function ut(i){if(i.disabled)return;const o=ds();Tt(),at=i;const u=Ke(i.value||"0"),c="Betrag anpassen";o.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${c}">
        <div class="amount-modal card">
          <h3>${c}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${f(u)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${f(u)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${f(u)} €</strong></div>
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
    `;const v=o.querySelector(".amount-modal-backdrop"),w=o.querySelector("#amount-modal-delta"),T=o.querySelector("#amount-modal-next-delta"),D=o.querySelector("#amount-modal-next-overwrite"),A=o.querySelector("#amount-modal-cancel"),L=o.querySelector("#amount-modal-overwrite"),I=o.querySelector("#amount-modal-apply");function U(){const he=Ke(w?.value??"0");return xn(u+he,i)}function W(){const he=Ke(w?.value??"0");return xn(he,i)}function ie(){T&&(T.textContent=`${f(U())} €`),D&&(D.textContent=`${f(W())} €`)}function Se(){const he=at;if(!he){Tt();return}const _e=U();Tt(),he.value=Dt(_e),he.dispatchEvent(new Event("change",{bubbles:!0}))}function Le(){const he=at;if(!he){Tt();return}const _e=W();Tt(),he.value=Dt(_e),he.dispatchEvent(new Event("change",{bubbles:!0}))}A?.addEventListener("click",()=>{Tt()}),L?.addEventListener("click",()=>{Le()}),I?.addEventListener("click",()=>{Se()}),w?.addEventListener("input",()=>{ie()}),w?.addEventListener("keydown",he=>{if(he.key==="Escape"){he.preventDefault(),Tt();return}he.key==="Enter"&&(he.preventDefault(),Se())}),v?.addEventListener("click",he=>{he.target===v&&Tt()}),window.setTimeout(()=>{w?.focus(),w?.select(),ie()},0)}function Z(i,o="success"){const u=ja(),c=document.createElement("div");c.className=`toast toast-${o}`,c.textContent=i,u.appendChild(c),requestAnimationFrame(()=>{c.classList.add("toast-visible")});const v=o==="error"?5e3:3e3;window.setTimeout(()=>{c.classList.remove("toast-visible"),window.setTimeout(()=>{c.remove()},220)},v)}function pn(){return new Date().getMonth()+1}function qt(){return new Date().getFullYear()}function hs(i){const o=qt(),u=i.find(c=>c.year===o);return u?u.year:i[0]?.year??null}function kn(){return new Date().toISOString().slice(0,10)}function Ma(){const i=new Date,o=String(i.getHours()).padStart(2,"0"),u=String(i.getMinutes()).padStart(2,"0"),c=String(i.getSeconds()).padStart(2,"0");return`${o}${u}${c}`}function ge(i){return(i/100).toFixed(2).replace(".",",")}function Un(i){return i.includes(";")||i.includes('"')||i.includes(`
`)||i.includes("\r")?`"${i.replaceAll('"','""')}"`:i}function Rt(i){return i.map(o=>Un(String(o))).join(";")}function ps(i){return String(i).padStart(2,"0")}function ne(i){if(!i)return"";const o=i.slice(0,10),u=o.split("-");if(u.length!==3)return o;const[c,v,w]=u;return`${w}.${v}.${c}`}function Dn(i,o,u,c){i.push(o),i.push(Rt(u)),c.length===0?i.push(Rt(["Keine Daten"])):c.forEach(v=>{i.push(Rt(v))}),i.push("")}function Fe(i){if(!p.selectedYear)return Z("Bitte zuerst ein Jahr auswählen.","error"),null;const o=p.years.find(u=>u.year===p.selectedYear);if(!o)return Z("Ausgewähltes Jahr wurde nicht gefunden.","error"),null;if(i==="month"){const u=o.months.find(c=>c.month===p.selectedMonth);return u?[{year:o.year,month:u}]:(Z("Ausgewählter Monat wurde nicht gefunden.","error"),null)}return o.months.slice().sort((u,c)=>u.month-c.month).map(u=>({year:o.year,month:u}))}function rt(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Rs(){const i=localStorage.getItem(Ae);return i&&qr(i)?i:"light"}function $n(i){p.theme=i,document.documentElement.setAttribute("data-theme",i),localStorage.setItem(Ae,i)}function js(){return localStorage.getItem(Q)==="1"}function fs(i){localStorage.setItem(Q,i?"1":"0")}function Ys(){const i=localStorage.getItem(fe);if(!i)return[];try{const o=JSON.parse(i);return Array.isArray(o)?o.filter(u=>{if(!u||typeof u!="object")return!1;const c=u;return typeof c.id=="string"&&typeof c.timestampIso=="string"&&typeof c.message=="string"}).slice(-200):[]}catch{return[]}}function vs(i){localStorage.setItem(fe,JSON.stringify(i.slice(-200)))}function Ga(){const i=localStorage.getItem(oe);if(!i)return null;const o=i.trim();return o||null}function nn(){const i={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},o=localStorage.getItem(Ee);if(!o)return i;try{const u=JSON.parse(o),c=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:c(u.foodBudgetCents),goingOutBudgetCents:c(u.goingOutBudgetCents),fixedBudgetCents:c(u.fixedBudgetCents),variableBudgetCents:c(u.variableBudgetCents),miscBudgetCents:c(u.miscBudgetCents)}}catch{return i}}function ms(i){localStorage.setItem(Ee,JSON.stringify(i))}function Jn(i){i.months.forEach(o=>{const{recurringBudgetDefaults:u}=p;typeof u.foodBudgetCents=="number"&&(o.foodBudgetCents=u.foodBudgetCents),typeof u.goingOutBudgetCents=="number"&&(o.goingOutBudgetCents=u.goingOutBudgetCents),typeof u.fixedBudgetCents=="number"&&(o.fixedBudgetCents=u.fixedBudgetCents),typeof u.variableBudgetCents=="number"&&(o.variableBudgetCents=u.variableBudgetCents),typeof u.miscBudgetCents=="number"&&(o.miscBudgetCents=u.miscBudgetCents)})}function gs(i){const o=i.trim();o&&localStorage.setItem(oe,o)}async function Hn(){if(p.savedSearchEvaluations.length===0)return;const i=qt(),o=pn(),u=p.savedSearchEvaluations.map(c=>({...Nr(p.years,c.keyword,i,o),id:c.id,createdAt:c.createdAt}));p.savedSearchEvaluations=u,await Ns(u)}async function Ot(){ja(),$n(Rs()),p.hasUnexportedChanges=js(),p.unexportedChangeLog=Ys(),p.persistentAuditLog=await lr(),p.lastBackupFileName=Ga(),p.recurringBudgetDefaults=nn(),tn(),Vs();const[i,o,u,c]=await Promise.all([Ba(),ar(),rr(),or()]);p.years=i,p.annualVariableFixedTemplates=u.templates,p.annualVariableFixedTemplateVersion=u.version,fn(p.years),bs(p.years),p.fixedTemplates=o.templates,p.fixedTemplateVersion=o.version,p.savedSearchEvaluations=c.results,await _a(p.years),await Hn(),i.length>0&&(p.selectedYear=hs(i),p.selectedMonth=pn()),ae()}function fn(i){const o=u=>u==="balance"||u==="fresh"||u==="salary"?u:void 0;i.forEach(u=>{u.months.forEach(c=>{if(c.weeklyShoppingWeekday!==null&&c.weeklyShoppingWeekday!==void 0){const v=Number(c.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?c.weeklyShoppingWeekday=v:c.weeklyShoppingWeekday=null}else c.weeklyShoppingWeekday=null;typeof c.weeklyShoppingEstimateCents!="number"&&(c.weeklyShoppingEstimateCents=0),typeof c.foodBudgetCents!="number"&&(c.foodBudgetCents=0),typeof c.goingOutBudgetCents!="number"&&(c.goingOutBudgetCents=0),Array.isArray(c.incomes)?c.incomes=c.incomes.map(v=>{const w=o(v.incomeSource);if(!w){const{incomeSource:T,...D}=v;return D}return{...v,incomeSource:w}}):c.incomes=[],typeof c.fixedBudgetCents!="number"&&(c.fixedBudgetCents=c.fixedCosts.reduce((v,w)=>v+w.plannedCents,0)),typeof c.variableBudgetCents!="number"&&(c.variableBudgetCents=c.variablePositions.reduce((v,w)=>v+w.budgetCents,0)),Array.isArray(c.variablePositions)||(c.variablePositions=[]),typeof c.miscBudgetCents!="number"&&(c.miscBudgetCents=0)})})}function Xn(i){return i==="balance"?"Bestandsguthaben":i==="salary"?"Gehalt":i==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function an(i){return i==="fresh"||i==="salary"||!i}async function _a(i){for(const o of i)await Ea(o)}function wn(){if(p.selectedYear)return p.years.find(i=>i.year===p.selectedYear)}function Te(){const i=wn();if(i)return i.months.find(o=>o.month===p.selectedMonth)}function Pa(i,o){const u=p.years.find(c=>c.year===i);if(u)return u.months.find(c=>c.month===o)}function Sn(i){const o=i.days.reduce((D,A)=>D+A.foodCents,0),u=i.days.reduce((D,A)=>D+A.goingOutCents,0),c=i.fixedCosts.reduce((D,A)=>D+A.actualCents,0),v=i.variableCosts.reduce((D,A)=>D+A.amountCents,0)+i.variablePositions.reduce((D,A)=>D+A.actualCents,0),w=i.miscCosts.reduce((D,A)=>D+A.amountCents,0),T=o+u+c+v+w;return{foodCents:o,goingOutCents:u,fixedCents:c,variableCents:v,miscCents:w,totalCents:T}}function jt(i){const o=i.foodBudgetCents??0,u=i.goingOutBudgetCents??0,c=i.fixedBudgetCents??i.fixedCosts.reduce((T,D)=>T+D.plannedCents,0),v=i.variablePositions.reduce((T,D)=>T+D.budgetCents,0),w=i.miscBudgetCents??0;return o+u+c+(i.variableBudgetCents??v)+w}function te(i){return i.months.reduce((o,u)=>{const c=Sn(u);return{foodCents:o.foodCents+c.foodCents,goingOutCents:o.goingOutCents+c.goingOutCents,fixedCents:o.fixedCents+c.fixedCents,variableCents:o.variableCents+c.variableCents,miscCents:o.miscCents+c.miscCents,totalCents:o.totalCents+c.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function va(i){return i.months.slice().sort((o,u)=>o.month-u.month).map(o=>({month:o.month,summary:Sn(o)}))}function vn(i){const o=i.months.reduce((T,D)=>T+(D.foodBudgetCents??0),0),u=i.months.reduce((T,D)=>T+(D.goingOutBudgetCents??0),0),c=i.months.reduce((T,D)=>T+(D.fixedBudgetCents??D.fixedCosts.reduce((A,L)=>A+L.plannedCents,0)),0),v=i.months.reduce((T,D)=>T+(D.variableBudgetCents??D.variablePositions.reduce((A,L)=>A+L.budgetCents,0)),0),w=i.months.reduce((T,D)=>T+(D.miscBudgetCents??0),0);return{foodCents:o,goingOutCents:u,fixedCents:c,variableCents:v,miscCents:w,totalCents:o+u+c+v+w}}function Qn(i){return i.months.reduce((o,u)=>o+u.incomes.reduce((c,v)=>c+(an(v.incomeSource)?v.amountCents:0),0),0)}function z(i){return i.months.reduce((o,u)=>(u.incomes.forEach(c=>{if(c.incomeSource==="salary"){o.salaryIncomeCents+=c.amountCents;return}(c.incomeSource==="fresh"||c.incomeSource==null)&&(o.freshIncomeCents+=c.amountCents)}),o),{salaryIncomeCents:0,freshIncomeCents:0})}function ma(i,o){const u=i.months.slice().sort((c,v)=>c.month-v.month)[0];return u?o.get(re(i.year,u.month))?.carriedFromPreviousCents??0:0}function Wa(){const i=p.years.slice().sort((c,v)=>c.year-v.year).flatMap(c=>c.months.slice().sort((v,w)=>v.month-w.month).map(v=>({year:c.year,month:v}))),o=new Map;let u=0;return i.forEach(({year:c,month:v},w)=>{const T=v.carryoverOverrideCents,D=typeof T=="number",A=D?T:u,L=w>0||D,I=v.incomes.reduce((Se,Le)=>Se+(an(Le.incomeSource)?Le.amountCents:0),0),U=jt(v),W=I+A,ie=W-U;o.set(re(c,v.month),{hasPreviousMonth:L,carriedFromPreviousCents:A,recordedIncomeCents:I,effectiveIncomeCents:W,plannedBudgetCents:U,netCents:ie}),u=ie}),o}function dt(i,o){return o<=0?"":i>o?"budget-over":i<o?"budget-under":""}function Ua(i){return`${i>0?"+":""}${f(i)}`}function En(i,o){const u=i-o,c=dt(o,i);return`${f(i)} <span class="eval-diff ${c}">(Δ ${Ua(u)})</span>`}function ga(i,o){const u=i!==null,c=u?i-o:null,v=u?dt(o,i):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${u?`${f(i)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(o)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${c===null?"-":`${f(c)} €`}</strong>
      </div>
    </div>`}async function zs(i){if(await Fi(i)){alert(`Jahr ${i} existiert bereits.`);return}const u=Ir(i,p.fixedTemplates,p.fixedTemplateVersion);Jn(u),aa(u),await Ea(u),p.years=await Ba(),Xt(`Jahr ${i} wurde angelegt`),p.selectedYear=i,p.selectedMonth=pn(),Z(`Jahr ${i} wurde angelegt.`),ae()}function Xt(i="Änderung an den Daten"){p.hasUnexportedChanges=!0,fs(!0);const o=p.selectedYear?`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",u=new Date().toISOString(),c=`${i} (${o})`,v={id:bt("change"),timestampIso:u,message:c};p.unexportedChangeLog=[...p.unexportedChangeLog,v].slice(-200),vs(p.unexportedChangeLog);const w={id:bt("audit"),timestampIso:u,message:c};p.persistentAuditLog=[...p.persistentAuditLog,w].slice().sort((T,D)=>T.timestampIso.localeCompare(D.timestampIso)),Di(w).catch(T=>{console.error("Audit-Log konnte nicht gespeichert werden",T),Z("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Zn(i){const o=i.trim();o&&(p.lastBackupFileName=o,gs(o))}function ea(i){p.hasUnexportedChanges=!1,fs(!1),p.unexportedChangeLog=[],vs([]),p.showUnexportedChangeLogModal=!1,Zn(i)}async function Re(i){const o=wn();o&&(await Ea(o),p.years=await Ba(),Xt(i))}async function ke(i){for(const o of p.years)await Ea(o);p.years=await Ba(),Xt(i)}function re(i,o){return i*100+o}function ta(i,o,u){const c=`${i} auf ${f(u)} € gesetzt`;return u>o?`${c} (erhöht um ${f(u-o)} €)`:u<o?`${c} (verringert um ${f(o-u)} €)`:c}function na(i){const o=i.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!o)return null;const u=o[1],c=o[2];return!u||!c?null:{year:Number.parseInt(u,10),month:Number.parseInt(c,10)}}function ba(i,o){const u=na(i.dueDateIso);if(!u||o.year<u.year)return;const c=o.months.find(w=>w.month===u.month);!c||c.variablePositions.some(w=>w.autoAnnualTemplateId===i.id)||(c.variablePositions=[{id:bt("varpos"),name:i.name,budgetCents:i.plannedCents,actualCents:0,autoAnnualTemplateId:i.id},...c.variablePositions],xt(c))}function aa(i){p.annualVariableFixedTemplates.forEach(o=>{ba(o,i)})}function bs(i){const o=new Set(p.annualVariableFixedTemplates.map(u=>u.id));i.forEach(u=>{u.months.forEach(c=>{const v=c.variablePositions.some(T=>typeof T.autoAnnualTemplateId=="string"),w=c.fixedCosts.some(T=>typeof T.autoAnnualTemplateId=="string");v&&(c.variablePositions=c.variablePositions.filter(T=>T.autoAnnualTemplateId?o.has(T.autoAnnualTemplateId):!0),xt(c)),w&&(c.fixedCosts=c.fixedCosts.filter(T=>!T.autoAnnualTemplateId),ht(c))}),aa(u)})}function ht(i){i.fixedBudgetCents=i.fixedCosts.reduce((o,u)=>o+u.plannedCents,0)}function xt(i){i.variableBudgetCents=i.variablePositions.reduce((o,u)=>o+u.budgetCents,0)}function Bn(){if(p.selectedYear)return`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`;const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function ya(){const i=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Bn());if(!i)return null;const o=i.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!o)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const u=o[1],c=o[2];return!u||!c?null:{year:Number.parseInt(u,10),month:Number.parseInt(c,10)}}function Gs(i,o){const u=re(o.year,o.month);p.years.forEach(c=>{c.months.forEach(v=>{if(re(c.year,v.month)<u)return;v.fixedCosts.some(T=>T.templateId===i.id)||(v.fixedCosts.push({id:bt("fixed"),templateId:i.id,name:i.name,plannedCents:i.plannedCents,actualCents:0}),ht(v))})})}function Mn(i,o,u){const c=re(u.year,u.month);p.years.forEach(v=>{v.months.forEach(w=>{re(v.year,w.month)<c||(w.fixedCosts=w.fixedCosts.map(T=>T.templateId!==o.id?T:{...T,name:o.name,plannedCents:o.plannedCents,actualCents:T.actualCents===i.plannedCents?o.plannedCents:T.actualCents}),ht(w))})})}function ys(i,o){const u=re(o.year,o.month);p.years.forEach(c=>{c.months.forEach(v=>{re(c.year,v.month)<u||(v.fixedCosts=v.fixedCosts.filter(w=>w.templateId!==i),ht(v))})})}async function On(i,o){const u=i.trim();if(!u)return;const c=ya();if(!c)return;const v=!!p.editingFixedTemplateId;if(p.editingFixedTemplateId){const w=p.fixedTemplates.find(D=>D.id===p.editingFixedTemplateId);if(!w)return;const T={...w,name:u,plannedCents:o};p.fixedTemplates=p.fixedTemplates.map(D=>D.id===p.editingFixedTemplateId?T:D),Mn(w,T,c)}else{const w={id:bt("tpl"),name:u,plannedCents:o};p.fixedTemplates=[...p.fixedTemplates,w],Gs(w,c)}p.fixedTemplateVersion=await sr(p.fixedTemplates),p.editingFixedTemplateId=null,await ke(v?`Fixkosten-Vorlage aktualisiert: ${u} (${f(o)} €)`:`Fixkosten-Vorlage hinzugefügt: ${u} (${f(o)} €)`),Z(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function Cs(i){p.editingFixedTemplateId=i,ae()}function Ja(){p.editingFixedTemplateId=null,ae()}async function Ze(i){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const u=ya();if(!u)return;const c=p.fixedTemplates.find(v=>v.id===i);p.fixedTemplates=p.fixedTemplates.filter(v=>v.id!==i),ys(i,u),p.editingFixedTemplateId===i&&(p.editingFixedTemplateId=null),p.fixedTemplateVersion=await sr(p.fixedTemplates),await ke(`Fixkosten-Vorlage gelöscht: ${c?.name??"Unbekannt"}`),Z("Fixkosten-Vorlage wurde gelöscht."),ae()}async function In(i,o,u){const c=i.trim();if(!c){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=na(o);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const w={id:bt("annualtpl"),name:c,plannedCents:u,dueDateIso:o};p.annualVariableFixedTemplates=[...p.annualVariableFixedTemplates,w],p.years.forEach(T=>{ba(w,T)}),p.annualVariableFixedTemplateVersion=await ir(p.annualVariableFixedTemplates),await ke(`Variable Fixkosten-Vorlage hinzugefügt: ${c} (${f(u)} €, jährlich in ${xe(v.month)})`),Z("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function mn(i){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const u=p.annualVariableFixedTemplates.find(c=>c.id===i);u&&(p.annualVariableFixedTemplates=p.annualVariableFixedTemplates.filter(c=>c.id!==i),p.years.forEach(c=>{c.months.forEach(v=>{v.variablePositions=v.variablePositions.filter(w=>w.autoAnnualTemplateId!==i),xt(v),v.fixedCosts=v.fixedCosts.filter(w=>w.autoAnnualTemplateId!==i),ht(v)})}),p.annualVariableFixedTemplateVersion=await ir(p.annualVariableFixedTemplates),await ke(`Variable Fixkosten-Vorlage gelöscht: ${u.name}`),Z("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function Ha(i,o,u){const c=Te();if(!c)return;const w=c.days.find(T=>T.isoDate===i)?.[o]??0;c.days=c.days.map(T=>T.isoDate===i?{...T,[o]:u}:T),await Re(ta(`${o==="foodCents"?"Essen":"Ausgehen"} am ${i} angepasst`,w,u)),ae()}async function sa(i,o){const u=Te();if(!u)return;const c=u.fixedCosts.find(v=>v.id===i);u.fixedCosts=u.fixedCosts.map(v=>v.id===i?{...v,actualCents:o}:v),await Re(`Fixkosten-Ist angepasst: ${c?.name??"Unbekannt"} auf ${f(o)} €`),ae()}async function Ta(i,o){const u=Te();if(!u)return;const c=u.fixedCosts.find(w=>w.id===i);if(!c)return;const v=c.plannedCents;u.fixedCosts=u.fixedCosts.map(w=>w.id===i?{...w,plannedCents:o}:w),ht(u),await Re(ta(`Fixkosten-Budget angepasst: ${c.name}`,v,o)),ae()}async function Xa(i,o){const u=Te();if(!u)return;const c=i.trim();if(!c){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(o<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:bt("fixed"),templateId:bt("fixed-local"),name:c,plannedCents:o,actualCents:0};u.fixedCosts=[v,...u.fixedCosts],ht(u),await Re(`Fixkosten-Position hinzugefügt: ${c} (${f(o)} €)`),Z("Fixkosten-Position wurde hinzugefügt."),ae()}async function Qa(i){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const u=Te();if(!u)return;const c=u.fixedCosts.find(v=>v.id===i);c&&(u.fixedCosts=u.fixedCosts.filter(v=>v.id!==i),ht(u),await Re(`Fixkosten-Position gelöscht: ${c.name}`),Z("Fixkosten-Position wurde gelöscht."),ae())}async function Ln(){const i=Te();if(!i)return;if(i.fixedCosts.length===0){Z("Keine Fixkosten zum Löschen vorhanden.","error");return}if(!confirm("Alle Fixkosten im aktuellen Monat wirklich löschen?"))return;const u=i.fixedCosts.length;i.fixedCosts=[],ht(i),await Re(`Alle Fixkosten im Monat gelöscht: ${u} Position(en)`),Z(`${u} Fixkosten-Position(en) wurden gelöscht.`),ae()}async function xs(i){await ra("fixedBudgetCents",i,"Fixkosten")}async function Aa(i){await ra("foodBudgetCents",i,"Essen")}async function ks(i){await ra("goingOutBudgetCents",i,"Ausgehen")}async function be(i){await ra("miscBudgetCents",i,"Sonstiges")}async function $s(i){await ra("variableBudgetCents",i,"Variable Kosten")}async function ra(i,o,u){const c=Te(),v=p.selectedYear;if(!c||!v||c[i]===o)return;const w=c[i];if(c[i]=o,confirm(`Soll das Budget "${u}" auch für zukünftige Monate übernommen werden?`)){const D=re(v,p.selectedMonth);p.years.forEach(L=>{L.months.forEach(I=>{re(L.year,I.month)<=D||(I[i]=o)})}),p.recurringBudgetDefaults[i]=o,ms(p.recurringBudgetDefaults);const A=ta(`Budget "${u}"`,w??0,o);await ke(`${A} (inkl. zukünftiger Monate)`),Z(`Budget "${u}" wurde für zukünftige Monate übernommen.`),ae();return}await Re(ta(`Budget "${u}"`,w??0,o)),ae()}async function Ca(i){const o=Te();o&&(i===null?o.carryoverOverrideCents=null:o.carryoverOverrideCents=i,await Re(i===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(i)} € gesetzt`),ae())}async function ia(i,o,u){const c=Te(),v=p.selectedYear;if(!c||!v)return;const w=i.trim();if(!w){alert("Bitte Bezeichnung für die Position angeben.");return}if(c.variablePositions=[{id:bt("varpos"),name:w,budgetCents:o,actualCents:0},...c.variablePositions],xt(c),u){const T=re(v,p.selectedMonth);p.years.forEach(D=>{D.months.forEach(A=>{re(D.year,A.month)<=T||(A.variablePositions=[{id:bt("varpos"),name:w,budgetCents:o,actualCents:0},...A.variablePositions],xt(A))})}),await ke(`Variable Position hinzugefügt: ${w} (${f(o)} €) für zukünftige Monate`),Z("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Re(`Variable Position hinzugefügt: ${w} (${f(o)} €)`),Z("Variable Position wurde hinzugefügt."),ae()}async function ws(i,o){const u=Te();if(!u)return;const c=u.variablePositions.find(w=>w.id===i),v=c?.actualCents??0;u.variablePositions=u.variablePositions.map(w=>w.id===i?{...w,actualCents:o}:w),await Re(ta(`Istwert Variable Position angepasst: ${c?.name??"Unbekannt"}`,v,o)),ae()}async function Ss(i,o){const u=Te();if(!u)return;const c=u.variablePositions.find(w=>w.id===i),v=c?.budgetCents??0;u.variablePositions=u.variablePositions.map(w=>w.id===i?{...w,budgetCents:o}:w),xt(u),await Re(ta(`Budget Variable Position angepasst: ${c?.name??"Unbekannt"}`,v,o)),ae()}async function Es(i){if(!confirm("Variable Position wirklich löschen?"))return;const u=Te(),c=p.selectedYear;if(!u||!c)return;const v=u.variablePositions.find(A=>A.id===i);if(!v)return;const w=re(c,p.selectedMonth),D=p.years.some(A=>A.months.some(L=>re(A.year,L.month)>w&&L.variablePositions.some(I=>I.name===v.name&&I.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.variablePositions=u.variablePositions.filter(A=>A.id!==i),xt(u),D){p.years.forEach(A=>{A.months.forEach(L=>{re(A.year,L.month)<=w||(L.variablePositions=L.variablePositions.filter(I=>!(I.name===v.name&&I.budgetCents===v.budgetCents)),xt(L))})}),await ke(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),Z("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Re(`Variable Position gelöscht: ${v.name}`),Z("Variable Position wurde gelöscht."),ae()}async function Ie(i){const o=Te(),u=p.selectedYear;if(!o||!u)return;const c=o.variablePositions.find(I=>I.id===i);if(!c)return;const v={year:p.selectedMonth===12?u+1:u,month:p.selectedMonth===12?1:p.selectedMonth+1};let w=p.years.find(I=>I.year===v.year);if(!w){const I=Ir(v.year,p.fixedTemplates,p.fixedTemplateVersion);Jn(I),aa(I),await Ea(I),p.years=[...p.years,I].sort((U,W)=>U.year-W.year),w=I}const T=w.months.find(I=>I.month===v.month);if(!T)return;const D=T.variablePositions.some(I=>I.id===c.id||I.name===c.name&&I.budgetCents===c.budgetCents);if(o.variablePositions=o.variablePositions.filter(I=>I.id!==i),xt(o),!D){const U=T.variablePositions.some(W=>W.id===c.id)?{...c,id:bt("varpos")}:c;T.variablePositions=[U,...T.variablePositions],xt(T)}const A=`${xe(v.month)} ${v.year}`,L=`Variable Position verschoben: ${c.name} → ${A}`;if(v.year===u)await Re(L);else{const I=wn();if(!I)return;await Ea(I),await Ea(w),p.years=await Ba(),fn(p.years),Xt(L)}Z(D?`Position entfernt (im Folgemonat schon vorhanden: ${A}).`:`Position in den Folgemonat verschoben: ${A}.`),ae()}async function oa(i,o,u){const c=Te(),v=p.selectedYear;if(!c||!v)return;const w=i.trim();if(!w){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(o<=0){alert("Bitte einen positiven Betrag eingeben.");return}const T=tr(w,o);if(c.miscCosts=[T,...c.miscCosts],u){const D=re(v,p.selectedMonth);p.years.forEach(A=>{A.months.forEach(L=>{re(A.year,L.month)<=D||(L.miscCosts=[tr(w,o),...L.miscCosts])})}),await ke(`Sonstige Position hinzugefügt: ${w} (${f(o)} €) für zukünftige Monate`),Z("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Re(`Sonstige Position hinzugefügt: ${w} (${f(o)} €)`),Z("Sonstige Position wurde hinzugefügt."),ae()}function Nn(i){const o=[];let u="",c=!1;for(let v=0;v<i.length;v+=1){const w=i[v],T=i[v+1];if(w==='"'){c&&T==='"'?(u+='"',v+=1):c=!c;continue}if(w===";"&&!c){o.push(u.trim()),u="";continue}u+=w}return o.push(u.trim()),o}async function la(i){const o=Te();if(!o){Z("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(c.length===0){Z("CSV-Datei ist leer.","error");return}const v=new Set(o.miscCosts.map(A=>`${A.description}__${A.amountCents}`));let w=0,T=0,D=0;if(c.forEach(A=>{const L=Nn(A);if(L.length!==2){D+=1;return}const I=L[0]?.trim()??"",U=L[1]?.trim()??"",W=Ke(U);if(!I||W<=0){D+=1;return}const ie=`${I}__${W}`;if(v.has(ie)){T+=1;return}o.miscCosts.push(tr(I,W)),v.add(ie),w+=1}),w===0){const A=D>0||T>0?`Keine Position importiert (Duplikate: ${T}, ungültig: ${D}).`:"Keine Position importiert.";Z(A,"error");return}await Re(`Sonstiges CSV-Import: ${w} Position(en), Duplikate übersprungen: ${T}, ungültige Zeilen: ${D}`),Z(`Import abgeschlossen: ${w} übernommen, ${T} Duplikate, ${D} ungültig.`),ae()}async function Za(i){const o=Te();if(!o){Z("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(c.length===0){Z("CSV-Datei ist leer.","error");return}const v=new Set(o.fixedCosts.map(A=>`${A.name}__${A.plannedCents}__${A.actualCents}`));let w=0,T=0,D=0;if(c.forEach(A=>{const L=Nn(A);if(L.length!==2){D+=1;return}const I=L[0]?.trim()??"",U=L[1]?.trim()??"",W=Ke(U);if(!I||W<=0){D+=1;return}const ie=`${I}__${W}__${W}`;if(v.has(ie)){T+=1;return}o.fixedCosts.push({id:bt("fixed"),templateId:bt("fixed-local"),name:I,plannedCents:W,actualCents:W}),v.add(ie),w+=1}),w===0){const A=D>0||T>0?`Keine Position importiert (Duplikate: ${T}, ungültig: ${D}).`:"Keine Position importiert.";Z(A,"error");return}ht(o),await Re(`Fixkosten CSV-Import: ${w} Position(en), Duplikate übersprungen: ${T}, ungültige Zeilen: ${D}`),Z(`Import abgeschlossen: ${w} übernommen, ${T} Duplikate, ${D} ungültig.`),ae()}async function es(i){const o=Te();if(!o){Z("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(c.length===0){Z("CSV-Datei ist leer.","error");return}const v=new Set(o.variablePositions.map(A=>`${A.name}__${A.budgetCents}__${A.actualCents}`));let w=0,T=0,D=0;if(c.forEach(A=>{const L=Nn(A);if(L.length!==2){D+=1;return}const I=L[0]?.trim()??"",U=L[1]?.trim()??"",W=Ke(U);if(!I||W<=0){D+=1;return}const ie=`${I}__${W}__${W}`;if(v.has(ie)){T+=1;return}o.variablePositions.push({id:bt("varpos"),name:I,budgetCents:W,actualCents:W}),v.add(ie),w+=1}),w===0){const A=D>0||T>0?`Keine Position importiert (Duplikate: ${T}, ungültig: ${D}).`:"Keine Position importiert.";Z(A,"error");return}xt(o),await Re(`Variable CSV-Import: ${w} Position(en), Duplikate übersprungen: ${T}, ungültige Zeilen: ${D}`),Z(`Import abgeschlossen: ${w} übernommen, ${T} Duplikate, ${D} ungültig.`),ae()}async function Fa(i){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const u=Te(),c=p.selectedYear;if(!u||!c)return;const v=u.miscCosts.find(A=>A.id===i);if(!v)return;const w=re(c,p.selectedMonth),D=p.years.some(A=>A.months.some(L=>re(A.year,L.month)>w&&L.miscCosts.some(I=>I.description===v.description&&I.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.miscCosts=u.miscCosts.filter(A=>A.id!==i),D){p.years.forEach(A=>{A.months.forEach(L=>{re(A.year,L.month)<=w||(L.miscCosts=L.miscCosts.filter(I=>!(I.description===v.description&&I.amountCents===v.amountCents)))})}),await ke(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),Z("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Re(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €)`),Z("Sonstige Position wurde gelöscht."),ae()}async function ts(i,o,u,c){const v=Te(),w=p.selectedYear;if(!v||!w)return;const T=i.trim();if(!T){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(o<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const D=Lr(T,o,u);if(v.incomes=[D,...v.incomes],c){const A=re(w,p.selectedMonth);p.years.forEach(L=>{L.months.forEach(I=>{re(L.year,I.month)<=A||(I.incomes=[Lr(T,o,u),...I.incomes])})}),await ke(`Einkommen hinzugefügt: ${T} (${f(o)} €, ${Xn(u)}) für zukünftige Monate`),Z("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await Re(`Einkommen hinzugefügt: ${T} (${f(o)} €, ${Xn(u)})`),Z("Einkommen wurde hinzugefügt."),ae()}async function Da(i,o){const u=Te();if(!u)return;const c=u.incomes.find(v=>v.id===i);c&&(u.incomes=u.incomes.map(v=>{if(v.id!==i)return v;if(!o){const{incomeSource:w,...T}=v;return T}return{...v,incomeSource:o}}),await Re(`Einkommensart angepasst: ${c.description} → ${Xn(o)}`),ae())}async function Bs(i){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const u=Te(),c=p.selectedYear;if(!u||!c)return;const v=u.incomes.find(A=>A.id===i);if(!v)return;const w=re(c,p.selectedMonth),D=p.years.some(A=>A.months.some(L=>re(A.year,L.month)>w&&L.incomes.some(I=>I.description===v.description&&I.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.incomes=u.incomes.filter(A=>A.id!==i),D){p.years.forEach(A=>{A.months.forEach(L=>{re(A.year,L.month)<=w||(L.incomes=L.incomes.filter(I=>!(I.description===v.description&&I.amountCents===v.amountCents)))})}),await ke(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),Z("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Re(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €)`),Z("Einkommen wurde gelöscht."),ae()}async function Ms(){const i=await Ii(),o=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),u=URL.createObjectURL(o),c=`haushaltsbuch-backup-${kn()}-${Ma()}.json`,v=document.createElement("a");v.href=u,v.download=c,v.click(),URL.revokeObjectURL(u),ea(c),ae(),Z("Backup wurde exportiert.")}async function Be(){const i=[];i.push(Rt(["Jahr","Monat","Essen Budget (€)","Essen Ist (€)","Essen Differenz (€)","Freizeit Budget (€)","Freizeit Ist (€)","Freizeit Differenz (€)","Fixkosten Budget (€)","Fixkosten Ist (€)","Fixkosten Differenz (€)","Variabel Budget (€)","Variabel Ist (€)","Variabel Differenz (€)","Sonstiges Budget (€)","Sonstiges Ist (€)","Sonstiges Differenz (€)","Gesamt Budget (€)","Gesamt Ist (€)","Gesamt Differenz (€)","Einnahmen erfasst (€)","Rückdeckung aus Vormonat (€)"]));const o=p.years.slice().sort((A,L)=>A.year-L.year),u=Wa();o.forEach(A=>{A.months.slice().sort((L,I)=>L.month-I.month).forEach(L=>{const I=Sn(L),U=L.foodBudgetCents??0,W=L.goingOutBudgetCents??0,ie=L.fixedBudgetCents??L.fixedCosts.reduce((ee,O)=>ee+O.plannedCents,0),Se=L.variableBudgetCents??L.variablePositions.reduce((ee,O)=>ee+O.budgetCents,0),Le=L.miscBudgetCents??0,he=jt(L),_e=he-I.totalCents,et=L.incomes.reduce((ee,O)=>ee+(an(O.incomeSource)?O.amountCents:0),0),ye=u.get(re(A.year,L.month)),Ce=ye?.hasPreviousMonth?ge(ye.carriedFromPreviousCents):"";i.push(Rt([A.year,xe(L.month),ge(U),ge(I.foodCents),ge(U-I.foodCents),ge(W),ge(I.goingOutCents),ge(W-I.goingOutCents),ge(ie),ge(I.fixedCents),ge(ie-I.fixedCents),ge(Se),ge(I.variableCents),ge(Se-I.variableCents),ge(Le),ge(I.miscCents),ge(Le-I.miscCents),ge(he),ge(I.totalCents),ge(_e),ge(et),Ce]))})});const c=`\uFEFF${i.join(`
`)}`,v=new Blob([c],{type:"text/csv;charset=utf-8"}),w=URL.createObjectURL(v),T=`haushaltsbuch-backup-${kn()}-${Ma()}.csv`,D=document.createElement("a");D.href=w,D.download=T,D.click(),URL.revokeObjectURL(w),ea(T),ae(),Z("CSV-Backup wurde exportiert.")}async function ns(i){const o=Fe(i);if(!o||o.length===0){Z("Für den gewählten Zeitraum sind keine Daten vorhanden.","error");return}const u=o.at(0);if(!u){Z("Für den gewählten Zeitraum sind keine Daten vorhanden.","error");return}const c=[],v=u.year,w=i==="month"?"Monat":"Jahr",T=u.month;c.push(Rt(["Export","Haushaltsbuch Detail CSV"])),c.push(Rt(["Exportiert am",new Date().toISOString()])),c.push(Rt(["Modus",w])),c.push(Rt(["Jahr",v])),i==="month"&&c.push(Rt(["Monat",`${xe(T.month)} (${ps(T.month)})`])),c.push("");const D=[],A=[],L=[],I=[],U=[],W=[];o.forEach(({year:ye,month:Ce})=>{Ce.days.slice().sort((ee,O)=>ee.isoDate.localeCompare(O.isoDate)).forEach(ee=>{D.push([ye,xe(Ce.month),ne(ee.isoDate),ge(ee.foodCents),ge(ee.goingOutCents),ge(ee.foodCents+ee.goingOutCents)])}),Ce.incomes.slice().sort((ee,O)=>ee.createdAt.localeCompare(O.createdAt)).forEach(ee=>{A.push([ye,xe(Ce.month),ne(ee.createdAt),ee.description,Xn(ee.incomeSource),ge(ee.amountCents)])}),Ce.fixedCosts.slice().sort((ee,O)=>ee.name.localeCompare(O.name,"de-DE")).forEach(ee=>{L.push([ye,xe(Ce.month),ee.name,ge(ee.plannedCents),ge(ee.actualCents),ge(ee.plannedCents-ee.actualCents)])}),Ce.variablePositions.slice().sort((ee,O)=>ee.name.localeCompare(O.name,"de-DE")).forEach(ee=>{I.push([ye,xe(Ce.month),ee.name,ge(ee.budgetCents),ge(ee.actualCents),ge(ee.budgetCents-ee.actualCents)])}),Ce.variableCosts.slice().sort((ee,O)=>ee.createdAt.localeCompare(O.createdAt)).forEach(ee=>{U.push([ye,xe(Ce.month),ne(ee.createdAt),ee.description,ge(ee.amountCents)])}),Ce.miscCosts.slice().sort((ee,O)=>ee.createdAt.localeCompare(O.createdAt)).forEach(ee=>{W.push([ye,xe(Ce.month),ne(ee.createdAt),ee.description,ge(ee.amountCents)])})}),Dn(c,"Tageswerte",["Jahr","Monat","Datum","Essen (€)","Freizeit (€)","Tag Summe (€)"],D),Dn(c,"Einnahmen",["Jahr","Monat","Datum","Beschreibung","Quelle","Betrag (€)"],A),Dn(c,"Fixkosten",["Jahr","Monat","Beschreibung","Geplant (€)","Ist (€)","Differenz (€)"],L),Dn(c,"Variable Positionen",["Jahr","Monat","Beschreibung","Budget (€)","Ist (€)","Differenz (€)"],I),Dn(c,"Variable Kosten",["Jahr","Monat","Datum","Beschreibung","Betrag (€)"],U),Dn(c,"Sonstiges",["Jahr","Monat","Datum","Beschreibung","Betrag (€)"],W);const ie=`\uFEFF${c.join(`
`)}`,Se=new Blob([ie],{type:"text/csv;charset=utf-8"}),Le=URL.createObjectURL(Se),he=i==="month"?`${v}-${ps(T.month)}`:String(v),_e=`haushaltsbuch-backup-detail-${i}-${he}-${Ma()}.csv`,et=document.createElement("a");et.href=Le,et.download=_e,et.click(),URL.revokeObjectURL(Le),ea(_e),ae(),Z(i==="month"?"Detailliertes CSV-Backup für den Monat wurde exportiert.":"Detailliertes CSV-Backup für das Jahr wurde exportiert.")}async function Ws(i){const o=await i.text(),u=JSON.parse(o);await Li(u);const[c,v,w,T]=await Promise.all([Ba(),ar(),rr(),or()]);p.years=c,p.annualVariableFixedTemplates=w.templates,p.annualVariableFixedTemplateVersion=w.version,fn(p.years),bs(p.years),p.fixedTemplates=v.templates,p.fixedTemplateVersion=v.version,p.savedSearchEvaluations=T.results,p.evaluationCurrentResult=null,p.evaluationQuery="",await _a(p.years),await Hn(),p.persistentAuditLog=await lr(),p.selectedYear=hs(c),p.selectedMonth=pn(),ea(i.name),Z("Backup wurde importiert."),ae()}function _s(i){p.evaluationQuery=i,p.evaluationCurrentResult=Nr(p.years,i,qt(),pn()),ae()}async function It(){const i=p.evaluationCurrentResult;if(!i||!i.keywordNormalized){Z("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const o=p.savedSearchEvaluations.findIndex(u=>u.id===i.id);o>=0?p.savedSearchEvaluations[o]=i:p.savedSearchEvaluations=[i,...p.savedSearchEvaluations],await Ns(p.savedSearchEvaluations),Xt(`Auswertung gespeichert: ${i.keyword}`),Z(`Auswertung "${i.keyword}" wurde gespeichert.`),ae()}async function ca(i){const o=p.savedSearchEvaluations.find(u=>u.id===i);o&&(p.savedSearchEvaluations=p.savedSearchEvaluations.filter(u=>u.id!==i),await Ns(p.savedSearchEvaluations),Xt(`Auswertung gelöscht: ${o.keyword}`),Z(`Gespeicherte Auswertung "${o.keyword}" wurde gelöscht.`),ae())}function ae(){const i=wn(),o=Te(),u=kn(),c=o?Sn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=i?te(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},w=i?va(i):[],T=o?o.foodBudgetCents??0:0,D=o?o.goingOutBudgetCents??0:0,A=o?o.fixedBudgetCents??o.fixedCosts.reduce((n,g)=>n+g.plannedCents,0):0,L=o?o.variableBudgetCents??o.variablePositions.reduce((n,g)=>n+g.budgetCents,0):0,I=o?o.miscBudgetCents??0:0,U=i?i.months.reduce((n,g)=>n+(g.foodBudgetCents??0),0):0,W=i?i.months.reduce((n,g)=>n+(g.goingOutBudgetCents??0),0):0,ie=i?i.months.reduce((n,g)=>n+(g.fixedBudgetCents??g.fixedCosts.reduce((V,H)=>V+H.plannedCents,0)),0):0,Se=i?i.months.reduce((n,g)=>n+(g.variableBudgetCents??g.variablePositions.reduce((V,H)=>V+H.budgetCents,0)),0):0,Le=i?i.months.reduce((n,g)=>n+(g.miscBudgetCents??0),0):0,he=o?o.incomes.reduce((n,g)=>n+(an(g.incomeSource)?g.amountCents:0),0):0,_e=o?o.incomes.reduce((n,g)=>n+(g.incomeSource==="salary"?g.amountCents:0),0):0,et=o?o.incomes.reduce((n,g)=>n+(g.incomeSource==="fresh"?g.amountCents:0),0):0,ye=Wa(),Ce=i?ye.get(re(i.year,p.selectedMonth)):void 0,ee=i?i.months.slice().sort((n,g)=>n.month-g.month)[0]:void 0,O=Ce?.carriedFromPreviousCents??0,Yt=Ce?.hasPreviousMonth??!1,At=Ce?.effectiveIncomeCents??he,gn=o?jt(o):0,Lt=Ce?.netCents??he-gn,$e=At-c.totalCents,zt=_e-c.totalCents,je=c.totalCents>0?`${(_e/c.totalCents*100).toFixed(1)} %`:"-",Ge=O<0?"danger":O>0?"budget-under":"",He=Lt<0?"danger":Lt>0?"budget-under":"",st=$e<0?"danger":$e>0?"budget-under":"",it=i?i.months.reduce((n,g)=>n+g.incomes.reduce((V,H)=>V+(an(H.incomeSource)?H.amountCents:0),0),0):0,St=i?i.months.reduce((n,g)=>n+g.incomes.reduce((V,H)=>V+(H.incomeSource==="salary"?H.amountCents:0),0),0):0,Gt=i?i.months.reduce((n,g)=>n+g.incomes.reduce((V,H)=>V+(H.incomeSource==="fresh"?H.amountCents:0),0),0):0,Wt=i&&ee?ye.get(re(i.year,ee.month))?.carriedFromPreviousCents??0:0,Nt=it+Wt;Nt-v.totalCents,St-v.totalCents,v.totalCents>0&&`${(St/v.totalCents*100).toFixed(1)}`;const ot=T+D+A+L+I,We=T+D,Pe=c.foodCents+c.goingOutCents,De=We-Pe,Xe=dt(Pe,We),Ye=U+W+ie+Se+Le,Ue=he-ot,Pn=ot-c.totalCents;Ye-v.totalCents;const Oe=n=>n<0?"danger":n>0?"budget-under":"",bn=(n,g)=>g<=0?"muted":n>=g?"budget-under":"danger",pt=bn(_e,c.totalCents);bn(St,v.totalCents);const le=(n,g)=>{if(g<=0)return"0%";const H=Math.max(0,n)/g*100;return`${Math.min(100,Math.max(0,H)).toFixed(1)}%`},Et=(n,g)=>{if(g<=0)return n>0?100:0;const V=Math.max(0,n)/g*100;return Math.max(0,V)},Bt=[{label:"Essen",budgetCents:T,actualCents:c.foodCents},{label:"Ausgehen",budgetCents:D,actualCents:c.goingOutCents},{label:"Fixkosten",budgetCents:A,actualCents:c.fixedCents},{label:"Variable",budgetCents:L,actualCents:c.variableCents},{label:"Sonstige",budgetCents:I,actualCents:c.miscCents}];Math.max(1,...Bt.flatMap(n=>[n.budgetCents,n.actualCents]));const Kn=(n,g)=>g<=0?"bar-positive":n<=0||g>n?"bar-negative":"bar-positive",sn=[{label:"Einkommen gesamt",valueCents:At,className:"bar-income"},{label:"Budget gesamt",valueCents:ot,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:c.totalCents,className:"bar-expense"},{label:"Netto",valueCents:$e,className:$e<0?"bar-negative":"bar-positive"}],Vn=Math.max(1,...sn.map(n=>Math.abs(n.valueCents))),rn=i?i.months.slice().sort((n,g)=>n.month-g.month).map(n=>{const g=n.foodBudgetCents??0,V=n.goingOutBudgetCents??0,H=n.fixedBudgetCents??n.fixedCosts.reduce((Kt,en)=>Kt+en.plannedCents,0),ve=n.variableBudgetCents??n.variablePositions.reduce((Kt,en)=>Kt+en.budgetCents,0),Ne=n.miscBudgetCents??0,vt=g+V+H+ve+Ne;return{month:n.month,foodBudgetCents:g,goingOutBudgetCents:V,fixedBudgetCents:H,variableBudgetCents:ve,miscBudgetCents:Ne,totalBudgetCents:vt}}):[],lt=new Map(rn.map(n=>[n.month,n])),Ut=n=>{if(n.length===0)return null;const g=Math.min(...n),V=Math.max(...n),H=Math.round(n.reduce((ve,Ne)=>ve+Ne,0)/n.length);return{min:g,avg:H,max:V}},ft=i&&i.year===qt()?w.filter(n=>n.month<=pn()):w,ua=ft.map(n=>n.summary.foodCents),Tn=ft.map(n=>n.summary.goingOutCents),xa=ft.map(n=>n.summary.fixedCents),Oa=ft.map(n=>n.summary.variableCents),ka=ft.map(n=>n.summary.miscCents),$a=ft.map(n=>n.summary.totalCents),da=ft.map(n=>i?ye.get(re(i.year,n.month))?.plannedBudgetCents??0:0),as=ft.map(n=>i?ye.get(re(i.year,n.month))?.netCents??0:0),P=new Map((i?.months??[]).map(n=>[n.month,n.incomes.reduce((g,V)=>g+(V.incomeSource==="salary"?V.amountCents:0),0)])),q=new Map((i?.months??[]).map(n=>[n.month,n.incomes.reduce((g,V)=>g+(V.incomeSource==="salary"||V.incomeSource==="fresh"?V.amountCents:0),0)])),Ft=ft.map(n=>P.get(n.month)??0),ss=ft.map(n=>q.get(n.month)??0),on={food:Ut(ua),goingOut:Ut(Tn),fixed:Ut(xa),variable:Ut(Oa),misc:Ut(ka),total:Ut($a),salary:Ut(Ft),income:Ut(ss),budget:Ut(da),net:Ut(as)},Us=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Jt={food:ua.reduce((n,g)=>n+g,0),goingOut:Tn.reduce((n,g)=>n+g,0),fixed:xa.reduce((n,g)=>n+g,0),variable:Oa.reduce((n,g)=>n+g,0),misc:ka.reduce((n,g)=>n+g,0),total:$a.reduce((n,g)=>n+g,0),salary:Ft.reduce((n,g)=>n+g,0),income:ss.reduce((n,g)=>n+g,0),budget:da.reduce((n,g)=>n+g,0)},yn=Us.map(({key:n,label:g})=>{const V=on.food?.[n]??null,H=on.goingOut?.[n]??null,ve=on.fixed?.[n]??null,Ne=on.variable?.[n]??null,vt=on.misc?.[n]??null,Kt=on.total?.[n]??null,en=on.salary?.[n]??null,nt=on.income?.[n]??null,Rn=on.budget?.[n]??null,jn=on.net?.[n]??null,mt=cn=>cn===null?"-":f(cn);return`<tr>
                  <td><strong>${g}</strong></td>
                  <td>${mt(V)}</td>
                  <td>${mt(H)}</td>
                  <td>${mt(ve)}</td>
                  <td>${mt(Ne)}</td>
                  <td>${mt(vt)}</td>
                  <td>${mt(Kt)}</td>
                  <td>${mt(en)}</td>
                  <td>${mt(nt)}</td>
                  <td>${mt(Rn)}</td>
                  <td>${mt(jn)}</td>
                </tr>`}).join(""),tt=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(Jt.food)}</td>
                  <td>${f(Jt.goingOut)}</td>
                  <td>${f(Jt.fixed)}</td>
                  <td>${f(Jt.variable)}</td>
                  <td>${f(Jt.misc)}</td>
                  <td>${f(Jt.total)}</td>
                  <td>${f(Jt.salary)}</td>
                  <td>${f(Jt.income)}</td>
                  <td>${f(Jt.budget)}</td>
                  <td>-</td>
                </tr>`,wa=Math.max(1,...w.flatMap(n=>{const g=lt.get(n.month)?.totalBudgetCents;return[n.summary.totalCents,g??0]})),qn=Math.max(1,...w.flatMap(n=>{const g=lt.get(n.month),V=n.summary.foodCents+n.summary.goingOutCents,H=(g?.foodBudgetCents??0)+(g?.goingOutBudgetCents??0);return[V,H]})),Ps=Math.max(1,...w.flatMap(n=>{const g=lt.get(n.month)?.fixedBudgetCents??0;return[n.summary.fixedCents,g]})),Ia=Math.max(1,...w.flatMap(n=>{const g=lt.get(n.month)?.variableBudgetCents??0;return[n.summary.variableCents,g]})),rs=Math.max(1,...w.flatMap(n=>{const g=lt.get(n.month)?.miscBudgetCents??0;return[n.summary.miscCents,g]})),An=dt(c.fixedCents,A),is=dt(c.foodCents,T),ha=dt(c.goingOutCents,D),Cn=dt(c.variableCents,L),os=dt(c.miscCents,I),e=dt(c.totalCents,ot),t=ot-c.totalCents,a=n=>n===0?"-":f(n),s=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(A)}</div>
        <div class="compact-cost-actual ${An}">${a(c.fixedCents)}</div>
      </div>`,r=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(L)}</div>
        <div class="compact-cost-actual ${Cn}">${a(c.variableCents)}</div>
      </div>`,l=o?o.fixedCosts.length>0?o.fixedCosts.map(n=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${rt(n.name)}</div>
                  <div class="compact-cost-budget">${f(n.plannedCents)}</div>
                  <div class="compact-cost-actual ${dt(n.actualCents,n.plannedCents)}">${a(n.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,d=o?o.variablePositions.length>0?o.variablePositions.map(n=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${rt(n.name)}${n.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(n.budgetCents)}</div>
                  <div class="compact-cost-actual ${dt(n.actualCents,n.budgetCents)}">${a(n.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,h=p.editingFixedTemplateId?p.fixedTemplates.find(n=>n.id===p.editingFixedTemplateId):null,k=p.hasUnexportedChanges,E=p.unexportedChangeLog.slice().reverse(),x=p.persistentAuditLog.slice().sort((n,g)=>g.timestampIso.localeCompare(n.timestampIso)),b=p.lastBackupFileName?rt(p.lastBackupFileName):"-",$={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},y=p.years.slice().sort((n,g)=>n.year-g.year),C=y.some(n=>n.year===p.dashboardYear)?p.dashboardYear:p.selectedYear??y[y.length-1]?.year??null,m=typeof C=="number"?y.find(n=>n.year===C):void 0,_=m?m.months.slice().sort((n,g)=>n.month-g.month):[],M=m?te(m):$,S=m?z(m):{salaryIncomeCents:0,freshIncomeCents:0},F=S.salaryIncomeCents+S.freshIncomeCents,N=S.salaryIncomeCents,j=m?vn(m):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},Y=m?Qn(m):0,K=m?ma(m,ye):0,J=Y+K,G=m?m.months.reduce((n,g)=>n+jt(g),0):0,R=J-G,X=J-M.totalCents,we=[{label:"Essen",budgetCents:j.foodCents,actualCents:M.foodCents},{label:"Ausgehen",budgetCents:j.goingOutCents,actualCents:M.goingOutCents},{label:"Fixkosten",budgetCents:j.fixedCents,actualCents:M.fixedCents},{label:"Variable",budgetCents:j.variableCents,actualCents:M.variableCents},{label:"Sonstige",budgetCents:j.miscCents,actualCents:M.miscCents}],ce=_.map(n=>{const g=m?ye.get(re(m.year,n.month)):void 0,V=Sn(n),H=n.incomes.reduce((cn,un)=>cn+(un.incomeSource==="salary"?un.amountCents:0),0),ve=n.incomes.reduce((cn,un)=>cn+(an(un.incomeSource)?un.amountCents:0),0),Ne=g?.effectiveIncomeCents??ve,vt=g?.plannedBudgetCents??jt(n),Kt=V.foodCents,en=V.goingOutCents,nt=Kt+en,Rn=V.totalCents,jn=Ne-vt,mt=Ne-Rn;return{month:n.month,salaryIncomeCents:H,incomeCents:ve,foodCents:Kt,goingOutCents:en,foodAndGoingOutCents:nt,effectiveIncomeCents:Ne,plannedBudgetCents:vt,actualCostCents:Rn,plannedNetCents:jn,actualNetCents:mt}}),se=Math.max(1,...ce.map(n=>n.actualCostCents)),pe=Math.max(1,...ce.flatMap(n=>[Math.abs(n.plannedNetCents),Math.abs(n.actualNetCents)])),Je=Math.max(1,...ce.map(n=>n.foodAndGoingOutCents)),Ht=Math.max(1,...ce.map(n=>n.foodCents)),Qe=Math.max(1,...ce.map(n=>n.goingOutCents)),kt=ce.map((n,g,V)=>{const H=g>0?V[g-1]?.plannedNetCents??n.plannedNetCents:n.plannedNetCents;return{...n,monthLabel:xe(n.month),monthShortLabel:xe(n.month).slice(0,3),deltaCents:n.plannedNetCents-H}}),Qt=kt[kt.length-1]??null,Gr=Math.min(0,...kt.map(n=>n.plannedNetCents)),Js=Math.max(0,...kt.map(n=>n.plannedNetCents)),cr=Math.max(1,Js-Gr),ls=720,Ts=320,As=18,Hs=18,Wr=38,La=56,ur=ls-La-Hs,Xs=Ts-As-Wr,Ur=n=>{if(kt.length<=1)return La+ur/2;const g=n/(kt.length-1);return La+g*ur},Qs=n=>As+(Js-n)/cr*Xs,Fn=kt.map((n,g)=>{const V=Ur(g),H=Qs(n.plannedNetCents);return{...n,x:V,y:H,leftPercent:V/ls*100,topPercent:H/Ts*100}}),Zs=Fn.map((n,g)=>`${g===0?"M":"L"} ${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" "),dr=Fn.length>0?`${Zs} L ${Fn[Fn.length-1]?.x.toFixed(1)} ${(As+Xs).toFixed(1)} L ${Fn[0]?.x.toFixed(1)} ${(As+Xs).toFixed(1)} Z`:"",hr=5,Jr=Array.from({length:hr},(n,g)=>{const V=g/(hr-1),H=Js-V*cr;return{valueCents:Math.round(H/100)*100,y:Qs(H)}}),pr=Qs(0),Hr=kt[0]?.plannedNetCents??0,Na=(kt[kt.length-1]?.plannedNetCents??0)-Hr,Xr=Na<0?"trend-badge-negative":Na>0?"trend-badge-positive":"trend-badge-neutral",fr=Na<0?"↘":Na>0?"↗":"→",Qr=Na<0?"Abwärtstrend":Na>0?"Aufwärtstrend":"Seitwärts",Sa=y.reduce((n,g)=>{const V=vn(g);return{foodCents:n.foodCents+V.foodCents,goingOutCents:n.goingOutCents+V.goingOutCents,fixedCents:n.fixedCents+V.fixedCents,variableCents:n.variableCents+V.variableCents,miscCents:n.miscCents+V.miscCents,totalCents:n.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Zt=y.reduce((n,g)=>{const V=te(g);return{foodCents:n.foodCents+V.foodCents,goingOutCents:n.goingOutCents+V.goingOutCents,fixedCents:n.fixedCents+V.fixedCents,variableCents:n.variableCents+V.variableCents,miscCents:n.miscCents+V.miscCents,totalCents:n.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Zr=y.reduce((n,g)=>n+Qn(g),0),ei=y[0]?ma(y[0],ye):0,vr=Zr+ei,mr=vr-Sa.totalCents,gr=vr-Zt.totalCents,br=[{label:"Essen",budgetCents:Sa.foodCents,actualCents:Zt.foodCents},{label:"Ausgehen",budgetCents:Sa.goingOutCents,actualCents:Zt.goingOutCents},{label:"Fixkosten",budgetCents:Sa.fixedCents,actualCents:Zt.fixedCents},{label:"Variable",budgetCents:Sa.variableCents,actualCents:Zt.variableCents},{label:"Sonstige",budgetCents:Sa.miscCents,actualCents:Zt.miscCents}],yr=Math.max(1,...br.flatMap(n=>[n.budgetCents,n.actualCents])),er=[{label:"Essen & Ausgehen",actualCents:Zt.foodCents+Zt.goingOutCents},{label:"Fixkosten",actualCents:Zt.fixedCents},{label:"Variable",actualCents:Zt.variableCents},{label:"Sonstige",actualCents:Zt.miscCents}],ti=Math.max(1,...er.map(n=>n.actualCents)),Me=y.map(n=>{const g=te(n),V=vn(n),H=Qn(n),ve=z(n),Ne=ma(n,ye),vt=H+Ne;return{year:n.year,salaryIncomeCents:ve.salaryIncomeCents,freshIncomeCents:ve.freshIncomeCents,totalIncomeCents:ve.salaryIncomeCents+ve.freshIncomeCents,foodAndGoingOutCents:g.foodCents+g.goingOutCents,fixedCents:g.fixedCents,variableCents:g.variableCents,miscCents:g.miscCents,budgetTotalCents:V.totalCents,actualTotalCents:g.totalCents,effectiveIncomeCents:vt,plannedNetCents:vt-V.totalCents,actualNetCents:vt-g.totalCents}}),ni=Me.reduce((n,g)=>n+g.totalIncomeCents,0),ai=Me.reduce((n,g)=>n+g.salaryIncomeCents,0),Cr=Math.max(1,...Me.flatMap(n=>[Math.abs(n.plannedNetCents),Math.abs(n.actualNetCents)])),si=Math.max(1,...Me.map(n=>n.actualTotalCents)),ri=Math.max(1,...Me.map(n=>n.totalIncomeCents)),ii=Math.max(1,...Me.map(n=>n.salaryIncomeCents)),xr=Math.max(1,...Me.flatMap(n=>[n.totalIncomeCents,n.actualTotalCents])),kr=Math.max(1,...Me.flatMap(n=>[n.salaryIncomeCents,n.actualTotalCents])),oi=Math.max(1,...Me.map(n=>n.foodAndGoingOutCents)),li=Math.max(1,...Me.map(n=>n.fixedCents)),ci=Math.max(1,...Me.map(n=>n.variableCents)),ui=Math.max(1,...Me.map(n=>n.miscCents)),$r=new Map(Me.map(n=>[n.year,n])),di=typeof C=="number"?Me.filter(n=>n.year<=C).slice(-5).map(n=>n.year):[],hi=[{key:"foodAndGoingOutCents",label:"Essen & Trinken",currentValueCents:M.foodCents+M.goingOutCents,getYearValue:n=>n?.foodAndGoingOutCents??0},{key:"salaryIncomeCents",label:"Gehalt",currentValueCents:N,getYearValue:n=>n?.salaryIncomeCents??0},{key:"incomeCents",label:"Einkommen",currentValueCents:F,getYearValue:n=>n?.totalIncomeCents??0},{key:"fixedCents",label:"Fixkosten",currentValueCents:M.fixedCents,getYearValue:n=>n?.fixedCents??0},{key:"variableCents",label:"Variable Kosten",currentValueCents:M.variableCents,getYearValue:n=>n?.variableCents??0},{key:"actualTotalCents",label:"Gesamtkosten",currentValueCents:M.totalCents,getYearValue:n=>n?.actualTotalCents??0},{key:"miscCents",label:"Sonstige",currentValueCents:M.miscCents,getYearValue:n=>n?.miscCents??0}].map(n=>{const g=m==null?null:n.getYearValue($r.get(m.year-1)),V=g===null?null:n.currentValueCents-g,H=di.map(gt=>({year:gt,valueCents:n.getYearValue($r.get(gt))})),ve=Math.min(0,...H.map(gt=>gt.valueCents)),Ne=Math.max(0,...H.map(gt=>gt.valueCents)),vt=Math.max(1,Ne-ve),Kt=360,en=150,nt=14,Rn=14,jn=28,mt=12,cn=Kt-mt-Rn,un=en-nt-jn,Fs=gt=>H.length<=1?mt+cn/2:mt+gt/(H.length-1)*cn,Ds=gt=>nt+(Ne-gt)/vt*un,Yn=H.map((gt,Ka)=>({...gt,x:Fs(Ka),y:Ds(gt.valueCents)})),cs=Yn.map((gt,Ka)=>`${Ka===0?"M":"L"} ${gt.x.toFixed(1)} ${gt.y.toFixed(1)}`).join(" "),Os=Yn.length>0?`${cs} L ${Yn[Yn.length-1]?.x.toFixed(1)} ${(nt+un).toFixed(1)} L ${Yn[0]?.x.toFixed(1)} ${(nt+un).toFixed(1)} Z`:"";return{...n,previousYearValueCents:g,diffCents:V,chartWidth:Kt,chartHeight:en,paddingBottom:jn,points:Yn,linePath:cs,areaPath:Os}}),pi=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${p.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${p.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${p.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${y.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':p.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${y.map(n=>`<option value="${n.year}" ${n.year===C?"selected":""}>${n.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${m?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(F)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(N)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(G)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(M.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Oe(R)}">${f(R)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Oe(X)}">${f(X)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${fr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Xr}">${fr} ${Qr}</span>
                    </div>
                  </header>
                  ${Qt?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${rt(Qt.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${Oe(Qt.plannedNetCents)}" data-year-trend-active-net>${f(Qt.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(Qt.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(Qt.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${Oe(Qt.deltaCents)}" data-year-trend-active-delta>${Qt.deltaCents>=0?"+":""}${f(Qt.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${ls} ${Ts}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${m?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Jr.map(n=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${La}" y1="${n.y.toFixed(1)}" x2="${ls-Hs}" y2="${n.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${La-10}" y="${(n.y+4).toFixed(1)}" text-anchor="end">${f(n.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${La}" y1="${pr.toFixed(1)}" x2="${ls-Hs}" y2="${pr.toFixed(1)}"></line>
                              ${dr?`<path class="year-trend-area" d="${dr}"></path>`:""}
                              ${Zs?`<path class="year-trend-line" d="${Zs}"></path>`:""}
                              ${Fn.map(n=>`
                                    <circle class="year-trend-node ${n.plannedNetCents<0?"is-negative":""}" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${n.x.toFixed(1)}" y="${Ts-12}" text-anchor="middle">${rt(n.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${Fn.map((n,g)=>`
                                    <button
                                      class="year-trend-point-hit ${g===Fn.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${n.leftPercent.toFixed(2)}%; top:${n.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${g===Fn.length-1?"1":"0"}"
                                      data-month-label="${rt(n.monthLabel)}"
                                      data-net-cents="${n.plannedNetCents}"
                                      data-actual-net-cents="${n.actualNetCents}"
                                      data-income-cents="${n.effectiveIncomeCents}"
                                      data-expense-cents="${n.actualCostCents}"
                                      data-delta-cents="${n.deltaCents}"
                                      aria-label="${rt(n.monthLabel)}: Kalkulierter Saldo ${f(n.plannedNetCents)}, Einkommen ${f(n.effectiveIncomeCents)}, Ausgaben ${f(n.actualCostCents)}"
                                      aria-pressed="${g===Fn.length-1?"true":"false"}"
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
                    ${we.map(n=>{const g=Et(n.actualCents,n.budgetCents),V=Math.min(100,g),H=`${g.toFixed(0)}%`,ve=n.budgetCents-n.actualCents,Ne=ve<0?"danger":ve>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Kn(n.budgetCents,n.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${n.label}: ${f(n.actualCents)} von ${f(n.budgetCents)}">
                              <span class="circle-chart-value">${H}</span>
                            </div>
                            <div class="circle-chart-label">${n.label}</div>
                            <div class="circle-chart-meta muted">B ${f(n.budgetCents)} / I ${f(n.actualCents)}</div>
                            <div class="circle-chart-meta ${Ne}">${ve>=0?"+":""}${f(ve)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ce.length,1)}, minmax(0, 1fr));">
                    ${ce.map(n=>{const g=le(n.actualCostCents,se);return`
                          <div class="spark-bar" title="${xe(n.month)}: ${f(n.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                    ${ce.map(n=>{const g=le(Math.abs(n.plannedNetCents),pe),V=le(Math.abs(n.actualNetCents),pe),H=n.plannedNetCents<0?"bar-negative":"bar-positive",ve=n.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${xe(n.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(n.plannedNetCents)} | Ist-Saldo: ${f(n.actualNetCents)}">
                              <div class="bar ${H}" style="width:${g}; opacity: 0.35;"></div>
                              <div class="bar ${ve}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Oe(n.plannedNetCents)}">B ${f(n.plannedNetCents)}</span>
                              <span class="${Oe(n.actualNetCents)}">I ${f(n.actualNetCents)}</span>
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
                  ${ce.map(n=>`<tr>
                        <td>${xe(n.month)}</td>
                    <td>${f(n.salaryIncomeCents)}</td>
                    <td>${f(n.incomeCents)}</td>
                        <td>${f(n.plannedBudgetCents)}</td>
                        <td>${f(n.actualCostCents)}</td>
                        <td class="${Oe(n.plannedNetCents)}">${f(n.plannedNetCents)}</td>
                        <td class="${Oe(n.actualNetCents)}">${f(n.actualNetCents)}</td>
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
                  ${hi.map(n=>{const g=n.diffCents===null?"":n.diffCents<0?"budget-under":n.diffCents>0?"danger":"",V=n.diffCents===null?"Vorjahreswert nicht vorhanden":`Δ ${n.diffCents>=0?"+":""}${f(n.diffCents)}`,H=m?.year??"";return`
                        <section class="chart-tile comparison-tile" aria-label="${rt(n.label)} Jahresvergleich">
                          <header class="chart-tile-header comparison-tile-header">
                            <div>
                              <h4>${rt(n.label)}</h4>
                              <div class="muted">${H}</div>
                            </div>
                          </header>
                          <div class="comparison-tile-summary">
                            <strong>${f(n.currentValueCents)}</strong>
                            <span class="comparison-tile-diff ${g}">${V}</span>
                          </div>
                          <div class="comparison-tile-chart" role="img" aria-label="${rt(n.label)} Verlauf der letzten fünf Jahre">
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
                              ${n.points.map((ve,Ne)=>`
                                    <circle class="comparison-line-point ${Ne===n.points.length-1?"is-current":""}" cx="${ve.x.toFixed(1)}" cy="${ve.y.toFixed(1)}" r="4.5"></circle>
                                    <text class="comparison-line-year" x="${ve.x.toFixed(1)}" y="${n.chartHeight-10}" text-anchor="middle">${ve.year}</text>
                                  `).join("")}
                            </svg>
                          </div>
                          <div class="comparison-tile-footer muted">${n.previousYearValueCents===null?"Kein Vorjahreswert vorhanden":`Vorjahr: ${f(n.previousYearValueCents)}`}</div>
                        </section>
                      `}).join("")}
                </div>
              </section>
            `:p.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${y.map(n=>`<option value="${n.year}" ${n.year===C?"selected":""}>${n.year}</option>`).join("")}
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
                    ${ce.map(n=>{const g=le(n.foodAndGoingOutCents,Je);return`
                          <div class="spark-bar" title="${xe(n.month)}: ${f(n.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ce.length,1)}, minmax(0, 1fr));">
                    ${ce.map(n=>{const g=le(n.foodCents,Ht);return`
                          <div class="spark-bar" title="${xe(n.month)}: ${f(n.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ce.length,1)}, minmax(0, 1fr));">
                    ${ce.map(n=>{const g=le(n.goingOutCents,Qe);return`
                          <div class="spark-bar" title="${xe(n.month)}: ${f(n.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(n.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(ni)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(ai)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(Sa.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Zt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Oe(mr)}">${f(mr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Oe(gr)}">${f(gr)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${er.map(n=>`<div class="eval-row"><div class="eval-label">${n.label}</div><div class="eval-value">${f(n.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Zt.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${br.map(n=>{const g=le(n.budgetCents,yr),V=le(n.actualCents,yr),H=Kn(n.budgetCents,n.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${n.label}</div>
                            <div class="bar-track" title="Budget: ${f(n.budgetCents)} | Ist: ${f(n.actualCents)}">
                              <div class="bar bar-budget" style="width:${g}"></div>
                              <div class="bar-marker" style="left:${g}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${H}" style="width:${V}"></div>
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
                    ${er.map(n=>{const g=le(n.actualCents,ti);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.actualTotalCents,si);return`
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
                    ${Me.map(n=>{const g=le(Math.abs(n.plannedNetCents),Cr),V=le(Math.abs(n.actualNetCents),Cr),H=n.plannedNetCents<0?"bar-negative":"bar-positive",ve=n.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${n.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(n.plannedNetCents)} | Ist-Saldo: ${f(n.actualNetCents)}">
                              <div class="bar ${H}" style="width:${g}; opacity: 0.35;"></div>
                              <div class="bar ${ve}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Oe(n.plannedNetCents)}">B ${f(n.plannedNetCents)}</span>
                              <span class="${Oe(n.actualNetCents)}">I ${f(n.actualNetCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.foodAndGoingOutCents,oi);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.fixedCents,li);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.variableCents,ci);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.miscCents,ui);return`
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
                  ${Me.map(n=>`<tr>
                        <td>${n.year}</td>
                        <td>${f(n.salaryIncomeCents)}</td>
                        <td>${f(n.totalIncomeCents)}</td>
                        <td>${f(n.budgetTotalCents)}</td>
                        <td>${f(n.actualTotalCents)}</td>
                        <td class="${Oe(n.plannedNetCents)}">${f(n.plannedNetCents)}</td>
                        <td class="${Oe(n.actualNetCents)}">${f(n.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.totalIncomeCents,ri);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.salaryIncomeCents,ii);return`
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.totalIncomeCents,xr),V=le(n.actualTotalCents,xr);return`
                          <div class="spark-bar" title="${n.year}: Einkommen ${f(n.totalIncomeCents)} | Kosten ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${g}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${V}"><span class="spark-bar-fill-value">${f(n.actualTotalCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Me.length,1)}, minmax(0, 1fr));">
                    ${Me.map(n=>{const g=le(n.salaryIncomeCents,kr),V=le(n.actualTotalCents,kr);return`
                          <div class="spark-bar" title="${n.year}: Gehalt ${f(n.salaryIncomeCents)} | Kosten ${f(n.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${g}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${V}"><span class="spark-bar-fill-value">${f(n.actualTotalCents)} €</span></div>
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
    `,fi=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,vi=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${h?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${h?Dt(h.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${h?"Änderung speichern":"Vorlage speichern"}</button>
          ${h?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${p.fixedTemplates.map(n=>`<tr>
                    <td>${n.name}</td>
                    <td>${f(n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${n.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${n.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,wr=p.annualVariableFixedTemplates.reduce((n,g)=>n+g.plannedCents,0),mi=Math.round(wr/12),gi=`
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
                <div class="eval-value budget-under">${f(wr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(mi)}</div>
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
            ${p.annualVariableFixedTemplates.map(n=>{const g=na(n.dueDateIso),V=g?xe(g.month):"-";return`<tr>
                    <td>${n.name}</td>
                    <td>${n.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${f(n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${n.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,ln=p.evaluationCurrentResult,bi=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${rt(p.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${ln&&ln.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${ln?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${rt(ln.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${ln.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${f(ln.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${f(ln.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${f(ln.monthAverageCents)}</div>
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
                  ${ln.yearRows.length>0?ln.yearRows.map(n=>`<tr>
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
                  ${ln.monthRows.length>0?ln.monthRows.map(n=>`<tr>
                              <td>${n.year}</td>
                              <td>${xe(n.month)}</td>
                              <td>${n.hitCount}</td>
                              <td>${f(n.totalCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="4" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>
            `:'<p class="muted">Noch keine Auswertung ausgeführt.</p>'}

        <h3>Gespeicherte Auswertungen</h3>
        ${p.savedSearchEvaluations.length===0?'<p class="muted">Noch keine gespeicherten Auswertungen vorhanden.</p>':p.savedSearchEvaluations.map(n=>`
                  <article class="card">
                    <div class="inline">
                      <strong>${rt(n.keyword)}</strong>
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
    `,Sr=p.topModal==="years"?"Jahr hinzufügen":p.topModal==="fixed"?"Fixe Kosten (zentral)":p.topModal==="variable-fixed"?"Variable Fixkosten":p.topModal==="dashboard"?"Dashboard":p.topModal==="evaluation"?"Auswertung":"",yi=p.topModal==="years"?fi:p.topModal==="fixed"?vi:p.topModal==="variable-fixed"?gi:p.topModal==="dashboard"?pi:p.topModal==="evaluation"?bi:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${k?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${p.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Yr.map(n=>`<option value="${n}" ${p.theme===n?"selected":""}>${Ki(n)}</option>`).join("")}
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

        ${p.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Sr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Sr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${yi}
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
                  ${E.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${E.map(n=>{const g=new Date(n.timestampIso);return`<li><strong>${g.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${g.toLocaleString("de-DE")}</strong><span>${rt(n.message)}</span></li>`}).join("")}</ol>`}
                  <div class="inline">
                    <button class="btn btn-primary" id="unexported-change-log-backup" type="button">Backup jetzt erstellen</button>
                  </div>
                </div>
              </div>
            </div>
          `:""}

        ${p.showPersistentAuditLogModal?`
            <div class="panel-modal-backdrop" id="persistent-audit-log-backdrop" role="dialog" aria-modal="true" aria-label="Chronik aller Erfassungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Chronik aller Erfassungen</h2>
                  <button class="btn btn-quiet" id="persistent-audit-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${x.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${x.map(n=>{const g=new Date(n.timestampIso);return`<li><strong>${g.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${g.toLocaleString("de-DE")}</strong><span>${rt(n.message)}</span></li>`}).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${i?`${xe(p.selectedMonth)} ${i.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${p.years.map(n=>`<option value="${n.year}" ${n.year===p.selectedYear?"selected":""}>${n.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${p.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(n,g)=>g+1).map(n=>`<option value="${n}" ${n===p.selectedMonth?"selected":""}>${xe(n)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${f(he)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${f(_e)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(et)}</strong>
              </div>
              <div class="compact-income-row ${Ge}">
                <span>Übernahme aus Vormonat</span>
                <strong>${Yt?f(O):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(At)}</strong>
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
                <div class="compact-month-summary-amount compact-month-summary-amount-spent ${e}">${a(c.totalCents)} <span class="eval-diff ${e}">(Diff ${Ua(t)})</span></div>
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
                  ${l}
                  ${s}
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
                  ${d}
                  ${r}
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
                    <div class="compact-cost-budget">${f(We)}</div>
                    <div class="compact-cost-actual ${Xe}">${a(Pe)}</div>
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
                    <div class="compact-cost-budget">${f(I)}</div>
                    <div class="compact-cost-actual ${os}">${a(c.miscCents)}</div>
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
                  ${Bt.map(n=>`
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
                  ${sn.map(n=>{const g=le(Math.abs(n.valueCents),Vn),V=n.valueCents>=0?"+":"",H=n.label==="Netto"?n.valueCents<0?"danger":n.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${n.label}</div>
                          <div class="bar-track" title="${f(n.valueCents)}">
                            <div class="bar ${n.className}" style="width:${g}"></div>
                          </div>
                          <div class="bar-meta"><span class="${H}">${V}${f(n.valueCents)}</span></div>
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
                      ${w.map(n=>{const g=lt.get(n.month)?.totalBudgetCents??0,V=le(g,wa),H=le(n.summary.totalCents,wa);return`
                            <div class="spark-bar" title="${xe(n.month)}: Ist ${f(n.summary.totalCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${H}"><span class="spark-bar-fill-value">${f(n.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                      ${w.map(n=>{const g=lt.get(n.month),V=(g?.foodBudgetCents??0)+(g?.goingOutBudgetCents??0),H=n.summary.foodCents+n.summary.goingOutCents,ve=le(V,qn),Ne=le(H,qn);return`
                            <div class="spark-bar" title="${xe(n.month)}: Ist ${f(H)} € | Budget ${f(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${ve}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Ne}"><span class="spark-bar-fill-value">${f(H)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                      ${w.map(n=>{const g=lt.get(n.month)?.fixedBudgetCents??0,V=le(g,Ps),H=le(n.summary.fixedCents,Ps);return`
                            <div class="spark-bar" title="${xe(n.month)}: Ist ${f(n.summary.fixedCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${H}"><span class="spark-bar-fill-value">${f(n.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                      ${w.map(n=>{const g=lt.get(n.month)?.variableBudgetCents??0,V=le(g,Ia),H=le(n.summary.variableCents,Ia);return`
                            <div class="spark-bar" title="${xe(n.month)}: Ist ${f(n.summary.variableCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${H}"><span class="spark-bar-fill-value">${f(n.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                      ${w.map(n=>{const g=lt.get(n.month)?.miscBudgetCents??0,V=le(g,rs),H=le(n.summary.miscCents,rs);return`
                            <div class="spark-bar" title="${xe(n.month)}: Ist ${f(n.summary.miscCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${H}"><span class="spark-bar-fill-value">${f(n.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${xe(n.month).slice(0,3)}</div>
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
                    <div class="eval-value">${f(he)}</div>
                    <div class="eval-value">${f(it)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(_e)}</div>
                    <div class="eval-value">${f(St)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(et)}</div>
                    <div class="eval-value">${f(Gt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ge}">${Yt?f(O):"-"}</div>
                    <div class="eval-value muted">-</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(At)}</div>
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
                    <div class="eval-value">${En(T,c.foodCents)}</div>
                    <div class="eval-value">${f(U)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${En(D,c.goingOutCents)}</div>
                    <div class="eval-value">${f(W)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${En(A,c.fixedCents)}</div>
                    <div class="eval-value">${f(ie)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${En(L,c.variableCents)}</div>
                    <div class="eval-value">${f(Se)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${En(I,c.miscCents)}</div>
                    <div class="eval-value">${f(Le)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${En(ot,c.totalCents)}</div>
                    <div class="eval-value">${f(Ye)}</div>
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
                    <div class="eval-value ${is}">${f(c.foodCents)}</div>
                    <div class="eval-value">${f(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${ha}">${f(c.goingOutCents)}</div>
                    <div class="eval-value">${f(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${An}">${f(c.fixedCents)}</div>
                    <div class="eval-value">${f(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Cn}">${f(c.variableCents)}</div>
                    <div class="eval-value">${f(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${os}">${f(c.miscCents)}</div>
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
                    <div class="eval-value ${Oe(Pn)}">${f(Pn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Oe(Ue)}">${f(Ue)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Eigenkapital (Monat)</div>
                    <div class="eval-value ${st}">${f($e)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${Oe(zt)}">${f(zt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${pt}">${je}</div>
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
                ${w.map((n,g,V)=>{const H=i?ye.get(re(i.year,n.month)):void 0,ve=H?.plannedBudgetCents??0,Ne=H?.netCents??0,vt=P.get(n.month)??0,Kt=q.get(n.month)??0,en=Ne<0?"danger":Ne>0?"budget-under":"",nt=V[g-1],Rn=nt?.summary.foodCents??null,jn=nt?.summary.goingOutCents??null,mt=nt?.summary.fixedCents??null,cn=nt?.summary.variableCents??null,un=nt?.summary.miscCents??null,Fs=nt?.summary.totalCents??null,Ds=nt!==void 0?P.get(nt.month)??0:null,Yn=nt!==void 0?q.get(nt.month)??0:null,cs=i&&nt?ye.get(re(i.year,nt.month))?.plannedBudgetCents??0:null,Os=Rn===null?null:n.summary.foodCents-Rn,gt=jn===null?null:n.summary.goingOutCents-jn,Ka=mt===null?null:n.summary.fixedCents-mt,Er=cn===null?null:n.summary.variableCents-cn,Br=un===null?null:n.summary.miscCents-un,Mr=Fs===null?null:n.summary.totalCents-Fs,_r=Ds===null?null:vt-Ds,Pr=Yn===null?null:Kt-Yn,Tr=cs===null?null:ve-cs,Va=Vt=>Vt===null?"muted":Vt>0?"danger":Vt<0?"budget-under":"muted",Ar=Vt=>Vt===null?"muted":Vt>0?"budget-under":Vt<0?"danger":"muted",Ci=Vt=>Vt===null?"muted":Vt>0?"danger":Vt<0?"budget-under":"muted",zn=Vt=>Vt===null?"(Δ -)":`(Δ ${Vt>0?"+":""}${f(Vt)})`,Fr=i&&nt?ye.get(re(i.year,nt.month))?.netCents??0:null,qa=Fr===null?null:Ne-Fr,xi=qa===null?"(Δ -)":`(Δ ${qa>0?"+":""}${f(qa)})`,ki=qa===null?"muted":qa<0?"danger":qa>0?"budget-under":"muted",Dr=vt-n.summary.totalCents,Or=Kt-n.summary.totalCents,$i=n.summary.totalCents>0?`${(vt/n.summary.totalCents*100).toFixed(1)} %`:"-",wi=bn(vt,n.summary.totalCents);return`<tr>
                  <td>${xe(n.month)}</td>
                  <td>${f(n.summary.foodCents)} <span class="${Va(Os)}">${zn(Os)}</span></td>
                  <td>${f(n.summary.goingOutCents)} <span class="${Va(gt)}">${zn(gt)}</span></td>
                  <td>${f(n.summary.fixedCents)} <span class="${Va(Ka)}">${zn(Ka)}</span></td>
                  <td>${f(n.summary.variableCents)} <span class="${Va(Er)}">${zn(Er)}</span></td>
                  <td>${f(n.summary.miscCents)} <span class="${Va(Br)}">${zn(Br)}</span></td>
                  <td>${f(n.summary.totalCents)} <span class="${Va(Mr)}">${zn(Mr)}</span></td>
                  <td>${f(vt)} <span class="${Ar(_r)}">${zn(_r)}</span></td>
                  <td>${f(Kt)} <span class="${Ar(Pr)}">${zn(Pr)}</span></td>
                  <td>${f(ve)} <span class="${Ci(Tr)}">${zn(Tr)}</span></td>
                  <td class="${en}">${f(Ne)} <span class="${ki}">${xi}</span></td>
                  <td class="${Oe(Dr)}">${f(Dr)}</td>
                  <td class="${wi}">${$i}</td>
                  <td class="${Oe(Or)}">${f(Or)}</td>
                </tr>`}).join("")}
                ${yn}
                ${tt}
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
                    <td class="${Ge}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${Dt(O)}" />
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
                  <strong>${f(he)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${f(_e)} €</strong>
                </div>
                <div class="column-overview-row ${Ge}">
                  <span>Übernahme Vormonat</span>
                  <strong>${o?`${f(O)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(At)} €</strong>
                </div>
                <div class="column-overview-row ${He}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${f(Lt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${ga(T,c.foodCents)}
                ${ga(D,c.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(We)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(Pe)} €</strong>
                  </div>
                  <div class="column-overview-row ${Xe}">
                    <span>Diff</span>
                    <strong>${f(De)} €</strong>
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
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${Dt(D)}" ${o?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${o?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${o?o.days.map(n=>{const g=n.foodCents>0,V=n.goingOutCents>0,H=`${n.isoDate===u?"today-row":""} ${g||V?"day-has-entry":""}`.trim(),ve=`amount-input ${g?"day-input-has-value":""}`.trim(),Ne=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${H}">
                      <td>${new Date(n.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${ve}" data-day-food="${n.isoDate}" type="number" min="0" step="0.01" value="${Dt(n.foodCents)}" /></td>
                      <td><input class="${Ne}" data-day-going="${n.isoDate}" type="number" min="0" step="0.01" value="${Dt(n.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${ga(A,c.fixedCents)}
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
                    <td class="${dt(n.actualCents,n.plannedCents)}"><input class="amount-input" data-fixed-actual="${n.id}" type="number" min="0" step="0.01" value="${Dt(n.actualCents)}" /></td>
                    <td class="${dt(n.actualCents,n.plannedCents)}">${f(n.actualCents-n.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${n.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${ga(L,c.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${Dt(L)}" ${o?"":"disabled"} />
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
                    <td class="${dt(n.actualCents,n.budgetCents)}"><input class="amount-input" data-variable-position-actual="${n.id}" type="number" min="0" step="0.01" value="${Dt(n.actualCents)}" /></td>
                    <td class="${dt(n.actualCents,n.budgetCents)}">${f(n.actualCents-n.budgetCents)}</td>
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
              ${ga(I,c.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${Dt(I)}" ${o?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${b}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(p.topModal||p.showUnexportedChangeLogModal||p.showPersistentAuditLogModal)),_n(),Mt(),qe(),wt()}function _n(){const i=B.querySelector("#theme-select"),o=B.querySelector("#open-years-modal"),u=B.querySelector("#open-evaluation-modal"),c=B.querySelector("#open-fixed-modal"),v=B.querySelector("#open-variable-fixed-modal"),w=B.querySelector("#open-dashboard-modal"),T=B.querySelector("#panel-modal-close"),D=B.querySelector("#panel-modal-backdrop"),A=B.querySelector("#open-unexported-change-log"),L=B.querySelector("#open-persistent-audit-log"),I=B.querySelector("#unexported-change-log-close"),U=B.querySelector("#unexported-change-log-backup"),W=B.querySelector("#unexported-change-log-backdrop"),ie=B.querySelector("#persistent-audit-log-close"),Se=B.querySelector("#persistent-audit-log-backdrop"),Le=B.querySelector("#new-year"),he=B.querySelector("#create-year"),_e=B.querySelector("#evaluation-query"),et=B.querySelector("#run-evaluation"),ye=B.querySelector("#save-evaluation"),Ce=B.querySelector("#year-select"),ee=B.querySelector("#month-select");i?.addEventListener("change",()=>{const P=i.value;qr(P)&&$n(P)}),o?.addEventListener("click",()=>{dn("years")}),u?.addEventListener("click",()=>{dn("evaluation")}),c?.addEventListener("click",()=>{dn("fixed")}),v?.addEventListener("click",()=>{dn("variable-fixed")}),w?.addEventListener("click",()=>{dn("dashboard")}),A?.addEventListener("click",()=>{hn()}),L?.addEventListener("click",()=>{Ct()}),I?.addEventListener("click",()=>{_t()}),U?.addEventListener("click",async()=>{try{await Ms()}catch(P){console.error("Backup-Export fehlgeschlagen",P),Z("Backup konnte nicht exportiert werden.","error")}}),W?.addEventListener("click",P=>{P.target===W&&_t()}),ie?.addEventListener("click",()=>{Pt()}),Se?.addEventListener("click",P=>{P.target===Se&&Pt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(p.dashboardTab=q,ae())})});const O=B.querySelector("#dashboard-year-select");O?.addEventListener("change",()=>{const P=Number.parseInt(O.value,10);Number.isInteger(P)&&(p.dashboardYear=P,ae())}),T?.addEventListener("click",()=>{Wn()}),D?.addEventListener("click",P=>{P.target===D&&Wn()}),p.topModal&&window.setTimeout(()=>{T?.focus()},0),p.showUnexportedChangeLogModal&&window.setTimeout(()=>{I?.focus()},0),p.showPersistentAuditLogModal&&window.setTimeout(()=>{ie?.focus()},0),he?.addEventListener("click",async()=>{const P=Number.parseInt(Le?.value??"",10);if(!Number.isInteger(P)){alert("Bitte gültiges Jahr eingeben.");return}await zs(P)}),et?.addEventListener("click",()=>{_s(_e?.value??"")}),_e?.addEventListener("keydown",P=>{P.key==="Enter"&&(P.preventDefault(),_s(_e.value))}),ye?.addEventListener("click",async()=>{await It()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeSavedEvaluation;q&&await ca(q)})}),Ce?.addEventListener("change",()=>{p.selectedYear=Number.parseInt(Ce.value,10),p.selectedMonth=pn(),ae()}),ee?.addEventListener("change",()=>{p.selectedMonth=Number.parseInt(ee.value,10),ae()});const Yt=B.querySelector("#fixed-template-name"),At=B.querySelector("#fixed-template-amount"),gn=B.querySelector("#add-fixed-template"),Lt=B.querySelector("#cancel-fixed-template-edit"),$e=B.querySelector("#annual-variable-fixed-name"),zt=B.querySelector("#annual-variable-fixed-date"),je=B.querySelector("#annual-variable-fixed-amount"),Ge=B.querySelector("#add-annual-variable-fixed-template");gn?.addEventListener("click",async()=>{const P=Yt?.value??"",q=Ke(At?.value??"0");await On(P,q),Yt&&(Yt.value=""),At&&(At.value="")}),Lt?.addEventListener("click",()=>{Ja()}),Ge?.addEventListener("click",async()=>{const P=$e?.value??"",q=zt?.value??"",Ft=Ke(je?.value??"0");await In(P,q,Ft),$e&&($e.value=""),zt&&(zt.value=""),je&&(je.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeAnnualVariableFixedTemplate;q&&await mn(q)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.editFixedTemplate;q&&Cs(q)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixedTemplate;q&&await Ze(q)})}),B.querySelectorAll("[data-day-food]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayFood;q&&await Ha(q,"foodCents",Ke(P.value))})}),B.querySelectorAll("[data-day-going]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayGoing;q&&await Ha(q,"goingOutCents",Ke(P.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedActual;q&&await sa(q,Ke(P.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedPlanned;q&&await Ta(q,Ke(P.value))})});const He=B.querySelector("#fixed-budget");He?.addEventListener("click",P=>{P.preventDefault(),He.blur(),ut(He)}),He?.addEventListener("change",async()=>{await xs(Ke(He.value))});const st=B.querySelector("#food-budget");st?.addEventListener("click",P=>{P.preventDefault(),st.blur(),ut(st)}),st?.addEventListener("change",async()=>{await Aa(Ke(st.value))});const it=B.querySelector("#going-out-budget");it?.addEventListener("click",P=>{P.preventDefault(),it.blur(),ut(it)}),it?.addEventListener("change",async()=>{await ks(Ke(it.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{qs()});const Gt=B.querySelector("#misc-budget");Gt?.addEventListener("click",P=>{P.preventDefault(),Gt.blur(),ut(Gt)}),Gt?.addEventListener("change",async()=>{await be(Ke(Gt.value))});const Wt=B.querySelector("#variable-budget");Wt?.addEventListener("click",P=>{P.preventDefault(),Wt.blur(),ut(Wt)}),Wt?.addEventListener("change",async()=>{await $s(Ke(Wt.value))});const Nt=B.querySelector("#variable-position-name"),ot=B.querySelector("#variable-position-budget"),We=B.querySelector("#add-variable-position"),Pe=B.querySelector("#add-variable-position-recurring"),De=B.querySelector("#import-variable-csv"),Xe=B.querySelector("#import-variable-csv-input"),Ye=B.querySelector("#misc-description"),Ue=B.querySelector("#misc-amount"),Pn=B.querySelector("#add-misc"),Oe=B.querySelector("#add-misc-recurring"),bn=B.querySelector("#import-misc-csv"),pt=B.querySelector("#import-misc-csv-input"),le=B.querySelector("#income-description"),Et=B.querySelector("#income-source"),Bt=B.querySelector("#income-amount"),Kn=B.querySelector("#add-income"),sn=B.querySelector("#add-income-recurring"),Vn=B.querySelector("#fixed-cost-name"),rn=B.querySelector("#fixed-cost-budget"),lt=B.querySelector("#add-fixed-cost"),Ut=B.querySelector("#import-fixed-csv"),ft=B.querySelector("#import-fixed-csv-input"),ua=B.querySelector("#clear-fixed-costs"),Tn=B.querySelector("#carryover-override");Tn?.addEventListener("click",P=>{P.preventDefault(),Tn.blur(),ut(Tn)}),Tn?.addEventListener("change",async()=>{const P=Tn.value;if(!P.trim()){await Ca(null);return}await Ca(Ke(P))}),lt?.addEventListener("click",async()=>{const P=Ke(rn?.value??"0");await Xa(Vn?.value??"",P),Vn&&(Vn.value=""),rn&&(rn.value="")}),Ut?.addEventListener("click",()=>{ft?.click()}),ft?.addEventListener("change",async()=>{const P=ft.files?.[0];if(P){try{await Za(P)}catch(q){console.error("Fixkosten-CSV-Import fehlgeschlagen",q),Z("CSV konnte nicht importiert werden.","error")}ft.value=""}}),ua?.addEventListener("click",async()=>{await Ln()}),We?.addEventListener("click",async()=>{const P=Ke(ot?.value??"0");await ia(Nt?.value??"",P,!1),Nt&&(Nt.value=""),ot&&(ot.value="")}),Pe?.addEventListener("click",async()=>{const P=Ke(ot?.value??"0");await ia(Nt?.value??"",P,!0),Nt&&(Nt.value=""),ot&&(ot.value="")}),De?.addEventListener("click",()=>{Xe?.click()}),Xe?.addEventListener("change",async()=>{const P=Xe.files?.[0];if(P){try{await es(P)}catch(q){console.error("Variable-CSV-Import fehlgeschlagen",q),Z("CSV konnte nicht importiert werden.","error")}Xe.value=""}}),Pn?.addEventListener("click",async()=>{const P=Ke(Ue?.value??"0");await oa(Ye?.value??"",P,!1),Ye&&(Ye.value=""),Ue&&(Ue.value="")}),Oe?.addEventListener("click",async()=>{const P=Ke(Ue?.value??"0");await oa(Ye?.value??"",P,!0),Ye&&(Ye.value=""),Ue&&(Ue.value="")}),bn?.addEventListener("click",()=>{pt?.click()}),pt?.addEventListener("change",async()=>{const P=pt.files?.[0];if(P){try{await la(P)}catch(q){console.error("Sonstiges-CSV-Import fehlgeschlagen",q),Z("CSV konnte nicht importiert werden.","error")}pt.value=""}}),Kn?.addEventListener("click",async()=>{const P=Ke(Bt?.value??"0"),q=Et?.value,Ft=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ts(le?.value??"",P,Ft,!1),le&&(le.value=""),Bt&&(Bt.value=""),Et&&(Et.value="salary")}),sn?.addEventListener("click",async()=>{const P=Ke(Bt?.value??"0"),q=Et?.value,Ft=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ts(le?.value??"",P,Ft,!0),le&&(le.value=""),Bt&&(Bt.value=""),Et&&(Et.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(P=>{P.addEventListener("change",async()=>{const q=P.dataset.incomeSource;if(!q)return;const Ft=P.value;await Da(q,Ft==="balance"||Ft==="fresh"||Ft==="salary"?Ft:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionBudget;q&&await Ss(q,Ke(P.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionActual;q&&await ws(q,Ke(P.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeVariablePosition;q&&await Es(q)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.moveVariablePositionNext;q&&await Ie(q)})}),B.querySelectorAll("[data-remove-fixed]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixed;q&&await Qa(q)})}),B.querySelectorAll("[data-remove-income]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeIncome;q&&await Bs(q)})}),B.querySelectorAll("[data-remove-misc]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeMisc;q&&await Fa(q)})});const xa=B.querySelector("#backup-export"),Oa=B.querySelector("#backup-export-csv"),ka=B.querySelector("#backup-export-detailed-month-csv"),$a=B.querySelector("#backup-export-detailed-year-csv"),da=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),xa?.addEventListener("click",async()=>{await Ms()}),Oa?.addEventListener("click",async()=>{try{await Be()}catch(P){console.error("CSV-Backup-Export fehlgeschlagen",P),Z("CSV-Backup konnte nicht exportiert werden.","error")}}),ka?.addEventListener("click",async()=>{try{await ns("month")}catch(P){console.error("Detaillierter Monats-CSV-Export fehlgeschlagen",P),Z("Detailliertes Monats-CSV konnte nicht exportiert werden.","error")}}),$a?.addEventListener("click",async()=>{try{await ns("year")}catch(P){console.error("Detaillierter Jahres-CSV-Export fehlgeschlagen",P),Z("Detailliertes Jahres-CSV konnte nicht exportiert werden.","error")}}),da?.addEventListener("change",async()=>{const P=da.files?.[0];if(P){try{await Ws(P)}catch(q){console.error("Backup-Import fehlgeschlagen",q),Z("Backup konnte nicht importiert werden.","error")}da.value=""}})}return{init:Ot}}const qi="modulepreload",Ri=function(B){return"/habu26/"+B},jr={},ji=function(p,Ae,Q){let fe=Promise.resolve();if(Ae&&Ae.length>0){let at=function(ze){return Promise.all(ze.map(de=>Promise.resolve(de).then(yt=>({status:"fulfilled",value:yt}),yt=>({status:"rejected",reason:yt}))))};var Ee=at;document.getElementsByTagName("link");const ue=document.querySelector("meta[property=csp-nonce]"),me=ue?.nonce||ue?.getAttribute("nonce");fe=at(Ae.map(ze=>{if(ze=Ri(ze),ze in jr)return;jr[ze]=!0;const de=ze.endsWith(".css"),yt=de?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${ze}"]${yt}`))return;const ct=document.createElement("link");if(ct.rel=de?"stylesheet":qi,de||(ct.as="script"),ct.crossOrigin="",ct.href=ze,me&&ct.setAttribute("nonce",me),document.head.appendChild(ct),de)return new Promise((qe,Mt)=>{ct.addEventListener("load",qe),ct.addEventListener("error",()=>Mt(new Error(`Unable to preload CSS for ${ze}`)))})}))}function oe(ue){const me=new Event("vite:preloadError",{cancelable:!0});if(me.payload=ue,window.dispatchEvent(me),!me.defaultPrevented)throw ue}return fe.then(ue=>{for(const me of ue||[])me.status==="rejected"&&oe(me.reason);return p().catch(oe)})};function Yi(B={}){const{immediate:p=!1,onNeedRefresh:Ae,onOfflineReady:Q,onRegistered:fe,onRegisteredSW:oe,onRegisterError:Ee}=B;let ue,me;const at=async(de=!0)=>{await me};async function ze(){if("serviceWorker"in navigator){if(ue=await ji(async()=>{const{Workbox:de}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:de}},[]).then(({Workbox:de})=>new de("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(de=>{Ee?.(de)}),!ue)return;ue.addEventListener("activated",de=>{(de.isUpdate||de.isExternal)&&window.location.reload()}),ue.addEventListener("installed",de=>{de.isUpdate||Q?.()}),ue.register({immediate:p}).then(de=>{oe?oe("/habu26/sw.js",de):fe?.(de)}).catch(de=>{Ee?.(de)})}}return me=ze(),at}function zi(){Yi({immediate:!0})}const zr=document.getElementById("app");if(!zr)throw new Error("App-Container nicht gefunden.");Vi(zr).init();zi();
