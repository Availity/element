import{j as e,a as d}from"./jsx-runtime-390e5fc8.js";import{a,F as Q}from"./FormControlLabel-daa655d3.js";import{S as X,C as s}from"./Checkbox-13e05a0b.js";import{F as v}from"./FormGroup-8de9d621.js";import{F as B,M as Y}from"./FormLabel-a07a3cea.js";import{B as oo}from"./Box-7f261278.js";import{_ as u,f as P,a as eo,b as W}from"./createTheme-e6b56ddb.js";import{r as c}from"./index-570b25c1.js";import{u as ro}from"./useControlled-9b1271e0.js";import{u as ao}from"./useId-6f4bfce0.js";import{u as to}from"./useForkRef-153a0a89.js";import{c as no}from"./clsx-8416b751.js";import{u as lo}from"./useThemeProps-db7202c2.js";import{c as Z}from"./createSvgIcon-e4b87ef5.js";import{s as y,g as io,r as co,c as so}from"./styled-188025da.js";import{g as uo}from"./generateUtilityClasses-f776b170.js";import{c as po}from"./createChainedFunction-0bab83cf.js";import"./FieldHelpIcon-21e3a324.js";import"./index-9681c8ff.js";import"./index-f35eb24e.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./index-6e1b5fd6.js";import"./Button-6191b67f.js";import"./ButtonBase-dcf5e891.js";import"./emotion-react.browser.esm-69a15469.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./TransitionGroupContext-c71596b3.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-d06cda25.js";import"./useTheme-3a36d7a0.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./_commonjsHelpers-042e6b4d.js";import"./useSlotProps-1710581f.js";import"./utils-744d0bbc.js";import"./IconButton-8b2f508e.js";import"./LoadingButton-3b91e9be.js";import"./extends-90dea224.js";import"./CircularProgress-a75919ff.js";import"./FormControlLabel-0fb4668c.js";import"./utils-3d35716f.js";import"./Typography-a571125c.js";import"./extendSxProp-4d42c058.js";import"./Stack-aed56d46.js";import"./styled-4350ac6b.js";import"./isMuiElement-6907f060.js";const mo=Z(e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),bo=Z(e("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),fo=y("span")({position:"relative",display:"flex"}),Co=y(mo)({transform:"scale(1)"}),ho=y(bo)(({theme:o,ownerState:r})=>u({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function A(o){const{checked:r=!1,classes:t={},fontSize:l}=o,i=u({},o,{checked:r});return d(fo,{className:t.root,ownerState:i,children:[e(Co,{fontSize:l,className:t.background,ownerState:i}),e(ho,{fontSize:l,className:t.dot,ownerState:i})]})}const go=c.createContext(void 0),J=go;function Fo(){return c.useContext(J)}function Ro(o){return io("MuiRadio",o)}const ko=uo("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),M=ko,xo=["checked","checkedIcon","color","icon","name","onChange","size","className"],vo=o=>{const{classes:r,color:t,size:l}=o,i={root:["root",`color${P(t)}`,l!=="medium"&&`size${P(l)}`]};return u({},r,so(i,Ro,r))},yo=y(X,{shouldForwardProp:o=>co(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,r[`color${P(t.color)}`]]}})(({theme:o,ownerState:r})=>u({color:(o.vars||o).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${r.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[r.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:eo(r.color==="default"?o.palette.action.active:o.palette[r.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${M.checked}`]:{color:(o.vars||o).palette[r.color].main}},{[`&.${M.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function So(o,r){return typeof r=="object"&&r!==null?o===r:String(o)===String(r)}const w=e(A,{checked:!0}),D=e(A,{}),Io=c.forwardRef(function(r,t){var l,i;const p=lo({props:r,name:"MuiRadio"}),{checked:S,checkedIcon:b=w,color:I="primary",icon:L=D,name:f,onChange:h,size:m="medium",className:G}=p,g=W(p,xo),F=u({},p,{color:I,size:m}),n=vo(F),C=Fo();let z=S;const K=po(h,C&&C.onChange);let _=f;return C&&(typeof z>"u"&&(z=So(C.value,p.value)),typeof _>"u"&&(_=C.name)),e(yo,u({type:"radio",icon:c.cloneElement(L,{fontSize:(l=D.props.fontSize)!=null?l:m}),checkedIcon:c.cloneElement(b,{fontSize:(i=w.props.fontSize)!=null?i:m}),ownerState:F,classes:n,name:_,checked:z,onChange:K,ref:t,className:no(n.root,G)},g))}),$=Io,Lo=["actions","children","defaultValue","name","onChange","value"],Go=c.forwardRef(function(r,t){const{actions:l,children:i,defaultValue:p,name:S,onChange:b,value:I}=r,L=W(r,Lo),f=c.useRef(null),[h,m]=ro({controlled:I,default:p,name:"RadioGroup"});c.useImperativeHandle(l,()=>({focus:()=>{let n=f.current.querySelector("input:not(:disabled):checked");n||(n=f.current.querySelector("input:not(:disabled)")),n&&n.focus()}}),[]);const G=to(t,f),g=ao(S),F=c.useMemo(()=>({name:g,onChange(n){m(n.target.value),b&&b(n,n.target.value)},value:h}),[g,b,m,h]);return e(J.Provider,{value:F,children:e(v,u({role:"radiogroup",ref:G},L,{children:i}))})}),zo=Go,Ie={title:"Components/FormUtils/FormControlLabel",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label."}}}},R={render:o=>e(a,{...o}),args:{label:"Label",required:!0,control:e(s,{})}},k={render:()=>d(v,{children:[e(a,{control:e(s,{}),label:"Default"}),e(a,{helpTopicId:"1234",control:e(s,{}),label:"With FieldHelpIcon"}),e(a,{disabled:!0,control:e(s,{}),label:"Disabled"}),e(B,{error:!0,children:e(v,{children:e(a,{control:e(s,{}),label:"Error (Only visible in FormControl group)"})})})]})},x={render:()=>d(oo,{display:"flex",flexDirection:"column",children:[d(B,{component:"fieldset","aria-labelledby":"checkbox-group",children:[e(Y,{component:"legend",id:"checkbox-group",children:"Checkbox Group"}),d(v,{row:!0,children:[e(a,{control:e(s,{}),label:"Check 1"}),e(a,{control:e(s,{}),label:"Check 2",helpTopicId:"2"}),e(a,{control:e(s,{}),label:"Check 3"})]})]}),d(B,{required:!0,error:!0,children:[e(Q,{id:"radio-group",helpTopicId:"12",children:"Radio Group"}),d(zo,{"aria-labelledby":"radio-group",name:"radio-group",defaultValue:"3",children:[e(a,{control:e($,{}),value:"1",label:"Radio 1"}),e(a,{control:e($,{}),value:"2",label:"Radio 2"}),e(a,{control:e($,{}),value:"3",label:"Radio 3"})]})]})]})};var E,q,T;R.parameters={...R.parameters,docs:{...(E=R.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: FormControlLabelProps) => <FormControlLabel {...args} />,
  args: {
    label: 'Label',
    required: true,
    control: <Checkbox />
  }
}`,...(T=(q=R.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var U,V,N;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Default" />
      <FormControlLabel helpTopicId="1234" control={<Checkbox />} label="With FieldHelpIcon" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      {/* Error state not available on individual control, must be within FormControl. */}
      <FormControl error>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Error (Only visible in FormControl group)" />
        </FormGroup>
      </FormControl>
    </FormGroup>
}`,...(N=(V=k.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var O,j,H;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column">
      <FormControl component="fieldset" aria-labelledby="checkbox-group">
        <MuiFormLabel component="legend" id="checkbox-group">
          Checkbox Group
        </MuiFormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="Check 1" />
          <FormControlLabel control={<Checkbox />} label="Check 2" helpTopicId="2" />
          <FormControlLabel control={<Checkbox />} label="Check 3" />
        </FormGroup>
      </FormControl>
      <FormControl required error>
        <FormLabel id="radio-group" helpTopicId="12">
          Radio Group
        </FormLabel>
        <RadioGroup aria-labelledby="radio-group" name="radio-group" defaultValue="3">
          <FormControlLabel control={<Radio />} value="1" label="Radio 1" />
          <FormControlLabel control={<Radio />} value="2" label="Radio 2" />
          <FormControlLabel control={<Radio />} value="3" label="Radio 3" />
        </RadioGroup>
      </FormControl>
    </Box>
}`,...(H=(j=x.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const Le=["_FormLabel","_States","_Groups"];export{R as _FormLabel,x as _Groups,k as _States,Le as __namedExportsOrder,Ie as default};
//# sourceMappingURL=FormControlLabel.stories-e2433c51.js.map
