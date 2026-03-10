(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const ue of document.querySelectorAll('link[rel="modulepreload"]'))W(ue);new MutationObserver(ue=>{for(const ae of ue)if(ae.type==="childList")for(const pe of ae.addedNodes)pe.tagName==="LINK"&&pe.rel==="modulepreload"&&W(pe)}).observe(document,{childList:!0,subtree:!0});function Ee(ue){const ae={};return ue.integrity&&(ae.integrity=ue.integrity),ue.referrerPolicy&&(ae.referrerPolicy=ue.referrerPolicy),ue.crossOrigin==="use-credentials"?ae.credentials="include":ue.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function W(ue){if(ue.ep)return;ue.ep=!0;const ae=Ee(ue);fetch(ue.href,ae)}})();const zr=[1,2,3,4,5,6,7,8,9,10,11,12];function yr(){return new Date().toISOString()}function Bt(T){const f=Math.random().toString(36).slice(2,10);return`${T}_${Date.now()}_${f}`}function Ur(T,f){const Ee=new Date(T,f,0).getDate(),W=[];for(let ue=1;ue<=Ee;ue+=1){const ae=new Date(Date.UTC(T,f-1,ue));W.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return W}function Wr(T){return T.map(f=>({id:Bt("fixed"),templateId:f.id,name:f.name,plannedCents:f.plannedCents,actualCents:0}))}function Tr(T,f,Ee){const W=f.reduce((ae,pe)=>ae+pe.plannedCents,0),ue=zr.map(ae=>({month:ae,days:Ur(T,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Wr(f),fixedBudgetCents:W,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:T,createdAt:yr(),templateVersion:Ee,months:ue}}function Ar(T,f){return{id:Bt("expense"),description:T,amountCents:f,createdAt:yr()}}function Fr(T,f,Ee){const W={id:Bt("income"),description:T,amountCents:f,createdAt:yr()};return Ee?{...W,incomeSource:Ee}:W}var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jr(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var Xa={exports:{}},Hr=Xa.exports,Dr;function Xr(){return Dr||(Dr=1,(function(T,f){((Ee,W)=>{T.exports=W()})(Hr,function(){var Ee=function(e,t){return(Ee=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},W=function(){return(W=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ue(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Gr,pe=Object.keys,re=Array.isArray;function ce(e,t){return typeof t=="object"&&pe(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var Qe=Object.getPrototypeOf,Ne={}.hasOwnProperty;function se(e,t){return Ne.call(e,t)}function ht(e,t){typeof t=="function"&&(t=t(Qe(e))),(typeof Reflect>"u"?pe:Reflect.ownKeys)(t).forEach(function(n){it(e,n,t[n])})}var st=Object.defineProperty;function it(e,t,n,a){st(e,t,ce(n&&se(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function Ct(e){return{from:function(t){return e.prototype=Object.create(t.prototype),it(e.prototype,"constructor",e),{extend:ht.bind(null,e.prototype)}}}}var pa=Object.getOwnPropertyDescriptor,er=[].slice;function hn(e,t,n){return er.call(e,t,n)}function Ta(e,t){return t(e)}function Bn(e){if(!e)throw new Error("Assertion Failed")}function va(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function Dt(e,t){if(typeof t=="string"&&se(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Dt(e,t[a]);n.push(i)}return n}var l,c=t.indexOf(".");return c===-1||(l=e[t.substr(0,c)])==null?void 0:Dt(l,t.substr(c+1))}function Ze(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Bn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)Ze(e,t[a],n[a])}else{var i,l,c=t.indexOf(".");c!==-1?(i=t.substr(0,c),(c=t.substr(c+1))===""?n===void 0?re(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:Ze(l=(l=e[i])&&se(e,i)?l:e[i]={},c,n)):n===void 0?re(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Aa(e){var t,n={};for(t in e)se(e,t)&&(n[t]=e[t]);return n}var tr=[].concat;function It(e){return tr.apply([],e)}var _t="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(It([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),pn=new Set(_t.map(function(e){return ae[e]})),En=null;function an(e){return En=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=En.get(n);if(a)return a;if(re(n)){a=[],En.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(pn.has(n.constructor))a=n;else{var l,c=Qe(n);for(l in a=c===Object.prototype?{}:Object.create(c),En.set(n,a),n)se(n,l)&&(a[l]=t(n[l]))}return a})(e),En=null,e}var nr={}.toString;function Yn(e){return nr.call(e).slice(8,-1)}var ot=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ce=typeof ot=="symbol"?function(e){var t;return e!=null&&(t=e[ot])&&t.apply(e)}:function(){return null};function xt(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var rn={};function Et(e){var t,n,a,s;if(arguments.length===1){if(re(e))return e.slice();if(this===rn&&typeof e=="string")return[e];if(s=Ce(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var ma=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},_t=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],et=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(_t),ar={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function sn(e,t){this.name=e,this.message=t}function Fa(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function _n(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Fa(e,t)}function vn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Fa(e,this.failures)}Ct(sn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Ct(_n).from(sn),Ct(vn).from(sn);var zn=et.reduce(function(e,t){return e[t]=t+"Error",e},{}),rr=sn,Z=et.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=ar[t]||n,this.inner=null)}return Ct(a).from(rr),e[t]=a,e},{}),Da=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,_t.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));_t=et.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function ve(){}function Mn(e){return e}function sr(e,t){return e==null||e===Mn?t:function(n){return t(e(n))}}function Nt(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ga(e,t){return e===ve?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?Nt(a,this.onsuccess):a),s&&(this.onerror=this.onerror?Nt(s,this.onerror):s),i!==void 0?i:n}}function Un(e,t){return e===ve?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Nt(n,this.onsuccess):n),a&&(this.onerror=this.onerror?Nt(a,this.onerror):a)}}function Ia(e,t){return e===ve?t:function(s){var a=e.apply(this,arguments),s=(ce(s,a),this.onsuccess),i=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?Nt(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Nt(i,this.onerror):i),a===void 0?l===void 0?void 0:l:ce(a,l)}}function Wn(e,t){return e===ve?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Te(e,t){return e===ve?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}_t.ModifyError=_n,_t.DexieError=sn,_t.BulkError=vn;var Mt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function mn(e){Mt=e}var zt={},Pn=100,On=typeof Promise>"u"?[]:(et=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[On=crypto.subtle.digest("SHA-512",new Uint8Array([0])),Qe(On),et]:[et,Qe(et),et]),et=On[0],Ft=On[1],Ft=Ft&&Ft.then,qt=et&&et.constructor,Tn=!!On[2],An=function(e,t){gn.push([e,t]),Gn&&(queueMicrotask(ir),Gn=!1)},lt=!0,Gn=!0,yt=[],Ut=[],ba=Mn,wt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ve,pgp:!1,env:{},finalize:ve},J=wt,gn=[],xe=0,ut=[];function F(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=J;if(typeof e!="function"){if(e!==zt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Dn(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var l=a._lib&&on();i&&typeof i.then=="function"?n(a,function(c,C){i instanceof F?i._then(c,C):i.then(c,C)}):(a._state=!0,a._value=i,Ca(a)),l&&bn()}},Dn.bind(null,a))}catch(i){Dn(a,i)}})(this,e)}var Fn={get:function(){var e=J,t=Qn;function n(a,s){var i=this,l=!e.global&&(e!==J||t!==Qn),c=l&&!Gt(),C=new F(function(S,y){Pt(i,new ya(Ka(a,e,l,c),Ka(s,e,l,c),S,y,e))});return this._consoleTask&&(C._consoleTask=this._consoleTask),C}return n.prototype=zt,n},set:function(e){it(this,"then",e&&e.prototype===zt?Fn:{get:function(){return e},set:Fn.set})}};function ya(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function Dn(e,t){var n,a;Ut.push(t),e._state===null&&(n=e._lib&&on(),t=ba(t),e._state=!1,e._value=t,a=e,yt.some(function(s){return s._value===a._value})||yt.push(a),Ca(e),n)&&bn()}function Ca(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Pt(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),xe===0&&(++xe,An(function(){--xe==0&&xa()},[]))}function Pt(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++xe,An(Ot,[n,e,t])}}function Ot(e,t,n){try{var a,s=t._value;!t._state&&Ut.length&&(Ut=[]),a=Mt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||Ut.indexOf(s)!==-1||(i=>{for(var l=yt.length;l;)if(yt[--l]._value===i._value)return yt.splice(l,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--xe==0&&xa(),--n.psd.ref||n.psd.finalize()}}function ir(){ln(wt,function(){on()&&bn()})}function on(){var e=lt;return Gn=lt=!1,e}function bn(){var e,t,n;do for(;0<gn.length;)for(e=gn,gn=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<gn.length);Gn=lt=!0}function xa(){for(var e=yt,t=(yt=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),ut.slice(0)),n=t.length;n;)t[--n]()}function Jn(e){return new F(zt,!1,e)}function we(e,t){var n=J;return function(){var a=on(),s=J;try{return Jt(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Jt(s,!1),a&&bn()}}}ht(F.prototype,{then:Fn,_then:function(e,t){Pt(this,new ya(null,null,e,t,J))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:Jn)(a)}):this.then(null,function(a){return(a&&a.name===t?n:Jn)(a)}))},finally:function(e){return this.then(function(t){return F.resolve(e()).then(function(){return t})},function(t){return F.resolve(e()).then(function(){return Jn(t)})})},timeout:function(e,t){var n=this;return e<1/0?new F(function(a,s){var i=setTimeout(function(){return s(new Z.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&it(F.prototype,Symbol.toStringTag,"Dexie.Promise"),wt.env=qa(),ht(F,{all:function(){var e=Et.apply(null,arguments).map(Zn);return new F(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return F.resolve(s).then(function(l){e[i]=l,--a||t(e)},n)})})},resolve:function(e){return e instanceof F?e:e&&typeof e.then=="function"?new F(function(t,n){e.then(t,n)}):new F(zt,!0,e)},reject:Jn,race:function(){var e=Et.apply(null,arguments).map(Zn);return new F(function(t,n){e.map(function(a){return F.resolve(a).then(t,n)})})},PSD:{get:function(){return J},set:function(e){return J=e}},totalEchoes:{get:function(){return Qn}},newPSD:Wt,usePSD:ln,scheduler:{get:function(){return An},set:function(e){An=e}},rejectionMapper:{get:function(){return ba},set:function(e){ba=e}},follow:function(e,t){return new F(function(n,a){return Wt(function(s,i){var l=J;l.unhandleds=[],l.onunhandled=i,l.finalize=Nt(function(){var c,C=this;c=function(){C.unhandleds.length===0?s():i(C.unhandleds[0])},ut.push(function S(){c(),ut.splice(ut.indexOf(S),1)}),++xe,An(function(){--xe==0&&xa()},[])},l.finalize),e()},t,n,a)})}}),qt&&(qt.allSettled&&it(F,"allSettled",function(){var e=Et.apply(null,arguments).map(Zn);return new F(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return F.resolve(s).then(function(l){return a[i]={status:"fulfilled",value:l}},function(l){return a[i]={status:"rejected",reason:l}}).then(function(){return--n||t(a)})})})}),qt.any&&typeof AggregateError<"u"&&it(F,"any",function(){var e=Et.apply(null,arguments).map(Zn);return new F(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,l){return F.resolve(i).then(function(c){return t(c)},function(c){s[l]=c,--a||n(new AggregateError(s))})})})}),qt.withResolvers)&&(F.withResolvers=qt.withResolvers);var Ye={awaits:0,echoes:0,id:0},or=0,Hn=[],Xn=0,Qn=0,Na=0;function Wt(e,l,n,a){var s=J,i=Object.create(s),l=(i.parent=s,i.ref=0,i.global=!1,i.id=++Na,wt.env,i.env=Tn?{Promise:F,PromiseProp:{value:F,configurable:!0,writable:!0},all:F.all,race:F.race,allSettled:F.allSettled,any:F.any,resolve:F.resolve,reject:F.reject}:{},l&&ce(i,l),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},ln(i,e,n,a));return i.ref===0&&i.finalize(),l}function yn(){return Ye.id||(Ye.id=++or),++Ye.awaits,Ye.echoes+=Pn,Ye.id}function Gt(){return!!Ye.awaits&&(--Ye.awaits==0&&(Ye.id=0),Ye.echoes=Ye.awaits*Pn,!0)}function Zn(e){return Ye.echoes&&e&&e.constructor===qt?(yn(),e.then(function(t){return Gt(),t},function(t){return Gt(),Ae(t)})):e}function lr(){var e=Hn[Hn.length-1];Hn.pop(),Jt(e,!1)}function Jt(e,t){var n,a,s=J;(t?!Ye.echoes||Xn++&&e===J:!Xn||--Xn&&e===J)||queueMicrotask(t?(function(i){++Qn,Ye.echoes&&--Ye.echoes!=0||(Ye.echoes=Ye.awaits=Ye.id=0),Hn.push(J),Jt(i,!0)}).bind(null,e):lr),e!==J&&(J=e,s===wt&&(wt.env=qa()),Tn)&&(n=wt.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(ae,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function qa(){var e=ae.Promise;return Tn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function ln(e,t,n,a,s){var i=J;try{return Jt(e,!0),t(n,a,s)}finally{Jt(i,!1)}}function Ka(e,t,n,a){return typeof e!="function"?e:function(){var s=J;n&&yn(),Jt(t,!0);try{return e.apply(this,arguments)}finally{Jt(s,!1),a&&queueMicrotask(Gt)}}}function un(e){Promise===qt&&Ye.echoes===0?Xn===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Ft).indexOf("[native code]")===-1&&(yn=Gt=ve);var Ae=F.reject,Ht="￿",Kt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",La="String expected.",Cn=[],ea="__dbnames",ta="readonly",wa="readwrite";function Xt(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ja={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function na(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=an(t))[e],t}}function Ra(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function oe(e,t){try{var n=ne(e),a=ne(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=Va(e),i=Va(t),l=s.length,c=i.length,C=l<c?l:c,S=0;S<C;++S)if(s[S]!==i[S])return s[S]<i[S]?-1:1;return l===c?0:l<c?-1:1;case"Array":for(var y=e,m=t,x=y.length,w=m.length,g=x<w?x:w,b=0;b<g;++b){var B=oe(y[b],m[b]);if(B!==0)return B}return x===w?0:x<w?-1:1}}catch{}return NaN}function ne(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Yn(e))==="ArrayBuffer")?"binary":t}function Va(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function o(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}h.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(re(n))return ue(ue([],re(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(re(a))return re(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var u=h;function h(e){this["@@propmod"]=e}function d(e,t){for(var n=pe(t),a=n.length,s=!1,i=0;i<a;++i){var l=n[i],c=t[l],C=Dt(e,l);c instanceof u?(Ze(e,l,c.execute(C)),s=!0):C!==c&&(Ze(e,l,c),s=!0)}return s}_.prototype._trans=function(e,t,n){var a=this._tx||J.trans,s=this.name,i=Mt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function l(S,y,m){if(m.schema[s])return t(m.idbtrans,m);throw new Z.NotFound("Table "+s+" not part of transaction")}var c=on();try{var C=a&&a.db._novip===this.db._novip?a===J.trans?a._promise(e,l,n):Wt(function(){return a._promise(e,l,n)},{trans:a,transless:J.transless||J}):(function S(y,m,x,w){if(y.idbdb&&(y._state.openComplete||J.letThrough||y._vip)){var g=y._createTransaction(m,x,y._dbSchema);try{g.create(),y._state.PR1398_maxLoop=3}catch(b){return b.name===zn.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return S(y,m,x,w)})):Ae(b)}return g._promise(m,function(b,B){return Wt(function(){return J.trans=g,w(b,B,g)})}).then(function(b){if(m==="readwrite")try{g.idbtrans.commit()}catch{}return m==="readonly"?b:g._completion.then(function(){return b})})}if(y._state.openComplete)return Ae(new Z.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Ae(new Z.DatabaseClosed);y.open().catch(ve)}return y._state.dbReadyPromise.then(function(){return S(y,m,x,w)})})(this.db,e,[this.name],l);return i&&(C._consoleTask=i,C=C.catch(function(S){return console.trace(S),Ae(S)})),C}finally{c&&bn()}},_.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ae(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},_.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(re(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=pe(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(c){if(c.compound&&t.every(function(S){return 0<=c.keyPath.indexOf(S)})){for(var C=0;C<t.length;++C)if(t.indexOf(c.keyPath[C])===-1)return!1;return!0}return!1}).sort(function(c,C){return c.keyPath.length-C.keyPath.length})[0];if(n&&this.db._maxKey!==Ht)return l=n.keyPath.slice(0,t.length),this.where(l).equals(l.map(function(c){return e[c]}));!n&&Mt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(c,C){return oe(c,C)===0}var l=t.reduce(function(y,C){var S=y[0],y=y[1],m=a[C],x=e[C];return[S||m,S||!m?Xt(y,m&&m.multi?function(w){return w=Dt(w,C),re(w)&&w.some(function(g){return s(x,g)})}:function(w){return s(x,Dt(w,C))}):y]},[null,null]),i=l[0],l=l[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(l):n?this.filter(l):this.where(t).equals("")},_.prototype.filter=function(e){return this.toCollection().and(e)},_.prototype.count=function(e){return this.toCollection().count(e)},_.prototype.offset=function(e){return this.toCollection().offset(e)},_.prototype.limit=function(e){return this.toCollection().limit(e)},_.prototype.each=function(e){return this.toCollection().each(e)},_.prototype.toArray=function(e){return this.toCollection().toArray(e)},_.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},_.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,re(e)?"[".concat(e.join("+"),"]"):e))},_.prototype.reverse=function(){return this.toCollection().reverse()},_.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof Ra&&(e=(l=>{var c=y,C=l;if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");function S(){this.constructor=c}function y(){return l!==null&&l.apply(this,arguments)||this}return Ee(c,C),c.prototype=C===null?Object.create(C):(S.prototype=C.prototype,new S),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),s=e.prototype;s;s=Qe(s))Object.getOwnPropertyNames(s).forEach(function(l){return a.add(l)});function i(l){if(!l)return l;var c,C=Object.create(e.prototype);for(c in l)if(!a.has(c))try{C[c]=l[c]}catch{}return C}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},_.prototype.defineClass=function(){return this.mapToClass(function(e){ce(this,e)})},_.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=na(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"add",keys:t!=null?[t]:null,values:[l]})}).then(function(c){return c.numFailures?F.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{Ze(e,i,c)}catch{}return c})},_.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var l=i??{};return d(l,t),a&&Ze(l,a,e),n.core.mutate({trans:s,type:"put",values:[l],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(c){return c.numFailures?F.reject(c.failures[0]):!!i})})})},_.prototype.update=function(e,t){return typeof e!="object"||re(e)?this.where(":id").equals(e).modify(t):(e=Dt(e,this.schema.primKey.keyPath))===void 0?Ae(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},_.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,l=e;return i&&s&&(l=na(i)(e)),this._trans("readwrite",function(c){return n.core.mutate({trans:c,type:"put",values:[l],keys:t!=null?[t]:null})}).then(function(c){return c.numFailures?F.reject(c.failures[0]):c.lastResult}).then(function(c){if(i)try{Ze(e,i,c)}catch{}return c})},_.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return o(t,[e],a)}).then(function(a){return a.numFailures?F.reject(a.failures[0]):void 0})})},_.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:ja}).then(function(n){return o(e,null,n)})}).then(function(t){return t.numFailures?F.reject(t.failures[0]):void 0})},_.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},_.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,S=c.auto,c=c.keyPath;if(c&&s)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var C=e.length,S=c&&S?e.map(na(c)):e;return a.core.mutate({trans:l,type:"add",keys:s,values:S,wantResults:i}).then(function(y){var m=y.numFailures,x=y.failures;if(m===0)return i?y.results:y.lastResult;throw new vn("".concat(a.name,".bulkAdd(): ").concat(m," of ").concat(C," operations failed"),x)})})},_.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(l){var c=a.schema.primKey,S=c.auto,c=c.keyPath;if(c&&s)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var C=e.length,S=c&&S?e.map(na(c)):e;return a.core.mutate({trans:l,type:"put",keys:s,values:S,wantResults:i}).then(function(y){var m=y.numFailures,x=y.failures;if(m===0)return i?y.results:y.lastResult;throw new vn("".concat(a.name,".bulkPut(): ").concat(m," of ").concat(C," operations failed"),x)})})},_.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(l){return l.key}),s=e.map(function(l){return l.changes}),i=[];return this._trans("readwrite",function(l){return n.getMany({trans:l,keys:a,cache:"clone"}).then(function(c){var C=[],S=[],y=(e.forEach(function(m,x){var w=m.key,g=m.changes,b=c[x];if(b){for(var B=0,E=Object.keys(g);B<E.length;B++){var k=E[B],A=g[k];if(k===t.schema.primKey.keyPath){if(oe(A,w)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else Ze(b,k,A)}i.push(x),C.push(w),S.push(b)}}),C.length);return n.mutate({trans:l,type:"put",keys:C,values:S,updates:{keys:a,changeSpecs:s}}).then(function(m){var x=m.numFailures,w=m.failures;if(x===0)return y;for(var g=0,b=Object.keys(w);g<b.length;g++){var B,E=b[g],k=i[Number(E)];k!=null&&(B=w[E],delete w[E],w[k]=B)}throw new vn("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(y," operations failed"),w)})})})},_.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return o(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new vn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var v=_;function _(){}function I(e){function t(l,c){if(c){for(var C=arguments.length,S=new Array(C-1);--C;)S[C-1]=arguments[C];return n[l].subscribe.apply(null,S),e}if(typeof l=="string")return n[l]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(l,c,C){var S,y;if(typeof l!="object")return c=c||Wn,y={subscribers:[],fire:C=C||ve,subscribe:function(m){y.subscribers.indexOf(m)===-1&&(y.subscribers.push(m),y.fire=c(y.fire,m))},unsubscribe:function(m){y.subscribers=y.subscribers.filter(function(x){return x!==m}),y.fire=y.subscribers.reduce(c,C)}},n[l]=t[l]=y;pe(S=l).forEach(function(m){var x=S[m];if(re(x))i(m,S[m][0],S[m][1]);else{if(x!=="asap")throw new Z.InvalidArgument("Invalid event config");var w=i(m,Mn,function(){for(var g=arguments.length,b=new Array(g);g--;)b[g]=arguments[g];w.subscribers.forEach(function(B){va(function(){B.apply(null,b)})})})}})}}function L(e,t){return Ct(t).from({prototype:e}),t}function q(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function H(e,t){e.filter=Xt(e.filter,t)}function Y(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return Xt(a(),t())}:t,e.justLimit=n&&!a}function X(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function he(e,t,n){var a=X(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function me(e,t,n,a){var s,i,l=e.replayFilter?Xt(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(c,C,S){var y,m;l&&!l(C,S,function(x){return C.stop(x)},function(x){return C.fail(x)})||((m=""+(y=C.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(y)),se(s,m))||(s[m]=!0,t(c,C,S))},Promise.all([e.or._iterate(i,n),We(he(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):We(he(e,a,n),Xt(e.algorithm,l),t,!e.keysOnly&&e.valueMapper)}function We(e,t,n,a){var s=we(a?function(i,l,c){return n(a(i),l,c)}:n);return e.then(function(i){if(i)return i.start(function(){var l=function(){return i.continue()};t&&!t(i,function(c){return l=c},function(c){i.stop(c),l=ve},function(c){i.fail(c),l=ve})||s(i.value,i,function(c){return l=c}),l()})})}z.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ae.bind(null,n.error)):n.table._trans("readonly",e).then(t)},z.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ae.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},z.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Xt(t.algorithm,e)},z.prototype._iterate=function(e,t){return me(this._ctx,e,t,this._ctx.table.core)},z.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ce(n,e),t._ctx=n,t},z.prototype.raw=function(){return this._ctx.valueMapper=null,this},z.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return me(t,e,n,t.table.core)})},z.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return q(s,!0)?i.count({trans:n,query:{index:X(s,i.schema),range:s.range}}).then(function(l){return Math.min(l,s.limit)}):(a=0,me(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},z.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(C,S){return S?i(C[n[S]],S-1):C[a]}var l=this._ctx.dir==="next"?1:-1;function c(C,S){return oe(i(C,s),i(S,s))*l}return this.toArray(function(C){return C.sort(c)}).then(t)},z.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,l=t._ctx;return l.dir==="next"&&q(l,!0)&&0<l.limit?(a=l.valueMapper,s=X(l,l.table.core.schema),l.table.core.query({trans:n,limit:l.limit,values:!0,query:{index:s,range:l.range}}).then(function(c){return c=c.result,a?c.map(a):c})):(i=[],me(l,function(c){return i.push(c)},n,l.table.core).then(function(){return i}))},e)},z.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,q(t)?Y(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):Y(t,function(){var n=e;return function(){return--n<0}})),this},z.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Y(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},z.prototype.until=function(e,t){return H(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},z.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},z.prototype.last=function(e){return this.reverse().first(e)},z.prototype.filter=function(e){var t;return H(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=Xt(t.isMatch,e),this},z.prototype.and=function(e){return this.filter(e)},z.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},z.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},z.prototype.desc=function(){return this.reverse()},z.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},z.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},z.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},z.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},z.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&q(t,!0)&&0<t.limit)return this._read(function(a){var s=X(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},z.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},z.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},z.prototype.lastKey=function(e){return this.reverse().firstKey(e)},z.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},H(this._ctx,function(a){var a=a.primaryKey.toString(),s=se(e,a);return e[a]=!0,!s})),this},z.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(b,B){var E=B.failures;x+=b-B.numFailures;for(var k=0,A=pe(E);k<A.length;k++){var D=A[k];m.push(E[D])}}var i=typeof e=="function"?e:function(b){return d(b,e)},l=n.table.core,y=l.schema.primaryKey,c=y.outbound,C=y.extractKey,S=200,y=t.db._options.modifyChunkSize,m=(y&&(S=typeof y=="object"?y[l.name]||y["*"]||200:y),[]),x=0,w=[],g=e===ze;return t.clone().primaryKeys().then(function(b){function B(k){var A=Math.min(S,b.length-k),D=b.slice(k,k+A);return(g?Promise.resolve([]):l.getMany({trans:a,keys:D,cache:"immutable"})).then(function(j){var V=[],r=[],p=c?[]:null,M=g?D:[];if(!g)for(var P=0;P<A;++P){var N=j[P],Q={value:an(N),primKey:b[k+P]};i.call(Q,Q.value,Q)!==!1&&(Q.value==null?M.push(b[k+P]):c||oe(C(N),C(Q.value))===0?(r.push(Q.value),c&&p.push(b[k+P])):(M.push(b[k+P]),V.push(Q.value)))}return Promise.resolve(0<V.length&&l.mutate({trans:a,type:"add",values:V}).then(function(te){for(var U in te.failures)M.splice(parseInt(U),1);s(V.length,te)})).then(function(){return(0<r.length||E&&typeof e=="object")&&l.mutate({trans:a,type:"put",keys:p,values:r,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(te){return s(r.length,te)})}).then(function(){return(0<M.length||E&&g)&&l.mutate({trans:a,type:"delete",keys:M,criteria:E,isAdditionalChunk:0<k}).then(function(te){return o(n.table,M,te)}).then(function(te){return s(M.length,te)})}).then(function(){return b.length>k+A&&B(k+S)})})}var E=q(n)&&n.limit===1/0&&(typeof e!="function"||g)&&{index:n.index,range:n.range};return B(0).then(function(){if(0<m.length)throw new _n("Error modifying one or more objects",m,x,w);return b.length})})})},z.prototype.delete=function(){var e=this._ctx,t=e.range;return!q(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(ze):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(C){var c=C.failures,C=C.numFailures;if(C)throw new _n("Could not delete some values",Object.keys(c).map(function(S){return c[S]}),i-C);return i-C})})})};var Ke=z;function z(){}var ze=function(e,t){return t.value=null};function Le(e,t){return e<t?-1:e===t?0:1}function Ge(e,t){return t<e?-1:e===t?0:1}function _e(e,t,n){return e=e instanceof tt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function je(e){return new e.Collection(e,function(){return ct("")}).limit(0)}function R(w,t,n,a){var s,i,l,c,C,S,y,m=n.length;if(!n.every(function(b){return typeof b=="string"}))return _e(w,La);function x(b){s=b==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},i=b==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},l=b==="next"?Le:Ge;var B=n.map(function(E){return{lower:i(E),upper:s(E)}}).sort(function(E,k){return l(E.lower,k.lower)});c=B.map(function(E){return E.upper}),C=B.map(function(E){return E.lower}),y=(S=b)==="next"?"":a}x("next");var w=new w.Collection(w,function(){return ke(c[0],C[m-1]+a)}),g=(w._ondirectionchange=function(b){x(b)},0);return w._addAlgorithm(function(b,B,E){var k=b.key;if(typeof k=="string"){var A=i(k);if(t(A,C,g))return!0;for(var D=null,j=g;j<m;++j){var V=((r,p,M,P,N,Q)=>{for(var te=Math.min(r.length,P.length),U=-1,G=0;G<te;++G){var fe=p[G];if(fe!==P[G])return N(r[G],M[G])<0?r.substr(0,G)+M[G]+M.substr(G+1):N(r[G],P[G])<0?r.substr(0,G)+P[G]+M.substr(G+1):0<=U?r.substr(0,U)+p[U]+M.substr(U+1):null;N(r[G],fe)<0&&(U=G)}return te<P.length&&Q==="next"?r+M.substr(r.length):te<r.length&&Q==="prev"?r.substr(0,M.length):U<0?null:r.substr(0,U)+P[U]+M.substr(U+1)})(k,A,c[j],C[j],l,S);V===null&&D===null?g=j+1:(D===null||0<l(D,V))&&(D=V)}B(D!==null?function(){b.continue(D+y)}:E)}return!1}),w}function ke(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function ct(e){return{type:1,lower:e,upper:e}}Object.defineProperty(ee.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ee.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?je(this):new this.Collection(this,function(){return ke(e,t,!n,!a)})}catch{return _e(this,Kt)}},ee.prototype.equals=function(e){return e==null?_e(this,Kt):new this.Collection(this,function(){return ct(e)})},ee.prototype.above=function(e){return e==null?_e(this,Kt):new this.Collection(this,function(){return ke(e,void 0,!0)})},ee.prototype.aboveOrEqual=function(e){return e==null?_e(this,Kt):new this.Collection(this,function(){return ke(e,void 0,!1)})},ee.prototype.below=function(e){return e==null?_e(this,Kt):new this.Collection(this,function(){return ke(void 0,e,!1,!0)})},ee.prototype.belowOrEqual=function(e){return e==null?_e(this,Kt):new this.Collection(this,function(){return ke(void 0,e)})},ee.prototype.startsWith=function(e){return typeof e!="string"?_e(this,La):this.between(e,e+Ht,!0,!0)},ee.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):R(this,function(t,n){return t.indexOf(n[0])===0},[e],Ht)},ee.prototype.equalsIgnoreCase=function(e){return R(this,function(t,n){return t===n[0]},[e],"")},ee.prototype.anyOfIgnoreCase=function(){var e=Et.apply(rn,arguments);return e.length===0?je(this):R(this,function(t,n){return n.indexOf(t)!==-1},e,"")},ee.prototype.startsWithAnyOfIgnoreCase=function(){var e=Et.apply(rn,arguments);return e.length===0?je(this):R(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,Ht)},ee.prototype.anyOf=function(){var e,t,n=this,a=Et.apply(rn,arguments),s=this._cmp;try{a.sort(s)}catch{return _e(this,Kt)}return a.length===0?je(this):((e=new this.Collection(this,function(){return ke(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,l,c){for(var C=i.key;0<s(C,a[t]);)if(++t===a.length)return l(c),!1;return s(C,a[t])===0||(l(function(){i.continue(a[t])}),!1)}),e)},ee.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ee.prototype.noneOf=function(){var e=Et.apply(rn,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return _e(this,Kt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},ee.prototype.inAnyRange=function(e,E){var n=this,a=this._cmp,s=this._ascending,i=this._descending,l=this._min,c=this._max;if(e.length===0)return je(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return _e(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var C=!E||E.includeLowers!==!1,S=E&&E.includeUppers===!0,y,m=s;function x(k,A){return m(k[0],A[0])}try{(y=e.reduce(function(k,A){for(var D=0,j=k.length;D<j;++D){var V=k[D];if(a(A[0],V[1])<0&&0<a(A[1],V[0])){V[0]=l(V[0],A[0]),V[1]=c(V[1],A[1]);break}}return D===j&&k.push(A),k},[])).sort(x)}catch{return _e(this,Kt)}var w=0,g=S?function(k){return 0<s(k,y[w][1])}:function(k){return 0<=s(k,y[w][1])},b=C?function(k){return 0<i(k,y[w][0])}:function(k){return 0<=i(k,y[w][0])},B=g,E=new this.Collection(this,function(){return ke(y[0][0],y[y.length-1][1],!C,!S)});return E._ondirectionchange=function(k){m=k==="next"?(B=g,s):(B=b,i),y.sort(x)},E._addAlgorithm(function(k,A,D){for(var j,V=k.key;B(V);)if(++w===y.length)return A(D),!1;return!g(j=V)&&!b(j)||(n._cmp(V,y[w][1])===0||n._cmp(V,y[w][0])===0||A(function(){m===s?k.continue(y[w][0]):k.continue(y[w][1])}),!1)}),E},ee.prototype.startsWithAnyOf=function(){var e=Et.apply(rn,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?je(this):this.inAnyRange(e.map(function(t){return[t,t+Ht]})):_e(this,"startsWithAnyOf() only works with strings")};var tt=ee;function ee(){}function ye(e){return we(function(t){return Je(t),e(t.target.error),!1})}function Je(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var de="storagemutated",Me="x-storagemutated-1",$e=I(null,de),nt=(be.prototype._lock=function(){return Bn(!J.global),++this._reculock,this._reculock!==1||J.global||(J.lockOwnerFor=this),this},be.prototype._unlock=function(){if(Bn(!J.global),--this._reculock==0)for(J.global||(J.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{ln(e[1],e[0])}catch{}}return this},be.prototype._locked=function(){return this._reculock&&J.lockOwnerFor!==this},be.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Bn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(a);case"MissingAPIError":throw new Z.MissingAPI(a.message,a);default:throw new Z.OpenFailed(a)}if(!this.active)throw new Z.TransactionInactive;Bn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=we(function(s){Je(s),t._reject(e.error)}),e.onabort=we(function(s){Je(s),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=we(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&$e.storagemutated.fire(e.mutatedParts)})}return this},be.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Ae(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new F(function(i,l){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,l)},J])}):n?Wt(function(){var i=new F(function(l,c){s._lock();var C=t(l,c,s);C&&C.then&&C.then(l,c)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new F(function(i,l){var c=t(i,l,s);c&&c.then&&c.then(i,l)}))._lib=!0,a):Ae(new Z.TransactionInactive)},be.prototype._root=function(){return this.parent?this.parent._root():this},be.prototype.waitFor=function(e){var t,n=this._root(),a=F.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new F(function(i,l){a.then(function(c){return n._waitingQueue.push(we(i.bind(null,c)))},function(c){return n._waitingQueue.push(we(l.bind(null,c)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},be.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},be.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(se(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},be);function be(){}function Ue(e,t,n,a,s,i,l,c){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!l?"&":"")+(a?"*":"")+(s?"++":"")+Lt(t),type:c}}function Lt(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function kt(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,l){return i=a(i,l),i&&(s[i[0]]=i[1]),s},{}))};var a}var He=function(e){try{return e.only([[]]),He=function(){return[[]]},[[]]}catch{return He=function(){return Ht},Ht}};function pt(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Dt(n,t)}:function(n){return Dt(n,e)};var t}function $t(e){return[].slice.call(e)}var Se=0;function ge(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function De(e,t,C){function a(g){if(g.type===3)return null;if(g.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=g.lower,x=g.upper,w=g.lowerOpen,g=g.upperOpen;return m===void 0?x===void 0?null:t.upperBound(x,!!g):x===void 0?t.lowerBound(m,!!w):t.bound(m,x,!!w,!!g)}function s(y){var m,x=y.name;return{name:x,schema:y,mutate:function(w){var g=w.trans,b=w.type,B=w.keys,E=w.values,k=w.range;return new Promise(function(A,D){A=we(A);var j=g.objectStore(x),V=j.keyPath==null,r=b==="put"||b==="add";if(!r&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var p,M=(B||E||{length:1}).length;if(B&&E&&B.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(M===0)return A({numFailures:0,failures:{},results:[],lastResult:void 0});function P(le){++te,Je(le)}var N=[],Q=[],te=0;if(b==="deleteRange"){if(k.type===4)return A({numFailures:te,failures:Q,results:[],lastResult:void 0});k.type===3?N.push(p=j.clear()):N.push(p=j.delete(a(k)))}else{var V=r?V?[E,B]:[E,null]:[B,null],U=V[0],G=V[1];if(r)for(var fe=0;fe<M;++fe)N.push(p=G&&G[fe]!==void 0?j[b](U[fe],G[fe]):j[b](U[fe])),p.onerror=P;else for(fe=0;fe<M;++fe)N.push(p=j[b](U[fe])),p.onerror=P}function qe(le){le=le.target.result,N.forEach(function(bt,$n){return bt.error!=null&&(Q[$n]=bt.error)}),A({numFailures:te,failures:Q,results:b==="delete"?B:N.map(function(bt){return bt.result}),lastResult:le})}p.onerror=function(le){P(le),qe(le)},p.onsuccess=qe})},getMany:function(w){var g=w.trans,b=w.keys;return new Promise(function(B,E){B=we(B);for(var k,A=g.objectStore(x),D=b.length,j=new Array(D),V=0,r=0,p=function(N){N=N.target,j[N._pos]=N.result,++r===V&&B(j)},M=ye(E),P=0;P<D;++P)b[P]!=null&&((k=A.get(b[P]))._pos=P,k.onsuccess=p,k.onerror=M,++V);V===0&&B(j)})},get:function(w){var g=w.trans,b=w.key;return new Promise(function(B,E){B=we(B);var k=g.objectStore(x).get(b);k.onsuccess=function(A){return B(A.target.result)},k.onerror=ye(E)})},query:(m=c,function(w){return new Promise(function(g,b){g=we(g);var B,E,k,r=w.trans,A=w.values,D=w.limit,V=w.query,j=D===1/0?void 0:D,p=V.index,V=V.range,r=r.objectStore(x),r=p.isPrimaryKey?r:r.index(p.name),p=a(V);if(D===0)return g({result:[]});m?((V=A?r.getAll(p,j):r.getAllKeys(p,j)).onsuccess=function(M){return g({result:M.target.result})},V.onerror=ye(b)):(B=0,E=!A&&"openKeyCursor"in r?r.openKeyCursor(p):r.openCursor(p),k=[],E.onsuccess=function(M){var P=E.result;return!P||(k.push(A?P.value:P.primaryKey),++B===D)?g({result:k}):void P.continue()},E.onerror=ye(b))})}),openCursor:function(w){var g=w.trans,b=w.values,B=w.query,E=w.reverse,k=w.unique;return new Promise(function(A,D){A=we(A);var r=B.index,j=B.range,V=g.objectStore(x),V=r.isPrimaryKey?V:V.index(r.name),r=E?k?"prevunique":"prev":k?"nextunique":"next",p=!b&&"openKeyCursor"in V?V.openKeyCursor(a(j),r):V.openCursor(a(j),r);p.onerror=ye(D),p.onsuccess=we(function(M){var P,N,Q,te,U=p.result;U?(U.___id=++Se,U.done=!1,P=U.continue.bind(U),N=(N=U.continuePrimaryKey)&&N.bind(U),Q=U.advance.bind(U),te=function(){throw new Error("Cursor not stopped")},U.trans=g,U.stop=U.continue=U.continuePrimaryKey=U.advance=function(){throw new Error("Cursor not started")},U.fail=we(D),U.next=function(){var G=this,fe=1;return this.start(function(){return fe--?G.continue():G.stop()}).then(function(){return G})},U.start=function(G){function fe(){if(p.result)try{G()}catch(le){U.fail(le)}else U.done=!0,U.start=function(){throw new Error("Cursor behind last entry")},U.stop()}var qe=new Promise(function(le,bt){le=we(le),p.onerror=ye(bt),U.fail=bt,U.stop=function($n){U.stop=U.continue=U.continuePrimaryKey=U.advance=te,le($n)}});return p.onsuccess=we(function(le){p.onsuccess=fe,fe()}),U.continue=P,U.continuePrimaryKey=N,U.advance=Q,fe(),qe},A(U)):A(null)},D)})},count:function(w){var g=w.query,b=w.trans,B=g.index,E=g.range;return new Promise(function(k,A){var D=b.objectStore(x),D=B.isPrimaryKey?D:D.index(B.name),j=a(E),j=j?D.count(j):D.count();j.onsuccess=we(function(V){return k(V.target.result)}),j.onerror=ye(A)})}}}i=C,l=$t((C=e).objectStoreNames);var i,C={schema:{name:C.name,tables:l.map(function(y){return i.objectStore(y)}).map(function(y){var m=y.keyPath,x=y.autoIncrement,g=re(m),w={},g={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:g,keyPath:m,autoIncrement:x,unique:!0,extractKey:pt(m)},indexes:$t(y.indexNames).map(function(b){return y.index(b)}).map(function(k){var A=k.name,B=k.unique,E=k.multiEntry,k=k.keyPath,A={name:A,compound:re(k),keyPath:k,unique:B,multiEntry:E,extractKey:pt(k)};return w[ge(k)]=A}),getIndexByKeyPath:function(b){return w[ge(b)]}};return w[":id"]=g.primaryKey,m!=null&&(w[ge(m)]=g.primaryKey),g})},hasGetAll:0<l.length&&"getAll"in i.objectStore(l[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},l=C.schema,c=C.hasGetAll,C=l.tables.map(s),S={};return C.forEach(function(y){return S[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if(S[y])return S[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:He(t),schema:l}}function Re(e,t,n,a){return n=n.IDBKeyRange,t=De(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,W(W({},s),i(s))},t)}}function Ve(e,t){var n=t.db,n=Re(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function vt(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(l){var c=(function C(S,y){return pa(S,y)||(S=Qe(S))&&C(S,y)})(l,s);(!c||"value"in c&&c.value===void 0)&&(l===e.Transaction.prototype||l instanceof e.Transaction?it(l,s,{get:function(){return this.table(s)},set:function(C){st(this,s,{value:C,writable:!0,configurable:!0,enumerable:!0})}}):l[s]=new e.Table(s,i))})})}function Tt(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function jt(e,t){return e._cfg.version-t._cfg.version}function Rt(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=kt("$meta",wn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),l=(i.create(n),i._completion.catch(a),i._reject.bind(i)),c=J.transless||J;Wt(function(){if(J.trans=i,J.transless=c,t!==0)return Ve(e,n),S=t,((C=i).storeNames.includes("$meta")?C.table("$meta").get("version").then(function(y){return y??S}):F.resolve(S)).then(function(B){var m=e,x=B,w=i,g=n,b=[],B=m._versions,E=m._dbSchema=xn(0,m.idbdb,g);return(B=B.filter(function(k){return k._cfg.version>=x})).length===0?F.resolve():(B.forEach(function(k){b.push(function(){var A,D,j,V=E,r=k._cfg.dbschema,p=(Qt(m,V,g),Qt(m,r,g),E=m._dbSchema=r,K(V,r)),M=(p.add.forEach(function(P){ie(g,P[0],P[1].primKey,P[1].indexes)}),p.change.forEach(function(P){if(P.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var N=g.objectStore(P.name);P.add.forEach(function(Q){return Vt(N,Q)}),P.change.forEach(function(Q){N.deleteIndex(Q.name),Vt(N,Q)}),P.del.forEach(function(Q){return N.deleteIndex(Q)})}),k._cfg.contentUpgrade);if(M&&k._cfg.version>x)return Ve(m,g),w._memoizedTables={},A=Aa(r),p.del.forEach(function(P){A[P]=V[P]}),Tt(m,[m.Transaction.prototype]),vt(m,[m.Transaction.prototype],pe(A),A),w.schema=A,(D=ma(M))&&yn(),r=F.follow(function(){var P;(j=M(w))&&D&&(P=Gt.bind(null,null),j.then(P,P))}),j&&typeof j.then=="function"?F.resolve(j):r.then(function(){return j})}),b.push(function(A){var D,j,V=k._cfg.dbschema;D=V,j=A,[].slice.call(j.db.objectStoreNames).forEach(function(r){return D[r]==null&&j.db.deleteObjectStore(r)}),Tt(m,[m.Transaction.prototype]),vt(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),w.schema=m._dbSchema}),b.push(function(A){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===k._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(D){return D!=="$meta"})):A.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return b.length?F.resolve(b.shift()(w.idbtrans)).then(k):F.resolve()})().then(function(){In(E,g)}))}).catch(l);var C,S;pe(s).forEach(function(y){ie(n,y,s[y].primKey,s[y].indexes)}),Ve(e,n),F.follow(function(){return e.on.populate.fire(i)}).catch(l)})}function O(e,t){In(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=xn(0,e.idbdb,t);Qt(e,e._dbSchema,t);for(var a=0,s=K(n,e._dbSchema).change;a<s.length;a++){var i=(l=>{if(l.change.length||l.recreate)return console.warn("Unable to patch indexes of table ".concat(l.name," because it has changes on the type of index or primary key.")),{value:void 0};var c=t.objectStore(l.name);l.add.forEach(function(C){Mt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name,".").concat(C.src)),Vt(c,C)})})(s[a]);if(typeof i=="object")return i.value}}function K(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var l={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)l.recreate=!0,a.change.push(l);else{var c=s.idxByName,C=i.idxByName,S=void 0;for(S in c)C[S]||l.del.push(S);for(S in C){var y=c[S],m=C[S];y?y.src!==m.src&&l.change.push(m):l.add.push(m)}(0<l.del.length||0<l.add.length||0<l.change.length)&&a.change.push(l)}}else a.add.push([n,i])}return a}function ie(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return Vt(s,i)})}function In(e,t){pe(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(Mt&&console.debug("Dexie: Creating missing table",n),ie(t,n,e[n].primKey,e[n].indexes))})}function Vt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function xn(e,t,n){var a={};return hn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),l=Ue(Lt(S=i.keyPath),S||"",!0,!1,!!i.autoIncrement,S&&typeof S!="string",!0),c=[],C=0;C<i.indexNames.length;++C){var y=i.index(i.indexNames[C]),S=y.keyPath,y=Ue(y.name,S,!!y.unique,!!y.multiEntry,!1,S&&typeof S!="string",!1);c.push(y)}a[s]=kt(s,l,c)}),a}function Qt(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],l=n.objectStore(i);e._hasGetAll="getAll"in l;for(var c=0;c<l.indexNames.length;++c){var C,S=l.indexNames[c],y=l.index(S).keyPath,y=typeof y=="string"?y:"["+hn(y).join("+")+"]";t[i]&&(C=t[i].idxByName[y])&&(C.name=S,delete t[i].idxByName[y],t[i].idxByName[S]=C)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function wn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Ue(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),re(i),n===0,a)})}kn.prototype._createTableSchema=kt,kn.prototype._parseIndexSyntax=wn,kn.prototype._parseStoresSpec=function(e,t){var n=this;pe(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new Z.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");s.forEach(function(l){if(l.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!l.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},kn.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ce(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){ce(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,Tt(t,[t._allTables,t,t.Transaction.prototype]),vt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],pe(s),s),t._storeNames=pe(s),this},kn.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Te(this._cfg.contentUpgrade||ve,e),this};var Fe=kn;function kn(){}function aa(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Pe(ea,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function ra(e){return e&&typeof e.databases=="function"}function sa(e){return Wt(function(){return J.letThrough=!0,e()})}function ka(e){return!("from"in e)}var Xe=function(e,t){var n;if(!this)return n=new Xe,e&&"d"in e&&ce(n,e),n;ce(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function dt(e,t,n){var a=oe(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(ka(e))return ce(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(oe(n,e.from)<0)return a?dt(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Sa(e);if(0<oe(t,e.to))return s?dt(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Sa(e);oe(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<oe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&mt(e,a),s&&t&&mt(e,s)}}function mt(e,t){ka(t)||(function n(a,s){var i=s.from,l=s.l,c=s.r;dt(a,i,s.to),l&&n(a,l),c&&n(a,c)})(e,t)}function $a(e,t){var n=Nn(t),a=n.next();if(!a.done)for(var s=a.value,i=Nn(e),l=i.next(s.from),c=l.value;!a.done&&!l.done;){if(oe(c.from,s.to)<=0&&0<=oe(c.to,s.from))return!0;oe(s.from,c.from)<0?s=(a=n.next(c.from)).value:c=(l=i.next(s.from)).value}return!1}function Nn(e){var t=ka(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&oe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||oe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Sa(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=W({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Ba(n)),e.d=Ba(e)}function Ba(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function qn(e,t){return pe(t).forEach(function(n){e[n]?mt(e[n],t[n]):e[n]=(function a(s){var i,l,c={};for(i in s)se(s,i)&&(l=s[i],c[i]=!l||typeof l!="object"||pn.has(l.constructor)?l:a(l));return c})(t[n])}),e}function ia(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&$a(t[n],e[n])})}ht(Xe.prototype,((et={add:function(e){return mt(this,e),this},addKey:function(e){return dt(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return dt(t,n,n)}),this},hasKey:function(e){var t=Nn(this).next(e).value;return t&&oe(t.from,e)<=0&&0<=oe(t.to,e)}})[ot]=function(){return Nn(this)},et));var Zt={},Ea={},Kn=!1;function Ln(e){qn(Ea,e),Kn||(Kn=!0,setTimeout(function(){Kn=!1,St(Ea,!(Ea={}))},0))}function St(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(Zt);a<s.length;a++)Ya(c=s[a],e,n,t);else for(var i in e){var l,c,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(l=i[1],i=i[2],c=Zt["idb://".concat(l,"/").concat(i)])&&Ya(c,e,n,t)}n.forEach(function(C){return C()})}function Ya(e,t,n,a){for(var s=[],i=0,l=Object.entries(e.queries.query);i<l.length;i++){for(var c=l[i],C=c[0],S=[],y=0,m=c[1];y<m.length;y++){var x=m[y];ia(t,x.obsSet)?x.subscribers.forEach(function(B){return n.add(B)}):a&&S.push(x)}a&&s.push([C,S])}if(a)for(var w=0,g=s;w<g.length;w++){var b=g[w],C=b[0],S=b[1];e.queries.query[C]=S}}function en(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ae(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function l(){if(t.openCanceller!==a)throw new Z.DatabaseClosed("db.open() was cancelled")}function c(){return new F(function(x,w){if(l(),!n)throw new Z.MissingAPI;var g=e.name,b=t.autoSchema||!s?n.open(g):n.open(g,s);if(!b)throw new Z.MissingAPI;b.onerror=ye(w),b.onblocked=we(e._fireOnBlocked),b.onupgradeneeded=we(function(B){var E;y=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=Je,y.abort(),b.result.close(),(E=n.deleteDatabase(g)).onsuccess=E.onerror=we(function(){w(new Z.NoSuchDatabase("Database ".concat(g," doesnt exist")))})):(y.onerror=ye(w),E=B.oldVersion>Math.pow(2,62)?0:B.oldVersion,m=E<1,e.idbdb=b.result,i&&O(e,y),Rt(e,E/10,y,w))},w),b.onsuccess=we(function(){y=null;var B,E,k,A,D,j,V=e.idbdb=b.result,r=hn(V.objectStoreNames);if(0<r.length)try{var p=V.transaction((D=r).length===1?D[0]:D,"readonly");if(t.autoSchema)j=V,A=p,(k=e).verno=j.version/10,A=k._dbSchema=xn(0,j,A),k._storeNames=hn(j.objectStoreNames,0),vt(k,[k._allTables],pe(A),A);else if(Qt(e,e._dbSchema,p),E=p,((E=K(xn(0,(B=e).idbdb,E),B._dbSchema)).add.length||E.change.some(function(M){return M.add.length||M.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),s=V.version+1,i=!0,x(c());Ve(e,p)}catch{}Cn.push(e),V.onversionchange=we(function(M){t.vcFired=!0,e.on("versionchange").fire(M)}),V.onclose=we(function(){e.close({disableAutoOpen:!1})}),m&&(r=e._deps,D=g,ra(j=r.indexedDB)||D===ea||aa(j,r.IDBKeyRange).put({name:D}).catch(ve)),x()},w)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),c();break;case"VersionError":if(0<s)return s=0,c()}return F.reject(x)})}var C,S=t.dbReadyResolve,y=null,m=!1;return F.race([a,(typeof navigator>"u"?F.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function w(){return indexedDB.databases().finally(x)}C=setInterval(w,100),w()}).finally(function(){return clearInterval(C)}):Promise.resolve()).then(c)]).then(function(){return l(),t.onReadyBeingFired=[],F.resolve(sa(function(){return e.on.ready.fire(e.vip)})).then(function x(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(Te,ve),t.onReadyBeingFired=[],F.resolve(sa(function(){return w(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{y&&y.abort()}catch{}return a===t.openCanceller&&e._close(),Ae(x)}).finally(function(){t.openComplete=!0,S()}).then(function(){var x;return m&&(x={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(g){g.name&&(x["idb://".concat(e.name,"/").concat(w.name,"/").concat(g.name)]=new Xe(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(w.name,"/")]=x["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new Xe(-1/0,[[[]]])}),$e(de).fire(x),St(x,!0)),e})}function _a(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(c){var c=i(c),C=c.value;return c.done?C:C&&typeof C.then=="function"?C.then(n,a):re(C)?Promise.all(C).then(n,a):n(C)}}return s(t)()}function oa(e,t,n){for(var a=re(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var za={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return W(W({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function l(x,w,g){var k=ge(x),b=s[k]=s[k]||[],B=x==null?0:typeof x=="string"?1:x.length,E=0<w,k=W(W({},g),{name:E?"".concat(k,"(virtual-from:").concat(g.name,")"):g.name,lowLevelIndex:g,isVirtual:E,keyTail:w,keyLength:B,extractKey:pt(x),unique:!E&&g.unique});return b.push(k),k.isPrimaryKey||i.push(k),1<B&&l(B===2?x[0]:x.slice(0,B-1),w+1,g),b.sort(function(A,D){return A.keyTail-D.keyTail}),k}var c=l(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[c];for(var C=0,S=a.indexes;C<S.length;C++){var y=S[C];l(y.keyPath,0,y)}function m(x){var w,g=x.query.index;return g.isVirtual?W(W({},x),{query:{index:g.lowLevelIndex,range:(w=x.query.range,g=g.keyTail,{type:w.type===1?2:w.type,lower:oa(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,g),lowerOpen:!0,upper:oa(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,g),upperOpen:!0})}}):x}return W(W({},n),{schema:W(W({},a),{primaryKey:c,indexes:i,getIndexByKeyPath:function(x){return(x=s[ge(x)])&&x[0]}}),count:function(x){return n.count(m(x))},query:function(x){return n.query(m(x))},openCursor:function(x){var w=x.query.index,g=w.keyTail,b=w.keyLength;return w.isVirtual?n.openCursor(m(x)).then(function(E){return E&&B(E)}):n.openCursor(x);function B(E){return Object.create(E,{continue:{value:function(k){k!=null?E.continue(oa(k,x.reverse?e.MAX_KEY:e.MIN_KEY,g)):x.unique?E.continue(E.key.slice(0,b).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,g)):E.continue()}},continuePrimaryKey:{value:function(k,A){E.continuePrimaryKey(oa(k,e.MAX_KEY,g),A)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var k=E.key;return b===1?k[0]:k.slice(0,b)}},value:{get:function(){return E.value}}})}}})}})}};function la(e,t,n,a){return n=n||{},a=a||"",pe(e).forEach(function(s){var i,l,c;se(t,s)?(i=e[s],l=t[s],typeof i=="object"&&typeof l=="object"&&i&&l?(c=Yn(i))!==Yn(l)?n[a+s]=t[s]:c==="Object"?la(i,l,n,a+s+"."):i!==l&&(n[a+s]=t[s]):i!==l&&(n[a+s]=t[s])):n[a+s]=void 0}),pe(t).forEach(function(s){se(e,s)||(n[a+s]=t[s])}),n}function ua(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Ua={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return W(W({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return W(W({},n),{mutate:function(s){var i=J.trans,l=i.table(t).hook,c=l.deleting,C=l.creating,S=l.updating;switch(s.type){case"add":if(C.fire===ve)break;return i._promise("readwrite",function(){return y(s)},!0);case"put":if(C.fire===ve&&S.fire===ve)break;return i._promise("readwrite",function(){return y(s)},!0);case"delete":if(c.fire===ve)break;return i._promise("readwrite",function(){return y(s)},!0);case"deleteRange":if(c.fire===ve)break;return i._promise("readwrite",function(){return(function m(x,w,g){return n.query({trans:x,values:!1,query:{index:a,range:w},limit:g}).then(function(b){var B=b.result;return y({type:"delete",keys:B,trans:x}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):B.length<g?{failures:[],numFailures:0,lastResult:void 0}:m(x,W(W({},w),{lower:B[B.length-1],lowerOpen:!0}),g)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function y(m){var x,w,g,b=J.trans,B=m.keys||ua(a,m);if(B)return(m=m.type==="add"||m.type==="put"?W(W({},m),{keys:B}):W({},m)).type!=="delete"&&(m.values=ue([],m.values)),m.keys&&(m.keys=ue([],m.keys)),x=n,g=B,((w=m).type==="add"?Promise.resolve([]):x.getMany({trans:w.trans,keys:g,cache:"immutable"})).then(function(E){var k=B.map(function(A,D){var j,V,r,p=E[D],M={onerror:null,onsuccess:null};return m.type==="delete"?c.fire.call(M,A,p,b):m.type==="add"||p===void 0?(j=C.fire.call(M,A,m.values[D],b),A==null&&j!=null&&(m.keys[D]=A=j,a.outbound||Ze(m.values[D],a.keyPath,A))):(j=la(p,m.values[D]),(V=S.fire.call(M,j,A,p,b))&&(r=m.values[D],Object.keys(V).forEach(function(P){se(r,P)?r[P]=V[P]:Ze(r,P,V[P])}))),M});return n.mutate(m).then(function(A){for(var D=A.failures,j=A.results,V=A.numFailures,A=A.lastResult,r=0;r<B.length;++r){var p=(j||B)[r],M=k[r];p==null?M.onerror&&M.onerror(D[r]):M.onsuccess&&M.onsuccess(m.type==="put"&&E[r]?m.values[r]:p)}return{failures:D,results:j,numFailures:V,lastResult:A}}).catch(function(A){return k.forEach(function(D){return D.onerror&&D.onerror(A)}),Promise.reject(A)})});throw new Error("Keys missing")}}})}})}};function Ma(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)oe(t.keys[s],e[i])===0&&(a.push(n?an(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var ur={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return W(W({},n),{getMany:function(a){var s;return a.cache?(s=Ma(a.keys,a.trans._cache,a.cache==="clone"))?F.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?an(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Wa(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Ga(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var cr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Xe(e.MIN_KEY,e.MAX_KEY);return W(W({},e),{transaction:function(a,s,i){if(J.subscr&&s!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(J.querier));return e.transaction(a,s,i)},table:function(a){function s(B){var b,B=B.query;return[b=B.index,new Xe((b=(B=B.range).lower)!=null?b:e.MIN_KEY,(b=B.upper)!=null?b:e.MAX_KEY)]}var i=e.table(a),l=i.schema,c=l.primaryKey,C=l.indexes,S=c.extractKey,y=c.outbound,m=c.autoIncrement&&C.filter(function(g){return g.compound&&g.keyPath.includes(c.keyPath)}),x=W(W({},i),{mutate:function(g){function b(N){return N="idb://".concat(t,"/").concat(a,"/").concat(N),D[N]||(D[N]=new Xe)}var B,E,k,A=g.trans,D=g.mutatedParts||(g.mutatedParts={}),j=b(""),V=b(":dels"),r=g.type,M=g.type==="deleteRange"?[g.range]:g.type==="delete"?[g.keys]:g.values.length<50?[ua(c,g).filter(function(N){return N}),g.values]:[],p=M[0],M=M[1],P=g.trans._cache;return re(p)?(j.addKeys(p),(r=r==="delete"||p.length===M.length?Ma(p,P):null)||V.addKeys(p),(r||M)&&(B=b,E=r,k=M,l.indexes.forEach(function(N){var Q=B(N.name||"");function te(G){return G!=null?N.extractKey(G):null}function U(G){N.multiEntry&&re(G)?G.forEach(function(fe){return Q.addKey(fe)}):Q.addKey(G)}(E||k).forEach(function(G,le){var qe=E&&te(E[le]),le=k&&te(k[le]);oe(qe,le)!==0&&(qe!=null&&U(qe),le!=null)&&U(le)})}))):p?(M={from:(P=p.lower)!=null?P:e.MIN_KEY,to:(r=p.upper)!=null?r:e.MAX_KEY},V.add(M),j.add(M)):(j.add(n),V.add(n),l.indexes.forEach(function(N){return b(N.name).add(n)})),i.mutate(g).then(function(N){return!p||g.type!=="add"&&g.type!=="put"||(j.addKeys(N.results),m&&m.forEach(function(Q){for(var te=g.values.map(function(qe){return Q.extractKey(qe)}),U=Q.keyPath.findIndex(function(qe){return qe===c.keyPath}),G=0,fe=N.results.length;G<fe;++G)te[G][U]=N.results[G];b(Q.name).addKeys(te)})),A.mutatedParts=qn(A.mutatedParts||{},D),N})}}),w={get:function(g){return[c,new Xe(g.key)]},getMany:function(g){return[c,new Xe().addKeys(g.keys)]},count:s,query:s,openCursor:s};return pe(w).forEach(function(g){x[g]=function(b){var B=J.subscr,E=!!B,k=Wa(J,i)&&Ga(g,b)?b.obsSet={}:B;if(E){var A,B=function(M){return M="idb://".concat(t,"/").concat(a,"/").concat(M),k[M]||(k[M]=new Xe)},D=B(""),j=B(":dels"),E=w[g](b),V=E[0],E=E[1];if((g==="query"&&V.isPrimaryKey&&!b.values?j:B(V.name||"")).add(E),!V.isPrimaryKey){if(g!=="count")return A=g==="query"&&y&&b.values&&i.query(W(W({},b),{values:!1})),i[g].apply(this,arguments).then(function(M){if(g==="query"){if(y&&b.values)return A.then(function(te){return te=te.result,D.addKeys(te),M});var P=b.values?M.result.map(S):M.result;(b.values?D:j).addKeys(P)}else{var N,Q;if(g==="openCursor")return Q=b.values,(N=M)&&Object.create(N,{key:{get:function(){return j.addKey(N.primaryKey),N.key}},primaryKey:{get:function(){var te=N.primaryKey;return j.addKey(te),te}},value:{get:function(){return Q&&D.addKey(N.primaryKey),N.value}}})}return M});j.add(n)}}return i[g].apply(this,arguments)}}),x}})}};function Ja(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=W({},t),re(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&re(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function cn(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<oe(n,a.lower):0<=oe(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?oe(n,a.upper)<0:oe(n,a.upper)<=0));var n,a}function Ha(e,t,n,a,s,i){var l,c,C,S,y,m;return!n||n.length===0||(l=t.query.index,c=l.multiEntry,C=t.query.range,S=a.schema.primaryKey.extractKey,y=l.extractKey,m=(l.lowLevelIndex||l).extractKey,(a=n.reduce(function(x,w){var g=x,b=[];if(w.type==="add"||w.type==="put")for(var B=new Xe,E=w.values.length-1;0<=E;--E){var k,A=w.values[E],D=S(A);!B.hasKey(D)&&(k=y(A),c&&re(k)?k.some(function(M){return cn(M,C)}):cn(k,C))&&(B.addKey(D),b.push(A))}switch(w.type){case"add":var j=new Xe().addKeys(t.values?x.map(function(P){return S(P)}):x),g=x.concat(t.values?b.filter(function(P){return P=S(P),!j.hasKey(P)&&(j.addKey(P),!0)}):b.map(function(P){return S(P)}).filter(function(P){return!j.hasKey(P)&&(j.addKey(P),!0)}));break;case"put":var V=new Xe().addKeys(w.values.map(function(P){return S(P)}));g=x.filter(function(P){return!V.hasKey(t.values?S(P):P)}).concat(t.values?b:b.map(function(P){return S(P)}));break;case"delete":var r=new Xe().addKeys(w.keys);g=x.filter(function(P){return!r.hasKey(t.values?S(P):P)});break;case"deleteRange":var p=w.range;g=x.filter(function(P){return!cn(S(P),p)})}return g},e))===e)?e:(a.sort(function(x,w){return oe(m(x),m(w))||oe(S(x),S(w))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function Pa(e,t){return oe(e.lower,t.lower)===0&&oe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function dr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=oe(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=oe(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function fr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&xt(i,s)},3e3))})}var gt={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return W(W({},e),{transaction:function(n,a,s){var i,l,c=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,c.addEventListener("abort",(l=function(C){return function(){if(i.abort(),a==="readwrite"){for(var S=new Set,y=0,m=n;y<m.length;y++){var x=m[y],w=Zt["idb://".concat(t,"/").concat(x)];if(w){var g=e.table(x),b=w.optimisticOps.filter(function(N){return N.trans===c});if(c._explicit&&C&&c.mutatedParts)for(var B=0,E=Object.values(w.queries.query);B<E.length;B++)for(var k=0,A=(V=E[B]).slice();k<A.length;k++)ia((r=A[k]).obsSet,c.mutatedParts)&&(xt(V,r),r.subscribers.forEach(function(N){return S.add(N)}));else if(0<b.length){w.optimisticOps=w.optimisticOps.filter(function(N){return N.trans!==c});for(var D=0,j=Object.values(w.queries.query);D<j.length;D++)for(var V,r,p,M=0,P=(V=j[D]).slice();M<P.length;M++)(r=P[M]).res!=null&&c.mutatedParts&&(C&&!r.dirty?(p=Object.isFrozen(r.res),p=Ha(r.res,r.req,b,g,r,p),r.dirty?(xt(V,r),r.subscribers.forEach(function(N){return S.add(N)})):p!==r.res&&(r.res=p,r.promise=F.resolve({result:p}))):(r.dirty&&xt(V,r),r.subscribers.forEach(function(N){return S.add(N)})))}}}S.forEach(function(N){return N()})}}})(!1),{signal:s}),c.addEventListener("error",l(!1),{signal:s}),c.addEventListener("complete",l(!0),{signal:s})),c},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return W(W({},a),{mutate:function(i){var l,c=J.trans;return!s.outbound&&c.db._options.cache!=="disabled"&&!c.explicit&&c.idbtrans.mode==="readwrite"&&(l=Zt["idb://".concat(t,"/").concat(n)])?(c=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||ua(s,i).some(function(C){return C==null}))?(l.optimisticOps.push(i),i.mutatedParts&&Ln(i.mutatedParts),c.then(function(C){0<C.numFailures&&(xt(l.optimisticOps,i),(C=Ja(0,i,C))&&l.optimisticOps.push(C),i.mutatedParts)&&Ln(i.mutatedParts)}),c.catch(function(){xt(l.optimisticOps,i),i.mutatedParts&&Ln(i.mutatedParts)})):c.then(function(C){var S=Ja(0,W(W({},i),{values:i.values.map(function(y,m){var x;return C.failures[m]?y:(Ze(x=(x=s.keyPath)!=null&&x.includes(".")?an(y):W({},y),s.keyPath,C.results[m]),x)})}),C);l.optimisticOps.push(S),queueMicrotask(function(){return i.mutatedParts&&Ln(i.mutatedParts)})}),c):a.mutate(i)},query:function(i){var l,c,C,S,y,m,x;return Wa(J,a)&&Ga("query",i)?(l=((C=J.trans)==null?void 0:C.db._options.cache)==="immutable",c=(C=J).requery,C=C.signal,m=((w,g,b,B)=>{var E=Zt["idb://".concat(w,"/").concat(g)];if(!E)return[];if(!(w=E.queries[b]))return[null,!1,E,null];var k=w[(B.query?B.query.index.name:null)||""];if(!k)return[null,!1,E,null];switch(b){case"query":var A=k.find(function(D){return D.req.limit===B.limit&&D.req.values===B.values&&Pa(D.req.query.range,B.query.range)});return A?[A,!0,E,k]:[k.find(function(D){return("limit"in D.req?D.req.limit:1/0)>=B.limit&&(!B.values||D.req.values)&&dr(D.req.query.range,B.query.range)}),!1,E,k];case"count":return A=k.find(function(D){return Pa(D.req.query.range,B.query.range)}),[A,!!A,E,k]}})(t,n,"query",i),x=m[0],S=m[2],y=m[3],x&&m[1]?x.obsSet=i.obsSet:(m=a.query(i).then(function(w){var g=w.result;if(x&&(x.res=g),l){for(var b=0,B=g.length;b<B;++b)Object.freeze(g[b]);Object.freeze(g)}else w.result=an(g);return w}).catch(function(w){return y&&x&&xt(y,x),Promise.reject(w)}),x={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(x):(y=[x],(S=S||(Zt["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),fr(x,y,c,C),x.promise.then(function(w){return{result:Ha(w.result,i,S?.optimisticOps,a,x,l)}})):a.query(i)}})}})}};function dn(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}Ie.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(jt),n.stores({}),this._state.autoSchema=!1),n},Ie.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||J.letThrough||this._vip)?e():new F(function(n,a){if(t._state.openComplete)return a(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new Z.DatabaseClosed);t.open().catch(ve)}t._state.dbReadyPromise.then(n,a)}).then(e)},Ie.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(l,c){return l.level-c.level}),this},Ie.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Ie.prototype.open=function(){var e=this;return ln(wt,function(){return en(e)})},Ie.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Cn.indexOf(this);if(0<=t&&Cn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new F(function(n){e.dbReadyResolve=n}),e.openCanceller=new F(function(n,a){e.cancelOpen=a}))},Ie.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ie.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new F(function(s,i){function l(){t.close(e);var c=t._deps.indexedDB.deleteDatabase(t.name);c.onsuccess=we(function(){var C,S,y;C=t._deps,S=t.name,ra(y=C.indexedDB)||S===ea||aa(y,C.IDBKeyRange).delete(S).catch(ve),s()}),c.onerror=ye(i),c.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(l):l()})},Ie.prototype.backendDB=function(){return this.idbdb},Ie.prototype.isOpen=function(){return this.idbdb!==null},Ie.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ie.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ie.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ie.prototype,"tables",{get:function(){var e=this;return pe(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ie.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,It(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},Ie.prototype._transaction=function(e,t,n){var a,s,i=this,l=J.trans,c=(l&&l.db===this&&e.indexOf("!")===-1||(l=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function(S){if(S=S instanceof i.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),e=="r"||e===ta)a=ta;else{if(e!="rw"&&e!=wa)throw new Z.InvalidArgument("Invalid transaction mode: "+e);a=wa}if(l){if(l.mode===ta&&a===wa){if(!c)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");l=null}l&&s.forEach(function(S){if(l&&l.storeNames.indexOf(S)===-1){if(!c)throw new Z.SubTransaction("Table "+S+" not included in parent transaction.");l=null}}),c&&l&&!l.active&&(l=null)}}catch(S){return l?l._promise(null,function(y,m){m(S)}):Ae(S)}var C=(function S(y,m,x,w,g){return F.resolve().then(function(){var k=J.transless||J,b=y._createTransaction(m,x,y._dbSchema,w),k=(b.explicit=!0,{trans:b,transless:k});if(w)b.idbtrans=w.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(A){return A.name===zn.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return S(y,m,x,null,g)})):Ae(A)}var B,E=ma(g),k=(E&&yn(),F.follow(function(){var A;(B=g.call(b,b))&&(E?(A=Gt.bind(null,null),B.then(A,A)):typeof B.next=="function"&&typeof B.throw=="function"&&(B=_a(B)))},k));return(B&&typeof B.then=="function"?F.resolve(B).then(function(A){return b.active?A:Ae(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return B})).then(function(A){return w&&b._resolve(),b._completion.then(function(){return A})}).catch(function(A){return b._reject(A),Ae(A)})})}).bind(null,this,a,s,l,n);return l?l._promise(a,C,"lock"):J.trans?ln(J.transless,function(){return i._whenReady(C)}):this._whenReady(C)},Ie.prototype.table=function(e){if(se(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var Pe=Ie;function Ie(e,t){var n,a,s,i,l,c=this,C=(this._middlewares={},this.verno=0,Ie.dependencies),C=(this._options=t=W({addons:Ie.addons,autoOpen:!0,indexedDB:C.indexedDB,IDBKeyRange:C.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ve,dbReadyPromise:null,cancelOpen:ve,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=(S.dbReadyPromise=new F(function(m){S.dbReadyResolve=m}),S.openCanceller=new F(function(m,x){S.cancelOpen=x}),this._state=S,this.name=e,this.on=I(this,"populate","blocked","versionchange","close",{ready:[Te,ve]}),this.once=function(m,x){var w=function(){for(var g=[],b=0;b<arguments.length;b++)g[b]=arguments[b];c.on(m).unsubscribe(w),x.apply(c,g)};return c.on(m,w)},this.on.ready.subscribe=Ta(this.on.ready.subscribe,function(m){return function(x,w){Ie.vip(function(){var g,b=c._state;b.openComplete?(b.dbOpenError||F.resolve().then(x),w&&m(x)):b.onReadyBeingFired?(b.onReadyBeingFired.push(x),w&&m(x)):(m(x),g=c,w||m(function B(){g.on.ready.unsubscribe(x),g.on.ready.unsubscribe(B)}))})}}),this.Collection=(n=this,L(Ke.prototype,function(B,b){this.db=n;var w=ja,g=null;if(b)try{w=b()}catch(k){g=k}var b=B._ctx,B=b.table,E=B.hook.reading.fire;this._ctx={table:B,index:b.index,isPrimKey:!b.index||B.schema.primKey.keyPath&&b.index===B.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:g,or:b.or,valueMapper:E!==Mn?E:null}})),this.Table=(a=this,L(v.prototype,function(m,x,w){this.db=a,this._tx=w,this.name=m,this.schema=x,this.hook=a._allTables[m]?a._allTables[m].hook:I(null,{creating:[ga,ve],reading:[sr,Mn],updating:[Ia,ve],deleting:[Un,ve]})})),this.Transaction=(s=this,L(nt.prototype,function(m,x,w,g,b){var B=this;m!=="readonly"&&x.forEach(function(E){E=(E=w[E])==null?void 0:E.yProps,E&&(x=x.concat(E.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=m,this.storeNames=x,this.schema=w,this.chromeTransactionDurability=g,this.idbtrans=null,this.on=I(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new F(function(E,k){B._resolve=E,B._reject=k}),this._completion.then(function(){B.active=!1,B.on.complete.fire()},function(E){var k=B.active;return B.active=!1,B.on.error.fire(E),B.parent?B.parent._reject(E):k&&B.idbtrans&&B.idbtrans.abort(),Ae(E)})})),this.Version=(i=this,L(Fe.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(l=this,L(tt.prototype,function(m,x,w){if(this.db=l,this._ctx={table:m,index:x===":id"?null:x,or:w},this._cmp=this._ascending=oe,this._descending=function(g,b){return oe(b,g)},this._max=function(g,b){return 0<oe(g,b)?g:b},this._min=function(g,b){return oe(g,b)<0?g:b},this._IDBKeyRange=l._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=He(t.IDBKeyRange),this._createTransaction=function(m,x,w,g){return new c.Transaction(m,x,w,c._options.chromeTransactionDurability,g)},this._fireOnBlocked=function(m){c.on("blocked").fire(m),Cn.filter(function(x){return x.name===c.name&&x!==c&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(m)})},this.use(ur),this.use(gt),this.use(cr),this.use(za),this.use(Ua),new Proxy(this,{get:function(m,x,w){var g;return x==="_vip"||(x==="table"?function(b){return dn(c.table(b),y)}:(g=Reflect.get(m,x,w))instanceof v?dn(g,y):x==="tables"?g.map(function(b){return dn(b,y)}):x==="_createTransaction"?function(){return dn(g.apply(this,arguments),y)}:g)}}));this.vip=y,C.forEach(function(m){return m(c)})}var At,Ft=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",hr=(Oa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Oa.prototype[Ft]=function(){return this},Oa);function Oa(e){this._subscribe=e}try{At={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{At={indexedDB:null,IDBKeyRange:null}}function ca(e){var t,n=!1,a=new hr(function(s){var i=ma(e),l,c=!1,C={},S={},y={get closed(){return c},unsubscribe:function(){c||(c=!0,l&&l.abort(),m&&$e.storagemutated.unsubscribe(w))}},m=(s.start&&s.start(y),!1),x=function(){return un(g)},w=function(b){qn(C,b),ia(S,C)&&x()},g=function(){var b,B,E;!c&&At.indexedDB&&(C={},b={},l&&l.abort(),l=new AbortController,E=(k=>{var A=on();try{i&&yn();var D=Wt(e,k);return D=i?D.finally(Gt):D}finally{A&&bn()}})(B={subscr:b,signal:l.signal,requery:x,querier:e,trans:null}),Promise.resolve(E).then(function(k){n=!0,t=k,c||B.signal.aborted||(C={},(A=>{for(var D in A)if(se(A,D))return;return 1})(S=b)||m||($e(de,w),m=!0),un(function(){return!c&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||c||un(function(){c||s.error&&s.error(k)})}))};return setTimeout(x,0),y});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var tn=Pe;function da(e){var t=nn;try{nn=!0,$e.storagemutated.fire(e),St(e,!0)}finally{nn=t}}ht(tn,W(W({},_t),{delete:function(e){return new tn(e,{addons:[]}).delete()},exists:function(e){return new tn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=tn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(ra(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==ea})}):aa(n,t).toCollection().primaryKeys()).then(e)}catch{return Ae(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){ce(this,e)}},ignoreTransaction:function(e){return J.trans?ln(J.transless,e):e()},vip:sa,async:function(e){return function(){try{var t=_a(e.apply(this,arguments));return t&&typeof t.then=="function"?t:F.resolve(t)}catch(n){return Ae(n)}}},spawn:function(e,t,n){try{var a=_a(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:F.resolve(a)}catch(s){return Ae(s)}},currentTransaction:{get:function(){return J.trans||null}},waitFor:function(e,t){return e=F.resolve(typeof e=="function"?tn.ignoreTransaction(e):e).timeout(t||6e4),J.trans?J.trans.waitFor(e):e},Promise:F,debug:{get:function(){return Mt},set:function(e){mn(e)}},derive:Ct,extend:ce,props:ht,override:Ta,Events:I,on:$e,liveQuery:ca,extendObservabilitySet:qn,getByKeyPath:Dt,setByKeyPath:Ze,delByKeyPath:function(e,t){typeof t=="string"?Ze(e,t,void 0):"length"in t&&[].map.call(t,function(n){Ze(e,n,void 0)})},shallowClone:Aa,deepClone:an,getObjectDiff:la,cmp:oe,asap:va,minKey:-1/0,addons:[],connections:Cn,errnames:zn,dependencies:At,cache:Zt,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),tn.maxKey=He(tn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&($e(de,function(e){nn||(e=new CustomEvent(Me,{detail:e}),nn=!0,dispatchEvent(e),nn=!1)}),addEventListener(Me,function(e){e=e.detail,nn||da(e)}));var fn,nn=!1,at=function(){};return typeof BroadcastChannel<"u"&&((at=function(){(fn=new BroadcastChannel(Me)).onmessage=function(e){return e.data&&da(e.data)}})(),typeof fn.unref=="function"&&fn.unref(),$e(de,function(e){nn||fn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Pe.disableBfCache&&e.persisted){Mt&&console.debug("Dexie: handling persisted pagehide"),fn?.close();for(var t=0,n=Cn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Pe.disableBfCache&&e.persisted&&(Mt&&console.debug("Dexie: handling persisted pageshow"),at(),da({all:new Xe(-1/0,[[]])}))})),F.rejectionMapper=function(e,t){return!e||e instanceof sn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Da[e.name]?e:(t=new Da[e.name](t||e.message,e),"stack"in e&&it(t,"stack",{get:function(){return this.inner.stack}}),t)},mn(Mt),W(Pe,Object.freeze({__proto__:null,Dexie:Pe,Entity:Ra,PropModification:u,RangeSet:Xe,add:function(e){return new u({add:e})},cmp:oe,default:Pe,liveQuery:ca,mergeRanges:mt,rangesOverlap:$a,remove:function(e){return new u({remove:e})},replacePrefix:function(e,t){return new u({replacePrefix:[e,t]})}}),{default:Pe}),Pe})})(Xa)),Xa.exports}var Qr=Xr();const pr=Jr(Qr),Ir=Symbol.for("Dexie"),Qa=globalThis[Ir]||(globalThis[Ir]=pr);if(pr.semVer!==Qa.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${pr.semVer} and ${Qa.semVer}`);const{liveQuery:cs,mergeRanges:ds,rangesOverlap:fs,RangeSet:hs,cmp:ps,Entity:vs,PropModification:ms,replacePrefix:gs,add:bs,remove:ys,DexieYProvider:Cs}=Qa,rt=new Qa("haushaltsbuch-db");rt.version(1).stores({years:"year",fixedTemplateState:"id"});rt.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});const ha="singleton";function Za(){return new Date().toISOString()}async function Vn(){return rt.years.orderBy("year").toArray()}async function Zr(T){return rt.years.get(T)}async function Rn(T){await rt.years.put(T)}async function vr(){const T=await rt.fixedTemplateState.get(ha);if(!T){const f={id:ha,templates:[],version:Za(),updatedAt:new Date().toISOString()};return await rt.fixedTemplateState.put(f),{templates:[],version:f.version}}return{templates:T.templates,version:T.version}}async function mr(T){const f=Za();return await rt.fixedTemplateState.put({id:ha,templates:T,version:f,updatedAt:new Date().toISOString()}),f}async function gr(){const T=await rt.annualVariableFixedTemplateState.get(ha);if(!T){const f={id:ha,templates:[],version:Za(),updatedAt:new Date().toISOString()};return await rt.annualVariableFixedTemplateState.put(f),{templates:[],version:f.version}}return{templates:T.templates,version:T.version}}async function br(T){const f=Za();return await rt.annualVariableFixedTemplateState.put({id:ha,templates:T,version:f,updatedAt:new Date().toISOString()}),f}async function es(){const T=await Vn(),[f,Ee]=await Promise.all([vr(),gr()]);return{exportedAt:new Date().toISOString(),years:T,fixedTemplates:f.templates,annualVariableFixedTemplates:Ee.templates}}async function ts(T){await rt.transaction("rw",[rt.years,rt.fixedTemplateState,rt.annualVariableFixedTemplateState],async()=>{await rt.years.clear(),await rt.years.bulkPut(T.years),await mr(T.fixedTemplates),await br(T.annualVariableFixedTemplates??[])})}function Oe(T){const f=T.replace(",",".").trim();if(!f)return 0;const Ee=Number.parseFloat(f);return Number.isNaN(Ee)?0:Math.round(Ee*100)}const ns=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function $(T){return ns.format(T/100)}function ft(T){return(T/100).toFixed(2)}function Be(T){return new Date(2026,T-1,1).toLocaleDateString("de-DE",{month:"long"})}const Lr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function Nr(T){return Lr.includes(T)}function as(T){switch(T){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const qr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function rs(T){const f={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ee="habu-theme",W="habu-backup-dirty",ue="habu-unexported-change-log",ae="habu-last-backup-filename",pe="habu-recurring-budget-defaults";let re=null,ce=null,Qe=null,Ne=null,se=!1,ht=!1;const st=new WeakMap;function it(){const o=T.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const u=getComputedStyle(document.documentElement),h=u.getPropertyValue("--text-main").trim(),d=u.getPropertyValue("--text-muted").trim(),v=u.getPropertyValue("--table-stripe").trim(),_=u.getPropertyValue("--table-border").trim(),I=u.getPropertyValue("--budget-under").trim(),L=u.getPropertyValue("--danger-2").trim(),q=96,H=250,Y=X=>1-Math.pow(1-Math.max(0,Math.min(1,X)),3);o.forEach(X=>{X.dataset.hoverBound!=="1"&&(X.dataset.hoverBound="1",X.addEventListener("mouseenter",()=>{X.dataset.hovering="1",it()}),X.addEventListener("mouseleave",()=>{delete X.dataset.hovering,delete X.dataset.hoverX,it()}),X.addEventListener("mousemove",Se=>{const ge=X.getBoundingClientRect(),De=Math.round(Se.clientX-ge.left);X.dataset.hoverX=String(De),it()}));const he=Number.parseInt(X.dataset.budgetCents??"0",10),me=Number.parseInt(X.dataset.actualCents??"0",10),We=X.dataset.label??"Kategorie",Ke=X.dataset.hovering==="1",z=`${We}|${he}|${me}`,ze=X.dataset.lastRenderSignature!==z;X.dataset.lastRenderSignature=z;const Le=Math.max(120,Math.floor(X.clientWidth||120)),Ge=window.devicePixelRatio||1,_e=Math.floor(Le*Ge),je=Math.floor(q*Ge);(X.width!==_e||X.height!==je)&&(X.width=_e,X.height=je);const R=X.getContext("2d");if(!R)return;const ke=Math.max(1,he,me),ct=Math.min(1,Math.max(0,he/ke)),tt=Math.min(1,Math.max(0,me/ke)),ee=he-me,ye=he>0?me/he*100:me>0?100:0,Je=8,de=Je,Me=34,$e=Le-Je*2,nt=22,be=Number.parseInt(X.dataset.hoverX??"-1",10),Ue=(Se,ge,De,Re,Ve)=>{R.beginPath(),R.moveTo(Se+Ve,ge),R.lineTo(Se+De-Ve,ge),R.quadraticCurveTo(Se+De,ge,Se+De,ge+Ve),R.lineTo(Se+De,ge+Re-Ve),R.quadraticCurveTo(Se+De,ge+Re,Se+De-Ve,ge+Re),R.lineTo(Se+Ve,ge+Re),R.quadraticCurveTo(Se,ge+Re,Se,ge+Re-Ve),R.lineTo(Se,ge+Ve),R.quadraticCurveTo(Se,ge,Se+Ve,ge),R.closePath()},Lt=Se=>{R.setTransform(1,0,0,1,0,0),R.clearRect(0,0,X.width,X.height),R.scale(Ge,Ge),Ue(de,Me,$e,nt,8),R.fillStyle=v,R.fill(),R.strokeStyle=_,R.lineWidth=1,R.stroke();const ge=[.6,.25,.15],De=[.1,.16,.24];let Re=0;ge.forEach((Rt,O)=>{const K=$e*Rt;R.save(),R.globalAlpha=De[O]??.1,R.fillStyle=d,R.fillRect(de+Re,Me,K,nt),R.restore(),Re+=K});const Ve=he>0&&me>he?L:I,vt=$e*tt*Se;Ue(de,Me+3,vt,nt-6,6),R.fillStyle=Ve,R.fill(),Ke&&(R.save(),R.strokeStyle=Ve,R.lineWidth=1.5,R.globalAlpha=.8,Ue(de-1,Me+2,Math.max(2,vt+2),nt-4,7),R.stroke(),R.restore());const Tt=de+$e*ct;R.strokeStyle=h,R.lineWidth=Ke?3:2,R.beginPath(),R.moveTo(Tt,Me-3),R.lineTo(Tt,Me+nt+3),R.stroke(),Ke&&be>=de&&be<=de+$e&&(R.save(),R.strokeStyle=h,R.globalAlpha=.35,R.lineWidth=1,R.beginPath(),R.moveTo(be,Me-8),R.lineTo(be,Me+nt+8),R.stroke(),R.restore()),R.fillStyle=h,R.font="600 12px system-ui, -apple-system, sans-serif",R.textAlign="left",R.textBaseline="top",R.fillText(We,de,10);const jt=ye*Se;if(R.fillStyle=ye>100?L:ye<100?I:d,R.textAlign="right",R.fillText(`${jt.toFixed(0)}%`,de+$e,10),R.fillStyle=d,R.font="500 11px system-ui, -apple-system, sans-serif",R.textAlign="left",R.textBaseline="top",R.fillText(`Ist ${$(me)} · Ziel ${$(he)} · Δ ${ee>=0?"+":""}${$(ee)}`,de,64),Ke){const Rt=`Nutzung ${ye.toFixed(1)}%`;R.font="600 11px system-ui, -apple-system, sans-serif";const O=8,K=5,ie=22,Vt=R.measureText(Rt).width+O*2,xn=Number.isFinite(be)?be-Vt/2:de+$e-Vt,Qt=Math.min(de+$e-Vt,Math.max(de,xn)),wn=Me-ie-8;R.save(),R.fillStyle=h,R.globalAlpha=.92,Ue(Qt,wn,Vt,ie,6),R.fill(),R.restore(),R.fillStyle=v,R.textAlign="left",R.textBaseline="top",R.fillText(Rt,Qt+O,wn+K)}},kt=st.get(X);if(kt&&window.cancelAnimationFrame(kt),!ze){Lt(1);return}const He=performance.now(),pt=Se=>{const ge=Se-He,De=Math.min(1,ge/H);if(Lt(Y(De)),De<1){const Re=window.requestAnimationFrame(pt);st.set(X,Re);return}st.delete(X)},$t=window.requestAnimationFrame(pt);st.set(X,$t)})}function Ct(o){if(o==="dashboard"){const u=f.years.slice().sort((d,v)=>v.year-d.year);u.some(d=>d.year===f.dashboardYear)||(f.dashboardYear=f.selectedYear??u[0]?.year??null)}f.topModal=o,ne()}function pa(){f.topModal&&(f.topModal=null,ne())}function er(){f.showUnexportedChangeLogModal=!0,ne()}function hn(){f.showUnexportedChangeLogModal&&(f.showUnexportedChangeLogModal=!1,ne())}function Ta(){se||(se=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(f.showUnexportedChangeLogModal){o.preventDefault(),hn();return}f.topModal&&(o.preventDefault(),pa())}}))}function Bn(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const u=o/6;return window.scrollY>u}function va(){const o=T.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",Bn())}function Dt(){if(ht)return;ht=!0;const o=()=>{va(),it()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Ze(){if(re&&document.body.contains(re))return re;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return re=o,o;const u=document.createElement("div");return u.id="toast-root",u.className="toast-root",u.setAttribute("aria-live","polite"),u.setAttribute("aria-atomic","true"),document.body.appendChild(u),re=u,u}function Aa(){if(ce&&document.body.contains(ce))return ce;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return ce=o,o;const u=document.createElement("div");return u.id="amount-modal-root",document.body.appendChild(u),ce=u,u}function tr(){if(Ne&&document.body.contains(Ne))return Ne;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return Ne=o,o;const u=document.createElement("div");return u.id="weekly-shopping-modal-root",document.body.appendChild(u),Ne=u,u}function It(){if(!ce){Qe=null;return}ce.innerHTML="",Qe=null}function pn(){Ne&&(Ne.innerHTML="")}function En(o,u,h){const d=new Date,v=d.getFullYear(),_=d.getMonth()+1,I=d.getDate(),L=new Date(o,u,0).getDate();if(o<v||o===v&&u<_)return{occurrences:0,remainingDays:0};const q=o===v&&u===_?Math.min(I,L):1,H=Math.max(0,L-q+1);let Y=0;for(let X=q;X<=L;X+=1)new Date(o,u-1,X).getDay()===h&&(Y+=1);return{occurrences:Y,remainingDays:H}}async function an(o,u){const h=Te();h&&(h.weeklyShoppingWeekday=o,h.weeklyShoppingEstimateCents=Math.max(0,u),await xe(`Wocheneinkauf geplant: ${qr.find(d=>d.value===o)?.label??"Wochentag"} mit ${$(h.weeklyShoppingEstimateCents)} €`),ne())}function nr(){const o=Te();if(!o)return;const u=tr();pn();const h=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,d=o.weeklyShoppingEstimateCents??0,v=rn(),_=xt(),I=Mt(v,_),L=I?mn(I):{foodCents:0,goingOutCents:0},q=I?(I.foodBudgetCents??0)+(I.goingOutBudgetCents??0):0,H=L.foodCents+L.goingOutCents,Y=q-H;u.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${qr.map(ee=>`<option value="${ee.value}" ${ee.value===h?"selected":""}>${ee.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${ft(d)}" />
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
    `;const X=u.querySelector(".weekly-shopping-modal-backdrop"),he=u.querySelector("#weekly-shopping-weekday"),me=u.querySelector("#weekly-shopping-estimate"),We=u.querySelector("#weekly-shopping-occurrences"),Ke=u.querySelector("#weekly-shopping-total"),z=u.querySelector("#weekly-shopping-rest-before"),ze=u.querySelector("#weekly-shopping-rest-after"),Le=u.querySelector("#weekly-shopping-days-left"),Ge=u.querySelector("#weekly-shopping-per-day"),_e=u.querySelector("#weekly-shopping-cancel"),je=u.querySelector("#weekly-shopping-save");function R(){const ee=Number.parseInt(he?.value??"1",10);return Number.isInteger(ee)&&ee>=0&&ee<=6?ee:1}function ke(){return Math.max(0,Oe(me?.value??"0"))}function ct(){const ee=R(),ye=ke(),{occurrences:Je,remainingDays:de}=En(v,_,ee),Me=Je*ye,$e=Y-Me,nt=de>0?Math.trunc($e/de):0;We&&(We.textContent=`${Je}`),Ke&&(Ke.textContent=`${$(Me)} €`),z&&(z.textContent=`${$(Y)} €`),ze&&(ze.textContent=`${$($e)} €`,ze.className=$e<0?"danger":$e>0?"budget-under":""),Le&&(Le.textContent=`${de}`),Ge&&(Ge.textContent=`${$(nt)} €`,Ge.className=nt<0?"danger":nt>0?"budget-under":"")}async function tt(){await an(R(),ke()),pn()}_e?.addEventListener("click",()=>{pn()}),je?.addEventListener("click",async()=>{await tt()}),he?.addEventListener("change",()=>{ct()}),me?.addEventListener("input",()=>{ct()}),me?.addEventListener("keydown",async ee=>{if(ee.key==="Escape"){ee.preventDefault(),pn();return}ee.key==="Enter"&&(ee.preventDefault(),await tt())}),X?.addEventListener("click",ee=>{ee.target===X&&pn()}),window.setTimeout(()=>{me?.focus(),me?.select(),ct()},0)}function Yn(o,u){let h=o;const d=u.min;if(d){const _=Number.parseFloat(d);if(!Number.isNaN(_)){const I=Math.round(_*100);h=Math.max(h,I)}}const v=u.max;if(v){const _=Number.parseFloat(v);if(!Number.isNaN(_)){const I=Math.round(_*100);h=Math.min(h,I)}}return h}function ot(o){if(o.disabled)return;const u=Aa();It(),Qe=o;const h=Oe(o.value||"0"),d="Betrag anpassen";u.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${$(h)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${$(h)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${$(h)} €</strong></div>
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
    `;const v=u.querySelector(".amount-modal-backdrop"),_=u.querySelector("#amount-modal-delta"),I=u.querySelector("#amount-modal-next-delta"),L=u.querySelector("#amount-modal-next-overwrite"),q=u.querySelector("#amount-modal-cancel"),H=u.querySelector("#amount-modal-overwrite"),Y=u.querySelector("#amount-modal-apply");function X(){const z=Oe(_?.value??"0");return Yn(h+z,o)}function he(){const z=Oe(_?.value??"0");return Yn(z,o)}function me(){I&&(I.textContent=`${$(X())} €`),L&&(L.textContent=`${$(he())} €`)}function We(){const z=Qe;if(!z){It();return}const ze=X();It(),z.value=ft(ze),z.dispatchEvent(new Event("change",{bubbles:!0}))}function Ke(){const z=Qe;if(!z){It();return}const ze=he();It(),z.value=ft(ze),z.dispatchEvent(new Event("change",{bubbles:!0}))}q?.addEventListener("click",()=>{It()}),H?.addEventListener("click",()=>{Ke()}),Y?.addEventListener("click",()=>{We()}),_?.addEventListener("input",()=>{me()}),_?.addEventListener("keydown",z=>{if(z.key==="Escape"){z.preventDefault(),It();return}z.key==="Enter"&&(z.preventDefault(),We())}),v?.addEventListener("click",z=>{z.target===v&&It()}),window.setTimeout(()=>{_?.focus(),_?.select(),me()},0)}function Ce(o,u="success"){const h=Ze(),d=document.createElement("div");d.className=`toast toast-${u}`,d.textContent=o,h.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const v=u==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},v)}function xt(){return new Date().getMonth()+1}function rn(){return new Date().getFullYear()}function Et(o){const u=rn(),h=o.find(d=>d.year===u);return h?h.year:o[0]?.year??null}function ma(){return new Date().toISOString().slice(0,10)}function _t(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ar(){const o=localStorage.getItem(Ee);return o&&Nr(o)?o:"light"}function sn(o){f.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Ee,o)}function Fa(){return localStorage.getItem(W)==="1"}function _n(o){localStorage.setItem(W,o?"1":"0")}function vn(){const o=localStorage.getItem(ue);if(!o)return[];try{const u=JSON.parse(o);return Array.isArray(u)?u.filter(h=>{if(!h||typeof h!="object")return!1;const d=h;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function zn(o){localStorage.setItem(ue,JSON.stringify(o.slice(-200)))}function rr(){const o=localStorage.getItem(ae);if(!o)return null;const u=o.trim();return u||null}function Z(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},u=localStorage.getItem(pe);if(!u)return o;try{const h=JSON.parse(u),d=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:d(h.foodBudgetCents),goingOutBudgetCents:d(h.goingOutBudgetCents),fixedBudgetCents:d(h.fixedBudgetCents),variableBudgetCents:d(h.variableBudgetCents),miscBudgetCents:d(h.miscBudgetCents)}}catch{return o}}function Da(o){localStorage.setItem(pe,JSON.stringify(o))}function ve(o){o.months.forEach(u=>{const{recurringBudgetDefaults:h}=f;typeof h.foodBudgetCents=="number"&&(u.foodBudgetCents=h.foodBudgetCents),typeof h.goingOutBudgetCents=="number"&&(u.goingOutBudgetCents=h.goingOutBudgetCents),typeof h.fixedBudgetCents=="number"&&(u.fixedBudgetCents=h.fixedBudgetCents),typeof h.variableBudgetCents=="number"&&(u.variableBudgetCents=h.variableBudgetCents),typeof h.miscBudgetCents=="number"&&(u.miscBudgetCents=h.miscBudgetCents)})}function Mn(o){const u=o.trim();u&&localStorage.setItem(ae,u)}async function sr(){Ze(),sn(ar()),f.hasUnexportedChanges=Fa(),f.unexportedChangeLog=vn(),f.lastBackupFileName=rr(),f.recurringBudgetDefaults=Z(),Ta(),Dt();const[o,u,h]=await Promise.all([Vn(),vr(),gr()]);f.years=o,f.annualVariableFixedTemplates=h.templates,f.annualVariableFixedTemplateVersion=h.version,Nt(f.years),Ca(f.years),f.fixedTemplates=u.templates,f.fixedTemplateVersion=u.version,await Ia(f.years),o.length>0&&(f.selectedYear=Et(o),f.selectedMonth=xt()),ne()}function Nt(o){const u=h=>h==="balance"||h==="fresh"||h==="salary"?h:void 0;o.forEach(h=>{h.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const v=Number(d.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?d.weeklyShoppingWeekday=v:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(v=>{const _=u(v.incomeSource);if(!_){const{incomeSource:I,...L}=v;return L}return{...v,incomeSource:_}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((v,_)=>v+_.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((v,_)=>v+_.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function ga(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function Un(o){return o==="fresh"||o==="salary"||!o}async function Ia(o){for(const u of o)await Rn(u)}function Wn(){if(f.selectedYear)return f.years.find(o=>o.year===f.selectedYear)}function Te(){const o=Wn();if(o)return o.months.find(u=>u.month===f.selectedMonth)}function Mt(o,u){const h=f.years.find(d=>d.year===o);if(h)return h.months.find(d=>d.month===u)}function mn(o){const u=o.days.reduce((L,q)=>L+q.foodCents,0),h=o.days.reduce((L,q)=>L+q.goingOutCents,0),d=o.fixedCosts.reduce((L,q)=>L+q.actualCents,0),v=o.variableCosts.reduce((L,q)=>L+q.amountCents,0)+o.variablePositions.reduce((L,q)=>L+q.actualCents,0),_=o.miscCosts.reduce((L,q)=>L+q.amountCents,0),I=u+h+d+v+_;return{foodCents:u,goingOutCents:h,fixedCents:d,variableCents:v,miscCents:_,totalCents:I}}function zt(o){const u=o.foodBudgetCents??0,h=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((I,L)=>I+L.plannedCents,0),v=o.variablePositions.reduce((I,L)=>I+L.budgetCents,0),_=o.miscBudgetCents??0;return u+h+d+(o.variableBudgetCents??v)+_}function Pn(o){return o.months.reduce((u,h)=>{const d=mn(h);return{foodCents:u.foodCents+d.foodCents,goingOutCents:u.goingOutCents+d.goingOutCents,fixedCents:u.fixedCents+d.fixedCents,variableCents:u.variableCents+d.variableCents,miscCents:u.miscCents+d.miscCents,totalCents:u.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function On(o){return o.months.slice().sort((u,h)=>u.month-h.month).map(u=>({month:u.month,summary:mn(u)}))}function et(o){const u=o.months.reduce((I,L)=>I+(L.foodBudgetCents??0),0),h=o.months.reduce((I,L)=>I+(L.goingOutBudgetCents??0),0),d=o.months.reduce((I,L)=>I+(L.fixedBudgetCents??L.fixedCosts.reduce((q,H)=>q+H.plannedCents,0)),0),v=o.months.reduce((I,L)=>I+(L.variableBudgetCents??L.variablePositions.reduce((q,H)=>q+H.budgetCents,0)),0),_=o.months.reduce((I,L)=>I+(L.miscBudgetCents??0),0);return{foodCents:u,goingOutCents:h,fixedCents:d,variableCents:v,miscCents:_,totalCents:u+h+d+v+_}}function qt(o){return o.months.reduce((u,h)=>u+h.incomes.reduce((d,v)=>d+(Un(v.incomeSource)?v.amountCents:0),0),0)}function Tn(o,u){const h=o.months.slice().sort((d,v)=>d.month-v.month)[0];return h?u.get(F(o.year,h.month))?.carriedFromPreviousCents??0:0}function An(){const o=f.years.slice().sort((d,v)=>d.year-v.year).flatMap(d=>d.months.slice().sort((v,_)=>v.month-_.month).map(v=>({year:d.year,month:v}))),u=new Map;let h=0;return o.forEach(({year:d,month:v},_)=>{const I=v.carryoverOverrideCents,L=typeof I=="number",q=L?I:h,H=_>0||L,Y=v.incomes.reduce((We,Ke)=>We+(Un(Ke.incomeSource)?Ke.amountCents:0),0),X=zt(v),he=Y+q,me=he-X;u.set(F(d,v.month),{hasPreviousMonth:H,carriedFromPreviousCents:q,recordedIncomeCents:Y,effectiveIncomeCents:he,plannedBudgetCents:X,netCents:me}),h=me}),u}function lt(o,u){return u<=0?"":o>u?"budget-over":o<u?"budget-under":""}function Gn(o){return`${o>0?"+":""}${$(o)}`}function yt(o,u){const h=o-u,d=lt(u,o);return`${$(o)} <span class="eval-diff ${d}">(Δ ${Gn(h)})</span>`}function Ut(o,u){const h=o!==null,d=h?o-u:null,v=h?lt(u,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${h?`${$(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${$(u)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${d===null?"-":`${$(d)} €`}</strong>
      </div>
    </div>`}async function ba(o){if(await Zr(o)){alert(`Jahr ${o} existiert bereits.`);return}const h=Tr(o,f.fixedTemplates,f.fixedTemplateVersion);ve(h),Dn(h),await Rn(h),f.years=await Vn(),wt(`Jahr ${o} wurde angelegt`),f.selectedYear=o,f.selectedMonth=xt(),Ce(`Jahr ${o} wurde angelegt.`),ne()}function wt(o="Änderung an den Daten"){f.hasUnexportedChanges=!0,_n(!0);const u=f.selectedYear?`${f.selectedYear}-${String(f.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",h={id:Bt("change"),timestampIso:new Date().toISOString(),message:`${o} (${u})`};f.unexportedChangeLog=[...f.unexportedChangeLog,h].slice(-200),zn(f.unexportedChangeLog)}function J(o){const u=o.trim();u&&(f.lastBackupFileName=u,Mn(u))}function gn(o){f.hasUnexportedChanges=!1,_n(!1),f.unexportedChangeLog=[],zn([]),f.showUnexportedChangeLogModal=!1,J(o)}async function xe(o){const u=Wn();u&&(await Rn(u),f.years=await Vn(),wt(o))}async function ut(o){for(const u of f.years)await Rn(u);f.years=await Vn(),wt(o)}function F(o,u){return o*100+u}function Fn(o){const u=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!u)return null;const h=u[1],d=u[2];return!h||!d?null:{year:Number.parseInt(h,10),month:Number.parseInt(d,10)}}function ya(o,u){const h=Fn(o.dueDateIso);if(!h||u.year<h.year)return;const d=u.months.find(_=>_.month===h.month);!d||d.variablePositions.some(_=>_.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Bt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],Ot(d))}function Dn(o){f.annualVariableFixedTemplates.forEach(u=>{ya(u,o)})}function Ca(o){const u=new Set(f.annualVariableFixedTemplates.map(h=>h.id));o.forEach(h=>{h.months.forEach(d=>{const v=d.variablePositions.some(I=>typeof I.autoAnnualTemplateId=="string"),_=d.fixedCosts.some(I=>typeof I.autoAnnualTemplateId=="string");v&&(d.variablePositions=d.variablePositions.filter(I=>I.autoAnnualTemplateId?u.has(I.autoAnnualTemplateId):!0),Ot(d)),_&&(d.fixedCosts=d.fixedCosts.filter(I=>!I.autoAnnualTemplateId),Pt(d))}),Dn(h)})}function Pt(o){o.fixedBudgetCents=o.fixedCosts.reduce((u,h)=>u+h.plannedCents,0)}function Ot(o){o.variableBudgetCents=o.variablePositions.reduce((u,h)=>u+h.budgetCents,0)}function ir(){if(f.selectedYear)return`${f.selectedYear}-${String(f.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function on(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",ir());if(!o)return null;const u=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!u)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const h=u[1],d=u[2];return!h||!d?null:{year:Number.parseInt(h,10),month:Number.parseInt(d,10)}}function bn(o,u){const h=F(u.year,u.month);f.years.forEach(d=>{d.months.forEach(v=>{if(F(d.year,v.month)<h)return;v.fixedCosts.some(I=>I.templateId===o.id)||(v.fixedCosts.push({id:Bt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Pt(v))})})}function xa(o,u,h){const d=F(h.year,h.month);f.years.forEach(v=>{v.months.forEach(_=>{F(v.year,_.month)<d||(_.fixedCosts=_.fixedCosts.map(I=>I.templateId!==u.id?I:{...I,name:u.name,plannedCents:u.plannedCents,actualCents:I.actualCents===o.plannedCents?u.plannedCents:I.actualCents}),Pt(_))})})}function Jn(o,u){const h=F(u.year,u.month);f.years.forEach(d=>{d.months.forEach(v=>{F(d.year,v.month)<h||(v.fixedCosts=v.fixedCosts.filter(_=>_.templateId!==o),Pt(v))})})}async function we(o,u){const h=o.trim();if(!h)return;const d=on();if(!d)return;const v=!!f.editingFixedTemplateId;if(f.editingFixedTemplateId){const _=f.fixedTemplates.find(L=>L.id===f.editingFixedTemplateId);if(!_)return;const I={..._,name:h,plannedCents:u};f.fixedTemplates=f.fixedTemplates.map(L=>L.id===f.editingFixedTemplateId?I:L),xa(_,I,d)}else{const _={id:Bt("tpl"),name:h,plannedCents:u};f.fixedTemplates=[...f.fixedTemplates,_],bn(_,d)}f.fixedTemplateVersion=await mr(f.fixedTemplates),f.editingFixedTemplateId=null,await ut(v?`Fixkosten-Vorlage aktualisiert: ${h} (${$(u)} €)`:`Fixkosten-Vorlage hinzugefügt: ${h} (${$(u)} €)`),Ce(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function Ye(o){f.editingFixedTemplateId=o,ne()}function or(){f.editingFixedTemplateId=null,ne()}async function Hn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const h=on();if(!h)return;const d=f.fixedTemplates.find(v=>v.id===o);f.fixedTemplates=f.fixedTemplates.filter(v=>v.id!==o),Jn(o,h),f.editingFixedTemplateId===o&&(f.editingFixedTemplateId=null),f.fixedTemplateVersion=await mr(f.fixedTemplates),await ut(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),Ce("Fixkosten-Vorlage wurde gelöscht."),ne()}async function Xn(o,u,h){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=Fn(u);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(h<=0){alert("Bitte einen positiven Betrag eingeben.");return}const _={id:Bt("annualtpl"),name:d,plannedCents:h,dueDateIso:u};f.annualVariableFixedTemplates=[...f.annualVariableFixedTemplates,_],f.years.forEach(I=>{ya(_,I)}),f.annualVariableFixedTemplateVersion=await br(f.annualVariableFixedTemplates),await ut(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${$(h)} €, jährlich in ${Be(v.month)})`),Ce("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function Qn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const h=f.annualVariableFixedTemplates.find(d=>d.id===o);h&&(f.annualVariableFixedTemplates=f.annualVariableFixedTemplates.filter(d=>d.id!==o),f.years.forEach(d=>{d.months.forEach(v=>{v.variablePositions=v.variablePositions.filter(_=>_.autoAnnualTemplateId!==o),Ot(v),v.fixedCosts=v.fixedCosts.filter(_=>_.autoAnnualTemplateId!==o),Pt(v)})}),f.annualVariableFixedTemplateVersion=await br(f.annualVariableFixedTemplates),await ut(`Variable Fixkosten-Vorlage gelöscht: ${h.name}`),Ce("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function Na(o,u,h){const d=Te();d&&(d.days=d.days.map(v=>v.isoDate===o?{...v,[u]:h}:v),await xe(`${u==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${$(h)} €`),ne())}async function Wt(o,u){const h=Te();if(!h)return;const d=h.fixedCosts.find(v=>v.id===o);h.fixedCosts=h.fixedCosts.map(v=>v.id===o?{...v,actualCents:u}:v),await xe(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${$(u)} €`),ne()}async function yn(o,u){const h=Te();if(!h)return;const d=h.fixedCosts.find(v=>v.id===o);d&&(h.fixedCosts=h.fixedCosts.map(v=>v.id===o?{...v,plannedCents:u}:v),Pt(h),await xe(`Fixkosten-Budget angepasst: ${d.name} auf ${$(u)} €`),ne())}async function Gt(o,u){const h=Te();if(!h)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:Bt("fixed"),templateId:Bt("fixed-local"),name:d,plannedCents:u,actualCents:0};h.fixedCosts=[v,...h.fixedCosts],Pt(h),await xe(`Fixkosten-Position hinzugefügt: ${d} (${$(u)} €)`),Ce("Fixkosten-Position wurde hinzugefügt."),ne()}async function Zn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const h=Te();if(!h)return;const d=h.fixedCosts.find(v=>v.id===o);d&&(h.fixedCosts=h.fixedCosts.filter(v=>v.id!==o),Pt(h),await xe(`Fixkosten-Position gelöscht: ${d.name}`),Ce("Fixkosten-Position wurde gelöscht."),ne())}async function lr(o){await un("fixedBudgetCents",o,"Fixkosten")}async function Jt(o){await un("foodBudgetCents",o,"Essen")}async function qa(o){await un("goingOutBudgetCents",o,"Ausgehen")}async function ln(o){await un("miscBudgetCents",o,"Sonstiges")}async function Ka(o){await un("variableBudgetCents",o,"Variable Kosten")}async function un(o,u,h){const d=Te(),v=f.selectedYear;if(!d||!v||d[o]===u)return;if(d[o]=u,confirm(`Soll das Budget "${h}" auch für zukünftige Monate übernommen werden?`)){const I=F(v,f.selectedMonth);f.years.forEach(L=>{L.months.forEach(q=>{F(L.year,q.month)<=I||(q[o]=u)})}),f.recurringBudgetDefaults[o]=u,Da(f.recurringBudgetDefaults),await ut(`Budget "${h}" auf ${$(u)} € gesetzt (inkl. zukünftiger Monate)`),Ce(`Budget "${h}" wurde für zukünftige Monate übernommen.`),ne();return}await xe(`Budget "${h}" auf ${$(u)} € gesetzt`),ne()}async function Ae(o){const u=Te();u&&(o===null?u.carryoverOverrideCents=null:u.carryoverOverrideCents=o,await xe(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${$(o)} € gesetzt`),ne())}async function Ht(o,u,h){const d=Te(),v=f.selectedYear;if(!d||!v)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Bt("varpos"),name:_,budgetCents:u,actualCents:0},...d.variablePositions],Ot(d),h){const I=F(v,f.selectedMonth);f.years.forEach(L=>{L.months.forEach(q=>{F(L.year,q.month)<=I||(q.variablePositions=[{id:Bt("varpos"),name:_,budgetCents:u,actualCents:0},...q.variablePositions],Ot(q))})}),await ut(`Variable Position hinzugefügt: ${_} (${$(u)} €) für zukünftige Monate`),Ce("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await xe(`Variable Position hinzugefügt: ${_} (${$(u)} €)`),Ce("Variable Position wurde hinzugefügt."),ne()}async function Kt(o,u){const h=Te();if(!h)return;const d=h.variablePositions.find(v=>v.id===o);h.variablePositions=h.variablePositions.map(v=>v.id===o?{...v,actualCents:u}:v),await xe(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${$(u)} €`),ne()}async function La(o,u){const h=Te();if(!h)return;const d=h.variablePositions.find(v=>v.id===o);h.variablePositions=h.variablePositions.map(v=>v.id===o?{...v,budgetCents:u}:v),Ot(h),await xe(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${$(u)} €`),ne()}async function Cn(o){if(!confirm("Variable Position wirklich löschen?"))return;const h=Te(),d=f.selectedYear;if(!h||!d)return;const v=h.variablePositions.find(q=>q.id===o);if(!v)return;const _=F(d,f.selectedMonth),L=f.years.some(q=>q.months.some(H=>F(q.year,H.month)>_&&H.variablePositions.some(Y=>Y.name===v.name&&Y.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(h.variablePositions=h.variablePositions.filter(q=>q.id!==o),Ot(h),L){f.years.forEach(q=>{q.months.forEach(H=>{F(q.year,H.month)<=_||(H.variablePositions=H.variablePositions.filter(Y=>!(Y.name===v.name&&Y.budgetCents===v.budgetCents)),Ot(H))})}),await ut(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),Ce("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await xe(`Variable Position gelöscht: ${v.name}`),Ce("Variable Position wurde gelöscht."),ne()}async function ea(o){const u=Te(),h=f.selectedYear;if(!u||!h)return;const d=u.variablePositions.find(Y=>Y.id===o);if(!d)return;const v={year:f.selectedMonth===12?h+1:h,month:f.selectedMonth===12?1:f.selectedMonth+1};let _=f.years.find(Y=>Y.year===v.year);if(!_){const Y=Tr(v.year,f.fixedTemplates,f.fixedTemplateVersion);ve(Y),Dn(Y),await Rn(Y),f.years=[...f.years,Y].sort((X,he)=>X.year-he.year),_=Y}const I=_.months.find(Y=>Y.month===v.month);if(!I)return;const L=I.variablePositions.some(Y=>Y.id===d.id||Y.name===d.name&&Y.budgetCents===d.budgetCents);if(u.variablePositions=u.variablePositions.filter(Y=>Y.id!==o),Ot(u),!L){const X=I.variablePositions.some(he=>he.id===d.id)?{...d,id:Bt("varpos")}:d;I.variablePositions=[X,...I.variablePositions],Ot(I)}const q=`${Be(v.month)} ${v.year}`,H=`Variable Position verschoben: ${d.name} → ${q}`;if(v.year===h)await xe(H);else{const Y=Wn();if(!Y)return;await Rn(Y),await Rn(_),f.years=await Vn(),Nt(f.years),wt(H)}Ce(L?`Position entfernt (im Folgemonat schon vorhanden: ${q}).`:`Position in den Folgemonat verschoben: ${q}.`),ne()}async function ta(o,u,h){const d=Te(),v=f.selectedYear;if(!d||!v)return;const _=o.trim();if(!_){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const I=Ar(_,u);if(d.miscCosts=[I,...d.miscCosts],h){const L=F(v,f.selectedMonth);f.years.forEach(q=>{q.months.forEach(H=>{F(q.year,H.month)<=L||(H.miscCosts=[Ar(_,u),...H.miscCosts])})}),await ut(`Sonstige Position hinzugefügt: ${_} (${$(u)} €) für zukünftige Monate`),Ce("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await xe(`Sonstige Position hinzugefügt: ${_} (${$(u)} €)`),Ce("Sonstige Position wurde hinzugefügt."),ne()}async function wa(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const h=Te(),d=f.selectedYear;if(!h||!d)return;const v=h.miscCosts.find(q=>q.id===o);if(!v)return;const _=F(d,f.selectedMonth),L=f.years.some(q=>q.months.some(H=>F(q.year,H.month)>_&&H.miscCosts.some(Y=>Y.description===v.description&&Y.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(h.miscCosts=h.miscCosts.filter(q=>q.id!==o),L){f.years.forEach(q=>{q.months.forEach(H=>{F(q.year,H.month)<=_||(H.miscCosts=H.miscCosts.filter(Y=>!(Y.description===v.description&&Y.amountCents===v.amountCents)))})}),await ut(`Sonstige Position gelöscht: ${v.description} (${$(v.amountCents)} €) inkl. zukünftiger Monate`),Ce("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await xe(`Sonstige Position gelöscht: ${v.description} (${$(v.amountCents)} €)`),Ce("Sonstige Position wurde gelöscht."),ne()}async function Xt(o,u,h,d){const v=Te(),_=f.selectedYear;if(!v||!_)return;const I=o.trim();if(!I){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(u<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const L=Fr(I,u,h);if(v.incomes=[L,...v.incomes],d){const q=F(_,f.selectedMonth);f.years.forEach(H=>{H.months.forEach(Y=>{F(H.year,Y.month)<=q||(Y.incomes=[Fr(I,u,h),...Y.incomes])})}),await ut(`Einkommen hinzugefügt: ${I} (${$(u)} €, ${ga(h)}) für zukünftige Monate`),Ce("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await xe(`Einkommen hinzugefügt: ${I} (${$(u)} €, ${ga(h)})`),Ce("Einkommen wurde hinzugefügt."),ne()}async function ja(o,u){const h=Te();if(!h)return;const d=h.incomes.find(v=>v.id===o);d&&(h.incomes=h.incomes.map(v=>{if(v.id!==o)return v;if(!u){const{incomeSource:_,...I}=v;return I}return{...v,incomeSource:u}}),await xe(`Einkommensart angepasst: ${d.description} → ${ga(u)}`),ne())}async function na(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const h=Te(),d=f.selectedYear;if(!h||!d)return;const v=h.incomes.find(q=>q.id===o);if(!v)return;const _=F(d,f.selectedMonth),L=f.years.some(q=>q.months.some(H=>F(q.year,H.month)>_&&H.incomes.some(Y=>Y.description===v.description&&Y.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(h.incomes=h.incomes.filter(q=>q.id!==o),L){f.years.forEach(q=>{q.months.forEach(H=>{F(q.year,H.month)<=_||(H.incomes=H.incomes.filter(Y=>!(Y.description===v.description&&Y.amountCents===v.amountCents)))})}),await ut(`Einkommen gelöscht: ${v.description} (${$(v.amountCents)} €) inkl. zukünftiger Monate`),Ce("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await xe(`Einkommen gelöscht: ${v.description} (${$(v.amountCents)} €)`),Ce("Einkommen wurde gelöscht."),ne()}async function Ra(){const o=await es(),u=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),h=URL.createObjectURL(u),d=`haushaltsbuch-backup-${new Date().toISOString().slice(0,10)}.json`,v=document.createElement("a");v.href=h,v.download=d,v.click(),URL.revokeObjectURL(h),gn(d),ne(),Ce("Backup wurde exportiert.")}async function oe(o){const u=await o.text(),h=JSON.parse(u);await ts(h);const[d,v,_]=await Promise.all([Vn(),vr(),gr()]);f.years=d,f.annualVariableFixedTemplates=_.templates,f.annualVariableFixedTemplateVersion=_.version,Nt(f.years),Ca(f.years),f.fixedTemplates=v.templates,f.fixedTemplateVersion=v.version,await Ia(f.years),f.selectedYear=Et(d),f.selectedMonth=xt(),gn(o.name),Ce("Backup wurde importiert."),ne()}function ne(){const o=Wn(),u=Te(),h=ma(),d=u?mn(u):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=o?Pn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},_=o?On(o):[],I=u?u.foodBudgetCents??0:0,L=u?u.goingOutBudgetCents??0:0,q=u?u.fixedBudgetCents??u.fixedCosts.reduce((r,p)=>r+p.plannedCents,0):0,H=u?u.variableBudgetCents??u.variablePositions.reduce((r,p)=>r+p.budgetCents,0):0,Y=u?u.miscBudgetCents??0:0,X=o?o.months.reduce((r,p)=>r+(p.foodBudgetCents??0),0):0,he=o?o.months.reduce((r,p)=>r+(p.goingOutBudgetCents??0),0):0,me=o?o.months.reduce((r,p)=>r+(p.fixedBudgetCents??p.fixedCosts.reduce((M,P)=>M+P.plannedCents,0)),0):0,We=o?o.months.reduce((r,p)=>r+(p.variableBudgetCents??p.variablePositions.reduce((M,P)=>M+P.budgetCents,0)),0):0,Ke=o?o.months.reduce((r,p)=>r+(p.miscBudgetCents??0),0):0,z=u?u.incomes.reduce((r,p)=>r+(Un(p.incomeSource)?p.amountCents:0),0):0,ze=u?u.incomes.reduce((r,p)=>r+(p.incomeSource==="salary"?p.amountCents:0),0):0,Le=An(),Ge=o?Le.get(F(o.year,f.selectedMonth)):void 0,_e=o?o.months.slice().sort((r,p)=>r.month-p.month)[0]:void 0,je=Ge?.carriedFromPreviousCents??0,R=Ge?.hasPreviousMonth??!1,ke=Ge?.effectiveIncomeCents??z,ct=u?zt(u):0,tt=Ge?.netCents??z-ct,ee=ke-d.totalCents,ye=ze-d.totalCents,Je=d.totalCents>0?`${(ze/d.totalCents*100).toFixed(1)} %`:"-",de=je<0?"danger":je>0?"budget-under":"",Me=tt<0?"danger":tt>0?"budget-under":"",$e=ee<0?"danger":ee>0?"budget-under":"",nt=o?o.months.reduce((r,p)=>r+p.incomes.reduce((M,P)=>M+(Un(P.incomeSource)?P.amountCents:0),0),0):0,be=o?o.months.reduce((r,p)=>r+p.incomes.reduce((M,P)=>M+(P.incomeSource==="salary"?P.amountCents:0),0),0):0,Ue=o&&_e?Le.get(F(o.year,_e.month))?.carriedFromPreviousCents??0:0,Lt=nt+Ue,kt=Lt-v.totalCents,He=be-v.totalCents,pt=v.totalCents>0?`${(be/v.totalCents*100).toFixed(1)} %`:"-",$t=Ue<0?"danger":Ue>0?"budget-under":"",Se=kt<0?"danger":kt>0?"budget-under":"",ge=I+L+q+H+Y,De=I+L,Re=d.foodCents+d.goingOutCents,Ve=De-Re,vt=lt(Re,De),Tt=X+he+me+We+Ke,jt=ke-ge,Rt=Lt-Tt,O=ge-d.totalCents,K=Tt-v.totalCents,ie=r=>r<0?"danger":r>0?"budget-under":"",In=(r,p)=>p<=0?"muted":r>=p?"budget-under":"danger",Vt=In(ze,d.totalCents),xn=In(be,v.totalCents),Qt=O+jt+ee+ye,wn=K+Rt+kt+He,Fe=(r,p)=>{if(p<=0)return"0%";const P=Math.max(0,r)/p*100;return`${Math.min(100,Math.max(0,P)).toFixed(1)}%`},kn=(r,p)=>{if(p<=0)return r>0?100:0;const M=Math.max(0,r)/p*100;return Math.max(0,M)},aa=[{label:"Essen",budgetCents:I,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:L,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:q,actualCents:d.fixedCents},{label:"Variable",budgetCents:H,actualCents:d.variableCents},{label:"Sonstige",budgetCents:Y,actualCents:d.miscCents}];Math.max(1,...aa.flatMap(r=>[r.budgetCents,r.actualCents]));const ra=(r,p)=>p<=0?"bar-positive":r<=0||p>r?"bar-negative":"bar-positive",sa=[{label:"Einkommen gesamt",valueCents:ke,className:"bar-income"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ee,className:ee<0?"bar-negative":"bar-positive"}],ka=Math.max(1,...sa.map(r=>Math.abs(r.valueCents))),Xe=o?o.months.slice().sort((r,p)=>r.month-p.month).map(r=>{const p=r.foodBudgetCents??0,M=r.goingOutBudgetCents??0,P=r.fixedBudgetCents??r.fixedCosts.reduce((U,G)=>U+G.plannedCents,0),N=r.variableBudgetCents??r.variablePositions.reduce((U,G)=>U+G.budgetCents,0),Q=r.miscBudgetCents??0,te=p+M+P+N+Q;return{month:r.month,foodBudgetCents:p,goingOutBudgetCents:M,fixedBudgetCents:P,variableBudgetCents:N,miscBudgetCents:Q,totalBudgetCents:te}}):[],dt=new Map(Xe.map(r=>[r.month,r])),mt=r=>{if(r.length===0)return null;const p=Math.min(...r),M=Math.max(...r),P=Math.round(r.reduce((N,Q)=>N+Q,0)/r.length);return{min:p,avg:P,max:M}},$a=_.map(r=>r.summary.foodCents),Nn=_.map(r=>r.summary.goingOutCents),Sa=_.map(r=>r.summary.fixedCents),Ba=_.map(r=>r.summary.variableCents),qn=_.map(r=>r.summary.miscCents),ia=_.map(r=>r.summary.totalCents),Zt=_.map(r=>o?Le.get(F(o.year,r.month))?.plannedBudgetCents??0:0),Ea=_.map(r=>o?Le.get(F(o.year,r.month))?.netCents??0:0),Kn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((p,M)=>p+(M.incomeSource==="salary"?M.amountCents:0),0)])),Ln=_.map(r=>Kn.get(r.month)??0),St={food:mt($a),goingOut:mt(Nn),fixed:mt(Sa),variable:mt(Ba),misc:mt(qn),total:mt(ia),salary:mt(Ln),budget:mt(Zt),net:mt(Ea)},Ya=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],en={food:$a.reduce((r,p)=>r+p,0),goingOut:Nn.reduce((r,p)=>r+p,0),fixed:Sa.reduce((r,p)=>r+p,0),variable:Ba.reduce((r,p)=>r+p,0),misc:qn.reduce((r,p)=>r+p,0),total:ia.reduce((r,p)=>r+p,0),salary:Ln.reduce((r,p)=>r+p,0),budget:Zt.reduce((r,p)=>r+p,0)},_a=Ya.map(({key:r,label:p})=>{const M=St.food?.[r]??null,P=St.goingOut?.[r]??null,N=St.fixed?.[r]??null,Q=St.variable?.[r]??null,te=St.misc?.[r]??null,U=St.total?.[r]??null,G=St.salary?.[r]??null,fe=St.budget?.[r]??null,qe=St.net?.[r]??null,le=bt=>bt===null?"-":$(bt);return`<tr>
                  <td><strong>${p}</strong></td>
                  <td>${le(M)}</td>
                  <td>${le(P)}</td>
                  <td>${le(N)}</td>
                  <td>${le(Q)}</td>
                  <td>${le(te)}</td>
                  <td>${le(U)}</td>
                  <td>${le(G)}</td>
                  <td>${le(fe)}</td>
                  <td>${le(qe)}</td>
                </tr>`}).join(""),oa=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${$(en.food)}</td>
                  <td>${$(en.goingOut)}</td>
                  <td>${$(en.fixed)}</td>
                  <td>${$(en.variable)}</td>
                  <td>${$(en.misc)}</td>
                  <td>${$(en.total)}</td>
                  <td>${$(en.salary)}</td>
                  <td>${$(en.budget)}</td>
                </tr>`,za=Math.max(1,..._.flatMap(r=>{const p=dt.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,p??0]})),la=Math.max(1,..._.flatMap(r=>{const p=dt.get(r.month),M=r.summary.foodCents+r.summary.goingOutCents,P=(p?.foodBudgetCents??0)+(p?.goingOutBudgetCents??0);return[M,P]})),ua=Math.max(1,..._.flatMap(r=>{const p=dt.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,p]})),Ua=Math.max(1,..._.flatMap(r=>{const p=dt.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,p]})),Ma=Math.max(1,..._.flatMap(r=>{const p=dt.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,p]})),ur=lt(d.fixedCents,q),Wa=lt(d.foodCents,I),Ga=lt(d.goingOutCents,L),cr=lt(d.variableCents,H),Ja=lt(d.miscCents,Y),cn=f.editingFixedTemplateId?f.fixedTemplates.find(r=>r.id===f.editingFixedTemplateId):null,Ha=f.hasUnexportedChanges,Pa=f.unexportedChangeLog.slice().reverse(),dr=f.lastBackupFileName?_t(f.lastBackupFileName):"-",fr={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},gt=f.years.slice().sort((r,p)=>r.year-p.year),dn=gt.some(r=>r.year===f.dashboardYear)?f.dashboardYear:f.selectedYear??gt[gt.length-1]?.year??null,Pe=typeof dn=="number"?gt.find(r=>r.year===dn):void 0,Ie=Pe?Pe.months.slice().sort((r,p)=>r.month-p.month):[],At=Pe?Pn(Pe):fr,Ft=Pe?et(Pe):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},hr=Pe?qt(Pe):0,Oa=Pe?Tn(Pe,Le):0,ca=hr+Oa,tn=Pe?Pe.months.reduce((r,p)=>r+zt(p),0):0,da=ca-tn,fn=ca-At.totalCents,nn=[{label:"Essen",budgetCents:Ft.foodCents,actualCents:At.foodCents},{label:"Ausgehen",budgetCents:Ft.goingOutCents,actualCents:At.goingOutCents},{label:"Fixkosten",budgetCents:Ft.fixedCents,actualCents:At.fixedCents},{label:"Variable",budgetCents:Ft.variableCents,actualCents:At.variableCents},{label:"Sonstige",budgetCents:Ft.miscCents,actualCents:At.miscCents}],at=Ie.map(r=>{const p=Pe?Le.get(F(Pe.year,r.month)):void 0,M=mn(r),P=r.incomes.reduce((bt,$n)=>bt+$n.amountCents,0),N=p?.effectiveIncomeCents??P,Q=p?.plannedBudgetCents??zt(r),te=M.foodCents,U=M.goingOutCents,G=te+U,fe=M.totalCents,qe=N-Q,le=N-fe;return{month:r.month,foodCents:te,goingOutCents:U,foodAndGoingOutCents:G,effectiveIncomeCents:N,plannedBudgetCents:Q,actualCostCents:fe,plannedNetCents:qe,actualNetCents:le}}),e=Math.max(1,...at.map(r=>r.actualCostCents)),t=Math.max(1,...at.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),n=Math.max(1,...at.map(r=>r.foodAndGoingOutCents)),a=Math.max(1,...at.map(r=>r.foodCents)),s=Math.max(1,...at.map(r=>r.goingOutCents)),i=gt.reduce((r,p)=>{const M=et(p);return{foodCents:r.foodCents+M.foodCents,goingOutCents:r.goingOutCents+M.goingOutCents,fixedCents:r.fixedCents+M.fixedCents,variableCents:r.variableCents+M.variableCents,miscCents:r.miscCents+M.miscCents,totalCents:r.totalCents+M.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),l=gt.reduce((r,p)=>{const M=Pn(p);return{foodCents:r.foodCents+M.foodCents,goingOutCents:r.goingOutCents+M.goingOutCents,fixedCents:r.fixedCents+M.fixedCents,variableCents:r.variableCents+M.variableCents,miscCents:r.miscCents+M.miscCents,totalCents:r.totalCents+M.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),c=gt.reduce((r,p)=>r+qt(p),0),C=gt[0]?Tn(gt[0],Le):0,S=c+C,y=S-i.totalCents,m=S-l.totalCents,x=[{label:"Essen",budgetCents:i.foodCents,actualCents:l.foodCents},{label:"Ausgehen",budgetCents:i.goingOutCents,actualCents:l.goingOutCents},{label:"Fixkosten",budgetCents:i.fixedCents,actualCents:l.fixedCents},{label:"Variable",budgetCents:i.variableCents,actualCents:l.variableCents},{label:"Sonstige",budgetCents:i.miscCents,actualCents:l.miscCents}],w=Math.max(1,...x.flatMap(r=>[r.budgetCents,r.actualCents])),g=gt.map(r=>{const p=Pn(r),M=et(r),P=qt(r),N=r.months.reduce((U,G)=>U+G.incomes.reduce((fe,qe)=>fe+(qe.incomeSource==="salary"?qe.amountCents:0),0),0),Q=Tn(r,Le),te=P+Q;return{year:r.year,salaryIncomeCents:N,budgetTotalCents:M.totalCents,actualTotalCents:p.totalCents,effectiveIncomeCents:te,plannedNetCents:te-M.totalCents,actualNetCents:te-p.totalCents}}),b=Math.max(1,...g.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),B=Math.max(1,...g.map(r=>r.actualTotalCents)),E=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${f.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${f.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${f.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${gt.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':f.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${gt.map(r=>`<option value="${r.year}" ${r.year===dn?"selected":""}>${r.year}</option>`).join("")}
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${$(ca)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${$(tn)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${$(At.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ie(da)}">${$(da)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ie(fn)}">${$(fn)}</div><div class="eval-value"></div></div>
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
                    ${nn.map(r=>{const p=kn(r.actualCents,r.budgetCents),M=Math.min(100,p),P=`${p.toFixed(0)}%`,N=r.budgetCents-r.actualCents,Q=N<0?"danger":N>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${ra(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${M.toFixed(1)}%" title="${r.label}: ${$(r.actualCents)} von ${$(r.budgetCents)}">
                              <span class="circle-chart-value">${P}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${$(r.budgetCents)} / I ${$(r.actualCents)}</div>
                            <div class="circle-chart-meta ${Q}">${N>=0?"+":""}${$(N)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(at.length,1)}, minmax(0, 1fr));">
                    ${at.map(r=>{const p=Fe(r.actualCostCents,e);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${$(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${p}"></div>
                            <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                    ${at.map(r=>{const p=Fe(Math.abs(r.plannedNetCents),t),M=Fe(Math.abs(r.actualNetCents),t),P=r.plannedNetCents<0?"bar-negative":"bar-positive",N=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Be(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${$(r.plannedNetCents)} | Ist-Saldo: ${$(r.actualNetCents)}">
                              <div class="bar ${P}" style="width:${p}; opacity: 0.35;"></div>
                              <div class="bar ${N}" style="width:${M}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${ie(r.plannedNetCents)}">B ${$(r.plannedNetCents)}</span>
                              <span class="${ie(r.actualNetCents)}">I ${$(r.actualNetCents)}</span>
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
                  ${at.map(r=>`<tr>
                        <td>${Be(r.month)}</td>
                        <td>${$(r.effectiveIncomeCents)}</td>
                        <td>${$(r.plannedBudgetCents)}</td>
                        <td>${$(r.actualCostCents)}</td>
                        <td class="${ie(r.plannedNetCents)}">${$(r.plannedNetCents)}</td>
                        <td class="${ie(r.actualNetCents)}">${$(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:f.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${gt.map(r=>`<option value="${r.year}" ${r.year===dn?"selected":""}>${r.year}</option>`).join("")}
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
                    ${at.map(r=>{const p=Fe(r.foodAndGoingOutCents,n);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${$(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${p}"></div>
                            <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(at.length,1)}, minmax(0, 1fr));">
                    ${at.map(r=>{const p=Fe(r.foodCents,a);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${$(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${p}"></div>
                            <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(at.length,1)}, minmax(0, 1fr));">
                    ${at.map(r=>{const p=Fe(r.goingOutCents,s);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${$(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${p}"></div>
                            <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${$(S)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${$(i.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${$(l.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${ie(y)}">${$(y)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${ie(m)}">${$(m)}</div><div class="eval-value"></div></div>
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
                    ${x.map(r=>{const p=Fe(r.budgetCents,w),M=Fe(r.actualCents,w),P=ra(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${$(r.budgetCents)} | Ist: ${$(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${p}"></div>
                              <div class="bar-marker" style="left:${p}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${P}" style="width:${M}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${$(r.budgetCents)}</span>
                              <span class="muted">I ${$(r.actualCents)}</span>
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
                    ${g.map(r=>{const p=Fe(r.actualTotalCents,B);return`
                          <div class="spark-bar" title="${r.year}: ${$(r.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${p}"></div>
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
                    ${g.map(r=>{const p=Fe(Math.abs(r.plannedNetCents),b),M=Fe(Math.abs(r.actualNetCents),b),P=r.plannedNetCents<0?"bar-negative":"bar-positive",N=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${$(r.plannedNetCents)} | Ist-Saldo: ${$(r.actualNetCents)}">
                              <div class="bar ${P}" style="width:${p}; opacity: 0.35;"></div>
                              <div class="bar ${N}" style="width:${M}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${ie(r.plannedNetCents)}">B ${$(r.plannedNetCents)}</span>
                              <span class="${ie(r.actualNetCents)}">I ${$(r.actualNetCents)}</span>
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
                        <td>${$(r.salaryIncomeCents)}</td>
                        <td>${$(r.effectiveIncomeCents)}</td>
                        <td>${$(r.budgetTotalCents)}</td>
                        <td>${$(r.actualTotalCents)}</td>
                        <td class="${ie(r.plannedNetCents)}">${$(r.plannedNetCents)}</td>
                        <td class="${ie(r.actualNetCents)}">${$(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,k=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,A=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${cn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${cn?ft(cn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${cn?"Änderung speichern":"Vorlage speichern"}</button>
          ${cn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${f.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${$(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,D=`
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
        <table>
          <thead>
            <tr><th>Name</th><th>Datum</th><th>Monat (jährlich)</th><th>Betrag (€)</th><th></th></tr>
          </thead>
          <tbody>
            ${f.annualVariableFixedTemplates.map(r=>{const p=Fn(r.dueDateIso),M=p?Be(p.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${M}</td>
                    <td>${$(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,j=f.topModal==="years"?"Jahr hinzufügen":f.topModal==="fixed"?"Fixe Kosten (zentral)":f.topModal==="variable-fixed"?"Variable Fixkosten":f.topModal==="dashboard"?"Dashboard":"",V=f.topModal==="years"?k:f.topModal==="fixed"?A:f.topModal==="variable-fixed"?D:f.topModal==="dashboard"?E:"";T.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Ha?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${f.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Lr.map(r=>`<option value="${r}" ${f.theme===r?"selected":""}>${as(r)}</option>`).join("")}
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

        ${f.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${j}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${j}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${V}
                </div>
              </div>
            </div>
          `:""}

        ${f.showUnexportedChangeLogModal?`
            <div class="panel-modal-backdrop" id="unexported-change-log-backdrop" role="dialog" aria-modal="true" aria-label="Ungesicherte Änderungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Ungesicherte Änderungen</h2>
                  <button class="btn btn-quiet" id="unexported-change-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Pa.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${Pa.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${_t(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Be(f.selectedMonth)} ${o.year}`:"-"}</h2>
            <div class="inline">
              <label>
                Jahr wählen
                <select id="year-select">
                  ${f.years.map(r=>`<option value="${r.year}" ${r.year===f.selectedYear?"selected":""}>${r.year}</option>`).join("")}
                </select>
              </label>
              <label>
                Monat wählen
                <select id="month-select" ${f.selectedYear?"":"disabled"}>
                  ${Array.from({length:12},(r,p)=>p+1).map(r=>`<option value="${r}" ${r===f.selectedMonth?"selected":""}>${Be(r)}</option>`).join("")}
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
                  ${aa.map(r=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${r.label}"
                            data-budget-cents="${r.budgetCents}"
                            data-actual-cents="${r.actualCents}"
                            role="img"
                            aria-label="${r.label}: Budget ${$(r.budgetCents)} €, Ist ${$(r.actualCents)} €"
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
                  ${sa.map(r=>{const p=Fe(Math.abs(r.valueCents),ka),M=r.valueCents>=0?"+":"",P=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${$(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${p}"></div>
                          </div>
                          <div class="bar-meta"><span class="${P}">${M}${$(r.valueCents)}</span></div>
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
                      ${_.map(r=>{const p=dt.get(r.month)?.totalBudgetCents??0,M=Fe(p,za),P=Fe(r.summary.totalCents,za);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${$(r.summary.totalCents)} € | Budget ${$(p)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${P}"><span class="spark-bar-fill-value">${$(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const p=dt.get(r.month),M=(p?.foodBudgetCents??0)+(p?.goingOutBudgetCents??0),P=r.summary.foodCents+r.summary.goingOutCents,N=Fe(M,la),Q=Fe(P,la);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${$(P)} € | Budget ${$(M)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${N}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${$(P)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const p=dt.get(r.month)?.fixedBudgetCents??0,M=Fe(p,ua),P=Fe(r.summary.fixedCents,ua);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${$(r.summary.fixedCents)} € | Budget ${$(p)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${P}"><span class="spark-bar-fill-value">${$(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const p=dt.get(r.month)?.variableBudgetCents??0,M=Fe(p,Ua),P=Fe(r.summary.variableCents,Ua);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${$(r.summary.variableCents)} € | Budget ${$(p)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${P}"><span class="spark-bar-fill-value">${$(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                      ${_.map(r=>{const p=dt.get(r.month)?.miscBudgetCents??0,M=Fe(p,Ma),P=Fe(r.summary.miscCents,Ma);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${$(r.summary.miscCents)} € | Budget ${$(p)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${M}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${P}"><span class="spark-bar-fill-value">${$(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Be(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${$(z)}</div>
                    <div class="eval-value">${$(nt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${$(ze)}</div>
                    <div class="eval-value">${$(be)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${de}">${R?$(je):"-"}</div>
                    <div class="eval-value ${$t}">${o?$(Ue):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${$(ke)}</div>
                    <div class="eval-value">${$(Lt)}</div>
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
                    <div class="eval-value">${yt(I,d.foodCents)}</div>
                    <div class="eval-value">${$(X)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${yt(L,d.goingOutCents)}</div>
                    <div class="eval-value">${$(he)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${yt(q,d.fixedCents)}</div>
                    <div class="eval-value">${$(me)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${yt(H,d.variableCents)}</div>
                    <div class="eval-value">${$(We)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${yt(Y,d.miscCents)}</div>
                    <div class="eval-value">${$(Ke)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${yt(ge,d.totalCents)}</div>
                    <div class="eval-value">${$(Tt)}</div>
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
                    <div class="eval-value ${Wa}">${$(d.foodCents)}</div>
                    <div class="eval-value">${$(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Ga}">${$(d.goingOutCents)}</div>
                    <div class="eval-value">${$(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${ur}">${$(d.fixedCents)}</div>
                    <div class="eval-value">${$(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${cr}">${$(d.variableCents)}</div>
                    <div class="eval-value">${$(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${Ja}">${$(d.miscCents)}</div>
                    <div class="eval-value">${$(v.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${$(d.totalCents)}</div>
                    <div class="eval-value">${$(v.totalCents)}</div>
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
                    <div class="eval-value ${ie(O)}">${$(O)}</div>
                    <div class="eval-value ${ie(K)}">${$(K)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${ie(jt)}">${$(jt)}</div>
                    <div class="eval-value ${ie(Rt)}">${$(Rt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${$e}">${$(ee)}</div>
                    <div class="eval-value ${Se}">${$(kt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${ie(ye)}">${$(ye)}</div>
                    <div class="eval-value ${ie(He)}">${$(He)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${Vt}">${Je}</div>
                    <div class="eval-value ${xn}">${pt}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Summe (ohne %)</div>
                    <div class="eval-value ${ie(Qt)}">${$(Qt)}</div>
                    <div class="eval-value ${ie(wn)}">${$(wn)}</div>
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
                ${_.map((r,p,M)=>{const P=o?Le.get(F(o.year,r.month)):void 0,N=P?.plannedBudgetCents??0,Q=P?.netCents??0,te=Kn.get(r.month)??0,U=Q<0?"danger":Q>0?"budget-under":"",G=M[p-1],fe=G?.summary.foodCents??null,qe=G?.summary.goingOutCents??null,le=G?.summary.fixedCents??null,bt=G?.summary.variableCents??null,$n=G?.summary.miscCents??null,Cr=G?.summary.totalCents??null,xr=G!==void 0?Kn.get(G.month)??0:null,wr=o&&G?Le.get(F(o.year,G.month))?.plannedBudgetCents??0:null,kr=fe===null?null:r.summary.foodCents-fe,$r=qe===null?null:r.summary.goingOutCents-qe,Sr=le===null?null:r.summary.fixedCents-le,Br=bt===null?null:r.summary.variableCents-bt,Er=$n===null?null:r.summary.miscCents-$n,_r=Cr===null?null:r.summary.totalCents-Cr,Mr=xr===null?null:te-xr,Pr=wr===null?null:N-wr,jn=Yt=>Yt===null?"muted":Yt>0?"danger":Yt<0?"budget-under":"muted",Rr=Yt=>Yt===null?"muted":Yt>0?"danger":Yt<0?"budget-under":"muted",Sn=Yt=>Yt===null?"(Δ -)":`(Δ ${Yt>0?"+":""}${$(Yt)})`,Or=o&&G?Le.get(F(o.year,G.month))?.netCents??0:null,fa=Or===null?null:Q-Or,Vr=fa===null?"(Δ -)":`(Δ ${fa>0?"+":""}${$(fa)})`,Yr=fa===null?"muted":fa<0?"danger":fa>0?"budget-under":"muted";return`<tr>
                  <td>${Be(r.month)}</td>
                  <td>${$(r.summary.foodCents)} <span class="${jn(kr)}">${Sn(kr)}</span></td>
                  <td>${$(r.summary.goingOutCents)} <span class="${jn($r)}">${Sn($r)}</span></td>
                  <td>${$(r.summary.fixedCents)} <span class="${jn(Sr)}">${Sn(Sr)}</span></td>
                  <td>${$(r.summary.variableCents)} <span class="${jn(Br)}">${Sn(Br)}</span></td>
                  <td>${$(r.summary.miscCents)} <span class="${jn(Er)}">${Sn(Er)}</span></td>
                  <td>${$(r.summary.totalCents)} <span class="${jn(_r)}">${Sn(_r)}</span></td>
                  <td>${$(te)} <span class="${jn(Mr)}">${Sn(Mr)}</span></td>
                  <td>${$(N)} <span class="${Rr(Pr)}">${Sn(Pr)}</span></td>
                  <td class="${U}">${$(Q)} <span class="${Yr}">${Vr}</span></td>
                </tr>`}).join("")}
                ${_a}
                ${oa}
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
                    <td class="${de}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${ft(je)}" />
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
                    <td>${$(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${r.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${$(z)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${$(ze)} €</strong>
                </div>
                <div class="column-overview-row ${de}">
                  <span>Übernahme Vormonat</span>
                  <strong>${u?`${$(je)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${$(ke)} €</strong>
                </div>
                <div class="column-overview-row ${Me}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${$(tt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Ut(I,d.foodCents)}
                ${Ut(L,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${$(De)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${$(Re)} €</strong>
                  </div>
                  <div class="column-overview-row ${vt}">
                    <span>Diff</span>
                    <strong>${$(Ve)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${ft(I)}" ${u?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${ft(L)}" ${u?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${u?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${u?u.days.map(r=>{const p=r.foodCents>0,M=r.goingOutCents>0,P=`${r.isoDate===h?"today-row":""} ${p||M?"day-has-entry":""}`.trim(),N=`amount-input ${p?"day-input-has-value":""}`.trim(),Q=`amount-input ${M?"day-input-has-value":""}`.trim();return`<tr class="${P}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${N}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${ft(r.foodCents)}" /></td>
                      <td><input class="${Q}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${ft(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Ut(q,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${ft(q)}" ${u?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${ft(r.plannedCents)}" /></td>
                    <td class="${lt(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${ft(r.actualCents)}" /></td>
                    <td class="${lt(r.actualCents,r.plannedCents)}">${$(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Ut(H,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${ft(H)}" ${u?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${ft(r.budgetCents)}" /></td>
                    <td class="${lt(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${ft(r.actualCents)}" /></td>
                    <td class="${lt(r.actualCents,r.budgetCents)}">${$(r.actualCents-r.budgetCents)}</td>
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
              ${Ut(Y,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${ft(Y)}" ${u?"":"disabled"} />
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
                    <td>${$(r.amountCents)}</td>
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
          <p class="muted">Letztes verwendetes Backup: ${dr}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(f.topModal||f.showUnexportedChangeLogModal)),Va(),it(),va()}function Va(){const o=T.querySelector("#theme-select"),u=T.querySelector("#open-years-modal"),h=T.querySelector("#open-fixed-modal"),d=T.querySelector("#open-variable-fixed-modal"),v=T.querySelector("#open-dashboard-modal"),_=T.querySelector("#panel-modal-close"),I=T.querySelector("#panel-modal-backdrop"),L=T.querySelector("#open-unexported-change-log"),q=T.querySelector("#unexported-change-log-close"),H=T.querySelector("#unexported-change-log-backdrop"),Y=T.querySelector("#new-year"),X=T.querySelector("#create-year"),he=T.querySelector("#year-select"),me=T.querySelector("#month-select");o?.addEventListener("change",()=>{const O=o.value;Nr(O)&&sn(O)}),u?.addEventListener("click",()=>{Ct("years")}),h?.addEventListener("click",()=>{Ct("fixed")}),d?.addEventListener("click",()=>{Ct("variable-fixed")}),v?.addEventListener("click",()=>{Ct("dashboard")}),L?.addEventListener("click",()=>{er()}),q?.addEventListener("click",()=>{hn()}),H?.addEventListener("click",O=>{O.target===H&&hn()}),T.querySelectorAll("[data-dashboard-tab]").forEach(O=>{O.addEventListener("click",()=>{const K=O.dataset.dashboardTab;K!=="year"&&K!=="food"&&K!=="all"||(f.dashboardTab=K,ne())})});const We=T.querySelector("#dashboard-year-select");We?.addEventListener("change",()=>{const O=Number.parseInt(We.value,10);Number.isInteger(O)&&(f.dashboardYear=O,ne())}),_?.addEventListener("click",()=>{pa()}),I?.addEventListener("click",O=>{O.target===I&&pa()}),f.topModal&&window.setTimeout(()=>{_?.focus()},0),f.showUnexportedChangeLogModal&&window.setTimeout(()=>{q?.focus()},0),X?.addEventListener("click",async()=>{const O=Number.parseInt(Y?.value??"",10);if(!Number.isInteger(O)){alert("Bitte gültiges Jahr eingeben.");return}await ba(O)}),he?.addEventListener("change",()=>{f.selectedYear=Number.parseInt(he.value,10),f.selectedMonth=xt(),ne()}),me?.addEventListener("change",()=>{f.selectedMonth=Number.parseInt(me.value,10),ne()});const Ke=T.querySelector("#fixed-template-name"),z=T.querySelector("#fixed-template-amount"),ze=T.querySelector("#add-fixed-template"),Le=T.querySelector("#cancel-fixed-template-edit"),Ge=T.querySelector("#annual-variable-fixed-name"),_e=T.querySelector("#annual-variable-fixed-date"),je=T.querySelector("#annual-variable-fixed-amount"),R=T.querySelector("#add-annual-variable-fixed-template");ze?.addEventListener("click",async()=>{const O=Ke?.value??"",K=Oe(z?.value??"0");await we(O,K),Ke&&(Ke.value=""),z&&(z.value="")}),Le?.addEventListener("click",()=>{or()}),R?.addEventListener("click",async()=>{const O=Ge?.value??"",K=_e?.value??"",ie=Oe(je?.value??"0");await Xn(O,K,ie),Ge&&(Ge.value=""),_e&&(_e.value=""),je&&(je.value="")}),T.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(O=>{O.addEventListener("click",async()=>{const K=O.dataset.removeAnnualVariableFixedTemplate;K&&await Qn(K)})}),T.querySelectorAll("[data-edit-fixed-template]").forEach(O=>{O.addEventListener("click",()=>{const K=O.dataset.editFixedTemplate;K&&Ye(K)})}),T.querySelectorAll("[data-remove-fixed-template]").forEach(O=>{O.addEventListener("click",async()=>{const K=O.dataset.removeFixedTemplate;K&&await Hn(K)})}),T.querySelectorAll("[data-day-food]").forEach(O=>{O.addEventListener("click",K=>{K.preventDefault(),O.blur(),ot(O)}),O.addEventListener("change",async()=>{const K=O.dataset.dayFood;K&&await Na(K,"foodCents",Oe(O.value))})}),T.querySelectorAll("[data-day-going]").forEach(O=>{O.addEventListener("click",K=>{K.preventDefault(),O.blur(),ot(O)}),O.addEventListener("change",async()=>{const K=O.dataset.dayGoing;K&&await Na(K,"goingOutCents",Oe(O.value))})}),T.querySelectorAll("[data-fixed-actual]").forEach(O=>{O.addEventListener("click",K=>{K.preventDefault(),O.blur(),ot(O)}),O.addEventListener("change",async()=>{const K=O.dataset.fixedActual;K&&await Wt(K,Oe(O.value))})}),T.querySelectorAll("[data-fixed-planned]").forEach(O=>{O.addEventListener("click",K=>{K.preventDefault(),O.blur(),ot(O)}),O.addEventListener("change",async()=>{const K=O.dataset.fixedPlanned;K&&await yn(K,Oe(O.value))})});const ke=T.querySelector("#fixed-budget");ke?.addEventListener("click",O=>{O.preventDefault(),ke.blur(),ot(ke)}),ke?.addEventListener("change",async()=>{await lr(Oe(ke.value))});const ct=T.querySelector("#food-budget");ct?.addEventListener("click",O=>{O.preventDefault(),ct.blur(),ot(ct)}),ct?.addEventListener("change",async()=>{await Jt(Oe(ct.value))});const tt=T.querySelector("#going-out-budget");tt?.addEventListener("click",O=>{O.preventDefault(),tt.blur(),ot(tt)}),tt?.addEventListener("change",async()=>{await qa(Oe(tt.value))}),T.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{nr()});const ye=T.querySelector("#misc-budget");ye?.addEventListener("click",O=>{O.preventDefault(),ye.blur(),ot(ye)}),ye?.addEventListener("change",async()=>{await ln(Oe(ye.value))});const Je=T.querySelector("#variable-budget");Je?.addEventListener("click",O=>{O.preventDefault(),Je.blur(),ot(Je)}),Je?.addEventListener("change",async()=>{await Ka(Oe(Je.value))});const de=T.querySelector("#variable-position-name"),Me=T.querySelector("#variable-position-budget"),$e=T.querySelector("#add-variable-position"),nt=T.querySelector("#add-variable-position-recurring"),be=T.querySelector("#misc-description"),Ue=T.querySelector("#misc-amount"),Lt=T.querySelector("#add-misc"),kt=T.querySelector("#add-misc-recurring"),He=T.querySelector("#income-description"),pt=T.querySelector("#income-source"),$t=T.querySelector("#income-amount"),Se=T.querySelector("#add-income"),ge=T.querySelector("#add-income-recurring"),De=T.querySelector("#fixed-cost-name"),Re=T.querySelector("#fixed-cost-budget"),Ve=T.querySelector("#add-fixed-cost"),vt=T.querySelector("#carryover-override");vt?.addEventListener("click",O=>{O.preventDefault(),vt.blur(),ot(vt)}),vt?.addEventListener("change",async()=>{const O=vt.value;if(!O.trim()){await Ae(null);return}await Ae(Oe(O))}),Ve?.addEventListener("click",async()=>{const O=Oe(Re?.value??"0");await Gt(De?.value??"",O),De&&(De.value=""),Re&&(Re.value="")}),$e?.addEventListener("click",async()=>{const O=Oe(Me?.value??"0");await Ht(de?.value??"",O,!1),de&&(de.value=""),Me&&(Me.value="")}),nt?.addEventListener("click",async()=>{const O=Oe(Me?.value??"0");await Ht(de?.value??"",O,!0),de&&(de.value=""),Me&&(Me.value="")}),Lt?.addEventListener("click",async()=>{const O=Oe(Ue?.value??"0");await ta(be?.value??"",O,!1),be&&(be.value=""),Ue&&(Ue.value="")}),kt?.addEventListener("click",async()=>{const O=Oe(Ue?.value??"0");await ta(be?.value??"",O,!0),be&&(be.value=""),Ue&&(Ue.value="")}),Se?.addEventListener("click",async()=>{const O=Oe($t?.value??"0"),K=pt?.value,ie=K==="balance"||K==="fresh"||K==="salary"?K:void 0;await Xt(He?.value??"",O,ie,!1),He&&(He.value=""),$t&&($t.value=""),pt&&(pt.value="salary")}),ge?.addEventListener("click",async()=>{const O=Oe($t?.value??"0"),K=pt?.value,ie=K==="balance"||K==="fresh"||K==="salary"?K:void 0;await Xt(He?.value??"",O,ie,!0),He&&(He.value=""),$t&&($t.value=""),pt&&(pt.value="salary")}),T.querySelectorAll("[data-income-source]").forEach(O=>{O.addEventListener("change",async()=>{const K=O.dataset.incomeSource;if(!K)return;const ie=O.value;await ja(K,ie==="balance"||ie==="fresh"||ie==="salary"?ie:void 0)})}),T.querySelectorAll("[data-variable-position-budget]").forEach(O=>{O.addEventListener("click",K=>{K.preventDefault(),O.blur(),ot(O)}),O.addEventListener("change",async()=>{const K=O.dataset.variablePositionBudget;K&&await La(K,Oe(O.value))})}),T.querySelectorAll("[data-variable-position-actual]").forEach(O=>{O.addEventListener("click",K=>{K.preventDefault(),O.blur(),ot(O)}),O.addEventListener("change",async()=>{const K=O.dataset.variablePositionActual;K&&await Kt(K,Oe(O.value))})}),T.querySelectorAll("[data-remove-variable-position]").forEach(O=>{O.addEventListener("click",async()=>{const K=O.dataset.removeVariablePosition;K&&await Cn(K)})}),T.querySelectorAll("[data-move-variable-position-next]").forEach(O=>{O.addEventListener("click",async()=>{const K=O.dataset.moveVariablePositionNext;K&&await ea(K)})}),T.querySelectorAll("[data-remove-fixed]").forEach(O=>{O.addEventListener("click",async()=>{const K=O.dataset.removeFixed;K&&await Zn(K)})}),T.querySelectorAll("[data-remove-income]").forEach(O=>{O.addEventListener("click",async()=>{const K=O.dataset.removeIncome;K&&await na(K)})}),T.querySelectorAll("[data-remove-misc]").forEach(O=>{O.addEventListener("click",async()=>{const K=O.dataset.removeMisc;K&&await wa(K)})});const Tt=T.querySelector("#backup-export"),jt=T.querySelector("#backup-import");T.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Tt?.addEventListener("click",async()=>{await Ra()}),jt?.addEventListener("change",async()=>{const O=jt.files?.[0];if(O){try{await oe(O)}catch(K){console.error("Backup-Import fehlgeschlagen",K),Ce("Backup konnte nicht importiert werden.","error")}jt.value=""}})}return{init:sr}}const ss="modulepreload",is=function(T){return"/habu26/"+T},Kr={},os=function(f,Ee,W){let ue=Promise.resolve();if(Ee&&Ee.length>0){let Qe=function(Ne){return Promise.all(Ne.map(se=>Promise.resolve(se).then(ht=>({status:"fulfilled",value:ht}),ht=>({status:"rejected",reason:ht}))))};var pe=Qe;document.getElementsByTagName("link");const re=document.querySelector("meta[property=csp-nonce]"),ce=re?.nonce||re?.getAttribute("nonce");ue=Qe(Ee.map(Ne=>{if(Ne=is(Ne),Ne in Kr)return;Kr[Ne]=!0;const se=Ne.endsWith(".css"),ht=se?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ne}"]${ht}`))return;const st=document.createElement("link");if(st.rel=se?"stylesheet":ss,se||(st.as="script"),st.crossOrigin="",st.href=Ne,ce&&st.setAttribute("nonce",ce),document.head.appendChild(st),se)return new Promise((it,Ct)=>{st.addEventListener("load",it),st.addEventListener("error",()=>Ct(new Error(`Unable to preload CSS for ${Ne}`)))})}))}function ae(re){const ce=new Event("vite:preloadError",{cancelable:!0});if(ce.payload=re,window.dispatchEvent(ce),!ce.defaultPrevented)throw re}return ue.then(re=>{for(const ce of re||[])ce.status==="rejected"&&ae(ce.reason);return f().catch(ae)})};function ls(T={}){const{immediate:f=!1,onNeedRefresh:Ee,onOfflineReady:W,onRegistered:ue,onRegisteredSW:ae,onRegisterError:pe}=T;let re,ce;const Qe=async(se=!0)=>{await ce};async function Ne(){if("serviceWorker"in navigator){if(re=await os(async()=>{const{Workbox:se}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:se}},[]).then(({Workbox:se})=>new se("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(se=>{pe?.(se)}),!re)return;re.addEventListener("activated",se=>{(se.isUpdate||se.isExternal)&&window.location.reload()}),re.addEventListener("installed",se=>{se.isUpdate||W?.()}),re.register({immediate:f}).then(se=>{ae?ae("/habu26/sw.js",se):ue?.(se)}).catch(se=>{pe?.(se)})}}return ce=Ne(),Qe}function us(){ls({immediate:!0})}const jr=document.getElementById("app");if(!jr)throw new Error("App-Container nicht gefunden.");rs(jr).init();us();
