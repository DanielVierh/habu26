(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ce of document.querySelectorAll('link[rel="modulepreload"]'))G(ce);new MutationObserver(ce=>{for(const ae of ce)if(ae.type==="childList")for(const ve of ae.addedNodes)ve.tagName==="LINK"&&ve.rel==="modulepreload"&&G(ve)}).observe(document,{childList:!0,subtree:!0});function _e(ce){const ae={};return ce.integrity&&(ae.integrity=ce.integrity),ce.referrerPolicy&&(ae.referrerPolicy=ce.referrerPolicy),ce.crossOrigin==="use-credentials"?ae.credentials="include":ce.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function G(ce){if(ce.ep)return;ce.ep=!0;const ae=_e(ce);fetch(ce.href,ae)}})();const Wr=[1,2,3,4,5,6,7,8,9,10,11,12];function xr(){return new Date().toISOString()}function Et(O){const h=Math.random().toString(36).slice(2,10);return`${O}_${Date.now()}_${h}`}function Gr(O,h){const _e=new Date(O,h,0).getDate(),G=[];for(let ce=1;ce<=_e;ce+=1){const ae=new Date(Date.UTC(O,h-1,ce));G.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return G}function Jr(O){return O.map(h=>({id:Et("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function Fr(O,h,_e){const G=h.reduce((ae,ve)=>ae+ve.plannedCents,0),ce=Wr.map(ae=>({month:ae,days:Gr(O,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Jr(h),fixedBudgetCents:G,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:O,createdAt:xr(),templateVersion:_e,months:ce}}function Dr(O,h){return{id:Et("expense"),description:O,amountCents:h,createdAt:xr()}}function Ir(O,h,_e){const G={id:Et("income"),description:O,amountCents:h,createdAt:xr()};return _e?{...G,incomeSource:_e}:G}var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xr(O){return O&&O.__esModule&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O}var Za={exports:{}},Qr=Za.exports,Nr;function Zr(){return Nr||(Nr=1,(function(O,h){((_e,G)=>{O.exports=G()})(Qr,function(){var _e=function(e,t){return(_e=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},G=function(){return(G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ce(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Hr,ve=Object.keys,re=Array.isArray;function de(e,t){return typeof t=="object"&&ve(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var Ze=Object.getPrototypeOf,qe={}.hasOwnProperty;function se(e,t){return qe.call(e,t)}function vt(e,t){typeof t=="function"&&(t=t(Ze(e))),(typeof Reflect>"u"?ve:Reflect.ownKeys)(t).forEach(function(n){lt(e,n,t[n])})}var ot=Object.defineProperty;function lt(e,t,n,a){ot(e,t,de(n&&se(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function xt(e){return{from:function(t){return e.prototype=Object.create(t.prototype),lt(e.prototype,"constructor",e),{extend:vt.bind(null,e.prototype)}}}}var va=Object.getOwnPropertyDescriptor,nr=[].slice;function pn(e,t,n){return nr.call(e,t,n)}function Aa(e,t){return t(e)}function Bn(e){if(!e)throw new Error("Assertion Failed")}function ma(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function It(e,t){if(typeof t=="string"&&se(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=It(e,t[a]);n.push(i)}return n}var l,c=t.indexOf(".");return c===-1||(l=e[t.substr(0,c)])==null?void 0:It(l,t.substr(c+1))}function et(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Bn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)et(e,t[a],n[a])}else{var i,l,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?re(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:et(l=(l=e[i])&&se(e,i)?l:e[i]={},c,n)):n===void 0?re(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Fa(e){var t,n={};for(t in e)se(e,t)&&(n[t]=e[t]);return n}var ar=[].concat;function Nt(e){return ar.apply([],e)}var Mt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Nt([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),vn=new Set(Mt.map(function(e){return ae[e]})),En=null;function rn(e){return En=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=En.get(n);if(a)return a;if(re(n)){a=[],En.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(vn.has(n.constructor))a=n;else{var l,c=Ze(n);for(l in a=c===Object.prototype?{}:Object.create(c),En.set(n,a),n)se(n,l)&&(a[l]=t(n[l]))}return a})(e),En=null,e}var rr={}.toString;function zn(e){return rr.call(e).slice(8,-1)}var ut=typeof Symbol<"u"?Symbol.iterator:"@@iterator",xe=typeof ut=="symbol"?function(e){var t;return e!=null&&(t=e[ut])&&t.apply(e)}:function(){return null};function wt(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var sn={};function _t(e){var t,n,a,s;if(arguments.length===1){if(re(e))return e.slice();if(this===sn&&typeof e=="string")return[e];if(s=xe(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var ga=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Mt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],tt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Mt),sr={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function on(e,t){this.name=e,this.message=t}function Da(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function _n(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Da(e,t)}function mn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Da(e,this.failures)}xt(on).from(Error).extend({toString:function(){return this.name+": "+this.message}}),xt(_n).from(on),xt(mn).from(on);var Un=tt.reduce(function(e,t){return e[t]=t+"Error",e},{}),ir=on,Z=tt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=sr[t]||n,this.inner=null)}return xt(a).from(ir),e[t]=a,e},{}),Ia=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,Mt.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));Mt=tt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function me(){}function Mn(e){return e}function or(e,t){return e==null||e===Mn?t:function(n){return t(e(n))}}function qt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ba(e,t){return e===me?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?qt(a,this.onsuccess):a),s&&(this.onerror=this.onerror?qt(s,this.onerror):s),i!==void 0?i:n}}function Wn(e,t){return e===me?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?qt(n,this.onsuccess):n),a&&(this.onerror=this.onerror?qt(a,this.onerror):a)}}function Na(e,t){return e===me?t:function(s){var a=e.apply(this,arguments),s=(de(s,a),this.onsuccess),i=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?qt(s,this.onsuccess):s),i&&(this.onerror=this.onerror?qt(i,this.onerror):i),a===void 0?l===void 0?void 0:l:de(a,l)}}function Gn(e,t){return e===me?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Ae(e,t){return e===me?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}Mt.ModifyError=_n,Mt.DexieError=on,Mt.BulkError=mn;var Pt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function gn(e){Pt=e}var Ut={},Pn=100,On=typeof Promise>"u"?[]:(tt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[On=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Ze(On),tt]:[tt,Ze(tt),tt]),tt=On[0],Dt=On[1],Dt=Dt&&Dt.then,Kt=tt&&tt.constructor,Tn=!!On[2],An=function(e,t){bn.push([e,t]),Jn&&(queueMicrotask(lr),Jn=!1)},ct=!0,Jn=!0,Ct=[],Wt=[],ya=Mn,kt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:me,pgp:!1,env:{},finalize:me},H=kt,bn=[],we=0,dt=[];function A(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==Ut)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Dn(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var l=a._lib&&ln();i&&typeof i.then=="function"?n(a,function(c,C){i instanceof A?i._then(c,C):i.then(c,C)}):(a._state=!0,a._value=i,xa(a)),l&&yn()}},Dn.bind(null,a))}catch(i){Dn(a,i)}})(this,e)}var Fn={get:function(){var e=H,t=Zn;function n(a,s){var i=this,l=!e.global&&(e!==H||t!==Zn),c=l&&!Jt(),C=new A(function(S,y){Ot(i,new Ca(La(a,e,l,c),La(s,e,l,c),S,y,e))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return n.prototype=Ut,n},set:function(e){lt(this,"then",e&&e.prototype===Ut?Fn:{get:function(){return e},set:Fn.set})}};function Ca(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function Dn(e,t){var n,a;Wt.push(t),e._state===null&&(n=e._lib&&ln(),t=ya(t),e._state=!1,e._value=t,a=e,Ct.some(function(s){return s._value===a._value})||Ct.push(a),xa(e),n)&&yn()}function xa(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Ot(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),we===0&&(++we,An(function(){--we==0&&wa()},[]))}function Ot(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++we,An(Tt,[n,e,t])}}function Tt(e,t,n){try{var a,s=t._value;!t._state&&Wt.length&&(Wt=[]),a=Pt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||Wt.indexOf(s)!==-1||(i=>{for(var l=Ct.length;l;)if(Ct[--l]._value===i._value)return Ct.splice(l,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--we==0&&wa(),--n.psd.ref||n.psd.finalize()}}function lr(){un(kt,function(){ln()&&yn()})}function ln(){var e=ct;return Jn=ct=!1,e}function yn(){var e,t,n;do for(;0<bn.length;)for(e=bn,bn=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<bn.length);Jn=ct=!0}function wa(){for(var e=Ct,t=(Ct=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),dt.slice(0)),n=t.length;n;)t[--n]()}function Hn(e){return new A(Ut,!1,e)}function ke(e,t){var n=H;return function(){var a=ln(),s=H;try{return Ht(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Ht(s,!1),a&&yn()}}}vt(A.prototype,{then:Fn,_then:function(e,t){Ot(this,new Ca(null,null,e,t,H))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:Hn)(a)}):this.then(null,function(a){return(a&&a.name===t?n:Hn)(a)}))},finally:function(e){return this.then(function(t){return A.resolve(e()).then(function(){return t})},function(t){return A.resolve(e()).then(function(){return Hn(t)})})},timeout:function(e,t){var n=this;return e<1/0?new A(function(a,s){var i=setTimeout(function(){return s(new Z.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&lt(A.prototype,Symbol.toStringTag,"Dexie.Promise"),kt.env=Ka(),vt(A,{all:function(){var e=_t.apply(null,arguments).map(ea);return new A(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return A.resolve(s).then(function(l){e[i]=l,--a||t(e)},n)})})},resolve:function(e){return e instanceof A?e:e&&typeof e.then=="function"?new A(function(t,n){e.then(t,n)}):new A(Ut,!0,e)},reject:Hn,race:function(){var e=_t.apply(null,arguments).map(ea);return new A(function(t,n){e.map(function(a){return A.resolve(a).then(t,n)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return Zn}},newPSD:Gt,usePSD:un,scheduler:{get:function(){return An},set:function(e){An=e}},rejectionMapper:{get:function(){return ya},set:function(e){ya=e}},follow:function(e,t){return new A(function(n,a){return Gt(function(s,i){var l=H;l.unhandleds=[],l.onunhandled=i,l.finalize=qt(function(){var c,C=this;c=function(){C.unhandleds.length===0?s():i(C.unhandleds[0])},dt.push(function S(){c(),dt.splice(dt.indexOf(S),1)}),++we,An(function(){--we==0&&wa()},[])},l.finalize),e()},t,n,a)})}}),Kt&&(Kt.allSettled&&lt(A,"allSettled",function(){var e=_t.apply(null,arguments).map(ea);return new A(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return A.resolve(s).then(function(l){return a[i]={status:"fulfilled",value:l}},function(l){return a[i]={status:"rejected",reason:l}}).then(function(){return--n||t(a)})})})}),Kt.any&&typeof AggregateError<"u"&&lt(A,"any",function(){var e=_t.apply(null,arguments).map(ea);return new A(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,l){return A.resolve(i).then(function(c){return t(c)},function(c){s[l]=c,--a||n(new AggregateError(s))})})})}),Kt.withResolvers)&&(A.withResolvers=Kt.withResolvers);var Ye={awaits:0,echoes:0,id:0},ur=0,Xn=[],Qn=0,Zn=0,qa=0;function Gt(e,l,n,a){var s=H,i=Object.create(s),l=(i.parent=s,i.ref=0,i.global=!1,i.id=++qa,kt.env,i.env=Tn?{Promise:A,PromiseProp:{value:A,configurable:!0,writable:!0},all:A.all,race:A.race,allSettled:A.allSettled,any:A.any,resolve:A.resolve,reject:A.reject}:{},l&&de(i,l),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},un(i,e,n,a));return i.ref===0&&i.finalize(),l}function Cn(){return Ye.id||(Ye.id=++ur),++Ye.awaits,Ye.echoes+=Pn,Ye.id}function Jt(){return!!Ye.awaits&&(--Ye.awaits==0&&(Ye.id=0),Ye.echoes=Ye.awaits*Pn,!0)}function ea(e){return Ye.echoes&&e&&e.constructor===Kt?(Cn(),e.then(function(t){return Jt(),t},function(t){return Jt(),Fe(t)})):e}function cr(){var e=Xn[Xn.length-1];Xn.pop(),Ht(e,!1)}function Ht(e,t){var n,a,s=H;(t?!Ye.echoes||Qn++&&e===H:!Qn||--Qn&&e===H)||queueMicrotask(t?(function(i){++Zn,Ye.echoes&&--Ye.echoes!=0||(Ye.echoes=Ye.awaits=Ye.id=0),Xn.push(H),Ht(i,!0)}).bind(null,e):cr),e!==H&&(H=e,s===kt&&(kt.env=Ka()),Tn)&&(n=kt.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(ae,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function Ka(){var e=ae.Promise;return Tn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function un(e,t,n,a,s){var i=H;try{return Ht(e,!0),t(n,a,s)}finally{Ht(i,!1)}}function La(e,t,n,a){return typeof e!="function"?e:function(){var s=H;n&&Cn(),Ht(t,!0);try{return e.apply(this,arguments)}finally{Ht(s,!1),a&&queueMicrotask(Jt)}}}function cn(e){Promise===Kt&&Ye.echoes===0?Qn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Dt).indexOf("[native code]")===-1&&(Cn=Jt=me);var Fe=A.reject,Xt="￿",Lt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ja="String expected.",xn=[],ta="__dbnames",na="readonly",ka="readwrite";function Qt(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Ra={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function aa(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=rn(t))[e],t}}function Va(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function oe(e,t){try{var n=ne(e),a=ne(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=Ya(e),i=Ya(t),l=s.length,c=i.length,C=l<c?l:c,S=0;S<C;++S)if(s[S]!==i[S])return s[S]<i[S]?-1:1;return l===c?0:l<c?-1:1;case"Array":for(var y=e,m=t,x=y.length,w=m.length,g=x<w?x:w,b=0;b<g;++b){var B=oe(y[b],m[b]);if(B!==0)return B}return x===w?0:x<w?-1:1}}catch{}return NaN}function ne(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=zn(e))==="ArrayBuffer")?"binary":t}function Ya(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function o(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}p.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(re(n))return ce(ce([],re(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(re(a))return re(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var u=p;function p(e){this["@@propmod"]=e}function d(e,t){for(var n=ve(t),a=n.length,s=!1,i=0;i<a;++i){var l=n[i],c=t[l],C=It(e,l);c instanceof u?(et(e,l,c.execute(C)),s=!0):C!==c&&(et(e,l,c),s=!0)}return s}_.prototype._trans=function(e,t,n){var a=this._tx||H.trans,s=this.name,i=Pt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function l(S,y,m){if(m.schema[s])return t(m.idbtrans,m);throw new Z.NotFound("Table "+s+" not part of transaction")}var c=ln();try{var C=a&&a.db._novip===this.db._novip?a===H.trans?a._promise(e,l,n):Gt(function(){return a._promise(e,l,n)},{trans:a,transless:H.transless||H}):(function S(y,m,x,w){if(y.idbdb&&(y._state.openComplete||H.letThrough||y._vip)){var g=y._createTransaction(m,x,y._dbSchema);try{g.create(),y._state.PR1398_maxLoop=3}catch(b){return b.name===Un.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return S(y,m,x,w)})):Fe(b)}return g._promise(m,function(b,B){return Gt(function(){return H.trans=g,w(b,B,g)})}).then(function(b){if(m==="readwrite")try{g.idbtrans.commit()}catch{}return m==="readonly"?b:g._completion.then(function(){return b})})}if(y._state.openComplete)return Fe(new Z.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Fe(new Z.DatabaseClosed);y.open().catch(me)}return y._state.dbReadyPromise.then(function(){return S(y,m,x,w)})})(this.db,e,[this.name],l);return i&&(C._consoleTask=i,C=C.catch(function(S){return console.trace(S),Fe(S)})),C}finally{c&&yn()}},_.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Fe(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},_.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(re(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=ve(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function(S){return 0<=c.keyPath.indexOf(S)})){for(var C=0;C<t.length;++C)if(t.indexOf(c.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(c,C){return c.keyPath.length-C.keyPath.length})[0];if(n&&this.db._maxKey!==Xt)return l=n.keyPath.slice(0,t.length),this.where(l).equals(l.map(function(c){return e[c]}));!n&&Pt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,C){return oe(c,C)===0}var l=t.reduce(function(y,C){var S=y[0],y=y[1],m=a[C],x=e[C];return[S||m,S||!m?Qt(y,m&&m.multi?function(w){return w=It(w,C),re(w)&&w.some(function(g){return s(x,g)})}:function(w){return s(x,It(w,C))}):y]},[null,null]),i=l[0],l=l[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},_.prototype.filter=function(e){return this.toCollection().and(e)},_.prototype.count=function(e){return this.toCollection().count(e)},_.prototype.offset=function(e){return this.toCollection().offset(e)},_.prototype.limit=function(e){return this.toCollection().limit(e)},_.prototype.each=function(e){return this.toCollection().each(e)},_.prototype.toArray=function(e){return this.toCollection().toArray(e)},_.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},_.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,re(e)?"[".concat(e.join("+"),"]"):e))},_.prototype.reverse=function(){return this.toCollection().reverse()},_.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof Va&&(e=(l=>{var c=y,C=l;if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");function S(){this.constructor=c}function y(){return l!==null&&l.apply(this,arguments)||this}return _e(c,C),c.prototype=C===null?Object.create(C):(S.prototype=C.prototype,new S),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),s=e.prototype;s;s=Ze(s))Object.getOwnPropertyNames(s).forEach(function(l){return a.add(l)});function i(l){if(!l)return l;var c,C=Object.create(e.prototype);for(c in l)if(!a.has(c))try{C[c]=l[c]}catch{}return C}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},_.prototype.defineClass=function(){return this.mapToClass(function(e){de(this,e)})},_.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=aa(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[l]})}).then(function(c){return c.numFailures?A.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{et(e,i,c)}catch{}return c})},_.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var l=i??{};return d(l,t),a&&et(l,a,e),n.core.mutate({trans:s,type:"put",values:[l],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?A.reject(c.failures[0]):!!i})})})},_.prototype.update=function(e,t){return typeof e!="object"||re(e)?this.where(":id").equals(e).modify(t):(e=It(e,this.schema.primKey.keyPath))===void 0?Fe(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},_.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=aa(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[l],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?A.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{et(e,i,c)}catch{}return c})},_.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return o(t,[e],a)}).then(function(a){return a.numFailures?A.reject(a.failures[0]):void 0})})},_.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:Ra}).then(function(n){return o(e,null,n)})}).then(function(t){return t.numFailures?A.reject(t.failures[0]):void 0})},_.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},_.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,S=c.auto,c=c.keyPath;if(c&&s)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var C=e.length,S=c&&S?e.map(aa(c)):e;return a.core.mutate({trans:l,type:"add",keys:s,values:S,wantResults:i}).then(function(y){var m=y.numFailures,x=y.failures;if(m===0)return i?y.results:y.lastResult;throw new mn("".concat(a.name,".bulkAdd(): ").concat(m," of ").concat(C," operations failed"),x)})})},_.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,S=c.auto,c=c.keyPath;if(c&&s)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var C=e.length,S=c&&S?e.map(aa(c)):e;return a.core.mutate({trans:l,type:"put",keys:s,values:S,wantResults:i}).then(function(y){var m=y.numFailures,x=y.failures;if(m===0)return i?y.results:y.lastResult;throw new mn("".concat(a.name,".bulkPut(): ").concat(m," of ").concat(C," operations failed"),x)})})},_.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(l){return l.key}),s=e.map(function(l){return l.changes}),i=[];return this._trans("readwrite",function(l){return n.getMany({trans:l,keys:a,cache:"clone"}).then(function(c){var C=[],S=[],y=(e.forEach(function(m,x){var w=m.key,g=m.changes,b=c[x];if(b){for(var B=0,E=Object.keys(g);B<E.length;B++){var $=E[B],T=g[$];if($===t.schema.primKey.keyPath){if(oe(T,w)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else et(b,$,T)}i.push(x),C.push(w),S.push(b)}}),C.length);return n.mutate({trans:l,type:"put",keys:C,values:S,updates:{keys:a,changeSpecs:s}}).then(function(m){var x=m.numFailures,w=m.failures;if(x===0)return y;for(var g=0,b=Object.keys(w);g<b.length;g++){var B,E=b[g],$=i[Number(E)];$!=null&&(B=w[E],delete w[E],w[$]=B)}throw new mn("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(y," operations failed"),w)})})})},_.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return o(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new mn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var v=_;function _(){}function D(e){function t(l,c){if(c){for(var C=arguments.length,S=new Array(C-1);--C;)S[C-1]=arguments[C];return n[l].subscribe.apply(null,S),e}if(typeof l=="string")return n[l]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(l,c,C){var S,y;if(typeof l!="object")return c=c||Gn,y={subscribers:[],fire:C=C||me,subscribe:function(m){y.subscribers.indexOf(m)===-1&&(y.subscribers.push(m),y.fire=c(y.fire,m))},unsubscribe:function(m){y.subscribers=y.subscribers.filter(function(x){return x!==m}),y.fire=y.subscribers.reduce(c,C)}},n[l]=t[l]=y;ve(S=l).forEach(function(m){var x=S[m];if(re(x))i(m,S[m][0],S[m][1]);else{if(x!=="asap")throw new Z.InvalidArgument("Invalid event config");var w=i(m,Mn,function(){for(var g=arguments.length,b=new Array(g);g--;)b[g]=arguments[g];w.subscribers.forEach(function(B){ma(function(){B.apply(null,b)})})})}})}}function L(e,t){return xt(t).from({prototype:e}),t}function N(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function X(e,t){e.filter=Qt(e.filter,t)}function U(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return Qt(a(),t())}:t,e.justLimit=n&&!a}function Q(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function he(e,t,n){var a=Q(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function ge(e,t,n,a){var s,i,l=e.replayFilter?Qt(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,C,S){var y,m;l&&!l(C,S,function(x){return C.stop(x)},function(x){return C.fail(x)})||((m=""+(y=C.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(y)),se(s,m))||(s[m]=!0,t(c,C,S))},Promise.all([e.or._iterate(i,n),We(he(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):We(he(e,a,n),Qt(e.algorithm,l),t,!e.keysOnly&&e.valueMapper)}function We(e,t,n,a){var s=ke(a?function(i,l,c){return n(a(i),l,c)}:n);return e.then(function(i){if(i)return i.start(function(){var l=function(){return i.continue()};t&&!t(i,function(c){return l=c},function(c){i.stop(c),l=me},function(c){i.fail(c),l=me})||s(i.value,i,function(c){return l=c}),l()})})}W.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Fe.bind(null,n.error)):n.table._trans("readonly",e).then(t)},W.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Fe.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},W.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Qt(t.algorithm,e)},W.prototype._iterate=function(e,t){return ge(this._ctx,e,t,this._ctx.table.core)},W.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&de(n,e),t._ctx=n,t},W.prototype.raw=function(){return this._ctx.valueMapper=null,this},W.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return ge(t,e,n,t.table.core)})},W.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return N(s,!0)?i.count({trans:n,query:{index:Q(s,i.schema),range:s.range}}).then(function(l){return Math.min(l,s.limit)}):(a=0,ge(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},W.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(C,S){return S?i(C[n[S]],S-1):C[a]}var l=this._ctx.dir==="next"?1:-1;function c(C,S){return oe(i(C,s),i(S,s))*l}return this.toArray(function(C){return C.sort(c)}).then(t)},W.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,l=t._ctx;return l.dir==="next"&&N(l,!0)&&0<l.limit?(a=l.valueMapper,s=Q(l,l.table.core.schema),l.table.core.query({trans:n,limit:l.limit,values:!0,query:{index:s,range:l.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],ge(l,function(c){return i.push(c)},n,l.table.core).then(function(){return i}))},e)},W.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,N(t)?U(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):U(t,function(){var n=e;return function(){return--n<0}})),this},W.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),U(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},W.prototype.until=function(e,t){return X(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},W.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},W.prototype.last=function(e){return this.reverse().first(e)},W.prototype.filter=function(e){var t;return X(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=Qt(t.isMatch,e),this},W.prototype.and=function(e){return this.filter(e)},W.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},W.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},W.prototype.desc=function(){return this.reverse()},W.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},W.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},W.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},W.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},W.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&N(t,!0)&&0<t.limit)return this._read(function(a){var s=Q(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},W.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},W.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},W.prototype.lastKey=function(e){return this.reverse().firstKey(e)},W.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},X(this._ctx,function(a){var a=a.primaryKey.toString(),s=se(e,a);return e[a]=!0,!s})),this},W.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(b,B){var E=B.failures;x+=b-B.numFailures;for(var $=0,T=ve(E);$<T.length;$++){var F=T[$];m.push(E[F])}}var i=typeof e=="function"?e:function(b){return d(b,e)},l=n.table.core,y=l.schema.primaryKey,c=y.outbound,C=y.extractKey,S=200,y=t.db._options.modifyChunkSize,m=(y&&(S=typeof y=="object"?y[l.name]||y["*"]||200:y),[]),x=0,w=[],g=e===ze;return t.clone().primaryKeys().then(function(b){function B($){var T=Math.min(S,b.length-$),F=b.slice($,$+T);return(g?Promise.resolve([]):l.getMany({trans:a,keys:F,cache:"immutable"})).then(function(R){var V=[],I=[],z=c?[]:null,r=g?F:[];if(!g)for(var f=0;f<T;++f){var M=R[f],K={value:rn(M),primKey:b[$+f]};i.call(K,K.value,K)!==!1&&(K.value==null?r.push(b[$+f]):c||oe(C(M),C(K.value))===0?(I.push(K.value),c&&z.push(b[$+f])):(r.push(b[$+f]),V.push(K.value)))}return Promise.resolve(0<V.length&&l.mutate({trans:a,type:"add",values:V}).then(function(J){for(var Y in J.failures)r.splice(parseInt(Y),1);s(V.length,J)})).then(function(){return(0<I.length||E&&typeof e=="object")&&l.mutate({trans:a,type:"put",keys:z,values:I,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<$}).then(function(J){return s(I.length,J)})}).then(function(){return(0<r.length||E&&g)&&l.mutate({trans:a,type:"delete",keys:r,criteria:E,isAdditionalChunk:0<$}).then(function(J){return o(n.table,r,J)}).then(function(J){return s(r.length,J)})}).then(function(){return b.length>$+T&&B($+S)})})}var E=N(n)&&n.limit===1/0&&(typeof e!="function"||g)&&{index:n.index,range:n.range};return B(0).then(function(){if(0<m.length)throw new _n("Error modifying one or more objects",m,x,w);return b.length})})})},W.prototype.delete=function(){var e=this._ctx,t=e.range;return!N(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(ze):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(C){var c=C.failures,C=C.numFailures;if(C)throw new _n("Could not delete some values",Object.keys(c).map(function(S){return c[S]}),i-C);return i-C})})})};var Ke=W;function W(){}var ze=function(e,t){return t.value=null};function Le(e,t){return e<t?-1:e===t?0:1}function Ge(e,t){return t<e?-1:e===t?0:1}function Me(e,t,n){return e=e instanceof nt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function je(e){return new e.Collection(e,function(){return ft("")}).limit(0)}function j(w,t,n,a){var s,i,l,c,C,S,y,m=n.length;if(!n.every(function(b){return typeof b=="string"}))return Me(w,ja);function x(b){s=b==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},i=b==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},l=b==="next"?Le:Ge;var B=n.map(function(E){return{lower:i(E),upper:s(E)}}).sort(function(E,$){return l(E.lower,$.lower)});c=B.map(function(E){return E.upper}),C=B.map(function(E){return E.lower}),y=(S=b)==="next"?"":a}x("next");var w=new w.Collection(w,function(){return $e(c[0],C[m-1]+a)}),g=(w._ondirectionchange=function(b){x(b)},0);return w._addAlgorithm(function(b,B,E){var $=b.key;if(typeof $=="string"){var T=i($);if(t(T,C,g))return!0;for(var F=null,R=g;R<m;++R){var V=((I,z,r,f,M,K)=>{for(var J=Math.min(I.length,f.length),Y=-1,ee=0;ee<J;++ee){var le=z[ee];if(le!==f[ee])return M(I[ee],r[ee])<0?I.substr(0,ee)+r[ee]+r.substr(ee+1):M(I[ee],f[ee])<0?I.substr(0,ee)+f[ee]+r.substr(ee+1):0<=Y?I.substr(0,Y)+z[Y]+r.substr(Y+1):null;M(I[ee],le)<0&&(Y=ee)}return J<f.length&&K==="next"?I+r.substr(I.length):J<I.length&&K==="prev"?I.substr(0,r.length):Y<0?null:I.substr(0,Y)+f[Y]+r.substr(Y+1)})($,T,c[R],C[R],l,S);V===null&&F===null?g=R+1:(F===null||0<l(F,V))&&(F=V)}B(F!==null?function(){b.continue(F+y)}:E)}return!1}),w}function $e(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function ft(e){return{type:1,lower:e,upper:e}}Object.defineProperty(te.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),te.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?je(this):new this.Collection(this,function(){return $e(e,t,!n,!a)})}catch{return Me(this,Lt)}},te.prototype.equals=function(e){return e==null?Me(this,Lt):new this.Collection(this,function(){return ft(e)})},te.prototype.above=function(e){return e==null?Me(this,Lt):new this.Collection(this,function(){return $e(e,void 0,!0)})},te.prototype.aboveOrEqual=function(e){return e==null?Me(this,Lt):new this.Collection(this,function(){return $e(e,void 0,!1)})},te.prototype.below=function(e){return e==null?Me(this,Lt):new this.Collection(this,function(){return $e(void 0,e,!1,!0)})},te.prototype.belowOrEqual=function(e){return e==null?Me(this,Lt):new this.Collection(this,function(){return $e(void 0,e)})},te.prototype.startsWith=function(e){return typeof e!="string"?Me(this,ja):this.between(e,e+Xt,!0,!0)},te.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):j(this,function(t,n){return t.indexOf(n[0])===0},[e],Xt)},te.prototype.equalsIgnoreCase=function(e){return j(this,function(t,n){return t===n[0]},[e],"")},te.prototype.anyOfIgnoreCase=function(){var e=_t.apply(sn,arguments);return e.length===0?je(this):j(this,function(t,n){return n.indexOf(t)!==-1},e,"")},te.prototype.startsWithAnyOfIgnoreCase=function(){var e=_t.apply(sn,arguments);return e.length===0?je(this):j(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,Xt)},te.prototype.anyOf=function(){var e,t,n=this,a=_t.apply(sn,arguments),s=this._cmp;try{a.sort(s)}catch{return Me(this,Lt)}return a.length===0?je(this):((e=new this.Collection(this,function(){return $e(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,l,c){for(var C=i.key;0<s(C,a[t]);)if(++t===a.length)return l(c),!1;return s(C,a[t])===0||(l(function(){i.continue(a[t])}),!1)}),e)},te.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},te.prototype.noneOf=function(){var e=_t.apply(sn,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Me(this,Lt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},te.prototype.inAnyRange=function(e,E){var n=this,a=this._cmp,s=this._ascending,i=this._descending,l=this._min,c=this._max;if(e.length===0)return je(this);if(!e.every(function($){return $[0]!==void 0&&$[1]!==void 0&&s($[0],$[1])<=0}))return Me(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var C=!E||E.includeLowers!==!1,S=E&&E.includeUppers===!0,y,m=s;function x($,T){return m($[0],T[0])}try{(y=e.reduce(function($,T){for(var F=0,R=$.length;F<R;++F){var V=$[F];if(a(T[0],V[1])<0&&0<a(T[1],V[0])){V[0]=l(V[0],T[0]),V[1]=c(V[1],T[1]);break}}return F===R&&$.push(T),$},[])).sort(x)}catch{return Me(this,Lt)}var w=0,g=S?function($){return 0<s($,y[w][1])}:function($){return 0<=s($,y[w][1])},b=C?function($){return 0<i($,y[w][0])}:function($){return 0<=i($,y[w][0])},B=g,E=new this.Collection(this,function(){return $e(y[0][0],y[y.length-1][1],!C,!S)});return E._ondirectionchange=function($){m=$==="next"?(B=g,s):(B=b,i),y.sort(x)},E._addAlgorithm(function($,T,F){for(var R,V=$.key;B(V);)if(++w===y.length)return T(F),!1;return!g(R=V)&&!b(R)||(n._cmp(V,y[w][1])===0||n._cmp(V,y[w][0])===0||T(function(){m===s?$.continue(y[w][0]):$.continue(y[w][1])}),!1)}),E},te.prototype.startsWithAnyOf=function(){var e=_t.apply(sn,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?je(this):this.inAnyRange(e.map(function(t){return[t,t+Xt]})):Me(this,"startsWithAnyOf() only works with strings")};var nt=te;function te(){}function Ce(e){return ke(function(t){return Je(t),e(t.target.error),!1})}function Je(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var fe="storagemutated",Pe="x-storagemutated-1",Se=D(null,fe),at=(ye.prototype._lock=function(){return Bn(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},ye.prototype._unlock=function(){if(Bn(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{un(e[1],e[0])}catch{}}return this},ye.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},ye.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Bn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(a);case"MissingAPIError":throw new Z.MissingAPI(a.message,a);default:throw new Z.OpenFailed(a)}if(!this.active)throw new Z.TransactionInactive;Bn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ke(function(s){Je(s),t._reject(e.error)}),e.onabort=ke(function(s){Je(s),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=ke(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&Se.storagemutated.fire(e.mutatedParts)})}return this},ye.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Fe(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new A(function(i,l){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,l)},H])}):n?Gt(function(){var i=new A(function(l,c){s._lock();var C=t(l,c,s);C&&C.then&&C.then(l,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new A(function(i,l){var c=t(i,l,s);c&&c.then&&c.then(i,l)}))._lib=!0,a):Fe(new Z.TransactionInactive)},ye.prototype._root=function(){return this.parent?this.parent._root():this},ye.prototype.waitFor=function(e){var t,n=this._root(),a=A.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new A(function(i,l){a.then(function(c){return n._waitingQueue.push(ke(i.bind(null,c)))},function(c){return n._waitingQueue.push(ke(l.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},ye.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},ye.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(se(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},ye);function ye(){}function Ue(e,t,n,a,s,i,l,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!l?"&":"")+(a?"*":"")+(s?"++":"")+jt(t),type:c}}function jt(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function $t(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,l){return i=a(i,l),i&&(s[i[0]]=i[1]),s},{}))};var a}var He=function(e){try{return e.only([[]]),He=function(){return[[]]},[[]]}catch{return He=function(){return Xt},Xt}};function mt(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return It(n,t)}:function(n){return It(n,e)};var t}function St(e){return[].slice.call(e)}var Be=0;function be(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Ie(e,t,C){function a(g){if(g.type===3)return null;if(g.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=g.lower,x=g.upper,w=g.lowerOpen,g=g.upperOpen;return m===void 0?x===void 0?null:t.upperBound(x,!!g):x===void 0?t.lowerBound(m,!!w):t.bound(m,x,!!w,!!g)}function s(y){var m,x=y.name;return{name:x,schema:y,mutate:function(w){var g=w.trans,b=w.type,B=w.keys,E=w.values,$=w.range;return new Promise(function(T,F){T=ke(T);var R=g.objectStore(x),V=R.keyPath==null,I=b==="put"||b==="add";if(!I&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var z,r=(B||E||{length:1}).length;if(B&&E&&B.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(r===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function f(pe){++J,Je(pe)}var M=[],K=[],J=0;if(b==="deleteRange"){if($.type===4)return T({numFailures:J,failures:K,results:[],lastResult:void 0});$.type===3?M.push(z=R.clear()):M.push(z=R.delete(a($)))}else{var V=I?V?[E,B]:[E,null]:[B,null],Y=V[0],ee=V[1];if(I)for(var le=0;le<r;++le)M.push(z=ee&&ee[le]!==void 0?R[b](Y[le],ee[le]):R[b](Y[le])),z.onerror=f;else for(le=0;le<r;++le)M.push(z=R[b](Y[le])),z.onerror=f}function ue(pe){pe=pe.target.result,M.forEach(function(st,Qe){return st.error!=null&&(K[Qe]=st.error)}),T({numFailures:J,failures:K,results:b==="delete"?B:M.map(function(st){return st.result}),lastResult:pe})}z.onerror=function(pe){f(pe),ue(pe)},z.onsuccess=ue})},getMany:function(w){var g=w.trans,b=w.keys;return new Promise(function(B,E){B=ke(B);for(var $,T=g.objectStore(x),F=b.length,R=new Array(F),V=0,I=0,z=function(M){M=M.target,R[M._pos]=M.result,++I===V&&B(R)},r=Ce(E),f=0;f<F;++f)b[f]!=null&&(($=T.get(b[f]))._pos=f,$.onsuccess=z,$.onerror=r,++V);V===0&&B(R)})},get:function(w){var g=w.trans,b=w.key;return new Promise(function(B,E){B=ke(B);var $=g.objectStore(x).get(b);$.onsuccess=function(T){return B(T.target.result)},$.onerror=Ce(E)})},query:(m=c,function(w){return new Promise(function(g,b){g=ke(g);var B,E,$,I=w.trans,T=w.values,F=w.limit,V=w.query,R=F===1/0?void 0:F,z=V.index,V=V.range,I=I.objectStore(x),I=z.isPrimaryKey?I:I.index(z.name),z=a(V);if(F===0)return g({result:[]});m?((V=T?I.getAll(z,R):I.getAllKeys(z,R)).onsuccess=function(r){return g({result:r.target.result})},V.onerror=Ce(b)):(B=0,E=!T&&"openKeyCursor"in I?I.openKeyCursor(z):I.openCursor(z),$=[],E.onsuccess=function(r){var f=E.result;return!f||($.push(T?f.value:f.primaryKey),++B===F)?g({result:$}):void f.continue()},E.onerror=Ce(b))})}),openCursor:function(w){var g=w.trans,b=w.values,B=w.query,E=w.reverse,$=w.unique;return new Promise(function(T,F){T=ke(T);var I=B.index,R=B.range,V=g.objectStore(x),V=I.isPrimaryKey?V:V.index(I.name),I=E?$?"prevunique":"prev":$?"nextunique":"next",z=!b&&"openKeyCursor"in V?V.openKeyCursor(a(R),I):V.openCursor(a(R),I);z.onerror=Ce(F),z.onsuccess=ke(function(r){var f,M,K,J,Y=z.result;Y?(Y.___id=++Be,Y.done=!1,f=Y.continue.bind(Y),M=(M=Y.continuePrimaryKey)&&M.bind(Y),K=Y.advance.bind(Y),J=function(){throw new Error("Cursor not stopped")},Y.trans=g,Y.stop=Y.continue=Y.continuePrimaryKey=Y.advance=function(){throw new Error("Cursor not started")},Y.fail=ke(F),Y.next=function(){var ee=this,le=1;return this.start(function(){return le--?ee.continue():ee.stop()}).then(function(){return ee})},Y.start=function(ee){function le(){if(z.result)try{ee()}catch(pe){Y.fail(pe)}else Y.done=!0,Y.start=function(){throw new Error("Cursor behind last entry")},Y.stop()}var ue=new Promise(function(pe,st){pe=ke(pe),z.onerror=Ce(st),Y.fail=st,Y.stop=function(Qe){Y.stop=Y.continue=Y.continuePrimaryKey=Y.advance=J,pe(Qe)}});return z.onsuccess=ke(function(pe){z.onsuccess=le,le()}),Y.continue=f,Y.continuePrimaryKey=M,Y.advance=K,le(),ue},T(Y)):T(null)},F)})},count:function(w){var g=w.query,b=w.trans,B=g.index,E=g.range;return new Promise(function($,T){var F=b.objectStore(x),F=B.isPrimaryKey?F:F.index(B.name),R=a(E),R=R?F.count(R):F.count();R.onsuccess=ke(function(V){return $(V.target.result)}),R.onerror=Ce(T)})}}}i=C,l=St((C=e).objectStoreNames);var i,C={schema:{name:C.name,tables:l.map(function(y){return i.objectStore(y)}).map(function(y){var m=y.keyPath,x=y.autoIncrement,g=re(m),w={},g={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:g,keyPath:m,autoIncrement:x,unique:!0,extractKey:mt(m)},indexes:St(y.indexNames).map(function(b){return y.index(b)}).map(function($){var T=$.name,B=$.unique,E=$.multiEntry,$=$.keyPath,T={name:T,compound:re($),keyPath:$,unique:B,multiEntry:E,extractKey:mt($)};return w[be($)]=T}),getIndexByKeyPath:function(b){return w[be(b)]}};return w[":id"]=g.primaryKey,m!=null&&(w[be(m)]=g.primaryKey),g})},hasGetAll:0<l.length&&"getAll"in i.objectStore(l[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},l=C.schema,c=C.hasGetAll,C=l.tables.map(s),S={};return C.forEach(function(y){return S[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if(S[y])return S[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:He(t),schema:l}}function Re(e,t,n,a){return n=n.IDBKeyRange,t=Ie(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,G(G({},s),i(s))},t)}}function Ve(e,t){var n=t.db,n=Re(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function gt(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(l){var c=(function C(S,y){return va(S,y)||(S=Ze(S))&&C(S,y)})(l,s);(!c||"value"in c&&c.value===void 0)&&(l===e.Transaction.prototype||l instanceof e.Transaction?lt(l,s,{get:function(){return this.table(s)},set:function(C){ot(this,s,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):l[s]=new e.Table(s,i))})})}function At(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Rt(e,t){return e._cfg.version-t._cfg.version}function Vt(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=$t("$meta",kn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),l=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=H.transless||H;Gt(function(){if(H.trans=i,H.transless=c,t!==0)return Ve(e,n),S=t,((C=i).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(y){return y??S}):A.resolve(S)).then(function(B){var m=e,x=B,w=i,g=n,b=[],B=m._versions,E=m._dbSchema=wn(0,m.idbdb,g);return(B=B.filter(function($){return $._cfg.version>=x})).length===0?A.resolve():(B.forEach(function($){b.push(function(){var T,F,R,V=E,I=$._cfg.dbschema,z=(Zt(m,V,g),Zt(m,I,g),E=m._dbSchema=I,q(V,I)),r=(z.add.forEach(function(f){ie(g,f[0],f[1].primKey,f[1].indexes)}),z.change.forEach(function(f){if(f.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var M=g.objectStore(f.name);f.add.forEach(function(K){return Yt(M,K)}),f.change.forEach(function(K){M.deleteIndex(K.name),Yt(M,K)}),f.del.forEach(function(K){return M.deleteIndex(K)})}),$._cfg.contentUpgrade);if(r&&$._cfg.version>x)return Ve(m,g),w._memoizedTables={},T=Fa(I),z.del.forEach(function(f){T[f]=V[f]}),At(m,[m.Transaction.prototype]),gt(m,[m.Transaction.prototype],ve(T),T),w.schema=T,(F=ga(r))&&Cn(),I=A.follow(function(){var f;(R=r(w))&&F&&(f=Jt.bind(null,null),R.then(f,f))}),R&&typeof R.then=="function"?A.resolve(R):I.then(function(){return R})}),b.push(function(T){var F,R,V=$._cfg.dbschema;F=V,R=T,[].slice.call(R.db.objectStoreNames).forEach(function(I){return F[I]==null&&R.db.deleteObjectStore(I)}),At(m,[m.Transaction.prototype]),gt(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),w.schema=m._dbSchema}),b.push(function(T){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===$._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(F){return F!=="$meta"})):T.objectStore("$meta").put($._cfg.version,"version"))})}),(function $(){return b.length?A.resolve(b.shift()(w.idbtrans)).then($):A.resolve()})().then(function(){In(E,g)}))}).catch(l);var C,S;ve(s).forEach(function(y){ie(n,y,s[y].primKey,s[y].indexes)}),Ve(e,n),A.follow(function(){return e.on.populate.fire(i)}).catch(l)})}function P(e,t){In(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=wn(0,e.idbdb,t);Zt(e,e._dbSchema,t);for(var a=0,s=q(n,e._dbSchema).change;a<s.length;a++){var i=(l=>{if(l.change.length||l.recreate)return console.warn("Unable to patch indexes of table ".concat(l.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(l.name);l.add.forEach(function(C){Pt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name,".").concat(C.src)),Yt(c,C)})})(s[a]);if(typeof i=="object")return i.value}}function q(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var l={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)l.recreate=!0,a.change.push(l);else{var c=s.idxByName,C=i.idxByName,S=void 0;for(S in c)C[S]||l.del.push(S);for(S in C){var y=c[S],m=C[S];y?y.src!==m.src&&l.change.push(m):l.add.push(m)}(0<l.del.length||0<l.add.length||0<l.change.length)&&a.change.push(l)}}else a.add.push([n,i])}return a}function ie(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return Yt(s,i)})}function In(e,t){ve(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(Pt&&console.debug("Dexie: Creating missing table",n),ie(t,n,e[n].primKey,e[n].indexes))})}function Yt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function wn(e,t,n){var a={};return pn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),l=Ue(jt(S=i.keyPath),S||"",!0,!1,!!i.autoIncrement,S&&typeof S!="string",!0),c=[],C=0;C<i.indexNames.length;++C){var y=i.index(i.indexNames[C]),S=y.keyPath,y=Ue(y.name,S,!!y.unique,!!y.multiEntry,!1,S&&typeof S!="string",!1);c.push(y)}a[s]=$t(s,l,c)}),a}function Zt(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],l=n.objectStore(i);e._hasGetAll="getAll"in l;for(var c=0;c<l.indexNames.length;++c){var C,S=l.indexNames[c],y=l.index(S).keyPath,y=typeof y=="string"?y:"["+pn(y).join("+")+"]";t[i]&&(C=t[i].idxByName[y])&&(C.name=S,delete t[i].idxByName[y],t[i].idxByName[S]=C)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function kn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Ue(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),re(i),n===0,a)})}$n.prototype._createTableSchema=$t,$n.prototype._parseIndexSyntax=kn,$n.prototype._parseStoresSpec=function(e,t){var n=this;ve(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new Z.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");s.forEach(function(l){if(l.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},$n.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?de(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){de(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,At(t,[t._allTables,t,t.Transaction.prototype]),gt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],ve(s),s),t._storeNames=ve(s),this},$n.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Ae(this._cfg.contentUpgrade||me,e),this};var De=$n;function $n(){}function ra(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Oe(ta,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function sa(e){return e&&typeof e.databases=="function"}function ia(e){return Gt(function(){return H.letThrough=!0,e()})}function $a(e){return!("from"in e)}var Xe=function(e,t){var n;if(!this)return n=new Xe,e&&"d"in e&&de(n,e),n;de(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function ht(e,t,n){var a=oe(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if($a(e))return de(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(oe(n,e.from)<0)return a?ht(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Ba(e);if(0<oe(t,e.to))return s?ht(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Ba(e);oe(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<oe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&bt(e,a),s&&t&&bt(e,s)}}function bt(e,t){$a(t)||(function n(a,s){var i=s.from,l=s.l,c=s.r;ht(a,i,s.to),l&&n(a,l),c&&n(a,c)})(e,t)}function Sa(e,t){var n=Nn(t),a=n.next();if(!a.done)for(var s=a.value,i=Nn(e),l=i.next(s.from),c=l.value;!a.done&&!l.done;){if(oe(c.from,s.to)<=0&&0<=oe(c.to,s.from))return!0;oe(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(l=i.next(s.from)).value}return!1}function Nn(e){var t=$a(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&oe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||oe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Ba(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=G({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Ea(n)),e.d=Ea(e)}function Ea(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function qn(e,t){return ve(t).forEach(function(n){e[n]?bt(e[n],t[n]):e[n]=(function a(s){var i,l,c={};for(i in s)se(s,i)&&(l=s[i],c[i]=!l||typeof l!="object"||vn.has(l.constructor)?l:a(l));return c})(t[n])}),e}function oa(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Sa(t[n],e[n])})}vt(Xe.prototype,((tt={add:function(e){return bt(this,e),this},addKey:function(e){return ht(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return ht(t,n,n)}),this},hasKey:function(e){var t=Nn(this).next(e).value;return t&&oe(t.from,e)<=0&&0<=oe(t.to,e)}})[ut]=function(){return Nn(this)},tt));var en={},_a={},Kn=!1;function Ln(e){qn(_a,e),Kn||(Kn=!0,setTimeout(function(){Kn=!1,Bt(_a,!(_a={}))},0))}function Bt(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(en);a<s.length;a++)za(c=s[a],e,n,t);else for(var i in e){var l,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(l=i[1],i=i[2],c=en["idb://".concat(l,"/").concat(i)])&&za(c,e,n,t)}n.forEach(function(C){return C()})}function za(e,t,n,a){for(var s=[],i=0,l=Object.entries(e.queries.query);i<l.length;i++){for(var c=l[i],C=c[0],S=[],y=0,m=c[1];y<m.length;y++){var x=m[y];oa(t,x.obsSet)?x.subscribers.forEach(function(B){return n.add(B)}):a&&S.push(x)}a&&s.push([C,S])}if(a)for(var w=0,g=s;w<g.length;w++){var b=g[w],C=b[0],S=b[1];e.queries.query[C]=S}}function tn(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Fe(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function l(){if(t.openCanceller!==a)throw new Z.DatabaseClosed("db.open() was cancelled")}function c(){return new A(function(x,w){if(l(),!n)throw new Z.MissingAPI;var g=e.name,b=t.autoSchema||!s?n.open(g):n.open(g,s);if(!b)throw new Z.MissingAPI;b.onerror=Ce(w),b.onblocked=ke(e._fireOnBlocked),b.onupgradeneeded=ke(function(B){var E;y=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=Je,y.abort(),b.result.close(),(E=n.deleteDatabase(g)).onsuccess=E.onerror=ke(function(){w(new Z.NoSuchDatabase("Database ".concat(g," doesnt exist")))})):(y.onerror=Ce(w),E=B.oldVersion>Math.pow(2,62)?0:B.oldVersion,m=E<1,e.idbdb=b.result,i&&P(e,y),Vt(e,E/10,y,w))},w),b.onsuccess=ke(function(){y=null;var B,E,$,T,F,R,V=e.idbdb=b.result,I=pn(V.objectStoreNames);if(0<I.length)try{var z=V.transaction((F=I).length===1?F[0]:F,"readonly");if(t.autoSchema)R=V,T=z,($=e).verno=R.version/10,T=$._dbSchema=wn(0,R,T),$._storeNames=pn(R.objectStoreNames,0),gt($,[$._allTables],ve(T),T);else if(Zt(e,e._dbSchema,z),E=z,((E=q(wn(0,(B=e).idbdb,E),B._dbSchema)).add.length||E.change.some(function(r){return r.add.length||r.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),s=V.version+1,i=!0,x(c());Ve(e,z)}catch{}xn.push(e),V.onversionchange=ke(function(r){t.vcFired=!0,e.on("versionchange").fire(r)}),V.onclose=ke(function(){e.close({disableAutoOpen:!1})}),m&&(I=e._deps,F=g,sa(R=I.indexedDB)||F===ta||ra(R,I.IDBKeyRange).put({name:F}).catch(me)),x()},w)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return A.reject(x)})}var C,S=t.dbReadyResolve,y=null,m=!1;return A.race([a,(typeof navigator>"u"?A.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function w(){return indexedDB.databases().finally(x)}C=setInterval(w,100),w()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(c)]).then(function(){return l(),t.onReadyBeingFired=[],A.resolve(ia(function(){return e.on.ready.fire(e.vip)})).then(function x(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(Ae,me),t.onReadyBeingFired=[],A.resolve(ia(function(){return w(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{y&&y.abort()}catch{}return a===t.openCanceller&&e._close(),Fe(x)}).finally(function(){t.openComplete=!0,S()}).then(function(){var x;return m&&(x={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(g){g.name&&(x["idb://".concat(e.name,"/").concat(w.name,"/").concat(g.name)]=new Xe(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(w.name,"/")]=x["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new Xe(-1/0,[[[]]])}),Se(fe).fire(x),Bt(x,!0)),e})}function Ma(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),C=c.value;return c.done?C:C&&typeof C.then=="function"?C.then(n,a):re(C)?Promise.all(C).then(n,a):n(C)}}return s(t)()}function la(e,t,n){for(var a=re(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Ua={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return G(G({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function l(x,w,g){var $=be(x),b=s[$]=s[$]||[],B=x==null?0:typeof x=="string"?1:x.length,E=0<w,$=G(G({},g),{name:E?"".concat($,"(virtual-from:").concat(g.name,")"):g.name,lowLevelIndex:g,isVirtual:E,keyTail:w,keyLength:B,extractKey:mt(x),unique:!E&&g.unique});return b.push($),$.isPrimaryKey||i.push($),1<B&&l(B===2?x[0]:x.slice(0,B-1),w+1,g),b.sort(function(T,F){return T.keyTail-F.keyTail}),$}var c=l(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var C=0,S=a.indexes;C<S.length;C++){var y=S[C];l(y.keyPath,0,y)}function m(x){var w,g=x.query.index;return g.isVirtual?G(G({},x),{query:{index:g.lowLevelIndex,range:(w=x.query.range,g=g.keyTail,{type:w.type===1?2:w.type,lower:la(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,g),lowerOpen:!0,upper:la(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,g),upperOpen:!0})}}):x}return G(G({},n),{schema:G(G({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(x){return(x=s[be(x)])&&x[0]}}),count:function(x){return n.count(m(x))},query:function(x){return n.query(m(x))},openCursor:function(x){var w=x.query.index,g=w.keyTail,b=w.keyLength;return w.isVirtual?n.openCursor(m(x)).then(function(E){return E&&B(E)}):n.openCursor(x);function B(E){return Object.create(E,{continue:{value:function($){$!=null?E.continue(la($,x.reverse?e.MAX_KEY:e.MIN_KEY,g)):x.unique?E.continue(E.key.slice(0,b).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,g)):E.continue()}},continuePrimaryKey:{value:function($,T){E.continuePrimaryKey(la($,e.MAX_KEY,g),T)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var $=E.key;return b===1?$[0]:$.slice(0,b)}},value:{get:function(){return E.value}}})}}})}})}};function ua(e,t,n,a){return n=n||{},a=a||"",ve(e).forEach(function(s){var i,l,c;se(t,s)?(i=e[s],l=t[s],typeof i=="object"&&typeof l=="object"&&i&&l?(c=zn(i))!==zn(l)?n[a+s]=t[s]:c==="Object"?ua(i,l,n,a+s+"."):i!==l&&(n[a+s]=t[s]):i!==l&&(n[a+s]=t[s])):n[a+s]=void 0}),ve(t).forEach(function(s){se(e,s)||(n[a+s]=t[s])}),n}function ca(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Wa={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return G(G({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return G(G({},n),{mutate:function(s){var i=H.trans,l=i.table(t).hook,c=l.deleting,C=l.creating,S=l.updating;switch(s.type){case"add":if(C.fire===me)break;return i._promise("readwrite",function(){return y(s)},!0);case"put":if(C.fire===me&&S.fire===me)break;return i._promise("readwrite",function(){return y(s)},!0);case"delete":if(c.fire===me)break;return i._promise("readwrite",function(){return y(s)},!0);case"deleteRange":if(c.fire===me)break;return i._promise("readwrite",function(){return(function m(x,w,g){return n.query({trans:x,values:!1,query:{index:a,range:w},limit:g}).then(function(b){var B=b.result;return y({type:"delete",keys:B,trans:x}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):B.length<g?{failures:[],numFailures:0,lastResult:void 0}:m(x,G(G({},w),{lower:B[B.length-1],lowerOpen:!0}),g)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function y(m){var x,w,g,b=H.trans,B=m.keys||ca(a,m);if(B)return(m=m.type==="add"||m.type==="put"?G(G({},m),{keys:B}):G({},m)).type!=="delete"&&(m.values=ce([],m.values)),m.keys&&(m.keys=ce([],m.keys)),x=n,g=B,((w=m).type==="add"?Promise.resolve([]):x.getMany({trans:w.trans,keys:g,cache:"immutable"})).then(function(E){var $=B.map(function(T,F){var R,V,I,z=E[F],r={onerror:null,onsuccess:null};return m.type==="delete"?c.fire.call(r,T,z,b):m.type==="add"||z===void 0?(R=C.fire.call(r,T,m.values[F],b),T==null&&R!=null&&(m.keys[F]=T=R,a.outbound||et(m.values[F],a.keyPath,T))):(R=ua(z,m.values[F]),(V=S.fire.call(r,R,T,z,b))&&(I=m.values[F],Object.keys(V).forEach(function(f){se(I,f)?I[f]=V[f]:et(I,f,V[f])}))),r});return n.mutate(m).then(function(T){for(var F=T.failures,R=T.results,V=T.numFailures,T=T.lastResult,I=0;I<B.length;++I){var z=(R||B)[I],r=$[I];z==null?r.onerror&&r.onerror(F[I]):r.onsuccess&&r.onsuccess(m.type==="put"&&E[I]?m.values[I]:z)}return{failures:F,results:R,numFailures:V,lastResult:T}}).catch(function(T){return $.forEach(function(F){return F.onerror&&F.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function Pa(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)oe(t.keys[s],e[i])===0&&(a.push(n?rn(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var dr={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return G(G({},n),{getMany:function(a){var s;return a.cache?(s=Pa(a.keys,a.trans._cache,a.cache==="clone"))?A.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?rn(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ga(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Ja(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var fr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Xe(e.MIN_KEY,e.MAX_KEY);return G(G({},e),{transaction:function(a,s,i){if(H.subscr&&s!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(a,s,i)},table:function(a){function s(B){var b,B=B.query;return[b=B.index,new Xe((b=(B=B.range).lower)!=null?b:e.MIN_KEY,(b=B.upper)!=null?b:e.MAX_KEY)]}var i=e.table(a),l=i.schema,c=l.primaryKey,C=l.indexes,S=c.extractKey,y=c.outbound,m=c.autoIncrement&&C.filter(function(g){return g.compound&&g.keyPath.includes(c.keyPath)}),x=G(G({},i),{mutate:function(g){function b(M){return M="idb://".concat(t,"/").concat(a,"/").concat(M),F[M]||(F[M]=new Xe)}var B,E,$,T=g.trans,F=g.mutatedParts||(g.mutatedParts={}),R=b(""),V=b(":dels"),I=g.type,r=g.type==="deleteRange"?[g.range]:g.type==="delete"?[g.keys]:g.values.length<50?[ca(c,g).filter(function(M){return M}),g.values]:[],z=r[0],r=r[1],f=g.trans._cache;return re(z)?(R.addKeys(z),(I=I==="delete"||z.length===r.length?Pa(z,f):null)||V.addKeys(z),(I||r)&&(B=b,E=I,$=r,l.indexes.forEach(function(M){var K=B(M.name||"");function J(ee){return ee!=null?M.extractKey(ee):null}function Y(ee){M.multiEntry&&re(ee)?ee.forEach(function(le){return K.addKey(le)}):K.addKey(ee)}(E||$).forEach(function(ee,pe){var ue=E&&J(E[pe]),pe=$&&J($[pe]);oe(ue,pe)!==0&&(ue!=null&&Y(ue),pe!=null)&&Y(pe)})}))):z?(r={from:(f=z.lower)!=null?f:e.MIN_KEY,to:(I=z.upper)!=null?I:e.MAX_KEY},V.add(r),R.add(r)):(R.add(n),V.add(n),l.indexes.forEach(function(M){return b(M.name).add(n)})),i.mutate(g).then(function(M){return!z||g.type!=="add"&&g.type!=="put"||(R.addKeys(M.results),m&&m.forEach(function(K){for(var J=g.values.map(function(ue){return K.extractKey(ue)}),Y=K.keyPath.findIndex(function(ue){return ue===c.keyPath}),ee=0,le=M.results.length;ee<le;++ee)J[ee][Y]=M.results[ee];b(K.name).addKeys(J)})),T.mutatedParts=qn(T.mutatedParts||{},F),M})}}),w={get:function(g){return[c,new Xe(g.key)]},getMany:function(g){return[c,new Xe().addKeys(g.keys)]},count:s,query:s,openCursor:s};return ve(w).forEach(function(g){x[g]=function(b){var B=H.subscr,E=!!B,$=Ga(H,i)&&Ja(g,b)?b.obsSet={}:B;if(E){var T,B=function(r){return r="idb://".concat(t,"/").concat(a,"/").concat(r),$[r]||($[r]=new Xe)},F=B(""),R=B(":dels"),E=w[g](b),V=E[0],E=E[1];if((g==="query"&&V.isPrimaryKey&&!b.values?R:B(V.name||"")).add(E),!V.isPrimaryKey){if(g!=="count")return T=g==="query"&&y&&b.values&&i.query(G(G({},b),{values:!1})),i[g].apply(this,arguments).then(function(r){if(g==="query"){if(y&&b.values)return T.then(function(J){return J=J.result,F.addKeys(J),r});var f=b.values?r.result.map(S):r.result;(b.values?F:R).addKeys(f)}else{var M,K;if(g==="openCursor")return K=b.values,(M=r)&&Object.create(M,{key:{get:function(){return R.addKey(M.primaryKey),M.key}},primaryKey:{get:function(){var J=M.primaryKey;return R.addKey(J),J}},value:{get:function(){return K&&F.addKey(M.primaryKey),M.value}}})}return r});R.add(n)}}return i[g].apply(this,arguments)}}),x}})}};function Ha(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=G({},t),re(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&re(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function dn(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<oe(n,a.lower):0<=oe(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?oe(n,a.upper)<0:oe(n,a.upper)<=0));var n,a}function Xa(e,t,n,a,s,i){var l,c,C,S,y,m;return!n||n.length===0||(l=t.query.index,c=l.multiEntry,C=t.query.range,S=a.schema.primaryKey.extractKey,y=l.extractKey,m=(l.lowLevelIndex||l).extractKey,(a=n.reduce(function(x,w){var g=x,b=[];if(w.type==="add"||w.type==="put")for(var B=new Xe,E=w.values.length-1;0<=E;--E){var $,T=w.values[E],F=S(T);!B.hasKey(F)&&($=y(T),c&&re($)?$.some(function(r){return dn(r,C)}):dn($,C))&&(B.addKey(F),b.push(T))}switch(w.type){case"add":var R=new Xe().addKeys(t.values?x.map(function(f){return S(f)}):x),g=x.concat(t.values?b.filter(function(f){return f=S(f),!R.hasKey(f)&&(R.addKey(f),!0)}):b.map(function(f){return S(f)}).filter(function(f){return!R.hasKey(f)&&(R.addKey(f),!0)}));break;case"put":var V=new Xe().addKeys(w.values.map(function(f){return S(f)}));g=x.filter(function(f){return!V.hasKey(t.values?S(f):f)}).concat(t.values?b:b.map(function(f){return S(f)}));break;case"delete":var I=new Xe().addKeys(w.keys);g=x.filter(function(f){return!I.hasKey(t.values?S(f):f)});break;case"deleteRange":var z=w.range;g=x.filter(function(f){return!dn(S(f),z)})}return g},e))===e)?e:(a.sort(function(x,w){return oe(m(x),m(w))||oe(S(x),S(w))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function Oa(e,t){return oe(e.lower,t.lower)===0&&oe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function hr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=oe(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=oe(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function pr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&wt(i,s)},3e3))})}var yt={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return G(G({},e),{transaction:function(n,a,s){var i,l,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(l=function(C){return function(){if(i.abort(),a==="readwrite"){for(var S=new Set,y=0,m=n;y<m.length;y++){var x=m[y],w=en["idb://".concat(t,"/").concat(x)];if(w){var g=e.table(x),b=w.optimisticOps.filter(function(M){return M.trans===c});if(c._explicit&&C&&c.mutatedParts)for(var B=0,E=Object.values(w.queries.query);B<E.length;B++)for(var $=0,T=(V=E[B]).slice();$<T.length;$++)oa((I=T[$]).obsSet,c.mutatedParts)&&(wt(V,I),I.subscribers.forEach(function(M){return S.add(M)}));else if(0<b.length){w.optimisticOps=w.optimisticOps.filter(function(M){return M.trans!==c});for(var F=0,R=Object.values(w.queries.query);F<R.length;F++)for(var V,I,z,r=0,f=(V=R[F]).slice();r<f.length;r++)(I=f[r]).res!=null&&c.mutatedParts&&(C&&!I.dirty?(z=Object.isFrozen(I.res),z=Xa(I.res,I.req,b,g,I,z),I.dirty?(wt(V,I),I.subscribers.forEach(function(M){return S.add(M)})):z!==I.res&&(I.res=z,I.promise=A.resolve({result:z}))):(I.dirty&&wt(V,I),I.subscribers.forEach(function(M){return S.add(M)})))}}}S.forEach(function(M){return M()})}}})(!1),{signal:s}),c.addEventListener("error",l(!1),{signal:s}),c.addEventListener("complete",l(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return G(G({},a),{mutate:function(i){var l,c=H.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(l=en["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||ca(s,i).some(function(C){return C==null}))?(l.optimisticOps.push(i),i.mutatedParts&&Ln(i.mutatedParts),c.then(function(C){0<C.numFailures&&(wt(l.optimisticOps,i),(C=Ha(0,i,C))&&l.optimisticOps.push(C),i.mutatedParts)&&Ln(i.mutatedParts)}),c.catch(function(){wt(l.optimisticOps,i),i.mutatedParts&&Ln(i.mutatedParts)})):c.then(function(C){var S=Ha(0,G(G({},i),{values:i.values.map(function(y,m){var x;return C.failures[m]?y:(et(x=(x=s.keyPath)!=null&&x.includes(".")?rn(y):G({},y),s.keyPath,C.results[m]),x)})}),C);l.optimisticOps.push(S),queueMicrotask(function(){return i.mutatedParts&&Ln(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var l,c,C,S,y,m,x;return Ga(H,a)&&Ja("query",i)?(l=((C=H.trans)==null?void 0:C.db._options.cache)==="immutable",c=(C=H).requery,C=C.signal,m=((w,g,b,B)=>{var E=en["idb://".concat(w,"/").concat(g)];if(!E)return[];if(!(w=E.queries[b]))return[null,!1,E,null];var $=w[(B.query?B.query.index.name:null)||""];if(!$)return[null,!1,E,null];switch(b){case"query":var T=$.find(function(F){return F.req.limit===B.limit&&F.req.values===B.values&&Oa(F.req.query.range,B.query.range)});return T?[T,!0,E,$]:[$.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=B.limit&&(!B.values||F.req.values)&&hr(F.req.query.range,B.query.range)}),!1,E,$];case"count":return T=$.find(function(F){return Oa(F.req.query.range,B.query.range)}),[T,!!T,E,$]}})(t,n,"query",i),x=m[0],S=m[2],y=m[3],x&&m[1]?x.obsSet=i.obsSet:(m=a.query(i).then(function(w){var g=w.result;if(x&&(x.res=g),l){for(var b=0,B=g.length;b<B;++b)Object.freeze(g[b]);Object.freeze(g)}else w.result=rn(g);return w}).catch(function(w){return y&&x&&wt(y,x),Promise.reject(w)}),x={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(x):(y=[x],(S=S||(en["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),pr(x,y,c,C),x.promise.then(function(w){return{result:Xa(w.result,i,S?.optimisticOps,a,x,l)}})):a.query(i)}})}})}};function fn(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}Ne.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Rt),n.stores({}),this._state.autoSchema=!1),n},Ne.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new A(function(n,a){if(t._state.openComplete)return a(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new Z.DatabaseClosed);t.open().catch(me)}t._state.dbReadyPromise.then(n,a)}).then(e)},Ne.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(l,c){return l.level-c.level}),this},Ne.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Ne.prototype.open=function(){var e=this;return un(kt,function(){return tn(e)})},Ne.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=xn.indexOf(this);if(0<=t&&xn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new A(function(n){e.dbReadyResolve=n}),e.openCanceller=new A(function(n,a){e.cancelOpen=a}))},Ne.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ne.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new A(function(s,i){function l(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=ke(function(){var C,S,y;C=t._deps,S=t.name,sa(y=C.indexedDB)||S===ta||ra(y,C.IDBKeyRange).delete(S).catch(me),s()}),c.onerror=Ce(i),c.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(l):l()})},Ne.prototype.backendDB=function(){return this.idbdb},Ne.prototype.isOpen=function(){return this.idbdb!==null},Ne.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ne.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ne.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ne.prototype,"tables",{get:function(){var e=this;return ve(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ne.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Nt(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},Ne.prototype._transaction=function(e,t,n){var a,s,i=this,l=H.trans,c=(l&&l.db===this&&e.indexOf("!")===-1||(l=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function(S){if(S=S instanceof i.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),e=="r"||e===na)a=na;else{if(e!="rw"&&e!=ka)throw new Z.InvalidArgument("Invalid transaction mode: "+e);a=ka}if(l){if(l.mode===na&&a===ka){if(!c)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");l=null}l&&s.forEach(function(S){if(l&&l.storeNames.indexOf(S)===-1){if(!c)throw new Z.SubTransaction("Table "+S+" not included in parent transaction.");l=null}}),c&&l&&!l.active&&(l=null)}}catch(S){return l?l._promise(null,function(y,m){m(S)}):Fe(S)}var C=(function S(y,m,x,w,g){return A.resolve().then(function(){var $=H.transless||H,b=y._createTransaction(m,x,y._dbSchema,w),$=(b.explicit=!0,{trans:b,transless:$});if(w)b.idbtrans=w.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(T){return T.name===Un.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return S(y,m,x,null,g)})):Fe(T)}var B,E=ga(g),$=(E&&Cn(),A.follow(function(){var T;(B=g.call(b,b))&&(E?(T=Jt.bind(null,null),B.then(T,T)):typeof B.next=="function"&&typeof B.throw=="function"&&(B=Ma(B)))},$));return(B&&typeof B.then=="function"?A.resolve(B).then(function(T){return b.active?T:Fe(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):$.then(function(){return B})).then(function(T){return w&&b._resolve(),b._completion.then(function(){return T})}).catch(function(T){return b._reject(T),Fe(T)})})}).bind(null,this,a,s,l,n);return l?l._promise(a,C,"lock"):H.trans?un(H.transless,function(){return i._whenReady(C)}):this._whenReady(C)},Ne.prototype.table=function(e){if(se(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var Oe=Ne;function Ne(e,t){var n,a,s,i,l,c=this,C=(this._middlewares={},this.verno=0,Ne.dependencies),C=(this._options=t=G({addons:Ne.addons,autoOpen:!0,indexedDB:C.indexedDB,IDBKeyRange:C.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:me,dbReadyPromise:null,cancelOpen:me,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=(S.dbReadyPromise=new A(function(m){S.dbReadyResolve=m}),S.openCanceller=new A(function(m,x){S.cancelOpen=x}),this._state=S,this.name=e,this.on=D(this,"populate","blocked","versionchange","close",{ready:[Ae,me]}),this.once=function(m,x){var w=function(){for(var g=[],b=0;b<arguments.length;b++)g[b]=arguments[b];c.on(m).unsubscribe(w),x.apply(c,g)};return c.on(m,w)},this.on.ready.subscribe=Aa(this.on.ready.subscribe,function(m){return function(x,w){Ne.vip(function(){var g,b=c._state;b.openComplete?(b.dbOpenError||A.resolve().then(x),w&&m(x)):b.onReadyBeingFired?(b.onReadyBeingFired.push(x),w&&m(x)):(m(x),g=c,w||m(function B(){g.on.ready.unsubscribe(x),g.on.ready.unsubscribe(B)}))})}}),this.Collection=(n=this,L(Ke.prototype,function(B,b){this.db=n;var w=Ra,g=null;if(b)try{w=b()}catch($){g=$}var b=B._ctx,B=b.table,E=B.hook.reading.fire;this._ctx={table:B,index:b.index,isPrimKey:!b.index||B.schema.primKey.keyPath&&b.index===B.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:g,or:b.or,valueMapper:E!==Mn?E:null}})),this.Table=(a=this,L(v.prototype,function(m,x,w){this.db=a,this._tx=w,this.name=m,this.schema=x,this.hook=a._allTables[m]?a._allTables[m].hook:D(null,{creating:[ba,me],reading:[or,Mn],updating:[Na,me],deleting:[Wn,me]})})),this.Transaction=(s=this,L(at.prototype,function(m,x,w,g,b){var B=this;m!=="readonly"&&x.forEach(function(E){E=(E=w[E])==null?void 0:E.yProps,E&&(x=x.concat(E.map(function($){return $.updatesTable})))}),this.db=s,this.mode=m,this.storeNames=x,this.schema=w,this.chromeTransactionDurability=g,this.idbtrans=null,this.on=D(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new A(function(E,$){B._resolve=E,B._reject=$}),this._completion.then(function(){B.active=!1,B.on.complete.fire()},function(E){var $=B.active;return B.active=!1,B.on.error.fire(E),B.parent?B.parent._reject(E):$&&B.idbtrans&&B.idbtrans.abort(),Fe(E)})})),this.Version=(i=this,L(De.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(l=this,L(nt.prototype,function(m,x,w){if(this.db=l,this._ctx={table:m,index:x===":id"?null:x,or:w},this._cmp=this._ascending=oe,this._descending=function(g,b){return oe(b,g)},this._max=function(g,b){return 0<oe(g,b)?g:b},this._min=function(g,b){return oe(g,b)<0?g:b},this._IDBKeyRange=l._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=He(t.IDBKeyRange),this._createTransaction=function(m,x,w,g){return new c.Transaction(m,x,w,c._options.chromeTransactionDurability,g)},this._fireOnBlocked=function(m){c.on("blocked").fire(m),xn.filter(function(x){return x.name===c.name&&x!==c&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(m)})},this.use(dr),this.use(yt),this.use(fr),this.use(Ua),this.use(Wa),new Proxy(this,{get:function(m,x,w){var g;return x==="_vip"||(x==="table"?function(b){return fn(c.table(b),y)}:(g=Reflect.get(m,x,w))instanceof v?fn(g,y):x==="tables"?g.map(function(b){return fn(b,y)}):x==="_createTransaction"?function(){return fn(g.apply(this,arguments),y)}:g)}}));this.vip=y,C.forEach(function(m){return m(c)})}var Ft,Dt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",vr=(Ta.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Ta.prototype[Dt]=function(){return this},Ta);function Ta(e){this._subscribe=e}try{Ft={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{Ft={indexedDB:null,IDBKeyRange:null}}function da(e){var t,n=!1,a=new vr(function(s){var i=ga(e),l,c=!1,C={},S={},y={get closed(){return c},unsubscribe:function(){c||(c=!0,l&&l.abort(),m&&Se.storagemutated.unsubscribe(w))}},m=(s.start&&s.start(y),!1),x=function(){return cn(g)},w=function(b){qn(C,b),oa(S,C)&&x()},g=function(){var b,B,E;!c&&Ft.indexedDB&&(C={},b={},l&&l.abort(),l=new AbortController,E=($=>{var T=ln();try{i&&Cn();var F=Gt(e,$);return F=i?F.finally(Jt):F}finally{T&&yn()}})(B={subscr:b,signal:l.signal,requery:x,querier:e,trans:null}),Promise.resolve(E).then(function($){n=!0,t=$,c||B.signal.aborted||(C={},(T=>{for(var F in T)if(se(T,F))return;return 1})(S=b)||m||(Se(fe,w),m=!0),cn(function(){return!c&&s.next&&s.next($)}))},function($){n=!1,["DatabaseClosedError","AbortError"].includes($?.name)||c||cn(function(){c||s.error&&s.error($)})}))};return setTimeout(x,0),y});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var nn=Oe;function fa(e){var t=an;try{an=!0,Se.storagemutated.fire(e),Bt(e,!0)}finally{an=t}}vt(nn,G(G({},Mt),{delete:function(e){return new nn(e,{addons:[]}).delete()},exists:function(e){return new nn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=nn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(sa(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==ta})}):ra(n,t).toCollection().primaryKeys()).then(e)}catch{return Fe(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){de(this,e)}},ignoreTransaction:function(e){return H.trans?un(H.transless,e):e()},vip:ia,async:function(e){return function(){try{var t=Ma(e.apply(this,arguments));return t&&typeof t.then=="function"?t:A.resolve(t)}catch(n){return Fe(n)}}},spawn:function(e,t,n){try{var a=Ma(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:A.resolve(a)}catch(s){return Fe(s)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=A.resolve(typeof e=="function"?nn.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:A,debug:{get:function(){return Pt},set:function(e){gn(e)}},derive:xt,extend:de,props:vt,override:Aa,Events:D,on:Se,liveQuery:da,extendObservabilitySet:qn,getByKeyPath:It,setByKeyPath:et,delByKeyPath:function(e,t){typeof t=="string"?et(e,t,void 0):"length"in t&&[].map.call(t,function(n){et(e,n,void 0)})},shallowClone:Fa,deepClone:rn,getObjectDiff:ua,cmp:oe,asap:ma,minKey:-1/0,addons:[],connections:xn,errnames:Un,dependencies:Ft,cache:en,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),nn.maxKey=He(nn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Se(fe,function(e){an||(e=new CustomEvent(Pe,{detail:e}),an=!0,dispatchEvent(e),an=!1)}),addEventListener(Pe,function(e){e=e.detail,an||fa(e)}));var hn,an=!1,rt=function(){};return typeof BroadcastChannel<"u"&&((rt=function(){(hn=new BroadcastChannel(Pe)).onmessage=function(e){return e.data&&fa(e.data)}})(),typeof hn.unref=="function"&&hn.unref(),Se(fe,function(e){an||hn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Oe.disableBfCache&&e.persisted){Pt&&console.debug("Dexie: handling persisted pagehide"),hn?.close();for(var t=0,n=xn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Oe.disableBfCache&&e.persisted&&(Pt&&console.debug("Dexie: handling persisted pageshow"),rt(),fa({all:new Xe(-1/0,[[]])}))})),A.rejectionMapper=function(e,t){return!e||e instanceof on||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Ia[e.name]?e:(t=new Ia[e.name](t||e.message,e),"stack"in e&&lt(t,"stack",{get:function(){return this.inner.stack}}),t)},gn(Pt),G(Oe,Object.freeze({__proto__:null,Dexie:Oe,Entity:Va,PropModification:u,RangeSet:Xe,add:function(e){return new u({add:e})},cmp:oe,default:Oe,liveQuery:da,mergeRanges:bt,rangesOverlap:Sa,remove:function(e){return new u({remove:e})},replacePrefix:function(e,t){return new u({replacePrefix:[e,t]})}}),{default:Oe}),Oe})})(Za)),Za.exports}var es=Zr();const mr=Xr(es),qr=Symbol.for("Dexie"),er=globalThis[qr]||(globalThis[qr]=mr);if(mr.semVer!==er.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${mr.semVer} and ${er.semVer}`);const{liveQuery:fs,mergeRanges:hs,rangesOverlap:ps,RangeSet:vs,cmp:ms,Entity:gs,PropModification:bs,replacePrefix:ys,add:Cs,remove:xs,DexieYProvider:ws}=er,it=new er("haushaltsbuch-db");it.version(1).stores({years:"year",fixedTemplateState:"id"});it.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const pa="singleton";function tr(){return new Date().toISOString()}async function Yn(){return it.years.orderBy("year").toArray()}async function ts(O){return it.years.get(O)}async function Vn(O){await it.years.put(O)}async function gr(){const O=await it.fixedTemplateState.get(pa);if(!O){const h={id:pa,templates:[],version:tr(),updatedAt:new Date().toISOString()};return await it.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:O.templates,version:O.version}}async function br(O){const h=tr();return await it.fixedTemplateState.put({id:pa,templates:O,version:h,updatedAt:new Date().toISOString()}),h}async function yr(){const O=await it.annualVariableFixedTemplateState.get(pa);if(!O){const h={id:pa,templates:[],version:tr(),updatedAt:new Date().toISOString()};return await it.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:O.templates,version:O.version}}async function Cr(O){const h=tr();return await it.annualVariableFixedTemplateState.put({id:pa,templates:O,version:h,updatedAt:new Date().toISOString()}),h}async function ns(){const O=await Yn(),[h,_e]=await Promise.all([gr(),yr()]);return{exportedAt:new Date().toISOString(),years:O,fixedTemplates:h.templates,annualVariableFixedTemplates:_e.templates}}async function as(O){await it.transaction("rw",[it.years,it.fixedTemplateState,it.annualVariableFixedTemplateState],async()=>{await it.years.clear(),await it.years.bulkPut(O.years),await br(O.fixedTemplates),await Cr(O.annualVariableFixedTemplates??[])})}function Te(O){const h=O.replace(",",".").trim();if(!h)return 0;const _e=Number.parseFloat(h);return Number.isNaN(_e)?0:Math.round(_e*100)}const rs=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function k(O){return rs.format(O/100)}function pt(O){return(O/100).toFixed(2)}function Ee(O){return new Date(2026,O-1,1).toLocaleDateString("de-DE",{month:"long"})}const Rr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Kr(O){return Rr.includes(O)}function ss(O){switch(O){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Lr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function is(O){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},_e="habu-theme",G="habu-backup-dirty",ce="habu-unexported-change-log",ae="habu-last-backup-filename",ve="habu-recurring-budget-defaults";let re=null,de=null,Ze=null,qe=null,se=!1,vt=!1;const ot=new WeakMap;function lt(){const o=O.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const u=getComputedStyle(document.documentElement),p=u.getPropertyValue("--text-main").trim(),d=u.getPropertyValue("--text-muted").trim(),v=u.getPropertyValue("--table-stripe").trim(),_=u.getPropertyValue("--table-border").trim(),D=u.getPropertyValue("--budget-under").trim(),L=u.getPropertyValue("--danger-2").trim(),N=96,X=250,U=Q=>1-Math.pow(1-Math.max(0,Math.min(1,Q)),3);o.forEach(Q=>{Q.dataset.hoverBound!=="1"&&(Q.dataset.hoverBound="1",Q.addEventListener("mouseenter",()=>{Q.dataset.hovering="1",lt()}),Q.addEventListener("mouseleave",()=>{delete Q.dataset.hovering,delete Q.dataset.hoverX,lt()}),Q.addEventListener("mousemove",Be=>{const be=Q.getBoundingClientRect(),Ie=Math.round(Be.clientX-be.left);Q.dataset.hoverX=String(Ie),lt()}));const he=Number.parseInt(Q.dataset.budgetCents??"0",10),ge=Number.parseInt(Q.dataset.actualCents??"0",10),We=Q.dataset.label??"Kategorie",Ke=Q.dataset.hovering==="1",W=`${We}|${he}|${ge}`,ze=Q.dataset.lastRenderSignature!==W;Q.dataset.lastRenderSignature=W;const Le=Math.max(120,Math.floor(Q.clientWidth||120)),Ge=window.devicePixelRatio||1,Me=Math.floor(Le*Ge),je=Math.floor(N*Ge);(Q.width!==Me||Q.height!==je)&&(Q.width=Me,Q.height=je);const j=Q.getContext("2d");if(!j)return;const $e=Math.max(1,he,ge),ft=Math.min(1,Math.max(0,he/$e)),nt=Math.min(1,Math.max(0,ge/$e)),te=he-ge,Ce=he>0?ge/he*100:ge>0?100:0,Je=8,fe=Je,Pe=34,Se=Le-Je*2,at=22,ye=Number.parseInt(Q.dataset.hoverX??"-1",10),Ue=(Be,be,Ie,Re,Ve)=>{j.beginPath(),j.moveTo(Be+Ve,be),j.lineTo(Be+Ie-Ve,be),j.quadraticCurveTo(Be+Ie,be,Be+Ie,be+Ve),j.lineTo(Be+Ie,be+Re-Ve),j.quadraticCurveTo(Be+Ie,be+Re,Be+Ie-Ve,be+Re),j.lineTo(Be+Ve,be+Re),j.quadraticCurveTo(Be,be+Re,Be,be+Re-Ve),j.lineTo(Be,be+Ve),j.quadraticCurveTo(Be,be,Be+Ve,be),j.closePath()},jt=Be=>{j.setTransform(1,0,0,1,0,0),j.clearRect(0,0,Q.width,Q.height),j.scale(Ge,Ge),Ue(fe,Pe,Se,at,8),j.fillStyle=v,j.fill(),j.strokeStyle=_,j.lineWidth=1,j.stroke();const be=[.6,.25,.15],Ie=[.1,.16,.24];let Re=0;be.forEach((Vt,P)=>{const q=Se*Vt;j.save(),j.globalAlpha=Ie[P]??.1,j.fillStyle=d,j.fillRect(fe+Re,Pe,q,at),j.restore(),Re+=q});const Ve=he>0&&ge>he?L:D,gt=Se*nt*Be;Ue(fe,Pe+3,gt,at-6,6),j.fillStyle=Ve,j.fill(),Ke&&(j.save(),j.strokeStyle=Ve,j.lineWidth=1.5,j.globalAlpha=.8,Ue(fe-1,Pe+2,Math.max(2,gt+2),at-4,7),j.stroke(),j.restore());const At=fe+Se*ft;j.strokeStyle=p,j.lineWidth=Ke?3:2,j.beginPath(),j.moveTo(At,Pe-3),j.lineTo(At,Pe+at+3),j.stroke(),Ke&&ye>=fe&&ye<=fe+Se&&(j.save(),j.strokeStyle=p,j.globalAlpha=.35,j.lineWidth=1,j.beginPath(),j.moveTo(ye,Pe-8),j.lineTo(ye,Pe+at+8),j.stroke(),j.restore()),j.fillStyle=p,j.font="600 12px system-ui, -apple-system, sans-serif",j.textAlign="left",j.textBaseline="top",j.fillText(We,fe,10);const Rt=Ce*Be;if(j.fillStyle=Ce>100?L:Ce<100?D:d,j.textAlign="right",j.fillText(`${Rt.toFixed(0)}%`,fe+Se,10),j.fillStyle=d,j.font="500 11px system-ui, -apple-system, sans-serif",j.textAlign="left",j.textBaseline="top",j.fillText(`Ist ${k(ge)} · Ziel ${k(he)} · Δ ${te>=0?"+":""}${k(te)}`,fe,64),Ke){const Vt=`Nutzung ${Ce.toFixed(1)}%`;j.font="600 11px system-ui, -apple-system, sans-serif";const P=8,q=5,ie=22,Yt=j.measureText(Vt).width+P*2,wn=Number.isFinite(ye)?ye-Yt/2:fe+Se-Yt,Zt=Math.min(fe+Se-Yt,Math.max(fe,wn)),kn=Pe-ie-8;j.save(),j.fillStyle=p,j.globalAlpha=.92,Ue(Zt,kn,Yt,ie,6),j.fill(),j.restore(),j.fillStyle=v,j.textAlign="left",j.textBaseline="top",j.fillText(Vt,Zt+P,kn+q)}},$t=ot.get(Q);if($t&&window.cancelAnimationFrame($t),!ze){jt(1);return}const He=performance.now(),mt=Be=>{const be=Be-He,Ie=Math.min(1,be/X);if(jt(U(Ie)),Ie<1){const Re=window.requestAnimationFrame(mt);ot.set(Q,Re);return}ot.delete(Q)},St=window.requestAnimationFrame(mt);ot.set(Q,St)})}function xt(o){if(o==="dashboard"){const u=h.years.slice().sort((d,v)=>v.year-d.year);u.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??u[0]?.year??null)}h.topModal=o,ne()}function va(){h.topModal&&(h.topModal=null,ne())}function nr(){h.showUnexportedChangeLogModal=!0,ne()}function pn(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ne())}function Aa(){se||(se=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),pn();return}h.topModal&&(o.preventDefault(),va())}}))}function Bn(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const u=o/6;return window.scrollY>u}function ma(){const o=O.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",Bn())}function It(){if(vt)return;vt=!0;const o=()=>{ma(),lt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function et(){if(re&&document.body.contains(re))return re;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return re=o,o;const u=document.createElement("div");return u.id="toast-root",u.className="toast-root",u.setAttribute("aria-live","polite"),u.setAttribute("aria-atomic","true"),document.body.appendChild(u),re=u,u}function Fa(){if(de&&document.body.contains(de))return de;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return de=o,o;const u=document.createElement("div");return u.id="amount-modal-root",document.body.appendChild(u),de=u,u}function ar(){if(qe&&document.body.contains(qe))return qe;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return qe=o,o;const u=document.createElement("div");return u.id="weekly-shopping-modal-root",document.body.appendChild(u),qe=u,u}function Nt(){if(!de){Ze=null;return}de.innerHTML="",Ze=null}function vn(){qe&&(qe.innerHTML="")}function En(o,u,p){const d=new Date,v=d.getFullYear(),_=d.getMonth()+1,D=d.getDate(),L=new Date(o,u,0).getDate();if(o<v||o===v&&u<_)return{occurrences:0,remainingDays:0};const N=o===v&&u===_?Math.min(D,L):1,X=Math.max(0,L-N+1);let U=0;for(let Q=N;Q<=L;Q+=1)new Date(o,u-1,Q).getDay()===p&&(U+=1);return{occurrences:U,remainingDays:X}}async function rn(o,u){const p=Ae();p&&(p.weeklyShoppingWeekday=o,p.weeklyShoppingEstimateCents=Math.max(0,u),await we(`Wocheneinkauf geplant: ${Lr.find(d=>d.value===o)?.label??"Wochentag"} mit ${k(p.weeklyShoppingEstimateCents)} €`),ne())}function rr(){const o=Ae();if(!o)return;const u=ar();vn();const p=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,d=o.weeklyShoppingEstimateCents??0,v=sn(),_=wt(),D=Pt(v,_),L=D?gn(D):{foodCents:0,goingOutCents:0},N=D?(D.foodBudgetCents??0)+(D.goingOutBudgetCents??0):0,X=L.foodCents+L.goingOutCents,U=N-X;u.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Lr.map(te=>`<option value="${te.value}" ${te.value===p?"selected":""}>${te.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${pt(d)}" />
              </label>
            </div>

            <div class="weekly-shopping-eval" id="weekly-shopping-eval">
              <div class="column-overview-row"><span>Verbleibende Wocheneinkäufe</span><strong id="weekly-shopping-occurrences">0</strong></div>
              <div class="column-overview-row"><span>Summe Wocheneinkäufe</span><strong id="weekly-shopping-total">0,00 €</strong></div>
              <div class="column-overview-row"><span>Restbudget aktuell (aktueller Monat, Essen + Ausgehen)</span><strong id="weekly-shopping-rest-before">0,00 €</strong></div>
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
    `;const Q=u.querySelector(".weekly-shopping-modal-backdrop"),he=u.querySelector("#weekly-shopping-weekday"),ge=u.querySelector("#weekly-shopping-estimate"),We=u.querySelector("#weekly-shopping-occurrences"),Ke=u.querySelector("#weekly-shopping-total"),W=u.querySelector("#weekly-shopping-rest-before"),ze=u.querySelector("#weekly-shopping-rest-after"),Le=u.querySelector("#weekly-shopping-days-left"),Ge=u.querySelector("#weekly-shopping-per-day"),Me=u.querySelector("#weekly-shopping-cancel"),je=u.querySelector("#weekly-shopping-save");function j(){const te=Number.parseInt(he?.value??"1",10);return Number.isInteger(te)&&te>=0&&te<=6?te:1}function $e(){return Math.max(0,Te(ge?.value??"0"))}function ft(){const te=j(),Ce=$e(),{occurrences:Je,remainingDays:fe}=En(v,_,te),Pe=Je*Ce,Se=U-Pe,at=fe>0?Math.trunc(Se/fe):0;We&&(We.textContent=`${Je}`),Ke&&(Ke.textContent=`${k(Pe)} €`),W&&(W.textContent=`${k(U)} €`),ze&&(ze.textContent=`${k(Se)} €`,ze.className=Se<0?"danger":Se>0?"budget-under":""),Le&&(Le.textContent=`${fe}`),Ge&&(Ge.textContent=`${k(at)} €`,Ge.className=at<0?"danger":at>0?"budget-under":"")}async function nt(){await rn(j(),$e()),vn()}Me?.addEventListener("click",()=>{vn()}),je?.addEventListener("click",async()=>{await nt()}),he?.addEventListener("change",()=>{ft()}),ge?.addEventListener("input",()=>{ft()}),ge?.addEventListener("keydown",async te=>{if(te.key==="Escape"){te.preventDefault(),vn();return}te.key==="Enter"&&(te.preventDefault(),await nt())}),Q?.addEventListener("click",te=>{te.target===Q&&vn()}),window.setTimeout(()=>{ge?.focus(),ge?.select(),ft()},0)}function zn(o,u){let p=o;const d=u.min;if(d){const _=Number.parseFloat(d);if(!Number.isNaN(_)){const D=Math.round(_*100);p=Math.max(p,D)}}const v=u.max;if(v){const _=Number.parseFloat(v);if(!Number.isNaN(_)){const D=Math.round(_*100);p=Math.min(p,D)}}return p}function ut(o){if(o.disabled)return;const u=Fa();Nt(),Ze=o;const p=Te(o.value||"0"),d="Betrag anpassen";u.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${k(p)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${k(p)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${k(p)} €</strong></div>
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
    `;const v=u.querySelector(".amount-modal-backdrop"),_=u.querySelector("#amount-modal-delta"),D=u.querySelector("#amount-modal-next-delta"),L=u.querySelector("#amount-modal-next-overwrite"),N=u.querySelector("#amount-modal-cancel"),X=u.querySelector("#amount-modal-overwrite"),U=u.querySelector("#amount-modal-apply");function Q(){const W=Te(_?.value??"0");return zn(p+W,o)}function he(){const W=Te(_?.value??"0");return zn(W,o)}function ge(){D&&(D.textContent=`${k(Q())} €`),L&&(L.textContent=`${k(he())} €`)}function We(){const W=Ze;if(!W){Nt();return}const ze=Q();Nt(),W.value=pt(ze),W.dispatchEvent(new Event("change",{bubbles:!0}))}function Ke(){const W=Ze;if(!W){Nt();return}const ze=he();Nt(),W.value=pt(ze),W.dispatchEvent(new Event("change",{bubbles:!0}))}N?.addEventListener("click",()=>{Nt()}),X?.addEventListener("click",()=>{Ke()}),U?.addEventListener("click",()=>{We()}),_?.addEventListener("input",()=>{ge()}),_?.addEventListener("keydown",W=>{if(W.key==="Escape"){W.preventDefault(),Nt();return}W.key==="Enter"&&(W.preventDefault(),We())}),v?.addEventListener("click",W=>{W.target===v&&Nt()}),window.setTimeout(()=>{_?.focus(),_?.select(),ge()},0)}function xe(o,u="success"){const p=et(),d=document.createElement("div");d.className=`toast toast-${u}`,d.textContent=o,p.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const v=u==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},v)}function wt(){return new Date().getMonth()+1}function sn(){return new Date().getFullYear()}function _t(o){const u=sn(),p=o.find(d=>d.year===u);return p?p.year:o[0]?.year??null}function ga(){return new Date().toISOString().slice(0,10)}function Mt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function sr(){const o=localStorage.getItem(_e);return o&&Kr(o)?o:"light"}function on(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(_e,o)}function Da(){return localStorage.getItem(G)==="1"}function _n(o){localStorage.setItem(G,o?"1":"0")}function mn(){const o=localStorage.getItem(ce);if(!o)return[];try{const u=JSON.parse(o);return Array.isArray(u)?u.filter(p=>{if(!p||typeof p!="object")return!1;const d=p;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function Un(o){localStorage.setItem(ce,JSON.stringify(o.slice(-200)))}function ir(){const o=localStorage.getItem(ae);if(!o)return null;const u=o.trim();return u||null}function Z(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},u=localStorage.getItem(ve);if(!u)return o;try{const p=JSON.parse(u),d=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:d(p.foodBudgetCents),goingOutBudgetCents:d(p.goingOutBudgetCents),fixedBudgetCents:d(p.fixedBudgetCents),variableBudgetCents:d(p.variableBudgetCents),miscBudgetCents:d(p.miscBudgetCents)}}catch{return o}}function Ia(o){localStorage.setItem(ve,JSON.stringify(o))}function me(o){o.months.forEach(u=>{const{recurringBudgetDefaults:p}=h;typeof p.foodBudgetCents=="number"&&(u.foodBudgetCents=p.foodBudgetCents),typeof p.goingOutBudgetCents=="number"&&(u.goingOutBudgetCents=p.goingOutBudgetCents),typeof p.fixedBudgetCents=="number"&&(u.fixedBudgetCents=p.fixedBudgetCents),typeof p.variableBudgetCents=="number"&&(u.variableBudgetCents=p.variableBudgetCents),typeof p.miscBudgetCents=="number"&&(u.miscBudgetCents=p.miscBudgetCents)})}function Mn(o){const u=o.trim();u&&localStorage.setItem(ae,u)}async function or(){et(),on(sr()),h.hasUnexportedChanges=Da(),h.unexportedChangeLog=mn(),h.lastBackupFileName=ir(),h.recurringBudgetDefaults=Z(),Aa(),It();const[o,u,p]=await Promise.all([Yn(),gr(),yr()]);h.years=o,h.annualVariableFixedTemplates=p.templates,h.annualVariableFixedTemplateVersion=p.version,qt(h.years),xa(h.years),h.fixedTemplates=u.templates,h.fixedTemplateVersion=u.version,await Na(h.years),o.length>0&&(h.selectedYear=_t(o),h.selectedMonth=wt()),ne()}function qt(o){const u=p=>p==="balance"||p==="fresh"||p==="salary"?p:void 0;o.forEach(p=>{p.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const v=Number(d.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?d.weeklyShoppingWeekday=v:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(v=>{const _=u(v.incomeSource);if(!_){const{incomeSource:D,...L}=v;return L}return{...v,incomeSource:_}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((v,_)=>v+_.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((v,_)=>v+_.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function ba(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Wn(o){return o==="fresh"||o==="salary"||!o}async function Na(o){for(const u of o)await Vn(u)}function Gn(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ae(){const o=Gn();if(o)return o.months.find(u=>u.month===h.selectedMonth)}function Pt(o,u){const p=h.years.find(d=>d.year===o);if(p)return p.months.find(d=>d.month===u)}function gn(o){const u=o.days.reduce((L,N)=>L+N.foodCents,0),p=o.days.reduce((L,N)=>L+N.goingOutCents,0),d=o.fixedCosts.reduce((L,N)=>L+N.actualCents,0),v=o.variableCosts.reduce((L,N)=>L+N.amountCents,0)+o.variablePositions.reduce((L,N)=>L+N.actualCents,0),_=o.miscCosts.reduce((L,N)=>L+N.amountCents,0),D=u+p+d+v+_;return{foodCents:u,goingOutCents:p,fixedCents:d,variableCents:v,miscCents:_,totalCents:D}}function Ut(o){const u=o.foodBudgetCents??0,p=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((D,L)=>D+L.plannedCents,0),v=o.variablePositions.reduce((D,L)=>D+L.budgetCents,0),_=o.miscBudgetCents??0;return u+p+d+(o.variableBudgetCents??v)+_}function Pn(o){return o.months.reduce((u,p)=>{const d=gn(p);return{foodCents:u.foodCents+d.foodCents,goingOutCents:u.goingOutCents+d.goingOutCents,fixedCents:u.fixedCents+d.fixedCents,variableCents:u.variableCents+d.variableCents,miscCents:u.miscCents+d.miscCents,totalCents:u.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function On(o){return o.months.slice().sort((u,p)=>u.month-p.month).map(u=>({month:u.month,summary:gn(u)}))}function tt(o){const u=o.months.reduce((D,L)=>D+(L.foodBudgetCents??0),0),p=o.months.reduce((D,L)=>D+(L.goingOutBudgetCents??0),0),d=o.months.reduce((D,L)=>D+(L.fixedBudgetCents??L.fixedCosts.reduce((N,X)=>N+X.plannedCents,0)),0),v=o.months.reduce((D,L)=>D+(L.variableBudgetCents??L.variablePositions.reduce((N,X)=>N+X.budgetCents,0)),0),_=o.months.reduce((D,L)=>D+(L.miscBudgetCents??0),0);return{foodCents:u,goingOutCents:p,fixedCents:d,variableCents:v,miscCents:_,totalCents:u+p+d+v+_}}function Kt(o){return o.months.reduce((u,p)=>u+p.incomes.reduce((d,v)=>d+(Wn(v.incomeSource)?v.amountCents:0),0),0)}function Tn(o,u){const p=o.months.slice().sort((d,v)=>d.month-v.month)[0];return p?u.get(A(o.year,p.month))?.carriedFromPreviousCents??0:0}function An(){const o=h.years.slice().sort((d,v)=>d.year-v.year).flatMap(d=>d.months.slice().sort((v,_)=>v.month-_.month).map(v=>({year:d.year,month:v}))),u=new Map;let p=0;return o.forEach(({year:d,month:v},_)=>{const D=v.carryoverOverrideCents,L=typeof D=="number",N=L?D:p,X=_>0||L,U=v.incomes.reduce((We,Ke)=>We+(Wn(Ke.incomeSource)?Ke.amountCents:0),0),Q=Ut(v),he=U+N,ge=he-Q;u.set(A(d,v.month),{hasPreviousMonth:X,carriedFromPreviousCents:N,recordedIncomeCents:U,effectiveIncomeCents:he,plannedBudgetCents:Q,netCents:ge}),p=ge}),u}function ct(o,u){return u<=0?"":o>u?"budget-over":o<u?"budget-under":""}function Jn(o){return`${o>0?"+":""}${k(o)}`}function Ct(o,u){const p=o-u,d=ct(u,o);return`${k(o)} <span class="eval-diff ${d}">(Δ ${Jn(p)})</span>`}function Wt(o,u){const p=o!==null,d=p?o-u:null,v=p?ct(u,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${p?`${k(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${k(u)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${d===null?"-":`${k(d)} €`}</strong>
      </div>
    </div>`}async function ya(o){if(await ts(o)){alert(`Jahr ${o} existiert bereits.`);return}const p=Fr(o,h.fixedTemplates,h.fixedTemplateVersion);me(p),Dn(p),await Vn(p),h.years=await Yn(),kt(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=wt(),xe(`Jahr ${o} wurde angelegt.`),ne()}function kt(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,_n(!0);const u=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",p={id:Et("change"),timestampIso:new Date().toISOString(),message:`${o} (${u})`};h.unexportedChangeLog=[...h.unexportedChangeLog,p].slice(-200),Un(h.unexportedChangeLog)}function H(o){const u=o.trim();u&&(h.lastBackupFileName=u,Mn(u))}function bn(o){h.hasUnexportedChanges=!1,_n(!1),h.unexportedChangeLog=[],Un([]),h.showUnexportedChangeLogModal=!1,H(o)}async function we(o){const u=Gn();u&&(await Vn(u),h.years=await Yn(),kt(o))}async function dt(o){for(const u of h.years)await Vn(u);h.years=await Yn(),kt(o)}function A(o,u){return o*100+u}function Fn(o){const u=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!u)return null;const p=u[1],d=u[2];return!p||!d?null:{year:Number.parseInt(p,10),month:Number.parseInt(d,10)}}function Ca(o,u){const p=Fn(o.dueDateIso);if(!p||u.year<p.year)return;const d=u.months.find(_=>_.month===p.month);!d||d.variablePositions.some(_=>_.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Et("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],Tt(d))}function Dn(o){h.annualVariableFixedTemplates.forEach(u=>{Ca(u,o)})}function xa(o){const u=new Set(h.annualVariableFixedTemplates.map(p=>p.id));o.forEach(p=>{p.months.forEach(d=>{const v=d.variablePositions.some(D=>typeof D.autoAnnualTemplateId=="string"),_=d.fixedCosts.some(D=>typeof D.autoAnnualTemplateId=="string");v&&(d.variablePositions=d.variablePositions.filter(D=>D.autoAnnualTemplateId?u.has(D.autoAnnualTemplateId):!0),Tt(d)),_&&(d.fixedCosts=d.fixedCosts.filter(D=>!D.autoAnnualTemplateId),Ot(d))}),Dn(p)})}function Ot(o){o.fixedBudgetCents=o.fixedCosts.reduce((u,p)=>u+p.plannedCents,0)}function Tt(o){o.variableBudgetCents=o.variablePositions.reduce((u,p)=>u+p.budgetCents,0)}function lr(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function ln(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",lr());if(!o)return null;const u=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!u)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const p=u[1],d=u[2];return!p||!d?null:{year:Number.parseInt(p,10),month:Number.parseInt(d,10)}}function yn(o,u){const p=A(u.year,u.month);h.years.forEach(d=>{d.months.forEach(v=>{if(A(d.year,v.month)<p)return;v.fixedCosts.some(D=>D.templateId===o.id)||(v.fixedCosts.push({id:Et("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Ot(v))})})}function wa(o,u,p){const d=A(p.year,p.month);h.years.forEach(v=>{v.months.forEach(_=>{A(v.year,_.month)<d||(_.fixedCosts=_.fixedCosts.map(D=>D.templateId!==u.id?D:{...D,name:u.name,plannedCents:u.plannedCents,actualCents:D.actualCents===o.plannedCents?u.plannedCents:D.actualCents}),Ot(_))})})}function Hn(o,u){const p=A(u.year,u.month);h.years.forEach(d=>{d.months.forEach(v=>{A(d.year,v.month)<p||(v.fixedCosts=v.fixedCosts.filter(_=>_.templateId!==o),Ot(v))})})}async function ke(o,u){const p=o.trim();if(!p)return;const d=ln();if(!d)return;const v=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const _=h.fixedTemplates.find(L=>L.id===h.editingFixedTemplateId);if(!_)return;const D={..._,name:p,plannedCents:u};h.fixedTemplates=h.fixedTemplates.map(L=>L.id===h.editingFixedTemplateId?D:L),wa(_,D,d)}else{const _={id:Et("tpl"),name:p,plannedCents:u};h.fixedTemplates=[...h.fixedTemplates,_],yn(_,d)}h.fixedTemplateVersion=await br(h.fixedTemplates),h.editingFixedTemplateId=null,await dt(v?`Fixkosten-Vorlage aktualisiert: ${p} (${k(u)} €)`:`Fixkosten-Vorlage hinzugefügt: ${p} (${k(u)} €)`),xe(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function Ye(o){h.editingFixedTemplateId=o,ne()}function ur(){h.editingFixedTemplateId=null,ne()}async function Xn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const p=ln();if(!p)return;const d=h.fixedTemplates.find(v=>v.id===o);h.fixedTemplates=h.fixedTemplates.filter(v=>v.id!==o),Hn(o,p),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await br(h.fixedTemplates),await dt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),xe("Fixkosten-Vorlage wurde gelöscht."),ne()}async function Qn(o,u,p){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=Fn(u);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(p<=0){alert("Bitte einen positiven Betrag eingeben.");return}const _={id:Et("annualtpl"),name:d,plannedCents:p,dueDateIso:u};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,_],h.years.forEach(D=>{Ca(_,D)}),h.annualVariableFixedTemplateVersion=await Cr(h.annualVariableFixedTemplates),await dt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${k(p)} €, jährlich in ${Ee(v.month)})`),xe("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function Zn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const p=h.annualVariableFixedTemplates.find(d=>d.id===o);p&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(v=>{v.variablePositions=v.variablePositions.filter(_=>_.autoAnnualTemplateId!==o),Tt(v),v.fixedCosts=v.fixedCosts.filter(_=>_.autoAnnualTemplateId!==o),Ot(v)})}),h.annualVariableFixedTemplateVersion=await Cr(h.annualVariableFixedTemplates),await dt(`Variable Fixkosten-Vorlage gelöscht: ${p.name}`),xe("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function qa(o,u,p){const d=Ae();d&&(d.days=d.days.map(v=>v.isoDate===o?{...v,[u]:p}:v),await we(`${u==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${k(p)} €`),ne())}async function Gt(o,u){const p=Ae();if(!p)return;const d=p.fixedCosts.find(v=>v.id===o);p.fixedCosts=p.fixedCosts.map(v=>v.id===o?{...v,actualCents:u}:v),await we(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${k(u)} €`),ne()}async function Cn(o,u){const p=Ae();if(!p)return;const d=p.fixedCosts.find(v=>v.id===o);d&&(p.fixedCosts=p.fixedCosts.map(v=>v.id===o?{...v,plannedCents:u}:v),Ot(p),await we(`Fixkosten-Budget angepasst: ${d.name} auf ${k(u)} €`),ne())}async function Jt(o,u){const p=Ae();if(!p)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:Et("fixed"),templateId:Et("fixed-local"),name:d,plannedCents:u,actualCents:0};p.fixedCosts=[v,...p.fixedCosts],Ot(p),await we(`Fixkosten-Position hinzugefügt: ${d} (${k(u)} €)`),xe("Fixkosten-Position wurde hinzugefügt."),ne()}async function ea(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const p=Ae();if(!p)return;const d=p.fixedCosts.find(v=>v.id===o);d&&(p.fixedCosts=p.fixedCosts.filter(v=>v.id!==o),Ot(p),await we(`Fixkosten-Position gelöscht: ${d.name}`),xe("Fixkosten-Position wurde gelöscht."),ne())}async function cr(o){await cn("fixedBudgetCents",o,"Fixkosten")}async function Ht(o){await cn("foodBudgetCents",o,"Essen")}async function Ka(o){await cn("goingOutBudgetCents",o,"Ausgehen")}async function un(o){await cn("miscBudgetCents",o,"Sonstiges")}async function La(o){await cn("variableBudgetCents",o,"Variable Kosten")}async function cn(o,u,p){const d=Ae(),v=h.selectedYear;if(!d||!v||d[o]===u)return;if(d[o]=u,confirm(`Soll das Budget "${p}" auch für zukünftige Monate übernommen werden?`)){const D=A(v,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(N=>{A(L.year,N.month)<=D||(N[o]=u)})}),h.recurringBudgetDefaults[o]=u,Ia(h.recurringBudgetDefaults),await dt(`Budget "${p}" auf ${k(u)} € gesetzt (inkl. zukünftiger Monate)`),xe(`Budget "${p}" wurde für zukünftige Monate übernommen.`),ne();return}await we(`Budget "${p}" auf ${k(u)} € gesetzt`),ne()}async function Fe(o){const u=Ae();u&&(o===null?u.carryoverOverrideCents=null:u.carryoverOverrideCents=o,await we(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${k(o)} € gesetzt`),ne())}async function Xt(o,u,p){const d=Ae(),v=h.selectedYear;if(!d||!v)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Et("varpos"),name:_,budgetCents:u,actualCents:0},...d.variablePositions],Tt(d),p){const D=A(v,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(N=>{A(L.year,N.month)<=D||(N.variablePositions=[{id:Et("varpos"),name:_,budgetCents:u,actualCents:0},...N.variablePositions],Tt(N))})}),await dt(`Variable Position hinzugefügt: ${_} (${k(u)} €) für zukünftige Monate`),xe("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await we(`Variable Position hinzugefügt: ${_} (${k(u)} €)`),xe("Variable Position wurde hinzugefügt."),ne()}async function Lt(o,u){const p=Ae();if(!p)return;const d=p.variablePositions.find(v=>v.id===o);p.variablePositions=p.variablePositions.map(v=>v.id===o?{...v,actualCents:u}:v),await we(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${k(u)} €`),ne()}async function ja(o,u){const p=Ae();if(!p)return;const d=p.variablePositions.find(v=>v.id===o);p.variablePositions=p.variablePositions.map(v=>v.id===o?{...v,budgetCents:u}:v),Tt(p),await we(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${k(u)} €`),ne()}async function xn(o){if(!confirm("Variable Position wirklich löschen?"))return;const p=Ae(),d=h.selectedYear;if(!p||!d)return;const v=p.variablePositions.find(N=>N.id===o);if(!v)return;const _=A(d,h.selectedMonth),L=h.years.some(N=>N.months.some(X=>A(N.year,X.month)>_&&X.variablePositions.some(U=>U.name===v.name&&U.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.variablePositions=p.variablePositions.filter(N=>N.id!==o),Tt(p),L){h.years.forEach(N=>{N.months.forEach(X=>{A(N.year,X.month)<=_||(X.variablePositions=X.variablePositions.filter(U=>!(U.name===v.name&&U.budgetCents===v.budgetCents)),Tt(X))})}),await dt(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),xe("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await we(`Variable Position gelöscht: ${v.name}`),xe("Variable Position wurde gelöscht."),ne()}async function ta(o){const u=Ae(),p=h.selectedYear;if(!u||!p)return;const d=u.variablePositions.find(U=>U.id===o);if(!d)return;const v={year:h.selectedMonth===12?p+1:p,month:h.selectedMonth===12?1:h.selectedMonth+1};let _=h.years.find(U=>U.year===v.year);if(!_){const U=Fr(v.year,h.fixedTemplates,h.fixedTemplateVersion);me(U),Dn(U),await Vn(U),h.years=[...h.years,U].sort((Q,he)=>Q.year-he.year),_=U}const D=_.months.find(U=>U.month===v.month);if(!D)return;const L=D.variablePositions.some(U=>U.id===d.id||U.name===d.name&&U.budgetCents===d.budgetCents);if(u.variablePositions=u.variablePositions.filter(U=>U.id!==o),Tt(u),!L){const Q=D.variablePositions.some(he=>he.id===d.id)?{...d,id:Et("varpos")}:d;D.variablePositions=[Q,...D.variablePositions],Tt(D)}const N=`${Ee(v.month)} ${v.year}`,X=`Variable Position verschoben: ${d.name} → ${N}`;if(v.year===p)await we(X);else{const U=Gn();if(!U)return;await Vn(U),await Vn(_),h.years=await Yn(),qt(h.years),kt(X)}xe(L?`Position entfernt (im Folgemonat schon vorhanden: ${N}).`:`Position in den Folgemonat verschoben: ${N}.`),ne()}async function na(o,u,p){const d=Ae(),v=h.selectedYear;if(!d||!v)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const D=Dr(_,u);if(d.miscCosts=[D,...d.miscCosts],p){const L=A(v,h.selectedMonth);h.years.forEach(N=>{N.months.forEach(X=>{A(N.year,X.month)<=L||(X.miscCosts=[Dr(_,u),...X.miscCosts])})}),await dt(`Sonstige Position hinzugefügt: ${_} (${k(u)} €) für zukünftige Monate`),xe("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await we(`Sonstige Position hinzugefügt: ${_} (${k(u)} €)`),xe("Sonstige Position wurde hinzugefügt."),ne()}async function ka(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const p=Ae(),d=h.selectedYear;if(!p||!d)return;const v=p.miscCosts.find(N=>N.id===o);if(!v)return;const _=A(d,h.selectedMonth),L=h.years.some(N=>N.months.some(X=>A(N.year,X.month)>_&&X.miscCosts.some(U=>U.description===v.description&&U.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.miscCosts=p.miscCosts.filter(N=>N.id!==o),L){h.years.forEach(N=>{N.months.forEach(X=>{A(N.year,X.month)<=_||(X.miscCosts=X.miscCosts.filter(U=>!(U.description===v.description&&U.amountCents===v.amountCents)))})}),await dt(`Sonstige Position gelöscht: ${v.description} (${k(v.amountCents)} €) inkl. zukünftiger Monate`),xe("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await we(`Sonstige Position gelöscht: ${v.description} (${k(v.amountCents)} €)`),xe("Sonstige Position wurde gelöscht."),ne()}async function Qt(o,u,p,d){const v=Ae(),_=h.selectedYear;if(!v||!_)return;const D=o.trim();if(!D){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(u<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const L=Ir(D,u,p);if(v.incomes=[L,...v.incomes],d){const N=A(_,h.selectedMonth);h.years.forEach(X=>{X.months.forEach(U=>{A(X.year,U.month)<=N||(U.incomes=[Ir(D,u,p),...U.incomes])})}),await dt(`Einkommen hinzugefügt: ${D} (${k(u)} €, ${ba(p)}) für zukünftige Monate`),xe("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await we(`Einkommen hinzugefügt: ${D} (${k(u)} €, ${ba(p)})`),xe("Einkommen wurde hinzugefügt."),ne()}async function Ra(o,u){const p=Ae();if(!p)return;const d=p.incomes.find(v=>v.id===o);d&&(p.incomes=p.incomes.map(v=>{if(v.id!==o)return v;if(!u){const{incomeSource:_,...D}=v;return D}return{...v,incomeSource:u}}),await we(`Einkommensart angepasst: ${d.description} → ${ba(u)}`),ne())}async function aa(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const p=Ae(),d=h.selectedYear;if(!p||!d)return;const v=p.incomes.find(N=>N.id===o);if(!v)return;const _=A(d,h.selectedMonth),L=h.years.some(N=>N.months.some(X=>A(N.year,X.month)>_&&X.incomes.some(U=>U.description===v.description&&U.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(p.incomes=p.incomes.filter(N=>N.id!==o),L){h.years.forEach(N=>{N.months.forEach(X=>{A(N.year,X.month)<=_||(X.incomes=X.incomes.filter(U=>!(U.description===v.description&&U.amountCents===v.amountCents)))})}),await dt(`Einkommen gelöscht: ${v.description} (${k(v.amountCents)} €) inkl. zukünftiger Monate`),xe("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await we(`Einkommen gelöscht: ${v.description} (${k(v.amountCents)} €)`),xe("Einkommen wurde gelöscht."),ne()}async function Va(){const o=await ns(),u=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),p=URL.createObjectURL(u),d=`haushaltsbuch-backup-${new Date().toISOString().slice(0,10)}.json`,v=document.createElement("a");v.href=p,v.download=d,v.click(),URL.revokeObjectURL(p),bn(d),ne(),xe("Backup wurde exportiert.")}async function oe(o){const u=await o.text(),p=JSON.parse(u);await as(p);const[d,v,_]=await Promise.all([Yn(),gr(),yr()]);h.years=d,h.annualVariableFixedTemplates=_.templates,h.annualVariableFixedTemplateVersion=_.version,qt(h.years),xa(h.years),h.fixedTemplates=v.templates,h.fixedTemplateVersion=v.version,await Na(h.years),h.selectedYear=_t(d),h.selectedMonth=wt(),bn(o.name),xe("Backup wurde importiert."),ne()}function ne(){const o=Gn(),u=Ae(),p=ga(),d=u?gn(u):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=o?Pn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},_=o?On(o):[],D=u?u.foodBudgetCents??0:0,L=u?u.goingOutBudgetCents??0:0,N=u?u.fixedBudgetCents??u.fixedCosts.reduce((r,f)=>r+f.plannedCents,0):0,X=u?u.variableBudgetCents??u.variablePositions.reduce((r,f)=>r+f.budgetCents,0):0,U=u?u.miscBudgetCents??0:0,Q=o?o.months.reduce((r,f)=>r+(f.foodBudgetCents??0),0):0,he=o?o.months.reduce((r,f)=>r+(f.goingOutBudgetCents??0),0):0,ge=o?o.months.reduce((r,f)=>r+(f.fixedBudgetCents??f.fixedCosts.reduce((M,K)=>M+K.plannedCents,0)),0):0,We=o?o.months.reduce((r,f)=>r+(f.variableBudgetCents??f.variablePositions.reduce((M,K)=>M+K.budgetCents,0)),0):0,Ke=o?o.months.reduce((r,f)=>r+(f.miscBudgetCents??0),0):0,W=u?u.incomes.reduce((r,f)=>r+(Wn(f.incomeSource)?f.amountCents:0),0):0,ze=u?u.incomes.reduce((r,f)=>r+(f.incomeSource==="salary"?f.amountCents:0),0):0,Le=An(),Ge=o?Le.get(A(o.year,h.selectedMonth)):void 0,Me=o?o.months.slice().sort((r,f)=>r.month-f.month)[0]:void 0,je=Ge?.carriedFromPreviousCents??0,j=Ge?.hasPreviousMonth??!1,$e=Ge?.effectiveIncomeCents??W,ft=u?Ut(u):0,nt=Ge?.netCents??W-ft,te=$e-d.totalCents,Ce=ze-d.totalCents,Je=d.totalCents>0?`${(ze/d.totalCents*100).toFixed(1)} %`:"-",fe=je<0?"danger":je>0?"budget-under":"",Pe=nt<0?"danger":nt>0?"budget-under":"",Se=te<0?"danger":te>0?"budget-under":"",at=o?o.months.reduce((r,f)=>r+f.incomes.reduce((M,K)=>M+(Wn(K.incomeSource)?K.amountCents:0),0),0):0,ye=o?o.months.reduce((r,f)=>r+f.incomes.reduce((M,K)=>M+(K.incomeSource==="salary"?K.amountCents:0),0),0):0,Ue=o&&Me?Le.get(A(o.year,Me.month))?.carriedFromPreviousCents??0:0,jt=at+Ue,$t=jt-v.totalCents,He=ye-v.totalCents,mt=v.totalCents>0?`${(ye/v.totalCents*100).toFixed(1)} %`:"-",St=Ue<0?"danger":Ue>0?"budget-under":"",Be=$t<0?"danger":$t>0?"budget-under":"",be=D+L+N+X+U,Ie=D+L,Re=d.foodCents+d.goingOutCents,Ve=Ie-Re,gt=ct(Re,Ie),At=Q+he+ge+We+Ke,Rt=$e-be,Vt=jt-At,P=be-d.totalCents,q=At-v.totalCents,ie=r=>r<0?"danger":r>0?"budget-under":"",In=(r,f)=>f<=0?"muted":r>=f?"budget-under":"danger",Yt=In(ze,d.totalCents),wn=In(ye,v.totalCents),Zt=P+Rt+te+Ce,kn=q+Vt+$t+He,De=(r,f)=>{if(f<=0)return"0%";const K=Math.max(0,r)/f*100;return`${Math.min(100,Math.max(0,K)).toFixed(1)}%`},$n=(r,f)=>{if(f<=0)return r>0?100:0;const M=Math.max(0,r)/f*100;return Math.max(0,M)},ra=[{label:"Essen",budgetCents:D,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:L,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:N,actualCents:d.fixedCents},{label:"Variable",budgetCents:X,actualCents:d.variableCents},{label:"Sonstige",budgetCents:U,actualCents:d.miscCents}];Math.max(1,...ra.flatMap(r=>[r.budgetCents,r.actualCents]));const sa=(r,f)=>f<=0?"bar-positive":r<=0||f>r?"bar-negative":"bar-positive",ia=[{label:"Einkommen gesamt",valueCents:$e,className:"bar-income"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:te,className:te<0?"bar-negative":"bar-positive"}],$a=Math.max(1,...ia.map(r=>Math.abs(r.valueCents))),Xe=o?o.months.slice().sort((r,f)=>r.month-f.month).map(r=>{const f=r.foodBudgetCents??0,M=r.goingOutBudgetCents??0,K=r.fixedBudgetCents??r.fixedCosts.reduce((le,ue)=>le+ue.plannedCents,0),J=r.variableBudgetCents??r.variablePositions.reduce((le,ue)=>le+ue.budgetCents,0),Y=r.miscBudgetCents??0,ee=f+M+K+J+Y;return{month:r.month,foodBudgetCents:f,goingOutBudgetCents:M,fixedBudgetCents:K,variableBudgetCents:J,miscBudgetCents:Y,totalBudgetCents:ee}}):[],ht=new Map(Xe.map(r=>[r.month,r])),bt=r=>{if(r.length===0)return null;const f=Math.min(...r),M=Math.max(...r),K=Math.round(r.reduce((J,Y)=>J+Y,0)/r.length);return{min:f,avg:K,max:M}},Sa=_.map(r=>r.summary.foodCents),Nn=_.map(r=>r.summary.goingOutCents),Ba=_.map(r=>r.summary.fixedCents),Ea=_.map(r=>r.summary.variableCents),qn=_.map(r=>r.summary.miscCents),oa=_.map(r=>r.summary.totalCents),en=_.map(r=>o?Le.get(A(o.year,r.month))?.plannedBudgetCents??0:0),_a=_.map(r=>o?Le.get(A(o.year,r.month))?.netCents??0:0),Kn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((f,M)=>f+(M.incomeSource==="salary"?M.amountCents:0),0)])),Ln=_.map(r=>Kn.get(r.month)??0),Bt={food:bt(Sa),goingOut:bt(Nn),fixed:bt(Ba),variable:bt(Ea),misc:bt(qn),total:bt(oa),salary:bt(Ln),budget:bt(en),net:bt(_a)},za=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],tn={food:Sa.reduce((r,f)=>r+f,0),goingOut:Nn.reduce((r,f)=>r+f,0),fixed:Ba.reduce((r,f)=>r+f,0),variable:Ea.reduce((r,f)=>r+f,0),misc:qn.reduce((r,f)=>r+f,0),total:oa.reduce((r,f)=>r+f,0),salary:Ln.reduce((r,f)=>r+f,0),budget:en.reduce((r,f)=>r+f,0)},Ma=za.map(({key:r,label:f})=>{const M=Bt.food?.[r]??null,K=Bt.goingOut?.[r]??null,J=Bt.fixed?.[r]??null,Y=Bt.variable?.[r]??null,ee=Bt.misc?.[r]??null,le=Bt.total?.[r]??null,ue=Bt.salary?.[r]??null,pe=Bt.budget?.[r]??null,st=Bt.net?.[r]??null,Qe=jn=>jn===null?"-":k(jn);return`<tr>
                  <td><strong>${f}</strong></td>
                  <td>${Qe(M)}</td>
                  <td>${Qe(K)}</td>
                  <td>${Qe(J)}</td>
                  <td>${Qe(Y)}</td>
                  <td>${Qe(ee)}</td>
                  <td>${Qe(le)}</td>
                  <td>${Qe(ue)}</td>
                  <td>${Qe(pe)}</td>
                  <td>${Qe(st)}</td>
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
                </tr>`,Ua=Math.max(1,..._.flatMap(r=>{const f=ht.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,f??0]})),ua=Math.max(1,..._.flatMap(r=>{const f=ht.get(r.month),M=r.summary.foodCents+r.summary.goingOutCents,K=(f?.foodBudgetCents??0)+(f?.goingOutBudgetCents??0);return[M,K]})),ca=Math.max(1,..._.flatMap(r=>{const f=ht.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,f]})),Wa=Math.max(1,..._.flatMap(r=>{const f=ht.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,f]})),Pa=Math.max(1,..._.flatMap(r=>{const f=ht.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,f]})),dr=ct(d.fixedCents,N),Ga=ct(d.foodCents,D),Ja=ct(d.goingOutCents,L),fr=ct(d.variableCents,X),Ha=ct(d.miscCents,U),dn=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,Xa=h.hasUnexportedChanges,Oa=h.unexportedChangeLog.slice().reverse(),hr=h.lastBackupFileName?Mt(h.lastBackupFileName):"-",pr={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},yt=h.years.slice().sort((r,f)=>r.year-f.year),fn=yt.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??yt[yt.length-1]?.year??null,Oe=typeof fn=="number"?yt.find(r=>r.year===fn):void 0,Ne=Oe?Oe.months.slice().sort((r,f)=>r.month-f.month):[],Ft=Oe?Pn(Oe):pr,Dt=Oe?tt(Oe):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},vr=Oe?Kt(Oe):0,Ta=Oe?Tn(Oe,Le):0,da=vr+Ta,nn=Oe?Oe.months.reduce((r,f)=>r+Ut(f),0):0,fa=da-nn,hn=da-Ft.totalCents,an=[{label:"Essen",budgetCents:Dt.foodCents,actualCents:Ft.foodCents},{label:"Ausgehen",budgetCents:Dt.goingOutCents,actualCents:Ft.goingOutCents},{label:"Fixkosten",budgetCents:Dt.fixedCents,actualCents:Ft.fixedCents},{label:"Variable",budgetCents:Dt.variableCents,actualCents:Ft.variableCents},{label:"Sonstige",budgetCents:Dt.miscCents,actualCents:Ft.miscCents}],rt=Ne.map(r=>{const f=Oe?Le.get(A(Oe.year,r.month)):void 0,M=gn(r),K=r.incomes.reduce((jn,Qa)=>jn+Qa.amountCents,0),J=f?.effectiveIncomeCents??K,Y=f?.plannedBudgetCents??Ut(r),ee=M.foodCents,le=M.goingOutCents,ue=ee+le,pe=M.totalCents,st=J-Y,Qe=J-pe;return{month:r.month,foodCents:ee,goingOutCents:le,foodAndGoingOutCents:ue,effectiveIncomeCents:J,plannedBudgetCents:Y,actualCostCents:pe,plannedNetCents:st,actualNetCents:Qe}}),e=Math.max(1,...rt.map(r=>r.actualCostCents)),t=Math.max(1,...rt.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),n=Math.max(1,...rt.map(r=>r.foodAndGoingOutCents)),a=Math.max(1,...rt.map(r=>r.foodCents)),s=Math.max(1,...rt.map(r=>r.goingOutCents)),i=yt.reduce((r,f)=>{const M=tt(f);return{foodCents:r.foodCents+M.foodCents,goingOutCents:r.goingOutCents+M.goingOutCents,fixedCents:r.fixedCents+M.fixedCents,variableCents:r.variableCents+M.variableCents,miscCents:r.miscCents+M.miscCents,totalCents:r.totalCents+M.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),l=yt.reduce((r,f)=>{const M=Pn(f);return{foodCents:r.foodCents+M.foodCents,goingOutCents:r.goingOutCents+M.goingOutCents,fixedCents:r.fixedCents+M.fixedCents,variableCents:r.variableCents+M.variableCents,miscCents:r.miscCents+M.miscCents,totalCents:r.totalCents+M.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),c=yt.reduce((r,f)=>r+Kt(f),0),C=yt[0]?Tn(yt[0],Le):0,S=c+C,y=S-i.totalCents,m=S-l.totalCents,x=[{label:"Essen",budgetCents:i.foodCents,actualCents:l.foodCents},{label:"Ausgehen",budgetCents:i.goingOutCents,actualCents:l.goingOutCents},{label:"Fixkosten",budgetCents:i.fixedCents,actualCents:l.fixedCents},{label:"Variable",budgetCents:i.variableCents,actualCents:l.variableCents},{label:"Sonstige",budgetCents:i.miscCents,actualCents:l.miscCents}],w=Math.max(1,...x.flatMap(r=>[r.budgetCents,r.actualCents])),g=yt.map(r=>{const f=Pn(r),M=tt(r),K=Kt(r),J=r.months.reduce((le,ue)=>le+ue.incomes.reduce((pe,st)=>pe+(st.incomeSource==="salary"?st.amountCents:0),0),0),Y=Tn(r,Le),ee=K+Y;return{year:r.year,salaryIncomeCents:J,budgetTotalCents:M.totalCents,actualTotalCents:f.totalCents,effectiveIncomeCents:ee,plannedNetCents:ee-M.totalCents,actualNetCents:ee-f.totalCents}}),b=Math.max(1,...g.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),B=Math.max(1,...g.map(r=>r.actualTotalCents)),E=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${yt.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${yt.map(r=>`<option value="${r.year}" ${r.year===fn?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${Oe?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${k(da)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${k(nn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${k(Ft.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ie(fa)}">${k(fa)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ie(hn)}">${k(hn)}</div><div class="eval-value"></div></div>
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
                    ${an.map(r=>{const f=$n(r.actualCents,r.budgetCents),M=Math.min(100,f),K=`${f.toFixed(0)}%`,J=r.budgetCents-r.actualCents,Y=J<0?"danger":J>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${sa(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${M.toFixed(1)}%" title="${r.label}: ${k(r.actualCents)} von ${k(r.budgetCents)}">
                              <span class="circle-chart-value">${K}</span>
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
                    ${rt.map(r=>{const f=De(r.actualCostCents,e);return`
                          <div class="spark-bar" title="${Ee(r.month)}: ${k(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${f}"></div>
                            <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                    ${rt.map(r=>{const f=De(Math.abs(r.plannedNetCents),t),M=De(Math.abs(r.actualNetCents),t),K=r.plannedNetCents<0?"bar-negative":"bar-positive",J=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Ee(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${k(r.plannedNetCents)} | Ist-Saldo: ${k(r.actualNetCents)}">
                              <div class="bar ${K}" style="width:${f}; opacity: 0.35;"></div>
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
                        <td>${Ee(r.month)}</td>
                        <td>${k(r.effectiveIncomeCents)}</td>
                        <td>${k(r.plannedBudgetCents)}</td>
                        <td>${k(r.actualCostCents)}</td>
                        <td class="${ie(r.plannedNetCents)}">${k(r.plannedNetCents)}</td>
                        <td class="${ie(r.actualNetCents)}">${k(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${yt.map(r=>`<option value="${r.year}" ${r.year===fn?"selected":""}>${r.year}</option>`).join("")}
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
                    ${rt.map(r=>{const f=De(r.foodAndGoingOutCents,n);return`
                          <div class="spark-bar" title="${Ee(r.month)}: ${k(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${f}"></div>
                            <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                    ${rt.map(r=>{const f=De(r.foodCents,a);return`
                          <div class="spark-bar" title="${Ee(r.month)}: ${k(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${f}"></div>
                            <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                    ${rt.map(r=>{const f=De(r.goingOutCents,s);return`
                          <div class="spark-bar" title="${Ee(r.month)}: ${k(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${f}"></div>
                            <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ie(m)}">${k(m)}</div><div class="eval-value"></div></div>
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
                    ${x.map(r=>{const f=De(r.budgetCents,w),M=De(r.actualCents,w),K=sa(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${k(r.budgetCents)} | Ist: ${k(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${f}"></div>
                              <div class="bar-marker" style="left:${f}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${K}" style="width:${M}"></div>
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
                    ${g.map(r=>{const f=De(r.actualTotalCents,B);return`
                          <div class="spark-bar" title="${r.year}: ${k(r.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${f}"></div>
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
                    ${g.map(r=>{const f=De(Math.abs(r.plannedNetCents),b),M=De(Math.abs(r.actualNetCents),b),K=r.plannedNetCents<0?"bar-negative":"bar-positive",J=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${k(r.plannedNetCents)} | Ist-Saldo: ${k(r.actualNetCents)}">
                              <div class="bar ${K}" style="width:${f}; opacity: 0.35;"></div>
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
    `,T=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${dn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${dn?pt(dn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${dn?"Änderung speichern":"Vorlage speichern"}</button>
          ${dn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${k(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,F=h.annualVariableFixedTemplates.reduce((r,f)=>r+f.plannedCents,0),R=Math.round(F/12),V=`
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
                <div class="eval-value">${k(R)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const f=Fn(r.dueDateIso),M=f?Ee(f.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${M}</td>
                    <td>${k(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,I=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",z=h.topModal==="years"?$:h.topModal==="fixed"?T:h.topModal==="variable-fixed"?V:h.topModal==="dashboard"?E:"";O.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Xa?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Rr.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${ss(r)}</option>`).join("")}
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

        ${h.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${I}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${I}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${z}
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
                  ${Oa.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${Oa.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Mt(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Ee(h.selectedMonth)} ${o.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${h.years.map(r=>`<option value="${r.year}" ${r.year===h.selectedYear?"selected":""}>${r.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${h.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(r,f)=>f+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Ee(r)}</option>`).join("")}
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
                  ${ia.map(r=>{const f=De(Math.abs(r.valueCents),$a),M=r.valueCents>=0?"+":"",K=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${k(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${f}"></div>
                          </div>
                          <div class="bar-meta"><span class="${K}">${M}${k(r.valueCents)}</span></div>
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
                      ${_.map(r=>{const f=ht.get(r.month)?.totalBudgetCents??0,M=De(f,Ua),K=De(r.summary.totalCents,Ua);return`
                            <div class="spark-bar" title="${Ee(r.month)}: Ist ${k(r.summary.totalCents)} € | Budget ${k(f)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${K}"><span class="spark-bar-fill-value">${k(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const f=ht.get(r.month),M=(f?.foodBudgetCents??0)+(f?.goingOutBudgetCents??0),K=r.summary.foodCents+r.summary.goingOutCents,J=De(M,ua),Y=De(K,ua);return`
                            <div class="spark-bar" title="${Ee(r.month)}: Ist ${k(K)} € | Budget ${k(M)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${J}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Y}"><span class="spark-bar-fill-value">${k(K)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const f=ht.get(r.month)?.fixedBudgetCents??0,M=De(f,ca),K=De(r.summary.fixedCents,ca);return`
                            <div class="spark-bar" title="${Ee(r.month)}: Ist ${k(r.summary.fixedCents)} € | Budget ${k(f)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${K}"><span class="spark-bar-fill-value">${k(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const f=ht.get(r.month)?.variableBudgetCents??0,M=De(f,Wa),K=De(r.summary.variableCents,Wa);return`
                            <div class="spark-bar" title="${Ee(r.month)}: Ist ${k(r.summary.variableCents)} € | Budget ${k(f)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${K}"><span class="spark-bar-fill-value">${k(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const f=ht.get(r.month)?.miscBudgetCents??0,M=De(f,Pa),K=De(r.summary.miscCents,Pa);return`
                            <div class="spark-bar" title="${Ee(r.month)}: Ist ${k(r.summary.miscCents)} € | Budget ${k(f)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${K}"><span class="spark-bar-fill-value">${k(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ee(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${k(at)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${k(ze)}</div>
                    <div class="eval-value">${k(ye)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${fe}">${j?k(je):"-"}</div>
                    <div class="eval-value ${St}">${o?k(Ue):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${k($e)}</div>
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
                    <div class="eval-value">${Ct(D,d.foodCents)}</div>
                    <div class="eval-value">${k(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Ct(L,d.goingOutCents)}</div>
                    <div class="eval-value">${k(he)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Ct(N,d.fixedCents)}</div>
                    <div class="eval-value">${k(ge)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Ct(X,d.variableCents)}</div>
                    <div class="eval-value">${k(We)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Ct(U,d.miscCents)}</div>
                    <div class="eval-value">${k(Ke)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Ct(be,d.totalCents)}</div>
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
                    <div class="eval-value">${k(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Ja}">${k(d.goingOutCents)}</div>
                    <div class="eval-value">${k(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${dr}">${k(d.fixedCents)}</div>
                    <div class="eval-value">${k(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${fr}">${k(d.variableCents)}</div>
                    <div class="eval-value">${k(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Ha}">${k(d.miscCents)}</div>
                    <div class="eval-value">${k(v.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${k(d.totalCents)}</div>
                    <div class="eval-value">${k(v.totalCents)}</div>
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
                    <div class="eval-value ${Se}">${k(te)}</div>
                    <div class="eval-value ${Be}">${k($t)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${ie(Ce)}">${k(Ce)}</div>
                    <div class="eval-value ${ie(He)}">${k(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Yt}">${Je}</div>
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
                ${_.map((r,f,M)=>{const K=o?Le.get(A(o.year,r.month)):void 0,J=K?.plannedBudgetCents??0,Y=K?.netCents??0,ee=Kn.get(r.month)??0,le=Y<0?"danger":Y>0?"budget-under":"",ue=M[f-1],pe=ue?.summary.foodCents??null,st=ue?.summary.goingOutCents??null,Qe=ue?.summary.fixedCents??null,jn=ue?.summary.variableCents??null,Qa=ue?.summary.miscCents??null,wr=ue?.summary.totalCents??null,kr=ue!==void 0?Kn.get(ue.month)??0:null,$r=o&&ue?Le.get(A(o.year,ue.month))?.plannedBudgetCents??0:null,Sr=pe===null?null:r.summary.foodCents-pe,Br=st===null?null:r.summary.goingOutCents-st,Er=Qe===null?null:r.summary.fixedCents-Qe,_r=jn===null?null:r.summary.variableCents-jn,Mr=Qa===null?null:r.summary.miscCents-Qa,Pr=wr===null?null:r.summary.totalCents-wr,Or=kr===null?null:ee-kr,Tr=$r===null?null:J-$r,Rn=zt=>zt===null?"muted":zt>0?"danger":zt<0?"budget-under":"muted",Yr=zt=>zt===null?"muted":zt>0?"danger":zt<0?"budget-under":"muted",Sn=zt=>zt===null?"(Δ -)":`(Δ ${zt>0?"+":""}${k(zt)})`,Ar=o&&ue?Le.get(A(o.year,ue.month))?.netCents??0:null,ha=Ar===null?null:Y-Ar,zr=ha===null?"(Δ -)":`(Δ ${ha>0?"+":""}${k(ha)})`,Ur=ha===null?"muted":ha<0?"danger":ha>0?"budget-under":"muted";return`<tr>
                  <td>${Ee(r.month)}</td>
                  <td>${k(r.summary.foodCents)} <span class="${Rn(Sr)}">${Sn(Sr)}</span></td>
                  <td>${k(r.summary.goingOutCents)} <span class="${Rn(Br)}">${Sn(Br)}</span></td>
                  <td>${k(r.summary.fixedCents)} <span class="${Rn(Er)}">${Sn(Er)}</span></td>
                  <td>${k(r.summary.variableCents)} <span class="${Rn(_r)}">${Sn(_r)}</span></td>
                  <td>${k(r.summary.miscCents)} <span class="${Rn(Mr)}">${Sn(Mr)}</span></td>
                  <td>${k(r.summary.totalCents)} <span class="${Rn(Pr)}">${Sn(Pr)}</span></td>
                  <td>${k(ee)} <span class="${Rn(Or)}">${Sn(Or)}</span></td>
                  <td>${k(J)} <span class="${Yr(Tr)}">${Sn(Tr)}</span></td>
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
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${pt(je)}" />
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
                  <strong>${k(ze)} €</strong>
                </div>
                <div class="column-overview-row ${fe}">
                  <span>Übernahme Vormonat</span>
                  <strong>${u?`${k(je)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${k($e)} €</strong>
                </div>
                <div class="column-overview-row ${Pe}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${k(nt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Wt(D,d.foodCents)}
                ${Wt(L,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${k(Ie)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${k(Re)} €</strong>
                  </div>
                  <div class="column-overview-row ${gt}">
                    <span>Diff</span>
                    <strong>${k(Ve)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${pt(D)}" ${u?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${pt(L)}" ${u?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${u?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${u?u.days.map(r=>{const f=r.foodCents>0,M=r.goingOutCents>0,K=`${r.isoDate===p?"today-row":""} ${f||M?"day-has-entry":""}`.trim(),J=`amount-input ${f?"day-input-has-value":""}`.trim(),Y=`amount-input ${M?"day-input-has-value":""}`.trim();return`<tr class="${K}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${J}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${pt(r.foodCents)}" /></td>
                      <td><input class="${Y}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${pt(r.goingOutCents)}" /></td>
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
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${pt(N)}" ${u?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${pt(r.plannedCents)}" /></td>
                    <td class="${ct(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${pt(r.actualCents)}" /></td>
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
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${pt(X)}" ${u?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${pt(r.budgetCents)}" /></td>
                    <td class="${ct(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${pt(r.actualCents)}" /></td>
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
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${pt(U)}" ${u?"":"disabled"} />
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal)),Ya(),lt(),ma()}function Ya(){const o=O.querySelector("#theme-select"),u=O.querySelector("#open-years-modal"),p=O.querySelector("#open-fixed-modal"),d=O.querySelector("#open-variable-fixed-modal"),v=O.querySelector("#open-dashboard-modal"),_=O.querySelector("#panel-modal-close"),D=O.querySelector("#panel-modal-backdrop"),L=O.querySelector("#open-unexported-change-log"),N=O.querySelector("#unexported-change-log-close"),X=O.querySelector("#unexported-change-log-backdrop"),U=O.querySelector("#new-year"),Q=O.querySelector("#create-year"),he=O.querySelector("#year-select"),ge=O.querySelector("#month-select");o?.addEventListener("change",()=>{const P=o.value;Kr(P)&&on(P)}),u?.addEventListener("click",()=>{xt("years")}),p?.addEventListener("click",()=>{xt("fixed")}),d?.addEventListener("click",()=>{xt("variable-fixed")}),v?.addEventListener("click",()=>{xt("dashboard")}),L?.addEventListener("click",()=>{nr()}),N?.addEventListener("click",()=>{pn()}),X?.addEventListener("click",P=>{P.target===X&&pn()}),O.querySelectorAll("[data-dashboard-tab]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(h.dashboardTab=q,ne())})});const We=O.querySelector("#dashboard-year-select");We?.addEventListener("change",()=>{const P=Number.parseInt(We.value,10);Number.isInteger(P)&&(h.dashboardYear=P,ne())}),_?.addEventListener("click",()=>{va()}),D?.addEventListener("click",P=>{P.target===D&&va()}),h.topModal&&window.setTimeout(()=>{_?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{N?.focus()},0),Q?.addEventListener("click",async()=>{const P=Number.parseInt(U?.value??"",10);if(!Number.isInteger(P)){alert("Bitte gültiges Jahr eingeben.");return}await ya(P)}),he?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(he.value,10),h.selectedMonth=wt(),ne()}),ge?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(ge.value,10),ne()});const Ke=O.querySelector("#fixed-template-name"),W=O.querySelector("#fixed-template-amount"),ze=O.querySelector("#add-fixed-template"),Le=O.querySelector("#cancel-fixed-template-edit"),Ge=O.querySelector("#annual-variable-fixed-name"),Me=O.querySelector("#annual-variable-fixed-date"),je=O.querySelector("#annual-variable-fixed-amount"),j=O.querySelector("#add-annual-variable-fixed-template");ze?.addEventListener("click",async()=>{const P=Ke?.value??"",q=Te(W?.value??"0");await ke(P,q),Ke&&(Ke.value=""),W&&(W.value="")}),Le?.addEventListener("click",()=>{ur()}),j?.addEventListener("click",async()=>{const P=Ge?.value??"",q=Me?.value??"",ie=Te(je?.value??"0");await Qn(P,q,ie),Ge&&(Ge.value=""),Me&&(Me.value=""),je&&(je.value="")}),O.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeAnnualVariableFixedTemplate;q&&await Zn(q)})}),O.querySelectorAll("[data-edit-fixed-template]").forEach(P=>{P.addEventListener("click",()=>{const q=P.dataset.editFixedTemplate;q&&Ye(q)})}),O.querySelectorAll("[data-remove-fixed-template]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixedTemplate;q&&await Xn(q)})}),O.querySelectorAll("[data-day-food]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayFood;q&&await qa(q,"foodCents",Te(P.value))})}),O.querySelectorAll("[data-day-going]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.dayGoing;q&&await qa(q,"goingOutCents",Te(P.value))})}),O.querySelectorAll("[data-fixed-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedActual;q&&await Gt(q,Te(P.value))})}),O.querySelectorAll("[data-fixed-planned]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.fixedPlanned;q&&await Cn(q,Te(P.value))})});const $e=O.querySelector("#fixed-budget");$e?.addEventListener("click",P=>{P.preventDefault(),$e.blur(),ut($e)}),$e?.addEventListener("change",async()=>{await cr(Te($e.value))});const ft=O.querySelector("#food-budget");ft?.addEventListener("click",P=>{P.preventDefault(),ft.blur(),ut(ft)}),ft?.addEventListener("change",async()=>{await Ht(Te(ft.value))});const nt=O.querySelector("#going-out-budget");nt?.addEventListener("click",P=>{P.preventDefault(),nt.blur(),ut(nt)}),nt?.addEventListener("change",async()=>{await Ka(Te(nt.value))}),O.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{rr()});const Ce=O.querySelector("#misc-budget");Ce?.addEventListener("click",P=>{P.preventDefault(),Ce.blur(),ut(Ce)}),Ce?.addEventListener("change",async()=>{await un(Te(Ce.value))});const Je=O.querySelector("#variable-budget");Je?.addEventListener("click",P=>{P.preventDefault(),Je.blur(),ut(Je)}),Je?.addEventListener("change",async()=>{await La(Te(Je.value))});const fe=O.querySelector("#variable-position-name"),Pe=O.querySelector("#variable-position-budget"),Se=O.querySelector("#add-variable-position"),at=O.querySelector("#add-variable-position-recurring"),ye=O.querySelector("#misc-description"),Ue=O.querySelector("#misc-amount"),jt=O.querySelector("#add-misc"),$t=O.querySelector("#add-misc-recurring"),He=O.querySelector("#income-description"),mt=O.querySelector("#income-source"),St=O.querySelector("#income-amount"),Be=O.querySelector("#add-income"),be=O.querySelector("#add-income-recurring"),Ie=O.querySelector("#fixed-cost-name"),Re=O.querySelector("#fixed-cost-budget"),Ve=O.querySelector("#add-fixed-cost"),gt=O.querySelector("#carryover-override");gt?.addEventListener("click",P=>{P.preventDefault(),gt.blur(),ut(gt)}),gt?.addEventListener("change",async()=>{const P=gt.value;if(!P.trim()){await Fe(null);return}await Fe(Te(P))}),Ve?.addEventListener("click",async()=>{const P=Te(Re?.value??"0");await Jt(Ie?.value??"",P),Ie&&(Ie.value=""),Re&&(Re.value="")}),Se?.addEventListener("click",async()=>{const P=Te(Pe?.value??"0");await Xt(fe?.value??"",P,!1),fe&&(fe.value=""),Pe&&(Pe.value="")}),at?.addEventListener("click",async()=>{const P=Te(Pe?.value??"0");await Xt(fe?.value??"",P,!0),fe&&(fe.value=""),Pe&&(Pe.value="")}),jt?.addEventListener("click",async()=>{const P=Te(Ue?.value??"0");await na(ye?.value??"",P,!1),ye&&(ye.value=""),Ue&&(Ue.value="")}),$t?.addEventListener("click",async()=>{const P=Te(Ue?.value??"0");await na(ye?.value??"",P,!0),ye&&(ye.value=""),Ue&&(Ue.value="")}),Be?.addEventListener("click",async()=>{const P=Te(St?.value??"0"),q=mt?.value,ie=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await Qt(He?.value??"",P,ie,!1),He&&(He.value=""),St&&(St.value=""),mt&&(mt.value="salary")}),be?.addEventListener("click",async()=>{const P=Te(St?.value??"0"),q=mt?.value,ie=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await Qt(He?.value??"",P,ie,!0),He&&(He.value=""),St&&(St.value=""),mt&&(mt.value="salary")}),O.querySelectorAll("[data-income-source]").forEach(P=>{P.addEventListener("change",async()=>{const q=P.dataset.incomeSource;if(!q)return;const ie=P.value;await Ra(q,ie==="balance"||ie==="fresh"||ie==="salary"?ie:void 0)})}),O.querySelectorAll("[data-variable-position-budget]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionBudget;q&&await ja(q,Te(P.value))})}),O.querySelectorAll("[data-variable-position-actual]").forEach(P=>{P.addEventListener("click",q=>{q.preventDefault(),P.blur(),ut(P)}),P.addEventListener("change",async()=>{const q=P.dataset.variablePositionActual;q&&await Lt(q,Te(P.value))})}),O.querySelectorAll("[data-remove-variable-position]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeVariablePosition;q&&await xn(q)})}),O.querySelectorAll("[data-move-variable-position-next]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.moveVariablePositionNext;q&&await ta(q)})}),O.querySelectorAll("[data-remove-fixed]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeFixed;q&&await ea(q)})}),O.querySelectorAll("[data-remove-income]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeIncome;q&&await aa(q)})}),O.querySelectorAll("[data-remove-misc]").forEach(P=>{P.addEventListener("click",async()=>{const q=P.dataset.removeMisc;q&&await ka(q)})});const At=O.querySelector("#backup-export"),Rt=O.querySelector("#backup-import");O.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),At?.addEventListener("click",async()=>{await Va()}),Rt?.addEventListener("change",async()=>{const P=Rt.files?.[0];if(P){try{await oe(P)}catch(q){console.error("Backup-Import fehlgeschlagen",q),xe("Backup konnte nicht importiert werden.","error")}Rt.value=""}})}return{init:or}}const os="modulepreload",ls=function(O){return"/habu26/"+O},jr={},us=function(h,_e,G){let ce=Promise.resolve();if(_e&&_e.length>0){let Ze=function(qe){return Promise.all(qe.map(se=>Promise.resolve(se).then(vt=>({status:"fulfilled",value:vt}),vt=>({status:"rejected",reason:vt}))))};var ve=Ze;document.getElementsByTagName("link");const re=document.querySelector("meta[property=csp-nonce]"),de=re?.nonce||re?.getAttribute("nonce");ce=Ze(_e.map(qe=>{if(qe=ls(qe),qe in jr)return;jr[qe]=!0;const se=qe.endsWith(".css"),vt=se?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${qe}"]${vt}`))return;const ot=document.createElement("link");if(ot.rel=se?"stylesheet":os,se||(ot.as="script"),ot.crossOrigin="",ot.href=qe,de&&ot.setAttribute("nonce",de),document.head.appendChild(ot),se)return new Promise((lt,xt)=>{ot.addEventListener("load",lt),ot.addEventListener("error",()=>xt(new Error(`Unable to preload CSS for ${qe}`)))})}))}function ae(re){const de=new Event("vite:preloadError",{cancelable:!0});if(de.payload=re,window.dispatchEvent(de),!de.defaultPrevented)throw re}return ce.then(re=>{for(const de of re||[])de.status==="rejected"&&ae(de.reason);return h().catch(ae)})};function cs(O={}){const{immediate:h=!1,onNeedRefresh:_e,onOfflineReady:G,onRegistered:ce,onRegisteredSW:ae,onRegisterError:ve}=O;let re,de;const Ze=async(se=!0)=>{await de};async function qe(){if("serviceWorker"in navigator){if(re=await us(async()=>{const{Workbox:se}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:se}},[]).then(({Workbox:se})=>new se("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(se=>{ve?.(se)}),!re)return;re.addEventListener("activated",se=>{(se.isUpdate||se.isExternal)&&window.location.reload()}),re.addEventListener("installed",se=>{se.isUpdate||G?.()}),re.register({immediate:h}).then(se=>{ae?ae("/habu26/sw.js",se):ce?.(se)}).catch(se=>{ve?.(se)})}}return de=qe(),Ze}function ds(){cs({immediate:!0})}const Vr=document.getElementById("app");if(!Vr)throw new Error("App-Container nicht gefunden.");is(Vr).init();ds();
