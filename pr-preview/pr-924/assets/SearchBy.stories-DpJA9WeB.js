import{r as c,j as r}from"./iframe-BdOkmXSO.js";import{S as a}from"./SearchBy-ByUXVOTj.js";import{S as n}from"./Common-DofP6EnG.js";import{T as o}from"./TextField-BDHpIiju.js";import{M as t}from"./MenuItem-CjpUI41B.js";import{I as l}from"./InputAdornment-CE2XE6kN.js";import"./preload-helper-Dab_6GC_.js";import"./Stack-Bvj_iASD.js";import"./Stack-CkMIcmCj.js";import"./styled-ntycrLPJ.js";import"./styled-NjTlQkCK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./FormLabel-DvCW1uyR.js";import"./FieldHelpIcon-auv2yOGj.js";import"./index-CrcoPoGw.js";import"./Form-Dy8jxpW5.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./memoTheme-Dp1NrYg6.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./IconButton-Ci36e-XY.js";import"./Tooltip-5Kn3M0WA.js";import"./useTheme-DpzwBSOw.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./useTimeout-yhleNqH_.js";import"./useControlled-wRMaIAhC.js";import"./useEventCallback-Ci1dFtlM.js";import"./getReactElementRef-CAZnW1NE.js";import"./Grow-zcR73JmX.js";import"./utils-BBZ_5XBR.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./Popper-CsnU-V5Y.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Df3mT0t7.js";import"./useSlotProps-0Tuv8-jv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C66xLdI-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0mr5YFJ.js";import"./CircularProgress-BtHd2z-U.js";import"./FormControl-CfvQd07B.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B7U-TuVK.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-v3aJqbSB.js";import"./FormGroup-BPezQOgQ.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./OutlinedInput-DKeYBi_m.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-BHp_jWyp.js";import"./SelectFocusSourceContext-CO0vp2u8.js";import"./Popover-Dmejw1yb.js";import"./mergeSlotProps-CGT3lxwg.js";import"./Modal-C2ZApFn6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHtRMzsl.js";import"./Fade-BJ4yz3if.js";import"./Paper-X002pFu5.js";import"./List-DHFLMipa.js";import"./createSvgIcon-B1lFLeS5.js";import"./FormHelperText-BjzLojp-.js";import"./listItemIconClasses-BWL98Y3T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./dividerClasses-qU9lkgJy.js";import"./Typography-Ba-r-irp.js";const Ar={title:"Form Components/Uncontrolled FormUtils/SearchByFormGroup",component:a,tags:["autodocs"]},e={render:()=>{const[m,s]=c.useState(""),i=p=>{s(p.target.value)};return r.jsxs(a,{searchById:"searchbystory-searchby",children:[r.jsxs(o,{id:"searchbystory-searchby",value:m,fullWidth:!1,select:!0,slotProps:{select:{onChange:i,labelId:"searchbystory-searchby-label"}},children:[r.jsx(t,{value:"Parameter 1",children:"Parameter 1"}),r.jsx(t,{value:"Parameter 2",children:"Parameter 2"}),r.jsx(t,{value:"Parameter 3",children:"Parameter 3"})]}),r.jsx(o,{id:"searchbystory-search",placeholder:"search",slotProps:{input:{startAdornment:r.jsx(l,{position:"start",component:"label",htmlFor:"searchbystory-search",children:r.jsx(n,{"aria-hidden":!1,titleAccess:"search"})})}}})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
