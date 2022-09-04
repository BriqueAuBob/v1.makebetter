import { cloneVNode, h as h$2, Fragment as Fragment$1, inject, provide, ref, onMounted, watchEffect, computed, defineComponent, watch, onUnmounted, Teleport, reactive, unref, nextTick, getCurrentInstance, Suspense, Transition, toRaw, isRef, isReactive, toRef, createElementBlock, defineAsyncComponent, resolveComponent, markRaw, useSSRContext, mergeProps, withCtx, createVNode, resolveDynamicComponent, createTextVNode, openBlock, createBlock, renderList, toDisplayString, createCommentVNode, shallowRef, createApp, effectScope, onErrorCaptured, toRefs } from 'vue';
import { $fetch } from 'ohmyfetch';
import { hasProtocol, parseURL, joinURL, isEqual } from 'ufo';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { RouterView, createMemoryHistory, createRouter } from 'vue-router';
import { sendRedirect, createError as createError$1 } from 'h3';
import defu, { defuFn } from 'defu';
import { isFunction } from '@vue/shared';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrRenderSuspense } from 'vue/server-renderer';
import axios from 'axios';
import * as Icons from '@heroicons/vue/outline/esm/index.js';
import { LightBulbIcon, ChevronDownIcon, TrashIcon } from '@heroicons/vue/outline/esm/index.js';
import pkg from 'discord-markdown';
import { a as useRuntimeConfig$1 } from './node-server.mjs';

function u$4(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$4),t}

var R$2=(o=>(o[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o))(R$2||{}),O$1=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(O$1||{});function P$4({visible:r=!0,features:t=0,ourProps:e,theirProps:o,...i}){var a;let n=w$2(o,e),s=Object.assign(i,{props:n});if(r||t&2&&n.static)return u$3(s);if(t&1){let l=(a=n.unmount)==null||a?0:1;return u$4(l,{[0](){return null},[1](){return u$3({...i,props:{...n,hidden:!0,style:{display:"none"}}})}})}return u$3(s)}function u$3({props:r,attrs:t,slots:e,slot:o,name:i}){var f;let{as:n,...s}=N$2(r,["unmount","static"]),a=(f=e.default)==null?void 0:f.call(e,o),l={};if(n==="template"){if(a=y(a),Object.keys(s).length>0||Object.keys(t).length>0){let[c,...p]=a!=null?a:[];if(!k(c)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).sort((d,g)=>d.localeCompare(g)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));return cloneVNode(c,Object.assign({},s,l))}return Array.isArray(a)&&a.length===1?a[0]:a}return h$2(n,Object.assign({},s,l),a)}function y(r){return r.flatMap(t=>t.type===Fragment$1?y(t.children):[t])}function w$2(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let i of r)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?((e[n])!=null||(e[n]=[]),e[n].push(i[n])):t[n]=i[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(i=>[i,void 0])));for(let i in e)Object.assign(t,{[i](n,...s){let a=e[i];for(let l of a){if(n!=null&&n.defaultPrevented)return;l(n,...s);}}});return t}function A$1(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function N$2(r,t=[]){let e=Object.assign({},r);for(let o of t)o in e&&delete e[o];return e}function k(r){return r==null?!1:typeof r.type=="string"||typeof r.type=="object"||typeof r.type=="function"}

let e$2=0;function n$2(){return ++e$2}function t(){return n$2()}

var o$1=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o$1||{});

function f$1(r){throw new Error("Unexpected object: "+r)}var a$2=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(a$2||{});function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=l!=null?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=t.slice().reverse().findIndex((i,c,u)=>s!==-1&&u.length-c-1>=s?!1:!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 2:return t.findIndex((e,i)=>i<=s?!1:!n.resolveDisabled(e));case 3:{let e=t.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 4:return t.findIndex(e=>n.resolveId(e)===r.id);case 5:return null;default:f$1(r);}})();return d===-1?l:d}

function o(n){var l;return n==null||n.value==null?null:(l=n.value.$el)!=null?l:n.value}

let n$1=Symbol("Context");var l$2=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(l$2||{});function f(){return p$4()!==null}function p$4(){return inject(n$1,null)}function c$3(o){provide(n$1,o);}

function r$3(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return "button"}function b$2(t,e){let n=ref(r$3(t.value.type,t.value.as));return onMounted(()=>{n.value=r$3(t.value.type,t.value.as);}),watchEffect(()=>{var o$1;n.value||!o(e)||o(e)instanceof HTMLButtonElement&&!((o$1=o(e))!=null&&o$1.hasAttribute("type"))&&(n.value="button");}),n}

function e$1(n){return null;}

function p$3({container:e,accept:t,walk:d,enabled:o}){watchEffect(()=>{let r=e.value;if(!r||o!==void 0&&!o.value)return;let l=e$1();if(!l)return;let c=Object.assign(f=>t(f),{acceptNode:t}),n=l.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,c,!1);for(;n.nextNode();)d(n.currentNode);});}

let c$2=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L$2=(o=>(o[o.First=1]="First",o[o.Previous=2]="Previous",o[o.Next=4]="Next",o[o.Last=8]="Last",o[o.WrapAround=16]="WrapAround",o[o.NoScroll=32]="NoScroll",o))(L$2||{}),N$1=(n=>(n[n.Error=0]="Error",n[n.Overflow=1]="Overflow",n[n.Success=2]="Success",n[n.Underflow=3]="Underflow",n))(N$1||{}),T$2=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(T$2||{});function b$1(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c$2))}var M$1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(M$1||{});function F$2(e,r=0){var t;return e===((t=e$1())==null?void 0:t.body)?!1:u$4(r,{[0](){return e.matches(c$2)},[1](){let l=e;for(;l!==null;){if(l.matches(c$2))return !0;l=l.parentElement;}return !1}})}function H(e){e==null||e.focus({preventScroll:!0});}let h$1=["textarea","input"].join(",");function v(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,h$1))!=null?t:!1}function w$1(e,r=t=>t){return e.slice().sort((t,l)=>{let n=r(t),i=r(l);if(n===null||i===null)return 0;let o=n.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function P$3(e,r,t=!0){var d;let l=(d=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?d:document,n=Array.isArray(e)?t?w$1(e):e:b$1(e),i=l.activeElement,o=(()=>{if(r&5)return 1;if(r&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(i))-1;if(r&4)return Math.max(0,n.indexOf(i))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=r&32?{preventScroll:!0}:{},f=0,s=n.length,u;do{if(f>=s||f+s<=0)return 0;let a=m+f;if(r&16)a=(a+s)%s;else {if(a<0)return 3;if(a>=s)return 1}u=n[a],u==null||u.focus(x),f+=o;}while(u!==l.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),r&6&&v(u)&&u.select(),2}

function T$1(l,f,a=computed(()=>!0)){}

var p$2=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(p$2||{});let m$1=defineComponent({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(r,{slots:t,attrs:o}){return ()=>{let{features:e,...d}=r,n={"aria-hidden":(e&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return P$4({ourProps:n,theirProps:d,slot:{},attrs:o,slots:t,name:"Hidden"})}}});

function p$1(n){var t;let r=(t=n==null?void 0:n.form)!=null?t:n.closest("form");if(!!r){for(let i of r.elements)if(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image"){i.click();return}}}

var d$2=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(d$2||{});function n(){let o=ref(0);return o}

function r$2(n,e,d,o){}

var D$1=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(D$1||{});let V=Object.assign(defineComponent({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:ref(new Set)}},inheritAttrs:!1,setup(o$1,{attrs:u,slots:l,expose:r}){let t=ref(null);r({el:t,$el:t});let a=computed(()=>e$1());O({ownerDocument:a},computed(()=>Boolean(o$1.features&16)));let e=A({ownerDocument:a,container:t,initialFocus:computed(()=>o$1.initialFocus)},computed(()=>Boolean(o$1.features&2)));N({ownerDocument:a,container:t,containers:o$1.containers,previousActiveElement:e},computed(()=>Boolean(o$1.features&8)));let s=n();function i(){let n=o(t);!n||u$4(s.value,{[d$2.Forwards]:()=>P$3(n,L$2.First),[d$2.Backwards]:()=>P$3(n,L$2.Last)});}return ()=>{let n={},T={ref:t},{features:c,initialFocus:C,containers:_,...w}=o$1;return h$2(Fragment$1,[Boolean(c&4)&&h$2(m$1,{as:"button",type:"button",onFocus:i,features:p$2.Focusable}),P$4({ourProps:T,theirProps:{...u,...w},slot:n,attrs:u,slots:l,name:"FocusTrap"}),Boolean(c&4)&&h$2(m$1,{as:"button",type:"button",onFocus:i,features:p$2.Focusable})])}}}),{features:D$1});function O({ownerDocument:o},u){let l=ref(null),r={value:!1};onMounted(()=>{watch(u,(t,a)=>{var e;t!==a&&(!u.value||(r.value=!0,l.value||(l.value=(e=o.value)==null?void 0:e.activeElement)));},{immediate:!0}),watch(u,(t,a,e)=>{t!==a&&(!u.value||e(()=>{r.value!==!1&&(r.value=!1,H(l.value),l.value=null);}));},{immediate:!0});});}function A({ownerDocument:o$1,container:u,initialFocus:l},r){let t=ref(null);return onMounted(()=>{watch([u,l,r],(a,e)=>{if(a.every((i,n)=>(e==null?void 0:e[n])===i)||!r.value)return;let s=o(u);!s||requestAnimationFrame(()=>{var T,c;let i=o(l),n=(T=o$1.value)==null?void 0:T.activeElement;if(i){if(i===n){t.value=n;return}}else if(s.contains(n)){t.value=n;return}i?H(i):P$3(s,L$2.First|L$2.NoScroll)===N$1.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),t.value=(c=o$1.value)==null?void 0:c.activeElement;});},{immediate:!0,flush:"post"});}),t}function N({ownerDocument:o,container:u,containers:l,previousActiveElement:r},t){var a;r$2((a=o.value)==null?void 0:a.defaultView);}

let l$1="body > *",i$1=new Set,r$1=new Map;function u$2(t){t.setAttribute("aria-hidden","true"),t.inert=!0;}function s$1(t){let n=r$1.get(t);!n||(n["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert);}function g$2(t,n=ref(!0)){watchEffect(d=>{if(!n.value||!t.value)return;let a=t.value,o=e$1();if(!!o){i$1.add(a);for(let e of r$1.keys())e.contains(a)&&(s$1(e),r$1.delete(e));o.querySelectorAll(l$1).forEach(e=>{if(e instanceof HTMLElement){for(let f of i$1)if(e.contains(f))return;i$1.size===1&&(r$1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u$2(e));}}),d(()=>{if(i$1.delete(a),i$1.size>0)o.querySelectorAll(l$1).forEach(e=>{if(e instanceof HTMLElement&&!r$1.has(e)){for(let f of i$1)if(e.contains(f))return;r$1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u$2(e);}});else for(let e of r$1.keys())s$1(e),r$1.delete(e);});}});}

let e=Symbol("ForcePortalRootContext");function u$1(){return inject(e,!1)}let P$2=defineComponent({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(o,{slots:t,attrs:r}){return provide(e,o.force),()=>{let{force:f,...n}=o;return P$4({theirProps:n,ourProps:{},slot:{},slots:t,attrs:r,name:"ForcePortalRoot"})}}});

function c$1(t){let r=e$1();if(!r){if(t===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)}let o=r.getElementById("headlessui-portal-root");if(o)return o;let e=r.createElement("div");return e.setAttribute("id","headlessui-portal-root"),r.body.appendChild(e)}let R$1=defineComponent({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:r,attrs:o}){let e=ref(null),p=computed(()=>e$1()),n=u$1(),u=inject(g$1,null),l=ref(n===!0||u==null?c$1(e.value):u.resolveTarget());return watchEffect(()=>{n||u!=null&&(l.value=u.resolveTarget());}),onUnmounted(()=>{var i,m;let a=(i=p.value)==null?void 0:i.getElementById("headlessui-portal-root");!a||l.value===a&&l.value.children.length<=0&&((m=l.value.parentElement)==null||m.removeChild(l.value));}),()=>{if(l.value===null)return null;let a={ref:e,"data-headlessui-portal":""};return h$2(Teleport,{to:l.value},P$4({ourProps:a,theirProps:t,slot:{},attrs:o,slots:r,name:"Portal"}))}}}),g$1=Symbol("PortalGroupContext"),L$1=defineComponent({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:r,slots:o}){let e=reactive({resolveTarget(){return t.target}});return provide(g$1,e),()=>{let{target:p,...n}=t;return P$4({theirProps:n,ourProps:{},slot:{},attrs:r,slots:o,name:"PortalGroup"})}}});

let i=Symbol("StackContext");var c=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(c||{});function a$1(){return inject(i,()=>{})}function s({type:n,element:o,onUpdate:e}){let m=a$1();function t(...r){e==null||e(...r),m(...r);}onMounted(()=>{t(0,n,o),onUnmounted(()=>{t(1,n,o);});}),provide(i,t);}

let u=Symbol("DescriptionContext");function b(){let t=inject(u,null);if(t===null)throw new Error("Missing parent");return t}function P$1({slot:t=ref({}),name:o="Description",props:s={}}={}){let e=ref([]);function n(r){return e.value.push(r),()=>{let i=e.value.indexOf(r);i!==-1&&e.value.splice(i,1);}}return provide(u,{register:n,slot:t,name:o,props:s}),computed(()=>e.value.length>0?e.value.join(" "):void 0)}let S=defineComponent({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t$1,{attrs:o,slots:s}){let e=b(),n=`headlessui-description-${t()}`;return onMounted(()=>onUnmounted(e.register(n))),()=>{let{name:r="Description",slot:i=ref({}),props:l={}}=e,c=t$1,d={...Object.entries(l).reduce((f,[a,g])=>Object.assign(f,{[a]:unref(g)}),{}),id:n};return P$4({ourProps:d,theirProps:c,slot:i.value,attrs:o,slots:s,name:r})}}});

var ge=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ge||{});let M=Symbol("DialogContext");function R(a){let n=inject(M,null);if(n===null){let t=new Error(`<${a} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return n}let T="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ae=defineComponent({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:T},initialFocus:{type:Object,default:null}},emits:{close:a=>!0},setup(a,{emit:n,attrs:t$1,slots:u,expose:i}){var A;let d=ref(!1);onMounted(()=>{d.value=!0;});let r=ref(0),p=p$4(),h=computed(()=>a.open===T&&p!==null?u$4(p.value,{[l$2.Open]:!0,[l$2.Closed]:!1}):a.open),E=ref(new Set),f=ref(null),B=ref(null),k=computed(()=>e$1());if(i({el:f,$el:f}),!(a.open!==T||p!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof h.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value===T?void 0:a.open}`);let c$1=computed(()=>d.value&&h.value?0:1),$=computed(()=>c$1.value===0),C=computed(()=>r.value>1),Y=inject(M,null)!==null,q=computed(()=>C.value?"parent":"leaf");g$2(f,computed(()=>C.value?$.value:!1)),s({type:"Dialog",element:f,onUpdate:(o,l,e)=>{if(l==="Dialog")return u$4(o,{[c.Add](){E.value.add(e),r.value+=1;},[c.Remove](){E.value.delete(e),r.value-=1;}})}});let G=P$1({name:"DialogDescription",slot:computed(()=>({open:h.value}))}),z=`headlessui-dialog-${t()}`,w=ref(null),y={titleId:w,panelRef:ref(null),dialogState:c$1,setTitleId(o){w.value!==o&&(w.value=o);},close(){n("close",!1);}};return provide(M,y),T$1(()=>{var l,e,m;return [...Array.from((e=(l=k.value)==null?void 0:l.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?e:[]).filter(s=>!(!(s instanceof HTMLElement)||s.contains(o(B))||y.panelRef.value&&s.contains(y.panelRef.value))),(m=y.panelRef.value)!=null?m:f.value]},(o,l)=>{y.close(),nextTick(()=>l==null?void 0:l.focus());},computed(()=>c$1.value===0&&!C.value)),r$2((A=k.value)==null?void 0:A.defaultView),watchEffect(o=>{var j;if(c$1.value!==0||Y)return;let l=k.value;if(!l)return;let e=l==null?void 0:l.documentElement,m=(j=l.defaultView)!=null?j:window,s=e.style.overflow,J=e.style.paddingRight,H=m.innerWidth-e.clientWidth;if(e.style.overflow="hidden",H>0){let Q=e.clientWidth-e.offsetWidth,X=H-Q;e.style.paddingRight=`${X}px`;}o(()=>{e.style.overflow=s,e.style.paddingRight=J;});}),watchEffect(o$1=>{if(c$1.value!==0)return;let l=o(f);if(!l)return;let e=new IntersectionObserver(m=>{for(let s of m)s.boundingClientRect.x===0&&s.boundingClientRect.y===0&&s.boundingClientRect.width===0&&s.boundingClientRect.height===0&&y.close();});e.observe(l),o$1(()=>e.disconnect());}),()=>{let o={...t$1,ref:f,id:z,role:"dialog","aria-modal":c$1.value===0?!0:void 0,"aria-labelledby":w.value,"aria-describedby":G.value},{open:l,initialFocus:e,...m}=a,s={open:c$1.value===0};return h$2(P$2,{force:!0},()=>[h$2(R$1,()=>h$2(L$1,{target:f.value},()=>h$2(P$2,{force:!1},()=>h$2(V,{initialFocus:e,containers:E,features:$.value?u$4(q.value,{parent:V.features.RestoreFocus,leaf:V.features.All&~V.features.FocusLock}):V.features.None},()=>P$4({ourProps:o,theirProps:m,slot:s,attrs:t$1,slots:u,visible:c$1.value===0,features:R$2.RenderStrategy|R$2.Static,name:"Dialog"}))))),h$2(m$1,{features:p$2.Hidden,ref:B})])}}});defineComponent({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:n,slots:t$1}){let u=R("DialogOverlay"),i=`headlessui-dialog-overlay-${t()}`;function d(r){r.target===r.currentTarget&&(r.preventDefault(),r.stopPropagation(),u.close());}return ()=>P$4({ourProps:{id:i,"aria-hidden":!0,onClick:d},theirProps:a,slot:{open:u.dialogState.value===0},attrs:n,slots:t$1,name:"DialogOverlay"})}});defineComponent({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(a,{attrs:n,slots:t$1,expose:u}){let i=R("DialogBackdrop"),d=`headlessui-dialog-backdrop-${t()}`,r=ref(null);return u({el:r,$el:r}),onMounted(()=>{if(i.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let p=a,h={id:d,ref:r,"aria-hidden":!0};return h$2(P$2,{force:!0},()=>h$2(R$1,()=>P$4({ourProps:h,theirProps:{...n,...p},slot:{open:i.dialogState.value===0},attrs:n,slots:t$1,name:"DialogBackdrop"})))}}});let Le=defineComponent({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:n,slots:t$1,expose:u}){let i=R("DialogPanel"),d=`headlessui-dialog-panel-${t()}`;u({el:i.panelRef,$el:i.panelRef});function r(p){p.stopPropagation();}return ()=>{let p={id:d,ref:i.panelRef,onClick:r};return P$4({ourProps:p,theirProps:a,slot:{open:i.dialogState.value===0},attrs:n,slots:t$1,name:"DialogPanel"})}}}),We=defineComponent({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(a,{attrs:n,slots:t$1}){let u=R("DialogTitle"),i=`headlessui-dialog-title-${t()}`;return onMounted(()=>{u.setTitleId(i),onUnmounted(()=>u.setTitleId(null));}),()=>P$4({ourProps:{id:i},theirProps:a,slot:{open:u.dialogState.value===0},attrs:n,slots:t$1,name:"DialogTitle"})}});S;

var W=(i=>(i[i.Open=0]="Open",i[i.Closed=1]="Closed",i))(W||{}),J=(i=>(i[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i))(J||{});function z(l){requestAnimationFrame(()=>requestAnimationFrame(l));}let E=Symbol("MenuContext");function D(l){let S=inject(E,null);if(S===null){let i=new Error(`<${l} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,D),i}return S}let fe$1=defineComponent({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:S,attrs:i}){let v=ref(1),e=ref(null),p=ref(null),u=ref([]),f=ref(""),d=ref(null),I=ref(1);function o$1(r=a=>a){let a=d.value!==null?u.value[d.value]:null,n=w$1(r(u.value.slice()),b=>o(b.dataRef.domRef)),s=a?n.indexOf(a):null;return s===-1&&(s=null),{items:n,activeItemIndex:s}}let t={menuState:v,buttonRef:e,itemsRef:p,items:u,searchQuery:f,activeItemIndex:d,activationTrigger:I,closeMenu:()=>{v.value=1,d.value=null;},openMenu:()=>v.value=0,goToItem(r,a,n){let s=o$1(),b=x(r===a$2.Specific?{focus:a$2.Specific,id:a}:{focus:r},{resolveItems:()=>s.items,resolveActiveIndex:()=>s.activeItemIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.disabled});f.value="",d.value=b,I.value=n!=null?n:1,u.value=s.items;},search(r){let n=f.value!==""?0:1;f.value+=r.toLowerCase();let b=(d.value!==null?u.value.slice(d.value+n).concat(u.value.slice(0,d.value+n)):u.value).find(w=>w.dataRef.textValue.startsWith(f.value)&&!w.dataRef.disabled),h=b?u.value.indexOf(b):-1;h===-1||h===d.value||(d.value=h,I.value=1);},clearSearch(){f.value="";},registerItem(r,a){let n=o$1(s=>[...s,{id:r,dataRef:a}]);u.value=n.items,d.value=n.activeItemIndex,I.value=1;},unregisterItem(r){let a=o$1(n=>{let s=n.findIndex(b=>b.id===r);return s!==-1&&n.splice(s,1),n});u.value=a.items,d.value=a.activeItemIndex,I.value=1;}};return T$1([e,p],(r,a)=>{var n;t.closeMenu(),F$2(a,M$1.Loose)||(r.preventDefault(),(n=o(e))==null||n.focus());},computed(()=>v.value===0)),provide(E,t),c$3(computed(()=>u$4(v.value,{[0]:l$2.Open,[1]:l$2.Closed}))),()=>{let r={open:v.value===0};return P$4({ourProps:{},theirProps:l,slot:r,slots:S,attrs:i,name:"Menu"})}}}),me=defineComponent({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(l,{attrs:S,slots:i,expose:v}){let e=D("MenuButton"),p=`headlessui-menu-button-${t()}`;v({el:e.buttonRef,$el:e.buttonRef});function u(o$2){switch(o$2.key){case o$1.Space:case o$1.Enter:case o$1.ArrowDown:o$2.preventDefault(),o$2.stopPropagation(),e.openMenu(),nextTick(()=>{var t;(t=o(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(a$2.First);});break;case o$1.ArrowUp:o$2.preventDefault(),o$2.stopPropagation(),e.openMenu(),nextTick(()=>{var t;(t=o(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(a$2.Last);});break}}function f(o){switch(o.key){case o$1.Space:o.preventDefault();break}}function d(o$1){l.disabled||(e.menuState.value===0?(e.closeMenu(),nextTick(()=>{var t;return (t=o(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(o$1.preventDefault(),e.openMenu(),z(()=>{var t;return (t=o(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})));}let I=b$2(computed(()=>({as:l.as,type:S.type})),e.buttonRef);return ()=>{var a;let o$1={open:e.menuState.value===0},t={ref:e.buttonRef,id:p,type:I.value,"aria-haspopup":!0,"aria-controls":(a=o(e.itemsRef))==null?void 0:a.id,"aria-expanded":l.disabled?void 0:e.menuState.value===0,onKeydown:u,onKeyup:f,onClick:d};return P$4({ourProps:t,theirProps:l,slot:o$1,attrs:S,slots:i,name:"MenuButton"})}}}),pe=defineComponent({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(l,{attrs:S,slots:i,expose:v}){let e=D("MenuItems"),p=`headlessui-menu-items-${t()}`,u=ref(null);v({el:e.itemsRef,$el:e.itemsRef}),p$3({container:computed(()=>o(e.itemsRef)),enabled:computed(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none");}});function f(t){var r;switch(u.value&&clearTimeout(u.value),t.key){case o$1.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case o$1.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let n=e.items.value[e.activeItemIndex.value];(r=o(n.dataRef.domRef))==null||r.click();}e.closeMenu(),nextTick(()=>{var a;return (a=o(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})});break;case o$1.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(a$2.Next);case o$1.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(a$2.Previous);case o$1.Home:case o$1.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(a$2.First);case o$1.End:case o$1.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(a$2.Last);case o$1.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),nextTick(()=>{var a;return (a=o(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})});break;case o$1.Tab:t.preventDefault(),t.stopPropagation();break;default:t.key.length===1&&(e.search(t.key),u.value=setTimeout(()=>e.clearSearch(),350));break}}function d(t){switch(t.key){case o$1.Space:t.preventDefault();break}}let I=p$4(),o$2=computed(()=>I!==null?I.value===l$2.Open:e.menuState.value===0);return ()=>{var n,s;let t={open:e.menuState.value===0},r={"aria-activedescendant":e.activeItemIndex.value===null||(n=e.items.value[e.activeItemIndex.value])==null?void 0:n.id,"aria-labelledby":(s=o(e.buttonRef))==null?void 0:s.id,id:p,onKeydown:f,onKeyup:d,role:"menu",tabIndex:0,ref:e.itemsRef};return P$4({ourProps:r,theirProps:l,slot:t,attrs:S,slots:i,features:R$2.RenderStrategy|R$2.Static,visible:o$2.value,name:"MenuItems"})}}}),ve=defineComponent({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(l,{slots:S,attrs:i,expose:v}){let e=D("MenuItem"),p=`headlessui-menu-item-${t()}`,u=ref(null);v({el:u,$el:u});let f=computed(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===p:!1),d=computed(()=>({disabled:l.disabled,textValue:"",domRef:u}));onMounted(()=>{var n,s;let a=(s=(n=o(u))==null?void 0:n.textContent)==null?void 0:s.toLowerCase().trim();a!==void 0&&(d.value.textValue=a);}),onMounted(()=>e.registerItem(p,d)),onUnmounted(()=>e.unregisterItem(p)),watchEffect(()=>{e.menuState.value===0&&(!f.value||e.activationTrigger.value!==0&&nextTick(()=>{var a,n;return (n=(a=o(u))==null?void 0:a.scrollIntoView)==null?void 0:n.call(a,{block:"nearest"})}));});function I(a){if(l.disabled)return a.preventDefault();e.closeMenu(),nextTick(()=>{var n;return (n=o(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})});}function o$1(){if(l.disabled)return e.goToItem(a$2.Nothing);e.goToItem(a$2.Specific,p);}function t$1(){l.disabled||f.value||e.goToItem(a$2.Specific,p,0);}function r(){l.disabled||!f.value||e.goToItem(a$2.Nothing);}return ()=>{let{disabled:a}=l,n={active:f.value,disabled:a};return P$4({ourProps:{id:p,ref:u,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,onClick:I,onFocus:o$1,onPointermove:t$1,onMousemove:t$1,onPointerleave:r,onMouseleave:r},theirProps:l,slot:n,attrs:i,slots:S,name:"MenuItem"})}}});

let a=Symbol("LabelContext");function p(){let t=inject(a,null);if(t===null){let n=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,p),n}return t}function K$1({slot:t={},name:n="Label",props:i={}}={}){let e=ref([]);function r(o){return e.value.push(o),()=>{let l=e.value.indexOf(o);l!==-1&&e.value.splice(l,1);}}return provide(a,{register:r,slot:t,name:n,props:i}),computed(()=>e.value.length>0?e.value.join(" "):void 0)}let P=defineComponent({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t$1,{slots:n,attrs:i}){let e=p(),r=`headlessui-label-${t()}`;return onMounted(()=>onUnmounted(e.register(r))),()=>{let{name:o="Label",slot:l={},props:d={}}=e,{passive:c,...s}=t$1,u={...Object.entries(d).reduce((f,[b,m])=>Object.assign(f,{[b]:unref(m)}),{}),id:r};return c&&(delete u.onClick,delete s.onClick),P$4({ourProps:u,theirProps:s,slot:l,attrs:i,slots:n,name:o})}}});

let h=Symbol("GroupContext");defineComponent({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:a,attrs:n}){let r=ref(null),u=K$1({name:"SwitchLabel",props:{onClick(){!r.value||(r.value.click(),r.value.focus({preventScroll:!0}));}}}),t=P$1({name:"SwitchDescription"});return provide(h,{switchRef:r,labelledby:u,describedby:t}),()=>P$4({theirProps:l,ourProps:{},slot:{},slots:a,attrs:n,name:"SwitchGroup"})}});let Y=defineComponent({name:"Switch",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(l,{emit:a,attrs:n,slots:r,expose:u}){let t$1=inject(h,null),p=`headlessui-switch-${t()}`;function s(){a("update:modelValue",!l.modelValue);}let b=ref(null),i=t$1===null?b:t$1.switchRef,S=b$2(computed(()=>({as:l.as,type:n.type})),i);u({el:i,$el:i});function w(e){e.preventDefault(),s();}function v(e){e.key===o$1.Space?(e.preventDefault(),s()):e.key===o$1.Enter&&p$1(e.currentTarget);}function R(e){e.preventDefault();}return ()=>{let{name:e,value:g,modelValue:o,...k}=l,D={checked:o},K={id:p,ref:i,role:"switch",type:S.value,tabIndex:0,"aria-checked":o,"aria-labelledby":t$1==null?void 0:t$1.labelledby.value,"aria-describedby":t$1==null?void 0:t$1.describedby.value,onClick:w,onKeyup:v,onKeypress:R};return h$2(Fragment$1,[e!=null&&o!=null?h$2(m$1,A$1({features:p$2.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o,name:e,value:g})):null,P$4({ourProps:K,theirProps:{...n,...k},slot:D,attrs:n,slots:r,name:"Switch"})])}}});P;S;

function l(r){let e={called:!1};return (...t)=>{if(!e.called)return e.called=!0,r(...t)}}

function r(){let i=[],o=[],t={enqueue(e){o.push(e);},requestAnimationFrame(...e){let a=requestAnimationFrame(...e);t.add(()=>cancelAnimationFrame(a));},nextFrame(...e){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...e);});},setTimeout(...e){let a=setTimeout(...e);t.add(()=>clearTimeout(a));},add(e){i.push(e);},dispose(){for(let e of i.splice(0))e();},async workQueue(){for(let e of o.splice(0))await e();}};return t}

function m(e,...t){e&&t.length>0&&e.classList.add(...t);}function d$1(e,...t){e&&t.length>0&&e.classList.remove(...t);}var g=(i=>(i.Finished="finished",i.Cancelled="cancelled",i))(g||{});function F$1(e,t){let i=r();if(!e)return i.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,s]=[n,a].map(o=>{let[u=0]=o.split(",").filter(Boolean).map(r=>r.includes("ms")?parseFloat(r):parseFloat(r)*1e3).sort((r,c)=>c-r);return u});return l!==0?i.setTimeout(()=>t("finished"),l+s):t("finished"),i.add(()=>t("cancelled")),i.dispose}function L(e,t,i,n,a,l$1){let s=r(),o=l$1!==void 0?l(l$1):()=>{};return d$1(e,...a),m(e,...t,...i),s.nextFrame(()=>{d$1(e,...i),m(e,...n),s.add(F$1(e,u=>(d$1(e,...n,...t),m(e,...a),o(u))));}),s.add(()=>d$1(e,...t,...i,...n,...a)),s.add(()=>o("cancelled")),s.dispose}

function d(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let B=Symbol("TransitionContext");var ae=(a=>(a.Visible="visible",a.Hidden="hidden",a))(ae||{});function le(){return inject(B,null)!==null}function ie(){let e=inject(B,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function se(){let e=inject(F,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let F=Symbol("NestingContext");function w(e){return "children"in e?w(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function K(e){let t=ref([]),a=ref(!1);onMounted(()=>a.value=!0),onUnmounted(()=>a.value=!1);function s(r,n=O$1.Hidden){let l=t.value.findIndex(({id:i})=>i===r);l!==-1&&(u$4(n,{[O$1.Unmount](){t.value.splice(l,1);},[O$1.Hidden](){t.value[l].state="hidden";}}),!w(t)&&a.value&&(e==null||e()));}function v(r){let n=t.value.find(({id:l})=>l===r);return n?n.state!=="visible"&&(n.state="visible"):t.value.push({id:r,state:"visible"}),()=>s(r,O$1.Unmount)}return {children:t,register:v,unregister:s}}let _=R$2.RenderStrategy,oe=defineComponent({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t$1,attrs:a,slots:s,expose:v}){if(!le()&&f())return ()=>h$2(fe,{...e,onBeforeEnter:()=>t$1("beforeEnter"),onAfterEnter:()=>t$1("afterEnter"),onBeforeLeave:()=>t$1("beforeLeave"),onAfterLeave:()=>t$1("afterLeave")},s);let r=ref(null),n=ref("visible"),l=computed(()=>e.unmount?O$1.Unmount:O$1.Hidden);v({el:r,$el:r});let{show:i,appear:x}=ie(),{register:g$1,unregister:p}=se(),R={value:!0},m=t(),S={value:!1},N=K(()=>{S.value||(n.value="hidden",p(m),t$1("afterLeave"));});onMounted(()=>{let o=g$1(m);onUnmounted(o);}),watchEffect(()=>{if(l.value===O$1.Hidden&&!!m){if(i&&n.value!=="visible"){n.value="visible";return}u$4(n.value,{["hidden"]:()=>p(m),["visible"]:()=>g$1(m)});}});let k=d(e.enter),$=d(e.enterFrom),q=d(e.enterTo),O=d(e.entered),z=d(e.leave),G=d(e.leaveFrom),J=d(e.leaveTo);onMounted(()=>{watchEffect(()=>{if(n.value==="visible"){let o$1=o(r);if(o$1 instanceof Comment&&o$1.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}});});function Q(o$1){let c=R.value&&!x.value,u=o(r);!u||!(u instanceof HTMLElement)||c||(S.value=!0,i.value&&t$1("beforeEnter"),i.value||t$1("beforeLeave"),o$1(i.value?L(u,k,$,q,O,C=>{S.value=!1,C===g.Finished&&t$1("afterEnter");}):L(u,z,G,J,O,C=>{S.value=!1,C===g.Finished&&(w(N)||(n.value="hidden",p(m),t$1("afterLeave")));})));}return onMounted(()=>{watch([i],(o,c,u)=>{Q(u),R.value=!1;},{immediate:!0});}),provide(F,N),c$3(computed(()=>u$4(n.value,{["visible"]:l$2.Open,["hidden"]:l$2.Closed}))),()=>{let{appear:o,show:c,enter:u,enterFrom:C,enterTo:de,entered:ve,leave:pe,leaveFrom:me,leaveTo:Te,...W}=e;return P$4({theirProps:W,ourProps:{ref:r},slot:{},slots:s,attrs:a,features:_,visible:n.value==="visible",name:"TransitionChild"})}}}),ue=oe,fe=defineComponent({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:s}){let v=p$4(),r=computed(()=>e.show===null&&v!==null?u$4(v.value,{[l$2.Open]:!0,[l$2.Closed]:!1}):e.show);watchEffect(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let n=ref(r.value?"visible":"hidden"),l=K(()=>{n.value="hidden";}),i=ref(!0),x={show:r,appear:computed(()=>e.appear||!i.value)};return onMounted(()=>{watchEffect(()=>{i.value=!1,r.value?n.value="visible":w(l)||(n.value="hidden");});}),provide(F,l),provide(B,x),()=>{let g=N$2(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return P$4({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...s,default:()=>[h$2(ue,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...p,...g},s.default)]},attrs:{},features:_,visible:n.value==="visible",name:"Transition"})}}});

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
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    _asyncData: {},
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
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
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
    const vm = getCurrentInstance();
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
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => toRef(useNuxtApp().payload, "error");
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
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !options.external) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  if (!isExternal && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  if (isExternal) {
    if (options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
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
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
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
          return h$2(
            resolveComponent("RouterLink"),
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
        return h$2("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$5 = defineNuxtLink({ componentName: "NuxtLink" });
const inlineConfig = {};
defuFn(inlineConfig);
function useHead(meta2) {
  const resolvedMeta = isFunction(meta2) ? computed(meta2) : meta2;
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
  return template(unref(title));
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
    allHeadObjs.push(shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(unref(objs));
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
    watchEffect(() => {
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = ref(_meta);
    const headObj = computed(() => {
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
const Script = defineComponent({
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
const NoScript = defineComponent({
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
const Link = defineComponent({
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
const Base = defineComponent({
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
const Title = defineComponent({
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
const Meta = defineComponent({
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
const Style = defineComponent({
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
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = defineComponent({
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
const Body = defineComponent({
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
const appHead = { "meta": [{ "property": "og:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "og:type", "content": "product" }, { "property": "og:description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "property": "twitter:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "twitter:description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "property": "og:title", "content": "UMaestro - Cr\xE9er ton meilleur projet avec nous !" }, { "property": "description", "content": "Site regroupant une multitude d'outils dans de multiples domaines diff\xE9rents." }, { "name": "twitter:card", "content": "summary" }], "link": [{ "rel": "icon", "type": "image/png", "href": "/favicon-32x32.png" }], "style": [], "script": [], "noscript": [], "titleTemplate": "UMaestro - %s", "bodyAttrs": { "class": "bg-background dark:bg-dark-950 dark:text-white transition ease-in duration-100" }, "charset": "utf-8", "viewport": "width=device-width, initial-scale=1" };
const appLayoutTransition = { "name": "layout", "mode": "out-in" };
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2 = defineNuxtPlugin((nuxtApp) => {
  useHead(markRaw({ title: "", ...appHead }));
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
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h$2(component, props === true ? {} : props, slots) : h$2(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = defineComponent({
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
    const isNested = inject(isNestedKey, false);
    provide(isNestedKey, true);
    return () => {
      return h$2(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const transitionProps = (_a = routeProps.route.meta.pageTransition) != null ? _a : appPageTransition;
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_b = routeProps.route.meta.keepalive) != null ? _b : appKeepalive,
              isNested && nuxtApp.isHydrating ? h$2(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) : h$2(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => h$2(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h$2(props.routeProps.Component);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$v = {
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
  _push(`<div${ssrRenderAttrs(_attrs)}><input${ssrRenderAttr("placeholder", $props.placeholder)} type="text" class="${ssrRenderClass([[
    $props.big ? "text-md px-6 py-5" : "px-6 py-4 text-sm",
    $props.white ? "bg-white text-black" : "border-dark-800 bg-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-dark-900",
    $props.classes
  ], "w-full rounded-lg border text-sm focus:outline-none"])}"${ssrRenderAttr("value", $props.modelValue)}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""}></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __nuxt_component_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$u = {
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
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["flex items-center rounded-md text-base font-medium shadow-xl duration-300 ease-in", [
      $options.colors,
      $props.small ? "px-5 py-3" : "px-6 py-4",
      $props.centerText && "justify-center"
    ]]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "icon_left", {}, null, _push, _parent);
  _push(`<span class="${ssrRenderClass(["whitespace-pre-line", $props.centerText ? "text-center" : "text-left"])}">${ssrInterpolate($props.text)}</span>`);
  ssrRenderSlot(_ctx.$slots, "icon_right", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$r]]);
const client = axios.create({
  baseURL: "https://api.umaestro.fr/"
});
client.interceptors.request.use(function(config) {
  return config;
});
client.interceptors.response.use(
  async function(value) {
    return value;
  },
  function(error) {
  }
);
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
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
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
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
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
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
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
  return !!(isRef(o) && o.effect);
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
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
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
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
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
    nextTick().then(() => {
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
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
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
  const store = reactive(assign(
    {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
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
    assign(toRaw(store), setupStore);
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
    const currentInstance = getCurrentInstance();
    pinia = (pinia) || currentInstance && inject(piniaSymbol);
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
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key in store) {
      const value = store[key];
      if (isRef(value) || isReactive(value)) {
        refs[key] = toRef(store, key);
      }
    }
    return refs;
  }
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
          const { data } = await client.get("/auth/user");
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
const meta$f = {
  middleware: ["auth"]
};
const _sfc_main$t = {
  props: {
    reaction: {
      type: String,
      default: "poop"
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-md text-medium flex items-center gap-2 rounded-full bg-gray-200 px-4 py-3 text-dark-900 dark:bg-dark-700 dark:text-white" }, _attrs))}><img class="h-6 w-6 object-contain"${ssrRenderAttr("src", `/objects/${$props.reaction}.png`)}> 54 </div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Reaction.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$q]]);
const meta$e = void 0;
const _sfc_main$s = {
  props: {
    color: {
      type: Boolean,
      default: true
    }
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["h-full cursor-pointer rounded-3xl shadow-lg duration-300 ease-in hover:-translate-y-1 hover:shadow-2xl", $props.color && "bg-white dark:bg-dark-900 hover:dark:bg-dark-800"]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$r = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_Card = __nuxt_component_4$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "/articles/slug" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, { class: "p-6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<header${_scopeId2}><img src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png" class="max-h-52 w-full rounded-xl object-cover" alt="Article Image"${_scopeId2}></header><main class="py-4"${_scopeId2}><div class="mb-2 text-xl font-semibold"${_scopeId2}>Titre de l&#39;article</div><div class="text-md dark:text-gray-300"${_scopeId2}> Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro </div></main><footer${_scopeId2}><span class="text-sm dark:text-gray-400"${_scopeId2}>le 27/03/2022</span></footer>`);
            } else {
              return [
                createVNode("header", null, [
                  createVNode("img", {
                    src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                    class: "max-h-52 w-full rounded-xl object-cover",
                    alt: "Article Image"
                  })
                ]),
                createVNode("main", { class: "py-4" }, [
                  createVNode("div", { class: "mb-2 text-xl font-semibold" }, "Titre de l'article"),
                  createVNode("div", { class: "text-md dark:text-gray-300" }, " Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro ")
                ]),
                createVNode("footer", null, [
                  createVNode("span", { class: "text-sm dark:text-gray-400" }, "le 27/03/2022")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, { class: "p-6" }, {
            default: withCtx(() => [
              createVNode("header", null, [
                createVNode("img", {
                  src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                  class: "max-h-52 w-full rounded-xl object-cover",
                  alt: "Article Image"
                })
              ]),
              createVNode("main", { class: "py-4" }, [
                createVNode("div", { class: "mb-2 text-xl font-semibold" }, "Titre de l'article"),
                createVNode("div", { class: "text-md dark:text-gray-300" }, " Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro ")
              ]),
              createVNode("footer", null, [
                createVNode("span", { class: "text-sm dark:text-gray-400" }, "le 27/03/2022")
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
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Thumbnails/Big.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$q = {
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
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "/articles/slug" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Card, { class: "flex gap-6 p-6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img src="https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png" class="${ssrRenderClass([$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"])}" alt="Article Image"${_scopeId2}><div${_scopeId2}><div class="mb-2 text-xl font-semibold"${_scopeId2}>Titre de l&#39;article</div><div class="text-md dark:text-gray-300"${_scopeId2}> Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro </div><span class="mt-4 block text-sm dark:text-gray-400"${_scopeId2}>le 27/03/2022</span></div>`);
            } else {
              return [
                createVNode("img", {
                  src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                  class: [$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"],
                  alt: "Article Image"
                }, null, 2),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-2 text-xl font-semibold" }, "Titre de l'article"),
                  createVNode("div", { class: "text-md dark:text-gray-300" }, " Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro "),
                  createVNode("span", { class: "mt-4 block text-sm dark:text-gray-400" }, "le 27/03/2022")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Card, { class: "flex gap-6 p-6" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: "https://freepsdmock-up.com/wp-content/uploads/2020/11/bright-color-ui-featured-image-466x283.png",
                class: [$props.superSmall ? "w-32" : "w-1/3", "rounded-xl object-cover"],
                alt: "Article Image"
              }, null, 2),
              createVNode("div", null, [
                createVNode("div", { class: "mb-2 text-xl font-semibold" }, "Titre de l'article"),
                createVNode("div", { class: "text-md dark:text-gray-300" }, " Bien que les appels et la mise \xE0 disposition de serveurs restent gratuits, nous avons la possibilit\xE9 d\u2019acheter Discord Nitro "),
                createVNode("span", { class: "mt-4 block text-sm dark:text-gray-400" }, "le 27/03/2022")
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
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Articles/Thumbnails/Small.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$n]]);
const meta$d = void 0;
const meta$c = {
  layout: "empty"
};
const meta$b = {
  layout: "footer"
};
const meta$a = void 0;
const _sfc_main$p = {
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    barStyle: Object,
    duration: { type: String, default: "12s" },
    direction: { type: String, default: "normal" },
    delay: { type: String, default: "0s" }
  },
  setup(__props) {
    const props = __props;
    const customStyle = computed(() => {
      return Object.assign({}, props.barStyle, {
        "animation-duration": props.duration,
        "animation-direction": props.direction,
        "animation-delay": props.delay
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `vifnslb-container-${__props.direction === "vertical" ? "vertical" : "horizontal"}`
      }, _attrs))} data-v-487323f9><div class="${ssrRenderClass(`vifnslb-element-${__props.direction === "vertical" ? "vertical" : "horizontal"}`)}" style="${ssrRenderStyle(unref(customStyle))}" data-v-487323f9><!--[-->`);
      ssrRenderList(2, (i) => {
        _push(`<div class="${ssrRenderClass(`vifnslb-bar-${__props.direction === "vertical" ? "vertical" : "horizontal"}`)}" data-v-487323f9>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-487323f9"]]);
const __nuxt_component_9 = defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = ref(false);
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
      return createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const meta$9 = void 0;
const _sfc_main$o = {
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.Icons[$props.icon]), { class: "mx-auto mb-4 h-12 w-12" }, null), _parent);
  _push(`<div class="text-2xl font-extrabold">${ssrInterpolate($props.value)}</div><div class="text-lg">${ssrInterpolate($props.name)}</div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Stat.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$n = {
  props: {
    color: {
      type: String,
      default: "#9ca3af"
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 21 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path${ssrRenderAttr("fill", $props.color)} d="M20 8.09994C20.1 7.59994 19.7 6.99994 19.2 6.99994L13.5 6.19994L10.9 0.999938C10.8 0.799938 10.7 0.699938 10.5 0.599938C10 0.299938 9.4 0.499938 9.1 0.999938L6.6 6.19994L0.9 6.99994C0.6 6.99994 0.4 7.09994 0.3 7.29994C-0.1 7.69994 -0.1 8.29994 0.3 8.69994L4.4 12.6999L3.4 18.3999C3.4 18.5999 3.4 18.7999 3.5 18.9999C3.8 19.4999 4.4 19.6999 4.9 19.3999L10 16.6999L15.1 19.3999C15.2 19.4999 15.4 19.4999 15.6 19.4999C15.7 19.4999 15.7 19.4999 15.8 19.4999C16.3 19.3999 16.7 18.8999 16.6 18.2999L15.6 12.5999L19.7 8.59994C19.9 8.49994 20 8.29994 20 8.09994Z"></path></svg>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Star.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$m = {
  props: {
    rate: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  const _component_Star = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-white p-8 shadow-sm dark:bg-dark-900" }, _attrs))}><div class="flex items-center gap-2 font-medium"><img${ssrRenderAttr("src", ((_b = (_a = $props.rate) == null ? void 0 : _a.author) == null ? void 0 : _b.avatar) || "/default_avatar.svg")} class="mr-2 h-8 w-8 rounded-full" alt="Avatar"> ${ssrInterpolate(((_d = (_c = $props.rate) == null ? void 0 : _c.author) == null ? void 0 : _d.username) || "Utilisateur supprim\xE9")} <span>-</span><div class="flex items-center gap-1"><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(ssrRenderComponent(_component_Star, {
      class: "w-6",
      color: $props.rate.star >= i ? "#BB900D" : "#9ca3af",
      key: i
    }, null, _parent));
  });
  _push(`<!--]--></div></div><p class="mt-4 text-gray-700 dark:text-gray-300">${ssrInterpolate($props.rate.message)}</p><span class="mt-4 block text-sm text-gray-400">le ${ssrInterpolate(new Date($props.rate.created_at).toLocaleDateString("fr-FR"))}</span></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonial.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$l = {
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
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "relative transition duration-200 ease-in hover:-translate-y-4",
    id: "card"
  }, _attrs))}><img class="w-full rounded-3xl shadow-lg"${ssrRenderAttr("src", `/tools/${$props.tool.uuid}_${_ctx.$colorMode.value}.png`)}><div class="absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-2 rounded-3xl bg-gradient-to-t from-dark-950 to-dark-400 p-8 opacity-80 backdrop-blur-md dark:to-dark-800"><div class="text-2xl font-semibold text-white">${ssrInterpolate($props.tool.name)}</div><div class="text-lg text-white">${ssrInterpolate($props.tool.description)}</div></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/DefaultCard.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$k = {
  name: "Badges"
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ToolsDefaultCard, mergeProps({ tool: {
    name: "Cr\xE9ateur de badges",
    description: "Cr\xE9\xE9e les icones de tes r\xF4les Discord",
    uuid: "badges_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Badges.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Badges = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$j = {
  name: "Bots"
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ToolsDefaultCard, mergeProps({ tool: {
    name: "R\xE9f\xE9rencement de bots",
    description: "R\xE9f\xE9rence ton bot",
    uuid: "bots_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Bots.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Bots = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$i = {
  name: "Embed"
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ToolsDefaultCard, mergeProps({ tool: {
    name: "Cr\xE9ateur d'embeds",
    description: "Cr\xE9\xE9e et envoie tes embeds sur ton serveur Discord",
    uuid: "embed_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Embed.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Embed = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$h = {
  name: "Emojis"
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolsDefaultCard = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ToolsDefaultCard, mergeProps({ tool: {
    name: "R\xE9f\xE9rencement d'emojis",
    description: "R\xE9f\xE9rence ton emoji",
    uuid: "emojis_discord"
  } }, _attrs), null, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Cards/Emojis.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Emojis = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$f]]);
const meta$8 = void 0;
const meta$7 = void 0;
const meta$6 = void 0;
const _sfc_main$g = {
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
    suggestion: "",
    errors: []
  }),
  methods: {
    async sendSuggestion() {
      try {
        await client.post(
          "/suggestions",
          {
            content: this.suggestion
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token")
            }
          }
        );
      } catch (e) {
        this.errors = e.response.data.errors.map((error) => error.message);
      }
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1$3;
  const _component_LightBulbIcon = resolveComponent("LightBulbIcon");
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_Dialog = resolveComponent("Dialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_Input = __nuxt_component_4$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "mx-auto",
    text: "Faire une suggestion",
    color: "white",
    onClick: ($event) => _ctx.isOpen = true
  }, {
    icon_left: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_LightBulbIcon, { class: "mr-3 h-8 w-8" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_LightBulbIcon, { class: "mr-3 h-8 w-8" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_TransitionRoot, {
    appear: "",
    show: _ctx.isOpen,
    as: "template"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Dialog, {
          as: "div",
          onClose: ($event) => _ctx.isOpen = false,
          class: "relative z-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Cr\xE9er une suggestion `);
                              } else {
                                return [
                                  createTextVNode(" Cr\xE9er une suggestion ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="mt-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Input, {
                            class: "mt-4",
                            placeholder: "Entrez votre suggestion...",
                            modelValue: _ctx.suggestion,
                            "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                          }, null, _parent5, _scopeId4));
                          _push5(`<!--[-->`);
                          ssrRenderList(_ctx.errors, (error, id) => {
                            _push5(`<div class="mt-1 mb-4 text-sm text-red-400"${_scopeId4}><i${_scopeId4}>${ssrInterpolate(error)}</i></div>`);
                          });
                          _push5(`<!--]--><p class="mt-2 text-sm leading-loose text-gray-500"${_scopeId4}> Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon <span class="rounded-md bg-dark-800 p-1"${_scopeId4}>#suggestions</span></p></div><div class="mt-4 flex items-center justify-end gap-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Button, {
                            color: "transparent",
                            text: "Annuler",
                            onClick: ($event) => _ctx.isOpen = false
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Button, {
                            color: "primary",
                            text: "Envoyer ma suggestion",
                            onClick: $options.sendSuggestion
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cr\xE9er une suggestion ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode(_component_Input, {
                                class: "mt-4",
                                placeholder: "Entrez votre suggestion...",
                                modelValue: _ctx.suggestion,
                                "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.errors, (error, id) => {
                                return openBlock(), createBlock("div", {
                                  class: "mt-1 mb-4 text-sm text-red-400",
                                  key: id
                                }, [
                                  createVNode("i", null, toDisplayString(error), 1)
                                ]);
                              }), 128)),
                              createVNode("p", { class: "mt-2 text-sm leading-loose text-gray-500" }, [
                                createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                                createVNode("span", { class: "rounded-md bg-dark-800 p-1" }, "#suggestions")
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                              createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.isOpen = false
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
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
                      createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cr\xE9er une suggestion ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-2" }, [
                            createVNode(_component_Input, {
                              class: "mt-4",
                              placeholder: "Entrez votre suggestion...",
                              modelValue: _ctx.suggestion,
                              "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.errors, (error, id) => {
                              return openBlock(), createBlock("div", {
                                class: "mt-1 mb-4 text-sm text-red-400",
                                key: id
                              }, [
                                createVNode("i", null, toDisplayString(error), 1)
                              ]);
                            }), 128)),
                            createVNode("p", { class: "mt-2 text-sm leading-loose text-gray-500" }, [
                              createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                              createVNode("span", { class: "rounded-md bg-dark-800 p-1" }, "#suggestions")
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                            createVNode(_component_Button, {
                              color: "transparent",
                              text: "Annuler",
                              onClick: ($event) => _ctx.isOpen = false
                            }, null, 8, ["onClick"]),
                            createVNode(_component_Button, {
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
                createVNode(_component_TransitionChild, {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0",
                  "enter-to": "opacity-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100",
                  "leave-to": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                  createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                    createVNode(_component_TransitionChild, {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                          default: withCtx(() => [
                            createVNode(_component_DialogTitle, {
                              as: "h3",
                              class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cr\xE9er une suggestion ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode(_component_Input, {
                                class: "mt-4",
                                placeholder: "Entrez votre suggestion...",
                                modelValue: _ctx.suggestion,
                                "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.errors, (error, id) => {
                                return openBlock(), createBlock("div", {
                                  class: "mt-1 mb-4 text-sm text-red-400",
                                  key: id
                                }, [
                                  createVNode("i", null, toDisplayString(error), 1)
                                ]);
                              }), 128)),
                              createVNode("p", { class: "mt-2 text-sm leading-loose text-gray-500" }, [
                                createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                                createVNode("span", { class: "rounded-md bg-dark-800 p-1" }, "#suggestions")
                              ])
                            ]),
                            createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                              createVNode(_component_Button, {
                                color: "transparent",
                                text: "Annuler",
                                onClick: ($event) => _ctx.isOpen = false
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
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
          createVNode(_component_Dialog, {
            as: "div",
            onClose: ($event) => _ctx.isOpen = false,
            class: "relative z-10"
          }, {
            default: withCtx(() => [
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" })
                ]),
                _: 1
              }),
              createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                  createVNode(_component_TransitionChild, {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogPanel, { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-900" }, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTitle, {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cr\xE9er une suggestion ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-2" }, [
                            createVNode(_component_Input, {
                              class: "mt-4",
                              placeholder: "Entrez votre suggestion...",
                              modelValue: _ctx.suggestion,
                              "onUpdate:modelValue": ($event) => _ctx.suggestion = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.errors, (error, id) => {
                              return openBlock(), createBlock("div", {
                                class: "mt-1 mb-4 text-sm text-red-400",
                                key: id
                              }, [
                                createVNode("i", null, toDisplayString(error), 1)
                              ]);
                            }), 128)),
                            createVNode("p", { class: "mt-2 text-sm leading-loose text-gray-500" }, [
                              createTextVNode(" Ta suggestion sera envoy\xE9e sur le serveur Discord dans le salon "),
                              createVNode("span", { class: "rounded-md bg-dark-800 p-1" }, "#suggestions")
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 flex items-center justify-end gap-2" }, [
                            createVNode(_component_Button, {
                              color: "transparent",
                              text: "Annuler",
                              onClick: ($event) => _ctx.isOpen = false
                            }, null, 8, ["onClick"]),
                            createVNode(_component_Button, {
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SuggestionButton.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_6$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$f = {
  props: {
    id: {
      type: String,
      required: true
    },
    suggestion: {
      type: Object,
      required: true
    },
    reactions: {
      type: Array,
      required: false,
      default: []
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$5;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: `https://discord.com/channels/905842698626428928/1015968524923052083/${$props.id}`,
    target: "_blank"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col justify-between rounded-lg bg-white p-6 shadow-sm transition duration-200 ease-in hover:-translate-y-1 hover:bg-gray-100 dark:bg-dark-900 hover:dark:bg-dark-800"${_scopeId}><div${_scopeId}><div class="flex items-center gap-4 font-semibold"${_scopeId}><img class="h-8 w-8 rounded-full"${ssrRenderAttr("src", $props.suggestion.author.icon_url)}${_scopeId}> ${ssrInterpolate($props.suggestion.author.name.replace("Suggestion de ", ""))}</div><p class="mt-4"${_scopeId}>${ssrInterpolate($props.suggestion.description)}</p></div><div class="flex gap-2"${_scopeId}><!--[-->`);
        ssrRenderList($props.reactions, (reaction, index) => {
          _push2(`<div class="mt-4 flex gap-1 rounded-md bg-gray-200 bg-opacity-50 px-2 py-1 dark:bg-dark-800"${_scopeId}>${ssrInterpolate(reaction.emoji.name)} ${ssrInterpolate(reaction.count)}</div>`);
        });
        _push2(`<!--]--></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col justify-between rounded-lg bg-white p-6 shadow-sm transition duration-200 ease-in hover:-translate-y-1 hover:bg-gray-100 dark:bg-dark-900 hover:dark:bg-dark-800" }, [
            createVNode("div", null, [
              createVNode("div", { class: "flex items-center gap-4 font-semibold" }, [
                createVNode("img", {
                  class: "h-8 w-8 rounded-full",
                  src: $props.suggestion.author.icon_url
                }, null, 8, ["src"]),
                createTextVNode(" " + toDisplayString($props.suggestion.author.name.replace("Suggestion de ", "")), 1)
              ]),
              createVNode("p", { class: "mt-4" }, toDisplayString($props.suggestion.description), 1)
            ]),
            createVNode("div", { class: "flex gap-2" }, [
              (openBlock(true), createBlock(Fragment$1, null, renderList($props.reactions, (reaction, index) => {
                return openBlock(), createBlock("div", {
                  key: index,
                  class: "mt-4 flex gap-1 rounded-md bg-gray-200 bg-opacity-50 px-2 py-1 dark:bg-dark-800"
                }, toDisplayString(reaction.emoji.name) + " " + toDisplayString(reaction.count), 1);
              }), 128))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Suggestion.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d]]);
const meta$5 = void 0;
const meta$4 = void 0;
const _sfc_main$e = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-48 text-white" }, _attrs))}><div class="absolute top-full -z-10 h-full w-full -translate-y-full bg-[#5C6AF6]"></div><div class="absolute left-1/2 top-full -z-1 h-full w-1/2 -translate-x-1/2 -translate-y-full rounded-full" style="${ssrRenderStyle({ "background": "radial-gradient(" })}"></div><svg id="squares" class="absolute -top-48 -left-12 -z-10 h-[90rem] min-h-screen w-screen rotate-12 scale-125"><!--[-->`);
  ssrRenderList(16, (n) => {
    _push(`<g><!--[-->`);
    ssrRenderList(24, (i) => {
      _push(`<rect${ssrRenderAttr("x", 100 * (i - 1))}${ssrRenderAttr("y", 100 * (n - 1))} width="100" height="100"${ssrRenderAttr(
        "fill",
        Math.floor(Math.random() * 8) % 3 === 2 ? "#5F6CF7" : "#5664F9"
      )} stroke="#5F6DF9" stroke-width="2"></rect>`);
    });
    _push(`<!--]--></g>`);
  });
  _push(`<!--]--></svg><div class="container mx-auto px-4 text-center">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="absolute top-0 h-52 w-full" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, #5865f6, transparent)" })}"></div><div class="absolute top-full h-52 w-full -translate-y-full" style="${ssrRenderStyle({ "background": "linear-gradient(to top, #5865f6, transparent)" })}"></div></header>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Header.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
const _imports_0 = "" + globalThis.__publicAssetsURL("objects/sad.png");
const _sfc_main$d = {
  props: {
    text: {
      type: String,
      default: "Nous n'avons pas trouv\xE9 de r\xE9sultats..."
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><img class="mx-auto mb-4 h-12 w-12"${ssrRenderAttr("src", _imports_0)}><div class="mx-auto max-w-xs text-center text-sm leading-6">${ssrInterpolate($props.text)}</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Empty.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b]]);
const meta$3 = void 0;
const _sfc_main$c = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="relative h-32 rounded-t-2xl bg-blurple p-6 shadow-xl"><img class="absolute top-1/2 h-24 w-24 rounded-3xl border-4 border-white dark:border-dark-800" src="https://cdn.discordapp.com/avatars/908347266727813160/139394a36c0c1bdd6cec0aaa8db66d6c.png?size=4096"></header><div class="rounded-b-2xl bg-white p-6 shadow-xl dark:bg-dark-800"><main><div class="mt-4 text-lg font-bold">Maky</div><div class="text-md mt-2"> Bot de cr\xE9ation de serveur Discord. Il vous permet de cr\xE9er vos channels, vos r\xF4les... </div></main><footer class="mt-4 flex flex-wrap gap-2"><div class="rounded-lg bg-primary-500 bg-opacity-20 px-2 py-1 text-xs italic"> Mod\xE9ration </div><div class="rounded-lg bg-primary-500 bg-opacity-20 px-2 py-1 text-xs italic"> Mod\xE9ration </div><div class="rounded-lg bg-primary-500 bg-opacity-20 px-2 py-1 text-xs italic"> Mod\xE9ration </div></footer></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bots/Card.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$a]]);
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
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $props.bigPadding ? "py-16" : "py-6"
  }, _attrs))}><div class="flex gap-2 text-lg"><span class="font-bold">Etape ${ssrInterpolate($props.stepId)}</span><span class="font-semibold">-</span><span class="font-medium">${ssrInterpolate($props.name)}</span></div><p class="text-md">${ssrInterpolate($props.description)}</p><div class="mt-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Step.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$9]]);
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
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Switch = resolveComponent("Switch");
  _push(ssrRenderComponent(_component_Switch, mergeProps({
    modelValue: $props.modelValue,
    "onUpdate:modelValue": ($event) => $props.modelValue = $event,
    class: [$props.modelValue ? "bg-teal-500" : "bg-red-500", "relative inline-flex h-[38px] w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"],
    onChange: $options.handleInput($props.modelValue)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="sr-only"${_scopeId}>Use setting</span><span aria-hidden="true" class="${ssrRenderClass([$props.modelValue ? "translate-x-10" : "translate-x-1", "pointer-events-none absolute top-1/2 inline-block h-7 w-7 -translate-y-1/2 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])}"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "sr-only" }, "Use setting"),
          createVNode("span", {
            "aria-hidden": "true",
            class: [$props.modelValue ? "translate-x-10" : "translate-x-1", "pointer-events-none absolute top-1/2 inline-block h-7 w-7 -translate-y-1/2 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"]
          }, null, 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toggle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8]]);
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
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>${$setup.toHTML($props.content, {
    discordCallback: {
      user: (node) => "@user",
      role: (node) => "@role"
    },
    embed: $props.embed
  })}</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Markdown.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
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
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $props.bigPadding ? "py-16" : "py-6"
  }, _attrs))}><div class="flex items-center justify-between"><div class="flex gap-2 text-lg"><span class="font-bold">Etape ${ssrInterpolate($props.stepId)}</span><span class="font-semibold">-</span><span class="font-medium">${ssrInterpolate($props.name)}</span></div><div>`);
  ssrRenderSlot(_ctx.$slots, "bin", {}, null, _push, _parent);
  _push(`</div></div><p class="text-md">${ssrInterpolate($props.description)}</p><div class="mt-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Step.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
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
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><textarea${ssrRenderAttr("placeholder", $props.placeholder)} type="text" class="${ssrRenderClass([$props.big ? "text-md px-6 py-5" : "px-6 py-4 text-sm", "w-full rounded-lg border border-dark-900 bg-transparent text-sm focus:border-primary-500 focus:bg-white focus:outline-none dark:focus:bg-dark-900"])}">${ssrInterpolate($props.modelValue)}</textarea></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Textarea.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    class: "rounded-[4px]",
    src: $options.fileBlob,
    style: { "max-width": "400px", "max-height": "300px" }
  }, _attrs))}>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Attachments/Image.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between gap-4 rounded-[4px] border border-[#292B2F] bg-[#2F3136] px-4 py-3 dark:fill-white" }, _attrs))} data-v-d55f93ac><div class="flex" data-v-d55f93ac><svg width="28" height="40" viewBox="0 0 28 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-d55f93ac><defs data-v-d55f93ac><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter" data-v-d55f93ac><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter" data-v-d55f93ac></feOffset><feGaussianBlur stdDeviation="0" in="shadowOffsetOuter" result="shadowBlurOuter" data-v-d55f93ac></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" in="shadowBlurOuter" type="matrix" result="shadowMatrixOuter" data-v-d55f93ac></feColorMatrix><feMerge data-v-d55f93ac><feMergeNode in="shadowMatrixOuter" data-v-d55f93ac></feMergeNode><feMergeNode in="SourceGraphic" data-v-d55f93ac></feMergeNode></feMerge></filter></defs><g stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" transform="translate(2, 2)" data-v-d55f93ac><path d="M0,3.00741988 C0,1.34646775 1.34252415,0 2.99998588,0 L15.1166483,0 C17.0807354,0 24,6.91885725 24,8.87457593 L24,33.0035574 C24,34.6584469 22.6582294,36 21.0089096,36 L2.99109042,36 C1.33915679,36 0,34.6544607 0,32.9925801 L0,3.00741988 Z" stroke="#7289da" fill="#f4f6fc" data-v-d55f93ac></path><path d="M17,1.09677336 C17,0.542040316 17.3147964,0.407097791 17.7133118,0.80556379 L23.1952031,6.28677654 C23.5891543,6.68067898 23.4552279,7 22.9039575,7 L18.0045574,7 C17.4497557,7 17,6.54676916 17,5.99556698 L17,1.09677336 Z" stroke="#7289da" fill="#f4f6fc" filter="url(#filter)" data-v-d55f93ac></path><path d="M13,3 L4.49710104,3 C3.67027497,3 3,3.66579723 3,4.5 L3,6" stroke="#c9d2f0" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" data-v-d55f93ac></path><text opacity="0.8" font-family="Source Code Pro" font-size="12" font-weight="420" letter-spacing="-0.3" fill="#697ec4" data-v-d55f93ac><tspan x="5.2690141" y="26.4705882" data-v-d55f93ac>||</tspan></text></g></svg><div class="ml-2 flex flex-col justify-between" data-v-d55f93ac><div class="text-md link hover:underline" data-v-d55f93ac>${ssrInterpolate($props.file.name)}</div><div class="text-xs text-gray-600" data-v-d55f93ac>${ssrInterpolate($options.fileSize)}</div></div></div><svg class="downloadButton-2HLFWN" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" data-v-d55f93ac><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z" data-v-d55f93ac></path></svg></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/Attachments/File.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-d55f93ac"]]);
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TrashIcon = resolveComponent("TrashIcon");
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-6 py-4" }, _attrs))}><div class="flex items-center justify-between font-semibold">${ssrInterpolate($props.name)} <div class="flex items-center gap-1">`);
  if ($props.trash) {
    _push(`<button class="p-2">`);
    _push(ssrRenderComponent(_component_TrashIcon, { class: "h-6 w-6" }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="p-2">`);
  _push(ssrRenderComponent(_component_ChevronDownIcon, {
    class: ["h-6 w-6 duration-300 ease-in-out", !_ctx.open && "rotate-90"]
  }, null, _parent));
  _push(`</button></div></div><div class="${ssrRenderClass([!_ctx.open ? "max-h-0 overflow-hidden" : "mt-4 mb-2 max-h-[300rem]", "duration-300 ease-in-out"])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/CollapseCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_9;
  const _component_Markdown = __nuxt_component_6$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "embed border-l-4 bg-[#F2F3F5] dark:bg-[#2F3136]",
    style: `border-color: ${$props.data.color}; max-width: ${$props.data.image.url ? "432" : "516"}px;`
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      if (_push2) {
        if (((_a = $props.data.author) == null ? void 0 : _a.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 || ((_b = $props.data.thumbnail) == null ? void 0 : _b.url)) {
          _push2(`<div class="flex justify-between"${_scopeId}><div class="mr-2 py-2"${_scopeId}>`);
          if (((_c = $props.data.author) == null ? void 0 : _c.icon_url) || ((_d = $props.data.author) == null ? void 0 : _d.name)) {
            _push2(`<div class="mb-2 flex items-center text-sm font-semibold"${_scopeId}>`);
            if ($props.data.author.icon_url) {
              _push2(`<img class="mr-2 h-6 w-6 rounded-full"${ssrRenderAttr("src", $props.data.author.icon_url)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate((_e = $props.data.author) == null ? void 0 : _e.name)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.title && $props.data.url) {
            _push2(`<a href="#" target="_blank" class="${ssrRenderClass([$props.data.author.url && "title hover:underline", "block font-semibold"])}"${_scopeId}>${ssrInterpolate($props.data.title)}</a>`);
          } else if ($props.data.title) {
            _push2(`<div class="font-semibold"${_scopeId}>${ssrInterpolate($props.data.title)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.description) {
            _push2(ssrRenderComponent(_component_Markdown, {
              class: "mt-2 box-border whitespace-pre-wrap break-words text-sm leading-snug",
              embed: true,
              content: $props.data.description
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="grid gap-x-6 gap-y-2"${_scopeId}><!--[-->`);
          ssrRenderList($props.data.fields, (field, key) => {
            _push2(`<div class="mt-2 text-sm" style="${ssrRenderStyle(`grid-column: ${$options.getFieldColumn(field)};`)}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Markdown, {
              content: field.name,
              class: "font-semibold",
              embed: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Markdown, {
              content: field.value,
              class: "font-normal",
              embed: true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div>`);
          if ((_f = $props.data.thumbnail) == null ? void 0 : _f.url) {
            _push2(`<div class="flex-none"${_scopeId}><img class="w-20 rounded-[4px]"${ssrRenderAttr("src", $props.data.thumbnail.url)}${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if ((_g = $props.data.image) == null ? void 0 : _g.url) {
          _push2(`<div${_scopeId}><img class="${ssrRenderClass([
            ((_h = $props.data.author) == null ? void 0 : _h.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 ? "mt-1" : "mt-4",
            "w-full rounded-[4px]"
          ])}"${ssrRenderAttr("src", $props.data.image.url)}${_scopeId}></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.data.timestamp || ((_i = $props.data.footer) == null ? void 0 : _i.text) || ((_j = $props.data.footer) == null ? void 0 : _j.icon_url)) {
          _push2(`<footer class="mt-2 flex items-center"${_scopeId}>`);
          if ((_k = $props.data.footer) == null ? void 0 : _k.icon_url) {
            _push2(`<img class="mr-2 h-5 w-5 rounded-full"${ssrRenderAttr("src", $props.data.footer.icon_url)}${_scopeId}>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<span class="text-xs text-gray-200"${_scopeId}>`);
          if ((_l = $props.data.footer) == null ? void 0 : _l.text) {
            _push2(`<span${_scopeId}>${ssrInterpolate((_m = $props.data.footer) == null ? void 0 : _m.text)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.timestamp && ((_n = $props.data.footer) == null ? void 0 : _n.text)) {
            _push2(`<span class="mx-1"${_scopeId}>\u2022</span>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.data.timestamp) {
            _push2(`<span${_scopeId}>${ssrInterpolate($props.data.timestamp)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</span></footer>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          ((_o = $props.data.author) == null ? void 0 : _o.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 || ((_p = $props.data.thumbnail) == null ? void 0 : _p.url) ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex justify-between"
          }, [
            createVNode("div", { class: "mr-2 py-2" }, [
              ((_q = $props.data.author) == null ? void 0 : _q.icon_url) || ((_r = $props.data.author) == null ? void 0 : _r.name) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-2 flex items-center text-sm font-semibold"
              }, [
                $props.data.author.icon_url ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "mr-2 h-6 w-6 rounded-full",
                  src: $props.data.author.icon_url
                }, null, 8, ["src"])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString((_s = $props.data.author) == null ? void 0 : _s.name), 1)
              ])) : createCommentVNode("", true),
              $props.data.title && $props.data.url ? (openBlock(), createBlock("a", {
                key: 1,
                href: "#",
                target: "_blank",
                class: ["block font-semibold", $props.data.author.url && "title hover:underline"]
              }, toDisplayString($props.data.title), 3)) : $props.data.title ? (openBlock(), createBlock("div", {
                key: 2,
                class: "font-semibold"
              }, toDisplayString($props.data.title), 1)) : createCommentVNode("", true),
              $props.data.description ? (openBlock(), createBlock(_component_Markdown, {
                key: 3,
                class: "mt-2 box-border whitespace-pre-wrap break-words text-sm leading-snug",
                embed: true,
                content: $props.data.description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("div", { class: "grid gap-x-6 gap-y-2" }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList($props.data.fields, (field, key) => {
                  return openBlock(), createBlock("div", {
                    key,
                    class: "mt-2 text-sm",
                    style: `grid-column: ${$options.getFieldColumn(field)};`
                  }, [
                    createVNode(_component_Markdown, {
                      content: field.name,
                      class: "font-semibold",
                      embed: true
                    }, null, 8, ["content"]),
                    createVNode(_component_Markdown, {
                      content: field.value,
                      class: "font-normal",
                      embed: true
                    }, null, 8, ["content"])
                  ], 4);
                }), 128))
              ])
            ]),
            ((_t = $props.data.thumbnail) == null ? void 0 : _t.url) ? (openBlock(), createBlock("div", {
              key: 0,
              class: "flex-none"
            }, [
              createVNode("img", {
                class: "w-20 rounded-[4px]",
                src: $props.data.thumbnail.url
              }, null, 8, ["src"])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          ((_u = $props.data.image) == null ? void 0 : _u.url) ? (openBlock(), createBlock("div", { key: 1 }, [
            createVNode("img", {
              class: [
                "w-full rounded-[4px]",
                ((_v = $props.data.author) == null ? void 0 : _v.name) || $props.data.title || $props.data.description || $props.data.fields.length > 0 ? "mt-1" : "mt-4"
              ],
              src: $props.data.image.url
            }, null, 10, ["src"])
          ])) : createCommentVNode("", true),
          $props.data.timestamp || ((_w = $props.data.footer) == null ? void 0 : _w.text) || ((_x = $props.data.footer) == null ? void 0 : _x.icon_url) ? (openBlock(), createBlock("footer", {
            key: 2,
            class: "mt-2 flex items-center"
          }, [
            ((_y = $props.data.footer) == null ? void 0 : _y.icon_url) ? (openBlock(), createBlock("img", {
              key: 0,
              class: "mr-2 h-5 w-5 rounded-full",
              src: $props.data.footer.icon_url
            }, null, 8, ["src"])) : createCommentVNode("", true),
            createVNode("span", { class: "text-xs text-gray-200" }, [
              ((_z = $props.data.footer) == null ? void 0 : _z.text) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_A = $props.data.footer) == null ? void 0 : _A.text), 1)) : createCommentVNode("", true),
              $props.data.timestamp && ((_B = $props.data.footer) == null ? void 0 : _B.text) ? (openBlock(), createBlock("span", {
                key: 1,
                class: "mx-1"
              }, "\u2022")) : createCommentVNode("", true),
              $props.data.timestamp ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString($props.data.timestamp), 1)) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/FakeEmbed.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_9;
  const _component_Markdown = __nuxt_component_6$1;
  const _component_ToolsDiscordEmbedCreatorAttachmentsImage = __nuxt_component_6;
  const _component_ToolsDiscordEmbedCreatorAttachmentsFile = __nuxt_component_7;
  const _component_ToolsDiscordEmbedCreatorFakeEmbed = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-3" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", $props.data.avatar_url)}${_scopeId}><div class="whitney w-full"${_scopeId}><div class="flex items-center gap-1 text-base"${_scopeId}><span class="font-medium"${_scopeId}>${ssrInterpolate($props.data.username)}</span><span class="rounded-sm bg-blurple px-1 text-[10px] font-medium leading-4 text-white"${_scopeId}>BOT</span><span class="ml-1 self-end rounded-md text-xs text-gray-600 dark:text-gray-200"${_scopeId}>12/08/2022</span></div><div class="mt-1 flex w-full flex-col gap-1"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Markdown, {
          class: "whitespace-pre-line break-words text-base font-normal leading-snug text-gray-300",
          content: $props.data.content
        }, null, _parent2, _scopeId));
        if ($props.data.files) {
          _push2(`<div class="flex flex-col gap-1"${_scopeId}><!--[-->`);
          ssrRenderList($props.data.files, (file, index) => {
            _push2(`<div class="flex"${_scopeId}>`);
            if (file.type.startsWith("image") && file.type !== "image/svg+xml") {
              _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsImage, { file }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorAttachmentsFile, { file }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<!--[-->`);
        ssrRenderList($props.data.embeds, (embed, id) => {
          _push2(ssrRenderComponent(_component_ToolsDiscordEmbedCreatorFakeEmbed, {
            key: id,
            class: "w-full",
            data: embed
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
        if ($props.data.components[0].components) {
          _push2(`<div class="mt-2 flex"${_scopeId}><!--[-->`);
          ssrRenderList($props.data.components[0].components, (component, id) => {
            _push2(`<a${ssrRenderAttr("href", component.url)} target="_blank" class="relative ml-0 mr-2 flex items-center gap-2 rounded-sm bg-[#4F545C] px-4 py-1 font-medium text-white duration-200 ease-in hover:bg-[#686D73]"${_scopeId}>${ssrInterpolate(component.label)} <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"${_scopeId}></path><path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"${_scopeId}></path></svg></a>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-10 w-10 rounded-full",
            src: $props.data.avatar_url
          }, null, 8, ["src"]),
          createVNode("div", { class: "whitney w-full" }, [
            createVNode("div", { class: "flex items-center gap-1 text-base" }, [
              createVNode("span", { class: "font-medium" }, toDisplayString($props.data.username), 1),
              createVNode("span", { class: "rounded-sm bg-blurple px-1 text-[10px] font-medium leading-4 text-white" }, "BOT"),
              createVNode("span", { class: "ml-1 self-end rounded-md text-xs text-gray-600 dark:text-gray-200" }, "12/08/2022")
            ]),
            createVNode("div", { class: "mt-1 flex w-full flex-col gap-1" }, [
              createVNode(_component_Markdown, {
                class: "whitespace-pre-line break-words text-base font-normal leading-snug text-gray-300",
                content: $props.data.content
              }, null, 8, ["content"]),
              $props.data.files ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col gap-1"
              }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList($props.data.files, (file, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "flex"
                  }, [
                    file.type.startsWith("image") && file.type !== "image/svg+xml" ? (openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsImage, {
                      key: 0,
                      file
                    }, null, 8, ["file"])) : (openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorAttachmentsFile, {
                      key: 1,
                      file
                    }, null, 8, ["file"]))
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment$1, null, renderList($props.data.embeds, (embed, id) => {
                return openBlock(), createBlock(_component_ToolsDiscordEmbedCreatorFakeEmbed, {
                  key: id,
                  class: "w-full",
                  data: embed
                }, null, 8, ["data"]);
              }), 128))
            ]),
            $props.data.components[0].components ? (openBlock(), createBlock("div", {
              key: 0,
              class: "mt-2 flex"
            }, [
              (openBlock(true), createBlock(Fragment$1, null, renderList($props.data.components[0].components, (component, id) => {
                return openBlock(), createBlock("a", {
                  href: component.url,
                  target: "_blank",
                  class: "relative ml-0 mr-2 flex items-center gap-2 rounded-sm bg-[#4F545C] px-4 py-1 font-medium text-white duration-200 ease-in hover:bg-[#686D73]",
                  key: id
                }, [
                  createTextVNode(toDisplayString(component.label) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    "aria-hidden": "false",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                    }),
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                    })
                  ]))
                ], 8, ["href"]);
              }), 128))
            ])) : createCommentVNode("", true)
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
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Discord/EmbedCreator/FakeMessage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const meta = void 0;
const routes = [
  {
    name: "account",
    path: "/account",
    file: "D:/umaestro/frontend/pages/account/index.vue",
    children: [],
    meta: meta$f,
    alias: (meta$f == null ? void 0 : meta$f.alias) || [],
    component: () => import('./index.af293f59.mjs').then((m) => m.default || m)
  },
  {
    name: "articles-slug",
    path: "/articles/:slug",
    file: "D:/umaestro/frontend/pages/articles/[slug].vue",
    children: [],
    meta: meta$e,
    alias: [],
    component: () => import('./_slug_.3f208f47.mjs').then((m) => m.default || m)
  },
  {
    name: "articles",
    path: "/articles",
    file: "D:/umaestro/frontend/pages/articles/index.vue",
    children: [],
    meta: meta$d,
    alias: [],
    component: () => import('./index.f11a5ace.mjs').then((m) => m.default || m)
  },
  {
    name: "authentification-callback",
    path: "/authentification/callback",
    file: "D:/umaestro/frontend/pages/authentification/callback.vue",
    children: [],
    meta: meta$c,
    alias: (meta$c == null ? void 0 : meta$c.alias) || [],
    component: () => import('./callback.e8ed47dc.mjs').then((m) => m.default || m)
  },
  {
    name: "authentification",
    path: "/authentification",
    file: "D:/umaestro/frontend/pages/authentification/index.vue",
    children: [],
    meta: meta$b,
    alias: (meta$b == null ? void 0 : meta$b.alias) || [],
    component: () => import('./index.3d8a68b7.mjs').then((m) => m.default || m)
  },
  {
    name: "cgu",
    path: "/cgu",
    file: "D:/umaestro/frontend/pages/cgu.vue",
    children: [],
    meta: meta$a,
    alias: [],
    component: () => import('./cgu.e47aa60d.mjs').then((m) => m.default || m)
  },
  {
    name: "hire",
    path: "/hire",
    file: "D:/umaestro/frontend/pages/hire.vue",
    children: [],
    meta: meta$9,
    alias: [],
    component: () => import('./hire.423846c0.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "D:/umaestro/frontend/pages/index.vue",
    children: [],
    meta: meta$8,
    alias: [],
    component: () => import('./index.fd24bed8.mjs').then((m) => m.default || m)
  },
  {
    name: "partners",
    path: "/partners",
    file: "D:/umaestro/frontend/pages/partners.vue",
    children: [],
    meta: meta$7,
    alias: [],
    component: () => import('./partners.c610eec0.mjs').then((m) => m.default || m)
  },
  {
    name: "rates",
    path: "/rates",
    file: "D:/umaestro/frontend/pages/rates.vue",
    children: [],
    meta: meta$6,
    alias: [],
    component: () => import('./rates.c3a52fa7.mjs').then((m) => m.default || m)
  },
  {
    name: "suggestions",
    path: "/suggestions",
    file: "D:/umaestro/frontend/pages/suggestions.vue",
    children: [],
    meta: meta$5,
    alias: [],
    component: () => import('./suggestions.fd17c0f5.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-404",
    path: "/tools/404",
    file: "D:/umaestro/frontend/pages/tools/404.vue",
    children: [],
    meta: meta$4,
    alias: [],
    component: () => import('./404.ea9eb6b9.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-slug",
    path: "/tools/:slug",
    file: "D:/umaestro/frontend/pages/tools/[slug]/index.vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => import('./index.82d9ad16.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-bots",
    path: "/tools/bots",
    file: "D:/umaestro/frontend/pages/tools/bots.vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => import('./bots.248cd023.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-discord-badges",
    path: "/tools/discord/badges",
    file: "D:/umaestro/frontend/pages/tools/discord/badges.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => import('./badges.297c7192.mjs').then((m) => m.default || m)
  },
  {
    name: "tools-discord-embed",
    path: "/tools/discord/embed",
    file: "D:/umaestro/frontend/pages/tools/discord/embed.vue",
    children: [],
    meta,
    alias: [],
    component: () => import('./embed.fa514b57.mjs').then((m) => m.default || m)
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
  auth: () => import('./auth.97853ab8.mjs')
};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
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
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
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
  const initialLayout = useState("_layout", "$0JR5xvAX5a");
  router.beforeEach(async (to, from) => {
    var _a, _b;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a = initialLayout.value) != null ? _a : to.meta.layout;
    }
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
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b = namedMiddleware[entry2]) == null ? void 0 : _b.call(namedMiddleware).then((r) => r.default || r)) : entry2;
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
      nuxtApp.ssrContext.event.res.statusCode = 404;
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
  const colorMode = useState("color-mode", () => reactive({
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
    const ErrorComponent = defineAsyncComponent(() => import('./error-component.617133ac.mjs'));
    const nuxtApp = useNuxtApp();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const layouts = {
  default: defineAsyncComponent(() => import('./default.f13ae4e1.mjs')),
  empty: defineAsyncComponent(() => import('./empty.8cc8bfc9.mjs')),
  footer: defineAsyncComponent(() => import('./footer.35954309.mjs'))
};
const __nuxt_component_0 = defineComponent({
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
      const layout = (_b = (_a = isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      const transitionProps = (_c = route.meta.layoutTransition) != null ? _c : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => {
          return _wrapIf(layouts[layout], hasLayout, context.slots).default();
        }
      }).default();
    };
  }
});
const _sfc_main = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = resolveComponent("NuxtPage");
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$1);
    vueApp.component("App", _sfc_main);
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
  A: __nuxt_component_6$1,
  B: Badges,
  C: __nuxt_component_3,
  D: __nuxt_component_5,
  E: Emojis,
  F: __nuxt_component_6,
  G: __nuxt_component_7,
  H: __nuxt_component_8,
  I: __nuxt_component_11,
  J: defineNuxtRouteMiddleware,
  K: storeToRefs,
  _: _export_sfc,
  a: __nuxt_component_4$2,
  b: __nuxt_component_1$3,
  c: client,
  d: __nuxt_component_0$5,
  'default': entry$1,
  e: __nuxt_component_0$4,
  f: __nuxt_component_0$3,
  g: __nuxt_component_1$2,
  h: useHead,
  i: __nuxt_component_2$2,
  j: __nuxt_component_9,
  k: __nuxt_component_4$1,
  l: __nuxt_component_2$1,
  m: __nuxt_component_3$2,
  n: navigateTo,
  o: useNuxtApp,
  p: Bots,
  q: Embed,
  r: __nuxt_component_1$1,
  s: __nuxt_component_6$2,
  t: __nuxt_component_1,
  u: useAuthStore,
  v: __nuxt_component_0$1,
  w: __nuxt_component_5$1,
  x: __nuxt_component_2,
  y: __nuxt_component_3$1,
  z: __nuxt_component_10
});

export { Ae as A, Badges as B, __nuxt_component_1 as C, __nuxt_component_0$1 as D, Emojis as E, __nuxt_component_5$1 as F, __nuxt_component_2 as G, __nuxt_component_3$1 as H, __nuxt_component_10 as I, __nuxt_component_6$1 as J, __nuxt_component_3 as K, Le as L, __nuxt_component_5 as M, __nuxt_component_6 as N, __nuxt_component_7 as O, __nuxt_component_8 as P, __nuxt_component_11 as Q, defineNuxtRouteMiddleware as R, storeToRefs as S, server as T, We as W, Y, _export_sfc as _, fe as a, __nuxt_component_4$2 as b, client as c, __nuxt_component_1$3 as d, __nuxt_component_0$5 as e, fe$1 as f, __nuxt_component_0$4 as g, __nuxt_component_0$3 as h, __nuxt_component_1$2 as i, useHead as j, __nuxt_component_2$2 as k, __nuxt_component_9 as l, me as m, navigateTo as n, oe as o, pe as p, __nuxt_component_4$1 as q, __nuxt_component_2$1 as r, __nuxt_component_3$2 as s, useNuxtApp as t, useAuthStore as u, ve as v, Bots as w, Embed as x, __nuxt_component_1$1 as y, __nuxt_component_6$2 as z };
//# sourceMappingURL=server.mjs.map
