import{r as p}from"./index-8db94870.js";import{a as Z,g as _,s as R,c as tt,b as et}from"./styled-bba98ac3.js";import{e as nt,f as it}from"./useThemeProps-b0aa0aaa.js";import{T as ot,g as P}from"./utils-32789d4c.js";import{u as rt}from"./useTheme-5a2b1f44.js";import{j as y}from"./jsx-runtime-91a467a5.js";import{u as st}from"./useForkRef-2674f3de.js";function at(n){return Z("MuiCollapse",n)}_("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const lt=n=>{const{orientation:e,classes:o}=n,m={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return et(m,at,o)},pt=R("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:o}=n;return[e.root,e[o.orientation],o.state==="entered"&&e.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>({height:0,overflow:"hidden",transition:n.transitions.create("height"),...e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},...e.state==="entered"&&{height:"auto",overflow:"visible",...e.orientation==="horizontal"&&{width:"auto"}},...e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"}})),dt=R("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>({display:"flex",width:"100%",...n.orientation==="horizontal"&&{width:"auto",height:"100%"}})),ct=R("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>({width:"100%",...n.orientation==="horizontal"&&{width:"auto",height:"100%"}})),U=p.forwardRef(function(e,o){const m=nt({props:e,name:"MuiCollapse"}),{addEndListener:T,children:b,className:j,collapsedSize:f="0px",component:k,easing:$,in:S,onEnter:D,onEntered:W,onEntering:I,onExit:M,onExited:q,onExiting:F,orientation:H="vertical",style:C,timeout:s=it.standard,TransitionComponent:B=ot,...G}=m,g={...m,orientation:H,collapsedSize:f},d=lt(g),A=rt(),L=p.useRef(),a=p.useRef(null),z=p.useRef(),w=typeof f=="number"?`${f}px`:f,c=H==="horizontal",u=c?"width":"height";p.useEffect(()=>()=>{clearTimeout(L.current)},[]);const x=p.useRef(null),J=st(o,x),l=t=>i=>{if(t){const r=x.current;i===void 0?t(r):t(r,i)}},v=()=>a.current?a.current[c?"clientWidth":"clientHeight"]:0,K=l((t,i)=>{a.current&&c&&(a.current.style.position="absolute"),t.style[u]=w,D&&D(t,i)}),O=l((t,i)=>{const r=v();a.current&&c&&(a.current.style.position="");const{duration:h,easing:E}=P({style:C,timeout:s,easing:$},{mode:"enter"});if(s==="auto"){const N=A.transitions.getAutoHeightDuration(r);t.style.transitionDuration=`${N}ms`,z.current=N}else t.style.transitionDuration=typeof h=="string"?h:`${h}ms`;t.style[u]=`${r}px`,t.style.transitionTimingFunction=E,I&&I(t,i)}),Q=l((t,i)=>{t.style[u]="auto",W&&W(t,i)}),V=l(t=>{t.style[u]=`${v()}px`,M&&M(t)}),X=l(q),Y=l(t=>{const i=v(),{duration:r,easing:h}=P({style:C,timeout:s,easing:$},{mode:"exit"});if(s==="auto"){const E=A.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${E}ms`,z.current=E}else t.style.transitionDuration=typeof r=="string"?r:`${r}ms`;t.style[u]=w,t.style.transitionTimingFunction=h,F&&F(t)});return y(B,{in:S,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:t=>{s==="auto"&&(L.current=setTimeout(t,z.current||0)),T&&T(x.current,t)},nodeRef:x,timeout:s==="auto"?null:s,...G,children:(t,i)=>y(pt,{as:k,className:tt(d.root,j,{entered:d.entered,exited:!S&&w==="0px"&&d.hidden}[t]),style:{[c?"minWidth":"minHeight"]:w,...C},ownerState:{...g,state:t},ref:J,...i,children:y(dt,{ownerState:{...g,state:t},className:d.wrapper,ref:a,children:y(ct,{ownerState:{...g,state:t},className:d.wrapperInner,children:b})})})})});U.muiSupportAuto=!0;const yt=U;export{yt as C};
//# sourceMappingURL=Collapse-3c56dfef.js.map
