(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const pe of document.querySelectorAll('link[rel="modulepreload"]'))Q(pe);new MutationObserver(pe=>{for(const se of pe)if(se.type==="childList")for(const ye of se.addedNodes)ye.tagName==="LINK"&&ye.rel==="modulepreload"&&Q(ye)}).observe(document,{childList:!0,subtree:!0});function $e(pe){const se={};return pe.integrity&&(se.integrity=pe.integrity),pe.referrerPolicy&&(se.referrerPolicy=pe.referrerPolicy),pe.crossOrigin==="use-credentials"?se.credentials="include":pe.crossOrigin==="anonymous"?se.credentials="omit":se.credentials="same-origin",se}function Q(pe){if(pe.ep)return;pe.ep=!0;const se=$e(pe);fetch(pe.href,se)}})();const di=[1,2,3,4,5,6,7,8,9,10,11,12];function es(){return new Date().toISOString()}function ot(B){const h=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${h}`}function hi(B,h){const $e=new Date(B,h,0).getDate(),Q=[];for(let pe=1;pe<=$e;pe+=1){const se=new Date(Date.UTC(B,h-1,pe));Q.push({isoDate:se.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return Q}function pi(B){return B.map(h=>({id:ot("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Br(B,h,$e){const Q=h.reduce((se,ye)=>se+ye.plannedCents,0),pe=di.map(se=>({month:se,days:hi(B,se),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:pi(h),fixedBudgetCents:Q,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:es(),templateVersion:$e,months:pe}}function js(B,h){return{id:ot("expense"),description:B,amountCents:h,createdAt:es()}}function Mr(B,h,$e){const Q={id:ot("income"),description:B,amountCents:h,createdAt:es()};return $e?{...Q,incomeSource:$e}:Q}function $s(B,h){return B.toLocaleLowerCase("de-DE").includes(h)}function _r(B,h,$e,Q){const pe=h.trim(),se=pe.toLocaleLowerCase("de-DE");if(!se)return{id:ot("search_eval"),keyword:"",keywordNormalized:"",createdAt:es(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let ye=0,ie=0,fe=0,Ze=0,je=0;const ce=Math.max(1,Math.min(12,Q)),lt=[],rt=[];return B.slice().sort((De,yt)=>De.year-yt.year).forEach(De=>{let yt=0,Zt=0,Nn=0,en=0;De.months.slice().sort((Ct,ct)=>Ct.month-ct.month).forEach(Ct=>{let ct=0,xt=0;if(Ct.fixedCosts.forEach(pt=>{$s(pt.name,se)&&(ct+=1,xt+=pt.actualCents)}),Ct.variableCosts.forEach(pt=>{$s(pt.description,se)&&(ct+=1,xt+=pt.amountCents)}),Ct.variablePositions.forEach(pt=>{$s(pt.name,se)&&(ct+=1,xt+=pt.actualCents)}),Ct.miscCosts.forEach(pt=>{$s(pt.description,se)&&(ct+=1,xt+=pt.amountCents)}),ct<=0)return;yt+=ct,Zt+=xt,(De.year<$e||De.year===$e&&Ct.month<=ce)&&(en+=1,Nn+=xt),ye+=ct,ie+=xt,(De.year<$e||De.year===$e&&Ct.month<=ce)&&(Ze+=1,je+=xt),rt.push({year:De.year,month:Ct.month,hitCount:ct,totalCents:xt})}),!(yt<=0)&&(De.year===$e&&(fe+=Zt),lt.push({year:De.year,hitCount:yt,totalCents:Zt,monthsWithHits:en,monthAverageCents:en>0?Math.round(Nn/en):0}))}),{id:ot("search_eval"),keyword:pe,keywordNormalized:se,createdAt:es(),totalHitCount:ye,totalCents:ie,currentYearCents:fe,monthsWithHits:Ze,monthAverageCents:Ze>0?Math.round(je/Ze):0,yearRows:lt,monthRows:rt}}var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vi(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var Ss={exports:{}},mi=Ss.exports,Tr;function gi(){return Tr||(Tr=1,(function(B,h){(($e,Q)=>{B.exports=Q()})(mi,function(){var $e=function(e,t){return($e=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function pe(e,t,n){for(var s,r=0,l=t.length;r<l;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:fi,ye=Object.keys,ie=Array.isArray;function fe(e,t){return typeof t=="object"&&ye(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||se.Promise||(se.Promise=Promise);var Ze=Object.getPrototypeOf,je={}.hasOwnProperty;function ce(e,t){return je.call(e,t)}function lt(e,t){typeof t=="function"&&(t=t(Ze(e))),(typeof Reflect>"u"?ye:Reflect.ownKeys)(t).forEach(function(n){De(e,n,t[n])})}var rt=Object.defineProperty;function De(e,t,n,s){rt(e,t,fe(n&&ce(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function yt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),De(e.prototype,"constructor",e),{extend:lt.bind(null,e.prototype)}}}}var Zt=Object.getOwnPropertyDescriptor,Nn=[].slice;function en(e,t,n){return Nn.call(e,t,n)}function Ct(e,t){return t(e)}function ct(e){if(!e)throw new Error("Assertion Failed")}function xt(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Wt(e,t){if(typeof t=="string"&&ce(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var l=Wt(e,t[s]);n.push(l)}return n}var c,d=t.indexOf(".");return d===-1||(c=e[t.substr(0,d)])==null?void 0:Wt(c,t.substr(d+1))}function ht(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){ct(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)ht(e,t[s],n[s])}else{var l,c,d=t.indexOf(".");d!==-1?(l=t.substr(0,d),(d=t.substr(d+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(l))?e.splice(l,1):delete e[l]:e[l]=n:ht(c=(c=e[l])&&ce(e,l)?c:e[l]={},d,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function pt(e){var t,n={};for(t in e)ce(e,t)&&(n[t]=e[t]);return n}var Ms=[].concat;function Na(e){return Ms.apply([],e)}var Pt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Na([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),ts=new Set(Pt.map(function(e){return se[e]})),Qn=null;function kt(e){return Qn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=Qn.get(n);if(s)return s;if(ie(n)){s=[],Qn.set(n,s);for(var r=0,l=n.length;r<l;++r)s.push(t(n[r]))}else if(ts.has(n.constructor))s=n;else{var c,d=Ze(n);for(c in s=d===Object.prototype?{}:Object.create(d),Qn.set(n,s),n)ce(n,c)&&(s[c]=t(n[c]))}return s})(e),Qn=null,e}var Zn={}.toString;function Ka(e){return Zn.call(e).slice(8,-1)}var qa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",_s=typeof qa=="symbol"?function(e){var t;return e!=null&&(t=e[qa])&&t.apply(e)}:function(){return null};function un(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var it={};function ne(e){var t,n,s,r;if(arguments.length===1){if(ie(e))return e.slice();if(this===it&&typeof e=="string")return[e];if(r=_s(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var tn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Pt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Et=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Pt),ns={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Bn(e,t){this.name=e,this.message=t}function as(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function ft(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=as(e,t)}function Kn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=as(e,this.failures)}yt(Bn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),yt(ft).from(Bn),yt(Kn).from(Bn);var Ca=Et.reduce(function(e,t){return e[t]=t+"Error",e},{}),Ts=Bn,ee=Et.reduce(function(e,t){var n=t+"Error";function s(r,l){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(l?`
 `+l:""),this.inner=l||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=ns[t]||n,this.inner=null)}return yt(s).from(Ts),e[t]=s,e},{}),ss=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,Pt.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));Pt=Et.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function Se(){}function ea(e){return e}function Ps(e,t){return e==null||e===ea?t:function(n){return t(e(n))}}function Mn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function rs(e,t){return e===Se?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Mn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?Mn(r,this.onerror):r),l!==void 0?l:n}}function As(e,t){return e===Se?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Mn(n,this.onsuccess):n),s&&(this.onerror=this.onerror?Mn(s,this.onerror):s)}}function is(e,t){return e===Se?t:function(r){var s=e.apply(this,arguments),r=(fe(r,s),this.onsuccess),l=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?Mn(r,this.onsuccess):r),l&&(this.onerror=this.onerror?Mn(l,this.onerror):l),s===void 0?c===void 0?void 0:c:fe(s,c)}}function Is(e,t){return e===Se?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function ta(e,t){return e===Se?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,l=new Array(r);r--;)l[r]=arguments[r];return n.then(function(){return t.apply(s,l)})}return t.apply(this,arguments)}}Pt.ModifyError=ft,Pt.DexieError=Bn,Pt.BulkError=Kn;var At=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function qn(e){At=e}var Rn={},Vn=100,Be=typeof Promise>"u"?[]:(Et=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Be=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Ze(Be),Et]:[Et,Ze(Et),Et]),Et=Be[0],Hn=Be[1],Hn=Hn&&Hn.then,Vt=Et&&Et.constructor,jn=!!Be[2],dn=function(e,t){sa.push([e,t]),Yn&&(queueMicrotask(zn),Yn=!1)},Ra=!0,Yn=!0,nn=[],na=[],aa=ea,hn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Se,pgp:!1,env:{},finalize:Se},H=hn,sa=[],It=0,pn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==Rn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&xa(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(l){if(s._state===null){if(l===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&vn();l&&typeof l.then=="function"?n(s,function(d,v){l instanceof z?l._then(d,v):l.then(d,v)}):(s._state=!0,s._value=l,Ye(s)),c&&_n()}},xa.bind(null,s))}catch(l){xa(s,l)}})(this,e)}var fn={get:function(){var e=H,t=wa;function n(s,r){var l=this,c=!e.global&&(e!==H||t!==wa),d=c&&!gn(),v=new z(function(E,y){Bt(l,new os(ls(s,e,c,d),ls(r,e,c,d),E,y,e))});return this._consoleTask&&(v._consoleTask=this._consoleTask),v}return n.prototype=Rn,n},set:function(e){De(this,"then",e&&e.prototype===Rn?fn:{get:function(){return e},set:fn.set})}};function os(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function xa(e,t){var n,s;na.push(t),e._state===null&&(n=e._lib&&vn(),t=aa(t),e._state=!1,e._value=t,s=e,nn.some(function(r){return r._value===s._value})||nn.push(s),Ye(e),n)&&_n()}function Ye(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)Bt(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),It===0&&(++It,dn(function(){--It==0&&ra()},[]))}function Bt(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++It,dn(ge,[n,e,t])}}function ge(e,t,n){try{var s,r=t._value;!t._state&&na.length&&(na=[]),s=At&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||na.indexOf(r)!==-1||(l=>{for(var c=nn.length;c;)if(nn[--c]._value===l._value)return nn.splice(c,1)})(t),n.resolve(s)}catch(l){n.reject(l)}finally{--It==0&&ra(),--n.psd.ref||n.psd.finalize()}}function zn(){Tn(hn,function(){vn()&&_n()})}function vn(){var e=Ra;return Yn=Ra=!1,e}function _n(){var e,t,n;do for(;0<sa.length;)for(e=sa,sa=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<sa.length);Yn=Ra=!0}function ra(){for(var e=nn,t=(nn=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),pn.slice(0)),n=t.length;n;)t[--n]()}function ia(e){return new z(Rn,!1,e)}function be(e,t){var n=H;return function(){var s=vn(),r=H;try{return bn(n,!0),e.apply(this,arguments)}catch(l){t&&t(l)}finally{bn(r,!1),s&&_n()}}}lt(z.prototype,{then:fn,_then:function(e,t){Bt(this,new os(null,null,e,t,H))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:ia)(s)}):this.then(null,function(s){return(s&&s.name===t?n:ia)(s)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return ia(t)})})},timeout:function(e,t){var n=this;return e<1/0?new z(function(s,r){var l=setTimeout(function(){return r(new ee.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,l))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&De(z.prototype,Symbol.toStringTag,"Dexie.Promise"),hn.env=Va(),lt(z,{all:function(){var e=ne.apply(null,arguments).map($a);return new z(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,l){return z.resolve(r).then(function(c){e[l]=c,--s||t(e)},n)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,n){e.then(t,n)}):new z(Rn,!0,e)},reject:ia,race:function(){var e=ne.apply(null,arguments).map($a);return new z(function(t,n){e.map(function(s){return z.resolve(s).then(t,n)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return wa}},newPSD:mn,usePSD:Tn,scheduler:{get:function(){return dn},set:function(e){dn=e}},rejectionMapper:{get:function(){return aa},set:function(e){aa=e}},follow:function(e,t){return new z(function(n,s){return mn(function(r,l){var c=H;c.unhandleds=[],c.onunhandled=l,c.finalize=Mn(function(){var d,v=this;d=function(){v.unhandleds.length===0?r():l(v.unhandleds[0])},pn.push(function E(){d(),pn.splice(pn.indexOf(E),1)}),++It,dn(function(){--It==0&&ra()},[])},c.finalize),e()},t,n,s)})}}),Vt&&(Vt.allSettled&&De(z,"allSettled",function(){var e=ne.apply(null,arguments).map($a);return new z(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,l){return z.resolve(r).then(function(c){return s[l]={status:"fulfilled",value:c}},function(c){return s[l]={status:"rejected",reason:c}}).then(function(){return--n||t(s)})})})}),Vt.any&&typeof AggregateError<"u"&&De(z,"any",function(){var e=ne.apply(null,arguments).map($a);return new z(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(l,c){return z.resolve(l).then(function(d){return t(d)},function(d){r[c]=d,--s||n(new AggregateError(r))})})})}),Vt.withResolvers)&&(z.withResolvers=Vt.withResolvers);var Me={awaits:0,echoes:0,id:0},Os=0,oa=[],ka=0,wa=0,Fs=0;function mn(e,c,n,s){var r=H,l=Object.create(r),c=(l.parent=r,l.ref=0,l.global=!1,l.id=++Fs,hn.env,l.env=jn?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},c&&fe(l,c),++r.ref,l.finalize=function(){--this.parent.ref||this.parent.finalize()},Tn(l,e,n,s));return l.ref===0&&l.finalize(),c}function Wn(){return Me.id||(Me.id=++Os),++Me.awaits,Me.echoes+=Vn,Me.id}function gn(){return!!Me.awaits&&(--Me.awaits==0&&(Me.id=0),Me.echoes=Me.awaits*Vn,!0)}function $a(e){return Me.echoes&&e&&e.constructor===Vt?(Wn(),e.then(function(t){return gn(),t},function(t){return gn(),He(t)})):e}function Ds(){var e=oa[oa.length-1];oa.pop(),bn(e,!1)}function bn(e,t){var n,s,r=H;(t?!Me.echoes||ka++&&e===H:!ka||--ka&&e===H)||queueMicrotask(t?(function(l){++wa,Me.echoes&&--Me.echoes!=0||(Me.echoes=Me.awaits=Me.id=0),oa.push(H),bn(l,!0)}).bind(null,e):Ds),e!==H&&(H=e,r===hn&&(hn.env=Va()),jn)&&(n=hn.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(se,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function Va(){var e=se.Promise;return jn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Tn(e,t,n,s,r){var l=H;try{return bn(e,!0),t(n,s,r)}finally{bn(l,!1)}}function ls(e,t,n,s){return typeof e!="function"?e:function(){var r=H;n&&Wn(),bn(t,!0);try{return e.apply(this,arguments)}finally{bn(r,!1),s&&queueMicrotask(gn)}}}function ja(e){Promise===Vt&&Me.echoes===0?ka===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Hn).indexOf("[native code]")===-1&&(Wn=gn=Se);var He=z.reject,Pn="￿",an="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",cs="String expected.",Gn=[],Sa="__dbnames",Ya="readonly",An="readwrite";function yn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var za={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ea(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=kt(t))[e],t}}function us(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ve(e,t){try{var n=ds(e),s=ds(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=Wa(e),l=Wa(t),c=r.length,d=l.length,v=c<d?c:d,E=0;E<v;++E)if(r[E]!==l[E])return r[E]<l[E]?-1:1;return c===d?0:c<d?-1:1;case"Array":for(var y=e,g=t,k=y.length,w=g.length,C=k<w?k:w,x=0;x<C;++x){var M=ve(y[x],g[x]);if(M!==0)return M}return k===w?0:k<w?-1:1}}catch{}return NaN}function ds(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ka(e))==="ArrayBuffer")?"binary":t}function Wa(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Un(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,l){return!n.failures[l]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}hs.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return pe(pe([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(ie(s))return ie(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var la=hs;function hs(e){this["@@propmod"]=e}function ps(e,t){for(var n=ye(t),s=n.length,r=!1,l=0;l<s;++l){var c=n[l],d=t[c],v=Wt(e,c);d instanceof la?(ht(e,c,d.execute(v)),r=!0):v!==d&&(ht(e,c,d),r=!0)}return r}_e.prototype._trans=function(e,t,n){var s=this._tx||H.trans,r=this.name,l=At&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(E,y,g){if(g.schema[r])return t(g.idbtrans,g);throw new ee.NotFound("Table "+r+" not part of transaction")}var d=vn();try{var v=s&&s.db._novip===this.db._novip?s===H.trans?s._promise(e,c,n):mn(function(){return s._promise(e,c,n)},{trans:s,transless:H.transless||H}):(function E(y,g,k,w){if(y.idbdb&&(y._state.openComplete||H.letThrough||y._vip)){var C=y._createTransaction(g,k,y._dbSchema);try{C.create(),y._state.PR1398_maxLoop=3}catch(x){return x.name===Ca.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return E(y,g,k,w)})):He(x)}return C._promise(g,function(x,M){return mn(function(){return H.trans=C,w(x,M,C)})}).then(function(x){if(g==="readwrite")try{C.idbtrans.commit()}catch{}return g==="readonly"?x:C._completion.then(function(){return x})})}if(y._state.openComplete)return He(new ee.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return He(new ee.DatabaseClosed);y.open().catch(Se)}return y._state.dbReadyPromise.then(function(){return E(y,g,k,w)})})(this.db,e,[this.name],c);return l&&(v._consoleTask=l,v=v.catch(function(E){return console.trace(E),He(E)})),v}finally{d&&_n()}},_e.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?He(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},_e.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=ye(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(d){if(d.compound&&t.every(function(E){return 0<=d.keyPath.indexOf(E)})){for(var v=0;v<t.length;++v)if(t.indexOf(d.keyPath[v])===-1)return!1;return!0}return!1}).sort(function(d,v){return d.keyPath.length-v.keyPath.length})[0];if(n&&this.db._maxKey!==Pn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(d){return e[d]}));!n&&At&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(d,v){return ve(d,v)===0}var c=t.reduce(function(y,v){var E=y[0],y=y[1],g=s[v],k=e[v];return[E||g,E||!g?yn(y,g&&g.multi?function(w){return w=Wt(w,v),ie(w)&&w.some(function(C){return r(k,C)})}:function(w){return r(k,Wt(w,v))}):y]},[null,null]),l=c[0],c=c[1];return l?this.where(l.name).equals(e[l.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},_e.prototype.filter=function(e){return this.toCollection().and(e)},_e.prototype.count=function(e){return this.toCollection().count(e)},_e.prototype.offset=function(e){return this.toCollection().offset(e)},_e.prototype.limit=function(e){return this.toCollection().limit(e)},_e.prototype.each=function(e){return this.toCollection().each(e)},_e.prototype.toArray=function(e){return this.toCollection().toArray(e)},_e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},_e.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},_e.prototype.reverse=function(){return this.toCollection().reverse()},_e.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof us&&(e=(c=>{var d=y,v=c;if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function E(){this.constructor=d}function y(){return c!==null&&c.apply(this,arguments)||this}return $e(d,v),d.prototype=v===null?Object.create(v):(E.prototype=v.prototype,new E),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),r=e.prototype;r;r=Ze(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function l(c){if(!c)return c;var d,v=Object.create(e.prototype);for(d in c)if(!s.has(d))try{v[d]=c[d]}catch{}return v}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=l,this.hook("reading",l),e},_e.prototype.defineClass=function(){return this.mapToClass(function(e){fe(this,e)})},_e.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,c=e;return l&&r&&(c=Ea(l)(e)),this._trans("readwrite",function(d){return n.core.mutate({trans:d,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(d){return d.numFailures?z.reject(d.failures[0]):d.lastResult}).then(function(d){if(l)try{ht(e,l,d)}catch{}return d})},_e.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(l){var c=l??{};return ps(c,t),s&&ht(c,s,e),n.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(d){return d.numFailures?z.reject(d.failures[0]):!!l})})})},_e.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=Wt(e,this.schema.primKey.keyPath))===void 0?He(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},_e.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,c=e;return l&&r&&(c=Ea(l)(e)),this._trans("readwrite",function(d){return n.core.mutate({trans:d,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(d){return d.numFailures?z.reject(d.failures[0]):d.lastResult}).then(function(d){if(l)try{ht(e,l,d)}catch{}return d})},_e.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return Un(t,[e],s)}).then(function(s){return s.numFailures?z.reject(s.failures[0]):void 0})})},_e.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:za}).then(function(n){return Un(e,null,n)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},_e.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},_e.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,l=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,E=d&&E?e.map(Ea(d)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:E,wantResults:l}).then(function(y){var g=y.numFailures,k=y.failures;if(g===0)return l?y.results:y.lastResult;throw new Kn("".concat(s.name,".bulkAdd(): ").concat(g," of ").concat(v," operations failed"),k)})})},_e.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,l=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var d=s.schema.primKey,E=d.auto,d=d.keyPath;if(d&&r)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var v=e.length,E=d&&E?e.map(Ea(d)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:E,wantResults:l}).then(function(y){var g=y.numFailures,k=y.failures;if(g===0)return l?y.results:y.lastResult;throw new Kn("".concat(s.name,".bulkPut(): ").concat(g," of ").concat(v," operations failed"),k)})})},_e.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),l=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:s,cache:"clone"}).then(function(d){var v=[],E=[],y=(e.forEach(function(g,k){var w=g.key,C=g.changes,x=d[k];if(x){for(var M=0,_=Object.keys(C);M<_.length;M++){var S=_[M],I=C[S];if(S===t.schema.primKey.keyPath){if(ve(I,w)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else ht(x,S,I)}l.push(k),v.push(w),E.push(x)}}),v.length);return n.mutate({trans:c,type:"put",keys:v,values:E,updates:{keys:s,changeSpecs:r}}).then(function(g){var k=g.numFailures,w=g.failures;if(k===0)return y;for(var C=0,x=Object.keys(w);C<x.length;C++){var M,_=x[C],S=l[Number(_)];S!=null&&(M=w[_],delete w[_],w[S]=M)}throw new Kn("".concat(t.name,".bulkUpdate(): ").concat(k," of ").concat(y," operations failed"),w)})})})},_e.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return Un(t,e,r)})}).then(function(s){var r=s.numFailures,l=s.failures;if(r===0)return s.lastResult;throw new Kn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),l)})};var fs=_e;function _e(){}function ca(e){function t(c,d){if(d){for(var v=arguments.length,E=new Array(v-1);--v;)E[v-1]=arguments[v];return n[c].subscribe.apply(null,E),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=l;for(var s=1,r=arguments.length;s<r;++s)l(arguments[s]);return t;function l(c,d,v){var E,y;if(typeof c!="object")return d=d||Is,y={subscribers:[],fire:v=v||Se,subscribe:function(g){y.subscribers.indexOf(g)===-1&&(y.subscribers.push(g),y.fire=d(y.fire,g))},unsubscribe:function(g){y.subscribers=y.subscribers.filter(function(k){return k!==g}),y.fire=y.subscribers.reduce(d,v)}},n[c]=t[c]=y;ye(E=c).forEach(function(g){var k=E[g];if(ie(k))l(g,E[g][0],E[g][1]);else{if(k!=="asap")throw new ee.InvalidArgument("Invalid event config");var w=l(g,ea,function(){for(var C=arguments.length,x=new Array(C);C--;)x[C]=arguments[C];w.subscribers.forEach(function(M){xt(function(){M.apply(null,x)})})})}})}}function ua(e,t){return yt(t).from({prototype:e}),t}function In(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ga(e,t){e.filter=yn(e.filter,t)}function Ba(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return yn(s(),t())}:t,e.justLimit=n&&!s}function Ma(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function vs(e,t,n){var s=Ma(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function te(e,t,n,s){var r,l,c=e.replayFilter?yn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},l=function(d,v,E){var y,g;c&&!c(v,E,function(k){return v.stop(k)},function(k){return v.fail(k)})||((g=""+(y=v.primaryKey))=="[object ArrayBuffer]"&&(g=""+new Uint8Array(y)),ce(r,g))||(r[g]=!0,t(d,v,E))},Promise.all([e.or._iterate(l,n),ms(vs(e,s,n),e.algorithm,l,!e.keysOnly&&e.valueMapper)])):ms(vs(e,s,n),yn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function ms(e,t,n,s){var r=be(s?function(l,c,d){return n(s(l),c,d)}:n);return e.then(function(l){if(l)return l.start(function(){var c=function(){return l.continue()};t&&!t(l,function(d){return c=d},function(d){l.stop(d),c=Se},function(d){l.fail(d),c=Se})||r(l.value,l,function(d){return c=d}),c()})})}i.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,He.bind(null,n.error)):n.table._trans("readonly",e).then(t)},i.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,He.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},i.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=yn(t.algorithm,e)},i.prototype._iterate=function(e,t){return te(this._ctx,e,t,this._ctx.table.core)},i.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&fe(n,e),t._ctx=n,t},i.prototype.raw=function(){return this._ctx.valueMapper=null,this},i.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return te(t,e,n,t.table.core)})},i.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,l=r.table.core;return In(r,!0)?l.count({trans:n,query:{index:Ma(r,l.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,te(r,function(){return++s,!1},n,l).then(function(){return s}))}).then(e)},i.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function l(v,E){return E?l(v[n[E]],E-1):v[s]}var c=this._ctx.dir==="next"?1:-1;function d(v,E){return ve(l(v,r),l(E,r))*c}return this.toArray(function(v){return v.sort(d)}).then(t)},i.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,l,c=t._ctx;return c.dir==="next"&&In(c,!0)&&0<c.limit?(s=c.valueMapper,r=Ma(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(d){return d=d.result,s?d.map(s):d})):(l=[],te(c,function(d){return l.push(d)},n,c.table.core).then(function(){return l}))},e)},i.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,In(t)?Ba(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):Ba(t,function(){var n=e;return function(){return--n<0}})),this},i.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Ba(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},i.prototype.until=function(e,t){return Ga(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},i.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},i.prototype.last=function(e){return this.reverse().first(e)},i.prototype.filter=function(e){var t;return Ga(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=yn(t.isMatch,e),this},i.prototype.and=function(e){return this.filter(e)},i.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},i.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},i.prototype.desc=function(){return this.reverse()},i.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},i.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},i.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},i.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},i.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&In(t,!0)&&0<t.limit)return this._read(function(s){var r=Ma(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},i.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},i.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},i.prototype.lastKey=function(e){return this.reverse().firstKey(e)},i.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Ga(this._ctx,function(s){var s=s.primaryKey.toString(),r=ce(e,s);return e[s]=!0,!r})),this},i.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(x,M){var _=M.failures;k+=x-M.numFailures;for(var S=0,I=ye(_);S<I.length;S++){var F=I[S];g.push(_[F])}}var l=typeof e=="function"?e:function(x){return ps(x,e)},c=n.table.core,y=c.schema.primaryKey,d=y.outbound,v=y.extractKey,E=200,y=t.db._options.modifyChunkSize,g=(y&&(E=typeof y=="object"?y[c.name]||y["*"]||200:y),[]),k=0,w=[],C=e===p;return t.clone().primaryKeys().then(function(x){function M(S){var I=Math.min(E,x.length-S),F=x.slice(S,S+I);return(C?Promise.resolve([]):c.getMany({trans:s,keys:F,cache:"immutable"})).then(function(j){var L=[],D=[],J=d?[]:null,G=C?F:[];if(!C)for(var q=0;q<I;++q){var X=j[q],le={value:kt(X),primKey:x[S+q]};l.call(le,le.value,le)!==!1&&(le.value==null?G.push(x[S+q]):d||ve(v(X),v(le.value))===0?(D.push(le.value),d&&J.push(x[S+q])):(G.push(x[S+q]),L.push(le.value)))}return Promise.resolve(0<L.length&&c.mutate({trans:s,type:"add",values:L}).then(function(he){for(var ae in he.failures)G.splice(parseInt(ae),1);r(L.length,he)})).then(function(){return(0<D.length||_&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:J,values:D,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(he){return r(D.length,he)})}).then(function(){return(0<G.length||_&&C)&&c.mutate({trans:s,type:"delete",keys:G,criteria:_,isAdditionalChunk:0<S}).then(function(he){return Un(n.table,G,he)}).then(function(he){return r(G.length,he)})}).then(function(){return x.length>S+I&&M(S+E)})})}var _=In(n)&&n.limit===1/0&&(typeof e!="function"||C)&&{index:n.index,range:n.range};return M(0).then(function(){if(0<g.length)throw new ft("Error modifying one or more objects",g,k,w);return x.length})})})},i.prototype.delete=function(){var e=this._ctx,t=e.range;return!In(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(p):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(l){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(v){var d=v.failures,v=v.numFailures;if(v)throw new ft("Could not delete some values",Object.keys(d).map(function(E){return d[E]}),l-v);return l-v})})})};var o=i;function i(){}var p=function(e,t){return t.value=null};function u(e,t){return e<t?-1:e===t?0:1}function m(e,t){return t<e?-1:e===t?0:1}function $(e,t,n){return e=e instanceof V?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function P(e){return new e.Collection(e,function(){return W("")}).limit(0)}function O(w,t,n,s){var r,l,c,d,v,E,y,g=n.length;if(!n.every(function(x){return typeof x=="string"}))return $(w,cs);function k(x){r=x==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},l=x==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=x==="next"?u:m;var M=n.map(function(_){return{lower:l(_),upper:r(_)}}).sort(function(_,S){return c(_.lower,S.lower)});d=M.map(function(_){return _.upper}),v=M.map(function(_){return _.lower}),y=(E=x)==="next"?"":s}k("next");var w=new w.Collection(w,function(){return A(d[0],v[g-1]+s)}),C=(w._ondirectionchange=function(x){k(x)},0);return w._addAlgorithm(function(x,M,_){var S=x.key;if(typeof S=="string"){var I=l(S);if(t(I,v,C))return!0;for(var F=null,j=C;j<g;++j){var L=((D,J,G,q,X,le)=>{for(var he=Math.min(D.length,q.length),ae=-1,de=0;de<he;++de){var Ve=J[de];if(Ve!==q[de])return X(D[de],G[de])<0?D.substr(0,de)+G[de]+G.substr(de+1):X(D[de],q[de])<0?D.substr(0,de)+q[de]+G.substr(de+1):0<=ae?D.substr(0,ae)+J[ae]+G.substr(ae+1):null;X(D[de],Ve)<0&&(ae=de)}return he<q.length&&le==="next"?D+G.substr(D.length):he<D.length&&le==="prev"?D.substr(0,G.length):ae<0?null:D.substr(0,ae)+q[ae]+G.substr(ae+1)})(S,I,d[j],v[j],c,E);L===null&&F===null?C=j+1:(F===null||0<c(F,L))&&(F=L)}M(F!==null?function(){x.continue(F+y)}:_)}return!1}),w}function A(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function W(e){return{type:1,lower:e,upper:e}}Object.defineProperty(Y.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Y.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?P(this):new this.Collection(this,function(){return A(e,t,!n,!s)})}catch{return $(this,an)}},Y.prototype.equals=function(e){return e==null?$(this,an):new this.Collection(this,function(){return W(e)})},Y.prototype.above=function(e){return e==null?$(this,an):new this.Collection(this,function(){return A(e,void 0,!0)})},Y.prototype.aboveOrEqual=function(e){return e==null?$(this,an):new this.Collection(this,function(){return A(e,void 0,!1)})},Y.prototype.below=function(e){return e==null?$(this,an):new this.Collection(this,function(){return A(void 0,e,!1,!0)})},Y.prototype.belowOrEqual=function(e){return e==null?$(this,an):new this.Collection(this,function(){return A(void 0,e)})},Y.prototype.startsWith=function(e){return typeof e!="string"?$(this,cs):this.between(e,e+Pn,!0,!0)},Y.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):O(this,function(t,n){return t.indexOf(n[0])===0},[e],Pn)},Y.prototype.equalsIgnoreCase=function(e){return O(this,function(t,n){return t===n[0]},[e],"")},Y.prototype.anyOfIgnoreCase=function(){var e=ne.apply(it,arguments);return e.length===0?P(this):O(this,function(t,n){return n.indexOf(t)!==-1},e,"")},Y.prototype.startsWithAnyOfIgnoreCase=function(){var e=ne.apply(it,arguments);return e.length===0?P(this):O(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,Pn)},Y.prototype.anyOf=function(){var e,t,n=this,s=ne.apply(it,arguments),r=this._cmp;try{s.sort(r)}catch{return $(this,an)}return s.length===0?P(this):((e=new this.Collection(this,function(){return A(s[0],s[s.length-1])}))._ondirectionchange=function(l){r=l==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(l,c,d){for(var v=l.key;0<r(v,s[t]);)if(++t===s.length)return c(d),!1;return r(v,s[t])===0||(c(function(){l.continue(s[t])}),!1)}),e)},Y.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Y.prototype.noneOf=function(){var e=ne.apply(it,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return $(this,an)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},Y.prototype.inAnyRange=function(e,_){var n=this,s=this._cmp,r=this._ascending,l=this._descending,c=this._min,d=this._max;if(e.length===0)return P(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return $(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var v=!_||_.includeLowers!==!1,E=_&&_.includeUppers===!0,y,g=r;function k(S,I){return g(S[0],I[0])}try{(y=e.reduce(function(S,I){for(var F=0,j=S.length;F<j;++F){var L=S[F];if(s(I[0],L[1])<0&&0<s(I[1],L[0])){L[0]=c(L[0],I[0]),L[1]=d(L[1],I[1]);break}}return F===j&&S.push(I),S},[])).sort(k)}catch{return $(this,an)}var w=0,C=E?function(S){return 0<r(S,y[w][1])}:function(S){return 0<=r(S,y[w][1])},x=v?function(S){return 0<l(S,y[w][0])}:function(S){return 0<=l(S,y[w][0])},M=C,_=new this.Collection(this,function(){return A(y[0][0],y[y.length-1][1],!v,!E)});return _._ondirectionchange=function(S){g=S==="next"?(M=C,r):(M=x,l),y.sort(k)},_._addAlgorithm(function(S,I,F){for(var j,L=S.key;M(L);)if(++w===y.length)return I(F),!1;return!C(j=L)&&!x(j)||(n._cmp(L,y[w][1])===0||n._cmp(L,y[w][0])===0||I(function(){g===r?S.continue(y[w][0]):S.continue(y[w][1])}),!1)}),_},Y.prototype.startsWithAnyOf=function(){var e=ne.apply(it,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?P(this):this.inAnyRange(e.map(function(t){return[t,t+Pn]})):$(this,"startsWithAnyOf() only works with strings")};var V=Y;function Y(){}function U(e){return be(function(t){return re(t),e(t.target.error),!1})}function re(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var xe="storagemutated",Je="x-storagemutated-1",oe=ca(null,xe),Ge=(qe.prototype._lock=function(){return ct(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},qe.prototype._unlock=function(){if(ct(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{Tn(e[1],e[0])}catch{}}return this},qe.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},qe.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(ct(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(s);case"MissingAPIError":throw new ee.MissingAPI(s.message,s);default:throw new ee.OpenFailed(s)}if(!this.active)throw new ee.TransactionInactive;ct(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=be(function(r){re(r),t._reject(e.error)}),e.onabort=be(function(r){re(r),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=be(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&oe.storagemutated.fire(e.mutatedParts)})}return this},qe.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?He(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(l,c){r._blockedFuncs.push([function(){r._promise(e,t,n).then(l,c)},H])}):n?mn(function(){var l=new z(function(c,d){r._lock();var v=t(c,d,r);v&&v.then&&v.then(c,d)});return l.finally(function(){return r._unlock()}),l._lib=!0,l}):((s=new z(function(l,c){var d=t(l,c,r);d&&d.then&&d.then(l,c)}))._lib=!0,s):He(new ee.TransactionInactive)},qe.prototype._root=function(){return this.parent?this.parent._root():this},qe.prototype.waitFor=function(e){var t,n=this._root(),s=z.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function l(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=l)})()),n._waitingFor);return new z(function(l,c){s.then(function(d){return n._waitingQueue.push(be(l.bind(null,d)))},function(d){return n._waitingQueue.push(be(c.bind(null,d)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},qe.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},qe.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(ce(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},qe);function qe(){}function Te(e,t,n,s,r,l,c,d){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:l,src:(n&&!c?"&":"")+(s?"*":"")+(r?"++":"")+at(t),type:d}}function at(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ot(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,l,c){return l=s(l,c),l&&(r[l[0]]=l[1]),r},{}))};var s}var K=function(e){try{return e.only([[]]),K=function(){return[[]]},[[]]}catch{return K=function(){return Pn},Pn}};function wt(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Wt(n,t)}:function(n){return Wt(n,e)};var t}function vt(e){return[].slice.call(e)}var sn=0;function mt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Ce(e,t,v){function s(C){if(C.type===3)return null;if(C.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var g=C.lower,k=C.upper,w=C.lowerOpen,C=C.upperOpen;return g===void 0?k===void 0?null:t.upperBound(k,!!C):k===void 0?t.lowerBound(g,!!w):t.bound(g,k,!!w,!!C)}function r(y){var g,k=y.name;return{name:k,schema:y,mutate:function(w){var C=w.trans,x=w.type,M=w.keys,_=w.values,S=w.range;return new Promise(function(I,F){I=be(I);var j=C.objectStore(k),L=j.keyPath==null,D=x==="put"||x==="add";if(!D&&x!=="delete"&&x!=="deleteRange")throw new Error("Invalid operation type: "+x);var J,G=(M||_||{length:1}).length;if(M&&_&&M.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(G===0)return I({numFailures:0,failures:{},results:[],lastResult:void 0});function q(Ke){++he,re(Ke)}var X=[],le=[],he=0;if(x==="deleteRange"){if(S.type===4)return I({numFailures:he,failures:le,results:[],lastResult:void 0});S.type===3?X.push(J=j.clear()):X.push(J=j.delete(s(S)))}else{var L=D?L?[_,M]:[_,null]:[M,null],ae=L[0],de=L[1];if(D)for(var Ve=0;Ve<G;++Ve)X.push(J=de&&de[Ve]!==void 0?j[x](ae[Ve],de[Ve]):j[x](ae[Ve])),J.onerror=q;else for(Ve=0;Ve<G;++Ve)X.push(J=j[x](ae[Ve])),J.onerror=q}function ut(Ke){Ke=Ke.target.result,X.forEach(function(Xt,va){return Xt.error!=null&&(le[va]=Xt.error)}),I({numFailures:he,failures:le,results:x==="delete"?M:X.map(function(Xt){return Xt.result}),lastResult:Ke})}J.onerror=function(Ke){q(Ke),ut(Ke)},J.onsuccess=ut})},getMany:function(w){var C=w.trans,x=w.keys;return new Promise(function(M,_){M=be(M);for(var S,I=C.objectStore(k),F=x.length,j=new Array(F),L=0,D=0,J=function(X){X=X.target,j[X._pos]=X.result,++D===L&&M(j)},G=U(_),q=0;q<F;++q)x[q]!=null&&((S=I.get(x[q]))._pos=q,S.onsuccess=J,S.onerror=G,++L);L===0&&M(j)})},get:function(w){var C=w.trans,x=w.key;return new Promise(function(M,_){M=be(M);var S=C.objectStore(k).get(x);S.onsuccess=function(I){return M(I.target.result)},S.onerror=U(_)})},query:(g=d,function(w){return new Promise(function(C,x){C=be(C);var M,_,S,D=w.trans,I=w.values,F=w.limit,L=w.query,j=F===1/0?void 0:F,J=L.index,L=L.range,D=D.objectStore(k),D=J.isPrimaryKey?D:D.index(J.name),J=s(L);if(F===0)return C({result:[]});g?((L=I?D.getAll(J,j):D.getAllKeys(J,j)).onsuccess=function(G){return C({result:G.target.result})},L.onerror=U(x)):(M=0,_=!I&&"openKeyCursor"in D?D.openKeyCursor(J):D.openCursor(J),S=[],_.onsuccess=function(G){var q=_.result;return!q||(S.push(I?q.value:q.primaryKey),++M===F)?C({result:S}):void q.continue()},_.onerror=U(x))})}),openCursor:function(w){var C=w.trans,x=w.values,M=w.query,_=w.reverse,S=w.unique;return new Promise(function(I,F){I=be(I);var D=M.index,j=M.range,L=C.objectStore(k),L=D.isPrimaryKey?L:L.index(D.name),D=_?S?"prevunique":"prev":S?"nextunique":"next",J=!x&&"openKeyCursor"in L?L.openKeyCursor(s(j),D):L.openCursor(s(j),D);J.onerror=U(F),J.onsuccess=be(function(G){var q,X,le,he,ae=J.result;ae?(ae.___id=++sn,ae.done=!1,q=ae.continue.bind(ae),X=(X=ae.continuePrimaryKey)&&X.bind(ae),le=ae.advance.bind(ae),he=function(){throw new Error("Cursor not stopped")},ae.trans=C,ae.stop=ae.continue=ae.continuePrimaryKey=ae.advance=function(){throw new Error("Cursor not started")},ae.fail=be(F),ae.next=function(){var de=this,Ve=1;return this.start(function(){return Ve--?de.continue():de.stop()}).then(function(){return de})},ae.start=function(de){function Ve(){if(J.result)try{de()}catch(Ke){ae.fail(Ke)}else ae.done=!0,ae.start=function(){throw new Error("Cursor behind last entry")},ae.stop()}var ut=new Promise(function(Ke,Xt){Ke=be(Ke),J.onerror=U(Xt),ae.fail=Xt,ae.stop=function(va){ae.stop=ae.continue=ae.continuePrimaryKey=ae.advance=he,Ke(va)}});return J.onsuccess=be(function(Ke){J.onsuccess=Ve,Ve()}),ae.continue=q,ae.continuePrimaryKey=X,ae.advance=le,Ve(),ut},I(ae)):I(null)},F)})},count:function(w){var C=w.query,x=w.trans,M=C.index,_=C.range;return new Promise(function(S,I){var F=x.objectStore(k),F=M.isPrimaryKey?F:F.index(M.name),j=s(_),j=j?F.count(j):F.count();j.onsuccess=be(function(L){return S(L.target.result)}),j.onerror=U(I)})}}}l=v,c=vt((v=e).objectStoreNames);var l,v={schema:{name:v.name,tables:c.map(function(y){return l.objectStore(y)}).map(function(y){var g=y.keyPath,k=y.autoIncrement,C=ie(g),w={},C={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:g==null,compound:C,keyPath:g,autoIncrement:k,unique:!0,extractKey:wt(g)},indexes:vt(y.indexNames).map(function(x){return y.index(x)}).map(function(S){var I=S.name,M=S.unique,_=S.multiEntry,S=S.keyPath,I={name:I,compound:ie(S),keyPath:S,unique:M,multiEntry:_,extractKey:wt(S)};return w[mt(S)]=I}),getIndexByKeyPath:function(x){return w[mt(x)]}};return w[":id"]=C.primaryKey,g!=null&&(w[mt(g)]=C.primaryKey),C})},hasGetAll:0<c.length&&"getAll"in l.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=v.schema,d=v.hasGetAll,v=c.tables.map(r),E={};return v.forEach(function(y){return E[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if(E[y])return E[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:K(t),schema:c}}function jt(e,t,n,s){return n=n.IDBKeyRange,t=Ce(t,n,s),{dbcore:e.dbcore.reduce(function(r,l){return l=l.create,Q(Q({},r),l(r))},t)}}function Le(e,t){var n=t.db,n=jt(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(l){return l.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function ze(e,t,n,s){n.forEach(function(r){var l=s[r];t.forEach(function(c){var d=(function v(E,y){return Zt(E,y)||(E=Ze(E))&&v(E,y)})(c,r);(!d||"value"in d&&d.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?De(c,r,{get:function(){return this.table(r)},set:function(v){rt(this,r,{value:v,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,l))})})}function Xe(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function et(e,t){return e._cfg.version-t._cfg.version}function tt(e,t,n,s){var r=e._dbSchema,l=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=Ot("$meta",Pe("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(l.create(n),l._completion.catch(s),l._reject.bind(l)),d=H.transless||H;mn(function(){if(H.trans=l,H.transless=d,t!==0)return Le(e,n),E=t,((v=l).storeNames.includes("$meta")?v.table("$meta").get("version").then(function(y){return y??E}):z.resolve(E)).then(function(M){var g=e,k=M,w=l,C=n,x=[],M=g._versions,_=g._dbSchema=Cn(0,g.idbdb,C);return(M=M.filter(function(S){return S._cfg.version>=k})).length===0?z.resolve():(M.forEach(function(S){x.push(function(){var I,F,j,L=_,D=S._cfg.dbschema,J=(ke(g,L,C),ke(g,D,C),_=g._dbSchema=D,Ft(L,D)),G=(J.add.forEach(function(q){Dt(C,q[0],q[1].primKey,q[1].indexes)}),J.change.forEach(function(q){if(q.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var X=C.objectStore(q.name);q.add.forEach(function(le){return gt(X,le)}),q.change.forEach(function(le){X.deleteIndex(le.name),gt(X,le)}),q.del.forEach(function(le){return X.deleteIndex(le)})}),S._cfg.contentUpgrade);if(G&&S._cfg.version>k)return Le(g,C),w._memoizedTables={},I=pt(D),J.del.forEach(function(q){I[q]=L[q]}),Xe(g,[g.Transaction.prototype]),ze(g,[g.Transaction.prototype],ye(I),I),w.schema=I,(F=tn(G))&&Wn(),D=z.follow(function(){var q;(j=G(w))&&F&&(q=gn.bind(null,null),j.then(q,q))}),j&&typeof j.then=="function"?z.resolve(j):D.then(function(){return j})}),x.push(function(I){var F,j,L=S._cfg.dbschema;F=L,j=I,[].slice.call(j.db.objectStoreNames).forEach(function(D){return F[D]==null&&j.db.deleteObjectStore(D)}),Xe(g,[g.Transaction.prototype]),ze(g,[g.Transaction.prototype],g._storeNames,g._dbSchema),w.schema=g._dbSchema}),x.push(function(I){g.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(g.idbdb.version/10)===S._cfg.version?(g.idbdb.deleteObjectStore("$meta"),delete g._dbSchema.$meta,g._storeNames=g._storeNames.filter(function(F){return F!=="$meta"})):I.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return x.length?z.resolve(x.shift()(w.idbtrans)).then(S):z.resolve()})().then(function(){Lt(_,C)}))}).catch(c);var v,E;ye(r).forEach(function(y){Dt(n,y,r[y].primKey,r[y].indexes)}),Le(e,n),z.follow(function(){return e.on.populate.fire(l)}).catch(c)})}function Gt(e,t){Lt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=Cn(0,e.idbdb,t);ke(e,e._dbSchema,t);for(var s=0,r=Ft(n,e._dbSchema).change;s<r.length;s++){var l=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var d=t.objectStore(c.name);c.add.forEach(function(v){At&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(v.src)),gt(d,v)})})(r[s]);if(typeof l=="object")return l.value}}function Ft(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],l=t[n];if(r){var c={name:n,def:l,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(l.primKey.keyPath||"")||r.primKey.auto!==l.primKey.auto)c.recreate=!0,s.change.push(c);else{var d=r.idxByName,v=l.idxByName,E=void 0;for(E in d)v[E]||c.del.push(E);for(E in v){var y=d[E],g=v[E];y?y.src!==g.src&&c.change.push(g):c.add.push(g)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([n,l])}return s}function Dt(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(l){return gt(r,l)})}function Lt(e,t){ye(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(At&&console.debug("Dexie: Creating missing table",n),Dt(t,n,e[n].primKey,e[n].indexes))})}function gt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function Cn(e,t,n){var s={};return en(t.objectStoreNames,0).forEach(function(r){for(var l=n.objectStore(r),c=Te(at(E=l.keyPath),E||"",!0,!1,!!l.autoIncrement,E&&typeof E!="string",!0),d=[],v=0;v<l.indexNames.length;++v){var y=l.index(l.indexNames[v]),E=y.keyPath,y=Te(y.name,E,!!y.unique,!!y.multiEntry,!1,E&&typeof E!="string",!1);d.push(y)}s[r]=Ot(r,c,d)}),s}function ke(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var l=s[r],c=n.objectStore(l);e._hasGetAll="getAll"in c;for(var d=0;d<c.indexNames.length;++d){var v,E=c.indexNames[d],y=c.index(E).keyPath,y=typeof y=="string"?y:"["+en(y).join("+")+"]";t[l]&&(v=t[l].idxByName[y])&&(v.name=E,delete t[l].idxByName[y],t[l].idxByName[E]=v)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Pe(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),l=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return Te(r,l||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(l),n===0,s)})}Ne.prototype._createTableSchema=Ot,Ne.prototype._parseIndexSyntax=Pe,Ne.prototype._parseStoresSpec=function(e,t){var n=this;ye(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),l=r.shift();if(!l)throw new ee.Schema("Invalid schema for table "+s+": "+e[s]);if(l.unique=!0,l.multi)throw new ee.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),l=n._createTableSchema(s,l,r),t[s]=l}})},Ne.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?fe(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(l){fe(s,l._cfg.storesSource),r=l._cfg.dbschema={},l._parseStoresSpec(s,r)}),t._dbSchema=r,Xe(t,[t._allTables,t,t.Transaction.prototype]),ze(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],ye(r),r),t._storeNames=ye(r),this},Ne.prototype.upgrade=function(e){return this._cfg.contentUpgrade=ta(this._cfg.contentUpgrade||Se,e),this};var We=Ne;function Ne(){}function Re(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Jt(Sa,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function rn(e){return e&&typeof e.databases=="function"}function on(e){return mn(function(){return H.letThrough=!0,e()})}function xn(e){return!("from"in e)}var Ae=function(e,t){var n;if(!this)return n=new Ae,e&&"d"in e&&fe(n,e),n;fe(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function me(e,t,n){var s=ve(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(xn(e))return fe(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(ve(n,e.from)<0)return s?me(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},ue(e);if(0<ve(t,e.to))return r?me(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},ue(e);ve(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<ve(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&st(e,s),r&&t&&st(e,r)}}function st(e,t){xn(t)||(function n(s,r){var l=r.from,c=r.l,d=r.r;me(s,l,r.to),c&&n(s,c),d&&n(s,d)})(e,t)}function Nt(e,t){var n=On(t),s=n.next();if(!s.done)for(var r=s.value,l=On(e),c=l.next(r.from),d=c.value;!s.done&&!c.done;){if(ve(d.from,r.to)<=0&&0<=ve(d.to,r.from))return!0;ve(r.from,d.from)<0?r=(s=n.next(d.from)).value:d=(c=l.next(r.from)).value}return!1}function On(e){var t=xn(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&ve(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||ve(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function ue(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=Q({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=kn(n)),e.d=kn(e)}function kn(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Kt(e,t){return ye(t).forEach(function(n){e[n]?st(e[n],t[n]):e[n]=(function s(r){var l,c,d={};for(l in r)ce(r,l)&&(c=r[l],d[l]=!c||typeof c!="object"||ts.has(c.constructor)?c:s(c));return d})(t[n])}),e}function ln(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Nt(t[n],e[n])})}lt(Ae.prototype,((Et={add:function(e){return st(this,e),this},addKey:function(e){return me(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return me(t,n,n)}),this},hasKey:function(e){var t=On(this).next(e).value;return t&&ve(t.from,e)<=0&&0<=ve(t.to,e)}})[qa]=function(){return On(this)},Et));var Ut={},wn={},da=!1;function nt(e){Kt(wn,e),da||(da=!0,setTimeout(function(){da=!1,$t(wn,!(wn={}))},0))}function $t(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(Ut);s<r.length;s++)bt(d=r[s],e,n,t);else for(var l in e){var c,d,l=/^idb\:\/\/(.*)\/(.*)\//.exec(l);l&&(c=l[1],l=l[2],d=Ut["idb://".concat(c,"/").concat(l)])&&bt(d,e,n,t)}n.forEach(function(v){return v()})}function bt(e,t,n,s){for(var r=[],l=0,c=Object.entries(e.queries.query);l<c.length;l++){for(var d=c[l],v=d[0],E=[],y=0,g=d[1];y<g.length;y++){var k=g[y];ln(t,k.obsSet)?k.subscribers.forEach(function(M){return n.add(M)}):s&&E.push(k)}s&&r.push([v,E])}if(s)for(var w=0,C=r;w<C.length;w++){var x=C[w],v=x[0],E=x[1];e.queries.query[v]=E}}function Ua(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?He(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),l=!1;function c(){if(t.openCanceller!==s)throw new ee.DatabaseClosed("db.open() was cancelled")}function d(){return new z(function(k,w){if(c(),!n)throw new ee.MissingAPI;var C=e.name,x=t.autoSchema||!r?n.open(C):n.open(C,r);if(!x)throw new ee.MissingAPI;x.onerror=U(w),x.onblocked=be(e._fireOnBlocked),x.onupgradeneeded=be(function(M){var _;y=x.transaction,t.autoSchema&&!e._options.allowEmptyDB?(x.onerror=re,y.abort(),x.result.close(),(_=n.deleteDatabase(C)).onsuccess=_.onerror=be(function(){w(new ee.NoSuchDatabase("Database ".concat(C," doesnt exist")))})):(y.onerror=U(w),_=M.oldVersion>Math.pow(2,62)?0:M.oldVersion,g=_<1,e.idbdb=x.result,l&&Gt(e,y),tt(e,_/10,y,w))},w),x.onsuccess=be(function(){y=null;var M,_,S,I,F,j,L=e.idbdb=x.result,D=en(L.objectStoreNames);if(0<D.length)try{var J=L.transaction((F=D).length===1?F[0]:F,"readonly");if(t.autoSchema)j=L,I=J,(S=e).verno=j.version/10,I=S._dbSchema=Cn(0,j,I),S._storeNames=en(j.objectStoreNames,0),ze(S,[S._allTables],ye(I),I);else if(ke(e,e._dbSchema,J),_=J,((_=Ft(Cn(0,(M=e).idbdb,_),M._dbSchema)).add.length||_.change.some(function(G){return G.add.length||G.change.length}))&&!l)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),L.close(),r=L.version+1,l=!0,k(d());Le(e,J)}catch{}Gn.push(e),L.onversionchange=be(function(G){t.vcFired=!0,e.on("versionchange").fire(G)}),L.onclose=be(function(){e.close({disableAutoOpen:!1})}),g&&(D=e._deps,F=C,rn(j=D.indexedDB)||F===Sa||Re(j,D.IDBKeyRange).put({name:F}).catch(Se)),k()},w)}).catch(function(k){switch(k?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),d();break;case"VersionError":if(0<r)return r=0,d()}return z.reject(k)})}var v,E=t.dbReadyResolve,y=null,g=!1;return z.race([s,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(k){function w(){return indexedDB.databases().finally(k)}v=setInterval(w,100),w()}).finally(function(){return clearInterval(v)}):Promise.resolve()).then(d)]).then(function(){return c(),t.onReadyBeingFired=[],z.resolve(on(function(){return e.on.ready.fire(e.vip)})).then(function k(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(ta,Se),t.onReadyBeingFired=[],z.resolve(on(function(){return w(e.vip)})).then(k)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(k){t.dbOpenError=k;try{y&&y.abort()}catch{}return s===t.openCanceller&&e._close(),He(k)}).finally(function(){t.openComplete=!0,E()}).then(function(){var k;return g&&(k={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(C){C.name&&(k["idb://".concat(e.name,"/").concat(w.name,"/").concat(C.name)]=new Ae(-1/0,[[[]]]))}),k["idb://".concat(e.name,"/").concat(w.name,"/")]=k["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new Ae(-1/0,[[[]]])}),oe(xe).fire(k),$t(k,!0)),e})}function T(e){function t(l){return e.next(l)}var n=r(t),s=r(function(l){return e.throw(l)});function r(l){return function(d){var d=l(d),v=d.value;return d.done?v:v&&typeof v.then=="function"?v.then(n,s):ie(v)?Promise.all(v).then(n,s):n(v)}}return r(t)()}function N(e,t,n){for(var s=ie(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var Mt={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return Q(Q({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},l=[];function c(k,w,C){var S=mt(k),x=r[S]=r[S]||[],M=k==null?0:typeof k=="string"?1:k.length,_=0<w,S=Q(Q({},C),{name:_?"".concat(S,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:_,keyTail:w,keyLength:M,extractKey:wt(k),unique:!_&&C.unique});return x.push(S),S.isPrimaryKey||l.push(S),1<M&&c(M===2?k[0]:k.slice(0,M-1),w+1,C),x.sort(function(I,F){return I.keyTail-F.keyTail}),S}var d=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[d];for(var v=0,E=s.indexes;v<E.length;v++){var y=E[v];c(y.keyPath,0,y)}function g(k){var w,C=k.query.index;return C.isVirtual?Q(Q({},k),{query:{index:C.lowLevelIndex,range:(w=k.query.range,C=C.keyTail,{type:w.type===1?2:w.type,lower:N(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,C),lowerOpen:!0,upper:N(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,C),upperOpen:!0})}}):k}return Q(Q({},n),{schema:Q(Q({},s),{primaryKey:d,indexes:l,getIndexByKeyPath:function(k){return(k=r[mt(k)])&&k[0]}}),count:function(k){return n.count(g(k))},query:function(k){return n.query(g(k))},openCursor:function(k){var w=k.query.index,C=w.keyTail,x=w.keyLength;return w.isVirtual?n.openCursor(g(k)).then(function(_){return _&&M(_)}):n.openCursor(k);function M(_){return Object.create(_,{continue:{value:function(S){S!=null?_.continue(N(S,k.reverse?e.MAX_KEY:e.MIN_KEY,C)):k.unique?_.continue(_.key.slice(0,x).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,C)):_.continue()}},continuePrimaryKey:{value:function(S,I){_.continuePrimaryKey(N(S,e.MAX_KEY,C),I)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var S=_.key;return x===1?S[0]:S.slice(0,x)}},value:{get:function(){return _.value}}})}}})}})}};function ha(e,t,n,s){return n=n||{},s=s||"",ye(e).forEach(function(r){var l,c,d;ce(t,r)?(l=e[r],c=t[r],typeof l=="object"&&typeof c=="object"&&l&&c?(d=Ka(l))!==Ka(c)?n[s+r]=t[r]:d==="Object"?ha(l,c,n,s+r+"."):l!==c&&(n[s+r]=t[r]):l!==c&&(n[s+r]=t[r])):n[s+r]=void 0}),ye(t).forEach(function(r){ce(e,r)||(n[s+r]=t[r])}),n}function _a(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var gs={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return Q(Q({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return Q(Q({},n),{mutate:function(r){var l=H.trans,c=l.table(t).hook,d=c.deleting,v=c.creating,E=c.updating;switch(r.type){case"add":if(v.fire===Se)break;return l._promise("readwrite",function(){return y(r)},!0);case"put":if(v.fire===Se&&E.fire===Se)break;return l._promise("readwrite",function(){return y(r)},!0);case"delete":if(d.fire===Se)break;return l._promise("readwrite",function(){return y(r)},!0);case"deleteRange":if(d.fire===Se)break;return l._promise("readwrite",function(){return(function g(k,w,C){return n.query({trans:k,values:!1,query:{index:s,range:w},limit:C}).then(function(x){var M=x.result;return y({type:"delete",keys:M,trans:k}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):M.length<C?{failures:[],numFailures:0,lastResult:void 0}:g(k,Q(Q({},w),{lower:M[M.length-1],lowerOpen:!0}),C)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function y(g){var k,w,C,x=H.trans,M=g.keys||_a(s,g);if(M)return(g=g.type==="add"||g.type==="put"?Q(Q({},g),{keys:M}):Q({},g)).type!=="delete"&&(g.values=pe([],g.values)),g.keys&&(g.keys=pe([],g.keys)),k=n,C=M,((w=g).type==="add"?Promise.resolve([]):k.getMany({trans:w.trans,keys:C,cache:"immutable"})).then(function(_){var S=M.map(function(I,F){var j,L,D,J=_[F],G={onerror:null,onsuccess:null};return g.type==="delete"?d.fire.call(G,I,J,x):g.type==="add"||J===void 0?(j=v.fire.call(G,I,g.values[F],x),I==null&&j!=null&&(g.keys[F]=I=j,s.outbound||ht(g.values[F],s.keyPath,I))):(j=ha(J,g.values[F]),(L=E.fire.call(G,j,I,J,x))&&(D=g.values[F],Object.keys(L).forEach(function(q){ce(D,q)?D[q]=L[q]:ht(D,q,L[q])}))),G});return n.mutate(g).then(function(I){for(var F=I.failures,j=I.results,L=I.numFailures,I=I.lastResult,D=0;D<M.length;++D){var J=(j||M)[D],G=S[D];J==null?G.onerror&&G.onerror(F[D]):G.onsuccess&&G.onsuccess(g.type==="put"&&_[D]?g.values[D]:J)}return{failures:F,results:j,numFailures:L,lastResult:I}}).catch(function(I){return S.forEach(function(F){return F.onerror&&F.onerror(I)}),Promise.reject(I)})});throw new Error("Keys missing")}}})}})}};function bs(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,l=0;r<t.keys.length&&l<e.length;++r)ve(t.keys[r],e[l])===0&&(s.push(n?kt(t.values[r]):t.values[r]),++l);return s.length===e.length?s:null}catch{return null}}var Ha={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return Q(Q({},n),{getMany:function(s){var r;return s.cache?(r=bs(s.keys,s.trans._cache,s.cache==="clone"))?z.resolve(r):n.getMany(s).then(function(l){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?kt(l):l},l}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function Ta(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Ja(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ys={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Ae(e.MIN_KEY,e.MAX_KEY);return Q(Q({},e),{transaction:function(s,r,l){if(H.subscr&&r!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(s,r,l)},table:function(s){function r(M){var x,M=M.query;return[x=M.index,new Ae((x=(M=M.range).lower)!=null?x:e.MIN_KEY,(x=M.upper)!=null?x:e.MAX_KEY)]}var l=e.table(s),c=l.schema,d=c.primaryKey,v=c.indexes,E=d.extractKey,y=d.outbound,g=d.autoIncrement&&v.filter(function(C){return C.compound&&C.keyPath.includes(d.keyPath)}),k=Q(Q({},l),{mutate:function(C){function x(X){return X="idb://".concat(t,"/").concat(s,"/").concat(X),F[X]||(F[X]=new Ae)}var M,_,S,I=C.trans,F=C.mutatedParts||(C.mutatedParts={}),j=x(""),L=x(":dels"),D=C.type,G=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[_a(d,C).filter(function(X){return X}),C.values]:[],J=G[0],G=G[1],q=C.trans._cache;return ie(J)?(j.addKeys(J),(D=D==="delete"||J.length===G.length?bs(J,q):null)||L.addKeys(J),(D||G)&&(M=x,_=D,S=G,c.indexes.forEach(function(X){var le=M(X.name||"");function he(de){return de!=null?X.extractKey(de):null}function ae(de){X.multiEntry&&ie(de)?de.forEach(function(Ve){return le.addKey(Ve)}):le.addKey(de)}(_||S).forEach(function(de,Ke){var ut=_&&he(_[Ke]),Ke=S&&he(S[Ke]);ve(ut,Ke)!==0&&(ut!=null&&ae(ut),Ke!=null)&&ae(Ke)})}))):J?(G={from:(q=J.lower)!=null?q:e.MIN_KEY,to:(D=J.upper)!=null?D:e.MAX_KEY},L.add(G),j.add(G)):(j.add(n),L.add(n),c.indexes.forEach(function(X){return x(X.name).add(n)})),l.mutate(C).then(function(X){return!J||C.type!=="add"&&C.type!=="put"||(j.addKeys(X.results),g&&g.forEach(function(le){for(var he=C.values.map(function(ut){return le.extractKey(ut)}),ae=le.keyPath.findIndex(function(ut){return ut===d.keyPath}),de=0,Ve=X.results.length;de<Ve;++de)he[de][ae]=X.results[de];x(le.name).addKeys(he)})),I.mutatedParts=Kt(I.mutatedParts||{},F),X})}}),w={get:function(C){return[d,new Ae(C.key)]},getMany:function(C){return[d,new Ae().addKeys(C.keys)]},count:r,query:r,openCursor:r};return ye(w).forEach(function(C){k[C]=function(x){var M=H.subscr,_=!!M,S=Ta(H,l)&&Ja(C,x)?x.obsSet={}:M;if(_){var I,M=function(G){return G="idb://".concat(t,"/").concat(s,"/").concat(G),S[G]||(S[G]=new Ae)},F=M(""),j=M(":dels"),_=w[C](x),L=_[0],_=_[1];if((C==="query"&&L.isPrimaryKey&&!x.values?j:M(L.name||"")).add(_),!L.isPrimaryKey){if(C!=="count")return I=C==="query"&&y&&x.values&&l.query(Q(Q({},x),{values:!1})),l[C].apply(this,arguments).then(function(G){if(C==="query"){if(y&&x.values)return I.then(function(he){return he=he.result,F.addKeys(he),G});var q=x.values?G.result.map(E):G.result;(x.values?F:j).addKeys(q)}else{var X,le;if(C==="openCursor")return le=x.values,(X=G)&&Object.create(X,{key:{get:function(){return j.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var he=X.primaryKey;return j.addKey(he),he}},value:{get:function(){return le&&F.addKey(X.primaryKey),X.value}}})}return G});j.add(n)}}return l[C].apply(this,arguments)}}),k}})}};function Yt(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=Q({},t),ie(s.keys)&&(s.keys=s.keys.filter(function(r,l){return!(l in n.failures)})),"values"in s&&ie(s.values)&&(s.values=s.values.filter(function(r,l){return!(l in n.failures)})),s)}function Xa(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<ve(n,s.lower):0<=ve(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?ve(n,s.upper)<0:ve(n,s.upper)<=0));var n,s}function Ht(e,t,n,s,r,l){var c,d,v,E,y,g;return!n||n.length===0||(c=t.query.index,d=c.multiEntry,v=t.query.range,E=s.schema.primaryKey.extractKey,y=c.extractKey,g=(c.lowLevelIndex||c).extractKey,(s=n.reduce(function(k,w){var C=k,x=[];if(w.type==="add"||w.type==="put")for(var M=new Ae,_=w.values.length-1;0<=_;--_){var S,I=w.values[_],F=E(I);!M.hasKey(F)&&(S=y(I),d&&ie(S)?S.some(function(G){return Xa(G,v)}):Xa(S,v))&&(M.addKey(F),x.push(I))}switch(w.type){case"add":var j=new Ae().addKeys(t.values?k.map(function(q){return E(q)}):k),C=k.concat(t.values?x.filter(function(q){return q=E(q),!j.hasKey(q)&&(j.addKey(q),!0)}):x.map(function(q){return E(q)}).filter(function(q){return!j.hasKey(q)&&(j.addKey(q),!0)}));break;case"put":var L=new Ae().addKeys(w.values.map(function(q){return E(q)}));C=k.filter(function(q){return!L.hasKey(t.values?E(q):q)}).concat(t.values?x:x.map(function(q){return E(q)}));break;case"delete":var D=new Ae().addKeys(w.keys);C=k.filter(function(q){return!D.hasKey(t.values?E(q):q)});break;case"deleteRange":var J=w.range;C=k.filter(function(q){return!Xa(E(q),J)})}return C},e))===e)?e:(s.sort(function(k,w){return ve(g(k),g(w))||ve(E(k),E(w))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),l?Object.freeze(s):s)}function Cs(e,t){return ve(e.lower,t.lower)===0&&ve(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Ls(e,t){return((n,s,r,l)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=ve(n,s))===0){if(r&&l)return 0;if(r)return 1;if(l)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,l)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=ve(n,s))===0){if(r&&l)return 0;if(r)return-1;if(l)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function xs(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,l;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,l=t,setTimeout(function(){r.subscribers.size===0&&un(l,r)},3e3))})}var ks={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return Q(Q({},e),{transaction:function(n,s,r){var l,c,d=e.transaction(n,s,r);return s==="readwrite"&&(r=(l=new AbortController).signal,d.addEventListener("abort",(c=function(v){return function(){if(l.abort(),s==="readwrite"){for(var E=new Set,y=0,g=n;y<g.length;y++){var k=g[y],w=Ut["idb://".concat(t,"/").concat(k)];if(w){var C=e.table(k),x=w.optimisticOps.filter(function(X){return X.trans===d});if(d._explicit&&v&&d.mutatedParts)for(var M=0,_=Object.values(w.queries.query);M<_.length;M++)for(var S=0,I=(L=_[M]).slice();S<I.length;S++)ln((D=I[S]).obsSet,d.mutatedParts)&&(un(L,D),D.subscribers.forEach(function(X){return E.add(X)}));else if(0<x.length){w.optimisticOps=w.optimisticOps.filter(function(X){return X.trans!==d});for(var F=0,j=Object.values(w.queries.query);F<j.length;F++)for(var L,D,J,G=0,q=(L=j[F]).slice();G<q.length;G++)(D=q[G]).res!=null&&d.mutatedParts&&(v&&!D.dirty?(J=Object.isFrozen(D.res),J=Ht(D.res,D.req,x,C,D,J),D.dirty?(un(L,D),D.subscribers.forEach(function(X){return E.add(X)})):J!==D.res&&(D.res=J,D.promise=z.resolve({result:J}))):(D.dirty&&un(L,D),D.subscribers.forEach(function(X){return E.add(X)})))}}}E.forEach(function(X){return X()})}}})(!1),{signal:r}),d.addEventListener("error",c(!1),{signal:r}),d.addEventListener("complete",c(!0),{signal:r})),d},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return Q(Q({},s),{mutate:function(l){var c,d=H.trans;return!r.outbound&&d.db._options.cache!=="disabled"&&!d.explicit&&d.idbtrans.mode==="readwrite"&&(c=Ut["idb://".concat(t,"/").concat(n)])?(d=s.mutate(l),l.type!=="add"&&l.type!=="put"||!(50<=l.values.length||_a(r,l).some(function(v){return v==null}))?(c.optimisticOps.push(l),l.mutatedParts&&nt(l.mutatedParts),d.then(function(v){0<v.numFailures&&(un(c.optimisticOps,l),(v=Yt(0,l,v))&&c.optimisticOps.push(v),l.mutatedParts)&&nt(l.mutatedParts)}),d.catch(function(){un(c.optimisticOps,l),l.mutatedParts&&nt(l.mutatedParts)})):d.then(function(v){var E=Yt(0,Q(Q({},l),{values:l.values.map(function(y,g){var k;return v.failures[g]?y:(ht(k=(k=r.keyPath)!=null&&k.includes(".")?kt(y):Q({},y),r.keyPath,v.results[g]),k)})}),v);c.optimisticOps.push(E),queueMicrotask(function(){return l.mutatedParts&&nt(l.mutatedParts)})}),d):s.mutate(l)},query:function(l){var c,d,v,E,y,g,k;return Ta(H,s)&&Ja("query",l)?(c=((v=H.trans)==null?void 0:v.db._options.cache)==="immutable",d=(v=H).requery,v=v.signal,g=((w,C,x,M)=>{var _=Ut["idb://".concat(w,"/").concat(C)];if(!_)return[];if(!(w=_.queries[x]))return[null,!1,_,null];var S=w[(M.query?M.query.index.name:null)||""];if(!S)return[null,!1,_,null];switch(x){case"query":var I=S.find(function(F){return F.req.limit===M.limit&&F.req.values===M.values&&Cs(F.req.query.range,M.query.range)});return I?[I,!0,_,S]:[S.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=M.limit&&(!M.values||F.req.values)&&Ls(F.req.query.range,M.query.range)}),!1,_,S];case"count":return I=S.find(function(F){return Cs(F.req.query.range,M.query.range)}),[I,!!I,_,S]}})(t,n,"query",l),k=g[0],E=g[2],y=g[3],k&&g[1]?k.obsSet=l.obsSet:(g=s.query(l).then(function(w){var C=w.result;if(k&&(k.res=C),c){for(var x=0,M=C.length;x<M;++x)Object.freeze(C[x]);Object.freeze(C)}else w.result=kt(C);return w}).catch(function(w){return y&&k&&un(y,k),Promise.reject(w)}),k={obsSet:l.obsSet,promise:g,subscribers:new Set,type:"query",req:l,dirty:!1},y?y.push(k):(y=[k],(E=E||(Ut["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[l.query.index.name||""]=y)),xs(k,y,d,v),k.promise.then(function(w){return{result:Ht(w.result,l,E?.optimisticOps,s,k,c)}})):s.query(l)}})}})}};function pa(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}Ue.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(et),n.stores({}),this._state.autoSchema=!1),n},Ue.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new z(function(n,s){if(t._state.openComplete)return s(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ee.DatabaseClosed);t.open().catch(Se)}t._state.dbReadyPromise.then(n,s)}).then(e)},Ue.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,l=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return l.push({stack:t,create:n,level:s??10,name:r}),l.sort(function(c,d){return c.level-d.level}),this},Ue.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},Ue.prototype.open=function(){var e=this;return Tn(hn,function(){return Ua(e)})},Ue.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Gn.indexOf(this);if(0<=t&&Gn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(n){e.dbReadyResolve=n}),e.openCanceller=new z(function(n,s){e.cancelOpen=s}))},Ue.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ue.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new z(function(r,l){function c(){t.close(e);var d=t._deps.indexedDB.deleteDatabase(t.name);d.onsuccess=be(function(){var v,E,y;v=t._deps,E=t.name,rn(y=v.indexedDB)||E===Sa||Re(y,v.IDBKeyRange).delete(E).catch(Se),r()}),d.onerror=U(l),d.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},Ue.prototype.backendDB=function(){return this.idbdb},Ue.prototype.isOpen=function(){return this.idbdb!==null},Ue.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ue.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ue.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ue.prototype,"tables",{get:function(){var e=this;return ye(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ue.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new ee.InvalidArgument("Too few arguments");for(var l=new Array(r-1);--r;)l[r-1]=arguments[r];return s=l.pop(),[t,Na(l),s]}).apply(this,arguments);return this._transaction.apply(this,e)},Ue.prototype._transaction=function(e,t,n){var s,r,l=this,c=H.trans,d=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(E){if(E=E instanceof l.Table?E.name:E,typeof E!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return E}),e=="r"||e===Ya)s=Ya;else{if(e!="rw"&&e!=An)throw new ee.InvalidArgument("Invalid transaction mode: "+e);s=An}if(c){if(c.mode===Ya&&s===An){if(!d)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function(E){if(c&&c.storeNames.indexOf(E)===-1){if(!d)throw new ee.SubTransaction("Table "+E+" not included in parent transaction.");c=null}}),d&&c&&!c.active&&(c=null)}}catch(E){return c?c._promise(null,function(y,g){g(E)}):He(E)}var v=(function E(y,g,k,w,C){return z.resolve().then(function(){var S=H.transless||H,x=y._createTransaction(g,k,y._dbSchema,w),S=(x.explicit=!0,{trans:x,transless:S});if(w)x.idbtrans=w.idbtrans;else try{x.create(),x.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(I){return I.name===Ca.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return E(y,g,k,null,C)})):He(I)}var M,_=tn(C),S=(_&&Wn(),z.follow(function(){var I;(M=C.call(x,x))&&(_?(I=gn.bind(null,null),M.then(I,I)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=T(M)))},S));return(M&&typeof M.then=="function"?z.resolve(M).then(function(I){return x.active?I:He(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return M})).then(function(I){return w&&x._resolve(),x._completion.then(function(){return I})}).catch(function(I){return x._reject(I),He(I)})})}).bind(null,this,s,r,c,n);return c?c._promise(s,v,"lock"):H.trans?Tn(H.transless,function(){return l._whenReady(v)}):this._whenReady(v)},Ue.prototype.table=function(e){if(ce(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var Jt=Ue;function Ue(e,t){var n,s,r,l,c,d=this,v=(this._middlewares={},this.verno=0,Ue.dependencies),v=(this._options=t=Q({addons:Ue.addons,autoOpen:!0,indexedDB:v.indexedDB,IDBKeyRange:v.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),E=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Se,dbReadyPromise:null,cancelOpen:Se,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=(E.dbReadyPromise=new z(function(g){E.dbReadyResolve=g}),E.openCanceller=new z(function(g,k){E.cancelOpen=k}),this._state=E,this.name=e,this.on=ca(this,"populate","blocked","versionchange","close",{ready:[ta,Se]}),this.once=function(g,k){var w=function(){for(var C=[],x=0;x<arguments.length;x++)C[x]=arguments[x];d.on(g).unsubscribe(w),k.apply(d,C)};return d.on(g,w)},this.on.ready.subscribe=Ct(this.on.ready.subscribe,function(g){return function(k,w){Ue.vip(function(){var C,x=d._state;x.openComplete?(x.dbOpenError||z.resolve().then(k),w&&g(k)):x.onReadyBeingFired?(x.onReadyBeingFired.push(k),w&&g(k)):(g(k),C=d,w||g(function M(){C.on.ready.unsubscribe(k),C.on.ready.unsubscribe(M)}))})}}),this.Collection=(n=this,ua(o.prototype,function(M,x){this.db=n;var w=za,C=null;if(x)try{w=x()}catch(S){C=S}var x=M._ctx,M=x.table,_=M.hook.reading.fire;this._ctx={table:M,index:x.index,isPrimKey:!x.index||M.schema.primKey.keyPath&&x.index===M.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:C,or:x.or,valueMapper:_!==ea?_:null}})),this.Table=(s=this,ua(fs.prototype,function(g,k,w){this.db=s,this._tx=w,this.name=g,this.schema=k,this.hook=s._allTables[g]?s._allTables[g].hook:ca(null,{creating:[rs,Se],reading:[Ps,ea],updating:[is,Se],deleting:[As,Se]})})),this.Transaction=(r=this,ua(Ge.prototype,function(g,k,w,C,x){var M=this;g!=="readonly"&&k.forEach(function(_){_=(_=w[_])==null?void 0:_.yProps,_&&(k=k.concat(_.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=g,this.storeNames=k,this.schema=w,this.chromeTransactionDurability=C,this.idbtrans=null,this.on=ca(this,"complete","error","abort"),this.parent=x||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(_,S){M._resolve=_,M._reject=S}),this._completion.then(function(){M.active=!1,M.on.complete.fire()},function(_){var S=M.active;return M.active=!1,M.on.error.fire(_),M.parent?M.parent._reject(_):S&&M.idbtrans&&M.idbtrans.abort(),He(_)})})),this.Version=(l=this,ua(We.prototype,function(g){this.db=l,this._cfg={version:g,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,ua(V.prototype,function(g,k,w){if(this.db=c,this._ctx={table:g,index:k===":id"?null:k,or:w},this._cmp=this._ascending=ve,this._descending=function(C,x){return ve(x,C)},this._max=function(C,x){return 0<ve(C,x)?C:x},this._min=function(C,x){return ve(C,x)<0?C:x},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(g){0<g.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(g){!g.newVersion||g.newVersion<g.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(g.oldVersion/10))}),this._maxKey=K(t.IDBKeyRange),this._createTransaction=function(g,k,w,C){return new d.Transaction(g,k,w,d._options.chromeTransactionDurability,C)},this._fireOnBlocked=function(g){d.on("blocked").fire(g),Gn.filter(function(k){return k.name===d.name&&k!==d&&!k._state.vcFired}).map(function(k){return k.on("versionchange").fire(g)})},this.use(Ha),this.use(ks),this.use(ys),this.use(Mt),this.use(gs),new Proxy(this,{get:function(g,k,w){var C;return k==="_vip"||(k==="table"?function(x){return pa(d.table(x),y)}:(C=Reflect.get(g,k,w))instanceof fs?pa(C,y):k==="tables"?C.map(function(x){return pa(x,y)}):k==="_createTransaction"?function(){return pa(C.apply(this,arguments),y)}:C)}}));this.vip=y,v.forEach(function(g){return g(d)})}var fa,Hn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ns=(Pa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Pa.prototype[Hn]=function(){return this},Pa);function Pa(e){this._subscribe=e}try{fa={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{fa={indexedDB:null,IDBKeyRange:null}}function Qa(e){var t,n=!1,s=new Ns(function(r){var l=tn(e),c,d=!1,v={},E={},y={get closed(){return d},unsubscribe:function(){d||(d=!0,c&&c.abort(),g&&oe.storagemutated.unsubscribe(w))}},g=(r.start&&r.start(y),!1),k=function(){return ja(C)},w=function(x){Kt(v,x),ln(E,v)&&k()},C=function(){var x,M,_;!d&&fa.indexedDB&&(v={},x={},c&&c.abort(),c=new AbortController,_=(S=>{var I=vn();try{l&&Wn();var F=mn(e,S);return F=l?F.finally(gn):F}finally{I&&_n()}})(M={subscr:x,signal:c.signal,requery:k,querier:e,trans:null}),Promise.resolve(_).then(function(S){n=!0,t=S,d||M.signal.aborted||(v={},(I=>{for(var F in I)if(ce(I,F))return;return 1})(E=x)||g||(oe(xe,w),g=!0),ja(function(){return!d&&r.next&&r.next(S)}))},function(S){n=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||d||ja(function(){d||r.error&&r.error(S)})}))};return setTimeout(k,0),y});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var qt=Jt;function Za(e){var t=$n;try{$n=!0,oe.storagemutated.fire(e),$t(e,!0)}finally{$n=t}}lt(qt,Q(Q({},Pt),{delete:function(e){return new qt(e,{addons:[]}).delete()},exists:function(e){return new qt(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=qt.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(rn(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==Sa})}):Re(n,t).toCollection().primaryKeys()).then(e)}catch{return He(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){fe(this,e)}},ignoreTransaction:function(e){return H.trans?Tn(H.transless,e):e()},vip:on,async:function(e){return function(){try{var t=T(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(n){return He(n)}}},spawn:function(e,t,n){try{var s=T(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:z.resolve(s)}catch(r){return He(r)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?qt.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:z,debug:{get:function(){return At},set:function(e){qn(e)}},derive:yt,extend:fe,props:lt,override:Ct,Events:ca,on:oe,liveQuery:Qa,extendObservabilitySet:Kt,getByKeyPath:Wt,setByKeyPath:ht,delByKeyPath:function(e,t){typeof t=="string"?ht(e,t,void 0):"length"in t&&[].map.call(t,function(n){ht(e,n,void 0)})},shallowClone:pt,deepClone:kt,getObjectDiff:ha,cmp:ve,asap:xt,minKey:-1/0,addons:[],connections:Gn,errnames:Ca,dependencies:fa,cache:Ut,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),qt.maxKey=K(qt.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(oe(xe,function(e){$n||(e=new CustomEvent(Je,{detail:e}),$n=!0,dispatchEvent(e),$n=!1)}),addEventListener(Je,function(e){e=e.detail,$n||Za(e)}));var Jn,$n=!1,ws=function(){};return typeof BroadcastChannel<"u"&&((ws=function(){(Jn=new BroadcastChannel(Je)).onmessage=function(e){return e.data&&Za(e.data)}})(),typeof Jn.unref=="function"&&Jn.unref(),oe(xe,function(e){$n||Jn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Jt.disableBfCache&&e.persisted){At&&console.debug("Dexie: handling persisted pagehide"),Jn?.close();for(var t=0,n=Gn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Jt.disableBfCache&&e.persisted&&(At&&console.debug("Dexie: handling persisted pageshow"),ws(),Za({all:new Ae(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof Bn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!ss[e.name]?e:(t=new ss[e.name](t||e.message,e),"stack"in e&&De(t,"stack",{get:function(){return this.inner.stack}}),t)},qn(At),Q(Jt,Object.freeze({__proto__:null,Dexie:Jt,Entity:us,PropModification:la,RangeSet:Ae,add:function(e){return new la({add:e})},cmp:ve,default:Jt,liveQuery:Qa,mergeRanges:st,rangesOverlap:Nt,remove:function(e){return new la({remove:e})},replacePrefix:function(e,t){return new la({replacePrefix:[e,t]})}}),{default:Jt}),Jt})})(Ss)),Ss.exports}var bi=gi();const Ys=vi(bi),Pr=Symbol.for("Dexie"),Bs=globalThis[Pr]||(globalThis[Pr]=Ys);if(Ys.semVer!==Bs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ys.semVer} and ${Bs.semVer}`);const{liveQuery:Ii,mergeRanges:Oi,rangesOverlap:Fi,RangeSet:Di,cmp:Li,Entity:Ni,PropModification:Ki,replacePrefix:qi,add:Ri,remove:Vi,DexieYProvider:ji}=Bs,Fe=new Bs("haushaltsbuch-db");Fe.version(1).stores({years:"year",fixedTemplateState:"id"});Fe.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Fe.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});Fe.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Ln="singleton";function La(){return new Date().toISOString()}async function ya(){return Fe.years.orderBy("year").toArray()}async function yi(B){return Fe.years.get(B)}async function ba(B){await Fe.years.put(B)}async function zs(){const B=await Fe.fixedTemplateState.get(Ln);if(!B){const h={id:Ln,templates:[],version:La(),updatedAt:new Date().toISOString()};return await Fe.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Ws(B){const h=La();return await Fe.fixedTemplateState.put({id:Ln,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function Gs(){const B=await Fe.annualVariableFixedTemplateState.get(Ln);if(!B){const h={id:Ln,templates:[],version:La(),updatedAt:new Date().toISOString()};return await Fe.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:B.templates,version:B.version}}async function Us(B){const h=La();return await Fe.annualVariableFixedTemplateState.put({id:Ln,templates:B,version:h,updatedAt:new Date().toISOString()}),h}async function Ci(B){await Fe.auditLog.put(B)}async function Hs(){const B=await Fe.searchEvaluationState.get(Ln);if(!B){const h={id:Ln,results:[],version:La(),updatedAt:new Date().toISOString()};return await Fe.searchEvaluationState.put(h),{results:[],version:h.version}}return{results:B.results,version:B.version}}async function Es(B){const h=La();return await Fe.searchEvaluationState.put({id:Ln,results:B,version:h,updatedAt:new Date().toISOString()}),h}async function Js(){return Fe.auditLog.orderBy("timestampIso").toArray()}async function xi(B){await Fe.auditLog.clear(),B.length!==0&&await Fe.auditLog.bulkPut(B)}async function ki(){const B=await ya(),[h,$e,Q,pe]=await Promise.all([zs(),Gs(),Js(),Hs()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:h.templates,annualVariableFixedTemplates:$e.templates,auditLogEntries:Q,savedSearchEvaluations:pe.results}}async function wi(B){await Fe.transaction("rw",[Fe.years,Fe.fixedTemplateState,Fe.annualVariableFixedTemplateState,Fe.auditLog,Fe.searchEvaluationState],async()=>{await Fe.years.clear(),await Fe.years.bulkPut(B.years),await Ws(B.fixedTemplates),await Us(B.annualVariableFixedTemplates??[]),await xi(B.auditLogEntries??[]),await Es(B.savedSearchEvaluations??[])})}function Oe(B){const h=B.replace(",",".").trim();if(!h)return 0;const $e=Number.parseFloat(h);return Number.isNaN($e)?0:Math.round($e*100)}const $i=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return $i.format(B/100)}function St(B){return(B/100).toFixed(2)}function Ie(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const Fr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Ar(B){return Fr.includes(B)}function Si(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Ir=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Ei(B){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},$e="habu-theme",Q="habu-backup-dirty",pe="habu-unexported-change-log",se="habu-last-backup-filename",ye="habu-recurring-budget-defaults";let ie=null,fe=null,Ze=null,je=null,ce=!1,lt=!1;const rt=new WeakMap;function De(){const o=B.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const i=getComputedStyle(document.documentElement),p=i.getPropertyValue("--text-main").trim(),u=i.getPropertyValue("--text-muted").trim(),m=i.getPropertyValue("--table-stripe").trim(),$=i.getPropertyValue("--table-border").trim(),P=i.getPropertyValue("--budget-under").trim(),O=i.getPropertyValue("--danger-2").trim(),A=96,W=250,V=Y=>1-Math.pow(1-Math.max(0,Math.min(1,Y)),3);o.forEach(Y=>{Y.dataset.hoverBound!=="1"&&(Y.dataset.hoverBound="1",Y.addEventListener("mouseenter",()=>{Y.dataset.hovering="1",De()}),Y.addEventListener("mouseleave",()=>{delete Y.dataset.hovering,delete Y.dataset.hoverX,De()}),Y.addEventListener("mousemove",ke=>{const Pe=Y.getBoundingClientRect(),We=Math.round(ke.clientX-Pe.left);Y.dataset.hoverX=String(We),De()}));const U=Number.parseInt(Y.dataset.budgetCents??"0",10),re=Number.parseInt(Y.dataset.actualCents??"0",10),xe=Y.dataset.label??"Kategorie",Je=Y.dataset.hovering==="1",oe=`${xe}|${U}|${re}`,Ge=Y.dataset.lastRenderSignature!==oe;Y.dataset.lastRenderSignature=oe;const qe=Math.max(120,Math.floor(Y.clientWidth||120)),Te=window.devicePixelRatio||1,at=Math.floor(qe*Te),Ot=Math.floor(A*Te);(Y.width!==at||Y.height!==Ot)&&(Y.width=at,Y.height=Ot);const K=Y.getContext("2d");if(!K)return;const wt=Math.max(1,U,re),vt=Math.min(1,Math.max(0,U/wt)),sn=Math.min(1,Math.max(0,re/wt)),mt=U-re,Ce=U>0?re/U*100:re>0?100:0,jt=8,Le=jt,ze=34,Xe=qe-jt*2,et=22,tt=Number.parseInt(Y.dataset.hoverX??"-1",10),Gt=(ke,Pe,We,Ne,Re)=>{K.beginPath(),K.moveTo(ke+Re,Pe),K.lineTo(ke+We-Re,Pe),K.quadraticCurveTo(ke+We,Pe,ke+We,Pe+Re),K.lineTo(ke+We,Pe+Ne-Re),K.quadraticCurveTo(ke+We,Pe+Ne,ke+We-Re,Pe+Ne),K.lineTo(ke+Re,Pe+Ne),K.quadraticCurveTo(ke,Pe+Ne,ke,Pe+Ne-Re),K.lineTo(ke,Pe+Re),K.quadraticCurveTo(ke,Pe,ke+Re,Pe),K.closePath()},Ft=ke=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,Y.width,Y.height),K.scale(Te,Te),Gt(Le,ze,Xe,et,8),K.fillStyle=m,K.fill(),K.strokeStyle=$,K.lineWidth=1,K.stroke();const Pe=[.6,.25,.15],We=[.1,.16,.24];let Ne=0;Pe.forEach((Ae,me)=>{const st=Xe*Ae;K.save(),K.globalAlpha=We[me]??.1,K.fillStyle=u,K.fillRect(Le+Ne,ze,st,et),K.restore(),Ne+=st});const Re=U>0&&re>U?O:P,rn=Xe*sn*ke;Gt(Le,ze+3,rn,et-6,6),K.fillStyle=Re,K.fill(),Je&&(K.save(),K.strokeStyle=Re,K.lineWidth=1.5,K.globalAlpha=.8,Gt(Le-1,ze+2,Math.max(2,rn+2),et-4,7),K.stroke(),K.restore());const on=Le+Xe*vt;K.strokeStyle=p,K.lineWidth=Je?3:2,K.beginPath(),K.moveTo(on,ze-3),K.lineTo(on,ze+et+3),K.stroke(),Je&&tt>=Le&&tt<=Le+Xe&&(K.save(),K.strokeStyle=p,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(tt,ze-8),K.lineTo(tt,ze+et+8),K.stroke(),K.restore()),K.fillStyle=p,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(xe,Le,10);const xn=Ce*ke;if(K.fillStyle=Ce>100?O:Ce<100?P:u,K.textAlign="right",K.fillText(`${xn.toFixed(0)}%`,Le+Xe,10),K.fillStyle=u,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${f(re)} · Ziel ${f(U)} · Δ ${mt>=0?"+":""}${f(mt)}`,Le,64),Je){const Ae=`Nutzung ${Ce.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const me=8,st=5,Nt=22,ue=K.measureText(Ae).width+me*2,kn=Number.isFinite(tt)?tt-ue/2:Le+Xe-ue,Kt=Math.min(Le+Xe-ue,Math.max(Le,kn)),ln=ze-Nt-8;K.save(),K.fillStyle=p,K.globalAlpha=.92,Gt(Kt,ln,ue,Nt,6),K.fill(),K.restore(),K.fillStyle=m,K.textAlign="left",K.textBaseline="top",K.fillText(Ae,Kt+me,ln+st)}},Dt=rt.get(Y);if(Dt&&window.cancelAnimationFrame(Dt),!Ge){Ft(1);return}const Lt=performance.now(),gt=ke=>{const Pe=ke-Lt,We=Math.min(1,Pe/W);if(Ft(V(We)),We<1){const Ne=window.requestAnimationFrame(gt);rt.set(Y,Ne);return}rt.delete(Y)},Cn=window.requestAnimationFrame(gt);rt.set(Y,Cn)})}function yt(){B.querySelectorAll("[data-year-trend-chart]").forEach(i=>{const p=Array.from(i.querySelectorAll("[data-year-trend-point]"));if(p.length===0)return;const u=i.querySelector("[data-year-trend-active-month]"),m=i.querySelector("[data-year-trend-active-net]"),$=i.querySelector("[data-year-trend-active-income]"),P=i.querySelector("[data-year-trend-active-expense]"),O=i.querySelector("[data-year-trend-active-delta]"),A=i.querySelector("[data-year-trend-live]");if(!u||!m||!$||!P||!O)return;const W=(U,re)=>{U.classList.remove("danger","budget-under");const xe=re<0?"danger":re>0?"budget-under":"";xe&&U.classList.add(xe)},V=U=>{const re=U.dataset.monthLabel??"-",xe=Number.parseInt(U.dataset.netCents??"0",10),Je=Number.parseInt(U.dataset.actualNetCents??"0",10),oe=Number.parseInt(U.dataset.incomeCents??"0",10),Ge=Number.parseInt(U.dataset.expenseCents??"0",10),qe=Number.parseInt(U.dataset.deltaCents??"0",10);u.textContent=re,m.textContent=f(xe),$.textContent=f(oe),P.textContent=f(Ge),O.textContent=`${qe>=0?"+":""}${f(qe)}`,W(m,xe),W(O,qe),p.forEach(Te=>{const at=Te===U;Te.classList.toggle("is-active",at),Te.setAttribute("aria-pressed",String(at))}),A&&(A.textContent=`${re}: Kalkulierter Saldo ${f(xe)}, Ist-Saldo ${f(Je)}, Einkommen ${f(oe)}, Ausgaben ${f(Ge)}`)};p.forEach(U=>{const re=()=>{V(U)};U.addEventListener("mouseenter",re),U.addEventListener("focus",re),U.addEventListener("click",re)});const Y=p.find(U=>U.dataset.pointDefault==="1")??p[p.length-1];Y&&V(Y)})}function Zt(o){if(o==="dashboard"){const i=h.years.slice().sort((u,m)=>m.year-u.year);i.some(u=>u.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??i[0]?.year??null)}h.topModal=o,te()}function Nn(){h.topModal&&(h.topModal=null,te())}function en(){h.showUnexportedChangeLogModal=!0,te()}function Ct(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,te())}function ct(){h.showPersistentAuditLogModal=!0,te()}function xt(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,te())}function Wt(){ce||(ce=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),Ct();return}if(h.showPersistentAuditLogModal){o.preventDefault(),xt();return}h.topModal&&(o.preventDefault(),Nn())}}))}function ht(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const i=o/6;return window.scrollY>i}function pt(){const o=B.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",ht())}function Ms(){if(lt)return;lt=!0;const o=()=>{pt(),De()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Na(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const i=document.createElement("div");return i.id="toast-root",i.className="toast-root",i.setAttribute("aria-live","polite"),i.setAttribute("aria-atomic","true"),document.body.appendChild(i),ie=i,i}function ts(){if(fe&&document.body.contains(fe))return fe;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return fe=o,o;const i=document.createElement("div");return i.id="amount-modal-root",document.body.appendChild(i),fe=i,i}function Qn(){if(je&&document.body.contains(je))return je;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return je=o,o;const i=document.createElement("div");return i.id="weekly-shopping-modal-root",document.body.appendChild(i),je=i,i}function kt(){if(!fe){Ze=null;return}fe.innerHTML="",Ze=null}function Zn(){je&&(je.innerHTML="")}function Ka(o,i,p){const u=new Date,m=u.getFullYear(),$=u.getMonth()+1,P=u.getDate(),O=new Date(o,i,0).getDate();if(o<m||o===m&&i<$)return{occurrences:0,remainingDays:0};const A=o===m&&i===$?Math.min(P,O):1,W=Math.max(0,O-A+1);let V=0;for(let Y=A;Y<=O;Y+=1)new Date(o,i-1,Y).getDay()===p&&(V+=1);return{occurrences:V,remainingDays:W}}async function qa(o,i){const p=Be();p&&(p.weeklyShoppingWeekday=o,p.weeklyShoppingEstimateCents=Math.max(0,i),await Ye(`Wocheneinkauf geplant: ${Ir.find(u=>u.value===o)?.label??"Wochentag"} mit ${f(p.weeklyShoppingEstimateCents)} €`),te())}function _s(){const o=Be(),i=Vn();if(!o||!i)return;const p=Qn();Zn();const u=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,m=o.weeklyShoppingEstimateCents??0,$=i.year,P=o.month,O=Et($,P),A=O?Vt(O):{foodCents:0},W=O?O.foodBudgetCents??0:0,V=A.foodCents,Y=W-V;p.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Ir.map(Ce=>`<option value="${Ce.value}" ${Ce.value===u?"selected":""}>${Ce.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${St(m)}" />
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
    `;const U=p.querySelector(".weekly-shopping-modal-backdrop"),re=p.querySelector("#weekly-shopping-weekday"),xe=p.querySelector("#weekly-shopping-estimate"),Je=p.querySelector("#weekly-shopping-occurrences"),oe=p.querySelector("#weekly-shopping-total"),Ge=p.querySelector("#weekly-shopping-rest-before"),qe=p.querySelector("#weekly-shopping-rest-after"),Te=p.querySelector("#weekly-shopping-days-left"),at=p.querySelector("#weekly-shopping-per-day"),Ot=p.querySelector("#weekly-shopping-cancel"),K=p.querySelector("#weekly-shopping-save");function wt(){const Ce=Number.parseInt(re?.value??"1",10);return Number.isInteger(Ce)&&Ce>=0&&Ce<=6?Ce:1}function vt(){return Math.max(0,Oe(xe?.value??"0"))}function sn(){const Ce=wt(),jt=vt(),{occurrences:Le,remainingDays:ze}=Ka($,P,Ce),Xe=Le*jt,et=Y-Xe,tt=ze>0?Math.trunc(et/ze):0;Je&&(Je.textContent=`${Le}`),oe&&(oe.textContent=`${f(Xe)} €`),Ge&&(Ge.textContent=`${f(Y)} €`),qe&&(qe.textContent=`${f(et)} €`,qe.className=et<0?"danger":et>0?"budget-under":""),Te&&(Te.textContent=`${ze}`),at&&(at.textContent=`${f(tt)} €`,at.className=tt<0?"danger":tt>0?"budget-under":"")}async function mt(){await qa(wt(),vt()),Zn()}Ot?.addEventListener("click",()=>{Zn()}),K?.addEventListener("click",async()=>{await mt()}),re?.addEventListener("change",()=>{sn()}),xe?.addEventListener("input",()=>{sn()}),xe?.addEventListener("keydown",async Ce=>{if(Ce.key==="Escape"){Ce.preventDefault(),Zn();return}Ce.key==="Enter"&&(Ce.preventDefault(),await mt())}),U?.addEventListener("click",Ce=>{Ce.target===U&&Zn()}),window.setTimeout(()=>{xe?.focus(),xe?.select(),sn()},0)}function un(o,i){let p=o;const u=i.min;if(u){const $=Number.parseFloat(u);if(!Number.isNaN($)){const P=Math.round($*100);p=Math.max(p,P)}}const m=i.max;if(m){const $=Number.parseFloat(m);if(!Number.isNaN($)){const P=Math.round($*100);p=Math.min(p,P)}}return p}function it(o){if(o.disabled)return;const i=ts();kt(),Ze=o;const p=Oe(o.value||"0"),u="Betrag anpassen";i.innerHTML=`
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
    `;const m=i.querySelector(".amount-modal-backdrop"),$=i.querySelector("#amount-modal-delta"),P=i.querySelector("#amount-modal-next-delta"),O=i.querySelector("#amount-modal-next-overwrite"),A=i.querySelector("#amount-modal-cancel"),W=i.querySelector("#amount-modal-overwrite"),V=i.querySelector("#amount-modal-apply");function Y(){const oe=Oe($?.value??"0");return un(p+oe,o)}function U(){const oe=Oe($?.value??"0");return un(oe,o)}function re(){P&&(P.textContent=`${f(Y())} €`),O&&(O.textContent=`${f(U())} €`)}function xe(){const oe=Ze;if(!oe){kt();return}const Ge=Y();kt(),oe.value=St(Ge),oe.dispatchEvent(new Event("change",{bubbles:!0}))}function Je(){const oe=Ze;if(!oe){kt();return}const Ge=U();kt(),oe.value=St(Ge),oe.dispatchEvent(new Event("change",{bubbles:!0}))}A?.addEventListener("click",()=>{kt()}),W?.addEventListener("click",()=>{Je()}),V?.addEventListener("click",()=>{xe()}),$?.addEventListener("input",()=>{re()}),$?.addEventListener("keydown",oe=>{if(oe.key==="Escape"){oe.preventDefault(),kt();return}oe.key==="Enter"&&(oe.preventDefault(),xe())}),m?.addEventListener("click",oe=>{oe.target===m&&kt()}),window.setTimeout(()=>{$?.focus(),$?.select(),re()},0)}function ne(o,i="success"){const p=Na(),u=document.createElement("div");u.className=`toast toast-${i}`,u.textContent=o,p.appendChild(u),requestAnimationFrame(()=>{u.classList.add("toast-visible")});const m=i==="error"?5e3:3e3;window.setTimeout(()=>{u.classList.remove("toast-visible"),window.setTimeout(()=>{u.remove()},220)},m)}function tn(){return new Date().getMonth()+1}function Pt(){return new Date().getFullYear()}function ns(o){const i=Pt(),p=o.find(u=>u.year===i);return p?p.year:o[0]?.year??null}function Bn(){return new Date().toISOString().slice(0,10)}function as(){const o=new Date,i=String(o.getHours()).padStart(2,"0"),p=String(o.getMinutes()).padStart(2,"0"),u=String(o.getSeconds()).padStart(2,"0");return`${i}${p}${u}`}function ft(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Kn(){const o=localStorage.getItem($e);return o&&Ar(o)?o:"light"}function Ca(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem($e,o)}function Ts(){return localStorage.getItem(Q)==="1"}function ee(o){localStorage.setItem(Q,o?"1":"0")}function ss(){const o=localStorage.getItem(pe);if(!o)return[];try{const i=JSON.parse(o);return Array.isArray(i)?i.filter(p=>{if(!p||typeof p!="object")return!1;const u=p;return typeof u.id=="string"&&typeof u.timestampIso=="string"&&typeof u.message=="string"}).slice(-200):[]}catch{return[]}}function Se(o){localStorage.setItem(pe,JSON.stringify(o.slice(-200)))}function ea(){const o=localStorage.getItem(se);if(!o)return null;const i=o.trim();return i||null}function Ps(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},i=localStorage.getItem(ye);if(!i)return o;try{const p=JSON.parse(i),u=m=>typeof m=="number"&&Number.isFinite(m)?m:null;return{foodBudgetCents:u(p.foodBudgetCents),goingOutBudgetCents:u(p.goingOutBudgetCents),fixedBudgetCents:u(p.fixedBudgetCents),variableBudgetCents:u(p.variableBudgetCents),miscBudgetCents:u(p.miscBudgetCents)}}catch{return o}}function Mn(o){localStorage.setItem(ye,JSON.stringify(o))}function rs(o){o.months.forEach(i=>{const{recurringBudgetDefaults:p}=h;typeof p.foodBudgetCents=="number"&&(i.foodBudgetCents=p.foodBudgetCents),typeof p.goingOutBudgetCents=="number"&&(i.goingOutBudgetCents=p.goingOutBudgetCents),typeof p.fixedBudgetCents=="number"&&(i.fixedBudgetCents=p.fixedBudgetCents),typeof p.variableBudgetCents=="number"&&(i.variableBudgetCents=p.variableBudgetCents),typeof p.miscBudgetCents=="number"&&(i.miscBudgetCents=p.miscBudgetCents)})}function As(o){const i=o.trim();i&&localStorage.setItem(se,i)}async function is(){if(h.savedSearchEvaluations.length===0)return;const o=Pt(),i=tn(),p=h.savedSearchEvaluations.map(u=>({..._r(h.years,u.keyword,o,i),id:u.id,createdAt:u.createdAt}));h.savedSearchEvaluations=p,await Es(p)}async function Is(){Na(),Ca(Kn()),h.hasUnexportedChanges=Ts(),h.unexportedChangeLog=ss(),h.persistentAuditLog=await Js(),h.lastBackupFileName=ea(),h.recurringBudgetDefaults=Ps(),Wt(),Ms();const[o,i,p,u]=await Promise.all([ya(),zs(),Gs(),Hs()]);h.years=o,h.annualVariableFixedTemplates=p.templates,h.annualVariableFixedTemplateVersion=p.version,ta(h.years),ia(h.years),h.fixedTemplates=i.templates,h.fixedTemplateVersion=i.version,h.savedSearchEvaluations=u.results,await Rn(h.years),await is(),o.length>0&&(h.selectedYear=ns(o),h.selectedMonth=tn()),te()}function ta(o){const i=p=>p==="balance"||p==="fresh"||p==="salary"?p:void 0;o.forEach(p=>{p.months.forEach(u=>{if(u.weeklyShoppingWeekday!==null&&u.weeklyShoppingWeekday!==void 0){const m=Number(u.weeklyShoppingWeekday);Number.isInteger(m)&&m>=0&&m<=6?u.weeklyShoppingWeekday=m:u.weeklyShoppingWeekday=null}else u.weeklyShoppingWeekday=null;typeof u.weeklyShoppingEstimateCents!="number"&&(u.weeklyShoppingEstimateCents=0),typeof u.foodBudgetCents!="number"&&(u.foodBudgetCents=0),typeof u.goingOutBudgetCents!="number"&&(u.goingOutBudgetCents=0),Array.isArray(u.incomes)?u.incomes=u.incomes.map(m=>{const $=i(m.incomeSource);if(!$){const{incomeSource:P,...O}=m;return O}return{...m,incomeSource:$}}):u.incomes=[],typeof u.fixedBudgetCents!="number"&&(u.fixedBudgetCents=u.fixedCosts.reduce((m,$)=>m+$.plannedCents,0)),typeof u.variableBudgetCents!="number"&&(u.variableBudgetCents=u.variablePositions.reduce((m,$)=>m+$.budgetCents,0)),Array.isArray(u.variablePositions)||(u.variablePositions=[]),typeof u.miscBudgetCents!="number"&&(u.miscBudgetCents=0)})})}function At(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function qn(o){return o==="fresh"||o==="salary"||!o}async function Rn(o){for(const i of o)await ba(i)}function Vn(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Be(){const o=Vn();if(o)return o.months.find(i=>i.month===h.selectedMonth)}function Et(o,i){const p=h.years.find(u=>u.year===o);if(p)return p.months.find(u=>u.month===i)}function Vt(o){const i=o.days.reduce((O,A)=>O+A.foodCents,0),p=o.days.reduce((O,A)=>O+A.goingOutCents,0),u=o.fixedCosts.reduce((O,A)=>O+A.actualCents,0),m=o.variableCosts.reduce((O,A)=>O+A.amountCents,0)+o.variablePositions.reduce((O,A)=>O+A.actualCents,0),$=o.miscCosts.reduce((O,A)=>O+A.amountCents,0),P=i+p+u+m+$;return{foodCents:i,goingOutCents:p,fixedCents:u,variableCents:m,miscCents:$,totalCents:P}}function jn(o){const i=o.foodBudgetCents??0,p=o.goingOutBudgetCents??0,u=o.fixedBudgetCents??o.fixedCosts.reduce((P,O)=>P+O.plannedCents,0),m=o.variablePositions.reduce((P,O)=>P+O.budgetCents,0),$=o.miscBudgetCents??0;return i+p+u+(o.variableBudgetCents??m)+$}function dn(o){return o.months.reduce((i,p)=>{const u=Vt(p);return{foodCents:i.foodCents+u.foodCents,goingOutCents:i.goingOutCents+u.goingOutCents,fixedCents:i.fixedCents+u.fixedCents,variableCents:i.variableCents+u.variableCents,miscCents:i.miscCents+u.miscCents,totalCents:i.totalCents+u.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Ra(o){return o.months.slice().sort((i,p)=>i.month-p.month).map(i=>({month:i.month,summary:Vt(i)}))}function Yn(o){const i=o.months.reduce((P,O)=>P+(O.foodBudgetCents??0),0),p=o.months.reduce((P,O)=>P+(O.goingOutBudgetCents??0),0),u=o.months.reduce((P,O)=>P+(O.fixedBudgetCents??O.fixedCosts.reduce((A,W)=>A+W.plannedCents,0)),0),m=o.months.reduce((P,O)=>P+(O.variableBudgetCents??O.variablePositions.reduce((A,W)=>A+W.budgetCents,0)),0),$=o.months.reduce((P,O)=>P+(O.miscBudgetCents??0),0);return{foodCents:i,goingOutCents:p,fixedCents:u,variableCents:m,miscCents:$,totalCents:i+p+u+m+$}}function nn(o){return o.months.reduce((i,p)=>i+p.incomes.reduce((u,m)=>u+(qn(m.incomeSource)?m.amountCents:0),0),0)}function na(o){return o.months.reduce((i,p)=>(p.incomes.forEach(u=>{if(u.incomeSource==="salary"){i.salaryIncomeCents+=u.amountCents;return}(u.incomeSource==="fresh"||u.incomeSource==null)&&(i.freshIncomeCents+=u.amountCents)}),i),{salaryIncomeCents:0,freshIncomeCents:0})}function aa(o,i){const p=o.months.slice().sort((u,m)=>u.month-m.month)[0];return p?i.get(ge(o.year,p.month))?.carriedFromPreviousCents??0:0}function hn(){const o=h.years.slice().sort((u,m)=>u.year-m.year).flatMap(u=>u.months.slice().sort((m,$)=>m.month-$.month).map(m=>({year:u.year,month:m}))),i=new Map;let p=0;return o.forEach(({year:u,month:m},$)=>{const P=m.carryoverOverrideCents,O=typeof P=="number",A=O?P:p,W=$>0||O,V=m.incomes.reduce((xe,Je)=>xe+(qn(Je.incomeSource)?Je.amountCents:0),0),Y=jn(m),U=V+A,re=U-Y;i.set(ge(u,m.month),{hasPreviousMonth:W,carriedFromPreviousCents:A,recordedIncomeCents:V,effectiveIncomeCents:U,plannedBudgetCents:Y,netCents:re}),p=re}),i}function H(o,i){return i<=0?"":o>i?"budget-over":o<i?"budget-under":""}function sa(o){return`${o>0?"+":""}${f(o)}`}function It(o,i){const p=o-i,u=H(i,o);return`${f(o)} <span class="eval-diff ${u}">(Δ ${sa(p)})</span>`}function pn(o,i){const p=o!==null,u=p?o-i:null,m=p?H(i,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${p?`${f(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(i)} €</strong>
      </div>
      <div class="column-overview-row ${m}">
        <span>Diff</span>
        <strong>${u===null?"-":`${f(u)} €`}</strong>
      </div>
    </div>`}async function z(o){if(await yi(o)){alert(`Jahr ${o} existiert bereits.`);return}const p=Br(o,h.fixedTemplates,h.fixedTemplateVersion);rs(p),ra(p),await ba(p),h.years=await ya(),fn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=tn(),ne(`Jahr ${o} wurde angelegt.`),te()}function fn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const i=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",p=new Date().toISOString(),u=`${o} (${i})`,m={id:ot("change"),timestampIso:p,message:u};h.unexportedChangeLog=[...h.unexportedChangeLog,m].slice(-200),Se(h.unexportedChangeLog);const $={id:ot("audit"),timestampIso:p,message:u};h.persistentAuditLog=[...h.persistentAuditLog,$].slice().sort((P,O)=>P.timestampIso.localeCompare(O.timestampIso)),Ci($).catch(P=>{console.error("Audit-Log konnte nicht gespeichert werden",P),ne("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function os(o){const i=o.trim();i&&(h.lastBackupFileName=i,As(i))}function xa(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],Se([]),h.showUnexportedChangeLogModal=!1,os(o)}async function Ye(o){const i=Vn();i&&(await ba(i),h.years=await ya(),fn(o))}async function Bt(o){for(const i of h.years)await ba(i);h.years=await ya(),fn(o)}function ge(o,i){return o*100+i}function zn(o,i,p){const u=`${o} auf ${f(p)} € gesetzt`;return p>i?`${u} (erhöht um ${f(p-i)} €)`:p<i?`${u} (verringert um ${f(i-p)} €)`:u}function vn(o){const i=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!i)return null;const p=i[1],u=i[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function _n(o,i){const p=vn(o.dueDateIso);if(!p||i.year<p.year)return;const u=i.months.find($=>$.month===p.month);!u||u.variablePositions.some($=>$.autoAnnualTemplateId===o.id)||(u.variablePositions=[{id:ot("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...u.variablePositions],Me(u))}function ra(o){h.annualVariableFixedTemplates.forEach(i=>{_n(i,o)})}function ia(o){const i=new Set(h.annualVariableFixedTemplates.map(p=>p.id));o.forEach(p=>{p.months.forEach(u=>{const m=u.variablePositions.some(P=>typeof P.autoAnnualTemplateId=="string"),$=u.fixedCosts.some(P=>typeof P.autoAnnualTemplateId=="string");m&&(u.variablePositions=u.variablePositions.filter(P=>P.autoAnnualTemplateId?i.has(P.autoAnnualTemplateId):!0),Me(u)),$&&(u.fixedCosts=u.fixedCosts.filter(P=>!P.autoAnnualTemplateId),be(u))}),ra(p)})}function be(o){o.fixedBudgetCents=o.fixedCosts.reduce((i,p)=>i+p.plannedCents,0)}function Me(o){o.variableBudgetCents=o.variablePositions.reduce((i,p)=>i+p.budgetCents,0)}function Os(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function oa(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Os());if(!o)return null;const i=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!i)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const p=i[1],u=i[2];return!p||!u?null:{year:Number.parseInt(p,10),month:Number.parseInt(u,10)}}function ka(o,i){const p=ge(i.year,i.month);h.years.forEach(u=>{u.months.forEach(m=>{if(ge(u.year,m.month)<p)return;m.fixedCosts.some(P=>P.templateId===o.id)||(m.fixedCosts.push({id:ot("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),be(m))})})}function wa(o,i,p){const u=ge(p.year,p.month);h.years.forEach(m=>{m.months.forEach($=>{ge(m.year,$.month)<u||($.fixedCosts=$.fixedCosts.map(P=>P.templateId!==i.id?P:{...P,name:i.name,plannedCents:i.plannedCents,actualCents:P.actualCents===o.plannedCents?i.plannedCents:P.actualCents}),be($))})})}function Fs(o,i){const p=ge(i.year,i.month);h.years.forEach(u=>{u.months.forEach(m=>{ge(u.year,m.month)<p||(m.fixedCosts=m.fixedCosts.filter($=>$.templateId!==o),be(m))})})}async function mn(o,i){const p=o.trim();if(!p)return;const u=oa();if(!u)return;const m=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const $=h.fixedTemplates.find(O=>O.id===h.editingFixedTemplateId);if(!$)return;const P={...$,name:p,plannedCents:i};h.fixedTemplates=h.fixedTemplates.map(O=>O.id===h.editingFixedTemplateId?P:O),wa($,P,u)}else{const $={id:ot("tpl"),name:p,plannedCents:i};h.fixedTemplates=[...h.fixedTemplates,$],ka($,u)}h.fixedTemplateVersion=await Ws(h.fixedTemplates),h.editingFixedTemplateId=null,await Bt(m?`Fixkosten-Vorlage aktualisiert: ${p} (${f(i)} €)`:`Fixkosten-Vorlage hinzugefügt: ${p} (${f(i)} €)`),ne(m?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),te()}function Wn(o){h.editingFixedTemplateId=o,te()}function gn(){h.editingFixedTemplateId=null,te()}async function $a(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const p=oa();if(!p)return;const u=h.fixedTemplates.find(m=>m.id===o);h.fixedTemplates=h.fixedTemplates.filter(m=>m.id!==o),Fs(o,p),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Ws(h.fixedTemplates),await Bt(`Fixkosten-Vorlage gelöscht: ${u?.name??"Unbekannt"}`),ne("Fixkosten-Vorlage wurde gelöscht."),te()}async function Ds(o,i,p){const u=o.trim();if(!u){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const m=vn(i);if(!m){alert("Bitte ein gültiges Datum auswählen.");return}if(p<=0){alert("Bitte einen positiven Betrag eingeben.");return}const $={id:ot("annualtpl"),name:u,plannedCents:p,dueDateIso:i};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,$],h.years.forEach(P=>{_n($,P)}),h.annualVariableFixedTemplateVersion=await Us(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage hinzugefügt: ${u} (${f(p)} €, jährlich in ${Ie(m.month)})`),ne("Variable Fixkosten-Vorlage wurde hinzugefügt."),te()}async function bn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const p=h.annualVariableFixedTemplates.find(u=>u.id===o);p&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(u=>u.id!==o),h.years.forEach(u=>{u.months.forEach(m=>{m.variablePositions=m.variablePositions.filter($=>$.autoAnnualTemplateId!==o),Me(m),m.fixedCosts=m.fixedCosts.filter($=>$.autoAnnualTemplateId!==o),be(m)})}),h.annualVariableFixedTemplateVersion=await Us(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage gelöscht: ${p.name}`),ne("Variable Fixkosten-Vorlage wurde gelöscht."),te())}async function Va(o,i,p){const u=Be();if(!u)return;const $=u.days.find(P=>P.isoDate===o)?.[i]??0;u.days=u.days.map(P=>P.isoDate===o?{...P,[i]:p}:P),await Ye(zn(`${i==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,$,p)),te()}async function Tn(o,i){const p=Be();if(!p)return;const u=p.fixedCosts.find(m=>m.id===o);p.fixedCosts=p.fixedCosts.map(m=>m.id===o?{...m,actualCents:i}:m),await Ye(`Fixkosten-Ist angepasst: ${u?.name??"Unbekannt"} auf ${f(i)} €`),te()}async function ls(o,i){const p=Be();if(!p)return;const u=p.fixedCosts.find($=>$.id===o);if(!u)return;const m=u.plannedCents;p.fixedCosts=p.fixedCosts.map($=>$.id===o?{...$,plannedCents:i}:$),be(p),await Ye(zn(`Fixkosten-Budget angepasst: ${u.name}`,m,i)),te()}async function ja(o,i){const p=Be();if(!p)return;const u=o.trim();if(!u){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(i<=0){alert("Bitte einen positiven Betrag eingeben.");return}const m={id:ot("fixed"),templateId:ot("fixed-local"),name:u,plannedCents:i,actualCents:0};p.fixedCosts=[m,...p.fixedCosts],be(p),await Ye(`Fixkosten-Position hinzugefügt: ${u} (${f(i)} €)`),ne("Fixkosten-Position wurde hinzugefügt."),te()}async function He(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const p=Be();if(!p)return;const u=p.fixedCosts.find(m=>m.id===o);u&&(p.fixedCosts=p.fixedCosts.filter(m=>m.id!==o),be(p),await Ye(`Fixkosten-Position gelöscht: ${u.name}`),ne("Fixkosten-Position wurde gelöscht."),te())}async function Pn(){const o=Be();if(!o)return;if(o.fixedCosts.length===0){ne("Keine Fixkosten zum Löschen vorhanden.","error");return}if(!confirm("Alle Fixkosten im aktuellen Monat wirklich löschen?"))return;const p=o.fixedCosts.length;o.fixedCosts=[],be(o),await Ye(`Alle Fixkosten im Monat gelöscht: ${p} Position(en)`),ne(`${p} Fixkosten-Position(en) wurden gelöscht.`),te()}async function an(o){await An("fixedBudgetCents",o,"Fixkosten")}async function cs(o){await An("foodBudgetCents",o,"Essen")}async function Gn(o){await An("goingOutBudgetCents",o,"Ausgehen")}async function Sa(o){await An("miscBudgetCents",o,"Sonstiges")}async function Ya(o){await An("variableBudgetCents",o,"Variable Kosten")}async function An(o,i,p){const u=Be(),m=h.selectedYear;if(!u||!m||u[o]===i)return;const $=u[o];if(u[o]=i,confirm(`Soll das Budget "${p}" auch für zukünftige Monate übernommen werden?`)){const O=ge(m,h.selectedMonth);h.years.forEach(W=>{W.months.forEach(V=>{ge(W.year,V.month)<=O||(V[o]=i)})}),h.recurringBudgetDefaults[o]=i,Mn(h.recurringBudgetDefaults);const A=zn(`Budget "${p}"`,$??0,i);await Bt(`${A} (inkl. zukünftiger Monate)`),ne(`Budget "${p}" wurde für zukünftige Monate übernommen.`),te();return}await Ye(zn(`Budget "${p}"`,$??0,i)),te()}async function yn(o){const i=Be();i&&(o===null?i.carryoverOverrideCents=null:i.carryoverOverrideCents=o,await Ye(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(o)} € gesetzt`),te())}async function za(o,i,p){const u=Be(),m=h.selectedYear;if(!u||!m)return;const $=o.trim();if(!$){alert("Bitte Bezeichnung für die Position angeben.");return}if(u.variablePositions=[{id:ot("varpos"),name:$,budgetCents:i,actualCents:0},...u.variablePositions],Me(u),p){const P=ge(m,h.selectedMonth);h.years.forEach(O=>{O.months.forEach(A=>{ge(O.year,A.month)<=P||(A.variablePositions=[{id:ot("varpos"),name:$,budgetCents:i,actualCents:0},...A.variablePositions],Me(A))})}),await Bt(`Variable Position hinzugefügt: ${$} (${f(i)} €) für zukünftige Monate`),ne("Variable Position wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Variable Position hinzugefügt: ${$} (${f(i)} €)`),ne("Variable Position wurde hinzugefügt."),te()}async function Ea(o,i){const p=Be();if(!p)return;const u=p.variablePositions.find($=>$.id===o),m=u?.actualCents??0;p.variablePositions=p.variablePositions.map($=>$.id===o?{...$,actualCents:i}:$),await Ye(zn(`Istwert Variable Position angepasst: ${u?.name??"Unbekannt"}`,m,i)),te()}async function us(o,i){const p=Be();if(!p)return;const u=p.variablePositions.find($=>$.id===o),m=u?.budgetCents??0;p.variablePositions=p.variablePositions.map($=>$.id===o?{...$,budgetCents:i}:$),Me(p),await Ye(zn(`Budget Variable Position angepasst: ${u?.name??"Unbekannt"}`,m,i)),te()}async function ve(o){if(!confirm("Variable Position wirklich löschen?"))return;const p=Be(),u=h.selectedYear;if(!p||!u)return;const m=p.variablePositions.find(A=>A.id===o);if(!m)return;const $=ge(u,h.selectedMonth),O=h.years.some(A=>A.months.some(W=>ge(A.year,W.month)>$&&W.variablePositions.some(V=>V.name===m.name&&V.budgetCents===m.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.variablePositions=p.variablePositions.filter(A=>A.id!==o),Me(p),O){h.years.forEach(A=>{A.months.forEach(W=>{ge(A.year,W.month)<=$||(W.variablePositions=W.variablePositions.filter(V=>!(V.name===m.name&&V.budgetCents===m.budgetCents)),Me(W))})}),await Bt(`Variable Position gelöscht: ${m.name} (inkl. zukünftiger Monate)`),ne("Variable Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Variable Position gelöscht: ${m.name}`),ne("Variable Position wurde gelöscht."),te()}async function ds(o){const i=Be(),p=h.selectedYear;if(!i||!p)return;const u=i.variablePositions.find(V=>V.id===o);if(!u)return;const m={year:h.selectedMonth===12?p+1:p,month:h.selectedMonth===12?1:h.selectedMonth+1};let $=h.years.find(V=>V.year===m.year);if(!$){const V=Br(m.year,h.fixedTemplates,h.fixedTemplateVersion);rs(V),ra(V),await ba(V),h.years=[...h.years,V].sort((Y,U)=>Y.year-U.year),$=V}const P=$.months.find(V=>V.month===m.month);if(!P)return;const O=P.variablePositions.some(V=>V.id===u.id||V.name===u.name&&V.budgetCents===u.budgetCents);if(i.variablePositions=i.variablePositions.filter(V=>V.id!==o),Me(i),!O){const Y=P.variablePositions.some(U=>U.id===u.id)?{...u,id:ot("varpos")}:u;P.variablePositions=[Y,...P.variablePositions],Me(P)}const A=`${Ie(m.month)} ${m.year}`,W=`Variable Position verschoben: ${u.name} → ${A}`;if(m.year===p)await Ye(W);else{const V=Vn();if(!V)return;await ba(V),await ba($),h.years=await ya(),ta(h.years),fn(W)}ne(O?`Position entfernt (im Folgemonat schon vorhanden: ${A}).`:`Position in den Folgemonat verschoben: ${A}.`),te()}async function Wa(o,i,p){const u=Be(),m=h.selectedYear;if(!u||!m)return;const $=o.trim();if(!$){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(i<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P=js($,i);if(u.miscCosts=[P,...u.miscCosts],p){const O=ge(m,h.selectedMonth);h.years.forEach(A=>{A.months.forEach(W=>{ge(A.year,W.month)<=O||(W.miscCosts=[js($,i),...W.miscCosts])})}),await Bt(`Sonstige Position hinzugefügt: ${$} (${f(i)} €) für zukünftige Monate`),ne("Sonstige Position wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Sonstige Position hinzugefügt: ${$} (${f(i)} €)`),ne("Sonstige Position wurde hinzugefügt."),te()}function Un(o){const i=[];let p="",u=!1;for(let m=0;m<o.length;m+=1){const $=o[m],P=o[m+1];if($==='"'){u&&P==='"'?(p+='"',m+=1):u=!u;continue}if($===";"&&!u){i.push(p.trim()),p="";continue}p+=$}return i.push(p.trim()),i}async function la(o){const i=Be();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const m=new Set(i.miscCosts.map(A=>`${A.description}__${A.amountCents}`));let $=0,P=0,O=0;if(u.forEach(A=>{const W=Un(A);if(W.length!==2){O+=1;return}const V=W[0]?.trim()??"",Y=W[1]?.trim()??"",U=Oe(Y);if(!V||U<=0){O+=1;return}const re=`${V}__${U}`;if(m.has(re)){P+=1;return}i.miscCosts.push(js(V,U)),m.add(re),$+=1}),$===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ne(A,"error");return}await Ye(`Sonstiges CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function hs(o){const i=Be();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const m=new Set(i.fixedCosts.map(A=>`${A.name}__${A.plannedCents}__${A.actualCents}`));let $=0,P=0,O=0;if(u.forEach(A=>{const W=Un(A);if(W.length!==2){O+=1;return}const V=W[0]?.trim()??"",Y=W[1]?.trim()??"",U=Oe(Y);if(!V||U<=0){O+=1;return}const re=`${V}__${U}__${U}`;if(m.has(re)){P+=1;return}i.fixedCosts.push({id:ot("fixed"),templateId:ot("fixed-local"),name:V,plannedCents:U,actualCents:U}),m.add(re),$+=1}),$===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ne(A,"error");return}be(i),await Ye(`Fixkosten CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function ps(o){const i=Be();if(!i){ne("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const u=(await o.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(A=>A.trim()).filter(A=>A.length>0);if(u.length===0){ne("CSV-Datei ist leer.","error");return}const m=new Set(i.variablePositions.map(A=>`${A.name}__${A.budgetCents}__${A.actualCents}`));let $=0,P=0,O=0;if(u.forEach(A=>{const W=Un(A);if(W.length!==2){O+=1;return}const V=W[0]?.trim()??"",Y=W[1]?.trim()??"",U=Oe(Y);if(!V||U<=0){O+=1;return}const re=`${V}__${U}__${U}`;if(m.has(re)){P+=1;return}i.variablePositions.push({id:ot("varpos"),name:V,budgetCents:U,actualCents:U}),m.add(re),$+=1}),$===0){const A=O>0||P>0?`Keine Position importiert (Duplikate: ${P}, ungültig: ${O}).`:"Keine Position importiert.";ne(A,"error");return}Me(i),await Ye(`Variable CSV-Import: ${$} Position(en), Duplikate übersprungen: ${P}, ungültige Zeilen: ${O}`),ne(`Import abgeschlossen: ${$} übernommen, ${P} Duplikate, ${O} ungültig.`),te()}async function fs(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const p=Be(),u=h.selectedYear;if(!p||!u)return;const m=p.miscCosts.find(A=>A.id===o);if(!m)return;const $=ge(u,h.selectedMonth),O=h.years.some(A=>A.months.some(W=>ge(A.year,W.month)>$&&W.miscCosts.some(V=>V.description===m.description&&V.amountCents===m.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.miscCosts=p.miscCosts.filter(A=>A.id!==o),O){h.years.forEach(A=>{A.months.forEach(W=>{ge(A.year,W.month)<=$||(W.miscCosts=W.miscCosts.filter(V=>!(V.description===m.description&&V.amountCents===m.amountCents)))})}),await Bt(`Sonstige Position gelöscht: ${m.description} (${f(m.amountCents)} €) inkl. zukünftiger Monate`),ne("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Sonstige Position gelöscht: ${m.description} (${f(m.amountCents)} €)`),ne("Sonstige Position wurde gelöscht."),te()}async function _e(o,i,p,u){const m=Be(),$=h.selectedYear;if(!m||!$)return;const P=o.trim();if(!P){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(i<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const O=Mr(P,i,p);if(m.incomes=[O,...m.incomes],u){const A=ge($,h.selectedMonth);h.years.forEach(W=>{W.months.forEach(V=>{ge(W.year,V.month)<=A||(V.incomes=[Mr(P,i,p),...V.incomes])})}),await Bt(`Einkommen hinzugefügt: ${P} (${f(i)} €, ${At(p)}) für zukünftige Monate`),ne("Einkommen wurde für zukünftige Monate hinzugefügt."),te();return}await Ye(`Einkommen hinzugefügt: ${P} (${f(i)} €, ${At(p)})`),ne("Einkommen wurde hinzugefügt."),te()}async function ca(o,i){const p=Be();if(!p)return;const u=p.incomes.find(m=>m.id===o);u&&(p.incomes=p.incomes.map(m=>{if(m.id!==o)return m;if(!i){const{incomeSource:$,...P}=m;return P}return{...m,incomeSource:i}}),await Ye(`Einkommensart angepasst: ${u.description} → ${At(i)}`),te())}async function ua(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const p=Be(),u=h.selectedYear;if(!p||!u)return;const m=p.incomes.find(A=>A.id===o);if(!m)return;const $=ge(u,h.selectedMonth),O=h.years.some(A=>A.months.some(W=>ge(A.year,W.month)>$&&W.incomes.some(V=>V.description===m.description&&V.amountCents===m.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.incomes=p.incomes.filter(A=>A.id!==o),O){h.years.forEach(A=>{A.months.forEach(W=>{ge(A.year,W.month)<=$||(W.incomes=W.incomes.filter(V=>!(V.description===m.description&&V.amountCents===m.amountCents)))})}),await Bt(`Einkommen gelöscht: ${m.description} (${f(m.amountCents)} €) inkl. zukünftiger Monate`),ne("Einkommen wurde auch in zukünftigen Monaten gelöscht."),te();return}await Ye(`Einkommen gelöscht: ${m.description} (${f(m.amountCents)} €)`),ne("Einkommen wurde gelöscht."),te()}async function In(){const o=await ki(),i=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),p=URL.createObjectURL(i),u=`haushaltsbuch-backup-${Bn()}-${as()}.json`,m=document.createElement("a");m.href=p,m.download=u,m.click(),URL.revokeObjectURL(p),xa(u),te(),ne("Backup wurde exportiert.")}async function Ga(o){const i=await o.text(),p=JSON.parse(i);await wi(p);const[u,m,$,P]=await Promise.all([ya(),zs(),Gs(),Hs()]);h.years=u,h.annualVariableFixedTemplates=$.templates,h.annualVariableFixedTemplateVersion=$.version,ta(h.years),ia(h.years),h.fixedTemplates=m.templates,h.fixedTemplateVersion=m.version,h.savedSearchEvaluations=P.results,h.evaluationCurrentResult=null,h.evaluationQuery="",await Rn(h.years),await is(),h.persistentAuditLog=await Js(),h.selectedYear=ns(u),h.selectedMonth=tn(),xa(o.name),ne("Backup wurde importiert."),te()}function Ba(o){h.evaluationQuery=o,h.evaluationCurrentResult=_r(h.years,o,Pt(),tn()),te()}async function Ma(){const o=h.evaluationCurrentResult;if(!o||!o.keywordNormalized){ne("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const i=h.savedSearchEvaluations.findIndex(p=>p.id===o.id);i>=0?h.savedSearchEvaluations[i]=o:h.savedSearchEvaluations=[o,...h.savedSearchEvaluations],await Es(h.savedSearchEvaluations),fn(`Auswertung gespeichert: ${o.keyword}`),ne(`Auswertung "${o.keyword}" wurde gespeichert.`),te()}async function vs(o){const i=h.savedSearchEvaluations.find(p=>p.id===o);i&&(h.savedSearchEvaluations=h.savedSearchEvaluations.filter(p=>p.id!==o),await Es(h.savedSearchEvaluations),fn(`Auswertung gelöscht: ${i.keyword}`),ne(`Gespeicherte Auswertung "${i.keyword}" wurde gelöscht.`),te())}function te(){const o=Vn(),i=Be(),p=Bn(),u=i?Vt(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},m=o?dn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},$=o?Ra(o):[],P=i?i.foodBudgetCents??0:0,O=i?i.goingOutBudgetCents??0:0,A=i?i.fixedBudgetCents??i.fixedCosts.reduce((a,b)=>a+b.plannedCents,0):0,W=i?i.variableBudgetCents??i.variablePositions.reduce((a,b)=>a+b.budgetCents,0):0,V=i?i.miscBudgetCents??0:0,Y=o?o.months.reduce((a,b)=>a+(b.foodBudgetCents??0),0):0,U=o?o.months.reduce((a,b)=>a+(b.goingOutBudgetCents??0),0):0,re=o?o.months.reduce((a,b)=>a+(b.fixedBudgetCents??b.fixedCosts.reduce((R,Z)=>R+Z.plannedCents,0)),0):0,xe=o?o.months.reduce((a,b)=>a+(b.variableBudgetCents??b.variablePositions.reduce((R,Z)=>R+Z.budgetCents,0)),0):0,Je=o?o.months.reduce((a,b)=>a+(b.miscBudgetCents??0),0):0,oe=i?i.incomes.reduce((a,b)=>a+(qn(b.incomeSource)?b.amountCents:0),0):0,Ge=i?i.incomes.reduce((a,b)=>a+(b.incomeSource==="salary"?b.amountCents:0),0):0,qe=i?i.incomes.reduce((a,b)=>a+(b.incomeSource==="fresh"?b.amountCents:0),0):0,Te=hn(),at=o?Te.get(ge(o.year,h.selectedMonth)):void 0,Ot=o?o.months.slice().sort((a,b)=>a.month-b.month)[0]:void 0,K=at?.carriedFromPreviousCents??0,wt=at?.hasPreviousMonth??!1,vt=at?.effectiveIncomeCents??oe,sn=i?jn(i):0,mt=at?.netCents??oe-sn,Ce=vt-u.totalCents,jt=Ge-u.totalCents,Le=u.totalCents>0?`${(Ge/u.totalCents*100).toFixed(1)} %`:"-",ze=K<0?"danger":K>0?"budget-under":"",Xe=mt<0?"danger":mt>0?"budget-under":"",et=Ce<0?"danger":Ce>0?"budget-under":"",tt=o?o.months.reduce((a,b)=>a+b.incomes.reduce((R,Z)=>R+(qn(Z.incomeSource)?Z.amountCents:0),0),0):0,Gt=o?o.months.reduce((a,b)=>a+b.incomes.reduce((R,Z)=>R+(Z.incomeSource==="salary"?Z.amountCents:0),0),0):0,Ft=o?o.months.reduce((a,b)=>a+b.incomes.reduce((R,Z)=>R+(Z.incomeSource==="fresh"?Z.amountCents:0),0),0):0,Dt=o&&Ot?Te.get(ge(o.year,Ot.month))?.carriedFromPreviousCents??0:0,Lt=tt+Dt;Lt-m.totalCents;const gt=Gt-m.totalCents,Cn=m.totalCents>0?`${(Gt/m.totalCents*100).toFixed(1)} %`:"-",ke=P+O+A+W+V,Pe=P+O,We=u.foodCents+u.goingOutCents,Ne=Pe-We,Re=H(We,Pe),rn=Y+U+re+xe+Je,on=oe-ke,xn=ke-u.totalCents,Ae=rn-m.totalCents,me=a=>a<0?"danger":a>0?"budget-under":"",st=(a,b)=>b<=0?"muted":a>=b?"budget-under":"danger",Nt=st(Ge,u.totalCents),On=st(Gt,m.totalCents),ue=(a,b)=>{if(b<=0)return"0%";const Z=Math.max(0,a)/b*100;return`${Math.min(100,Math.max(0,Z)).toFixed(1)}%`},kn=(a,b)=>{if(b<=0)return a>0?100:0;const R=Math.max(0,a)/b*100;return Math.max(0,R)},Kt=[{label:"Essen",budgetCents:P,actualCents:u.foodCents},{label:"Ausgehen",budgetCents:O,actualCents:u.goingOutCents},{label:"Fixkosten",budgetCents:A,actualCents:u.fixedCents},{label:"Variable",budgetCents:W,actualCents:u.variableCents},{label:"Sonstige",budgetCents:V,actualCents:u.miscCents}];Math.max(1,...Kt.flatMap(a=>[a.budgetCents,a.actualCents]));const ln=(a,b)=>b<=0?"bar-positive":a<=0||b>a?"bar-negative":"bar-positive",Ut=[{label:"Einkommen gesamt",valueCents:vt,className:"bar-income"},{label:"Budget gesamt",valueCents:ke,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:u.totalCents,className:"bar-expense"},{label:"Netto",valueCents:Ce,className:Ce<0?"bar-negative":"bar-positive"}],wn=Math.max(1,...Ut.map(a=>Math.abs(a.valueCents))),da=o?o.months.slice().sort((a,b)=>a.month-b.month).map(a=>{const b=a.foodBudgetCents??0,R=a.goingOutBudgetCents??0,Z=a.fixedBudgetCents??a.fixedCosts.reduce((cn,En)=>cn+En.plannedCents,0),Ee=a.variableBudgetCents??a.variablePositions.reduce((cn,En)=>cn+En.budgetCents,0),Qe=a.miscBudgetCents??0,Rt=b+R+Z+Ee+Qe;return{month:a.month,foodBudgetCents:b,goingOutBudgetCents:R,fixedBudgetCents:Z,variableBudgetCents:Ee,miscBudgetCents:Qe,totalBudgetCents:Rt}}):[],nt=new Map(da.map(a=>[a.month,a])),$t=a=>{if(a.length===0)return null;const b=Math.min(...a),R=Math.max(...a),Z=Math.round(a.reduce((Ee,Qe)=>Ee+Qe,0)/a.length);return{min:b,avg:Z,max:R}},bt=o&&o.year===Pt()?$.filter(a=>a.month<=tn()):$,Ua=bt.map(a=>a.summary.foodCents),T=bt.map(a=>a.summary.goingOutCents),N=bt.map(a=>a.summary.fixedCents),Mt=bt.map(a=>a.summary.variableCents),ha=bt.map(a=>a.summary.miscCents),_a=bt.map(a=>a.summary.totalCents),gs=bt.map(a=>o?Te.get(ge(o.year,a.month))?.plannedBudgetCents??0:0),bs=bt.map(a=>o?Te.get(ge(o.year,a.month))?.netCents??0:0),Ha=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((b,R)=>b+(R.incomeSource==="salary"?R.amountCents:0),0)])),Ta=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((b,R)=>b+(R.incomeSource==="salary"||R.incomeSource==="fresh"?R.amountCents:0),0)])),Ja=bt.map(a=>Ha.get(a.month)??0),ys=bt.map(a=>Ta.get(a.month)??0),Yt={food:$t(Ua),goingOut:$t(T),fixed:$t(N),variable:$t(Mt),misc:$t(ha),total:$t(_a),salary:$t(Ja),income:$t(ys),budget:$t(gs),net:$t(bs)},Xa=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Ht={food:Ua.reduce((a,b)=>a+b,0),goingOut:T.reduce((a,b)=>a+b,0),fixed:N.reduce((a,b)=>a+b,0),variable:Mt.reduce((a,b)=>a+b,0),misc:ha.reduce((a,b)=>a+b,0),total:_a.reduce((a,b)=>a+b,0),salary:Ja.reduce((a,b)=>a+b,0),income:ys.reduce((a,b)=>a+b,0),budget:gs.reduce((a,b)=>a+b,0)},Cs=Xa.map(({key:a,label:b})=>{const R=Yt.food?.[a]??null,Z=Yt.goingOut?.[a]??null,Ee=Yt.fixed?.[a]??null,Qe=Yt.variable?.[a]??null,Rt=Yt.misc?.[a]??null,cn=Yt.total?.[a]??null,En=Yt.salary?.[a]??null,dt=Yt.income?.[a]??null,ga=Yt.budget?.[a]??null,Oa=Yt.net?.[a]??null,_t=Fn=>Fn===null?"-":f(Fn);return`<tr>
                  <td><strong>${b}</strong></td>
                  <td>${_t(R)}</td>
                  <td>${_t(Z)}</td>
                  <td>${_t(Ee)}</td>
                  <td>${_t(Qe)}</td>
                  <td>${_t(Rt)}</td>
                  <td>${_t(cn)}</td>
                  <td>${_t(En)}</td>
                  <td>${_t(dt)}</td>
                  <td>${_t(ga)}</td>
                  <td>${_t(Oa)}</td>
                </tr>`}).join(""),Ls=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(Ht.food)}</td>
                  <td>${f(Ht.goingOut)}</td>
                  <td>${f(Ht.fixed)}</td>
                  <td>${f(Ht.variable)}</td>
                  <td>${f(Ht.misc)}</td>
                  <td>${f(Ht.total)}</td>
                  <td>${f(Ht.salary)}</td>
                  <td>${f(Ht.income)}</td>
                  <td>${f(Ht.budget)}</td>
                  <td>-</td>
                </tr>`,xs=Math.max(1,...$.flatMap(a=>{const b=nt.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,b??0]})),ks=Math.max(1,...$.flatMap(a=>{const b=nt.get(a.month),R=a.summary.foodCents+a.summary.goingOutCents,Z=(b?.foodBudgetCents??0)+(b?.goingOutBudgetCents??0);return[R,Z]})),pa=Math.max(1,...$.flatMap(a=>{const b=nt.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,b]})),Jt=Math.max(1,...$.flatMap(a=>{const b=nt.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,b]})),Ue=Math.max(1,...$.flatMap(a=>{const b=nt.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,b]})),fa=H(u.fixedCents,A),Hn=H(u.foodCents,P),Ns=H(u.goingOutCents,O),Pa=H(u.variableCents,W),Qa=H(u.miscCents,V),qt=a=>a===0?"-":f(a),Za=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(A)}</div>
        <div class="compact-cost-actual ${fa}">${qt(u.fixedCents)}</div>
      </div>`,Jn=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(W)}</div>
        <div class="compact-cost-actual ${Pa}">${qt(u.variableCents)}</div>
      </div>`,$n=i?i.fixedCosts.length>0?i.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${ft(a.name)}</div>
                  <div class="compact-cost-budget">${f(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${H(a.actualCents,a.plannedCents)}">${qt(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,ws=i?i.variablePositions.length>0?i.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${ft(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${H(a.actualCents,a.budgetCents)}">${qt(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,e=h.editingFixedTemplateId?h.fixedTemplates.find(a=>a.id===h.editingFixedTemplateId):null,t=h.hasUnexportedChanges,n=h.unexportedChangeLog.slice().reverse(),s=h.persistentAuditLog.slice().sort((a,b)=>b.timestampIso.localeCompare(a.timestampIso)),r=h.lastBackupFileName?ft(h.lastBackupFileName):"-",l={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},c=h.years.slice().sort((a,b)=>a.year-b.year),d=c.some(a=>a.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??c[c.length-1]?.year??null,v=typeof d=="number"?c.find(a=>a.year===d):void 0,E=v?v.months.slice().sort((a,b)=>a.month-b.month):[],y=v?dn(v):l,g=v?na(v):{salaryIncomeCents:0,freshIncomeCents:0},k=g.salaryIncomeCents+g.freshIncomeCents,w=g.salaryIncomeCents,C=v?Yn(v):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},x=v?nn(v):0,M=v?aa(v,Te):0,_=x+M,S=v?v.months.reduce((a,b)=>a+jn(b),0):0,I=_-S,F=_-y.totalCents,j=[{label:"Essen",budgetCents:C.foodCents,actualCents:y.foodCents},{label:"Ausgehen",budgetCents:C.goingOutCents,actualCents:y.goingOutCents},{label:"Fixkosten",budgetCents:C.fixedCents,actualCents:y.fixedCents},{label:"Variable",budgetCents:C.variableCents,actualCents:y.variableCents},{label:"Sonstige",budgetCents:C.miscCents,actualCents:y.miscCents}],L=E.map(a=>{const b=v?Te.get(ge(v.year,a.month)):void 0,R=Vt(a),Z=a.incomes.reduce((Fn,Xn)=>Fn+(Xn.incomeSource==="salary"?Xn.amountCents:0),0),Ee=a.incomes.reduce((Fn,Xn)=>Fn+(qn(Xn.incomeSource)?Xn.amountCents:0),0),Qe=b?.effectiveIncomeCents??Ee,Rt=b?.plannedBudgetCents??jn(a),cn=R.foodCents,En=R.goingOutCents,dt=cn+En,ga=R.totalCents,Oa=Qe-Rt,_t=Qe-ga;return{month:a.month,salaryIncomeCents:Z,incomeCents:Ee,foodCents:cn,goingOutCents:En,foodAndGoingOutCents:dt,effectiveIncomeCents:Qe,plannedBudgetCents:Rt,actualCostCents:ga,plannedNetCents:Oa,actualNetCents:_t}}),D=Math.max(1,...L.map(a=>a.actualCostCents)),J=Math.max(1,...L.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),G=Math.max(1,...L.map(a=>a.foodAndGoingOutCents)),q=Math.max(1,...L.map(a=>a.foodCents)),X=Math.max(1,...L.map(a=>a.goingOutCents)),le=L.map((a,b,R)=>{const Z=b>0?R[b-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Ie(a.month),monthShortLabel:Ie(a.month).slice(0,3),deltaCents:a.plannedNetCents-Z}}),he=le[le.length-1]??null,ae=Math.min(0,...le.map(a=>a.plannedNetCents)),de=Math.max(0,...le.map(a=>a.plannedNetCents)),Ve=Math.max(1,de-ae),ut=720,Ke=320,Xt=18,va=18,Lr=38,Aa=56,Xs=ut-Aa-va,Ks=Ke-Xt-Lr,Nr=a=>{if(le.length<=1)return Aa+Xs/2;const b=a/(le.length-1);return Aa+b*Xs},qs=a=>Xt+(de-a)/Ve*Ks,Sn=le.map((a,b)=>{const R=Nr(b),Z=qs(a.plannedNetCents);return{...a,x:R,y:Z,leftPercent:R/ut*100,topPercent:Z/Ke*100}}),Rs=Sn.map((a,b)=>`${b===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),Qs=Sn.length>0?`${Rs} L ${Sn[Sn.length-1]?.x.toFixed(1)} ${(Xt+Ks).toFixed(1)} L ${Sn[0]?.x.toFixed(1)} ${(Xt+Ks).toFixed(1)} Z`:"",Zs=5,Kr=Array.from({length:Zs},(a,b)=>{const R=b/(Zs-1),Z=de-R*Ve;return{valueCents:Math.round(Z/100)*100,y:qs(Z)}}),er=qs(0),qr=le[0]?.plannedNetCents??0,Ia=(le[le.length-1]?.plannedNetCents??0)-qr,Rr=Ia<0?"trend-badge-negative":Ia>0?"trend-badge-positive":"trend-badge-neutral",tr=Ia<0?"↘":Ia>0?"↗":"→",Vr=Ia<0?"Abwärtstrend":Ia>0?"Aufwärtstrend":"Seitwärts",ma=c.reduce((a,b)=>{const R=Yn(b);return{foodCents:a.foodCents+R.foodCents,goingOutCents:a.goingOutCents+R.goingOutCents,fixedCents:a.fixedCents+R.fixedCents,variableCents:a.variableCents+R.variableCents,miscCents:a.miscCents+R.miscCents,totalCents:a.totalCents+R.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),zt=c.reduce((a,b)=>{const R=dn(b);return{foodCents:a.foodCents+R.foodCents,goingOutCents:a.goingOutCents+R.goingOutCents,fixedCents:a.fixedCents+R.fixedCents,variableCents:a.variableCents+R.variableCents,miscCents:a.miscCents+R.miscCents,totalCents:a.totalCents+R.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),jr=c.reduce((a,b)=>a+nn(b),0),Yr=c[0]?aa(c[0],Te):0,nr=jr+Yr,ar=nr-ma.totalCents,sr=nr-zt.totalCents,rr=[{label:"Essen",budgetCents:ma.foodCents,actualCents:zt.foodCents},{label:"Ausgehen",budgetCents:ma.goingOutCents,actualCents:zt.goingOutCents},{label:"Fixkosten",budgetCents:ma.fixedCents,actualCents:zt.fixedCents},{label:"Variable",budgetCents:ma.variableCents,actualCents:zt.variableCents},{label:"Sonstige",budgetCents:ma.miscCents,actualCents:zt.miscCents}],ir=Math.max(1,...rr.flatMap(a=>[a.budgetCents,a.actualCents])),Vs=[{label:"Essen & Ausgehen",actualCents:zt.foodCents+zt.goingOutCents},{label:"Fixkosten",actualCents:zt.fixedCents},{label:"Variable",actualCents:zt.variableCents},{label:"Sonstige",actualCents:zt.miscCents}],zr=Math.max(1,...Vs.map(a=>a.actualCents)),we=c.map(a=>{const b=dn(a),R=Yn(a),Z=nn(a),Ee=na(a),Qe=aa(a,Te),Rt=Z+Qe;return{year:a.year,salaryIncomeCents:Ee.salaryIncomeCents,freshIncomeCents:Ee.freshIncomeCents,totalIncomeCents:Ee.salaryIncomeCents+Ee.freshIncomeCents,foodAndGoingOutCents:b.foodCents+b.goingOutCents,fixedCents:b.fixedCents,variableCents:b.variableCents,miscCents:b.miscCents,budgetTotalCents:R.totalCents,actualTotalCents:b.totalCents,effectiveIncomeCents:Rt,plannedNetCents:Rt-R.totalCents,actualNetCents:Rt-b.totalCents}}),Wr=we.reduce((a,b)=>a+b.totalIncomeCents,0),Gr=we.reduce((a,b)=>a+b.salaryIncomeCents,0),or=Math.max(1,...we.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Ur=Math.max(1,...we.map(a=>a.actualTotalCents)),Hr=Math.max(1,...we.map(a=>a.totalIncomeCents)),Jr=Math.max(1,...we.map(a=>a.salaryIncomeCents)),lr=Math.max(1,...we.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),cr=Math.max(1,...we.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),Xr=Math.max(1,...we.map(a=>a.foodAndGoingOutCents)),Qr=Math.max(1,...we.map(a=>a.fixedCents)),Zr=Math.max(1,...we.map(a=>a.variableCents)),ei=Math.max(1,...we.map(a=>a.miscCents)),ti=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${c.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${c.map(a=>`<option value="${a.year}" ${a.year===d?"selected":""}>${a.year}</option>`).join("")}
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(k)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(w)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(S)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(y.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${me(I)}">${f(I)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${me(F)}">${f(F)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${tr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Rr}">${tr} ${Vr}</span>
                    </div>
                  </header>
                  ${he?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${ft(he.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${me(he.plannedNetCents)}" data-year-trend-active-net>${f(he.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(he.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(he.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${me(he.deltaCents)}" data-year-trend-active-delta>${he.deltaCents>=0?"+":""}${f(he.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${ut} ${Ke}"
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
                              ${Kr.map(a=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${Aa}" y1="${a.y.toFixed(1)}" x2="${ut-va}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${Aa-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${f(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${Aa}" y1="${er.toFixed(1)}" x2="${ut-va}" y2="${er.toFixed(1)}"></line>
                              ${Qs?`<path class="year-trend-area" d="${Qs}"></path>`:""}
                              ${Rs?`<path class="year-trend-line" d="${Rs}"></path>`:""}
                              ${Sn.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${Ke-12}" text-anchor="middle">${ft(a.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${Sn.map((a,b)=>`
                                    <button
                                      class="year-trend-point-hit ${b===Sn.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${a.leftPercent.toFixed(2)}%; top:${a.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${b===Sn.length-1?"1":"0"}"
                                      data-month-label="${ft(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${ft(a.monthLabel)}: Kalkulierter Saldo ${f(a.plannedNetCents)}, Einkommen ${f(a.effectiveIncomeCents)}, Ausgaben ${f(a.actualCostCents)}"
                                      aria-pressed="${b===Sn.length-1?"true":"false"}"
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
                    ${j.map(a=>{const b=kn(a.actualCents,a.budgetCents),R=Math.min(100,b),Z=`${b.toFixed(0)}%`,Ee=a.budgetCents-a.actualCents,Qe=Ee<0?"danger":Ee>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${ln(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${R.toFixed(1)}%" title="${a.label}: ${f(a.actualCents)} von ${f(a.budgetCents)}">
                              <span class="circle-chart-value">${Z}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${f(a.budgetCents)} / I ${f(a.actualCents)}</div>
                            <div class="circle-chart-meta ${Qe}">${Ee>=0?"+":""}${f(Ee)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(L.length,1)}, minmax(0, 1fr));">
                    ${L.map(a=>{const b=ue(a.actualCostCents,D);return`
                          <div class="spark-bar" title="${Ie(a.month)}: ${f(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                    ${L.map(a=>{const b=ue(Math.abs(a.plannedNetCents),J),R=ue(Math.abs(a.actualNetCents),J),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Ee=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Ie(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${b}; opacity: 0.35;"></div>
                              <div class="bar ${Ee}" style="width:${R}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${me(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${me(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  ${L.map(a=>`<tr>
                        <td>${Ie(a.month)}</td>
                    <td>${f(a.salaryIncomeCents)}</td>
                    <td>${f(a.incomeCents)}</td>
                        <td>${f(a.plannedBudgetCents)}</td>
                        <td>${f(a.actualCostCents)}</td>
                        <td class="${me(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${me(a.actualNetCents)}">${f(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${c.map(a=>`<option value="${a.year}" ${a.year===d?"selected":""}>${a.year}</option>`).join("")}
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
                    ${L.map(a=>{const b=ue(a.foodAndGoingOutCents,G);return`
                          <div class="spark-bar" title="${Ie(a.month)}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(L.length,1)}, minmax(0, 1fr));">
                    ${L.map(a=>{const b=ue(a.foodCents,q);return`
                          <div class="spark-bar" title="${Ie(a.month)}: ${f(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(L.length,1)}, minmax(0, 1fr));">
                    ${L.map(a=>{const b=ue(a.goingOutCents,X);return`
                          <div class="spark-bar" title="${Ie(a.month)}: ${f(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(ma.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(zt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${me(ar)}">${f(ar)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${me(sr)}">${f(sr)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${Vs.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${f(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(zt.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${rr.map(a=>{const b=ue(a.budgetCents,ir),R=ue(a.actualCents,ir),Z=ln(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${f(a.budgetCents)} | Ist: ${f(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${b}"></div>
                              <div class="bar-marker" style="left:${b}" aria-hidden="true"></div>
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
                    ${Vs.map(a=>{const b=ue(a.actualCents,zr);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Ist: ${f(a.actualCents)}">
                              <div class="bar bar-expense" style="width:${b}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=ue(a.actualTotalCents,Ur);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
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
                    ${we.map(a=>{const b=ue(Math.abs(a.plannedNetCents),or),R=ue(Math.abs(a.actualNetCents),or),Z=a.plannedNetCents<0?"bar-negative":"bar-positive",Ee=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${Z}" style="width:${b}; opacity: 0.35;"></div>
                              <div class="bar ${Ee}" style="width:${R}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${me(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${me(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                    ${we.map(a=>{const b=ue(a.foodAndGoingOutCents,Xr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
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
                    ${we.map(a=>{const b=ue(a.fixedCents,Qr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.fixedCents)} €</span></div>
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
                    ${we.map(a=>{const b=ue(a.variableCents,Zr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.variableCents)} €</span></div>
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
                    ${we.map(a=>{const b=ue(a.miscCents,ei);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.miscCents)} €</span></div>
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
                        <td>${f(a.salaryIncomeCents)}</td>
                        <td>${f(a.totalIncomeCents)}</td>
                        <td>${f(a.budgetTotalCents)}</td>
                        <td>${f(a.actualTotalCents)}</td>
                        <td class="${me(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${me(a.actualNetCents)}">${f(a.actualNetCents)}</td>
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
                    ${we.map(a=>{const b=ue(a.totalIncomeCents,Hr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.totalIncomeCents)} €</span></div>
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
                    ${we.map(a=>{const b=ue(a.salaryIncomeCents,Jr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${b}"><span class="spark-bar-fill-value">${f(a.salaryIncomeCents)} €</span></div>
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
                    ${we.map(a=>{const b=ue(a.totalIncomeCents,lr),R=ue(a.actualTotalCents,lr);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${f(a.totalIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${b}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(we.length,1)}, minmax(0, 1fr));">
                    ${we.map(a=>{const b=ue(a.salaryIncomeCents,cr),R=ue(a.actualTotalCents,cr);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${f(a.salaryIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${b}"></div>
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
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${e?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${e?St(e.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${e?"Änderung speichern":"Vorlage speichern"}</button>
          ${e?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,ur=h.annualVariableFixedTemplates.reduce((a,b)=>a+b.plannedCents,0),si=Math.round(ur/12),ri=`
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
                <div class="eval-value budget-under">${f(ur)}</div>
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
            ${h.annualVariableFixedTemplates.map(a=>{const b=vn(a.dueDateIso),R=b?Ie(b.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${R}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Qt=h.evaluationCurrentResult,ii=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${ft(h.evaluationQuery)}" />
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
                      <div class="eval-value">${ft(Qt.keyword||"-")}</div>
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
                              <td>${Ie(a.month)}</td>
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
                        ${a.yearRows.length>0?a.yearRows.map(b=>`<tr>
                                <td>${b.year}</td>
                                <td>${b.hitCount}</td>
                                <td>${f(b.totalCents)}</td>
                                <td>${b.monthsWithHits}</td>
                                <td>${f(b.monthAverageCents)}</td>
                              </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                      </tbody>
                    </table>
                  </article>
                `).join("")}
      </div>
    `,dr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":h.topModal==="evaluation"?"Auswertung":"",oi=h.topModal==="years"?ni:h.topModal==="fixed"?ai:h.topModal==="variable-fixed"?ri:h.topModal==="dashboard"?ti:h.topModal==="evaluation"?ii:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${t?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Fr.map(a=>`<option value="${a}" ${h.theme===a?"selected":""}>${Si(a)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${dr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${dr}</h2>
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
                  ${n.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${n.map(a=>{const b=new Date(a.timestampIso);return`<li><strong>${b.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${b.toLocaleString("de-DE")}</strong><span>${ft(a.message)}</span></li>`}).join("")}</ol>`}
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
                  ${s.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${s.map(a=>{const b=new Date(a.timestampIso);return`<li><strong>${b.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${b.toLocaleString("de-DE")}</strong><span>${ft(a.message)}</span></li>`}).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Ie(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(a,b)=>b+1).map(a=>`<option value="${a}" ${a===h.selectedMonth?"selected":""}>${Ie(a)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${f(oe)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${f(Ge)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(qe)}</strong>
              </div>
              <div class="compact-income-row ${ze}">
                <span>Übernahme aus Vormonat</span>
                <strong>${wt?f(K):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(vt)}</strong>
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
                  ${$n}
                  ${Za}
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
                  ${ws}
                  ${Jn}
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
                    <div class="compact-cost-budget">${f(Pe)}</div>
                    <div class="compact-cost-actual ${Re}">${qt(We)}</div>
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
                    <div class="compact-cost-actual ${Qa}">${qt(u.miscCents)}</div>
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
                  ${Kt.map(a=>`
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
                  ${Ut.map(a=>{const b=ue(Math.abs(a.valueCents),wn),R=a.valueCents>=0?"+":"",Z=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${f(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${b}"></div>
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
                ${o?`
                    <div class="spark-bars" aria-label="Jahresverlauf Gesamtausgaben (Budget vs. Ist)">
                      ${$.map(a=>{const b=nt.get(a.month)?.totalBudgetCents??0,R=ue(b,xs),Z=ue(a.summary.totalCents,xs);return`
                            <div class="spark-bar" title="${Ie(a.month)}: Ist ${f(a.summary.totalCents)} € | Budget ${f(b)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                      ${$.map(a=>{const b=nt.get(a.month),R=(b?.foodBudgetCents??0)+(b?.goingOutBudgetCents??0),Z=a.summary.foodCents+a.summary.goingOutCents,Ee=ue(R,ks),Qe=ue(Z,ks);return`
                            <div class="spark-bar" title="${Ie(a.month)}: Ist ${f(Z)} € | Budget ${f(R)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Ee}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Qe}"><span class="spark-bar-fill-value">${f(Z)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                      ${$.map(a=>{const b=nt.get(a.month)?.fixedBudgetCents??0,R=ue(b,pa),Z=ue(a.summary.fixedCents,pa);return`
                            <div class="spark-bar" title="${Ie(a.month)}: Ist ${f(a.summary.fixedCents)} € | Budget ${f(b)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                      ${$.map(a=>{const b=nt.get(a.month)?.variableBudgetCents??0,R=ue(b,Jt),Z=ue(a.summary.variableCents,Jt);return`
                            <div class="spark-bar" title="${Ie(a.month)}: Ist ${f(a.summary.variableCents)} € | Budget ${f(b)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                      ${$.map(a=>{const b=nt.get(a.month)?.miscBudgetCents??0,R=ue(b,Ue),Z=ue(a.summary.miscCents,Ue);return`
                            <div class="spark-bar" title="${Ie(a.month)}: Ist ${f(a.summary.miscCents)} € | Budget ${f(b)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Z}"><span class="spark-bar-fill-value">${f(a.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ie(a.month).slice(0,3)}</div>
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
                    <div class="eval-value">${f(oe)}</div>
                    <div class="eval-value">${f(tt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(Ge)}</div>
                    <div class="eval-value">${f(Gt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(qe)}</div>
                    <div class="eval-value">${f(Ft)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${ze}">${wt?f(K):"-"}</div>
                    <div class="eval-value muted">-</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(vt)}</div>
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
                    <div class="eval-value">${f(Y)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${It(O,u.goingOutCents)}</div>
                    <div class="eval-value">${f(U)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${It(A,u.fixedCents)}</div>
                    <div class="eval-value">${f(re)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${It(W,u.variableCents)}</div>
                    <div class="eval-value">${f(xe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${It(V,u.miscCents)}</div>
                    <div class="eval-value">${f(Je)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${It(ke,u.totalCents)}</div>
                    <div class="eval-value">${f(rn)}</div>
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
                    <div class="eval-value ${Hn}">${f(u.foodCents)}</div>
                    <div class="eval-value">${f(m.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Ns}">${f(u.goingOutCents)}</div>
                    <div class="eval-value">${f(m.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${fa}">${f(u.fixedCents)}</div>
                    <div class="eval-value">${f(m.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Pa}">${f(u.variableCents)}</div>
                    <div class="eval-value">${f(m.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Qa}">${f(u.miscCents)}</div>
                    <div class="eval-value">${f(m.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${f(u.totalCents)}</div>
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
                    <div class="eval-value ${me(xn)}">${f(xn)}</div>
                    <div class="eval-value ${me(Ae)}">${f(Ae)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${me(on)}">${f(on)}</div>
                    <div class="eval-value muted">-</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Eigenkapital (Monat)</div>
                    <div class="eval-value ${et}">${f(Ce)}</div>
                    <div class="eval-value muted">-</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${me(jt)}">${f(jt)}</div>
                    <div class="eval-value ${me(gt)}">${f(gt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Nt}">${Le}</div>
                    <div class="eval-value ${On}">${Cn}</div>
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
                ${$.map((a,b,R)=>{const Z=o?Te.get(ge(o.year,a.month)):void 0,Ee=Z?.plannedBudgetCents??0,Qe=Z?.netCents??0,Rt=Ha.get(a.month)??0,cn=Ta.get(a.month)??0,En=Qe<0?"danger":Qe>0?"budget-under":"",dt=R[b-1],ga=dt?.summary.foodCents??null,Oa=dt?.summary.goingOutCents??null,_t=dt?.summary.fixedCents??null,Fn=dt?.summary.variableCents??null,Xn=dt?.summary.miscCents??null,hr=dt?.summary.totalCents??null,pr=dt!==void 0?Ha.get(dt.month)??0:null,fr=dt!==void 0?Ta.get(dt.month)??0:null,vr=o&&dt?Te.get(ge(o.year,dt.month))?.plannedBudgetCents??0:null,mr=ga===null?null:a.summary.foodCents-ga,gr=Oa===null?null:a.summary.goingOutCents-Oa,br=_t===null?null:a.summary.fixedCents-_t,yr=Fn===null?null:a.summary.variableCents-Fn,Cr=Xn===null?null:a.summary.miscCents-Xn,xr=hr===null?null:a.summary.totalCents-hr,kr=pr===null?null:Rt-pr,wr=fr===null?null:cn-fr,$r=vr===null?null:Ee-vr,Fa=Tt=>Tt===null?"muted":Tt>0?"danger":Tt<0?"budget-under":"muted",Sr=Tt=>Tt===null?"muted":Tt>0?"budget-under":Tt<0?"danger":"muted",li=Tt=>Tt===null?"muted":Tt>0?"danger":Tt<0?"budget-under":"muted",Dn=Tt=>Tt===null?"(Δ -)":`(Δ ${Tt>0?"+":""}${f(Tt)})`,Er=o&&dt?Te.get(ge(o.year,dt.month))?.netCents??0:null,Da=Er===null?null:Qe-Er,ci=Da===null?"(Δ -)":`(Δ ${Da>0?"+":""}${f(Da)})`,ui=Da===null?"muted":Da<0?"danger":Da>0?"budget-under":"muted";return`<tr>
                  <td>${Ie(a.month)}</td>
                  <td>${f(a.summary.foodCents)} <span class="${Fa(mr)}">${Dn(mr)}</span></td>
                  <td>${f(a.summary.goingOutCents)} <span class="${Fa(gr)}">${Dn(gr)}</span></td>
                  <td>${f(a.summary.fixedCents)} <span class="${Fa(br)}">${Dn(br)}</span></td>
                  <td>${f(a.summary.variableCents)} <span class="${Fa(yr)}">${Dn(yr)}</span></td>
                  <td>${f(a.summary.miscCents)} <span class="${Fa(Cr)}">${Dn(Cr)}</span></td>
                  <td>${f(a.summary.totalCents)} <span class="${Fa(xr)}">${Dn(xr)}</span></td>
                  <td>${f(Rt)} <span class="${Sr(kr)}">${Dn(kr)}</span></td>
                  <td>${f(cn)} <span class="${Sr(wr)}">${Dn(wr)}</span></td>
                  <td>${f(Ee)} <span class="${li($r)}">${Dn($r)}</span></td>
                  <td class="${En}">${f(Qe)} <span class="${ui}">${ci}</span></td>
                </tr>`}).join("")}
                ${Cs}
                ${Ls}
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
                  <strong>${f(oe)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${f(Ge)} €</strong>
                </div>
                <div class="column-overview-row ${ze}">
                  <span>Übernahme Vormonat</span>
                  <strong>${i?`${f(K)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(vt)} €</strong>
                </div>
                <div class="column-overview-row ${Xe}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${f(mt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${pn(P,u.foodCents)}
                ${pn(O,u.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(Pe)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(We)} €</strong>
                  </div>
                  <div class="column-overview-row ${Re}">
                    <span>Diff</span>
                    <strong>${f(Ne)} €</strong>
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
                  ${i?i.days.map(a=>{const b=a.foodCents>0,R=a.goingOutCents>0,Z=`${a.isoDate===p?"today-row":""} ${b||R?"day-has-entry":""}`.trim(),Ee=`amount-input ${b?"day-input-has-value":""}`.trim(),Qe=`amount-input ${R?"day-input-has-value":""}`.trim();return`<tr class="${Z}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Ee}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${St(a.foodCents)}" /></td>
                      <td><input class="${Qe}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${St(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${pn(A,u.fixedCents)}
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
              ${pn(W,u.variableCents)}
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
              ${pn(V,u.miscCents)}
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
          <p class="muted">Letztes verwendetes Backup: ${r}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),ms(),yt(),De(),pt()}function ms(){const o=B.querySelector("#theme-select"),i=B.querySelector("#open-years-modal"),p=B.querySelector("#open-evaluation-modal"),u=B.querySelector("#open-fixed-modal"),m=B.querySelector("#open-variable-fixed-modal"),$=B.querySelector("#open-dashboard-modal"),P=B.querySelector("#panel-modal-close"),O=B.querySelector("#panel-modal-backdrop"),A=B.querySelector("#open-unexported-change-log"),W=B.querySelector("#open-persistent-audit-log"),V=B.querySelector("#unexported-change-log-close"),Y=B.querySelector("#unexported-change-log-backup"),U=B.querySelector("#unexported-change-log-backdrop"),re=B.querySelector("#persistent-audit-log-close"),xe=B.querySelector("#persistent-audit-log-backdrop"),Je=B.querySelector("#new-year"),oe=B.querySelector("#create-year"),Ge=B.querySelector("#evaluation-query"),qe=B.querySelector("#run-evaluation"),Te=B.querySelector("#save-evaluation"),at=B.querySelector("#year-select"),Ot=B.querySelector("#month-select");o?.addEventListener("change",()=>{const T=o.value;Ar(T)&&Ca(T)}),i?.addEventListener("click",()=>{Zt("years")}),p?.addEventListener("click",()=>{Zt("evaluation")}),u?.addEventListener("click",()=>{Zt("fixed")}),m?.addEventListener("click",()=>{Zt("variable-fixed")}),$?.addEventListener("click",()=>{Zt("dashboard")}),A?.addEventListener("click",()=>{en()}),W?.addEventListener("click",()=>{ct()}),V?.addEventListener("click",()=>{Ct()}),Y?.addEventListener("click",async()=>{try{await In()}catch(T){console.error("Backup-Export fehlgeschlagen",T),ne("Backup konnte nicht exportiert werden.","error")}}),U?.addEventListener("click",T=>{T.target===U&&Ct()}),re?.addEventListener("click",()=>{xt()}),xe?.addEventListener("click",T=>{T.target===xe&&xt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.dashboardTab;N!=="year"&&N!=="food"&&N!=="all"||(h.dashboardTab=N,te())})});const K=B.querySelector("#dashboard-year-select");K?.addEventListener("change",()=>{const T=Number.parseInt(K.value,10);Number.isInteger(T)&&(h.dashboardYear=T,te())}),P?.addEventListener("click",()=>{Nn()}),O?.addEventListener("click",T=>{T.target===O&&Nn()}),h.topModal&&window.setTimeout(()=>{P?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{V?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{re?.focus()},0),oe?.addEventListener("click",async()=>{const T=Number.parseInt(Je?.value??"",10);if(!Number.isInteger(T)){alert("Bitte gültiges Jahr eingeben.");return}await z(T)}),qe?.addEventListener("click",()=>{Ba(Ge?.value??"")}),Ge?.addEventListener("keydown",T=>{T.key==="Enter"&&(T.preventDefault(),Ba(Ge.value))}),Te?.addEventListener("click",async()=>{await Ma()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeSavedEvaluation;N&&await vs(N)})}),at?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(at.value,10),h.selectedMonth=tn(),te()}),Ot?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Ot.value,10),te()});const wt=B.querySelector("#fixed-template-name"),vt=B.querySelector("#fixed-template-amount"),sn=B.querySelector("#add-fixed-template"),mt=B.querySelector("#cancel-fixed-template-edit"),Ce=B.querySelector("#annual-variable-fixed-name"),jt=B.querySelector("#annual-variable-fixed-date"),Le=B.querySelector("#annual-variable-fixed-amount"),ze=B.querySelector("#add-annual-variable-fixed-template");sn?.addEventListener("click",async()=>{const T=wt?.value??"",N=Oe(vt?.value??"0");await mn(T,N),wt&&(wt.value=""),vt&&(vt.value="")}),mt?.addEventListener("click",()=>{gn()}),ze?.addEventListener("click",async()=>{const T=Ce?.value??"",N=jt?.value??"",Mt=Oe(Le?.value??"0");await Ds(T,N,Mt),Ce&&(Ce.value=""),jt&&(jt.value=""),Le&&(Le.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeAnnualVariableFixedTemplate;N&&await bn(N)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(T=>{T.addEventListener("click",()=>{const N=T.dataset.editFixedTemplate;N&&Wn(N)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixedTemplate;N&&await $a(N)})}),B.querySelectorAll("[data-day-food]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayFood;N&&await Va(N,"foodCents",Oe(T.value))})}),B.querySelectorAll("[data-day-going]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.dayGoing;N&&await Va(N,"goingOutCents",Oe(T.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedActual;N&&await Tn(N,Oe(T.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.fixedPlanned;N&&await ls(N,Oe(T.value))})});const Xe=B.querySelector("#fixed-budget");Xe?.addEventListener("click",T=>{T.preventDefault(),Xe.blur(),it(Xe)}),Xe?.addEventListener("change",async()=>{await an(Oe(Xe.value))});const et=B.querySelector("#food-budget");et?.addEventListener("click",T=>{T.preventDefault(),et.blur(),it(et)}),et?.addEventListener("change",async()=>{await cs(Oe(et.value))});const tt=B.querySelector("#going-out-budget");tt?.addEventListener("click",T=>{T.preventDefault(),tt.blur(),it(tt)}),tt?.addEventListener("change",async()=>{await Gn(Oe(tt.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{_s()});const Ft=B.querySelector("#misc-budget");Ft?.addEventListener("click",T=>{T.preventDefault(),Ft.blur(),it(Ft)}),Ft?.addEventListener("change",async()=>{await Sa(Oe(Ft.value))});const Dt=B.querySelector("#variable-budget");Dt?.addEventListener("click",T=>{T.preventDefault(),Dt.blur(),it(Dt)}),Dt?.addEventListener("change",async()=>{await Ya(Oe(Dt.value))});const Lt=B.querySelector("#variable-position-name"),gt=B.querySelector("#variable-position-budget"),Cn=B.querySelector("#add-variable-position"),ke=B.querySelector("#add-variable-position-recurring"),Pe=B.querySelector("#import-variable-csv"),We=B.querySelector("#import-variable-csv-input"),Ne=B.querySelector("#misc-description"),Re=B.querySelector("#misc-amount"),rn=B.querySelector("#add-misc"),on=B.querySelector("#add-misc-recurring"),xn=B.querySelector("#import-misc-csv"),Ae=B.querySelector("#import-misc-csv-input"),me=B.querySelector("#income-description"),st=B.querySelector("#income-source"),Nt=B.querySelector("#income-amount"),On=B.querySelector("#add-income"),ue=B.querySelector("#add-income-recurring"),kn=B.querySelector("#fixed-cost-name"),Kt=B.querySelector("#fixed-cost-budget"),ln=B.querySelector("#add-fixed-cost"),Ut=B.querySelector("#import-fixed-csv"),wn=B.querySelector("#import-fixed-csv-input"),da=B.querySelector("#clear-fixed-costs"),nt=B.querySelector("#carryover-override");nt?.addEventListener("click",T=>{T.preventDefault(),nt.blur(),it(nt)}),nt?.addEventListener("change",async()=>{const T=nt.value;if(!T.trim()){await yn(null);return}await yn(Oe(T))}),ln?.addEventListener("click",async()=>{const T=Oe(Kt?.value??"0");await ja(kn?.value??"",T),kn&&(kn.value=""),Kt&&(Kt.value="")}),Ut?.addEventListener("click",()=>{wn?.click()}),wn?.addEventListener("change",async()=>{const T=wn.files?.[0];if(T){try{await hs(T)}catch(N){console.error("Fixkosten-CSV-Import fehlgeschlagen",N),ne("CSV konnte nicht importiert werden.","error")}wn.value=""}}),da?.addEventListener("click",async()=>{await Pn()}),Cn?.addEventListener("click",async()=>{const T=Oe(gt?.value??"0");await za(Lt?.value??"",T,!1),Lt&&(Lt.value=""),gt&&(gt.value="")}),ke?.addEventListener("click",async()=>{const T=Oe(gt?.value??"0");await za(Lt?.value??"",T,!0),Lt&&(Lt.value=""),gt&&(gt.value="")}),Pe?.addEventListener("click",()=>{We?.click()}),We?.addEventListener("change",async()=>{const T=We.files?.[0];if(T){try{await ps(T)}catch(N){console.error("Variable-CSV-Import fehlgeschlagen",N),ne("CSV konnte nicht importiert werden.","error")}We.value=""}}),rn?.addEventListener("click",async()=>{const T=Oe(Re?.value??"0");await Wa(Ne?.value??"",T,!1),Ne&&(Ne.value=""),Re&&(Re.value="")}),on?.addEventListener("click",async()=>{const T=Oe(Re?.value??"0");await Wa(Ne?.value??"",T,!0),Ne&&(Ne.value=""),Re&&(Re.value="")}),xn?.addEventListener("click",()=>{Ae?.click()}),Ae?.addEventListener("change",async()=>{const T=Ae.files?.[0];if(T){try{await la(T)}catch(N){console.error("Sonstiges-CSV-Import fehlgeschlagen",N),ne("CSV konnte nicht importiert werden.","error")}Ae.value=""}}),On?.addEventListener("click",async()=>{const T=Oe(Nt?.value??"0"),N=st?.value,Mt=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await _e(me?.value??"",T,Mt,!1),me&&(me.value=""),Nt&&(Nt.value=""),st&&(st.value="salary")}),ue?.addEventListener("click",async()=>{const T=Oe(Nt?.value??"0"),N=st?.value,Mt=N==="balance"||N==="fresh"||N==="salary"?N:void 0;await _e(me?.value??"",T,Mt,!0),me&&(me.value=""),Nt&&(Nt.value=""),st&&(st.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(T=>{T.addEventListener("change",async()=>{const N=T.dataset.incomeSource;if(!N)return;const Mt=T.value;await ca(N,Mt==="balance"||Mt==="fresh"||Mt==="salary"?Mt:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionBudget;N&&await us(N,Oe(T.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(T=>{T.addEventListener("click",N=>{N.preventDefault(),T.blur(),it(T)}),T.addEventListener("change",async()=>{const N=T.dataset.variablePositionActual;N&&await Ea(N,Oe(T.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeVariablePosition;N&&await ve(N)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.moveVariablePositionNext;N&&await ds(N)})}),B.querySelectorAll("[data-remove-fixed]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeFixed;N&&await He(N)})}),B.querySelectorAll("[data-remove-income]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeIncome;N&&await ua(N)})}),B.querySelectorAll("[data-remove-misc]").forEach(T=>{T.addEventListener("click",async()=>{const N=T.dataset.removeMisc;N&&await fs(N)})});const $t=B.querySelector("#backup-export"),bt=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),$t?.addEventListener("click",async()=>{await In()}),bt?.addEventListener("change",async()=>{const T=bt.files?.[0];if(T){try{await Ga(T)}catch(N){console.error("Backup-Import fehlgeschlagen",N),ne("Backup konnte nicht importiert werden.","error")}bt.value=""}})}return{init:Is}}const Bi="modulepreload",Mi=function(B){return"/habu26/"+B},Or={},_i=function(h,$e,Q){let pe=Promise.resolve();if($e&&$e.length>0){let Ze=function(je){return Promise.all(je.map(ce=>Promise.resolve(ce).then(lt=>({status:"fulfilled",value:lt}),lt=>({status:"rejected",reason:lt}))))};var ye=Ze;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),fe=ie?.nonce||ie?.getAttribute("nonce");pe=Ze($e.map(je=>{if(je=Mi(je),je in Or)return;Or[je]=!0;const ce=je.endsWith(".css"),lt=ce?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${je}"]${lt}`))return;const rt=document.createElement("link");if(rt.rel=ce?"stylesheet":Bi,ce||(rt.as="script"),rt.crossOrigin="",rt.href=je,fe&&rt.setAttribute("nonce",fe),document.head.appendChild(rt),ce)return new Promise((De,yt)=>{rt.addEventListener("load",De),rt.addEventListener("error",()=>yt(new Error(`Unable to preload CSS for ${je}`)))})}))}function se(ie){const fe=new Event("vite:preloadError",{cancelable:!0});if(fe.payload=ie,window.dispatchEvent(fe),!fe.defaultPrevented)throw ie}return pe.then(ie=>{for(const fe of ie||[])fe.status==="rejected"&&se(fe.reason);return h().catch(se)})};function Ti(B={}){const{immediate:h=!1,onNeedRefresh:$e,onOfflineReady:Q,onRegistered:pe,onRegisteredSW:se,onRegisterError:ye}=B;let ie,fe;const Ze=async(ce=!0)=>{await fe};async function je(){if("serviceWorker"in navigator){if(ie=await _i(async()=>{const{Workbox:ce}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:ce}},[]).then(({Workbox:ce})=>new ce("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(ce=>{ye?.(ce)}),!ie)return;ie.addEventListener("activated",ce=>{(ce.isUpdate||ce.isExternal)&&window.location.reload()}),ie.addEventListener("installed",ce=>{ce.isUpdate||Q?.()}),ie.register({immediate:h}).then(ce=>{se?se("/habu26/sw.js",ce):pe?.(ce)}).catch(ce=>{ye?.(ce)})}}return fe=je(),Ze}function Pi(){Ti({immediate:!0})}const Dr=document.getElementById("app");if(!Dr)throw new Error("App-Container nicht gefunden.");Ei(Dr).init();Pi();
