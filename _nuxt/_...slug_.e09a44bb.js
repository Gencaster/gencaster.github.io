import p from"./ContentDoc.15d0d9c4.js";import{u,q as l}from"./query.140cb744.js";import{s as d,S as f,m as _,u as t,L as a,P as i,M as h,O as y,o as m}from"./entry.f1b86b93.js";import{_ as D}from"./formatDate.904a9da0.js";import"./ContentRenderer.977ab94c.js";import"./ContentRendererMarkdown.70ec53dc.js";import"./index.a6ef77ff.js";import"./ContentQuery.91844a04.js";import"./utils.61a208c4.js";const g={class:"news-single"},w={key:0,class:"content-container"},C=["datetime"],E={__name:"[...slug]",async setup(k){let e,n;const{path:s}=d(),{data:o}=([e,n]=f(()=>u(`content-${s}`,()=>l().where({_path:s}).findOne())),e=await e,n(),e);return(r,v)=>{const c=p;return m(),_("main",g,[t(o)?(m(),_("div",w,[a("h1",null,i(t(o).title),1),a("p",null,[a("time",{datetime:t(o).date},i(("formatDate"in r?r.formatDate:t(D))(t(o).date)),9,C)]),h(c)])):y("",!0)])}}};export{E as default};
