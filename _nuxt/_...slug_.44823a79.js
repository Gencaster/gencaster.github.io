import l from"./ContentDoc.ad32e5e5.js";import{u,q as p}from"./query.78763c8e.js";import{q as d,X as h,l as f,Q as e,U as c,u as _,R as y,o as g}from"./entry.1f33bdf2.js";import"./ContentRenderer.1ee89319.js";import"./ContentRendererMarkdown.75873395.js";import"./index.a6ef77ff.js";import"./ContentQuery.ced4ca24.js";import"./utils.1953c7ad.js";const D={class:"news-single"},w={class:"content-container"},x={datetime:"{article.date}"},U={__name:"[...slug]",async setup(q){let t,n;const{path:o}=d(),{data:a}=([t,n]=h(()=>u(`content-${o}`,()=>p().where({_path:o}).findOne())),t=await t,n(),t);function i(s){const r={month:"short",day:"numeric",year:"numeric"};return new Date(s).toLocaleDateString("en-US",r)}return(s,r)=>{const m=l;return g(),f("main",D,[e("div",w,[e("h1",null,c(_(a).title),1),e("p",null,[e("time",x,c(i(_(a).date)),1)]),y(m)])])}}};export{U as default};
