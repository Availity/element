import{i as c,d as l}from"./identifier-CenlGZaM.js";const a=t=>{var s;const e={systemProps:{},otherProps:{}},i=((s=t==null?void 0:t.theme)==null?void 0:s.unstable_sxConfig)??l;return Object.keys(t).forEach(n=>{i[n]?e.systemProps[n]=t[n]:e.otherProps[n]=t[n]}),e};function x(t){const{sx:e,...i}=t,{systemProps:s,otherProps:n}=a(i);let r;return Array.isArray(e)?r=[s,...e]:typeof e=="function"?r=(...f)=>{const o=e(...f);return c(o)?{...s,...o}:s}:r={...s,...e},{...n,sx:r}}export{x as e};
