const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-DdnZXxc7.js","./_commonjsHelpers-BosuxZz1.js"])))=>i.map(i=>d[i]);
import{_ as O}from"./iframe-BFG-9Rqc.js";import{expect as p}from"./index-D5sgrwUF.js";const{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,{global:x}=__STORYBOOK_MODULE_GLOBAL__;var m="storybook/a11y",L=`${m}/result`,N=`${m}/error`,S=`${m}/manual`,c={RESULT:L,ERROR:N,MANUAL:S},T="a11y-test",{document:R}=x,d=w.getChannel(),v={config:{},options:{}},V=["region"],_=[],y=!1,g=async()=>{if(_.length===0){y=!1;return}y=!0;let e=_.shift();e&&await e(),g()},A=async(e=v)=>{let{default:s}=await O(async()=>{const{default:n}=await import("./axe-DdnZXxc7.js").then(o=>o.a);return{default:n}},__vite__mapDeps([0,1]),import.meta.url),{element:i="body",config:r={},options:a={}}=e,l=R.querySelector(i)??R.body;if(!l)return;s.reset();let t={...r,rules:[...V.map(n=>({id:n,enabled:!1})),...(r==null?void 0:r.rules)??[]]};return s.configure(t),new Promise((n,o)=>{let u=async()=>{try{let f=await s.run(l,a);n(f)}catch(f){o(f)}};_.push(u),y||g()})};d.on(c.MANUAL,async(e,s=v)=>{try{let i=await A(s),r=JSON.parse(JSON.stringify(i));d.emit(c.RESULT,r,e)}catch(i){d.emit(c.ERROR,i)}});function h(){try{return!1}catch{return!1}}function D(){try{return!1}catch{return!1}}var E=!1,U=async({reporting:e,parameters:s,globals:i,tags:r})=>{let a=s.a11y,l=i.a11y;if((a==null?void 0:a.manual)!==!0&&(a==null?void 0:a.disable)!==!0&&(l==null?void 0:l.manual)!==!0){if(D()&&!r.includes(T))return;try{let t=await A(a);if(t){let n=((t==null?void 0:t.violations.length)??0)>0;if(e.addReport({type:"a11y",version:1,result:t,status:n?"failed":"passed"}),h()&&n){if(!E){let{toHaveNoViolations:o}=await O(async()=>{const{toHaveNoViolations:u}=await import("./matchers-57EZJSQE-oeXCqs4p.js");return{toHaveNoViolations:u}},[],import.meta.url);p.extend({toHaveNoViolations:o}),E=!0}p(t).toHaveNoViolations()}}}catch(t){if(e.addReport({type:"a11y",version:1,result:{error:t},status:"failed"}),h())throw t}}},M={a11y:{manual:!1}};export{U as experimental_afterEach,M as initialGlobals};
