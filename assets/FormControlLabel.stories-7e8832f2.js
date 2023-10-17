import{j as o,a as c}from"./jsx-runtime-390e5fc8.js";import{F as Q}from"./FormLabel-1d272268.js";import{r as s}from"./index-570b25c1.js";import{F as X}from"./FieldHelpIcon-545f45c1.js";import{B as A}from"./Box-ce79f7f7.js";import{M as ee}from"./FormControlLabel-61164d2c.js";import{S as oe,C as d}from"./Checkbox-91df2012.js";import{F as v}from"./FormGroup-0956aca8.js";import{F as w,M as re}from"./FormLabel-10b42ad0.js";import{b as u,f as P,c as ae,e as W}from"./createTheme-b02e766d.js";import{u as te}from"./useControlled-9b1271e0.js";import{u as ne}from"./useId-6f4bfce0.js";import{u as le}from"./useForkRef-153a0a89.js";import{c as ie}from"./clsx-43049957.js";import{u as se}from"./useThemeProps-ac7867ed.js";import{c as Y}from"./createSvgIcon-5dca4d92.js";import{s as x,g as ce,r as de,a as ue}from"./styled-69a32198.js";import{g as pe}from"./generateUtilityClasses-b06d554b.js";import{c as me}from"./createChainedFunction-0bab83cf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./index-25d48f71.js";import"./faCircleArrowRight-45fe0977.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-667e6608.js";import"./index-bc19b086.js";import"./Button-48a9b380.js";import"./ButtonBase-78eecb53.js";import"./emotion-react.browser.esm-dc887828.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-9ef5363d.js";import"./useTheme-a234fe30.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-c5009eb1.js";import"./utils-a53b28cc.js";import"./IconButton-329b8fa1.js";import"./LoadingButton-8f26fe8a.js";import"./extends-90dea224.js";import"./extendSxProp-b0ad88fc.js";import"./utils-3d35716f.js";import"./Typography-72ef0a36.js";import"./Stack-524d7b5c.js";import"./styled-9972f020.js";import"./isMuiElement-6907f060.js";const fe=Y(o("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),he=Y(o("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),be=x("span")({position:"relative",display:"flex"}),Ce=x(fe)({transform:"scale(1)"}),ge=x(he)(({theme:e,ownerState:r})=>u({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Z(e){const{checked:r=!1,classes:a={},fontSize:l}=e,n=u({},e,{checked:r});return c(be,{className:a.root,ownerState:n,children:[o(Ce,{fontSize:l,className:a.background,ownerState:n}),o(ge,{fontSize:l,className:a.dot,ownerState:n})]})}const ye=s.createContext(void 0),J=ye;function Fe(){return s.useContext(J)}function ke(e){return ce("MuiRadio",e)}const Re=pe("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),T=Re,ve=["checked","checkedIcon","color","icon","name","onChange","size","className"],xe=e=>{const{classes:r,color:a,size:l}=e,n={root:["root",`color${P(a)}`,l!=="medium"&&`size${P(l)}`]};return u({},r,ue(n,ke,r))},Ie=x(oe,{shouldForwardProp:e=>de(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${P(a.color)}`]]}})(({theme:e,ownerState:r})=>u({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${r.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ae(r.color==="default"?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},r.color!=="default"&&{[`&.${T.checked}`]:{color:(e.vars||e).palette[r.color].main}},{[`&.${T.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Se(e,r){return typeof r=="object"&&r!==null?e===r:String(e)===String(r)}const $=o(Z,{checked:!0}),z=o(Z,{}),Le=s.forwardRef(function(r,a){var l,n;const p=se({props:r,name:"MuiRadio"}),{checked:I,checkedIcon:f=$,color:S="primary",icon:L=z,name:h,onChange:C,size:m="medium",className:q}=p,g=W(p,ve),y=u({},p,{color:S,size:m}),i=xe(y),b=Fe();let G=I;const K=me(C,b&&b.onChange);let _=h;return b&&(typeof G>"u"&&(G=Se(b.value,p.value)),typeof _>"u"&&(_=b.name)),o(Ie,u({type:"radio",icon:s.cloneElement(L,{fontSize:(l=z.props.fontSize)!=null?l:m}),checkedIcon:s.cloneElement(f,{fontSize:(n=$.props.fontSize)!=null?n:m}),ownerState:y,classes:i,name:_,checked:G,onChange:K,ref:a,className:ie(i.root,q)},g))}),V=Le,qe=["actions","children","defaultValue","name","onChange","value"],Ge=s.forwardRef(function(r,a){const{actions:l,children:n,defaultValue:p,name:I,onChange:f,value:S}=r,L=W(r,qe),h=s.useRef(null),[C,m]=te({controlled:S,default:p,name:"RadioGroup"});s.useImperativeHandle(l,()=>({focus:()=>{let i=h.current.querySelector("input:not(:disabled):checked");i||(i=h.current.querySelector("input:not(:disabled)")),i&&i.focus()}}),[]);const q=le(a,h),g=ne(I),y=s.useMemo(()=>({name:g,onChange(i){m(i.target.value),f&&f(i,i.target.value)},value:C}),[g,f,m,C]);return o(J.Provider,{value:y,children:o(v,u({role:"radiogroup",ref:q},L,{children:n}))})}),_e=Ge,t=s.forwardRef(({helpTopicId:e,id:r,...a},l)=>{const n=r||(a.htmlFor?`${a.htmlFor}-label`:void 0);return c(A,{children:[o(ee,{id:n,...a,ref:l}),e?o(X,{helpTopicId:"12345",labelId:n}):null]})});try{t.displayName="FormControlLabel",t.__docgenInfo={description:"",displayName:"FormControlLabel",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormControlLabelClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},label:{defaultValue:null,description:"A text or an element to be used in an enclosing label element.",name:"label",required:!0,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, checked: boolean) => void"}},disabled:{defaultValue:null,description:"If `true`, the control is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ typography?: TypographyProps<"span", {}>; }'}},value:{defaultValue:null,description:"The value of the component.",name:"value",required:!1,type:{name:"unknown"}},disableTypography:{defaultValue:null,description:"If `true`, the label is rendered as it is passed without an additional typography node.",name:"disableTypography",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"If `true`, the component appears selected.",name:"checked",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},required:{defaultValue:null,description:"If `true`, adds required to control. (No required asterisk on individual controls in the group)",name:"required",required:!1,type:{name:"boolean"}},helpTopicId:{defaultValue:null,description:"Adds `FieldHelpIcon` next to the label (should not be within label for accessibility)",name:"helpTopicId",required:!1,type:{name:"string"}},control:{defaultValue:null,description:"A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.",name:"control",required:!0,type:{name:"ReactElement<any, any>"}}}}}catch{}const So={title:"Components/FormUtils/FormControlLabel",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label."}}}},F={render:e=>o(t,{...e}),args:{label:"Label",required:!0,control:o(d,{})}},k={render:()=>c(v,{children:[o(t,{control:o(d,{}),label:"Default"}),o(t,{helpTopicId:"1234",control:o(d,{}),label:"With FieldHelpIcon"}),o(t,{disabled:!0,control:o(d,{}),label:"Disabled"}),o(w,{error:!0,children:o(v,{children:o(t,{control:o(d,{}),label:"Error (Only visible in FormControl group)"})})})]})},R={render:()=>c(A,{display:"flex",flexDirection:"column",children:[c(w,{component:"fieldset","aria-labelledby":"checkbox-group",children:[o(re,{component:"legend",id:"checkbox-group",children:"Checkbox Group"}),c(v,{row:!0,children:[o(t,{control:o(d,{}),label:"Check 1"}),o(t,{control:o(d,{}),label:"Check 2",helpTopicId:"2"}),o(t,{control:o(d,{}),label:"Check 3"})]})]}),c(w,{required:!0,error:!0,children:[o(Q,{id:"radio-group",helpTopicId:"12",children:"Radio Group"}),c(_e,{"aria-labelledby":"radio-group",name:"radio-group",defaultValue:"3",children:[o(t,{control:o(V,{}),value:"1",label:"Radio 1"}),o(t,{control:o(V,{}),value:"2",label:"Radio 2"}),o(t,{control:o(V,{}),value:"3",label:"Radio 3"})]})]})]})};var B,M,E;F.parameters={...F.parameters,docs:{...(B=F.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: FormControlLabelProps) => <FormControlLabel {...args} />,
  args: {
    label: 'Label',
    required: true,
    control: <Checkbox />
  }
}`,...(E=(M=F.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var N,D,O;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(D=k.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var U,j,H;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(j=R.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const Lo=["_FormLabel","_States","_Groups"];export{F as _FormLabel,R as _Groups,k as _States,Lo as __namedExportsOrder,So as default};
//# sourceMappingURL=FormControlLabel.stories-7e8832f2.js.map
