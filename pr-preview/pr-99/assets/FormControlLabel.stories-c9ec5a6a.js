import{j as e,a as c}from"./jsx-runtime-390e5fc8.js";import{F as eo}from"./FormLabel-5e5d7bf5.js";import{r as i}from"./index-570b25c1.js";import{F as ro}from"./FieldHelpIcon-1249aecd.js";import{B as H}from"./Box-4c9f5af0.js";import{M as ao}from"./FormControlLabel-fd7fbd69.js";import{S as to,C as d}from"./Checkbox-a0186f17.js";import{b as j,g as A,s as g,c as W,a as Y,r as no}from"./styled-2191822d.js";import{c as Z,e as J,b as lo}from"./useThemeProps-66ab754c.js";import{u as so,f as io,M as co}from"./FormLabel-f2bb53c2.js";import{F as V}from"./FormControl-8b41a575.js";import{u as uo}from"./useControlled-9b1271e0.js";import{u as po}from"./useId-6f4bfce0.js";import{u as mo}from"./useForkRef-153a0a89.js";import{c as K}from"./createSvgIcon-cafa5f0c.js";import{c as fo}from"./createChainedFunction-0bab83cf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9681c8ff.js";import"./index-8995f814.js";import"./faCircleArrowRight-42e2ee2e.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-644454bc.js";import"./index-2e2b4810.js";import"./Button-fce9389c.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Tooltip-e09bffc1.js";import"./useTheme-c775f3da.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-38dd38c0.js";import"./utils-aacfec48.js";import"./IconButton-130e3844.js";import"./LoadingButton-25a551fc.js";import"./extendSxProp-564f0963.js";import"./Typography-8314e3e3.js";function bo(o){return j("MuiFormGroup",o)}A("MuiFormGroup",["root","row","error"]);const ho=o=>{const{classes:r,row:a,error:t}=o;return Y({root:["root",a&&"row",t&&"error"]},bo,r)},Co=g("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,a.row&&r.row]}})(({ownerState:o})=>({display:"flex",flexDirection:"column",flexWrap:"wrap",...o.row&&{flexDirection:"row"}})),Fo=i.forwardRef(function(r,a){const t=Z({props:r,name:"MuiFormGroup"}),{className:n,row:u=!1,...h}=t,p=so(),C=io({props:t,muiFormControl:p,states:["error"]}),f={...t,row:u,error:C.error},m=ho(f);return e(Co,{className:W(m.root,n),ownerState:f,ref:a,...h})}),S=Fo,go=K(e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),yo=K(e("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Ro=g("span")({position:"relative",display:"flex"}),ko=g(go)({transform:"scale(1)"}),vo=g(yo)(({theme:o,ownerState:r})=>({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest}),...r.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}}));function Q(o){const{checked:r=!1,classes:a={},fontSize:t}=o,n={...o,checked:r};return c(Ro,{className:a.root,ownerState:n,children:[e(ko,{fontSize:t,className:a.background,ownerState:n}),e(vo,{fontSize:t,className:a.dot,ownerState:n})]})}const xo=i.createContext(void 0),X=xo;function Io(){return i.useContext(X)}function So(o){return j("MuiRadio",o)}const wo=A("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),T=wo,Go=o=>{const{classes:r,color:a}=o,t={root:["root",`color${J(a)}`]};return{...r,...Y(t,So,r)}},Lo=g(to,{shouldForwardProp:o=>no(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[`color${J(a.color)}`]]}})(({theme:o,ownerState:r})=>({color:(o.vars||o).palette.text.secondary,...!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${r.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[r.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:lo(r.color==="default"?o.palette.action.active:o.palette[r.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},...r.color!=="default"&&{[`&.${T.checked}`]:{color:(o.vars||o).palette[r.color].main}},[`&.${T.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function qo(o,r){return typeof r=="object"&&r!==null?o===r:String(o)===String(r)}const _=e(Q,{checked:!0}),M=e(Q,{}),Vo=i.forwardRef(function(r,a){var t,n;const u=Z({props:r,name:"MuiRadio"}),{checked:h,checkedIcon:p=_,color:C="primary",icon:f=M,name:m,onChange:y,size:b="medium",className:w,...R}=u,k={...u,color:C,size:b},s=Go(k),F=Io();let G=h;const oo=fo(y,F&&F.onChange);let L=m;return F&&(typeof G>"u"&&(G=qo(F.value,u.value)),typeof L>"u"&&(L=F.name)),e(Lo,{type:"radio",icon:i.cloneElement(f,{fontSize:(t=M.props.fontSize)!=null?t:b}),checkedIcon:i.cloneElement(p,{fontSize:(n=_.props.fontSize)!=null?n:b}),ownerState:k,classes:s,name:L,checked:G,onChange:oo,ref:a,className:W(s.root,w),...R})}),q=Vo,To=i.forwardRef(function(r,a){const{actions:t,children:n,defaultValue:u,name:h,onChange:p,value:C,...f}=r,m=i.useRef(null),[y,b]=uo({controlled:C,default:u,name:"RadioGroup"});i.useImperativeHandle(t,()=>({focus:()=>{let s=m.current.querySelector("input:not(:disabled):checked");s||(s=m.current.querySelector("input:not(:disabled)")),s&&s.focus()}}),[]);const w=mo(a,m),R=po(h),k=i.useMemo(()=>({name:R,onChange(s){b(s.target.value),p&&p(s,s.target.value)},value:y}),[R,p,b,y]);return e(X.Provider,{value:k,children:e(S,{role:"radiogroup",ref:w,...f,children:n})})}),_o=To,l=i.forwardRef(({helpTopicId:o,id:r,...a},t)=>{const n=r||(a.htmlFor?`${a.htmlFor}-label`:void 0);return c(H,{children:[e(ao,{id:n,...a,ref:t}),o?e(ro,{helpTopicId:"12345",labelId:n}):null]})});try{l.displayName="FormControlLabel",l.__docgenInfo={description:"",displayName:"FormControlLabel",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormControlLabelClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},label:{defaultValue:null,description:"A text or an element to be used in an enclosing label element.",name:"label",required:!0,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, checked: boolean) => void"}},disabled:{defaultValue:null,description:"If `true`, the control is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ typography?: TypographyProps<"span", {}>; }'}},value:{defaultValue:null,description:"The value of the component.",name:"value",required:!1,type:{name:"unknown"}},disableTypography:{defaultValue:null,description:"If `true`, the label is rendered as it is passed without an additional typography node.",name:"disableTypography",required:!1,type:{name:"boolean"}},helpTopicId:{defaultValue:null,description:"Adds `FieldHelpIcon` next to the label (should not be within label for accessibility)",name:"helpTopicId",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"If `true`, adds required to control. (No required asterisk on individual controls in the group)",name:"required",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"If `true`, the component appears selected.",name:"checked",required:!1,type:{name:"boolean"}},control:{defaultValue:null,description:"A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.",name:"control",required:!0,type:{name:"ReactElement<any, any>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}}}}}catch{}const Fe={title:"Components/FormUtils/FormControlLabel",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component to display a label."}}}},v={render:o=>e(l,{...o}),args:{label:"Label",required:!0,control:e(d,{})}},x={render:()=>c(S,{children:[e(l,{control:e(d,{}),label:"Default"}),e(l,{helpTopicId:"1234",control:e(d,{}),label:"With FieldHelpIcon"}),e(l,{disabled:!0,control:e(d,{}),label:"Disabled"}),e(V,{error:!0,children:e(S,{children:e(l,{control:e(d,{}),label:"Error (Only visible in FormControl group)"})})})]})},I={render:()=>c(H,{display:"flex",flexDirection:"column",children:[c(V,{component:"fieldset","aria-labelledby":"checkbox-group",children:[e(co,{component:"legend",id:"checkbox-group",children:"Checkbox Group"}),c(S,{row:!0,children:[e(l,{control:e(d,{}),label:"Check 1"}),e(l,{control:e(d,{}),label:"Check 2",helpTopicId:"2"}),e(l,{control:e(d,{}),label:"Check 3"})]})]}),c(V,{required:!0,error:!0,children:[e(eo,{id:"radio-group",helpTopicId:"12",children:"Radio Group"}),c(_o,{"aria-labelledby":"radio-group",name:"radio-group",defaultValue:"3",children:[e(l,{control:e(q,{}),value:"1",label:"Radio 1"}),e(l,{control:e(q,{}),value:"2",label:"Radio 2"}),e(l,{control:e(q,{}),value:"3",label:"Radio 3"})]})]})]})};var P,$,B;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: FormControlLabelProps) => <FormControlLabel {...args} />,
  args: {
    label: 'Label',
    required: true,
    control: <Checkbox />
  }
}`,...(B=($=v.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var E,z,N;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(z=x.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var D,U,O;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(U=I.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const ge=["_FormLabel","_States","_Groups"];export{v as _FormLabel,I as _Groups,x as _States,ge as __namedExportsOrder,Fe as default};
//# sourceMappingURL=FormControlLabel.stories-c9ec5a6a.js.map
