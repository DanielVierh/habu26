(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ve of document.querySelectorAll('link[rel="modulepreload"]'))X(ve);new MutationObserver(ve=>{for(const ae of ve)if(ae.type==="childList")for(const Ce of ae.addedNodes)Ce.tagName==="LINK"&&Ce.rel==="modulepreload"&&X(Ce)}).observe(document,{childList:!0,subtree:!0});function Ae(ve){const ae={};return ve.integrity&&(ae.integrity=ve.integrity),ve.referrerPolicy&&(ae.referrerPolicy=ve.referrerPolicy),ve.crossOrigin==="use-credentials"?ae.credentials="include":ve.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function X(ve){if(ve.ep)return;ve.ep=!0;const ae=Ae(ve);fetch(ve.href,ae)}})();const Os=[1,2,3,4,5,6,7,8,9,10,11,12];function qr(){return new Date().toISOString()}function Ot(P){const h=Math.random().toString(36).slice(2,10);return`${P}_${Date.now()}_${h}`}function Fs(P,h){const Ae=new Date(P,h,0).getDate(),X=[];for(let ve=1;ve<=Ae;ve+=1){const ae=new Date(Date.UTC(P,h-1,ve));X.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return X}function Ds(P){return P.map(h=>({id:Ot("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function os(P,h,Ae){const X=h.reduce((ae,Ce)=>ae+Ce.plannedCents,0),ve=Os.map(ae=>({month:ae,days:Fs(P,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Ds(h),fixedBudgetCents:X,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:P,createdAt:qr(),templateVersion:Ae,months:ve}}function ls(P,h){return{id:Ot("expense"),description:P,amountCents:h,createdAt:qr()}}function cs(P,h,Ae){const X={id:Ot("income"),description:P,amountCents:h,createdAt:qr()};return Ae?{...X,incomeSource:Ae}:X}var Is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ns(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var yr={exports:{}},Ls=yr.exports,us;function qs(){return us||(us=1,(function(P,h){((Ae,X)=>{P.exports=X()})(Ls,function(){var Ae=function(e,t){return(Ae=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},X=function(){return(X=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ve(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Is,Ce=Object.keys,re=Array.isArray;function me(e,t){return typeof t=="object"&&Ce(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var dt=Object.getPrototypeOf,Ue={}.hasOwnProperty;function oe(e,t){return Ue.call(e,t)}function bt(e,t){typeof t=="function"&&(t=t(dt(e))),(typeof Reflect>"u"?Ce:Reflect.ownKeys)(t).forEach(function(n){ht(e,n,t[n])})}var ft=Object.defineProperty;function ht(e,t,n,a){ft(e,t,me(n&&oe(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function en(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ht(e.prototype,"constructor",e),{extend:bt.bind(null,e.prototype)}}}}var ea=Object.getOwnPropertyDescriptor,Ea=[].slice;function ta(e,t,n){return Ea.call(e,t,n)}function na(e,t){return t(e)}function Nn(e){if(!e)throw new Error("Assertion Failed")}function aa(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function zt(e,t){if(typeof t=="string"&&oe(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=zt(e,t[a]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:zt(c,t.substr(u+1))}function pt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Nn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)pt(e,t[a],n[a])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?re(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:pt(c=(c=e[i])&&oe(e,i)?c:e[i]={},u,n)):n===void 0?re(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ba(e){var t,n={};for(t in e)oe(e,t)&&(n[t]=e[t]);return n}var wr=[].concat;function _a(e){return wr.apply([],e)}var Lt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(_a([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),Ja=new Set(Lt.map(function(e){return ae[e]})),Ln=null;function vt(e){return Ln=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Ln.get(n);if(a)return a;if(re(n)){a=[],Ln.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Ja.has(n.constructor))a=n;else{var c,u=dt(n);for(c in a=u===Object.prototype?{}:Object.create(u),Ln.set(n,a),n)oe(n,c)&&(a[c]=t(n[c]))}return a})(e),Ln=null,e}var qn={}.toString;function Ma(e){return qn.call(e).slice(8,-1)}var Pa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",kr=typeof Pa=="symbol"?function(e){var t;return e!=null&&(t=e[Pa])&&t.apply(e)}:function(){return null};function tn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var at={};function ue(e){var t,n,a,s;if(arguments.length===1){if(re(e))return e.slice();if(this===at&&typeof e=="string")return[e];if(s=kr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var hn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Lt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],rt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Lt),Xa={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function pn(e,t){this.name=e,this.message=t}function Qa(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function Bt(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Qa(e,t)}function Sn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Qa(e,this.failures)}en(pn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),en(Bt).from(pn),en(Sn).from(pn);var ra=rt.reduce(function(e,t){return e[t]=t+"Error",e},{}),$r=pn,Z=rt.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Xa[t]||n,this.inner=null)}return en(a).from($r),e[t]=a,e},{}),Za=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,Lt.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));Lt=rt.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function xe(){}function Kn(e){return e}function Sr(e,t){return e==null||e===Kn?t:function(n){return t(e(n))}}function vn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function er(e,t){return e===xe?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?vn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?vn(s,this.onerror):s),i!==void 0?i:n}}function Er(e,t){return e===xe?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?vn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?vn(a,this.onerror):a)}}function Br(e,t){return e===xe?t:function(s){var a=e.apply(this,arguments),s=(me(s,a),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?vn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?vn(i,this.onerror):i),a===void 0?c===void 0?void 0:c:me(a,c)}}function Ta(e,t){return e===xe?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Rn(e,t){return e===xe?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}Lt.ModifyError=Bt,Lt.DexieError=pn,Lt.BulkError=Sn;var yt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Aa(e){yt=e}var Ut={},Re=100,jn=typeof Promise>"u"?[]:(rt=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[jn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),dt(jn),rt]:[rt,dt(rt),rt]),rt=jn[0],Fn=jn[1],Fn=Fn&&Fn.then,qt=rt&&rt.constructor,En=!!jn[2],Vn=function(e,t){Gt.push([e,t]),Bn&&(queueMicrotask(tr),Bn=!1)},Yn=!0,Bn=!0,Wt=[],sa=[],ot=Kn,nn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xe,pgp:!1,env:{},finalize:xe},H=nn,Gt=[],mn=0,gn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==Ut)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Ct(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var c=a._lib&&rn();i&&typeof i.then=="function"?n(a,function(u,m){i instanceof z?i._then(u,m):i.then(u,m)}):(a._state=!0,a._value=i,de(a)),c&&bn()}},Ct.bind(null,a))}catch(i){Ct(a,i)}})(this,e)}var ia={get:function(){var e=H,t=ca;function n(a,s){var i=this,c=!e.global&&(e!==H||t!==ca),u=c&&!on(),m=new z(function($,b){an(i,new Xe(rr(a,e,c,u),rr(s,e,c,u),$,b,e))});return this._consoleTask&&(m._consoleTask=this._consoleTask),m}return n.prototype=Ut,n},set:function(e){ht(this,"then",e&&e.prototype===Ut?ia:{get:function(){return e},set:ia.set})}};function Xe(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function Ct(e,t){var n,a;sa.push(t),e._state===null&&(n=e._lib&&rn(),t=ot(t),e._state=!1,e._value=t,a=e,Wt.some(function(s){return s._value===a._value})||Wt.push(a),de(e),n)&&bn()}function de(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)an(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),mn===0&&(++mn,Vn(function(){--mn==0&&Kt()},[]))}function an(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++mn,Vn(Oa,[n,e,t])}}function Oa(e,t,n){try{var a,s=t._value;!t._state&&sa.length&&(sa=[]),a=yt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||sa.indexOf(s)!==-1||(i=>{for(var c=Wt.length;c;)if(Wt[--c]._value===i._value)return Wt.splice(c,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--mn==0&&Kt(),--n.psd.ref||n.psd.finalize()}}function tr(){yn(nn,function(){rn()&&bn()})}function rn(){var e=Yn;return Bn=Yn=!1,e}function bn(){var e,t,n;do for(;0<Gt.length;)for(e=Gt,Gt=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<Gt.length);Bn=Yn=!0}function Kt(){for(var e=Wt,t=(Wt=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),gn.slice(0)),n=t.length;n;)t[--n]()}function xt(e){return new z(Ut,!1,e)}function Me(e,t){var n=H;return function(){var a=rn(),s=H;try{return ln(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{ln(s,!1),a&&bn()}}}bt(z.prototype,{then:ia,_then:function(e,t){an(this,new Xe(null,null,e,t,H))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:xt)(a)}):this.then(null,function(a){return(a&&a.name===t?n:xt)(a)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return xt(t)})})},timeout:function(e,t){var n=this;return e<1/0?new z(function(a,s){var i=setTimeout(function(){return s(new Z.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ht(z.prototype,Symbol.toStringTag,"Dexie.Promise"),nn.env=ar(),bt(z,{all:function(){var e=ue.apply(null,arguments).map(ua);return new z(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return z.resolve(s).then(function(c){e[i]=c,--a||t(e)},n)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,n){e.then(t,n)}):new z(Ut,!0,e)},reject:xt,race:function(){var e=ue.apply(null,arguments).map(ua);return new z(function(t,n){e.map(function(a){return z.resolve(a).then(t,n)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return ca}},newPSD:sn,usePSD:yn,scheduler:{get:function(){return Vn},set:function(e){Vn=e}},rejectionMapper:{get:function(){return ot},set:function(e){ot=e}},follow:function(e,t){return new z(function(n,a){return sn(function(s,i){var c=H;c.unhandleds=[],c.onunhandled=i,c.finalize=vn(function(){var u,m=this;u=function(){m.unhandleds.length===0?s():i(m.unhandleds[0])},gn.push(function $(){u(),gn.splice(gn.indexOf($),1)}),++mn,Vn(function(){--mn==0&&Kt()},[])},c.finalize),e()},t,n,a)})}}),qt&&(qt.allSettled&&ht(z,"allSettled",function(){var e=ue.apply(null,arguments).map(ua);return new z(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return z.resolve(s).then(function(c){return a[i]={status:"fulfilled",value:c}},function(c){return a[i]={status:"rejected",reason:c}}).then(function(){return--n||t(a)})})})}),qt.any&&typeof AggregateError<"u"&&ht(z,"any",function(){var e=ue.apply(null,arguments).map(ua);return new z(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,c){return z.resolve(i).then(function(u){return t(u)},function(u){s[c]=u,--a||n(new AggregateError(s))})})})}),qt.withResolvers)&&(z.withResolvers=qt.withResolvers);var Qe={awaits:0,echoes:0,id:0},_r=0,oa=[],la=0,ca=0,Mr=0;function sn(e,c,n,a){var s=H,i=Object.create(s),c=(i.parent=s,i.ref=0,i.global=!1,i.id=++Mr,nn.env,i.env=En?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},c&&me(i,c),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},yn(i,e,n,a));return i.ref===0&&i.finalize(),c}function _n(){return Qe.id||(Qe.id=++_r),++Qe.awaits,Qe.echoes+=Re,Qe.id}function on(){return!!Qe.awaits&&(--Qe.awaits==0&&(Qe.id=0),Qe.echoes=Qe.awaits*Re,!0)}function ua(e){return Qe.echoes&&e&&e.constructor===qt?(_n(),e.then(function(t){return on(),t},function(t){return on(),je(t)})):e}function nr(){var e=oa[oa.length-1];oa.pop(),ln(e,!1)}function ln(e,t){var n,a,s=H;(t?!Qe.echoes||la++&&e===H:!la||--la&&e===H)||queueMicrotask(t?(function(i){++ca,Qe.echoes&&--Qe.echoes!=0||(Qe.echoes=Qe.awaits=Qe.id=0),oa.push(H),ln(i,!0)}).bind(null,e):nr),e!==H&&(H=e,s===nn&&(nn.env=ar()),En)&&(n=nn.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(ae,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function ar(){var e=ae.Promise;return En?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function yn(e,t,n,a,s){var i=H;try{return ln(e,!0),t(n,a,s)}finally{ln(i,!1)}}function rr(e,t,n,a){return typeof e!="function"?e:function(){var s=H;n&&_n(),ln(t,!0);try{return e.apply(this,arguments)}finally{ln(s,!1),a&&queueMicrotask(on)}}}function Fa(e){Promise===qt&&Qe.echoes===0?la===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Fn).indexOf("[native code]")===-1&&(_n=on=xe);var je=z.reject,Cn="￿",Ht="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",sr="String expected.",Rt=[],zn="__dbnames",da="readonly",Da="readwrite";function xn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ir={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function fa(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=vt(t))[e],t}}function Ia(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function le(e,t){try{var n=Na(e),a=Na(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=or(e),i=or(t),c=s.length,u=i.length,m=c<u?c:u,$=0;$<m;++$)if(s[$]!==i[$])return s[$]<i[$]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var b=e,p=t,x=b.length,w=p.length,y=x<w?x:w,g=0;g<y;++g){var E=le(b[g],p[g]);if(E!==0)return E}return x===w?0:x<w?-1:1}}catch{}return NaN}function Na(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ma(e))==="ArrayBuffer")?"binary":t}function or(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function ha(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}lr.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(re(n))return ve(ve([],re(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(re(a))return re(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var Mn=lr;function lr(e){this["@@propmod"]=e}function ne(e,t){for(var n=Ce(t),a=n.length,s=!1,i=0;i<a;++i){var c=n[i],u=t[c],m=zt(e,c);u instanceof Mn?(pt(e,c,u.execute(m)),s=!0):m!==u&&(pt(e,c,u),s=!0)}return s}o.prototype._trans=function(e,t,n){var a=this._tx||H.trans,s=this.name,i=yt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c($,b,p){if(p.schema[s])return t(p.idbtrans,p);throw new Z.NotFound("Table "+s+" not part of transaction")}var u=rn();try{var m=a&&a.db._novip===this.db._novip?a===H.trans?a._promise(e,c,n):sn(function(){return a._promise(e,c,n)},{trans:a,transless:H.transless||H}):(function $(b,p,x,w){if(b.idbdb&&(b._state.openComplete||H.letThrough||b._vip)){var y=b._createTransaction(p,x,b._dbSchema);try{y.create(),b._state.PR1398_maxLoop=3}catch(g){return g.name===ra.InvalidState&&b.isOpen()&&0<--b._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),b.close({disableAutoOpen:!1}),b.open().then(function(){return $(b,p,x,w)})):je(g)}return y._promise(p,function(g,E){return sn(function(){return H.trans=y,w(g,E,y)})}).then(function(g){if(p==="readwrite")try{y.idbtrans.commit()}catch{}return p==="readonly"?g:y._completion.then(function(){return g})})}if(b._state.openComplete)return je(new Z.DatabaseClosed(b._state.dbOpenError));if(!b._state.isBeingOpened){if(!b._state.autoOpen)return je(new Z.DatabaseClosed);b.open().catch(xe)}return b._state.dbReadyPromise.then(function(){return $(b,p,x,w)})})(this.db,e,[this.name],c);return i&&(m._consoleTask=i,m=m.catch(function($){return console.trace($),je($)})),m}finally{u&&bn()}},o.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?je(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},o.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(re(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Ce(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function($){return 0<=u.keyPath.indexOf($)})){for(var m=0;m<t.length;++m)if(t.indexOf(u.keyPath[m])===-1)return!1;return!0}return!1}).sort(function(u,m){return u.keyPath.length-m.keyPath.length})[0];if(n&&this.db._maxKey!==Cn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&yt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(u,m){return le(u,m)===0}var c=t.reduce(function(b,m){var $=b[0],b=b[1],p=a[m],x=e[m];return[$||p,$||!p?xn(b,p&&p.multi?function(w){return w=zt(w,m),re(w)&&w.some(function(y){return s(x,y)})}:function(w){return s(x,zt(w,m))}):b]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},o.prototype.filter=function(e){return this.toCollection().and(e)},o.prototype.count=function(e){return this.toCollection().count(e)},o.prototype.offset=function(e){return this.toCollection().offset(e)},o.prototype.limit=function(e){return this.toCollection().limit(e)},o.prototype.each=function(e){return this.toCollection().each(e)},o.prototype.toArray=function(e){return this.toCollection().toArray(e)},o.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},o.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,re(e)?"[".concat(e.join("+"),"]"):e))},o.prototype.reverse=function(){return this.toCollection().reverse()},o.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof Ia&&(e=(c=>{var u=b,m=c;if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");function $(){this.constructor=u}function b(){return c!==null&&c.apply(this,arguments)||this}return Ae(u,m),u.prototype=m===null?Object.create(m):($.prototype=m.prototype,new $),Object.defineProperty(b.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),b.prototype.table=function(){return n},b})(e)),new Set),s=e.prototype;s;s=dt(s))Object.getOwnPropertyNames(s).forEach(function(c){return a.add(c)});function i(c){if(!c)return c;var u,m=Object.create(e.prototype);for(u in c)if(!a.has(u))try{m[u]=c[u]}catch{}return m}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},o.prototype.defineClass=function(){return this.mapToClass(function(e){me(this,e)})},o.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=fa(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?z.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{pt(e,i,u)}catch{}return u})},o.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var c=i??{};return ne(c,t),a&&pt(c,a,e),n.core.mutate({trans:s,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?z.reject(u.failures[0]):!!i})})})},o.prototype.update=function(e,t){return typeof e!="object"||re(e)?this.where(":id").equals(e).modify(t):(e=zt(e,this.schema.primKey.keyPath))===void 0?je(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},o.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=fa(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?z.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{pt(e,i,u)}catch{}return u})},o.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return ha(t,[e],a)}).then(function(a){return a.numFailures?z.reject(a.failures[0]):void 0})})},o.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:ir}).then(function(n){return ha(e,null,n)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},o.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},o.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,$=u.auto,u=u.keyPath;if(u&&s)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var m=e.length,$=u&&$?e.map(fa(u)):e;return a.core.mutate({trans:c,type:"add",keys:s,values:$,wantResults:i}).then(function(b){var p=b.numFailures,x=b.failures;if(p===0)return i?b.results:b.lastResult;throw new Sn("".concat(a.name,".bulkAdd(): ").concat(p," of ").concat(m," operations failed"),x)})})},o.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,$=u.auto,u=u.keyPath;if(u&&s)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var m=e.length,$=u&&$?e.map(fa(u)):e;return a.core.mutate({trans:c,type:"put",keys:s,values:$,wantResults:i}).then(function(b){var p=b.numFailures,x=b.failures;if(p===0)return i?b.results:b.lastResult;throw new Sn("".concat(a.name,".bulkPut(): ").concat(p," of ").concat(m," operations failed"),x)})})},o.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(c){return c.key}),s=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:a,cache:"clone"}).then(function(u){var m=[],$=[],b=(e.forEach(function(p,x){var w=p.key,y=p.changes,g=u[x];if(g){for(var E=0,B=Object.keys(y);E<B.length;E++){var k=B[E],T=y[k];if(k===t.schema.primKey.keyPath){if(le(T,w)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else pt(g,k,T)}i.push(x),m.push(w),$.push(g)}}),m.length);return n.mutate({trans:c,type:"put",keys:m,values:$,updates:{keys:a,changeSpecs:s}}).then(function(p){var x=p.numFailures,w=p.failures;if(x===0)return b;for(var y=0,g=Object.keys(w);y<g.length;y++){var E,B=g[y],k=i[Number(B)];k!=null&&(E=w[B],delete w[B],w[k]=E)}throw new Sn("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(b," operations failed"),w)})})})},o.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return ha(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new Sn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var cr=o;function o(){}function l(e){function t(c,u){if(u){for(var m=arguments.length,$=new Array(m-1);--m;)$[m-1]=arguments[m];return n[c].subscribe.apply(null,$),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(c,u,m){var $,b;if(typeof c!="object")return u=u||Ta,b={subscribers:[],fire:m=m||xe,subscribe:function(p){b.subscribers.indexOf(p)===-1&&(b.subscribers.push(p),b.fire=u(b.fire,p))},unsubscribe:function(p){b.subscribers=b.subscribers.filter(function(x){return x!==p}),b.fire=b.subscribers.reduce(u,m)}},n[c]=t[c]=b;Ce($=c).forEach(function(p){var x=$[p];if(re(x))i(p,$[p][0],$[p][1]);else{if(x!=="asap")throw new Z.InvalidArgument("Invalid event config");var w=i(p,Kn,function(){for(var y=arguments.length,g=new Array(y);y--;)g[y]=arguments[y];w.subscribers.forEach(function(E){aa(function(){E.apply(null,g)})})})}})}}function f(e,t){return en(t).from({prototype:e}),t}function d(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function C(e,t){e.filter=xn(e.filter,t)}function M(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return xn(a(),t())}:t,e.justLimit=n&&!a}function A(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function q(e,t,n){var a=A(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function I(e,t,n,a){var s,i,c=e.replayFilter?xn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(u,m,$){var b,p;c&&!c(m,$,function(x){return m.stop(x)},function(x){return m.fail(x)})||((p=""+(b=m.primaryKey))=="[object ArrayBuffer]"&&(p=""+new Uint8Array(b)),oe(s,p))||(s[p]=!0,t(u,m,$))},Promise.all([e.or._iterate(i,n),J(q(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):J(q(e,a,n),xn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function J(e,t,n,a){var s=Me(a?function(i,c,u){return n(a(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=xe},function(u){i.fail(u),c=xe})||s(i.value,i,function(u){return c=u}),c()})})}N.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,je.bind(null,n.error)):n.table._trans("readonly",e).then(t)},N.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,je.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},N.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=xn(t.algorithm,e)},N.prototype._iterate=function(e,t){return I(this._ctx,e,t,this._ctx.table.core)},N.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&me(n,e),t._ctx=n,t},N.prototype.raw=function(){return this._ctx.valueMapper=null,this},N.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return I(t,e,n,t.table.core)})},N.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return d(s,!0)?i.count({trans:n,query:{index:A(s,i.schema),range:s.range}}).then(function(c){return Math.min(c,s.limit)}):(a=0,I(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},N.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(m,$){return $?i(m[n[$]],$-1):m[a]}var c=this._ctx.dir==="next"?1:-1;function u(m,$){return le(i(m,s),i($,s))*c}return this.toArray(function(m){return m.sort(u)}).then(t)},N.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,c=t._ctx;return c.dir==="next"&&d(c,!0)&&0<c.limit?(a=c.valueMapper,s=A(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:s,range:c.range}}).then(function(u){return u=u.result,a?u.map(a):u})):(i=[],I(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},N.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,d(t)?M(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):M(t,function(){var n=e;return function(){return--n<0}})),this},N.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),M(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},N.prototype.until=function(e,t){return C(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},N.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},N.prototype.last=function(e){return this.reverse().first(e)},N.prototype.filter=function(e){var t;return C(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=xn(t.isMatch,e),this},N.prototype.and=function(e){return this.filter(e)},N.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},N.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},N.prototype.desc=function(){return this.reverse()},N.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},N.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},N.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},N.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},N.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&d(t,!0)&&0<t.limit)return this._read(function(a){var s=A(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},N.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},N.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},N.prototype.lastKey=function(e){return this.reverse().firstKey(e)},N.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},C(this._ctx,function(a){var a=a.primaryKey.toString(),s=oe(e,a);return e[a]=!0,!s})),this},N.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(g,E){var B=E.failures;x+=g-E.numFailures;for(var k=0,T=Ce(B);k<T.length;k++){var O=T[k];p.push(B[O])}}var i=typeof e=="function"?e:function(g){return ne(g,e)},c=n.table.core,b=c.schema.primaryKey,u=b.outbound,m=b.extractKey,$=200,b=t.db._options.modifyChunkSize,p=(b&&($=typeof b=="object"?b[c.name]||b["*"]||200:b),[]),x=0,w=[],y=e===te;return t.clone().primaryKeys().then(function(g){function E(k){var T=Math.min($,g.length-k),O=g.slice(k,k+T);return(y?Promise.resolve([]):c.getMany({trans:a,keys:O,cache:"immutable"})).then(function(j){var K=[],F=[],W=u?[]:null,Y=y?O:[];if(!y)for(var L=0;L<T;++L){var G=j[L],ce={value:vt(G),primKey:g[k+L]};i.call(ce,ce.value,ce)!==!1&&(ce.value==null?Y.push(g[k+L]):u||le(m(G),m(ce.value))===0?(F.push(ce.value),u&&W.push(g[k+L])):(Y.push(g[k+L]),K.push(ce.value)))}return Promise.resolve(0<K.length&&c.mutate({trans:a,type:"add",values:K}).then(function(he){for(var ee in he.failures)Y.splice(parseInt(ee),1);s(K.length,he)})).then(function(){return(0<F.length||B&&typeof e=="object")&&c.mutate({trans:a,type:"put",keys:W,values:F,criteria:B,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(he){return s(F.length,he)})}).then(function(){return(0<Y.length||B&&y)&&c.mutate({trans:a,type:"delete",keys:Y,criteria:B,isAdditionalChunk:0<k}).then(function(he){return ha(n.table,Y,he)}).then(function(he){return s(Y.length,he)})}).then(function(){return g.length>k+T&&E(k+$)})})}var B=d(n)&&n.limit===1/0&&(typeof e!="function"||y)&&{index:n.index,range:n.range};return E(0).then(function(){if(0<p.length)throw new Bt("Error modifying one or more objects",p,x,w);return g.length})})})},N.prototype.delete=function(){var e=this._ctx,t=e.range;return!d(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(te):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(m){var u=m.failures,m=m.numFailures;if(m)throw new Bt("Could not delete some values",Object.keys(u).map(function($){return u[$]}),i-m);return i-m})})})};var U=N;function N(){}var te=function(e,t){return t.value=null};function pe(e,t){return e<t?-1:e===t?0:1}function _e(e,t){return t<e?-1:e===t?0:1}function be(e,t,n){return e=e instanceof Ze?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function se(e){return new e.Collection(e,function(){return we("")}).limit(0)}function Pe(w,t,n,a){var s,i,c,u,m,$,b,p=n.length;if(!n.every(function(g){return typeof g=="string"}))return be(w,sr);function x(g){s=g==="next"?function(B){return B.toUpperCase()}:function(B){return B.toLowerCase()},i=g==="next"?function(B){return B.toLowerCase()}:function(B){return B.toUpperCase()},c=g==="next"?pe:_e;var E=n.map(function(B){return{lower:i(B),upper:s(B)}}).sort(function(B,k){return c(B.lower,k.lower)});u=E.map(function(B){return B.upper}),m=E.map(function(B){return B.lower}),b=($=g)==="next"?"":a}x("next");var w=new w.Collection(w,function(){return Oe(u[0],m[p-1]+a)}),y=(w._ondirectionchange=function(g){x(g)},0);return w._addAlgorithm(function(g,E,B){var k=g.key;if(typeof k=="string"){var T=i(k);if(t(T,m,y))return!0;for(var O=null,j=y;j<p;++j){var K=((F,W,Y,L,G,ce)=>{for(var he=Math.min(F.length,L.length),ee=-1,ie=0;ie<he;++ie){var ge=W[ie];if(ge!==L[ie])return G(F[ie],Y[ie])<0?F.substr(0,ie)+Y[ie]+Y.substr(ie+1):G(F[ie],L[ie])<0?F.substr(0,ie)+L[ie]+Y.substr(ie+1):0<=ee?F.substr(0,ee)+W[ee]+Y.substr(ee+1):null;G(F[ie],ge)<0&&(ee=ie)}return he<L.length&&ce==="next"?F+Y.substr(F.length):he<F.length&&ce==="prev"?F.substr(0,Y.length):ee<0?null:F.substr(0,ee)+L[ee]+Y.substr(ee+1)})(k,T,u[j],m[j],c,$);K===null&&O===null?y=j+1:(O===null||0<c(O,K))&&(O=K)}E(O!==null?function(){g.continue(O+b)}:B)}return!1}),w}function Oe(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function we(e){return{type:1,lower:e,upper:e}}Object.defineProperty(Se.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Se.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?se(this):new this.Collection(this,function(){return Oe(e,t,!n,!a)})}catch{return be(this,Ht)}},Se.prototype.equals=function(e){return e==null?be(this,Ht):new this.Collection(this,function(){return we(e)})},Se.prototype.above=function(e){return e==null?be(this,Ht):new this.Collection(this,function(){return Oe(e,void 0,!0)})},Se.prototype.aboveOrEqual=function(e){return e==null?be(this,Ht):new this.Collection(this,function(){return Oe(e,void 0,!1)})},Se.prototype.below=function(e){return e==null?be(this,Ht):new this.Collection(this,function(){return Oe(void 0,e,!1,!0)})},Se.prototype.belowOrEqual=function(e){return e==null?be(this,Ht):new this.Collection(this,function(){return Oe(void 0,e)})},Se.prototype.startsWith=function(e){return typeof e!="string"?be(this,sr):this.between(e,e+Cn,!0,!0)},Se.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):Pe(this,function(t,n){return t.indexOf(n[0])===0},[e],Cn)},Se.prototype.equalsIgnoreCase=function(e){return Pe(this,function(t,n){return t===n[0]},[e],"")},Se.prototype.anyOfIgnoreCase=function(){var e=ue.apply(at,arguments);return e.length===0?se(this):Pe(this,function(t,n){return n.indexOf(t)!==-1},e,"")},Se.prototype.startsWithAnyOfIgnoreCase=function(){var e=ue.apply(at,arguments);return e.length===0?se(this):Pe(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,Cn)},Se.prototype.anyOf=function(){var e,t,n=this,a=ue.apply(at,arguments),s=this._cmp;try{a.sort(s)}catch{return be(this,Ht)}return a.length===0?se(this):((e=new this.Collection(this,function(){return Oe(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,c,u){for(var m=i.key;0<s(m,a[t]);)if(++t===a.length)return c(u),!1;return s(m,a[t])===0||(c(function(){i.continue(a[t])}),!1)}),e)},Se.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Se.prototype.noneOf=function(){var e=ue.apply(at,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return be(this,Ht)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},Se.prototype.inAnyRange=function(e,B){var n=this,a=this._cmp,s=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return se(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return be(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var m=!B||B.includeLowers!==!1,$=B&&B.includeUppers===!0,b,p=s;function x(k,T){return p(k[0],T[0])}try{(b=e.reduce(function(k,T){for(var O=0,j=k.length;O<j;++O){var K=k[O];if(a(T[0],K[1])<0&&0<a(T[1],K[0])){K[0]=c(K[0],T[0]),K[1]=u(K[1],T[1]);break}}return O===j&&k.push(T),k},[])).sort(x)}catch{return be(this,Ht)}var w=0,y=$?function(k){return 0<s(k,b[w][1])}:function(k){return 0<=s(k,b[w][1])},g=m?function(k){return 0<i(k,b[w][0])}:function(k){return 0<=i(k,b[w][0])},E=y,B=new this.Collection(this,function(){return Oe(b[0][0],b[b.length-1][1],!m,!$)});return B._ondirectionchange=function(k){p=k==="next"?(E=y,s):(E=g,i),b.sort(x)},B._addAlgorithm(function(k,T,O){for(var j,K=k.key;E(K);)if(++w===b.length)return T(O),!1;return!y(j=K)&&!g(j)||(n._cmp(K,b[w][1])===0||n._cmp(K,b[w][0])===0||T(function(){p===s?k.continue(b[w][0]):k.continue(b[w][1])}),!1)}),B},Se.prototype.startsWithAnyOf=function(){var e=ue.apply(at,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?se(this):this.inAnyRange(e.map(function(t){return[t,t+Cn]})):be(this,"startsWithAnyOf() only works with strings")};var Ze=Se;function Se(){}function D(e){return Me(function(t){return lt(t),e(t.target.error),!1})}function lt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var et="storagemutated",wt="x-storagemutated-1",nt=l(null,et),fe=(Le.prototype._lock=function(){return Nn(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},Le.prototype._unlock=function(){if(Nn(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{yn(e[1],e[0])}catch{}}return this},Le.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},Le.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Nn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(a);case"MissingAPIError":throw new Z.MissingAPI(a.message,a);default:throw new Z.OpenFailed(a)}if(!this.active)throw new Z.TransactionInactive;Nn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Me(function(s){lt(s),t._reject(e.error)}),e.onabort=Me(function(s){lt(s),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Me(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&nt.storagemutated.fire(e.mutatedParts)})}return this},Le.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?je(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(i,c){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,c)},H])}):n?sn(function(){var i=new z(function(c,u){s._lock();var m=t(c,u,s);m&&m.then&&m.then(c,u)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new z(function(i,c){var u=t(i,c,s);u&&u.then&&u.then(i,c)}))._lib=!0,a):je(new Z.TransactionInactive)},Le.prototype._root=function(){return this.parent?this.parent._root():this},Le.prototype.waitFor=function(e){var t,n=this._root(),a=z.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new z(function(i,c){a.then(function(u){return n._waitingQueue.push(Me(i.bind(null,u)))},function(u){return n._waitingQueue.push(Me(c.bind(null,u)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},Le.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},Le.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(oe(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},Le);function Le(){}function Ee(e,t,n,a,s,i,c,u){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!c?"&":"")+(a?"*":"")+(s?"++":"")+We(t),type:u}}function We(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ve(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,c){return i=a(i,c),i&&(s[i[0]]=i[1]),s},{}))};var a}var Fe=function(e){try{return e.only([[]]),Fe=function(){return[[]]},[[]]}catch{return Fe=function(){return Cn},Cn}};function qe(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return zt(n,t)}:function(n){return zt(n,e)};var t}function st(e){return[].slice.call(e)}var Pn=0;function kt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function _t(e,t,m){function a(y){if(y.type===3)return null;if(y.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var p=y.lower,x=y.upper,w=y.lowerOpen,y=y.upperOpen;return p===void 0?x===void 0?null:t.upperBound(x,!!y):x===void 0?t.lowerBound(p,!!w):t.bound(p,x,!!w,!!y)}function s(b){var p,x=b.name;return{name:x,schema:b,mutate:function(w){var y=w.trans,g=w.type,E=w.keys,B=w.values,k=w.range;return new Promise(function(T,O){T=Me(T);var j=y.objectStore(x),K=j.keyPath==null,F=g==="put"||g==="add";if(!F&&g!=="delete"&&g!=="deleteRange")throw new Error("Invalid operation type: "+g);var W,Y=(E||B||{length:1}).length;if(E&&B&&E.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(Y===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function L(Ie){++he,lt(Ie)}var G=[],ce=[],he=0;if(g==="deleteRange"){if(k.type===4)return T({numFailures:he,failures:ce,results:[],lastResult:void 0});k.type===3?G.push(W=j.clear()):G.push(W=j.delete(a(k)))}else{var K=F?K?[B,E]:[B,null]:[E,null],ee=K[0],ie=K[1];if(F)for(var ge=0;ge<Y;++ge)G.push(W=ie&&ie[ge]!==void 0?j[g](ee[ge],ie[ge]):j[g](ee[ge])),W.onerror=L;else for(ge=0;ge<Y;++ge)G.push(W=j[g](ee[ge])),W.onerror=L}function mt(Ie){Ie=Ie.target.result,G.forEach(function(fn,Ha){return fn.error!=null&&(ce[Ha]=fn.error)}),T({numFailures:he,failures:ce,results:g==="delete"?E:G.map(function(fn){return fn.result}),lastResult:Ie})}W.onerror=function(Ie){L(Ie),mt(Ie)},W.onsuccess=mt})},getMany:function(w){var y=w.trans,g=w.keys;return new Promise(function(E,B){E=Me(E);for(var k,T=y.objectStore(x),O=g.length,j=new Array(O),K=0,F=0,W=function(G){G=G.target,j[G._pos]=G.result,++F===K&&E(j)},Y=D(B),L=0;L<O;++L)g[L]!=null&&((k=T.get(g[L]))._pos=L,k.onsuccess=W,k.onerror=Y,++K);K===0&&E(j)})},get:function(w){var y=w.trans,g=w.key;return new Promise(function(E,B){E=Me(E);var k=y.objectStore(x).get(g);k.onsuccess=function(T){return E(T.target.result)},k.onerror=D(B)})},query:(p=u,function(w){return new Promise(function(y,g){y=Me(y);var E,B,k,F=w.trans,T=w.values,O=w.limit,K=w.query,j=O===1/0?void 0:O,W=K.index,K=K.range,F=F.objectStore(x),F=W.isPrimaryKey?F:F.index(W.name),W=a(K);if(O===0)return y({result:[]});p?((K=T?F.getAll(W,j):F.getAllKeys(W,j)).onsuccess=function(Y){return y({result:Y.target.result})},K.onerror=D(g)):(E=0,B=!T&&"openKeyCursor"in F?F.openKeyCursor(W):F.openCursor(W),k=[],B.onsuccess=function(Y){var L=B.result;return!L||(k.push(T?L.value:L.primaryKey),++E===O)?y({result:k}):void L.continue()},B.onerror=D(g))})}),openCursor:function(w){var y=w.trans,g=w.values,E=w.query,B=w.reverse,k=w.unique;return new Promise(function(T,O){T=Me(T);var F=E.index,j=E.range,K=y.objectStore(x),K=F.isPrimaryKey?K:K.index(F.name),F=B?k?"prevunique":"prev":k?"nextunique":"next",W=!g&&"openKeyCursor"in K?K.openKeyCursor(a(j),F):K.openCursor(a(j),F);W.onerror=D(O),W.onsuccess=Me(function(Y){var L,G,ce,he,ee=W.result;ee?(ee.___id=++Pn,ee.done=!1,L=ee.continue.bind(ee),G=(G=ee.continuePrimaryKey)&&G.bind(ee),ce=ee.advance.bind(ee),he=function(){throw new Error("Cursor not stopped")},ee.trans=y,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=Me(O),ee.next=function(){var ie=this,ge=1;return this.start(function(){return ge--?ie.continue():ie.stop()}).then(function(){return ie})},ee.start=function(ie){function ge(){if(W.result)try{ie()}catch(Ie){ee.fail(Ie)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var mt=new Promise(function(Ie,fn){Ie=Me(Ie),W.onerror=D(fn),ee.fail=fn,ee.stop=function(Ha){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=he,Ie(Ha)}});return W.onsuccess=Me(function(Ie){W.onsuccess=ge,ge()}),ee.continue=L,ee.continuePrimaryKey=G,ee.advance=ce,ge(),mt},T(ee)):T(null)},O)})},count:function(w){var y=w.query,g=w.trans,E=y.index,B=y.range;return new Promise(function(k,T){var O=g.objectStore(x),O=E.isPrimaryKey?O:O.index(E.name),j=a(B),j=j?O.count(j):O.count();j.onsuccess=Me(function(K){return k(K.target.result)}),j.onerror=D(T)})}}}i=m,c=st((m=e).objectStoreNames);var i,m={schema:{name:m.name,tables:c.map(function(b){return i.objectStore(b)}).map(function(b){var p=b.keyPath,x=b.autoIncrement,y=re(p),w={},y={name:b.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:p==null,compound:y,keyPath:p,autoIncrement:x,unique:!0,extractKey:qe(p)},indexes:st(b.indexNames).map(function(g){return b.index(g)}).map(function(k){var T=k.name,E=k.unique,B=k.multiEntry,k=k.keyPath,T={name:T,compound:re(k),keyPath:k,unique:E,multiEntry:B,extractKey:qe(k)};return w[kt(k)]=T}),getIndexByKeyPath:function(g){return w[kt(g)]}};return w[":id"]=y.primaryKey,p!=null&&(w[kt(p)]=y.primaryKey),y})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=m.schema,u=m.hasGetAll,m=c.tables.map(s),$={};return m.forEach(function(b){return $[b.name]=b}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(b){if($[b])return $[b];throw new Error("Table '".concat(b,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Fe(t),schema:c}}function $t(e,t,n,a){return n=n.IDBKeyRange,t=_t(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,X(X({},s),i(s))},t)}}function Jt(e,t){var n=t.db,n=$t(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function ke(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(c){var u=(function m($,b){return ea($,b)||($=dt($))&&m($,b)})(c,s);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?ht(c,s,{get:function(){return this.table(s)},set:function(m){ft(this,s,{value:m,writable:!0,configurable:!0,enumerable:!0})}}):c[s]=new e.Table(s,i))})})}function ye(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Ke(e,t){return e._cfg.version-t._cfg.version}function De(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Ve("$meta",Vt("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),c=(i.create(n),i._completion.catch(a),i._reject.bind(i)),u=H.transless||H;sn(function(){if(H.trans=i,H.transless=u,t!==0)return Jt(e,n),$=t,((m=i).storeNames.includes("$meta")?m.table("$meta").get("version").then(function(b){return b??$}):z.resolve($)).then(function(E){var p=e,x=E,w=i,y=n,g=[],E=p._versions,B=p._dbSchema=ct(0,p.idbdb,y);return(E=E.filter(function(k){return k._cfg.version>=x})).length===0?z.resolve():(E.forEach(function(k){g.push(function(){var T,O,j,K=B,F=k._cfg.dbschema,W=(Mt(p,K,y),Mt(p,F,y),B=p._dbSchema=F,Ft(K,F)),Y=(W.add.forEach(function(L){jt(y,L[0],L[1].primKey,L[1].indexes)}),W.change.forEach(function(L){if(L.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var G=y.objectStore(L.name);L.add.forEach(function(ce){return St(G,ce)}),L.change.forEach(function(ce){G.deleteIndex(ce.name),St(G,ce)}),L.del.forEach(function(ce){return G.deleteIndex(ce)})}),k._cfg.contentUpgrade);if(Y&&k._cfg.version>x)return Jt(p,y),w._memoizedTables={},T=Ba(F),W.del.forEach(function(L){T[L]=K[L]}),ye(p,[p.Transaction.prototype]),ke(p,[p.Transaction.prototype],Ce(T),T),w.schema=T,(O=hn(Y))&&_n(),F=z.follow(function(){var L;(j=Y(w))&&O&&(L=on.bind(null,null),j.then(L,L))}),j&&typeof j.then=="function"?z.resolve(j):F.then(function(){return j})}),g.push(function(T){var O,j,K=k._cfg.dbschema;O=K,j=T,[].slice.call(j.db.objectStoreNames).forEach(function(F){return O[F]==null&&j.db.deleteObjectStore(F)}),ye(p,[p.Transaction.prototype]),ke(p,[p.Transaction.prototype],p._storeNames,p._dbSchema),w.schema=p._dbSchema}),g.push(function(T){p.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(p.idbdb.version/10)===k._cfg.version?(p.idbdb.deleteObjectStore("$meta"),delete p._dbSchema.$meta,p._storeNames=p._storeNames.filter(function(O){return O!=="$meta"})):T.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return g.length?z.resolve(g.shift()(w.idbtrans)).then(k):z.resolve()})().then(function(){Xt(B,y)}))}).catch(c);var m,$;Ce(s).forEach(function(b){jt(n,b,s[b].primKey,s[b].indexes)}),Jt(e,n),z.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function tt(e,t){Xt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=ct(0,e.idbdb,t);Mt(e,e._dbSchema,t);for(var a=0,s=Ft(n,e._dbSchema).change;a<s.length;a++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(m){yt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(m.src)),St(u,m)})})(s[a]);if(typeof i=="object")return i.value}}function Ft(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)c.recreate=!0,a.change.push(c);else{var u=s.idxByName,m=i.idxByName,$=void 0;for($ in u)m[$]||c.del.push($);for($ in m){var b=u[$],p=m[$];b?b.src!==p.src&&c.change.push(p):c.add.push(p)}(0<c.del.length||0<c.add.length||0<c.change.length)&&a.change.push(c)}}else a.add.push([n,i])}return a}function jt(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return St(s,i)})}function Xt(e,t){Ce(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(yt&&console.debug("Dexie: Creating missing table",n),jt(t,n,e[n].primKey,e[n].indexes))})}function St(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function ct(e,t,n){var a={};return ta(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),c=Ee(We($=i.keyPath),$||"",!0,!1,!!i.autoIncrement,$&&typeof $!="string",!0),u=[],m=0;m<i.indexNames.length;++m){var b=i.index(i.indexNames[m]),$=b.keyPath,b=Ee(b.name,$,!!b.unique,!!b.multiEntry,!1,$&&typeof $!="string",!1);u.push(b)}a[s]=Ve(s,c,u)}),a}function Mt(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var m,$=c.indexNames[u],b=c.index($).keyPath,b=typeof b=="string"?b:"["+ta(b).join("+")+"]";t[i]&&(m=t[i].idxByName[b])&&(m.name=$,delete t[i].idxByName[b],t[i].idxByName[$]=m)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Vt(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return Ee(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),re(i),n===0,a)})}_.prototype._createTableSchema=Ve,_.prototype._parseIndexSyntax=Vt,_.prototype._parseStoresSpec=function(e,t){var n=this;Ce(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new Z.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");s.forEach(function(c){if(c.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},_.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?me(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){me(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,ye(t,[t._allTables,t,t.Transaction.prototype]),ke(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Ce(s),s),t._storeNames=Ce(s),this},_.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Rn(this._cfg.contentUpgrade||xe,e),this};var pa=_;function _(){}function R(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new Zt(zn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function it(e){return e&&typeof e.databases=="function"}function wn(e){return sn(function(){return H.letThrough=!0,e()})}function Te(e){return!("from"in e)}var ut=function(e,t){var n;if(!this)return n=new ut,e&&"d"in e&&me(n,e),n;me(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Tn(e,t,n){var a=le(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(Te(e))return me(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(le(n,e.from)<0)return a?Tn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},ur(e);if(0<le(t,e.to))return s?Tn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},ur(e);le(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<le(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&An(e,a),s&&t&&An(e,s)}}function An(e,t){Te(t)||(function n(a,s){var i=s.from,c=s.l,u=s.r;Tn(a,i,s.to),c&&n(a,c),u&&n(a,u)})(e,t)}function La(e,t){var n=va(t),a=n.next();if(!a.done)for(var s=a.value,i=va(e),c=i.next(s.from),u=c.value;!a.done&&!c.done;){if(le(u.from,s.to)<=0&&0<=le(u.to,s.from))return!0;le(s.from,u.from)<0?s=(a=n.next(u.from)).value:u=(c=i.next(s.from)).value}return!1}function va(e){var t=Te(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&le(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||le(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function ur(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=X({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Dt(n)),e.d=Dt(e)}function Dt(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Pt(e,t){return Ce(t).forEach(function(n){e[n]?An(e[n],t[n]):e[n]=(function a(s){var i,c,u={};for(i in s)oe(s,i)&&(c=s[i],u[i]=!c||typeof c!="object"||Ja.has(c.constructor)?c:a(c));return u})(t[n])}),e}function It(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&La(t[n],e[n])})}bt(ut.prototype,((rt={add:function(e){return An(this,e),this},addKey:function(e){return Tn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Tn(t,n,n)}),this},hasKey:function(e){var t=va(this).next(e).value;return t&&le(t.from,e)<=0&&0<=le(t.to,e)}})[Pa]=function(){return va(this)},rt));var cn={},ma={},ga=!1;function Un(e){Pt(ma,e),ga||(ga=!0,setTimeout(function(){ga=!1,ba(ma,!(ma={}))},0))}function ba(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(cn);a<s.length;a++)qa(u=s[a],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=cn["idb://".concat(c,"/").concat(i)])&&qa(u,e,n,t)}n.forEach(function(m){return m()})}function qa(e,t,n,a){for(var s=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],m=u[0],$=[],b=0,p=u[1];b<p.length;b++){var x=p[b];It(t,x.obsSet)?x.subscribers.forEach(function(E){return n.add(E)}):a&&$.push(x)}a&&s.push([m,$])}if(a)for(var w=0,y=s;w<y.length;w++){var g=y[w],m=g[0],$=g[1];e.queries.query[m]=$}}function dr(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?je(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==a)throw new Z.DatabaseClosed("db.open() was cancelled")}function u(){return new z(function(x,w){if(c(),!n)throw new Z.MissingAPI;var y=e.name,g=t.autoSchema||!s?n.open(y):n.open(y,s);if(!g)throw new Z.MissingAPI;g.onerror=D(w),g.onblocked=Me(e._fireOnBlocked),g.onupgradeneeded=Me(function(E){var B;b=g.transaction,t.autoSchema&&!e._options.allowEmptyDB?(g.onerror=lt,b.abort(),g.result.close(),(B=n.deleteDatabase(y)).onsuccess=B.onerror=Me(function(){w(new Z.NoSuchDatabase("Database ".concat(y," doesnt exist")))})):(b.onerror=D(w),B=E.oldVersion>Math.pow(2,62)?0:E.oldVersion,p=B<1,e.idbdb=g.result,i&&tt(e,b),De(e,B/10,b,w))},w),g.onsuccess=Me(function(){b=null;var E,B,k,T,O,j,K=e.idbdb=g.result,F=ta(K.objectStoreNames);if(0<F.length)try{var W=K.transaction((O=F).length===1?O[0]:O,"readonly");if(t.autoSchema)j=K,T=W,(k=e).verno=j.version/10,T=k._dbSchema=ct(0,j,T),k._storeNames=ta(j.objectStoreNames,0),ke(k,[k._allTables],Ce(T),T);else if(Mt(e,e._dbSchema,W),B=W,((B=Ft(ct(0,(E=e).idbdb,B),E._dbSchema)).add.length||B.change.some(function(Y){return Y.add.length||Y.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),K.close(),s=K.version+1,i=!0,x(u());Jt(e,W)}catch{}Rt.push(e),K.onversionchange=Me(function(Y){t.vcFired=!0,e.on("versionchange").fire(Y)}),K.onclose=Me(function(){e.close({disableAutoOpen:!1})}),p&&(F=e._deps,O=y,it(j=F.indexedDB)||O===zn||R(j,F.IDBKeyRange).put({name:O}).catch(xe)),x()},w)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<s)return s=0,u()}return z.reject(x)})}var m,$=t.dbReadyResolve,b=null,p=!1;return z.race([a,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function w(){return indexedDB.databases().finally(x)}m=setInterval(w,100),w()}).finally(function(){return clearInterval(m)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],z.resolve(wn(function(){return e.on.ready.fire(e.vip)})).then(function x(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(Rn,xe),t.onReadyBeingFired=[],z.resolve(wn(function(){return w(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{b&&b.abort()}catch{}return a===t.openCanceller&&e._close(),je(x)}).finally(function(){t.openComplete=!0,$()}).then(function(){var x;return p&&(x={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(y){y.name&&(x["idb://".concat(e.name,"/").concat(w.name,"/").concat(y.name)]=new ut(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(w.name,"/")]=x["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new ut(-1/0,[[[]]])}),nt(et).fire(x),ba(x,!0)),e})}function Ka(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(u){var u=i(u),m=u.value;return u.done?m:m&&typeof m.then=="function"?m.then(n,a):re(m)?Promise.all(m).then(n,a):n(m)}}return s(t)()}function On(e,t,n){for(var a=re(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var fr={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return X(X({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function c(x,w,y){var k=kt(x),g=s[k]=s[k]||[],E=x==null?0:typeof x=="string"?1:x.length,B=0<w,k=X(X({},y),{name:B?"".concat(k,"(virtual-from:").concat(y.name,")"):y.name,lowLevelIndex:y,isVirtual:B,keyTail:w,keyLength:E,extractKey:qe(x),unique:!B&&y.unique});return g.push(k),k.isPrimaryKey||i.push(k),1<E&&c(E===2?x[0]:x.slice(0,E-1),w+1,y),g.sort(function(T,O){return T.keyTail-O.keyTail}),k}var u=c(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[u];for(var m=0,$=a.indexes;m<$.length;m++){var b=$[m];c(b.keyPath,0,b)}function p(x){var w,y=x.query.index;return y.isVirtual?X(X({},x),{query:{index:y.lowLevelIndex,range:(w=x.query.range,y=y.keyTail,{type:w.type===1?2:w.type,lower:On(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,y),lowerOpen:!0,upper:On(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,y),upperOpen:!0})}}):x}return X(X({},n),{schema:X(X({},a),{primaryKey:u,indexes:i,getIndexByKeyPath:function(x){return(x=s[kt(x)])&&x[0]}}),count:function(x){return n.count(p(x))},query:function(x){return n.query(p(x))},openCursor:function(x){var w=x.query.index,y=w.keyTail,g=w.keyLength;return w.isVirtual?n.openCursor(p(x)).then(function(B){return B&&E(B)}):n.openCursor(x);function E(B){return Object.create(B,{continue:{value:function(k){k!=null?B.continue(On(k,x.reverse?e.MAX_KEY:e.MIN_KEY,y)):x.unique?B.continue(B.key.slice(0,g).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,y)):B.continue()}},continuePrimaryKey:{value:function(k,T){B.continuePrimaryKey(On(k,e.MAX_KEY,y),T)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var k=B.key;return g===1?k[0]:k.slice(0,g)}},value:{get:function(){return B.value}}})}}})}})}};function Nt(e,t,n,a){return n=n||{},a=a||"",Ce(e).forEach(function(s){var i,c,u;oe(t,s)?(i=e[s],c=t[s],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Ma(i))!==Ma(c)?n[a+s]=t[s]:u==="Object"?Nt(i,c,n,a+s+"."):i!==c&&(n[a+s]=t[s]):i!==c&&(n[a+s]=t[s])):n[a+s]=void 0}),Ce(t).forEach(function(s){oe(e,s)||(n[a+s]=t[s])}),n}function Ra(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var un={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return X(X({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return X(X({},n),{mutate:function(s){var i=H.trans,c=i.table(t).hook,u=c.deleting,m=c.creating,$=c.updating;switch(s.type){case"add":if(m.fire===xe)break;return i._promise("readwrite",function(){return b(s)},!0);case"put":if(m.fire===xe&&$.fire===xe)break;return i._promise("readwrite",function(){return b(s)},!0);case"delete":if(u.fire===xe)break;return i._promise("readwrite",function(){return b(s)},!0);case"deleteRange":if(u.fire===xe)break;return i._promise("readwrite",function(){return(function p(x,w,y){return n.query({trans:x,values:!1,query:{index:a,range:w},limit:y}).then(function(g){var E=g.result;return b({type:"delete",keys:E,trans:x}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):E.length<y?{failures:[],numFailures:0,lastResult:void 0}:p(x,X(X({},w),{lower:E[E.length-1],lowerOpen:!0}),y)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function b(p){var x,w,y,g=H.trans,E=p.keys||Ra(a,p);if(E)return(p=p.type==="add"||p.type==="put"?X(X({},p),{keys:E}):X({},p)).type!=="delete"&&(p.values=ve([],p.values)),p.keys&&(p.keys=ve([],p.keys)),x=n,y=E,((w=p).type==="add"?Promise.resolve([]):x.getMany({trans:w.trans,keys:y,cache:"immutable"})).then(function(B){var k=E.map(function(T,O){var j,K,F,W=B[O],Y={onerror:null,onsuccess:null};return p.type==="delete"?u.fire.call(Y,T,W,g):p.type==="add"||W===void 0?(j=m.fire.call(Y,T,p.values[O],g),T==null&&j!=null&&(p.keys[O]=T=j,a.outbound||pt(p.values[O],a.keyPath,T))):(j=Nt(W,p.values[O]),(K=$.fire.call(Y,j,T,W,g))&&(F=p.values[O],Object.keys(K).forEach(function(L){oe(F,L)?F[L]=K[L]:pt(F,L,K[L])}))),Y});return n.mutate(p).then(function(T){for(var O=T.failures,j=T.results,K=T.numFailures,T=T.lastResult,F=0;F<E.length;++F){var W=(j||E)[F],Y=k[F];W==null?Y.onerror&&Y.onerror(O[F]):Y.onsuccess&&Y.onsuccess(p.type==="put"&&B[F]?p.values[F]:W)}return{failures:O,results:j,numFailures:K,lastResult:T}}).catch(function(T){return k.forEach(function(O){return O.onerror&&O.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function hr(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)le(t.keys[s],e[i])===0&&(a.push(n?vt(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var Pr={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return X(X({},n),{getMany:function(a){var s;return a.cache?(s=hr(a.keys,a.trans._cache,a.cache==="clone"))?z.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?vt(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function ja(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function Va(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var pr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new ut(e.MIN_KEY,e.MAX_KEY);return X(X({},e),{transaction:function(a,s,i){if(H.subscr&&s!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(a,s,i)},table:function(a){function s(E){var g,E=E.query;return[g=E.index,new ut((g=(E=E.range).lower)!=null?g:e.MIN_KEY,(g=E.upper)!=null?g:e.MAX_KEY)]}var i=e.table(a),c=i.schema,u=c.primaryKey,m=c.indexes,$=u.extractKey,b=u.outbound,p=u.autoIncrement&&m.filter(function(y){return y.compound&&y.keyPath.includes(u.keyPath)}),x=X(X({},i),{mutate:function(y){function g(G){return G="idb://".concat(t,"/").concat(a,"/").concat(G),O[G]||(O[G]=new ut)}var E,B,k,T=y.trans,O=y.mutatedParts||(y.mutatedParts={}),j=g(""),K=g(":dels"),F=y.type,Y=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[Ra(u,y).filter(function(G){return G}),y.values]:[],W=Y[0],Y=Y[1],L=y.trans._cache;return re(W)?(j.addKeys(W),(F=F==="delete"||W.length===Y.length?hr(W,L):null)||K.addKeys(W),(F||Y)&&(E=g,B=F,k=Y,c.indexes.forEach(function(G){var ce=E(G.name||"");function he(ie){return ie!=null?G.extractKey(ie):null}function ee(ie){G.multiEntry&&re(ie)?ie.forEach(function(ge){return ce.addKey(ge)}):ce.addKey(ie)}(B||k).forEach(function(ie,Ie){var mt=B&&he(B[Ie]),Ie=k&&he(k[Ie]);le(mt,Ie)!==0&&(mt!=null&&ee(mt),Ie!=null)&&ee(Ie)})}))):W?(Y={from:(L=W.lower)!=null?L:e.MIN_KEY,to:(F=W.upper)!=null?F:e.MAX_KEY},K.add(Y),j.add(Y)):(j.add(n),K.add(n),c.indexes.forEach(function(G){return g(G.name).add(n)})),i.mutate(y).then(function(G){return!W||y.type!=="add"&&y.type!=="put"||(j.addKeys(G.results),p&&p.forEach(function(ce){for(var he=y.values.map(function(mt){return ce.extractKey(mt)}),ee=ce.keyPath.findIndex(function(mt){return mt===u.keyPath}),ie=0,ge=G.results.length;ie<ge;++ie)he[ie][ee]=G.results[ie];g(ce.name).addKeys(he)})),T.mutatedParts=Pt(T.mutatedParts||{},O),G})}}),w={get:function(y){return[u,new ut(y.key)]},getMany:function(y){return[u,new ut().addKeys(y.keys)]},count:s,query:s,openCursor:s};return Ce(w).forEach(function(y){x[y]=function(g){var E=H.subscr,B=!!E,k=ja(H,i)&&Va(y,g)?g.obsSet={}:E;if(B){var T,E=function(Y){return Y="idb://".concat(t,"/").concat(a,"/").concat(Y),k[Y]||(k[Y]=new ut)},O=E(""),j=E(":dels"),B=w[y](g),K=B[0],B=B[1];if((y==="query"&&K.isPrimaryKey&&!g.values?j:E(K.name||"")).add(B),!K.isPrimaryKey){if(y!=="count")return T=y==="query"&&b&&g.values&&i.query(X(X({},g),{values:!1})),i[y].apply(this,arguments).then(function(Y){if(y==="query"){if(b&&g.values)return T.then(function(he){return he=he.result,O.addKeys(he),Y});var L=g.values?Y.result.map($):Y.result;(g.values?O:j).addKeys(L)}else{var G,ce;if(y==="openCursor")return ce=g.values,(G=Y)&&Object.create(G,{key:{get:function(){return j.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var he=G.primaryKey;return j.addKey(he),he}},value:{get:function(){return ce&&O.addKey(G.primaryKey),G.value}}})}return Y});j.add(n)}}return i[y].apply(this,arguments)}}),x}})}};function Ya(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=X({},t),re(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&re(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function ya(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<le(n,a.lower):0<=le(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?le(n,a.upper)<0:le(n,a.upper)<=0));var n,a}function za(e,t,n,a,s,i){var c,u,m,$,b,p;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,m=t.query.range,$=a.schema.primaryKey.extractKey,b=c.extractKey,p=(c.lowLevelIndex||c).extractKey,(a=n.reduce(function(x,w){var y=x,g=[];if(w.type==="add"||w.type==="put")for(var E=new ut,B=w.values.length-1;0<=B;--B){var k,T=w.values[B],O=$(T);!E.hasKey(O)&&(k=b(T),u&&re(k)?k.some(function(Y){return ya(Y,m)}):ya(k,m))&&(E.addKey(O),g.push(T))}switch(w.type){case"add":var j=new ut().addKeys(t.values?x.map(function(L){return $(L)}):x),y=x.concat(t.values?g.filter(function(L){return L=$(L),!j.hasKey(L)&&(j.addKey(L),!0)}):g.map(function(L){return $(L)}).filter(function(L){return!j.hasKey(L)&&(j.addKey(L),!0)}));break;case"put":var K=new ut().addKeys(w.values.map(function(L){return $(L)}));y=x.filter(function(L){return!K.hasKey(t.values?$(L):L)}).concat(t.values?g:g.map(function(L){return $(L)}));break;case"delete":var F=new ut().addKeys(w.keys);y=x.filter(function(L){return!F.hasKey(t.values?$(L):L)});break;case"deleteRange":var W=w.range;y=x.filter(function(L){return!ya($(L),W)})}return y},e))===e)?e:(a.sort(function(x,w){return le(p(x),p(w))||le($(x),$(w))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function vr(e,t){return le(e.lower,t.lower)===0&&le(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Tr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=le(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=le(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function mr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&tn(i,s)},3e3))})}var gr={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return X(X({},e),{transaction:function(n,a,s){var i,c,u=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,u.addEventListener("abort",(c=function(m){return function(){if(i.abort(),a==="readwrite"){for(var $=new Set,b=0,p=n;b<p.length;b++){var x=p[b],w=cn["idb://".concat(t,"/").concat(x)];if(w){var y=e.table(x),g=w.optimisticOps.filter(function(G){return G.trans===u});if(u._explicit&&m&&u.mutatedParts)for(var E=0,B=Object.values(w.queries.query);E<B.length;E++)for(var k=0,T=(K=B[E]).slice();k<T.length;k++)It((F=T[k]).obsSet,u.mutatedParts)&&(tn(K,F),F.subscribers.forEach(function(G){return $.add(G)}));else if(0<g.length){w.optimisticOps=w.optimisticOps.filter(function(G){return G.trans!==u});for(var O=0,j=Object.values(w.queries.query);O<j.length;O++)for(var K,F,W,Y=0,L=(K=j[O]).slice();Y<L.length;Y++)(F=L[Y]).res!=null&&u.mutatedParts&&(m&&!F.dirty?(W=Object.isFrozen(F.res),W=za(F.res,F.req,g,y,F,W),F.dirty?(tn(K,F),F.subscribers.forEach(function(G){return $.add(G)})):W!==F.res&&(F.res=W,F.promise=z.resolve({result:W}))):(F.dirty&&tn(K,F),F.subscribers.forEach(function(G){return $.add(G)})))}}}$.forEach(function(G){return G()})}}})(!1),{signal:s}),u.addEventListener("error",c(!1),{signal:s}),u.addEventListener("complete",c(!0),{signal:s})),u},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return X(X({},a),{mutate:function(i){var c,u=H.trans;return!s.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=cn["idb://".concat(t,"/").concat(n)])?(u=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Ra(s,i).some(function(m){return m==null}))?(c.optimisticOps.push(i),i.mutatedParts&&Un(i.mutatedParts),u.then(function(m){0<m.numFailures&&(tn(c.optimisticOps,i),(m=Ya(0,i,m))&&c.optimisticOps.push(m),i.mutatedParts)&&Un(i.mutatedParts)}),u.catch(function(){tn(c.optimisticOps,i),i.mutatedParts&&Un(i.mutatedParts)})):u.then(function(m){var $=Ya(0,X(X({},i),{values:i.values.map(function(b,p){var x;return m.failures[p]?b:(pt(x=(x=s.keyPath)!=null&&x.includes(".")?vt(b):X({},b),s.keyPath,m.results[p]),x)})}),m);c.optimisticOps.push($),queueMicrotask(function(){return i.mutatedParts&&Un(i.mutatedParts)})}),u):a.mutate(i)},query:function(i){var c,u,m,$,b,p,x;return ja(H,a)&&Va("query",i)?(c=((m=H.trans)==null?void 0:m.db._options.cache)==="immutable",u=(m=H).requery,m=m.signal,p=((w,y,g,E)=>{var B=cn["idb://".concat(w,"/").concat(y)];if(!B)return[];if(!(w=B.queries[g]))return[null,!1,B,null];var k=w[(E.query?E.query.index.name:null)||""];if(!k)return[null,!1,B,null];switch(g){case"query":var T=k.find(function(O){return O.req.limit===E.limit&&O.req.values===E.values&&vr(O.req.query.range,E.query.range)});return T?[T,!0,B,k]:[k.find(function(O){return("limit"in O.req?O.req.limit:1/0)>=E.limit&&(!E.values||O.req.values)&&Tr(O.req.query.range,E.query.range)}),!1,B,k];case"count":return T=k.find(function(O){return vr(O.req.query.range,E.query.range)}),[T,!!T,B,k]}})(t,n,"query",i),x=p[0],$=p[2],b=p[3],x&&p[1]?x.obsSet=i.obsSet:(p=a.query(i).then(function(w){var y=w.result;if(x&&(x.res=y),c){for(var g=0,E=y.length;g<E;++g)Object.freeze(y[g]);Object.freeze(y)}else w.result=vt(y);return w}).catch(function(w){return b&&x&&tn(b,x),Promise.reject(w)}),x={obsSet:i.obsSet,promise:p,subscribers:new Set,type:"query",req:i,dirty:!1},b?b.push(x):(b=[x],($=$||(cn["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=b)),mr(x,b,u,m),x.promise.then(function(w){return{result:za(w.result,i,$?.optimisticOps,a,x,c)}})):a.query(i)}})}})}};function Qt(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}Ye.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Ke),n.stores({}),this._state.autoSchema=!1),n},Ye.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new z(function(n,a){if(t._state.openComplete)return a(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new Z.DatabaseClosed);t.open().catch(xe)}t._state.dbReadyPromise.then(n,a)}).then(e)},Ye.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(c,u){return c.level-u.level}),this},Ye.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Ye.prototype.open=function(){var e=this;return yn(nn,function(){return dr(e)})},Ye.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Rt.indexOf(this);if(0<=t&&Rt.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(n){e.dbReadyResolve=n}),e.openCanceller=new z(function(n,a){e.cancelOpen=a}))},Ye.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ye.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new z(function(s,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=Me(function(){var m,$,b;m=t._deps,$=t.name,it(b=m.indexedDB)||$===zn||R(b,m.IDBKeyRange).delete($).catch(xe),s()}),u.onerror=D(i),u.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(c):c()})},Ye.prototype.backendDB=function(){return this.idbdb},Ye.prototype.isOpen=function(){return this.idbdb!==null},Ye.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ye.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ye.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ye.prototype,"tables",{get:function(){var e=this;return Ce(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ye.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,_a(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},Ye.prototype._transaction=function(e,t,n){var a,s,i=this,c=H.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function($){if($=$ instanceof i.Table?$.name:$,typeof $!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return $}),e=="r"||e===da)a=da;else{if(e!="rw"&&e!=Da)throw new Z.InvalidArgument("Invalid transaction mode: "+e);a=Da}if(c){if(c.mode===da&&a===Da){if(!u)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&s.forEach(function($){if(c&&c.storeNames.indexOf($)===-1){if(!u)throw new Z.SubTransaction("Table "+$+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch($){return c?c._promise(null,function(b,p){p($)}):je($)}var m=(function $(b,p,x,w,y){return z.resolve().then(function(){var k=H.transless||H,g=b._createTransaction(p,x,b._dbSchema,w),k=(g.explicit=!0,{trans:g,transless:k});if(w)g.idbtrans=w.idbtrans;else try{g.create(),g.idbtrans._explicit=!0,b._state.PR1398_maxLoop=3}catch(T){return T.name===ra.InvalidState&&b.isOpen()&&0<--b._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),b.close({disableAutoOpen:!1}),b.open().then(function(){return $(b,p,x,null,y)})):je(T)}var E,B=hn(y),k=(B&&_n(),z.follow(function(){var T;(E=y.call(g,g))&&(B?(T=on.bind(null,null),E.then(T,T)):typeof E.next=="function"&&typeof E.throw=="function"&&(E=Ka(E)))},k));return(E&&typeof E.then=="function"?z.resolve(E).then(function(T){return g.active?T:je(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return E})).then(function(T){return w&&g._resolve(),g._completion.then(function(){return T})}).catch(function(T){return g._reject(T),je(T)})})}).bind(null,this,a,s,c,n);return c?c._promise(a,m,"lock"):H.trans?yn(H.transless,function(){return i._whenReady(m)}):this._whenReady(m)},Ye.prototype.table=function(e){if(oe(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var Zt=Ye;function Ye(e,t){var n,a,s,i,c,u=this,m=(this._middlewares={},this.verno=0,Ye.dependencies),m=(this._options=t=X({addons:Ye.addons,autoOpen:!0,indexedDB:m.indexedDB,IDBKeyRange:m.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),$=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:xe,dbReadyPromise:null,cancelOpen:xe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),b=($.dbReadyPromise=new z(function(p){$.dbReadyResolve=p}),$.openCanceller=new z(function(p,x){$.cancelOpen=x}),this._state=$,this.name=e,this.on=l(this,"populate","blocked","versionchange","close",{ready:[Rn,xe]}),this.once=function(p,x){var w=function(){for(var y=[],g=0;g<arguments.length;g++)y[g]=arguments[g];u.on(p).unsubscribe(w),x.apply(u,y)};return u.on(p,w)},this.on.ready.subscribe=na(this.on.ready.subscribe,function(p){return function(x,w){Ye.vip(function(){var y,g=u._state;g.openComplete?(g.dbOpenError||z.resolve().then(x),w&&p(x)):g.onReadyBeingFired?(g.onReadyBeingFired.push(x),w&&p(x)):(p(x),y=u,w||p(function E(){y.on.ready.unsubscribe(x),y.on.ready.unsubscribe(E)}))})}}),this.Collection=(n=this,f(U.prototype,function(E,g){this.db=n;var w=ir,y=null;if(g)try{w=g()}catch(k){y=k}var g=E._ctx,E=g.table,B=E.hook.reading.fire;this._ctx={table:E,index:g.index,isPrimKey:!g.index||E.schema.primKey.keyPath&&g.index===E.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:y,or:g.or,valueMapper:B!==Kn?B:null}})),this.Table=(a=this,f(cr.prototype,function(p,x,w){this.db=a,this._tx=w,this.name=p,this.schema=x,this.hook=a._allTables[p]?a._allTables[p].hook:l(null,{creating:[er,xe],reading:[Sr,Kn],updating:[Br,xe],deleting:[Er,xe]})})),this.Transaction=(s=this,f(fe.prototype,function(p,x,w,y,g){var E=this;p!=="readonly"&&x.forEach(function(B){B=(B=w[B])==null?void 0:B.yProps,B&&(x=x.concat(B.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=p,this.storeNames=x,this.schema=w,this.chromeTransactionDurability=y,this.idbtrans=null,this.on=l(this,"complete","error","abort"),this.parent=g||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(B,k){E._resolve=B,E._reject=k}),this._completion.then(function(){E.active=!1,E.on.complete.fire()},function(B){var k=E.active;return E.active=!1,E.on.error.fire(B),E.parent?E.parent._reject(B):k&&E.idbtrans&&E.idbtrans.abort(),je(B)})})),this.Version=(i=this,f(pa.prototype,function(p){this.db=i,this._cfg={version:p,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,f(Ze.prototype,function(p,x,w){if(this.db=c,this._ctx={table:p,index:x===":id"?null:x,or:w},this._cmp=this._ascending=le,this._descending=function(y,g){return le(g,y)},this._max=function(y,g){return 0<le(y,g)?y:g},this._min=function(y,g){return le(y,g)<0?y:g},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(p){0<p.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(p){!p.newVersion||p.newVersion<p.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(p.oldVersion/10))}),this._maxKey=Fe(t.IDBKeyRange),this._createTransaction=function(p,x,w,y){return new u.Transaction(p,x,w,u._options.chromeTransactionDurability,y)},this._fireOnBlocked=function(p){u.on("blocked").fire(p),Rt.filter(function(x){return x.name===u.name&&x!==u&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(p)})},this.use(Pr),this.use(gr),this.use(pr),this.use(fr),this.use(un),new Proxy(this,{get:function(p,x,w){var y;return x==="_vip"||(x==="table"?function(g){return Qt(u.table(g),b)}:(y=Reflect.get(p,x,w))instanceof cr?Qt(y,b):x==="tables"?y.map(function(g){return Qt(g,b)}):x==="_createTransaction"?function(){return Qt(y.apply(this,arguments),b)}:y)}}));this.vip=b,m.forEach(function(p){return p(u)})}var Ca,Fn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Wn=(Ua.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Ua.prototype[Fn]=function(){return this},Ua);function Ua(e){this._subscribe=e}try{Ca={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{Ca={indexedDB:null,IDBKeyRange:null}}function Wa(e){var t,n=!1,a=new Wn(function(s){var i=hn(e),c,u=!1,m={},$={},b={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),p&&nt.storagemutated.unsubscribe(w))}},p=(s.start&&s.start(b),!1),x=function(){return Fa(y)},w=function(g){Pt(m,g),It($,m)&&x()},y=function(){var g,E,B;!u&&Ca.indexedDB&&(m={},g={},c&&c.abort(),c=new AbortController,B=(k=>{var T=rn();try{i&&_n();var O=sn(e,k);return O=i?O.finally(on):O}finally{T&&bn()}})(E={subscr:g,signal:c.signal,requery:x,querier:e,trans:null}),Promise.resolve(B).then(function(k){n=!0,t=k,u||E.signal.aborted||(m={},(T=>{for(var O in T)if(oe(T,O))return;return 1})($=g)||p||(nt(et,w),p=!0),Fa(function(){return!u&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||u||Fa(function(){u||s.error&&s.error(k)})}))};return setTimeout(x,0),b});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var dn=Zt;function Ga(e){var t=Ge;try{Ge=!0,nt.storagemutated.fire(e),ba(e,!0)}finally{Ge=t}}bt(dn,X(X({},Lt),{delete:function(e){return new dn(e,{addons:[]}).delete()},exists:function(e){return new dn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=dn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(it(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==zn})}):R(n,t).toCollection().primaryKeys()).then(e)}catch{return je(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){me(this,e)}},ignoreTransaction:function(e){return H.trans?yn(H.transless,e):e()},vip:wn,async:function(e){return function(){try{var t=Ka(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(n){return je(n)}}},spawn:function(e,t,n){try{var a=Ka(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:z.resolve(a)}catch(s){return je(s)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?dn.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:z,debug:{get:function(){return yt},set:function(e){Aa(e)}},derive:en,extend:me,props:bt,override:na,Events:l,on:nt,liveQuery:Wa,extendObservabilitySet:Pt,getByKeyPath:zt,setByKeyPath:pt,delByKeyPath:function(e,t){typeof t=="string"?pt(e,t,void 0):"length"in t&&[].map.call(t,function(n){pt(e,n,void 0)})},shallowClone:Ba,deepClone:vt,getObjectDiff:Nt,cmp:le,asap:aa,minKey:-1/0,addons:[],connections:Rt,errnames:ra,dependencies:Ca,cache:cn,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),dn.maxKey=Fe(dn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(nt(et,function(e){Ge||(e=new CustomEvent(wt,{detail:e}),Ge=!0,dispatchEvent(e),Ge=!1)}),addEventListener(wt,function(e){e=e.detail,Ge||Ga(e)}));var Dn,Ge=!1,Gn=function(){};return typeof BroadcastChannel<"u"&&((Gn=function(){(Dn=new BroadcastChannel(wt)).onmessage=function(e){return e.data&&Ga(e.data)}})(),typeof Dn.unref=="function"&&Dn.unref(),nt(et,function(e){Ge||Dn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!Zt.disableBfCache&&e.persisted){yt&&console.debug("Dexie: handling persisted pagehide"),Dn?.close();for(var t=0,n=Rt;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!Zt.disableBfCache&&e.persisted&&(yt&&console.debug("Dexie: handling persisted pageshow"),Gn(),Ga({all:new ut(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof pn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Za[e.name]?e:(t=new Za[e.name](t||e.message,e),"stack"in e&&ht(t,"stack",{get:function(){return this.inner.stack}}),t)},Aa(yt),X(Zt,Object.freeze({__proto__:null,Dexie:Zt,Entity:Ia,PropModification:Mn,RangeSet:ut,add:function(e){return new Mn({add:e})},cmp:le,default:Zt,liveQuery:Wa,mergeRanges:An,rangesOverlap:La,remove:function(e){return new Mn({remove:e})},replacePrefix:function(e,t){return new Mn({replacePrefix:[e,t]})}}),{default:Zt}),Zt})})(yr)),yr.exports}var Ks=qs();const Or=Ns(Ks),ds=Symbol.for("Dexie"),Cr=globalThis[ds]||(globalThis[ds]=Or);if(Or.semVer!==Cr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Or.semVer} and ${Cr.semVer}`);const{liveQuery:ti,mergeRanges:ni,rangesOverlap:ai,RangeSet:ri,cmp:si,Entity:ii,PropModification:oi,replacePrefix:li,add:ci,remove:ui,DexieYProvider:di}=Cr,ze=new Cr("haushaltsbuch-db");ze.version(1).stores({years:"year",fixedTemplateState:"id"});ze.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});ze.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Sa="singleton";function xr(){return new Date().toISOString()}async function Zn(){return ze.years.orderBy("year").toArray()}async function Rs(P){return ze.years.get(P)}async function Qn(P){await ze.years.put(P)}async function Fr(){const P=await ze.fixedTemplateState.get(Sa);if(!P){const h={id:Sa,templates:[],version:xr(),updatedAt:new Date().toISOString()};return await ze.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Dr(P){const h=xr();return await ze.fixedTemplateState.put({id:Sa,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Ir(){const P=await ze.annualVariableFixedTemplateState.get(Sa);if(!P){const h={id:Sa,templates:[],version:xr(),updatedAt:new Date().toISOString()};return await ze.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Nr(P){const h=xr();return await ze.annualVariableFixedTemplateState.put({id:Sa,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function js(P){await ze.auditLog.put(P)}async function Lr(){return ze.auditLog.orderBy("timestampIso").toArray()}async function Vs(P){await ze.auditLog.clear(),P.length!==0&&await ze.auditLog.bulkPut(P)}async function Ys(){const P=await Zn(),[h,Ae,X]=await Promise.all([Fr(),Ir(),Lr()]);return{exportedAt:new Date().toISOString(),years:P,fixedTemplates:h.templates,annualVariableFixedTemplates:Ae.templates,auditLogEntries:X}}async function zs(P){await ze.transaction("rw",[ze.years,ze.fixedTemplateState,ze.annualVariableFixedTemplateState,ze.auditLog],async()=>{await ze.years.clear(),await ze.years.bulkPut(P.years),await Dr(P.fixedTemplates),await Nr(P.annualVariableFixedTemplates??[]),await Vs(P.auditLogEntries??[])})}function Ne(P){const h=P.replace(",",".").trim();if(!h)return 0;const Ae=Number.parseFloat(h);return Number.isNaN(Ae)?0:Math.round(Ae*100)}const Us=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function v(P){return Us.format(P/100)}function gt(P){return(P/100).toFixed(2)}function Be(P){return new Date(2026,P-1,1).toLocaleDateString("de-DE",{month:"long"})}const vs=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function fs(P){return vs.includes(P)}function Ws(P){switch(P){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const hs=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Gs(P){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ae="habu-theme",X="habu-backup-dirty",ve="habu-unexported-change-log",ae="habu-last-backup-filename",Ce="habu-recurring-budget-defaults";let re=null,me=null,dt=null,Ue=null,oe=!1,bt=!1;const ft=new WeakMap;function ht(){const o=P.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),C=l.getPropertyValue("--table-stripe").trim(),M=l.getPropertyValue("--table-border").trim(),A=l.getPropertyValue("--budget-under").trim(),q=l.getPropertyValue("--danger-2").trim(),I=96,J=250,U=N=>1-Math.pow(1-Math.max(0,Math.min(1,N)),3);o.forEach(N=>{N.dataset.hoverBound!=="1"&&(N.dataset.hoverBound="1",N.addEventListener("mouseenter",()=>{N.dataset.hovering="1",ht()}),N.addEventListener("mouseleave",()=>{delete N.dataset.hovering,delete N.dataset.hoverX,ht()}),N.addEventListener("mousemove",ke=>{const ye=N.getBoundingClientRect(),Ke=Math.round(ke.clientX-ye.left);N.dataset.hoverX=String(Ke),ht()}));const te=Number.parseInt(N.dataset.budgetCents??"0",10),pe=Number.parseInt(N.dataset.actualCents??"0",10),_e=N.dataset.label??"Kategorie",be=N.dataset.hovering==="1",se=`${_e}|${te}|${pe}`,Pe=N.dataset.lastRenderSignature!==se;N.dataset.lastRenderSignature=se;const Oe=Math.max(120,Math.floor(N.clientWidth||120)),we=window.devicePixelRatio||1,Ze=Math.floor(Oe*we),Se=Math.floor(I*we);(N.width!==Ze||N.height!==Se)&&(N.width=Ze,N.height=Se);const D=N.getContext("2d");if(!D)return;const lt=Math.max(1,te,pe),et=Math.min(1,Math.max(0,te/lt)),wt=Math.min(1,Math.max(0,pe/lt)),nt=te-pe,fe=te>0?pe/te*100:pe>0?100:0,Le=8,Ee=Le,We=34,Ve=Oe-Le*2,Fe=22,qe=Number.parseInt(N.dataset.hoverX??"-1",10),st=(ke,ye,Ke,De,tt)=>{D.beginPath(),D.moveTo(ke+tt,ye),D.lineTo(ke+Ke-tt,ye),D.quadraticCurveTo(ke+Ke,ye,ke+Ke,ye+tt),D.lineTo(ke+Ke,ye+De-tt),D.quadraticCurveTo(ke+Ke,ye+De,ke+Ke-tt,ye+De),D.lineTo(ke+tt,ye+De),D.quadraticCurveTo(ke,ye+De,ke,ye+De-tt),D.lineTo(ke,ye+tt),D.quadraticCurveTo(ke,ye,ke+tt,ye),D.closePath()},Pn=ke=>{D.setTransform(1,0,0,1,0,0),D.clearRect(0,0,N.width,N.height),D.scale(we,we),st(Ee,We,Ve,Fe,8),D.fillStyle=C,D.fill(),D.strokeStyle=M,D.lineWidth=1,D.stroke();const ye=[.6,.25,.15],Ke=[.1,.16,.24];let De=0;ye.forEach((St,ct)=>{const Mt=Ve*St;D.save(),D.globalAlpha=Ke[ct]??.1,D.fillStyle=d,D.fillRect(Ee+De,We,Mt,Fe),D.restore(),De+=Mt});const tt=te>0&&pe>te?q:A,Ft=Ve*wt*ke;st(Ee,We+3,Ft,Fe-6,6),D.fillStyle=tt,D.fill(),be&&(D.save(),D.strokeStyle=tt,D.lineWidth=1.5,D.globalAlpha=.8,st(Ee-1,We+2,Math.max(2,Ft+2),Fe-4,7),D.stroke(),D.restore());const jt=Ee+Ve*et;D.strokeStyle=f,D.lineWidth=be?3:2,D.beginPath(),D.moveTo(jt,We-3),D.lineTo(jt,We+Fe+3),D.stroke(),be&&qe>=Ee&&qe<=Ee+Ve&&(D.save(),D.strokeStyle=f,D.globalAlpha=.35,D.lineWidth=1,D.beginPath(),D.moveTo(qe,We-8),D.lineTo(qe,We+Fe+8),D.stroke(),D.restore()),D.fillStyle=f,D.font="600 12px system-ui, -apple-system, sans-serif",D.textAlign="left",D.textBaseline="top",D.fillText(_e,Ee,10);const Xt=fe*ke;if(D.fillStyle=fe>100?q:fe<100?A:d,D.textAlign="right",D.fillText(`${Xt.toFixed(0)}%`,Ee+Ve,10),D.fillStyle=d,D.font="500 11px system-ui, -apple-system, sans-serif",D.textAlign="left",D.textBaseline="top",D.fillText(`Ist ${v(pe)} · Ziel ${v(te)} · Δ ${nt>=0?"+":""}${v(nt)}`,Ee,64),be){const St=`Nutzung ${fe.toFixed(1)}%`;D.font="600 11px system-ui, -apple-system, sans-serif";const ct=8,Mt=5,Vt=22,_=D.measureText(St).width+ct*2,R=Number.isFinite(qe)?qe-_/2:Ee+Ve-_,it=Math.min(Ee+Ve-_,Math.max(Ee,R)),wn=We-Vt-8;D.save(),D.fillStyle=f,D.globalAlpha=.92,st(it,wn,_,Vt,6),D.fill(),D.restore(),D.fillStyle=C,D.textAlign="left",D.textBaseline="top",D.fillText(St,it+ct,wn+Mt)}},kt=ft.get(N);if(kt&&window.cancelAnimationFrame(kt),!Pe){Pn(1);return}const _t=performance.now(),$t=ke=>{const ye=ke-_t,Ke=Math.min(1,ye/J);if(Pn(U(Ke)),Ke<1){const De=window.requestAnimationFrame($t);ft.set(N,De);return}ft.delete(N)},Jt=window.requestAnimationFrame($t);ft.set(N,Jt)})}function en(){P.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),C=l.querySelector("[data-year-trend-active-net]"),M=l.querySelector("[data-year-trend-active-income]"),A=l.querySelector("[data-year-trend-active-expense]"),q=l.querySelector("[data-year-trend-active-delta]"),I=l.querySelector("[data-year-trend-live]");if(!d||!C||!M||!A||!q)return;const J=(te,pe)=>{te.classList.remove("danger","budget-under");const _e=pe<0?"danger":pe>0?"budget-under":"";_e&&te.classList.add(_e)},U=te=>{const pe=te.dataset.monthLabel??"-",_e=Number.parseInt(te.dataset.netCents??"0",10),be=Number.parseInt(te.dataset.actualNetCents??"0",10),se=Number.parseInt(te.dataset.incomeCents??"0",10),Pe=Number.parseInt(te.dataset.expenseCents??"0",10),Oe=Number.parseInt(te.dataset.deltaCents??"0",10);d.textContent=pe,C.textContent=v(_e),M.textContent=v(se),A.textContent=v(Pe),q.textContent=`${Oe>=0?"+":""}${v(Oe)}`,J(C,_e),J(q,Oe),f.forEach(we=>{const Ze=we===te;we.classList.toggle("is-active",Ze),we.setAttribute("aria-pressed",String(Ze))}),I&&(I.textContent=`${pe}: Kalkulierter Saldo ${v(_e)}, Ist-Saldo ${v(be)}, Einkommen ${v(se)}, Ausgaben ${v(Pe)}`)};f.forEach(te=>{const pe=()=>{U(te)};te.addEventListener("mouseenter",pe),te.addEventListener("focus",pe),te.addEventListener("click",pe)});const N=f.find(te=>te.dataset.pointDefault==="1")??f[f.length-1];N&&U(N)})}function ea(o){if(o==="dashboard"){const l=h.years.slice().sort((d,C)=>C.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ne()}function Ea(){h.topModal&&(h.topModal=null,ne())}function ta(){h.showUnexportedChangeLogModal=!0,ne()}function na(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ne())}function Nn(){h.showPersistentAuditLogModal=!0,ne()}function aa(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ne())}function zt(){oe||(oe=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),na();return}if(h.showPersistentAuditLogModal){o.preventDefault(),aa();return}h.topModal&&(o.preventDefault(),Ea())}}))}function pt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ba(){const o=P.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",pt())}function wr(){if(bt)return;bt=!0;const o=()=>{Ba(),ht()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function _a(){if(re&&document.body.contains(re))return re;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return re=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),re=l,l}function Ja(){if(me&&document.body.contains(me))return me;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return me=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),me=l,l}function Ln(){if(Ue&&document.body.contains(Ue))return Ue;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return Ue=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),Ue=l,l}function vt(){if(!me){dt=null;return}me.innerHTML="",dt=null}function qn(){Ue&&(Ue.innerHTML="")}function Ma(o,l,f){const d=new Date,C=d.getFullYear(),M=d.getMonth()+1,A=d.getDate(),q=new Date(o,l,0).getDate();if(o<C||o===C&&l<M)return{occurrences:0,remainingDays:0};const I=o===C&&l===M?Math.min(A,q):1,J=Math.max(0,q-I+1);let U=0;for(let N=I;N<=q;N+=1)new Date(o,l-1,N).getDay()===f&&(U+=1);return{occurrences:U,remainingDays:J}}async function Pa(o,l){const f=Re();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await Xe(`Wocheneinkauf geplant: ${hs.find(d=>d.value===o)?.label??"Wochentag"} mit ${v(f.weeklyShoppingEstimateCents)} €`),ne())}function kr(){const o=Re(),l=Ut();if(!o||!l)return;const f=Ln();qn();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,C=o.weeklyShoppingEstimateCents??0,M=l.year,A=o.month,q=jn(M,A),I=q?rt(q):{foodCents:0},J=q?q.foodBudgetCents??0:0,U=I.foodCents,N=J-U;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${hs.map(fe=>`<option value="${fe.value}" ${fe.value===d?"selected":""}>${fe.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${gt(C)}" />
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
    `;const te=f.querySelector(".weekly-shopping-modal-backdrop"),pe=f.querySelector("#weekly-shopping-weekday"),_e=f.querySelector("#weekly-shopping-estimate"),be=f.querySelector("#weekly-shopping-occurrences"),se=f.querySelector("#weekly-shopping-total"),Pe=f.querySelector("#weekly-shopping-rest-before"),Oe=f.querySelector("#weekly-shopping-rest-after"),we=f.querySelector("#weekly-shopping-days-left"),Ze=f.querySelector("#weekly-shopping-per-day"),Se=f.querySelector("#weekly-shopping-cancel"),D=f.querySelector("#weekly-shopping-save");function lt(){const fe=Number.parseInt(pe?.value??"1",10);return Number.isInteger(fe)&&fe>=0&&fe<=6?fe:1}function et(){return Math.max(0,Ne(_e?.value??"0"))}function wt(){const fe=lt(),Le=et(),{occurrences:Ee,remainingDays:We}=Ma(M,A,fe),Ve=Ee*Le,Fe=N-Ve,qe=We>0?Math.trunc(Fe/We):0;be&&(be.textContent=`${Ee}`),se&&(se.textContent=`${v(Ve)} €`),Pe&&(Pe.textContent=`${v(N)} €`),Oe&&(Oe.textContent=`${v(Fe)} €`,Oe.className=Fe<0?"danger":Fe>0?"budget-under":""),we&&(we.textContent=`${We}`),Ze&&(Ze.textContent=`${v(qe)} €`,Ze.className=qe<0?"danger":qe>0?"budget-under":"")}async function nt(){await Pa(lt(),et()),qn()}Se?.addEventListener("click",()=>{qn()}),D?.addEventListener("click",async()=>{await nt()}),pe?.addEventListener("change",()=>{wt()}),_e?.addEventListener("input",()=>{wt()}),_e?.addEventListener("keydown",async fe=>{if(fe.key==="Escape"){fe.preventDefault(),qn();return}fe.key==="Enter"&&(fe.preventDefault(),await nt())}),te?.addEventListener("click",fe=>{fe.target===te&&qn()}),window.setTimeout(()=>{_e?.focus(),_e?.select(),wt()},0)}function tn(o,l){let f=o;const d=l.min;if(d){const M=Number.parseFloat(d);if(!Number.isNaN(M)){const A=Math.round(M*100);f=Math.max(f,A)}}const C=l.max;if(C){const M=Number.parseFloat(C);if(!Number.isNaN(M)){const A=Math.round(M*100);f=Math.min(f,A)}}return f}function at(o){if(o.disabled)return;const l=Ja();vt(),dt=o;const f=Ne(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${v(f)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${v(f)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${v(f)} €</strong></div>
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
    `;const C=l.querySelector(".amount-modal-backdrop"),M=l.querySelector("#amount-modal-delta"),A=l.querySelector("#amount-modal-next-delta"),q=l.querySelector("#amount-modal-next-overwrite"),I=l.querySelector("#amount-modal-cancel"),J=l.querySelector("#amount-modal-overwrite"),U=l.querySelector("#amount-modal-apply");function N(){const se=Ne(M?.value??"0");return tn(f+se,o)}function te(){const se=Ne(M?.value??"0");return tn(se,o)}function pe(){A&&(A.textContent=`${v(N())} €`),q&&(q.textContent=`${v(te())} €`)}function _e(){const se=dt;if(!se){vt();return}const Pe=N();vt(),se.value=gt(Pe),se.dispatchEvent(new Event("change",{bubbles:!0}))}function be(){const se=dt;if(!se){vt();return}const Pe=te();vt(),se.value=gt(Pe),se.dispatchEvent(new Event("change",{bubbles:!0}))}I?.addEventListener("click",()=>{vt()}),J?.addEventListener("click",()=>{be()}),U?.addEventListener("click",()=>{_e()}),M?.addEventListener("input",()=>{pe()}),M?.addEventListener("keydown",se=>{if(se.key==="Escape"){se.preventDefault(),vt();return}se.key==="Enter"&&(se.preventDefault(),_e())}),C?.addEventListener("click",se=>{se.target===C&&vt()}),window.setTimeout(()=>{M?.focus(),M?.select(),pe()},0)}function ue(o,l="success"){const f=_a(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const C=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},C)}function hn(){return new Date().getMonth()+1}function Lt(){return new Date().getFullYear()}function Xa(o){const l=Lt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function pn(){return new Date().toISOString().slice(0,10)}function Qa(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function Bt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Sn(){const o=localStorage.getItem(Ae);return o&&fs(o)?o:"light"}function ra(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Ae,o)}function $r(){return localStorage.getItem(X)==="1"}function Z(o){localStorage.setItem(X,o?"1":"0")}function Za(){const o=localStorage.getItem(ve);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function xe(o){localStorage.setItem(ve,JSON.stringify(o.slice(-200)))}function Kn(){const o=localStorage.getItem(ae);if(!o)return null;const l=o.trim();return l||null}function Sr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(Ce);if(!l)return o;try{const f=JSON.parse(l),d=C=>typeof C=="number"&&Number.isFinite(C)?C:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function vn(o){localStorage.setItem(Ce,JSON.stringify(o))}function er(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function Er(o){const l=o.trim();l&&localStorage.setItem(ae,l)}async function Br(){_a(),ra(Sn()),h.hasUnexportedChanges=$r(),h.unexportedChangeLog=Za(),h.persistentAuditLog=await Lr(),h.lastBackupFileName=Kn(),h.recurringBudgetDefaults=Sr(),zt(),wr();const[o,l,f]=await Promise.all([Zn(),Fr(),Ir()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Ta(h.years),bn(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Aa(h.years),o.length>0&&(h.selectedYear=Xa(o),h.selectedMonth=hn()),ne()}function Ta(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const C=Number(d.weeklyShoppingWeekday);Number.isInteger(C)&&C>=0&&C<=6?d.weeklyShoppingWeekday=C:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(C=>{const M=l(C.incomeSource);if(!M){const{incomeSource:A,...q}=C;return q}return{...C,incomeSource:M}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((C,M)=>C+M.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((C,M)=>C+M.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Rn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function yt(o){return o==="fresh"||o==="salary"||!o}async function Aa(o){for(const l of o)await Qn(l)}function Ut(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Re(){const o=Ut();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function jn(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function rt(o){const l=o.days.reduce((q,I)=>q+I.foodCents,0),f=o.days.reduce((q,I)=>q+I.goingOutCents,0),d=o.fixedCosts.reduce((q,I)=>q+I.actualCents,0),C=o.variableCosts.reduce((q,I)=>q+I.amountCents,0)+o.variablePositions.reduce((q,I)=>q+I.actualCents,0),M=o.miscCosts.reduce((q,I)=>q+I.amountCents,0),A=l+f+d+C+M;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:C,miscCents:M,totalCents:A}}function qt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((A,q)=>A+q.plannedCents,0),C=o.variablePositions.reduce((A,q)=>A+q.budgetCents,0),M=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??C)+M}function En(o){return o.months.reduce((l,f)=>{const d=rt(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function Vn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:rt(l)}))}function Yn(o){const l=o.months.reduce((A,q)=>A+(q.foodBudgetCents??0),0),f=o.months.reduce((A,q)=>A+(q.goingOutBudgetCents??0),0),d=o.months.reduce((A,q)=>A+(q.fixedBudgetCents??q.fixedCosts.reduce((I,J)=>I+J.plannedCents,0)),0),C=o.months.reduce((A,q)=>A+(q.variableBudgetCents??q.variablePositions.reduce((I,J)=>I+J.budgetCents,0)),0),M=o.months.reduce((A,q)=>A+(q.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:C,miscCents:M,totalCents:l+f+d+C+M}}function Bn(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,C)=>d+(yt(C.incomeSource)?C.amountCents:0),0),0)}function Wt(o,l){const f=o.months.slice().sort((d,C)=>d.month-C.month)[0];return f?l.get(de(o.year,f.month))?.carriedFromPreviousCents??0:0}function sa(){const o=h.years.slice().sort((d,C)=>d.year-C.year).flatMap(d=>d.months.slice().sort((C,M)=>C.month-M.month).map(C=>({year:d.year,month:C}))),l=new Map;let f=0;return o.forEach(({year:d,month:C},M)=>{const A=C.carryoverOverrideCents,q=typeof A=="number",I=q?A:f,J=M>0||q,U=C.incomes.reduce((_e,be)=>_e+(yt(be.incomeSource)?be.amountCents:0),0),N=qt(C),te=U+I,pe=te-N;l.set(de(d,C.month),{hasPreviousMonth:J,carriedFromPreviousCents:I,recordedIncomeCents:U,effectiveIncomeCents:te,plannedBudgetCents:N,netCents:pe}),f=pe}),l}function ot(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function nn(o){return`${o>0?"+":""}${v(o)}`}function H(o,l){const f=o-l,d=ot(l,o);return`${v(o)} <span class="eval-diff ${d}">(Δ ${nn(f)})</span>`}function Gt(o,l){const f=o!==null,d=f?o-l:null,C=f?ot(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${v(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${v(l)} €</strong>
      </div>
      <div class="column-overview-row ${C}">
        <span>Diff</span>
        <strong>${d===null?"-":`${v(d)} €`}</strong>
      </div>
    </div>`}async function mn(o){if(await Rs(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=os(o,h.fixedTemplates,h.fixedTemplateVersion);er(f),rn(f),await Qn(f),h.years=await Zn(),gn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=hn(),ue(`Jahr ${o} wurde angelegt.`),ne()}function gn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,Z(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,C={id:Ot("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,C].slice(-200),xe(h.unexportedChangeLog);const M={id:Ot("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,M].slice().sort((A,q)=>A.timestampIso.localeCompare(q.timestampIso)),js(M).catch(A=>{console.error("Audit-Log konnte nicht gespeichert werden",A),ue("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function z(o){const l=o.trim();l&&(h.lastBackupFileName=l,Er(l))}function ia(o){h.hasUnexportedChanges=!1,Z(!1),h.unexportedChangeLog=[],xe([]),h.showUnexportedChangeLogModal=!1,z(o)}async function Xe(o){const l=Ut();l&&(await Qn(l),h.years=await Zn(),gn(o))}async function Ct(o){for(const l of h.years)await Qn(l);h.years=await Zn(),gn(o)}function de(o,l){return o*100+l}function an(o,l,f){const d=`${o} auf ${v(f)} € gesetzt`;return f>l?`${d} (erhöht um ${v(f-l)} €)`:f<l?`${d} (verringert um ${v(l-f)} €)`:d}function Oa(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function tr(o,l){const f=Oa(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(M=>M.month===f.month);!d||d.variablePositions.some(M=>M.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Ot("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],xt(d))}function rn(o){h.annualVariableFixedTemplates.forEach(l=>{tr(l,o)})}function bn(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const C=d.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),M=d.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");C&&(d.variablePositions=d.variablePositions.filter(A=>A.autoAnnualTemplateId?l.has(A.autoAnnualTemplateId):!0),xt(d)),M&&(d.fixedCosts=d.fixedCosts.filter(A=>!A.autoAnnualTemplateId),Kt(d))}),rn(f)})}function Kt(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function xt(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function Me(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function Qe(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Me());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function _r(o,l){const f=de(l.year,l.month);h.years.forEach(d=>{d.months.forEach(C=>{if(de(d.year,C.month)<f)return;C.fixedCosts.some(A=>A.templateId===o.id)||(C.fixedCosts.push({id:Ot("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Kt(C))})})}function oa(o,l,f){const d=de(f.year,f.month);h.years.forEach(C=>{C.months.forEach(M=>{de(C.year,M.month)<d||(M.fixedCosts=M.fixedCosts.map(A=>A.templateId!==l.id?A:{...A,name:l.name,plannedCents:l.plannedCents,actualCents:A.actualCents===o.plannedCents?l.plannedCents:A.actualCents}),Kt(M))})})}function la(o,l){const f=de(l.year,l.month);h.years.forEach(d=>{d.months.forEach(C=>{de(d.year,C.month)<f||(C.fixedCosts=C.fixedCosts.filter(M=>M.templateId!==o),Kt(C))})})}async function ca(o,l){const f=o.trim();if(!f)return;const d=Qe();if(!d)return;const C=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const M=h.fixedTemplates.find(q=>q.id===h.editingFixedTemplateId);if(!M)return;const A={...M,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(q=>q.id===h.editingFixedTemplateId?A:q),oa(M,A,d)}else{const M={id:Ot("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,M],_r(M,d)}h.fixedTemplateVersion=await Dr(h.fixedTemplates),h.editingFixedTemplateId=null,await Ct(C?`Fixkosten-Vorlage aktualisiert: ${f} (${v(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${v(l)} €)`),ue(C?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function Mr(o){h.editingFixedTemplateId=o,ne()}function sn(){h.editingFixedTemplateId=null,ne()}async function _n(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=Qe();if(!f)return;const d=h.fixedTemplates.find(C=>C.id===o);h.fixedTemplates=h.fixedTemplates.filter(C=>C.id!==o),la(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Dr(h.fixedTemplates),await Ct(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),ue("Fixkosten-Vorlage wurde gelöscht."),ne()}async function on(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const C=Oa(l);if(!C){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const M={id:Ot("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,M],h.years.forEach(A=>{tr(M,A)}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await Ct(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${v(f)} €, jährlich in ${Be(C.month)})`),ue("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function ua(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(C=>{C.variablePositions=C.variablePositions.filter(M=>M.autoAnnualTemplateId!==o),xt(C),C.fixedCosts=C.fixedCosts.filter(M=>M.autoAnnualTemplateId!==o),Kt(C)})}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await Ct(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),ue("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function nr(o,l,f){const d=Re();if(!d)return;const M=d.days.find(A=>A.isoDate===o)?.[l]??0;d.days=d.days.map(A=>A.isoDate===o?{...A,[l]:f}:A),await Xe(an(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,M,f)),ne()}async function ln(o,l){const f=Re();if(!f)return;const d=f.fixedCosts.find(C=>C.id===o);f.fixedCosts=f.fixedCosts.map(C=>C.id===o?{...C,actualCents:l}:C),await Xe(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${v(l)} €`),ne()}async function ar(o,l){const f=Re();if(!f)return;const d=f.fixedCosts.find(M=>M.id===o);if(!d)return;const C=d.plannedCents;f.fixedCosts=f.fixedCosts.map(M=>M.id===o?{...M,plannedCents:l}:M),Kt(f),await Xe(an(`Fixkosten-Budget angepasst: ${d.name}`,C,l)),ne()}async function yn(o,l){const f=Re();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const C={id:Ot("fixed"),templateId:Ot("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[C,...f.fixedCosts],Kt(f),await Xe(`Fixkosten-Position hinzugefügt: ${d} (${v(l)} €)`),ue("Fixkosten-Position wurde hinzugefügt."),ne()}async function rr(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Re();if(!f)return;const d=f.fixedCosts.find(C=>C.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(C=>C.id!==o),Kt(f),await Xe(`Fixkosten-Position gelöscht: ${d.name}`),ue("Fixkosten-Position wurde gelöscht."),ne())}async function Fa(o){await Rt("fixedBudgetCents",o,"Fixkosten")}async function je(o){await Rt("foodBudgetCents",o,"Essen")}async function Cn(o){await Rt("goingOutBudgetCents",o,"Ausgehen")}async function Ht(o){await Rt("miscBudgetCents",o,"Sonstiges")}async function sr(o){await Rt("variableBudgetCents",o,"Variable Kosten")}async function Rt(o,l,f){const d=Re(),C=h.selectedYear;if(!d||!C||d[o]===l)return;const M=d[o];if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const q=de(C,h.selectedMonth);h.years.forEach(J=>{J.months.forEach(U=>{de(J.year,U.month)<=q||(U[o]=l)})}),h.recurringBudgetDefaults[o]=l,vn(h.recurringBudgetDefaults);const I=an(`Budget "${f}"`,M??0,l);await Ct(`${I} (inkl. zukünftiger Monate)`),ue(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ne();return}await Xe(an(`Budget "${f}"`,M??0,l)),ne()}async function zn(o){const l=Re();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Xe(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${v(o)} € gesetzt`),ne())}async function da(o,l,f){const d=Re(),C=h.selectedYear;if(!d||!C)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Ot("varpos"),name:M,budgetCents:l,actualCents:0},...d.variablePositions],xt(d),f){const A=de(C,h.selectedMonth);h.years.forEach(q=>{q.months.forEach(I=>{de(q.year,I.month)<=A||(I.variablePositions=[{id:Ot("varpos"),name:M,budgetCents:l,actualCents:0},...I.variablePositions],xt(I))})}),await Ct(`Variable Position hinzugefügt: ${M} (${v(l)} €) für zukünftige Monate`),ue("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await Xe(`Variable Position hinzugefügt: ${M} (${v(l)} €)`),ue("Variable Position wurde hinzugefügt."),ne()}async function Da(o,l){const f=Re();if(!f)return;const d=f.variablePositions.find(M=>M.id===o),C=d?.actualCents??0;f.variablePositions=f.variablePositions.map(M=>M.id===o?{...M,actualCents:l}:M),await Xe(an(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,C,l)),ne()}async function xn(o,l){const f=Re();if(!f)return;const d=f.variablePositions.find(M=>M.id===o),C=d?.budgetCents??0;f.variablePositions=f.variablePositions.map(M=>M.id===o?{...M,budgetCents:l}:M),xt(f),await Xe(an(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,C,l)),ne()}async function ir(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Re(),d=h.selectedYear;if(!f||!d)return;const C=f.variablePositions.find(I=>I.id===o);if(!C)return;const M=de(d,h.selectedMonth),q=h.years.some(I=>I.months.some(J=>de(I.year,J.month)>M&&J.variablePositions.some(U=>U.name===C.name&&U.budgetCents===C.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(I=>I.id!==o),xt(f),q){h.years.forEach(I=>{I.months.forEach(J=>{de(I.year,J.month)<=M||(J.variablePositions=J.variablePositions.filter(U=>!(U.name===C.name&&U.budgetCents===C.budgetCents)),xt(J))})}),await Ct(`Variable Position gelöscht: ${C.name} (inkl. zukünftiger Monate)`),ue("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Xe(`Variable Position gelöscht: ${C.name}`),ue("Variable Position wurde gelöscht."),ne()}async function fa(o){const l=Re(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(U=>U.id===o);if(!d)return;const C={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let M=h.years.find(U=>U.year===C.year);if(!M){const U=os(C.year,h.fixedTemplates,h.fixedTemplateVersion);er(U),rn(U),await Qn(U),h.years=[...h.years,U].sort((N,te)=>N.year-te.year),M=U}const A=M.months.find(U=>U.month===C.month);if(!A)return;const q=A.variablePositions.some(U=>U.id===d.id||U.name===d.name&&U.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(U=>U.id!==o),xt(l),!q){const N=A.variablePositions.some(te=>te.id===d.id)?{...d,id:Ot("varpos")}:d;A.variablePositions=[N,...A.variablePositions],xt(A)}const I=`${Be(C.month)} ${C.year}`,J=`Variable Position verschoben: ${d.name} → ${I}`;if(C.year===f)await Xe(J);else{const U=Ut();if(!U)return;await Qn(U),await Qn(M),h.years=await Zn(),Ta(h.years),gn(J)}ue(q?`Position entfernt (im Folgemonat schon vorhanden: ${I}).`:`Position in den Folgemonat verschoben: ${I}.`),ne()}async function Ia(o,l,f){const d=Re(),C=h.selectedYear;if(!d||!C)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=ls(M,l);if(d.miscCosts=[A,...d.miscCosts],f){const q=de(C,h.selectedMonth);h.years.forEach(I=>{I.months.forEach(J=>{de(I.year,J.month)<=q||(J.miscCosts=[ls(M,l),...J.miscCosts])})}),await Ct(`Sonstige Position hinzugefügt: ${M} (${v(l)} €) für zukünftige Monate`),ue("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await Xe(`Sonstige Position hinzugefügt: ${M} (${v(l)} €)`),ue("Sonstige Position wurde hinzugefügt."),ne()}async function le(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Re(),d=h.selectedYear;if(!f||!d)return;const C=f.miscCosts.find(I=>I.id===o);if(!C)return;const M=de(d,h.selectedMonth),q=h.years.some(I=>I.months.some(J=>de(I.year,J.month)>M&&J.miscCosts.some(U=>U.description===C.description&&U.amountCents===C.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(I=>I.id!==o),q){h.years.forEach(I=>{I.months.forEach(J=>{de(I.year,J.month)<=M||(J.miscCosts=J.miscCosts.filter(U=>!(U.description===C.description&&U.amountCents===C.amountCents)))})}),await Ct(`Sonstige Position gelöscht: ${C.description} (${v(C.amountCents)} €) inkl. zukünftiger Monate`),ue("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Xe(`Sonstige Position gelöscht: ${C.description} (${v(C.amountCents)} €)`),ue("Sonstige Position wurde gelöscht."),ne()}async function Na(o,l,f,d){const C=Re(),M=h.selectedYear;if(!C||!M)return;const A=o.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const q=cs(A,l,f);if(C.incomes=[q,...C.incomes],d){const I=de(M,h.selectedMonth);h.years.forEach(J=>{J.months.forEach(U=>{de(J.year,U.month)<=I||(U.incomes=[cs(A,l,f),...U.incomes])})}),await Ct(`Einkommen hinzugefügt: ${A} (${v(l)} €, ${Rn(f)}) für zukünftige Monate`),ue("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await Xe(`Einkommen hinzugefügt: ${A} (${v(l)} €, ${Rn(f)})`),ue("Einkommen wurde hinzugefügt."),ne()}async function or(o,l){const f=Re();if(!f)return;const d=f.incomes.find(C=>C.id===o);d&&(f.incomes=f.incomes.map(C=>{if(C.id!==o)return C;if(!l){const{incomeSource:M,...A}=C;return A}return{...C,incomeSource:l}}),await Xe(`Einkommensart angepasst: ${d.description} → ${Rn(l)}`),ne())}async function ha(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Re(),d=h.selectedYear;if(!f||!d)return;const C=f.incomes.find(I=>I.id===o);if(!C)return;const M=de(d,h.selectedMonth),q=h.years.some(I=>I.months.some(J=>de(I.year,J.month)>M&&J.incomes.some(U=>U.description===C.description&&U.amountCents===C.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(I=>I.id!==o),q){h.years.forEach(I=>{I.months.forEach(J=>{de(I.year,J.month)<=M||(J.incomes=J.incomes.filter(U=>!(U.description===C.description&&U.amountCents===C.amountCents)))})}),await Ct(`Einkommen gelöscht: ${C.description} (${v(C.amountCents)} €) inkl. zukünftiger Monate`),ue("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Xe(`Einkommen gelöscht: ${C.description} (${v(C.amountCents)} €)`),ue("Einkommen wurde gelöscht."),ne()}async function Mn(){const o=await Ys(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${pn()}-${Qa()}.json`,C=document.createElement("a");C.href=f,C.download=d,C.click(),URL.revokeObjectURL(f),ia(d),ne(),ue("Backup wurde exportiert.")}async function lr(o){const l=await o.text(),f=JSON.parse(l);await zs(f);const[d,C,M]=await Promise.all([Zn(),Fr(),Ir()]);h.years=d,h.annualVariableFixedTemplates=M.templates,h.annualVariableFixedTemplateVersion=M.version,Ta(h.years),bn(h.years),h.fixedTemplates=C.templates,h.fixedTemplateVersion=C.version,await Aa(h.years),h.persistentAuditLog=await Lr(),h.selectedYear=Xa(d),h.selectedMonth=hn(),ia(o.name),ue("Backup wurde importiert."),ne()}function ne(){const o=Ut(),l=Re(),f=pn(),d=l?rt(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},C=o?En(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},M=o?Vn(o):[],A=l?l.foodBudgetCents??0:0,q=l?l.goingOutBudgetCents??0:0,I=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,S)=>r+S.plannedCents,0):0,J=l?l.variableBudgetCents??l.variablePositions.reduce((r,S)=>r+S.budgetCents,0):0,U=l?l.miscBudgetCents??0:0,N=o?o.months.reduce((r,S)=>r+(S.foodBudgetCents??0),0):0,te=o?o.months.reduce((r,S)=>r+(S.goingOutBudgetCents??0),0):0,pe=o?o.months.reduce((r,S)=>r+(S.fixedBudgetCents??S.fixedCosts.reduce((V,Q)=>V+Q.plannedCents,0)),0):0,_e=o?o.months.reduce((r,S)=>r+(S.variableBudgetCents??S.variablePositions.reduce((V,Q)=>V+Q.budgetCents,0)),0):0,be=o?o.months.reduce((r,S)=>r+(S.miscBudgetCents??0),0):0,se=l?l.incomes.reduce((r,S)=>r+(yt(S.incomeSource)?S.amountCents:0),0):0,Pe=l?l.incomes.reduce((r,S)=>r+(S.incomeSource==="salary"?S.amountCents:0),0):0,Oe=l?l.incomes.reduce((r,S)=>r+(S.incomeSource==="fresh"?S.amountCents:0),0):0,we=sa(),Ze=o?we.get(de(o.year,h.selectedMonth)):void 0,Se=o?o.months.slice().sort((r,S)=>r.month-S.month)[0]:void 0,D=Ze?.carriedFromPreviousCents??0,lt=Ze?.hasPreviousMonth??!1,et=Ze?.effectiveIncomeCents??se,wt=l?qt(l):0,nt=Ze?.netCents??se-wt,fe=et-d.totalCents,Le=Pe-d.totalCents,Ee=d.totalCents>0?`${(Pe/d.totalCents*100).toFixed(1)} %`:"-",We=D<0?"danger":D>0?"budget-under":"",Ve=nt<0?"danger":nt>0?"budget-under":"",Fe=fe<0?"danger":fe>0?"budget-under":"",qe=o?o.months.reduce((r,S)=>r+S.incomes.reduce((V,Q)=>V+(yt(Q.incomeSource)?Q.amountCents:0),0),0):0,st=o?o.months.reduce((r,S)=>r+S.incomes.reduce((V,Q)=>V+(Q.incomeSource==="salary"?Q.amountCents:0),0),0):0,Pn=o?o.months.reduce((r,S)=>r+S.incomes.reduce((V,Q)=>V+(Q.incomeSource==="fresh"?Q.amountCents:0),0),0):0,kt=o&&Se?we.get(de(o.year,Se.month))?.carriedFromPreviousCents??0:0,_t=qe+kt,$t=_t-C.totalCents,Jt=st-C.totalCents,ke=C.totalCents>0?`${(st/C.totalCents*100).toFixed(1)} %`:"-",ye=kt<0?"danger":kt>0?"budget-under":"",Ke=$t<0?"danger":$t>0?"budget-under":"",De=A+q+I+J+U,tt=A+q,Ft=d.foodCents+d.goingOutCents,jt=tt-Ft,Xt=ot(Ft,tt),St=N+te+pe+_e+be,ct=et-De,Mt=_t-St,Vt=De-d.totalCents,pa=St-C.totalCents,_=r=>r<0?"danger":r>0?"budget-under":"",R=(r,S)=>S<=0?"muted":r>=S?"budget-under":"danger",it=R(Pe,d.totalCents),wn=R(st,C.totalCents),Te=(r,S)=>{if(S<=0)return"0%";const Q=Math.max(0,r)/S*100;return`${Math.min(100,Math.max(0,Q)).toFixed(1)}%`},ut=(r,S)=>{if(S<=0)return r>0?100:0;const V=Math.max(0,r)/S*100;return Math.max(0,V)},Tn=[{label:"Essen",budgetCents:A,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:q,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:I,actualCents:d.fixedCents},{label:"Variable",budgetCents:J,actualCents:d.variableCents},{label:"Sonstige",budgetCents:U,actualCents:d.miscCents}];Math.max(1,...Tn.flatMap(r=>[r.budgetCents,r.actualCents]));const An=(r,S)=>S<=0?"bar-positive":r<=0||S>r?"bar-negative":"bar-positive",La=[{label:"Einkommen gesamt",valueCents:et,className:"bar-income"},{label:"Budget gesamt",valueCents:De,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:fe,className:fe<0?"bar-negative":"bar-positive"}],va=Math.max(1,...La.map(r=>Math.abs(r.valueCents))),ur=o?o.months.slice().sort((r,S)=>r.month-S.month).map(r=>{const S=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,Q=r.fixedBudgetCents??r.fixedCosts.reduce((Yt,Je)=>Yt+Je.plannedCents,0),$e=r.variableBudgetCents??r.variablePositions.reduce((Yt,Je)=>Yt+Je.budgetCents,0),He=r.miscBudgetCents??0,Tt=S+V+Q+$e+He;return{month:r.month,foodBudgetCents:S,goingOutBudgetCents:V,fixedBudgetCents:Q,variableBudgetCents:$e,miscBudgetCents:He,totalBudgetCents:Tt}}):[],Dt=new Map(ur.map(r=>[r.month,r])),Pt=r=>{if(r.length===0)return null;const S=Math.min(...r),V=Math.max(...r),Q=Math.round(r.reduce(($e,He)=>$e+He,0)/r.length);return{min:S,avg:Q,max:V}},It=o&&o.year===Lt()?M.filter(r=>r.month<=hn()):M,cn=It.map(r=>r.summary.foodCents),ma=It.map(r=>r.summary.goingOutCents),ga=It.map(r=>r.summary.fixedCents),Un=It.map(r=>r.summary.variableCents),ba=It.map(r=>r.summary.miscCents),qa=It.map(r=>r.summary.totalCents),dr=It.map(r=>o?we.get(de(o.year,r.month))?.plannedBudgetCents??0:0),Ka=It.map(r=>o?we.get(de(o.year,r.month))?.netCents??0:0),On=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((S,V)=>S+(V.incomeSource==="salary"?V.amountCents:0),0)])),fr=It.map(r=>On.get(r.month)??0),Nt={food:Pt(cn),goingOut:Pt(ma),fixed:Pt(ga),variable:Pt(Un),misc:Pt(ba),total:Pt(qa),salary:Pt(fr),budget:Pt(dr),net:Pt(Ka)},Ra=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],un={food:cn.reduce((r,S)=>r+S,0),goingOut:ma.reduce((r,S)=>r+S,0),fixed:ga.reduce((r,S)=>r+S,0),variable:Un.reduce((r,S)=>r+S,0),misc:ba.reduce((r,S)=>r+S,0),total:qa.reduce((r,S)=>r+S,0),salary:fr.reduce((r,S)=>r+S,0),budget:dr.reduce((r,S)=>r+S,0)},hr=Ra.map(({key:r,label:S})=>{const V=Nt.food?.[r]??null,Q=Nt.goingOut?.[r]??null,$e=Nt.fixed?.[r]??null,He=Nt.variable?.[r]??null,Tt=Nt.misc?.[r]??null,Yt=Nt.total?.[r]??null,Je=Nt.salary?.[r]??null,kn=Nt.budget?.[r]??null,$n=Nt.net?.[r]??null,At=Xn=>Xn===null?"-":v(Xn);return`<tr>
                  <td><strong>${S}</strong></td>
                  <td>${At(V)}</td>
                  <td>${At(Q)}</td>
                  <td>${At($e)}</td>
                  <td>${At(He)}</td>
                  <td>${At(Tt)}</td>
                  <td>${At(Yt)}</td>
                  <td>${At(Je)}</td>
                  <td>${At(kn)}</td>
                  <td>${At($n)}</td>
                </tr>`}).join(""),Pr=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${v(un.food)}</td>
                  <td>${v(un.goingOut)}</td>
                  <td>${v(un.fixed)}</td>
                  <td>${v(un.variable)}</td>
                  <td>${v(un.misc)}</td>
                  <td>${v(un.total)}</td>
                  <td>${v(un.salary)}</td>
                  <td>${v(un.budget)}</td>
                </tr>`,ja=Math.max(1,...M.flatMap(r=>{const S=Dt.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,S??0]})),Va=Math.max(1,...M.flatMap(r=>{const S=Dt.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,Q=(S?.foodBudgetCents??0)+(S?.goingOutBudgetCents??0);return[V,Q]})),pr=Math.max(1,...M.flatMap(r=>{const S=Dt.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,S]})),Ya=Math.max(1,...M.flatMap(r=>{const S=Dt.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,S]})),ya=Math.max(1,...M.flatMap(r=>{const S=Dt.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,S]})),za=ot(d.fixedCents,I),vr=ot(d.foodCents,A),Tr=ot(d.goingOutCents,q),mr=ot(d.variableCents,J),gr=ot(d.miscCents,U),Qt=r=>r===0?"-":v(r),Zt=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${v(I)}</div>
        <div class="compact-cost-actual ${za}">${Qt(d.fixedCents)}</div>
      </div>`,Ye=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${v(J)}</div>
        <div class="compact-cost-actual ${mr}">${Qt(d.variableCents)}</div>
      </div>`,Ca=l?l.fixedCosts.length>0?l.fixedCosts.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${Bt(r.name)}</div>
                  <div class="compact-cost-budget">${v(r.plannedCents)}</div>
                  <div class="compact-cost-actual ${ot(r.actualCents,r.plannedCents)}">${Qt(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Fn=l?l.variablePositions.length>0?l.variablePositions.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${Bt(r.name)}${r.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${v(r.budgetCents)}</div>
                  <div class="compact-cost-actual ${ot(r.actualCents,r.budgetCents)}">${Qt(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Wn=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,Ua=h.hasUnexportedChanges,Wa=h.unexportedChangeLog.slice().reverse(),dn=h.persistentAuditLog.slice().sort((r,S)=>S.timestampIso.localeCompare(r.timestampIso)),Ga=h.lastBackupFileName?Bt(h.lastBackupFileName):"-",Dn={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},Ge=h.years.slice().sort((r,S)=>r.year-S.year),Gn=Ge.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??Ge[Ge.length-1]?.year??null,e=typeof Gn=="number"?Ge.find(r=>r.year===Gn):void 0,t=e?e.months.slice().sort((r,S)=>r.month-S.month):[],n=e?En(e):Dn,a=e?Yn(e):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},s=e?Bn(e):0,i=e?Wt(e,we):0,c=s+i,u=e?e.months.reduce((r,S)=>r+qt(S),0):0,m=c-u,$=c-n.totalCents,b=[{label:"Essen",budgetCents:a.foodCents,actualCents:n.foodCents},{label:"Ausgehen",budgetCents:a.goingOutCents,actualCents:n.goingOutCents},{label:"Fixkosten",budgetCents:a.fixedCents,actualCents:n.fixedCents},{label:"Variable",budgetCents:a.variableCents,actualCents:n.variableCents},{label:"Sonstige",budgetCents:a.miscCents,actualCents:n.miscCents}],p=t.map(r=>{const S=e?we.get(de(e.year,r.month)):void 0,V=rt(r),Q=r.incomes.reduce((Xn,br)=>Xn+br.amountCents,0),$e=S?.effectiveIncomeCents??Q,He=S?.plannedBudgetCents??qt(r),Tt=V.foodCents,Yt=V.goingOutCents,Je=Tt+Yt,kn=V.totalCents,$n=$e-He,At=$e-kn;return{month:r.month,foodCents:Tt,goingOutCents:Yt,foodAndGoingOutCents:Je,effectiveIncomeCents:$e,plannedBudgetCents:He,actualCostCents:kn,plannedNetCents:$n,actualNetCents:At}}),x=Math.max(1,...p.map(r=>r.actualCostCents)),w=Math.max(1,...p.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),y=Math.max(1,...p.map(r=>r.foodAndGoingOutCents)),g=Math.max(1,...p.map(r=>r.foodCents)),E=Math.max(1,...p.map(r=>r.goingOutCents)),B=p.map((r,S,V)=>{const Q=S>0?V[S-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Be(r.month),monthShortLabel:Be(r.month).slice(0,3),deltaCents:r.plannedNetCents-Q}}),k=B[B.length-1]??null,T=Math.min(0,...B.map(r=>r.plannedNetCents)),O=Math.max(0,...B.map(r=>r.plannedNetCents)),j=Math.max(1,O-T),K=720,F=320,W=18,Y=18,L=38,G=56,ce=K-G-Y,he=F-W-L,ee=r=>{if(B.length<=1)return G+ce/2;const S=r/(B.length-1);return G+S*ce},ie=r=>W+(O-r)/j*he,ge=B.map((r,S)=>{const V=ee(S),Q=ie(r.plannedNetCents);return{...r,x:V,y:Q,leftPercent:V/K*100,topPercent:Q/F*100}}),mt=ge.map((r,S)=>`${S===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),Ie=ge.length>0?`${mt} L ${ge[ge.length-1]?.x.toFixed(1)} ${(W+he).toFixed(1)} L ${ge[0]?.x.toFixed(1)} ${(W+he).toFixed(1)} Z`:"",fn=5,Ha=Array.from({length:fn},(r,S)=>{const V=S/(fn-1),Q=O-V*j;return{valueCents:Math.round(Q/100)*100,y:ie(Q)}}),Kr=ie(0),gs=B[0]?.plannedNetCents??0,xa=(B[B.length-1]?.plannedNetCents??0)-gs,bs=xa<0?"trend-badge-negative":xa>0?"trend-badge-positive":"trend-badge-neutral",Rr=xa<0?"↘":xa>0?"↗":"→",ys=xa<0?"Abwärtstrend":xa>0?"Aufwärtstrend":"Seitwärts",Hn=Ge.reduce((r,S)=>{const V=Yn(S);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Jn=Ge.reduce((r,S)=>{const V=En(S);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Cs=Ge.reduce((r,S)=>r+Bn(S),0),xs=Ge[0]?Wt(Ge[0],we):0,Ar=Cs+xs,jr=Ar-Hn.totalCents,Vr=Ar-Jn.totalCents,Yr=[{label:"Essen",budgetCents:Hn.foodCents,actualCents:Jn.foodCents},{label:"Ausgehen",budgetCents:Hn.goingOutCents,actualCents:Jn.goingOutCents},{label:"Fixkosten",budgetCents:Hn.fixedCents,actualCents:Jn.fixedCents},{label:"Variable",budgetCents:Hn.variableCents,actualCents:Jn.variableCents},{label:"Sonstige",budgetCents:Hn.miscCents,actualCents:Jn.miscCents}],zr=Math.max(1,...Yr.flatMap(r=>[r.budgetCents,r.actualCents])),wa=Ge.map(r=>{const S=En(r),V=Yn(r),Q=Bn(r),$e=r.months.reduce((Yt,Je)=>Yt+Je.incomes.reduce((kn,$n)=>kn+($n.incomeSource==="salary"?$n.amountCents:0),0),0),He=Wt(r,we),Tt=Q+He;return{year:r.year,salaryIncomeCents:$e,budgetTotalCents:V.totalCents,actualTotalCents:S.totalCents,effectiveIncomeCents:Tt,plannedNetCents:Tt-V.totalCents,actualNetCents:Tt-S.totalCents}}),Ur=Math.max(1,...wa.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),ws=Math.max(1,...wa.map(r=>r.actualTotalCents)),ks=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${Ge.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${Ge.map(r=>`<option value="${r.year}" ${r.year===Gn?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${e?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${v(c)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${v(u)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${v(n.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(m)}">${v(m)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_($)}">${v($)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Rr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${bs}">${Rr} ${ys}</span>
                    </div>
                  </header>
                  ${k?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Bt(k.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${_(k.plannedNetCents)}" data-year-trend-active-net>${v(k.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${v(k.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${v(k.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${_(k.deltaCents)}" data-year-trend-active-delta>${k.deltaCents>=0?"+":""}${v(k.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${K} ${F}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${e?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Ha.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${G}" y1="${r.y.toFixed(1)}" x2="${K-Y}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${G-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${v(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${G}" y1="${Kr.toFixed(1)}" x2="${K-Y}" y2="${Kr.toFixed(1)}"></line>
                              ${Ie?`<path class="year-trend-area" d="${Ie}"></path>`:""}
                              ${mt?`<path class="year-trend-line" d="${mt}"></path>`:""}
                              ${ge.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${F-12}" text-anchor="middle">${Bt(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${ge.map((r,S)=>`
                                    <button
                                      class="year-trend-point-hit ${S===ge.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${S===ge.length-1?"1":"0"}"
                                      data-month-label="${Bt(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Bt(r.monthLabel)}: Kalkulierter Saldo ${v(r.plannedNetCents)}, Einkommen ${v(r.effectiveIncomeCents)}, Ausgaben ${v(r.actualCostCents)}"
                                      aria-pressed="${S===ge.length-1?"true":"false"}"
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
                    ${b.map(r=>{const S=ut(r.actualCents,r.budgetCents),V=Math.min(100,S),Q=`${S.toFixed(0)}%`,$e=r.budgetCents-r.actualCents,He=$e<0?"danger":$e>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${An(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${v(r.actualCents)} von ${v(r.budgetCents)}">
                              <span class="circle-chart-value">${Q}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${v(r.budgetCents)} / I ${v(r.actualCents)}</div>
                            <div class="circle-chart-meta ${He}">${$e>=0?"+":""}${v($e)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(p.length,1)}, minmax(0, 1fr));">
                    ${p.map(r=>{const S=Te(r.actualCostCents,x);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${v(r.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${S}"><span class="spark-bar-fill-value">${v(r.actualCostCents)} €</span></div>
                              </div>
                            </div>
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
                    ${p.map(r=>{const S=Te(Math.abs(r.plannedNetCents),w),V=Te(Math.abs(r.actualNetCents),w),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",$e=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Be(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${v(r.plannedNetCents)} | Ist-Saldo: ${v(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${S}; opacity: 0.35;"></div>
                              <div class="bar ${$e}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${v(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${v(r.actualNetCents)}</span>
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
                  ${p.map(r=>`<tr>
                        <td>${Be(r.month)}</td>
                        <td>${v(r.effectiveIncomeCents)}</td>
                        <td>${v(r.plannedBudgetCents)}</td>
                        <td>${v(r.actualCostCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${v(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${v(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${Ge.map(r=>`<option value="${r.year}" ${r.year===Gn?"selected":""}>${r.year}</option>`).join("")}
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
                    ${p.map(r=>{const S=Te(r.foodAndGoingOutCents,y);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${v(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${S}"><span class="spark-bar-fill-value">${v(r.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(p.length,1)}, minmax(0, 1fr));">
                    ${p.map(r=>{const S=Te(r.foodCents,g);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${v(r.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${S}"><span class="spark-bar-fill-value">${v(r.foodCents)} €</span></div>
                              </div>
                            </div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(p.length,1)}, minmax(0, 1fr));">
                    ${p.map(r=>{const S=Te(r.goingOutCents,E);return`
                          <div class="spark-bar" title="${Be(r.month)}: ${v(r.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${S}"><span class="spark-bar-fill-value">${v(r.goingOutCents)} €</span></div>
                              </div>
                            </div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${v(Ar)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${v(Hn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${v(Jn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(jr)}">${v(jr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(Vr)}">${v(Vr)}</div><div class="eval-value"></div></div>
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
                    ${Yr.map(r=>{const S=Te(r.budgetCents,zr),V=Te(r.actualCents,zr),Q=An(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${v(r.budgetCents)} | Ist: ${v(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${S}"></div>
                              <div class="bar-marker" style="left:${S}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Q}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${v(r.budgetCents)}</span>
                              <span class="muted">I ${v(r.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(wa.length,1)}, minmax(0, 1fr));">
                    ${wa.map(r=>{const S=Te(r.actualTotalCents,ws);return`
                          <div class="spark-bar" title="${r.year}: ${v(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${S}"><span class="spark-bar-fill-value">${v(r.actualTotalCents)} €</span></div>
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
                    ${wa.map(r=>{const S=Te(Math.abs(r.plannedNetCents),Ur),V=Te(Math.abs(r.actualNetCents),Ur),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",$e=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${v(r.plannedNetCents)} | Ist-Saldo: ${v(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${S}; opacity: 0.35;"></div>
                              <div class="bar ${$e}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${v(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${v(r.actualNetCents)}</span>
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
                  ${wa.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${v(r.salaryIncomeCents)}</td>
                        <td>${v(r.effectiveIncomeCents)}</td>
                        <td>${v(r.budgetTotalCents)}</td>
                        <td>${v(r.actualTotalCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${v(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${v(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,$s=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,Ss=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Wn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Wn?gt(Wn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Wn?"Änderung speichern":"Vorlage speichern"}</button>
          ${Wn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${v(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,Wr=h.annualVariableFixedTemplates.reduce((r,S)=>r+S.plannedCents,0),Es=Math.round(Wr/12),Bs=`
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
                <div class="eval-value budget-under">${v(Wr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${v(Es)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const S=Oa(r.dueDateIso),V=S?Be(S.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${v(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Gr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",_s=h.topModal==="years"?$s:h.topModal==="fixed"?Ss:h.topModal==="variable-fixed"?Bs:h.topModal==="dashboard"?ks:"";P.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Ua?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${vs.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${Ws(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Gr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Gr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${_s}
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
                  ${Wa.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${Wa.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Bt(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${dn.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${dn.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Bt(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Be(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(r,S)=>S+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Be(r)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${v(se)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${v(Pe)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${v(Oe)}</strong>
              </div>
              <div class="compact-income-row ${We}">
                <span>Übernahme aus Vormonat</span>
                <strong>${lt?v(D):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${v(et)}</strong>
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
                  ${Ca}
                  ${Zt}
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
                  ${Fn}
                  ${Ye}
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
                    <div class="compact-cost-budget">${v(tt)}</div>
                    <div class="compact-cost-actual ${Xt}">${Qt(Ft)}</div>
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
                    <div class="compact-cost-budget">${v(U)}</div>
                    <div class="compact-cost-actual ${gr}">${Qt(d.miscCents)}</div>
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
                  ${Tn.map(r=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${r.label}"
                            data-budget-cents="${r.budgetCents}"
                            data-actual-cents="${r.actualCents}"
                            role="img"
                            aria-label="${r.label}: Budget ${v(r.budgetCents)} €, Ist ${v(r.actualCents)} €"
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
                  ${La.map(r=>{const S=Te(Math.abs(r.valueCents),va),V=r.valueCents>=0?"+":"",Q=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${v(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${S}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Q}">${V}${v(r.valueCents)}</span></div>
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
                      ${M.map(r=>{const S=Dt.get(r.month)?.totalBudgetCents??0,V=Te(S,ja),Q=Te(r.summary.totalCents,ja);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${v(r.summary.totalCents)} € | Budget ${v(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${v(r.summary.totalCents)} €</span></div>
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
                      ${M.map(r=>{const S=Dt.get(r.month),V=(S?.foodBudgetCents??0)+(S?.goingOutBudgetCents??0),Q=r.summary.foodCents+r.summary.goingOutCents,$e=Te(V,Va),He=Te(Q,Va);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${v(Q)} € | Budget ${v(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${$e}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${He}"><span class="spark-bar-fill-value">${v(Q)} €</span></div>
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
                      ${M.map(r=>{const S=Dt.get(r.month)?.fixedBudgetCents??0,V=Te(S,pr),Q=Te(r.summary.fixedCents,pr);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${v(r.summary.fixedCents)} € | Budget ${v(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${v(r.summary.fixedCents)} €</span></div>
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
                      ${M.map(r=>{const S=Dt.get(r.month)?.variableBudgetCents??0,V=Te(S,Ya),Q=Te(r.summary.variableCents,Ya);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${v(r.summary.variableCents)} € | Budget ${v(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${v(r.summary.variableCents)} €</span></div>
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
                      ${M.map(r=>{const S=Dt.get(r.month)?.miscBudgetCents??0,V=Te(S,ya),Q=Te(r.summary.miscCents,ya);return`
                            <div class="spark-bar" title="${Be(r.month)}: Ist ${v(r.summary.miscCents)} € | Budget ${v(S)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${v(r.summary.miscCents)} €</span></div>
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
                    <div class="eval-value">${v(se)}</div>
                    <div class="eval-value">${v(qe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${v(Pe)}</div>
                    <div class="eval-value">${v(st)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${v(Oe)}</div>
                    <div class="eval-value">${v(Pn)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${We}">${lt?v(D):"-"}</div>
                    <div class="eval-value ${ye}">${o?v(kt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${v(et)}</div>
                    <div class="eval-value">${v(_t)}</div>
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
                    <div class="eval-value">${H(A,d.foodCents)}</div>
                    <div class="eval-value">${v(N)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${H(q,d.goingOutCents)}</div>
                    <div class="eval-value">${v(te)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${H(I,d.fixedCents)}</div>
                    <div class="eval-value">${v(pe)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${H(J,d.variableCents)}</div>
                    <div class="eval-value">${v(_e)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${H(U,d.miscCents)}</div>
                    <div class="eval-value">${v(be)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${H(De,d.totalCents)}</div>
                    <div class="eval-value">${v(St)}</div>
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
                    <div class="eval-value ${vr}">${v(d.foodCents)}</div>
                    <div class="eval-value">${v(C.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Tr}">${v(d.goingOutCents)}</div>
                    <div class="eval-value">${v(C.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${za}">${v(d.fixedCents)}</div>
                    <div class="eval-value">${v(C.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${mr}">${v(d.variableCents)}</div>
                    <div class="eval-value">${v(C.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${gr}">${v(d.miscCents)}</div>
                    <div class="eval-value">${v(C.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${v(d.totalCents)}</div>
                    <div class="eval-value">${v(C.totalCents)}</div>
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
                    <div class="eval-value ${_(Vt)}">${v(Vt)}</div>
                    <div class="eval-value ${_(pa)}">${v(pa)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${_(ct)}">${v(ct)}</div>
                    <div class="eval-value ${_(Mt)}">${v(Mt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Fe}">${v(fe)}</div>
                    <div class="eval-value ${Ke}">${v($t)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${_(Le)}">${v(Le)}</div>
                    <div class="eval-value ${_(Jt)}">${v(Jt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${it}">${Ee}</div>
                    <div class="eval-value ${wn}">${ke}</div>
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
                ${M.map((r,S,V)=>{const Q=o?we.get(de(o.year,r.month)):void 0,$e=Q?.plannedBudgetCents??0,He=Q?.netCents??0,Tt=On.get(r.month)??0,Yt=He<0?"danger":He>0?"budget-under":"",Je=V[S-1],kn=Je?.summary.foodCents??null,$n=Je?.summary.goingOutCents??null,At=Je?.summary.fixedCents??null,Xn=Je?.summary.variableCents??null,br=Je?.summary.miscCents??null,Hr=Je?.summary.totalCents??null,Jr=Je!==void 0?On.get(Je.month)??0:null,Xr=o&&Je?we.get(de(o.year,Je.month))?.plannedBudgetCents??0:null,Qr=kn===null?null:r.summary.foodCents-kn,Zr=$n===null?null:r.summary.goingOutCents-$n,es=At===null?null:r.summary.fixedCents-At,ts=Xn===null?null:r.summary.variableCents-Xn,ns=br===null?null:r.summary.miscCents-br,as=Hr===null?null:r.summary.totalCents-Hr,rs=Jr===null?null:Tt-Jr,ss=Xr===null?null:$e-Xr,ka=Et=>Et===null?"muted":Et>0?"danger":Et<0?"budget-under":"muted",Ms=Et=>Et===null?"muted":Et>0?"budget-under":Et<0?"danger":"muted",Ps=Et=>Et===null?"muted":Et>0?"danger":Et<0?"budget-under":"muted",In=Et=>Et===null?"(Δ -)":`(Δ ${Et>0?"+":""}${v(Et)})`,is=o&&Je?we.get(de(o.year,Je.month))?.netCents??0:null,$a=is===null?null:He-is,Ts=$a===null?"(Δ -)":`(Δ ${$a>0?"+":""}${v($a)})`,As=$a===null?"muted":$a<0?"danger":$a>0?"budget-under":"muted";return`<tr>
                  <td>${Be(r.month)}</td>
                  <td>${v(r.summary.foodCents)} <span class="${ka(Qr)}">${In(Qr)}</span></td>
                  <td>${v(r.summary.goingOutCents)} <span class="${ka(Zr)}">${In(Zr)}</span></td>
                  <td>${v(r.summary.fixedCents)} <span class="${ka(es)}">${In(es)}</span></td>
                  <td>${v(r.summary.variableCents)} <span class="${ka(ts)}">${In(ts)}</span></td>
                  <td>${v(r.summary.miscCents)} <span class="${ka(ns)}">${In(ns)}</span></td>
                  <td>${v(r.summary.totalCents)} <span class="${ka(as)}">${In(as)}</span></td>
                  <td>${v(Tt)} <span class="${Ms(rs)}">${In(rs)}</span></td>
                  <td>${v($e)} <span class="${Ps(ss)}">${In(ss)}</span></td>
                  <td class="${Yt}">${v(He)} <span class="${As}">${Ts}</span></td>
                </tr>`}).join("")}
                ${hr}
                ${Pr}
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
                    <td class="${We}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${gt(D)}" />
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
                    <td>${v(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${r.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${v(se)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${v(Pe)} €</strong>
                </div>
                <div class="column-overview-row ${We}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${v(D)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${v(et)} €</strong>
                </div>
                <div class="column-overview-row ${Ve}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${v(nt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Gt(A,d.foodCents)}
                ${Gt(q,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${v(tt)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${v(Ft)} €</strong>
                  </div>
                  <div class="column-overview-row ${Xt}">
                    <span>Diff</span>
                    <strong>${v(jt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${gt(A)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${gt(q)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(r=>{const S=r.foodCents>0,V=r.goingOutCents>0,Q=`${r.isoDate===f?"today-row":""} ${S||V?"day-has-entry":""}`.trim(),$e=`amount-input ${S?"day-input-has-value":""}`.trim(),He=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${Q}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${$e}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${gt(r.foodCents)}" /></td>
                      <td><input class="${He}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${gt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Gt(I,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${gt(I)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${gt(r.plannedCents)}" /></td>
                    <td class="${ot(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${gt(r.actualCents)}" /></td>
                    <td class="${ot(r.actualCents,r.plannedCents)}">${v(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Gt(J,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${gt(J)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${gt(r.budgetCents)}" /></td>
                    <td class="${ot(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${gt(r.actualCents)}" /></td>
                    <td class="${ot(r.actualCents,r.budgetCents)}">${v(r.actualCents-r.budgetCents)}</td>
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
              ${Gt(U,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${gt(U)}" ${l?"":"disabled"} />
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
                    <td>${v(r.amountCents)}</td>
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
          <p class="muted">Letztes verwendetes Backup: ${Ga}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),cr(),en(),ht(),Ba()}function cr(){const o=P.querySelector("#theme-select"),l=P.querySelector("#open-years-modal"),f=P.querySelector("#open-fixed-modal"),d=P.querySelector("#open-variable-fixed-modal"),C=P.querySelector("#open-dashboard-modal"),M=P.querySelector("#panel-modal-close"),A=P.querySelector("#panel-modal-backdrop"),q=P.querySelector("#open-unexported-change-log"),I=P.querySelector("#open-persistent-audit-log"),J=P.querySelector("#unexported-change-log-close"),U=P.querySelector("#unexported-change-log-backup"),N=P.querySelector("#unexported-change-log-backdrop"),te=P.querySelector("#persistent-audit-log-close"),pe=P.querySelector("#persistent-audit-log-backdrop"),_e=P.querySelector("#new-year"),be=P.querySelector("#create-year"),se=P.querySelector("#year-select"),Pe=P.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;fs(_)&&ra(_)}),l?.addEventListener("click",()=>{ea("years")}),f?.addEventListener("click",()=>{ea("fixed")}),d?.addEventListener("click",()=>{ea("variable-fixed")}),C?.addEventListener("click",()=>{ea("dashboard")}),q?.addEventListener("click",()=>{ta()}),I?.addEventListener("click",()=>{Nn()}),J?.addEventListener("click",()=>{na()}),U?.addEventListener("click",async()=>{try{await Mn()}catch(_){console.error("Backup-Export fehlgeschlagen",_),ue("Backup konnte nicht exportiert werden.","error")}}),N?.addEventListener("click",_=>{_.target===N&&na()}),te?.addEventListener("click",()=>{aa()}),pe?.addEventListener("click",_=>{_.target===pe&&aa()}),P.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const R=_.dataset.dashboardTab;R!=="year"&&R!=="food"&&R!=="all"||(h.dashboardTab=R,ne())})});const Oe=P.querySelector("#dashboard-year-select");Oe?.addEventListener("change",()=>{const _=Number.parseInt(Oe.value,10);Number.isInteger(_)&&(h.dashboardYear=_,ne())}),M?.addEventListener("click",()=>{Ea()}),A?.addEventListener("click",_=>{_.target===A&&Ea()}),h.topModal&&window.setTimeout(()=>{M?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{J?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{te?.focus()},0),be?.addEventListener("click",async()=>{const _=Number.parseInt(_e?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await mn(_)}),se?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(se.value,10),h.selectedMonth=hn(),ne()}),Pe?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt(Pe.value,10),ne()});const we=P.querySelector("#fixed-template-name"),Ze=P.querySelector("#fixed-template-amount"),Se=P.querySelector("#add-fixed-template"),D=P.querySelector("#cancel-fixed-template-edit"),lt=P.querySelector("#annual-variable-fixed-name"),et=P.querySelector("#annual-variable-fixed-date"),wt=P.querySelector("#annual-variable-fixed-amount"),nt=P.querySelector("#add-annual-variable-fixed-template");Se?.addEventListener("click",async()=>{const _=we?.value??"",R=Ne(Ze?.value??"0");await ca(_,R),we&&(we.value=""),Ze&&(Ze.value="")}),D?.addEventListener("click",()=>{sn()}),nt?.addEventListener("click",async()=>{const _=lt?.value??"",R=et?.value??"",it=Ne(wt?.value??"0");await on(_,R,it),lt&&(lt.value=""),et&&(et.value=""),wt&&(wt.value="")}),P.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const R=_.dataset.removeAnnualVariableFixedTemplate;R&&await ua(R)})}),P.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const R=_.dataset.editFixedTemplate;R&&Mr(R)})}),P.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const R=_.dataset.removeFixedTemplate;R&&await _n(R)})}),P.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",R=>{R.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const R=_.dataset.dayFood;R&&await nr(R,"foodCents",Ne(_.value))})}),P.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",R=>{R.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const R=_.dataset.dayGoing;R&&await nr(R,"goingOutCents",Ne(_.value))})}),P.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",R=>{R.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const R=_.dataset.fixedActual;R&&await ln(R,Ne(_.value))})}),P.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",R=>{R.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const R=_.dataset.fixedPlanned;R&&await ar(R,Ne(_.value))})});const fe=P.querySelector("#fixed-budget");fe?.addEventListener("click",_=>{_.preventDefault(),fe.blur(),at(fe)}),fe?.addEventListener("change",async()=>{await Fa(Ne(fe.value))});const Le=P.querySelector("#food-budget");Le?.addEventListener("click",_=>{_.preventDefault(),Le.blur(),at(Le)}),Le?.addEventListener("change",async()=>{await je(Ne(Le.value))});const Ee=P.querySelector("#going-out-budget");Ee?.addEventListener("click",_=>{_.preventDefault(),Ee.blur(),at(Ee)}),Ee?.addEventListener("change",async()=>{await Cn(Ne(Ee.value))}),P.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{kr()});const Ve=P.querySelector("#misc-budget");Ve?.addEventListener("click",_=>{_.preventDefault(),Ve.blur(),at(Ve)}),Ve?.addEventListener("change",async()=>{await Ht(Ne(Ve.value))});const Fe=P.querySelector("#variable-budget");Fe?.addEventListener("click",_=>{_.preventDefault(),Fe.blur(),at(Fe)}),Fe?.addEventListener("change",async()=>{await sr(Ne(Fe.value))});const qe=P.querySelector("#variable-position-name"),st=P.querySelector("#variable-position-budget"),Pn=P.querySelector("#add-variable-position"),kt=P.querySelector("#add-variable-position-recurring"),_t=P.querySelector("#misc-description"),$t=P.querySelector("#misc-amount"),Jt=P.querySelector("#add-misc"),ke=P.querySelector("#add-misc-recurring"),ye=P.querySelector("#income-description"),Ke=P.querySelector("#income-source"),De=P.querySelector("#income-amount"),tt=P.querySelector("#add-income"),Ft=P.querySelector("#add-income-recurring"),jt=P.querySelector("#fixed-cost-name"),Xt=P.querySelector("#fixed-cost-budget"),St=P.querySelector("#add-fixed-cost"),ct=P.querySelector("#carryover-override");ct?.addEventListener("click",_=>{_.preventDefault(),ct.blur(),at(ct)}),ct?.addEventListener("change",async()=>{const _=ct.value;if(!_.trim()){await zn(null);return}await zn(Ne(_))}),St?.addEventListener("click",async()=>{const _=Ne(Xt?.value??"0");await yn(jt?.value??"",_),jt&&(jt.value=""),Xt&&(Xt.value="")}),Pn?.addEventListener("click",async()=>{const _=Ne(st?.value??"0");await da(qe?.value??"",_,!1),qe&&(qe.value=""),st&&(st.value="")}),kt?.addEventListener("click",async()=>{const _=Ne(st?.value??"0");await da(qe?.value??"",_,!0),qe&&(qe.value=""),st&&(st.value="")}),Jt?.addEventListener("click",async()=>{const _=Ne($t?.value??"0");await Ia(_t?.value??"",_,!1),_t&&(_t.value=""),$t&&($t.value="")}),ke?.addEventListener("click",async()=>{const _=Ne($t?.value??"0");await Ia(_t?.value??"",_,!0),_t&&(_t.value=""),$t&&($t.value="")}),tt?.addEventListener("click",async()=>{const _=Ne(De?.value??"0"),R=Ke?.value,it=R==="balance"||R==="fresh"||R==="salary"?R:void 0;await Na(ye?.value??"",_,it,!1),ye&&(ye.value=""),De&&(De.value=""),Ke&&(Ke.value="salary")}),Ft?.addEventListener("click",async()=>{const _=Ne(De?.value??"0"),R=Ke?.value,it=R==="balance"||R==="fresh"||R==="salary"?R:void 0;await Na(ye?.value??"",_,it,!0),ye&&(ye.value=""),De&&(De.value=""),Ke&&(Ke.value="salary")}),P.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const R=_.dataset.incomeSource;if(!R)return;const it=_.value;await or(R,it==="balance"||it==="fresh"||it==="salary"?it:void 0)})}),P.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",R=>{R.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const R=_.dataset.variablePositionBudget;R&&await xn(R,Ne(_.value))})}),P.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",R=>{R.preventDefault(),_.blur(),at(_)}),_.addEventListener("change",async()=>{const R=_.dataset.variablePositionActual;R&&await Da(R,Ne(_.value))})}),P.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const R=_.dataset.removeVariablePosition;R&&await ir(R)})}),P.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const R=_.dataset.moveVariablePositionNext;R&&await fa(R)})}),P.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const R=_.dataset.removeFixed;R&&await rr(R)})}),P.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const R=_.dataset.removeIncome;R&&await ha(R)})}),P.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const R=_.dataset.removeMisc;R&&await le(R)})});const Mt=P.querySelector("#backup-export"),Vt=P.querySelector("#backup-import");P.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Mt?.addEventListener("click",async()=>{await Mn()}),Vt?.addEventListener("change",async()=>{const _=Vt.files?.[0];if(_){try{await lr(_)}catch(R){console.error("Backup-Import fehlgeschlagen",R),ue("Backup konnte nicht importiert werden.","error")}Vt.value=""}})}return{init:Br}}const Hs="modulepreload",Js=function(P){return"/habu26/"+P},ps={},Xs=function(h,Ae,X){let ve=Promise.resolve();if(Ae&&Ae.length>0){let dt=function(Ue){return Promise.all(Ue.map(oe=>Promise.resolve(oe).then(bt=>({status:"fulfilled",value:bt}),bt=>({status:"rejected",reason:bt}))))};var Ce=dt;document.getElementsByTagName("link");const re=document.querySelector("meta[property=csp-nonce]"),me=re?.nonce||re?.getAttribute("nonce");ve=dt(Ae.map(Ue=>{if(Ue=Js(Ue),Ue in ps)return;ps[Ue]=!0;const oe=Ue.endsWith(".css"),bt=oe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ue}"]${bt}`))return;const ft=document.createElement("link");if(ft.rel=oe?"stylesheet":Hs,oe||(ft.as="script"),ft.crossOrigin="",ft.href=Ue,me&&ft.setAttribute("nonce",me),document.head.appendChild(ft),oe)return new Promise((ht,en)=>{ft.addEventListener("load",ht),ft.addEventListener("error",()=>en(new Error(`Unable to preload CSS for ${Ue}`)))})}))}function ae(re){const me=new Event("vite:preloadError",{cancelable:!0});if(me.payload=re,window.dispatchEvent(me),!me.defaultPrevented)throw re}return ve.then(re=>{for(const me of re||[])me.status==="rejected"&&ae(me.reason);return h().catch(ae)})};function Qs(P={}){const{immediate:h=!1,onNeedRefresh:Ae,onOfflineReady:X,onRegistered:ve,onRegisteredSW:ae,onRegisterError:Ce}=P;let re,me;const dt=async(oe=!0)=>{await me};async function Ue(){if("serviceWorker"in navigator){if(re=await Xs(async()=>{const{Workbox:oe}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:oe}},[]).then(({Workbox:oe})=>new oe("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(oe=>{Ce?.(oe)}),!re)return;re.addEventListener("activated",oe=>{(oe.isUpdate||oe.isExternal)&&window.location.reload()}),re.addEventListener("installed",oe=>{oe.isUpdate||X?.()}),re.register({immediate:h}).then(oe=>{ae?ae("/habu26/sw.js",oe):ve?.(oe)}).catch(oe=>{Ce?.(oe)})}}return me=Ue(),dt}function Zs(){Qs({immediate:!0})}const ms=document.getElementById("app");if(!ms)throw new Error("App-Container nicht gefunden.");Gs(ms).init();Zs();
