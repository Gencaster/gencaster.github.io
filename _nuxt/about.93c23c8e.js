import{_ as f}from"./SectionHeading.679b5967.js";import v from"./ContentRendererMarkdown.75873395.js";import w from"./ContentRenderer.1ee89319.js";/* empty css                      */import{k as h,o,l as s,Q as p,R as a,w as k,S as d,U as x,V as T,W as $,c as S,X as _,u as r}from"./entry.1f33bdf2.js";import{_ as R}from"./SupportContainer.40501e36.js";import{u,q as m}from"./query.78763c8e.js";/* empty css                           */import"./index.a6ef77ff.js";/* empty css                        */import"./utils.1953c7ad.js";const B={class:"text-container"},O={__name:"PlainText",props:{heading:String,text:Object},setup(e){return(t,n)=>{const i=f,c=v,l=w;return o(),s("section",null,[p("div",B,[a(i,{heading:e.heading},null,8,["heading"]),a(l,{value:e.text,tag:"div"},{default:k(()=>[a(c,{value:e.text},null,8,["value"])]),_:1},8,["value"])])])}}},V=h(O,[["__scopeId","data-v-5c27e2b6"]]),A={class:"tile"},I={key:0,class:"img-container"},N=["src","alt"],j={key:1},q={key:2,class:"role"},D={__name:"Tile",props:{tile:Object},setup(e){return(t,n)=>{const i=v,c=w;return o(),s("div",A,[e.tile.img?(o(),s("div",I,[p("img",{src:e.tile.img.src,alt:e.tile.img.alt},null,8,N)])):d("",!0),e.tile.heading?(o(),s("h4",j,x(e.tile.heading),1)):d("",!0),e.tile.role?(o(),s("p",q,x(e.tile.role),1)):d("",!0),a(c,{value:e.tile,tag:"div"},{default:k(()=>[a(i,{value:e.tile,class:"text-container"},null,8,["value"])]),_:1},8,["value"])])}}},H=h(D,[["__scopeId","data-v-1138102c"]]),M={__name:"TeamTiles",props:{heading:String,tiles:Array},setup(e){return(t,n)=>{const i=f,c=H;return o(),s("section",null,[a(i,{heading:e.heading},null,8,["heading"]),p("div",null,[(o(!0),s(T,null,$(e.tiles,l=>(o(),S(c,{tile:l},null,8,["tile"]))),256))])])}}},P=h(M,[["__scopeId","data-v-7ca95026"]]),tt={__name:"about",async setup(e){let t,n;const{data:i}=([t,n]=_(()=>u("about",()=>m("about").where({section:"origin"}).findOne())),t=await t,n(),t),{data:c}=([t,n]=_(()=>u("techstack",()=>m("about").where({section:"techstack"}).findOne())),t=await t,n(),t),{data:l}=([t,n]=_(()=>u("team",()=>m("about","team").where({section:"team"}).find())),t=await t,n(),t),{data:b}=([t,n]=_(()=>u("support",()=>m("general","support").where({section:"support"}).find())),t=await t,n(),t);return(E,F)=>{const g=V,y=P,C=R;return o(),s("main",null,[a(g,{heading:r(i).heading,text:r(i)},null,8,["heading","text"]),a(g,{heading:r(c).heading,text:r(c)},null,8,["heading","text"]),a(y,{heading:"Team",tiles:r(l)},null,8,["tiles"]),a(C,{heading:"Support",tiles:r(b)},null,8,["tiles"])])}}};export{tt as default};
