(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const ye of document.querySelectorAll('link[rel="modulepreload"]'))U(ye);new MutationObserver(ye=>{for(const se of ye)if(se.type==="childList")for(const ke of se.addedNodes)ke.tagName==="LINK"&&ke.rel==="modulepreload"&&U(ke)}).observe(document,{childList:!0,subtree:!0});function Oe(ye){const se={};return ye.integrity&&(se.integrity=ye.integrity),ye.referrerPolicy&&(se.referrerPolicy=ye.referrerPolicy),ye.crossOrigin==="use-credentials"?se.credentials="include":ye.crossOrigin==="anonymous"?se.credentials="omit":se.credentials="same-origin",se}function U(ye){if(ye.ep)return;ye.ep=!0;const se=Oe(ye);fetch(ye.href,se)}})();const ei=[1,2,3,4,5,6,7,8,9,10,11,12];function Vs(){return new Date().toISOString()}function Tt(P){const p=Math.random().toString(36).slice(2,10);return`${P}_${Date.now()}_${p}`}function ti(P,p){const Oe=new Date(P,p,0).getDate(),U=[];for(let ye=1;ye<=Oe;ye+=1){const se=new Date(Date.UTC(P,p-1,ye));U.push({isoDate:se.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return U}function ni(P){return P.map(p=>({id:Tt("fixed"),templateId:p.id,name:p.name,plannedCents:p.plannedCents,actualCents:0}))}function yr(P,p,Oe){const U=p.reduce((se,ke)=>se+ke.plannedCents,0),ye=ei.map(se=>({month:se,days:ti(P,se),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:ni(p),fixedBudgetCents:U,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:P,createdAt:Vs(),templateVersion:Oe,months:ye}}function Cr(P,p){return{id:Tt("expense"),description:P,amountCents:p,createdAt:Vs()}}function xr(P,p,Oe){const U={id:Tt("income"),description:P,amountCents:p,createdAt:Vs()};return Oe?{...U,incomeSource:Oe}:U}var ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function si(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var ys={exports:{}},ri=ys.exports,kr;function ii(){return kr||(kr=1,(function(P,p){((Oe,U)=>{P.exports=U()})(ri,function(){var Oe=function(e,t){return(Oe=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},U=function(){return(U=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function ye(e,t,n){for(var s,r=0,i=t.length;r<i;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ai,ke=Object.keys,ie=Array.isArray;function Ce(e,t){return typeof t=="object"&&ke(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||se.Promise||(se.Promise=Promise);var pt=Object.getPrototypeOf,He={}.hasOwnProperty;function le(e,t){return He.call(e,t)}function xt(e,t){typeof t=="function"&&(t=t(pt(e))),(typeof Reflect>"u"?ke:Reflect.ownKeys)(t).forEach(function(n){mt(e,n,t[n])})}var vt=Object.defineProperty;function mt(e,t,n,s){vt(e,t,Ce(n&&le(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function on(e){return{from:function(t){return e.prototype=Object.create(t.prototype),mt(e.prototype,"constructor",e),{extend:xt.bind(null,e.prototype)}}}}var ea=Object.getOwnPropertyDescriptor,_a=[].slice;function ta(e,t,n){return _a.call(e,t,n)}function na(e,t){return t(e)}function Nn(e){if(!e)throw new Error("Assertion Failed")}function aa(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Gt(e,t){if(typeof t=="string"&&le(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var i=Gt(e,t[s]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:Gt(c,t.substr(u+1))}function gt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Nn(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)gt(e,t[s],n[s])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:gt(c=(c=e[i])&&le(e,i)?c:e[i]={},u,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ma(e){var t,n={};for(t in e)le(e,t)&&(n[t]=e[t]);return n}var ks=[].concat;function Pa(e){return ks.apply([],e)}var qt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Pa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),Xa=new Set(qt.map(function(e){return se[e]})),Ln=null;function bt(e){return Ln=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=Ln.get(n);if(s)return s;if(ie(n)){s=[],Ln.set(n,s);for(var r=0,i=n.length;r<i;++r)s.push(t(n[r]))}else if(Xa.has(n.constructor))s=n;else{var c,u=pt(n);for(c in s=u===Object.prototype?{}:Object.create(u),Ln.set(n,s),n)le(n,c)&&(s[c]=t(n[c]))}return s})(e),Ln=null,e}var Kn={}.toString;function Ta(e){return Kn.call(e).slice(8,-1)}var Aa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ws=typeof Aa=="symbol"?function(e){var t;return e!=null&&(t=e[Aa])&&t.apply(e)}:function(){return null};function ln(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var tt={};function me(e){var t,n,s,r;if(arguments.length===1){if(ie(e))return e.slice();if(this===tt&&typeof e=="string")return[e];if(r=ws(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var mn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},qt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],nt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(qt),Qa={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function gn(e,t){this.name=e,this.message=t}function Za(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function Et(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=Za(e,t)}function Bn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Za(e,this.failures)}on(gn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),on(Et).from(gn),on(Bn).from(gn);var sa=nt.reduce(function(e,t){return e[t]=t+"Error",e},{}),$s=gn,Z=nt.reduce(function(e,t){var n=t+"Error";function s(r,i){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(i?`
 `+i:""),this.inner=i||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=Qa[t]||n,this.inner=null)}return on(s).from($s),e[t]=s,e},{}),es=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,qt.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));qt=nt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function we(){}function qn(e){return e}function Ss(e,t){return e==null||e===qn?t:function(n){return t(e(n))}}function bn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ts(e,t){return e===we?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?bn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?bn(r,this.onerror):r),i!==void 0?i:n}}function Es(e,t){return e===we?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?bn(n,this.onsuccess):n),s&&(this.onerror=this.onerror?bn(s,this.onerror):s)}}function Bs(e,t){return e===we?t:function(r){var s=e.apply(this,arguments),r=(Ce(r,s),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?bn(r,this.onsuccess):r),i&&(this.onerror=this.onerror?bn(i,this.onerror):i),s===void 0?c===void 0?void 0:c:Ce(s,c)}}function Oa(e,t){return e===we?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function jn(e,t){return e===we?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,i=new Array(r);r--;)i[r]=arguments[r];return n.then(function(){return t.apply(s,i)})}return t.apply(this,arguments)}}qt.ModifyError=Et,qt.DexieError=gn,qt.BulkError=Bn;var yt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ia(e){yt=e}var Ut={},je=100,Rn=typeof Promise>"u"?[]:(nt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Rn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),pt(Rn),nt]:[nt,pt(nt),nt]),nt=Rn[0],Fn=Rn[1],Fn=Fn&&Fn.then,jt=nt&&nt.constructor,_n=!!Rn[2],Vn=function(e,t){Rt.push([e,t]),Mn&&(queueMicrotask(La),Mn=!1)},Yn=!0,Mn=!0,cn=[],Pn=[],Fa=qn,Re={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:we,pgp:!1,env:{},finalize:we},X=Re,Rt=[],At=0,ra=[];function Y(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=X;if(typeof e!="function"){if(e!==Ut)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Xe(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(i){if(s._state===null){if(i===s)throw new TypeError("A promise cannot be resolved with itself.");var c=s._lib&&yn();i&&typeof i.then=="function"?n(s,function(u,b){i instanceof Y?i._then(u,b):i.then(u,b)}):(s._state=!0,s._value=i,Bt(s)),c&&un()}},Xe.bind(null,s))}catch(i){Xe(s,i)}})(this,e)}var Da={get:function(){var e=X,t=ca;function n(s,r){var i=this,c=!e.global&&(e!==X||t!==ca),u=c&&!hn(),b=new Y(function($,y){pe(i,new Na(ss(s,e,c,u),ss(r,e,c,u),$,y,e))});return this._consoleTask&&(b._consoleTask=this._consoleTask),b}return n.prototype=Ut,n},set:function(e){mt(this,"then",e&&e.prototype===Ut?Da:{get:function(){return e},set:Da.set})}};function Na(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function Xe(e,t){var n,s;Pn.push(t),e._state===null&&(n=e._lib&&yn(),t=Fa(t),e._state=!1,e._value=t,s=e,cn.some(function(r){return r._value===s._value})||cn.push(s),Bt(e),n)&&un()}function Bt(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)pe(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),At===0&&(++At,Vn(function(){--At==0&&ia()},[]))}function pe(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++At,Vn(Tn,[n,e,t])}}function Tn(e,t,n){try{var s,r=t._value;!t._state&&Pn.length&&(Pn=[]),s=yt&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||Pn.indexOf(r)!==-1||(i=>{for(var c=cn.length;c;)if(cn[--c]._value===i._value)return cn.splice(c,1)})(t),n.resolve(s)}catch(i){n.reject(i)}finally{--At==0&&ia(),--n.psd.ref||n.psd.finalize()}}function La(){Cn(Re,function(){yn()&&un()})}function yn(){var e=Yn;return Mn=Yn=!1,e}function un(){var e,t,n;do for(;0<Rt.length;)for(e=Rt,Rt=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<Rt.length);Mn=Yn=!0}function ia(){for(var e=cn,t=(cn=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),ra.slice(0)),n=t.length;n;)t[--n]()}function Ot(e){return new Y(Ut,!1,e)}function ge(e,t){var n=X;return function(){var s=yn(),r=X;try{return Jt(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Jt(r,!1),s&&un()}}}xt(Y.prototype,{then:Da,_then:function(e,t){pe(this,new Na(null,null,e,t,X))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:Ot)(s)}):this.then(null,function(s){return(s&&s.name===t?n:Ot)(s)}))},finally:function(e){return this.then(function(t){return Y.resolve(e()).then(function(){return t})},function(t){return Y.resolve(e()).then(function(){return Ot(t)})})},timeout:function(e,t){var n=this;return e<1/0?new Y(function(s,r){var i=setTimeout(function(){return r(new Z.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&mt(Y.prototype,Symbol.toStringTag,"Dexie.Promise"),Re.env=as(),xt(Y,{all:function(){var e=me.apply(null,arguments).map(ua);return new Y(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,i){return Y.resolve(r).then(function(c){e[i]=c,--s||t(e)},n)})})},resolve:function(e){return e instanceof Y?e:e&&typeof e.then=="function"?new Y(function(t,n){e.then(t,n)}):new Y(Ut,!0,e)},reject:Ot,race:function(){var e=me.apply(null,arguments).map(ua);return new Y(function(t,n){e.map(function(s){return Y.resolve(s).then(t,n)})})},PSD:{get:function(){return X},set:function(e){return X=e}},totalEchoes:{get:function(){return ca}},newPSD:dn,usePSD:Cn,scheduler:{get:function(){return Vn},set:function(e){Vn=e}},rejectionMapper:{get:function(){return Fa},set:function(e){Fa=e}},follow:function(e,t){return new Y(function(n,s){return dn(function(r,i){var c=X;c.unhandleds=[],c.onunhandled=i,c.finalize=bn(function(){var u,b=this;u=function(){b.unhandleds.length===0?r():i(b.unhandleds[0])},ra.push(function $(){u(),ra.splice(ra.indexOf($),1)}),++At,Vn(function(){--At==0&&ia()},[])},c.finalize),e()},t,n,s)})}}),jt&&(jt.allSettled&&mt(Y,"allSettled",function(){var e=me.apply(null,arguments).map(ua);return new Y(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,i){return Y.resolve(r).then(function(c){return s[i]={status:"fulfilled",value:c}},function(c){return s[i]={status:"rejected",reason:c}}).then(function(){return--n||t(s)})})})}),jt.any&&typeof AggregateError<"u"&&mt(Y,"any",function(){var e=me.apply(null,arguments).map(ua);return new Y(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(i,c){return Y.resolve(i).then(function(u){return t(u)},function(u){r[c]=u,--s||n(new AggregateError(r))})})})}),jt.withResolvers)&&(Y.withResolvers=jt.withResolvers);var Qe={awaits:0,echoes:0,id:0},ns=0,oa=[],la=0,ca=0,_s=0;function dn(e,c,n,s){var r=X,i=Object.create(r),c=(i.parent=r,i.ref=0,i.global=!1,i.id=++_s,Re.env,i.env=_n?{Promise:Y,PromiseProp:{value:Y,configurable:!0,writable:!0},all:Y.all,race:Y.race,allSettled:Y.allSettled,any:Y.any,resolve:Y.resolve,reject:Y.reject}:{},c&&Ce(i,c),++r.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},Cn(i,e,n,s));return i.ref===0&&i.finalize(),c}function An(){return Qe.id||(Qe.id=++ns),++Qe.awaits,Qe.echoes+=je,Qe.id}function hn(){return!!Qe.awaits&&(--Qe.awaits==0&&(Qe.id=0),Qe.echoes=Qe.awaits*je,!0)}function ua(e){return Qe.echoes&&e&&e.constructor===jt?(An(),e.then(function(t){return hn(),t},function(t){return hn(),Ve(t)})):e}function Ms(){var e=oa[oa.length-1];oa.pop(),Jt(e,!1)}function Jt(e,t){var n,s,r=X;(t?!Qe.echoes||la++&&e===X:!la||--la&&e===X)||queueMicrotask(t?(function(i){++ca,Qe.echoes&&--Qe.echoes!=0||(Qe.echoes=Qe.awaits=Qe.id=0),oa.push(X),Jt(i,!0)}).bind(null,e):Ms),e!==X&&(X=e,r===Re&&(Re.env=as()),_n)&&(n=Re.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(se,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function as(){var e=se.Promise;return _n?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Cn(e,t,n,s,r){var i=X;try{return Jt(e,!0),t(n,s,r)}finally{Jt(i,!1)}}function ss(e,t,n,s){return typeof e!="function"?e:function(){var r=X;n&&An(),Jt(t,!0);try{return e.apply(this,arguments)}finally{Jt(r,!1),s&&queueMicrotask(hn)}}}function Ka(e){Promise===jt&&Qe.echoes===0?la===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Fn).indexOf("[native code]")===-1&&(An=hn=we);var Ve=Y.reject,xn="￿",Ht="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",rs="String expected.",On=[],pn="__dbnames",da="readonly",ha="readwrite";function kn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var is={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function pa(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=bt(t))[e],t}}function os(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function he(e,t){try{var n=ls(e),s=ls(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=qa(e),i=qa(t),c=r.length,u=i.length,b=c<u?c:u,$=0;$<b;++$)if(r[$]!==i[$])return r[$]<i[$]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var y=e,v=t,x=y.length,w=v.length,g=x<w?x:w,m=0;m<g;++m){var B=he(y[m],v[m]);if(B!==0)return B}return x===w?0:x<w?-1:1}}catch{}return NaN}function ls(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ta(e))==="ArrayBuffer")?"binary":t}function qa(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function fa(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,i){return!n.failures[i]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}ja.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return ye(ye([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(ie(s))return ie(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var zn=ja;function ja(e){this["@@propmod"]=e}function cs(e,t){for(var n=ke(t),s=n.length,r=!1,i=0;i<s;++i){var c=n[i],u=t[c],b=Gt(e,c);u instanceof zn?(gt(e,c,u.execute(b)),r=!0):b!==u&&(gt(e,c,u),r=!0)}return r}_e.prototype._trans=function(e,t,n){var s=this._tx||X.trans,r=this.name,i=yt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c($,y,v){if(v.schema[r])return t(v.idbtrans,v);throw new Z.NotFound("Table "+r+" not part of transaction")}var u=yn();try{var b=s&&s.db._novip===this.db._novip?s===X.trans?s._promise(e,c,n):dn(function(){return s._promise(e,c,n)},{trans:s,transless:X.transless||X}):(function $(y,v,x,w){if(y.idbdb&&(y._state.openComplete||X.letThrough||y._vip)){var g=y._createTransaction(v,x,y._dbSchema);try{g.create(),y._state.PR1398_maxLoop=3}catch(m){return m.name===sa.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return $(y,v,x,w)})):Ve(m)}return g._promise(v,function(m,B){return dn(function(){return X.trans=g,w(m,B,g)})}).then(function(m){if(v==="readwrite")try{g.idbtrans.commit()}catch{}return v==="readonly"?m:g._completion.then(function(){return m})})}if(y._state.openComplete)return Ve(new Z.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Ve(new Z.DatabaseClosed);y.open().catch(we)}return y._state.dbReadyPromise.then(function(){return $(y,v,x,w)})})(this.db,e,[this.name],c);return i&&(b._consoleTask=i,b=b.catch(function($){return console.trace($),Ve($)})),b}finally{u&&un()}},_e.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ve(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},_e.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=ke(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function($){return 0<=u.keyPath.indexOf($)})){for(var b=0;b<t.length;++b)if(t.indexOf(u.keyPath[b])===-1)return!1;return!0}return!1}).sort(function(u,b){return u.keyPath.length-b.keyPath.length})[0];if(n&&this.db._maxKey!==xn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&yt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(u,b){return he(u,b)===0}var c=t.reduce(function(y,b){var $=y[0],y=y[1],v=s[b],x=e[b];return[$||v,$||!v?kn(y,v&&v.multi?function(w){return w=Gt(w,b),ie(w)&&w.some(function(g){return r(x,g)})}:function(w){return r(x,Gt(w,b))}):y]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},_e.prototype.filter=function(e){return this.toCollection().and(e)},_e.prototype.count=function(e){return this.toCollection().count(e)},_e.prototype.offset=function(e){return this.toCollection().offset(e)},_e.prototype.limit=function(e){return this.toCollection().limit(e)},_e.prototype.each=function(e){return this.toCollection().each(e)},_e.prototype.toArray=function(e){return this.toCollection().toArray(e)},_e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},_e.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},_e.prototype.reverse=function(){return this.toCollection().reverse()},_e.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof os&&(e=(c=>{var u=y,b=c;if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function $(){this.constructor=u}function y(){return c!==null&&c.apply(this,arguments)||this}return Oe(u,b),u.prototype=b===null?Object.create(b):($.prototype=b.prototype,new $),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),r=e.prototype;r;r=pt(r))Object.getOwnPropertyNames(r).forEach(function(c){return s.add(c)});function i(c){if(!c)return c;var u,b=Object.create(e.prototype);for(u in c)if(!s.has(u))try{b[u]=c[u]}catch{}return b}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},_e.prototype.defineClass=function(){return this.mapToClass(function(e){Ce(this,e)})},_e.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=pa(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},_e.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(i){var c=i??{};return cs(c,t),s&&gt(c,s,e),n.core.mutate({trans:r,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):!!i})})})},_e.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=Gt(e,this.schema.primKey.keyPath))===void 0?Ve(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},_e.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,i=s.keyPath,c=e;return i&&r&&(c=pa(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},_e.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return fa(t,[e],s)}).then(function(s){return s.numFailures?Y.reject(s.failures[0]):void 0})})},_e.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:is}).then(function(n){return fa(e,null,n)})}).then(function(t){return t.numFailures?Y.reject(t.failures[0]):void 0})},_e.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},_e.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,i=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=s.schema.primKey,$=u.auto,u=u.keyPath;if(u&&r)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,$=u&&$?e.map(pa(u)):e;return s.core.mutate({trans:c,type:"add",keys:r,values:$,wantResults:i}).then(function(y){var v=y.numFailures,x=y.failures;if(v===0)return i?y.results:y.lastResult;throw new Bn("".concat(s.name,".bulkAdd(): ").concat(v," of ").concat(b," operations failed"),x)})})},_e.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,i=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=s.schema.primKey,$=u.auto,u=u.keyPath;if(u&&r)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,$=u&&$?e.map(pa(u)):e;return s.core.mutate({trans:c,type:"put",keys:r,values:$,wantResults:i}).then(function(y){var v=y.numFailures,x=y.failures;if(v===0)return i?y.results:y.lastResult;throw new Bn("".concat(s.name,".bulkPut(): ").concat(v," of ").concat(b," operations failed"),x)})})},_e.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(c){return c.key}),r=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:s,cache:"clone"}).then(function(u){var b=[],$=[],y=(e.forEach(function(v,x){var w=v.key,g=v.changes,m=u[x];if(m){for(var B=0,E=Object.keys(g);B<E.length;B++){var S=E[B],T=g[S];if(S===t.schema.primKey.keyPath){if(he(T,w)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else gt(m,S,T)}i.push(x),b.push(w),$.push(m)}}),b.length);return n.mutate({trans:c,type:"put",keys:b,values:$,updates:{keys:s,changeSpecs:r}}).then(function(v){var x=v.numFailures,w=v.failures;if(x===0)return y;for(var g=0,m=Object.keys(w);g<m.length;g++){var B,E=m[g],S=i[Number(E)];S!=null&&(B=w[E],delete w[E],w[S]=B)}throw new Bn("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(y," operations failed"),w)})})})},_e.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return fa(t,e,r)})}).then(function(s){var r=s.numFailures,i=s.failures;if(r===0)return s.lastResult;throw new Bn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),i)})};var ae=_e;function _e(){}function o(e){function t(c,u){if(u){for(var b=arguments.length,$=new Array(b-1);--b;)$[b-1]=arguments[b];return n[c].subscribe.apply(null,$),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var s=1,r=arguments.length;s<r;++s)i(arguments[s]);return t;function i(c,u,b){var $,y;if(typeof c!="object")return u=u||Oa,y={subscribers:[],fire:b=b||we,subscribe:function(v){y.subscribers.indexOf(v)===-1&&(y.subscribers.push(v),y.fire=u(y.fire,v))},unsubscribe:function(v){y.subscribers=y.subscribers.filter(function(x){return x!==v}),y.fire=y.subscribers.reduce(u,b)}},n[c]=t[c]=y;ke($=c).forEach(function(v){var x=$[v];if(ie(x))i(v,$[v][0],$[v][1]);else{if(x!=="asap")throw new Z.InvalidArgument("Invalid event config");var w=i(v,qn,function(){for(var g=arguments.length,m=new Array(g);g--;)m[g]=arguments[g];w.subscribers.forEach(function(B){aa(function(){B.apply(null,m)})})})}})}}function l(e,t){return on(t).from({prototype:e}),t}function h(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function d(e,t){e.filter=kn(e.filter,t)}function C(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return kn(s(),t())}:t,e.justLimit=n&&!s}function M(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function O(e,t,n){var s=M(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function N(e,t,n,s){var r,i,c=e.replayFilter?kn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},i=function(u,b,$){var y,v;c&&!c(b,$,function(x){return b.stop(x)},function(x){return b.fail(x)})||((v=""+(y=b.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(y)),le(r,v))||(r[v]=!0,t(u,b,$))},Promise.all([e.or._iterate(i,n),L(O(e,s,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):L(O(e,s,n),kn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function L(e,t,n,s){var r=ge(s?function(i,c,u){return n(s(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=we},function(u){i.fail(u),c=we})||r(i.value,i,function(u){return c=u}),c()})})}I.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ve.bind(null,n.error)):n.table._trans("readonly",e).then(t)},I.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ve.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},I.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=kn(t.algorithm,e)},I.prototype._iterate=function(e,t){return N(this._ctx,e,t,this._ctx.table.core)},I.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&Ce(n,e),t._ctx=n,t},I.prototype.raw=function(){return this._ctx.valueMapper=null,this},I.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return N(t,e,n,t.table.core)})},I.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,i=r.table.core;return h(r,!0)?i.count({trans:n,query:{index:M(r,i.schema),range:r.range}}).then(function(c){return Math.min(c,r.limit)}):(s=0,N(r,function(){return++s,!1},n,i).then(function(){return s}))}).then(e)},I.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function i(b,$){return $?i(b[n[$]],$-1):b[s]}var c=this._ctx.dir==="next"?1:-1;function u(b,$){return he(i(b,r),i($,r))*c}return this.toArray(function(b){return b.sort(u)}).then(t)},I.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,i,c=t._ctx;return c.dir==="next"&&h(c,!0)&&0<c.limit?(s=c.valueMapper,r=M(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:r,range:c.range}}).then(function(u){return u=u.result,s?u.map(s):u})):(i=[],N(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},I.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,h(t)?C(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):C(t,function(){var n=e;return function(){return--n<0}})),this},I.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),C(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},I.prototype.until=function(e,t){return d(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},I.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},I.prototype.last=function(e){return this.reverse().first(e)},I.prototype.filter=function(e){var t;return d(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=kn(t.isMatch,e),this},I.prototype.and=function(e){return this.filter(e)},I.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},I.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},I.prototype.desc=function(){return this.reverse()},I.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},I.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},I.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},I.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},I.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&h(t,!0)&&0<t.limit)return this._read(function(s){var r=M(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},I.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},I.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},I.prototype.lastKey=function(e){return this.reverse().firstKey(e)},I.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},d(this._ctx,function(s){var s=s.primaryKey.toString(),r=le(e,s);return e[s]=!0,!r})),this},I.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(m,B){var E=B.failures;x+=m-B.numFailures;for(var S=0,T=ke(E);S<T.length;S++){var F=T[S];v.push(E[F])}}var i=typeof e=="function"?e:function(m){return cs(m,e)},c=n.table.core,y=c.schema.primaryKey,u=y.outbound,b=y.extractKey,$=200,y=t.db._options.modifyChunkSize,v=(y&&($=typeof y=="object"?y[c.name]||y["*"]||200:y),[]),x=0,w=[],g=e===Q;return t.clone().primaryKeys().then(function(m){function B(S){var T=Math.min($,m.length-S),F=m.slice(S,S+T);return(g?Promise.resolve([]):c.getMany({trans:s,keys:F,cache:"immutable"})).then(function(R){var V=[],A=[],z=u?[]:null,W=g?F:[];if(!g)for(var D=0;D<T;++D){var G=R[D],ue={value:bt(G),primKey:m[S+D]};i.call(ue,ue.value,ue)!==!1&&(ue.value==null?W.push(m[S+D]):u||he(b(G),b(ue.value))===0?(A.push(ue.value),u&&z.push(m[S+D])):(W.push(m[S+D]),V.push(ue.value)))}return Promise.resolve(0<V.length&&c.mutate({trans:s,type:"add",values:V}).then(function(ve){for(var ee in ve.failures)W.splice(parseInt(ee),1);r(V.length,ve)})).then(function(){return(0<A.length||E&&typeof e=="object")&&c.mutate({trans:s,type:"put",keys:z,values:A,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(ve){return r(A.length,ve)})}).then(function(){return(0<W.length||E&&g)&&c.mutate({trans:s,type:"delete",keys:W,criteria:E,isAdditionalChunk:0<S}).then(function(ve){return fa(n.table,W,ve)}).then(function(ve){return r(W.length,ve)})}).then(function(){return m.length>S+T&&B(S+$)})})}var E=h(n)&&n.limit===1/0&&(typeof e!="function"||g)&&{index:n.index,range:n.range};return B(0).then(function(){if(0<v.length)throw new Et("Error modifying one or more objects",v,x,w);return m.length})})})},I.prototype.delete=function(){var e=this._ctx,t=e.range;return!h(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Q):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(b){var u=b.failures,b=b.numFailures;if(b)throw new Et("Could not delete some values",Object.keys(u).map(function($){return u[$]}),i-b);return i-b})})})};var J=I;function I(){}var Q=function(e,t){return t.value=null};function ne(e,t){return e<t?-1:e===t?0:1}function be(e,t){return t<e?-1:e===t?0:1}function de(e,t,n){return e=e instanceof Ee?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Ae(e){return new e.Collection(e,function(){return at("")}).limit(0)}function ce(w,t,n,s){var r,i,c,u,b,$,y,v=n.length;if(!n.every(function(m){return typeof m=="string"}))return de(w,rs);function x(m){r=m==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},i=m==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},c=m==="next"?ne:be;var B=n.map(function(E){return{lower:i(E),upper:r(E)}}).sort(function(E,S){return c(E.lower,S.lower)});u=B.map(function(E){return E.upper}),b=B.map(function(E){return E.lower}),y=($=m)==="next"?"":s}x("next");var w=new w.Collection(w,function(){return Se(u[0],b[v-1]+s)}),g=(w._ondirectionchange=function(m){x(m)},0);return w._addAlgorithm(function(m,B,E){var S=m.key;if(typeof S=="string"){var T=i(S);if(t(T,b,g))return!0;for(var F=null,R=g;R<v;++R){var V=((A,z,W,D,G,ue)=>{for(var ve=Math.min(A.length,D.length),ee=-1,oe=0;oe<ve;++oe){var De=z[oe];if(De!==D[oe])return G(A[oe],W[oe])<0?A.substr(0,oe)+W[oe]+W.substr(oe+1):G(A[oe],D[oe])<0?A.substr(0,oe)+D[oe]+W.substr(oe+1):0<=ee?A.substr(0,ee)+z[ee]+W.substr(ee+1):null;G(A[oe],De)<0&&(ee=oe)}return ve<D.length&&ue==="next"?A+W.substr(A.length):ve<A.length&&ue==="prev"?A.substr(0,W.length):ee<0?null:A.substr(0,ee)+D[ee]+W.substr(ee+1)})(S,T,u[R],b[R],c,$);V===null&&F===null?g=R+1:(F===null||0<c(F,V))&&(F=V)}B(F!==null?function(){m.continue(F+y)}:E)}return!1}),w}function Se(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function at(e){return{type:1,lower:e,upper:e}}Object.defineProperty(fe.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),fe.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?Ae(this):new this.Collection(this,function(){return Se(e,t,!n,!s)})}catch{return de(this,Ht)}},fe.prototype.equals=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return at(e)})},fe.prototype.above=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return Se(e,void 0,!0)})},fe.prototype.aboveOrEqual=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return Se(e,void 0,!1)})},fe.prototype.below=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return Se(void 0,e,!1,!0)})},fe.prototype.belowOrEqual=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return Se(void 0,e)})},fe.prototype.startsWith=function(e){return typeof e!="string"?de(this,rs):this.between(e,e+xn,!0,!0)},fe.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):ce(this,function(t,n){return t.indexOf(n[0])===0},[e],xn)},fe.prototype.equalsIgnoreCase=function(e){return ce(this,function(t,n){return t===n[0]},[e],"")},fe.prototype.anyOfIgnoreCase=function(){var e=me.apply(tt,arguments);return e.length===0?Ae(this):ce(this,function(t,n){return n.indexOf(t)!==-1},e,"")},fe.prototype.startsWithAnyOfIgnoreCase=function(){var e=me.apply(tt,arguments);return e.length===0?Ae(this):ce(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,xn)},fe.prototype.anyOf=function(){var e,t,n=this,s=me.apply(tt,arguments),r=this._cmp;try{s.sort(r)}catch{return de(this,Ht)}return s.length===0?Ae(this):((e=new this.Collection(this,function(){return Se(s[0],s[s.length-1])}))._ondirectionchange=function(i){r=i==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(i,c,u){for(var b=i.key;0<r(b,s[t]);)if(++t===s.length)return c(u),!1;return r(b,s[t])===0||(c(function(){i.continue(s[t])}),!1)}),e)},fe.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},fe.prototype.noneOf=function(){var e=me.apply(tt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return de(this,Ht)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},fe.prototype.inAnyRange=function(e,E){var n=this,s=this._cmp,r=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return Ae(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return de(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var b=!E||E.includeLowers!==!1,$=E&&E.includeUppers===!0,y,v=r;function x(S,T){return v(S[0],T[0])}try{(y=e.reduce(function(S,T){for(var F=0,R=S.length;F<R;++F){var V=S[F];if(s(T[0],V[1])<0&&0<s(T[1],V[0])){V[0]=c(V[0],T[0]),V[1]=u(V[1],T[1]);break}}return F===R&&S.push(T),S},[])).sort(x)}catch{return de(this,Ht)}var w=0,g=$?function(S){return 0<r(S,y[w][1])}:function(S){return 0<=r(S,y[w][1])},m=b?function(S){return 0<i(S,y[w][0])}:function(S){return 0<=i(S,y[w][0])},B=g,E=new this.Collection(this,function(){return Se(y[0][0],y[y.length-1][1],!b,!$)});return E._ondirectionchange=function(S){v=S==="next"?(B=g,r):(B=m,i),y.sort(x)},E._addAlgorithm(function(S,T,F){for(var R,V=S.key;B(V);)if(++w===y.length)return T(F),!1;return!g(R=V)&&!m(R)||(n._cmp(V,y[w][1])===0||n._cmp(V,y[w][0])===0||T(function(){v===r?S.continue(y[w][0]):S.continue(y[w][1])}),!1)}),E},fe.prototype.startsWithAnyOf=function(){var e=me.apply(tt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Ae(this):this.inAnyRange(e.map(function(t){return[t,t+xn]})):de(this,"startsWithAnyOf() only works with strings")};var Ee=fe;function fe(){}function Ze(e){return ge(function(t){return K(t),e(t.target.error),!1})}function K(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var ot="storagemutated",st="x-storagemutated-1",et=o(null,ot),It=(re.prototype._lock=function(){return Nn(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this},re.prototype._unlock=function(){if(Nn(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{Cn(e[1],e[0])}catch{}}return this},re.prototype._locked=function(){return this._reculock&&X.lockOwnerFor!==this},re.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(Nn(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(s);case"MissingAPIError":throw new Z.MissingAPI(s.message,s);default:throw new Z.OpenFailed(s)}if(!this.active)throw new Z.TransactionInactive;Nn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ge(function(r){K(r),t._reject(e.error)}),e.onabort=ge(function(r){K(r),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=ge(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&et.storagemutated.fire(e.mutatedParts)})}return this},re.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Ve(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Y(function(i,c){r._blockedFuncs.push([function(){r._promise(e,t,n).then(i,c)},X])}):n?dn(function(){var i=new Y(function(c,u){r._lock();var b=t(c,u,r);b&&b.then&&b.then(c,u)});return i.finally(function(){return r._unlock()}),i._lib=!0,i}):((s=new Y(function(i,c){var u=t(i,c,r);u&&u.then&&u.then(i,c)}))._lib=!0,s):Ve(new Z.TransactionInactive)},re.prototype._root=function(){return this.parent?this.parent._root():this},re.prototype.waitFor=function(e){var t,n=this._root(),s=Y.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new Y(function(i,c){s.then(function(u){return n._waitingQueue.push(ge(i.bind(null,u)))},function(u){return n._waitingQueue.push(ge(c.bind(null,u)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},re.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},re.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(le(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},re);function re(){}function ft(e,t,n,s,r,i,c,u){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:i,src:(n&&!c?"&":"")+(s?"*":"")+(r?"++":"")+Te(t),type:u}}function Te(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ye(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,i,c){return i=s(i,c),i&&(r[i[0]]=i[1]),r},{}))};var s}var Ie=function(e){try{return e.only([[]]),Ie=function(){return[[]]},[[]]}catch{return Ie=function(){return xn},xn}};function ze(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Gt(n,t)}:function(n){return Gt(n,e)};var t}function We(e){return[].slice.call(e)}var lt=0;function Vt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Xt(e,t,b){function s(g){if(g.type===3)return null;if(g.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=g.lower,x=g.upper,w=g.lowerOpen,g=g.upperOpen;return v===void 0?x===void 0?null:t.upperBound(x,!!g):x===void 0?t.lowerBound(v,!!w):t.bound(v,x,!!w,!!g)}function r(y){var v,x=y.name;return{name:x,schema:y,mutate:function(w){var g=w.trans,m=w.type,B=w.keys,E=w.values,S=w.range;return new Promise(function(T,F){T=ge(T);var R=g.objectStore(x),V=R.keyPath==null,A=m==="put"||m==="add";if(!A&&m!=="delete"&&m!=="deleteRange")throw new Error("Invalid operation type: "+m);var z,W=(B||E||{length:1}).length;if(B&&E&&B.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(W===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function D(Ne){++ve,K(Ne)}var G=[],ue=[],ve=0;if(m==="deleteRange"){if(S.type===4)return T({numFailures:ve,failures:ue,results:[],lastResult:void 0});S.type===3?G.push(z=R.clear()):G.push(z=R.delete(s(S)))}else{var V=A?V?[E,B]:[E,null]:[B,null],ee=V[0],oe=V[1];if(A)for(var De=0;De<W;++De)G.push(z=oe&&oe[De]!==void 0?R[m](ee[De],oe[De]):R[m](ee[De])),z.onerror=D;else for(De=0;De<W;++De)G.push(z=R[m](ee[De])),z.onerror=D}function it(Ne){Ne=Ne.target.result,G.forEach(function(sn,Ha){return sn.error!=null&&(ue[Ha]=sn.error)}),T({numFailures:ve,failures:ue,results:m==="delete"?B:G.map(function(sn){return sn.result}),lastResult:Ne})}z.onerror=function(Ne){D(Ne),it(Ne)},z.onsuccess=it})},getMany:function(w){var g=w.trans,m=w.keys;return new Promise(function(B,E){B=ge(B);for(var S,T=g.objectStore(x),F=m.length,R=new Array(F),V=0,A=0,z=function(G){G=G.target,R[G._pos]=G.result,++A===V&&B(R)},W=Ze(E),D=0;D<F;++D)m[D]!=null&&((S=T.get(m[D]))._pos=D,S.onsuccess=z,S.onerror=W,++V);V===0&&B(R)})},get:function(w){var g=w.trans,m=w.key;return new Promise(function(B,E){B=ge(B);var S=g.objectStore(x).get(m);S.onsuccess=function(T){return B(T.target.result)},S.onerror=Ze(E)})},query:(v=u,function(w){return new Promise(function(g,m){g=ge(g);var B,E,S,A=w.trans,T=w.values,F=w.limit,V=w.query,R=F===1/0?void 0:F,z=V.index,V=V.range,A=A.objectStore(x),A=z.isPrimaryKey?A:A.index(z.name),z=s(V);if(F===0)return g({result:[]});v?((V=T?A.getAll(z,R):A.getAllKeys(z,R)).onsuccess=function(W){return g({result:W.target.result})},V.onerror=Ze(m)):(B=0,E=!T&&"openKeyCursor"in A?A.openKeyCursor(z):A.openCursor(z),S=[],E.onsuccess=function(W){var D=E.result;return!D||(S.push(T?D.value:D.primaryKey),++B===F)?g({result:S}):void D.continue()},E.onerror=Ze(m))})}),openCursor:function(w){var g=w.trans,m=w.values,B=w.query,E=w.reverse,S=w.unique;return new Promise(function(T,F){T=ge(T);var A=B.index,R=B.range,V=g.objectStore(x),V=A.isPrimaryKey?V:V.index(A.name),A=E?S?"prevunique":"prev":S?"nextunique":"next",z=!m&&"openKeyCursor"in V?V.openKeyCursor(s(R),A):V.openCursor(s(R),A);z.onerror=Ze(F),z.onsuccess=ge(function(W){var D,G,ue,ve,ee=z.result;ee?(ee.___id=++lt,ee.done=!1,D=ee.continue.bind(ee),G=(G=ee.continuePrimaryKey)&&G.bind(ee),ue=ee.advance.bind(ee),ve=function(){throw new Error("Cursor not stopped")},ee.trans=g,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=ge(F),ee.next=function(){var oe=this,De=1;return this.start(function(){return De--?oe.continue():oe.stop()}).then(function(){return oe})},ee.start=function(oe){function De(){if(z.result)try{oe()}catch(Ne){ee.fail(Ne)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var it=new Promise(function(Ne,sn){Ne=ge(Ne),z.onerror=Ze(sn),ee.fail=sn,ee.stop=function(Ha){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=ve,Ne(Ha)}});return z.onsuccess=ge(function(Ne){z.onsuccess=De,De()}),ee.continue=D,ee.continuePrimaryKey=G,ee.advance=ue,De(),it},T(ee)):T(null)},F)})},count:function(w){var g=w.query,m=w.trans,B=g.index,E=g.range;return new Promise(function(S,T){var F=m.objectStore(x),F=B.isPrimaryKey?F:F.index(B.name),R=s(E),R=R?F.count(R):F.count();R.onsuccess=ge(function(V){return S(V.target.result)}),R.onerror=Ze(T)})}}}i=b,c=We((b=e).objectStoreNames);var i,b={schema:{name:b.name,tables:c.map(function(y){return i.objectStore(y)}).map(function(y){var v=y.keyPath,x=y.autoIncrement,g=ie(v),w={},g={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:g,keyPath:v,autoIncrement:x,unique:!0,extractKey:ze(v)},indexes:We(y.indexNames).map(function(m){return y.index(m)}).map(function(S){var T=S.name,B=S.unique,E=S.multiEntry,S=S.keyPath,T={name:T,compound:ie(S),keyPath:S,unique:B,multiEntry:E,extractKey:ze(S)};return w[Vt(S)]=T}),getIndexByKeyPath:function(m){return w[Vt(m)]}};return w[":id"]=g.primaryKey,v!=null&&(w[Vt(v)]=g.primaryKey),g})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=b.schema,u=b.hasGetAll,b=c.tables.map(r),$={};return b.forEach(function(y){return $[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if($[y])return $[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Ie(t),schema:c}}function _t(e,t,n,s){return n=n.IDBKeyRange,t=Xt(t,n,s),{dbcore:e.dbcore.reduce(function(r,i){return i=i.create,U(U({},r),i(r))},t)}}function ct(e,t){var n=t.db,n=_t(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(i){return i.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function Qt(e,t,n,s){n.forEach(function(r){var i=s[r];t.forEach(function(c){var u=(function b($,y){return ea($,y)||($=pt($))&&b($,y)})(c,r);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?mt(c,r,{get:function(){return this.table(r)},set:function(b){vt(this,r,{value:b,writable:!0,configurable:!0,enumerable:!0})}}):c[r]=new e.Table(r,i))})})}function Me(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function Be(e,t){return e._cfg.version-t._cfg.version}function Ke(e,t,n,s){var r=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=Ye("$meta",Yt("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),c=(i.create(n),i._completion.catch(s),i._reject.bind(i)),u=X.transless||X;dn(function(){if(X.trans=i,X.transless=u,t!==0)return ct(e,n),$=t,((b=i).storeNames.includes("$meta")?b.table("$meta").get("version").then(function(y){return y??$}):Y.resolve($)).then(function(B){var v=e,x=B,w=i,g=n,m=[],B=v._versions,E=v._dbSchema=kt(0,v.idbdb,g);return(B=B.filter(function(S){return S._cfg.version>=x})).length===0?Y.resolve():(B.forEach(function(S){m.push(function(){var T,F,R,V=E,A=S._cfg.dbschema,z=(ut(v,V,g),ut(v,A,g),E=v._dbSchema=A,Ge(V,A)),W=(z.add.forEach(function(D){Ft(g,D[0],D[1].primKey,D[1].indexes)}),z.change.forEach(function(D){if(D.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var G=g.objectStore(D.name);D.add.forEach(function(ue){return Dt(G,ue)}),D.change.forEach(function(ue){G.deleteIndex(ue.name),Dt(G,ue)}),D.del.forEach(function(ue){return G.deleteIndex(ue)})}),S._cfg.contentUpgrade);if(W&&S._cfg.version>x)return ct(v,g),w._memoizedTables={},T=Ma(A),z.del.forEach(function(D){T[D]=V[D]}),Me(v,[v.Transaction.prototype]),Qt(v,[v.Transaction.prototype],ke(T),T),w.schema=T,(F=mn(W))&&An(),A=Y.follow(function(){var D;(R=W(w))&&F&&(D=hn.bind(null,null),R.then(D,D))}),R&&typeof R.then=="function"?Y.resolve(R):A.then(function(){return R})}),m.push(function(T){var F,R,V=S._cfg.dbschema;F=V,R=T,[].slice.call(R.db.objectStoreNames).forEach(function(A){return F[A]==null&&R.db.deleteObjectStore(A)}),Me(v,[v.Transaction.prototype]),Qt(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),w.schema=v._dbSchema}),m.push(function(T){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===S._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(F){return F!=="$meta"})):T.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return m.length?Y.resolve(m.shift()(w.idbtrans)).then(S):Y.resolve()})().then(function(){Zt(E,g)}))}).catch(c);var b,$;ke(r).forEach(function(y){Ft(n,y,r[y].primKey,r[y].indexes)}),ct(e,n),Y.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function Fe(e,t){Zt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=kt(0,e.idbdb,t);ut(e,e._dbSchema,t);for(var s=0,r=Ge(n,e._dbSchema).change;s<r.length;s++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(b){yt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(b.src)),Dt(u,b)})})(r[s]);if(typeof i=="object")return i.value}}function Ge(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],i=t[n];if(r){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||r.primKey.auto!==i.primKey.auto)c.recreate=!0,s.change.push(c);else{var u=r.idxByName,b=i.idxByName,$=void 0;for($ in u)b[$]||c.del.push($);for($ in b){var y=u[$],v=b[$];y?y.src!==v.src&&c.change.push(v):c.add.push(v)}(0<c.del.length||0<c.add.length||0<c.change.length)&&s.change.push(c)}}else s.add.push([n,i])}return s}function Ft(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(i){return Dt(r,i)})}function Zt(e,t){ke(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(yt&&console.debug("Dexie: Creating missing table",n),Ft(t,n,e[n].primKey,e[n].indexes))})}function Dt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function kt(e,t,n){var s={};return ta(t.objectStoreNames,0).forEach(function(r){for(var i=n.objectStore(r),c=ft(Te($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),u=[],b=0;b<i.indexNames.length;++b){var y=i.index(i.indexNames[b]),$=y.keyPath,y=ft(y.name,$,!!y.unique,!!y.multiEntry,!1,$&&typeof $!="string",!1);u.push(y)}s[r]=Ye(r,c,u)}),s}function ut(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var i=s[r],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var b,$=c.indexNames[u],y=c.index($).keyPath,y=typeof y=="string"?y:"["+ta(y).join("+")+"]";t[i]&&(b=t[i].idxByName[y])&&(b.name=$,delete t[i].idxByName[y],t[i].idxByName[$]=b)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Yt(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return ft(r,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(i),n===0,s)})}tn.prototype._createTableSchema=Ye,tn.prototype._parseIndexSyntax=Yt,tn.prototype._parseStoresSpec=function(e,t){var n=this;ke(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),i=r.shift();if(!i)throw new Z.Schema("Invalid schema for table "+s+": "+e[s]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");r.forEach(function(c){if(c.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(s,i,r),t[s]=i}})},tn.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?Ce(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(i){Ce(s,i._cfg.storesSource),r=i._cfg.dbschema={},i._parseStoresSpec(s,r)}),t._dbSchema=r,Me(t,[t._allTables,t,t.Transaction.prototype]),Qt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],ke(r),r),t._storeNames=ke(r),this},tn.prototype.upgrade=function(e){return this._cfg.contentUpgrade=jn(this._cfg.contentUpgrade||we,e),this};var en=tn;function tn(){}function _(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Wt(pn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function j(e){return e&&typeof e.databases=="function"}function rt(e){return dn(function(){return X.letThrough=!0,e()})}function wn(e){return!("from"in e)}var te=function(e,t){var n;if(!this)return n=new te,e&&"d"in e&&Ce(n,e),n;Ce(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Wn(e,t,n){var s=he(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(wn(e))return Ce(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(he(n,e.from)<0)return s?Wn(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},us(e);if(0<he(t,e.to))return r?Wn(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},us(e);he(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<he(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&In(e,s),r&&t&&In(e,r)}}function In(e,t){wn(t)||(function n(s,r){var i=r.from,c=r.l,u=r.r;Wn(s,i,r.to),c&&n(s,c),u&&n(s,u)})(e,t)}function Ra(e,t){var n=Gn(t),s=n.next();if(!s.done)for(var r=s.value,i=Gn(e),c=i.next(r.from),u=c.value;!s.done&&!c.done;){if(he(u.from,r.to)<=0&&0<=he(u.to,r.from))return!0;he(r.from,u.from)<0?r=(s=n.next(u.from)).value:u=(c=i.next(r.from)).value}return!1}function Gn(e){var t=wn(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&he(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||he(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function us(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=U({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=ds(n)),e.d=ds(e)}function ds(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function wt(e,t){return ke(t).forEach(function(n){e[n]?In(e[n],t[n]):e[n]=(function s(r){var i,c,u={};for(i in r)le(r,i)&&(c=r[i],u[i]=!c||typeof c!="object"||Xa.has(c.constructor)?c:s(c));return u})(t[n])}),e}function Mt(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Ra(t[n],e[n])})}xt(te.prototype,((nt={add:function(e){return In(this,e),this},addKey:function(e){return Wn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Wn(t,n,n)}),this},hasKey:function(e){var t=Gn(this).next(e).value;return t&&he(t.from,e)<=0&&0<=he(t.to,e)}})[Aa]=function(){return Gn(this)},nt));var dt={},va={},ma=!1;function Un(e){wt(va,e),ma||(ma=!0,setTimeout(function(){ma=!1,ga(va,!(va={}))},0))}function ga(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(dt);s<r.length;s++)Va(u=r[s],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=dt["idb://".concat(c,"/").concat(i)])&&Va(u,e,n,t)}n.forEach(function(b){return b()})}function Va(e,t,n,s){for(var r=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],b=u[0],$=[],y=0,v=u[1];y<v.length;y++){var x=v[y];Mt(t,x.obsSet)?x.subscribers.forEach(function(B){return n.add(B)}):s&&$.push(x)}s&&r.push([b,$])}if(s)for(var w=0,g=r;w<g.length;w++){var m=g[w],b=m[0],$=m[1];e.queries.query[b]=$}}function hs(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ve(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==s)throw new Z.DatabaseClosed("db.open() was cancelled")}function u(){return new Y(function(x,w){if(c(),!n)throw new Z.MissingAPI;var g=e.name,m=t.autoSchema||!r?n.open(g):n.open(g,r);if(!m)throw new Z.MissingAPI;m.onerror=Ze(w),m.onblocked=ge(e._fireOnBlocked),m.onupgradeneeded=ge(function(B){var E;y=m.transaction,t.autoSchema&&!e._options.allowEmptyDB?(m.onerror=K,y.abort(),m.result.close(),(E=n.deleteDatabase(g)).onsuccess=E.onerror=ge(function(){w(new Z.NoSuchDatabase("Database ".concat(g," doesnt exist")))})):(y.onerror=Ze(w),E=B.oldVersion>Math.pow(2,62)?0:B.oldVersion,v=E<1,e.idbdb=m.result,i&&Fe(e,y),Ke(e,E/10,y,w))},w),m.onsuccess=ge(function(){y=null;var B,E,S,T,F,R,V=e.idbdb=m.result,A=ta(V.objectStoreNames);if(0<A.length)try{var z=V.transaction((F=A).length===1?F[0]:F,"readonly");if(t.autoSchema)R=V,T=z,(S=e).verno=R.version/10,T=S._dbSchema=kt(0,R,T),S._storeNames=ta(R.objectStoreNames,0),Qt(S,[S._allTables],ke(T),T);else if(ut(e,e._dbSchema,z),E=z,((E=Ge(kt(0,(B=e).idbdb,E),B._dbSchema)).add.length||E.change.some(function(W){return W.add.length||W.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),r=V.version+1,i=!0,x(u());ct(e,z)}catch{}On.push(e),V.onversionchange=ge(function(W){t.vcFired=!0,e.on("versionchange").fire(W)}),V.onclose=ge(function(){e.close({disableAutoOpen:!1})}),v&&(A=e._deps,F=g,j(R=A.indexedDB)||F===pn||_(R,A.IDBKeyRange).put({name:F}).catch(we)),x()},w)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<r)return r=0,u()}return Y.reject(x)})}var b,$=t.dbReadyResolve,y=null,v=!1;return Y.race([s,(typeof navigator>"u"?Y.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function w(){return indexedDB.databases().finally(x)}b=setInterval(w,100),w()}).finally(function(){return clearInterval(b)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],Y.resolve(rt(function(){return e.on.ready.fire(e.vip)})).then(function x(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(jn,we),t.onReadyBeingFired=[],Y.resolve(rt(function(){return w(e.vip)})).then(x)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{y&&y.abort()}catch{}return s===t.openCanceller&&e._close(),Ve(x)}).finally(function(){t.openComplete=!0,$()}).then(function(){var x;return v&&(x={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(g){g.name&&(x["idb://".concat(e.name,"/").concat(w.name,"/").concat(g.name)]=new te(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(w.name,"/")]=x["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new te(-1/0,[[[]]])}),et(ot).fire(x),ga(x,!0)),e})}function ba(e){function t(i){return e.next(i)}var n=r(t),s=r(function(i){return e.throw(i)});function r(i){return function(u){var u=i(u),b=u.value;return u.done?b:b&&typeof b.then=="function"?b.then(n,s):ie(b)?Promise.all(b).then(n,s):n(b)}}return r(t)()}function ya(e,t,n){for(var s=ie(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var Ya={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return U(U({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},i=[];function c(x,w,g){var S=Vt(x),m=r[S]=r[S]||[],B=x==null?0:typeof x=="string"?1:x.length,E=0<w,S=U(U({},g),{name:E?"".concat(S,"(virtual-from:").concat(g.name,")"):g.name,lowLevelIndex:g,isVirtual:E,keyTail:w,keyLength:B,extractKey:ze(x),unique:!E&&g.unique});return m.push(S),S.isPrimaryKey||i.push(S),1<B&&c(B===2?x[0]:x.slice(0,B-1),w+1,g),m.sort(function(T,F){return T.keyTail-F.keyTail}),S}var u=c(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[u];for(var b=0,$=s.indexes;b<$.length;b++){var y=$[b];c(y.keyPath,0,y)}function v(x){var w,g=x.query.index;return g.isVirtual?U(U({},x),{query:{index:g.lowLevelIndex,range:(w=x.query.range,g=g.keyTail,{type:w.type===1?2:w.type,lower:ya(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,g),lowerOpen:!0,upper:ya(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,g),upperOpen:!0})}}):x}return U(U({},n),{schema:U(U({},s),{primaryKey:u,indexes:i,getIndexByKeyPath:function(x){return(x=r[Vt(x)])&&x[0]}}),count:function(x){return n.count(v(x))},query:function(x){return n.query(v(x))},openCursor:function(x){var w=x.query.index,g=w.keyTail,m=w.keyLength;return w.isVirtual?n.openCursor(v(x)).then(function(E){return E&&B(E)}):n.openCursor(x);function B(E){return Object.create(E,{continue:{value:function(S){S!=null?E.continue(ya(S,x.reverse?e.MAX_KEY:e.MIN_KEY,g)):x.unique?E.continue(E.key.slice(0,m).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,g)):E.continue()}},continuePrimaryKey:{value:function(S,T){E.continuePrimaryKey(ya(S,e.MAX_KEY,g),T)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var S=E.key;return m===1?S[0]:S.slice(0,m)}},value:{get:function(){return E.value}}})}}})}})}};function Jn(e,t,n,s){return n=n||{},s=s||"",ke(e).forEach(function(r){var i,c,u;le(t,r)?(i=e[r],c=t[r],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Ta(i))!==Ta(c)?n[s+r]=t[r]:u==="Object"?Jn(i,c,n,s+r+"."):i!==c&&(n[s+r]=t[r]):i!==c&&(n[s+r]=t[r])):n[s+r]=void 0}),ke(t).forEach(function(r){le(e,r)||(n[s+r]=t[r])}),n}function Ca(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var ps={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return U(U({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return U(U({},n),{mutate:function(r){var i=X.trans,c=i.table(t).hook,u=c.deleting,b=c.creating,$=c.updating;switch(r.type){case"add":if(b.fire===we)break;return i._promise("readwrite",function(){return y(r)},!0);case"put":if(b.fire===we&&$.fire===we)break;return i._promise("readwrite",function(){return y(r)},!0);case"delete":if(u.fire===we)break;return i._promise("readwrite",function(){return y(r)},!0);case"deleteRange":if(u.fire===we)break;return i._promise("readwrite",function(){return(function v(x,w,g){return n.query({trans:x,values:!1,query:{index:s,range:w},limit:g}).then(function(m){var B=m.result;return y({type:"delete",keys:B,trans:x}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):B.length<g?{failures:[],numFailures:0,lastResult:void 0}:v(x,U(U({},w),{lower:B[B.length-1],lowerOpen:!0}),g)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function y(v){var x,w,g,m=X.trans,B=v.keys||Ca(s,v);if(B)return(v=v.type==="add"||v.type==="put"?U(U({},v),{keys:B}):U({},v)).type!=="delete"&&(v.values=ye([],v.values)),v.keys&&(v.keys=ye([],v.keys)),x=n,g=B,((w=v).type==="add"?Promise.resolve([]):x.getMany({trans:w.trans,keys:g,cache:"immutable"})).then(function(E){var S=B.map(function(T,F){var R,V,A,z=E[F],W={onerror:null,onsuccess:null};return v.type==="delete"?u.fire.call(W,T,z,m):v.type==="add"||z===void 0?(R=b.fire.call(W,T,v.values[F],m),T==null&&R!=null&&(v.keys[F]=T=R,s.outbound||gt(v.values[F],s.keyPath,T))):(R=Jn(z,v.values[F]),(V=$.fire.call(W,R,T,z,m))&&(A=v.values[F],Object.keys(V).forEach(function(D){le(A,D)?A[D]=V[D]:gt(A,D,V[D])}))),W});return n.mutate(v).then(function(T){for(var F=T.failures,R=T.results,V=T.numFailures,T=T.lastResult,A=0;A<B.length;++A){var z=(R||B)[A],W=S[A];z==null?W.onerror&&W.onerror(F[A]):W.onsuccess&&W.onsuccess(v.type==="put"&&E[A]?v.values[A]:z)}return{failures:F,results:R,numFailures:V,lastResult:T}}).catch(function(T){return S.forEach(function(F){return F.onerror&&F.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function Nt(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,i=0;r<t.keys.length&&i<e.length;++r)he(t.keys[r],e[i])===0&&(s.push(n?bt(t.values[r]):t.values[r]),++i);return s.length===e.length?s:null}catch{return null}}var Ps={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return U(U({},n),{getMany:function(s){var r;return s.cache?(r=Nt(s.keys,s.trans._cache,s.cache==="clone"))?Y.resolve(r):n.getMany(s).then(function(i){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?bt(i):i},i}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function zt(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function fs(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Ts={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new te(e.MIN_KEY,e.MAX_KEY);return U(U({},e),{transaction:function(s,r,i){if(X.subscr&&r!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));return e.transaction(s,r,i)},table:function(s){function r(B){var m,B=B.query;return[m=B.index,new te((m=(B=B.range).lower)!=null?m:e.MIN_KEY,(m=B.upper)!=null?m:e.MAX_KEY)]}var i=e.table(s),c=i.schema,u=c.primaryKey,b=c.indexes,$=u.extractKey,y=u.outbound,v=u.autoIncrement&&b.filter(function(g){return g.compound&&g.keyPath.includes(u.keyPath)}),x=U(U({},i),{mutate:function(g){function m(G){return G="idb://".concat(t,"/").concat(s,"/").concat(G),F[G]||(F[G]=new te)}var B,E,S,T=g.trans,F=g.mutatedParts||(g.mutatedParts={}),R=m(""),V=m(":dels"),A=g.type,W=g.type==="deleteRange"?[g.range]:g.type==="delete"?[g.keys]:g.values.length<50?[Ca(u,g).filter(function(G){return G}),g.values]:[],z=W[0],W=W[1],D=g.trans._cache;return ie(z)?(R.addKeys(z),(A=A==="delete"||z.length===W.length?Nt(z,D):null)||V.addKeys(z),(A||W)&&(B=m,E=A,S=W,c.indexes.forEach(function(G){var ue=B(G.name||"");function ve(oe){return oe!=null?G.extractKey(oe):null}function ee(oe){G.multiEntry&&ie(oe)?oe.forEach(function(De){return ue.addKey(De)}):ue.addKey(oe)}(E||S).forEach(function(oe,Ne){var it=E&&ve(E[Ne]),Ne=S&&ve(S[Ne]);he(it,Ne)!==0&&(it!=null&&ee(it),Ne!=null)&&ee(Ne)})}))):z?(W={from:(D=z.lower)!=null?D:e.MIN_KEY,to:(A=z.upper)!=null?A:e.MAX_KEY},V.add(W),R.add(W)):(R.add(n),V.add(n),c.indexes.forEach(function(G){return m(G.name).add(n)})),i.mutate(g).then(function(G){return!z||g.type!=="add"&&g.type!=="put"||(R.addKeys(G.results),v&&v.forEach(function(ue){for(var ve=g.values.map(function(it){return ue.extractKey(it)}),ee=ue.keyPath.findIndex(function(it){return it===u.keyPath}),oe=0,De=G.results.length;oe<De;++oe)ve[oe][ee]=G.results[oe];m(ue.name).addKeys(ve)})),T.mutatedParts=wt(T.mutatedParts||{},F),G})}}),w={get:function(g){return[u,new te(g.key)]},getMany:function(g){return[u,new te().addKeys(g.keys)]},count:r,query:r,openCursor:r};return ke(w).forEach(function(g){x[g]=function(m){var B=X.subscr,E=!!B,S=zt(X,i)&&fs(g,m)?m.obsSet={}:B;if(E){var T,B=function(W){return W="idb://".concat(t,"/").concat(s,"/").concat(W),S[W]||(S[W]=new te)},F=B(""),R=B(":dels"),E=w[g](m),V=E[0],E=E[1];if((g==="query"&&V.isPrimaryKey&&!m.values?R:B(V.name||"")).add(E),!V.isPrimaryKey){if(g!=="count")return T=g==="query"&&y&&m.values&&i.query(U(U({},m),{values:!1})),i[g].apply(this,arguments).then(function(W){if(g==="query"){if(y&&m.values)return T.then(function(ve){return ve=ve.result,F.addKeys(ve),W});var D=m.values?W.result.map($):W.result;(m.values?F:R).addKeys(D)}else{var G,ue;if(g==="openCursor")return ue=m.values,(G=W)&&Object.create(G,{key:{get:function(){return R.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var ve=G.primaryKey;return R.addKey(ve),ve}},value:{get:function(){return ue&&F.addKey(G.primaryKey),G.value}}})}return W});R.add(n)}}return i[g].apply(this,arguments)}}),x}})}};function za(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=U({},t),ie(s.keys)&&(s.keys=s.keys.filter(function(r,i){return!(i in n.failures)})),"values"in s&&ie(s.values)&&(s.values=s.values.filter(function(r,i){return!(i in n.failures)})),s)}function xa(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<he(n,s.lower):0<=he(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?he(n,s.upper)<0:he(n,s.upper)<=0));var n,s}function Wa(e,t,n,s,r,i){var c,u,b,$,y,v;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,b=t.query.range,$=s.schema.primaryKey.extractKey,y=c.extractKey,v=(c.lowLevelIndex||c).extractKey,(s=n.reduce(function(x,w){var g=x,m=[];if(w.type==="add"||w.type==="put")for(var B=new te,E=w.values.length-1;0<=E;--E){var S,T=w.values[E],F=$(T);!B.hasKey(F)&&(S=y(T),u&&ie(S)?S.some(function(W){return xa(W,b)}):xa(S,b))&&(B.addKey(F),m.push(T))}switch(w.type){case"add":var R=new te().addKeys(t.values?x.map(function(D){return $(D)}):x),g=x.concat(t.values?m.filter(function(D){return D=$(D),!R.hasKey(D)&&(R.addKey(D),!0)}):m.map(function(D){return $(D)}).filter(function(D){return!R.hasKey(D)&&(R.addKey(D),!0)}));break;case"put":var V=new te().addKeys(w.values.map(function(D){return $(D)}));g=x.filter(function(D){return!V.hasKey(t.values?$(D):D)}).concat(t.values?m:m.map(function(D){return $(D)}));break;case"delete":var A=new te().addKeys(w.keys);g=x.filter(function(D){return!A.hasKey(t.values?$(D):D)});break;case"deleteRange":var z=w.range;g=x.filter(function(D){return!xa($(D),z)})}return g},e))===e)?e:(s.sort(function(x,w){return he(v(x),v(w))||he($(x),$(w))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),i?Object.freeze(s):s)}function Ga(e,t){return he(e.lower,t.lower)===0&&he(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function vs(e,t){return((n,s,r,i)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=he(n,s))===0){if(r&&i)return 0;if(r)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,i)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=he(n,s))===0){if(r&&i)return 0;if(r)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function ms(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,i;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&ln(i,r)},3e3))})}var As={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return U(U({},e),{transaction:function(n,s,r){var i,c,u=e.transaction(n,s,r);return s==="readwrite"&&(r=(i=new AbortController).signal,u.addEventListener("abort",(c=function(b){return function(){if(i.abort(),s==="readwrite"){for(var $=new Set,y=0,v=n;y<v.length;y++){var x=v[y],w=dt["idb://".concat(t,"/").concat(x)];if(w){var g=e.table(x),m=w.optimisticOps.filter(function(G){return G.trans===u});if(u._explicit&&b&&u.mutatedParts)for(var B=0,E=Object.values(w.queries.query);B<E.length;B++)for(var S=0,T=(V=E[B]).slice();S<T.length;S++)Mt((A=T[S]).obsSet,u.mutatedParts)&&(ln(V,A),A.subscribers.forEach(function(G){return $.add(G)}));else if(0<m.length){w.optimisticOps=w.optimisticOps.filter(function(G){return G.trans!==u});for(var F=0,R=Object.values(w.queries.query);F<R.length;F++)for(var V,A,z,W=0,D=(V=R[F]).slice();W<D.length;W++)(A=D[W]).res!=null&&u.mutatedParts&&(b&&!A.dirty?(z=Object.isFrozen(A.res),z=Wa(A.res,A.req,m,g,A,z),A.dirty?(ln(V,A),A.subscribers.forEach(function(G){return $.add(G)})):z!==A.res&&(A.res=z,A.promise=Y.resolve({result:z}))):(A.dirty&&ln(V,A),A.subscribers.forEach(function(G){return $.add(G)})))}}}$.forEach(function(G){return G()})}}})(!1),{signal:r}),u.addEventListener("error",c(!1),{signal:r}),u.addEventListener("complete",c(!0),{signal:r})),u},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return U(U({},s),{mutate:function(i){var c,u=X.trans;return!r.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=dt["idb://".concat(t,"/").concat(n)])?(u=s.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Ca(r,i).some(function(b){return b==null}))?(c.optimisticOps.push(i),i.mutatedParts&&Un(i.mutatedParts),u.then(function(b){0<b.numFailures&&(ln(c.optimisticOps,i),(b=za(0,i,b))&&c.optimisticOps.push(b),i.mutatedParts)&&Un(i.mutatedParts)}),u.catch(function(){ln(c.optimisticOps,i),i.mutatedParts&&Un(i.mutatedParts)})):u.then(function(b){var $=za(0,U(U({},i),{values:i.values.map(function(y,v){var x;return b.failures[v]?y:(gt(x=(x=r.keyPath)!=null&&x.includes(".")?bt(y):U({},y),r.keyPath,b.results[v]),x)})}),b);c.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&Un(i.mutatedParts)})}),u):s.mutate(i)},query:function(i){var c,u,b,$,y,v,x;return zt(X,s)&&fs("query",i)?(c=((b=X.trans)==null?void 0:b.db._options.cache)==="immutable",u=(b=X).requery,b=b.signal,v=((w,g,m,B)=>{var E=dt["idb://".concat(w,"/").concat(g)];if(!E)return[];if(!(w=E.queries[m]))return[null,!1,E,null];var S=w[(B.query?B.query.index.name:null)||""];if(!S)return[null,!1,E,null];switch(m){case"query":var T=S.find(function(F){return F.req.limit===B.limit&&F.req.values===B.values&&Ga(F.req.query.range,B.query.range)});return T?[T,!0,E,S]:[S.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=B.limit&&(!B.values||F.req.values)&&vs(F.req.query.range,B.query.range)}),!1,E,S];case"count":return T=S.find(function(F){return Ga(F.req.query.range,B.query.range)}),[T,!!T,E,S]}})(t,n,"query",i),x=v[0],$=v[2],y=v[3],x&&v[1]?x.obsSet=i.obsSet:(v=s.query(i).then(function(w){var g=w.result;if(x&&(x.res=g),c){for(var m=0,B=g.length;m<B;++m)Object.freeze(g[m]);Object.freeze(g)}else w.result=bt(g);return w}).catch(function(w){return y&&x&&ln(y,x),Promise.reject(w)}),x={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(x):(y=[x],($=$||(dt["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),ms(x,y,u,b),x.promise.then(function(w){return{result:Wa(w.result,i,$?.optimisticOps,s,x,c)}})):s.query(i)}})}})}};function ka(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}qe.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Be),n.stores({}),this._state.autoSchema=!1),n},qe.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?e():new Y(function(n,s){if(t._state.openComplete)return s(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new Z.DatabaseClosed);t.open().catch(we)}t._state.dbReadyPromise.then(n,s)}).then(e)},qe.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,i=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:s??10,name:r}),i.sort(function(c,u){return c.level-u.level}),this},qe.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},qe.prototype.open=function(){var e=this;return Cn(Re,function(){return hs(e)})},qe.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=On.indexOf(this);if(0<=t&&On.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Y(function(n){e.dbReadyResolve=n}),e.openCanceller=new Y(function(n,s){e.cancelOpen=s}))},qe.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},qe.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new Y(function(r,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=ge(function(){var b,$,y;b=t._deps,$=t.name,j(y=b.indexedDB)||$===pn||_(y,b.IDBKeyRange).delete($).catch(we),r()}),u.onerror=Ze(i),u.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(c):c()})},qe.prototype.backendDB=function(){return this.idbdb},qe.prototype.isOpen=function(){return this.idbdb!==null},qe.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},qe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},qe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(qe.prototype,"tables",{get:function(){var e=this;return ke(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),qe.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];return s=i.pop(),[t,Pa(i),s]}).apply(this,arguments);return this._transaction.apply(this,e)},qe.prototype._transaction=function(e,t,n){var s,r,i=this,c=X.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===da)s=da;else{if(e!="rw"&&e!=ha)throw new Z.InvalidArgument("Invalid transaction mode: "+e);s=ha}if(c){if(c.mode===da&&s===ha){if(!u)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&r.forEach(function($){if(c&&c.storeNames.indexOf($)===-1){if(!u)throw new Z.SubTransaction("Table "+$+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch($){return c?c._promise(null,function(y,v){v($)}):Ve($)}var b=(function $(y,v,x,w,g){return Y.resolve().then(function(){var S=X.transless||X,m=y._createTransaction(v,x,y._dbSchema,w),S=(m.explicit=!0,{trans:m,transless:S});if(w)m.idbtrans=w.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(T){return T.name===sa.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return $(y,v,x,null,g)})):Ve(T)}var B,E=mn(g),S=(E&&An(),Y.follow(function(){var T;(B=g.call(m,m))&&(E?(T=hn.bind(null,null),B.then(T,T)):typeof B.next=="function"&&typeof B.throw=="function"&&(B=ba(B)))},S));return(B&&typeof B.then=="function"?Y.resolve(B).then(function(T){return m.active?T:Ve(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return B})).then(function(T){return w&&m._resolve(),m._completion.then(function(){return T})}).catch(function(T){return m._reject(T),Ve(T)})})}).bind(null,this,s,r,c,n);return c?c._promise(s,b,"lock"):X.trans?Cn(X.transless,function(){return i._whenReady(b)}):this._whenReady(b)},qe.prototype.table=function(e){if(le(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var Wt=qe;function qe(e,t){var n,s,r,i,c,u=this,b=(this._middlewares={},this.verno=0,qe.dependencies),b=(this._options=t=U({addons:qe.addons,autoOpen:!0,indexedDB:b.indexedDB,IDBKeyRange:b.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:we,dbReadyPromise:null,cancelOpen:we,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=($.dbReadyPromise=new Y(function(v){$.dbReadyResolve=v}),$.openCanceller=new Y(function(v,x){$.cancelOpen=x}),this._state=$,this.name=e,this.on=o(this,"populate","blocked","versionchange","close",{ready:[jn,we]}),this.once=function(v,x){var w=function(){for(var g=[],m=0;m<arguments.length;m++)g[m]=arguments[m];u.on(v).unsubscribe(w),x.apply(u,g)};return u.on(v,w)},this.on.ready.subscribe=na(this.on.ready.subscribe,function(v){return function(x,w){qe.vip(function(){var g,m=u._state;m.openComplete?(m.dbOpenError||Y.resolve().then(x),w&&v(x)):m.onReadyBeingFired?(m.onReadyBeingFired.push(x),w&&v(x)):(v(x),g=u,w||v(function B(){g.on.ready.unsubscribe(x),g.on.ready.unsubscribe(B)}))})}}),this.Collection=(n=this,l(J.prototype,function(B,m){this.db=n;var w=is,g=null;if(m)try{w=m()}catch(S){g=S}var m=B._ctx,B=m.table,E=B.hook.reading.fire;this._ctx={table:B,index:m.index,isPrimKey:!m.index||B.schema.primKey.keyPath&&m.index===B.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:g,or:m.or,valueMapper:E!==qn?E:null}})),this.Table=(s=this,l(ae.prototype,function(v,x,w){this.db=s,this._tx=w,this.name=v,this.schema=x,this.hook=s._allTables[v]?s._allTables[v].hook:o(null,{creating:[ts,we],reading:[Ss,qn],updating:[Bs,we],deleting:[Es,we]})})),this.Transaction=(r=this,l(It.prototype,function(v,x,w,g,m){var B=this;v!=="readonly"&&x.forEach(function(E){E=(E=w[E])==null?void 0:E.yProps,E&&(x=x.concat(E.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=v,this.storeNames=x,this.schema=w,this.chromeTransactionDurability=g,this.idbtrans=null,this.on=o(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Y(function(E,S){B._resolve=E,B._reject=S}),this._completion.then(function(){B.active=!1,B.on.complete.fire()},function(E){var S=B.active;return B.active=!1,B.on.error.fire(E),B.parent?B.parent._reject(E):S&&B.idbtrans&&B.idbtrans.abort(),Ve(E)})})),this.Version=(i=this,l(en.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,l(Ee.prototype,function(v,x,w){if(this.db=c,this._ctx={table:v,index:x===":id"?null:x,or:w},this._cmp=this._ascending=he,this._descending=function(g,m){return he(m,g)},this._max=function(g,m){return 0<he(g,m)?g:m},this._min=function(g,m){return he(g,m)<0?g:m},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Ie(t.IDBKeyRange),this._createTransaction=function(v,x,w,g){return new u.Transaction(v,x,w,u._options.chromeTransactionDurability,g)},this._fireOnBlocked=function(v){u.on("blocked").fire(v),On.filter(function(x){return x.name===u.name&&x!==u&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(v)})},this.use(Ps),this.use(As),this.use(Ts),this.use(Ya),this.use(ps),new Proxy(this,{get:function(v,x,w){var g;return x==="_vip"||(x==="table"?function(m){return ka(u.table(m),y)}:(g=Reflect.get(v,x,w))instanceof ae?ka(g,y):x==="tables"?g.map(function(m){return ka(m,y)}):x==="_createTransaction"?function(){return ka(g.apply(this,arguments),y)}:g)}}));this.vip=y,b.forEach(function(v){return v(u)})}var nn,Fn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Os=(Ua.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Ua.prototype[Fn]=function(){return this},Ua);function Ua(e){this._subscribe=e}try{nn={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{nn={indexedDB:null,IDBKeyRange:null}}function gs(e){var t,n=!1,s=new Os(function(r){var i=mn(e),c,u=!1,b={},$={},y={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),v&&et.storagemutated.unsubscribe(w))}},v=(r.start&&r.start(y),!1),x=function(){return Ka(g)},w=function(m){wt(b,m),Mt($,b)&&x()},g=function(){var m,B,E;!u&&nn.indexedDB&&(b={},m={},c&&c.abort(),c=new AbortController,E=(S=>{var T=yn();try{i&&An();var F=dn(e,S);return F=i?F.finally(hn):F}finally{T&&un()}})(B={subscr:m,signal:c.signal,requery:x,querier:e,trans:null}),Promise.resolve(E).then(function(S){n=!0,t=S,u||B.signal.aborted||(b={},(T=>{for(var F in T)if(le(T,F))return;return 1})($=m)||v||(et(ot,w),v=!0),Ka(function(){return!u&&r.next&&r.next(S)}))},function(S){n=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||u||Ka(function(){u||r.error&&r.error(S)})}))};return setTimeout(x,0),y});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var Lt=Wt;function Ja(e){var t=an;try{an=!0,et.storagemutated.fire(e),ga(e,!0)}finally{an=t}}xt(Lt,U(U({},qt),{delete:function(e){return new Lt(e,{addons:[]}).delete()},exists:function(e){return new Lt(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Lt.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(j(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==pn})}):_(n,t).toCollection().primaryKeys()).then(e)}catch{return Ve(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){Ce(this,e)}},ignoreTransaction:function(e){return X.trans?Cn(X.transless,e):e()},vip:rt,async:function(e){return function(){try{var t=ba(e.apply(this,arguments));return t&&typeof t.then=="function"?t:Y.resolve(t)}catch(n){return Ve(n)}}},spawn:function(e,t,n){try{var s=ba(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:Y.resolve(s)}catch(r){return Ve(r)}},currentTransaction:{get:function(){return X.trans||null}},waitFor:function(e,t){return e=Y.resolve(typeof e=="function"?Lt.ignoreTransaction(e):e).timeout(t||6e4),X.trans?X.trans.waitFor(e):e},Promise:Y,debug:{get:function(){return yt},set:function(e){Ia(e)}},derive:on,extend:Ce,props:xt,override:na,Events:o,on:et,liveQuery:gs,extendObservabilitySet:wt,getByKeyPath:Gt,setByKeyPath:gt,delByKeyPath:function(e,t){typeof t=="string"?gt(e,t,void 0):"length"in t&&[].map.call(t,function(n){gt(e,n,void 0)})},shallowClone:Ma,deepClone:bt,getObjectDiff:Jn,cmp:he,asap:aa,minKey:-1/0,addons:[],connections:On,errnames:sa,dependencies:nn,cache:dt,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),Lt.maxKey=Ie(Lt.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(et(ot,function(e){an||(e=new CustomEvent(st,{detail:e}),an=!0,dispatchEvent(e),an=!1)}),addEventListener(st,function(e){e=e.detail,an||Ja(e)}));var $n,an=!1,bs=function(){};return typeof BroadcastChannel<"u"&&((bs=function(){($n=new BroadcastChannel(st)).onmessage=function(e){return e.data&&Ja(e.data)}})(),typeof $n.unref=="function"&&$n.unref(),et(ot,function(e){an||$n.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Wt.disableBfCache&&e.persisted){yt&&console.debug("Dexie: handling persisted pagehide"),$n?.close();for(var t=0,n=On;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Wt.disableBfCache&&e.persisted&&(yt&&console.debug("Dexie: handling persisted pageshow"),bs(),Ja({all:new te(-1/0,[[]])}))})),Y.rejectionMapper=function(e,t){return!e||e instanceof gn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!es[e.name]?e:(t=new es[e.name](t||e.message,e),"stack"in e&&mt(t,"stack",{get:function(){return this.inner.stack}}),t)},Ia(yt),U(Wt,Object.freeze({__proto__:null,Dexie:Wt,Entity:os,PropModification:zn,RangeSet:te,add:function(e){return new zn({add:e})},cmp:he,default:Wt,liveQuery:gs,mergeRanges:In,rangesOverlap:Ra,remove:function(e){return new zn({remove:e})},replacePrefix:function(e,t){return new zn({replacePrefix:[e,t]})}}),{default:Wt}),Wt})})(ys)),ys.exports}var oi=ii();const Ns=si(oi),wr=Symbol.for("Dexie"),Cs=globalThis[wr]||(globalThis[wr]=Ns);if(Ns.semVer!==Cs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ns.semVer} and ${Cs.semVer}`);const{liveQuery:ki,mergeRanges:wi,rangesOverlap:$i,RangeSet:Si,cmp:Ei,Entity:Bi,PropModification:_i,replacePrefix:Mi,add:Pi,remove:Ti,DexieYProvider:Ai}=Cs,Je=new Cs("haushaltsbuch-db");Je.version(1).stores({years:"year",fixedTemplateState:"id"});Je.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Je.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Ba="singleton";function xs(){return new Date().toISOString()}async function Zn(){return Je.years.orderBy("year").toArray()}async function li(P){return Je.years.get(P)}async function Qn(P){await Je.years.put(P)}async function Ls(){const P=await Je.fixedTemplateState.get(Ba);if(!P){const p={id:Ba,templates:[],version:xs(),updatedAt:new Date().toISOString()};return await Je.fixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:P.templates,version:P.version}}async function Ks(P){const p=xs();return await Je.fixedTemplateState.put({id:Ba,templates:P,version:p,updatedAt:new Date().toISOString()}),p}async function qs(){const P=await Je.annualVariableFixedTemplateState.get(Ba);if(!P){const p={id:Ba,templates:[],version:xs(),updatedAt:new Date().toISOString()};return await Je.annualVariableFixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:P.templates,version:P.version}}async function js(P){const p=xs();return await Je.annualVariableFixedTemplateState.put({id:Ba,templates:P,version:p,updatedAt:new Date().toISOString()}),p}async function ci(P){await Je.auditLog.put(P)}async function Rs(){return Je.auditLog.orderBy("timestampIso").toArray()}async function ui(P){await Je.auditLog.clear(),P.length!==0&&await Je.auditLog.bulkPut(P)}async function di(){const P=await Zn(),[p,Oe,U]=await Promise.all([Ls(),qs(),Rs()]);return{exportedAt:new Date().toISOString(),years:P,fixedTemplates:p.templates,annualVariableFixedTemplates:Oe.templates,auditLogEntries:U}}async function hi(P){await Je.transaction("rw",[Je.years,Je.fixedTemplateState,Je.annualVariableFixedTemplateState,Je.auditLog],async()=>{await Je.years.clear(),await Je.years.bulkPut(P.years),await Ks(P.fixedTemplates),await js(P.annualVariableFixedTemplates??[]),await ui(P.auditLogEntries??[])})}function Le(P){const p=P.replace(",",".").trim();if(!p)return 0;const Oe=Number.parseFloat(p);return Number.isNaN(Oe)?0:Math.round(Oe*100)}const pi=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(P){return pi.format(P/100)}function Ct(P){return(P/100).toFixed(2)}function Pe(P){return new Date(2026,P-1,1).toLocaleDateString("de-DE",{month:"long"})}const Br=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function $r(P){return Br.includes(P)}function fi(P){switch(P){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Sr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function vi(P){const p={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Oe="habu-theme",U="habu-backup-dirty",ye="habu-unexported-change-log",se="habu-last-backup-filename",ke="habu-recurring-budget-defaults";let ie=null,Ce=null,pt=null,He=null,le=!1,xt=!1;const vt=new WeakMap;function mt(){const o=P.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),h=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),C=l.getPropertyValue("--table-stripe").trim(),M=l.getPropertyValue("--table-border").trim(),O=l.getPropertyValue("--budget-under").trim(),N=l.getPropertyValue("--danger-2").trim(),L=96,J=250,I=Q=>1-Math.pow(1-Math.max(0,Math.min(1,Q)),3);o.forEach(Q=>{Q.dataset.hoverBound!=="1"&&(Q.dataset.hoverBound="1",Q.addEventListener("mouseenter",()=>{Q.dataset.hovering="1",mt()}),Q.addEventListener("mouseleave",()=>{delete Q.dataset.hovering,delete Q.dataset.hoverX,mt()}),Q.addEventListener("mousemove",Me=>{const Be=Q.getBoundingClientRect(),Ke=Math.round(Me.clientX-Be.left);Q.dataset.hoverX=String(Ke),mt()}));const ne=Number.parseInt(Q.dataset.budgetCents??"0",10),be=Number.parseInt(Q.dataset.actualCents??"0",10),de=Q.dataset.label??"Kategorie",Ae=Q.dataset.hovering==="1",ce=`${de}|${ne}|${be}`,Se=Q.dataset.lastRenderSignature!==ce;Q.dataset.lastRenderSignature=ce;const at=Math.max(120,Math.floor(Q.clientWidth||120)),Ee=window.devicePixelRatio||1,fe=Math.floor(at*Ee),Ze=Math.floor(L*Ee);(Q.width!==fe||Q.height!==Ze)&&(Q.width=fe,Q.height=Ze);const K=Q.getContext("2d");if(!K)return;const ot=Math.max(1,ne,be),st=Math.min(1,Math.max(0,ne/ot)),et=Math.min(1,Math.max(0,be/ot)),It=ne-be,re=ne>0?be/ne*100:be>0?100:0,ft=8,Te=ft,Ye=34,Ie=at-ft*2,ze=22,We=Number.parseInt(Q.dataset.hoverX??"-1",10),lt=(Me,Be,Ke,Fe,Ge)=>{K.beginPath(),K.moveTo(Me+Ge,Be),K.lineTo(Me+Ke-Ge,Be),K.quadraticCurveTo(Me+Ke,Be,Me+Ke,Be+Ge),K.lineTo(Me+Ke,Be+Fe-Ge),K.quadraticCurveTo(Me+Ke,Be+Fe,Me+Ke-Ge,Be+Fe),K.lineTo(Me+Ge,Be+Fe),K.quadraticCurveTo(Me,Be+Fe,Me,Be+Fe-Ge),K.lineTo(Me,Be+Ge),K.quadraticCurveTo(Me,Be,Me+Ge,Be),K.closePath()},Vt=Me=>{K.setTransform(1,0,0,1,0,0),K.clearRect(0,0,Q.width,Q.height),K.scale(Ee,Ee),lt(Te,Ye,Ie,ze,8),K.fillStyle=C,K.fill(),K.strokeStyle=M,K.lineWidth=1,K.stroke();const Be=[.6,.25,.15],Ke=[.1,.16,.24];let Fe=0;Be.forEach((kt,ut)=>{const Yt=Ie*kt;K.save(),K.globalAlpha=Ke[ut]??.1,K.fillStyle=d,K.fillRect(Te+Fe,Ye,Yt,ze),K.restore(),Fe+=Yt});const Ge=ne>0&&be>ne?N:O,Ft=Ie*et*Me;lt(Te,Ye+3,Ft,ze-6,6),K.fillStyle=Ge,K.fill(),Ae&&(K.save(),K.strokeStyle=Ge,K.lineWidth=1.5,K.globalAlpha=.8,lt(Te-1,Ye+2,Math.max(2,Ft+2),ze-4,7),K.stroke(),K.restore());const Zt=Te+Ie*st;K.strokeStyle=h,K.lineWidth=Ae?3:2,K.beginPath(),K.moveTo(Zt,Ye-3),K.lineTo(Zt,Ye+ze+3),K.stroke(),Ae&&We>=Te&&We<=Te+Ie&&(K.save(),K.strokeStyle=h,K.globalAlpha=.35,K.lineWidth=1,K.beginPath(),K.moveTo(We,Ye-8),K.lineTo(We,Ye+ze+8),K.stroke(),K.restore()),K.fillStyle=h,K.font="600 12px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(de,Te,10);const Dt=re*Me;if(K.fillStyle=re>100?N:re<100?O:d,K.textAlign="right",K.fillText(`${Dt.toFixed(0)}%`,Te+Ie,10),K.fillStyle=d,K.font="500 11px system-ui, -apple-system, sans-serif",K.textAlign="left",K.textBaseline="top",K.fillText(`Ist ${f(be)} · Ziel ${f(ne)} · Δ ${It>=0?"+":""}${f(It)}`,Te,64),Ae){const kt=`Nutzung ${re.toFixed(1)}%`;K.font="600 11px system-ui, -apple-system, sans-serif";const ut=8,Yt=5,en=22,_=K.measureText(kt).width+ut*2,j=Number.isFinite(We)?We-_/2:Te+Ie-_,rt=Math.min(Te+Ie-_,Math.max(Te,j)),wn=Ye-en-8;K.save(),K.fillStyle=h,K.globalAlpha=.92,lt(rt,wn,_,en,6),K.fill(),K.restore(),K.fillStyle=C,K.textAlign="left",K.textBaseline="top",K.fillText(kt,rt+ut,wn+Yt)}},Xt=vt.get(Q);if(Xt&&window.cancelAnimationFrame(Xt),!Se){Vt(1);return}const _t=performance.now(),ct=Me=>{const Be=Me-_t,Ke=Math.min(1,Be/J);if(Vt(I(Ke)),Ke<1){const Fe=window.requestAnimationFrame(ct);vt.set(Q,Fe);return}vt.delete(Q)},Qt=window.requestAnimationFrame(ct);vt.set(Q,Qt)})}function on(){P.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const h=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(h.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),C=l.querySelector("[data-year-trend-active-net]"),M=l.querySelector("[data-year-trend-active-income]"),O=l.querySelector("[data-year-trend-active-expense]"),N=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!C||!M||!O||!N)return;const J=(ne,be)=>{ne.classList.remove("danger","budget-under");const de=be<0?"danger":be>0?"budget-under":"";de&&ne.classList.add(de)},I=ne=>{const be=ne.dataset.monthLabel??"-",de=Number.parseInt(ne.dataset.netCents??"0",10),Ae=Number.parseInt(ne.dataset.actualNetCents??"0",10),ce=Number.parseInt(ne.dataset.incomeCents??"0",10),Se=Number.parseInt(ne.dataset.expenseCents??"0",10),at=Number.parseInt(ne.dataset.deltaCents??"0",10);d.textContent=be,C.textContent=f(de),M.textContent=f(ce),O.textContent=f(Se),N.textContent=`${at>=0?"+":""}${f(at)}`,J(C,de),J(N,at),h.forEach(Ee=>{const fe=Ee===ne;Ee.classList.toggle("is-active",fe),Ee.setAttribute("aria-pressed",String(fe))}),L&&(L.textContent=`${be}: Kalkulierter Saldo ${f(de)}, Ist-Saldo ${f(Ae)}, Einkommen ${f(ce)}, Ausgaben ${f(Se)}`)};h.forEach(ne=>{const be=()=>{I(ne)};ne.addEventListener("mouseenter",be),ne.addEventListener("focus",be),ne.addEventListener("click",be)});const Q=h.find(ne=>ne.dataset.pointDefault==="1")??h[h.length-1];Q&&I(Q)})}function ea(o){if(o==="dashboard"){const l=p.years.slice().sort((d,C)=>C.year-d.year);l.some(d=>d.year===p.dashboardYear)||(p.dashboardYear=p.selectedYear??l[0]?.year??null)}p.topModal=o,ae()}function _a(){p.topModal&&(p.topModal=null,ae())}function ta(){p.showUnexportedChangeLogModal=!0,ae()}function na(){p.showUnexportedChangeLogModal&&(p.showUnexportedChangeLogModal=!1,ae())}function Nn(){p.showPersistentAuditLogModal=!0,ae()}function aa(){p.showPersistentAuditLogModal&&(p.showPersistentAuditLogModal=!1,ae())}function Gt(){le||(le=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(p.showUnexportedChangeLogModal){o.preventDefault(),na();return}if(p.showPersistentAuditLogModal){o.preventDefault(),aa();return}p.topModal&&(o.preventDefault(),_a())}}))}function gt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ma(){const o=P.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",gt())}function ks(){if(xt)return;xt=!0;const o=()=>{Ma(),mt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Pa(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),ie=l,l}function Xa(){if(Ce&&document.body.contains(Ce))return Ce;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return Ce=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),Ce=l,l}function Ln(){if(He&&document.body.contains(He))return He;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return He=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),He=l,l}function bt(){if(!Ce){pt=null;return}Ce.innerHTML="",pt=null}function Kn(){He&&(He.innerHTML="")}function Ta(o,l,h){const d=new Date,C=d.getFullYear(),M=d.getMonth()+1,O=d.getDate(),N=new Date(o,l,0).getDate();if(o<C||o===C&&l<M)return{occurrences:0,remainingDays:0};const L=o===C&&l===M?Math.min(O,N):1,J=Math.max(0,N-L+1);let I=0;for(let Q=L;Q<=N;Q+=1)new Date(o,l-1,Q).getDay()===h&&(I+=1);return{occurrences:I,remainingDays:J}}async function Aa(o,l){const h=je();h&&(h.weeklyShoppingWeekday=o,h.weeklyShoppingEstimateCents=Math.max(0,l),await Xe(`Wocheneinkauf geplant: ${Sr.find(d=>d.value===o)?.label??"Wochentag"} mit ${f(h.weeklyShoppingEstimateCents)} €`),ae())}function ws(){const o=je(),l=Ut();if(!o||!l)return;const h=Ln();Kn();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,C=o.weeklyShoppingEstimateCents??0,M=l.year,O=o.month,N=Rn(M,O),L=N?nt(N):{foodCents:0},J=N?N.foodBudgetCents??0:0,I=L.foodCents,Q=J-I;h.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Sr.map(re=>`<option value="${re.value}" ${re.value===d?"selected":""}>${re.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${Ct(C)}" />
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
    `;const ne=h.querySelector(".weekly-shopping-modal-backdrop"),be=h.querySelector("#weekly-shopping-weekday"),de=h.querySelector("#weekly-shopping-estimate"),Ae=h.querySelector("#weekly-shopping-occurrences"),ce=h.querySelector("#weekly-shopping-total"),Se=h.querySelector("#weekly-shopping-rest-before"),at=h.querySelector("#weekly-shopping-rest-after"),Ee=h.querySelector("#weekly-shopping-days-left"),fe=h.querySelector("#weekly-shopping-per-day"),Ze=h.querySelector("#weekly-shopping-cancel"),K=h.querySelector("#weekly-shopping-save");function ot(){const re=Number.parseInt(be?.value??"1",10);return Number.isInteger(re)&&re>=0&&re<=6?re:1}function st(){return Math.max(0,Le(de?.value??"0"))}function et(){const re=ot(),ft=st(),{occurrences:Te,remainingDays:Ye}=Ta(M,O,re),Ie=Te*ft,ze=Q-Ie,We=Ye>0?Math.trunc(ze/Ye):0;Ae&&(Ae.textContent=`${Te}`),ce&&(ce.textContent=`${f(Ie)} €`),Se&&(Se.textContent=`${f(Q)} €`),at&&(at.textContent=`${f(ze)} €`,at.className=ze<0?"danger":ze>0?"budget-under":""),Ee&&(Ee.textContent=`${Ye}`),fe&&(fe.textContent=`${f(We)} €`,fe.className=We<0?"danger":We>0?"budget-under":"")}async function It(){await Aa(ot(),st()),Kn()}Ze?.addEventListener("click",()=>{Kn()}),K?.addEventListener("click",async()=>{await It()}),be?.addEventListener("change",()=>{et()}),de?.addEventListener("input",()=>{et()}),de?.addEventListener("keydown",async re=>{if(re.key==="Escape"){re.preventDefault(),Kn();return}re.key==="Enter"&&(re.preventDefault(),await It())}),ne?.addEventListener("click",re=>{re.target===ne&&Kn()}),window.setTimeout(()=>{de?.focus(),de?.select(),et()},0)}function ln(o,l){let h=o;const d=l.min;if(d){const M=Number.parseFloat(d);if(!Number.isNaN(M)){const O=Math.round(M*100);h=Math.max(h,O)}}const C=l.max;if(C){const M=Number.parseFloat(C);if(!Number.isNaN(M)){const O=Math.round(M*100);h=Math.min(h,O)}}return h}function tt(o){if(o.disabled)return;const l=Xa();bt(),pt=o;const h=Le(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${f(h)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${f(h)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${f(h)} €</strong></div>
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
    `;const C=l.querySelector(".amount-modal-backdrop"),M=l.querySelector("#amount-modal-delta"),O=l.querySelector("#amount-modal-next-delta"),N=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),J=l.querySelector("#amount-modal-overwrite"),I=l.querySelector("#amount-modal-apply");function Q(){const ce=Le(M?.value??"0");return ln(h+ce,o)}function ne(){const ce=Le(M?.value??"0");return ln(ce,o)}function be(){O&&(O.textContent=`${f(Q())} €`),N&&(N.textContent=`${f(ne())} €`)}function de(){const ce=pt;if(!ce){bt();return}const Se=Q();bt(),ce.value=Ct(Se),ce.dispatchEvent(new Event("change",{bubbles:!0}))}function Ae(){const ce=pt;if(!ce){bt();return}const Se=ne();bt(),ce.value=Ct(Se),ce.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{bt()}),J?.addEventListener("click",()=>{Ae()}),I?.addEventListener("click",()=>{de()}),M?.addEventListener("input",()=>{be()}),M?.addEventListener("keydown",ce=>{if(ce.key==="Escape"){ce.preventDefault(),bt();return}ce.key==="Enter"&&(ce.preventDefault(),de())}),C?.addEventListener("click",ce=>{ce.target===C&&bt()}),window.setTimeout(()=>{M?.focus(),M?.select(),be()},0)}function me(o,l="success"){const h=Pa(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,h.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const C=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},C)}function mn(){return new Date().getMonth()+1}function qt(){return new Date().getFullYear()}function Qa(o){const l=qt(),h=o.find(d=>d.year===l);return h?h.year:o[0]?.year??null}function gn(){return new Date().toISOString().slice(0,10)}function Za(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),h=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${h}${d}`}function Et(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Bn(){const o=localStorage.getItem(Oe);return o&&$r(o)?o:"light"}function sa(o){p.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Oe,o)}function $s(){return localStorage.getItem(U)==="1"}function Z(o){localStorage.setItem(U,o?"1":"0")}function es(){const o=localStorage.getItem(ye);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(h=>{if(!h||typeof h!="object")return!1;const d=h;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function we(o){localStorage.setItem(ye,JSON.stringify(o.slice(-200)))}function qn(){const o=localStorage.getItem(se);if(!o)return null;const l=o.trim();return l||null}function Ss(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(ke);if(!l)return o;try{const h=JSON.parse(l),d=C=>typeof C=="number"&&Number.isFinite(C)?C:null;return{foodBudgetCents:d(h.foodBudgetCents),goingOutBudgetCents:d(h.goingOutBudgetCents),fixedBudgetCents:d(h.fixedBudgetCents),variableBudgetCents:d(h.variableBudgetCents),miscBudgetCents:d(h.miscBudgetCents)}}catch{return o}}function bn(o){localStorage.setItem(ke,JSON.stringify(o))}function ts(o){o.months.forEach(l=>{const{recurringBudgetDefaults:h}=p;typeof h.foodBudgetCents=="number"&&(l.foodBudgetCents=h.foodBudgetCents),typeof h.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=h.goingOutBudgetCents),typeof h.fixedBudgetCents=="number"&&(l.fixedBudgetCents=h.fixedBudgetCents),typeof h.variableBudgetCents=="number"&&(l.variableBudgetCents=h.variableBudgetCents),typeof h.miscBudgetCents=="number"&&(l.miscBudgetCents=h.miscBudgetCents)})}function Es(o){const l=o.trim();l&&localStorage.setItem(se,l)}async function Bs(){Pa(),sa(Bn()),p.hasUnexportedChanges=$s(),p.unexportedChangeLog=es(),p.persistentAuditLog=await Rs(),p.lastBackupFileName=qn(),p.recurringBudgetDefaults=Ss(),Gt(),ks();const[o,l,h]=await Promise.all([Zn(),Ls(),qs()]);p.years=o,p.annualVariableFixedTemplates=h.templates,p.annualVariableFixedTemplateVersion=h.version,Oa(p.years),ia(p.years),p.fixedTemplates=l.templates,p.fixedTemplateVersion=l.version,await Ia(p.years),o.length>0&&(p.selectedYear=Qa(o),p.selectedMonth=mn()),ae()}function Oa(o){const l=h=>h==="balance"||h==="fresh"||h==="salary"?h:void 0;o.forEach(h=>{h.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const C=Number(d.weeklyShoppingWeekday);Number.isInteger(C)&&C>=0&&C<=6?d.weeklyShoppingWeekday=C:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(C=>{const M=l(C.incomeSource);if(!M){const{incomeSource:O,...N}=C;return N}return{...C,incomeSource:M}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((C,M)=>C+M.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((C,M)=>C+M.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function jn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function yt(o){return o==="fresh"||o==="salary"||!o}async function Ia(o){for(const l of o)await Qn(l)}function Ut(){if(p.selectedYear)return p.years.find(o=>o.year===p.selectedYear)}function je(){const o=Ut();if(o)return o.months.find(l=>l.month===p.selectedMonth)}function Rn(o,l){const h=p.years.find(d=>d.year===o);if(h)return h.months.find(d=>d.month===l)}function nt(o){const l=o.days.reduce((N,L)=>N+L.foodCents,0),h=o.days.reduce((N,L)=>N+L.goingOutCents,0),d=o.fixedCosts.reduce((N,L)=>N+L.actualCents,0),C=o.variableCosts.reduce((N,L)=>N+L.amountCents,0)+o.variablePositions.reduce((N,L)=>N+L.actualCents,0),M=o.miscCosts.reduce((N,L)=>N+L.amountCents,0),O=l+h+d+C+M;return{foodCents:l,goingOutCents:h,fixedCents:d,variableCents:C,miscCents:M,totalCents:O}}function jt(o){const l=o.foodBudgetCents??0,h=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((O,N)=>O+N.plannedCents,0),C=o.variablePositions.reduce((O,N)=>O+N.budgetCents,0),M=o.miscBudgetCents??0;return l+h+d+(o.variableBudgetCents??C)+M}function _n(o){return o.months.reduce((l,h)=>{const d=nt(h);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Vn(o){return o.months.slice().sort((l,h)=>l.month-h.month).map(l=>({month:l.month,summary:nt(l)}))}function Yn(o){const l=o.months.reduce((O,N)=>O+(N.foodBudgetCents??0),0),h=o.months.reduce((O,N)=>O+(N.goingOutBudgetCents??0),0),d=o.months.reduce((O,N)=>O+(N.fixedBudgetCents??N.fixedCosts.reduce((L,J)=>L+J.plannedCents,0)),0),C=o.months.reduce((O,N)=>O+(N.variableBudgetCents??N.variablePositions.reduce((L,J)=>L+J.budgetCents,0)),0),M=o.months.reduce((O,N)=>O+(N.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:h,fixedCents:d,variableCents:C,miscCents:M,totalCents:l+h+d+C+M}}function Mn(o){return o.months.reduce((l,h)=>l+h.incomes.reduce((d,C)=>d+(yt(C.incomeSource)?C.amountCents:0),0),0)}function cn(o){return o.months.reduce((l,h)=>(h.incomes.forEach(d=>{if(d.incomeSource==="salary"){l.salaryIncomeCents+=d.amountCents;return}(d.incomeSource==="fresh"||d.incomeSource==null)&&(l.freshIncomeCents+=d.amountCents)}),l),{salaryIncomeCents:0,freshIncomeCents:0})}function Pn(o,l){const h=o.months.slice().sort((d,C)=>d.month-C.month)[0];return h?l.get(pe(o.year,h.month))?.carriedFromPreviousCents??0:0}function Fa(){const o=p.years.slice().sort((d,C)=>d.year-C.year).flatMap(d=>d.months.slice().sort((C,M)=>C.month-M.month).map(C=>({year:d.year,month:C}))),l=new Map;let h=0;return o.forEach(({year:d,month:C},M)=>{const O=C.carryoverOverrideCents,N=typeof O=="number",L=N?O:h,J=M>0||N,I=C.incomes.reduce((de,Ae)=>de+(yt(Ae.incomeSource)?Ae.amountCents:0),0),Q=jt(C),ne=I+L,be=ne-Q;l.set(pe(d,C.month),{hasPreviousMonth:J,carriedFromPreviousCents:L,recordedIncomeCents:I,effectiveIncomeCents:ne,plannedBudgetCents:Q,netCents:be}),h=be}),l}function Re(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function X(o){return`${o>0?"+":""}${f(o)}`}function Rt(o,l){const h=o-l,d=Re(l,o);return`${f(o)} <span class="eval-diff ${d}">(Δ ${X(h)})</span>`}function At(o,l){const h=o!==null,d=h?o-l:null,C=h?Re(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${h?`${f(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(l)} €</strong>
      </div>
      <div class="column-overview-row ${C}">
        <span>Diff</span>
        <strong>${d===null?"-":`${f(d)} €`}</strong>
      </div>
    </div>`}async function ra(o){if(await li(o)){alert(`Jahr ${o} existiert bereits.`);return}const h=yr(o,p.fixedTemplates,p.fixedTemplateVersion);ts(h),un(h),await Qn(h),p.years=await Zn(),Y(`Jahr ${o} wurde angelegt`),p.selectedYear=o,p.selectedMonth=mn(),me(`Jahr ${o} wurde angelegt.`),ae()}function Y(o="Änderung an den Daten"){p.hasUnexportedChanges=!0,Z(!0);const l=p.selectedYear?`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",h=new Date().toISOString(),d=`${o} (${l})`,C={id:Tt("change"),timestampIso:h,message:d};p.unexportedChangeLog=[...p.unexportedChangeLog,C].slice(-200),we(p.unexportedChangeLog);const M={id:Tt("audit"),timestampIso:h,message:d};p.persistentAuditLog=[...p.persistentAuditLog,M].slice().sort((O,N)=>O.timestampIso.localeCompare(N.timestampIso)),ci(M).catch(O=>{console.error("Audit-Log konnte nicht gespeichert werden",O),me("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Da(o){const l=o.trim();l&&(p.lastBackupFileName=l,Es(l))}function Na(o){p.hasUnexportedChanges=!1,Z(!1),p.unexportedChangeLog=[],we([]),p.showUnexportedChangeLogModal=!1,Da(o)}async function Xe(o){const l=Ut();l&&(await Qn(l),p.years=await Zn(),Y(o))}async function Bt(o){for(const l of p.years)await Qn(l);p.years=await Zn(),Y(o)}function pe(o,l){return o*100+l}function Tn(o,l,h){const d=`${o} auf ${f(h)} € gesetzt`;return h>l?`${d} (erhöht um ${f(h-l)} €)`:h<l?`${d} (verringert um ${f(l-h)} €)`:d}function La(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const h=l[1],d=l[2];return!h||!d?null:{year:Number.parseInt(h,10),month:Number.parseInt(d,10)}}function yn(o,l){const h=La(o.dueDateIso);if(!h||l.year<h.year)return;const d=l.months.find(M=>M.month===h.month);!d||d.variablePositions.some(M=>M.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Tt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],ge(d))}function un(o){p.annualVariableFixedTemplates.forEach(l=>{yn(l,o)})}function ia(o){const l=new Set(p.annualVariableFixedTemplates.map(h=>h.id));o.forEach(h=>{h.months.forEach(d=>{const C=d.variablePositions.some(O=>typeof O.autoAnnualTemplateId=="string"),M=d.fixedCosts.some(O=>typeof O.autoAnnualTemplateId=="string");C&&(d.variablePositions=d.variablePositions.filter(O=>O.autoAnnualTemplateId?l.has(O.autoAnnualTemplateId):!0),ge(d)),M&&(d.fixedCosts=d.fixedCosts.filter(O=>!O.autoAnnualTemplateId),Ot(d))}),un(h)})}function Ot(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,h)=>l+h.plannedCents,0)}function ge(o){o.variableBudgetCents=o.variablePositions.reduce((l,h)=>l+h.budgetCents,0)}function Qe(){if(p.selectedYear)return`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function ns(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Qe());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const h=l[1],d=l[2];return!h||!d?null:{year:Number.parseInt(h,10),month:Number.parseInt(d,10)}}function oa(o,l){const h=pe(l.year,l.month);p.years.forEach(d=>{d.months.forEach(C=>{if(pe(d.year,C.month)<h)return;C.fixedCosts.some(O=>O.templateId===o.id)||(C.fixedCosts.push({id:Tt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Ot(C))})})}function la(o,l,h){const d=pe(h.year,h.month);p.years.forEach(C=>{C.months.forEach(M=>{pe(C.year,M.month)<d||(M.fixedCosts=M.fixedCosts.map(O=>O.templateId!==l.id?O:{...O,name:l.name,plannedCents:l.plannedCents,actualCents:O.actualCents===o.plannedCents?l.plannedCents:O.actualCents}),Ot(M))})})}function ca(o,l){const h=pe(l.year,l.month);p.years.forEach(d=>{d.months.forEach(C=>{pe(d.year,C.month)<h||(C.fixedCosts=C.fixedCosts.filter(M=>M.templateId!==o),Ot(C))})})}async function _s(o,l){const h=o.trim();if(!h)return;const d=ns();if(!d)return;const C=!!p.editingFixedTemplateId;if(p.editingFixedTemplateId){const M=p.fixedTemplates.find(N=>N.id===p.editingFixedTemplateId);if(!M)return;const O={...M,name:h,plannedCents:l};p.fixedTemplates=p.fixedTemplates.map(N=>N.id===p.editingFixedTemplateId?O:N),la(M,O,d)}else{const M={id:Tt("tpl"),name:h,plannedCents:l};p.fixedTemplates=[...p.fixedTemplates,M],oa(M,d)}p.fixedTemplateVersion=await Ks(p.fixedTemplates),p.editingFixedTemplateId=null,await Bt(C?`Fixkosten-Vorlage aktualisiert: ${h} (${f(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${h} (${f(l)} €)`),me(C?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function dn(o){p.editingFixedTemplateId=o,ae()}function An(){p.editingFixedTemplateId=null,ae()}async function hn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const h=ns();if(!h)return;const d=p.fixedTemplates.find(C=>C.id===o);p.fixedTemplates=p.fixedTemplates.filter(C=>C.id!==o),ca(o,h),p.editingFixedTemplateId===o&&(p.editingFixedTemplateId=null),p.fixedTemplateVersion=await Ks(p.fixedTemplates),await Bt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),me("Fixkosten-Vorlage wurde gelöscht."),ae()}async function ua(o,l,h){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const C=La(l);if(!C){alert("Bitte ein gültiges Datum auswählen.");return}if(h<=0){alert("Bitte einen positiven Betrag eingeben.");return}const M={id:Tt("annualtpl"),name:d,plannedCents:h,dueDateIso:l};p.annualVariableFixedTemplates=[...p.annualVariableFixedTemplates,M],p.years.forEach(O=>{yn(M,O)}),p.annualVariableFixedTemplateVersion=await js(p.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${f(h)} €, jährlich in ${Pe(C.month)})`),me("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function Ms(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const h=p.annualVariableFixedTemplates.find(d=>d.id===o);h&&(p.annualVariableFixedTemplates=p.annualVariableFixedTemplates.filter(d=>d.id!==o),p.years.forEach(d=>{d.months.forEach(C=>{C.variablePositions=C.variablePositions.filter(M=>M.autoAnnualTemplateId!==o),ge(C),C.fixedCosts=C.fixedCosts.filter(M=>M.autoAnnualTemplateId!==o),Ot(C)})}),p.annualVariableFixedTemplateVersion=await js(p.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage gelöscht: ${h.name}`),me("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function Jt(o,l,h){const d=je();if(!d)return;const M=d.days.find(O=>O.isoDate===o)?.[l]??0;d.days=d.days.map(O=>O.isoDate===o?{...O,[l]:h}:O),await Xe(Tn(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,M,h)),ae()}async function as(o,l){const h=je();if(!h)return;const d=h.fixedCosts.find(C=>C.id===o);h.fixedCosts=h.fixedCosts.map(C=>C.id===o?{...C,actualCents:l}:C),await Xe(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${f(l)} €`),ae()}async function Cn(o,l){const h=je();if(!h)return;const d=h.fixedCosts.find(M=>M.id===o);if(!d)return;const C=d.plannedCents;h.fixedCosts=h.fixedCosts.map(M=>M.id===o?{...M,plannedCents:l}:M),Ot(h),await Xe(Tn(`Fixkosten-Budget angepasst: ${d.name}`,C,l)),ae()}async function ss(o,l){const h=je();if(!h)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const C={id:Tt("fixed"),templateId:Tt("fixed-local"),name:d,plannedCents:l,actualCents:0};h.fixedCosts=[C,...h.fixedCosts],Ot(h),await Xe(`Fixkosten-Position hinzugefügt: ${d} (${f(l)} €)`),me("Fixkosten-Position wurde hinzugefügt."),ae()}async function Ka(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const h=je();if(!h)return;const d=h.fixedCosts.find(C=>C.id===o);d&&(h.fixedCosts=h.fixedCosts.filter(C=>C.id!==o),Ot(h),await Xe(`Fixkosten-Position gelöscht: ${d.name}`),me("Fixkosten-Position wurde gelöscht."),ae())}async function Ve(o){await pn("fixedBudgetCents",o,"Fixkosten")}async function xn(o){await pn("foodBudgetCents",o,"Essen")}async function Ht(o){await pn("goingOutBudgetCents",o,"Ausgehen")}async function rs(o){await pn("miscBudgetCents",o,"Sonstiges")}async function On(o){await pn("variableBudgetCents",o,"Variable Kosten")}async function pn(o,l,h){const d=je(),C=p.selectedYear;if(!d||!C||d[o]===l)return;const M=d[o];if(d[o]=l,confirm(`Soll das Budget "${h}" auch für zukünftige Monate übernommen werden?`)){const N=pe(C,p.selectedMonth);p.years.forEach(J=>{J.months.forEach(I=>{pe(J.year,I.month)<=N||(I[o]=l)})}),p.recurringBudgetDefaults[o]=l,bn(p.recurringBudgetDefaults);const L=Tn(`Budget "${h}"`,M??0,l);await Bt(`${L} (inkl. zukünftiger Monate)`),me(`Budget "${h}" wurde für zukünftige Monate übernommen.`),ae();return}await Xe(Tn(`Budget "${h}"`,M??0,l)),ae()}async function da(o){const l=je();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Xe(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(o)} € gesetzt`),ae())}async function ha(o,l,h){const d=je(),C=p.selectedYear;if(!d||!C)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Tt("varpos"),name:M,budgetCents:l,actualCents:0},...d.variablePositions],ge(d),h){const O=pe(C,p.selectedMonth);p.years.forEach(N=>{N.months.forEach(L=>{pe(N.year,L.month)<=O||(L.variablePositions=[{id:Tt("varpos"),name:M,budgetCents:l,actualCents:0},...L.variablePositions],ge(L))})}),await Bt(`Variable Position hinzugefügt: ${M} (${f(l)} €) für zukünftige Monate`),me("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Xe(`Variable Position hinzugefügt: ${M} (${f(l)} €)`),me("Variable Position wurde hinzugefügt."),ae()}async function kn(o,l){const h=je();if(!h)return;const d=h.variablePositions.find(M=>M.id===o),C=d?.actualCents??0;h.variablePositions=h.variablePositions.map(M=>M.id===o?{...M,actualCents:l}:M),await Xe(Tn(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,C,l)),ae()}async function is(o,l){const h=je();if(!h)return;const d=h.variablePositions.find(M=>M.id===o),C=d?.budgetCents??0;h.variablePositions=h.variablePositions.map(M=>M.id===o?{...M,budgetCents:l}:M),ge(h),await Xe(Tn(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,C,l)),ae()}async function pa(o){if(!confirm("Variable Position wirklich löschen?"))return;const h=je(),d=p.selectedYear;if(!h||!d)return;const C=h.variablePositions.find(L=>L.id===o);if(!C)return;const M=pe(d,p.selectedMonth),N=p.years.some(L=>L.months.some(J=>pe(L.year,J.month)>M&&J.variablePositions.some(I=>I.name===C.name&&I.budgetCents===C.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(h.variablePositions=h.variablePositions.filter(L=>L.id!==o),ge(h),N){p.years.forEach(L=>{L.months.forEach(J=>{pe(L.year,J.month)<=M||(J.variablePositions=J.variablePositions.filter(I=>!(I.name===C.name&&I.budgetCents===C.budgetCents)),ge(J))})}),await Bt(`Variable Position gelöscht: ${C.name} (inkl. zukünftiger Monate)`),me("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Xe(`Variable Position gelöscht: ${C.name}`),me("Variable Position wurde gelöscht."),ae()}async function os(o){const l=je(),h=p.selectedYear;if(!l||!h)return;const d=l.variablePositions.find(I=>I.id===o);if(!d)return;const C={year:p.selectedMonth===12?h+1:h,month:p.selectedMonth===12?1:p.selectedMonth+1};let M=p.years.find(I=>I.year===C.year);if(!M){const I=yr(C.year,p.fixedTemplates,p.fixedTemplateVersion);ts(I),un(I),await Qn(I),p.years=[...p.years,I].sort((Q,ne)=>Q.year-ne.year),M=I}const O=M.months.find(I=>I.month===C.month);if(!O)return;const N=O.variablePositions.some(I=>I.id===d.id||I.name===d.name&&I.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(I=>I.id!==o),ge(l),!N){const Q=O.variablePositions.some(ne=>ne.id===d.id)?{...d,id:Tt("varpos")}:d;O.variablePositions=[Q,...O.variablePositions],ge(O)}const L=`${Pe(C.month)} ${C.year}`,J=`Variable Position verschoben: ${d.name} → ${L}`;if(C.year===h)await Xe(J);else{const I=Ut();if(!I)return;await Qn(I),await Qn(M),p.years=await Zn(),Oa(p.years),Y(J)}me(N?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),ae()}async function he(o,l,h){const d=je(),C=p.selectedYear;if(!d||!C)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const O=Cr(M,l);if(d.miscCosts=[O,...d.miscCosts],h){const N=pe(C,p.selectedMonth);p.years.forEach(L=>{L.months.forEach(J=>{pe(L.year,J.month)<=N||(J.miscCosts=[Cr(M,l),...J.miscCosts])})}),await Bt(`Sonstige Position hinzugefügt: ${M} (${f(l)} €) für zukünftige Monate`),me("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Xe(`Sonstige Position hinzugefügt: ${M} (${f(l)} €)`),me("Sonstige Position wurde hinzugefügt."),ae()}async function ls(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const h=je(),d=p.selectedYear;if(!h||!d)return;const C=h.miscCosts.find(L=>L.id===o);if(!C)return;const M=pe(d,p.selectedMonth),N=p.years.some(L=>L.months.some(J=>pe(L.year,J.month)>M&&J.miscCosts.some(I=>I.description===C.description&&I.amountCents===C.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(h.miscCosts=h.miscCosts.filter(L=>L.id!==o),N){p.years.forEach(L=>{L.months.forEach(J=>{pe(L.year,J.month)<=M||(J.miscCosts=J.miscCosts.filter(I=>!(I.description===C.description&&I.amountCents===C.amountCents)))})}),await Bt(`Sonstige Position gelöscht: ${C.description} (${f(C.amountCents)} €) inkl. zukünftiger Monate`),me("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Xe(`Sonstige Position gelöscht: ${C.description} (${f(C.amountCents)} €)`),me("Sonstige Position wurde gelöscht."),ae()}async function qa(o,l,h,d){const C=je(),M=p.selectedYear;if(!C||!M)return;const O=o.trim();if(!O){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const N=xr(O,l,h);if(C.incomes=[N,...C.incomes],d){const L=pe(M,p.selectedMonth);p.years.forEach(J=>{J.months.forEach(I=>{pe(J.year,I.month)<=L||(I.incomes=[xr(O,l,h),...I.incomes])})}),await Bt(`Einkommen hinzugefügt: ${O} (${f(l)} €, ${jn(h)}) für zukünftige Monate`),me("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await Xe(`Einkommen hinzugefügt: ${O} (${f(l)} €, ${jn(h)})`),me("Einkommen wurde hinzugefügt."),ae()}async function fa(o,l){const h=je();if(!h)return;const d=h.incomes.find(C=>C.id===o);d&&(h.incomes=h.incomes.map(C=>{if(C.id!==o)return C;if(!l){const{incomeSource:M,...O}=C;return O}return{...C,incomeSource:l}}),await Xe(`Einkommensart angepasst: ${d.description} → ${jn(l)}`),ae())}async function zn(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const h=je(),d=p.selectedYear;if(!h||!d)return;const C=h.incomes.find(L=>L.id===o);if(!C)return;const M=pe(d,p.selectedMonth),N=p.years.some(L=>L.months.some(J=>pe(L.year,J.month)>M&&J.incomes.some(I=>I.description===C.description&&I.amountCents===C.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(h.incomes=h.incomes.filter(L=>L.id!==o),N){p.years.forEach(L=>{L.months.forEach(J=>{pe(L.year,J.month)<=M||(J.incomes=J.incomes.filter(I=>!(I.description===C.description&&I.amountCents===C.amountCents)))})}),await Bt(`Einkommen gelöscht: ${C.description} (${f(C.amountCents)} €) inkl. zukünftiger Monate`),me("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Xe(`Einkommen gelöscht: ${C.description} (${f(C.amountCents)} €)`),me("Einkommen wurde gelöscht."),ae()}async function ja(){const o=await di(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),h=URL.createObjectURL(l),d=`haushaltsbuch-backup-${gn()}-${Za()}.json`,C=document.createElement("a");C.href=h,C.download=d,C.click(),URL.revokeObjectURL(h),Na(d),ae(),me("Backup wurde exportiert.")}async function cs(o){const l=await o.text(),h=JSON.parse(l);await hi(h);const[d,C,M]=await Promise.all([Zn(),Ls(),qs()]);p.years=d,p.annualVariableFixedTemplates=M.templates,p.annualVariableFixedTemplateVersion=M.version,Oa(p.years),ia(p.years),p.fixedTemplates=C.templates,p.fixedTemplateVersion=C.version,await Ia(p.years),p.persistentAuditLog=await Rs(),p.selectedYear=Qa(d),p.selectedMonth=mn(),Na(o.name),me("Backup wurde importiert."),ae()}function ae(){const o=Ut(),l=je(),h=gn(),d=l?nt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},C=o?_n(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},M=o?Vn(o):[],O=l?l.foodBudgetCents??0:0,N=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((a,k)=>a+k.plannedCents,0):0,J=l?l.variableBudgetCents??l.variablePositions.reduce((a,k)=>a+k.budgetCents,0):0,I=l?l.miscBudgetCents??0:0,Q=o?o.months.reduce((a,k)=>a+(k.foodBudgetCents??0),0):0,ne=o?o.months.reduce((a,k)=>a+(k.goingOutBudgetCents??0),0):0,be=o?o.months.reduce((a,k)=>a+(k.fixedBudgetCents??k.fixedCosts.reduce((q,H)=>q+H.plannedCents,0)),0):0,de=o?o.months.reduce((a,k)=>a+(k.variableBudgetCents??k.variablePositions.reduce((q,H)=>q+H.budgetCents,0)),0):0,Ae=o?o.months.reduce((a,k)=>a+(k.miscBudgetCents??0),0):0,ce=l?l.incomes.reduce((a,k)=>a+(yt(k.incomeSource)?k.amountCents:0),0):0,Se=l?l.incomes.reduce((a,k)=>a+(k.incomeSource==="salary"?k.amountCents:0),0):0,at=l?l.incomes.reduce((a,k)=>a+(k.incomeSource==="fresh"?k.amountCents:0),0):0,Ee=Fa(),fe=o?Ee.get(pe(o.year,p.selectedMonth)):void 0,Ze=o?o.months.slice().sort((a,k)=>a.month-k.month)[0]:void 0,K=fe?.carriedFromPreviousCents??0,ot=fe?.hasPreviousMonth??!1,st=fe?.effectiveIncomeCents??ce,et=l?jt(l):0,It=fe?.netCents??ce-et,re=st-d.totalCents,ft=Se-d.totalCents,Te=d.totalCents>0?`${(Se/d.totalCents*100).toFixed(1)} %`:"-",Ye=K<0?"danger":K>0?"budget-under":"",Ie=It<0?"danger":It>0?"budget-under":"",ze=re<0?"danger":re>0?"budget-under":"",We=o?o.months.reduce((a,k)=>a+k.incomes.reduce((q,H)=>q+(yt(H.incomeSource)?H.amountCents:0),0),0):0,lt=o?o.months.reduce((a,k)=>a+k.incomes.reduce((q,H)=>q+(H.incomeSource==="salary"?H.amountCents:0),0),0):0,Vt=o?o.months.reduce((a,k)=>a+k.incomes.reduce((q,H)=>q+(H.incomeSource==="fresh"?H.amountCents:0),0),0):0,Xt=o&&Ze?Ee.get(pe(o.year,Ze.month))?.carriedFromPreviousCents??0:0,_t=We+Xt,ct=_t-C.totalCents,Qt=lt-C.totalCents,Me=C.totalCents>0?`${(lt/C.totalCents*100).toFixed(1)} %`:"-",Be=Xt<0?"danger":Xt>0?"budget-under":"",Ke=ct<0?"danger":ct>0?"budget-under":"",Fe=O+N+L+J+I,Ge=O+N,Ft=d.foodCents+d.goingOutCents,Zt=Ge-Ft,Dt=Re(Ft,Ge),kt=Q+ne+be+de+Ae,ut=st-Fe,Yt=_t-kt,en=Fe-d.totalCents,tn=kt-C.totalCents,_=a=>a<0?"danger":a>0?"budget-under":"",j=(a,k)=>k<=0?"muted":a>=k?"budget-under":"danger",rt=j(Se,d.totalCents),wn=j(lt,C.totalCents),te=(a,k)=>{if(k<=0)return"0%";const H=Math.max(0,a)/k*100;return`${Math.min(100,Math.max(0,H)).toFixed(1)}%`},Wn=(a,k)=>{if(k<=0)return a>0?100:0;const q=Math.max(0,a)/k*100;return Math.max(0,q)},In=[{label:"Essen",budgetCents:O,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:N,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:J,actualCents:d.variableCents},{label:"Sonstige",budgetCents:I,actualCents:d.miscCents}];Math.max(1,...In.flatMap(a=>[a.budgetCents,a.actualCents]));const Ra=(a,k)=>k<=0?"bar-positive":a<=0||k>a?"bar-negative":"bar-positive",Gn=[{label:"Einkommen gesamt",valueCents:st,className:"bar-income"},{label:"Budget gesamt",valueCents:Fe,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:re,className:re<0?"bar-negative":"bar-positive"}],us=Math.max(1,...Gn.map(a=>Math.abs(a.valueCents))),ds=o?o.months.slice().sort((a,k)=>a.month-k.month).map(a=>{const k=a.foodBudgetCents??0,q=a.goingOutBudgetCents??0,H=a.fixedBudgetCents??a.fixedCosts.reduce((rn,vn)=>rn+vn.plannedCents,0),$e=a.variableBudgetCents??a.variablePositions.reduce((rn,vn)=>rn+vn.budgetCents,0),Ue=a.miscBudgetCents??0,Pt=k+q+H+$e+Ue;return{month:a.month,foodBudgetCents:k,goingOutBudgetCents:q,fixedBudgetCents:H,variableBudgetCents:$e,miscBudgetCents:Ue,totalBudgetCents:Pt}}):[],wt=new Map(ds.map(a=>[a.month,a])),Mt=a=>{if(a.length===0)return null;const k=Math.min(...a),q=Math.max(...a),H=Math.round(a.reduce(($e,Ue)=>$e+Ue,0)/a.length);return{min:k,avg:H,max:q}},dt=o&&o.year===qt()?M.filter(a=>a.month<=mn()):M,va=dt.map(a=>a.summary.foodCents),ma=dt.map(a=>a.summary.goingOutCents),Un=dt.map(a=>a.summary.fixedCents),ga=dt.map(a=>a.summary.variableCents),Va=dt.map(a=>a.summary.miscCents),hs=dt.map(a=>a.summary.totalCents),ba=dt.map(a=>o?Ee.get(pe(o.year,a.month))?.plannedBudgetCents??0:0),ya=dt.map(a=>o?Ee.get(pe(o.year,a.month))?.netCents??0:0),Ya=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((k,q)=>k+(q.incomeSource==="salary"?q.amountCents:0),0)])),Jn=new Map((o?.months??[]).map(a=>[a.month,a.incomes.reduce((k,q)=>k+(q.incomeSource==="salary"||q.incomeSource==="fresh"?q.amountCents:0),0)])),Ca=dt.map(a=>Ya.get(a.month)??0),ps=dt.map(a=>Jn.get(a.month)??0),Nt={food:Mt(va),goingOut:Mt(ma),fixed:Mt(Un),variable:Mt(ga),misc:Mt(Va),total:Mt(hs),salary:Mt(Ca),income:Mt(ps),budget:Mt(ba),net:Mt(ya)},Ps=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],zt={food:va.reduce((a,k)=>a+k,0),goingOut:ma.reduce((a,k)=>a+k,0),fixed:Un.reduce((a,k)=>a+k,0),variable:ga.reduce((a,k)=>a+k,0),misc:Va.reduce((a,k)=>a+k,0),total:hs.reduce((a,k)=>a+k,0),salary:Ca.reduce((a,k)=>a+k,0),income:ps.reduce((a,k)=>a+k,0),budget:ba.reduce((a,k)=>a+k,0)},fs=Ps.map(({key:a,label:k})=>{const q=Nt.food?.[a]??null,H=Nt.goingOut?.[a]??null,$e=Nt.fixed?.[a]??null,Ue=Nt.variable?.[a]??null,Pt=Nt.misc?.[a]??null,rn=Nt.total?.[a]??null,vn=Nt.salary?.[a]??null,ht=Nt.income?.[a]??null,Xn=Nt.budget?.[a]??null,$a=Nt.net?.[a]??null,$t=Sn=>Sn===null?"-":f(Sn);return`<tr>
                  <td><strong>${k}</strong></td>
                  <td>${$t(q)}</td>
                  <td>${$t(H)}</td>
                  <td>${$t($e)}</td>
                  <td>${$t(Ue)}</td>
                  <td>${$t(Pt)}</td>
                  <td>${$t(rn)}</td>
                  <td>${$t(vn)}</td>
                  <td>${$t(ht)}</td>
                  <td>${$t(Xn)}</td>
                  <td>${$t($a)}</td>
                </tr>`}).join(""),Ts=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(zt.food)}</td>
                  <td>${f(zt.goingOut)}</td>
                  <td>${f(zt.fixed)}</td>
                  <td>${f(zt.variable)}</td>
                  <td>${f(zt.misc)}</td>
                  <td>${f(zt.total)}</td>
                  <td>${f(zt.salary)}</td>
                  <td>${f(zt.income)}</td>
                  <td>${f(zt.budget)}</td>
                  <td>-</td>
                </tr>`,za=Math.max(1,...M.flatMap(a=>{const k=wt.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,k??0]})),xa=Math.max(1,...M.flatMap(a=>{const k=wt.get(a.month),q=a.summary.foodCents+a.summary.goingOutCents,H=(k?.foodBudgetCents??0)+(k?.goingOutBudgetCents??0);return[q,H]})),Wa=Math.max(1,...M.flatMap(a=>{const k=wt.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,k]})),Ga=Math.max(1,...M.flatMap(a=>{const k=wt.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,k]})),vs=Math.max(1,...M.flatMap(a=>{const k=wt.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,k]})),ms=Re(d.fixedCents,L),As=Re(d.foodCents,O),ka=Re(d.goingOutCents,N),Wt=Re(d.variableCents,J),qe=Re(d.miscCents,I),nn=a=>a===0?"-":f(a),Fn=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(L)}</div>
        <div class="compact-cost-actual ${ms}">${nn(d.fixedCents)}</div>
      </div>`,Os=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(J)}</div>
        <div class="compact-cost-actual ${Wt}">${nn(d.variableCents)}</div>
      </div>`,Ua=l?l.fixedCosts.length>0?l.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${Et(a.name)}</div>
                  <div class="compact-cost-budget">${f(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${Re(a.actualCents,a.plannedCents)}">${nn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,gs=l?l.variablePositions.length>0?l.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${Et(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${Re(a.actualCents,a.budgetCents)}">${nn(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Lt=p.editingFixedTemplateId?p.fixedTemplates.find(a=>a.id===p.editingFixedTemplateId):null,Ja=p.hasUnexportedChanges,$n=p.unexportedChangeLog.slice().reverse(),an=p.persistentAuditLog.slice().sort((a,k)=>k.timestampIso.localeCompare(a.timestampIso)),bs=p.lastBackupFileName?Et(p.lastBackupFileName):"-",e={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},t=p.years.slice().sort((a,k)=>a.year-k.year),n=t.some(a=>a.year===p.dashboardYear)?p.dashboardYear:p.selectedYear??t[t.length-1]?.year??null,s=typeof n=="number"?t.find(a=>a.year===n):void 0,r=s?s.months.slice().sort((a,k)=>a.month-k.month):[],i=s?_n(s):e,c=s?cn(s):{salaryIncomeCents:0,freshIncomeCents:0},u=c.salaryIncomeCents+c.freshIncomeCents,b=c.salaryIncomeCents,$=s?Yn(s):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},y=s?Mn(s):0,v=s?Pn(s,Ee):0,x=y+v,w=s?s.months.reduce((a,k)=>a+jt(k),0):0,g=x-w,m=x-i.totalCents,B=[{label:"Essen",budgetCents:$.foodCents,actualCents:i.foodCents},{label:"Ausgehen",budgetCents:$.goingOutCents,actualCents:i.goingOutCents},{label:"Fixkosten",budgetCents:$.fixedCents,actualCents:i.fixedCents},{label:"Variable",budgetCents:$.variableCents,actualCents:i.variableCents},{label:"Sonstige",budgetCents:$.miscCents,actualCents:i.miscCents}],E=r.map(a=>{const k=s?Ee.get(pe(s.year,a.month)):void 0,q=nt(a),H=a.incomes.reduce((Sn,Dn)=>Sn+(Dn.incomeSource==="salary"?Dn.amountCents:0),0),$e=a.incomes.reduce((Sn,Dn)=>Sn+(yt(Dn.incomeSource)?Dn.amountCents:0),0),Ue=k?.effectiveIncomeCents??$e,Pt=k?.plannedBudgetCents??jt(a),rn=q.foodCents,vn=q.goingOutCents,ht=rn+vn,Xn=q.totalCents,$a=Ue-Pt,$t=Ue-Xn;return{month:a.month,salaryIncomeCents:H,incomeCents:$e,foodCents:rn,goingOutCents:vn,foodAndGoingOutCents:ht,effectiveIncomeCents:Ue,plannedBudgetCents:Pt,actualCostCents:Xn,plannedNetCents:$a,actualNetCents:$t}}),S=Math.max(1,...E.map(a=>a.actualCostCents)),T=Math.max(1,...E.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),F=Math.max(1,...E.map(a=>a.foodAndGoingOutCents)),R=Math.max(1,...E.map(a=>a.foodCents)),V=Math.max(1,...E.map(a=>a.goingOutCents)),A=E.map((a,k,q)=>{const H=k>0?q[k-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Pe(a.month),monthShortLabel:Pe(a.month).slice(0,3),deltaCents:a.plannedNetCents-H}}),z=A[A.length-1]??null,W=Math.min(0,...A.map(a=>a.plannedNetCents)),D=Math.max(0,...A.map(a=>a.plannedNetCents)),G=Math.max(1,D-W),ue=720,ve=320,ee=18,oe=18,De=38,it=56,Ne=ue-it-oe,sn=ve-ee-De,Ha=a=>{if(A.length<=1)return it+Ne/2;const k=a/(A.length-1);return it+k*Ne},Is=a=>ee+(D-a)/G*sn,fn=A.map((a,k)=>{const q=Ha(k),H=Is(a.plannedNetCents);return{...a,x:q,y:H,leftPercent:q/ue*100,topPercent:H/ve*100}}),Fs=fn.map((a,k)=>`${k===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),Ys=fn.length>0?`${Fs} L ${fn[fn.length-1]?.x.toFixed(1)} ${(ee+sn).toFixed(1)} L ${fn[0]?.x.toFixed(1)} ${(ee+sn).toFixed(1)} Z`:"",zs=5,Mr=Array.from({length:zs},(a,k)=>{const q=k/(zs-1),H=D-q*G;return{valueCents:Math.round(H/100)*100,y:Is(H)}}),Ws=Is(0),Pr=A[0]?.plannedNetCents??0,wa=(A[A.length-1]?.plannedNetCents??0)-Pr,Tr=wa<0?"trend-badge-negative":wa>0?"trend-badge-positive":"trend-badge-neutral",Gs=wa<0?"↘":wa>0?"↗":"→",Ar=wa<0?"Abwärtstrend":wa>0?"Aufwärtstrend":"Seitwärts",Hn=t.reduce((a,k)=>{const q=Yn(k);return{foodCents:a.foodCents+q.foodCents,goingOutCents:a.goingOutCents+q.goingOutCents,fixedCents:a.fixedCents+q.fixedCents,variableCents:a.variableCents+q.variableCents,miscCents:a.miscCents+q.miscCents,totalCents:a.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Kt=t.reduce((a,k)=>{const q=_n(k);return{foodCents:a.foodCents+q.foodCents,goingOutCents:a.goingOutCents+q.goingOutCents,fixedCents:a.fixedCents+q.fixedCents,variableCents:a.variableCents+q.variableCents,miscCents:a.miscCents+q.miscCents,totalCents:a.totalCents+q.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Or=t.reduce((a,k)=>a+Mn(k),0),Ir=t[0]?Pn(t[0],Ee):0,Us=Or+Ir,Js=Us-Hn.totalCents,Hs=Us-Kt.totalCents,Xs=[{label:"Essen",budgetCents:Hn.foodCents,actualCents:Kt.foodCents},{label:"Ausgehen",budgetCents:Hn.goingOutCents,actualCents:Kt.goingOutCents},{label:"Fixkosten",budgetCents:Hn.fixedCents,actualCents:Kt.fixedCents},{label:"Variable",budgetCents:Hn.variableCents,actualCents:Kt.variableCents},{label:"Sonstige",budgetCents:Hn.miscCents,actualCents:Kt.miscCents}],Qs=Math.max(1,...Xs.flatMap(a=>[a.budgetCents,a.actualCents])),Ds=[{label:"Essen & Ausgehen",actualCents:Kt.foodCents+Kt.goingOutCents},{label:"Fixkosten",actualCents:Kt.fixedCents},{label:"Variable",actualCents:Kt.variableCents},{label:"Sonstige",actualCents:Kt.miscCents}],Fr=Math.max(1,...Ds.map(a=>a.actualCents)),xe=t.map(a=>{const k=_n(a),q=Yn(a),H=Mn(a),$e=cn(a),Ue=Pn(a,Ee),Pt=H+Ue;return{year:a.year,salaryIncomeCents:$e.salaryIncomeCents,freshIncomeCents:$e.freshIncomeCents,totalIncomeCents:$e.salaryIncomeCents+$e.freshIncomeCents,foodAndGoingOutCents:k.foodCents+k.goingOutCents,fixedCents:k.fixedCents,variableCents:k.variableCents,miscCents:k.miscCents,budgetTotalCents:q.totalCents,actualTotalCents:k.totalCents,effectiveIncomeCents:Pt,plannedNetCents:Pt-q.totalCents,actualNetCents:Pt-k.totalCents}}),Dr=xe.reduce((a,k)=>a+k.totalIncomeCents,0),Nr=xe.reduce((a,k)=>a+k.salaryIncomeCents,0),Zs=Math.max(1,...xe.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Lr=Math.max(1,...xe.map(a=>a.actualTotalCents)),Kr=Math.max(1,...xe.map(a=>a.totalIncomeCents)),qr=Math.max(1,...xe.map(a=>a.salaryIncomeCents)),er=Math.max(1,...xe.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),tr=Math.max(1,...xe.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),jr=Math.max(1,...xe.map(a=>a.foodAndGoingOutCents)),Rr=Math.max(1,...xe.map(a=>a.fixedCents)),Vr=Math.max(1,...xe.map(a=>a.variableCents)),Yr=Math.max(1,...xe.map(a=>a.miscCents)),zr=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${p.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${p.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${p.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${t.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':p.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${t.map(a=>`<option value="${a.year}" ${a.year===n?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${s?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(u)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(b)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(w)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(i.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(g)}">${f(g)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(m)}">${f(m)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Gs}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Tr}">${Gs} ${Ar}</span>
                    </div>
                  </header>
                  ${z?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Et(z.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${_(z.plannedNetCents)}" data-year-trend-active-net>${f(z.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(z.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(z.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${_(z.deltaCents)}" data-year-trend-active-delta>${z.deltaCents>=0?"+":""}${f(z.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${ue} ${ve}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${s?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Mr.map(a=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${it}" y1="${a.y.toFixed(1)}" x2="${ue-oe}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${it-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${f(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${it}" y1="${Ws.toFixed(1)}" x2="${ue-oe}" y2="${Ws.toFixed(1)}"></line>
                              ${Ys?`<path class="year-trend-area" d="${Ys}"></path>`:""}
                              ${Fs?`<path class="year-trend-line" d="${Fs}"></path>`:""}
                              ${fn.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${ve-12}" text-anchor="middle">${Et(a.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${fn.map((a,k)=>`
                                    <button
                                      class="year-trend-point-hit ${k===fn.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${a.leftPercent.toFixed(2)}%; top:${a.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${k===fn.length-1?"1":"0"}"
                                      data-month-label="${Et(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${Et(a.monthLabel)}: Kalkulierter Saldo ${f(a.plannedNetCents)}, Einkommen ${f(a.effectiveIncomeCents)}, Ausgaben ${f(a.actualCostCents)}"
                                      aria-pressed="${k===fn.length-1?"true":"false"}"
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
                    ${B.map(a=>{const k=Wn(a.actualCents,a.budgetCents),q=Math.min(100,k),H=`${k.toFixed(0)}%`,$e=a.budgetCents-a.actualCents,Ue=$e<0?"danger":$e>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Ra(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${q.toFixed(1)}%" title="${a.label}: ${f(a.actualCents)} von ${f(a.budgetCents)}">
                              <span class="circle-chart-value">${H}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${f(a.budgetCents)} / I ${f(a.actualCents)}</div>
                            <div class="circle-chart-meta ${Ue}">${$e>=0?"+":""}${f($e)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(E.length,1)}, minmax(0, 1fr));">
                    ${E.map(a=>{const k=te(a.actualCostCents,S);return`
                          <div class="spark-bar" title="${Pe(a.month)}: ${f(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.actualCostCents)} €</span></div>
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
                    ${E.map(a=>{const k=te(Math.abs(a.plannedNetCents),T),q=te(Math.abs(a.actualNetCents),T),H=a.plannedNetCents<0?"bar-negative":"bar-positive",$e=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Pe(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${H}" style="width:${k}; opacity: 0.35;"></div>
                              <div class="bar ${$e}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${_(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  ${E.map(a=>`<tr>
                        <td>${Pe(a.month)}</td>
                    <td>${f(a.salaryIncomeCents)}</td>
                    <td>${f(a.incomeCents)}</td>
                        <td>${f(a.plannedBudgetCents)}</td>
                        <td>${f(a.actualCostCents)}</td>
                        <td class="${_(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${_(a.actualNetCents)}">${f(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:p.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${t.map(a=>`<option value="${a.year}" ${a.year===n?"selected":""}>${a.year}</option>`).join("")}
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
                    ${E.map(a=>{const k=te(a.foodAndGoingOutCents,F);return`
                          <div class="spark-bar" title="${Pe(a.month)}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(E.length,1)}, minmax(0, 1fr));">
                    ${E.map(a=>{const k=te(a.foodCents,R);return`
                          <div class="spark-bar" title="${Pe(a.month)}: ${f(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.foodCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(E.length,1)}, minmax(0, 1fr));">
                    ${E.map(a=>{const k=te(a.goingOutCents,V);return`
                          <div class="spark-bar" title="${Pe(a.month)}: ${f(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.goingOutCents)} €</span></div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(Dr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(Nr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(Hn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Kt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(Js)}">${f(Js)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(Hs)}">${f(Hs)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${Ds.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${f(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Kt.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${Xs.map(a=>{const k=te(a.budgetCents,Qs),q=te(a.actualCents,Qs),H=Ra(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${f(a.budgetCents)} | Ist: ${f(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${k}"></div>
                              <div class="bar-marker" style="left:${k}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${H}" style="width:${q}"></div>
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
                    ${Ds.map(a=>{const k=te(a.actualCents,Fr);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Ist: ${f(a.actualCents)}">
                              <div class="bar bar-expense" style="width:${k}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.actualTotalCents,Lr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
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
                    ${xe.map(a=>{const k=te(Math.abs(a.plannedNetCents),Zs),q=te(Math.abs(a.actualNetCents),Zs),H=a.plannedNetCents<0?"bar-negative":"bar-positive",$e=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${H}" style="width:${k}; opacity: 0.35;"></div>
                              <div class="bar ${$e}" style="width:${q}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${_(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.foodAndGoingOutCents,jr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.fixedCents,Rr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.fixedCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.variableCents,Vr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.variableCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.miscCents,Yr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.miscCents)} €</span></div>
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
                  ${xe.map(a=>`<tr>
                        <td>${a.year}</td>
                        <td>${f(a.salaryIncomeCents)}</td>
                        <td>${f(a.totalIncomeCents)}</td>
                        <td>${f(a.budgetTotalCents)}</td>
                        <td>${f(a.actualTotalCents)}</td>
                        <td class="${_(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${_(a.actualNetCents)}">${f(a.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.totalIncomeCents,Kr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.totalIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.salaryIncomeCents,qr);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${k}"><span class="spark-bar-fill-value">${f(a.salaryIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.totalIncomeCents,er),q=te(a.actualTotalCents,er);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${f(a.totalIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${k}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(xe.length,1)}, minmax(0, 1fr));">
                    ${xe.map(a=>{const k=te(a.salaryIncomeCents,tr),q=te(a.actualTotalCents,tr);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${f(a.salaryIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${k}"></div>
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
    `,Wr=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,Gr=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Lt?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Lt?Ct(Lt.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Lt?"Änderung speichern":"Vorlage speichern"}</button>
          ${Lt?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,nr=p.annualVariableFixedTemplates.reduce((a,k)=>a+k.plannedCents,0),Ur=Math.round(nr/12),Jr=`
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
                <div class="eval-value budget-under">${f(nr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(Ur)}</div>
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
            ${p.annualVariableFixedTemplates.map(a=>{const k=La(a.dueDateIso),q=k?Pe(k.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${q}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,ar=p.topModal==="years"?"Jahr hinzufügen":p.topModal==="fixed"?"Fixe Kosten (zentral)":p.topModal==="variable-fixed"?"Variable Fixkosten":p.topModal==="dashboard"?"Dashboard":"",Hr=p.topModal==="years"?Wr:p.topModal==="fixed"?Gr:p.topModal==="variable-fixed"?Jr:p.topModal==="dashboard"?zr:"";P.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Ja?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${p.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Br.map(a=>`<option value="${a}" ${p.theme===a?"selected":""}>${fi(a)}</option>`).join("")}
              </select>
            </label>
          </div>
        </div>

        <div class="top-shortcuts" role="navigation" aria-label="Schnellzugriff">
          <button class="btn" id="open-years-modal" type="button">Jahr hinzufügen</button>
          <button class="btn" id="open-fixed-modal" type="button">Fixe Kosten (zentral)</button>
          <button class="btn" id="open-variable-fixed-modal" type="button">Variable Fixkosten</button>
          <button class="btn" id="open-dashboard-modal" type="button">Dashboard</button>
          <a class="btn" href="#section-food-costs">Essen</a>
          <a class="btn" href="#section-fixed-costs">Fixe</a>
          <a class="btn" href="#section-variable-costs">Variable</a>
          <a class="btn" href="#section-misc-costs">Sonstige</a>
        </div>

        ${p.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${ar}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${ar}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Hr}
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
                  ${$n.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${$n.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${Et(a.message)}</span></li>`).join("")}</ol>`}
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
                  ${an.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${an.map(a=>`<li><strong>${new Date(a.timestampIso).toLocaleString("de-DE")}</strong><span>${Et(a.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Pe(p.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(a,k)=>k+1).map(a=>`<option value="${a}" ${a===p.selectedMonth?"selected":""}>${Pe(a)}</option>`).join("")}
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
                <strong>${f(Se)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(at)}</strong>
              </div>
              <div class="compact-income-row ${Ye}">
                <span>Übernahme aus Vormonat</span>
                <strong>${ot?f(K):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(st)}</strong>
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
                  ${Ua}
                  ${Fn}
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
                  ${gs}
                  ${Os}
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
                    <div class="compact-cost-budget">${f(Ge)}</div>
                    <div class="compact-cost-actual ${Dt}">${nn(Ft)}</div>
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
                    <div class="compact-cost-actual ${qe}">${nn(d.miscCents)}</div>
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
                  ${In.map(a=>`
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
                  ${Gn.map(a=>{const k=te(Math.abs(a.valueCents),us),q=a.valueCents>=0?"+":"",H=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${f(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${k}"></div>
                          </div>
                          <div class="bar-meta"><span class="${H}">${q}${f(a.valueCents)}</span></div>
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
                      ${M.map(a=>{const k=wt.get(a.month)?.totalBudgetCents??0,q=te(k,za),H=te(a.summary.totalCents,za);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(a.summary.totalCents)} € | Budget ${f(k)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${H}"><span class="spark-bar-fill-value">${f(a.summary.totalCents)} €</span></div>
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
                      ${M.map(a=>{const k=wt.get(a.month),q=(k?.foodBudgetCents??0)+(k?.goingOutBudgetCents??0),H=a.summary.foodCents+a.summary.goingOutCents,$e=te(q,xa),Ue=te(H,xa);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(H)} € | Budget ${f(q)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${$e}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Ue}"><span class="spark-bar-fill-value">${f(H)} €</span></div>
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
                      ${M.map(a=>{const k=wt.get(a.month)?.fixedBudgetCents??0,q=te(k,Wa),H=te(a.summary.fixedCents,Wa);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(a.summary.fixedCents)} € | Budget ${f(k)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${H}"><span class="spark-bar-fill-value">${f(a.summary.fixedCents)} €</span></div>
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
                      ${M.map(a=>{const k=wt.get(a.month)?.variableBudgetCents??0,q=te(k,Ga),H=te(a.summary.variableCents,Ga);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(a.summary.variableCents)} € | Budget ${f(k)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${H}"><span class="spark-bar-fill-value">${f(a.summary.variableCents)} €</span></div>
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
                      ${M.map(a=>{const k=wt.get(a.month)?.miscBudgetCents??0,q=te(k,vs),H=te(a.summary.miscCents,vs);return`
                            <div class="spark-bar" title="${Pe(a.month)}: Ist ${f(a.summary.miscCents)} € | Budget ${f(k)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${q}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${H}"><span class="spark-bar-fill-value">${f(a.summary.miscCents)} €</span></div>
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
                    <div class="eval-value">${f(ce)}</div>
                    <div class="eval-value">${f(We)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(Se)}</div>
                    <div class="eval-value">${f(lt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(at)}</div>
                    <div class="eval-value">${f(Vt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ye}">${ot?f(K):"-"}</div>
                    <div class="eval-value ${Be}">${o?f(Xt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(st)}</div>
                    <div class="eval-value">${f(_t)}</div>
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
                    <div class="eval-value">${Rt(O,d.foodCents)}</div>
                    <div class="eval-value">${f(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Rt(N,d.goingOutCents)}</div>
                    <div class="eval-value">${f(ne)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Rt(L,d.fixedCents)}</div>
                    <div class="eval-value">${f(be)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Rt(J,d.variableCents)}</div>
                    <div class="eval-value">${f(de)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Rt(I,d.miscCents)}</div>
                    <div class="eval-value">${f(Ae)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Rt(Fe,d.totalCents)}</div>
                    <div class="eval-value">${f(kt)}</div>
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
                    <div class="eval-value ${As}">${f(d.foodCents)}</div>
                    <div class="eval-value">${f(C.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${ka}">${f(d.goingOutCents)}</div>
                    <div class="eval-value">${f(C.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${ms}">${f(d.fixedCents)}</div>
                    <div class="eval-value">${f(C.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${Wt}">${f(d.variableCents)}</div>
                    <div class="eval-value">${f(C.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${qe}">${f(d.miscCents)}</div>
                    <div class="eval-value">${f(C.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${f(d.totalCents)}</div>
                    <div class="eval-value">${f(C.totalCents)}</div>
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
                    <div class="eval-value ${_(en)}">${f(en)}</div>
                    <div class="eval-value ${_(tn)}">${f(tn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${_(ut)}">${f(ut)}</div>
                    <div class="eval-value ${_(Yt)}">${f(Yt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${ze}">${f(re)}</div>
                    <div class="eval-value ${Ke}">${f(ct)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${_(ft)}">${f(ft)}</div>
                    <div class="eval-value ${_(Qt)}">${f(Qt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${rt}">${Te}</div>
                    <div class="eval-value ${wn}">${Me}</div>
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
                ${M.map((a,k,q)=>{const H=o?Ee.get(pe(o.year,a.month)):void 0,$e=H?.plannedBudgetCents??0,Ue=H?.netCents??0,Pt=Ya.get(a.month)??0,rn=Jn.get(a.month)??0,vn=Ue<0?"danger":Ue>0?"budget-under":"",ht=q[k-1],Xn=ht?.summary.foodCents??null,$a=ht?.summary.goingOutCents??null,$t=ht?.summary.fixedCents??null,Sn=ht?.summary.variableCents??null,Dn=ht?.summary.miscCents??null,sr=ht?.summary.totalCents??null,rr=ht!==void 0?Ya.get(ht.month)??0:null,ir=ht!==void 0?Jn.get(ht.month)??0:null,or=o&&ht?Ee.get(pe(o.year,ht.month))?.plannedBudgetCents??0:null,lr=Xn===null?null:a.summary.foodCents-Xn,cr=$a===null?null:a.summary.goingOutCents-$a,ur=$t===null?null:a.summary.fixedCents-$t,dr=Sn===null?null:a.summary.variableCents-Sn,hr=Dn===null?null:a.summary.miscCents-Dn,pr=sr===null?null:a.summary.totalCents-sr,fr=rr===null?null:Pt-rr,vr=ir===null?null:rn-ir,mr=or===null?null:$e-or,Sa=St=>St===null?"muted":St>0?"danger":St<0?"budget-under":"muted",gr=St=>St===null?"muted":St>0?"budget-under":St<0?"danger":"muted",Xr=St=>St===null?"muted":St>0?"danger":St<0?"budget-under":"muted",En=St=>St===null?"(Δ -)":`(Δ ${St>0?"+":""}${f(St)})`,br=o&&ht?Ee.get(pe(o.year,ht.month))?.netCents??0:null,Ea=br===null?null:Ue-br,Qr=Ea===null?"(Δ -)":`(Δ ${Ea>0?"+":""}${f(Ea)})`,Zr=Ea===null?"muted":Ea<0?"danger":Ea>0?"budget-under":"muted";return`<tr>
                  <td>${Pe(a.month)}</td>
                  <td>${f(a.summary.foodCents)} <span class="${Sa(lr)}">${En(lr)}</span></td>
                  <td>${f(a.summary.goingOutCents)} <span class="${Sa(cr)}">${En(cr)}</span></td>
                  <td>${f(a.summary.fixedCents)} <span class="${Sa(ur)}">${En(ur)}</span></td>
                  <td>${f(a.summary.variableCents)} <span class="${Sa(dr)}">${En(dr)}</span></td>
                  <td>${f(a.summary.miscCents)} <span class="${Sa(hr)}">${En(hr)}</span></td>
                  <td>${f(a.summary.totalCents)} <span class="${Sa(pr)}">${En(pr)}</span></td>
                  <td>${f(Pt)} <span class="${gr(fr)}">${En(fr)}</span></td>
                  <td>${f(rn)} <span class="${gr(vr)}">${En(vr)}</span></td>
                  <td>${f($e)} <span class="${Xr(mr)}">${En(mr)}</span></td>
                  <td class="${vn}">${f(Ue)} <span class="${Zr}">${Qr}</span></td>
                </tr>`}).join("")}
                ${fs}
                ${Ts}
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
                    <td class="${Ye}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${Ct(K)}" />
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
                  <strong>${f(Se)} €</strong>
                </div>
                <div class="column-overview-row ${Ye}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${f(K)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(st)} €</strong>
                </div>
                <div class="column-overview-row ${Ie}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${f(It)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${At(O,d.foodCents)}
                ${At(N,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(Ge)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(Ft)} €</strong>
                  </div>
                  <div class="column-overview-row ${Dt}">
                    <span>Diff</span>
                    <strong>${f(Zt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${Ct(O)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${Ct(N)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(a=>{const k=a.foodCents>0,q=a.goingOutCents>0,H=`${a.isoDate===h?"today-row":""} ${k||q?"day-has-entry":""}`.trim(),$e=`amount-input ${k?"day-input-has-value":""}`.trim(),Ue=`amount-input ${q?"day-input-has-value":""}`.trim();return`<tr class="${H}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${$e}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${Ct(a.foodCents)}" /></td>
                      <td><input class="${Ue}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${Ct(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${At(L,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${Ct(L)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${Ct(a.plannedCents)}" /></td>
                    <td class="${Re(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${Ct(a.actualCents)}" /></td>
                    <td class="${Re(a.actualCents,a.plannedCents)}">${f(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${At(J,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${Ct(J)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${Ct(a.budgetCents)}" /></td>
                    <td class="${Re(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${Ct(a.actualCents)}" /></td>
                    <td class="${Re(a.actualCents,a.budgetCents)}">${f(a.actualCents-a.budgetCents)}</td>
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
              ${At(I,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${Ct(I)}" ${l?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${bs}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(p.topModal||p.showUnexportedChangeLogModal||p.showPersistentAuditLogModal)),_e(),on(),mt(),Ma()}function _e(){const o=P.querySelector("#theme-select"),l=P.querySelector("#open-years-modal"),h=P.querySelector("#open-fixed-modal"),d=P.querySelector("#open-variable-fixed-modal"),C=P.querySelector("#open-dashboard-modal"),M=P.querySelector("#panel-modal-close"),O=P.querySelector("#panel-modal-backdrop"),N=P.querySelector("#open-unexported-change-log"),L=P.querySelector("#open-persistent-audit-log"),J=P.querySelector("#unexported-change-log-close"),I=P.querySelector("#unexported-change-log-backup"),Q=P.querySelector("#unexported-change-log-backdrop"),ne=P.querySelector("#persistent-audit-log-close"),be=P.querySelector("#persistent-audit-log-backdrop"),de=P.querySelector("#new-year"),Ae=P.querySelector("#create-year"),ce=P.querySelector("#year-select"),Se=P.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;$r(_)&&sa(_)}),l?.addEventListener("click",()=>{ea("years")}),h?.addEventListener("click",()=>{ea("fixed")}),d?.addEventListener("click",()=>{ea("variable-fixed")}),C?.addEventListener("click",()=>{ea("dashboard")}),N?.addEventListener("click",()=>{ta()}),L?.addEventListener("click",()=>{Nn()}),J?.addEventListener("click",()=>{na()}),I?.addEventListener("click",async()=>{try{await ja()}catch(_){console.error("Backup-Export fehlgeschlagen",_),me("Backup konnte nicht exportiert werden.","error")}}),Q?.addEventListener("click",_=>{_.target===Q&&na()}),ne?.addEventListener("click",()=>{aa()}),be?.addEventListener("click",_=>{_.target===be&&aa()}),P.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const j=_.dataset.dashboardTab;j!=="year"&&j!=="food"&&j!=="all"||(p.dashboardTab=j,ae())})});const at=P.querySelector("#dashboard-year-select");at?.addEventListener("change",()=>{const _=Number.parseInt(at.value,10);Number.isInteger(_)&&(p.dashboardYear=_,ae())}),M?.addEventListener("click",()=>{_a()}),O?.addEventListener("click",_=>{_.target===O&&_a()}),p.topModal&&window.setTimeout(()=>{M?.focus()},0),p.showUnexportedChangeLogModal&&window.setTimeout(()=>{J?.focus()},0),p.showPersistentAuditLogModal&&window.setTimeout(()=>{ne?.focus()},0),Ae?.addEventListener("click",async()=>{const _=Number.parseInt(de?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await ra(_)}),ce?.addEventListener("change",()=>{p.selectedYear=Number.parseInt(ce.value,10),p.selectedMonth=mn(),ae()}),Se?.addEventListener("change",()=>{p.selectedMonth=Number.parseInt(Se.value,10),ae()});const Ee=P.querySelector("#fixed-template-name"),fe=P.querySelector("#fixed-template-amount"),Ze=P.querySelector("#add-fixed-template"),K=P.querySelector("#cancel-fixed-template-edit"),ot=P.querySelector("#annual-variable-fixed-name"),st=P.querySelector("#annual-variable-fixed-date"),et=P.querySelector("#annual-variable-fixed-amount"),It=P.querySelector("#add-annual-variable-fixed-template");Ze?.addEventListener("click",async()=>{const _=Ee?.value??"",j=Le(fe?.value??"0");await _s(_,j),Ee&&(Ee.value=""),fe&&(fe.value="")}),K?.addEventListener("click",()=>{An()}),It?.addEventListener("click",async()=>{const _=ot?.value??"",j=st?.value??"",rt=Le(et?.value??"0");await ua(_,j,rt),ot&&(ot.value=""),st&&(st.value=""),et&&(et.value="")}),P.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeAnnualVariableFixedTemplate;j&&await Ms(j)})}),P.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const j=_.dataset.editFixedTemplate;j&&dn(j)})}),P.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeFixedTemplate;j&&await hn(j)})}),P.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.dayFood;j&&await Jt(j,"foodCents",Le(_.value))})}),P.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.dayGoing;j&&await Jt(j,"goingOutCents",Le(_.value))})}),P.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.fixedActual;j&&await as(j,Le(_.value))})}),P.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.fixedPlanned;j&&await Cn(j,Le(_.value))})});const re=P.querySelector("#fixed-budget");re?.addEventListener("click",_=>{_.preventDefault(),re.blur(),tt(re)}),re?.addEventListener("change",async()=>{await Ve(Le(re.value))});const ft=P.querySelector("#food-budget");ft?.addEventListener("click",_=>{_.preventDefault(),ft.blur(),tt(ft)}),ft?.addEventListener("change",async()=>{await xn(Le(ft.value))});const Te=P.querySelector("#going-out-budget");Te?.addEventListener("click",_=>{_.preventDefault(),Te.blur(),tt(Te)}),Te?.addEventListener("change",async()=>{await Ht(Le(Te.value))}),P.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{ws()});const Ie=P.querySelector("#misc-budget");Ie?.addEventListener("click",_=>{_.preventDefault(),Ie.blur(),tt(Ie)}),Ie?.addEventListener("change",async()=>{await rs(Le(Ie.value))});const ze=P.querySelector("#variable-budget");ze?.addEventListener("click",_=>{_.preventDefault(),ze.blur(),tt(ze)}),ze?.addEventListener("change",async()=>{await On(Le(ze.value))});const We=P.querySelector("#variable-position-name"),lt=P.querySelector("#variable-position-budget"),Vt=P.querySelector("#add-variable-position"),Xt=P.querySelector("#add-variable-position-recurring"),_t=P.querySelector("#misc-description"),ct=P.querySelector("#misc-amount"),Qt=P.querySelector("#add-misc"),Me=P.querySelector("#add-misc-recurring"),Be=P.querySelector("#income-description"),Ke=P.querySelector("#income-source"),Fe=P.querySelector("#income-amount"),Ge=P.querySelector("#add-income"),Ft=P.querySelector("#add-income-recurring"),Zt=P.querySelector("#fixed-cost-name"),Dt=P.querySelector("#fixed-cost-budget"),kt=P.querySelector("#add-fixed-cost"),ut=P.querySelector("#carryover-override");ut?.addEventListener("click",_=>{_.preventDefault(),ut.blur(),tt(ut)}),ut?.addEventListener("change",async()=>{const _=ut.value;if(!_.trim()){await da(null);return}await da(Le(_))}),kt?.addEventListener("click",async()=>{const _=Le(Dt?.value??"0");await ss(Zt?.value??"",_),Zt&&(Zt.value=""),Dt&&(Dt.value="")}),Vt?.addEventListener("click",async()=>{const _=Le(lt?.value??"0");await ha(We?.value??"",_,!1),We&&(We.value=""),lt&&(lt.value="")}),Xt?.addEventListener("click",async()=>{const _=Le(lt?.value??"0");await ha(We?.value??"",_,!0),We&&(We.value=""),lt&&(lt.value="")}),Qt?.addEventListener("click",async()=>{const _=Le(ct?.value??"0");await he(_t?.value??"",_,!1),_t&&(_t.value=""),ct&&(ct.value="")}),Me?.addEventListener("click",async()=>{const _=Le(ct?.value??"0");await he(_t?.value??"",_,!0),_t&&(_t.value=""),ct&&(ct.value="")}),Ge?.addEventListener("click",async()=>{const _=Le(Fe?.value??"0"),j=Ke?.value,rt=j==="balance"||j==="fresh"||j==="salary"?j:void 0;await qa(Be?.value??"",_,rt,!1),Be&&(Be.value=""),Fe&&(Fe.value=""),Ke&&(Ke.value="salary")}),Ft?.addEventListener("click",async()=>{const _=Le(Fe?.value??"0"),j=Ke?.value,rt=j==="balance"||j==="fresh"||j==="salary"?j:void 0;await qa(Be?.value??"",_,rt,!0),Be&&(Be.value=""),Fe&&(Fe.value=""),Ke&&(Ke.value="salary")}),P.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const j=_.dataset.incomeSource;if(!j)return;const rt=_.value;await fa(j,rt==="balance"||rt==="fresh"||rt==="salary"?rt:void 0)})}),P.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.variablePositionBudget;j&&await is(j,Le(_.value))})}),P.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.variablePositionActual;j&&await kn(j,Le(_.value))})}),P.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeVariablePosition;j&&await pa(j)})}),P.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.moveVariablePositionNext;j&&await os(j)})}),P.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeFixed;j&&await Ka(j)})}),P.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeIncome;j&&await zn(j)})}),P.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeMisc;j&&await ls(j)})});const Yt=P.querySelector("#backup-export"),en=P.querySelector("#backup-import");P.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Yt?.addEventListener("click",async()=>{await ja()}),en?.addEventListener("change",async()=>{const _=en.files?.[0];if(_){try{await cs(_)}catch(j){console.error("Backup-Import fehlgeschlagen",j),me("Backup konnte nicht importiert werden.","error")}en.value=""}})}return{init:Bs}}const mi="modulepreload",gi=function(P){return"/habu26/"+P},Er={},bi=function(p,Oe,U){let ye=Promise.resolve();if(Oe&&Oe.length>0){let pt=function(He){return Promise.all(He.map(le=>Promise.resolve(le).then(xt=>({status:"fulfilled",value:xt}),xt=>({status:"rejected",reason:xt}))))};var ke=pt;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),Ce=ie?.nonce||ie?.getAttribute("nonce");ye=pt(Oe.map(He=>{if(He=gi(He),He in Er)return;Er[He]=!0;const le=He.endsWith(".css"),xt=le?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${He}"]${xt}`))return;const vt=document.createElement("link");if(vt.rel=le?"stylesheet":mi,le||(vt.as="script"),vt.crossOrigin="",vt.href=He,Ce&&vt.setAttribute("nonce",Ce),document.head.appendChild(vt),le)return new Promise((mt,on)=>{vt.addEventListener("load",mt),vt.addEventListener("error",()=>on(new Error(`Unable to preload CSS for ${He}`)))})}))}function se(ie){const Ce=new Event("vite:preloadError",{cancelable:!0});if(Ce.payload=ie,window.dispatchEvent(Ce),!Ce.defaultPrevented)throw ie}return ye.then(ie=>{for(const Ce of ie||[])Ce.status==="rejected"&&se(Ce.reason);return p().catch(se)})};function yi(P={}){const{immediate:p=!1,onNeedRefresh:Oe,onOfflineReady:U,onRegistered:ye,onRegisteredSW:se,onRegisterError:ke}=P;let ie,Ce;const pt=async(le=!0)=>{await Ce};async function He(){if("serviceWorker"in navigator){if(ie=await bi(async()=>{const{Workbox:le}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:le}},[]).then(({Workbox:le})=>new le("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(le=>{ke?.(le)}),!ie)return;ie.addEventListener("activated",le=>{(le.isUpdate||le.isExternal)&&window.location.reload()}),ie.addEventListener("installed",le=>{le.isUpdate||U?.()}),ie.register({immediate:p}).then(le=>{se?se("/habu26/sw.js",le):ye?.(le)}).catch(le=>{ke?.(le)})}}return Ce=He(),pt}function Ci(){yi({immediate:!0})}const _r=document.getElementById("app");if(!_r)throw new Error("App-Container nicht gefunden.");vi(_r).init();Ci();
