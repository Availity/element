import{j as p}from"./iframe-DKPLEfLw.js";import{i as l}from"./index-zNtTlnyx.js";import{A as a}from"./AsyncAutocomplete-FGftRnHM.js";import{Q as c}from"./suspense-CgNMJq2z.js";import{Q as u}from"./queryClient-cJioRqLv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D0RdvGWv.js";import"./___vite-browser-external_commonjs-proxy-C7XsORAh.js";import"./index-BZbS_W-l.js";import"./_toKey-CghGTOo7.js";import"./Autocomplete-D4P0Mb3k.js";import"./index-BcQPeldO.js";import"./index-CX145kFJ.js";import"./index-DS1ZdVNz.js";import"./index-WRElMkUo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-FjAnPN_Y.js";import"./memoTheme-DCtqnaOZ.js";import"./styled-DmVvl1cy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BFdrycj9.js";import"./Tooltip-CV3fhIPH.js";import"./useTheme-9F3p9Qod.js";import"./useSlot-BRbtrhUo.js";import"./mergeSlotProps-DczvM8iT.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BBFL5x5N.js";import"./useTimeout-C_Ka5Mcj.js";import"./useControlled-RZIZY8-C.js";import"./useEventCallback-DDVZojhm.js";import"./getReactElementRef-BnAyG0-a.js";import"./Portal-DsulJ7FL.js";import"./utils-BvzjqUtG.js";import"./TransitionGroupContext-PAkUv-tF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-RoKiuIH8.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-8Ec7VkLh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-ChXh0SoD.js";import"./CircularProgress-QNpYF3E0.js";import"./Button-DWZjJ-VR.js";import"./index-Dn59n-rN.js";import"./Box-CZdlnD3e.js";import"./Grid-Bc7_QC4M.js";import"./styled-Wz6Z4Uga.js";import"./isMuiElement-Bob4bJgN.js";import"./Stack-ClwGR_Ch.js";import"./Container-DJ1Q8iJN.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BKHgwe-Y.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B1pwVxN7.js";import"./OutlinedInput-DIczrftV.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-y-N0h_1d.js";import"./Menu-B7TQxF7y.js";import"./Popover-DN87KpwA.js";import"./mergeSlotProps-AOTIRq8g.js";import"./Modal-DY-Qgl5b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-sfrV9DZb.js";import"./Fade-CbLeUs7S.js";import"./Paper-Ca4rgQEJ.js";import"./List-BjcIUzlW.js";import"./createSvgIcon-vtaDbQWp.js";import"./FormHelperText-BZehQ3tG.js";import"./FormControlLabel-BINRX9VO.js";import"./Typography-BTTsir7-.js";import"./Switch-BHae2QHc.js";import"./SwitchBase-XH4IthcC.js";import"./RadioGroup-I65WgL0c.js";import"./Radio-DOe0Rmw3.js";import"./FormGroup-C3uHp-KP.js";import"./Divider-CuebH3Dd.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-Cp8ZRfFR.js";import"./FormControl-DbYDmqwW.js";import"./Autocomplete-CaBbdKCQ.js";import"./Close-u1odCwv4.js";import"./usePreviousProps-BX-xXFjB.js";import"./Chip-Byj-O4jl.js";import"./ListSubheader-DzakDuAM.js";import"./useInfiniteQuery-DElwD55K.js";import"./useBaseQuery-DpYbr9Wl.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-DUqc1Y5x.js";import"./index-D_mIFYgG.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <QueryClientProvider client={client}>
        <AsyncAutocomplete {...args} />
      </QueryClientProvider>;
  },
  decorators: [],
  parameters: {
    controls: {
      exclude: /loading(?!Text)|options/
    }
  },
  args: {
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false
    },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 10,
    queryKey: 'example'
  }
}`,...(n=(e=i.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const ro=["_Async"];export{i as _Async,ro as __namedExportsOrder,oo as default};
