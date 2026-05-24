(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const de of document.querySelectorAll('link[rel="modulepreload"]'))H(de);new MutationObserver(de=>{for(const ae of de)if(ae.type==="childList")for(const ge of ae.addedNodes)ge.tagName==="LINK"&&ge.rel==="modulepreload"&&H(ge)}).observe(document,{childList:!0,subtree:!0});function we(de){const ae={};return de.integrity&&(ae.integrity=de.integrity),de.referrerPolicy&&(ae.referrerPolicy=de.referrerPolicy),de.crossOrigin==="use-credentials"?ae.credentials="include":de.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function H(de){if(de.ep)return;de.ep=!0;const ae=we(de);fetch(de.href,ae)}})();const ui=[1,2,3,4,5,6,7,8,9,10,11,12];function ts(){return new Date().toISOString()}function kt(M){const h=Math.random().toString(36).slice(2,10);return`${M}_${Date.now()}_${h}`}function di(M,h){const we=new Date(M,h,0).getDate(),H=[];for(let de=1;de<=we;de+=1){const ae=new Date(Date.UTC(M,h-1,de));H.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return H}function hi(M){return M.map(h=>({id:kt("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Er(M,h,we){const H=h.reduce((ae,ge)=>ae+ge.plannedCents,0),de=ui.map(ae=>({month:ae,days:di(M,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:hi(h),fixedBudgetCents:H,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:M,createdAt:ts(),templateVersion:we,months:de}}function Br(M,h){return{id:kt("expense"),description:M,amountCents:h,createdAt:ts()}}function Mr(M,h,we){const H={id:kt("income"),description:M,amountCents:h,createdAt:ts()};return we?{...H,incomeSource:we}:H}function Ss(M,h){return M.toLocaleLowerCase("de-DE").includes(h)}function _r(M,h,we,H){const de=h.trim(),ae=de.toLocaleLowerCase("de-DE");if(!ae)return{id:kt("search_eval"),keyword:"",keywordNormalized:"",createdAt:ts(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let ge=0,ie=0,pe=0,Ue=0,Ne=0;const oe=Math.max(1,Math.min(12,H)),ot=[],nt=[];return M.slice().sort((Ie,mt)=>Ie.year-mt.year).forEach(Ie=>{let mt=0,tn=0,Fn=0,nn=0;Ie.months.slice().sort((gt,lt)=>gt.month-lt.month).forEach(gt=>{let lt=0,bt=0;if(gt.fixedCosts.forEach(dt=>{Ss(dt.name,ae)&&(lt+=1,bt+=dt.actualCents)}),gt.variableCosts.forEach(dt=>{Ss(dt.description,ae)&&(lt+=1,bt+=dt.amountCents)}),gt.variablePositions.forEach(dt=>{Ss(dt.name,ae)&&(lt+=1,bt+=dt.actualCents)}),gt.miscCosts.forEach(dt=>{Ss(dt.description,ae)&&(lt+=1,bt+=dt.amountCents)}),lt<=0)return;mt+=lt,tn+=bt,(Ie.year<we||Ie.year===we&&gt.month<=oe)&&(nn+=1,Fn+=bt),ge+=lt,ie+=bt,(Ie.year<we||Ie.year===we&&gt.month<=oe)&&(Ue+=1,Ne+=bt),nt.push({year:Ie.year,month:gt.month,hitCount:lt,totalCents:bt})}),!(mt<=0)&&(Ie.year===we&&(pe+=tn),ot.push({year:Ie.year,hitCount:mt,totalCents:tn,monthsWithHits:nn,monthAverageCents:nn>0?Math.round(Fn/nn):0}))}),{id:kt("search_eval"),keyword:de,keywordNormalized:ae,createdAt:ts(),totalHitCount:ge,totalCents:ie,currentYearCents:pe,monthsWithHits:Ue,monthAverageCents:Ue>0?Math.round(Ne/Ue):0,yearRows:ot,monthRows:nt}}var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pi(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var Es={exports:{}},vi=Es.exports,Tr;function mi(){return Tr||(Tr=1,(function(M,h){((we,H)=>{M.exports=H()})(vi,function(){var we=function(e,t){return(we=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},H=function(){return(H=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function de(e,t,n){for(var s,r=0,i=t.length;r<i;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:fi,ge=Object.keys,ie=Array.isArray;function pe(e,t){return typeof t=="object"&&ge(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var Ue=Object.getPrototypeOf,Ne={}.hasOwnProperty;function oe(e,t){return Ne.call(e,t)}function ot(e,t){typeof t=="function"&&(t=t(Ue(e))),(typeof Reflect>"u"?ge:Reflect.ownKeys)(t).forEach(function(n){Ie(e,n,t[n])})}var nt=Object.defineProperty;function Ie(e,t,n,s){nt(e,t,pe(n&&oe(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function mt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),Ie(e.prototype,"constructor",e),{extend:ot.bind(null,e.prototype)}}}}var tn=Object.getOwnPropertyDescriptor,Fn=[].slice;function nn(e,t,n){return Fn.call(e,t,n)}function gt(e,t){return t(e)}function lt(e){if(!e)throw new Error("Assertion Failed")}function bt(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function Ht(e,t){if(typeof t=="string"&&oe(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var i=Ht(e,t[s]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:Ht(c,t.substr(u+1))}function ut(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){lt(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)ut(e,t[s],n[s])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:ut(c=(c=e[i])&&oe(e,i)?c:e[i]={},u,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function dt(e){var t,n={};for(t in e)oe(e,t)&&(n[t]=e[t]);return n}var _s=[].concat;function Ka(e){return _s.apply([],e)}var It="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ka([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),ns=new Set(It.map(function(e){return ae[e]})),Qn=null;function yt(e){return Qn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=Qn.get(n);if(s)return s;if(ie(n)){s=[],Qn.set(n,s);for(var r=0,i=n.length;r<i;++r)s.push(t(n[r]))}else if(ns.has(n.constructor))s=n;else{var c,u=Ue(n);for(c in s=u===Object.prototype?{}:Object.create(u),Qn.set(n,s),n)oe(n,c)&&(s[c]=t(n[c]))}return s})(e),Qn=null,e}var Zn={}.toString;function qa(e){return Zn.call(e).slice(8,-1)}var Ra=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ts=typeof Ra=="symbol"?function(e){var t;return e!=null&&(t=e[Ra])&&t.apply(e)}:function(){return null};function cn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var at={};function he(e){var t,n,s,r;if(arguments.length===1){if(ie(e))return e.slice();if(this===at&&typeof e=="string")return[e];if(r=Ts(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var an=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},It=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],wt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(It),as={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function kn(e,t){this.name=e,this.message=t}function ss(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function ht(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=ss(e,t)}function Dn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=ss(e,this.failures)}mt(kn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),mt(ht).from(kn),mt(Dn).from(kn);var ba=wt.reduce(function(e,t){return e[t]=t+"Error",e},{}),As=kn,Z=wt.reduce(function(e,t){var n=t+"Error";function s(r,i){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(i?`
 `+i:""),this.inner=i||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=as[t]||n,this.inner=null)}return mt(s).from(As),e[t]=s,e},{}),rs=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,It.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));It=wt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function $e(){}function ea(e){return e}function Ps(e,t){return e==null||e===ea?t:function(n){return t(e(n))}}function wn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function is(e,t){return e===$e?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?wn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?wn(r,this.onerror):r),i!==void 0?i:n}}function Os(e,t){return e===$e?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?wn(n,this.onsuccess):n),s&&(this.onerror=this.onerror?wn(s,this.onerror):s)}}function os(e,t){return e===$e?t:function(r){var s=e.apply(this,arguments),r=(pe(r,s),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?wn(r,this.onsuccess):r),i&&(this.onerror=this.onerror?wn(i,this.onerror):i),s===void 0?c===void 0?void 0:c:pe(s,c)}}function Is(e,t){return e===$e?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function ta(e,t){return e===$e?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,i=new Array(r);r--;)i[r]=arguments[r];return n.then(function(){return t.apply(s,i)})}return t.apply(this,arguments)}}It.ModifyError=ht,It.DexieError=kn,It.BulkError=Dn;var Ft=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Nn(e){Ft=e}var Ln={},Kn=100,De=typeof Promise>"u"?[]:(wt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[De=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Ue(De),wt]:[wt,Ue(wt),wt]),wt=De[0],Un=De[1],Un=Un&&Un.then,Vt=wt&&wt.constructor,qn=!!De[2],un=function(e,t){sa.push([e,t]),Rn&&(queueMicrotask(jn),Rn=!1)},ja=!0,Rn=!0,sn=[],na=[],aa=ea,dn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},G=dn,sa=[],Dt=0,hn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=G;if(typeof e!="function"){if(e!==Ln)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ya(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(i){if(s._state===null){if(i===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&pn();i&&typeof i.then=="function"?n(s,function(u,y){i instanceof z?i._then(u,y):i.then(u,y)}):(s._state=!0,s._value=i,Xe(s)),c&&$n()}},ya.bind(null,s))}catch(i){ya(s,i)}})(this,e)}var fn={get:function(){var e=G,t=xa;function n(s,r){var i=this,c=!e.global&&(e!==G||t!==xa),u=c&&!mn(),y=new z(function($,m){$t(i,new ls(cs(s,e,c,u),cs(r,e,c,u),$,m,e))});return this._consoleTask&&(y._consoleTask=this._consoleTask),y}return n.prototype=Ln,n},set:function(e){Ie(this,"then",e&&e.prototype===Ln?fn:{get:function(){return e},set:fn.set})}};function ls(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function ya(e,t){var n,s;na.push(t),e._state===null&&(n=e._lib&&pn(),t=aa(t),e._state=!1,e._value=t,s=e,sn.some(function(r){return r._value===s._value})||sn.push(s),Xe(e),n)&&$n()}function Xe(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)$t(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),Dt===0&&(++Dt,un(function(){--Dt==0&&ra()},[]))}function $t(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Dt,un(me,[n,e,t])}}function me(e,t,n){try{var s,r=t._value;!t._state&&na.length&&(na=[]),s=Ft&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||na.indexOf(r)!==-1||(i=>{for(var c=sn.length;c;)if(sn[--c]._value===i._value)return sn.splice(c,1)})(t),n.resolve(s)}catch(i){n.reject(i)}finally{--Dt==0&&ra(),--n.psd.ref||n.psd.finalize()}}function jn(){Sn(dn,function(){pn()&&$n()})}function pn(){var e=ja;return Rn=ja=!1,e}function $n(){var e,t,n;do for(;0<sa.length;)for(e=sa,sa=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<sa.length);Rn=ja=!0}function ra(){for(var e=sn,t=(sn=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),hn.slice(0)),n=t.length;n;)t[--n]()}function ia(e){return new z(Ln,!1,e)}function ye(e,t){var n=G;return function(){var s=pn(),r=G;try{return gn(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{gn(r,!1),s&&$n()}}}ot(z.prototype,{then:fn,_then:function(e,t){$t(this,new ls(null,null,e,t,G))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:ia)(s)}):this.then(null,function(s){return(s&&s.name===t?n:ia)(s)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return ia(t)})})},timeout:function(e,t){var n=this;return e<1/0?new z(function(s,r){var i=setTimeout(function(){return r(new Z.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Ie(z.prototype,Symbol.toStringTag,"Dexie.Promise"),dn.env=Va(),ot(z,{all:function(){var e=he.apply(null,arguments).map(ka);return new z(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,i){return z.resolve(r).then(function(c){e[i]=c,--s||t(e)},n)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,n){e.then(t,n)}):new z(Ln,!0,e)},reject:ia,race:function(){var e=he.apply(null,arguments).map(ka);return new z(function(t,n){e.map(function(s){return z.resolve(s).then(t,n)})})},PSD:{get:function(){return G},set:function(e){return G=e}},totalEchoes:{get:function(){return xa}},newPSD:vn,usePSD:Sn,scheduler:{get:function(){return un},set:function(e){un=e}},rejectionMapper:{get:function(){return aa},set:function(e){aa=e}},follow:function(e,t){return new z(function(n,s){return vn(function(r,i){var c=G;c.unhandleds=[],c.onunhandled=i,c.finalize=wn(function(){var u,y=this;u=function(){y.unhandleds.length===0?r():i(y.unhandleds[0])},hn.push(function $(){u(),hn.splice(hn.indexOf($),1)}),++Dt,un(function(){--Dt==0&&ra()},[])},c.finalize),e()},t,n,s)})}}),Vt&&(Vt.allSettled&&Ie(z,"allSettled",function(){var e=he.apply(null,arguments).map(ka);return new z(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,i){return z.resolve(r).then(function(c){return s[i]={status:"fulfilled",value:c}},function(c){return s[i]={status:"rejected",reason:c}}).then(function(){return--n||t(s)})})})}),Vt.any&&typeof AggregateError<"u"&&Ie(z,"any",function(){var e=he.apply(null,arguments).map(ka);return new z(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(i,c){return z.resolve(i).then(function(u){return t(u)},function(u){r[c]=u,--s||n(new AggregateError(r))})})})}),Vt.withResolvers)&&(z.withResolvers=Vt.withResolvers);var Be={awaits:0,echoes:0,id:0},Fs=0,oa=[],Ca=0,xa=0,Ds=0;function vn(e,c,n,s){var r=G,i=Object.create(r),c=(i.parent=r,i.ref=0,i.global=!1,i.id=++Ds,dn.env,i.env=qn?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},c&&pe(i,c),++r.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},Sn(i,e,n,s));return i.ref===0&&i.finalize(),c}function Vn(){return Be.id||(Be.id=++Fs),++Be.awaits,Be.echoes+=Kn,Be.id}function mn(){return!!Be.awaits&&(--Be.awaits==0&&(Be.id=0),Be.echoes=Be.awaits*Kn,!0)}function ka(e){return Be.echoes&&e&&e.constructor===Vt?(Vn(),e.then(function(t){return mn(),t},function(t){return mn(),Ye(t)})):e}function Ns(){var e=oa[oa.length-1];oa.pop(),gn(e,!1)}function gn(e,t){var n,s,r=G;(t?!Be.echoes||Ca++&&e===G:!Ca||--Ca&&e===G)||queueMicrotask(t?(function(i){++xa,Be.echoes&&--Be.echoes!=0||(Be.echoes=Be.awaits=Be.id=0),oa.push(G),gn(i,!0)}).bind(null,e):Ns),e!==G&&(G=e,r===dn&&(dn.env=Va()),qn)&&(n=dn.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(ae,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function Va(){var e=ae.Promise;return qn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Sn(e,t,n,s,r){var i=G;try{return gn(e,!0),t(n,s,r)}finally{gn(i,!1)}}function cs(e,t,n,s){return typeof e!="function"?e:function(){var r=G;n&&Vn(),gn(t,!0);try{return e.apply(this,arguments)}finally{gn(r,!1),s&&queueMicrotask(mn)}}}function Ya(e){Promise===Vt&&Be.echoes===0?Ca===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Un).indexOf("[native code]")===-1&&(Vn=mn=$e);var Ye=z.reject,En="￿",rn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",us="String expected.",Yn=[],wa="__dbnames",Bn="readonly",$a="readwrite";function bn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ds={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Sa(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=yt(t))[e],t}}function hs(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ve(e,t){try{var n=za(e),s=za(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=fs(e),i=fs(t),c=r.length,u=i.length,y=c<u?c:u,$=0;$<y;++$)if(r[$]!==i[$])return r[$]<i[$]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var m=e,v=t,w=m.length,k=v.length,C=w<k?w:k,b=0;b<C;++b){var B=ve(m[b],v[b]);if(B!==0)return B}return w===k?0:w<k?-1:1}}catch{}return NaN}function za(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=qa(e))==="ArrayBuffer")?"binary":t}function fs(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function la(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,i){return!n.failures[i]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}ps.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return de(de([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(ie(s))return ie(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var ca=ps;function ps(e){this["@@propmod"]=e}function Wa(e,t){for(var n=ge(t),s=n.length,r=!1,i=0;i<s;++i){var c=n[i],u=t[c],y=Ht(e,c);u instanceof ca?(ut(e,c,u.execute(y)),r=!0):y!==u&&(ut(e,c,u),r=!0)}return r}Me.prototype._trans=function(e,t,n){var s=this._tx||G.trans,r=this.name,i=Ft&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c($,m,v){if(v.schema[r])return t(v.idbtrans,v);throw new Z.NotFound("Table "+r+" not part of transaction")}var u=pn();try{var y=s&&s.db._novip===this.db._novip?s===G.trans?s._promise(e,c,n):vn(function(){return s._promise(e,c,n)},{trans:s,transless:G.transless||G}):(function $(m,v,w,k){if(m.idbdb&&(m._state.openComplete||G.letThrough||m._vip)){var C=m._createTransaction(v,w,m._dbSchema);try{C.create(),m._state.PR1398_maxLoop=3}catch(b){return b.name===ba.InvalidState&&m.isOpen()&&0<--m._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),m.close({disableAutoOpen:!1}),m.open().then(function(){return $(m,v,w,k)})):Ye(b)}return C._promise(v,function(b,B){return vn(function(){return G.trans=C,k(b,B,C)})}).then(function(b){if(v==="readwrite")try{C.idbtrans.commit()}catch{}return v==="readonly"?b:C._completion.then(function(){return b})})}if(m._state.openComplete)return Ye(new Z.DatabaseClosed(m._state.dbOpenError));if(!m._state.isBeingOpened){if(!m._state.autoOpen)return Ye(new Z.DatabaseClosed);m.open().catch($e)}return m._state.dbReadyPromise.then(function(){return $(m,v,w,k)})})(this.db,e,[this.name],c);return i&&(y._consoleTask=i,y=y.catch(function($){return console.trace($),Ye($)})),y}finally{u&&$n()}},Me.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ye(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},Me.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=ge(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function($){return 0<=u.keyPath.indexOf($)})){for(var y=0;y<t.length;++y)if(t.indexOf(u.keyPath[y])===-1)return!1;return!0}return!1}).sort(function(u,y){return u.keyPath.length-y.keyPath.length})[0];if(n&&this.db._maxKey!==En)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&Ft&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(u,y){return ve(u,y)===0}var c=t.reduce(function(m,y){var $=m[0],m=m[1],v=s[y],w=e[y];return[$||v,$||!v?bn(m,v&&v.multi?function(k){return k=Ht(k,y),ie(k)&&k.some(function(C){return r(w,C)})}:function(k){return r(w,Ht(k,y))}):m]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Me.prototype.filter=function(e){return this.toCollection().and(e)},Me.prototype.count=function(e){return this.toCollection().count(e)},Me.prototype.offset=function(e){return this.toCollection().offset(e)},Me.prototype.limit=function(e){return this.toCollection().limit(e)},Me.prototype.each=function(e){return this.toCollection().each(e)},Me.prototype.toArray=function(e){return this.toCollection().toArray(e)},Me.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Me.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},Me.prototype.reverse=function(){return this.toCollection().reverse()},Me.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof hs&&(e=(c=>{var u=m,y=c;if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");function $(){this.constructor=u}function m(){return c!==null&&c.apply(this,arguments)||this}return we(u,y),u.prototype=y===null?Object.create(y):($.prototype=y.prototype,new $),Object.defineProperty(m.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),m.prototype.table=function(){return n},m})(e)),new Set),r=e.prototype;r;r=Ue(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function i(c){if(!c)return c;var u,y=Object.create(e.prototype);for(u in c)if(!s.has(u))try{y[u]=c[u]}catch{}return y}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},Me.prototype.defineClass=function(){return this.mapToClass(function(e){pe(this,e)})},Me.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=Sa(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?z.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{ut(e,i,u)}catch{}return u})},Me.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(i){var c=i??{};return Wa(c,t),s&&ut(c,s,e),n.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?z.reject(u.failures[0]):!!i})})})},Me.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=Ht(e,this.schema.primKey.keyPath))===void 0?Ye(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Me.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=Sa(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?z.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{ut(e,i,u)}catch{}return u})},Me.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return la(t,[e],s)}).then(function(s){return s.numFailures?z.reject(s.failures[0]):void 0})})},Me.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:ds}).then(function(n){return la(e,null,n)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},Me.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Me.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,i=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=s.schema.primKey,$=u.auto,u=u.keyPath;if(u&&r)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,$=u&&$?e.map(Sa(u)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:$,wantResults:i}).then(function(m){var v=m.numFailures,w=m.failures;if(v===0)return i?m.results:m.lastResult;throw new Dn("".concat(s.name,".bulkAdd(): ").concat(v," of ").concat(y," operations failed"),w)})})},Me.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,i=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=s.schema.primKey,$=u.auto,u=u.keyPath;if(u&&r)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var y=e.length,$=u&&$?e.map(Sa(u)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:$,wantResults:i}).then(function(m){var v=m.numFailures,w=m.failures;if(v===0)return i?m.results:m.lastResult;throw new Dn("".concat(s.name,".bulkPut(): ").concat(v," of ").concat(y," operations failed"),w)})})},Me.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:s,cache:"clone"}).then(function(u){var y=[],$=[],m=(e.forEach(function(v,w){var k=v.key,C=v.changes,b=u[w];if(b){for(var B=0,_=Object.keys(C);B<_.length;B++){var S=_[B],P=C[S];if(S===t.schema.primKey.keyPath){if(ve(P,k)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else ut(b,S,P)}i.push(w),y.push(k),$.push(b)}}),y.length);return n.mutate({trans:c,type:"put",keys:y,values:$,updates:{keys:s,changeSpecs:r}}).then(function(v){var w=v.numFailures,k=v.failures;if(w===0)return m;for(var C=0,b=Object.keys(k);C<b.length;C++){var B,_=b[C],S=i[Number(_)];S!=null&&(B=k[_],delete k[_],k[S]=B)}throw new Dn("".concat(t.name,".bulkUpdate(): ").concat(w," of ").concat(m," operations failed"),k)})})})},Me.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return la(t,e,r)})}).then(function(s){var r=s.numFailures,i=s.failures;if(r===0)return s.lastResult;throw new Dn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),i)})};var vs=Me;function Me(){}function ua(e){function t(c,u){if(u){for(var y=arguments.length,$=new Array(y-1);--y;)$[y-1]=arguments[y];return n[c].subscribe.apply(null,$),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var s=1,r=arguments.length;s<r;++s)i(arguments[s]);return t;function i(c,u,y){var $,m;if(typeof c!="object")return u=u||Is,m={subscribers:[],fire:y=y||$e,subscribe:function(v){m.subscribers.indexOf(v)===-1&&(m.subscribers.push(v),m.fire=u(m.fire,v))},unsubscribe:function(v){m.subscribers=m.subscribers.filter(function(w){return w!==v}),m.fire=m.subscribers.reduce(u,y)}},n[c]=t[c]=m;ge($=c).forEach(function(v){var w=$[v];if(ie(w))i(v,$[v][0],$[v][1]);else{if(w!=="asap")throw new Z.InvalidArgument("Invalid event config");var k=i(v,ea,function(){for(var C=arguments.length,b=new Array(C);C--;)b[C]=arguments[C];k.subscribers.forEach(function(B){bt(function(){B.apply(null,b)})})})}})}}function da(e,t){return mt(t).from({prototype:e}),t}function te(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ga(e,t){e.filter=bn(e.filter,t)}function o(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return bn(s(),t())}:t,e.justLimit=n&&!s}function l(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function f(e,t,n){var s=l(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function d(e,t,n,s){var r,i,c=e.replayFilter?bn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},i=function(u,y,$){var m,v;c&&!c(y,$,function(w){return y.stop(w)},function(w){return y.fail(w)})||((v=""+(m=y.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(m)),oe(r,v))||(r[v]=!0,t(u,y,$))},Promise.all([e.or._iterate(i,n),x(f(e,s,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):x(f(e,s,n),bn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function x(e,t,n,s){var r=ye(s?function(i,c,u){return n(s(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=$e},function(u){i.fail(u),c=$e})||r(i.value,i,function(u){return c=u}),c()})})}A.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ye.bind(null,n.error)):n.table._trans("readonly",e).then(t)},A.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ye.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},A.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=bn(t.algorithm,e)},A.prototype._iterate=function(e,t){return d(this._ctx,e,t,this._ctx.table.core)},A.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&pe(n,e),t._ctx=n,t},A.prototype.raw=function(){return this._ctx.valueMapper=null,this},A.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return d(t,e,n,t.table.core)})},A.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,i=r.table.core;return te(r,!0)?i.count({trans:n,query:{index:l(r,i.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,d(r,function(){return++s,!1},n,i).then(function(){return s}))}).then(e)},A.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function i(y,$){return $?i(y[n[$]],$-1):y[s]}var c=this._ctx.dir==="next"?1:-1;function u(y,$){return ve(i(y,r),i($,r))*c}return this.toArray(function(y){return y.sort(u)}).then(t)},A.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,i,c=t._ctx;return c.dir==="next"&&te(c,!0)&&0<c.limit?(s=c.valueMapper,r=l(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(u){return u=u.result,s?u.map(s):u})):(i=[],d(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},A.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,te(t)?o(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):o(t,function(){var n=e;return function(){return--n<0}})),this},A.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),o(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},A.prototype.until=function(e,t){return Ga(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},A.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},A.prototype.last=function(e){return this.reverse().first(e)},A.prototype.filter=function(e){var t;return Ga(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=bn(t.isMatch,e),this},A.prototype.and=function(e){return this.filter(e)},A.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},A.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},A.prototype.desc=function(){return this.reverse()},A.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},A.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},A.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},A.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},A.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&te(t,!0)&&0<t.limit)return this._read(function(s){var r=l(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},A.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},A.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},A.prototype.lastKey=function(e){return this.reverse().firstKey(e)},A.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Ga(this._ctx,function(s){var s=s.primaryKey.toString(),r=oe(e,s);return e[s]=!0,!r})),this},A.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(b,B){var _=B.failures;w+=b-B.numFailures;for(var S=0,P=ge(_);S<P.length;S++){var O=P[S];v.push(_[O])}}var i=typeof e=="function"?e:function(b){return Wa(b,e)},c=n.table.core,m=c.schema.primaryKey,u=m.outbound,y=m.extractKey,$=200,m=t.db._options.modifyChunkSize,v=(m&&($=typeof m=="object"?m[c.name]||m["*"]||200:m),[]),w=0,k=[],C=e===D;return t.clone().primaryKeys().then(function(b){function B(S){var P=Math.min($,b.length-S),O=b.slice(S,S+P);return(C?Promise.resolve([]):c.getMany({trans:s,keys:O,cache:"immutable"})).then(function(F){var V=[],I=[],U=u?[]:null,W=C?O:[];if(!C)for(var N=0;N<P;++N){var Y=F[N],le={value:yt(Y),primKey:b[S+N]};i.call(le,le.value,le)!==!1&&(le.value==null?W.push(b[S+N]):u||ve(y(Y),y(le.value))===0?(I.push(le.value),u&&U.push(b[S+N])):(W.push(b[S+N]),V.push(le.value)))}return Promise.resolve(0<V.length&&c.mutate({trans:s,type:"add",values:V}).then(function(be){for(var ee in be.failures)W.splice(parseInt(ee),1);r(V.length,be)})).then(function(){return(0<I.length||_&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:U,values:I,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(be){return r(I.length,be)})}).then(function(){return(0<W.length||_&&C)&&c.mutate({trans:s,type:"delete",keys:W,criteria:_,isAdditionalChunk:0<S}).then(function(be){return la(n.table,W,be)}).then(function(be){return r(W.length,be)})}).then(function(){return b.length>S+P&&B(S+$)})})}var _=te(n)&&n.limit===1/0&&(typeof e!="function"||C)&&{index:n.index,range:n.range};return B(0).then(function(){if(0<v.length)throw new ht("Error modifying one or more objects",v,w,k);return b.length})})})},A.prototype.delete=function(){var e=this._ctx,t=e.range;return!te(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(D):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(y){var u=y.failures,y=y.numFailures;if(y)throw new ht("Could not delete some values",Object.keys(u).map(function($){return u[$]}),i-y);return i-y})})})};var T=A;function A(){}var D=function(e,t){return t.value=null};function L(e,t){return e<t?-1:e===t?0:1}function J(e,t){return t<e?-1:e===t?0:1}function q(e,t,n){return e=e instanceof He?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function X(e){return new e.Collection(e,function(){return _e("")}).limit(0)}function se(k,t,n,s){var r,i,c,u,y,$,m,v=n.length;if(!n.every(function(b){return typeof b=="string"}))return q(k,us);function w(b){r=b==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},i=b==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=b==="next"?L:J;var B=n.map(function(_){return{lower:i(_),upper:r(_)}}).sort(function(_,S){return c(_.lower,S.lower)});u=B.map(function(_){return _.upper}),y=B.map(function(_){return _.lower}),m=($=b)==="next"?"":s}w("next");var k=new k.Collection(k,function(){return ce(u[0],y[v-1]+s)}),C=(k._ondirectionchange=function(b){w(b)},0);return k._addAlgorithm(function(b,B,_){var S=b.key;if(typeof S=="string"){var P=i(S);if(t(P,y,C))return!0;for(var O=null,F=C;F<v;++F){var V=((I,U,W,N,Y,le)=>{for(var be=Math.min(I.length,N.length),ee=-1,ue=0;ue<be;++ue){var Te=U[ue];if(Te!==N[ue])return Y(I[ue],W[ue])<0?I.substr(0,ue)+W[ue]+W.substr(ue+1):Y(I[ue],N[ue])<0?I.substr(0,ue)+N[ue]+W.substr(ue+1):0<=ee?I.substr(0,ee)+U[ee]+W.substr(ee+1):null;Y(I[ue],Te)<0&&(ee=ue)}return be<N.length&&le==="next"?I+W.substr(I.length):be<I.length&&le==="prev"?I.substr(0,W.length):ee<0?null:I.substr(0,ee)+N[ee]+W.substr(ee+1)})(S,P,u[F],y[F],c,$);V===null&&O===null?C=F+1:(O===null||0<c(O,V))&&(O=V)}B(O!==null?function(){b.continue(O+m)}:_)}return!1}),k}function ce(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function _e(e){return{type:1,lower:e,upper:e}}Object.defineProperty(ne.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ne.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?X(this):new this.Collection(this,function(){return ce(e,t,!n,!s)})}catch{return q(this,rn)}},ne.prototype.equals=function(e){return e==null?q(this,rn):new this.Collection(this,function(){return _e(e)})},ne.prototype.above=function(e){return e==null?q(this,rn):new this.Collection(this,function(){return ce(e,void 0,!0)})},ne.prototype.aboveOrEqual=function(e){return e==null?q(this,rn):new this.Collection(this,function(){return ce(e,void 0,!1)})},ne.prototype.below=function(e){return e==null?q(this,rn):new this.Collection(this,function(){return ce(void 0,e,!1,!0)})},ne.prototype.belowOrEqual=function(e){return e==null?q(this,rn):new this.Collection(this,function(){return ce(void 0,e)})},ne.prototype.startsWith=function(e){return typeof e!="string"?q(this,us):this.between(e,e+En,!0,!0)},ne.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):se(this,function(t,n){return t.indexOf(n[0])===0},[e],En)},ne.prototype.equalsIgnoreCase=function(e){return se(this,function(t,n){return t===n[0]},[e],"")},ne.prototype.anyOfIgnoreCase=function(){var e=he.apply(at,arguments);return e.length===0?X(this):se(this,function(t,n){return n.indexOf(t)!==-1},e,"")},ne.prototype.startsWithAnyOfIgnoreCase=function(){var e=he.apply(at,arguments);return e.length===0?X(this):se(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,En)},ne.prototype.anyOf=function(){var e,t,n=this,s=he.apply(at,arguments),r=this._cmp;try{s.sort(r)}catch{return q(this,rn)}return s.length===0?X(this):((e=new this.Collection(this,function(){return ce(s[0],s[s.length-1])}))._ondirectionchange=function(i){r=i==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(i,c,u){for(var y=i.key;0<r(y,s[t]);)if(++t===s.length)return c(u),!1;return r(y,s[t])===0||(c(function(){i.continue(s[t])}),!1)}),e)},ne.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ne.prototype.noneOf=function(){var e=he.apply(at,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return q(this,rn)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},ne.prototype.inAnyRange=function(e,_){var n=this,s=this._cmp,r=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return X(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return q(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var y=!_||_.includeLowers!==!1,$=_&&_.includeUppers===!0,m,v=r;function w(S,P){return v(S[0],P[0])}try{(m=e.reduce(function(S,P){for(var O=0,F=S.length;O<F;++O){var V=S[O];if(s(P[0],V[1])<0&&0<s(P[1],V[0])){V[0]=c(V[0],P[0]),V[1]=u(V[1],P[1]);break}}return O===F&&S.push(P),S},[])).sort(w)}catch{return q(this,rn)}var k=0,C=$?function(S){return 0<r(S,m[k][1])}:function(S){return 0<=r(S,m[k][1])},b=y?function(S){return 0<i(S,m[k][0])}:function(S){return 0<=i(S,m[k][0])},B=C,_=new this.Collection(this,function(){return ce(m[0][0],m[m.length-1][1],!y,!$)});return _._ondirectionchange=function(S){v=S==="next"?(B=C,r):(B=b,i),m.sort(w)},_._addAlgorithm(function(S,P,O){for(var F,V=S.key;B(V);)if(++k===m.length)return P(O),!1;return!C(F=V)&&!b(F)||(n._cmp(V,m[k][1])===0||n._cmp(V,m[k][0])===0||P(function(){v===r?S.continue(m[k][0]):S.continue(m[k][1])}),!1)}),_},ne.prototype.startsWithAnyOf=function(){var e=he.apply(at,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?X(this):this.inAnyRange(e.map(function(t){return[t,t+En]})):q(this,"startsWithAnyOf() only works with strings")};var He=ne;function ne(){}function Ce(e){return ye(function(t){return Qe(t),e(t.target.error),!1})}function Qe(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Se="storagemutated",Ze="x-storagemutated-1",st=ua(null,Se),R=(ze.prototype._lock=function(){return lt(!G.global),++this._reculock,this._reculock!==1||G.global||(G.lockOwnerFor=this),this},ze.prototype._unlock=function(){if(lt(!G.global),--this._reculock==0)for(G.global||(G.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{Sn(e[1],e[0])}catch{}}return this},ze.prototype._locked=function(){return this._reculock&&G.lockOwnerFor!==this},ze.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(lt(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(s);case"MissingAPIError":throw new Z.MissingAPI(s.message,s);default:throw new Z.OpenFailed(s)}if(!this.active)throw new Z.TransactionInactive;lt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ye(function(r){Qe(r),t._reject(e.error)}),e.onabort=ye(function(r){Qe(r),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ye(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&st.storagemutated.fire(e.mutatedParts)})}return this},ze.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ye(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(i,c){r._blockedFuncs.push([function(){r._promise(e,t,n).then(i,c)},G])}):n?vn(function(){var i=new z(function(c,u){r._lock();var y=t(c,u,r);y&&y.then&&y.then(c,u)});return i.finally(function(){return r._unlock()}),i._lib=!0,i}):((s=new z(function(i,c){var u=t(i,c,r);u&&u.then&&u.then(i,c)}))._lib=!0,s):Ye(new Z.TransactionInactive)},ze.prototype._root=function(){return this.parent?this.parent._root():this},ze.prototype.waitFor=function(e){var t,n=this._root(),s=z.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new z(function(i,c){s.then(function(u){return n._waitingQueue.push(ye(i.bind(null,u)))},function(u){return n._waitingQueue.push(ye(c.bind(null,u)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},ze.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},ze.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(oe(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},ze);function ze(){}function rt(e,t,n,s,r,i,c,u){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:i,src:(n&&!c?"&":"")+(s?"*":"")+(r?"++":"")+Jt(t),type:u}}function Jt(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function St(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,i,c){return i=s(i,c),i&&(r[i[0]]=i[1]),r},{}))};var s}var fe=function(e){try{return e.only([[]]),fe=function(){return[[]]},[[]]}catch{return fe=function(){return En},En}};function Et(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Ht(n,t)}:function(n){return Ht(n,e)};var t}function Le(e){return[].slice.call(e)}var Je=0;function Ke(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function et(e,t,y){function s(C){if(C.type===3)return null;if(C.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=C.lower,w=C.upper,k=C.lowerOpen,C=C.upperOpen;return v===void 0?w===void 0?null:t.upperBound(w,!!C):w===void 0?t.lowerBound(v,!!k):t.bound(v,w,!!k,!!C)}function r(m){var v,w=m.name;return{name:w,schema:m,mutate:function(k){var C=k.trans,b=k.type,B=k.keys,_=k.values,S=k.range;return new Promise(function(P,O){P=ye(P);var F=C.objectStore(w),V=F.keyPath==null,I=b==="put"||b==="add";if(!I&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var U,W=(B||_||{length:1}).length;if(B&&_&&B.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(W===0)return P({numFailures:0,failures:{},results:[],lastResult:void 0});function N(Fe){++be,Qe(Fe)}var Y=[],le=[],be=0;if(b==="deleteRange"){if(S.type===4)return P({numFailures:be,failures:le,results:[],lastResult:void 0});S.type===3?Y.push(U=F.clear()):Y.push(U=F.delete(s(S)))}else{var V=I?V?[_,B]:[_,null]:[B,null],ee=V[0],ue=V[1];if(I)for(var Te=0;Te<W;++Te)Y.push(U=ue&&ue[Te]!==void 0?F[b](ee[Te],ue[Te]):F[b](ee[Te])),U.onerror=N;else for(Te=0;Te<W;++Te)Y.push(U=F[b](ee[Te])),U.onerror=N}function vt(Fe){Fe=Fe.target.result,Y.forEach(function(on,es){return on.error!=null&&(le[es]=on.error)}),P({numFailures:be,failures:le,results:b==="delete"?B:Y.map(function(on){return on.result}),lastResult:Fe})}U.onerror=function(Fe){N(Fe),vt(Fe)},U.onsuccess=vt})},getMany:function(k){var C=k.trans,b=k.keys;return new Promise(function(B,_){B=ye(B);for(var S,P=C.objectStore(w),O=b.length,F=new Array(O),V=0,I=0,U=function(Y){Y=Y.target,F[Y._pos]=Y.result,++I===V&&B(F)},W=Ce(_),N=0;N<O;++N)b[N]!=null&&((S=P.get(b[N]))._pos=N,S.onsuccess=U,S.onerror=W,++V);V===0&&B(F)})},get:function(k){var C=k.trans,b=k.key;return new Promise(function(B,_){B=ye(B);var S=C.objectStore(w).get(b);S.onsuccess=function(P){return B(P.target.result)},S.onerror=Ce(_)})},query:(v=u,function(k){return new Promise(function(C,b){C=ye(C);var B,_,S,I=k.trans,P=k.values,O=k.limit,V=k.query,F=O===1/0?void 0:O,U=V.index,V=V.range,I=I.objectStore(w),I=U.isPrimaryKey?I:I.index(U.name),U=s(V);if(O===0)return C({result:[]});v?((V=P?I.getAll(U,F):I.getAllKeys(U,F)).onsuccess=function(W){return C({result:W.target.result})},V.onerror=Ce(b)):(B=0,_=!P&&"openKeyCursor"in I?I.openKeyCursor(U):I.openCursor(U),S=[],_.onsuccess=function(W){var N=_.result;return!N||(S.push(P?N.value:N.primaryKey),++B===O)?C({result:S}):void N.continue()},_.onerror=Ce(b))})}),openCursor:function(k){var C=k.trans,b=k.values,B=k.query,_=k.reverse,S=k.unique;return new Promise(function(P,O){P=ye(P);var I=B.index,F=B.range,V=C.objectStore(w),V=I.isPrimaryKey?V:V.index(I.name),I=_?S?"prevunique":"prev":S?"nextunique":"next",U=!b&&"openKeyCursor"in V?V.openKeyCursor(s(F),I):V.openCursor(s(F),I);U.onerror=Ce(O),U.onsuccess=ye(function(W){var N,Y,le,be,ee=U.result;ee?(ee.___id=++Je,ee.done=!1,N=ee.continue.bind(ee),Y=(Y=ee.continuePrimaryKey)&&Y.bind(ee),le=ee.advance.bind(ee),be=function(){throw new Error("Cursor not stopped")},ee.trans=C,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=ye(O),ee.next=function(){var ue=this,Te=1;return this.start(function(){return Te--?ue.continue():ue.stop()}).then(function(){return ue})},ee.start=function(ue){function Te(){if(U.result)try{ue()}catch(Fe){ee.fail(Fe)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var vt=new Promise(function(Fe,on){Fe=ye(Fe),U.onerror=Ce(on),ee.fail=on,ee.stop=function(es){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=be,Fe(es)}});return U.onsuccess=ye(function(Fe){U.onsuccess=Te,Te()}),ee.continue=N,ee.continuePrimaryKey=Y,ee.advance=le,Te(),vt},P(ee)):P(null)},O)})},count:function(k){var C=k.query,b=k.trans,B=C.index,_=C.range;return new Promise(function(S,P){var O=b.objectStore(w),O=B.isPrimaryKey?O:O.index(B.name),F=s(_),F=F?O.count(F):O.count();F.onsuccess=ye(function(V){return S(V.target.result)}),F.onerror=Ce(P)})}}}i=y,c=Le((y=e).objectStoreNames);var i,y={schema:{name:y.name,tables:c.map(function(m){return i.objectStore(m)}).map(function(m){var v=m.keyPath,w=m.autoIncrement,C=ie(v),k={},C={name:m.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:C,keyPath:v,autoIncrement:w,unique:!0,extractKey:Et(v)},indexes:Le(m.indexNames).map(function(b){return m.index(b)}).map(function(S){var P=S.name,B=S.unique,_=S.multiEntry,S=S.keyPath,P={name:P,compound:ie(S),keyPath:S,unique:B,multiEntry:_,extractKey:Et(S)};return k[Ke(S)]=P}),getIndexByKeyPath:function(b){return k[Ke(b)]}};return k[":id"]=C.primaryKey,v!=null&&(k[Ke(v)]=C.primaryKey),C})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=y.schema,u=y.hasGetAll,y=c.tables.map(r),$={};return y.forEach(function(m){return $[m.name]=m}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(m){if($[m])return $[m];throw new Error("Table '".concat(m,"' not found"))},MIN_KEY:-1/0,MAX_KEY:fe(t),schema:c}}function tt(e,t,n,s){return n=n.IDBKeyRange,t=et(t,n,s),{dbcore:e.dbcore.reduce(function(r,i){return i=i.create,H(H({},r),i(r))},t)}}function Bt(e,t){var n=t.db,n=tt(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(i){return i.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function Mt(e,t,n,s){n.forEach(function(r){var i=s[r];t.forEach(function(c){var u=(function y($,m){return tn($,m)||($=Ue($))&&y($,m)})(c,r);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?Ie(c,r,{get:function(){return this.table(r)},set:function(y){nt(this,r,{value:y,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,i))})})}function ft(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function Nt(e,t){return e._cfg.version-t._cfg.version}function _t(e,t,n,s){var r=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=St("$meta",Lt("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(i.create(n),i._completion.catch(s),i._reject.bind(i)),u=G.transless||G;vn(function(){if(G.trans=i,G.transless=u,t!==0)return Bt(e,n),$=t,((y=i).storeNames.includes("$meta")?y.table("$meta").get("version").then(function(m){return m??$}):z.resolve($)).then(function(B){var v=e,w=B,k=i,C=n,b=[],B=v._versions,_=v._dbSchema=je(0,v.idbdb,C);return(B=B.filter(function(S){return S._cfg.version>=w})).length===0?z.resolve():(B.forEach(function(S){b.push(function(){var P,O,F,V=_,I=S._cfg.dbschema,U=(it(v,V,C),it(v,I,C),_=v._dbSchema=I,Pe(V,I)),W=(U.add.forEach(function(N){xe(C,N[0],N[1].primKey,N[1].indexes)}),U.change.forEach(function(N){if(N.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var Y=C.objectStore(N.name);N.add.forEach(function(le){return We(Y,le)}),N.change.forEach(function(le){Y.deleteIndex(le.name),We(Y,le)}),N.del.forEach(function(le){return Y.deleteIndex(le)})}),S._cfg.contentUpgrade);if(W&&S._cfg.version>w)return Bt(v,C),k._memoizedTables={},P=dt(I),U.del.forEach(function(N){P[N]=V[N]}),ft(v,[v.Transaction.prototype]),Mt(v,[v.Transaction.prototype],ge(P),P),k.schema=P,(O=an(W))&&Vn(),I=z.follow(function(){var N;(F=W(k))&&O&&(N=mn.bind(null,null),F.then(N,N))}),F&&typeof F.then=="function"?z.resolve(F):I.then(function(){return F})}),b.push(function(P){var O,F,V=S._cfg.dbschema;O=V,F=P,[].slice.call(F.db.objectStoreNames).forEach(function(I){return O[I]==null&&F.db.deleteObjectStore(I)}),ft(v,[v.Transaction.prototype]),Mt(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),k.schema=v._dbSchema}),b.push(function(P){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===S._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(O){return O!=="$meta"})):P.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return b.length?z.resolve(b.shift()(k.idbtrans)).then(S):z.resolve()})().then(function(){qe(_,C)}))}).catch(c);var y,$;ge(r).forEach(function(m){xe(n,m,r[m].primKey,r[m].indexes)}),Bt(e,n),z.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function zn(e,t){qe(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=je(0,e.idbdb,t);it(e,e._dbSchema,t);for(var s=0,r=Pe(n,e._dbSchema).change;s<r.length;s++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(y){Ft&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(y.src)),We(u,y)})})(r[s]);if(typeof i=="object")return i.value}}function Pe(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],i=t[n];if(r){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||r.primKey.auto!==i.primKey.auto)c.recreate=!0,s.change.push(c);else{var u=r.idxByName,y=i.idxByName,$=void 0;for($ in u)y[$]||c.del.push($);for($ in y){var m=u[$],v=y[$];m?m.src!==v.src&&c.change.push(v):c.add.push(v)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([n,i])}return s}function xe(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(i){return We(r,i)})}function qe(e,t){ge(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(Ft&&console.debug("Dexie: Creating missing table",n),xe(t,n,e[n].primKey,e[n].indexes))})}function We(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function je(e,t,n){var s={};return nn(t.objectStoreNames,0).forEach(function(r){for(var i=n.objectStore(r),c=rt(Jt($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),u=[],y=0;y<i.indexNames.length;++y){var m=i.index(i.indexNames[y]),$=m.keyPath,m=rt(m.name,$,!!m.unique,!!m.multiEntry,!1,$&&typeof $!="string",!1);u.push(m)}s[r]=St(r,c,u)}),s}function it(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var i=s[r],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var y,$=c.indexNames[u],m=c.index($).keyPath,m=typeof m=="string"?m:"["+nn(m).join("+")+"]";t[i]&&(y=t[i].idxByName[m])&&(y.name=$,delete t[i].idxByName[m],t[i].idxByName[$]=y)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Lt(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return rt(r,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(i),n===0,s)})}pt.prototype._createTableSchema=St,pt.prototype._parseIndexSyntax=Lt,pt.prototype._parseStoresSpec=function(e,t){var n=this;ge(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),i=r.shift();if(!i)throw new Z.Schema("Invalid schema for table "+s+": "+e[s]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(s,i,r),t[s]=i}})},pt.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?pe(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(i){pe(s,i._cfg.storesSource),r=i._cfg.dbschema={},i._parseStoresSpec(s,r)}),t._dbSchema=r,ft(t,[t._allTables,t,t.Transaction.prototype]),Mt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],ge(r),r),t._storeNames=ge(r),this},pt.prototype.upgrade=function(e){return this._cfg.contentUpgrade=ta(this._cfg.contentUpgrade||$e,e),this};var Yt=pt;function pt(){}function zt(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Zt(wa,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Tt(e){return e&&typeof e.databases=="function"}function Wt(e){return vn(function(){return G.letThrough=!0,e()})}function Mn(e){return!("from"in e)}var re=function(e,t){var n;if(!this)return n=new re,e&&"d"in e&&pe(n,e),n;pe(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Xt(e,t,n){var s=ve(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(Mn(e))return pe(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(ve(n,e.from)<0)return s?Xt(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},j(e);if(0<ve(t,e.to))return r?Xt(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},j(e);ve(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<ve(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&Kt(e,s),r&&t&&Kt(e,r)}}function Kt(e,t){Mn(t)||(function n(s,r){var i=r.from,c=r.l,u=r.r;Xt(s,i,r.to),c&&n(s,c),u&&n(s,u)})(e,t)}function Wn(e,t){var n=E(t),s=n.next();if(!s.done)for(var r=s.value,i=E(e),c=i.next(r.from),u=c.value;!s.done&&!c.done;){if(ve(u.from,r.to)<=0&&0<=ve(u.to,r.from))return!0;ve(r.from,u.from)<0?r=(s=n.next(u.from)).value:u=(c=i.next(r.from)).value}return!1}function E(e){var t=Mn(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&ve(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||ve(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function j(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=H({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=Ct(n)),e.d=Ct(e)}function Ct(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Gn(e,t){return ge(t).forEach(function(n){e[n]?Kt(e[n],t[n]):e[n]=(function s(r){var i,c,u={};for(i in r)oe(r,i)&&(c=r[i],u[i]=!c||typeof c!="object"||ns.has(c.constructor)?c:s(c));return u})(t[n])}),e}function Ea(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Wn(t[n],e[n])})}ot(re.prototype,((wt={add:function(e){return Kt(this,e),this},addKey:function(e){return Xt(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Xt(t,n,n)}),this},hasKey:function(e){var t=E(this).next(e).value;return t&&ve(t.from,e)<=0&&0<=ve(t.to,e)}})[Ra]=function(){return E(this)},wt));var _n={},Ua={},qt=!1;function At(e){Gn(Ua,e),qt||(qt=!0,setTimeout(function(){qt=!1,Rt(Ua,!(Ua={}))},0))}function Rt(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(_n);s<r.length;s++)Ha(u=r[s],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=_n["idb://".concat(c,"/").concat(i)])&&Ha(u,e,n,t)}n.forEach(function(y){return y()})}function Ha(e,t,n,s){for(var r=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],y=u[0],$=[],m=0,v=u[1];m<v.length;m++){var w=v[m];Ea(t,w.obsSet)?w.subscribers.forEach(function(B){return n.add(B)}):s&&$.push(w)}s&&r.push([y,$])}if(s)for(var k=0,C=r;k<C.length;k++){var b=C[k],y=b[0],$=b[1];e.queries.query[y]=$}}function ms(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ye(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==s)throw new Z.DatabaseClosed("db.open() was cancelled")}function u(){return new z(function(w,k){if(c(),!n)throw new Z.MissingAPI;var C=e.name,b=t.autoSchema||!r?n.open(C):n.open(C,r);if(!b)throw new Z.MissingAPI;b.onerror=Ce(k),b.onblocked=ye(e._fireOnBlocked),b.onupgradeneeded=ye(function(B){var _;m=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=Qe,m.abort(),b.result.close(),(_=n.deleteDatabase(C)).onsuccess=_.onerror=ye(function(){k(new Z.NoSuchDatabase("Database ".concat(C," doesnt exist")))})):(m.onerror=Ce(k),_=B.oldVersion>Math.pow(2,62)?0:B.oldVersion,v=_<1,e.idbdb=b.result,i&&zn(e,m),_t(e,_/10,m,k))},k),b.onsuccess=ye(function(){m=null;var B,_,S,P,O,F,V=e.idbdb=b.result,I=nn(V.objectStoreNames);if(0<I.length)try{var U=V.transaction((O=I).length===1?O[0]:O,"readonly");if(t.autoSchema)F=V,P=U,(S=e).verno=F.version/10,P=S._dbSchema=je(0,F,P),S._storeNames=nn(F.objectStoreNames,0),Mt(S,[S._allTables],ge(P),P);else if(it(e,e._dbSchema,U),_=U,((_=Pe(je(0,(B=e).idbdb,_),B._dbSchema)).add.length||_.change.some(function(W){return W.add.length||W.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),r=V.version+1,i=!0,w(u());Bt(e,U)}catch{}Yn.push(e),V.onversionchange=ye(function(W){t.vcFired=!0,e.on("versionchange").fire(W)}),V.onclose=ye(function(){e.close({disableAutoOpen:!1})}),v&&(I=e._deps,O=C,Tt(F=I.indexedDB)||O===wa||zt(F,I.IDBKeyRange).put({name:O}).catch($e)),w()},k)}).catch(function(w){switch(w?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<r)return r=0,u()}return z.reject(w)})}var y,$=t.dbReadyResolve,m=null,v=!1;return z.race([s,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(w){function k(){return indexedDB.databases().finally(w)}y=setInterval(k,100),k()}).finally(function(){return clearInterval(y)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],z.resolve(Wt(function(){return e.on.ready.fire(e.vip)})).then(function w(){var k;if(0<t.onReadyBeingFired.length)return k=t.onReadyBeingFired.reduce(ta,$e),t.onReadyBeingFired=[],z.resolve(Wt(function(){return k(e.vip)})).then(w)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(w){t.dbOpenError=w;try{m&&m.abort()}catch{}return s===t.openCanceller&&e._close(),Ye(w)}).finally(function(){t.openComplete=!0,$()}).then(function(){var w;return v&&(w={},e.tables.forEach(function(k){k.schema.indexes.forEach(function(C){C.name&&(w["idb://".concat(e.name,"/").concat(k.name,"/").concat(C.name)]=new re(-1/0,[[[]]]))}),w["idb://".concat(e.name,"/").concat(k.name,"/")]=w["idb://".concat(e.name,"/").concat(k.name,"/:dels")]=new re(-1/0,[[[]]])}),st(Se).fire(w),Rt(w,!0)),e})}function Ba(e){function t(i){return e.next(i)}var n=r(t),s=r(function(i){return e.throw(i)});function r(i){return function(u){var u=i(u),y=u.value;return u.done?y:y&&typeof y.then=="function"?y.then(n,s):ie(y)?Promise.all(y).then(n,s):n(y)}}return r(t)()}function ha(e,t,n){for(var s=ie(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var gs={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return H(H({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},i=[];function c(w,k,C){var S=Ke(w),b=r[S]=r[S]||[],B=w==null?0:typeof w=="string"?1:w.length,_=0<k,S=H(H({},C),{name:_?"".concat(S,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:_,keyTail:k,keyLength:B,extractKey:Et(w),unique:!_&&C.unique});return b.push(S),S.isPrimaryKey||i.push(S),1<B&&c(B===2?w[0]:w.slice(0,B-1),k+1,C),b.sort(function(P,O){return P.keyTail-O.keyTail}),S}var u=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[u];for(var y=0,$=s.indexes;y<$.length;y++){var m=$[y];c(m.keyPath,0,m)}function v(w){var k,C=w.query.index;return C.isVirtual?H(H({},w),{query:{index:C.lowLevelIndex,range:(k=w.query.range,C=C.keyTail,{type:k.type===1?2:k.type,lower:ha(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,C),lowerOpen:!0,upper:ha(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,C),upperOpen:!0})}}):w}return H(H({},n),{schema:H(H({},s),{primaryKey:u,indexes:i,getIndexByKeyPath:function(w){return(w=r[Ke(w)])&&w[0]}}),count:function(w){return n.count(v(w))},query:function(w){return n.query(v(w))},openCursor:function(w){var k=w.query.index,C=k.keyTail,b=k.keyLength;return k.isVirtual?n.openCursor(v(w)).then(function(_){return _&&B(_)}):n.openCursor(w);function B(_){return Object.create(_,{continue:{value:function(S){S!=null?_.continue(ha(S,w.reverse?e.MAX_KEY:e.MIN_KEY,C)):w.unique?_.continue(_.key.slice(0,b).concat(w.reverse?e.MIN_KEY:e.MAX_KEY,C)):_.continue()}},continuePrimaryKey:{value:function(S,P){_.continuePrimaryKey(ha(S,e.MAX_KEY,C),P)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var S=_.key;return b===1?S[0]:S.slice(0,b)}},value:{get:function(){return _.value}}})}}})}})}};function Ma(e,t,n,s){return n=n||{},s=s||"",ge(e).forEach(function(r){var i,c,u;oe(t,r)?(i=e[r],c=t[r],typeof i=="object"&&typeof c=="object"&&i&&c?(u=qa(i))!==qa(c)?n[s+r]=t[r]:u==="Object"?Ma(i,c,n,s+r+"."):i!==c&&(n[s+r]=t[r]):i!==c&&(n[s+r]=t[r])):n[s+r]=void 0}),ge(t).forEach(function(r){oe(e,r)||(n[s+r]=t[r])}),n}function _a(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Ls={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return H(H({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return H(H({},n),{mutate:function(r){var i=G.trans,c=i.table(t).hook,u=c.deleting,y=c.creating,$=c.updating;switch(r.type){case"add":if(y.fire===$e)break;return i._promise("readwrite",function(){return m(r)},!0);case"put":if(y.fire===$e&&$.fire===$e)break;return i._promise("readwrite",function(){return m(r)},!0);case"delete":if(u.fire===$e)break;return i._promise("readwrite",function(){return m(r)},!0);case"deleteRange":if(u.fire===$e)break;return i._promise("readwrite",function(){return(function v(w,k,C){return n.query({trans:w,values:!1,query:{index:s,range:k},limit:C}).then(function(b){var B=b.result;return m({type:"delete",keys:B,trans:w}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):B.length<C?{failures:[],numFailures:0,lastResult:void 0}:v(w,H(H({},k),{lower:B[B.length-1],lowerOpen:!0}),C)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function m(v){var w,k,C,b=G.trans,B=v.keys||_a(s,v);if(B)return(v=v.type==="add"||v.type==="put"?H(H({},v),{keys:B}):H({},v)).type!=="delete"&&(v.values=de([],v.values)),v.keys&&(v.keys=de([],v.keys)),w=n,C=B,((k=v).type==="add"?Promise.resolve([]):w.getMany({trans:k.trans,keys:C,cache:"immutable"})).then(function(_){var S=B.map(function(P,O){var F,V,I,U=_[O],W={onerror:null,onsuccess:null};return v.type==="delete"?u.fire.call(W,P,U,b):v.type==="add"||U===void 0?(F=y.fire.call(W,P,v.values[O],b),P==null&&F!=null&&(v.keys[O]=P=F,s.outbound||ut(v.values[O],s.keyPath,P))):(F=Ma(U,v.values[O]),(V=$.fire.call(W,F,P,U,b))&&(I=v.values[O],Object.keys(V).forEach(function(N){oe(I,N)?I[N]=V[N]:ut(I,N,V[N])}))),W});return n.mutate(v).then(function(P){for(var O=P.failures,F=P.results,V=P.numFailures,P=P.lastResult,I=0;I<B.length;++I){var U=(F||B)[I],W=S[I];U==null?W.onerror&&W.onerror(O[I]):W.onsuccess&&W.onsuccess(v.type==="put"&&_[I]?v.values[I]:U)}return{failures:O,results:F,numFailures:V,lastResult:P}}).catch(function(P){return S.forEach(function(O){return O.onerror&&O.onerror(P)}),Promise.reject(P)})});throw new Error("Keys missing")}}})}})}};function Ta(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,i=0;r<t.keys.length&&i<e.length;++r)ve(t.keys[r],e[i])===0&&(s.push(n?yt(t.values[r]):t.values[r]),++i);return s.length===e.length?s:null}catch{return null}}var Ja={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return H(H({},n),{getMany:function(s){var r;return s.cache?(r=Ta(s.keys,s.trans._cache,s.cache==="clone"))?z.resolve(r):n.getMany(s).then(function(i){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?yt(i):i},i}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function Xa(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Qa(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Qt={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new re(e.MIN_KEY,e.MAX_KEY);return H(H({},e),{transaction:function(s,r,i){if(G.subscr&&r!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));return e.transaction(s,r,i)},table:function(s){function r(B){var b,B=B.query;return[b=B.index,new re((b=(B=B.range).lower)!=null?b:e.MIN_KEY,(b=B.upper)!=null?b:e.MAX_KEY)]}var i=e.table(s),c=i.schema,u=c.primaryKey,y=c.indexes,$=u.extractKey,m=u.outbound,v=u.autoIncrement&&y.filter(function(C){return C.compound&&C.keyPath.includes(u.keyPath)}),w=H(H({},i),{mutate:function(C){function b(Y){return Y="idb://".concat(t,"/").concat(s,"/").concat(Y),O[Y]||(O[Y]=new re)}var B,_,S,P=C.trans,O=C.mutatedParts||(C.mutatedParts={}),F=b(""),V=b(":dels"),I=C.type,W=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[_a(u,C).filter(function(Y){return Y}),C.values]:[],U=W[0],W=W[1],N=C.trans._cache;return ie(U)?(F.addKeys(U),(I=I==="delete"||U.length===W.length?Ta(U,N):null)||V.addKeys(U),(I||W)&&(B=b,_=I,S=W,c.indexes.forEach(function(Y){var le=B(Y.name||"");function be(ue){return ue!=null?Y.extractKey(ue):null}function ee(ue){Y.multiEntry&&ie(ue)?ue.forEach(function(Te){return le.addKey(Te)}):le.addKey(ue)}(_||S).forEach(function(ue,Fe){var vt=_&&be(_[Fe]),Fe=S&&be(S[Fe]);ve(vt,Fe)!==0&&(vt!=null&&ee(vt),Fe!=null)&&ee(Fe)})}))):U?(W={from:(N=U.lower)!=null?N:e.MIN_KEY,to:(I=U.upper)!=null?I:e.MAX_KEY},V.add(W),F.add(W)):(F.add(n),V.add(n),c.indexes.forEach(function(Y){return b(Y.name).add(n)})),i.mutate(C).then(function(Y){return!U||C.type!=="add"&&C.type!=="put"||(F.addKeys(Y.results),v&&v.forEach(function(le){for(var be=C.values.map(function(vt){return le.extractKey(vt)}),ee=le.keyPath.findIndex(function(vt){return vt===u.keyPath}),ue=0,Te=Y.results.length;ue<Te;++ue)be[ue][ee]=Y.results[ue];b(le.name).addKeys(be)})),P.mutatedParts=Gn(P.mutatedParts||{},O),Y})}}),k={get:function(C){return[u,new re(C.key)]},getMany:function(C){return[u,new re().addKeys(C.keys)]},count:r,query:r,openCursor:r};return ge(k).forEach(function(C){w[C]=function(b){var B=G.subscr,_=!!B,S=Xa(G,i)&&Qa(C,b)?b.obsSet={}:B;if(_){var P,B=function(W){return W="idb://".concat(t,"/").concat(s,"/").concat(W),S[W]||(S[W]=new re)},O=B(""),F=B(":dels"),_=k[C](b),V=_[0],_=_[1];if((C==="query"&&V.isPrimaryKey&&!b.values?F:B(V.name||"")).add(_),!V.isPrimaryKey){if(C!=="count")return P=C==="query"&&m&&b.values&&i.query(H(H({},b),{values:!1})),i[C].apply(this,arguments).then(function(W){if(C==="query"){if(m&&b.values)return P.then(function(be){return be=be.result,O.addKeys(be),W});var N=b.values?W.result.map($):W.result;(b.values?O:F).addKeys(N)}else{var Y,le;if(C==="openCursor")return le=b.values,(Y=W)&&Object.create(Y,{key:{get:function(){return F.addKey(Y.primaryKey),Y.key}},primaryKey:{get:function(){var be=Y.primaryKey;return F.addKey(be),be}},value:{get:function(){return le&&O.addKey(Y.primaryKey),Y.value}}})}return W});F.add(n)}}return i[C].apply(this,arguments)}}),w}})}};function bs(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=H({},t),ie(s.keys)&&(s.keys=s.keys.filter(function(r,i){return!(i in n.failures)})),"values"in s&&ie(s.values)&&(s.values=s.values.filter(function(r,i){return!(i in n.failures)})),s)}function Gt(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<ve(n,s.lower):0<=ve(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?ve(n,s.upper)<0:ve(n,s.upper)<=0));var n,s}function ys(e,t,n,s,r,i){var c,u,y,$,m,v;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,y=t.query.range,$=s.schema.primaryKey.extractKey,m=c.extractKey,v=(c.lowLevelIndex||c).extractKey,(s=n.reduce(function(w,k){var C=w,b=[];if(k.type==="add"||k.type==="put")for(var B=new re,_=k.values.length-1;0<=_;--_){var S,P=k.values[_],O=$(P);!B.hasKey(O)&&(S=m(P),u&&ie(S)?S.some(function(W){return Gt(W,y)}):Gt(S,y))&&(B.addKey(O),b.push(P))}switch(k.type){case"add":var F=new re().addKeys(t.values?w.map(function(N){return $(N)}):w),C=w.concat(t.values?b.filter(function(N){return N=$(N),!F.hasKey(N)&&(F.addKey(N),!0)}):b.map(function(N){return $(N)}).filter(function(N){return!F.hasKey(N)&&(F.addKey(N),!0)}));break;case"put":var V=new re().addKeys(k.values.map(function(N){return $(N)}));C=w.filter(function(N){return!V.hasKey(t.values?$(N):N)}).concat(t.values?b:b.map(function(N){return $(N)}));break;case"delete":var I=new re().addKeys(k.keys);C=w.filter(function(N){return!I.hasKey(t.values?$(N):N)});break;case"deleteRange":var U=k.range;C=w.filter(function(N){return!Gt($(N),U)})}return C},e))===e)?e:(s.sort(function(w,k){return ve(v(w),v(k))||ve($(w),$(k))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),i?Object.freeze(s):s)}function Cs(e,t){return ve(e.lower,t.lower)===0&&ve(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function xs(e,t){return((n,s,r,i)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=ve(n,s))===0){if(r&&i)return 0;if(r)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,i)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=ve(n,s))===0){if(r&&i)return 0;if(r)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function ks(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,i;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&cn(i,r)},3e3))})}var ws={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return H(H({},e),{transaction:function(n,s,r){var i,c,u=e.transaction(n,s,r);return s==="readwrite"&&(r=(i=new AbortController).signal,u.addEventListener("abort",(c=function(y){return function(){if(i.abort(),s==="readwrite"){for(var $=new Set,m=0,v=n;m<v.length;m++){var w=v[m],k=_n["idb://".concat(t,"/").concat(w)];if(k){var C=e.table(w),b=k.optimisticOps.filter(function(Y){return Y.trans===u});if(u._explicit&&y&&u.mutatedParts)for(var B=0,_=Object.values(k.queries.query);B<_.length;B++)for(var S=0,P=(V=_[B]).slice();S<P.length;S++)Ea((I=P[S]).obsSet,u.mutatedParts)&&(cn(V,I),I.subscribers.forEach(function(Y){return $.add(Y)}));else if(0<b.length){k.optimisticOps=k.optimisticOps.filter(function(Y){return Y.trans!==u});for(var O=0,F=Object.values(k.queries.query);O<F.length;O++)for(var V,I,U,W=0,N=(V=F[O]).slice();W<N.length;W++)(I=N[W]).res!=null&&u.mutatedParts&&(y&&!I.dirty?(U=Object.isFrozen(I.res),U=ys(I.res,I.req,b,C,I,U),I.dirty?(cn(V,I),I.subscribers.forEach(function(Y){return $.add(Y)})):U!==I.res&&(I.res=U,I.promise=z.resolve({result:U}))):(I.dirty&&cn(V,I),I.subscribers.forEach(function(Y){return $.add(Y)})))}}}$.forEach(function(Y){return Y()})}}})(!1),{signal:r}),u.addEventListener("error",c(!1),{signal:r}),u.addEventListener("complete",c(!0),{signal:r})),u},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return H(H({},s),{mutate:function(i){var c,u=G.trans;return!r.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=_n["idb://".concat(t,"/").concat(n)])?(u=s.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||_a(r,i).some(function(y){return y==null}))?(c.optimisticOps.push(i),i.mutatedParts&&At(i.mutatedParts),u.then(function(y){0<y.numFailures&&(cn(c.optimisticOps,i),(y=bs(0,i,y))&&c.optimisticOps.push(y),i.mutatedParts)&&At(i.mutatedParts)}),u.catch(function(){cn(c.optimisticOps,i),i.mutatedParts&&At(i.mutatedParts)})):u.then(function(y){var $=bs(0,H(H({},i),{values:i.values.map(function(m,v){var w;return y.failures[v]?m:(ut(w=(w=r.keyPath)!=null&&w.includes(".")?yt(m):H({},m),r.keyPath,y.results[v]),w)})}),y);c.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&At(i.mutatedParts)})}),u):s.mutate(i)},query:function(i){var c,u,y,$,m,v,w;return Xa(G,s)&&Qa("query",i)?(c=((y=G.trans)==null?void 0:y.db._options.cache)==="immutable",u=(y=G).requery,y=y.signal,v=((k,C,b,B)=>{var _=_n["idb://".concat(k,"/").concat(C)];if(!_)return[];if(!(k=_.queries[b]))return[null,!1,_,null];var S=k[(B.query?B.query.index.name:null)||""];if(!S)return[null,!1,_,null];switch(b){case"query":var P=S.find(function(O){return O.req.limit===B.limit&&O.req.values===B.values&&Cs(O.req.query.range,B.query.range)});return P?[P,!0,_,S]:[S.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=B.limit&&(!B.values||O.req.values)&&xs(O.req.query.range,B.query.range)}),!1,_,S];case"count":return P=S.find(function(O){return Cs(O.req.query.range,B.query.range)}),[P,!!P,_,S]}})(t,n,"query",i),w=v[0],$=v[2],m=v[3],w&&v[1]?w.obsSet=i.obsSet:(v=s.query(i).then(function(k){var C=k.result;if(w&&(w.res=C),c){for(var b=0,B=C.length;b<B;++b)Object.freeze(C[b]);Object.freeze(C)}else k.result=yt(C);return k}).catch(function(k){return m&&w&&cn(m,w),Promise.reject(k)}),w={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},m?m.push(w):(m=[w],($=$||(_n["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=m)),ks(w,m,u,y),w.promise.then(function(k){return{result:ys(k.result,i,$?.optimisticOps,s,w,c)}})):s.query(i)}})}})}};function fa(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}Ve.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Nt),n.stores({}),this._state.autoSchema=!1),n},Ve.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||G.letThrough||this._vip)?e():new z(function(n,s){if(t._state.openComplete)return s(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new Z.DatabaseClosed);t.open().catch($e)}t._state.dbReadyPromise.then(n,s)}).then(e)},Ve.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,i=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:s??10,name:r}),i.sort(function(c,u){return c.level-u.level}),this},Ve.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},Ve.prototype.open=function(){var e=this;return Sn(dn,function(){return ms(e)})},Ve.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Yn.indexOf(this);if(0<=t&&Yn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(n){e.dbReadyResolve=n}),e.openCanceller=new z(function(n,s){e.cancelOpen=s}))},Ve.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ve.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new z(function(r,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=ye(function(){var y,$,m;y=t._deps,$=t.name,Tt(m=y.indexedDB)||$===wa||zt(m,y.IDBKeyRange).delete($).catch($e),r()}),u.onerror=Ce(i),u.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},Ve.prototype.backendDB=function(){return this.idbdb},Ve.prototype.isOpen=function(){return this.idbdb!==null},Ve.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ve.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ve.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ve.prototype,"tables",{get:function(){var e=this;return ge(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ve.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];return s=i.pop(),[t,Ka(i),s]}).apply(this,arguments);return this._transaction.apply(this,e)},Ve.prototype._transaction=function(e,t,n){var s,r,i=this,c=G.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===Bn)s=Bn;else{if(e!="rw"&&e!=$a)throw new Z.InvalidArgument("Invalid transaction mode: "+e);s=$a}if(c){if(c.mode===Bn&&s===$a){if(!u)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function($){if(c&&c.storeNames.indexOf($)===-1){if(!u)throw new Z.SubTransaction("Table "+$+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch($){return c?c._promise(null,function(m,v){v($)}):Ye($)}var y=(function $(m,v,w,k,C){return z.resolve().then(function(){var S=G.transless||G,b=m._createTransaction(v,w,m._dbSchema,k),S=(b.explicit=!0,{trans:b,transless:S});if(k)b.idbtrans=k.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,m._state.PR1398_maxLoop=3}catch(P){return P.name===ba.InvalidState&&m.isOpen()&&0<--m._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),m.close({disableAutoOpen:!1}),m.open().then(function(){return $(m,v,w,null,C)})):Ye(P)}var B,_=an(C),S=(_&&Vn(),z.follow(function(){var P;(B=C.call(b,b))&&(_?(P=mn.bind(null,null),B.then(P,P)):typeof B.next=="function"&&typeof B.throw=="function"&&(B=Ba(B)))},S));return(B&&typeof B.then=="function"?z.resolve(B).then(function(P){return b.active?P:Ye(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return B})).then(function(P){return k&&b._resolve(),b._completion.then(function(){return P})}).catch(function(P){return b._reject(P),Ye(P)})})}).bind(null,this,s,r,c,n);return c?c._promise(s,y,"lock"):G.trans?Sn(G.transless,function(){return i._whenReady(y)}):this._whenReady(y)},Ve.prototype.table=function(e){if(oe(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var Zt=Ve;function Ve(e,t){var n,s,r,i,c,u=this,y=(this._middlewares={},this.verno=0,Ve.dependencies),y=(this._options=t=H({addons:Ve.addons,autoOpen:!0,indexedDB:y.indexedDB,IDBKeyRange:y.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),m=($.dbReadyPromise=new z(function(v){$.dbReadyResolve=v}),$.openCanceller=new z(function(v,w){$.cancelOpen=w}),this._state=$,this.name=e,this.on=ua(this,"populate","blocked","versionchange","close",{ready:[ta,$e]}),this.once=function(v,w){var k=function(){for(var C=[],b=0;b<arguments.length;b++)C[b]=arguments[b];u.on(v).unsubscribe(k),w.apply(u,C)};return u.on(v,k)},this.on.ready.subscribe=gt(this.on.ready.subscribe,function(v){return function(w,k){Ve.vip(function(){var C,b=u._state;b.openComplete?(b.dbOpenError||z.resolve().then(w),k&&v(w)):b.onReadyBeingFired?(b.onReadyBeingFired.push(w),k&&v(w)):(v(w),C=u,k||v(function B(){C.on.ready.unsubscribe(w),C.on.ready.unsubscribe(B)}))})}}),this.Collection=(n=this,da(T.prototype,function(B,b){this.db=n;var k=ds,C=null;if(b)try{k=b()}catch(S){C=S}var b=B._ctx,B=b.table,_=B.hook.reading.fire;this._ctx={table:B,index:b.index,isPrimKey:!b.index||B.schema.primKey.keyPath&&b.index===B.schema.primKey.name,range:k,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:C,or:b.or,valueMapper:_!==ea?_:null}})),this.Table=(s=this,da(vs.prototype,function(v,w,k){this.db=s,this._tx=k,this.name=v,this.schema=w,this.hook=s._allTables[v]?s._allTables[v].hook:ua(null,{creating:[is,$e],reading:[Ps,ea],updating:[os,$e],deleting:[Os,$e]})})),this.Transaction=(r=this,da(R.prototype,function(v,w,k,C,b){var B=this;v!=="readonly"&&w.forEach(function(_){_=(_=k[_])==null?void 0:_.yProps,_&&(w=w.concat(_.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=v,this.storeNames=w,this.schema=k,this.chromeTransactionDurability=C,this.idbtrans=null,this.on=ua(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(_,S){B._resolve=_,B._reject=S}),this._completion.then(function(){B.active=!1,B.on.complete.fire()},function(_){var S=B.active;return B.active=!1,B.on.error.fire(_),B.parent?B.parent._reject(_):S&&B.idbtrans&&B.idbtrans.abort(),Ye(_)})})),this.Version=(i=this,da(Yt.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,da(He.prototype,function(v,w,k){if(this.db=c,this._ctx={table:v,index:w===":id"?null:w,or:k},this._cmp=this._ascending=ve,this._descending=function(C,b){return ve(b,C)},this._max=function(C,b){return 0<ve(C,b)?C:b},this._min=function(C,b){return ve(C,b)<0?C:b},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=fe(t.IDBKeyRange),this._createTransaction=function(v,w,k,C){return new u.Transaction(v,w,k,u._options.chromeTransactionDurability,C)},this._fireOnBlocked=function(v){u.on("blocked").fire(v),Yn.filter(function(w){return w.name===u.name&&w!==u&&!w._state.vcFired}).map(function(w){return w.on("versionchange").fire(v)})},this.use(Ja),this.use(ws),this.use(Qt),this.use(gs),this.use(Ls),new Proxy(this,{get:function(v,w,k){var C;return w==="_vip"||(w==="table"?function(b){return fa(u.table(b),m)}:(C=Reflect.get(v,w,k))instanceof vs?fa(C,m):w==="tables"?C.map(function(b){return fa(b,m)}):w==="_createTransaction"?function(){return fa(C.apply(this,arguments),m)}:C)}}));this.vip=m,y.forEach(function(v){return v(u)})}var Aa,Un=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",$s=(Pa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Pa.prototype[Un]=function(){return this},Pa);function Pa(e){this._subscribe=e}try{Aa={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{Aa={indexedDB:null,IDBKeyRange:null}}function Tn(e){var t,n=!1,s=new $s(function(r){var i=an(e),c,u=!1,y={},$={},m={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),v&&st.storagemutated.unsubscribe(k))}},v=(r.start&&r.start(m),!1),w=function(){return Ya(C)},k=function(b){Gn(y,b),Ea($,y)&&w()},C=function(){var b,B,_;!u&&Aa.indexedDB&&(y={},b={},c&&c.abort(),c=new AbortController,_=(S=>{var P=pn();try{i&&Vn();var O=vn(e,S);return O=i?O.finally(mn):O}finally{P&&$n()}})(B={subscr:b,signal:c.signal,requery:w,querier:e,trans:null}),Promise.resolve(_).then(function(S){n=!0,t=S,u||B.signal.aborted||(y={},(P=>{for(var O in P)if(oe(P,O))return;return 1})($=b)||v||(st(Se,k),v=!0),Ya(function(){return!u&&r.next&&r.next(S)}))},function(S){n=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||u||Ya(function(){u||r.error&&r.error(S)})}))};return setTimeout(w,0),m});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var An=Zt;function Za(e){var t=yn;try{yn=!0,st.storagemutated.fire(e),Rt(e,!0)}finally{yn=t}}ot(An,H(H({},It),{delete:function(e){return new An(e,{addons:[]}).delete()},exists:function(e){return new An(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=An.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(Tt(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==wa})}):zt(n,t).toCollection().primaryKeys()).then(e)}catch{return Ye(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){pe(this,e)}},ignoreTransaction:function(e){return G.trans?Sn(G.transless,e):e()},vip:Wt,async:function(e){return function(){try{var t=Ba(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(n){return Ye(n)}}},spawn:function(e,t,n){try{var s=Ba(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:z.resolve(s)}catch(r){return Ye(r)}},currentTransaction:{get:function(){return G.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?An.ignoreTransaction(e):e).timeout(t||6e4),G.trans?G.trans.waitFor(e):e},Promise:z,debug:{get:function(){return Ft},set:function(e){Nn(e)}},derive:mt,extend:pe,props:ot,override:gt,Events:ua,on:st,liveQuery:Tn,extendObservabilitySet:Gn,getByKeyPath:Ht,setByKeyPath:ut,delByKeyPath:function(e,t){typeof t=="string"?ut(e,t,void 0):"length"in t&&[].map.call(t,function(n){ut(e,n,void 0)})},shallowClone:dt,deepClone:yt,getObjectDiff:Ma,cmp:ve,asap:bt,minKey:-1/0,addons:[],connections:Yn,errnames:ba,dependencies:Aa,cache:_n,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),An.maxKey=fe(An.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(st(Se,function(e){yn||(e=new CustomEvent(Ze,{detail:e}),yn=!0,dispatchEvent(e),yn=!1)}),addEventListener(Ze,function(e){e=e.detail,yn||Za(e)}));var Hn,yn=!1,Jn=function(){};return typeof BroadcastChannel<"u"&&((Jn=function(){(Hn=new BroadcastChannel(Ze)).onmessage=function(e){return e.data&&Za(e.data)}})(),typeof Hn.unref=="function"&&Hn.unref(),st(Se,function(e){yn||Hn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Zt.disableBfCache&&e.persisted){Ft&&console.debug("Dexie: handling persisted pagehide"),Hn?.close();for(var t=0,n=Yn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Zt.disableBfCache&&e.persisted&&(Ft&&console.debug("Dexie: handling persisted pageshow"),Jn(),Za({all:new re(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof kn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!rs[e.name]?e:(t=new rs[e.name](t||e.message,e),"stack"in e&&Ie(t,"stack",{get:function(){return this.inner.stack}}),t)},Nn(Ft),H(Zt,Object.freeze({__proto__:null,Dexie:Zt,Entity:hs,PropModification:ca,RangeSet:re,add:function(e){return new ca({add:e})},cmp:ve,default:Zt,liveQuery:Tn,mergeRanges:Kt,rangesOverlap:Wn,remove:function(e){return new ca({remove:e})},replacePrefix:function(e,t){return new ca({replacePrefix:[e,t]})}}),{default:Zt}),Zt})})(Es)),Es.exports}var gi=mi();const Vs=pi(gi),Ar=Symbol.for("Dexie"),Ms=globalThis[Ar]||(globalThis[Ar]=Vs);if(Vs.semVer!==Ms.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Vs.semVer} and ${Ms.semVer}`);const{liveQuery:Pi,mergeRanges:Oi,rangesOverlap:Ii,RangeSet:Fi,cmp:Di,Entity:Ni,PropModification:Li,replacePrefix:Ki,add:qi,remove:Ri,DexieYProvider:ji}=Ms,Oe=new Ms("haushaltsbuch-db");Oe.version(1).stores({years:"year",fixedTemplateState:"id"});Oe.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Oe.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});Oe.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const In="singleton";function La(){return new Date().toISOString()}async function ga(){return Oe.years.orderBy("year").toArray()}async function bi(M){return Oe.years.get(M)}async function ma(M){await Oe.years.put(M)}async function Ys(){const M=await Oe.fixedTemplateState.get(In);if(!M){const h={id:In,templates:[],version:La(),updatedAt:new Date().toISOString()};return await Oe.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function zs(M){const h=La();return await Oe.fixedTemplateState.put({id:In,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Ws(){const M=await Oe.annualVariableFixedTemplateState.get(In);if(!M){const h={id:In,templates:[],version:La(),updatedAt:new Date().toISOString()};return await Oe.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Gs(M){const h=La();return await Oe.annualVariableFixedTemplateState.put({id:In,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function yi(M){await Oe.auditLog.put(M)}async function Us(){const M=await Oe.searchEvaluationState.get(In);if(!M){const h={id:In,results:[],version:La(),updatedAt:new Date().toISOString()};return await Oe.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:M.results,version:M.version}}async function Bs(M){const h=La();return await Oe.searchEvaluationState.put({id:In,results:M,version:h,updatedAt:new Date().toISOString()}),h}async function Hs(){return Oe.auditLog.orderBy("timestampIso").toArray()}async function Ci(M){await Oe.auditLog.clear(),M.length!==0&&await Oe.auditLog.bulkPut(M)}async function xi(){const M=await ga(),[h,we,H,de]=await Promise.all([Ys(),Ws(),Hs(),Us()]);return{exportedAt:new Date().toISOString(),years:M,fixedTemplates:h.templates,annualVariableFixedTemplates:we.templates,auditLogEntries:H,savedSearchEvaluations:de.results}}async function ki(M){await Oe.transaction("rw",[Oe.years,Oe.fixedTemplateState,Oe.annualVariableFixedTemplateState,Oe.auditLog,Oe.searchEvaluationState],async()=>{await Oe.years.clear(),await Oe.years.bulkPut(M.years),await zs(M.fixedTemplates),await Gs(M.annualVariableFixedTemplates??[]),await Ci(M.auditLogEntries??[]),await Bs(M.savedSearchEvaluations??[])})}function Re(M){const h=M.replace(",",".").trim();if(!h)return 0;const we=Number.parseFloat(h);return Number.isNaN(we)?0:Math.round(we*100)}const wi=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function p(M){return wi.format(M/100)}function xt(M){return(M/100).toFixed(2)}function Ae(M){return new Date(2026,M-1,1).toLocaleDateString("de-DE",{month:"long"})}const Fr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Pr(M){return Fr.includes(M)}function $i(M){switch(M){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Or=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Si(M){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},we="habu-theme",H="habu-backup-dirty",de="habu-unexported-change-log",ae="habu-last-backup-filename",ge="habu-recurring-budget-defaults";let ie=null,pe=null,Ue=null,Ne=null,oe=!1,ot=!1;const nt=new WeakMap;function Ie(){const o=M.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),x=l.getPropertyValue("--table-stripe").trim(),T=l.getPropertyValue("--table-border").trim(),A=l.getPropertyValue("--budget-under").trim(),D=l.getPropertyValue("--danger-2").trim(),L=96,J=250,q=X=>1-Math.pow(1-Math.max(0,Math.min(1,X)),3);o.forEach(X=>{X.dataset.hoverBound!=="1"&&(X.dataset.hoverBound="1",X.addEventListener("mouseenter",()=>{X.dataset.hovering="1",Ie()}),X.addEventListener("mouseleave",()=>{delete X.dataset.hovering,delete X.dataset.hoverX,Ie()}),X.addEventListener("mousemove",Pe=>{const xe=X.getBoundingClientRect(),qe=Math.round(Pe.clientX-xe.left);X.dataset.hoverX=String(qe),Ie()}));const se=Number.parseInt(X.dataset.budgetCents??"0",10),ce=Number.parseInt(X.dataset.actualCents??"0",10),_e=X.dataset.label??"Kategorie",He=X.dataset.hovering==="1",ne=`${_e}|${se}|${ce}`,Ce=X.dataset.lastRenderSignature!==ne;X.dataset.lastRenderSignature=ne;const Qe=Math.max(120,Math.floor(X.clientWidth||120)),Se=window.devicePixelRatio||1,Ze=Math.floor(Qe*Se),st=Math.floor(L*Se);(X.width!==Ze||X.height!==st)&&(X.width=Ze,X.height=st);const R=X.getContext("2d");if(!R)return;const ze=Math.max(1,se,ce),rt=Math.min(1,Math.max(0,se/ze)),Jt=Math.min(1,Math.max(0,ce/ze)),St=se-ce,fe=se>0?ce/se*100:ce>0?100:0,Et=8,Le=Et,Je=34,Ke=Qe-Et*2,et=22,tt=Number.parseInt(X.dataset.hoverX??"-1",10),Bt=(Pe,xe,qe,We,je)=>{R.beginPath(),R.moveTo(Pe+je,xe),R.lineTo(Pe+qe-je,xe),R.quadraticCurveTo(Pe+qe,xe,Pe+qe,xe+je),R.lineTo(Pe+qe,xe+We-je),R.quadraticCurveTo(Pe+qe,xe+We,Pe+qe-je,xe+We),R.lineTo(Pe+je,xe+We),R.quadraticCurveTo(Pe,xe+We,Pe,xe+We-je),R.lineTo(Pe,xe+je),R.quadraticCurveTo(Pe,xe,Pe+je,xe),R.closePath()},Mt=Pe=>{R.setTransform(1,0,0,1,0,0),R.clearRect(0,0,X.width,X.height),R.scale(Se,Se),Bt(Le,Je,Ke,et,8),R.fillStyle=x,R.fill(),R.strokeStyle=T,R.lineWidth=1,R.stroke();const xe=[.6,.25,.15],qe=[.1,.16,.24];let We=0;xe.forEach((pt,zt)=>{const Tt=Ke*pt;R.save(),R.globalAlpha=qe[zt]??.1,R.fillStyle=d,R.fillRect(Le+We,Je,Tt,et),R.restore(),We+=Tt});const je=se>0&&ce>se?D:A,it=Ke*Jt*Pe;Bt(Le,Je+3,it,et-6,6),R.fillStyle=je,R.fill(),He&&(R.save(),R.strokeStyle=je,R.lineWidth=1.5,R.globalAlpha=.8,Bt(Le-1,Je+2,Math.max(2,it+2),et-4,7),R.stroke(),R.restore());const Lt=Le+Ke*rt;R.strokeStyle=f,R.lineWidth=He?3:2,R.beginPath(),R.moveTo(Lt,Je-3),R.lineTo(Lt,Je+et+3),R.stroke(),He&&tt>=Le&&tt<=Le+Ke&&(R.save(),R.strokeStyle=f,R.globalAlpha=.35,R.lineWidth=1,R.beginPath(),R.moveTo(tt,Je-8),R.lineTo(tt,Je+et+8),R.stroke(),R.restore()),R.fillStyle=f,R.font="600 12px system-ui, -apple-system, sans-serif",R.textAlign="left",R.textBaseline="top",R.fillText(_e,Le,10);const Yt=fe*Pe;if(R.fillStyle=fe>100?D:fe<100?A:d,R.textAlign="right",R.fillText(`${Yt.toFixed(0)}%`,Le+Ke,10),R.fillStyle=d,R.font="500 11px system-ui, -apple-system, sans-serif",R.textAlign="left",R.textBaseline="top",R.fillText(`Ist ${p(ce)} · Ziel ${p(se)} · Δ ${St>=0?"+":""}${p(St)}`,Le,64),He){const pt=`Nutzung ${fe.toFixed(1)}%`;R.font="600 11px system-ui, -apple-system, sans-serif";const zt=8,Tt=5,Wt=22,re=R.measureText(pt).width+zt*2,Xt=Number.isFinite(tt)?tt-re/2:Le+Ke-re,Kt=Math.min(Le+Ke-re,Math.max(Le,Xt)),Wn=Je-Wt-8;R.save(),R.fillStyle=f,R.globalAlpha=.92,Bt(Kt,Wn,re,Wt,6),R.fill(),R.restore(),R.fillStyle=x,R.textAlign="left",R.textBaseline="top",R.fillText(pt,Kt+zt,Wn+Tt)}},ft=nt.get(X);if(ft&&window.cancelAnimationFrame(ft),!Ce){Mt(1);return}const Nt=performance.now(),_t=Pe=>{const xe=Pe-Nt,qe=Math.min(1,xe/J);if(Mt(q(qe)),qe<1){const We=window.requestAnimationFrame(_t);nt.set(X,We);return}nt.delete(X)},zn=window.requestAnimationFrame(_t);nt.set(X,zn)})}function mt(){M.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),x=l.querySelector("[data-year-trend-active-net]"),T=l.querySelector("[data-year-trend-active-income]"),A=l.querySelector("[data-year-trend-active-expense]"),D=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!x||!T||!A||!D)return;const J=(se,ce)=>{se.classList.remove("danger","budget-under");const _e=ce<0?"danger":ce>0?"budget-under":"";_e&&se.classList.add(_e)},q=se=>{const ce=se.dataset.monthLabel??"-",_e=Number.parseInt(se.dataset.netCents??"0",10),He=Number.parseInt(se.dataset.actualNetCents??"0",10),ne=Number.parseInt(se.dataset.incomeCents??"0",10),Ce=Number.parseInt(se.dataset.expenseCents??"0",10),Qe=Number.parseInt(se.dataset.deltaCents??"0",10);d.textContent=ce,x.textContent=p(_e),T.textContent=p(ne),A.textContent=p(Ce),D.textContent=`${Qe>=0?"+":""}${p(Qe)}`,J(x,_e),J(D,Qe),f.forEach(Se=>{const Ze=Se===se;Se.classList.toggle("is-active",Ze),Se.setAttribute("aria-pressed",String(Ze))}),L&&(L.textContent=`${ce}: Kalkulierter Saldo ${p(_e)}, Ist-Saldo ${p(He)}, Einkommen ${p(ne)}, Ausgaben ${p(Ce)}`)};f.forEach(se=>{const ce=()=>{q(se)};se.addEventListener("mouseenter",ce),se.addEventListener("focus",ce),se.addEventListener("click",ce)});const X=f.find(se=>se.dataset.pointDefault==="1")??f[f.length-1];X&&q(X)})}function tn(o){if(o==="dashboard"){const l=h.years.slice().sort((d,x)=>x.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,te()}function Fn(){h.topModal&&(h.topModal=null,te())}function nn(){h.showUnexportedChangeLogModal=!0,te()}function gt(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,te())}function lt(){h.showPersistentAuditLogModal=!0,te()}function bt(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,te())}function Ht(){oe||(oe=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),gt();return}if(h.showPersistentAuditLogModal){o.preventDefault(),bt();return}h.topModal&&(o.preventDefault(),Fn())}}))}function ut(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function dt(){const o=M.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",ut())}function _s(){if(ot)return;ot=!0;const o=()=>{dt(),Ie()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Ka(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),ie=l,l}function ns(){if(pe&&document.body.contains(pe))return pe;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return pe=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),pe=l,l}function Qn(){if(Ne&&document.body.contains(Ne))return Ne;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return Ne=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),Ne=l,l}function yt(){if(!pe){Ue=null;return}pe.innerHTML="",Ue=null}function Zn(){Ne&&(Ne.innerHTML="")}function qa(o,l,f){const d=new Date,x=d.getFullYear(),T=d.getMonth()+1,A=d.getDate(),D=new Date(o,l,0).getDate();if(o<x||o===x&&l<T)return{occurrences:0,remainingDays:0};const L=o===x&&l===T?Math.min(A,D):1,J=Math.max(0,D-L+1);let q=0;for(let X=L;X<=D;X+=1)new Date(o,l-1,X).getDay()===f&&(q+=1);return{occurrences:q,remainingDays:J}}async function Ra(o,l){const f=De();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await Xe(`Wocheneinkauf geplant: ${Or.find(d=>d.value===o)?.label??"Wochentag"} mit ${p(f.weeklyShoppingEstimateCents)} €`),te())}function Ts(){const o=De(),l=Kn();if(!o||!l)return;const f=Qn();Zn();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,x=o.weeklyShoppingEstimateCents??0,T=l.year,A=o.month,D=wt(T,A),L=D?Vt(D):{foodCents:0},J=D?D.foodBudgetCents??0:0,q=L.foodCents,X=J-q;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Or.map(fe=>`<option value="${fe.value}" ${fe.value===d?"selected":""}>${fe.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${xt(x)}" />
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
    `;const se=f.querySelector(".weekly-shopping-modal-backdrop"),ce=f.querySelector("#weekly-shopping-weekday"),_e=f.querySelector("#weekly-shopping-estimate"),He=f.querySelector("#weekly-shopping-occurrences"),ne=f.querySelector("#weekly-shopping-total"),Ce=f.querySelector("#weekly-shopping-rest-before"),Qe=f.querySelector("#weekly-shopping-rest-after"),Se=f.querySelector("#weekly-shopping-days-left"),Ze=f.querySelector("#weekly-shopping-per-day"),st=f.querySelector("#weekly-shopping-cancel"),R=f.querySelector("#weekly-shopping-save");function ze(){const fe=Number.parseInt(ce?.value??"1",10);return Number.isInteger(fe)&&fe>=0&&fe<=6?fe:1}function rt(){return Math.max(0,Re(_e?.value??"0"))}function Jt(){const fe=ze(),Et=rt(),{occurrences:Le,remainingDays:Je}=qa(T,A,fe),Ke=Le*Et,et=X-Ke,tt=Je>0?Math.trunc(et/Je):0;He&&(He.textContent=`${Le}`),ne&&(ne.textContent=`${p(Ke)} €`),Ce&&(Ce.textContent=`${p(X)} €`),Qe&&(Qe.textContent=`${p(et)} €`,Qe.className=et<0?"danger":et>0?"budget-under":""),Se&&(Se.textContent=`${Je}`),Ze&&(Ze.textContent=`${p(tt)} €`,Ze.className=tt<0?"danger":tt>0?"budget-under":"")}async function St(){await Ra(ze(),rt()),Zn()}st?.addEventListener("click",()=>{Zn()}),R?.addEventListener("click",async()=>{await St()}),ce?.addEventListener("change",()=>{Jt()}),_e?.addEventListener("input",()=>{Jt()}),_e?.addEventListener("keydown",async fe=>{if(fe.key==="Escape"){fe.preventDefault(),Zn();return}fe.key==="Enter"&&(fe.preventDefault(),await St())}),se?.addEventListener("click",fe=>{fe.target===se&&Zn()}),window.setTimeout(()=>{_e?.focus(),_e?.select(),Jt()},0)}function cn(o,l){let f=o;const d=l.min;if(d){const T=Number.parseFloat(d);if(!Number.isNaN(T)){const A=Math.round(T*100);f=Math.max(f,A)}}const x=l.max;if(x){const T=Number.parseFloat(x);if(!Number.isNaN(T)){const A=Math.round(T*100);f=Math.min(f,A)}}return f}function at(o){if(o.disabled)return;const l=ns();yt(),Ue=o;const f=Re(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
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
    `;const x=l.querySelector(".amount-modal-backdrop"),T=l.querySelector("#amount-modal-delta"),A=l.querySelector("#amount-modal-next-delta"),D=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),J=l.querySelector("#amount-modal-overwrite"),q=l.querySelector("#amount-modal-apply");function X(){const ne=Re(T?.value??"0");return cn(f+ne,o)}function se(){const ne=Re(T?.value??"0");return cn(ne,o)}function ce(){A&&(A.textContent=`${p(X())} €`),D&&(D.textContent=`${p(se())} €`)}function _e(){const ne=Ue;if(!ne){yt();return}const Ce=X();yt(),ne.value=xt(Ce),ne.dispatchEvent(new Event("change",{bubbles:!0}))}function He(){const ne=Ue;if(!ne){yt();return}const Ce=se();yt(),ne.value=xt(Ce),ne.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{yt()}),J?.addEventListener("click",()=>{He()}),q?.addEventListener("click",()=>{_e()}),T?.addEventListener("input",()=>{ce()}),T?.addEventListener("keydown",ne=>{if(ne.key==="Escape"){ne.preventDefault(),yt();return}ne.key==="Enter"&&(ne.preventDefault(),_e())}),x?.addEventListener("click",ne=>{ne.target===x&&yt()}),window.setTimeout(()=>{T?.focus(),T?.select(),ce()},0)}function he(o,l="success"){const f=Ka(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const x=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},x)}function an(){return new Date().getMonth()+1}function It(){return new Date().getFullYear()}function as(o){const l=It(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function kn(){return new Date().toISOString().slice(0,10)}function ss(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function ht(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Dn(){const o=localStorage.getItem(we);return o&&Pr(o)?o:"light"}function ba(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(we,o)}function As(){return localStorage.getItem(H)==="1"}function Z(o){localStorage.setItem(H,o?"1":"0")}function rs(){const o=localStorage.getItem(de);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function $e(o){localStorage.setItem(de,JSON.stringify(o.slice(-200)))}function ea(){const o=localStorage.getItem(ae);if(!o)return null;const l=o.trim();return l||null}function Ps(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(ge);if(!l)return o;try{const f=JSON.parse(l),d=x=>typeof x=="number"&&Number.isFinite(x)?x:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function wn(o){localStorage.setItem(ge,JSON.stringify(o))}function is(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function Os(o){const l=o.trim();l&&localStorage.setItem(ae,l)}async function os(){if(h.savedSearchEvaluations.length===0)return;const o=It(),l=an(),f=h.savedSearchEvaluations.map(d=>({..._r(h.years,d.keyword,o,l),id:d.id,createdAt:d.createdAt}));h.savedSearchEvaluations=f,await Bs(f)}async function Is(){Ka(),ba(Dn()),h.hasUnexportedChanges=As(),h.unexportedChangeLog=rs(),h.persistentAuditLog=await Hs(),h.lastBackupFileName=ea(),h.recurringBudgetDefaults=Ps(),Ht(),_s();const[o,l,f,d]=await Promise.all([ga(),Ys(),Ws(),Us()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,ta(h.years),ia(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,h.savedSearchEvaluations=d.results,await Ln(h.years),await os(),o.length>0&&(h.selectedYear=as(o),h.selectedMonth=an()),te()}function ta(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const x=Number(d.weeklyShoppingWeekday);Number.isInteger(x)&&x>=0&&x<=6?d.weeklyShoppingWeekday=x:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(x=>{const T=l(x.incomeSource);if(!T){const{incomeSource:A,...D}=x;return D}return{...x,incomeSource:T}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((x,T)=>x+T.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((x,T)=>x+T.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Ft(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Nn(o){return o==="fresh"||o==="salary"||!o}async function Ln(o){for(const l of o)await ma(l)}function Kn(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function De(){const o=Kn();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function wt(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function Vt(o){const l=o.days.reduce((D,L)=>D+L.foodCents,0),f=o.days.reduce((D,L)=>D+L.goingOutCents,0),d=o.fixedCosts.reduce((D,L)=>D+L.actualCents,0),x=o.variableCosts.reduce((D,L)=>D+L.amountCents,0)+o.variablePositions.reduce((D,L)=>D+L.actualCents,0),T=o.miscCosts.reduce((D,L)=>D+L.amountCents,0),A=l+f+d+x+T;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:x,miscCents:T,totalCents:A}}function qn(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((A,D)=>A+D.plannedCents,0),x=o.variablePositions.reduce((A,D)=>A+D.budgetCents,0),T=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??x)+T}function un(o){return o.months.reduce((l,f)=>{const d=Vt(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function ja(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:Vt(l)}))}function Rn(o){const l=o.months.reduce((A,D)=>A+(D.foodBudgetCents??0),0),f=o.months.reduce((A,D)=>A+(D.goingOutBudgetCents??0),0),d=o.months.reduce((A,D)=>A+(D.fixedBudgetCents??D.fixedCosts.reduce((L,J)=>L+J.plannedCents,0)),0),x=o.months.reduce((A,D)=>A+(D.variableBudgetCents??D.variablePositions.reduce((L,J)=>L+J.budgetCents,0)),0),T=o.months.reduce((A,D)=>A+(D.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:x,miscCents:T,totalCents:l+f+d+x+T}}function sn(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,x)=>d+(Nn(x.incomeSource)?x.amountCents:0),0),0)}function na(o){return o.months.reduce((l,f)=>(f.incomes.forEach(d=>{if(d.incomeSource==="salary"){l.salaryIncomeCents+=d.amountCents;return}(d.incomeSource==="fresh"||d.incomeSource==null)&&(l.freshIncomeCents+=d.amountCents)}),l),{salaryIncomeCents:0,freshIncomeCents:0})}function aa(o,l){const f=o.months.slice().sort((d,x)=>d.month-x.month)[0];return f?l.get(me(o.year,f.month))?.carriedFromPreviousCents??0:0}function dn(){const o=h.years.slice().sort((d,x)=>d.year-x.year).flatMap(d=>d.months.slice().sort((x,T)=>x.month-T.month).map(x=>({year:d.year,month:x}))),l=new Map;let f=0;return o.forEach(({year:d,month:x},T)=>{const A=x.carryoverOverrideCents,D=typeof A=="number",L=D?A:f,J=T>0||D,q=x.incomes.reduce((_e,He)=>_e+(Nn(He.incomeSource)?He.amountCents:0),0),X=qn(x),se=q+L,ce=se-X;l.set(me(d,x.month),{hasPreviousMonth:J,carriedFromPreviousCents:L,recordedIncomeCents:q,effectiveIncomeCents:se,plannedBudgetCents:X,netCents:ce}),f=ce}),l}function G(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function sa(o){return`${o>0?"+":""}${p(o)}`}function Dt(o,l){const f=o-l,d=G(l,o);return`${p(o)} <span class="eval-diff ${d}">(Δ ${sa(f)})</span>`}function hn(o,l){const f=o!==null,d=f?o-l:null,x=f?G(l,o):"";return`<div class="column-overview">
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
    </div>`}async function z(o){if(await bi(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=Er(o,h.fixedTemplates,h.fixedTemplateVersion);is(f),ra(f),await ma(f),h.years=await ga(),fn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=an(),he(`Jahr ${o} wurde angelegt.`),te()}function fn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,Z(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,x={id:kt("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,x].slice(-200),$e(h.unexportedChangeLog);const T={id:kt("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,T].slice().sort((A,D)=>A.timestampIso.localeCompare(D.timestampIso)),yi(T).catch(A=>{console.error("Audit-Log konnte nicht gespeichert werden",A),he("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function ls(o){const l=o.trim();l&&(h.lastBackupFileName=l,Os(l))}function ya(o){h.hasUnexportedChanges=!1,Z(!1),h.unexportedChangeLog=[],$e([]),h.showUnexportedChangeLogModal=!1,ls(o)}async function Xe(o){const l=Kn();l&&(await ma(l),h.years=await ga(),fn(o))}async function $t(o){for(const l of h.years)await ma(l);h.years=await ga(),fn(o)}function me(o,l){return o*100+l}function jn(o,l,f){const d=`${o} auf ${p(f)} € gesetzt`;return f>l?`${d} (erhöht um ${p(f-l)} €)`:f<l?`${d} (verringert um ${p(l-f)} €)`:d}function pn(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function $n(o,l){const f=pn(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(T=>T.month===f.month);!d||d.variablePositions.some(T=>T.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:kt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],Be(d))}function ra(o){h.annualVariableFixedTemplates.forEach(l=>{$n(l,o)})}function ia(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const x=d.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),T=d.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");x&&(d.variablePositions=d.variablePositions.filter(A=>A.autoAnnualTemplateId?l.has(A.autoAnnualTemplateId):!0),Be(d)),T&&(d.fixedCosts=d.fixedCosts.filter(A=>!A.autoAnnualTemplateId),ye(d))}),ra(f)})}function ye(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function Be(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function Fs(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function oa(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Fs());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Ca(o,l){const f=me(l.year,l.month);h.years.forEach(d=>{d.months.forEach(x=>{if(me(d.year,x.month)<f)return;x.fixedCosts.some(A=>A.templateId===o.id)||(x.fixedCosts.push({id:kt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),ye(x))})})}function xa(o,l,f){const d=me(f.year,f.month);h.years.forEach(x=>{x.months.forEach(T=>{me(x.year,T.month)<d||(T.fixedCosts=T.fixedCosts.map(A=>A.templateId!==l.id?A:{...A,name:l.name,plannedCents:l.plannedCents,actualCents:A.actualCents===o.plannedCents?l.plannedCents:A.actualCents}),ye(T))})})}function Ds(o,l){const f=me(l.year,l.month);h.years.forEach(d=>{d.months.forEach(x=>{me(d.year,x.month)<f||(x.fixedCosts=x.fixedCosts.filter(T=>T.templateId!==o),ye(x))})})}async function vn(o,l){const f=o.trim();if(!f)return;const d=oa();if(!d)return;const x=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const T=h.fixedTemplates.find(D=>D.id===h.editingFixedTemplateId);if(!T)return;const A={...T,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(D=>D.id===h.editingFixedTemplateId?A:D),xa(T,A,d)}else{const T={id:kt("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,T],Ca(T,d)}h.fixedTemplateVersion=await zs(h.fixedTemplates),h.editingFixedTemplateId=null,await $t(x?`Fixkosten-Vorlage aktualisiert: ${f} (${p(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${p(l)} €)`),he(x?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),te()}function Vn(o){h.editingFixedTemplateId=o,te()}function mn(){h.editingFixedTemplateId=null,te()}async function ka(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=oa();if(!f)return;const d=h.fixedTemplates.find(x=>x.id===o);h.fixedTemplates=h.fixedTemplates.filter(x=>x.id!==o),Ds(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await zs(h.fixedTemplates),await $t(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),he("Fixkosten-Vorlage wurde gelöscht."),te()}async function Ns(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const x=pn(l);if(!x){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const T={id:kt("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,T],h.years.forEach(A=>{$n(T,A)}),h.annualVariableFixedTemplateVersion=await Gs(h.annualVariableFixedTemplates),await $t(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${p(f)} €, jährlich in ${Ae(x.month)})`),he("Variable Fixkosten-Vorlage wurde hinzugefügt."),te()}async function gn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(x=>{x.variablePositions=x.variablePositions.filter(T=>T.autoAnnualTemplateId!==o),Be(x),x.fixedCosts=x.fixedCosts.filter(T=>T.autoAnnualTemplateId!==o),ye(x)})}),h.annualVariableFixedTemplateVersion=await Gs(h.annualVariableFixedTemplates),await $t(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),he("Variable Fixkosten-Vorlage wurde gelöscht."),te())}async function Va(o,l,f){const d=De();if(!d)return;const T=d.days.find(A=>A.isoDate===o)?.[l]??0;d.days=d.days.map(A=>A.isoDate===o?{...A,[l]:f}:A),await Xe(jn(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,T,f)),te()}async function Sn(o,l){const f=De();if(!f)return;const d=f.fixedCosts.find(x=>x.id===o);f.fixedCosts=f.fixedCosts.map(x=>x.id===o?{...x,actualCents:l}:x),await Xe(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${p(l)} €`),te()}async function cs(o,l){const f=De();if(!f)return;const d=f.fixedCosts.find(T=>T.id===o);if(!d)return;const x=d.plannedCents;f.fixedCosts=f.fixedCosts.map(T=>T.id===o?{...T,plannedCents:l}:T),ye(f),await Xe(jn(`Fixkosten-Budget angepasst: ${d.name}`,x,l)),te()}async function Ya(o,l){const f=De();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const x={id:kt("fixed"),templateId:kt("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[x,...f.fixedCosts],ye(f),await Xe(`Fixkosten-Position hinzugefügt: ${d} (${p(l)} €)`),he("Fixkosten-Position wurde hinzugefügt."),te()}async function Ye(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=De();if(!f)return;const d=f.fixedCosts.find(x=>x.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(x=>x.id!==o),ye(f),await Xe(`Fixkosten-Position gelöscht: ${d.name}`),he("Fixkosten-Position wurde gelöscht."),te())}async function En(o){await Bn("fixedBudgetCents",o,"Fixkosten")}async function rn(o){await Bn("foodBudgetCents",o,"Essen")}async function us(o){await Bn("goingOutBudgetCents",o,"Ausgehen")}async function Yn(o){await Bn("miscBudgetCents",o,"Sonstiges")}async function wa(o){await Bn("variableBudgetCents",o,"Variable Kosten")}async function Bn(o,l,f){const d=De(),x=h.selectedYear;if(!d||!x||d[o]===l)return;const T=d[o];if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const D=me(x,h.selectedMonth);h.years.forEach(J=>{J.months.forEach(q=>{me(J.year,q.month)<=D||(q[o]=l)})}),h.recurringBudgetDefaults[o]=l,wn(h.recurringBudgetDefaults);const L=jn(`Budget "${f}"`,T??0,l);await $t(`${L} (inkl. zukünftiger Monate)`),he(`Budget "${f}" wurde für zukünftige Monate übernommen.`),te();return}await Xe(jn(`Budget "${f}"`,T??0,l)),te()}async function $a(o){const l=De();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Xe(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${p(o)} € gesetzt`),te())}async function bn(o,l,f){const d=De(),x=h.selectedYear;if(!d||!x)return;const T=o.trim();if(!T){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:kt("varpos"),name:T,budgetCents:l,actualCents:0},...d.variablePositions],Be(d),f){const A=me(x,h.selectedMonth);h.years.forEach(D=>{D.months.forEach(L=>{me(D.year,L.month)<=A||(L.variablePositions=[{id:kt("varpos"),name:T,budgetCents:l,actualCents:0},...L.variablePositions],Be(L))})}),await $t(`Variable Position hinzugefügt: ${T} (${p(l)} €) für zukünftige Monate`),he("Variable Position wurde für zukünftige Monate hinzugefügt."),te();return}await Xe(`Variable Position hinzugefügt: ${T} (${p(l)} €)`),he("Variable Position wurde hinzugefügt."),te()}async function ds(o,l){const f=De();if(!f)return;const d=f.variablePositions.find(T=>T.id===o),x=d?.actualCents??0;f.variablePositions=f.variablePositions.map(T=>T.id===o?{...T,actualCents:l}:T),await Xe(jn(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,x,l)),te()}async function Sa(o,l){const f=De();if(!f)return;const d=f.variablePositions.find(T=>T.id===o),x=d?.budgetCents??0;f.variablePositions=f.variablePositions.map(T=>T.id===o?{...T,budgetCents:l}:T),Be(f),await Xe(jn(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,x,l)),te()}async function hs(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=De(),d=h.selectedYear;if(!f||!d)return;const x=f.variablePositions.find(L=>L.id===o);if(!x)return;const T=me(d,h.selectedMonth),D=h.years.some(L=>L.months.some(J=>me(L.year,J.month)>T&&J.variablePositions.some(q=>q.name===x.name&&q.budgetCents===x.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),Be(f),D){h.years.forEach(L=>{L.months.forEach(J=>{me(L.year,J.month)<=T||(J.variablePositions=J.variablePositions.filter(q=>!(q.name===x.name&&q.budgetCents===x.budgetCents)),Be(J))})}),await $t(`Variable Position gelöscht: ${x.name} (inkl. zukünftiger Monate)`),he("Variable Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Xe(`Variable Position gelöscht: ${x.name}`),he("Variable Position wurde gelöscht."),te()}async function ve(o){const l=De(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(q=>q.id===o);if(!d)return;const x={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let T=h.years.find(q=>q.year===x.year);if(!T){const q=Er(x.year,h.fixedTemplates,h.fixedTemplateVersion);is(q),ra(q),await ma(q),h.years=[...h.years,q].sort((X,se)=>X.year-se.year),T=q}const A=T.months.find(q=>q.month===x.month);if(!A)return;const D=A.variablePositions.some(q=>q.id===d.id||q.name===d.name&&q.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(q=>q.id!==o),Be(l),!D){const X=A.variablePositions.some(se=>se.id===d.id)?{...d,id:kt("varpos")}:d;A.variablePositions=[X,...A.variablePositions],Be(A)}const L=`${Ae(x.month)} ${x.year}`,J=`Variable Position verschoben: ${d.name} → ${L}`;if(x.year===f)await Xe(J);else{const q=Kn();if(!q)return;await ma(q),await ma(T),h.years=await ga(),ta(h.years),fn(J)}he(D?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),te()}async function za(o,l,f){const d=De(),x=h.selectedYear;if(!d||!x)return;const T=o.trim();if(!T){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=Br(T,l);if(d.miscCosts=[A,...d.miscCosts],f){const D=me(x,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(J=>{me(L.year,J.month)<=D||(J.miscCosts=[Br(T,l),...J.miscCosts])})}),await $t(`Sonstige Position hinzugefügt: ${T} (${p(l)} €) für zukünftige Monate`),he("Sonstige Position wurde für zukünftige Monate hinzugefügt."),te();return}await Xe(`Sonstige Position hinzugefügt: ${T} (${p(l)} €)`),he("Sonstige Position wurde hinzugefügt."),te()}async function fs(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=De(),d=h.selectedYear;if(!f||!d)return;const x=f.miscCosts.find(L=>L.id===o);if(!x)return;const T=me(d,h.selectedMonth),D=h.years.some(L=>L.months.some(J=>me(L.year,J.month)>T&&J.miscCosts.some(q=>q.description===x.description&&q.amountCents===x.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),D){h.years.forEach(L=>{L.months.forEach(J=>{me(L.year,J.month)<=T||(J.miscCosts=J.miscCosts.filter(q=>!(q.description===x.description&&q.amountCents===x.amountCents)))})}),await $t(`Sonstige Position gelöscht: ${x.description} (${p(x.amountCents)} €) inkl. zukünftiger Monate`),he("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Xe(`Sonstige Position gelöscht: ${x.description} (${p(x.amountCents)} €)`),he("Sonstige Position wurde gelöscht."),te()}async function la(o,l,f,d){const x=De(),T=h.selectedYear;if(!x||!T)return;const A=o.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const D=Mr(A,l,f);if(x.incomes=[D,...x.incomes],d){const L=me(T,h.selectedMonth);h.years.forEach(J=>{J.months.forEach(q=>{me(J.year,q.month)<=L||(q.incomes=[Mr(A,l,f),...q.incomes])})}),await $t(`Einkommen hinzugefügt: ${A} (${p(l)} €, ${Ft(f)}) für zukünftige Monate`),he("Einkommen wurde für zukünftige Monate hinzugefügt."),te();return}await Xe(`Einkommen hinzugefügt: ${A} (${p(l)} €, ${Ft(f)})`),he("Einkommen wurde hinzugefügt."),te()}async function ca(o,l){const f=De();if(!f)return;const d=f.incomes.find(x=>x.id===o);d&&(f.incomes=f.incomes.map(x=>{if(x.id!==o)return x;if(!l){const{incomeSource:T,...A}=x;return A}return{...x,incomeSource:l}}),await Xe(`Einkommensart angepasst: ${d.description} → ${Ft(l)}`),te())}async function ps(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=De(),d=h.selectedYear;if(!f||!d)return;const x=f.incomes.find(L=>L.id===o);if(!x)return;const T=me(d,h.selectedMonth),D=h.years.some(L=>L.months.some(J=>me(L.year,J.month)>T&&J.incomes.some(q=>q.description===x.description&&q.amountCents===x.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),D){h.years.forEach(L=>{L.months.forEach(J=>{me(L.year,J.month)<=T||(J.incomes=J.incomes.filter(q=>!(q.description===x.description&&q.amountCents===x.amountCents)))})}),await $t(`Einkommen gelöscht: ${x.description} (${p(x.amountCents)} €) inkl. zukünftiger Monate`),he("Einkommen wurde auch in zukünftigen Monaten gelöscht."),te();return}await Xe(`Einkommen gelöscht: ${x.description} (${p(x.amountCents)} €)`),he("Einkommen wurde gelöscht."),te()}async function Wa(){const o=await xi(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${kn()}-${ss()}.json`,x=document.createElement("a");x.href=f,x.download=d,x.click(),URL.revokeObjectURL(f),ya(d),te(),he("Backup wurde exportiert.")}async function vs(o){const l=await o.text(),f=JSON.parse(l);await ki(f);const[d,x,T,A]=await Promise.all([ga(),Ys(),Ws(),Us()]);h.years=d,h.annualVariableFixedTemplates=T.templates,h.annualVariableFixedTemplateVersion=T.version,ta(h.years),ia(h.years),h.fixedTemplates=x.templates,h.fixedTemplateVersion=x.version,h.savedSearchEvaluations=A.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await Ln(h.years),await os(),h.persistentAuditLog=await Hs(),h.selectedYear=as(d),h.selectedMonth=an(),ya(o.name),he("Backup wurde importiert."),te()}function Me(o){h.evaluationQuery=o,h.evaluationCurrentResult=_r(h.years,o,It(),an()),te()}async function ua(){const o=h.evaluationCurrentResult;if(!o||!o.keywordNormalized){he("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const l=h.savedSearchEvaluations.findIndex(f=>f.id===o.id);l>=0?h.savedSearchEvaluations[l]=o:h.savedSearchEvaluations=[o,...h.savedSearchEvaluations],await Bs(h.savedSearchEvaluations),fn(`Auswertung gespeichert: ${o.keyword}`),he(`Auswertung "${o.keyword}" wurde gespeichert.`),te()}async function da(o){const l=h.savedSearchEvaluations.find(f=>f.id===o);l&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(f=>f.id!==o),await Bs(h.savedSearchEvaluations),fn(`Auswertung gelöscht: ${l.keyword}`),he(`Gespeicherte Auswertung "${l.keyword}" wurde gelöscht.`),te())}function te(){const o=Kn(),l=De(),f=kn(),d=l?Vt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},x=o?un(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},T=o?ja(o):[],A=l?l.foodBudgetCents??0:0,D=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((a,g)=>a+g.plannedCents,0):0,J=l?l.variableBudgetCents??l.variablePositions.reduce((a,g)=>a+g.budgetCents,0):0,q=l?l.miscBudgetCents??0:0,X=o?o.months.reduce((a,g)=>a+(g.foodBudgetCents??0),0):0,se=o?o.months.reduce((a,g)=>a+(g.goingOutBudgetCents??0),0):0,ce=o?o.months.reduce((a,g)=>a+(g.fixedBudgetCents??g.fixedCosts.reduce((K,Q)=>K+Q.plannedCents,0)),0):0,_e=o?o.months.reduce((a,g)=>a+(g.variableBudgetCents??g.variablePositions.reduce((K,Q)=>K+Q.budgetCents,0)),0):0,He=o?o.months.reduce((a,g)=>a+(g.miscBudgetCents??0),0):0,ne=l?l.incomes.reduce((a,g)=>a+(Nn(g.incomeSource)?g.amountCents:0),0):0,Ce=l?l.incomes.reduce((a,g)=>a+(g.incomeSource==="salary"?g.amountCents:0),0):0,Qe=l?l.incomes.reduce((a,g)=>a+(g.incomeSource==="fresh"?g.amountCents:0),0):0,Se=dn(),Ze=o?Se.get(me(o.year,h.selectedMonth)):void 0,st=o?o.months.slice().sort((a,g)=>a.month-g.month)[0]:void 0,R=Ze?.carriedFromPreviousCents??0,ze=Ze?.hasPreviousMonth??!1,rt=Ze?.effectiveIncomeCents??ne,Jt=l?qn(l):0,St=Ze?.netCents??ne-Jt,fe=rt-d.totalCents,Et=Ce-d.totalCents,Le=d.totalCents>0?`${(Ce/d.totalCents*100).toFixed(1)} %`:"-",Je=R<0?"danger":R>0?"budget-under":"",Ke=St<0?"danger":St>0?"budget-under":"",et=fe<0?"danger":fe>0?"budget-under":"",tt=o?o.months.reduce((a,g)=>a+g.incomes.reduce((K,Q)=>K+(Nn(Q.incomeSource)?Q.amountCents:0),0),0):0,Bt=o?o.months.reduce((a,g)=>a+g.incomes.reduce((K,Q)=>K+(Q.incomeSource==="salary"?Q.amountCents:0),0),0):0,Mt=o?o.months.reduce((a,g)=>a+g.incomes.reduce((K,Q)=>K+(Q.incomeSource==="fresh"?Q.amountCents:0),0),0):0,ft=o&&st?Se.get(me(o.year,st.month))?.carriedFromPreviousCents??0:0,Nt=tt+ft,_t=Nt-x.totalCents,zn=Bt-x.totalCents,Pe=x.totalCents>0?`${(Bt/x.totalCents*100).toFixed(1)} %`:"-",xe=ft<0?"danger":ft>0?"budget-under":"",qe=_t<0?"danger":_t>0?"budget-under":"",We=A+D+L+J+q,je=A+D,it=d.foodCents+d.goingOutCents,Lt=je-it,Yt=G(it,je),pt=X+se+ce+_e+He,zt=rt-We,Tt=Nt-pt,Wt=We-d.totalCents,Mn=pt-x.totalCents,re=a=>a<0?"danger":a>0?"budget-under":"",Xt=(a,g)=>g<=0?"muted":a>=g?"budget-under":"danger",Kt=Xt(Ce,d.totalCents),Wn=Xt(Bt,x.totalCents),E=(a,g)=>{if(g<=0)return"0%";const Q=Math.max(0,a)/g*100;return`${Math.min(100,Math.max(0,Q)).toFixed(1)}%`},j=(a,g)=>{if(g<=0)return a>0?100:0;const K=Math.max(0,a)/g*100;return Math.max(0,K)},Ct=[{label:"Essen",budgetCents:A,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:D,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:J,actualCents:d.variableCents},{label:"Sonstige",budgetCents:q,actualCents:d.miscCents}];Math.max(1,...Ct.flatMap(a=>[a.budgetCents,a.actualCents]));const Gn=(a,g)=>g<=0?"bar-positive":a<=0||g>a?"bar-negative":"bar-positive",Ea=[{label:"Einkommen gesamt",valueCents:rt,className:"bar-income"},{label:"Budget gesamt",valueCents:We,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:fe,className:fe<0?"bar-negative":"bar-positive"}],_n=Math.max(1,...Ea.map(a=>Math.abs(a.valueCents))),Ua=o?o.months.slice().sort((a,g)=>a.month-g.month).map(a=>{const g=a.foodBudgetCents??0,K=a.goingOutBudgetCents??0,Q=a.fixedBudgetCents??a.fixedCosts.reduce((ln,xn)=>ln+xn.plannedCents,0),Ee=a.variableBudgetCents??a.variablePositions.reduce((ln,xn)=>ln+xn.budgetCents,0),Ge=a.miscBudgetCents??0,jt=g+K+Q+Ee+Ge;return{month:a.month,foodBudgetCents:g,goingOutBudgetCents:K,fixedBudgetCents:Q,variableBudgetCents:Ee,miscBudgetCents:Ge,totalBudgetCents:jt}}):[],qt=new Map(Ua.map(a=>[a.month,a])),At=a=>{if(a.length===0)return null;const g=Math.min(...a),K=Math.max(...a),Q=Math.round(a.reduce((Ee,Ge)=>Ee+Ge,0)/a.length);return{min:g,avg:Q,max:K}},Rt=o&&o.year===It()?T.filter(a=>a.month<=an()):T,Ha=Rt.map(a=>a.summary.foodCents),ms=Rt.map(a=>a.summary.goingOutCents),Ba=Rt.map(a=>a.summary.fixedCents),ha=Rt.map(a=>a.summary.variableCents),gs=Rt.map(a=>a.summary.miscCents),Ma=Rt.map(a=>a.summary.totalCents),_a=Rt.map(a=>o?Se.get(me(o.year,a.month))?.plannedBudgetCents??0:0),Ls=Rt.map(a=>o?Se.get(me(o.year,a.month))?.netCents??0:0),Ta=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((g,K)=>g+(K.incomeSource==="salary"?K.amountCents:0),0)])),Ja=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((g,K)=>g+(K.incomeSource==="salary"||K.incomeSource==="fresh"?K.amountCents:0),0)])),Xa=Rt.map(a=>Ta.get(a.month)??0),Qa=Rt.map(a=>Ja.get(a.month)??0),Qt={food:At(Ha),goingOut:At(ms),fixed:At(Ba),variable:At(ha),misc:At(gs),total:At(Ma),salary:At(Xa),income:At(Qa),budget:At(_a),net:At(Ls)},bs=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Gt={food:Ha.reduce((a,g)=>a+g,0),goingOut:ms.reduce((a,g)=>a+g,0),fixed:Ba.reduce((a,g)=>a+g,0),variable:ha.reduce((a,g)=>a+g,0),misc:gs.reduce((a,g)=>a+g,0),total:Ma.reduce((a,g)=>a+g,0),salary:Xa.reduce((a,g)=>a+g,0),income:Qa.reduce((a,g)=>a+g,0),budget:_a.reduce((a,g)=>a+g,0)},ys=bs.map(({key:a,label:g})=>{const K=Qt.food?.[a]??null,Q=Qt.goingOut?.[a]??null,Ee=Qt.fixed?.[a]??null,Ge=Qt.variable?.[a]??null,jt=Qt.misc?.[a]??null,ln=Qt.total?.[a]??null,xn=Qt.salary?.[a]??null,ct=Qt.income?.[a]??null,va=Qt.budget?.[a]??null,Fa=Qt.net?.[a]??null,Pt=Pn=>Pn===null?"-":p(Pn);return`<tr>
                  <td><strong>${g}</strong></td>
                  <td>${Pt(K)}</td>
                  <td>${Pt(Q)}</td>
                  <td>${Pt(Ee)}</td>
                  <td>${Pt(Ge)}</td>
                  <td>${Pt(jt)}</td>
                  <td>${Pt(ln)}</td>
                  <td>${Pt(xn)}</td>
                  <td>${Pt(ct)}</td>
                  <td>${Pt(va)}</td>
                  <td>${Pt(Fa)}</td>
                </tr>`}).join(""),Cs=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${p(Gt.food)}</td>
                  <td>${p(Gt.goingOut)}</td>
                  <td>${p(Gt.fixed)}</td>
                  <td>${p(Gt.variable)}</td>
                  <td>${p(Gt.misc)}</td>
                  <td>${p(Gt.total)}</td>
                  <td>${p(Gt.salary)}</td>
                  <td>${p(Gt.income)}</td>
                  <td>${p(Gt.budget)}</td>
                  <td>-</td>
                </tr>`,xs=Math.max(1,...T.flatMap(a=>{const g=qt.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,g??0]})),ks=Math.max(1,...T.flatMap(a=>{const g=qt.get(a.month),K=a.summary.foodCents+a.summary.goingOutCents,Q=(g?.foodBudgetCents??0)+(g?.goingOutBudgetCents??0);return[K,Q]})),ws=Math.max(1,...T.flatMap(a=>{const g=qt.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,g]})),fa=Math.max(1,...T.flatMap(a=>{const g=qt.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,g]})),Zt=Math.max(1,...T.flatMap(a=>{const g=qt.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,g]})),Ve=G(d.fixedCents,L),Aa=G(d.foodCents,A),Un=G(d.goingOutCents,D),$s=G(d.variableCents,J),Pa=G(d.miscCents,q),Tn=a=>a===0?"-":p(a),An=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(L)}</div>
        <div class="compact-cost-actual ${Ve}">${Tn(d.fixedCents)}</div>
      </div>`,Za=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(J)}</div>
        <div class="compact-cost-actual ${$s}">${Tn(d.variableCents)}</div>
      </div>`,Hn=l?l.fixedCosts.length>0?l.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${ht(a.name)}</div>
                  <div class="compact-cost-budget">${p(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${G(a.actualCents,a.plannedCents)}">${Tn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,yn=l?l.variablePositions.length>0?l.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${ht(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${p(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${G(a.actualCents,a.budgetCents)}">${Tn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Jn=h.editingFixedTemplateId?h.fixedTemplates.find(a=>a.id===h.editingFixedTemplateId):null,e=h.hasUnexportedChanges,t=h.unexportedChangeLog.slice().reverse(),n=h.persistentAuditLog.slice().sort((a,g)=>g.timestampIso.localeCompare(a.timestampIso)),s=h.lastBackupFileName?ht(h.lastBackupFileName):"-",r={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},i=h.years.slice().sort((a,g)=>a.year-g.year),c=i.some(a=>a.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??i[i.length-1]?.year??null,u=typeof c=="number"?i.find(a=>a.year===c):void 0,y=u?u.months.slice().sort((a,g)=>a.month-g.month):[],$=u?un(u):r,m=u?na(u):{salaryIncomeCents:0,freshIncomeCents:0},v=m.salaryIncomeCents+m.freshIncomeCents,w=m.salaryIncomeCents,k=u?Rn(u):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},C=u?sn(u):0,b=u?aa(u,Se):0,B=C+b,_=u?u.months.reduce((a,g)=>a+qn(g),0):0,S=B-_,P=B-$.totalCents,O=[{label:"Essen",budgetCents:k.foodCents,actualCents:$.foodCents},{label:"Ausgehen",budgetCents:k.goingOutCents,actualCents:$.goingOutCents},{label:"Fixkosten",budgetCents:k.fixedCents,actualCents:$.fixedCents},{label:"Variable",budgetCents:k.variableCents,actualCents:$.variableCents},{label:"Sonstige",budgetCents:k.miscCents,actualCents:$.miscCents}],F=y.map(a=>{const g=u?Se.get(me(u.year,a.month)):void 0,K=Vt(a),Q=a.incomes.reduce((Pn,Xn)=>Pn+(Xn.incomeSource==="salary"?Xn.amountCents:0),0),Ee=a.incomes.reduce((Pn,Xn)=>Pn+(Nn(Xn.incomeSource)?Xn.amountCents:0),0),Ge=g?.effectiveIncomeCents??Ee,jt=g?.plannedBudgetCents??qn(a),ln=K.foodCents,xn=K.goingOutCents,ct=ln+xn,va=K.totalCents,Fa=Ge-jt,Pt=Ge-va;return{month:a.month,salaryIncomeCents:Q,incomeCents:Ee,foodCents:ln,goingOutCents:xn,foodAndGoingOutCents:ct,effectiveIncomeCents:Ge,plannedBudgetCents:jt,actualCostCents:va,plannedNetCents:Fa,actualNetCents:Pt}}),V=Math.max(1,...F.map(a=>a.actualCostCents)),I=Math.max(1,...F.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),U=Math.max(1,...F.map(a=>a.foodAndGoingOutCents)),W=Math.max(1,...F.map(a=>a.foodCents)),N=Math.max(1,...F.map(a=>a.goingOutCents)),Y=F.map((a,g,K)=>{const Q=g>0?K[g-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Ae(a.month),monthShortLabel:Ae(a.month).slice(0,3),deltaCents:a.plannedNetCents-Q}}),le=Y[Y.length-1]??null,be=Math.min(0,...Y.map(a=>a.plannedNetCents)),ee=Math.max(0,...Y.map(a=>a.plannedNetCents)),ue=Math.max(1,ee-be),Te=720,vt=320,Fe=18,on=18,es=38,Oa=56,Js=Te-Oa-on,Ks=vt-Fe-es,Nr=a=>{if(Y.length<=1)return Oa+Js/2;const g=a/(Y.length-1);return Oa+g*Js},qs=a=>Fe+(ee-a)/ue*Ks,Cn=Y.map((a,g)=>{const K=Nr(g),Q=qs(a.plannedNetCents);return{...a,x:K,y:Q,leftPercent:K/Te*100,topPercent:Q/vt*100}}),Rs=Cn.map((a,g)=>`${g===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),Xs=Cn.length>0?`${Rs} L ${Cn[Cn.length-1]?.x.toFixed(1)} ${(Fe+Ks).toFixed(1)} L ${Cn[0]?.x.toFixed(1)} ${(Fe+Ks).toFixed(1)} Z`:"",Qs=5,Lr=Array.from({length:Qs},(a,g)=>{const K=g/(Qs-1),Q=ee-K*ue;return{valueCents:Math.round(Q/100)*100,y:qs(Q)}}),Zs=qs(0),Kr=Y[0]?.plannedNetCents??0,Ia=(Y[Y.length-1]?.plannedNetCents??0)-Kr,qr=Ia<0?"trend-badge-negative":Ia>0?"trend-badge-positive":"trend-badge-neutral",er=Ia<0?"↘":Ia>0?"↗":"→",Rr=Ia<0?"Abwärtstrend":Ia>0?"Aufwärtstrend":"Seitwärts",pa=i.reduce((a,g)=>{const K=Rn(g);return{foodCents:a.foodCents+K.foodCents,goingOutCents:a.goingOutCents+K.goingOutCents,fixedCents:a.fixedCents+K.fixedCents,variableCents:a.variableCents+K.variableCents,miscCents:a.miscCents+K.miscCents,totalCents:a.totalCents+K.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Ut=i.reduce((a,g)=>{const K=un(g);return{foodCents:a.foodCents+K.foodCents,goingOutCents:a.goingOutCents+K.goingOutCents,fixedCents:a.fixedCents+K.fixedCents,variableCents:a.variableCents+K.variableCents,miscCents:a.miscCents+K.miscCents,totalCents:a.totalCents+K.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),jr=i.reduce((a,g)=>a+sn(g),0),Vr=i[0]?aa(i[0],Se):0,tr=jr+Vr,nr=tr-pa.totalCents,ar=tr-Ut.totalCents,sr=[{label:"Essen",budgetCents:pa.foodCents,actualCents:Ut.foodCents},{label:"Ausgehen",budgetCents:pa.goingOutCents,actualCents:Ut.goingOutCents},{label:"Fixkosten",budgetCents:pa.fixedCents,actualCents:Ut.fixedCents},{label:"Variable",budgetCents:pa.variableCents,actualCents:Ut.variableCents},{label:"Sonstige",budgetCents:pa.miscCents,actualCents:Ut.miscCents}],rr=Math.max(1,...sr.flatMap(a=>[a.budgetCents,a.actualCents])),js=[{label:"Essen & Ausgehen",actualCents:Ut.foodCents+Ut.goingOutCents},{label:"Fixkosten",actualCents:Ut.fixedCents},{label:"Variable",actualCents:Ut.variableCents},{label:"Sonstige",actualCents:Ut.miscCents}],Yr=Math.max(1,...js.map(a=>a.actualCents)),ke=i.map(a=>{const g=un(a),K=Rn(a),Q=sn(a),Ee=na(a),Ge=aa(a,Se),jt=Q+Ge;return{year:a.year,salaryIncomeCents:Ee.salaryIncomeCents,freshIncomeCents:Ee.freshIncomeCents,totalIncomeCents:Ee.salaryIncomeCents+Ee.freshIncomeCents,foodAndGoingOutCents:g.foodCents+g.goingOutCents,fixedCents:g.fixedCents,variableCents:g.variableCents,miscCents:g.miscCents,budgetTotalCents:K.totalCents,actualTotalCents:g.totalCents,effectiveIncomeCents:jt,plannedNetCents:jt-K.totalCents,actualNetCents:jt-g.totalCents}}),zr=ke.reduce((a,g)=>a+g.totalIncomeCents,0),Wr=ke.reduce((a,g)=>a+g.salaryIncomeCents,0),ir=Math.max(1,...ke.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Gr=Math.max(1,...ke.map(a=>a.actualTotalCents)),Ur=Math.max(1,...ke.map(a=>a.totalIncomeCents)),Hr=Math.max(1,...ke.map(a=>a.salaryIncomeCents)),or=Math.max(1,...ke.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),lr=Math.max(1,...ke.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),Jr=Math.max(1,...ke.map(a=>a.foodAndGoingOutCents)),Xr=Math.max(1,...ke.map(a=>a.fixedCents)),Qr=Math.max(1,...ke.map(a=>a.variableCents)),Zr=Math.max(1,...ke.map(a=>a.miscCents)),ei=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${i.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${i.map(a=>`<option value="${a.year}" ${a.year===c?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${u?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${p(v)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${p(w)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(_)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p($.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${re(S)}">${p(S)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${re(P)}">${p(P)}</div><div class="eval-value"></div></div>
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
                      <span class="trend-badge ${qr}">${er} ${Rr}</span>
                    </div>
                  </header>
                  ${le?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${ht(le.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${re(le.plannedNetCents)}" data-year-trend-active-net>${p(le.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${p(le.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${p(le.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${re(le.deltaCents)}" data-year-trend-active-delta>${le.deltaCents>=0?"+":""}${p(le.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${Te} ${vt}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${u?.year??""}"
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
                                      <line class="year-trend-grid-line" x1="${Oa}" y1="${a.y.toFixed(1)}" x2="${Te-on}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${Oa-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${p(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${Oa}" y1="${Zs.toFixed(1)}" x2="${Te-on}" y2="${Zs.toFixed(1)}"></line>
                              ${Xs?`<path class="year-trend-area" d="${Xs}"></path>`:""}
                              ${Rs?`<path class="year-trend-line" d="${Rs}"></path>`:""}
                              ${Cn.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${vt-12}" text-anchor="middle">${ht(a.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${Cn.map((a,g)=>`
                                    <button
                                      class="year-trend-point-hit ${g===Cn.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${a.leftPercent.toFixed(2)}%; top:${a.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${g===Cn.length-1?"1":"0"}"
                                      data-month-label="${ht(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${ht(a.monthLabel)}: Kalkulierter Saldo ${p(a.plannedNetCents)}, Einkommen ${p(a.effectiveIncomeCents)}, Ausgaben ${p(a.actualCostCents)}"
                                      aria-pressed="${g===Cn.length-1?"true":"false"}"
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
                    ${O.map(a=>{const g=j(a.actualCents,a.budgetCents),K=Math.min(100,g),Q=`${g.toFixed(0)}%`,Ee=a.budgetCents-a.actualCents,Ge=Ee<0?"danger":Ee>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Gn(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${K.toFixed(1)}%" title="${a.label}: ${p(a.actualCents)} von ${p(a.budgetCents)}">
                              <span class="circle-chart-value">${Q}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${p(a.budgetCents)} / I ${p(a.actualCents)}</div>
                            <div class="circle-chart-meta ${Ge}">${Ee>=0?"+":""}${p(Ee)}</div>
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
                    ${F.map(a=>{const g=E(a.actualCostCents,V);return`
                          <div class="spark-bar" title="${Ae(a.month)}: ${p(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.actualCostCents)} €</span></div>
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
                    ${F.map(a=>{const g=E(Math.abs(a.plannedNetCents),I),K=E(Math.abs(a.actualNetCents),I),Q=a.plannedNetCents<0?"bar-negative":"bar-positive",Ee=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Ae(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(a.plannedNetCents)} | Ist-Saldo: ${p(a.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${g}; opacity: 0.35;"></div>
                              <div class="bar ${Ee}" style="width:${K}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${re(a.plannedNetCents)}">B ${p(a.plannedNetCents)}</span>
                              <span class="${re(a.actualNetCents)}">I ${p(a.actualNetCents)}</span>
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
                        <td>${Ae(a.month)}</td>
                    <td>${p(a.salaryIncomeCents)}</td>
                    <td>${p(a.incomeCents)}</td>
                        <td>${p(a.plannedBudgetCents)}</td>
                        <td>${p(a.actualCostCents)}</td>
                        <td class="${re(a.plannedNetCents)}">${p(a.plannedNetCents)}</td>
                        <td class="${re(a.actualNetCents)}">${p(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${i.map(a=>`<option value="${a.year}" ${a.year===c?"selected":""}>${a.year}</option>`).join("")}
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
                    ${F.map(a=>{const g=E(a.foodAndGoingOutCents,U);return`
                          <div class="spark-bar" title="${Ae(a.month)}: ${p(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(F.length,1)}, minmax(0, 1fr));">
                    ${F.map(a=>{const g=E(a.foodCents,W);return`
                          <div class="spark-bar" title="${Ae(a.month)}: ${p(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.foodCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(F.length,1)}, minmax(0, 1fr));">
                    ${F.map(a=>{const g=E(a.goingOutCents,N);return`
                          <div class="spark-bar" title="${Ae(a.month)}: ${p(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.goingOutCents)} €</span></div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${p(zr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${p(Wr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(pa.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(Ut.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${re(nr)}">${p(nr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${re(ar)}">${p(ar)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${js.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${p(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(Ut.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${sr.map(a=>{const g=E(a.budgetCents,rr),K=E(a.actualCents,rr),Q=Gn(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${p(a.budgetCents)} | Ist: ${p(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${g}"></div>
                              <div class="bar-marker" style="left:${g}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Q}" style="width:${K}"></div>
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
                    ${js.map(a=>{const g=E(a.actualCents,Yr);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Ist: ${p(a.actualCents)}">
                              <div class="bar bar-expense" style="width:${g}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(a=>{const g=E(a.actualTotalCents,Gr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.actualTotalCents)} €</span></div>
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
                    ${ke.map(a=>{const g=E(Math.abs(a.plannedNetCents),ir),K=E(Math.abs(a.actualNetCents),ir),Q=a.plannedNetCents<0?"bar-negative":"bar-positive",Ee=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(a.plannedNetCents)} | Ist-Saldo: ${p(a.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${g}; opacity: 0.35;"></div>
                              <div class="bar ${Ee}" style="width:${K}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${re(a.plannedNetCents)}">B ${p(a.plannedNetCents)}</span>
                              <span class="${re(a.actualNetCents)}">I ${p(a.actualNetCents)}</span>
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
                    ${ke.map(a=>{const g=E(a.foodAndGoingOutCents,Jr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.foodAndGoingOutCents)} €</span></div>
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
                    ${ke.map(a=>{const g=E(a.fixedCents,Xr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.fixedCents)} €</span></div>
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
                    ${ke.map(a=>{const g=E(a.variableCents,Qr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.variableCents)} €</span></div>
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
                    ${ke.map(a=>{const g=E(a.miscCents,Zr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.miscCents)} €</span></div>
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
                        <td>${p(a.salaryIncomeCents)}</td>
                        <td>${p(a.totalIncomeCents)}</td>
                        <td>${p(a.budgetTotalCents)}</td>
                        <td>${p(a.actualTotalCents)}</td>
                        <td class="${re(a.plannedNetCents)}">${p(a.plannedNetCents)}</td>
                        <td class="${re(a.actualNetCents)}">${p(a.actualNetCents)}</td>
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
                    ${ke.map(a=>{const g=E(a.totalIncomeCents,Ur);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.totalIncomeCents)} €</span></div>
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
                    ${ke.map(a=>{const g=E(a.salaryIncomeCents,Hr);return`
                          <div class="spark-bar" title="${a.year}: ${p(a.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${p(a.salaryIncomeCents)} €</span></div>
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
                    ${ke.map(a=>{const g=E(a.totalIncomeCents,or),K=E(a.actualTotalCents,or);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${p(a.totalIncomeCents)} | Kosten ${p(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${g}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ke.length,1)}, minmax(0, 1fr));">
                    ${ke.map(a=>{const g=E(a.salaryIncomeCents,lr),K=E(a.actualTotalCents,lr);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${p(a.salaryIncomeCents)} | Kosten ${p(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${g}"></div>
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
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Jn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Jn?xt(Jn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Jn?"Änderung speichern":"Vorlage speichern"}</button>
          ${Jn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,cr=h.annualVariableFixedTemplates.reduce((a,g)=>a+g.plannedCents,0),ai=Math.round(cr/12),si=`
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
                <div class="eval-value budget-under">${p(cr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${p(ai)}</div>
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
            ${h.annualVariableFixedTemplates.map(a=>{const g=pn(a.dueDateIso),K=g?Ae(g.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${K}</td>
                    <td>${p(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,en=h.evaluationCurrentResult,ri=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${ht(h.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${en&&en.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${en?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${ht(en.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${en.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${p(en.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${p(en.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${p(en.monthAverageCents)}</div>
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
                  ${en.yearRows.length>0?en.yearRows.map(a=>`<tr>
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
                  ${en.monthRows.length>0?en.monthRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${Ae(a.month)}</td>
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
                      <strong>${ht(a.keyword)}</strong>
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
                        ${a.yearRows.length>0?a.yearRows.map(g=>`<tr>
                                <td>${g.year}</td>
                                <td>${g.hitCount}</td>
                                <td>${p(g.totalCents)}</td>
                                <td>${g.monthsWithHits}</td>
                                <td>${p(g.monthAverageCents)}</td>
                              </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                      </tbody>
                    </table>
                  </article>
                `).join("")}
      </div>
    `,ur=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",ii=h.topModal==="years"?ti:h.topModal==="fixed"?ni:h.topModal==="variable-fixed"?si:h.topModal==="dashboard"?ei:h.topModal==="evaluation"?ri:"";M.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${e?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Fr.map(a=>`<option value="${a}" ${h.theme===a?"selected":""}>${$i(a)}</option>`).join("")}
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
                  ${t.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${t.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${ht(a.message)}</span></li>`).join("")}</ol>`}
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
                  ${n.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${n.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${ht(a.message)}</span></li>`).join("")}</ol>`}
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
                  ${Array.from({length:12},(a,g)=>g+1).map(a=>`<option value="${a}" ${a===h.selectedMonth?"selected":""}>${Ae(a)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${p(ne)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${p(Ce)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${p(Qe)}</strong>
              </div>
              <div class="compact-income-row ${Je}">
                <span>Übernahme aus Vormonat</span>
                <strong>${ze?p(R):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${p(rt)}</strong>
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
                  ${Hn}
                  ${An}
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
                  ${yn}
                  ${Za}
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
                    <div class="compact-cost-budget">${p(je)}</div>
                    <div class="compact-cost-actual ${Yt}">${Tn(it)}</div>
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
                    <div class="compact-cost-budget">${p(q)}</div>
                    <div class="compact-cost-actual ${Pa}">${Tn(d.miscCents)}</div>
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
                  ${Ct.map(a=>`
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
                  ${Ea.map(a=>{const g=E(Math.abs(a.valueCents),_n),K=a.valueCents>=0?"+":"",Q=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${p(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${g}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Q}">${K}${p(a.valueCents)}</span></div>
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
                      ${T.map(a=>{const g=qt.get(a.month)?.totalBudgetCents??0,K=E(g,xs),Q=E(a.summary.totalCents,xs);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${p(a.summary.totalCents)} € | Budget ${p(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${p(a.summary.totalCents)} €</span></div>
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
                      ${T.map(a=>{const g=qt.get(a.month),K=(g?.foodBudgetCents??0)+(g?.goingOutBudgetCents??0),Q=a.summary.foodCents+a.summary.goingOutCents,Ee=E(K,ks),Ge=E(Q,ks);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${p(Q)} € | Budget ${p(K)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Ee}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Ge}"><span class="spark-bar-fill-value">${p(Q)} €</span></div>
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
                      ${T.map(a=>{const g=qt.get(a.month)?.fixedBudgetCents??0,K=E(g,ws),Q=E(a.summary.fixedCents,ws);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${p(a.summary.fixedCents)} € | Budget ${p(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${p(a.summary.fixedCents)} €</span></div>
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
                      ${T.map(a=>{const g=qt.get(a.month)?.variableBudgetCents??0,K=E(g,fa),Q=E(a.summary.variableCents,fa);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${p(a.summary.variableCents)} € | Budget ${p(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${p(a.summary.variableCents)} €</span></div>
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
                      ${T.map(a=>{const g=qt.get(a.month)?.miscBudgetCents??0,K=E(g,Zt),Q=E(a.summary.miscCents,Zt);return`
                            <div class="spark-bar" title="${Ae(a.month)}: Ist ${p(a.summary.miscCents)} € | Budget ${p(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${p(a.summary.miscCents)} €</span></div>
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
                    <div class="eval-value">${p(ne)}</div>
                    <div class="eval-value">${p(tt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${p(Ce)}</div>
                    <div class="eval-value">${p(Bt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${p(Qe)}</div>
                    <div class="eval-value">${p(Mt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Je}">${ze?p(R):"-"}</div>
                    <div class="eval-value ${xe}">${o?p(ft):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${p(rt)}</div>
                    <div class="eval-value">${p(Nt)}</div>
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
                    <div class="eval-value">${Dt(A,d.foodCents)}</div>
                    <div class="eval-value">${p(X)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Dt(D,d.goingOutCents)}</div>
                    <div class="eval-value">${p(se)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Dt(L,d.fixedCents)}</div>
                    <div class="eval-value">${p(ce)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Dt(J,d.variableCents)}</div>
                    <div class="eval-value">${p(_e)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Dt(q,d.miscCents)}</div>
                    <div class="eval-value">${p(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Dt(We,d.totalCents)}</div>
                    <div class="eval-value">${p(pt)}</div>
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
                    <div class="eval-value ${Aa}">${p(d.foodCents)}</div>
                    <div class="eval-value">${p(x.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Un}">${p(d.goingOutCents)}</div>
                    <div class="eval-value">${p(x.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Ve}">${p(d.fixedCents)}</div>
                    <div class="eval-value">${p(x.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${$s}">${p(d.variableCents)}</div>
                    <div class="eval-value">${p(x.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Pa}">${p(d.miscCents)}</div>
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
                    <div class="eval-value ${re(Wt)}">${p(Wt)}</div>
                    <div class="eval-value ${re(Mn)}">${p(Mn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${re(zt)}">${p(zt)}</div>
                    <div class="eval-value ${re(Tt)}">${p(Tt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${et}">${p(fe)}</div>
                    <div class="eval-value ${qe}">${p(_t)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${re(Et)}">${p(Et)}</div>
                    <div class="eval-value ${re(zn)}">${p(zn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Kt}">${Le}</div>
                    <div class="eval-value ${Wn}">${Pe}</div>
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
                ${T.map((a,g,K)=>{const Q=o?Se.get(me(o.year,a.month)):void 0,Ee=Q?.plannedBudgetCents??0,Ge=Q?.netCents??0,jt=Ta.get(a.month)??0,ln=Ja.get(a.month)??0,xn=Ge<0?"danger":Ge>0?"budget-under":"",ct=K[g-1],va=ct?.summary.foodCents??null,Fa=ct?.summary.goingOutCents??null,Pt=ct?.summary.fixedCents??null,Pn=ct?.summary.variableCents??null,Xn=ct?.summary.miscCents??null,dr=ct?.summary.totalCents??null,hr=ct!==void 0?Ta.get(ct.month)??0:null,fr=ct!==void 0?Ja.get(ct.month)??0:null,pr=o&&ct?Se.get(me(o.year,ct.month))?.plannedBudgetCents??0:null,vr=va===null?null:a.summary.foodCents-va,mr=Fa===null?null:a.summary.goingOutCents-Fa,gr=Pt===null?null:a.summary.fixedCents-Pt,br=Pn===null?null:a.summary.variableCents-Pn,yr=Xn===null?null:a.summary.miscCents-Xn,Cr=dr===null?null:a.summary.totalCents-dr,xr=hr===null?null:jt-hr,kr=fr===null?null:ln-fr,wr=pr===null?null:Ee-pr,Da=Ot=>Ot===null?"muted":Ot>0?"danger":Ot<0?"budget-under":"muted",$r=Ot=>Ot===null?"muted":Ot>0?"budget-under":Ot<0?"danger":"muted",oi=Ot=>Ot===null?"muted":Ot>0?"danger":Ot<0?"budget-under":"muted",On=Ot=>Ot===null?"(Δ -)":`(Δ ${Ot>0?"+":""}${p(Ot)})`,Sr=o&&ct?Se.get(me(o.year,ct.month))?.netCents??0:null,Na=Sr===null?null:Ge-Sr,li=Na===null?"(Δ -)":`(Δ ${Na>0?"+":""}${p(Na)})`,ci=Na===null?"muted":Na<0?"danger":Na>0?"budget-under":"muted";return`<tr>
                  <td>${Ae(a.month)}</td>
                  <td>${p(a.summary.foodCents)} <span class="${Da(vr)}">${On(vr)}</span></td>
                  <td>${p(a.summary.goingOutCents)} <span class="${Da(mr)}">${On(mr)}</span></td>
                  <td>${p(a.summary.fixedCents)} <span class="${Da(gr)}">${On(gr)}</span></td>
                  <td>${p(a.summary.variableCents)} <span class="${Da(br)}">${On(br)}</span></td>
                  <td>${p(a.summary.miscCents)} <span class="${Da(yr)}">${On(yr)}</span></td>
                  <td>${p(a.summary.totalCents)} <span class="${Da(Cr)}">${On(Cr)}</span></td>
                  <td>${p(jt)} <span class="${$r(xr)}">${On(xr)}</span></td>
                  <td>${p(ln)} <span class="${$r(kr)}">${On(kr)}</span></td>
                  <td>${p(Ee)} <span class="${oi(wr)}">${On(wr)}</span></td>
                  <td class="${xn}">${p(Ge)} <span class="${ci}">${li}</span></td>
                </tr>`}).join("")}
                ${ys}
                ${Cs}
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
                    <td class="${Je}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${xt(R)}" />
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
                  <strong>${p(ne)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${p(Ce)} €</strong>
                </div>
                <div class="column-overview-row ${Je}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${p(R)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${p(rt)} €</strong>
                </div>
                <div class="column-overview-row ${Ke}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${p(St)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${hn(A,d.foodCents)}
                ${hn(D,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${p(je)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${p(it)} €</strong>
                  </div>
                  <div class="column-overview-row ${Yt}">
                    <span>Diff</span>
                    <strong>${p(Lt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${xt(A)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${xt(D)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(a=>{const g=a.foodCents>0,K=a.goingOutCents>0,Q=`${a.isoDate===f?"today-row":""} ${g||K?"day-has-entry":""}`.trim(),Ee=`amount-input ${g?"day-input-has-value":""}`.trim(),Ge=`amount-input ${K?"day-input-has-value":""}`.trim();return`<tr class="${Q}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Ee}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${xt(a.foodCents)}" /></td>
                      <td><input class="${Ge}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${xt(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${hn(L,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${xt(L)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${xt(a.plannedCents)}" /></td>
                    <td class="${G(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${xt(a.actualCents)}" /></td>
                    <td class="${G(a.actualCents,a.plannedCents)}">${p(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${hn(J,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${xt(J)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${xt(a.budgetCents)}" /></td>
                    <td class="${G(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${xt(a.actualCents)}" /></td>
                    <td class="${G(a.actualCents,a.budgetCents)}">${p(a.actualCents-a.budgetCents)}</td>
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
              ${hn(q,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${xt(q)}" ${l?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${s}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),Ga(),mt(),Ie(),dt()}function Ga(){const o=M.querySelector("#theme-select"),l=M.querySelector("#open-years-modal"),f=M.querySelector("#open-evaluation-modal"),d=M.querySelector("#open-fixed-modal"),x=M.querySelector("#open-variable-fixed-modal"),T=M.querySelector("#open-dashboard-modal"),A=M.querySelector("#panel-modal-close"),D=M.querySelector("#panel-modal-backdrop"),L=M.querySelector("#open-unexported-change-log"),J=M.querySelector("#open-persistent-audit-log"),q=M.querySelector("#unexported-change-log-close"),X=M.querySelector("#unexported-change-log-backup"),se=M.querySelector("#unexported-change-log-backdrop"),ce=M.querySelector("#persistent-audit-log-close"),_e=M.querySelector("#persistent-audit-log-backdrop"),He=M.querySelector("#new-year"),ne=M.querySelector("#create-year"),Ce=M.querySelector("#evaluation-query"),Qe=M.querySelector("#run-evaluation"),Se=M.querySelector("#save-evaluation"),Ze=M.querySelector("#year-select"),st=M.querySelector("#month-select");o?.addEventListener("change",()=>{const E=o.value;Pr(E)&&ba(E)}),l?.addEventListener("click",()=>{tn("years")}),f?.addEventListener("click",()=>{tn("evaluation")}),d?.addEventListener("click",()=>{tn("fixed")}),x?.addEventListener("click",()=>{tn("variable-fixed")}),T?.addEventListener("click",()=>{tn("dashboard")}),L?.addEventListener("click",()=>{nn()}),J?.addEventListener("click",()=>{lt()}),q?.addEventListener("click",()=>{gt()}),X?.addEventListener("click",async()=>{try{await Wa()}catch(E){console.error("Backup-Export fehlgeschlagen",E),he("Backup konnte nicht exportiert werden.","error")}}),se?.addEventListener("click",E=>{E.target===se&&gt()}),ce?.addEventListener("click",()=>{bt()}),_e?.addEventListener("click",E=>{E.target===_e&&bt()}),M.querySelectorAll("[data-dashboard-tab]").forEach(E=>{E.addEventListener("click",()=>{const j=E.dataset.dashboardTab;j!=="year"&&j!=="food"&&j!=="all"||(h.dashboardTab=j,te())})});const R=M.querySelector("#dashboard-year-select");R?.addEventListener("change",()=>{const E=Number.parseInt(R.value,10);Number.isInteger(E)&&(h.dashboardYear=E,te())}),A?.addEventListener("click",()=>{Fn()}),D?.addEventListener("click",E=>{E.target===D&&Fn()}),h.topModal&&window.setTimeout(()=>{A?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{q?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{ce?.focus()},0),ne?.addEventListener("click",async()=>{const E=Number.parseInt(He?.value??"",10);if(!Number.isInteger(E)){alert("Bitte gültiges Jahr eingeben.");return}await z(E)}),Qe?.addEventListener("click",()=>{Me(Ce?.value??"")}),Ce?.addEventListener("keydown",E=>{E.key==="Enter"&&(E.preventDefault(),Me(Ce.value))}),Se?.addEventListener("click",async()=>{await ua()}),M.querySelectorAll("[data-remove-saved-evaluation]").forEach(E=>{E.addEventListener("click",async()=>{const j=E.dataset.removeSavedEvaluation;j&&await da(j)})}),Ze?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(Ze.value,10),h.selectedMonth=an(),te()}),st?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(st.value,10),te()});const ze=M.querySelector("#fixed-template-name"),rt=M.querySelector("#fixed-template-amount"),Jt=M.querySelector("#add-fixed-template"),St=M.querySelector("#cancel-fixed-template-edit"),fe=M.querySelector("#annual-variable-fixed-name"),Et=M.querySelector("#annual-variable-fixed-date"),Le=M.querySelector("#annual-variable-fixed-amount"),Je=M.querySelector("#add-annual-variable-fixed-template");Jt?.addEventListener("click",async()=>{const E=ze?.value??"",j=Re(rt?.value??"0");await vn(E,j),ze&&(ze.value=""),rt&&(rt.value="")}),St?.addEventListener("click",()=>{mn()}),Je?.addEventListener("click",async()=>{const E=fe?.value??"",j=Et?.value??"",Ct=Re(Le?.value??"0");await Ns(E,j,Ct),fe&&(fe.value=""),Et&&(Et.value=""),Le&&(Le.value="")}),M.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(E=>{E.addEventListener("click",async()=>{const j=E.dataset.removeAnnualVariableFixedTemplate;j&&await gn(j)})}),M.querySelectorAll("[data-edit-fixed-template]").forEach(E=>{E.addEventListener("click",()=>{const j=E.dataset.editFixedTemplate;j&&Vn(j)})}),M.querySelectorAll("[data-remove-fixed-template]").forEach(E=>{E.addEventListener("click",async()=>{const j=E.dataset.removeFixedTemplate;j&&await ka(j)})}),M.querySelectorAll("[data-day-food]").forEach(E=>{E.addEventListener("click",j=>{j.preventDefault(),E.blur(),at(E)}),E.addEventListener("change",async()=>{const j=E.dataset.dayFood;j&&await Va(j,"foodCents",Re(E.value))})}),M.querySelectorAll("[data-day-going]").forEach(E=>{E.addEventListener("click",j=>{j.preventDefault(),E.blur(),at(E)}),E.addEventListener("change",async()=>{const j=E.dataset.dayGoing;j&&await Va(j,"goingOutCents",Re(E.value))})}),M.querySelectorAll("[data-fixed-actual]").forEach(E=>{E.addEventListener("click",j=>{j.preventDefault(),E.blur(),at(E)}),E.addEventListener("change",async()=>{const j=E.dataset.fixedActual;j&&await Sn(j,Re(E.value))})}),M.querySelectorAll("[data-fixed-planned]").forEach(E=>{E.addEventListener("click",j=>{j.preventDefault(),E.blur(),at(E)}),E.addEventListener("change",async()=>{const j=E.dataset.fixedPlanned;j&&await cs(j,Re(E.value))})});const Ke=M.querySelector("#fixed-budget");Ke?.addEventListener("click",E=>{E.preventDefault(),Ke.blur(),at(Ke)}),Ke?.addEventListener("change",async()=>{await En(Re(Ke.value))});const et=M.querySelector("#food-budget");et?.addEventListener("click",E=>{E.preventDefault(),et.blur(),at(et)}),et?.addEventListener("change",async()=>{await rn(Re(et.value))});const tt=M.querySelector("#going-out-budget");tt?.addEventListener("click",E=>{E.preventDefault(),tt.blur(),at(tt)}),tt?.addEventListener("change",async()=>{await us(Re(tt.value))}),M.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Ts()});const Mt=M.querySelector("#misc-budget");Mt?.addEventListener("click",E=>{E.preventDefault(),Mt.blur(),at(Mt)}),Mt?.addEventListener("change",async()=>{await Yn(Re(Mt.value))});const ft=M.querySelector("#variable-budget");ft?.addEventListener("click",E=>{E.preventDefault(),ft.blur(),at(ft)}),ft?.addEventListener("change",async()=>{await wa(Re(ft.value))});const Nt=M.querySelector("#variable-position-name"),_t=M.querySelector("#variable-position-budget"),zn=M.querySelector("#add-variable-position"),Pe=M.querySelector("#add-variable-position-recurring"),xe=M.querySelector("#misc-description"),qe=M.querySelector("#misc-amount"),We=M.querySelector("#add-misc"),je=M.querySelector("#add-misc-recurring"),it=M.querySelector("#income-description"),Lt=M.querySelector("#income-source"),Yt=M.querySelector("#income-amount"),pt=M.querySelector("#add-income"),zt=M.querySelector("#add-income-recurring"),Tt=M.querySelector("#fixed-cost-name"),Wt=M.querySelector("#fixed-cost-budget"),Mn=M.querySelector("#add-fixed-cost"),re=M.querySelector("#carryover-override");re?.addEventListener("click",E=>{E.preventDefault(),re.blur(),at(re)}),re?.addEventListener("change",async()=>{const E=re.value;if(!E.trim()){await $a(null);return}await $a(Re(E))}),Mn?.addEventListener("click",async()=>{const E=Re(Wt?.value??"0");await Ya(Tt?.value??"",E),Tt&&(Tt.value=""),Wt&&(Wt.value="")}),zn?.addEventListener("click",async()=>{const E=Re(_t?.value??"0");await bn(Nt?.value??"",E,!1),Nt&&(Nt.value=""),_t&&(_t.value="")}),Pe?.addEventListener("click",async()=>{const E=Re(_t?.value??"0");await bn(Nt?.value??"",E,!0),Nt&&(Nt.value=""),_t&&(_t.value="")}),We?.addEventListener("click",async()=>{const E=Re(qe?.value??"0");await za(xe?.value??"",E,!1),xe&&(xe.value=""),qe&&(qe.value="")}),je?.addEventListener("click",async()=>{const E=Re(qe?.value??"0");await za(xe?.value??"",E,!0),xe&&(xe.value=""),qe&&(qe.value="")}),pt?.addEventListener("click",async()=>{const E=Re(Yt?.value??"0"),j=Lt?.value,Ct=j==="balance"||j==="fresh"||j==="salary"?j:void 0;await la(it?.value??"",E,Ct,!1),it&&(it.value=""),Yt&&(Yt.value=""),Lt&&(Lt.value="salary")}),zt?.addEventListener("click",async()=>{const E=Re(Yt?.value??"0"),j=Lt?.value,Ct=j==="balance"||j==="fresh"||j==="salary"?j:void 0;await la(it?.value??"",E,Ct,!0),it&&(it.value=""),Yt&&(Yt.value=""),Lt&&(Lt.value="salary")}),M.querySelectorAll("[data-income-source]").forEach(E=>{E.addEventListener("change",async()=>{const j=E.dataset.incomeSource;if(!j)return;const Ct=E.value;await ca(j,Ct==="balance"||Ct==="fresh"||Ct==="salary"?Ct:void 0)})}),M.querySelectorAll("[data-variable-position-budget]").forEach(E=>{E.addEventListener("click",j=>{j.preventDefault(),E.blur(),at(E)}),E.addEventListener("change",async()=>{const j=E.dataset.variablePositionBudget;j&&await Sa(j,Re(E.value))})}),M.querySelectorAll("[data-variable-position-actual]").forEach(E=>{E.addEventListener("click",j=>{j.preventDefault(),E.blur(),at(E)}),E.addEventListener("change",async()=>{const j=E.dataset.variablePositionActual;j&&await ds(j,Re(E.value))})}),M.querySelectorAll("[data-remove-variable-position]").forEach(E=>{E.addEventListener("click",async()=>{const j=E.dataset.removeVariablePosition;j&&await hs(j)})}),M.querySelectorAll("[data-move-variable-position-next]").forEach(E=>{E.addEventListener("click",async()=>{const j=E.dataset.moveVariablePositionNext;j&&await ve(j)})}),M.querySelectorAll("[data-remove-fixed]").forEach(E=>{E.addEventListener("click",async()=>{const j=E.dataset.removeFixed;j&&await Ye(j)})}),M.querySelectorAll("[data-remove-income]").forEach(E=>{E.addEventListener("click",async()=>{const j=E.dataset.removeIncome;j&&await ps(j)})}),M.querySelectorAll("[data-remove-misc]").forEach(E=>{E.addEventListener("click",async()=>{const j=E.dataset.removeMisc;j&&await fs(j)})});const Xt=M.querySelector("#backup-export"),Kt=M.querySelector("#backup-import");M.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Xt?.addEventListener("click",async()=>{await Wa()}),Kt?.addEventListener("change",async()=>{const E=Kt.files?.[0];if(E){try{await vs(E)}catch(j){console.error("Backup-Import fehlgeschlagen",j),he("Backup konnte nicht importiert werden.","error")}Kt.value=""}})}return{init:Is}}const Ei="modulepreload",Bi=function(M){return"/habu26/"+M},Ir={},Mi=function(h,we,H){let de=Promise.resolve();if(we&&we.length>0){let Ue=function(Ne){return Promise.all(Ne.map(oe=>Promise.resolve(oe).then(ot=>({status:"fulfilled",value:ot}),ot=>({status:"rejected",reason:ot}))))};var ge=Ue;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),pe=ie?.nonce||ie?.getAttribute("nonce");de=Ue(we.map(Ne=>{if(Ne=Bi(Ne),Ne in Ir)return;Ir[Ne]=!0;const oe=Ne.endsWith(".css"),ot=oe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ne}"]${ot}`))return;const nt=document.createElement("link");if(nt.rel=oe?"stylesheet":Ei,oe||(nt.as="script"),nt.crossOrigin="",nt.href=Ne,pe&&nt.setAttribute("nonce",pe),document.head.appendChild(nt),oe)return new Promise((Ie,mt)=>{nt.addEventListener("load",Ie),nt.addEventListener("error",()=>mt(new Error(`Unable to preload CSS for ${Ne}`)))})}))}function ae(ie){const pe=new Event("vite:preloadError",{cancelable:!0});if(pe.payload=ie,window.dispatchEvent(pe),!pe.defaultPrevented)throw ie}return de.then(ie=>{for(const pe of ie||[])pe.status==="rejected"&&ae(pe.reason);return h().catch(ae)})};function _i(M={}){const{immediate:h=!1,onNeedRefresh:we,onOfflineReady:H,onRegistered:de,onRegisteredSW:ae,onRegisterError:ge}=M;let ie,pe;const Ue=async(oe=!0)=>{await pe};async function Ne(){if("serviceWorker"in navigator){if(ie=await Mi(async()=>{const{Workbox:oe}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:oe}},[]).then(({Workbox:oe})=>new oe("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(oe=>{ge?.(oe)}),!ie)return;ie.addEventListener("activated",oe=>{(oe.isUpdate||oe.isExternal)&&window.location.reload()}),ie.addEventListener("installed",oe=>{oe.isUpdate||H?.()}),ie.register({immediate:h}).then(oe=>{ae?ae("/habu26/sw.js",oe):de?.(oe)}).catch(oe=>{ge?.(oe)})}}return pe=Ne(),Ue}function Ti(){_i({immediate:!0})}const Dr=document.getElementById("app");if(!Dr)throw new Error("App-Container nicht gefunden.");Si(Dr).init();Ti();
