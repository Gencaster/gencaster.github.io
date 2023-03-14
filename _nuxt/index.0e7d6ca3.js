/* empty css                       */import{k as b,o as c,c as T,w as g,r as D,Y as U,C as O,l as u,Q as l,u as h,U as I,Z as _,R as d,$ as H,a0 as B,S as W,a1 as x,f as J,p as E,E as K,M as Z,a2 as z,a3 as S,L as G,t as Q,V as C,W as w,X as f,a4 as X,a5 as Y}from"./entry.1f33bdf2.js";import{_ as A}from"./SectionHeading.679b5967.js";import $ from"./ContentRendererMarkdown.75873395.js";import L from"./ContentRenderer.1ee89319.js";import{_ as ee}from"./NewsArchiveTile.f3f9b781.js";import{u as p,q as v}from"./query.78763c8e.js";import{_ as te}from"./SupportContainer.40501e36.js";/* empty css                           */import"./index.a6ef77ff.js";/* empty css                            */import"./utils.1953c7ad.js";/* empty css                        */const ne=""+globalThis.__publicAssetsURL("arrow/arrow.svg"),ae={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:e=>["height","width"].includes(e)},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension(){this.clearCachedDimensions()}},data(){return{cachedStyles:null}},computed:{transition(){let e=[];return Object.keys(this.cachedStyles).forEach(t=>{e.push(`${this.convertToCssProperty(t)} ${this.duration}ms ${this.easing}`)}),e.join(", ")}},methods:{beforeAppear(e){this.$emit("before-appear",e)},appear(e){this.$emit("appear",e)},afterAppear(e){this.$emit("after-appear",e)},appearCancelled(e){this.$emit("appear-cancelled",e)},beforeEnter(e){this.$emit("before-enter",e)},enter(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),this.$emit("enter",e,t),setTimeout(t,this.duration)},afterEnter(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions(),this.$emit("after-enter",e)},enterCancelled(e){this.$emit("enter-cancelled",e)},beforeLeave(e){this.$emit("before-leave",e)},leave(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),this.$emit("leave",e,t),setTimeout(t,this.duration)},afterLeave(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions(),this.$emit("after-leave",e)},leaveCancelled(e){this.$emit("leave-cancelled",e)},detectAndCacheDimensions(e){if(this.cachedStyles)return;const t=e.style.visibility,n=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=n},clearCachedDimensions(){this.cachedStyles=null},detectRelevantDimensions(e){return this.dimension==="height"?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:this.dimension==="width"?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition(e){e.style.transition=this.transition},unsetTransition(e){e.style.transition=""},hideOverflow(e){e.style.overflow="hidden"},unsetOverflow(e){e.style.overflow=""},setClosedDimensions(e){Object.keys(this.cachedStyles).forEach(t=>{e.style[t]="0"})},setOpenedDimensions(e){Object.keys(this.cachedStyles).forEach(t=>{e.style[t]=this.cachedStyles[t]})},unsetDimensions(e){Object.keys(this.cachedStyles).forEach(t=>{e.style[t]=""})},forceRepaint(e){getComputedStyle(e)[this.dimension]},getCssValue(e,t){return getComputedStyle(e,null).getPropertyValue(t)},convertToCssProperty(e){const t=e.match(/([A-Z])/g);if(!t)return e;for(let n=0,s=t.length;n<s;n++)e=e.replace(new RegExp(t[n]),"-"+t[n].toLowerCase());return e.slice(0,1)==="-"&&(e=e.slice(1)),e}}};function se(e,t,n,s,o,a){return c(),T(U,{name:n.name,onBeforeAppear:a.beforeAppear,onAppear:a.appear,onAfterAppear:a.afterAppear,onAppearCancelled:a.appearCancelled,onBeforeEnter:a.beforeEnter,onEnter:a.enter,onAfterEnter:a.afterEnter,onEnterCancelled:a.enterCancelled,onBeforeLeave:a.beforeLeave,onLeave:a.leave,onAfterLeave:a.afterLeave,onLeaveCancelled:a.leaveCancelled},{default:g(()=>[D(e.$slots,"default")]),_:3},8,["name","onBeforeAppear","onAppear","onAfterAppear","onAppearCancelled","onBeforeEnter","onEnter","onAfterEnter","onEnterCancelled","onBeforeLeave","onLeave","onAfterLeave","onLeaveCancelled"])}const ie=b(ae,[["render",se]]),oe={class:"accordion"},re={class:"accordion__heading"},ce={class:"accordion__content"},le={__name:"AccordionItem",props:{item:Object},setup(e){const t=O(!1);return(n,s)=>{const o=$,a=L;return c(),u("div",oe,[l("div",re,[l("button",{class:"toggle-button",onClick:s[0]||(s[0]=i=>t.value=!h(t))},[l("h5",null,I(e.item.heading),1),l("img",{src:ne,alt:"toggle arrow",class:_({open:h(t)})},null,2)])]),d(ie,{duration:200},{default:g(()=>[H(l("div",ce,[d(a,{value:e.item,tag:"div"},{default:g(()=>[d(o,{value:e.item,class:"text-container"},null,8,["value"])]),_:1},8,["value"])],512),[[B,h(t)]])]),_:1})])}}},de={class:"text-container"},ue={key:0,class:"img-container"},he=["src","alt"],me={__name:"ColoredBgText",props:{heading:String,content:Object,color:String,img:Object},setup(e){return(t,n)=>{const s=A,o=$,a=L;return c(),u("section",{class:_(e.color)},[l("div",de,[d(s,{heading:e.heading},null,8,["heading"]),d(a,{value:e.content,tag:"div"},{default:g(()=>[d(o,{value:e.content},null,8,["value"])]),_:1},8,["value"])]),e.img?(c(),u("div",ue,[l("img",{src:e.img.src,alt:e.img.alt},null,8,he)])):W("",!0)],2)}}},_e=b(me,[["__scopeId","data-v-0f6d2f5e"]]);var R=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};const fe={name:"Tab",props:{panelClass:{type:String,default:"tabs-component-panel"},id:{type:String,default:null},name:{type:String,required:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1}},setup(e){const t=O(!1),n=x("tabsProvider"),s=x("addTab"),o=x("updateTab"),a=x("deleteTab"),i=e.prefix+e.name+e.suffix,r=e.id?e.id:e.name.toLowerCase().replace(/ /g,"-"),m=J(()=>"#"+(e.isDisabled?"":r));return E(()=>n.activeTabHash,()=>{t.value=m.value===n.activeTabHash}),E(()=>Object.assign({},e),()=>{o(r,{name:e.name,header:e.prefix+e.name+e.suffix,isDisabled:e.isDisabled,hash:m.value,index:n.tabs.length,computedId:r})}),K(()=>{s({name:e.name,header:i,isDisabled:e.isDisabled,hash:m.value,index:n.tabs.length,computedId:r})}),Z(()=>{a(r)}),{header:i,computedId:r,hash:m,isActive:t}}},pe=["data-tab-id","aria-hidden"];function ve(e,t,n,s,o,a){return H((c(),u("section",{ref:"tab","data-tab-id":s.computedId,"aria-hidden":!s.isActive,class:_(n.panelClass),role:"tabpanel"},[D(e.$slots,"default")],10,pe)),[[B,s.isActive]])}var ge=R(fe,[["render",ve]]);class be{get(t){const n=JSON.parse(localStorage.getItem(t));return n?new Date(n.expires)<new Date?(localStorage.removeItem(t),null):n.value:null}set(t,n,s){const o=new Date().getTime(),a=new Date(o+s*6e4);localStorage.setItem(t,JSON.stringify({value:n,expires:a}))}}var k=new be;const Ce={props:{cacheLifetime:{type:Number,default:5},options:{type:Object,required:!1,default:()=>({useUrlFragment:!0,defaultTabHash:null})},wrapperClass:{type:String,default:"tabs-component"},panelsWrapperClass:{type:String,default:"tabs-component-panels"},navClass:{type:String,default:"tabs-component-tabs"},navItemClass:{type:String,default:"tabs-component-tab"},navItemDisabledClass:{type:String,default:"is-disabled"},navItemActiveClass:{type:String,default:"is-active"},navItemInactiveClass:{type:String,default:"is-inactive"},navItemLinkClass:{type:String,default:"tabs-component-tab-a"},navItemLinkActiveClass:{type:String,default:"is-active"},navItemLinkInactiveClass:{type:String,default:"is-inactive"},navItemLinkDisabledClass:{type:String,default:"is-disabled"}},emits:["changed","clicked"],setup(e,t){const n=z({activeTabHash:"",lastActiveTabHash:"",tabs:[]});S("tabsProvider",n),S("addTab",a=>{n.tabs.push(a)}),S("updateTab",(a,i)=>{let r=n.tabs.findIndex(m=>m.computedId===a);i.isActive=n.tabs[r].isActive,n.tabs[r]=i}),S("deleteTab",a=>{let i=n.tabs.findIndex(r=>r.computedId===a);n.tabs.splice(i,1)});const s=(a,i)=>{i&&!e.options.useUrlFragment&&i.preventDefault();const r=o(a);if(!r)return;if(i&&r.isDisabled){i.preventDefault();return}if(n.lastActiveTabHash===r.hash){t.emit("clicked",{tab:r});return}n.tabs.forEach(y=>{y.isActive=y.hash===r.hash}),t.emit("changed",{tab:r}),n.lastActiveTabHash=n.activeTabHash=r.hash;const m=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`;k.set(m,r.hash,e.cacheLifetime)},o=a=>n.tabs.find(i=>i.hash===a);return G(()=>{if(!n.tabs.length)return;if(window.addEventListener("hashchange",()=>s(window.location.hash)),o(window.location.hash)){s(window.location.hash);return}const a=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`,i=k.get(a);if(o(i)){s(i);return}if(e.options.defaultTabHash&&o("#"+e.options.defaultTabHash)){s("#"+e.options.defaultTabHash);return}s(n.tabs[0].hash)}),{...Q(n),selectTab:s,findTab:o}}},we=["aria-controls","aria-selected","href","onClick","innerHTML"];function ye(e,t,n,s,o,a){return c(),u("div",{class:_(n.wrapperClass)},[l("ul",{role:"tablist",class:_(n.navClass)},[(c(!0),u(C,null,w(e.tabs,(i,r)=>(c(),u("li",{key:r,class:_([n.navItemClass,i.isDisabled?n.navItemDisabledClass:"",i.isActive?n.navItemActiveClass:i.isDisabled?"":n.navItemInactiveClass]),role:"presentation"},[l("a",{role:"tab",class:_([n.navItemLinkClass,i.isDisabled?n.navItemLinkDisabledClass:"",i.isActive?n.navItemLinkActiveClass:i.isDisabled?"":n.navItemLinkInactiveClass]),"aria-controls":i.hash,"aria-selected":i.isActive,href:i.hash,onClick:m=>s.selectTab(i.hash,m),innerHTML:i.header},null,10,we)],2))),128))],2),l("div",{class:_(n.panelsWrapperClass)},[D(e.$slots,"default")],2)],2)}var xe=R(Ce,[["render",ye]]);const Se={class:"editor-text"},Te={class:"editor-tabs"},Ae={class:"tab-content-container"},De=["src","alt"],Ie={__name:"EditorTabs",props:{items:Array,text:Object},setup(e){return(t,n)=>{const s=A,o=$,a=L;return c(),u("section",null,[d(s,{heading:"Editor"}),d(a,{value:e.text,tag:"div"},{default:g(()=>[l("div",Se,[d(o,{value:e.text},null,8,["value"])])]),_:1},8,["value"]),l("div",Te,[d(h(xe),null,{default:g(()=>[(c(!0),u(C,null,w(e.items,i=>(c(),T(h(ge),{name:i.title},{default:g(()=>[l("div",Ae,[l("img",{src:i.img.src,alt:i.img.alt},null,8,De)])]),_:2},1032,["name"]))),256))]),_:1})])])}}},$e={class:"accordion-container"},Le={__name:"FeatureAccordion",props:{heading:String,items:Array},setup(e){return(t,n)=>{const s=A,o=le;return c(),u("section",null,[d(s,{heading:e.heading},null,8,["heading"]),l("div",$e,[(c(!0),u(C,null,w(e.items,a=>(c(),T(o,{item:a},null,8,["item"]))),256))])])}}},Ee=b(Le,[["__scopeId","data-v-57a476c2"]]),ke={class:"hero"},Oe={__name:"Hero",props:{text:String},setup(e){return(t,n)=>(c(),u("section",ke,[l("p",null,I(e.text),1)]))}},He=b(Oe,[["__scopeId","data-v-e3e932bf"]]),Be=e=>(X("data-v-89ecaed8"),e=e(),Y(),e),Re={class:"news-archive-container"},Ne=Be(()=>l("div",{class:"more-link"},[l("a",{href:"/news"},"More")],-1)),je={__name:"NewsArchivePreview",async setup(e){let t,n;const{data:s}=([t,n]=f(()=>p("news",()=>v("news").sort({date:1}).limit(2).find())),t=await t,n(),t);return(o,a)=>{const i=A,r=ee;return c(),u("section",null,[d(i,{heading:"News"}),l("div",Re,[(c(!0),u(C,null,w(h(s),m=>(c(),T(r,{article:m},null,8,["article"]))),256)),Ne])])}}},Ve=b(je,[["__scopeId","data-v-89ecaed8"]]),Me=["href"],qe={__name:"SectionNav",props:{sections:Array},setup(e){return(t,n)=>(c(),u("div",null,[l("ul",null,[(c(!0),u(C,null,w(e.sections,s=>(c(),u("li",null,[l("a",{href:"#"+s.toLowerCase()},I(s),9,Me)]))),256))])]))}},Pe=b(qe,[["__scopeId","data-v-8d73f073"]]);const Fe={__name:"index",async setup(e){let t,n;const{data:s}=([t,n]=f(()=>p("home",()=>v("home").where({section:"hero"}).findOne())),t=await t,n(),t),{data:o}=([t,n]=f(()=>p("general",()=>v("home").where({section:"general"}).findOne())),t=await t,n(),t),{data:a}=([t,n]=f(()=>p("features",()=>v("home","features").where({section:"features"}).find())),t=await t,n(),t),{data:i}=([t,n]=f(()=>p("editor_text",()=>v("home","editor").where({title:"Editor"}).findOne())),t=await t,n(),t),{data:r}=([t,n]=f(()=>p("editor_tabs",()=>v("home","editor","tabs").where({section:"editor"}).find())),t=await t,n(),t),{data:m}=([t,n]=f(()=>p("support",()=>v("general","support").where({section:"support"}).find())),t=await t,n(),t),y=["General","Features","Editor","News","Support"];return(Ue,We)=>{const N=He,j=Pe,V=_e,M=Ee,q=Ie,P=Ve,F=te;return c(),u("main",null,[d(N,{text:h(s).text},null,8,["text"]),d(j,{sections:y}),d(V,{heading:h(o).heading,content:h(o),img:h(o).img,color:h(o).color},null,8,["heading","content","img","color"]),d(M,{heading:"Features",items:h(a)},null,8,["items"]),d(q,{text:h(i),items:h(r)},null,8,["text","items"]),d(P),d(F,{heading:"Support",tiles:h(m)},null,8,["tiles"])])}}},it=b(Fe,[["__scopeId","data-v-05b85649"]]);export{it as default};