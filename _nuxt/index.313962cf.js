/* empty css                       */import{l as b,o as c,c as y,w as _,r as D,R as J,D as H,m as u,K as d,u as h,N as $,S as f,L as l,U as N,V as B,M as I,W as S,f as Z,q as O,F as z,X as G,Y as Q,Z as T,$ as X,t as Y,O as w,P as x,Q as p,a0 as R,j}from"./entry.700b009b.js";import{_ as A}from"./SectionHeading.22cfb432.js";import L from"./ContentRendererMarkdown.81917a28.js";import k from"./ContentRenderer.8390bc3c.js";import{_ as ee}from"./NewsArchiveTile.7e3f2ff2.js";import{u as v,q as g}from"./query.5dfdc6c9.js";import{_ as te}from"./SupportContainer.daee5754.js";/* empty css                           */import"./index.a6ef77ff.js";/* empty css                            */import"./utils.e1cf69b8.js";/* empty css                        */const ne=""+globalThis.__publicAssetsURL("arrow/arrow.svg"),ae={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:e=>["height","width"].includes(e)},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension(){this.clearCachedDimensions()}},data(){return{cachedStyles:null}},computed:{transition(){let e=[];return Object.keys(this.cachedStyles).forEach(t=>{e.push(`${this.convertToCssProperty(t)} ${this.duration}ms ${this.easing}`)}),e.join(", ")}},methods:{beforeAppear(e){this.$emit("before-appear",e)},appear(e){this.$emit("appear",e)},afterAppear(e){this.$emit("after-appear",e)},appearCancelled(e){this.$emit("appear-cancelled",e)},beforeEnter(e){this.$emit("before-enter",e)},enter(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),this.$emit("enter",e,t),setTimeout(t,this.duration)},afterEnter(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions(),this.$emit("after-enter",e)},enterCancelled(e){this.$emit("enter-cancelled",e)},beforeLeave(e){this.$emit("before-leave",e)},leave(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),this.$emit("leave",e,t),setTimeout(t,this.duration)},afterLeave(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions(),this.$emit("after-leave",e)},leaveCancelled(e){this.$emit("leave-cancelled",e)},detectAndCacheDimensions(e){if(this.cachedStyles)return;const t=e.style.visibility,n=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=n},clearCachedDimensions(){this.cachedStyles=null},detectRelevantDimensions(e){return this.dimension==="height"?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:this.dimension==="width"?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition(e){e.style.transition=this.transition},unsetTransition(e){e.style.transition=""},hideOverflow(e){e.style.overflow="hidden"},unsetOverflow(e){e.style.overflow=""},setClosedDimensions(e){Object.keys(this.cachedStyles).forEach(t=>{e.style[t]="0"})},setOpenedDimensions(e){Object.keys(this.cachedStyles).forEach(t=>{e.style[t]=this.cachedStyles[t]})},unsetDimensions(e){Object.keys(this.cachedStyles).forEach(t=>{e.style[t]=""})},forceRepaint(e){getComputedStyle(e)[this.dimension]},getCssValue(e,t){return getComputedStyle(e,null).getPropertyValue(t)},convertToCssProperty(e){const t=e.match(/([A-Z])/g);if(!t)return e;for(let n=0,s=t.length;n<s;n++)e=e.replace(new RegExp(t[n]),"-"+t[n].toLowerCase());return e.slice(0,1)==="-"&&(e=e.slice(1)),e}}};function se(e,t,n,s,o,a){return c(),y(J,{name:n.name,onBeforeAppear:a.beforeAppear,onAppear:a.appear,onAfterAppear:a.afterAppear,onAppearCancelled:a.appearCancelled,onBeforeEnter:a.beforeEnter,onEnter:a.enter,onAfterEnter:a.afterEnter,onEnterCancelled:a.enterCancelled,onBeforeLeave:a.beforeLeave,onLeave:a.leave,onAfterLeave:a.afterLeave,onLeaveCancelled:a.leaveCancelled},{default:_(()=>[D(e.$slots,"default")]),_:3},8,["name","onBeforeAppear","onAppear","onAfterAppear","onAppearCancelled","onBeforeEnter","onEnter","onAfterEnter","onEnterCancelled","onBeforeLeave","onLeave","onAfterLeave","onLeaveCancelled"])}const ie=b(ae,[["render",se]]),oe={class:"accordion"},re={class:"accordion__heading"},ce={class:"accordion__content"},le={__name:"AccordionItem",props:{item:Object},setup(e){const t=H(!1);return(n,s)=>{const o=L,a=k;return c(),u("div",oe,[d("div",re,[d("button",{class:"toggle-button",onClick:s[0]||(s[0]=i=>t.value=!h(t))},[d("h5",null,$(e.item.heading),1),d("img",{src:ne,alt:"toggle arrow",class:f({open:h(t)})},null,2)])]),l(ie,{duration:200},{default:_(()=>[N(d("div",ce,[l(a,{value:e.item,tag:"div"},{default:_(()=>[l(o,{value:e.item,class:"text-container"},null,8,["value"])]),_:1},8,["value"])],512),[[B,h(t)]])]),_:1})])}}},de={class:"text-container"},ue={key:0,class:"img-container"},he=["src","alt"],me={__name:"ColoredBgText",props:{heading:String,content:Object,color:String,img:Object},setup(e){return(t,n)=>{const s=A,o=L,a=k;return c(),u("section",{class:f(e.color)},[d("div",de,[l(s,{heading:e.heading},null,8,["heading"]),l(a,{value:e.content,tag:"div"},{default:_(()=>[l(o,{value:e.content},null,8,["value"])]),_:1},8,["value"])]),e.img?(c(),u("div",ue,[d("img",{src:e.img.src,alt:e.img.alt},null,8,he)])):I("",!0)],2)}}},_e=b(me,[["__scopeId","data-v-8325f9e6"]]);var V=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};const fe={name:"Tab",props:{panelClass:{type:String,default:"tabs-component-panel"},id:{type:String,default:null},name:{type:String,required:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},isDisabled:{type:Boolean,default:!1}},setup(e){const t=H(!1),n=S("tabsProvider"),s=S("addTab"),o=S("updateTab"),a=S("deleteTab"),i=e.prefix+e.name+e.suffix,r=e.id?e.id:e.name.toLowerCase().replace(/ /g,"-"),m=Z(()=>"#"+(e.isDisabled?"":r));return O(()=>n.activeTabHash,()=>{t.value=m.value===n.activeTabHash}),O(()=>Object.assign({},e),()=>{o(r,{name:e.name,header:e.prefix+e.name+e.suffix,isDisabled:e.isDisabled,hash:m.value,index:n.tabs.length,computedId:r})}),z(()=>{s({name:e.name,header:i,isDisabled:e.isDisabled,hash:m.value,index:n.tabs.length,computedId:r})}),G(()=>{a(r)}),{header:i,computedId:r,hash:m,isActive:t}}},pe=["data-tab-id","aria-hidden"];function ve(e,t,n,s,o,a){return N((c(),u("section",{ref:"tab","data-tab-id":s.computedId,"aria-hidden":!s.isActive,class:f(n.panelClass),role:"tabpanel"},[D(e.$slots,"default")],10,pe)),[[B,s.isActive]])}var ge=V(fe,[["render",ve]]);class be{get(t){const n=JSON.parse(localStorage.getItem(t));return n?new Date(n.expires)<new Date?(localStorage.removeItem(t),null):n.value:null}set(t,n,s){const o=new Date().getTime(),a=new Date(o+s*6e4);localStorage.setItem(t,JSON.stringify({value:n,expires:a}))}}var E=new be;const Ce={props:{cacheLifetime:{type:Number,default:5},options:{type:Object,required:!1,default:()=>({useUrlFragment:!0,defaultTabHash:null})},wrapperClass:{type:String,default:"tabs-component"},panelsWrapperClass:{type:String,default:"tabs-component-panels"},navClass:{type:String,default:"tabs-component-tabs"},navItemClass:{type:String,default:"tabs-component-tab"},navItemDisabledClass:{type:String,default:"is-disabled"},navItemActiveClass:{type:String,default:"is-active"},navItemInactiveClass:{type:String,default:"is-inactive"},navItemLinkClass:{type:String,default:"tabs-component-tab-a"},navItemLinkActiveClass:{type:String,default:"is-active"},navItemLinkInactiveClass:{type:String,default:"is-inactive"},navItemLinkDisabledClass:{type:String,default:"is-disabled"}},emits:["changed","clicked"],setup(e,t){const n=Q({activeTabHash:"",lastActiveTabHash:"",tabs:[]});T("tabsProvider",n),T("addTab",a=>{n.tabs.push(a)}),T("updateTab",(a,i)=>{let r=n.tabs.findIndex(m=>m.computedId===a);i.isActive=n.tabs[r].isActive,n.tabs[r]=i}),T("deleteTab",a=>{let i=n.tabs.findIndex(r=>r.computedId===a);n.tabs.splice(i,1)});const s=(a,i)=>{i&&!e.options.useUrlFragment&&i.preventDefault();const r=o(a);if(!r)return;if(i&&r.isDisabled){i.preventDefault();return}if(n.lastActiveTabHash===r.hash){t.emit("clicked",{tab:r});return}n.tabs.forEach(C=>{C.isActive=C.hash===r.hash}),t.emit("changed",{tab:r}),n.lastActiveTabHash=n.activeTabHash=r.hash;const m=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`;E.set(m,r.hash,e.cacheLifetime)},o=a=>n.tabs.find(i=>i.hash===a);return X(()=>{if(!n.tabs.length)return;if(window.addEventListener("hashchange",()=>s(window.location.hash)),o(window.location.hash)){s(window.location.hash);return}const a=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`,i=E.get(a);if(o(i)){s(i);return}if(e.options.defaultTabHash&&o("#"+e.options.defaultTabHash)){s("#"+e.options.defaultTabHash);return}s(n.tabs[0].hash)}),{...Y(n),selectTab:s,findTab:o}}},ye=["aria-controls","aria-selected","href","onClick","innerHTML"];function we(e,t,n,s,o,a){return c(),u("div",{class:f(n.wrapperClass)},[d("ul",{role:"tablist",class:f(n.navClass)},[(c(!0),u(w,null,x(e.tabs,(i,r)=>(c(),u("li",{key:r,class:f([n.navItemClass,i.isDisabled?n.navItemDisabledClass:"",i.isActive?n.navItemActiveClass:i.isDisabled?"":n.navItemInactiveClass]),role:"presentation"},[d("a",{role:"tab",class:f([n.navItemLinkClass,i.isDisabled?n.navItemLinkDisabledClass:"",i.isActive?n.navItemLinkActiveClass:i.isDisabled?"":n.navItemLinkInactiveClass]),"aria-controls":i.hash,"aria-selected":i.isActive,href:i.hash,onClick:m=>s.selectTab(i.hash,m),innerHTML:i.header},null,10,ye)],2))),128))],2),d("div",{class:f(n.panelsWrapperClass)},[D(e.$slots,"default")],2)],2)}var xe=V(Ce,[["render",we]]);const Se={class:"editor-text"},Te={class:"editor-tabs"},Ae={class:"tab-content-container"},De=["src","alt"],$e={__name:"EditorTabs",props:{items:Array,text:Object},setup(e){return(t,n)=>{const s=A,o=L,a=k;return c(),u("section",null,[l(s,{heading:"Editor"}),l(a,{value:e.text,tag:"div"},{default:_(()=>[d("div",Se,[e.text?(c(),y(o,{key:0,value:e.text},null,8,["value"])):I("",!0)])]),_:1},8,["value"]),d("div",Te,[l(h(xe),null,{default:_(()=>[(c(!0),u(w,null,x(e.items,i=>(c(),y(h(ge),{name:i.title},{default:_(()=>[d("div",Ae,[d("img",{src:i.img.src,alt:i.img.alt},null,8,De)])]),_:2},1032,["name"]))),256))]),_:1})])])}}},Ie={class:"accordion-container"},Le={__name:"FeatureAccordion",props:{heading:String,items:Array},setup(e){return(t,n)=>{const s=A,o=le;return c(),u("section",null,[l(s,{heading:e.heading},null,8,["heading"]),d("div",Ie,[(c(!0),u(w,null,x(e.items,a=>(c(),y(o,{item:a},null,8,["item"]))),256))])])}}},ke=b(Le,[["__scopeId","data-v-aa819532"]]),Oe={class:"hero"},Ee={__name:"Hero",props:{text:String},setup(e){return(t,n)=>(c(),u("section",Oe,[d("p",null,$(e.text),1)]))}},He=b(Ee,[["__scopeId","data-v-5b5adb94"]]),Ne={class:"news-archive-container"},Be={class:"more-link"},Re={__name:"NewsArchivePreview",async setup(e){let t,n;const{data:s}=([t,n]=p(()=>v("news",()=>g("news").sort({date:1}).limit(2).find())),t=await t,n(),t);return(o,a)=>{const i=A,r=ee,m=j;return c(),u("section",null,[l(i,{heading:"News"}),d("div",Ne,[(c(!0),u(w,null,x(h(s),C=>(c(),y(r,{article:C},null,8,["article"]))),256)),d("div",Be,[l(m,{to:"/news"},{default:_(()=>[R(" More ")]),_:1})])])])}}},je=b(Re,[["__scopeId","data-v-24286cc1"]]),Ve={__name:"SectionNav",props:{sections:Array},setup(e){return(t,n)=>{const s=j;return c(),u("div",null,[d("ul",null,[(c(!0),u(w,null,x(e.sections,(o,a)=>(c(),u("li",{key:a},[l(s,{to:`#${o.toLowerCase()}`},{default:_(()=>[R($(o),1)]),_:2},1032,["to"])]))),128))])])}}},qe=b(Ve,[["__scopeId","data-v-44d20c25"]]);const Me={key:0},Pe={__name:"index",async setup(e){let t,n;const{data:s}=([t,n]=p(()=>v("home",()=>g("home").where({section:"hero"}).findOne())),t=await t,n(),t),{data:o}=([t,n]=p(()=>v("general",()=>g("home").where({section:"general"}).findOne())),t=await t,n(),t),{data:a}=([t,n]=p(()=>v("features",()=>g("home","features").where({section:"features"}).find())),t=await t,n(),t),{data:i}=([t,n]=p(()=>v("editor_text",()=>g("home","editor").where({title:"Editor"}).findOne())),t=await t,n(),t),{data:r}=([t,n]=p(()=>v("editor_tabs",()=>g("home","editor","tabs").where({section:"editor"}).find())),t=await t,n(),t),{data:m}=([t,n]=p(()=>v("support",()=>g("general","support").where({section:"support"}).find())),t=await t,n(),t),C=["General","Features","Editor","News","Support"];return(Fe,Ue)=>{const q=He,M=qe,P=_e,F=ke,U=$e,W=je,K=te;return c(),u("main",null,[h(s).text?(c(),u("div",Me,[l(q,{text:h(s).text},null,8,["text"]),l(M,{sections:C}),l(P,{heading:h(o).heading,content:h(o),img:h(o).img,color:h(o).color},null,8,["heading","content","img","color"]),l(F,{heading:"Features",items:h(a)},null,8,["items"]),l(U,{text:h(i),items:h(r)},null,8,["text","items"]),l(W),l(K,{heading:"Support",tiles:h(m)},null,8,["tiles"])])):I("",!0)])}}},st=b(Pe,[["__scopeId","data-v-184dd507"]]);export{st as default};