const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-D_RdWs1W.js","./common-BCO8idLC.js","./@vue-CAcTSrwG.js","./@arco-design-B-Y6FmNc.js","./dayjs-BZIFujmo.js","./scroll-into-view-if-needed-SxpMpKWN.js","./compute-scroll-into-view-1gs_hJI2.js","./b-validate-CWN02ujJ.js","./resize-observer-polyfill-B1PUzC5B.js","./number-precision-BW_FzNZC.js","../assets/@arco-design-DZchlhgo.css","./gifshot-hWNyc3AU.js","./lodash-es-B16_zbcl.js","../assets/common-BucowVwq.css","./vue-router-DKDYNLRD.js","../assets/index-5wopnyas.css","../assets/animate-BaVkx4tQ.css","./index-CSiKOFzU.js","./video-Dhiljnqq.js","../assets/index-BlLAvE-g.css","./index-7FQSX9ck.js","../assets/index-BKQVRMdk.css","./index-FVxRAONj.js","../assets/index-B32hn3wp.css"])))=>i.map(i=>d[i]);
import{p as A,h as u,q as h,j as L,m as c,e as x,c as O,C as g,O as R,Z as b,F as T,y as S,N as B,r as D,K as $,L as P,v as f,J as G,M as V,$ as F,a0 as K}from"./@vue-CAcTSrwG.js";import{c as M,a as N}from"./vue-router-DKDYNLRD.js";import{M as q,a as H}from"./@arco-design-B-Y6FmNc.js";/* empty css                    */import"./dayjs-BZIFujmo.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./b-validate-CWN02ujJ.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./number-precision-BW_FzNZC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const E=(a,o)=>{const n=a.__vccOpts||a;for(const[r,e]of o)n[r]=e;return n},U={};function W(a,o){const n=A("router-view");return u(),h(n)}const j=E(U,[["render",W]]),z="modulepreload",J=function(a,o){return new URL(a,o).href},k={},y=function(o,n,r){let e=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),d=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.allSettled(n.map(l=>{if(l=J(l,r),l in k)return;k[l]=!0;const p=l.endsWith(".css"),I=p?'[rel="stylesheet"]':"";if(!!r)for(let _=s.length-1;_>=0;_--){const v=s[_];if(v.href===l&&(!p||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${I}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":z,p||(m.as="script"),m.crossOrigin="",m.href=l,d&&m.setAttribute("nonce",d),document.head.appendChild(m),p)return new Promise((_,v)=>{m.addEventListener("load",_),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function t(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return e.then(s=>{for(const i of s||[])i.status==="rejected"&&t(i.reason);return o().catch(t)})},X={},Y={class:"layout-brand"};function Z(a,o){return u(),L("div",Y,o[0]||(o[0]=[c("div",{class:"layout-brand-logo"},null,-1),c("div",{class:"layout-brand-title"},"Gif-Converter",-1)]))}const Q=E(X,[["render",Z],["__scopeId","data-v-2392ff08"]]),ee=x({__name:"LayoutMenu",setup(a){const o=O(()=>w.currentRoute.value.matched.map(r=>r.path)),n=r=>{w.push(r)};return(r,e)=>(u(),h(b(q),{mode:"horizontal",class:"layout-menu",selectedKeys:o.value,"onUpdate:selectedKeys":e[0]||(e[0]=t=>o.value=t)},{default:g(()=>[(u(!0),L(T,null,R(b(C),({path:t,meta:s})=>(u(),h(b(H),{key:t,onClick:i=>n(t)},{default:g(()=>[S(B(s.title),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["selectedKeys"]))}}),te=E(ee,[["__scopeId","data-v-7dc535c0"]]),oe={class:"layout-actions"},ne={class:"mf-icon mf-icon-moon"},re={class:"mf-icon mf-icon-sun"},se=x({__name:"LayoutActions",setup(a){const o=D(!1),n={onTheme(r){const e=r.clientX,t=r.clientY,s=Math.hypot(Math.max(e,innerWidth-e),Math.max(t,innerHeight-t));o.value=!o.value,document.startViewTransition(()=>{const d=document.documentElement;d.classList.remove(o.value?"dark":"light"),d.classList.add(o.value?"light":"dark"),document.body.setAttribute("arco-theme",o.value?"dark":"light")}).ready.then(()=>{const d=[`circle(0px at ${e}px ${t}px)`,`circle(${s}px at ${e}px ${t}px)`];document.documentElement.animate({clipPath:o.value?[...d].reverse():[...d]},{duration:500,easing:"ease-in",pseudoElement:o.value?"::view-transition-old(root)":"::view-transition-new(root)"})})},onGithub(){window.open("https://github.com/fengtianxi001","_blank")}};return(r,e)=>(u(),L("div",oe,[c("div",{class:"action-item",onClick:e[0]||(e[0]=(...t)=>n.onTheme&&n.onTheme(...t))},[$(c("i",ne,null,512),[[P,!o.value]]),$(c("i",re,null,512),[[P,o.value]])]),c("div",{class:"action-item",onClick:e[1]||(e[1]=(...t)=>n.onGithub&&n.onGithub(...t))},e[2]||(e[2]=[c("i",{class:"mf-icon mf-icon-github"},null,-1)]))]))}}),ie=E(se,[["__scopeId","data-v-651d3203"]]),ae={class:"layout"},ce={class:"layout-header"},le={style:{display:"flex"}},ue={style:{display:"flex"}},de={class:"layout-body"},me=x({__name:"Layout",setup(a){return(o,n)=>{const r=A("router-view");return u(),L("div",ae,[c("div",ce,[c("div",le,[f(Q),f(te)]),c("div",ue,[f(ie)])]),c("div",de,[f(r,null,{default:g(({Component:e})=>[f(G,{name:"slide"},{default:g(()=>[(u(),h(F,null,[(u(),h(V(e)))],1024))]),_:2},1024)]),_:1})])])}}}),C=[{path:"/image",name:"image",meta:{title:"图片转GIF"},component:()=>y(()=>import("./index-D_RdWs1W.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url)},{path:"/video",name:"video",meta:{title:"视频转GIF"},component:()=>y(()=>import("./index-CSiKOFzU.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12,13,18,14,19,16]),import.meta.url)},{path:"/camera",name:"camera",meta:{title:"录像转GIF"},component:()=>y(()=>import("./index-7FQSX9ck.js"),__vite__mapDeps([20,2,1,3,4,5,6,7,8,9,10,11,12,13,18,14,21,16]),import.meta.url)},{path:"/screen",name:"screen",meta:{title:"屏幕转GIF"},component:()=>y(()=>import("./index-FVxRAONj.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,12,13,18,14,23,16]),import.meta.url)}],w=M({history:N("./"),routes:[{path:"/",redirect:"/image",component:me,children:[...C]}]}),pe=async()=>{const a=K(j);a.use(w),a.mount("#app")};pe();export{E as _};
