import r from"./ContentDoc.67fd1287.js";import{u as i,q as l}from"./query.6a8d0be0.js";import{q as m,X as u,l as o,u as p,R as d,S as h,Q as _,o as s}from"./entry.bcd7c680.js";import"./ContentRenderer.509b8857.js";import"./ContentRendererMarkdown.5e297bf9.js";import"./index.a6ef77ff.js";import"./ContentQuery.583be891.js";import"./utils.5ca5926d.js";const f={class:"news-single"},y={key:0,class:"content-container"},g=_("h1",null,"TestTitle",-1),w=_("p",null,null,-1),T={__name:"[...slug]",async setup(x){let t,e;const{path:n}=m(),{data:a}=([t,e]=u(()=>i(`content-${n}`,()=>l().where({_path:n}).findOne())),t=await t,e(),t);return(C,k)=>{const c=r;return s(),o("main",f,[p(a).title?(s(),o("div",y,[g,w,d(c)])):h("",!0)])}}};export{T as default};
