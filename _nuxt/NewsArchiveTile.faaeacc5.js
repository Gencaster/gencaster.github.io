import{_ as d,o as s,c,b as m,w as u,a as t,t as i,j as h,F as g,r as f,g as k,e as v}from"./entry.915edf9c.js";import{_ as w}from"./formatDate.904a9da0.js";const p={class:"container"},y={class:"img-container"},T=["src","alt"],x={class:"title-container"},N=["datetime"],B={key:0,class:"category-filters"},C=["onClick"],D={class:"link"},V={__name:"NewsArchiveTile",props:{article:Object,showTags:{type:Boolean,default:!1}},emits:["clickedTag"],setup(e,{emit:o}){const l=a=>{o("clickedTag",a)};return(a,b)=>{const r=v;return s(),c("div",p,[m(r,{to:e.article._path,class:"news-wrapper"},{default:u(()=>[t("div",y,[t("img",{src:e.article.teaser_img.src,alt:e.article.teaser_img.alt},null,8,T)]),t("div",x,[t("time",{datetime:e.article.date},i(("formatDate"in a?a.formatDate:h(w))(e.article.date)),9,N),t("h4",null,i(e.article.title),1)])]),_:1},8,["to"]),e.showTags?(s(),c("div",B,[(s(!0),c(g,null,f(e.article.tags,(n,_)=>(s(),c("div",{key:_,class:"tag",onClick:j=>l(n)},[t("span",D,i(n),1)],8,C))),128))])):k("",!0)])}}},L=d(V,[["__scopeId","data-v-4d513372"]]);export{L as _};