import{q as _,h as u,e as f,j as v,u as l}from"./query.188c3c66.js";import{e as d,_ as g,a as h,t as y,f as w,i as C,b as $,h as r}from"./entry.e471f4d1.js";import{_ as T}from"./nuxt-link.caa8f9dc.js";import{w as c,s as x,u as N,a as P}from"./utils.1ca2701b.js";/* empty css                       *//* empty css                           *//* empty css                            *//* empty css                        *//* empty css                      *//* empty css                        *//* empty css                      */const b=async n=>{const{content:t}=d().public;typeof(n==null?void 0:n.params)!="function"&&(n=_(n));const a=n.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${u(a)}.${t.integrity}`}/${f(a)}.json`):c(`/navigation/${u(a)}.${t.integrity}.json`);if(x())return(await g(()=>import("./client-db.4e0e7b9b.js"),["./client-db.4e0e7b9b.js","./entry.e471f4d1.js","./entry.bb7e504f.css","./utils.1ca2701b.js","./query.188c3c66.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:v(a),previewToken:N("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const I=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=y(n),a=w(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:e}=P();return{navigation:e}}const{data:s}=await l(`content-navigation-${u(a.value)}`,()=>b(a.value));return{navigation:s}},render(n){const t=$(),{navigation:a}=n,s=o=>r(T,{to:o._path},()=>o.title),e=(o,p)=>r("ul",p?{"data-level":p}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,p+1)]):r("li",null,s(i)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{I as default};