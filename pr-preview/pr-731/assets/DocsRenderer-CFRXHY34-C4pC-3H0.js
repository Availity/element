const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-XODwqvNS.js","./index-BgYLq7fD.js","./_commonjsHelpers-D6-XlEtG.js","./index-ChsGqxH_.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./iframe-jQTxI-xq.js";import{r as s,e as n}from"./index-BgYLq7fD.js";import{H as p,A as h,o as E,p as d}from"./index-Dv5fkce4.js";import{c as v}from"./client-DQNj1uEJ.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-ChsGqxH_.js";import"./jsx-runtime-BTJTZTIL.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";var i=new Map;function R(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var w=async(e,t,r)=>{let o=await x(t,r);if(R()){o.render(e);return}let{promise:a,resolve:m}=Promise.withResolvers();return o.render(s.createElement(f,{callback:m},e)),a},_=(e,t)=>{let r=i.get(e);r&&(r.unmount(),i.delete(e))},x=async(e,t)=>{let r=i.get(e);return r||(r=v.createRoot(e,t),i.set(e,r)),r},g={code:E,a:h,...p},y=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},H=class{constructor(){this.render=async(e,t,r)=>{let o={...g,...t==null?void 0:t.components},a=d;return new Promise((m,l)=>{c(async()=>{const{MDXProvider:u}=await import("./index-XODwqvNS.js");return{MDXProvider:u}},__vite__mapDeps([0,1,2,3]),import.meta.url).then(({MDXProvider:u})=>w(n.createElement(y,{showException:l,key:Math.random()},n.createElement(u,{components:o},n.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{_(e)}}};export{H as DocsRenderer,g as defaultComponents};
