import{_ as S,a as k}from"./AppCard.86dd923b.js";import{a as f,o as n,b as u,e as t,f as c,p as T,h as H,r as x,i as P,c as m,w as l,t as _,j as h,k as b,l as I,m as j,q as L,s as $,v,u as A,F as w,x as C}from"./entry.4eb38e25.js";import"./composables.9bd82ea5.js";const F={},E=e=>(T("data-v-cd8d4554"),e=e(),H(),e),M={class:"app-hero-text relative flex flex-col md:flex-row h-full py-10 items-center px-4"},W={class:"devin relative mb-4 flex-shrink-0"},J=E(()=>t("div",{class:"flex flex-col items-center md:items-start"},[t("h2",{class:"border-4 border-tory-blue-200 bg-tory-blue-400/70 backdrop-blur inline-block p-4 rounded-md shadow-md font-display text-center md:text-left text-white text-3xl sm:text-4xl md:text-5xl"}," The Web Dev(in) "),t("blockquote",{class:"max-w-[660px] bg-golden-bell-500/60 py-4 px-4 rounded-md border-4 border-golden-bell-400 font-body mt-4 text-white text-md shadow-md"},[t("p",null," I'm a software developer with 5+ years of experience specializing in frontend technology and delivering seamless user-experiences. I have a strong background in JavaScript, CSS, and Leadership roles. From creating prototypes from scratch to building large-scale web apps with a team, I have a lot of passion for my work. ")])],-1));function N(e,s){const o=S;return n(),u("div",M,[t("div",W,[c(o,{src:"/img/devin.png",format:"webp",class:"devin__img z-10 relative md:mr-10 h-auto block flex-grow-1 flex-shrink-0 self-center border-4 border-tory-blue-200 shadow-md"})]),J])}const V=f(F,[["render",N],["__scopeId","data-v-cd8d4554"]]);const B={},O={id:"about",class:"app-hero bg-gray-900"},R={class:"app-hero__container container mx-auto h-full flex items-center justify-center shadow-md"};function U(e,s){const o=V;return n(),u("section",O,[t("div",R,[c(o)])])}const q=f(B,[["render",U],["__scopeId","data-v-0cf4051f"]]);const z={class:"text-xl font-semibold mb-2 dark:text-white transition-colors duration-500"},G={class:"mb-2 font-semibold dark:text-gray-200 transition-colors duration-500"},K={class:"text-gray-400"},Q={class:"slot-text dark:text-white transition-colors duration-500"},X={__name:"AppExperience",props:{title:{type:String,default:""},company:{type:String,default:""},startDate:{type:String,default:""},collapsible:{type:Boolean,default:!1},endDate:{type:String,default:"Present"},isOpen:{type:Boolean,default:!0}},emits:["toggle"],setup(e){const s=e,o=x(null);function p(){context.emit("toggle");const a=o.value.scrollHeight;d.value.height=s.isOpen?"0px":`${a}px`}const d=x(s.collapsible?{height:"0px"}:null);return(a,r)=>{const i=P("FontAwesomeIcon"),g=k;return n(),m(g,{padding:"py-4 px-4 border border-gray-300 dark:border-gray-700"},{default:l(()=>[t("h3",z,_(e.title),1),t("p",G,[h(_(e.company)+" ",1),t("span",K,"("+_(e.startDate)+" - "+_(e.endDate)+")",1)]),t("div",{ref_key:"slot",ref:o,class:"slot-container"},[t("div",Q,[b(a.$slots,"default",{class:"slot"},void 0,!0)])],512),e.collapsible?(n(),u("div",{key:0,class:"text-center mt-2 py-2 shadow-inner cursor-pointer bg-gray-100 z-0 relative",onClick:p},[h(_(a.iconText)+" ",1),c(i,{class:I(["icon",a.iconClass]),icon:["fas","chevron-down"]},null,8,["class"])])):j("",!0)]),_:3})}}},Y=f(X,[["__scopeId","data-v-4212eff2"]]),Z={class:"container mx-auto mt-4 md:mt-10 px-4 xl:px-0"},ee={class:"font-display text-3xl mb-4 dark:text-white transition-colors duration-500"},y={__name:"AppSection",props:{hideDivider:{type:Boolean,default:!1},dividerMargin:{type:String,default:void 0}},setup(e){return(s,o)=>{const p=L;return n(),u("section",Z,[t("h3",ee,[b(s.$slots,"title")]),b(s.$slots,"default"),e.hideDivider?j("",!0):(n(),m(p,{key:0,margin:e.dividerMargin},null,8,["margin"]))])}}},te={class:"grid grid-cols-1 gap-4"},ne=["innerHTML"],se={__name:"HomeExperience",setup(e){const s=$([{title:"Lead Front End Developer",company:"Canada Drives",startDate:"December 2017",open:!1,body:`
    <p class="mb-2">
      Currently leading the front-end team working on our consumer lending brand <a href="//springfinancial.ca" target="_blank" class="text-tory-blue-500 dark:text-tory-blue-100">springfinancial.ca.</a> Responsible for scoping new features and providing hands-on support to the team. Improvements to our app flow increased the number of users who submit all required documents from 20% to 70%.
    </p>

    <p>
      Our car shopping platform  <a href="//shop.canadadrives.ca" target="_blank" class="text-tory-blue-500 dark:text-tory-blue-100">shop.canadadrives.ca</a> was built from the ground-up using Vue.js, Nuxt.js,  Shopify storefront API, and our custom backend. I helped architect and develop the application structure while providing mentorship to co-workers. In recent months we have seen exponential growth in customer acquisition as we continue to improve and expand to more provinces.
    </p>`},{title:"Jr. Software Developer",company:"Canada Drives",startDate:"August 2016",endDate:"November 2017",open:!1,body:`
    <p class="mb-2">
      Helped build and maintain new and existing websites using PHP, HTML, JavaScript, and SCSS.
      Worked from mock-ups provided by the design team to develop a/b test variations for our websites.
      These tests ranged from small text changes to full-scale redesigns.
    </p>

    <p>
      Led front end development on a rewrite of an internal application. The previous app was built with
      Laravel and jQuery, while the rewrite was built with Vue.js, ES6, SCSS, and Webpack. The code and
      project structure was easier to maintain than the previous iteration. The new version reduced the
      time needed to add new features, while improving development time, user experience, and client-side
      performance.
    </p>`},{title:"Jr. Front End Developer",company:"Phoenix Restorations",startDate:"September 2015",endDate:"July 2016",open:!1,body:`
    <p class="mb-2">
      Assisted with building an enterprise-level single-page application. Worked directly with the Team Lead
      / Software Architect to design and implement a wide variety of features. These features included
      multi-language support, invoices, inventory management, and other business-related features.
    </p>

    <p>
      Responsible for implementing API routes to communicate with a database using Symfony, a PHP framework.
      Designed views and web components with HTML, PHP, and SASS. Used AngularJS to create controllers,
      services, factories, and custom directives to implement front end functionality.
    </p>`},{title:"Jr. Web Developer",company:"Website-On-Demand",startDate:"October 2014",endDate:"September 2015",open:!1,body:`
    <p class="mb-2">
      Responsible for developing and building websites with a wide variety of clients, including the Canadian
      Lymphedema Framework, Public Interest (Toronto), and many others. Tasks ranged from complete site builds,
      to small updates and style tweaks. Primarily used HTML, CSS, JavaScript, PHP, and WordPress.
    </p>

    <p>
      Consulted with clients to communicate website updates and specifications. Followed a tight schedule to
      ensure updates are delivered on time and clients were happy with our work. Clients often commented on
      our attention to detail and quick response times.
    </p>`}]);return(o,p)=>{const d=Y,a=y;return n(),m(a,{id:"experience"},{title:l(()=>[h(" Experience ")]),default:l(()=>[t("div",te,[(n(!0),u(w,null,v(A(s),(r,i)=>(n(),m(d,{key:i,title:r.title,company:r.company,"start-date":r.startDate,"end-date":r.endDate,"is-open":r.open,onToggle:g=>r.open=!r.open},{default:l(()=>[t("div",{innerHTML:r.body},null,8,ne)]),_:2},1032,["title","company","start-date","end-date","is-open","onToggle"]))),128))])]),_:1})}}};const oe={class:"app-img-card__text bg-black bg-opacity-60 absolute right-0 bottom-0 text-white w-full px-4 py-3"},ie={class:"text-xl font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden"},ae={class:"whitespace-nowrap overflow-ellipsis overflow-hidden"},re={__name:"AppImageCard",props:{title:{type:String,default:""},subtitle:{type:String,default:""},img:{type:[String],default:""}},setup(e){return(s,o)=>{const p=S,d=k;return n(),m(d,{class:"app-img-card h-52 relative bg-white max-h-[208px] flex border border-gray-300 dark:border-gray-700 items-center justify-center shadow transition-shadow hover:shadow-md",padding:"p-0"},{default:l(()=>[c(p,{src:e.img,class:"app-img-card__img w-full relative min-w-[350px]",format:"webp",width:"480",height:"480",loading:"lazy"},null,8,["src"]),t("div",oe,[t("h3",ie,_(e.title),1),t("h4",ae,_(e.subtitle),1)])]),_:1})}}},D=f(re,[["__scopeId","data-v-daaf1359"]]),le={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},de=["innerHTML"],ce={__name:"HomeWebsites",setup(e){const s=$([{title:"Canada Drives (Ecommerce Shop)",subtitle:"Purchase or finance a vehicle from any device",img:"/img/websites/canada-drives/cd-shop.jpg",path:"/websites/canada-drives-shop"},{title:"Canada Drives",subtitle:"Canadian Car Loans",img:"/img/websites/canada-drives/cd-website.jpg",path:"/websites/canada-drives"},{title:"Spring Financial",subtitle:"Personal Loans & Mortgages",img:"/img/websites/canada-drives/spring.jpg",path:"/websites/spring-financial"},{title:"USA Drives",subtitle:"USA Car Loans",img:"/img/websites/canada-drives/usa-drives.jpg",path:"/websites/usa-drives"},{title:"Fresh Start",subtitle:"Online Personal Loans",img:"/img/websites/canada-drives/fsf.jpg",path:"/websites/freshstart-finance"},{title:"Freedom Car Credit",subtitle:"UK Car Loans",img:"/img/websites/canada-drives/freedom.jpg",path:"/websites/freedom-car-credit"},{title:"Canadian Lymphedema Framework",subtitle:"Lymphedema Education",img:"/img/websites/clf/clf.jpg",path:"/websites/clf"},{title:"Fitlight",subtitle:"Agility Training Products",img:"/img/websites/fitlight/fitlight.jpg",path:"/websites/fitlight"},{title:"Gold Standard Physio",subtitle:"Physiotherapy",img:"/img/websites/gold-standard/gold-standard.jpg",path:"/websites/gold-standard-physio"}]);return(o,p)=>{const d=D,a=C,r=y;return n(),m(r,{id:"websites"},{title:l(()=>[h(" Websites ")]),default:l(()=>[t("div",le,[(n(!0),u(w,null,v(A(s),(i,g)=>(n(),m(a,{key:g,to:i.path},{default:l(()=>[c(d,{title:i.title,subtitle:i.subtitle,img:i.img,"img-top":i.imgTop},{default:l(()=>[t("div",{innerHTML:o.experience.body},null,8,de)]),_:2},1032,["title","subtitle","img","img-top"])]),_:2},1032,["to"]))),128))])]),_:1})}}},pe={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},me=["innerHTML"],ue={__name:"HomeProjects",setup(e){const s=[{title:"Scrollbinder",subtitle:"AngularJS Project",img:"/img/projects/scrollbinder.jpg",path:"/projects/scrollbinder"},{title:"The Sandwich",subtitle:"3D Animated Short",img:"/img/projects/sandwich.jpg",path:"/projects/the-sandwich"},{title:"Dice Roller",subtitle:"ThreeJS Mobile Web App",img:"/img/projects/dice-roller.jpg",path:"/projects/dice-roller"},{title:"UFOria",subtitle:"Immersive Unity Game",img:"/img/projects/uforia.jpg",path:"/projects/uforia"},{title:"Harvey The Hamster",subtitle:"Green Screen Video Project",img:"/img/projects/harvey.jpg",path:"/projects/harvey"},{title:"Kinect Remote",subtitle:"Gesture Video Control App",img:"/img/projects/kinect.jpg",path:"/projects/kinect-remote"}];return(o,p)=>{const d=D,a=C,r=y;return n(),m(r,{id:"projects","hide-divider":""},{title:l(()=>[h(" Projects ")]),default:l(()=>[t("div",pe,[(n(),u(w,null,v(s,(i,g)=>c(a,{key:g,to:i.path},{default:l(()=>[c(d,{title:i.title,subtitle:i.subtitle,img:i.img},{default:l(()=>[t("div",{innerHTML:o.experience.body},null,8,me)]),_:2},1032,["title","subtitle","img"])]),_:2},1032,["to"])),64))])]),_:1})}}},_e={},ge={class:"home"};function he(e,s){const o=q,p=se,d=ce,a=ue;return n(),u("div",ge,[c(o),c(p),c(d),c(a,{"no-divider":""})])}const we=f(_e,[["render",he]]);export{we as default};
