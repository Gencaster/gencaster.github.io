import{q as _,h as u,e as v,j as f,u as l}from"./query.5dfdc6c9.js";import{e as d,_ as g,a as h,t as y,f as w,i as C,b as $,h as r,j as T}from"./entry.700b009b.js";import{w as c,s as j,u as x,a as N}from"./utils.e1cf69b8.js";/* empty css                       *//* empty css                           *//* empty css                            *//* empty css                        *//* empty css                      *//* empty css                        *//* empty css                      */const P=async n=>{const{content:t}=d().public;typeof(n==null?void 0:n.params)!="function"&&(n=_(n));const a=n.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${u(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${u(a)}.${t.integrity}.json`);if(j())return(await g(()=>import("./client-db.f1a2fa18.js"),["./client-db.f1a2fa18.js","./entry.700b009b.js","./entry.61e35f1d.css","./utils.e1cf69b8.js","./query.5dfdc6c9.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:f(a),previewToken:x("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const G=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=y(n),a=w(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:e}=N();return{navigation:e}}const{data:s}=await l(`content-navigation-${u(a.value)}`,()=>P(a.value));return{navigation:s}},render(n){const t=$(),{navigation:a}=n,s=o=>r(T,{to:o._path},()=>o.title),e=(o,p)=>r("ul",p?{"data-level":p}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,p+1)]):r("li",null,s(i)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{G as default};