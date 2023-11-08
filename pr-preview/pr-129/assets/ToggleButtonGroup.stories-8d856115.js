import{j as o,a as g,F as x}from"./jsx-runtime-390e5fc8.js";import{r as d}from"./index-570b25c1.js";import{b as H,F as N,B as W}from"./index-f35eb24e.js";import{T as s}from"./ToggleButton-2cafdb31.js";import{f as P,_ as b,b as J}from"./createTheme-e6b56ddb.js";import"./react-is.production.min-a192e302.js";import{c as S}from"./clsx-8416b751.js";import{g as K,s as Q,c as X}from"./styled-188025da.js";import{u as Y}from"./useThemeProps-db7202c2.js";import{g as Z}from"./generateUtilityClasses-f776b170.js";import"./_commonjsHelpers-042e6b4d.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./ButtonBase-dcf5e891.js";import"./emotion-react.browser.esm-69a15469.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";function ee(t,e){return e===void 0||t===void 0?!1:Array.isArray(e)?e.indexOf(t)>=0:t===e}function te(t){return K("MuiToggleButtonGroup",t)}const oe=Z("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),n=oe,le=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],re=t=>{const{classes:e,orientation:l,fullWidth:i,disabled:c}=t,a={root:["root",l==="vertical"&&"vertical",i&&"fullWidth"],grouped:["grouped",`grouped${P(l)}`,c&&"disabled"]};return X(a,te,e)},ae=Q("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[{[`& .${n.grouped}`]:e.grouped},{[`& .${n.grouped}`]:e[`grouped${P(l.orientation)}`]},e.root,l.orientation==="vertical"&&e.vertical,l.fullWidth&&e.fullWidth]}})(({ownerState:t,theme:e})=>b({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${n.grouped}`]:b({},t.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${n.selected} + .${n.grouped}.${n.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${n.selected} + .${n.grouped}.${n.selected}`]:{borderTop:0,marginTop:0}})})),ne=d.forwardRef(function(e,l){const i=Y({props:e,name:"MuiToggleButtonGroup"}),{children:c,className:a,color:j="standard",disabled:y=!1,exclusive:k=!1,fullWidth:V=!1,onChange:h,orientation:O="horizontal",size:G="medium",value:u}=i,U=J(i,le),R=b({},i,{disabled:y,fullWidth:V,orientation:O,size:G}),w=re(R),A=(r,p)=>{if(!h)return;const C=u&&u.indexOf(p);let f;u&&C>=0?(f=u.slice(),f.splice(C,1)):f=u?u.concat(p):[p],h(r,f)},D=(r,p)=>{h&&h(r,u===p?null:p)};return o(ae,b({role:"group",className:S(w.root,a),ref:l,ownerState:R},U,{children:d.Children.map(c,r=>d.isValidElement(r)?d.cloneElement(r,{className:S(w.grouped,r.props.className),onChange:k?D:A,selected:r.props.selected===void 0?ee(r.props.value,u):r.props.selected,size:r.props.size||G,fullWidth:V,color:r.props.color||j,disabled:r.props.disabled||y}):null)}))}),se=ne,m=({children:t,...e})=>o(se,{...e,orientation:"horizontal",children:t});try{m.displayName="ToggleButtonGroup",m.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'small'"},description:"The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ToggleButtonGroupClasses>"}},color:{defaultValue:{value:"'standard'"},description:`The color of the button when it is selected.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning" | "standard"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},onChange:{defaultValue:null,description:"Callback fired when the value changes.\n@param event The event source of the callback.\n@param value of the selected buttons. When `exclusive` is true\nthis is a single value; when false an array of selected values. If no value\nis selected and `exclusive` is true the value is null; when false an empty array.",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, value: any) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The currently selected value within the group or an array of selected
values when \`exclusive\` is false.

The value must have reference equality with the option in order to be selected.`,name:"value",required:!1,type:{name:"any"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button group will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:{value:"false"},description:"If `true`, only allow one of the child ToggleButton values to be selected.",name:"exclusive",required:!1,type:{name:"boolean"}}}}}catch{}const ze={title:"Components/ToggleButton/ToggleButtonGroup",component:m,tags:["autodocs"],argTypes:{size:{options:["small","medium","large"]}}},v={render:t=>{const[e,l]=d.useState("left");return g(m,{...t,value:e,onChange:(c,a)=>{l(a)},children:[o(s,{value:"First",children:"First"}),o(s,{value:"Second",children:"Second"}),o(s,{value:"Third",children:"Third",disabled:!0})]})},args:{exclusive:!0}},T={render:t=>{const[e,l]=d.useState("left");return g(m,{...t,value:e,onChange:(c,a)=>{l(a)},children:[o(s,{value:"home","aria-label":"Home",children:o(H,{})}),o(s,{value:"filter","aria-label":"Filter",children:o(N,{})}),o(s,{value:"notification","aria-label":"Notification",children:o(W,{}),disabled:!0})]})},args:{exclusive:!0}},B={render:t=>{const[e,l]=d.useState("left");return g(m,{...t,value:e,onChange:(c,a)=>{l(a)},children:[o(s,{value:1,children:g(x,{children:[o(H,{fontSize:"small",sx:{paddingRight:".5rem"}})," Home"]})}),o(s,{value:2,children:g(x,{children:[o(N,{fontSize:"small",sx:{paddingRight:".5rem"}})," Filter"]})}),o(s,{value:3,disabled:!0,children:g(x,{children:[o(W,{fontSize:"small",sx:{paddingRight:".5rem"}})," Notification"]})})]})},args:{exclusive:!0}};var z,_,I;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');
    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value="First" children="First" />
        <ToggleButton value="Second" children="Second" />
        <ToggleButton value="Third" children="Third" disabled />
      </ToggleButtonGroup>;
  },
  args: {
    exclusive: true
  }
}`,...(I=(_=v.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var L,E,F;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');
    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value="home" aria-label="Home" children={<HomeIcon />} />
        <ToggleButton value="filter" aria-label="Filter" children={<FilterIcon />} />
        <ToggleButton value="notification" aria-label="Notification" children={<BellIcon />} disabled />
      </ToggleButtonGroup>;
  },
  args: {
    exclusive: true
  }
}`,...(F=(E=T.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var M,$,q;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');
    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value={1} children={<>
              <HomeIcon fontSize="small" sx={{
          paddingRight: '.5rem'
        }} /> Home
            </>} />
        <ToggleButton value={2} children={<>
              <FilterIcon fontSize="small" sx={{
          paddingRight: '.5rem'
        }} /> Filter
            </>} />
        <ToggleButton value={3} disabled children={<>
              <BellIcon fontSize="small" sx={{
          paddingRight: '.5rem'
        }} /> Notification
            </>} />
      </ToggleButtonGroup>;
  },
  args: {
    exclusive: true
  }
}`,...(q=($=B.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const _e=["_ToggleButtonGroup","_ToggleButtonGroupIcons","_ToggleButtonGroupIconsLabels"];export{v as _ToggleButtonGroup,T as _ToggleButtonGroupIcons,B as _ToggleButtonGroupIconsLabels,_e as __namedExportsOrder,ze as default};
//# sourceMappingURL=ToggleButtonGroup.stories-8d856115.js.map
