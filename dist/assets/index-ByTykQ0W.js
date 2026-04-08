(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const me of document.querySelectorAll('link[rel="modulepreload"]'))J(me);new MutationObserver(me=>{for(const se of me)if(se.type==="childList")for(const Ce of se.addedNodes)Ce.tagName==="LINK"&&Ce.rel==="modulepreload"&&J(Ce)}).observe(document,{childList:!0,subtree:!0});function Ae(me){const se={};return me.integrity&&(se.integrity=me.integrity),me.referrerPolicy&&(se.referrerPolicy=me.referrerPolicy),me.crossOrigin==="use-credentials"?se.credentials="include":me.crossOrigin==="anonymous"?se.credentials="omit":se.credentials="same-origin",se}function J(me){if(me.ep)return;me.ep=!0;const se=Ae(me);fetch(me.href,se)}})();const As=[1,2,3,4,5,6,7,8,9,10,11,12];function qr(){return new Date().toISOString()}function Ot(M){const h=Math.random().toString(36).slice(2,10);return`${M}_${Date.now()}_${h}`}function Os(M,h){const Ae=new Date(M,h,0).getDate(),J=[];for(let me=1;me<=Ae;me+=1){const se=new Date(Date.UTC(M,h-1,me));J.push({isoDate:se.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return J}function Fs(M){return M.map(h=>({id:Ot("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function is(M,h,Ae){const J=h.reduce((se,Ce)=>se+Ce.plannedCents,0),me=As.map(se=>({month:se,days:Os(M,se),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Fs(h),fixedBudgetCents:J,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:M,createdAt:qr(),templateVersion:Ae,months:me}}function os(M,h){return{id:Ot("expense"),description:M,amountCents:h,createdAt:qr()}}function ls(M,h,Ae){const J={id:Ot("income"),description:M,amountCents:h,createdAt:qr()};return Ae?{...J,incomeSource:Ae}:J}var Ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Is(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var gr={exports:{}},Ns=gr.exports,cs;function Ls(){return cs||(cs=1,(function(M,h){((Ae,J)=>{M.exports=J()})(Ns,function(){var Ae=function(e,t){return(Ae=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},J=function(){return(J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function me(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ds,Ce=Object.keys,ie=Array.isArray;function ge(e,t){return typeof t=="object"&&Ce(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||se.Promise||(se.Promise=Promise);var ut=Object.getPrototypeOf,Ve={}.hasOwnProperty;function le(e,t){return Ve.call(e,t)}function gt(e,t){typeof t=="function"&&(t=t(ut(e))),(typeof Reflect>"u"?Ce:Reflect.ownKeys)(t).forEach(function(n){ht(e,n,t[n])})}var ft=Object.defineProperty;function ht(e,t,n,a){ft(e,t,ge(n&&le(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function tn(e){return{from:function(t){return e.prototype=Object.create(t.prototype),ht(e.prototype,"constructor",e),{extend:gt.bind(null,e.prototype)}}}}var ra=Object.getOwnPropertyDescriptor,Pa=[].slice;function sa(e,t,n){return Pa.call(e,t,n)}function ia(e,t){return t(e)}function Dn(e){if(!e)throw new Error("Assertion Failed")}function oa(e){se.setImmediate?setImmediate(e):setTimeout(e,0)}function Ut(e,t){if(typeof t=="string"&&le(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=Ut(e,t[a]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:Ut(c,t.substr(u+1))}function pt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){Dn(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)pt(e,t[a],n[a])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:pt(c=(c=e[i])&&le(e,i)?c:e[i]={},u,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ta(e){var t,n={};for(t in e)le(e,t)&&(n[t]=e[t]);return n}var Cr=[].concat;function Aa(e){return Cr.apply([],e)}var Nt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Aa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return se[e]}),Ha=new Set(Nt.map(function(e){return se[e]})),In=null;function vt(e){return In=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=In.get(n);if(a)return a;if(ie(n)){a=[],In.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Ha.has(n.constructor))a=n;else{var c,u=ut(n);for(c in a=u===Object.prototype?{}:Object.create(u),In.set(n,a),n)le(n,c)&&(a[c]=t(n[c]))}return a})(e),In=null,e}var Nn={}.toString;function Oa(e){return Nn.call(e).slice(8,-1)}var Fa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",xr=typeof Fa=="symbol"?function(e){var t;return e!=null&&(t=e[Fa])&&t.apply(e)}:function(){return null};function nn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var nt={};function de(e){var t,n,a,s;if(arguments.length===1){if(ie(e))return e.slice();if(this===nt&&typeof e=="string")return[e];if(s=xr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var cn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Nt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],at=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Nt),Ja={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function un(e,t){this.name=e,this.message=t}function Xa(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function Et(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Xa(e,t)}function Sn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Xa(e,this.failures)}tn(un).from(Error).extend({toString:function(){return this.name+": "+this.message}}),tn(Et).from(un),tn(Sn).from(un);var la=at.reduce(function(e,t){return e[t]=t+"Error",e},{}),wr=un,ee=at.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Ja[t]||n,this.inner=null)}return tn(a).from(wr),e[t]=a,e},{}),Qa=(ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError,Nt.reduce(function(e,t){return e[t+"Error"]=ee[t],e},{}));Nt=at.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ee[t]),e},{});function xe(){}function Ln(e){return e}function kr(e,t){return e==null||e===Ln?t:function(n){return t(e(n))}}function dn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Za(e,t){return e===xe?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?dn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?dn(s,this.onerror):s),i!==void 0?i:n}}function $r(e,t){return e===xe?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?dn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?dn(a,this.onerror):a)}}function Sr(e,t){return e===xe?t:function(s){var a=e.apply(this,arguments),s=(ge(s,a),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?dn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?dn(i,this.onerror):i),a===void 0?c===void 0?void 0:c:ge(a,c)}}function Da(e,t){return e===xe?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function qn(e,t){return e===xe?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}Nt.ModifyError=Et,Nt.DexieError=un,Nt.BulkError=Sn;var bt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ia(e){bt=e}var Wt={},Ie=100,Kn=typeof Promise>"u"?[]:(at=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Kn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ut(Kn),at]:[at,ut(at),at]),at=Kn[0],Yt=Kn[1],Yt=Yt&&Yt.then,Lt=at&&at.constructor,En=!!Kn[2],jn=function(e,t){Ht.push([e,t]),Bn&&(queueMicrotask(Na),Bn=!1)},Rn=!0,Bn=!0,Gt=[],ca=[],ot=Ln,an={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xe,pgp:!1,env:{},finalize:xe},H=an,Ht=[],fn=0,hn=[];function Y(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=H;if(typeof e!="function"){if(e!==Wt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&yt(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var c=a._lib&&pn();i&&typeof i.then=="function"?n(a,function(u,g){i instanceof Y?i._then(u,g):i.then(u,g)}):(a._state=!0,a._value=i,fe(a)),c&&Ct()}},yt.bind(null,a))}catch(i){yt(a,i)}})(this,e)}var ua={get:function(){var e=H,t=pa;function n(a,s){var i=this,c=!e.global&&(e!==H||t!==pa),u=c&&!sn(),g=new Y(function(S,v){Vn(i,new We(nr(a,e,c,u),nr(s,e,c,u),S,v,e))});return this._consoleTask&&(g._consoleTask=this._consoleTask),g}return n.prototype=Wt,n},set:function(e){ht(this,"then",e&&e.prototype===Wt?ua:{get:function(){return e},set:ua.set})}};function We(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function yt(e,t){var n,a;ca.push(t),e._state===null&&(n=e._lib&&pn(),t=ot(t),e._state=!1,e._value=t,a=e,Gt.some(function(s){return s._value===a._value})||Gt.push(a),fe(e),n)&&Ct()}function fe(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)Vn(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),fn===0&&(++fn,jn(function(){--fn==0&&Bt()},[]))}function Vn(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++fn,jn(er,[n,e,t])}}function er(e,t,n){try{var a,s=t._value;!t._state&&ca.length&&(ca=[]),a=bt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||ca.indexOf(s)!==-1||(i=>{for(var c=Gt.length;c;)if(Gt[--c]._value===i._value)return Gt.splice(c,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--fn==0&&Bt(),--n.psd.ref||n.psd.finalize()}}function Na(){vn(an,function(){pn()&&Ct()})}function pn(){var e=Rn;return Bn=Rn=!1,e}function Ct(){var e,t,n;do for(;0<Ht.length;)for(e=Ht,Ht=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<Ht.length);Bn=Rn=!0}function Bt(){for(var e=Gt,t=(Gt=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),hn.slice(0)),n=t.length;n;)t[--n]()}function da(e){return new Y(Wt,!1,e)}function Ee(e,t){var n=H;return function(){var a=pn(),s=H;try{return on(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{on(s,!1),a&&Ct()}}}gt(Y.prototype,{then:ua,_then:function(e,t){Vn(this,new We(null,null,e,t,H))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:da)(a)}):this.then(null,function(a){return(a&&a.name===t?n:da)(a)}))},finally:function(e){return this.then(function(t){return Y.resolve(e()).then(function(){return t})},function(t){return Y.resolve(e()).then(function(){return da(t)})})},timeout:function(e,t){var n=this;return e<1/0?new Y(function(a,s){var i=setTimeout(function(){return s(new ee.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ht(Y.prototype,Symbol.toStringTag,"Dexie.Promise"),an.env=tr(),gt(Y,{all:function(){var e=de.apply(null,arguments).map(Yn);return new Y(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return Y.resolve(s).then(function(c){e[i]=c,--a||t(e)},n)})})},resolve:function(e){return e instanceof Y?e:e&&typeof e.then=="function"?new Y(function(t,n){e.then(t,n)}):new Y(Wt,!0,e)},reject:da,race:function(){var e=de.apply(null,arguments).map(Yn);return new Y(function(t,n){e.map(function(a){return Y.resolve(a).then(t,n)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return pa}},newPSD:rn,usePSD:vn,scheduler:{get:function(){return jn},set:function(e){jn=e}},rejectionMapper:{get:function(){return ot},set:function(e){ot=e}},follow:function(e,t){return new Y(function(n,a){return rn(function(s,i){var c=H;c.unhandleds=[],c.onunhandled=i,c.finalize=dn(function(){var u,g=this;u=function(){g.unhandleds.length===0?s():i(g.unhandleds[0])},hn.push(function S(){u(),hn.splice(hn.indexOf(S),1)}),++fn,jn(function(){--fn==0&&Bt()},[])},c.finalize),e()},t,n,a)})}}),Lt&&(Lt.allSettled&&ht(Y,"allSettled",function(){var e=de.apply(null,arguments).map(Yn);return new Y(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return Y.resolve(s).then(function(c){return a[i]={status:"fulfilled",value:c}},function(c){return a[i]={status:"rejected",reason:c}}).then(function(){return--n||t(a)})})})}),Lt.any&&typeof AggregateError<"u"&&ht(Y,"any",function(){var e=de.apply(null,arguments).map(Yn);return new Y(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,c){return Y.resolve(i).then(function(u){return t(u)},function(u){s[c]=u,--a||n(new AggregateError(s))})})})}),Lt.withResolvers)&&(Y.withResolvers=Lt.withResolvers);var Ze={awaits:0,echoes:0,id:0},Er=0,fa=[],ha=0,pa=0,Br=0;function rn(e,c,n,a){var s=H,i=Object.create(s),c=(i.parent=s,i.ref=0,i.global=!1,i.id=++Br,an.env,i.env=En?{Promise:Y,PromiseProp:{value:Y,configurable:!0,writable:!0},all:Y.all,race:Y.race,allSettled:Y.allSettled,any:Y.any,resolve:Y.resolve,reject:Y.reject}:{},c&&ge(i,c),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},vn(i,e,n,a));return i.ref===0&&i.finalize(),c}function _n(){return Ze.id||(Ze.id=++Er),++Ze.awaits,Ze.echoes+=Ie,Ze.id}function sn(){return!!Ze.awaits&&(--Ze.awaits==0&&(Ze.id=0),Ze.echoes=Ze.awaits*Ie,!0)}function Yn(e){return Ze.echoes&&e&&e.constructor===Lt?(_n(),e.then(function(t){return sn(),t},function(t){return sn(),Ne(t)})):e}function _r(){var e=fa[fa.length-1];fa.pop(),on(e,!1)}function on(e,t){var n,a,s=H;(t?!Ze.echoes||ha++&&e===H:!ha||--ha&&e===H)||queueMicrotask(t?(function(i){++pa,Ze.echoes&&--Ze.echoes!=0||(Ze.echoes=Ze.awaits=Ze.id=0),fa.push(H),on(i,!0)}).bind(null,e):_r),e!==H&&(H=e,s===an&&(an.env=tr()),En)&&(n=an.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(se,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function tr(){var e=se.Promise;return En?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(se,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function vn(e,t,n,a,s){var i=H;try{return on(e,!0),t(n,a,s)}finally{on(i,!1)}}function nr(e,t,n,a){return typeof e!="function"?e:function(){var s=H;n&&_n(),on(t,!0);try{return e.apply(this,arguments)}finally{on(s,!1),a&&queueMicrotask(sn)}}}function La(e){Promise===Lt&&Ze.echoes===0?ha===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Yt).indexOf("[native code]")===-1&&(_n=sn=xe);var Ne=Y.reject,mn="￿",Jt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Mn="String expected.",gn=[],zn="__dbnames",qa="readonly",Ka="readwrite";function bn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ar={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Un(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=vt(t))[e],t}}function rr(){throw ee.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ce(e,t){try{var n=sr(e),a=sr(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=ir(e),i=ir(t),c=s.length,u=i.length,g=c<u?c:u,S=0;S<g;++S)if(s[S]!==i[S])return s[S]<i[S]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var v=e,m=t,x=v.length,w=m.length,y=x<w?x:w,b=0;b<y;++b){var $=ce(v[b],m[b]);if($!==0)return $}return x===w?0:x<w?-1:1}}catch{}return NaN}function sr(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Oa(e))==="ArrayBuffer")?"binary":t}function ir(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Wn(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}re.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return me(me([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(ie(a))return ie(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var Gn=re;function re(e){this["@@propmod"]=e}function or(e,t){for(var n=Ce(t),a=n.length,s=!1,i=0;i<a;++i){var c=n[i],u=t[c],g=Ut(e,c);u instanceof Gn?(pt(e,c,u.execute(g)),s=!0):g!==u&&(pt(e,c,u),s=!0)}return s}l.prototype._trans=function(e,t,n){var a=this._tx||H.trans,s=this.name,i=bt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(S,v,m){if(m.schema[s])return t(m.idbtrans,m);throw new ee.NotFound("Table "+s+" not part of transaction")}var u=pn();try{var g=a&&a.db._novip===this.db._novip?a===H.trans?a._promise(e,c,n):rn(function(){return a._promise(e,c,n)},{trans:a,transless:H.transless||H}):(function S(v,m,x,w){if(v.idbdb&&(v._state.openComplete||H.letThrough||v._vip)){var y=v._createTransaction(m,x,v._dbSchema);try{y.create(),v._state.PR1398_maxLoop=3}catch(b){return b.name===la.InvalidState&&v.isOpen()&&0<--v._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),v.close({disableAutoOpen:!1}),v.open().then(function(){return S(v,m,x,w)})):Ne(b)}return y._promise(m,function(b,$){return rn(function(){return H.trans=y,w(b,$,y)})}).then(function(b){if(m==="readwrite")try{y.idbtrans.commit()}catch{}return m==="readonly"?b:y._completion.then(function(){return b})})}if(v._state.openComplete)return Ne(new ee.DatabaseClosed(v._state.dbOpenError));if(!v._state.isBeingOpened){if(!v._state.autoOpen)return Ne(new ee.DatabaseClosed);v.open().catch(xe)}return v._state.dbReadyPromise.then(function(){return S(v,m,x,w)})})(this.db,e,[this.name],c);return i&&(g._consoleTask=i,g=g.catch(function(S){return console.trace(S),Ne(S)})),g}finally{u&&Ct()}},l.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Ne(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},l.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Ce(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function(S){return 0<=u.keyPath.indexOf(S)})){for(var g=0;g<t.length;++g)if(t.indexOf(u.keyPath[g])===-1)return!1;return!0}return!1}).sort(function(u,g){return u.keyPath.length-g.keyPath.length})[0];if(n&&this.db._maxKey!==mn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&bt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(u,g){return ce(u,g)===0}var c=t.reduce(function(v,g){var S=v[0],v=v[1],m=a[g],x=e[g];return[S||m,S||!m?bn(v,m&&m.multi?function(w){return w=Ut(w,g),ie(w)&&w.some(function(y){return s(x,y)})}:function(w){return s(x,Ut(w,g))}):v]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},l.prototype.filter=function(e){return this.toCollection().and(e)},l.prototype.count=function(e){return this.toCollection().count(e)},l.prototype.offset=function(e){return this.toCollection().offset(e)},l.prototype.limit=function(e){return this.toCollection().limit(e)},l.prototype.each=function(e){return this.toCollection().each(e)},l.prototype.toArray=function(e){return this.toCollection().toArray(e)},l.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},l.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},l.prototype.reverse=function(){return this.toCollection().reverse()},l.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof rr&&(e=(c=>{var u=v,g=c;if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");function S(){this.constructor=u}function v(){return c!==null&&c.apply(this,arguments)||this}return Ae(u,g),u.prototype=g===null?Object.create(g):(S.prototype=g.prototype,new S),Object.defineProperty(v.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),v.prototype.table=function(){return n},v})(e)),new Set),s=e.prototype;s;s=ut(s))Object.getOwnPropertyNames(s).forEach(function(c){return a.add(c)});function i(c){if(!c)return c;var u,g=Object.create(e.prototype);for(u in c)if(!a.has(u))try{g[u]=c[u]}catch{}return g}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},l.prototype.defineClass=function(){return this.mapToClass(function(e){ge(this,e)})},l.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=Un(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{pt(e,i,u)}catch{}return u})},l.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var c=i??{};return or(c,t),a&&pt(c,a,e),n.core.mutate({trans:s,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):!!i})})})},l.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=Ut(e,this.schema.primKey.keyPath))===void 0?Ne(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},l.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=Un(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{pt(e,i,u)}catch{}return u})},l.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return Wn(t,[e],a)}).then(function(a){return a.numFailures?Y.reject(a.failures[0]):void 0})})},l.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:ar}).then(function(n){return Wn(e,null,n)})}).then(function(t){return t.numFailures?Y.reject(t.failures[0]):void 0})},l.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},l.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,S=u.auto,u=u.keyPath;if(u&&s)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var g=e.length,S=u&&S?e.map(Un(u)):e;return a.core.mutate({trans:c,type:"add",keys:s,values:S,wantResults:i}).then(function(v){var m=v.numFailures,x=v.failures;if(m===0)return i?v.results:v.lastResult;throw new Sn("".concat(a.name,".bulkAdd(): ").concat(m," of ").concat(g," operations failed"),x)})})},l.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,S=u.auto,u=u.keyPath;if(u&&s)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var g=e.length,S=u&&S?e.map(Un(u)):e;return a.core.mutate({trans:c,type:"put",keys:s,values:S,wantResults:i}).then(function(v){var m=v.numFailures,x=v.failures;if(m===0)return i?v.results:v.lastResult;throw new Sn("".concat(a.name,".bulkPut(): ").concat(m," of ").concat(g," operations failed"),x)})})},l.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(c){return c.key}),s=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:a,cache:"clone"}).then(function(u){var g=[],S=[],v=(e.forEach(function(m,x){var w=m.key,y=m.changes,b=u[x];if(b){for(var $=0,B=Object.keys(y);$<B.length;$++){var k=B[$],T=y[k];if(k===t.schema.primKey.keyPath){if(ce(T,w)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else pt(b,k,T)}i.push(x),g.push(w),S.push(b)}}),g.length);return n.mutate({trans:c,type:"put",keys:g,values:S,updates:{keys:a,changeSpecs:s}}).then(function(m){var x=m.numFailures,w=m.failures;if(x===0)return v;for(var y=0,b=Object.keys(w);y<b.length;y++){var $,B=b[y],k=i[Number(B)];k!=null&&($=w[B],delete w[B],w[k]=$)}throw new Sn("".concat(t.name,".bulkUpdate(): ").concat(x," of ").concat(v," operations failed"),w)})})})},l.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return Wn(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new Sn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var o=l;function l(){}function f(e){function t(c,u){if(u){for(var g=arguments.length,S=new Array(g-1);--g;)S[g-1]=arguments[g];return n[c].subscribe.apply(null,S),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(c,u,g){var S,v;if(typeof c!="object")return u=u||Da,v={subscribers:[],fire:g=g||xe,subscribe:function(m){v.subscribers.indexOf(m)===-1&&(v.subscribers.push(m),v.fire=u(v.fire,m))},unsubscribe:function(m){v.subscribers=v.subscribers.filter(function(x){return x!==m}),v.fire=v.subscribers.reduce(u,g)}},n[c]=t[c]=v;Ce(S=c).forEach(function(m){var x=S[m];if(ie(x))i(m,S[m][0],S[m][1]);else{if(x!=="asap")throw new ee.InvalidArgument("Invalid event config");var w=i(m,Ln,function(){for(var y=arguments.length,b=new Array(y);y--;)b[y]=arguments[y];w.subscribers.forEach(function($){oa(function(){$.apply(null,b)})})})}})}}function d(e,t){return tn(t).from({prototype:e}),t}function p(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function P(e,t){e.filter=bn(e.filter,t)}function A(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return bn(a(),t())}:t,e.justLimit=n&&!a}function N(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ee.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function L(e,t,n){var a=N(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function X(e,t,n,a){var s,i,c=e.replayFilter?bn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(u,g,S){var v,m;c&&!c(g,S,function(x){return g.stop(x)},function(x){return g.fail(x)})||((m=""+(v=g.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(v)),le(s,m))||(s[m]=!0,t(u,g,S))},Promise.all([e.or._iterate(i,n),W(L(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):W(L(e,a,n),bn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function W(e,t,n,a){var s=Ee(a?function(i,c,u){return n(a(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=xe},function(u){i.fail(u),c=xe})||s(i.value,i,function(u){return c=u}),c()})})}R.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Ne.bind(null,n.error)):n.table._trans("readonly",e).then(t)},R.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Ne.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},R.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=bn(t.algorithm,e)},R.prototype._iterate=function(e,t){return X(this._ctx,e,t,this._ctx.table.core)},R.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ge(n,e),t._ctx=n,t},R.prototype.raw=function(){return this._ctx.valueMapper=null,this},R.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return X(t,e,n,t.table.core)})},R.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return p(s,!0)?i.count({trans:n,query:{index:N(s,i.schema),range:s.range}}).then(function(c){return Math.min(c,s.limit)}):(a=0,X(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},R.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(g,S){return S?i(g[n[S]],S-1):g[a]}var c=this._ctx.dir==="next"?1:-1;function u(g,S){return ce(i(g,s),i(S,s))*c}return this.toArray(function(g){return g.sort(u)}).then(t)},R.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,c=t._ctx;return c.dir==="next"&&p(c,!0)&&0<c.limit?(a=c.valueMapper,s=N(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:s,range:c.range}}).then(function(u){return u=u.result,a?u.map(a):u})):(i=[],X(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},R.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,p(t)?A(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):A(t,function(){var n=e;return function(){return--n<0}})),this},R.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),A(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},R.prototype.until=function(e,t){return P(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},R.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},R.prototype.last=function(e){return this.reverse().first(e)},R.prototype.filter=function(e){var t;return P(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=bn(t.isMatch,e),this},R.prototype.and=function(e){return this.filter(e)},R.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},R.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},R.prototype.desc=function(){return this.reverse()},R.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},R.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},R.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},R.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},R.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&p(t,!0)&&0<t.limit)return this._read(function(a){var s=N(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},R.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},R.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},R.prototype.lastKey=function(e){return this.reverse().firstKey(e)},R.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},P(this._ctx,function(a){var a=a.primaryKey.toString(),s=le(e,a);return e[a]=!0,!s})),this},R.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(b,$){var B=$.failures;x+=b-$.numFailures;for(var k=0,T=Ce(B);k<T.length;k++){var F=T[k];m.push(B[F])}}var i=typeof e=="function"?e:function(b){return or(b,e)},c=n.table.core,v=c.schema.primaryKey,u=v.outbound,g=v.extractKey,S=200,v=t.db._options.modifyChunkSize,m=(v&&(S=typeof v=="object"?v[c.name]||v["*"]||200:v),[]),x=0,w=[],y=e===he;return t.clone().primaryKeys().then(function(b){function $(k){var T=Math.min(S,b.length-k),F=b.slice(k,k+T);return(y?Promise.resolve([]):c.getMany({trans:a,keys:F,cache:"immutable"})).then(function(K){var j=[],D=[],U=u?[]:null,z=y?F:[];if(!y)for(var I=0;I<T;++I){var G=K[I],ue={value:vt(G),primKey:b[k+I]};i.call(ue,ue.value,ue)!==!1&&(ue.value==null?z.push(b[k+I]):u||ce(g(G),g(ue.value))===0?(D.push(ue.value),u&&U.push(b[k+I])):(z.push(b[k+I]),j.push(ue.value)))}return Promise.resolve(0<j.length&&c.mutate({trans:a,type:"add",values:j}).then(function(be){for(var te in be.failures)z.splice(parseInt(te),1);s(j.length,be)})).then(function(){return(0<D.length||B&&typeof e=="object")&&c.mutate({trans:a,type:"put",keys:U,values:D,criteria:B,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<k}).then(function(be){return s(D.length,be)})}).then(function(){return(0<z.length||B&&y)&&c.mutate({trans:a,type:"delete",keys:z,criteria:B,isAdditionalChunk:0<k}).then(function(be){return Wn(n.table,z,be)}).then(function(be){return s(z.length,be)})}).then(function(){return b.length>k+T&&$(k+S)})})}var B=p(n)&&n.limit===1/0&&(typeof e!="function"||y)&&{index:n.index,range:n.range};return $(0).then(function(){if(0<m.length)throw new Et("Error modifying one or more objects",m,x,w);return b.length})})})},R.prototype.delete=function(){var e=this._ctx,t=e.range;return!p(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(he):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(g){var u=g.failures,g=g.numFailures;if(g)throw new Et("Could not delete some values",Object.keys(u).map(function(S){return u[S]}),i-g);return i-g})})})};var Z=R;function R(){}var he=function(e,t){return t.value=null};function Be(e,t){return e<t?-1:e===t?0:1}function Ge(e,t){return t<e?-1:e===t?0:1}function ne(e,t,n){return e=e instanceof qt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function $e(e){return new e.Collection(e,function(){return Je("")}).limit(0)}function He(w,t,n,a){var s,i,c,u,g,S,v,m=n.length;if(!n.every(function(b){return typeof b=="string"}))return ne(w,Mn);function x(b){s=b==="next"?function(B){return B.toUpperCase()}:function(B){return B.toLowerCase()},i=b==="next"?function(B){return B.toLowerCase()}:function(B){return B.toUpperCase()},c=b==="next"?Be:Ge;var $=n.map(function(B){return{lower:i(B),upper:s(B)}}).sort(function(B,k){return c(B.lower,k.lower)});u=$.map(function(B){return B.upper}),g=$.map(function(B){return B.lower}),v=(S=b)==="next"?"":a}x("next");var w=new w.Collection(w,function(){return pe(u[0],g[m-1]+a)}),y=(w._ondirectionchange=function(b){x(b)},0);return w._addAlgorithm(function(b,$,B){var k=b.key;if(typeof k=="string"){var T=i(k);if(t(T,g,y))return!0;for(var F=null,K=y;K<m;++K){var j=((D,U,z,I,G,ue)=>{for(var be=Math.min(D.length,I.length),te=-1,ae=0;ae<be;++ae){var _e=U[ae];if(_e!==I[ae])return G(D[ae],z[ae])<0?D.substr(0,ae)+z[ae]+z.substr(ae+1):G(D[ae],I[ae])<0?D.substr(0,ae)+I[ae]+z.substr(ae+1):0<=te?D.substr(0,te)+U[te]+z.substr(te+1):null;G(D[ae],_e)<0&&(te=ae)}return be<I.length&&ue==="next"?D+z.substr(D.length):be<D.length&&ue==="prev"?D.substr(0,z.length):te<0?null:D.substr(0,te)+I[te]+z.substr(te+1)})(k,T,u[K],g[K],c,S);j===null&&F===null?y=K+1:(F===null||0<c(F,j))&&(F=j)}$(F!==null?function(){b.continue(F+v)}:B)}return!1}),w}function pe(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function Je(e){return{type:1,lower:e,upper:e}}Object.defineProperty(O.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),O.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?$e(this):new this.Collection(this,function(){return pe(e,t,!n,!a)})}catch{return ne(this,Jt)}},O.prototype.equals=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return Je(e)})},O.prototype.above=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return pe(e,void 0,!0)})},O.prototype.aboveOrEqual=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return pe(e,void 0,!1)})},O.prototype.below=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return pe(void 0,e,!1,!0)})},O.prototype.belowOrEqual=function(e){return e==null?ne(this,Jt):new this.Collection(this,function(){return pe(void 0,e)})},O.prototype.startsWith=function(e){return typeof e!="string"?ne(this,Mn):this.between(e,e+mn,!0,!0)},O.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):He(this,function(t,n){return t.indexOf(n[0])===0},[e],mn)},O.prototype.equalsIgnoreCase=function(e){return He(this,function(t,n){return t===n[0]},[e],"")},O.prototype.anyOfIgnoreCase=function(){var e=de.apply(nt,arguments);return e.length===0?$e(this):He(this,function(t,n){return n.indexOf(t)!==-1},e,"")},O.prototype.startsWithAnyOfIgnoreCase=function(){var e=de.apply(nt,arguments);return e.length===0?$e(this):He(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,mn)},O.prototype.anyOf=function(){var e,t,n=this,a=de.apply(nt,arguments),s=this._cmp;try{a.sort(s)}catch{return ne(this,Jt)}return a.length===0?$e(this):((e=new this.Collection(this,function(){return pe(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,c,u){for(var g=i.key;0<s(g,a[t]);)if(++t===a.length)return c(u),!1;return s(g,a[t])===0||(c(function(){i.continue(a[t])}),!1)}),e)},O.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},O.prototype.noneOf=function(){var e=de.apply(nt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return ne(this,Jt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},O.prototype.inAnyRange=function(e,B){var n=this,a=this._cmp,s=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return $e(this);if(!e.every(function(k){return k[0]!==void 0&&k[1]!==void 0&&s(k[0],k[1])<=0}))return ne(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var g=!B||B.includeLowers!==!1,S=B&&B.includeUppers===!0,v,m=s;function x(k,T){return m(k[0],T[0])}try{(v=e.reduce(function(k,T){for(var F=0,K=k.length;F<K;++F){var j=k[F];if(a(T[0],j[1])<0&&0<a(T[1],j[0])){j[0]=c(j[0],T[0]),j[1]=u(j[1],T[1]);break}}return F===K&&k.push(T),k},[])).sort(x)}catch{return ne(this,Jt)}var w=0,y=S?function(k){return 0<s(k,v[w][1])}:function(k){return 0<=s(k,v[w][1])},b=g?function(k){return 0<i(k,v[w][0])}:function(k){return 0<=i(k,v[w][0])},$=y,B=new this.Collection(this,function(){return pe(v[0][0],v[v.length-1][1],!g,!S)});return B._ondirectionchange=function(k){m=k==="next"?($=y,s):($=b,i),v.sort(x)},B._addAlgorithm(function(k,T,F){for(var K,j=k.key;$(j);)if(++w===v.length)return T(F),!1;return!y(K=j)&&!b(K)||(n._cmp(j,v[w][1])===0||n._cmp(j,v[w][0])===0||T(function(){m===s?k.continue(v[w][0]):k.continue(v[w][1])}),!1)}),B},O.prototype.startsWithAnyOf=function(){var e=de.apply(nt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?$e(this):this.inAnyRange(e.map(function(t){return[t,t+mn]})):ne(this,"startsWithAnyOf() only works with strings")};var qt=O;function O(){}function Le(e){return Ee(function(t){return Xe(t),e(t.target.error),!1})}function Xe(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var dt="storagemutated",xt="x-storagemutated-1",oe=f(null,dt),wt=(ve.prototype._lock=function(){return Dn(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},ve.prototype._unlock=function(){if(Dn(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{vn(e[1],e[0])}catch{}}return this},ve.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},ve.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(Dn(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(a);case"MissingAPIError":throw new ee.MissingAPI(a.message,a);default:throw new ee.OpenFailed(a)}if(!this.active)throw new ee.TransactionInactive;Dn(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ee(function(s){Xe(s),t._reject(e.error)}),e.onabort=Ee(function(s){Xe(s),t.active&&t._reject(new ee.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=Ee(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&oe.storagemutated.fire(e.mutatedParts)})}return this},ve.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?Ne(new ee.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Y(function(i,c){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,c)},H])}):n?rn(function(){var i=new Y(function(c,u){s._lock();var g=t(c,u,s);g&&g.then&&g.then(c,u)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new Y(function(i,c){var u=t(i,c,s);u&&u.then&&u.then(i,c)}))._lib=!0,a):Ne(new ee.TransactionInactive)},ve.prototype._root=function(){return this.parent?this.parent._root():this},ve.prototype.waitFor=function(e){var t,n=this._root(),a=Y.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new Y(function(i,c){a.then(function(u){return n._waitingQueue.push(Ee(i.bind(null,u)))},function(u){return n._waitingQueue.push(Ee(c.bind(null,u)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},ve.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},ve.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(le(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ee.NotFound("Table "+e+" not part of transaction")},ve);function ve(){}function qe(e,t,n,a,s,i,c,u){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!c?"&":"")+(a?"*":"")+(s?"++":"")+Ye(t),type:u}}function Ye(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ke(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,c){return i=a(i,c),i&&(s[i[0]]=i[1]),s},{}))};var a}var Me=function(e){try{return e.only([[]]),Me=function(){return[[]]},[[]]}catch{return Me=function(){return mn},mn}};function et(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Ut(n,t)}:function(n){return Ut(n,e)};var t}function yn(e){return[].slice.call(e)}var Xt=0;function lt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function kt(e,t,g){function a(y){if(y.type===3)return null;if(y.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=y.lower,x=y.upper,w=y.lowerOpen,y=y.upperOpen;return m===void 0?x===void 0?null:t.upperBound(x,!!y):x===void 0?t.lowerBound(m,!!w):t.bound(m,x,!!w,!!y)}function s(v){var m,x=v.name;return{name:x,schema:v,mutate:function(w){var y=w.trans,b=w.type,$=w.keys,B=w.values,k=w.range;return new Promise(function(T,F){T=Ee(T);var K=y.objectStore(x),j=K.keyPath==null,D=b==="put"||b==="add";if(!D&&b!=="delete"&&b!=="deleteRange")throw new Error("Invalid operation type: "+b);var U,z=($||B||{length:1}).length;if($&&B&&$.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(z===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function I(Fe){++be,Xe(Fe)}var G=[],ue=[],be=0;if(b==="deleteRange"){if(k.type===4)return T({numFailures:be,failures:ue,results:[],lastResult:void 0});k.type===3?G.push(U=K.clear()):G.push(U=K.delete(a(k)))}else{var j=D?j?[B,$]:[B,null]:[$,null],te=j[0],ae=j[1];if(D)for(var _e=0;_e<z;++_e)G.push(U=ae&&ae[_e]!==void 0?K[b](te[_e],ae[_e]):K[b](te[_e])),U.onerror=I;else for(_e=0;_e<z;++_e)G.push(U=K[b](te[_e])),U.onerror=I}function $t(Fe){Fe=Fe.target.result,G.forEach(function(wn,$a){return wn.error!=null&&(ue[$a]=wn.error)}),T({numFailures:be,failures:ue,results:b==="delete"?$:G.map(function(wn){return wn.result}),lastResult:Fe})}U.onerror=function(Fe){I(Fe),$t(Fe)},U.onsuccess=$t})},getMany:function(w){var y=w.trans,b=w.keys;return new Promise(function($,B){$=Ee($);for(var k,T=y.objectStore(x),F=b.length,K=new Array(F),j=0,D=0,U=function(G){G=G.target,K[G._pos]=G.result,++D===j&&$(K)},z=Le(B),I=0;I<F;++I)b[I]!=null&&((k=T.get(b[I]))._pos=I,k.onsuccess=U,k.onerror=z,++j);j===0&&$(K)})},get:function(w){var y=w.trans,b=w.key;return new Promise(function($,B){$=Ee($);var k=y.objectStore(x).get(b);k.onsuccess=function(T){return $(T.target.result)},k.onerror=Le(B)})},query:(m=u,function(w){return new Promise(function(y,b){y=Ee(y);var $,B,k,D=w.trans,T=w.values,F=w.limit,j=w.query,K=F===1/0?void 0:F,U=j.index,j=j.range,D=D.objectStore(x),D=U.isPrimaryKey?D:D.index(U.name),U=a(j);if(F===0)return y({result:[]});m?((j=T?D.getAll(U,K):D.getAllKeys(U,K)).onsuccess=function(z){return y({result:z.target.result})},j.onerror=Le(b)):($=0,B=!T&&"openKeyCursor"in D?D.openKeyCursor(U):D.openCursor(U),k=[],B.onsuccess=function(z){var I=B.result;return!I||(k.push(T?I.value:I.primaryKey),++$===F)?y({result:k}):void I.continue()},B.onerror=Le(b))})}),openCursor:function(w){var y=w.trans,b=w.values,$=w.query,B=w.reverse,k=w.unique;return new Promise(function(T,F){T=Ee(T);var D=$.index,K=$.range,j=y.objectStore(x),j=D.isPrimaryKey?j:j.index(D.name),D=B?k?"prevunique":"prev":k?"nextunique":"next",U=!b&&"openKeyCursor"in j?j.openKeyCursor(a(K),D):j.openCursor(a(K),D);U.onerror=Le(F),U.onsuccess=Ee(function(z){var I,G,ue,be,te=U.result;te?(te.___id=++Xt,te.done=!1,I=te.continue.bind(te),G=(G=te.continuePrimaryKey)&&G.bind(te),ue=te.advance.bind(te),be=function(){throw new Error("Cursor not stopped")},te.trans=y,te.stop=te.continue=te.continuePrimaryKey=te.advance=function(){throw new Error("Cursor not started")},te.fail=Ee(F),te.next=function(){var ae=this,_e=1;return this.start(function(){return _e--?ae.continue():ae.stop()}).then(function(){return ae})},te.start=function(ae){function _e(){if(U.result)try{ae()}catch(Fe){te.fail(Fe)}else te.done=!0,te.start=function(){throw new Error("Cursor behind last entry")},te.stop()}var $t=new Promise(function(Fe,wn){Fe=Ee(Fe),U.onerror=Le(wn),te.fail=wn,te.stop=function($a){te.stop=te.continue=te.continuePrimaryKey=te.advance=be,Fe($a)}});return U.onsuccess=Ee(function(Fe){U.onsuccess=_e,_e()}),te.continue=I,te.continuePrimaryKey=G,te.advance=ue,_e(),$t},T(te)):T(null)},F)})},count:function(w){var y=w.query,b=w.trans,$=y.index,B=y.range;return new Promise(function(k,T){var F=b.objectStore(x),F=$.isPrimaryKey?F:F.index($.name),K=a(B),K=K?F.count(K):F.count();K.onsuccess=Ee(function(j){return k(j.target.result)}),K.onerror=Le(T)})}}}i=g,c=yn((g=e).objectStoreNames);var i,g={schema:{name:g.name,tables:c.map(function(v){return i.objectStore(v)}).map(function(v){var m=v.keyPath,x=v.autoIncrement,y=ie(m),w={},y={name:v.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:y,keyPath:m,autoIncrement:x,unique:!0,extractKey:et(m)},indexes:yn(v.indexNames).map(function(b){return v.index(b)}).map(function(k){var T=k.name,$=k.unique,B=k.multiEntry,k=k.keyPath,T={name:T,compound:ie(k),keyPath:k,unique:$,multiEntry:B,extractKey:et(k)};return w[lt(k)]=T}),getIndexByKeyPath:function(b){return w[lt(b)]}};return w[":id"]=y.primaryKey,m!=null&&(w[lt(m)]=y.primaryKey),y})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=g.schema,u=g.hasGetAll,g=c.tables.map(s),S={};return g.forEach(function(v){return S[v.name]=v}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(v){if(S[v])return S[v];throw new Error("Table '".concat(v,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Me(t),schema:c}}function Pn(e,t,n,a){return n=n.IDBKeyRange,t=kt(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,J(J({},s),i(s))},t)}}function we(e,t){var n=t.db,n=Pn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function ye(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(c){var u=(function g(S,v){return ra(S,v)||(S=ut(S))&&g(S,v)})(c,s);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?ht(c,s,{get:function(){return this.table(s)},set:function(g){ft(this,s,{value:g,writable:!0,configurable:!0,enumerable:!0})}}):c[s]=new e.Table(s,i))})})}function Pe(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Oe(e,t){return e._cfg.version-t._cfg.version}function Qe(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Ke("$meta",Hn("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),c=(i.create(n),i._completion.catch(a),i._reject.bind(i)),u=H.transless||H;rn(function(){if(H.trans=i,H.transless=u,t!==0)return we(e,n),S=t,((g=i).storeNames.includes("$meta")?g.table("$meta").get("version").then(function(v){return v??S}):Y.resolve(S)).then(function($){var m=e,x=$,w=i,y=n,b=[],$=m._versions,B=m._dbSchema=_t(0,m.idbdb,y);return($=$.filter(function(k){return k._cfg.version>=x})).length===0?Y.resolve():($.forEach(function(k){b.push(function(){var T,F,K,j=B,D=k._cfg.dbschema,U=(Mt(m,j,y),Mt(m,D,y),B=m._dbSchema=D,Kt(j,D)),z=(U.add.forEach(function(I){jt(y,I[0],I[1].primKey,I[1].indexes)}),U.change.forEach(function(I){if(I.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var G=y.objectStore(I.name);I.add.forEach(function(ue){return ct(G,ue)}),I.change.forEach(function(ue){G.deleteIndex(ue.name),ct(G,ue)}),I.del.forEach(function(ue){return G.deleteIndex(ue)})}),k._cfg.contentUpgrade);if(z&&k._cfg.version>x)return we(m,y),w._memoizedTables={},T=Ta(D),U.del.forEach(function(I){T[I]=j[I]}),Pe(m,[m.Transaction.prototype]),ye(m,[m.Transaction.prototype],Ce(T),T),w.schema=T,(F=cn(z))&&_n(),D=Y.follow(function(){var I;(K=z(w))&&F&&(I=sn.bind(null,null),K.then(I,I))}),K&&typeof K.then=="function"?Y.resolve(K):D.then(function(){return K})}),b.push(function(T){var F,K,j=k._cfg.dbschema;F=j,K=T,[].slice.call(K.db.objectStoreNames).forEach(function(D){return F[D]==null&&K.db.deleteObjectStore(D)}),Pe(m,[m.Transaction.prototype]),ye(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),w.schema=m._dbSchema}),b.push(function(T){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===k._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(F){return F!=="$meta"})):T.objectStore("$meta").put(k._cfg.version,"version"))})}),(function k(){return b.length?Y.resolve(b.shift()(w.idbtrans)).then(k):Y.resolve()})().then(function(){Ft(B,y)}))}).catch(c);var g,S;Ce(s).forEach(function(v){jt(n,v,s[v].primKey,s[v].indexes)}),we(e,n),Y.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function Qt(e,t){Ft(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=_t(0,e.idbdb,t);Mt(e,e._dbSchema,t);for(var a=0,s=Kt(n,e._dbSchema).change;a<s.length;a++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(g){bt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(g.src)),ct(u,g)})})(s[a]);if(typeof i=="object")return i.value}}function Kt(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)c.recreate=!0,a.change.push(c);else{var u=s.idxByName,g=i.idxByName,S=void 0;for(S in u)g[S]||c.del.push(S);for(S in g){var v=u[S],m=g[S];v?v.src!==m.src&&c.change.push(m):c.add.push(m)}(0<c.del.length||0<c.add.length||0<c.change.length)&&a.change.push(c)}}else a.add.push([n,i])}return a}function jt(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return ct(s,i)})}function Ft(e,t){Ce(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(bt&&console.debug("Dexie: Creating missing table",n),jt(t,n,e[n].primKey,e[n].indexes))})}function ct(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function _t(e,t,n){var a={};return sa(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),c=qe(Ye(S=i.keyPath),S||"",!0,!1,!!i.autoIncrement,S&&typeof S!="string",!0),u=[],g=0;g<i.indexNames.length;++g){var v=i.index(i.indexNames[g]),S=v.keyPath,v=qe(v.name,S,!!v.unique,!!v.multiEntry,!1,S&&typeof S!="string",!1);u.push(v)}a[s]=Ke(s,c,u)}),a}function Mt(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var g,S=c.indexNames[u],v=c.index(S).keyPath,v=typeof v=="string"?v:"["+sa(v).join("+")+"]";t[i]&&(g=t[i].idxByName[v])&&(g.name=S,delete t[i].idxByName[v],t[i].idxByName[S]=g)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&se.WorkerGlobalScope&&se instanceof se.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Hn(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return qe(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(i),n===0,a)})}q.prototype._createTableSchema=Ke,q.prototype._parseIndexSyntax=Hn,q.prototype._parseStoresSpec=function(e,t){var n=this;Ce(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new ee.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new ee.Schema("Primary key cannot be multiEntry*");s.forEach(function(c){if(c.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},q.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ge(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){ge(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,Pe(t,[t._allTables,t,t.Transaction.prototype]),ye(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Ce(s),s),t._storeNames=Ce(s),this},q.prototype.upgrade=function(e){return this._cfg.contentUpgrade=qn(this._cfg.contentUpgrade||xe,e),this};var _=q;function q(){}function rt(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new en(zn,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function Cn(e){return e&&typeof e.databases=="function"}function Te(e){return rn(function(){return H.letThrough=!0,e()})}function ja(e){return!("from"in e)}var st=function(e,t){var n;if(!this)return n=new st,e&&"d"in e&&ge(n,e),n;ge(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Tn(e,t,n){var a=ce(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(ja(e))return ge(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(ce(n,e.from)<0)return a?Tn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Dt(e);if(0<ce(t,e.to))return s?Tn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Dt(e);ce(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<ce(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&An(e,a),s&&t&&An(e,s)}}function An(e,t){ja(t)||(function n(a,s){var i=s.from,c=s.l,u=s.r;Tn(a,i,s.to),c&&n(a,c),u&&n(a,u)})(e,t)}function lr(e,t){var n=va(t),a=n.next();if(!a.done)for(var s=a.value,i=va(e),c=i.next(s.from),u=c.value;!a.done&&!c.done;){if(ce(u.from,s.to)<=0&&0<=ce(u.to,s.from))return!0;ce(s.from,u.from)<0?s=(a=n.next(u.from)).value:u=(c=i.next(s.from)).value}return!1}function va(e){var t=ja(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&ce(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||ce(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Dt(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=J({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=Rt(n)),e.d=Rt(e)}function Rt(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Pt(e,t){return Ce(t).forEach(function(n){e[n]?An(e[n],t[n]):e[n]=(function a(s){var i,c,u={};for(i in s)le(s,i)&&(c=s[i],u[i]=!c||typeof c!="object"||Ha.has(c.constructor)?c:a(c));return u})(t[n])}),e}function ma(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&lr(t[n],e[n])})}gt(st.prototype,((at={add:function(e){return An(this,e),this},addKey:function(e){return Tn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Tn(t,n,n)}),this},hasKey:function(e){var t=va(this).next(e).value;return t&&ce(t.from,e)<=0&&0<=ce(t.to,e)}})[Fa]=function(){return va(this)},at));var ln={},ga={},ba=!1;function Jn(e){Pt(ga,e),ba||(ba=!0,setTimeout(function(){ba=!1,ya(ga,!(ga={}))},0))}function ya(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(ln);a<s.length;a++)Ra(u=s[a],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=ln["idb://".concat(c,"/").concat(i)])&&Ra(u,e,n,t)}n.forEach(function(g){return g()})}function Ra(e,t,n,a){for(var s=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],g=u[0],S=[],v=0,m=u[1];v<m.length;v++){var x=m[v];ma(t,x.obsSet)?x.subscribers.forEach(function($){return n.add($)}):a&&S.push(x)}a&&s.push([g,S])}if(a)for(var w=0,y=s;w<y.length;w++){var b=y[w],g=b[0],S=b[1];e.queries.query[g]=S}}function Mr(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Ne(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==a)throw new ee.DatabaseClosed("db.open() was cancelled")}function u(){return new Y(function(x,w){if(c(),!n)throw new ee.MissingAPI;var y=e.name,b=t.autoSchema||!s?n.open(y):n.open(y,s);if(!b)throw new ee.MissingAPI;b.onerror=Le(w),b.onblocked=Ee(e._fireOnBlocked),b.onupgradeneeded=Ee(function($){var B;v=b.transaction,t.autoSchema&&!e._options.allowEmptyDB?(b.onerror=Xe,v.abort(),b.result.close(),(B=n.deleteDatabase(y)).onsuccess=B.onerror=Ee(function(){w(new ee.NoSuchDatabase("Database ".concat(y," doesnt exist")))})):(v.onerror=Le(w),B=$.oldVersion>Math.pow(2,62)?0:$.oldVersion,m=B<1,e.idbdb=b.result,i&&Qt(e,v),Qe(e,B/10,v,w))},w),b.onsuccess=Ee(function(){v=null;var $,B,k,T,F,K,j=e.idbdb=b.result,D=sa(j.objectStoreNames);if(0<D.length)try{var U=j.transaction((F=D).length===1?F[0]:F,"readonly");if(t.autoSchema)K=j,T=U,(k=e).verno=K.version/10,T=k._dbSchema=_t(0,K,T),k._storeNames=sa(K.objectStoreNames,0),ye(k,[k._allTables],Ce(T),T);else if(Mt(e,e._dbSchema,U),B=U,((B=Kt(_t(0,($=e).idbdb,B),$._dbSchema)).add.length||B.change.some(function(z){return z.add.length||z.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),j.close(),s=j.version+1,i=!0,x(u());we(e,U)}catch{}gn.push(e),j.onversionchange=Ee(function(z){t.vcFired=!0,e.on("versionchange").fire(z)}),j.onclose=Ee(function(){e.close({disableAutoOpen:!1})}),m&&(D=e._deps,F=y,Cn(K=D.indexedDB)||F===zn||rt(K,D.IDBKeyRange).put({name:F}).catch(xe)),x()},w)}).catch(function(x){switch(x?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<s)return s=0,u()}return Y.reject(x)})}var g,S=t.dbReadyResolve,v=null,m=!1;return Y.race([a,(typeof navigator>"u"?Y.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(x){function w(){return indexedDB.databases().finally(x)}g=setInterval(w,100),w()}).finally(function(){return clearInterval(g)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],Y.resolve(Te(function(){return e.on.ready.fire(e.vip)})).then(function x(){var w;if(0<t.onReadyBeingFired.length)return w=t.onReadyBeingFired.reduce(qn,xe),t.onReadyBeingFired=[],Y.resolve(Te(function(){return w(e.vip)})).then(x)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(x){t.dbOpenError=x;try{v&&v.abort()}catch{}return a===t.openCanceller&&e._close(),Ne(x)}).finally(function(){t.openComplete=!0,S()}).then(function(){var x;return m&&(x={},e.tables.forEach(function(w){w.schema.indexes.forEach(function(y){y.name&&(x["idb://".concat(e.name,"/").concat(w.name,"/").concat(y.name)]=new st(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(w.name,"/")]=x["idb://".concat(e.name,"/").concat(w.name,"/:dels")]=new st(-1/0,[[[]]])}),oe(dt).fire(x),ya(x,!0)),e})}function Xn(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(u){var u=i(u),g=u.value;return u.done?g:g&&typeof g.then=="function"?g.then(n,a):ie(g)?Promise.all(g).then(n,a):n(g)}}return s(t)()}function Qn(e,t,n){for(var a=ie(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Zt={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return J(J({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function c(x,w,y){var k=lt(x),b=s[k]=s[k]||[],$=x==null?0:typeof x=="string"?1:x.length,B=0<w,k=J(J({},y),{name:B?"".concat(k,"(virtual-from:").concat(y.name,")"):y.name,lowLevelIndex:y,isVirtual:B,keyTail:w,keyLength:$,extractKey:et(x),unique:!B&&y.unique});return b.push(k),k.isPrimaryKey||i.push(k),1<$&&c($===2?x[0]:x.slice(0,$-1),w+1,y),b.sort(function(T,F){return T.keyTail-F.keyTail}),k}var u=c(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[u];for(var g=0,S=a.indexes;g<S.length;g++){var v=S[g];c(v.keyPath,0,v)}function m(x){var w,y=x.query.index;return y.isVirtual?J(J({},x),{query:{index:y.lowLevelIndex,range:(w=x.query.range,y=y.keyTail,{type:w.type===1?2:w.type,lower:Qn(w.lower,w.lowerOpen?e.MAX_KEY:e.MIN_KEY,y),lowerOpen:!0,upper:Qn(w.upper,w.upperOpen?e.MIN_KEY:e.MAX_KEY,y),upperOpen:!0})}}):x}return J(J({},n),{schema:J(J({},a),{primaryKey:u,indexes:i,getIndexByKeyPath:function(x){return(x=s[lt(x)])&&x[0]}}),count:function(x){return n.count(m(x))},query:function(x){return n.query(m(x))},openCursor:function(x){var w=x.query.index,y=w.keyTail,b=w.keyLength;return w.isVirtual?n.openCursor(m(x)).then(function(B){return B&&$(B)}):n.openCursor(x);function $(B){return Object.create(B,{continue:{value:function(k){k!=null?B.continue(Qn(k,x.reverse?e.MAX_KEY:e.MIN_KEY,y)):x.unique?B.continue(B.key.slice(0,b).concat(x.reverse?e.MIN_KEY:e.MAX_KEY,y)):B.continue()}},continuePrimaryKey:{value:function(k,T){B.continuePrimaryKey(Qn(k,e.MAX_KEY,y),T)}},primaryKey:{get:function(){return B.primaryKey}},key:{get:function(){var k=B.key;return b===1?k[0]:k.slice(0,b)}},value:{get:function(){return B.value}}})}}})}})}};function Va(e,t,n,a){return n=n||{},a=a||"",Ce(e).forEach(function(s){var i,c,u;le(t,s)?(i=e[s],c=t[s],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Oa(i))!==Oa(c)?n[a+s]=t[s]:u==="Object"?Va(i,c,n,a+s+"."):i!==c&&(n[a+s]=t[s]):i!==c&&(n[a+s]=t[s])):n[a+s]=void 0}),Ce(t).forEach(function(s){le(e,s)||(n[a+s]=t[s])}),n}function Vt(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Pr={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return J(J({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return J(J({},n),{mutate:function(s){var i=H.trans,c=i.table(t).hook,u=c.deleting,g=c.creating,S=c.updating;switch(s.type){case"add":if(g.fire===xe)break;return i._promise("readwrite",function(){return v(s)},!0);case"put":if(g.fire===xe&&S.fire===xe)break;return i._promise("readwrite",function(){return v(s)},!0);case"delete":if(u.fire===xe)break;return i._promise("readwrite",function(){return v(s)},!0);case"deleteRange":if(u.fire===xe)break;return i._promise("readwrite",function(){return(function m(x,w,y){return n.query({trans:x,values:!1,query:{index:a,range:w},limit:y}).then(function(b){var $=b.result;return v({type:"delete",keys:$,trans:x}).then(function(B){return 0<B.numFailures?Promise.reject(B.failures[0]):$.length<y?{failures:[],numFailures:0,lastResult:void 0}:m(x,J(J({},w),{lower:$[$.length-1],lowerOpen:!0}),y)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function v(m){var x,w,y,b=H.trans,$=m.keys||Vt(a,m);if($)return(m=m.type==="add"||m.type==="put"?J(J({},m),{keys:$}):J({},m)).type!=="delete"&&(m.values=me([],m.values)),m.keys&&(m.keys=me([],m.keys)),x=n,y=$,((w=m).type==="add"?Promise.resolve([]):x.getMany({trans:w.trans,keys:y,cache:"immutable"})).then(function(B){var k=$.map(function(T,F){var K,j,D,U=B[F],z={onerror:null,onsuccess:null};return m.type==="delete"?u.fire.call(z,T,U,b):m.type==="add"||U===void 0?(K=g.fire.call(z,T,m.values[F],b),T==null&&K!=null&&(m.keys[F]=T=K,a.outbound||pt(m.values[F],a.keyPath,T))):(K=Va(U,m.values[F]),(j=S.fire.call(z,K,T,U,b))&&(D=m.values[F],Object.keys(j).forEach(function(I){le(D,I)?D[I]=j[I]:pt(D,I,j[I])}))),z});return n.mutate(m).then(function(T){for(var F=T.failures,K=T.results,j=T.numFailures,T=T.lastResult,D=0;D<$.length;++D){var U=(K||$)[D],z=k[D];U==null?z.onerror&&z.onerror(F[D]):z.onsuccess&&z.onsuccess(m.type==="put"&&B[D]?m.values[D]:U)}return{failures:F,results:K,numFailures:j,lastResult:T}}).catch(function(T){return k.forEach(function(F){return F.onerror&&F.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function cr(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)ce(t.keys[s],e[i])===0&&(a.push(n?vt(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var ur={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return J(J({},n),{getMany:function(a){var s;return a.cache?(s=cr(a.keys,a.trans._cache,a.cache==="clone"))?Y.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?vt(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function Ya(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function za(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var dr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new st(e.MIN_KEY,e.MAX_KEY);return J(J({},e),{transaction:function(a,s,i){if(H.subscr&&s!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(a,s,i)},table:function(a){function s($){var b,$=$.query;return[b=$.index,new st((b=($=$.range).lower)!=null?b:e.MIN_KEY,(b=$.upper)!=null?b:e.MAX_KEY)]}var i=e.table(a),c=i.schema,u=c.primaryKey,g=c.indexes,S=u.extractKey,v=u.outbound,m=u.autoIncrement&&g.filter(function(y){return y.compound&&y.keyPath.includes(u.keyPath)}),x=J(J({},i),{mutate:function(y){function b(G){return G="idb://".concat(t,"/").concat(a,"/").concat(G),F[G]||(F[G]=new st)}var $,B,k,T=y.trans,F=y.mutatedParts||(y.mutatedParts={}),K=b(""),j=b(":dels"),D=y.type,z=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[Vt(u,y).filter(function(G){return G}),y.values]:[],U=z[0],z=z[1],I=y.trans._cache;return ie(U)?(K.addKeys(U),(D=D==="delete"||U.length===z.length?cr(U,I):null)||j.addKeys(U),(D||z)&&($=b,B=D,k=z,c.indexes.forEach(function(G){var ue=$(G.name||"");function be(ae){return ae!=null?G.extractKey(ae):null}function te(ae){G.multiEntry&&ie(ae)?ae.forEach(function(_e){return ue.addKey(_e)}):ue.addKey(ae)}(B||k).forEach(function(ae,Fe){var $t=B&&be(B[Fe]),Fe=k&&be(k[Fe]);ce($t,Fe)!==0&&($t!=null&&te($t),Fe!=null)&&te(Fe)})}))):U?(z={from:(I=U.lower)!=null?I:e.MIN_KEY,to:(D=U.upper)!=null?D:e.MAX_KEY},j.add(z),K.add(z)):(K.add(n),j.add(n),c.indexes.forEach(function(G){return b(G.name).add(n)})),i.mutate(y).then(function(G){return!U||y.type!=="add"&&y.type!=="put"||(K.addKeys(G.results),m&&m.forEach(function(ue){for(var be=y.values.map(function($t){return ue.extractKey($t)}),te=ue.keyPath.findIndex(function($t){return $t===u.keyPath}),ae=0,_e=G.results.length;ae<_e;++ae)be[ae][te]=G.results[ae];b(ue.name).addKeys(be)})),T.mutatedParts=Pt(T.mutatedParts||{},F),G})}}),w={get:function(y){return[u,new st(y.key)]},getMany:function(y){return[u,new st().addKeys(y.keys)]},count:s,query:s,openCursor:s};return Ce(w).forEach(function(y){x[y]=function(b){var $=H.subscr,B=!!$,k=Ya(H,i)&&za(y,b)?b.obsSet={}:$;if(B){var T,$=function(z){return z="idb://".concat(t,"/").concat(a,"/").concat(z),k[z]||(k[z]=new st)},F=$(""),K=$(":dels"),B=w[y](b),j=B[0],B=B[1];if((y==="query"&&j.isPrimaryKey&&!b.values?K:$(j.name||"")).add(B),!j.isPrimaryKey){if(y!=="count")return T=y==="query"&&v&&b.values&&i.query(J(J({},b),{values:!1})),i[y].apply(this,arguments).then(function(z){if(y==="query"){if(v&&b.values)return T.then(function(be){return be=be.result,F.addKeys(be),z});var I=b.values?z.result.map(S):z.result;(b.values?F:K).addKeys(I)}else{var G,ue;if(y==="openCursor")return ue=b.values,(G=z)&&Object.create(G,{key:{get:function(){return K.addKey(G.primaryKey),G.key}},primaryKey:{get:function(){var be=G.primaryKey;return K.addKey(be),be}},value:{get:function(){return ue&&F.addKey(G.primaryKey),G.value}}})}return z});K.add(n)}}return i[y].apply(this,arguments)}}),x}})}};function Ua(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=J({},t),ie(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&ie(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function Ca(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<ce(n,a.lower):0<=ce(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?ce(n,a.upper)<0:ce(n,a.upper)<=0));var n,a}function fr(e,t,n,a,s,i){var c,u,g,S,v,m;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,g=t.query.range,S=a.schema.primaryKey.extractKey,v=c.extractKey,m=(c.lowLevelIndex||c).extractKey,(a=n.reduce(function(x,w){var y=x,b=[];if(w.type==="add"||w.type==="put")for(var $=new st,B=w.values.length-1;0<=B;--B){var k,T=w.values[B],F=S(T);!$.hasKey(F)&&(k=v(T),u&&ie(k)?k.some(function(z){return Ca(z,g)}):Ca(k,g))&&($.addKey(F),b.push(T))}switch(w.type){case"add":var K=new st().addKeys(t.values?x.map(function(I){return S(I)}):x),y=x.concat(t.values?b.filter(function(I){return I=S(I),!K.hasKey(I)&&(K.addKey(I),!0)}):b.map(function(I){return S(I)}).filter(function(I){return!K.hasKey(I)&&(K.addKey(I),!0)}));break;case"put":var j=new st().addKeys(w.values.map(function(I){return S(I)}));y=x.filter(function(I){return!j.hasKey(t.values?S(I):I)}).concat(t.values?b:b.map(function(I){return S(I)}));break;case"delete":var D=new st().addKeys(w.keys);y=x.filter(function(I){return!D.hasKey(t.values?S(I):I)});break;case"deleteRange":var U=w.range;y=x.filter(function(I){return!Ca(S(I),U)})}return y},e))===e)?e:(a.sort(function(x,w){return ce(m(x),m(w))||ce(S(x),S(w))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function hr(e,t){return ce(e.lower,t.lower)===0&&ce(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function pr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=ce(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=ce(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function vr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&nn(i,s)},3e3))})}var On={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return J(J({},e),{transaction:function(n,a,s){var i,c,u=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,u.addEventListener("abort",(c=function(g){return function(){if(i.abort(),a==="readwrite"){for(var S=new Set,v=0,m=n;v<m.length;v++){var x=m[v],w=ln["idb://".concat(t,"/").concat(x)];if(w){var y=e.table(x),b=w.optimisticOps.filter(function(G){return G.trans===u});if(u._explicit&&g&&u.mutatedParts)for(var $=0,B=Object.values(w.queries.query);$<B.length;$++)for(var k=0,T=(j=B[$]).slice();k<T.length;k++)ma((D=T[k]).obsSet,u.mutatedParts)&&(nn(j,D),D.subscribers.forEach(function(G){return S.add(G)}));else if(0<b.length){w.optimisticOps=w.optimisticOps.filter(function(G){return G.trans!==u});for(var F=0,K=Object.values(w.queries.query);F<K.length;F++)for(var j,D,U,z=0,I=(j=K[F]).slice();z<I.length;z++)(D=I[z]).res!=null&&u.mutatedParts&&(g&&!D.dirty?(U=Object.isFrozen(D.res),U=fr(D.res,D.req,b,y,D,U),D.dirty?(nn(j,D),D.subscribers.forEach(function(G){return S.add(G)})):U!==D.res&&(D.res=U,D.promise=Y.resolve({result:U}))):(D.dirty&&nn(j,D),D.subscribers.forEach(function(G){return S.add(G)})))}}}S.forEach(function(G){return G()})}}})(!1),{signal:s}),u.addEventListener("error",c(!1),{signal:s}),u.addEventListener("complete",c(!0),{signal:s})),u},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return J(J({},a),{mutate:function(i){var c,u=H.trans;return!s.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=ln["idb://".concat(t,"/").concat(n)])?(u=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||Vt(s,i).some(function(g){return g==null}))?(c.optimisticOps.push(i),i.mutatedParts&&Jn(i.mutatedParts),u.then(function(g){0<g.numFailures&&(nn(c.optimisticOps,i),(g=Ua(0,i,g))&&c.optimisticOps.push(g),i.mutatedParts)&&Jn(i.mutatedParts)}),u.catch(function(){nn(c.optimisticOps,i),i.mutatedParts&&Jn(i.mutatedParts)})):u.then(function(g){var S=Ua(0,J(J({},i),{values:i.values.map(function(v,m){var x;return g.failures[m]?v:(pt(x=(x=s.keyPath)!=null&&x.includes(".")?vt(v):J({},v),s.keyPath,g.results[m]),x)})}),g);c.optimisticOps.push(S),queueMicrotask(function(){return i.mutatedParts&&Jn(i.mutatedParts)})}),u):a.mutate(i)},query:function(i){var c,u,g,S,v,m,x;return Ya(H,a)&&za("query",i)?(c=((g=H.trans)==null?void 0:g.db._options.cache)==="immutable",u=(g=H).requery,g=g.signal,m=((w,y,b,$)=>{var B=ln["idb://".concat(w,"/").concat(y)];if(!B)return[];if(!(w=B.queries[b]))return[null,!1,B,null];var k=w[($.query?$.query.index.name:null)||""];if(!k)return[null,!1,B,null];switch(b){case"query":var T=k.find(function(F){return F.req.limit===$.limit&&F.req.values===$.values&&hr(F.req.query.range,$.query.range)});return T?[T,!0,B,k]:[k.find(function(F){return("limit"in F.req?F.req.limit:1/0)>=$.limit&&(!$.values||F.req.values)&&pr(F.req.query.range,$.query.range)}),!1,B,k];case"count":return T=k.find(function(F){return hr(F.req.query.range,$.query.range)}),[T,!!T,B,k]}})(t,n,"query",i),x=m[0],S=m[2],v=m[3],x&&m[1]?x.obsSet=i.obsSet:(m=a.query(i).then(function(w){var y=w.result;if(x&&(x.res=y),c){for(var b=0,$=y.length;b<$;++b)Object.freeze(y[b]);Object.freeze(y)}else w.result=vt(y);return w}).catch(function(w){return v&&x&&nn(v,x),Promise.reject(w)}),x={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},v?v.push(x):(v=[x],(S=S||(ln["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=v)),vr(x,v,u,g),x.promise.then(function(w){return{result:fr(w.result,i,S?.optimisticOps,a,x,c)}})):a.query(i)}})}})}};function xa(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}je.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ee.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Oe),n.stores({}),this._state.autoSchema=!1),n},je.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?e():new Y(function(n,a){if(t._state.openComplete)return a(new ee.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new ee.DatabaseClosed);t.open().catch(xe)}t._state.dbReadyPromise.then(n,a)}).then(e)},je.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(c,u){return c.level-u.level}),this},je.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},je.prototype.open=function(){var e=this;return vn(an,function(){return Mr(e)})},je.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=gn.indexOf(this);if(0<=t&&gn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Y(function(n){e.dbReadyResolve=n}),e.openCanceller=new Y(function(n,a){e.cancelOpen=a}))},je.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ee.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ee.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},je.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new Y(function(s,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=Ee(function(){var g,S,v;g=t._deps,S=t.name,Cn(v=g.indexedDB)||S===zn||rt(v,g.IDBKeyRange).delete(S).catch(xe),s()}),u.onerror=Le(i),u.onblocked=t._fireOnBlocked}if(n)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(c):c()})},je.prototype.backendDB=function(){return this.idbdb},je.prototype.isOpen=function(){return this.idbdb!==null},je.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},je.prototype.hasFailed=function(){return this._state.dbOpenError!==null},je.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(je.prototype,"tables",{get:function(){var e=this;return Ce(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),je.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new ee.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Aa(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},je.prototype._transaction=function(e,t,n){var a,s,i=this,c=H.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function(S){if(S=S instanceof i.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),e=="r"||e===qa)a=qa;else{if(e!="rw"&&e!=Ka)throw new ee.InvalidArgument("Invalid transaction mode: "+e);a=Ka}if(c){if(c.mode===qa&&a===Ka){if(!u)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&s.forEach(function(S){if(c&&c.storeNames.indexOf(S)===-1){if(!u)throw new ee.SubTransaction("Table "+S+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch(S){return c?c._promise(null,function(v,m){m(S)}):Ne(S)}var g=(function S(v,m,x,w,y){return Y.resolve().then(function(){var k=H.transless||H,b=v._createTransaction(m,x,v._dbSchema,w),k=(b.explicit=!0,{trans:b,transless:k});if(w)b.idbtrans=w.idbtrans;else try{b.create(),b.idbtrans._explicit=!0,v._state.PR1398_maxLoop=3}catch(T){return T.name===la.InvalidState&&v.isOpen()&&0<--v._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),v.close({disableAutoOpen:!1}),v.open().then(function(){return S(v,m,x,null,y)})):Ne(T)}var $,B=cn(y),k=(B&&_n(),Y.follow(function(){var T;($=y.call(b,b))&&(B?(T=sn.bind(null,null),$.then(T,T)):typeof $.next=="function"&&typeof $.throw=="function"&&($=Xn($)))},k));return($&&typeof $.then=="function"?Y.resolve($).then(function(T){return b.active?T:Ne(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):k.then(function(){return $})).then(function(T){return w&&b._resolve(),b._completion.then(function(){return T})}).catch(function(T){return b._reject(T),Ne(T)})})}).bind(null,this,a,s,c,n);return c?c._promise(a,g,"lock"):H.trans?vn(H.transless,function(){return i._whenReady(g)}):this._whenReady(g)},je.prototype.table=function(e){if(le(this._allTables,e))return this._allTables[e];throw new ee.InvalidTable("Table ".concat(e," does not exist"))};var en=je;function je(e,t){var n,a,s,i,c,u=this,g=(this._middlewares={},this.verno=0,je.dependencies),g=(this._options=t=J({addons:je.addons,autoOpen:!0,indexedDB:g.indexedDB,IDBKeyRange:g.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:xe,dbReadyPromise:null,cancelOpen:xe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),v=(S.dbReadyPromise=new Y(function(m){S.dbReadyResolve=m}),S.openCanceller=new Y(function(m,x){S.cancelOpen=x}),this._state=S,this.name=e,this.on=f(this,"populate","blocked","versionchange","close",{ready:[qn,xe]}),this.once=function(m,x){var w=function(){for(var y=[],b=0;b<arguments.length;b++)y[b]=arguments[b];u.on(m).unsubscribe(w),x.apply(u,y)};return u.on(m,w)},this.on.ready.subscribe=ia(this.on.ready.subscribe,function(m){return function(x,w){je.vip(function(){var y,b=u._state;b.openComplete?(b.dbOpenError||Y.resolve().then(x),w&&m(x)):b.onReadyBeingFired?(b.onReadyBeingFired.push(x),w&&m(x)):(m(x),y=u,w||m(function $(){y.on.ready.unsubscribe(x),y.on.ready.unsubscribe($)}))})}}),this.Collection=(n=this,d(Z.prototype,function($,b){this.db=n;var w=ar,y=null;if(b)try{w=b()}catch(k){y=k}var b=$._ctx,$=b.table,B=$.hook.reading.fire;this._ctx={table:$,index:b.index,isPrimKey:!b.index||$.schema.primKey.keyPath&&b.index===$.schema.primKey.name,range:w,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:y,or:b.or,valueMapper:B!==Ln?B:null}})),this.Table=(a=this,d(o.prototype,function(m,x,w){this.db=a,this._tx=w,this.name=m,this.schema=x,this.hook=a._allTables[m]?a._allTables[m].hook:f(null,{creating:[Za,xe],reading:[kr,Ln],updating:[Sr,xe],deleting:[$r,xe]})})),this.Transaction=(s=this,d(wt.prototype,function(m,x,w,y,b){var $=this;m!=="readonly"&&x.forEach(function(B){B=(B=w[B])==null?void 0:B.yProps,B&&(x=x.concat(B.map(function(k){return k.updatesTable})))}),this.db=s,this.mode=m,this.storeNames=x,this.schema=w,this.chromeTransactionDurability=y,this.idbtrans=null,this.on=f(this,"complete","error","abort"),this.parent=b||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Y(function(B,k){$._resolve=B,$._reject=k}),this._completion.then(function(){$.active=!1,$.on.complete.fire()},function(B){var k=$.active;return $.active=!1,$.on.error.fire(B),$.parent?$.parent._reject(B):k&&$.idbtrans&&$.idbtrans.abort(),Ne(B)})})),this.Version=(i=this,d(_.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,d(qt.prototype,function(m,x,w){if(this.db=c,this._ctx={table:m,index:x===":id"?null:x,or:w},this._cmp=this._ascending=ce,this._descending=function(y,b){return ce(b,y)},this._max=function(y,b){return 0<ce(y,b)?y:b},this._min=function(y,b){return ce(y,b)<0?y:b},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=Me(t.IDBKeyRange),this._createTransaction=function(m,x,w,y){return new u.Transaction(m,x,w,u._options.chromeTransactionDurability,y)},this._fireOnBlocked=function(m){u.on("blocked").fire(m),gn.filter(function(x){return x.name===u.name&&x!==u&&!x._state.vcFired}).map(function(x){return x.on("versionchange").fire(m)})},this.use(ur),this.use(On),this.use(dr),this.use(Zt),this.use(Pr),new Proxy(this,{get:function(m,x,w){var y;return x==="_vip"||(x==="table"?function(b){return xa(u.table(b),v)}:(y=Reflect.get(m,x,w))instanceof o?xa(y,v):x==="tables"?y.map(function(b){return xa(b,v)}):x==="_createTransaction"?function(){return xa(y.apply(this,arguments),v)}:y)}}));this.vip=v,g.forEach(function(m){return m(u)})}var wa,Yt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Tr=(ka.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},ka.prototype[Yt]=function(){return this},ka);function ka(e){this._subscribe=e}try{wa={indexedDB:se.indexedDB||se.mozIndexedDB||se.webkitIndexedDB||se.msIndexedDB,IDBKeyRange:se.IDBKeyRange||se.webkitIDBKeyRange}}catch{wa={indexedDB:null,IDBKeyRange:null}}function Wa(e){var t,n=!1,a=new Tr(function(s){var i=cn(e),c,u=!1,g={},S={},v={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),m&&oe.storagemutated.unsubscribe(w))}},m=(s.start&&s.start(v),!1),x=function(){return La(y)},w=function(b){Pt(g,b),ma(S,g)&&x()},y=function(){var b,$,B;!u&&wa.indexedDB&&(g={},b={},c&&c.abort(),c=new AbortController,B=(k=>{var T=pn();try{i&&_n();var F=rn(e,k);return F=i?F.finally(sn):F}finally{T&&Ct()}})($={subscr:b,signal:c.signal,requery:x,querier:e,trans:null}),Promise.resolve(B).then(function(k){n=!0,t=k,u||$.signal.aborted||(g={},(T=>{for(var F in T)if(le(T,F))return;return 1})(S=b)||m||(oe(dt,w),m=!0),La(function(){return!u&&s.next&&s.next(k)}))},function(k){n=!1,["DatabaseClosedError","AbortError"].includes(k?.name)||u||La(function(){u||s.error&&s.error(k)})}))};return setTimeout(x,0),v});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var xn=en;function Ga(e){var t=It;try{It=!0,oe.storagemutated.fire(e),ya(e,!0)}finally{It=t}}gt(xn,J(J({},Nt),{delete:function(e){return new xn(e,{addons:[]}).delete()},exists:function(e){return new xn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=xn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(Cn(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==zn})}):rt(n,t).toCollection().primaryKeys()).then(e)}catch{return Ne(new ee.MissingAPI)}var t,n},defineClass:function(){return function(e){ge(this,e)}},ignoreTransaction:function(e){return H.trans?vn(H.transless,e):e()},vip:Te,async:function(e){return function(){try{var t=Xn(e.apply(this,arguments));return t&&typeof t.then=="function"?t:Y.resolve(t)}catch(n){return Ne(n)}}},spawn:function(e,t,n){try{var a=Xn(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:Y.resolve(a)}catch(s){return Ne(s)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,t){return e=Y.resolve(typeof e=="function"?xn.ignoreTransaction(e):e).timeout(t||6e4),H.trans?H.trans.waitFor(e):e},Promise:Y,debug:{get:function(){return bt},set:function(e){Ia(e)}},derive:tn,extend:ge,props:gt,override:ia,Events:f,on:oe,liveQuery:Wa,extendObservabilitySet:Pt,getByKeyPath:Ut,setByKeyPath:pt,delByKeyPath:function(e,t){typeof t=="string"?pt(e,t,void 0):"length"in t&&[].map.call(t,function(n){pt(e,n,void 0)})},shallowClone:Ta,deepClone:vt,getObjectDiff:Va,cmp:ce,asap:oa,minKey:-1/0,addons:[],connections:gn,errnames:la,dependencies:wa,cache:ln,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),xn.maxKey=Me(xn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(oe(dt,function(e){It||(e=new CustomEvent(xt,{detail:e}),It=!0,dispatchEvent(e),It=!1)}),addEventListener(xt,function(e){e=e.detail,It||Ga(e)}));var tt,It=!1,it=function(){};return typeof BroadcastChannel<"u"&&((it=function(){(tt=new BroadcastChannel(xt)).onmessage=function(e){return e.data&&Ga(e.data)}})(),typeof tt.unref=="function"&&tt.unref(),oe(dt,function(e){It||tt.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!en.disableBfCache&&e.persisted){bt&&console.debug("Dexie: handling persisted pagehide"),tt?.close();for(var t=0,n=gn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!en.disableBfCache&&e.persisted&&(bt&&console.debug("Dexie: handling persisted pageshow"),it(),Ga({all:new st(-1/0,[[]])}))})),Y.rejectionMapper=function(e,t){return!e||e instanceof un||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Qa[e.name]?e:(t=new Qa[e.name](t||e.message,e),"stack"in e&&ht(t,"stack",{get:function(){return this.inner.stack}}),t)},Ia(bt),J(en,Object.freeze({__proto__:null,Dexie:en,Entity:rr,PropModification:Gn,RangeSet:st,add:function(e){return new Gn({add:e})},cmp:ce,default:en,liveQuery:Wa,mergeRanges:An,rangesOverlap:lr,remove:function(e){return new Gn({remove:e})},replacePrefix:function(e,t){return new Gn({replacePrefix:[e,t]})}}),{default:en}),en})})(gr)),gr.exports}var qs=Ls();const Or=Is(qs),us=Symbol.for("Dexie"),br=globalThis[us]||(globalThis[us]=Or);if(Or.semVer!==br.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Or.semVer} and ${br.semVer}`);const{liveQuery:ei,mergeRanges:ti,rangesOverlap:ni,RangeSet:ai,cmp:ri,Entity:si,PropModification:ii,replacePrefix:oi,add:li,remove:ci,DexieYProvider:ui}=br,Re=new br("haushaltsbuch-db");Re.version(1).stores({years:"year",fixedTemplateState:"id"});Re.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Re.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Ma="singleton";function yr(){return new Date().toISOString()}async function aa(){return Re.years.orderBy("year").toArray()}async function Ks(M){return Re.years.get(M)}async function na(M){await Re.years.put(M)}async function Fr(){const M=await Re.fixedTemplateState.get(Ma);if(!M){const h={id:Ma,templates:[],version:yr(),updatedAt:new Date().toISOString()};return await Re.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Dr(M){const h=yr();return await Re.fixedTemplateState.put({id:Ma,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function Ir(){const M=await Re.annualVariableFixedTemplateState.get(Ma);if(!M){const h={id:Ma,templates:[],version:yr(),updatedAt:new Date().toISOString()};return await Re.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:M.templates,version:M.version}}async function Nr(M){const h=yr();return await Re.annualVariableFixedTemplateState.put({id:Ma,templates:M,version:h,updatedAt:new Date().toISOString()}),h}async function js(M){await Re.auditLog.put(M)}async function Lr(){return Re.auditLog.orderBy("timestampIso").toArray()}async function Rs(M){await Re.auditLog.clear(),M.length!==0&&await Re.auditLog.bulkPut(M)}async function Vs(){const M=await aa(),[h,Ae,J]=await Promise.all([Fr(),Ir(),Lr()]);return{exportedAt:new Date().toISOString(),years:M,fixedTemplates:h.templates,annualVariableFixedTemplates:Ae.templates,auditLogEntries:J}}async function Ys(M){await Re.transaction("rw",[Re.years,Re.fixedTemplateState,Re.annualVariableFixedTemplateState,Re.auditLog],async()=>{await Re.years.clear(),await Re.years.bulkPut(M.years),await Dr(M.fixedTemplates),await Nr(M.annualVariableFixedTemplates??[]),await Rs(M.auditLogEntries??[])})}function De(M){const h=M.replace(",",".").trim();if(!h)return 0;const Ae=Number.parseFloat(h);return Number.isNaN(Ae)?0:Math.round(Ae*100)}const zs=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function C(M){return zs.format(M/100)}function mt(M){return(M/100).toFixed(2)}function Se(M){return new Date(2026,M-1,1).toLocaleDateString("de-DE",{month:"long"})}const ps=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function ds(M){return ps.includes(M)}function Us(M){switch(M){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const fs=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Ws(M){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ae="habu-theme",J="habu-backup-dirty",me="habu-unexported-change-log",se="habu-last-backup-filename",Ce="habu-recurring-budget-defaults";let ie=null,ge=null,ut=null,Ve=null,le=!1,gt=!1;const ft=new WeakMap;function ht(){const o=M.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),p=l.getPropertyValue("--table-stripe").trim(),P=l.getPropertyValue("--table-border").trim(),A=l.getPropertyValue("--budget-under").trim(),N=l.getPropertyValue("--danger-2").trim(),L=96,X=250,W=Z=>1-Math.pow(1-Math.max(0,Math.min(1,Z)),3);o.forEach(Z=>{Z.dataset.hoverBound!=="1"&&(Z.dataset.hoverBound="1",Z.addEventListener("mouseenter",()=>{Z.dataset.hovering="1",ht()}),Z.addEventListener("mouseleave",()=>{delete Z.dataset.hovering,delete Z.dataset.hoverX,ht()}),Z.addEventListener("mousemove",we=>{const ye=Z.getBoundingClientRect(),Pe=Math.round(we.clientX-ye.left);Z.dataset.hoverX=String(Pe),ht()}));const R=Number.parseInt(Z.dataset.budgetCents??"0",10),he=Number.parseInt(Z.dataset.actualCents??"0",10),Be=Z.dataset.label??"Kategorie",Ge=Z.dataset.hovering==="1",ne=`${Be}|${R}|${he}`,$e=Z.dataset.lastRenderSignature!==ne;Z.dataset.lastRenderSignature=ne;const He=Math.max(120,Math.floor(Z.clientWidth||120)),pe=window.devicePixelRatio||1,Je=Math.floor(He*pe),qt=Math.floor(L*pe);(Z.width!==Je||Z.height!==qt)&&(Z.width=Je,Z.height=qt);const O=Z.getContext("2d");if(!O)return;const Le=Math.max(1,R,he),Xe=Math.min(1,Math.max(0,R/Le)),dt=Math.min(1,Math.max(0,he/Le)),xt=R-he,oe=R>0?he/R*100:he>0?100:0,wt=8,ve=wt,qe=34,Ye=He-wt*2,Ke=22,Me=Number.parseInt(Z.dataset.hoverX??"-1",10),et=(we,ye,Pe,Oe,Qe)=>{O.beginPath(),O.moveTo(we+Qe,ye),O.lineTo(we+Pe-Qe,ye),O.quadraticCurveTo(we+Pe,ye,we+Pe,ye+Qe),O.lineTo(we+Pe,ye+Oe-Qe),O.quadraticCurveTo(we+Pe,ye+Oe,we+Pe-Qe,ye+Oe),O.lineTo(we+Qe,ye+Oe),O.quadraticCurveTo(we,ye+Oe,we,ye+Oe-Qe),O.lineTo(we,ye+Qe),O.quadraticCurveTo(we,ye,we+Qe,ye),O.closePath()},yn=we=>{O.setTransform(1,0,0,1,0,0),O.clearRect(0,0,Z.width,Z.height),O.scale(pe,pe),et(ve,qe,Ye,Ke,8),O.fillStyle=p,O.fill(),O.strokeStyle=P,O.lineWidth=1,O.stroke();const ye=[.6,.25,.15],Pe=[.1,.16,.24];let Oe=0;ye.forEach((Ft,ct)=>{const _t=Ye*Ft;O.save(),O.globalAlpha=Pe[ct]??.1,O.fillStyle=d,O.fillRect(ve+Oe,qe,_t,Ke),O.restore(),Oe+=_t});const Qe=R>0&&he>R?N:A,Qt=Ye*dt*we;et(ve,qe+3,Qt,Ke-6,6),O.fillStyle=Qe,O.fill(),Ge&&(O.save(),O.strokeStyle=Qe,O.lineWidth=1.5,O.globalAlpha=.8,et(ve-1,qe+2,Math.max(2,Qt+2),Ke-4,7),O.stroke(),O.restore());const Kt=ve+Ye*Xe;O.strokeStyle=f,O.lineWidth=Ge?3:2,O.beginPath(),O.moveTo(Kt,qe-3),O.lineTo(Kt,qe+Ke+3),O.stroke(),Ge&&Me>=ve&&Me<=ve+Ye&&(O.save(),O.strokeStyle=f,O.globalAlpha=.35,O.lineWidth=1,O.beginPath(),O.moveTo(Me,qe-8),O.lineTo(Me,qe+Ke+8),O.stroke(),O.restore()),O.fillStyle=f,O.font="600 12px system-ui, -apple-system, sans-serif",O.textAlign="left",O.textBaseline="top",O.fillText(Be,ve,10);const jt=oe*we;if(O.fillStyle=oe>100?N:oe<100?A:d,O.textAlign="right",O.fillText(`${jt.toFixed(0)}%`,ve+Ye,10),O.fillStyle=d,O.font="500 11px system-ui, -apple-system, sans-serif",O.textAlign="left",O.textBaseline="top",O.fillText(`Ist ${C(he)} · Ziel ${C(R)} · Δ ${xt>=0?"+":""}${C(xt)}`,ve,64),Ge){const Ft=`Nutzung ${oe.toFixed(1)}%`;O.font="600 11px system-ui, -apple-system, sans-serif";const ct=8,_t=5,Mt=22,_=O.measureText(Ft).width+ct*2,q=Number.isFinite(Me)?Me-_/2:ve+Ye-_,rt=Math.min(ve+Ye-_,Math.max(ve,q)),Cn=qe-Mt-8;O.save(),O.fillStyle=f,O.globalAlpha=.92,et(rt,Cn,_,Mt,6),O.fill(),O.restore(),O.fillStyle=p,O.textAlign="left",O.textBaseline="top",O.fillText(Ft,rt+ct,Cn+_t)}},Xt=ft.get(Z);if(Xt&&window.cancelAnimationFrame(Xt),!$e){yn(1);return}const lt=performance.now(),kt=we=>{const ye=we-lt,Pe=Math.min(1,ye/X);if(yn(W(Pe)),Pe<1){const Oe=window.requestAnimationFrame(kt);ft.set(Z,Oe);return}ft.delete(Z)},Pn=window.requestAnimationFrame(kt);ft.set(Z,Pn)})}function tn(){M.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),p=l.querySelector("[data-year-trend-active-net]"),P=l.querySelector("[data-year-trend-active-income]"),A=l.querySelector("[data-year-trend-active-expense]"),N=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!p||!P||!A||!N)return;const X=(R,he)=>{R.classList.remove("danger","budget-under");const Be=he<0?"danger":he>0?"budget-under":"";Be&&R.classList.add(Be)},W=R=>{const he=R.dataset.monthLabel??"-",Be=Number.parseInt(R.dataset.netCents??"0",10),Ge=Number.parseInt(R.dataset.actualNetCents??"0",10),ne=Number.parseInt(R.dataset.incomeCents??"0",10),$e=Number.parseInt(R.dataset.expenseCents??"0",10),He=Number.parseInt(R.dataset.deltaCents??"0",10);d.textContent=he,p.textContent=C(Be),P.textContent=C(ne),A.textContent=C($e),N.textContent=`${He>=0?"+":""}${C(He)}`,X(p,Be),X(N,He),f.forEach(pe=>{const Je=pe===R;pe.classList.toggle("is-active",Je),pe.setAttribute("aria-pressed",String(Je))}),L&&(L.textContent=`${he}: Kalkulierter Saldo ${C(Be)}, Ist-Saldo ${C(Ge)}, Einkommen ${C(ne)}, Ausgaben ${C($e)}`)};f.forEach(R=>{const he=()=>{W(R)};R.addEventListener("mouseenter",he),R.addEventListener("focus",he),R.addEventListener("click",he)});const Z=f.find(R=>R.dataset.pointDefault==="1")??f[f.length-1];Z&&W(Z)})}function ra(o){if(o==="dashboard"){const l=h.years.slice().sort((d,p)=>p.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,re()}function Pa(){h.topModal&&(h.topModal=null,re())}function sa(){h.showUnexportedChangeLogModal=!0,re()}function ia(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,re())}function Dn(){h.showPersistentAuditLogModal=!0,re()}function oa(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,re())}function Ut(){le||(le=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),ia();return}if(h.showPersistentAuditLogModal){o.preventDefault(),oa();return}h.topModal&&(o.preventDefault(),Pa())}}))}function pt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ta(){const o=M.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",pt())}function Cr(){if(gt)return;gt=!0;const o=()=>{Ta(),ht()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Aa(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),ie=l,l}function Ha(){if(ge&&document.body.contains(ge))return ge;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return ge=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),ge=l,l}function In(){if(Ve&&document.body.contains(Ve))return Ve;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return Ve=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),Ve=l,l}function vt(){if(!ge){ut=null;return}ge.innerHTML="",ut=null}function Nn(){Ve&&(Ve.innerHTML="")}function Oa(o,l,f){const d=new Date,p=d.getFullYear(),P=d.getMonth()+1,A=d.getDate(),N=new Date(o,l,0).getDate();if(o<p||o===p&&l<P)return{occurrences:0,remainingDays:0};const L=o===p&&l===P?Math.min(A,N):1,X=Math.max(0,N-L+1);let W=0;for(let Z=L;Z<=N;Z+=1)new Date(o,l-1,Z).getDay()===f&&(W+=1);return{occurrences:W,remainingDays:X}}async function Fa(o,l){const f=Ie();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await We(`Wocheneinkauf geplant: ${fs.find(d=>d.value===o)?.label??"Wochentag"} mit ${C(f.weeklyShoppingEstimateCents)} €`),re())}function xr(){const o=Ie(),l=Wt();if(!o||!l)return;const f=In();Nn();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,p=o.weeklyShoppingEstimateCents??0,P=l.year,A=o.month,N=Kn(P,A),L=N?at(N):{foodCents:0},X=N?N.foodBudgetCents??0:0,W=L.foodCents,Z=X-W;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${fs.map(oe=>`<option value="${oe.value}" ${oe.value===d?"selected":""}>${oe.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${mt(p)}" />
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
    `;const R=f.querySelector(".weekly-shopping-modal-backdrop"),he=f.querySelector("#weekly-shopping-weekday"),Be=f.querySelector("#weekly-shopping-estimate"),Ge=f.querySelector("#weekly-shopping-occurrences"),ne=f.querySelector("#weekly-shopping-total"),$e=f.querySelector("#weekly-shopping-rest-before"),He=f.querySelector("#weekly-shopping-rest-after"),pe=f.querySelector("#weekly-shopping-days-left"),Je=f.querySelector("#weekly-shopping-per-day"),qt=f.querySelector("#weekly-shopping-cancel"),O=f.querySelector("#weekly-shopping-save");function Le(){const oe=Number.parseInt(he?.value??"1",10);return Number.isInteger(oe)&&oe>=0&&oe<=6?oe:1}function Xe(){return Math.max(0,De(Be?.value??"0"))}function dt(){const oe=Le(),wt=Xe(),{occurrences:ve,remainingDays:qe}=Oa(P,A,oe),Ye=ve*wt,Ke=Z-Ye,Me=qe>0?Math.trunc(Ke/qe):0;Ge&&(Ge.textContent=`${ve}`),ne&&(ne.textContent=`${C(Ye)} €`),$e&&($e.textContent=`${C(Z)} €`),He&&(He.textContent=`${C(Ke)} €`,He.className=Ke<0?"danger":Ke>0?"budget-under":""),pe&&(pe.textContent=`${qe}`),Je&&(Je.textContent=`${C(Me)} €`,Je.className=Me<0?"danger":Me>0?"budget-under":"")}async function xt(){await Fa(Le(),Xe()),Nn()}qt?.addEventListener("click",()=>{Nn()}),O?.addEventListener("click",async()=>{await xt()}),he?.addEventListener("change",()=>{dt()}),Be?.addEventListener("input",()=>{dt()}),Be?.addEventListener("keydown",async oe=>{if(oe.key==="Escape"){oe.preventDefault(),Nn();return}oe.key==="Enter"&&(oe.preventDefault(),await xt())}),R?.addEventListener("click",oe=>{oe.target===R&&Nn()}),window.setTimeout(()=>{Be?.focus(),Be?.select(),dt()},0)}function nn(o,l){let f=o;const d=l.min;if(d){const P=Number.parseFloat(d);if(!Number.isNaN(P)){const A=Math.round(P*100);f=Math.max(f,A)}}const p=l.max;if(p){const P=Number.parseFloat(p);if(!Number.isNaN(P)){const A=Math.round(P*100);f=Math.min(f,A)}}return f}function nt(o){if(o.disabled)return;const l=Ha();vt(),ut=o;const f=De(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${d}">
        <div class="amount-modal card">
          <h3>${d}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${C(f)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${C(f)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${C(f)} €</strong></div>
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
    `;const p=l.querySelector(".amount-modal-backdrop"),P=l.querySelector("#amount-modal-delta"),A=l.querySelector("#amount-modal-next-delta"),N=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),X=l.querySelector("#amount-modal-overwrite"),W=l.querySelector("#amount-modal-apply");function Z(){const ne=De(P?.value??"0");return nn(f+ne,o)}function R(){const ne=De(P?.value??"0");return nn(ne,o)}function he(){A&&(A.textContent=`${C(Z())} €`),N&&(N.textContent=`${C(R())} €`)}function Be(){const ne=ut;if(!ne){vt();return}const $e=Z();vt(),ne.value=mt($e),ne.dispatchEvent(new Event("change",{bubbles:!0}))}function Ge(){const ne=ut;if(!ne){vt();return}const $e=R();vt(),ne.value=mt($e),ne.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{vt()}),X?.addEventListener("click",()=>{Ge()}),W?.addEventListener("click",()=>{Be()}),P?.addEventListener("input",()=>{he()}),P?.addEventListener("keydown",ne=>{if(ne.key==="Escape"){ne.preventDefault(),vt();return}ne.key==="Enter"&&(ne.preventDefault(),Be())}),p?.addEventListener("click",ne=>{ne.target===p&&vt()}),window.setTimeout(()=>{P?.focus(),P?.select(),he()},0)}function de(o,l="success"){const f=Aa(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const p=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},p)}function cn(){return new Date().getMonth()+1}function Nt(){return new Date().getFullYear()}function Ja(o){const l=Nt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function un(){return new Date().toISOString().slice(0,10)}function Xa(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function Et(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Sn(){const o=localStorage.getItem(Ae);return o&&ds(o)?o:"light"}function la(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Ae,o)}function wr(){return localStorage.getItem(J)==="1"}function ee(o){localStorage.setItem(J,o?"1":"0")}function Qa(){const o=localStorage.getItem(me);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function xe(o){localStorage.setItem(me,JSON.stringify(o.slice(-200)))}function Ln(){const o=localStorage.getItem(se);if(!o)return null;const l=o.trim();return l||null}function kr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(Ce);if(!l)return o;try{const f=JSON.parse(l),d=p=>typeof p=="number"&&Number.isFinite(p)?p:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function dn(o){localStorage.setItem(Ce,JSON.stringify(o))}function Za(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function $r(o){const l=o.trim();l&&localStorage.setItem(se,l)}async function Sr(){Aa(),la(Sn()),h.hasUnexportedChanges=wr(),h.unexportedChangeLog=Qa(),h.persistentAuditLog=await Lr(),h.lastBackupFileName=Ln(),h.recurringBudgetDefaults=kr(),Ut(),Cr();const[o,l,f]=await Promise.all([aa(),Fr(),Ir()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Da(h.years),pn(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Ia(h.years),o.length>0&&(h.selectedYear=Ja(o),h.selectedMonth=cn()),re()}function Da(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const p=Number(d.weeklyShoppingWeekday);Number.isInteger(p)&&p>=0&&p<=6?d.weeklyShoppingWeekday=p:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(p=>{const P=l(p.incomeSource);if(!P){const{incomeSource:A,...N}=p;return N}return{...p,incomeSource:P}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((p,P)=>p+P.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((p,P)=>p+P.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function qn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function bt(o){return o==="fresh"||o==="salary"||!o}async function Ia(o){for(const l of o)await na(l)}function Wt(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function Ie(){const o=Wt();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function Kn(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function at(o){const l=o.days.reduce((N,L)=>N+L.foodCents,0),f=o.days.reduce((N,L)=>N+L.goingOutCents,0),d=o.fixedCosts.reduce((N,L)=>N+L.actualCents,0),p=o.variableCosts.reduce((N,L)=>N+L.amountCents,0)+o.variablePositions.reduce((N,L)=>N+L.actualCents,0),P=o.miscCosts.reduce((N,L)=>N+L.amountCents,0),A=l+f+d+p+P;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:P,totalCents:A}}function Lt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((A,N)=>A+N.plannedCents,0),p=o.variablePositions.reduce((A,N)=>A+N.budgetCents,0),P=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??p)+P}function En(o){return o.months.reduce((l,f)=>{const d=at(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function jn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:at(l)}))}function Rn(o){const l=o.months.reduce((A,N)=>A+(N.foodBudgetCents??0),0),f=o.months.reduce((A,N)=>A+(N.goingOutBudgetCents??0),0),d=o.months.reduce((A,N)=>A+(N.fixedBudgetCents??N.fixedCosts.reduce((L,X)=>L+X.plannedCents,0)),0),p=o.months.reduce((A,N)=>A+(N.variableBudgetCents??N.variablePositions.reduce((L,X)=>L+X.budgetCents,0)),0),P=o.months.reduce((A,N)=>A+(N.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:p,miscCents:P,totalCents:l+f+d+p+P}}function Bn(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,p)=>d+(bt(p.incomeSource)?p.amountCents:0),0),0)}function Gt(o,l){const f=o.months.slice().sort((d,p)=>d.month-p.month)[0];return f?l.get(fe(o.year,f.month))?.carriedFromPreviousCents??0:0}function ca(){const o=h.years.slice().sort((d,p)=>d.year-p.year).flatMap(d=>d.months.slice().sort((p,P)=>p.month-P.month).map(p=>({year:d.year,month:p}))),l=new Map;let f=0;return o.forEach(({year:d,month:p},P)=>{const A=p.carryoverOverrideCents,N=typeof A=="number",L=N?A:f,X=P>0||N,W=p.incomes.reduce((Be,Ge)=>Be+(bt(Ge.incomeSource)?Ge.amountCents:0),0),Z=Lt(p),R=W+L,he=R-Z;l.set(fe(d,p.month),{hasPreviousMonth:X,carriedFromPreviousCents:L,recordedIncomeCents:W,effectiveIncomeCents:R,plannedBudgetCents:Z,netCents:he}),f=he}),l}function ot(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function an(o){return`${o>0?"+":""}${C(o)}`}function H(o,l){const f=o-l,d=ot(l,o);return`${C(o)} <span class="eval-diff ${d}">(Δ ${an(f)})</span>`}function Ht(o,l){const f=o!==null,d=f?o-l:null,p=f?ot(l,o):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${f?`${C(o)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${C(l)} €</strong>
      </div>
      <div class="column-overview-row ${p}">
        <span>Diff</span>
        <strong>${d===null?"-":`${C(d)} €`}</strong>
      </div>
    </div>`}async function fn(o){if(await Ks(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=is(o,h.fixedTemplates,h.fixedTemplateVersion);Za(f),Na(f),await na(f),h.years=await aa(),hn(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=cn(),de(`Jahr ${o} wurde angelegt.`),re()}function hn(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,ee(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,p={id:Ot("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,p].slice(-200),xe(h.unexportedChangeLog);const P={id:Ot("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,P].slice().sort((A,N)=>A.timestampIso.localeCompare(N.timestampIso)),js(P).catch(A=>{console.error("Audit-Log konnte nicht gespeichert werden",A),de("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Y(o){const l=o.trim();l&&(h.lastBackupFileName=l,$r(l))}function ua(o){h.hasUnexportedChanges=!1,ee(!1),h.unexportedChangeLog=[],xe([]),h.showUnexportedChangeLogModal=!1,Y(o)}async function We(o){const l=Wt();l&&(await na(l),h.years=await aa(),hn(o))}async function yt(o){for(const l of h.years)await na(l);h.years=await aa(),hn(o)}function fe(o,l){return o*100+l}function Vn(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function er(o,l){const f=Vn(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(P=>P.month===f.month);!d||d.variablePositions.some(P=>P.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:Ot("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],Bt(d))}function Na(o){h.annualVariableFixedTemplates.forEach(l=>{er(l,o)})}function pn(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const p=d.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),P=d.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");p&&(d.variablePositions=d.variablePositions.filter(A=>A.autoAnnualTemplateId?l.has(A.autoAnnualTemplateId):!0),Bt(d)),P&&(d.fixedCosts=d.fixedCosts.filter(A=>!A.autoAnnualTemplateId),Ct(d))}),Na(f)})}function Ct(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function Bt(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function da(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function Ee(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",da());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function Ze(o,l){const f=fe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{if(fe(d.year,p.month)<f)return;p.fixedCosts.some(A=>A.templateId===o.id)||(p.fixedCosts.push({id:Ot("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Ct(p))})})}function Er(o,l,f){const d=fe(f.year,f.month);h.years.forEach(p=>{p.months.forEach(P=>{fe(p.year,P.month)<d||(P.fixedCosts=P.fixedCosts.map(A=>A.templateId!==l.id?A:{...A,name:l.name,plannedCents:l.plannedCents,actualCents:A.actualCents===o.plannedCents?l.plannedCents:A.actualCents}),Ct(P))})})}function fa(o,l){const f=fe(l.year,l.month);h.years.forEach(d=>{d.months.forEach(p=>{fe(d.year,p.month)<f||(p.fixedCosts=p.fixedCosts.filter(P=>P.templateId!==o),Ct(p))})})}async function ha(o,l){const f=o.trim();if(!f)return;const d=Ee();if(!d)return;const p=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const P=h.fixedTemplates.find(N=>N.id===h.editingFixedTemplateId);if(!P)return;const A={...P,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(N=>N.id===h.editingFixedTemplateId?A:N),Er(P,A,d)}else{const P={id:Ot("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,P],Ze(P,d)}h.fixedTemplateVersion=await Dr(h.fixedTemplates),h.editingFixedTemplateId=null,await yt(p?`Fixkosten-Vorlage aktualisiert: ${f} (${C(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${C(l)} €)`),de(p?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),re()}function pa(o){h.editingFixedTemplateId=o,re()}function Br(){h.editingFixedTemplateId=null,re()}async function rn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=Ee();if(!f)return;const d=h.fixedTemplates.find(p=>p.id===o);h.fixedTemplates=h.fixedTemplates.filter(p=>p.id!==o),fa(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Dr(h.fixedTemplates),await yt(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),de("Fixkosten-Vorlage wurde gelöscht."),re()}async function _n(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const p=Vn(l);if(!p){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const P={id:Ot("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,P],h.years.forEach(A=>{er(P,A)}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await yt(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${C(f)} €, jährlich in ${Se(p.month)})`),de("Variable Fixkosten-Vorlage wurde hinzugefügt."),re()}async function sn(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(p=>{p.variablePositions=p.variablePositions.filter(P=>P.autoAnnualTemplateId!==o),Bt(p),p.fixedCosts=p.fixedCosts.filter(P=>P.autoAnnualTemplateId!==o),Ct(p)})}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await yt(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),de("Variable Fixkosten-Vorlage wurde gelöscht."),re())}async function Yn(o,l,f){const d=Ie();d&&(d.days=d.days.map(p=>p.isoDate===o?{...p,[l]:f}:p),await We(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst auf ${C(f)} €`),re())}async function _r(o,l){const f=Ie();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,actualCents:l}:p),await We(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${C(l)} €`),re()}async function on(o,l){const f=Ie();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.map(p=>p.id===o?{...p,plannedCents:l}:p),Ct(f),await We(`Fixkosten-Budget angepasst: ${d.name} auf ${C(l)} €`),re())}async function tr(o,l){const f=Ie();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const p={id:Ot("fixed"),templateId:Ot("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[p,...f.fixedCosts],Ct(f),await We(`Fixkosten-Position hinzugefügt: ${d} (${C(l)} €)`),de("Fixkosten-Position wurde hinzugefügt."),re()}async function vn(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=Ie();if(!f)return;const d=f.fixedCosts.find(p=>p.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(p=>p.id!==o),Ct(f),await We(`Fixkosten-Position gelöscht: ${d.name}`),de("Fixkosten-Position wurde gelöscht."),re())}async function nr(o){await Mn("fixedBudgetCents",o,"Fixkosten")}async function La(o){await Mn("foodBudgetCents",o,"Essen")}async function Ne(o){await Mn("goingOutBudgetCents",o,"Ausgehen")}async function mn(o){await Mn("miscBudgetCents",o,"Sonstiges")}async function Jt(o){await Mn("variableBudgetCents",o,"Variable Kosten")}async function Mn(o,l,f){const d=Ie(),p=h.selectedYear;if(!d||!p||d[o]===l)return;if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const A=fe(p,h.selectedMonth);h.years.forEach(N=>{N.months.forEach(L=>{fe(N.year,L.month)<=A||(L[o]=l)})}),h.recurringBudgetDefaults[o]=l,dn(h.recurringBudgetDefaults),await yt(`Budget "${f}" auf ${C(l)} € gesetzt (inkl. zukünftiger Monate)`),de(`Budget "${f}" wurde für zukünftige Monate übernommen.`),re();return}await We(`Budget "${f}" auf ${C(l)} € gesetzt`),re()}async function gn(o){const l=Ie();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await We(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${C(o)} € gesetzt`),re())}async function zn(o,l,f){const d=Ie(),p=h.selectedYear;if(!d||!p)return;const P=o.trim();if(!P){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:Ot("varpos"),name:P,budgetCents:l,actualCents:0},...d.variablePositions],Bt(d),f){const A=fe(p,h.selectedMonth);h.years.forEach(N=>{N.months.forEach(L=>{fe(N.year,L.month)<=A||(L.variablePositions=[{id:Ot("varpos"),name:P,budgetCents:l,actualCents:0},...L.variablePositions],Bt(L))})}),await yt(`Variable Position hinzugefügt: ${P} (${C(l)} €) für zukünftige Monate`),de("Variable Position wurde für zukünftige Monate hinzugefügt."),re();return}await We(`Variable Position hinzugefügt: ${P} (${C(l)} €)`),de("Variable Position wurde hinzugefügt."),re()}async function qa(o,l){const f=Ie();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,actualCents:l}:p),await We(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${C(l)} €`),re()}async function Ka(o,l){const f=Ie();if(!f)return;const d=f.variablePositions.find(p=>p.id===o);f.variablePositions=f.variablePositions.map(p=>p.id===o?{...p,budgetCents:l}:p),Bt(f),await We(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"} auf ${C(l)} €`),re()}async function bn(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=Ie(),d=h.selectedYear;if(!f||!d)return;const p=f.variablePositions.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),N=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.variablePositions.some(W=>W.name===p.name&&W.budgetCents===p.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),Bt(f),N){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.variablePositions=X.variablePositions.filter(W=>!(W.name===p.name&&W.budgetCents===p.budgetCents)),Bt(X))})}),await yt(`Variable Position gelöscht: ${p.name} (inkl. zukünftiger Monate)`),de("Variable Position wurde auch in zukünftigen Monaten gelöscht."),re();return}await We(`Variable Position gelöscht: ${p.name}`),de("Variable Position wurde gelöscht."),re()}async function ar(o){const l=Ie(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(W=>W.id===o);if(!d)return;const p={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let P=h.years.find(W=>W.year===p.year);if(!P){const W=is(p.year,h.fixedTemplates,h.fixedTemplateVersion);Za(W),Na(W),await na(W),h.years=[...h.years,W].sort((Z,R)=>Z.year-R.year),P=W}const A=P.months.find(W=>W.month===p.month);if(!A)return;const N=A.variablePositions.some(W=>W.id===d.id||W.name===d.name&&W.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(W=>W.id!==o),Bt(l),!N){const Z=A.variablePositions.some(R=>R.id===d.id)?{...d,id:Ot("varpos")}:d;A.variablePositions=[Z,...A.variablePositions],Bt(A)}const L=`${Se(p.month)} ${p.year}`,X=`Variable Position verschoben: ${d.name} → ${L}`;if(p.year===f)await We(X);else{const W=Wt();if(!W)return;await na(W),await na(P),h.years=await aa(),Da(h.years),hn(X)}de(N?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),re()}async function Un(o,l,f){const d=Ie(),p=h.selectedYear;if(!d||!p)return;const P=o.trim();if(!P){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=os(P,l);if(d.miscCosts=[A,...d.miscCosts],f){const N=fe(p,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=N||(X.miscCosts=[os(P,l),...X.miscCosts])})}),await yt(`Sonstige Position hinzugefügt: ${P} (${C(l)} €) für zukünftige Monate`),de("Sonstige Position wurde für zukünftige Monate hinzugefügt."),re();return}await We(`Sonstige Position hinzugefügt: ${P} (${C(l)} €)`),de("Sonstige Position wurde hinzugefügt."),re()}async function rr(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=Ie(),d=h.selectedYear;if(!f||!d)return;const p=f.miscCosts.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),N=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.miscCosts.some(W=>W.description===p.description&&W.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),N){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.miscCosts=X.miscCosts.filter(W=>!(W.description===p.description&&W.amountCents===p.amountCents)))})}),await yt(`Sonstige Position gelöscht: ${p.description} (${C(p.amountCents)} €) inkl. zukünftiger Monate`),de("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),re();return}await We(`Sonstige Position gelöscht: ${p.description} (${C(p.amountCents)} €)`),de("Sonstige Position wurde gelöscht."),re()}async function ce(o,l,f,d){const p=Ie(),P=h.selectedYear;if(!p||!P)return;const A=o.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const N=ls(A,l,f);if(p.incomes=[N,...p.incomes],d){const L=fe(P,h.selectedMonth);h.years.forEach(X=>{X.months.forEach(W=>{fe(X.year,W.month)<=L||(W.incomes=[ls(A,l,f),...W.incomes])})}),await yt(`Einkommen hinzugefügt: ${A} (${C(l)} €, ${qn(f)}) für zukünftige Monate`),de("Einkommen wurde für zukünftige Monate hinzugefügt."),re();return}await We(`Einkommen hinzugefügt: ${A} (${C(l)} €, ${qn(f)})`),de("Einkommen wurde hinzugefügt."),re()}async function sr(o,l){const f=Ie();if(!f)return;const d=f.incomes.find(p=>p.id===o);d&&(f.incomes=f.incomes.map(p=>{if(p.id!==o)return p;if(!l){const{incomeSource:P,...A}=p;return A}return{...p,incomeSource:l}}),await We(`Einkommensart angepasst: ${d.description} → ${qn(l)}`),re())}async function ir(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=Ie(),d=h.selectedYear;if(!f||!d)return;const p=f.incomes.find(L=>L.id===o);if(!p)return;const P=fe(d,h.selectedMonth),N=h.years.some(L=>L.months.some(X=>fe(L.year,X.month)>P&&X.incomes.some(W=>W.description===p.description&&W.amountCents===p.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),N){h.years.forEach(L=>{L.months.forEach(X=>{fe(L.year,X.month)<=P||(X.incomes=X.incomes.filter(W=>!(W.description===p.description&&W.amountCents===p.amountCents)))})}),await yt(`Einkommen gelöscht: ${p.description} (${C(p.amountCents)} €) inkl. zukünftiger Monate`),de("Einkommen wurde auch in zukünftigen Monaten gelöscht."),re();return}await We(`Einkommen gelöscht: ${p.description} (${C(p.amountCents)} €)`),de("Einkommen wurde gelöscht."),re()}async function Wn(){const o=await Vs(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${un()}-${Xa()}.json`,p=document.createElement("a");p.href=f,p.download=d,p.click(),URL.revokeObjectURL(f),ua(d),re(),de("Backup wurde exportiert.")}async function Gn(o){const l=await o.text(),f=JSON.parse(l);await Ys(f);const[d,p,P]=await Promise.all([aa(),Fr(),Ir()]);h.years=d,h.annualVariableFixedTemplates=P.templates,h.annualVariableFixedTemplateVersion=P.version,Da(h.years),pn(h.years),h.fixedTemplates=p.templates,h.fixedTemplateVersion=p.version,await Ia(h.years),h.persistentAuditLog=await Lr(),h.selectedYear=Ja(d),h.selectedMonth=cn(),ua(o.name),de("Backup wurde importiert."),re()}function re(){const o=Wt(),l=Ie(),f=un(),d=l?at(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},p=o?En(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},P=o?jn(o):[],A=l?l.foodBudgetCents??0:0,N=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,E)=>r+E.plannedCents,0):0,X=l?l.variableBudgetCents??l.variablePositions.reduce((r,E)=>r+E.budgetCents,0):0,W=l?l.miscBudgetCents??0:0,Z=o?o.months.reduce((r,E)=>r+(E.foodBudgetCents??0),0):0,R=o?o.months.reduce((r,E)=>r+(E.goingOutBudgetCents??0),0):0,he=o?o.months.reduce((r,E)=>r+(E.fixedBudgetCents??E.fixedCosts.reduce((V,Q)=>V+Q.plannedCents,0)),0):0,Be=o?o.months.reduce((r,E)=>r+(E.variableBudgetCents??E.variablePositions.reduce((V,Q)=>V+Q.budgetCents,0)),0):0,Ge=o?o.months.reduce((r,E)=>r+(E.miscBudgetCents??0),0):0,ne=l?l.incomes.reduce((r,E)=>r+(bt(E.incomeSource)?E.amountCents:0),0):0,$e=l?l.incomes.reduce((r,E)=>r+(E.incomeSource==="salary"?E.amountCents:0),0):0,He=l?l.incomes.reduce((r,E)=>r+(E.incomeSource==="fresh"?E.amountCents:0),0):0,pe=ca(),Je=o?pe.get(fe(o.year,h.selectedMonth)):void 0,qt=o?o.months.slice().sort((r,E)=>r.month-E.month)[0]:void 0,O=Je?.carriedFromPreviousCents??0,Le=Je?.hasPreviousMonth??!1,Xe=Je?.effectiveIncomeCents??ne,dt=l?Lt(l):0,xt=Je?.netCents??ne-dt,oe=Xe-d.totalCents,wt=$e-d.totalCents,ve=d.totalCents>0?`${($e/d.totalCents*100).toFixed(1)} %`:"-",qe=O<0?"danger":O>0?"budget-under":"",Ye=xt<0?"danger":xt>0?"budget-under":"",Ke=oe<0?"danger":oe>0?"budget-under":"",Me=o?o.months.reduce((r,E)=>r+E.incomes.reduce((V,Q)=>V+(bt(Q.incomeSource)?Q.amountCents:0),0),0):0,et=o?o.months.reduce((r,E)=>r+E.incomes.reduce((V,Q)=>V+(Q.incomeSource==="salary"?Q.amountCents:0),0),0):0,yn=o?o.months.reduce((r,E)=>r+E.incomes.reduce((V,Q)=>V+(Q.incomeSource==="fresh"?Q.amountCents:0),0),0):0,Xt=o&&qt?pe.get(fe(o.year,qt.month))?.carriedFromPreviousCents??0:0,lt=Me+Xt,kt=lt-p.totalCents,Pn=et-p.totalCents,we=p.totalCents>0?`${(et/p.totalCents*100).toFixed(1)} %`:"-",ye=Xt<0?"danger":Xt>0?"budget-under":"",Pe=kt<0?"danger":kt>0?"budget-under":"",Oe=A+N+L+X+W,Qe=A+N,Qt=d.foodCents+d.goingOutCents,Kt=Qe-Qt,jt=ot(Qt,Qe),Ft=Z+R+he+Be+Ge,ct=Xe-Oe,_t=lt-Ft,Mt=Oe-d.totalCents,Hn=Ft-p.totalCents,_=r=>r<0?"danger":r>0?"budget-under":"",q=(r,E)=>E<=0?"muted":r>=E?"budget-under":"danger",rt=q($e,d.totalCents),Cn=q(et,p.totalCents),Te=(r,E)=>{if(E<=0)return"0%";const Q=Math.max(0,r)/E*100;return`${Math.min(100,Math.max(0,Q)).toFixed(1)}%`},ja=(r,E)=>{if(E<=0)return r>0?100:0;const V=Math.max(0,r)/E*100;return Math.max(0,V)},st=[{label:"Essen",budgetCents:A,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:N,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:X,actualCents:d.variableCents},{label:"Sonstige",budgetCents:W,actualCents:d.miscCents}];Math.max(1,...st.flatMap(r=>[r.budgetCents,r.actualCents]));const Tn=(r,E)=>E<=0?"bar-positive":r<=0||E>r?"bar-negative":"bar-positive",An=[{label:"Einkommen gesamt",valueCents:Xe,className:"bar-income"},{label:"Budget gesamt",valueCents:Oe,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:oe,className:oe<0?"bar-negative":"bar-positive"}],lr=Math.max(1,...An.map(r=>Math.abs(r.valueCents))),va=o?o.months.slice().sort((r,E)=>r.month-E.month).map(r=>{const E=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,Q=r.fixedBudgetCents??r.fixedCosts.reduce((zt,Ue)=>zt+Ue.plannedCents,0),ke=r.variableBudgetCents??r.variablePositions.reduce((zt,Ue)=>zt+Ue.budgetCents,0),ze=r.miscBudgetCents??0,Tt=E+V+Q+ke+ze;return{month:r.month,foodBudgetCents:E,goingOutBudgetCents:V,fixedBudgetCents:Q,variableBudgetCents:ke,miscBudgetCents:ze,totalBudgetCents:Tt}}):[],Dt=new Map(va.map(r=>[r.month,r])),Rt=r=>{if(r.length===0)return null;const E=Math.min(...r),V=Math.max(...r),Q=Math.round(r.reduce((ke,ze)=>ke+ze,0)/r.length);return{min:E,avg:Q,max:V}},Pt=o&&o.year===Nt()?P.filter(r=>r.month<=cn()):P,ma=Pt.map(r=>r.summary.foodCents),ln=Pt.map(r=>r.summary.goingOutCents),ga=Pt.map(r=>r.summary.fixedCents),ba=Pt.map(r=>r.summary.variableCents),Jn=Pt.map(r=>r.summary.miscCents),ya=Pt.map(r=>r.summary.totalCents),Ra=Pt.map(r=>o?pe.get(fe(o.year,r.month))?.plannedBudgetCents??0:0),Mr=Pt.map(r=>o?pe.get(fe(o.year,r.month))?.netCents??0:0),Xn=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce((E,V)=>E+(V.incomeSource==="salary"?V.amountCents:0),0)])),Qn=Pt.map(r=>Xn.get(r.month)??0),Zt={food:Rt(ma),goingOut:Rt(ln),fixed:Rt(ga),variable:Rt(ba),misc:Rt(Jn),total:Rt(ya),salary:Rt(Qn),budget:Rt(Ra),net:Rt(Mr)},Va=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Vt={food:ma.reduce((r,E)=>r+E,0),goingOut:ln.reduce((r,E)=>r+E,0),fixed:ga.reduce((r,E)=>r+E,0),variable:ba.reduce((r,E)=>r+E,0),misc:Jn.reduce((r,E)=>r+E,0),total:ya.reduce((r,E)=>r+E,0),salary:Qn.reduce((r,E)=>r+E,0),budget:Ra.reduce((r,E)=>r+E,0)},Pr=Va.map(({key:r,label:E})=>{const V=Zt.food?.[r]??null,Q=Zt.goingOut?.[r]??null,ke=Zt.fixed?.[r]??null,ze=Zt.variable?.[r]??null,Tt=Zt.misc?.[r]??null,zt=Zt.total?.[r]??null,Ue=Zt.salary?.[r]??null,kn=Zt.budget?.[r]??null,$n=Zt.net?.[r]??null,At=ta=>ta===null?"-":C(ta);return`<tr>
                  <td><strong>${E}</strong></td>
                  <td>${At(V)}</td>
                  <td>${At(Q)}</td>
                  <td>${At(ke)}</td>
                  <td>${At(ze)}</td>
                  <td>${At(Tt)}</td>
                  <td>${At(zt)}</td>
                  <td>${At(Ue)}</td>
                  <td>${At(kn)}</td>
                  <td>${At($n)}</td>
                </tr>`}).join(""),cr=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${C(Vt.food)}</td>
                  <td>${C(Vt.goingOut)}</td>
                  <td>${C(Vt.fixed)}</td>
                  <td>${C(Vt.variable)}</td>
                  <td>${C(Vt.misc)}</td>
                  <td>${C(Vt.total)}</td>
                  <td>${C(Vt.salary)}</td>
                  <td>${C(Vt.budget)}</td>
                </tr>`,ur=Math.max(1,...P.flatMap(r=>{const E=Dt.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,E??0]})),Ya=Math.max(1,...P.flatMap(r=>{const E=Dt.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,Q=(E?.foodBudgetCents??0)+(E?.goingOutBudgetCents??0);return[V,Q]})),za=Math.max(1,...P.flatMap(r=>{const E=Dt.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,E]})),dr=Math.max(1,...P.flatMap(r=>{const E=Dt.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,E]})),Ua=Math.max(1,...P.flatMap(r=>{const E=Dt.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,E]})),Ca=ot(d.fixedCents,L),fr=ot(d.foodCents,A),hr=ot(d.goingOutCents,N),pr=ot(d.variableCents,X),vr=ot(d.miscCents,W),On=r=>r===0?"-":C(r),xa=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${C(L)}</div>
        <div class="compact-cost-actual ${Ca}">${On(d.fixedCents)}</div>
      </div>`,en=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${C(X)}</div>
        <div class="compact-cost-actual ${pr}">${On(d.variableCents)}</div>
      </div>`,je=l?l.fixedCosts.length>0?l.fixedCosts.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${Et(r.name)}</div>
                  <div class="compact-cost-budget">${C(r.plannedCents)}</div>
                  <div class="compact-cost-actual ${ot(r.actualCents,r.plannedCents)}">${On(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,wa=l?l.variablePositions.length>0?l.variablePositions.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${Et(r.name)}${r.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${C(r.budgetCents)}</div>
                  <div class="compact-cost-actual ${ot(r.actualCents,r.budgetCents)}">${On(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Yt=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,Tr=h.hasUnexportedChanges,ka=h.unexportedChangeLog.slice().reverse(),Wa=h.persistentAuditLog.slice().sort((r,E)=>E.timestampIso.localeCompare(r.timestampIso)),xn=h.lastBackupFileName?Et(h.lastBackupFileName):"-",Ga={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},tt=h.years.slice().sort((r,E)=>r.year-E.year),It=tt.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??tt[tt.length-1]?.year??null,it=typeof It=="number"?tt.find(r=>r.year===It):void 0,e=it?it.months.slice().sort((r,E)=>r.month-E.month):[],t=it?En(it):Ga,n=it?Rn(it):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},a=it?Bn(it):0,s=it?Gt(it,pe):0,i=a+s,c=it?it.months.reduce((r,E)=>r+Lt(E),0):0,u=i-c,g=i-t.totalCents,S=[{label:"Essen",budgetCents:n.foodCents,actualCents:t.foodCents},{label:"Ausgehen",budgetCents:n.goingOutCents,actualCents:t.goingOutCents},{label:"Fixkosten",budgetCents:n.fixedCents,actualCents:t.fixedCents},{label:"Variable",budgetCents:n.variableCents,actualCents:t.variableCents},{label:"Sonstige",budgetCents:n.miscCents,actualCents:t.miscCents}],v=e.map(r=>{const E=it?pe.get(fe(it.year,r.month)):void 0,V=at(r),Q=r.incomes.reduce((ta,mr)=>ta+mr.amountCents,0),ke=E?.effectiveIncomeCents??Q,ze=E?.plannedBudgetCents??Lt(r),Tt=V.foodCents,zt=V.goingOutCents,Ue=Tt+zt,kn=V.totalCents,$n=ke-ze,At=ke-kn;return{month:r.month,foodCents:Tt,goingOutCents:zt,foodAndGoingOutCents:Ue,effectiveIncomeCents:ke,plannedBudgetCents:ze,actualCostCents:kn,plannedNetCents:$n,actualNetCents:At}}),m=Math.max(1,...v.map(r=>r.actualCostCents)),x=Math.max(1,...v.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),w=Math.max(1,...v.map(r=>r.foodAndGoingOutCents)),y=Math.max(1,...v.map(r=>r.foodCents)),b=Math.max(1,...v.map(r=>r.goingOutCents)),$=v.map((r,E,V)=>{const Q=E>0?V[E-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Se(r.month),monthShortLabel:Se(r.month).slice(0,3),deltaCents:r.plannedNetCents-Q}}),B=$[$.length-1]??null,k=Math.min(0,...$.map(r=>r.plannedNetCents)),T=Math.max(0,...$.map(r=>r.plannedNetCents)),F=Math.max(1,T-k),K=720,j=320,D=18,U=18,z=38,I=56,G=K-I-U,ue=j-D-z,be=r=>{if($.length<=1)return I+G/2;const E=r/($.length-1);return I+E*G},te=r=>D+(T-r)/F*ue,ae=$.map((r,E)=>{const V=be(E),Q=te(r.plannedNetCents);return{...r,x:V,y:Q,leftPercent:V/K*100,topPercent:Q/j*100}}),_e=ae.map((r,E)=>`${E===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),$t=ae.length>0?`${_e} L ${ae[ae.length-1]?.x.toFixed(1)} ${(D+ue).toFixed(1)} L ${ae[0]?.x.toFixed(1)} ${(D+ue).toFixed(1)} Z`:"",Fe=5,wn=Array.from({length:Fe},(r,E)=>{const V=E/(Fe-1),Q=T-V*F;return{valueCents:Math.round(Q/100)*100,y:te(Q)}}),$a=te(0),ms=$[0]?.plannedNetCents??0,Sa=($[$.length-1]?.plannedNetCents??0)-ms,gs=Sa<0?"trend-badge-negative":Sa>0?"trend-badge-positive":"trend-badge-neutral",Kr=Sa<0?"↘":Sa>0?"↗":"→",bs=Sa<0?"Abwärtstrend":Sa>0?"Aufwärtstrend":"Seitwärts",Zn=tt.reduce((r,E)=>{const V=Rn(E);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),ea=tt.reduce((r,E)=>{const V=En(E);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),ys=tt.reduce((r,E)=>r+Bn(E),0),Cs=tt[0]?Gt(tt[0],pe):0,Ar=ys+Cs,jr=Ar-Zn.totalCents,Rr=Ar-ea.totalCents,Vr=[{label:"Essen",budgetCents:Zn.foodCents,actualCents:ea.foodCents},{label:"Ausgehen",budgetCents:Zn.goingOutCents,actualCents:ea.goingOutCents},{label:"Fixkosten",budgetCents:Zn.fixedCents,actualCents:ea.fixedCents},{label:"Variable",budgetCents:Zn.variableCents,actualCents:ea.variableCents},{label:"Sonstige",budgetCents:Zn.miscCents,actualCents:ea.miscCents}],Yr=Math.max(1,...Vr.flatMap(r=>[r.budgetCents,r.actualCents])),Ea=tt.map(r=>{const E=En(r),V=Rn(r),Q=Bn(r),ke=r.months.reduce((zt,Ue)=>zt+Ue.incomes.reduce((kn,$n)=>kn+($n.incomeSource==="salary"?$n.amountCents:0),0),0),ze=Gt(r,pe),Tt=Q+ze;return{year:r.year,salaryIncomeCents:ke,budgetTotalCents:V.totalCents,actualTotalCents:E.totalCents,effectiveIncomeCents:Tt,plannedNetCents:Tt-V.totalCents,actualNetCents:Tt-E.totalCents}}),zr=Math.max(1,...Ea.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),xs=Math.max(1,...Ea.map(r=>r.actualTotalCents)),ws=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${tt.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${tt.map(r=>`<option value="${r.year}" ${r.year===It?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${it?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${C(i)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${C(c)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${C(t.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(u)}">${C(u)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(g)}">${C(g)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${Kr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${gs}">${Kr} ${bs}</span>
                    </div>
                  </header>
                  ${B?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Et(B.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${_(B.plannedNetCents)}" data-year-trend-active-net>${C(B.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${C(B.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${C(B.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${_(B.deltaCents)}" data-year-trend-active-delta>${B.deltaCents>=0?"+":""}${C(B.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${K} ${j}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${it?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${wn.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${I}" y1="${r.y.toFixed(1)}" x2="${K-U}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${I-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${C(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${I}" y1="${$a.toFixed(1)}" x2="${K-U}" y2="${$a.toFixed(1)}"></line>
                              ${$t?`<path class="year-trend-area" d="${$t}"></path>`:""}
                              ${_e?`<path class="year-trend-line" d="${_e}"></path>`:""}
                              ${ae.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${j-12}" text-anchor="middle">${Et(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${ae.map((r,E)=>`
                                    <button
                                      class="year-trend-point-hit ${E===ae.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${E===ae.length-1?"1":"0"}"
                                      data-month-label="${Et(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Et(r.monthLabel)}: Kalkulierter Saldo ${C(r.plannedNetCents)}, Einkommen ${C(r.effectiveIncomeCents)}, Ausgaben ${C(r.actualCostCents)}"
                                      aria-pressed="${E===ae.length-1?"true":"false"}"
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
                    ${S.map(r=>{const E=ja(r.actualCents,r.budgetCents),V=Math.min(100,E),Q=`${E.toFixed(0)}%`,ke=r.budgetCents-r.actualCents,ze=ke<0?"danger":ke>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Tn(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${C(r.actualCents)} von ${C(r.budgetCents)}">
                              <span class="circle-chart-value">${Q}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${C(r.budgetCents)} / I ${C(r.actualCents)}</div>
                            <div class="circle-chart-meta ${ze}">${ke>=0?"+":""}${C(ke)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(v.length,1)}, minmax(0, 1fr));">
                    ${v.map(r=>{const E=Te(r.actualCostCents,m);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${C(r.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                    ${v.map(r=>{const E=Te(Math.abs(r.plannedNetCents),x),V=Te(Math.abs(r.actualNetCents),x),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",ke=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Se(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${C(r.plannedNetCents)} | Ist-Saldo: ${C(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${E}; opacity: 0.35;"></div>
                              <div class="bar ${ke}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${C(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${C(r.actualNetCents)}</span>
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
                  ${v.map(r=>`<tr>
                        <td>${Se(r.month)}</td>
                        <td>${C(r.effectiveIncomeCents)}</td>
                        <td>${C(r.plannedBudgetCents)}</td>
                        <td>${C(r.actualCostCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${C(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${C(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${tt.map(r=>`<option value="${r.year}" ${r.year===It?"selected":""}>${r.year}</option>`).join("")}
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
                    ${v.map(r=>{const E=Te(r.foodAndGoingOutCents,w);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${C(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(v.length,1)}, minmax(0, 1fr));">
                    ${v.map(r=>{const E=Te(r.foodCents,y);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${C(r.foodCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(v.length,1)}, minmax(0, 1fr));">
                    ${v.map(r=>{const E=Te(r.goingOutCents,b);return`
                          <div class="spark-bar" title="${Se(r.month)}: ${C(r.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
                            <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${C(Ar)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${C(Zn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${C(ea.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${_(jr)}">${C(jr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${_(Rr)}">${C(Rr)}</div><div class="eval-value"></div></div>
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
                    ${Vr.map(r=>{const E=Te(r.budgetCents,Yr),V=Te(r.actualCents,Yr),Q=Tn(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${C(r.budgetCents)} | Ist: ${C(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${E}"></div>
                              <div class="bar-marker" style="left:${E}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${Q}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${C(r.budgetCents)}</span>
                              <span class="muted">I ${C(r.actualCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Ea.length,1)}, minmax(0, 1fr));">
                    ${Ea.map(r=>{const E=Te(r.actualTotalCents,xs);return`
                          <div class="spark-bar" title="${r.year}: ${C(r.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${E}"></div>
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
                    ${Ea.map(r=>{const E=Te(Math.abs(r.plannedNetCents),zr),V=Te(Math.abs(r.actualNetCents),zr),Q=r.plannedNetCents<0?"bar-negative":"bar-positive",ke=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${C(r.plannedNetCents)} | Ist-Saldo: ${C(r.actualNetCents)}">
                              <div class="bar ${Q}" style="width:${E}; opacity: 0.35;"></div>
                              <div class="bar ${ke}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${_(r.plannedNetCents)}">B ${C(r.plannedNetCents)}</span>
                              <span class="${_(r.actualNetCents)}">I ${C(r.actualNetCents)}</span>
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
                  ${Ea.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${C(r.salaryIncomeCents)}</td>
                        <td>${C(r.effectiveIncomeCents)}</td>
                        <td>${C(r.budgetTotalCents)}</td>
                        <td>${C(r.actualTotalCents)}</td>
                        <td class="${_(r.plannedNetCents)}">${C(r.plannedNetCents)}</td>
                        <td class="${_(r.actualNetCents)}">${C(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `}
      </div>
    `,ks=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,$s=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${Yt?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${Yt?mt(Yt.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${Yt?"Änderung speichern":"Vorlage speichern"}</button>
          ${Yt?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
        </div>
        <table>
          <thead>
            <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
          </thead>
          <tbody>
            ${h.fixedTemplates.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td>${C(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-edit-fixed-template="${r.id}">Bearbeiten</button></td>
                    <td><button class="btn btn-quiet" data-remove-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`).join("")}
          </tbody>
        </table>
      </div>
    `,Ur=h.annualVariableFixedTemplates.reduce((r,E)=>r+E.plannedCents,0),Ss=Math.round(Ur/12),Es=`
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
                <div class="eval-value budget-under">${C(Ur)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${C(Ss)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const E=Vn(r.dueDateIso),V=E?Se(E.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${C(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Wr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",Bs=h.topModal==="years"?ks:h.topModal==="fixed"?$s:h.topModal==="variable-fixed"?Es:h.topModal==="dashboard"?ws:"";M.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${Tr?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${ps.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${Us(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Wr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Wr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Bs}
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
                  ${ka.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${ka.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Et(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${Wa.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${Wa.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Et(r.message)}</span></li>`).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${o?`${Se(h.selectedMonth)} ${o.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(r,E)=>E+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Se(r)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${C(ne)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${C($e)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${C(He)}</strong>
              </div>
              <div class="compact-income-row ${qe}">
                <span>Übernahme aus Vormonat</span>
                <strong>${Le?C(O):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${C(Xe)}</strong>
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
                  ${je}
                  ${xa}
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
                  ${wa}
                  ${en}
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
                    <div class="compact-cost-budget">${C(Qe)}</div>
                    <div class="compact-cost-actual ${jt}">${On(Qt)}</div>
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
                    <div class="compact-cost-budget">${C(W)}</div>
                    <div class="compact-cost-actual ${vr}">${On(d.miscCents)}</div>
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
                  ${st.map(r=>`
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${r.label}"
                            data-budget-cents="${r.budgetCents}"
                            data-actual-cents="${r.actualCents}"
                            role="img"
                            aria-label="${r.label}: Budget ${C(r.budgetCents)} €, Ist ${C(r.actualCents)} €"
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
                  ${An.map(r=>{const E=Te(Math.abs(r.valueCents),lr),V=r.valueCents>=0?"+":"",Q=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${C(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${E}"></div>
                          </div>
                          <div class="bar-meta"><span class="${Q}">${V}${C(r.valueCents)}</span></div>
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
                      ${P.map(r=>{const E=Dt.get(r.month)?.totalBudgetCents??0,V=Te(E,ur),Q=Te(r.summary.totalCents,ur);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(r.summary.totalCents)} € | Budget ${C(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${C(r.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const E=Dt.get(r.month),V=(E?.foodBudgetCents??0)+(E?.goingOutBudgetCents??0),Q=r.summary.foodCents+r.summary.goingOutCents,ke=Te(V,Ya),ze=Te(Q,Ya);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(Q)} € | Budget ${C(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${ke}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${ze}"><span class="spark-bar-fill-value">${C(Q)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const E=Dt.get(r.month)?.fixedBudgetCents??0,V=Te(E,za),Q=Te(r.summary.fixedCents,za);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(r.summary.fixedCents)} € | Budget ${C(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${C(r.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const E=Dt.get(r.month)?.variableBudgetCents??0,V=Te(E,dr),Q=Te(r.summary.variableCents,dr);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(r.summary.variableCents)} € | Budget ${C(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${C(r.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                      ${P.map(r=>{const E=Dt.get(r.month)?.miscBudgetCents??0,V=Te(E,Ua),Q=Te(r.summary.miscCents,Ua);return`
                            <div class="spark-bar" title="${Se(r.month)}: Ist ${C(r.summary.miscCents)} € | Budget ${C(E)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Q}"><span class="spark-bar-fill-value">${C(r.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Se(r.month).slice(0,3)}</div>
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
                    <div class="eval-value">${C(ne)}</div>
                    <div class="eval-value">${C(Me)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${C($e)}</div>
                    <div class="eval-value">${C(et)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${C(He)}</div>
                    <div class="eval-value">${C(yn)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${qe}">${Le?C(O):"-"}</div>
                    <div class="eval-value ${ye}">${o?C(Xt):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${C(Xe)}</div>
                    <div class="eval-value">${C(lt)}</div>
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
                    <div class="eval-value">${C(Z)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${H(N,d.goingOutCents)}</div>
                    <div class="eval-value">${C(R)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${H(L,d.fixedCents)}</div>
                    <div class="eval-value">${C(he)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${H(X,d.variableCents)}</div>
                    <div class="eval-value">${C(Be)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${H(W,d.miscCents)}</div>
                    <div class="eval-value">${C(Ge)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${H(Oe,d.totalCents)}</div>
                    <div class="eval-value">${C(Ft)}</div>
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
                    <div class="eval-value ${fr}">${C(d.foodCents)}</div>
                    <div class="eval-value">${C(p.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${hr}">${C(d.goingOutCents)}</div>
                    <div class="eval-value">${C(p.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Ca}">${C(d.fixedCents)}</div>
                    <div class="eval-value">${C(p.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${pr}">${C(d.variableCents)}</div>
                    <div class="eval-value">${C(p.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${vr}">${C(d.miscCents)}</div>
                    <div class="eval-value">${C(p.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${C(d.totalCents)}</div>
                    <div class="eval-value">${C(p.totalCents)}</div>
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
                    <div class="eval-value ${_(Mt)}">${C(Mt)}</div>
                    <div class="eval-value ${_(Hn)}">${C(Hn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${_(ct)}">${C(ct)}</div>
                    <div class="eval-value ${_(_t)}">${C(_t)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Ke}">${C(oe)}</div>
                    <div class="eval-value ${Pe}">${C(kt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${_(wt)}">${C(wt)}</div>
                    <div class="eval-value ${_(Pn)}">${C(Pn)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${rt}">${ve}</div>
                    <div class="eval-value ${Cn}">${we}</div>
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
                ${P.map((r,E,V)=>{const Q=o?pe.get(fe(o.year,r.month)):void 0,ke=Q?.plannedBudgetCents??0,ze=Q?.netCents??0,Tt=Xn.get(r.month)??0,zt=ze<0?"danger":ze>0?"budget-under":"",Ue=V[E-1],kn=Ue?.summary.foodCents??null,$n=Ue?.summary.goingOutCents??null,At=Ue?.summary.fixedCents??null,ta=Ue?.summary.variableCents??null,mr=Ue?.summary.miscCents??null,Gr=Ue?.summary.totalCents??null,Hr=Ue!==void 0?Xn.get(Ue.month)??0:null,Jr=o&&Ue?pe.get(fe(o.year,Ue.month))?.plannedBudgetCents??0:null,Xr=kn===null?null:r.summary.foodCents-kn,Qr=$n===null?null:r.summary.goingOutCents-$n,Zr=At===null?null:r.summary.fixedCents-At,es=ta===null?null:r.summary.variableCents-ta,ts=mr===null?null:r.summary.miscCents-mr,ns=Gr===null?null:r.summary.totalCents-Gr,as=Hr===null?null:Tt-Hr,rs=Jr===null?null:ke-Jr,Ba=St=>St===null?"muted":St>0?"danger":St<0?"budget-under":"muted",_s=St=>St===null?"muted":St>0?"budget-under":St<0?"danger":"muted",Ms=St=>St===null?"muted":St>0?"danger":St<0?"budget-under":"muted",Fn=St=>St===null?"(Δ -)":`(Δ ${St>0?"+":""}${C(St)})`,ss=o&&Ue?pe.get(fe(o.year,Ue.month))?.netCents??0:null,_a=ss===null?null:ze-ss,Ps=_a===null?"(Δ -)":`(Δ ${_a>0?"+":""}${C(_a)})`,Ts=_a===null?"muted":_a<0?"danger":_a>0?"budget-under":"muted";return`<tr>
                  <td>${Se(r.month)}</td>
                  <td>${C(r.summary.foodCents)} <span class="${Ba(Xr)}">${Fn(Xr)}</span></td>
                  <td>${C(r.summary.goingOutCents)} <span class="${Ba(Qr)}">${Fn(Qr)}</span></td>
                  <td>${C(r.summary.fixedCents)} <span class="${Ba(Zr)}">${Fn(Zr)}</span></td>
                  <td>${C(r.summary.variableCents)} <span class="${Ba(es)}">${Fn(es)}</span></td>
                  <td>${C(r.summary.miscCents)} <span class="${Ba(ts)}">${Fn(ts)}</span></td>
                  <td>${C(r.summary.totalCents)} <span class="${Ba(ns)}">${Fn(ns)}</span></td>
                  <td>${C(Tt)} <span class="${_s(as)}">${Fn(as)}</span></td>
                  <td>${C(ke)} <span class="${Ms(rs)}">${Fn(rs)}</span></td>
                  <td class="${zt}">${C(ze)} <span class="${Ts}">${Ps}</span></td>
                </tr>`}).join("")}
                ${Pr}
                ${cr}
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
                    <td class="${qe}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${mt(O)}" />
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
                    <td>${C(r.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${r.id}">Löschen</button></td>
                  </tr>`).join("")}`:""}
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${C(ne)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${C($e)} €</strong>
                </div>
                <div class="column-overview-row ${qe}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${C(O)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${C(Xe)} €</strong>
                </div>
                <div class="column-overview-row ${Ye}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${C(xt)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${Ht(A,d.foodCents)}
                ${Ht(N,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${C(Qe)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${C(Qt)} €</strong>
                  </div>
                  <div class="column-overview-row ${jt}">
                    <span>Diff</span>
                    <strong>${C(Kt)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${mt(A)}" ${l?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${mt(N)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(r=>{const E=r.foodCents>0,V=r.goingOutCents>0,Q=`${r.isoDate===f?"today-row":""} ${E||V?"day-has-entry":""}`.trim(),ke=`amount-input ${E?"day-input-has-value":""}`.trim(),ze=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${Q}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${ke}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${mt(r.foodCents)}" /></td>
                      <td><input class="${ze}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${mt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Ht(L,d.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${mt(L)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${mt(r.plannedCents)}" /></td>
                    <td class="${ot(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${mt(r.actualCents)}" /></td>
                    <td class="${ot(r.actualCents,r.plannedCents)}">${C(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Ht(X,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${mt(X)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${mt(r.budgetCents)}" /></td>
                    <td class="${ot(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${mt(r.actualCents)}" /></td>
                    <td class="${ot(r.actualCents,r.budgetCents)}">${C(r.actualCents-r.budgetCents)}</td>
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
              ${Ht(W,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${mt(W)}" ${l?"":"disabled"} />
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
                    <td>${C(r.amountCents)}</td>
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
          <p class="muted">Letztes verwendetes Backup: ${xn}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),or(),tn(),ht(),Ta()}function or(){const o=M.querySelector("#theme-select"),l=M.querySelector("#open-years-modal"),f=M.querySelector("#open-fixed-modal"),d=M.querySelector("#open-variable-fixed-modal"),p=M.querySelector("#open-dashboard-modal"),P=M.querySelector("#panel-modal-close"),A=M.querySelector("#panel-modal-backdrop"),N=M.querySelector("#open-unexported-change-log"),L=M.querySelector("#open-persistent-audit-log"),X=M.querySelector("#unexported-change-log-close"),W=M.querySelector("#unexported-change-log-backup"),Z=M.querySelector("#unexported-change-log-backdrop"),R=M.querySelector("#persistent-audit-log-close"),he=M.querySelector("#persistent-audit-log-backdrop"),Be=M.querySelector("#new-year"),Ge=M.querySelector("#create-year"),ne=M.querySelector("#year-select"),$e=M.querySelector("#month-select");o?.addEventListener("change",()=>{const _=o.value;ds(_)&&la(_)}),l?.addEventListener("click",()=>{ra("years")}),f?.addEventListener("click",()=>{ra("fixed")}),d?.addEventListener("click",()=>{ra("variable-fixed")}),p?.addEventListener("click",()=>{ra("dashboard")}),N?.addEventListener("click",()=>{sa()}),L?.addEventListener("click",()=>{Dn()}),X?.addEventListener("click",()=>{ia()}),W?.addEventListener("click",async()=>{try{await Wn()}catch(_){console.error("Backup-Export fehlgeschlagen",_),de("Backup konnte nicht exportiert werden.","error")}}),Z?.addEventListener("click",_=>{_.target===Z&&ia()}),R?.addEventListener("click",()=>{oa()}),he?.addEventListener("click",_=>{_.target===he&&oa()}),M.querySelectorAll("[data-dashboard-tab]").forEach(_=>{_.addEventListener("click",()=>{const q=_.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(h.dashboardTab=q,re())})});const He=M.querySelector("#dashboard-year-select");He?.addEventListener("change",()=>{const _=Number.parseInt(He.value,10);Number.isInteger(_)&&(h.dashboardYear=_,re())}),P?.addEventListener("click",()=>{Pa()}),A?.addEventListener("click",_=>{_.target===A&&Pa()}),h.topModal&&window.setTimeout(()=>{P?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{X?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{R?.focus()},0),Ge?.addEventListener("click",async()=>{const _=Number.parseInt(Be?.value??"",10);if(!Number.isInteger(_)){alert("Bitte gültiges Jahr eingeben.");return}await fn(_)}),ne?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(ne.value,10),h.selectedMonth=cn(),re()}),$e?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt($e.value,10),re()});const pe=M.querySelector("#fixed-template-name"),Je=M.querySelector("#fixed-template-amount"),qt=M.querySelector("#add-fixed-template"),O=M.querySelector("#cancel-fixed-template-edit"),Le=M.querySelector("#annual-variable-fixed-name"),Xe=M.querySelector("#annual-variable-fixed-date"),dt=M.querySelector("#annual-variable-fixed-amount"),xt=M.querySelector("#add-annual-variable-fixed-template");qt?.addEventListener("click",async()=>{const _=pe?.value??"",q=De(Je?.value??"0");await ha(_,q),pe&&(pe.value=""),Je&&(Je.value="")}),O?.addEventListener("click",()=>{Br()}),xt?.addEventListener("click",async()=>{const _=Le?.value??"",q=Xe?.value??"",rt=De(dt?.value??"0");await _n(_,q,rt),Le&&(Le.value=""),Xe&&(Xe.value=""),dt&&(dt.value="")}),M.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeAnnualVariableFixedTemplate;q&&await sn(q)})}),M.querySelectorAll("[data-edit-fixed-template]").forEach(_=>{_.addEventListener("click",()=>{const q=_.dataset.editFixedTemplate;q&&pa(q)})}),M.querySelectorAll("[data-remove-fixed-template]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeFixedTemplate;q&&await rn(q)})}),M.querySelectorAll("[data-day-food]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),nt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.dayFood;q&&await Yn(q,"foodCents",De(_.value))})}),M.querySelectorAll("[data-day-going]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),nt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.dayGoing;q&&await Yn(q,"goingOutCents",De(_.value))})}),M.querySelectorAll("[data-fixed-actual]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),nt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.fixedActual;q&&await _r(q,De(_.value))})}),M.querySelectorAll("[data-fixed-planned]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),nt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.fixedPlanned;q&&await on(q,De(_.value))})});const oe=M.querySelector("#fixed-budget");oe?.addEventListener("click",_=>{_.preventDefault(),oe.blur(),nt(oe)}),oe?.addEventListener("change",async()=>{await nr(De(oe.value))});const wt=M.querySelector("#food-budget");wt?.addEventListener("click",_=>{_.preventDefault(),wt.blur(),nt(wt)}),wt?.addEventListener("change",async()=>{await La(De(wt.value))});const ve=M.querySelector("#going-out-budget");ve?.addEventListener("click",_=>{_.preventDefault(),ve.blur(),nt(ve)}),ve?.addEventListener("change",async()=>{await Ne(De(ve.value))}),M.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{xr()});const Ye=M.querySelector("#misc-budget");Ye?.addEventListener("click",_=>{_.preventDefault(),Ye.blur(),nt(Ye)}),Ye?.addEventListener("change",async()=>{await mn(De(Ye.value))});const Ke=M.querySelector("#variable-budget");Ke?.addEventListener("click",_=>{_.preventDefault(),Ke.blur(),nt(Ke)}),Ke?.addEventListener("change",async()=>{await Jt(De(Ke.value))});const Me=M.querySelector("#variable-position-name"),et=M.querySelector("#variable-position-budget"),yn=M.querySelector("#add-variable-position"),Xt=M.querySelector("#add-variable-position-recurring"),lt=M.querySelector("#misc-description"),kt=M.querySelector("#misc-amount"),Pn=M.querySelector("#add-misc"),we=M.querySelector("#add-misc-recurring"),ye=M.querySelector("#income-description"),Pe=M.querySelector("#income-source"),Oe=M.querySelector("#income-amount"),Qe=M.querySelector("#add-income"),Qt=M.querySelector("#add-income-recurring"),Kt=M.querySelector("#fixed-cost-name"),jt=M.querySelector("#fixed-cost-budget"),Ft=M.querySelector("#add-fixed-cost"),ct=M.querySelector("#carryover-override");ct?.addEventListener("click",_=>{_.preventDefault(),ct.blur(),nt(ct)}),ct?.addEventListener("change",async()=>{const _=ct.value;if(!_.trim()){await gn(null);return}await gn(De(_))}),Ft?.addEventListener("click",async()=>{const _=De(jt?.value??"0");await tr(Kt?.value??"",_),Kt&&(Kt.value=""),jt&&(jt.value="")}),yn?.addEventListener("click",async()=>{const _=De(et?.value??"0");await zn(Me?.value??"",_,!1),Me&&(Me.value=""),et&&(et.value="")}),Xt?.addEventListener("click",async()=>{const _=De(et?.value??"0");await zn(Me?.value??"",_,!0),Me&&(Me.value=""),et&&(et.value="")}),Pn?.addEventListener("click",async()=>{const _=De(kt?.value??"0");await Un(lt?.value??"",_,!1),lt&&(lt.value=""),kt&&(kt.value="")}),we?.addEventListener("click",async()=>{const _=De(kt?.value??"0");await Un(lt?.value??"",_,!0),lt&&(lt.value=""),kt&&(kt.value="")}),Qe?.addEventListener("click",async()=>{const _=De(Oe?.value??"0"),q=Pe?.value,rt=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ce(ye?.value??"",_,rt,!1),ye&&(ye.value=""),Oe&&(Oe.value=""),Pe&&(Pe.value="salary")}),Qt?.addEventListener("click",async()=>{const _=De(Oe?.value??"0"),q=Pe?.value,rt=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await ce(ye?.value??"",_,rt,!0),ye&&(ye.value=""),Oe&&(Oe.value=""),Pe&&(Pe.value="salary")}),M.querySelectorAll("[data-income-source]").forEach(_=>{_.addEventListener("change",async()=>{const q=_.dataset.incomeSource;if(!q)return;const rt=_.value;await sr(q,rt==="balance"||rt==="fresh"||rt==="salary"?rt:void 0)})}),M.querySelectorAll("[data-variable-position-budget]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),nt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.variablePositionBudget;q&&await Ka(q,De(_.value))})}),M.querySelectorAll("[data-variable-position-actual]").forEach(_=>{_.addEventListener("click",q=>{q.preventDefault(),_.blur(),nt(_)}),_.addEventListener("change",async()=>{const q=_.dataset.variablePositionActual;q&&await qa(q,De(_.value))})}),M.querySelectorAll("[data-remove-variable-position]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeVariablePosition;q&&await bn(q)})}),M.querySelectorAll("[data-move-variable-position-next]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.moveVariablePositionNext;q&&await ar(q)})}),M.querySelectorAll("[data-remove-fixed]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeFixed;q&&await vn(q)})}),M.querySelectorAll("[data-remove-income]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeIncome;q&&await ir(q)})}),M.querySelectorAll("[data-remove-misc]").forEach(_=>{_.addEventListener("click",async()=>{const q=_.dataset.removeMisc;q&&await rr(q)})});const _t=M.querySelector("#backup-export"),Mt=M.querySelector("#backup-import");M.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),_t?.addEventListener("click",async()=>{await Wn()}),Mt?.addEventListener("change",async()=>{const _=Mt.files?.[0];if(_){try{await Gn(_)}catch(q){console.error("Backup-Import fehlgeschlagen",q),de("Backup konnte nicht importiert werden.","error")}Mt.value=""}})}return{init:Sr}}const Gs="modulepreload",Hs=function(M){return"/habu26/"+M},hs={},Js=function(h,Ae,J){let me=Promise.resolve();if(Ae&&Ae.length>0){let ut=function(Ve){return Promise.all(Ve.map(le=>Promise.resolve(le).then(gt=>({status:"fulfilled",value:gt}),gt=>({status:"rejected",reason:gt}))))};var Ce=ut;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),ge=ie?.nonce||ie?.getAttribute("nonce");me=ut(Ae.map(Ve=>{if(Ve=Hs(Ve),Ve in hs)return;hs[Ve]=!0;const le=Ve.endsWith(".css"),gt=le?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ve}"]${gt}`))return;const ft=document.createElement("link");if(ft.rel=le?"stylesheet":Gs,le||(ft.as="script"),ft.crossOrigin="",ft.href=Ve,ge&&ft.setAttribute("nonce",ge),document.head.appendChild(ft),le)return new Promise((ht,tn)=>{ft.addEventListener("load",ht),ft.addEventListener("error",()=>tn(new Error(`Unable to preload CSS for ${Ve}`)))})}))}function se(ie){const ge=new Event("vite:preloadError",{cancelable:!0});if(ge.payload=ie,window.dispatchEvent(ge),!ge.defaultPrevented)throw ie}return me.then(ie=>{for(const ge of ie||[])ge.status==="rejected"&&se(ge.reason);return h().catch(se)})};function Xs(M={}){const{immediate:h=!1,onNeedRefresh:Ae,onOfflineReady:J,onRegistered:me,onRegisteredSW:se,onRegisterError:Ce}=M;let ie,ge;const ut=async(le=!0)=>{await ge};async function Ve(){if("serviceWorker"in navigator){if(ie=await Js(async()=>{const{Workbox:le}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:le}},[]).then(({Workbox:le})=>new le("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(le=>{Ce?.(le)}),!ie)return;ie.addEventListener("activated",le=>{(le.isUpdate||le.isExternal)&&window.location.reload()}),ie.addEventListener("installed",le=>{le.isUpdate||J?.()}),ie.register({immediate:h}).then(le=>{se?se("/habu26/sw.js",le):me?.(le)}).catch(le=>{Ce?.(le)})}}return ge=Ve(),ut}function Qs(){Xs({immediate:!0})}const vs=document.getElementById("app");if(!vs)throw new Error("App-Container nicht gefunden.");Ws(vs).init();Qs();
