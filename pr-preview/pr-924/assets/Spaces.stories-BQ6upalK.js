import{j as p}from"./iframe-DHkqGgbi.js";import{P as e}from"./Paper-fpDEzwjb.js";import{T as o}from"./Typography-BunlOy3h.js";import{S as n}from"./Stack-BuXw_RaK.js";import{Q as d}from"./suspense-U3tAolq1.js";import{a as m,u as h,b as S}from"./Spaces-Dt4VODJQ.js";import{Q as y}from"./queryClient-DHKEl5m0.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Cer6O457.js";import"./useTheme-DTNKpojL.js";import"./styled-BFLY3dn7.js";import"./memoTheme-vxEZSkJ8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-i96SYvKe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Stack-CO_r3hOW.js";import"./styled-HR_WeqBB.js";import"./index-_N_5Q_Bv.js";import"./index-BsDjwuR8.js";import"./___vite-browser-external_commonjs-proxy-C849EnNk.js";import"./index-BKtu72rt.js";import"./Dialog-B2BJxgSx.js";import"./IconButton-D5Zzj5BR.js";import"./Tooltip-YeMRA4-y.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./useTimeout-Bjfnw5AG.js";import"./useControlled-DlDi1BKb.js";import"./useEventCallback-LtXdtY4h.js";import"./getReactElementRef-BRoKhHqU.js";import"./Grow-CwxupgJl.js";import"./utils-BQBkKAg6.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./Popper-BUehIlZq.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CtpwjVP0.js";import"./useSlotProps-CZQ_I0Kw.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DmdwZwcg.js";import"./ButtonBase-BwqJJF5q.js";import"./CircularProgress-D39cxiof.js";import"./Actions-BhLIra-T.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./Dialog-B6jnYOkY.js";import"./DialogContext-2THUaLYj.js";import"./Modal-BHwxEFT_.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D3ggRYPY.js";import"./Fade-CqjyPa8q.js";import"./DialogActions-CF_HuenK.js";import"./DialogActions-BOlvPOmH.js";import"./DialogTitle-DbkwTTXp.js";import"./Alert-B8NdUQLL.js";import"./Form-CBGs9Zxl.js";import"./Alert-CHLZka3S.js";import"./createSvgIcon-BS4jmzRl.js";import"./Close-BGS6MUFg.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./Button-BBqhYll5.js";import"./Button-CHAexKoQ.js";import"./index-CrcoPoGw.js";import"./CircularProgress-RTrW8Hwj.js";import"./DialogContent-f_Cvi9f6.js";import"./DialogContent-BADAH0_5.js";import"./Box-BS7pU1R3.js";import"./Box-DMMQfXcC.js";import"./Grid-ArAcPf9E.js";import"./Grid-BLry6rK7.js";import"./isMuiElement-Bo_RUhfi.js";import"./toPropertyKey-DCwh5dYN.js";const Bp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: SpacesProps) => {
    return <QueryClientProvider client={queryClient}>
        <Spaces {...args}>
          <SpaceContainer>
            <Stack spacing={2}>
              <Paper>
                <Typography>Space 1 was passed in the props.</Typography>
                <SpaceComponent spaceId="1" />
              </Paper>
              <Paper>
                <Typography>Space 2 was fetched from the api via the spaceId passed in the props.</Typography>
                <SpaceComponent spaceId="2" />
              </Paper>
              <Paper>
                <Typography>Space 3 was not returned.</Typography>
                <SpaceComponent spaceId="3" />
              </Paper>
              <Paper>
                <Typography>Space 11 was fetched from the api via the payerId passed in the props.</Typography>
                <SpaceComponent spaceId="11" />
              </Paper>
            </Stack>
          </SpaceContainer>
        </Spaces>
      </QueryClientProvider>;
  },
  args: {
    spaces: [{
      id: '1',
      configurationId: '1',
      type: 'space',
      name: 'Space 1'
    }],
    spaceIds: ['2'],
    payerIds: ['a']
  }
}`,...i.parameters?.docs?.source}}};const Dp=["_Spaces"];export{i as _Spaces,Dp as __namedExportsOrder,Bp as default};
