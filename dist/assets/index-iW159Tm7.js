(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ye of document.querySelectorAll('link[rel="modulepreload"]'))G(ye);new MutationObserver(ye=>{for(const ae of ye)if(ae.type==="childList")for(const xe of ae.addedNodes)xe.tagName==="LINK"&&xe.rel==="modulepreload"&&G(xe)}).observe(document,{childList:!0,subtree:!0});function Ae(ye){const ae={};return ye.integrity&&(ae.integrity=ye.integrity),ye.referrerPolicy&&(ae.referrerPolicy=ye.referrerPolicy),ye.crossOrigin==="use-credentials"?ae.credentials="include":ye.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function G(ye){if(ye.ep)return;ye.ep=!0;const ae=Ae(ye);fetch(ye.href,ae)}})();const Gs=[1,2,3,4,5,6,7,8,9,10,11,12];function Rr(){return new Date().toISOString()}function Tt(P){const h=Math.random().toString(36).slice(2,10);return`${P}_${Date.now()}_${h}`}function Hs(P,h){const Ae=new Date(P,h,0).getDate(),G=[];for(let ye=1;ye<=Ae;ye+=1){const ae=new Date(Date.UTC(P,h-1,ye));G.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return G}function Js(P){return P.map(h=>({id:Tt("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function bs(P,h,Ae){const G=h.reduce((ae,xe)=>ae+xe.plannedCents,0),ye=Gs.map(ae=>({month:ae,days:Hs(P,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Js(h),fixedBudgetCents:G,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:P,createdAt:Rr(),templateVersion:Ae,months:ye}}function ys(P,h){return{id:Tt("expense"),description:P,amountCents:h,createdAt:Rr()}}function Cs(P,h,Ae){const G={id:Tt("income"),description:P,amountCents:h,createdAt:Rr()};return Ae?{...G,incomeSource:Ae}:G}var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qs(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var yr={exports:{}},Zs=yr.exports,xs;function ei(){return xs||(xs=1,(function(P,h){((Ae,G)=>{P.exports=G()})(Zs,function(){var Ae=function(e,t){return(Ae=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},G=function(){return(G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ye(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Xs,xe=Object.keys,ie=Array.isArray;function Ce(e,t){return typeof t=="object"&&xe(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var ht=Object.getPrototypeOf,He={}.hasOwnProperty;function le(e,t){return He.call(e,t)}function xt(e,t){typeof t=="function"&&(t=t(ht(e))),(typeof Reflect>"u"?xe:Reflect.ownKeys)(t).forEach(function(n){mt(e,n,t[n])})}var vt=Object.defineProperty;function mt(e,t,n,a){vt(e,t,Ce(n&&le(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function sn(e){return{from:function(t){return e.prototype=Object.create(t.prototype),mt(e.prototype,"constructor",e),{extend:xt.bind(null,e.prototype)}}}}var ea=Object.getOwnPropertyDescriptor,_a=[].slice;function ta(e,t,n){return _a.call(e,t,n)}function na(e,t){return t(e)}function Dn(e){if(!e)throw new Error("Assertion Failed")}function aa(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function Ut(e,t){if(typeof t=="string"&&le(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Ut(e,t[a]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:Ut(c,t.substr(u+1))}function gt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Dn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)gt(e,t[a],n[a])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:gt(c=(c=e[i])&&le(e,i)?c:e[i]={},u,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ma(e){var t,n={};for(t in e)le(e,t)&&(n[t]=e[t]);return n}var kr=[].concat;function Pa(e){return kr.apply([],e)}var qt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Pa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),Xa=new Set(qt.map(function(e){return ae[e]})),Nn=null;function bt(e){return Nn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Nn.get(n);if(a)return a;if(ie(n)){a=[],Nn.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Xa.has(n.constructor))a=n;else{var c,u=ht(n);for(c in a=u===Object.prototype?{}:Object.create(u),Nn.set(n,a),n)le(n,c)&&(a[c]=t(n[c]))}return a})(e),Nn=null,e}var Ln={}.toString;function Ta(e){return Ln.call(e).slice(8,-1)}var Aa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",wr=typeof Aa=="symbol"?function(e){var t;return e!=null&&(t=e[Aa])&&t.apply(e)}:function(){return null};function on(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var tt={};function me(e){var t,n,a,s;if(arguments.length===1){if(ie(e))return e.slice();if(this===tt&&typeof e=="string")return[e];if(s=wr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var vn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},qt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],nt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(qt),Qa={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function mn(e,t){this.name=e,this.message=t}function Za(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function Et(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Za(e,t)}function En(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Za(e,this.failures)}sn(mn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),sn(Et).from(mn),sn(En).from(mn);var ra=nt.reduce(function(e,t){return e[t]=t+"Error",e},{}),$r=mn,Z=nt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Qa[t]||n,this.inner=null)}return sn(a).from($r),e[t]=a,e},{}),er=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,qt.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));qt=nt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function ke(){}function qn(e){return e}function Sr(e,t){return e==null||e===qn?t:function(n){return t(e(n))}}function gn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function tr(e,t){return e===ke?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?gn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?gn(s,this.onerror):s),i!==void 0?i:n}}function Er(e,t){return e===ke?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?gn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?gn(a,this.onerror):a)}}function Br(e,t){return e===ke?t:function(s){var a=e.apply(this,arguments),s=(Ce(s,a),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?gn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?gn(i,this.onerror):i),a===void 0?c===void 0?void 0:c:Ce(a,c)}}function Oa(e,t){return e===ke?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Kn(e,t){return e===ke?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}qt.ModifyError=Et,qt.DexieError=mn,qt.BulkError=En;var yt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ia(e){yt=e}var Wt={},Ke=100,jn=typeof Promise>"u"?[]:(nt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[jn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ht(jn),nt]:[nt,ht(nt),nt]),nt=jn[0],In=jn[1],In=In&&In.then,Kt=nt&&nt.constructor,Bn=!!jn[2],Rn=function(e,t){jt.push([e,t]),_n&&(queueMicrotask(La),_n=!1)},Vn=!0,_n=!0,ln=[],Mn=[],Fa=qn,je={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ke,pgp:!1,env:{},finalize:ke},X=je,jt=[],At=0,sa=[];function Y(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=X;if(typeof e!="function"){if(e!==Wt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Je(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var c=a._lib&&bn();i&&typeof i.then=="function"?n(a,function(u,b){i instanceof Y?i._then(u,b):i.then(u,b)}):(a._state=!0,a._value=i,Bt(a)),c&&cn()}},Je.bind(null,a))}catch(i){Je(a,i)}})(this,e)}var Da={get:function(){var e=X,t=ca;function n(a,s){var i=this,c=!e.global&&(e!==X||t!==ca),u=c&&!dn(),b=new Y(function($,y){he(i,new Na(rr(a,e,c,u),rr(s,e,c,u),$,y,e))});return this._consoleTask&&(b._consoleTask=this._consoleTask),b}return n.prototype=Wt,n},set:function(e){mt(this,"then",e&&e.prototype===Wt?Da:{get:function(){return e},set:Da.set})}};function Na(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function Je(e,t){var n,a;Mn.push(t),e._state===null&&(n=e._lib&&bn(),t=Fa(t),e._state=!1,e._value=t,a=e,ln.some(function(s){return s._value===a._value})||ln.push(a),Bt(e),n)&&cn()}function Bt(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)he(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),At===0&&(++At,Rn(function(){--At==0&&ia()},[]))}function he(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++At,Rn(Pn,[n,e,t])}}function Pn(e,t,n){try{var a,s=t._value;!t._state&&Mn.length&&(Mn=[]),a=yt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||Mn.indexOf(s)!==-1||(i=>{for(var c=ln.length;c;)if(ln[--c]._value===i._value)return ln.splice(c,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--At==0&&ia(),--n.psd.ref||n.psd.finalize()}}function La(){yn(je,function(){bn()&&cn()})}function bn(){var e=Vn;return _n=Vn=!1,e}function cn(){var e,t,n;do for(;0<jt.length;)for(e=jt,jt=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<jt.length);_n=Vn=!0}function ia(){for(var e=ln,t=(ln=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),sa.slice(0)),n=t.length;n;)t[--n]()}function Ot(e){return new Y(Wt,!1,e)}function ge(e,t){var n=X;return function(){var a=bn(),s=X;try{return Gt(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Gt(s,!1),a&&cn()}}}xt(Y.prototype,{then:Da,_then:function(e,t){he(this,new Na(null,null,e,t,X))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:Ot)(a)}):this.then(null,function(a){return(a&&a.name===t?n:Ot)(a)}))},finally:function(e){return this.then(function(t){return Y.resolve(e()).then(function(){return t})},function(t){return Y.resolve(e()).then(function(){return Ot(t)})})},timeout:function(e,t){var n=this;return e<1/0?new Y(function(a,s){var i=setTimeout(function(){return s(new Z.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&mt(Y.prototype,Symbol.toStringTag,"Dexie.Promise"),je.env=ar(),xt(Y,{all:function(){var e=me.apply(null,arguments).map(ua);return new Y(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return Y.resolve(s).then(function(c){e[i]=c,--a||t(e)},n)})})},resolve:function(e){return e instanceof Y?e:e&&typeof e.then=="function"?new Y(function(t,n){e.then(t,n)}):new Y(Wt,!0,e)},reject:Ot,race:function(){var e=me.apply(null,arguments).map(ua);return new Y(function(t,n){e.map(function(a){return Y.resolve(a).then(t,n)})})},PSD:{get:function(){return X},set:function(e){return X=e}},totalEchoes:{get:function(){return ca}},newPSD:un,usePSD:yn,scheduler:{get:function(){return Rn},set:function(e){Rn=e}},rejectionMapper:{get:function(){return Fa},set:function(e){Fa=e}},follow:function(e,t){return new Y(function(n,a){return un(function(s,i){var c=X;c.unhandleds=[],c.onunhandled=i,c.finalize=gn(function(){var u,b=this;u=function(){b.unhandleds.length===0?s():i(b.unhandleds[0])},sa.push(function $(){u(),sa.splice(sa.indexOf($),1)}),++At,Rn(function(){--At==0&&ia()},[])},c.finalize),e()},t,n,a)})}}),Kt&&(Kt.allSettled&&mt(Y,"allSettled",function(){var e=me.apply(null,arguments).map(ua);return new Y(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return Y.resolve(s).then(function(c){return a[i]={status:"fulfilled",value:c}},function(c){return a[i]={status:"rejected",reason:c}}).then(function(){return--n||t(a)})})})}),Kt.any&&typeof AggregateError<"u"&&mt(Y,"any",function(){var e=me.apply(null,arguments).map(ua);return new Y(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,c){return Y.resolve(i).then(function(u){return t(u)},function(u){s[c]=u,--a||n(new AggregateError(s))})})})}),Kt.withResolvers)&&(Y.withResolvers=Kt.withResolvers);var Xe={awaits:0,echoes:0,id:0},nr=0,oa=[],la=0,ca=0,_r=0;function un(e,c,n,a){var s=X,i=Object.create(s),c=(i.parent=s,i.ref=0,i.global=!1,i.id=++_r,je.env,i.env=Bn?{Promise:Y,PromiseProp:{value:Y,configurable:!0,writable:!0},all:Y.all,race:Y.race,allSettled:Y.allSettled,any:Y.any,resolve:Y.resolve,reject:Y.reject}:{},c&&Ce(i,c),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},yn(i,e,n,a));return i.ref===0&&i.finalize(),c}function Tn(){return Xe.id||(Xe.id=++nr),++Xe.awaits,Xe.echoes+=Ke,Xe.id}function dn(){return!!Xe.awaits&&(--Xe.awaits==0&&(Xe.id=0),Xe.echoes=Xe.awaits*Ke,!0)}function ua(e){return Xe.echoes&&e&&e.constructor===Kt?(Tn(),e.then(function(t){return dn(),t},function(t){return dn(),Re(t)})):e}function Mr(){var e=oa[oa.length-1];oa.pop(),Gt(e,!1)}function Gt(e,t){var n,a,s=X;(t?!Xe.echoes||la++&&e===X:!la||--la&&e===X)||queueMicrotask(t?(function(i){++ca,Xe.echoes&&--Xe.echoes!=0||(Xe.echoes=Xe.awaits=Xe.id=0),oa.push(X),Gt(i,!0)}).bind(null,e):Mr),e!==X&&(X=e,s===je&&(je.env=ar()),Bn)&&(n=je.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(ae,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function ar(){var e=ae.Promise;return Bn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function yn(e,t,n,a,s){var i=X;try{return Gt(e,!0),t(n,a,s)}finally{Gt(i,!1)}}function rr(e,t,n,a){return typeof e!="function"?e:function(){var s=X;n&&Tn(),Gt(t,!0);try{return e.apply(this,arguments)}finally{Gt(s,!1),a&&queueMicrotask(dn)}}}function qa(e){Promise===Kt&&Xe.echoes===0?la===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+In).indexOf("[native code]")===-1&&(Tn=dn=ke);var Re=Y.reject,Cn="￿",Ht="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",sr="String expected.",An=[],fn="__dbnames",da="readonly",fa="readwrite";function xn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ir={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function ha(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=bt(t))[e],t}}function or(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function fe(e,t){try{var n=lr(e),a=lr(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=Ka(e),i=Ka(t),c=s.length,u=i.length,b=c<u?c:u,$=0;$<b;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var y=e,v=t,x=y.length,k=v.length,g=x<k?x:k,m=0;m<g;++m){var B=fe(y[m],v[m]);if(B!==0)return B}return x===k?0:x<k?-1:1}}catch{}return NaN}function lr(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ta(e))==="ArrayBuffer")?"binary":t}function Ka(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function pa(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}ja.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return ye(ye([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(ie(a))return ie(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var Yn=ja;function ja(e){this["@@propmod"]=e}function cr(e,t){for(var n=xe(t),a=n.length,s=!1,i=0;i<a;++i){var c=n[i],u=t[c],b=Ut(e,c);u instanceof Yn?(gt(e,c,u.execute(b)),s=!0):b!==u&&(gt(e,c,u),s=!0)}return s}Be.prototype._trans=function(e,t,n){var a=this._tx||X.trans,s=this.name,i=yt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c($,y,v){if(v.schema[s])return t(v.idbtrans,v);throw new Z.NotFound("Table "+s+" not part of transaction")}var u=bn();try{var b=a&&a.db._novip===this.db._novip?a===X.trans?a._promise(e,c,n):un(function(){return a._promise(e,c,n)},{trans:a,transless:X.transless||X}):(function $(y,v,x,k){if(y.idbdb&&(y._state.openComplete||X.letThrough||y._vip)){var g=y._createTransaction(v,x,y._dbSchema);try{g.create(),y._state.PR1398_maxLoop=3}catch(m){return m.name===ra.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return $(y,v,x,k)})):Re(m)}return g._promise(v,function(m,B){return un(function(){return X.trans=g,k(m,B,g)})}).then(function(m){if(v==="readwrite")try{g.idbtrans.commit()}catch{}return v==="readonly"?m:g._completion.then(function(){return m})})}if(y._state.openComplete)return Re(new Z.DatabaseClosed(y._state.dbOpenError));if(!y._state.isBeingOpened){if(!y._state.autoOpen)return Re(new Z.DatabaseClosed);y.open().catch(ke)}return y._state.dbReadyPromise.then(function(){return $(y,v,x,k)})})(this.db,e,[this.name],c);return i&&(b._consoleTask=i,b=b.catch(function($){return console.trace($),Re($)})),b}finally{u&&cn()}},Be.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Re(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},Be.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=xe(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function($){return 0<=u.keyPath.indexOf($)})){for(var b=0;b<t.length;++b)if(t.indexOf(u.keyPath[b])===-1)return!1;return!0}return!1}).sort(function(u,b){return u.keyPath.length-b.keyPath.length})[0];if(n&&this.db._maxKey!==Cn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&yt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(u,b){return fe(u,b)===0}var c=t.reduce(function(y,b){var $=y[0],y=y[1],v=a[b],x=e[b];return[$||v,$||!v?xn(y,v&&v.multi?function(k){return k=Ut(k,b),ie(k)&&k.some(function(g){return s(x,g)})}:function(k){return s(x,Ut(k,b))}):y]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Be.prototype.filter=function(e){return this.toCollection().and(e)},Be.prototype.count=function(e){return this.toCollection().count(e)},Be.prototype.offset=function(e){return this.toCollection().offset(e)},Be.prototype.limit=function(e){return this.toCollection().limit(e)},Be.prototype.each=function(e){return this.toCollection().each(e)},Be.prototype.toArray=function(e){return this.toCollection().toArray(e)},Be.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Be.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},Be.prototype.reverse=function(){return this.toCollection().reverse()},Be.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof or&&(e=(c=>{var u=y,b=c;if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function $(){this.constructor=u}function y(){return c!==null&&c.apply(this,arguments)||this}return Ae(u,b),u.prototype=b===null?Object.create(b):($.prototype=b.prototype,new $),Object.defineProperty(y.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),y.prototype.table=function(){return n},y})(e)),new Set),s=e.prototype;s;s=ht(s))Object.getOwnPropertyNames(s).forEach(function(c){return a.add(c)});function i(c){if(!c)return c;var u,b=Object.create(e.prototype);for(u in c)if(!a.has(u))try{b[u]=c[u]}catch{}return b}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},Be.prototype.defineClass=function(){return this.mapToClass(function(e){Ce(this,e)})},Be.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=ha(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},Be.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var c=i??{};return cr(c,t),a&&gt(c,a,e),n.core.mutate({trans:s,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):!!i})})})},Be.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=Ut(e,this.schema.primKey.keyPath))===void 0?Re(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Be.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=ha(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},Be.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return pa(t,[e],a)}).then(function(a){return a.numFailures?Y.reject(a.failures[0]):void 0})})},Be.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:ir}).then(function(n){return pa(e,null,n)})}).then(function(t){return t.numFailures?Y.reject(t.failures[0]):void 0})},Be.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},Be.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,$=u.auto,u=u.keyPath;if(u&&s)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,$=u&&$?e.map(ha(u)):e;return a.core.mutate({trans:c,type:"add",keys:s,values:$,wantResults:i}).then(function(y){var v=y.numFailures,x=y.failures;if(v===0)return i?y.results:y.lastResult;throw new En("".concat(a.name,".bulkAdd(): ").concat(v," of ").concat(b," operations failed"),x)})})},Be.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,$=u.auto,u=u.keyPath;if(u&&s)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var b=e.length,$=u&&$?e.map(ha(u)):e;return a.core.mutate({trans:c,type:"put",keys:s,values:$,wantResults:i}).then(function(y){var v=y.numFailures,x=y.failures;if(v===0)return i?y.results:y.lastResult;throw new En("".concat(a.name,".bulkPut(): ").concat(v," of ").concat(b," operations failed"),x)})})},Be.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(c){return c.key}),s=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:a,cache:"clone"}).then(function(u){var b=[],$=[],y=(e.forEach(function(v,x){var k=v.key,g=v.changes,m=u[x];if(m){for(var B=0,E=Object.keys(g);B<E.length;B++){var S=E[B],T=g[S];if(S===t.schema.primKey.keyPath){if(fe(T,k)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else gt(m,S,T)}i.push(x),b.push(k),$.push(m)}}),b.length);return n.mutate({trans:c,type:"put",keys:b,values:$,updates:{keys:a,changeSpecs:s}}).then(function(v){var x=v.numFailures,k=v.failures;if(x===0)return y;for(var g=0,m=Object.keys(k);g<m.length;g++){var B,E=m[g],S=i[Number(E)];S!=null&&(B=k[E],delete k[E],k[S]=B)}throw new En("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(y," operations failed"),k)})})})},Be.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return pa(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new En("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var ne=Be;function Be(){}function o(e){function t(c,u){if(u){for(var b=arguments.length,$=new Array(b-1);--b;)$[b-1]=arguments[b];return n[c].subscribe.apply(null,$),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(c,u,b){var $,y;if(typeof c!="object")return u=u||Oa,y={subscribers:[],fire:b=b||ke,subscribe:function(v){y.subscribers.indexOf(v)===-1&&(y.subscribers.push(v),y.fire=u(y.fire,v))},unsubscribe:function(v){y.subscribers=y.subscribers.filter(function(x){return x!==v}),y.fire=y.subscribers.reduce(u,b)}},n[c]=t[c]=y;xe($=c).forEach(function(v){var x=$[v];if(ie(x))i(v,$[v][0],$[v][1]);else{if(x!=="asap")throw new Z.InvalidArgument("Invalid event config");var k=i(v,qn,function(){for(var g=arguments.length,m=new Array(g);g--;)m[g]=arguments[g];k.subscribers.forEach(function(B){aa(function(){B.apply(null,m)})})})}})}}function l(e,t){return sn(t).from({prototype:e}),t}function f(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function d(e,t){e.filter=xn(e.filter,t)}function C(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return xn(a(),t())}:t,e.justLimit=n&&!a}function M(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function O(e,t,n){var a=M(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function N(e,t,n,a){var s,i,c=e.replayFilter?xn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(u,b,$){var y,v;c&&!c(b,$,function(x){return b.stop(x)},function(x){return b.fail(x)})||((v=""+(y=b.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(y)),le(s,v))||(s[v]=!0,t(u,b,$))},Promise.all([e.or._iterate(i,n),L(O(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):L(O(e,a,n),xn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function L(e,t,n,a){var s=ge(a?function(i,c,u){return n(a(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=ke},function(u){i.fail(u),c=ke})||s(i.value,i,function(u){return c=u}),c()})})}I.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Re.bind(null,n.error)):n.table._trans("readonly",e).then(t)},I.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Re.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},I.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=xn(t.algorithm,e)},I.prototype._iterate=function(e,t){return N(this._ctx,e,t,this._ctx.table.core)},I.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&Ce(n,e),t._ctx=n,t},I.prototype.raw=function(){return this._ctx.valueMapper=null,this},I.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return N(t,e,n,t.table.core)})},I.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return f(s,!0)?i.count({trans:n,query:{index:M(s,i.schema),range:s.range}}).then(function(c){return Math.min(c,s.limit)}):(a=0,N(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},I.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(b,$){return $?i(b[n[$]],$-1):b[a]}var c=this._ctx.dir==="next"?1:-1;function u(b,$){return fe(i(b,s),i($,s))*c}return this.toArray(function(b){return b.sort(u)}).then(t)},I.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,c=t._ctx;return c.dir==="next"&&f(c,!0)&&0<c.limit?(a=c.valueMapper,s=M(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:s,range:c.range}}).then(function(u){return u=u.result,a?u.map(a):u})):(i=[],N(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},I.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,f(t)?C(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):C(t,function(){var n=e;return function(){return--n<0}})),this},I.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),C(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},I.prototype.until=function(e,t){return d(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},I.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},I.prototype.last=function(e){return this.reverse().first(e)},I.prototype.filter=function(e){var t;return d(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=xn(t.isMatch,e),this},I.prototype.and=function(e){return this.filter(e)},I.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},I.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},I.prototype.desc=function(){return this.reverse()},I.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},I.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},I.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},I.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},I.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&f(t,!0)&&0<t.limit)return this._read(function(a){var s=M(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},I.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},I.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},I.prototype.lastKey=function(e){return this.reverse().firstKey(e)},I.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},d(this._ctx,function(a){var a=a.primaryKey.toString(),s=le(e,a);return e[a]=!0,!s})),this},I.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(m,B){var E=B.failures;x+=m-B.numFailures;for(var S=0,T=xe(E);S<T.length;S++){var F=T[S];v.push(E[F])}}var i=typeof e=="function"?e:function(m){return cr(m,e)},c=n.table.core,y=c.schema.primaryKey,u=y.outbound,b=y.extractKey,$=200,y=t.db._options.modifyChunkSize,v=(y&&($=typeof y=="object"?y[c.name]||y["*"]||200:y),[]),x=0,k=[],g=e===Q;return t.clone().primaryKeys().then(function(m){function B(S){var T=Math.min($,m.length-S),F=m.slice(S,S+T);return(g?Promise.resolve([]):c.getMany({trans:a,keys:F,cache:"immutable"})).then(function(R){var V=[],A=[],z=u?[]:null,U=g?F:[];if(!g)for(var D=0;D<T;++D){var W=R[D],ue={value:bt(W),primKey:m[S+D]};i.call(ue,ue.value,ue)!==!1&&(ue.value==null?U.push(m[S+D]):u||fe(b(W),b(ue.value))===0?(A.push(ue.value),u&&z.push(m[S+D])):(U.push(m[S+D]),V.push(ue.value)))}return Promise.resolve(0<V.length&&c.mutate({trans:a,type:"add",values:V}).then(function(ve){for(var ee in ve.failures)U.splice(parseInt(ee),1);s(V.length,ve)})).then(function(){return(0<A.length||E&&typeof e=="object")&&c.mutate({trans:a,type:"put",keys:z,values:A,criteria:E,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(ve){return s(A.length,ve)})}).then(function(){return(0<U.length||E&&g)&&c.mutate({trans:a,type:"delete",keys:U,criteria:E,isAdditionalChunk:0<S}).then(function(ve){return pa(n.table,U,ve)}).then(function(ve){return s(U.length,ve)})}).then(function(){return m.length>S+T&&B(S+$)})})}var E=f(n)&&n.limit===1/0&&(typeof e!="function"||g)&&{index:n.index,range:n.range};return B(0).then(function(){if(0<v.length)throw new Et("Error modifying one or more objects",v,x,k);return m.length})})})},I.prototype.delete=function(){var e=this._ctx,t=e.range;return!f(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Q):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(b){var u=b.failures,b=b.numFailures;if(b)throw new Et("Could not delete some values",Object.keys(u).map(function($){return u[$]}),i-b);return i-b})})})};var H=I;function I(){}var Q=function(e,t){return t.value=null};function te(e,t){return e<t?-1:e===t?0:1}function be(e,t){return t<e?-1:e===t?0:1}function de(e,t,n){return e=e instanceof Se?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Te(e){return new e.Collection(e,function(){return at("")}).limit(0)}function ce(k,t,n,a){var s,i,c,u,b,$,y,v=n.length;if(!n.every(function(m){return typeof m=="string"}))return de(k,sr);function x(m){s=m==="next"?function(E){return E.toUpperCase()}:function(E){return E.toLowerCase()},i=m==="next"?function(E){return E.toLowerCase()}:function(E){return E.toUpperCase()},c=m==="next"?te:be;var B=n.map(function(E){return{lower:i(E),upper:s(E)}}).sort(function(E,S){return c(E.lower,S.lower)});u=B.map(function(E){return E.upper}),b=B.map(function(E){return E.lower}),y=($=m)==="next"?"":a}x("next");var k=new k.Collection(k,function(){return $e(u[0],b[v-1]+a)}),g=(k._ondirectionchange=function(m){x(m)},0);return k._addAlgorithm(function(m,B,E){var S=m.key;if(typeof S=="string"){var T=i(S);if(t(T,b,g))return!0;for(var F=null,R=g;R<v;++R){var V=((A,z,U,D,W,ue)=>{for(var ve=Math.min(A.length,D.length),ee=-1,oe=0;oe<ve;++oe){var Fe=z[oe];if(Fe!==D[oe])return W(A[oe],U[oe])<0?A.substr(0,oe)+U[oe]+U.substr(oe+1):W(A[oe],D[oe])<0?A.substr(0,oe)+D[oe]+U.substr(oe+1):0<=ee?A.substr(0,ee)+z[ee]+U.substr(ee+1):null;W(A[oe],Fe)<0&&(ee=oe)}return ve<D.length&&ue==="next"?A+U.substr(A.length):ve<A.length&&ue==="prev"?A.substr(0,U.length):ee<0?null:A.substr(0,ee)+D[ee]+U.substr(ee+1)})(S,T,u[R],b[R],c,$);V===null&&F===null?g=R+1:(F===null||0<c(F,V))&&(F=V)}B(F!==null?function(){m.continue(F+y)}:E)}return!1}),k}function $e(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function at(e){return{type:1,lower:e,upper:e}}Object.defineProperty(pe.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),pe.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Te(this):new this.Collection(this,function(){return $e(e,t,!n,!a)})}catch{return de(this,Ht)}},pe.prototype.equals=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return at(e)})},pe.prototype.above=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return $e(e,void 0,!0)})},pe.prototype.aboveOrEqual=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return $e(e,void 0,!1)})},pe.prototype.below=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return $e(void 0,e,!1,!0)})},pe.prototype.belowOrEqual=function(e){return e==null?de(this,Ht):new this.Collection(this,function(){return $e(void 0,e)})},pe.prototype.startsWith=function(e){return typeof e!="string"?de(this,sr):this.between(e,e+Cn,!0,!0)},pe.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):ce(this,function(t,n){return t.indexOf(n[0])===0},[e],Cn)},pe.prototype.equalsIgnoreCase=function(e){return ce(this,function(t,n){return t===n[0]},[e],"")},pe.prototype.anyOfIgnoreCase=function(){var e=me.apply(tt,arguments);return e.length===0?Te(this):ce(this,function(t,n){return n.indexOf(t)!==-1},e,"")},pe.prototype.startsWithAnyOfIgnoreCase=function(){var e=me.apply(tt,arguments);return e.length===0?Te(this):ce(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,Cn)},pe.prototype.anyOf=function(){var e,t,n=this,a=me.apply(tt,arguments),s=this._cmp;try{a.sort(s)}catch{return de(this,Ht)}return a.length===0?Te(this):((e=new this.Collection(this,function(){return $e(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,c,u){for(var b=i.key;0<s(b,a[t]);)if(++t===a.length)return c(u),!1;return s(b,a[t])===0||(c(function(){i.continue(a[t])}),!1)}),e)},pe.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},pe.prototype.noneOf=function(){var e=me.apply(tt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return de(this,Ht)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},pe.prototype.inAnyRange=function(e,E){var n=this,a=this._cmp,s=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return Te(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&s(S[0],S[1])<=0}))return de(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var b=!E||E.includeLowers!==!1,$=E&&E.includeUppers===!0,y,v=s;function x(S,T){return v(S[0],T[0])}try{(y=e.reduce(function(S,T){for(var F=0,R=S.length;F<R;++F){var V=S[F];if(a(T[0],V[1])<0&&0<a(T[1],V[0])){V[0]=c(V[0],T[0]),V[1]=u(V[1],T[1]);break}}return F===R&&S.push(T),S},[])).sort(x)}catch{return de(this,Ht)}var k=0,g=$?function(S){return 0<s(S,y[k][1])}:function(S){return 0<=s(S,y[k][1])},m=b?function(S){return 0<i(S,y[k][0])}:function(S){return 0<=i(S,y[k][0])},B=g,E=new this.Collection(this,function(){return $e(y[0][0],y[y.length-1][1],!b,!$)});return E._ondirectionchange=function(S){v=S==="next"?(B=g,s):(B=m,i),y.sort(x)},E._addAlgorithm(function(S,T,F){for(var R,V=S.key;B(V);)if(++k===y.length)return T(F),!1;return!g(R=V)&&!m(R)||(n._cmp(V,y[k][1])===0||n._cmp(V,y[k][0])===0||T(function(){v===s?S.continue(y[k][0]):S.continue(y[k][1])}),!1)}),E},pe.prototype.startsWithAnyOf=function(){var e=me.apply(tt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Te(this):this.inAnyRange(e.map(function(t){return[t,t+Cn]})):de(this,"startsWithAnyOf() only works with strings")};var Se=pe;function pe(){}function Qe(e){return ge(function(t){return q(t),e(t.target.error),!1})}function q(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var ot="storagemutated",rt="x-storagemutated-1",Ze=o(null,ot),It=(re.prototype._lock=function(){return Dn(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this},re.prototype._unlock=function(){if(Dn(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{yn(e[1],e[0])}catch{}}return this},re.prototype._locked=function(){return this._reculock&&X.lockOwnerFor!==this},re.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Dn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(a);case"MissingAPIError":throw new Z.MissingAPI(a.message,a);default:throw new Z.OpenFailed(a)}if(!this.active)throw new Z.TransactionInactive;Dn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ge(function(s){q(s),t._reject(e.error)}),e.onabort=ge(function(s){q(s),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=ge(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&Ze.storagemutated.fire(e.mutatedParts)})}return this},re.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Re(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Y(function(i,c){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,c)},X])}):n?un(function(){var i=new Y(function(c,u){s._lock();var b=t(c,u,s);b&&b.then&&b.then(c,u)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new Y(function(i,c){var u=t(i,c,s);u&&u.then&&u.then(i,c)}))._lib=!0,a):Re(new Z.TransactionInactive)},re.prototype._root=function(){return this.parent?this.parent._root():this},re.prototype.waitFor=function(e){var t,n=this._root(),a=Y.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new Y(function(i,c){a.then(function(u){return n._waitingQueue.push(ge(i.bind(null,u)))},function(u){return n._waitingQueue.push(ge(c.bind(null,u)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},re.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},re.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(le(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},re);function re(){}function pt(e,t,n,a,s,i,c,u){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!c?"&":"")+(a?"*":"")+(s?"++":"")+Pe(t),type:u}}function Pe(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ve(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,c){return i=a(i,c),i&&(s[i[0]]=i[1]),s},{}))};var a}var Oe=function(e){try{return e.only([[]]),Oe=function(){return[[]]},[[]]}catch{return Oe=function(){return Cn},Cn}};function Ye(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Ut(n,t)}:function(n){return Ut(n,e)};var t}function ze(e){return[].slice.call(e)}var lt=0;function Rt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Jt(e,t,b){function a(g){if(g.type===3)return null;if(g.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var v=g.lower,x=g.upper,k=g.lowerOpen,g=g.upperOpen;return v===void 0?x===void 0?null:t.upperBound(x,!!g):x===void 0?t.lowerBound(v,!!k):t.bound(v,x,!!k,!!g)}function s(y){var v,x=y.name;return{name:x,schema:y,mutate:function(k){var g=k.trans,m=k.type,B=k.keys,E=k.values,S=k.range;return new Promise(function(T,F){T=ge(T);var R=g.objectStore(x),V=R.keyPath==null,A=m==="put"||m==="add";if(!A&&m!=="delete"&&m!=="deleteRange")throw new Error("Invalid operation type: "+m);var z,U=(B||E||{length:1}).length;if(B&&E&&B.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(U===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function D(De){++ve,q(De)}var W=[],ue=[],ve=0;if(m==="deleteRange"){if(S.type===4)return T({numFailures:ve,failures:ue,results:[],lastResult:void 0});S.type===3?W.push(z=R.clear()):W.push(z=R.delete(a(S)))}else{var V=A?V?[E,B]:[E,null]:[B,null],ee=V[0],oe=V[1];if(A)for(var Fe=0;Fe<U;++Fe)W.push(z=oe&&oe[Fe]!==void 0?R[m](ee[Fe],oe[Fe]):R[m](ee[Fe])),z.onerror=D;else for(Fe=0;Fe<U;++Fe)W.push(z=R[m](ee[Fe])),z.onerror=D}function it(De){De=De.target.result,W.forEach(function(an,Ja){return an.error!=null&&(ue[Ja]=an.error)}),T({numFailures:ve,failures:ue,results:m==="delete"?B:W.map(function(an){return an.result}),lastResult:De})}z.onerror=function(De){D(De),it(De)},z.onsuccess=it})},getMany:function(k){var g=k.trans,m=k.keys;return new Promise(function(B,E){B=ge(B);for(var S,T=g.objectStore(x),F=m.length,R=new Array(F),V=0,A=0,z=function(W){W=W.target,R[W._pos]=W.result,++A===V&&B(R)},U=Qe(E),D=0;D<F;++D)m[D]!=null&&((S=T.get(m[D]))._pos=D,S.onsuccess=z,S.onerror=U,++V);V===0&&B(R)})},get:function(k){var g=k.trans,m=k.key;return new Promise(function(B,E){B=ge(B);var S=g.objectStore(x).get(m);S.onsuccess=function(T){return B(T.target.result)},S.onerror=Qe(E)})},query:(v=u,function(k){return new Promise(function(g,m){g=ge(g);var B,E,S,A=k.trans,T=k.values,F=k.limit,V=k.query,R=F===1/0?void 0:F,z=V.index,V=V.range,A=A.objectStore(x),A=z.isPrimaryKey?A:A.index(z.name),z=a(V);if(F===0)return g({result:[]});v?((V=T?A.getAll(z,R):A.getAllKeys(z,R)).onsuccess=function(U){return g({result:U.target.result})},V.onerror=Qe(m)):(B=0,E=!T&&"openKeyCursor"in A?A.openKeyCursor(z):A.openCursor(z),S=[],E.onsuccess=function(U){var D=E.result;return!D||(S.push(T?D.value:D.primaryKey),++B===F)?g({result:S}):void D.continue()},E.onerror=Qe(m))})}),openCursor:function(k){var g=k.trans,m=k.values,B=k.query,E=k.reverse,S=k.unique;return new Promise(function(T,F){T=ge(T);var A=B.index,R=B.range,V=g.objectStore(x),V=A.isPrimaryKey?V:V.index(A.name),A=E?S?"prevunique":"prev":S?"nextunique":"next",z=!m&&"openKeyCursor"in V?V.openKeyCursor(a(R),A):V.openCursor(a(R),A);z.onerror=Qe(F),z.onsuccess=ge(function(U){var D,W,ue,ve,ee=z.result;ee?(ee.___id=++lt,ee.done=!1,D=ee.continue.bind(ee),W=(W=ee.continuePrimaryKey)&&W.bind(ee),ue=ee.advance.bind(ee),ve=function(){throw new Error("Cursor not stopped")},ee.trans=g,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=ge(F),ee.next=function(){var oe=this,Fe=1;return this.start(function(){return Fe--?oe.continue():oe.stop()}).then(function(){return oe})},ee.start=function(oe){function Fe(){if(z.result)try{oe()}catch(De){ee.fail(De)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var it=new Promise(function(De,an){De=ge(De),z.onerror=Qe(an),ee.fail=an,ee.stop=function(Ja){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=ve,De(Ja)}});return z.onsuccess=ge(function(De){z.onsuccess=Fe,Fe()}),ee.continue=D,ee.continuePrimaryKey=W,ee.advance=ue,Fe(),it},T(ee)):T(null)},F)})},count:function(k){var g=k.query,m=k.trans,B=g.index,E=g.range;return new Promise(function(S,T){var F=m.objectStore(x),F=B.isPrimaryKey?F:F.index(B.name),R=a(E),R=R?F.count(R):F.count();R.onsuccess=ge(function(V){return S(V.target.result)}),R.onerror=Qe(T)})}}}i=b,c=ze((b=e).objectStoreNames);var i,b={schema:{name:b.name,tables:c.map(function(y){return i.objectStore(y)}).map(function(y){var v=y.keyPath,x=y.autoIncrement,g=ie(v),k={},g={name:y.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v==null,compound:g,keyPath:v,autoIncrement:x,unique:!0,extractKey:Ye(v)},indexes:ze(y.indexNames).map(function(m){return y.index(m)}).map(function(S){var T=S.name,B=S.unique,E=S.multiEntry,S=S.keyPath,T={name:T,compound:ie(S),keyPath:S,unique:B,multiEntry:E,extractKey:Ye(S)};return k[Rt(S)]=T}),getIndexByKeyPath:function(m){return k[Rt(m)]}};return k[":id"]=g.primaryKey,v!=null&&(k[Rt(v)]=g.primaryKey),g})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=b.schema,u=b.hasGetAll,b=c.tables.map(s),$={};return b.forEach(function(y){return $[y.name]=y}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(y){if($[y])return $[y];throw new Error("Table '".concat(y,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Oe(t),schema:c}}function _t(e,t,n,a){return n=n.IDBKeyRange,t=Jt(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,G(G({},s),i(s))},t)}}function ct(e,t){var n=t.db,n=_t(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function Xt(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(c){var u=(function b($,y){return ea($,y)||($=ht($))&&b($,y)})(c,s);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?mt(c,s,{get:function(){return this.table(s)},set:function(b){vt(this,s,{value:b,writable:!0,configurable:!0,enumerable:!0})}}):c[s]=new e.Table(s,i))})})}function _e(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Ee(e,t){return e._cfg.version-t._cfg.version}function Le(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Ve("$meta",Vt("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),c=(i.create(n),i._completion.catch(a),i._reject.bind(i)),u=X.transless||X;un(function(){if(X.trans=i,X.transless=u,t!==0)return ct(e,n),$=t,((b=i).storeNames.includes("$meta")?b.table("$meta").get("version").then(function(y){return y??$}):Y.resolve($)).then(function(B){var v=e,x=B,k=i,g=n,m=[],B=v._versions,E=v._dbSchema=kt(0,v.idbdb,g);return(B=B.filter(function(S){return S._cfg.version>=x})).length===0?Y.resolve():(B.forEach(function(S){m.push(function(){var T,F,R,V=E,A=S._cfg.dbschema,z=(ut(v,V,g),ut(v,A,g),E=v._dbSchema=A,Ue(V,A)),U=(z.add.forEach(function(D){Ft(g,D[0],D[1].primKey,D[1].indexes)}),z.change.forEach(function(D){if(D.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var W=g.objectStore(D.name);D.add.forEach(function(ue){return Dt(W,ue)}),D.change.forEach(function(ue){W.deleteIndex(ue.name),Dt(W,ue)}),D.del.forEach(function(ue){return W.deleteIndex(ue)})}),S._cfg.contentUpgrade);if(U&&S._cfg.version>x)return ct(v,g),k._memoizedTables={},T=Ma(A),z.del.forEach(function(D){T[D]=V[D]}),_e(v,[v.Transaction.prototype]),Xt(v,[v.Transaction.prototype],xe(T),T),k.schema=T,(F=vn(U))&&Tn(),A=Y.follow(function(){var D;(R=U(k))&&F&&(D=dn.bind(null,null),R.then(D,D))}),R&&typeof R.then=="function"?Y.resolve(R):A.then(function(){return R})}),m.push(function(T){var F,R,V=S._cfg.dbschema;F=V,R=T,[].slice.call(R.db.objectStoreNames).forEach(function(A){return F[A]==null&&R.db.deleteObjectStore(A)}),_e(v,[v.Transaction.prototype]),Xt(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),k.schema=v._dbSchema}),m.push(function(T){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===S._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(F){return F!=="$meta"})):T.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return m.length?Y.resolve(m.shift()(k.idbtrans)).then(S):Y.resolve()})().then(function(){Qt(E,g)}))}).catch(c);var b,$;xe(s).forEach(function(y){Ft(n,y,s[y].primKey,s[y].indexes)}),ct(e,n),Y.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function Ie(e,t){Qt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=kt(0,e.idbdb,t);ut(e,e._dbSchema,t);for(var a=0,s=Ue(n,e._dbSchema).change;a<s.length;a++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(b){yt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(b.src)),Dt(u,b)})})(s[a]);if(typeof i=="object")return i.value}}function Ue(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)c.recreate=!0,a.change.push(c);else{var u=s.idxByName,b=i.idxByName,$=void 0;for($ in u)b[$]||c.del.push($);for($ in b){var y=u[$],v=b[$];y?y.src!==v.src&&c.change.push(v):c.add.push(v)}(0<c.del.length||0<c.add.length||0<c.change.length)&&a.change.push(c)}}else a.add.push([n,i])}return a}function Ft(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return Dt(s,i)})}function Qt(e,t){xe(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(yt&&console.debug("Dexie: Creating missing table",n),Ft(t,n,e[n].primKey,e[n].indexes))})}function Dt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function kt(e,t,n){var a={};return ta(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),c=pt(Pe($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),u=[],b=0;b<i.indexNames.length;++b){var y=i.index(i.indexNames[b]),$=y.keyPath,y=pt(y.name,$,!!y.unique,!!y.multiEntry,!1,$&&typeof $!="string",!1);u.push(y)}a[s]=Ve(s,c,u)}),a}function ut(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var b,$=c.indexNames[u],y=c.index($).keyPath,y=typeof y=="string"?y:"["+ta(y).join("+")+"]";t[i]&&(b=t[i].idxByName[y])&&(b.name=$,delete t[i].idxByName[y],t[i].idxByName[$]=b)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Vt(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return pt(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(i),n===0,a)})}en.prototype._createTableSchema=Ve,en.prototype._parseIndexSyntax=Vt,en.prototype._parseStoresSpec=function(e,t){var n=this;xe(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new Z.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");s.forEach(function(c){if(c.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},en.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?Ce(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){Ce(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,_e(t,[t._allTables,t,t.Transaction.prototype]),Xt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],xe(s),s),t._storeNames=xe(s),this},en.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Kn(this._cfg.contentUpgrade||ke,e),this};var Zt=en;function en(){}function _(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new zt(fn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function j(e){return e&&typeof e.databases=="function"}function st(e){return un(function(){return X.letThrough=!0,e()})}function kn(e){return!("from"in e)}var se=function(e,t){var n;if(!this)return n=new se,e&&"d"in e&&Ce(n,e),n;Ce(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function zn(e,t,n){var a=fe(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(kn(e))return Ce(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(fe(n,e.from)<0)return a?zn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},ur(e);if(0<fe(t,e.to))return s?zn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},ur(e);fe(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<fe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&On(e,a),s&&t&&On(e,s)}}function On(e,t){kn(t)||(function n(a,s){var i=s.from,c=s.l,u=s.r;zn(a,i,s.to),c&&n(a,c),u&&n(a,u)})(e,t)}function Ra(e,t){var n=Un(t),a=n.next();if(!a.done)for(var s=a.value,i=Un(e),c=i.next(s.from),u=c.value;!a.done&&!c.done;){if(fe(u.from,s.to)<=0&&0<=fe(u.to,s.from))return!0;fe(s.from,u.from)<0?s=(a=n.next(u.from)).value:u=(c=i.next(s.from)).value}return!1}function Un(e){var t=kn(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&fe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||fe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function ur(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=G({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=dr(n)),e.d=dr(e)}function dr(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function wt(e,t){return xe(t).forEach(function(n){e[n]?On(e[n],t[n]):e[n]=(function a(s){var i,c,u={};for(i in s)le(s,i)&&(c=s[i],u[i]=!c||typeof c!="object"||Xa.has(c.constructor)?c:a(c));return u})(t[n])}),e}function Mt(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Ra(t[n],e[n])})}xt(se.prototype,((nt={add:function(e){return On(this,e),this},addKey:function(e){return zn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return zn(t,n,n)}),this},hasKey:function(e){var t=Un(this).next(e).value;return t&&fe(t.from,e)<=0&&0<=fe(t.to,e)}})[Aa]=function(){return Un(this)},nt));var dt={},va={},ma=!1;function Wn(e){wt(va,e),ma||(ma=!0,setTimeout(function(){ma=!1,ga(va,!(va={}))},0))}function ga(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(dt);a<s.length;a++)Va(u=s[a],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=dt["idb://".concat(c,"/").concat(i)])&&Va(u,e,n,t)}n.forEach(function(b){return b()})}function Va(e,t,n,a){for(var s=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],b=u[0],$=[],y=0,v=u[1];y<v.length;y++){var x=v[y];Mt(t,x.obsSet)?x.subscribers.forEach(function(B){return n.add(B)}):a&&$.push(x)}a&&s.push([b,$])}if(a)for(var k=0,g=s;k<g.length;k++){var m=g[k],b=m[0],$=m[1];e.queries.query[b]=$}}function fr(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Re(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==a)throw new Z.DatabaseClosed("db.open() was cancelled")}function u(){return new Y(function(x,k){if(c(),!n)throw new Z.MissingAPI;var g=e.name,m=t.autoSchema||!s?n.open(g):n.open(g,s);if(!m)throw new Z.MissingAPI;m.onerror=Qe(k),m.onblocked=ge(e._fireOnBlocked),m.onupgradeneeded=ge(function(B){var E;y=m.transaction,t.autoSchema&&!e._options.allowEmptyDB?(m.onerror=q,y.abort(),m.result.close(),(E=n.deleteDatabase(g)).onsuccess=E.onerror=ge(function(){k(new Z.NoSuchDatabase("Database ".concat(g," doesnt exist")))})):(y.onerror=Qe(k),E=B.oldVersion>Math.pow(2,62)?0:B.oldVersion,v=E<1,e.idbdb=m.result,i&&Ie(e,y),Le(e,E/10,y,k))},k),m.onsuccess=ge(function(){y=null;var B,E,S,T,F,R,V=e.idbdb=m.result,A=ta(V.objectStoreNames);if(0<A.length)try{var z=V.transaction((F=A).length===1?F[0]:F,"readonly");if(t.autoSchema)R=V,T=z,(S=e).verno=R.version/10,T=S._dbSchema=kt(0,R,T),S._storeNames=ta(R.objectStoreNames,0),Xt(S,[S._allTables],xe(T),T);else if(ut(e,e._dbSchema,z),E=z,((E=Ue(kt(0,(B=e).idbdb,E),B._dbSchema)).add.length||E.change.some(function(U){return U.add.length||U.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),s=V.version+1,i=!0,x(u());ct(e,z)}catch{}An.push(e),V.onversionchange=ge(function(U){t.vcFired=!0,e.on("versionchange").fire(U)}),V.onclose=ge(function(){e.close({disableAutoOpen:!1})}),v&&(A=e._deps,F=g,j(R=A.indexedDB)||F===fn||_(R,A.IDBKeyRange).put({name:F}).catch(ke)),x()},k)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<s)return s=0,u()}return Y.reject(x)})}var b,$=t.dbReadyResolve,y=null,v=!1;return Y.race([a,(typeof navigator>"u"?Y.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function k(){return indexedDB.databases().finally(x)}b=setInterval(k,100),k()}).finally(function(){return clearInterval(b)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],Y.resolve(st(function(){return e.on.ready.fire(e.vip)})).then(function x(){var k;if(0<t.onReadyBeingFired.length)return k=t.onReadyBeingFired.reduce(Kn,ke),t.onReadyBeingFired=[],Y.resolve(st(function(){return k(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{y&&y.abort()}catch{}return a===t.openCanceller&&e._close(),Re(x)}).finally(function(){t.openComplete=!0,$()}).then(function(){var x;return v&&(x={},e.tables.forEach(function(k){k.schema.indexes.forEach(function(g){g.name&&(x["idb://".concat(e.name,"/").concat(k.name,"/").concat(g.name)]=new se(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(k.name,"/")]=x["idb://".concat(e.name,"/").concat(k.name,"/:dels")]=new se(-1/0,[[[]]])}),Ze(ot).fire(x),ga(x,!0)),e})}function ba(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(u){var u=i(u),b=u.value;return u.done?b:b&&typeof b.then=="function"?b.then(n,a):ie(b)?Promise.all(b).then(n,a):n(b)}}return s(t)()}function ya(e,t,n){for(var a=ie(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Ya={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return G(G({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function c(x,k,g){var S=Rt(x),m=s[S]=s[S]||[],B=x==null?0:typeof x=="string"?1:x.length,E=0<k,S=G(G({},g),{name:E?"".concat(S,"(virtual-from:").concat(g.name,")"):g.name,lowLevelIndex:g,isVirtual:E,keyTail:k,keyLength:B,extractKey:Ye(x),unique:!E&&g.unique});return m.push(S),S.isPrimaryKey||i.push(S),1<B&&c(B===2?x[0]:x.slice(0,B-1),k+1,g),m.sort(function(T,F){return T.keyTail-F.keyTail}),S}var u=c(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[u];for(var b=0,$=a.indexes;b<$.length;b++){var y=$[b];c(y.keyPath,0,y)}function v(x){var k,g=x.query.index;return g.isVirtual?G(G({},x),{query:{index:g.lowLevelIndex,range:(k=x.query.range,g=g.keyTail,{type:k.type===1?2:k.type,lower:ya(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,g),lowerOpen:!0,upper:ya(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,g),upperOpen:!0})}}):x}return G(G({},n),{schema:G(G({},a),{primaryKey:u,indexes:i,getIndexByKeyPath:function(x){return(x=s[Rt(x)])&&x[0]}}),count:function(x){return n.count(v(x))},query:function(x){return n.query(v(x))},openCursor:function(x){var k=x.query.index,g=k.keyTail,m=k.keyLength;return k.isVirtual?n.openCursor(v(x)).then(function(E){return E&&B(E)}):n.openCursor(x);function B(E){return Object.create(E,{continue:{value:function(S){S!=null?E.continue(ya(S,x.reverse?e.MAX_KEY:e.MIN_KEY,g)):x.unique?E.continue(E.key.slice(0,m).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,g)):E.continue()}},continuePrimaryKey:{value:function(S,T){E.continuePrimaryKey(ya(S,e.MAX_KEY,g),T)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var S=E.key;return m===1?S[0]:S.slice(0,m)}},value:{get:function(){return E.value}}})}}})}})}};function Gn(e,t,n,a){return n=n||{},a=a||"",xe(e).forEach(function(s){var i,c,u;le(t,s)?(i=e[s],c=t[s],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Ta(i))!==Ta(c)?n[a+s]=t[s]:u==="Object"?Gn(i,c,n,a+s+"."):i!==c&&(n[a+s]=t[s]):i!==c&&(n[a+s]=t[s])):n[a+s]=void 0}),xe(t).forEach(function(s){le(e,s)||(n[a+s]=t[s])}),n}function Ca(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var hr={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return G(G({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return G(G({},n),{mutate:function(s){var i=X.trans,c=i.table(t).hook,u=c.deleting,b=c.creating,$=c.updating;switch(s.type){case"add":if(b.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"put":if(b.fire===ke&&$.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"delete":if(u.fire===ke)break;return i._promise("readwrite",function(){return y(s)},!0);case"deleteRange":if(u.fire===ke)break;return i._promise("readwrite",function(){return(function v(x,k,g){return n.query({trans:x,values:!1,query:{index:a,range:k},limit:g}).then(function(m){var B=m.result;return y({type:"delete",keys:B,trans:x}).then(function(E){return 0<E.numFailures?Promise.reject(E.failures[0]):B.length<g?{failures:[],numFailures:0,lastResult:void 0}:v(x,G(G({},k),{lower:B[B.length-1],lowerOpen:!0}),g)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function y(v){var x,k,g,m=X.trans,B=v.keys||Ca(a,v);if(B)return(v=v.type==="add"||v.type==="put"?G(G({},v),{keys:B}):G({},v)).type!=="delete"&&(v.values=ye([],v.values)),v.keys&&(v.keys=ye([],v.keys)),x=n,g=B,((k=v).type==="add"?Promise.resolve([]):x.getMany({trans:k.trans,keys:g,cache:"immutable"})).then(function(E){var S=B.map(function(T,F){var R,V,A,z=E[F],U={onerror:null,onsuccess:null};return v.type==="delete"?u.fire.call(U,T,z,m):v.type==="add"||z===void 0?(R=b.fire.call(U,T,v.values[F],m),T==null&&R!=null&&(v.keys[F]=T=R,a.outbound||gt(v.values[F],a.keyPath,T))):(R=Gn(z,v.values[F]),(V=$.fire.call(U,R,T,z,m))&&(A=v.values[F],Object.keys(V).forEach(function(D){le(A,D)?A[D]=V[D]:gt(A,D,V[D])}))),U});return n.mutate(v).then(function(T){for(var F=T.failures,R=T.results,V=T.numFailures,T=T.lastResult,A=0;A<B.length;++A){var z=(R||B)[A],U=S[A];z==null?U.onerror&&U.onerror(F[A]):U.onsuccess&&U.onsuccess(v.type==="put"&&E[A]?v.values[A]:z)}return{failures:F,results:R,numFailures:V,lastResult:T}}).catch(function(T){return S.forEach(function(F){return F.onerror&&F.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function Nt(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)fe(t.keys[s],e[i])===0&&(a.push(n?bt(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var Pr={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return G(G({},n),{getMany:function(a){var s;return a.cache?(s=Nt(a.keys,a.trans._cache,a.cache==="clone"))?Y.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?bt(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Yt(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function pr(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Tr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new se(e.MIN_KEY,e.MAX_KEY);return G(G({},e),{transaction:function(a,s,i){if(X.subscr&&s!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));return e.transaction(a,s,i)},table:function(a){function s(B){var m,B=B.query;return[m=B.index,new se((m=(B=B.range).lower)!=null?m:e.MIN_KEY,(m=B.upper)!=null?m:e.MAX_KEY)]}var i=e.table(a),c=i.schema,u=c.primaryKey,b=c.indexes,$=u.extractKey,y=u.outbound,v=u.autoIncrement&&b.filter(function(g){return g.compound&&g.keyPath.includes(u.keyPath)}),x=G(G({},i),{mutate:function(g){function m(W){return W="idb://".concat(t,"/").concat(a,"/").concat(W),F[W]||(F[W]=new se)}var B,E,S,T=g.trans,F=g.mutatedParts||(g.mutatedParts={}),R=m(""),V=m(":dels"),A=g.type,U=g.type==="deleteRange"?[g.range]:g.type==="delete"?[g.keys]:g.values.length<50?[Ca(u,g).filter(function(W){return W}),g.values]:[],z=U[0],U=U[1],D=g.trans._cache;return ie(z)?(R.addKeys(z),(A=A==="delete"||z.length===U.length?Nt(z,D):null)||V.addKeys(z),(A||U)&&(B=m,E=A,S=U,c.indexes.forEach(function(W){var ue=B(W.name||"");function ve(oe){return oe!=null?W.extractKey(oe):null}function ee(oe){W.multiEntry&&ie(oe)?oe.forEach(function(Fe){return ue.addKey(Fe)}):ue.addKey(oe)}(E||S).forEach(function(oe,De){var it=E&&ve(E[De]),De=S&&ve(S[De]);fe(it,De)!==0&&(it!=null&&ee(it),De!=null)&&ee(De)})}))):z?(U={from:(D=z.lower)!=null?D:e.MIN_KEY,to:(A=z.upper)!=null?A:e.MAX_KEY},V.add(U),R.add(U)):(R.add(n),V.add(n),c.indexes.forEach(function(W){return m(W.name).add(n)})),i.mutate(g).then(function(W){return!z||g.type!=="add"&&g.type!=="put"||(R.addKeys(W.results),v&&v.forEach(function(ue){for(var ve=g.values.map(function(it){return ue.extractKey(it)}),ee=ue.keyPath.findIndex(function(it){return it===u.keyPath}),oe=0,Fe=W.results.length;oe<Fe;++oe)ve[oe][ee]=W.results[oe];m(ue.name).addKeys(ve)})),T.mutatedParts=wt(T.mutatedParts||{},F),W})}}),k={get:function(g){return[u,new se(g.key)]},getMany:function(g){return[u,new se().addKeys(g.keys)]},count:s,query:s,openCursor:s};return xe(k).forEach(function(g){x[g]=function(m){var B=X.subscr,E=!!B,S=Yt(X,i)&&pr(g,m)?m.obsSet={}:B;if(E){var T,B=function(U){return U="idb://".concat(t,"/").concat(a,"/").concat(U),S[U]||(S[U]=new se)},F=B(""),R=B(":dels"),E=k[g](m),V=E[0],E=E[1];if((g==="query"&&V.isPrimaryKey&&!m.values?R:B(V.name||"")).add(E),!V.isPrimaryKey){if(g!=="count")return T=g==="query"&&y&&m.values&&i.query(G(G({},m),{values:!1})),i[g].apply(this,arguments).then(function(U){if(g==="query"){if(y&&m.values)return T.then(function(ve){return ve=ve.result,F.addKeys(ve),U});var D=m.values?U.result.map($):U.result;(m.values?F:R).addKeys(D)}else{var W,ue;if(g==="openCursor")return ue=m.values,(W=U)&&Object.create(W,{key:{get:function(){return R.addKey(W.primaryKey),W.key}},primaryKey:{get:function(){var ve=W.primaryKey;return R.addKey(ve),ve}},value:{get:function(){return ue&&F.addKey(W.primaryKey),W.value}}})}return U});R.add(n)}}return i[g].apply(this,arguments)}}),x}})}};function za(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=G({},t),ie(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&ie(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function xa(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<fe(n,a.lower):0<=fe(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?fe(n,a.upper)<0:fe(n,a.upper)<=0));var n,a}function Ua(e,t,n,a,s,i){var c,u,b,$,y,v;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,b=t.query.range,$=a.schema.primaryKey.extractKey,y=c.extractKey,v=(c.lowLevelIndex||c).extractKey,(a=n.reduce(function(x,k){var g=x,m=[];if(k.type==="add"||k.type==="put")for(var B=new se,E=k.values.length-1;0<=E;--E){var S,T=k.values[E],F=$(T);!B.hasKey(F)&&(S=y(T),u&&ie(S)?S.some(function(U){return xa(U,b)}):xa(S,b))&&(B.addKey(F),m.push(T))}switch(k.type){case"add":var R=new se().addKeys(t.values?x.map(function(D){return $(D)}):x),g=x.concat(t.values?m.filter(function(D){return D=$(D),!R.hasKey(D)&&(R.addKey(D),!0)}):m.map(function(D){return $(D)}).filter(function(D){return!R.hasKey(D)&&(R.addKey(D),!0)}));break;case"put":var V=new se().addKeys(k.values.map(function(D){return $(D)}));g=x.filter(function(D){return!V.hasKey(t.values?$(D):D)}).concat(t.values?m:m.map(function(D){return $(D)}));break;case"delete":var A=new se().addKeys(k.keys);g=x.filter(function(D){return!A.hasKey(t.values?$(D):D)});break;case"deleteRange":var z=k.range;g=x.filter(function(D){return!xa($(D),z)})}return g},e))===e)?e:(a.sort(function(x,k){return fe(v(x),v(k))||fe($(x),$(k))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function Wa(e,t){return fe(e.lower,t.lower)===0&&fe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function vr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=fe(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=fe(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function mr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&on(i,s)},3e3))})}var Ar={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return G(G({},e),{transaction:function(n,a,s){var i,c,u=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,u.addEventListener("abort",(c=function(b){return function(){if(i.abort(),a==="readwrite"){for(var $=new Set,y=0,v=n;y<v.length;y++){var x=v[y],k=dt["idb://".concat(t,"/").concat(x)];if(k){var g=e.table(x),m=k.optimisticOps.filter(function(W){return W.trans===u});if(u._explicit&&b&&u.mutatedParts)for(var B=0,E=Object.values(k.queries.query);B<E.length;B++)for(var S=0,T=(V=E[B]).slice();S<T.length;S++)Mt((A=T[S]).obsSet,u.mutatedParts)&&(on(V,A),A.subscribers.forEach(function(W){return $.add(W)}));else if(0<m.length){k.optimisticOps=k.optimisticOps.filter(function(W){return W.trans!==u});for(var F=0,R=Object.values(k.queries.query);F<R.length;F++)for(var V,A,z,U=0,D=(V=R[F]).slice();U<D.length;U++)(A=D[U]).res!=null&&u.mutatedParts&&(b&&!A.dirty?(z=Object.isFrozen(A.res),z=Ua(A.res,A.req,m,g,A,z),A.dirty?(on(V,A),A.subscribers.forEach(function(W){return $.add(W)})):z!==A.res&&(A.res=z,A.promise=Y.resolve({result:z}))):(A.dirty&&on(V,A),A.subscribers.forEach(function(W){return $.add(W)})))}}}$.forEach(function(W){return W()})}}})(!1),{signal:s}),u.addEventListener("error",c(!1),{signal:s}),u.addEventListener("complete",c(!0),{signal:s})),u},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return G(G({},a),{mutate:function(i){var c,u=X.trans;return!s.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=dt["idb://".concat(t,"/").concat(n)])?(u=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Ca(s,i).some(function(b){return b==null}))?(c.optimisticOps.push(i),i.mutatedParts&&Wn(i.mutatedParts),u.then(function(b){0<b.numFailures&&(on(c.optimisticOps,i),(b=za(0,i,b))&&c.optimisticOps.push(b),i.mutatedParts)&&Wn(i.mutatedParts)}),u.catch(function(){on(c.optimisticOps,i),i.mutatedParts&&Wn(i.mutatedParts)})):u.then(function(b){var $=za(0,G(G({},i),{values:i.values.map(function(y,v){var x;return b.failures[v]?y:(gt(x=(x=s.keyPath)!=null&&x.includes(".")?bt(y):G({},y),s.keyPath,b.results[v]),x)})}),b);c.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&Wn(i.mutatedParts)})}),u):a.mutate(i)},query:function(i){var c,u,b,$,y,v,x;return Yt(X,a)&&pr("query",i)?(c=((b=X.trans)==null?void 0:b.db._options.cache)==="immutable",u=(b=X).requery,b=b.signal,v=((k,g,m,B)=>{var E=dt["idb://".concat(k,"/").concat(g)];if(!E)return[];if(!(k=E.queries[m]))return[null,!1,E,null];var S=k[(B.query?B.query.index.name:null)||""];if(!S)return[null,!1,E,null];switch(m){case"query":var T=S.find(function(F){return F.req.limit===B.limit&&F.req.values===B.values&&Wa(F.req.query.range,B.query.range)});return T?[T,!0,E,S]:[S.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=B.limit&&(!B.values||F.req.values)&&vr(F.req.query.range,B.query.range)}),!1,E,S];case"count":return T=S.find(function(F){return Wa(F.req.query.range,B.query.range)}),[T,!!T,E,S]}})(t,n,"query",i),x=v[0],$=v[2],y=v[3],x&&v[1]?x.obsSet=i.obsSet:(v=a.query(i).then(function(k){var g=k.result;if(x&&(x.res=g),c){for(var m=0,B=g.length;m<B;++m)Object.freeze(g[m]);Object.freeze(g)}else k.result=bt(g);return k}).catch(function(k){return y&&x&&on(y,x),Promise.reject(k)}),x={obsSet:i.obsSet,promise:v,subscribers:new Set,type:"query",req:i,dirty:!1},y?y.push(x):(y=[x],($=$||(dt["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=y)),mr(x,y,u,b),x.promise.then(function(k){return{result:Ua(k.result,i,$?.optimisticOps,a,x,c)}})):a.query(i)}})}})}};function ka(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}qe.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Ee),n.stores({}),this._state.autoSchema=!1),n},qe.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?e():new Y(function(n,a){if(t._state.openComplete)return a(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new Z.DatabaseClosed);t.open().catch(ke)}t._state.dbReadyPromise.then(n,a)}).then(e)},qe.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(c,u){return c.level-u.level}),this},qe.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},qe.prototype.open=function(){var e=this;return yn(je,function(){return fr(e)})},qe.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=An.indexOf(this);if(0<=t&&An.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Y(function(n){e.dbReadyResolve=n}),e.openCanceller=new Y(function(n,a){e.cancelOpen=a}))},qe.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},qe.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new Y(function(s,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=ge(function(){var b,$,y;b=t._deps,$=t.name,j(y=b.indexedDB)||$===fn||_(y,b.IDBKeyRange).delete($).catch(ke),s()}),u.onerror=Qe(i),u.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(c):c()})},qe.prototype.backendDB=function(){return this.idbdb},qe.prototype.isOpen=function(){return this.idbdb!==null},qe.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},qe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},qe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(qe.prototype,"tables",{get:function(){var e=this;return xe(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),qe.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Pa(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},qe.prototype._transaction=function(e,t,n){var a,s,i=this,c=X.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===da)a=da;else{if(e!="rw"&&e!=fa)throw new Z.InvalidArgument("Invalid transaction mode: "+e);a=fa}if(c){if(c.mode===da&&a===fa){if(!u)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&s.forEach(function($){if(c&&c.storeNames.indexOf($)===-1){if(!u)throw new Z.SubTransaction("Table "+$+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch($){return c?c._promise(null,function(y,v){v($)}):Re($)}var b=(function $(y,v,x,k,g){return Y.resolve().then(function(){var S=X.transless||X,m=y._createTransaction(v,x,y._dbSchema,k),S=(m.explicit=!0,{trans:m,transless:S});if(k)m.idbtrans=k.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,y._state.PR1398_maxLoop=3}catch(T){return T.name===ra.InvalidState&&y.isOpen()&&0<--y._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),y.close({disableAutoOpen:!1}),y.open().then(function(){return $(y,v,x,null,g)})):Re(T)}var B,E=vn(g),S=(E&&Tn(),Y.follow(function(){var T;(B=g.call(m,m))&&(E?(T=dn.bind(null,null),B.then(T,T)):typeof B.next=="function"&&typeof B.throw=="function"&&(B=ba(B)))},S));return(B&&typeof B.then=="function"?Y.resolve(B).then(function(T){return m.active?T:Re(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return B})).then(function(T){return k&&m._resolve(),m._completion.then(function(){return T})}).catch(function(T){return m._reject(T),Re(T)})})}).bind(null,this,a,s,c,n);return c?c._promise(a,b,"lock"):X.trans?yn(X.transless,function(){return i._whenReady(b)}):this._whenReady(b)},qe.prototype.table=function(e){if(le(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var zt=qe;function qe(e,t){var n,a,s,i,c,u=this,b=(this._middlewares={},this.verno=0,qe.dependencies),b=(this._options=t=G({addons:qe.addons,autoOpen:!0,indexedDB:b.indexedDB,IDBKeyRange:b.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ke,dbReadyPromise:null,cancelOpen:ke,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),y=($.dbReadyPromise=new Y(function(v){$.dbReadyResolve=v}),$.openCanceller=new Y(function(v,x){$.cancelOpen=x}),this._state=$,this.name=e,this.on=o(this,"populate","blocked","versionchange","close",{ready:[Kn,ke]}),this.once=function(v,x){var k=function(){for(var g=[],m=0;m<arguments.length;m++)g[m]=arguments[m];u.on(v).unsubscribe(k),x.apply(u,g)};return u.on(v,k)},this.on.ready.subscribe=na(this.on.ready.subscribe,function(v){return function(x,k){qe.vip(function(){var g,m=u._state;m.openComplete?(m.dbOpenError||Y.resolve().then(x),k&&v(x)):m.onReadyBeingFired?(m.onReadyBeingFired.push(x),k&&v(x)):(v(x),g=u,k||v(function B(){g.on.ready.unsubscribe(x),g.on.ready.unsubscribe(B)}))})}}),this.Collection=(n=this,l(H.prototype,function(B,m){this.db=n;var k=ir,g=null;if(m)try{k=m()}catch(S){g=S}var m=B._ctx,B=m.table,E=B.hook.reading.fire;this._ctx={table:B,index:m.index,isPrimKey:!m.index||B.schema.primKey.keyPath&&m.index===B.schema.primKey.name,range:k,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:g,or:m.or,valueMapper:E!==qn?E:null}})),this.Table=(a=this,l(ne.prototype,function(v,x,k){this.db=a,this._tx=k,this.name=v,this.schema=x,this.hook=a._allTables[v]?a._allTables[v].hook:o(null,{creating:[tr,ke],reading:[Sr,qn],updating:[Br,ke],deleting:[Er,ke]})})),this.Transaction=(s=this,l(It.prototype,function(v,x,k,g,m){var B=this;v!=="readonly"&&x.forEach(function(E){E=(E=k[E])==null?void 0:E.yProps,E&&(x=x.concat(E.map(function(S){return S.updatesTable})))}),this.db=s,this.mode=v,this.storeNames=x,this.schema=k,this.chromeTransactionDurability=g,this.idbtrans=null,this.on=o(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Y(function(E,S){B._resolve=E,B._reject=S}),this._completion.then(function(){B.active=!1,B.on.complete.fire()},function(E){var S=B.active;return B.active=!1,B.on.error.fire(E),B.parent?B.parent._reject(E):S&&B.idbtrans&&B.idbtrans.abort(),Re(E)})})),this.Version=(i=this,l(Zt.prototype,function(v){this.db=i,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,l(Se.prototype,function(v,x,k){if(this.db=c,this._ctx={table:v,index:x===":id"?null:x,or:k},this._cmp=this._ascending=fe,this._descending=function(g,m){return fe(m,g)},this._max=function(g,m){return 0<fe(g,m)?g:m},this._min=function(g,m){return fe(g,m)<0?g:m},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Oe(t.IDBKeyRange),this._createTransaction=function(v,x,k,g){return new u.Transaction(v,x,k,u._options.chromeTransactionDurability,g)},this._fireOnBlocked=function(v){u.on("blocked").fire(v),An.filter(function(x){return x.name===u.name&&x!==u&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(v)})},this.use(Pr),this.use(Ar),this.use(Tr),this.use(Ya),this.use(hr),new Proxy(this,{get:function(v,x,k){var g;return x==="_vip"||(x==="table"?function(m){return ka(u.table(m),y)}:(g=Reflect.get(v,x,k))instanceof ne?ka(g,y):x==="tables"?g.map(function(m){return ka(m,y)}):x==="_createTransaction"?function(){return ka(g.apply(this,arguments),y)}:g)}}));this.vip=y,b.forEach(function(v){return v(u)})}var tn,In=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Or=(Ga.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Ga.prototype[In]=function(){return this},Ga);function Ga(e){this._subscribe=e}try{tn={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{tn={indexedDB:null,IDBKeyRange:null}}function gr(e){var t,n=!1,a=new Or(function(s){var i=vn(e),c,u=!1,b={},$={},y={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),v&&Ze.storagemutated.unsubscribe(k))}},v=(s.start&&s.start(y),!1),x=function(){return qa(g)},k=function(m){wt(b,m),Mt($,b)&&x()},g=function(){var m,B,E;!u&&tn.indexedDB&&(b={},m={},c&&c.abort(),c=new AbortController,E=(S=>{var T=bn();try{i&&Tn();var F=un(e,S);return F=i?F.finally(dn):F}finally{T&&cn()}})(B={subscr:m,signal:c.signal,requery:x,querier:e,trans:null}),Promise.resolve(E).then(function(S){n=!0,t=S,u||B.signal.aborted||(b={},(T=>{for(var F in T)if(le(T,F))return;return 1})($=m)||v||(Ze(ot,k),v=!0),qa(function(){return!u&&s.next&&s.next(S)}))},function(S){n=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||u||qa(function(){u||s.error&&s.error(S)})}))};return setTimeout(x,0),y});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var Lt=zt;function Ha(e){var t=nn;try{nn=!0,Ze.storagemutated.fire(e),ga(e,!0)}finally{nn=t}}xt(Lt,G(G({},qt),{delete:function(e){return new Lt(e,{addons:[]}).delete()},exists:function(e){return new Lt(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Lt.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(j(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==fn})}):_(n,t).toCollection().primaryKeys()).then(e)}catch{return Re(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){Ce(this,e)}},ignoreTransaction:function(e){return X.trans?yn(X.transless,e):e()},vip:st,async:function(e){return function(){try{var t=ba(e.apply(this,arguments));return t&&typeof t.then=="function"?t:Y.resolve(t)}catch(n){return Re(n)}}},spawn:function(e,t,n){try{var a=ba(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:Y.resolve(a)}catch(s){return Re(s)}},currentTransaction:{get:function(){return X.trans||null}},waitFor:function(e,t){return e=Y.resolve(typeof e=="function"?Lt.ignoreTransaction(e):e).timeout(t||6e4),X.trans?X.trans.waitFor(e):e},Promise:Y,debug:{get:function(){return yt},set:function(e){Ia(e)}},derive:sn,extend:Ce,props:xt,override:na,Events:o,on:Ze,liveQuery:gr,extendObservabilitySet:wt,getByKeyPath:Ut,setByKeyPath:gt,delByKeyPath:function(e,t){typeof t=="string"?gt(e,t,void 0):"length"in t&&[].map.call(t,function(n){gt(e,n,void 0)})},shallowClone:Ma,deepClone:bt,getObjectDiff:Gn,cmp:fe,asap:aa,minKey:-1/0,addons:[],connections:An,errnames:ra,dependencies:tn,cache:dt,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),Lt.maxKey=Oe(Lt.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ze(ot,function(e){nn||(e=new CustomEvent(rt,{detail:e}),nn=!0,dispatchEvent(e),nn=!1)}),addEventListener(rt,function(e){e=e.detail,nn||Ha(e)}));var wn,nn=!1,br=function(){};return typeof BroadcastChannel<"u"&&((br=function(){(wn=new BroadcastChannel(rt)).onmessage=function(e){return e.data&&Ha(e.data)}})(),typeof wn.unref=="function"&&wn.unref(),Ze(ot,function(e){nn||wn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!zt.disableBfCache&&e.persisted){yt&&console.debug("Dexie: handling persisted pagehide"),wn?.close();for(var t=0,n=An;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!zt.disableBfCache&&e.persisted&&(yt&&console.debug("Dexie: handling persisted pageshow"),br(),Ha({all:new se(-1/0,[[]])}))})),Y.rejectionMapper=function(e,t){return!e||e instanceof mn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!er[e.name]?e:(t=new er[e.name](t||e.message,e),"stack"in e&&mt(t,"stack",{get:function(){return this.inner.stack}}),t)},Ia(yt),G(zt,Object.freeze({__proto__:null,Dexie:zt,Entity:or,PropModification:Yn,RangeSet:se,add:function(e){return new Yn({add:e})},cmp:fe,default:zt,liveQuery:gr,mergeRanges:On,rangesOverlap:Ra,remove:function(e){return new Yn({remove:e})},replacePrefix:function(e,t){return new Yn({replacePrefix:[e,t]})}}),{default:zt}),zt})})(yr)),yr.exports}var ti=ei();const Dr=Qs(ti),ks=Symbol.for("Dexie"),Cr=globalThis[ks]||(globalThis[ks]=Dr);if(Dr.semVer!==Cr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Dr.semVer} and ${Cr.semVer}`);const{liveQuery:mi,mergeRanges:gi,rangesOverlap:bi,RangeSet:yi,cmp:Ci,Entity:xi,PropModification:ki,replacePrefix:wi,add:$i,remove:Si,DexieYProvider:Ei}=Cr,Ge=new Cr("haushaltsbuch-db");Ge.version(1).stores({years:"year",fixedTemplateState:"id"});Ge.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Ge.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Ba="singleton";function xr(){return new Date().toISOString()}async function Zn(){return Ge.years.orderBy("year").toArray()}async function ni(P){return Ge.years.get(P)}async function Qn(P){await Ge.years.put(P)}async function Nr(){const P=await Ge.fixedTemplateState.get(Ba);if(!P){const h={id:Ba,templates:[],version:xr(),updatedAt:new Date().toISOString()};return await Ge.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Lr(P){const h=xr();return await Ge.fixedTemplateState.put({id:Ba,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function qr(){const P=await Ge.annualVariableFixedTemplateState.get(Ba);if(!P){const h={id:Ba,templates:[],version:xr(),updatedAt:new Date().toISOString()};return await Ge.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Kr(P){const h=xr();return await Ge.annualVariableFixedTemplateState.put({id:Ba,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function ai(P){await Ge.auditLog.put(P)}async function jr(){return Ge.auditLog.orderBy("timestampIso").toArray()}async function ri(P){await Ge.auditLog.clear(),P.length!==0&&await Ge.auditLog.bulkPut(P)}async function si(){const P=await Zn(),[h,Ae,G]=await Promise.all([Nr(),qr(),jr()]);return{exportedAt:new Date().toISOString(),years:P,fixedTemplates:h.templates,annualVariableFixedTemplates:Ae.templates,auditLogEntries:G}}async function ii(P){await Ge.transaction("rw",[Ge.years,Ge.fixedTemplateState,Ge.annualVariableFixedTemplateState,Ge.auditLog],async()=>{await Ge.years.clear(),await Ge.years.bulkPut(P.years),await Lr(P.fixedTemplates),await Kr(P.annualVariableFixedTemplates??[]),await ri(P.auditLogEntries??[])})}function Ne(P){const h=P.replace(",",".").trim();if(!h)return 0;const Ae=Number.parseFloat(h);return Number.isNaN(Ae)?0:Math.round(Ae*100)}const oi=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function p(P){return oi.format(P/100)}function Ct(P){return(P/100).toFixed(2)}function Me(P){return new Date(2026,P-1,1).toLocaleDateString("de-DE",{month:"long"})}const Es=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function ws(P){return Es.includes(P)}function li(P){switch(P){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const $s=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function ci(P){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ae="habu-theme",G="habu-backup-dirty",ye="habu-unexported-change-log",ae="habu-last-backup-filename",xe="habu-recurring-budget-defaults";let ie=null,Ce=null,ht=null,He=null,le=!1,xt=!1;const vt=new WeakMap;function mt(){const o=P.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),C=l.getPropertyValue("--table-stripe").trim(),M=l.getPropertyValue("--table-border").trim(),O=l.getPropertyValue("--budget-under").trim(),N=l.getPropertyValue("--danger-2").trim(),L=96,H=250,I=Q=>1-Math.pow(1-Math.max(0,Math.min(1,Q)),3);o.forEach(Q=>{Q.dataset.hoverBound!=="1"&&(Q.dataset.hoverBound="1",Q.addEventListener("mouseenter",()=>{Q.dataset.hovering="1",mt()}),Q.addEventListener("mouseleave",()=>{delete Q.dataset.hovering,delete Q.dataset.hoverX,mt()}),Q.addEventListener("mousemove",_e=>{const Ee=Q.getBoundingClientRect(),Le=Math.round(_e.clientX-Ee.left);Q.dataset.hoverX=String(Le),mt()}));const te=Number.parseInt(Q.dataset.budgetCents??"0",10),be=Number.parseInt(Q.dataset.actualCents??"0",10),de=Q.dataset.label??"Kategorie",Te=Q.dataset.hovering==="1",ce=`${de}|${te}|${be}`,$e=Q.dataset.lastRenderSignature!==ce;Q.dataset.lastRenderSignature=ce;const at=Math.max(120,Math.floor(Q.clientWidth||120)),Se=window.devicePixelRatio||1,pe=Math.floor(at*Se),Qe=Math.floor(L*Se);(Q.width!==pe||Q.height!==Qe)&&(Q.width=pe,Q.height=Qe);const q=Q.getContext("2d");if(!q)return;const ot=Math.max(1,te,be),rt=Math.min(1,Math.max(0,te/ot)),Ze=Math.min(1,Math.max(0,be/ot)),It=te-be,re=te>0?be/te*100:be>0?100:0,pt=8,Pe=pt,Ve=34,Oe=at-pt*2,Ye=22,ze=Number.parseInt(Q.dataset.hoverX??"-1",10),lt=(_e,Ee,Le,Ie,Ue)=>{q.beginPath(),q.moveTo(_e+Ue,Ee),q.lineTo(_e+Le-Ue,Ee),q.quadraticCurveTo(_e+Le,Ee,_e+Le,Ee+Ue),q.lineTo(_e+Le,Ee+Ie-Ue),q.quadraticCurveTo(_e+Le,Ee+Ie,_e+Le-Ue,Ee+Ie),q.lineTo(_e+Ue,Ee+Ie),q.quadraticCurveTo(_e,Ee+Ie,_e,Ee+Ie-Ue),q.lineTo(_e,Ee+Ue),q.quadraticCurveTo(_e,Ee,_e+Ue,Ee),q.closePath()},Rt=_e=>{q.setTransform(1,0,0,1,0,0),q.clearRect(0,0,Q.width,Q.height),q.scale(Se,Se),lt(Pe,Ve,Oe,Ye,8),q.fillStyle=C,q.fill(),q.strokeStyle=M,q.lineWidth=1,q.stroke();const Ee=[.6,.25,.15],Le=[.1,.16,.24];let Ie=0;Ee.forEach((kt,ut)=>{const Vt=Oe*kt;q.save(),q.globalAlpha=Le[ut]??.1,q.fillStyle=d,q.fillRect(Pe+Ie,Ve,Vt,Ye),q.restore(),Ie+=Vt});const Ue=te>0&&be>te?N:O,Ft=Oe*Ze*_e;lt(Pe,Ve+3,Ft,Ye-6,6),q.fillStyle=Ue,q.fill(),Te&&(q.save(),q.strokeStyle=Ue,q.lineWidth=1.5,q.globalAlpha=.8,lt(Pe-1,Ve+2,Math.max(2,Ft+2),Ye-4,7),q.stroke(),q.restore());const Qt=Pe+Oe*rt;q.strokeStyle=f,q.lineWidth=Te?3:2,q.beginPath(),q.moveTo(Qt,Ve-3),q.lineTo(Qt,Ve+Ye+3),q.stroke(),Te&&ze>=Pe&&ze<=Pe+Oe&&(q.save(),q.strokeStyle=f,q.globalAlpha=.35,q.lineWidth=1,q.beginPath(),q.moveTo(ze,Ve-8),q.lineTo(ze,Ve+Ye+8),q.stroke(),q.restore()),q.fillStyle=f,q.font="600 12px system-ui, -apple-system, sans-serif",q.textAlign="left",q.textBaseline="top",q.fillText(de,Pe,10);const Dt=re*_e;if(q.fillStyle=re>100?N:re<100?O:d,q.textAlign="right",q.fillText(`${Dt.toFixed(0)}%`,Pe+Oe,10),q.fillStyle=d,q.font="500 11px system-ui, -apple-system, sans-serif",q.textAlign="left",q.textBaseline="top",q.fillText(`Ist ${p(be)} · Ziel ${p(te)} · Δ ${It>=0?"+":""}${p(It)}`,Pe,64),Te){const kt=`Nutzung ${re.toFixed(1)}%`;q.font="600 11px system-ui, -apple-system, sans-serif";const ut=8,Vt=5,Zt=22,_=q.measureText(kt).width+ut*2,j=Number.isFinite(ze)?ze-_/2:Pe+Oe-_,st=Math.min(Pe+Oe-_,Math.max(Pe,j)),kn=Ve-Zt-8;q.save(),q.fillStyle=f,q.globalAlpha=.92,lt(st,kn,_,Zt,6),q.fill(),q.restore(),q.fillStyle=C,q.textAlign="left",q.textBaseline="top",q.fillText(kt,st+ut,kn+Vt)}},Jt=vt.get(Q);if(Jt&&window.cancelAnimationFrame(Jt),!$e){Rt(1);return}const _t=performance.now(),ct=_e=>{const Ee=_e-_t,Le=Math.min(1,Ee/H);if(Rt(I(Le)),Le<1){const Ie=window.requestAnimationFrame(ct);vt.set(Q,Ie);return}vt.delete(Q)},Xt=window.requestAnimationFrame(ct);vt.set(Q,Xt)})}function sn(){P.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),C=l.querySelector("[data-year-trend-active-net]"),M=l.querySelector("[data-year-trend-active-income]"),O=l.querySelector("[data-year-trend-active-expense]"),N=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!C||!M||!O||!N)return;const H=(te,be)=>{te.classList.remove("danger","budget-under");const de=be<0?"danger":be>0?"budget-under":"";de&&te.classList.add(de)},I=te=>{const be=te.dataset.monthLabel??"-",de=Number.parseInt(te.dataset.netCents??"0",10),Te=Number.parseInt(te.dataset.actualNetCents??"0",10),ce=Number.parseInt(te.dataset.incomeCents??"0",10),$e=Number.parseInt(te.dataset.expenseCents??"0",10),at=Number.parseInt(te.dataset.deltaCents??"0",10);d.textContent=be,C.textContent=p(de),M.textContent=p(ce),O.textContent=p($e),N.textContent=`${at>=0?"+":""}${p(at)}`,H(C,de),H(N,at),f.forEach(Se=>{const pe=Se===te;Se.classList.toggle("is-active",pe),Se.setAttribute("aria-pressed",String(pe))}),L&&(L.textContent=`${be}: Kalkulierter Saldo ${p(de)}, Ist-Saldo ${p(Te)}, Einkommen ${p(ce)}, Ausgaben ${p($e)}`)};f.forEach(te=>{const be=()=>{I(te)};te.addEventListener("mouseenter",be),te.addEventListener("focus",be),te.addEventListener("click",be)});const Q=f.find(te=>te.dataset.pointDefault==="1")??f[f.length-1];Q&&I(Q)})}function ea(o){if(o==="dashboard"){const l=h.years.slice().sort((d,C)=>C.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ne()}function _a(){h.topModal&&(h.topModal=null,ne())}function ta(){h.showUnexportedChangeLogModal=!0,ne()}function na(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ne())}function Dn(){h.showPersistentAuditLogModal=!0,ne()}function aa(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ne())}function Ut(){le||(le=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),na();return}if(h.showPersistentAuditLogModal){o.preventDefault(),aa();return}h.topModal&&(o.preventDefault(),_a())}}))}function gt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ma(){const o=P.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",gt())}function kr(){if(xt)return;xt=!0;const o=()=>{Ma(),mt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Pa(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),ie=l,l}function Xa(){if(Ce&&document.body.contains(Ce))return Ce;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return Ce=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),Ce=l,l}function Nn(){if(He&&document.body.contains(He))return He;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return He=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),He=l,l}function bt(){if(!Ce){ht=null;return}Ce.innerHTML="",ht=null}function Ln(){He&&(He.innerHTML="")}function Ta(o,l,f){const d=new Date,C=d.getFullYear(),M=d.getMonth()+1,O=d.getDate(),N=new Date(o,l,0).getDate();if(o<C||o===C&&l<M)return{occurrences:0,remainingDays:0};const L=o===C&&l===M?Math.min(O,N):1,H=Math.max(0,N-L+1);let I=0;for(let Q=L;Q<=N;Q+=1)new Date(o,l-1,Q).getDay()===f&&(I+=1);return{occurrences:I,remainingDays:H}}async function Aa(o,l){const f=Ke();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await Je(`Wocheneinkauf geplant: ${$s.find(d=>d.value===o)?.label??"Wochentag"} mit ${p(f.weeklyShoppingEstimateCents)} €`),ne())}function wr(){const o=Ke(),l=Wt();if(!o||!l)return;const f=Nn();Ln();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,C=o.weeklyShoppingEstimateCents??0,M=l.year,O=o.month,N=jn(M,O),L=N?nt(N):{foodCents:0},H=N?N.foodBudgetCents??0:0,I=L.foodCents,Q=H-I;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${$s.map(re=>`<option value="${re.value}" ${re.value===d?"selected":""}>${re.label}</option>`).join("")}
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
    `;const te=f.querySelector(".weekly-shopping-modal-backdrop"),be=f.querySelector("#weekly-shopping-weekday"),de=f.querySelector("#weekly-shopping-estimate"),Te=f.querySelector("#weekly-shopping-occurrences"),ce=f.querySelector("#weekly-shopping-total"),$e=f.querySelector("#weekly-shopping-rest-before"),at=f.querySelector("#weekly-shopping-rest-after"),Se=f.querySelector("#weekly-shopping-days-left"),pe=f.querySelector("#weekly-shopping-per-day"),Qe=f.querySelector("#weekly-shopping-cancel"),q=f.querySelector("#weekly-shopping-save");function ot(){const re=Number.parseInt(be?.value??"1",10);return Number.isInteger(re)&&re>=0&&re<=6?re:1}function rt(){return Math.max(0,Ne(de?.value??"0"))}function Ze(){const re=ot(),pt=rt(),{occurrences:Pe,remainingDays:Ve}=Ta(M,O,re),Oe=Pe*pt,Ye=Q-Oe,ze=Ve>0?Math.trunc(Ye/Ve):0;Te&&(Te.textContent=`${Pe}`),ce&&(ce.textContent=`${p(Oe)} €`),$e&&($e.textContent=`${p(Q)} €`),at&&(at.textContent=`${p(Ye)} €`,at.className=Ye<0?"danger":Ye>0?"budget-under":""),Se&&(Se.textContent=`${Ve}`),pe&&(pe.textContent=`${p(ze)} €`,pe.className=ze<0?"danger":ze>0?"budget-under":"")}async function It(){await Aa(ot(),rt()),Ln()}Qe?.addEventListener("click",()=>{Ln()}),q?.addEventListener("click",async()=>{await It()}),be?.addEventListener("change",()=>{Ze()}),de?.addEventListener("input",()=>{Ze()}),de?.addEventListener("keydown",async re=>{if(re.key==="Escape"){re.preventDefault(),Ln();return}re.key==="Enter"&&(re.preventDefault(),await It())}),te?.addEventListener("click",re=>{re.target===te&&Ln()}),window.setTimeout(()=>{de?.focus(),de?.select(),Ze()},0)}function on(o,l){let f=o;const d=l.min;if(d){const M=Number.parseFloat(d);if(!Number.isNaN(M)){const O=Math.round(M*100);f=Math.max(f,O)}}const C=l.max;if(C){const M=Number.parseFloat(C);if(!Number.isNaN(M)){const O=Math.round(M*100);f=Math.min(f,O)}}return f}function tt(o){if(o.disabled)return;const l=Xa();bt(),ht=o;const f=Ne(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
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
    `;const C=l.querySelector(".amount-modal-backdrop"),M=l.querySelector("#amount-modal-delta"),O=l.querySelector("#amount-modal-next-delta"),N=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),H=l.querySelector("#amount-modal-overwrite"),I=l.querySelector("#amount-modal-apply");function Q(){const ce=Ne(M?.value??"0");return on(f+ce,o)}function te(){const ce=Ne(M?.value??"0");return on(ce,o)}function be(){O&&(O.textContent=`${p(Q())} €`),N&&(N.textContent=`${p(te())} €`)}function de(){const ce=ht;if(!ce){bt();return}const $e=Q();bt(),ce.value=Ct($e),ce.dispatchEvent(new Event("change",{bubbles:!0}))}function Te(){const ce=ht;if(!ce){bt();return}const $e=te();bt(),ce.value=Ct($e),ce.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{bt()}),H?.addEventListener("click",()=>{Te()}),I?.addEventListener("click",()=>{de()}),M?.addEventListener("input",()=>{be()}),M?.addEventListener("keydown",ce=>{if(ce.key==="Escape"){ce.preventDefault(),bt();return}ce.key==="Enter"&&(ce.preventDefault(),de())}),C?.addEventListener("click",ce=>{ce.target===C&&bt()}),window.setTimeout(()=>{M?.focus(),M?.select(),be()},0)}function me(o,l="success"){const f=Pa(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const C=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},C)}function vn(){return new Date().getMonth()+1}function qt(){return new Date().getFullYear()}function Qa(o){const l=qt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function mn(){return new Date().toISOString().slice(0,10)}function Za(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function Et(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function En(){const o=localStorage.getItem(Ae);return o&&ws(o)?o:"light"}function ra(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Ae,o)}function $r(){return localStorage.getItem(G)==="1"}function Z(o){localStorage.setItem(G,o?"1":"0")}function er(){const o=localStorage.getItem(ye);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function ke(o){localStorage.setItem(ye,JSON.stringify(o.slice(-200)))}function qn(){const o=localStorage.getItem(ae);if(!o)return null;const l=o.trim();return l||null}function Sr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(xe);if(!l)return o;try{const f=JSON.parse(l),d=C=>typeof C=="number"&&Number.isFinite(C)?C:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function gn(o){localStorage.setItem(xe,JSON.stringify(o))}function tr(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function Er(o){const l=o.trim();l&&localStorage.setItem(ae,l)}async function Br(){Pa(),ra(En()),h.hasUnexportedChanges=$r(),h.unexportedChangeLog=er(),h.persistentAuditLog=await jr(),h.lastBackupFileName=qn(),h.recurringBudgetDefaults=Sr(),Ut(),kr();const[o,l,f]=await Promise.all([Zn(),Nr(),qr()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Oa(h.years),ia(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Ia(h.years),o.length>0&&(h.selectedYear=Qa(o),h.selectedMonth=vn()),ne()}function Oa(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const C=Number(d.weeklyShoppingWeekday);Number.isInteger(C)&&C>=0&&C<=6?d.weeklyShoppingWeekday=C:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(C=>{const M=l(C.incomeSource);if(!M){const{incomeSource:O,...N}=C;return N}return{...C,incomeSource:M}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((C,M)=>C+M.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((C,M)=>C+M.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Kn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function yt(o){return o==="fresh"||o==="salary"||!o}async function Ia(o){for(const l of o)await Qn(l)}function Wt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ke(){const o=Wt();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function jn(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function nt(o){const l=o.days.reduce((N,L)=>N+L.foodCents,0),f=o.days.reduce((N,L)=>N+L.goingOutCents,0),d=o.fixedCosts.reduce((N,L)=>N+L.actualCents,0),C=o.variableCosts.reduce((N,L)=>N+L.amountCents,0)+o.variablePositions.reduce((N,L)=>N+L.actualCents,0),M=o.miscCosts.reduce((N,L)=>N+L.amountCents,0),O=l+f+d+C+M;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:C,miscCents:M,totalCents:O}}function Kt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((O,N)=>O+N.plannedCents,0),C=o.variablePositions.reduce((O,N)=>O+N.budgetCents,0),M=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??C)+M}function Bn(o){return o.months.reduce((l,f)=>{const d=nt(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Rn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:nt(l)}))}function Vn(o){const l=o.months.reduce((O,N)=>O+(N.foodBudgetCents??0),0),f=o.months.reduce((O,N)=>O+(N.goingOutBudgetCents??0),0),d=o.months.reduce((O,N)=>O+(N.fixedBudgetCents??N.fixedCosts.reduce((L,H)=>L+H.plannedCents,0)),0),C=o.months.reduce((O,N)=>O+(N.variableBudgetCents??N.variablePositions.reduce((L,H)=>L+H.budgetCents,0)),0),M=o.months.reduce((O,N)=>O+(N.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:C,miscCents:M,totalCents:l+f+d+C+M}}function _n(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,C)=>d+(yt(C.incomeSource)?C.amountCents:0),0),0)}function ln(o){return o.months.reduce((l,f)=>(f.incomes.forEach(d=>{if(d.incomeSource==="salary"){l.salaryIncomeCents+=d.amountCents;return}(d.incomeSource==="fresh"||d.incomeSource==null)&&(l.freshIncomeCents+=d.amountCents)}),l),{salaryIncomeCents:0,freshIncomeCents:0})}function Mn(o,l){const f=o.months.slice().sort((d,C)=>d.month-C.month)[0];return f?l.get(he(o.year,f.month))?.carriedFromPreviousCents??0:0}function Fa(){const o=h.years.slice().sort((d,C)=>d.year-C.year).flatMap(d=>d.months.slice().sort((C,M)=>C.month-M.month).map(C=>({year:d.year,month:C}))),l=new Map;let f=0;return o.forEach(({year:d,month:C},M)=>{const O=C.carryoverOverrideCents,N=typeof O=="number",L=N?O:f,H=M>0||N,I=C.incomes.reduce((de,Te)=>de+(yt(Te.incomeSource)?Te.amountCents:0),0),Q=Kt(C),te=I+L,be=te-Q;l.set(he(d,C.month),{hasPreviousMonth:H,carriedFromPreviousCents:L,recordedIncomeCents:I,effectiveIncomeCents:te,plannedBudgetCents:Q,netCents:be}),f=be}),l}function je(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function X(o){return`${o>0?"+":""}${p(o)}`}function jt(o,l){const f=o-l,d=je(l,o);return`${p(o)} <span class="eval-diff ${d}">(Δ ${X(f)})</span>`}function At(o,l){const f=o!==null,d=f?o-l:null,C=f?je(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${p(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${p(l)} €</strong>
      </div>
      <div class="column-overview-row ${C}">
        <span>Diff</span>
        <strong>${d===null?"-":`${p(d)} €`}</strong>
      </div>
    </div>`}async function sa(o){if(await ni(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=bs(o,h.fixedTemplates,h.fixedTemplateVersion);tr(f),cn(f),await Qn(f),h.years=await Zn(),Y(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=vn(),me(`Jahr ${o} wurde angelegt.`),ne()}function Y(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,Z(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,C={id:Tt("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,C].slice(-200),ke(h.unexportedChangeLog);const M={id:Tt("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,M].slice().sort((O,N)=>O.timestampIso.localeCompare(N.timestampIso)),ai(M).catch(O=>{console.error("Audit-Log konnte nicht gespeichert werden",O),me("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Da(o){const l=o.trim();l&&(h.lastBackupFileName=l,Er(l))}function Na(o){h.hasUnexportedChanges=!1,Z(!1),h.unexportedChangeLog=[],ke([]),h.showUnexportedChangeLogModal=!1,Da(o)}async function Je(o){const l=Wt();l&&(await Qn(l),h.years=await Zn(),Y(o))}async function Bt(o){for(const l of h.years)await Qn(l);h.years=await Zn(),Y(o)}function he(o,l){return o*100+l}function Pn(o,l,f){const d=`${o} auf ${p(f)} € gesetzt`;return f>l?`${d} (erhöht um ${p(f-l)} €)`:f<l?`${d} (verringert um ${p(l-f)} €)`:d}function La(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function bn(o,l){const f=La(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(M=>M.month===f.month);!d||d.variablePositions.some(M=>M.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Tt("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],ge(d))}function cn(o){h.annualVariableFixedTemplates.forEach(l=>{bn(l,o)})}function ia(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const C=d.variablePositions.some(O=>typeof O.autoAnnualTemplateId=="string"),M=d.fixedCosts.some(O=>typeof O.autoAnnualTemplateId=="string");C&&(d.variablePositions=d.variablePositions.filter(O=>O.autoAnnualTemplateId?l.has(O.autoAnnualTemplateId):!0),ge(d)),M&&(d.fixedCosts=d.fixedCosts.filter(O=>!O.autoAnnualTemplateId),Ot(d))}),cn(f)})}function Ot(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function ge(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function Xe(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function nr(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Xe());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function oa(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(C=>{if(he(d.year,C.month)<f)return;C.fixedCosts.some(O=>O.templateId===o.id)||(C.fixedCosts.push({id:Tt("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Ot(C))})})}function la(o,l,f){const d=he(f.year,f.month);h.years.forEach(C=>{C.months.forEach(M=>{he(C.year,M.month)<d||(M.fixedCosts=M.fixedCosts.map(O=>O.templateId!==l.id?O:{...O,name:l.name,plannedCents:l.plannedCents,actualCents:O.actualCents===o.plannedCents?l.plannedCents:O.actualCents}),Ot(M))})})}function ca(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(C=>{he(d.year,C.month)<f||(C.fixedCosts=C.fixedCosts.filter(M=>M.templateId!==o),Ot(C))})})}async function _r(o,l){const f=o.trim();if(!f)return;const d=nr();if(!d)return;const C=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const M=h.fixedTemplates.find(N=>N.id===h.editingFixedTemplateId);if(!M)return;const O={...M,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(N=>N.id===h.editingFixedTemplateId?O:N),la(M,O,d)}else{const M={id:Tt("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,M],oa(M,d)}h.fixedTemplateVersion=await Lr(h.fixedTemplates),h.editingFixedTemplateId=null,await Bt(C?`Fixkosten-Vorlage aktualisiert: ${f} (${p(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${p(l)} €)`),me(C?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function un(o){h.editingFixedTemplateId=o,ne()}function Tn(){h.editingFixedTemplateId=null,ne()}async function dn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=nr();if(!f)return;const d=h.fixedTemplates.find(C=>C.id===o);h.fixedTemplates=h.fixedTemplates.filter(C=>C.id!==o),ca(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Lr(h.fixedTemplates),await Bt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),me("Fixkosten-Vorlage wurde gelöscht."),ne()}async function ua(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const C=La(l);if(!C){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const M={id:Tt("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,M],h.years.forEach(O=>{bn(M,O)}),h.annualVariableFixedTemplateVersion=await Kr(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${p(f)} €, jährlich in ${Me(C.month)})`),me("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function Mr(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(C=>{C.variablePositions=C.variablePositions.filter(M=>M.autoAnnualTemplateId!==o),ge(C),C.fixedCosts=C.fixedCosts.filter(M=>M.autoAnnualTemplateId!==o),Ot(C)})}),h.annualVariableFixedTemplateVersion=await Kr(h.annualVariableFixedTemplates),await Bt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),me("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function Gt(o,l,f){const d=Ke();if(!d)return;const M=d.days.find(O=>O.isoDate===o)?.[l]??0;d.days=d.days.map(O=>O.isoDate===o?{...O,[l]:f}:O),await Je(Pn(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,M,f)),ne()}async function ar(o,l){const f=Ke();if(!f)return;const d=f.fixedCosts.find(C=>C.id===o);f.fixedCosts=f.fixedCosts.map(C=>C.id===o?{...C,actualCents:l}:C),await Je(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${p(l)} €`),ne()}async function yn(o,l){const f=Ke();if(!f)return;const d=f.fixedCosts.find(M=>M.id===o);if(!d)return;const C=d.plannedCents;f.fixedCosts=f.fixedCosts.map(M=>M.id===o?{...M,plannedCents:l}:M),Ot(f),await Je(Pn(`Fixkosten-Budget angepasst: ${d.name}`,C,l)),ne()}async function rr(o,l){const f=Ke();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const C={id:Tt("fixed"),templateId:Tt("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[C,...f.fixedCosts],Ot(f),await Je(`Fixkosten-Position hinzugefügt: ${d} (${p(l)} €)`),me("Fixkosten-Position wurde hinzugefügt."),ne()}async function qa(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Ke();if(!f)return;const d=f.fixedCosts.find(C=>C.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(C=>C.id!==o),Ot(f),await Je(`Fixkosten-Position gelöscht: ${d.name}`),me("Fixkosten-Position wurde gelöscht."),ne())}async function Re(o){await fn("fixedBudgetCents",o,"Fixkosten")}async function Cn(o){await fn("foodBudgetCents",o,"Essen")}async function Ht(o){await fn("goingOutBudgetCents",o,"Ausgehen")}async function sr(o){await fn("miscBudgetCents",o,"Sonstiges")}async function An(o){await fn("variableBudgetCents",o,"Variable Kosten")}async function fn(o,l,f){const d=Ke(),C=h.selectedYear;if(!d||!C||d[o]===l)return;const M=d[o];if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const N=he(C,h.selectedMonth);h.years.forEach(H=>{H.months.forEach(I=>{he(H.year,I.month)<=N||(I[o]=l)})}),h.recurringBudgetDefaults[o]=l,gn(h.recurringBudgetDefaults);const L=Pn(`Budget "${f}"`,M??0,l);await Bt(`${L} (inkl. zukünftiger Monate)`),me(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ne();return}await Je(Pn(`Budget "${f}"`,M??0,l)),ne()}async function da(o){const l=Ke();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Je(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${p(o)} € gesetzt`),ne())}async function fa(o,l,f){const d=Ke(),C=h.selectedYear;if(!d||!C)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Tt("varpos"),name:M,budgetCents:l,actualCents:0},...d.variablePositions],ge(d),f){const O=he(C,h.selectedMonth);h.years.forEach(N=>{N.months.forEach(L=>{he(N.year,L.month)<=O||(L.variablePositions=[{id:Tt("varpos"),name:M,budgetCents:l,actualCents:0},...L.variablePositions],ge(L))})}),await Bt(`Variable Position hinzugefügt: ${M} (${p(l)} €) für zukünftige Monate`),me("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await Je(`Variable Position hinzugefügt: ${M} (${p(l)} €)`),me("Variable Position wurde hinzugefügt."),ne()}async function xn(o,l){const f=Ke();if(!f)return;const d=f.variablePositions.find(M=>M.id===o),C=d?.actualCents??0;f.variablePositions=f.variablePositions.map(M=>M.id===o?{...M,actualCents:l}:M),await Je(Pn(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,C,l)),ne()}async function ir(o,l){const f=Ke();if(!f)return;const d=f.variablePositions.find(M=>M.id===o),C=d?.budgetCents??0;f.variablePositions=f.variablePositions.map(M=>M.id===o?{...M,budgetCents:l}:M),ge(f),await Je(Pn(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,C,l)),ne()}async function ha(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Ke(),d=h.selectedYear;if(!f||!d)return;const C=f.variablePositions.find(L=>L.id===o);if(!C)return;const M=he(d,h.selectedMonth),N=h.years.some(L=>L.months.some(H=>he(L.year,H.month)>M&&H.variablePositions.some(I=>I.name===C.name&&I.budgetCents===C.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),ge(f),N){h.years.forEach(L=>{L.months.forEach(H=>{he(L.year,H.month)<=M||(H.variablePositions=H.variablePositions.filter(I=>!(I.name===C.name&&I.budgetCents===C.budgetCents)),ge(H))})}),await Bt(`Variable Position gelöscht: ${C.name} (inkl. zukünftiger Monate)`),me("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Je(`Variable Position gelöscht: ${C.name}`),me("Variable Position wurde gelöscht."),ne()}async function or(o){const l=Ke(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(I=>I.id===o);if(!d)return;const C={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let M=h.years.find(I=>I.year===C.year);if(!M){const I=bs(C.year,h.fixedTemplates,h.fixedTemplateVersion);tr(I),cn(I),await Qn(I),h.years=[...h.years,I].sort((Q,te)=>Q.year-te.year),M=I}const O=M.months.find(I=>I.month===C.month);if(!O)return;const N=O.variablePositions.some(I=>I.id===d.id||I.name===d.name&&I.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(I=>I.id!==o),ge(l),!N){const Q=O.variablePositions.some(te=>te.id===d.id)?{...d,id:Tt("varpos")}:d;O.variablePositions=[Q,...O.variablePositions],ge(O)}const L=`${Me(C.month)} ${C.year}`,H=`Variable Position verschoben: ${d.name} → ${L}`;if(C.year===f)await Je(H);else{const I=Wt();if(!I)return;await Qn(I),await Qn(M),h.years=await Zn(),Oa(h.years),Y(H)}me(N?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),ne()}async function fe(o,l,f){const d=Ke(),C=h.selectedYear;if(!d||!C)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const O=ys(M,l);if(d.miscCosts=[O,...d.miscCosts],f){const N=he(C,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(H=>{he(L.year,H.month)<=N||(H.miscCosts=[ys(M,l),...H.miscCosts])})}),await Bt(`Sonstige Position hinzugefügt: ${M} (${p(l)} €) für zukünftige Monate`),me("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await Je(`Sonstige Position hinzugefügt: ${M} (${p(l)} €)`),me("Sonstige Position wurde hinzugefügt."),ne()}async function lr(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Ke(),d=h.selectedYear;if(!f||!d)return;const C=f.miscCosts.find(L=>L.id===o);if(!C)return;const M=he(d,h.selectedMonth),N=h.years.some(L=>L.months.some(H=>he(L.year,H.month)>M&&H.miscCosts.some(I=>I.description===C.description&&I.amountCents===C.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),N){h.years.forEach(L=>{L.months.forEach(H=>{he(L.year,H.month)<=M||(H.miscCosts=H.miscCosts.filter(I=>!(I.description===C.description&&I.amountCents===C.amountCents)))})}),await Bt(`Sonstige Position gelöscht: ${C.description} (${p(C.amountCents)} €) inkl. zukünftiger Monate`),me("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Je(`Sonstige Position gelöscht: ${C.description} (${p(C.amountCents)} €)`),me("Sonstige Position wurde gelöscht."),ne()}async function Ka(o,l,f,d){const C=Ke(),M=h.selectedYear;if(!C||!M)return;const O=o.trim();if(!O){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const N=Cs(O,l,f);if(C.incomes=[N,...C.incomes],d){const L=he(M,h.selectedMonth);h.years.forEach(H=>{H.months.forEach(I=>{he(H.year,I.month)<=L||(I.incomes=[Cs(O,l,f),...I.incomes])})}),await Bt(`Einkommen hinzugefügt: ${O} (${p(l)} €, ${Kn(f)}) für zukünftige Monate`),me("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await Je(`Einkommen hinzugefügt: ${O} (${p(l)} €, ${Kn(f)})`),me("Einkommen wurde hinzugefügt."),ne()}async function pa(o,l){const f=Ke();if(!f)return;const d=f.incomes.find(C=>C.id===o);d&&(f.incomes=f.incomes.map(C=>{if(C.id!==o)return C;if(!l){const{incomeSource:M,...O}=C;return O}return{...C,incomeSource:l}}),await Je(`Einkommensart angepasst: ${d.description} → ${Kn(l)}`),ne())}async function Yn(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Ke(),d=h.selectedYear;if(!f||!d)return;const C=f.incomes.find(L=>L.id===o);if(!C)return;const M=he(d,h.selectedMonth),N=h.years.some(L=>L.months.some(H=>he(L.year,H.month)>M&&H.incomes.some(I=>I.description===C.description&&I.amountCents===C.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),N){h.years.forEach(L=>{L.months.forEach(H=>{he(L.year,H.month)<=M||(H.incomes=H.incomes.filter(I=>!(I.description===C.description&&I.amountCents===C.amountCents)))})}),await Bt(`Einkommen gelöscht: ${C.description} (${p(C.amountCents)} €) inkl. zukünftiger Monate`),me("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Je(`Einkommen gelöscht: ${C.description} (${p(C.amountCents)} €)`),me("Einkommen wurde gelöscht."),ne()}async function ja(){const o=await si(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${mn()}-${Za()}.json`,C=document.createElement("a");C.href=f,C.download=d,C.click(),URL.revokeObjectURL(f),Na(d),ne(),me("Backup wurde exportiert.")}async function cr(o){const l=await o.text(),f=JSON.parse(l);await ii(f);const[d,C,M]=await Promise.all([Zn(),Nr(),qr()]);h.years=d,h.annualVariableFixedTemplates=M.templates,h.annualVariableFixedTemplateVersion=M.version,Oa(h.years),ia(h.years),h.fixedTemplates=C.templates,h.fixedTemplateVersion=C.version,await Ia(h.years),h.persistentAuditLog=await jr(),h.selectedYear=Qa(d),h.selectedMonth=vn(),Na(o.name),me("Backup wurde importiert."),ne()}function ne(){const o=Wt(),l=Ke(),f=mn(),d=l?nt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},C=o?Bn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},M=o?Rn(o):[],O=l?l.foodBudgetCents??0:0,N=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,w)=>r+w.plannedCents,0):0,H=l?l.variableBudgetCents??l.variablePositions.reduce((r,w)=>r+w.budgetCents,0):0,I=l?l.miscBudgetCents??0:0,Q=o?o.months.reduce((r,w)=>r+(w.foodBudgetCents??0),0):0,te=o?o.months.reduce((r,w)=>r+(w.goingOutBudgetCents??0),0):0,be=o?o.months.reduce((r,w)=>r+(w.fixedBudgetCents??w.fixedCosts.reduce((K,J)=>K+J.plannedCents,0)),0):0,de=o?o.months.reduce((r,w)=>r+(w.variableBudgetCents??w.variablePositions.reduce((K,J)=>K+J.budgetCents,0)),0):0,Te=o?o.months.reduce((r,w)=>r+(w.miscBudgetCents??0),0):0,ce=l?l.incomes.reduce((r,w)=>r+(yt(w.incomeSource)?w.amountCents:0),0):0,$e=l?l.incomes.reduce((r,w)=>r+(w.incomeSource==="salary"?w.amountCents:0),0):0,at=l?l.incomes.reduce((r,w)=>r+(w.incomeSource==="fresh"?w.amountCents:0),0):0,Se=Fa(),pe=o?Se.get(he(o.year,h.selectedMonth)):void 0,Qe=o?o.months.slice().sort((r,w)=>r.month-w.month)[0]:void 0,q=pe?.carriedFromPreviousCents??0,ot=pe?.hasPreviousMonth??!1,rt=pe?.effectiveIncomeCents??ce,Ze=l?Kt(l):0,It=pe?.netCents??ce-Ze,re=rt-d.totalCents,pt=$e-d.totalCents,Pe=d.totalCents>0?`${($e/d.totalCents*100).toFixed(1)} %`:"-",Ve=q<0?"danger":q>0?"budget-under":"",Oe=It<0?"danger":It>0?"budget-under":"",Ye=re<0?"danger":re>0?"budget-under":"",ze=o?o.months.reduce((r,w)=>r+w.incomes.reduce((K,J)=>K+(yt(J.incomeSource)?J.amountCents:0),0),0):0,lt=o?o.months.reduce((r,w)=>r+w.incomes.reduce((K,J)=>K+(J.incomeSource==="salary"?J.amountCents:0),0),0):0,Rt=o?o.months.reduce((r,w)=>r+w.incomes.reduce((K,J)=>K+(J.incomeSource==="fresh"?J.amountCents:0),0),0):0,Jt=o&&Qe?Se.get(he(o.year,Qe.month))?.carriedFromPreviousCents??0:0,_t=ze+Jt,ct=_t-C.totalCents,Xt=lt-C.totalCents,_e=C.totalCents>0?`${(lt/C.totalCents*100).toFixed(1)} %`:"-",Ee=Jt<0?"danger":Jt>0?"budget-under":"",Le=ct<0?"danger":ct>0?"budget-under":"",Ie=O+N+L+H+I,Ue=O+N,Ft=d.foodCents+d.goingOutCents,Qt=Ue-Ft,Dt=je(Ft,Ue),kt=Q+te+be+de+Te,ut=rt-Ie,Vt=_t-kt,Zt=Ie-d.totalCents,en=kt-C.totalCents,_=r=>r<0?"danger":r>0?"budget-under":"",j=(r,w)=>w<=0?"muted":r>=w?"budget-under":"danger",st=j($e,d.totalCents),kn=j(lt,C.totalCents),se=(r,w)=>{if(w<=0)return"0%";const J=Math.max(0,r)/w*100;return`${Math.min(100,Math.max(0,J)).toFixed(1)}%`},zn=(r,w)=>{if(w<=0)return r>0?100:0;const K=Math.max(0,r)/w*100;return Math.max(0,K)},On=[{label:"Essen",budgetCents:O,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:N,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:H,actualCents:d.variableCents},{label:"Sonstige",budgetCents:I,actualCents:d.miscCents}];Math.max(1,...On.flatMap(r=>[r.budgetCents,r.actualCents]));const Ra=(r,w)=>w<=0?"bar-positive":r<=0||w>r?"bar-negative":"bar-positive",Un=[{label:"Einkommen gesamt",valueCents:rt,className:"bar-income"},{label:"Budget gesamt",valueCents:Ie,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:re,className:re<0?"bar-negative":"bar-positive"}],ur=Math.max(1,...Un.map(r=>Math.abs(r.valueCents))),dr=o?o.months.slice().sort((r,w)=>r.month-w.month).map(r=>{const w=r.foodBudgetCents??0,K=r.goingOutBudgetCents??0,J=r.fixedBudgetCents??r.fixedCosts.reduce((rn,pn)=>rn+pn.plannedCents,0),we=r.variableBudgetCents??r.variablePositions.reduce((rn,pn)=>rn+pn.budgetCents,0),We=r.miscBudgetCents??0,Pt=w+K+J+we+We;return{month:r.month,foodBudgetCents:w,goingOutBudgetCents:K,fixedBudgetCents:J,variableBudgetCents:we,miscBudgetCents:We,totalBudgetCents:Pt}}):[],wt=new Map(dr.map(r=>[r.month,r])),Mt=r=>{if(r.length===0)return null;const w=Math.min(...r),K=Math.max(...r),J=Math.round(r.reduce((we,We)=>we+We,0)/r.length);return{min:w,avg:J,max:K}},dt=o&&o.year===qt()?M.filter(r=>r.month<=vn()):M,va=dt.map(r=>r.summary.foodCents),ma=dt.map(r=>r.summary.goingOutCents),Wn=dt.map(r=>r.summary.fixedCents),ga=dt.map(r=>r.summary.variableCents),Va=dt.map(r=>r.summary.miscCents),fr=dt.map(r=>r.summary.totalCents),ba=dt.map(r=>o?Se.get(he(o.year,r.month))?.plannedBudgetCents??0:0),ya=dt.map(r=>o?Se.get(he(o.year,r.month))?.netCents??0:0),Ya=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((w,K)=>w+(K.incomeSource==="salary"?K.amountCents:0),0)])),Gn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((w,K)=>w+(K.incomeSource==="salary"||K.incomeSource==="fresh"?K.amountCents:0),0)])),Ca=dt.map(r=>Ya.get(r.month)??0),hr=dt.map(r=>Gn.get(r.month)??0),Nt={food:Mt(va),goingOut:Mt(ma),fixed:Mt(Wn),variable:Mt(ga),misc:Mt(Va),total:Mt(fr),salary:Mt(Ca),income:Mt(hr),budget:Mt(ba),net:Mt(ya)},Pr=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Yt={food:va.reduce((r,w)=>r+w,0),goingOut:ma.reduce((r,w)=>r+w,0),fixed:Wn.reduce((r,w)=>r+w,0),variable:ga.reduce((r,w)=>r+w,0),misc:Va.reduce((r,w)=>r+w,0),total:fr.reduce((r,w)=>r+w,0),salary:Ca.reduce((r,w)=>r+w,0),income:hr.reduce((r,w)=>r+w,0),budget:ba.reduce((r,w)=>r+w,0)},pr=Pr.map(({key:r,label:w})=>{const K=Nt.food?.[r]??null,J=Nt.goingOut?.[r]??null,we=Nt.fixed?.[r]??null,We=Nt.variable?.[r]??null,Pt=Nt.misc?.[r]??null,rn=Nt.total?.[r]??null,pn=Nt.salary?.[r]??null,ft=Nt.income?.[r]??null,Xn=Nt.budget?.[r]??null,$a=Nt.net?.[r]??null,$t=$n=>$n===null?"-":p($n);return`<tr>
                  <td><strong>${w}</strong></td>
                  <td>${$t(K)}</td>
                  <td>${$t(J)}</td>
                  <td>${$t(we)}</td>
                  <td>${$t(We)}</td>
                  <td>${$t(Pt)}</td>
                  <td>${$t(rn)}</td>
                  <td>${$t(pn)}</td>
                  <td>${$t(ft)}</td>
                  <td>${$t(Xn)}</td>
                  <td>${$t($a)}</td>
                </tr>`}).join(""),Tr=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${p(Yt.food)}</td>
                  <td>${p(Yt.goingOut)}</td>
                  <td>${p(Yt.fixed)}</td>
                  <td>${p(Yt.variable)}</td>
                  <td>${p(Yt.misc)}</td>
                  <td>${p(Yt.total)}</td>
                  <td>${p(Yt.salary)}</td>
                  <td>${p(Yt.income)}</td>
                  <td>${p(Yt.budget)}</td>
                  <td>-</td>
                </tr>`,za=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,w??0]})),xa=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month),K=r.summary.foodCents+r.summary.goingOutCents,J=(w?.foodBudgetCents??0)+(w?.goingOutBudgetCents??0);return[K,J]})),Ua=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,w]})),Wa=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,w]})),vr=Math.max(1,...M.flatMap(r=>{const w=wt.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,w]})),mr=je(d.fixedCents,L),Ar=je(d.foodCents,O),ka=je(d.goingOutCents,N),zt=je(d.variableCents,H),qe=je(d.miscCents,I),tn=r=>r===0?"-":p(r),In=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(L)}</div>
        <div class="compact-cost-actual ${mr}">${tn(d.fixedCents)}</div>
      </div>`,Or=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(H)}</div>
        <div class="compact-cost-actual ${zt}">${tn(d.variableCents)}</div>
      </div>`,Ga=l?l.fixedCosts.length>0?l.fixedCosts.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${Et(r.name)}</div>
                  <div class="compact-cost-budget">${p(r.plannedCents)}</div>
                  <div class="compact-cost-actual ${je(r.actualCents,r.plannedCents)}">${tn(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,gr=l?l.variablePositions.length>0?l.variablePositions.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${Et(r.name)}${r.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${p(r.budgetCents)}</div>
                  <div class="compact-cost-actual ${je(r.actualCents,r.budgetCents)}">${tn(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Lt=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,Ha=h.hasUnexportedChanges,wn=h.unexportedChangeLog.slice().reverse(),nn=h.persistentAuditLog.slice().sort((r,w)=>w.timestampIso.localeCompare(r.timestampIso)),br=h.lastBackupFileName?Et(h.lastBackupFileName):"-",e={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},t=h.years.slice().sort((r,w)=>r.year-w.year),n=t.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??t[t.length-1]?.year??null,a=typeof n=="number"?t.find(r=>r.year===n):void 0,s=a?a.months.slice().sort((r,w)=>r.month-w.month):[],i=a?Bn(a):e,c=a?ln(a):{salaryIncomeCents:0,freshIncomeCents:0},u=c.salaryIncomeCents+c.freshIncomeCents,b=c.salaryIncomeCents,$=a?Vn(a):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},y=a?_n(a):0,v=a?Mn(a,Se):0,x=y+v,k=a?a.months.reduce((r,w)=>r+Kt(w),0):0,g=x-k,m=x-i.totalCents,B=[{label:"Essen",budgetCents:$.foodCents,actualCents:i.foodCents},{label:"Ausgehen",budgetCents:$.goingOutCents,actualCents:i.goingOutCents},{label:"Fixkosten",budgetCents:$.fixedCents,actualCents:i.fixedCents},{label:"Variable",budgetCents:$.variableCents,actualCents:i.variableCents},{label:"Sonstige",budgetCents:$.miscCents,actualCents:i.miscCents}],E=s.map(r=>{const w=a?Se.get(he(a.year,r.month)):void 0,K=nt(r),J=r.incomes.reduce(($n,Fn)=>$n+(Fn.incomeSource==="salary"?Fn.amountCents:0),0),we=r.incomes.reduce(($n,Fn)=>$n+(yt(Fn.incomeSource)?Fn.amountCents:0),0),We=w?.effectiveIncomeCents??we,Pt=w?.plannedBudgetCents??Kt(r),rn=K.foodCents,pn=K.goingOutCents,ft=rn+pn,Xn=K.totalCents,$a=We-Pt,$t=We-Xn;return{month:r.month,salaryIncomeCents:J,incomeCents:we,foodCents:rn,goingOutCents:pn,foodAndGoingOutCents:ft,effectiveIncomeCents:We,plannedBudgetCents:Pt,actualCostCents:Xn,plannedNetCents:$a,actualNetCents:$t}}),S=Math.max(1,...E.map(r=>r.actualCostCents)),T=Math.max(1,...E.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),F=Math.max(1,...E.map(r=>r.foodAndGoingOutCents)),R=Math.max(1,...E.map(r=>r.foodCents)),V=Math.max(1,...E.map(r=>r.goingOutCents)),A=E.map((r,w,K)=>{const J=w>0?K[w-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Me(r.month),monthShortLabel:Me(r.month).slice(0,3),deltaCents:r.plannedNetCents-J}}),z=A[A.length-1]??null,U=Math.min(0,...A.map(r=>r.plannedNetCents)),D=Math.max(0,...A.map(r=>r.plannedNetCents)),W=Math.max(1,D-U),ue=720,ve=320,ee=18,oe=18,Fe=38,it=56,De=ue-it-oe,an=ve-ee-Fe,Ja=r=>{if(A.length<=1)return it+De/2;const w=r/(A.length-1);return it+w*De},Ir=r=>ee+(D-r)/W*an,hn=A.map((r,w)=>{const K=Ja(w),J=Ir(r.plannedNetCents);return{...r,x:K,y:J,leftPercent:K/ue*100,topPercent:J/ve*100}}),Fr=hn.map((r,w)=>`${w===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),Vr=hn.length>0?`${Fr} L ${hn[hn.length-1]?.x.toFixed(1)} ${(ee+an).toFixed(1)} L ${hn[0]?.x.toFixed(1)} ${(ee+an).toFixed(1)} Z`:"",Yr=5,_s=Array.from({length:Yr},(r,w)=>{const K=w/(Yr-1),J=D-K*W;return{valueCents:Math.round(J/100)*100,y:Ir(J)}}),zr=Ir(0),Ms=A[0]?.plannedNetCents??0,wa=(A[A.length-1]?.plannedNetCents??0)-Ms,Ps=wa<0?"trend-badge-negative":wa>0?"trend-badge-positive":"trend-badge-neutral",Ur=wa<0?"↘":wa>0?"↗":"→",Ts=wa<0?"Abwärtstrend":wa>0?"Aufwärtstrend":"Seitwärts",Hn=t.reduce((r,w)=>{const K=Vn(w);return{foodCents:r.foodCents+K.foodCents,goingOutCents:r.goingOutCents+K.goingOutCents,fixedCents:r.fixedCents+K.fixedCents,variableCents:r.variableCents+K.variableCents,miscCents:r.miscCents+K.miscCents,totalCents:r.totalCents+K.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Jn=t.reduce((r,w)=>{const K=Bn(w);return{foodCents:r.foodCents+K.foodCents,goingOutCents:r.goingOutCents+K.goingOutCents,fixedCents:r.fixedCents+K.fixedCents,variableCents:r.variableCents+K.variableCents,miscCents:r.miscCents+K.miscCents,totalCents:r.totalCents+K.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),As=t.reduce((r,w)=>r+_n(w),0),Os=t[0]?Mn(t[0],Se):0,Wr=As+Os,Gr=Wr-Hn.totalCents,Hr=Wr-Jn.totalCents,Jr=[{label:"Essen",budgetCents:Hn.foodCents,actualCents:Jn.foodCents},{label:"Ausgehen",budgetCents:Hn.goingOutCents,actualCents:Jn.goingOutCents},{label:"Fixkosten",budgetCents:Hn.fixedCents,actualCents:Jn.fixedCents},{label:"Variable",budgetCents:Hn.variableCents,actualCents:Jn.variableCents},{label:"Sonstige",budgetCents:Hn.miscCents,actualCents:Jn.miscCents}],Xr=Math.max(1,...Jr.flatMap(r=>[r.budgetCents,r.actualCents])),et=t.map(r=>{const w=Bn(r),K=Vn(r),J=_n(r),we=ln(r),We=Mn(r,Se),Pt=J+We;return{year:r.year,salaryIncomeCents:we.salaryIncomeCents,freshIncomeCents:we.freshIncomeCents,totalIncomeCents:we.salaryIncomeCents+we.freshIncomeCents,budgetTotalCents:K.totalCents,actualTotalCents:w.totalCents,effectiveIncomeCents:Pt,plannedNetCents:Pt-K.totalCents,actualNetCents:Pt-w.totalCents}}),Is=et.reduce((r,w)=>r+w.totalIncomeCents,0),Fs=et.reduce((r,w)=>r+w.salaryIncomeCents,0),Qr=Math.max(1,...et.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),Ds=Math.max(1,...et.map(r=>r.actualTotalCents)),Ns=Math.max(1,...et.map(r=>r.totalIncomeCents)),Ls=Math.max(1,...et.map(r=>r.salaryIncomeCents)),Zr=Math.max(1,...et.flatMap(r=>[r.totalIncomeCents,r.actualTotalCents])),es=Math.max(1,...et.flatMap(r=>[r.salaryIncomeCents,r.actualTotalCents])),qs=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${t.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${t.map(r=>`<option value="${r.year}" ${r.year===n?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${a?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${p(u)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${p(b)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(k)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(i.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(g)}">${p(g)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(m)}">${p(m)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Ur}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Ps}">${Ur} ${Ts}</span>
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
                                <strong class="${_(z.plannedNetCents)}" data-year-trend-active-net>${p(z.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${p(z.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${p(z.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${_(z.deltaCents)}" data-year-trend-active-delta>${z.deltaCents>=0?"+":""}${p(z.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${ue} ${ve}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${a?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${_s.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${it}" y1="${r.y.toFixed(1)}" x2="${ue-oe}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${it-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${p(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${it}" y1="${zr.toFixed(1)}" x2="${ue-oe}" y2="${zr.toFixed(1)}"></line>
                              ${Vr?`<path class="year-trend-area" d="${Vr}"></path>`:""}
                              ${Fr?`<path class="year-trend-line" d="${Fr}"></path>`:""}
                              ${hn.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${ve-12}" text-anchor="middle">${Et(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${hn.map((r,w)=>`
                                    <button
                                      class="year-trend-point-hit ${w===hn.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${w===hn.length-1?"1":"0"}"
                                      data-month-label="${Et(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Et(r.monthLabel)}: Kalkulierter Saldo ${p(r.plannedNetCents)}, Einkommen ${p(r.effectiveIncomeCents)}, Ausgaben ${p(r.actualCostCents)}"
                                      aria-pressed="${w===hn.length-1?"true":"false"}"
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
                    ${B.map(r=>{const w=zn(r.actualCents,r.budgetCents),K=Math.min(100,w),J=`${w.toFixed(0)}%`,we=r.budgetCents-r.actualCents,We=we<0?"danger":we>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Ra(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${K.toFixed(1)}%" title="${r.label}: ${p(r.actualCents)} von ${p(r.budgetCents)}">
                              <span class="circle-chart-value">${J}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${p(r.budgetCents)} / I ${p(r.actualCents)}</div>
                            <div class="circle-chart-meta ${We}">${we>=0?"+":""}${p(we)}</div>
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
                    ${E.map(r=>{const w=se(r.actualCostCents,S);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                    ${E.map(r=>{const w=se(Math.abs(r.plannedNetCents),T),K=se(Math.abs(r.actualNetCents),T),J=r.plannedNetCents<0?"bar-negative":"bar-positive",we=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Me(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(r.plannedNetCents)} | Ist-Saldo: ${p(r.actualNetCents)}">
                              <div class="bar ${J}" style="width:${w}; opacity: 0.35;"></div>
                              <div class="bar ${we}" style="width:${K}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${p(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${p(r.actualNetCents)}</span>
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
                  ${E.map(r=>`<tr>
                        <td>${Me(r.month)}</td>
                    <td>${p(r.salaryIncomeCents)}</td>
                    <td>${p(r.incomeCents)}</td>
                        <td>${p(r.plannedBudgetCents)}</td>
                        <td>${p(r.actualCostCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${p(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${p(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${t.map(r=>`<option value="${r.year}" ${r.year===n?"selected":""}>${r.year}</option>`).join("")}
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
                    ${E.map(r=>{const w=se(r.foodAndGoingOutCents,F);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                    ${E.map(r=>{const w=se(r.foodCents,R);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                    ${E.map(r=>{const w=se(r.goingOutCents,V);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${p(Is)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${p(Fs)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(Hn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(Jn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(Gr)}">${p(Gr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(Hr)}">${p(Hr)}</div><div class="eval-value"></div></div>
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
                    ${Jr.map(r=>{const w=se(r.budgetCents,Xr),K=se(r.actualCents,Xr),J=Ra(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${p(r.budgetCents)} | Ist: ${p(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${w}"></div>
                              <div class="bar-marker" style="left:${w}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${J}" style="width:${K}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${p(r.budgetCents)}</span>
                              <span class="muted">I ${p(r.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(et.length,1)}, minmax(0, 1fr));">
                    ${et.map(r=>{const w=se(r.actualTotalCents,Ds);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
                              </div>
                            </div>
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
                    ${et.map(r=>{const w=se(Math.abs(r.plannedNetCents),Qr),K=se(Math.abs(r.actualNetCents),Qr),J=r.plannedNetCents<0?"bar-negative":"bar-positive",we=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(r.plannedNetCents)} | Ist-Saldo: ${p(r.actualNetCents)}">
                              <div class="bar ${J}" style="width:${w}; opacity: 0.35;"></div>
                              <div class="bar ${we}" style="width:${K}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${p(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${p(r.actualNetCents)}</span>
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
                    <th>Einkommen (Gehalt + Einkommen) (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${et.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${p(r.salaryIncomeCents)}</td>
                        <td>${p(r.totalIncomeCents)}</td>
                        <td>${p(r.budgetTotalCents)}</td>
                        <td>${p(r.actualTotalCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${p(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${p(r.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(et.length,1)}, minmax(0, 1fr));">
                    ${et.map(r=>{const w=se(r.totalIncomeCents,Ns);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.totalIncomeCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(et.length,1)}, minmax(0, 1fr));">
                    ${et.map(r=>{const w=se(r.salaryIncomeCents,Ls);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${w}"><span class="spark-bar-fill-value">${p(r.salaryIncomeCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(et.length,1)}, minmax(0, 1fr));">
                    ${et.map(r=>{const w=se(r.totalIncomeCents,Zr),K=se(r.actualTotalCents,Zr);return`
                          <div class="spark-bar" title="${r.year}: Einkommen ${p(r.totalIncomeCents)} | Kosten ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${w}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${K}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(et.length,1)}, minmax(0, 1fr));">
                    ${et.map(r=>{const w=se(r.salaryIncomeCents,es),K=se(r.actualTotalCents,es);return`
                          <div class="spark-bar" title="${r.year}: Gehalt ${p(r.salaryIncomeCents)} | Kosten ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${w}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${K}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${r.year}</div>
                          </div>
                        `}).join("")}
                  </div>
                </section>
              </div>
            `}
      </div>
    `,Ks=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,js=`
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
            ${h.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${p(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,ts=h.annualVariableFixedTemplates.reduce((r,w)=>r+w.plannedCents,0),Rs=Math.round(ts/12),Vs=`
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
                <div class="eval-value budget-under">${p(ts)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${p(Rs)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const w=La(r.dueDateIso),K=w?Me(w.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${K}</td>
                    <td>${p(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,ns=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",Ys=h.topModal==="years"?Ks:h.topModal==="fixed"?js:h.topModal==="variable-fixed"?Vs:h.topModal==="dashboard"?qs:"";P.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Ha?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${Es.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${li(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${ns}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${ns}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Ys}
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
                  ${wn.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${wn.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Et(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${nn.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${nn.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Et(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Me(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(r,w)=>w+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Me(r)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${p(ce)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${p($e)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${p(at)}</strong>
              </div>
              <div class="compact-income-row ${Ve}">
                <span>Übernahme aus Vormonat</span>
                <strong>${ot?p(q):"-"}</strong>
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
                  ${Ga}
                  ${In}
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
                  ${gr}
                  ${Or}
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
                    <div class="compact-cost-budget">${p(Ue)}</div>
                    <div class="compact-cost-actual ${Dt}">${tn(Ft)}</div>
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
                    <div class="compact-cost-budget">${p(I)}</div>
                    <div class="compact-cost-actual ${qe}">${tn(d.miscCents)}</div>
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
                  ${On.map(r=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${r.label}"
                            data-budget-cents="${r.budgetCents}"
                            data-actual-cents="${r.actualCents}"
                            role="img"
                            aria-label="${r.label}: Budget ${p(r.budgetCents)} €, Ist ${p(r.actualCents)} €"
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
                  ${Un.map(r=>{const w=se(Math.abs(r.valueCents),ur),K=r.valueCents>=0?"+":"",J=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${p(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${w}"></div>
                          </div>
                          <div class="bar-meta"><span class="${J}">${K}${p(r.valueCents)}</span></div>
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
                      ${M.map(r=>{const w=wt.get(r.month)?.totalBudgetCents??0,K=se(w,za),J=se(r.summary.totalCents,za);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.totalCents)} € | Budget ${p(w)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${J}"><span class="spark-bar-fill-value">${p(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const w=wt.get(r.month),K=(w?.foodBudgetCents??0)+(w?.goingOutBudgetCents??0),J=r.summary.foodCents+r.summary.goingOutCents,we=se(K,xa),We=se(J,xa);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(J)} € | Budget ${p(K)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${we}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${We}"><span class="spark-bar-fill-value">${p(J)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const w=wt.get(r.month)?.fixedBudgetCents??0,K=se(w,Ua),J=se(r.summary.fixedCents,Ua);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.fixedCents)} € | Budget ${p(w)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${J}"><span class="spark-bar-fill-value">${p(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const w=wt.get(r.month)?.variableBudgetCents??0,K=se(w,Wa),J=se(r.summary.variableCents,Wa);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.variableCents)} € | Budget ${p(w)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${J}"><span class="spark-bar-fill-value">${p(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                      ${M.map(r=>{const w=wt.get(r.month)?.miscBudgetCents??0,K=se(w,vr),J=se(r.summary.miscCents,vr);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.miscCents)} € | Budget ${p(w)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${K}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${J}"><span class="spark-bar-fill-value">${p(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Me(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${p(ce)}</div>
                    <div class="eval-value">${p(ze)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${p($e)}</div>
                    <div class="eval-value">${p(lt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${p(at)}</div>
                    <div class="eval-value">${p(Rt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Ve}">${ot?p(q):"-"}</div>
                    <div class="eval-value ${Ee}">${o?p(Jt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${p(rt)}</div>
                    <div class="eval-value">${p(_t)}</div>
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
                    <div class="eval-value">${jt(O,d.foodCents)}</div>
                    <div class="eval-value">${p(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${jt(N,d.goingOutCents)}</div>
                    <div class="eval-value">${p(te)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${jt(L,d.fixedCents)}</div>
                    <div class="eval-value">${p(be)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${jt(H,d.variableCents)}</div>
                    <div class="eval-value">${p(de)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${jt(I,d.miscCents)}</div>
                    <div class="eval-value">${p(Te)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${jt(Ie,d.totalCents)}</div>
                    <div class="eval-value">${p(kt)}</div>
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
                    <div class="eval-value ${Ar}">${p(d.foodCents)}</div>
                    <div class="eval-value">${p(C.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${ka}">${p(d.goingOutCents)}</div>
                    <div class="eval-value">${p(C.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${mr}">${p(d.fixedCents)}</div>
                    <div class="eval-value">${p(C.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${zt}">${p(d.variableCents)}</div>
                    <div class="eval-value">${p(C.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${qe}">${p(d.miscCents)}</div>
                    <div class="eval-value">${p(C.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${p(d.totalCents)}</div>
                    <div class="eval-value">${p(C.totalCents)}</div>
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
                    <div class="eval-value ${_(Zt)}">${p(Zt)}</div>
                    <div class="eval-value ${_(en)}">${p(en)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${_(ut)}">${p(ut)}</div>
                    <div class="eval-value ${_(Vt)}">${p(Vt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Ye}">${p(re)}</div>
                    <div class="eval-value ${Le}">${p(ct)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${_(pt)}">${p(pt)}</div>
                    <div class="eval-value ${_(Xt)}">${p(Xt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${st}">${Pe}</div>
                    <div class="eval-value ${kn}">${_e}</div>
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
                ${M.map((r,w,K)=>{const J=o?Se.get(he(o.year,r.month)):void 0,we=J?.plannedBudgetCents??0,We=J?.netCents??0,Pt=Ya.get(r.month)??0,rn=Gn.get(r.month)??0,pn=We<0?"danger":We>0?"budget-under":"",ft=K[w-1],Xn=ft?.summary.foodCents??null,$a=ft?.summary.goingOutCents??null,$t=ft?.summary.fixedCents??null,$n=ft?.summary.variableCents??null,Fn=ft?.summary.miscCents??null,as=ft?.summary.totalCents??null,rs=ft!==void 0?Ya.get(ft.month)??0:null,ss=ft!==void 0?Gn.get(ft.month)??0:null,is=o&&ft?Se.get(he(o.year,ft.month))?.plannedBudgetCents??0:null,os=Xn===null?null:r.summary.foodCents-Xn,ls=$a===null?null:r.summary.goingOutCents-$a,cs=$t===null?null:r.summary.fixedCents-$t,us=$n===null?null:r.summary.variableCents-$n,ds=Fn===null?null:r.summary.miscCents-Fn,fs=as===null?null:r.summary.totalCents-as,hs=rs===null?null:Pt-rs,ps=ss===null?null:rn-ss,vs=is===null?null:we-is,Sa=St=>St===null?"muted":St>0?"danger":St<0?"budget-under":"muted",ms=St=>St===null?"muted":St>0?"budget-under":St<0?"danger":"muted",zs=St=>St===null?"muted":St>0?"danger":St<0?"budget-under":"muted",Sn=St=>St===null?"(Δ -)":`(Δ ${St>0?"+":""}${p(St)})`,gs=o&&ft?Se.get(he(o.year,ft.month))?.netCents??0:null,Ea=gs===null?null:We-gs,Us=Ea===null?"(Δ -)":`(Δ ${Ea>0?"+":""}${p(Ea)})`,Ws=Ea===null?"muted":Ea<0?"danger":Ea>0?"budget-under":"muted";return`<tr>
                  <td>${Me(r.month)}</td>
                  <td>${p(r.summary.foodCents)} <span class="${Sa(os)}">${Sn(os)}</span></td>
                  <td>${p(r.summary.goingOutCents)} <span class="${Sa(ls)}">${Sn(ls)}</span></td>
                  <td>${p(r.summary.fixedCents)} <span class="${Sa(cs)}">${Sn(cs)}</span></td>
                  <td>${p(r.summary.variableCents)} <span class="${Sa(us)}">${Sn(us)}</span></td>
                  <td>${p(r.summary.miscCents)} <span class="${Sa(ds)}">${Sn(ds)}</span></td>
                  <td>${p(r.summary.totalCents)} <span class="${Sa(fs)}">${Sn(fs)}</span></td>
                  <td>${p(Pt)} <span class="${ms(hs)}">${Sn(hs)}</span></td>
                  <td>${p(rn)} <span class="${ms(ps)}">${Sn(ps)}</span></td>
                  <td>${p(we)} <span class="${zs(vs)}">${Sn(vs)}</span></td>
                  <td class="${pn}">${p(We)} <span class="${Ws}">${Us}</span></td>
                </tr>`}).join("")}
                ${pr}
                ${Tr}
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
                    <td class="${Ve}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${Ct(q)}" />
                    </td>
                    <td>-</td>
                  </tr>${l.incomes.map(r=>`<tr>
                    <td>${r.description}</td>
                    <td>
                      <select data-income-source="${r.id}">
                        <option value="" ${r.incomeSource?"":"selected"}>Nicht zugeordnet</option>
                        <option value="salary" ${r.incomeSource==="salary"?"selected":""}>Gehalt</option>
                        <option value="fresh" ${r.incomeSource==="fresh"?"selected":""}>Neues Einkommen</option>
                        <option value="balance" ${r.incomeSource==="balance"?"selected":""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${p(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${r.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${p(ce)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${p($e)} €</strong>
                </div>
                <div class="column-overview-row ${Ve}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${p(q)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${p(rt)} €</strong>
                </div>
                <div class="column-overview-row ${Oe}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${p(It)} €</strong>
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
                    <strong>${p(Ue)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${p(Ft)} €</strong>
                  </div>
                  <div class="column-overview-row ${Dt}">
                    <span>Diff</span>
                    <strong>${p(Qt)} €</strong>
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
                  ${l?l.days.map(r=>{const w=r.foodCents>0,K=r.goingOutCents>0,J=`${r.isoDate===f?"today-row":""} ${w||K?"day-has-entry":""}`.trim(),we=`amount-input ${w?"day-input-has-value":""}`.trim(),We=`amount-input ${K?"day-input-has-value":""}`.trim();return`<tr class="${J}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${we}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${Ct(r.foodCents)}" /></td>
                      <td><input class="${We}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${Ct(r.goingOutCents)}" /></td>
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
                ${l?l.fixedCosts.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${Ct(r.plannedCents)}" /></td>
                    <td class="${je(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${Ct(r.actualCents)}" /></td>
                    <td class="${je(r.actualCents,r.plannedCents)}">${p(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${At(H,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${Ct(H)}" ${l?"":"disabled"} />
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
                ${l?l.variablePositions.map(r=>`<tr>
                    <td>${r.name}${r.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${Ct(r.budgetCents)}" /></td>
                    <td class="${je(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${Ct(r.actualCents)}" /></td>
                    <td class="${je(r.actualCents,r.budgetCents)}">${p(r.actualCents-r.budgetCents)}</td>
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
                ${l?l.miscCosts.map(r=>`<tr>
                    <td>${r.description}</td>
                    <td>${p(r.amountCents)}</td>
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
          <p class="muted">Letztes verwendetes Backup: ${br}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),Be(),sn(),mt(),Ma()}function Be(){const o=P.querySelector("#theme-select"),l=P.querySelector("#open-years-modal"),f=P.querySelector("#open-fixed-modal"),d=P.querySelector("#open-variable-fixed-modal"),C=P.querySelector("#open-dashboard-modal"),M=P.querySelector("#panel-modal-close"),O=P.querySelector("#panel-modal-backdrop"),N=P.querySelector("#open-unexported-change-log"),L=P.querySelector("#open-persistent-audit-log"),H=P.querySelector("#unexported-change-log-close"),I=P.querySelector("#unexported-change-log-backup"),Q=P.querySelector("#unexported-change-log-backdrop"),te=P.querySelector("#persistent-audit-log-close"),be=P.querySelector("#persistent-audit-log-backdrop"),de=P.querySelector("#new-year"),Te=P.querySelector("#create-year"),ce=P.querySelector("#year-select"),$e=P.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;ws(_)&&ra(_)}),l?.addEventListener("click",()=>{ea("years")}),f?.addEventListener("click",()=>{ea("fixed")}),d?.addEventListener("click",()=>{ea("variable-fixed")}),C?.addEventListener("click",()=>{ea("dashboard")}),N?.addEventListener("click",()=>{ta()}),L?.addEventListener("click",()=>{Dn()}),H?.addEventListener("click",()=>{na()}),I?.addEventListener("click",async()=>{try{await ja()}catch(_){console.error("Backup-Export fehlgeschlagen",_),me("Backup konnte nicht exportiert werden.","error")}}),Q?.addEventListener("click",_=>{_.target===Q&&na()}),te?.addEventListener("click",()=>{aa()}),be?.addEventListener("click",_=>{_.target===be&&aa()}),P.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const j=_.dataset.dashboardTab;j!=="year"&&j!=="food"&&j!=="all"||(h.dashboardTab=j,ne())})});const at=P.querySelector("#dashboard-year-select");at?.addEventListener("change",()=>{const _=Number.parseInt(at.value,10);Number.isInteger(_)&&(h.dashboardYear=_,ne())}),M?.addEventListener("click",()=>{_a()}),O?.addEventListener("click",_=>{_.target===O&&_a()}),h.topModal&&window.setTimeout(()=>{M?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{H?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{te?.focus()},0),Te?.addEventListener("click",async()=>{const _=Number.parseInt(de?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await sa(_)}),ce?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ce.value,10),h.selectedMonth=vn(),ne()}),$e?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt($e.value,10),ne()});const Se=P.querySelector("#fixed-template-name"),pe=P.querySelector("#fixed-template-amount"),Qe=P.querySelector("#add-fixed-template"),q=P.querySelector("#cancel-fixed-template-edit"),ot=P.querySelector("#annual-variable-fixed-name"),rt=P.querySelector("#annual-variable-fixed-date"),Ze=P.querySelector("#annual-variable-fixed-amount"),It=P.querySelector("#add-annual-variable-fixed-template");Qe?.addEventListener("click",async()=>{const _=Se?.value??"",j=Ne(pe?.value??"0");await _r(_,j),Se&&(Se.value=""),pe&&(pe.value="")}),q?.addEventListener("click",()=>{Tn()}),It?.addEventListener("click",async()=>{const _=ot?.value??"",j=rt?.value??"",st=Ne(Ze?.value??"0");await ua(_,j,st),ot&&(ot.value=""),rt&&(rt.value=""),Ze&&(Ze.value="")}),P.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeAnnualVariableFixedTemplate;j&&await Mr(j)})}),P.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const j=_.dataset.editFixedTemplate;j&&un(j)})}),P.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeFixedTemplate;j&&await dn(j)})}),P.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.dayFood;j&&await Gt(j,"foodCents",Ne(_.value))})}),P.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.dayGoing;j&&await Gt(j,"goingOutCents",Ne(_.value))})}),P.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.fixedActual;j&&await ar(j,Ne(_.value))})}),P.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.fixedPlanned;j&&await yn(j,Ne(_.value))})});const re=P.querySelector("#fixed-budget");re?.addEventListener("click",_=>{_.preventDefault(),re.blur(),tt(re)}),re?.addEventListener("change",async()=>{await Re(Ne(re.value))});const pt=P.querySelector("#food-budget");pt?.addEventListener("click",_=>{_.preventDefault(),pt.blur(),tt(pt)}),pt?.addEventListener("change",async()=>{await Cn(Ne(pt.value))});const Pe=P.querySelector("#going-out-budget");Pe?.addEventListener("click",_=>{_.preventDefault(),Pe.blur(),tt(Pe)}),Pe?.addEventListener("change",async()=>{await Ht(Ne(Pe.value))}),P.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{wr()});const Oe=P.querySelector("#misc-budget");Oe?.addEventListener("click",_=>{_.preventDefault(),Oe.blur(),tt(Oe)}),Oe?.addEventListener("change",async()=>{await sr(Ne(Oe.value))});const Ye=P.querySelector("#variable-budget");Ye?.addEventListener("click",_=>{_.preventDefault(),Ye.blur(),tt(Ye)}),Ye?.addEventListener("change",async()=>{await An(Ne(Ye.value))});const ze=P.querySelector("#variable-position-name"),lt=P.querySelector("#variable-position-budget"),Rt=P.querySelector("#add-variable-position"),Jt=P.querySelector("#add-variable-position-recurring"),_t=P.querySelector("#misc-description"),ct=P.querySelector("#misc-amount"),Xt=P.querySelector("#add-misc"),_e=P.querySelector("#add-misc-recurring"),Ee=P.querySelector("#income-description"),Le=P.querySelector("#income-source"),Ie=P.querySelector("#income-amount"),Ue=P.querySelector("#add-income"),Ft=P.querySelector("#add-income-recurring"),Qt=P.querySelector("#fixed-cost-name"),Dt=P.querySelector("#fixed-cost-budget"),kt=P.querySelector("#add-fixed-cost"),ut=P.querySelector("#carryover-override");ut?.addEventListener("click",_=>{_.preventDefault(),ut.blur(),tt(ut)}),ut?.addEventListener("change",async()=>{const _=ut.value;if(!_.trim()){await da(null);return}await da(Ne(_))}),kt?.addEventListener("click",async()=>{const _=Ne(Dt?.value??"0");await rr(Qt?.value??"",_),Qt&&(Qt.value=""),Dt&&(Dt.value="")}),Rt?.addEventListener("click",async()=>{const _=Ne(lt?.value??"0");await fa(ze?.value??"",_,!1),ze&&(ze.value=""),lt&&(lt.value="")}),Jt?.addEventListener("click",async()=>{const _=Ne(lt?.value??"0");await fa(ze?.value??"",_,!0),ze&&(ze.value=""),lt&&(lt.value="")}),Xt?.addEventListener("click",async()=>{const _=Ne(ct?.value??"0");await fe(_t?.value??"",_,!1),_t&&(_t.value=""),ct&&(ct.value="")}),_e?.addEventListener("click",async()=>{const _=Ne(ct?.value??"0");await fe(_t?.value??"",_,!0),_t&&(_t.value=""),ct&&(ct.value="")}),Ue?.addEventListener("click",async()=>{const _=Ne(Ie?.value??"0"),j=Le?.value,st=j==="balance"||j==="fresh"||j==="salary"?j:void 0;await Ka(Ee?.value??"",_,st,!1),Ee&&(Ee.value=""),Ie&&(Ie.value=""),Le&&(Le.value="salary")}),Ft?.addEventListener("click",async()=>{const _=Ne(Ie?.value??"0"),j=Le?.value,st=j==="balance"||j==="fresh"||j==="salary"?j:void 0;await Ka(Ee?.value??"",_,st,!0),Ee&&(Ee.value=""),Ie&&(Ie.value=""),Le&&(Le.value="salary")}),P.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const j=_.dataset.incomeSource;if(!j)return;const st=_.value;await pa(j,st==="balance"||st==="fresh"||st==="salary"?st:void 0)})}),P.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.variablePositionBudget;j&&await ir(j,Ne(_.value))})}),P.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",j=>{j.preventDefault(),_.blur(),tt(_)}),_.addEventListener("change",async()=>{const j=_.dataset.variablePositionActual;j&&await xn(j,Ne(_.value))})}),P.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeVariablePosition;j&&await ha(j)})}),P.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.moveVariablePositionNext;j&&await or(j)})}),P.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeFixed;j&&await qa(j)})}),P.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeIncome;j&&await Yn(j)})}),P.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const j=_.dataset.removeMisc;j&&await lr(j)})});const Vt=P.querySelector("#backup-export"),Zt=P.querySelector("#backup-import");P.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Vt?.addEventListener("click",async()=>{await ja()}),Zt?.addEventListener("change",async()=>{const _=Zt.files?.[0];if(_){try{await cr(_)}catch(j){console.error("Backup-Import fehlgeschlagen",j),me("Backup konnte nicht importiert werden.","error")}Zt.value=""}})}return{init:Br}}const ui="modulepreload",di=function(P){return"/habu26/"+P},Ss={},fi=function(h,Ae,G){let ye=Promise.resolve();if(Ae&&Ae.length>0){let ht=function(He){return Promise.all(He.map(le=>Promise.resolve(le).then(xt=>({status:"fulfilled",value:xt}),xt=>({status:"rejected",reason:xt}))))};var xe=ht;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),Ce=ie?.nonce||ie?.getAttribute("nonce");ye=ht(Ae.map(He=>{if(He=di(He),He in Ss)return;Ss[He]=!0;const le=He.endsWith(".css"),xt=le?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${He}"]${xt}`))return;const vt=document.createElement("link");if(vt.rel=le?"stylesheet":ui,le||(vt.as="script"),vt.crossOrigin="",vt.href=He,Ce&&vt.setAttribute("nonce",Ce),document.head.appendChild(vt),le)return new Promise((mt,sn)=>{vt.addEventListener("load",mt),vt.addEventListener("error",()=>sn(new Error(`Unable to preload CSS for ${He}`)))})}))}function ae(ie){const Ce=new Event("vite:preloadError",{cancelable:!0});if(Ce.payload=ie,window.dispatchEvent(Ce),!Ce.defaultPrevented)throw ie}return ye.then(ie=>{for(const Ce of ie||[])Ce.status==="rejected"&&ae(Ce.reason);return h().catch(ae)})};function hi(P={}){const{immediate:h=!1,onNeedRefresh:Ae,onOfflineReady:G,onRegistered:ye,onRegisteredSW:ae,onRegisterError:xe}=P;let ie,Ce;const ht=async(le=!0)=>{await Ce};async function He(){if("serviceWorker"in navigator){if(ie=await fi(async()=>{const{Workbox:le}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:le}},[]).then(({Workbox:le})=>new le("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(le=>{xe?.(le)}),!ie)return;ie.addEventListener("activated",le=>{(le.isUpdate||le.isExternal)&&window.location.reload()}),ie.addEventListener("installed",le=>{le.isUpdate||G?.()}),ie.register({immediate:h}).then(le=>{ae?ae("/habu26/sw.js",le):ye?.(le)}).catch(le=>{xe?.(le)})}}return Ce=He(),ht}function pi(){hi({immediate:!0})}const Bs=document.getElementById("app");if(!Bs)throw new Error("App-Container nicht gefunden.");ci(Bs).init();pi();
