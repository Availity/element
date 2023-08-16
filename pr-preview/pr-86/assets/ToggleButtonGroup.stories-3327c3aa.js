import{j as o,a as g,F as b}from"./jsx-runtime-91a467a5.js";import{r as d}from"./index-8db94870.js";import{b as H,F as N,B as W}from"./index-cd651495.js";import{T as s}from"./ToggleButton-3f5e4d3e.js";import"./react-is.production.min-a192e302.js";import{g as D,a as J,s as K,c as C,b as Q}from"./styled-838f2411.js";import{c as F,u as X}from"./useThemeProps-ac6a164c.js";import"./_commonjsHelpers-042e6b4d.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-247857dd.js";import"./ButtonBase-246c583e.js";import"./emotion-react.browser.esm-63c9efdb.js";import"./extends-bab83b91.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";function Y(t,e){return e===void 0||t===void 0?!1:Array.isArray(e)?e.indexOf(t)>=0:t===e}function Z(t){return J("MuiToggleButtonGroup",t)}const ee=D("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),a=ee,te=t=>{const{classes:e,orientation:l,fullWidth:i,disabled:c}=t,r={root:["root",l==="vertical"&&"vertical",i&&"fullWidth"],grouped:["grouped",`grouped${F(l)}`,c&&"disabled"]};return Q(r,Z,e)},oe=K("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[{[`& .${a.grouped}`]:e.grouped},{[`& .${a.grouped}`]:e[`grouped${F(l.orientation)}`]},e.root,l.orientation==="vertical"&&e.vertical,l.fullWidth&&e.fullWidth]}})(({ownerState:t,theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,...t.orientation==="vertical"&&{flexDirection:"column"},...t.fullWidth&&{width:"100%"},[`& .${a.grouped}`]:{...t.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${a.selected} + .${a.grouped}.${a.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${a.selected} + .${a.grouped}.${a.selected}`]:{borderTop:0,marginTop:0}}}})),le=d.forwardRef(function(e,l){const i=X({props:e,name:"MuiToggleButtonGroup"}),{children:c,className:r,color:O="standard",disabled:y=!1,exclusive:P=!1,fullWidth:V=!1,onChange:h,orientation:k="horizontal",size:x="medium",value:u,...U}=i,G={...i,disabled:y,fullWidth:V,orientation:k,size:x},w=te(G),j=(n,p)=>{if(!h)return;const R=u&&u.indexOf(p);let f;u&&R>=0?(f=u.slice(),f.splice(R,1)):f=u?u.concat(p):[p],h(n,f)},A=(n,p)=>{h&&h(n,u===p?null:p)};return o(oe,{role:"group",className:C(w.root,r),ref:l,ownerState:G,...U,children:d.Children.map(c,n=>d.isValidElement(n)?d.cloneElement(n,{className:C(w.grouped,n.props.className),onChange:P?A:j,selected:n.props.selected===void 0?Y(n.props.value,u):n.props.selected,size:n.props.size||x,fullWidth:V,color:n.props.color||O,disabled:n.props.disabled||y}):null)})}),ne=le,m=({children:t,...e})=>o(ne,{...e,orientation:"horizontal",children:t});try{m.displayName="ToggleButtonGroup",m.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'small'"},description:"The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ToggleButtonGroupClasses>"}},color:{defaultValue:{value:"'standard'"},description:`The color of the button when it is selected.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning" | "standard"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},onChange:{defaultValue:null,description:"Callback fired when the value changes.\n@param event The event source of the callback.\n@param value of the selected buttons. When `exclusive` is true\nthis is a single value; when false an array of selected values. If no value\nis selected and `exclusive` is true the value is null; when false an empty array.",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, value: any) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The currently selected value within the group or an array of selected
values when \`exclusive\` is false.

The value must have reference equality with the option in order to be selected.`,name:"value",required:!1,type:{name:"any"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button group will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},exclusive:{defaultValue:{value:"false"},description:"If `true`, only allow one of the child ToggleButton values to be selected.",name:"exclusive",required:!1,type:{name:"boolean"}}}}}catch{}const xe={title:"Components/ToggleButton/ToggleButtonGroup",component:m,tags:["autodocs"],argTypes:{size:{options:["small","medium","large"]}}},v={render:t=>{const[e,l]=d.useState("left");return g(m,{...t,value:e,onChange:(c,r)=>{l(r)},children:[o(s,{value:1,children:"One"}),o(s,{value:2,children:"Two"}),o(s,{value:3,children:"Three",disabled:!0})]})},args:{exclusive:!0}},T={render:t=>{const[e,l]=d.useState("left");return g(m,{...t,value:e,onChange:(c,r)=>{l(r)},children:[o(s,{value:1,children:o(H,{})}),o(s,{value:2,children:o(N,{})}),o(s,{value:3,children:o(W,{}),disabled:!0})]})},args:{exclusive:!0}},B={render:t=>{const[e,l]=d.useState("left");return g(m,{...t,value:e,onChange:(c,r)=>{l(r)},children:[o(s,{value:1,children:g(b,{children:[o(H,{fontSize:"small",sx:{paddingRight:".5rem"}})," Home"]})}),o(s,{value:2,children:g(b,{children:[o(N,{fontSize:"small",sx:{paddingRight:".5rem"}})," Filter"]})}),o(s,{value:3,disabled:!0,children:g(b,{children:[o(W,{fontSize:"small",sx:{paddingRight:".5rem"}})," Notification"]})})]})},args:{exclusive:!0}};var z,S,I;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');
    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value={1} children="One" />
        <ToggleButton value={2} children="Two" />
        <ToggleButton value={3} children="Three" disabled />
      </ToggleButtonGroup>;
  },
  args: {
    exclusive: true
  }
}`,...(I=(S=v.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var _,E,L;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');
    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value={1} children={<HomeIcon />} />
        <ToggleButton value={2} children={<FilterIcon />} />
        <ToggleButton value={3} children={<BellIcon />} disabled />
      </ToggleButtonGroup>;
  },
  args: {
    exclusive: true
  }
}`,...(L=(E=T.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,$,q;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=($=B.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Ge=["_ToggleButtonGroup","_ToggleButtonGroupIcons","_ToggleButtonGroupIconsLabels"];export{v as _ToggleButtonGroup,T as _ToggleButtonGroupIcons,B as _ToggleButtonGroupIconsLabels,Ge as __namedExportsOrder,xe as default};
//# sourceMappingURL=ToggleButtonGroup.stories-3327c3aa.js.map
