import{r as M,c as V,F as k,_ as $}from"./common-BCO8idLC.js";import{V as u,c as b}from"./video-Dhiljnqq.js";import{d as R}from"./dayjs-BZIFujmo.js";import{b as f}from"./@arco-design-B-Y6FmNc.js";import{r as _}from"./lodash-es-B16_zbcl.js";import{r as h,e as y,h as w,j as x,m as l,N as g,c as z,v as I,Z as v,V as B}from"./@vue-CAcTSrwG.js";import"./gifshot-hWNyc3AU.js";import{_ as C}from"./index-BoOTtc93.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./b-validate-CWN02ujJ.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./number-precision-BW_FzNZC.js";import"./vue-router-DKDYNLRD.js";/* empty css                    */function U(){const a=h([]),t=h([]);return{items:a,selected:t,onAddItem:async()=>{const o=await u.chooser(),i=async e=>{const c=URL.createObjectURL(e),p=await u.getVideoObject(c);return{id:u.getId(),url:c,name:e.name,size:k.formatSize(e.size),type:e.type.split("/")[1],dpi:{width:p.videoWidth,height:p.videoHeight},file:e,duration:parseInt(p.duration*10+"")/10,lastModified:R(e.lastModified).format("YYYY-MM-DD HH:mm:ss")}},d=o.map(e=>i(e)),s=await Promise.all(d);a.value.push(...s),f.success(`成功导入 ${s.length} 个视频`)},onRemoveItems:async o=>{const i=a.value.filter(({id:e})=>o.includes(e)).map(({name:e})=>e);if(!await M(i))return;const s=_(a.value,({id:e})=>o.includes(e));_(t.value,e=>o.includes(e)),f.success(`成功移除 ${s.length} 个视频`)},onConvertItems:async()=>{const o=a.value.filter(({id:i})=>t.value.includes(i));await V("video",o)}}}const j={class:"image-info"},P=["src"],Y={class:"info-base"},A={class:"info-name"},D={class:"info-size"},H=y({__name:"profile",props:{data:{}},setup(a){const t=a,r=()=>{b(t.data.url)};return(n,m)=>(w(),x("div",j,[l("video",{fit:"cover",src:n.data.url,width:50,height:34,onClick:r},null,8,P),l("div",Y,[l("div",A,g(n.data.name),1),l("div",D,g(n.data.size),1)])]))}}),L=C(H,[["__scopeId","data-v-cfc8e0ef"]]),N={class:"page"},S=y({__name:"index",setup(a){const{selected:t,items:r,onAddItem:n,onRemoveItems:m,onConvertItems:o}=U(),i=z(()=>[{text:"导入视频",type:"primary",onClick:()=>n()},{text:"批量删除",type:"primary",disabled:t.value.length<=0,onClick:()=>m(t.value)},{text:"转化选择项",type:"primary",disabled:t.value.length<=0,onClick:()=>o()}]),d=[{title:"基础信息",dataIndex:"name",width:400,render:({record:s})=>I(L,{data:s},null)},{title:"视频分辨率",dataIndex:"dpi",align:"center",render:({record:s})=>`${s.dpi.width} * ${s.dpi.height}`},{title:"视频时长(秒)",dataIndex:"duration",align:"center"},{title:"视频类型",dataIndex:"type",align:"center"},{title:"最后编辑时间",dataIndex:"lastModified",align:"center"}];return(s,e)=>(w(),x("div",N,[I(v($),{selected:v(t),"onUpdate:selected":e[0]||(e[0]=c=>B(t)?t.value=c:null),options:{rowSelection:{type:"radio"}},data:v(r),operates:i.value,columns:d},null,8,["selected","data","operates"])]))}}),oe=C(S,[["__scopeId","data-v-3862c879"]]);export{oe as default};
