import{r as n}from"./DefaultPropsProvider-CWkNlXkE.js";import{u as p}from"./useTheme-Ib01SJ3a.js";function m(t){const{theme:e,name:o,props:r}=t;return!e||!e.components||!e.components[o]||!e.components[o].defaultProps?r:n(e.components[o].defaultProps,r)}function a({props:t,name:e,defaultTheme:o,themeId:r}){let s=p(o);return r&&(s=s[r]||s),m({theme:s,name:e,props:t})}export{m as g,a as u};
