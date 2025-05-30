import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{e as s}from"./Switch-DjXyb7uH.js";import"./FieldHelpIcon-Do0u9pLB.js";import"./Input-CaOKvJPL.js";import"./index-ClMemn8c.js";import{c as h}from"./index-CmMPo3bx.js";import{r as d}from"./index-BgYLq7fD.js";import{T as o}from"./TextField-Dbm3e8rv.js";import{M as e}from"./MenuItem-B0sbJV79.js";import{I as u}from"./InputAdornment-D5eTYx4L.js";import"./index-ChsGqxH_.js";import"./styled-FZfCzBz5.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./identifier-CHUoN9pF.js";import"./generateUtilityClass-GxznSYtt.js";import"./FormControlLabel-NrRuXsuu.js";import"./memoTheme-BLrvrRyo.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-qvYlW2UV.js";import"./resolveComponentProps-XMphxBSb.js";import"./useForkRef-Dz4aGlyk.js";import"./useFormControl-t_-EwZHM.js";import"./Typography-geKghQyJ.js";import"./index-Df15702_.js";import"./extendSxProp-BZnzVrgj.js";import"./useTheme-CVByJb8R.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BU2WakPM.js";import"./RadioGroup-CGGGzwtq.js";import"./SwitchBase-DpeF2ikX.js";import"./useControlled-DxC1uCGX.js";import"./ButtonBase-DwAEbHIm.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DK1T27V3.js";import"./SvgIcon-D3xe1wVB.js";import"./Modal-BSor9Am9.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DEVqEMA6.js";import"./useTheme-BGaXYmwe.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DdXvKv-Q.js";import"./getReactElementRef-Df0xbma2.js";import"./Backdrop-DwIksyfj.js";import"./Fade-rL0rk9XF.js";import"./useId-DIK8ekB4.js";import"./Select-D8Pqa1Dd.js";import"./Menu-BUIr0rCt.js";import"./index-DyJdRKzS.js";import"./useSlotProps-DT0tbkWv.js";import"./Popover-DNs0CrC2.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./Paper-zGtC1N39.js";import"./List-CN2yCDHK.js";import"./OutlinedInput-ClKDCKpR.js";import"./Stack-2ILcP_1D.js";import"./styled-CsKbBpC_.js";import"./useThemeProps-BNBLMFIr.js";import"./Divider-CE8hkX1u.js";import"./dividerClasses-Cy3VQ5Zc.js";import"./faCheck-BUdkY9Qv.js";import"./Switch-BMNMooHv.js";import"./index-DmY_4rvh.js";import"./Grid2-BbvvmKhh.js";import"./isMuiElement-DiOAsJE6.js";import"./Container-DvcsWH8C.js";import"./index-DJKl12U0.js";import"./index-k9OtkSpc.js";import"./Tooltip-Xh9QA514.js";import"./IconButton-BFylt634.js";import"./CircularProgress-o1goEU37.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./FormControl-eNKWX08Y.js";import"./listItemTextClasses-BE6nMJZB.js";const Qr={title:"Form Components/FormUtils/SearchByFormGroup",component:s,tags:["autodocs"]},t={render:()=>{const[p,c]=d.useState(""),n=l=>{c(l.target.value)};return r.jsxs(s,{searchById:"searchbystory-searchby",children:[r.jsxs(o,{id:"searchbystory-searchby",value:p,fullWidth:!1,select:!0,slotProps:{select:{onChange:n,labelId:"searchbystory-searchby-label"}},children:[r.jsx(e,{value:"Parameter 1",children:"Parameter 1"}),r.jsx(e,{value:"Parameter 2",children:"Parameter 2"}),r.jsx(e,{value:"Parameter 3",children:"Parameter 3"})]}),r.jsx(o,{id:"searchbystory-search",placeholder:"search",slotProps:{input:{startAdornment:r.jsx(u,{position:"start",component:"label",htmlFor:"searchbystory-search",children:r.jsx(h,{"aria-hidden":!1,titleAccess:"search"})})}}})]})}};var m,a,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [searchBy, setSearchBy] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setSearchBy(event.target.value as string);
    };
    return <SearchByFormGroup searchById='searchbystory-searchby'>
      {/* It is recommended to use Autocomplete instead of a select TextField */}
      <TextField id="searchbystory-searchby" value={searchBy} fullWidth={false} select slotProps={{
        select: {
          onChange: handleChange,
          labelId: "searchbystory-searchby-label"
        }
      }}>
        <MenuItem value="Parameter 1">Parameter 1</MenuItem>
        <MenuItem value="Parameter 2">Parameter 2</MenuItem>
        <MenuItem value="Parameter 3">Parameter 3</MenuItem>
      </TextField>
      <TextField id="searchbystory-search" placeholder="search" slotProps={{
        input: {
          startAdornment: <InputAdornment position="start" component="label" htmlFor="searchbystory-search">
                <SearchIcon aria-hidden={false} titleAccess="search" />
              </InputAdornment>
        }
      }} />
      </SearchByFormGroup>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const Vr=["_SearchBy"];export{t as _SearchBy,Vr as __namedExportsOrder,Qr as default};
