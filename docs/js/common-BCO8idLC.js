import{e as F,c as A,h as v,j as C,m,v as p,C as f,F as D,O as U,Z as u,N as b,x as I,K as $,L as G,q as k,y as x,r as w,a as P,M as H,o as E,V as K,W as z,S as y}from"./@vue-CAcTSrwG.js";import{S as V,T as O,e as L,B as _,b as R,F as j,f as q,g as Z,h as J,I as Q,c as N}from"./@arco-design-B-Y6FmNc.js";import{g as X}from"./gifshot-hWNyc3AU.js";import{m as M,a as S}from"./lodash-es-B16_zbcl.js";import{_ as Y}from"./index-BoOTtc93.js";const ee={class:"base-table"},te={class:"base-table-operates"},ne={style:{color:"#2d5cf6"}},se={style:{color:"#2d5cf6"}},oe={class:"base-table-empty"},ye=F({__name:"BaseTable",props:{columns:{},operates:{},options:{},selected:{},data:{}},emits:["update:selected"],setup(t,{emit:n}){const e=t,a=n,r=A(()=>!e.data||e.data.length<=0),l=A({get:()=>e.selected,set:i=>a("update:selected",i)});return(i,o)=>(v(),C("div",ee,[m("div",te,[p(u(V),null,{default:f(()=>[(v(!0),C(D,null,U(i.operates,d=>(v(),k(u(_),I({size:"small",ref_for:!0},{...d}),{default:f(()=>[x(b(d.text),1)]),_:2},1040))),256))]),_:1}),p(u(V),{style:{color:"rgb(var(--gray-10))"}},{default:f(()=>[o[1]||(o[1]=m("span",null,"共 ",-1)),m("span",ne,b(i.data.length),1),o[2]||(o[2]=m("span",null,"条数据",-1)),o[3]||(o[3]=m("span",null,"/",-1)),o[4]||(o[4]=m("span",null,"已选择 ",-1)),m("span",se,b(l.value.length),1),o[5]||(o[5]=m("span",null,"条",-1))]),_:1})]),p(u(O),I({class:"base-table-pro",size:"small","row-key":"id",selectedKeys:l.value,"onUpdate:selectedKeys":o[0]||(o[0]=d=>l.value=d),columns:i.columns,data:i.data,stripe:!0,pagination:!1,hoverable:!1,draggable:{type:"handle",width:40},bordered:{wrapper:!0,cell:!0,headerCell:!0,bodyCell:!0}},{...i.options}),null,16,["selectedKeys","columns","data"]),$(m("div",oe,[p(u(L),{class:"empty-icon"}),o[6]||(o[6]=m("div",{class:"empty-text"},"暂无数据",-1))],512),[[G,r.value]])]))}});function ae(t,n){const e=w("Pending"),a=w("0%"),r=w(""),l=w(1),i=[],o=P({gifWidth:500,gifHeight:500,numWorkers:10}),d=M(n.map(s=>s.dpi.width)),h=M(n.map(s=>s.dpi.height));l.value=d/h,l.value>1?(o.gifWidth=500,o.gifHeight=Math.floor(500/l.value)):(o.gifWidth=Math.floor(500*l.value),o.gifHeight=500);const g={gifWidth:{name:"gifWidth",component:"InputNumber",label:"宽度",unit:"像素",desc:"动画的期望宽度",props:{min:1,onChange:s=>{const c=s/l.value;o.gifHeight=Math.round(c)},inputAttrs:{style:{textAlign:"right"}}}},gifHeight:{name:"gifHeight",component:"InputNumber",label:"长度",unit:"像素",desc:"动图的期望高度",props:{min:1,onChange:s=>{const c=s/l.value;o.gifWidth=Math.round(c)},inputAttrs:{style:{textAlign:"right"}}}},frameDuration:{name:"frameDuration",component:"InputNumber",label:"每帧停留时间",unit:"秒",desc:"停留在每张图片上的时间",props:{min:0,step:.1,inputAttrs:{style:{textAlign:"right"}}}},numWorkers:{name:"numWorkers",component:"InputNumber",label:"WebWorkers数量",unit:"个",desc:"用于处理动画帧的Workers数量",props:{inputAttrs:{style:{textAlign:"right"}}}},numFrames:{name:"numFrames",component:"InputNumber",label:"时长",unit:"秒",desc:"用于创建动画GIF的帧数",props:{min:0,max:99,step:.1,inputAttrs:{style:{textAlign:"right"}}}}};if(t==="image")o.images=n.map(s=>s.url),o.frameDuration=.1,i.push(g.gifWidth,g.gifHeight,g.frameDuration,g.numWorkers);else{const s=n[0];o.video=n.map(c=>c.url),o.numFrames=parseInt(s.duration*.86*10+"")/10,g.numFrames.props.max=parseInt(s.duration*.86*10+"")/10,i.push(g.gifWidth,g.gifHeight,g.numFrames,g.numWorkers)}return{config:i,aspect:l,stateCode:e,convertProgress:a,convertResult:r,form:o,onConvert:()=>{e.value="Ongoing",a.value="0%",r.value="";const s={...o};s.frameDuration!==void 0?s.frameDuration=s.frameDuration*10:s.numFrames!==void 0&&(s.numFrames=s.numFrames*10),s.progressCallback=c=>{a.value=(c*100).toFixed(2)+"%"},X.createGIF(s,({image:c,error:T})=>{T?(e.value="Pending",r.value="",a.value="0%",R.error(T)):(e.value="Unsaved",r.value=c,a.value="100%")})},onSave:()=>{const s=document.createElement("a");s.download="notitle.gif",s.href=r.value,s.click(),e.value="Saved"}}}const re={class:"base-gif-form"},le={style:{"font-size":"12px"}},ie=F({__name:"BaseGifForm",props:{mode:{},aspect:{},modelValue:{},config:{}},emits:["update:modelValue"],setup(t,{emit:n}){const e=t,a={Input:Z,InputNumber:J},r=n,l=A({get:()=>e.modelValue,set:i=>r("update:modelValue",i)});return(i,o)=>(v(),C("div",re,[p(u(q),{model:l.value,"auto-label-width":""},{default:f(()=>[(v(!0),C(D,null,U(i.config,d=>(v(),k(u(j),{field:d.name,label:d.label},{extra:f(()=>[x(b(d.desc),1)]),default:f(()=>[(v(),k(H(a[d.component]),I({modelValue:l.value[d.name],"onUpdate:modelValue":h=>l.value[d.name]=h,ref_for:!0},{...d.props}),{suffix:f(()=>[m("span",le,b(d.unit),1)]),_:2},1040,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["field","label"]))),256))]),_:1},8,["model"])]))}}),ue={class:"base-gif-preview"},de=F({__name:"BaseGifPreview",props:{code:{},result:{},percent:{}},setup(t){return(n,e)=>(v(),C("div",ue,[$(m("div",{class:"preview-tips"},b(n.percent),513),[[G,n.code==="Ongoing"]]),p(u(Q),{class:"preview-image",width:"100%",height:250,fit:"contain",src:n.result},null,8,["src"])]))}}),ce=Y(de,[["__scopeId","data-v-4537a182"]]),me=F({__name:"BaseGif",props:{mode:{},sources:{},resolve:{type:Function}},setup(t){const n=t,e=w(!0),{config:a,form:r,aspect:l,stateCode:i,convertProgress:o,convertResult:d,onConvert:h,onSave:g}=ae(n.mode,n.sources),W=()=>{e.value=!1};return E(()=>{h()}),(B,s)=>(v(),k(u(N),{visible:e.value,"onUpdate:visible":s[1]||(s[1]=c=>e.value=c),class:"base-gif",title:"参数配置",width:"850px","unmount-on-close":"",draggable:"",closable:!1,"esc-to-close":!1,"mask-closable":!1},{footer:f(()=>[p(u(_),{onClick:W},{default:f(()=>s[2]||(s[2]=[x("关闭")])),_:1}),p(u(_),{onClick:u(h),type:"primary"},{default:f(()=>s[3]||(s[3]=[x("生成预览")])),_:1},8,["onClick"]),p(u(_),{onClick:u(g),type:"primary"},{default:f(()=>s[4]||(s[4]=[x("保存动图")])),_:1},8,["onClick"])]),default:f(()=>[p(ie,{modelValue:u(r),"onUpdate:modelValue":s[0]||(s[0]=c=>K(r)?r.value=c:null),mode:B.mode,aspect:u(l),config:u(a)},null,8,["modelValue","mode","aspect","config"]),p(ce,{mode:B.mode,result:u(d),percent:u(o),code:u(i)},null,8,["mode","result","percent","code"])]),_:1},8,["visible"]))}});function we(t,n){return new Promise(e=>{const a=p(me,{mode:t,resolve:e,sources:n}),r=document.createElement("div");z(a,r);const l=a.el;document.body.appendChild(l)})}const xe={getId(){const t=[],n="0123456789abcdef";for(var e=0;e<36;e++)t[e]=n.substr(Math.floor(Math.random()*16),1);return t[14]="4",t[19]=n.substr(t[19]&3|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")},getSize(t){const n=t.size,e=["Bytes","KB","MB","GB"];let a=0,r=n;for(;r>=1024&&a<e.length-1;)r/=1024,a++;return`${r.toFixed(2)} ${e[a]}`},formatSize(t){const n=["Bytes","KB","MB","GB"];let e=0;for(;t>=1024&&e<n.length-1;)t/=1024,e++;return`${t.toFixed(2)}${n[e]}`},chooser(t){return new Promise(n=>{const e=document.createElement("input");e.type="file",e.multiple=!0,e.accept=t,e.click(),e.addEventListener("change",()=>n(Array.from(e.files)),{once:!0}),e.onchange=()=>{}})},urlToU8A(t){const n=t.split(","),e=n[0].split(":")[1],a=window.atob(n[1]),r=a.length,l=new Uint8Array(r);for(let i=0;i<r;++i)l[i]=a.charCodeAt(i);return{data:l,type:e}},urlToFile(t,n="notitled"){const{data:e,type:a}=this.urlToU8A(t);return new File([e],n,{type:a})},urlToBlob(t){const{data:n,type:e}=this.urlToU8A(t);return new Blob([n],{type:e})}};async function Ce(t){const n=S(t,r=>y("div",{class:"remove-confirm-line"},S(r,l=>y("span",{class:"remove-confirm-word"},l)))),e=y("div",{class:"remove-confirm-wrap"},n),a=y("div",{style:"margin-bottom:10px"},`共 ${t.length} 条数据，是否移除？`);return await pe({content:()=>y("div",{},[a,e]),okText:"移除",cancelText:"取消"})}function pe(t){const{title:n,titleAlign:e,content:a,okText:r,cancelText:l}=t;return new Promise(i=>{N.open({simple:!0,title:n||"系统提醒:",titleAlign:e||"start",content:a||"你确定要这么做吗?",alignCenter:!0,okText:r||"确认",width:300,cancelText:l||"取消",modalStyle:{padding:"15px 32px 15px"},onOk:()=>i(!0),onCancel:()=>i(!1)})})}export{xe as F,ye as _,we as c,Ce as r};
