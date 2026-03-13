(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const ce of document.querySelectorAll('link[rel="modulepreload"]'))G(ce);new MutationObserver(ce=>{for(const ne of ce)if(ne.type==="childList")for(const ge of ne.addedNodes)ge.tagName==="LINK"&&ge.rel==="modulepreload"&&G(ge)}).observe(document,{childList:!0,subtree:!0});function Me(ce){const ne={};return ce.integrity&&(ne.integrity=ce.integrity),ce.referrerPolicy&&(ne.referrerPolicy=ce.referrerPolicy),ce.crossOrigin==="use-credentials"?ne.credentials="include":ce.crossOrigin==="anonymous"?ne.credentials="omit":ne.credentials="same-origin",ne}function G(ce){if(ce.ep)return;ce.ep=!0;const ne=Me(ce);fetch(ce.href,ne)}})();const Wr=[1,2,3,4,5,6,7,8,9,10,11,12];function xr(){return new Date().toISOString()}function Bt(T){const p=Math.random().toString(36).slice(2,10);return`${T}_${Date.now()}_${p}`}function Gr(T,p){const Me=new Date(T,p,0).getDate(),G=[];for(let ce=1;ce<=Me;ce+=1){const ne=new Date(Date.UTC(T,p-1,ce));G.push({isoDate:ne.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return G}function Jr(T){return T.map(p=>({id:Bt("fixed"),templateId:p.id,name:p.name,plannedCents:p.plannedCents,actualCents:0}))}function Fr(T,p,Me){const G=p.reduce((ne,ge)=>ne+ge.plannedCents,0),ce=Wr.map(ne=>({month:ne,days:Gr(T,ne),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Jr(p),fixedBudgetCents:G,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:T,createdAt:xr(),templateVersion:Me,months:ce}}function Dr(T,p){return{id:Bt("expense"),description:T,amountCents:p,createdAt:xr()}}function Ir(T,p,Me){const G={id:Bt("income"),description:T,amountCents:p,createdAt:xr()};return Me?{...G,incomeSource:Me}:G}var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xr(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var Za={exports:{}},Qr=Za.exports,Nr;function Zr(){return Nr||(Nr=1,(function(T,p){((Me,G)=>{T.exports=G()})(Qr,function(){var Me=function(e,t){return(Me=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},G=function(){return(G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ce(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var ne=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Hr,ge=Object.keys,ae=Array.isArray;function de(e,t){return typeof t=="object"&&ge(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ne.Promise||(ne.Promise=Promise);var tt=Object.getPrototypeOf,qe={}.hasOwnProperty;function se(e,t){return qe.call(e,t)}function pt(e,t){typeof t=="function"&&(t=t(tt(e))),(typeof Reflect>"u"?ge:Reflect.ownKeys)(t).forEach(function(n){lt(e,n,t[n])})}var ot=Object.defineProperty;function lt(e,t,n,a){ot(e,t,de(n&&se(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function xt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),lt(e.prototype,"constructor",e),{extend:pt.bind(null,e.prototype)}}}}var va=Object.getOwnPropertyDescriptor,nr=[].slice;function hn(e,t,n){return nr.call(e,t,n)}function Aa(e,t){return t(e)}function Bn(e){if(!e)throw new Error("Assertion Failed")}function ma(e){ne.setImmediate?setImmediate(e):setTimeout(e,0)}function It(e,t){if(typeof t=="string"&&se(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=It(e,t[a]);n.push(i)}return n}var l,c=t.indexOf(".");return c===-1||(l=e[t.substr(0,c)])==null?void 0:It(l,t.substr(c+1))}function nt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Bn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)nt(e,t[a],n[a])}else{var i,l,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?ae(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:nt(l=(l=e[i])&&se(e,i)?l:e[i]={},c,n)):n===void 0?ae(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Fa(e){var t,n={};for(t in e)se(e,t)&&(n[t]=e[t]);return n}var ar=[].concat;function Nt(e){return ar.apply([],e)}var Mt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Nt([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ne[e]}),pn=new Set(Mt.map(function(e){return ne[e]})),En=null;function rn(e){return En=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=En.get(n);if(a)return a;if(ae(n)){a=[],En.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(pn.has(n.constructor))a=n;else{var l,c=tt(n);for(l in a=c===Object.prototype?{}:Object.create(c),En.set(n,a),n)se(n,l)&&(a[l]=t(n[l]))}return a})(e),En=null,e}var rr={}.toString;function Un(e){return rr.call(e).slice(8,-1)}var ut=typeof Symbol<"u"?Symbol.iterator:"@@iterator",we=typeof ut=="symbol"?function(e){var t;return e!=null&&(t=e[ut])&&t.apply(e)}:function(){return null};function Et(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var vn={};function _t(e){var t,n,a,s;if(arguments.length===1){if(ae(e))return e.slice();if(this===vn&&typeof e=="string")return[e];if(s=we(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var ga=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Mt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],at=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Mt),sr={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function sn(e,t){this.name=e,this.message=t}function Da(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function _n(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Da(e,t)}function mn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Da(e,this.failures)}xt(sn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),xt(_n).from(sn),xt(mn).from(sn);var Wn=at.reduce(function(e,t){return e[t]=t+"Error",e},{}),ir=sn,Z=at.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=sr[t]||n,this.inner=null)}return xt(a).from(ir),e[t]=a,e},{}),Ia=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,Mt.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));Mt=at.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function be(){}function Mn(e){return e}function or(e,t){return e==null||e===Mn?t:function(n){return t(e(n))}}function qt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ba(e,t){return e===be?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?qt(a,this.onsuccess):a),s&&(this.onerror=this.onerror?qt(s,this.onerror):s),i!==void 0?i:n}}function Gn(e,t){return e===be?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?qt(n,this.onsuccess):n),a&&(this.onerror=this.onerror?qt(a,this.onerror):a)}}function Na(e,t){return e===be?t:function(s){var a=e.apply(this,arguments),s=(de(s,a),this.onsuccess),i=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?qt(s,this.onsuccess):s),i&&(this.onerror=this.onerror?qt(i,this.onerror):i),a===void 0?l===void 0?void 0:l:de(a,l)}}function Pn(e,t){return e===be?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Oe(e,t){return e===be?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}Mt.ModifyError=_n,Mt.DexieError=sn,Mt.BulkError=mn;var Pt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function gn(e){Pt=e}var Ut={},Tn=100,On=typeof Promise>"u"?[]:(at=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[On=crypto.subtle.digest("SHA-512",new Uint8Array([0])),tt(On),at]:[at,tt(at),at]),at=On[0],Dt=On[1],Dt=Dt&&Dt.then,Kt=at&&at.constructor,An=!!On[2],Fn=function(e,t){bn.push([e,t]),Jn&&(queueMicrotask(lr),Jn=!1)},ct=!0,Jn=!0,Ct=[],Wt=[],ya=Mn,wt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:be,pgp:!1,env:{},finalize:be},H=wt,bn=[],ke=0,dt=[];function A(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==Ut)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&In(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var l=a._lib&&on();i&&typeof i.then=="function"?n(a,function(c,C){i instanceof A?i._then(c,C):i.then(c,C)}):(a._state=!0,a._value=i,xa(a)),l&&yn()}},In.bind(null,a))}catch(i){In(a,i)}})(this,e)}var Dn={get:function(){var e=H,t=Zn;function n(a,s){var i=this,l=!e.global&&(e!==H||t!==Zn),c=l&&!Jt(),C=new A(function(S,y){Tt(i,new Ca(La(a,e,l,c),La(s,e,l,c),S,y,e))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return n.prototype=Ut,n},set:function(e){lt(this,"then",e&&e.prototype===Ut?Dn:{get:function(){return e},set:Dn.set})}};function Ca(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function In(e,t){var n,a;Wt.push(t),e._state===null&&(n=e._lib&&on(),t=ya(t),e._state=!1,e._value=t,a=e,Ct.some(function(s){return s._value===a._value})||Ct.push(a),xa(e),n)&&yn()}function xa(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Tt(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),ke===0&&(++ke,Fn(function(){--ke==0&&wa()},[]))}function Tt(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++ke,Fn(Ot,[n,e,t])}}function Ot(e,t,n){try{var a,s=t._value;!t._state&&Wt.length&&(Wt=[]),a=Pt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||Wt.indexOf(s)!==-1||(i=>{for(var l=Ct.length;l;)if(Ct[--l]._value===i._value)return Ct.splice(l,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--ke==0&&wa(),--n.psd.ref||n.psd.finalize()}}function lr(){ln(wt,function(){on()&&yn()})}function on(){var e=ct;return Jn=ct=!1,e}function yn(){var e,t,n;do for(;0<bn.length;)for(e=bn,bn=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<bn.length);Jn=ct=!0}function wa(){for(var e=Ct,t=(Ct=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),dt.slice(0)),n=t.length;n;)t[--n]()}function Hn(e){return new A(Ut,!1,e)}function $e(e,t){var n=H;return function(){var a=on(),s=H;try{return Ht(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Ht(s,!1),a&&yn()}}}pt(A.prototype,{then:Dn,_then:function(e,t){Tt(this,new Ca(null,null,e,t,H))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:Hn)(a)}):this.then(null,function(a){return(a&&a.name===t?n:Hn)(a)}))},finally:function(e){return this.then(function(t){return A.resolve(e()).then(function(){return t})},function(t){return A.resolve(e()).then(function(){return Hn(t)})})},timeout:function(e,t){var n=this;return e<1/0?new A(function(a,s){var i=setTimeout(function(){return s(new Z.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&lt(A.prototype,Symbol.toStringTag,"Dexie.Promise"),wt.env=Ka(),pt(A,{all:function(){var e=_t.apply(null,arguments).map(ea);return new A(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return A.resolve(s).then(function(l){e[i]=l,--a||t(e)},n)})})},resolve:function(e){return e instanceof A?e:e&&typeof e.then=="function"?new A(function(t,n){e.then(t,n)}):new A(Ut,!0,e)},reject:Hn,race:function(){var e=_t.apply(null,arguments).map(ea);return new A(function(t,n){e.map(function(a){return A.resolve(a).then(t,n)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return Zn}},newPSD:Gt,usePSD:ln,scheduler:{get:function(){return Fn},set:function(e){Fn=e}},rejectionMapper:{get:function(){return ya},set:function(e){ya=e}},follow:function(e,t){return new A(function(n,a){return Gt(function(s,i){var l=H;l.unhandleds=[],l.onunhandled=i,l.finalize=qt(function(){var c,C=this;c=function(){C.unhandleds.length===0?s():i(C.unhandleds[0])},dt.push(function S(){c(),dt.splice(dt.indexOf(S),1)}),++ke,Fn(function(){--ke==0&&wa()},[])},l.finalize),e()},t,n,a)})}}),Kt&&(Kt.allSettled&&lt(A,"allSettled",function(){var e=_t.apply(null,arguments).map(ea);return new A(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return A.resolve(s).then(function(l){return a[i]={status:"fulfilled",value:l}},function(l){return a[i]={status:"rejected",reason:l}}).then(function(){return--n||t(a)})})})}),Kt.any&&typeof AggregateError<"u"&&lt(A,"any",function(){var e=_t.apply(null,arguments).map(ea);return new A(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,l){return A.resolve(i).then(function(c){return t(c)},function(c){s[l]=c,--a||n(new AggregateError(s))})})})}),Kt.withResolvers)&&(A.withResolvers=Kt.withResolvers);var ze={awaits:0,echoes:0,id:0},ur=0,Xn=[],Qn=0,Zn=0,qa=0;function Gt(e,l,n,a){var s=H,i=Object.create(s),l=(i.parent=s,i.ref=0,i.global=!1,i.id=++qa,wt.env,i.env=An?{Promise:A,PromiseProp:{value:A,configurable:!0,writable:!0},all:A.all,race:A.race,allSettled:A.allSettled,any:A.any,resolve:A.resolve,reject:A.reject}:{},l&&de(i,l),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},ln(i,e,n,a));return i.ref===0&&i.finalize(),l}function Cn(){return ze.id||(ze.id=++ur),++ze.awaits,ze.echoes+=Tn,ze.id}function Jt(){return!!ze.awaits&&(--ze.awaits==0&&(ze.id=0),ze.echoes=ze.awaits*Tn,!0)}function ea(e){return ze.echoes&&e&&e.constructor===Kt?(Cn(),e.then(function(t){return Jt(),t},function(t){return Jt(),Ae(t)})):e}function cr(){var e=Xn[Xn.length-1];Xn.pop(),Ht(e,!1)}function Ht(e,t){var n,a,s=H;(t?!ze.echoes||Qn++&&e===H:!Qn||--Qn&&e===H)||queueMicrotask(t?(function(i){++Zn,ze.echoes&&--ze.echoes!=0||(ze.echoes=ze.awaits=ze.id=0),Xn.push(H),Ht(i,!0)}).bind(null,e):cr),e!==H&&(H=e,s===wt&&(wt.env=Ka()),An)&&(n=wt.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(ne,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function Ka(){var e=ne.Promise;return An?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ne,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function ln(e,t,n,a,s){var i=H;try{return Ht(e,!0),t(n,a,s)}finally{Ht(i,!1)}}function La(e,t,n,a){return typeof e!="function"?e:function(){var s=H;n&&Cn(),Ht(t,!0);try{return e.apply(this,arguments)}finally{Ht(s,!1),a&&queueMicrotask(Jt)}}}function un(e){Promise===Kt&&ze.echoes===0?Qn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Dt).indexOf("[native code]")===-1&&(Cn=Jt=be);var Ae=A.reject,Xt="￿",Lt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ja="String expected.",xn=[],ta="__dbnames",na="readonly",ka="readwrite";function Qt(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Ra={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function aa(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=rn(t))[e],t}}function Va(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function oe(e,t){try{var n=te(e),a=te(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=Ya(e),i=Ya(t),l=s.length,c=i.length,C=l<c?l:c,S=0;S<C;++S)if(s[S]!==i[S])return s[S]<i[S]?-1:1;return l===c?0:l<c?-1:1;case"Array":for(var y=e,v=t,x=y.length,w=v.length,g=x<w?x:w,b=0;b<g;++b){var B=oe(y[b],v[b]);if(B!==0)return B}return x===w?0:x<w?-1:1}}catch{}return NaN}function te(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Un(e))==="ArrayBuffer")?"binary":t}function Ya(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function o(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}f.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ae(n))return ce(ce([],ae(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(ae(a))return ae(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var u=f;function f(e){this["@@propmod"]=e}function d(e,t){for(var n=ge(t),a=n.length,s=!1,i=0;i<a;++i){var l=n[i],c=t[l],C=It(e,l);c instanceof u?(nt(e,l,c.execute(C)),s=!0):C!==c&&(nt(e,l,c),s=!0)}return s}_.prototype._trans=function(e,t,n){var a=this._tx||H.trans,s=this.name,i=Pt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function l(S,y,v){if(v.schema[s])return t(v.idbtrans,v);throw new Z.NotFound("Table "+s+" not part of transaction")}var c=on();try{var C=a&&a.db._novip===this.db._novip?a===H.trans?a._promise(e,l,n):Gt(function(){return a._promise(e,l,n)},{trans:a,transless:H.transless||H}):(function S(y,v,x,w){if(y.idbdb&&(y._state.openComplete||H.letThrough||y._vip)){var g=y._createTransaction(v,x,y._dbSchema);try{g.create(),y._state.PR1398_maxLoop=3}catch(b){return b.name===Wn.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return S(y,v,x,w)})):Ae(b)}return g._promise(v,function(b,B){return Gt(function(){return H.trans=g,w(b,B,g)})}).then(function(b){if(v==="readwrite")try{g.idbtrans.commit()}catch{}return v==="readonly"?b:g._completion.then(function(){return b})})}if(y._state.openComplete)return Ae(new Z.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Ae(new Z.DatabaseClosed);y.open().catch(be)}return y._state.dbReadyPromise.then(function(){return S(y,v,x,w)})})(this.db,e,[this.name],l);return i&&(C._consoleTask=i,C=C.catch(function(S){return console.trace(S),Ae(S)})),C}finally{c&&yn()}},_.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ae(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},_.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ae(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=ge(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function(S){return 0<=c.keyPath.indexOf(S)})){for(var C=0;C<t.length;++C)if(t.indexOf(c.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(c,C){return c.keyPath.length-C.keyPath.length})[0];if(n&&this.db._maxKey!==Xt)return l=n.keyPath.slice(0,t.length),this.where(l).equals(l.map(function(c){return e[c]}));!n&&Pt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,C){return oe(c,C)===0}var l=t.reduce(function(y,C){var S=y[0],y=y[1],v=a[C],x=e[C];return[S||v,S||!v?Qt(y,v&&v.multi?function(w){return w=It(w,C),ae(w)&&w.some(function(g){return s(x,g)})}:function(w){return s(x,It(w,C))}):y]},[null,null]),i=l[0],l=l[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},_.prototype.filter=function(e){return this.toCollection().and(e)},_.prototype.count=function(e){return this.toCollection().count(e)},_.prototype.offset=function(e){return this.toCollection().offset(e)},_.prototype.limit=function(e){return this.toCollection().limit(e)},_.prototype.each=function(e){return this.toCollection().each(e)},_.prototype.toArray=function(e){return this.toCollection().toArray(e)},_.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},_.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ae(e)?"[".concat(e.join("+"),"]"):e))},_.prototype.reverse=function(){return this.toCollection().reverse()},_.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof Va&&(e=(l=>{var c=y,C=l;if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");function S(){this.constructor=c}function y(){return l!==null&&l.apply(this,arguments)||this}return Me(c,C),c.prototype=C===null?Object.create(C):(S.prototype=C.prototype,new S),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),s=e.prototype;s;s=tt(s))Object.getOwnPropertyNames(s).forEach(function(l){return a.add(l)});function i(l){if(!l)return l;var c,C=Object.create(e.prototype);for(c in l)if(!a.has(c))try{C[c]=l[c]}catch{}return C}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},_.prototype.defineClass=function(){return this.mapToClass(function(e){de(this,e)})},_.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=aa(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[l]})}).then(function(c){return c.numFailures?A.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{nt(e,i,c)}catch{}return c})},_.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var l=i??{};return d(l,t),a&&nt(l,a,e),n.core.mutate({trans:s,type:"put",values:[l],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?A.reject(c.failures[0]):!!i})})})},_.prototype.update=function(e,t){return typeof e!="object"||ae(e)?this.where(":id").equals(e).modify(t):(e=It(e,this.schema.primKey.keyPath))===void 0?Ae(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},_.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=aa(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[l],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?A.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{nt(e,i,c)}catch{}return c})},_.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return o(t,[e],a)}).then(function(a){return a.numFailures?A.reject(a.failures[0]):void 0})})},_.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Ra}).then(function(n){return o(e,null,n)})}).then(function(t){return t.numFailures?A.reject(t.failures[0]):void 0})},_.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},_.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,S=c.auto,c=c.keyPath;if(c&&s)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var C=e.length,S=c&&S?e.map(aa(c)):e;return a.core.mutate({trans:l,type:"add",keys:s,values:S,wantResults:i}).then(function(y){var v=y.numFailures,x=y.failures;if(v===0)return i?y.results:y.lastResult;throw new mn("".concat(a.name,".bulkAdd(): ").concat(v," of ").concat(C," operations failed"),x)})})},_.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,S=c.auto,c=c.keyPath;if(c&&s)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var C=e.length,S=c&&S?e.map(aa(c)):e;return a.core.mutate({trans:l,type:"put",keys:s,values:S,wantResults:i}).then(function(y){var v=y.numFailures,x=y.failures;if(v===0)return i?y.results:y.lastResult;throw new mn("".concat(a.name,".bulkPut(): ").concat(v," of ").concat(C," operations failed"),x)})})},_.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(l){return l.key}),s=e.map(function(l){return l.changes}),i=[];return this._trans("readwrite",function(l){return n.getMany({trans:l,keys:a,cache:"clone"}).then(function(c){var C=[],S=[],y=(e.forEach(function(v,x){var w=v.key,g=v.changes,b=c[x];if(b){for(var B=0,E=Object.keys(g);B<E.length;B++){var $=E[B],O=g[$];if($===t.schema.primKey.keyPath){if(oe(O,w)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else nt(b,$,O)}i.push(x),C.push(w),S.push(b)}}),C.length);return n.mutate({trans:l,type:"put",keys:C,values:S,updates:{keys:a,changeSpecs:s}}).then(function(v){var x=v.numFailures,w=v.failures;if(x===0)return y;for(var g=0,b=Object.keys(w);g<b.length;g++){var B,E=b[g],$=i[Number(E)];$!=null&&(B=w[E],delete w[E],w[$]=B)}throw new mn("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(y," operations failed"),w)})})})},_.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return o(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new mn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var m=_;function _(){}function I(e){function t(l,c){if(c){for(var C=arguments.length,S=new Array(C-1);--C;)S[C-1]=arguments[C];return n[l].subscribe.apply(null,S),e}if(typeof l=="string")return n[l]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(l,c,C){var S,y;if(typeof l!="object")return c=c||Pn,y={subscribers:[],fire:C=C||be,subscribe:function(v){y.subscribers.indexOf(v)===-1&&(y.subscribers.push(v),y.fire=c(y.fire,v))},unsubscribe:function(v){y.subscribers=y.subscribers.filter(function(x){return x!==v}),y.fire=y.subscribers.reduce(c,C)}},n[l]=t[l]=y;ge(S=l).forEach(function(v){var x=S[v];if(ae(x))i(v,S[v][0],S[v][1]);else{if(x!=="asap")throw new Z.InvalidArgument("Invalid event config");var w=i(v,Mn,function(){for(var g=arguments.length,b=new Array(g);g--;)b[g]=arguments[g];w.subscribers.forEach(function(B){ma(function(){B.apply(null,b)})})})}})}}function K(e,t){return xt(t).from({prototype:e}),t}function N(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function X(e,t){e.filter=Qt(e.filter,t)}function U(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return Qt(a(),t())}:t,e.justLimit=n&&!a}function Q(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function pe(e,t,n){var a=Q(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function Ce(e,t,n,a){var s,i,l=e.replayFilter?Qt(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,C,S){var y,v;l&&!l(C,S,function(x){return C.stop(x)},function(x){return C.fail(x)})||((v=""+(y=C.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(y)),se(s,v))||(s[v]=!0,t(c,C,S))},Promise.all([e.or._iterate(i,n),Ke(pe(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):Ke(pe(e,a,n),Qt(e.algorithm,l),t,!e.keysOnly&&e.valueMapper)}function Ke(e,t,n,a){var s=$e(a?function(i,l,c){return n(a(i),l,c)}:n);return e.then(function(i){if(i)return i.start(function(){var l=function(){return i.continue()};t&&!t(i,function(c){return l=c},function(c){i.stop(c),l=be},function(c){i.fail(c),l=be})||s(i.value,i,function(c){return l=c}),l()})})}W.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ae.bind(null,n.error)):n.table._trans("readonly",e).then(t)},W.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ae.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},W.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Qt(t.algorithm,e)},W.prototype._iterate=function(e,t){return Ce(this._ctx,e,t,this._ctx.table.core)},W.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&de(n,e),t._ctx=n,t},W.prototype.raw=function(){return this._ctx.valueMapper=null,this},W.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return Ce(t,e,n,t.table.core)})},W.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return N(s,!0)?i.count({trans:n,query:{index:Q(s,i.schema),range:s.range}}).then(function(l){return Math.min(l,s.limit)}):(a=0,Ce(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},W.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(C,S){return S?i(C[n[S]],S-1):C[a]}var l=this._ctx.dir==="next"?1:-1;function c(C,S){return oe(i(C,s),i(S,s))*l}return this.toArray(function(C){return C.sort(c)}).then(t)},W.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,l=t._ctx;return l.dir==="next"&&N(l,!0)&&0<l.limit?(a=l.valueMapper,s=Q(l,l.table.core.schema),l.table.core.query({trans:n,limit:l.limit,values:!0,query:{index:s,range:l.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],Ce(l,function(c){return i.push(c)},n,l.table.core).then(function(){return i}))},e)},W.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,N(t)?U(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):U(t,function(){var n=e;return function(){return--n<0}})),this},W.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),U(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},W.prototype.until=function(e,t){return X(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},W.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},W.prototype.last=function(e){return this.reverse().first(e)},W.prototype.filter=function(e){var t;return X(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=Qt(t.isMatch,e),this},W.prototype.and=function(e){return this.filter(e)},W.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},W.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},W.prototype.desc=function(){return this.reverse()},W.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},W.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},W.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},W.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},W.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&N(t,!0)&&0<t.limit)return this._read(function(a){var s=Q(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},W.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},W.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},W.prototype.lastKey=function(e){return this.reverse().firstKey(e)},W.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},X(this._ctx,function(a){var a=a.primaryKey.toString(),s=se(e,a);return e[a]=!0,!s})),this},W.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(b,B){var E=B.failures;x+=b-B.numFailures;for(var $=0,O=ge(E);$<O.length;$++){var F=O[$];v.push(E[F])}}var i=typeof e=="function"?e:function(b){return d(b,e)},l=n.table.core,y=l.schema.primaryKey,c=y.outbound,C=y.extractKey,S=200,y=t.db._options.modifyChunkSize,v=(y&&(S=typeof y=="object"?y[l.name]||y["*"]||200:y),[]),x=0,w=[],g=e===We;return t.clone().primaryKeys().then(function(b){function B($){var O=Math.min(S,b.length-$),F=b.slice($,$+O);return(g?Promise.resolve([]):l.getMany({trans:a,keys:F,cache:"immutable"})).then(function(j){var R=[],D=[],z=c?[]:null,r=g?F:[];if(!g)for(var h=0;h<O;++h){var M=j[h],L={value:rn(M),primKey:b[$+h]};i.call(L,L.value,L)!==!1&&(L.value==null?r.push(b[$+h]):c||oe(C(M),C(L.value))===0?(D.push(L.value),c&&z.push(b[$+h])):(r.push(b[$+h]),R.push(L.value)))}return Promise.resolve(0<R.length&&l.mutate({trans:a,type:"add",values:R}).then(function(J){for(var Y in J.failures)r.splice(parseInt(Y),1);s(R.length,J)})).then(function(){return(0<D.length||E&&typeof e=="object")&&l.mutate({trans:a,type:"put",keys:z,values:D,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<$}).then(function(J){return s(D.length,J)})}).then(function(){return(0<r.length||E&&g)&&l.mutate({trans:a,type:"delete",keys:r,criteria:E,isAdditionalChunk:0<$}).then(function(J){return o(n.table,r,J)}).then(function(J){return s(r.length,J)})}).then(function(){return b.length>$+O&&B($+S)})})}var E=N(n)&&n.limit===1/0&&(typeof e!="function"||g)&&{index:n.index,range:n.range};return B(0).then(function(){if(0<v.length)throw new _n("Error modifying one or more objects",v,x,w);return b.length})})})},W.prototype.delete=function(){var e=this._ctx,t=e.range;return!N(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(We):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(C){var c=C.failures,C=C.numFailures;if(C)throw new _n("Could not delete some values",Object.keys(c).map(function(S){return c[S]}),i-C);return i-C})})})};var je=W;function W(){}var We=function(e,t){return t.value=null};function Le(e,t){return e<t?-1:e===t?0:1}function Ge(e,t){return t<e?-1:e===t?0:1}function xe(e,t,n){return e=e instanceof Je?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Re(e){return new e.Collection(e,function(){return vt("")}).limit(0)}function V(w,t,n,a){var s,i,l,c,C,S,y,v=n.length;if(!n.every(function(b){return typeof b=="string"}))return xe(w,ja);function x(b){s=b==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},i=b==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},l=b==="next"?Le:Ge;var B=n.map(function(E){return{lower:i(E),upper:s(E)}}).sort(function(E,$){return l(E.lower,$.lower)});c=B.map(function(E){return E.upper}),C=B.map(function(E){return E.lower}),y=(S=b)==="next"?"":a}x("next");var w=new w.Collection(w,function(){return Se(c[0],C[v-1]+a)}),g=(w._ondirectionchange=function(b){x(b)},0);return w._addAlgorithm(function(b,B,E){var $=b.key;if(typeof $=="string"){var O=i($);if(t(O,C,g))return!0;for(var F=null,j=g;j<v;++j){var R=((D,z,r,h,M,L)=>{for(var J=Math.min(D.length,h.length),Y=-1,ee=0;ee<J;++ee){var le=z[ee];if(le!==h[ee])return M(D[ee],r[ee])<0?D.substr(0,ee)+r[ee]+r.substr(ee+1):M(D[ee],h[ee])<0?D.substr(0,ee)+h[ee]+r.substr(ee+1):0<=Y?D.substr(0,Y)+z[Y]+r.substr(Y+1):null;M(D[ee],le)<0&&(Y=ee)}return J<h.length&&L==="next"?D+r.substr(D.length):J<D.length&&L==="prev"?D.substr(0,r.length):Y<0?null:D.substr(0,Y)+h[Y]+r.substr(Y+1)})($,O,c[j],C[j],l,S);R===null&&F===null?g=j+1:(F===null||0<l(F,R))&&(F=R)}B(F!==null?function(){b.continue(F+y)}:E)}return!1}),w}function Se(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function vt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(ve.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ve.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Re(this):new this.Collection(this,function(){return Se(e,t,!n,!a)})}catch{return xe(this,Lt)}},ve.prototype.equals=function(e){return e==null?xe(this,Lt):new this.Collection(this,function(){return vt(e)})},ve.prototype.above=function(e){return e==null?xe(this,Lt):new this.Collection(this,function(){return Se(e,void 0,!0)})},ve.prototype.aboveOrEqual=function(e){return e==null?xe(this,Lt):new this.Collection(this,function(){return Se(e,void 0,!1)})},ve.prototype.below=function(e){return e==null?xe(this,Lt):new this.Collection(this,function(){return Se(void 0,e,!1,!0)})},ve.prototype.belowOrEqual=function(e){return e==null?xe(this,Lt):new this.Collection(this,function(){return Se(void 0,e)})},ve.prototype.startsWith=function(e){return typeof e!="string"?xe(this,ja):this.between(e,e+Xt,!0,!0)},ve.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):V(this,function(t,n){return t.indexOf(n[0])===0},[e],Xt)},ve.prototype.equalsIgnoreCase=function(e){return V(this,function(t,n){return t===n[0]},[e],"")},ve.prototype.anyOfIgnoreCase=function(){var e=_t.apply(vn,arguments);return e.length===0?Re(this):V(this,function(t,n){return n.indexOf(t)!==-1},e,"")},ve.prototype.startsWithAnyOfIgnoreCase=function(){var e=_t.apply(vn,arguments);return e.length===0?Re(this):V(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,Xt)},ve.prototype.anyOf=function(){var e,t,n=this,a=_t.apply(vn,arguments),s=this._cmp;try{a.sort(s)}catch{return xe(this,Lt)}return a.length===0?Re(this):((e=new this.Collection(this,function(){return Se(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,l,c){for(var C=i.key;0<s(C,a[t]);)if(++t===a.length)return l(c),!1;return s(C,a[t])===0||(l(function(){i.continue(a[t])}),!1)}),e)},ve.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ve.prototype.noneOf=function(){var e=_t.apply(vn,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return xe(this,Lt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},ve.prototype.inAnyRange=function(e,E){var n=this,a=this._cmp,s=this._ascending,i=this._descending,l=this._min,c=this._max;if(e.length===0)return Re(this);if(!e.every(function($){return $[0]!==void 0&&$[1]!==void 0&&s($[0],$[1])<=0}))return xe(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var C=!E||E.includeLowers!==!1,S=E&&E.includeUppers===!0,y,v=s;function x($,O){return v($[0],O[0])}try{(y=e.reduce(function($,O){for(var F=0,j=$.length;F<j;++F){var R=$[F];if(a(O[0],R[1])<0&&0<a(O[1],R[0])){R[0]=l(R[0],O[0]),R[1]=c(R[1],O[1]);break}}return F===j&&$.push(O),$},[])).sort(x)}catch{return xe(this,Lt)}var w=0,g=S?function($){return 0<s($,y[w][1])}:function($){return 0<=s($,y[w][1])},b=C?function($){return 0<i($,y[w][0])}:function($){return 0<=i($,y[w][0])},B=g,E=new this.Collection(this,function(){return Se(y[0][0],y[y.length-1][1],!C,!S)});return E._ondirectionchange=function($){v=$==="next"?(B=g,s):(B=b,i),y.sort(x)},E._addAlgorithm(function($,O,F){for(var j,R=$.key;B(R);)if(++w===y.length)return O(F),!1;return!g(j=R)&&!b(j)||(n._cmp(R,y[w][1])===0||n._cmp(R,y[w][0])===0||O(function(){v===s?$.continue(y[w][0]):$.continue(y[w][1])}),!1)}),E},ve.prototype.startsWithAnyOf=function(){var e=_t.apply(vn,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Re(this):this.inAnyRange(e.map(function(t){return[t,t+Xt]})):xe(this,"startsWithAnyOf() only works with strings")};var Je=ve;function ve(){}function re(e){return $e(function(t){return He(t),e(t.target.error),!1})}function He(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var fe="storagemutated",Be="x-storagemutated-1",Fe=I(null,fe),Xe=(he.prototype._lock=function(){return Bn(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},he.prototype._unlock=function(){if(Bn(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{ln(e[1],e[0])}catch{}}return this},he.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},he.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Bn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(a);case"MissingAPIError":throw new Z.MissingAPI(a.message,a);default:throw new Z.OpenFailed(a)}if(!this.active)throw new Z.TransactionInactive;Bn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=$e(function(s){He(s),t._reject(e.error)}),e.onabort=$e(function(s){He(s),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=$e(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&Fe.storagemutated.fire(e.mutatedParts)})}return this},he.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Ae(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new A(function(i,l){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,l)},H])}):n?Gt(function(){var i=new A(function(l,c){s._lock();var C=t(l,c,s);C&&C.then&&C.then(l,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new A(function(i,l){var c=t(i,l,s);c&&c.then&&c.then(i,l)}))._lib=!0,a):Ae(new Z.TransactionInactive)},he.prototype._root=function(){return this.parent?this.parent._root():this},he.prototype.waitFor=function(e){var t,n=this._root(),a=A.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new A(function(i,l){a.then(function(c){return n._waitingQueue.push($e(i.bind(null,c)))},function(c){return n._waitingQueue.push($e(l.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},he.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},he.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(se(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},he);function he(){}function Ue(e,t,n,a,s,i,l,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!l?"&":"")+(a?"*":"")+(s?"++":"")+jt(t),type:c}}function jt(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function kt(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,l){return i=a(i,l),i&&(s[i[0]]=i[1]),s},{}))};var a}var Qe=function(e){try{return e.only([[]]),Qe=function(){return[[]]},[[]]}catch{return Qe=function(){return Xt},Xt}};function mt(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return It(n,t)}:function(n){return It(n,e)};var t}function $t(e){return[].slice.call(e)}var Ee=0;function ye(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Ie(e,t,C){function a(g){if(g.type===3)return null;if(g.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=g.lower,x=g.upper,w=g.lowerOpen,g=g.upperOpen;return v===void 0?x===void 0?null:t.upperBound(x,!!g):x===void 0?t.lowerBound(v,!!w):t.bound(v,x,!!w,!!g)}function s(y){var v,x=y.name;return{name:x,schema:y,mutate:function(w){var g=w.trans,b=w.type,B=w.keys,E=w.values,$=w.range;return new Promise(function(O,F){O=$e(O);var j=g.objectStore(x),R=j.keyPath==null,D=b==="put"||b==="add";if(!D&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var z,r=(B||E||{length:1}).length;if(B&&E&&B.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(r===0)return O({numFailures:0,failures:{},results:[],lastResult:void 0});function h(me){++J,He(me)}var M=[],L=[],J=0;if(b==="deleteRange"){if($.type===4)return O({numFailures:J,failures:L,results:[],lastResult:void 0});$.type===3?M.push(z=j.clear()):M.push(z=j.delete(a($)))}else{var R=D?R?[E,B]:[E,null]:[B,null],Y=R[0],ee=R[1];if(D)for(var le=0;le<r;++le)M.push(z=ee&&ee[le]!==void 0?j[b](Y[le],ee[le]):j[b](Y[le])),z.onerror=h;else for(le=0;le<r;++le)M.push(z=j[b](Y[le])),z.onerror=h}function ue(me){me=me.target.result,M.forEach(function(st,et){return st.error!=null&&(L[et]=st.error)}),O({numFailures:J,failures:L,results:b==="delete"?B:M.map(function(st){return st.result}),lastResult:me})}z.onerror=function(me){h(me),ue(me)},z.onsuccess=ue})},getMany:function(w){var g=w.trans,b=w.keys;return new Promise(function(B,E){B=$e(B);for(var $,O=g.objectStore(x),F=b.length,j=new Array(F),R=0,D=0,z=function(M){M=M.target,j[M._pos]=M.result,++D===R&&B(j)},r=re(E),h=0;h<F;++h)b[h]!=null&&(($=O.get(b[h]))._pos=h,$.onsuccess=z,$.onerror=r,++R);R===0&&B(j)})},get:function(w){var g=w.trans,b=w.key;return new Promise(function(B,E){B=$e(B);var $=g.objectStore(x).get(b);$.onsuccess=function(O){return B(O.target.result)},$.onerror=re(E)})},query:(v=c,function(w){return new Promise(function(g,b){g=$e(g);var B,E,$,D=w.trans,O=w.values,F=w.limit,R=w.query,j=F===1/0?void 0:F,z=R.index,R=R.range,D=D.objectStore(x),D=z.isPrimaryKey?D:D.index(z.name),z=a(R);if(F===0)return g({result:[]});v?((R=O?D.getAll(z,j):D.getAllKeys(z,j)).onsuccess=function(r){return g({result:r.target.result})},R.onerror=re(b)):(B=0,E=!O&&"openKeyCursor"in D?D.openKeyCursor(z):D.openCursor(z),$=[],E.onsuccess=function(r){var h=E.result;return!h||($.push(O?h.value:h.primaryKey),++B===F)?g({result:$}):void h.continue()},E.onerror=re(b))})}),openCursor:function(w){var g=w.trans,b=w.values,B=w.query,E=w.reverse,$=w.unique;return new Promise(function(O,F){O=$e(O);var D=B.index,j=B.range,R=g.objectStore(x),R=D.isPrimaryKey?R:R.index(D.name),D=E?$?"prevunique":"prev":$?"nextunique":"next",z=!b&&"openKeyCursor"in R?R.openKeyCursor(a(j),D):R.openCursor(a(j),D);z.onerror=re(F),z.onsuccess=$e(function(r){var h,M,L,J,Y=z.result;Y?(Y.___id=++Ee,Y.done=!1,h=Y.continue.bind(Y),M=(M=Y.continuePrimaryKey)&&M.bind(Y),L=Y.advance.bind(Y),J=function(){throw new Error("Cursor not stopped")},Y.trans=g,Y.stop=Y.continue=Y.continuePrimaryKey=Y.advance=function(){throw new Error("Cursor not started")},Y.fail=$e(F),Y.next=function(){var ee=this,le=1;return this.start(function(){return le--?ee.continue():ee.stop()}).then(function(){return ee})},Y.start=function(ee){function le(){if(z.result)try{ee()}catch(me){Y.fail(me)}else Y.done=!0,Y.start=function(){throw new Error("Cursor behind last entry")},Y.stop()}var ue=new Promise(function(me,st){me=$e(me),z.onerror=re(st),Y.fail=st,Y.stop=function(et){Y.stop=Y.continue=Y.continuePrimaryKey=Y.advance=J,me(et)}});return z.onsuccess=$e(function(me){z.onsuccess=le,le()}),Y.continue=h,Y.continuePrimaryKey=M,Y.advance=L,le(),ue},O(Y)):O(null)},F)})},count:function(w){var g=w.query,b=w.trans,B=g.index,E=g.range;return new Promise(function($,O){var F=b.objectStore(x),F=B.isPrimaryKey?F:F.index(B.name),j=a(E),j=j?F.count(j):F.count();j.onsuccess=$e(function(R){return $(R.target.result)}),j.onerror=re(O)})}}}i=C,l=$t((C=e).objectStoreNames);var i,C={schema:{name:C.name,tables:l.map(function(y){return i.objectStore(y)}).map(function(y){var v=y.keyPath,x=y.autoIncrement,g=ae(v),w={},g={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:g,keyPath:v,autoIncrement:x,unique:!0,extractKey:mt(v)},indexes:$t(y.indexNames).map(function(b){return y.index(b)}).map(function($){var O=$.name,B=$.unique,E=$.multiEntry,$=$.keyPath,O={name:O,compound:ae($),keyPath:$,unique:B,multiEntry:E,extractKey:mt($)};return w[ye($)]=O}),getIndexByKeyPath:function(b){return w[ye(b)]}};return w[":id"]=g.primaryKey,v!=null&&(w[ye(v)]=g.primaryKey),g})},hasGetAll:0<l.length&&"getAll"in i.objectStore(l[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},l=C.schema,c=C.hasGetAll,C=l.tables.map(s),S={};return C.forEach(function(y){return S[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if(S[y])return S[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Qe(t),schema:l}}function Ve(e,t,n,a){return n=n.IDBKeyRange,t=Ie(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,G(G({},s),i(s))},t)}}function Ye(e,t){var n=t.db,n=Ve(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function gt(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(l){var c=(function C(S,y){return va(S,y)||(S=tt(S))&&C(S,y)})(l,s);(!c||"value"in c&&c.value===void 0)&&(l===e.Transaction.prototype||l instanceof e.Transaction?lt(l,s,{get:function(){return this.table(s)},set:function(C){ot(this,s,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):l[s]=new e.Table(s,i))})})}function At(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Rt(e,t){return e._cfg.version-t._cfg.version}function Vt(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=kt("$meta",kn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),l=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=H.transless||H;Gt(function(){if(H.trans=i,H.transless=c,t!==0)return Ye(e,n),S=t,((C=i).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(y){return y??S}):A.resolve(S)).then(function(B){var v=e,x=B,w=i,g=n,b=[],B=v._versions,E=v._dbSchema=wn(0,v.idbdb,g);return(B=B.filter(function($){return $._cfg.version>=x})).length===0?A.resolve():(B.forEach(function($){b.push(function(){var O,F,j,R=E,D=$._cfg.dbschema,z=(Zt(v,R,g),Zt(v,D,g),E=v._dbSchema=D,q(R,D)),r=(z.add.forEach(function(h){ie(g,h[0],h[1].primKey,h[1].indexes)}),z.change.forEach(function(h){if(h.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var M=g.objectStore(h.name);h.add.forEach(function(L){return Yt(M,L)}),h.change.forEach(function(L){M.deleteIndex(L.name),Yt(M,L)}),h.del.forEach(function(L){return M.deleteIndex(L)})}),$._cfg.contentUpgrade);if(r&&$._cfg.version>x)return Ye(v,g),w._memoizedTables={},O=Fa(D),z.del.forEach(function(h){O[h]=R[h]}),At(v,[v.Transaction.prototype]),gt(v,[v.Transaction.prototype],ge(O),O),w.schema=O,(F=ga(r))&&Cn(),D=A.follow(function(){var h;(j=r(w))&&F&&(h=Jt.bind(null,null),j.then(h,h))}),j&&typeof j.then=="function"?A.resolve(j):D.then(function(){return j})}),b.push(function(O){var F,j,R=$._cfg.dbschema;F=R,j=O,[].slice.call(j.db.objectStoreNames).forEach(function(D){return F[D]==null&&j.db.deleteObjectStore(D)}),At(v,[v.Transaction.prototype]),gt(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),w.schema=v._dbSchema}),b.push(function(O){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===$._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(F){return F!=="$meta"})):O.objectStore("$meta").put($._cfg.version,"version"))})}),(function $(){return b.length?A.resolve(b.shift()(w.idbtrans)).then($):A.resolve()})().then(function(){Nn(E,g)}))}).catch(l);var C,S;ge(s).forEach(function(y){ie(n,y,s[y].primKey,s[y].indexes)}),Ye(e,n),A.follow(function(){return e.on.populate.fire(i)}).catch(l)})}function P(e,t){Nn(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=wn(0,e.idbdb,t);Zt(e,e._dbSchema,t);for(var a=0,s=q(n,e._dbSchema).change;a<s.length;a++){var i=(l=>{if(l.change.length||l.recreate)return console.warn("Unable to patch indexes of table ".concat(l.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(l.name);l.add.forEach(function(C){Pt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name,".").concat(C.src)),Yt(c,C)})})(s[a]);if(typeof i=="object")return i.value}}function q(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var l={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)l.recreate=!0,a.change.push(l);else{var c=s.idxByName,C=i.idxByName,S=void 0;for(S in c)C[S]||l.del.push(S);for(S in C){var y=c[S],v=C[S];y?y.src!==v.src&&l.change.push(v):l.add.push(v)}(0<l.del.length||0<l.add.length||0<l.change.length)&&a.change.push(l)}}else a.add.push([n,i])}return a}function ie(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return Yt(s,i)})}function Nn(e,t){ge(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(Pt&&console.debug("Dexie: Creating missing table",n),ie(t,n,e[n].primKey,e[n].indexes))})}function Yt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function wn(e,t,n){var a={};return hn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),l=Ue(jt(S=i.keyPath),S||"",!0,!1,!!i.autoIncrement,S&&typeof S!="string",!0),c=[],C=0;C<i.indexNames.length;++C){var y=i.index(i.indexNames[C]),S=y.keyPath,y=Ue(y.name,S,!!y.unique,!!y.multiEntry,!1,S&&typeof S!="string",!1);c.push(y)}a[s]=kt(s,l,c)}),a}function Zt(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],l=n.objectStore(i);e._hasGetAll="getAll"in l;for(var c=0;c<l.indexNames.length;++c){var C,S=l.indexNames[c],y=l.index(S).keyPath,y=typeof y=="string"?y:"["+hn(y).join("+")+"]";t[i]&&(C=t[i].idxByName[y])&&(C.name=S,delete t[i].idxByName[y],t[i].idxByName[S]=C)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ne.WorkerGlobalScope&&ne instanceof ne.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function kn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Ue(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ae(i),n===0,a)})}$n.prototype._createTableSchema=kt,$n.prototype._parseIndexSyntax=kn,$n.prototype._parseStoresSpec=function(e,t){var n=this;ge(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new Z.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");s.forEach(function(l){if(l.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},$n.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?de(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){de(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,At(t,[t._allTables,t,t.Transaction.prototype]),gt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],ge(s),s),t._storeNames=ge(s),this},$n.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Oe(this._cfg.contentUpgrade||be,e),this};var De=$n;function $n(){}function ra(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Pe(ta,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function sa(e){return e&&typeof e.databases=="function"}function ia(e){return Gt(function(){return H.letThrough=!0,e()})}function $a(e){return!("from"in e)}var Ze=function(e,t){var n;if(!this)return n=new Ze,e&&"d"in e&&de(n,e),n;de(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function ft(e,t,n){var a=oe(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if($a(e))return de(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(oe(n,e.from)<0)return a?ft(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Ba(e);if(0<oe(t,e.to))return s?ft(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Ba(e);oe(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<oe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&bt(e,a),s&&t&&bt(e,s)}}function bt(e,t){$a(t)||(function n(a,s){var i=s.from,l=s.l,c=s.r;ft(a,i,s.to),l&&n(a,l),c&&n(a,c)})(e,t)}function Sa(e,t){var n=qn(t),a=n.next();if(!a.done)for(var s=a.value,i=qn(e),l=i.next(s.from),c=l.value;!a.done&&!l.done;){if(oe(c.from,s.to)<=0&&0<=oe(c.to,s.from))return!0;oe(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(l=i.next(s.from)).value}return!1}function qn(e){var t=$a(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&oe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||oe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ba(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=G({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Ea(n)),e.d=Ea(e)}function Ea(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Kn(e,t){return ge(t).forEach(function(n){e[n]?bt(e[n],t[n]):e[n]=(function a(s){var i,l,c={};for(i in s)se(s,i)&&(l=s[i],c[i]=!l||typeof l!="object"||pn.has(l.constructor)?l:a(l));return c})(t[n])}),e}function oa(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Sa(t[n],e[n])})}pt(Ze.prototype,((at={add:function(e){return bt(this,e),this},addKey:function(e){return ft(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return ft(t,n,n)}),this},hasKey:function(e){var t=qn(this).next(e).value;return t&&oe(t.from,e)<=0&&0<=oe(t.to,e)}})[ut]=function(){return qn(this)},at));var en={},_a={},Ln=!1;function jn(e){Kn(_a,e),Ln||(Ln=!0,setTimeout(function(){Ln=!1,St(_a,!(_a={}))},0))}function St(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(en);a<s.length;a++)za(c=s[a],e,n,t);else for(var i in e){var l,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(l=i[1],i=i[2],c=en["idb://".concat(l,"/").concat(i)])&&za(c,e,n,t)}n.forEach(function(C){return C()})}function za(e,t,n,a){for(var s=[],i=0,l=Object.entries(e.queries.query);i<l.length;i++){for(var c=l[i],C=c[0],S=[],y=0,v=c[1];y<v.length;y++){var x=v[y];oa(t,x.obsSet)?x.subscribers.forEach(function(B){return n.add(B)}):a&&S.push(x)}a&&s.push([C,S])}if(a)for(var w=0,g=s;w<g.length;w++){var b=g[w],C=b[0],S=b[1];e.queries.query[C]=S}}function tn(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ae(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function l(){if(t.openCanceller!==a)throw new Z.DatabaseClosed("db.open() was cancelled")}function c(){return new A(function(x,w){if(l(),!n)throw new Z.MissingAPI;var g=e.name,b=t.autoSchema||!s?n.open(g):n.open(g,s);if(!b)throw new Z.MissingAPI;b.onerror=re(w),b.onblocked=$e(e._fireOnBlocked),b.onupgradeneeded=$e(function(B){var E;y=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=He,y.abort(),b.result.close(),(E=n.deleteDatabase(g)).onsuccess=E.onerror=$e(function(){w(new Z.NoSuchDatabase("Database ".concat(g," doesnt exist")))})):(y.onerror=re(w),E=B.oldVersion>Math.pow(2,62)?0:B.oldVersion,v=E<1,e.idbdb=b.result,i&&P(e,y),Vt(e,E/10,y,w))},w),b.onsuccess=$e(function(){y=null;var B,E,$,O,F,j,R=e.idbdb=b.result,D=hn(R.objectStoreNames);if(0<D.length)try{var z=R.transaction((F=D).length===1?F[0]:F,"readonly");if(t.autoSchema)j=R,O=z,($=e).verno=j.version/10,O=$._dbSchema=wn(0,j,O),$._storeNames=hn(j.objectStoreNames,0),gt($,[$._allTables],ge(O),O);else if(Zt(e,e._dbSchema,z),E=z,((E=q(wn(0,(B=e).idbdb,E),B._dbSchema)).add.length||E.change.some(function(r){return r.add.length||r.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),R.close(),s=R.version+1,i=!0,x(c());Ye(e,z)}catch{}xn.push(e),R.onversionchange=$e(function(r){t.vcFired=!0,e.on("versionchange").fire(r)}),R.onclose=$e(function(){e.close({disableAutoOpen:!1})}),v&&(D=e._deps,F=g,sa(j=D.indexedDB)||F===ta||ra(j,D.IDBKeyRange).put({name:F}).catch(be)),x()},w)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return A.reject(x)})}var C,S=t.dbReadyResolve,y=null,v=!1;return A.race([a,(typeof navigator>"u"?A.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function w(){return indexedDB.databases().finally(x)}C=setInterval(w,100),w()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(c)]).then(function(){return l(),t.onReadyBeingFired=[],A.resolve(ia(function(){return e.on.ready.fire(e.vip)})).then(function x(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(Oe,be),t.onReadyBeingFired=[],A.resolve(ia(function(){return w(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{y&&y.abort()}catch{}return a===t.openCanceller&&e._close(),Ae(x)}).finally(function(){t.openComplete=!0,S()}).then(function(){var x;return v&&(x={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(g){g.name&&(x["idb://".concat(e.name,"/").concat(w.name,"/").concat(g.name)]=new Ze(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(w.name,"/")]=x["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new Ze(-1/0,[[[]]])}),Fe(fe).fire(x),St(x,!0)),e})}function Ma(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),C=c.value;return c.done?C:C&&typeof C.then=="function"?C.then(n,a):ae(C)?Promise.all(C).then(n,a):n(C)}}return s(t)()}function la(e,t,n){for(var a=ae(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Ua={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return G(G({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function l(x,w,g){var $=ye(x),b=s[$]=s[$]||[],B=x==null?0:typeof x=="string"?1:x.length,E=0<w,$=G(G({},g),{name:E?"".concat($,"(virtual-from:").concat(g.name,")"):g.name,lowLevelIndex:g,isVirtual:E,keyTail:w,keyLength:B,extractKey:mt(x),unique:!E&&g.unique});return b.push($),$.isPrimaryKey||i.push($),1<B&&l(B===2?x[0]:x.slice(0,B-1),w+1,g),b.sort(function(O,F){return O.keyTail-F.keyTail}),$}var c=l(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var C=0,S=a.indexes;C<S.length;C++){var y=S[C];l(y.keyPath,0,y)}function v(x){var w,g=x.query.index;return g.isVirtual?G(G({},x),{query:{index:g.lowLevelIndex,range:(w=x.query.range,g=g.keyTail,{type:w.type===1?2:w.type,lower:la(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,g),lowerOpen:!0,upper:la(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,g),upperOpen:!0})}}):x}return G(G({},n),{schema:G(G({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(x){return(x=s[ye(x)])&&x[0]}}),count:function(x){return n.count(v(x))},query:function(x){return n.query(v(x))},openCursor:function(x){var w=x.query.index,g=w.keyTail,b=w.keyLength;return w.isVirtual?n.openCursor(v(x)).then(function(E){return E&&B(E)}):n.openCursor(x);function B(E){return Object.create(E,{continue:{value:function($){$!=null?E.continue(la($,x.reverse?e.MAX_KEY:e.MIN_KEY,g)):x.unique?E.continue(E.key.slice(0,b).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,g)):E.continue()}},continuePrimaryKey:{value:function($,O){E.continuePrimaryKey(la($,e.MAX_KEY,g),O)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var $=E.key;return b===1?$[0]:$.slice(0,b)}},value:{get:function(){return E.value}}})}}})}})}};function ua(e,t,n,a){return n=n||{},a=a||"",ge(e).forEach(function(s){var i,l,c;se(t,s)?(i=e[s],l=t[s],typeof i=="object"&&typeof l=="object"&&i&&l?(c=Un(i))!==Un(l)?n[a+s]=t[s]:c==="Object"?ua(i,l,n,a+s+"."):i!==l&&(n[a+s]=t[s]):i!==l&&(n[a+s]=t[s])):n[a+s]=void 0}),ge(t).forEach(function(s){se(e,s)||(n[a+s]=t[s])}),n}function ca(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Wa={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return G(G({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return G(G({},n),{mutate:function(s){var i=H.trans,l=i.table(t).hook,c=l.deleting,C=l.creating,S=l.updating;switch(s.type){case"add":if(C.fire===be)break;return i._promise("readwrite",function(){return y(s)},!0);case"put":if(C.fire===be&&S.fire===be)break;return i._promise("readwrite",function(){return y(s)},!0);case"delete":if(c.fire===be)break;return i._promise("readwrite",function(){return y(s)},!0);case"deleteRange":if(c.fire===be)break;return i._promise("readwrite",function(){return(function v(x,w,g){return n.query({trans:x,values:!1,query:{index:a,range:w},limit:g}).then(function(b){var B=b.result;return y({type:"delete",keys:B,trans:x}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):B.length<g?{failures:[],numFailures:0,lastResult:void 0}:v(x,G(G({},w),{lower:B[B.length-1],lowerOpen:!0}),g)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function y(v){var x,w,g,b=H.trans,B=v.keys||ca(a,v);if(B)return(v=v.type==="add"||v.type==="put"?G(G({},v),{keys:B}):G({},v)).type!=="delete"&&(v.values=ce([],v.values)),v.keys&&(v.keys=ce([],v.keys)),x=n,g=B,((w=v).type==="add"?Promise.resolve([]):x.getMany({trans:w.trans,keys:g,cache:"immutable"})).then(function(E){var $=B.map(function(O,F){var j,R,D,z=E[F],r={onerror:null,onsuccess:null};return v.type==="delete"?c.fire.call(r,O,z,b):v.type==="add"||z===void 0?(j=C.fire.call(r,O,v.values[F],b),O==null&&j!=null&&(v.keys[F]=O=j,a.outbound||nt(v.values[F],a.keyPath,O))):(j=ua(z,v.values[F]),(R=S.fire.call(r,j,O,z,b))&&(D=v.values[F],Object.keys(R).forEach(function(h){se(D,h)?D[h]=R[h]:nt(D,h,R[h])}))),r});return n.mutate(v).then(function(O){for(var F=O.failures,j=O.results,R=O.numFailures,O=O.lastResult,D=0;D<B.length;++D){var z=(j||B)[D],r=$[D];z==null?r.onerror&&r.onerror(F[D]):r.onsuccess&&r.onsuccess(v.type==="put"&&E[D]?v.values[D]:z)}return{failures:F,results:j,numFailures:R,lastResult:O}}).catch(function(O){return $.forEach(function(F){return F.onerror&&F.onerror(O)}),Promise.reject(O)})});throw new Error("Keys missing")}}})}})}};function Pa(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)oe(t.keys[s],e[i])===0&&(a.push(n?rn(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var dr={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return G(G({},n),{getMany:function(a){var s;return a.cache?(s=Pa(a.keys,a.trans._cache,a.cache==="clone"))?A.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?rn(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ga(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Ja(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var fr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Ze(e.MIN_KEY,e.MAX_KEY);return G(G({},e),{transaction:function(a,s,i){if(H.subscr&&s!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(a,s,i)},table:function(a){function s(B){var b,B=B.query;return[b=B.index,new Ze((b=(B=B.range).lower)!=null?b:e.MIN_KEY,(b=B.upper)!=null?b:e.MAX_KEY)]}var i=e.table(a),l=i.schema,c=l.primaryKey,C=l.indexes,S=c.extractKey,y=c.outbound,v=c.autoIncrement&&C.filter(function(g){return g.compound&&g.keyPath.includes(c.keyPath)}),x=G(G({},i),{mutate:function(g){function b(M){return M="idb://".concat(t,"/").concat(a,"/").concat(M),F[M]||(F[M]=new Ze)}var B,E,$,O=g.trans,F=g.mutatedParts||(g.mutatedParts={}),j=b(""),R=b(":dels"),D=g.type,r=g.type==="deleteRange"?[g.range]:g.type==="delete"?[g.keys]:g.values.length<50?[ca(c,g).filter(function(M){return M}),g.values]:[],z=r[0],r=r[1],h=g.trans._cache;return ae(z)?(j.addKeys(z),(D=D==="delete"||z.length===r.length?Pa(z,h):null)||R.addKeys(z),(D||r)&&(B=b,E=D,$=r,l.indexes.forEach(function(M){var L=B(M.name||"");function J(ee){return ee!=null?M.extractKey(ee):null}function Y(ee){M.multiEntry&&ae(ee)?ee.forEach(function(le){return L.addKey(le)}):L.addKey(ee)}(E||$).forEach(function(ee,me){var ue=E&&J(E[me]),me=$&&J($[me]);oe(ue,me)!==0&&(ue!=null&&Y(ue),me!=null)&&Y(me)})}))):z?(r={from:(h=z.lower)!=null?h:e.MIN_KEY,to:(D=z.upper)!=null?D:e.MAX_KEY},R.add(r),j.add(r)):(j.add(n),R.add(n),l.indexes.forEach(function(M){return b(M.name).add(n)})),i.mutate(g).then(function(M){return!z||g.type!=="add"&&g.type!=="put"||(j.addKeys(M.results),v&&v.forEach(function(L){for(var J=g.values.map(function(ue){return L.extractKey(ue)}),Y=L.keyPath.findIndex(function(ue){return ue===c.keyPath}),ee=0,le=M.results.length;ee<le;++ee)J[ee][Y]=M.results[ee];b(L.name).addKeys(J)})),O.mutatedParts=Kn(O.mutatedParts||{},F),M})}}),w={get:function(g){return[c,new Ze(g.key)]},getMany:function(g){return[c,new Ze().addKeys(g.keys)]},count:s,query:s,openCursor:s};return ge(w).forEach(function(g){x[g]=function(b){var B=H.subscr,E=!!B,$=Ga(H,i)&&Ja(g,b)?b.obsSet={}:B;if(E){var O,B=function(r){return r="idb://".concat(t,"/").concat(a,"/").concat(r),$[r]||($[r]=new Ze)},F=B(""),j=B(":dels"),E=w[g](b),R=E[0],E=E[1];if((g==="query"&&R.isPrimaryKey&&!b.values?j:B(R.name||"")).add(E),!R.isPrimaryKey){if(g!=="count")return O=g==="query"&&y&&b.values&&i.query(G(G({},b),{values:!1})),i[g].apply(this,arguments).then(function(r){if(g==="query"){if(y&&b.values)return O.then(function(J){return J=J.result,F.addKeys(J),r});var h=b.values?r.result.map(S):r.result;(b.values?F:j).addKeys(h)}else{var M,L;if(g==="openCursor")return L=b.values,(M=r)&&Object.create(M,{key:{get:function(){return j.addKey(M.primaryKey),M.key}},primaryKey:{get:function(){var J=M.primaryKey;return j.addKey(J),J}},value:{get:function(){return L&&F.addKey(M.primaryKey),M.value}}})}return r});j.add(n)}}return i[g].apply(this,arguments)}}),x}})}};function Ha(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=G({},t),ae(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&ae(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function cn(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<oe(n,a.lower):0<=oe(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?oe(n,a.upper)<0:oe(n,a.upper)<=0));var n,a}function Xa(e,t,n,a,s,i){var l,c,C,S,y,v;return!n||n.length===0||(l=t.query.index,c=l.multiEntry,C=t.query.range,S=a.schema.primaryKey.extractKey,y=l.extractKey,v=(l.lowLevelIndex||l).extractKey,(a=n.reduce(function(x,w){var g=x,b=[];if(w.type==="add"||w.type==="put")for(var B=new Ze,E=w.values.length-1;0<=E;--E){var $,O=w.values[E],F=S(O);!B.hasKey(F)&&($=y(O),c&&ae($)?$.some(function(r){return cn(r,C)}):cn($,C))&&(B.addKey(F),b.push(O))}switch(w.type){case"add":var j=new Ze().addKeys(t.values?x.map(function(h){return S(h)}):x),g=x.concat(t.values?b.filter(function(h){return h=S(h),!j.hasKey(h)&&(j.addKey(h),!0)}):b.map(function(h){return S(h)}).filter(function(h){return!j.hasKey(h)&&(j.addKey(h),!0)}));break;case"put":var R=new Ze().addKeys(w.values.map(function(h){return S(h)}));g=x.filter(function(h){return!R.hasKey(t.values?S(h):h)}).concat(t.values?b:b.map(function(h){return S(h)}));break;case"delete":var D=new Ze().addKeys(w.keys);g=x.filter(function(h){return!D.hasKey(t.values?S(h):h)});break;case"deleteRange":var z=w.range;g=x.filter(function(h){return!cn(S(h),z)})}return g},e))===e)?e:(a.sort(function(x,w){return oe(v(x),v(w))||oe(S(x),S(w))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function Ta(e,t){return oe(e.lower,t.lower)===0&&oe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function hr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=oe(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=oe(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function pr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&Et(i,s)},3e3))})}var yt={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return G(G({},e),{transaction:function(n,a,s){var i,l,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(l=function(C){return function(){if(i.abort(),a==="readwrite"){for(var S=new Set,y=0,v=n;y<v.length;y++){var x=v[y],w=en["idb://".concat(t,"/").concat(x)];if(w){var g=e.table(x),b=w.optimisticOps.filter(function(M){return M.trans===c});if(c._explicit&&C&&c.mutatedParts)for(var B=0,E=Object.values(w.queries.query);B<E.length;B++)for(var $=0,O=(R=E[B]).slice();$<O.length;$++)oa((D=O[$]).obsSet,c.mutatedParts)&&(Et(R,D),D.subscribers.forEach(function(M){return S.add(M)}));else if(0<b.length){w.optimisticOps=w.optimisticOps.filter(function(M){return M.trans!==c});for(var F=0,j=Object.values(w.queries.query);F<j.length;F++)for(var R,D,z,r=0,h=(R=j[F]).slice();r<h.length;r++)(D=h[r]).res!=null&&c.mutatedParts&&(C&&!D.dirty?(z=Object.isFrozen(D.res),z=Xa(D.res,D.req,b,g,D,z),D.dirty?(Et(R,D),D.subscribers.forEach(function(M){return S.add(M)})):z!==D.res&&(D.res=z,D.promise=A.resolve({result:z}))):(D.dirty&&Et(R,D),D.subscribers.forEach(function(M){return S.add(M)})))}}}S.forEach(function(M){return M()})}}})(!1),{signal:s}),c.addEventListener("error",l(!1),{signal:s}),c.addEventListener("complete",l(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return G(G({},a),{mutate:function(i){var l,c=H.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(l=en["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||ca(s,i).some(function(C){return C==null}))?(l.optimisticOps.push(i),i.mutatedParts&&jn(i.mutatedParts),c.then(function(C){0<C.numFailures&&(Et(l.optimisticOps,i),(C=Ha(0,i,C))&&l.optimisticOps.push(C),i.mutatedParts)&&jn(i.mutatedParts)}),c.catch(function(){Et(l.optimisticOps,i),i.mutatedParts&&jn(i.mutatedParts)})):c.then(function(C){var S=Ha(0,G(G({},i),{values:i.values.map(function(y,v){var x;return C.failures[v]?y:(nt(x=(x=s.keyPath)!=null&&x.includes(".")?rn(y):G({},y),s.keyPath,C.results[v]),x)})}),C);l.optimisticOps.push(S),queueMicrotask(function(){return i.mutatedParts&&jn(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var l,c,C,S,y,v,x;return Ga(H,a)&&Ja("query",i)?(l=((C=H.trans)==null?void 0:C.db._options.cache)==="immutable",c=(C=H).requery,C=C.signal,v=((w,g,b,B)=>{var E=en["idb://".concat(w,"/").concat(g)];if(!E)return[];if(!(w=E.queries[b]))return[null,!1,E,null];var $=w[(B.query?B.query.index.name:null)||""];if(!$)return[null,!1,E,null];switch(b){case"query":var O=$.find(function(F){return F.req.limit===B.limit&&F.req.values===B.values&&Ta(F.req.query.range,B.query.range)});return O?[O,!0,E,$]:[$.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=B.limit&&(!B.values||F.req.values)&&hr(F.req.query.range,B.query.range)}),!1,E,$];case"count":return O=$.find(function(F){return Ta(F.req.query.range,B.query.range)}),[O,!!O,E,$]}})(t,n,"query",i),x=v[0],S=v[2],y=v[3],x&&v[1]?x.obsSet=i.obsSet:(v=a.query(i).then(function(w){var g=w.result;if(x&&(x.res=g),l){for(var b=0,B=g.length;b<B;++b)Object.freeze(g[b]);Object.freeze(g)}else w.result=rn(g);return w}).catch(function(w){return y&&x&&Et(y,x),Promise.reject(w)}),x={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(x):(y=[x],(S=S||(en["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),pr(x,y,c,C),x.promise.then(function(w){return{result:Xa(w.result,i,S?.optimisticOps,a,x,l)}})):a.query(i)}})}})}};function dn(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}Ne.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Rt),n.stores({}),this._state.autoSchema=!1),n},Ne.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new A(function(n,a){if(t._state.openComplete)return a(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new Z.DatabaseClosed);t.open().catch(be)}t._state.dbReadyPromise.then(n,a)}).then(e)},Ne.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(l,c){return l.level-c.level}),this},Ne.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Ne.prototype.open=function(){var e=this;return ln(wt,function(){return tn(e)})},Ne.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=xn.indexOf(this);if(0<=t&&xn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new A(function(n){e.dbReadyResolve=n}),e.openCanceller=new A(function(n,a){e.cancelOpen=a}))},Ne.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ne.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new A(function(s,i){function l(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=$e(function(){var C,S,y;C=t._deps,S=t.name,sa(y=C.indexedDB)||S===ta||ra(y,C.IDBKeyRange).delete(S).catch(be),s()}),c.onerror=re(i),c.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(l):l()})},Ne.prototype.backendDB=function(){return this.idbdb},Ne.prototype.isOpen=function(){return this.idbdb!==null},Ne.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ne.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ne.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ne.prototype,"tables",{get:function(){var e=this;return ge(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ne.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Nt(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},Ne.prototype._transaction=function(e,t,n){var a,s,i=this,l=H.trans,c=(l&&l.db===this&&e.indexOf("!")===-1||(l=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function(S){if(S=S instanceof i.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),e=="r"||e===na)a=na;else{if(e!="rw"&&e!=ka)throw new Z.InvalidArgument("Invalid transaction mode: "+e);a=ka}if(l){if(l.mode===na&&a===ka){if(!c)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");l=null}l&&s.forEach(function(S){if(l&&l.storeNames.indexOf(S)===-1){if(!c)throw new Z.SubTransaction("Table "+S+" not included in parent transaction.");l=null}}),c&&l&&!l.active&&(l=null)}}catch(S){return l?l._promise(null,function(y,v){v(S)}):Ae(S)}var C=(function S(y,v,x,w,g){return A.resolve().then(function(){var $=H.transless||H,b=y._createTransaction(v,x,y._dbSchema,w),$=(b.explicit=!0,{trans:b,transless:$});if(w)b.idbtrans=w.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(O){return O.name===Wn.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return S(y,v,x,null,g)})):Ae(O)}var B,E=ga(g),$=(E&&Cn(),A.follow(function(){var O;(B=g.call(b,b))&&(E?(O=Jt.bind(null,null),B.then(O,O)):typeof B.next=="function"&&typeof B.throw=="function"&&(B=Ma(B)))},$));return(B&&typeof B.then=="function"?A.resolve(B).then(function(O){return b.active?O:Ae(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):$.then(function(){return B})).then(function(O){return w&&b._resolve(),b._completion.then(function(){return O})}).catch(function(O){return b._reject(O),Ae(O)})})}).bind(null,this,a,s,l,n);return l?l._promise(a,C,"lock"):H.trans?ln(H.transless,function(){return i._whenReady(C)}):this._whenReady(C)},Ne.prototype.table=function(e){if(se(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var Pe=Ne;function Ne(e,t){var n,a,s,i,l,c=this,C=(this._middlewares={},this.verno=0,Ne.dependencies),C=(this._options=t=G({addons:Ne.addons,autoOpen:!0,indexedDB:C.indexedDB,IDBKeyRange:C.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:be,dbReadyPromise:null,cancelOpen:be,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=(S.dbReadyPromise=new A(function(v){S.dbReadyResolve=v}),S.openCanceller=new A(function(v,x){S.cancelOpen=x}),this._state=S,this.name=e,this.on=I(this,"populate","blocked","versionchange","close",{ready:[Oe,be]}),this.once=function(v,x){var w=function(){for(var g=[],b=0;b<arguments.length;b++)g[b]=arguments[b];c.on(v).unsubscribe(w),x.apply(c,g)};return c.on(v,w)},this.on.ready.subscribe=Aa(this.on.ready.subscribe,function(v){return function(x,w){Ne.vip(function(){var g,b=c._state;b.openComplete?(b.dbOpenError||A.resolve().then(x),w&&v(x)):b.onReadyBeingFired?(b.onReadyBeingFired.push(x),w&&v(x)):(v(x),g=c,w||v(function B(){g.on.ready.unsubscribe(x),g.on.ready.unsubscribe(B)}))})}}),this.Collection=(n=this,K(je.prototype,function(B,b){this.db=n;var w=Ra,g=null;if(b)try{w=b()}catch($){g=$}var b=B._ctx,B=b.table,E=B.hook.reading.fire;this._ctx={table:B,index:b.index,isPrimKey:!b.index||B.schema.primKey.keyPath&&b.index===B.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:g,or:b.or,valueMapper:E!==Mn?E:null}})),this.Table=(a=this,K(m.prototype,function(v,x,w){this.db=a,this._tx=w,this.name=v,this.schema=x,this.hook=a._allTables[v]?a._allTables[v].hook:I(null,{creating:[ba,be],reading:[or,Mn],updating:[Na,be],deleting:[Gn,be]})})),this.Transaction=(s=this,K(Xe.prototype,function(v,x,w,g,b){var B=this;v!=="readonly"&&x.forEach(function(E){E=(E=w[E])==null?void 0:E.yProps,E&&(x=x.concat(E.map(function($){return $.updatesTable})))}),this.db=s,this.mode=v,this.storeNames=x,this.schema=w,this.chromeTransactionDurability=g,this.idbtrans=null,this.on=I(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new A(function(E,$){B._resolve=E,B._reject=$}),this._completion.then(function(){B.active=!1,B.on.complete.fire()},function(E){var $=B.active;return B.active=!1,B.on.error.fire(E),B.parent?B.parent._reject(E):$&&B.idbtrans&&B.idbtrans.abort(),Ae(E)})})),this.Version=(i=this,K(De.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(l=this,K(Je.prototype,function(v,x,w){if(this.db=l,this._ctx={table:v,index:x===":id"?null:x,or:w},this._cmp=this._ascending=oe,this._descending=function(g,b){return oe(b,g)},this._max=function(g,b){return 0<oe(g,b)?g:b},this._min=function(g,b){return oe(g,b)<0?g:b},this._IDBKeyRange=l._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Qe(t.IDBKeyRange),this._createTransaction=function(v,x,w,g){return new c.Transaction(v,x,w,c._options.chromeTransactionDurability,g)},this._fireOnBlocked=function(v){c.on("blocked").fire(v),xn.filter(function(x){return x.name===c.name&&x!==c&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(v)})},this.use(dr),this.use(yt),this.use(fr),this.use(Ua),this.use(Wa),new Proxy(this,{get:function(v,x,w){var g;return x==="_vip"||(x==="table"?function(b){return dn(c.table(b),y)}:(g=Reflect.get(v,x,w))instanceof m?dn(g,y):x==="tables"?g.map(function(b){return dn(b,y)}):x==="_createTransaction"?function(){return dn(g.apply(this,arguments),y)}:g)}}));this.vip=y,C.forEach(function(v){return v(c)})}var Ft,Dt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",vr=(Oa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Oa.prototype[Dt]=function(){return this},Oa);function Oa(e){this._subscribe=e}try{Ft={indexedDB:ne.indexedDB||ne.mozIndexedDB||ne.webkitIndexedDB||ne.msIndexedDB,IDBKeyRange:ne.IDBKeyRange||ne.webkitIDBKeyRange}}catch{Ft={indexedDB:null,IDBKeyRange:null}}function da(e){var t,n=!1,a=new vr(function(s){var i=ga(e),l,c=!1,C={},S={},y={get closed(){return c},unsubscribe:function(){c||(c=!0,l&&l.abort(),v&&Fe.storagemutated.unsubscribe(w))}},v=(s.start&&s.start(y),!1),x=function(){return un(g)},w=function(b){Kn(C,b),oa(S,C)&&x()},g=function(){var b,B,E;!c&&Ft.indexedDB&&(C={},b={},l&&l.abort(),l=new AbortController,E=($=>{var O=on();try{i&&Cn();var F=Gt(e,$);return F=i?F.finally(Jt):F}finally{O&&yn()}})(B={subscr:b,signal:l.signal,requery:x,querier:e,trans:null}),Promise.resolve(E).then(function($){n=!0,t=$,c||B.signal.aborted||(C={},(O=>{for(var F in O)if(se(O,F))return;return 1})(S=b)||v||(Fe(fe,w),v=!0),un(function(){return!c&&s.next&&s.next($)}))},function($){n=!1,["DatabaseClosedError","AbortError"].includes($?.name)||c||un(function(){c||s.error&&s.error($)})}))};return setTimeout(x,0),y});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var nn=Pe;function fa(e){var t=an;try{an=!0,Fe.storagemutated.fire(e),St(e,!0)}finally{an=t}}pt(nn,G(G({},Mt),{delete:function(e){return new nn(e,{addons:[]}).delete()},exists:function(e){return new nn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=nn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(sa(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==ta})}):ra(n,t).toCollection().primaryKeys()).then(e)}catch{return Ae(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){de(this,e)}},ignoreTransaction:function(e){return H.trans?ln(H.transless,e):e()},vip:ia,async:function(e){return function(){try{var t=Ma(e.apply(this,arguments));return t&&typeof t.then=="function"?t:A.resolve(t)}catch(n){return Ae(n)}}},spawn:function(e,t,n){try{var a=Ma(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:A.resolve(a)}catch(s){return Ae(s)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=A.resolve(typeof e=="function"?nn.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:A,debug:{get:function(){return Pt},set:function(e){gn(e)}},derive:xt,extend:de,props:pt,override:Aa,Events:I,on:Fe,liveQuery:da,extendObservabilitySet:Kn,getByKeyPath:It,setByKeyPath:nt,delByKeyPath:function(e,t){typeof t=="string"?nt(e,t,void 0):"length"in t&&[].map.call(t,function(n){nt(e,n,void 0)})},shallowClone:Fa,deepClone:rn,getObjectDiff:ua,cmp:oe,asap:ma,minKey:-1/0,addons:[],connections:xn,errnames:Wn,dependencies:Ft,cache:en,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),nn.maxKey=Qe(nn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Fe(fe,function(e){an||(e=new CustomEvent(Be,{detail:e}),an=!0,dispatchEvent(e),an=!1)}),addEventListener(Be,function(e){e=e.detail,an||fa(e)}));var fn,an=!1,rt=function(){};return typeof BroadcastChannel<"u"&&((rt=function(){(fn=new BroadcastChannel(Be)).onmessage=function(e){return e.data&&fa(e.data)}})(),typeof fn.unref=="function"&&fn.unref(),Fe(fe,function(e){an||fn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Pe.disableBfCache&&e.persisted){Pt&&console.debug("Dexie: handling persisted pagehide"),fn?.close();for(var t=0,n=xn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Pe.disableBfCache&&e.persisted&&(Pt&&console.debug("Dexie: handling persisted pageshow"),rt(),fa({all:new Ze(-1/0,[[]])}))})),A.rejectionMapper=function(e,t){return!e||e instanceof sn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Ia[e.name]?e:(t=new Ia[e.name](t||e.message,e),"stack"in e&&lt(t,"stack",{get:function(){return this.inner.stack}}),t)},gn(Pt),G(Pe,Object.freeze({__proto__:null,Dexie:Pe,Entity:Va,PropModification:u,RangeSet:Ze,add:function(e){return new u({add:e})},cmp:oe,default:Pe,liveQuery:da,mergeRanges:bt,rangesOverlap:Sa,remove:function(e){return new u({remove:e})},replacePrefix:function(e,t){return new u({replacePrefix:[e,t]})}}),{default:Pe}),Pe})})(Za)),Za.exports}var es=Zr();const mr=Xr(es),qr=Symbol.for("Dexie"),er=globalThis[qr]||(globalThis[qr]=mr);if(mr.semVer!==er.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${mr.semVer} and ${er.semVer}`);const{liveQuery:fs,mergeRanges:hs,rangesOverlap:ps,RangeSet:vs,cmp:ms,Entity:gs,PropModification:bs,replacePrefix:ys,add:Cs,remove:xs,DexieYProvider:ws}=er,it=new er("haushaltsbuch-db");it.version(1).stores({years:"year",fixedTemplateState:"id"});it.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const pa="singleton";function tr(){return new Date().toISOString()}async function zn(){return it.years.orderBy("year").toArray()}async function ts(T){return it.years.get(T)}async function Yn(T){await it.years.put(T)}async function gr(){const T=await it.fixedTemplateState.get(pa);if(!T){const p={id:pa,templates:[],version:tr(),updatedAt:new Date().toISOString()};return await it.fixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:T.templates,version:T.version}}async function br(T){const p=tr();return await it.fixedTemplateState.put({id:pa,templates:T,version:p,updatedAt:new Date().toISOString()}),p}async function yr(){const T=await it.annualVariableFixedTemplateState.get(pa);if(!T){const p={id:pa,templates:[],version:tr(),updatedAt:new Date().toISOString()};return await it.annualVariableFixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:T.templates,version:T.version}}async function Cr(T){const p=tr();return await it.annualVariableFixedTemplateState.put({id:pa,templates:T,version:p,updatedAt:new Date().toISOString()}),p}async function ns(){const T=await zn(),[p,Me]=await Promise.all([gr(),yr()]);return{exportedAt:new Date().toISOString(),years:T,fixedTemplates:p.templates,annualVariableFixedTemplates:Me.templates}}async function as(T){await it.transaction("rw",[it.years,it.fixedTemplateState,it.annualVariableFixedTemplateState],async()=>{await it.years.clear(),await it.years.bulkPut(T.years),await br(T.fixedTemplates),await Cr(T.annualVariableFixedTemplates??[])})}function Te(T){const p=T.replace(",",".").trim();if(!p)return 0;const Me=Number.parseFloat(p);return Number.isNaN(Me)?0:Math.round(Me*100)}const rs=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function k(T){return rs.format(T/100)}function ht(T){return(T/100).toFixed(2)}function _e(T){return new Date(2026,T-1,1).toLocaleDateString("de-DE",{month:"long"})}const Rr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Kr(T){return Rr.includes(T)}function ss(T){switch(T){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Lr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function is(T){const p={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Me="habu-theme",G="habu-backup-dirty",ce="habu-unexported-change-log",ne="habu-last-backup-filename",ge="habu-recurring-budget-defaults";let ae=null,de=null,tt=null,qe=null,se=!1,pt=!1;const ot=new WeakMap;function lt(){const o=T.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const u=getComputedStyle(document.documentElement),f=u.getPropertyValue("--text-main").trim(),d=u.getPropertyValue("--text-muted").trim(),m=u.getPropertyValue("--table-stripe").trim(),_=u.getPropertyValue("--table-border").trim(),I=u.getPropertyValue("--budget-under").trim(),K=u.getPropertyValue("--danger-2").trim(),N=96,X=250,U=Q=>1-Math.pow(1-Math.max(0,Math.min(1,Q)),3);o.forEach(Q=>{Q.dataset.hoverBound!=="1"&&(Q.dataset.hoverBound="1",Q.addEventListener("mouseenter",()=>{Q.dataset.hovering="1",lt()}),Q.addEventListener("mouseleave",()=>{delete Q.dataset.hovering,delete Q.dataset.hoverX,lt()}),Q.addEventListener("mousemove",Ee=>{const ye=Q.getBoundingClientRect(),Ie=Math.round(Ee.clientX-ye.left);Q.dataset.hoverX=String(Ie),lt()}));const pe=Number.parseInt(Q.dataset.budgetCents??"0",10),Ce=Number.parseInt(Q.dataset.actualCents??"0",10),Ke=Q.dataset.label??"Kategorie",je=Q.dataset.hovering==="1",W=`${Ke}|${pe}|${Ce}`,We=Q.dataset.lastRenderSignature!==W;Q.dataset.lastRenderSignature=W;const Le=Math.max(120,Math.floor(Q.clientWidth||120)),Ge=window.devicePixelRatio||1,xe=Math.floor(Le*Ge),Re=Math.floor(N*Ge);(Q.width!==xe||Q.height!==Re)&&(Q.width=xe,Q.height=Re);const V=Q.getContext("2d");if(!V)return;const Se=Math.max(1,pe,Ce),vt=Math.min(1,Math.max(0,pe/Se)),Je=Math.min(1,Math.max(0,Ce/Se)),ve=pe-Ce,re=pe>0?Ce/pe*100:Ce>0?100:0,He=8,fe=He,Be=34,Fe=Le-He*2,Xe=22,he=Number.parseInt(Q.dataset.hoverX??"-1",10),Ue=(Ee,ye,Ie,Ve,Ye)=>{V.beginPath(),V.moveTo(Ee+Ye,ye),V.lineTo(Ee+Ie-Ye,ye),V.quadraticCurveTo(Ee+Ie,ye,Ee+Ie,ye+Ye),V.lineTo(Ee+Ie,ye+Ve-Ye),V.quadraticCurveTo(Ee+Ie,ye+Ve,Ee+Ie-Ye,ye+Ve),V.lineTo(Ee+Ye,ye+Ve),V.quadraticCurveTo(Ee,ye+Ve,Ee,ye+Ve-Ye),V.lineTo(Ee,ye+Ye),V.quadraticCurveTo(Ee,ye,Ee+Ye,ye),V.closePath()},jt=Ee=>{V.setTransform(1,0,0,1,0,0),V.clearRect(0,0,Q.width,Q.height),V.scale(Ge,Ge),Ue(fe,Be,Fe,Xe,8),V.fillStyle=m,V.fill(),V.strokeStyle=_,V.lineWidth=1,V.stroke();const ye=[.6,.25,.15],Ie=[.1,.16,.24];let Ve=0;ye.forEach((Vt,P)=>{const q=Fe*Vt;V.save(),V.globalAlpha=Ie[P]??.1,V.fillStyle=d,V.fillRect(fe+Ve,Be,q,Xe),V.restore(),Ve+=q});const Ye=pe>0&&Ce>pe?K:I,gt=Fe*Je*Ee;Ue(fe,Be+3,gt,Xe-6,6),V.fillStyle=Ye,V.fill(),je&&(V.save(),V.strokeStyle=Ye,V.lineWidth=1.5,V.globalAlpha=.8,Ue(fe-1,Be+2,Math.max(2,gt+2),Xe-4,7),V.stroke(),V.restore());const At=fe+Fe*vt;V.strokeStyle=f,V.lineWidth=je?3:2,V.beginPath(),V.moveTo(At,Be-3),V.lineTo(At,Be+Xe+3),V.stroke(),je&&he>=fe&&he<=fe+Fe&&(V.save(),V.strokeStyle=f,V.globalAlpha=.35,V.lineWidth=1,V.beginPath(),V.moveTo(he,Be-8),V.lineTo(he,Be+Xe+8),V.stroke(),V.restore()),V.fillStyle=f,V.font="600 12px system-ui, -apple-system, sans-serif",V.textAlign="left",V.textBaseline="top",V.fillText(Ke,fe,10);const Rt=re*Ee;if(V.fillStyle=re>100?K:re<100?I:d,V.textAlign="right",V.fillText(`${Rt.toFixed(0)}%`,fe+Fe,10),V.fillStyle=d,V.font="500 11px system-ui, -apple-system, sans-serif",V.textAlign="left",V.textBaseline="top",V.fillText(`Ist ${k(Ce)} · Ziel ${k(pe)} · Δ ${ve>=0?"+":""}${k(ve)}`,fe,64),je){const Vt=`Nutzung ${re.toFixed(1)}%`;V.font="600 11px system-ui, -apple-system, sans-serif";const P=8,q=5,ie=22,Yt=V.measureText(Vt).width+P*2,wn=Number.isFinite(he)?he-Yt/2:fe+Fe-Yt,Zt=Math.min(fe+Fe-Yt,Math.max(fe,wn)),kn=Be-ie-8;V.save(),V.fillStyle=f,V.globalAlpha=.92,Ue(Zt,kn,Yt,ie,6),V.fill(),V.restore(),V.fillStyle=m,V.textAlign="left",V.textBaseline="top",V.fillText(Vt,Zt+P,kn+q)}},kt=ot.get(Q);if(kt&&window.cancelAnimationFrame(kt),!We){jt(1);return}const Qe=performance.now(),mt=Ee=>{const ye=Ee-Qe,Ie=Math.min(1,ye/X);if(jt(U(Ie)),Ie<1){const Ve=window.requestAnimationFrame(mt);ot.set(Q,Ve);return}ot.delete(Q)},$t=window.requestAnimationFrame(mt);ot.set(Q,$t)})}function xt(o){if(o==="dashboard"){const u=p.years.slice().sort((d,m)=>m.year-d.year);u.some(d=>d.year===p.dashboardYear)||(p.dashboardYear=p.selectedYear??u[0]?.year??null)}p.topModal=o,te()}function va(){p.topModal&&(p.topModal=null,te())}function nr(){p.showUnexportedChangeLogModal=!0,te()}function hn(){p.showUnexportedChangeLogModal&&(p.showUnexportedChangeLogModal=!1,te())}function Aa(){se||(se=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(p.showUnexportedChangeLogModal){o.preventDefault(),hn();return}p.topModal&&(o.preventDefault(),va())}}))}function Bn(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const u=o/6;return window.scrollY>u}function ma(){const o=T.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",Bn())}function It(){if(pt)return;pt=!0;const o=()=>{ma(),lt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function nt(){if(ae&&document.body.contains(ae))return ae;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ae=o,o;const u=document.createElement("div");return u.id="toast-root",u.className="toast-root",u.setAttribute("aria-live","polite"),u.setAttribute("aria-atomic","true"),document.body.appendChild(u),ae=u,u}function Fa(){if(de&&document.body.contains(de))return de;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return de=o,o;const u=document.createElement("div");return u.id="amount-modal-root",document.body.appendChild(u),de=u,u}function ar(){if(qe&&document.body.contains(qe))return qe;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return qe=o,o;const u=document.createElement("div");return u.id="weekly-shopping-modal-root",document.body.appendChild(u),qe=u,u}function Nt(){if(!de){tt=null;return}de.innerHTML="",tt=null}function pn(){qe&&(qe.innerHTML="")}function En(o,u,f){const d=new Date,m=d.getFullYear(),_=d.getMonth()+1,I=d.getDate(),K=new Date(o,u,0).getDate();if(o<m||o===m&&u<_)return{occurrences:0,remainingDays:0};const N=o===m&&u===_?Math.min(I,K):1,X=Math.max(0,K-N+1);let U=0;for(let Q=N;Q<=K;Q+=1)new Date(o,u-1,Q).getDay()===f&&(U+=1);return{occurrences:U,remainingDays:X}}async function rn(o,u){const f=Oe();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,u),await ke(`Wocheneinkauf geplant: ${Lr.find(d=>d.value===o)?.label??"Wochentag"} mit ${k(f.weeklyShoppingEstimateCents)} €`),te())}function rr(){const o=Oe(),u=Pn();if(!o||!u)return;const f=ar();pn();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,m=o.weeklyShoppingEstimateCents??0,_=u.year,I=o.month,K=Pt(_,I),N=K?gn(K):{foodCents:0},X=K?K.foodBudgetCents??0:0,U=N.foodCents,Q=X-U;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Lr.map(re=>`<option value="${re.value}" ${re.value===d?"selected":""}>${re.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${ht(m)}" />
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
    `;const pe=f.querySelector(".weekly-shopping-modal-backdrop"),Ce=f.querySelector("#weekly-shopping-weekday"),Ke=f.querySelector("#weekly-shopping-estimate"),je=f.querySelector("#weekly-shopping-occurrences"),W=f.querySelector("#weekly-shopping-total"),We=f.querySelector("#weekly-shopping-rest-before"),Le=f.querySelector("#weekly-shopping-rest-after"),Ge=f.querySelector("#weekly-shopping-days-left"),xe=f.querySelector("#weekly-shopping-per-day"),Re=f.querySelector("#weekly-shopping-cancel"),V=f.querySelector("#weekly-shopping-save");function Se(){const re=Number.parseInt(Ce?.value??"1",10);return Number.isInteger(re)&&re>=0&&re<=6?re:1}function vt(){return Math.max(0,Te(Ke?.value??"0"))}function Je(){const re=Se(),He=vt(),{occurrences:fe,remainingDays:Be}=En(_,I,re),Fe=fe*He,Xe=Q-Fe,he=Be>0?Math.trunc(Xe/Be):0;je&&(je.textContent=`${fe}`),W&&(W.textContent=`${k(Fe)} €`),We&&(We.textContent=`${k(Q)} €`),Le&&(Le.textContent=`${k(Xe)} €`,Le.className=Xe<0?"danger":Xe>0?"budget-under":""),Ge&&(Ge.textContent=`${Be}`),xe&&(xe.textContent=`${k(he)} €`,xe.className=he<0?"danger":he>0?"budget-under":"")}async function ve(){await rn(Se(),vt()),pn()}Re?.addEventListener("click",()=>{pn()}),V?.addEventListener("click",async()=>{await ve()}),Ce?.addEventListener("change",()=>{Je()}),Ke?.addEventListener("input",()=>{Je()}),Ke?.addEventListener("keydown",async re=>{if(re.key==="Escape"){re.preventDefault(),pn();return}re.key==="Enter"&&(re.preventDefault(),await ve())}),pe?.addEventListener("click",re=>{re.target===pe&&pn()}),window.setTimeout(()=>{Ke?.focus(),Ke?.select(),Je()},0)}function Un(o,u){let f=o;const d=u.min;if(d){const _=Number.parseFloat(d);if(!Number.isNaN(_)){const I=Math.round(_*100);f=Math.max(f,I)}}const m=u.max;if(m){const _=Number.parseFloat(m);if(!Number.isNaN(_)){const I=Math.round(_*100);f=Math.min(f,I)}}return f}function ut(o){if(o.disabled)return;const u=Fa();Nt(),tt=o;const f=Te(o.value||"0"),d="Betrag anpassen";u.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${k(f)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${k(f)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${k(f)} €</strong></div>
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
    `;const m=u.querySelector(".amount-modal-backdrop"),_=u.querySelector("#amount-modal-delta"),I=u.querySelector("#amount-modal-next-delta"),K=u.querySelector("#amount-modal-next-overwrite"),N=u.querySelector("#amount-modal-cancel"),X=u.querySelector("#amount-modal-overwrite"),U=u.querySelector("#amount-modal-apply");function Q(){const W=Te(_?.value??"0");return Un(f+W,o)}function pe(){const W=Te(_?.value??"0");return Un(W,o)}function Ce(){I&&(I.textContent=`${k(Q())} €`),K&&(K.textContent=`${k(pe())} €`)}function Ke(){const W=tt;if(!W){Nt();return}const We=Q();Nt(),W.value=ht(We),W.dispatchEvent(new Event("change",{bubbles:!0}))}function je(){const W=tt;if(!W){Nt();return}const We=pe();Nt(),W.value=ht(We),W.dispatchEvent(new Event("change",{bubbles:!0}))}N?.addEventListener("click",()=>{Nt()}),X?.addEventListener("click",()=>{je()}),U?.addEventListener("click",()=>{Ke()}),_?.addEventListener("input",()=>{Ce()}),_?.addEventListener("keydown",W=>{if(W.key==="Escape"){W.preventDefault(),Nt();return}W.key==="Enter"&&(W.preventDefault(),Ke())}),m?.addEventListener("click",W=>{W.target===m&&Nt()}),window.setTimeout(()=>{_?.focus(),_?.select(),Ce()},0)}function we(o,u="success"){const f=nt(),d=document.createElement("div");d.className=`toast toast-${u}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const m=u==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},m)}function Et(){return new Date().getMonth()+1}function vn(){return new Date().getFullYear()}function _t(o){const u=vn(),f=o.find(d=>d.year===u);return f?f.year:o[0]?.year??null}function ga(){return new Date().toISOString().slice(0,10)}function Mt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function sr(){const o=localStorage.getItem(Me);return o&&Kr(o)?o:"light"}function sn(o){p.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Me,o)}function Da(){return localStorage.getItem(G)==="1"}function _n(o){localStorage.setItem(G,o?"1":"0")}function mn(){const o=localStorage.getItem(ce);if(!o)return[];try{const u=JSON.parse(o);return Array.isArray(u)?u.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function Wn(o){localStorage.setItem(ce,JSON.stringify(o.slice(-200)))}function ir(){const o=localStorage.getItem(ne);if(!o)return null;const u=o.trim();return u||null}function Z(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},u=localStorage.getItem(ge);if(!u)return o;try{const f=JSON.parse(u),d=m=>typeof m=="number"&&Number.isFinite(m)?m:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function Ia(o){localStorage.setItem(ge,JSON.stringify(o))}function be(o){o.months.forEach(u=>{const{recurringBudgetDefaults:f}=p;typeof f.foodBudgetCents=="number"&&(u.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(u.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(u.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(u.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(u.miscBudgetCents=f.miscBudgetCents)})}function Mn(o){const u=o.trim();u&&localStorage.setItem(ne,u)}async function or(){nt(),sn(sr()),p.hasUnexportedChanges=Da(),p.unexportedChangeLog=mn(),p.lastBackupFileName=ir(),p.recurringBudgetDefaults=Z(),Aa(),It();const[o,u,f]=await Promise.all([zn(),gr(),yr()]);p.years=o,p.annualVariableFixedTemplates=f.templates,p.annualVariableFixedTemplateVersion=f.version,qt(p.years),xa(p.years),p.fixedTemplates=u.templates,p.fixedTemplateVersion=u.version,await Na(p.years),o.length>0&&(p.selectedYear=_t(o),p.selectedMonth=Et()),te()}function qt(o){const u=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const m=Number(d.weeklyShoppingWeekday);Number.isInteger(m)&&m>=0&&m<=6?d.weeklyShoppingWeekday=m:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(m=>{const _=u(m.incomeSource);if(!_){const{incomeSource:I,...K}=m;return K}return{...m,incomeSource:_}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((m,_)=>m+_.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((m,_)=>m+_.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function ba(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Gn(o){return o==="fresh"||o==="salary"||!o}async function Na(o){for(const u of o)await Yn(u)}function Pn(){if(p.selectedYear)return p.years.find(o=>o.year===p.selectedYear)}function Oe(){const o=Pn();if(o)return o.months.find(u=>u.month===p.selectedMonth)}function Pt(o,u){const f=p.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===u)}function gn(o){const u=o.days.reduce((K,N)=>K+N.foodCents,0),f=o.days.reduce((K,N)=>K+N.goingOutCents,0),d=o.fixedCosts.reduce((K,N)=>K+N.actualCents,0),m=o.variableCosts.reduce((K,N)=>K+N.amountCents,0)+o.variablePositions.reduce((K,N)=>K+N.actualCents,0),_=o.miscCosts.reduce((K,N)=>K+N.amountCents,0),I=u+f+d+m+_;return{foodCents:u,goingOutCents:f,fixedCents:d,variableCents:m,miscCents:_,totalCents:I}}function Ut(o){const u=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((I,K)=>I+K.plannedCents,0),m=o.variablePositions.reduce((I,K)=>I+K.budgetCents,0),_=o.miscBudgetCents??0;return u+f+d+(o.variableBudgetCents??m)+_}function Tn(o){return o.months.reduce((u,f)=>{const d=gn(f);return{foodCents:u.foodCents+d.foodCents,goingOutCents:u.goingOutCents+d.goingOutCents,fixedCents:u.fixedCents+d.fixedCents,variableCents:u.variableCents+d.variableCents,miscCents:u.miscCents+d.miscCents,totalCents:u.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function On(o){return o.months.slice().sort((u,f)=>u.month-f.month).map(u=>({month:u.month,summary:gn(u)}))}function at(o){const u=o.months.reduce((I,K)=>I+(K.foodBudgetCents??0),0),f=o.months.reduce((I,K)=>I+(K.goingOutBudgetCents??0),0),d=o.months.reduce((I,K)=>I+(K.fixedBudgetCents??K.fixedCosts.reduce((N,X)=>N+X.plannedCents,0)),0),m=o.months.reduce((I,K)=>I+(K.variableBudgetCents??K.variablePositions.reduce((N,X)=>N+X.budgetCents,0)),0),_=o.months.reduce((I,K)=>I+(K.miscBudgetCents??0),0);return{foodCents:u,goingOutCents:f,fixedCents:d,variableCents:m,miscCents:_,totalCents:u+f+d+m+_}}function Kt(o){return o.months.reduce((u,f)=>u+f.incomes.reduce((d,m)=>d+(Gn(m.incomeSource)?m.amountCents:0),0),0)}function An(o,u){const f=o.months.slice().sort((d,m)=>d.month-m.month)[0];return f?u.get(A(o.year,f.month))?.carriedFromPreviousCents??0:0}function Fn(){const o=p.years.slice().sort((d,m)=>d.year-m.year).flatMap(d=>d.months.slice().sort((m,_)=>m.month-_.month).map(m=>({year:d.year,month:m}))),u=new Map;let f=0;return o.forEach(({year:d,month:m},_)=>{const I=m.carryoverOverrideCents,K=typeof I=="number",N=K?I:f,X=_>0||K,U=m.incomes.reduce((Ke,je)=>Ke+(Gn(je.incomeSource)?je.amountCents:0),0),Q=Ut(m),pe=U+N,Ce=pe-Q;u.set(A(d,m.month),{hasPreviousMonth:X,carriedFromPreviousCents:N,recordedIncomeCents:U,effectiveIncomeCents:pe,plannedBudgetCents:Q,netCents:Ce}),f=Ce}),u}function ct(o,u){return u<=0?"":o>u?"budget-over":o<u?"budget-under":""}function Jn(o){return`${o>0?"+":""}${k(o)}`}function Ct(o,u){const f=o-u,d=ct(u,o);return`${k(o)} <span class="eval-diff ${d}">(Δ ${Jn(f)})</span>`}function Wt(o,u){const f=o!==null,d=f?o-u:null,m=f?ct(u,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${k(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${k(u)} €</strong>
      </div>
      <div class="column-overview-row ${m}">
        <span>Diff</span>
        <strong>${d===null?"-":`${k(d)} €`}</strong>
      </div>
    </div>`}async function ya(o){if(await ts(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=Fr(o,p.fixedTemplates,p.fixedTemplateVersion);be(f),In(f),await Yn(f),p.years=await zn(),wt(`Jahr ${o} wurde angelegt`),p.selectedYear=o,p.selectedMonth=Et(),we(`Jahr ${o} wurde angelegt.`),te()}function wt(o="Änderung an den Daten"){p.hasUnexportedChanges=!0,_n(!0);const u=p.selectedYear?`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f={id:Bt("change"),timestampIso:new Date().toISOString(),message:`${o} (${u})`};p.unexportedChangeLog=[...p.unexportedChangeLog,f].slice(-200),Wn(p.unexportedChangeLog)}function H(o){const u=o.trim();u&&(p.lastBackupFileName=u,Mn(u))}function bn(o){p.hasUnexportedChanges=!1,_n(!1),p.unexportedChangeLog=[],Wn([]),p.showUnexportedChangeLogModal=!1,H(o)}async function ke(o){const u=Pn();u&&(await Yn(u),p.years=await zn(),wt(o))}async function dt(o){for(const u of p.years)await Yn(u);p.years=await zn(),wt(o)}function A(o,u){return o*100+u}function Dn(o){const u=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!u)return null;const f=u[1],d=u[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Ca(o,u){const f=Dn(o.dueDateIso);if(!f||u.year<f.year)return;const d=u.months.find(_=>_.month===f.month);!d||d.variablePositions.some(_=>_.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Bt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],Ot(d))}function In(o){p.annualVariableFixedTemplates.forEach(u=>{Ca(u,o)})}function xa(o){const u=new Set(p.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const m=d.variablePositions.some(I=>typeof I.autoAnnualTemplateId=="string"),_=d.fixedCosts.some(I=>typeof I.autoAnnualTemplateId=="string");m&&(d.variablePositions=d.variablePositions.filter(I=>I.autoAnnualTemplateId?u.has(I.autoAnnualTemplateId):!0),Ot(d)),_&&(d.fixedCosts=d.fixedCosts.filter(I=>!I.autoAnnualTemplateId),Tt(d))}),In(f)})}function Tt(o){o.fixedBudgetCents=o.fixedCosts.reduce((u,f)=>u+f.plannedCents,0)}function Ot(o){o.variableBudgetCents=o.variablePositions.reduce((u,f)=>u+f.budgetCents,0)}function lr(){if(p.selectedYear)return`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function on(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",lr());if(!o)return null;const u=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!u)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=u[1],d=u[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function yn(o,u){const f=A(u.year,u.month);p.years.forEach(d=>{d.months.forEach(m=>{if(A(d.year,m.month)<f)return;m.fixedCosts.some(I=>I.templateId===o.id)||(m.fixedCosts.push({id:Bt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Tt(m))})})}function wa(o,u,f){const d=A(f.year,f.month);p.years.forEach(m=>{m.months.forEach(_=>{A(m.year,_.month)<d||(_.fixedCosts=_.fixedCosts.map(I=>I.templateId!==u.id?I:{...I,name:u.name,plannedCents:u.plannedCents,actualCents:I.actualCents===o.plannedCents?u.plannedCents:I.actualCents}),Tt(_))})})}function Hn(o,u){const f=A(u.year,u.month);p.years.forEach(d=>{d.months.forEach(m=>{A(d.year,m.month)<f||(m.fixedCosts=m.fixedCosts.filter(_=>_.templateId!==o),Tt(m))})})}async function $e(o,u){const f=o.trim();if(!f)return;const d=on();if(!d)return;const m=!!p.editingFixedTemplateId;if(p.editingFixedTemplateId){const _=p.fixedTemplates.find(K=>K.id===p.editingFixedTemplateId);if(!_)return;const I={..._,name:f,plannedCents:u};p.fixedTemplates=p.fixedTemplates.map(K=>K.id===p.editingFixedTemplateId?I:K),wa(_,I,d)}else{const _={id:Bt("tpl"),name:f,plannedCents:u};p.fixedTemplates=[...p.fixedTemplates,_],yn(_,d)}p.fixedTemplateVersion=await br(p.fixedTemplates),p.editingFixedTemplateId=null,await dt(m?`Fixkosten-Vorlage aktualisiert: ${f} (${k(u)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${k(u)} €)`),we(m?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),te()}function ze(o){p.editingFixedTemplateId=o,te()}function ur(){p.editingFixedTemplateId=null,te()}async function Xn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=on();if(!f)return;const d=p.fixedTemplates.find(m=>m.id===o);p.fixedTemplates=p.fixedTemplates.filter(m=>m.id!==o),Hn(o,f),p.editingFixedTemplateId===o&&(p.editingFixedTemplateId=null),p.fixedTemplateVersion=await br(p.fixedTemplates),await dt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),we("Fixkosten-Vorlage wurde gelöscht."),te()}async function Qn(o,u,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const m=Dn(u);if(!m){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const _={id:Bt("annualtpl"),name:d,plannedCents:f,dueDateIso:u};p.annualVariableFixedTemplates=[...p.annualVariableFixedTemplates,_],p.years.forEach(I=>{Ca(_,I)}),p.annualVariableFixedTemplateVersion=await Cr(p.annualVariableFixedTemplates),await dt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${k(f)} €, jährlich in ${_e(m.month)})`),we("Variable Fixkosten-Vorlage wurde hinzugefügt."),te()}async function Zn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=p.annualVariableFixedTemplates.find(d=>d.id===o);f&&(p.annualVariableFixedTemplates=p.annualVariableFixedTemplates.filter(d=>d.id!==o),p.years.forEach(d=>{d.months.forEach(m=>{m.variablePositions=m.variablePositions.filter(_=>_.autoAnnualTemplateId!==o),Ot(m),m.fixedCosts=m.fixedCosts.filter(_=>_.autoAnnualTemplateId!==o),Tt(m)})}),p.annualVariableFixedTemplateVersion=await Cr(p.annualVariableFixedTemplates),await dt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),we("Variable Fixkosten-Vorlage wurde gelöscht."),te())}async function qa(o,u,f){const d=Oe();d&&(d.days=d.days.map(m=>m.isoDate===o?{...m,[u]:f}:m),await ke(`${u==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${k(f)} €`),te())}async function Gt(o,u){const f=Oe();if(!f)return;const d=f.fixedCosts.find(m=>m.id===o);f.fixedCosts=f.fixedCosts.map(m=>m.id===o?{...m,actualCents:u}:m),await ke(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${k(u)} €`),te()}async function Cn(o,u){const f=Oe();if(!f)return;const d=f.fixedCosts.find(m=>m.id===o);d&&(f.fixedCosts=f.fixedCosts.map(m=>m.id===o?{...m,plannedCents:u}:m),Tt(f),await ke(`Fixkosten-Budget angepasst: ${d.name} auf ${k(u)} €`),te())}async function Jt(o,u){const f=Oe();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const m={id:Bt("fixed"),templateId:Bt("fixed-local"),name:d,plannedCents:u,actualCents:0};f.fixedCosts=[m,...f.fixedCosts],Tt(f),await ke(`Fixkosten-Position hinzugefügt: ${d} (${k(u)} €)`),we("Fixkosten-Position wurde hinzugefügt."),te()}async function ea(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Oe();if(!f)return;const d=f.fixedCosts.find(m=>m.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(m=>m.id!==o),Tt(f),await ke(`Fixkosten-Position gelöscht: ${d.name}`),we("Fixkosten-Position wurde gelöscht."),te())}async function cr(o){await un("fixedBudgetCents",o,"Fixkosten")}async function Ht(o){await un("foodBudgetCents",o,"Essen")}async function Ka(o){await un("goingOutBudgetCents",o,"Ausgehen")}async function ln(o){await un("miscBudgetCents",o,"Sonstiges")}async function La(o){await un("variableBudgetCents",o,"Variable Kosten")}async function un(o,u,f){const d=Oe(),m=p.selectedYear;if(!d||!m||d[o]===u)return;if(d[o]=u,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const I=A(m,p.selectedMonth);p.years.forEach(K=>{K.months.forEach(N=>{A(K.year,N.month)<=I||(N[o]=u)})}),p.recurringBudgetDefaults[o]=u,Ia(p.recurringBudgetDefaults),await dt(`Budget "${f}" auf ${k(u)} € gesetzt (inkl. zukünftiger Monate)`),we(`Budget "${f}" wurde für zukünftige Monate übernommen.`),te();return}await ke(`Budget "${f}" auf ${k(u)} € gesetzt`),te()}async function Ae(o){const u=Oe();u&&(o===null?u.carryoverOverrideCents=null:u.carryoverOverrideCents=o,await ke(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${k(o)} € gesetzt`),te())}async function Xt(o,u,f){const d=Oe(),m=p.selectedYear;if(!d||!m)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Bt("varpos"),name:_,budgetCents:u,actualCents:0},...d.variablePositions],Ot(d),f){const I=A(m,p.selectedMonth);p.years.forEach(K=>{K.months.forEach(N=>{A(K.year,N.month)<=I||(N.variablePositions=[{id:Bt("varpos"),name:_,budgetCents:u,actualCents:0},...N.variablePositions],Ot(N))})}),await dt(`Variable Position hinzugefügt: ${_} (${k(u)} €) für zukünftige Monate`),we("Variable Position wurde für zukünftige Monate hinzugefügt."),te();return}await ke(`Variable Position hinzugefügt: ${_} (${k(u)} €)`),we("Variable Position wurde hinzugefügt."),te()}async function Lt(o,u){const f=Oe();if(!f)return;const d=f.variablePositions.find(m=>m.id===o);f.variablePositions=f.variablePositions.map(m=>m.id===o?{...m,actualCents:u}:m),await ke(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${k(u)} €`),te()}async function ja(o,u){const f=Oe();if(!f)return;const d=f.variablePositions.find(m=>m.id===o);f.variablePositions=f.variablePositions.map(m=>m.id===o?{...m,budgetCents:u}:m),Ot(f),await ke(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${k(u)} €`),te()}async function xn(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Oe(),d=p.selectedYear;if(!f||!d)return;const m=f.variablePositions.find(N=>N.id===o);if(!m)return;const _=A(d,p.selectedMonth),K=p.years.some(N=>N.months.some(X=>A(N.year,X.month)>_&&X.variablePositions.some(U=>U.name===m.name&&U.budgetCents===m.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(N=>N.id!==o),Ot(f),K){p.years.forEach(N=>{N.months.forEach(X=>{A(N.year,X.month)<=_||(X.variablePositions=X.variablePositions.filter(U=>!(U.name===m.name&&U.budgetCents===m.budgetCents)),Ot(X))})}),await dt(`Variable Position gelöscht: ${m.name} (inkl. zukünftiger Monate)`),we("Variable Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await ke(`Variable Position gelöscht: ${m.name}`),we("Variable Position wurde gelöscht."),te()}async function ta(o){const u=Oe(),f=p.selectedYear;if(!u||!f)return;const d=u.variablePositions.find(U=>U.id===o);if(!d)return;const m={year:p.selectedMonth===12?f+1:f,month:p.selectedMonth===12?1:p.selectedMonth+1};let _=p.years.find(U=>U.year===m.year);if(!_){const U=Fr(m.year,p.fixedTemplates,p.fixedTemplateVersion);be(U),In(U),await Yn(U),p.years=[...p.years,U].sort((Q,pe)=>Q.year-pe.year),_=U}const I=_.months.find(U=>U.month===m.month);if(!I)return;const K=I.variablePositions.some(U=>U.id===d.id||U.name===d.name&&U.budgetCents===d.budgetCents);if(u.variablePositions=u.variablePositions.filter(U=>U.id!==o),Ot(u),!K){const Q=I.variablePositions.some(pe=>pe.id===d.id)?{...d,id:Bt("varpos")}:d;I.variablePositions=[Q,...I.variablePositions],Ot(I)}const N=`${_e(m.month)} ${m.year}`,X=`Variable Position verschoben: ${d.name} → ${N}`;if(m.year===f)await ke(X);else{const U=Pn();if(!U)return;await Yn(U),await Yn(_),p.years=await zn(),qt(p.years),wt(X)}we(K?`Position entfernt (im Folgemonat schon vorhanden: ${N}).`:`Position in den Folgemonat verschoben: ${N}.`),te()}async function na(o,u,f){const d=Oe(),m=p.selectedYear;if(!d||!m)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const I=Dr(_,u);if(d.miscCosts=[I,...d.miscCosts],f){const K=A(m,p.selectedMonth);p.years.forEach(N=>{N.months.forEach(X=>{A(N.year,X.month)<=K||(X.miscCosts=[Dr(_,u),...X.miscCosts])})}),await dt(`Sonstige Position hinzugefügt: ${_} (${k(u)} €) für zukünftige Monate`),we("Sonstige Position wurde für zukünftige Monate hinzugefügt."),te();return}await ke(`Sonstige Position hinzugefügt: ${_} (${k(u)} €)`),we("Sonstige Position wurde hinzugefügt."),te()}async function ka(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Oe(),d=p.selectedYear;if(!f||!d)return;const m=f.miscCosts.find(N=>N.id===o);if(!m)return;const _=A(d,p.selectedMonth),K=p.years.some(N=>N.months.some(X=>A(N.year,X.month)>_&&X.miscCosts.some(U=>U.description===m.description&&U.amountCents===m.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(N=>N.id!==o),K){p.years.forEach(N=>{N.months.forEach(X=>{A(N.year,X.month)<=_||(X.miscCosts=X.miscCosts.filter(U=>!(U.description===m.description&&U.amountCents===m.amountCents)))})}),await dt(`Sonstige Position gelöscht: ${m.description} (${k(m.amountCents)} €) inkl. zukünftiger Monate`),we("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),te();return}await ke(`Sonstige Position gelöscht: ${m.description} (${k(m.amountCents)} €)`),we("Sonstige Position wurde gelöscht."),te()}async function Qt(o,u,f,d){const m=Oe(),_=p.selectedYear;if(!m||!_)return;const I=o.trim();if(!I){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(u<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const K=Ir(I,u,f);if(m.incomes=[K,...m.incomes],d){const N=A(_,p.selectedMonth);p.years.forEach(X=>{X.months.forEach(U=>{A(X.year,U.month)<=N||(U.incomes=[Ir(I,u,f),...U.incomes])})}),await dt(`Einkommen hinzugefügt: ${I} (${k(u)} €, ${ba(f)}) für zukünftige Monate`),we("Einkommen wurde für zukünftige Monate hinzugefügt."),te();return}await ke(`Einkommen hinzugefügt: ${I} (${k(u)} €, ${ba(f)})`),we("Einkommen wurde hinzugefügt."),te()}async function Ra(o,u){const f=Oe();if(!f)return;const d=f.incomes.find(m=>m.id===o);d&&(f.incomes=f.incomes.map(m=>{if(m.id!==o)return m;if(!u){const{incomeSource:_,...I}=m;return I}return{...m,incomeSource:u}}),await ke(`Einkommensart angepasst: ${d.description} → ${ba(u)}`),te())}async function aa(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Oe(),d=p.selectedYear;if(!f||!d)return;const m=f.incomes.find(N=>N.id===o);if(!m)return;const _=A(d,p.selectedMonth),K=p.years.some(N=>N.months.some(X=>A(N.year,X.month)>_&&X.incomes.some(U=>U.description===m.description&&U.amountCents===m.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(N=>N.id!==o),K){p.years.forEach(N=>{N.months.forEach(X=>{A(N.year,X.month)<=_||(X.incomes=X.incomes.filter(U=>!(U.description===m.description&&U.amountCents===m.amountCents)))})}),await dt(`Einkommen gelöscht: ${m.description} (${k(m.amountCents)} €) inkl. zukünftiger Monate`),we("Einkommen wurde auch in zukünftigen Monaten gelöscht."),te();return}await ke(`Einkommen gelöscht: ${m.description} (${k(m.amountCents)} €)`),we("Einkommen wurde gelöscht."),te()}async function Va(){const o=await ns(),u=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(u),d=`haushaltsbuch-backup-${new Date().toISOString().slice(0,10)}.json`,m=document.createElement("a");m.href=f,m.download=d,m.click(),URL.revokeObjectURL(f),bn(d),te(),we("Backup wurde exportiert.")}async function oe(o){const u=await o.text(),f=JSON.parse(u);await as(f);const[d,m,_]=await Promise.all([zn(),gr(),yr()]);p.years=d,p.annualVariableFixedTemplates=_.templates,p.annualVariableFixedTemplateVersion=_.version,qt(p.years),xa(p.years),p.fixedTemplates=m.templates,p.fixedTemplateVersion=m.version,await Na(p.years),p.selectedYear=_t(d),p.selectedMonth=Et(),bn(o.name),we("Backup wurde importiert."),te()}function te(){const o=Pn(),u=Oe(),f=ga(),d=u?gn(u):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},m=o?Tn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},_=o?On(o):[],I=u?u.foodBudgetCents??0:0,K=u?u.goingOutBudgetCents??0:0,N=u?u.fixedBudgetCents??u.fixedCosts.reduce((r,h)=>r+h.plannedCents,0):0,X=u?u.variableBudgetCents??u.variablePositions.reduce((r,h)=>r+h.budgetCents,0):0,U=u?u.miscBudgetCents??0:0,Q=o?o.months.reduce((r,h)=>r+(h.foodBudgetCents??0),0):0,pe=o?o.months.reduce((r,h)=>r+(h.goingOutBudgetCents??0),0):0,Ce=o?o.months.reduce((r,h)=>r+(h.fixedBudgetCents??h.fixedCosts.reduce((M,L)=>M+L.plannedCents,0)),0):0,Ke=o?o.months.reduce((r,h)=>r+(h.variableBudgetCents??h.variablePositions.reduce((M,L)=>M+L.budgetCents,0)),0):0,je=o?o.months.reduce((r,h)=>r+(h.miscBudgetCents??0),0):0,W=u?u.incomes.reduce((r,h)=>r+(Gn(h.incomeSource)?h.amountCents:0),0):0,We=u?u.incomes.reduce((r,h)=>r+(h.incomeSource==="salary"?h.amountCents:0),0):0,Le=Fn(),Ge=o?Le.get(A(o.year,p.selectedMonth)):void 0,xe=o?o.months.slice().sort((r,h)=>r.month-h.month)[0]:void 0,Re=Ge?.carriedFromPreviousCents??0,V=Ge?.hasPreviousMonth??!1,Se=Ge?.effectiveIncomeCents??W,vt=u?Ut(u):0,Je=Ge?.netCents??W-vt,ve=Se-d.totalCents,re=We-d.totalCents,He=d.totalCents>0?`${(We/d.totalCents*100).toFixed(1)} %`:"-",fe=Re<0?"danger":Re>0?"budget-under":"",Be=Je<0?"danger":Je>0?"budget-under":"",Fe=ve<0?"danger":ve>0?"budget-under":"",Xe=o?o.months.reduce((r,h)=>r+h.incomes.reduce((M,L)=>M+(Gn(L.incomeSource)?L.amountCents:0),0),0):0,he=o?o.months.reduce((r,h)=>r+h.incomes.reduce((M,L)=>M+(L.incomeSource==="salary"?L.amountCents:0),0),0):0,Ue=o&&xe?Le.get(A(o.year,xe.month))?.carriedFromPreviousCents??0:0,jt=Xe+Ue,kt=jt-m.totalCents,Qe=he-m.totalCents,mt=m.totalCents>0?`${(he/m.totalCents*100).toFixed(1)} %`:"-",$t=Ue<0?"danger":Ue>0?"budget-under":"",Ee=kt<0?"danger":kt>0?"budget-under":"",ye=I+K+N+X+U,Ie=I+K,Ve=d.foodCents+d.goingOutCents,Ye=Ie-Ve,gt=ct(Ve,Ie),At=Q+pe+Ce+Ke+je,Rt=Se-ye,Vt=jt-At,P=ye-d.totalCents,q=At-m.totalCents,ie=r=>r<0?"danger":r>0?"budget-under":"",Nn=(r,h)=>h<=0?"muted":r>=h?"budget-under":"danger",Yt=Nn(We,d.totalCents),wn=Nn(he,m.totalCents),Zt=P+Rt+ve+re,kn=q+Vt+kt+Qe,De=(r,h)=>{if(h<=0)return"0%";const L=Math.max(0,r)/h*100;return`${Math.min(100,Math.max(0,L)).toFixed(1)}%`},$n=(r,h)=>{if(h<=0)return r>0?100:0;const M=Math.max(0,r)/h*100;return Math.max(0,M)},ra=[{label:"Essen",budgetCents:I,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:K,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:N,actualCents:d.fixedCents},{label:"Variable",budgetCents:X,actualCents:d.variableCents},{label:"Sonstige",budgetCents:U,actualCents:d.miscCents}];Math.max(1,...ra.flatMap(r=>[r.budgetCents,r.actualCents]));const sa=(r,h)=>h<=0?"bar-positive":r<=0||h>r?"bar-negative":"bar-positive",ia=[{label:"Einkommen gesamt",valueCents:Se,className:"bar-income"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ve,className:ve<0?"bar-negative":"bar-positive"}],$a=Math.max(1,...ia.map(r=>Math.abs(r.valueCents))),Ze=o?o.months.slice().sort((r,h)=>r.month-h.month).map(r=>{const h=r.foodBudgetCents??0,M=r.goingOutBudgetCents??0,L=r.fixedBudgetCents??r.fixedCosts.reduce((le,ue)=>le+ue.plannedCents,0),J=r.variableBudgetCents??r.variablePositions.reduce((le,ue)=>le+ue.budgetCents,0),Y=r.miscBudgetCents??0,ee=h+M+L+J+Y;return{month:r.month,foodBudgetCents:h,goingOutBudgetCents:M,fixedBudgetCents:L,variableBudgetCents:J,miscBudgetCents:Y,totalBudgetCents:ee}}):[],ft=new Map(Ze.map(r=>[r.month,r])),bt=r=>{if(r.length===0)return null;const h=Math.min(...r),M=Math.max(...r),L=Math.round(r.reduce((J,Y)=>J+Y,0)/r.length);return{min:h,avg:L,max:M}},Sa=_.map(r=>r.summary.foodCents),qn=_.map(r=>r.summary.goingOutCents),Ba=_.map(r=>r.summary.fixedCents),Ea=_.map(r=>r.summary.variableCents),Kn=_.map(r=>r.summary.miscCents),oa=_.map(r=>r.summary.totalCents),en=_.map(r=>o?Le.get(A(o.year,r.month))?.plannedBudgetCents??0:0),_a=_.map(r=>o?Le.get(A(o.year,r.month))?.netCents??0:0),Ln=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((h,M)=>h+(M.incomeSource==="salary"?M.amountCents:0),0)])),jn=_.map(r=>Ln.get(r.month)??0),St={food:bt(Sa),goingOut:bt(qn),fixed:bt(Ba),variable:bt(Ea),misc:bt(Kn),total:bt(oa),salary:bt(jn),budget:bt(en),net:bt(_a)},za=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],tn={food:Sa.reduce((r,h)=>r+h,0),goingOut:qn.reduce((r,h)=>r+h,0),fixed:Ba.reduce((r,h)=>r+h,0),variable:Ea.reduce((r,h)=>r+h,0),misc:Kn.reduce((r,h)=>r+h,0),total:oa.reduce((r,h)=>r+h,0),salary:jn.reduce((r,h)=>r+h,0),budget:en.reduce((r,h)=>r+h,0)},Ma=za.map(({key:r,label:h})=>{const M=St.food?.[r]??null,L=St.goingOut?.[r]??null,J=St.fixed?.[r]??null,Y=St.variable?.[r]??null,ee=St.misc?.[r]??null,le=St.total?.[r]??null,ue=St.salary?.[r]??null,me=St.budget?.[r]??null,st=St.net?.[r]??null,et=Rn=>Rn===null?"-":k(Rn);return`<tr>
                  <td><strong>${h}</strong></td>
                  <td>${et(M)}</td>
                  <td>${et(L)}</td>
                  <td>${et(J)}</td>
                  <td>${et(Y)}</td>
                  <td>${et(ee)}</td>
                  <td>${et(le)}</td>
                  <td>${et(ue)}</td>
                  <td>${et(me)}</td>
                  <td>${et(st)}</td>
                </tr>`}).join(""),la=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${k(tn.food)}</td>
                  <td>${k(tn.goingOut)}</td>
                  <td>${k(tn.fixed)}</td>
                  <td>${k(tn.variable)}</td>
                  <td>${k(tn.misc)}</td>
                  <td>${k(tn.total)}</td>
                  <td>${k(tn.salary)}</td>
                  <td>${k(tn.budget)}</td>
                </tr>`,Ua=Math.max(1,..._.flatMap(r=>{const h=ft.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,h??0]})),ua=Math.max(1,..._.flatMap(r=>{const h=ft.get(r.month),M=r.summary.foodCents+r.summary.goingOutCents,L=(h?.foodBudgetCents??0)+(h?.goingOutBudgetCents??0);return[M,L]})),ca=Math.max(1,..._.flatMap(r=>{const h=ft.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,h]})),Wa=Math.max(1,..._.flatMap(r=>{const h=ft.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,h]})),Pa=Math.max(1,..._.flatMap(r=>{const h=ft.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,h]})),dr=ct(d.fixedCents,N),Ga=ct(d.foodCents,I),Ja=ct(d.goingOutCents,K),fr=ct(d.variableCents,X),Ha=ct(d.miscCents,U),cn=p.editingFixedTemplateId?p.fixedTemplates.find(r=>r.id===p.editingFixedTemplateId):null,Xa=p.hasUnexportedChanges,Ta=p.unexportedChangeLog.slice().reverse(),hr=p.lastBackupFileName?Mt(p.lastBackupFileName):"-",pr={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},yt=p.years.slice().sort((r,h)=>r.year-h.year),dn=yt.some(r=>r.year===p.dashboardYear)?p.dashboardYear:p.selectedYear??yt[yt.length-1]?.year??null,Pe=typeof dn=="number"?yt.find(r=>r.year===dn):void 0,Ne=Pe?Pe.months.slice().sort((r,h)=>r.month-h.month):[],Ft=Pe?Tn(Pe):pr,Dt=Pe?at(Pe):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},vr=Pe?Kt(Pe):0,Oa=Pe?An(Pe,Le):0,da=vr+Oa,nn=Pe?Pe.months.reduce((r,h)=>r+Ut(h),0):0,fa=da-nn,fn=da-Ft.totalCents,an=[{label:"Essen",budgetCents:Dt.foodCents,actualCents:Ft.foodCents},{label:"Ausgehen",budgetCents:Dt.goingOutCents,actualCents:Ft.goingOutCents},{label:"Fixkosten",budgetCents:Dt.fixedCents,actualCents:Ft.fixedCents},{label:"Variable",budgetCents:Dt.variableCents,actualCents:Ft.variableCents},{label:"Sonstige",budgetCents:Dt.miscCents,actualCents:Ft.miscCents}],rt=Ne.map(r=>{const h=Pe?Le.get(A(Pe.year,r.month)):void 0,M=gn(r),L=r.incomes.reduce((Rn,Qa)=>Rn+Qa.amountCents,0),J=h?.effectiveIncomeCents??L,Y=h?.plannedBudgetCents??Ut(r),ee=M.foodCents,le=M.goingOutCents,ue=ee+le,me=M.totalCents,st=J-Y,et=J-me;return{month:r.month,foodCents:ee,goingOutCents:le,foodAndGoingOutCents:ue,effectiveIncomeCents:J,plannedBudgetCents:Y,actualCostCents:me,plannedNetCents:st,actualNetCents:et}}),e=Math.max(1,...rt.map(r=>r.actualCostCents)),t=Math.max(1,...rt.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),n=Math.max(1,...rt.map(r=>r.foodAndGoingOutCents)),a=Math.max(1,...rt.map(r=>r.foodCents)),s=Math.max(1,...rt.map(r=>r.goingOutCents)),i=yt.reduce((r,h)=>{const M=at(h);return{foodCents:r.foodCents+M.foodCents,goingOutCents:r.goingOutCents+M.goingOutCents,fixedCents:r.fixedCents+M.fixedCents,variableCents:r.variableCents+M.variableCents,miscCents:r.miscCents+M.miscCents,totalCents:r.totalCents+M.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),l=yt.reduce((r,h)=>{const M=Tn(h);return{foodCents:r.foodCents+M.foodCents,goingOutCents:r.goingOutCents+M.goingOutCents,fixedCents:r.fixedCents+M.fixedCents,variableCents:r.variableCents+M.variableCents,miscCents:r.miscCents+M.miscCents,totalCents:r.totalCents+M.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),c=yt.reduce((r,h)=>r+Kt(h),0),C=yt[0]?An(yt[0],Le):0,S=c+C,y=S-i.totalCents,v=S-l.totalCents,x=[{label:"Essen",budgetCents:i.foodCents,actualCents:l.foodCents},{label:"Ausgehen",budgetCents:i.goingOutCents,actualCents:l.goingOutCents},{label:"Fixkosten",budgetCents:i.fixedCents,actualCents:l.fixedCents},{label:"Variable",budgetCents:i.variableCents,actualCents:l.variableCents},{label:"Sonstige",budgetCents:i.miscCents,actualCents:l.miscCents}],w=Math.max(1,...x.flatMap(r=>[r.budgetCents,r.actualCents])),g=yt.map(r=>{const h=Tn(r),M=at(r),L=Kt(r),J=r.months.reduce((le,ue)=>le+ue.incomes.reduce((me,st)=>me+(st.incomeSource==="salary"?st.amountCents:0),0),0),Y=An(r,Le),ee=L+Y;return{year:r.year,salaryIncomeCents:J,budgetTotalCents:M.totalCents,actualTotalCents:h.totalCents,effectiveIncomeCents:ee,plannedNetCents:ee-M.totalCents,actualNetCents:ee-h.totalCents}}),b=Math.max(1,...g.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),B=Math.max(1,...g.map(r=>r.actualTotalCents)),E=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${p.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${p.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${p.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${yt.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':p.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${yt.map(r=>`<option value="${r.year}" ${r.year===dn?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${Pe?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${k(da)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${k(nn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${k(Ft.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ie(fa)}">${k(fa)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ie(fn)}">${k(fn)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Budget vs. Ist nach Kategorie (Jahr)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-actual"></span>Ist</span>
                    </div>
                  </header>
                  <div class="circle-chart-container" aria-label="Budgetnutzung je Kategorie (Jahr)">
                    ${an.map(r=>{const h=$n(r.actualCents,r.budgetCents),M=Math.min(100,h),L=`${h.toFixed(0)}%`,J=r.budgetCents-r.actualCents,Y=J<0?"danger":J>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${sa(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${M.toFixed(1)}%" title="${r.label}: ${k(r.actualCents)} von ${k(r.budgetCents)}">
                              <span class="circle-chart-value">${L}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${k(r.budgetCents)} / I ${k(r.actualCents)}</div>
                            <div class="circle-chart-meta ${Y}">${J>=0?"+":""}${k(J)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(rt.length,1)}, minmax(0, 1fr));">
                    ${rt.map(r=>{const h=De(r.actualCostCents,e);return`
                          <div class="spark-bar" title="${_e(r.month)}: ${k(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${h}"></div>
                            <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                    ${rt.map(r=>{const h=De(Math.abs(r.plannedNetCents),t),M=De(Math.abs(r.actualNetCents),t),L=r.plannedNetCents<0?"bar-negative":"bar-positive",J=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${_e(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${k(r.plannedNetCents)} | Ist-Saldo: ${k(r.actualNetCents)}">
                              <div class="bar ${L}" style="width:${h}; opacity: 0.35;"></div>
                              <div class="bar ${J}" style="width:${M}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${ie(r.plannedNetCents)}">B ${k(r.plannedNetCents)}</span>
                              <span class="${ie(r.actualNetCents)}">I ${k(r.actualNetCents)}</span>
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
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${rt.map(r=>`<tr>
                        <td>${_e(r.month)}</td>
                        <td>${k(r.effectiveIncomeCents)}</td>
                        <td>${k(r.plannedBudgetCents)}</td>
                        <td>${k(r.actualCostCents)}</td>
                        <td class="${ie(r.plannedNetCents)}">${k(r.plannedNetCents)}</td>
                        <td class="${ie(r.actualNetCents)}">${k(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:p.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${yt.map(r=>`<option value="${r.year}" ${r.year===dn?"selected":""}>${r.year}</option>`).join("")}
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
                    ${rt.map(r=>{const h=De(r.foodAndGoingOutCents,n);return`
                          <div class="spark-bar" title="${_e(r.month)}: ${k(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${h}"></div>
                            <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(rt.length,1)}, minmax(0, 1fr));">
                    ${rt.map(r=>{const h=De(r.foodCents,a);return`
                          <div class="spark-bar" title="${_e(r.month)}: ${k(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${h}"></div>
                            <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(rt.length,1)}, minmax(0, 1fr));">
                    ${rt.map(r=>{const h=De(r.goingOutCents,s);return`
                          <div class="spark-bar" title="${_e(r.month)}: ${k(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${h}"></div>
                            <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${k(S)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${k(i.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${k(l.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ie(y)}">${k(y)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ie(v)}">${k(v)}</div><div class="eval-value"></div></div>
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
                    ${x.map(r=>{const h=De(r.budgetCents,w),M=De(r.actualCents,w),L=sa(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${k(r.budgetCents)} | Ist: ${k(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${h}"></div>
                              <div class="bar-marker" style="left:${h}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${L}" style="width:${M}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${k(r.budgetCents)}</span>
                              <span class="muted">I ${k(r.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(g.length,1)}, minmax(0, 1fr));">
                    ${g.map(r=>{const h=De(r.actualTotalCents,B);return`
                          <div class="spark-bar" title="${r.year}: ${k(r.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${h}"></div>
                            <div class="spark-bar-label">${r.year}</div>
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
                    ${g.map(r=>{const h=De(Math.abs(r.plannedNetCents),b),M=De(Math.abs(r.actualNetCents),b),L=r.plannedNetCents<0?"bar-negative":"bar-positive",J=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${k(r.plannedNetCents)} | Ist-Saldo: ${k(r.actualNetCents)}">
                              <div class="bar ${L}" style="width:${h}; opacity: 0.35;"></div>
                              <div class="bar ${J}" style="width:${M}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${ie(r.plannedNetCents)}">B ${k(r.plannedNetCents)}</span>
                              <span class="${ie(r.actualNetCents)}">I ${k(r.actualNetCents)}</span>
                            </div>
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
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${g.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${k(r.salaryIncomeCents)}</td>
                        <td>${k(r.effectiveIncomeCents)}</td>
                        <td>${k(r.budgetTotalCents)}</td>
                        <td>${k(r.actualTotalCents)}</td>
                        <td class="${ie(r.plannedNetCents)}">${k(r.plannedNetCents)}</td>
                        <td class="${ie(r.actualNetCents)}">${k(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,$=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,O=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${cn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${cn?ht(cn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${cn?"Änderung speichern":"Vorlage speichern"}</button>
          ${cn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${p.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${k(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,F=p.annualVariableFixedTemplates.reduce((r,h)=>r+h.plannedCents,0),j=Math.round(F/12),R=`
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
                <div class="eval-value budget-under">${k(F)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${k(j)}</div>
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
            ${p.annualVariableFixedTemplates.map(r=>{const h=Dn(r.dueDateIso),M=h?_e(h.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${M}</td>
                    <td>${k(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,D=p.topModal==="years"?"Jahr hinzufügen":p.topModal==="fixed"?"Fixe Kosten (zentral)":p.topModal==="variable-fixed"?"Variable Fixkosten":p.topModal==="dashboard"?"Dashboard":"",z=p.topModal==="years"?$:p.topModal==="fixed"?O:p.topModal==="variable-fixed"?R:p.topModal==="dashboard"?E:"";T.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Xa?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${p.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Rr.map(r=>`<option value="${r}" ${p.theme===r?"selected":""}>${ss(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${D}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${D}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${z}
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
                  ${Ta.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${Ta.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Mt(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${_e(p.selectedMonth)} ${o.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${p.years.map(r=>`<option value="${r.year}" ${r.year===p.selectedYear?"selected":""}>${r.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${p.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(r,h)=>h+1).map(r=>`<option value="${r}" ${r===p.selectedMonth?"selected":""}>${_e(r)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

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
                  ${ra.map(r=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${r.label}"
                            data-budget-cents="${r.budgetCents}"
                            data-actual-cents="${r.actualCents}"
                            role="img"
                            aria-label="${r.label}: Budget ${k(r.budgetCents)} €, Ist ${k(r.actualCents)} €"
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
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ausgaben</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Netto</span>
                  </div>
                </header>
                <div class="bar-chart">
                  ${ia.map(r=>{const h=De(Math.abs(r.valueCents),$a),M=r.valueCents>=0?"+":"",L=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${k(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${h}"></div>
                          </div>
                          <div class="bar-meta"><span class="${L}">${M}${k(r.valueCents)}</span></div>
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
                      ${_.map(r=>{const h=ft.get(r.month)?.totalBudgetCents??0,M=De(h,Ua),L=De(r.summary.totalCents,Ua);return`
                            <div class="spark-bar" title="${_e(r.month)}: Ist ${k(r.summary.totalCents)} € | Budget ${k(h)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${L}"><span class="spark-bar-fill-value">${k(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const h=ft.get(r.month),M=(h?.foodBudgetCents??0)+(h?.goingOutBudgetCents??0),L=r.summary.foodCents+r.summary.goingOutCents,J=De(M,ua),Y=De(L,ua);return`
                            <div class="spark-bar" title="${_e(r.month)}: Ist ${k(L)} € | Budget ${k(M)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${J}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Y}"><span class="spark-bar-fill-value">${k(L)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const h=ft.get(r.month)?.fixedBudgetCents??0,M=De(h,ca),L=De(r.summary.fixedCents,ca);return`
                            <div class="spark-bar" title="${_e(r.month)}: Ist ${k(r.summary.fixedCents)} € | Budget ${k(h)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${L}"><span class="spark-bar-fill-value">${k(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const h=ft.get(r.month)?.variableBudgetCents??0,M=De(h,Wa),L=De(r.summary.variableCents,Wa);return`
                            <div class="spark-bar" title="${_e(r.month)}: Ist ${k(r.summary.variableCents)} € | Budget ${k(h)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${L}"><span class="spark-bar-fill-value">${k(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const h=ft.get(r.month)?.miscBudgetCents??0,M=De(h,Pa),L=De(r.summary.miscCents,Pa);return`
                            <div class="spark-bar" title="${_e(r.month)}: Ist ${k(r.summary.miscCents)} € | Budget ${k(h)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${L}"><span class="spark-bar-fill-value">${k(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${_e(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${k(W)}</div>
                    <div class="eval-value">${k(Xe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${k(We)}</div>
                    <div class="eval-value">${k(he)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${fe}">${V?k(Re):"-"}</div>
                    <div class="eval-value ${$t}">${o?k(Ue):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${k(Se)}</div>
                    <div class="eval-value">${k(jt)}</div>
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
                    <div class="eval-value">${Ct(I,d.foodCents)}</div>
                    <div class="eval-value">${k(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Ct(K,d.goingOutCents)}</div>
                    <div class="eval-value">${k(pe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Ct(N,d.fixedCents)}</div>
                    <div class="eval-value">${k(Ce)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Ct(X,d.variableCents)}</div>
                    <div class="eval-value">${k(Ke)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Ct(U,d.miscCents)}</div>
                    <div class="eval-value">${k(je)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Ct(ye,d.totalCents)}</div>
                    <div class="eval-value">${k(At)}</div>
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
                    <div class="eval-value ${Ga}">${k(d.foodCents)}</div>
                    <div class="eval-value">${k(m.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Ja}">${k(d.goingOutCents)}</div>
                    <div class="eval-value">${k(m.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${dr}">${k(d.fixedCents)}</div>
                    <div class="eval-value">${k(m.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${fr}">${k(d.variableCents)}</div>
                    <div class="eval-value">${k(m.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Ha}">${k(d.miscCents)}</div>
                    <div class="eval-value">${k(m.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${k(d.totalCents)}</div>
                    <div class="eval-value">${k(m.totalCents)}</div>
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
                    <div class="eval-value ${ie(P)}">${k(P)}</div>
                    <div class="eval-value ${ie(q)}">${k(q)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${ie(Rt)}">${k(Rt)}</div>
                    <div class="eval-value ${ie(Vt)}">${k(Vt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Fe}">${k(ve)}</div>
                    <div class="eval-value ${Ee}">${k(kt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${ie(re)}">${k(re)}</div>
                    <div class="eval-value ${ie(Qe)}">${k(Qe)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Yt}">${He}</div>
                    <div class="eval-value ${wn}">${mt}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Summe (ohne %)</div>
                    <div class="eval-value ${ie(Zt)}">${k(Zt)}</div>
                    <div class="eval-value ${ie(kn)}">${k(kn)}</div>
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
                  <th>Budget gesamt (€)</th>
                  <th>Kalkulierter Saldo (€)</th>
                </tr>
              </thead>
              <tbody>
                ${_.map((r,h,M)=>{const L=o?Le.get(A(o.year,r.month)):void 0,J=L?.plannedBudgetCents??0,Y=L?.netCents??0,ee=Ln.get(r.month)??0,le=Y<0?"danger":Y>0?"budget-under":"",ue=M[h-1],me=ue?.summary.foodCents??null,st=ue?.summary.goingOutCents??null,et=ue?.summary.fixedCents??null,Rn=ue?.summary.variableCents??null,Qa=ue?.summary.miscCents??null,wr=ue?.summary.totalCents??null,kr=ue!==void 0?Ln.get(ue.month)??0:null,$r=o&&ue?Le.get(A(o.year,ue.month))?.plannedBudgetCents??0:null,Sr=me===null?null:r.summary.foodCents-me,Br=st===null?null:r.summary.goingOutCents-st,Er=et===null?null:r.summary.fixedCents-et,_r=Rn===null?null:r.summary.variableCents-Rn,Mr=Qa===null?null:r.summary.miscCents-Qa,Pr=wr===null?null:r.summary.totalCents-wr,Tr=kr===null?null:ee-kr,Or=$r===null?null:J-$r,Vn=zt=>zt===null?"muted":zt>0?"danger":zt<0?"budget-under":"muted",Yr=zt=>zt===null?"muted":zt>0?"danger":zt<0?"budget-under":"muted",Sn=zt=>zt===null?"(Δ -)":`(Δ ${zt>0?"+":""}${k(zt)})`,Ar=o&&ue?Le.get(A(o.year,ue.month))?.netCents??0:null,ha=Ar===null?null:Y-Ar,zr=ha===null?"(Δ -)":`(Δ ${ha>0?"+":""}${k(ha)})`,Ur=ha===null?"muted":ha<0?"danger":ha>0?"budget-under":"muted";return`<tr>
                  <td>${_e(r.month)}</td>
                  <td>${k(r.summary.foodCents)} <span class="${Vn(Sr)}">${Sn(Sr)}</span></td>
                  <td>${k(r.summary.goingOutCents)} <span class="${Vn(Br)}">${Sn(Br)}</span></td>
                  <td>${k(r.summary.fixedCents)} <span class="${Vn(Er)}">${Sn(Er)}</span></td>
                  <td>${k(r.summary.variableCents)} <span class="${Vn(_r)}">${Sn(_r)}</span></td>
                  <td>${k(r.summary.miscCents)} <span class="${Vn(Mr)}">${Sn(Mr)}</span></td>
                  <td>${k(r.summary.totalCents)} <span class="${Vn(Pr)}">${Sn(Pr)}</span></td>
                  <td>${k(ee)} <span class="${Vn(Tr)}">${Sn(Tr)}</span></td>
                  <td>${k(J)} <span class="${Yr(Or)}">${Sn(Or)}</span></td>
                  <td class="${le}">${k(Y)} <span class="${Ur}">${zr}</span></td>
                </tr>`}).join("")}
                ${Ma}
                ${la}
              </tbody>
            </table>
          </article>

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${u?"":"disabled"} />
              </label>
              <label>
                Herkunft
                <select id="income-source" ${u?"":"disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${u?"":"disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${u?"":"disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${u?"":"disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${u?`<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${fe}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${ht(Re)}" />
                    </td>
                    <td>-</td>
                  </tr>${u.incomes.map(r=>`<tr>
                    <td>${r.description}</td>
                    <td>
                      <select data-income-source="${r.id}">
                        <option value="" ${r.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${r.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${r.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${r.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${k(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${r.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${k(W)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${k(We)} €</strong>
                </div>
                <div class="column-overview-row ${fe}">
                  <span>Übernahme Vormonat</span>
                  <strong>${u?`${k(Re)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${k(Se)} €</strong>
                </div>
                <div class="column-overview-row ${Be}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${k(Je)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Wt(I,d.foodCents)}
                ${Wt(K,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${k(Ie)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${k(Ve)} €</strong>
                  </div>
                  <div class="column-overview-row ${gt}">
                    <span>Diff</span>
                    <strong>${k(Ye)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${ht(I)}" ${u?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${ht(K)}" ${u?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${u?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${u?u.days.map(r=>{const h=r.foodCents>0,M=r.goingOutCents>0,L=`${r.isoDate===f?"today-row":""} ${h||M?"day-has-entry":""}`.trim(),J=`amount-input ${h?"day-input-has-value":""}`.trim(),Y=`amount-input ${M?"day-input-has-value":""}`.trim();return`<tr class="${L}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${J}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${ht(r.foodCents)}" /></td>
                      <td><input class="${Y}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${ht(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Wt(N,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${ht(N)}" ${u?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${u?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${u?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${u?"":"disabled"}>Position anlegen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${u?u.fixedCosts.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${ht(r.plannedCents)}" /></td>
                    <td class="${ct(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${ht(r.actualCents)}" /></td>
                    <td class="${ct(r.actualCents,r.plannedCents)}">${k(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Wt(X,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${ht(X)}" ${u?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${u?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${u?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${u?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-variable-position-recurring" ${u?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${u?u.variablePositions.map(r=>`<tr>
                    <td>${r.name}${r.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${ht(r.budgetCents)}" /></td>
                    <td class="${ct(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${ht(r.actualCents)}" /></td>
                    <td class="${ct(r.actualCents,r.budgetCents)}">${k(r.actualCents-r.budgetCents)}</td>
                    <td>
                      <button class="btn" data-move-variable-position-next="${r.id}">Nächster Monat</button>
                      <button class="btn btn-quiet" data-remove-variable-position="${r.id}">Löschen</button>
                    </td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-misc-costs">
              <h3>4) Sonstige (unter 30€)</h3>
              ${Wt(U,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${ht(U)}" ${u?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${u?"":"disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${u?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${u?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${u?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${u?u.miscCosts.map(r=>`<tr>
                    <td>${r.description}</td>
                    <td>${k(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-misc="${r.id}">Löschen</button></td>
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
          <p class="muted">Letztes verwendetes Backup: ${hr}</p>
          <p class="muted">Die Daten bleiben lokal im Browser (IndexedDB). Zusätzlich kannst du Backups als Datei sichern und später importieren.</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(p.topModal||p.showUnexportedChangeLogModal)),Ya(),lt(),ma()}function Ya(){const o=T.querySelector("#theme-select"),u=T.querySelector("#open-years-modal"),f=T.querySelector("#open-fixed-modal"),d=T.querySelector("#open-variable-fixed-modal"),m=T.querySelector("#open-dashboard-modal"),_=T.querySelector("#panel-modal-close"),I=T.querySelector("#panel-modal-backdrop"),K=T.querySelector("#open-unexported-change-log"),N=T.querySelector("#unexported-change-log-close"),X=T.querySelector("#unexported-change-log-backdrop"),U=T.querySelector("#new-year"),Q=T.querySelector("#create-year"),pe=T.querySelector("#year-select"),Ce=T.querySelector("#month-select");o?.addEventListener("change",()=>{const P=o.value;Kr(P)&&sn(P)}),u?.addEventListener("click",()=>{xt("years")}),f?.addEventListener("click",()=>{xt("fixed")}),d?.addEventListener("click",()=>{xt("variable-fixed")}),m?.addEventListener("click",()=>{xt("dashboard")}),K?.addEventListener("click",()=>{nr()}),N?.addEventListener("click",()=>{hn()}),X?.addEventListener("click",P=>{P.target===X&&hn()}),T.querySelectorAll("[data-dashboard-tab]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(p.dashboardTab=q,te())})});const Ke=T.querySelector("#dashboard-year-select");Ke?.addEventListener("change",()=>{const P=Number.parseInt(Ke.value,10);Number.isInteger(P)&&(p.dashboardYear=P,te())}),_?.addEventListener("click",()=>{va()}),I?.addEventListener("click",P=>{P.target===I&&va()}),p.topModal&&window.setTimeout(()=>{_?.focus()},0),p.showUnexportedChangeLogModal&&window.setTimeout(()=>{N?.focus()},0),Q?.addEventListener("click",async()=>{const P=Number.parseInt(U?.value??"",10);if(!Number.isInteger(P)){alert("Bitte gültiges Jahr eingeben.");return}await ya(P)}),pe?.addEventListener("change",()=>{p.selectedYear=Number.parseInt(pe.value,10),p.selectedMonth=Et(),te()}),Ce?.addEventListener("change",()=>{p.selectedMonth=Number.parseInt(Ce.value,10),te()});const je=T.querySelector("#fixed-template-name"),W=T.querySelector("#fixed-template-amount"),We=T.querySelector("#add-fixed-template"),Le=T.querySelector("#cancel-fixed-template-edit"),Ge=T.querySelector("#annual-variable-fixed-name"),xe=T.querySelector("#annual-variable-fixed-date"),Re=T.querySelector("#annual-variable-fixed-amount"),V=T.querySelector("#add-annual-variable-fixed-template");We?.addEventListener("click",async()=>{const P=je?.value??"",q=Te(W?.value??"0");await $e(P,q),je&&(je.value=""),W&&(W.value="")}),Le?.addEventListener("click",()=>{ur()}),V?.addEventListener("click",async()=>{const P=Ge?.value??"",q=xe?.value??"",ie=Te(Re?.value??"0");await Qn(P,q,ie),Ge&&(Ge.value=""),xe&&(xe.value=""),Re&&(Re.value="")}),T.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeAnnualVariableFixedTemplate;q&&await Zn(q)})}),T.querySelectorAll("[data-edit-fixed-template]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.editFixedTemplate;q&&ze(q)})}),T.querySelectorAll("[data-remove-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixedTemplate;q&&await Xn(q)})}),T.querySelectorAll("[data-day-food]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayFood;q&&await qa(q,"foodCents",Te(P.value))})}),T.querySelectorAll("[data-day-going]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayGoing;q&&await qa(q,"goingOutCents",Te(P.value))})}),T.querySelectorAll("[data-fixed-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedActual;q&&await Gt(q,Te(P.value))})}),T.querySelectorAll("[data-fixed-planned]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedPlanned;q&&await Cn(q,Te(P.value))})});const Se=T.querySelector("#fixed-budget");Se?.addEventListener("click",P=>{P.preventDefault(),Se.blur(),ut(Se)}),Se?.addEventListener("change",async()=>{await cr(Te(Se.value))});const vt=T.querySelector("#food-budget");vt?.addEventListener("click",P=>{P.preventDefault(),vt.blur(),ut(vt)}),vt?.addEventListener("change",async()=>{await Ht(Te(vt.value))});const Je=T.querySelector("#going-out-budget");Je?.addEventListener("click",P=>{P.preventDefault(),Je.blur(),ut(Je)}),Je?.addEventListener("change",async()=>{await Ka(Te(Je.value))}),T.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{rr()});const re=T.querySelector("#misc-budget");re?.addEventListener("click",P=>{P.preventDefault(),re.blur(),ut(re)}),re?.addEventListener("change",async()=>{await ln(Te(re.value))});const He=T.querySelector("#variable-budget");He?.addEventListener("click",P=>{P.preventDefault(),He.blur(),ut(He)}),He?.addEventListener("change",async()=>{await La(Te(He.value))});const fe=T.querySelector("#variable-position-name"),Be=T.querySelector("#variable-position-budget"),Fe=T.querySelector("#add-variable-position"),Xe=T.querySelector("#add-variable-position-recurring"),he=T.querySelector("#misc-description"),Ue=T.querySelector("#misc-amount"),jt=T.querySelector("#add-misc"),kt=T.querySelector("#add-misc-recurring"),Qe=T.querySelector("#income-description"),mt=T.querySelector("#income-source"),$t=T.querySelector("#income-amount"),Ee=T.querySelector("#add-income"),ye=T.querySelector("#add-income-recurring"),Ie=T.querySelector("#fixed-cost-name"),Ve=T.querySelector("#fixed-cost-budget"),Ye=T.querySelector("#add-fixed-cost"),gt=T.querySelector("#carryover-override");gt?.addEventListener("click",P=>{P.preventDefault(),gt.blur(),ut(gt)}),gt?.addEventListener("change",async()=>{const P=gt.value;if(!P.trim()){await Ae(null);return}await Ae(Te(P))}),Ye?.addEventListener("click",async()=>{const P=Te(Ve?.value??"0");await Jt(Ie?.value??"",P),Ie&&(Ie.value=""),Ve&&(Ve.value="")}),Fe?.addEventListener("click",async()=>{const P=Te(Be?.value??"0");await Xt(fe?.value??"",P,!1),fe&&(fe.value=""),Be&&(Be.value="")}),Xe?.addEventListener("click",async()=>{const P=Te(Be?.value??"0");await Xt(fe?.value??"",P,!0),fe&&(fe.value=""),Be&&(Be.value="")}),jt?.addEventListener("click",async()=>{const P=Te(Ue?.value??"0");await na(he?.value??"",P,!1),he&&(he.value=""),Ue&&(Ue.value="")}),kt?.addEventListener("click",async()=>{const P=Te(Ue?.value??"0");await na(he?.value??"",P,!0),he&&(he.value=""),Ue&&(Ue.value="")}),Ee?.addEventListener("click",async()=>{const P=Te($t?.value??"0"),q=mt?.value,ie=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await Qt(Qe?.value??"",P,ie,!1),Qe&&(Qe.value=""),$t&&($t.value=""),mt&&(mt.value="salary")}),ye?.addEventListener("click",async()=>{const P=Te($t?.value??"0"),q=mt?.value,ie=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await Qt(Qe?.value??"",P,ie,!0),Qe&&(Qe.value=""),$t&&($t.value=""),mt&&(mt.value="salary")}),T.querySelectorAll("[data-income-source]").forEach(P=>{P.addEventListener("change",async()=>{const q=P.dataset.incomeSource;if(!q)return;const ie=P.value;await Ra(q,ie==="balance"||ie==="fresh"||ie==="salary"?ie:void 0)})}),T.querySelectorAll("[data-variable-position-budget]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionBudget;q&&await ja(q,Te(P.value))})}),T.querySelectorAll("[data-variable-position-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionActual;q&&await Lt(q,Te(P.value))})}),T.querySelectorAll("[data-remove-variable-position]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeVariablePosition;q&&await xn(q)})}),T.querySelectorAll("[data-move-variable-position-next]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.moveVariablePositionNext;q&&await ta(q)})}),T.querySelectorAll("[data-remove-fixed]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixed;q&&await ea(q)})}),T.querySelectorAll("[data-remove-income]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeIncome;q&&await aa(q)})}),T.querySelectorAll("[data-remove-misc]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeMisc;q&&await ka(q)})});const At=T.querySelector("#backup-export"),Rt=T.querySelector("#backup-import");T.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),At?.addEventListener("click",async()=>{await Va()}),Rt?.addEventListener("change",async()=>{const P=Rt.files?.[0];if(P){try{await oe(P)}catch(q){console.error("Backup-Import fehlgeschlagen",q),we("Backup konnte nicht importiert werden.","error")}Rt.value=""}})}return{init:or}}const os="modulepreload",ls=function(T){return"/habu26/"+T},jr={},us=function(p,Me,G){let ce=Promise.resolve();if(Me&&Me.length>0){let tt=function(qe){return Promise.all(qe.map(se=>Promise.resolve(se).then(pt=>({status:"fulfilled",value:pt}),pt=>({status:"rejected",reason:pt}))))};var ge=tt;document.getElementsByTagName("link");const ae=document.querySelector("meta[property=csp-nonce]"),de=ae?.nonce||ae?.getAttribute("nonce");ce=tt(Me.map(qe=>{if(qe=ls(qe),qe in jr)return;jr[qe]=!0;const se=qe.endsWith(".css"),pt=se?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${qe}"]${pt}`))return;const ot=document.createElement("link");if(ot.rel=se?"stylesheet":os,se||(ot.as="script"),ot.crossOrigin="",ot.href=qe,de&&ot.setAttribute("nonce",de),document.head.appendChild(ot),se)return new Promise((lt,xt)=>{ot.addEventListener("load",lt),ot.addEventListener("error",()=>xt(new Error(`Unable to preload CSS for ${qe}`)))})}))}function ne(ae){const de=new Event("vite:preloadError",{cancelable:!0});if(de.payload=ae,window.dispatchEvent(de),!de.defaultPrevented)throw ae}return ce.then(ae=>{for(const de of ae||[])de.status==="rejected"&&ne(de.reason);return p().catch(ne)})};function cs(T={}){const{immediate:p=!1,onNeedRefresh:Me,onOfflineReady:G,onRegistered:ce,onRegisteredSW:ne,onRegisterError:ge}=T;let ae,de;const tt=async(se=!0)=>{await de};async function qe(){if("serviceWorker"in navigator){if(ae=await us(async()=>{const{Workbox:se}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:se}},[]).then(({Workbox:se})=>new se("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(se=>{ge?.(se)}),!ae)return;ae.addEventListener("activated",se=>{(se.isUpdate||se.isExternal)&&window.location.reload()}),ae.addEventListener("installed",se=>{se.isUpdate||G?.()}),ae.register({immediate:p}).then(se=>{ne?ne("/habu26/sw.js",se):ce?.(se)}).catch(se=>{ge?.(se)})}}return de=qe(),tt}function ds(){cs({immediate:!0})}const Vr=document.getElementById("app");if(!Vr)throw new Error("App-Container nicht gefunden.");is(Vr).init();ds();
