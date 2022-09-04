import { defineComponent, ref, watch, computed, onMounted, createVNode, reactive, getCurrentInstance, inject, provide, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, Fragment, renderList, createCommentVNode, resolveComponent, createBlock, withDirectives, vShow, toDisplayString, renderSlot, withCtx, resolveDynamicComponent, mergeProps, Teleport, pushScopeId, popScopeId } from 'vue';
import propTypes from 'vue-types';
import tinycolor from 'tinycolor2';
import { tryOnMounted, whenever, useLocalStorage, useDebounceFn, onClickOutside } from '@vueuse/core';
import { merge } from 'lodash-es';
import { createPopper } from '@popperjs/core';
import { stringify, parse } from 'gradient-parser';

var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){var e={exports:{}};return t(e,e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"=="undefined")||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")(),o=function(t){try{return !!t()}catch(t){return !0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,c={f:a&&!u.call({1:2},1)?function(t){var e=a(this,t);return !!e&&e.enumerable}:u},l=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,s=function(t){return f.call(t).slice(8,-1)},d="".split,v=o((function(){return !Object("z").propertyIsEnumerable(0)}))?function(t){return "String"==s(t)?d.call(t,""):Object(t)}:Object,p=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},g=function(t){return v(p(t))},h=function(t){return "object"==typeof t?null!==t:"function"==typeof t},y=function(t,e){if(!h(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!h(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,S=function(t,e){return m.call(t,e)},x=r.document,b=h(x)&&h(x.createElement),E=function(t){return b?x.createElement(t):{}},w=!i&&!o((function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,T={f:i?O:function(t,e){if(t=g(t),e=y(e,!0),w)try{return O(t,e)}catch(t){}if(S(t,e))return l(!c.f.call(t,e),t[e])}},A=function(t){if(!h(t))throw TypeError(String(t)+" is not an object");return t},k=Object.defineProperty,R={f:i?k:function(t,e,n){if(A(t),e=y(e,!0),A(n),w)try{return k(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return "value"in n&&(t[e]=n.value),t}},I=i?function(t,e,n){return R.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},j=function(t,e){try{I(r,t,e);}catch(n){r[t]=e;}return e},C=r["__core-js_shared__"]||j("__core-js_shared__",{}),L=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(t){return L.call(t)});var P,M,_,D=C.inspectSource,U=r.WeakMap,N="function"==typeof U&&/native code/.test(D(U)),F=e((function(t){(t.exports=function(t,e){return C[t]||(C[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});})),W=0,z=Math.random(),$=function(t){return "Symbol("+String(void 0===t?"":t)+")_"+(++W+z).toString(36)},B=F("keys"),Y=function(t){return B[t]||(B[t]=$(t))},G={},H=r.WeakMap;if(N){var X=C.state||(C.state=new H),V=X.get,K=X.has,q=X.set;P=function(t,e){return e.facade=t,q.call(X,t,e),e},M=function(t){return V.call(X,t)||{}},_=function(t){return K.call(X,t)};}else {var Q=Y("state");G[Q]=!0,P=function(t,e){return e.facade=t,I(t,Q,e),e},M=function(t){return S(t,Q)?t[Q]:{}},_=function(t){return S(t,Q)};}var J={set:P,get:M,has:_,enforce:function(t){return _(t)?M(t):P(t,{})},getterFor:function(t){return function(e){var n;if(!h(e)||(n=M(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=J.get,n=J.enforce,o=String(String).split("String");(t.exports=function(t,e,i,u){var a,c=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof e||S(i,"name")||I(i,"name",e),(a=n(i)).source||(a.source=o.join("string"==typeof e?e:""))),t!==r?(c?!f&&t[e]&&(l=!0):delete t[e],l?t[e]=i:I(t,e,i)):l?t[e]=i:j(e,i);})(Function.prototype,"toString",(function(){return "function"==typeof this&&e(this).source||D(this)}));})),tt=r,et=function(t){return "function"==typeof t?t:void 0},nt=function(t,e){return arguments.length<2?et(tt[t])||et(r[t]):tt[t]&&tt[t][e]||r[t]&&r[t][e]},rt=Math.ceil,ot=Math.floor,it=function(t){return isNaN(t=+t)?0:(t>0?ot:rt)(t)},ut=Math.min,at=function(t){return t>0?ut(it(t),9007199254740991):0},ct=Math.max,lt=Math.min,ft=function(t,e){var n=it(t);return n<0?ct(n+e,0):lt(n,e)},st=function(t){return function(e,n,r){var o,i=g(e),u=at(i.length),a=ft(r,u);if(t&&n!=n){for(;u>a;)if((o=i[a++])!=o)return !0}else for(;u>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return !t&&-1}},dt={includes:st(!0),indexOf:st(!1)},vt=dt.indexOf,pt=function(t,e){var n,r=g(t),o=0,i=[];for(n in r)!S(G,n)&&S(r,n)&&i.push(n);for(;e.length>o;)S(r,n=e[o++])&&(~vt(i,n)||i.push(n));return i},gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ht=gt.concat("length","prototype"),yt={f:Object.getOwnPropertyNames||function(t){return pt(t,ht)}},mt={f:Object.getOwnPropertySymbols},St=nt("Reflect","ownKeys")||function(t){var e=yt.f(A(t)),n=mt.f;return n?e.concat(n(t)):e},xt=function(t,e){for(var n=St(e),r=R.f,o=T.f,i=0;i<n.length;i++){var u=n[i];S(t,u)||r(t,u,o(e,u));}},bt=/#|\.prototype\./,Et=function(t,e){var n=Ot[wt(t)];return n==At||n!=Tt&&("function"==typeof e?o(e):!!e)},wt=Et.normalize=function(t){return String(t).replace(bt,".").toLowerCase()},Ot=Et.data={},Tt=Et.NATIVE="N",At=Et.POLYFILL="P",kt=Et,Rt=T.f,It=function(t,e){var n,o,i,u,a,c=t.target,l=t.global,f=t.stat;if(n=l?r:f?r[c]||j(c,{}):(r[c]||{}).prototype)for(o in e){if(u=e[o],i=t.noTargetGet?(a=Rt(n,o))&&a.value:n[o],!kt(l?o:c+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;xt(u,i);}(t.sham||i&&i.sham)&&I(u,"sham",!0),Z(n,o,u,t);}},jt=function(t,e){var n=[][t];return !!n&&o((function(){n.call(null,e||function(){throw 1},1);}))},Ct=Object.defineProperty,Lt={},Pt=function(t){throw t},Mt=function(t,e){if(S(Lt,t))return Lt[t];e||(e={});var n=[][t],r=!!S(e,"ACCESSORS")&&e.ACCESSORS,u=S(e,0)?e[0]:Pt,a=S(e,1)?e[1]:void 0;return Lt[t]=!!n&&!o((function(){if(r&&!i)return !0;var t={length:-1};r?Ct(t,1,{enumerable:!0,get:Pt}):t[1]=1,n.call(t,u,a);}))},_t=dt.indexOf,Dt=[].indexOf,Ut=!!Dt&&1/[1].indexOf(1,-0)<0,Nt=jt("indexOf"),Ft=Mt("indexOf",{ACCESSORS:!0,1:0});function Wt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}function $t(t,e,n){return e&&zt(t.prototype,e),n&&zt(t,n),t}It({target:"Array",proto:!0,forced:Ut||!Nt||!Ft},{indexOf:function(t){return Ut?Dt.apply(this,arguments)||0:_t(this,t,arguments.length>1?arguments[1]:void 0)}});(function(){function t(){Wt(this,t);}return $t(t,null,[{key:"isInBrowser",value:function(){return "undefined"!="undefined"}},{key:"isServer",value:function(){return "undefined"=="undefined"}},{key:"getUA",value:function(){return t.isInBrowser()?window.navigator.userAgent.toLowerCase():""}},{key:"isMobile",value:function(){return /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion)}},{key:"isOpera",value:function(){return -1!==navigator.userAgent.indexOf("Opera")}},{key:"isIE",value:function(){var e=t.getUA();return ""!==e&&e.indexOf("msie")>0}},{key:"isIE9",value:function(){var e=t.getUA();return ""!==e&&e.indexOf("msie 9.0")>0}},{key:"isEdge",value:function(){var e=t.getUA();return ""!==e&&e.indexOf("edge/")>0}},{key:"isChrome",value:function(){var e=t.getUA();return ""!==e&&/chrome\/\d+/.test(e)&&!t.isEdge()}},{key:"isPhantomJS",value:function(){var e=t.getUA();return ""!==e&&/phantomjs/.test(e)}},{key:"isFirefox",value:function(){var e=t.getUA();return ""!==e&&/firefox/.test(e)}}]),t})();var Yt=[].join,Gt=v!=Object,Ht=jt("join",",");It({target:"Array",proto:!0,forced:Gt||!Ht},{join:function(t){return Yt.call(g(this),void 0===t?",":t)}});var Xt,Vt,Kt=function(t){return Object(p(t))},qt=Array.isArray||function(t){return "Array"==s(t)},Qt=!!Object.getOwnPropertySymbols&&!o((function(){return !String(Symbol())})),Jt=Qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Zt=F("wks"),te=r.Symbol,ee=Jt?te:te&&te.withoutSetter||$,ne=function(t){return S(Zt,t)||(Qt&&S(te,t)?Zt[t]=te[t]:Zt[t]=ee("Symbol."+t)),Zt[t]},re=ne("species"),oe=function(t,e){var n;return qt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!qt(n.prototype)?h(n)&&null===(n=n[re])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},ie=function(t,e,n){var r=y(e);r in t?R.f(t,r,l(0,n)):t[r]=n;},ue=nt("navigator","userAgent")||"",ae=r.process,ce=ae&&ae.versions,le=ce&&ce.v8;le?Vt=(Xt=le.split("."))[0]+Xt[1]:ue&&(!(Xt=ue.match(/Edge\/(\d+)/))||Xt[1]>=74)&&(Xt=ue.match(/Chrome\/(\d+)/))&&(Vt=Xt[1]);var fe=Vt&&+Vt,se=ne("species"),de=function(t){return fe>=51||!o((function(){var e=[];return (e.constructor={})[se]=function(){return {foo:1}},1!==e[t](Boolean).foo}))},ve=de("splice"),pe=Mt("splice",{ACCESSORS:!0,0:0,1:2}),ge=Math.max,he=Math.min;It({target:"Array",proto:!0,forced:!ve||!pe},{splice:function(t,e){var n,r,o,i,u,a,c=Kt(this),l=at(c.length),f=ft(t,l),s=arguments.length;if(0===s?n=r=0:1===s?(n=0,r=l-f):(n=s-2,r=he(ge(it(e),0),l-f)),l+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(o=oe(c,r),i=0;i<r;i++)(u=f+i)in c&&ie(o,i,c[u]);if(o.length=r,n<r){for(i=f;i<l-r;i++)a=i+n,(u=i+r)in c?c[a]=c[u]:delete c[a];for(i=l;i>l-r+n;i--)delete c[i-1];}else if(n>r)for(i=l-r;i>f;i--)a=i+n-1,(u=i+r-1)in c?c[a]=c[u]:delete c[a];for(i=0;i<n;i++)c[i+f]=arguments[i+2];return c.length=l-r+n,o}});var ye={};ye[ne("toStringTag")]="z";var me="[object z]"===String(ye),Se=ne("toStringTag"),xe="Arguments"==s(function(){return arguments}()),be=me?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Se))?n:xe?s(e):"Object"==(r=s(e))&&"function"==typeof e.callee?"Arguments":r},Ee=me?{}.toString:function(){return "[object "+be(this)+"]"};me||Z(Object.prototype,"toString",Ee,{unsafe:!0});var we=function(){var t=A(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Oe(t,e){return RegExp(t,e)}var Te,Ae,ke={UNSUPPORTED_Y:o((function(){var t=Oe("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:o((function(){var t=Oe("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Re=RegExp.prototype.exec,Ie=String.prototype.replace,je=Re,Ce=(Te=/a/,Ae=/b*/g,Re.call(Te,"a"),Re.call(Ae,"a"),0!==Te.lastIndex||0!==Ae.lastIndex),Le=ke.UNSUPPORTED_Y||ke.BROKEN_CARET,Pe=void 0!==/()??/.exec("")[1];(Ce||Pe||Le)&&(je=function(t){var e,n,r,o,i=this,u=Le&&i.sticky,a=we.call(i),c=i.source,l=0,f=t;return u&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(c="(?: "+c+")",f=" "+f,l++),n=new RegExp("^(?:"+c+")",a)),Pe&&(n=new RegExp("^"+c+"$(?!\\s)",a)),Ce&&(e=i.lastIndex),r=Re.call(u?n:i,f),u?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:Ce&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),Pe&&r&&r.length>1&&Ie.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0);})),r});var Me=je;It({target:"RegExp",proto:!0,forced:/./.exec!==Me},{exec:Me});var _e=RegExp.prototype,De=_e.toString,Ue=o((function(){return "/a/b"!=De.call({source:"a",flags:"b"})})),Ne="toString"!=De.name;(Ue||Ne)&&Z(RegExp.prototype,"toString",(function(){var t=A(this),e=String(t.source),n=t.flags;return "/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in _e)?we.call(t):n)}),{unsafe:!0});var Fe=ne("species"),We=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),ze="$0"==="a".replace(/./,"$0"),$e=ne("replace"),Be=!!/./[$e]&&""===/./[$e]("a","$0"),Ye=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),Ge=function(t,e,n,r){var i=ne(t),u=!o((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),a=u&&!o((function(){var e=!1,n=/a/;return "split"===t&&((n={}).constructor={},n.constructor[Fe]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!u||!a||"replace"===t&&(!We||!ze||Be)||"split"===t&&!Ye){var c=/./[i],l=n(i,""[t],(function(t,e,n,r,o){return e.exec===Me?u&&!o?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:ze,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Be}),f=l[0],s=l[1];Z(String.prototype,t,f),Z(RegExp.prototype,i,2==e?function(t,e){return s.call(t,this,e)}:function(t){return s.call(t,this)});}r&&I(RegExp.prototype[i],"sham",!0);},He=ne("match"),Xe=function(t){var e;return h(t)&&(void 0!==(e=t[He])?!!e:"RegExp"==s(t))},Ve=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Ke=ne("species"),qe=function(t){return function(e,n){var r,o,i=String(p(e)),u=it(n),a=i.length;return u<0||u>=a?t?"":void 0:(r=i.charCodeAt(u))<55296||r>56319||u+1===a||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):r:t?i.slice(u,u+2):o-56320+(r-55296<<10)+65536}},Qe={codeAt:qe(!1),charAt:qe(!0)},Je=Qe.charAt,Ze=function(t,e,n){return e+(n?Je(t,e).length:1)},tn=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return Me.call(t,e)},en=[].push,nn=Math.min,rn=!o((function(){return !RegExp(4294967295,"y")}));Ge("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(p(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return [];if(void 0===t)return [r];if(!Xe(t))return e.call(r,t,o);for(var i,u,a,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,l+"g");(i=Me.call(s,r))&&!((u=s.lastIndex)>f&&(c.push(r.slice(f,i.index)),i.length>1&&i.index<r.length&&en.apply(c,i.slice(1)),a=i[0].length,f=u,c.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return f===r.length?!a&&s.test("")||c.push(""):c.push(r.slice(f)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=p(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var u=A(t),a=String(this),c=function(t,e){var n,r=A(t).constructor;return void 0===r||null==(n=A(r)[Ke])?e:Ve(n)}(u,RegExp),l=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(rn?"y":"g"),s=new c(rn?u:"^(?:"+u.source+")",f),d=void 0===o?4294967295:o>>>0;if(0===d)return [];if(0===a.length)return null===tn(s,a)?[a]:[];for(var v=0,p=0,g=[];p<a.length;){s.lastIndex=rn?p:0;var h,y=tn(s,rn?a:a.slice(p));if(null===y||(h=nn(at(s.lastIndex+(rn?0:p)),a.length))===v)p=Ze(a,p,l);else {if(g.push(a.slice(v,p)),g.length===d)return g;for(var m=1;m<=y.length-1;m++)if(g.push(y[m]),g.length===d)return g;p=v=h;}}return g.push(a.slice(v)),g}]}),!rn);var on="\t\n\v\f\r                　\u2028\u2029\ufeff",un="["+on+"]",an=RegExp("^"+un+un+"*"),cn=RegExp(un+un+"*$"),ln=function(t){return function(e){var n=String(p(e));return 1&t&&(n=n.replace(an,"")),2&t&&(n=n.replace(cn,"")),n}},fn={start:ln(1),end:ln(2),trim:ln(3)},sn=fn.trim;It({target:"String",proto:!0,forced:function(t){return o((function(){return !!on[t]()||"​᠎"!="​᠎"[t]()||on[t].name!==t}))}("trim")},{trim:function(){return sn(this)}});var dn=de("slice"),vn=Mt("slice",{ACCESSORS:!0,0:0,1:2}),pn=ne("species"),gn=[].slice,hn=Math.max;It({target:"Array",proto:!0,forced:!dn||!vn},{slice:function(t,e){var n,r,o,i=g(this),u=at(i.length),a=ft(t,u),c=ft(void 0===e?u:e,u);if(qt(i)&&("function"!=typeof(n=i.constructor)||n!==Array&&!qt(n.prototype)?h(n)&&null===(n=n[pn])&&(n=void 0):n=void 0,n===Array||void 0===n))return gn.call(i,a,c);for(r=new(void 0===n?Array:n)(hn(c-a,0)),o=0;a<c;a++,o++)a in i&&ie(r,o,i[a]);return r.length=o,r}});var yn=Object.keys||function(t){return pt(t,gt)},mn=o((function(){yn(1);}));It({target:"Object",stat:!0,forced:mn},{keys:function(t){return yn(Kt(t))}});var Sn,xn=function(t){if(Xe(t))throw TypeError("The method doesn't accept regular expressions");return t},bn=ne("match"),En=T.f,wn="".startsWith,On=Math.min,Tn=function(t){var e=/./;try{"/./"[t](e);}catch(n){try{return e[bn]=!1,"/./"[t](e)}catch(t){}}return !1}("startsWith"),An=!(Tn||(Sn=En(String.prototype,"startsWith"),!Sn||Sn.writable));function kn(t){return (kn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}It({target:"String",proto:!0,forced:!An&&!Tn},{startsWith:function(t){var e=String(p(this));xn(t);var n=at(On(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return wn?wn.call(e,r,n):e.slice(n,n+r.length)===r}});var jn=function(t){return "string"==typeof t},Mn=function(t){return null!==t&&"object"===kn(t)},Vn=function(){function t(){Wt(this,t);}return $t(t,null,[{key:"isWindow",value:function(t){return t===window}},{key:"addEventListener",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t&&e&&n&&t.addEventListener(e,n,r);}},{key:"removeEventListener",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t&&e&&n&&t.removeEventListener(e,n,r);}},{key:"triggerDragEvent",value:function(e,n){var r=!1,o=function(t){var e;null===(e=n.drag)||void 0===e||e.call(n,t);},i=function e(i){var u;t.removeEventListener(document,"mousemove",o),t.removeEventListener(document,"mouseup",e),document.onselectstart=null,document.ondragstart=null,r=!1,null===(u=n.end)||void 0===u||u.call(n,i);};t.addEventListener(e,"mousedown",(function(e){var u;r||(document.onselectstart=function(){return !1},document.ondragstart=function(){return !1},t.addEventListener(document,"mousemove",o),t.addEventListener(document,"mouseup",i),r=!0,null===(u=n.start)||void 0===u||u.call(n,e));}));}},{key:"getBoundingClientRect",value:function(t){return t&&Mn(t)&&1===t.nodeType?t.getBoundingClientRect():null}},{key:"hasClass",value:function(t,e){return !!(t&&Mn(t)&&jn(e)&&1===t.nodeType)&&t.classList.contains(e.trim())}},{key:"addClass",value:function(e,n){if(e&&Mn(e)&&jn(n)&&1===e.nodeType&&(n=n.trim(),!t.hasClass(e,n))){var r=e.className;e.className=r?r+" "+n:n;}}},{key:"removeClass",value:function(t,e){if(t&&Mn(t)&&jn(e)&&1===t.nodeType&&"string"==typeof t.className){e=e.trim();for(var n=t.className.trim().split(" "),r=n.length-1;r>=0;r--)n[r]=n[r].trim(),n[r]&&n[r]!==e||n.splice(r,1);t.className=n.join(" ");}}},{key:"toggleClass",value:function(t,e,n){t&&Mn(t)&&jn(e)&&1===t.nodeType&&t.classList.toggle(e,n);}},{key:"replaceClass",value:function(e,n,r){e&&Mn(e)&&jn(n)&&jn(r)&&1===e.nodeType&&(n=n.trim(),r=r.trim(),t.removeClass(e,n),t.addClass(e,r));}},{key:"getScrollTop",value:function(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}},{key:"setScrollTop",value:function(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e);}},{key:"getRootScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},{key:"setRootScrollTop",value:function(e){t.setScrollTop(window,e),t.setScrollTop(document.body,e);}},{key:"getElementTop",value:function(e,n){if(t.isWindow(e))return 0;var r=n?t.getScrollTop(n):t.getRootScrollTop();return e.getBoundingClientRect().top+r}},{key:"getVisibleHeight",value:function(e){return t.isWindow(e)?e.innerHeight:e.getBoundingClientRect().height}},{key:"isHidden",value:function(t){if(!t)return !1;var e=window.getComputedStyle(t),n="none"===e.display,r=null===t.offsetParent&&"fixed"!==e.position;return n||r}},{key:"triggerEvent",value:function(t,e){if("createEvent"in document){var n=document.createEvent("HTMLEvents");n.initEvent(e,!1,!0),t.dispatchEvent(n);}}},{key:"calcAngle",value:function(t,e){var n=t.getBoundingClientRect(),r=n.left+n.width/2,o=n.top+n.height/2,i=Math.abs(r-e.clientX),u=Math.abs(o-e.clientY),a=u/Math.sqrt(Math.pow(i,2)+Math.pow(u,2)),c=Math.acos(a),l=Math.floor(180/(Math.PI/c));return e.clientX>r&&e.clientY>o&&(l=180-l),e.clientX==r&&e.clientY>o&&(l=180),e.clientX>r&&e.clientY==o&&(l=90),e.clientX<r&&e.clientY>o&&(l=180+l),e.clientX<r&&e.clientY==o&&(l=270),e.clientX<r&&e.clientY<o&&(l=360-l),l}},{key:"querySelector",value:function(t,e){return e?e.querySelector(t):document.querySelector(t)}},{key:"createElement",value:function(t){for(var e=document.createElement(t),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0;i<r.length;i++)r[i]&&e.classList.add(r[i]);return e}},{key:"appendChild",value:function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++)t.appendChild(e+1<1||arguments.length<=e+1?void 0:arguments[e+1]);}},{key:"getWindow",value:function(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}},{key:"isElement",value:function(t){return t instanceof this.getWindow(t).Element||t instanceof Element}},{key:"isHTMLElement",value:function(t){return t instanceof this.getWindow(t).HTMLElement||t instanceof HTMLElement}},{key:"isShadowRoot",value:function(t){return "undefined"!=typeof ShadowRoot&&(t instanceof this.getWindow(t).ShadowRoot||t instanceof ShadowRoot)}},{key:"getWindowScroll",value:function(t){var e=this.getWindow(t);return {scrollLeft:e.pageXOffset||0,scrollTop:e.pageYOffset||0}}}]),t}(),Kn=Math.floor,qn="".replace,Qn=/\$([$&'`]|\d\d?|<[^>]*>)/g,Jn=/\$([$&'`]|\d\d?)/g,Zn=function(t,e,n,r,o,i){var u=n+t.length,a=r.length,c=Jn;return void 0!==o&&(o=Kt(o),c=Qn),qn.call(i,c,(function(i,c){var l;switch(c.charAt(0)){case"$":return "$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(u);case"<":l=o[c.slice(1,-1)];break;default:var f=+c;if(0===f)return i;if(f>a){var s=Kn(f/10);return 0===s?i:s<=a?void 0===r[s-1]?c.charAt(1):r[s-1]+c.charAt(1):i}l=r[f-1];}return void 0===l?"":l}))},tr=Math.max,er=Math.min;Ge("replace",2,(function(t,e,n,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,u=o?"$":"$0";return [function(n,r){var o=p(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!o&&i||"string"==typeof r&&-1===r.indexOf(u)){var a=n(e,t,this,r);if(a.done)return a.value}var c=A(t),l=String(this),f="function"==typeof r;f||(r=String(r));var s=c.global;if(s){var d=c.unicode;c.lastIndex=0;}for(var v=[];;){var p=tn(c,l);if(null===p)break;if(v.push(p),!s)break;""===String(p[0])&&(c.lastIndex=Ze(l,at(c.lastIndex),d));}for(var g,h="",y=0,m=0;m<v.length;m++){p=v[m];for(var S=String(p[0]),x=tr(er(it(p.index),l.length),0),b=[],E=1;E<p.length;E++)b.push(void 0===(g=p[E])?g:String(g));var w=p.groups;if(f){var O=[S].concat(b,x,l);void 0!==w&&O.push(w);var T=String(r.apply(void 0,O));}else T=Zn(S,l,x,b,w,r);x>=y&&(h+=l.slice(y,x)+T,y=x+S.length);}return h+l.slice(y)}]}));(function(){function t(){Wt(this,t);}return $t(t,null,[{key:"camelize",value:function(t){return t.replace(/-(\w)/g,(function(t,e){return e?e.toUpperCase():""}))}},{key:"capitalize",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}]),t})();(function(){function t(){Wt(this,t);}return $t(t,null,[{key:"_clone",value:function(){}}]),t})();var or=ne("isConcatSpreadable"),ir=fe>=51||!o((function(){var t=[];return t[or]=!1,t.concat()[0]!==t})),ur=de("concat"),ar=function(t){if(!h(t))return !1;var e=t[or];return void 0!==e?!!e:qt(t)};It({target:"Array",proto:!0,forced:!ir||!ur},{concat:function(t){var e,n,r,o,i,u=Kt(this),a=oe(u,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(ar(i=-1===e?u:arguments[e])){if(c+(o=at(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&ie(a,c,i[n]);}else {if(c>=9007199254740991)throw TypeError("Maximum allowed index exceeded");ie(a,c++,i);}return a.length=c,a}});var cr,lr=function(t,e,n){if(Ve(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},fr=[].push,sr=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=7==t,a=5==t||i;return function(c,l,f,s){for(var d,p,g=Kt(c),h=v(g),y=lr(l,f,3),m=at(h.length),S=0,x=s||oe,b=e?x(c,m):n||u?x(c,0):void 0;m>S;S++)if((a||S in h)&&(p=y(d=h[S],S,g),t))if(e)b[S]=p;else if(p)switch(t){case 3:return !0;case 5:return d;case 6:return S;case 2:fr.call(b,d);}else switch(t){case 4:return !1;case 7:fr.call(b,d);}return i?-1:r||o?o:b}},dr={forEach:sr(0),map:sr(1),filter:sr(2),some:sr(3),every:sr(4),find:sr(5),findIndex:sr(6),filterOut:sr(7)},vr=i?Object.defineProperties:function(t,e){A(t);for(var n,r=yn(e),o=r.length,i=0;o>i;)R.f(t,n=r[i++],e[n]);return t},pr=nt("document","documentElement"),gr=Y("IE_PROTO"),hr=function(){},yr=function(t){return "<script>"+t+"<\/script>"},mr=function(){try{cr=document.domain&&new ActiveXObject("htmlfile");}catch(t){}var t,e;mr=cr?function(t){t.write(yr("")),t.close();var e=t.parentWindow.Object;return t=null,e}(cr):((e=E("iframe")).style.display="none",pr.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(yr("document.F=Object")),t.close(),t.F);for(var n=gt.length;n--;)delete mr.prototype[gt[n]];return mr()};G[gr]=!0;var Sr=Object.create||function(t,e){var n;return null!==t?(hr.prototype=A(t),n=new hr,hr.prototype=null,n[gr]=t):n=mr(),void 0===e?n:vr(n,e)},xr=ne("unscopables"),br=Array.prototype;null==br[xr]&&R.f(br,xr,{configurable:!0,value:Sr(null)});var Er=function(t){br[xr][t]=!0;},wr=dr.find,Or=!0,Tr=Mt("find");"find"in[]&&Array(1).find((function(){Or=!1;})),It({target:"Array",proto:!0,forced:Or||!Tr},{find:function(t){return wr(this,t,arguments.length>1?arguments[1]:void 0)}}),Er("find");var Ar=dr.findIndex,kr=!0,Rr=Mt("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){kr=!1;})),It({target:"Array",proto:!0,forced:kr||!Rr},{findIndex:function(t){return Ar(this,t,arguments.length>1?arguments[1]:void 0)}}),Er("findIndex");var Ir=function(t,e,n,r,o,i,u,a){for(var c,l=o,f=0,s=!!u&&lr(u,a,3);f<r;){if(f in n){if(c=s?s(n[f],f,e):n[f],i>0&&qt(c))l=Ir(t,e,c,at(c.length),l,i-1)-1;else {if(l>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[l]=c;}l++;}f++;}return l},jr=Ir;It({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=Kt(this),n=at(e.length),r=oe(e,0);return r.length=jr(r,e,e,n,0,void 0===t?1:it(t)),r}});var Cr=function(t){var e=t.return;if(void 0!==e)return A(e.call(t)).value},Lr=function(t,e,n,r){try{return r?e(A(n)[0],n[1]):e(n)}catch(e){throw Cr(t),e}},Pr={},Mr=ne("iterator"),_r=Array.prototype,Dr=function(t){return void 0!==t&&(Pr.Array===t||_r[Mr]===t)},Ur=ne("iterator"),Nr=function(t){if(null!=t)return t[Ur]||t["@@iterator"]||Pr[be(t)]},Fr=ne("iterator"),Wr=!1;try{var zr=0,$r={next:function(){return {done:!!zr++}},return:function(){Wr=!0;}};$r[Fr]=function(){return this},Array.from($r,(function(){throw 2}));}catch(t){}var Br=function(t,e){if(!e&&!Wr)return !1;var n=!1;try{var r={};r[Fr]=function(){return {next:function(){return {done:n=!0}}}},t(r);}catch(t){}return n},Yr=!Br((function(t){Array.from(t);}));It({target:"Array",stat:!0,forced:Yr},{from:function(t){var e,n,r,o,i,u,a=Kt(t),c="function"==typeof this?this:Array,l=arguments.length,f=l>1?arguments[1]:void 0,s=void 0!==f,d=Nr(a),v=0;if(s&&(f=lr(f,l>2?arguments[2]:void 0,2)),null==d||c==Array&&Dr(d))for(n=new c(e=at(a.length));e>v;v++)u=s?f(a[v],v):a[v],ie(n,v,u);else for(i=(o=d.call(a)).next,n=new c;!(r=i.call(o)).done;v++)u=s?Lr(o,f,[r.value,v],!0):r.value,ie(n,v,u);return n.length=v,n}});var Gr=function(t){return function(e,n,r,o){Ve(n);var i=Kt(e),u=v(i),a=at(i.length),c=t?a-1:0,l=t?-1:1;if(r<2)for(;;){if(c in u){o=u[c],c+=l;break}if(c+=l,t?c<0:a<=c)throw TypeError("Reduce of empty array with no initial value")}for(;t?c>=0:a>c;c+=l)c in u&&(o=n(o,u[c],c,i));return o}},Hr={left:Gr(!1),right:Gr(!0)},Xr="process"==s(r.process),Vr=Hr.left,Kr=jt("reduce"),qr=Mt("reduce",{1:0});It({target:"Array",proto:!0,forced:!Kr||!qr||!Xr&&fe>79&&fe<83},{reduce:function(t){return Vr(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}}),Er("flat");var Qr,Jr,Zr,to=!o((function(){return Object.isExtensible(Object.preventExtensions({}))})),eo=e((function(t){var e=R.f,n=$("meta"),r=0,o=Object.isExtensible||function(){return !0},i=function(t){e(t,n,{value:{objectID:"O"+ ++r,weakData:{}}});},u=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!h(t))return "symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!S(t,n)){if(!o(t))return "F";if(!e)return "E";i(t);}return t[n].objectID},getWeakData:function(t,e){if(!S(t,n)){if(!o(t))return !0;if(!e)return !1;i(t);}return t[n].weakData},onFreeze:function(t){return to&&u.REQUIRED&&o(t)&&!S(t,n)&&i(t),t}};G[n]=!0;})),no=function(t,e){this.stopped=t,this.result=e;},ro=function(t,e,n){var r,o,i,u,a,c,l,f=n&&n.that,s=!(!n||!n.AS_ENTRIES),d=!(!n||!n.IS_ITERATOR),v=!(!n||!n.INTERRUPTED),p=lr(e,f,1+s+v),g=function(t){return r&&Cr(r),new no(!0,t)},h=function(t){return s?(A(t),v?p(t[0],t[1],g):p(t[0],t[1])):v?p(t,g):p(t)};if(d)r=t;else {if("function"!=typeof(o=Nr(t)))throw TypeError("Target is not iterable");if(Dr(o)){for(i=0,u=at(t.length);u>i;i++)if((a=h(t[i]))&&a instanceof no)return a;return new no(!1)}r=o.call(t);}for(c=r.next;!(l=c.call(r)).done;){try{a=h(l.value);}catch(t){throw Cr(r),t}if("object"==typeof a&&a&&a instanceof no)return a}return new no(!1)},oo=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t},io=R.f,uo=ne("toStringTag"),ao=function(t,e,n){t&&!S(t=n?t:t.prototype,uo)&&io(t,uo,{configurable:!0,value:e});},co=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array;}catch(t){}return function(n,r){return A(n),function(t){if(!h(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),lo=function(t,e,n){for(var r in e)Z(t,r,e[r],n);return t},fo=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),so=Y("IE_PROTO"),vo=Object.prototype,po=fo?Object.getPrototypeOf:function(t){return t=Kt(t),S(t,so)?t[so]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?vo:null},go=ne("iterator"),ho=!1;[].keys&&("next"in(Zr=[].keys())?(Jr=po(po(Zr)))!==Object.prototype&&(Qr=Jr):ho=!0),(null==Qr||o((function(){var t={};return Qr[go].call(t)!==t})))&&(Qr={}),S(Qr,go)||I(Qr,go,(function(){return this}));var yo={IteratorPrototype:Qr,BUGGY_SAFARI_ITERATORS:ho},mo=yo.IteratorPrototype,So=function(){return this},xo=yo.IteratorPrototype,bo=yo.BUGGY_SAFARI_ITERATORS,Eo=ne("iterator"),wo=function(){return this},Oo=function(t,e,n,r,o,i,u){!function(t,e,n){var r=e+" Iterator";t.prototype=Sr(mo,{next:l(1,n)}),ao(t,r,!1),Pr[r]=So;}(n,e,r);var a,c,f,s=function(t){if(t===o&&h)return h;if(!bo&&t in p)return p[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},d=e+" Iterator",v=!1,p=t.prototype,g=p[Eo]||p["@@iterator"]||o&&p[o],h=!bo&&g||s(o),y="Array"==e&&p.entries||g;if(y&&(a=po(y.call(new t)),xo!==Object.prototype&&a.next&&(po(a)!==xo&&(co?co(a,xo):"function"!=typeof a[Eo]&&I(a,Eo,wo)),ao(a,d,!0))),"values"==o&&g&&"values"!==g.name&&(v=!0,h=function(){return g.call(this)}),p[Eo]!==h&&I(p,Eo,h),Pr[e]=h,o)if(c={values:s("values"),keys:i?h:s("keys"),entries:s("entries")},u)for(f in c)(bo||v||!(f in p))&&Z(p,f,c[f]);else It({target:e,proto:!0,forced:bo||v},c);return c},To=ne("species"),Ao=R.f,ko=eo.fastKey,Ro=J.set,Io=J.getterFor;!function(t,e,n){var i=-1!==t.indexOf("Map"),u=-1!==t.indexOf("Weak"),a=i?"set":"add",c=r[t],l=c&&c.prototype,f=c,s={},d=function(t){var e=l[t];Z(l,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return !(u&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return u&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return !(u&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this});};if(kt(t,"function"!=typeof c||!(u||l.forEach&&!o((function(){(new c).entries().next();})))))f=n.getConstructor(e,t,i,a),eo.REQUIRED=!0;else if(kt(t,!0)){var v=new f,p=v[a](u?{}:-0,1)!=v,g=o((function(){v.has(1);})),y=Br((function(t){new c(t);})),m=!u&&o((function(){for(var t=new c,e=5;e--;)t[a](e,e);return !t.has(-0)}));y||((f=e((function(e,n){oo(e,f,t);var r=function(t,e,n){var r,o;return co&&"function"==typeof(r=e.constructor)&&r!==n&&h(o=r.prototype)&&o!==n.prototype&&co(t,o),t}(new c,e,f);return null!=n&&ro(n,r[a],{that:r,AS_ENTRIES:i}),r}))).prototype=l,l.constructor=f),(g||m)&&(d("delete"),d("has"),i&&d("get")),(m||p)&&d(a),u&&l.clear&&delete l.clear;}s[t]=f,It({global:!0,forced:f!=c},s),ao(f,t),u||n.setStrong(f,t,i);}("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),{getConstructor:function(t,e,n,r){var o=t((function(t,u){oo(t,o,e),Ro(t,{type:e,index:Sr(null),first:void 0,last:void 0,size:0}),i||(t.size=0),null!=u&&ro(u,t[r],{that:t,AS_ENTRIES:n});})),u=Io(e),a=function(t,e,n){var r,o,a=u(t),l=c(t,e);return l?l.value=n:(a.last=l={index:o=ko(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=l),r&&(r.next=l),i?a.size++:t.size++,"F"!==o&&(a.index[o]=l)),t},c=function(t,e){var n,r=u(t),o=ko(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return lo(o.prototype,{clear:function(){for(var t=u(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,i?t.size=0:this.size=0;},delete:function(t){var e=this,n=u(e),r=c(e,t);if(r){var o=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=o),o&&(o.previous=a),n.first==r&&(n.first=o),n.last==r&&(n.last=a),i?n.size--:e.size--;}return !!r},forEach:function(t){for(var e,n=u(this),r=lr(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous;},has:function(t){return !!c(this,t)}}),lo(o.prototype,n?{get:function(t){var e=c(this,t);return e&&e.value},set:function(t,e){return a(this,0===t?0:t,e)}}:{add:function(t){return a(this,t=0===t?0:t,t)}}),i&&Ao(o.prototype,"size",{get:function(){return u(this).size}}),o},setStrong:function(t,e,n){var r=e+" Iterator",o=Io(e),u=Io(r);Oo(t,e,(function(t,e){Ro(this,{type:r,target:t,state:o(t),kind:e,last:void 0});}),(function(){for(var t=u(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),function(t){var e=nt(t),n=R.f;i&&e&&!e[To]&&n(e,To,{configurable:!0,get:function(){return this}});}(e);}});var jo=Qe.charAt,Co=J.set,Lo=J.getterFor("String Iterator");Oo(String,"String",(function(t){Co(this,{type:"String Iterator",string:String(t),index:0});}),(function(){var t,e=Lo(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=jo(n,r),e.index+=t.length,{value:t,done:!1})}));var Po={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Mo=J.set,_o=J.getterFor("Array Iterator"),Do=Oo(Array,"Array",(function(t,e){Mo(this,{type:"Array Iterator",target:g(t),index:0,kind:e});}),(function(){var t=_o(this),e=t.target,n=t.kind,r=t.index++;return !e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");Pr.Arguments=Pr.Array,Er("keys"),Er("values"),Er("entries");var Uo=ne("iterator"),No=ne("toStringTag"),Fo=Do.values;for(var Wo in Po){var zo=r[Wo],$o=zo&&zo.prototype;if($o){if($o[Uo]!==Fo)try{I($o,Uo,Fo);}catch(t){$o[Uo]=Fo;}if($o[No]||I($o,No,Wo),Po[Wo])for(var Bo in Do)if($o[Bo]!==Do[Bo])try{I($o,Bo,Do[Bo]);}catch(t){$o[Bo]=Do[Bo];}}}(function(){function t(){Wt(this,t);}return $t(t,null,[{key:"deduplicate",value:function(t){return Array.from(new Set(t))}},{key:"flat",value:function(e){return e.reduce((function(e,n){var r=Array.isArray(n)?t.flat(n):n;return e.concat(r)}),[])}},{key:"find",value:function(t,e){return t.find(e)}},{key:"findIndex",value:function(t,e){return t.findIndex(e)}}]),t})();(function(){function t(){Wt(this,t);}return $t(t,null,[{key:"today",value:function(){return new Date}}]),t})();(function(){function t(){Wt(this,t);}return $t(t,null,[{key:"range",value:function(t,e,n){return Math.min(Math.max(t,e),n)}},{key:"clamp",value:function(t,e,n){return e<n?t<e?e:t>n?n:t:t<n?n:t>e?e:t}}]),t})();

const calcAngle = (element, event) => {
  const rect = element.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const x = Math.abs(originX - event.clientX);
  const y = Math.abs(originY - event.clientY);
  const z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  const cos = y / z;
  const rad = Math.acos(cos);
  let angle = Math.floor(180 / (Math.PI / rad));
  if (event.clientX > originX && event.clientY > originY) {
    angle = 180 - angle;
  }
  if (event.clientX == originX && event.clientY > originY) {
    angle = 180;
  }
  if (event.clientX > originX && event.clientY == originY) {
    angle = 90;
  }
  if (event.clientX < originX && event.clientY > originY) {
    angle = 180 + angle;
  }
  if (event.clientX < originX && event.clientY == originY) {
    angle = 270;
  }
  if (event.clientX < originX && event.clientY < originY) {
    angle = 360 - angle;
  }
  return angle;
};
let isDragging = false;
const triggerDragEvent = (element, options) => {
  const moveFn = function(event) {
    var _a;
    (_a = options.drag) == null ? void 0 : _a.call(options, event);
  };
  const upFn = function(event) {
    var _a;
    document.removeEventListener("mousemove", moveFn, false);
    document.removeEventListener("mouseup", upFn, false);
    document.onselectstart = null;
    document.ondragstart = null;
    isDragging = false;
    (_a = options.end) == null ? void 0 : _a.call(options, event);
  };
  if (element) {
    element.addEventListener("mousedown", (event) => {
      var _a;
      if (isDragging)
        return;
      document.onselectstart = () => false;
      document.ondragstart = () => false;
      document.addEventListener("mousemove", moveFn, false);
      document.addEventListener("mouseup", upFn, false);
      isDragging = true;
      (_a = options.start) == null ? void 0 : _a.call(options, event);
    });
  }
  return;
};
const angleProps = {
  angle: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 16,
    validator: (value) => {
      return value >= 16;
    }
  },
  borderWidth: {
    type: Number,
    default: 1,
    validator: (value) => {
      return value >= 1;
    }
  },
  borderColor: {
    type: String,
    default: "#666"
  }
};
var Angle = defineComponent({
  name: "Angle",
  props: angleProps,
  emits: ["update:angle", "change"],
  setup(props, {
    emit
  }) {
    const angleRef = ref(null);
    const rotate = ref(props.angle);
    watch(() => props.angle, (angle) => {
      rotate.value = angle;
    });
    const updateAngle = () => {
      let value = Number(rotate.value);
      if (!isNaN(value)) {
        value = value > 360 || value < 0 ? props.angle : value;
        rotate.value = value === 360 ? 0 : value;
        emit("update:angle", rotate.value);
        emit("change", rotate.value);
      }
    };
    const getStyle = computed(() => {
      return {
        width: props.size + "px",
        height: props.size + "px",
        borderWidth: props.borderWidth + "px",
        borderColor: props.borderColor,
        transform: `rotate(${rotate.value}deg)`
      };
    });
    const handleDrag = (event) => {
      if (angleRef.value) {
        rotate.value = calcAngle(angleRef.value, event) % 360;
        updateAngle();
      }
    };
    onMounted(() => {
      const dragConfig = {
        drag: (event) => {
          handleDrag(event);
        },
        end: (event) => {
          handleDrag(event);
        }
      };
      if (angleRef.value) {
        triggerDragEvent(angleRef.value, dragConfig);
      }
    });
    return () => {
      return createVNode("div", {
        "class": "bee-angle"
      }, [createVNode("div", {
        "class": "bee-angle__round",
        "ref": angleRef,
        "style": getStyle.value
      }, null)]);
    };
  }
});

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const double = (num) => {
  return Math.round(num * 100) / 100;
};
class Color {
  constructor(input) {
    __publicField(this, "instance");
    __publicField(this, "alphaValue", 0);
    __publicField(this, "redValue", 0);
    __publicField(this, "greenValue", 0);
    __publicField(this, "blueValue", 0);
    __publicField(this, "hueValue", 0);
    __publicField(this, "saturationValue", 0);
    __publicField(this, "brightnessValue", 0);
    __publicField(this, "hslSaturationValue", 0);
    __publicField(this, "lightnessValue", 0);
    __publicField(this, "initAlpha", () => {
      const initAlpha = this.instance.getAlpha();
      this.alphaValue = Math.min(1, initAlpha) * 100;
    });
    __publicField(this, "initLightness", () => {
      const { s, l } = this.instance.toHsl();
      this.hslSaturationValue = double(s);
      this.lightnessValue = double(l);
    });
    __publicField(this, "initRgb", () => {
      const { r, g, b } = this.instance.toRgb();
      this.redValue = double(r);
      this.greenValue = double(g);
      this.blueValue = double(b);
    });
    __publicField(this, "initHsb", () => {
      const { h, s, v } = this.instance.toHsv();
      this.hueValue = Math.min(360, Math.ceil(h));
      this.saturationValue = double(s);
      this.brightnessValue = double(v);
    });
    __publicField(this, "toHexString", () => {
      return this.instance.toHexString();
    });
    __publicField(this, "toRgbString", () => {
      return this.instance.toRgbString();
    });
    this.instance = tinycolor(input);
    this.initRgb();
    this.initHsb();
    this.initLightness();
    this.initAlpha();
  }
  toString(format) {
    return this.instance.toString(format);
  }
  get hex() {
    return this.instance.toHex();
  }
  set hex(hexString) {
    this.instance = tinycolor(hexString);
    this.initHsb();
    this.initRgb();
    this.initAlpha();
    this.initLightness();
  }
  set hue(value) {
    if (this.saturation === 0 && this.brightness === 0) {
      this.saturationValue = 1;
      this.brightnessValue = 1;
    }
    this.instance = tinycolor({
      h: double(value),
      s: this.saturation,
      v: this.brightness,
      a: this.alphaValue / 100
    });
    this.initRgb();
    this.initLightness();
    this.hueValue = double(value);
  }
  get hue() {
    return this.hueValue;
  }
  set saturation(value) {
    this.instance = tinycolor({
      h: this.hue,
      s: double(value),
      v: this.brightness,
      a: this.alphaValue / 100
    });
    this.initRgb();
    this.initLightness();
    this.saturationValue = double(value);
  }
  get saturation() {
    return this.saturationValue;
  }
  set brightness(value) {
    this.instance = tinycolor({
      h: this.hue,
      s: this.saturation,
      v: double(value),
      a: this.alphaValue / 100
    });
    this.initRgb();
    this.initLightness();
    this.brightnessValue = double(value);
  }
  get brightness() {
    return this.brightnessValue;
  }
  set lightness(value) {
    this.instance = tinycolor({
      h: this.hue,
      s: this.hslSaturationValue,
      l: double(value),
      a: this.alphaValue / 100
    });
    this.initRgb();
    this.initHsb();
    this.lightnessValue = double(value);
  }
  get lightness() {
    return this.lightnessValue;
  }
  set red(value) {
    const rgb = this.instance.toRgb();
    this.instance = tinycolor(__spreadProps(__spreadValues({}, rgb), {
      r: double(value),
      a: this.alphaValue / 100
    }));
    this.initHsb();
    this.initLightness();
    this.redValue = double(value);
  }
  get red() {
    return this.redValue;
  }
  set green(value) {
    const rgb = this.instance.toRgb();
    this.instance = tinycolor(__spreadProps(__spreadValues({}, rgb), {
      g: double(value),
      a: this.alphaValue / 100
    }));
    this.initHsb();
    this.initLightness();
    this.greenValue = double(value);
  }
  get green() {
    return this.greenValue;
  }
  set blue(value) {
    const rgb = this.instance.toRgb();
    this.instance = tinycolor(__spreadProps(__spreadValues({}, rgb), {
      b: double(value),
      a: this.alphaValue / 100
    }));
    this.initHsb();
    this.initLightness();
    this.blueValue = double(value);
  }
  get blue() {
    return this.blueValue;
  }
  set alpha(value) {
    this.instance.setAlpha(value / 100);
    this.alphaValue = value;
  }
  get alpha() {
    return this.alphaValue;
  }
  get RGB() {
    return [this.red, this.green, this.blue, this.alpha / 100];
  }
  get HSB() {
    return [this.hue, this.saturation, this.brightness, this.alpha / 100];
  }
  get HSL() {
    return [this.hue, this.hslSaturationValue, this.lightness, this.alpha / 100];
  }
}
function rgbaColor(r, g, b, a) {
  return `rgba(${[r, g, b, a / 100].join(",")})`;
}
const clamp = (value, min, max) => {
  return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
};
const HistoryColorKey = "color-history";
const MAX_STORAGE_LENGTH = 8;
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$b = defineComponent({
  name: "Alpha",
  props: {
    color: propTypes.instanceOf(Color),
    size: propTypes.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(props, { emit }) {
    const barElement = ref(null);
    const cursorElement = ref(null);
    let color = props.color || new Color();
    const state = reactive({
      red: color.red,
      green: color.green,
      blue: color.blue,
      alpha: color.alpha
    });
    watch(() => props.color, (value) => {
      if (value) {
        color = value;
        merge(state, {
          red: value.red,
          green: value.green,
          blue: value.blue,
          alpha: value.alpha
        });
      }
    }, { deep: true });
    const getBackgroundStyle = computed(() => {
      const startColor = rgbaColor(state.red, state.green, state.blue, 0);
      const endColor = rgbaColor(state.red, state.green, state.blue, 100);
      return {
        background: `linear-gradient(to right, ${startColor} , ${endColor})`
      };
    });
    const getCursorLeft = () => {
      if (barElement.value && cursorElement.value) {
        const alpha = state.alpha / 100;
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        return Math.round(alpha * (rect.width - offsetWidth) + offsetWidth / 2);
      }
      return 0;
    };
    const getCursorStyle = computed(() => {
      const left = getCursorLeft();
      return {
        left: left + "px",
        top: 0
      };
    });
    const onClickSider = (event) => {
      const target = event.target;
      if (target !== barElement.value) {
        onMoveBar(event);
      }
    };
    const onMoveBar = (event) => {
      event.stopPropagation();
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        let left = event.clientX - rect.left;
        left = Math.max(offsetWidth / 2, left);
        left = Math.min(left, rect.width - offsetWidth / 2);
        const alpha = Math.round((left - offsetWidth / 2) / (rect.width - offsetWidth) * 100);
        color.alpha = alpha;
        state.alpha = alpha;
        emit("change", alpha);
      }
    };
    tryOnMounted(() => {
      const dragConfig = {
        drag: (event) => {
          onMoveBar(event);
        },
        end: (event) => {
          onMoveBar(event);
        }
      };
      if (barElement.value && cursorElement.value) {
        Vn.triggerDragEvent(barElement.value, dragConfig);
      }
    });
    return { barElement, cursorElement, getCursorStyle, getBackgroundStyle, onClickSider };
  }
});
const _withScopeId$5 = (n) => (pushScopeId("data-v-18925ba6"), n = n(), popScopeId(), n);
const _hoisted_1$a = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createElementVNode("div", { class: "vc-alpha-slider__bar-handle" }, null, -1));
const _hoisted_2$a = [
  _hoisted_1$a
];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-alpha-slider", "transparent", { "small-slider": _ctx.size === "small" }])
  }, [
    createElementVNode("div", {
      ref: "barElement",
      class: "vc-alpha-slider__bar",
      style: normalizeStyle(_ctx.getBackgroundStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickSider && _ctx.onClickSider(...args))
    }, [
      createElementVNode("div", {
        class: normalizeClass(["vc-alpha-slider__bar-pointer", { "small-bar": _ctx.size === "small" }]),
        ref: "cursorElement",
        style: normalizeStyle(_ctx.getCursorStyle)
      }, _hoisted_2$a, 6)
    ], 4)
  ], 2);
}
var Alpha = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-18925ba6"]]);
const defaultColors = [
  [
    "#fcc02e",
    "#f67c01",
    "#e64a19",
    "#d81b43",
    "#8e24aa",
    "#512da7",
    "#1f87e8",
    "#008781",
    "#05a045"
  ],
  [
    "#fed835",
    "#fb8c00",
    "#f5511e",
    "#eb1d4e",
    "#9c28b1",
    "#5d35b0",
    "#2097f3",
    "#029688",
    "#4cb050"
  ],
  [
    "#ffeb3c",
    "#ffa727",
    "#fe5722",
    "#eb4165",
    "#aa47bc",
    "#673bb7",
    "#42a5f6",
    "#26a59a",
    "#83c683"
  ],
  [
    "#fff176",
    "#ffb74e",
    "#ff8a66",
    "#f1627e",
    "#b968c7",
    "#7986cc",
    "#64b5f6",
    "#80cbc4",
    "#a5d6a7"
  ],
  [
    "#fff59c",
    "#ffcc80",
    "#ffab91",
    "#fb879e",
    "#cf93d9",
    "#9ea8db",
    "#90caf8",
    "#b2dfdc",
    "#c8e6ca"
  ],
  [
    "transparent",
    "#ffffff",
    "#dedede",
    "#a9a9a9",
    "#4b4b4b",
    "#353535",
    "#212121",
    "#000000",
    "advance"
  ]
];
const _sfc_main$a = defineComponent({
  name: "Palette",
  emits: ["change"],
  setup(_props, { emit }) {
    const computedBgStyle = (color) => {
      if (color === "transparent") {
        return color;
      }
      if (color === "advance") {
        return {};
      }
      return { background: tinycolor(color).toRgbString() };
    };
    const onColorChange = (color) => {
      emit("change", color);
    };
    return { palettes: defaultColors, computedBgStyle, onColorChange };
  }
});
const _hoisted_1$9 = { class: "vc-compact" };
const _hoisted_2$9 = ["onClick"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.palettes, (v, i) => {
      return openBlock(), createElementBlock("div", {
        key: i,
        class: "vc-compact__row"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(v, (v1, k) => {
          return openBlock(), createElementBlock("div", {
            key: k,
            class: "vc-compact__color-cube--wrap",
            onClick: ($event) => _ctx.onColorChange(v1)
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                "vc-compact__color_cube",
                {
                  advance: v1 === "advance",
                  transparent: v1 === "transparent"
                }
              ]),
              style: normalizeStyle(_ctx.computedBgStyle(v1))
            }, null, 6)
          ], 8, _hoisted_2$9);
        }), 128))
      ]);
    }), 128))
  ]);
}
var Palette = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-b969fd48"]]);
const _sfc_main$9 = defineComponent({
  name: "Board",
  props: {
    color: propTypes.instanceOf(Color),
    round: propTypes.bool.def(false),
    hide: propTypes.bool.def(true)
  },
  emits: ["change"],
  setup(props, { emit }) {
    var _a, _b, _c;
    const instance = getCurrentInstance();
    const hueHsv = {
      h: ((_a = props.color) == null ? void 0 : _a.hue) || 0,
      s: 1,
      v: 1
    };
    const hueColor = new Color(hueHsv).toHexString();
    const state = reactive({
      hueColor,
      saturation: ((_b = props.color) == null ? void 0 : _b.saturation) || 0,
      brightness: ((_c = props.color) == null ? void 0 : _c.brightness) || 0
    });
    const cursorTop = ref(0);
    const cursorLeft = ref(0);
    const cursorElement = ref();
    const boardElement = ref();
    const getCursorStyle = computed(() => {
      return {
        top: cursorTop.value + "px",
        left: cursorLeft.value + "px"
      };
    });
    const updatePosition = () => {
      if (instance) {
        const el = instance.vnode.el;
        cursorLeft.value = state.saturation * (el == null ? void 0 : el.clientWidth);
        cursorTop.value = (1 - state.brightness) * (el == null ? void 0 : el.clientHeight);
      }
    };
    const onClickBoard = (event) => {
      const target = event.target;
      if (target !== boardElement.value) {
        handleDrag(event);
      }
    };
    const handleDrag = (event) => {
      if (instance) {
        const el = instance.vnode.el;
        const rect = el == null ? void 0 : el.getBoundingClientRect();
        let left = event.clientX - rect.left;
        let top = event.clientY - rect.top;
        left = clamp(left, 0, rect.width);
        top = clamp(top, 0, rect.height);
        const saturation = left / rect.width;
        const bright = clamp(-(top / rect.height) + 1, 0, 1);
        cursorLeft.value = left;
        cursorTop.value = top;
        state.saturation = saturation;
        state.brightness = bright;
        emit("change", saturation, bright);
      }
    };
    tryOnMounted(() => {
      if (instance && instance.vnode.el && cursorElement.value) {
        Vn.triggerDragEvent(cursorElement.value, {
          drag: (event) => {
            handleDrag(event);
          },
          end: (event) => {
            handleDrag(event);
          }
        });
        updatePosition();
      }
    });
    whenever(() => props.color, (value) => {
      merge(state, {
        hueColor: new Color({ h: value.hue, s: 1, v: 1 }).toHexString(),
        saturation: value.saturation,
        brightness: value.brightness
      });
      updatePosition();
    }, { deep: true });
    return { state, cursorElement, getCursorStyle, onClickBoard };
  }
});
const _withScopeId$4 = (n) => (pushScopeId("data-v-63803390"), n = n(), popScopeId(), n);
const _hoisted_1$8 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("div", { class: "vc-saturation__white" }, null, -1));
const _hoisted_2$8 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("div", { class: "vc-saturation__black" }, null, -1));
const _hoisted_3$6 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_4$5 = [
  _hoisted_3$6
];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "boardElement",
    class: normalizeClass(["vc-saturation", { "vc-saturation__chrome": _ctx.round, "vc-saturation__hidden": _ctx.hide }]),
    style: normalizeStyle({ backgroundColor: _ctx.state.hueColor }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickBoard && _ctx.onClickBoard(...args))
  }, [
    _hoisted_1$8,
    _hoisted_2$8,
    createElementVNode("div", {
      class: "vc-saturation__cursor",
      ref: "cursorElement",
      style: normalizeStyle(_ctx.getCursorStyle)
    }, _hoisted_4$5, 4)
  ], 6);
}
var Board = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-63803390"]]);
const _sfc_main$8 = defineComponent({
  name: "Hue",
  props: {
    color: propTypes.instanceOf(Color),
    size: propTypes.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(props, { emit }) {
    const barElement = ref(null);
    const cursorElement = ref(null);
    let color = props.color || new Color();
    const state = reactive({
      hue: color.hue || 0
    });
    watch(() => props.color, (value) => {
      if (value) {
        color = value;
        merge(state, { hue: color.hue });
      }
    }, { deep: true });
    const getCursorLeft = () => {
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        if (state.hue === 360) {
          return rect.width - offsetWidth / 2;
        }
        return state.hue % 360 * (rect.width - offsetWidth) / 360 + offsetWidth / 2;
      }
      return 0;
    };
    const getCursorStyle = computed(() => {
      const left = getCursorLeft();
      return {
        left: left + "px",
        top: 0
      };
    });
    const onClickSider = (event) => {
      const target = event.target;
      if (target !== barElement.value) {
        onMoveBar(event);
      }
    };
    const onMoveBar = (event) => {
      event.stopPropagation();
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        let left = event.clientX - rect.left;
        left = Math.min(left, rect.width - offsetWidth / 2);
        left = Math.max(offsetWidth / 2, left);
        const hue = Math.round((left - offsetWidth / 2) / (rect.width - offsetWidth) * 360);
        color.hue = hue;
        state.hue = hue;
        emit("change", hue);
      }
    };
    tryOnMounted(() => {
      const dragConfig = {
        drag: (event) => {
          onMoveBar(event);
        },
        end: (event) => {
          onMoveBar(event);
        }
      };
      if (barElement.value && cursorElement.value) {
        Vn.triggerDragEvent(barElement.value, dragConfig);
      }
    });
    return { barElement, cursorElement, getCursorStyle, onClickSider };
  }
});
const _withScopeId$3 = (n) => (pushScopeId("data-v-5c4cae5b"), n = n(), popScopeId(), n);
const _hoisted_1$7 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("div", { class: "vc-hue-slider__bar-handle" }, null, -1));
const _hoisted_2$7 = [
  _hoisted_1$7
];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-hue-slider", { "small-slider": _ctx.size === "small" }])
  }, [
    createElementVNode("div", {
      ref: "barElement",
      class: "vc-hue-slider__bar",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickSider && _ctx.onClickSider(...args))
    }, [
      createElementVNode("div", {
        class: normalizeClass(["vc-hue-slider__bar-pointer", { "small-bar": _ctx.size === "small" }]),
        ref: "cursorElement",
        style: normalizeStyle(_ctx.getCursorStyle)
      }, _hoisted_2$7, 6)
    ], 512)
  ], 2);
}
var Hue = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-5c4cae5b"]]);
const _sfc_main$7 = defineComponent({
  name: "Lightness",
  props: {
    color: propTypes.instanceOf(Color),
    size: propTypes.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(props, { emit }) {
    const barElement = ref(null);
    const cursorElement = ref(null);
    let color = props.color || new Color();
    const [h, s, l] = color.HSL;
    const state = reactive({
      hue: h,
      saturation: s,
      lightness: l
    });
    watch(() => props.color, (value) => {
      if (value) {
        color = value;
        const [hue, saturation, lightness] = color.HSL;
        merge(state, {
          hue,
          saturation,
          lightness
        });
      }
    }, { deep: true });
    const getBackgroundStyle = computed(() => {
      const color1 = tinycolor({
        h: state.hue,
        s: state.saturation,
        l: 0.8
      }).toPercentageRgbString();
      const color2 = tinycolor({
        h: state.hue,
        s: state.saturation,
        l: 0.6
      }).toPercentageRgbString();
      const color3 = tinycolor({
        h: state.hue,
        s: state.saturation,
        l: 0.4
      }).toPercentageRgbString();
      const color4 = tinycolor({
        h: state.hue,
        s: state.saturation,
        l: 0.2
      }).toPercentageRgbString();
      return {
        background: [
          `-webkit-linear-gradient(left, rgb(255, 255, 255), ${color1}, ${color2}, ${color3}, ${color4}, rgb(0, 0, 0))`,
          `-moz-linear-gradient(left, rgb(255, 255, 255), ${color1}, ${color2}, ${color3}, ${color4}, rgb(0, 0, 0))`,
          `-ms-linear-gradient(left, rgb(255, 255, 255), ${color1}, ${color2}, ${color3}, ${color4}, rgb(0, 0, 0))`
        ]
      };
    });
    const getCursorLeft = () => {
      if (barElement.value && cursorElement.value) {
        const lightness = state.lightness;
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        return (1 - lightness) * (rect.width - offsetWidth) + offsetWidth / 2;
      }
      return 0;
    };
    const getCursorStyle = computed(() => {
      const left = getCursorLeft();
      return {
        left: left + "px",
        top: 0
      };
    });
    const onClickSider = (event) => {
      const target = event.target;
      if (target !== barElement.value) {
        onMoveBar(event);
      }
    };
    const onMoveBar = (event) => {
      event.stopPropagation();
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        let left = event.clientX - rect.left;
        left = Math.max(offsetWidth / 2, left);
        left = Math.min(left, rect.width - offsetWidth / 2);
        const light = 1 - (left - offsetWidth / 2) / (rect.width - offsetWidth);
        color.lightness = light;
        emit("change", light);
      }
    };
    tryOnMounted(() => {
      const dragConfig = {
        drag: (event) => {
          onMoveBar(event);
        },
        end: (event) => {
          onMoveBar(event);
        }
      };
      if (barElement.value && cursorElement.value) {
        Vn.triggerDragEvent(barElement.value, dragConfig);
      }
    });
    return { barElement, cursorElement, getCursorStyle, getBackgroundStyle, onClickSider };
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-6156acb7"), n = n(), popScopeId(), n);
const _hoisted_1$6 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", { class: "vc-lightness-slider__bar-handle" }, null, -1));
const _hoisted_2$6 = [
  _hoisted_1$6
];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-lightness-slider", { "small-slider": _ctx.size === "small" }])
  }, [
    createElementVNode("div", {
      ref: "barElement",
      class: "vc-lightness-slider__bar",
      style: normalizeStyle(_ctx.getBackgroundStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickSider && _ctx.onClickSider(...args))
    }, [
      createElementVNode("div", {
        class: normalizeClass(["vc-lightness-slider__bar-pointer", { "small-bar": _ctx.size === "small" }]),
        ref: "cursorElement",
        style: normalizeStyle(_ctx.getCursorStyle)
      }, _hoisted_2$6, 6)
    ], 4)
  ], 2);
}
var Lightness = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-6156acb7"]]);
const _sfc_main$6 = defineComponent({
  name: "History",
  props: {
    colors: propTypes.arrayOf(String).def(() => []),
    round: propTypes.bool.def(false)
  },
  emits: ["change"],
  setup(_props, { emit }) {
    const onColorSelect = (v) => {
      emit("change", v);
    };
    return { onColorSelect };
  }
});
const _hoisted_1$5 = {
  key: 0,
  class: "vc-colorPicker__record"
};
const _hoisted_2$5 = { class: "color-list" };
const _hoisted_3$5 = ["onClick"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.colors && _ctx.colors.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
    createElementVNode("div", _hoisted_2$5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.colors, (v, i) => {
        return openBlock(), createElementBlock("div", {
          key: i,
          class: normalizeClass(["color-item", "transparent", { "color-item__round": _ctx.round }]),
          onClick: ($event) => _ctx.onColorSelect(v)
        }, [
          createElementVNode("div", {
            class: "color-item__display",
            style: normalizeStyle({ backgroundColor: v })
          }, null, 4)
        ], 10, _hoisted_3$5);
      }), 128))
    ])
  ])) : createCommentVNode("", true);
}
var History = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-7e6b67ca"]]);
const _sfc_main$5 = defineComponent({
  name: "Display",
  props: {
    color: propTypes.instanceOf(Color),
    disableAlpha: propTypes.bool.def(false)
  },
  emits: ["update:color", "change"],
  setup(props, { emit }) {
    var _a, _b, _c;
    const state = reactive({
      color: props.color,
      previewBgColor: (_a = props.color) == null ? void 0 : _a.toRgbString(),
      alpha: ((_b = props.color) == null ? void 0 : _b.alpha) || 100,
      hex: (_c = props.color) == null ? void 0 : _c.hex
    });
    const getBgColorStyle = computed(() => {
      return {
        background: state.previewBgColor
      };
    });
    const onAlphaBlur = (evt) => {
      const target = evt.target;
      const opacity = parseInt(target.value.replace("%", ""));
      if (!isNaN(opacity) && state.color) {
        state.alpha = opacity;
        state.color.alpha = opacity;
      }
    };
    const onInputChange = (event) => {
      const target = event.target;
      const hex = target.value.replace("#", "");
      if (tinycolor(hex).isValid() && state.color) {
        state.color.hex = hex;
      }
    };
    whenever(() => props.color, (value) => {
      if (value) {
        state.color = value;
      }
    }, { deep: true });
    whenever(() => state.color, () => {
      if (state.color) {
        state.previewBgColor = state.color.toRgbString();
        state.alpha = state.color.alpha;
        state.hex = state.color.hex;
        emit("update:color", state.color);
        emit("change", state.color);
      }
    }, { deep: true });
    return { state, getBgColorStyle, onAlphaBlur, onInputChange };
  }
});
const _hoisted_1$4 = { class: "vc-display" };
const _hoisted_2$4 = { class: "vc-current-color vc-transparent" };
const _hoisted_3$4 = { class: "vc-color-input" };
const _hoisted_4$4 = ["value"];
const _hoisted_5$4 = {
  key: 0,
  class: "vc-alpha-input"
};
const _hoisted_6$2 = ["value"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$4, [
      createElementVNode("div", {
        class: "color-cube",
        style: normalizeStyle(_ctx.getBgColorStyle)
      }, null, 4)
    ]),
    createElementVNode("div", _hoisted_3$4, [
      createElementVNode("input", {
        value: _ctx.state.hex,
        onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.onInputChange && _ctx.onInputChange(...args))
      }, null, 40, _hoisted_4$4)
    ]),
    !_ctx.disableAlpha ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
      createElementVNode("input", {
        class: "vc-alpha-input__inner",
        value: _ctx.state.alpha + "%",
        onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onAlphaBlur && _ctx.onAlphaBlur(...args))
      }, null, 40, _hoisted_6$2)
    ])) : createCommentVNode("", true)
  ]);
}
var Display = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-0067da1d"]]);
const _sfc_main$4 = defineComponent({
  name: "FkColorPicker",
  components: { Display, Alpha, Palette, Board, Hue, Lightness, History },
  props: {
    color: propTypes.instanceOf(Color),
    disableHistory: propTypes.bool.def(false),
    roundHistory: propTypes.bool.def(false),
    disableAlpha: propTypes.bool.def(false)
  },
  emits: ["update:color", "change", "advanceChange"],
  setup(props, { emit }) {
    const colorInstance = props.color || new Color();
    const state = reactive({
      color: colorInstance,
      hex: colorInstance.toHexString(),
      rgb: colorInstance.toRgbString()
    });
    const advancePanelShow = ref(false);
    const previewStyle = computed(() => {
      return { background: state.rgb };
    });
    const onBack = () => {
      advancePanelShow.value = false;
      emit("advanceChange", false);
    };
    const historyColors = useLocalStorage(HistoryColorKey, [], {});
    const updateColorHistoryFn = useDebounceFn(() => {
      if (props.disableHistory) {
        return;
      }
      const rgbString = state.color.toRgbString();
      historyColors.value = historyColors.value.filter((value) => {
        return !tinycolor.equals(value, rgbString);
      });
      if (historyColors.value.includes(rgbString)) {
        return;
      }
      while (historyColors.value.length > MAX_STORAGE_LENGTH) {
        historyColors.value.pop();
      }
      historyColors.value.unshift(rgbString);
    }, 500);
    const onCompactChange = (color) => {
      if (color === "advance") {
        advancePanelShow.value = true;
        emit("advanceChange", true);
      } else {
        state.color.hex = color;
        emit("advanceChange", false);
      }
    };
    const onAlphaChange = (alpha) => {
      state.color.alpha = alpha;
    };
    const onHueChange = (hue) => {
      state.color.hue = hue;
    };
    const onBoardChange = (saturation, brightness) => {
      state.color.saturation = saturation;
      state.color.brightness = brightness;
    };
    const onLightChange = (light) => {
      state.color.lightness = light;
    };
    const onInputChange = (event) => {
      const target = event.target;
      const hex = target.value.replace("#", "");
      if (tinycolor(hex).isValid()) {
        state.color.hex = hex;
      }
    };
    whenever(() => props.color, (value) => {
      if (value) {
        state.color = value;
      }
    }, { deep: true });
    whenever(() => state.color, () => {
      state.hex = state.color.hex;
      state.rgb = state.color.toRgbString();
      updateColorHistoryFn();
      emit("update:color", state.color);
      emit("change", state.color);
    }, { deep: true });
    return {
      state,
      advancePanelShow,
      onBack,
      onCompactChange,
      onAlphaChange,
      onHueChange,
      onBoardChange,
      onLightChange,
      onInputChange,
      previewStyle,
      historyColors
    };
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-592a5ec3"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "vc-fk-colorPicker" };
const _hoisted_2$3 = { class: "vc-fk-colorPicker__inner" };
const _hoisted_3$3 = { class: "vc-fk-colorPicker__header" };
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", { class: "back" }, null, -1));
const _hoisted_5$3 = [
  _hoisted_4$3
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Palette = resolveComponent("Palette");
  const _component_Board = resolveComponent("Board");
  const _component_Hue = resolveComponent("Hue");
  const _component_Lightness = resolveComponent("Lightness");
  const _component_Alpha = resolveComponent("Alpha");
  const _component_Display = resolveComponent("Display");
  const _component_History = resolveComponent("History");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$3, [
      createElementVNode("div", _hoisted_3$3, [
        _ctx.advancePanelShow ? (openBlock(), createElementBlock("span", {
          key: 0,
          style: { "cursor": "pointer" },
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onBack && _ctx.onBack(...args))
        }, _hoisted_5$3)) : createCommentVNode("", true)
      ]),
      !_ctx.advancePanelShow ? (openBlock(), createBlock(_component_Palette, {
        key: 0,
        onChange: _ctx.onCompactChange
      }, null, 8, ["onChange"])) : createCommentVNode("", true),
      _ctx.advancePanelShow ? (openBlock(), createBlock(_component_Board, {
        key: 1,
        color: _ctx.state.color,
        onChange: _ctx.onBoardChange
      }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
      _ctx.advancePanelShow ? (openBlock(), createBlock(_component_Hue, {
        key: 2,
        color: _ctx.state.color,
        onChange: _ctx.onHueChange
      }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
      !_ctx.advancePanelShow ? (openBlock(), createBlock(_component_Lightness, {
        key: 3,
        color: _ctx.state.color,
        onChange: _ctx.onLightChange
      }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
      !_ctx.disableAlpha ? (openBlock(), createBlock(_component_Alpha, {
        key: 4,
        color: _ctx.state.color,
        onChange: _ctx.onAlphaChange
      }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
      createVNode(_component_Display, {
        color: _ctx.state.color,
        "disable-alpha": _ctx.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      !_ctx.disableHistory ? (openBlock(), createBlock(_component_History, {
        key: 5,
        round: _ctx.roundHistory,
        colors: _ctx.historyColors,
        onChange: _ctx.onCompactChange
      }, null, 8, ["round", "colors", "onChange"])) : createCommentVNode("", true)
    ])
  ]);
}
var FkColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-592a5ec3"]]);
const _sfc_main$3 = defineComponent({
  name: "ChromeColorPicker",
  components: { Display, Alpha, Board, Hue, History },
  props: {
    color: propTypes.instanceOf(Color),
    disableHistory: propTypes.bool.def(false),
    roundHistory: propTypes.bool.def(false),
    disableAlpha: propTypes.bool.def(false)
  },
  emits: ["update:color", "change"],
  setup(props, { emit }) {
    const colorInstance = props.color || new Color();
    const state = reactive({
      color: colorInstance,
      hex: colorInstance.toHexString(),
      rgb: colorInstance.toRgbString()
    });
    const previewStyle = computed(() => {
      return { background: state.rgb };
    });
    const historyColors = useLocalStorage(HistoryColorKey, [], {});
    const updateColorHistoryFn = useDebounceFn(() => {
      if (props.disableHistory) {
        return;
      }
      const rgbString = state.color.toRgbString();
      historyColors.value = historyColors.value.filter((value) => {
        return !tinycolor.equals(value, rgbString);
      });
      if (historyColors.value.includes(rgbString)) {
        return;
      }
      while (historyColors.value.length > MAX_STORAGE_LENGTH) {
        historyColors.value.pop();
      }
      historyColors.value.unshift(rgbString);
    }, 500);
    const onAlphaChange = (alpha) => {
      state.color.alpha = alpha;
    };
    const onHueChange = (hue) => {
      state.color.hue = hue;
    };
    const onBoardChange = (saturation, brightness) => {
      state.color.saturation = saturation;
      state.color.brightness = brightness;
    };
    const onCompactChange = (color) => {
      if (color !== "advance") {
        state.color.hex = color;
      }
    };
    whenever(() => props.color, (value) => {
      if (value) {
        state.color = value;
      }
    }, { deep: true });
    whenever(() => state.color, () => {
      state.hex = state.color.hex;
      state.rgb = state.color.toRgbString();
      updateColorHistoryFn();
      emit("update:color", state.color);
      emit("change", state.color);
    }, { deep: true });
    return {
      state,
      previewStyle,
      historyColors,
      onAlphaChange,
      onHueChange,
      onBoardChange,
      onCompactChange
    };
  }
});
const _hoisted_1$2 = { class: "vc-chrome-colorPicker" };
const _hoisted_2$2 = { class: "vc-chrome-colorPicker-body" };
const _hoisted_3$2 = { class: "chrome-controls" };
const _hoisted_4$2 = { class: "chrome-color-wrap transparent" };
const _hoisted_5$2 = { class: "chrome-sliders" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Board = resolveComponent("Board");
  const _component_Hue = resolveComponent("Hue");
  const _component_Alpha = resolveComponent("Alpha");
  const _component_Display = resolveComponent("Display");
  const _component_History = resolveComponent("History");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(_component_Board, {
      round: true,
      hide: false,
      color: _ctx.state.color,
      onChange: _ctx.onBoardChange
    }, null, 8, ["color", "onChange"]),
    createElementVNode("div", _hoisted_2$2, [
      createElementVNode("div", _hoisted_3$2, [
        createElementVNode("div", _hoisted_4$2, [
          createElementVNode("div", {
            class: "current-color",
            style: normalizeStyle(_ctx.previewStyle)
          }, null, 4)
        ]),
        createElementVNode("div", _hoisted_5$2, [
          createVNode(_component_Hue, {
            size: "small",
            color: _ctx.state.color,
            onChange: _ctx.onHueChange
          }, null, 8, ["color", "onChange"]),
          !_ctx.disableAlpha ? (openBlock(), createBlock(_component_Alpha, {
            key: 0,
            size: "small",
            color: _ctx.state.color,
            onChange: _ctx.onAlphaChange
          }, null, 8, ["color", "onChange"])) : createCommentVNode("", true)
        ])
      ]),
      createVNode(_component_Display, {
        color: _ctx.state.color,
        "disable-alpha": _ctx.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      !_ctx.disableHistory ? (openBlock(), createBlock(_component_History, {
        key: 0,
        round: _ctx.roundHistory,
        colors: _ctx.historyColors,
        onChange: _ctx.onCompactChange
      }, null, 8, ["round", "colors", "onChange"])) : createCommentVNode("", true)
    ])
  ]);
}
var ChromeColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-61d7303b"]]);
const ColorPickerProviderKey = "Vue3ColorPickerProvider";
const _sfc_main$2 = defineComponent({
  name: "GradientColorPicker",
  components: { Angle, Display, Alpha, Palette, Board, Hue, Lightness, History },
  props: {
    startColor: propTypes.instanceOf(Color).isRequired,
    endColor: propTypes.instanceOf(Color).isRequired,
    startColorStop: propTypes.number.def(0),
    endColorStop: propTypes.number.def(100),
    angle: propTypes.number.def(0),
    disableHistory: propTypes.bool.def(false),
    roundHistory: propTypes.bool.def(false),
    disableAlpha: propTypes.bool.def(false)
  },
  emits: [
    "update:startColor",
    "update:endColor",
    "update:angle",
    "update:startColorStop",
    "update:endColorStop",
    "startColorChange",
    "endColorChange",
    "advanceChange",
    "angleChange",
    "startColorStopChange",
    "endColorStopChange"
  ],
  setup(props, { emit }) {
    const state = reactive({
      startActive: true,
      startColor: props.startColor,
      endColor: props.endColor,
      startColorStop: props.startColorStop,
      endColorStop: props.endColorStop,
      angle: props.angle,
      startColorRgba: props.startColor.toRgbString(),
      endColorRgba: props.endColor.toRgbString()
    });
    const parent = inject(ColorPickerProviderKey);
    const advancePanelShow = ref(false);
    const startGradientRef = ref();
    const stopGradientRef = ref();
    const colorRangeRef = ref();
    const currentColor = computed({
      get: () => {
        return state.startActive ? state.startColor : state.endColor;
      },
      set: (v) => {
        if (state.startActive) {
          state.startColor = v;
          return;
        }
        state.endColor = v;
      }
    });
    const getStartColorLeft = computed(() => {
      if (colorRangeRef.value && startGradientRef.value) {
        const alpha = state.startColorStop / 100;
        const rect = colorRangeRef.value.getBoundingClientRect();
        const offsetWidth = startGradientRef.value.offsetWidth;
        return Math.round(alpha * (rect.width - offsetWidth) + offsetWidth / 2);
      }
      return 0;
    });
    const getEndColorLeft = computed(() => {
      if (colorRangeRef.value && stopGradientRef.value) {
        const alpha = state.endColorStop / 100;
        const rect = colorRangeRef.value.getBoundingClientRect();
        const offsetWidth = stopGradientRef.value.offsetWidth;
        return Math.round(alpha * (rect.width - offsetWidth) + offsetWidth / 2);
      }
      return 0;
    });
    const gradientBg = computed(() => {
      return {
        background: `linear-gradient(${state.angle}deg, ${state.startColorRgba} ${state.startColorStop}%, ${state.endColorRgba} ${state.endColorStop}%)`
      };
    });
    const dragStartRange = (evt) => {
      var _a;
      state.startActive = true;
      if (colorRangeRef.value && startGradientRef.value) {
        const rect = (_a = colorRangeRef.value) == null ? void 0 : _a.getBoundingClientRect();
        let left = evt.clientX - rect.left;
        left = Math.max(startGradientRef.value.offsetWidth / 2, left);
        left = Math.min(left, rect.width - startGradientRef.value.offsetWidth / 2);
        state.startColorStop = Math.round((left - startGradientRef.value.offsetWidth / 2) / (rect.width - startGradientRef.value.offsetWidth) * 100);
        emit("update:startColorStop", state.startColorStop);
        emit("startColorStopChange", state.startColorStop);
      }
    };
    const dragEndRange = (evt) => {
      var _a;
      state.startActive = false;
      if (colorRangeRef.value && stopGradientRef.value) {
        const rect = (_a = colorRangeRef.value) == null ? void 0 : _a.getBoundingClientRect();
        let left = evt.clientX - rect.left;
        left = Math.max(stopGradientRef.value.offsetWidth / 2, left);
        left = Math.min(left, rect.width - stopGradientRef.value.offsetWidth / 2);
        state.endColorStop = Math.round((left - stopGradientRef.value.offsetWidth / 2) / (rect.width - stopGradientRef.value.offsetWidth) * 100);
        emit("update:endColorStop", state.endColorStop);
        emit("endColorStopChange", state.endColorStop);
      }
    };
    const onDegreeBlur = (evt) => {
      const target = evt.target;
      const degree = parseInt(target.value.replace("\xB0", ""));
      if (!isNaN(degree)) {
        state.angle = degree % 360;
      }
      emit("update:angle", state.angle);
      emit("angleChange", state.angle);
    };
    const onDegreeChange = (angle) => {
      state.angle = angle;
      emit("update:angle", state.angle);
      emit("angleChange", state.angle);
    };
    const onCompactChange = (color) => {
      if (color === "advance") {
        advancePanelShow.value = true;
        emit("advanceChange", true);
      } else {
        currentColor.value.hex = color;
        emit("advanceChange", false);
      }
      doColorChange();
    };
    const onAlphaChange = (alpha) => {
      currentColor.value.alpha = alpha;
      doColorChange();
    };
    const onHueChange = (hue) => {
      currentColor.value.hue = hue;
      doColorChange();
    };
    const onBoardChange = (saturation, brightness) => {
      currentColor.value.saturation = saturation;
      currentColor.value.brightness = brightness;
      doColorChange();
    };
    const onLightChange = (light) => {
      currentColor.value.lightness = light;
      doColorChange();
    };
    const doColorChange = () => {
      if (state.startActive) {
        emit("update:startColor", state.startColor);
        emit("startColorChange", state.startColor);
      } else {
        emit("update:endColor", state.endColor);
        emit("endColorChange", state.endColor);
      }
    };
    const onBack = () => {
      advancePanelShow.value = false;
      emit("advanceChange", false);
    };
    const historyColors = useLocalStorage(HistoryColorKey, [], {});
    const updateColorHistoryFn = useDebounceFn(() => {
      if (props.disableHistory) {
        return;
      }
      const rgbString = currentColor.value.toRgbString();
      historyColors.value = historyColors.value.filter((value) => {
        return !tinycolor.equals(value, rgbString);
      });
      if (historyColors.value.includes(rgbString)) {
        return;
      }
      while (historyColors.value.length > MAX_STORAGE_LENGTH) {
        historyColors.value.pop();
      }
      historyColors.value.unshift(rgbString);
    }, 500);
    tryOnMounted(() => {
      if (stopGradientRef.value && startGradientRef.value) {
        Vn.triggerDragEvent(stopGradientRef.value, {
          drag: (event) => {
            dragEndRange(event);
          },
          end: (event) => {
            dragEndRange(event);
          }
        });
        Vn.triggerDragEvent(startGradientRef.value, {
          drag: (event) => {
            dragStartRange(event);
          },
          end: (event) => {
            dragStartRange(event);
          }
        });
      }
    });
    whenever(() => state.startColor, (value) => {
      state.startColorRgba = value.toRgbString();
    }, { deep: true });
    whenever(() => state.endColor, (value) => {
      state.endColorRgba = value.toRgbString();
    }, { deep: true });
    whenever(() => currentColor.value, () => {
      updateColorHistoryFn();
    }, { deep: true });
    return {
      startGradientRef,
      stopGradientRef,
      colorRangeRef,
      state,
      currentColor,
      getStartColorLeft,
      getEndColorLeft,
      gradientBg,
      advancePanelShow,
      onDegreeBlur,
      onCompactChange,
      onAlphaChange,
      onHueChange,
      onBoardChange,
      onLightChange,
      historyColors,
      onBack,
      onDegreeChange,
      lang: parent == null ? void 0 : parent.lang
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-f63daa7a"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "vc-gradient-picker" };
const _hoisted_2$1 = { class: "vc-gradient-picker__header" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "back" }, null, -1));
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = { class: "vc-gradient-picker__body" };
const _hoisted_6$1 = {
  class: "vc-color-range",
  ref: "colorRangeRef"
};
const _hoisted_7 = { class: "vc-color-range__container" };
const _hoisted_8 = { class: "vc-gradient__stop__container" };
const _hoisted_9 = ["title"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "vc-gradient__stop--inner" }, null, -1));
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = ["title"];
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "vc-gradient__stop--inner" }, null, -1));
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = { class: "vc-picker-degree-input vc-degree-input" };
const _hoisted_16 = { class: "vc-degree-input__control" };
const _hoisted_17 = ["value"];
const _hoisted_18 = { class: "vc-degree-input__panel" };
const _hoisted_19 = { class: "vc-degree-input__disk" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Angle = resolveComponent("Angle");
  const _component_Palette = resolveComponent("Palette");
  const _component_Board = resolveComponent("Board");
  const _component_Hue = resolveComponent("Hue");
  const _component_Lightness = resolveComponent("Lightness");
  const _component_Alpha = resolveComponent("Alpha");
  const _component_Display = resolveComponent("Display");
  const _component_History = resolveComponent("History");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    withDirectives(createElementVNode("div", _hoisted_2$1, [
      createElementVNode("span", {
        style: { "cursor": "pointer" },
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onBack && _ctx.onBack(...args))
      }, _hoisted_4$1)
    ], 512), [
      [vShow, _ctx.advancePanelShow]
    ]),
    createElementVNode("div", _hoisted_5$1, [
      createElementVNode("div", _hoisted_6$1, [
        createElementVNode("div", _hoisted_7, [
          createElementVNode("div", {
            class: "vc-background",
            style: normalizeStyle(_ctx.gradientBg)
          }, null, 4),
          createElementVNode("div", _hoisted_8, [
            createElementVNode("div", {
              class: normalizeClass([
                "vc-gradient__stop",
                {
                  "vc-gradient__stop--current": _ctx.state.startActive
                }
              ]),
              ref: "startGradientRef",
              title: _ctx.lang === "ZH-cn" ? "\u5F00\u59CB" : "Start",
              style: normalizeStyle({ left: _ctx.getStartColorLeft + "px" })
            }, _hoisted_11, 14, _hoisted_9),
            createElementVNode("div", {
              class: normalizeClass([
                "vc-gradient__stop",
                {
                  "vc-gradient__stop--current": !_ctx.state.startActive
                }
              ]),
              ref: "stopGradientRef",
              title: _ctx.lang === "ZH-cn" ? "\u7ED3\u675F" : "End",
              style: normalizeStyle({ left: _ctx.getEndColorLeft + "px" })
            }, _hoisted_14, 14, _hoisted_12)
          ])
        ])
      ], 512),
      createElementVNode("div", _hoisted_15, [
        createElementVNode("div", _hoisted_16, [
          createElementVNode("input", {
            value: _ctx.state.angle,
            onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onDegreeBlur && _ctx.onDegreeBlur(...args))
          }, null, 40, _hoisted_17)
        ]),
        createElementVNode("div", _hoisted_18, [
          createElementVNode("div", _hoisted_19, [
            createVNode(_component_Angle, {
              angle: _ctx.state.angle,
              "onUpdate:angle": _cache[2] || (_cache[2] = ($event) => _ctx.state.angle = $event),
              size: 40,
              onChange: _ctx.onDegreeChange
            }, null, 8, ["angle", "onChange"])
          ])
        ])
      ])
    ]),
    !_ctx.advancePanelShow ? (openBlock(), createBlock(_component_Palette, {
      key: 0,
      onChange: _ctx.onCompactChange
    }, null, 8, ["onChange"])) : createCommentVNode("", true),
    _ctx.advancePanelShow ? (openBlock(), createBlock(_component_Board, {
      key: 1,
      color: _ctx.currentColor,
      onChange: _ctx.onBoardChange
    }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
    _ctx.advancePanelShow ? (openBlock(), createBlock(_component_Hue, {
      key: 2,
      color: _ctx.currentColor,
      onChange: _ctx.onHueChange
    }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
    !_ctx.advancePanelShow ? (openBlock(), createBlock(_component_Lightness, {
      key: 3,
      color: _ctx.currentColor,
      onChange: _ctx.onLightChange
    }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
    !_ctx.disableAlpha ? (openBlock(), createBlock(_component_Alpha, {
      key: 4,
      color: _ctx.currentColor,
      onChange: _ctx.onAlphaChange
    }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
    createVNode(_component_Display, {
      color: _ctx.currentColor,
      "disable-alpha": _ctx.disableAlpha
    }, null, 8, ["color", "disable-alpha"]),
    !_ctx.disableHistory ? (openBlock(), createBlock(_component_History, {
      key: 5,
      round: _ctx.roundHistory,
      colors: _ctx.historyColors,
      onChange: _ctx.onCompactChange
    }, null, 8, ["round", "colors", "onChange"])) : createCommentVNode("", true)
  ]);
}
var GradientColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-f63daa7a"]]);
const _sfc_main$1 = defineComponent({
  name: "WrapContainer",
  props: {
    showTab: propTypes.bool.def(false),
    activeKey: propTypes.oneOf(["pure", "gradient"]).def("pure")
  },
  emits: ["update:activeKey", "change"],
  setup(props, { emit }) {
    const state = reactive({
      activeKey: props.activeKey
    });
    const parent = inject(ColorPickerProviderKey);
    const onActiveKeyChange = (key) => {
      state.activeKey = key;
      emit("update:activeKey", key);
      emit("change", key);
    };
    whenever(() => props.activeKey, (value) => {
      state.activeKey = value;
    });
    return { state, onActiveKeyChange, lang: parent == null ? void 0 : parent.lang };
  }
});
const _hoisted_1 = { class: "vc-colorpicker" };
const _hoisted_2 = { class: "vc-colorpicker--container" };
const _hoisted_3 = {
  key: 0,
  class: "vc-colorpicker--tabs"
};
const _hoisted_4 = { class: "vc-colorpicker--tabs__inner" };
const _hoisted_5 = { class: "vc-btn__content" };
const _hoisted_6 = { class: "vc-btn__content" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      _ctx.showTab ? (openBlock(), createElementBlock("div", _hoisted_3, [
        createElementVNode("div", _hoisted_4, [
          createElementVNode("div", {
            class: normalizeClass([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": _ctx.state.activeKey === "pure"
              }
            ]),
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onActiveKeyChange("pure"))
          }, [
            createElementVNode("button", null, [
              createElementVNode("div", _hoisted_5, toDisplayString(_ctx.lang === "ZH-cn" ? "\u7EAF\u8272" : "Pure"), 1)
            ])
          ], 2),
          createElementVNode("div", {
            class: normalizeClass([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": _ctx.state.activeKey === "gradient"
              }
            ]),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onActiveKeyChange("gradient"))
          }, [
            createElementVNode("button", null, [
              createElementVNode("div", _hoisted_6, toDisplayString(_ctx.lang === "ZH-cn" ? "\u6E10\u53D8\u8272" : "Gradient"), 1)
            ])
          ], 2),
          createElementVNode("div", {
            class: "vc-colorpicker--tabs__bg",
            style: normalizeStyle({
              width: `50%`,
              left: `calc(${_ctx.state.activeKey === "gradient" ? 50 : 0}%)`
            })
          }, null, 4)
        ])
      ])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var WrapContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4afdf3bb"]]);
const colorPickerProps = {
  isWidget: propTypes.bool.def(false),
  pickerType: propTypes.oneOf(["fk", "chrome"]).def("fk"),
  shape: propTypes.oneOf(["circle", "square"]).def("square"),
  pureColor: {
    type: [String, Object],
    default: "#000000"
  },
  gradientColor: propTypes.string.def("#000"),
  format: {
    type: String,
    default: "rgb"
  },
  disableAlpha: propTypes.bool.def(false),
  disableHistory: propTypes.bool.def(false),
  roundHistory: propTypes.bool.def(false),
  useType: propTypes.oneOf(["pure", "gradient", "both"]).def("pure"),
  activeKey: propTypes.oneOf(["pure", "gradient"]).def("pure"),
  lang: {
    type: String,
    default: "ZH-cn"
  },
  zIndex: propTypes.number.def(9999)
};
const _sfc_main = defineComponent({
  name: "ColorPicker",
  components: { FkColorPicker, ChromeColorPicker, GradientColorPicker, WrapContainer },
  inheritAttrs: false,
  props: colorPickerProps,
  emits: [
    "update:pureColor",
    "pureColorChange",
    "update:gradientColor",
    "gradientColorChange",
    "update:activeKey",
    "activeKeyChange"
  ],
  setup(props, { emit }) {
    const state = reactive({
      pureColor: props.pureColor || "",
      activeKey: props.useType === "gradient" ? "gradient" : "pure",
      isAdvanceMode: false
    });
    provide(ColorPickerProviderKey, {
      lang: computed(() => props.lang || "ZH-cn")
    });
    const instance = new Color(state.pureColor);
    const colorInstance = ref(instance);
    const startColor = new Color("#000");
    const endColor = new Color("#000");
    const gradientState = reactive({
      startColor,
      endColor,
      startColorStop: 0,
      endColorStop: 100,
      angle: 0,
      gradientColor: props.gradientColor
    });
    const showPicker = ref(false);
    const colorCubeRef = ref(null);
    const pickerRef = ref(null);
    const getBgColorStyle = computed(() => {
      const bgColor = state.activeKey !== "gradient" ? tinycolor(state.pureColor).toRgbString() : gradientState.gradientColor;
      return {
        background: bgColor
      };
    });
    const getComponentName = computed(() => {
      if (state.activeKey === "gradient") {
        return GradientColorPicker.name;
      }
      return props.pickerType === "fk" ? FkColorPicker.name : ChromeColorPicker.name;
    });
    const getBindArgs = computed(() => {
      if (state.activeKey === "gradient") {
        return {
          startColor: gradientState.startColor,
          endColor: gradientState.endColor,
          onStartColorChange: (v) => {
            gradientState.startColor = v;
            onGradientChange();
          },
          onEndColorChange: (v) => {
            gradientState.endColor = v;
            onGradientChange();
          },
          angle: gradientState.angle,
          startColorStop: gradientState.startColorStop,
          endColorStop: gradientState.endColorStop,
          onStartColorStopChange: (v) => {
            gradientState.startColorStop = v;
            onGradientChange();
          },
          onEndColorStopChange: (v) => {
            gradientState.endColorStop = v;
            onGradientChange();
          },
          onAngleChange: (v) => {
            gradientState.angle = v;
            onGradientChange();
          },
          onAdvanceChange: (v) => {
            state.isAdvanceMode = v;
          }
        };
      }
      return {
        disableAlpha: props.disableAlpha,
        disableHistory: props.disableHistory,
        roundHistory: props.roundHistory,
        color: colorInstance.value,
        onChange: onColorChange,
        onAdvanceChange
      };
    });
    const onAdvanceChange = (isAdvance) => {
      state.isAdvanceMode = isAdvance;
    };
    const onShowPicker = () => {
      showPicker.value = true;
    };
    const onHidePicker = () => {
      showPicker.value = false;
    };
    const parseGradientColor = () => {
      var _a, _b, _c, _d;
      try {
        const [colorNode] = parse(gradientState.gradientColor);
        if (colorNode && colorNode.type === "linear-gradient" && ((_a = colorNode.orientation) == null ? void 0 : _a.type) === "angular" && colorNode.colorStops.length >= 2) {
          const startColorVal = colorNode.colorStops[0];
          const endColorVal = colorNode.colorStops[1];
          gradientState.startColorStop = Number((_b = startColorVal.length) == null ? void 0 : _b.value) || 0;
          gradientState.endColorStop = Number((_c = endColorVal.length) == null ? void 0 : _c.value) || 0;
          gradientState.angle = Number((_d = colorNode.orientation) == null ? void 0 : _d.value) || 0;
          const [r, g, b, a] = startColorVal.value;
          const [r1, g1, b1, a1] = startColorVal.value;
          gradientState.startColor = new Color({
            r: Number(r),
            g: Number(g),
            b: Number(b),
            a: Number(a)
          });
          gradientState.startColor = new Color({
            r: Number(r1),
            g: Number(g1),
            b: Number(b1),
            a: Number(a1)
          });
        }
      } catch (e) {
        console.log(`[Parse Color]: ${e}`);
      }
    };
    const onGradientChange = () => {
      const nodes = color2GradientNode();
      try {
        gradientState.gradientColor = stringify(nodes);
        emit("update:gradientColor", gradientState.gradientColor);
        emit("gradientColorChange", gradientState.gradientColor);
      } catch (e) {
        console.log(e);
      }
    };
    const color2GradientNode = () => {
      const nodes = [];
      const startColorArr = gradientState.startColor.RGB.map((v) => v.toString());
      const endColorArr = gradientState.endColor.RGB.map((v) => v.toString());
      nodes.push({
        type: "linear-gradient",
        orientation: { type: "angular", value: gradientState.angle + "" },
        colorStops: [
          {
            type: "rgba",
            value: [startColorArr[0], startColorArr[1], startColorArr[2], startColorArr[3]],
            length: { value: gradientState.startColorStop + "", type: "%" }
          },
          {
            type: "rgba",
            value: [endColorArr[0], endColorArr[1], endColorArr[2], endColorArr[3]],
            length: { value: gradientState.endColorStop + "", type: "%" }
          }
        ]
      });
      return nodes;
    };
    const onInit = () => {
      if (colorCubeRef.value && pickerRef.value) {
        createPopper(colorCubeRef.value, pickerRef.value, {
          placement: "auto",
          modifiers: [
            {
              name: "flip",
              options: {
                fallbackPlacements: ["top", "left"]
              }
            }
          ]
        });
      }
    };
    const onColorChange = (v) => {
      colorInstance.value = v;
      state.pureColor = v.toString(props.format);
      emitColorChange();
    };
    const emitColorChange = () => {
      emit("update:pureColor", state.pureColor);
      emit("pureColorChange", state.pureColor);
    };
    onClickOutside(pickerRef, () => {
      onHidePicker();
    });
    const onActiveKeyChange = (key) => {
      state.activeKey = key;
      emit("update:activeKey", key);
      emit("activeKeyChange", key);
    };
    tryOnMounted(() => {
      onInit();
      emitColorChange();
      parseGradientColor();
      onGradientChange();
    });
    whenever(() => props.gradientColor, (value) => {
      if (value != gradientState.gradientColor) {
        gradientState.gradientColor = value;
      }
    });
    whenever(() => gradientState.gradientColor, () => {
      parseGradientColor();
    });
    whenever(() => props.activeKey, (value) => {
      state.activeKey = value;
    });
    whenever(() => props.useType, (value) => {
      if (state.activeKey !== "gradient" && value === "gradient") {
        state.activeKey = "gradient";
      } else {
        state.activeKey = "pure";
      }
    });
    whenever(() => props.pureColor, (value) => {
      const equal = tinycolor.equals(value, state.pureColor);
      if (!equal) {
        state.pureColor = value;
        colorInstance.value = new Color(value);
        emitColorChange();
      }
    }, { deep: true });
    return {
      colorCubeRef,
      pickerRef,
      showPicker,
      colorInstance,
      getBgColorStyle,
      onColorChange,
      onShowPicker,
      onActiveKeyChange,
      getComponentName,
      getBindArgs,
      state
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_WrapContainer = resolveComponent("WrapContainer");
  return openBlock(), createElementBlock(Fragment, null, [
    !_ctx.isWidget ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["vc-color-wrap", "transparent", { round: _ctx.shape === "circle" }]),
      ref: "colorCubeRef"
    }, [
      createElementVNode("div", {
        class: "current-color",
        style: normalizeStyle(_ctx.getBgColorStyle),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onShowPicker && _ctx.onShowPicker(...args))
      }, null, 4)
    ], 2)) : createCommentVNode("", true),
    _ctx.isWidget ? (openBlock(), createBlock(_component_WrapContainer, {
      key: 1,
      "active-key": _ctx.state.activeKey,
      "onUpdate:active-key": _cache[1] || (_cache[1] = ($event) => _ctx.state.activeKey = $event),
      "show-tab": _ctx.useType === "both",
      onChange: _ctx.onActiveKeyChange,
      style: normalizeStyle({ zIndex: _ctx.zIndex })
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.getComponentName), mergeProps({ key: _ctx.getComponentName }, _ctx.getBindArgs), null, 16))
      ]),
      _: 1
    }, 8, ["active-key", "show-tab", "onChange", "style"])) : createCommentVNode("", true),
    !_ctx.isWidget ? (openBlock(), createBlock(Teleport, {
      key: 2,
      to: "body"
    }, [
      withDirectives(createElementVNode("div", {
        ref: "pickerRef",
        style: normalizeStyle({ zIndex: _ctx.zIndex })
      }, [
        _ctx.showPicker ? (openBlock(), createBlock(_component_WrapContainer, {
          key: 0,
          "show-tab": _ctx.useType === "both" && !_ctx.state.isAdvanceMode,
          "active-key": _ctx.state.activeKey,
          "onUpdate:active-key": _cache[2] || (_cache[2] = ($event) => _ctx.state.activeKey = $event),
          onChange: _ctx.onActiveKeyChange
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.getComponentName), mergeProps({ key: _ctx.getComponentName }, _ctx.getBindArgs), null, 16))
          ]),
          _: 1
        }, 8, ["show-tab", "active-key", "onChange"])) : createCommentVNode("", true)
      ], 4), [
        [vShow, _ctx.showPicker]
      ])
    ])) : createCommentVNode("", true)
  ], 64);
}
var ColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0aa3a75d"]]);

const transformFileIntoBlob = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      const blob = new Blob([data], { type: file.type });
      resolve(blob);
    };
    reader.readAsArrayBuffer(file);
  });
};
const transformFileIntoBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
};

export { ColorPicker as C, transformFileIntoBlob as a, transformFileIntoBase64 as t };
//# sourceMappingURL=style.c06ff9d5.mjs.map
