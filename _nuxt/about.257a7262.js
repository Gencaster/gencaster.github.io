import{_ as x}from"./SectionHeading.ac5e98e9.js";import v from"./ContentRendererMarkdown.b9d6dff7.js";import w from"./ContentRenderer.c771b41a.js";/* empty css                      */import{k as h,o,l as s,N as p,O as a,w as k,P as m,Q as f,R as $,S as b,c as S,U as _,u as r}from"./entry.1197b6d6.js";import{_ as O}from"./SupportContainer.31f28482.js";import{u,q as d}from"./query.dd857348.js";import"./app.config.c2e33706.js";/* empty css                           */import"./index.a6ef77ff.js";/* empty css                        */import"./utils.cd407e55.js";const R={class:"text-container"},B={__name:"PlainText",props:{heading:String,text:Object},setup(e){return(t,n)=>{const i=x,c=v,l=w;return o(),s("section",null,[p("div",R,[a(i,{heading:e.heading},null,8,["heading"]),a(l,{value:e.text,tag:"div"},{default:k(()=>[a(c,{value:e.text},null,8,["value"])]),_:1},8,["value"])])])}}},N=h(B,[["__scopeId","data-v-9e46cf33"]]),A={class:"tile"},I={key:0,class:"img-container"},P=["src","alt"],V={key:1},j={key:2,class:"role"},q={__name:"Tile",props:{tile:Object},setup(e){return(t,n)=>{const i=v,c=w;return o(),s("div",A,[e.tile.img?(o(),s("div",I,[p("img",{src:e.tile.img.src,alt:e.tile.img.alt},null,8,P)])):m("",!0),e.tile.heading?(o(),s("h4",V,f(e.tile.heading),1)):m("",!0),e.tile.role?(o(),s("p",j,f(e.tile.role),1)):m("",!0),a(c,{value:e.tile,tag:"div"},{default:k(()=>[a(i,{value:e.tile,class:"text-container"},null,8,["value"])]),_:1},8,["value"])])}}},D=h(q,[["__scopeId","data-v-d94c534a"]]),H={__name:"TeamTiles",props:{heading:String,tiles:Array},setup(e){return(t,n)=>{const i=x,c=D;return o(),s("section",null,[a(i,{heading:e.heading},null,8,["heading"]),p("div",null,[(o(!0),s($,null,b(e.tiles,l=>(o(),S(c,{tile:l},null,8,["tile"]))),256))])])}}},M=h(H,[["__scopeId","data-v-cae067cd"]]),et={__name:"about",async setup(e){let t,n;const{data:i}=([t,n]=_(()=>u("about",()=>d("about").where({section:"origin"}).findOne())),t=await t,n(),t),{data:c}=([t,n]=_(()=>u("techstack",()=>d("about").where({section:"techstack"}).findOne())),t=await t,n(),t),{data:l}=([t,n]=_(()=>u("team",()=>d("about","team").where({section:"team"}).find())),t=await t,n(),t),{data:y}=([t,n]=_(()=>u("support",()=>d("general","support").where({section:"support"}).find())),t=await t,n(),t);return(E,F)=>{const g=N,C=M,T=O;return o(),s("main",null,[a(g,{heading:r(i).heading,text:r(i)},null,8,["heading","text"]),a(g,{heading:r(c).heading,text:r(c)},null,8,["heading","text"]),a(C,{heading:"Team",tiles:r(l)},null,8,["tiles"]),a(T,{heading:"Support",tiles:r(y)},null,8,["tiles"])])}}};export{et as default};
