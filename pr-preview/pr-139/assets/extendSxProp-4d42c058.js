import{c as u,d as i,e as a,i as f}from"./createTheme-e6b56ddb.js";const x=["sx"],P=t=>{var s,o;const n={systemProps:{},otherProps:{}},r=(s=t==null||(o=t.theme)==null?void 0:o.unstable_sxConfig)!=null?s:a;return Object.keys(t).forEach(e=>{r[e]?n.systemProps[e]=t[e]:n.otherProps[e]=t[e]}),n};function m(t){const{sx:s}=t,o=u(t,x),{systemProps:n,otherProps:r}=P(o);let e;return Array.isArray(s)?e=[n,...s]:typeof s=="function"?e=(...c)=>{const l=s(...c);return f(l)?i({},n,l):n}:e=i({},n,s),i({},r,{sx:e})}export{m as e};
//# sourceMappingURL=extendSxProp-4d42c058.js.map
