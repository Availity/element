import{d as f,i as u}from"./useThemeProps-cd8be639.js";const a=n=>{var t,r;const s={systemProps:{},otherProps:{}},o=(t=n==null||(r=n.theme)==null?void 0:r.unstable_sxConfig)!=null?t:f;return Object.keys(n).forEach(e=>{o[e]?s.systemProps[e]=n[e]:s.otherProps[e]=n[e]}),s};function x(n){const{sx:t,...r}=n,{systemProps:s,otherProps:o}=a(r);let e;return Array.isArray(t)?e=[s,...t]:typeof t=="function"?e=(...l)=>{const i=t(...l);return u(i)?{...s,...i}:s}:e={...s,...t},{...o,sx:e}}export{x as e};
//# sourceMappingURL=extendSxProp-538a3ba9.js.map
