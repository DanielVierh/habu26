(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const de of document.querySelectorAll('link[rel="modulepreload"]'))Q(de);new MutationObserver(de=>{for(const se of de)if(se.type==="childList")for(const ge of se.addedNodes)ge.tagName==="LINK"&&ge.rel==="modulepreload"&&Q(ge)}).observe(document,{childList:!0,subtree:!0});function we(de){const se={};return de.integrity&&(se.integrity=de.integrity),de.referrerPolicy&&(se.referrerPolicy=de.referrerPolicy),de.crossOrigin==="use-credentials"?se.credentials="include":de.crossOrigin==="anonymous"?se.credentials="omit":se.credentials="same-origin",se}function Q(de){if(de.ep)return;de.ep=!0;const se=we(de);fetch(de.href,se)}})();const vi=[1,2,3,4,5,6,7,8,9,10,11,12];function ss(){return new Date().toISOString()}function ct(B){const h=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${h}`}function mi(B,h){const we=new Date(B,h,0).getDate(),Q=[];for(let de=1;de<=we;de+=1){const se=new Date(Date.UTC(B,h-1,de));Q.push({isoDate:se.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Q}function gi(B){return B.map(h=>({id:ct("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Pr(B,h,we){const Q=h.reduce((se,ge)=>se+ge.plannedCents,0),de=vi.map(se=>({month:se,days:mi(B,se),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:gi(h),fixedBudgetCents:Q,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:ss(),templateVersion:we,months:de}}function Gs(B,h){return{id:ct("expense"),description:B,amountCents:h,createdAt:ss()}}function Ar(B,h,we){const Q={id:ct("income"),description:B,amountCents:h,createdAt:ss()};return we?{...Q,incomeSource:we}:Q}function Bs(B,h){return B.toLocaleLowerCase("de-DE").includes(h)}function Ir(B,h,we,Q){const de=h.trim(),se=de.toLocaleLowerCase("de-DE");if(!se)return{id:ct("search_eval"),keyword:"",keywordNormalized:"",createdAt:ss(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let ge=0,ie=0,he=0,Ze=0,Ve=0;const oe=Math.max(1,Math.min(12,Q)),ut=[],ot=[];return B.slice().sort((Ne,Ct)=>Ne.year-Ct.year).forEach(Ne=>{let Ct=0,Ut=0,Kn=0,Ht=0;Ne.months.slice().sort((xt,dt)=>xt.month-dt.month).forEach(xt=>{let dt=0,kt=0;if(xt.fixedCosts.forEach(mt=>{Bs(mt.name,se)&&(dt+=1,kt+=mt.actualCents)}),xt.variableCosts.forEach(mt=>{Bs(mt.description,se)&&(dt+=1,kt+=mt.amountCents)}),xt.variablePositions.forEach(mt=>{Bs(mt.name,se)&&(dt+=1,kt+=mt.actualCents)}),xt.miscCosts.forEach(mt=>{Bs(mt.description,se)&&(dt+=1,kt+=mt.amountCents)}),dt<=0)return;Ct+=dt,Ut+=kt,(Ne.year<we||Ne.year===we&&xt.month<=oe)&&(Ht+=1,Kn+=kt),ge+=dt,ie+=kt,(Ne.year<we||Ne.year===we&&xt.month<=oe)&&(Ze+=1,Ve+=kt),ot.push({year:Ne.year,month:xt.month,hitCount:dt,totalCents:kt})}),!(Ct<=0)&&(Ne.year===we&&(he+=Ut),ut.push({year:Ne.year,hitCount:Ct,totalCents:Ut,monthsWithHits:Ht,monthAverageCents:Ht>0?Math.round(Kn/Ht):0}))}),{id:ct("search_eval"),keyword:de,keywordNormalized:se,createdAt:ss(),totalHitCount:ge,totalCents:ie,currentYearCents:he,monthsWithHits:Ze,monthAverageCents:Ze>0?Math.round(Ve/Ze):0,yearRows:ut,monthRows:ot}}var bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yi(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var Ms={exports:{}},Ci=Ms.exports,Or;function xi(){return Or||(Or=1,(function(B,h){((we,Q)=>{B.exports=Q()})(Ci,function(){var we=function(e,t){return(we=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function de(e,t,n){for(var s,r=0,l=t.length;r<l;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:bi,ge=Object.keys,ie=Array.isArray;function he(e,t){return typeof t=="object"&&ge(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||se.Promise||(se.Promise=Promise);var Ze=Object.getPrototypeOf,Ve={}.hasOwnProperty;function oe(e,t){return Ve.call(e,t)}function ut(e,t){typeof t=="function"&&(t=t(Ze(e))),(typeof Reflect>"u"?ge:Reflect.ownKeys)(t).forEach(function(n){Ne(e,n,t[n])})}var ot=Object.defineProperty;function Ne(e,t,n,s){ot(e,t,he(n&&oe(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function Ct(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Ne(e.prototype,"constructor",e),{extend:ut.bind(null,e.prototype)}}}}var Ut=Object.getOwnPropertyDescriptor,Kn=[].slice;function Ht(e,t,n){return Kn.call(e,t,n)}function xt(e,t){return t(e)}function dt(e){if(!e)throw new Error("Assertion Failed")}function kt(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Yt(e,t){if(typeof t=="string"&&oe(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var l=Yt(e,t[s]);n.push(l)}return n}var c,d=t.indexOf(".");return d===-1||(c=e[t.substr(0,d)])==null?void 0:Yt(c,t.substr(d+1))}function vt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){dt(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)vt(e,t[s],n[s])}else{var l,c,d=t.indexOf(".");d!==-1?(l=t.substr(0,d),(d=t.substr(d+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(l))?e.splice(l,1):delete e[l]:e[l]=n:vt(c=(c=e[l])&&oe(e,l)?c:e[l]={},d,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function mt(e){var t,n={};for(t in e)oe(e,t)&&(n[t]=e[t]);return n}var Ps=[].concat;function qa(e){return Ps.apply([],e)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(qa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),rs=new Set(At.map(function(e){return se[e]})),ea=null;function wt(e){return ea=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=ea.get(n);if(s)return s;if(ie(n)){s=[],ea.set(n,s);for(var r=0,l=n.length;r<l;++r)s.push(t(n[r]))}else if(rs.has(n.constructor))s=n;else{var c,d=Ze(n);for(c in s=d===Object.prototype?{}:Object.create(d),ea.set(n,s),n)oe(n,c)&&(s[c]=t(n[c]))}return s})(e),ea=null,e}var ta={}.toString;function Ra(e){return ta.call(e).slice(8,-1)}var Va=typeof Symbol<"u"?Symbol.iterator:"@@iterator",As=typeof Va=="symbol"?function(e){var t;return e!=null&&(t=e[Va])&&t.apply(e)}:function(){return null};function ln(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var lt={};function ne(e){var t,n,s,r;if(arguments.length===1){if(ie(e))return e.slice();if(this===lt&&typeof e=="string")return[e];if(r=As(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var Jt=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},At=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Et=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(At),is={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Sn(e,t){this.name=e,this.message=t}function os(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function gt(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=os(e,t)}function qn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=os(e,this.failures)}Ct(Sn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Ct(gt).from(Sn),Ct(qn).from(Sn);var Ca=Et.reduce(function(e,t){return e[t]=t+"Error",e},{}),Is=Sn,ee=Et.reduce(function(e,t){var n=t+"Error";function s(r,l){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(l?`
 `+l:""),this.inner=l||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=is[t]||n,this.inner=null)}return Ct(s).from(Is),e[t]=s,e},{}),ls=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,At.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));At=Et.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function $e(){}function na(e){return e}function Os(e,t){return e==null||e===na?t:function(n){return t(e(n))}}function En(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function cs(e,t){return e===$e?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?En(s,this.onsuccess):s),r&&(this.onerror=this.onerror?En(r,this.onerror):r),l!==void 0?l:n}}function Fs(e,t){return e===$e?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?En(n,this.onsuccess):n),s&&(this.onerror=this.onerror?En(s,this.onerror):s)}}function us(e,t){return e===$e?t:function(r){var s=e.apply(this,arguments),r=(he(r,s),this.onsuccess),l=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?En(r,this.onsuccess):r),l&&(this.onerror=this.onerror?En(l,this.onerror):l),s===void 0?c===void 0?void 0:c:he(s,c)}}function Ds(e,t){return e===$e?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function aa(e,t){return e===$e?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,l=new Array(r);r--;)l[r]=arguments[r];return n.then(function(){return t.apply(s,l)})}return t.apply(this,arguments)}}At.ModifyError=gt,At.DexieError=Sn,At.BulkError=qn;var It=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Rn(e){It=e}var Vn={},jn=100,Ee=typeof Promise>"u"?[]:(Et=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ee=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Ze(Ee),Et]:[Et,Ze(Et),Et]),Et=Ee[0],An=Ee[1],An=An&&An.then,Nt=Et&&Et.constructor,Yn=!!Ee[2],cn=function(e,t){ia.push([e,t]),zn&&(queueMicrotask(Wn),zn=!1)},ja=!0,zn=!0,Xt=[],sa=[],ra=na,un={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},H=un,ia=[],Ot=0,dn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==Vn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&xa(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(l){if(s._state===null){if(l===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&pn();l&&typeof l.then=="function"?n(s,function(d,k){l instanceof z?l._then(d,k):l.then(d,k)}):(s._state=!0,s._value=l,je(s)),c&&Bn()}},xa.bind(null,s))}catch(l){xa(s,l)}})(this,e)}var hn={get:function(){var e=H,t=wa;function n(s,r){var l=this,c=!e.global&&(e!==H||t!==wa),d=c&&!vn(),k=new z(function(E,m){Bt(l,new ds(hs(s,e,c,d),hs(r,e,c,d),E,m,e))});return this._consoleTask&&(k._consoleTask=this._consoleTask),k}return n.prototype=Vn,n},set:function(e){Ne(this,"then",e&&e.prototype===Vn?hn:{get:function(){return e},set:hn.set})}};function ds(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function xa(e,t){var n,s;sa.push(t),e._state===null&&(n=e._lib&&pn(),t=ra(t),e._state=!1,e._value=t,s=e,Xt.some(function(r){return r._value===s._value})||Xt.push(s),je(e),n)&&Bn()}function je(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)Bt(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),Ot===0&&(++Ot,cn(function(){--Ot==0&&oa()},[]))}function Bt(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ot,cn(ve,[n,e,t])}}function ve(e,t,n){try{var s,r=t._value;!t._state&&sa.length&&(sa=[]),s=It&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||sa.indexOf(r)!==-1||(l=>{for(var c=Xt.length;c;)if(Xt[--c]._value===l._value)return Xt.splice(c,1)})(t),n.resolve(s)}catch(l){n.reject(l)}finally{--Ot==0&&oa(),--n.psd.ref||n.psd.finalize()}}function Wn(){Mn(un,function(){pn()&&Bn()})}function pn(){var e=ja;return zn=ja=!1,e}function Bn(){var e,t,n;do for(;0<ia.length;)for(e=ia,ia=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<ia.length);zn=ja=!0}function oa(){for(var e=Xt,t=(Xt=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),dn.slice(0)),n=t.length;n;)t[--n]()}function la(e){return new z(Vn,!1,e)}function me(e,t){var n=H;return function(){var s=pn(),r=H;try{return mn(n,!0),e.apply(this,arguments)}catch(l){t&&t(l)}finally{mn(r,!1),s&&Bn()}}}ut(z.prototype,{then:hn,_then:function(e,t){Bt(this,new ds(null,null,e,t,H))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:la)(s)}):this.then(null,function(s){return(s&&s.name===t?n:la)(s)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return la(t)})})},timeout:function(e,t){var n=this;return e<1/0?new z(function(s,r){var l=setTimeout(function(){return r(new ee.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,l))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Ne(z.prototype,Symbol.toStringTag,"Dexie.Promise"),un.env=Ya(),ut(z,{all:function(){var e=ne.apply(null,arguments).map($a);return new z(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,l){return z.resolve(r).then(function(c){e[l]=c,--s||t(e)},n)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,n){e.then(t,n)}):new z(Vn,!0,e)},reject:la,race:function(){var e=ne.apply(null,arguments).map($a);return new z(function(t,n){e.map(function(s){return z.resolve(s).then(t,n)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return wa}},newPSD:fn,usePSD:Mn,scheduler:{get:function(){return cn},set:function(e){cn=e}},rejectionMapper:{get:function(){return ra},set:function(e){ra=e}},follow:function(e,t){return new z(function(n,s){return fn(function(r,l){var c=H;c.unhandleds=[],c.onunhandled=l,c.finalize=En(function(){var d,k=this;d=function(){k.unhandleds.length===0?r():l(k.unhandleds[0])},dn.push(function E(){d(),dn.splice(dn.indexOf(E),1)}),++Ot,cn(function(){--Ot==0&&oa()},[])},c.finalize),e()},t,n,s)})}}),Nt&&(Nt.allSettled&&Ne(z,"allSettled",function(){var e=ne.apply(null,arguments).map($a);return new z(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,l){return z.resolve(r).then(function(c){return s[l]={status:"fulfilled",value:c}},function(c){return s[l]={status:"rejected",reason:c}}).then(function(){return--n||t(s)})})})}),Nt.any&&typeof AggregateError<"u"&&Ne(z,"any",function(){var e=ne.apply(null,arguments).map($a);return new z(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(l,c){return z.resolve(l).then(function(d){return t(d)},function(d){r[c]=d,--s||n(new AggregateError(r))})})})}),Nt.withResolvers)&&(z.withResolvers=Nt.withResolvers);var Be={awaits:0,echoes:0,id:0},Ls=0,ca=[],ka=0,wa=0,Ns=0;function fn(e,c,n,s){var r=H,l=Object.create(r),c=(l.parent=r,l.ref=0,l.global=!1,l.id=++Ns,un.env,l.env=Yn?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},c&&he(l,c),++r.ref,l.finalize=function(){--this.parent.ref||this.parent.finalize()},Mn(l,e,n,s));return l.ref===0&&l.finalize(),c}function Gn(){return Be.id||(Be.id=++Ls),++Be.awaits,Be.echoes+=jn,Be.id}function vn(){return!!Be.awaits&&(--Be.awaits==0&&(Be.id=0),Be.echoes=Be.awaits*jn,!0)}function $a(e){return Be.echoes&&e&&e.constructor===Nt?(Gn(),e.then(function(t){return vn(),t},function(t){return vn(),Ue(t)})):e}function Ks(){var e=ca[ca.length-1];ca.pop(),mn(e,!1)}function mn(e,t){var n,s,r=H;(t?!Be.echoes||ka++&&e===H:!ka||--ka&&e===H)||queueMicrotask(t?(function(l){++wa,Be.echoes&&--Be.echoes!=0||(Be.echoes=Be.awaits=Be.id=0),ca.push(H),mn(l,!0)}).bind(null,e):Ks),e!==H&&(H=e,r===un&&(un.env=Ya()),Yn)&&(n=un.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(se,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function Ya(){var e=se.Promise;return Yn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Mn(e,t,n,s,r){var l=H;try{return mn(e,!0),t(n,s,r)}finally{mn(l,!1)}}function hs(e,t,n,s){return typeof e!="function"?e:function(){var r=H;n&&Gn(),mn(t,!0);try{return e.apply(this,arguments)}finally{mn(r,!1),s&&queueMicrotask(vn)}}}function za(e){Promise===Nt&&Be.echoes===0?ka===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+An).indexOf("[native code]")===-1&&(Gn=vn=$e);var Ue=z.reject,_n="￿",Qt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ps="String expected.",Un=[],Sa="__dbnames",Wa="readonly",Tn="readwrite";function gn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Ga={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ea(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=wt(t))[e],t}}function fs(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function pe(e,t){try{var n=vs(e),s=vs(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=Ua(e),l=Ua(t),c=r.length,d=l.length,k=c<d?c:d,E=0;E<k;++E)if(r[E]!==l[E])return r[E]<l[E]?-1:1;return c===d?0:c<d?-1:1;case"Array":for(var m=e,b=t,g=m.length,w=b.length,y=g<w?g:w,C=0;C<y;++C){var M=pe(m[C],b[C]);if(M!==0)return M}return g===w?0:g<w?-1:1}}catch{}return NaN}function vs(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ra(e))==="ArrayBuffer")?"binary":t}function Ua(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Hn(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,l){return!n.failures[l]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}ms.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return de(de([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(ie(s))return ie(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var ua=ms;function ms(e){this["@@propmod"]=e}function gs(e,t){for(var n=ge(t),s=n.length,r=!1,l=0;l<s;++l){var c=n[l],d=t[c],k=Yt(e,c);d instanceof ua?(vt(e,c,d.execute(k)),r=!0):k!==d&&(vt(e,c,d),r=!0)}return r}Pe.prototype._trans=function(e,t,n){var s=this._tx||H.trans,r=this.name,l=It&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(E,m,b){if(b.schema[r])return t(b.idbtrans,b);throw new ee.NotFound("Table "+r+" not part of transaction")}var d=pn();try{var k=s&&s.db._novip===this.db._novip?s===H.trans?s._promise(e,c,n):fn(function(){return s._promise(e,c,n)},{trans:s,transless:H.transless||H}):(function E(m,b,g,w){if(m.idbdb&&(m._state.openComplete||H.letThrough||m._vip)){var y=m._createTransaction(b,g,m._dbSchema);try{y.create(),m._state.PR1398_maxLoop=3}catch(C){return C.name===Ca.InvalidState&&m.isOpen()&&0<--m._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),m.close({disableAutoOpen:!1}),m.open().then(function(){return E(m,b,g,w)})):Ue(C)}return y._promise(b,function(C,M){return fn(function(){return H.trans=y,w(C,M,y)})}).then(function(C){if(b==="readwrite")try{y.idbtrans.commit()}catch{}return b==="readonly"?C:y._completion.then(function(){return C})})}if(m._state.openComplete)return Ue(new ee.DatabaseClosed(m._state.dbOpenError));if(!m._state.isBeingOpened){if(!m._state.autoOpen)return Ue(new ee.DatabaseClosed);m.open().catch($e)}return m._state.dbReadyPromise.then(function(){return E(m,b,g,w)})})(this.db,e,[this.name],c);return l&&(k._consoleTask=l,k=k.catch(function(E){return console.trace(E),Ue(E)})),k}finally{d&&Bn()}},Pe.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ue(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},Pe.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=ge(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(d){if(d.compound&&t.every(function(E){return 0<=d.keyPath.indexOf(E)})){for(var k=0;k<t.length;++k)if(t.indexOf(d.keyPath[k])===-1)return!1;return!0}return!1}).sort(function(d,k){return d.keyPath.length-k.keyPath.length})[0];if(n&&this.db._maxKey!==_n)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(d){return e[d]}));!n&&It&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(d,k){return pe(d,k)===0}var c=t.reduce(function(m,k){var E=m[0],m=m[1],b=s[k],g=e[k];return[E||b,E||!b?gn(m,b&&b.multi?function(w){return w=Yt(w,k),ie(w)&&w.some(function(y){return r(g,y)})}:function(w){return r(g,Yt(w,k))}):m]},[null,null]),l=c[0],c=c[1];return l?this.where(l.name).equals(e[l.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Pe.prototype.filter=function(e){return this.toCollection().and(e)},Pe.prototype.count=function(e){return this.toCollection().count(e)},Pe.prototype.offset=function(e){return this.toCollection().offset(e)},Pe.prototype.limit=function(e){return this.toCollection().limit(e)},Pe.prototype.each=function(e){return this.toCollection().each(e)},Pe.prototype.toArray=function(e){return this.toCollection().toArray(e)},Pe.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Pe.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},Pe.prototype.reverse=function(){return this.toCollection().reverse()},Pe.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof fs&&(e=(c=>{var d=m,k=c;if(typeof k!="function"&&k!==null)throw new TypeError("Class extends value "+String(k)+" is not a constructor or null");function E(){this.constructor=d}function m(){return c!==null&&c.apply(this,arguments)||this}return we(d,k),d.prototype=k===null?Object.create(k):(E.prototype=k.prototype,new E),Object.defineProperty(m.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),m.prototype.table=function(){return n},m})(e)),new Set),r=e.prototype;r;r=Ze(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function l(c){if(!c)return c;var d,k=Object.create(e.prototype);for(d in c)if(!s.has(d))try{k[d]=c[d]}catch{}return k}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=l,this.hook("reading",l),e},Pe.prototype.defineClass=function(){return this.mapToClass(function(e){he(this,e)})},Pe.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,c=e;return l&&r&&(c=Ea(l)(e)),this._trans("readwrite",function(d){return n.core.mutate({trans:d,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(d){return d.numFailures?z.reject(d.failures[0]):d.lastResult}).then(function(d){if(l)try{vt(e,l,d)}catch{}return d})},Pe.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(l){var c=l??{};return gs(c,t),s&&vt(c,s,e),n.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(d){return d.numFailures?z.reject(d.failures[0]):!!l})})})},Pe.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=Yt(e,this.schema.primKey.keyPath))===void 0?Ue(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Pe.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,c=e;return l&&r&&(c=Ea(l)(e)),this._trans("readwrite",function(d){return n.core.mutate({trans:d,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(d){return d.numFailures?z.reject(d.failures[0]):d.lastResult}).then(function(d){if(l)try{vt(e,l,d)}catch{}return d})},Pe.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return Hn(t,[e],s)}).then(function(s){return s.numFailures?z.reject(s.failures[0]):void 0})})},Pe.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Ga}).then(function(n){return Hn(e,null,n)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},Pe.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Pe.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,l=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var k=e.length,E=d&&E?e.map(Ea(d)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:E,wantResults:l}).then(function(m){var b=m.numFailures,g=m.failures;if(b===0)return l?m.results:m.lastResult;throw new qn("".concat(s.name,".bulkAdd(): ").concat(b," of ").concat(k," operations failed"),g)})})},Pe.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,l=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var k=e.length,E=d&&E?e.map(Ea(d)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:E,wantResults:l}).then(function(m){var b=m.numFailures,g=m.failures;if(b===0)return l?m.results:m.lastResult;throw new qn("".concat(s.name,".bulkPut(): ").concat(b," of ").concat(k," operations failed"),g)})})},Pe.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),l=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:s,cache:"clone"}).then(function(d){var k=[],E=[],m=(e.forEach(function(b,g){var w=b.key,y=b.changes,C=d[g];if(C){for(var M=0,T=Object.keys(y);M<T.length;M++){var S=T[M],I=y[S];if(S===t.schema.primKey.keyPath){if(pe(I,w)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else vt(C,S,I)}l.push(g),k.push(w),E.push(C)}}),k.length);return n.mutate({trans:c,type:"put",keys:k,values:E,updates:{keys:s,changeSpecs:r}}).then(function(b){var g=b.numFailures,w=b.failures;if(g===0)return m;for(var y=0,C=Object.keys(w);y<C.length;y++){var M,T=C[y],S=l[Number(T)];S!=null&&(M=w[T],delete w[T],w[S]=M)}throw new qn("".concat(t.name,".bulkUpdate(): ").concat(g," of ").concat(m," operations failed"),w)})})})},Pe.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Hn(t,e,r)})}).then(function(s){var r=s.numFailures,l=s.failures;if(r===0)return s.lastResult;throw new qn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),l)})};var bs=Pe;function Pe(){}function da(e){function t(c,d){if(d){for(var k=arguments.length,E=new Array(k-1);--k;)E[k-1]=arguments[k];return n[c].subscribe.apply(null,E),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=l;for(var s=1,r=arguments.length;s<r;++s)l(arguments[s]);return t;function l(c,d,k){var E,m;if(typeof c!="object")return d=d||Ds,m={subscribers:[],fire:k=k||$e,subscribe:function(b){m.subscribers.indexOf(b)===-1&&(m.subscribers.push(b),m.fire=d(m.fire,b))},unsubscribe:function(b){m.subscribers=m.subscribers.filter(function(g){return g!==b}),m.fire=m.subscribers.reduce(d,k)}},n[c]=t[c]=m;ge(E=c).forEach(function(b){var g=E[b];if(ie(g))l(b,E[b][0],E[b][1]);else{if(g!=="asap")throw new ee.InvalidArgument("Invalid event config");var w=l(b,na,function(){for(var y=arguments.length,C=new Array(y);y--;)C[y]=arguments[y];w.subscribers.forEach(function(M){kt(function(){M.apply(null,C)})})})}})}}function ha(e,t){return Ct(t).from({prototype:e}),t}function Pn(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ha(e,t){e.filter=gn(e.filter,t)}function Ba(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return gn(s(),t())}:t,e.justLimit=n&&!s}function Ma(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function ys(e,t,n){var s=Ma(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function te(e,t,n,s){var r,l,c=e.replayFilter?gn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},l=function(d,k,E){var m,b;c&&!c(k,E,function(g){return k.stop(g)},function(g){return k.fail(g)})||((b=""+(m=k.primaryKey))=="[object ArrayBuffer]"&&(b=""+new Uint8Array(m)),oe(r,b))||(r[b]=!0,t(d,k,E))},Promise.all([e.or._iterate(l,n),Cs(ys(e,s,n),e.algorithm,l,!e.keysOnly&&e.valueMapper)])):Cs(ys(e,s,n),gn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function Cs(e,t,n,s){var r=me(s?function(l,c,d){return n(s(l),c,d)}:n);return e.then(function(l){if(l)return l.start(function(){var c=function(){return l.continue()};t&&!t(l,function(d){return c=d},function(d){l.stop(d),c=$e},function(d){l.fail(d),c=$e})||r(l.value,l,function(d){return c=d}),c()})})}i.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ue.bind(null,n.error)):n.table._trans("readonly",e).then(t)},i.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ue.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},i.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=gn(t.algorithm,e)},i.prototype._iterate=function(e,t){return te(this._ctx,e,t,this._ctx.table.core)},i.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&he(n,e),t._ctx=n,t},i.prototype.raw=function(){return this._ctx.valueMapper=null,this},i.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return te(t,e,n,t.table.core)})},i.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,l=r.table.core;return Pn(r,!0)?l.count({trans:n,query:{index:Ma(r,l.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,te(r,function(){return++s,!1},n,l).then(function(){return s}))}).then(e)},i.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function l(k,E){return E?l(k[n[E]],E-1):k[s]}var c=this._ctx.dir==="next"?1:-1;function d(k,E){return pe(l(k,r),l(E,r))*c}return this.toArray(function(k){return k.sort(d)}).then(t)},i.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,l,c=t._ctx;return c.dir==="next"&&Pn(c,!0)&&0<c.limit?(s=c.valueMapper,r=Ma(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(d){return d=d.result,s?d.map(s):d})):(l=[],te(c,function(d){return l.push(d)},n,c.table.core).then(function(){return l}))},e)},i.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,Pn(t)?Ba(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):Ba(t,function(){var n=e;return function(){return--n<0}})),this},i.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Ba(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},i.prototype.until=function(e,t){return Ha(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},i.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},i.prototype.last=function(e){return this.reverse().first(e)},i.prototype.filter=function(e){var t;return Ha(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=gn(t.isMatch,e),this},i.prototype.and=function(e){return this.filter(e)},i.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},i.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},i.prototype.desc=function(){return this.reverse()},i.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},i.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},i.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},i.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},i.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&Pn(t,!0)&&0<t.limit)return this._read(function(s){var r=Ma(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},i.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},i.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},i.prototype.lastKey=function(e){return this.reverse().firstKey(e)},i.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Ha(this._ctx,function(s){var s=s.primaryKey.toString(),r=oe(e,s);return e[s]=!0,!r})),this},i.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(C,M){var T=M.failures;g+=C-M.numFailures;for(var S=0,I=ge(T);S<I.length;S++){var L=I[S];b.push(T[L])}}var l=typeof e=="function"?e:function(C){return gs(C,e)},c=n.table.core,m=c.schema.primaryKey,d=m.outbound,k=m.extractKey,E=200,m=t.db._options.modifyChunkSize,b=(m&&(E=typeof m=="object"?m[c.name]||m["*"]||200:m),[]),g=0,w=[],y=e===p;return t.clone().primaryKeys().then(function(C){function M(S){var I=Math.min(E,C.length-S),L=C.slice(S,S+I);return(y?Promise.resolve([]):c.getMany({trans:s,keys:L,cache:"immutable"})).then(function(V){var j=[],N=[],J=d?[]:null,G=y?L:[];if(!y)for(var F=0;F<I;++F){var X=V[F],fe={value:wt(X),primKey:C[S+F]};l.call(fe,fe.value,fe)!==!1&&(fe.value==null?G.push(C[S+F]):d||pe(k(X),k(fe.value))===0?(N.push(fe.value),d&&J.push(C[S+F])):(G.push(C[S+F]),j.push(fe.value)))}return Promise.resolve(0<j.length&&c.mutate({trans:s,type:"add",values:j}).then(function(ye){for(var ae in ye.failures)G.splice(parseInt(ae),1);r(j.length,ye)})).then(function(){return(0<N.length||T&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:J,values:N,criteria:T,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(ye){return r(N.length,ye)})}).then(function(){return(0<G.length||T&&y)&&c.mutate({trans:s,type:"delete",keys:G,criteria:T,isAdditionalChunk:0<S}).then(function(ye){return Hn(n.table,G,ye)}).then(function(ye){return r(G.length,ye)})}).then(function(){return C.length>S+I&&M(S+E)})})}var T=Pn(n)&&n.limit===1/0&&(typeof e!="function"||y)&&{index:n.index,range:n.range};return M(0).then(function(){if(0<b.length)throw new gt("Error modifying one or more objects",b,g,w);return C.length})})})},i.prototype.delete=function(){var e=this._ctx,t=e.range;return!Pn(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(p):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(l){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(k){var d=k.failures,k=k.numFailures;if(k)throw new gt("Could not delete some values",Object.keys(d).map(function(E){return d[E]}),l-k);return l-k})})})};var o=i;function i(){}var p=function(e,t){return t.value=null};function u(e,t){return e<t?-1:e===t?0:1}function v(e,t){return t<e?-1:e===t?0:1}function $(e,t,n){return e=e instanceof R?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function P(e){return new e.Collection(e,function(){return W("")}).limit(0)}function O(w,t,n,s){var r,l,c,d,k,E,m,b=n.length;if(!n.every(function(C){return typeof C=="string"}))return $(w,ps);function g(C){r=C==="next"?function(T){return T.toUpperCase()}:function(T){return T.toLowerCase()},l=C==="next"?function(T){return T.toLowerCase()}:function(T){return T.toUpperCase()},c=C==="next"?u:v;var M=n.map(function(T){return{lower:l(T),upper:r(T)}}).sort(function(T,S){return c(T.lower,S.lower)});d=M.map(function(T){return T.upper}),k=M.map(function(T){return T.lower}),m=(E=C)==="next"?"":s}g("next");var w=new w.Collection(w,function(){return A(d[0],k[b-1]+s)}),y=(w._ondirectionchange=function(C){g(C)},0);return w._addAlgorithm(function(C,M,T){var S=C.key;if(typeof S=="string"){var I=l(S);if(t(I,k,y))return!0;for(var L=null,V=y;V<b;++V){var j=((N,J,G,F,X,fe)=>{for(var ye=Math.min(N.length,F.length),ae=-1,ue=0;ue<ye;++ue){var Ce=J[ue];if(Ce!==F[ue])return X(N[ue],G[ue])<0?N.substr(0,ue)+G[ue]+G.substr(ue+1):X(N[ue],F[ue])<0?N.substr(0,ue)+F[ue]+G.substr(ue+1):0<=ae?N.substr(0,ae)+J[ae]+G.substr(ae+1):null;X(N[ue],Ce)<0&&(ae=ue)}return ye<F.length&&fe==="next"?N+G.substr(N.length):ye<N.length&&fe==="prev"?N.substr(0,G.length):ae<0?null:N.substr(0,ae)+F[ae]+G.substr(ae+1)})(S,I,d[V],k[V],c,E);j===null&&L===null?y=V+1:(L===null||0<c(L,j))&&(L=j)}M(L!==null?function(){C.continue(L+m)}:T)}return!1}),w}function A(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function W(e){return{type:1,lower:e,upper:e}}Object.defineProperty(Y.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Y.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?P(this):new this.Collection(this,function(){return A(e,t,!n,!s)})}catch{return $(this,Qt)}},Y.prototype.equals=function(e){return e==null?$(this,Qt):new this.Collection(this,function(){return W(e)})},Y.prototype.above=function(e){return e==null?$(this,Qt):new this.Collection(this,function(){return A(e,void 0,!0)})},Y.prototype.aboveOrEqual=function(e){return e==null?$(this,Qt):new this.Collection(this,function(){return A(e,void 0,!1)})},Y.prototype.below=function(e){return e==null?$(this,Qt):new this.Collection(this,function(){return A(void 0,e,!1,!0)})},Y.prototype.belowOrEqual=function(e){return e==null?$(this,Qt):new this.Collection(this,function(){return A(void 0,e)})},Y.prototype.startsWith=function(e){return typeof e!="string"?$(this,ps):this.between(e,e+_n,!0,!0)},Y.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):O(this,function(t,n){return t.indexOf(n[0])===0},[e],_n)},Y.prototype.equalsIgnoreCase=function(e){return O(this,function(t,n){return t===n[0]},[e],"")},Y.prototype.anyOfIgnoreCase=function(){var e=ne.apply(lt,arguments);return e.length===0?P(this):O(this,function(t,n){return n.indexOf(t)!==-1},e,"")},Y.prototype.startsWithAnyOfIgnoreCase=function(){var e=ne.apply(lt,arguments);return e.length===0?P(this):O(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,_n)},Y.prototype.anyOf=function(){var e,t,n=this,s=ne.apply(lt,arguments),r=this._cmp;try{s.sort(r)}catch{return $(this,Qt)}return s.length===0?P(this):((e=new this.Collection(this,function(){return A(s[0],s[s.length-1])}))._ondirectionchange=function(l){r=l==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(l,c,d){for(var k=l.key;0<r(k,s[t]);)if(++t===s.length)return c(d),!1;return r(k,s[t])===0||(c(function(){l.continue(s[t])}),!1)}),e)},Y.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Y.prototype.noneOf=function(){var e=ne.apply(lt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return $(this,Qt)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},Y.prototype.inAnyRange=function(e,T){var n=this,s=this._cmp,r=this._ascending,l=this._descending,c=this._min,d=this._max;if(e.length===0)return P(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return $(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var k=!T||T.includeLowers!==!1,E=T&&T.includeUppers===!0,m,b=r;function g(S,I){return b(S[0],I[0])}try{(m=e.reduce(function(S,I){for(var L=0,V=S.length;L<V;++L){var j=S[L];if(s(I[0],j[1])<0&&0<s(I[1],j[0])){j[0]=c(j[0],I[0]),j[1]=d(j[1],I[1]);break}}return L===V&&S.push(I),S},[])).sort(g)}catch{return $(this,Qt)}var w=0,y=E?function(S){return 0<r(S,m[w][1])}:function(S){return 0<=r(S,m[w][1])},C=k?function(S){return 0<l(S,m[w][0])}:function(S){return 0<=l(S,m[w][0])},M=y,T=new this.Collection(this,function(){return A(m[0][0],m[m.length-1][1],!k,!E)});return T._ondirectionchange=function(S){b=S==="next"?(M=y,r):(M=C,l),m.sort(g)},T._addAlgorithm(function(S,I,L){for(var V,j=S.key;M(j);)if(++w===m.length)return I(L),!1;return!y(V=j)&&!C(V)||(n._cmp(j,m[w][1])===0||n._cmp(j,m[w][0])===0||I(function(){b===r?S.continue(m[w][0]):S.continue(m[w][1])}),!1)}),T},Y.prototype.startsWithAnyOf=function(){var e=ne.apply(lt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?P(this):this.inAnyRange(e.map(function(t){return[t,t+_n]})):$(this,"startsWithAnyOf() only works with strings")};var R=Y;function Y(){}function U(e){return me(function(t){return re(t),e(t.target.error),!1})}function re(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var xe="storagemutated",He="x-storagemutated-1",le=da(null,xe),ze=(qe.prototype._lock=function(){return dt(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},qe.prototype._unlock=function(){if(dt(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{Mn(e[1],e[0])}catch{}}return this},qe.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},qe.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(dt(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(s);case"MissingAPIError":throw new ee.MissingAPI(s.message,s);default:throw new ee.OpenFailed(s)}if(!this.active)throw new ee.TransactionInactive;dt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=me(function(r){re(r),t._reject(e.error)}),e.onabort=me(function(r){re(r),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=me(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&le.storagemutated.fire(e.mutatedParts)})}return this},qe.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ue(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(l,c){r._blockedFuncs.push([function(){r._promise(e,t,n).then(l,c)},H])}):n?fn(function(){var l=new z(function(c,d){r._lock();var k=t(c,d,r);k&&k.then&&k.then(c,d)});return l.finally(function(){return r._unlock()}),l._lib=!0,l}):((s=new z(function(l,c){var d=t(l,c,r);d&&d.then&&d.then(l,c)}))._lib=!0,s):Ue(new ee.TransactionInactive)},qe.prototype._root=function(){return this.parent?this.parent._root():this},qe.prototype.waitFor=function(e){var t,n=this._root(),s=z.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function l(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=l)})()),n._waitingFor);return new z(function(l,c){s.then(function(d){return n._waitingQueue.push(me(l.bind(null,d)))},function(d){return n._waitingQueue.push(me(c.bind(null,d)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},qe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},qe.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(oe(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},qe);function qe(){}function Ae(e,t,n,s,r,l,c,d){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:l,src:(n&&!c?"&":"")+(s?"*":"")+(r?"++":"")+st(t),type:d}}function st(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ft(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,l,c){return l=s(l,c),l&&(r[l[0]]=l[1]),r},{}))};var s}var K=function(e){try{return e.only([[]]),K=function(){return[[]]},[[]]}catch{return K=function(){return _n},_n}};function $t(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Yt(n,t)}:function(n){return Yt(n,e)};var t}function ht(e){return[].slice.call(e)}var Zt=0;function bt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function be(e,t,k){function s(y){if(y.type===3)return null;if(y.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var b=y.lower,g=y.upper,w=y.lowerOpen,y=y.upperOpen;return b===void 0?g===void 0?null:t.upperBound(g,!!y):g===void 0?t.lowerBound(b,!!w):t.bound(b,g,!!w,!!y)}function r(m){var b,g=m.name;return{name:g,schema:m,mutate:function(w){var y=w.trans,C=w.type,M=w.keys,T=w.values,S=w.range;return new Promise(function(I,L){I=me(I);var V=y.objectStore(g),j=V.keyPath==null,N=C==="put"||C==="add";if(!N&&C!=="delete"&&C!=="deleteRange")throw new Error("Invalid operation type: "+C);var J,G=(M||T||{length:1}).length;if(M&&T&&M.length!==T.length)throw new Error("Given keys array must have same length as given values array.");if(G===0)return I({numFailures:0,failures:{},results:[],lastResult:void 0});function F(Ge){++ye,re(Ge)}var X=[],fe=[],ye=0;if(C==="deleteRange"){if(S.type===4)return I({numFailures:ye,failures:fe,results:[],lastResult:void 0});S.type===3?X.push(J=V.clear()):X.push(J=V.delete(s(S)))}else{var j=N?j?[T,M]:[T,null]:[M,null],ae=j[0],ue=j[1];if(N)for(var Ce=0;Ce<G;++Ce)X.push(J=ue&&ue[Ce]!==void 0?V[C](ae[Ce],ue[Ce]):V[C](ae[Ce])),J.onerror=F;else for(Ce=0;Ce<G;++Ce)X.push(J=V[C](ae[Ce])),J.onerror=F}function tt(Ge){Ge=Ge.target.result,X.forEach(function(rn,Ia){return rn.error!=null&&(fe[Ia]=rn.error)}),I({numFailures:ye,failures:fe,results:C==="delete"?M:X.map(function(rn){return rn.result}),lastResult:Ge})}J.onerror=function(Ge){F(Ge),tt(Ge)},J.onsuccess=tt})},getMany:function(w){var y=w.trans,C=w.keys;return new Promise(function(M,T){M=me(M);for(var S,I=y.objectStore(g),L=C.length,V=new Array(L),j=0,N=0,J=function(X){X=X.target,V[X._pos]=X.result,++N===j&&M(V)},G=U(T),F=0;F<L;++F)C[F]!=null&&((S=I.get(C[F]))._pos=F,S.onsuccess=J,S.onerror=G,++j);j===0&&M(V)})},get:function(w){var y=w.trans,C=w.key;return new Promise(function(M,T){M=me(M);var S=y.objectStore(g).get(C);S.onsuccess=function(I){return M(I.target.result)},S.onerror=U(T)})},query:(b=d,function(w){return new Promise(function(y,C){y=me(y);var M,T,S,N=w.trans,I=w.values,L=w.limit,j=w.query,V=L===1/0?void 0:L,J=j.index,j=j.range,N=N.objectStore(g),N=J.isPrimaryKey?N:N.index(J.name),J=s(j);if(L===0)return y({result:[]});b?((j=I?N.getAll(J,V):N.getAllKeys(J,V)).onsuccess=function(G){return y({result:G.target.result})},j.onerror=U(C)):(M=0,T=!I&&"openKeyCursor"in N?N.openKeyCursor(J):N.openCursor(J),S=[],T.onsuccess=function(G){var F=T.result;return!F||(S.push(I?F.value:F.primaryKey),++M===L)?y({result:S}):void F.continue()},T.onerror=U(C))})}),openCursor:function(w){var y=w.trans,C=w.values,M=w.query,T=w.reverse,S=w.unique;return new Promise(function(I,L){I=me(I);var N=M.index,V=M.range,j=y.objectStore(g),j=N.isPrimaryKey?j:j.index(N.name),N=T?S?"prevunique":"prev":S?"nextunique":"next",J=!C&&"openKeyCursor"in j?j.openKeyCursor(s(V),N):j.openCursor(s(V),N);J.onerror=U(L),J.onsuccess=me(function(G){var F,X,fe,ye,ae=J.result;ae?(ae.___id=++Zt,ae.done=!1,F=ae.continue.bind(ae),X=(X=ae.continuePrimaryKey)&&X.bind(ae),fe=ae.advance.bind(ae),ye=function(){throw new Error("Cursor not stopped")},ae.trans=y,ae.stop=ae.continue=ae.continuePrimaryKey=ae.advance=function(){throw new Error("Cursor not started")},ae.fail=me(L),ae.next=function(){var ue=this,Ce=1;return this.start(function(){return Ce--?ue.continue():ue.stop()}).then(function(){return ue})},ae.start=function(ue){function Ce(){if(J.result)try{ue()}catch(Ge){ae.fail(Ge)}else ae.done=!0,ae.start=function(){throw new Error("Cursor behind last entry")},ae.stop()}var tt=new Promise(function(Ge,rn){Ge=me(Ge),J.onerror=U(rn),ae.fail=rn,ae.stop=function(Ia){ae.stop=ae.continue=ae.continuePrimaryKey=ae.advance=ye,Ge(Ia)}});return J.onsuccess=me(function(Ge){J.onsuccess=Ce,Ce()}),ae.continue=F,ae.continuePrimaryKey=X,ae.advance=fe,Ce(),tt},I(ae)):I(null)},L)})},count:function(w){var y=w.query,C=w.trans,M=y.index,T=y.range;return new Promise(function(S,I){var L=C.objectStore(g),L=M.isPrimaryKey?L:L.index(M.name),V=s(T),V=V?L.count(V):L.count();V.onsuccess=me(function(j){return S(j.target.result)}),V.onerror=U(I)})}}}l=k,c=ht((k=e).objectStoreNames);var l,k={schema:{name:k.name,tables:c.map(function(m){return l.objectStore(m)}).map(function(m){var b=m.keyPath,g=m.autoIncrement,y=ie(b),w={},y={name:m.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:b==null,compound:y,keyPath:b,autoIncrement:g,unique:!0,extractKey:$t(b)},indexes:ht(m.indexNames).map(function(C){return m.index(C)}).map(function(S){var I=S.name,M=S.unique,T=S.multiEntry,S=S.keyPath,I={name:I,compound:ie(S),keyPath:S,unique:M,multiEntry:T,extractKey:$t(S)};return w[bt(S)]=I}),getIndexByKeyPath:function(C){return w[bt(C)]}};return w[":id"]=y.primaryKey,b!=null&&(w[bt(b)]=y.primaryKey),y})},hasGetAll:0<c.length&&"getAll"in l.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=k.schema,d=k.hasGetAll,k=c.tables.map(r),E={};return k.forEach(function(m){return E[m.name]=m}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(m){if(E[m])return E[m];throw new Error("Table '".concat(m,"' not found"))},MIN_KEY:-1/0,MAX_KEY:K(t),schema:c}}function Kt(e,t,n,s){return n=n.IDBKeyRange,t=be(t,n,s),{dbcore:e.dbcore.reduce(function(r,l){return l=l.create,Q(Q({},r),l(r))},t)}}function Ke(e,t){var n=t.db,n=Kt(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(l){return l.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function Ye(e,t,n,s){n.forEach(function(r){var l=s[r];t.forEach(function(c){var d=(function k(E,m){return Ut(E,m)||(E=Ze(E))&&k(E,m)})(c,r);(!d||"value"in d&&d.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?Ne(c,r,{get:function(){return this.table(r)},set:function(k){ot(this,r,{value:k,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,l))})})}function Je(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function nt(e,t){return e._cfg.version-t._cfg.version}function at(e,t,n,s){var r=e._dbSchema,l=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=Ft("$meta",Re("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(l.create(n),l._completion.catch(s),l._reject.bind(l)),d=H.transless||H;fn(function(){if(H.trans=l,H.transless=d,t!==0)return Ke(e,n),E=t,((k=l).storeNames.includes("$meta")?k.table("$meta").get("version").then(function(m){return m??E}):z.resolve(E)).then(function(M){var b=e,g=M,w=l,y=n,C=[],M=b._versions,T=b._dbSchema=en(0,b.idbdb,y);return(M=M.filter(function(S){return S._cfg.version>=g})).length===0?z.resolve():(M.forEach(function(S){C.push(function(){var I,L,V,j=T,N=S._cfg.dbschema,J=(Ie(b,j,y),Ie(b,N,y),T=b._dbSchema=N,Dt(j,N)),G=(J.add.forEach(function(F){yt(y,F[0],F[1].primKey,F[1].indexes)}),J.change.forEach(function(F){if(F.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var X=y.objectStore(F.name);F.add.forEach(function(fe){return pt(X,fe)}),F.change.forEach(function(fe){X.deleteIndex(fe.name),pt(X,fe)}),F.del.forEach(function(fe){return X.deleteIndex(fe)})}),S._cfg.contentUpgrade);if(G&&S._cfg.version>g)return Ke(b,y),w._memoizedTables={},I=mt(N),J.del.forEach(function(F){I[F]=j[F]}),Je(b,[b.Transaction.prototype]),Ye(b,[b.Transaction.prototype],ge(I),I),w.schema=I,(L=Jt(G))&&Gn(),N=z.follow(function(){var F;(V=G(w))&&L&&(F=vn.bind(null,null),V.then(F,F))}),V&&typeof V.then=="function"?z.resolve(V):N.then(function(){return V})}),C.push(function(I){var L,V,j=S._cfg.dbschema;L=j,V=I,[].slice.call(V.db.objectStoreNames).forEach(function(N){return L[N]==null&&V.db.deleteObjectStore(N)}),Je(b,[b.Transaction.prototype]),Ye(b,[b.Transaction.prototype],b._storeNames,b._dbSchema),w.schema=b._dbSchema}),C.push(function(I){b.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(b.idbdb.version/10)===S._cfg.version?(b.idbdb.deleteObjectStore("$meta"),delete b._dbSchema.$meta,b._storeNames=b._storeNames.filter(function(L){return L!=="$meta"})):I.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return C.length?z.resolve(C.shift()(w.idbtrans)).then(S):z.resolve()})().then(function(){Mt(T,y)}))}).catch(c);var k,E;ge(r).forEach(function(m){yt(n,m,r[m].primKey,r[m].indexes)}),Ke(e,n),z.follow(function(){return e.on.populate.fire(l)}).catch(c)})}function zt(e,t){Mt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=en(0,e.idbdb,t);Ie(e,e._dbSchema,t);for(var s=0,r=Dt(n,e._dbSchema).change;s<r.length;s++){var l=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var d=t.objectStore(c.name);c.add.forEach(function(k){It&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(k.src)),pt(d,k)})})(r[s]);if(typeof l=="object")return l.value}}function Dt(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],l=t[n];if(r){var c={name:n,def:l,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(l.primKey.keyPath||"")||r.primKey.auto!==l.primKey.auto)c.recreate=!0,s.change.push(c);else{var d=r.idxByName,k=l.idxByName,E=void 0;for(E in d)k[E]||c.del.push(E);for(E in k){var m=d[E],b=k[E];m?m.src!==b.src&&c.change.push(b):c.add.push(b)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([n,l])}return s}function yt(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(l){return pt(r,l)})}function Mt(e,t){ge(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(It&&console.debug("Dexie: Creating missing table",n),yt(t,n,e[n].primKey,e[n].indexes))})}function pt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function en(e,t,n){var s={};return Ht(t.objectStoreNames,0).forEach(function(r){for(var l=n.objectStore(r),c=Ae(st(E=l.keyPath),E||"",!0,!1,!!l.autoIncrement,E&&typeof E!="string",!0),d=[],k=0;k<l.indexNames.length;++k){var m=l.index(l.indexNames[k]),E=m.keyPath,m=Ae(m.name,E,!!m.unique,!!m.multiEntry,!1,E&&typeof E!="string",!1);d.push(m)}s[r]=Ft(r,c,d)}),s}function Ie(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var l=s[r],c=n.objectStore(l);e._hasGetAll="getAll"in c;for(var d=0;d<c.indexNames.length;++d){var k,E=c.indexNames[d],m=c.index(E).keyPath,m=typeof m=="string"?m:"["+Ht(m).join("+")+"]";t[l]&&(k=t[l].idxByName[m])&&(k.name=E,delete t[l].idxByName[m],t[l].idxByName[E]=k)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Re(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),l=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return Ae(r,l||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(l),n===0,s)})}Me.prototype._createTableSchema=Ft,Me.prototype._parseIndexSyntax=Re,Me.prototype._parseStoresSpec=function(e,t){var n=this;ge(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),l=r.shift();if(!l)throw new ee.Schema("Invalid schema for table "+s+": "+e[s]);if(l.unique=!0,l.multi)throw new ee.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),l=n._createTableSchema(s,l,r),t[s]=l}})},Me.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?he(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(l){he(s,l._cfg.storesSource),r=l._cfg.dbschema={},l._parseStoresSpec(s,r)}),t._dbSchema=r,Je(t,[t._allTables,t,t.Transaction.prototype]),Ye(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],ge(r),r),t._storeNames=ge(r),this},Me.prototype.upgrade=function(e){return this._cfg.contentUpgrade=aa(this._cfg.contentUpgrade||$e,e),this};var et=Me;function Me(){}function Fe(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new an(Sa,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function qt(e){return e&&typeof e.databases=="function"}function bn(e){return fn(function(){return H.letThrough=!0,e()})}function yn(e){return!("from"in e)}var _e=function(e,t){var n;if(!this)return n=new _e,e&&"d"in e&&he(n,e),n;he(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function rt(e,t,n){var s=pe(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(yn(e))return he(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(pe(n,e.from)<0)return s?rt(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Te(e);if(0<pe(t,e.to))return r?rt(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Te(e);pe(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<pe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&it(e,s),r&&t&&it(e,r)}}function it(e,t){yn(t)||(function n(s,r){var l=r.from,c=r.l,d=r.r;rt(s,l,r.to),c&&n(s,c),d&&n(s,d)})(e,t)}function _t(e,t){var n=Cn(t),s=n.next();if(!s.done)for(var r=s.value,l=Cn(e),c=l.next(r.from),d=c.value;!s.done&&!c.done;){if(pe(d.from,r.to)<=0&&0<=pe(d.to,r.from))return!0;pe(r.from,d.from)<0?r=(s=n.next(d.from)).value:d=(c=l.next(r.from)).value}return!1}function Cn(e){var t=yn(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&pe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||pe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Te(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=Q({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=tn(n)),e.d=tn(e)}function tn(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Rt(e,t){return ge(t).forEach(function(n){e[n]?it(e[n],t[n]):e[n]=(function s(r){var l,c,d={};for(l in r)oe(r,l)&&(c=r[l],d[l]=!c||typeof c!="object"||rs.has(c.constructor)?c:s(c));return d})(t[n])}),e}function xn(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&_t(t[n],e[n])})}ut(_e.prototype,((Et={add:function(e){return it(this,e),this},addKey:function(e){return rt(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return rt(t,n,n)}),this},hasKey:function(e){var t=Cn(this).next(e).value;return t&&pe(t.from,e)<=0&&0<=pe(t.to,e)}})[Va]=function(){return Cn(this)},Et));var ce={},kn={},Jn=!1;function Vt(e){Rt(kn,e),Jn||(Jn=!0,setTimeout(function(){Jn=!1,Xn(kn,!(kn={}))},0))}function Xn(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(ce);s<r.length;s++)Qn(d=r[s],e,n,t);else for(var l in e){var c,d,l=/^idb\:\/\/(.*)\/(.*)\//.exec(l);l&&(c=l[1],l=l[2],d=ce["idb://".concat(c,"/").concat(l)])&&Qn(d,e,n,t)}n.forEach(function(k){return k()})}function Qn(e,t,n,s){for(var r=[],l=0,c=Object.entries(e.queries.query);l<c.length;l++){for(var d=c[l],k=d[0],E=[],m=0,b=d[1];m<b.length;m++){var g=b[m];xn(t,g.obsSet)?g.subscribers.forEach(function(M){return n.add(M)}):s&&E.push(g)}s&&r.push([k,E])}if(s)for(var w=0,y=r;w<y.length;w++){var C=y[w],k=C[0],E=C[1];e.queries.query[k]=E}}function xs(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ue(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),l=!1;function c(){if(t.openCanceller!==s)throw new ee.DatabaseClosed("db.open() was cancelled")}function d(){return new z(function(g,w){if(c(),!n)throw new ee.MissingAPI;var y=e.name,C=t.autoSchema||!r?n.open(y):n.open(y,r);if(!C)throw new ee.MissingAPI;C.onerror=U(w),C.onblocked=me(e._fireOnBlocked),C.onupgradeneeded=me(function(M){var T;m=C.transaction,t.autoSchema&&!e._options.allowEmptyDB?(C.onerror=re,m.abort(),C.result.close(),(T=n.deleteDatabase(y)).onsuccess=T.onerror=me(function(){w(new ee.NoSuchDatabase("Database ".concat(y," doesnt exist")))})):(m.onerror=U(w),T=M.oldVersion>Math.pow(2,62)?0:M.oldVersion,b=T<1,e.idbdb=C.result,l&&zt(e,m),at(e,T/10,m,w))},w),C.onsuccess=me(function(){m=null;var M,T,S,I,L,V,j=e.idbdb=C.result,N=Ht(j.objectStoreNames);if(0<N.length)try{var J=j.transaction((L=N).length===1?L[0]:L,"readonly");if(t.autoSchema)V=j,I=J,(S=e).verno=V.version/10,I=S._dbSchema=en(0,V,I),S._storeNames=Ht(V.objectStoreNames,0),Ye(S,[S._allTables],ge(I),I);else if(Ie(e,e._dbSchema,J),T=J,((T=Dt(en(0,(M=e).idbdb,T),M._dbSchema)).add.length||T.change.some(function(G){return G.add.length||G.change.length}))&&!l)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),r=j.version+1,l=!0,g(d());Ke(e,J)}catch{}Un.push(e),j.onversionchange=me(function(G){t.vcFired=!0,e.on("versionchange").fire(G)}),j.onclose=me(function(){e.close({disableAutoOpen:!1})}),b&&(N=e._deps,L=y,qt(V=N.indexedDB)||L===Sa||Fe(V,N.IDBKeyRange).put({name:L}).catch($e)),g()},w)}).catch(function(g){switch(g?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),d();break;case"VersionError":if(0<r)return r=0,d()}return z.reject(g)})}var k,E=t.dbReadyResolve,m=null,b=!1;return z.race([s,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(g){function w(){return indexedDB.databases().finally(g)}k=setInterval(w,100),w()}).finally(function(){return clearInterval(k)}):Promise.resolve()).then(d)]).then(function(){return c(),t.onReadyBeingFired=[],z.resolve(bn(function(){return e.on.ready.fire(e.vip)})).then(function g(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(aa,$e),t.onReadyBeingFired=[],z.resolve(bn(function(){return w(e.vip)})).then(g)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(g){t.dbOpenError=g;try{m&&m.abort()}catch{}return s===t.openCanceller&&e._close(),Ue(g)}).finally(function(){t.openComplete=!0,E()}).then(function(){var g;return b&&(g={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(y){y.name&&(g["idb://".concat(e.name,"/").concat(w.name,"/").concat(y.name)]=new _e(-1/0,[[[]]]))}),g["idb://".concat(e.name,"/").concat(w.name,"/")]=g["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new _e(-1/0,[[[]]])}),le(xe).fire(g),Xn(g,!0)),e})}function _(e){function t(l){return e.next(l)}var n=r(t),s=r(function(l){return e.throw(l)});function r(l){return function(d){var d=l(d),k=d.value;return d.done?k:k&&typeof k.then=="function"?k.then(n,s):ie(k)?Promise.all(k).then(n,s):n(k)}}return r(t)()}function D(e,t,n){for(var s=ie(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var Xe={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Q(Q({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},l=[];function c(g,w,y){var S=bt(g),C=r[S]=r[S]||[],M=g==null?0:typeof g=="string"?1:g.length,T=0<w,S=Q(Q({},y),{name:T?"".concat(S,"(virtual-from:").concat(y.name,")"):y.name,lowLevelIndex:y,isVirtual:T,keyTail:w,keyLength:M,extractKey:$t(g),unique:!T&&y.unique});return C.push(S),S.isPrimaryKey||l.push(S),1<M&&c(M===2?g[0]:g.slice(0,M-1),w+1,y),C.sort(function(I,L){return I.keyTail-L.keyTail}),S}var d=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[d];for(var k=0,E=s.indexes;k<E.length;k++){var m=E[k];c(m.keyPath,0,m)}function b(g){var w,y=g.query.index;return y.isVirtual?Q(Q({},g),{query:{index:y.lowLevelIndex,range:(w=g.query.range,y=y.keyTail,{type:w.type===1?2:w.type,lower:D(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,y),lowerOpen:!0,upper:D(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,y),upperOpen:!0})}}):g}return Q(Q({},n),{schema:Q(Q({},s),{primaryKey:d,indexes:l,getIndexByKeyPath:function(g){return(g=r[bt(g)])&&g[0]}}),count:function(g){return n.count(b(g))},query:function(g){return n.query(b(g))},openCursor:function(g){var w=g.query.index,y=w.keyTail,C=w.keyLength;return w.isVirtual?n.openCursor(b(g)).then(function(T){return T&&M(T)}):n.openCursor(g);function M(T){return Object.create(T,{continue:{value:function(S){S!=null?T.continue(D(S,g.reverse?e.MAX_KEY:e.MIN_KEY,y)):g.unique?T.continue(T.key.slice(0,C).concat(g.reverse?e.MIN_KEY:e.MAX_KEY,y)):T.continue()}},continuePrimaryKey:{value:function(S,I){T.continuePrimaryKey(D(S,e.MAX_KEY,y),I)}},primaryKey:{get:function(){return T.primaryKey}},key:{get:function(){var S=T.key;return C===1?S[0]:S.slice(0,C)}},value:{get:function(){return T.value}}})}}})}})}};function pa(e,t,n,s){return n=n||{},s=s||"",ge(e).forEach(function(r){var l,c,d;oe(t,r)?(l=e[r],c=t[r],typeof l=="object"&&typeof c=="object"&&l&&c?(d=Ra(l))!==Ra(c)?n[s+r]=t[r]:d==="Object"?pa(l,c,n,s+r+"."):l!==c&&(n[s+r]=t[r]):l!==c&&(n[s+r]=t[r])):n[s+r]=void 0}),ge(t).forEach(function(r){oe(e,r)||(n[s+r]=t[r])}),n}function _a(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var ks={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Q(Q({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return Q(Q({},n),{mutate:function(r){var l=H.trans,c=l.table(t).hook,d=c.deleting,k=c.creating,E=c.updating;switch(r.type){case"add":if(k.fire===$e)break;return l._promise("readwrite",function(){return m(r)},!0);case"put":if(k.fire===$e&&E.fire===$e)break;return l._promise("readwrite",function(){return m(r)},!0);case"delete":if(d.fire===$e)break;return l._promise("readwrite",function(){return m(r)},!0);case"deleteRange":if(d.fire===$e)break;return l._promise("readwrite",function(){return(function b(g,w,y){return n.query({trans:g,values:!1,query:{index:s,range:w},limit:y}).then(function(C){var M=C.result;return m({type:"delete",keys:M,trans:g}).then(function(T){return 0<T.numFailures?Promise.reject(T.failures[0]):M.length<y?{failures:[],numFailures:0,lastResult:void 0}:b(g,Q(Q({},w),{lower:M[M.length-1],lowerOpen:!0}),y)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function m(b){var g,w,y,C=H.trans,M=b.keys||_a(s,b);if(M)return(b=b.type==="add"||b.type==="put"?Q(Q({},b),{keys:M}):Q({},b)).type!=="delete"&&(b.values=de([],b.values)),b.keys&&(b.keys=de([],b.keys)),g=n,y=M,((w=b).type==="add"?Promise.resolve([]):g.getMany({trans:w.trans,keys:y,cache:"immutable"})).then(function(T){var S=M.map(function(I,L){var V,j,N,J=T[L],G={onerror:null,onsuccess:null};return b.type==="delete"?d.fire.call(G,I,J,C):b.type==="add"||J===void 0?(V=k.fire.call(G,I,b.values[L],C),I==null&&V!=null&&(b.keys[L]=I=V,s.outbound||vt(b.values[L],s.keyPath,I))):(V=pa(J,b.values[L]),(j=E.fire.call(G,V,I,J,C))&&(N=b.values[L],Object.keys(j).forEach(function(F){oe(N,F)?N[F]=j[F]:vt(N,F,j[F])}))),G});return n.mutate(b).then(function(I){for(var L=I.failures,V=I.results,j=I.numFailures,I=I.lastResult,N=0;N<M.length;++N){var J=(V||M)[N],G=S[N];J==null?G.onerror&&G.onerror(L[N]):G.onsuccess&&G.onsuccess(b.type==="put"&&T[N]?b.values[N]:J)}return{failures:L,results:V,numFailures:j,lastResult:I}}).catch(function(I){return S.forEach(function(L){return L.onerror&&L.onerror(I)}),Promise.reject(I)})});throw new Error("Keys missing")}}})}})}};function Ja(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,l=0;r<t.keys.length&&l<e.length;++r)pe(t.keys[r],e[l])===0&&(s.push(n?wt(t.values[r]):t.values[r]),++l);return s.length===e.length?s:null}catch{return null}}var ws={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return Q(Q({},n),{getMany:function(s){var r;return s.cache?(r=Ja(s.keys,s.trans._cache,s.cache==="clone"))?z.resolve(r):n.getMany(s).then(function(l){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?wt(l):l},l}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function Xa(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Qa(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var qs={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new _e(e.MIN_KEY,e.MAX_KEY);return Q(Q({},e),{transaction:function(s,r,l){if(H.subscr&&r!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(s,r,l)},table:function(s){function r(M){var C,M=M.query;return[C=M.index,new _e((C=(M=M.range).lower)!=null?C:e.MIN_KEY,(C=M.upper)!=null?C:e.MAX_KEY)]}var l=e.table(s),c=l.schema,d=c.primaryKey,k=c.indexes,E=d.extractKey,m=d.outbound,b=d.autoIncrement&&k.filter(function(y){return y.compound&&y.keyPath.includes(d.keyPath)}),g=Q(Q({},l),{mutate:function(y){function C(X){return X="idb://".concat(t,"/").concat(s,"/").concat(X),L[X]||(L[X]=new _e)}var M,T,S,I=y.trans,L=y.mutatedParts||(y.mutatedParts={}),V=C(""),j=C(":dels"),N=y.type,G=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[_a(d,y).filter(function(X){return X}),y.values]:[],J=G[0],G=G[1],F=y.trans._cache;return ie(J)?(V.addKeys(J),(N=N==="delete"||J.length===G.length?Ja(J,F):null)||j.addKeys(J),(N||G)&&(M=C,T=N,S=G,c.indexes.forEach(function(X){var fe=M(X.name||"");function ye(ue){return ue!=null?X.extractKey(ue):null}function ae(ue){X.multiEntry&&ie(ue)?ue.forEach(function(Ce){return fe.addKey(Ce)}):fe.addKey(ue)}(T||S).forEach(function(ue,Ge){var tt=T&&ye(T[Ge]),Ge=S&&ye(S[Ge]);pe(tt,Ge)!==0&&(tt!=null&&ae(tt),Ge!=null)&&ae(Ge)})}))):J?(G={from:(F=J.lower)!=null?F:e.MIN_KEY,to:(N=J.upper)!=null?N:e.MAX_KEY},j.add(G),V.add(G)):(V.add(n),j.add(n),c.indexes.forEach(function(X){return C(X.name).add(n)})),l.mutate(y).then(function(X){return!J||y.type!=="add"&&y.type!=="put"||(V.addKeys(X.results),b&&b.forEach(function(fe){for(var ye=y.values.map(function(tt){return fe.extractKey(tt)}),ae=fe.keyPath.findIndex(function(tt){return tt===d.keyPath}),ue=0,Ce=X.results.length;ue<Ce;++ue)ye[ue][ae]=X.results[ue];C(fe.name).addKeys(ye)})),I.mutatedParts=Rt(I.mutatedParts||{},L),X})}}),w={get:function(y){return[d,new _e(y.key)]},getMany:function(y){return[d,new _e().addKeys(y.keys)]},count:r,query:r,openCursor:r};return ge(w).forEach(function(y){g[y]=function(C){var M=H.subscr,T=!!M,S=Xa(H,l)&&Qa(y,C)?C.obsSet={}:M;if(T){var I,M=function(G){return G="idb://".concat(t,"/").concat(s,"/").concat(G),S[G]||(S[G]=new _e)},L=M(""),V=M(":dels"),T=w[y](C),j=T[0],T=T[1];if((y==="query"&&j.isPrimaryKey&&!C.values?V:M(j.name||"")).add(T),!j.isPrimaryKey){if(y!=="count")return I=y==="query"&&m&&C.values&&l.query(Q(Q({},C),{values:!1})),l[y].apply(this,arguments).then(function(G){if(y==="query"){if(m&&C.values)return I.then(function(ye){return ye=ye.result,L.addKeys(ye),G});var F=C.values?G.result.map(E):G.result;(C.values?L:V).addKeys(F)}else{var X,fe;if(y==="openCursor")return fe=C.values,(X=G)&&Object.create(X,{key:{get:function(){return V.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var ye=X.primaryKey;return V.addKey(ye),ye}},value:{get:function(){return fe&&L.addKey(X.primaryKey),X.value}}})}return G});V.add(n)}}return l[y].apply(this,arguments)}}),g}})}};function Ta(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=Q({},t),ie(s.keys)&&(s.keys=s.keys.filter(function(r,l){return!(l in n.failures)})),"values"in s&&ie(s.values)&&(s.values=s.values.filter(function(r,l){return!(l in n.failures)})),s)}function fa(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<pe(n,s.lower):0<=pe(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?pe(n,s.upper)<0:pe(n,s.upper)<=0));var n,s}function Za(e,t,n,s,r,l){var c,d,k,E,m,b;return!n||n.length===0||(c=t.query.index,d=c.multiEntry,k=t.query.range,E=s.schema.primaryKey.extractKey,m=c.extractKey,b=(c.lowLevelIndex||c).extractKey,(s=n.reduce(function(g,w){var y=g,C=[];if(w.type==="add"||w.type==="put")for(var M=new _e,T=w.values.length-1;0<=T;--T){var S,I=w.values[T],L=E(I);!M.hasKey(L)&&(S=m(I),d&&ie(S)?S.some(function(G){return fa(G,k)}):fa(S,k))&&(M.addKey(L),C.push(I))}switch(w.type){case"add":var V=new _e().addKeys(t.values?g.map(function(F){return E(F)}):g),y=g.concat(t.values?C.filter(function(F){return F=E(F),!V.hasKey(F)&&(V.addKey(F),!0)}):C.map(function(F){return E(F)}).filter(function(F){return!V.hasKey(F)&&(V.addKey(F),!0)}));break;case"put":var j=new _e().addKeys(w.values.map(function(F){return E(F)}));y=g.filter(function(F){return!j.hasKey(t.values?E(F):F)}).concat(t.values?C:C.map(function(F){return E(F)}));break;case"delete":var N=new _e().addKeys(w.keys);y=g.filter(function(F){return!N.hasKey(t.values?E(F):F)});break;case"deleteRange":var J=w.range;y=g.filter(function(F){return!fa(E(F),J)})}return y},e))===e)?e:(s.sort(function(g,w){return pe(b(g),b(w))||pe(E(g),E(w))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),l?Object.freeze(s):s)}function es(e,t){return pe(e.lower,t.lower)===0&&pe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Wt(e,t){return((n,s,r,l)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=pe(n,s))===0){if(r&&l)return 0;if(r)return 1;if(l)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,l)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=pe(n,s))===0){if(r&&l)return 0;if(r)return-1;if(l)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Rs(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,l;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,l=t,setTimeout(function(){r.subscribers.size===0&&ln(l,r)},3e3))})}var nn={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Q(Q({},e),{transaction:function(n,s,r){var l,c,d=e.transaction(n,s,r);return s==="readwrite"&&(r=(l=new AbortController).signal,d.addEventListener("abort",(c=function(k){return function(){if(l.abort(),s==="readwrite"){for(var E=new Set,m=0,b=n;m<b.length;m++){var g=b[m],w=ce["idb://".concat(t,"/").concat(g)];if(w){var y=e.table(g),C=w.optimisticOps.filter(function(X){return X.trans===d});if(d._explicit&&k&&d.mutatedParts)for(var M=0,T=Object.values(w.queries.query);M<T.length;M++)for(var S=0,I=(j=T[M]).slice();S<I.length;S++)xn((N=I[S]).obsSet,d.mutatedParts)&&(ln(j,N),N.subscribers.forEach(function(X){return E.add(X)}));else if(0<C.length){w.optimisticOps=w.optimisticOps.filter(function(X){return X.trans!==d});for(var L=0,V=Object.values(w.queries.query);L<V.length;L++)for(var j,N,J,G=0,F=(j=V[L]).slice();G<F.length;G++)(N=F[G]).res!=null&&d.mutatedParts&&(k&&!N.dirty?(J=Object.isFrozen(N.res),J=Za(N.res,N.req,C,y,N,J),N.dirty?(ln(j,N),N.subscribers.forEach(function(X){return E.add(X)})):J!==N.res&&(N.res=J,N.promise=z.resolve({result:J}))):(N.dirty&&ln(j,N),N.subscribers.forEach(function(X){return E.add(X)})))}}}E.forEach(function(X){return X()})}}})(!1),{signal:r}),d.addEventListener("error",c(!1),{signal:r}),d.addEventListener("complete",c(!0),{signal:r})),d},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return Q(Q({},s),{mutate:function(l){var c,d=H.trans;return!r.outbound&&d.db._options.cache!=="disabled"&&!d.explicit&&d.idbtrans.mode==="readwrite"&&(c=ce["idb://".concat(t,"/").concat(n)])?(d=s.mutate(l),l.type!=="add"&&l.type!=="put"||!(50<=l.values.length||_a(r,l).some(function(k){return k==null}))?(c.optimisticOps.push(l),l.mutatedParts&&Vt(l.mutatedParts),d.then(function(k){0<k.numFailures&&(ln(c.optimisticOps,l),(k=Ta(0,l,k))&&c.optimisticOps.push(k),l.mutatedParts)&&Vt(l.mutatedParts)}),d.catch(function(){ln(c.optimisticOps,l),l.mutatedParts&&Vt(l.mutatedParts)})):d.then(function(k){var E=Ta(0,Q(Q({},l),{values:l.values.map(function(m,b){var g;return k.failures[b]?m:(vt(g=(g=r.keyPath)!=null&&g.includes(".")?wt(m):Q({},m),r.keyPath,k.results[b]),g)})}),k);c.optimisticOps.push(E),queueMicrotask(function(){return l.mutatedParts&&Vt(l.mutatedParts)})}),d):s.mutate(l)},query:function(l){var c,d,k,E,m,b,g;return Xa(H,s)&&Qa("query",l)?(c=((k=H.trans)==null?void 0:k.db._options.cache)==="immutable",d=(k=H).requery,k=k.signal,b=((w,y,C,M)=>{var T=ce["idb://".concat(w,"/").concat(y)];if(!T)return[];if(!(w=T.queries[C]))return[null,!1,T,null];var S=w[(M.query?M.query.index.name:null)||""];if(!S)return[null,!1,T,null];switch(C){case"query":var I=S.find(function(L){return L.req.limit===M.limit&&L.req.values===M.values&&es(L.req.query.range,M.query.range)});return I?[I,!0,T,S]:[S.find(function(L){return("limit"in L.req?L.req.limit:1/0)>=M.limit&&(!M.values||L.req.values)&&Wt(L.req.query.range,M.query.range)}),!1,T,S];case"count":return I=S.find(function(L){return es(L.req.query.range,M.query.range)}),[I,!!I,T,S]}})(t,n,"query",l),g=b[0],E=b[2],m=b[3],g&&b[1]?g.obsSet=l.obsSet:(b=s.query(l).then(function(w){var y=w.result;if(g&&(g.res=y),c){for(var C=0,M=y.length;C<M;++C)Object.freeze(y[C]);Object.freeze(y)}else w.result=wt(y);return w}).catch(function(w){return m&&g&&ln(m,g),Promise.reject(w)}),g={obsSet:l.obsSet,promise:b,subscribers:new Set,type:"query",req:l,dirty:!1},m?m.push(g):(m=[g],(E=E||(ce["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[l.query.index.name||""]=m)),Rs(g,m,d,k),g.promise.then(function(w){return{result:Za(w.result,l,E?.optimisticOps,s,g,c)}})):s.query(l)}})}})}};function Pa(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}We.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(nt),n.stores({}),this._state.autoSchema=!1),n},We.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new z(function(n,s){if(t._state.openComplete)return s(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ee.DatabaseClosed);t.open().catch($e)}t._state.dbReadyPromise.then(n,s)}).then(e)},We.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,l=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return l.push({stack:t,create:n,level:s??10,name:r}),l.sort(function(c,d){return c.level-d.level}),this},We.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},We.prototype.open=function(){var e=this;return Mn(un,function(){return xs(e)})},We.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Un.indexOf(this);if(0<=t&&Un.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(n){e.dbReadyResolve=n}),e.openCanceller=new z(function(n,s){e.cancelOpen=s}))},We.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},We.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new z(function(r,l){function c(){t.close(e);var d=t._deps.indexedDB.deleteDatabase(t.name);d.onsuccess=me(function(){var k,E,m;k=t._deps,E=t.name,qt(m=k.indexedDB)||E===Sa||Fe(m,k.IDBKeyRange).delete(E).catch($e),r()}),d.onerror=U(l),d.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},We.prototype.backendDB=function(){return this.idbdb},We.prototype.isOpen=function(){return this.idbdb!==null},We.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},We.prototype.hasFailed=function(){return this._state.dbOpenError!==null},We.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(We.prototype,"tables",{get:function(){var e=this;return ge(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),We.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new ee.InvalidArgument("Too few arguments");for(var l=new Array(r-1);--r;)l[r-1]=arguments[r];return s=l.pop(),[t,qa(l),s]}).apply(this,arguments);return this._transaction.apply(this,e)},We.prototype._transaction=function(e,t,n){var s,r,l=this,c=H.trans,d=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(E){if(E=E instanceof l.Table?E.name:E,typeof E!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return E}),e=="r"||e===Wa)s=Wa;else{if(e!="rw"&&e!=Tn)throw new ee.InvalidArgument("Invalid transaction mode: "+e);s=Tn}if(c){if(c.mode===Wa&&s===Tn){if(!d)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function(E){if(c&&c.storeNames.indexOf(E)===-1){if(!d)throw new ee.SubTransaction("Table "+E+" not included in parent transaction.");c=null}}),d&&c&&!c.active&&(c=null)}}catch(E){return c?c._promise(null,function(m,b){b(E)}):Ue(E)}var k=(function E(m,b,g,w,y){return z.resolve().then(function(){var S=H.transless||H,C=m._createTransaction(b,g,m._dbSchema,w),S=(C.explicit=!0,{trans:C,transless:S});if(w)C.idbtrans=w.idbtrans;else try{C.create(),C.idbtrans._explicit=!0,m._state.PR1398_maxLoop=3}catch(I){return I.name===Ca.InvalidState&&m.isOpen()&&0<--m._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),m.close({disableAutoOpen:!1}),m.open().then(function(){return E(m,b,g,null,y)})):Ue(I)}var M,T=Jt(y),S=(T&&Gn(),z.follow(function(){var I;(M=y.call(C,C))&&(T?(I=vn.bind(null,null),M.then(I,I)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=_(M)))},S));return(M&&typeof M.then=="function"?z.resolve(M).then(function(I){return C.active?I:Ue(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return M})).then(function(I){return w&&C._resolve(),C._completion.then(function(){return I})}).catch(function(I){return C._reject(I),Ue(I)})})}).bind(null,this,s,r,c,n);return c?c._promise(s,k,"lock"):H.trans?Mn(H.transless,function(){return l._whenReady(k)}):this._whenReady(k)},We.prototype.table=function(e){if(oe(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var an=We;function We(e,t){var n,s,r,l,c,d=this,k=(this._middlewares={},this.verno=0,We.dependencies),k=(this._options=t=Q({addons:We.addons,autoOpen:!0,indexedDB:k.indexedDB,IDBKeyRange:k.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),E=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),m=(E.dbReadyPromise=new z(function(b){E.dbReadyResolve=b}),E.openCanceller=new z(function(b,g){E.cancelOpen=g}),this._state=E,this.name=e,this.on=da(this,"populate","blocked","versionchange","close",{ready:[aa,$e]}),this.once=function(b,g){var w=function(){for(var y=[],C=0;C<arguments.length;C++)y[C]=arguments[C];d.on(b).unsubscribe(w),g.apply(d,y)};return d.on(b,w)},this.on.ready.subscribe=xt(this.on.ready.subscribe,function(b){return function(g,w){We.vip(function(){var y,C=d._state;C.openComplete?(C.dbOpenError||z.resolve().then(g),w&&b(g)):C.onReadyBeingFired?(C.onReadyBeingFired.push(g),w&&b(g)):(b(g),y=d,w||b(function M(){y.on.ready.unsubscribe(g),y.on.ready.unsubscribe(M)}))})}}),this.Collection=(n=this,ha(o.prototype,function(M,C){this.db=n;var w=Ga,y=null;if(C)try{w=C()}catch(S){y=S}var C=M._ctx,M=C.table,T=M.hook.reading.fire;this._ctx={table:M,index:C.index,isPrimKey:!C.index||M.schema.primKey.keyPath&&C.index===M.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:y,or:C.or,valueMapper:T!==na?T:null}})),this.Table=(s=this,ha(bs.prototype,function(b,g,w){this.db=s,this._tx=w,this.name=b,this.schema=g,this.hook=s._allTables[b]?s._allTables[b].hook:da(null,{creating:[cs,$e],reading:[Os,na],updating:[us,$e],deleting:[Fs,$e]})})),this.Transaction=(r=this,ha(ze.prototype,function(b,g,w,y,C){var M=this;b!=="readonly"&&g.forEach(function(T){T=(T=w[T])==null?void 0:T.yProps,T&&(g=g.concat(T.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=b,this.storeNames=g,this.schema=w,this.chromeTransactionDurability=y,this.idbtrans=null,this.on=da(this,"complete","error","abort"),this.parent=C||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(T,S){M._resolve=T,M._reject=S}),this._completion.then(function(){M.active=!1,M.on.complete.fire()},function(T){var S=M.active;return M.active=!1,M.on.error.fire(T),M.parent?M.parent._reject(T):S&&M.idbtrans&&M.idbtrans.abort(),Ue(T)})})),this.Version=(l=this,ha(et.prototype,function(b){this.db=l,this._cfg={version:b,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,ha(R.prototype,function(b,g,w){if(this.db=c,this._ctx={table:b,index:g===":id"?null:g,or:w},this._cmp=this._ascending=pe,this._descending=function(y,C){return pe(C,y)},this._max=function(y,C){return 0<pe(y,C)?y:C},this._min=function(y,C){return pe(y,C)<0?y:C},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(b){0<b.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(b){!b.newVersion||b.newVersion<b.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(b.oldVersion/10))}),this._maxKey=K(t.IDBKeyRange),this._createTransaction=function(b,g,w,y){return new d.Transaction(b,g,w,d._options.chromeTransactionDurability,y)},this._fireOnBlocked=function(b){d.on("blocked").fire(b),Un.filter(function(g){return g.name===d.name&&g!==d&&!g._state.vcFired}).map(function(g){return g.on("versionchange").fire(b)})},this.use(ws),this.use(nn),this.use(qs),this.use(Xe),this.use(ks),new Proxy(this,{get:function(b,g,w){var y;return g==="_vip"||(g==="table"?function(C){return Pa(d.table(C),m)}:(y=Reflect.get(b,g,w))instanceof bs?Pa(y,m):g==="tables"?y.map(function(C){return Pa(C,m)}):g==="_createTransaction"?function(){return Pa(y.apply(this,arguments),m)}:y)}}));this.vip=m,k.forEach(function(b){return b(d)})}var va,An=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",$s=(Aa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Aa.prototype[An]=function(){return this},Aa);function Aa(e){this._subscribe=e}try{va={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{va={indexedDB:null,IDBKeyRange:null}}function ts(e){var t,n=!1,s=new $s(function(r){var l=Jt(e),c,d=!1,k={},E={},m={get closed(){return d},unsubscribe:function(){d||(d=!0,c&&c.abort(),b&&le.storagemutated.unsubscribe(w))}},b=(r.start&&r.start(m),!1),g=function(){return za(y)},w=function(C){Rt(k,C),xn(E,k)&&g()},y=function(){var C,M,T;!d&&va.indexedDB&&(k={},C={},c&&c.abort(),c=new AbortController,T=(S=>{var I=pn();try{l&&Gn();var L=fn(e,S);return L=l?L.finally(vn):L}finally{I&&Bn()}})(M={subscr:C,signal:c.signal,requery:g,querier:e,trans:null}),Promise.resolve(T).then(function(S){n=!0,t=S,d||M.signal.aborted||(k={},(I=>{for(var L in I)if(oe(I,L))return;return 1})(E=C)||b||(le(xe,w),b=!0),za(function(){return!d&&r.next&&r.next(S)}))},function(S){n=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||d||za(function(){d||r.error&&r.error(S)})}))};return setTimeout(g,0),m});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var In=an;function ns(e){var t=sn;try{sn=!0,le.storagemutated.fire(e),Xn(e,!0)}finally{sn=t}}ut(In,Q(Q({},At),{delete:function(e){return new In(e,{addons:[]}).delete()},exists:function(e){return new In(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=In.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(qt(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==Sa})}):Fe(n,t).toCollection().primaryKeys()).then(e)}catch{return Ue(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){he(this,e)}},ignoreTransaction:function(e){return H.trans?Mn(H.transless,e):e()},vip:bn,async:function(e){return function(){try{var t=_(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(n){return Ue(n)}}},spawn:function(e,t,n){try{var s=_(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:z.resolve(s)}catch(r){return Ue(r)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?In.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:z,debug:{get:function(){return It},set:function(e){Rn(e)}},derive:Ct,extend:he,props:ut,override:xt,Events:da,on:le,liveQuery:ts,extendObservabilitySet:Rt,getByKeyPath:Yt,setByKeyPath:vt,delByKeyPath:function(e,t){typeof t=="string"?vt(e,t,void 0):"length"in t&&[].map.call(t,function(n){vt(e,n,void 0)})},shallowClone:mt,deepClone:wt,getObjectDiff:pa,cmp:pe,asap:kt,minKey:-1/0,addons:[],connections:Un,errnames:Ca,dependencies:va,cache:ce,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),In.maxKey=K(In.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(le(xe,function(e){sn||(e=new CustomEvent(He,{detail:e}),sn=!0,dispatchEvent(e),sn=!1)}),addEventListener(He,function(e){e=e.detail,sn||ns(e)}));var On,sn=!1,Fn=function(){};return typeof BroadcastChannel<"u"&&((Fn=function(){(On=new BroadcastChannel(He)).onmessage=function(e){return e.data&&ns(e.data)}})(),typeof On.unref=="function"&&On.unref(),le(xe,function(e){sn||On.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!an.disableBfCache&&e.persisted){It&&console.debug("Dexie: handling persisted pagehide"),On?.close();for(var t=0,n=Un;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!an.disableBfCache&&e.persisted&&(It&&console.debug("Dexie: handling persisted pageshow"),Fn(),ns({all:new _e(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof Sn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!ls[e.name]?e:(t=new ls[e.name](t||e.message,e),"stack"in e&&Ne(t,"stack",{get:function(){return this.inner.stack}}),t)},Rn(It),Q(an,Object.freeze({__proto__:null,Dexie:an,Entity:fs,PropModification:ua,RangeSet:_e,add:function(e){return new ua({add:e})},cmp:pe,default:an,liveQuery:ts,mergeRanges:it,rangesOverlap:_t,remove:function(e){return new ua({remove:e})},replacePrefix:function(e,t){return new ua({replacePrefix:[e,t]})}}),{default:an}),an})})(Ms)),Ms.exports}var ki=xi();const Us=yi(ki),Fr=Symbol.for("Dexie"),Ts=globalThis[Fr]||(globalThis[Fr]=Us);if(Us.semVer!==Ts.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Us.semVer} and ${Ts.semVer}`);const{liveQuery:Li,mergeRanges:Ni,rangesOverlap:Ki,RangeSet:qi,cmp:Ri,Entity:Vi,PropModification:ji,replacePrefix:Yi,add:zi,remove:Wi,DexieYProvider:Gi}=Ts,Le=new Ts("haushaltsbuch-db");Le.version(1).stores({years:"year",fixedTemplateState:"id"});Le.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Le.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});Le.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Nn="singleton";function Ka(){return new Date().toISOString()}async function ya(){return Le.years.orderBy("year").toArray()}async function wi(B){return Le.years.get(B)}async function ba(B){await Le.years.put(B)}async function Hs(){const B=await Le.fixedTemplateState.get(Nn);if(!B){const h={id:Nn,templates:[],version:Ka(),updatedAt:new Date().toISOString()};return await Le.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Js(B){const h=Ka();return await Le.fixedTemplateState.put({id:Nn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function Xs(){const B=await Le.annualVariableFixedTemplateState.get(Nn);if(!B){const h={id:Nn,templates:[],version:Ka(),updatedAt:new Date().toISOString()};return await Le.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Qs(B){const h=Ka();return await Le.annualVariableFixedTemplateState.put({id:Nn,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function $i(B){await Le.auditLog.put(B)}async function Zs(){const B=await Le.searchEvaluationState.get(Nn);if(!B){const h={id:Nn,results:[],version:Ka(),updatedAt:new Date().toISOString()};return await Le.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:B.results,version:B.version}}async function _s(B){const h=Ka();return await Le.searchEvaluationState.put({id:Nn,results:B,version:h,updatedAt:new Date().toISOString()}),h}async function er(){return Le.auditLog.orderBy("timestampIso").toArray()}async function Si(B){await Le.auditLog.clear(),B.length!==0&&await Le.auditLog.bulkPut(B)}async function Ei(){const B=await ya(),[h,we,Q,de]=await Promise.all([Hs(),Xs(),er(),Zs()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:h.templates,annualVariableFixedTemplates:we.templates,auditLogEntries:Q,savedSearchEvaluations:de.results}}async function Bi(B){await Le.transaction("rw",[Le.years,Le.fixedTemplateState,Le.annualVariableFixedTemplateState,Le.auditLog,Le.searchEvaluationState],async()=>{await Le.years.clear(),await Le.years.bulkPut(B.years),await Js(B.fixedTemplates),await Qs(B.annualVariableFixedTemplates??[]),await Si(B.auditLogEntries??[]),await _s(B.savedSearchEvaluations??[])})}function De(B){const h=B.replace(",",".").trim();if(!h)return 0;const we=Number.parseFloat(h);return Number.isNaN(we)?0:Math.round(we*100)}const Mi=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return Mi.format(B/100)}function St(B){return(B/100).toFixed(2)}function Oe(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const Kr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Dr(B){return Kr.includes(B)}function _i(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Lr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Ti(B){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},we="habu-theme",Q="habu-backup-dirty",de="habu-unexported-change-log",se="habu-last-backup-filename",ge="habu-recurring-budget-defaults";let ie=null,he=null,Ze=null,Ve=null,oe=!1,ut=!1;const ot=new WeakMap;function Ne(){const o=B.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const i=getComputedStyle(document.documentElement),p=i.getPropertyValue("--text-main").trim(),u=i.getPropertyValue("--text-muted").trim(),v=i.getPropertyValue("--table-stripe").trim(),$=i.getPropertyValue("--table-border").trim(),P=i.getPropertyValue("--budget-under").trim(),O=i.getPropertyValue("--danger-2").trim(),A=96,W=250,R=Y=>1-Math.pow(1-Math.max(0,Math.min(1,Y)),3);o.forEach(Y=>{Y.dataset.hoverBound!=="1"&&(Y.dataset.hoverBound="1",Y.addEventListener("mouseenter",()=>{Y.dataset.hovering="1",Ne()}),Y.addEventListener("mouseleave",()=>{delete Y.dataset.hovering,delete Y.dataset.hoverX,Ne()}),Y.addEventListener("mousemove",Ie=>{const Re=Y.getBoundingClientRect(),et=Math.round(Ie.clientX-Re.left);Y.dataset.hoverX=String(et),Ne()}));const U=Number.parseInt(Y.dataset.budgetCents??"0",10),re=Number.parseInt(Y.dataset.actualCents??"0",10),xe=Y.dataset.label??"Kategorie",He=Y.dataset.hovering==="1",le=`${xe}|${U}|${re}`,ze=Y.dataset.lastRenderSignature!==le;Y.dataset.lastRenderSignature=le;const qe=Math.max(120,Math.floor(Y.clientWidth||120)),Ae=window.devicePixelRatio||1,st=Math.floor(qe*Ae),Ft=Math.floor(A*Ae);(Y.width!==st||Y.height!==Ft)&&(Y.width=st,Y.height=Ft);const K=Y.getContext("2d");if(!K)return;const $t=Math.max(1,U,re),ht=Math.min(1,Math.max(0,U/$t)),Zt=Math.min(1,Math.max(0,re/$t)),bt=U-re,be=U>0?re/U*100:re>0?100:0,Kt=8,Ke=Kt,Ye=34,Je=qe-Kt*2,nt=22,at=Number.parseInt(Y.dataset.hoverX??"-1",10),zt=(Ie,Re,et,Me,Fe)=>{K.beginPath(),K.moveTo(Ie+Fe,Re),K.lineTo(Ie+et-Fe,Re),K.quadraticCurveTo(Ie+et,Re,Ie+et,Re+Fe),K.lineTo(Ie+et,Re+Me-Fe),K.quadraticCurveTo(Ie+et,Re+Me,Ie+et-Fe,Re+Me),K.lineTo(Ie+Fe,Re+Me),K.quadraticCurveTo(Ie,Re+Me,Ie,Re+Me-Fe),K.lineTo(Ie,Re+Fe),K.quadraticCurveTo(Ie,Re,Ie+Fe,Re),K.closePath()},Dt=Ie=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,Y.width,Y.height),K.scale(Ae,Ae),zt(Ke,Ye,Je,nt,8),K.fillStyle=v,K.fill(),K.strokeStyle=$,K.lineWidth=1,K.stroke();const Re=[.6,.25,.15],et=[.1,.16,.24];let Me=0;Re.forEach((_e,rt)=>{const it=Je*_e;K.save(),K.globalAlpha=et[rt]??.1,K.fillStyle=u,K.fillRect(Ke+Me,Ye,it,nt),K.restore(),Me+=it});const Fe=U>0&&re>U?O:P,qt=Je*Zt*Ie;zt(Ke,Ye+3,qt,nt-6,6),K.fillStyle=Fe,K.fill(),He&&(K.save(),K.strokeStyle=Fe,K.lineWidth=1.5,K.globalAlpha=.8,zt(Ke-1,Ye+2,Math.max(2,qt+2),nt-4,7),K.stroke(),K.restore());const bn=Ke+Je*ht;K.strokeStyle=p,K.lineWidth=He?3:2,K.beginPath(),K.moveTo(bn,Ye-3),K.lineTo(bn,Ye+nt+3),K.stroke(),He&&at>=Ke&&at<=Ke+Je&&(K.save(),K.strokeStyle=p,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(at,Ye-8),K.lineTo(at,Ye+nt+8),K.stroke(),K.restore()),K.fillStyle=p,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(xe,Ke,10);const yn=be*Ie;if(K.fillStyle=be>100?O:be<100?P:u,K.textAlign="right",K.fillText(`${yn.toFixed(0)}%`,Ke+Je,10),K.fillStyle=u,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${f(re)} · Ziel ${f(U)} · Δ ${bt>=0?"+":""}${f(bt)}`,Ke,64),He){const _e=`Nutzung ${be.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const rt=8,it=5,_t=22,Te=K.measureText(_e).width+rt*2,tn=Number.isFinite(at)?at-Te/2:Ke+Je-Te,Rt=Math.min(Ke+Je-Te,Math.max(Ke,tn)),xn=Ye-_t-8;K.save(),K.fillStyle=p,K.globalAlpha=.92,zt(Rt,xn,Te,_t,6),K.fill(),K.restore(),K.fillStyle=v,K.textAlign="left",K.textBaseline="top",K.fillText(_e,Rt+rt,xn+it)}},yt=ot.get(Y);if(yt&&window.cancelAnimationFrame(yt),!ze){Dt(1);return}const Mt=performance.now(),pt=Ie=>{const Re=Ie-Mt,et=Math.min(1,Re/W);if(Dt(R(et)),et<1){const Me=window.requestAnimationFrame(pt);ot.set(Y,Me);return}ot.delete(Y)},en=window.requestAnimationFrame(pt);ot.set(Y,en)})}function Ct(){B.querySelectorAll("[data-year-trend-chart]").forEach(i=>{const p=Array.from(i.querySelectorAll("[data-year-trend-point]"));if(p.length===0)return;const u=i.querySelector("[data-year-trend-active-month]"),v=i.querySelector("[data-year-trend-active-net]"),$=i.querySelector("[data-year-trend-active-income]"),P=i.querySelector("[data-year-trend-active-expense]"),O=i.querySelector("[data-year-trend-active-delta]"),A=i.querySelector("[data-year-trend-live]");if(!u||!v||!$||!P||!O)return;const W=(U,re)=>{U.classList.remove("danger","budget-under");const xe=re<0?"danger":re>0?"budget-under":"";xe&&U.classList.add(xe)},R=U=>{const re=U.dataset.monthLabel??"-",xe=Number.parseInt(U.dataset.netCents??"0",10),He=Number.parseInt(U.dataset.actualNetCents??"0",10),le=Number.parseInt(U.dataset.incomeCents??"0",10),ze=Number.parseInt(U.dataset.expenseCents??"0",10),qe=Number.parseInt(U.dataset.deltaCents??"0",10);u.textContent=re,v.textContent=f(xe),$.textContent=f(le),P.textContent=f(ze),O.textContent=`${qe>=0?"+":""}${f(qe)}`,W(v,xe),W(O,qe),p.forEach(Ae=>{const st=Ae===U;Ae.classList.toggle("is-active",st),Ae.setAttribute("aria-pressed",String(st))}),A&&(A.textContent=`${re}: Kalkulierter Saldo ${f(xe)}, Ist-Saldo ${f(He)}, Einkommen ${f(le)}, Ausgaben ${f(ze)}`)};p.forEach(U=>{const re=()=>{R(U)};U.addEventListener("mouseenter",re),U.addEventListener("focus",re),U.addEventListener("click",re)});const Y=p.find(U=>U.dataset.pointDefault==="1")??p[p.length-1];Y&&R(Y)})}function Ut(o){if(o==="dashboard"){const i=h.years.slice().sort((u,v)=>v.year-u.year);i.some(u=>u.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??i[0]?.year??null)}h.topModal=o,te()}function Kn(){h.topModal&&(h.topModal=null,te())}function Ht(){h.showUnexportedChangeLogModal=!0,te()}function xt(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,te())}function dt(){h.showPersistentAuditLogModal=!0,te()}function kt(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,te())}function Yt(){oe||(oe=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),xt();return}if(h.showPersistentAuditLogModal){o.preventDefault(),kt();return}h.topModal&&(o.preventDefault(),Kn())}}))}function vt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const i=o/6;return window.scrollY>i}function mt(){const o=B.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",vt())}function Ps(){if(ut)return;ut=!0;const o=()=>{mt(),Ne()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function qa(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const i=document.createElement("div");return i.id="toast-root",i.className="toast-root",i.setAttribute("aria-live","polite"),i.setAttribute("aria-atomic","true"),document.body.appendChild(i),ie=i,i}function rs(){if(he&&document.body.contains(he))return he;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return he=o,o;const i=document.createElement("div");return i.id="amount-modal-root",document.body.appendChild(i),he=i,i}function ea(){if(Ve&&document.body.contains(Ve))return Ve;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return Ve=o,o;const i=document.createElement("div");return i.id="weekly-shopping-modal-root",document.body.appendChild(i),Ve=i,i}function wt(){if(!he){Ze=null;return}he.innerHTML="",Ze=null}function ta(){Ve&&(Ve.innerHTML="")}function Ra(o,i,p){const u=new Date,v=u.getFullYear(),$=u.getMonth()+1,P=u.getDate(),O=new Date(o,i,0).getDate();if(o<v||o===v&&i<$)return{occurrences:0,remainingDays:0};const A=o===v&&i===$?Math.min(P,O):1,W=Math.max(0,O-A+1);let R=0;for(let Y=A;Y<=O;Y+=1)new Date(o,i-1,Y).getDay()===p&&(R+=1);return{occurrences:R,remainingDays:W}}async function Va(o,i){const p=Ee();p&&(p.weeklyShoppingWeekday=o,p.weeklyShoppingEstimateCents=Math.max(0,i),await je(`Wocheneinkauf geplant: ${Lr.find(u=>u.value===o)?.label??"Wochentag"} mit ${f(p.weeklyShoppingEstimateCents)} €`),te())}function As(){const o=Ee(),i=jn();if(!o||!i)return;const p=ea();ta();const u=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,v=o.weeklyShoppingEstimateCents??0,$=i.year,P=o.month,O=Et($,P),A=O?Nt(O):{foodCents:0},W=O?O.foodBudgetCents??0:0,R=A.foodCents,Y=W-R;p.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Lr.map(be=>`<option value="${be.value}" ${be.value===u?"selected":""}>${be.label}</option>`).join("")}
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
    `;const U=p.querySelector(".weekly-shopping-modal-backdrop"),re=p.querySelector("#weekly-shopping-weekday"),xe=p.querySelector("#weekly-shopping-estimate"),He=p.querySelector("#weekly-shopping-occurrences"),le=p.querySelector("#weekly-shopping-total"),ze=p.querySelector("#weekly-shopping-rest-before"),qe=p.querySelector("#weekly-shopping-rest-after"),Ae=p.querySelector("#weekly-shopping-days-left"),st=p.querySelector("#weekly-shopping-per-day"),Ft=p.querySelector("#weekly-shopping-cancel"),K=p.querySelector("#weekly-shopping-save");function $t(){const be=Number.parseInt(re?.value??"1",10);return Number.isInteger(be)&&be>=0&&be<=6?be:1}function ht(){return Math.max(0,De(xe?.value??"0"))}function Zt(){const be=$t(),Kt=ht(),{occurrences:Ke,remainingDays:Ye}=Ra($,P,be),Je=Ke*Kt,nt=Y-Je,at=Ye>0?Math.trunc(nt/Ye):0;He&&(He.textContent=`${Ke}`),le&&(le.textContent=`${f(Je)} €`),ze&&(ze.textContent=`${f(Y)} €`),qe&&(qe.textContent=`${f(nt)} €`,qe.className=nt<0?"danger":nt>0?"budget-under":""),Ae&&(Ae.textContent=`${Ye}`),st&&(st.textContent=`${f(at)} €`,st.className=at<0?"danger":at>0?"budget-under":"")}async function bt(){await Va($t(),ht()),ta()}Ft?.addEventListener("click",()=>{ta()}),K?.addEventListener("click",async()=>{await bt()}),re?.addEventListener("change",()=>{Zt()}),xe?.addEventListener("input",()=>{Zt()}),xe?.addEventListener("keydown",async be=>{if(be.key==="Escape"){be.preventDefault(),ta();return}be.key==="Enter"&&(be.preventDefault(),await bt())}),U?.addEventListener("click",be=>{be.target===U&&ta()}),window.setTimeout(()=>{xe?.focus(),xe?.select(),Zt()},0)}function ln(o,i){let p=o;const u=i.min;if(u){const $=Number.parseFloat(u);if(!Number.isNaN($)){const P=Math.round($*100);p=Math.max(p,P)}}const v=i.max;if(v){const $=Number.parseFloat(v);if(!Number.isNaN($)){const P=Math.round($*100);p=Math.min(p,P)}}return p}function lt(o){if(o.disabled)return;const i=rs();wt(),Ze=o;const p=De(o.value||"0"),u="Betrag anpassen";i.innerHTML=`
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
    `;const v=i.querySelector(".amount-modal-backdrop"),$=i.querySelector("#amount-modal-delta"),P=i.querySelector("#amount-modal-next-delta"),O=i.querySelector("#amount-modal-next-overwrite"),A=i.querySelector("#amount-modal-cancel"),W=i.querySelector("#amount-modal-overwrite"),R=i.querySelector("#amount-modal-apply");function Y(){const le=De($?.value??"0");return ln(p+le,o)}function U(){const le=De($?.value??"0");return ln(le,o)}function re(){P&&(P.textContent=`${f(Y())} €`),O&&(O.textContent=`${f(U())} €`)}function xe(){const le=Ze;if(!le){wt();return}const ze=Y();wt(),le.value=St(ze),le.dispatchEvent(new Event("change",{bubbles:!0}))}function He(){const le=Ze;if(!le){wt();return}const ze=U();wt(),le.value=St(ze),le.dispatchEvent(new Event("change",{bubbles:!0}))}A?.addEventListener("click",()=>{wt()}),W?.addEventListener("click",()=>{He()}),R?.addEventListener("click",()=>{xe()}),$?.addEventListener("input",()=>{re()}),$?.addEventListener("keydown",le=>{if(le.key==="Escape"){le.preventDefault(),wt();return}le.key==="Enter"&&(le.preventDefault(),xe())}),v?.addEventListener("click",le=>{le.target===v&&wt()}),window.setTimeout(()=>{$?.focus(),$?.select(),re()},0)}function ne(o,i="success"){const p=qa(),u=document.createElement("div");u.className=`toast toast-${i}`,u.textContent=o,p.appendChild(u),requestAnimationFrame(()=>{u.classList.add("toast-visible")});const v=i==="error"?5e3:3e3;window.setTimeout(()=>{u.classList.remove("toast-visible"),window.setTimeout(()=>{u.remove()},220)},v)}function Jt(){return new Date().getMonth()+1}function At(){return new Date().getFullYear()}function is(o){const i=At(),p=o.find(u=>u.year===i);return p?p.year:o[0]?.year??null}function Sn(){return new Date().toISOString().slice(0,10)}function os(){const o=new Date,i=String(o.getHours()).padStart(2,"0"),p=String(o.getMinutes()).padStart(2,"0"),u=String(o.getSeconds()).padStart(2,"0");return`${i}${p}${u}`}function gt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function qn(){const o=localStorage.getItem(we);return o&&Dr(o)?o:"light"}function Ca(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(we,o)}function Is(){return localStorage.getItem(Q)==="1"}function ee(o){localStorage.setItem(Q,o?"1":"0")}function ls(){const o=localStorage.getItem(de);if(!o)return[];try{const i=JSON.parse(o);return Array.isArray(i)?i.filter(p=>{if(!p||typeof p!="object")return!1;const u=p;return typeof u.id=="string"&&typeof u.timestampIso=="string"&&typeof u.message=="string"}).slice(-200):[]}catch{return[]}}function $e(o){localStorage.setItem(de,JSON.stringify(o.slice(-200)))}function na(){const o=localStorage.getItem(se);if(!o)return null;const i=o.trim();return i||null}function Os(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},i=localStorage.getItem(ge);if(!i)return o;try{const p=JSON.parse(i),u=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:u(p.foodBudgetCents),goingOutBudgetCents:u(p.goingOutBudgetCents),fixedBudgetCents:u(p.fixedBudgetCents),variableBudgetCents:u(p.variableBudgetCents),miscBudgetCents:u(p.miscBudgetCents)}}catch{return o}}function En(o){localStorage.setItem(ge,JSON.stringify(o))}function cs(o){o.months.forEach(i=>{const{recurringBudgetDefaults:p}=h;typeof p.foodBudgetCents=="number"&&(i.foodBudgetCents=p.foodBudgetCents),typeof p.goingOutBudgetCents=="number"&&(i.goingOutBudgetCents=p.goingOutBudgetCents),typeof p.fixedBudgetCents=="number"&&(i.fixedBudgetCents=p.fixedBudgetCents),typeof p.variableBudgetCents=="number"&&(i.variableBudgetCents=p.variableBudgetCents),typeof p.miscBudgetCents=="number"&&(i.miscBudgetCents=p.miscBudgetCents)})}function Fs(o){const i=o.trim();i&&localStorage.setItem(se,i)}async function us(){if(h.savedSearchEvaluations.length===0)return;const o=At(),i=Jt(),p=h.savedSearchEvaluations.map(u=>({...Ir(h.years,u.keyword,o,i),id:u.id,createdAt:u.createdAt}));h.savedSearchEvaluations=p,await _s(p)}async function Ds(){qa(),Ca(qn()),h.hasUnexportedChanges=Is(),h.unexportedChangeLog=ls(),h.persistentAuditLog=await er(),h.lastBackupFileName=na(),h.recurringBudgetDefaults=Os(),Yt(),Ps();const[o,i,p,u]=await Promise.all([ya(),Hs(),Xs(),Zs()]);h.years=o,h.annualVariableFixedTemplates=p.templates,h.annualVariableFixedTemplateVersion=p.version,aa(h.years),la(h.years),h.fixedTemplates=i.templates,h.fixedTemplateVersion=i.version,h.savedSearchEvaluations=u.results,await Vn(h.years),await us(),o.length>0&&(h.selectedYear=is(o),h.selectedMonth=Jt()),te()}function aa(o){const i=p=>p==="balance"||p==="fresh"||p==="salary"?p:void 0;o.forEach(p=>{p.months.forEach(u=>{if(u.weeklyShoppingWeekday!==null&&u.weeklyShoppingWeekday!==void 0){const v=Number(u.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?u.weeklyShoppingWeekday=v:u.weeklyShoppingWeekday=null}else u.weeklyShoppingWeekday=null;typeof u.weeklyShoppingEstimateCents!="number"&&(u.weeklyShoppingEstimateCents=0),typeof u.foodBudgetCents!="number"&&(u.foodBudgetCents=0),typeof u.goingOutBudgetCents!="number"&&(u.goingOutBudgetCents=0),Array.isArray(u.incomes)?u.incomes=u.incomes.map(v=>{const $=i(v.incomeSource);if(!$){const{incomeSource:P,...O}=v;return O}return{...v,incomeSource:$}}):u.incomes=[],typeof u.fixedBudgetCents!="number"&&(u.fixedBudgetCents=u.fixedCosts.reduce((v,$)=>v+$.plannedCents,0)),typeof u.variableBudgetCents!="number"&&(u.variableBudgetCents=u.variablePositions.reduce((v,$)=>v+$.budgetCents,0)),Array.isArray(u.variablePositions)||(u.variablePositions=[]),typeof u.miscBudgetCents!="number"&&(u.miscBudgetCents=0)})})}function It(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Rn(o){return o==="fresh"||o==="salary"||!o}async function Vn(o){for(const i of o)await ba(i)}function jn(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ee(){const o=jn();if(o)return o.months.find(i=>i.month===h.selectedMonth)}function Et(o,i){const p=h.years.find(u=>u.year===o);if(p)return p.months.find(u=>u.month===i)}function Nt(o){const i=o.days.reduce((O,A)=>O+A.foodCents,0),p=o.days.reduce((O,A)=>O+A.goingOutCents,0),u=o.fixedCosts.reduce((O,A)=>O+A.actualCents,0),v=o.variableCosts.reduce((O,A)=>O+A.amountCents,0)+o.variablePositions.reduce((O,A)=>O+A.actualCents,0),$=o.miscCosts.reduce((O,A)=>O+A.amountCents,0),P=i+p+u+v+$;return{foodCents:i,goingOutCents:p,fixedCents:u,variableCents:v,miscCents:$,totalCents:P}}function Yn(o){const i=o.foodBudgetCents??0,p=o.goingOutBudgetCents??0,u=o.fixedBudgetCents??o.fixedCosts.reduce((P,O)=>P+O.plannedCents,0),v=o.variablePositions.reduce((P,O)=>P+O.budgetCents,0),$=o.miscBudgetCents??0;return i+p+u+(o.variableBudgetCents??v)+$}function cn(o){return o.months.reduce((i,p)=>{const u=Nt(p);return{foodCents:i.foodCents+u.foodCents,goingOutCents:i.goingOutCents+u.goingOutCents,fixedCents:i.fixedCents+u.fixedCents,variableCents:i.variableCents+u.variableCents,miscCents:i.miscCents+u.miscCents,totalCents:i.totalCents+u.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function ja(o){return o.months.slice().sort((i,p)=>i.month-p.month).map(i=>({month:i.month,summary:Nt(i)}))}function zn(o){const i=o.months.reduce((P,O)=>P+(O.foodBudgetCents??0),0),p=o.months.reduce((P,O)=>P+(O.goingOutBudgetCents??0),0),u=o.months.reduce((P,O)=>P+(O.fixedBudgetCents??O.fixedCosts.reduce((A,W)=>A+W.plannedCents,0)),0),v=o.months.reduce((P,O)=>P+(O.variableBudgetCents??O.variablePositions.reduce((A,W)=>A+W.budgetCents,0)),0),$=o.months.reduce((P,O)=>P+(O.miscBudgetCents??0),0);return{foodCents:i,goingOutCents:p,fixedCents:u,variableCents:v,miscCents:$,totalCents:i+p+u+v+$}}function Xt(o){return o.months.reduce((i,p)=>i+p.incomes.reduce((u,v)=>u+(Rn(v.incomeSource)?v.amountCents:0),0),0)}function sa(o){return o.months.reduce((i,p)=>(p.incomes.forEach(u=>{if(u.incomeSource==="salary"){i.salaryIncomeCents+=u.amountCents;return}(u.incomeSource==="fresh"||u.incomeSource==null)&&(i.freshIncomeCents+=u.amountCents)}),i),{salaryIncomeCents:0,freshIncomeCents:0})}function ra(o,i){const p=o.months.slice().sort((u,v)=>u.month-v.month)[0];return p?i.get(ve(o.year,p.month))?.carriedFromPreviousCents??0:0}function un(){const o=h.years.slice().sort((u,v)=>u.year-v.year).flatMap(u=>u.months.slice().sort((v,$)=>v.month-$.month).map(v=>({year:u.year,month:v}))),i=new Map;let p=0;return o.forEach(({year:u,month:v},$)=>{const P=v.carryoverOverrideCents,O=typeof P=="number",A=O?P:p,W=$>0||O,R=v.incomes.reduce((xe,He)=>xe+(Rn(He.incomeSource)?He.amountCents:0),0),Y=Yn(v),U=R+A,re=U-Y;i.set(ve(u,v.month),{hasPreviousMonth:W,carriedFromPreviousCents:A,recordedIncomeCents:R,effectiveIncomeCents:U,plannedBudgetCents:Y,netCents:re}),p=re}),i}function H(o,i){return i<=0?"":o>i?"budget-over":o<i?"budget-under":""}function ia(o){return`${o>0?"+":""}${f(o)}`}function Ot(o,i){const p=o-i,u=H(i,o);return`${f(o)} <span class="eval-diff ${u}">(Δ ${ia(p)})</span>`}function dn(o,i){const p=o!==null,u=p?o-i:null,v=p?H(i,o):"";return`<div class="column-overview">
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
    </div>`}async function z(o){if(await wi(o)){alert(`Jahr ${o} existiert bereits.`);return}const p=Pr(o,h.fixedTemplates,h.fixedTemplateVersion);cs(p),oa(p),await ba(p),h.years=await ya(),hn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=Jt(),ne(`Jahr ${o} wurde angelegt.`),te()}function hn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const i=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",p=new Date().toISOString(),u=`${o} (${i})`,v={id:ct("change"),timestampIso:p,message:u};h.unexportedChangeLog=[...h.unexportedChangeLog,v].slice(-200),$e(h.unexportedChangeLog);const $={id:ct("audit"),timestampIso:p,message:u};h.persistentAuditLog=[...h.persistentAuditLog,$].slice().sort((P,O)=>P.timestampIso.localeCompare(O.timestampIso)),$i($).catch(P=>{console.error("Audit-Log konnte nicht gespeichert werden",P),ne("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function ds(o){const i=o.trim();i&&(h.lastBackupFileName=i,Fs(i))}function xa(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],$e([]),h.showUnexportedChangeLogModal=!1,ds(o)}async function je(o){const i=jn();i&&(await ba(i),h.years=await ya(),hn(o))}async function Bt(o){for(const i of h.years)await ba(i);h.years=await ya(),hn(o)}function ve(o,i){return o*100+i}function Wn(o,i,p){const u=`${o} auf ${f(p)} € gesetzt`;return p>i?`${u} (erhöht um ${f(p-i)} €)`:p<i?`${u} (verringert um ${f(i-p)} €)`:u}function pn(o){const i=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!i)return null;const p=i[1],u=i[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function Bn(o,i){const p=pn(o.dueDateIso);if(!p||i.year<p.year)return;const u=i.months.find($=>$.month===p.month);!u||u.variablePositions.some($=>$.autoAnnualTemplateId===o.id)||(u.variablePositions=[{id:ct("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...u.variablePositions],Be(u))}function oa(o){h.annualVariableFixedTemplates.forEach(i=>{Bn(i,o)})}function la(o){const i=new Set(h.annualVariableFixedTemplates.map(p=>p.id));o.forEach(p=>{p.months.forEach(u=>{const v=u.variablePositions.some(P=>typeof P.autoAnnualTemplateId=="string"),$=u.fixedCosts.some(P=>typeof P.autoAnnualTemplateId=="string");v&&(u.variablePositions=u.variablePositions.filter(P=>P.autoAnnualTemplateId?i.has(P.autoAnnualTemplateId):!0),Be(u)),$&&(u.fixedCosts=u.fixedCosts.filter(P=>!P.autoAnnualTemplateId),me(u))}),oa(p)})}function me(o){o.fixedBudgetCents=o.fixedCosts.reduce((i,p)=>i+p.plannedCents,0)}function Be(o){o.variableBudgetCents=o.variablePositions.reduce((i,p)=>i+p.budgetCents,0)}function Ls(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function ca(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Ls());if(!o)return null;const i=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!i)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const p=i[1],u=i[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function ka(o,i){const p=ve(i.year,i.month);h.years.forEach(u=>{u.months.forEach(v=>{if(ve(u.year,v.month)<p)return;v.fixedCosts.some(P=>P.templateId===o.id)||(v.fixedCosts.push({id:ct("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),me(v))})})}function wa(o,i,p){const u=ve(p.year,p.month);h.years.forEach(v=>{v.months.forEach($=>{ve(v.year,$.month)<u||($.fixedCosts=$.fixedCosts.map(P=>P.templateId!==i.id?P:{...P,name:i.name,plannedCents:i.plannedCents,actualCents:P.actualCents===o.plannedCents?i.plannedCents:P.actualCents}),me($))})})}function Ns(o,i){const p=ve(i.year,i.month);h.years.forEach(u=>{u.months.forEach(v=>{ve(u.year,v.month)<p||(v.fixedCosts=v.fixedCosts.filter($=>$.templateId!==o),me(v))})})}async function fn(o,i){const p=o.trim();if(!p)return;const u=ca();if(!u)return;const v=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const $=h.fixedTemplates.find(O=>O.id===h.editingFixedTemplateId);if(!$)return;const P={...$,name:p,plannedCents:i};h.fixedTemplates=h.fixedTemplates.map(O=>O.id===h.editingFixedTemplateId?P:O),wa($,P,u)}else{const $={id:ct("tpl"),name:p,plannedCents:i};h.fixedTemplates=[...h.fixedTemplates,$],ka($,u)}h.fixedTemplateVersion=await Js(h.fixedTemplates),h.editingFixedTemplateId=null,await Bt(v?`Fixkosten-Vorlage aktualisiert: ${p} (${f(i)} €)`:`Fixkosten-Vorlage hinzugefügt: ${p} (${f(i)} €)`),ne(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),te()}function Gn(o){h.editingFixedTemplateId=o,te()}function vn(){h.editingFixedTemplateId=null,te()}async function $a(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const p=ca();if(!p)return;const u=h.fixedTemplates.find(v=>v.id===o);h.fixedTemplates=h.fixedTemplates.filter(v=>v.id!==o),Ns(o,p),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Js(h.fixedTemplates),await Bt(`Fixkosten-Vorlage gelöscht: ${u?.name??"Unbekannt"}`),ne("Fixkosten-Vorlage wurde gelöscht."),te()}async function Ks(o,i,p){const u=o.trim();if(!u){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=pn(i);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(p<=0){alert("Bitte einen positiven Betrag eingeben.");return}const $={id:ct("annualtpl"),name:u,plannedCents:p,dueDateIso:i};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,$],h.years.forEach(P=>{Bn($,P)}),h.annualVariableFixedTemplateVersion=await Qs(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage hinzugefügt: ${u} (${f(p)} €, jährlich in ${Oe(v.month)})`),ne("Variable Fixkosten-Vorlage wurde hinzugefügt."),te()}async function mn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const p=h.annualVariableFixedTemplates.find(u=>u.id===o);p&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(u=>u.id!==o),h.years.forEach(u=>{u.months.forEach(v=>{v.variablePositions=v.variablePositions.filter($=>$.autoAnnualTemplateId!==o),Be(v),v.fixedCosts=v.fixedCosts.filter($=>$.autoAnnualTemplateId!==o),me(v)})}),h.annualVariableFixedTemplateVersion=await Qs(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage gelöscht: ${p.name}`),ne("Variable Fixkosten-Vorlage wurde gelöscht."),te())}async function Ya(o,i,p){const u=Ee();if(!u)return;const $=u.days.find(P=>P.isoDate===o)?.[i]??0;u.days=u.days.map(P=>P.isoDate===o?{...P,[i]:p}:P),await je(Wn(`${i==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,$,p)),te()}async function Mn(o,i){const p=Ee();if(!p)return;const u=p.fixedCosts.find(v=>v.id===o);p.fixedCosts=p.fixedCosts.map(v=>v.id===o?{...v,actualCents:i}:v),await je(`Fixkosten-Ist angepasst: ${u?.name??"Unbekannt"} auf ${f(i)} €`),te()}async function hs(o,i){const p=Ee();if(!p)return;const u=p.fixedCosts.find($=>$.id===o);if(!u)return;const v=u.plannedCents;p.fixedCosts=p.fixedCosts.map($=>$.id===o?{...$,plannedCents:i}:$),me(p),await je(Wn(`Fixkosten-Budget angepasst: ${u.name}`,v,i)),te()}async function za(o,i){const p=Ee();if(!p)return;const u=o.trim();if(!u){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(i<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:ct("fixed"),templateId:ct("fixed-local"),name:u,plannedCents:i,actualCents:0};p.fixedCosts=[v,...p.fixedCosts],me(p),await je(`Fixkosten-Position hinzugefügt: ${u} (${f(i)} €)`),ne("Fixkosten-Position wurde hinzugefügt."),te()}async function Ue(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const p=Ee();if(!p)return;const u=p.fixedCosts.find(v=>v.id===o);u&&(p.fixedCosts=p.fixedCosts.filter(v=>v.id!==o),me(p),await je(`Fixkosten-Position gelöscht: ${u.name}`),ne("Fixkosten-Position wurde gelöscht."),te())}async function _n(){const o=Ee();if(!o)return;if(o.fixedCosts.length===0){ne("Keine Fixkosten zum Löschen vorhanden.","error");return}if(!confirm("Alle Fixkosten im aktuellen Monat wirklich löschen?"))return;const p=o.fixedCosts.length;o.fixedCosts=[],me(o),await je(`Alle Fixkosten im Monat gelöscht: ${p} Position(en)`),ne(`${p} Fixkosten-Position(en) wurden gelöscht.`),te()}async function Qt(o){await Tn("fixedBudgetCents",o,"Fixkosten")}async function ps(o){await Tn("foodBudgetCents",o,"Essen")}async function Un(o){await Tn("goingOutBudgetCents",o,"Ausgehen")}async function Sa(o){await Tn("miscBudgetCents",o,"Sonstiges")}async function Wa(o){await Tn("variableBudgetCents",o,"Variable Kosten")}async function Tn(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v||u[o]===i)return;const $=u[o];if(u[o]=i,confirm(`Soll das Budget "${p}" auch für zukünftige Monate übernommen werden?`)){const O=ve(v,h.selectedMonth);h.years.forEach(W=>{W.months.forEach(R=>{ve(W.year,R.month)<=O||(R[o]=i)})}),h.recurringBudgetDefaults[o]=i,En(h.recurringBudgetDefaults);const A=Wn(`Budget "${p}"`,$??0,i);await Bt(`${A} (inkl. zukünftiger Monate)`),ne(`Budget "${p}" wurde für zukünftige Monate übernommen.`),te();return}await je(Wn(`Budget "${p}"`,$??0,i)),te()}async function gn(o){const i=Ee();i&&(o===null?i.carryoverOverrideCents=null:i.carryoverOverrideCents=o,await je(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(o)} € gesetzt`),te())}async function Ga(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v)return;const $=o.trim();if(!$){alert("Bitte Bezeichnung für die Position angeben.");return}if(u.variablePositions=[{id:ct("varpos"),name:$,budgetCents:i,actualCents:0},...u.variablePositions],Be(u),p){const P=ve(v,h.selectedMonth);h.years.forEach(O=>{O.months.forEach(A=>{ve(O.year,A.month)<=P||(A.variablePositions=[{id:ct("varpos"),name:$,budgetCents:i,actualCents:0},...A.variablePositions],Be(A))})}),await Bt(`Variable Position hinzugefügt: ${$} (${f(i)} €) für zukünftige Monate`),ne("Variable Position wurde für zukünftige Monate hinzugefügt."),te();return}await je(`Variable Position hinzugefügt: ${$} (${f(i)} €)`),ne("Variable Position wurde hinzugefügt."),te()}async function Ea(o,i){const p=Ee();if(!p)return;const u=p.variablePositions.find($=>$.id===o),v=u?.actualCents??0;p.variablePositions=p.variablePositions.map($=>$.id===o?{...$,actualCents:i}:$),await je(Wn(`Istwert Variable Position angepasst: ${u?.name??"Unbekannt"}`,v,i)),te()}async function fs(o,i){const p=Ee();if(!p)return;const u=p.variablePositions.find($=>$.id===o),v=u?.budgetCents??0;p.variablePositions=p.variablePositions.map($=>$.id===o?{...$,budgetCents:i}:$),Be(p),await je(Wn(`Budget Variable Position angepasst: ${u?.name??"Unbekannt"}`,v,i)),te()}async function pe(o){if(!confirm("Variable Position wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.variablePositions.find(A=>A.id===o);if(!v)return;const $=ve(u,h.selectedMonth),O=h.years.some(A=>A.months.some(W=>ve(A.year,W.month)>$&&W.variablePositions.some(R=>R.name===v.name&&R.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.variablePositions=p.variablePositions.filter(A=>A.id!==o),Be(p),O){h.years.forEach(A=>{A.months.forEach(W=>{ve(A.year,W.month)<=$||(W.variablePositions=W.variablePositions.filter(R=>!(R.name===v.name&&R.budgetCents===v.budgetCents)),Be(W))})}),await Bt(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),ne("Variable Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await je(`Variable Position gelöscht: ${v.name}`),ne("Variable Position wurde gelöscht."),te()}async function vs(o){const i=Ee(),p=h.selectedYear;if(!i||!p)return;const u=i.variablePositions.find(R=>R.id===o);if(!u)return;const v={year:h.selectedMonth===12?p+1:p,month:h.selectedMonth===12?1:h.selectedMonth+1};let $=h.years.find(R=>R.year===v.year);if(!$){const R=Pr(v.year,h.fixedTemplates,h.fixedTemplateVersion);cs(R),oa(R),await ba(R),h.years=[...h.years,R].sort((Y,U)=>Y.year-U.year),$=R}const P=$.months.find(R=>R.month===v.month);if(!P)return;const O=P.variablePositions.some(R=>R.id===u.id||R.name===u.name&&R.budgetCents===u.budgetCents);if(i.variablePositions=i.variablePositions.filter(R=>R.id!==o),Be(i),!O){const Y=P.variablePositions.some(U=>U.id===u.id)?{...u,id:ct("varpos")}:u;P.variablePositions=[Y,...P.variablePositions],Be(P)}const A=`${Oe(v.month)} ${v.year}`,W=`Variable Position verschoben: ${u.name} → ${A}`;if(v.year===p)await je(W);else{const R=jn();if(!R)return;await ba(R),await ba($),h.years=await ya(),aa(h.years),hn(W)}ne(O?`Position entfernt (im Folgemonat schon vorhanden: ${A}).`:`Position in den Folgemonat verschoben: ${A}.`),te()}async function Ua(o,i,p){const u=Ee(),v=h.selectedYear;if(!u||!v)return;const $=o.trim();if(!$){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(i<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P=Gs($,i);if(u.miscCosts=[P,...u.miscCosts],p){const O=ve(v,h.selectedMonth);h.years.forEach(A=>{A.months.forEach(W=>{ve(A.year,W.month)<=O||(W.miscCosts=[Gs($,i),...W.miscCosts])})}),await Bt(`Sonstige Position hinzugefügt: ${$} (${f(i)} €) für zukünftige Monate`),ne("Sonstige Position wurde für zukünftige Monate hinzugefügt."),te();return}await je(`Sonstige Position hinzugefügt: ${$} (${f(i)} €)`),ne("Sonstige Position wurde hinzugefügt."),te()}function Hn(o){const i=[];let p="",u=!1;for(let v=0;v<o.length;v+=1){const $=o[v],P=o[v+1];if($==='"'){u&&P==='"'?(p+='"',v+=1):u=!u;continue}if($===";"&&!u){i.push(p.trim()),p="";continue}p+=$}return i.push(p.trim()),i}async function ua(o){const i=Ee();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const v=new Set(i.miscCosts.map(A=>`${A.description}__${A.amountCents}`));let $=0,P=0,O=0;if(u.forEach(A=>{const W=Hn(A);if(W.length!==2){O+=1;return}const R=W[0]?.trim()??"",Y=W[1]?.trim()??"",U=De(Y);if(!R||U<=0){O+=1;return}const re=`${R}__${U}`;if(v.has(re)){P+=1;return}i.miscCosts.push(Gs(R,U)),v.add(re),$+=1}),$===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ne(A,"error");return}await je(`Sonstiges CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function ms(o){const i=Ee();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const v=new Set(i.fixedCosts.map(A=>`${A.name}__${A.plannedCents}__${A.actualCents}`));let $=0,P=0,O=0;if(u.forEach(A=>{const W=Hn(A);if(W.length!==2){O+=1;return}const R=W[0]?.trim()??"",Y=W[1]?.trim()??"",U=De(Y);if(!R||U<=0){O+=1;return}const re=`${R}__${U}__${U}`;if(v.has(re)){P+=1;return}i.fixedCosts.push({id:ct("fixed"),templateId:ct("fixed-local"),name:R,plannedCents:U,actualCents:U}),v.add(re),$+=1}),$===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ne(A,"error");return}me(i),await je(`Fixkosten CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function gs(o){const i=Ee();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const v=new Set(i.variablePositions.map(A=>`${A.name}__${A.budgetCents}__${A.actualCents}`));let $=0,P=0,O=0;if(u.forEach(A=>{const W=Hn(A);if(W.length!==2){O+=1;return}const R=W[0]?.trim()??"",Y=W[1]?.trim()??"",U=De(Y);if(!R||U<=0){O+=1;return}const re=`${R}__${U}__${U}`;if(v.has(re)){P+=1;return}i.variablePositions.push({id:ct("varpos"),name:R,budgetCents:U,actualCents:U}),v.add(re),$+=1}),$===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ne(A,"error");return}Be(i),await je(`Variable CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function bs(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.miscCosts.find(A=>A.id===o);if(!v)return;const $=ve(u,h.selectedMonth),O=h.years.some(A=>A.months.some(W=>ve(A.year,W.month)>$&&W.miscCosts.some(R=>R.description===v.description&&R.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.miscCosts=p.miscCosts.filter(A=>A.id!==o),O){h.years.forEach(A=>{A.months.forEach(W=>{ve(A.year,W.month)<=$||(W.miscCosts=W.miscCosts.filter(R=>!(R.description===v.description&&R.amountCents===v.amountCents)))})}),await Bt(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),ne("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await je(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €)`),ne("Sonstige Position wurde gelöscht."),te()}async function Pe(o,i,p,u){const v=Ee(),$=h.selectedYear;if(!v||!$)return;const P=o.trim();if(!P){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(i<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const O=Ar(P,i,p);if(v.incomes=[O,...v.incomes],u){const A=ve($,h.selectedMonth);h.years.forEach(W=>{W.months.forEach(R=>{ve(W.year,R.month)<=A||(R.incomes=[Ar(P,i,p),...R.incomes])})}),await Bt(`Einkommen hinzugefügt: ${P} (${f(i)} €, ${It(p)}) für zukünftige Monate`),ne("Einkommen wurde für zukünftige Monate hinzugefügt."),te();return}await je(`Einkommen hinzugefügt: ${P} (${f(i)} €, ${It(p)})`),ne("Einkommen wurde hinzugefügt."),te()}async function da(o,i){const p=Ee();if(!p)return;const u=p.incomes.find(v=>v.id===o);u&&(p.incomes=p.incomes.map(v=>{if(v.id!==o)return v;if(!i){const{incomeSource:$,...P}=v;return P}return{...v,incomeSource:i}}),await je(`Einkommensart angepasst: ${u.description} → ${It(i)}`),te())}async function ha(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const p=Ee(),u=h.selectedYear;if(!p||!u)return;const v=p.incomes.find(A=>A.id===o);if(!v)return;const $=ve(u,h.selectedMonth),O=h.years.some(A=>A.months.some(W=>ve(A.year,W.month)>$&&W.incomes.some(R=>R.description===v.description&&R.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.incomes=p.incomes.filter(A=>A.id!==o),O){h.years.forEach(A=>{A.months.forEach(W=>{ve(A.year,W.month)<=$||(W.incomes=W.incomes.filter(R=>!(R.description===v.description&&R.amountCents===v.amountCents)))})}),await Bt(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),ne("Einkommen wurde auch in zukünftigen Monaten gelöscht."),te();return}await je(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €)`),ne("Einkommen wurde gelöscht."),te()}async function Pn(){const o=await Ei(),i=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),p=URL.createObjectURL(i),u=`haushaltsbuch-backup-${Sn()}-${os()}.json`,v=document.createElement("a");v.href=p,v.download=u,v.click(),URL.revokeObjectURL(p),xa(u),te(),ne("Backup wurde exportiert.")}async function Ha(o){const i=await o.text(),p=JSON.parse(i);await Bi(p);const[u,v,$,P]=await Promise.all([ya(),Hs(),Xs(),Zs()]);h.years=u,h.annualVariableFixedTemplates=$.templates,h.annualVariableFixedTemplateVersion=$.version,aa(h.years),la(h.years),h.fixedTemplates=v.templates,h.fixedTemplateVersion=v.version,h.savedSearchEvaluations=P.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await Vn(h.years),await us(),h.persistentAuditLog=await er(),h.selectedYear=is(u),h.selectedMonth=Jt(),xa(o.name),ne("Backup wurde importiert."),te()}function Ba(o){h.evaluationQuery=o,h.evaluationCurrentResult=Ir(h.years,o,At(),Jt()),te()}async function Ma(){const o=h.evaluationCurrentResult;if(!o||!o.keywordNormalized){ne("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const i=h.savedSearchEvaluations.findIndex(p=>p.id===o.id);i>=0?h.savedSearchEvaluations[i]=o:h.savedSearchEvaluations=[o,...h.savedSearchEvaluations],await _s(h.savedSearchEvaluations),hn(`Auswertung gespeichert: ${o.keyword}`),ne(`Auswertung "${o.keyword}" wurde gespeichert.`),te()}async function ys(o){const i=h.savedSearchEvaluations.find(p=>p.id===o);i&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(p=>p.id!==o),await _s(h.savedSearchEvaluations),hn(`Auswertung gelöscht: ${i.keyword}`),ne(`Gespeicherte Auswertung "${i.keyword}" wurde gelöscht.`),te())}function te(){const o=jn(),i=Ee(),p=Sn(),u=i?Nt(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=o?cn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},$=o?ja(o):[],P=i?i.foodBudgetCents??0:0,O=i?i.goingOutBudgetCents??0:0,A=i?i.fixedBudgetCents??i.fixedCosts.reduce((a,x)=>a+x.plannedCents,0):0,W=i?i.variableBudgetCents??i.variablePositions.reduce((a,x)=>a+x.budgetCents,0):0,R=i?i.miscBudgetCents??0:0,Y=o?o.months.reduce((a,x)=>a+(x.foodBudgetCents??0),0):0,U=o?o.months.reduce((a,x)=>a+(x.goingOutBudgetCents??0),0):0,re=o?o.months.reduce((a,x)=>a+(x.fixedBudgetCents??x.fixedCosts.reduce((q,Z)=>q+Z.plannedCents,0)),0):0,xe=o?o.months.reduce((a,x)=>a+(x.variableBudgetCents??x.variablePositions.reduce((q,Z)=>q+Z.budgetCents,0)),0):0,He=o?o.months.reduce((a,x)=>a+(x.miscBudgetCents??0),0):0,le=i?i.incomes.reduce((a,x)=>a+(Rn(x.incomeSource)?x.amountCents:0),0):0,ze=i?i.incomes.reduce((a,x)=>a+(x.incomeSource==="salary"?x.amountCents:0),0):0,qe=i?i.incomes.reduce((a,x)=>a+(x.incomeSource==="fresh"?x.amountCents:0),0):0,Ae=un(),st=o?Ae.get(ve(o.year,h.selectedMonth)):void 0,Ft=o?o.months.slice().sort((a,x)=>a.month-x.month)[0]:void 0,K=st?.carriedFromPreviousCents??0,$t=st?.hasPreviousMonth??!1,ht=st?.effectiveIncomeCents??le,Zt=i?Yn(i):0,bt=st?.netCents??le-Zt,be=ht-u.totalCents,Kt=ze-u.totalCents,Ke=u.totalCents>0?`${(ze/u.totalCents*100).toFixed(1)} %`:"-",Ye=K<0?"danger":K>0?"budget-under":"",Je=bt<0?"danger":bt>0?"budget-under":"",nt=be<0?"danger":be>0?"budget-under":"",at=o?o.months.reduce((a,x)=>a+x.incomes.reduce((q,Z)=>q+(Rn(Z.incomeSource)?Z.amountCents:0),0),0):0,zt=o?o.months.reduce((a,x)=>a+x.incomes.reduce((q,Z)=>q+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,Dt=o?o.months.reduce((a,x)=>a+x.incomes.reduce((q,Z)=>q+(Z.incomeSource==="fresh"?Z.amountCents:0),0),0):0,yt=o&&Ft?Ae.get(ve(o.year,Ft.month))?.carriedFromPreviousCents??0:0,Mt=at+yt,pt=Mt-v.totalCents,en=zt-v.totalCents,Ie=v.totalCents>0?`${(zt/v.totalCents*100).toFixed(1)} %`:"-",Re=yt<0?"danger":yt>0?"budget-under":"",et=pt<0?"danger":pt>0?"budget-under":"",Me=P+O+A+W+R,Fe=P+O,qt=u.foodCents+u.goingOutCents,bn=Fe-qt,yn=H(qt,Fe),_e=Y+U+re+xe+He,rt=ht-Me,it=Mt-_e,_t=Me-u.totalCents,Cn=_e-v.totalCents,Te=a=>a<0?"danger":a>0?"budget-under":"",tn=(a,x)=>x<=0?"muted":a>=x?"budget-under":"danger",Rt=tn(ze,u.totalCents),xn=tn(zt,v.totalCents),ce=(a,x)=>{if(x<=0)return"0%";const Z=Math.max(0,a)/x*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},kn=(a,x)=>{if(x<=0)return a>0?100:0;const q=Math.max(0,a)/x*100;return Math.max(0,q)},Jn=[{label:"Essen",budgetCents:P,actualCents:u.foodCents},{label:"Ausgehen",budgetCents:O,actualCents:u.goingOutCents},{label:"Fixkosten",budgetCents:A,actualCents:u.fixedCents},{label:"Variable",budgetCents:W,actualCents:u.variableCents},{label:"Sonstige",budgetCents:R,actualCents:u.miscCents}];Math.max(1,...Jn.flatMap(a=>[a.budgetCents,a.actualCents]));const Vt=(a,x)=>x<=0?"bar-positive":a<=0||x>a?"bar-negative":"bar-positive",Xn=[{label:"Einkommen gesamt",valueCents:ht,className:"bar-income"},{label:"Budget gesamt",valueCents:Me,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:u.totalCents,className:"bar-expense"},{label:"Netto",valueCents:be,className:be<0?"bar-negative":"bar-positive"}],Qn=Math.max(1,...Xn.map(a=>Math.abs(a.valueCents))),xs=o?o.months.slice().sort((a,x)=>a.month-x.month).map(a=>{const x=a.foodBudgetCents??0,q=a.goingOutBudgetCents??0,Z=a.fixedBudgetCents??a.fixedCosts.reduce((on,$n)=>on+$n.plannedCents,0),Se=a.variableBudgetCents??a.variablePositions.reduce((on,$n)=>on+$n.budgetCents,0),Qe=a.miscBudgetCents??0,Lt=x+q+Z+Se+Qe;return{month:a.month,foodBudgetCents:x,goingOutBudgetCents:q,fixedBudgetCents:Z,variableBudgetCents:Se,miscBudgetCents:Qe,totalBudgetCents:Lt}}):[],_=new Map(xs.map(a=>[a.month,a])),D=a=>{if(a.length===0)return null;const x=Math.min(...a),q=Math.max(...a),Z=Math.round(a.reduce((Se,Qe)=>Se+Qe,0)/a.length);return{min:x,avg:Z,max:q}},Xe=o&&o.year===At()?$.filter(a=>a.month<=Jt()):$,pa=Xe.map(a=>a.summary.foodCents),_a=Xe.map(a=>a.summary.goingOutCents),ks=Xe.map(a=>a.summary.fixedCents),Ja=Xe.map(a=>a.summary.variableCents),ws=Xe.map(a=>a.summary.miscCents),Xa=Xe.map(a=>a.summary.totalCents),Qa=Xe.map(a=>o?Ae.get(ve(o.year,a.month))?.plannedBudgetCents??0:0),qs=Xe.map(a=>o?Ae.get(ve(o.year,a.month))?.netCents??0:0),Ta=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((x,q)=>x+(q.incomeSource==="salary"?q.amountCents:0),0)])),fa=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((x,q)=>x+(q.incomeSource==="salary"||q.incomeSource==="fresh"?q.amountCents:0),0)])),Za=Xe.map(a=>Ta.get(a.month)??0),es=Xe.map(a=>fa.get(a.month)??0),Wt={food:D(pa),goingOut:D(_a),fixed:D(ks),variable:D(Ja),misc:D(ws),total:D(Xa),salary:D(Za),income:D(es),budget:D(Qa),net:D(qs)},Rs=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],nn={food:pa.reduce((a,x)=>a+x,0),goingOut:_a.reduce((a,x)=>a+x,0),fixed:ks.reduce((a,x)=>a+x,0),variable:Ja.reduce((a,x)=>a+x,0),misc:ws.reduce((a,x)=>a+x,0),total:Xa.reduce((a,x)=>a+x,0),salary:Za.reduce((a,x)=>a+x,0),income:es.reduce((a,x)=>a+x,0),budget:Qa.reduce((a,x)=>a+x,0)},Pa=Rs.map(({key:a,label:x})=>{const q=Wt.food?.[a]??null,Z=Wt.goingOut?.[a]??null,Se=Wt.fixed?.[a]??null,Qe=Wt.variable?.[a]??null,Lt=Wt.misc?.[a]??null,on=Wt.total?.[a]??null,$n=Wt.salary?.[a]??null,ft=Wt.income?.[a]??null,ga=Wt.budget?.[a]??null,Da=Wt.net?.[a]??null,Tt=Dn=>Dn===null?"-":f(Dn);return`<tr>
                  <td><strong>${x}</strong></td>
                  <td>${Tt(q)}</td>
                  <td>${Tt(Z)}</td>
                  <td>${Tt(Se)}</td>
                  <td>${Tt(Qe)}</td>
                  <td>${Tt(Lt)}</td>
                  <td>${Tt(on)}</td>
                  <td>${Tt($n)}</td>
                  <td>${Tt(ft)}</td>
                  <td>${Tt(ga)}</td>
                  <td>${Tt(Da)}</td>
                </tr>`}).join(""),an=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(nn.food)}</td>
                  <td>${f(nn.goingOut)}</td>
                  <td>${f(nn.fixed)}</td>
                  <td>${f(nn.variable)}</td>
                  <td>${f(nn.misc)}</td>
                  <td>${f(nn.total)}</td>
                  <td>${f(nn.salary)}</td>
                  <td>${f(nn.income)}</td>
                  <td>${f(nn.budget)}</td>
                  <td>-</td>
                </tr>`,We=Math.max(1,...$.flatMap(a=>{const x=_.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,x??0]})),va=Math.max(1,...$.flatMap(a=>{const x=_.get(a.month),q=a.summary.foodCents+a.summary.goingOutCents,Z=(x?.foodBudgetCents??0)+(x?.goingOutBudgetCents??0);return[q,Z]})),An=Math.max(1,...$.flatMap(a=>{const x=_.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,x]})),$s=Math.max(1,...$.flatMap(a=>{const x=_.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,x]})),Aa=Math.max(1,...$.flatMap(a=>{const x=_.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,x]})),ts=H(u.fixedCents,A),In=H(u.foodCents,P),ns=H(u.goingOutCents,O),On=H(u.variableCents,W),sn=H(u.miscCents,R),Fn=a=>a===0?"-":f(a),e=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(A)}</div>
        <div class="compact-cost-actual ${ts}">${Fn(u.fixedCents)}</div>
      </div>`,t=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(W)}</div>
        <div class="compact-cost-actual ${On}">${Fn(u.variableCents)}</div>
      </div>`,n=i?i.fixedCosts.length>0?i.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${gt(a.name)}</div>
                  <div class="compact-cost-budget">${f(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${H(a.actualCents,a.plannedCents)}">${Fn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,s=i?i.variablePositions.length>0?i.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${gt(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${H(a.actualCents,a.budgetCents)}">${Fn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,r=h.editingFixedTemplateId?h.fixedTemplates.find(a=>a.id===h.editingFixedTemplateId):null,l=h.hasUnexportedChanges,c=h.unexportedChangeLog.slice().reverse(),d=h.persistentAuditLog.slice().sort((a,x)=>x.timestampIso.localeCompare(a.timestampIso)),k=h.lastBackupFileName?gt(h.lastBackupFileName):"-",E={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},m=h.years.slice().sort((a,x)=>a.year-x.year),b=m.some(a=>a.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??m[m.length-1]?.year??null,g=typeof b=="number"?m.find(a=>a.year===b):void 0,w=g?g.months.slice().sort((a,x)=>a.month-x.month):[],y=g?cn(g):E,C=g?sa(g):{salaryIncomeCents:0,freshIncomeCents:0},M=C.salaryIncomeCents+C.freshIncomeCents,T=C.salaryIncomeCents,S=g?zn(g):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},I=g?Xt(g):0,L=g?ra(g,Ae):0,V=I+L,j=g?g.months.reduce((a,x)=>a+Yn(x),0):0,N=V-j,J=V-y.totalCents,G=[{label:"Essen",budgetCents:S.foodCents,actualCents:y.foodCents},{label:"Ausgehen",budgetCents:S.goingOutCents,actualCents:y.goingOutCents},{label:"Fixkosten",budgetCents:S.fixedCents,actualCents:y.fixedCents},{label:"Variable",budgetCents:S.variableCents,actualCents:y.variableCents},{label:"Sonstige",budgetCents:S.miscCents,actualCents:y.miscCents}],F=w.map(a=>{const x=g?Ae.get(ve(g.year,a.month)):void 0,q=Nt(a),Z=a.incomes.reduce((Dn,Zn)=>Dn+(Zn.incomeSource==="salary"?Zn.amountCents:0),0),Se=a.incomes.reduce((Dn,Zn)=>Dn+(Rn(Zn.incomeSource)?Zn.amountCents:0),0),Qe=x?.effectiveIncomeCents??Se,Lt=x?.plannedBudgetCents??Yn(a),on=q.foodCents,$n=q.goingOutCents,ft=on+$n,ga=q.totalCents,Da=Qe-Lt,Tt=Qe-ga;return{month:a.month,salaryIncomeCents:Z,incomeCents:Se,foodCents:on,goingOutCents:$n,foodAndGoingOutCents:ft,effectiveIncomeCents:Qe,plannedBudgetCents:Lt,actualCostCents:ga,plannedNetCents:Da,actualNetCents:Tt}}),X=Math.max(1,...F.map(a=>a.actualCostCents)),fe=Math.max(1,...F.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),ye=Math.max(1,...F.map(a=>a.foodAndGoingOutCents)),ae=Math.max(1,...F.map(a=>a.foodCents)),ue=Math.max(1,...F.map(a=>a.goingOutCents)),Ce=F.map((a,x,q)=>{const Z=x>0?q[x-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Oe(a.month),monthShortLabel:Oe(a.month).slice(0,3),deltaCents:a.plannedNetCents-Z}}),tt=Ce[Ce.length-1]??null,Ge=Math.min(0,...Ce.map(a=>a.plannedNetCents)),rn=Math.max(0,...Ce.map(a=>a.plannedNetCents)),Ia=Math.max(1,rn-Ge),as=720,Ss=320,Es=18,Vs=18,Rr=38,Oa=56,tr=as-Oa-Vs,js=Ss-Es-Rr,Vr=a=>{if(Ce.length<=1)return Oa+tr/2;const x=a/(Ce.length-1);return Oa+x*tr},Ys=a=>Es+(rn-a)/Ia*js,wn=Ce.map((a,x)=>{const q=Vr(x),Z=Ys(a.plannedNetCents);return{...a,x:q,y:Z,leftPercent:q/as*100,topPercent:Z/Ss*100}}),zs=wn.map((a,x)=>`${x===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),nr=wn.length>0?`${zs} L ${wn[wn.length-1]?.x.toFixed(1)} ${(Es+js).toFixed(1)} L ${wn[0]?.x.toFixed(1)} ${(Es+js).toFixed(1)} Z`:"",ar=5,jr=Array.from({length:ar},(a,x)=>{const q=x/(ar-1),Z=rn-q*Ia;return{valueCents:Math.round(Z/100)*100,y:Ys(Z)}}),sr=Ys(0),Yr=Ce[0]?.plannedNetCents??0,Fa=(Ce[Ce.length-1]?.plannedNetCents??0)-Yr,zr=Fa<0?"trend-badge-negative":Fa>0?"trend-badge-positive":"trend-badge-neutral",rr=Fa<0?"↘":Fa>0?"↗":"→",Wr=Fa<0?"Abwärtstrend":Fa>0?"Aufwärtstrend":"Seitwärts",ma=m.reduce((a,x)=>{const q=zn(x);return{foodCents:a.foodCents+q.foodCents,goingOutCents:a.goingOutCents+q.goingOutCents,fixedCents:a.fixedCents+q.fixedCents,variableCents:a.variableCents+q.variableCents,miscCents:a.miscCents+q.miscCents,totalCents:a.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),jt=m.reduce((a,x)=>{const q=cn(x);return{foodCents:a.foodCents+q.foodCents,goingOutCents:a.goingOutCents+q.goingOutCents,fixedCents:a.fixedCents+q.fixedCents,variableCents:a.variableCents+q.variableCents,miscCents:a.miscCents+q.miscCents,totalCents:a.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Gr=m.reduce((a,x)=>a+Xt(x),0),Ur=m[0]?ra(m[0],Ae):0,ir=Gr+Ur,or=ir-ma.totalCents,lr=ir-jt.totalCents,cr=[{label:"Essen",budgetCents:ma.foodCents,actualCents:jt.foodCents},{label:"Ausgehen",budgetCents:ma.goingOutCents,actualCents:jt.goingOutCents},{label:"Fixkosten",budgetCents:ma.fixedCents,actualCents:jt.fixedCents},{label:"Variable",budgetCents:ma.variableCents,actualCents:jt.variableCents},{label:"Sonstige",budgetCents:ma.miscCents,actualCents:jt.miscCents}],ur=Math.max(1,...cr.flatMap(a=>[a.budgetCents,a.actualCents])),Ws=[{label:"Essen & Ausgehen",actualCents:jt.foodCents+jt.goingOutCents},{label:"Fixkosten",actualCents:jt.fixedCents},{label:"Variable",actualCents:jt.variableCents},{label:"Sonstige",actualCents:jt.miscCents}],Hr=Math.max(1,...Ws.map(a=>a.actualCents)),ke=m.map(a=>{const x=cn(a),q=zn(a),Z=Xt(a),Se=sa(a),Qe=ra(a,Ae),Lt=Z+Qe;return{year:a.year,salaryIncomeCents:Se.salaryIncomeCents,freshIncomeCents:Se.freshIncomeCents,totalIncomeCents:Se.salaryIncomeCents+Se.freshIncomeCents,foodAndGoingOutCents:x.foodCents+x.goingOutCents,fixedCents:x.fixedCents,variableCents:x.variableCents,miscCents:x.miscCents,budgetTotalCents:q.totalCents,actualTotalCents:x.totalCents,effectiveIncomeCents:Lt,plannedNetCents:Lt-q.totalCents,actualNetCents:Lt-x.totalCents}}),Jr=ke.reduce((a,x)=>a+x.totalIncomeCents,0),Xr=ke.reduce((a,x)=>a+x.salaryIncomeCents,0),dr=Math.max(1,...ke.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Qr=Math.max(1,...ke.map(a=>a.actualTotalCents)),Zr=Math.max(1,...ke.map(a=>a.totalIncomeCents)),ei=Math.max(1,...ke.map(a=>a.salaryIncomeCents)),hr=Math.max(1,...ke.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),pr=Math.max(1,...ke.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),ti=Math.max(1,...ke.map(a=>a.foodAndGoingOutCents)),ni=Math.max(1,...ke.map(a=>a.fixedCents)),ai=Math.max(1,...ke.map(a=>a.variableCents)),si=Math.max(1,...ke.map(a=>a.miscCents)),ri=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${m.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${m.map(a=>`<option value="${a.year}" ${a.year===b?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${g?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(M)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(T)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(j)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(y.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Te(N)}">${f(N)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Te(J)}">${f(J)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${rr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${zr}">${rr} ${Wr}</span>
                    </div>
                  </header>
                  ${tt?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${gt(tt.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${Te(tt.plannedNetCents)}" data-year-trend-active-net>${f(tt.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(tt.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(tt.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${Te(tt.deltaCents)}" data-year-trend-active-delta>${tt.deltaCents>=0?"+":""}${f(tt.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${as} ${Ss}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${g?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${jr.map(a=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${Oa}" y1="${a.y.toFixed(1)}" x2="${as-Vs}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${Oa-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${f(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${Oa}" y1="${sr.toFixed(1)}" x2="${as-Vs}" y2="${sr.toFixed(1)}"></line>
                              ${nr?`<path class="year-trend-area" d="${nr}"></path>`:""}
                              ${zs?`<path class="year-trend-line" d="${zs}"></path>`:""}
                              ${wn.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${Ss-12}" text-anchor="middle">${gt(a.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${wn.map((a,x)=>`
                                    <button
                                      class="year-trend-point-hit ${x===wn.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${a.leftPercent.toFixed(2)}%; top:${a.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${x===wn.length-1?"1":"0"}"
                                      data-month-label="${gt(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${gt(a.monthLabel)}: Kalkulierter Saldo ${f(a.plannedNetCents)}, Einkommen ${f(a.effectiveIncomeCents)}, Ausgaben ${f(a.actualCostCents)}"
                                      aria-pressed="${x===wn.length-1?"true":"false"}"
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
                    ${G.map(a=>{const x=kn(a.actualCents,a.budgetCents),q=Math.min(100,x),Z=`${x.toFixed(0)}%`,Se=a.budgetCents-a.actualCents,Qe=Se<0?"danger":Se>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Vt(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${q.toFixed(1)}%" title="${a.label}: ${f(a.actualCents)} von ${f(a.budgetCents)}">
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(F.length,1)}, minmax(0, 1fr));">
                    ${F.map(a=>{const x=ce(a.actualCostCents,X);return`
                          <div class="spark-bar" title="${Oe(a.month)}: ${f(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                    ${F.map(a=>{const x=ce(Math.abs(a.plannedNetCents),fe),q=ce(Math.abs(a.actualNetCents),fe),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Se=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Oe(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${x}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Te(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${Te(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  ${F.map(a=>`<tr>
                        <td>${Oe(a.month)}</td>
                    <td>${f(a.salaryIncomeCents)}</td>
                    <td>${f(a.incomeCents)}</td>
                        <td>${f(a.plannedBudgetCents)}</td>
                        <td>${f(a.actualCostCents)}</td>
                        <td class="${Te(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${Te(a.actualNetCents)}">${f(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${m.map(a=>`<option value="${a.year}" ${a.year===b?"selected":""}>${a.year}</option>`).join("")}
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
                    ${F.map(a=>{const x=ce(a.foodAndGoingOutCents,ye);return`
                          <div class="spark-bar" title="${Oe(a.month)}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(F.length,1)}, minmax(0, 1fr));">
                    ${F.map(a=>{const x=ce(a.foodCents,ae);return`
                          <div class="spark-bar" title="${Oe(a.month)}: ${f(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(F.length,1)}, minmax(0, 1fr));">
                    ${F.map(a=>{const x=ce(a.goingOutCents,ue);return`
                          <div class="spark-bar" title="${Oe(a.month)}: ${f(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(Jr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(Xr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(ma.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(jt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Te(or)}">${f(or)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Te(lr)}">${f(lr)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${Ws.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${f(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(jt.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${cr.map(a=>{const x=ce(a.budgetCents,ur),q=ce(a.actualCents,ur),Z=Vt(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${f(a.budgetCents)} | Ist: ${f(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${x}"></div>
                              <div class="bar-marker" style="left:${x}" aria-hidden="true"></div>
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
                    ${Ws.map(a=>{const x=ce(a.actualCents,Hr);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Ist: ${f(a.actualCents)}">
                              <div class="bar bar-expense" style="width:${x}"></div>
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
                    ${ke.map(a=>{const x=ce(a.actualTotalCents,Qr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
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
                    ${ke.map(a=>{const x=ce(Math.abs(a.plannedNetCents),dr),q=ce(Math.abs(a.actualNetCents),dr),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Se=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${x}; opacity: 0.35;"></div>
                              <div class="bar ${Se}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Te(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${Te(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                    ${ke.map(a=>{const x=ce(a.foodAndGoingOutCents,ti);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
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
                    ${ke.map(a=>{const x=ce(a.fixedCents,ni);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.fixedCents)} €</span></div>
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
                    ${ke.map(a=>{const x=ce(a.variableCents,ai);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.variableCents)} €</span></div>
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
                    ${ke.map(a=>{const x=ce(a.miscCents,si);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.miscCents)} €</span></div>
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
                        <td class="${Te(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${Te(a.actualNetCents)}">${f(a.actualNetCents)}</td>
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
                    ${ke.map(a=>{const x=ce(a.totalIncomeCents,Zr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.totalIncomeCents)} €</span></div>
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
                    ${ke.map(a=>{const x=ce(a.salaryIncomeCents,ei);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${x}"><span class="spark-bar-fill-value">${f(a.salaryIncomeCents)} €</span></div>
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
                    ${ke.map(a=>{const x=ce(a.totalIncomeCents,hr),q=ce(a.actualTotalCents,hr);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${f(a.totalIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${x}"></div>
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
                    ${ke.map(a=>{const x=ce(a.salaryIncomeCents,pr),q=ce(a.actualTotalCents,pr);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${f(a.salaryIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${x}"></div>
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
    `,ii=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,oi=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${r?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${r?St(r.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${r?"Änderung speichern":"Vorlage speichern"}</button>
          ${r?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,fr=h.annualVariableFixedTemplates.reduce((a,x)=>a+x.plannedCents,0),li=Math.round(fr/12),ci=`
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
                <div class="eval-value budget-under">${f(fr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(li)}</div>
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
            ${h.annualVariableFixedTemplates.map(a=>{const x=pn(a.dueDateIso),q=x?Oe(x.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${q}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Gt=h.evaluationCurrentResult,ui=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${gt(h.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${Gt&&Gt.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${Gt?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${gt(Gt.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${Gt.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${f(Gt.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${f(Gt.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${f(Gt.monthAverageCents)}</div>
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
                  ${Gt.yearRows.length>0?Gt.yearRows.map(a=>`<tr>
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
                  ${Gt.monthRows.length>0?Gt.monthRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${Oe(a.month)}</td>
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
                      <strong>${gt(a.keyword)}</strong>
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
                        ${a.yearRows.length>0?a.yearRows.map(x=>`<tr>
                                <td>${x.year}</td>
                                <td>${x.hitCount}</td>
                                <td>${f(x.totalCents)}</td>
                                <td>${x.monthsWithHits}</td>
                                <td>${f(x.monthAverageCents)}</td>
                              </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                      </tbody>
                    </table>
                  </article>
                `).join("")}
      </div>
    `,vr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",di=h.topModal==="years"?ii:h.topModal==="fixed"?oi:h.topModal==="variable-fixed"?ci:h.topModal==="dashboard"?ri:h.topModal==="evaluation"?ui:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${l?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Kr.map(a=>`<option value="${a}" ${h.theme===a?"selected":""}>${_i(a)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${vr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${vr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${di}
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
                  ${c.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${c.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${gt(a.message)}</span></li>`).join("")}</ol>`}
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
                  ${d.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${d.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${gt(a.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Oe(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(a,x)=>x+1).map(a=>`<option value="${a}" ${a===h.selectedMonth?"selected":""}>${Oe(a)}</option>`).join("")}
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
                <strong>${f(qe)}</strong>
              </div>
              <div class="compact-income-row ${Ye}">
                <span>Übernahme aus Vormonat</span>
                <strong>${$t?f(K):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(ht)}</strong>
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
                  ${n}
                  ${e}
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
                  ${s}
                  ${t}
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
                    <div class="compact-cost-budget">${f(Fe)}</div>
                    <div class="compact-cost-actual ${yn}">${Fn(qt)}</div>
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
                    <div class="compact-cost-budget">${f(R)}</div>
                    <div class="compact-cost-actual ${sn}">${Fn(u.miscCents)}</div>
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
                  ${Jn.map(a=>`
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
                  ${Xn.map(a=>{const x=ce(Math.abs(a.valueCents),Qn),q=a.valueCents>=0?"+":"",Z=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${f(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${x}"></div>
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
                      ${$.map(a=>{const x=_.get(a.month)?.totalBudgetCents??0,q=ce(x,We),Z=ce(a.summary.totalCents,We);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(a.summary.totalCents)} € | Budget ${f(x)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                      ${$.map(a=>{const x=_.get(a.month),q=(x?.foodBudgetCents??0)+(x?.goingOutBudgetCents??0),Z=a.summary.foodCents+a.summary.goingOutCents,Se=ce(q,va),Qe=ce(Z,va);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(Z)} € | Budget ${f(q)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Se}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Qe}"><span class="spark-bar-fill-value">${f(Z)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                      ${$.map(a=>{const x=_.get(a.month)?.fixedBudgetCents??0,q=ce(x,An),Z=ce(a.summary.fixedCents,An);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(a.summary.fixedCents)} € | Budget ${f(x)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                      ${$.map(a=>{const x=_.get(a.month)?.variableBudgetCents??0,q=ce(x,$s),Z=ce(a.summary.variableCents,$s);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(a.summary.variableCents)} € | Budget ${f(x)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                      ${$.map(a=>{const x=_.get(a.month)?.miscBudgetCents??0,q=ce(x,Aa),Z=ce(a.summary.miscCents,Aa);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(a.summary.miscCents)} € | Budget ${f(x)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Oe(a.month).slice(0,3)}</div>
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
                    <div class="eval-value">${f(at)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(ze)}</div>
                    <div class="eval-value">${f(zt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(qe)}</div>
                    <div class="eval-value">${f(Dt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ye}">${$t?f(K):"-"}</div>
                    <div class="eval-value ${Re}">${o?f(yt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(ht)}</div>
                    <div class="eval-value">${f(Mt)}</div>
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
                    <div class="eval-value">${Ot(O,u.goingOutCents)}</div>
                    <div class="eval-value">${f(U)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Ot(A,u.fixedCents)}</div>
                    <div class="eval-value">${f(re)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Ot(W,u.variableCents)}</div>
                    <div class="eval-value">${f(xe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Ot(R,u.miscCents)}</div>
                    <div class="eval-value">${f(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Ot(Me,u.totalCents)}</div>
                    <div class="eval-value">${f(_e)}</div>
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
                    <div class="eval-value ${In}">${f(u.foodCents)}</div>
                    <div class="eval-value">${f(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${ns}">${f(u.goingOutCents)}</div>
                    <div class="eval-value">${f(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${ts}">${f(u.fixedCents)}</div>
                    <div class="eval-value">${f(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${On}">${f(u.variableCents)}</div>
                    <div class="eval-value">${f(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${sn}">${f(u.miscCents)}</div>
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
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budget übrig</div>
                    <div class="eval-value ${Te(_t)}">${f(_t)}</div>
                    <div class="eval-value ${Te(Cn)}">${f(Cn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Te(rt)}">${f(rt)}</div>
                    <div class="eval-value ${Te(it)}">${f(it)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${nt}">${f(be)}</div>
                    <div class="eval-value ${et}">${f(pt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${Te(Kt)}">${f(Kt)}</div>
                    <div class="eval-value ${Te(en)}">${f(en)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Rt}">${Ke}</div>
                    <div class="eval-value ${xn}">${Ie}</div>
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
                ${$.map((a,x,q)=>{const Z=o?Ae.get(ve(o.year,a.month)):void 0,Se=Z?.plannedBudgetCents??0,Qe=Z?.netCents??0,Lt=Ta.get(a.month)??0,on=fa.get(a.month)??0,$n=Qe<0?"danger":Qe>0?"budget-under":"",ft=q[x-1],ga=ft?.summary.foodCents??null,Da=ft?.summary.goingOutCents??null,Tt=ft?.summary.fixedCents??null,Dn=ft?.summary.variableCents??null,Zn=ft?.summary.miscCents??null,mr=ft?.summary.totalCents??null,gr=ft!==void 0?Ta.get(ft.month)??0:null,br=ft!==void 0?fa.get(ft.month)??0:null,yr=o&&ft?Ae.get(ve(o.year,ft.month))?.plannedBudgetCents??0:null,Cr=ga===null?null:a.summary.foodCents-ga,xr=Da===null?null:a.summary.goingOutCents-Da,kr=Tt===null?null:a.summary.fixedCents-Tt,wr=Dn===null?null:a.summary.variableCents-Dn,$r=Zn===null?null:a.summary.miscCents-Zn,Sr=mr===null?null:a.summary.totalCents-mr,Er=gr===null?null:Lt-gr,Br=br===null?null:on-br,Mr=yr===null?null:Se-yr,La=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",_r=Pt=>Pt===null?"muted":Pt>0?"budget-under":Pt<0?"danger":"muted",hi=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",Ln=Pt=>Pt===null?"(Δ -)":`(Δ ${Pt>0?"+":""}${f(Pt)})`,Tr=o&&ft?Ae.get(ve(o.year,ft.month))?.netCents??0:null,Na=Tr===null?null:Qe-Tr,pi=Na===null?"(Δ -)":`(Δ ${Na>0?"+":""}${f(Na)})`,fi=Na===null?"muted":Na<0?"danger":Na>0?"budget-under":"muted";return`<tr>
                  <td>${Oe(a.month)}</td>
                  <td>${f(a.summary.foodCents)} <span class="${La(Cr)}">${Ln(Cr)}</span></td>
                  <td>${f(a.summary.goingOutCents)} <span class="${La(xr)}">${Ln(xr)}</span></td>
                  <td>${f(a.summary.fixedCents)} <span class="${La(kr)}">${Ln(kr)}</span></td>
                  <td>${f(a.summary.variableCents)} <span class="${La(wr)}">${Ln(wr)}</span></td>
                  <td>${f(a.summary.miscCents)} <span class="${La($r)}">${Ln($r)}</span></td>
                  <td>${f(a.summary.totalCents)} <span class="${La(Sr)}">${Ln(Sr)}</span></td>
                  <td>${f(Lt)} <span class="${_r(Er)}">${Ln(Er)}</span></td>
                  <td>${f(on)} <span class="${_r(Br)}">${Ln(Br)}</span></td>
                  <td>${f(Se)} <span class="${hi(Mr)}">${Ln(Mr)}</span></td>
                  <td class="${$n}">${f(Qe)} <span class="${fi}">${pi}</span></td>
                </tr>`}).join("")}
                ${Pa}
                ${an}
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
                    <td class="${Ye}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${St(K)}" />
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
                  <strong>${f(ze)} €</strong>
                </div>
                <div class="column-overview-row ${Ye}">
                  <span>Übernahme Vormonat</span>
                  <strong>${i?`${f(K)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(ht)} €</strong>
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
                ${dn(P,u.foodCents)}
                ${dn(O,u.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(Fe)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(qt)} €</strong>
                  </div>
                  <div class="column-overview-row ${yn}">
                    <span>Diff</span>
                    <strong>${f(bn)} €</strong>
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
                  ${i?i.days.map(a=>{const x=a.foodCents>0,q=a.goingOutCents>0,Z=`${a.isoDate===p?"today-row":""} ${x||q?"day-has-entry":""}`.trim(),Se=`amount-input ${x?"day-input-has-value":""}`.trim(),Qe=`amount-input ${q?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Se}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${St(a.foodCents)}" /></td>
                      <td><input class="${Qe}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${St(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${dn(A,u.fixedCents)}
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
                    <td class="${H(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${St(a.actualCents)}" /></td>
                    <td class="${H(a.actualCents,a.plannedCents)}">${f(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${dn(W,u.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${St(W)}" ${i?"":"disabled"} />
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
                    <td class="${H(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${St(a.actualCents)}" /></td>
                    <td class="${H(a.actualCents,a.budgetCents)}">${f(a.actualCents-a.budgetCents)}</td>
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
              ${dn(R,u.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${St(R)}" ${i?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${k}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),Cs(),Ct(),Ne(),mt()}function Cs(){const o=B.querySelector("#theme-select"),i=B.querySelector("#open-years-modal"),p=B.querySelector("#open-evaluation-modal"),u=B.querySelector("#open-fixed-modal"),v=B.querySelector("#open-variable-fixed-modal"),$=B.querySelector("#open-dashboard-modal"),P=B.querySelector("#panel-modal-close"),O=B.querySelector("#panel-modal-backdrop"),A=B.querySelector("#open-unexported-change-log"),W=B.querySelector("#open-persistent-audit-log"),R=B.querySelector("#unexported-change-log-close"),Y=B.querySelector("#unexported-change-log-backup"),U=B.querySelector("#unexported-change-log-backdrop"),re=B.querySelector("#persistent-audit-log-close"),xe=B.querySelector("#persistent-audit-log-backdrop"),He=B.querySelector("#new-year"),le=B.querySelector("#create-year"),ze=B.querySelector("#evaluation-query"),qe=B.querySelector("#run-evaluation"),Ae=B.querySelector("#save-evaluation"),st=B.querySelector("#year-select"),Ft=B.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;Dr(_)&&Ca(_)}),i?.addEventListener("click",()=>{Ut("years")}),p?.addEventListener("click",()=>{Ut("evaluation")}),u?.addEventListener("click",()=>{Ut("fixed")}),v?.addEventListener("click",()=>{Ut("variable-fixed")}),$?.addEventListener("click",()=>{Ut("dashboard")}),A?.addEventListener("click",()=>{Ht()}),W?.addEventListener("click",()=>{dt()}),R?.addEventListener("click",()=>{xt()}),Y?.addEventListener("click",async()=>{try{await Pn()}catch(_){console.error("Backup-Export fehlgeschlagen",_),ne("Backup konnte nicht exportiert werden.","error")}}),U?.addEventListener("click",_=>{_.target===U&&xt()}),re?.addEventListener("click",()=>{kt()}),xe?.addEventListener("click",_=>{_.target===xe&&kt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const D=_.dataset.dashboardTab;D!=="year"&&D!=="food"&&D!=="all"||(h.dashboardTab=D,te())})});const K=B.querySelector("#dashboard-year-select");K?.addEventListener("change",()=>{const _=Number.parseInt(K.value,10);Number.isInteger(_)&&(h.dashboardYear=_,te())}),P?.addEventListener("click",()=>{Kn()}),O?.addEventListener("click",_=>{_.target===O&&Kn()}),h.topModal&&window.setTimeout(()=>{P?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{R?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{re?.focus()},0),le?.addEventListener("click",async()=>{const _=Number.parseInt(He?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await z(_)}),qe?.addEventListener("click",()=>{Ba(ze?.value??"")}),ze?.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),Ba(ze.value))}),Ae?.addEventListener("click",async()=>{await Ma()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(_=>{_.addEventListener("click",async()=>{const D=_.dataset.removeSavedEvaluation;D&&await ys(D)})}),st?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(st.value,10),h.selectedMonth=Jt(),te()}),Ft?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Ft.value,10),te()});const $t=B.querySelector("#fixed-template-name"),ht=B.querySelector("#fixed-template-amount"),Zt=B.querySelector("#add-fixed-template"),bt=B.querySelector("#cancel-fixed-template-edit"),be=B.querySelector("#annual-variable-fixed-name"),Kt=B.querySelector("#annual-variable-fixed-date"),Ke=B.querySelector("#annual-variable-fixed-amount"),Ye=B.querySelector("#add-annual-variable-fixed-template");Zt?.addEventListener("click",async()=>{const _=$t?.value??"",D=De(ht?.value??"0");await fn(_,D),$t&&($t.value=""),ht&&(ht.value="")}),bt?.addEventListener("click",()=>{vn()}),Ye?.addEventListener("click",async()=>{const _=be?.value??"",D=Kt?.value??"",Xe=De(Ke?.value??"0");await Ks(_,D,Xe),be&&(be.value=""),Kt&&(Kt.value=""),Ke&&(Ke.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const D=_.dataset.removeAnnualVariableFixedTemplate;D&&await mn(D)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const D=_.dataset.editFixedTemplate;D&&Gn(D)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const D=_.dataset.removeFixedTemplate;D&&await $a(D)})}),B.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",D=>{D.preventDefault(),_.blur(),lt(_)}),_.addEventListener("change",async()=>{const D=_.dataset.dayFood;D&&await Ya(D,"foodCents",De(_.value))})}),B.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",D=>{D.preventDefault(),_.blur(),lt(_)}),_.addEventListener("change",async()=>{const D=_.dataset.dayGoing;D&&await Ya(D,"goingOutCents",De(_.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",D=>{D.preventDefault(),_.blur(),lt(_)}),_.addEventListener("change",async()=>{const D=_.dataset.fixedActual;D&&await Mn(D,De(_.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",D=>{D.preventDefault(),_.blur(),lt(_)}),_.addEventListener("change",async()=>{const D=_.dataset.fixedPlanned;D&&await hs(D,De(_.value))})});const Je=B.querySelector("#fixed-budget");Je?.addEventListener("click",_=>{_.preventDefault(),Je.blur(),lt(Je)}),Je?.addEventListener("change",async()=>{await Qt(De(Je.value))});const nt=B.querySelector("#food-budget");nt?.addEventListener("click",_=>{_.preventDefault(),nt.blur(),lt(nt)}),nt?.addEventListener("change",async()=>{await ps(De(nt.value))});const at=B.querySelector("#going-out-budget");at?.addEventListener("click",_=>{_.preventDefault(),at.blur(),lt(at)}),at?.addEventListener("change",async()=>{await Un(De(at.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{As()});const Dt=B.querySelector("#misc-budget");Dt?.addEventListener("click",_=>{_.preventDefault(),Dt.blur(),lt(Dt)}),Dt?.addEventListener("change",async()=>{await Sa(De(Dt.value))});const yt=B.querySelector("#variable-budget");yt?.addEventListener("click",_=>{_.preventDefault(),yt.blur(),lt(yt)}),yt?.addEventListener("change",async()=>{await Wa(De(yt.value))});const Mt=B.querySelector("#variable-position-name"),pt=B.querySelector("#variable-position-budget"),en=B.querySelector("#add-variable-position"),Ie=B.querySelector("#add-variable-position-recurring"),Re=B.querySelector("#import-variable-csv"),et=B.querySelector("#import-variable-csv-input"),Me=B.querySelector("#misc-description"),Fe=B.querySelector("#misc-amount"),qt=B.querySelector("#add-misc"),bn=B.querySelector("#add-misc-recurring"),yn=B.querySelector("#import-misc-csv"),_e=B.querySelector("#import-misc-csv-input"),rt=B.querySelector("#income-description"),it=B.querySelector("#income-source"),_t=B.querySelector("#income-amount"),Cn=B.querySelector("#add-income"),Te=B.querySelector("#add-income-recurring"),tn=B.querySelector("#fixed-cost-name"),Rt=B.querySelector("#fixed-cost-budget"),xn=B.querySelector("#add-fixed-cost"),ce=B.querySelector("#import-fixed-csv"),kn=B.querySelector("#import-fixed-csv-input"),Jn=B.querySelector("#clear-fixed-costs"),Vt=B.querySelector("#carryover-override");Vt?.addEventListener("click",_=>{_.preventDefault(),Vt.blur(),lt(Vt)}),Vt?.addEventListener("change",async()=>{const _=Vt.value;if(!_.trim()){await gn(null);return}await gn(De(_))}),xn?.addEventListener("click",async()=>{const _=De(Rt?.value??"0");await za(tn?.value??"",_),tn&&(tn.value=""),Rt&&(Rt.value="")}),ce?.addEventListener("click",()=>{kn?.click()}),kn?.addEventListener("change",async()=>{const _=kn.files?.[0];if(_){try{await ms(_)}catch(D){console.error("Fixkosten-CSV-Import fehlgeschlagen",D),ne("CSV konnte nicht importiert werden.","error")}kn.value=""}}),Jn?.addEventListener("click",async()=>{await _n()}),en?.addEventListener("click",async()=>{const _=De(pt?.value??"0");await Ga(Mt?.value??"",_,!1),Mt&&(Mt.value=""),pt&&(pt.value="")}),Ie?.addEventListener("click",async()=>{const _=De(pt?.value??"0");await Ga(Mt?.value??"",_,!0),Mt&&(Mt.value=""),pt&&(pt.value="")}),Re?.addEventListener("click",()=>{et?.click()}),et?.addEventListener("change",async()=>{const _=et.files?.[0];if(_){try{await gs(_)}catch(D){console.error("Variable-CSV-Import fehlgeschlagen",D),ne("CSV konnte nicht importiert werden.","error")}et.value=""}}),qt?.addEventListener("click",async()=>{const _=De(Fe?.value??"0");await Ua(Me?.value??"",_,!1),Me&&(Me.value=""),Fe&&(Fe.value="")}),bn?.addEventListener("click",async()=>{const _=De(Fe?.value??"0");await Ua(Me?.value??"",_,!0),Me&&(Me.value=""),Fe&&(Fe.value="")}),yn?.addEventListener("click",()=>{_e?.click()}),_e?.addEventListener("change",async()=>{const _=_e.files?.[0];if(_){try{await ua(_)}catch(D){console.error("Sonstiges-CSV-Import fehlgeschlagen",D),ne("CSV konnte nicht importiert werden.","error")}_e.value=""}}),Cn?.addEventListener("click",async()=>{const _=De(_t?.value??"0"),D=it?.value,Xe=D==="balance"||D==="fresh"||D==="salary"?D:void 0;await Pe(rt?.value??"",_,Xe,!1),rt&&(rt.value=""),_t&&(_t.value=""),it&&(it.value="salary")}),Te?.addEventListener("click",async()=>{const _=De(_t?.value??"0"),D=it?.value,Xe=D==="balance"||D==="fresh"||D==="salary"?D:void 0;await Pe(rt?.value??"",_,Xe,!0),rt&&(rt.value=""),_t&&(_t.value=""),it&&(it.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const D=_.dataset.incomeSource;if(!D)return;const Xe=_.value;await da(D,Xe==="balance"||Xe==="fresh"||Xe==="salary"?Xe:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",D=>{D.preventDefault(),_.blur(),lt(_)}),_.addEventListener("change",async()=>{const D=_.dataset.variablePositionBudget;D&&await fs(D,De(_.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",D=>{D.preventDefault(),_.blur(),lt(_)}),_.addEventListener("change",async()=>{const D=_.dataset.variablePositionActual;D&&await Ea(D,De(_.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const D=_.dataset.removeVariablePosition;D&&await pe(D)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const D=_.dataset.moveVariablePositionNext;D&&await vs(D)})}),B.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const D=_.dataset.removeFixed;D&&await Ue(D)})}),B.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const D=_.dataset.removeIncome;D&&await ha(D)})}),B.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const D=_.dataset.removeMisc;D&&await bs(D)})});const Xn=B.querySelector("#backup-export"),Qn=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Xn?.addEventListener("click",async()=>{await Pn()}),Qn?.addEventListener("change",async()=>{const _=Qn.files?.[0];if(_){try{await Ha(_)}catch(D){console.error("Backup-Import fehlgeschlagen",D),ne("Backup konnte nicht importiert werden.","error")}Qn.value=""}})}return{init:Ds}}const Pi="modulepreload",Ai=function(B){return"/habu26/"+B},Nr={},Ii=function(h,we,Q){let de=Promise.resolve();if(we&&we.length>0){let Ze=function(Ve){return Promise.all(Ve.map(oe=>Promise.resolve(oe).then(ut=>({status:"fulfilled",value:ut}),ut=>({status:"rejected",reason:ut}))))};var ge=Ze;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),he=ie?.nonce||ie?.getAttribute("nonce");de=Ze(we.map(Ve=>{if(Ve=Ai(Ve),Ve in Nr)return;Nr[Ve]=!0;const oe=Ve.endsWith(".css"),ut=oe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ve}"]${ut}`))return;const ot=document.createElement("link");if(ot.rel=oe?"stylesheet":Pi,oe||(ot.as="script"),ot.crossOrigin="",ot.href=Ve,he&&ot.setAttribute("nonce",he),document.head.appendChild(ot),oe)return new Promise((Ne,Ct)=>{ot.addEventListener("load",Ne),ot.addEventListener("error",()=>Ct(new Error(`Unable to preload CSS for ${Ve}`)))})}))}function se(ie){const he=new Event("vite:preloadError",{cancelable:!0});if(he.payload=ie,window.dispatchEvent(he),!he.defaultPrevented)throw ie}return de.then(ie=>{for(const he of ie||[])he.status==="rejected"&&se(he.reason);return h().catch(se)})};function Oi(B={}){const{immediate:h=!1,onNeedRefresh:we,onOfflineReady:Q,onRegistered:de,onRegisteredSW:se,onRegisterError:ge}=B;let ie,he;const Ze=async(oe=!0)=>{await he};async function Ve(){if("serviceWorker"in navigator){if(ie=await Ii(async()=>{const{Workbox:oe}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:oe}},[]).then(({Workbox:oe})=>new oe("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(oe=>{ge?.(oe)}),!ie)return;ie.addEventListener("activated",oe=>{(oe.isUpdate||oe.isExternal)&&window.location.reload()}),ie.addEventListener("installed",oe=>{oe.isUpdate||Q?.()}),ie.register({immediate:h}).then(oe=>{se?se("/habu26/sw.js",oe):de?.(oe)}).catch(oe=>{ge?.(oe)})}}return he=Ve(),Ze}function Fi(){Oi({immediate:!0})}const qr=document.getElementById("app");if(!qr)throw new Error("App-Container nicht gefunden.");Ti(qr).init();Fi();
