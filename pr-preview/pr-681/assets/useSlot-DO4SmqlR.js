import{r as y,m as T,a as g}from"./resolveComponentProps-BiTA-uKg.js";import{u as h}from"./useForkRef-BVrIj09m.js";function E(o,n){const{className:f,elementType:i,ownerState:s,externalForwardedProps:u,internalForwardedProps:p,shouldForwardComponentProp:l=!1,...P}=n,{component:a,slots:t={[o]:void 0},slotProps:m={[o]:void 0},...w}=u,d=t[o]||i,e=y(m[o],s),{props:{component:c,...S},internalRef:F}=T({className:f,...P,externalForwardedProps:o==="root"?w:void 0,externalSlotProps:e}),x=h(F,e==null?void 0:e.ref,n.ref),r=o==="root"?c||a:c,C=g(d,{...o==="root"&&!a&&!t[o]&&p,...o!=="root"&&!t[o]&&p,...S,...r&&!l&&{as:r},...r&&l&&{component:r},ref:x},s);return[d,C]}export{E as u};
