import{c as y}from"./styled-657e2aa7.js";import{u as P}from"./useForkRef-2674f3de.js";function g(e){return typeof e=="string"}function N(e,s,n){return e===void 0||g(e)?s:{...s,ownerState:{...s.ownerState,...n}}}function h(e,s=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!s.includes(t)).forEach(t=>{n[t]=e[t]}),n}function x(e,s){return typeof e=="function"?e(s):e}function S(e){if(e===void 0)return{};const s={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{s[n]=e[n]}),s}function E(e){const{getSlotProps:s,additionalProps:n,externalSlotProps:t,externalForwardedProps:l,className:i}=e;if(!s){const m=y(l==null?void 0:l.className,t==null?void 0:t.className,i,n==null?void 0:n.className),p={...n==null?void 0:n.style,...l==null?void 0:l.style,...t==null?void 0:t.style},f={...n,...l,...t};return m.length>0&&(f.className=m),Object.keys(p).length>0&&(f.style=p),{props:f,internalRef:void 0}}const r=h({...l,...t}),a=S(t),u=S(l),o=s(r),d=y(o==null?void 0:o.className,n==null?void 0:n.className,i,l==null?void 0:l.className,t==null?void 0:t.className),v={...o==null?void 0:o.style,...n==null?void 0:n.style,...l==null?void 0:l.style,...t==null?void 0:t.style},c={...o,...n,...u,...a};return d.length>0&&(c.className=d),Object.keys(v).length>0&&(c.style=v),{props:c,internalRef:o.ref}}function w(e){var s;const{elementType:n,externalSlotProps:t,ownerState:l,...i}=e,r=x(t,l),{props:a,internalRef:u}=E({...i,externalSlotProps:r}),o=P(u,r==null?void 0:r.ref,(s=e.additionalProps)==null?void 0:s.ref);return N(n,{...a,ref:o},l)}export{N as a,g as i,x as r,w as u};
//# sourceMappingURL=useSlotProps-3883ee92.js.map
