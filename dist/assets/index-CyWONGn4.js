(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const fe of document.querySelectorAll('link[rel="modulepreload"]'))X(fe);new MutationObserver(fe=>{for(const oe of fe)if(oe.type==="childList")for(const Se of oe.addedNodes)Se.tagName==="LINK"&&Se.rel==="modulepreload"&&X(Se)}).observe(document,{childList:!0,subtree:!0});function Ae(fe){const oe={};return fe.integrity&&(oe.integrity=fe.integrity),fe.referrerPolicy&&(oe.referrerPolicy=fe.referrerPolicy),fe.crossOrigin==="use-credentials"?oe.credentials="include":fe.crossOrigin==="anonymous"?oe.credentials="omit":oe.credentials="same-origin",oe}function X(fe){if(fe.ep)return;fe.ep=!0;const oe=Ae(fe);fetch(fe.href,oe)}})();const ki=[1,2,3,4,5,6,7,8,9,10,11,12];function is(){return new Date().toISOString()}function pt(B){const p=Math.random().toString(36).slice(2,10);return`${B}_${Date.now()}_${p}`}function wi(B,p){const Ae=new Date(B,p,0).getDate(),X=[];for(let fe=1;fe<=Ae;fe+=1){const oe=new Date(Date.UTC(B,p-1,fe));X.push({isoDate:oe.toISOString().slice(0,10),foodCents:0,goingOutCents:0})}return X}function $i(B){return B.map(p=>({id:pt("fixed"),templateId:p.id,name:p.name,plannedCents:p.plannedCents,actualCents:0}))}function Or(B,p,Ae){const X=p.reduce((oe,Se)=>oe+Se.plannedCents,0),fe=ki.map(oe=>({month:oe,days:wi(B,oe),weeklyShoppingWeekday:null,weeklyShoppingEstimateCents:0,foodBudgetCents:0,goingOutBudgetCents:0,incomes:[],fixedCosts:$i(p),fixedBudgetCents:X,variableCosts:[],variablePositions:[],variableBudgetCents:0,miscBudgetCents:0,miscCosts:[]}));return{year:B,createdAt:is(),templateVersion:Ae,months:fe}}function Gs(B,p){return{id:pt("expense"),description:B,amountCents:p,createdAt:is()}}function Ir(B,p,Ae){const X={id:pt("income"),description:B,amountCents:p,createdAt:is()};return Ae?{...X,incomeSource:Ae}:X}function _s(B,p){return B.toLocaleLowerCase("de-DE").includes(p)}function Lr(B,p,Ae,X){const fe=p.trim(),oe=fe.toLocaleLowerCase("de-DE");if(!oe)return{id:pt("search_eval"),keyword:"",keywordNormalized:"",createdAt:is(),totalHitCount:0,totalCents:0,currentYearCents:0,monthsWithHits:0,monthAverageCents:0,yearRows:[],monthRows:[]};let Se=0,ue=0,ve=0,nt=0,Ye=0;const de=Math.max(1,Math.min(12,X)),ft=[],ot=[];return B.slice().sort((qe,Et)=>qe.year-Et.year).forEach(qe=>{let Et=0,on=0,Rn=0,ln=0;qe.months.slice().sort((Bt,vt)=>Bt.month-vt.month).forEach(Bt=>{let vt=0,Mt=0;if(Bt.fixedCosts.forEach(xt=>{_s(xt.name,oe)&&(vt+=1,Mt+=xt.actualCents)}),Bt.variableCosts.forEach(xt=>{_s(xt.description,oe)&&(vt+=1,Mt+=xt.amountCents)}),Bt.variablePositions.forEach(xt=>{_s(xt.name,oe)&&(vt+=1,Mt+=xt.actualCents)}),Bt.miscCosts.forEach(xt=>{_s(xt.description,oe)&&(vt+=1,Mt+=xt.amountCents)}),vt<=0)return;Et+=vt,on+=Mt,(qe.year<Ae||qe.year===Ae&&Bt.month<=de)&&(ln+=1,Rn+=Mt),Se+=vt,ue+=Mt,(qe.year<Ae||qe.year===Ae&&Bt.month<=de)&&(nt+=1,Ye+=Mt),ot.push({year:qe.year,month:Bt.month,hitCount:vt,totalCents:Mt})}),!(Et<=0)&&(qe.year===Ae&&(ve+=on),ft.push({year:qe.year,hitCount:Et,totalCents:on,monthsWithHits:ln,monthAverageCents:ln>0?Math.round(Rn/ln):0}))}),{id:pt("search_eval"),keyword:fe,keywordNormalized:oe,createdAt:is(),totalHitCount:Se,totalCents:ue,currentYearCents:ve,monthsWithHits:nt,monthAverageCents:nt>0?Math.round(Ye/nt):0,yearRows:ft,monthRows:ot}}var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ei(B){return B&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B}var Ts={exports:{}},Bi=Ts.exports,Nr;function Mi(){return Nr||(Nr=1,(function(B,p){((Ae,X)=>{B.exports=X()})(Bi,function(){var Ae=function(e,t){return(Ae=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(n,s){n.__proto__=s}:function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}))(e,t)},X=function(){return(X=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function fe(e,t,n){for(var s,r=0,l=t.length;r<l;r++)!s&&r in t||((s=s||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var oe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Si,Se=Object.keys,ue=Array.isArray;function ve(e,t){return typeof t=="object"&&Se(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>"u"||oe.Promise||(oe.Promise=Promise);var nt=Object.getPrototypeOf,Ye={}.hasOwnProperty;function de(e,t){return Ye.call(e,t)}function ft(e,t){typeof t=="function"&&(t=t(nt(e))),(typeof Reflect>"u"?Se:Reflect.ownKeys)(t).forEach(function(n){qe(e,n,t[n])})}var ot=Object.defineProperty;function qe(e,t,n,s){ot(e,t,ve(n&&de(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},s))}function Et(e){return{from:function(t){return e.prototype=Object.create(t.prototype),qe(e.prototype,"constructor",e),{extend:ft.bind(null,e.prototype)}}}}var on=Object.getOwnPropertyDescriptor,Rn=[].slice;function ln(e,t,n){return Rn.call(e,t,n)}function Bt(e,t){return t(e)}function vt(e){if(!e)throw new Error("Assertion Failed")}function Mt(e){oe.setImmediate?setImmediate(e):setTimeout(e,0)}function Qt(e,t){if(typeof t=="string"&&de(e,t))return e[t];if(!t)return e;if(typeof t!="string"){for(var n=[],s=0,r=t.length;s<r;++s){var l=Qt(e,t[s]);n.push(l)}return n}var d,h=t.indexOf(".");return h===-1||(d=e[t.substr(0,h)])==null?void 0:Qt(d,t.substr(h+1))}function Ct(e,t,n){if(e&&t!==void 0&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof t!="string"&&"length"in t){vt(typeof n!="string"&&"length"in n);for(var s=0,r=t.length;s<r;++s)Ct(e,t[s],n[s])}else{var l,d,h=t.indexOf(".");h!==-1?(l=t.substr(0,h),(h=t.substr(h+1))===""?n===void 0?ue(e)&&!isNaN(parseInt(l))?e.splice(l,1):delete e[l]:e[l]=n:Ct(d=(d=e[l])&&de(e,l)?d:e[l]={},h,n)):n===void 0?ue(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function xt(e){var t,n={};for(t in e)de(e,t)&&(n[t]=e[t]);return n}var Fs=[].concat;function qa(e){return Fs.apply([],e)}var Kt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(qa([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(t){return t+e+"Array"})}))).filter(function(e){return oe[e]}),os=new Set(Kt.map(function(e){return oe[e]})),ca=null;function _t(e){return ca=new WeakMap,e=(function t(n){if(!n||typeof n!="object")return n;var s=ca.get(n);if(s)return s;if(ue(n)){s=[],ca.set(n,s);for(var r=0,l=n.length;r<l;++r)s.push(t(n[r]))}else if(os.has(n.constructor))s=n;else{var d,h=nt(n);for(d in s=h===Object.prototype?{}:Object.create(h),ca.set(n,s),n)de(n,d)&&(s[d]=t(n[d]))}return s})(e),ca=null,e}var ua={}.toString;function Va(e){return ua.call(e).slice(8,-1)}var Ra=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ds=typeof Ra=="symbol"?function(e){var t;return e!=null&&(t=e[Ra])&&t.apply(e)}:function(){return null};function gn(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var lt={};function Q(e){var t,n,s,r;if(arguments.length===1){if(ue(e))return e.slice();if(this===lt&&typeof e=="string")return[e];if(r=Ds(e))for(n=[];!(s=r.next()).done;)n.push(s.value);else{if(e==null)return[e];if(typeof(t=e.length)!="number")return[e];for(n=new Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var cn=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Kt=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ft=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Kt),ls={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function bn(e,t){this.name=e,this.message=t}function Sa(e,t){return e+". Errors: "+Object.keys(t).map(function(n){return t[n].toString()}).filter(function(n,s,r){return r.indexOf(n)===s}).join(`
`)}function me(e,t,n,s){this.failures=t,this.failedKeys=s,this.successCount=n,this.message=Sa(e,t)}function jn(e,t){this.name="BulkError",this.failures=Object.keys(t).map(function(n){return t[n]}),this.failuresByPos=t,this.message=Sa(e,this.failures)}Et(bn).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Et(me).from(bn),Et(jn).from(bn);var qt=Ft.reduce(function(e,t){return e[t]=t+"Error",e},{}),cs=bn,ne=Ft.reduce(function(e,t){var n=t+"Error";function s(r,l){this.name=n,r?typeof r=="string"?(this.message="".concat(r).concat(l?`
 `+l:""),this.inner=l||null):typeof r=="object"&&(this.message="".concat(r.name," ").concat(r.message),this.inner=r):(this.message=ls[t]||n,this.inner=null)}return Et(s).from(cs),e[t]=s,e},{}),An=(ne.Syntax=SyntaxError,ne.Type=TypeError,ne.Range=RangeError,Kt.reduce(function(e,t){return e[t+"Error"]=ne[t],e},{}));Kt=Ft.reduce(function(e,t){return["Syntax","Type","Range"].indexOf(t)===-1&&(e[t+"Error"]=ne[t]),e},{});function Fe(){}function mt(e){return e}function Os(e,t){return e==null||e===mt?t:function(n){return t(e(n))}}function yn(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Is(e,t){return e===Fe?t:function(){var n=e.apply(this,arguments),s=(n!==void 0&&(arguments[0]=n),this.onsuccess),r=this.onerror,l=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return s&&(this.onsuccess=this.onsuccess?yn(s,this.onsuccess):s),r&&(this.onerror=this.onerror?yn(r,this.onerror):r),l!==void 0?l:n}}function us(e,t){return e===Fe?t:function(){e.apply(this,arguments);var n=this.onsuccess,s=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?yn(n,this.onsuccess):n),s&&(this.onerror=this.onerror?yn(s,this.onerror):s)}}function Ls(e,t){return e===Fe?t:function(r){var s=e.apply(this,arguments),r=(ve(r,s),this.onsuccess),l=this.onerror,d=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?yn(r,this.onsuccess):r),l&&(this.onerror=this.onerror?yn(l,this.onerror):l),s===void 0?d===void 0?void 0:d:ve(s,d)}}function ds(e,t){return e===Fe?t:function(){return t.apply(this,arguments)!==!1&&e.apply(this,arguments)}}function ja(e,t){return e===Fe?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then=="function"){for(var s=this,r=arguments.length,l=new Array(r);r--;)l[r]=arguments[r];return n.then(function(){return t.apply(s,l)})}return t.apply(this,arguments)}}Kt.ModifyError=me,Kt.DexieError=bn,Kt.BulkError=jn;var Zt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function hs(e){Zt=e}var Yn={},ps=100,zn=typeof Promise>"u"?[]:(Ft=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[zn=crypto.subtle.digest("SHA-512",new Uint8Array([0])),nt(zn),Ft]:[Ft,nt(Ft),Ft]),Ft=zn[0],Nn=zn[1],Nn=Nn&&Nn.then,un=Ft&&Ft.constructor,Un=!!zn[2],en=function(e,t){da.push([e,t]),Cn&&(queueMicrotask(Ns),Cn=!1)},Ea=!0,Cn=!0,_e=[],Ba=[],xn=mt,Vt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Fe,pgp:!1,env:{},finalize:Fe},ee=Vt,da=[],dn=0,Wn=[];function z(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var t=this._PSD=ee;if(typeof e!="function"){if(e!==Yn)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ct(this,this._value)}else this._state=null,this._value=null,++t.ref,(function n(s,r){try{r(function(l){if(s._state===null){if(l===s)throw new TypeError("A promise cannot be resolved with itself.");var d=s._lib&&Jt();l&&typeof l.then=="function"?n(s,function(h,k){l instanceof z?l._then(h,k):l.then(h,k)}):(s._state=!0,s._value=l,za(s)),d&&Gn()}},ct.bind(null,s))}catch(l){ct(s,l)}})(this,e)}var ha={get:function(){var e=ee,t=Qn;function n(s,r){var l=this,d=!e.global&&(e!==ee||t!==Qn),h=d&&!wn(),k=new z(function(E,x){kn(l,new Ya(ms(s,e,d,h),ms(r,e,d,h),E,x,e))});return this._consoleTask&&(k._consoleTask=this._consoleTask),k}return n.prototype=Yn,n},set:function(e){qe(this,"then",e&&e.prototype===Yn?ha:{get:function(){return e},set:ha.set})}};function Ya(e,t,n,s,r){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof t=="function"?t:null,this.resolve=n,this.reject=s,this.psd=r}function ct(e,t){var n,s;Ba.push(t),e._state===null&&(n=e._lib&&Jt(),t=xn(t),e._state=!1,e._value=t,s=e,_e.some(function(r){return r._value===s._value})||_e.push(s),za(e),n)&&Gn()}function za(e){var t=e._listeners;e._listeners=[];for(var n=0,s=t.length;n<s;++n)kn(e,t[n]);var r=e._PSD;--r.ref||r.finalize(),dn===0&&(++dn,en(function(){--dn==0&&Jn()},[]))}function kn(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++dn,en(pa,[n,e,t])}}function pa(e,t,n){try{var s,r=t._value;!t._state&&Ba.length&&(Ba=[]),s=Zt&&t._consoleTask?t._consoleTask.run(function(){return e(r)}):e(r),t._state||Ba.indexOf(r)!==-1||(l=>{for(var d=_e.length;d;)if(_e[--d]._value===l._value)return _e.splice(d,1)})(t),n.resolve(s)}catch(l){n.reject(l)}finally{--dn==0&&Jn(),--n.psd.ref||n.psd.finalize()}}function Ns(){Pn(Vt,function(){Jt()&&Gn()})}function Jt(){var e=Ea;return Cn=Ea=!1,e}function Gn(){var e,t,n;do for(;0<da.length;)for(e=da,da=[],n=e.length,t=0;t<n;++t){var s=e[t];s[0].apply(null,s[1])}while(0<da.length);Cn=Ea=!0}function Jn(){for(var e=_e,t=(_e=[],e.forEach(function(s){s._PSD.onunhandled.call(null,s._value,s)}),Wn.slice(0)),n=t.length;n;)t[--n]()}function Ve(e){return new z(Yn,!1,e)}function xe(e,t){var n=ee;return function(){var s=Jt(),r=ee;try{return $n(n,!0),e.apply(this,arguments)}catch(l){t&&t(l)}finally{$n(r,!1),s&&Gn()}}}ft(z.prototype,{then:ha,_then:function(e,t){kn(this,new Ya(null,null,e,t,ee))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t=="function"?this.then(null,function(s){return(s instanceof t?n:Ve)(s)}):this.then(null,function(s){return(s&&s.name===t?n:Ve)(s)}))},finally:function(e){return this.then(function(t){return z.resolve(e()).then(function(){return t})},function(t){return z.resolve(e()).then(function(){return Ve(t)})})},timeout:function(e,t){var n=this;return e<1/0?new z(function(s,r){var l=setTimeout(function(){return r(new ne.Timeout(t))},e);n.then(s,r).finally(clearTimeout.bind(null,l))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&qe(z.prototype,Symbol.toStringTag,"Dexie.Promise"),Vt.env=vs(),ft(z,{all:function(){var e=Q.apply(null,arguments).map(va);return new z(function(t,n){e.length===0&&t([]);var s=e.length;e.forEach(function(r,l){return z.resolve(r).then(function(d){e[l]=d,--s||t(e)},n)})})},resolve:function(e){return e instanceof z?e:e&&typeof e.then=="function"?new z(function(t,n){e.then(t,n)}):new z(Yn,!0,e)},reject:Ve,race:function(){var e=Q.apply(null,arguments).map(va);return new z(function(t,n){e.map(function(s){return z.resolve(s).then(t,n)})})},PSD:{get:function(){return ee},set:function(e){return ee=e}},totalEchoes:{get:function(){return Qn}},newPSD:ut,usePSD:Pn,scheduler:{get:function(){return en},set:function(e){en=e}},rejectionMapper:{get:function(){return xn},set:function(e){xn=e}},follow:function(e,t){return new z(function(n,s){return ut(function(r,l){var d=ee;d.unhandleds=[],d.onunhandled=l,d.finalize=yn(function(){var h,k=this;h=function(){k.unhandleds.length===0?r():l(k.unhandleds[0])},Wn.push(function E(){h(),Wn.splice(Wn.indexOf(E),1)}),++dn,en(function(){--dn==0&&Jn()},[])},d.finalize),e()},t,n,s)})}}),un&&(un.allSettled&&qe(z,"allSettled",function(){var e=Q.apply(null,arguments).map(va);return new z(function(t){e.length===0&&t([]);var n=e.length,s=new Array(n);e.forEach(function(r,l){return z.resolve(r).then(function(d){return s[l]={status:"fulfilled",value:d}},function(d){return s[l]={status:"rejected",reason:d}}).then(function(){return--n||t(s)})})})}),un.any&&typeof AggregateError<"u"&&qe(z,"any",function(){var e=Q.apply(null,arguments).map(va);return new z(function(t,n){e.length===0&&n(new AggregateError([]));var s=e.length,r=new Array(s);e.forEach(function(l,d){return z.resolve(l).then(function(h){return t(h)},function(h){r[d]=h,--s||n(new AggregateError(r))})})})}),un.withResolvers)&&(z.withResolvers=un.withResolvers);var re={awaits:0,echoes:0,id:0},Hn=0,Xn=[],fa=0,Qn=0,fs=0;function ut(e,d,n,s){var r=ee,l=Object.create(r),d=(l.parent=r,l.ref=0,l.global=!1,l.id=++fs,Vt.env,l.env=Un?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject}:{},d&&ve(l,d),++r.ref,l.finalize=function(){--this.parent.ref||this.parent.finalize()},Pn(l,e,n,s));return l.ref===0&&l.finalize(),d}function gt(){return re.id||(re.id=++Hn),++re.awaits,re.echoes+=ps,re.id}function wn(){return!!re.awaits&&(--re.awaits==0&&(re.id=0),re.echoes=re.awaits*ps,!0)}function va(e){return re.echoes&&e&&e.constructor===un?(gt(),e.then(function(t){return wn(),t},function(t){return wn(),Qe(t)})):e}function Ks(){var e=Xn[Xn.length-1];Xn.pop(),$n(e,!1)}function $n(e,t){var n,s,r=ee;(t?!re.echoes||fa++&&e===ee:!fa||--fa&&e===ee)||queueMicrotask(t?(function(l){++Qn,re.echoes&&--re.echoes!=0||(re.echoes=re.awaits=re.id=0),Xn.push(ee),$n(l,!0)}).bind(null,e):Ks),e!==ee&&(ee=e,r===Vt&&(Vt.env=vs()),Un)&&(n=Vt.env.Promise,s=e.env,r.global||e.global)&&(Object.defineProperty(oe,"Promise",s.PromiseProp),n.all=s.all,n.race=s.race,n.resolve=s.resolve,n.reject=s.reject,s.allSettled&&(n.allSettled=s.allSettled),s.any)&&(n.any=s.any)}function vs(){var e=oe.Promise;return Un?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(oe,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Pn(e,t,n,s,r){var l=ee;try{return $n(e,!0),t(n,s,r)}finally{$n(l,!1)}}function ms(e,t,n,s){return typeof e!="function"?e:function(){var r=ee;n&&gt(),$n(t,!0);try{return e.apply(this,arguments)}finally{$n(r,!1),s&&queueMicrotask(wn)}}}function Ua(e){Promise===un&&re.echoes===0?fa===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(""+Nn).indexOf("[native code]")===-1&&(gt=wn=Fe);var Qe=z.reject,Fn="￿",hn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Wa="String expected.",Zn=[],Ma="__dbnames",Ga="readonly",Ja="readwrite";function Dn(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var gs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function _a(e){return typeof e!="string"||/\./.test(e)?function(t){return t}:function(t){return t[e]===void 0&&e in t&&delete(t=_t(t))[e],t}}function bs(){throw ne.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ge(e,t){try{var n=ys(e),s=ys(t);if(n!==s)return n==="Array"?1:s==="Array"?-1:n==="binary"?1:s==="binary"?-1:n==="string"?1:s==="string"?-1:n==="Date"?1:s!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t<e?1:e<t?-1:0;case"binary":for(var r=ea(e),l=ea(t),d=r.length,h=l.length,k=d<h?d:h,E=0;E<k;++E)if(r[E]!==l[E])return r[E]<l[E]?-1:1;return d===h?0:d<h?-1:1;case"Array":for(var x=e,b=t,w=x.length,y=b.length,C=w<y?w:y,m=0;m<C;++m){var M=ge(x[m],b[m]);if(M!==0)return M}return w===y?0:w<y?-1:1}}catch{}return NaN}function ys(e){var t=typeof e;return t=="object"&&(ArrayBuffer.isView(e)||(t=Va(e))==="ArrayBuffer")?"binary":t}function ea(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function ma(e,t,n){var s=e.schema.yProps;return s?(t&&0<n.numFailures&&(t=t.filter(function(r,l){return!n.failures[l]})),Promise.all(s.map(function(r){return r=r.updatesTable,t?e.db.table(r).where("k").anyOf(t).delete():e.db.table(r).clear()})).then(function(){return n})):n}Cs.prototype.execute=function(e){var t=this["@@propmod"];if(t.add!==void 0){var n=t.add;if(ue(n))return fe(fe([],ue(e)?e:[],!0),n).sort();if(typeof n=="number")return(Number(e)||0)+n;if(typeof n=="bigint")try{return BigInt(e)+n}catch{return BigInt(0)+n}throw new TypeError("Invalid term ".concat(n))}if(t.remove!==void 0){var s=t.remove;if(ue(s))return ue(e)?e.filter(function(r){return!s.includes(r)}).sort():[];if(typeof s=="number")return Number(e)-s;if(typeof s=="bigint")try{return BigInt(e)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}return n=(n=t.replacePrefix)==null?void 0:n[0],n&&typeof e=="string"&&e.startsWith(n)?t.replacePrefix[1]+e.substring(n.length):e};var ta=Cs;function Cs(e){this["@@propmod"]=e}function xs(e,t){for(var n=Se(t),s=n.length,r=!1,l=0;l<s;++l){var d=n[l],h=t[d],k=Qt(e,d);h instanceof ta?(Ct(e,d,h.execute(k)),r=!0):k!==h&&(Ct(e,d,h),r=!0)}return r}Ie.prototype._trans=function(e,t,n){var s=this._tx||ee.trans,r=this.name,l=Zt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(e==="readonly"?"read":"write"," ").concat(this.name));function d(E,x,b){if(b.schema[r])return t(b.idbtrans,b);throw new ne.NotFound("Table "+r+" not part of transaction")}var h=Jt();try{var k=s&&s.db._novip===this.db._novip?s===ee.trans?s._promise(e,d,n):ut(function(){return s._promise(e,d,n)},{trans:s,transless:ee.transless||ee}):(function E(x,b,w,y){if(x.idbdb&&(x._state.openComplete||ee.letThrough||x._vip)){var C=x._createTransaction(b,w,x._dbSchema);try{C.create(),x._state.PR1398_maxLoop=3}catch(m){return m.name===qt.InvalidState&&x.isOpen()&&0<--x._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),x.close({disableAutoOpen:!1}),x.open().then(function(){return E(x,b,w,y)})):Qe(m)}return C._promise(b,function(m,M){return ut(function(){return ee.trans=C,y(m,M,C)})}).then(function(m){if(b==="readwrite")try{C.idbtrans.commit()}catch{}return b==="readonly"?m:C._completion.then(function(){return m})})}if(x._state.openComplete)return Qe(new ne.DatabaseClosed(x._state.dbOpenError));if(!x._state.isBeingOpened){if(!x._state.autoOpen)return Qe(new ne.DatabaseClosed);x.open().catch(Fe)}return x._state.dbReadyPromise.then(function(){return E(x,b,w,y)})})(this.db,e,[this.name],d);return l&&(k._consoleTask=l,k=k.catch(function(E){return console.trace(E),Qe(E)})),k}finally{h&&Gn()}},Ie.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?Qe(new ne.Type("Invalid argument to Table.get()")):this._trans("readonly",function(s){return n.core.get({trans:s,key:e}).then(function(r){return n.hook.reading.fire(r)})}).then(t)},Ie.prototype.where=function(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(ue(e))return new this.db.WhereClause(this,"[".concat(e.join("+"),"]"));var t=Se(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(h){if(h.compound&&t.every(function(E){return 0<=h.keyPath.indexOf(E)})){for(var k=0;k<t.length;++k)if(t.indexOf(h.keyPath[k])===-1)return!1;return!0}return!1}).sort(function(h,k){return h.keyPath.length-k.keyPath.length})[0];if(n&&this.db._maxKey!==Fn)return d=n.keyPath.slice(0,t.length),this.where(d).equals(d.map(function(h){return e[h]}));!n&&Zt&&console.warn("The query ".concat(JSON.stringify(e)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function r(h,k){return ge(h,k)===0}var d=t.reduce(function(x,k){var E=x[0],x=x[1],b=s[k],w=e[k];return[E||b,E||!b?Dn(x,b&&b.multi?function(y){return y=Qt(y,k),ue(y)&&y.some(function(C){return r(w,C)})}:function(y){return r(w,Qt(y,k))}):x]},[null,null]),l=d[0],d=d[1];return l?this.where(l.name).equals(e[l.keyPath]).filter(d):n?this.filter(d):this.where(t).equals("")},Ie.prototype.filter=function(e){return this.toCollection().and(e)},Ie.prototype.count=function(e){return this.toCollection().count(e)},Ie.prototype.offset=function(e){return this.toCollection().offset(e)},Ie.prototype.limit=function(e){return this.toCollection().limit(e)},Ie.prototype.each=function(e){return this.toCollection().each(e)},Ie.prototype.toArray=function(e){return this.toCollection().toArray(e)},Ie.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ie.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,ue(e)?"[".concat(e.join("+"),"]"):e))},Ie.prototype.reverse=function(){return this.toCollection().reverse()},Ie.prototype.mapToClass=function(e){for(var t=this.db,n=this.name,s=((this.schema.mappedClass=e).prototype instanceof bs&&(e=(d=>{var h=x,k=d;if(typeof k!="function"&&k!==null)throw new TypeError("Class extends value "+String(k)+" is not a constructor or null");function E(){this.constructor=h}function x(){return d!==null&&d.apply(this,arguments)||this}return Ae(h,k),h.prototype=k===null?Object.create(k):(E.prototype=k.prototype,new E),Object.defineProperty(x.prototype,"db",{get:function(){return t},enumerable:!1,configurable:!0}),x.prototype.table=function(){return n},x})(e)),new Set),r=e.prototype;r;r=nt(r))Object.getOwnPropertyNames(r).forEach(function(d){return s.add(d)});function l(d){if(!d)return d;var h,k=Object.create(e.prototype);for(h in d)if(!s.has(h))try{k[h]=d[h]}catch{}return k}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=l,this.hook("reading",l),e},Ie.prototype.defineClass=function(){return this.mapToClass(function(e){ve(this,e)})},Ie.prototype.add=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,d=e;return l&&r&&(d=_a(l)(e)),this._trans("readwrite",function(h){return n.core.mutate({trans:h,type:"add",keys:t!=null?[t]:null,values:[d]})}).then(function(h){return h.numFailures?z.reject(h.failures[0]):h.lastResult}).then(function(h){if(l)try{Ct(e,l,h)}catch{}return h})},Ie.prototype.upsert=function(e,t){var n=this,s=this.schema.primKey.keyPath;return this._trans("readwrite",function(r){return n.core.get({trans:r,key:e}).then(function(l){var d=l??{};return xs(d,t),s&&Ct(d,s,e),n.core.mutate({trans:r,type:"put",values:[d],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(h){return h.numFailures?z.reject(h.failures[0]):!!l})})})},Ie.prototype.update=function(e,t){return typeof e!="object"||ue(e)?this.where(":id").equals(e).modify(t):(e=Qt(e,this.schema.primKey.keyPath))===void 0?Qe(new ne.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(t)},Ie.prototype.put=function(e,t){var n=this,s=this.schema.primKey,r=s.auto,l=s.keyPath,d=e;return l&&r&&(d=_a(l)(e)),this._trans("readwrite",function(h){return n.core.mutate({trans:h,type:"put",values:[d],keys:t!=null?[t]:null})}).then(function(h){return h.numFailures?z.reject(h.failures[0]):h.lastResult}).then(function(h){if(l)try{Ct(e,l,h)}catch{}return h})},Ie.prototype.delete=function(e){var t=this;return this._trans("readwrite",function(n){return t.core.mutate({trans:n,type:"delete",keys:[e]}).then(function(s){return ma(t,[e],s)}).then(function(s){return s.numFailures?z.reject(s.failures[0]):void 0})})},Ie.prototype.clear=function(){var e=this;return this._trans("readwrite",function(t){return e.core.mutate({trans:t,type:"deleteRange",range:gs}).then(function(n){return ma(e,null,n)})}).then(function(t){return t.numFailures?z.reject(t.failures[0]):void 0})},Ie.prototype.bulkGet=function(e){var t=this;return this._trans("readonly",function(n){return t.core.getMany({keys:e,trans:n}).then(function(s){return s.map(function(r){return t.hook.reading.fire(r)})})})},Ie.prototype.bulkAdd=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,l=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(d){var h=s.schema.primKey,E=h.auto,h=h.keyPath;if(h&&r)throw new ne.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ne.InvalidArgument("Arguments objects and keys must have the same length");var k=e.length,E=h&&E?e.map(_a(h)):e;return s.core.mutate({trans:d,type:"add",keys:r,values:E,wantResults:l}).then(function(x){var b=x.numFailures,w=x.failures;if(b===0)return l?x.results:x.lastResult;throw new jn("".concat(s.name,".bulkAdd(): ").concat(b," of ").concat(k," operations failed"),w)})})},Ie.prototype.bulkPut=function(e,t,n){var s=this,r=Array.isArray(t)?t:void 0,l=(n=n||(r?void 0:t))?n.allKeys:void 0;return this._trans("readwrite",function(d){var h=s.schema.primKey,E=h.auto,h=h.keyPath;if(h&&r)throw new ne.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(r&&r.length!==e.length)throw new ne.InvalidArgument("Arguments objects and keys must have the same length");var k=e.length,E=h&&E?e.map(_a(h)):e;return s.core.mutate({trans:d,type:"put",keys:r,values:E,wantResults:l}).then(function(x){var b=x.numFailures,w=x.failures;if(b===0)return l?x.results:x.lastResult;throw new jn("".concat(s.name,".bulkPut(): ").concat(b," of ").concat(k," operations failed"),w)})})},Ie.prototype.bulkUpdate=function(e){var t=this,n=this.core,s=e.map(function(d){return d.key}),r=e.map(function(d){return d.changes}),l=[];return this._trans("readwrite",function(d){return n.getMany({trans:d,keys:s,cache:"clone"}).then(function(h){var k=[],E=[],x=(e.forEach(function(b,w){var y=b.key,C=b.changes,m=h[w];if(m){for(var M=0,_=Object.keys(C);M<_.length;M++){var S=_[M],F=C[S];if(S===t.schema.primKey.keyPath){if(ge(F,y)!==0)throw new ne.Constraint("Cannot update primary key in bulkUpdate()")}else Ct(m,S,F)}l.push(w),k.push(y),E.push(m)}}),k.length);return n.mutate({trans:d,type:"put",keys:k,values:E,updates:{keys:s,changeSpecs:r}}).then(function(b){var w=b.numFailures,y=b.failures;if(w===0)return x;for(var C=0,m=Object.keys(y);C<m.length;C++){var M,_=m[C],S=l[Number(_)];S!=null&&(M=y[_],delete y[_],y[S]=M)}throw new jn("".concat(t.name,".bulkUpdate(): ").concat(w," of ").concat(x," operations failed"),y)})})})},Ie.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans("readwrite",function(s){return t.core.mutate({trans:s,type:"delete",keys:e}).then(function(r){return ma(t,e,r)})}).then(function(s){var r=s.numFailures,l=s.failures;if(r===0)return s.lastResult;throw new jn("".concat(t.name,".bulkDelete(): ").concat(r," of ").concat(n," operations failed"),l)})};var ks=Ie;function Ie(){}function na(e){function t(d,h){if(h){for(var k=arguments.length,E=new Array(k-1);--k;)E[k-1]=arguments[k];return n[d].subscribe.apply(null,E),e}if(typeof d=="string")return n[d]}var n={};t.addEventType=l;for(var s=1,r=arguments.length;s<r;++s)l(arguments[s]);return t;function l(d,h,k){var E,x;if(typeof d!="object")return h=h||ds,x={subscribers:[],fire:k=k||Fe,subscribe:function(b){x.subscribers.indexOf(b)===-1&&(x.subscribers.push(b),x.fire=h(x.fire,b))},unsubscribe:function(b){x.subscribers=x.subscribers.filter(function(w){return w!==b}),x.fire=x.subscribers.reduce(h,k)}},n[d]=t[d]=x;Se(E=d).forEach(function(b){var w=E[b];if(ue(w))l(b,E[b][0],E[b][1]);else{if(w!=="asap")throw new ne.InvalidArgument("Invalid event config");var y=l(b,mt,function(){for(var C=arguments.length,m=new Array(C);C--;)m[C]=arguments[C];y.subscribers.forEach(function(M){Mt(function(){M.apply(null,m)})})})}})}}function On(e,t){return Et(t).from({prototype:e}),t}function aa(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Ha(e,t){e.filter=Dn(e.filter,t)}function Xa(e,t,n){var s=e.replayFilter;e.replayFilter=s?function(){return Dn(s(),t())}:t,e.justLimit=n&&!s}function Ta(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new ne.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed")}function Qa(e,t,n){var s=Ta(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:s,range:e.range}})}function Aa(e,t,n,s){var r,l,d=e.replayFilter?Dn(e.filter,e.replayFilter()):e.filter;return e.or?(r={},l=function(h,k,E){var x,b;d&&!d(k,E,function(w){return k.stop(w)},function(w){return k.fail(w)})||((b=""+(x=k.primaryKey))=="[object ArrayBuffer]"&&(b=""+new Uint8Array(x)),de(r,b))||(r[b]=!0,t(h,k,E))},Promise.all([e.or._iterate(l,n),ws(Qa(e,s,n),e.algorithm,l,!e.keysOnly&&e.valueMapper)])):ws(Qa(e,s,n),Dn(e.algorithm,d),t,!e.keysOnly&&e.valueMapper)}function ws(e,t,n,s){var r=xe(s?function(l,d,h){return n(s(l),d,h)}:n);return e.then(function(l){if(l)return l.start(function(){var d=function(){return l.continue()};t&&!t(l,function(h){return d=h},function(h){l.stop(h),d=Fe},function(h){l.fail(h),d=Fe})||r(l.value,l,function(h){return d=h}),d()})})}Ee.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,Qe.bind(null,n.error)):n.table._trans("readonly",e).then(t)},Ee.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,Qe.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},Ee.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Dn(t.algorithm,e)},Ee.prototype._iterate=function(e,t){return Aa(this._ctx,e,t,this._ctx.table.core)},Ee.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&ve(n,e),t._ctx=n,t},Ee.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ee.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return Aa(t,e,n,t.table.core)})},Ee.prototype.count=function(e){var t=this;return this._read(function(n){var s,r=t._ctx,l=r.table.core;return aa(r,!0)?l.count({trans:n,query:{index:Ta(r,l.schema),range:r.range}}).then(function(d){return Math.min(d,r.limit)}):(s=0,Aa(r,function(){return++s,!1},n,l).then(function(){return s}))}).then(e)},Ee.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),s=n[0],r=n.length-1;function l(k,E){return E?l(k[n[E]],E-1):k[s]}var d=this._ctx.dir==="next"?1:-1;function h(k,E){return ge(l(k,r),l(E,r))*d}return this.toArray(function(k){return k.sort(h)}).then(t)},Ee.prototype.toArray=function(e){var t=this;return this._read(function(n){var s,r,l,d=t._ctx;return d.dir==="next"&&aa(d,!0)&&0<d.limit?(s=d.valueMapper,r=Ta(d,d.table.core.schema),d.table.core.query({trans:n,limit:d.limit,values:!0,query:{index:r,range:d.range}}).then(function(h){return h=h.result,s?h.map(s):h})):(l=[],Aa(d,function(h){return l.push(h)},n,d.table.core).then(function(){return l}))},e)},Ee.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,aa(t)?Xa(t,function(){var n=e;return function(s,r){return n===0||(n===1?--n:r(function(){s.advance(n),n=0}),!1)}}):Xa(t,function(){var n=e;return function(){return--n<0}})),this},Ee.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Xa(this._ctx,function(){var t=e;return function(n,s,r){return--t<=0&&s(r),0<=t}},!0),this},Ee.prototype.until=function(e,t){return Ha(this._ctx,function(n,s,r){return!e(n.value)||(s(r),t)}),this},Ee.prototype.first=function(e){return this.limit(1).toArray(function(t){return t[0]}).then(e)},Ee.prototype.last=function(e){return this.reverse().first(e)},Ee.prototype.filter=function(e){var t;return Ha(this._ctx,function(n){return e(n.value)}),(t=this._ctx).isMatch=Dn(t.isMatch,e),this},Ee.prototype.and=function(e){return this.filter(e)},Ee.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},Ee.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ee.prototype.desc=function(){return this.reverse()},Ee.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.key,s)})},Ee.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},Ee.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,s){e(s.primaryKey,s)})},Ee.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(s,r){n.push(r.key)}).then(function(){return n}).then(e)},Ee.prototype.primaryKeys=function(e){var t=this._ctx;if(t.dir==="next"&&aa(t,!0)&&0<t.limit)return this._read(function(s){var r=Ta(t,t.table.core.schema);return t.table.core.query({trans:s,values:!1,limit:t.limit,query:{index:r,range:t.range}})}).then(function(s){return s.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(s,r){n.push(r.primaryKey)}).then(function(){return n}).then(e)},Ee.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},Ee.prototype.firstKey=function(e){return this.limit(1).keys(function(t){return t[0]}).then(e)},Ee.prototype.lastKey=function(e){return this.reverse().firstKey(e)},Ee.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Ha(this._ctx,function(s){var s=s.primaryKey.toString(),r=de(e,s);return e[s]=!0,!r})),this},Ee.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(s){function r(m,M){var _=M.failures;w+=m-M.numFailures;for(var S=0,F=Se(_);S<F.length;S++){var N=F[S];b.push(_[N])}}var l=typeof e=="function"?e:function(m){return xs(m,e)},d=n.table.core,x=d.schema.primaryKey,h=x.outbound,k=x.extractKey,E=200,x=t.db._options.modifyChunkSize,b=(x&&(E=typeof x=="object"?x[d.name]||x["*"]||200:x),[]),w=0,y=[],C=e===Za;return t.clone().primaryKeys().then(function(m){function M(S){var F=Math.min(E,m.length-S),N=m.slice(S,S+F);return(C?Promise.resolve([]):d.getMany({trans:s,keys:N,cache:"immutable"})).then(function(j){var Y=[],K=[],J=h?[]:null,U=C?N:[];if(!C)for(var V=0;V<F;++V){var H=j[V],we={value:_t(H),primKey:m[S+V]};l.call(we,we.value,we)!==!1&&(we.value==null?U.push(m[S+V]):h||ge(k(H),k(we.value))===0?(K.push(we.value),h&&J.push(m[S+V])):(U.push(m[S+V]),Y.push(we.value)))}return Promise.resolve(0<Y.length&&d.mutate({trans:s,type:"add",values:Y}).then(function(ce){for(var se in ce.failures)U.splice(parseInt(se),1);r(Y.length,ce)})).then(function(){return(0<K.length||_&&typeof e=="object")&&d.mutate({trans:s,type:"put",keys:J,values:K,criteria:_,changeSpec:typeof e!="function"&&e,isAdditionalChunk:0<S}).then(function(ce){return r(K.length,ce)})}).then(function(){return(0<U.length||_&&C)&&d.mutate({trans:s,type:"delete",keys:U,criteria:_,isAdditionalChunk:0<S}).then(function(ce){return ma(n.table,U,ce)}).then(function(ce){return r(U.length,ce)})}).then(function(){return m.length>S+F&&M(S+E)})})}var _=aa(n)&&n.limit===1/0&&(typeof e!="function"||C)&&{index:n.index,range:n.range};return M(0).then(function(){if(0<b.length)throw new me("Error modifying one or more objects",b,w,y);return m.length})})})},Ee.prototype.delete=function(){var e=this._ctx,t=e.range;return!aa(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Za):this._write(function(n){var s=e.table.core.schema.primaryKey,r=t;return e.table.core.count({trans:n,query:{index:s,range:r}}).then(function(l){return e.table.core.mutate({trans:n,type:"deleteRange",range:r}).then(function(k){var h=k.failures,k=k.numFailures;if(k)throw new me("Could not delete some values",Object.keys(h).map(function(E){return h[E]}),l-k);return l-k})})})};var $s=Ee;function Ee(){}var Za=function(e,t){return t.value=null};function qs(e,t){return e<t?-1:e===t?0:1}function Ss(e,t){return t<e?-1:e===t?0:1}function Dt(e,t,n){return e=e instanceof o?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function sa(e){return new e.Collection(e,function(){return i("")}).limit(0)}function ae(y,t,n,s){var r,l,d,h,k,E,x,b=n.length;if(!n.every(function(m){return typeof m=="string"}))return Dt(y,Wa);function w(m){r=m==="next"?function(_){return _.toUpperCase()}:function(_){return _.toLowerCase()},l=m==="next"?function(_){return _.toLowerCase()}:function(_){return _.toUpperCase()},d=m==="next"?qs:Ss;var M=n.map(function(_){return{lower:l(_),upper:r(_)}}).sort(function(_,S){return d(_.lower,S.lower)});h=M.map(function(_){return _.upper}),k=M.map(function(_){return _.lower}),x=(E=m)==="next"?"":s}w("next");var y=new y.Collection(y,function(){return Sn(h[0],k[b-1]+s)}),C=(y._ondirectionchange=function(m){w(m)},0);return y._addAlgorithm(function(m,M,_){var S=m.key;if(typeof S=="string"){var F=l(S);if(t(F,k,C))return!0;for(var N=null,j=C;j<b;++j){var Y=((K,J,U,V,H,we)=>{for(var ce=Math.min(K.length,V.length),se=-1,pe=0;pe<ce;++pe){var Ge=J[pe];if(Ge!==V[pe])return H(K[pe],U[pe])<0?K.substr(0,pe)+U[pe]+U.substr(pe+1):H(K[pe],V[pe])<0?K.substr(0,pe)+V[pe]+U.substr(pe+1):0<=se?K.substr(0,se)+J[se]+U.substr(se+1):null;H(K[pe],Ge)<0&&(se=pe)}return ce<V.length&&we==="next"?K+U.substr(K.length):ce<K.length&&we==="prev"?K.substr(0,U.length):se<0?null:K.substr(0,se)+V[se]+U.substr(se+1)})(S,F,h[j],k[j],d,E);Y===null&&N===null?C=j+1:(N===null||0<d(N,Y))&&(N=Y)}M(N!==null?function(){m.continue(N+x)}:_)}return!1}),y}function Sn(e,t,n,s){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:s}}function i(e){return{type:1,lower:e,upper:e}}Object.defineProperty(u.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),u.prototype.between=function(e,t,n,s){n=n!==!1,s=s===!0;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||s)&&(!n||!s)?sa(this):new this.Collection(this,function(){return Sn(e,t,!n,!s)})}catch{return Dt(this,hn)}},u.prototype.equals=function(e){return e==null?Dt(this,hn):new this.Collection(this,function(){return i(e)})},u.prototype.above=function(e){return e==null?Dt(this,hn):new this.Collection(this,function(){return Sn(e,void 0,!0)})},u.prototype.aboveOrEqual=function(e){return e==null?Dt(this,hn):new this.Collection(this,function(){return Sn(e,void 0,!1)})},u.prototype.below=function(e){return e==null?Dt(this,hn):new this.Collection(this,function(){return Sn(void 0,e,!1,!0)})},u.prototype.belowOrEqual=function(e){return e==null?Dt(this,hn):new this.Collection(this,function(){return Sn(void 0,e)})},u.prototype.startsWith=function(e){return typeof e!="string"?Dt(this,Wa):this.between(e,e+Fn,!0,!0)},u.prototype.startsWithIgnoreCase=function(e){return e===""?this.startsWith(e):ae(this,function(t,n){return t.indexOf(n[0])===0},[e],Fn)},u.prototype.equalsIgnoreCase=function(e){return ae(this,function(t,n){return t===n[0]},[e],"")},u.prototype.anyOfIgnoreCase=function(){var e=Q.apply(lt,arguments);return e.length===0?sa(this):ae(this,function(t,n){return n.indexOf(t)!==-1},e,"")},u.prototype.startsWithAnyOfIgnoreCase=function(){var e=Q.apply(lt,arguments);return e.length===0?sa(this):ae(this,function(t,n){return n.some(function(s){return t.indexOf(s)===0})},e,Fn)},u.prototype.anyOf=function(){var e,t,n=this,s=Q.apply(lt,arguments),r=this._cmp;try{s.sort(r)}catch{return Dt(this,hn)}return s.length===0?sa(this):((e=new this.Collection(this,function(){return Sn(s[0],s[s.length-1])}))._ondirectionchange=function(l){r=l==="next"?n._ascending:n._descending,s.sort(r)},t=0,e._addAlgorithm(function(l,d,h){for(var k=l.key;0<r(k,s[t]);)if(++t===s.length)return d(h),!1;return r(k,s[t])===0||(d(function(){l.continue(s[t])}),!1)}),e)},u.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},u.prototype.noneOf=function(){var e=Q.apply(lt,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Dt(this,hn)}var t=e.reduce(function(n,s){return n?n.concat([[n[n.length-1][1],s]]):[[-1/0,s]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},u.prototype.inAnyRange=function(e,_){var n=this,s=this._cmp,r=this._ascending,l=this._descending,d=this._min,h=this._max;if(e.length===0)return sa(this);if(!e.every(function(S){return S[0]!==void 0&&S[1]!==void 0&&r(S[0],S[1])<=0}))return Dt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ne.InvalidArgument);var k=!_||_.includeLowers!==!1,E=_&&_.includeUppers===!0,x,b=r;function w(S,F){return b(S[0],F[0])}try{(x=e.reduce(function(S,F){for(var N=0,j=S.length;N<j;++N){var Y=S[N];if(s(F[0],Y[1])<0&&0<s(F[1],Y[0])){Y[0]=d(Y[0],F[0]),Y[1]=h(Y[1],F[1]);break}}return N===j&&S.push(F),S},[])).sort(w)}catch{return Dt(this,hn)}var y=0,C=E?function(S){return 0<r(S,x[y][1])}:function(S){return 0<=r(S,x[y][1])},m=k?function(S){return 0<l(S,x[y][0])}:function(S){return 0<=l(S,x[y][0])},M=C,_=new this.Collection(this,function(){return Sn(x[0][0],x[x.length-1][1],!k,!E)});return _._ondirectionchange=function(S){b=S==="next"?(M=C,r):(M=m,l),x.sort(w)},_._addAlgorithm(function(S,F,N){for(var j,Y=S.key;M(Y);)if(++y===x.length)return F(N),!1;return!C(j=Y)&&!m(j)||(n._cmp(Y,x[y][1])===0||n._cmp(Y,x[y][0])===0||F(function(){b===r?S.continue(x[y][0]):S.continue(x[y][1])}),!1)}),_},u.prototype.startsWithAnyOf=function(){var e=Q.apply(lt,arguments);return e.every(function(t){return typeof t=="string"})?e.length===0?sa(this):this.inAnyRange(e.map(function(t){return[t,t+Fn]})):Dt(this,"startsWithAnyOf() only works with strings")};var o=u;function u(){}function c(e){return xe(function(t){return v(t),e(t.target.error),!1})}function v(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var $="storagemutated",A="x-storagemutated-1",D=na(null,$),P=(L.prototype._lock=function(){return vt(!ee.global),++this._reculock,this._reculock!==1||ee.global||(ee.lockOwnerFor=this),this},L.prototype._unlock=function(){if(vt(!ee.global),--this._reculock==0)for(ee.global||(ee.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{Pn(e[1],e[0])}catch{}}return this},L.prototype._locked=function(){return this._reculock&&ee.lockOwnerFor!==this},L.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,s=this.db._state.dbOpenError;if(vt(!this.idbtrans),!e&&!n)switch(s&&s.name){case"DatabaseClosedError":throw new ne.DatabaseClosed(s);case"MissingAPIError":throw new ne.MissingAPI(s.message,s);default:throw new ne.OpenFailed(s)}if(!this.active)throw new ne.TransactionInactive;vt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=xe(function(r){v(r),t._reject(e.error)}),e.onabort=xe(function(r){v(r),t.active&&t._reject(new ne.Abort(e.error)),t.active=!1,t.on("abort").fire(r)}),e.oncomplete=xe(function(){t.active=!1,t._resolve(),"mutatedParts"in e&&D.storagemutated.fire(e.mutatedParts)})}return this},L.prototype._promise=function(e,t,n){var s,r=this;return e==="readwrite"&&this.mode!=="readwrite"?Qe(new ne.ReadOnly("Transaction is readonly")):this.active?this._locked()?new z(function(l,d){r._blockedFuncs.push([function(){r._promise(e,t,n).then(l,d)},ee])}):n?ut(function(){var l=new z(function(d,h){r._lock();var k=t(d,h,r);k&&k.then&&k.then(d,h)});return l.finally(function(){return r._unlock()}),l._lib=!0,l}):((s=new z(function(l,d){var h=t(l,d,r);h&&h.then&&h.then(l,d)}))._lib=!0,s):Qe(new ne.TransactionInactive)},L.prototype._root=function(){return this.parent?this.parent._root():this},L.prototype.waitFor=function(e){var t,n=this._root(),s=z.resolve(e),r=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return s}):(n._waitingFor=s,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),(function l(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=l)})()),n._waitingFor);return new z(function(l,d){s.then(function(h){return n._waitingQueue.push(xe(l.bind(null,h)))},function(h){return n._waitingQueue.push(xe(d.bind(null,h)))}).finally(function(){n._waitingFor===r&&(n._waitingFor=null)})})},L.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ne.Abort))},L.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(de(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new ne.NotFound("Table "+e+" not part of transaction")},L);function L(){}function I(e,t,n,s,r,l,d,h){return{name:e,keyPath:t,unique:n,multi:s,auto:r,compound:l,src:(n&&!d?"&":"")+(s?"*":"")+(r?"++":"")+G(t),type:h}}function G(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function W(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(s=function(r){return[r.name,r]},n.reduce(function(r,l,d){return l=s(l,d),l&&(r[l[0]]=l[1]),r},{}))};var s}var ie=function(e){try{return e.only([[]]),ie=function(){return[[]]},[[]]}catch{return ie=function(){return Fn},Fn}};function $e(e){return e==null?function(){}:typeof e=="string"?(t=e).split(".").length===1?function(n){return n[t]}:function(n){return Qt(n,t)}:function(n){return Qt(n,e)};var t}function Le(e){return[].slice.call(e)}var he=0;function Be(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Ze(e,t,k){function s(C){if(C.type===3)return null;if(C.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var b=C.lower,w=C.upper,y=C.lowerOpen,C=C.upperOpen;return b===void 0?w===void 0?null:t.upperBound(w,!!C):w===void 0?t.lowerBound(b,!!y):t.bound(b,w,!!y,!!C)}function r(x){var b,w=x.name;return{name:w,schema:x,mutate:function(y){var C=y.trans,m=y.type,M=y.keys,_=y.values,S=y.range;return new Promise(function(F,N){F=xe(F);var j=C.objectStore(w),Y=j.keyPath==null,K=m==="put"||m==="add";if(!K&&m!=="delete"&&m!=="deleteRange")throw new Error("Invalid operation type: "+m);var J,U=(M||_||{length:1}).length;if(M&&_&&M.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(U===0)return F({numFailures:0,failures:{},results:[],lastResult:void 0});function V(Xe){++ce,v(Xe)}var H=[],we=[],ce=0;if(m==="deleteRange"){if(S.type===4)return F({numFailures:ce,failures:we,results:[],lastResult:void 0});S.type===3?H.push(J=j.clear()):H.push(J=j.delete(s(S)))}else{var Y=K?Y?[_,M]:[_,null]:[M,null],se=Y[0],pe=Y[1];if(K)for(var Ge=0;Ge<U;++Ge)H.push(J=pe&&pe[Ge]!==void 0?j[m](se[Ge],pe[Ge]):j[m](se[Ge])),J.onerror=V;else for(Ge=0;Ge<U;++Ge)H.push(J=j[m](se[Ge])),J.onerror=V}function Gt(Xe){Xe=Xe.target.result,H.forEach(function(bt,Ht){return bt.error!=null&&(we[Ht]=bt.error)}),F({numFailures:ce,failures:we,results:m==="delete"?M:H.map(function(bt){return bt.result}),lastResult:Xe})}J.onerror=function(Xe){V(Xe),Gt(Xe)},J.onsuccess=Gt})},getMany:function(y){var C=y.trans,m=y.keys;return new Promise(function(M,_){M=xe(M);for(var S,F=C.objectStore(w),N=m.length,j=new Array(N),Y=0,K=0,J=function(H){H=H.target,j[H._pos]=H.result,++K===Y&&M(j)},U=c(_),V=0;V<N;++V)m[V]!=null&&((S=F.get(m[V]))._pos=V,S.onsuccess=J,S.onerror=U,++Y);Y===0&&M(j)})},get:function(y){var C=y.trans,m=y.key;return new Promise(function(M,_){M=xe(M);var S=C.objectStore(w).get(m);S.onsuccess=function(F){return M(F.target.result)},S.onerror=c(_)})},query:(b=h,function(y){return new Promise(function(C,m){C=xe(C);var M,_,S,K=y.trans,F=y.values,N=y.limit,Y=y.query,j=N===1/0?void 0:N,J=Y.index,Y=Y.range,K=K.objectStore(w),K=J.isPrimaryKey?K:K.index(J.name),J=s(Y);if(N===0)return C({result:[]});b?((Y=F?K.getAll(J,j):K.getAllKeys(J,j)).onsuccess=function(U){return C({result:U.target.result})},Y.onerror=c(m)):(M=0,_=!F&&"openKeyCursor"in K?K.openKeyCursor(J):K.openCursor(J),S=[],_.onsuccess=function(U){var V=_.result;return!V||(S.push(F?V.value:V.primaryKey),++M===N)?C({result:S}):void V.continue()},_.onerror=c(m))})}),openCursor:function(y){var C=y.trans,m=y.values,M=y.query,_=y.reverse,S=y.unique;return new Promise(function(F,N){F=xe(F);var K=M.index,j=M.range,Y=C.objectStore(w),Y=K.isPrimaryKey?Y:Y.index(K.name),K=_?S?"prevunique":"prev":S?"nextunique":"next",J=!m&&"openKeyCursor"in Y?Y.openKeyCursor(s(j),K):Y.openCursor(s(j),K);J.onerror=c(N),J.onsuccess=xe(function(U){var V,H,we,ce,se=J.result;se?(se.___id=++he,se.done=!1,V=se.continue.bind(se),H=(H=se.continuePrimaryKey)&&H.bind(se),we=se.advance.bind(se),ce=function(){throw new Error("Cursor not stopped")},se.trans=C,se.stop=se.continue=se.continuePrimaryKey=se.advance=function(){throw new Error("Cursor not started")},se.fail=xe(N),se.next=function(){var pe=this,Ge=1;return this.start(function(){return Ge--?pe.continue():pe.stop()}).then(function(){return pe})},se.start=function(pe){function Ge(){if(J.result)try{pe()}catch(Xe){se.fail(Xe)}else se.done=!0,se.start=function(){throw new Error("Cursor behind last entry")},se.stop()}var Gt=new Promise(function(Xe,bt){Xe=xe(Xe),J.onerror=c(bt),se.fail=bt,se.stop=function(Ht){se.stop=se.continue=se.continuePrimaryKey=se.advance=ce,Xe(Ht)}});return J.onsuccess=xe(function(Xe){J.onsuccess=Ge,Ge()}),se.continue=V,se.continuePrimaryKey=H,se.advance=we,Ge(),Gt},F(se)):F(null)},N)})},count:function(y){var C=y.query,m=y.trans,M=C.index,_=C.range;return new Promise(function(S,F){var N=m.objectStore(w),N=M.isPrimaryKey?N:N.index(M.name),j=s(_),j=j?N.count(j):N.count();j.onsuccess=xe(function(Y){return S(Y.target.result)}),j.onerror=c(F)})}}}l=k,d=Le((k=e).objectStoreNames);var l,k={schema:{name:k.name,tables:d.map(function(x){return l.objectStore(x)}).map(function(x){var b=x.keyPath,w=x.autoIncrement,C=ue(b),y={},C={name:x.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:b==null,compound:C,keyPath:b,autoIncrement:w,unique:!0,extractKey:$e(b)},indexes:Le(x.indexNames).map(function(m){return x.index(m)}).map(function(S){var F=S.name,M=S.unique,_=S.multiEntry,S=S.keyPath,F={name:F,compound:ue(S),keyPath:S,unique:M,multiEntry:_,extractKey:$e(S)};return y[Be(S)]=F}),getIndexByKeyPath:function(m){return y[Be(m)]}};return y[":id"]=C.primaryKey,b!=null&&(y[Be(b)]=C.primaryKey),C})},hasGetAll:0<d.length&&"getAll"in l.objectStore(d[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)},d=k.schema,h=k.hasGetAll,k=d.tables.map(r),E={};return k.forEach(function(x){return E[x.name]=x}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(x){if(E[x])return E[x];throw new Error("Table '".concat(x,"' not found"))},MIN_KEY:-1/0,MAX_KEY:ie(t),schema:d}}function be(e,t,n,s){return n=n.IDBKeyRange,t=Ze(t,n,s),{dbcore:e.dbcore.reduce(function(r,l){return l=l.create,X(X({},r),l(r))},t)}}function ye(e,t){var n=t.db,n=be(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(s){var r=s.name;e.core.schema.tables.some(function(l){return l.name===r})&&(s.core=e.core.table(r),e[r]instanceof e.Table)&&(e[r].core=s.core)})}function Z(e,t,n,s){n.forEach(function(r){var l=s[r];t.forEach(function(d){var h=(function k(E,x){return on(E,x)||(E=nt(E))&&k(E,x)})(d,r);(!h||"value"in h&&h.value===void 0)&&(d===e.Transaction.prototype||d instanceof e.Transaction?qe(d,r,{get:function(){return this.table(r)},set:function(k){ot(this,r,{value:k,writable:!0,configurable:!0,enumerable:!0})}}):d[r]=new e.Table(r,l))})})}function O(e,t){t.forEach(function(n){for(var s in n)n[s]instanceof e.Table&&delete n[s]})}function Rt(e,t){return e._cfg.version-t._cfg.version}function Tt(e,t,n,s){var r=e._dbSchema,l=(n.objectStoreNames.contains("$meta")&&!r.$meta&&(r.$meta=W("$meta",at("")[0],[]),e._storeNames.push("$meta")),e._createTransaction("readwrite",e._storeNames,r)),d=(l.create(n),l._completion.catch(s),l._reject.bind(l)),h=ee.transless||ee;ut(function(){if(ee.trans=l,ee.transless=h,t!==0)return ye(e,n),E=t,((k=l).storeNames.includes("$meta")?k.table("$meta").get("version").then(function(x){return x??E}):z.resolve(E)).then(function(M){var b=e,w=M,y=l,C=n,m=[],M=b._versions,_=b._dbSchema=ze(0,b.idbdb,C);return(M=M.filter(function(S){return S._cfg.version>=w})).length===0?z.resolve():(M.forEach(function(S){m.push(function(){var F,N,j,Y=_,K=S._cfg.dbschema,J=(Je(b,Y,C),Je(b,K,C),_=b._dbSchema=K,Ot(Y,K)),U=(J.add.forEach(function(V){ke(C,V[0],V[1].primKey,V[1].indexes)}),J.change.forEach(function(V){if(V.recreate)throw new ne.Upgrade("Not yet support for changing primary key");var H=C.objectStore(V.name);V.add.forEach(function(we){return Re(H,we)}),V.change.forEach(function(we){H.deleteIndex(we.name),Re(H,we)}),V.del.forEach(function(we){return H.deleteIndex(we)})}),S._cfg.contentUpgrade);if(U&&S._cfg.version>w)return ye(b,C),y._memoizedTables={},F=xt(K),J.del.forEach(function(V){F[V]=Y[V]}),O(b,[b.Transaction.prototype]),Z(b,[b.Transaction.prototype],Se(F),F),y.schema=F,(N=cn(U))&&gt(),K=z.follow(function(){var V;(j=U(y))&&N&&(V=wn.bind(null,null),j.then(V,V))}),j&&typeof j.then=="function"?z.resolve(j):K.then(function(){return j})}),m.push(function(F){var N,j,Y=S._cfg.dbschema;N=Y,j=F,[].slice.call(j.db.objectStoreNames).forEach(function(K){return N[K]==null&&j.db.deleteObjectStore(K)}),O(b,[b.Transaction.prototype]),Z(b,[b.Transaction.prototype],b._storeNames,b._dbSchema),y.schema=b._dbSchema}),m.push(function(F){b.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(b.idbdb.version/10)===S._cfg.version?(b.idbdb.deleteObjectStore("$meta"),delete b._dbSchema.$meta,b._storeNames=b._storeNames.filter(function(N){return N!=="$meta"})):F.objectStore("$meta").put(S._cfg.version,"version"))})}),(function S(){return m.length?z.resolve(m.shift()(y.idbtrans)).then(S):z.resolve()})().then(function(){jt(_,C)}))}).catch(d);var k,E;Se(r).forEach(function(x){ke(n,x,r[x].primKey,r[x].indexes)}),ye(e,n),z.follow(function(){return e.on.populate.fire(l)}).catch(d)})}function pn(e,t){jt(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains("$meta")||t.db.createObjectStore("$meta").add(Math.ceil(t.db.version/10-1),"version");var n=ze(0,e.idbdb,t);Je(e,e._dbSchema,t);for(var s=0,r=Ot(n,e._dbSchema).change;s<r.length;s++){var l=(d=>{if(d.change.length||d.recreate)return console.warn("Unable to patch indexes of table ".concat(d.name," because it has changes on the type of index or primary key.")),{value:void 0};var h=t.objectStore(d.name);d.add.forEach(function(k){Zt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(d.name,".").concat(k.src)),Re(h,k)})})(r[s]);if(typeof l=="object")return l.value}}function Ot(e,t){var n,s={del:[],add:[],change:[]};for(n in e)t[n]||s.del.push(n);for(n in t){var r=e[n],l=t[n];if(r){var d={name:n,def:l,recreate:!1,del:[],add:[],change:[]};if(""+(r.primKey.keyPath||"")!=""+(l.primKey.keyPath||"")||r.primKey.auto!==l.primKey.auto)d.recreate=!0,s.change.push(d);else{var h=r.idxByName,k=l.idxByName,E=void 0;for(E in h)k[E]||d.del.push(E);for(E in k){var x=h[E],b=k[E];x?x.src!==b.src&&d.change.push(b):d.add.push(b)}(0<d.del.length||0<d.add.length||0<d.change.length)&&s.change.push(d)}}else s.add.push([n,l])}return s}function ke(e,t,n,s){var r=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});s.forEach(function(l){return Re(r,l)})}function jt(e,t){Se(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(Zt&&console.debug("Dexie: Creating missing table",n),ke(t,n,e[n].primKey,e[n].indexes))})}function Re(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function ze(e,t,n){var s={};return ln(t.objectStoreNames,0).forEach(function(r){for(var l=n.objectStore(r),d=I(G(E=l.keyPath),E||"",!0,!1,!!l.autoIncrement,E&&typeof E!="string",!0),h=[],k=0;k<l.indexNames.length;++k){var x=l.index(l.indexNames[k]),E=x.keyPath,x=I(x.name,E,!!x.unique,!!x.multiEntry,!1,E&&typeof E!="string",!1);h.push(x)}s[r]=W(r,d,h)}),s}function Je(e,t,n){for(var s=n.db.objectStoreNames,r=0;r<s.length;++r){var l=s[r],d=n.objectStore(l);e._hasGetAll="getAll"in d;for(var h=0;h<d.indexNames.length;++h){var k,E=d.indexNames[h],x=d.index(E).keyPath,x=typeof x=="string"?x:"["+ln(x).join("+")+"]";t[l]&&(k=t[l].idxByName[x])&&(k.name=E,delete t[l].idxByName[x],t[l].idxByName[E]=k)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&oe.WorkerGlobalScope&&oe instanceof oe.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function at(e){return e.split(",").map(function(t,n){var r=t.split(":"),s=(s=r[1])==null?void 0:s.trim(),r=(t=r[0].trim()).replace(/([&*]|\+\+)/g,""),l=/^\[/.test(r)?r.match(/^\[(.*)\]$/)[1].split("+"):r;return I(r,l||null,/\&/.test(t),/\*/.test(t),/\+\+/.test(t),ue(l),n===0,s)})}kt.prototype._createTableSchema=W,kt.prototype._parseIndexSyntax=at,kt.prototype._parseStoresSpec=function(e,t){var n=this;Se(e).forEach(function(s){if(e[s]!==null){var r=n._parseIndexSyntax(e[s]),l=r.shift();if(!l)throw new ne.Schema("Invalid schema for table "+s+": "+e[s]);if(l.unique=!0,l.multi)throw new ne.Schema("Primary key cannot be multiEntry*");r.forEach(function(d){if(d.auto)throw new ne.Schema("Only primary key can be marked as autoIncrement (++)");if(!d.keyPath)throw new ne.Schema("Index must have a name and cannot be an empty string")}),l=n._createTableSchema(s,l,r),t[s]=l}})},kt.prototype.stores=function(n){var t=this.db,n=(this._cfg.storesSource=this._cfg.storesSource?ve(this._cfg.storesSource,n):n,t._versions),s={},r={};return n.forEach(function(l){ve(s,l._cfg.storesSource),r=l._cfg.dbschema={},l._parseStoresSpec(s,r)}),t._dbSchema=r,O(t,[t._allTables,t,t.Transaction.prototype]),Z(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Se(r),r),t._storeNames=Se(r),this},kt.prototype.upgrade=function(e){return this._cfg.contentUpgrade=ja(this._cfg.contentUpgrade||Fe,e),this};var st=kt;function kt(){}function Yt(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new vn(Ma,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:"name"}),n.table("dbnames")}function zt(e){return e&&typeof e.databases=="function"}function It(e){return ut(function(){return ee.letThrough=!0,e()})}function rt(e){return!("from"in e)}var Ue=function(e,t){var n;if(!this)return n=new Ue,e&&"d"in e&&ve(n,e),n;ve(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Me(e,t,n){var s=ge(t,n);if(!isNaN(s)){if(0<s)throw RangeError();if(rt(e))return ve(e,{from:t,to:n,d:1});var s=e.l,r=e.r;if(ge(n,e.from)<0)return s?Me(s,t,n):e.l={from:t,to:n,d:1,l:null,r:null},We(e);if(0<ge(t,e.to))return r?Me(r,t,n):e.r={from:t,to:n,d:1,l:null,r:null},We(e);ge(t,e.from)<0&&(e.from=t,e.l=null,e.d=r?r.d+1:1),0<ge(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,s&&!e.l&&De(e,s),r&&t&&De(e,r)}}function De(e,t){rt(t)||(function n(s,r){var l=r.from,d=r.l,h=r.r;Me(s,l,r.to),d&&n(s,d),h&&n(s,h)})(e,t)}function He(e,t){var n=je(t),s=n.next();if(!s.done)for(var r=s.value,l=je(e),d=l.next(r.from),h=d.value;!s.done&&!d.done;){if(ge(h.from,r.to)<=0&&0<=ge(h.to,r.from))return!0;ge(r.from,h.from)<0?r=(s=n.next(h.from)).value:h=(d=l.next(r.from)).value}return!1}function je(e){var t=rt(e)?null:{s:0,n:e};return{next:function(n){for(var s=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,s)for(;t.n.l&&ge(n,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!s||ge(n,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function We(e){var t,n,s,r=(((r=e.r)==null?void 0:r.d)||0)-(((r=e.l)==null?void 0:r.d)||0),r=1<r?"r":r<-1?"l":"";r&&(t=r=="r"?"l":"r",n=X({},e),s=e[r],e.from=s.from,e.to=s.to,e[r]=s[r],n[r]=s[t],(e[t]=n).d=En(n)),e.d=En(e)}function En(n){var t=n.r,n=n.l;return(t?n?Math.max(t.d,n.d):t.d:n?n.d:0)+1}function Oe(e,t){return Se(t).forEach(function(n){e[n]?De(e[n],t[n]):e[n]=(function s(r){var l,d,h={};for(l in r)de(r,l)&&(d=r[l],h[l]=!d||typeof d!="object"||os.has(d.constructor)?d:s(d));return h})(t[n])}),e}function fn(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&He(t[n],e[n])})}ft(Ue.prototype,((Ft={add:function(e){return De(this,e),this},addKey:function(e){return Me(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(n){return Me(t,n,n)}),this},hasKey:function(e){var t=je(this).next(e).value;return t&&ge(t.from,e)<=0&&0<=ge(t.to,e)}})[Ra]=function(){return je(this)},Ft));var dt={},le={},wt=!1;function $t(e){Oe(le,e),wt||(wt=!0,setTimeout(function(){wt=!1,In(le,!(le={}))},0))}function In(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var s=0,r=Object.values(dt);s<r.length;s++)tn(h=r[s],e,n,t);else for(var l in e){var d,h,l=/^idb\:\/\/(.*)\/(.*)\//.exec(l);l&&(d=l[1],l=l[2],h=dt["idb://".concat(d,"/").concat(l)])&&tn(h,e,n,t)}n.forEach(function(k){return k()})}function tn(e,t,n,s){for(var r=[],l=0,d=Object.entries(e.queries.query);l<d.length;l++){for(var h=d[l],k=h[0],E=[],x=0,b=h[1];x<b.length;x++){var w=b[x];fn(t,w.obsSet)?w.subscribers.forEach(function(M){return n.add(M)}):s&&E.push(w)}s&&r.push([k,E])}if(s)for(var y=0,C=r;y<C.length;y++){var m=C[y],k=m[0],E=m[1];e.queries.query[k]=E}}function Ln(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?Qe(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var s=t.openCanceller,r=Math.round(10*e.verno),l=!1;function d(){if(t.openCanceller!==s)throw new ne.DatabaseClosed("db.open() was cancelled")}function h(){return new z(function(w,y){if(d(),!n)throw new ne.MissingAPI;var C=e.name,m=t.autoSchema||!r?n.open(C):n.open(C,r);if(!m)throw new ne.MissingAPI;m.onerror=c(y),m.onblocked=xe(e._fireOnBlocked),m.onupgradeneeded=xe(function(M){var _;x=m.transaction,t.autoSchema&&!e._options.allowEmptyDB?(m.onerror=v,x.abort(),m.result.close(),(_=n.deleteDatabase(C)).onsuccess=_.onerror=xe(function(){y(new ne.NoSuchDatabase("Database ".concat(C," doesnt exist")))})):(x.onerror=c(y),_=M.oldVersion>Math.pow(2,62)?0:M.oldVersion,b=_<1,e.idbdb=m.result,l&&pn(e,x),Tt(e,_/10,x,y))},y),m.onsuccess=xe(function(){x=null;var M,_,S,F,N,j,Y=e.idbdb=m.result,K=ln(Y.objectStoreNames);if(0<K.length)try{var J=Y.transaction((N=K).length===1?N[0]:N,"readonly");if(t.autoSchema)j=Y,F=J,(S=e).verno=j.version/10,F=S._dbSchema=ze(0,j,F),S._storeNames=ln(j.objectStoreNames,0),Z(S,[S._allTables],Se(F),F);else if(Je(e,e._dbSchema,J),_=J,((_=Ot(ze(0,(M=e).idbdb,_),M._dbSchema)).add.length||_.change.some(function(U){return U.add.length||U.change.length}))&&!l)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),r=Y.version+1,l=!0,w(h());ye(e,J)}catch{}Zn.push(e),Y.onversionchange=xe(function(U){t.vcFired=!0,e.on("versionchange").fire(U)}),Y.onclose=xe(function(){e.close({disableAutoOpen:!1})}),b&&(K=e._deps,N=C,zt(j=K.indexedDB)||N===Ma||Yt(j,K.IDBKeyRange).put({name:N}).catch(Fe)),w()},y)}).catch(function(w){switch(w?.name){case"UnknownError":if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),h();break;case"VersionError":if(0<r)return r=0,h()}return z.reject(w)})}var k,E=t.dbReadyResolve,x=null,b=!1;return z.race([s,(typeof navigator>"u"?z.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(w){function y(){return indexedDB.databases().finally(w)}k=setInterval(y,100),y()}).finally(function(){return clearInterval(k)}):Promise.resolve()).then(h)]).then(function(){return d(),t.onReadyBeingFired=[],z.resolve(It(function(){return e.on.ready.fire(e.vip)})).then(function w(){var y;if(0<t.onReadyBeingFired.length)return y=t.onReadyBeingFired.reduce(ja,Fe),t.onReadyBeingFired=[],z.resolve(It(function(){return y(e.vip)})).then(w)})}).finally(function(){t.openCanceller===s&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(w){t.dbOpenError=w;try{x&&x.abort()}catch{}return s===t.openCanceller&&e._close(),Qe(w)}).finally(function(){t.openComplete=!0,E()}).then(function(){var w;return b&&(w={},e.tables.forEach(function(y){y.schema.indexes.forEach(function(C){C.name&&(w["idb://".concat(e.name,"/").concat(y.name,"/").concat(C.name)]=new Ue(-1/0,[[[]]]))}),w["idb://".concat(e.name,"/").concat(y.name,"/")]=w["idb://".concat(e.name,"/").concat(y.name,"/:dels")]=new Ue(-1/0,[[[]]])}),D($).fire(w),In(w,!0)),e})}function nn(e){function t(l){return e.next(l)}var n=r(t),s=r(function(l){return e.throw(l)});function r(l){return function(h){var h=l(h),k=h.value;return h.done?k:k&&typeof k.then=="function"?k.then(n,s):ue(k)?Promise.all(k).then(n,s):n(k)}}return r(t)()}function it(e,t,n){for(var s=ue(e)?e.slice():[e],r=0;r<n;++r)s.push(t);return s}var Ut={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(e){return X(X({},e),{table:function(s){var n=e.table(s),s=n.schema,r={},l=[];function d(w,y,C){var S=Be(w),m=r[S]=r[S]||[],M=w==null?0:typeof w=="string"?1:w.length,_=0<y,S=X(X({},C),{name:_?"".concat(S,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:_,keyTail:y,keyLength:M,extractKey:$e(w),unique:!_&&C.unique});return m.push(S),S.isPrimaryKey||l.push(S),1<M&&d(M===2?w[0]:w.slice(0,M-1),y+1,C),m.sort(function(F,N){return F.keyTail-N.keyTail}),S}var h=d(s.primaryKey.keyPath,0,s.primaryKey);r[":id"]=[h];for(var k=0,E=s.indexes;k<E.length;k++){var x=E[k];d(x.keyPath,0,x)}function b(w){var y,C=w.query.index;return C.isVirtual?X(X({},w),{query:{index:C.lowLevelIndex,range:(y=w.query.range,C=C.keyTail,{type:y.type===1?2:y.type,lower:it(y.lower,y.lowerOpen?e.MAX_KEY:e.MIN_KEY,C),lowerOpen:!0,upper:it(y.upper,y.upperOpen?e.MIN_KEY:e.MAX_KEY,C),upperOpen:!0})}}):w}return X(X({},n),{schema:X(X({},s),{primaryKey:h,indexes:l,getIndexByKeyPath:function(w){return(w=r[Be(w)])&&w[0]}}),count:function(w){return n.count(b(w))},query:function(w){return n.query(b(w))},openCursor:function(w){var y=w.query.index,C=y.keyTail,m=y.keyLength;return y.isVirtual?n.openCursor(b(w)).then(function(_){return _&&M(_)}):n.openCursor(w);function M(_){return Object.create(_,{continue:{value:function(S){S!=null?_.continue(it(S,w.reverse?e.MAX_KEY:e.MIN_KEY,C)):w.unique?_.continue(_.key.slice(0,m).concat(w.reverse?e.MIN_KEY:e.MAX_KEY,C)):_.continue()}},continuePrimaryKey:{value:function(S,F){_.continuePrimaryKey(it(S,e.MAX_KEY,C),F)}},primaryKey:{get:function(){return _.primaryKey}},key:{get:function(){var S=_.key;return m===1?S[0]:S.slice(0,m)}},value:{get:function(){return _.value}}})}}})}})}};function ht(e,t,n,s){return n=n||{},s=s||"",Se(e).forEach(function(r){var l,d,h;de(t,r)?(l=e[r],d=t[r],typeof l=="object"&&typeof d=="object"&&l&&d?(h=Va(l))!==Va(d)?n[s+r]=t[r]:h==="Object"?ht(l,d,n,s+r+"."):l!==d&&(n[s+r]=t[r]):l!==d&&(n[s+r]=t[r])):n[s+r]=void 0}),Se(t).forEach(function(r){de(e,r)||(n[s+r]=t[r])}),n}function ra(e,t){return t.type==="delete"?t.keys:t.keys||t.values.map(e.extractKey)}var Bn={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return X(X({},e),{table:function(t){var n=e.table(t),s=n.schema.primaryKey;return X(X({},n),{mutate:function(r){var l=ee.trans,d=l.table(t).hook,h=d.deleting,k=d.creating,E=d.updating;switch(r.type){case"add":if(k.fire===Fe)break;return l._promise("readwrite",function(){return x(r)},!0);case"put":if(k.fire===Fe&&E.fire===Fe)break;return l._promise("readwrite",function(){return x(r)},!0);case"delete":if(h.fire===Fe)break;return l._promise("readwrite",function(){return x(r)},!0);case"deleteRange":if(h.fire===Fe)break;return l._promise("readwrite",function(){return(function b(w,y,C){return n.query({trans:w,values:!1,query:{index:s,range:y},limit:C}).then(function(m){var M=m.result;return x({type:"delete",keys:M,trans:w}).then(function(_){return 0<_.numFailures?Promise.reject(_.failures[0]):M.length<C?{failures:[],numFailures:0,lastResult:void 0}:b(w,X(X({},y),{lower:M[M.length-1],lowerOpen:!0}),C)})})})(r.trans,r.range,1e4)},!0)}return n.mutate(r);function x(b){var w,y,C,m=ee.trans,M=b.keys||ra(s,b);if(M)return(b=b.type==="add"||b.type==="put"?X(X({},b),{keys:M}):X({},b)).type!=="delete"&&(b.values=fe([],b.values)),b.keys&&(b.keys=fe([],b.keys)),w=n,C=M,((y=b).type==="add"?Promise.resolve([]):w.getMany({trans:y.trans,keys:C,cache:"immutable"})).then(function(_){var S=M.map(function(F,N){var j,Y,K,J=_[N],U={onerror:null,onsuccess:null};return b.type==="delete"?h.fire.call(U,F,J,m):b.type==="add"||J===void 0?(j=k.fire.call(U,F,b.values[N],m),F==null&&j!=null&&(b.keys[N]=F=j,s.outbound||Ct(b.values[N],s.keyPath,F))):(j=ht(J,b.values[N]),(Y=E.fire.call(U,j,F,J,m))&&(K=b.values[N],Object.keys(Y).forEach(function(V){de(K,V)?K[V]=Y[V]:Ct(K,V,Y[V])}))),U});return n.mutate(b).then(function(F){for(var N=F.failures,j=F.results,Y=F.numFailures,F=F.lastResult,K=0;K<M.length;++K){var J=(j||M)[K],U=S[K];J==null?U.onerror&&U.onerror(N[K]):U.onsuccess&&U.onsuccess(b.type==="put"&&_[K]?b.values[K]:J)}return{failures:N,results:j,numFailures:Y,lastResult:F}}).catch(function(F){return S.forEach(function(N){return N.onerror&&N.onerror(F)}),Promise.reject(F)})});throw new Error("Keys missing")}}})}})}};function ga(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var s=[],r=0,l=0;r<t.keys.length&&l<e.length;++r)ge(t.keys[r],e[l])===0&&(s.push(n?_t(t.values[r]):t.values[r]),++l);return s.length===e.length?s:null}catch{return null}}var Pa={stack:"dbcore",level:-1,create:function(e){return{table:function(t){var n=e.table(t);return X(X({},n),{getMany:function(s){var r;return s.cache?(r=ga(s.keys,s.trans._cache,s.cache==="clone"))?z.resolve(r):n.getMany(s).then(function(l){return s.trans._cache={keys:s.keys,values:s.cache==="clone"?_t(l):l},l}):n.getMany(s)},mutate:function(s){return s.type!=="add"&&(s.trans._cache=null),n.mutate(s)}})}}}};function ba(e,t){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!t.schema.primaryKey.outbound}function ya(e,t){switch(e){case"query":return t.values&&!t.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ia={stack:"dbcore",level:0,name:"Observability",create:function(e){var t=e.schema.name,n=new Ue(e.MIN_KEY,e.MAX_KEY);return X(X({},e),{transaction:function(s,r,l){if(ee.subscr&&r!=="readonly")throw new ne.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));return e.transaction(s,r,l)},table:function(s){function r(M){var m,M=M.query;return[m=M.index,new Ue((m=(M=M.range).lower)!=null?m:e.MIN_KEY,(m=M.upper)!=null?m:e.MAX_KEY)]}var l=e.table(s),d=l.schema,h=d.primaryKey,k=d.indexes,E=h.extractKey,x=h.outbound,b=h.autoIncrement&&k.filter(function(C){return C.compound&&C.keyPath.includes(h.keyPath)}),w=X(X({},l),{mutate:function(C){function m(H){return H="idb://".concat(t,"/").concat(s,"/").concat(H),N[H]||(N[H]=new Ue)}var M,_,S,F=C.trans,N=C.mutatedParts||(C.mutatedParts={}),j=m(""),Y=m(":dels"),K=C.type,U=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[ra(h,C).filter(function(H){return H}),C.values]:[],J=U[0],U=U[1],V=C.trans._cache;return ue(J)?(j.addKeys(J),(K=K==="delete"||J.length===U.length?ga(J,V):null)||Y.addKeys(J),(K||U)&&(M=m,_=K,S=U,d.indexes.forEach(function(H){var we=M(H.name||"");function ce(pe){return pe!=null?H.extractKey(pe):null}function se(pe){H.multiEntry&&ue(pe)?pe.forEach(function(Ge){return we.addKey(Ge)}):we.addKey(pe)}(_||S).forEach(function(pe,Xe){var Gt=_&&ce(_[Xe]),Xe=S&&ce(S[Xe]);ge(Gt,Xe)!==0&&(Gt!=null&&se(Gt),Xe!=null)&&se(Xe)})}))):J?(U={from:(V=J.lower)!=null?V:e.MIN_KEY,to:(K=J.upper)!=null?K:e.MAX_KEY},Y.add(U),j.add(U)):(j.add(n),Y.add(n),d.indexes.forEach(function(H){return m(H.name).add(n)})),l.mutate(C).then(function(H){return!J||C.type!=="add"&&C.type!=="put"||(j.addKeys(H.results),b&&b.forEach(function(we){for(var ce=C.values.map(function(Gt){return we.extractKey(Gt)}),se=we.keyPath.findIndex(function(Gt){return Gt===h.keyPath}),pe=0,Ge=H.results.length;pe<Ge;++pe)ce[pe][se]=H.results[pe];m(we.name).addKeys(ce)})),F.mutatedParts=Oe(F.mutatedParts||{},N),H})}}),y={get:function(C){return[h,new Ue(C.key)]},getMany:function(C){return[h,new Ue().addKeys(C.keys)]},count:r,query:r,openCursor:r};return Se(y).forEach(function(C){w[C]=function(m){var M=ee.subscr,_=!!M,S=ba(ee,l)&&ya(C,m)?m.obsSet={}:M;if(_){var F,M=function(U){return U="idb://".concat(t,"/").concat(s,"/").concat(U),S[U]||(S[U]=new Ue)},N=M(""),j=M(":dels"),_=y[C](m),Y=_[0],_=_[1];if((C==="query"&&Y.isPrimaryKey&&!m.values?j:M(Y.name||"")).add(_),!Y.isPrimaryKey){if(C!=="count")return F=C==="query"&&x&&m.values&&l.query(X(X({},m),{values:!1})),l[C].apply(this,arguments).then(function(U){if(C==="query"){if(x&&m.values)return F.then(function(ce){return ce=ce.result,N.addKeys(ce),U});var V=m.values?U.result.map(E):U.result;(m.values?N:j).addKeys(V)}else{var H,we;if(C==="openCursor")return we=m.values,(H=U)&&Object.create(H,{key:{get:function(){return j.addKey(H.primaryKey),H.key}},primaryKey:{get:function(){var ce=H.primaryKey;return j.addKey(ce),ce}},value:{get:function(){return we&&N.addKey(H.primaryKey),H.value}}})}return U});j.add(n)}}return l[C].apply(this,arguments)}}),w}})}};function es(e,t,n){var s;return n.numFailures===0?t:t.type==="deleteRange"||(s=t.keys?t.keys.length:"values"in t&&t.values?t.values.length:1,n.numFailures===s)?null:(s=X({},t),ue(s.keys)&&(s.keys=s.keys.filter(function(r,l){return!(l in n.failures)})),"values"in s&&ue(s.values)&&(s.values=s.values.filter(function(r,l){return!(l in n.failures)})),s)}function T(e,t){return n=e,((s=t).lower===void 0||(s.lowerOpen?0<ge(n,s.lower):0<=ge(n,s.lower)))&&(n=e,(s=t).upper===void 0||(s.upperOpen?ge(n,s.upper)<0:ge(n,s.upper)<=0));var n,s}function q(e,t,n,s,r,l){var d,h,k,E,x,b;return!n||n.length===0||(d=t.query.index,h=d.multiEntry,k=t.query.range,E=s.schema.primaryKey.extractKey,x=d.extractKey,b=(d.lowLevelIndex||d).extractKey,(s=n.reduce(function(w,y){var C=w,m=[];if(y.type==="add"||y.type==="put")for(var M=new Ue,_=y.values.length-1;0<=_;--_){var S,F=y.values[_],N=E(F);!M.hasKey(N)&&(S=x(F),h&&ue(S)?S.some(function(U){return T(U,k)}):T(S,k))&&(M.addKey(N),m.push(F))}switch(y.type){case"add":var j=new Ue().addKeys(t.values?w.map(function(V){return E(V)}):w),C=w.concat(t.values?m.filter(function(V){return V=E(V),!j.hasKey(V)&&(j.addKey(V),!0)}):m.map(function(V){return E(V)}).filter(function(V){return!j.hasKey(V)&&(j.addKey(V),!0)}));break;case"put":var Y=new Ue().addKeys(y.values.map(function(V){return E(V)}));C=w.filter(function(V){return!Y.hasKey(t.values?E(V):V)}).concat(t.values?m:m.map(function(V){return E(V)}));break;case"delete":var K=new Ue().addKeys(y.keys);C=w.filter(function(V){return!K.hasKey(t.values?E(V):V)});break;case"deleteRange":var J=y.range;C=w.filter(function(V){return!T(E(V),J)})}return C},e))===e)?e:(s.sort(function(w,y){return ge(b(w),b(y))||ge(E(w),E(y))}),t.limit&&t.limit<1/0&&(s.length>t.limit?s.length=t.limit:e.length===t.limit&&s.length<t.limit&&(r.dirty=!0)),l?Object.freeze(s):s)}function At(e,t){return ge(e.lower,t.lower)===0&&ge(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function ts(e,t){return((n,s,r,l)=>{if(n===void 0)return s!==void 0?-1:0;if(s===void 0)return 1;if((n=ge(n,s))===0){if(r&&l)return 0;if(r)return 1;if(l)return-1}return n})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((n,s,r,l)=>{if(n===void 0)return s!==void 0?1:0;if(s===void 0)return-1;if((n=ge(n,s))===0){if(r&&l)return 0;if(r)return-1;if(l)return 1}return n})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function an(e,t,n,s){e.subscribers.add(n),s.addEventListener("abort",function(){var r,l;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,l=t,setTimeout(function(){r.subscribers.size===0&&gn(l,r)},3e3))})}var Vs={stack:"dbcore",level:0,name:"Cache",create:function(e){var t=e.schema.name;return X(X({},e),{transaction:function(n,s,r){var l,d,h=e.transaction(n,s,r);return s==="readwrite"&&(r=(l=new AbortController).signal,h.addEventListener("abort",(d=function(k){return function(){if(l.abort(),s==="readwrite"){for(var E=new Set,x=0,b=n;x<b.length;x++){var w=b[x],y=dt["idb://".concat(t,"/").concat(w)];if(y){var C=e.table(w),m=y.optimisticOps.filter(function(H){return H.trans===h});if(h._explicit&&k&&h.mutatedParts)for(var M=0,_=Object.values(y.queries.query);M<_.length;M++)for(var S=0,F=(Y=_[M]).slice();S<F.length;S++)fn((K=F[S]).obsSet,h.mutatedParts)&&(gn(Y,K),K.subscribers.forEach(function(H){return E.add(H)}));else if(0<m.length){y.optimisticOps=y.optimisticOps.filter(function(H){return H.trans!==h});for(var N=0,j=Object.values(y.queries.query);N<j.length;N++)for(var Y,K,J,U=0,V=(Y=j[N]).slice();U<V.length;U++)(K=V[U]).res!=null&&h.mutatedParts&&(k&&!K.dirty?(J=Object.isFrozen(K.res),J=q(K.res,K.req,m,C,K,J),K.dirty?(gn(Y,K),K.subscribers.forEach(function(H){return E.add(H)})):J!==K.res&&(K.res=J,K.promise=z.resolve({result:J}))):(K.dirty&&gn(Y,K),K.subscribers.forEach(function(H){return E.add(H)})))}}}E.forEach(function(H){return H()})}}})(!1),{signal:r}),h.addEventListener("error",d(!1),{signal:r}),h.addEventListener("complete",d(!0),{signal:r})),h},table:function(n){var s=e.table(n),r=s.schema.primaryKey;return X(X({},s),{mutate:function(l){var d,h=ee.trans;return!r.outbound&&h.db._options.cache!=="disabled"&&!h.explicit&&h.idbtrans.mode==="readwrite"&&(d=dt["idb://".concat(t,"/").concat(n)])?(h=s.mutate(l),l.type!=="add"&&l.type!=="put"||!(50<=l.values.length||ra(r,l).some(function(k){return k==null}))?(d.optimisticOps.push(l),l.mutatedParts&&$t(l.mutatedParts),h.then(function(k){0<k.numFailures&&(gn(d.optimisticOps,l),(k=es(0,l,k))&&d.optimisticOps.push(k),l.mutatedParts)&&$t(l.mutatedParts)}),h.catch(function(){gn(d.optimisticOps,l),l.mutatedParts&&$t(l.mutatedParts)})):h.then(function(k){var E=es(0,X(X({},l),{values:l.values.map(function(x,b){var w;return k.failures[b]?x:(Ct(w=(w=r.keyPath)!=null&&w.includes(".")?_t(x):X({},x),r.keyPath,k.results[b]),w)})}),k);d.optimisticOps.push(E),queueMicrotask(function(){return l.mutatedParts&&$t(l.mutatedParts)})}),h):s.mutate(l)},query:function(l){var d,h,k,E,x,b,w;return ba(ee,s)&&ya("query",l)?(d=((k=ee.trans)==null?void 0:k.db._options.cache)==="immutable",h=(k=ee).requery,k=k.signal,b=((y,C,m,M)=>{var _=dt["idb://".concat(y,"/").concat(C)];if(!_)return[];if(!(y=_.queries[m]))return[null,!1,_,null];var S=y[(M.query?M.query.index.name:null)||""];if(!S)return[null,!1,_,null];switch(m){case"query":var F=S.find(function(N){return N.req.limit===M.limit&&N.req.values===M.values&&At(N.req.query.range,M.query.range)});return F?[F,!0,_,S]:[S.find(function(N){return("limit"in N.req?N.req.limit:1/0)>=M.limit&&(!M.values||N.req.values)&&ts(N.req.query.range,M.query.range)}),!1,_,S];case"count":return F=S.find(function(N){return At(N.req.query.range,M.query.range)}),[F,!!F,_,S]}})(t,n,"query",l),w=b[0],E=b[2],x=b[3],w&&b[1]?w.obsSet=l.obsSet:(b=s.query(l).then(function(y){var C=y.result;if(w&&(w.res=C),d){for(var m=0,M=C.length;m<M;++m)Object.freeze(C[m]);Object.freeze(C)}else y.result=_t(C);return y}).catch(function(y){return x&&w&&gn(x,w),Promise.reject(y)}),w={obsSet:l.obsSet,promise:b,subscribers:new Set,type:"query",req:l,dirty:!1},x?x.push(w):(x=[w],(E=E||(dt["idb://".concat(t,"/").concat(n)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[l.query.index.name||""]=x)),an(w,x,h,k),w.promise.then(function(y){return{result:q(y.result,l,E?.optimisticOps,s,w,d)}})):s.query(l)}})}})}};function Wt(e,t){return new Proxy(e,{get:function(n,s,r){return s==="db"?t:Reflect.get(n,s,r)}})}et.prototype.version=function(e){if(isNaN(e)||e<.1)throw new ne.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new ne.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(s){return s._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Rt),n.stores({}),this._state.autoSchema=!1),n},et.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||ee.letThrough||this._vip)?e():new z(function(n,s){if(t._state.openComplete)return s(new ne.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void s(new ne.DatabaseClosed);t.open().catch(Fe)}t._state.dbReadyPromise.then(n,s)}).then(e)},et.prototype.use=function(r){var t=r.stack,n=r.create,s=r.level,r=r.name,l=(r&&this.unuse({stack:t,name:r}),this._middlewares[t]||(this._middlewares[t]=[]));return l.push({stack:t,create:n,level:s??10,name:r}),l.sort(function(d,h){return d.level-h.level}),this},et.prototype.unuse=function(e){var t=e.stack,n=e.name,s=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(r){return s?r.create!==s:!!n&&r.name!==n})),this},et.prototype.open=function(){var e=this;return Pn(Vt,function(){return Ln(e)})},et.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var e=this._state,t=Zn.indexOf(this);if(0<=t&&Zn.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new z(function(n){e.dbReadyResolve=n}),e.openCanceller=new z(function(n,s){e.cancelOpen=s}))},et.prototype.close=function(t){var t=(t===void 0?{disableAutoOpen:!0}:t).disableAutoOpen,n=this._state;t?(n.isBeingOpened&&n.cancelOpen(new ne.DatabaseClosed),this._close(),n.autoOpen=!1,n.dbOpenError=new ne.DatabaseClosed):(this._close(),n.autoOpen=this._options.autoOpen||n.isBeingOpened,n.openComplete=!1,n.dbOpenError=null)},et.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),s=this._state;return new z(function(r,l){function d(){t.close(e);var h=t._deps.indexedDB.deleteDatabase(t.name);h.onsuccess=xe(function(){var k,E,x;k=t._deps,E=t.name,zt(x=k.indexedDB)||E===Ma||Yt(x,k.IDBKeyRange).delete(E).catch(Fe),r()}),h.onerror=c(l),h.onblocked=t._fireOnBlocked}if(n)throw new ne.InvalidArgument("Invalid closeOptions argument to db.delete()");s.isBeingOpened?s.dbReadyPromise.then(d):d()})},et.prototype.backendDB=function(){return this.idbdb},et.prototype.isOpen=function(){return this.idbdb!==null},et.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"},et.prototype.hasFailed=function(){return this._state.dbOpenError!==null},et.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(et.prototype,"tables",{get:function(){var e=this;return Se(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),et.prototype.transaction=function(){var e=(function(t,n,s){var r=arguments.length;if(r<2)throw new ne.InvalidArgument("Too few arguments");for(var l=new Array(r-1);--r;)l[r-1]=arguments[r];return s=l.pop(),[t,qa(l),s]}).apply(this,arguments);return this._transaction.apply(this,e)},et.prototype._transaction=function(e,t,n){var s,r,l=this,d=ee.trans,h=(d&&d.db===this&&e.indexOf("!")===-1||(d=null),e.indexOf("?")!==-1);e=e.replace("!","").replace("?","");try{if(r=t.map(function(E){if(E=E instanceof l.Table?E.name:E,typeof E!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return E}),e=="r"||e===Ga)s=Ga;else{if(e!="rw"&&e!=Ja)throw new ne.InvalidArgument("Invalid transaction mode: "+e);s=Ja}if(d){if(d.mode===Ga&&s===Ja){if(!h)throw new ne.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&r.forEach(function(E){if(d&&d.storeNames.indexOf(E)===-1){if(!h)throw new ne.SubTransaction("Table "+E+" not included in parent transaction.");d=null}}),h&&d&&!d.active&&(d=null)}}catch(E){return d?d._promise(null,function(x,b){b(E)}):Qe(E)}var k=(function E(x,b,w,y,C){return z.resolve().then(function(){var S=ee.transless||ee,m=x._createTransaction(b,w,x._dbSchema,y),S=(m.explicit=!0,{trans:m,transless:S});if(y)m.idbtrans=y.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,x._state.PR1398_maxLoop=3}catch(F){return F.name===qt.InvalidState&&x.isOpen()&&0<--x._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),x.close({disableAutoOpen:!1}),x.open().then(function(){return E(x,b,w,null,C)})):Qe(F)}var M,_=cn(C),S=(_&&gt(),z.follow(function(){var F;(M=C.call(m,m))&&(_?(F=wn.bind(null,null),M.then(F,F)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=nn(M)))},S));return(M&&typeof M.then=="function"?z.resolve(M).then(function(F){return m.active?F:Qe(new ne.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):S.then(function(){return M})).then(function(F){return y&&m._resolve(),m._completion.then(function(){return F})}).catch(function(F){return m._reject(F),Qe(F)})})}).bind(null,this,s,r,d,n);return d?d._promise(s,k,"lock"):ee.trans?Pn(ee.transless,function(){return l._whenReady(k)}):this._whenReady(k)},et.prototype.table=function(e){if(de(this._allTables,e))return this._allTables[e];throw new ne.InvalidTable("Table ".concat(e," does not exist"))};var vn=et;function et(e,t){var n,s,r,l,d,h=this,k=(this._middlewares={},this.verno=0,et.dependencies),k=(this._options=t=X({addons:et.addons,autoOpen:!0,indexedDB:k.indexedDB,IDBKeyRange:k.IDBKeyRange,cache:"cloned"},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange},t.addons),E=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Fe,dbReadyPromise:null,cancelOpen:Fe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen}),x=(E.dbReadyPromise=new z(function(b){E.dbReadyResolve=b}),E.openCanceller=new z(function(b,w){E.cancelOpen=w}),this._state=E,this.name=e,this.on=na(this,"populate","blocked","versionchange","close",{ready:[ja,Fe]}),this.once=function(b,w){var y=function(){for(var C=[],m=0;m<arguments.length;m++)C[m]=arguments[m];h.on(b).unsubscribe(y),w.apply(h,C)};return h.on(b,y)},this.on.ready.subscribe=Bt(this.on.ready.subscribe,function(b){return function(w,y){et.vip(function(){var C,m=h._state;m.openComplete?(m.dbOpenError||z.resolve().then(w),y&&b(w)):m.onReadyBeingFired?(m.onReadyBeingFired.push(w),y&&b(w)):(b(w),C=h,y||b(function M(){C.on.ready.unsubscribe(w),C.on.ready.unsubscribe(M)}))})}}),this.Collection=(n=this,On($s.prototype,function(M,m){this.db=n;var y=gs,C=null;if(m)try{y=m()}catch(S){C=S}var m=M._ctx,M=m.table,_=M.hook.reading.fire;this._ctx={table:M,index:m.index,isPrimKey:!m.index||M.schema.primKey.keyPath&&m.index===M.schema.primKey.name,range:y,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:C,or:m.or,valueMapper:_!==mt?_:null}})),this.Table=(s=this,On(ks.prototype,function(b,w,y){this.db=s,this._tx=y,this.name=b,this.schema=w,this.hook=s._allTables[b]?s._allTables[b].hook:na(null,{creating:[Is,Fe],reading:[Os,mt],updating:[Ls,Fe],deleting:[us,Fe]})})),this.Transaction=(r=this,On(P.prototype,function(b,w,y,C,m){var M=this;b!=="readonly"&&w.forEach(function(_){_=(_=y[_])==null?void 0:_.yProps,_&&(w=w.concat(_.map(function(S){return S.updatesTable})))}),this.db=r,this.mode=b,this.storeNames=w,this.schema=y,this.chromeTransactionDurability=C,this.idbtrans=null,this.on=na(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z(function(_,S){M._resolve=_,M._reject=S}),this._completion.then(function(){M.active=!1,M.on.complete.fire()},function(_){var S=M.active;return M.active=!1,M.on.error.fire(_),M.parent?M.parent._reject(_):S&&M.idbtrans&&M.idbtrans.abort(),Qe(_)})})),this.Version=(l=this,On(st.prototype,function(b){this.db=l,this._cfg={version:b,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(d=this,On(o.prototype,function(b,w,y){if(this.db=d,this._ctx={table:b,index:w===":id"?null:w,or:y},this._cmp=this._ascending=ge,this._descending=function(C,m){return ge(m,C)},this._max=function(C,m){return 0<ge(C,m)?C:m},this._min=function(C,m){return ge(C,m)<0?C:m},this._IDBKeyRange=d._deps.IDBKeyRange,!this._IDBKeyRange)throw new ne.MissingAPI})),this.on("versionchange",function(b){0<b.newVersion?console.warn("Another connection wants to upgrade database '".concat(h.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(h.name,"'. Closing db now to resume the delete request.")),h.close({disableAutoOpen:!1})}),this.on("blocked",function(b){!b.newVersion||b.newVersion<b.oldVersion?console.warn("Dexie.delete('".concat(h.name,"') was blocked")):console.warn("Upgrade '".concat(h.name,"' blocked by other connection holding version ").concat(b.oldVersion/10))}),this._maxKey=ie(t.IDBKeyRange),this._createTransaction=function(b,w,y,C){return new h.Transaction(b,w,y,h._options.chromeTransactionDurability,C)},this._fireOnBlocked=function(b){h.on("blocked").fire(b),Zn.filter(function(w){return w.name===h.name&&w!==h&&!w._state.vcFired}).map(function(w){return w.on("versionchange").fire(b)})},this.use(Pa),this.use(Vs),this.use(ia),this.use(Ut),this.use(Bn),new Proxy(this,{get:function(b,w,y){var C;return w==="_vip"||(w==="table"?function(m){return Wt(h.table(m),x)}:(C=Reflect.get(b,w,y))instanceof ks?Wt(C,x):w==="tables"?C.map(function(m){return Wt(m,x)}):w==="_createTransaction"?function(){return Wt(C.apply(this,arguments),x)}:C)}}));this.vip=x,k.forEach(function(b){return b(h)})}var Ca,Nn=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Es=(Fa.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:t,complete:n})},Fa.prototype[Nn]=function(){return this},Fa);function Fa(e){this._subscribe=e}try{Ca={indexedDB:oe.indexedDB||oe.mozIndexedDB||oe.webkitIndexedDB||oe.msIndexedDB,IDBKeyRange:oe.IDBKeyRange||oe.webkitIDBKeyRange}}catch{Ca={indexedDB:null,IDBKeyRange:null}}function ns(e){var t,n=!1,s=new Es(function(r){var l=cn(e),d,h=!1,k={},E={},x={get closed(){return h},unsubscribe:function(){h||(h=!0,d&&d.abort(),b&&D.storagemutated.unsubscribe(y))}},b=(r.start&&r.start(x),!1),w=function(){return Ua(C)},y=function(m){Oe(k,m),fn(E,k)&&w()},C=function(){var m,M,_;!h&&Ca.indexedDB&&(k={},m={},d&&d.abort(),d=new AbortController,_=(S=>{var F=Jt();try{l&&gt();var N=ut(e,S);return N=l?N.finally(wn):N}finally{F&&Gn()}})(M={subscr:m,signal:d.signal,requery:w,querier:e,trans:null}),Promise.resolve(_).then(function(S){n=!0,t=S,h||M.signal.aborted||(k={},(F=>{for(var N in F)if(de(F,N))return;return 1})(E=m)||b||(D($,y),b=!0),Ua(function(){return!h&&r.next&&r.next(S)}))},function(S){n=!1,["DatabaseClosedError","AbortError"].includes(S?.name)||h||Ua(function(){h||r.error&&r.error(S)})}))};return setTimeout(w,0),x});return s.hasValue=function(){return n},s.getValue=function(){return t},s}var Mn=vn;function as(e){var t=mn;try{mn=!0,D.storagemutated.fire(e),In(e,!0)}finally{mn=t}}ft(Mn,X(X({},Kt),{delete:function(e){return new Mn(e,{addons:[]}).delete()},exists:function(e){return new Mn(e,{addons:[]}).open().then(function(t){return t.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return t=Mn.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(zt(n)?Promise.resolve(n.databases()).then(function(s){return s.map(function(r){return r.name}).filter(function(r){return r!==Ma})}):Yt(n,t).toCollection().primaryKeys()).then(e)}catch{return Qe(new ne.MissingAPI)}var t,n},defineClass:function(){return function(e){ve(this,e)}},ignoreTransaction:function(e){return ee.trans?Pn(ee.transless,e):e()},vip:It,async:function(e){return function(){try{var t=nn(e.apply(this,arguments));return t&&typeof t.then=="function"?t:z.resolve(t)}catch(n){return Qe(n)}}},spawn:function(e,t,n){try{var s=nn(e.apply(n,t||[]));return s&&typeof s.then=="function"?s:z.resolve(s)}catch(r){return Qe(r)}},currentTransaction:{get:function(){return ee.trans||null}},waitFor:function(e,t){return e=z.resolve(typeof e=="function"?Mn.ignoreTransaction(e):e).timeout(t||6e4),ee.trans?ee.trans.waitFor(e):e},Promise:z,debug:{get:function(){return Zt},set:function(e){hs(e)}},derive:Et,extend:ve,props:ft,override:Bt,Events:na,on:D,liveQuery:ns,extendObservabilitySet:Oe,getByKeyPath:Qt,setByKeyPath:Ct,delByKeyPath:function(e,t){typeof t=="string"?Ct(e,t,void 0):"length"in t&&[].map.call(t,function(n){Ct(e,n,void 0)})},shallowClone:xt,deepClone:_t,getObjectDiff:ht,cmp:ge,asap:Mt,minKey:-1/0,addons:[],connections:Zn,errnames:qt,dependencies:Ca,cache:dt,semVer:"4.3.0",version:"4.3.0".split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)})})),Mn.maxKey=ie(Mn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(D($,function(e){mn||(e=new CustomEvent(A,{detail:e}),mn=!0,dispatchEvent(e),mn=!1)}),addEventListener(A,function(e){e=e.detail,mn||as(e)}));var oa,mn=!1,ss=function(){};return typeof BroadcastChannel<"u"&&((ss=function(){(oa=new BroadcastChannel(A)).onmessage=function(e){return e.data&&as(e.data)}})(),typeof oa.unref=="function"&&oa.unref(),D($,function(e){mn||oa.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!vn.disableBfCache&&e.persisted){Zt&&console.debug("Dexie: handling persisted pagehide"),oa?.close();for(var t=0,n=Zn;t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(e){!vn.disableBfCache&&e.persisted&&(Zt&&console.debug("Dexie: handling persisted pageshow"),ss(),as({all:new Ue(-1/0,[[]])}))})),z.rejectionMapper=function(e,t){return!e||e instanceof bn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!An[e.name]?e:(t=new An[e.name](t||e.message,e),"stack"in e&&qe(t,"stack",{get:function(){return this.inner.stack}}),t)},hs(Zt),X(vn,Object.freeze({__proto__:null,Dexie:vn,Entity:bs,PropModification:ta,RangeSet:Ue,add:function(e){return new ta({add:e})},cmp:ge,default:vn,liveQuery:ns,mergeRanges:De,rangesOverlap:He,remove:function(e){return new ta({remove:e})},replacePrefix:function(e,t){return new ta({replacePrefix:[e,t]})}}),{default:vn}),vn})})(Ts)),Ts.exports}var _i=Mi();const Js=Ei(_i),Kr=Symbol.for("Dexie"),Ps=globalThis[Kr]||(globalThis[Kr]=Js);if(Js.semVer!==Ps.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Js.semVer} and ${Ps.semVer}`);const{liveQuery:Yi,mergeRanges:zi,rangesOverlap:Ui,RangeSet:Wi,cmp:Gi,Entity:Ji,PropModification:Hi,replacePrefix:Xi,add:Qi,remove:Zi,DexieYProvider:eo}=Ps,Ke=new Ps("haushaltsbuch-db");Ke.version(1).stores({years:"year",fixedTemplateState:"id"});Ke.version(2).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id"});Ke.version(3).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso"});Ke.version(4).stores({years:"year",fixedTemplateState:"id",annualVariableFixedTemplateState:"id",auditLog:"id,timestampIso",searchEvaluationState:"id"});const Vn="singleton";function Ka(){return new Date().toISOString()}async function $a(){return Ke.years.orderBy("year").toArray()}async function Ti(B){return Ke.years.get(B)}async function wa(B){await Ke.years.put(B)}async function Hs(){const B=await Ke.fixedTemplateState.get(Vn);if(!B){const p={id:Vn,templates:[],version:Ka(),updatedAt:new Date().toISOString()};return await Ke.fixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:B.templates,version:B.version}}async function Xs(B){const p=Ka();return await Ke.fixedTemplateState.put({id:Vn,templates:B,version:p,updatedAt:new Date().toISOString()}),p}async function Qs(){const B=await Ke.annualVariableFixedTemplateState.get(Vn);if(!B){const p={id:Vn,templates:[],version:Ka(),updatedAt:new Date().toISOString()};return await Ke.annualVariableFixedTemplateState.put(p),{templates:[],version:p.version}}return{templates:B.templates,version:B.version}}async function Zs(B){const p=Ka();return await Ke.annualVariableFixedTemplateState.put({id:Vn,templates:B,version:p,updatedAt:new Date().toISOString()}),p}async function Ai(B){await Ke.auditLog.put(B)}async function er(){const B=await Ke.searchEvaluationState.get(Vn);if(!B){const p={id:Vn,results:[],version:Ka(),updatedAt:new Date().toISOString()};return await Ke.searchEvaluationState.put(p),{results:[],version:p.version}}return{results:B.results,version:B.version}}async function As(B){const p=Ka();return await Ke.searchEvaluationState.put({id:Vn,results:B,version:p,updatedAt:new Date().toISOString()}),p}async function tr(){return Ke.auditLog.orderBy("timestampIso").toArray()}async function Pi(B){await Ke.auditLog.clear(),B.length!==0&&await Ke.auditLog.bulkPut(B)}async function Fi(){const B=await $a(),[p,Ae,X,fe]=await Promise.all([Hs(),Qs(),tr(),er()]);return{exportedAt:new Date().toISOString(),years:B,fixedTemplates:p.templates,annualVariableFixedTemplates:Ae.templates,auditLogEntries:X,savedSearchEvaluations:fe.results}}async function Di(B){await Ke.transaction("rw",[Ke.years,Ke.fixedTemplateState,Ke.annualVariableFixedTemplateState,Ke.auditLog,Ke.searchEvaluationState],async()=>{await Ke.years.clear(),await Ke.years.bulkPut(B.years),await Xs(B.fixedTemplates),await Zs(B.annualVariableFixedTemplates??[]),await Pi(B.auditLogEntries??[]),await As(B.savedSearchEvaluations??[])})}function Ne(B){const p=B.replace(",",".").trim();if(!p)return 0;const Ae=Number.parseFloat(p);return Number.isNaN(Ae)?0:Math.round(Ae*100)}const Oi=new Intl.NumberFormat("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0});function f(B){return Oi.format(B/100)}function Pt(B){return(B/100).toFixed(2)}function Ce(B){return new Date(2026,B-1,1).toLocaleDateString("de-DE",{month:"long"})}const jr=["light","dark","forest","sage-light","mint-light","pine-light","pine-dark","midnight","graphite","violet-night","ocean-dark","ember-dark","neon-dark","slate-dark","plum-dark","moss-dark","cyber-dark"];function qr(B){return jr.includes(B)}function Ii(B){switch(B){case"light":return"Light";case"dark":return"Dark";case"forest":return"Forest";case"sage-light":return"Sage Light";case"mint-light":return"Mint Light";case"pine-light":return"Pine Light";case"pine-dark":return"Pine Dark";case"midnight":return"Midnight";case"graphite":return"Graphite";case"violet-night":return"Violet Night";case"ocean-dark":return"Ocean Dark";case"ember-dark":return"Ember Dark";case"neon-dark":return"Neon Dark";case"slate-dark":return"Slate Dark";case"plum-dark":return"Plum Dark";case"moss-dark":return"Moss Dark";case"cyber-dark":return"Cyber Dark"}}const Vr=[{value:1,label:"Montag"},{value:2,label:"Dienstag"},{value:3,label:"Mittwoch"},{value:4,label:"Donnerstag"},{value:5,label:"Freitag"},{value:6,label:"Samstag"},{value:0,label:"Sonntag"}];function Li(B){const p={years:[],selectedYear:null,selectedMonth:1,fixedTemplates:[],fixedTemplateVersion:"",annualVariableFixedTemplates:[],annualVariableFixedTemplateVersion:"",editingFixedTemplateId:null,theme:"light",hasUnexportedChanges:!1,unexportedChangeLog:[],showUnexportedChangeLogModal:!1,persistentAuditLog:[],showPersistentAuditLogModal:!1,evaluationQuery:"",evaluationCurrentResult:null,savedSearchEvaluations:[],lastBackupFileName:null,topModal:null,dashboardTab:"year",dashboardYear:null,recurringBudgetDefaults:{foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null}},Ae="habu-theme",X="habu-backup-dirty",fe="habu-unexported-change-log",oe="habu-last-backup-filename",Se="habu-recurring-budget-defaults";let ue=null,ve=null,nt=null,Ye=null,de=!1,ft=!1;const ot=new WeakMap;function qe(){const i=B.querySelectorAll("[data-budget-vs-canvas]");if(i.length===0)return;const o=getComputedStyle(document.documentElement),u=o.getPropertyValue("--text-main").trim(),c=o.getPropertyValue("--text-muted").trim(),v=o.getPropertyValue("--table-stripe").trim(),$=o.getPropertyValue("--table-border").trim(),A=o.getPropertyValue("--budget-under").trim(),D=o.getPropertyValue("--danger-2").trim(),P=96,L=250,I=G=>1-Math.pow(1-Math.max(0,Math.min(1,G)),3);i.forEach(G=>{G.dataset.hoverBound!=="1"&&(G.dataset.hoverBound="1",G.addEventListener("mouseenter",()=>{G.dataset.hovering="1",qe()}),G.addEventListener("mouseleave",()=>{delete G.dataset.hovering,delete G.dataset.hoverX,qe()}),G.addEventListener("mousemove",Me=>{const De=G.getBoundingClientRect(),He=Math.round(Me.clientX-De.left);G.dataset.hoverX=String(He),qe()}));const W=Number.parseInt(G.dataset.budgetCents??"0",10),ie=Number.parseInt(G.dataset.actualCents??"0",10),$e=G.dataset.label??"Kategorie",Le=G.dataset.hovering==="1",he=`${$e}|${W}|${ie}`,Be=G.dataset.lastRenderSignature!==he;G.dataset.lastRenderSignature=he;const Ze=Math.max(120,Math.floor(G.clientWidth||120)),be=window.devicePixelRatio||1,ye=Math.floor(Ze*be),Z=Math.floor(P*be);(G.width!==ye||G.height!==Z)&&(G.width=ye,G.height=Z);const O=G.getContext("2d");if(!O)return;const Rt=Math.max(1,W,ie),Tt=Math.min(1,Math.max(0,W/Rt)),pn=Math.min(1,Math.max(0,ie/Rt)),Ot=W-ie,ke=W>0?ie/W*100:ie>0?100:0,jt=8,Re=jt,ze=34,Je=Ze-jt*2,at=22,st=Number.parseInt(G.dataset.hoverX??"-1",10),kt=(Me,De,He,je,We)=>{O.beginPath(),O.moveTo(Me+We,De),O.lineTo(Me+He-We,De),O.quadraticCurveTo(Me+He,De,Me+He,De+We),O.lineTo(Me+He,De+je-We),O.quadraticCurveTo(Me+He,De+je,Me+He-We,De+je),O.lineTo(Me+We,De+je),O.quadraticCurveTo(Me,De+je,Me,De+je-We),O.lineTo(Me,De+We),O.quadraticCurveTo(Me,De,Me+We,De),O.closePath()},Yt=Me=>{O.setTransform(1,0,0,1,0,0),O.clearRect(0,0,G.width,G.height),O.scale(be,be),kt(Re,ze,Je,at,8),O.fillStyle=v,O.fill(),O.strokeStyle=$,O.lineWidth=1,O.stroke();const De=[.6,.25,.15],He=[.1,.16,.24];let je=0;De.forEach((dt,le)=>{const wt=Je*dt;O.save(),O.globalAlpha=He[le]??.1,O.fillStyle=c,O.fillRect(Re+je,ze,wt,at),O.restore(),je+=wt});const We=W>0&&ie>W?D:A,En=Je*pn*Me;kt(Re,ze+3,En,at-6,6),O.fillStyle=We,O.fill(),Le&&(O.save(),O.strokeStyle=We,O.lineWidth=1.5,O.globalAlpha=.8,kt(Re-1,ze+2,Math.max(2,En+2),at-4,7),O.stroke(),O.restore());const Oe=Re+Je*Tt;O.strokeStyle=u,O.lineWidth=Le?3:2,O.beginPath(),O.moveTo(Oe,ze-3),O.lineTo(Oe,ze+at+3),O.stroke(),Le&&st>=Re&&st<=Re+Je&&(O.save(),O.strokeStyle=u,O.globalAlpha=.35,O.lineWidth=1,O.beginPath(),O.moveTo(st,ze-8),O.lineTo(st,ze+at+8),O.stroke(),O.restore()),O.fillStyle=u,O.font="600 12px system-ui, -apple-system, sans-serif",O.textAlign="left",O.textBaseline="top",O.fillText($e,Re,10);const fn=ke*Me;if(O.fillStyle=ke>100?D:ke<100?A:c,O.textAlign="right",O.fillText(`${fn.toFixed(0)}%`,Re+Je,10),O.fillStyle=c,O.font="500 11px system-ui, -apple-system, sans-serif",O.textAlign="left",O.textBaseline="top",O.fillText(`Ist ${f(ie)} · Ziel ${f(W)} · Δ ${Ot>=0?"+":""}${f(Ot)}`,Re,64),Le){const dt=`Nutzung ${ke.toFixed(1)}%`;O.font="600 11px system-ui, -apple-system, sans-serif";const le=8,wt=5,$t=22,tn=O.measureText(dt).width+le*2,Ln=Number.isFinite(st)?st-tn/2:Re+Je-tn,nn=Math.min(Re+Je-tn,Math.max(Re,Ln)),it=ze-$t-8;O.save(),O.fillStyle=u,O.globalAlpha=.92,kt(nn,it,tn,$t,6),O.fill(),O.restore(),O.fillStyle=v,O.textAlign="left",O.textBaseline="top",O.fillText(dt,nn+le,it+wt)}},zt=ot.get(G);if(zt&&window.cancelAnimationFrame(zt),!Be){Yt(1);return}const It=performance.now(),rt=Me=>{const De=Me-It,He=Math.min(1,De/L);if(Yt(I(He)),He<1){const je=window.requestAnimationFrame(rt);ot.set(G,je);return}ot.delete(G)},Ue=window.requestAnimationFrame(rt);ot.set(G,Ue)})}function Et(){B.querySelectorAll("[data-year-trend-chart]").forEach(o=>{const u=Array.from(o.querySelectorAll("[data-year-trend-point]"));if(u.length===0)return;const c=o.querySelector("[data-year-trend-active-month]"),v=o.querySelector("[data-year-trend-active-net]"),$=o.querySelector("[data-year-trend-active-income]"),A=o.querySelector("[data-year-trend-active-expense]"),D=o.querySelector("[data-year-trend-active-delta]"),P=o.querySelector("[data-year-trend-live]");if(!c||!v||!$||!A||!D)return;const L=(W,ie)=>{W.classList.remove("danger","budget-under");const $e=ie<0?"danger":ie>0?"budget-under":"";$e&&W.classList.add($e)},I=W=>{const ie=W.dataset.monthLabel??"-",$e=Number.parseInt(W.dataset.netCents??"0",10),Le=Number.parseInt(W.dataset.actualNetCents??"0",10),he=Number.parseInt(W.dataset.incomeCents??"0",10),Be=Number.parseInt(W.dataset.expenseCents??"0",10),Ze=Number.parseInt(W.dataset.deltaCents??"0",10);c.textContent=ie,v.textContent=f($e),$.textContent=f(he),A.textContent=f(Be),D.textContent=`${Ze>=0?"+":""}${f(Ze)}`,L(v,$e),L(D,Ze),u.forEach(be=>{const ye=be===W;be.classList.toggle("is-active",ye),be.setAttribute("aria-pressed",String(ye))}),P&&(P.textContent=`${ie}: Kalkulierter Saldo ${f($e)}, Ist-Saldo ${f(Le)}, Einkommen ${f(he)}, Ausgaben ${f(Be)}`)};u.forEach(W=>{const ie=()=>{I(W)};W.addEventListener("mouseenter",ie),W.addEventListener("focus",ie),W.addEventListener("click",ie)});const G=u.find(W=>W.dataset.pointDefault==="1")??u[u.length-1];G&&I(G)})}function on(i){if(i==="dashboard"){const o=p.years.slice().sort((c,v)=>v.year-c.year);o.some(c=>c.year===p.dashboardYear)||(p.dashboardYear=p.selectedYear??o[0]?.year??null)}p.topModal=i,ae()}function Rn(){p.topModal&&(p.topModal=null,ae())}function ln(){p.showUnexportedChangeLogModal=!0,ae()}function Bt(){p.showUnexportedChangeLogModal&&(p.showUnexportedChangeLogModal=!1,ae())}function vt(){p.showPersistentAuditLogModal=!0,ae()}function Mt(){p.showPersistentAuditLogModal&&(p.showPersistentAuditLogModal=!1,ae())}function Qt(){de||(de=!0,window.addEventListener("keydown",i=>{if(i.key==="Escape"){if(p.showUnexportedChangeLogModal){i.preventDefault(),Bt();return}if(p.showPersistentAuditLogModal){i.preventDefault(),Mt();return}p.topModal&&(i.preventDefault(),Rn())}}))}function Ct(){const i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);if(i<=0)return!1;const o=i/6;return window.scrollY>o}function xt(){const i=B.querySelector("#scroll-up-btn");i&&i.classList.toggle("is-visible",Ct())}function Fs(){if(ft)return;ft=!0;const i=()=>{xt(),qe()};window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i)}function qa(){if(ue&&document.body.contains(ue))return ue;const i=document.getElementById("toast-root");if(i instanceof HTMLDivElement)return ue=i,i;const o=document.createElement("div");return o.id="toast-root",o.className="toast-root",o.setAttribute("aria-live","polite"),o.setAttribute("aria-atomic","true"),document.body.appendChild(o),ue=o,o}function os(){if(ve&&document.body.contains(ve))return ve;const i=document.getElementById("amount-modal-root");if(i instanceof HTMLDivElement)return ve=i,i;const o=document.createElement("div");return o.id="amount-modal-root",document.body.appendChild(o),ve=o,o}function ca(){if(Ye&&document.body.contains(Ye))return Ye;const i=document.getElementById("weekly-shopping-modal-root");if(i instanceof HTMLDivElement)return Ye=i,i;const o=document.createElement("div");return o.id="weekly-shopping-modal-root",document.body.appendChild(o),Ye=o,o}function _t(){if(!ve){nt=null;return}ve.innerHTML="",nt=null}function ua(){Ye&&(Ye.innerHTML="")}function Va(i,o,u){const c=new Date,v=c.getFullYear(),$=c.getMonth()+1,A=c.getDate(),D=new Date(i,o,0).getDate();if(i<v||i===v&&o<$)return{occurrences:0,remainingDays:0};const P=i===v&&o===$?Math.min(A,D):1,L=Math.max(0,D-P+1);let I=0;for(let G=P;G<=D;G+=1)new Date(i,o-1,G).getDay()===u&&(I+=1);return{occurrences:I,remainingDays:L}}async function Ra(i,o){const u=_e();u&&(u.weeklyShoppingWeekday=i,u.weeklyShoppingEstimateCents=Math.max(0,o),await Ve(`Wocheneinkauf geplant: ${Vr.find(c=>c.value===i)?.label??"Wochentag"} mit ${f(u.weeklyShoppingEstimateCents)} €`),ae())}function Ds(){const i=_e(),o=Cn();if(!i||!o)return;const u=ca();ua();const c=i.weeklyShoppingWeekday===null||i.weeklyShoppingWeekday===void 0?1:i.weeklyShoppingWeekday,v=i.weeklyShoppingEstimateCents??0,$=o.year,A=i.month,D=Ba($,A),P=D?xn(D):{foodCents:0},L=D?D.foodBudgetCents??0:0,I=P.foodCents,G=L-I;u.innerHTML=`
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${Vr.map(ke=>`<option value="${ke.value}" ${ke.value===c?"selected":""}>${ke.label}</option>`).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${Pt(v)}" />
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
    `;const W=u.querySelector(".weekly-shopping-modal-backdrop"),ie=u.querySelector("#weekly-shopping-weekday"),$e=u.querySelector("#weekly-shopping-estimate"),Le=u.querySelector("#weekly-shopping-occurrences"),he=u.querySelector("#weekly-shopping-total"),Be=u.querySelector("#weekly-shopping-rest-before"),Ze=u.querySelector("#weekly-shopping-rest-after"),be=u.querySelector("#weekly-shopping-days-left"),ye=u.querySelector("#weekly-shopping-per-day"),Z=u.querySelector("#weekly-shopping-cancel"),O=u.querySelector("#weekly-shopping-save");function Rt(){const ke=Number.parseInt(ie?.value??"1",10);return Number.isInteger(ke)&&ke>=0&&ke<=6?ke:1}function Tt(){return Math.max(0,Ne($e?.value??"0"))}function pn(){const ke=Rt(),jt=Tt(),{occurrences:Re,remainingDays:ze}=Va($,A,ke),Je=Re*jt,at=G-Je,st=ze>0?Math.trunc(at/ze):0;Le&&(Le.textContent=`${Re}`),he&&(he.textContent=`${f(Je)} €`),Be&&(Be.textContent=`${f(G)} €`),Ze&&(Ze.textContent=`${f(at)} €`,Ze.className=at<0?"danger":at>0?"budget-under":""),be&&(be.textContent=`${ze}`),ye&&(ye.textContent=`${f(st)} €`,ye.className=st<0?"danger":st>0?"budget-under":"")}async function Ot(){await Ra(Rt(),Tt()),ua()}Z?.addEventListener("click",()=>{ua()}),O?.addEventListener("click",async()=>{await Ot()}),ie?.addEventListener("change",()=>{pn()}),$e?.addEventListener("input",()=>{pn()}),$e?.addEventListener("keydown",async ke=>{if(ke.key==="Escape"){ke.preventDefault(),ua();return}ke.key==="Enter"&&(ke.preventDefault(),await Ot())}),W?.addEventListener("click",ke=>{ke.target===W&&ua()}),window.setTimeout(()=>{$e?.focus(),$e?.select(),pn()},0)}function gn(i,o){let u=i;const c=o.min;if(c){const $=Number.parseFloat(c);if(!Number.isNaN($)){const A=Math.round($*100);u=Math.max(u,A)}}const v=o.max;if(v){const $=Number.parseFloat(v);if(!Number.isNaN($)){const A=Math.round($*100);u=Math.min(u,A)}}return u}function lt(i){if(i.disabled)return;const o=os();_t(),nt=i;const u=Ne(i.value||"0"),c="Betrag anpassen";o.innerHTML=`
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${c}">
        <div class="amount-modal card">
          <h3>${c}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${f(u)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${f(u)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${f(u)} €</strong></div>
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
    `;const v=o.querySelector(".amount-modal-backdrop"),$=o.querySelector("#amount-modal-delta"),A=o.querySelector("#amount-modal-next-delta"),D=o.querySelector("#amount-modal-next-overwrite"),P=o.querySelector("#amount-modal-cancel"),L=o.querySelector("#amount-modal-overwrite"),I=o.querySelector("#amount-modal-apply");function G(){const he=Ne($?.value??"0");return gn(u+he,i)}function W(){const he=Ne($?.value??"0");return gn(he,i)}function ie(){A&&(A.textContent=`${f(G())} €`),D&&(D.textContent=`${f(W())} €`)}function $e(){const he=nt;if(!he){_t();return}const Be=G();_t(),he.value=Pt(Be),he.dispatchEvent(new Event("change",{bubbles:!0}))}function Le(){const he=nt;if(!he){_t();return}const Be=W();_t(),he.value=Pt(Be),he.dispatchEvent(new Event("change",{bubbles:!0}))}P?.addEventListener("click",()=>{_t()}),L?.addEventListener("click",()=>{Le()}),I?.addEventListener("click",()=>{$e()}),$?.addEventListener("input",()=>{ie()}),$?.addEventListener("keydown",he=>{if(he.key==="Escape"){he.preventDefault(),_t();return}he.key==="Enter"&&(he.preventDefault(),$e())}),v?.addEventListener("click",he=>{he.target===v&&_t()}),window.setTimeout(()=>{$?.focus(),$?.select(),ie()},0)}function Q(i,o="success"){const u=qa(),c=document.createElement("div");c.className=`toast toast-${o}`,c.textContent=i,u.appendChild(c),requestAnimationFrame(()=>{c.classList.add("toast-visible")});const v=o==="error"?5e3:3e3;window.setTimeout(()=>{c.classList.remove("toast-visible"),window.setTimeout(()=>{c.remove()},220)},v)}function cn(){return new Date().getMonth()+1}function Kt(){return new Date().getFullYear()}function ls(i){const o=Kt(),u=i.find(c=>c.year===o);return u?u.year:i[0]?.year??null}function bn(){return new Date().toISOString().slice(0,10)}function Sa(){const i=new Date,o=String(i.getHours()).padStart(2,"0"),u=String(i.getMinutes()).padStart(2,"0"),c=String(i.getSeconds()).padStart(2,"0");return`${o}${u}${c}`}function me(i){return(i/100).toFixed(2).replace(".",",")}function jn(i){return i.includes(";")||i.includes('"')||i.includes(`
`)||i.includes("\r")?`"${i.replaceAll('"','""')}"`:i}function qt(i){return i.map(o=>jn(String(o))).join(";")}function cs(i){return String(i).padStart(2,"0")}function ne(i){if(!i)return"";const o=i.slice(0,10),u=o.split("-");if(u.length!==3)return o;const[c,v,$]=u;return`${$}.${v}.${c}`}function An(i,o,u,c){i.push(o),i.push(qt(u)),c.length===0?i.push(qt(["Keine Daten"])):c.forEach(v=>{i.push(qt(v))}),i.push("")}function Fe(i){if(!p.selectedYear)return Q("Bitte zuerst ein Jahr auswählen.","error"),null;const o=p.years.find(u=>u.year===p.selectedYear);if(!o)return Q("Ausgewähltes Jahr wurde nicht gefunden.","error"),null;if(i==="month"){const u=o.months.find(c=>c.month===p.selectedMonth);return u?[{year:o.year,month:u}]:(Q("Ausgewählter Monat wurde nicht gefunden.","error"),null)}return o.months.slice().sort((u,c)=>u.month-c.month).map(u=>({year:o.year,month:u}))}function mt(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Os(){const i=localStorage.getItem(Ae);return i&&qr(i)?i:"light"}function yn(i){p.theme=i,document.documentElement.setAttribute("data-theme",i),localStorage.setItem(Ae,i)}function Is(){return localStorage.getItem(X)==="1"}function us(i){localStorage.setItem(X,i?"1":"0")}function Ls(){const i=localStorage.getItem(fe);if(!i)return[];try{const o=JSON.parse(i);return Array.isArray(o)?o.filter(u=>{if(!u||typeof u!="object")return!1;const c=u;return typeof c.id=="string"&&typeof c.timestampIso=="string"&&typeof c.message=="string"}).slice(-200):[]}catch{return[]}}function ds(i){localStorage.setItem(fe,JSON.stringify(i.slice(-200)))}function ja(){const i=localStorage.getItem(oe);if(!i)return null;const o=i.trim();return o||null}function Zt(){const i={foodBudgetCents:null,goingOutBudgetCents:null,fixedBudgetCents:null,variableBudgetCents:null,miscBudgetCents:null},o=localStorage.getItem(Se);if(!o)return i;try{const u=JSON.parse(o),c=v=>typeof v=="number"&&Number.isFinite(v)?v:null;return{foodBudgetCents:c(u.foodBudgetCents),goingOutBudgetCents:c(u.goingOutBudgetCents),fixedBudgetCents:c(u.fixedBudgetCents),variableBudgetCents:c(u.variableBudgetCents),miscBudgetCents:c(u.miscBudgetCents)}}catch{return i}}function hs(i){localStorage.setItem(Se,JSON.stringify(i))}function Yn(i){i.months.forEach(o=>{const{recurringBudgetDefaults:u}=p;typeof u.foodBudgetCents=="number"&&(o.foodBudgetCents=u.foodBudgetCents),typeof u.goingOutBudgetCents=="number"&&(o.goingOutBudgetCents=u.goingOutBudgetCents),typeof u.fixedBudgetCents=="number"&&(o.fixedBudgetCents=u.fixedBudgetCents),typeof u.variableBudgetCents=="number"&&(o.variableBudgetCents=u.variableBudgetCents),typeof u.miscBudgetCents=="number"&&(o.miscBudgetCents=u.miscBudgetCents)})}function ps(i){const o=i.trim();o&&localStorage.setItem(oe,o)}async function zn(){if(p.savedSearchEvaluations.length===0)return;const i=Kt(),o=cn(),u=p.savedSearchEvaluations.map(c=>({...Lr(p.years,c.keyword,i,o),id:c.id,createdAt:c.createdAt}));p.savedSearchEvaluations=u,await As(u)}async function Ft(){qa(),yn(Os()),p.hasUnexportedChanges=Is(),p.unexportedChangeLog=Ls(),p.persistentAuditLog=await tr(),p.lastBackupFileName=ja(),p.recurringBudgetDefaults=Zt(),Qt(),Fs();const[i,o,u,c]=await Promise.all([$a(),Hs(),Qs(),er()]);p.years=i,p.annualVariableFixedTemplates=u.templates,p.annualVariableFixedTemplateVersion=u.version,un(p.years),fs(p.years),p.fixedTemplates=o.templates,p.fixedTemplateVersion=o.version,p.savedSearchEvaluations=c.results,await Ea(p.years),await zn(),i.length>0&&(p.selectedYear=ls(i),p.selectedMonth=cn()),ae()}function un(i){const o=u=>u==="balance"||u==="fresh"||u==="salary"?u:void 0;i.forEach(u=>{u.months.forEach(c=>{if(c.weeklyShoppingWeekday!==null&&c.weeklyShoppingWeekday!==void 0){const v=Number(c.weeklyShoppingWeekday);Number.isInteger(v)&&v>=0&&v<=6?c.weeklyShoppingWeekday=v:c.weeklyShoppingWeekday=null}else c.weeklyShoppingWeekday=null;typeof c.weeklyShoppingEstimateCents!="number"&&(c.weeklyShoppingEstimateCents=0),typeof c.foodBudgetCents!="number"&&(c.foodBudgetCents=0),typeof c.goingOutBudgetCents!="number"&&(c.goingOutBudgetCents=0),Array.isArray(c.incomes)?c.incomes=c.incomes.map(v=>{const $=o(v.incomeSource);if(!$){const{incomeSource:A,...D}=v;return D}return{...v,incomeSource:$}}):c.incomes=[],typeof c.fixedBudgetCents!="number"&&(c.fixedBudgetCents=c.fixedCosts.reduce((v,$)=>v+$.plannedCents,0)),typeof c.variableBudgetCents!="number"&&(c.variableBudgetCents=c.variablePositions.reduce((v,$)=>v+$.budgetCents,0)),Array.isArray(c.variablePositions)||(c.variablePositions=[]),typeof c.miscBudgetCents!="number"&&(c.miscBudgetCents=0)})})}function Un(i){return i==="balance"?"Bestandsguthaben":i==="salary"?"Gehalt":i==="fresh"?"Neues Einkommen":"Nicht zugeordnet"}function en(i){return i==="fresh"||i==="salary"||!i}async function Ea(i){for(const o of i)await wa(o)}function Cn(){if(p.selectedYear)return p.years.find(i=>i.year===p.selectedYear)}function _e(){const i=Cn();if(i)return i.months.find(o=>o.month===p.selectedMonth)}function Ba(i,o){const u=p.years.find(c=>c.year===i);if(u)return u.months.find(c=>c.month===o)}function xn(i){const o=i.days.reduce((D,P)=>D+P.foodCents,0),u=i.days.reduce((D,P)=>D+P.goingOutCents,0),c=i.fixedCosts.reduce((D,P)=>D+P.actualCents,0),v=i.variableCosts.reduce((D,P)=>D+P.amountCents,0)+i.variablePositions.reduce((D,P)=>D+P.actualCents,0),$=i.miscCosts.reduce((D,P)=>D+P.amountCents,0),A=o+u+c+v+$;return{foodCents:o,goingOutCents:u,fixedCents:c,variableCents:v,miscCents:$,totalCents:A}}function Vt(i){const o=i.foodBudgetCents??0,u=i.goingOutBudgetCents??0,c=i.fixedBudgetCents??i.fixedCosts.reduce((A,D)=>A+D.plannedCents,0),v=i.variablePositions.reduce((A,D)=>A+D.budgetCents,0),$=i.miscBudgetCents??0;return o+u+c+(i.variableBudgetCents??v)+$}function ee(i){return i.months.reduce((o,u)=>{const c=xn(u);return{foodCents:o.foodCents+c.foodCents,goingOutCents:o.goingOutCents+c.goingOutCents,fixedCents:o.fixedCents+c.fixedCents,variableCents:o.variableCents+c.variableCents,miscCents:o.miscCents+c.miscCents,totalCents:o.totalCents+c.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0})}function da(i){return i.months.slice().sort((o,u)=>o.month-u.month).map(o=>({month:o.month,summary:xn(o)}))}function dn(i){const o=i.months.reduce((A,D)=>A+(D.foodBudgetCents??0),0),u=i.months.reduce((A,D)=>A+(D.goingOutBudgetCents??0),0),c=i.months.reduce((A,D)=>A+(D.fixedBudgetCents??D.fixedCosts.reduce((P,L)=>P+L.plannedCents,0)),0),v=i.months.reduce((A,D)=>A+(D.variableBudgetCents??D.variablePositions.reduce((P,L)=>P+L.budgetCents,0)),0),$=i.months.reduce((A,D)=>A+(D.miscBudgetCents??0),0);return{foodCents:o,goingOutCents:u,fixedCents:c,variableCents:v,miscCents:$,totalCents:o+u+c+v+$}}function Wn(i){return i.months.reduce((o,u)=>o+u.incomes.reduce((c,v)=>c+(en(v.incomeSource)?v.amountCents:0),0),0)}function z(i){return i.months.reduce((o,u)=>(u.incomes.forEach(c=>{if(c.incomeSource==="salary"){o.salaryIncomeCents+=c.amountCents;return}(c.incomeSource==="fresh"||c.incomeSource==null)&&(o.freshIncomeCents+=c.amountCents)}),o),{salaryIncomeCents:0,freshIncomeCents:0})}function ha(i,o){const u=i.months.slice().sort((c,v)=>c.month-v.month)[0];return u?o.get(re(i.year,u.month))?.carriedFromPreviousCents??0:0}function Ya(){const i=p.years.slice().sort((c,v)=>c.year-v.year).flatMap(c=>c.months.slice().sort((v,$)=>v.month-$.month).map(v=>({year:c.year,month:v}))),o=new Map;let u=0;return i.forEach(({year:c,month:v},$)=>{const A=v.carryoverOverrideCents,D=typeof A=="number",P=D?A:u,L=$>0||D,I=v.incomes.reduce(($e,Le)=>$e+(en(Le.incomeSource)?Le.amountCents:0),0),G=Vt(v),W=I+P,ie=W-G;o.set(re(c,v.month),{hasPreviousMonth:L,carriedFromPreviousCents:P,recordedIncomeCents:I,effectiveIncomeCents:W,plannedBudgetCents:G,netCents:ie}),u=ie}),o}function ct(i,o){return o<=0?"":i>o?"budget-over":i<o?"budget-under":""}function za(i){return`${i>0?"+":""}${f(i)}`}function kn(i,o){const u=i-o,c=ct(o,i);return`${f(i)} <span class="eval-diff ${c}">(Δ ${za(u)})</span>`}function pa(i,o){const u=i!==null,c=u?i-o:null,v=u?ct(o,i):"";return`<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${u?`${f(i)} €`:"-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${f(o)} €</strong>
      </div>
      <div class="column-overview-row ${v}">
        <span>Diff</span>
        <strong>${c===null?"-":`${f(c)} €`}</strong>
      </div>
    </div>`}async function Ns(i){if(await Ti(i)){alert(`Jahr ${i} existiert bereits.`);return}const u=Or(i,p.fixedTemplates,p.fixedTemplateVersion);Yn(u),Qn(u),await wa(u),p.years=await $a(),Jt(`Jahr ${i} wurde angelegt`),p.selectedYear=i,p.selectedMonth=cn(),Q(`Jahr ${i} wurde angelegt.`),ae()}function Jt(i="Änderung an den Daten"){p.hasUnexportedChanges=!0,us(!0);const o=p.selectedYear?`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`:"ohne Zeitraum",u=new Date().toISOString(),c=`${i} (${o})`,v={id:pt("change"),timestampIso:u,message:c};p.unexportedChangeLog=[...p.unexportedChangeLog,v].slice(-200),ds(p.unexportedChangeLog);const $={id:pt("audit"),timestampIso:u,message:c};p.persistentAuditLog=[...p.persistentAuditLog,$].slice().sort((A,D)=>A.timestampIso.localeCompare(D.timestampIso)),Ai($).catch(A=>{console.error("Audit-Log konnte nicht gespeichert werden",A),Q("Chronik-Eintrag konnte nicht gespeichert werden.","error")})}function Gn(i){const o=i.trim();o&&(p.lastBackupFileName=o,ps(o))}function Jn(i){p.hasUnexportedChanges=!1,us(!1),p.unexportedChangeLog=[],ds([]),p.showUnexportedChangeLogModal=!1,Gn(i)}async function Ve(i){const o=Cn();o&&(await wa(o),p.years=await $a(),Jt(i))}async function xe(i){for(const o of p.years)await wa(o);p.years=await $a(),Jt(i)}function re(i,o){return i*100+o}function Hn(i,o,u){const c=`${i} auf ${f(u)} € gesetzt`;return u>o?`${c} (erhöht um ${f(u-o)} €)`:u<o?`${c} (verringert um ${f(o-u)} €)`:c}function Xn(i){const o=i.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);if(!o)return null;const u=o[1],c=o[2];return!u||!c?null:{year:Number.parseInt(u,10),month:Number.parseInt(c,10)}}function fa(i,o){const u=Xn(i.dueDateIso);if(!u||o.year<u.year)return;const c=o.months.find($=>$.month===u.month);!c||c.variablePositions.some($=>$.autoAnnualTemplateId===i.id)||(c.variablePositions=[{id:pt("varpos"),name:i.name,budgetCents:i.plannedCents,actualCents:0,autoAnnualTemplateId:i.id},...c.variablePositions],gt(c))}function Qn(i){p.annualVariableFixedTemplates.forEach(o=>{fa(o,i)})}function fs(i){const o=new Set(p.annualVariableFixedTemplates.map(u=>u.id));i.forEach(u=>{u.months.forEach(c=>{const v=c.variablePositions.some(A=>typeof A.autoAnnualTemplateId=="string"),$=c.fixedCosts.some(A=>typeof A.autoAnnualTemplateId=="string");v&&(c.variablePositions=c.variablePositions.filter(A=>A.autoAnnualTemplateId?o.has(A.autoAnnualTemplateId):!0),gt(c)),$&&(c.fixedCosts=c.fixedCosts.filter(A=>!A.autoAnnualTemplateId),ut(c))}),Qn(u)})}function ut(i){i.fixedBudgetCents=i.fixedCosts.reduce((o,u)=>o+u.plannedCents,0)}function gt(i){i.variableBudgetCents=i.variablePositions.reduce((o,u)=>o+u.budgetCents,0)}function wn(){if(p.selectedYear)return`${p.selectedYear}-${String(p.selectedMonth).padStart(2,"0")}`;const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function va(){const i=prompt("Ab wann soll die Änderung gelten? Format: YYYY-MM",wn());if(!i)return null;const o=i.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);if(!o)return alert("Ungültiges Format. Bitte YYYY-MM verwenden."),null;const u=o[1],c=o[2];return!u||!c?null:{year:Number.parseInt(u,10),month:Number.parseInt(c,10)}}function Ks(i,o){const u=re(o.year,o.month);p.years.forEach(c=>{c.months.forEach(v=>{if(re(c.year,v.month)<u)return;v.fixedCosts.some(A=>A.templateId===i.id)||(v.fixedCosts.push({id:pt("fixed"),templateId:i.id,name:i.name,plannedCents:i.plannedCents,actualCents:0}),ut(v))})})}function $n(i,o,u){const c=re(u.year,u.month);p.years.forEach(v=>{v.months.forEach($=>{re(v.year,$.month)<c||($.fixedCosts=$.fixedCosts.map(A=>A.templateId!==o.id?A:{...A,name:o.name,plannedCents:o.plannedCents,actualCents:A.actualCents===i.plannedCents?o.plannedCents:A.actualCents}),ut($))})})}function vs(i,o){const u=re(o.year,o.month);p.years.forEach(c=>{c.months.forEach(v=>{re(c.year,v.month)<u||(v.fixedCosts=v.fixedCosts.filter($=>$.templateId!==i),ut(v))})})}async function Pn(i,o){const u=i.trim();if(!u)return;const c=va();if(!c)return;const v=!!p.editingFixedTemplateId;if(p.editingFixedTemplateId){const $=p.fixedTemplates.find(D=>D.id===p.editingFixedTemplateId);if(!$)return;const A={...$,name:u,plannedCents:o};p.fixedTemplates=p.fixedTemplates.map(D=>D.id===p.editingFixedTemplateId?A:D),$n($,A,c)}else{const $={id:pt("tpl"),name:u,plannedCents:o};p.fixedTemplates=[...p.fixedTemplates,$],Ks($,c)}p.fixedTemplateVersion=await Xs(p.fixedTemplates),p.editingFixedTemplateId=null,await xe(v?`Fixkosten-Vorlage aktualisiert: ${u} (${f(o)} €)`:`Fixkosten-Vorlage hinzugefügt: ${u} (${f(o)} €)`),Q(v?"Fixkosten-Vorlage wurde aktualisiert.":"Fixkosten-Vorlage wurde hinzugefügt."),ae()}function ms(i){p.editingFixedTemplateId=i,ae()}function Ua(){p.editingFixedTemplateId=null,ae()}async function Qe(i){if(!confirm("Fixkosten-Vorlage wirklich löschen?"))return;const u=va();if(!u)return;const c=p.fixedTemplates.find(v=>v.id===i);p.fixedTemplates=p.fixedTemplates.filter(v=>v.id!==i),vs(i,u),p.editingFixedTemplateId===i&&(p.editingFixedTemplateId=null),p.fixedTemplateVersion=await Xs(p.fixedTemplates),await xe(`Fixkosten-Vorlage gelöscht: ${c?.name??"Unbekannt"}`),Q("Fixkosten-Vorlage wurde gelöscht."),ae()}async function Fn(i,o,u){const c=i.trim();if(!c){alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");return}const v=Xn(o);if(!v){alert("Bitte ein gültiges Datum auswählen.");return}if(u<=0){alert("Bitte einen positiven Betrag eingeben.");return}const $={id:pt("annualtpl"),name:c,plannedCents:u,dueDateIso:o};p.annualVariableFixedTemplates=[...p.annualVariableFixedTemplates,$],p.years.forEach(A=>{fa($,A)}),p.annualVariableFixedTemplateVersion=await Zs(p.annualVariableFixedTemplates),await xe(`Variable Fixkosten-Vorlage hinzugefügt: ${c} (${f(u)} €, jährlich in ${Ce(v.month)})`),Q("Variable Fixkosten-Vorlage wurde hinzugefügt."),ae()}async function hn(i){if(!confirm("Variable Fixkosten-Vorlage wirklich löschen?"))return;const u=p.annualVariableFixedTemplates.find(c=>c.id===i);u&&(p.annualVariableFixedTemplates=p.annualVariableFixedTemplates.filter(c=>c.id!==i),p.years.forEach(c=>{c.months.forEach(v=>{v.variablePositions=v.variablePositions.filter($=>$.autoAnnualTemplateId!==i),gt(v),v.fixedCosts=v.fixedCosts.filter($=>$.autoAnnualTemplateId!==i),ut(v)})}),p.annualVariableFixedTemplateVersion=await Zs(p.annualVariableFixedTemplates),await xe(`Variable Fixkosten-Vorlage gelöscht: ${u.name}`),Q("Variable Fixkosten-Vorlage wurde gelöscht."),ae())}async function Wa(i,o,u){const c=_e();if(!c)return;const $=c.days.find(A=>A.isoDate===i)?.[o]??0;c.days=c.days.map(A=>A.isoDate===i?{...A,[o]:u}:A),await Ve(Hn(`${o==="foodCents"?"Essen":"Ausgehen"} am ${i} angepasst`,$,u)),ae()}async function Zn(i,o){const u=_e();if(!u)return;const c=u.fixedCosts.find(v=>v.id===i);u.fixedCosts=u.fixedCosts.map(v=>v.id===i?{...v,actualCents:o}:v),await Ve(`Fixkosten-Ist angepasst: ${c?.name??"Unbekannt"} auf ${f(o)} €`),ae()}async function Ma(i,o){const u=_e();if(!u)return;const c=u.fixedCosts.find($=>$.id===i);if(!c)return;const v=c.plannedCents;u.fixedCosts=u.fixedCosts.map($=>$.id===i?{...$,plannedCents:o}:$),ut(u),await Ve(Hn(`Fixkosten-Budget angepasst: ${c.name}`,v,o)),ae()}async function Ga(i,o){const u=_e();if(!u)return;const c=i.trim();if(!c){alert("Bitte Namen für die Fixkosten-Position eingeben.");return}if(o<=0){alert("Bitte einen positiven Betrag eingeben.");return}const v={id:pt("fixed"),templateId:pt("fixed-local"),name:c,plannedCents:o,actualCents:0};u.fixedCosts=[v,...u.fixedCosts],ut(u),await Ve(`Fixkosten-Position hinzugefügt: ${c} (${f(o)} €)`),Q("Fixkosten-Position wurde hinzugefügt."),ae()}async function Ja(i){if(!confirm("Fixkosten-Position wirklich löschen?"))return;const u=_e();if(!u)return;const c=u.fixedCosts.find(v=>v.id===i);c&&(u.fixedCosts=u.fixedCosts.filter(v=>v.id!==i),ut(u),await Ve(`Fixkosten-Position gelöscht: ${c.name}`),Q("Fixkosten-Position wurde gelöscht."),ae())}async function Dn(){const i=_e();if(!i)return;if(i.fixedCosts.length===0){Q("Keine Fixkosten zum Löschen vorhanden.","error");return}if(!confirm("Alle Fixkosten im aktuellen Monat wirklich löschen?"))return;const u=i.fixedCosts.length;i.fixedCosts=[],ut(i),await Ve(`Alle Fixkosten im Monat gelöscht: ${u} Position(en)`),Q(`${u} Fixkosten-Position(en) wurden gelöscht.`),ae()}async function gs(i){await ea("fixedBudgetCents",i,"Fixkosten")}async function _a(i){await ea("foodBudgetCents",i,"Essen")}async function bs(i){await ea("goingOutBudgetCents",i,"Ausgehen")}async function ge(i){await ea("miscBudgetCents",i,"Sonstiges")}async function ys(i){await ea("variableBudgetCents",i,"Variable Kosten")}async function ea(i,o,u){const c=_e(),v=p.selectedYear;if(!c||!v||c[i]===o)return;const $=c[i];if(c[i]=o,confirm(`Soll das Budget "${u}" auch für zukünftige Monate übernommen werden?`)){const D=re(v,p.selectedMonth);p.years.forEach(L=>{L.months.forEach(I=>{re(L.year,I.month)<=D||(I[i]=o)})}),p.recurringBudgetDefaults[i]=o,hs(p.recurringBudgetDefaults);const P=Hn(`Budget "${u}"`,$??0,o);await xe(`${P} (inkl. zukünftiger Monate)`),Q(`Budget "${u}" wurde für zukünftige Monate übernommen.`),ae();return}await Ve(Hn(`Budget "${u}"`,$??0,o)),ae()}async function ma(i){const o=_e();o&&(i===null?o.carryoverOverrideCents=null:o.carryoverOverrideCents=i,await Ve(i===null?"Übernahme aus Vormonat zurückgesetzt":`Übernahme aus Vormonat auf ${f(i)} € gesetzt`),ae())}async function ta(i,o,u){const c=_e(),v=p.selectedYear;if(!c||!v)return;const $=i.trim();if(!$){alert("Bitte Bezeichnung für die Position angeben.");return}if(c.variablePositions=[{id:pt("varpos"),name:$,budgetCents:o,actualCents:0},...c.variablePositions],gt(c),u){const A=re(v,p.selectedMonth);p.years.forEach(D=>{D.months.forEach(P=>{re(D.year,P.month)<=A||(P.variablePositions=[{id:pt("varpos"),name:$,budgetCents:o,actualCents:0},...P.variablePositions],gt(P))})}),await xe(`Variable Position hinzugefügt: ${$} (${f(o)} €) für zukünftige Monate`),Q("Variable Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Ve(`Variable Position hinzugefügt: ${$} (${f(o)} €)`),Q("Variable Position wurde hinzugefügt."),ae()}async function Cs(i,o){const u=_e();if(!u)return;const c=u.variablePositions.find($=>$.id===i),v=c?.actualCents??0;u.variablePositions=u.variablePositions.map($=>$.id===i?{...$,actualCents:o}:$),await Ve(Hn(`Istwert Variable Position angepasst: ${c?.name??"Unbekannt"}`,v,o)),ae()}async function xs(i,o){const u=_e();if(!u)return;const c=u.variablePositions.find($=>$.id===i),v=c?.budgetCents??0;u.variablePositions=u.variablePositions.map($=>$.id===i?{...$,budgetCents:o}:$),gt(u),await Ve(Hn(`Budget Variable Position angepasst: ${c?.name??"Unbekannt"}`,v,o)),ae()}async function ks(i){if(!confirm("Variable Position wirklich löschen?"))return;const u=_e(),c=p.selectedYear;if(!u||!c)return;const v=u.variablePositions.find(P=>P.id===i);if(!v)return;const $=re(c,p.selectedMonth),D=p.years.some(P=>P.months.some(L=>re(P.year,L.month)>$&&L.variablePositions.some(I=>I.name===v.name&&I.budgetCents===v.budgetCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.variablePositions=u.variablePositions.filter(P=>P.id!==i),gt(u),D){p.years.forEach(P=>{P.months.forEach(L=>{re(P.year,L.month)<=$||(L.variablePositions=L.variablePositions.filter(I=>!(I.name===v.name&&I.budgetCents===v.budgetCents)),gt(L))})}),await xe(`Variable Position gelöscht: ${v.name} (inkl. zukünftiger Monate)`),Q("Variable Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ve(`Variable Position gelöscht: ${v.name}`),Q("Variable Position wurde gelöscht."),ae()}async function Ie(i){const o=_e(),u=p.selectedYear;if(!o||!u)return;const c=o.variablePositions.find(I=>I.id===i);if(!c)return;const v={year:p.selectedMonth===12?u+1:u,month:p.selectedMonth===12?1:p.selectedMonth+1};let $=p.years.find(I=>I.year===v.year);if(!$){const I=Or(v.year,p.fixedTemplates,p.fixedTemplateVersion);Yn(I),Qn(I),await wa(I),p.years=[...p.years,I].sort((G,W)=>G.year-W.year),$=I}const A=$.months.find(I=>I.month===v.month);if(!A)return;const D=A.variablePositions.some(I=>I.id===c.id||I.name===c.name&&I.budgetCents===c.budgetCents);if(o.variablePositions=o.variablePositions.filter(I=>I.id!==i),gt(o),!D){const G=A.variablePositions.some(W=>W.id===c.id)?{...c,id:pt("varpos")}:c;A.variablePositions=[G,...A.variablePositions],gt(A)}const P=`${Ce(v.month)} ${v.year}`,L=`Variable Position verschoben: ${c.name} → ${P}`;if(v.year===u)await Ve(L);else{const I=Cn();if(!I)return;await wa(I),await wa($),p.years=await $a(),un(p.years),Jt(L)}Q(D?`Position entfernt (im Folgemonat schon vorhanden: ${P}).`:`Position in den Folgemonat verschoben: ${P}.`),ae()}async function na(i,o,u){const c=_e(),v=p.selectedYear;if(!c||!v)return;const $=i.trim();if(!$){alert("Bitte Bezeichnung für Sonstiges eingeben.");return}if(o<=0){alert("Bitte einen positiven Betrag eingeben.");return}const A=Gs($,o);if(c.miscCosts=[A,...c.miscCosts],u){const D=re(v,p.selectedMonth);p.years.forEach(P=>{P.months.forEach(L=>{re(P.year,L.month)<=D||(L.miscCosts=[Gs($,o),...L.miscCosts])})}),await xe(`Sonstige Position hinzugefügt: ${$} (${f(o)} €) für zukünftige Monate`),Q("Sonstige Position wurde für zukünftige Monate hinzugefügt."),ae();return}await Ve(`Sonstige Position hinzugefügt: ${$} (${f(o)} €)`),Q("Sonstige Position wurde hinzugefügt."),ae()}function On(i){const o=[];let u="",c=!1;for(let v=0;v<i.length;v+=1){const $=i[v],A=i[v+1];if($==='"'){c&&A==='"'?(u+='"',v+=1):c=!c;continue}if($===";"&&!c){o.push(u.trim()),u="";continue}u+=$}return o.push(u.trim()),o}async function aa(i){const o=_e();if(!o){Q("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(P=>P.trim()).filter(P=>P.length>0);if(c.length===0){Q("CSV-Datei ist leer.","error");return}const v=new Set(o.miscCosts.map(P=>`${P.description}__${P.amountCents}`));let $=0,A=0,D=0;if(c.forEach(P=>{const L=On(P);if(L.length!==2){D+=1;return}const I=L[0]?.trim()??"",G=L[1]?.trim()??"",W=Ne(G);if(!I||W<=0){D+=1;return}const ie=`${I}__${W}`;if(v.has(ie)){A+=1;return}o.miscCosts.push(Gs(I,W)),v.add(ie),$+=1}),$===0){const P=D>0||A>0?`Keine Position importiert (Duplikate: ${A}, ungültig: ${D}).`:"Keine Position importiert.";Q(P,"error");return}await Ve(`Sonstiges CSV-Import: ${$} Position(en), Duplikate übersprungen: ${A}, ungültige Zeilen: ${D}`),Q(`Import abgeschlossen: ${$} übernommen, ${A} Duplikate, ${D} ungültig.`),ae()}async function Ha(i){const o=_e();if(!o){Q("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(P=>P.trim()).filter(P=>P.length>0);if(c.length===0){Q("CSV-Datei ist leer.","error");return}const v=new Set(o.fixedCosts.map(P=>`${P.name}__${P.plannedCents}__${P.actualCents}`));let $=0,A=0,D=0;if(c.forEach(P=>{const L=On(P);if(L.length!==2){D+=1;return}const I=L[0]?.trim()??"",G=L[1]?.trim()??"",W=Ne(G);if(!I||W<=0){D+=1;return}const ie=`${I}__${W}__${W}`;if(v.has(ie)){A+=1;return}o.fixedCosts.push({id:pt("fixed"),templateId:pt("fixed-local"),name:I,plannedCents:W,actualCents:W}),v.add(ie),$+=1}),$===0){const P=D>0||A>0?`Keine Position importiert (Duplikate: ${A}, ungültig: ${D}).`:"Keine Position importiert.";Q(P,"error");return}ut(o),await Ve(`Fixkosten CSV-Import: ${$} Position(en), Duplikate übersprungen: ${A}, ungültige Zeilen: ${D}`),Q(`Import abgeschlossen: ${$} übernommen, ${A} Duplikate, ${D} ungültig.`),ae()}async function Xa(i){const o=_e();if(!o){Q("Bitte zuerst ein Jahr und einen Monat auswählen.","error");return}const c=(await i.text()).replace(/^\uFEFF/,"").split(/\r?\n/).map(P=>P.trim()).filter(P=>P.length>0);if(c.length===0){Q("CSV-Datei ist leer.","error");return}const v=new Set(o.variablePositions.map(P=>`${P.name}__${P.budgetCents}__${P.actualCents}`));let $=0,A=0,D=0;if(c.forEach(P=>{const L=On(P);if(L.length!==2){D+=1;return}const I=L[0]?.trim()??"",G=L[1]?.trim()??"",W=Ne(G);if(!I||W<=0){D+=1;return}const ie=`${I}__${W}__${W}`;if(v.has(ie)){A+=1;return}o.variablePositions.push({id:pt("varpos"),name:I,budgetCents:W,actualCents:W}),v.add(ie),$+=1}),$===0){const P=D>0||A>0?`Keine Position importiert (Duplikate: ${A}, ungültig: ${D}).`:"Keine Position importiert.";Q(P,"error");return}gt(o),await Ve(`Variable CSV-Import: ${$} Position(en), Duplikate übersprungen: ${A}, ungültige Zeilen: ${D}`),Q(`Import abgeschlossen: ${$} übernommen, ${A} Duplikate, ${D} ungültig.`),ae()}async function Ta(i){if(!confirm("Sonstiges-Position wirklich löschen?"))return;const u=_e(),c=p.selectedYear;if(!u||!c)return;const v=u.miscCosts.find(P=>P.id===i);if(!v)return;const $=re(c,p.selectedMonth),D=p.years.some(P=>P.months.some(L=>re(P.year,L.month)>$&&L.miscCosts.some(I=>I.description===v.description&&I.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.miscCosts=u.miscCosts.filter(P=>P.id!==i),D){p.years.forEach(P=>{P.months.forEach(L=>{re(P.year,L.month)<=$||(L.miscCosts=L.miscCosts.filter(I=>!(I.description===v.description&&I.amountCents===v.amountCents)))})}),await xe(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),Q("Sonstige Position wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ve(`Sonstige Position gelöscht: ${v.description} (${f(v.amountCents)} €)`),Q("Sonstige Position wurde gelöscht."),ae()}async function Qa(i,o,u,c){const v=_e(),$=p.selectedYear;if(!v||!$)return;const A=i.trim();if(!A){alert("Bitte Einkommens-Bezeichnung eingeben.");return}if(o<=0){alert("Bitte einen positiven Einkommensbetrag eingeben.");return}const D=Ir(A,o,u);if(v.incomes=[D,...v.incomes],c){const P=re($,p.selectedMonth);p.years.forEach(L=>{L.months.forEach(I=>{re(L.year,I.month)<=P||(I.incomes=[Ir(A,o,u),...I.incomes])})}),await xe(`Einkommen hinzugefügt: ${A} (${f(o)} €, ${Un(u)}) für zukünftige Monate`),Q("Einkommen wurde für zukünftige Monate hinzugefügt."),ae();return}await Ve(`Einkommen hinzugefügt: ${A} (${f(o)} €, ${Un(u)})`),Q("Einkommen wurde hinzugefügt."),ae()}async function Aa(i,o){const u=_e();if(!u)return;const c=u.incomes.find(v=>v.id===i);c&&(u.incomes=u.incomes.map(v=>{if(v.id!==i)return v;if(!o){const{incomeSource:$,...A}=v;return A}return{...v,incomeSource:o}}),await Ve(`Einkommensart angepasst: ${c.description} → ${Un(o)}`),ae())}async function ws(i){if(!confirm("Einkommens-Eintrag wirklich löschen?"))return;const u=_e(),c=p.selectedYear;if(!u||!c)return;const v=u.incomes.find(P=>P.id===i);if(!v)return;const $=re(c,p.selectedMonth),D=p.years.some(P=>P.months.some(L=>re(P.year,L.month)>$&&L.incomes.some(I=>I.description===v.description&&I.amountCents===v.amountCents)))?confirm("Soll das Löschen auch für zukünftige Monate gelten?"):!1;if(u.incomes=u.incomes.filter(P=>P.id!==i),D){p.years.forEach(P=>{P.months.forEach(L=>{re(P.year,L.month)<=$||(L.incomes=L.incomes.filter(I=>!(I.description===v.description&&I.amountCents===v.amountCents)))})}),await xe(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €) inkl. zukünftiger Monate`),Q("Einkommen wurde auch in zukünftigen Monaten gelöscht."),ae();return}await Ve(`Einkommen gelöscht: ${v.description} (${f(v.amountCents)} €)`),Q("Einkommen wurde gelöscht."),ae()}async function $s(){const i=await Fi(),o=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),u=URL.createObjectURL(o),c=`haushaltsbuch-backup-${bn()}-${Sa()}.json`,v=document.createElement("a");v.href=u,v.download=c,v.click(),URL.revokeObjectURL(u),Jn(c),ae(),Q("Backup wurde exportiert.")}async function Ee(){const i=[];i.push(qt(["Jahr","Monat","Essen Budget (€)","Essen Ist (€)","Essen Differenz (€)","Freizeit Budget (€)","Freizeit Ist (€)","Freizeit Differenz (€)","Fixkosten Budget (€)","Fixkosten Ist (€)","Fixkosten Differenz (€)","Variabel Budget (€)","Variabel Ist (€)","Variabel Differenz (€)","Sonstiges Budget (€)","Sonstiges Ist (€)","Sonstiges Differenz (€)","Gesamt Budget (€)","Gesamt Ist (€)","Gesamt Differenz (€)","Einnahmen erfasst (€)","Rückdeckung aus Vormonat (€)"]));const o=p.years.slice().sort((P,L)=>P.year-L.year),u=Ya();o.forEach(P=>{P.months.slice().sort((L,I)=>L.month-I.month).forEach(L=>{const I=xn(L),G=L.foodBudgetCents??0,W=L.goingOutBudgetCents??0,ie=L.fixedBudgetCents??L.fixedCosts.reduce((Z,O)=>Z+O.plannedCents,0),$e=L.variableBudgetCents??L.variablePositions.reduce((Z,O)=>Z+O.budgetCents,0),Le=L.miscBudgetCents??0,he=Vt(L),Be=he-I.totalCents,Ze=L.incomes.reduce((Z,O)=>Z+(en(O.incomeSource)?O.amountCents:0),0),be=u.get(re(P.year,L.month)),ye=be?.hasPreviousMonth?me(be.carriedFromPreviousCents):"";i.push(qt([P.year,Ce(L.month),me(G),me(I.foodCents),me(G-I.foodCents),me(W),me(I.goingOutCents),me(W-I.goingOutCents),me(ie),me(I.fixedCents),me(ie-I.fixedCents),me($e),me(I.variableCents),me($e-I.variableCents),me(Le),me(I.miscCents),me(Le-I.miscCents),me(he),me(I.totalCents),me(Be),me(Ze),ye]))})});const c=`\uFEFF${i.join(`
`)}`,v=new Blob([c],{type:"text/csv;charset=utf-8"}),$=URL.createObjectURL(v),A=`haushaltsbuch-backup-${bn()}-${Sa()}.csv`,D=document.createElement("a");D.href=$,D.download=A,D.click(),URL.revokeObjectURL($),Jn(A),ae(),Q("CSV-Backup wurde exportiert.")}async function Za(i){const o=Fe(i);if(!o||o.length===0){Q("Für den gewählten Zeitraum sind keine Daten vorhanden.","error");return}const u=o.at(0);if(!u){Q("Für den gewählten Zeitraum sind keine Daten vorhanden.","error");return}const c=[],v=u.year,$=i==="month"?"Monat":"Jahr",A=u.month;c.push(qt(["Export","Haushaltsbuch Detail CSV"])),c.push(qt(["Exportiert am",new Date().toISOString()])),c.push(qt(["Modus",$])),c.push(qt(["Jahr",v])),i==="month"&&c.push(qt(["Monat",`${Ce(A.month)} (${cs(A.month)})`])),c.push("");const D=[],P=[],L=[],I=[],G=[],W=[];o.forEach(({year:be,month:ye})=>{ye.days.slice().sort((Z,O)=>Z.isoDate.localeCompare(O.isoDate)).forEach(Z=>{D.push([be,Ce(ye.month),ne(Z.isoDate),me(Z.foodCents),me(Z.goingOutCents),me(Z.foodCents+Z.goingOutCents)])}),ye.incomes.slice().sort((Z,O)=>Z.createdAt.localeCompare(O.createdAt)).forEach(Z=>{P.push([be,Ce(ye.month),ne(Z.createdAt),Z.description,Un(Z.incomeSource),me(Z.amountCents)])}),ye.fixedCosts.slice().sort((Z,O)=>Z.name.localeCompare(O.name,"de-DE")).forEach(Z=>{L.push([be,Ce(ye.month),Z.name,me(Z.plannedCents),me(Z.actualCents),me(Z.plannedCents-Z.actualCents)])}),ye.variablePositions.slice().sort((Z,O)=>Z.name.localeCompare(O.name,"de-DE")).forEach(Z=>{I.push([be,Ce(ye.month),Z.name,me(Z.budgetCents),me(Z.actualCents),me(Z.budgetCents-Z.actualCents)])}),ye.variableCosts.slice().sort((Z,O)=>Z.createdAt.localeCompare(O.createdAt)).forEach(Z=>{G.push([be,Ce(ye.month),ne(Z.createdAt),Z.description,me(Z.amountCents)])}),ye.miscCosts.slice().sort((Z,O)=>Z.createdAt.localeCompare(O.createdAt)).forEach(Z=>{W.push([be,Ce(ye.month),ne(Z.createdAt),Z.description,me(Z.amountCents)])})}),An(c,"Tageswerte",["Jahr","Monat","Datum","Essen (€)","Freizeit (€)","Tag Summe (€)"],D),An(c,"Einnahmen",["Jahr","Monat","Datum","Beschreibung","Quelle","Betrag (€)"],P),An(c,"Fixkosten",["Jahr","Monat","Beschreibung","Geplant (€)","Ist (€)","Differenz (€)"],L),An(c,"Variable Positionen",["Jahr","Monat","Beschreibung","Budget (€)","Ist (€)","Differenz (€)"],I),An(c,"Variable Kosten",["Jahr","Monat","Datum","Beschreibung","Betrag (€)"],G),An(c,"Sonstiges",["Jahr","Monat","Datum","Beschreibung","Betrag (€)"],W);const ie=`\uFEFF${c.join(`
`)}`,$e=new Blob([ie],{type:"text/csv;charset=utf-8"}),Le=URL.createObjectURL($e),he=i==="month"?`${v}-${cs(A.month)}`:String(v),Be=`haushaltsbuch-backup-detail-${i}-${he}-${Sa()}.csv`,Ze=document.createElement("a");Ze.href=Le,Ze.download=Be,Ze.click(),URL.revokeObjectURL(Le),Jn(Be),ae(),Q(i==="month"?"Detailliertes CSV-Backup für den Monat wurde exportiert.":"Detailliertes CSV-Backup für das Jahr wurde exportiert.")}async function qs(i){const o=await i.text(),u=JSON.parse(o);await Di(u);const[c,v,$,A]=await Promise.all([$a(),Hs(),Qs(),er()]);p.years=c,p.annualVariableFixedTemplates=$.templates,p.annualVariableFixedTemplateVersion=$.version,un(p.years),fs(p.years),p.fixedTemplates=v.templates,p.fixedTemplateVersion=v.version,p.savedSearchEvaluations=A.results,p.evaluationCurrentResult=null,p.evaluationQuery="",await Ea(p.years),await zn(),p.persistentAuditLog=await tr(),p.selectedYear=ls(c),p.selectedMonth=cn(),Jn(i.name),Q("Backup wurde importiert."),ae()}function Ss(i){p.evaluationQuery=i,p.evaluationCurrentResult=Lr(p.years,i,Kt(),cn()),ae()}async function Dt(){const i=p.evaluationCurrentResult;if(!i||!i.keywordNormalized){Q("Bitte zuerst ein gültiges Suchwort auswerten.","error");return}const o=p.savedSearchEvaluations.findIndex(u=>u.id===i.id);o>=0?p.savedSearchEvaluations[o]=i:p.savedSearchEvaluations=[i,...p.savedSearchEvaluations],await As(p.savedSearchEvaluations),Jt(`Auswertung gespeichert: ${i.keyword}`),Q(`Auswertung "${i.keyword}" wurde gespeichert.`),ae()}async function sa(i){const o=p.savedSearchEvaluations.find(u=>u.id===i);o&&(p.savedSearchEvaluations=p.savedSearchEvaluations.filter(u=>u.id!==i),await As(p.savedSearchEvaluations),Jt(`Auswertung gelöscht: ${o.keyword}`),Q(`Gespeicherte Auswertung "${o.keyword}" wurde gelöscht.`),ae())}function ae(){const i=Cn(),o=_e(),u=bn(),c=o?xn(o):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},v=i?ee(i):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},$=i?da(i):[],A=o?o.foodBudgetCents??0:0,D=o?o.goingOutBudgetCents??0:0,P=o?o.fixedBudgetCents??o.fixedCosts.reduce((a,g)=>a+g.plannedCents,0):0,L=o?o.variableBudgetCents??o.variablePositions.reduce((a,g)=>a+g.budgetCents,0):0,I=o?o.miscBudgetCents??0:0,G=i?i.months.reduce((a,g)=>a+(g.foodBudgetCents??0),0):0,W=i?i.months.reduce((a,g)=>a+(g.goingOutBudgetCents??0),0):0,ie=i?i.months.reduce((a,g)=>a+(g.fixedBudgetCents??g.fixedCosts.reduce((R,te)=>R+te.plannedCents,0)),0):0,$e=i?i.months.reduce((a,g)=>a+(g.variableBudgetCents??g.variablePositions.reduce((R,te)=>R+te.budgetCents,0)),0):0,Le=i?i.months.reduce((a,g)=>a+(g.miscBudgetCents??0),0):0,he=o?o.incomes.reduce((a,g)=>a+(en(g.incomeSource)?g.amountCents:0),0):0,Be=o?o.incomes.reduce((a,g)=>a+(g.incomeSource==="salary"?g.amountCents:0),0):0,Ze=o?o.incomes.reduce((a,g)=>a+(g.incomeSource==="fresh"?g.amountCents:0),0):0,be=Ya(),ye=i?be.get(re(i.year,p.selectedMonth)):void 0,Z=i?i.months.slice().sort((a,g)=>a.month-g.month)[0]:void 0,O=ye?.carriedFromPreviousCents??0,Rt=ye?.hasPreviousMonth??!1,Tt=ye?.effectiveIncomeCents??he,pn=o?Vt(o):0,Ot=ye?.netCents??he-pn,ke=Tt-c.totalCents,jt=Be-c.totalCents,Re=c.totalCents>0?`${(Be/c.totalCents*100).toFixed(1)} %`:"-",ze=O<0?"danger":O>0?"budget-under":"",Je=Ot<0?"danger":Ot>0?"budget-under":"",at=ke<0?"danger":ke>0?"budget-under":"",st=i?i.months.reduce((a,g)=>a+g.incomes.reduce((R,te)=>R+(en(te.incomeSource)?te.amountCents:0),0),0):0,kt=i?i.months.reduce((a,g)=>a+g.incomes.reduce((R,te)=>R+(te.incomeSource==="salary"?te.amountCents:0),0),0):0,Yt=i?i.months.reduce((a,g)=>a+g.incomes.reduce((R,te)=>R+(te.incomeSource==="fresh"?te.amountCents:0),0),0):0,zt=i&&Z?be.get(re(i.year,Z.month))?.carriedFromPreviousCents??0:0,It=st+zt;It-v.totalCents,kt-v.totalCents,v.totalCents>0&&`${(kt/v.totalCents*100).toFixed(1)}`;const rt=A+D+P+L+I,Ue=A+D,Me=c.foodCents+c.goingOutCents,De=Ue-Me,He=ct(Me,Ue),je=G+W+ie+$e+Le,We=he-rt,En=rt-c.totalCents;je-v.totalCents;const Oe=a=>a<0?"danger":a>0?"budget-under":"",fn=(a,g)=>g<=0?"muted":a>=g?"budget-under":"danger",dt=fn(Be,c.totalCents);fn(kt,v.totalCents);const le=(a,g)=>{if(g<=0)return"0%";const te=Math.max(0,a)/g*100;return`${Math.min(100,Math.max(0,te)).toFixed(1)}%`},wt=(a,g)=>{if(g<=0)return a>0?100:0;const R=Math.max(0,a)/g*100;return Math.max(0,R)},$t=[{label:"Essen",budgetCents:A,actualCents:c.foodCents},{label:"Ausgehen",budgetCents:D,actualCents:c.goingOutCents},{label:"Fixkosten",budgetCents:P,actualCents:c.fixedCents},{label:"Variable",budgetCents:L,actualCents:c.variableCents},{label:"Sonstige",budgetCents:I,actualCents:c.miscCents}];Math.max(1,...$t.flatMap(a=>[a.budgetCents,a.actualCents]));const In=(a,g)=>g<=0?"bar-positive":a<=0||g>a?"bar-negative":"bar-positive",tn=[{label:"Einkommen gesamt",valueCents:Tt,className:"bar-income"},{label:"Budget gesamt",valueCents:rt,className:"bar-budget"},{label:"Echte Ausgaben",valueCents:c.totalCents,className:"bar-expense"},{label:"Netto",valueCents:ke,className:ke<0?"bar-negative":"bar-positive"}],Ln=Math.max(1,...tn.map(a=>Math.abs(a.valueCents))),nn=i?i.months.slice().sort((a,g)=>a.month-g.month).map(a=>{const g=a.foodBudgetCents??0,R=a.goingOutBudgetCents??0,te=a.fixedBudgetCents??a.fixedCosts.reduce((rn,Tn)=>rn+Tn.plannedCents,0),Pe=a.variableBudgetCents??a.variablePositions.reduce((rn,Tn)=>rn+Tn.budgetCents,0),tt=a.miscBudgetCents??0,St=g+R+te+Pe+tt;return{month:a.month,foodBudgetCents:g,goingOutBudgetCents:R,fixedBudgetCents:te,variableBudgetCents:Pe,miscBudgetCents:tt,totalBudgetCents:St}}):[],it=new Map(nn.map(a=>[a.month,a])),Ut=a=>{if(a.length===0)return null;const g=Math.min(...a),R=Math.max(...a),te=Math.round(a.reduce((Pe,tt)=>Pe+tt,0)/a.length);return{min:g,avg:te,max:R}},ht=i&&i.year===Kt()?$.filter(a=>a.month<=cn()):$,ra=ht.map(a=>a.summary.foodCents),Bn=ht.map(a=>a.summary.goingOutCents),ga=ht.map(a=>a.summary.fixedCents),Pa=ht.map(a=>a.summary.variableCents),ba=ht.map(a=>a.summary.miscCents),ya=ht.map(a=>a.summary.totalCents),ia=ht.map(a=>i?be.get(re(i.year,a.month))?.plannedBudgetCents??0:0),es=ht.map(a=>i?be.get(re(i.year,a.month))?.netCents??0:0),T=new Map((i?.months??[]).map(a=>[a.month,a.incomes.reduce((g,R)=>g+(R.incomeSource==="salary"?R.amountCents:0),0)])),q=new Map((i?.months??[]).map(a=>[a.month,a.incomes.reduce((g,R)=>g+(R.incomeSource==="salary"||R.incomeSource==="fresh"?R.amountCents:0),0)])),At=ht.map(a=>T.get(a.month)??0),ts=ht.map(a=>q.get(a.month)??0),an={food:Ut(ra),goingOut:Ut(Bn),fixed:Ut(ga),variable:Ut(Pa),misc:Ut(ba),total:Ut(ya),salary:Ut(At),income:Ut(ts),budget:Ut(ia),net:Ut(es)},Vs=[{key:"min",label:"Min"},{key:"avg",label:"Mittelwert"},{key:"max",label:"Max"}],Wt={food:ra.reduce((a,g)=>a+g,0),goingOut:Bn.reduce((a,g)=>a+g,0),fixed:ga.reduce((a,g)=>a+g,0),variable:Pa.reduce((a,g)=>a+g,0),misc:ba.reduce((a,g)=>a+g,0),total:ya.reduce((a,g)=>a+g,0),salary:At.reduce((a,g)=>a+g,0),income:ts.reduce((a,g)=>a+g,0),budget:ia.reduce((a,g)=>a+g,0)},vn=Vs.map(({key:a,label:g})=>{const R=an.food?.[a]??null,te=an.goingOut?.[a]??null,Pe=an.fixed?.[a]??null,tt=an.variable?.[a]??null,St=an.misc?.[a]??null,rn=an.total?.[a]??null,Tn=an.salary?.[a]??null,yt=an.income?.[a]??null,ka=an.budget?.[a]??null,Ia=an.net?.[a]??null,Lt=Kn=>Kn===null?"-":f(Kn);return`<tr>
                  <td><strong>${g}</strong></td>
                  <td>${Lt(R)}</td>
                  <td>${Lt(te)}</td>
                  <td>${Lt(Pe)}</td>
                  <td>${Lt(tt)}</td>
                  <td>${Lt(St)}</td>
                  <td>${Lt(rn)}</td>
                  <td>${Lt(Tn)}</td>
                  <td>${Lt(yt)}</td>
                  <td>${Lt(ka)}</td>
                  <td>${Lt(Ia)}</td>
                </tr>`}).join(""),et=`<tr>
                  <td><strong>Summe</strong></td>
                  <td>${f(Wt.food)}</td>
                  <td>${f(Wt.goingOut)}</td>
                  <td>${f(Wt.fixed)}</td>
                  <td>${f(Wt.variable)}</td>
                  <td>${f(Wt.misc)}</td>
                  <td>${f(Wt.total)}</td>
                  <td>${f(Wt.salary)}</td>
                  <td>${f(Wt.income)}</td>
                  <td>${f(Wt.budget)}</td>
                  <td>-</td>
                </tr>`,Ca=Math.max(1,...$.flatMap(a=>{const g=it.get(a.month)?.totalBudgetCents;return[a.summary.totalCents,g??0]})),Nn=Math.max(1,...$.flatMap(a=>{const g=it.get(a.month),R=a.summary.foodCents+a.summary.goingOutCents,te=(g?.foodBudgetCents??0)+(g?.goingOutBudgetCents??0);return[R,te]})),Es=Math.max(1,...$.flatMap(a=>{const g=it.get(a.month)?.fixedBudgetCents??0;return[a.summary.fixedCents,g]})),Fa=Math.max(1,...$.flatMap(a=>{const g=it.get(a.month)?.variableBudgetCents??0;return[a.summary.variableCents,g]})),ns=Math.max(1,...$.flatMap(a=>{const g=it.get(a.month)?.miscBudgetCents??0;return[a.summary.miscCents,g]})),Mn=ct(c.fixedCents,P),as=ct(c.foodCents,A),oa=ct(c.goingOutCents,D),mn=ct(c.variableCents,L),ss=ct(c.miscCents,I),e=ct(c.totalCents,rt),t=rt-c.totalCents,n=a=>a===0?"-":f(a),s=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(P)}</div>
        <div class="compact-cost-actual ${Mn}">${n(c.fixedCents)}</div>
      </div>`,r=`<div class="compact-cost-row compact-cost-row-total">
        <div class="compact-cost-name">Summe</div>
        <div class="compact-cost-budget">${f(L)}</div>
        <div class="compact-cost-actual ${mn}">${n(c.variableCents)}</div>
      </div>`,l=o?o.fixedCosts.length>0?o.fixedCosts.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${mt(a.name)}</div>
                  <div class="compact-cost-budget">${f(a.plannedCents)}</div>
                  <div class="compact-cost-actual ${ct(a.actualCents,a.plannedCents)}">${n(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,d=o?o.variablePositions.length>0?o.variablePositions.map(a=>`<div class="compact-cost-row">
                  <div class="compact-cost-name">${`${mt(a.name)}${a.autoAnnualTemplateId?" (A)":""}`}</div>
                  <div class="compact-cost-budget">${f(a.budgetCents)}</div>
                  <div class="compact-cost-actual ${ct(a.actualCents,a.budgetCents)}">${n(a.actualCents)}</div>
                </div>`).join(""):`<div class="compact-cost-row compact-cost-row-empty">
            <div class="compact-cost-name muted">Keine Positionen</div>
            <div class="compact-cost-budget">-</div>
            <div class="compact-cost-actual">-</div>
          </div>`:`<div class="compact-cost-row compact-cost-row-empty">
          <div class="compact-cost-name muted">Kein Monat gewählt</div>
          <div class="compact-cost-budget">-</div>
          <div class="compact-cost-actual">-</div>
        </div>`,h=p.editingFixedTemplateId?p.fixedTemplates.find(a=>a.id===p.editingFixedTemplateId):null,k=p.hasUnexportedChanges,E=p.unexportedChangeLog.slice().reverse(),x=p.persistentAuditLog.slice().sort((a,g)=>g.timestampIso.localeCompare(a.timestampIso)),b=p.lastBackupFileName?mt(p.lastBackupFileName):"-",w={foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0},y=p.years.slice().sort((a,g)=>a.year-g.year),C=y.some(a=>a.year===p.dashboardYear)?p.dashboardYear:p.selectedYear??y[y.length-1]?.year??null,m=typeof C=="number"?y.find(a=>a.year===C):void 0,M=m?m.months.slice().sort((a,g)=>a.month-g.month):[],_=m?ee(m):w,S=m?z(m):{salaryIncomeCents:0,freshIncomeCents:0},F=S.salaryIncomeCents+S.freshIncomeCents,N=S.salaryIncomeCents,j=m?dn(m):{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0},Y=m?Wn(m):0,K=m?ha(m,be):0,J=Y+K,U=m?m.months.reduce((a,g)=>a+Vt(g),0):0,V=J-U,H=J-_.totalCents,we=[{label:"Essen",budgetCents:j.foodCents,actualCents:_.foodCents},{label:"Ausgehen",budgetCents:j.goingOutCents,actualCents:_.goingOutCents},{label:"Fixkosten",budgetCents:j.fixedCents,actualCents:_.fixedCents},{label:"Variable",budgetCents:j.variableCents,actualCents:_.variableCents},{label:"Sonstige",budgetCents:j.miscCents,actualCents:_.miscCents}],ce=M.map(a=>{const g=m?be.get(re(m.year,a.month)):void 0,R=xn(a),te=a.incomes.reduce((Kn,la)=>Kn+(la.incomeSource==="salary"?la.amountCents:0),0),Pe=a.incomes.reduce((Kn,la)=>Kn+(en(la.incomeSource)?la.amountCents:0),0),tt=g?.effectiveIncomeCents??Pe,St=g?.plannedBudgetCents??Vt(a),rn=R.foodCents,Tn=R.goingOutCents,yt=rn+Tn,ka=R.totalCents,Ia=tt-St,Lt=tt-ka;return{month:a.month,salaryIncomeCents:te,incomeCents:Pe,foodCents:rn,goingOutCents:Tn,foodAndGoingOutCents:yt,effectiveIncomeCents:tt,plannedBudgetCents:St,actualCostCents:ka,plannedNetCents:Ia,actualNetCents:Lt}}),se=Math.max(1,...ce.map(a=>a.actualCostCents)),pe=Math.max(1,...ce.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),Ge=Math.max(1,...ce.map(a=>a.foodAndGoingOutCents)),Gt=Math.max(1,...ce.map(a=>a.foodCents)),Xe=Math.max(1,...ce.map(a=>a.goingOutCents)),bt=ce.map((a,g,R)=>{const te=g>0?R[g-1]?.plannedNetCents??a.plannedNetCents:a.plannedNetCents;return{...a,monthLabel:Ce(a.month),monthShortLabel:Ce(a.month).slice(0,3),deltaCents:a.plannedNetCents-te}}),Ht=bt[bt.length-1]??null,zr=Math.min(0,...bt.map(a=>a.plannedNetCents)),Rs=Math.max(0,...bt.map(a=>a.plannedNetCents)),nr=Math.max(1,Rs-zr),rs=720,Bs=320,Ms=18,js=18,Ur=38,Da=56,ar=rs-Da-js,Ys=Bs-Ms-Ur,Wr=a=>{if(bt.length<=1)return Da+ar/2;const g=a/(bt.length-1);return Da+g*ar},zs=a=>Ms+(Rs-a)/nr*Ys,_n=bt.map((a,g)=>{const R=Wr(g),te=zs(a.plannedNetCents);return{...a,x:R,y:te,leftPercent:R/rs*100,topPercent:te/Bs*100}}),Us=_n.map((a,g)=>`${g===0?"M":"L"} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`).join(" "),sr=_n.length>0?`${Us} L ${_n[_n.length-1]?.x.toFixed(1)} ${(Ms+Ys).toFixed(1)} L ${_n[0]?.x.toFixed(1)} ${(Ms+Ys).toFixed(1)} Z`:"",rr=5,Gr=Array.from({length:rr},(a,g)=>{const R=g/(rr-1),te=Rs-R*nr;return{valueCents:Math.round(te/100)*100,y:zs(te)}}),ir=zs(0),Jr=bt[0]?.plannedNetCents??0,Oa=(bt[bt.length-1]?.plannedNetCents??0)-Jr,Hr=Oa<0?"trend-badge-negative":Oa>0?"trend-badge-positive":"trend-badge-neutral",or=Oa<0?"↘":Oa>0?"↗":"→",Xr=Oa<0?"Abwärtstrend":Oa>0?"Aufwärtstrend":"Seitwärts",xa=y.reduce((a,g)=>{const R=dn(g);return{foodCents:a.foodCents+R.foodCents,goingOutCents:a.goingOutCents+R.goingOutCents,fixedCents:a.fixedCents+R.fixedCents,variableCents:a.variableCents+R.variableCents,miscCents:a.miscCents+R.miscCents,totalCents:a.totalCents+R.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Xt=y.reduce((a,g)=>{const R=ee(g);return{foodCents:a.foodCents+R.foodCents,goingOutCents:a.goingOutCents+R.goingOutCents,fixedCents:a.fixedCents+R.fixedCents,variableCents:a.variableCents+R.variableCents,miscCents:a.miscCents+R.miscCents,totalCents:a.totalCents+R.totalCents}},{foodCents:0,goingOutCents:0,fixedCents:0,variableCents:0,miscCents:0,totalCents:0}),Qr=y.reduce((a,g)=>a+Wn(g),0),Zr=y[0]?ha(y[0],be):0,lr=Qr+Zr,cr=lr-xa.totalCents,ur=lr-Xt.totalCents,dr=[{label:"Essen",budgetCents:xa.foodCents,actualCents:Xt.foodCents},{label:"Ausgehen",budgetCents:xa.goingOutCents,actualCents:Xt.goingOutCents},{label:"Fixkosten",budgetCents:xa.fixedCents,actualCents:Xt.fixedCents},{label:"Variable",budgetCents:xa.variableCents,actualCents:Xt.variableCents},{label:"Sonstige",budgetCents:xa.miscCents,actualCents:Xt.miscCents}],hr=Math.max(1,...dr.flatMap(a=>[a.budgetCents,a.actualCents])),Ws=[{label:"Essen & Ausgehen",actualCents:Xt.foodCents+Xt.goingOutCents},{label:"Fixkosten",actualCents:Xt.fixedCents},{label:"Variable",actualCents:Xt.variableCents},{label:"Sonstige",actualCents:Xt.miscCents}],ei=Math.max(1,...Ws.map(a=>a.actualCents)),Te=y.map(a=>{const g=ee(a),R=dn(a),te=Wn(a),Pe=z(a),tt=ha(a,be),St=te+tt;return{year:a.year,salaryIncomeCents:Pe.salaryIncomeCents,freshIncomeCents:Pe.freshIncomeCents,totalIncomeCents:Pe.salaryIncomeCents+Pe.freshIncomeCents,foodAndGoingOutCents:g.foodCents+g.goingOutCents,fixedCents:g.fixedCents,variableCents:g.variableCents,miscCents:g.miscCents,budgetTotalCents:R.totalCents,actualTotalCents:g.totalCents,effectiveIncomeCents:St,plannedNetCents:St-R.totalCents,actualNetCents:St-g.totalCents}}),ti=Te.reduce((a,g)=>a+g.totalIncomeCents,0),ni=Te.reduce((a,g)=>a+g.salaryIncomeCents,0),pr=Math.max(1,...Te.flatMap(a=>[Math.abs(a.plannedNetCents),Math.abs(a.actualNetCents)])),ai=Math.max(1,...Te.map(a=>a.actualTotalCents)),si=Math.max(1,...Te.map(a=>a.totalIncomeCents)),ri=Math.max(1,...Te.map(a=>a.salaryIncomeCents)),fr=Math.max(1,...Te.flatMap(a=>[a.totalIncomeCents,a.actualTotalCents])),vr=Math.max(1,...Te.flatMap(a=>[a.salaryIncomeCents,a.actualTotalCents])),ii=Math.max(1,...Te.map(a=>a.foodAndGoingOutCents)),oi=Math.max(1,...Te.map(a=>a.fixedCents)),li=Math.max(1,...Te.map(a=>a.variableCents)),ci=Math.max(1,...Te.map(a=>a.miscCents)),ui=`
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${p.dashboardTab==="year"?"btn-primary":"btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${p.dashboardTab==="food"?"btn-primary":"btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${p.dashboardTab==="all"?"btn-primary":"btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${y.length===0?'<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>':p.dashboardTab==="year"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${y.map(a=>`<option value="${a.year}" ${a.year===C?"selected":""}>${a.year}</option>`).join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${m?.year??""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(F)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(N)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(U)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(_.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Oe(V)}">${f(V)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Oe(H)}">${f(H)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${or}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${Hr}">${or} ${Xr}</span>
                    </div>
                  </header>
                  ${Ht?`
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${mt(Ht.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${Oe(Ht.plannedNetCents)}" data-year-trend-active-net>${f(Ht.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${f(Ht.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${f(Ht.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${Oe(Ht.deltaCents)}" data-year-trend-active-delta>${Ht.deltaCents>=0?"+":""}${f(Ht.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${rs} ${Bs}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${m?.year??""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${Gr.map(a=>`
                                    <g>
                                      <line class="year-trend-grid-line" x1="${Da}" y1="${a.y.toFixed(1)}" x2="${rs-js}" y2="${a.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${Da-10}" y="${(a.y+4).toFixed(1)}" text-anchor="end">${f(a.valueCents)}</text>
                                    </g>
                                  `).join("")}
                              <line class="year-trend-zero-line" x1="${Da}" y1="${ir.toFixed(1)}" x2="${rs-js}" y2="${ir.toFixed(1)}"></line>
                              ${sr?`<path class="year-trend-area" d="${sr}"></path>`:""}
                              ${Us?`<path class="year-trend-line" d="${Us}"></path>`:""}
                              ${_n.map(a=>`
                                    <circle class="year-trend-node ${a.plannedNetCents<0?"is-negative":""}" cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${a.x.toFixed(1)}" y="${Bs-12}" text-anchor="middle">${mt(a.monthShortLabel)}</text>
                                  `).join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${_n.map((a,g)=>`
                                    <button
                                      class="year-trend-point-hit ${g===_n.length-1?"is-active":""}"
                                      type="button"
                                      style="left:${a.leftPercent.toFixed(2)}%; top:${a.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${g===_n.length-1?"1":"0"}"
                                      data-month-label="${mt(a.monthLabel)}"
                                      data-net-cents="${a.plannedNetCents}"
                                      data-actual-net-cents="${a.actualNetCents}"
                                      data-income-cents="${a.effectiveIncomeCents}"
                                      data-expense-cents="${a.actualCostCents}"
                                      data-delta-cents="${a.deltaCents}"
                                      aria-label="${mt(a.monthLabel)}: Kalkulierter Saldo ${f(a.plannedNetCents)}, Einkommen ${f(a.effectiveIncomeCents)}, Ausgaben ${f(a.actualCostCents)}"
                                      aria-pressed="${g===_n.length-1?"true":"false"}"
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
                    ${we.map(a=>{const g=wt(a.actualCents,a.budgetCents),R=Math.min(100,g),te=`${g.toFixed(0)}%`,Pe=a.budgetCents-a.actualCents,tt=Pe<0?"danger":Pe>0?"budget-under":"";return`
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${In(a.budgetCents,a.actualCents)==="bar-negative"?"circle-negative":"circle-positive"}" style="--circle-pct:${R.toFixed(1)}%" title="${a.label}: ${f(a.actualCents)} von ${f(a.budgetCents)}">
                              <span class="circle-chart-value">${te}</span>
                            </div>
                            <div class="circle-chart-label">${a.label}</div>
                            <div class="circle-chart-meta muted">B ${f(a.budgetCents)} / I ${f(a.actualCents)}</div>
                            <div class="circle-chart-meta ${tt}">${Pe>=0?"+":""}${f(Pe)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ce.length,1)}, minmax(0, 1fr));">
                    ${ce.map(a=>{const g=le(a.actualCostCents,se);return`
                          <div class="spark-bar" title="${Ce(a.month)}: ${f(a.actualCostCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.actualCostCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                    ${ce.map(a=>{const g=le(Math.abs(a.plannedNetCents),pe),R=le(Math.abs(a.actualNetCents),pe),te=a.plannedNetCents<0?"bar-negative":"bar-positive",Pe=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${Ce(a.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${te}" style="width:${g}; opacity: 0.35;"></div>
                              <div class="bar ${Pe}" style="width:${R}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Oe(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${Oe(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  ${ce.map(a=>`<tr>
                        <td>${Ce(a.month)}</td>
                    <td>${f(a.salaryIncomeCents)}</td>
                    <td>${f(a.incomeCents)}</td>
                        <td>${f(a.plannedBudgetCents)}</td>
                        <td>${f(a.actualCostCents)}</td>
                        <td class="${Oe(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${Oe(a.actualNetCents)}">${f(a.actualNetCents)}</td>
                      </tr>`).join("")}
                </tbody>
              </table>
            `:p.dashboardTab==="food"?`
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${y.map(a=>`<option value="${a.year}" ${a.year===C?"selected":""}>${a.year}</option>`).join("")}
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
                    ${ce.map(a=>{const g=le(a.foodAndGoingOutCents,Ge);return`
                          <div class="spark-bar" title="${Ce(a.month)}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ce.length,1)}, minmax(0, 1fr));">
                    ${ce.map(a=>{const g=le(a.foodCents,Gt);return`
                          <div class="spark-bar" title="${Ce(a.month)}: ${f(a.foodCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.foodCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(ce.length,1)}, minmax(0, 1fr));">
                    ${ce.map(a=>{const g=le(a.goingOutCents,Xe);return`
                          <div class="spark-bar" title="${Ce(a.month)}: ${f(a.goingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.goingOutCents)} €</span></div>
                              </div>
                            </div>
                            <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                    <div class="eval-row"><div class="eval-label">Einkommen</div><div class="eval-value">${f(ti)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Gehalt</div><div class="eval-value">${f(ni)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${f(xa.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Xt.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${Oe(cr)}">${f(cr)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${Oe(ur)}">${f(ur)}</div><div class="eval-value"></div></div>
                  </div>
                </section>

                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Gesamtkosten nach Kategorien</h4>
                    <div class="eval-tile-columns"><span>Bereich</span><span>Wert</span></div>
                  </header>
                  <div class="eval-rows">
                    ${Ws.map(a=>`<div class="eval-row"><div class="eval-label">${a.label}</div><div class="eval-value">${f(a.actualCents)}</div><div class="eval-value"></div></div>`).join("")}
                    <div class="eval-row eval-strong"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${f(Xt.totalCents)}</div><div class="eval-value"></div></div>
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
                    ${dr.map(a=>{const g=le(a.budgetCents,hr),R=le(a.actualCents,hr),te=In(a.budgetCents,a.actualCents);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Budget: ${f(a.budgetCents)} | Ist: ${f(a.actualCents)}">
                              <div class="bar bar-budget" style="width:${g}"></div>
                              <div class="bar-marker" style="left:${g}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${te}" style="width:${R}"></div>
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
                    ${Ws.map(a=>{const g=le(a.actualCents,ei);return`
                          <div class="bar-row">
                            <div class="bar-label">${a.label}</div>
                            <div class="bar-track" title="Ist: ${f(a.actualCents)}">
                              <div class="bar bar-expense" style="width:${g}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.actualTotalCents,ai);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.actualTotalCents)} €</span></div>
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
                    ${Te.map(a=>{const g=le(Math.abs(a.plannedNetCents),pr),R=le(Math.abs(a.actualNetCents),pr),te=a.plannedNetCents<0?"bar-negative":"bar-positive",Pe=a.actualNetCents<0?"bar-negative":"bar-positive";return`
                          <div class="bar-row">
                            <div class="bar-label">${a.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${f(a.plannedNetCents)} | Ist-Saldo: ${f(a.actualNetCents)}">
                              <div class="bar ${te}" style="width:${g}; opacity: 0.35;"></div>
                              <div class="bar ${Pe}" style="width:${R}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${Oe(a.plannedNetCents)}">B ${f(a.plannedNetCents)}</span>
                              <span class="${Oe(a.actualNetCents)}">I ${f(a.actualNetCents)}</span>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.foodAndGoingOutCents,ii);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.foodAndGoingOutCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.foodAndGoingOutCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.fixedCents,oi);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.fixedCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.fixedCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.variableCents,li);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.variableCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.variableCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.miscCents,ci);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.miscCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.miscCents)} €</span></div>
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
                  ${Te.map(a=>`<tr>
                        <td>${a.year}</td>
                        <td>${f(a.salaryIncomeCents)}</td>
                        <td>${f(a.totalIncomeCents)}</td>
                        <td>${f(a.budgetTotalCents)}</td>
                        <td>${f(a.actualTotalCents)}</td>
                        <td class="${Oe(a.plannedNetCents)}">${f(a.plannedNetCents)}</td>
                        <td class="${Oe(a.actualNetCents)}">${f(a.actualNetCents)}</td>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.totalIncomeCents,si);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.totalIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.totalIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.salaryIncomeCents,ri);return`
                          <div class="spark-bar" title="${a.year}: ${f(a.salaryIncomeCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${g}"><span class="spark-bar-fill-value">${f(a.salaryIncomeCents)} €</span></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.totalIncomeCents,fr),R=le(a.actualTotalCents,fr);return`
                          <div class="spark-bar" title="${a.year}: Einkommen ${f(a.totalIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${g}"></div>
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
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(Te.length,1)}, minmax(0, 1fr));">
                    ${Te.map(a=>{const g=le(a.salaryIncomeCents,vr),R=le(a.actualTotalCents,vr);return`
                          <div class="spark-bar" title="${a.year}: Gehalt ${f(a.salaryIncomeCents)} | Kosten ${f(a.actualTotalCents)}">
                            <div class="spark-bar-stack">
                              <div class="spark-bar-track" aria-hidden="true">
                                <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${g}"></div>
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
    `,di=`
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `,hi=`
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${h?.name??""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${h?Pt(h.plannedCents):""}" />
          </label>
          <button class="btn btn-primary" id="add-fixed-template">${h?"Änderung speichern":"Vorlage speichern"}</button>
          ${h?'<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>':""}
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
    `,mr=p.annualVariableFixedTemplates.reduce((a,g)=>a+g.plannedCents,0),pi=Math.round(mr/12),fi=`
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
                <div class="eval-value budget-under">${f(mr)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${f(pi)}</div>
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
            ${p.annualVariableFixedTemplates.map(a=>{const g=Xn(a.dueDateIso),R=g?Ce(g.month):"-";return`<tr>
                    <td>${a.name}</td>
                    <td>${a.dueDateIso}</td>
                    <td>${R}</td>
                    <td>${f(a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${a.id}">Löschen</button></td>
                  </tr>`}).join("")}
          </tbody>
        </table>
      </div>
    `,sn=p.evaluationCurrentResult,vi=`
      <div class="grid">
        <div class="inline">
          <label>
            Suchwort
            <input id="evaluation-query" type="text" placeholder="z.B. Klamotten" value="${mt(p.evaluationQuery)}" />
          </label>
          <button class="btn btn-primary" id="run-evaluation" type="button">Auswerten</button>
          <button class="btn" id="save-evaluation" type="button" ${sn&&sn.keywordNormalized?"":"disabled"}>Ergebnis speichern</button>
        </div>

        ${sn?`
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Aktuelles Ergebnis</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Suchwort</div>
                      <div class="eval-value">${mt(sn.keyword||"-")}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Treffer gesamt</div>
                      <div class="eval-value">${sn.totalHitCount}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme gesamt</div>
                      <div class="eval-value budget-under">${f(sn.totalCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Betragssumme laufendes Jahr</div>
                      <div class="eval-value">${f(sn.currentYearCents)}</div>
                      <div class="eval-value"></div>
                    </div>
                    <div class="eval-row eval-strong">
                      <div class="eval-label">Monatsschnitt (Monate mit Treffern)</div>
                      <div class="eval-value">${f(sn.monthAverageCents)}</div>
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
                  ${sn.yearRows.length>0?sn.yearRows.map(a=>`<tr>
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
                  ${sn.monthRows.length>0?sn.monthRows.map(a=>`<tr>
                              <td>${a.year}</td>
                              <td>${Ce(a.month)}</td>
                              <td>${a.hitCount}</td>
                              <td>${f(a.totalCents)}</td>
                            </tr>`).join(""):'<tr><td colspan="4" class="muted">Keine Treffer gefunden.</td></tr>'}
                </tbody>
              </table>
            `:'<p class="muted">Noch keine Auswertung ausgeführt.</p>'}

        <h3>Gespeicherte Auswertungen</h3>
        ${p.savedSearchEvaluations.length===0?'<p class="muted">Noch keine gespeicherten Auswertungen vorhanden.</p>':p.savedSearchEvaluations.map(a=>`
                  <article class="card">
                    <div class="inline">
                      <strong>${mt(a.keyword)}</strong>
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
                        ${a.yearRows.length>0?a.yearRows.map(g=>`<tr>
                                <td>${g.year}</td>
                                <td>${g.hitCount}</td>
                                <td>${f(g.totalCents)}</td>
                                <td>${g.monthsWithHits}</td>
                                <td>${f(g.monthAverageCents)}</td>
                              </tr>`).join(""):'<tr><td colspan="5" class="muted">Keine Treffer gefunden.</td></tr>'}
                      </tbody>
                    </table>
                  </article>
                `).join("")}
      </div>
    `,gr=p.topModal==="years"?"Jahr hinzufügen":p.topModal==="fixed"?"Fixe Kosten (zentral)":p.topModal==="variable-fixed"?"Variable Fixkosten":p.topModal==="dashboard"?"Dashboard":p.topModal==="evaluation"?"Auswertung":"",mi=p.topModal==="years"?di:p.topModal==="fixed"?hi:p.topModal==="variable-fixed"?fi:p.topModal==="dashboard"?ui:p.topModal==="evaluation"?vi:"";B.innerHTML=`
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${k?`<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${p.unexportedChangeLog.length})</button>`:""}
            <label>
              Theme
              <select id="theme-select">
                ${jr.map(a=>`<option value="${a}" ${p.theme===a?"selected":""}>${Ii(a)}</option>`).join("")}
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

        ${p.topModal?`
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${gr}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${gr}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${mi}
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
                  ${E.length===0?'<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>':`<ol class="change-log-list">${E.map(a=>{const g=new Date(a.timestampIso);return`<li><strong>${g.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${g.toLocaleString("de-DE")}</strong><span>${mt(a.message)}</span></li>`}).join("")}</ol>`}
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
                  ${x.length===0?'<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>':`<ol class="change-log-list">${x.map(a=>{const g=new Date(a.timestampIso);return`<li><strong>${g.toLocaleDateString("de-DE",{weekday:"short"}).slice(0,2).toUpperCase()} ${g.toLocaleString("de-DE")}</strong><span>${mt(a.message)}</span></li>`}).join("")}</ol>`}
                </div>
              </div>
            </div>
          `:""}

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${i?`${Ce(p.selectedMonth)} ${i.year}`:"-"}</h2>
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
                  ${Array.from({length:12},(a,g)=>g+1).map(a=>`<option value="${a}" ${a===p.selectedMonth?"selected":""}>${Ce(a)}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>

          <article class="card compact-month-overview" aria-label="Kompakte Monatsübersicht">
            <h3>Monatsübersicht kompakt</h3>
            <section class="compact-income-panel">
              <div class="compact-income-row">
                <span>Erfasstes Einkommen</span>
                <strong>${f(he)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Davon Gehalt</span>
                <strong>${f(Be)}</strong>
              </div>
              <div class="compact-income-row">
                <span>Frisches Einkommen</span>
                <strong>${f(Ze)}</strong>
              </div>
              <div class="compact-income-row ${ze}">
                <span>Übernahme aus Vormonat</span>
                <strong>${Rt?f(O):"-"}</strong>
              </div>
              <div class="compact-income-row compact-income-total">
                <span>Summe Einkommen</span>
                <strong>${f(Tt)}</strong>
              </div>
            </section>

            <section class="compact-month-summary-row" aria-label="Monatssummen">
              <article class="compact-month-summary-box">
                <div class="compact-month-summary-label">Budget</div>
                <div class="compact-month-summary-hint">für diesen Monat</div>
                <div class="compact-month-summary-amount">${f(rt)}</div>
              </article>
              <article class="compact-month-summary-box">
                <div class="compact-month-summary-label">Ausgegeben</div>
                <div class="compact-month-summary-amount compact-month-summary-amount-spent ${e}">${n(c.totalCents)} <span class="eval-diff ${e}">(Diff ${za(t)})</span></div>
              </article>
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
                  ${l}
                  ${s}
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
                  ${d}
                  ${r}
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
                    <div class="compact-cost-budget">${f(Ue)}</div>
                    <div class="compact-cost-actual ${He}">${n(Me)}</div>
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
                    <div class="compact-cost-actual ${ss}">${n(c.miscCents)}</div>
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
                  ${$t.map(a=>`
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
                  ${tn.map(a=>{const g=le(Math.abs(a.valueCents),Ln),R=a.valueCents>=0?"+":"",te=a.label==="Netto"?a.valueCents<0?"danger":a.valueCents>0?"budget-under":"":"";return`
                        <div class="bar-row">
                          <div class="bar-label">${a.label}</div>
                          <div class="bar-track" title="${f(a.valueCents)}">
                            <div class="bar ${a.className}" style="width:${g}"></div>
                          </div>
                          <div class="bar-meta"><span class="${te}">${R}${f(a.valueCents)}</span></div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Gesamtausgaben (Budget vs. Ist)">
                      ${$.map(a=>{const g=it.get(a.month)?.totalBudgetCents??0,R=le(g,Ca),te=le(a.summary.totalCents,Ca);return`
                            <div class="spark-bar" title="${Ce(a.month)}: Ist ${f(a.summary.totalCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${te}"><span class="spark-bar-fill-value">${f(a.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Essen und Ausgehen (Budget vs. Ist)">
                      ${$.map(a=>{const g=it.get(a.month),R=(g?.foodBudgetCents??0)+(g?.goingOutBudgetCents??0),te=a.summary.foodCents+a.summary.goingOutCents,Pe=le(R,Nn),tt=le(te,Nn);return`
                            <div class="spark-bar" title="${Ce(a.month)}: Ist ${f(te)} € | Budget ${f(R)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${Pe}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${tt}"><span class="spark-bar-fill-value">${f(te)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Fixkosten (Budget vs. Ist)">
                      ${$.map(a=>{const g=it.get(a.month)?.fixedBudgetCents??0,R=le(g,Es),te=le(a.summary.fixedCents,Es);return`
                            <div class="spark-bar" title="${Ce(a.month)}: Ist ${f(a.summary.fixedCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${te}"><span class="spark-bar-fill-value">${f(a.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Variable Kosten (Budget vs. Ist)">
                      ${$.map(a=>{const g=it.get(a.month)?.variableBudgetCents??0,R=le(g,Fa),te=le(a.summary.variableCents,Fa);return`
                            <div class="spark-bar" title="${Ce(a.month)}: Ist ${f(a.summary.variableCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${te}"><span class="spark-bar-fill-value">${f(a.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                ${i?`
                    <div class="spark-bars" aria-label="Jahresverlauf Sonstige (Budget vs. Ist)">
                      ${$.map(a=>{const g=it.get(a.month)?.miscBudgetCents??0,R=le(g,ns),te=le(a.summary.miscCents,ns);return`
                            <div class="spark-bar" title="${Ce(a.month)}: Ist ${f(a.summary.miscCents)} € | Budget ${f(g)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${R}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${te}"><span class="spark-bar-fill-value">${f(a.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${Ce(a.month).slice(0,3)}</div>
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
                    <div class="eval-value">${f(he)}</div>
                    <div class="eval-value">${f(st)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${f(Be)}</div>
                    <div class="eval-value">${f(kt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${f(Ze)}</div>
                    <div class="eval-value">${f(Yt)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${ze}">${Rt?f(O):"-"}</div>
                    <div class="eval-value muted">-</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${f(Tt)}</div>
                    <div class="eval-value">${f(It)}</div>
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
                    <div class="eval-value">${kn(A,c.foodCents)}</div>
                    <div class="eval-value">${f(G)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${kn(D,c.goingOutCents)}</div>
                    <div class="eval-value">${f(W)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${kn(P,c.fixedCents)}</div>
                    <div class="eval-value">${f(ie)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${kn(L,c.variableCents)}</div>
                    <div class="eval-value">${f($e)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${kn(I,c.miscCents)}</div>
                    <div class="eval-value">${f(Le)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${kn(rt,c.totalCents)}</div>
                    <div class="eval-value">${f(je)}</div>
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
                    <div class="eval-value ${as}">${f(c.foodCents)}</div>
                    <div class="eval-value">${f(v.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${oa}">${f(c.goingOutCents)}</div>
                    <div class="eval-value">${f(v.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${Mn}">${f(c.fixedCents)}</div>
                    <div class="eval-value">${f(v.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${mn}">${f(c.variableCents)}</div>
                    <div class="eval-value">${f(v.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${ss}">${f(c.miscCents)}</div>
                    <div class="eval-value">${f(v.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${f(c.totalCents)}</div>
                    <div class="eval-value">${f(v.totalCents)}</div>
                  </div>
                </div>
              </section>

              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Salden</h4>
                </header>
                <div class="eval-rows">
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budget übrig</div>
                    <div class="eval-value ${Oe(En)}">${f(En)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${Oe(We)}">${f(We)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Eigenkapital (Monat)</div>
                    <div class="eval-value ${at}">${f(ke)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${Oe(jt)}">${f(jt)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${dt}">${Re}</div>
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
                  <th>Gehalt - Ausgaben (€)</th>
                  <th>Gehalt vs. Ausgaben (%)</th>
                  <th>Einkommen - Ausgaben (€)</th>
                </tr>
              </thead>
              <tbody>
                ${$.map((a,g,R)=>{const te=i?be.get(re(i.year,a.month)):void 0,Pe=te?.plannedBudgetCents??0,tt=te?.netCents??0,St=T.get(a.month)??0,rn=q.get(a.month)??0,Tn=tt<0?"danger":tt>0?"budget-under":"",yt=R[g-1],ka=yt?.summary.foodCents??null,Ia=yt?.summary.goingOutCents??null,Lt=yt?.summary.fixedCents??null,Kn=yt?.summary.variableCents??null,la=yt?.summary.miscCents??null,br=yt?.summary.totalCents??null,yr=yt!==void 0?T.get(yt.month)??0:null,Cr=yt!==void 0?q.get(yt.month)??0:null,xr=i&&yt?be.get(re(i.year,yt.month))?.plannedBudgetCents??0:null,kr=ka===null?null:a.summary.foodCents-ka,wr=Ia===null?null:a.summary.goingOutCents-Ia,$r=Lt===null?null:a.summary.fixedCents-Lt,Sr=Kn===null?null:a.summary.variableCents-Kn,Er=la===null?null:a.summary.miscCents-la,Br=br===null?null:a.summary.totalCents-br,Mr=yr===null?null:St-yr,_r=Cr===null?null:rn-Cr,Tr=xr===null?null:Pe-xr,La=Nt=>Nt===null?"muted":Nt>0?"danger":Nt<0?"budget-under":"muted",Ar=Nt=>Nt===null?"muted":Nt>0?"budget-under":Nt<0?"danger":"muted",gi=Nt=>Nt===null?"muted":Nt>0?"danger":Nt<0?"budget-under":"muted",qn=Nt=>Nt===null?"(Δ -)":`(Δ ${Nt>0?"+":""}${f(Nt)})`,Pr=i&&yt?be.get(re(i.year,yt.month))?.netCents??0:null,Na=Pr===null?null:tt-Pr,bi=Na===null?"(Δ -)":`(Δ ${Na>0?"+":""}${f(Na)})`,yi=Na===null?"muted":Na<0?"danger":Na>0?"budget-under":"muted",Fr=St-a.summary.totalCents,Dr=rn-a.summary.totalCents,Ci=a.summary.totalCents>0?`${(St/a.summary.totalCents*100).toFixed(1)} %`:"-",xi=fn(St,a.summary.totalCents);return`<tr>
                  <td>${Ce(a.month)}</td>
                  <td>${f(a.summary.foodCents)} <span class="${La(kr)}">${qn(kr)}</span></td>
                  <td>${f(a.summary.goingOutCents)} <span class="${La(wr)}">${qn(wr)}</span></td>
                  <td>${f(a.summary.fixedCents)} <span class="${La($r)}">${qn($r)}</span></td>
                  <td>${f(a.summary.variableCents)} <span class="${La(Sr)}">${qn(Sr)}</span></td>
                  <td>${f(a.summary.miscCents)} <span class="${La(Er)}">${qn(Er)}</span></td>
                  <td>${f(a.summary.totalCents)} <span class="${La(Br)}">${qn(Br)}</span></td>
                  <td>${f(St)} <span class="${Ar(Mr)}">${qn(Mr)}</span></td>
                  <td>${f(rn)} <span class="${Ar(_r)}">${qn(_r)}</span></td>
                  <td>${f(Pe)} <span class="${gi(Tr)}">${qn(Tr)}</span></td>
                  <td class="${Tn}">${f(tt)} <span class="${yi}">${bi}</span></td>
                  <td class="${Oe(Fr)}">${f(Fr)}</td>
                  <td class="${xi}">${Ci}</td>
                  <td class="${Oe(Dr)}">${f(Dr)}</td>
                </tr>`}).join("")}
                ${vn}
                ${et}
              </tbody>
            </table>
          </article>

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${o?"":"disabled"} />
              </label>
              <label>
                Herkunft
                <select id="income-source" ${o?"":"disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${o?"":"disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${o?"":"disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${o?"":"disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${o?`<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${ze}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${Pt(O)}" />
                    </td>
                    <td>-</td>
                  </tr>${o.incomes.map(a=>`<tr>
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
                  <strong>${f(he)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${f(Be)} €</strong>
                </div>
                <div class="column-overview-row ${ze}">
                  <span>Übernahme Vormonat</span>
                  <strong>${o?`${f(O)} €`:"-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${f(Tt)} €</strong>
                </div>
                <div class="column-overview-row ${Je}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${f(Ot)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${pa(A,c.foodCents)}
                ${pa(D,c.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${f(Ue)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${f(Me)} €</strong>
                  </div>
                  <div class="column-overview-row ${He}">
                    <span>Diff</span>
                    <strong>${f(De)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${Pt(A)}" ${o?"":"disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${Pt(D)}" ${o?"":"disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${o?"":"disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${o?o.days.map(a=>{const g=a.foodCents>0,R=a.goingOutCents>0,te=`${a.isoDate===u?"today-row":""} ${g||R?"day-has-entry":""}`.trim(),Pe=`amount-input ${g?"day-input-has-value":""}`.trim(),tt=`amount-input ${R?"day-input-has-value":""}`.trim();return`<tr class="${te}">
                      <td>${new Date(a.isoDate).toLocaleDateString("de-DE",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"})}</td>
                      <td><input class="${Pe}" data-day-food="${a.isoDate}" type="number" min="0" step="0.01" value="${Pt(a.foodCents)}" /></td>
                      <td><input class="${tt}" data-day-going="${a.isoDate}" type="number" min="0" step="0.01" value="${Pt(a.goingOutCents)}" /></td>
                    </tr>`}).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${pa(P,c.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${Pt(P)}" ${o?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${o?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${o?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${o?"":"disabled"}>Position anlegen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-fixed-csv" type="button" ${o?"":"disabled"}>Import</button>
                <input id="import-fixed-csv-input" type="file" accept=".csv,text/csv" ${o?"":"disabled"} style="display:none" />
                <button class="btn btn-quiet" id="clear-fixed-costs" type="button" ${o?"":"disabled"}>Alle Positionen löschen</button>
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag (Betrag wird als Budget und Ist übernommen)</p>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${o?o.fixedCosts.map(a=>`<tr>
                    <td>${a.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${a.id}" type="number" min="0" step="0.01" value="${Pt(a.plannedCents)}" /></td>
                    <td class="${ct(a.actualCents,a.plannedCents)}"><input class="amount-input" data-fixed-actual="${a.id}" type="number" min="0" step="0.01" value="${Pt(a.actualCents)}" /></td>
                    <td class="${ct(a.actualCents,a.plannedCents)}">${f(a.actualCents-a.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${a.id}">Löschen</button></td>
                  </tr>`).join(""):""}
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${pa(L,c.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${Pt(L)}" ${o?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${o?"":"disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${o?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${o?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-variable-position-recurring" ${o?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-variable-csv" type="button" ${o?"":"disabled"}>Import</button>
                <input id="import-variable-csv-input" type="file" accept=".csv,text/csv" ${o?"":"disabled"} style="display:none" />
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag (Betrag wird als Budget und Ist übernommen)</p>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${o?o.variablePositions.map(a=>`<tr>
                    <td>${a.name}${a.autoAnnualTemplateId?' <span class="danger">(A)</span>':""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${a.id}" type="number" min="0" step="0.01" value="${Pt(a.budgetCents)}" /></td>
                    <td class="${ct(a.actualCents,a.budgetCents)}"><input class="amount-input" data-variable-position-actual="${a.id}" type="number" min="0" step="0.01" value="${Pt(a.actualCents)}" /></td>
                    <td class="${ct(a.actualCents,a.budgetCents)}">${f(a.actualCents-a.budgetCents)}</td>
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
              ${pa(I,c.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${Pt(I)}" ${o?"":"disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${o?"":"disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${o?"":"disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${o?"":"disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${o?"":"disabled"}>Wiederkehrend erfassen</button>
              </div>
              <div class="inline">
                <button class="btn" id="import-misc-csv" type="button" ${o?"":"disabled"}>Import</button>
                <input id="import-misc-csv-input" type="file" accept=".csv,text/csv" ${o?"":"disabled"} style="display:none" />
                <span>In csv Datei (betrag;wert). Nä. Wert direkt untereinander</span>
              </div>
              <p class="muted">Format ohne Header: Positionsbezeichnung;Betrag</p>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${o?o.miscCosts.map(a=>`<tr>
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
            <button class="btn" id="backup-export-csv" type="button">Backup exportieren (CSV Monatsübersicht)</button>
            <button class="btn" id="backup-export-detailed-month-csv" type="button">Backup exportieren (CSV Detail Monat)</button>
            <button class="btn" id="backup-export-detailed-year-csv" type="button">Backup exportieren (CSV Detail Jahr)</button>
            <label>
              Backup importieren (JSON)
              <input id="backup-import" type="file" accept="application/json" />
            </label>
          </div>
          <p class="muted">Letztes verwendetes Backup: ${b}</p>
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
    `,document.body.classList.toggle("panel-modal-open",!!(p.topModal||p.showUnexportedChangeLogModal||p.showPersistentAuditLogModal)),Sn(),Et(),qe(),xt()}function Sn(){const i=B.querySelector("#theme-select"),o=B.querySelector("#open-years-modal"),u=B.querySelector("#open-evaluation-modal"),c=B.querySelector("#open-fixed-modal"),v=B.querySelector("#open-variable-fixed-modal"),$=B.querySelector("#open-dashboard-modal"),A=B.querySelector("#panel-modal-close"),D=B.querySelector("#panel-modal-backdrop"),P=B.querySelector("#open-unexported-change-log"),L=B.querySelector("#open-persistent-audit-log"),I=B.querySelector("#unexported-change-log-close"),G=B.querySelector("#unexported-change-log-backup"),W=B.querySelector("#unexported-change-log-backdrop"),ie=B.querySelector("#persistent-audit-log-close"),$e=B.querySelector("#persistent-audit-log-backdrop"),Le=B.querySelector("#new-year"),he=B.querySelector("#create-year"),Be=B.querySelector("#evaluation-query"),Ze=B.querySelector("#run-evaluation"),be=B.querySelector("#save-evaluation"),ye=B.querySelector("#year-select"),Z=B.querySelector("#month-select");i?.addEventListener("change",()=>{const T=i.value;qr(T)&&yn(T)}),o?.addEventListener("click",()=>{on("years")}),u?.addEventListener("click",()=>{on("evaluation")}),c?.addEventListener("click",()=>{on("fixed")}),v?.addEventListener("click",()=>{on("variable-fixed")}),$?.addEventListener("click",()=>{on("dashboard")}),P?.addEventListener("click",()=>{ln()}),L?.addEventListener("click",()=>{vt()}),I?.addEventListener("click",()=>{Bt()}),G?.addEventListener("click",async()=>{try{await $s()}catch(T){console.error("Backup-Export fehlgeschlagen",T),Q("Backup konnte nicht exportiert werden.","error")}}),W?.addEventListener("click",T=>{T.target===W&&Bt()}),ie?.addEventListener("click",()=>{Mt()}),$e?.addEventListener("click",T=>{T.target===$e&&Mt()}),B.querySelectorAll("[data-dashboard-tab]").forEach(T=>{T.addEventListener("click",()=>{const q=T.dataset.dashboardTab;q!=="year"&&q!=="food"&&q!=="all"||(p.dashboardTab=q,ae())})});const O=B.querySelector("#dashboard-year-select");O?.addEventListener("change",()=>{const T=Number.parseInt(O.value,10);Number.isInteger(T)&&(p.dashboardYear=T,ae())}),A?.addEventListener("click",()=>{Rn()}),D?.addEventListener("click",T=>{T.target===D&&Rn()}),p.topModal&&window.setTimeout(()=>{A?.focus()},0),p.showUnexportedChangeLogModal&&window.setTimeout(()=>{I?.focus()},0),p.showPersistentAuditLogModal&&window.setTimeout(()=>{ie?.focus()},0),he?.addEventListener("click",async()=>{const T=Number.parseInt(Le?.value??"",10);if(!Number.isInteger(T)){alert("Bitte gültiges Jahr eingeben.");return}await Ns(T)}),Ze?.addEventListener("click",()=>{Ss(Be?.value??"")}),Be?.addEventListener("keydown",T=>{T.key==="Enter"&&(T.preventDefault(),Ss(Be.value))}),be?.addEventListener("click",async()=>{await Dt()}),B.querySelectorAll("[data-remove-saved-evaluation]").forEach(T=>{T.addEventListener("click",async()=>{const q=T.dataset.removeSavedEvaluation;q&&await sa(q)})}),ye?.addEventListener("change",()=>{p.selectedYear=Number.parseInt(ye.value,10),p.selectedMonth=cn(),ae()}),Z?.addEventListener("change",()=>{p.selectedMonth=Number.parseInt(Z.value,10),ae()});const Rt=B.querySelector("#fixed-template-name"),Tt=B.querySelector("#fixed-template-amount"),pn=B.querySelector("#add-fixed-template"),Ot=B.querySelector("#cancel-fixed-template-edit"),ke=B.querySelector("#annual-variable-fixed-name"),jt=B.querySelector("#annual-variable-fixed-date"),Re=B.querySelector("#annual-variable-fixed-amount"),ze=B.querySelector("#add-annual-variable-fixed-template");pn?.addEventListener("click",async()=>{const T=Rt?.value??"",q=Ne(Tt?.value??"0");await Pn(T,q),Rt&&(Rt.value=""),Tt&&(Tt.value="")}),Ot?.addEventListener("click",()=>{Ua()}),ze?.addEventListener("click",async()=>{const T=ke?.value??"",q=jt?.value??"",At=Ne(Re?.value??"0");await Fn(T,q,At),ke&&(ke.value=""),jt&&(jt.value=""),Re&&(Re.value="")}),B.querySelectorAll("[data-remove-annual-variable-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const q=T.dataset.removeAnnualVariableFixedTemplate;q&&await hn(q)})}),B.querySelectorAll("[data-edit-fixed-template]").forEach(T=>{T.addEventListener("click",()=>{const q=T.dataset.editFixedTemplate;q&&ms(q)})}),B.querySelectorAll("[data-remove-fixed-template]").forEach(T=>{T.addEventListener("click",async()=>{const q=T.dataset.removeFixedTemplate;q&&await Qe(q)})}),B.querySelectorAll("[data-day-food]").forEach(T=>{T.addEventListener("click",q=>{q.preventDefault(),T.blur(),lt(T)}),T.addEventListener("change",async()=>{const q=T.dataset.dayFood;q&&await Wa(q,"foodCents",Ne(T.value))})}),B.querySelectorAll("[data-day-going]").forEach(T=>{T.addEventListener("click",q=>{q.preventDefault(),T.blur(),lt(T)}),T.addEventListener("change",async()=>{const q=T.dataset.dayGoing;q&&await Wa(q,"goingOutCents",Ne(T.value))})}),B.querySelectorAll("[data-fixed-actual]").forEach(T=>{T.addEventListener("click",q=>{q.preventDefault(),T.blur(),lt(T)}),T.addEventListener("change",async()=>{const q=T.dataset.fixedActual;q&&await Zn(q,Ne(T.value))})}),B.querySelectorAll("[data-fixed-planned]").forEach(T=>{T.addEventListener("click",q=>{q.preventDefault(),T.blur(),lt(T)}),T.addEventListener("change",async()=>{const q=T.dataset.fixedPlanned;q&&await Ma(q,Ne(T.value))})});const Je=B.querySelector("#fixed-budget");Je?.addEventListener("click",T=>{T.preventDefault(),Je.blur(),lt(Je)}),Je?.addEventListener("change",async()=>{await gs(Ne(Je.value))});const at=B.querySelector("#food-budget");at?.addEventListener("click",T=>{T.preventDefault(),at.blur(),lt(at)}),at?.addEventListener("change",async()=>{await _a(Ne(at.value))});const st=B.querySelector("#going-out-budget");st?.addEventListener("click",T=>{T.preventDefault(),st.blur(),lt(st)}),st?.addEventListener("change",async()=>{await bs(Ne(st.value))}),B.querySelector("#open-weekly-shopping-planner")?.addEventListener("click",()=>{Ds()});const Yt=B.querySelector("#misc-budget");Yt?.addEventListener("click",T=>{T.preventDefault(),Yt.blur(),lt(Yt)}),Yt?.addEventListener("change",async()=>{await ge(Ne(Yt.value))});const zt=B.querySelector("#variable-budget");zt?.addEventListener("click",T=>{T.preventDefault(),zt.blur(),lt(zt)}),zt?.addEventListener("change",async()=>{await ys(Ne(zt.value))});const It=B.querySelector("#variable-position-name"),rt=B.querySelector("#variable-position-budget"),Ue=B.querySelector("#add-variable-position"),Me=B.querySelector("#add-variable-position-recurring"),De=B.querySelector("#import-variable-csv"),He=B.querySelector("#import-variable-csv-input"),je=B.querySelector("#misc-description"),We=B.querySelector("#misc-amount"),En=B.querySelector("#add-misc"),Oe=B.querySelector("#add-misc-recurring"),fn=B.querySelector("#import-misc-csv"),dt=B.querySelector("#import-misc-csv-input"),le=B.querySelector("#income-description"),wt=B.querySelector("#income-source"),$t=B.querySelector("#income-amount"),In=B.querySelector("#add-income"),tn=B.querySelector("#add-income-recurring"),Ln=B.querySelector("#fixed-cost-name"),nn=B.querySelector("#fixed-cost-budget"),it=B.querySelector("#add-fixed-cost"),Ut=B.querySelector("#import-fixed-csv"),ht=B.querySelector("#import-fixed-csv-input"),ra=B.querySelector("#clear-fixed-costs"),Bn=B.querySelector("#carryover-override");Bn?.addEventListener("click",T=>{T.preventDefault(),Bn.blur(),lt(Bn)}),Bn?.addEventListener("change",async()=>{const T=Bn.value;if(!T.trim()){await ma(null);return}await ma(Ne(T))}),it?.addEventListener("click",async()=>{const T=Ne(nn?.value??"0");await Ga(Ln?.value??"",T),Ln&&(Ln.value=""),nn&&(nn.value="")}),Ut?.addEventListener("click",()=>{ht?.click()}),ht?.addEventListener("change",async()=>{const T=ht.files?.[0];if(T){try{await Ha(T)}catch(q){console.error("Fixkosten-CSV-Import fehlgeschlagen",q),Q("CSV konnte nicht importiert werden.","error")}ht.value=""}}),ra?.addEventListener("click",async()=>{await Dn()}),Ue?.addEventListener("click",async()=>{const T=Ne(rt?.value??"0");await ta(It?.value??"",T,!1),It&&(It.value=""),rt&&(rt.value="")}),Me?.addEventListener("click",async()=>{const T=Ne(rt?.value??"0");await ta(It?.value??"",T,!0),It&&(It.value=""),rt&&(rt.value="")}),De?.addEventListener("click",()=>{He?.click()}),He?.addEventListener("change",async()=>{const T=He.files?.[0];if(T){try{await Xa(T)}catch(q){console.error("Variable-CSV-Import fehlgeschlagen",q),Q("CSV konnte nicht importiert werden.","error")}He.value=""}}),En?.addEventListener("click",async()=>{const T=Ne(We?.value??"0");await na(je?.value??"",T,!1),je&&(je.value=""),We&&(We.value="")}),Oe?.addEventListener("click",async()=>{const T=Ne(We?.value??"0");await na(je?.value??"",T,!0),je&&(je.value=""),We&&(We.value="")}),fn?.addEventListener("click",()=>{dt?.click()}),dt?.addEventListener("change",async()=>{const T=dt.files?.[0];if(T){try{await aa(T)}catch(q){console.error("Sonstiges-CSV-Import fehlgeschlagen",q),Q("CSV konnte nicht importiert werden.","error")}dt.value=""}}),In?.addEventListener("click",async()=>{const T=Ne($t?.value??"0"),q=wt?.value,At=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await Qa(le?.value??"",T,At,!1),le&&(le.value=""),$t&&($t.value=""),wt&&(wt.value="salary")}),tn?.addEventListener("click",async()=>{const T=Ne($t?.value??"0"),q=wt?.value,At=q==="balance"||q==="fresh"||q==="salary"?q:void 0;await Qa(le?.value??"",T,At,!0),le&&(le.value=""),$t&&($t.value=""),wt&&(wt.value="salary")}),B.querySelectorAll("[data-income-source]").forEach(T=>{T.addEventListener("change",async()=>{const q=T.dataset.incomeSource;if(!q)return;const At=T.value;await Aa(q,At==="balance"||At==="fresh"||At==="salary"?At:void 0)})}),B.querySelectorAll("[data-variable-position-budget]").forEach(T=>{T.addEventListener("click",q=>{q.preventDefault(),T.blur(),lt(T)}),T.addEventListener("change",async()=>{const q=T.dataset.variablePositionBudget;q&&await xs(q,Ne(T.value))})}),B.querySelectorAll("[data-variable-position-actual]").forEach(T=>{T.addEventListener("click",q=>{q.preventDefault(),T.blur(),lt(T)}),T.addEventListener("change",async()=>{const q=T.dataset.variablePositionActual;q&&await Cs(q,Ne(T.value))})}),B.querySelectorAll("[data-remove-variable-position]").forEach(T=>{T.addEventListener("click",async()=>{const q=T.dataset.removeVariablePosition;q&&await ks(q)})}),B.querySelectorAll("[data-move-variable-position-next]").forEach(T=>{T.addEventListener("click",async()=>{const q=T.dataset.moveVariablePositionNext;q&&await Ie(q)})}),B.querySelectorAll("[data-remove-fixed]").forEach(T=>{T.addEventListener("click",async()=>{const q=T.dataset.removeFixed;q&&await Ja(q)})}),B.querySelectorAll("[data-remove-income]").forEach(T=>{T.addEventListener("click",async()=>{const q=T.dataset.removeIncome;q&&await ws(q)})}),B.querySelectorAll("[data-remove-misc]").forEach(T=>{T.addEventListener("click",async()=>{const q=T.dataset.removeMisc;q&&await Ta(q)})});const ga=B.querySelector("#backup-export"),Pa=B.querySelector("#backup-export-csv"),ba=B.querySelector("#backup-export-detailed-month-csv"),ya=B.querySelector("#backup-export-detailed-year-csv"),ia=B.querySelector("#backup-import");B.querySelector("#scroll-up-btn")?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),ga?.addEventListener("click",async()=>{await $s()}),Pa?.addEventListener("click",async()=>{try{await Ee()}catch(T){console.error("CSV-Backup-Export fehlgeschlagen",T),Q("CSV-Backup konnte nicht exportiert werden.","error")}}),ba?.addEventListener("click",async()=>{try{await Za("month")}catch(T){console.error("Detaillierter Monats-CSV-Export fehlgeschlagen",T),Q("Detailliertes Monats-CSV konnte nicht exportiert werden.","error")}}),ya?.addEventListener("click",async()=>{try{await Za("year")}catch(T){console.error("Detaillierter Jahres-CSV-Export fehlgeschlagen",T),Q("Detailliertes Jahres-CSV konnte nicht exportiert werden.","error")}}),ia?.addEventListener("change",async()=>{const T=ia.files?.[0];if(T){try{await qs(T)}catch(q){console.error("Backup-Import fehlgeschlagen",q),Q("Backup konnte nicht importiert werden.","error")}ia.value=""}})}return{init:Ft}}const Ni="modulepreload",Ki=function(B){return"/habu26/"+B},Rr={},qi=function(p,Ae,X){let fe=Promise.resolve();if(Ae&&Ae.length>0){let nt=function(Ye){return Promise.all(Ye.map(de=>Promise.resolve(de).then(ft=>({status:"fulfilled",value:ft}),ft=>({status:"rejected",reason:ft}))))};var Se=nt;document.getElementsByTagName("link");const ue=document.querySelector("meta[property=csp-nonce]"),ve=ue?.nonce||ue?.getAttribute("nonce");fe=nt(Ae.map(Ye=>{if(Ye=Ki(Ye),Ye in Rr)return;Rr[Ye]=!0;const de=Ye.endsWith(".css"),ft=de?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Ye}"]${ft}`))return;const ot=document.createElement("link");if(ot.rel=de?"stylesheet":Ni,de||(ot.as="script"),ot.crossOrigin="",ot.href=Ye,ve&&ot.setAttribute("nonce",ve),document.head.appendChild(ot),de)return new Promise((qe,Et)=>{ot.addEventListener("load",qe),ot.addEventListener("error",()=>Et(new Error(`Unable to preload CSS for ${Ye}`)))})}))}function oe(ue){const ve=new Event("vite:preloadError",{cancelable:!0});if(ve.payload=ue,window.dispatchEvent(ve),!ve.defaultPrevented)throw ue}return fe.then(ue=>{for(const ve of ue||[])ve.status==="rejected"&&oe(ve.reason);return p().catch(oe)})};function Vi(B={}){const{immediate:p=!1,onNeedRefresh:Ae,onOfflineReady:X,onRegistered:fe,onRegisteredSW:oe,onRegisterError:Se}=B;let ue,ve;const nt=async(de=!0)=>{await ve};async function Ye(){if("serviceWorker"in navigator){if(ue=await qi(async()=>{const{Workbox:de}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:de}},[]).then(({Workbox:de})=>new de("/habu26/sw.js",{scope:"/habu26/",type:"classic"})).catch(de=>{Se?.(de)}),!ue)return;ue.addEventListener("activated",de=>{(de.isUpdate||de.isExternal)&&window.location.reload()}),ue.addEventListener("installed",de=>{de.isUpdate||X?.()}),ue.register({immediate:p}).then(de=>{oe?oe("/habu26/sw.js",de):fe?.(de)}).catch(de=>{Se?.(de)})}}return ve=Ye(),nt}function Ri(){Vi({immediate:!0})}const Yr=document.getElementById("app");if(!Yr)throw new Error("App-Container nicht gefunden.");Li(Yr).init();Ri();
