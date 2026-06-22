import{r as c,j as r}from"./iframe-BcpGFM79.js";import{S as a}from"./SearchBy-Dj5mxkdv.js";import{S as n}from"./Common-IWC_xwUh.js";import{T as o}from"./TextField-D9BkScsD.js";import{M as t}from"./MenuItem-CAGa9_PZ.js";import{I as l}from"./InputAdornment-BTQkMaXP.js";import"./preload-helper-Dab_6GC_.js";import"./Stack-D5S2zAhj.js";import"./Stack-C71gTkqw.js";import"./styled-YELB7PbO.js";import"./styled-CAzon1OD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./FormLabel-KM-1TQDB.js";import"./FieldHelpIcon-Dc0XpqfL.js";import"./index-CrcoPoGw.js";import"./Form-BSB-tu1Z.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./memoTheme-CUR-_UQu.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useTheme-DjrtHLeH.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./useTimeout-D7cMLa2k.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./FormControl-P2zjagtr.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BGMg_aeo.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-IVbgCQ7T.js";import"./FormGroup-DkeyJcWV.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./OutlinedInput-CRSwkZMH.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-CxS44fOa.js";import"./SelectFocusSourceContext-BgAF1XhB.js";import"./Popover-C-vNPShq.js";import"./mergeSlotProps-0PeTl37o.js";import"./Modal-ORZGbsIm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Kq3hx2RN.js";import"./Fade-CdC4gkg9.js";import"./Paper-DJSKHSTy.js";import"./List-B4tdnm47.js";import"./createSvgIcon-D6BcWLqc.js";import"./FormHelperText-B5A4eWsZ.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Typography-D2_Tvhdq.js";const Ar={title:"Form Components/Uncontrolled FormUtils/SearchByFormGroup",component:a,tags:["autodocs"]},e={render:()=>{const[m,s]=c.useState(""),i=p=>{s(p.target.value)};return r.jsxs(a,{searchById:"searchbystory-searchby",children:[r.jsxs(o,{id:"searchbystory-searchby",value:m,fullWidth:!1,select:!0,slotProps:{select:{onChange:i,labelId:"searchbystory-searchby-label"}},children:[r.jsx(t,{value:"Parameter 1",children:"Parameter 1"}),r.jsx(t,{value:"Parameter 2",children:"Parameter 2"}),r.jsx(t,{value:"Parameter 3",children:"Parameter 3"})]}),r.jsx(o,{id:"searchbystory-search",placeholder:"search",slotProps:{input:{startAdornment:r.jsx(l,{position:"start",component:"label",htmlFor:"searchbystory-search",children:r.jsx(n,{"aria-hidden":!1,titleAccess:"search"})})}}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
