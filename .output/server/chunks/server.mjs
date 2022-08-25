import require$$0 from 'unenv/runtime/mock/proxy';
import { v as vue_cjs_prod$1, r as require$$1, s as serverRenderer } from './renderer.mjs';
import { $fetch } from 'ohmyfetch';
import { joinURL, hasProtocol, isEqual } from 'ufo';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { createError as createError$1, sendRedirect } from 'h3';
import defu from 'defu';
import axios from 'axios';
import * as Icons from '@heroicons/vue/outline/esm/index.js';
import { LightBulbIcon, ChevronDownIcon, TrashIcon } from '@heroicons/vue/outline/esm/index.js';
import pkg from 'discord-markdown';
import { a as useRuntimeConfig$1 } from './node-server.mjs';

function u$4(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$4),t}

var R$2=(o=>(o[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o))(R$2||{}),O$1=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(O$1||{});function P$4({visible:r=!0,features:t=0,ourProps:e,theirProps:o,...i}){var a;let n=w$2(o,e),s=Object.assign(i,{props:n});if(r||t&2&&n.static)return u$3(s);if(t&1){let l=(a=n.unmount)==null||a?0:1;return u$4(l,{[0](){return null},[1](){return u$3({...i,props:{...n,hidden:!0,style:{display:"none"}}})}})}return u$3(s)}function u$3({props:r,attrs:t,slots:e,slot:o,name:i}){var f;let{as:n,...s}=N$2(r,["unmount","static"]),a=(f=e.default)==null?void 0:f.call(e,o),l={};if(n==="template"){if(a=y(a),Object.keys(s).length>0||Object.keys(t).length>0){let[c,...p]=a!=null?a:[];if(!k(c)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).sort((d,g)=>d.localeCompare(g)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));return vue_cjs_prod$1.cloneVNode(c,Object.assign({},s,l))}return Array.isArray(a)&&a.length===1?a[0]:a}return vue_cjs_prod$1.h(n,Object.assign({},s,l),a)}function y(r){return r.flatMap(t=>t.type===vue_cjs_prod$1.Fragment?y(t.children):[t])}function w$2(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let i of r)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?((e[n])!=null||(e[n]=[]),e[n].push(i[n])):t[n]=i[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(i=>[i,void 0])));for(let i in e)Object.assign(t,{[i](n,...s){let a=e[i];for(let l of a){if(n!=null&&n.defaultPrevented)return;l(n,...s);}}});return t}function A$1(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function N$2(r,t=[]){let e=Object.assign({},r);for(let o of t)o in e&&delete e[o];return e}function k(r){return r==null?!1:typeof r.type=="string"||typeof r.type=="object"||typeof r.type=="function"}

let e$2=0;function n$2(){return ++e$2}function t(){return n$2()}

var o$1=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o$1||{});

function f$1(r){throw new Error("Unexpected object: "+r)}var a$2=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(a$2||{});function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=l!=null?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=t.slice().reverse().findIndex((i,c,u)=>s!==-1&&u.length-c-1>=s?!1:!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 2:return t.findIndex((e,i)=>i<=s?!1:!n.resolveDisabled(e));case 3:{let e=t.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 4:return t.findIndex(e=>n.resolveId(e)===r.id);case 5:return null;default:f$1(r);}})();return d===-1?l:d}

function o(n){var l;return n==null||n.value==null?null:(l=n.value.$el)!=null?l:n.value}

let n$1=Symbol("Context");var l$2=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(l$2||{});function f(){return p$4()!==null}function p$4(){return vue_cjs_prod$1.inject(n$1,null)}function c$3(o){vue_cjs_prod$1.provide(n$1,o);}

function r$3(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return "button"}function b$2(t,e){let n=vue_cjs_prod$1.ref(r$3(t.value.type,t.value.as));return vue_cjs_prod$1.onMounted(()=>{n.value=r$3(t.value.type,t.value.as);}),vue_cjs_prod$1.watchEffect(()=>{var o$1;n.value||!o(e)||o(e)instanceof HTMLButtonElement&&!((o$1=o(e))!=null&&o$1.hasAttribute("type"))&&(n.value="button");}),n}

function e$1(n){return null;}

function p$3({container:e,accept:t,walk:d,enabled:o}){vue_cjs_prod$1.watchEffect(()=>{let r=e.value;if(!r||o!==void 0&&!o.value)return;let l=e$1();if(!l)return;let c=Object.assign(f=>t(f),{acceptNode:t}),n=l.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,c,!1);for(;n.nextNode();)d(n.currentNode);});}

let c$2=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L$2=(o=>(o[o.First=1]="First",o[o.Previous=2]="Previous",o[o.Next=4]="Next",o[o.Last=8]="Last",o[o.WrapAround=16]="WrapAround",o[o.NoScroll=32]="NoScroll",o))(L$2||{}),N$1=(n=>(n[n.Error=0]="Error",n[n.Overflow=1]="Overflow",n[n.Success=2]="Success",n[n.Underflow=3]="Underflow",n))(N$1||{}),T$2=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(T$2||{});function b$1(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c$2))}var M$1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(M$1||{});function F$2(e,r=0){var t;return e===((t=e$1())==null?void 0:t.body)?!1:u$4(r,{[0](){return e.matches(c$2)},[1](){let l=e;for(;l!==null;){if(l.matches(c$2))return !0;l=l.parentElement;}return !1}})}function H(e){e==null||e.focus({preventScroll:!0});}let h$1=["textarea","input"].join(",");function v(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,h$1))!=null?t:!1}function w$1(e,r=t=>t){return e.slice().sort((t,l)=>{let n=r(t),i=r(l);if(n===null||i===null)return 0;let o=n.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function P$3(e,r,t=!0){var d;let l=(d=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?d:document,n=Array.isArray(e)?t?w$1(e):e:b$1(e),i=l.activeElement,o=(()=>{if(r&5)return 1;if(r&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(i))-1;if(r&4)return Math.max(0,n.indexOf(i))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=r&32?{preventScroll:!0}:{},f=0,s=n.length,u;do{if(f>=s||f+s<=0)return 0;let a=m+f;if(r&16)a=(a+s)%s;else {if(a<0)return 3;if(a>=s)return 1}u=n[a],u==null||u.focus(x),f+=o;}while(u!==l.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),r&6&&v(u)&&u.select(),2}

function T$1(l,f,a=vue_cjs_prod$1.computed(()=>!0)){}

var p$2=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(p$2||{});let m$1=vue_cjs_prod$1.defineComponent({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(r,{slots:t,attrs:o}){return ()=>{let{features:e,...d}=r,n={"aria-hidden":(e&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return P$4({ourProps:n,theirProps:d,slot:{},attrs:o,slots:t,name:"Hidden"})}}});

function p$1(n){var t;let r=(t=n==null?void 0:n.form)!=null?t:n.closest("form");if(!!r){for(let i of r.elements)if(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image"){i.click();return}}}

var d$2=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(d$2||{});function n(){let o=vue_cjs_prod$1.ref(0);return o}

function r$2(n,e,d,o){}

var D$1=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(D$1||{});let V=Object.assign(vue_cjs_prod$1.defineComponent({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:vue_cjs_prod$1.ref(new Set)}},inheritAttrs:!1,setup(o$1,{attrs:u,slots:l,expose:r}){let t=vue_cjs_prod$1.ref(null);r({el:t,$el:t});let a=vue_cjs_prod$1.computed(()=>e$1());O({ownerDocument:a},vue_cjs_prod$1.computed(()=>Boolean(o$1.features&16)));let e=A({ownerDocument:a,container:t,initialFocus:vue_cjs_prod$1.computed(()=>o$1.initialFocus)},vue_cjs_prod$1.computed(()=>Boolean(o$1.features&2)));N({ownerDocument:a,container:t,containers:o$1.containers,previousActiveElement:e},vue_cjs_prod$1.computed(()=>Boolean(o$1.features&8)));let s=n();function i(){let n=o(t);!n||u$4(s.value,{[d$2.Forwards]:()=>P$3(n,L$2.First),[d$2.Backwards]:()=>P$3(n,L$2.Last)});}return ()=>{let n={},T={ref:t},{features:c,initialFocus:C,containers:_,...w}=o$1;return vue_cjs_prod$1.h(vue_cjs_prod$1.Fragment,[Boolean(c&4)&&vue_cjs_prod$1.h(m$1,{as:"button",type:"button",onFocus:i,features:p$2.Focusable}),P$4({ourProps:T,theirProps:{...u,...w},slot:n,attrs:u,slots:l,name:"FocusTrap"}),Boolean(c&4)&&vue_cjs_prod$1.h(m$1,{as:"button",type:"button",onFocus:i,features:p$2.Focusable})])}}}),{features:D$1});function O({ownerDocument:o},u){let l=vue_cjs_prod$1.ref(null),r={value:!1};vue_cjs_prod$1.onMounted(()=>{vue_cjs_prod$1.watch(u,(t,a)=>{var e;t!==a&&(!u.value||(r.value=!0,l.value||(l.value=(e=o.value)==null?void 0:e.activeElement)));},{immediate:!0}),vue_cjs_prod$1.watch(u,(t,a,e)=>{t!==a&&(!u.value||e(()=>{r.value!==!1&&(r.value=!1,H(l.value),l.value=null);}));},{immediate:!0});});}function A({ownerDocument:o$1,container:u,initialFocus:l},r){let t=vue_cjs_prod$1.ref(null);return vue_cjs_prod$1.onMounted(()=>{vue_cjs_prod$1.watch([u,l,r],(a,e)=>{if(a.every((i,n)=>(e==null?void 0:e[n])===i)||!r.value)return;let s=o(u);!s||requestAnimationFrame(()=>{var T,c;let i=o(l),n=(T=o$1.value)==null?void 0:T.activeElement;if(i){if(i===n){t.value=n;return}}else if(s.contains(n)){t.value=n;return}i?H(i):P$3(s,L$2.First|L$2.NoScroll)===N$1.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),t.value=(c=o$1.value)==null?void 0:c.activeElement;});},{immediate:!0,flush:"post"});}),t}function N({ownerDocument:o,container:u,containers:l,previousActiveElement:r},t){var a;r$2((a=o.value)==null?void 0:a.defaultView);}

let l$1="body > *",i$1=new Set,r$1=new Map;function u$2(t){t.setAttribute("aria-hidden","true"),t.inert=!0;}function s$1(t){let n=r$1.get(t);!n||(n["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert);}function g$2(t,n=vue_cjs_prod$1.ref(!0)){vue_cjs_prod$1.watchEffect(d=>{if(!n.value||!t.value)return;let a=t.value,o=e$1();if(!!o){i$1.add(a);for(let e of r$1.keys())e.contains(a)&&(s$1(e),r$1.delete(e));o.querySelectorAll(l$1).forEach(e=>{if(e instanceof HTMLElement){for(let f of i$1)if(e.contains(f))return;i$1.size===1&&(r$1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u$2(e));}}),d(()=>{if(i$1.delete(a),i$1.size>0)o.querySelectorAll(l$1).forEach(e=>{if(e instanceof HTMLElement&&!r$1.has(e)){for(let f of i$1)if(e.contains(f))return;r$1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u$2(e);}});else for(let e of r$1.keys())s$1(e),r$1.delete(e);});}});}

let e=Symbol("ForcePortalRootContext");function u$1(){return vue_cjs_prod$1.inject(e,!1)}let P$2=vue_cjs_prod$1.defineComponent({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(o,{slots:t,attrs:r}){return vue_cjs_prod$1.provide(e,o.force),()=>{let{force:f,...n}=o;return P$4({theirProps:n,ourProps:{},slot:{},slots:t,attrs:r,name:"ForcePortalRoot"})}}});

function c$1(t){let r=e$1();if(!r){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let o=r.getElementById("headlessui-portal-root");if(o)return o;let e=r.createElement("div");return e.setAttribute("id","headlessui-portal-root"),r.body.appendChild(e)}let R$1=vue_cjs_prod$1.defineComponent({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:r,attrs:o}){let e=vue_cjs_prod$1.ref(null),p=vue_cjs_prod$1.computed(()=>e$1()),n=u$1(),u=vue_cjs_prod$1.inject(g$1,null),l=vue_cjs_prod$1.ref(n===!0||u==null?c$1(e.value):u.resolveTarget());return vue_cjs_prod$1.watchEffect(()=>{n||u!=null&&(l.value=u.resolveTarget());}),vue_cjs_prod$1.onUnmounted(()=>{var i,m;let a=(i=p.value)==null?void 0:i.getElementById("headlessui-portal-root");!a||l.value===a&&l.value.children.length<=0&&((m=l.value.parentElement)==null||m.removeChild(l.value));}),()=>{if(l.value===null)return null;let a={ref:e,"data-headlessui-portal":""};return vue_cjs_prod$1.h(vue_cjs_prod$1.Teleport,{to:l.value},P$4({ourProps:a,theirProps:t,slot:{},attrs:o,slots:r,name:"Portal"}))}}}),g$1=Symbol("PortalGroupContext"),L$1=vue_cjs_prod$1.defineComponent({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:r,slots:o}){let e=vue_cjs_prod$1.reactive({resolveTarget(){return t.target}});return vue_cjs_prod$1.provide(g$1,e),()=>{let{target:p,...n}=t;return P$4({theirProps:n,ourProps:{},slot:{},attrs:r,slots:o,name:"PortalGroup"})}}});

let i=Symbol("StackContext");var c=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(c||{});function a$1(){return vue_cjs_prod$1.inject(i,()=>{})}function s({type:n,element:o,onUpdate:e}){let m=a$1();function t(...r){e==null||e(...r),m(...r);}vue_cjs_prod$1.onMounted(()=>{t(0,n,o),vue_cjs_prod$1.onUnmounted(()=>{t(1,n,o);});}),vue_cjs_prod$1.provide(i,t);}

let u=Symbol("DescriptionContext");function b(){let t=vue_cjs_prod$1.inject(u,null);if(t===null)throw new Error("Missing parent");return t}function P$1({slot:t=vue_cjs_prod$1.ref({}),name:o="Description",props:s={}}={}){let e=vue_cjs_prod$1.ref([]);function n(r){return e.value.push(r),()=>{let i=e.value.indexOf(r);i!==-1&&e.value.splice(i,1);}}return vue_cjs_prod$1.provide(u,{register:n,slot:t,name:o,props:s}),vue_cjs_prod$1.computed(()=>e.value.length>0?e.value.join(" "):void 0)}let S=vue_cjs_prod$1.defineComponent({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t$1,{attrs:o,slots:s}){let e=b(),n=`headlessui-description-${t()}`;return vue_cjs_prod$1.onMounted(()=>vue_cjs_prod$1.onUnmounted(e.register(n))),()=>{let{name:r="Description",slot:i=vue_cjs_prod$1.ref({}),props:l={}}=e,c=t$1,d={...Object.entries(l).reduce((f,[a,g])=>Object.assign(f,{[a]:vue_cjs_prod$1.unref(g)}),{}),id:n};return P$4({ourProps:d,theirProps:c,slot:i.value,attrs:o,slots:s,name:r})}}});

var ge=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ge||{});let M=Symbol("DialogContext");function R(a){let n=vue_cjs_prod$1.inject(M,null);if(n===null){let t=new Error(`<${a} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return n}let T="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ae=vue_cjs_prod$1.defineComponent({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:T},initialFocus:{type:Object,default:null}},emits:{close:a=>!0},setup(a,{emit:n,attrs:t$1,slots:u,expose:i}){var A;let d=vue_cjs_prod$1.ref(!1);vue_cjs_prod$1.onMounted(()=>{d.value=!0;});let r=vue_cjs_prod$1.ref(0),p=p$4(),h=vue_cjs_prod$1.computed(()=>a.open===T&&p!==null?u$4(p.value,{[l$2.Open]:!0,[l$2.Closed]:!1}):a.open),E=vue_cjs_prod$1.ref(new Set),f=vue_cjs_prod$1.ref(null),B=vue_cjs_prod$1.ref(null),k=vue_cjs_prod$1.computed(()=>e$1());if(i({el:f,$el:f}),!(a.open!==T||p!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof h.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value===T?void 0:a.open}`);let c$1=vue_cjs_prod$1.computed(()=>d.value&&h.value?0:1),$=vue_cjs_prod$1.computed(()=>c$1.value===0),C=vue_cjs_prod$1.computed(()=>r.value>1),Y=vue_cjs_prod$1.inject(M,null)!==null,q=vue_cjs_prod$1.computed(()=>C.value?"parent":"leaf");g$2(f,vue_cjs_prod$1.computed(()=>C.value?$.value:!1)),s({type:"Dialog",element:f,onUpdate:(o,l,e)=>{if(l==="Dialog")return u$4(o,{[c.Add](){E.value.add(e),r.value+=1;},[c.Remove](){E.value.delete(e),r.value-=1;}})}});let G=P$1({name:"DialogDescription",slot:vue_cjs_prod$1.computed(()=>({open:h.value}))}),z=`headlessui-dialog-${t()}`,w=vue_cjs_prod$1.ref(null),y={titleId:w,panelRef:vue_cjs_prod$1.ref(null),dialogState:c$1,setTitleId(o){w.value!==o&&(w.value=o);},close(){n("close",!1);}};return vue_cjs_prod$1.provide(M,y),T$1(()=>{var l,e,m;return [...Array.from((e=(l=k.value)==null?void 0:l.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?e:[]).filter(s=>!(!(s instanceof HTMLElement)||s.contains(o(B))||y.panelRef.value&&s.contains(y.panelRef.value))),(m=y.panelRef.value)!=null?m:f.value]},(o,l)=>{y.close(),vue_cjs_prod$1.nextTick(()=>l==null?void 0:l.focus());},vue_cjs_prod$1.computed(()=>c$1.value===0&&!C.value)),r$2((A=k.value)==null?void 0:A.defaultView),vue_cjs_prod$1.watchEffect(o=>{var j;if(c$1.value!==0||Y)return;let l=k.value;if(!l)return;let e=l==null?void 0:l.documentElement,m=(j=l.defaultView)!=null?j:window,s=e.style.overflow,J=e.style.paddingRight,H=m.innerWidth-e.clientWidth;if(e.style.overflow="hidden",H>0){let Q=e.clientWidth-e.offsetWidth,X=H-Q;e.style.paddingRight=`${X}px`;}o(()=>{e.style.overflow=s,e.style.paddingRight=J;});}),vue_cjs_prod$1.watchEffect(o$1=>{if(c$1.value!==0)return;let l=o(f);if(!l)return;let e=new IntersectionObserver(m=>{for(let s of m)s.boundingClientRect.x===0&&s.boundingClientRect.y===0&&s.boundingClientRect.width===0&&s.boundingClientRect.height===0&&y.close();});e.observe(l),o$1(()=>e.disconnect());}),()=>{let o={...t$1,ref:f,id:z,role:"dialog","aria-modal":c$1.value===0?!0:void 0,"aria-labelledby":w.value,"aria-describedby":G.value},{open:l,initialFocus:e,...m}=a,s={open:c$1.value===0};return vue_cjs_prod$1.h(P$2,{force:!0},()=>[vue_cjs_prod$1.h(R$1,()=>vue_cjs_prod$1.h(L$1,{target:f.value},()=>vue_cjs_prod$1.h(P$2,{force:!1},()=>vue_cjs_prod$1.h(V,{initialFocus:e,containers:E,features:$.value?u$4(q.value,{parent:V.features.RestoreFocus,leaf:V.features.All&~V.features.FocusLock}):V.features.None},()=>P$4({ourProps:o,theirProps:m,slot:s,attrs:t$1,slots:u,visible:c$1.value===0,features:R$2.RenderStrategy|R$2.Static,name:"Dialog"}))))),vue_cjs_prod$1.h(m$1,{features:p$2.Hidden,ref:B})])}}});vue_cjs_prod$1.defineComponent({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:n,slots:t$1}){let u=R("DialogOverlay"),i=`headlessui-dialog-overlay-${t()}`;function d(r){r.target===r.currentTarget&&(r.preventDefault(),r.stopPropagation(),u.close());}return ()=>P$4({ourProps:{id:i,"aria-hidden":!0,onClick:d},theirProps:a,slot:{open:u.dialogState.value===0},attrs:n,slots:t$1,name:"DialogOverlay"})}});vue_cjs_prod$1.defineComponent({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(a,{attrs:n,slots:t$1,expose:u}){let i=R("DialogBackdrop"),d=`headlessui-dialog-backdrop-${t()}`,r=vue_cjs_prod$1.ref(null);return u({el:r,$el:r}),vue_cjs_prod$1.onMounted(()=>{if(i.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let p=a,h={id:d,ref:r,"aria-hidden":!0};return vue_cjs_prod$1.h(P$2,{force:!0},()=>vue_cjs_prod$1.h(R$1,()=>P$4({ourProps:h,theirProps:{...n,...p},slot:{open:i.dialogState.value===0},attrs:n,slots:t$1,name:"DialogBackdrop"})))}}});let Le=vue_cjs_prod$1.defineComponent({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:n,slots:t$1,expose:u}){let i=R("DialogPanel"),d=`headlessui-dialog-panel-${t()}`;u({el:i.panelRef,$el:i.panelRef});function r(p){p.stopPropagation();}return ()=>{let p={id:d,ref:i.panelRef,onClick:r};return P$4({ourProps:p,theirProps:a,slot:{open:i.dialogState.value===0},attrs:n,slots:t$1,name:"DialogPanel"})}}}),We=vue_cjs_prod$1.defineComponent({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(a,{attrs:n,slots:t$1}){let u=R("DialogTitle"),i=`headlessui-dialog-title-${t()}`;return vue_cjs_prod$1.onMounted(()=>{u.setTitleId(i),vue_cjs_prod$1.onUnmounted(()=>u.setTitleId(null));}),()=>P$4({ourProps:{id:i},theirProps:a,slot:{open:u.dialogState.value===0},attrs:n,slots:t$1,name:"DialogTitle"})}});S;

var W=(i=>(i[i.Open=0]="Open",i[i.Closed=1]="Closed",i))(W||{}),J=(i=>(i[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i))(J||{});function z(l){requestAnimationFrame(()=>requestAnimationFrame(l));}let E=Symbol("MenuContext");function D(l){let S=vue_cjs_prod$1.inject(E,null);if(S===null){let i=new Error(`<${l} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,D),i}return S}let fe$1=vue_cjs_prod$1.defineComponent({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:S,attrs:i}){let v=vue_cjs_prod$1.ref(1),e=vue_cjs_prod$1.ref(null),p=vue_cjs_prod$1.ref(null),u=vue_cjs_prod$1.ref([]),f=vue_cjs_prod$1.ref(""),d=vue_cjs_prod$1.ref(null),I=vue_cjs_prod$1.ref(1);function o$1(r=a=>a){let a=d.value!==null?u.value[d.value]:null,n=w$1(r(u.value.slice()),b=>o(b.dataRef.domRef)),s=a?n.indexOf(a):null;return s===-1&&(s=null),{items:n,activeItemIndex:s}}let t={menuState:v,buttonRef:e,itemsRef:p,items:u,searchQuery:f,activeItemIndex:d,activationTrigger:I,closeMenu:()=>{v.value=1,d.value=null;},openMenu:()=>v.value=0,goToItem(r,a,n){let s=o$1(),b=x(r===a$2.Specific?{focus:a$2.Specific,id:a}:{focus:r},{resolveItems:()=>s.items,resolveActiveIndex:()=>s.activeItemIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.disabled});f.value="",d.value=b,I.value=n!=null?n:1,u.value=s.items;},search(r){let n=f.value!==""?0:1;f.value+=r.toLowerCase();let b=(d.value!==null?u.value.slice(d.value+n).concat(u.value.slice(0,d.value+n)):u.value).find(w=>w.dataRef.textValue.startsWith(f.value)&&!w.dataRef.disabled),h=b?u.value.indexOf(b):-1;h===-1||h===d.value||(d.value=h,I.value=1);},clearSearch(){f.value="";},registerItem(r,a){let n=o$1(s=>[...s,{id:r,dataRef:a}]);u.value=n.items,d.value=n.activeItemIndex,I.value=1;},unregisterItem(r){let a=o$1(n=>{let s=n.findIndex(b=>b.id===r);return s!==-1&&n.splice(s,1),n});u.value=a.items,d.value=a.activeItemIndex,I.value=1;}};return T$1([e,p],(r,a)=>{var n;t.closeMenu(),F$2(a,M$1.Loose)||(r.preventDefault(),(n=o(e))==null||n.focus());},vue_cjs_prod$1.computed(()=>v.value===0)),vue_cjs_prod$1.provide(E,t),c$3(vue_cjs_prod$1.computed(()=>u$4(v.value,{[0]:l$2.Open,[1]:l$2.Closed}))),()=>{let r={open:v.value===0};return P$4({ourProps:{},theirProps:l,slot:r,slots:S,attrs:i,name:"Menu"})}}}),me=vue_cjs_prod$1.defineComponent({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(l,{attrs:S,slots:i,expose:v}){let e=D("MenuButton"),p=`headlessui-menu-button-${t()}`;v({el:e.buttonRef,$el:e.buttonRef});function u(o$2){switch(o$2.key){case o$1.Space:case o$1.Enter:case o$1.ArrowDown:o$2.preventDefault(),o$2.stopPropagation(),e.openMenu(),vue_cjs_prod$1.nextTick(()=>{var t;(t=o(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(a$2.First);});break;case o$1.ArrowUp:o$2.preventDefault(),o$2.stopPropagation(),e.openMenu(),vue_cjs_prod$1.nextTick(()=>{var t;(t=o(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(a$2.Last);});break}}function f(o){switch(o.key){case o$1.Space:o.preventDefault();break}}function d(o$1){l.disabled||(e.menuState.value===0?(e.closeMenu(),vue_cjs_prod$1.nextTick(()=>{var t;return (t=o(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(o$1.preventDefault(),e.openMenu(),z(()=>{var t;return (t=o(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})));}let I=b$2(vue_cjs_prod$1.computed(()=>({as:l.as,type:S.type})),e.buttonRef);return ()=>{var a;let o$1={open:e.menuState.value===0},t={ref:e.buttonRef,id:p,type:I.value,"aria-haspopup":!0,"aria-controls":(a=o(e.itemsRef))==null?void 0:a.id,"aria-expanded":l.disabled?void 0:e.menuState.value===0,onKeydown:u,onKeyup:f,onClick:d};return P$4({ourProps:t,theirProps:l,slot:o$1,attrs:S,slots:i,name:"MenuButton"})}}}),pe=vue_cjs_prod$1.defineComponent({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(l,{attrs:S,slots:i,expose:v}){let e=D("MenuItems"),p=`headlessui-menu-items-${t()}`,u=vue_cjs_prod$1.ref(null);v({el:e.itemsRef,$el:e.itemsRef}),p$3({container:vue_cjs_prod$1.computed(()=>o(e.itemsRef)),enabled:vue_cjs_prod$1.computed(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none");}});function f(t){var r;switch(u.value&&clearTimeout(u.value),t.key){case o$1.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case o$1.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let n=e.items.value[e.activeItemIndex.value];(r=o(n.dataRef.domRef))==null||r.click();}e.closeMenu(),vue_cjs_prod$1.nextTick(()=>{var a;return (a=o(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})});break;case o$1.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(a$2.Next);case o$1.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(a$2.Previous);case o$1.Home:case o$1.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(a$2.First);case o$1.End:case o$1.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(a$2.Last);case o$1.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),vue_cjs_prod$1.nextTick(()=>{var a;return (a=o(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})});break;case o$1.Tab:t.preventDefault(),t.stopPropagation();break;default:t.key.length===1&&(e.search(t.key),u.value=setTimeout(()=>e.clearSearch(),350));break}}function d(t){switch(t.key){case o$1.Space:t.preventDefault();break}}let I=p$4(),o$2=vue_cjs_prod$1.computed(()=>I!==null?I.value===l$2.Open:e.menuState.value===0);return ()=>{var n,s;let t={open:e.menuState.value===0},r={"aria-activedescendant":e.activeItemIndex.value===null||(n=e.items.value[e.activeItemIndex.value])==null?void 0:n.id,"aria-labelledby":(s=o(e.buttonRef))==null?void 0:s.id,id:p,onKeydown:f,onKeyup:d,role:"menu",tabIndex:0,ref:e.itemsRef};return P$4({ourProps:r,theirProps:l,slot:t,attrs:S,slots:i,features:R$2.RenderStrategy|R$2.Static,visible:o$2.value,name:"MenuItems"})}}}),ve=vue_cjs_prod$1.defineComponent({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(l,{slots:S,attrs:i,expose:v}){let e=D("MenuItem"),p=`headlessui-menu-item-${t()}`,u=vue_cjs_prod$1.ref(null);v({el:u,$el:u});let f=vue_cjs_prod$1.computed(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===p:!1),d=vue_cjs_prod$1.computed(()=>({disabled:l.disabled,textValue:"",domRef:u}));vue_cjs_prod$1.onMounted(()=>{var n,s;let a=(s=(n=o(u))==null?void 0:n.textContent)==null?void 0:s.toLowerCase().trim();a!==void 0&&(d.value.textValue=a);}),vue_cjs_prod$1.onMounted(()=>e.registerItem(p,d)),vue_cjs_prod$1.onUnmounted(()=>e.unregisterItem(p)),vue_cjs_prod$1.watchEffect(()=>{e.menuState.value===0&&(!f.value||e.activationTrigger.value!==0&&vue_cjs_prod$1.nextTick(()=>{var a,n;return (n=(a=o(u))==null?void 0:a.scrollIntoView)==null?void 0:n.call(a,{block:"nearest"})}));});function I(a){if(l.disabled)return a.preventDefault();e.closeMenu(),vue_cjs_prod$1.nextTick(()=>{var n;return (n=o(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})});}function o$1(){if(l.disabled)return e.goToItem(a$2.Nothing);e.goToItem(a$2.Specific,p);}function t$1(){l.disabled||f.value||e.goToItem(a$2.Specific,p,0);}function r(){l.disabled||!f.value||e.goToItem(a$2.Nothing);}return ()=>{let{disabled:a}=l,n={active:f.value,disabled:a};return P$4({ourProps:{id:p,ref:u,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,onClick:I,onFocus:o$1,onPointermove:t$1,onMousemove:t$1,onPointerleave:r,onMouseleave:r},theirProps:l,slot:n,attrs:i,slots:S,name:"MenuItem"})}}});

let a=Symbol("LabelContext");function p(){let t=vue_cjs_prod$1.inject(a,null);if(t===null){let n=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,p),n}return t}function K$1({slot:t={},name:n="Label",props:i={}}={}){let e=vue_cjs_prod$1.ref([]);function r(o){return e.value.push(o),()=>{let l=e.value.indexOf(o);l!==-1&&e.value.splice(l,1);}}return vue_cjs_prod$1.provide(a,{register:r,slot:t,name:n,props:i}),vue_cjs_prod$1.computed(()=>e.value.length>0?e.value.join(" "):void 0)}let P=vue_cjs_prod$1.defineComponent({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t$1,{slots:n,attrs:i}){let e=p(),r=`headlessui-label-${t()}`;return vue_cjs_prod$1.onMounted(()=>vue_cjs_prod$1.onUnmounted(e.register(r))),()=>{let{name:o="Label",slot:l={},props:d={}}=e,{passive:c,...s}=t$1,u={...Object.entries(d).reduce((f,[b,m])=>Object.assign(f,{[b]:vue_cjs_prod$1.unref(m)}),{}),id:r};return c&&(delete u.onClick,delete s.onClick),P$4({ourProps:u,theirProps:s,slot:l,attrs:i,slots:n,name:o})}}});

let h=Symbol("GroupContext");vue_cjs_prod$1.defineComponent({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:a,attrs:n}){let r=vue_cjs_prod$1.ref(null),u=K$1({name:"SwitchLabel",props:{onClick(){!r.value||(r.value.click(),r.value.focus({preventScroll:!0}));}}}),t=P$1({name:"SwitchDescription"});return vue_cjs_prod$1.provide(h,{switchRef:r,labelledby:u,describedby:t}),()=>P$4({theirProps:l,ourProps:{},slot:{},slots:a,attrs:n,name:"SwitchGroup"})}});let Y=vue_cjs_prod$1.defineComponent({name:"Switch",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(l,{emit:a,attrs:n,slots:r,expose:u}){let t$1=vue_cjs_prod$1.inject(h,null),p=`headlessui-switch-${t()}`;function s(){a("update:modelValue",!l.modelValue);}let b=vue_cjs_prod$1.ref(null),i=t$1===null?b:t$1.switchRef,S=b$2(vue_cjs_prod$1.computed(()=>({as:l.as,type:n.type})),i);u({el:i,$el:i});function w(e){e.preventDefault(),s();}function v(e){e.key===o$1.Space?(e.preventDefault(),s()):e.key===o$1.Enter&&p$1(e.currentTarget);}function R(e){e.preventDefault();}return ()=>{let{name:e,value:g,modelValue:o,...k}=l,D={checked:o},K={id:p,ref:i,role:"switch",type:S.value,tabIndex:0,"aria-checked":o,"aria-labelledby":t$1==null?void 0:t$1.labelledby.value,"aria-describedby":t$1==null?void 0:t$1.describedby.value,onClick:w,onKeyup:v,onKeypress:R};return vue_cjs_prod$1.h(vue_cjs_prod$1.Fragment,[e!=null&&o!=null?vue_cjs_prod$1.h(m$1,A$1({features:p$2.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o,name:e,value:g})):null,P$4({ourProps:K,theirProps:{...n,...k},slot:D,attrs:n,slots:r,name:"Switch"})])}}});P;S;

function l(r){let e={called:!1};return (...t)=>{if(!e.called)return e.called=!0,r(...t)}}

function r(){let i=[],o=[],t={enqueue(e){o.push(e);},requestAnimationFrame(...e){let a=requestAnimationFrame(...e);t.add(()=>cancelAnimationFrame(a));},nextFrame(...e){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...e);});},setTimeout(...e){let a=setTimeout(...e);t.add(()=>clearTimeout(a));},add(e){i.push(e);},dispose(){for(let e of i.splice(0))e();},async workQueue(){for(let e of o.splice(0))await e();}};return t}

function m(e,...t){e&&t.length>0&&e.classList.add(...t);}function d$1(e,...t){e&&t.length>0&&e.classList.remove(...t);}var g=(i=>(i.Finished="finished",i.Cancelled="cancelled",i))(g||{});function F$1(e,t){let i=r();if(!e)return i.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,s]=[n,a].map(o=>{let[u=0]=o.split(",").filter(Boolean).map(r=>r.includes("ms")?parseFloat(r):parseFloat(r)*1e3).sort((r,c)=>c-r);return u});return l!==0?i.setTimeout(()=>t("finished"),l+s):t("finished"),i.add(()=>t("cancelled")),i.dispose}function L(e,t,i,n,a,l$1){let s=r(),o=l$1!==void 0?l(l$1):()=>{};return d$1(e,...a),m(e,...t,...i),s.nextFrame(()=>{d$1(e,...i),m(e,...n),s.add(F$1(e,u=>(d$1(e,...n,...t),m(e,...a),o(u))));}),s.add(()=>d$1(e,...t,...i,...n,...a)),s.add(()=>o("cancelled")),s.dispose}

function d(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let B=Symbol("TransitionContext");var ae=(a=>(a.Visible="visible",a.Hidden="hidden",a))(ae||{});function le(){return vue_cjs_prod$1.inject(B,null)!==null}function ie(){let e=vue_cjs_prod$1.inject(B,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function se(){let e=vue_cjs_prod$1.inject(F,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let F=Symbol("NestingContext");function w(e){return "children"in e?w(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function K(e){let t=vue_cjs_prod$1.ref([]),a=vue_cjs_prod$1.ref(!1);vue_cjs_prod$1.onMounted(()=>a.value=!0),vue_cjs_prod$1.onUnmounted(()=>a.value=!1);function s(r,n=O$1.Hidden){let l=t.value.findIndex(({id:i})=>i===r);l!==-1&&(u$4(n,{[O$1.Unmount](){t.value.splice(l,1);},[O$1.Hidden](){t.value[l].state="hidden";}}),!w(t)&&a.value&&(e==null||e()));}function v(r){let n=t.value.find(({id:l})=>l===r);return n?n.state!=="visible"&&(n.state="visible"):t.value.push({id:r,state:"visible"}),()=>s(r,O$1.Unmount)}return {children:t,register:v,unregister:s}}let _=R$2.RenderStrategy,oe=vue_cjs_prod$1.defineComponent({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t$1,attrs:a,slots:s,expose:v}){if(!le()&&f())return ()=>vue_cjs_prod$1.h(fe,{...e,onBeforeEnter:()=>t$1("beforeEnter"),onAfterEnter:()=>t$1("afterEnter"),onBeforeLeave:()=>t$1("beforeLeave"),onAfterLeave:()=>t$1("afterLeave")},s);let r=vue_cjs_prod$1.ref(null),n=vue_cjs_prod$1.ref("visible"),l=vue_cjs_prod$1.computed(()=>e.unmount?O$1.Unmount:O$1.Hidden);v({el:r,$el:r});let{show:i,appear:x}=ie(),{register:g$1,unregister:p}=se(),R={value:!0},m=t(),S={value:!1},N=K(()=>{S.value||(n.value="hidden",p(m),t$1("afterLeave"));});vue_cjs_prod$1.onMounted(()=>{let o=g$1(m);vue_cjs_prod$1.onUnmounted(o);}),vue_cjs_prod$1.watchEffect(()=>{if(l.value===O$1.Hidden&&!!m){if(i&&n.value!=="visible"){n.value="visible";return}u$4(n.value,{["hidden"]:()=>p(m),["visible"]:()=>g$1(m)});}});let k=d(e.enter),$=d(e.enterFrom),q=d(e.enterTo),O=d(e.entered),z=d(e.leave),G=d(e.leaveFrom),J=d(e.leaveTo);vue_cjs_prod$1.onMounted(()=>{vue_cjs_prod$1.watchEffect(()=>{if(n.value==="visible"){let o$1=o(r);if(o$1 instanceof Comment&&o$1.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}});});function Q(o$1){let c=R.value&&!x.value,u=o(r);!u||!(u instanceof HTMLElement)||c||(S.value=!0,i.value&&t$1("beforeEnter"),i.value||t$1("beforeLeave"),o$1(i.value?L(u,k,$,q,O,C=>{S.value=!1,C===g.Finished&&t$1("afterEnter");}):L(u,z,G,J,O,C=>{S.value=!1,C===g.Finished&&(w(N)||(n.value="hidden",p(m),t$1("afterLeave")));})));}return vue_cjs_prod$1.onMounted(()=>{vue_cjs_prod$1.watch([i],(o,c,u)=>{Q(u),R.value=!1;},{immediate:!0});}),vue_cjs_prod$1.provide(F,N),c$3(vue_cjs_prod$1.computed(()=>u$4(n.value,{["visible"]:l$2.Open,["hidden"]:l$2.Closed}))),()=>{let{appear:o,show:c,enter:u,enterFrom:C,enterTo:de,entered:ve,leave:pe,leaveFrom:me,leaveTo:Te,...W}=e;return P$4({theirProps:W,ourProps:{ref:r},slot:{},slots:s,attrs:a,features:_,visible:n.value==="visible",name:"TransitionChild"})}}}),ue=oe,fe=vue_cjs_prod$1.defineComponent({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:s}){let v=p$4(),r=vue_cjs_prod$1.computed(()=>e.show===null&&v!==null?u$4(v.value,{[l$2.Open]:!0,[l$2.Closed]:!1}):e.show);vue_cjs_prod$1.watchEffect(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let n=vue_cjs_prod$1.ref(r.value?"visible":"hidden"),l=K(()=>{n.value="hidden";}),i=vue_cjs_prod$1.ref(!0),x={show:r,appear:vue_cjs_prod$1.computed(()=>e.appear||!i.value)};return vue_cjs_prod$1.onMounted(()=>{vue_cjs_prod$1.watchEffect(()=>{i.value=!1,r.value?n.value="visible":w(l)||(n.value="hidden");});}),vue_cjs_prod$1.provide(F,l),vue_cjs_prod$1.provide(B,x),()=>{let g=N$2(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return P$4({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...s,default:()=>[vue_cjs_prod$1.h(ue,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...p,...g},s.default)]},attrs:{},features:_,visible:n.value==="visible",name:"Transition"})}}});

var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vue_cjs_prod = {};
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style: style2 } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style2) {
    props.style = normalizeStyle(style2);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject$1;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var compilerDom = require$$0;
  var runtimeDom = require$$1;
  var shared = shared_cjs_prod;
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = /* @__PURE__ */ Object.create(null);
    if (e) {
      Object.keys(e).forEach(function(k) {
        n[k] = e[k];
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var runtimeDom__namespace = /* @__PURE__ */ _interopNamespace(runtimeDom);
  const compileCache = /* @__PURE__ */ Object.create(null);
  function compileToFunction(template, options) {
    if (!shared.isString(template)) {
      if (template.nodeType) {
        template = template.innerHTML;
      } else {
        return shared.NOOP;
      }
    }
    const key = template;
    const cached = compileCache[key];
    if (cached) {
      return cached;
    }
    if (template[0] === "#") {
      const el = document.querySelector(template);
      template = el ? el.innerHTML : ``;
    }
    const { code } = compilerDom.compile(template, shared.extend({
      hoistStatic: true,
      onError: void 0,
      onWarn: shared.NOOP
    }, options));
    const render = new Function("Vue", code)(runtimeDom__namespace);
    render._rc = true;
    return compileCache[key] = render;
  }
  runtimeDom.registerRuntimeCompiler(compileToFunction);
  Object.keys(runtimeDom).forEach(function(k) {
    if (k !== "default")
      exports[k] = runtimeDom[k];
  });
  exports.compile = compileToFunction;
})(vue_cjs_prod);
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = vue_cjs_prod.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var vueRouter_cjs_prod = { exports: {} };
var vueRouter_prod = {};
/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = vue_cjs_prod;
  function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module";
  }
  const assign2 = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = isArray2(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop2 = () => {
  };
  const isArray2 = Array.isArray;
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const hashPos = location2.indexOf("#");
    let searchPos = location2.indexOf("?");
    if (hashPos < searchPos && hashPos >= 0) {
      searchPos = -1;
    }
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return isArray2(a) ? isEquivalentArray(a, b) : isArray2(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return isArray2(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (segment === ".")
        continue;
      if (segment === "..") {
        if (position > 1)
          position--;
      } else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index = listeners.indexOf(callback);
        if (index > -1)
          listeners.splice(index, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign2({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign2({}, history2.state, buildState(
        historyState.value.back,
        to,
        historyState.value.forward,
        true
      ), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign2(
        {},
        historyState.value,
        history2.state,
        {
          forward: to,
          scroll: computeScrollPosition()
        }
      );
      changeLocation(currentState.current, currentState, true);
      const state = assign2({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign2({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index = listeners.indexOf(callback);
          if (index > -1)
            listeners.splice(index, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = Symbol("");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign2(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign2({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (isArray2(param) && !repeatable) {
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            }
            const text = isArray2(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path || "/";
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore))
        return 1;
      if (isLastScoreNegative(bScore))
        return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign2(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign2({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if (mainNormalizedRecord.children) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop2;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index = matchers.indexOf(matcherRef);
        if (index > -1) {
          matchers.splice(index, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign2(
          paramsFromLocation(
            currentLocation.params,
            matcher.keys.filter((k) => !k.optional).map((k) => k.name)
          ),
          location2.params
        );
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign2({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || null : record.component && { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign2(meta2, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!isArray2(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = isArray2(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = isArray2(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  const matchedRouteKey = Symbol("");
  const viewDepthKey = Symbol("");
  const routerKey = Symbol("");
  const routeLocationKey = Symbol("");
  const routerViewLocationKey = Symbol("");
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(
      matchedRouteKey,
      {}
    ).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(
      matchedRouteKey,
      {}
    ).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false) {
          reject(createRouterError(4, {
            from,
            to
          }));
        } else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
            enterCallbackArray.push(valid);
          }
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function loadRouteLocation(route) {
    return route.matched.every((record) => record.redirect) ? Promise.reject(new Error("Cannot load a route that redirects.")) : Promise.all(route.matched.map((record) => record.components && Promise.all(Object.keys(record.components).reduce((promises, name) => {
      const rawComponent = record.components[name];
      if (typeof rawComponent === "function" && !("displayName" in rawComponent)) {
        promises.push(rawComponent().then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          return;
        }));
      }
      return promises;
    }, [])))).then(() => route);
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index > -1)
        return index;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](
          vue.unref(props.to)
        ).catch(noop2);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!isArray2(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const injectedDepth = vue.inject(viewDepthKey, 0);
      const depth = vue.computed(() => {
        let initialDepth = vue.unref(injectedDepth);
        const { matched } = routeToDisplay.value;
        let matchedRoute;
        while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
          initialDepth++;
        }
        return initialDepth;
      });
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth.value]);
      vue.provide(viewDepthKey, vue.computed(() => depth.value + 1));
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const currentName = props.name;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[currentName];
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[currentName];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign2({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign2({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign2(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign2({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign2({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign2({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign2({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign2({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign2({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign2(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign2({
          query: to.query,
          hash: to.hash,
          params: "path" in newTargetLocation ? {} : to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(
          assign2(locationAsObject(shouldRedirect), {
            state: data,
            force,
            replace: replace2
          }),
          redirectedFrom || targetLocation
        );
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(
              assign2({
                replace: replace2
              }, locationAsObject(failure2.to), {
                state: data,
                force
              }),
              redirectedFrom || toLocation
            );
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (isArray2(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign2({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        if (!router.listening)
          return;
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign2(shouldRedirect, { replace: true }), toLocation).catch(noop2);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(
              error.to,
              toLocation
            ).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop2);
            return Promise.reject();
          }
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          }
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(
            toLocation,
            from,
            false
          );
          if (failure) {
            if (info.delta && !isNavigationFailure(failure, 8)) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop2);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      listening: true,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute2() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.loadRouteLocation = loadRouteLocation;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute2;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_prod);
(function(module) {
  module.exports = vueRouter_prod;
})(vueRouter_cjs_prod);
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => vue_cjs_prod.toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (vue_cjs_prod.getCurrentInstance()) {
    return vue_cjs_prod.inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return vue_cjs_prod.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return vue_cjs_prod.h(
            vue_cjs_prod.resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return vue_cjs_prod.h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$5 = defineNuxtLink({ componentName: "NuxtLink" });
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
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
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title != null ? title : "");
  }
  return template(vue_cjs_prod.unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a, _b;
  const head = document2.head;
  const body = document2.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a2;
    return {
      element: createElement(tag.tag, tag.props, document2),
      body: (_a2 = tag.props.body) != null ? _a2 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(vue_cjs_prod.shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => vue_cjs_prod.unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(vue_cjs_prod.unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta2 = renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script2) => ({
    script: [script2]
  }))
});
const NoScript = vue_cjs_prod.defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style2 = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style2.children = textContent;
    }
    return {
      style: [style2]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  NoScript,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "meta": [{ "property": "og:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "og:type", "content": "product" }, { "property": "og:description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "property": "twitter:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "twitter:description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "property": "og:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "name": "twitter:card", "content": "summary" }], "link": [{ "rel": "icon", "type": "image/png", "href": "/favicon-32x32.png" }], "style": [], "script": [], "noscript": [], "titleTemplate": "UMaestro - %s", "bodyAttrs": { "class": "bg-background dark:bg-dark-950 dark:text-white transition ease-in duration-100" }, "charset": "utf-8", "viewport": "width=device-width, initial-scale=1" } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2 = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw({ title: "", ...metaConfig.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.exports.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          return _wrapIf(
            vue_cjs_prod.Transition,
            (_a = routeProps.route.meta.pageTransition) != null ? _a : defaultPageTransition,
            wrapInKeepAlive(
              routeProps.route.meta.keepalive,
              isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(Component, { key, routeProps, pageKey: key }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => vue_cjs_prod.h(Component, { key, routeProps, pageKey: key }) })
            )
          ).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const Component = vue_cjs_prod.defineComponent({
  props: ["routeProps", "pageKey"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = vue_cjs_prod.computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    vue_cjs_prod.provide("_route", vue_cjs_prod.reactive(route));
    return () => vue_cjs_prod.h(props.routeProps.Component);
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$u = {
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    big: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("change", e.target.value);
    }
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><input${serverRenderer.exports.ssrRenderAttr("placeholder", $props.placeholder)} type="text" class="${serverRenderer.exports.ssrRenderClass([[$props.big ? "px-6 py-5 text-md" : "px-6 py-4 text-sm", $props.white ? "bg-white text-black" : "bg-transparent focus:bg-white dark:focus:bg-dark-900 border-dark-800 focus:border-primary-500", $props.classes], "text-sm w-full border focus:outline-none rounded-lg"])}"${serverRenderer.exports.ssrRenderAttr("value", $props.modelValue)}${serverRenderer.exports.ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""}></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __nuxt_component_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$t = {
  data: () => ({
    btnColors: {
      transparent: "bg-transparent shadow-none",
      primary: "bg-primary-500 hover:bg-primary-400 text-white",
      secondary: "bg-secondary-500 hover:bg-secondary-600 text-black",
      white: "bg-white hover:bg-gray-100 text-black",
      blurple: "bg-blurple text-white",
      yellow: "bg-yellow-500 text-white hover:bg-white hover:text-black",
      red: "bg-red-500 text-white",
      disabled: "bg-gray-200 text-black opacity-50",
      theme: "bg-white hover:bg-gray-100 dark:bg-dark-900 dark:hover:bg-dark-800"
    }
  }),
  props: {
    color: {
      type: String,
      default: "secondary"
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    small: {
      type: Boolean,
      default: false
    },
    centerText: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colors() {
      return this.disabled ? this.btnColors["disabled"] : this.btnColors[this.color];
    }
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: ["rounded-md font-medium text-base flex items-center shadow-xl ease-in duration-300", [$options.colors, $props.small ? "px-5 py-3" : "px-6 py-4", $props.centerText && "justify-center"]]
  }, _attrs))}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "icon_left", {}, null, _push, _parent);
  _push(`<span class="${serverRenderer.exports.ssrRenderClass(["whitespace-pre-line", $props.centerText ? "text-center" : "text-left"])}">${serverRenderer.exports.ssrInterpolate($props.text)}</span>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "icon_right", {}, null, _push, _parent);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$r]]);
const axios2 = axios.create({
  baseURL: "https://api.umaestro.fr/"
});
const isVue2 = false;
/*!
  * pinia v2.0.20
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = vue_cjs_prod.effectScope(true);
  const state = scope.run(() => vue_cjs_prod.ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = vue_cjs_prod.markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && vue_cjs_prod.getCurrentInstance()) {
    vue_cjs_prod.onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue_cjs_prod.isRef(subPatch) && !vue_cjs_prod.isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(vue_cjs_prod.isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = vue_cjs_prod.toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = vue_cjs_prod.markRaw(vue_cjs_prod.computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let isSyncListening;
  let subscriptions = vue_cjs_prod.markRaw([]);
  let actionSubscriptions = vue_cjs_prod.markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  vue_cjs_prod.ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    vue_cjs_prod.nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => vue_cjs_prod.watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = vue_cjs_prod.reactive(assign(
    {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = vue_cjs_prod.effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (vue_cjs_prod.isRef(prop) && !isComputed(prop) || vue_cjs_prod.isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (vue_cjs_prod.isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(vue_cjs_prod.toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = vue_cjs_prod.getCurrentInstance();
    pinia = (pinia) || currentInstance && vue_cjs_prod.inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  getters: {
    getUser: async (state) => {
      if (state.isAuthenticated && !state.user) {
        try {
          const { data } = await axios2.get("/auth/user", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token")
            }
          });
          state.user = data.user;
        } catch (err) {
          state.isAuthenticated = false;
          localStorage.removeItem("access_token");
          return;
        }
      }
      return state.user;
    }
  },
  actions: {
    hasToken() {
      this.isAuthenticated = localStorage.getItem("access_token") ? true : false;
      return this.isAuthenticated;
    },
    login(user, token = null) {
      this.isAuthenticated = true;
      this.user = user;
      if (token) {
        localStorage.setItem("access_token", token);
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem("access_token");
    }
  }
});
const meta$e = {
  middleware: ["auth"]
};
const _sfc_main$s = {
  props: {
    reaction: {
      type: String,
      default: "poop"
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-gray-200 dark:bg-dark-700 px-4 py-3 rounded-full flex gap-2 items-center text-dark-900 dark:text-white text-md text-medium" }, _attrs))}><img class="w-6 h-6 object-contain"${serverRenderer.exports.ssrRenderAttr("src", `/objects/${$props.reaction}.png`)}> 54 </div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Reaction.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$q]]);
const meta$d = void 0;
const _sfc_main$r = {
  props: {
    color: {
      type: Boolean,
      default: true
    }
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: ["rounded-3xl shadow-lg cursor-pointer ease-in duration-300 hover:shadow-2xl hover:-translate-y-1 h-full", $props.color && "bg-white dark:bg-dark-900 hover:dark:bg-dark-800"]
  }, _attrs))}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$q = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Card = __nuxt_component_4$1;
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, vue_cjs_prod.mergeProps({ to: "/articles/slug" }, _attrs), {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Card, { class: "p-6" }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<header${_scopeId2}><img src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png" class="w-full rounded-xl max-h-52 object-cover" alt="Article Image"${_scopeId2}></header><main class="py-4"${_scopeId2}><div class="text-xl font-semibold mb-2"${_scopeId2}>Titre de l&#39;article</div><div class="text-md dark:text-gray-300"${_scopeId2}>Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro </div></main><footer${_scopeId2}><span class="text-sm dark:text-gray-400"${_scopeId2}>le 27/03/2022</span></footer>`);
            } else {
              return [
                vue_cjs_prod.createVNode("header", null, [
                  vue_cjs_prod.createVNode("img", {
                    src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                    class: "w-full rounded-xl max-h-52 object-cover",
                    alt: "Article Image"
                  })
                ]),
                vue_cjs_prod.createVNode("main", { class: "py-4" }, [
                  vue_cjs_prod.createVNode("div", { class: "text-xl font-semibold mb-2" }, "Titre de l'article"),
                  vue_cjs_prod.createVNode("div", { class: "text-md dark:text-gray-300" }, "Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro ")
                ]),
                vue_cjs_prod.createVNode("footer", null, [
                  vue_cjs_prod.createVNode("span", { class: "text-sm dark:text-gray-400" }, "le 27/03/2022")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Card, { class: "p-6" }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode("header", null, [
                vue_cjs_prod.createVNode("img", {
                  src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                  class: "w-full rounded-xl max-h-52 object-cover",
                  alt: "Article Image"
                })
              ]),
              vue_cjs_prod.createVNode("main", { class: "py-4" }, [
                vue_cjs_prod.createVNode("div", { class: "text-xl font-semibold mb-2" }, "Titre de l'article"),
                vue_cjs_prod.createVNode("div", { class: "text-md dark:text-gray-300" }, "Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro ")
              ]),
              vue_cjs_prod.createVNode("footer", null, [
                vue_cjs_prod.createVNode("span", { class: "text-sm dark:text-gray-400" }, "le 27/03/2022")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Thumbnails/Big.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$p = {
  props: {
    superSmall: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Card = __nuxt_component_4$1;
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, vue_cjs_prod.mergeProps({ to: "/articles/slug" }, _attrs), {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Card, { class: "flex p-6 gap-6" }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png" class="${serverRenderer.exports.ssrRenderClass([$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"])}" alt="Article Image"${_scopeId2}><div${_scopeId2}><div class="text-xl font-semibold mb-2"${_scopeId2}>Titre de l&#39;article</div><div class="text-md dark:text-gray-300"${_scopeId2}>Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro </div><span class="block text-sm dark:text-gray-400 mt-4"${_scopeId2}>le 27/03/2022</span></div>`);
            } else {
              return [
                vue_cjs_prod.createVNode("img", {
                  src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                  class: [$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"],
                  alt: "Article Image"
                }, null, 2),
                vue_cjs_prod.createVNode("div", null, [
                  vue_cjs_prod.createVNode("div", { class: "text-xl font-semibold mb-2" }, "Titre de l'article"),
                  vue_cjs_prod.createVNode("div", { class: "text-md dark:text-gray-300" }, "Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro "),
                  vue_cjs_prod.createVNode("span", { class: "block text-sm dark:text-gray-400 mt-4" }, "le 27/03/2022")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Card, { class: "flex p-6 gap-6" }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode("img", {
                src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                class: [$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"],
                alt: "Article Image"
              }, null, 2),
              vue_cjs_prod.createVNode("div", null, [
                vue_cjs_prod.createVNode("div", { class: "text-xl font-semibold mb-2" }, "Titre de l'article"),
                vue_cjs_prod.createVNode("div", { class: "text-md dark:text-gray-300" }, "Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro "),
                vue_cjs_prod.createVNode("span", { class: "block text-sm dark:text-gray-400 mt-4" }, "le 27/03/2022")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Thumbnails/Small.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$n]]);
const meta$c = void 0;
const meta$b = {
  layout: "empty"
};
const meta$a = {
  layout: "footer"
};
const meta$9 = void 0;
const _sfc_main$o = {
  __name: "Slider",
  __ssrInlineRender: true,
  props: { barStyle: Object, duration: { type: String, default: "12s" }, direction: { type: String, default: "normal" }, delay: { type: String, default: "0s" } },
  setup(__props) {
    const props = __props;
    const customStyle = vue_cjs_prod.computed(() => {
      return Object.assign({}, props.barStyle, { "animation-duration": props.duration, "animation-direction": props.direction, "animation-delay": props.delay });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: `vifnslb-container-${__props.direction === "vertical" ? "vertical" : "horizontal"}`
      }, _attrs))} data-v-57332792><div class="${serverRenderer.exports.ssrRenderClass(`vifnslb-element-${__props.direction === "vertical" ? "vertical" : "horizontal"}`)}" style="${serverRenderer.exports.ssrRenderStyle(vue_cjs_prod.unref(customStyle))}" data-v-57332792><!--[-->`);
      serverRenderer.exports.ssrRenderList(2, (i) => {
        _push(`<div class="${serverRenderer.exports.ssrRenderClass(`vifnslb-bar-${__props.direction === "vertical" ? "vertical" : "horizontal"}`)}" data-v-57332792>`);
        serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-57332792"]]);
const __nuxt_component_9 = vue_cjs_prod.defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = vue_cjs_prod.ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return vue_cjs_prod.createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const meta$8 = void 0;
const _sfc_main$n = {
  data: () => ({ Icons }),
  props: {
    icon: {
      type: String,
      default: "user"
    },
    name: {
      type: String,
      default: "Utilisateurs"
    },
    value: {
      default: 0
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "text-center" }, _attrs))}>`);
  serverRenderer.exports.ssrRenderVNode(_push, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(_ctx.Icons[$props.icon]), { class: "mx-auto w-12 h-12 mb-4" }, null), _parent);
  _push(`<div class="font-extrabold text-2xl">${serverRenderer.exports.ssrInterpolate($props.value)}</div><div class="text-lg">${serverRenderer.exports.ssrInterpolate($props.name)}</div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Stat.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$m = {
  props: {
    color: {
      type: String,
      default: "#9ca3af"
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    viewBox: "0 0 21 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path${serverRenderer.exports.ssrRenderAttr("fill", $props.color)} d="M20 8.09994C20.1 7.59994 19.7 6.99994 19.2 6.99994L13.5 6.19994L10.9 0.999938C10.8 0.799938 10.7 0.699938 10.5 0.599938C10 0.299938 9.4 0.499938 9.1 0.999938L6.6 6.19994L0.9 6.99994C0.6 6.99994 0.4 7.09994 0.3 7.29994C-0.1 7.69994 -0.1 8.29994 0.3 8.69994L4.4 12.6999L3.4 18.3999C3.4 18.5999 3.4 18.7999 3.5 18.9999C3.8 19.4999 4.4 19.6999 4.9 19.3999L10 16.6999L15.1 19.3999C15.2 19.4999 15.4 19.4999 15.6 19.4999C15.7 19.4999 15.7 19.4999 15.8 19.4999C16.3 19.3999 16.7 18.8999 16.6 18.2999L15.6 12.5999L19.7 8.59994C19.9 8.49994 20 8.29994 20 8.09994Z"></path></svg>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Star.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$l = {
  props: {
    rate: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  const _component_Star = __nuxt_component_1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-white dark:bg-dark-900 rounded-2xl shadow-sm p-8" }, _attrs))}><div class="flex gap-2 items-center font-medium"><img${serverRenderer.exports.ssrRenderAttr("src", ((_b = (_a = $props.rate) == null ? void 0 : _a.author) == null ? void 0 : _b.avatar) || "/default_avatar.svg")} class="w-8 h-8 rounded-full mr-2" alt="Avatar"> ${serverRenderer.exports.ssrInterpolate(((_d = (_c = $props.rate) == null ? void 0 : _c.author) == null ? void 0 : _d.username) || "Utilisateur supprim\xE9")} <span>-</span><div class="flex items-center gap-1"><!--[-->`);
  serverRenderer.exports.ssrRenderList(5, (i) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_Star, {
      class: "w-6",
      color: $props.rate.star >= i ? "#BB900D" : "#9ca3af",
      key: i
    }, null, _parent));
  });
  _push(`<!--]--></div></div><p class="text-gray-800 dark:text-gray-300 mt-4">${serverRenderer.exports.ssrInterpolate($props.rate.message)}</p><span class="block mt-4 text-sm text-gray-400">le ${serverRenderer.exports.ssrInterpolate(new Date($props.rate.created_at).toLocaleDateString("fr-FR"))}</span></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonial.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$k = {
  props: {
    tool: {
      type: Object,
      default: {
        name: "Unknown",
        description: "No",
        uuid: "badges_discord"
      }
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "relative transition ease-in duration-200 hover:-translate-y-4",
    id: "card"
  }, _attrs))}><img class="rounded-3xl w-full shadow-lg"${serverRenderer.exports.ssrRenderAttr("src", `/tools/${$props.tool.uuid}_${_ctx.$colorMode.value}.png`)}><div class="absolute rounded-3xl top-0 left-0 bg-gradient-to-t from-dark-950 to-dark-400 dark:to-dark-800 opacity-80 backdrop-blur-md h-full w-full flex flex-col justify-end p-8 gap-2"><div class="text-2xl font-semibold text-white">${serverRenderer.exports.ssrInterpolate($props.tool.name)}</div><div class="text-lg text-white">${serverRenderer.exports.ssrInterpolate($props.tool.description)}</div></div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/DefaultCard.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$j = {
  name: "Badges"
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsDefaultCard, vue_cjs_prod.mergeProps({ tool: {
    name: "Cr\xE9ateur de badges",
    description: "Cr\xE9\xE9e les icones de tes r\xF4les Discord",
    uuid: "badges_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Badges.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Badges = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$i = {
  name: "Bots"
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsDefaultCard, vue_cjs_prod.mergeProps({ tool: {
    name: "R\xE9f\xE9rencement de bots",
    description: "R\xE9f\xE9rence ton bot",
    uuid: "bots_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Bots.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Bots = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$h = {
  name: "Embed"
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsDefaultCard, vue_cjs_prod.mergeProps({ tool: {
    name: "Cr\xE9ateur d'embeds",
    description: "Cr\xE9\xE9e et envoie tes embeds sur ton serveur Discord",
    uuid: "embed_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Embed.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Embed = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$g = {
  name: "Emojis"
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(serverRenderer.exports.ssrRenderComponent(_component_ToolsDefaultCard, vue_cjs_prod.mergeProps({ tool: {
    name: "R\xE9f\xE9rencement d'emojis",
    description: "R\xE9f\xE9rence ton emoji",
    uuid: "emojis_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Emojis.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Emojis = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$f]]);
const meta$7 = void 0;
const meta$6 = void 0;
const meta$5 = void 0;
const _sfc_main$f = {
  components: {
    LightBulbIcon,
    Menu: fe$1,
    MenuButton: me,
    MenuItems: pe,
    MenuItem: ve,
    TransitionRoot: fe,
    TransitionChild: oe,
    Dialog: Ae,
    DialogPanel: Le,
    DialogTitle: We
  },
  data: () => ({
    isOpen: false,
    suggestion: "-",
    errors: []
  }),
  methods: {
    async sendSuggestion() {
      try {
        await axios2.post("/suggestions", {
          content: this.suggestion
        }, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        });
      } catch (e) {
        this.errors = e.response.data.errors.map((error) => error.message);
      }
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1$2;
  const _component_LightBulbIcon = vue_cjs_prod.resolveComponent("LightBulbIcon");
  const _component_TransitionRoot = vue_cjs_prod.resolveComponent("TransitionRoot");
  const _component_Dialog = vue_cjs_prod.resolveComponent("Dialog");
  const _component_TransitionChild = vue_cjs_prod.resolveComponent("TransitionChild");
  const _component_DialogPanel = vue_cjs_prod.resolveComponent("DialogPanel");
  const _component_DialogTitle = vue_cjs_prod.resolveComponent("DialogTitle");
  const _component_Input = __nuxt_component_4$2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    class: "mx-auto",
    text: "Faire une suggestion",
    color: "white",
    onClick: ($event) => _ctx.isOpen = true
  }, {
    icon_left: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_LightBulbIcon, { class: "mr-3 w-8 h-8" }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_LightBulbIcon, { class: "mr-3 w-8 h-8" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.isOpen,
    as: "template"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: ($event) => _ctx.isOpen = false,
          class: "relative z-10"
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"${_scopeId3}></div>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
              _push3(serverRenderer.exports.ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(serverRenderer.exports.ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                      default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(serverRenderer.exports.ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: vue_cjs_prod.withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Cr\xE9er une suggestion `);
                              } else {
                                return [
                                  vue_cjs_prod.createTextVNode(" Cr\xE9er une suggestion ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="mt-2"${_scopeId4}>`);
                          _push5(serverRenderer.exports.ssrRenderComponent(_component_Input, {
                            class: "mt-4",
                            placeholder: "Entrez votre suggestion...",
                            modelValue: _ctx.suggestion,
                            "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                          }, null, _parent5, _scopeId4));
                          _push5(`<!--[-->`);
                          serverRenderer.exports.ssrRenderList(_ctx.errors, (error, id) => {
                            _push5(`<div class="text-red-400 text-sm mt-1 mb-4"${_scopeId4}><i${_scopeId4}>${serverRenderer.exports.ssrInterpolate(error)}</i></div>`);
                          });
                          _push5(`<!--]--><p class="text-sm text-gray-500 mt-2 leading-loose"${_scopeId4}> Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon <span class="bg-dark-800 rounded-md p-1"${_scopeId4}>#suggestions</span></p></div><div class="flex gap-2 items-center mt-4 justify-end"${_scopeId4}>`);
                          _push5(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                            color: "transparent",
                            text: "Annuler",
                            onClick: ($event) => _ctx.isOpen = false
                          }, null, _parent5, _scopeId4));
                          _push5(serverRenderer.exports.ssrRenderComponent(_component_Button, {
                            color: "primary",
                            text: "Envoyer ma suggestion",
                            onClick: $options.sendSuggestion
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            vue_cjs_prod.createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createTextVNode(" Cr\xE9er une suggestion ")
                              ]),
                              _: 1
                            }),
                            vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                              vue_cjs_prod.createVNode(_component_Input, {
                                class: "mt-4",
                                placeholder: "Entrez votre suggestion...",
                                modelValue: _ctx.suggestion,
                                "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.errors, (error, id) => {
                                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                  class: "text-red-400 text-sm mt-1 mb-4",
                                  key: id
                                }, [
                                  vue_cjs_prod.createVNode("i", null, vue_cjs_prod.toDisplayString(error), 1)
                                ]);
                              }), 128)),
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2 leading-loose" }, [
                                vue_cjs_prod.createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                                vue_cjs_prod.createVNode("span", { class: "bg-dark-800 rounded-md p-1" }, "#suggestions")
                              ])
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.isOpen = false
                              }, null, 8, ["onClick"]),
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "primary",
                                text: "Envoyer ma suggestion",
                                onClick: $options.sendSuggestion
                              }, null, 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createTextVNode(" Cr\xE9er une suggestion ")
                            ]),
                            _: 1
                          }),
                          vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                            vue_cjs_prod.createVNode(_component_Input, {
                              class: "mt-4",
                              placeholder: "Entrez votre suggestion...",
                              modelValue: _ctx.suggestion,
                              "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.errors, (error, id) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                class: "text-red-400 text-sm mt-1 mb-4",
                                key: id
                              }, [
                                vue_cjs_prod.createVNode("i", null, vue_cjs_prod.toDisplayString(error), 1)
                              ]);
                            }), 128)),
                            vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2 leading-loose" }, [
                              vue_cjs_prod.createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                              vue_cjs_prod.createVNode("span", { class: "bg-dark-800 rounded-md p-1" }, "#suggestions")
                            ])
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                            vue_cjs_prod.createVNode(_component_Button, {
                              color: "transparent",
                              text: "Annuler",
                              onClick: ($event) => _ctx.isOpen = false
                            }, null, 8, ["onClick"]),
                            vue_cjs_prod.createVNode(_component_Button, {
                              color: "primary",
                              text: "Envoyer ma suggestion",
                              onClick: $options.sendSuggestion
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                vue_cjs_prod.createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                  ]),
                  _: 1
                }),
                vue_cjs_prod.createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                  vue_cjs_prod.createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                    vue_cjs_prod.createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: vue_cjs_prod.withCtx(() => [
                                vue_cjs_prod.createTextVNode(" Cr\xE9er une suggestion ")
                              ]),
                              _: 1
                            }),
                            vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                              vue_cjs_prod.createVNode(_component_Input, {
                                class: "mt-4",
                                placeholder: "Entrez votre suggestion...",
                                modelValue: _ctx.suggestion,
                                "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.errors, (error, id) => {
                                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                  class: "text-red-400 text-sm mt-1 mb-4",
                                  key: id
                                }, [
                                  vue_cjs_prod.createVNode("i", null, vue_cjs_prod.toDisplayString(error), 1)
                                ]);
                              }), 128)),
                              vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2 leading-loose" }, [
                                vue_cjs_prod.createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                                vue_cjs_prod.createVNode("span", { class: "bg-dark-800 rounded-md p-1" }, "#suggestions")
                              ])
                            ]),
                            vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.isOpen = false
                              }, null, 8, ["onClick"]),
                              vue_cjs_prod.createVNode(_component_Button, {
                                color: "primary",
                                text: "Envoyer ma suggestion",
                                onClick: $options.sendSuggestion
                              }, null, 8, ["onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Dialog, {
            as: "div",
            onClose: ($event) => _ctx.isOpen = false,
            class: "relative z-10"
          }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                vue_cjs_prod.createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                  vue_cjs_prod.createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-900 p-6 text-left align-middle shadow-xl transition-all" }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: vue_cjs_prod.withCtx(() => [
                              vue_cjs_prod.createTextVNode(" Cr\xE9er une suggestion ")
                            ]),
                            _: 1
                          }),
                          vue_cjs_prod.createVNode("div", { class: "mt-2" }, [
                            vue_cjs_prod.createVNode(_component_Input, {
                              class: "mt-4",
                              placeholder: "Entrez votre suggestion...",
                              modelValue: _ctx.suggestion,
                              "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.errors, (error, id) => {
                              return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                                class: "text-red-400 text-sm mt-1 mb-4",
                                key: id
                              }, [
                                vue_cjs_prod.createVNode("i", null, vue_cjs_prod.toDisplayString(error), 1)
                              ]);
                            }), 128)),
                            vue_cjs_prod.createVNode("p", { class: "text-sm text-gray-500 mt-2 leading-loose" }, [
                              vue_cjs_prod.createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                              vue_cjs_prod.createVNode("span", { class: "bg-dark-800 rounded-md p-1" }, "#suggestions")
                            ])
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "flex gap-2 items-center mt-4 justify-end" }, [
                            vue_cjs_prod.createVNode(_component_Button, {
                              color: "transparent",
                              text: "Annuler",
                              onClick: ($event) => _ctx.isOpen = false
                            }, null, 8, ["onClick"]),
                            vue_cjs_prod.createVNode(_component_Button, {
                              color: "primary",
                              text: "Envoyer ma suggestion",
                              onClick: $options.sendSuggestion
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }, 8, ["onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SuggestionButton.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_6$2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$e]]);
const meta$4 = void 0;
const _sfc_main$e = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<header${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "py-48 relative text-white overflow-hidden" }, _attrs))}><div class="absolute top-full -translate-y-full w-full h-full bg-[#5C6AF6] -z-10"></div><div class="absolute left-1/2 -translate-x-1/2 top-full -translate-y-full w-1/2 rounded-full h-full -z-1" style="${serverRenderer.exports.ssrRenderStyle({ "background": "radial-gradient(50% 50% at 50% 50%, #5664F9 70.83%, transparent 100%)" })}"></div><svg id="squares" class="absolute -top-48 -left-12 rotate-12 min-h-screen h-[90rem] w-screen scale-125 -z-10"><!--[-->`);
  serverRenderer.exports.ssrRenderList(16, (n) => {
    _push(`<g><!--[-->`);
    serverRenderer.exports.ssrRenderList(24, (i) => {
      _push(`<rect${serverRenderer.exports.ssrRenderAttr("x", 100 * (i - 1))}${serverRenderer.exports.ssrRenderAttr("y", 100 * (n - 1))} width="100" height="100"${serverRenderer.exports.ssrRenderAttr("fill", Math.floor(Math.random() * 8) % 3 === 2 ? "#5F6CF7" : "#5664F9")} stroke="#5F6DF9" stroke-width="2"></rect>`);
    });
    _push(`<!--]--></g>`);
  });
  _push(`<!--]--></svg><div class="container mx-auto px-4 text-center">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="absolute top-0 w-full h-52" style="${serverRenderer.exports.ssrRenderStyle({ "background": "linear-gradient(to bottom, #5865F6, transparent)" })}"></div><div class="absolute top-full -translate-y-full w-full h-52" style="${serverRenderer.exports.ssrRenderStyle({ "background": "linear-gradient(to top, #5865F6, transparent)" })}"></div></header>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Header.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$d]]);
const _imports_0 = "" + globalThis.__publicAssetsURL("objects/sad.png");
const _sfc_main$d = {
  props: {
    text: {
      type: String,
      default: "Nous n'avons pas trouv\xE9 de r\xE9sultats..."
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><img class="w-12 h-12 mx-auto mb-4"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)}><div class="text-sm mx-auto text-center max-w-xs leading-6">${serverRenderer.exports.ssrInterpolate($props.text)}</div>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Empty.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$c]]);
const meta$3 = void 0;
const _sfc_main$c = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><header class="bg-blurple h-32 rounded-t-2xl p-6 relative shadow-xl"><img class="absolute top-1/2 w-24 h-24 rounded-3xl border-4 border-white dark:border-dark-800" src="https://cdn.discordapp.com/avatars/908347266727813160/139394a36c0c1bdd6cec0aaa8db66d6c.png?size=4096"></header><div class="bg-white dark:bg-dark-800 p-6 rounded-b-2xl shadow-xl"><main><div class="font-bold text-lg mt-4">Maky</div><div class="text-md mt-2">Bot de cr\xE9ation de serveur Discord. Il vous permet de cr\xE9er vos channels, vos r\xF4les...</div></main><footer class="flex flex-wrap gap-2 mt-4"><div class="text-xs italic bg-primary-500 bg-opacity-20 px-2 py-1 rounded-lg">Mod\xE9ration</div><div class="text-xs italic bg-primary-500 bg-opacity-20 px-2 py-1 rounded-lg">Mod\xE9ration</div><div class="text-xs italic bg-primary-500 bg-opacity-20 px-2 py-1 rounded-lg">Mod\xE9ration</div></footer></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bots/Card.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$b]]);
const meta$2 = void 0;
const _sfc_main$b = {
  props: {
    stepId: {
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    bigPadding: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: $props.bigPadding ? "py-16" : "py-6"
  }, _attrs))}><div class="flex gap-2 text-lg"><span class="font-bold">Etape ${serverRenderer.exports.ssrInterpolate($props.stepId)}</span><span class="font-semibold">-</span><span class="font-medium">${serverRenderer.exports.ssrInterpolate($props.name)}</span></div><p class="text-md">${serverRenderer.exports.ssrInterpolate($props.description)}</p><div class="mt-4">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Step.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$a = {
  components: { Switch: Y },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(value) {
      this.$emit("change", value);
      this.$emit("update:modelValue", value);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Switch = vue_cjs_prod.resolveComponent("Switch");
  _push(serverRenderer.exports.ssrRenderComponent(_component_Switch, vue_cjs_prod.mergeProps({
    modelValue: $props.modelValue,
    "onUpdate:modelValue": ($event) => $props.modelValue = $event,
    class: [$props.modelValue ? "bg-teal-500" : "bg-red-500", "relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"],
    onChange: $options.handleInput($props.modelValue)
  }, _attrs), {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Use setting</span><span aria-hidden="true" class="${serverRenderer.exports.ssrRenderClass([$props.modelValue ? "translate-x-10" : "translate-x-1", "absolute pointer-events-none inline-block h-7 w-7 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"])}"${_scopeId}></span>`);
      } else {
        return [
          vue_cjs_prod.createVNode("span", { class: "sr-only" }, "Use setting"),
          vue_cjs_prod.createVNode("span", {
            "aria-hidden": "true",
            class: [$props.modelValue ? "translate-x-10" : "translate-x-1", "absolute pointer-events-none inline-block h-7 w-7 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"]
          }, null, 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toggle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$9]]);
const { toHTML: toHTML$1 } = pkg;
const _sfc_main$9 = {
  setup() {
    return { toHTML: toHTML$1 };
  },
  props: {
    content: {
      type: String,
      default: ""
    },
    embed: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>${$setup.toHTML($props.content, { embed: $props.embed })}</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Markdown.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const meta$1 = void 0;
const _sfc_main$8 = {
  props: {
    stepId: {
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    bigPadding: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: $props.bigPadding ? "py-16" : "py-6"
  }, _attrs))}><div class="flex justify-between items-center"><div class="flex gap-2 text-lg"><span class="font-bold">Etape ${serverRenderer.exports.ssrInterpolate($props.stepId)}</span><span class="font-semibold">-</span><span class="font-medium">${serverRenderer.exports.ssrInterpolate($props.name)}</span></div><div>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "bin", {}, null, _push, _parent);
  _push(`</div></div><p class="text-md">${serverRenderer.exports.ssrInterpolate($props.description)}</p><div class="mt-4">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Step.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    big: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
      this.$emit("change", e.target.value);
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><textarea${serverRenderer.exports.ssrRenderAttr("placeholder", $props.placeholder)} type="text" class="${serverRenderer.exports.ssrRenderClass([$props.big ? "px-6 py-5 text-md" : "px-6 py-4 text-sm", "text-sm w-full bg-transparent focus:bg-white dark:focus:bg-dark-900 border border-dark-900 focus:outline-none focus:border-primary-500 rounded-lg"])}">${serverRenderer.exports.ssrInterpolate($props.modelValue)}</textarea></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Textarea.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {
  props: {
    file: {
      required: true
    }
  },
  computed: {
    fileBlob() {
      return URL.createObjectURL(this.file);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "rounded-[4px]",
    src: $options.fileBlob,
    style: { "max-width": "400px", "max-height": "300px" }
  }, _attrs))}>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Attachments/Image.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {
  props: {
    file: {
      required: true
    }
  },
  computed: {
    fileSize() {
      const size = this.file.size;
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "KB", "MB", "GB", "TB"][i];
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-[#2F3136] px-4 py-3 rounded-[4px] border border-[#292B2F] flex gap-4 justify-between items-center dark:fill-white" }, _attrs))} data-v-541bcdbd><div class="flex" data-v-541bcdbd><svg width="28" height="40" viewBox="0 0 28 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-541bcdbd><defs data-v-541bcdbd><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter" data-v-541bcdbd><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter" data-v-541bcdbd></feOffset><feGaussianBlur stdDeviation="0" in="shadowOffsetOuter" result="shadowBlurOuter" data-v-541bcdbd></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" in="shadowBlurOuter" type="matrix" result="shadowMatrixOuter" data-v-541bcdbd></feColorMatrix><feMerge data-v-541bcdbd><feMergeNode in="shadowMatrixOuter" data-v-541bcdbd></feMergeNode><feMergeNode in="SourceGraphic" data-v-541bcdbd></feMergeNode></feMerge></filter></defs><g stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" transform="translate(2, 2)" data-v-541bcdbd><path d="M0,3.00741988 C0,1.34646775 1.34252415,0 2.99998588,0 L15.1166483,0 C17.0807354,0 24,6.91885725 24,8.87457593 L24,33.0035574 C24,34.6584469 22.6582294,36 21.0089096,36 L2.99109042,36 C1.33915679,36 0,34.6544607 0,32.9925801 L0,3.00741988 Z" stroke="#7289da" fill="#f4f6fc" data-v-541bcdbd></path><path d="M17,1.09677336 C17,0.542040316 17.3147964,0.407097791 17.7133118,0.80556379 L23.1952031,6.28677654 C23.5891543,6.68067898 23.4552279,7 22.9039575,7 L18.0045574,7 C17.4497557,7 17,6.54676916 17,5.99556698 L17,1.09677336 Z" stroke="#7289da" fill="#f4f6fc" filter="url(#filter)" data-v-541bcdbd></path><path d="M13,3 L4.49710104,3 C3.67027497,3 3,3.66579723 3,4.5 L3,6" stroke="#c9d2f0" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" data-v-541bcdbd></path><text opacity="0.8" font-family="Source Code Pro" font-size="12" font-weight="420" letter-spacing="-0.3" fill="#697ec4" data-v-541bcdbd><tspan x="5.2690141" y="26.4705882" data-v-541bcdbd>||</tspan></text></g></svg><div class="ml-2 flex flex-col justify-between" data-v-541bcdbd><div class="text-md link hover:underline" data-v-541bcdbd>${serverRenderer.exports.ssrInterpolate($props.file.name)}</div><div class="text-xs text-gray-600" data-v-541bcdbd>${serverRenderer.exports.ssrInterpolate($options.fileSize)}</div></div></div><svg class="downloadButton-2HLFWN" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" data-v-541bcdbd><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z" data-v-541bcdbd></path></svg></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Attachments/File.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-541bcdbd"]]);
const _sfc_main$4 = {
  components: { ChevronDownIcon, TrashIcon },
  data: () => ({
    open: false
  }),
  props: {
    name: {
      type: String
    },
    trash: {
      type: Function
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TrashIcon = vue_cjs_prod.resolveComponent("TrashIcon");
  const _component_ChevronDownIcon = vue_cjs_prod.resolveComponent("ChevronDownIcon");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "px-6 py-4" }, _attrs))}><div class="flex justify-between items-center font-semibold">${serverRenderer.exports.ssrInterpolate($props.name)} <div class="flex items-center gap-1">`);
  if ($props.trash) {
    _push(`<button class="p-2">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_TrashIcon, { class: "w-6 h-6" }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="p-2">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ChevronDownIcon, {
    class: ["w-6 h-6 ease-in-out duration-300", !_ctx.open && "rotate-90"]
  }, null, _parent));
  _push(`</button></div></div><div class="${serverRenderer.exports.ssrRenderClass([!_ctx.open ? "max-h-0 overflow-hidden" : "mt-4 max-h-[300rem] mb-2", "ease-in-out duration-300"])}">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/CollapseCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const { toHTML } = pkg;
const _sfc_main$3 = {
  setup() {
    return { toHTML };
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    getFieldColumn(field) {
      const MAX_FIELDS_PER_ROW = 3;
      const FIELD_GRID_SIZE = 12;
      const embed = this.data;
      const fieldIndex = embed.fields.indexOf(field);
      if (!field.inline)
        return `1/${FIELD_GRID_SIZE + 1}`;
      let startingField = fieldIndex;
      while (startingField > 0 && embed.fields[startingField - 1].inline) {
        startingField--;
      }
      let totalInlineFields = 0;
      while (embed.fields.length > startingField + totalInlineFields && embed.fields[startingField + totalInlineFields].inline) {
        totalInlineFields++;
      }
      const indexInSequence = fieldIndex - startingField;
      const currentRow = indexInSequence / MAX_FIELDS_PER_ROW;
      const indexOnRow = indexInSequence % MAX_FIELDS_PER_ROW;
      const totalOnLastRow = totalInlineFields % MAX_FIELDS_PER_ROW || MAX_FIELDS_PER_ROW;
      const fullRows = (totalInlineFields - totalOnLastRow) / MAX_FIELDS_PER_ROW;
      const totalOnRow = currentRow >= fullRows ? totalOnLastRow : MAX_FIELDS_PER_ROW;
      const columnSpan = FIELD_GRID_SIZE / totalOnRow;
      const start = indexOnRow * columnSpan + 1;
      const end = start + columnSpan;
      return `${start}/${end}`;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_9;
  const _component_Markdown = __nuxt_component_6$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "embed bg-[#F2F3F5] dark:bg-[#2F3136] border-l-4",
    style: `border-color: ${$props.data.color}; max-width: ${$props.data.image.url ? "432" : "516"}px;`
  }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      if (_push2) {
        if (((_a = $props.data.author) == null ? void 0 : _a.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 || ((_b = $props.data.thumbnail) == null ? void 0 : _b.url)) {
          _push2(`<div class="flex justify-between"${_scopeId}><div class="py-2 mr-2"${_scopeId}>`);
          if (((_c = $props.data.author) == null ? void 0 : _c.icon_url) || ((_d = $props.data.author) == null ? void 0 : _d.name)) {
            _push2(`<div class="flex items-center font-semibold text-sm mb-2"${_scopeId}>`);
            if ($props.data.author.icon_url) {
              _push2(`<img class="w-6 h-6 rounded-full mr-2"${serverRenderer.exports.ssrRenderAttr("src", $props.data.author.icon_url)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${serverRenderer.exports.ssrInterpolate((_e = $props.data.author) == null ? void 0 : _e.name)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.title) {
            _push2(`<a href="#" target="_blank" class="${serverRenderer.exports.ssrRenderClass([$props.data.author.url && "title hover:underline", "block font-semibold"])}"${_scopeId}>${serverRenderer.exports.ssrInterpolate($props.data.title)}</a>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.description) {
            _push2(`<div class="text-sm mt-2 box-border leading-snug whitespace-pre-wrap break-words"${_scopeId}>${$setup.toHTML($props.data.description, { embed: true })}</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="grid gap-x-6 gap-y-2"${_scopeId}><!--[-->`);
          serverRenderer.exports.ssrRenderList($props.data.fields, (field, key) => {
            _push2(`<div class="text-sm mt-2" style="${serverRenderer.exports.ssrRenderStyle(`grid-column: ${$options.getFieldColumn(field)};`)}"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_Markdown, {
              content: field.name,
              class: "font-semibold",
              embed: true
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_Markdown, {
              content: field.value,
              class: "font-normal",
              embed: true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div>`);
          if ((_f = $props.data.thumbnail) == null ? void 0 : _f.url) {
            _push2(`<div class="flex-none"${_scopeId}><img class="w-20 rounded-[4px]"${serverRenderer.exports.ssrRenderAttr("src", $props.data.thumbnail.url)}${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if ((_g = $props.data.image) == null ? void 0 : _g.url) {
          _push2(`<div${_scopeId}><img class="${serverRenderer.exports.ssrRenderClass([((_h = $props.data.author) == null ? void 0 : _h.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 ? "mt-1" : "mt-4", "w-full rounded-[4px]"])}"${serverRenderer.exports.ssrRenderAttr("src", $props.data.image.url)}${_scopeId}></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.data.timestamp || ((_i = $props.data.footer) == null ? void 0 : _i.text) || ((_j = $props.data.footer) == null ? void 0 : _j.icon_url)) {
          _push2(`<footer class="flex mt-2 items-center"${_scopeId}>`);
          if ((_k = $props.data.footer) == null ? void 0 : _k.icon_url) {
            _push2(`<img class="w-5 h-5 rounded-full mr-2"${serverRenderer.exports.ssrRenderAttr("src", $props.data.footer.icon_url)}${_scopeId}>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<span class="text-xs text-gray-200"${_scopeId}>`);
          if ((_l = $props.data.footer) == null ? void 0 : _l.text) {
            _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate((_m = $props.data.footer) == null ? void 0 : _m.text)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.timestamp && ((_n = $props.data.footer) == null ? void 0 : _n.text)) {
            _push2(`<span class="mx-1"${_scopeId}>\u2022</span>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.timestamp) {
            _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate($props.data.timestamp)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</span></footer>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          ((_o = $props.data.author) == null ? void 0 : _o.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 || ((_p = $props.data.thumbnail) == null ? void 0 : _p.url) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
            key: 0,
            class: "flex justify-between"
          }, [
            vue_cjs_prod.createVNode("div", { class: "py-2 mr-2" }, [
              ((_q = $props.data.author) == null ? void 0 : _q.icon_url) || ((_r = $props.data.author) == null ? void 0 : _r.name) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: 0,
                class: "flex items-center font-semibold text-sm mb-2"
              }, [
                $props.data.author.icon_url ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("img", {
                  key: 0,
                  class: "w-6 h-6 rounded-full mr-2",
                  src: $props.data.author.icon_url
                }, null, 8, ["src"])) : vue_cjs_prod.createCommentVNode("", true),
                vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString((_s = $props.data.author) == null ? void 0 : _s.name), 1)
              ])) : vue_cjs_prod.createCommentVNode("", true),
              $props.data.title ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("a", {
                key: 1,
                href: "#",
                target: "_blank",
                class: ["block font-semibold", $props.data.author.url && "title hover:underline"]
              }, vue_cjs_prod.toDisplayString($props.data.title), 3)) : vue_cjs_prod.createCommentVNode("", true),
              $props.data.description ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: 2,
                class: "text-sm mt-2 box-border leading-snug whitespace-pre-wrap break-words",
                innerHTML: $setup.toHTML($props.data.description, { embed: true })
              }, null, 8, ["innerHTML"])) : vue_cjs_prod.createCommentVNode("", true),
              vue_cjs_prod.createVNode("div", { class: "grid gap-x-6 gap-y-2" }, [
                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($props.data.fields, (field, key) => {
                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                    key,
                    class: "text-sm mt-2",
                    style: `grid-column: ${$options.getFieldColumn(field)};`
                  }, [
                    vue_cjs_prod.createVNode(_component_Markdown, {
                      content: field.name,
                      class: "font-semibold",
                      embed: true
                    }, null, 8, ["content"]),
                    vue_cjs_prod.createVNode(_component_Markdown, {
                      content: field.value,
                      class: "font-normal",
                      embed: true
                    }, null, 8, ["content"])
                  ], 4);
                }), 128))
              ])
            ]),
            ((_t = $props.data.thumbnail) == null ? void 0 : _t.url) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
              key: 0,
              class: "flex-none"
            }, [
              vue_cjs_prod.createVNode("img", {
                class: "w-20 rounded-[4px]",
                src: $props.data.thumbnail.url
              }, null, 8, ["src"])
            ])) : vue_cjs_prod.createCommentVNode("", true)
          ])) : vue_cjs_prod.createCommentVNode("", true),
          ((_u = $props.data.image) == null ? void 0 : _u.url) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", { key: 1 }, [
            vue_cjs_prod.createVNode("img", {
              class: ["w-full rounded-[4px]", ((_v = $props.data.author) == null ? void 0 : _v.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 ? "mt-1" : "mt-4"],
              src: $props.data.image.url
            }, null, 10, ["src"])
          ])) : vue_cjs_prod.createCommentVNode("", true),
          $props.data.timestamp || ((_w = $props.data.footer) == null ? void 0 : _w.text) || ((_x = $props.data.footer) == null ? void 0 : _x.icon_url) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("footer", {
            key: 2,
            class: "flex mt-2 items-center"
          }, [
            ((_y = $props.data.footer) == null ? void 0 : _y.icon_url) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("img", {
              key: 0,
              class: "w-5 h-5 rounded-full mr-2",
              src: $props.data.footer.icon_url
            }, null, 8, ["src"])) : vue_cjs_prod.createCommentVNode("", true),
            vue_cjs_prod.createVNode("span", { class: "text-xs text-gray-200" }, [
              ((_z = $props.data.footer) == null ? void 0 : _z.text) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 0 }, vue_cjs_prod.toDisplayString((_A = $props.data.footer) == null ? void 0 : _A.text), 1)) : vue_cjs_prod.createCommentVNode("", true),
              $props.data.timestamp && ((_B = $props.data.footer) == null ? void 0 : _B.text) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", {
                key: 1,
                class: "mx-1"
              }, "\u2022")) : vue_cjs_prod.createCommentVNode("", true),
              $props.data.timestamp ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 2 }, vue_cjs_prod.toDisplayString($props.data.timestamp), 1)) : vue_cjs_prod.createCommentVNode("", true)
            ])
          ])) : vue_cjs_prod.createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/FakeEmbed.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_9;
  const _component_Markdown = __nuxt_component_6$1;
  const _component_ToolsDiscordEmbedCreatorAttachmentsImage = __nuxt_component_6;
  const _component_ToolsDiscordEmbedCreatorAttachmentsFile = __nuxt_component_7;
  const _component_ToolsDiscordEmbedCreatorFakeEmbed = __nuxt_component_4;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex gap-3" }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ClientOnly, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-10 h-10 rounded-full"${serverRenderer.exports.ssrRenderAttr("src", $props.data.avatar_url)}${_scopeId}><div class="w-full whitney"${_scopeId}><div class="flex gap-1 text-base items-center"${_scopeId}><span class="font-medium"${_scopeId}>${serverRenderer.exports.ssrInterpolate($props.data.username)}</span><span class="bg-blurple px-1 leading-4 font-medium rounded-sm text-white text-[10px]"${_scopeId}>BOT</span><span class="ml-1 rounded-md text-gray-600 dark:text-gray-200 text-xs self-end"${_scopeId}>12/08/2022</span></div><div class="flex flex-col gap-1 w-full mt-1"${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Markdown, {
          class: "font-normal text-base text-gray-300 whitespace-pre-line break-words leading-snug",
          content: $props.data.content
        }, null, _parent2, _scopeId));
        if ($props.data.files) {
          _push2(`<div class="flex flex-col gap-1"${_scopeId}><!--[-->`);
          serverRenderer.exports.ssrRenderList($props.data.files, (file, index) => {
            _push2(`<div class="flex"${_scopeId}>`);
            if (file.type.startsWith("image") && file.type !== "image/svg+xml") {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsImage, { file }, null, _parent2, _scopeId));
            } else {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsFile, { file }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<!--[-->`);
        serverRenderer.exports.ssrRenderList($props.data.embeds, (embed, id) => {
          _push2(serverRenderer.exports.ssrRenderComponent(_component_ToolsDiscordEmbedCreatorFakeEmbed, {
            key: id,
            class: "w-full",
            data: embed
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
        if ($props.data.components[0].components) {
          _push2(`<div class="flex mt-2"${_scopeId}><!--[-->`);
          serverRenderer.exports.ssrRenderList($props.data.components[0].components, (component, id) => {
            _push2(`<a${serverRenderer.exports.ssrRenderAttr("href", component.url)} target="_blank" class="bg-[#4F545C] hover:bg-[#686D73] ease-in duration-200 rounded-sm flex font-medium ml-0 mr-2 px-4 py-1 relative text-white items-center gap-2"${_scopeId}>${serverRenderer.exports.ssrInterpolate(component.label)} <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"${_scopeId}></path><path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"${_scopeId}></path></svg></a>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("img", {
            class: "w-10 h-10 rounded-full",
            src: $props.data.avatar_url
          }, null, 8, ["src"]),
          vue_cjs_prod.createVNode("div", { class: "w-full whitney" }, [
            vue_cjs_prod.createVNode("div", { class: "flex gap-1 text-base items-center" }, [
              vue_cjs_prod.createVNode("span", { class: "font-medium" }, vue_cjs_prod.toDisplayString($props.data.username), 1),
              vue_cjs_prod.createVNode("span", { class: "bg-blurple px-1 leading-4 font-medium rounded-sm text-white text-[10px]" }, "BOT"),
              vue_cjs_prod.createVNode("span", { class: "ml-1 rounded-md text-gray-600 dark:text-gray-200 text-xs self-end" }, "12/08/2022")
            ]),
            vue_cjs_prod.createVNode("div", { class: "flex flex-col gap-1 w-full mt-1" }, [
              vue_cjs_prod.createVNode(_component_Markdown, {
                class: "font-normal text-base text-gray-300 whitespace-pre-line break-words leading-snug",
                content: $props.data.content
              }, null, 8, ["content"]),
              $props.data.files ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: 0,
                class: "flex flex-col gap-1"
              }, [
                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($props.data.files, (file, index) => {
                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                    key: index,
                    class: "flex"
                  }, [
                    file.type.startsWith("image") && file.type !== "image/svg+xml" ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                      key: 0,
                      file
                    }, null, 8, ["file"])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsFile, {
                      key: 1,
                      file
                    }, null, 8, ["file"]))
                  ]);
                }), 128))
              ])) : vue_cjs_prod.createCommentVNode("", true),
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($props.data.embeds, (embed, id) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_ToolsDiscordEmbedCreatorFakeEmbed, {
                  key: id,
                  class: "w-full",
                  data: embed
                }, null, 8, ["data"]);
              }), 128))
            ]),
            $props.data.components[0].components ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
              key: 0,
              class: "flex mt-2"
            }, [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList($props.data.components[0].components, (component, id) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("a", {
                  href: component.url,
                  target: "_blank",
                  class: "bg-[#4F545C] hover:bg-[#686D73] ease-in duration-200 rounded-sm flex font-medium ml-0 mr-2 px-4 py-1 relative text-white items-center gap-2",
                  key: id
                }, [
                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(component.label) + " ", 1),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                    "aria-hidden": "false",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24"
                  }, [
                    vue_cjs_prod.createVNode("path", {
                      fill: "currentColor",
                      d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                    }),
                    vue_cjs_prod.createVNode("path", {
                      fill: "currentColor",
                      d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                    })
                  ]))
                ], 8, ["href"]);
              }), 128))
            ])) : vue_cjs_prod.createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/FakeMessage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const meta = void 0;
const routes = [
  {
    name: "account",
    path: "/account",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/account/index.vue",
    children: [],
    meta: meta$e,
    alias: (meta$e == null ? void 0 : meta$e.alias) || [],
    component: () => import('./index.f53b551a.mjs').then((m) => m.default || m)
  },
  {
    name: "articles-slug",
    path: "/articles/:slug",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/articles/[slug].vue",
    children: [],
    meta: meta$d,
    alias: [],
    component: () => import('./_slug_.25689ed0.mjs').then((m) => m.default || m)
  },
  {
    name: "articles",
    path: "/articles",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/articles/index.vue",
    children: [],
    meta: meta$c,
    alias: [],
    component: () => import('./index.5d396450.mjs').then((m) => m.default || m)
  },
  {
    name: "authentification-callback",
    path: "/authentification/callback",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/authentification/callback.vue",
    children: [],
    meta: meta$b,
    alias: (meta$b == null ? void 0 : meta$b.alias) || [],
    component: () => import('./callback.e3c9df12.mjs').then((m) => m.default || m)
  },
  {
    name: "authentification",
    path: "/authentification",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/authentification/index.vue",
    children: [],
    meta: meta$a,
    alias: (meta$a == null ? void 0 : meta$a.alias) || [],
    component: () => import('./index.275e282c.mjs').then((m) => m.default || m)
  },
  {
    name: "cgu",
    path: "/cgu",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/cgu.vue",
    children: [],
    meta: meta$9,
    alias: [],
    component: () => import('./cgu.2893a761.mjs').then((m) => m.default || m)
  },
  {
    name: "hire",
    path: "/hire",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/hire.vue",
    children: [],
    meta: meta$8,
    alias: [],
    component: () => import('./hire.18ece5b0.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/index.vue",
    children: [],
    meta: meta$7,
    alias: [],
    component: () => import('./index.c673fd9e.mjs').then((m) => m.default || m)
  },
  {
    name: "partners",
    path: "/partners",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/partners.vue",
    children: [],
    meta: meta$6,
    alias: [],
    component: () => import('./partners.b4dab42e.mjs').then((m) => m.default || m)
  },
  {
    name: "rates",
    path: "/rates",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/rates.vue",
    children: [],
    meta: meta$5,
    alias: [],
    component: () => import('./rates.f6049dea.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-404",
    path: "/tools/404",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/tools/404.vue",
    children: [],
    meta: meta$4,
    alias: [],
    component: () => import('./404.c7d2a80f.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-slug",
    path: "/tools/:slug",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/tools/[slug]/index.vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => import('./index.0ba597d2.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-bots",
    path: "/tools/bots",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/tools/bots.vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => import('./bots.f569facc.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-discord-badges",
    path: "/tools/discord/badges",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/tools/discord/badges.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => import('./badges.633a02a4.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-discord-embed",
    path: "/tools/discord/embed",
    file: "C:/laragon/www/maeyourdiscord/frontend/pages/tools/discord/embed.vue",
    children: [],
    meta,
    alias: [],
    component: () => import('./embed.f8d21bb1.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ el: to.hash });
        } else {
          window.scrollTo(0, 0);
        }
      }, 200);
    });
  }
};
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const globalMiddleware = [];
const namedMiddleware = {
  auth: () => import('./auth.4908d073.mjs')
};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = vueRouter_cjs_prod.exports.createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = vueRouter_cjs_prod.exports.createRouter({
    ...routerOptions,
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = vue_cjs_prod.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = vue_cjs_prod.computed(() => _route.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    var _a;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a = namedMiddleware[entry2]) == null ? void 0 : _a.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const preference = "system";
const script = 'const w=window,de=document.documentElement,knownColorSchemes=["dark","light"],preference=window.localStorage.getItem("color_theme")||"system";let value=preference==="system"?getColorScheme():preference;const forcedColorMode=de.getAttribute("data-color-mode-forced");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w["__NUXT_COLOR_MODE__"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=""+e+"",t="";de.classList?de.classList.add(o):de.className+=" "+o,de.setAttribute("data-"+t,e)}function removeColorScheme(e){const o=""+e+"",t="";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,"g"),""),de.removeAttribute("data-"+t)}function prefersColorScheme(e){return w.matchMedia("(prefers-color-scheme"+e+")")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme("").media!=="not all"){for(const e of knownColorSchemes)if(prefersColorScheme(":"+e).matches)return e}return"light"}\n';
const node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_XNCxeHyTuP = defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => vue_cjs_prod.reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  }), "$LHDClCOF8Q").value;
  const htmlAttrs = {};
  {
    useHead({
      htmlAttrs,
      script: [{ children: script }]
    });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const _plugins = [
  preload,
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq,
  node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_XNCxeHyTuP
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = vue_cjs_prod.defineAsyncComponent(() => import('./error-component.23d4eced.mjs'));
    const nuxtApp = useNuxtApp();
    vue_cjs_prod.provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorComponent), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const layouts = {
  default: vue_cjs_prod.defineAsyncComponent(() => import('./default.d70ce6ce.mjs')),
  empty: vue_cjs_prod.defineAsyncComponent(() => import('./empty.d94d7764.mjs')),
  footer: vue_cjs_prod.defineAsyncComponent(() => import('./footer.a393f306.mjs'))
};
const defaultLayoutTransition = { name: "layout", mode: "out-in" };
const __nuxt_component_0 = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = vue_cjs_prod.isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      return _wrapIf(
        vue_cjs_prod.Transition,
        hasLayout && ((_c = route.meta.layoutTransition) != null ? _c : defaultLayoutTransition),
        _wrapIf(layouts[layout], hasLayout, context.slots)
      ).default();
    };
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$1);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  A: __nuxt_component_3,
  B: Badges,
  C: __nuxt_component_5,
  D: __nuxt_component_6,
  E: Emojis,
  F: __nuxt_component_7,
  G: __nuxt_component_8,
  H: __nuxt_component_11,
  I: defineNuxtRouteMiddleware,
  _: _export_sfc,
  a: axios2,
  b: __nuxt_component_4$2,
  c: __nuxt_component_1$2,
  d: __nuxt_component_0$5,
  'default': entry$1,
  e: __nuxt_component_0$4,
  f: __nuxt_component_0$3,
  g: __nuxt_component_1$1,
  h: useHead,
  i: __nuxt_component_2$2,
  j: __nuxt_component_9,
  k: __nuxt_component_4$1,
  l: __nuxt_component_2$1,
  m: __nuxt_component_3$2,
  n: useNuxtApp,
  o: Bots,
  p: Embed,
  q: __nuxt_component_1,
  r: __nuxt_component_6$2,
  s: __nuxt_component_0$1,
  t: __nuxt_component_5$1,
  u: useAuthStore,
  v: vue_cjs_prod,
  w: __nuxt_component_2,
  x: __nuxt_component_3$1,
  y: __nuxt_component_10,
  z: __nuxt_component_6$1
});

export { Ae as A, Badges as B, __nuxt_component_0$1 as C, __nuxt_component_5$1 as D, Emojis as E, __nuxt_component_2 as F, __nuxt_component_3$1 as G, __nuxt_component_10 as H, __nuxt_component_6$1 as I, __nuxt_component_3 as J, __nuxt_component_5 as K, Le as L, __nuxt_component_6 as M, __nuxt_component_7 as N, __nuxt_component_8 as O, __nuxt_component_11 as P, defineNuxtRouteMiddleware as Q, server as R, We as W, Y, _export_sfc as _, fe as a, axios2 as b, vue_cjs_prod as c, __nuxt_component_4$2 as d, __nuxt_component_1$2 as e, fe$1 as f, __nuxt_component_0$5 as g, __nuxt_component_0$4 as h, __nuxt_component_0$3 as i, __nuxt_component_1$1 as j, useHead as k, __nuxt_component_2$2 as l, me as m, __nuxt_component_9 as n, oe as o, pe as p, __nuxt_component_4$1 as q, __nuxt_component_2$1 as r, __nuxt_component_3$2 as s, useNuxtApp as t, useAuthStore as u, ve as v, Bots as w, Embed as x, __nuxt_component_1 as y, __nuxt_component_6$2 as z };
//# sourceMappingURL=server.mjs.map
