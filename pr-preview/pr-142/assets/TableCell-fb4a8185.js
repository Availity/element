import{f as s,_ as C,q as H,a as m,t as M,b as R}from"./createTheme-bcd1d157.js";import{r as n}from"./index-570b25c1.js";import{c as P}from"./clsx-7dc4e18d.js";import{u as A}from"./useThemeProps-018254e6.js";import{g as j,s as N,c as U}from"./styled-7846e708.js";import{g as _}from"./generateUtilityClasses-70c60a0e.js";import{a as D}from"./jsx-runtime-a3bcee63.js";const W=n.createContext(),L=W,q=n.createContext(),B=q;function E(e){return j("MuiTableCell",e)}const I=_("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),J=I,F=["align","className","component","padding","scope","size","sortDirection","variant"],G=e=>{const{classes:a,variant:t,align:o,padding:r,size:g,stickyHeader:d}=e,x={root:["root",t,d&&"stickyHeader",o!=="inherit"&&`align${s(o)}`,r!=="normal"&&`padding${s(r)}`,`size${s(g)}`]};return U(x,E,a)},K=N("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],a[`size${s(t.size)}`],t.padding!=="normal"&&a[`padding${s(t.padding)}`],t.align!=="inherit"&&a[`align${s(t.align)}`],t.stickyHeader&&a.stickyHeader]}})(({theme:e,ownerState:a})=>C({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?H(m(e.palette.divider,1),.88):M(m(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},a.variant==="body"&&{color:(e.vars||e).palette.text.primary},a.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${J.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),O=n.forwardRef(function(a,t){const o=A({props:a,name:"MuiTableCell"}),{align:r="inherit",className:g,component:d,padding:x,scope:T,size:z,sortDirection:f,variant:h}=o,k=R(o,F),i=n.useContext(L),p=n.useContext(B),b=p&&p.variant==="head";let l;d?l=d:l=b?"th":"td";let c=T;l==="td"?c=void 0:!c&&b&&(c="col");const u=h||p&&p.variant,y=C({},o,{align:r,component:l,padding:x||(i&&i.padding?i.padding:"normal"),size:z||(i&&i.size?i.size:"medium"),sortDirection:f,stickyHeader:u==="head"&&i&&i.stickyHeader,variant:u}),$=G(y);let v=null;return f&&(v=f==="asc"?"ascending":"descending"),D(K,C({as:l,ref:t,className:P($.root,g),"aria-sort":v,scope:c,ownerState:y},k))}),ee=O;export{ee as M,B as T,L as a};
//# sourceMappingURL=TableCell-fb4a8185.js.map
