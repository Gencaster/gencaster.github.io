import{q as _,h as u,e as f,j as v,u as d}from"./query.78763c8e.js";import{e as l,_ as g,a as h,t as y,f as w,i as C,b as $,h as r}from"./entry.1f33bdf2.js";import{_ as T}from"./nuxt-link.5a6a54b1.js";import{w as c,s as x,u as N,a as P}from"./utils.1953c7ad.js";/* empty css                       *//* empty css                           *//* empty css                            *//* empty css                        *//* empty css                      *//* empty css                        *//* empty css                      */const b=async n=>{const{content:t}=l().public;typeof(n==null?void 0:n.params)!="function"&&(n=_(n));const a=n.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${u(a)}.${t.integrity}`}/${f(a)}.json`):c(`/navigation/${u(a)}.${t.integrity}.json`);if(x())return(await g(()=>import("./client-db.41a7cfaa.js"),["./client-db.41a7cfaa.js","./entry.1f33bdf2.js","./entry.039b49f6.css","./utils.1953c7ad.js","./query.78763c8e.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:v(a),previewToken:N("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const I=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=y(n),a=w(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:e}=P();return{navigation:e}}const{data:s}=await d(`content-navigation-${u(a.value)}`,()=>b(a.value));return{navigation:s}},render(n){const t=$(),{navigation:a}=n,s=o=>r(T,{to:o._path},()=>o.title),e=(o,p)=>r("ul",p?{"data-level":p}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,p+1)]):r("li",null,s(i)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{I as default};