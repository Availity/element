import{t as f,u as r,g as h,T as l}from"./createTheme-e6b56ddb.js";function i(n,s){const t=f({},s);return Object.keys(n).forEach(e=>{if(e.toString().match(/^(components|slots)$/))t[e]=f({},n[e],t[e]);else if(e.toString().match(/^(componentsProps|slotProps)$/)){const o=n[e]||{},c=s[e];t[e]={},!c||!Object.keys(c)?t[e]=o:!o||!Object.keys(o)?t[e]=c:(t[e]=f({},c),Object.keys(o).forEach(u=>{t[e][u]=i(o[u],c[u])}))}else t[e]===void 0&&(t[e]=n[e])}),t}function T(n){const{theme:s,name:t,props:e}=n;return!s||!s.components||!s.components[t]||!s.components[t].defaultProps?e:i(s.components[t].defaultProps,e)}function d({props:n,name:s,defaultTheme:t,themeId:e}){let o=r(t);return e&&(o=o[e]||o),T({theme:o,name:s,props:n})}const g=h(),m=g;function b({props:n,name:s}){return d({props:n,name:s,defaultTheme:m,themeId:l})}export{d as a,m as d,T as g,i as r,b as u};
//# sourceMappingURL=useThemeProps-285a8f6c.js.map