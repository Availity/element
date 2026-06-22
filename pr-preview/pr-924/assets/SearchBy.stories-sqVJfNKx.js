import{r as c,j as r}from"./iframe-DHkqGgbi.js";import{S as a}from"./SearchBy-U6egVAd8.js";import{S as n}from"./Common-BLIi_r9Z.js";import{T as o}from"./TextField--yz3vm_c.js";import{M as t}from"./MenuItem-ClLGuXdD.js";import{I as l}from"./InputAdornment-DuNDxBKg.js";import"./preload-helper-PPVm8Dsz.js";import"./Stack-BuXw_RaK.js";import"./Stack-CO_r3hOW.js";import"./styled-BFLY3dn7.js";import"./styled-HR_WeqBB.js";import"./generateUtilityClass-BtcU_pBl.js";import"./FormLabel-B39rbSWe.js";import"./FieldHelpIcon-wvX4SPIQ.js";import"./index-CrcoPoGw.js";import"./Form-CBGs9Zxl.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./memoTheme-vxEZSkJ8.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./IconButton-D5Zzj5BR.js";import"./Tooltip-YeMRA4-y.js";import"./useTheme-DTNKpojL.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./useTimeout-Bjfnw5AG.js";import"./useControlled-DlDi1BKb.js";import"./useEventCallback-LtXdtY4h.js";import"./getReactElementRef-BRoKhHqU.js";import"./Grow-CwxupgJl.js";import"./utils-BQBkKAg6.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./Popper-BUehIlZq.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CtpwjVP0.js";import"./useSlotProps-CZQ_I0Kw.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DmdwZwcg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BwqJJF5q.js";import"./CircularProgress-D39cxiof.js";import"./FormControl-Fq5qRX5l.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ZgfjO4em.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-Bo_RUhfi.js";import"./FormGroup-9jL8lJoq.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./OutlinedInput-BwTPRsy8.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-Cb_v2ztz.js";import"./SelectFocusSourceContext-21Yu2WtQ.js";import"./Popover-B_wJwpIg.js";import"./mergeSlotProps-BNZZW_n2.js";import"./Modal-BHwxEFT_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D3ggRYPY.js";import"./Fade-CqjyPa8q.js";import"./Paper-Cer6O457.js";import"./List-BX9VmHQj.js";import"./createSvgIcon-BS4jmzRl.js";import"./FormHelperText-D0tk9xCV.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Typography-i96SYvKe.js";const Ar={title:"Form Components/Uncontrolled FormUtils/SearchByFormGroup",component:a,tags:["autodocs"]},e={render:()=>{const[m,s]=c.useState(""),i=p=>{s(p.target.value)};return r.jsxs(a,{searchById:"searchbystory-searchby",children:[r.jsxs(o,{id:"searchbystory-searchby",value:m,fullWidth:!1,select:!0,slotProps:{select:{onChange:i,labelId:"searchbystory-searchby-label"}},children:[r.jsx(t,{value:"Parameter 1",children:"Parameter 1"}),r.jsx(t,{value:"Parameter 2",children:"Parameter 2"}),r.jsx(t,{value:"Parameter 3",children:"Parameter 3"})]}),r.jsx(o,{id:"searchbystory-search",placeholder:"search",slotProps:{input:{startAdornment:r.jsx(l,{position:"start",component:"label",htmlFor:"searchbystory-search",children:r.jsx(n,{"aria-hidden":!1,titleAccess:"search"})})}}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
