import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{b as p}from"./Switch-DJUzqAAE.js";import"./FieldHelpIcon-C_RQexU-.js";import"./FormLabel-DqfJQ9tK.js";import"./Input-CIZdYeHT.js";import"./index-DSF7aQ5o.js";import{c as h}from"./index-BAgvEqVW.js";import{r as d}from"./index-BgYLq7fD.js";import{T as o}from"./TextField-DBCIsg8u.js";import{M as e}from"./MenuItem-Cszf_9D3.js";import{I as u}from"./InputAdornment-LPaTK-Af.js";import"./index-ChsGqxH_.js";import"./RadioGroup-CZeO-sCM.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./SwitchBase-CYtmyT40.js";import"./styled-CKuRQFSa.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./useFormControl-t_-EwZHM.js";import"./generateUtilityClasses-whvyra8-.js";import"./useControlled-DxC1uCGX.js";import"./ButtonBase-D97P5WV0.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./useForkRef-Dz4aGlyk.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BWWwXn7v.js";import"./SvgIcon-CiBNlF9H.js";import"./memoTheme-CpoNRPWX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-DIK8ekB4.js";import"./formControlState-Dq1zat_P.js";import"./Select-IoH-6RCp.js";import"./Menu-GaZ6ImQN.js";import"./index-DyJdRKzS.js";import"./useSlotProps-BmqT0tgx.js";import"./resolveComponentProps-CCNxqvxI.js";import"./Popover-CQBNnNRW.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-1VRyIerd.js";import"./Portal-C2J4q3Ji.js";import"./useTheme-Cx1wRXKO.js";import"./useTheme-Ib01SJ3a.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DdXvKv-Q.js";import"./getReactElementRef-Df0xbma2.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-4P5FqKie.js";import"./Modal-CezAubrN.js";import"./Backdrop-TXxSV-j9.js";import"./Fade-BCUt9uX4.js";import"./List-eXGzl-Dz.js";import"./utils-DoM3o7-Q.js";import"./OutlinedInput-B93mfhOp.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";import"./Stack-qbqOHiMo.js";import"./styled-Dbr83ACF.js";import"./useThemeProps-Do5o_sjG.js";import"./Divider-DJW73rZ3.js";import"./dividerClasses-0g4QmK6Y.js";import"./faCheck-BUdkY9Qv.js";import"./Switch-CyD42d4W.js";import"./index-CQspzllj.js";import"./Box-Dv31mJKI.js";import"./Grid2-JMPt1-k0.js";import"./isMuiElement-DiOAsJE6.js";import"./Container-DVbvSSVb.js";import"./index-DJKl12U0.js";import"./index-DnNfvsmq.js";import"./Tooltip-CIyLwlBA.js";import"./IconButton-D_kG6RhR.js";import"./CircularProgress-fcRSDrpN.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./FormControlLabel-BzV1MzKU.js";import"./Typography-COSof5sR.js";import"./FormLabel-BDxB3zbH.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./FormControl-BpN01e6f.js";import"./listItemTextClasses-DiJrtlJf.js";const Zr={title:"Form Components/FormUtils/SearchByFormGroup",component:p,tags:["autodocs"]},t={render:()=>{const[s,c]=d.useState(""),n=l=>{c(l.target.value)};return r.jsxs(p,{searchById:"searchbystory-searchby",children:[r.jsxs(o,{id:"searchbystory-searchby",value:s,fullWidth:!1,select:!0,slotProps:{select:{onChange:n,labelId:"searchbystory-searchby-label"}},children:[r.jsx(e,{value:"Parameter 1",children:"Parameter 1"}),r.jsx(e,{value:"Parameter 2",children:"Parameter 2"}),r.jsx(e,{value:"Parameter 3",children:"Parameter 3"})]}),r.jsx(o,{id:"searchbystory-search",placeholder:"search",slotProps:{input:{startAdornment:r.jsx(u,{position:"start",component:"label",htmlFor:"searchbystory-search",children:r.jsx(h,{"aria-hidden":!1,titleAccess:"search"})})}}})]})}};var m,a,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $r=["_SearchBy"];export{t as _SearchBy,$r as __namedExportsOrder,Zr as default};
