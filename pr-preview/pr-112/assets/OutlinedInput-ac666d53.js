import{f as ie,_ as n,b as le,B as Ue}from"./createTheme-bcd1d157.js";import{r}from"./index-570b25c1.js";import{g as ve,s as N,c as we,r as De}from"./styled-ba967c06.js";import{a as V,j as w}from"./jsx-runtime-390e5fc8.js";import{u as Se,f as Re,a as Ke,F as qe}from"./utils-3d35716f.js";import{g as Oe}from"./generateUtilityClasses-cabd787c.js";import{c as be}from"./clsx-7dc4e18d.js";import{u as Ie}from"./useThemeProps-32d9d40f.js";import{_ as Ge,a as ne,i as ge}from"./objectWithoutPropertiesLoose-830c72af.js";import{r as Ve}from"./index-8a077077.js";import{u as ze}from"./useForkRef-153a0a89.js";import{o as ye,d as je}from"./ownerWindow-698471fc.js";import{u as re}from"./useEnhancedEffect-460150e6.js";import{G as Ze}from"./GlobalStyles-adf0b00b.js";const Je=["onChange","maxRows","minRows","style","value"];function G(e){return parseInt(e,10)||0}const Qe={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Ce(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Xe=r.forwardRef(function(t,o){const{onChange:a,maxRows:s,minRows:d=1,style:g,value:S}=t,x=Ge(t,Je),{current:R}=r.useRef(S!=null),y=r.useRef(null),W=ze(o,y),m=r.useRef(null),b=r.useRef(0),[O,z]=r.useState({outerHeightStyle:0}),k=r.useCallback(()=>{const i=y.current,c=ye(i).getComputedStyle(i);if(c.width==="0px")return{outerHeightStyle:0};const p=m.current;p.style.width=c.width,p.value=i.value||t.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");const h=c.boxSizing,L=G(c.paddingBottom)+G(c.paddingTop),B=G(c.borderBottomWidth)+G(c.borderTopWidth),A=p.scrollHeight;p.value="x";const M=p.scrollHeight;let I=A;d&&(I=Math.max(Number(d)*M,I)),s&&(I=Math.min(Number(s)*M,I)),I=Math.max(I,M);const Z=I+(h==="border-box"?L+B:0),T=Math.abs(I-A)<=1;return{outerHeightStyle:Z,overflow:T}},[s,d,t.placeholder]),H=(i,v)=>{const{outerHeightStyle:c,overflow:p}=v;return b.current<20&&(c>0&&Math.abs((i.outerHeightStyle||0)-c)>1||i.overflow!==p)?(b.current+=1,{overflow:p,outerHeightStyle:c}):i},f=r.useCallback(()=>{const i=k();Ce(i)||z(v=>H(v,i))},[k]);re(()=>{const i=()=>{const A=k();Ce(A)||Ve.flushSync(()=>{z(M=>H(M,A))})},v=()=>{b.current=0,i()};let c;const p=je(v),h=y.current,L=ye(h);L.addEventListener("resize",p);let B;return typeof ResizeObserver<"u"&&(B=new ResizeObserver(v),B.observe(h)),()=>{p.clear(),cancelAnimationFrame(c),L.removeEventListener("resize",p),B&&B.disconnect()}},[k]),re(()=>{f()}),r.useEffect(()=>{b.current=0},[S]);const E=i=>{b.current=0,R||f(),a&&a(i)};return V(r.Fragment,{children:[w("textarea",ne({value:S,onChange:E,ref:W,rows:d,style:ne({height:O.outerHeightStyle,overflow:O.overflow?"hidden":void 0},g)},x)),w("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:m,tabIndex:-1,style:ne({},Qe.shadow,g,{paddingTop:0,paddingBottom:0})})]})});function Ye(e){return ve("MuiInputBase",e)}const et=Oe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),j=et,tt=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],ke=(e,t)=>{const{ownerState:o}=e;return[t.root,o.formControl&&t.formControl,o.startAdornment&&t.adornedStart,o.endAdornment&&t.adornedEnd,o.error&&t.error,o.size==="small"&&t.sizeSmall,o.multiline&&t.multiline,o.color&&t[`color${ie(o.color)}`],o.fullWidth&&t.fullWidth,o.hiddenLabel&&t.hiddenLabel]},Be=(e,t)=>{const{ownerState:o}=e;return[t.input,o.size==="small"&&t.inputSizeSmall,o.multiline&&t.inputMultiline,o.type==="search"&&t.inputTypeSearch,o.startAdornment&&t.inputAdornedStart,o.endAdornment&&t.inputAdornedEnd,o.hiddenLabel&&t.inputHiddenLabel]},ot=e=>{const{classes:t,color:o,disabled:a,error:s,endAdornment:d,focused:g,formControl:S,fullWidth:x,hiddenLabel:R,multiline:y,readOnly:W,size:m,startAdornment:b,type:O}=e,z={root:["root",`color${ie(o)}`,a&&"disabled",s&&"error",x&&"fullWidth",g&&"focused",S&&"formControl",m&&m!=="medium"&&`size${ie(m)}`,y&&"multiline",b&&"adornedStart",d&&"adornedEnd",R&&"hiddenLabel",W&&"readOnly"],input:["input",a&&"disabled",O==="search"&&"inputTypeSearch",y&&"inputMultiline",m==="small"&&"inputSizeSmall",R&&"inputHiddenLabel",b&&"inputAdornedStart",d&&"inputAdornedEnd",W&&"readOnly"]};return we(z,Ye,t)},Fe=N("div",{name:"MuiInputBase",slot:"Root",overridesResolver:ke})(({theme:e,ownerState:t})=>n({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${j.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&n({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),We=N("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Be})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light",a=n({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),s={opacity:"0 !important"},d=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return n({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${j.formControl} &`]:{"&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d},[`&.${j.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),nt=w(Ze,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),it=r.forwardRef(function(t,o){var a;const s=Ie({props:t,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:g,autoFocus:S,className:x,components:R={},componentsProps:y={},defaultValue:W,disabled:m,disableInjectingGlobalStyles:b,endAdornment:O,fullWidth:z=!1,id:k,inputComponent:H="input",inputProps:f={},inputRef:E,maxRows:i,minRows:v,multiline:c=!1,name:p,onBlur:h,onChange:L,onClick:B,onFocus:A,onKeyDown:M,onKeyUp:I,placeholder:Z,readOnly:T,renderSuffix:ae,rows:D,slotProps:se={},slots:de={},startAdornment:_,type:ue="text",value:$e}=s,Le=le(s,tt),K=f.value!=null?f.value:$e,{current:J}=r.useRef(K!=null),P=r.useRef(),Me=r.useCallback(l=>{},[]),Ne=ze(P,E,f.ref,Me),[Q,X]=r.useState(!1),u=Se(),C=Re({props:s,muiFormControl:u,states:["color","disabled","error","hiddenLabel","size","required","filled"]});C.focused=u?u.focused:Q,r.useEffect(()=>{!u&&m&&Q&&(X(!1),h&&h())},[u,m,Q,h]);const Y=u&&u.onFilled,ee=u&&u.onEmpty,U=r.useCallback(l=>{Ke(l)?Y&&Y():ee&&ee()},[Y,ee]);re(()=>{J&&U({value:K})},[K,U,J]);const He=l=>{if(C.disabled){l.stopPropagation();return}A&&A(l),f.onFocus&&f.onFocus(l),u&&u.onFocus?u.onFocus(l):X(!0)},Ee=l=>{h&&h(l),f.onBlur&&f.onBlur(l),u&&u.onBlur?u.onBlur(l):X(!1)},Pe=(l,...me)=>{if(!J){const he=l.target||P.current;if(he==null)throw new Error(Ue(1));U({value:he.value})}f.onChange&&f.onChange(l,...me),L&&L(l,...me)};r.useEffect(()=>{U(P.current)},[]);const Te=l=>{P.current&&l.currentTarget===l.target&&P.current.focus(),B&&B(l)};let te=H,F=f;c&&te==="input"&&(D?F=n({type:void 0,minRows:D,maxRows:D},F):F=n({type:void 0,maxRows:i,minRows:v},F),te=Xe);const _e=l=>{U(l.animationName==="mui-auto-fill-cancel"?P.current:{value:"x"})};r.useEffect(()=>{u&&u.setAdornedStart(!!_)},[u,_]);const q=n({},s,{color:C.color||"primary",disabled:C.disabled,endAdornment:O,error:C.error,focused:C.focused,formControl:u,fullWidth:z,hiddenLabel:C.hiddenLabel,multiline:c,size:C.size,startAdornment:_,type:ue}),ce=ot(q),pe=de.root||R.Root||Fe,oe=se.root||y.root||{},fe=de.input||R.Input||We;return F=n({},F,(a=se.input)!=null?a:y.input),V(r.Fragment,{children:[!b&&nt,V(pe,n({},oe,!ge(pe)&&{ownerState:n({},q,oe.ownerState)},{ref:o,onClick:Te},Le,{className:be(ce.root,oe.className,x,T&&"MuiInputBase-readOnly"),children:[_,w(qe.Provider,{value:null,children:w(fe,n({ownerState:q,"aria-invalid":C.error,"aria-describedby":d,autoComplete:g,autoFocus:S,defaultValue:W,disabled:C.disabled,id:k,onAnimationStart:_e,name:p,placeholder:Z,readOnly:T,required:C.required,rows:D,value:K,onKeyDown:M,onKeyUp:I,type:ue},F,!ge(fe)&&{as:te,ownerState:n({},q,F.ownerState)},{ref:Ne,className:be(ce.input,F.className,T&&"MuiInputBase-readOnly"),onBlur:Ee,onChange:Pe,onFocus:He}))}),O,ae?ae(n({},C,{startAdornment:_})):null]}))]})}),rt=it;function lt(e){return ve("MuiOutlinedInput",e)}const at=n({},j,Oe("MuiOutlinedInput",["root","notchedOutline","input"])),$=at;var xe;const st=["children","classes","className","label","notched"],dt=N("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),ut=N("legend")(({ownerState:e,theme:t})=>n({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&n({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function ct(e){const{className:t,label:o,notched:a}=e,s=le(e,st),d=o!=null&&o!=="",g=n({},e,{notched:a,withLabel:d});return w(dt,n({"aria-hidden":!0,className:t,ownerState:g},s,{children:w(ut,{ownerState:g,children:d?w("span",{children:o}):xe||(xe=w("span",{className:"notranslate",children:"​"}))})}))}const pt=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],ft=e=>{const{classes:t}=e,a=we({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},lt,t);return n({},t,a)},mt=N(Fe,{shouldForwardProp:e=>De(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:ke})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return n({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${$.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${$.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:o}},[`&.${$.focused} .${$.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${$.error} .${$.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${$.disabled} .${$.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&n({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),ht=N(ct,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),bt=N(We,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Be})(({theme:e,ownerState:t})=>n({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),Ae=r.forwardRef(function(t,o){var a,s,d,g,S;const x=Ie({props:t,name:"MuiOutlinedInput"}),{components:R={},fullWidth:y=!1,inputComponent:W="input",label:m,multiline:b=!1,notched:O,slots:z={},type:k="text"}=x,H=le(x,pt),f=ft(x),E=Se(),i=Re({props:x,muiFormControl:E,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),v=n({},x,{color:i.color||"primary",disabled:i.disabled,error:i.error,focused:i.focused,formControl:E,fullWidth:y,hiddenLabel:i.hiddenLabel,multiline:b,size:i.size,type:k}),c=(a=(s=z.root)!=null?s:R.Root)!=null?a:mt,p=(d=(g=z.input)!=null?g:R.Input)!=null?d:bt;return w(rt,n({slots:{root:c,input:p},renderSuffix:h=>w(ht,{ownerState:v,className:f.notchedOutline,label:m!=null&&m!==""&&i.required?S||(S=V(r.Fragment,{children:[m," ","*"]})):m,notched:typeof O<"u"?O:!!(h.startAdornment||h.filled||h.focused)}),fullWidth:y,inputComponent:W,multiline:b,ref:o,type:k},H,{classes:n({},f,{notchedOutline:null})}))});Ae.muiName="Input";const Wt=Ae;export{rt as I,Wt as O,Fe as a,We as b,Be as c,j as i,$ as o,ke as r};
//# sourceMappingURL=OutlinedInput-ac666d53.js.map
