import{r as c,j as r}from"./iframe-D9VxGUXm.js";import{S as a}from"./SearchBy-MHxhsdSb.js";import{S as n}from"./Common-BJBtPzYe.js";import{T as o}from"./TextField-Cst3Rcaq.js";import{M as t}from"./MenuItem-QbVoyqaY.js";import{I as l}from"./InputAdornment-tbygs9nj.js";import"./preload-helper-Dab_6GC_.js";import"./Stack-DO9t3oOz.js";import"./Stack-NbPl_tL-.js";import"./styled-D8Xb_hHx.js";import"./styled-N1qat-rE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./FormLabel-DVupU6Lh.js";import"./FieldHelpIcon-BVNkABm1.js";import"./index-CrcoPoGw.js";import"./Form-BG5Mtcu6.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./memoTheme-CUWoCynM.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useTheme-B41ItSj5.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./useTimeout-CCeZqBN_.js";import"./useControlled-nlFUsoSS.js";import"./useEventCallback-BrENIvCl.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./utils-Bcz57uZ2.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BrelKzp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IEWOwJJy.js";import"./CircularProgress-rsn-iR-g.js";import"./FormControl-B4iyM4I1.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D5KNipz4.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-3elNFQAm.js";import"./FormGroup-joIkhTNn.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./OutlinedInput-Dr4cfOVe.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-CN5D_YTR.js";import"./SelectFocusSourceContext-BhxM5Ro2.js";import"./Popover-R-MCXb6u.js";import"./mergeSlotProps-JAhzVB8J.js";import"./Modal-B8lqQyLL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DWoUx2Mm.js";import"./Fade-4pWY_yaW.js";import"./Paper-oCFHvNnf.js";import"./List-VhCI1ZGj.js";import"./createSvgIcon-CuKrs_jq.js";import"./FormHelperText-BXWMYJyA.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Typography-mI_XzOBj.js";const Ar={title:"Form Components/Uncontrolled FormUtils/SearchByFormGroup",component:a,tags:["autodocs"]},e={render:()=>{const[m,s]=c.useState(""),i=p=>{s(p.target.value)};return r.jsxs(a,{searchById:"searchbystory-searchby",children:[r.jsxs(o,{id:"searchbystory-searchby",value:m,fullWidth:!1,select:!0,slotProps:{select:{onChange:i,labelId:"searchbystory-searchby-label"}},children:[r.jsx(t,{value:"Parameter 1",children:"Parameter 1"}),r.jsx(t,{value:"Parameter 2",children:"Parameter 2"}),r.jsx(t,{value:"Parameter 3",children:"Parameter 3"})]}),r.jsx(o,{id:"searchbystory-search",placeholder:"search",slotProps:{input:{startAdornment:r.jsx(l,{position:"start",component:"label",htmlFor:"searchbystory-search",children:r.jsx(n,{"aria-hidden":!1,titleAccess:"search"})})}}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
