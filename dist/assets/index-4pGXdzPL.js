(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const ce of document.querySelectorAll('link[rel="modulepreload"]'))X(ce);new MutationObserver(ce=>{for(const re of ce)if(re.type==="childList")for(const be of re.addedNodes)be.tagName==="LINK"&&be.rel==="modulepreload"&&X(be)}).observe(document,{childList:!0,subtree:!0});function Se(ce){const re={};return ce.integrity&&(re.integrity=ce.integrity),ce.referrerPolicy&&(re.referrerPolicy=ce.referrerPolicy),ce.crossOrigin==="use-credentials"?re.credentials="include":ce.crossOrigin==="anonymous"?re.credentials="omit":re.credentials="same-origin",re}function X(ce){if(ce.ep)return;ce.ep=!0;const re=Se(ce);fetch(ce.href,re)}})();const fi=[1,2,3,4,5,6,7,8,9,10,11,12];function as(){return new Date().toISOString()}function ot(B){const p=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${p}`}function vi(B,p){const Se=new Date(B,p,0).getDate(),X=[];for(let ce=1;ce<=Se;ce+=1){const re=new Date(Date.UTC(B,p-1,ce));X.push({isoDate:re.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return X}function mi(B){return B.map(p=>({id:ot("fixed"),templateId:p.id,name:p.name,plannedCents:p.plannedCents,actualCents:0}))}function Tr(B,p,Se){const X=p.reduce((re,be)=>re+be.plannedCents,0),ce=fi.map(re=>({month:re,days:vi(B,re),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:mi(p),fixedBudgetCents:X,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:as(),templateVersion:Se,months:ce}}function Ws(B,p){return{id:ot("expense"),description:B,amountCents:p,createdAt:as()}}function Pr(B,p,Se){const X={id:ot("income"),description:B,amountCents:p,createdAt:as()};return Se?{...X,incomeSource:Se}:X}function Es(B,p){return B.toLocaleLowerCase("de-DE").includes(p)}function Ar(B,p,Se,X){const ce=p.trim(),re=ce.toLocaleLowerCase("de-DE");if(!re)return{id:ot("search_eval"),keyword:"",keywordNormalized:"",createdAt:as(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let be=0,oe=0,pe=0,et=0,Re=0;const le=Math.max(1,Math.min(12,X)),lt=[],st=[];return B.slice().sort((Ke,yt)=>Ke.year-yt.year).forEach(Ke=>{let yt=0,Qt=0,Kn=0,Zt=0;Ke.months.slice().sort((Ct,ct)=>Ct.month-ct.month).forEach(Ct=>{let ct=0,xt=0;if(Ct.fixedCosts.forEach(ft=>{Es(ft.name,re)&&(ct+=1,xt+=ft.actualCents)}),Ct.variableCosts.forEach(ft=>{Es(ft.description,re)&&(ct+=1,xt+=ft.amountCents)}),Ct.variablePositions.forEach(ft=>{Es(ft.name,re)&&(ct+=1,xt+=ft.actualCents)}),Ct.miscCosts.forEach(ft=>{Es(ft.description,re)&&(ct+=1,xt+=ft.amountCents)}),ct<=0)return;yt+=ct,Qt+=xt,(Ke.year<Se||Ke.year===Se&&Ct.month<=le)&&(Zt+=1,Kn+=xt),be+=ct,oe+=xt,(Ke.year<Se||Ke.year===Se&&Ct.month<=le)&&(et+=1,Re+=xt),st.push({year:Ke.year,month:Ct.month,hitCount:ct,totalCents:xt})}),!(yt<=0)&&(Ke.year===Se&&(pe+=Qt),lt.push({year:Ke.year,hitCount:yt,totalCents:Qt,monthsWithHits:Zt,monthAverageCents:Zt>0?Math.round(Kn/Zt):0}))}),{id:ot("search_eval"),keyword:ce,keywordNormalized:re,createdAt:as(),totalHitCount:be,totalCents:oe,currentYearCents:pe,monthsWithHits:et,monthAverageCents:et>0?Math.round(Re/et):0,yearRows:lt,monthRows:st}}var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bi(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var Bs={exports:{}},yi=Bs.exports,Ir;function Ci(){return Ir||(Ir=1,(function(B,p){((Se,X)=>{B.exports=X()})(yi,function(){var Se=function(e,t){return(Se=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},X=function(){return(X=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function ce(e,t,n){for(var s,r=0,o=t.length;r<o;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:gi,be=Object.keys,oe=Array.isArray;function pe(e,t){return typeof t=="object"&&be(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||re.Promise||(re.Promise=Promise);var et=Object.getPrototypeOf,Re={}.hasOwnProperty;function le(e,t){return Re.call(e,t)}function lt(e,t){typeof t=="function"&&(t=t(et(e))),(typeof Reflect>"u"?be:Reflect.ownKeys)(t).forEach(function(n){Ke(e,n,t[n])})}var st=Object.defineProperty;function Ke(e,t,n,s){st(e,t,pe(n&&le(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function yt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Ke(e.prototype,"constructor",e),{extend:lt.bind(null,e.prototype)}}}}var Qt=Object.getOwnPropertyDescriptor,Kn=[].slice;function Zt(e,t,n){return Kn.call(e,t,n)}function Ct(e,t){return t(e)}function ct(e){if(!e)throw new Error("Assertion Failed")}function xt(e){re.setImmediate?setImmediate(e):setTimeout(e,0)}function zt(e,t){if(typeof t=="string"&&le(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var o=zt(e,t[s]);n.push(o)}return n}var c,h=t.indexOf(".");return h===-1||(c=e[t.substr(0,h)])==null?void 0:zt(c,t.substr(h+1))}function pt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){ct(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)pt(e,t[s],n[s])}else{var o,c,h=t.indexOf(".");h!==-1?(o=t.substr(0,h),(h=t.substr(h+1))===""?n===void 0?oe(e)&&!isNaN(parseInt(o))?e.splice(o,1):delete e[o]:e[o]=n:pt(c=(c=e[o])&&le(e,o)?c:e[o]={},h,n)):n===void 0?oe(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function ft(e){var t,n={};for(t in e)le(e,t)&&(n[t]=e[t]);return n}var Ts=[].concat;function Ya(e){return Ts.apply([],e)}var At="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ya([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return re[e]}),ss=new Set(At.map(function(e){return re[e]})),ea=null;function kt(e){return ea=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=ea.get(n);if(s)return s;if(oe(n)){s=[],ea.set(n,s);for(var r=0,o=n.length;r<o;++r)s.push(t(n[r]))}else if(ss.has(n.constructor))s=n;else{var c,h=et(n);for(c in s=h===Object.prototype?{}:Object.create(h),ea.set(n,s),n)le(n,c)&&(s[c]=t(n[c]))}return s})(e),ea=null,e}var ta={}.toString;function za(e){return ta.call(e).slice(8,-1)}var Wa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ps=typeof Wa=="symbol"?function(e){var t;return e!=null&&(t=e[Wa])&&t.apply(e)}:function(){return null};function dn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var rt={};function te(e){var t,n,s,r;if(arguments.length===1){if(oe(e))return e.slice();if(this===rt&&typeof e=="string")return[e];if(r=Ps(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var en=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},At=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Bt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(At),rs={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function En(e,t){this.name=e,this.message=t}function is(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function vt(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=is(e,t)}function qn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=is(e,this.failures)}yt(En).from(Error).extend({toString:function(){return this.name+": "+this.message}}),yt(vt).from(En),yt(qn).from(En);var ga=Bt.reduce(function(e,t){return e[t]=t+"Error",e},{}),As=En,ee=Bt.reduce(function(e,t){var n=t+"Error";function s(r,o){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(o?`
 `+o:""),this.inner=o||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=rs[t]||n,this.inner=null)}return yt(s).from(As),e[t]=s,e},{}),os=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,At.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));At=Bt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function Ee(){}function na(e){return e}function Is(e,t){return e==null||e===na?t:function(n){return t(e(n))}}function Bn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ls(e,t){return e===Ee?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,o=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Bn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?Bn(r,this.onerror):r),o!==void 0?o:n}}function Os(e,t){return e===Ee?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Bn(n,this.onsuccess):n),s&&(this.onerror=this.onerror?Bn(s,this.onerror):s)}}function cs(e,t){return e===Ee?t:function(r){var s=e.apply(this,arguments),r=(pe(r,s),this.onsuccess),o=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Bn(r,this.onsuccess):r),o&&(this.onerror=this.onerror?Bn(o,this.onerror):o),s===void 0?c===void 0?void 0:c:pe(s,c)}}function Fs(e,t){return e===Ee?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function aa(e,t){return e===Ee?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,o=new Array(r);r--;)o[r]=arguments[r];return n.then(function(){return t.apply(s,o)})}return t.apply(this,arguments)}}At.ModifyError=vt,At.DexieError=En,At.BulkError=qn;var It=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Rn(e){It=e}var Vn={},jn=100,Ae=typeof Promise>"u"?[]:(Bt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ae=crypto.subtle.digest("SHA-512",new Uint8Array([0])),et(Ae),Bt]:[Bt,et(Bt),Bt]),Bt=Ae[0],An=Ae[1],An=An&&An.then,Lt=Bt&&Bt.constructor,Yn=!!Ae[2],hn=function(e,t){ia.push([e,t]),zn&&(queueMicrotask(Wn),zn=!1)},Ga=!0,zn=!0,tn=[],sa=[],ra=na,pn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ee,pgp:!1,env:{},finalize:Ee},U=pn,ia=[],Ot=0,fn=[];function G(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=U;if(typeof e!="function"){if(e!==Vn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ba(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(o){if(s._state===null){if(o===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&mn();o&&typeof o.then=="function"?n(s,function(h,x){o instanceof G?o._then(h,x):o.then(h,x)}):(s._state=!0,s._value=o,We(s)),c&&Mn()}},ba.bind(null,s))}catch(o){ba(s,o)}})(this,e)}var vn={get:function(){var e=U,t=Ca;function n(s,r){var o=this,c=!e.global&&(e!==U||t!==Ca),h=c&&!bn(),x=new G(function($,g){Mt(o,new us(ds(s,e,c,h),ds(r,e,c,h),$,g,e))});return this._consoleTask&&(x._consoleTask=this._consoleTask),x}return n.prototype=Vn,n},set:function(e){Ke(this,"then",e&&e.prototype===Vn?vn:{get:function(){return e},set:vn.set})}};function us(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function ba(e,t){var n,s;sa.push(t),e._state===null&&(n=e._lib&&mn(),t=ra(t),e._state=!1,e._value=t,s=e,tn.some(function(r){return r._value===s._value})||tn.push(s),We(e),n)&&Mn()}function We(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)Mt(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),Ot===0&&(++Ot,hn(function(){--Ot==0&&oa()},[]))}function Mt(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ot,hn(ge,[n,e,t])}}function ge(e,t,n){try{var s,r=t._value;!t._state&&sa.length&&(sa=[]),s=It&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||sa.indexOf(r)!==-1||(o=>{for(var c=tn.length;c;)if(tn[--c]._value===o._value)return tn.splice(c,1)})(t),n.resolve(s)}catch(o){n.reject(o)}finally{--Ot==0&&oa(),--n.psd.ref||n.psd.finalize()}}function Wn(){_n(pn,function(){mn()&&Mn()})}function mn(){var e=Ga;return zn=Ga=!1,e}function Mn(){var e,t,n;do for(;0<ia.length;)for(e=ia,ia=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<ia.length);zn=Ga=!0}function oa(){for(var e=tn,t=(tn=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),fn.slice(0)),n=t.length;n;)t[--n]()}function la(e){return new G(Vn,!1,e)}function ye(e,t){var n=U;return function(){var s=mn(),r=U;try{return yn(n,!0),e.apply(this,arguments)}catch(o){t&&t(o)}finally{yn(r,!1),s&&Mn()}}}lt(G.prototype,{then:vn,_then:function(e,t){Mt(this,new us(null,null,e,t,U))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:la)(s)}):this.then(null,function(s){return(s&&s.name===t?n:la)(s)}))},finally:function(e){return this.then(function(t){return G.resolve(e()).then(function(){return t})},function(t){return G.resolve(e()).then(function(){return la(t)})})},timeout:function(e,t){var n=this;return e<1/0?new G(function(s,r){var o=setTimeout(function(){return r(new ee.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,o))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Ke(G.prototype,Symbol.toStringTag,"Dexie.Promise"),pn.env=Ua(),lt(G,{all:function(){var e=te.apply(null,arguments).map(xa);return new G(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,o){return G.resolve(r).then(function(c){e[o]=c,--s||t(e)},n)})})},resolve:function(e){return e instanceof G?e:e&&typeof e.then=="function"?new G(function(t,n){e.then(t,n)}):new G(Vn,!0,e)},reject:la,race:function(){var e=te.apply(null,arguments).map(xa);return new G(function(t,n){e.map(function(s){return G.resolve(s).then(t,n)})})},PSD:{get:function(){return U},set:function(e){return U=e}},totalEchoes:{get:function(){return Ca}},newPSD:gn,usePSD:_n,scheduler:{get:function(){return hn},set:function(e){hn=e}},rejectionMapper:{get:function(){return ra},set:function(e){ra=e}},follow:function(e,t){return new G(function(n,s){return gn(function(r,o){var c=U;c.unhandleds=[],c.onunhandled=o,c.finalize=Bn(function(){var h,x=this;h=function(){x.unhandleds.length===0?r():o(x.unhandleds[0])},fn.push(function $(){h(),fn.splice(fn.indexOf($),1)}),++Ot,hn(function(){--Ot==0&&oa()},[])},c.finalize),e()},t,n,s)})}}),Lt&&(Lt.allSettled&&Ke(G,"allSettled",function(){var e=te.apply(null,arguments).map(xa);return new G(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,o){return G.resolve(r).then(function(c){return s[o]={status:"fulfilled",value:c}},function(c){return s[o]={status:"rejected",reason:c}}).then(function(){return--n||t(s)})})})}),Lt.any&&typeof AggregateError<"u"&&Ke(G,"any",function(){var e=te.apply(null,arguments).map(xa);return new G(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(o,c){return G.resolve(o).then(function(h){return t(h)},function(h){r[c]=h,--s||n(new AggregateError(r))})})})}),Lt.withResolvers)&&(G.withResolvers=Lt.withResolvers);var Pe={awaits:0,echoes:0,id:0},Ds=0,ca=[],ya=0,Ca=0,Ns=0;function gn(e,c,n,s){var r=U,o=Object.create(r),c=(o.parent=r,o.ref=0,o.global=!1,o.id=++Ns,pn.env,o.env=Yn?{Promise:G,PromiseProp:{value:G,configurable:!0,writable:!0},all:G.all,race:G.race,allSettled:G.allSettled,any:G.any,resolve:G.resolve,reject:G.reject}:{},c&&pe(o,c),++r.ref,o.finalize=function(){--this.parent.ref||this.parent.finalize()},_n(o,e,n,s));return o.ref===0&&o.finalize(),c}function Gn(){return Pe.id||(Pe.id=++Ds),++Pe.awaits,Pe.echoes+=jn,Pe.id}function bn(){return!!Pe.awaits&&(--Pe.awaits==0&&(Pe.id=0),Pe.echoes=Pe.awaits*jn,!0)}function xa(e){return Pe.echoes&&e&&e.constructor===Lt?(Gn(),e.then(function(t){return bn(),t},function(t){return bn(),Je(t)})):e}function Ls(){var e=ca[ca.length-1];ca.pop(),yn(e,!1)}function yn(e,t){var n,s,r=U;(t?!Pe.echoes||ya++&&e===U:!ya||--ya&&e===U)||queueMicrotask(t?(function(o){++Ca,Pe.echoes&&--Pe.echoes!=0||(Pe.echoes=Pe.awaits=Pe.id=0),ca.push(U),yn(o,!0)}).bind(null,e):Ls),e!==U&&(U=e,r===pn&&(pn.env=Ua()),Yn)&&(n=pn.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(re,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function Ua(){var e=re.Promise;return Yn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(re,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function _n(e,t,n,s,r){var o=U;try{return yn(e,!0),t(n,s,r)}finally{yn(o,!1)}}function ds(e,t,n,s){return typeof e!="function"?e:function(){var r=U;n&&Gn(),yn(t,!0);try{return e.apply(this,arguments)}finally{yn(r,!1),s&&queueMicrotask(bn)}}}function Ha(e){Promise===Lt&&Pe.echoes===0?ya===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+An).indexOf("[native code]")===-1&&(Gn=bn=Ee);var Je=G.reject,Tn="￿",nn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",hs="String expected.",Un=[],ka="__dbnames",Pn="readonly",wa="readwrite";function Cn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ps={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function $a(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=kt(t))[e],t}}function fs(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function fe(e,t){try{var n=Ja(e),s=Ja(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=Sa(e),o=Sa(t),c=r.length,h=o.length,x=c<h?c:h,$=0;$<x;++$)if(r[$]!==o[$])return r[$]<o[$]?-1:1;return c===h?0:c<h?-1:1;case"Array":for(var g=e,v=t,w=g.length,k=v.length,b=w<k?w:k,C=0;C<b;++C){var M=fe(g[C],v[C]);if(M!==0)return M}return w===k?0:w<k?-1:1}}catch{}return NaN}function Ja(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=za(e))==="ArrayBuffer")?"binary":t}function Sa(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Ea(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,o){return!n.failures[o]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}vs.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(oe(n))return ce(ce([],oe(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(oe(s))return oe(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var ua=vs;function vs(e){this["@@propmod"]=e}function ms(e,t){for(var n=be(t),s=n.length,r=!1,o=0;o<s;++o){var c=n[o],h=t[c],x=zt(e,c);h instanceof ua?(pt(e,c,h.execute(x)),r=!0):x!==h&&(pt(e,c,h),r=!0)}return r}Fe.prototype._trans=function(e,t,n){var s=this._tx||U.trans,r=this.name,o=It&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c($,g,v){if(v.schema[r])return t(v.idbtrans,v);throw new ee.NotFound("Table "+r+" not part of transaction")}var h=mn();try{var x=s&&s.db._novip===this.db._novip?s===U.trans?s._promise(e,c,n):gn(function(){return s._promise(e,c,n)},{trans:s,transless:U.transless||U}):(function $(g,v,w,k){if(g.idbdb&&(g._state.openComplete||U.letThrough||g._vip)){var b=g._createTransaction(v,w,g._dbSchema);try{b.create(),g._state.PR1398_maxLoop=3}catch(C){return C.name===ga.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return $(g,v,w,k)})):Je(C)}return b._promise(v,function(C,M){return gn(function(){return U.trans=b,k(C,M,b)})}).then(function(C){if(v==="readwrite")try{b.idbtrans.commit()}catch{}return v==="readonly"?C:b._completion.then(function(){return C})})}if(g._state.openComplete)return Je(new ee.DatabaseClosed(g._state.dbOpenError));if(!g._state.isBeingOpened){if(!g._state.autoOpen)return Je(new ee.DatabaseClosed);g.open().catch(Ee)}return g._state.dbReadyPromise.then(function(){return $(g,v,w,k)})})(this.db,e,[this.name],c);return o&&(x._consoleTask=o,x=x.catch(function($){return console.trace($),Je($)})),x}finally{h&&Mn()}},Fe.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Je(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},Fe.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(oe(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=be(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(h){if(h.compound&&t.every(function($){return 0<=h.keyPath.indexOf($)})){for(var x=0;x<t.length;++x)if(t.indexOf(h.keyPath[x])===-1)return!1;return!0}return!1}).sort(function(h,x){return h.keyPath.length-x.keyPath.length})[0];if(n&&this.db._maxKey!==Tn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(h){return e[h]}));!n&&It&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(h,x){return fe(h,x)===0}var c=t.reduce(function(g,x){var $=g[0],g=g[1],v=s[x],w=e[x];return[$||v,$||!v?Cn(g,v&&v.multi?function(k){return k=zt(k,x),oe(k)&&k.some(function(b){return r(w,b)})}:function(k){return r(w,zt(k,x))}):g]},[null,null]),o=c[0],c=c[1];return o?this.where(o.name).equals(e[o.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Fe.prototype.filter=function(e){return this.toCollection().and(e)},Fe.prototype.count=function(e){return this.toCollection().count(e)},Fe.prototype.offset=function(e){return this.toCollection().offset(e)},Fe.prototype.limit=function(e){return this.toCollection().limit(e)},Fe.prototype.each=function(e){return this.toCollection().each(e)},Fe.prototype.toArray=function(e){return this.toCollection().toArray(e)},Fe.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Fe.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,oe(e)?"[".concat(e.join("+"),"]"):e))},Fe.prototype.reverse=function(){return this.toCollection().reverse()},Fe.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof fs&&(e=(c=>{var h=g,x=c;if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");function $(){this.constructor=h}function g(){return c!==null&&c.apply(this,arguments)||this}return Se(h,x),h.prototype=x===null?Object.create(x):($.prototype=x.prototype,new $),Object.defineProperty(g.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),g.prototype.table=function(){return n},g})(e)),new Set),r=e.prototype;r;r=et(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function o(c){if(!c)return c;var h,x=Object.create(e.prototype);for(h in c)if(!s.has(h))try{x[h]=c[h]}catch{}return x}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=o,this.hook("reading",o),e},Fe.prototype.defineClass=function(){return this.mapToClass(function(e){pe(this,e)})},Fe.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,o=s.keyPath,c=e;return o&&r&&(c=$a(o)(e)),this._trans("readwrite",function(h){return n.core.mutate({trans:h,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(h){return h.numFailures?G.reject(h.failures[0]):h.lastResult}).then(function(h){if(o)try{pt(e,o,h)}catch{}return h})},Fe.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(o){var c=o??{};return ms(c,t),s&&pt(c,s,e),n.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(h){return h.numFailures?G.reject(h.failures[0]):!!o})})})},Fe.prototype.update=function(e,t){return typeof e!="object"||oe(e)?this.where(":id").equals(e).modify(t):(e=zt(e,this.schema.primKey.keyPath))===void 0?Je(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Fe.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,o=s.keyPath,c=e;return o&&r&&(c=$a(o)(e)),this._trans("readwrite",function(h){return n.core.mutate({trans:h,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(h){return h.numFailures?G.reject(h.failures[0]):h.lastResult}).then(function(h){if(o)try{pt(e,o,h)}catch{}return h})},Fe.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return Ea(t,[e],s)}).then(function(s){return s.numFailures?G.reject(s.failures[0]):void 0})})},Fe.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:ps}).then(function(n){return Ea(e,null,n)})}).then(function(t){return t.numFailures?G.reject(t.failures[0]):void 0})},Fe.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Fe.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,o=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var h=s.schema.primKey,$=h.auto,h=h.keyPath;if(h&&r)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var x=e.length,$=h&&$?e.map($a(h)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:$,wantResults:o}).then(function(g){var v=g.numFailures,w=g.failures;if(v===0)return o?g.results:g.lastResult;throw new qn("".concat(s.name,".bulkAdd(): ").concat(v," of ").concat(x," operations failed"),w)})})},Fe.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,o=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var h=s.schema.primKey,$=h.auto,h=h.keyPath;if(h&&r)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var x=e.length,$=h&&$?e.map($a(h)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:$,wantResults:o}).then(function(g){var v=g.numFailures,w=g.failures;if(v===0)return o?g.results:g.lastResult;throw new qn("".concat(s.name,".bulkPut(): ").concat(v," of ").concat(x," operations failed"),w)})})},Fe.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),o=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:s,cache:"clone"}).then(function(h){var x=[],$=[],g=(e.forEach(function(v,w){var k=v.key,b=v.changes,C=h[w];if(C){for(var M=0,_=Object.keys(b);M<_.length;M++){var S=_[M],I=b[S];if(S===t.schema.primKey.keyPath){if(fe(I,k)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else pt(C,S,I)}o.push(w),x.push(k),$.push(C)}}),x.length);return n.mutate({trans:c,type:"put",keys:x,values:$,updates:{keys:s,changeSpecs:r}}).then(function(v){var w=v.numFailures,k=v.failures;if(w===0)return g;for(var b=0,C=Object.keys(k);b<C.length;b++){var M,_=C[b],S=o[Number(_)];S!=null&&(M=k[_],delete k[_],k[S]=M)}throw new qn("".concat(t.name,".bulkUpdate(): ").concat(w," of ").concat(g," operations failed"),k)})})})},Fe.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Ea(t,e,r)})}).then(function(s){var r=s.numFailures,o=s.failures;if(r===0)return s.lastResult;throw new qn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),o)})};var Xa=Fe;function Fe(){}function da(e){function t(c,h){if(h){for(var x=arguments.length,$=new Array(x-1);--x;)$[x-1]=arguments[x];return n[c].subscribe.apply(null,$),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=o;for(var s=1,r=arguments.length;s<r;++s)o(arguments[s]);return t;function o(c,h,x){var $,g;if(typeof c!="object")return h=h||Fs,g={subscribers:[],fire:x=x||Ee,subscribe:function(v){g.subscribers.indexOf(v)===-1&&(g.subscribers.push(v),g.fire=h(g.fire,v))},unsubscribe:function(v){g.subscribers=g.subscribers.filter(function(w){return w!==v}),g.fire=g.subscribers.reduce(h,x)}},n[c]=t[c]=g;be($=c).forEach(function(v){var w=$[v];if(oe(w))o(v,$[v][0],$[v][1]);else{if(w!=="asap")throw new ee.InvalidArgument("Invalid event config");var k=o(v,na,function(){for(var b=arguments.length,C=new Array(b);b--;)C[b]=arguments[b];k.subscribers.forEach(function(M){xt(function(){M.apply(null,C)})})})}})}}function Hn(e,t){return yt(t).from({prototype:e}),t}function Jn(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ba(e,t){e.filter=Cn(e.filter,t)}function Qa(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return Cn(s(),t())}:t,e.justLimit=n&&!s}function Ma(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function ne(e,t,n){var s=Ma(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function _a(e,t,n,s){var r,o,c=e.replayFilter?Cn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},o=function(h,x,$){var g,v;c&&!c(x,$,function(w){return x.stop(w)},function(w){return x.fail(w)})||((v=""+(g=x.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(g)),le(r,v))||(r[v]=!0,t(h,x,$))},Promise.all([e.or._iterate(o,n),i(ne(e,s,n),e.algorithm,o,!e.keysOnly&&e.valueMapper)])):i(ne(e,s,n),Cn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function i(e,t,n,s){var r=ye(s?function(o,c,h){return n(s(o),c,h)}:n);return e.then(function(o){if(o)return o.start(function(){var c=function(){return o.continue()};t&&!t(o,function(h){return c=h},function(h){o.stop(h),c=Ee},function(h){o.fail(h),c=Ee})||r(o.value,o,function(h){return c=h}),c()})})}u.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Je.bind(null,n.error)):n.table._trans("readonly",e).then(t)},u.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Je.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},u.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Cn(t.algorithm,e)},u.prototype._iterate=function(e,t){return _a(this._ctx,e,t,this._ctx.table.core)},u.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&pe(n,e),t._ctx=n,t},u.prototype.raw=function(){return this._ctx.valueMapper=null,this},u.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return _a(t,e,n,t.table.core)})},u.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,o=r.table.core;return Jn(r,!0)?o.count({trans:n,query:{index:Ma(r,o.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,_a(r,function(){return++s,!1},n,o).then(function(){return s}))}).then(e)},u.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function o(x,$){return $?o(x[n[$]],$-1):x[s]}var c=this._ctx.dir==="next"?1:-1;function h(x,$){return fe(o(x,r),o($,r))*c}return this.toArray(function(x){return x.sort(h)}).then(t)},u.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,o,c=t._ctx;return c.dir==="next"&&Jn(c,!0)&&0<c.limit?(s=c.valueMapper,r=Ma(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(h){return h=h.result,s?h.map(s):h})):(o=[],_a(c,function(h){return o.push(h)},n,c.table.core).then(function(){return o}))},e)},u.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,Jn(t)?Qa(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):Qa(t,function(){var n=e;return function(){return--n<0}})),this},u.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Qa(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},u.prototype.until=function(e,t){return Ba(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},u.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},u.prototype.last=function(e){return this.reverse().first(e)},u.prototype.filter=function(e){var t;return Ba(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=Cn(t.isMatch,e),this},u.prototype.and=function(e){return this.filter(e)},u.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},u.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},u.prototype.desc=function(){return this.reverse()},u.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},u.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},u.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},u.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},u.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&Jn(t,!0)&&0<t.limit)return this._read(function(s){var r=Ma(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},u.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},u.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},u.prototype.lastKey=function(e){return this.reverse().firstKey(e)},u.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Ba(this._ctx,function(s){var s=s.primaryKey.toString(),r=le(e,s);return e[s]=!0,!r})),this},u.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(C,M){var _=M.failures;w+=C-M.numFailures;for(var S=0,I=be(_);S<I.length;S++){var F=I[S];v.push(_[F])}}var o=typeof e=="function"?e:function(C){return ms(C,e)},c=n.table.core,g=c.schema.primaryKey,h=g.outbound,x=g.extractKey,$=200,g=t.db._options.modifyChunkSize,v=(g&&($=typeof g=="object"?g[c.name]||g["*"]||200:g),[]),w=0,k=[],b=e===d;return t.clone().primaryKeys().then(function(C){function M(S){var I=Math.min($,C.length-S),F=C.slice(S,S+I);return(b?Promise.resolve([]):c.getMany({trans:s,keys:F,cache:"immutable"})).then(function(j){var Y=[],D=[],H=h?[]:null,K=b?F:[];if(!b)for(var L=0;L<I;++L){var J=j[L],me={value:kt(J),primKey:C[S+L]};o.call(me,me.value,me)!==!1&&(me.value==null?K.push(C[S+L]):h||fe(x(J),x(me.value))===0?(D.push(me.value),h&&H.push(C[S+L])):(K.push(C[S+L]),Y.push(me.value)))}return Promise.resolve(0<Y.length&&c.mutate({trans:s,type:"add",values:Y}).then(function(Ce){for(var ae in Ce.failures)K.splice(parseInt(ae),1);r(Y.length,Ce)})).then(function(){return(0<D.length||_&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:H,values:D,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(Ce){return r(D.length,Ce)})}).then(function(){return(0<K.length||_&&b)&&c.mutate({trans:s,type:"delete",keys:K,criteria:_,isAdditionalChunk:0<S}).then(function(Ce){return Ea(n.table,K,Ce)}).then(function(Ce){return r(K.length,Ce)})}).then(function(){return C.length>S+I&&M(S+$)})})}var _=Jn(n)&&n.limit===1/0&&(typeof e!="function"||b)&&{index:n.index,range:n.range};return M(0).then(function(){if(0<v.length)throw new vt("Error modifying one or more objects",v,w,k);return C.length})})})},u.prototype.delete=function(){var e=this._ctx,t=e.range;return!Jn(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(d):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(o){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(x){var h=x.failures,x=x.numFailures;if(x)throw new vt("Could not delete some values",Object.keys(h).map(function($){return h[$]}),o-x);return o-x})})})};var l=u;function u(){}var d=function(e,t){return t.value=null};function m(e,t){return e<t?-1:e===t?0:1}function E(e,t){return t<e?-1:e===t?0:1}function P(e,t,n){return e=e instanceof Q?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function O(e){return new e.Collection(e,function(){return V("")}).limit(0)}function A(k,t,n,s){var r,o,c,h,x,$,g,v=n.length;if(!n.every(function(C){return typeof C=="string"}))return P(k,hs);function w(C){r=C==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},o=C==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=C==="next"?m:E;var M=n.map(function(_){return{lower:o(_),upper:r(_)}}).sort(function(_,S){return c(_.lower,S.lower)});h=M.map(function(_){return _.upper}),x=M.map(function(_){return _.lower}),g=($=C)==="next"?"":s}w("next");var k=new k.Collection(k,function(){return z(h[0],x[v-1]+s)}),b=(k._ondirectionchange=function(C){w(C)},0);return k._addAlgorithm(function(C,M,_){var S=C.key;if(typeof S=="string"){var I=o(S);if(t(I,x,b))return!0;for(var F=null,j=b;j<v;++j){var Y=((D,H,K,L,J,me)=>{for(var Ce=Math.min(D.length,L.length),ae=-1,ie=0;ie<Ce;++ie){var xe=H[ie];if(xe!==L[ie])return J(D[ie],K[ie])<0?D.substr(0,ie)+K[ie]+K.substr(ie+1):J(D[ie],L[ie])<0?D.substr(0,ie)+L[ie]+K.substr(ie+1):0<=ae?D.substr(0,ae)+H[ae]+K.substr(ae+1):null;J(D[ie],xe)<0&&(ae=ie)}return Ce<L.length&&me==="next"?D+K.substr(D.length):Ce<D.length&&me==="prev"?D.substr(0,K.length):ae<0?null:D.substr(0,ae)+L[ae]+K.substr(ae+1)})(S,I,h[j],x[j],c,$);Y===null&&F===null?b=j+1:(F===null||0<c(F,Y))&&(F=Y)}M(F!==null?function(){C.continue(F+g)}:_)}return!1}),k}function z(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function V(e){return{type:1,lower:e,upper:e}}Object.defineProperty(W.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),W.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?O(this):new this.Collection(this,function(){return z(e,t,!n,!s)})}catch{return P(this,nn)}},W.prototype.equals=function(e){return e==null?P(this,nn):new this.Collection(this,function(){return V(e)})},W.prototype.above=function(e){return e==null?P(this,nn):new this.Collection(this,function(){return z(e,void 0,!0)})},W.prototype.aboveOrEqual=function(e){return e==null?P(this,nn):new this.Collection(this,function(){return z(e,void 0,!1)})},W.prototype.below=function(e){return e==null?P(this,nn):new this.Collection(this,function(){return z(void 0,e,!1,!0)})},W.prototype.belowOrEqual=function(e){return e==null?P(this,nn):new this.Collection(this,function(){return z(void 0,e)})},W.prototype.startsWith=function(e){return typeof e!="string"?P(this,hs):this.between(e,e+Tn,!0,!0)},W.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):A(this,function(t,n){return t.indexOf(n[0])===0},[e],Tn)},W.prototype.equalsIgnoreCase=function(e){return A(this,function(t,n){return t===n[0]},[e],"")},W.prototype.anyOfIgnoreCase=function(){var e=te.apply(rt,arguments);return e.length===0?O(this):A(this,function(t,n){return n.indexOf(t)!==-1},e,"")},W.prototype.startsWithAnyOfIgnoreCase=function(){var e=te.apply(rt,arguments);return e.length===0?O(this):A(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,Tn)},W.prototype.anyOf=function(){var e,t,n=this,s=te.apply(rt,arguments),r=this._cmp;try{s.sort(r)}catch{return P(this,nn)}return s.length===0?O(this):((e=new this.Collection(this,function(){return z(s[0],s[s.length-1])}))._ondirectionchange=function(o){r=o==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(o,c,h){for(var x=o.key;0<r(x,s[t]);)if(++t===s.length)return c(h),!1;return r(x,s[t])===0||(c(function(){o.continue(s[t])}),!1)}),e)},W.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},W.prototype.noneOf=function(){var e=te.apply(rt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return P(this,nn)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},W.prototype.inAnyRange=function(e,_){var n=this,s=this._cmp,r=this._ascending,o=this._descending,c=this._min,h=this._max;if(e.length===0)return O(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return P(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var x=!_||_.includeLowers!==!1,$=_&&_.includeUppers===!0,g,v=r;function w(S,I){return v(S[0],I[0])}try{(g=e.reduce(function(S,I){for(var F=0,j=S.length;F<j;++F){var Y=S[F];if(s(I[0],Y[1])<0&&0<s(I[1],Y[0])){Y[0]=c(Y[0],I[0]),Y[1]=h(Y[1],I[1]);break}}return F===j&&S.push(I),S},[])).sort(w)}catch{return P(this,nn)}var k=0,b=$?function(S){return 0<r(S,g[k][1])}:function(S){return 0<=r(S,g[k][1])},C=x?function(S){return 0<o(S,g[k][0])}:function(S){return 0<=o(S,g[k][0])},M=b,_=new this.Collection(this,function(){return z(g[0][0],g[g.length-1][1],!x,!$)});return _._ondirectionchange=function(S){v=S==="next"?(M=b,r):(M=C,o),g.sort(w)},_._addAlgorithm(function(S,I,F){for(var j,Y=S.key;M(Y);)if(++k===g.length)return I(F),!1;return!b(j=Y)&&!C(j)||(n._cmp(Y,g[k][1])===0||n._cmp(Y,g[k][0])===0||I(function(){v===r?S.continue(g[k][0]):S.continue(g[k][1])}),!1)}),_},W.prototype.startsWithAnyOf=function(){var e=te.apply(rt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?O(this):this.inAnyRange(e.map(function(t){return[t,t+Tn]})):P(this,"startsWithAnyOf() only works with strings")};var Q=W;function W(){}function se(e){return ye(function(t){return ke(t),e(t.target.error),!1})}function ke(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Ve="storagemutated",ue="x-storagemutated-1",Be=da(null,Ve),mt=(ve.prototype._lock=function(){return ct(!U.global),++this._reculock,this._reculock!==1||U.global||(U.lockOwnerFor=this),this},ve.prototype._unlock=function(){if(ct(!U.global),--this._reculock==0)for(U.global||(U.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{_n(e[1],e[0])}catch{}}return this},ve.prototype._locked=function(){return this._reculock&&U.lockOwnerFor!==this},ve.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(ct(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(s);case"MissingAPIError":throw new ee.MissingAPI(s.message,s);default:throw new ee.OpenFailed(s)}if(!this.active)throw new ee.TransactionInactive;ct(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ye(function(r){ke(r),t._reject(e.error)}),e.onabort=ye(function(r){ke(r),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ye(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&Be.storagemutated.fire(e.mutatedParts)})}return this},ve.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Je(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new G(function(o,c){r._blockedFuncs.push([function(){r._promise(e,t,n).then(o,c)},U])}):n?gn(function(){var o=new G(function(c,h){r._lock();var x=t(c,h,r);x&&x.then&&x.then(c,h)});return o.finally(function(){return r._unlock()}),o._lib=!0,o}):((s=new G(function(o,c){var h=t(o,c,r);h&&h.then&&h.then(o,c)}))._lib=!0,s):Je(new ee.TransactionInactive)},ve.prototype._root=function(){return this.parent?this.parent._root():this},ve.prototype.waitFor=function(e){var t,n=this._root(),s=G.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=o)})()),n._waitingFor);return new G(function(o,c){s.then(function(h){return n._waitingQueue.push(ye(o.bind(null,h)))},function(h){return n._waitingQueue.push(ye(c.bind(null,h)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},ve.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},ve.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(le(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},ve);function ve(){}function tt(e,t,n,s,r,o,c,h){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:o,src:(n&&!c?"&":"")+(s?"*":"")+(r?"++":"")+Kt(t),type:h}}function Kt(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function q(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,o,c){return o=s(o,c),o&&(r[o[0]]=o[1]),r},{}))};var s}var ut=function(e){try{return e.only([[]]),ut=function(){return[[]]},[[]]}catch{return ut=function(){return Tn},Tn}};function it(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return zt(n,t)}:function(n){return zt(n,e)};var t}function Wt(e){return[].slice.call(e)}var qt=0;function he(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Rt(e,t,x){function s(b){if(b.type===3)return null;if(b.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=b.lower,w=b.upper,k=b.lowerOpen,b=b.upperOpen;return v===void 0?w===void 0?null:t.upperBound(w,!!b):w===void 0?t.lowerBound(v,!!k):t.bound(v,w,!!k,!!b)}function r(g){var v,w=g.name;return{name:w,schema:g,mutate:function(k){var b=k.trans,C=k.type,M=k.keys,_=k.values,S=k.range;return new Promise(function(I,F){I=ye(I);var j=b.objectStore(w),Y=j.keyPath==null,D=C==="put"||C==="add";if(!D&&C!=="delete"&&C!=="deleteRange")throw new Error("Invalid operation type: "+C);var H,K=(M||_||{length:1}).length;if(M&&_&&M.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(K===0)return I({numFailures:0,failures:{},results:[],lastResult:void 0});function L(qe){++Ce,ke(qe)}var J=[],me=[],Ce=0;if(C==="deleteRange"){if(S.type===4)return I({numFailures:Ce,failures:me,results:[],lastResult:void 0});S.type===3?J.push(H=j.clear()):J.push(H=j.delete(s(S)))}else{var Y=D?Y?[_,M]:[_,null]:[M,null],ae=Y[0],ie=Y[1];if(D)for(var xe=0;xe<K;++xe)J.push(H=ie&&ie[xe]!==void 0?j[C](ae[xe],ie[xe]):j[C](ae[xe])),H.onerror=L;else for(xe=0;xe<K;++xe)J.push(H=j[C](ae[xe])),H.onerror=L}function Dt(qe){qe=qe.target.result,J.forEach(function(wn,Fn){return wn.error!=null&&(me[Fn]=wn.error)}),I({numFailures:Ce,failures:me,results:C==="delete"?M:J.map(function(wn){return wn.result}),lastResult:qe})}H.onerror=function(qe){L(qe),Dt(qe)},H.onsuccess=Dt})},getMany:function(k){var b=k.trans,C=k.keys;return new Promise(function(M,_){M=ye(M);for(var S,I=b.objectStore(w),F=C.length,j=new Array(F),Y=0,D=0,H=function(J){J=J.target,j[J._pos]=J.result,++D===Y&&M(j)},K=se(_),L=0;L<F;++L)C[L]!=null&&((S=I.get(C[L]))._pos=L,S.onsuccess=H,S.onerror=K,++Y);Y===0&&M(j)})},get:function(k){var b=k.trans,C=k.key;return new Promise(function(M,_){M=ye(M);var S=b.objectStore(w).get(C);S.onsuccess=function(I){return M(I.target.result)},S.onerror=se(_)})},query:(v=h,function(k){return new Promise(function(b,C){b=ye(b);var M,_,S,D=k.trans,I=k.values,F=k.limit,Y=k.query,j=F===1/0?void 0:F,H=Y.index,Y=Y.range,D=D.objectStore(w),D=H.isPrimaryKey?D:D.index(H.name),H=s(Y);if(F===0)return b({result:[]});v?((Y=I?D.getAll(H,j):D.getAllKeys(H,j)).onsuccess=function(K){return b({result:K.target.result})},Y.onerror=se(C)):(M=0,_=!I&&"openKeyCursor"in D?D.openKeyCursor(H):D.openCursor(H),S=[],_.onsuccess=function(K){var L=_.result;return!L||(S.push(I?L.value:L.primaryKey),++M===F)?b({result:S}):void L.continue()},_.onerror=se(C))})}),openCursor:function(k){var b=k.trans,C=k.values,M=k.query,_=k.reverse,S=k.unique;return new Promise(function(I,F){I=ye(I);var D=M.index,j=M.range,Y=b.objectStore(w),Y=D.isPrimaryKey?Y:Y.index(D.name),D=_?S?"prevunique":"prev":S?"nextunique":"next",H=!C&&"openKeyCursor"in Y?Y.openKeyCursor(s(j),D):Y.openCursor(s(j),D);H.onerror=se(F),H.onsuccess=ye(function(K){var L,J,me,Ce,ae=H.result;ae?(ae.___id=++qt,ae.done=!1,L=ae.continue.bind(ae),J=(J=ae.continuePrimaryKey)&&J.bind(ae),me=ae.advance.bind(ae),Ce=function(){throw new Error("Cursor not stopped")},ae.trans=b,ae.stop=ae.continue=ae.continuePrimaryKey=ae.advance=function(){throw new Error("Cursor not started")},ae.fail=ye(F),ae.next=function(){var ie=this,xe=1;return this.start(function(){return xe--?ie.continue():ie.stop()}).then(function(){return ie})},ae.start=function(ie){function xe(){if(H.result)try{ie()}catch(qe){ae.fail(qe)}else ae.done=!0,ae.start=function(){throw new Error("Cursor behind last entry")},ae.stop()}var Dt=new Promise(function(qe,wn){qe=ye(qe),H.onerror=se(wn),ae.fail=wn,ae.stop=function(Fn){ae.stop=ae.continue=ae.continuePrimaryKey=ae.advance=Ce,qe(Fn)}});return H.onsuccess=ye(function(qe){H.onsuccess=xe,xe()}),ae.continue=L,ae.continuePrimaryKey=J,ae.advance=me,xe(),Dt},I(ae)):I(null)},F)})},count:function(k){var b=k.query,C=k.trans,M=b.index,_=b.range;return new Promise(function(S,I){var F=C.objectStore(w),F=M.isPrimaryKey?F:F.index(M.name),j=s(_),j=j?F.count(j):F.count();j.onsuccess=ye(function(Y){return S(Y.target.result)}),j.onerror=se(I)})}}}o=x,c=Wt((x=e).objectStoreNames);var o,x={schema:{name:x.name,tables:c.map(function(g){return o.objectStore(g)}).map(function(g){var v=g.keyPath,w=g.autoIncrement,b=oe(v),k={},b={name:g.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:b,keyPath:v,autoIncrement:w,unique:!0,extractKey:it(v)},indexes:Wt(g.indexNames).map(function(C){return g.index(C)}).map(function(S){var I=S.name,M=S.unique,_=S.multiEntry,S=S.keyPath,I={name:I,compound:oe(S),keyPath:S,unique:M,multiEntry:_,extractKey:it(S)};return k[he(S)]=I}),getIndexByKeyPath:function(C){return k[he(C)]}};return k[":id"]=b.primaryKey,v!=null&&(k[he(v)]=b.primaryKey),b})},hasGetAll:0<c.length&&"getAll"in o.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=x.schema,h=x.hasGetAll,x=c.tables.map(r),$={};return x.forEach(function(g){return $[g.name]=g}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(g){if($[g])return $[g];throw new Error("Table '".concat(g,"' not found"))},MIN_KEY:-1/0,MAX_KEY:ut(t),schema:c}}function Ge(e,t,n,s){return n=n.IDBKeyRange,t=Rt(t,n,s),{dbcore:e.dbcore.reduce(function(r,o){return o=o.create,X(X({},r),o(r))},t)}}function je(e,t){var n=t.db,n=Ge(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(o){return o.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function Ue(e,t,n,s){n.forEach(function(r){var o=s[r];t.forEach(function(c){var h=(function x($,g){return Qt($,g)||($=et($))&&x($,g)})(c,r);(!h||"value"in h&&h.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?Ke(c,r,{get:function(){return this.table(r)},set:function(x){st(this,r,{value:x,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,o))})})}function Xe(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function nt(e,t){return e._cfg.version-t._cfg.version}function Gt(e,t,n,s){var r=e._dbSchema,o=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=q("$meta",Qe("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(o.create(n),o._completion.catch(s),o._reject.bind(o)),h=U.transless||U;gn(function(){if(U.trans=o,U.transless=h,t!==0)return je(e,n),$=t,((x=o).storeNames.includes("$meta")?x.table("$meta").get("version").then(function(g){return g??$}):G.resolve($)).then(function(M){var v=e,w=M,k=o,b=n,C=[],M=v._versions,_=v._dbSchema=Ie(0,v.idbdb,b);return(M=M.filter(function(S){return S._cfg.version>=w})).length===0?G.resolve():(M.forEach(function(S){C.push(function(){var I,F,j,Y=_,D=S._cfg.dbschema,H=(De(v,Y,b),De(v,D,b),_=v._dbSchema=D,gt(Y,D)),K=(H.add.forEach(function(L){wt(b,L[0],L[1].primKey,L[1].indexes)}),H.change.forEach(function(L){if(L.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var J=b.objectStore(L.name);L.add.forEach(function(me){return an(J,me)}),L.change.forEach(function(me){J.deleteIndex(me.name),an(J,me)}),L.del.forEach(function(me){return J.deleteIndex(me)})}),S._cfg.contentUpgrade);if(K&&S._cfg.version>w)return je(v,b),k._memoizedTables={},I=ft(D),H.del.forEach(function(L){I[L]=Y[L]}),Xe(v,[v.Transaction.prototype]),Ue(v,[v.Transaction.prototype],be(I),I),k.schema=I,(F=en(K))&&Gn(),D=G.follow(function(){var L;(j=K(k))&&F&&(L=bn.bind(null,null),j.then(L,L))}),j&&typeof j.then=="function"?G.resolve(j):D.then(function(){return j})}),C.push(function(I){var F,j,Y=S._cfg.dbschema;F=Y,j=I,[].slice.call(j.db.objectStoreNames).forEach(function(D){return F[D]==null&&j.db.deleteObjectStore(D)}),Xe(v,[v.Transaction.prototype]),Ue(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),k.schema=v._dbSchema}),C.push(function(I){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===S._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(F){return F!=="$meta"})):I.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return C.length?G.resolve(C.shift()(k.idbtrans)).then(S):G.resolve()})().then(function(){$t(_,b)}))}).catch(c);var x,$;be(r).forEach(function(g){wt(n,g,r[g].primKey,r[g].indexes)}),je(e,n),G.follow(function(){return e.on.populate.fire(o)}).catch(c)})}function Ut(e,t){$t(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Ie(0,e.idbdb,t);De(e,e._dbSchema,t);for(var s=0,r=gt(n,e._dbSchema).change;s<r.length;s++){var o=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var h=t.objectStore(c.name);c.add.forEach(function(x){It&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(x.src)),an(h,x)})})(r[s]);if(typeof o=="object")return o.value}}function gt(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],o=t[n];if(r){var c={name:n,def:o,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(o.primKey.keyPath||"")||r.primKey.auto!==o.primKey.auto)c.recreate=!0,s.change.push(c);else{var h=r.idxByName,x=o.idxByName,$=void 0;for($ in h)x[$]||c.del.push($);for($ in x){var g=h[$],v=x[$];g?g.src!==v.src&&c.change.push(v):c.add.push(v)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([n,o])}return s}function wt(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(o){return an(r,o)})}function $t(e,t){be(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(It&&console.debug("Dexie: Creating missing table",n),wt(t,n,e[n].primKey,e[n].indexes))})}function an(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Ie(e,t,n){var s={};return Zt(t.objectStoreNames,0).forEach(function(r){for(var o=n.objectStore(r),c=tt(Kt($=o.keyPath),$||"",!0,!1,!!o.autoIncrement,$&&typeof $!="string",!0),h=[],x=0;x<o.indexNames.length;++x){var g=o.index(o.indexNames[x]),$=g.keyPath,g=tt(g.name,$,!!g.unique,!!g.multiEntry,!1,$&&typeof $!="string",!1);h.push(g)}s[r]=q(r,c,h)}),s}function De(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var o=s[r],c=n.objectStore(o);e._hasGetAll="getAll"in c;for(var h=0;h<c.indexNames.length;++h){var x,$=c.indexNames[h],g=c.index($).keyPath,g=typeof g=="string"?g:"["+Zt(g).join("+")+"]";t[o]&&(x=t[o].idxByName[g])&&(x.name=$,delete t[o].idxByName[g],t[o].idxByName[$]=x)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&re.WorkerGlobalScope&&re instanceof re.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Qe(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),o=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return tt(r,o||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),oe(o),n===0,s)})}Me.prototype._createTableSchema=q,Me.prototype._parseIndexSyntax=Qe,Me.prototype._parseStoresSpec=function(e,t){var n=this;be(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),o=r.shift();if(!o)throw new ee.Schema("Invalid schema for table "+s+": "+e[s]);if(o.unique=!0,o.multi)throw new ee.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),o=n._createTableSchema(s,o,r),t[s]=o}})},Me.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?pe(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(o){pe(s,o._cfg.storesSource),r=o._cfg.dbschema={},o._parseStoresSpec(s,r)}),t._dbSchema=r,Xe(t,[t._allTables,t,t.Transaction.prototype]),Ue(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],be(r),r),t._storeNames=be(r),this},Me.prototype.upgrade=function(e){return this._cfg.contentUpgrade=aa(this._cfg.contentUpgrade||Ee,e),this};var Ye=Me;function Me(){}function Vt(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Jt(ka,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function xn(e){return e&&typeof e.databases=="function"}function kn(e){return gn(function(){return U.letThrough=!0,e()})}function bt(e){return!("from"in e)}var _e=function(e,t){var n;if(!this)return n=new _e,e&&"d"in e&&pe(n,e),n;pe(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function at(e,t,n){var s=fe(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(bt(e))return pe(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(fe(n,e.from)<0)return s?at(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},sn(e);if(0<fe(t,e.to))return r?at(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},sn(e);fe(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<fe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&dt(e,s),r&&t&&dt(e,r)}}function dt(e,t){bt(t)||(function n(s,r){var o=r.from,c=r.l,h=r.r;at(s,o,r.to),c&&n(s,c),h&&n(s,h)})(e,t)}function Xn(e,t){var n=we(t),s=n.next();if(!s.done)for(var r=s.value,o=we(e),c=o.next(r.from),h=c.value;!s.done&&!c.done;){if(fe(h.from,r.to)<=0&&0<=fe(h.to,r.from))return!0;fe(r.from,h.from)<0?r=(s=n.next(h.from)).value:h=(c=o.next(r.from)).value}return!1}function we(e){var t=bt(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&fe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||fe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function sn(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=X({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=rn(n)),e.d=rn(e)}function rn(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function on(e,t){return be(t).forEach(function(n){e[n]?dt(e[n],t[n]):e[n]=(function s(r){var o,c,h={};for(o in r)le(r,o)&&(c=r[o],h[o]=!c||typeof c!="object"||ss.has(c.constructor)?c:s(c));return h})(t[n])}),e}function de(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Xn(t[n],e[n])})}lt(_e.prototype,((Bt={add:function(e){return dt(this,e),this},addKey:function(e){return at(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return at(t,n,n)}),this},hasKey:function(e){var t=we(this).next(e).value;return t&&fe(t.from,e)<=0&&0<=fe(t.to,e)}})[Wa]=function(){return we(this)},Bt));var Ft={},Ht={},Qn=!1;function ln(e){on(Ht,e),Qn||(Qn=!0,setTimeout(function(){Qn=!1,Ta(Ht,!(Ht={}))},0))}function Ta(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(Ft);s<r.length;s++)T(h=r[s],e,n,t);else for(var o in e){var c,h,o=/^idb\:\/\/(.*)\/(.*)\//.exec(o);o&&(c=o[1],o=o[2],h=Ft["idb://".concat(c,"/").concat(o)])&&T(h,e,n,t)}n.forEach(function(x){return x()})}function T(e,t,n,s){for(var r=[],o=0,c=Object.entries(e.queries.query);o<c.length;o++){for(var h=c[o],x=h[0],$=[],g=0,v=h[1];g<v.length;g++){var w=v[g];de(t,w.obsSet)?w.subscribers.forEach(function(M){return n.add(M)}):s&&$.push(w)}s&&r.push([x,$])}if(s)for(var k=0,b=r;k<b.length;k++){var C=b[k],x=C[0],$=C[1];e.queries.query[x]=$}}function N(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Je(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),o=!1;function c(){if(t.openCanceller!==s)throw new ee.DatabaseClosed("db.open() was cancelled")}function h(){return new G(function(w,k){if(c(),!n)throw new ee.MissingAPI;var b=e.name,C=t.autoSchema||!r?n.open(b):n.open(b,r);if(!C)throw new ee.MissingAPI;C.onerror=se(k),C.onblocked=ye(e._fireOnBlocked),C.onupgradeneeded=ye(function(M){var _;g=C.transaction,t.autoSchema&&!e._options.allowEmptyDB?(C.onerror=ke,g.abort(),C.result.close(),(_=n.deleteDatabase(b)).onsuccess=_.onerror=ye(function(){k(new ee.NoSuchDatabase("Database ".concat(b," doesnt exist")))})):(g.onerror=se(k),_=M.oldVersion>Math.pow(2,62)?0:M.oldVersion,v=_<1,e.idbdb=C.result,o&&Ut(e,g),Gt(e,_/10,g,k))},k),C.onsuccess=ye(function(){g=null;var M,_,S,I,F,j,Y=e.idbdb=C.result,D=Zt(Y.objectStoreNames);if(0<D.length)try{var H=Y.transaction((F=D).length===1?F[0]:F,"readonly");if(t.autoSchema)j=Y,I=H,(S=e).verno=j.version/10,I=S._dbSchema=Ie(0,j,I),S._storeNames=Zt(j.objectStoreNames,0),Ue(S,[S._allTables],be(I),I);else if(De(e,e._dbSchema,H),_=H,((_=gt(Ie(0,(M=e).idbdb,_),M._dbSchema)).add.length||_.change.some(function(K){return K.add.length||K.change.length}))&&!o)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),r=Y.version+1,o=!0,w(h());je(e,H)}catch{}Un.push(e),Y.onversionchange=ye(function(K){t.vcFired=!0,e.on("versionchange").fire(K)}),Y.onclose=ye(function(){e.close({disableAutoOpen:!1})}),v&&(D=e._deps,F=b,xn(j=D.indexedDB)||F===ka||Vt(j,D.IDBKeyRange).put({name:F}).catch(Ee)),w()},k)}).catch(function(w){switch(w?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),h();break;case"VersionError":if(0<r)return r=0,h()}return G.reject(w)})}var x,$=t.dbReadyResolve,g=null,v=!1;return G.race([s,(typeof navigator>"u"?G.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(w){function k(){return indexedDB.databases().finally(w)}x=setInterval(k,100),k()}).finally(function(){return clearInterval(x)}):Promise.resolve()).then(h)]).then(function(){return c(),t.onReadyBeingFired=[],G.resolve(kn(function(){return e.on.ready.fire(e.vip)})).then(function w(){var k;if(0<t.onReadyBeingFired.length)return k=t.onReadyBeingFired.reduce(aa,Ee),t.onReadyBeingFired=[],G.resolve(kn(function(){return k(e.vip)})).then(w)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(w){t.dbOpenError=w;try{g&&g.abort()}catch{}return s===t.openCanceller&&e._close(),Je(w)}).finally(function(){t.openComplete=!0,$()}).then(function(){var w;return v&&(w={},e.tables.forEach(function(k){k.schema.indexes.forEach(function(b){b.name&&(w["idb://".concat(e.name,"/").concat(k.name,"/").concat(b.name)]=new _e(-1/0,[[[]]]))}),w["idb://".concat(e.name,"/").concat(k.name,"/")]=w["idb://".concat(e.name,"/").concat(k.name,"/:dels")]=new _e(-1/0,[[[]]])}),Be(Ve).fire(w),Ta(w,!0)),e})}function ze(e){function t(o){return e.next(o)}var n=r(t),s=r(function(o){return e.throw(o)});function r(o){return function(h){var h=o(h),x=h.value;return h.done?x:x&&typeof x.then=="function"?x.then(n,s):oe(x)?Promise.all(x).then(n,s):n(x)}}return r(t)()}function St(e,t,n){for(var s=oe(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var gs={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return X(X({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},o=[];function c(w,k,b){var S=he(w),C=r[S]=r[S]||[],M=w==null?0:typeof w=="string"?1:w.length,_=0<k,S=X(X({},b),{name:_?"".concat(S,"(virtual-from:").concat(b.name,")"):b.name,lowLevelIndex:b,isVirtual:_,keyTail:k,keyLength:M,extractKey:it(w),unique:!_&&b.unique});return C.push(S),S.isPrimaryKey||o.push(S),1<M&&c(M===2?w[0]:w.slice(0,M-1),k+1,b),C.sort(function(I,F){return I.keyTail-F.keyTail}),S}var h=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[h];for(var x=0,$=s.indexes;x<$.length;x++){var g=$[x];c(g.keyPath,0,g)}function v(w){var k,b=w.query.index;return b.isVirtual?X(X({},w),{query:{index:b.lowLevelIndex,range:(k=w.query.range,b=b.keyTail,{type:k.type===1?2:k.type,lower:St(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,b),lowerOpen:!0,upper:St(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,b),upperOpen:!0})}}):w}return X(X({},n),{schema:X(X({},s),{primaryKey:h,indexes:o,getIndexByKeyPath:function(w){return(w=r[he(w)])&&w[0]}}),count:function(w){return n.count(v(w))},query:function(w){return n.query(v(w))},openCursor:function(w){var k=w.query.index,b=k.keyTail,C=k.keyLength;return k.isVirtual?n.openCursor(v(w)).then(function(_){return _&&M(_)}):n.openCursor(w);function M(_){return Object.create(_,{continue:{value:function(S){S!=null?_.continue(St(S,w.reverse?e.MAX_KEY:e.MIN_KEY,b)):w.unique?_.continue(_.key.slice(0,C).concat(w.reverse?e.MIN_KEY:e.MAX_KEY,b)):_.continue()}},continuePrimaryKey:{value:function(S,I){_.continuePrimaryKey(St(S,e.MAX_KEY,b),I)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var S=_.key;return C===1?S[0]:S.slice(0,C)}},value:{get:function(){return _.value}}})}}})}})}};function Pa(e,t,n,s){return n=n||{},s=s||"",be(e).forEach(function(r){var o,c,h;le(t,r)?(o=e[r],c=t[r],typeof o=="object"&&typeof c=="object"&&o&&c?(h=za(o))!==za(c)?n[s+r]=t[r]:h==="Object"?Pa(o,c,n,s+r+"."):o!==c&&(n[s+r]=t[r]):o!==c&&(n[s+r]=t[r])):n[s+r]=void 0}),be(t).forEach(function(r){le(e,r)||(n[s+r]=t[r])}),n}function Aa(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var bs={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return X(X({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return X(X({},n),{mutate:function(r){var o=U.trans,c=o.table(t).hook,h=c.deleting,x=c.creating,$=c.updating;switch(r.type){case"add":if(x.fire===Ee)break;return o._promise("readwrite",function(){return g(r)},!0);case"put":if(x.fire===Ee&&$.fire===Ee)break;return o._promise("readwrite",function(){return g(r)},!0);case"delete":if(h.fire===Ee)break;return o._promise("readwrite",function(){return g(r)},!0);case"deleteRange":if(h.fire===Ee)break;return o._promise("readwrite",function(){return(function v(w,k,b){return n.query({trans:w,values:!1,query:{index:s,range:k},limit:b}).then(function(C){var M=C.result;return g({type:"delete",keys:M,trans:w}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):M.length<b?{failures:[],numFailures:0,lastResult:void 0}:v(w,X(X({},k),{lower:M[M.length-1],lowerOpen:!0}),b)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function g(v){var w,k,b,C=U.trans,M=v.keys||Aa(s,v);if(M)return(v=v.type==="add"||v.type==="put"?X(X({},v),{keys:M}):X({},v)).type!=="delete"&&(v.values=ce([],v.values)),v.keys&&(v.keys=ce([],v.keys)),w=n,b=M,((k=v).type==="add"?Promise.resolve([]):w.getMany({trans:k.trans,keys:b,cache:"immutable"})).then(function(_){var S=M.map(function(I,F){var j,Y,D,H=_[F],K={onerror:null,onsuccess:null};return v.type==="delete"?h.fire.call(K,I,H,C):v.type==="add"||H===void 0?(j=x.fire.call(K,I,v.values[F],C),I==null&&j!=null&&(v.keys[F]=I=j,s.outbound||pt(v.values[F],s.keyPath,I))):(j=Pa(H,v.values[F]),(Y=$.fire.call(K,j,I,H,C))&&(D=v.values[F],Object.keys(Y).forEach(function(L){le(D,L)?D[L]=Y[L]:pt(D,L,Y[L])}))),K});return n.mutate(v).then(function(I){for(var F=I.failures,j=I.results,Y=I.numFailures,I=I.lastResult,D=0;D<M.length;++D){var H=(j||M)[D],K=S[D];H==null?K.onerror&&K.onerror(F[D]):K.onsuccess&&K.onsuccess(v.type==="put"&&_[D]?v.values[D]:H)}return{failures:F,results:j,numFailures:Y,lastResult:I}}).catch(function(I){return S.forEach(function(F){return F.onerror&&F.onerror(I)}),Promise.reject(I)})});throw new Error("Keys missing")}}})}})}};function Za(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,o=0;r<t.keys.length&&o<e.length;++r)fe(t.keys[r],e[o])===0&&(s.push(n?kt(t.values[r]):t.values[r]),++o);return s.length===e.length?s:null}catch{return null}}var ys={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return X(X({},n),{getMany:function(s){var r;return s.cache?(r=Za(s.keys,s.trans._cache,s.cache==="clone"))?G.resolve(r):n.getMany(s).then(function(o){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?kt(o):o},o}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function es(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Cs(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ts={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new _e(e.MIN_KEY,e.MAX_KEY);return X(X({},e),{transaction:function(s,r,o){if(U.subscr&&r!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(U.querier));return e.transaction(s,r,o)},table:function(s){function r(M){var C,M=M.query;return[C=M.index,new _e((C=(M=M.range).lower)!=null?C:e.MIN_KEY,(C=M.upper)!=null?C:e.MAX_KEY)]}var o=e.table(s),c=o.schema,h=c.primaryKey,x=c.indexes,$=h.extractKey,g=h.outbound,v=h.autoIncrement&&x.filter(function(b){return b.compound&&b.keyPath.includes(h.keyPath)}),w=X(X({},o),{mutate:function(b){function C(J){return J="idb://".concat(t,"/").concat(s,"/").concat(J),F[J]||(F[J]=new _e)}var M,_,S,I=b.trans,F=b.mutatedParts||(b.mutatedParts={}),j=C(""),Y=C(":dels"),D=b.type,K=b.type==="deleteRange"?[b.range]:b.type==="delete"?[b.keys]:b.values.length<50?[Aa(h,b).filter(function(J){return J}),b.values]:[],H=K[0],K=K[1],L=b.trans._cache;return oe(H)?(j.addKeys(H),(D=D==="delete"||H.length===K.length?Za(H,L):null)||Y.addKeys(H),(D||K)&&(M=C,_=D,S=K,c.indexes.forEach(function(J){var me=M(J.name||"");function Ce(ie){return ie!=null?J.extractKey(ie):null}function ae(ie){J.multiEntry&&oe(ie)?ie.forEach(function(xe){return me.addKey(xe)}):me.addKey(ie)}(_||S).forEach(function(ie,qe){var Dt=_&&Ce(_[qe]),qe=S&&Ce(S[qe]);fe(Dt,qe)!==0&&(Dt!=null&&ae(Dt),qe!=null)&&ae(qe)})}))):H?(K={from:(L=H.lower)!=null?L:e.MIN_KEY,to:(D=H.upper)!=null?D:e.MAX_KEY},Y.add(K),j.add(K)):(j.add(n),Y.add(n),c.indexes.forEach(function(J){return C(J.name).add(n)})),o.mutate(b).then(function(J){return!H||b.type!=="add"&&b.type!=="put"||(j.addKeys(J.results),v&&v.forEach(function(me){for(var Ce=b.values.map(function(Dt){return me.extractKey(Dt)}),ae=me.keyPath.findIndex(function(Dt){return Dt===h.keyPath}),ie=0,xe=J.results.length;ie<xe;++ie)Ce[ie][ae]=J.results[ie];C(me.name).addKeys(Ce)})),I.mutatedParts=on(I.mutatedParts||{},F),J})}}),k={get:function(b){return[h,new _e(b.key)]},getMany:function(b){return[h,new _e().addKeys(b.keys)]},count:r,query:r,openCursor:r};return be(k).forEach(function(b){w[b]=function(C){var M=U.subscr,_=!!M,S=es(U,o)&&Cs(b,C)?C.obsSet={}:M;if(_){var I,M=function(K){return K="idb://".concat(t,"/").concat(s,"/").concat(K),S[K]||(S[K]=new _e)},F=M(""),j=M(":dels"),_=k[b](C),Y=_[0],_=_[1];if((b==="query"&&Y.isPrimaryKey&&!C.values?j:M(Y.name||"")).add(_),!Y.isPrimaryKey){if(b!=="count")return I=b==="query"&&g&&C.values&&o.query(X(X({},C),{values:!1})),o[b].apply(this,arguments).then(function(K){if(b==="query"){if(g&&C.values)return I.then(function(Ce){return Ce=Ce.result,F.addKeys(Ce),K});var L=C.values?K.result.map($):K.result;(C.values?F:j).addKeys(L)}else{var J,me;if(b==="openCursor")return me=C.values,(J=K)&&Object.create(J,{key:{get:function(){return j.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var Ce=J.primaryKey;return j.addKey(Ce),Ce}},value:{get:function(){return me&&F.addKey(J.primaryKey),J.value}}})}return K});j.add(n)}}return o[b].apply(this,arguments)}}),w}})}};function Ia(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=X({},t),oe(s.keys)&&(s.keys=s.keys.filter(function(r,o){return!(o in n.failures)})),"values"in s&&oe(s.values)&&(s.values=s.values.filter(function(r,o){return!(o in n.failures)})),s)}function Oa(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<fe(n,s.lower):0<=fe(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?fe(n,s.upper)<0:fe(n,s.upper)<=0));var n,s}function ns(e,t,n,s,r,o){var c,h,x,$,g,v;return!n||n.length===0||(c=t.query.index,h=c.multiEntry,x=t.query.range,$=s.schema.primaryKey.extractKey,g=c.extractKey,v=(c.lowLevelIndex||c).extractKey,(s=n.reduce(function(w,k){var b=w,C=[];if(k.type==="add"||k.type==="put")for(var M=new _e,_=k.values.length-1;0<=_;--_){var S,I=k.values[_],F=$(I);!M.hasKey(F)&&(S=g(I),h&&oe(S)?S.some(function(K){return Oa(K,x)}):Oa(S,x))&&(M.addKey(F),C.push(I))}switch(k.type){case"add":var j=new _e().addKeys(t.values?w.map(function(L){return $(L)}):w),b=w.concat(t.values?C.filter(function(L){return L=$(L),!j.hasKey(L)&&(j.addKey(L),!0)}):C.map(function(L){return $(L)}).filter(function(L){return!j.hasKey(L)&&(j.addKey(L),!0)}));break;case"put":var Y=new _e().addKeys(k.values.map(function(L){return $(L)}));b=w.filter(function(L){return!Y.hasKey(t.values?$(L):L)}).concat(t.values?C:C.map(function(L){return $(L)}));break;case"delete":var D=new _e().addKeys(k.keys);b=w.filter(function(L){return!D.hasKey(t.values?$(L):L)});break;case"deleteRange":var H=k.range;b=w.filter(function(L){return!Oa($(L),H)})}return b},e))===e)?e:(s.sort(function(w,k){return fe(v(w),v(k))||fe($(w),$(k))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),o?Object.freeze(s):s)}function jt(e,t){return fe(e.lower,t.lower)===0&&fe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Ks(e,t){return((n,s,r,o)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=fe(n,s))===0){if(r&&o)return 0;if(r)return 1;if(o)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,o)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=fe(n,s))===0){if(r&&o)return 0;if(r)return-1;if(o)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function cn(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,o;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,o=t,setTimeout(function(){r.subscribers.size===0&&dn(o,r)},3e3))})}var qs={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return X(X({},e),{transaction:function(n,s,r){var o,c,h=e.transaction(n,s,r);return s==="readwrite"&&(r=(o=new AbortController).signal,h.addEventListener("abort",(c=function(x){return function(){if(o.abort(),s==="readwrite"){for(var $=new Set,g=0,v=n;g<v.length;g++){var w=v[g],k=Ft["idb://".concat(t,"/").concat(w)];if(k){var b=e.table(w),C=k.optimisticOps.filter(function(J){return J.trans===h});if(h._explicit&&x&&h.mutatedParts)for(var M=0,_=Object.values(k.queries.query);M<_.length;M++)for(var S=0,I=(Y=_[M]).slice();S<I.length;S++)de((D=I[S]).obsSet,h.mutatedParts)&&(dn(Y,D),D.subscribers.forEach(function(J){return $.add(J)}));else if(0<C.length){k.optimisticOps=k.optimisticOps.filter(function(J){return J.trans!==h});for(var F=0,j=Object.values(k.queries.query);F<j.length;F++)for(var Y,D,H,K=0,L=(Y=j[F]).slice();K<L.length;K++)(D=L[K]).res!=null&&h.mutatedParts&&(x&&!D.dirty?(H=Object.isFrozen(D.res),H=ns(D.res,D.req,C,b,D,H),D.dirty?(dn(Y,D),D.subscribers.forEach(function(J){return $.add(J)})):H!==D.res&&(D.res=H,D.promise=G.resolve({result:H}))):(D.dirty&&dn(Y,D),D.subscribers.forEach(function(J){return $.add(J)})))}}}$.forEach(function(J){return J()})}}})(!1),{signal:r}),h.addEventListener("error",c(!1),{signal:r}),h.addEventListener("complete",c(!0),{signal:r})),h},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return X(X({},s),{mutate:function(o){var c,h=U.trans;return!r.outbound&&h.db._options.cache!=="disabled"&&!h.explicit&&h.idbtrans.mode==="readwrite"&&(c=Ft["idb://".concat(t,"/").concat(n)])?(h=s.mutate(o),o.type!=="add"&&o.type!=="put"||!(50<=o.values.length||Aa(r,o).some(function(x){return x==null}))?(c.optimisticOps.push(o),o.mutatedParts&&ln(o.mutatedParts),h.then(function(x){0<x.numFailures&&(dn(c.optimisticOps,o),(x=Ia(0,o,x))&&c.optimisticOps.push(x),o.mutatedParts)&&ln(o.mutatedParts)}),h.catch(function(){dn(c.optimisticOps,o),o.mutatedParts&&ln(o.mutatedParts)})):h.then(function(x){var $=Ia(0,X(X({},o),{values:o.values.map(function(g,v){var w;return x.failures[v]?g:(pt(w=(w=r.keyPath)!=null&&w.includes(".")?kt(g):X({},g),r.keyPath,x.results[v]),w)})}),x);c.optimisticOps.push($),queueMicrotask(function(){return o.mutatedParts&&ln(o.mutatedParts)})}),h):s.mutate(o)},query:function(o){var c,h,x,$,g,v,w;return es(U,s)&&Cs("query",o)?(c=((x=U.trans)==null?void 0:x.db._options.cache)==="immutable",h=(x=U).requery,x=x.signal,v=((k,b,C,M)=>{var _=Ft["idb://".concat(k,"/").concat(b)];if(!_)return[];if(!(k=_.queries[C]))return[null,!1,_,null];var S=k[(M.query?M.query.index.name:null)||""];if(!S)return[null,!1,_,null];switch(C){case"query":var I=S.find(function(F){return F.req.limit===M.limit&&F.req.values===M.values&&jt(F.req.query.range,M.query.range)});return I?[I,!0,_,S]:[S.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=M.limit&&(!M.values||F.req.values)&&Ks(F.req.query.range,M.query.range)}),!1,_,S];case"count":return I=S.find(function(F){return jt(F.req.query.range,M.query.range)}),[I,!!I,_,S]}})(t,n,"query",o),w=v[0],$=v[2],g=v[3],w&&v[1]?w.obsSet=o.obsSet:(v=s.query(o).then(function(k){var b=k.result;if(w&&(w.res=b),c){for(var C=0,M=b.length;C<M;++C)Object.freeze(b[C]);Object.freeze(b)}else k.result=kt(b);return k}).catch(function(k){return g&&w&&dn(g,w),Promise.reject(k)}),w={obsSet:o.obsSet,promise:v,subscribers:new Set,type:"query",req:o,dirty:!1},g?g.push(w):(g=[w],($=$||(Ft["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[o.query.index.name||""]=g)),cn(w,g,h,x),w.promise.then(function(k){return{result:ns(k.result,o,$?.optimisticOps,s,w,c)}})):s.query(o)}})}})}};function Fa(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}He.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(nt),n.stores({}),this._state.autoSchema=!1),n},He.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||U.letThrough||this._vip)?e():new G(function(n,s){if(t._state.openComplete)return s(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ee.DatabaseClosed);t.open().catch(Ee)}t._state.dbReadyPromise.then(n,s)}).then(e)},He.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,o=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return o.push({stack:t,create:n,level:s??10,name:r}),o.sort(function(c,h){return c.level-h.level}),this},He.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},He.prototype.open=function(){var e=this;return _n(pn,function(){return N(e)})},He.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Un.indexOf(this);if(0<=t&&Un.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new G(function(n){e.dbReadyResolve=n}),e.openCanceller=new G(function(n,s){e.cancelOpen=s}))},He.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},He.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new G(function(r,o){function c(){t.close(e);var h=t._deps.indexedDB.deleteDatabase(t.name);h.onsuccess=ye(function(){var x,$,g;x=t._deps,$=t.name,xn(g=x.indexedDB)||$===ka||Vt(g,x.IDBKeyRange).delete($).catch(Ee),r()}),h.onerror=se(o),h.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},He.prototype.backendDB=function(){return this.idbdb},He.prototype.isOpen=function(){return this.idbdb!==null},He.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},He.prototype.hasFailed=function(){return this._state.dbOpenError!==null},He.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(He.prototype,"tables",{get:function(){var e=this;return be(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),He.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new ee.InvalidArgument("Too few arguments");for(var o=new Array(r-1);--r;)o[r-1]=arguments[r];return s=o.pop(),[t,Ya(o),s]}).apply(this,arguments);return this._transaction.apply(this,e)},He.prototype._transaction=function(e,t,n){var s,r,o=this,c=U.trans,h=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function($){if($=$ instanceof o.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===Pn)s=Pn;else{if(e!="rw"&&e!=wa)throw new ee.InvalidArgument("Invalid transaction mode: "+e);s=wa}if(c){if(c.mode===Pn&&s===wa){if(!h)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function($){if(c&&c.storeNames.indexOf($)===-1){if(!h)throw new ee.SubTransaction("Table "+$+" not included in parent transaction.");c=null}}),h&&c&&!c.active&&(c=null)}}catch($){return c?c._promise(null,function(g,v){v($)}):Je($)}var x=(function $(g,v,w,k,b){return G.resolve().then(function(){var S=U.transless||U,C=g._createTransaction(v,w,g._dbSchema,k),S=(C.explicit=!0,{trans:C,transless:S});if(k)C.idbtrans=k.idbtrans;else try{C.create(),C.idbtrans._explicit=!0,g._state.PR1398_maxLoop=3}catch(I){return I.name===ga.InvalidState&&g.isOpen()&&0<--g._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),g.close({disableAutoOpen:!1}),g.open().then(function(){return $(g,v,w,null,b)})):Je(I)}var M,_=en(b),S=(_&&Gn(),G.follow(function(){var I;(M=b.call(C,C))&&(_?(I=bn.bind(null,null),M.then(I,I)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=ze(M)))},S));return(M&&typeof M.then=="function"?G.resolve(M).then(function(I){return C.active?I:Je(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return M})).then(function(I){return k&&C._resolve(),C._completion.then(function(){return I})}).catch(function(I){return C._reject(I),Je(I)})})}).bind(null,this,s,r,c,n);return c?c._promise(s,x,"lock"):U.trans?_n(U.transless,function(){return o._whenReady(x)}):this._whenReady(x)},He.prototype.table=function(e){if(le(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var Jt=He;function He(e,t){var n,s,r,o,c,h=this,x=(this._middlewares={},this.verno=0,He.dependencies),x=(this._options=t=X({addons:He.addons,autoOpen:!0,indexedDB:x.indexedDB,IDBKeyRange:x.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Ee,dbReadyPromise:null,cancelOpen:Ee,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),g=($.dbReadyPromise=new G(function(v){$.dbReadyResolve=v}),$.openCanceller=new G(function(v,w){$.cancelOpen=w}),this._state=$,this.name=e,this.on=da(this,"populate","blocked","versionchange","close",{ready:[aa,Ee]}),this.once=function(v,w){var k=function(){for(var b=[],C=0;C<arguments.length;C++)b[C]=arguments[C];h.on(v).unsubscribe(k),w.apply(h,b)};return h.on(v,k)},this.on.ready.subscribe=Ct(this.on.ready.subscribe,function(v){return function(w,k){He.vip(function(){var b,C=h._state;C.openComplete?(C.dbOpenError||G.resolve().then(w),k&&v(w)):C.onReadyBeingFired?(C.onReadyBeingFired.push(w),k&&v(w)):(v(w),b=h,k||v(function M(){b.on.ready.unsubscribe(w),b.on.ready.unsubscribe(M)}))})}}),this.Collection=(n=this,Hn(l.prototype,function(M,C){this.db=n;var k=ps,b=null;if(C)try{k=C()}catch(S){b=S}var C=M._ctx,M=C.table,_=M.hook.reading.fire;this._ctx={table:M,index:C.index,isPrimKey:!C.index||M.schema.primKey.keyPath&&C.index===M.schema.primKey.name,range:k,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:b,or:C.or,valueMapper:_!==na?_:null}})),this.Table=(s=this,Hn(Xa.prototype,function(v,w,k){this.db=s,this._tx=k,this.name=v,this.schema=w,this.hook=s._allTables[v]?s._allTables[v].hook:da(null,{creating:[ls,Ee],reading:[Is,na],updating:[cs,Ee],deleting:[Os,Ee]})})),this.Transaction=(r=this,Hn(mt.prototype,function(v,w,k,b,C){var M=this;v!=="readonly"&&w.forEach(function(_){_=(_=k[_])==null?void 0:_.yProps,_&&(w=w.concat(_.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=v,this.storeNames=w,this.schema=k,this.chromeTransactionDurability=b,this.idbtrans=null,this.on=da(this,"complete","error","abort"),this.parent=C||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new G(function(_,S){M._resolve=_,M._reject=S}),this._completion.then(function(){M.active=!1,M.on.complete.fire()},function(_){var S=M.active;return M.active=!1,M.on.error.fire(_),M.parent?M.parent._reject(_):S&&M.idbtrans&&M.idbtrans.abort(),Je(_)})})),this.Version=(o=this,Hn(Ye.prototype,function(v){this.db=o,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,Hn(Q.prototype,function(v,w,k){if(this.db=c,this._ctx={table:v,index:w===":id"?null:w,or:k},this._cmp=this._ascending=fe,this._descending=function(b,C){return fe(C,b)},this._max=function(b,C){return 0<fe(b,C)?b:C},this._min=function(b,C){return fe(b,C)<0?b:C},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(h.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(h.name,"'. Closing db now to resume the delete request.")),h.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(h.name,"') was blocked")):console.warn("Upgrade '".concat(h.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=ut(t.IDBKeyRange),this._createTransaction=function(v,w,k,b){return new h.Transaction(v,w,k,h._options.chromeTransactionDurability,b)},this._fireOnBlocked=function(v){h.on("blocked").fire(v),Un.filter(function(w){return w.name===h.name&&w!==h&&!w._state.vcFired}).map(function(w){return w.on("versionchange").fire(v)})},this.use(ys),this.use(qs),this.use(ts),this.use(gs),this.use(bs),new Proxy(this,{get:function(v,w,k){var b;return w==="_vip"||(w==="table"?function(C){return Fa(h.table(C),g)}:(b=Reflect.get(v,w,k))instanceof Xa?Fa(b,g):w==="tables"?b.map(function(C){return Fa(C,g)}):w==="_createTransaction"?function(){return Fa(b.apply(this,arguments),g)}:b)}}));this.vip=g,x.forEach(function(v){return v(h)})}var ha,An=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",xs=(Da.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Da.prototype[An]=function(){return this},Da);function Da(e){this._subscribe=e}try{ha={indexedDB:re.indexedDB||re.mozIndexedDB||re.webkitIndexedDB||re.msIndexedDB,IDBKeyRange:re.IDBKeyRange||re.webkitIDBKeyRange}}catch{ha={indexedDB:null,IDBKeyRange:null}}function ks(e){var t,n=!1,s=new xs(function(r){var o=en(e),c,h=!1,x={},$={},g={get closed(){return h},unsubscribe:function(){h||(h=!0,c&&c.abort(),v&&Be.storagemutated.unsubscribe(k))}},v=(r.start&&r.start(g),!1),w=function(){return Ha(b)},k=function(C){on(x,C),de($,x)&&w()},b=function(){var C,M,_;!h&&ha.indexedDB&&(x={},C={},c&&c.abort(),c=new AbortController,_=(S=>{var I=mn();try{o&&Gn();var F=gn(e,S);return F=o?F.finally(bn):F}finally{I&&Mn()}})(M={subscr:C,signal:c.signal,requery:w,querier:e,trans:null}),Promise.resolve(_).then(function(S){n=!0,t=S,h||M.signal.aborted||(x={},(I=>{for(var F in I)if(le(I,F))return;return 1})($=C)||v||(Be(Ve,k),v=!0),Ha(function(){return!h&&r.next&&r.next(S)}))},function(S){n=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||h||Ha(function(){h||r.error&&r.error(S)})}))};return setTimeout(w,0),g});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var In=Jt;function Na(e){var t=_t;try{_t=!0,Be.storagemutated.fire(e),Ta(e,!0)}finally{_t=t}}lt(In,X(X({},At),{delete:function(e){return new In(e,{addons:[]}).delete()},exists:function(e){return new In(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=In.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(xn(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==ka})}):Vt(n,t).toCollection().primaryKeys()).then(e)}catch{return Je(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){pe(this,e)}},ignoreTransaction:function(e){return U.trans?_n(U.transless,e):e()},vip:kn,async:function(e){return function(){try{var t=ze(e.apply(this,arguments));return t&&typeof t.then=="function"?t:G.resolve(t)}catch(n){return Je(n)}}},spawn:function(e,t,n){try{var s=ze(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:G.resolve(s)}catch(r){return Je(r)}},currentTransaction:{get:function(){return U.trans||null}},waitFor:function(e,t){return e=G.resolve(typeof e=="function"?In.ignoreTransaction(e):e).timeout(t||6e4),U.trans?U.trans.waitFor(e):e},Promise:G,debug:{get:function(){return It},set:function(e){Rn(e)}},derive:yt,extend:pe,props:lt,override:Ct,Events:da,on:Be,liveQuery:ks,extendObservabilitySet:on,getByKeyPath:zt,setByKeyPath:pt,delByKeyPath:function(e,t){typeof t=="string"?pt(e,t,void 0):"length"in t&&[].map.call(t,function(n){pt(e,n,void 0)})},shallowClone:ft,deepClone:kt,getObjectDiff:Pa,cmp:fe,asap:xt,minKey:-1/0,addons:[],connections:Un,errnames:ga,dependencies:ha,cache:Ft,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),In.maxKey=ut(In.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Be(Ve,function(e){_t||(e=new CustomEvent(ue,{detail:e}),_t=!0,dispatchEvent(e),_t=!1)}),addEventListener(ue,function(e){e=e.detail,_t||Na(e)}));var On,_t=!1,ws=function(){};return typeof BroadcastChannel<"u"&&((ws=function(){(On=new BroadcastChannel(ue)).onmessage=function(e){return e.data&&Na(e.data)}})(),typeof On.unref=="function"&&On.unref(),Be(Ve,function(e){_t||On.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Jt.disableBfCache&&e.persisted){It&&console.debug("Dexie: handling persisted pagehide"),On?.close();for(var t=0,n=Un;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Jt.disableBfCache&&e.persisted&&(It&&console.debug("Dexie: handling persisted pageshow"),ws(),Na({all:new _e(-1/0,[[]])}))})),G.rejectionMapper=function(e,t){return!e||e instanceof En||e instanceof TypeError||e instanceof SyntaxError||!e.name||!os[e.name]?e:(t=new os[e.name](t||e.message,e),"stack"in e&&Ke(t,"stack",{get:function(){return this.inner.stack}}),t)},Rn(It),X(Jt,Object.freeze({__proto__:null,Dexie:Jt,Entity:fs,PropModification:ua,RangeSet:_e,add:function(e){return new ua({add:e})},cmp:fe,default:Jt,liveQuery:ks,mergeRanges:dt,rangesOverlap:Xn,remove:function(e){return new ua({remove:e})},replacePrefix:function(e,t){return new ua({replacePrefix:[e,t]})}}),{default:Jt}),Jt})})(Bs)),Bs.exports}var xi=Ci();const Gs=bi(xi),Or=Symbol.for("Dexie"),_s=globalThis[Or]||(globalThis[Or]=Gs);if(Gs.semVer!==_s.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Gs.semVer} and ${_s.semVer}`);const{liveQuery:Di,mergeRanges:Ni,rangesOverlap:Li,RangeSet:Ki,cmp:qi,Entity:Ri,PropModification:Vi,replacePrefix:ji,add:Yi,remove:zi,DexieYProvider:Wi}=_s,Le=new _s("haushaltsbuch-db");Le.version(1).stores({years:"year",fixedTemplateState:"id"});Le.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Le.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});Le.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Ln="singleton";function ja(){return new Date().toISOString()}async function ma(){return Le.years.orderBy("year").toArray()}async function ki(B){return Le.years.get(B)}async function va(B){await Le.years.put(B)}async function Us(){const B=await Le.fixedTemplateState.get(Ln);if(!B){const p={id:Ln,templates:[],version:ja(),updatedAt:new Date().toISOString()};return await Le.fixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:B.templates,version:B.version}}async function Hs(B){const p=ja();return await Le.fixedTemplateState.put({id:Ln,templates:B,version:p,updatedAt:new Date().toISOString()}),p}async function Js(){const B=await Le.annualVariableFixedTemplateState.get(Ln);if(!B){const p={id:Ln,templates:[],version:ja(),updatedAt:new Date().toISOString()};return await Le.annualVariableFixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:B.templates,version:B.version}}async function Xs(B){const p=ja();return await Le.annualVariableFixedTemplateState.put({id:Ln,templates:B,version:p,updatedAt:new Date().toISOString()}),p}async function wi(B){await Le.auditLog.put(B)}async function Qs(){const B=await Le.searchEvaluationState.get(Ln);if(!B){const p={id:Ln,results:[],version:ja(),updatedAt:new Date().toISOString()};return await Le.searchEvaluationState.put(p),{results:[],version:p.version}}return{results:B.results,version:B.version}}async function Ms(B){const p=ja();return await Le.searchEvaluationState.put({id:Ln,results:B,version:p,updatedAt:new Date().toISOString()}),p}async function Zs(){return Le.auditLog.orderBy("timestampIso").toArray()}async function $i(B){await Le.auditLog.clear(),B.length!==0&&await Le.auditLog.bulkPut(B)}async function Si(){const B=await ma(),[p,Se,X,ce]=await Promise.all([Us(),Js(),Zs(),Qs()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:p.templates,annualVariableFixedTemplates:Se.templates,auditLogEntries:X,savedSearchEvaluations:ce.results}}async function Ei(B){await Le.transaction("rw",[Le.years,Le.fixedTemplateState,Le.annualVariableFixedTemplateState,Le.auditLog,Le.searchEvaluationState],async()=>{await Le.years.clear(),await Le.years.bulkPut(B.years),await Hs(B.fixedTemplates),await Xs(B.annualVariableFixedTemplates??[]),await $i(B.auditLogEntries??[]),await Ms(B.savedSearchEvaluations??[])})}function Ne(B){const p=B.replace(",",".").trim();if(!p)return 0;const Se=Number.parseFloat(p);return Number.isNaN(Se)?0:Math.round(Se*100)}const Bi=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return Bi.format(B/100)}function Et(B){return(B/100).toFixed(2)}function Oe(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const Lr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Fr(B){return Lr.includes(B)}function Mi(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Dr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function _i(B){const p={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Se="habu-theme",X="habu-backup-dirty",ce="habu-unexported-change-log",re="habu-last-backup-filename",be="habu-recurring-budget-defaults";let oe=null,pe=null,et=null,Re=null,le=!1,lt=!1;const st=new WeakMap;function Ke(){const i=B.querySelectorAll("[data-budget-vs-canvas]");if(i.length===0)return;const l=getComputedStyle(document.documentElement),u=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),m=l.getPropertyValue("--table-stripe").trim(),E=l.getPropertyValue("--table-border").trim(),P=l.getPropertyValue("--budget-under").trim(),O=l.getPropertyValue("--danger-2").trim(),A=96,z=250,V=Q=>1-Math.pow(1-Math.max(0,Math.min(1,Q)),3);i.forEach(Q=>{Q.dataset.hoverBound!=="1"&&(Q.dataset.hoverBound="1",Q.addEventListener("mouseenter",()=>{Q.dataset.hovering="1",Ke()}),Q.addEventListener("mouseleave",()=>{delete Q.dataset.hovering,delete Q.dataset.hoverX,Ke()}),Q.addEventListener("mousemove",Ie=>{const De=Q.getBoundingClientRect(),Qe=Math.round(Ie.clientX-De.left);Q.dataset.hoverX=String(Qe),Ke()}));const W=Number.parseInt(Q.dataset.budgetCents??"0",10),se=Number.parseInt(Q.dataset.actualCents??"0",10),ke=Q.dataset.label??"Kategorie",Ve=Q.dataset.hovering==="1",ue=`${ke}|${W}|${se}`,Be=Q.dataset.lastRenderSignature!==ue;Q.dataset.lastRenderSignature=ue;const mt=Math.max(120,Math.floor(Q.clientWidth||120)),ve=window.devicePixelRatio||1,tt=Math.floor(mt*ve),Kt=Math.floor(A*ve);(Q.width!==tt||Q.height!==Kt)&&(Q.width=tt,Q.height=Kt);const q=Q.getContext("2d");if(!q)return;const ut=Math.max(1,W,se),it=Math.min(1,Math.max(0,W/ut)),Wt=Math.min(1,Math.max(0,se/ut)),qt=W-se,he=W>0?se/W*100:se>0?100:0,Rt=8,Ge=Rt,je=34,Ue=mt-Rt*2,Xe=22,nt=Number.parseInt(Q.dataset.hoverX??"-1",10),Gt=(Ie,De,Qe,Ye,Me)=>{q.beginPath(),q.moveTo(Ie+Me,De),q.lineTo(Ie+Qe-Me,De),q.quadraticCurveTo(Ie+Qe,De,Ie+Qe,De+Me),q.lineTo(Ie+Qe,De+Ye-Me),q.quadraticCurveTo(Ie+Qe,De+Ye,Ie+Qe-Me,De+Ye),q.lineTo(Ie+Me,De+Ye),q.quadraticCurveTo(Ie,De+Ye,Ie,De+Ye-Me),q.lineTo(Ie,De+Me),q.quadraticCurveTo(Ie,De,Ie+Me,De),q.closePath()},Ut=Ie=>{q.setTransform(1,0,0,1,0,0),q.clearRect(0,0,Q.width,Q.height),q.scale(ve,ve),Gt(Ge,je,Ue,Xe,8),q.fillStyle=m,q.fill(),q.strokeStyle=E,q.lineWidth=1,q.stroke();const De=[.6,.25,.15],Qe=[.1,.16,.24];let Ye=0;De.forEach((bt,_e)=>{const at=Ue*bt;q.save(),q.globalAlpha=Qe[_e]??.1,q.fillStyle=d,q.fillRect(Ge+Ye,je,at,Xe),q.restore(),Ye+=at});const Me=W>0&&se>W?O:P,Vt=Ue*Wt*Ie;Gt(Ge,je+3,Vt,Xe-6,6),q.fillStyle=Me,q.fill(),Ve&&(q.save(),q.strokeStyle=Me,q.lineWidth=1.5,q.globalAlpha=.8,Gt(Ge-1,je+2,Math.max(2,Vt+2),Xe-4,7),q.stroke(),q.restore());const xn=Ge+Ue*it;q.strokeStyle=u,q.lineWidth=Ve?3:2,q.beginPath(),q.moveTo(xn,je-3),q.lineTo(xn,je+Xe+3),q.stroke(),Ve&&nt>=Ge&&nt<=Ge+Ue&&(q.save(),q.strokeStyle=u,q.globalAlpha=.35,q.lineWidth=1,q.beginPath(),q.moveTo(nt,je-8),q.lineTo(nt,je+Xe+8),q.stroke(),q.restore()),q.fillStyle=u,q.font="600 12px system-ui, -apple-system, sans-serif",q.textAlign="left",q.textBaseline="top",q.fillText(ke,Ge,10);const kn=he*Ie;if(q.fillStyle=he>100?O:he<100?P:d,q.textAlign="right",q.fillText(`${kn.toFixed(0)}%`,Ge+Ue,10),q.fillStyle=d,q.font="500 11px system-ui, -apple-system, sans-serif",q.textAlign="left",q.textBaseline="top",q.fillText(`Ist ${f(se)} · Ziel ${f(W)} · Δ ${qt>=0?"+":""}${f(qt)}`,Ge,64),Ve){const bt=`Nutzung ${he.toFixed(1)}%`;q.font="600 11px system-ui, -apple-system, sans-serif";const _e=8,at=5,dt=22,we=q.measureText(bt).width+_e*2,sn=Number.isFinite(nt)?nt-we/2:Ge+Ue-we,rn=Math.min(Ge+Ue-we,Math.max(Ge,sn)),on=je-dt-8;q.save(),q.fillStyle=u,q.globalAlpha=.92,Gt(rn,on,we,dt,6),q.fill(),q.restore(),q.fillStyle=m,q.textAlign="left",q.textBaseline="top",q.fillText(bt,rn+_e,on+at)}},gt=st.get(Q);if(gt&&window.cancelAnimationFrame(gt),!Be){Ut(1);return}const wt=performance.now(),$t=Ie=>{const De=Ie-wt,Qe=Math.min(1,De/z);if(Ut(V(Qe)),Qe<1){const Ye=window.requestAnimationFrame($t);st.set(Q,Ye);return}st.delete(Q)},an=window.requestAnimationFrame($t);st.set(Q,an)})}function yt(){B.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const u=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(u.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),m=l.querySelector("[data-year-trend-active-net]"),E=l.querySelector("[data-year-trend-active-income]"),P=l.querySelector("[data-year-trend-active-expense]"),O=l.querySelector("[data-year-trend-active-delta]"),A=l.querySelector("[data-year-trend-live]");if(!d||!m||!E||!P||!O)return;const z=(W,se)=>{W.classList.remove("danger","budget-under");const ke=se<0?"danger":se>0?"budget-under":"";ke&&W.classList.add(ke)},V=W=>{const se=W.dataset.monthLabel??"-",ke=Number.parseInt(W.dataset.netCents??"0",10),Ve=Number.parseInt(W.dataset.actualNetCents??"0",10),ue=Number.parseInt(W.dataset.incomeCents??"0",10),Be=Number.parseInt(W.dataset.expenseCents??"0",10),mt=Number.parseInt(W.dataset.deltaCents??"0",10);d.textContent=se,m.textContent=f(ke),E.textContent=f(ue),P.textContent=f(Be),O.textContent=`${mt>=0?"+":""}${f(mt)}`,z(m,ke),z(O,mt),u.forEach(ve=>{const tt=ve===W;ve.classList.toggle("is-active",tt),ve.setAttribute("aria-pressed",String(tt))}),A&&(A.textContent=`${se}: Kalkulierter Saldo ${f(ke)}, Ist-Saldo ${f(Ve)}, Einkommen ${f(ue)}, Ausgaben ${f(Be)}`)};u.forEach(W=>{const se=()=>{V(W)};W.addEventListener("mouseenter",se),W.addEventListener("focus",se),W.addEventListener("click",se)});const Q=u.find(W=>W.dataset.pointDefault==="1")??u[u.length-1];Q&&V(Q)})}function Qt(i){if(i==="dashboard"){const l=p.years.slice().sort((d,m)=>m.year-d.year);l.some(d=>d.year===p.dashboardYear)||(p.dashboardYear=p.selectedYear??l[0]?.year??null)}p.topModal=i,ne()}function Kn(){p.topModal&&(p.topModal=null,ne())}function Zt(){p.showUnexportedChangeLogModal=!0,ne()}function Ct(){p.showUnexportedChangeLogModal&&(p.showUnexportedChangeLogModal=!1,ne())}function ct(){p.showPersistentAuditLogModal=!0,ne()}function xt(){p.showPersistentAuditLogModal&&(p.showPersistentAuditLogModal=!1,ne())}function zt(){le||(le=!0,window.addEventListener("keydown",i=>{if(i.key==="Escape"){if(p.showUnexportedChangeLogModal){i.preventDefault(),Ct();return}if(p.showPersistentAuditLogModal){i.preventDefault(),xt();return}p.topModal&&(i.preventDefault(),Kn())}}))}function pt(){const i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(i<=0)return!1;const l=i/6;return window.scrollY>l}function ft(){const i=B.querySelector("#scroll-up-btn");i&&i.classList.toggle("is-visible",pt())}function Ts(){if(lt)return;lt=!0;const i=()=>{ft(),Ke()};window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i)}function Ya(){if(oe&&document.body.contains(oe))return oe;const i=document.getElementById("toast-root");if(i instanceof HTMLDivElement)return oe=i,i;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),oe=l,l}function ss(){if(pe&&document.body.contains(pe))return pe;const i=document.getElementById("amount-modal-root");if(i instanceof HTMLDivElement)return pe=i,i;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),pe=l,l}function ea(){if(Re&&document.body.contains(Re))return Re;const i=document.getElementById("weekly-shopping-modal-root");if(i instanceof HTMLDivElement)return Re=i,i;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),Re=l,l}function kt(){if(!pe){et=null;return}pe.innerHTML="",et=null}function ta(){Re&&(Re.innerHTML="")}function za(i,l,u){const d=new Date,m=d.getFullYear(),E=d.getMonth()+1,P=d.getDate(),O=new Date(i,l,0).getDate();if(i<m||i===m&&l<E)return{occurrences:0,remainingDays:0};const A=i===m&&l===E?Math.min(P,O):1,z=Math.max(0,O-A+1);let V=0;for(let Q=A;Q<=O;Q+=1)new Date(i,l-1,Q).getDay()===u&&(V+=1);return{occurrences:V,remainingDays:z}}async function Wa(i,l){const u=Ae();u&&(u.weeklyShoppingWeekday=i,u.weeklyShoppingEstimateCents=Math.max(0,l),await We(`Wocheneinkauf geplant: ${Dr.find(d=>d.value===i)?.label??"Wochentag"} mit ${f(u.weeklyShoppingEstimateCents)} €`),ne())}function Ps(){const i=Ae(),l=jn();if(!i||!l)return;const u=ea();ta();const d=i.weeklyShoppingWeekday===null||i.weeklyShoppingWeekday===void 0?1:i.weeklyShoppingWeekday,m=i.weeklyShoppingEstimateCents??0,E=l.year,P=i.month,O=Bt(E,P),A=O?Lt(O):{foodCents:0},z=O?O.foodBudgetCents??0:0,V=A.foodCents,Q=z-V;u.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Dr.map(he=>`<option value="${he.value}" ${he.value===d?"selected":""}>${he.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${Et(m)}" />
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
    `;const W=u.querySelector(".weekly-shopping-modal-backdrop"),se=u.querySelector("#weekly-shopping-weekday"),ke=u.querySelector("#weekly-shopping-estimate"),Ve=u.querySelector("#weekly-shopping-occurrences"),ue=u.querySelector("#weekly-shopping-total"),Be=u.querySelector("#weekly-shopping-rest-before"),mt=u.querySelector("#weekly-shopping-rest-after"),ve=u.querySelector("#weekly-shopping-days-left"),tt=u.querySelector("#weekly-shopping-per-day"),Kt=u.querySelector("#weekly-shopping-cancel"),q=u.querySelector("#weekly-shopping-save");function ut(){const he=Number.parseInt(se?.value??"1",10);return Number.isInteger(he)&&he>=0&&he<=6?he:1}function it(){return Math.max(0,Ne(ke?.value??"0"))}function Wt(){const he=ut(),Rt=it(),{occurrences:Ge,remainingDays:je}=za(E,P,he),Ue=Ge*Rt,Xe=Q-Ue,nt=je>0?Math.trunc(Xe/je):0;Ve&&(Ve.textContent=`${Ge}`),ue&&(ue.textContent=`${f(Ue)} €`),Be&&(Be.textContent=`${f(Q)} €`),mt&&(mt.textContent=`${f(Xe)} €`,mt.className=Xe<0?"danger":Xe>0?"budget-under":""),ve&&(ve.textContent=`${je}`),tt&&(tt.textContent=`${f(nt)} €`,tt.className=nt<0?"danger":nt>0?"budget-under":"")}async function qt(){await Wa(ut(),it()),ta()}Kt?.addEventListener("click",()=>{ta()}),q?.addEventListener("click",async()=>{await qt()}),se?.addEventListener("change",()=>{Wt()}),ke?.addEventListener("input",()=>{Wt()}),ke?.addEventListener("keydown",async he=>{if(he.key==="Escape"){he.preventDefault(),ta();return}he.key==="Enter"&&(he.preventDefault(),await qt())}),W?.addEventListener("click",he=>{he.target===W&&ta()}),window.setTimeout(()=>{ke?.focus(),ke?.select(),Wt()},0)}function dn(i,l){let u=i;const d=l.min;if(d){const E=Number.parseFloat(d);if(!Number.isNaN(E)){const P=Math.round(E*100);u=Math.max(u,P)}}const m=l.max;if(m){const E=Number.parseFloat(m);if(!Number.isNaN(E)){const P=Math.round(E*100);u=Math.min(u,P)}}return u}function rt(i){if(i.disabled)return;const l=ss();kt(),et=i;const u=Ne(i.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
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
    `;const m=l.querySelector(".amount-modal-backdrop"),E=l.querySelector("#amount-modal-delta"),P=l.querySelector("#amount-modal-next-delta"),O=l.querySelector("#amount-modal-next-overwrite"),A=l.querySelector("#amount-modal-cancel"),z=l.querySelector("#amount-modal-overwrite"),V=l.querySelector("#amount-modal-apply");function Q(){const ue=Ne(E?.value??"0");return dn(u+ue,i)}function W(){const ue=Ne(E?.value??"0");return dn(ue,i)}function se(){P&&(P.textContent=`${f(Q())} €`),O&&(O.textContent=`${f(W())} €`)}function ke(){const ue=et;if(!ue){kt();return}const Be=Q();kt(),ue.value=Et(Be),ue.dispatchEvent(new Event("change",{bubbles:!0}))}function Ve(){const ue=et;if(!ue){kt();return}const Be=W();kt(),ue.value=Et(Be),ue.dispatchEvent(new Event("change",{bubbles:!0}))}A?.addEventListener("click",()=>{kt()}),z?.addEventListener("click",()=>{Ve()}),V?.addEventListener("click",()=>{ke()}),E?.addEventListener("input",()=>{se()}),E?.addEventListener("keydown",ue=>{if(ue.key==="Escape"){ue.preventDefault(),kt();return}ue.key==="Enter"&&(ue.preventDefault(),ke())}),m?.addEventListener("click",ue=>{ue.target===m&&kt()}),window.setTimeout(()=>{E?.focus(),E?.select(),se()},0)}function te(i,l="success"){const u=Ya(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=i,u.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const m=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},m)}function en(){return new Date().getMonth()+1}function At(){return new Date().getFullYear()}function rs(i){const l=At(),u=i.find(d=>d.year===l);return u?u.year:i[0]?.year??null}function En(){return new Date().toISOString().slice(0,10)}function is(){const i=new Date,l=String(i.getHours()).padStart(2,"0"),u=String(i.getMinutes()).padStart(2,"0"),d=String(i.getSeconds()).padStart(2,"0");return`${l}${u}${d}`}function vt(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function qn(){const i=localStorage.getItem(Se);return i&&Fr(i)?i:"light"}function ga(i){p.theme=i,document.documentElement.setAttribute("data-theme",i),localStorage.setItem(Se,i)}function As(){return localStorage.getItem(X)==="1"}function ee(i){localStorage.setItem(X,i?"1":"0")}function os(){const i=localStorage.getItem(ce);if(!i)return[];try{const l=JSON.parse(i);return Array.isArray(l)?l.filter(u=>{if(!u||typeof u!="object")return!1;const d=u;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function Ee(i){localStorage.setItem(ce,JSON.stringify(i.slice(-200)))}function na(){const i=localStorage.getItem(re);if(!i)return null;const l=i.trim();return l||null}function Is(){const i={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(be);if(!l)return i;try{const u=JSON.parse(l),d=m=>typeof m=="number"&&Number.isFinite(m)?m:null;return{foodBudgetCents:d(u.foodBudgetCents),goingOutBudgetCents:d(u.goingOutBudgetCents),fixedBudgetCents:d(u.fixedBudgetCents),variableBudgetCents:d(u.variableBudgetCents),miscBudgetCents:d(u.miscBudgetCents)}}catch{return i}}function Bn(i){localStorage.setItem(be,JSON.stringify(i))}function ls(i){i.months.forEach(l=>{const{recurringBudgetDefaults:u}=p;typeof u.foodBudgetCents=="number"&&(l.foodBudgetCents=u.foodBudgetCents),typeof u.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=u.goingOutBudgetCents),typeof u.fixedBudgetCents=="number"&&(l.fixedBudgetCents=u.fixedBudgetCents),typeof u.variableBudgetCents=="number"&&(l.variableBudgetCents=u.variableBudgetCents),typeof u.miscBudgetCents=="number"&&(l.miscBudgetCents=u.miscBudgetCents)})}function Os(i){const l=i.trim();l&&localStorage.setItem(re,l)}async function cs(){if(p.savedSearchEvaluations.length===0)return;const i=At(),l=en(),u=p.savedSearchEvaluations.map(d=>({...Ar(p.years,d.keyword,i,l),id:d.id,createdAt:d.createdAt}));p.savedSearchEvaluations=u,await Ms(u)}async function Fs(){Ya(),ga(qn()),p.hasUnexportedChanges=As(),p.unexportedChangeLog=os(),p.persistentAuditLog=await Zs(),p.lastBackupFileName=na(),p.recurringBudgetDefaults=Is(),zt(),Ts();const[i,l,u,d]=await Promise.all([ma(),Us(),Js(),Qs()]);p.years=i,p.annualVariableFixedTemplates=u.templates,p.annualVariableFixedTemplateVersion=u.version,aa(p.years),la(p.years),p.fixedTemplates=l.templates,p.fixedTemplateVersion=l.version,p.savedSearchEvaluations=d.results,await Vn(p.years),await cs(),i.length>0&&(p.selectedYear=rs(i),p.selectedMonth=en()),ne()}function aa(i){const l=u=>u==="balance"||u==="fresh"||u==="salary"?u:void 0;i.forEach(u=>{u.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const m=Number(d.weeklyShoppingWeekday);Number.isInteger(m)&&m>=0&&m<=6?d.weeklyShoppingWeekday=m:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(m=>{const E=l(m.incomeSource);if(!E){const{incomeSource:P,...O}=m;return O}return{...m,incomeSource:E}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((m,E)=>m+E.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((m,E)=>m+E.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function It(i){return i==="balance"?"Bestandsguthaben":i==="salary"?"Gehalt":i==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Rn(i){return i==="fresh"||i==="salary"||!i}async function Vn(i){for(const l of i)await va(l)}function jn(){if(p.selectedYear)return p.years.find(i=>i.year===p.selectedYear)}function Ae(){const i=jn();if(i)return i.months.find(l=>l.month===p.selectedMonth)}function Bt(i,l){const u=p.years.find(d=>d.year===i);if(u)return u.months.find(d=>d.month===l)}function Lt(i){const l=i.days.reduce((O,A)=>O+A.foodCents,0),u=i.days.reduce((O,A)=>O+A.goingOutCents,0),d=i.fixedCosts.reduce((O,A)=>O+A.actualCents,0),m=i.variableCosts.reduce((O,A)=>O+A.amountCents,0)+i.variablePositions.reduce((O,A)=>O+A.actualCents,0),E=i.miscCosts.reduce((O,A)=>O+A.amountCents,0),P=l+u+d+m+E;return{foodCents:l,goingOutCents:u,fixedCents:d,variableCents:m,miscCents:E,totalCents:P}}function Yn(i){const l=i.foodBudgetCents??0,u=i.goingOutBudgetCents??0,d=i.fixedBudgetCents??i.fixedCosts.reduce((P,O)=>P+O.plannedCents,0),m=i.variablePositions.reduce((P,O)=>P+O.budgetCents,0),E=i.miscBudgetCents??0;return l+u+d+(i.variableBudgetCents??m)+E}function hn(i){return i.months.reduce((l,u)=>{const d=Lt(u);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Ga(i){return i.months.slice().sort((l,u)=>l.month-u.month).map(l=>({month:l.month,summary:Lt(l)}))}function zn(i){const l=i.months.reduce((P,O)=>P+(O.foodBudgetCents??0),0),u=i.months.reduce((P,O)=>P+(O.goingOutBudgetCents??0),0),d=i.months.reduce((P,O)=>P+(O.fixedBudgetCents??O.fixedCosts.reduce((A,z)=>A+z.plannedCents,0)),0),m=i.months.reduce((P,O)=>P+(O.variableBudgetCents??O.variablePositions.reduce((A,z)=>A+z.budgetCents,0)),0),E=i.months.reduce((P,O)=>P+(O.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:u,fixedCents:d,variableCents:m,miscCents:E,totalCents:l+u+d+m+E}}function tn(i){return i.months.reduce((l,u)=>l+u.incomes.reduce((d,m)=>d+(Rn(m.incomeSource)?m.amountCents:0),0),0)}function sa(i){return i.months.reduce((l,u)=>(u.incomes.forEach(d=>{if(d.incomeSource==="salary"){l.salaryIncomeCents+=d.amountCents;return}(d.incomeSource==="fresh"||d.incomeSource==null)&&(l.freshIncomeCents+=d.amountCents)}),l),{salaryIncomeCents:0,freshIncomeCents:0})}function ra(i,l){const u=i.months.slice().sort((d,m)=>d.month-m.month)[0];return u?l.get(ge(i.year,u.month))?.carriedFromPreviousCents??0:0}function pn(){const i=p.years.slice().sort((d,m)=>d.year-m.year).flatMap(d=>d.months.slice().sort((m,E)=>m.month-E.month).map(m=>({year:d.year,month:m}))),l=new Map;let u=0;return i.forEach(({year:d,month:m},E)=>{const P=m.carryoverOverrideCents,O=typeof P=="number",A=O?P:u,z=E>0||O,V=m.incomes.reduce((ke,Ve)=>ke+(Rn(Ve.incomeSource)?Ve.amountCents:0),0),Q=Yn(m),W=V+A,se=W-Q;l.set(ge(d,m.month),{hasPreviousMonth:z,carriedFromPreviousCents:A,recordedIncomeCents:V,effectiveIncomeCents:W,plannedBudgetCents:Q,netCents:se}),u=se}),l}function U(i,l){return l<=0?"":i>l?"budget-over":i<l?"budget-under":""}function ia(i){return`${i>0?"+":""}${f(i)}`}function Ot(i,l){const u=i-l,d=U(l,i);return`${f(i)} <span class="eval-diff ${d}">(Δ ${ia(u)})</span>`}function fn(i,l){const u=i!==null,d=u?i-l:null,m=u?U(l,i):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${u?`${f(i)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(l)} €</strong>
      </div>
      <div class="column-overview-row ${m}">
        <span>Diff</span>
        <strong>${d===null?"-":`${f(d)} €`}</strong>
      </div>
    </div>`}async function G(i){if(await ki(i)){alert(`Jahr ${i} existiert bereits.`);return}const u=Tr(i,p.fixedTemplates,p.fixedTemplateVersion);ls(u),oa(u),await va(u),p.years=await ma(),vn(`Jahr ${i} wurde angelegt`),p.selectedYear=i,p.selectedMonth=en(),te(`Jahr ${i} wurde angelegt.`),ne()}function vn(i="Änderung an den Daten"){p.hasUnexportedChanges=!0,ee(!0);const l=p.selectedYear?`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",u=new Date().toISOString(),d=`${i} (${l})`,m={id:ot("change"),timestampIso:u,message:d};p.unexportedChangeLog=[...p.unexportedChangeLog,m].slice(-200),Ee(p.unexportedChangeLog);const E={id:ot("audit"),timestampIso:u,message:d};p.persistentAuditLog=[...p.persistentAuditLog,E].slice().sort((P,O)=>P.timestampIso.localeCompare(O.timestampIso)),wi(E).catch(P=>{console.error("Audit-Log konnte nicht gespeichert werden",P),te("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function us(i){const l=i.trim();l&&(p.lastBackupFileName=l,Os(l))}function ba(i){p.hasUnexportedChanges=!1,ee(!1),p.unexportedChangeLog=[],Ee([]),p.showUnexportedChangeLogModal=!1,us(i)}async function We(i){const l=jn();l&&(await va(l),p.years=await ma(),vn(i))}async function Mt(i){for(const l of p.years)await va(l);p.years=await ma(),vn(i)}function ge(i,l){return i*100+l}function Wn(i,l,u){const d=`${i} auf ${f(u)} € gesetzt`;return u>l?`${d} (erhöht um ${f(u-l)} €)`:u<l?`${d} (verringert um ${f(l-u)} €)`:d}function mn(i){const l=i.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const u=l[1],d=l[2];return!u||!d?null:{year:Number.parseInt(u,10),month:Number.parseInt(d,10)}}function Mn(i,l){const u=mn(i.dueDateIso);if(!u||l.year<u.year)return;const d=l.months.find(E=>E.month===u.month);!d||d.variablePositions.some(E=>E.autoAnnualTemplateId===i.id)||(d.variablePositions=[{id:ot("varpos"),name:i.name,budgetCents:i.plannedCents,actualCents:0,autoAnnualTemplateId:i.id},...d.variablePositions],Pe(d))}function oa(i){p.annualVariableFixedTemplates.forEach(l=>{Mn(l,i)})}function la(i){const l=new Set(p.annualVariableFixedTemplates.map(u=>u.id));i.forEach(u=>{u.months.forEach(d=>{const m=d.variablePositions.some(P=>typeof P.autoAnnualTemplateId=="string"),E=d.fixedCosts.some(P=>typeof P.autoAnnualTemplateId=="string");m&&(d.variablePositions=d.variablePositions.filter(P=>P.autoAnnualTemplateId?l.has(P.autoAnnualTemplateId):!0),Pe(d)),E&&(d.fixedCosts=d.fixedCosts.filter(P=>!P.autoAnnualTemplateId),ye(d))}),oa(u)})}function ye(i){i.fixedBudgetCents=i.fixedCosts.reduce((l,u)=>l+u.plannedCents,0)}function Pe(i){i.variableBudgetCents=i.variablePositions.reduce((l,u)=>l+u.budgetCents,0)}function Ds(){if(p.selectedYear)return`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`;const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function ca(){const i=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Ds());if(!i)return null;const l=i.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const u=l[1],d=l[2];return!u||!d?null:{year:Number.parseInt(u,10),month:Number.parseInt(d,10)}}function ya(i,l){const u=ge(l.year,l.month);p.years.forEach(d=>{d.months.forEach(m=>{if(ge(d.year,m.month)<u)return;m.fixedCosts.some(P=>P.templateId===i.id)||(m.fixedCosts.push({id:ot("fixed"),templateId:i.id,name:i.name,plannedCents:i.plannedCents,actualCents:0}),ye(m))})})}function Ca(i,l,u){const d=ge(u.year,u.month);p.years.forEach(m=>{m.months.forEach(E=>{ge(m.year,E.month)<d||(E.fixedCosts=E.fixedCosts.map(P=>P.templateId!==l.id?P:{...P,name:l.name,plannedCents:l.plannedCents,actualCents:P.actualCents===i.plannedCents?l.plannedCents:P.actualCents}),ye(E))})})}function Ns(i,l){const u=ge(l.year,l.month);p.years.forEach(d=>{d.months.forEach(m=>{ge(d.year,m.month)<u||(m.fixedCosts=m.fixedCosts.filter(E=>E.templateId!==i),ye(m))})})}async function gn(i,l){const u=i.trim();if(!u)return;const d=ca();if(!d)return;const m=!!p.editingFixedTemplateId;if(p.editingFixedTemplateId){const E=p.fixedTemplates.find(O=>O.id===p.editingFixedTemplateId);if(!E)return;const P={...E,name:u,plannedCents:l};p.fixedTemplates=p.fixedTemplates.map(O=>O.id===p.editingFixedTemplateId?P:O),Ca(E,P,d)}else{const E={id:ot("tpl"),name:u,plannedCents:l};p.fixedTemplates=[...p.fixedTemplates,E],ya(E,d)}p.fixedTemplateVersion=await Hs(p.fixedTemplates),p.editingFixedTemplateId=null,await Mt(m?`Fixkosten-Vorlage aktualisiert: ${u} (${f(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${u} (${f(l)} €)`),te(m?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function Gn(i){p.editingFixedTemplateId=i,ne()}function bn(){p.editingFixedTemplateId=null,ne()}async function xa(i){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const u=ca();if(!u)return;const d=p.fixedTemplates.find(m=>m.id===i);p.fixedTemplates=p.fixedTemplates.filter(m=>m.id!==i),Ns(i,u),p.editingFixedTemplateId===i&&(p.editingFixedTemplateId=null),p.fixedTemplateVersion=await Hs(p.fixedTemplates),await Mt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),te("Fixkosten-Vorlage wurde gelöscht."),ne()}async function Ls(i,l,u){const d=i.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const m=mn(l);if(!m){alert("Bitte ein gültiges Datum auswählen.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const E={id:ot("annualtpl"),name:d,plannedCents:u,dueDateIso:l};p.annualVariableFixedTemplates=[...p.annualVariableFixedTemplates,E],p.years.forEach(P=>{Mn(E,P)}),p.annualVariableFixedTemplateVersion=await Xs(p.annualVariableFixedTemplates),await Mt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${f(u)} €, jährlich in ${Oe(m.month)})`),te("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function yn(i){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const u=p.annualVariableFixedTemplates.find(d=>d.id===i);u&&(p.annualVariableFixedTemplates=p.annualVariableFixedTemplates.filter(d=>d.id!==i),p.years.forEach(d=>{d.months.forEach(m=>{m.variablePositions=m.variablePositions.filter(E=>E.autoAnnualTemplateId!==i),Pe(m),m.fixedCosts=m.fixedCosts.filter(E=>E.autoAnnualTemplateId!==i),ye(m)})}),p.annualVariableFixedTemplateVersion=await Xs(p.annualVariableFixedTemplates),await Mt(`Variable Fixkosten-Vorlage gelöscht: ${u.name}`),te("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function Ua(i,l,u){const d=Ae();if(!d)return;const E=d.days.find(P=>P.isoDate===i)?.[l]??0;d.days=d.days.map(P=>P.isoDate===i?{...P,[l]:u}:P),await We(Wn(`${l==="foodCents"?"Essen":"Ausgehen"} am ${i} angepasst`,E,u)),ne()}async function _n(i,l){const u=Ae();if(!u)return;const d=u.fixedCosts.find(m=>m.id===i);u.fixedCosts=u.fixedCosts.map(m=>m.id===i?{...m,actualCents:l}:m),await We(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${f(l)} €`),ne()}async function ds(i,l){const u=Ae();if(!u)return;const d=u.fixedCosts.find(E=>E.id===i);if(!d)return;const m=d.plannedCents;u.fixedCosts=u.fixedCosts.map(E=>E.id===i?{...E,plannedCents:l}:E),ye(u),await We(Wn(`Fixkosten-Budget angepasst: ${d.name}`,m,l)),ne()}async function Ha(i,l){const u=Ae();if(!u)return;const d=i.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const m={id:ot("fixed"),templateId:ot("fixed-local"),name:d,plannedCents:l,actualCents:0};u.fixedCosts=[m,...u.fixedCosts],ye(u),await We(`Fixkosten-Position hinzugefügt: ${d} (${f(l)} €)`),te("Fixkosten-Position wurde hinzugefügt."),ne()}async function Je(i){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const u=Ae();if(!u)return;const d=u.fixedCosts.find(m=>m.id===i);d&&(u.fixedCosts=u.fixedCosts.filter(m=>m.id!==i),ye(u),await We(`Fixkosten-Position gelöscht: ${d.name}`),te("Fixkosten-Position wurde gelöscht."),ne())}async function Tn(i){await Pn("fixedBudgetCents",i,"Fixkosten")}async function nn(i){await Pn("foodBudgetCents",i,"Essen")}async function hs(i){await Pn("goingOutBudgetCents",i,"Ausgehen")}async function Un(i){await Pn("miscBudgetCents",i,"Sonstiges")}async function ka(i){await Pn("variableBudgetCents",i,"Variable Kosten")}async function Pn(i,l,u){const d=Ae(),m=p.selectedYear;if(!d||!m||d[i]===l)return;const E=d[i];if(d[i]=l,confirm(`Soll das Budget "${u}" auch für zukünftige Monate übernommen werden?`)){const O=ge(m,p.selectedMonth);p.years.forEach(z=>{z.months.forEach(V=>{ge(z.year,V.month)<=O||(V[i]=l)})}),p.recurringBudgetDefaults[i]=l,Bn(p.recurringBudgetDefaults);const A=Wn(`Budget "${u}"`,E??0,l);await Mt(`${A} (inkl. zukünftiger Monate)`),te(`Budget "${u}" wurde für zukünftige Monate übernommen.`),ne();return}await We(Wn(`Budget "${u}"`,E??0,l)),ne()}async function wa(i){const l=Ae();l&&(i===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=i,await We(i===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(i)} € gesetzt`),ne())}async function Cn(i,l,u){const d=Ae(),m=p.selectedYear;if(!d||!m)return;const E=i.trim();if(!E){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:ot("varpos"),name:E,budgetCents:l,actualCents:0},...d.variablePositions],Pe(d),u){const P=ge(m,p.selectedMonth);p.years.forEach(O=>{O.months.forEach(A=>{ge(O.year,A.month)<=P||(A.variablePositions=[{id:ot("varpos"),name:E,budgetCents:l,actualCents:0},...A.variablePositions],Pe(A))})}),await Mt(`Variable Position hinzugefügt: ${E} (${f(l)} €) für zukünftige Monate`),te("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await We(`Variable Position hinzugefügt: ${E} (${f(l)} €)`),te("Variable Position wurde hinzugefügt."),ne()}async function ps(i,l){const u=Ae();if(!u)return;const d=u.variablePositions.find(E=>E.id===i),m=d?.actualCents??0;u.variablePositions=u.variablePositions.map(E=>E.id===i?{...E,actualCents:l}:E),await We(Wn(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,m,l)),ne()}async function $a(i,l){const u=Ae();if(!u)return;const d=u.variablePositions.find(E=>E.id===i),m=d?.budgetCents??0;u.variablePositions=u.variablePositions.map(E=>E.id===i?{...E,budgetCents:l}:E),Pe(u),await We(Wn(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,m,l)),ne()}async function fs(i){if(!confirm("Variable Position wirklich löschen?"))return;const u=Ae(),d=p.selectedYear;if(!u||!d)return;const m=u.variablePositions.find(A=>A.id===i);if(!m)return;const E=ge(d,p.selectedMonth),O=p.years.some(A=>A.months.some(z=>ge(A.year,z.month)>E&&z.variablePositions.some(V=>V.name===m.name&&V.budgetCents===m.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.variablePositions=u.variablePositions.filter(A=>A.id!==i),Pe(u),O){p.years.forEach(A=>{A.months.forEach(z=>{ge(A.year,z.month)<=E||(z.variablePositions=z.variablePositions.filter(V=>!(V.name===m.name&&V.budgetCents===m.budgetCents)),Pe(z))})}),await Mt(`Variable Position gelöscht: ${m.name} (inkl. zukünftiger Monate)`),te("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await We(`Variable Position gelöscht: ${m.name}`),te("Variable Position wurde gelöscht."),ne()}async function fe(i){const l=Ae(),u=p.selectedYear;if(!l||!u)return;const d=l.variablePositions.find(V=>V.id===i);if(!d)return;const m={year:p.selectedMonth===12?u+1:u,month:p.selectedMonth===12?1:p.selectedMonth+1};let E=p.years.find(V=>V.year===m.year);if(!E){const V=Tr(m.year,p.fixedTemplates,p.fixedTemplateVersion);ls(V),oa(V),await va(V),p.years=[...p.years,V].sort((Q,W)=>Q.year-W.year),E=V}const P=E.months.find(V=>V.month===m.month);if(!P)return;const O=P.variablePositions.some(V=>V.id===d.id||V.name===d.name&&V.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(V=>V.id!==i),Pe(l),!O){const Q=P.variablePositions.some(W=>W.id===d.id)?{...d,id:ot("varpos")}:d;P.variablePositions=[Q,...P.variablePositions],Pe(P)}const A=`${Oe(m.month)} ${m.year}`,z=`Variable Position verschoben: ${d.name} → ${A}`;if(m.year===u)await We(z);else{const V=jn();if(!V)return;await va(V),await va(E),p.years=await ma(),aa(p.years),vn(z)}te(O?`Position entfernt (im Folgemonat schon vorhanden: ${A}).`:`Position in den Folgemonat verschoben: ${A}.`),ne()}async function Ja(i,l,u){const d=Ae(),m=p.selectedYear;if(!d||!m)return;const E=i.trim();if(!E){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P=Ws(E,l);if(d.miscCosts=[P,...d.miscCosts],u){const O=ge(m,p.selectedMonth);p.years.forEach(A=>{A.months.forEach(z=>{ge(A.year,z.month)<=O||(z.miscCosts=[Ws(E,l),...z.miscCosts])})}),await Mt(`Sonstige Position hinzugefügt: ${E} (${f(l)} €) für zukünftige Monate`),te("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await We(`Sonstige Position hinzugefügt: ${E} (${f(l)} €)`),te("Sonstige Position wurde hinzugefügt."),ne()}function Sa(i){const l=[];let u="",d=!1;for(let m=0;m<i.length;m+=1){const E=i[m],P=i[m+1];if(E==='"'){d&&P==='"'?(u+='"',m+=1):d=!d;continue}if(E===";"&&!d){l.push(u.trim()),u="";continue}u+=E}return l.push(u.trim()),l}async function Ea(i){const l=Ae();if(!l){te("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const d=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(d.length===0){te("CSV-Datei ist leer.","error");return}const m=new Set(l.miscCosts.map(A=>`${A.description}__${A.amountCents}`));let E=0,P=0,O=0;if(d.forEach(A=>{const z=Sa(A);if(z.length!==2){O+=1;return}const V=z[0]?.trim()??"",Q=z[1]?.trim()??"",W=Ne(Q);if(!V||W<=0){O+=1;return}const se=`${V}__${W}`;if(m.has(se)){P+=1;return}l.miscCosts.push(Ws(V,W)),m.add(se),E+=1}),E===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";te(A,"error");return}await We(`Sonstiges CSV-Import: ${E} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),te(`Import abgeschlossen: ${E} übernommen, ${P} Duplikate, ${O} ungültig.`),ne()}async function ua(i){const l=Ae();if(!l){te("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const d=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(d.length===0){te("CSV-Datei ist leer.","error");return}const m=new Set(l.fixedCosts.map(A=>`${A.name}__${A.plannedCents}__${A.actualCents}`));let E=0,P=0,O=0;if(d.forEach(A=>{const z=Sa(A);if(z.length!==2){O+=1;return}const V=z[0]?.trim()??"",Q=z[1]?.trim()??"",W=Ne(Q);if(!V||W<=0){O+=1;return}const se=`${V}__${W}__${W}`;if(m.has(se)){P+=1;return}l.fixedCosts.push({id:ot("fixed"),templateId:ot("fixed-local"),name:V,plannedCents:W,actualCents:W}),m.add(se),E+=1}),E===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";te(A,"error");return}ye(l),await We(`Fixkosten CSV-Import: ${E} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),te(`Import abgeschlossen: ${E} übernommen, ${P} Duplikate, ${O} ungültig.`),ne()}async function vs(i){const l=Ae();if(!l){te("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const d=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(d.length===0){te("CSV-Datei ist leer.","error");return}const m=new Set(l.variablePositions.map(A=>`${A.name}__${A.budgetCents}__${A.actualCents}`));let E=0,P=0,O=0;if(d.forEach(A=>{const z=Sa(A);if(z.length!==2){O+=1;return}const V=z[0]?.trim()??"",Q=z[1]?.trim()??"",W=Ne(Q);if(!V||W<=0){O+=1;return}const se=`${V}__${W}__${W}`;if(m.has(se)){P+=1;return}l.variablePositions.push({id:ot("varpos"),name:V,budgetCents:W,actualCents:W}),m.add(se),E+=1}),E===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";te(A,"error");return}Pe(l),await We(`Variable CSV-Import: ${E} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),te(`Import abgeschlossen: ${E} übernommen, ${P} Duplikate, ${O} ungültig.`),ne()}async function ms(i){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const u=Ae(),d=p.selectedYear;if(!u||!d)return;const m=u.miscCosts.find(A=>A.id===i);if(!m)return;const E=ge(d,p.selectedMonth),O=p.years.some(A=>A.months.some(z=>ge(A.year,z.month)>E&&z.miscCosts.some(V=>V.description===m.description&&V.amountCents===m.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.miscCosts=u.miscCosts.filter(A=>A.id!==i),O){p.years.forEach(A=>{A.months.forEach(z=>{ge(A.year,z.month)<=E||(z.miscCosts=z.miscCosts.filter(V=>!(V.description===m.description&&V.amountCents===m.amountCents)))})}),await Mt(`Sonstige Position gelöscht: ${m.description} (${f(m.amountCents)} €) inkl. zukünftiger Monate`),te("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await We(`Sonstige Position gelöscht: ${m.description} (${f(m.amountCents)} €)`),te("Sonstige Position wurde gelöscht."),ne()}async function Xa(i,l,u,d){const m=Ae(),E=p.selectedYear;if(!m||!E)return;const P=i.trim();if(!P){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const O=Pr(P,l,u);if(m.incomes=[O,...m.incomes],d){const A=ge(E,p.selectedMonth);p.years.forEach(z=>{z.months.forEach(V=>{ge(z.year,V.month)<=A||(V.incomes=[Pr(P,l,u),...V.incomes])})}),await Mt(`Einkommen hinzugefügt: ${P} (${f(l)} €, ${It(u)}) für zukünftige Monate`),te("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await We(`Einkommen hinzugefügt: ${P} (${f(l)} €, ${It(u)})`),te("Einkommen wurde hinzugefügt."),ne()}async function Fe(i,l){const u=Ae();if(!u)return;const d=u.incomes.find(m=>m.id===i);d&&(u.incomes=u.incomes.map(m=>{if(m.id!==i)return m;if(!l){const{incomeSource:E,...P}=m;return P}return{...m,incomeSource:l}}),await We(`Einkommensart angepasst: ${d.description} → ${It(l)}`),ne())}async function da(i){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const u=Ae(),d=p.selectedYear;if(!u||!d)return;const m=u.incomes.find(A=>A.id===i);if(!m)return;const E=ge(d,p.selectedMonth),O=p.years.some(A=>A.months.some(z=>ge(A.year,z.month)>E&&z.incomes.some(V=>V.description===m.description&&V.amountCents===m.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.incomes=u.incomes.filter(A=>A.id!==i),O){p.years.forEach(A=>{A.months.forEach(z=>{ge(A.year,z.month)<=E||(z.incomes=z.incomes.filter(V=>!(V.description===m.description&&V.amountCents===m.amountCents)))})}),await Mt(`Einkommen gelöscht: ${m.description} (${f(m.amountCents)} €) inkl. zukünftiger Monate`),te("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await We(`Einkommen gelöscht: ${m.description} (${f(m.amountCents)} €)`),te("Einkommen wurde gelöscht."),ne()}async function Hn(){const i=await Si(),l=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),u=URL.createObjectURL(l),d=`haushaltsbuch-backup-${En()}-${is()}.json`,m=document.createElement("a");m.href=u,m.download=d,m.click(),URL.revokeObjectURL(u),ba(d),ne(),te("Backup wurde exportiert.")}async function Jn(i){const l=await i.text(),u=JSON.parse(l);await Ei(u);const[d,m,E,P]=await Promise.all([ma(),Us(),Js(),Qs()]);p.years=d,p.annualVariableFixedTemplates=E.templates,p.annualVariableFixedTemplateVersion=E.version,aa(p.years),la(p.years),p.fixedTemplates=m.templates,p.fixedTemplateVersion=m.version,p.savedSearchEvaluations=P.results,p.evaluationCurrentResult=null,p.evaluationQuery="",await Vn(p.years),await cs(),p.persistentAuditLog=await Zs(),p.selectedYear=rs(d),p.selectedMonth=en(),ba(i.name),te("Backup wurde importiert."),ne()}function Ba(i){p.evaluationQuery=i,p.evaluationCurrentResult=Ar(p.years,i,At(),en()),ne()}async function Qa(){const i=p.evaluationCurrentResult;if(!i||!i.keywordNormalized){te("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const l=p.savedSearchEvaluations.findIndex(u=>u.id===i.id);l>=0?p.savedSearchEvaluations[l]=i:p.savedSearchEvaluations=[i,...p.savedSearchEvaluations],await Ms(p.savedSearchEvaluations),vn(`Auswertung gespeichert: ${i.keyword}`),te(`Auswertung "${i.keyword}" wurde gespeichert.`),ne()}async function Ma(i){const l=p.savedSearchEvaluations.find(u=>u.id===i);l&&(p.savedSearchEvaluations=p.savedSearchEvaluations.filter(u=>u.id!==i),await Ms(p.savedSearchEvaluations),vn(`Auswertung gelöscht: ${l.keyword}`),te(`Gespeicherte Auswertung "${l.keyword}" wurde gelöscht.`),ne())}function ne(){const i=jn(),l=Ae(),u=En(),d=l?Lt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},m=i?hn(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},E=i?Ga(i):[],P=l?l.foodBudgetCents??0:0,O=l?l.goingOutBudgetCents??0:0,A=l?l.fixedBudgetCents??l.fixedCosts.reduce((a,y)=>a+y.plannedCents,0):0,z=l?l.variableBudgetCents??l.variablePositions.reduce((a,y)=>a+y.budgetCents,0):0,V=l?l.miscBudgetCents??0:0,Q=i?i.months.reduce((a,y)=>a+(y.foodBudgetCents??0),0):0,W=i?i.months.reduce((a,y)=>a+(y.goingOutBudgetCents??0),0):0,se=i?i.months.reduce((a,y)=>a+(y.fixedBudgetCents??y.fixedCosts.reduce((R,Z)=>R+Z.plannedCents,0)),0):0,ke=i?i.months.reduce((a,y)=>a+(y.variableBudgetCents??y.variablePositions.reduce((R,Z)=>R+Z.budgetCents,0)),0):0,Ve=i?i.months.reduce((a,y)=>a+(y.miscBudgetCents??0),0):0,ue=l?l.incomes.reduce((a,y)=>a+(Rn(y.incomeSource)?y.amountCents:0),0):0,Be=l?l.incomes.reduce((a,y)=>a+(y.incomeSource==="salary"?y.amountCents:0),0):0,mt=l?l.incomes.reduce((a,y)=>a+(y.incomeSource==="fresh"?y.amountCents:0),0):0,ve=pn(),tt=i?ve.get(ge(i.year,p.selectedMonth)):void 0,Kt=i?i.months.slice().sort((a,y)=>a.month-y.month)[0]:void 0,q=tt?.carriedFromPreviousCents??0,ut=tt?.hasPreviousMonth??!1,it=tt?.effectiveIncomeCents??ue,Wt=l?Yn(l):0,qt=tt?.netCents??ue-Wt,he=it-d.totalCents,Rt=Be-d.totalCents,Ge=d.totalCents>0?`${(Be/d.totalCents*100).toFixed(1)} %`:"-",je=q<0?"danger":q>0?"budget-under":"",Ue=qt<0?"danger":qt>0?"budget-under":"",Xe=he<0?"danger":he>0?"budget-under":"",nt=i?i.months.reduce((a,y)=>a+y.incomes.reduce((R,Z)=>R+(Rn(Z.incomeSource)?Z.amountCents:0),0),0):0,Gt=i?i.months.reduce((a,y)=>a+y.incomes.reduce((R,Z)=>R+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,Ut=i?i.months.reduce((a,y)=>a+y.incomes.reduce((R,Z)=>R+(Z.incomeSource==="fresh"?Z.amountCents:0),0),0):0,gt=i&&Kt?ve.get(ge(i.year,Kt.month))?.carriedFromPreviousCents??0:0,wt=nt+gt,$t=wt-m.totalCents,an=Gt-m.totalCents,Ie=m.totalCents>0?`${(Gt/m.totalCents*100).toFixed(1)} %`:"-",De=gt<0?"danger":gt>0?"budget-under":"",Qe=$t<0?"danger":$t>0?"budget-under":"",Ye=P+O+A+z+V,Me=P+O,Vt=d.foodCents+d.goingOutCents,xn=Me-Vt,kn=U(Vt,Me),bt=Q+W+se+ke+Ve,_e=it-Ye,at=wt-bt,dt=Ye-d.totalCents,Xn=bt-m.totalCents,we=a=>a<0?"danger":a>0?"budget-under":"",sn=(a,y)=>y<=0?"muted":a>=y?"budget-under":"danger",rn=sn(Be,d.totalCents),on=sn(Gt,m.totalCents),de=(a,y)=>{if(y<=0)return"0%";const Z=Math.max(0,a)/y*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},Ft=(a,y)=>{if(y<=0)return a>0?100:0;const R=Math.max(0,a)/y*100;return Math.max(0,R)},Ht=[{label:"Essen",budgetCents:P,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:O,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:A,actualCents:d.fixedCents},{label:"Variable",budgetCents:z,actualCents:d.variableCents},{label:"Sonstige",budgetCents:V,actualCents:d.miscCents}];Math.max(1,...Ht.flatMap(a=>[a.budgetCents,a.actualCents]));const Qn=(a,y)=>y<=0?"bar-positive":a<=0||y>a?"bar-negative":"bar-positive",ln=[{label:"Einkommen gesamt",valueCents:it,className:"bar-income"},{label:"Budget gesamt",valueCents:Ye,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:he,className:he<0?"bar-negative":"bar-positive"}],Ta=Math.max(1,...ln.map(a=>Math.abs(a.valueCents))),T=i?i.months.slice().sort((a,y)=>a.month-y.month).map(a=>{const y=a.foodBudgetCents??0,R=a.goingOutBudgetCents??0,Z=a.fixedBudgetCents??a.fixedCosts.reduce((un,Sn)=>un+Sn.plannedCents,0),Te=a.variableBudgetCents??a.variablePositions.reduce((un,Sn)=>un+Sn.budgetCents,0),Ze=a.miscBudgetCents??0,Nt=y+R+Z+Te+Ze;return{month:a.month,foodBudgetCents:y,goingOutBudgetCents:R,fixedBudgetCents:Z,variableBudgetCents:Te,miscBudgetCents:Ze,totalBudgetCents:Nt}}):[],N=new Map(T.map(a=>[a.month,a])),ze=a=>{if(a.length===0)return null;const y=Math.min(...a),R=Math.max(...a),Z=Math.round(a.reduce((Te,Ze)=>Te+Ze,0)/a.length);return{min:y,avg:Z,max:R}},St=i&&i.year===At()?E.filter(a=>a.month<=en()):E,gs=St.map(a=>a.summary.foodCents),Pa=St.map(a=>a.summary.goingOutCents),Aa=St.map(a=>a.summary.fixedCents),bs=St.map(a=>a.summary.variableCents),Za=St.map(a=>a.summary.miscCents),ys=St.map(a=>a.summary.totalCents),es=St.map(a=>i?ve.get(ge(i.year,a.month))?.plannedBudgetCents??0:0),Cs=St.map(a=>i?ve.get(ge(i.year,a.month))?.netCents??0:0),ts=new Map((i?.months??[]).map(a=>[a.month,a.incomes.reduce((y,R)=>y+(R.incomeSource==="salary"?R.amountCents:0),0)])),Ia=new Map((i?.months??[]).map(a=>[a.month,a.incomes.reduce((y,R)=>y+(R.incomeSource==="salary"||R.incomeSource==="fresh"?R.amountCents:0),0)])),Oa=St.map(a=>ts.get(a.month)??0),ns=St.map(a=>Ia.get(a.month)??0),jt={food:ze(gs),goingOut:ze(Pa),fixed:ze(Aa),variable:ze(bs),misc:ze(Za),total:ze(ys),salary:ze(Oa),income:ze(ns),budget:ze(es),net:ze(Cs)},Ks=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],cn={food:gs.reduce((a,y)=>a+y,0),goingOut:Pa.reduce((a,y)=>a+y,0),fixed:Aa.reduce((a,y)=>a+y,0),variable:bs.reduce((a,y)=>a+y,0),misc:Za.reduce((a,y)=>a+y,0),total:ys.reduce((a,y)=>a+y,0),salary:Oa.reduce((a,y)=>a+y,0),income:ns.reduce((a,y)=>a+y,0),budget:es.reduce((a,y)=>a+y,0)},qs=Ks.map(({key:a,label:y})=>{const R=jt.food?.[a]??null,Z=jt.goingOut?.[a]??null,Te=jt.fixed?.[a]??null,Ze=jt.variable?.[a]??null,Nt=jt.misc?.[a]??null,un=jt.total?.[a]??null,Sn=jt.salary?.[a]??null,ht=jt.income?.[a]??null,fa=jt.budget?.[a]??null,qa=jt.net?.[a]??null,Tt=Dn=>Dn===null?"-":f(Dn);return`<tr>
                  <td><strong>${y}</strong></td>
                  <td>${Tt(R)}</td>
                  <td>${Tt(Z)}</td>
                  <td>${Tt(Te)}</td>
                  <td>${Tt(Ze)}</td>
                  <td>${Tt(Nt)}</td>
                  <td>${Tt(un)}</td>
                  <td>${Tt(Sn)}</td>
                  <td>${Tt(ht)}</td>
                  <td>${Tt(fa)}</td>
                  <td>${Tt(qa)}</td>
                </tr>`}).join(""),Fa=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(cn.food)}</td>
                  <td>${f(cn.goingOut)}</td>
                  <td>${f(cn.fixed)}</td>
                  <td>${f(cn.variable)}</td>
                  <td>${f(cn.misc)}</td>
                  <td>${f(cn.total)}</td>
                  <td>${f(cn.salary)}</td>
                  <td>${f(cn.income)}</td>
                  <td>${f(cn.budget)}</td>
                  <td>-</td>
                </tr>`,Jt=Math.max(1,...E.flatMap(a=>{const y=N.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,y??0]})),He=Math.max(1,...E.flatMap(a=>{const y=N.get(a.month),R=a.summary.foodCents+a.summary.goingOutCents,Z=(y?.foodBudgetCents??0)+(y?.goingOutBudgetCents??0);return[R,Z]})),ha=Math.max(1,...E.flatMap(a=>{const y=N.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,y]})),An=Math.max(1,...E.flatMap(a=>{const y=N.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,y]})),xs=Math.max(1,...E.flatMap(a=>{const y=N.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,y]})),Da=U(d.fixedCents,A),ks=U(d.foodCents,P),In=U(d.goingOutCents,O),Na=U(d.variableCents,z),On=U(d.miscCents,V),_t=a=>a===0?"-":f(a),ws=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(A)}</div>
        <div class="compact-cost-actual ${Da}">${_t(d.fixedCents)}</div>
      </div>`,e=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(z)}</div>
        <div class="compact-cost-actual ${Na}">${_t(d.variableCents)}</div>
      </div>`,t=l?l.fixedCosts.length>0?l.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${vt(a.name)}</div>
                  <div class="compact-cost-budget">${f(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${U(a.actualCents,a.plannedCents)}">${_t(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,n=l?l.variablePositions.length>0?l.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${vt(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${U(a.actualCents,a.budgetCents)}">${_t(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,s=p.editingFixedTemplateId?p.fixedTemplates.find(a=>a.id===p.editingFixedTemplateId):null,r=p.hasUnexportedChanges,o=p.unexportedChangeLog.slice().reverse(),c=p.persistentAuditLog.slice().sort((a,y)=>y.timestampIso.localeCompare(a.timestampIso)),h=p.lastBackupFileName?vt(p.lastBackupFileName):"-",x={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},$=p.years.slice().sort((a,y)=>a.year-y.year),g=$.some(a=>a.year===p.dashboardYear)?p.dashboardYear:p.selectedYear??$[$.length-1]?.year??null,v=typeof g=="number"?$.find(a=>a.year===g):void 0,w=v?v.months.slice().sort((a,y)=>a.month-y.month):[],k=v?hn(v):x,b=v?sa(v):{salaryIncomeCents:0,freshIncomeCents:0},C=b.salaryIncomeCents+b.freshIncomeCents,M=b.salaryIncomeCents,_=v?zn(v):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},S=v?tn(v):0,I=v?ra(v,ve):0,F=S+I,j=v?v.months.reduce((a,y)=>a+Yn(y),0):0,Y=F-j,D=F-k.totalCents,H=[{label:"Essen",budgetCents:_.foodCents,actualCents:k.foodCents},{label:"Ausgehen",budgetCents:_.goingOutCents,actualCents:k.goingOutCents},{label:"Fixkosten",budgetCents:_.fixedCents,actualCents:k.fixedCents},{label:"Variable",budgetCents:_.variableCents,actualCents:k.variableCents},{label:"Sonstige",budgetCents:_.miscCents,actualCents:k.miscCents}],K=w.map(a=>{const y=v?ve.get(ge(v.year,a.month)):void 0,R=Lt(a),Z=a.incomes.reduce((Dn,Zn)=>Dn+(Zn.incomeSource==="salary"?Zn.amountCents:0),0),Te=a.incomes.reduce((Dn,Zn)=>Dn+(Rn(Zn.incomeSource)?Zn.amountCents:0),0),Ze=y?.effectiveIncomeCents??Te,Nt=y?.plannedBudgetCents??Yn(a),un=R.foodCents,Sn=R.goingOutCents,ht=un+Sn,fa=R.totalCents,qa=Ze-Nt,Tt=Ze-fa;return{month:a.month,salaryIncomeCents:Z,incomeCents:Te,foodCents:un,goingOutCents:Sn,foodAndGoingOutCents:ht,effectiveIncomeCents:Ze,plannedBudgetCents:Nt,actualCostCents:fa,plannedNetCents:qa,actualNetCents:Tt}}),L=Math.max(1,...K.map(a=>a.actualCostCents)),J=Math.max(1,...K.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),me=Math.max(1,...K.map(a=>a.foodAndGoingOutCents)),Ce=Math.max(1,...K.map(a=>a.foodCents)),ae=Math.max(1,...K.map(a=>a.goingOutCents)),ie=K.map((a,y,R)=>{const Z=y>0?R[y-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Oe(a.month),monthShortLabel:Oe(a.month).slice(0,3),deltaCents:a.plannedNetCents-Z}}),xe=ie[ie.length-1]??null,Dt=Math.min(0,...ie.map(a=>a.plannedNetCents)),qe=Math.max(0,...ie.map(a=>a.plannedNetCents)),wn=Math.max(1,qe-Dt),Fn=720,$s=320,Ss=18,Rs=18,qr=38,La=56,er=Fn-La-Rs,Vs=$s-Ss-qr,Rr=a=>{if(ie.length<=1)return La+er/2;const y=a/(ie.length-1);return La+y*er},js=a=>Ss+(qe-a)/wn*Vs,$n=ie.map((a,y)=>{const R=Rr(y),Z=js(a.plannedNetCents);return{...a,x:R,y:Z,leftPercent:R/Fn*100,topPercent:Z/$s*100}}),Ys=$n.map((a,y)=>`${y===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),tr=$n.length>0?`${Ys} L ${$n[$n.length-1]?.x.toFixed(1)} ${(Ss+Vs).toFixed(1)} L ${$n[0]?.x.toFixed(1)} ${(Ss+Vs).toFixed(1)} Z`:"",nr=5,Vr=Array.from({length:nr},(a,y)=>{const R=y/(nr-1),Z=qe-R*wn;return{valueCents:Math.round(Z/100)*100,y:js(Z)}}),ar=js(0),jr=ie[0]?.plannedNetCents??0,Ka=(ie[ie.length-1]?.plannedNetCents??0)-jr,Yr=Ka<0?"trend-badge-negative":Ka>0?"trend-badge-positive":"trend-badge-neutral",sr=Ka<0?"↘":Ka>0?"↗":"→",zr=Ka<0?"Abwärtstrend":Ka>0?"Aufwärtstrend":"Seitwärts",pa=$.reduce((a,y)=>{const R=zn(y);return{foodCents:a.foodCents+R.foodCents,goingOutCents:a.goingOutCents+R.goingOutCents,fixedCents:a.fixedCents+R.fixedCents,variableCents:a.variableCents+R.variableCents,miscCents:a.miscCents+R.miscCents,totalCents:a.totalCents+R.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Yt=$.reduce((a,y)=>{const R=hn(y);return{foodCents:a.foodCents+R.foodCents,goingOutCents:a.goingOutCents+R.goingOutCents,fixedCents:a.fixedCents+R.fixedCents,variableCents:a.variableCents+R.variableCents,miscCents:a.miscCents+R.miscCents,totalCents:a.totalCents+R.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Wr=$.reduce((a,y)=>a+tn(y),0),Gr=$[0]?ra($[0],ve):0,rr=Wr+Gr,ir=rr-pa.totalCents,or=rr-Yt.totalCents,lr=[{label:"Essen",budgetCents:pa.foodCents,actualCents:Yt.foodCents},{label:"Ausgehen",budgetCents:pa.goingOutCents,actualCents:Yt.goingOutCents},{label:"Fixkosten",budgetCents:pa.fixedCents,actualCents:Yt.fixedCents},{label:"Variable",budgetCents:pa.variableCents,actualCents:Yt.variableCents},{label:"Sonstige",budgetCents:pa.miscCents,actualCents:Yt.miscCents}],cr=Math.max(1,...lr.flatMap(a=>[a.budgetCents,a.actualCents])),zs=[{label:"Essen & Ausgehen",actualCents:Yt.foodCents+Yt.goingOutCents},{label:"Fixkosten",actualCents:Yt.fixedCents},{label:"Variable",actualCents:Yt.variableCents},{label:"Sonstige",actualCents:Yt.miscCents}],Ur=Math.max(1,...zs.map(a=>a.actualCents)),$e=$.map(a=>{const y=hn(a),R=zn(a),Z=tn(a),Te=sa(a),Ze=ra(a,ve),Nt=Z+Ze;return{year:a.year,salaryIncomeCents:Te.salaryIncomeCents,freshIncomeCents:Te.freshIncomeCents,totalIncomeCents:Te.salaryIncomeCents+Te.freshIncomeCents,foodAndGoingOutCents:y.foodCents+y.goingOutCents,fixedCents:y.fixedCents,variableCents:y.variableCents,miscCents:y.miscCents,budgetTotalCents:R.totalCents,actualTotalCents:y.totalCents,effectiveIncomeCents:Nt,plannedNetCents:Nt-R.totalCents,actualNetCents:Nt-y.totalCents}}),Hr=$e.reduce((a,y)=>a+y.totalIncomeCents,0),Jr=$e.reduce((a,y)=>a+y.salaryIncomeCents,0),ur=Math.max(1,...$e.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Xr=Math.max(1,...$e.map(a=>a.actualTotalCents)),Qr=Math.max(1,...$e.map(a=>a.totalIncomeCents)),Zr=Math.max(1,...$e.map(a=>a.salaryIncomeCents)),dr=Math.max(1,...$e.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),hr=Math.max(1,...$e.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),ei=Math.max(1,...$e.map(a=>a.foodAndGoingOutCents)),ti=Math.max(1,...$e.map(a=>a.fixedCents)),ni=Math.max(1,...$e.map(a=>a.variableCents)),ai=Math.max(1,...$e.map(a=>a.miscCents)),si=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${p.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${p.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${p.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${$.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':p.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${$.map(a=>`<option value="${a.year}" ${a.year===g?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${v?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(C)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(M)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(j)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(k.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${we(Y)}">${f(Y)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${we(D)}">${f(D)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${sr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Yr}">${sr} ${zr}</span>
                    </div>
                  </header>
                  ${xe?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${vt(xe.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${we(xe.plannedNetCents)}" data-year-trend-active-net>${f(xe.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(xe.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(xe.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${we(xe.deltaCents)}" data-year-trend-active-delta>${xe.deltaCents>=0?"+":""}${f(xe.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${Fn} ${$s}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${v?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Vr.map(a=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${La}" y1="${a.y.toFixed(1)}" x2="${Fn-Rs}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${La-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${f(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${La}" y1="${ar.toFixed(1)}" x2="${Fn-Rs}" y2="${ar.toFixed(1)}"></line>
                              ${tr?`<path class="year-trend-area" d="${tr}"></path>`:""}
                              ${Ys?`<path class="year-trend-line" d="${Ys}"></path>`:""}
                              ${$n.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${$s-12}" text-anchor="middle">${vt(a.monthShortLabel)}</text>
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
                                      data-month-label="${vt(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${vt(a.monthLabel)}: Kalkulierter Saldo ${f(a.plannedNetCents)}, Einkommen ${f(a.effectiveIncomeCents)}, Ausgaben ${f(a.actualCostCents)}"
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
                    ${H.map(a=>{const y=Ft(a.actualCents,a.budgetCents),R=Math.min(100,y),Z=`${y.toFixed(0)}%`,Te=a.budgetCents-a.actualCents,Ze=Te<0?"danger":Te>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Qn(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${R.toFixed(1)}%" title="${a.label}: ${f(a.actualCents)} von ${f(a.budgetCents)}">
                              <span class="circle-chart-value">${Z}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${f(a.budgetCents)} / I ${f(a.actualCents)}</div>
                            <div class="circle-chart-meta ${Ze}">${Te>=0?"+":""}${f(Te)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(K.length,1)}, minmax(0, 1fr));">
                    ${K.map(a=>{const y=de(a.actualCostCents,L);return`
                          <div class="spark-bar" title="${Oe(a.month)}: ${f(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.actualCostCents)} €</span></div>
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
                    ${K.map(a=>{const y=de(Math.abs(a.plannedNetCents),J),R=de(Math.abs(a.actualNetCents),J),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Te=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Oe(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${y}; opacity: 0.35;"></div>
                              <div class="bar ${Te}" style="width:${R}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${we(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${we(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  ${K.map(a=>`<tr>
                        <td>${Oe(a.month)}</td>
                    <td>${f(a.salaryIncomeCents)}</td>
                    <td>${f(a.incomeCents)}</td>
                        <td>${f(a.plannedBudgetCents)}</td>
                        <td>${f(a.actualCostCents)}</td>
                        <td class="${we(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${we(a.actualNetCents)}">${f(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:p.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${$.map(a=>`<option value="${a.year}" ${a.year===g?"selected":""}>${a.year}</option>`).join("")}
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
                    ${K.map(a=>{const y=de(a.foodAndGoingOutCents,me);return`
                          <div class="spark-bar" title="${Oe(a.month)}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(K.length,1)}, minmax(0, 1fr));">
                    ${K.map(a=>{const y=de(a.foodCents,Ce);return`
                          <div class="spark-bar" title="${Oe(a.month)}: ${f(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.foodCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(K.length,1)}, minmax(0, 1fr));">
                    ${K.map(a=>{const y=de(a.goingOutCents,ae);return`
                          <div class="spark-bar" title="${Oe(a.month)}: ${f(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${y}"><span class="spark-bar-fill-value">${f(a.goingOutCents)} €</span></div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(Hr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(Jr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(pa.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Yt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${we(ir)}">${f(ir)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${we(or)}">${f(or)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${zs.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${f(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Yt.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${lr.map(a=>{const y=de(a.budgetCents,cr),R=de(a.actualCents,cr),Z=Qn(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${f(a.budgetCents)} | Ist: ${f(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${y}"></div>
                              <div class="bar-marker" style="left:${y}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Z}" style="width:${R}"></div>
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
                    ${zs.map(a=>{const y=de(a.actualCents,Ur);return`
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
                    ${$e.map(a=>{const y=de(a.actualTotalCents,Xr);return`
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
                    ${$e.map(a=>{const y=de(Math.abs(a.plannedNetCents),ur),R=de(Math.abs(a.actualNetCents),ur),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Te=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${y}; opacity: 0.35;"></div>
                              <div class="bar ${Te}" style="width:${R}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${we(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${we(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                    ${$e.map(a=>{const y=de(a.foodAndGoingOutCents,ei);return`
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
                    ${$e.map(a=>{const y=de(a.fixedCents,ti);return`
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
                    ${$e.map(a=>{const y=de(a.variableCents,ni);return`
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
                    ${$e.map(a=>{const y=de(a.miscCents,ai);return`
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
                        <td class="${we(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${we(a.actualNetCents)}">${f(a.actualNetCents)}</td>
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
                    ${$e.map(a=>{const y=de(a.totalIncomeCents,Qr);return`
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
                    ${$e.map(a=>{const y=de(a.salaryIncomeCents,Zr);return`
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
                    ${$e.map(a=>{const y=de(a.totalIncomeCents,dr),R=de(a.actualTotalCents,dr);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${f(a.totalIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${y}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${R}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
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
                    ${$e.map(a=>{const y=de(a.salaryIncomeCents,hr),R=de(a.actualTotalCents,hr);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${f(a.salaryIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${y}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${R}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
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
    `,ri=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,ii=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${s?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${s?Et(s.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${s?"Änderung speichern":"Vorlage speichern"}</button>
          ${s?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${p.fixedTemplates.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${a.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,pr=p.annualVariableFixedTemplates.reduce((a,y)=>a+y.plannedCents,0),oi=Math.round(pr/12),li=`
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
                <div class="eval-value budget-under">${f(pr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(oi)}</div>
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
            ${p.annualVariableFixedTemplates.map(a=>{const y=mn(a.dueDateIso),R=y?Oe(y.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${R}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Xt=p.evaluationCurrentResult,ci=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${vt(p.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${Xt&&Xt.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${Xt?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${vt(Xt.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${Xt.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${f(Xt.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${f(Xt.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${f(Xt.monthAverageCents)}</div>
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
                  ${Xt.yearRows.length>0?Xt.yearRows.map(a=>`<tr>
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
                  ${Xt.monthRows.length>0?Xt.monthRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${Oe(a.month)}</td>
                              <td>${a.hitCount}</td>
                              <td>${f(a.totalCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="4" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>
            `:'<p class="muted">Noch keine Auswertung ausgeführt.</p>'}

        <h3>Gespeicherte Auswertungen</h3>
        ${p.savedSearchEvaluations.length===0?'<p class="muted">Noch keine gespeicherten Auswertungen vorhanden.</p>':p.savedSearchEvaluations.map(a=>`
                  <article class="card">
                    <div class="inline">
                      <strong>${vt(a.keyword)}</strong>
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
    `,fr=p.topModal==="years"?"Jahr hinzufügen":p.topModal==="fixed"?"Fixe Kosten (zentral)":p.topModal==="variable-fixed"?"Variable Fixkosten":p.topModal==="dashboard"?"Dashboard":p.topModal==="evaluation"?"Auswertung":"",ui=p.topModal==="years"?ri:p.topModal==="fixed"?ii:p.topModal==="variable-fixed"?li:p.topModal==="dashboard"?si:p.topModal==="evaluation"?ci:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${r?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${p.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Lr.map(a=>`<option value="${a}" ${p.theme===a?"selected":""}>${Mi(a)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${fr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${fr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${ui}
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
                  ${o.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${o.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${vt(a.message)}</span></li>`).join("")}</ol>`}
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
                  ${c.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${c.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${vt(a.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${i?`${Oe(p.selectedMonth)} ${i.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${p.years.map(a=>`<option value="${a.year}" ${a.year===p.selectedYear?"selected":""}>${a.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${p.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(a,y)=>y+1).map(a=>`<option value="${a}" ${a===p.selectedMonth?"selected":""}>${Oe(a)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${f(ue)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${f(Be)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(mt)}</strong>
              </div>
              <div class="compact-income-row ${je}">
                <span>Übernahme aus Vormonat</span>
                <strong>${ut?f(q):"-"}</strong>
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
                  ${t}
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
                  ${n}
                  ${e}
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
                    <div class="compact-cost-budget">${f(Me)}</div>
                    <div class="compact-cost-actual ${kn}">${_t(Vt)}</div>
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
                    <div class="compact-cost-actual ${On}">${_t(d.miscCents)}</div>
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
                  ${Ht.map(a=>`
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
                  ${ln.map(a=>{const y=de(Math.abs(a.valueCents),Ta),R=a.valueCents>=0?"+":"",Z=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${f(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${y}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Z}">${R}${f(a.valueCents)}</span></div>
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
                      ${E.map(a=>{const y=N.get(a.month)?.totalBudgetCents??0,R=de(y,Jt),Z=de(a.summary.totalCents,Jt);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(a.summary.totalCents)} € | Budget ${f(y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Essen und Ausgehen (Budget vs. Ist)">
                      ${E.map(a=>{const y=N.get(a.month),R=(y?.foodBudgetCents??0)+(y?.goingOutBudgetCents??0),Z=a.summary.foodCents+a.summary.goingOutCents,Te=de(R,He),Ze=de(Z,He);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(Z)} € | Budget ${f(R)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Te}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Ze}"><span class="spark-bar-fill-value">${f(Z)} €</span></div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Fixkosten (Budget vs. Ist)">
                      ${E.map(a=>{const y=N.get(a.month)?.fixedBudgetCents??0,R=de(y,ha),Z=de(a.summary.fixedCents,ha);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(a.summary.fixedCents)} € | Budget ${f(y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Variable Kosten (Budget vs. Ist)">
                      ${E.map(a=>{const y=N.get(a.month)?.variableBudgetCents??0,R=de(y,An),Z=de(a.summary.variableCents,An);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(a.summary.variableCents)} € | Budget ${f(y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Sonstige (Budget vs. Ist)">
                      ${E.map(a=>{const y=N.get(a.month)?.miscBudgetCents??0,R=de(y,xs),Z=de(a.summary.miscCents,xs);return`
                            <div class="spark-bar" title="${Oe(a.month)}: Ist ${f(a.summary.miscCents)} € | Budget ${f(y)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
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
                    <div class="eval-value">${f(ue)}</div>
                    <div class="eval-value">${f(nt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(Be)}</div>
                    <div class="eval-value">${f(Gt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(mt)}</div>
                    <div class="eval-value">${f(Ut)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${je}">${ut?f(q):"-"}</div>
                    <div class="eval-value ${De}">${i?f(gt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(it)}</div>
                    <div class="eval-value">${f(wt)}</div>
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
                    <div class="eval-value">${Ot(P,d.foodCents)}</div>
                    <div class="eval-value">${f(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Ot(O,d.goingOutCents)}</div>
                    <div class="eval-value">${f(W)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Ot(A,d.fixedCents)}</div>
                    <div class="eval-value">${f(se)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Ot(z,d.variableCents)}</div>
                    <div class="eval-value">${f(ke)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Ot(V,d.miscCents)}</div>
                    <div class="eval-value">${f(Ve)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Ot(Ye,d.totalCents)}</div>
                    <div class="eval-value">${f(bt)}</div>
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
                    <div class="eval-value ${ks}">${f(d.foodCents)}</div>
                    <div class="eval-value">${f(m.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${In}">${f(d.goingOutCents)}</div>
                    <div class="eval-value">${f(m.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Da}">${f(d.fixedCents)}</div>
                    <div class="eval-value">${f(m.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Na}">${f(d.variableCents)}</div>
                    <div class="eval-value">${f(m.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${On}">${f(d.miscCents)}</div>
                    <div class="eval-value">${f(m.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${f(d.totalCents)}</div>
                    <div class="eval-value">${f(m.totalCents)}</div>
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
                    <div class="eval-value ${we(dt)}">${f(dt)}</div>
                    <div class="eval-value ${we(Xn)}">${f(Xn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${we(_e)}">${f(_e)}</div>
                    <div class="eval-value ${we(at)}">${f(at)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Xe}">${f(he)}</div>
                    <div class="eval-value ${Qe}">${f($t)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${we(Rt)}">${f(Rt)}</div>
                    <div class="eval-value ${we(an)}">${f(an)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${rn}">${Ge}</div>
                    <div class="eval-value ${on}">${Ie}</div>
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
                ${E.map((a,y,R)=>{const Z=i?ve.get(ge(i.year,a.month)):void 0,Te=Z?.plannedBudgetCents??0,Ze=Z?.netCents??0,Nt=ts.get(a.month)??0,un=Ia.get(a.month)??0,Sn=Ze<0?"danger":Ze>0?"budget-under":"",ht=R[y-1],fa=ht?.summary.foodCents??null,qa=ht?.summary.goingOutCents??null,Tt=ht?.summary.fixedCents??null,Dn=ht?.summary.variableCents??null,Zn=ht?.summary.miscCents??null,vr=ht?.summary.totalCents??null,mr=ht!==void 0?ts.get(ht.month)??0:null,gr=ht!==void 0?Ia.get(ht.month)??0:null,br=i&&ht?ve.get(ge(i.year,ht.month))?.plannedBudgetCents??0:null,yr=fa===null?null:a.summary.foodCents-fa,Cr=qa===null?null:a.summary.goingOutCents-qa,xr=Tt===null?null:a.summary.fixedCents-Tt,kr=Dn===null?null:a.summary.variableCents-Dn,wr=Zn===null?null:a.summary.miscCents-Zn,$r=vr===null?null:a.summary.totalCents-vr,Sr=mr===null?null:Nt-mr,Er=gr===null?null:un-gr,Br=br===null?null:Te-br,Ra=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",Mr=Pt=>Pt===null?"muted":Pt>0?"budget-under":Pt<0?"danger":"muted",di=Pt=>Pt===null?"muted":Pt>0?"danger":Pt<0?"budget-under":"muted",Nn=Pt=>Pt===null?"(Δ -)":`(Δ ${Pt>0?"+":""}${f(Pt)})`,_r=i&&ht?ve.get(ge(i.year,ht.month))?.netCents??0:null,Va=_r===null?null:Ze-_r,hi=Va===null?"(Δ -)":`(Δ ${Va>0?"+":""}${f(Va)})`,pi=Va===null?"muted":Va<0?"danger":Va>0?"budget-under":"muted";return`<tr>
                  <td>${Oe(a.month)}</td>
                  <td>${f(a.summary.foodCents)} <span class="${Ra(yr)}">${Nn(yr)}</span></td>
                  <td>${f(a.summary.goingOutCents)} <span class="${Ra(Cr)}">${Nn(Cr)}</span></td>
                  <td>${f(a.summary.fixedCents)} <span class="${Ra(xr)}">${Nn(xr)}</span></td>
                  <td>${f(a.summary.variableCents)} <span class="${Ra(kr)}">${Nn(kr)}</span></td>
                  <td>${f(a.summary.miscCents)} <span class="${Ra(wr)}">${Nn(wr)}</span></td>
                  <td>${f(a.summary.totalCents)} <span class="${Ra($r)}">${Nn($r)}</span></td>
                  <td>${f(Nt)} <span class="${Mr(Sr)}">${Nn(Sr)}</span></td>
                  <td>${f(un)} <span class="${Mr(Er)}">${Nn(Er)}</span></td>
                  <td>${f(Te)} <span class="${di(Br)}">${Nn(Br)}</span></td>
                  <td class="${Sn}">${f(Ze)} <span class="${pi}">${hi}</span></td>
                </tr>`}).join("")}
                ${qs}
                ${Fa}
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
                    <td class="${je}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${Et(q)}" />
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
                  <strong>${f(ue)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${f(Be)} €</strong>
                </div>
                <div class="column-overview-row ${je}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${f(q)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(it)} €</strong>
                </div>
                <div class="column-overview-row ${Ue}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${f(qt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${fn(P,d.foodCents)}
                ${fn(O,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(Me)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(Vt)} €</strong>
                  </div>
                  <div class="column-overview-row ${kn}">
                    <span>Diff</span>
                    <strong>${f(xn)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${Et(P)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${Et(O)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(a=>{const y=a.foodCents>0,R=a.goingOutCents>0,Z=`${a.isoDate===u?"today-row":""} ${y||R?"day-has-entry":""}`.trim(),Te=`amount-input ${y?"day-input-has-value":""}`.trim(),Ze=`amount-input ${R?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Te}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${Et(a.foodCents)}" /></td>
                      <td><input class="${Ze}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${Et(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${fn(A,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${Et(A)}" ${l?"":"disabled"} />
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
              <div class="inline">
                <button class="btn" id="import-fixed-csv" type="button" ${l?"":"disabled"}>Import</button>
                <input id="import-fixed-csv-input" type="file" accept=".csv,text/csv" ${l?"":"disabled"} style="display:none" />
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag (Betrag wird als Budget und Ist übernommen)</p>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${l?l.fixedCosts.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${Et(a.plannedCents)}" /></td>
                    <td class="${U(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${Et(a.actualCents)}" /></td>
                    <td class="${U(a.actualCents,a.plannedCents)}">${f(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${fn(z,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${Et(z)}" ${l?"":"disabled"} />
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
              <div class="inline">
                <button class="btn" id="import-variable-csv" type="button" ${l?"":"disabled"}>Import</button>
                <input id="import-variable-csv-input" type="file" accept=".csv,text/csv" ${l?"":"disabled"} style="display:none" />
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag (Betrag wird als Budget und Ist übernommen)</p>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${l?l.variablePositions.map(a=>`<tr>
                    <td>${a.name}${a.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${Et(a.budgetCents)}" /></td>
                    <td class="${U(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${Et(a.actualCents)}" /></td>
                    <td class="${U(a.actualCents,a.budgetCents)}">${f(a.actualCents-a.budgetCents)}</td>
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
              ${fn(V,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${Et(V)}" ${l?"":"disabled"} />
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
                <span>In csv Datei (betrag;wert). Nä. Wert direkt untereinander</span>
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
          <p class="muted">Letztes verwendetes Backup: ${h}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(p.topModal||p.showUnexportedChangeLogModal||p.showPersistentAuditLogModal)),_a(),yt(),Ke(),ft()}function _a(){const i=B.querySelector("#theme-select"),l=B.querySelector("#open-years-modal"),u=B.querySelector("#open-evaluation-modal"),d=B.querySelector("#open-fixed-modal"),m=B.querySelector("#open-variable-fixed-modal"),E=B.querySelector("#open-dashboard-modal"),P=B.querySelector("#panel-modal-close"),O=B.querySelector("#panel-modal-backdrop"),A=B.querySelector("#open-unexported-change-log"),z=B.querySelector("#open-persistent-audit-log"),V=B.querySelector("#unexported-change-log-close"),Q=B.querySelector("#unexported-change-log-backup"),W=B.querySelector("#unexported-change-log-backdrop"),se=B.querySelector("#persistent-audit-log-close"),ke=B.querySelector("#persistent-audit-log-backdrop"),Ve=B.querySelector("#new-year"),ue=B.querySelector("#create-year"),Be=B.querySelector("#evaluation-query"),mt=B.querySelector("#run-evaluation"),ve=B.querySelector("#save-evaluation"),tt=B.querySelector("#year-select"),Kt=B.querySelector("#month-select");i?.addEventListener("change",()=>{const T=i.value;Fr(T)&&ga(T)}),l?.addEventListener("click",()=>{Qt("years")}),u?.addEventListener("click",()=>{Qt("evaluation")}),d?.addEventListener("click",()=>{Qt("fixed")}),m?.addEventListener("click",()=>{Qt("variable-fixed")}),E?.addEventListener("click",()=>{Qt("dashboard")}),A?.addEventListener("click",()=>{Zt()}),z?.addEventListener("click",()=>{ct()}),V?.addEventListener("click",()=>{Ct()}),Q?.addEventListener("click",async()=>{try{await Hn()}catch(T){console.error("Backup-Export fehlgeschlagen",T),te("Backup konnte nicht exportiert werden.","error")}}),W?.addEventListener("click",T=>{T.target===W&&Ct()}),se?.addEventListener("click",()=>{xt()}),ke?.addEventListener("click",T=>{T.target===ke&&xt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.dashboardTab;N!=="year"&&N!=="food"&&N!=="all"||(p.dashboardTab=N,ne())})});const q=B.querySelector("#dashboard-year-select");q?.addEventListener("change",()=>{const T=Number.parseInt(q.value,10);Number.isInteger(T)&&(p.dashboardYear=T,ne())}),P?.addEventListener("click",()=>{Kn()}),O?.addEventListener("click",T=>{T.target===O&&Kn()}),p.topModal&&window.setTimeout(()=>{P?.focus()},0),p.showUnexportedChangeLogModal&&window.setTimeout(()=>{V?.focus()},0),p.showPersistentAuditLogModal&&window.setTimeout(()=>{se?.focus()},0),ue?.addEventListener("click",async()=>{const T=Number.parseInt(Ve?.value??"",10);if(!Number.isInteger(T)){alert("Bitte gültiges Jahr eingeben.");return}await G(T)}),mt?.addEventListener("click",()=>{Ba(Be?.value??"")}),Be?.addEventListener("keydown",T=>{T.key==="Enter"&&(T.preventDefault(),Ba(Be.value))}),ve?.addEventListener("click",async()=>{await Qa()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeSavedEvaluation;N&&await Ma(N)})}),tt?.addEventListener("change",()=>{p.selectedYear=Number.parseInt(tt.value,10),p.selectedMonth=en(),ne()}),Kt?.addEventListener("change",()=>{p.selectedMonth=Number.parseInt(Kt.value,10),ne()});const ut=B.querySelector("#fixed-template-name"),it=B.querySelector("#fixed-template-amount"),Wt=B.querySelector("#add-fixed-template"),qt=B.querySelector("#cancel-fixed-template-edit"),he=B.querySelector("#annual-variable-fixed-name"),Rt=B.querySelector("#annual-variable-fixed-date"),Ge=B.querySelector("#annual-variable-fixed-amount"),je=B.querySelector("#add-annual-variable-fixed-template");Wt?.addEventListener("click",async()=>{const T=ut?.value??"",N=Ne(it?.value??"0");await gn(T,N),ut&&(ut.value=""),it&&(it.value="")}),qt?.addEventListener("click",()=>{bn()}),je?.addEventListener("click",async()=>{const T=he?.value??"",N=Rt?.value??"",ze=Ne(Ge?.value??"0");await Ls(T,N,ze),he&&(he.value=""),Rt&&(Rt.value=""),Ge&&(Ge.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeAnnualVariableFixedTemplate;N&&await yn(N)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.editFixedTemplate;N&&Gn(N)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixedTemplate;N&&await xa(N)})}),B.querySelectorAll("[data-day-food]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayFood;N&&await Ua(N,"foodCents",Ne(T.value))})}),B.querySelectorAll("[data-day-going]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayGoing;N&&await Ua(N,"goingOutCents",Ne(T.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedActual;N&&await _n(N,Ne(T.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedPlanned;N&&await ds(N,Ne(T.value))})});const Ue=B.querySelector("#fixed-budget");Ue?.addEventListener("click",T=>{T.preventDefault(),Ue.blur(),rt(Ue)}),Ue?.addEventListener("change",async()=>{await Tn(Ne(Ue.value))});const Xe=B.querySelector("#food-budget");Xe?.addEventListener("click",T=>{T.preventDefault(),Xe.blur(),rt(Xe)}),Xe?.addEventListener("change",async()=>{await nn(Ne(Xe.value))});const nt=B.querySelector("#going-out-budget");nt?.addEventListener("click",T=>{T.preventDefault(),nt.blur(),rt(nt)}),nt?.addEventListener("change",async()=>{await hs(Ne(nt.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Ps()});const Ut=B.querySelector("#misc-budget");Ut?.addEventListener("click",T=>{T.preventDefault(),Ut.blur(),rt(Ut)}),Ut?.addEventListener("change",async()=>{await Un(Ne(Ut.value))});const gt=B.querySelector("#variable-budget");gt?.addEventListener("click",T=>{T.preventDefault(),gt.blur(),rt(gt)}),gt?.addEventListener("change",async()=>{await ka(Ne(gt.value))});const wt=B.querySelector("#variable-position-name"),$t=B.querySelector("#variable-position-budget"),an=B.querySelector("#add-variable-position"),Ie=B.querySelector("#add-variable-position-recurring"),De=B.querySelector("#import-variable-csv"),Qe=B.querySelector("#import-variable-csv-input"),Ye=B.querySelector("#misc-description"),Me=B.querySelector("#misc-amount"),Vt=B.querySelector("#add-misc"),xn=B.querySelector("#add-misc-recurring"),kn=B.querySelector("#import-misc-csv"),bt=B.querySelector("#import-misc-csv-input"),_e=B.querySelector("#income-description"),at=B.querySelector("#income-source"),dt=B.querySelector("#income-amount"),Xn=B.querySelector("#add-income"),we=B.querySelector("#add-income-recurring"),sn=B.querySelector("#fixed-cost-name"),rn=B.querySelector("#fixed-cost-budget"),on=B.querySelector("#add-fixed-cost"),de=B.querySelector("#import-fixed-csv"),Ft=B.querySelector("#import-fixed-csv-input"),Ht=B.querySelector("#carryover-override");Ht?.addEventListener("click",T=>{T.preventDefault(),Ht.blur(),rt(Ht)}),Ht?.addEventListener("change",async()=>{const T=Ht.value;if(!T.trim()){await wa(null);return}await wa(Ne(T))}),on?.addEventListener("click",async()=>{const T=Ne(rn?.value??"0");await Ha(sn?.value??"",T),sn&&(sn.value=""),rn&&(rn.value="")}),de?.addEventListener("click",()=>{Ft?.click()}),Ft?.addEventListener("change",async()=>{const T=Ft.files?.[0];if(T){try{await ua(T)}catch(N){console.error("Fixkosten-CSV-Import fehlgeschlagen",N),te("CSV konnte nicht importiert werden.","error")}Ft.value=""}}),an?.addEventListener("click",async()=>{const T=Ne($t?.value??"0");await Cn(wt?.value??"",T,!1),wt&&(wt.value=""),$t&&($t.value="")}),Ie?.addEventListener("click",async()=>{const T=Ne($t?.value??"0");await Cn(wt?.value??"",T,!0),wt&&(wt.value=""),$t&&($t.value="")}),De?.addEventListener("click",()=>{Qe?.click()}),Qe?.addEventListener("change",async()=>{const T=Qe.files?.[0];if(T){try{await vs(T)}catch(N){console.error("Variable-CSV-Import fehlgeschlagen",N),te("CSV konnte nicht importiert werden.","error")}Qe.value=""}}),Vt?.addEventListener("click",async()=>{const T=Ne(Me?.value??"0");await Ja(Ye?.value??"",T,!1),Ye&&(Ye.value=""),Me&&(Me.value="")}),xn?.addEventListener("click",async()=>{const T=Ne(Me?.value??"0");await Ja(Ye?.value??"",T,!0),Ye&&(Ye.value=""),Me&&(Me.value="")}),kn?.addEventListener("click",()=>{bt?.click()}),bt?.addEventListener("change",async()=>{const T=bt.files?.[0];if(T){try{await Ea(T)}catch(N){console.error("Sonstiges-CSV-Import fehlgeschlagen",N),te("CSV konnte nicht importiert werden.","error")}bt.value=""}}),Xn?.addEventListener("click",async()=>{const T=Ne(dt?.value??"0"),N=at?.value,ze=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await Xa(_e?.value??"",T,ze,!1),_e&&(_e.value=""),dt&&(dt.value=""),at&&(at.value="salary")}),we?.addEventListener("click",async()=>{const T=Ne(dt?.value??"0"),N=at?.value,ze=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await Xa(_e?.value??"",T,ze,!0),_e&&(_e.value=""),dt&&(dt.value=""),at&&(at.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(T=>{T.addEventListener("change",async()=>{const N=T.dataset.incomeSource;if(!N)return;const ze=T.value;await Fe(N,ze==="balance"||ze==="fresh"||ze==="salary"?ze:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionBudget;N&&await $a(N,Ne(T.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),rt(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionActual;N&&await ps(N,Ne(T.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeVariablePosition;N&&await fs(N)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.moveVariablePositionNext;N&&await fe(N)})}),B.querySelectorAll("[data-remove-fixed]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixed;N&&await Je(N)})}),B.querySelectorAll("[data-remove-income]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeIncome;N&&await da(N)})}),B.querySelectorAll("[data-remove-misc]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeMisc;N&&await ms(N)})});const Qn=B.querySelector("#backup-export"),ln=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Qn?.addEventListener("click",async()=>{await Hn()}),ln?.addEventListener("change",async()=>{const T=ln.files?.[0];if(T){try{await Jn(T)}catch(N){console.error("Backup-Import fehlgeschlagen",N),te("Backup konnte nicht importiert werden.","error")}ln.value=""}})}return{init:Fs}}const Ti="modulepreload",Pi=function(B){return"/habu26/"+B},Nr={},Ai=function(p,Se,X){let ce=Promise.resolve();if(Se&&Se.length>0){let et=function(Re){return Promise.all(Re.map(le=>Promise.resolve(le).then(lt=>({status:"fulfilled",value:lt}),lt=>({status:"rejected",reason:lt}))))};var be=et;document.getElementsByTagName("link");const oe=document.querySelector("meta[property=csp-nonce]"),pe=oe?.nonce||oe?.getAttribute("nonce");ce=et(Se.map(Re=>{if(Re=Pi(Re),Re in Nr)return;Nr[Re]=!0;const le=Re.endsWith(".css"),lt=le?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Re}"]${lt}`))return;const st=document.createElement("link");if(st.rel=le?"stylesheet":Ti,le||(st.as="script"),st.crossOrigin="",st.href=Re,pe&&st.setAttribute("nonce",pe),document.head.appendChild(st),le)return new Promise((Ke,yt)=>{st.addEventListener("load",Ke),st.addEventListener("error",()=>yt(new Error(`Unable to preload CSS for ${Re}`)))})}))}function re(oe){const pe=new Event("vite:preloadError",{cancelable:!0});if(pe.payload=oe,window.dispatchEvent(pe),!pe.defaultPrevented)throw oe}return ce.then(oe=>{for(const pe of oe||[])pe.status==="rejected"&&re(pe.reason);return p().catch(re)})};function Ii(B={}){const{immediate:p=!1,onNeedRefresh:Se,onOfflineReady:X,onRegistered:ce,onRegisteredSW:re,onRegisterError:be}=B;let oe,pe;const et=async(le=!0)=>{await pe};async function Re(){if("serviceWorker"in navigator){if(oe=await Ai(async()=>{const{Workbox:le}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:le}},[]).then(({Workbox:le})=>new le("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(le=>{be?.(le)}),!oe)return;oe.addEventListener("activated",le=>{(le.isUpdate||le.isExternal)&&window.location.reload()}),oe.addEventListener("installed",le=>{le.isUpdate||X?.()}),oe.register({immediate:p}).then(le=>{re?re("/habu26/sw.js",le):ce?.(le)}).catch(le=>{be?.(le)})}}return pe=Re(),et}function Oi(){Ii({immediate:!0})}const Kr=document.getElementById("app");if(!Kr)throw new Error("App-Container nicht gefunden.");_i(Kr).init();Oi();
