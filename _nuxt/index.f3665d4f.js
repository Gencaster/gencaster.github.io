import{_ as L}from"./SectionHeading.1ce57586.js";import{_ as B}from"./NewsArchiveTile.faaeacc5.js";import{_ as y,i as F,l as h,s as T,o as s,c as r,j as v,a as u,F as g,r as x,n as E,t as V,b as w,w as b,h as q,H as D,g as H}from"./entry.915edf9c.js";import{u as I,q as S}from"./query.f103a1e6.js";import"./formatDate.904a9da0.js";import"./preview.964b7352.js";import"./utils.1dc979aa.js";const $={key:0},j=["data-tag","onClick"],z={class:"news-archive-container"},G={__name:"NewsArchive",async setup(C){let a,c;const{data:l}=([a,c]=F(()=>I("news",()=>S("news").sort({date:-1}).find())),a=await a,c(),a),n=h("All"),d=h(0),i=["All"];l.value.forEach(t=>t.tags.forEach(e=>{e=e.charAt(0).toUpperCase()+e.slice(1),i.includes(e)||i.push(e)}));function A(t,e){d.value=e,n.value=t.target.dataset.tag}const k=T(()=>n.value===""||n.value==="All"?l.value:l.value.filter(t=>t.tags.includes(n.value.toLowerCase()))),N=t=>{const p=i.map(m=>m.toLowerCase()).indexOf(t);d.value=p,n.value=t};return(t,e)=>{const p=L,m=B;return s(),r("section",null,[v(l)?(s(),r("div",$,[u("ul",null,[(s(),r(g,null,x(i,(_,o)=>u("li",{key:o},[u("button",{"data-tag":_,class:E({active:v(d)===o}),onClick:f=>A(f,o)},V(_),11,j)])),64))]),w(p,{heading:"News"}),u("div",z,[w(D,{name:"fade"},{default:b(()=>[(s(!0),r(g,null,x(v(k),(_,o)=>(s(),q(m,{key:o,article:_,"show-tags":!0,"counter-ref":"",onClickedTag:e[0]||(e[0]=f=>N(f))},null,8,["article"]))),128))]),_:1})])])):H("",!0)])}}},O=y(G,[["__scopeId","data-v-c1c9a54e"]]),U={};function J(C,a){const c=O;return s(),r("main",null,[w(c)])}const Y=y(U,[["render",J]]);export{Y as default};
