import n from"./ContentQuery.afdc79cd.js";import{q as l,K as y,M as p}from"./entry.915edf9c.js";import"./query.f103a1e6.js";import"./preview.964b7352.js";import"./utils.1dc979aa.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),v=l({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=y(),{path:f,query:a}=r,m={...a||{},path:f||(a==null?void 0:a.path)||"/"};return p(n,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):u("not-found",e==null?void 0:e.data)}})}});export{v as default};