import{r as l}from"./index-570b25c1.js";import{b as B,g as P,s as M,c as T,a as z}from"./styled-52ae1682.js";import{e as x,c as D}from"./useThemeProps-09701b40.js";import{i as V,a as U,F as G,u as J,f as K}from"./utils-3d35716f.js";import{j as w,a as j}from"./jsx-runtime-390e5fc8.js";function L(r,o){return l.isValidElement(r)&&o.indexOf(r.type.muiName)!==-1}function Q(r){return B("MuiFormControl",r)}P("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const X=r=>{const{classes:o,margin:a,fullWidth:t}=r,e={root:["root",a!=="none"&&`margin${x(a)}`,t&&"fullWidth"]};return z(e,Q,o)},Y=M("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:r},o)=>({...o.root,...o[`margin${x(r.margin)}`],...r.fullWidth&&o.fullWidth})})(({ownerState:r})=>({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",...r.margin==="normal"&&{marginTop:16,marginBottom:8},...r.margin==="dense"&&{marginTop:8,marginBottom:4},...r.fullWidth&&{width:"100%"}})),Z=l.forwardRef(function(o,a){const t=D({props:o,name:"MuiFormControl"}),{children:e,className:u,color:f="primary",component:d="div",disabled:i=!1,error:F=!1,focused:y,fullWidth:b=!1,hiddenLabel:C=!1,margin:S="none",required:m=!1,size:s="medium",variant:c="outlined",...g}=t,$={...t,color:f,component:d,disabled:i,error:F,fullWidth:b,hiddenLabel:C,margin:S,required:m,size:s,variant:c},I=X($),[q,H]=l.useState(()=>{let p=!1;return e&&l.Children.forEach(e,n=>{if(!L(n,["Input","Select"]))return;const A=L(n,["Select"])?n.props.input:n;A&&V(A.props)&&(p=!0)}),p}),[R,N]=l.useState(()=>{let p=!1;return e&&l.Children.forEach(e,n=>{L(n,["Input","Select"])&&(U(n.props,!0)||U(n.props.inputProps,!0))&&(p=!0)}),p}),[W,h]=l.useState(!1);i&&W&&h(!1);const k=y!==void 0&&!i?y:W;let E;const O=l.useMemo(()=>({adornedStart:q,setAdornedStart:H,color:f,disabled:i,error:F,filled:R,focused:k,fullWidth:b,hiddenLabel:C,size:s,onBlur:()=>{h(!1)},onEmpty:()=>{N(!1)},onFilled:()=>{N(!0)},onFocus:()=>{h(!0)},registerEffect:E,required:m,variant:c}),[q,f,i,F,R,k,b,C,E,m,s,c]);return w(G.Provider,{value:O,children:w(Y,{as:d,ownerState:$,className:T(I.root,u),ref:a,...g,children:e})})}),cr=Z;function _(r){return B("MuiFormLabel",r)}const rr=P("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),v=rr,or=r=>{const{classes:o,color:a,focused:t,disabled:e,error:u,filled:f,required:d}=r,i={root:["root",`color${x(a)}`,e&&"disabled",u&&"error",f&&"filled",t&&"focused",d&&"required"],asterisk:["asterisk",u&&"error"]};return z(i,_,o)},er=M("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},o)=>({...o.root,...r.color==="secondary"&&o.colorSecondary,...r.filled&&o.filled})})(({theme:r,ownerState:o})=>({color:(r.vars||r).palette.text.secondary,...r.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",[`&.${v.focused}`]:{color:(r.vars||r).palette[o.color].main},[`&.${v.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${v.error}`]:{color:(r.vars||r).palette.error.main}})),sr=M("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,o)=>o.asterisk})(({theme:r})=>({[`&.${v.error}`]:{color:(r.vars||r).palette.error.main}})),tr=l.forwardRef(function(o,a){const t=D({props:o,name:"MuiFormLabel"}),{children:e,className:u,color:f,component:d="label",disabled:i,error:F,filled:y,focused:b,required:C,...S}=t,m=J(),s=K({props:t,muiFormControl:m,states:["color","required","focused","disabled","error","filled"]}),c={...t,color:s.color||"primary",component:d,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required},g=or(c);return j(er,{as:d,ownerState:c,className:T(g.root,u),ref:a,...S,children:[e,s.required&&j(sr,{ownerState:c,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]})}),ur=tr;export{cr as F,ur as M,v as f,L as i};
//# sourceMappingURL=FormLabel-49db2e23.js.map