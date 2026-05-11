(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const ye of document.querySelectorAll('link[rel="modulepreload"]'))G(ye);new MutationObserver(ye=>{for(const ae of ye)if(ae.type==="childList")for(const ke of ae.addedNodes)ke.tagName==="LINK"&&ke.rel==="modulepreload"&&G(ke)}).observe(document,{childList:!0,subtree:!0});function Fe(ye){const ae={};return ye.integrity&&(ae.integrity=ye.integrity),ye.referrerPolicy&&(ae.referrerPolicy=ye.referrerPolicy),ye.crossOrigin==="use-credentials"?ae.credentials="include":ye.crossOrigin==="anonymous"?ae.credentials="omit":ae.credentials="same-origin",ae}function G(ye){if(ye.ep)return;ye.ep=!0;const ae=Fe(ye);fetch(ye.href,ae)}})();const Ls=[1,2,3,4,5,6,7,8,9,10,11,12];function qr(){return new Date().toISOString()}function At(P){const h=Math.random().toString(36).slice(2,10);return`${P}_${Date.now()}_${h}`}function qs(P,h){const Fe=new Date(P,h,0).getDate(),G=[];for(let ye=1;ye<=Fe;ye+=1){const ae=new Date(Date.UTC(P,h-1,ye));G.push({isoDate:ae.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return G}function Ks(P){return P.map(h=>({id:At("fixed"),templateId:h.id,name:h.name,plannedCents:h.plannedCents,actualCents:0}))}function cs(P,h,Fe){const G=h.reduce((ae,ke)=>ae+ke.plannedCents,0),ye=Ls.map(ae=>({month:ae,days:qs(P,ae),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:Ks(h),fixedBudgetCents:G,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:P,createdAt:qr(),templateVersion:Fe,months:ye}}function us(P,h){return{id:At("expense"),description:P,amountCents:h,createdAt:qr()}}function ds(P,h,Fe){const G={id:At("income"),description:P,amountCents:h,createdAt:qr()};return Fe?{...G,incomeSource:Fe}:G}var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rs(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var mr={exports:{}},Vs=mr.exports,fs;function Ys(){return fs||(fs=1,(function(P,h){((Fe,G)=>{P.exports=G()})(Vs,function(){var Fe=function(e,t){return(Fe=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,a){n.__proto__=a}:function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}))(e,t)},G=function(){return(G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function ye(e,t,n){for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||((a=a||Array.prototype.slice.call(t,0,s))[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))}var ae=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:js,ke=Object.keys,ie=Array.isArray;function Ce(e,t){return typeof t=="object"&&ke(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||ae.Promise||(ae.Promise=Promise);var ft=Object.getPrototypeOf,He={}.hasOwnProperty;function oe(e,t){return He.call(e,t)}function kt(e,t){typeof t=="function"&&(t=t(ft(e))),(typeof Reflect>"u"?ke:Reflect.ownKeys)(t).forEach(function(n){mt(e,n,t[n])})}var vt=Object.defineProperty;function mt(e,t,n,a){vt(e,t,Ce(n&&oe(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},a))}function tn(e){return{from:function(t){return e.prototype=Object.create(t.prototype),mt(e.prototype,"constructor",e),{extend:kt.bind(null,e.prototype)}}}}var Qn=Object.getOwnPropertyDescriptor,_a=[].slice;function Zn(e,t,n){return _a.call(e,t,n)}function ea(e,t){return t(e)}function On(e){if(!e)throw new Error("Assertion Failed")}function ta(e){ae.setImmediate?setImmediate(e):setTimeout(e,0)}function zt(e,t){if(typeof t=="string"&&oe(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],a=0,s=t.length;a<s;++a){var i=zt(e,t[a]);n.push(i)}return n}var c,u=t.indexOf(".");return u===-1||(c=e[t.substr(0,u)])==null?void 0:zt(c,t.substr(u+1))}function gt(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){On(typeof n!="string"&&"length"in n);for(var a=0,s=t.length;a<s;++a)gt(e,t[a],n[a])}else{var i,c,u=t.indexOf(".");u!==-1?(i=t.substr(0,u),(u=t.substr(u+1))===""?n===void 0?ie(e)&&!isNaN(parseInt(i))?e.splice(i,1):delete e[i]:e[i]=n:gt(c=(c=e[i])&&oe(e,i)?c:e[i]={},u,n)):n===void 0?ie(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function Ma(e){var t,n={};for(t in e)oe(e,t)&&(n[t]=e[t]);return n}var yr=[].concat;function Pa(e){return yr.apply([],e)}var Kt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Pa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return ae[e]}),Ha=new Set(Kt.map(function(e){return ae[e]})),Fn=null;function bt(e){return Fn=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var a=Fn.get(n);if(a)return a;if(ie(n)){a=[],Fn.set(n,a);for(var s=0,i=n.length;s<i;++s)a.push(t(n[s]))}else if(Ha.has(n.constructor))a=n;else{var c,u=ft(n);for(c in a=u===Object.prototype?{}:Object.create(u),Fn.set(n,a),n)oe(n,c)&&(a[c]=t(n[c]))}return a})(e),Fn=null,e}var In={}.toString;function Ta(e){return In.call(e).slice(8,-1)}var Aa=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Cr=typeof Aa=="symbol"?function(e){var t;return e!=null&&(t=e[Aa])&&t.apply(e)}:function(){return null};function nn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var nt={};function ve(e){var t,n,a,s;if(arguments.length===1){if(ie(e))return e.slice();if(this===nt&&typeof e=="string")return[e];if(s=Cr(e))for(n=[];!(a=s.next()).done;)n.push(a.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var fn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Kt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],at=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Kt),Ja={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function hn(e,t){this.name=e,this.message=t}function Xa(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,a,s){return s.indexOf(n)===a}).join(`
`)}function Bt(e,t,n,a){this.failures=t,this.failedKeys=a,this.successCount=n,this.message=Xa(e,t)}function kn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Xa(e,this.failures)}tn(hn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),tn(Bt).from(hn),tn(kn).from(hn);var na=at.reduce(function(e,t){return e[t]=t+"Error",e},{}),xr=hn,Z=at.reduce(function(e,t){var n=t+"Error";function a(s,i){this.name=n,s?typeof s=="string"?(this.message="".concat(s).concat(i?`
 `+i:""),this.inner=i||null):typeof s=="object"&&(this.message="".concat(s.name," ").concat(s.message),this.inner=s):(this.message=Ja[t]||n,this.inner=null)}return tn(a).from(xr),e[t]=a,e},{}),Qa=(Z.Syntax=SyntaxError,Z.Type=TypeError,Z.Range=RangeError,Kt.reduce(function(e,t){return e[t+"Error"]=Z[t],e},{}));Kt=at.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=Z[t]),e},{});function we(){}function Dn(e){return e}function kr(e,t){return e==null||e===Dn?t:function(n){return t(e(n))}}function pn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Za(e,t){return e===we?t:function(){var n=e.apply(this,arguments),a=(n!==void 0&&(arguments[0]=n),this.onsuccess),s=this.onerror,i=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return a&&(this.onsuccess=this.onsuccess?pn(a,this.onsuccess):a),s&&(this.onerror=this.onerror?pn(s,this.onerror):s),i!==void 0?i:n}}function wr(e,t){return e===we?t:function(){e.apply(this,arguments);var n=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?pn(n,this.onsuccess):n),a&&(this.onerror=this.onerror?pn(a,this.onerror):a)}}function $r(e,t){return e===we?t:function(s){var a=e.apply(this,arguments),s=(Ce(s,a),this.onsuccess),i=this.onerror,c=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?pn(s,this.onsuccess):s),i&&(this.onerror=this.onerror?pn(i,this.onerror):i),a===void 0?c===void 0?void 0:c:Ce(a,c)}}function Oa(e,t){return e===we?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function Nn(e,t){return e===we?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var a=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return t.apply(a,i)})}return t.apply(this,arguments)}}Kt.ModifyError=Bt,Kt.DexieError=hn,Kt.BulkError=kn;var wt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Fa(e){wt=e}var Ut={},qe=100,Ln=typeof Promise>"u"?[]:(at=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[Ln=crypto.subtle.digest("SHA-512",new Uint8Array([0])),ft(Ln),at]:[at,ft(at),at]),at=Ln[0],Pn=Ln[1],Pn=Pn&&Pn.then,jt=at&&at.constructor,wn=!!Ln[2],qn=function(e,t){Rt.push([e,t]),$n&&(queueMicrotask(La),$n=!1)},Kn=!0,$n=!0,vn=[],Sn=[],Ia=Dn,Ke={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:we,pgp:!1,env:{},finalize:we},X=Ke,Rt=[],Ot=0,aa=[];function Y(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=X;if(typeof e!="function"){if(e!==Ut)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Je(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(a,s){try{s(function(i){if(a._state===null){if(i===a)throw new TypeError("A promise cannot be resolved with itself.");var c=a._lib&&mn();i&&typeof i.then=="function"?n(a,function(u,g){i instanceof Y?i._then(u,g):i.then(u,g)}):(a._state=!0,a._value=i,_t(a)),c&&an()}},Je.bind(null,a))}catch(i){Je(a,i)}})(this,e)}var Da={get:function(){var e=X,t=oa;function n(a,s){var i=this,c=!e.global&&(e!==X||t!==oa),u=c&&!sn(),g=new Y(function(S,b){he(i,new Na(nr(a,e,c,u),nr(s,e,c,u),S,b,e))});return this._consoleTask&&(g._consoleTask=this._consoleTask),g}return n.prototype=Ut,n},set:function(e){mt(this,"then",e&&e.prototype===Ut?Da:{get:function(){return e},set:Da.set})}};function Na(e,t,n,a,s){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=a,this.psd=s}function Je(e,t){var n,a;Sn.push(t),e._state===null&&(n=e._lib&&mn(),t=Ia(t),e._state=!1,e._value=t,a=e,vn.some(function(s){return s._value===a._value})||vn.push(a),_t(e),n)&&an()}function _t(e){var t=e._listeners;e._listeners=[];for(var n=0,a=t.length;n<a;++n)he(e,t[n]);var s=e._PSD;--s.ref||s.finalize(),Ot===0&&(++Ot,qn(function(){--Ot==0&&ra()},[]))}function he(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ot,qn(En,[n,e,t])}}function En(e,t,n){try{var a,s=t._value;!t._state&&Sn.length&&(Sn=[]),a=wt&&t._consoleTask?t._consoleTask.run(function(){return e(s)}):e(s),t._state||Sn.indexOf(s)!==-1||(i=>{for(var c=vn.length;c;)if(vn[--c]._value===i._value)return vn.splice(c,1)})(t),n.resolve(a)}catch(i){n.reject(i)}finally{--Ot==0&&ra(),--n.psd.ref||n.psd.finalize()}}function La(){gn(Ke,function(){mn()&&an()})}function mn(){var e=Kn;return $n=Kn=!1,e}function an(){var e,t,n;do for(;0<Rt.length;)for(e=Rt,Rt=[],n=e.length,t=0;t<n;++t){var a=e[t];a[0].apply(null,a[1])}while(0<Rt.length);$n=Kn=!0}function ra(){for(var e=vn,t=(vn=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)}),aa.slice(0)),n=t.length;n;)t[--n]()}function Ft(e){return new Y(Ut,!1,e)}function me(e,t){var n=X;return function(){var a=mn(),s=X;try{return Wt(n,!0),e.apply(this,arguments)}catch(i){t&&t(i)}finally{Wt(s,!1),a&&an()}}}kt(Y.prototype,{then:Da,_then:function(e,t){he(this,new Na(null,null,e,t,X))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(a){return(a instanceof t?n:Ft)(a)}):this.then(null,function(a){return(a&&a.name===t?n:Ft)(a)}))},finally:function(e){return this.then(function(t){return Y.resolve(e()).then(function(){return t})},function(t){return Y.resolve(e()).then(function(){return Ft(t)})})},timeout:function(e,t){var n=this;return e<1/0?new Y(function(a,s){var i=setTimeout(function(){return s(new Z.Timeout(t))},e);n.then(a,s).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&mt(Y.prototype,Symbol.toStringTag,"Dexie.Promise"),Ke.env=tr(),kt(Y,{all:function(){var e=ve.apply(null,arguments).map(la);return new Y(function(t,n){e.length===0&&t([]);var a=e.length;e.forEach(function(s,i){return Y.resolve(s).then(function(c){e[i]=c,--a||t(e)},n)})})},resolve:function(e){return e instanceof Y?e:e&&typeof e.then=="function"?new Y(function(t,n){e.then(t,n)}):new Y(Ut,!0,e)},reject:Ft,race:function(){var e=ve.apply(null,arguments).map(la);return new Y(function(t,n){e.map(function(a){return Y.resolve(a).then(t,n)})})},PSD:{get:function(){return X},set:function(e){return X=e}},totalEchoes:{get:function(){return oa}},newPSD:rn,usePSD:gn,scheduler:{get:function(){return qn},set:function(e){qn=e}},rejectionMapper:{get:function(){return Ia},set:function(e){Ia=e}},follow:function(e,t){return new Y(function(n,a){return rn(function(s,i){var c=X;c.unhandleds=[],c.onunhandled=i,c.finalize=pn(function(){var u,g=this;u=function(){g.unhandleds.length===0?s():i(g.unhandleds[0])},aa.push(function S(){u(),aa.splice(aa.indexOf(S),1)}),++Ot,qn(function(){--Ot==0&&ra()},[])},c.finalize),e()},t,n,a)})}}),jt&&(jt.allSettled&&mt(Y,"allSettled",function(){var e=ve.apply(null,arguments).map(la);return new Y(function(t){e.length===0&&t([]);var n=e.length,a=new Array(n);e.forEach(function(s,i){return Y.resolve(s).then(function(c){return a[i]={status:"fulfilled",value:c}},function(c){return a[i]={status:"rejected",reason:c}}).then(function(){return--n||t(a)})})})}),jt.any&&typeof AggregateError<"u"&&mt(Y,"any",function(){var e=ve.apply(null,arguments).map(la);return new Y(function(t,n){e.length===0&&n(new AggregateError([]));var a=e.length,s=new Array(a);e.forEach(function(i,c){return Y.resolve(i).then(function(u){return t(u)},function(u){s[c]=u,--a||n(new AggregateError(s))})})})}),jt.withResolvers)&&(Y.withResolvers=jt.withResolvers);var Qe={awaits:0,echoes:0,id:0},er=0,sa=[],ia=0,oa=0,Sr=0;function rn(e,c,n,a){var s=X,i=Object.create(s),c=(i.parent=s,i.ref=0,i.global=!1,i.id=++Sr,Ke.env,i.env=wn?{Promise:Y,PromiseProp:{value:Y,configurable:!0,writable:!0},all:Y.all,race:Y.race,allSettled:Y.allSettled,any:Y.any,resolve:Y.resolve,reject:Y.reject}:{},c&&Ce(i,c),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()},gn(i,e,n,a));return i.ref===0&&i.finalize(),c}function Bn(){return Qe.id||(Qe.id=++er),++Qe.awaits,Qe.echoes+=qe,Qe.id}function sn(){return!!Qe.awaits&&(--Qe.awaits==0&&(Qe.id=0),Qe.echoes=Qe.awaits*qe,!0)}function la(e){return Qe.echoes&&e&&e.constructor===jt?(Bn(),e.then(function(t){return sn(),t},function(t){return sn(),je(t)})):e}function Er(){var e=sa[sa.length-1];sa.pop(),Wt(e,!1)}function Wt(e,t){var n,a,s=X;(t?!Qe.echoes||ia++&&e===X:!ia||--ia&&e===X)||queueMicrotask(t?(function(i){++oa,Qe.echoes&&--Qe.echoes!=0||(Qe.echoes=Qe.awaits=Qe.id=0),sa.push(X),Wt(i,!0)}).bind(null,e):Er),e!==X&&(X=e,s===Ke&&(Ke.env=tr()),wn)&&(n=Ke.env.Promise,a=e.env,s.global||e.global)&&(Object.defineProperty(ae,"Promise",a.PromiseProp),n.all=a.all,n.race=a.race,n.resolve=a.resolve,n.reject=a.reject,a.allSettled&&(n.allSettled=a.allSettled),a.any)&&(n.any=a.any)}function tr(){var e=ae.Promise;return wn?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ae,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function gn(e,t,n,a,s){var i=X;try{return Wt(e,!0),t(n,a,s)}finally{Wt(i,!1)}}function nr(e,t,n,a){return typeof e!="function"?e:function(){var s=X;n&&Bn(),Wt(t,!0);try{return e.apply(this,arguments)}finally{Wt(s,!1),a&&queueMicrotask(sn)}}}function qa(e){Promise===jt&&Qe.echoes===0?ia===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Pn).indexOf("[native code]")===-1&&(Bn=sn=we);var je=Y.reject,bn="￿",Gt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ar="String expected.",_n=[],on="__dbnames",ca="readonly",ua="readwrite";function yn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var rr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function da(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=bt(t))[e],t}}function sr(){throw Z.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function fe(e,t){try{var n=ir(e),a=ir(t);if(n!==a)return n==="Array"?1:a==="Array"?-1:n==="binary"?1:a==="binary"?-1:n==="string"?1:a==="string"?-1:n==="Date"?1:a!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var s=Ka(e),i=Ka(t),c=s.length,u=i.length,g=c<u?c:u,S=0;S<g;++S)if(s[S]!==i[S])return s[S]<i[S]?-1:1;return c===u?0:c<u?-1:1;case"Array":for(var b=e,m=t,v=b.length,k=m.length,y=v<k?v:k,C=0;C<y;++C){var E=fe(b[C],m[C]);if(E!==0)return E}return v===k?0:v<k?-1:1}}catch{}return NaN}function ir(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Ta(e))==="ArrayBuffer")?"binary":t}function Ka(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function fa(e,t,n){var a=e.schema.yProps;return a?(t&&0<n.numFailures&&(t=t.filter(function(s,i){return!n.failures[i]})),Promise.all(a.map(function(s){return s=s.updatesTable,t?e.db.table(s).where("k").anyOf(t).delete():e.db.table(s).clear()})).then(function(){return n})):n}ja.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ie(n))return ye(ye([],ie(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var a=t.remove;if(ie(a))return ie(e)?e.filter(function(s){return!a.includes(s)}).sort():[];if(typeof a=="number")return Number(e)-a;if(typeof a=="bigint")try{return BigInt(e)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var jn=ja;function ja(e){this["@@propmod"]=e}function or(e,t){for(var n=ke(t),a=n.length,s=!1,i=0;i<a;++i){var c=n[i],u=t[c],g=zt(e,c);u instanceof jn?(gt(e,c,u.execute(g)),s=!0):g!==u&&(gt(e,c,u),s=!0)}return s}Be.prototype._trans=function(e,t,n){var a=this._tx||X.trans,s=this.name,i=wt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function c(S,b,m){if(m.schema[s])return t(m.idbtrans,m);throw new Z.NotFound("Table "+s+" not part of transaction")}var u=mn();try{var g=a&&a.db._novip===this.db._novip?a===X.trans?a._promise(e,c,n):rn(function(){return a._promise(e,c,n)},{trans:a,transless:X.transless||X}):(function S(b,m,v,k){if(b.idbdb&&(b._state.openComplete||X.letThrough||b._vip)){var y=b._createTransaction(m,v,b._dbSchema);try{y.create(),b._state.PR1398_maxLoop=3}catch(C){return C.name===na.InvalidState&&b.isOpen()&&0<--b._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),b.close({disableAutoOpen:!1}),b.open().then(function(){return S(b,m,v,k)})):je(C)}return y._promise(m,function(C,E){return rn(function(){return X.trans=y,k(C,E,y)})}).then(function(C){if(m==="readwrite")try{y.idbtrans.commit()}catch{}return m==="readonly"?C:y._completion.then(function(){return C})})}if(b._state.openComplete)return je(new Z.DatabaseClosed(b._state.dbOpenError));if(!b._state.isBeingOpened){if(!b._state.autoOpen)return je(new Z.DatabaseClosed);b.open().catch(we)}return b._state.dbReadyPromise.then(function(){return S(b,m,v,k)})})(this.db,e,[this.name],c);return i&&(g._consoleTask=i,g=g.catch(function(S){return console.trace(S),je(S)})),g}finally{u&&an()}},Be.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?je(new Z.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return n.core.get({trans:a,key:e}).then(function(s){return n.hook.reading.fire(s)})}).then(t)},Be.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ie(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=ke(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(u){if(u.compound&&t.every(function(S){return 0<=u.keyPath.indexOf(S)})){for(var g=0;g<t.length;++g)if(t.indexOf(u.keyPath[g])===-1)return!1;return!0}return!1}).sort(function(u,g){return u.keyPath.length-g.keyPath.length})[0];if(n&&this.db._maxKey!==bn)return c=n.keyPath.slice(0,t.length),this.where(c).equals(c.map(function(u){return e[u]}));!n&&wt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var a=this.schema.idxByName;function s(u,g){return fe(u,g)===0}var c=t.reduce(function(b,g){var S=b[0],b=b[1],m=a[g],v=e[g];return[S||m,S||!m?yn(b,m&&m.multi?function(k){return k=zt(k,g),ie(k)&&k.some(function(y){return s(v,y)})}:function(k){return s(v,zt(k,g))}):b]},[null,null]),i=c[0],c=c[1];return i?this.where(i.name).equals(e[i.keyPath]).filter(c):n?this.filter(c):this.where(t).equals("")},Be.prototype.filter=function(e){return this.toCollection().and(e)},Be.prototype.count=function(e){return this.toCollection().count(e)},Be.prototype.offset=function(e){return this.toCollection().offset(e)},Be.prototype.limit=function(e){return this.toCollection().limit(e)},Be.prototype.each=function(e){return this.toCollection().each(e)},Be.prototype.toArray=function(e){return this.toCollection().toArray(e)},Be.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Be.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ie(e)?"[".concat(e.join("+"),"]"):e))},Be.prototype.reverse=function(){return this.toCollection().reverse()},Be.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,a=((this.schema.mappedClass=e).prototype instanceof sr&&(e=(c=>{var u=b,g=c;if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");function S(){this.constructor=u}function b(){return c!==null&&c.apply(this,arguments)||this}return Fe(u,g),u.prototype=g===null?Object.create(g):(S.prototype=g.prototype,new S),Object.defineProperty(b.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),b.prototype.table=function(){return n},b})(e)),new Set),s=e.prototype;s;s=ft(s))Object.getOwnPropertyNames(s).forEach(function(c){return a.add(c)});function i(c){if(!c)return c;var u,g=Object.create(e.prototype);for(u in c)if(!a.has(u))try{g[u]=c[u]}catch{}return g}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=i,this.hook("reading",i),e},Be.prototype.defineClass=function(){return this.mapToClass(function(e){Ce(this,e)})},Be.prototype.add=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=da(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"add",keys:t!=null?[t]:null,values:[c]})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},Be.prototype.upsert=function(e,t){var n=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return n.core.get({trans:s,key:e}).then(function(i){var c=i??{};return or(c,t),a&&gt(c,a,e),n.core.mutate({trans:s,type:"put",values:[c],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):!!i})})})},Be.prototype.update=function(e,t){return typeof e!="object"||ie(e)?this.where(":id").equals(e).modify(t):(e=zt(e,this.schema.primKey.keyPath))===void 0?je(new Z.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Be.prototype.put=function(e,t){var n=this,a=this.schema.primKey,s=a.auto,i=a.keyPath,c=e;return i&&s&&(c=da(i)(e)),this._trans("readwrite",function(u){return n.core.mutate({trans:u,type:"put",values:[c],keys:t!=null?[t]:null})}).then(function(u){return u.numFailures?Y.reject(u.failures[0]):u.lastResult}).then(function(u){if(i)try{gt(e,i,u)}catch{}return u})},Be.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(a){return fa(t,[e],a)}).then(function(a){return a.numFailures?Y.reject(a.failures[0]):void 0})})},Be.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:rr}).then(function(n){return fa(e,null,n)})}).then(function(t){return t.numFailures?Y.reject(t.failures[0]):void 0})},Be.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(a){return a.map(function(s){return t.hook.reading.fire(s)})})})},Be.prototype.bulkAdd=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,S=u.auto,u=u.keyPath;if(u&&s)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var g=e.length,S=u&&S?e.map(da(u)):e;return a.core.mutate({trans:c,type:"add",keys:s,values:S,wantResults:i}).then(function(b){var m=b.numFailures,v=b.failures;if(m===0)return i?b.results:b.lastResult;throw new kn("".concat(a.name,".bulkAdd(): ").concat(m," of ").concat(g," operations failed"),v)})})},Be.prototype.bulkPut=function(e,t,n){var a=this,s=Array.isArray(t)?t:void 0,i=(n=n||(s?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(c){var u=a.schema.primKey,S=u.auto,u=u.keyPath;if(u&&s)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");var g=e.length,S=u&&S?e.map(da(u)):e;return a.core.mutate({trans:c,type:"put",keys:s,values:S,wantResults:i}).then(function(b){var m=b.numFailures,v=b.failures;if(m===0)return i?b.results:b.lastResult;throw new kn("".concat(a.name,".bulkPut(): ").concat(m," of ").concat(g," operations failed"),v)})})},Be.prototype.bulkUpdate=function(e){var t=this,n=this.core,a=e.map(function(c){return c.key}),s=e.map(function(c){return c.changes}),i=[];return this._trans("readwrite",function(c){return n.getMany({trans:c,keys:a,cache:"clone"}).then(function(u){var g=[],S=[],b=(e.forEach(function(m,v){var k=m.key,y=m.changes,C=u[v];if(C){for(var E=0,_=Object.keys(y);E<_.length;E++){var w=_[E],T=y[w];if(w===t.schema.primKey.keyPath){if(fe(T,k)!==0)throw new Z.Constraint("Cannot update primary key in bulkUpdate()")}else gt(C,w,T)}i.push(v),g.push(k),S.push(C)}}),g.length);return n.mutate({trans:c,type:"put",keys:g,values:S,updates:{keys:a,changeSpecs:s}}).then(function(m){var v=m.numFailures,k=m.failures;if(v===0)return b;for(var y=0,C=Object.keys(k);y<C.length;y++){var E,_=C[y],w=i[Number(_)];w!=null&&(E=k[_],delete k[_],k[w]=E)}throw new kn("".concat(t.name,".bulkUpdate(): ").concat(v," of ").concat(b," operations failed"),k)})})})},Be.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:e}).then(function(s){return fa(t,e,s)})}).then(function(a){var s=a.numFailures,i=a.failures;if(s===0)return a.lastResult;throw new kn("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(n," operations failed"),i)})};var ne=Be;function Be(){}function o(e){function t(c,u){if(u){for(var g=arguments.length,S=new Array(g-1);--g;)S[g-1]=arguments[g];return n[c].subscribe.apply(null,S),e}if(typeof c=="string")return n[c]}var n={};t.addEventType=i;for(var a=1,s=arguments.length;a<s;++a)i(arguments[a]);return t;function i(c,u,g){var S,b;if(typeof c!="object")return u=u||Oa,b={subscribers:[],fire:g=g||we,subscribe:function(m){b.subscribers.indexOf(m)===-1&&(b.subscribers.push(m),b.fire=u(b.fire,m))},unsubscribe:function(m){b.subscribers=b.subscribers.filter(function(v){return v!==m}),b.fire=b.subscribers.reduce(u,g)}},n[c]=t[c]=b;ke(S=c).forEach(function(m){var v=S[m];if(ie(v))i(m,S[m][0],S[m][1]);else{if(v!=="asap")throw new Z.InvalidArgument("Invalid event config");var k=i(m,Dn,function(){for(var y=arguments.length,C=new Array(y);y--;)C[y]=arguments[y];k.subscribers.forEach(function(E){ta(function(){E.apply(null,C)})})})}})}}function l(e,t){return tn(t).from({prototype:e}),t}function f(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function d(e,t){e.filter=yn(e.filter,t)}function x(e,t,n){var a=e.replayFilter;e.replayFilter=a?function(){return yn(a(),t())}:t,e.justLimit=n&&!a}function M(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new Z.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function A(e,t,n){var a=M(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function N(e,t,n,a){var s,i,c=e.replayFilter?yn(e.filter,e.replayFilter()):e.filter;return e.or?(s={},i=function(u,g,S){var b,m;c&&!c(g,S,function(v){return g.stop(v)},function(v){return g.fail(v)})||((m=""+(b=g.primaryKey))=="[object ArrayBuffer]"&&(m=""+new Uint8Array(b)),oe(s,m))||(s[m]=!0,t(u,g,S))},Promise.all([e.or._iterate(i,n),L(A(e,a,n),e.algorithm,i,!e.keysOnly&&e.valueMapper)])):L(A(e,a,n),yn(e.algorithm,c),t,!e.keysOnly&&e.valueMapper)}function L(e,t,n,a){var s=me(a?function(i,c,u){return n(a(i),c,u)}:n);return e.then(function(i){if(i)return i.start(function(){var c=function(){return i.continue()};t&&!t(i,function(u){return c=u},function(u){i.stop(u),c=we},function(u){i.fail(u),c=we})||s(i.value,i,function(u){return c=u}),c()})})}O.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,je.bind(null,n.error)):n.table._trans("readonly",e).then(t)},O.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,je.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},O.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=yn(t.algorithm,e)},O.prototype._iterate=function(e,t){return N(this._ctx,e,t,this._ctx.table.core)},O.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&Ce(n,e),t._ctx=n,t},O.prototype.raw=function(){return this._ctx.valueMapper=null,this},O.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return N(t,e,n,t.table.core)})},O.prototype.count=function(e){var t=this;return this._read(function(n){var a,s=t._ctx,i=s.table.core;return f(s,!0)?i.count({trans:n,query:{index:M(s,i.schema),range:s.range}}).then(function(c){return Math.min(c,s.limit)}):(a=0,N(s,function(){return++a,!1},n,i).then(function(){return a}))}).then(e)},O.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),a=n[0],s=n.length-1;function i(g,S){return S?i(g[n[S]],S-1):g[a]}var c=this._ctx.dir==="next"?1:-1;function u(g,S){return fe(i(g,s),i(S,s))*c}return this.toArray(function(g){return g.sort(u)}).then(t)},O.prototype.toArray=function(e){var t=this;return this._read(function(n){var a,s,i,c=t._ctx;return c.dir==="next"&&f(c,!0)&&0<c.limit?(a=c.valueMapper,s=M(c,c.table.core.schema),c.table.core.query({trans:n,limit:c.limit,values:!0,query:{index:s,range:c.range}}).then(function(u){return u=u.result,a?u.map(a):u})):(i=[],N(c,function(u){return i.push(u)},n,c.table.core).then(function(){return i}))},e)},O.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,f(t)?x(t,function(){var n=e;return function(a,s){return n===0||(n===1?--n:s(function(){a.advance(n),n=0}),!1)}}):x(t,function(){var n=e;return function(){return--n<0}})),this},O.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),x(this._ctx,function(){var t=e;return function(n,a,s){return--t<=0&&a(s),0<=t}},!0),this},O.prototype.until=function(e,t){return d(this._ctx,function(n,a,s){return!e(n.value)||(a(s),t)}),this},O.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},O.prototype.last=function(e){return this.reverse().first(e)},O.prototype.filter=function(e){var t;return d(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=yn(t.isMatch,e),this},O.prototype.and=function(e){return this.filter(e)},O.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},O.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},O.prototype.desc=function(){return this.reverse()},O.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.key,a)})},O.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},O.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,a){e(a.primaryKey,a)})},O.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(a,s){n.push(s.key)}).then(function(){return n}).then(e)},O.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&f(t,!0)&&0<t.limit)return this._read(function(a){var s=M(t,t.table.core.schema);return t.table.core.query({trans:a,values:!1,limit:t.limit,query:{index:s,range:t.range}})}).then(function(a){return a.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(a,s){n.push(s.primaryKey)}).then(function(){return n}).then(e)},O.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},O.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},O.prototype.lastKey=function(e){return this.reverse().firstKey(e)},O.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},d(this._ctx,function(a){var a=a.primaryKey.toString(),s=oe(e,a);return e[a]=!0,!s})),this},O.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(a){function s(C,E){var _=E.failures;v+=C-E.numFailures;for(var w=0,T=ke(_);w<T.length;w++){var I=T[w];m.push(_[I])}}var i=typeof e=="function"?e:function(C){return or(C,e)},c=n.table.core,b=c.schema.primaryKey,u=b.outbound,g=b.extractKey,S=200,b=t.db._options.modifyChunkSize,m=(b&&(S=typeof b=="object"?b[c.name]||b["*"]||200:b),[]),v=0,k=[],y=e===Q;return t.clone().primaryKeys().then(function(C){function E(w){var T=Math.min(S,C.length-w),I=C.slice(w,w+T);return(y?Promise.resolve([]):c.getMany({trans:a,keys:I,cache:"immutable"})).then(function(j){var R=[],F=[],U=u?[]:null,z=y?I:[];if(!y)for(var D=0;D<T;++D){var W=j[D],ce={value:bt(W),primKey:C[w+D]};i.call(ce,ce.value,ce)!==!1&&(ce.value==null?z.push(C[w+D]):u||fe(g(W),g(ce.value))===0?(F.push(ce.value),u&&U.push(C[w+D])):(z.push(C[w+D]),R.push(ce.value)))}return Promise.resolve(0<R.length&&c.mutate({trans:a,type:"add",values:R}).then(function(be){for(var ee in be.failures)z.splice(parseInt(ee),1);s(R.length,be)})).then(function(){return(0<F.length||_&&typeof e=="object")&&c.mutate({trans:a,type:"put",keys:U,values:F,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<w}).then(function(be){return s(F.length,be)})}).then(function(){return(0<z.length||_&&y)&&c.mutate({trans:a,type:"delete",keys:z,criteria:_,isAdditionalChunk:0<w}).then(function(be){return fa(n.table,z,be)}).then(function(be){return s(z.length,be)})}).then(function(){return C.length>w+T&&E(w+S)})})}var _=f(n)&&n.limit===1/0&&(typeof e!="function"||y)&&{index:n.index,range:n.range};return E(0).then(function(){if(0<m.length)throw new Bt("Error modifying one or more objects",m,v,k);return C.length})})})},O.prototype.delete=function(){var e=this._ctx,t=e.range;return!f(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Q):this._write(function(n){var a=e.table.core.schema.primaryKey,s=t;return e.table.core.count({trans:n,query:{index:a,range:s}}).then(function(i){return e.table.core.mutate({trans:n,type:"deleteRange",range:s}).then(function(g){var u=g.failures,g=g.numFailures;if(g)throw new Bt("Could not delete some values",Object.keys(u).map(function(S){return u[S]}),i-g);return i-g})})})};var H=O;function O(){}var Q=function(e,t){return t.value=null};function te(e,t){return e<t?-1:e===t?0:1}function ge(e,t){return t<e?-1:e===t?0:1}function de(e,t,n){return e=e instanceof Se?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Ae(e){return new e.Collection(e,function(){return rt("")}).limit(0)}function le(k,t,n,a){var s,i,c,u,g,S,b,m=n.length;if(!n.every(function(C){return typeof C=="string"}))return de(k,ar);function v(C){s=C==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},i=C==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},c=C==="next"?te:ge;var E=n.map(function(_){return{lower:i(_),upper:s(_)}}).sort(function(_,w){return c(_.lower,w.lower)});u=E.map(function(_){return _.upper}),g=E.map(function(_){return _.lower}),b=(S=C)==="next"?"":a}v("next");var k=new k.Collection(k,function(){return $e(u[0],g[m-1]+a)}),y=(k._ondirectionchange=function(C){v(C)},0);return k._addAlgorithm(function(C,E,_){var w=C.key;if(typeof w=="string"){var T=i(w);if(t(T,g,y))return!0;for(var I=null,j=y;j<m;++j){var R=((F,U,z,D,W,ce)=>{for(var be=Math.min(F.length,D.length),ee=-1,ue=0;ue<be;++ue){var Te=U[ue];if(Te!==D[ue])return W(F[ue],z[ue])<0?F.substr(0,ue)+z[ue]+z.substr(ue+1):W(F[ue],D[ue])<0?F.substr(0,ue)+D[ue]+z.substr(ue+1):0<=ee?F.substr(0,ee)+U[ee]+z.substr(ee+1):null;W(F[ue],Te)<0&&(ee=ue)}return be<D.length&&ce==="next"?F+z.substr(F.length):be<F.length&&ce==="prev"?F.substr(0,z.length):ee<0?null:F.substr(0,ee)+D[ee]+z.substr(ee+1)})(w,T,u[j],g[j],c,S);R===null&&I===null?y=j+1:(I===null||0<c(I,R))&&(I=R)}E(I!==null?function(){C.continue(I+b)}:_)}return!1}),k}function $e(e,t,n,a){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:a}}function rt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(pe.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),pe.prototype.between=function(e,t,n,a){n=n!==!1,a=a===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||a)&&(!n||!a)?Ae(this):new this.Collection(this,function(){return $e(e,t,!n,!a)})}catch{return de(this,Gt)}},pe.prototype.equals=function(e){return e==null?de(this,Gt):new this.Collection(this,function(){return rt(e)})},pe.prototype.above=function(e){return e==null?de(this,Gt):new this.Collection(this,function(){return $e(e,void 0,!0)})},pe.prototype.aboveOrEqual=function(e){return e==null?de(this,Gt):new this.Collection(this,function(){return $e(e,void 0,!1)})},pe.prototype.below=function(e){return e==null?de(this,Gt):new this.Collection(this,function(){return $e(void 0,e,!1,!0)})},pe.prototype.belowOrEqual=function(e){return e==null?de(this,Gt):new this.Collection(this,function(){return $e(void 0,e)})},pe.prototype.startsWith=function(e){return typeof e!="string"?de(this,ar):this.between(e,e+bn,!0,!0)},pe.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):le(this,function(t,n){return t.indexOf(n[0])===0},[e],bn)},pe.prototype.equalsIgnoreCase=function(e){return le(this,function(t,n){return t===n[0]},[e],"")},pe.prototype.anyOfIgnoreCase=function(){var e=ve.apply(nt,arguments);return e.length===0?Ae(this):le(this,function(t,n){return n.indexOf(t)!==-1},e,"")},pe.prototype.startsWithAnyOfIgnoreCase=function(){var e=ve.apply(nt,arguments);return e.length===0?Ae(this):le(this,function(t,n){return n.some(function(a){return t.indexOf(a)===0})},e,bn)},pe.prototype.anyOf=function(){var e,t,n=this,a=ve.apply(nt,arguments),s=this._cmp;try{a.sort(s)}catch{return de(this,Gt)}return a.length===0?Ae(this):((e=new this.Collection(this,function(){return $e(a[0],a[a.length-1])}))._ondirectionchange=function(i){s=i==="next"?n._ascending:n._descending,a.sort(s)},t=0,e._addAlgorithm(function(i,c,u){for(var g=i.key;0<s(g,a[t]);)if(++t===a.length)return c(u),!1;return s(g,a[t])===0||(c(function(){i.continue(a[t])}),!1)}),e)},pe.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},pe.prototype.noneOf=function(){var e=ve.apply(nt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return de(this,Gt)}var t=e.reduce(function(n,a){return n?n.concat([[n[n.length-1][1],a]]):[[-1/0,a]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},pe.prototype.inAnyRange=function(e,_){var n=this,a=this._cmp,s=this._ascending,i=this._descending,c=this._min,u=this._max;if(e.length===0)return Ae(this);if(!e.every(function(w){return w[0]!==void 0&&w[1]!==void 0&&s(w[0],w[1])<=0}))return de(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);var g=!_||_.includeLowers!==!1,S=_&&_.includeUppers===!0,b,m=s;function v(w,T){return m(w[0],T[0])}try{(b=e.reduce(function(w,T){for(var I=0,j=w.length;I<j;++I){var R=w[I];if(a(T[0],R[1])<0&&0<a(T[1],R[0])){R[0]=c(R[0],T[0]),R[1]=u(R[1],T[1]);break}}return I===j&&w.push(T),w},[])).sort(v)}catch{return de(this,Gt)}var k=0,y=S?function(w){return 0<s(w,b[k][1])}:function(w){return 0<=s(w,b[k][1])},C=g?function(w){return 0<i(w,b[k][0])}:function(w){return 0<=i(w,b[k][0])},E=y,_=new this.Collection(this,function(){return $e(b[0][0],b[b.length-1][1],!g,!S)});return _._ondirectionchange=function(w){m=w==="next"?(E=y,s):(E=C,i),b.sort(v)},_._addAlgorithm(function(w,T,I){for(var j,R=w.key;E(R);)if(++k===b.length)return T(I),!1;return!y(j=R)&&!C(j)||(n._cmp(R,b[k][1])===0||n._cmp(R,b[k][0])===0||T(function(){m===s?w.continue(b[k][0]):w.continue(b[k][1])}),!1)}),_},pe.prototype.startsWithAnyOf=function(){var e=ve.apply(nt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?Ae(this):this.inAnyRange(e.map(function(t){return[t,t+bn]})):de(this,"startsWithAnyOf() only works with strings")};var Se=pe;function pe(){}function Ze(e){return me(function(t){return q(t),e(t.target.error),!1})}function q(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var ot="storagemutated",st="x-storagemutated-1",et=o(null,ot),It=(re.prototype._lock=function(){return On(!X.global),++this._reculock,this._reculock!==1||X.global||(X.lockOwnerFor=this),this},re.prototype._unlock=function(){if(On(!X.global),--this._reculock==0)for(X.global||(X.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{gn(e[1],e[0])}catch{}}return this},re.prototype._locked=function(){return this._reculock&&X.lockOwnerFor!==this},re.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,a=this.db._state.dbOpenError;if(On(!this.idbtrans),!e&&!n)switch(a&&a.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(a);case"MissingAPIError":throw new Z.MissingAPI(a.message,a);default:throw new Z.OpenFailed(a)}if(!this.active)throw new Z.TransactionInactive;On(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=me(function(s){q(s),t._reject(e.error)}),e.onabort=me(function(s){q(s),t.active&&t._reject(new Z.Abort(e.error)),t.active=!1,t.on("abort").fire(s)}),e.oncomplete=me(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&et.storagemutated.fire(e.mutatedParts)})}return this},re.prototype._promise=function(e,t,n){var a,s=this;return e==="readwrite"&&this.mode!=="readwrite"?je(new Z.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Y(function(i,c){s._blockedFuncs.push([function(){s._promise(e,t,n).then(i,c)},X])}):n?rn(function(){var i=new Y(function(c,u){s._lock();var g=t(c,u,s);g&&g.then&&g.then(c,u)});return i.finally(function(){return s._unlock()}),i._lib=!0,i}):((a=new Y(function(i,c){var u=t(i,c,s);u&&u.then&&u.then(i,c)}))._lib=!0,a):je(new Z.TransactionInactive)},re.prototype._root=function(){return this.parent?this.parent._root():this},re.prototype.waitFor=function(e){var t,n=this._root(),a=Y.resolve(e),s=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return a}):(n._waitingFor=a,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function i(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=i)})()),n._waitingFor);return new Y(function(i,c){a.then(function(u){return n._waitingQueue.push(me(i.bind(null,u)))},function(u){return n._waitingQueue.push(me(c.bind(null,u)))}).finally(function(){n._waitingFor===s&&(n._waitingFor=null)})})},re.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))},re.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(oe(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new Z.NotFound("Table "+e+" not part of transaction")},re);function re(){}function ht(e,t,n,a,s,i,c,u){return{name:e,keyPath:t,unique:n,multi:a,auto:s,compound:i,src:(n&&!c?"&":"")+(a?"*":"")+(s?"++":"")+Pe(t),type:u}}function Pe(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Re(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(a=function(s){return[s.name,s]},n.reduce(function(s,i,c){return i=a(i,c),i&&(s[i[0]]=i[1]),s},{}))};var a}var Ie=function(e){try{return e.only([[]]),Ie=function(){return[[]]},[[]]}catch{return Ie=function(){return bn},bn}};function Ve(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return zt(n,t)}:function(n){return zt(n,e)};var t}function Ye(e){return[].slice.call(e)}var lt=0;function Vt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Ht(e,t,g){function a(y){if(y.type===3)return null;if(y.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var m=y.lower,v=y.upper,k=y.lowerOpen,y=y.upperOpen;return m===void 0?v===void 0?null:t.upperBound(v,!!y):v===void 0?t.lowerBound(m,!!k):t.bound(m,v,!!k,!!y)}function s(b){var m,v=b.name;return{name:v,schema:b,mutate:function(k){var y=k.trans,C=k.type,E=k.keys,_=k.values,w=k.range;return new Promise(function(T,I){T=me(T);var j=y.objectStore(v),R=j.keyPath==null,F=C==="put"||C==="add";if(!F&&C!=="delete"&&C!=="deleteRange")throw new Error("Invalid operation type: "+C);var U,z=(E||_||{length:1}).length;if(E&&_&&E.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(z===0)return T({numFailures:0,failures:{},results:[],lastResult:void 0});function D(Oe){++be,q(Oe)}var W=[],ce=[],be=0;if(C==="deleteRange"){if(w.type===4)return T({numFailures:be,failures:ce,results:[],lastResult:void 0});w.type===3?W.push(U=j.clear()):W.push(U=j.delete(a(w)))}else{var R=F?R?[_,E]:[_,null]:[E,null],ee=R[0],ue=R[1];if(F)for(var Te=0;Te<z;++Te)W.push(U=ue&&ue[Te]!==void 0?j[C](ee[Te],ue[Te]):j[C](ee[Te])),U.onerror=D;else for(Te=0;Te<z;++Te)W.push(U=j[C](ee[Te])),U.onerror=D}function We(Oe){Oe=Oe.target.result,W.forEach(function(un,ka){return un.error!=null&&(ce[ka]=un.error)}),T({numFailures:be,failures:ce,results:C==="delete"?E:W.map(function(un){return un.result}),lastResult:Oe})}U.onerror=function(Oe){D(Oe),We(Oe)},U.onsuccess=We})},getMany:function(k){var y=k.trans,C=k.keys;return new Promise(function(E,_){E=me(E);for(var w,T=y.objectStore(v),I=C.length,j=new Array(I),R=0,F=0,U=function(W){W=W.target,j[W._pos]=W.result,++F===R&&E(j)},z=Ze(_),D=0;D<I;++D)C[D]!=null&&((w=T.get(C[D]))._pos=D,w.onsuccess=U,w.onerror=z,++R);R===0&&E(j)})},get:function(k){var y=k.trans,C=k.key;return new Promise(function(E,_){E=me(E);var w=y.objectStore(v).get(C);w.onsuccess=function(T){return E(T.target.result)},w.onerror=Ze(_)})},query:(m=u,function(k){return new Promise(function(y,C){y=me(y);var E,_,w,F=k.trans,T=k.values,I=k.limit,R=k.query,j=I===1/0?void 0:I,U=R.index,R=R.range,F=F.objectStore(v),F=U.isPrimaryKey?F:F.index(U.name),U=a(R);if(I===0)return y({result:[]});m?((R=T?F.getAll(U,j):F.getAllKeys(U,j)).onsuccess=function(z){return y({result:z.target.result})},R.onerror=Ze(C)):(E=0,_=!T&&"openKeyCursor"in F?F.openKeyCursor(U):F.openCursor(U),w=[],_.onsuccess=function(z){var D=_.result;return!D||(w.push(T?D.value:D.primaryKey),++E===I)?y({result:w}):void D.continue()},_.onerror=Ze(C))})}),openCursor:function(k){var y=k.trans,C=k.values,E=k.query,_=k.reverse,w=k.unique;return new Promise(function(T,I){T=me(T);var F=E.index,j=E.range,R=y.objectStore(v),R=F.isPrimaryKey?R:R.index(F.name),F=_?w?"prevunique":"prev":w?"nextunique":"next",U=!C&&"openKeyCursor"in R?R.openKeyCursor(a(j),F):R.openCursor(a(j),F);U.onerror=Ze(I),U.onsuccess=me(function(z){var D,W,ce,be,ee=U.result;ee?(ee.___id=++lt,ee.done=!1,D=ee.continue.bind(ee),W=(W=ee.continuePrimaryKey)&&W.bind(ee),ce=ee.advance.bind(ee),be=function(){throw new Error("Cursor not stopped")},ee.trans=y,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=me(I),ee.next=function(){var ue=this,Te=1;return this.start(function(){return Te--?ue.continue():ue.stop()}).then(function(){return ue})},ee.start=function(ue){function Te(){if(U.result)try{ue()}catch(Oe){ee.fail(Oe)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var We=new Promise(function(Oe,un){Oe=me(Oe),U.onerror=Ze(un),ee.fail=un,ee.stop=function(ka){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=be,Oe(ka)}});return U.onsuccess=me(function(Oe){U.onsuccess=Te,Te()}),ee.continue=D,ee.continuePrimaryKey=W,ee.advance=ce,Te(),We},T(ee)):T(null)},I)})},count:function(k){var y=k.query,C=k.trans,E=y.index,_=y.range;return new Promise(function(w,T){var I=C.objectStore(v),I=E.isPrimaryKey?I:I.index(E.name),j=a(_),j=j?I.count(j):I.count();j.onsuccess=me(function(R){return w(R.target.result)}),j.onerror=Ze(T)})}}}i=g,c=Ye((g=e).objectStoreNames);var i,g={schema:{name:g.name,tables:c.map(function(b){return i.objectStore(b)}).map(function(b){var m=b.keyPath,v=b.autoIncrement,y=ie(m),k={},y={name:b.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m==null,compound:y,keyPath:m,autoIncrement:v,unique:!0,extractKey:Ve(m)},indexes:Ye(b.indexNames).map(function(C){return b.index(C)}).map(function(w){var T=w.name,E=w.unique,_=w.multiEntry,w=w.keyPath,T={name:T,compound:ie(w),keyPath:w,unique:E,multiEntry:_,extractKey:Ve(w)};return k[Vt(w)]=T}),getIndexByKeyPath:function(C){return k[Vt(C)]}};return k[":id"]=y.primaryKey,m!=null&&(k[Vt(m)]=y.primaryKey),y})},hasGetAll:0<c.length&&"getAll"in i.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},c=g.schema,u=g.hasGetAll,g=c.tables.map(s),S={};return g.forEach(function(b){return S[b.name]=b}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(b){if(S[b])return S[b];throw new Error("Table '".concat(b,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Ie(t),schema:c}}function Mt(e,t,n,a){return n=n.IDBKeyRange,t=Ht(t,n,a),{dbcore:e.dbcore.reduce(function(s,i){return i=i.create,G(G({},s),i(s))},t)}}function ct(e,t){var n=t.db,n=Mt(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(i){return i.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table)&&(e[s].core=a.core)})}function Jt(e,t,n,a){n.forEach(function(s){var i=a[s];t.forEach(function(c){var u=(function g(S,b){return Qn(S,b)||(S=ft(S))&&g(S,b)})(c,s);(!u||"value"in u&&u.value===void 0)&&(c===e.Transaction.prototype||c instanceof e.Transaction?mt(c,s,{get:function(){return this.table(s)},set:function(g){vt(this,s,{value:g,writable:!0,configurable:!0,enumerable:!0})}}):c[s]=new e.Table(s,i))})})}function _e(e,t){t.forEach(function(n){for(var a in n)n[a]instanceof e.Table&&delete n[a]})}function Ee(e,t){return e._cfg.version-t._cfg.version}function Le(e,t,n,a){var s=e._dbSchema,i=(n.objectStoreNames.contains("$meta")&&!s.$meta&&(s.$meta=Re("$meta",Yt("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,s)),c=(i.create(n),i._completion.catch(a),i._reject.bind(i)),u=X.transless||X;rn(function(){if(X.trans=i,X.transless=u,t!==0)return ct(e,n),S=t,((g=i).storeNames.includes("$meta")?g.table("$meta").get("version").then(function(b){return b??S}):Y.resolve(S)).then(function(E){var m=e,v=E,k=i,y=n,C=[],E=m._versions,_=m._dbSchema=$t(0,m.idbdb,y);return(E=E.filter(function(w){return w._cfg.version>=v})).length===0?Y.resolve():(E.forEach(function(w){C.push(function(){var T,I,j,R=_,F=w._cfg.dbschema,U=(ut(m,R,y),ut(m,F,y),_=m._dbSchema=F,ze(R,F)),z=(U.add.forEach(function(D){Dt(y,D[0],D[1].primKey,D[1].indexes)}),U.change.forEach(function(D){if(D.recreate)throw new Z.Upgrade("Not yet support for changing primary key");var W=y.objectStore(D.name);D.add.forEach(function(ce){return Nt(W,ce)}),D.change.forEach(function(ce){W.deleteIndex(ce.name),Nt(W,ce)}),D.del.forEach(function(ce){return W.deleteIndex(ce)})}),w._cfg.contentUpgrade);if(z&&w._cfg.version>v)return ct(m,y),k._memoizedTables={},T=Ma(F),U.del.forEach(function(D){T[D]=R[D]}),_e(m,[m.Transaction.prototype]),Jt(m,[m.Transaction.prototype],ke(T),T),k.schema=T,(I=fn(z))&&Bn(),F=Y.follow(function(){var D;(j=z(k))&&I&&(D=sn.bind(null,null),j.then(D,D))}),j&&typeof j.then=="function"?Y.resolve(j):F.then(function(){return j})}),C.push(function(T){var I,j,R=w._cfg.dbschema;I=R,j=T,[].slice.call(j.db.objectStoreNames).forEach(function(F){return I[F]==null&&j.db.deleteObjectStore(F)}),_e(m,[m.Transaction.prototype]),Jt(m,[m.Transaction.prototype],m._storeNames,m._dbSchema),k.schema=m._dbSchema}),C.push(function(T){m.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(m.idbdb.version/10)===w._cfg.version?(m.idbdb.deleteObjectStore("$meta"),delete m._dbSchema.$meta,m._storeNames=m._storeNames.filter(function(I){return I!=="$meta"})):T.objectStore("$meta").put(w._cfg.version,"version"))})}),(function w(){return C.length?Y.resolve(C.shift()(k.idbtrans)).then(w):Y.resolve()})().then(function(){Xt(_,y)}))}).catch(c);var g,S;ke(s).forEach(function(b){Dt(n,b,s[b].primKey,s[b].indexes)}),ct(e,n),Y.follow(function(){return e.on.populate.fire(i)}).catch(c)})}function De(e,t){Xt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=$t(0,e.idbdb,t);ut(e,e._dbSchema,t);for(var a=0,s=ze(n,e._dbSchema).change;a<s.length;a++){var i=(c=>{if(c.change.length||c.recreate)return console.warn("Unable to patch indexes of table ".concat(c.name," because it has changes on the type of index or primary key.")),{value:void 0};var u=t.objectStore(c.name);c.add.forEach(function(g){wt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name,".").concat(g.src)),Nt(u,g)})})(s[a]);if(typeof i=="object")return i.value}}function ze(e,t){var n,a={del:[],add:[],change:[]};for(n in e)t[n]||a.del.push(n);for(n in t){var s=e[n],i=t[n];if(s){var c={name:n,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto)c.recreate=!0,a.change.push(c);else{var u=s.idxByName,g=i.idxByName,S=void 0;for(S in u)g[S]||c.del.push(S);for(S in g){var b=u[S],m=g[S];b?b.src!==m.src&&c.change.push(m):c.add.push(m)}(0<c.del.length||0<c.add.length||0<c.change.length)&&a.change.push(c)}}else a.add.push([n,i])}return a}function Dt(e,t,n,a){var s=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});a.forEach(function(i){return Nt(s,i)})}function Xt(e,t){ke(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(wt&&console.debug("Dexie: Creating missing table",n),Dt(t,n,e[n].primKey,e[n].indexes))})}function Nt(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function $t(e,t,n){var a={};return Zn(t.objectStoreNames,0).forEach(function(s){for(var i=n.objectStore(s),c=ht(Pe(S=i.keyPath),S||"",!0,!1,!!i.autoIncrement,S&&typeof S!="string",!0),u=[],g=0;g<i.indexNames.length;++g){var b=i.index(i.indexNames[g]),S=b.keyPath,b=ht(b.name,S,!!b.unique,!!b.multiEntry,!1,S&&typeof S!="string",!1);u.push(b)}a[s]=Re(s,c,u)}),a}function ut(e,t,n){for(var a=n.db.objectStoreNames,s=0;s<a.length;++s){var i=a[s],c=n.objectStore(i);e._hasGetAll="getAll"in c;for(var u=0;u<c.indexNames.length;++u){var g,S=c.indexNames[u],b=c.index(S).keyPath,b=typeof b=="string"?b:"["+Zn(b).join("+")+"]";t[i]&&(g=t[i].idxByName[b])&&(g.name=S,delete t[i].idxByName[b],t[i].idxByName[S]=g)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ae.WorkerGlobalScope&&ae instanceof ae.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Yt(e){return e.split(",").map(function(t,n){var s=t.split(":"),a=(a=s[1])==null?void 0:a.trim(),s=(t=s[0].trim()).replace(/([&*]|\+\+)/g,""),i=/^\[/.test(s)?s.match(/^\[(.*)\]$/)[1].split("+"):s;return ht(s,i||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ie(i),n===0,a)})}Zt.prototype._createTableSchema=Re,Zt.prototype._parseIndexSyntax=Yt,Zt.prototype._parseStoresSpec=function(e,t){var n=this;ke(e).forEach(function(a){if(e[a]!==null){var s=n._parseIndexSyntax(e[a]),i=s.shift();if(!i)throw new Z.Schema("Invalid schema for table "+a+": "+e[a]);if(i.unique=!0,i.multi)throw new Z.Schema("Primary key cannot be multiEntry*");s.forEach(function(c){if(c.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!c.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),i=n._createTableSchema(a,i,s),t[a]=i}})},Zt.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?Ce(this._cfg.storesSource,n):n,t._versions),a={},s={};return n.forEach(function(i){Ce(a,i._cfg.storesSource),s=i._cfg.dbschema={},i._parseStoresSpec(a,s)}),t._dbSchema=s,_e(t,[t._allTables,t,t.Transaction.prototype]),Jt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],ke(s),s),t._storeNames=ke(s),this},Zt.prototype.upgrade=function(e){return this._cfg.contentUpgrade=Nn(this._cfg.contentUpgrade||we,e),this};var Qt=Zt;function Zt(){}function B(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new yt(on,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function K(e){return e&&typeof e.databases=="function"}function it(e){return rn(function(){return X.letThrough=!0,e()})}function Cn(e){return!("from"in e)}var se=function(e,t){var n;if(!this)return n=new se,e&&"d"in e&&Ce(n,e),n;Ce(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Rn(e,t,n){var a=fe(t,n);if(!isNaN(a)){if(0<a)throw RangeError();if(Cn(e))return Ce(e,{from:t,to:n,d:1});var a=e.l,s=e.r;if(fe(n,e.from)<0)return a?Rn(a,t,n):e.l={from:t,to:n,d:1,l:null,r:null},lr(e);if(0<fe(t,e.to))return s?Rn(s,t,n):e.r={from:t,to:n,d:1,l:null,r:null},lr(e);fe(t,e.from)<0&&(e.from=t,e.l=null,e.d=s?s.d+1:1),0<fe(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,a&&!e.l&&Mn(e,a),s&&t&&Mn(e,s)}}function Mn(e,t){Cn(t)||(function n(a,s){var i=s.from,c=s.l,u=s.r;Rn(a,i,s.to),c&&n(a,c),u&&n(a,u)})(e,t)}function Ra(e,t){var n=Vn(t),a=n.next();if(!a.done)for(var s=a.value,i=Vn(e),c=i.next(s.from),u=c.value;!a.done&&!c.done;){if(fe(u.from,s.to)<=0&&0<=fe(u.to,s.from))return!0;fe(s.from,u.from)<0?s=(a=n.next(u.from)).value:u=(c=i.next(s.from)).value}return!1}function Vn(e){var t=Cn(e)?null:{s:0,n:e};return{next:function(n){for(var a=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,a)for(;t.n.l&&fe(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!a||fe(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function lr(e){var t,n,a,s=(((s=e.r)==null?void 0:s.d)||0)-(((s=e.l)==null?void 0:s.d)||0),s=1<s?"r":s<-1?"l":"";s&&(t=s=="r"?"l":"r",n=G({},e),a=e[s],e.from=a.from,e.to=a.to,e[s]=a[s],n[s]=a[t],(e[t]=n).d=cr(n)),e.d=cr(e)}function cr(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function St(e,t){return ke(t).forEach(function(n){e[n]?Mn(e[n],t[n]):e[n]=(function a(s){var i,c,u={};for(i in s)oe(s,i)&&(c=s[i],u[i]=!c||typeof c!="object"||Ha.has(c.constructor)?c:a(c));return u})(t[n])}),e}function Lt(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Ra(t[n],e[n])})}kt(se.prototype,((at={add:function(e){return Mn(this,e),this},addKey:function(e){return Rn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Rn(t,n,n)}),this},hasKey:function(e){var t=Vn(this).next(e).value;return t&&fe(t.from,e)<=0&&0<=fe(t.to,e)}})[Aa]=function(){return Vn(this)},at));var pt={},ha={},pa=!1;function Yn(e){St(ha,e),pa||(pa=!0,setTimeout(function(){pa=!1,va(ha,!(ha={}))},0))}function va(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var a=0,s=Object.values(pt);a<s.length;a++)Va(u=s[a],e,n,t);else for(var i in e){var c,u,i=/^idb\:\/\/(.*)\/(.*)\//.exec(i);i&&(c=i[1],i=i[2],u=pt["idb://".concat(c,"/").concat(i)])&&Va(u,e,n,t)}n.forEach(function(g){return g()})}function Va(e,t,n,a){for(var s=[],i=0,c=Object.entries(e.queries.query);i<c.length;i++){for(var u=c[i],g=u[0],S=[],b=0,m=u[1];b<m.length;b++){var v=m[b];Lt(t,v.obsSet)?v.subscribers.forEach(function(E){return n.add(E)}):a&&S.push(v)}a&&s.push([g,S])}if(a)for(var k=0,y=s;k<y.length;k++){var C=y[k],g=C[0],S=C[1];e.queries.query[g]=S}}function ur(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?je(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var a=t.openCanceller,s=Math.round(10*e.verno),i=!1;function c(){if(t.openCanceller!==a)throw new Z.DatabaseClosed("db.open() was cancelled")}function u(){return new Y(function(v,k){if(c(),!n)throw new Z.MissingAPI;var y=e.name,C=t.autoSchema||!s?n.open(y):n.open(y,s);if(!C)throw new Z.MissingAPI;C.onerror=Ze(k),C.onblocked=me(e._fireOnBlocked),C.onupgradeneeded=me(function(E){var _;b=C.transaction,t.autoSchema&&!e._options.allowEmptyDB?(C.onerror=q,b.abort(),C.result.close(),(_=n.deleteDatabase(y)).onsuccess=_.onerror=me(function(){k(new Z.NoSuchDatabase("Database ".concat(y," doesnt exist")))})):(b.onerror=Ze(k),_=E.oldVersion>Math.pow(2,62)?0:E.oldVersion,m=_<1,e.idbdb=C.result,i&&De(e,b),Le(e,_/10,b,k))},k),C.onsuccess=me(function(){b=null;var E,_,w,T,I,j,R=e.idbdb=C.result,F=Zn(R.objectStoreNames);if(0<F.length)try{var U=R.transaction((I=F).length===1?I[0]:I,"readonly");if(t.autoSchema)j=R,T=U,(w=e).verno=j.version/10,T=w._dbSchema=$t(0,j,T),w._storeNames=Zn(j.objectStoreNames,0),Jt(w,[w._allTables],ke(T),T);else if(ut(e,e._dbSchema,U),_=U,((_=ze($t(0,(E=e).idbdb,_),E._dbSchema)).add.length||_.change.some(function(z){return z.add.length||z.change.length}))&&!i)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),R.close(),s=R.version+1,i=!0,v(u());ct(e,U)}catch{}_n.push(e),R.onversionchange=me(function(z){t.vcFired=!0,e.on("versionchange").fire(z)}),R.onclose=me(function(){e.close({disableAutoOpen:!1})}),m&&(F=e._deps,I=y,K(j=F.indexedDB)||I===on||B(j,F.IDBKeyRange).put({name:I}).catch(we)),v()},k)}).catch(function(v){switch(v?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),u();break;case"VersionError":if(0<s)return s=0,u()}return Y.reject(v)})}var g,S=t.dbReadyResolve,b=null,m=!1;return Y.race([a,(typeof navigator>"u"?Y.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(v){function k(){return indexedDB.databases().finally(v)}g=setInterval(k,100),k()}).finally(function(){return clearInterval(g)}):Promise.resolve()).then(u)]).then(function(){return c(),t.onReadyBeingFired=[],Y.resolve(it(function(){return e.on.ready.fire(e.vip)})).then(function v(){var k;if(0<t.onReadyBeingFired.length)return k=t.onReadyBeingFired.reduce(Nn,we),t.onReadyBeingFired=[],Y.resolve(it(function(){return k(e.vip)})).then(v)})}).finally(function(){t.openCanceller===a&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(v){t.dbOpenError=v;try{b&&b.abort()}catch{}return a===t.openCanceller&&e._close(),je(v)}).finally(function(){t.openComplete=!0,S()}).then(function(){var v;return m&&(v={},e.tables.forEach(function(k){k.schema.indexes.forEach(function(y){y.name&&(v["idb://".concat(e.name,"/").concat(k.name,"/").concat(y.name)]=new se(-1/0,[[[]]]))}),v["idb://".concat(e.name,"/").concat(k.name,"/")]=v["idb://".concat(e.name,"/").concat(k.name,"/:dels")]=new se(-1/0,[[[]]])}),et(ot).fire(v),va(v,!0)),e})}function ma(e){function t(i){return e.next(i)}var n=s(t),a=s(function(i){return e.throw(i)});function s(i){return function(u){var u=i(u),g=u.value;return u.done?g:g&&typeof g.then=="function"?g.then(n,a):ie(g)?Promise.all(g).then(n,a):n(g)}}return s(t)()}function ga(e,t,n){for(var a=ie(e)?e.slice():[e],s=0;s<n;++s)a.push(t);return a}var Ya={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return G(G({},e),{table:function(a){var n=e.table(a),a=n.schema,s={},i=[];function c(v,k,y){var w=Vt(v),C=s[w]=s[w]||[],E=v==null?0:typeof v=="string"?1:v.length,_=0<k,w=G(G({},y),{name:_?"".concat(w,"(virtual-from:").concat(y.name,")"):y.name,lowLevelIndex:y,isVirtual:_,keyTail:k,keyLength:E,extractKey:Ve(v),unique:!_&&y.unique});return C.push(w),w.isPrimaryKey||i.push(w),1<E&&c(E===2?v[0]:v.slice(0,E-1),k+1,y),C.sort(function(T,I){return T.keyTail-I.keyTail}),w}var u=c(a.primaryKey.keyPath,0,a.primaryKey);s[":id"]=[u];for(var g=0,S=a.indexes;g<S.length;g++){var b=S[g];c(b.keyPath,0,b)}function m(v){var k,y=v.query.index;return y.isVirtual?G(G({},v),{query:{index:y.lowLevelIndex,range:(k=v.query.range,y=y.keyTail,{type:k.type===1?2:k.type,lower:ga(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,y),lowerOpen:!0,upper:ga(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,y),upperOpen:!0})}}):v}return G(G({},n),{schema:G(G({},a),{primaryKey:u,indexes:i,getIndexByKeyPath:function(v){return(v=s[Vt(v)])&&v[0]}}),count:function(v){return n.count(m(v))},query:function(v){return n.query(m(v))},openCursor:function(v){var k=v.query.index,y=k.keyTail,C=k.keyLength;return k.isVirtual?n.openCursor(m(v)).then(function(_){return _&&E(_)}):n.openCursor(v);function E(_){return Object.create(_,{continue:{value:function(w){w!=null?_.continue(ga(w,v.reverse?e.MAX_KEY:e.MIN_KEY,y)):v.unique?_.continue(_.key.slice(0,C).concat(v.reverse?e.MIN_KEY:e.MAX_KEY,y)):_.continue()}},continuePrimaryKey:{value:function(w,T){_.continuePrimaryKey(ga(w,e.MAX_KEY,y),T)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var w=_.key;return C===1?w[0]:w.slice(0,C)}},value:{get:function(){return _.value}}})}}})}})}};function ba(e,t,n,a){return n=n||{},a=a||"",ke(e).forEach(function(s){var i,c,u;oe(t,s)?(i=e[s],c=t[s],typeof i=="object"&&typeof c=="object"&&i&&c?(u=Ta(i))!==Ta(c)?n[a+s]=t[s]:u==="Object"?ba(i,c,n,a+s+"."):i!==c&&(n[a+s]=t[s]):i!==c&&(n[a+s]=t[s])):n[a+s]=void 0}),ke(t).forEach(function(s){oe(e,s)||(n[a+s]=t[s])}),n}function qt(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Br={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return G(G({},e),{table:function(t){var n=e.table(t),a=n.schema.primaryKey;return G(G({},n),{mutate:function(s){var i=X.trans,c=i.table(t).hook,u=c.deleting,g=c.creating,S=c.updating;switch(s.type){case"add":if(g.fire===we)break;return i._promise("readwrite",function(){return b(s)},!0);case"put":if(g.fire===we&&S.fire===we)break;return i._promise("readwrite",function(){return b(s)},!0);case"delete":if(u.fire===we)break;return i._promise("readwrite",function(){return b(s)},!0);case"deleteRange":if(u.fire===we)break;return i._promise("readwrite",function(){return(function m(v,k,y){return n.query({trans:v,values:!1,query:{index:a,range:k},limit:y}).then(function(C){var E=C.result;return b({type:"delete",keys:E,trans:v}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):E.length<y?{failures:[],numFailures:0,lastResult:void 0}:m(v,G(G({},k),{lower:E[E.length-1],lowerOpen:!0}),y)})})})(s.trans,s.range,1e4)},!0)}return n.mutate(s);function b(m){var v,k,y,C=X.trans,E=m.keys||qt(a,m);if(E)return(m=m.type==="add"||m.type==="put"?G(G({},m),{keys:E}):G({},m)).type!=="delete"&&(m.values=ye([],m.values)),m.keys&&(m.keys=ye([],m.keys)),v=n,y=E,((k=m).type==="add"?Promise.resolve([]):v.getMany({trans:k.trans,keys:y,cache:"immutable"})).then(function(_){var w=E.map(function(T,I){var j,R,F,U=_[I],z={onerror:null,onsuccess:null};return m.type==="delete"?u.fire.call(z,T,U,C):m.type==="add"||U===void 0?(j=g.fire.call(z,T,m.values[I],C),T==null&&j!=null&&(m.keys[I]=T=j,a.outbound||gt(m.values[I],a.keyPath,T))):(j=ba(U,m.values[I]),(R=S.fire.call(z,j,T,U,C))&&(F=m.values[I],Object.keys(R).forEach(function(D){oe(F,D)?F[D]=R[D]:gt(F,D,R[D])}))),z});return n.mutate(m).then(function(T){for(var I=T.failures,j=T.results,R=T.numFailures,T=T.lastResult,F=0;F<E.length;++F){var U=(j||E)[F],z=w[F];U==null?z.onerror&&z.onerror(I[F]):z.onsuccess&&z.onsuccess(m.type==="put"&&_[F]?m.values[F]:U)}return{failures:I,results:j,numFailures:R,lastResult:T}}).catch(function(T){return w.forEach(function(I){return I.onerror&&I.onerror(T)}),Promise.reject(T)})});throw new Error("Keys missing")}}})}})}};function en(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var a=[],s=0,i=0;s<t.keys.length&&i<e.length;++s)fe(t.keys[s],e[i])===0&&(a.push(n?bt(t.values[s]):t.values[s]),++i);return a.length===e.length?a:null}catch{return null}}var _r={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return G(G({},n),{getMany:function(a){var s;return a.cache?(s=en(a.keys,a.trans._cache,a.cache==="clone"))?Y.resolve(s):n.getMany(a).then(function(i){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?bt(i):i},i}):n.getMany(a)},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),n.mutate(a)}})}}}};function dr(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function za(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var fr={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new se(e.MIN_KEY,e.MAX_KEY);return G(G({},e),{transaction:function(a,s,i){if(X.subscr&&s!=="readonly")throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(X.querier));return e.transaction(a,s,i)},table:function(a){function s(E){var C,E=E.query;return[C=E.index,new se((C=(E=E.range).lower)!=null?C:e.MIN_KEY,(C=E.upper)!=null?C:e.MAX_KEY)]}var i=e.table(a),c=i.schema,u=c.primaryKey,g=c.indexes,S=u.extractKey,b=u.outbound,m=u.autoIncrement&&g.filter(function(y){return y.compound&&y.keyPath.includes(u.keyPath)}),v=G(G({},i),{mutate:function(y){function C(W){return W="idb://".concat(t,"/").concat(a,"/").concat(W),I[W]||(I[W]=new se)}var E,_,w,T=y.trans,I=y.mutatedParts||(y.mutatedParts={}),j=C(""),R=C(":dels"),F=y.type,z=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[qt(u,y).filter(function(W){return W}),y.values]:[],U=z[0],z=z[1],D=y.trans._cache;return ie(U)?(j.addKeys(U),(F=F==="delete"||U.length===z.length?en(U,D):null)||R.addKeys(U),(F||z)&&(E=C,_=F,w=z,c.indexes.forEach(function(W){var ce=E(W.name||"");function be(ue){return ue!=null?W.extractKey(ue):null}function ee(ue){W.multiEntry&&ie(ue)?ue.forEach(function(Te){return ce.addKey(Te)}):ce.addKey(ue)}(_||w).forEach(function(ue,Oe){var We=_&&be(_[Oe]),Oe=w&&be(w[Oe]);fe(We,Oe)!==0&&(We!=null&&ee(We),Oe!=null)&&ee(Oe)})}))):U?(z={from:(D=U.lower)!=null?D:e.MIN_KEY,to:(F=U.upper)!=null?F:e.MAX_KEY},R.add(z),j.add(z)):(j.add(n),R.add(n),c.indexes.forEach(function(W){return C(W.name).add(n)})),i.mutate(y).then(function(W){return!U||y.type!=="add"&&y.type!=="put"||(j.addKeys(W.results),m&&m.forEach(function(ce){for(var be=y.values.map(function(We){return ce.extractKey(We)}),ee=ce.keyPath.findIndex(function(We){return We===u.keyPath}),ue=0,Te=W.results.length;ue<Te;++ue)be[ue][ee]=W.results[ue];C(ce.name).addKeys(be)})),T.mutatedParts=St(T.mutatedParts||{},I),W})}}),k={get:function(y){return[u,new se(y.key)]},getMany:function(y){return[u,new se().addKeys(y.keys)]},count:s,query:s,openCursor:s};return ke(k).forEach(function(y){v[y]=function(C){var E=X.subscr,_=!!E,w=dr(X,i)&&za(y,C)?C.obsSet={}:E;if(_){var T,E=function(z){return z="idb://".concat(t,"/").concat(a,"/").concat(z),w[z]||(w[z]=new se)},I=E(""),j=E(":dels"),_=k[y](C),R=_[0],_=_[1];if((y==="query"&&R.isPrimaryKey&&!C.values?j:E(R.name||"")).add(_),!R.isPrimaryKey){if(y!=="count")return T=y==="query"&&b&&C.values&&i.query(G(G({},C),{values:!1})),i[y].apply(this,arguments).then(function(z){if(y==="query"){if(b&&C.values)return T.then(function(be){return be=be.result,I.addKeys(be),z});var D=C.values?z.result.map(S):z.result;(C.values?I:j).addKeys(D)}else{var W,ce;if(y==="openCursor")return ce=C.values,(W=z)&&Object.create(W,{key:{get:function(){return j.addKey(W.primaryKey),W.key}},primaryKey:{get:function(){var be=W.primaryKey;return j.addKey(be),be}},value:{get:function(){return ce&&I.addKey(W.primaryKey),W.value}}})}return z});j.add(n)}}return i[y].apply(this,arguments)}}),v}})}};function Ua(e,t,n){var a;return n.numFailures===0?t:t.type==="deleteRange"||(a=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===a)?null:(a=G({},t),ie(a.keys)&&(a.keys=a.keys.filter(function(s,i){return!(i in n.failures)})),"values"in a&&ie(a.values)&&(a.values=a.values.filter(function(s,i){return!(i in n.failures)})),a)}function ya(e,t){return n=e,((a=t).lower===void 0||(a.lowerOpen?0<fe(n,a.lower):0<=fe(n,a.lower)))&&(n=e,(a=t).upper===void 0||(a.upperOpen?fe(n,a.upper)<0:fe(n,a.upper)<=0));var n,a}function Wa(e,t,n,a,s,i){var c,u,g,S,b,m;return!n||n.length===0||(c=t.query.index,u=c.multiEntry,g=t.query.range,S=a.schema.primaryKey.extractKey,b=c.extractKey,m=(c.lowLevelIndex||c).extractKey,(a=n.reduce(function(v,k){var y=v,C=[];if(k.type==="add"||k.type==="put")for(var E=new se,_=k.values.length-1;0<=_;--_){var w,T=k.values[_],I=S(T);!E.hasKey(I)&&(w=b(T),u&&ie(w)?w.some(function(z){return ya(z,g)}):ya(w,g))&&(E.addKey(I),C.push(T))}switch(k.type){case"add":var j=new se().addKeys(t.values?v.map(function(D){return S(D)}):v),y=v.concat(t.values?C.filter(function(D){return D=S(D),!j.hasKey(D)&&(j.addKey(D),!0)}):C.map(function(D){return S(D)}).filter(function(D){return!j.hasKey(D)&&(j.addKey(D),!0)}));break;case"put":var R=new se().addKeys(k.values.map(function(D){return S(D)}));y=v.filter(function(D){return!R.hasKey(t.values?S(D):D)}).concat(t.values?C:C.map(function(D){return S(D)}));break;case"delete":var F=new se().addKeys(k.keys);y=v.filter(function(D){return!F.hasKey(t.values?S(D):D)});break;case"deleteRange":var U=k.range;y=v.filter(function(D){return!ya(S(D),U)})}return y},e))===e)?e:(a.sort(function(v,k){return fe(m(v),m(k))||fe(S(v),S(k))}),t.limit&&t.limit<1/0&&(a.length>t.limit?a.length=t.limit:e.length===t.limit&&a.length<t.limit&&(s.dirty=!0)),i?Object.freeze(a):a)}function Ga(e,t){return fe(e.lower,t.lower)===0&&fe(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function Mr(e,t){return((n,a,s,i)=>{if(n===void 0)return a!==void 0?-1:0;if(a===void 0)return 1;if((n=fe(n,a))===0){if(s&&i)return 0;if(s)return 1;if(i)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,a,s,i)=>{if(n===void 0)return a!==void 0?1:0;if(a===void 0)return-1;if((n=fe(n,a))===0){if(s&&i)return 0;if(s)return-1;if(i)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function Pr(e,t,n,a){e.subscribers.add(n),a.addEventListener("abort",function(){var s,i;e.subscribers.delete(n),e.subscribers.size===0&&(s=e,i=t,setTimeout(function(){s.subscribers.size===0&&nn(i,s)},3e3))})}var hr={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return G(G({},e),{transaction:function(n,a,s){var i,c,u=e.transaction(n,a,s);return a==="readwrite"&&(s=(i=new AbortController).signal,u.addEventListener("abort",(c=function(g){return function(){if(i.abort(),a==="readwrite"){for(var S=new Set,b=0,m=n;b<m.length;b++){var v=m[b],k=pt["idb://".concat(t,"/").concat(v)];if(k){var y=e.table(v),C=k.optimisticOps.filter(function(W){return W.trans===u});if(u._explicit&&g&&u.mutatedParts)for(var E=0,_=Object.values(k.queries.query);E<_.length;E++)for(var w=0,T=(R=_[E]).slice();w<T.length;w++)Lt((F=T[w]).obsSet,u.mutatedParts)&&(nn(R,F),F.subscribers.forEach(function(W){return S.add(W)}));else if(0<C.length){k.optimisticOps=k.optimisticOps.filter(function(W){return W.trans!==u});for(var I=0,j=Object.values(k.queries.query);I<j.length;I++)for(var R,F,U,z=0,D=(R=j[I]).slice();z<D.length;z++)(F=D[z]).res!=null&&u.mutatedParts&&(g&&!F.dirty?(U=Object.isFrozen(F.res),U=Wa(F.res,F.req,C,y,F,U),F.dirty?(nn(R,F),F.subscribers.forEach(function(W){return S.add(W)})):U!==F.res&&(F.res=U,F.promise=Y.resolve({result:U}))):(F.dirty&&nn(R,F),F.subscribers.forEach(function(W){return S.add(W)})))}}}S.forEach(function(W){return W()})}}})(!1),{signal:s}),u.addEventListener("error",c(!1),{signal:s}),u.addEventListener("complete",c(!0),{signal:s})),u},table:function(n){var a=e.table(n),s=a.schema.primaryKey;return G(G({},a),{mutate:function(i){var c,u=X.trans;return!s.outbound&&u.db._options.cache!=="disabled"&&!u.explicit&&u.idbtrans.mode==="readwrite"&&(c=pt["idb://".concat(t,"/").concat(n)])?(u=a.mutate(i),i.type!=="add"&&i.type!=="put"||!(50<=i.values.length||qt(s,i).some(function(g){return g==null}))?(c.optimisticOps.push(i),i.mutatedParts&&Yn(i.mutatedParts),u.then(function(g){0<g.numFailures&&(nn(c.optimisticOps,i),(g=Ua(0,i,g))&&c.optimisticOps.push(g),i.mutatedParts)&&Yn(i.mutatedParts)}),u.catch(function(){nn(c.optimisticOps,i),i.mutatedParts&&Yn(i.mutatedParts)})):u.then(function(g){var S=Ua(0,G(G({},i),{values:i.values.map(function(b,m){var v;return g.failures[m]?b:(gt(v=(v=s.keyPath)!=null&&v.includes(".")?bt(b):G({},b),s.keyPath,g.results[m]),v)})}),g);c.optimisticOps.push(S),queueMicrotask(function(){return i.mutatedParts&&Yn(i.mutatedParts)})}),u):a.mutate(i)},query:function(i){var c,u,g,S,b,m,v;return dr(X,a)&&za("query",i)?(c=((g=X.trans)==null?void 0:g.db._options.cache)==="immutable",u=(g=X).requery,g=g.signal,m=((k,y,C,E)=>{var _=pt["idb://".concat(k,"/").concat(y)];if(!_)return[];if(!(k=_.queries[C]))return[null,!1,_,null];var w=k[(E.query?E.query.index.name:null)||""];if(!w)return[null,!1,_,null];switch(C){case"query":var T=w.find(function(I){return I.req.limit===E.limit&&I.req.values===E.values&&Ga(I.req.query.range,E.query.range)});return T?[T,!0,_,w]:[w.find(function(I){return("limit"in I.req?I.req.limit:1/0)>=E.limit&&(!E.values||I.req.values)&&Mr(I.req.query.range,E.query.range)}),!1,_,w];case"count":return T=w.find(function(I){return Ga(I.req.query.range,E.query.range)}),[T,!!T,_,w]}})(t,n,"query",i),v=m[0],S=m[2],b=m[3],v&&m[1]?v.obsSet=i.obsSet:(m=a.query(i).then(function(k){var y=k.result;if(v&&(v.res=y),c){for(var C=0,E=y.length;C<E;++C)Object.freeze(y[C]);Object.freeze(y)}else k.result=bt(y);return k}).catch(function(k){return b&&v&&nn(b,v),Promise.reject(k)}),v={obsSet:i.obsSet,promise:m,subscribers:new Set,type:"query",req:i,dirty:!1},b?b.push(v):(b=[v],(S=S||(pt["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[i.query.index.name||""]=b)),Pr(v,b,u,g),v.promise.then(function(k){return{result:Wa(k.result,i,S?.optimisticOps,a,v,c)}})):a.query(i)}})}})}};function zn(e,t){return new Proxy(e,{get:function(n,a,s){return a==="db"?t:Reflect.get(n,a,s)}})}Ue.prototype.version=function(e){if(isNaN(e)||e<.1)throw new Z.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(a){return a._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Ee),n.stores({}),this._state.autoSchema=!1),n},Ue.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||X.letThrough||this._vip)?e():new Y(function(n,a){if(t._state.openComplete)return a(new Z.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void a(new Z.DatabaseClosed);t.open().catch(we)}t._state.dbReadyPromise.then(n,a)}).then(e)},Ue.prototype.use=function(s){var t=s.stack,n=s.create,a=s.level,s=s.name,i=(s&&this.unuse({stack:t,name:s}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:a??10,name:s}),i.sort(function(c,u){return c.level-u.level}),this},Ue.prototype.unuse=function(e){var t=e.stack,n=e.name,a=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return a?s.create!==a:!!n&&s.name!==n})),this},Ue.prototype.open=function(){var e=this;return gn(Ke,function(){return ur(e)})},Ue.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=_n.indexOf(this);if(0<=t&&_n.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new Y(function(n){e.dbReadyResolve=n}),e.openCanceller=new Y(function(n,a){e.cancelOpen=a}))},Ue.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new Z.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new Z.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},Ue.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),a=this._state;return new Y(function(s,i){function c(){t.close(e);var u=t._deps.indexedDB.deleteDatabase(t.name);u.onsuccess=me(function(){var g,S,b;g=t._deps,S=t.name,K(b=g.indexedDB)||S===on||B(b,g.IDBKeyRange).delete(S).catch(we),s()}),u.onerror=Ze(i),u.onblocked=t._fireOnBlocked}if(n)throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(c):c()})},Ue.prototype.backendDB=function(){return this.idbdb},Ue.prototype.isOpen=function(){return this.idbdb!==null},Ue.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},Ue.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ue.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ue.prototype,"tables",{get:function(){var e=this;return ke(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),Ue.prototype.transaction=function(){var e=(function(t,n,a){var s=arguments.length;if(s<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(s-1);--s;)i[s-1]=arguments[s];return a=i.pop(),[t,Pa(i),a]}).apply(this,arguments);return this._transaction.apply(this,e)},Ue.prototype._transaction=function(e,t,n){var a,s,i=this,c=X.trans,u=(c&&c.db===this&&e.indexOf("!")===-1||(c=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(s=t.map(function(S){if(S=S instanceof i.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),e=="r"||e===ca)a=ca;else{if(e!="rw"&&e!=ua)throw new Z.InvalidArgument("Invalid transaction mode: "+e);a=ua}if(c){if(c.mode===ca&&a===ua){if(!u)throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&s.forEach(function(S){if(c&&c.storeNames.indexOf(S)===-1){if(!u)throw new Z.SubTransaction("Table "+S+" not included in parent transaction.");c=null}}),u&&c&&!c.active&&(c=null)}}catch(S){return c?c._promise(null,function(b,m){m(S)}):je(S)}var g=(function S(b,m,v,k,y){return Y.resolve().then(function(){var w=X.transless||X,C=b._createTransaction(m,v,b._dbSchema,k),w=(C.explicit=!0,{trans:C,transless:w});if(k)C.idbtrans=k.idbtrans;else try{C.create(),C.idbtrans._explicit=!0,b._state.PR1398_maxLoop=3}catch(T){return T.name===na.InvalidState&&b.isOpen()&&0<--b._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),b.close({disableAutoOpen:!1}),b.open().then(function(){return S(b,m,v,null,y)})):je(T)}var E,_=fn(y),w=(_&&Bn(),Y.follow(function(){var T;(E=y.call(C,C))&&(_?(T=sn.bind(null,null),E.then(T,T)):typeof E.next=="function"&&typeof E.throw=="function"&&(E=ma(E)))},w));return(E&&typeof E.then=="function"?Y.resolve(E).then(function(T){return C.active?T:je(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):w.then(function(){return E})).then(function(T){return k&&C._resolve(),C._completion.then(function(){return T})}).catch(function(T){return C._reject(T),je(T)})})}).bind(null,this,a,s,c,n);return c?c._promise(a,g,"lock"):X.trans?gn(X.transless,function(){return i._whenReady(g)}):this._whenReady(g)},Ue.prototype.table=function(e){if(oe(this._allTables,e))return this._allTables[e];throw new Z.InvalidTable("Table ".concat(e," does not exist"))};var yt=Ue;function Ue(e,t){var n,a,s,i,c,u=this,g=(this._middlewares={},this.verno=0,Ue.dependencies),g=(this._options=t=G({addons:Ue.addons,autoOpen:!0,indexedDB:g.indexedDB,IDBKeyRange:g.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),S=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:we,dbReadyPromise:null,cancelOpen:we,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),b=(S.dbReadyPromise=new Y(function(m){S.dbReadyResolve=m}),S.openCanceller=new Y(function(m,v){S.cancelOpen=v}),this._state=S,this.name=e,this.on=o(this,"populate","blocked","versionchange","close",{ready:[Nn,we]}),this.once=function(m,v){var k=function(){for(var y=[],C=0;C<arguments.length;C++)y[C]=arguments[C];u.on(m).unsubscribe(k),v.apply(u,y)};return u.on(m,k)},this.on.ready.subscribe=ea(this.on.ready.subscribe,function(m){return function(v,k){Ue.vip(function(){var y,C=u._state;C.openComplete?(C.dbOpenError||Y.resolve().then(v),k&&m(v)):C.onReadyBeingFired?(C.onReadyBeingFired.push(v),k&&m(v)):(m(v),y=u,k||m(function E(){y.on.ready.unsubscribe(v),y.on.ready.unsubscribe(E)}))})}}),this.Collection=(n=this,l(H.prototype,function(E,C){this.db=n;var k=rr,y=null;if(C)try{k=C()}catch(w){y=w}var C=E._ctx,E=C.table,_=E.hook.reading.fire;this._ctx={table:E,index:C.index,isPrimKey:!C.index||E.schema.primKey.keyPath&&C.index===E.schema.primKey.name,range:k,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:y,or:C.or,valueMapper:_!==Dn?_:null}})),this.Table=(a=this,l(ne.prototype,function(m,v,k){this.db=a,this._tx=k,this.name=m,this.schema=v,this.hook=a._allTables[m]?a._allTables[m].hook:o(null,{creating:[Za,we],reading:[kr,Dn],updating:[$r,we],deleting:[wr,we]})})),this.Transaction=(s=this,l(It.prototype,function(m,v,k,y,C){var E=this;m!=="readonly"&&v.forEach(function(_){_=(_=k[_])==null?void 0:_.yProps,_&&(v=v.concat(_.map(function(w){return w.updatesTable})))}),this.db=s,this.mode=m,this.storeNames=v,this.schema=k,this.chromeTransactionDurability=y,this.idbtrans=null,this.on=o(this,"complete","error","abort"),this.parent=C||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Y(function(_,w){E._resolve=_,E._reject=w}),this._completion.then(function(){E.active=!1,E.on.complete.fire()},function(_){var w=E.active;return E.active=!1,E.on.error.fire(_),E.parent?E.parent._reject(_):w&&E.idbtrans&&E.idbtrans.abort(),je(_)})})),this.Version=(i=this,l(Qt.prototype,function(m){this.db=i,this._cfg={version:m,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(c=this,l(Se.prototype,function(m,v,k){if(this.db=c,this._ctx={table:m,index:v===":id"?null:v,or:k},this._cmp=this._ascending=fe,this._descending=function(y,C){return fe(C,y)},this._max=function(y,C){return 0<fe(y,C)?y:C},this._min=function(y,C){return fe(y,C)<0?y:C},this._IDBKeyRange=c._deps.IDBKeyRange,!this._IDBKeyRange)throw new Z.MissingAPI})),this.on("versionchange",function(m){0<m.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(m){!m.newVersion||m.newVersion<m.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(m.oldVersion/10))}),this._maxKey=Ie(t.IDBKeyRange),this._createTransaction=function(m,v,k,y){return new u.Transaction(m,v,k,u._options.chromeTransactionDurability,y)},this._fireOnBlocked=function(m){u.on("blocked").fire(m),_n.filter(function(v){return v.name===u.name&&v!==u&&!v._state.vcFired}).map(function(v){return v.on("versionchange").fire(m)})},this.use(_r),this.use(hr),this.use(fr),this.use(Ya),this.use(Br),new Proxy(this,{get:function(m,v,k){var y;return v==="_vip"||(v==="table"?function(C){return zn(u.table(C),b)}:(y=Reflect.get(m,v,k))instanceof ne?zn(y,b):v==="tables"?y.map(function(C){return zn(C,b)}):v==="_createTransaction"?function(){return zn(y.apply(this,arguments),b)}:y)}}));this.vip=b,g.forEach(function(m){return m(u)})}var Ca,Pn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Tr=(xn.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},xn.prototype[Pn]=function(){return this},xn);function xn(e){this._subscribe=e}try{Ca={indexedDB:ae.indexedDB||ae.mozIndexedDB||ae.webkitIndexedDB||ae.msIndexedDB,IDBKeyRange:ae.IDBKeyRange||ae.webkitIDBKeyRange}}catch{Ca={indexedDB:null,IDBKeyRange:null}}function pr(e){var t,n=!1,a=new Tr(function(s){var i=fn(e),c,u=!1,g={},S={},b={get closed(){return u},unsubscribe:function(){u||(u=!0,c&&c.abort(),m&&et.storagemutated.unsubscribe(k))}},m=(s.start&&s.start(b),!1),v=function(){return qa(y)},k=function(C){St(g,C),Lt(S,g)&&v()},y=function(){var C,E,_;!u&&Ca.indexedDB&&(g={},C={},c&&c.abort(),c=new AbortController,_=(w=>{var T=mn();try{i&&Bn();var I=rn(e,w);return I=i?I.finally(sn):I}finally{T&&an()}})(E={subscr:C,signal:c.signal,requery:v,querier:e,trans:null}),Promise.resolve(_).then(function(w){n=!0,t=w,u||E.signal.aborted||(g={},(T=>{for(var I in T)if(oe(T,I))return;return 1})(S=C)||m||(et(ot,k),m=!0),qa(function(){return!u&&s.next&&s.next(w)}))},function(w){n=!1,["DatabaseClosedError","AbortError"].includes(w?.name)||u||qa(function(){u||s.error&&s.error(w)})}))};return setTimeout(v,0),b});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var ln=yt;function xa(e){var t=cn;try{cn=!0,et.storagemutated.fire(e),va(e,!0)}finally{cn=t}}kt(ln,G(G({},Kt),{delete:function(e){return new ln(e,{addons:[]}).delete()},exists:function(e){return new ln(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=ln.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(K(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(s){return s.name}).filter(function(s){return s!==on})}):B(n,t).toCollection().primaryKeys()).then(e)}catch{return je(new Z.MissingAPI)}var t,n},defineClass:function(){return function(e){Ce(this,e)}},ignoreTransaction:function(e){return X.trans?gn(X.transless,e):e()},vip:it,async:function(e){return function(){try{var t=ma(e.apply(this,arguments));return t&&typeof t.then=="function"?t:Y.resolve(t)}catch(n){return je(n)}}},spawn:function(e,t,n){try{var a=ma(e.apply(n,t||[]));return a&&typeof a.then=="function"?a:Y.resolve(a)}catch(s){return je(s)}},currentTransaction:{get:function(){return X.trans||null}},waitFor:function(e,t){return e=Y.resolve(typeof e=="function"?ln.ignoreTransaction(e):e).timeout(t||6e4),X.trans?X.trans.waitFor(e):e},Promise:Y,debug:{get:function(){return wt},set:function(e){Fa(e)}},derive:tn,extend:Ce,props:kt,override:ea,Events:o,on:et,liveQuery:pr,extendObservabilitySet:St,getByKeyPath:zt,setByKeyPath:gt,delByKeyPath:function(e,t){typeof t=="string"?gt(e,t,void 0):"length"in t&&[].map.call(t,function(n){gt(e,n,void 0)})},shallowClone:Ma,deepClone:bt,getObjectDiff:ba,cmp:fe,asap:ta,minKey:-1/0,addons:[],connections:_n,errnames:na,dependencies:Ca,cache:pt,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),ln.maxKey=Ie(ln.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(et(ot,function(e){cn||(e=new CustomEvent(st,{detail:e}),cn=!0,dispatchEvent(e),cn=!1)}),addEventListener(st,function(e){e=e.detail,cn||xa(e)}));var Tn,cn=!1,Ct=function(){};return typeof BroadcastChannel<"u"&&((Ct=function(){(Tn=new BroadcastChannel(st)).onmessage=function(e){return e.data&&xa(e.data)}})(),typeof Tn.unref=="function"&&Tn.unref(),et(ot,function(e){cn||Tn.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!yt.disableBfCache&&e.persisted){wt&&console.debug("Dexie: handling persisted pagehide"),Tn?.close();for(var t=0,n=_n;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!yt.disableBfCache&&e.persisted&&(wt&&console.debug("Dexie: handling persisted pageshow"),Ct(),xa({all:new se(-1/0,[[]])}))})),Y.rejectionMapper=function(e,t){return!e||e instanceof hn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Qa[e.name]?e:(t=new Qa[e.name](t||e.message,e),"stack"in e&&mt(t,"stack",{get:function(){return this.inner.stack}}),t)},Fa(wt),G(yt,Object.freeze({__proto__:null,Dexie:yt,Entity:sr,PropModification:jn,RangeSet:se,add:function(e){return new jn({add:e})},cmp:fe,default:yt,liveQuery:pr,mergeRanges:Mn,rangesOverlap:Ra,remove:function(e){return new jn({remove:e})},replacePrefix:function(e,t){return new jn({replacePrefix:[e,t]})}}),{default:yt}),yt})})(mr)),mr.exports}var zs=Ys();const Or=Rs(zs),hs=Symbol.for("Dexie"),gr=globalThis[hs]||(globalThis[hs]=Or);if(Or.semVer!==gr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Or.semVer} and ${gr.semVer}`);const{liveQuery:ii,mergeRanges:oi,rangesOverlap:li,RangeSet:ci,cmp:ui,Entity:di,PropModification:fi,replacePrefix:hi,add:pi,remove:vi,DexieYProvider:mi}=gr,Ge=new gr("haushaltsbuch-db");Ge.version(1).stores({years:"year",fixedTemplateState:"id"});Ge.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Ge.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});const Ba="singleton";function br(){return new Date().toISOString()}async function Xn(){return Ge.years.orderBy("year").toArray()}async function Us(P){return Ge.years.get(P)}async function Jn(P){await Ge.years.put(P)}async function Fr(){const P=await Ge.fixedTemplateState.get(Ba);if(!P){const h={id:Ba,templates:[],version:br(),updatedAt:new Date().toISOString()};return await Ge.fixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Ir(P){const h=br();return await Ge.fixedTemplateState.put({id:Ba,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Dr(){const P=await Ge.annualVariableFixedTemplateState.get(Ba);if(!P){const h={id:Ba,templates:[],version:br(),updatedAt:new Date().toISOString()};return await Ge.annualVariableFixedTemplateState.put(h),{templates:[],version:h.version}}return{templates:P.templates,version:P.version}}async function Nr(P){const h=br();return await Ge.annualVariableFixedTemplateState.put({id:Ba,templates:P,version:h,updatedAt:new Date().toISOString()}),h}async function Ws(P){await Ge.auditLog.put(P)}async function Lr(){return Ge.auditLog.orderBy("timestampIso").toArray()}async function Gs(P){await Ge.auditLog.clear(),P.length!==0&&await Ge.auditLog.bulkPut(P)}async function Hs(){const P=await Xn(),[h,Fe,G]=await Promise.all([Fr(),Dr(),Lr()]);return{exportedAt:new Date().toISOString(),years:P,fixedTemplates:h.templates,annualVariableFixedTemplates:Fe.templates,auditLogEntries:G}}async function Js(P){await Ge.transaction("rw",[Ge.years,Ge.fixedTemplateState,Ge.annualVariableFixedTemplateState,Ge.auditLog],async()=>{await Ge.years.clear(),await Ge.years.bulkPut(P.years),await Ir(P.fixedTemplates),await Nr(P.annualVariableFixedTemplates??[]),await Gs(P.auditLogEntries??[])})}function Ne(P){const h=P.replace(",",".").trim();if(!h)return 0;const Fe=Number.parseFloat(h);return Number.isNaN(Fe)?0:Math.round(Fe*100)}const Xs=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function p(P){return Xs.format(P/100)}function xt(P){return(P/100).toFixed(2)}function Me(P){return new Date(2026,P-1,1).toLocaleDateString("de-DE",{month:"long"})}const gs=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function ps(P){return gs.includes(P)}function Qs(P){switch(P){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const vs=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Zs(P){const h={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Fe="habu-theme",G="habu-backup-dirty",ye="habu-unexported-change-log",ae="habu-last-backup-filename",ke="habu-recurring-budget-defaults";let ie=null,Ce=null,ft=null,He=null,oe=!1,kt=!1;const vt=new WeakMap;function mt(){const o=P.querySelectorAll("[data-budget-vs-canvas]");if(o.length===0)return;const l=getComputedStyle(document.documentElement),f=l.getPropertyValue("--text-main").trim(),d=l.getPropertyValue("--text-muted").trim(),x=l.getPropertyValue("--table-stripe").trim(),M=l.getPropertyValue("--table-border").trim(),A=l.getPropertyValue("--budget-under").trim(),N=l.getPropertyValue("--danger-2").trim(),L=96,H=250,O=Q=>1-Math.pow(1-Math.max(0,Math.min(1,Q)),3);o.forEach(Q=>{Q.dataset.hoverBound!=="1"&&(Q.dataset.hoverBound="1",Q.addEventListener("mouseenter",()=>{Q.dataset.hovering="1",mt()}),Q.addEventListener("mouseleave",()=>{delete Q.dataset.hovering,delete Q.dataset.hoverX,mt()}),Q.addEventListener("mousemove",_e=>{const Ee=Q.getBoundingClientRect(),Le=Math.round(_e.clientX-Ee.left);Q.dataset.hoverX=String(Le),mt()}));const te=Number.parseInt(Q.dataset.budgetCents??"0",10),ge=Number.parseInt(Q.dataset.actualCents??"0",10),de=Q.dataset.label??"Kategorie",Ae=Q.dataset.hovering==="1",le=`${de}|${te}|${ge}`,$e=Q.dataset.lastRenderSignature!==le;Q.dataset.lastRenderSignature=le;const rt=Math.max(120,Math.floor(Q.clientWidth||120)),Se=window.devicePixelRatio||1,pe=Math.floor(rt*Se),Ze=Math.floor(L*Se);(Q.width!==pe||Q.height!==Ze)&&(Q.width=pe,Q.height=Ze);const q=Q.getContext("2d");if(!q)return;const ot=Math.max(1,te,ge),st=Math.min(1,Math.max(0,te/ot)),et=Math.min(1,Math.max(0,ge/ot)),It=te-ge,re=te>0?ge/te*100:ge>0?100:0,ht=8,Pe=ht,Re=34,Ie=rt-ht*2,Ve=22,Ye=Number.parseInt(Q.dataset.hoverX??"-1",10),lt=(_e,Ee,Le,De,ze)=>{q.beginPath(),q.moveTo(_e+ze,Ee),q.lineTo(_e+Le-ze,Ee),q.quadraticCurveTo(_e+Le,Ee,_e+Le,Ee+ze),q.lineTo(_e+Le,Ee+De-ze),q.quadraticCurveTo(_e+Le,Ee+De,_e+Le-ze,Ee+De),q.lineTo(_e+ze,Ee+De),q.quadraticCurveTo(_e,Ee+De,_e,Ee+De-ze),q.lineTo(_e,Ee+ze),q.quadraticCurveTo(_e,Ee,_e+ze,Ee),q.closePath()},Vt=_e=>{q.setTransform(1,0,0,1,0,0),q.clearRect(0,0,Q.width,Q.height),q.scale(Se,Se),lt(Pe,Re,Ie,Ve,8),q.fillStyle=x,q.fill(),q.strokeStyle=M,q.lineWidth=1,q.stroke();const Ee=[.6,.25,.15],Le=[.1,.16,.24];let De=0;Ee.forEach(($t,ut)=>{const Yt=Ie*$t;q.save(),q.globalAlpha=Le[ut]??.1,q.fillStyle=d,q.fillRect(Pe+De,Re,Yt,Ve),q.restore(),De+=Yt});const ze=te>0&&ge>te?N:A,Dt=Ie*et*_e;lt(Pe,Re+3,Dt,Ve-6,6),q.fillStyle=ze,q.fill(),Ae&&(q.save(),q.strokeStyle=ze,q.lineWidth=1.5,q.globalAlpha=.8,lt(Pe-1,Re+2,Math.max(2,Dt+2),Ve-4,7),q.stroke(),q.restore());const Xt=Pe+Ie*st;q.strokeStyle=f,q.lineWidth=Ae?3:2,q.beginPath(),q.moveTo(Xt,Re-3),q.lineTo(Xt,Re+Ve+3),q.stroke(),Ae&&Ye>=Pe&&Ye<=Pe+Ie&&(q.save(),q.strokeStyle=f,q.globalAlpha=.35,q.lineWidth=1,q.beginPath(),q.moveTo(Ye,Re-8),q.lineTo(Ye,Re+Ve+8),q.stroke(),q.restore()),q.fillStyle=f,q.font="600 12px system-ui, -apple-system, sans-serif",q.textAlign="left",q.textBaseline="top",q.fillText(de,Pe,10);const Nt=re*_e;if(q.fillStyle=re>100?N:re<100?A:d,q.textAlign="right",q.fillText(`${Nt.toFixed(0)}%`,Pe+Ie,10),q.fillStyle=d,q.font="500 11px system-ui, -apple-system, sans-serif",q.textAlign="left",q.textBaseline="top",q.fillText(`Ist ${p(ge)} · Ziel ${p(te)} · Δ ${It>=0?"+":""}${p(It)}`,Pe,64),Ae){const $t=`Nutzung ${re.toFixed(1)}%`;q.font="600 11px system-ui, -apple-system, sans-serif";const ut=8,Yt=5,Qt=22,B=q.measureText($t).width+ut*2,K=Number.isFinite(Ye)?Ye-B/2:Pe+Ie-B,it=Math.min(Pe+Ie-B,Math.max(Pe,K)),Cn=Re-Qt-8;q.save(),q.fillStyle=f,q.globalAlpha=.92,lt(it,Cn,B,Qt,6),q.fill(),q.restore(),q.fillStyle=x,q.textAlign="left",q.textBaseline="top",q.fillText($t,it+ut,Cn+Yt)}},Ht=vt.get(Q);if(Ht&&window.cancelAnimationFrame(Ht),!$e){Vt(1);return}const Mt=performance.now(),ct=_e=>{const Ee=_e-Mt,Le=Math.min(1,Ee/H);if(Vt(O(Le)),Le<1){const De=window.requestAnimationFrame(ct);vt.set(Q,De);return}vt.delete(Q)},Jt=window.requestAnimationFrame(ct);vt.set(Q,Jt)})}function tn(){P.querySelectorAll("[data-year-trend-chart]").forEach(l=>{const f=Array.from(l.querySelectorAll("[data-year-trend-point]"));if(f.length===0)return;const d=l.querySelector("[data-year-trend-active-month]"),x=l.querySelector("[data-year-trend-active-net]"),M=l.querySelector("[data-year-trend-active-income]"),A=l.querySelector("[data-year-trend-active-expense]"),N=l.querySelector("[data-year-trend-active-delta]"),L=l.querySelector("[data-year-trend-live]");if(!d||!x||!M||!A||!N)return;const H=(te,ge)=>{te.classList.remove("danger","budget-under");const de=ge<0?"danger":ge>0?"budget-under":"";de&&te.classList.add(de)},O=te=>{const ge=te.dataset.monthLabel??"-",de=Number.parseInt(te.dataset.netCents??"0",10),Ae=Number.parseInt(te.dataset.actualNetCents??"0",10),le=Number.parseInt(te.dataset.incomeCents??"0",10),$e=Number.parseInt(te.dataset.expenseCents??"0",10),rt=Number.parseInt(te.dataset.deltaCents??"0",10);d.textContent=ge,x.textContent=p(de),M.textContent=p(le),A.textContent=p($e),N.textContent=`${rt>=0?"+":""}${p(rt)}`,H(x,de),H(N,rt),f.forEach(Se=>{const pe=Se===te;Se.classList.toggle("is-active",pe),Se.setAttribute("aria-pressed",String(pe))}),L&&(L.textContent=`${ge}: Kalkulierter Saldo ${p(de)}, Ist-Saldo ${p(Ae)}, Einkommen ${p(le)}, Ausgaben ${p($e)}`)};f.forEach(te=>{const ge=()=>{O(te)};te.addEventListener("mouseenter",ge),te.addEventListener("focus",ge),te.addEventListener("click",ge)});const Q=f.find(te=>te.dataset.pointDefault==="1")??f[f.length-1];Q&&O(Q)})}function Qn(o){if(o==="dashboard"){const l=h.years.slice().sort((d,x)=>x.year-d.year);l.some(d=>d.year===h.dashboardYear)||(h.dashboardYear=h.selectedYear??l[0]?.year??null)}h.topModal=o,ne()}function _a(){h.topModal&&(h.topModal=null,ne())}function Zn(){h.showUnexportedChangeLogModal=!0,ne()}function ea(){h.showUnexportedChangeLogModal&&(h.showUnexportedChangeLogModal=!1,ne())}function On(){h.showPersistentAuditLogModal=!0,ne()}function ta(){h.showPersistentAuditLogModal&&(h.showPersistentAuditLogModal=!1,ne())}function zt(){oe||(oe=!0,window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(h.showUnexportedChangeLogModal){o.preventDefault(),ea();return}if(h.showPersistentAuditLogModal){o.preventDefault(),ta();return}h.topModal&&(o.preventDefault(),_a())}}))}function gt(){const o=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(o<=0)return!1;const l=o/6;return window.scrollY>l}function Ma(){const o=P.querySelector("#scroll-up-btn");o&&o.classList.toggle("is-visible",gt())}function yr(){if(kt)return;kt=!0;const o=()=>{Ma(),mt()};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o)}function Pa(){if(ie&&document.body.contains(ie))return ie;const o=document.getElementById("toast-root");if(o instanceof HTMLDivElement)return ie=o,o;const l=document.createElement("div");return l.id="toast-root",l.className="toast-root",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),document.body.appendChild(l),ie=l,l}function Ha(){if(Ce&&document.body.contains(Ce))return Ce;const o=document.getElementById("amount-modal-root");if(o instanceof HTMLDivElement)return Ce=o,o;const l=document.createElement("div");return l.id="amount-modal-root",document.body.appendChild(l),Ce=l,l}function Fn(){if(He&&document.body.contains(He))return He;const o=document.getElementById("weekly-shopping-modal-root");if(o instanceof HTMLDivElement)return He=o,o;const l=document.createElement("div");return l.id="weekly-shopping-modal-root",document.body.appendChild(l),He=l,l}function bt(){if(!Ce){ft=null;return}Ce.innerHTML="",ft=null}function In(){He&&(He.innerHTML="")}function Ta(o,l,f){const d=new Date,x=d.getFullYear(),M=d.getMonth()+1,A=d.getDate(),N=new Date(o,l,0).getDate();if(o<x||o===x&&l<M)return{occurrences:0,remainingDays:0};const L=o===x&&l===M?Math.min(A,N):1,H=Math.max(0,N-L+1);let O=0;for(let Q=L;Q<=N;Q+=1)new Date(o,l-1,Q).getDay()===f&&(O+=1);return{occurrences:O,remainingDays:H}}async function Aa(o,l){const f=qe();f&&(f.weeklyShoppingWeekday=o,f.weeklyShoppingEstimateCents=Math.max(0,l),await Je(`Wocheneinkauf geplant: ${vs.find(d=>d.value===o)?.label??"Wochentag"} mit ${p(f.weeklyShoppingEstimateCents)} €`),ne())}function Cr(){const o=qe(),l=Ut();if(!o||!l)return;const f=Fn();In();const d=o.weeklyShoppingWeekday===null||o.weeklyShoppingWeekday===void 0?1:o.weeklyShoppingWeekday,x=o.weeklyShoppingEstimateCents??0,M=l.year,A=o.month,N=Ln(M,A),L=N?at(N):{foodCents:0},H=N?N.foodBudgetCents??0:0,O=L.foodCents,Q=H-O;f.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${vs.map(re=>`<option value="${re.value}" ${re.value===d?"selected":""}>${re.label}</option>`).join("")}
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
    `;const te=f.querySelector(".weekly-shopping-modal-backdrop"),ge=f.querySelector("#weekly-shopping-weekday"),de=f.querySelector("#weekly-shopping-estimate"),Ae=f.querySelector("#weekly-shopping-occurrences"),le=f.querySelector("#weekly-shopping-total"),$e=f.querySelector("#weekly-shopping-rest-before"),rt=f.querySelector("#weekly-shopping-rest-after"),Se=f.querySelector("#weekly-shopping-days-left"),pe=f.querySelector("#weekly-shopping-per-day"),Ze=f.querySelector("#weekly-shopping-cancel"),q=f.querySelector("#weekly-shopping-save");function ot(){const re=Number.parseInt(ge?.value??"1",10);return Number.isInteger(re)&&re>=0&&re<=6?re:1}function st(){return Math.max(0,Ne(de?.value??"0"))}function et(){const re=ot(),ht=st(),{occurrences:Pe,remainingDays:Re}=Ta(M,A,re),Ie=Pe*ht,Ve=Q-Ie,Ye=Re>0?Math.trunc(Ve/Re):0;Ae&&(Ae.textContent=`${Pe}`),le&&(le.textContent=`${p(Ie)} €`),$e&&($e.textContent=`${p(Q)} €`),rt&&(rt.textContent=`${p(Ve)} €`,rt.className=Ve<0?"danger":Ve>0?"budget-under":""),Se&&(Se.textContent=`${Re}`),pe&&(pe.textContent=`${p(Ye)} €`,pe.className=Ye<0?"danger":Ye>0?"budget-under":"")}async function It(){await Aa(ot(),st()),In()}Ze?.addEventListener("click",()=>{In()}),q?.addEventListener("click",async()=>{await It()}),ge?.addEventListener("change",()=>{et()}),de?.addEventListener("input",()=>{et()}),de?.addEventListener("keydown",async re=>{if(re.key==="Escape"){re.preventDefault(),In();return}re.key==="Enter"&&(re.preventDefault(),await It())}),te?.addEventListener("click",re=>{re.target===te&&In()}),window.setTimeout(()=>{de?.focus(),de?.select(),et()},0)}function nn(o,l){let f=o;const d=l.min;if(d){const M=Number.parseFloat(d);if(!Number.isNaN(M)){const A=Math.round(M*100);f=Math.max(f,A)}}const x=l.max;if(x){const M=Number.parseFloat(x);if(!Number.isNaN(M)){const A=Math.round(M*100);f=Math.min(f,A)}}return f}function nt(o){if(o.disabled)return;const l=Ha();bt(),ft=o;const f=Ne(o.value||"0"),d="Betrag anpassen";l.innerHTML=`
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
    `;const x=l.querySelector(".amount-modal-backdrop"),M=l.querySelector("#amount-modal-delta"),A=l.querySelector("#amount-modal-next-delta"),N=l.querySelector("#amount-modal-next-overwrite"),L=l.querySelector("#amount-modal-cancel"),H=l.querySelector("#amount-modal-overwrite"),O=l.querySelector("#amount-modal-apply");function Q(){const le=Ne(M?.value??"0");return nn(f+le,o)}function te(){const le=Ne(M?.value??"0");return nn(le,o)}function ge(){A&&(A.textContent=`${p(Q())} €`),N&&(N.textContent=`${p(te())} €`)}function de(){const le=ft;if(!le){bt();return}const $e=Q();bt(),le.value=xt($e),le.dispatchEvent(new Event("change",{bubbles:!0}))}function Ae(){const le=ft;if(!le){bt();return}const $e=te();bt(),le.value=xt($e),le.dispatchEvent(new Event("change",{bubbles:!0}))}L?.addEventListener("click",()=>{bt()}),H?.addEventListener("click",()=>{Ae()}),O?.addEventListener("click",()=>{de()}),M?.addEventListener("input",()=>{ge()}),M?.addEventListener("keydown",le=>{if(le.key==="Escape"){le.preventDefault(),bt();return}le.key==="Enter"&&(le.preventDefault(),de())}),x?.addEventListener("click",le=>{le.target===x&&bt()}),window.setTimeout(()=>{M?.focus(),M?.select(),ge()},0)}function ve(o,l="success"){const f=Pa(),d=document.createElement("div");d.className=`toast toast-${l}`,d.textContent=o,f.appendChild(d),requestAnimationFrame(()=>{d.classList.add("toast-visible")});const x=l==="error"?5e3:3e3;window.setTimeout(()=>{d.classList.remove("toast-visible"),window.setTimeout(()=>{d.remove()},220)},x)}function fn(){return new Date().getMonth()+1}function Kt(){return new Date().getFullYear()}function Ja(o){const l=Kt(),f=o.find(d=>d.year===l);return f?f.year:o[0]?.year??null}function hn(){return new Date().toISOString().slice(0,10)}function Xa(){const o=new Date,l=String(o.getHours()).padStart(2,"0"),f=String(o.getMinutes()).padStart(2,"0"),d=String(o.getSeconds()).padStart(2,"0");return`${l}${f}${d}`}function Bt(o){return o.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function kn(){const o=localStorage.getItem(Fe);return o&&ps(o)?o:"light"}function na(o){h.theme=o,document.documentElement.setAttribute("data-theme",o),localStorage.setItem(Fe,o)}function xr(){return localStorage.getItem(G)==="1"}function Z(o){localStorage.setItem(G,o?"1":"0")}function Qa(){const o=localStorage.getItem(ye);if(!o)return[];try{const l=JSON.parse(o);return Array.isArray(l)?l.filter(f=>{if(!f||typeof f!="object")return!1;const d=f;return typeof d.id=="string"&&typeof d.timestampIso=="string"&&typeof d.message=="string"}).slice(-200):[]}catch{return[]}}function we(o){localStorage.setItem(ye,JSON.stringify(o.slice(-200)))}function Dn(){const o=localStorage.getItem(ae);if(!o)return null;const l=o.trim();return l||null}function kr(){const o={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},l=localStorage.getItem(ke);if(!l)return o;try{const f=JSON.parse(l),d=x=>typeof x=="number"&&Number.isFinite(x)?x:null;return{foodBudgetCents:d(f.foodBudgetCents),goingOutBudgetCents:d(f.goingOutBudgetCents),fixedBudgetCents:d(f.fixedBudgetCents),variableBudgetCents:d(f.variableBudgetCents),miscBudgetCents:d(f.miscBudgetCents)}}catch{return o}}function pn(o){localStorage.setItem(ke,JSON.stringify(o))}function Za(o){o.months.forEach(l=>{const{recurringBudgetDefaults:f}=h;typeof f.foodBudgetCents=="number"&&(l.foodBudgetCents=f.foodBudgetCents),typeof f.goingOutBudgetCents=="number"&&(l.goingOutBudgetCents=f.goingOutBudgetCents),typeof f.fixedBudgetCents=="number"&&(l.fixedBudgetCents=f.fixedBudgetCents),typeof f.variableBudgetCents=="number"&&(l.variableBudgetCents=f.variableBudgetCents),typeof f.miscBudgetCents=="number"&&(l.miscBudgetCents=f.miscBudgetCents)})}function wr(o){const l=o.trim();l&&localStorage.setItem(ae,l)}async function $r(){Pa(),na(kn()),h.hasUnexportedChanges=xr(),h.unexportedChangeLog=Qa(),h.persistentAuditLog=await Lr(),h.lastBackupFileName=Dn(),h.recurringBudgetDefaults=kr(),zt(),yr();const[o,l,f]=await Promise.all([Xn(),Fr(),Dr()]);h.years=o,h.annualVariableFixedTemplates=f.templates,h.annualVariableFixedTemplateVersion=f.version,Oa(h.years),ra(h.years),h.fixedTemplates=l.templates,h.fixedTemplateVersion=l.version,await Fa(h.years),o.length>0&&(h.selectedYear=Ja(o),h.selectedMonth=fn()),ne()}function Oa(o){const l=f=>f==="balance"||f==="fresh"||f==="salary"?f:void 0;o.forEach(f=>{f.months.forEach(d=>{if(d.weeklyShoppingWeekday!==null&&d.weeklyShoppingWeekday!==void 0){const x=Number(d.weeklyShoppingWeekday);Number.isInteger(x)&&x>=0&&x<=6?d.weeklyShoppingWeekday=x:d.weeklyShoppingWeekday=null}else d.weeklyShoppingWeekday=null;typeof d.weeklyShoppingEstimateCents!="number"&&(d.weeklyShoppingEstimateCents=0),typeof d.foodBudgetCents!="number"&&(d.foodBudgetCents=0),typeof d.goingOutBudgetCents!="number"&&(d.goingOutBudgetCents=0),Array.isArray(d.incomes)?d.incomes=d.incomes.map(x=>{const M=l(x.incomeSource);if(!M){const{incomeSource:A,...N}=x;return N}return{...x,incomeSource:M}}):d.incomes=[],typeof d.fixedBudgetCents!="number"&&(d.fixedBudgetCents=d.fixedCosts.reduce((x,M)=>x+M.plannedCents,0)),typeof d.variableBudgetCents!="number"&&(d.variableBudgetCents=d.variablePositions.reduce((x,M)=>x+M.budgetCents,0)),Array.isArray(d.variablePositions)||(d.variablePositions=[]),typeof d.miscBudgetCents!="number"&&(d.miscBudgetCents=0)})})}function Nn(o){return o==="balance"?"Bestandsguthaben":o==="salary"?"Gehalt":o==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function wt(o){return o==="fresh"||o==="salary"||!o}async function Fa(o){for(const l of o)await Jn(l)}function Ut(){if(h.selectedYear)return h.years.find(o=>o.year===h.selectedYear)}function qe(){const o=Ut();if(o)return o.months.find(l=>l.month===h.selectedMonth)}function Ln(o,l){const f=h.years.find(d=>d.year===o);if(f)return f.months.find(d=>d.month===l)}function at(o){const l=o.days.reduce((N,L)=>N+L.foodCents,0),f=o.days.reduce((N,L)=>N+L.goingOutCents,0),d=o.fixedCosts.reduce((N,L)=>N+L.actualCents,0),x=o.variableCosts.reduce((N,L)=>N+L.amountCents,0)+o.variablePositions.reduce((N,L)=>N+L.actualCents,0),M=o.miscCosts.reduce((N,L)=>N+L.amountCents,0),A=l+f+d+x+M;return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:x,miscCents:M,totalCents:A}}function jt(o){const l=o.foodBudgetCents??0,f=o.goingOutBudgetCents??0,d=o.fixedBudgetCents??o.fixedCosts.reduce((A,N)=>A+N.plannedCents,0),x=o.variablePositions.reduce((A,N)=>A+N.budgetCents,0),M=o.miscBudgetCents??0;return l+f+d+(o.variableBudgetCents??x)+M}function wn(o){return o.months.reduce((l,f)=>{const d=at(f);return{foodCents:l.foodCents+d.foodCents,goingOutCents:l.goingOutCents+d.goingOutCents,fixedCents:l.fixedCents+d.fixedCents,variableCents:l.variableCents+d.variableCents,miscCents:l.miscCents+d.miscCents,totalCents:l.totalCents+d.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function qn(o){return o.months.slice().sort((l,f)=>l.month-f.month).map(l=>({month:l.month,summary:at(l)}))}function Kn(o){const l=o.months.reduce((A,N)=>A+(N.foodBudgetCents??0),0),f=o.months.reduce((A,N)=>A+(N.goingOutBudgetCents??0),0),d=o.months.reduce((A,N)=>A+(N.fixedBudgetCents??N.fixedCosts.reduce((L,H)=>L+H.plannedCents,0)),0),x=o.months.reduce((A,N)=>A+(N.variableBudgetCents??N.variablePositions.reduce((L,H)=>L+H.budgetCents,0)),0),M=o.months.reduce((A,N)=>A+(N.miscBudgetCents??0),0);return{foodCents:l,goingOutCents:f,fixedCents:d,variableCents:x,miscCents:M,totalCents:l+f+d+x+M}}function $n(o){return o.months.reduce((l,f)=>l+f.incomes.reduce((d,x)=>d+(wt(x.incomeSource)?x.amountCents:0),0),0)}function vn(o){return o.months.reduce((l,f)=>(f.incomes.forEach(d=>{if(d.incomeSource==="salary"){l.salaryIncomeCents+=d.amountCents;return}(d.incomeSource==="fresh"||d.incomeSource==null)&&(l.freshIncomeCents+=d.amountCents)}),l),{salaryIncomeCents:0,freshIncomeCents:0})}function Sn(o,l){const f=o.months.slice().sort((d,x)=>d.month-x.month)[0];return f?l.get(he(o.year,f.month))?.carriedFromPreviousCents??0:0}function Ia(){const o=h.years.slice().sort((d,x)=>d.year-x.year).flatMap(d=>d.months.slice().sort((x,M)=>x.month-M.month).map(x=>({year:d.year,month:x}))),l=new Map;let f=0;return o.forEach(({year:d,month:x},M)=>{const A=x.carryoverOverrideCents,N=typeof A=="number",L=N?A:f,H=M>0||N,O=x.incomes.reduce((de,Ae)=>de+(wt(Ae.incomeSource)?Ae.amountCents:0),0),Q=jt(x),te=O+L,ge=te-Q;l.set(he(d,x.month),{hasPreviousMonth:H,carriedFromPreviousCents:L,recordedIncomeCents:O,effectiveIncomeCents:te,plannedBudgetCents:Q,netCents:ge}),f=ge}),l}function Ke(o,l){return l<=0?"":o>l?"budget-over":o<l?"budget-under":""}function X(o){return`${o>0?"+":""}${p(o)}`}function Rt(o,l){const f=o-l,d=Ke(l,o);return`${p(o)} <span class="eval-diff ${d}">(Δ ${X(f)})</span>`}function Ot(o,l){const f=o!==null,d=f?o-l:null,x=f?Ke(l,o):"";return`<div class="column-overview">
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
    </div>`}async function aa(o){if(await Us(o)){alert(`Jahr ${o} existiert bereits.`);return}const f=cs(o,h.fixedTemplates,h.fixedTemplateVersion);Za(f),an(f),await Jn(f),h.years=await Xn(),Y(`Jahr ${o} wurde angelegt`),h.selectedYear=o,h.selectedMonth=fn(),ve(`Jahr ${o} wurde angelegt.`),ne()}function Y(o="Änderung an den Daten"){h.hasUnexportedChanges=!0,Z(!0);const l=h.selectedYear?`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",f=new Date().toISOString(),d=`${o} (${l})`,x={id:At("change"),timestampIso:f,message:d};h.unexportedChangeLog=[...h.unexportedChangeLog,x].slice(-200),we(h.unexportedChangeLog);const M={id:At("audit"),timestampIso:f,message:d};h.persistentAuditLog=[...h.persistentAuditLog,M].slice().sort((A,N)=>A.timestampIso.localeCompare(N.timestampIso)),Ws(M).catch(A=>{console.error("Audit-Log konnte nicht gespeichert werden",A),ve("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Da(o){const l=o.trim();l&&(h.lastBackupFileName=l,wr(l))}function Na(o){h.hasUnexportedChanges=!1,Z(!1),h.unexportedChangeLog=[],we([]),h.showUnexportedChangeLogModal=!1,Da(o)}async function Je(o){const l=Ut();l&&(await Jn(l),h.years=await Xn(),Y(o))}async function _t(o){for(const l of h.years)await Jn(l);h.years=await Xn(),Y(o)}function he(o,l){return o*100+l}function En(o,l,f){const d=`${o} auf ${p(f)} € gesetzt`;return f>l?`${d} (erhöht um ${p(f-l)} €)`:f<l?`${d} (verringert um ${p(l-f)} €)`:d}function La(o){const l=o.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!l)return null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function mn(o,l){const f=La(o.dueDateIso);if(!f||l.year<f.year)return;const d=l.months.find(M=>M.month===f.month);!d||d.variablePositions.some(M=>M.autoAnnualTemplateId===o.id)||(d.variablePositions=[{id:At("varpos"),name:o.name,budgetCents:o.plannedCents,actualCents:0,autoAnnualTemplateId:o.id},...d.variablePositions],me(d))}function an(o){h.annualVariableFixedTemplates.forEach(l=>{mn(l,o)})}function ra(o){const l=new Set(h.annualVariableFixedTemplates.map(f=>f.id));o.forEach(f=>{f.months.forEach(d=>{const x=d.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),M=d.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");x&&(d.variablePositions=d.variablePositions.filter(A=>A.autoAnnualTemplateId?l.has(A.autoAnnualTemplateId):!0),me(d)),M&&(d.fixedCosts=d.fixedCosts.filter(A=>!A.autoAnnualTemplateId),Ft(d))}),an(f)})}function Ft(o){o.fixedBudgetCents=o.fixedCosts.reduce((l,f)=>l+f.plannedCents,0)}function me(o){o.variableBudgetCents=o.variablePositions.reduce((l,f)=>l+f.budgetCents,0)}function Qe(){if(h.selectedYear)return`${h.selectedYear}-${String(h.selectedMonth).padStart(2,"0")}`;const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}function er(){const o=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",Qe());if(!o)return null;const l=o.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!l)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const f=l[1],d=l[2];return!f||!d?null:{year:Number.parseInt(f,10),month:Number.parseInt(d,10)}}function sa(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(x=>{if(he(d.year,x.month)<f)return;x.fixedCosts.some(A=>A.templateId===o.id)||(x.fixedCosts.push({id:At("fixed"),templateId:o.id,name:o.name,plannedCents:o.plannedCents,actualCents:0}),Ft(x))})})}function ia(o,l,f){const d=he(f.year,f.month);h.years.forEach(x=>{x.months.forEach(M=>{he(x.year,M.month)<d||(M.fixedCosts=M.fixedCosts.map(A=>A.templateId!==l.id?A:{...A,name:l.name,plannedCents:l.plannedCents,actualCents:A.actualCents===o.plannedCents?l.plannedCents:A.actualCents}),Ft(M))})})}function oa(o,l){const f=he(l.year,l.month);h.years.forEach(d=>{d.months.forEach(x=>{he(d.year,x.month)<f||(x.fixedCosts=x.fixedCosts.filter(M=>M.templateId!==o),Ft(x))})})}async function Sr(o,l){const f=o.trim();if(!f)return;const d=er();if(!d)return;const x=!!h.editingFixedTemplateId;if(h.editingFixedTemplateId){const M=h.fixedTemplates.find(N=>N.id===h.editingFixedTemplateId);if(!M)return;const A={...M,name:f,plannedCents:l};h.fixedTemplates=h.fixedTemplates.map(N=>N.id===h.editingFixedTemplateId?A:N),ia(M,A,d)}else{const M={id:At("tpl"),name:f,plannedCents:l};h.fixedTemplates=[...h.fixedTemplates,M],sa(M,d)}h.fixedTemplateVersion=await Ir(h.fixedTemplates),h.editingFixedTemplateId=null,await _t(x?`Fixkosten-Vorlage aktualisiert: ${f} (${p(l)} €)`:`Fixkosten-Vorlage hinzugefügt: ${f} (${p(l)} €)`),ve(x?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ne()}function rn(o){h.editingFixedTemplateId=o,ne()}function Bn(){h.editingFixedTemplateId=null,ne()}async function sn(o){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const f=er();if(!f)return;const d=h.fixedTemplates.find(x=>x.id===o);h.fixedTemplates=h.fixedTemplates.filter(x=>x.id!==o),oa(o,f),h.editingFixedTemplateId===o&&(h.editingFixedTemplateId=null),h.fixedTemplateVersion=await Ir(h.fixedTemplates),await _t(`Fixkosten-Vorlage gelöscht: ${d?.name??"Unbekannt"}`),ve("Fixkosten-Vorlage wurde gelöscht."),ne()}async function la(o,l,f){const d=o.trim();if(!d){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const x=La(l);if(!x){alert("Bitte ein gültiges Datum auswählen.");return}if(f<=0){alert("Bitte einen positiven Betrag eingeben.");return}const M={id:At("annualtpl"),name:d,plannedCents:f,dueDateIso:l};h.annualVariableFixedTemplates=[...h.annualVariableFixedTemplates,M],h.years.forEach(A=>{mn(M,A)}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await _t(`Variable Fixkosten-Vorlage hinzugefügt: ${d} (${p(f)} €, jährlich in ${Me(x.month)})`),ve("Variable Fixkosten-Vorlage wurde hinzugefügt."),ne()}async function Er(o){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const f=h.annualVariableFixedTemplates.find(d=>d.id===o);f&&(h.annualVariableFixedTemplates=h.annualVariableFixedTemplates.filter(d=>d.id!==o),h.years.forEach(d=>{d.months.forEach(x=>{x.variablePositions=x.variablePositions.filter(M=>M.autoAnnualTemplateId!==o),me(x),x.fixedCosts=x.fixedCosts.filter(M=>M.autoAnnualTemplateId!==o),Ft(x)})}),h.annualVariableFixedTemplateVersion=await Nr(h.annualVariableFixedTemplates),await _t(`Variable Fixkosten-Vorlage gelöscht: ${f.name}`),ve("Variable Fixkosten-Vorlage wurde gelöscht."),ne())}async function Wt(o,l,f){const d=qe();if(!d)return;const M=d.days.find(A=>A.isoDate===o)?.[l]??0;d.days=d.days.map(A=>A.isoDate===o?{...A,[l]:f}:A),await Je(En(`${l==="foodCents"?"Essen":"Ausgehen"} am ${o} angepasst`,M,f)),ne()}async function tr(o,l){const f=qe();if(!f)return;const d=f.fixedCosts.find(x=>x.id===o);f.fixedCosts=f.fixedCosts.map(x=>x.id===o?{...x,actualCents:l}:x),await Je(`Fixkosten-Ist angepasst: ${d?.name??"Unbekannt"} auf ${p(l)} €`),ne()}async function gn(o,l){const f=qe();if(!f)return;const d=f.fixedCosts.find(M=>M.id===o);if(!d)return;const x=d.plannedCents;f.fixedCosts=f.fixedCosts.map(M=>M.id===o?{...M,plannedCents:l}:M),Ft(f),await Je(En(`Fixkosten-Budget angepasst: ${d.name}`,x,l)),ne()}async function nr(o,l){const f=qe();if(!f)return;const d=o.trim();if(!d){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const x={id:At("fixed"),templateId:At("fixed-local"),name:d,plannedCents:l,actualCents:0};f.fixedCosts=[x,...f.fixedCosts],Ft(f),await Je(`Fixkosten-Position hinzugefügt: ${d} (${p(l)} €)`),ve("Fixkosten-Position wurde hinzugefügt."),ne()}async function qa(o){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const f=qe();if(!f)return;const d=f.fixedCosts.find(x=>x.id===o);d&&(f.fixedCosts=f.fixedCosts.filter(x=>x.id!==o),Ft(f),await Je(`Fixkosten-Position gelöscht: ${d.name}`),ve("Fixkosten-Position wurde gelöscht."),ne())}async function je(o){await on("fixedBudgetCents",o,"Fixkosten")}async function bn(o){await on("foodBudgetCents",o,"Essen")}async function Gt(o){await on("goingOutBudgetCents",o,"Ausgehen")}async function ar(o){await on("miscBudgetCents",o,"Sonstiges")}async function _n(o){await on("variableBudgetCents",o,"Variable Kosten")}async function on(o,l,f){const d=qe(),x=h.selectedYear;if(!d||!x||d[o]===l)return;const M=d[o];if(d[o]=l,confirm(`Soll das Budget "${f}" auch für zukünftige Monate übernommen werden?`)){const N=he(x,h.selectedMonth);h.years.forEach(H=>{H.months.forEach(O=>{he(H.year,O.month)<=N||(O[o]=l)})}),h.recurringBudgetDefaults[o]=l,pn(h.recurringBudgetDefaults);const L=En(`Budget "${f}"`,M??0,l);await _t(`${L} (inkl. zukünftiger Monate)`),ve(`Budget "${f}" wurde für zukünftige Monate übernommen.`),ne();return}await Je(En(`Budget "${f}"`,M??0,l)),ne()}async function ca(o){const l=qe();l&&(o===null?l.carryoverOverrideCents=null:l.carryoverOverrideCents=o,await Je(o===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${p(o)} € gesetzt`),ne())}async function ua(o,l,f){const d=qe(),x=h.selectedYear;if(!d||!x)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für die Position angeben.");return}if(d.variablePositions=[{id:At("varpos"),name:M,budgetCents:l,actualCents:0},...d.variablePositions],me(d),f){const A=he(x,h.selectedMonth);h.years.forEach(N=>{N.months.forEach(L=>{he(N.year,L.month)<=A||(L.variablePositions=[{id:At("varpos"),name:M,budgetCents:l,actualCents:0},...L.variablePositions],me(L))})}),await _t(`Variable Position hinzugefügt: ${M} (${p(l)} €) für zukünftige Monate`),ve("Variable Position wurde für zukünftige Monate hinzugefügt."),ne();return}await Je(`Variable Position hinzugefügt: ${M} (${p(l)} €)`),ve("Variable Position wurde hinzugefügt."),ne()}async function yn(o,l){const f=qe();if(!f)return;const d=f.variablePositions.find(M=>M.id===o),x=d?.actualCents??0;f.variablePositions=f.variablePositions.map(M=>M.id===o?{...M,actualCents:l}:M),await Je(En(`Istwert Variable Position angepasst: ${d?.name??"Unbekannt"}`,x,l)),ne()}async function rr(o,l){const f=qe();if(!f)return;const d=f.variablePositions.find(M=>M.id===o),x=d?.budgetCents??0;f.variablePositions=f.variablePositions.map(M=>M.id===o?{...M,budgetCents:l}:M),me(f),await Je(En(`Budget Variable Position angepasst: ${d?.name??"Unbekannt"}`,x,l)),ne()}async function da(o){if(!confirm("Variable Position wirklich löschen?"))return;const f=qe(),d=h.selectedYear;if(!f||!d)return;const x=f.variablePositions.find(L=>L.id===o);if(!x)return;const M=he(d,h.selectedMonth),N=h.years.some(L=>L.months.some(H=>he(L.year,H.month)>M&&H.variablePositions.some(O=>O.name===x.name&&O.budgetCents===x.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.variablePositions=f.variablePositions.filter(L=>L.id!==o),me(f),N){h.years.forEach(L=>{L.months.forEach(H=>{he(L.year,H.month)<=M||(H.variablePositions=H.variablePositions.filter(O=>!(O.name===x.name&&O.budgetCents===x.budgetCents)),me(H))})}),await _t(`Variable Position gelöscht: ${x.name} (inkl. zukünftiger Monate)`),ve("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Je(`Variable Position gelöscht: ${x.name}`),ve("Variable Position wurde gelöscht."),ne()}async function sr(o){const l=qe(),f=h.selectedYear;if(!l||!f)return;const d=l.variablePositions.find(O=>O.id===o);if(!d)return;const x={year:h.selectedMonth===12?f+1:f,month:h.selectedMonth===12?1:h.selectedMonth+1};let M=h.years.find(O=>O.year===x.year);if(!M){const O=cs(x.year,h.fixedTemplates,h.fixedTemplateVersion);Za(O),an(O),await Jn(O),h.years=[...h.years,O].sort((Q,te)=>Q.year-te.year),M=O}const A=M.months.find(O=>O.month===x.month);if(!A)return;const N=A.variablePositions.some(O=>O.id===d.id||O.name===d.name&&O.budgetCents===d.budgetCents);if(l.variablePositions=l.variablePositions.filter(O=>O.id!==o),me(l),!N){const Q=A.variablePositions.some(te=>te.id===d.id)?{...d,id:At("varpos")}:d;A.variablePositions=[Q,...A.variablePositions],me(A)}const L=`${Me(x.month)} ${x.year}`,H=`Variable Position verschoben: ${d.name} → ${L}`;if(x.year===f)await Je(H);else{const O=Ut();if(!O)return;await Jn(O),await Jn(M),h.years=await Xn(),Oa(h.years),Y(H)}ve(N?`Position entfernt (im Folgemonat schon vorhanden: ${L}).`:`Position in den Folgemonat verschoben: ${L}.`),ne()}async function fe(o,l,f){const d=qe(),x=h.selectedYear;if(!d||!x)return;const M=o.trim();if(!M){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(l<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=us(M,l);if(d.miscCosts=[A,...d.miscCosts],f){const N=he(x,h.selectedMonth);h.years.forEach(L=>{L.months.forEach(H=>{he(L.year,H.month)<=N||(H.miscCosts=[us(M,l),...H.miscCosts])})}),await _t(`Sonstige Position hinzugefügt: ${M} (${p(l)} €) für zukünftige Monate`),ve("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ne();return}await Je(`Sonstige Position hinzugefügt: ${M} (${p(l)} €)`),ve("Sonstige Position wurde hinzugefügt."),ne()}async function ir(o){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const f=qe(),d=h.selectedYear;if(!f||!d)return;const x=f.miscCosts.find(L=>L.id===o);if(!x)return;const M=he(d,h.selectedMonth),N=h.years.some(L=>L.months.some(H=>he(L.year,H.month)>M&&H.miscCosts.some(O=>O.description===x.description&&O.amountCents===x.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.miscCosts=f.miscCosts.filter(L=>L.id!==o),N){h.years.forEach(L=>{L.months.forEach(H=>{he(L.year,H.month)<=M||(H.miscCosts=H.miscCosts.filter(O=>!(O.description===x.description&&O.amountCents===x.amountCents)))})}),await _t(`Sonstige Position gelöscht: ${x.description} (${p(x.amountCents)} €) inkl. zukünftiger Monate`),ve("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Je(`Sonstige Position gelöscht: ${x.description} (${p(x.amountCents)} €)`),ve("Sonstige Position wurde gelöscht."),ne()}async function Ka(o,l,f,d){const x=qe(),M=h.selectedYear;if(!x||!M)return;const A=o.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(l<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const N=ds(A,l,f);if(x.incomes=[N,...x.incomes],d){const L=he(M,h.selectedMonth);h.years.forEach(H=>{H.months.forEach(O=>{he(H.year,O.month)<=L||(O.incomes=[ds(A,l,f),...O.incomes])})}),await _t(`Einkommen hinzugefügt: ${A} (${p(l)} €, ${Nn(f)}) für zukünftige Monate`),ve("Einkommen wurde für zukünftige Monate hinzugefügt."),ne();return}await Je(`Einkommen hinzugefügt: ${A} (${p(l)} €, ${Nn(f)})`),ve("Einkommen wurde hinzugefügt."),ne()}async function fa(o,l){const f=qe();if(!f)return;const d=f.incomes.find(x=>x.id===o);d&&(f.incomes=f.incomes.map(x=>{if(x.id!==o)return x;if(!l){const{incomeSource:M,...A}=x;return A}return{...x,incomeSource:l}}),await Je(`Einkommensart angepasst: ${d.description} → ${Nn(l)}`),ne())}async function jn(o){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const f=qe(),d=h.selectedYear;if(!f||!d)return;const x=f.incomes.find(L=>L.id===o);if(!x)return;const M=he(d,h.selectedMonth),N=h.years.some(L=>L.months.some(H=>he(L.year,H.month)>M&&H.incomes.some(O=>O.description===x.description&&O.amountCents===x.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(f.incomes=f.incomes.filter(L=>L.id!==o),N){h.years.forEach(L=>{L.months.forEach(H=>{he(L.year,H.month)<=M||(H.incomes=H.incomes.filter(O=>!(O.description===x.description&&O.amountCents===x.amountCents)))})}),await _t(`Einkommen gelöscht: ${x.description} (${p(x.amountCents)} €) inkl. zukünftiger Monate`),ve("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ne();return}await Je(`Einkommen gelöscht: ${x.description} (${p(x.amountCents)} €)`),ve("Einkommen wurde gelöscht."),ne()}async function ja(){const o=await Hs(),l=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),d=`haushaltsbuch-backup-${hn()}-${Xa()}.json`,x=document.createElement("a");x.href=f,x.download=d,x.click(),URL.revokeObjectURL(f),Na(d),ne(),ve("Backup wurde exportiert.")}async function or(o){const l=await o.text(),f=JSON.parse(l);await Js(f);const[d,x,M]=await Promise.all([Xn(),Fr(),Dr()]);h.years=d,h.annualVariableFixedTemplates=M.templates,h.annualVariableFixedTemplateVersion=M.version,Oa(h.years),ra(h.years),h.fixedTemplates=x.templates,h.fixedTemplateVersion=x.version,await Fa(h.years),h.persistentAuditLog=await Lr(),h.selectedYear=Ja(d),h.selectedMonth=fn(),Na(o.name),ve("Backup wurde importiert."),ne()}function ne(){const o=Ut(),l=qe(),f=hn(),d=l?at(l):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},x=o?wn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},M=o?qn(o):[],A=l?l.foodBudgetCents??0:0,N=l?l.goingOutBudgetCents??0:0,L=l?l.fixedBudgetCents??l.fixedCosts.reduce((r,$)=>r+$.plannedCents,0):0,H=l?l.variableBudgetCents??l.variablePositions.reduce((r,$)=>r+$.budgetCents,0):0,O=l?l.miscBudgetCents??0:0,Q=o?o.months.reduce((r,$)=>r+($.foodBudgetCents??0),0):0,te=o?o.months.reduce((r,$)=>r+($.goingOutBudgetCents??0),0):0,ge=o?o.months.reduce((r,$)=>r+($.fixedBudgetCents??$.fixedCosts.reduce((V,J)=>V+J.plannedCents,0)),0):0,de=o?o.months.reduce((r,$)=>r+($.variableBudgetCents??$.variablePositions.reduce((V,J)=>V+J.budgetCents,0)),0):0,Ae=o?o.months.reduce((r,$)=>r+($.miscBudgetCents??0),0):0,le=l?l.incomes.reduce((r,$)=>r+(wt($.incomeSource)?$.amountCents:0),0):0,$e=l?l.incomes.reduce((r,$)=>r+($.incomeSource==="salary"?$.amountCents:0),0):0,rt=l?l.incomes.reduce((r,$)=>r+($.incomeSource==="fresh"?$.amountCents:0),0):0,Se=Ia(),pe=o?Se.get(he(o.year,h.selectedMonth)):void 0,Ze=o?o.months.slice().sort((r,$)=>r.month-$.month)[0]:void 0,q=pe?.carriedFromPreviousCents??0,ot=pe?.hasPreviousMonth??!1,st=pe?.effectiveIncomeCents??le,et=l?jt(l):0,It=pe?.netCents??le-et,re=st-d.totalCents,ht=$e-d.totalCents,Pe=d.totalCents>0?`${($e/d.totalCents*100).toFixed(1)} %`:"-",Re=q<0?"danger":q>0?"budget-under":"",Ie=It<0?"danger":It>0?"budget-under":"",Ve=re<0?"danger":re>0?"budget-under":"",Ye=o?o.months.reduce((r,$)=>r+$.incomes.reduce((V,J)=>V+(wt(J.incomeSource)?J.amountCents:0),0),0):0,lt=o?o.months.reduce((r,$)=>r+$.incomes.reduce((V,J)=>V+(J.incomeSource==="salary"?J.amountCents:0),0),0):0,Vt=o?o.months.reduce((r,$)=>r+$.incomes.reduce((V,J)=>V+(J.incomeSource==="fresh"?J.amountCents:0),0),0):0,Ht=o&&Ze?Se.get(he(o.year,Ze.month))?.carriedFromPreviousCents??0:0,Mt=Ye+Ht,ct=Mt-x.totalCents,Jt=lt-x.totalCents,_e=x.totalCents>0?`${(lt/x.totalCents*100).toFixed(1)} %`:"-",Ee=Ht<0?"danger":Ht>0?"budget-under":"",Le=ct<0?"danger":ct>0?"budget-under":"",De=A+N+L+H+O,ze=A+N,Dt=d.foodCents+d.goingOutCents,Xt=ze-Dt,Nt=Ke(Dt,ze),$t=Q+te+ge+de+Ae,ut=st-De,Yt=Mt-$t,Qt=De-d.totalCents,Zt=$t-x.totalCents,B=r=>r<0?"danger":r>0?"budget-under":"",K=(r,$)=>$<=0?"muted":r>=$?"budget-under":"danger",it=K($e,d.totalCents),Cn=K(lt,x.totalCents),se=(r,$)=>{if($<=0)return"0%";const J=Math.max(0,r)/$*100;return`${Math.min(100,Math.max(0,J)).toFixed(1)}%`},Rn=(r,$)=>{if($<=0)return r>0?100:0;const V=Math.max(0,r)/$*100;return Math.max(0,V)},Mn=[{label:"Essen",budgetCents:A,actualCents:d.foodCents},{label:"Ausgehen",budgetCents:N,actualCents:d.goingOutCents},{label:"Fixkosten",budgetCents:L,actualCents:d.fixedCents},{label:"Variable",budgetCents:H,actualCents:d.variableCents},{label:"Sonstige",budgetCents:O,actualCents:d.miscCents}];Math.max(1,...Mn.flatMap(r=>[r.budgetCents,r.actualCents]));const Ra=(r,$)=>$<=0?"bar-positive":r<=0||$>r?"bar-negative":"bar-positive",Vn=[{label:"Einkommen gesamt",valueCents:st,className:"bar-income"},{label:"Budget gesamt",valueCents:De,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:d.totalCents,className:"bar-expense"},{label:"Netto",valueCents:re,className:re<0?"bar-negative":"bar-positive"}],lr=Math.max(1,...Vn.map(r=>Math.abs(r.valueCents))),cr=o?o.months.slice().sort((r,$)=>r.month-$.month).map(r=>{const $=r.foodBudgetCents??0,V=r.goingOutBudgetCents??0,J=r.fixedBudgetCents??r.fixedCosts.reduce((dn,tt)=>dn+tt.plannedCents,0),xe=r.variableBudgetCents??r.variablePositions.reduce((dn,tt)=>dn+tt.budgetCents,0),Xe=r.miscBudgetCents??0,Pt=$+V+J+xe+Xe;return{month:r.month,foodBudgetCents:$,goingOutBudgetCents:V,fixedBudgetCents:J,variableBudgetCents:xe,miscBudgetCents:Xe,totalBudgetCents:Pt}}):[],St=new Map(cr.map(r=>[r.month,r])),Lt=r=>{if(r.length===0)return null;const $=Math.min(...r),V=Math.max(...r),J=Math.round(r.reduce((xe,Xe)=>xe+Xe,0)/r.length);return{min:$,avg:J,max:V}},pt=o&&o.year===Kt()?M.filter(r=>r.month<=fn()):M,ha=pt.map(r=>r.summary.foodCents),pa=pt.map(r=>r.summary.goingOutCents),Yn=pt.map(r=>r.summary.fixedCents),va=pt.map(r=>r.summary.variableCents),Va=pt.map(r=>r.summary.miscCents),ur=pt.map(r=>r.summary.totalCents),ma=pt.map(r=>o?Se.get(he(o.year,r.month))?.plannedBudgetCents??0:0),ga=pt.map(r=>o?Se.get(he(o.year,r.month))?.netCents??0:0),Ya=new Map((o?.months??[]).map(r=>[r.month,r.incomes.reduce(($,V)=>$+(V.incomeSource==="salary"?V.amountCents:0),0)])),ba=pt.map(r=>Ya.get(r.month)??0),qt={food:Lt(ha),goingOut:Lt(pa),fixed:Lt(Yn),variable:Lt(va),misc:Lt(Va),total:Lt(ur),salary:Lt(ba),budget:Lt(ma),net:Lt(ga)},Br=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],en={food:ha.reduce((r,$)=>r+$,0),goingOut:pa.reduce((r,$)=>r+$,0),fixed:Yn.reduce((r,$)=>r+$,0),variable:va.reduce((r,$)=>r+$,0),misc:Va.reduce((r,$)=>r+$,0),total:ur.reduce((r,$)=>r+$,0),salary:ba.reduce((r,$)=>r+$,0),budget:ma.reduce((r,$)=>r+$,0)},_r=Br.map(({key:r,label:$})=>{const V=qt.food?.[r]??null,J=qt.goingOut?.[r]??null,xe=qt.fixed?.[r]??null,Xe=qt.variable?.[r]??null,Pt=qt.misc?.[r]??null,dn=qt.total?.[r]??null,tt=qt.salary?.[r]??null,Gn=qt.budget?.[r]??null,$a=qt.net?.[r]??null,Tt=Hn=>Hn===null?"-":p(Hn);return`<tr>
                  <td><strong>${$}</strong></td>
                  <td>${Tt(V)}</td>
                  <td>${Tt(J)}</td>
                  <td>${Tt(xe)}</td>
                  <td>${Tt(Xe)}</td>
                  <td>${Tt(Pt)}</td>
                  <td>${Tt(dn)}</td>
                  <td>${Tt(tt)}</td>
                  <td>${Tt(Gn)}</td>
                  <td>${Tt($a)}</td>
                </tr>`}).join(""),dr=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${p(en.food)}</td>
                  <td>${p(en.goingOut)}</td>
                  <td>${p(en.fixed)}</td>
                  <td>${p(en.variable)}</td>
                  <td>${p(en.misc)}</td>
                  <td>${p(en.total)}</td>
                  <td>${p(en.salary)}</td>
                  <td>${p(en.budget)}</td>
                </tr>`,za=Math.max(1,...M.flatMap(r=>{const $=St.get(r.month)?.totalBudgetCents;return[r.summary.totalCents,$??0]})),fr=Math.max(1,...M.flatMap(r=>{const $=St.get(r.month),V=r.summary.foodCents+r.summary.goingOutCents,J=($?.foodBudgetCents??0)+($?.goingOutBudgetCents??0);return[V,J]})),Ua=Math.max(1,...M.flatMap(r=>{const $=St.get(r.month)?.fixedBudgetCents??0;return[r.summary.fixedCents,$]})),ya=Math.max(1,...M.flatMap(r=>{const $=St.get(r.month)?.variableBudgetCents??0;return[r.summary.variableCents,$]})),Wa=Math.max(1,...M.flatMap(r=>{const $=St.get(r.month)?.miscBudgetCents??0;return[r.summary.miscCents,$]})),Ga=Ke(d.fixedCents,L),Mr=Ke(d.foodCents,A),Pr=Ke(d.goingOutCents,N),hr=Ke(d.variableCents,H),zn=Ke(d.miscCents,O),yt=r=>r===0?"-":p(r),Ue=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(L)}</div>
        <div class="compact-cost-actual ${Ga}">${yt(d.fixedCents)}</div>
      </div>`,Ca=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${p(H)}</div>
        <div class="compact-cost-actual ${hr}">${yt(d.variableCents)}</div>
      </div>`,Pn=l?l.fixedCosts.length>0?l.fixedCosts.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${Bt(r.name)}</div>
                  <div class="compact-cost-budget">${p(r.plannedCents)}</div>
                  <div class="compact-cost-actual ${Ke(r.actualCents,r.plannedCents)}">${yt(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,Tr=l?l.variablePositions.length>0?l.variablePositions.map(r=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${Bt(r.name)}${r.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${p(r.budgetCents)}</div>
                  <div class="compact-cost-actual ${Ke(r.actualCents,r.budgetCents)}">${yt(r.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,xn=h.editingFixedTemplateId?h.fixedTemplates.find(r=>r.id===h.editingFixedTemplateId):null,pr=h.hasUnexportedChanges,ln=h.unexportedChangeLog.slice().reverse(),xa=h.persistentAuditLog.slice().sort((r,$)=>$.timestampIso.localeCompare(r.timestampIso)),Tn=h.lastBackupFileName?Bt(h.lastBackupFileName):"-",cn={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},Ct=h.years.slice().sort((r,$)=>r.year-$.year),e=Ct.some(r=>r.year===h.dashboardYear)?h.dashboardYear:h.selectedYear??Ct[Ct.length-1]?.year??null,t=typeof e=="number"?Ct.find(r=>r.year===e):void 0,n=t?t.months.slice().sort((r,$)=>r.month-$.month):[],a=t?wn(t):cn,s=t?Kn(t):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},i=t?$n(t):0,c=t?Sn(t,Se):0,u=i+c,g=t?t.months.reduce((r,$)=>r+jt($),0):0,S=u-g,b=u-a.totalCents,m=[{label:"Essen",budgetCents:s.foodCents,actualCents:a.foodCents},{label:"Ausgehen",budgetCents:s.goingOutCents,actualCents:a.goingOutCents},{label:"Fixkosten",budgetCents:s.fixedCents,actualCents:a.fixedCents},{label:"Variable",budgetCents:s.variableCents,actualCents:a.variableCents},{label:"Sonstige",budgetCents:s.miscCents,actualCents:a.miscCents}],v=n.map(r=>{const $=t?Se.get(he(t.year,r.month)):void 0,V=at(r),J=r.incomes.reduce((Hn,vr)=>Hn+vr.amountCents,0),xe=$?.effectiveIncomeCents??J,Xe=$?.plannedBudgetCents??jt(r),Pt=V.foodCents,dn=V.goingOutCents,tt=Pt+dn,Gn=V.totalCents,$a=xe-Xe,Tt=xe-Gn;return{month:r.month,foodCents:Pt,goingOutCents:dn,foodAndGoingOutCents:tt,effectiveIncomeCents:xe,plannedBudgetCents:Xe,actualCostCents:Gn,plannedNetCents:$a,actualNetCents:Tt}}),k=Math.max(1,...v.map(r=>r.actualCostCents)),y=Math.max(1,...v.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),C=Math.max(1,...v.map(r=>r.foodAndGoingOutCents)),E=Math.max(1,...v.map(r=>r.foodCents)),_=Math.max(1,...v.map(r=>r.goingOutCents)),w=v.map((r,$,V)=>{const J=$>0?V[$-1]?.plannedNetCents??r.plannedNetCents:r.plannedNetCents;return{...r,monthLabel:Me(r.month),monthShortLabel:Me(r.month).slice(0,3),deltaCents:r.plannedNetCents-J}}),T=w[w.length-1]??null,I=Math.min(0,...w.map(r=>r.plannedNetCents)),j=Math.max(0,...w.map(r=>r.plannedNetCents)),R=Math.max(1,j-I),F=720,U=320,z=18,D=18,W=38,ce=56,be=F-ce-D,ee=U-z-W,ue=r=>{if(w.length<=1)return ce+be/2;const $=r/(w.length-1);return ce+$*be},Te=r=>z+(j-r)/R*ee,We=w.map((r,$)=>{const V=ue($),J=Te(r.plannedNetCents);return{...r,x:V,y:J,leftPercent:V/F*100,topPercent:J/U*100}}),Oe=We.map((r,$)=>`${$===0?"M":"L"} ${r.x.toFixed(1)} ${r.y.toFixed(1)}`).join(" "),un=We.length>0?`${Oe} L ${We[We.length-1]?.x.toFixed(1)} ${(z+ee).toFixed(1)} L ${We[0]?.x.toFixed(1)} ${(z+ee).toFixed(1)} Z`:"",ka=5,ys=Array.from({length:ka},(r,$)=>{const V=$/(ka-1),J=j-V*R;return{valueCents:Math.round(J/100)*100,y:Te(J)}}),Kr=Te(0),Cs=w[0]?.plannedNetCents??0,wa=(w[w.length-1]?.plannedNetCents??0)-Cs,xs=wa<0?"trend-badge-negative":wa>0?"trend-badge-positive":"trend-badge-neutral",jr=wa<0?"↘":wa>0?"↗":"→",ks=wa<0?"Abwärtstrend":wa>0?"Aufwärtstrend":"Seitwärts",Un=Ct.reduce((r,$)=>{const V=Kn($);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Wn=Ct.reduce((r,$)=>{const V=wn($);return{foodCents:r.foodCents+V.foodCents,goingOutCents:r.goingOutCents+V.goingOutCents,fixedCents:r.fixedCents+V.fixedCents,variableCents:r.variableCents+V.variableCents,miscCents:r.miscCents+V.miscCents,totalCents:r.totalCents+V.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),ws=Ct.reduce((r,$)=>r+$n($),0),$s=Ct[0]?Sn(Ct[0],Se):0,Ar=ws+$s,Rr=Ar-Un.totalCents,Vr=Ar-Wn.totalCents,Yr=[{label:"Essen",budgetCents:Un.foodCents,actualCents:Wn.foodCents},{label:"Ausgehen",budgetCents:Un.goingOutCents,actualCents:Wn.goingOutCents},{label:"Fixkosten",budgetCents:Un.fixedCents,actualCents:Wn.fixedCents},{label:"Variable",budgetCents:Un.variableCents,actualCents:Wn.variableCents},{label:"Sonstige",budgetCents:Un.miscCents,actualCents:Wn.miscCents}],zr=Math.max(1,...Yr.flatMap(r=>[r.budgetCents,r.actualCents])),dt=Ct.map(r=>{const $=wn(r),V=Kn(r),J=$n(r),xe=vn(r),Xe=Sn(r,Se),Pt=J+Xe;return{year:r.year,salaryIncomeCents:xe.salaryIncomeCents,freshIncomeCents:xe.freshIncomeCents,totalIncomeCents:xe.salaryIncomeCents+xe.freshIncomeCents,budgetTotalCents:V.totalCents,actualTotalCents:$.totalCents,effectiveIncomeCents:Pt,plannedNetCents:Pt-V.totalCents,actualNetCents:Pt-$.totalCents}}),Ur=Math.max(1,...dt.flatMap(r=>[Math.abs(r.plannedNetCents),Math.abs(r.actualNetCents)])),Ss=Math.max(1,...dt.map(r=>r.actualTotalCents)),Es=Math.max(1,...dt.map(r=>r.totalIncomeCents)),Bs=Math.max(1,...dt.map(r=>r.salaryIncomeCents)),Wr=Math.max(1,...dt.flatMap(r=>[r.totalIncomeCents,r.actualTotalCents])),Gr=Math.max(1,...dt.flatMap(r=>[r.salaryIncomeCents,r.actualTotalCents])),_s=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${h.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${h.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${h.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${Ct.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':h.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${Ct.map(r=>`<option value="${r.year}" ${r.year===e?"selected":""}>${r.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${t?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${p(u)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(g)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(a.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${B(S)}">${p(S)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${B(b)}">${p(b)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${jr}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${xs}">${jr} ${ks}</span>
                    </div>
                  </header>
                  ${T?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${Bt(T.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${B(T.plannedNetCents)}" data-year-trend-active-net>${p(T.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${p(T.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${p(T.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${B(T.deltaCents)}" data-year-trend-active-delta>${T.deltaCents>=0?"+":""}${p(T.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${F} ${U}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${t?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${ys.map(r=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${ce}" y1="${r.y.toFixed(1)}" x2="${F-D}" y2="${r.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${ce-10}" y="${(r.y+4).toFixed(1)}" text-anchor="end">${p(r.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${ce}" y1="${Kr.toFixed(1)}" x2="${F-D}" y2="${Kr.toFixed(1)}"></line>
                              ${un?`<path class="year-trend-area" d="${un}"></path>`:""}
                              ${Oe?`<path class="year-trend-line" d="${Oe}"></path>`:""}
                              ${We.map(r=>`
                                    <circle class="year-trend-node ${r.plannedNetCents<0?"is-negative":""}" cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${r.x.toFixed(1)}" y="${U-12}" text-anchor="middle">${Bt(r.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${We.map((r,$)=>`
                                    <button
                                      class="year-trend-point-hit ${$===We.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${r.leftPercent.toFixed(2)}%; top:${r.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${$===We.length-1?"1":"0"}"
                                      data-month-label="${Bt(r.monthLabel)}"
                                      data-net-cents="${r.plannedNetCents}"
                                      data-actual-net-cents="${r.actualNetCents}"
                                      data-income-cents="${r.effectiveIncomeCents}"
                                      data-expense-cents="${r.actualCostCents}"
                                      data-delta-cents="${r.deltaCents}"
                                      aria-label="${Bt(r.monthLabel)}: Kalkulierter Saldo ${p(r.plannedNetCents)}, Einkommen ${p(r.effectiveIncomeCents)}, Ausgaben ${p(r.actualCostCents)}"
                                      aria-pressed="${$===We.length-1?"true":"false"}"
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
                    ${m.map(r=>{const $=Rn(r.actualCents,r.budgetCents),V=Math.min(100,$),J=`${$.toFixed(0)}%`,xe=r.budgetCents-r.actualCents,Xe=xe<0?"danger":xe>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${Ra(r.budgetCents,r.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${V.toFixed(1)}%" title="${r.label}: ${p(r.actualCents)} von ${p(r.budgetCents)}">
                              <span class="circle-chart-value">${J}</span>
                            </div>
                            <div class="circle-chart-label">${r.label}</div>
                            <div class="circle-chart-meta muted">B ${p(r.budgetCents)} / I ${p(r.actualCents)}</div>
                            <div class="circle-chart-meta ${Xe}">${xe>=0?"+":""}${p(xe)}</div>
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
                    ${v.map(r=>{const $=se(r.actualCostCents,k);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${p(r.actualCostCents)} €</span></div>
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
                    ${v.map(r=>{const $=se(Math.abs(r.plannedNetCents),y),V=se(Math.abs(r.actualNetCents),y),J=r.plannedNetCents<0?"bar-negative":"bar-positive",xe=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Me(r.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(r.plannedNetCents)} | Ist-Saldo: ${p(r.actualNetCents)}">
                              <div class="bar ${J}" style="width:${$}; opacity: 0.35;"></div>
                              <div class="bar ${xe}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${B(r.plannedNetCents)}">B ${p(r.plannedNetCents)}</span>
                              <span class="${B(r.actualNetCents)}">I ${p(r.actualNetCents)}</span>
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
                        <td>${Me(r.month)}</td>
                        <td>${p(r.effectiveIncomeCents)}</td>
                        <td>${p(r.plannedBudgetCents)}</td>
                        <td>${p(r.actualCostCents)}</td>
                        <td class="${B(r.plannedNetCents)}">${p(r.plannedNetCents)}</td>
                        <td class="${B(r.actualNetCents)}">${p(r.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:h.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${Ct.map(r=>`<option value="${r.year}" ${r.year===e?"selected":""}>${r.year}</option>`).join("")}
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
                    ${v.map(r=>{const $=se(r.foodAndGoingOutCents,C);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${p(r.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(v.length,1)}, minmax(0, 1fr));">
                    ${v.map(r=>{const $=se(r.foodCents,E);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${p(r.foodCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(v.length,1)}, minmax(0, 1fr));">
                    ${v.map(r=>{const $=se(r.goingOutCents,_);return`
                          <div class="spark-bar" title="${Me(r.month)}: ${p(r.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${p(r.goingOutCents)} €</span></div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${p(Ar)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${p(Un.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${p(Wn.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${B(Rr)}">${p(Rr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${B(Vr)}">${p(Vr)}</div><div class="eval-value"></div></div>
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
                    ${Yr.map(r=>{const $=se(r.budgetCents,zr),V=se(r.actualCents,zr),J=Ra(r.budgetCents,r.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${r.label}</div>
                            <div class="bar-track" title="Budget: ${p(r.budgetCents)} | Ist: ${p(r.actualCents)}">
                              <div class="bar bar-budget" style="width:${$}"></div>
                              <div class="bar-marker" style="left:${$}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${J}" style="width:${V}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(dt.length,1)}, minmax(0, 1fr));">
                    ${dt.map(r=>{const $=se(r.actualTotalCents,Ss);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
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
                    ${dt.map(r=>{const $=se(Math.abs(r.plannedNetCents),Ur),V=se(Math.abs(r.actualNetCents),Ur),J=r.plannedNetCents<0?"bar-negative":"bar-positive",xe=r.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${r.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${p(r.plannedNetCents)} | Ist-Saldo: ${p(r.actualNetCents)}">
                              <div class="bar ${J}" style="width:${$}; opacity: 0.35;"></div>
                              <div class="bar ${xe}" style="width:${V}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${B(r.plannedNetCents)}">B ${p(r.plannedNetCents)}</span>
                              <span class="${B(r.actualNetCents)}">I ${p(r.actualNetCents)}</span>
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
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${dt.map(r=>`<tr>
                        <td>${r.year}</td>
                        <td>${p(r.salaryIncomeCents)}</td>
                        <td>${p(r.totalIncomeCents)}</td>
                        <td>${p(r.effectiveIncomeCents)}</td>
                        <td>${p(r.budgetTotalCents)}</td>
                        <td>${p(r.actualTotalCents)}</td>
                        <td class="${B(r.plannedNetCents)}">${p(r.plannedNetCents)}</td>
                        <td class="${B(r.actualNetCents)}">${p(r.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(dt.length,1)}, minmax(0, 1fr));">
                    ${dt.map(r=>{const $=se(r.totalIncomeCents,Es);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${p(r.totalIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(dt.length,1)}, minmax(0, 1fr));">
                    ${dt.map(r=>{const $=se(r.salaryIncomeCents,Bs);return`
                          <div class="spark-bar" title="${r.year}: ${p(r.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${$}"><span class="spark-bar-fill-value">${p(r.salaryIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(dt.length,1)}, minmax(0, 1fr));">
                    ${dt.map(r=>{const $=se(r.totalIncomeCents,Wr),V=se(r.actualTotalCents,Wr);return`
                          <div class="spark-bar" title="${r.year}: Einkommen ${p(r.totalIncomeCents)} | Kosten ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${$}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${V}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(dt.length,1)}, minmax(0, 1fr));">
                    ${dt.map(r=>{const $=se(r.salaryIncomeCents,Gr),V=se(r.actualTotalCents,Gr);return`
                          <div class="spark-bar" title="${r.year}: Gehalt ${p(r.salaryIncomeCents)} | Kosten ${p(r.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${$}"></div>
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${V}"><span class="spark-bar-fill-value">${p(r.actualTotalCents)} €</span></div>
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
    `,Ms=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,Ps=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${xn?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${xn?xt(xn.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${xn?"Änderung speichern":"Vorlage speichern"}</button>
          ${xn?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,Hr=h.annualVariableFixedTemplates.reduce((r,$)=>r+$.plannedCents,0),Ts=Math.round(Hr/12),As=`
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
                <div class="eval-value budget-under">${p(Hr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${p(Ts)}</div>
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
            ${h.annualVariableFixedTemplates.map(r=>{const $=La(r.dueDateIso),V=$?Me($.month):"-";return`<tr>
                    <td>${r.name}</td>
                    <td>${r.dueDateIso}</td>
                    <td>${V}</td>
                    <td>${p(r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${r.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,Jr=h.topModal==="years"?"Jahr hinzufügen":h.topModal==="fixed"?"Fixe Kosten (zentral)":h.topModal==="variable-fixed"?"Variable Fixkosten":h.topModal==="dashboard"?"Dashboard":"",Os=h.topModal==="years"?Ms:h.topModal==="fixed"?Ps:h.topModal==="variable-fixed"?As:h.topModal==="dashboard"?_s:"";P.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${pr?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${h.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${gs.map(r=>`<option value="${r}" ${h.theme===r?"selected":""}>${Qs(r)}</option>`).join("")}
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
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${Jr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${Jr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${Os}
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
                  ${ln.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${ln.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Bt(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${xa.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${xa.map(r=>`<li><strong>${new Date(r.timestampIso).toLocaleString("de-DE")}</strong><span>${Bt(r.message)}</span></li>`).join("")}</ol>`}
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
                  ${Array.from({length:12},(r,$)=>$+1).map(r=>`<option value="${r}" ${r===h.selectedMonth?"selected":""}>${Me(r)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${p(le)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${p($e)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${p(rt)}</strong>
              </div>
              <div class="compact-income-row ${Re}">
                <span>Übernahme aus Vormonat</span>
                <strong>${ot?p(q):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${p(st)}</strong>
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
                  ${Pn}
                  ${Ue}
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
                  ${Tr}
                  ${Ca}
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
                    <div class="compact-cost-budget">${p(ze)}</div>
                    <div class="compact-cost-actual ${Nt}">${yt(Dt)}</div>
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
                    <div class="compact-cost-budget">${p(O)}</div>
                    <div class="compact-cost-actual ${zn}">${yt(d.miscCents)}</div>
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
                  ${Mn.map(r=>`
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
                  ${Vn.map(r=>{const $=se(Math.abs(r.valueCents),lr),V=r.valueCents>=0?"+":"",J=r.label==="Netto"?r.valueCents<0?"danger":r.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${r.label}</div>
                          <div class="bar-track" title="${p(r.valueCents)}">
                            <div class="bar ${r.className}" style="width:${$}"></div>
                          </div>
                          <div class="bar-meta"><span class="${J}">${V}${p(r.valueCents)}</span></div>
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
                      ${M.map(r=>{const $=St.get(r.month)?.totalBudgetCents??0,V=se($,za),J=se(r.summary.totalCents,za);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.totalCents)} € | Budget ${p($)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
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
                      ${M.map(r=>{const $=St.get(r.month),V=($?.foodBudgetCents??0)+($?.goingOutBudgetCents??0),J=r.summary.foodCents+r.summary.goingOutCents,xe=se(V,fr),Xe=se(J,fr);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(J)} € | Budget ${p(V)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${xe}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${Xe}"><span class="spark-bar-fill-value">${p(J)} €</span></div>
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
                      ${M.map(r=>{const $=St.get(r.month)?.fixedBudgetCents??0,V=se($,Ua),J=se(r.summary.fixedCents,Ua);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.fixedCents)} € | Budget ${p($)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
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
                      ${M.map(r=>{const $=St.get(r.month)?.variableBudgetCents??0,V=se($,ya),J=se(r.summary.variableCents,ya);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.variableCents)} € | Budget ${p($)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
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
                      ${M.map(r=>{const $=St.get(r.month)?.miscBudgetCents??0,V=se($,Wa),J=se(r.summary.miscCents,Wa);return`
                            <div class="spark-bar" title="${Me(r.month)}: Ist ${p(r.summary.miscCents)} € | Budget ${p($)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${V}"></div>
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
                    <div class="eval-value">${p(le)}</div>
                    <div class="eval-value">${p(Ye)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${p($e)}</div>
                    <div class="eval-value">${p(lt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${p(rt)}</div>
                    <div class="eval-value">${p(Vt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${Re}">${ot?p(q):"-"}</div>
                    <div class="eval-value ${Ee}">${o?p(Ht):"-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${p(st)}</div>
                    <div class="eval-value">${p(Mt)}</div>
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
                    <div class="eval-value">${Rt(A,d.foodCents)}</div>
                    <div class="eval-value">${p(Q)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${Rt(N,d.goingOutCents)}</div>
                    <div class="eval-value">${p(te)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${Rt(L,d.fixedCents)}</div>
                    <div class="eval-value">${p(ge)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${Rt(H,d.variableCents)}</div>
                    <div class="eval-value">${p(de)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${Rt(O,d.miscCents)}</div>
                    <div class="eval-value">${p(Ae)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${Rt(De,d.totalCents)}</div>
                    <div class="eval-value">${p($t)}</div>
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
                    <div class="eval-value ${Mr}">${p(d.foodCents)}</div>
                    <div class="eval-value">${p(x.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${Pr}">${p(d.goingOutCents)}</div>
                    <div class="eval-value">${p(x.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Ga}">${p(d.fixedCents)}</div>
                    <div class="eval-value">${p(x.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${hr}">${p(d.variableCents)}</div>
                    <div class="eval-value">${p(x.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${zn}">${p(d.miscCents)}</div>
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
                    <div class="eval-value ${B(Qt)}">${p(Qt)}</div>
                    <div class="eval-value ${B(Zt)}">${p(Zt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${B(ut)}">${p(ut)}</div>
                    <div class="eval-value ${B(Yt)}">${p(Yt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${Ve}">${p(re)}</div>
                    <div class="eval-value ${Le}">${p(ct)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${B(ht)}">${p(ht)}</div>
                    <div class="eval-value ${B(Jt)}">${p(Jt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${it}">${Pe}</div>
                    <div class="eval-value ${Cn}">${_e}</div>
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
                ${M.map((r,$,V)=>{const J=o?Se.get(he(o.year,r.month)):void 0,xe=J?.plannedBudgetCents??0,Xe=J?.netCents??0,Pt=Ya.get(r.month)??0,dn=Xe<0?"danger":Xe>0?"budget-under":"",tt=V[$-1],Gn=tt?.summary.foodCents??null,$a=tt?.summary.goingOutCents??null,Tt=tt?.summary.fixedCents??null,Hn=tt?.summary.variableCents??null,vr=tt?.summary.miscCents??null,Xr=tt?.summary.totalCents??null,Qr=tt!==void 0?Ya.get(tt.month)??0:null,Zr=o&&tt?Se.get(he(o.year,tt.month))?.plannedBudgetCents??0:null,es=Gn===null?null:r.summary.foodCents-Gn,ts=$a===null?null:r.summary.goingOutCents-$a,ns=Tt===null?null:r.summary.fixedCents-Tt,as=Hn===null?null:r.summary.variableCents-Hn,rs=vr===null?null:r.summary.miscCents-vr,ss=Xr===null?null:r.summary.totalCents-Xr,is=Qr===null?null:Pt-Qr,os=Zr===null?null:xe-Zr,Sa=Et=>Et===null?"muted":Et>0?"danger":Et<0?"budget-under":"muted",Fs=Et=>Et===null?"muted":Et>0?"budget-under":Et<0?"danger":"muted",Is=Et=>Et===null?"muted":Et>0?"danger":Et<0?"budget-under":"muted",An=Et=>Et===null?"(Δ -)":`(Δ ${Et>0?"+":""}${p(Et)})`,ls=o&&tt?Se.get(he(o.year,tt.month))?.netCents??0:null,Ea=ls===null?null:Xe-ls,Ds=Ea===null?"(Δ -)":`(Δ ${Ea>0?"+":""}${p(Ea)})`,Ns=Ea===null?"muted":Ea<0?"danger":Ea>0?"budget-under":"muted";return`<tr>
                  <td>${Me(r.month)}</td>
                  <td>${p(r.summary.foodCents)} <span class="${Sa(es)}">${An(es)}</span></td>
                  <td>${p(r.summary.goingOutCents)} <span class="${Sa(ts)}">${An(ts)}</span></td>
                  <td>${p(r.summary.fixedCents)} <span class="${Sa(ns)}">${An(ns)}</span></td>
                  <td>${p(r.summary.variableCents)} <span class="${Sa(as)}">${An(as)}</span></td>
                  <td>${p(r.summary.miscCents)} <span class="${Sa(rs)}">${An(rs)}</span></td>
                  <td>${p(r.summary.totalCents)} <span class="${Sa(ss)}">${An(ss)}</span></td>
                  <td>${p(Pt)} <span class="${Fs(is)}">${An(is)}</span></td>
                  <td>${p(xe)} <span class="${Is(os)}">${An(os)}</span></td>
                  <td class="${dn}">${p(Xe)} <span class="${Ns}">${Ds}</span></td>
                </tr>`}).join("")}
                ${_r}
                ${dr}
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
                    <td class="${Re}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${xt(q)}" />
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
                  <strong>${p(le)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${p($e)} €</strong>
                </div>
                <div class="column-overview-row ${Re}">
                  <span>Übernahme Vormonat</span>
                  <strong>${l?`${p(q)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${p(st)} €</strong>
                </div>
                <div class="column-overview-row ${Ie}">
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
                ${Ot(A,d.foodCents)}
                ${Ot(N,d.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${p(ze)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${p(Dt)} €</strong>
                  </div>
                  <div class="column-overview-row ${Nt}">
                    <span>Diff</span>
                    <strong>${p(Xt)} €</strong>
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
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${xt(N)}" ${l?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${l?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${l?l.days.map(r=>{const $=r.foodCents>0,V=r.goingOutCents>0,J=`${r.isoDate===f?"today-row":""} ${$||V?"day-has-entry":""}`.trim(),xe=`amount-input ${$?"day-input-has-value":""}`.trim(),Xe=`amount-input ${V?"day-input-has-value":""}`.trim();return`<tr class="${J}">
                      <td>${new Date(r.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${xe}" data-day-food="${r.isoDate}" type="number" min="0" step="0.01" value="${xt(r.foodCents)}" /></td>
                      <td><input class="${Xe}" data-day-going="${r.isoDate}" type="number" min="0" step="0.01" value="${xt(r.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${Ot(L,d.fixedCents)}
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
                ${l?l.fixedCosts.map(r=>`<tr>
                    <td>${r.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${r.id}" type="number" min="0" step="0.01" value="${xt(r.plannedCents)}" /></td>
                    <td class="${Ke(r.actualCents,r.plannedCents)}"><input class="amount-input" data-fixed-actual="${r.id}" type="number" min="0" step="0.01" value="${xt(r.actualCents)}" /></td>
                    <td class="${Ke(r.actualCents,r.plannedCents)}">${p(r.actualCents-r.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${r.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${Ot(H,d.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${xt(H)}" ${l?"":"disabled"} />
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
                    <td><input class="amount-input" data-variable-position-budget="${r.id}" type="number" min="0" step="0.01" value="${xt(r.budgetCents)}" /></td>
                    <td class="${Ke(r.actualCents,r.budgetCents)}"><input class="amount-input" data-variable-position-actual="${r.id}" type="number" min="0" step="0.01" value="${xt(r.actualCents)}" /></td>
                    <td class="${Ke(r.actualCents,r.budgetCents)}">${p(r.actualCents-r.budgetCents)}</td>
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
              ${Ot(O,d.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${xt(O)}" ${l?"":"disabled"} />
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
          <p class="muted">Letztes verwendetes Backup: ${Tn}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(h.topModal||h.showUnexportedChangeLogModal||h.showPersistentAuditLogModal)),Be(),tn(),mt(),Ma()}function Be(){const o=P.querySelector("#theme-select"),l=P.querySelector("#open-years-modal"),f=P.querySelector("#open-fixed-modal"),d=P.querySelector("#open-variable-fixed-modal"),x=P.querySelector("#open-dashboard-modal"),M=P.querySelector("#panel-modal-close"),A=P.querySelector("#panel-modal-backdrop"),N=P.querySelector("#open-unexported-change-log"),L=P.querySelector("#open-persistent-audit-log"),H=P.querySelector("#unexported-change-log-close"),O=P.querySelector("#unexported-change-log-backup"),Q=P.querySelector("#unexported-change-log-backdrop"),te=P.querySelector("#persistent-audit-log-close"),ge=P.querySelector("#persistent-audit-log-backdrop"),de=P.querySelector("#new-year"),Ae=P.querySelector("#create-year"),le=P.querySelector("#year-select"),$e=P.querySelector("#month-select");o?.addEventListener("change",()=>{const B=o.value;ps(B)&&na(B)}),l?.addEventListener("click",()=>{Qn("years")}),f?.addEventListener("click",()=>{Qn("fixed")}),d?.addEventListener("click",()=>{Qn("variable-fixed")}),x?.addEventListener("click",()=>{Qn("dashboard")}),N?.addEventListener("click",()=>{Zn()}),L?.addEventListener("click",()=>{On()}),H?.addEventListener("click",()=>{ea()}),O?.addEventListener("click",async()=>{try{await ja()}catch(B){console.error("Backup-Export fehlgeschlagen",B),ve("Backup konnte nicht exportiert werden.","error")}}),Q?.addEventListener("click",B=>{B.target===Q&&ea()}),te?.addEventListener("click",()=>{ta()}),ge?.addEventListener("click",B=>{B.target===ge&&ta()}),P.querySelectorAll("[data-dashboard-tab]").forEach(B=>{B.addEventListener("click",()=>{const K=B.dataset.dashboardTab;K!=="year"&&K!=="food"&&K!=="all"||(h.dashboardTab=K,ne())})});const rt=P.querySelector("#dashboard-year-select");rt?.addEventListener("change",()=>{const B=Number.parseInt(rt.value,10);Number.isInteger(B)&&(h.dashboardYear=B,ne())}),M?.addEventListener("click",()=>{_a()}),A?.addEventListener("click",B=>{B.target===A&&_a()}),h.topModal&&window.setTimeout(()=>{M?.focus()},0),h.showUnexportedChangeLogModal&&window.setTimeout(()=>{H?.focus()},0),h.showPersistentAuditLogModal&&window.setTimeout(()=>{te?.focus()},0),Ae?.addEventListener("click",async()=>{const B=Number.parseInt(de?.value??"",10);if(!Number.isInteger(B)){alert("Bitte gültiges Jahr eingeben.");return}await aa(B)}),le?.addEventListener("change",()=>{h.selectedYear=Number.parseInt(le.value,10),h.selectedMonth=fn(),ne()}),$e?.addEventListener("change",()=>{h.selectedMonth=Number.parseInt($e.value,10),ne()});const Se=P.querySelector("#fixed-template-name"),pe=P.querySelector("#fixed-template-amount"),Ze=P.querySelector("#add-fixed-template"),q=P.querySelector("#cancel-fixed-template-edit"),ot=P.querySelector("#annual-variable-fixed-name"),st=P.querySelector("#annual-variable-fixed-date"),et=P.querySelector("#annual-variable-fixed-amount"),It=P.querySelector("#add-annual-variable-fixed-template");Ze?.addEventListener("click",async()=>{const B=Se?.value??"",K=Ne(pe?.value??"0");await Sr(B,K),Se&&(Se.value=""),pe&&(pe.value="")}),q?.addEventListener("click",()=>{Bn()}),It?.addEventListener("click",async()=>{const B=ot?.value??"",K=st?.value??"",it=Ne(et?.value??"0");await la(B,K,it),ot&&(ot.value=""),st&&(st.value=""),et&&(et.value="")}),P.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(B=>{B.addEventListener("click",async()=>{const K=B.dataset.removeAnnualVariableFixedTemplate;K&&await Er(K)})}),P.querySelectorAll("[data-edit-fixed-template]").forEach(B=>{B.addEventListener("click",()=>{const K=B.dataset.editFixedTemplate;K&&rn(K)})}),P.querySelectorAll("[data-remove-fixed-template]").forEach(B=>{B.addEventListener("click",async()=>{const K=B.dataset.removeFixedTemplate;K&&await sn(K)})}),P.querySelectorAll("[data-day-food]").forEach(B=>{B.addEventListener("click",K=>{K.preventDefault(),B.blur(),nt(B)}),B.addEventListener("change",async()=>{const K=B.dataset.dayFood;K&&await Wt(K,"foodCents",Ne(B.value))})}),P.querySelectorAll("[data-day-going]").forEach(B=>{B.addEventListener("click",K=>{K.preventDefault(),B.blur(),nt(B)}),B.addEventListener("change",async()=>{const K=B.dataset.dayGoing;K&&await Wt(K,"goingOutCents",Ne(B.value))})}),P.querySelectorAll("[data-fixed-actual]").forEach(B=>{B.addEventListener("click",K=>{K.preventDefault(),B.blur(),nt(B)}),B.addEventListener("change",async()=>{const K=B.dataset.fixedActual;K&&await tr(K,Ne(B.value))})}),P.querySelectorAll("[data-fixed-planned]").forEach(B=>{B.addEventListener("click",K=>{K.preventDefault(),B.blur(),nt(B)}),B.addEventListener("change",async()=>{const K=B.dataset.fixedPlanned;K&&await gn(K,Ne(B.value))})});const re=P.querySelector("#fixed-budget");re?.addEventListener("click",B=>{B.preventDefault(),re.blur(),nt(re)}),re?.addEventListener("change",async()=>{await je(Ne(re.value))});const ht=P.querySelector("#food-budget");ht?.addEventListener("click",B=>{B.preventDefault(),ht.blur(),nt(ht)}),ht?.addEventListener("change",async()=>{await bn(Ne(ht.value))});const Pe=P.querySelector("#going-out-budget");Pe?.addEventListener("click",B=>{B.preventDefault(),Pe.blur(),nt(Pe)}),Pe?.addEventListener("change",async()=>{await Gt(Ne(Pe.value))}),P.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Cr()});const Ie=P.querySelector("#misc-budget");Ie?.addEventListener("click",B=>{B.preventDefault(),Ie.blur(),nt(Ie)}),Ie?.addEventListener("change",async()=>{await ar(Ne(Ie.value))});const Ve=P.querySelector("#variable-budget");Ve?.addEventListener("click",B=>{B.preventDefault(),Ve.blur(),nt(Ve)}),Ve?.addEventListener("change",async()=>{await _n(Ne(Ve.value))});const Ye=P.querySelector("#variable-position-name"),lt=P.querySelector("#variable-position-budget"),Vt=P.querySelector("#add-variable-position"),Ht=P.querySelector("#add-variable-position-recurring"),Mt=P.querySelector("#misc-description"),ct=P.querySelector("#misc-amount"),Jt=P.querySelector("#add-misc"),_e=P.querySelector("#add-misc-recurring"),Ee=P.querySelector("#income-description"),Le=P.querySelector("#income-source"),De=P.querySelector("#income-amount"),ze=P.querySelector("#add-income"),Dt=P.querySelector("#add-income-recurring"),Xt=P.querySelector("#fixed-cost-name"),Nt=P.querySelector("#fixed-cost-budget"),$t=P.querySelector("#add-fixed-cost"),ut=P.querySelector("#carryover-override");ut?.addEventListener("click",B=>{B.preventDefault(),ut.blur(),nt(ut)}),ut?.addEventListener("change",async()=>{const B=ut.value;if(!B.trim()){await ca(null);return}await ca(Ne(B))}),$t?.addEventListener("click",async()=>{const B=Ne(Nt?.value??"0");await nr(Xt?.value??"",B),Xt&&(Xt.value=""),Nt&&(Nt.value="")}),Vt?.addEventListener("click",async()=>{const B=Ne(lt?.value??"0");await ua(Ye?.value??"",B,!1),Ye&&(Ye.value=""),lt&&(lt.value="")}),Ht?.addEventListener("click",async()=>{const B=Ne(lt?.value??"0");await ua(Ye?.value??"",B,!0),Ye&&(Ye.value=""),lt&&(lt.value="")}),Jt?.addEventListener("click",async()=>{const B=Ne(ct?.value??"0");await fe(Mt?.value??"",B,!1),Mt&&(Mt.value=""),ct&&(ct.value="")}),_e?.addEventListener("click",async()=>{const B=Ne(ct?.value??"0");await fe(Mt?.value??"",B,!0),Mt&&(Mt.value=""),ct&&(ct.value="")}),ze?.addEventListener("click",async()=>{const B=Ne(De?.value??"0"),K=Le?.value,it=K==="balance"||K==="fresh"||K==="salary"?K:void 0;await Ka(Ee?.value??"",B,it,!1),Ee&&(Ee.value=""),De&&(De.value=""),Le&&(Le.value="salary")}),Dt?.addEventListener("click",async()=>{const B=Ne(De?.value??"0"),K=Le?.value,it=K==="balance"||K==="fresh"||K==="salary"?K:void 0;await Ka(Ee?.value??"",B,it,!0),Ee&&(Ee.value=""),De&&(De.value=""),Le&&(Le.value="salary")}),P.querySelectorAll("[data-income-source]").forEach(B=>{B.addEventListener("change",async()=>{const K=B.dataset.incomeSource;if(!K)return;const it=B.value;await fa(K,it==="balance"||it==="fresh"||it==="salary"?it:void 0)})}),P.querySelectorAll("[data-variable-position-budget]").forEach(B=>{B.addEventListener("click",K=>{K.preventDefault(),B.blur(),nt(B)}),B.addEventListener("change",async()=>{const K=B.dataset.variablePositionBudget;K&&await rr(K,Ne(B.value))})}),P.querySelectorAll("[data-variable-position-actual]").forEach(B=>{B.addEventListener("click",K=>{K.preventDefault(),B.blur(),nt(B)}),B.addEventListener("change",async()=>{const K=B.dataset.variablePositionActual;K&&await yn(K,Ne(B.value))})}),P.querySelectorAll("[data-remove-variable-position]").forEach(B=>{B.addEventListener("click",async()=>{const K=B.dataset.removeVariablePosition;K&&await da(K)})}),P.querySelectorAll("[data-move-variable-position-next]").forEach(B=>{B.addEventListener("click",async()=>{const K=B.dataset.moveVariablePositionNext;K&&await sr(K)})}),P.querySelectorAll("[data-remove-fixed]").forEach(B=>{B.addEventListener("click",async()=>{const K=B.dataset.removeFixed;K&&await qa(K)})}),P.querySelectorAll("[data-remove-income]").forEach(B=>{B.addEventListener("click",async()=>{const K=B.dataset.removeIncome;K&&await jn(K)})}),P.querySelectorAll("[data-remove-misc]").forEach(B=>{B.addEventListener("click",async()=>{const K=B.dataset.removeMisc;K&&await ir(K)})});const Yt=P.querySelector("#backup-export"),Qt=P.querySelector("#backup-import");P.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),Yt?.addEventListener("click",async()=>{await ja()}),Qt?.addEventListener("change",async()=>{const B=Qt.files?.[0];if(B){try{await or(B)}catch(K){console.error("Backup-Import fehlgeschlagen",K),ve("Backup konnte nicht importiert werden.","error")}Qt.value=""}})}return{init:$r}}const ei="modulepreload",ti=function(P){return"/habu26/"+P},ms={},ni=function(h,Fe,G){let ye=Promise.resolve();if(Fe&&Fe.length>0){let ft=function(He){return Promise.all(He.map(oe=>Promise.resolve(oe).then(kt=>({status:"fulfilled",value:kt}),kt=>({status:"rejected",reason:kt}))))};var ke=ft;document.getElementsByTagName("link");const ie=document.querySelector("meta[property=csp-nonce]"),Ce=ie?.nonce||ie?.getAttribute("nonce");ye=ft(Fe.map(He=>{if(He=ti(He),He in ms)return;ms[He]=!0;const oe=He.endsWith(".css"),kt=oe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${He}"]${kt}`))return;const vt=document.createElement("link");if(vt.rel=oe?"stylesheet":ei,oe||(vt.as="script"),vt.crossOrigin="",vt.href=He,Ce&&vt.setAttribute("nonce",Ce),document.head.appendChild(vt),oe)return new Promise((mt,tn)=>{vt.addEventListener("load",mt),vt.addEventListener("error",()=>tn(new Error(`Unable to preload CSS for ${He}`)))})}))}function ae(ie){const Ce=new Event("vite:preloadError",{cancelable:!0});if(Ce.payload=ie,window.dispatchEvent(Ce),!Ce.defaultPrevented)throw ie}return ye.then(ie=>{for(const Ce of ie||[])Ce.status==="rejected"&&ae(Ce.reason);return h().catch(ae)})};function ai(P={}){const{immediate:h=!1,onNeedRefresh:Fe,onOfflineReady:G,onRegistered:ye,onRegisteredSW:ae,onRegisterError:ke}=P;let ie,Ce;const ft=async(oe=!0)=>{await Ce};async function He(){if("serviceWorker"in navigator){if(ie=await ni(async()=>{const{Workbox:oe}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:oe}},[]).then(({Workbox:oe})=>new oe("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(oe=>{ke?.(oe)}),!ie)return;ie.addEventListener("activated",oe=>{(oe.isUpdate||oe.isExternal)&&window.location.reload()}),ie.addEventListener("installed",oe=>{oe.isUpdate||G?.()}),ie.register({immediate:h}).then(oe=>{ae?ae("/habu26/sw.js",oe):ye?.(oe)}).catch(oe=>{ke?.(oe)})}}return Ce=He(),ft}function ri(){ai({immediate:!0})}const bs=document.getElementById("app");if(!bs)throw new Error("App-Container nicht gefunden.");Zs(bs).init();ri();
