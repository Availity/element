import{r as c,j as r}from"./iframe-B3KH45W1.js";import{S as a}from"./SearchBy-BQQHvpYR.js";import{S as n}from"./Common-BAorCfPo.js";import{T as o}from"./TextField-CysQRKEV.js";import{M as t}from"./MenuItem-BfWTq7kz.js";import{I as l}from"./InputAdornment-CBlUyCiQ.js";import"./preload-helper-Dab_6GC_.js";import"./Stack-tWcBAM6L.js";import"./Stack-D4A7CmlM.js";import"./styled-B89GBRvi.js";import"./styled-CG3DpTjV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./FormLabel-DW_eBrIG.js";import"./FieldHelpIcon-DiJFTHZH.js";import"./index-CrcoPoGw.js";import"./Form-D1K37nGD.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./memoTheme-DWwRHojM.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./IconButton-UjBwLmV3.js";import"./Tooltip-BBnoBBLv.js";import"./useTheme-Ds4SDsFm.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./useTimeout-BS1Rp5sI.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./FormControl-D9hbHaGM.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bg2Y-buC.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-BGMciLL0.js";import"./FormGroup-B5Q6C6t1.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./OutlinedInput-BAiglCmg.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-DIxhJ8kq.js";import"./SelectFocusSourceContext-BFgvB2zc.js";import"./Popover-3fDVAJax.js";import"./mergeSlotProps-CZPVrohS.js";import"./Modal-CJRztngO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-y0tvSJ2D.js";import"./Fade-DJRP9WcG.js";import"./Paper-BJPkQ8DM.js";import"./List-DafW6Lb2.js";import"./createSvgIcon-CP7Sjzln.js";import"./FormHelperText-Bn-upZao.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Typography-D3qZBRmm.js";const Ar={title:"Form Components/Uncontrolled FormUtils/SearchByFormGroup",component:a,tags:["autodocs"]},e={render:()=>{const[m,s]=c.useState(""),i=p=>{s(p.target.value)};return r.jsxs(a,{searchById:"searchbystory-searchby",children:[r.jsxs(o,{id:"searchbystory-searchby",value:m,fullWidth:!1,select:!0,slotProps:{select:{onChange:i,labelId:"searchbystory-searchby-label"}},children:[r.jsx(t,{value:"Parameter 1",children:"Parameter 1"}),r.jsx(t,{value:"Parameter 2",children:"Parameter 2"}),r.jsx(t,{value:"Parameter 3",children:"Parameter 3"})]}),r.jsx(o,{id:"searchbystory-search",placeholder:"search",slotProps:{input:{startAdornment:r.jsx(l,{position:"start",component:"label",htmlFor:"searchbystory-search",children:r.jsx(n,{"aria-hidden":!1,titleAccess:"search"})})}}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Mr=["_SearchBy"];export{e as _SearchBy,Mr as __namedExportsOrder,Ar as default};
