import{j as p}from"./iframe-7yTZJyI8.js";import{P as e}from"./index-BBKrIaOg.js";import{T as o}from"./index-Fm3BvXJg.js";import{S as n}from"./index-DoZlsXSq.js";import{Q as d}from"./suspense-Bh2RuJJ8.js";import{S as m,u as h,a as S}from"./Spaces-B3HKpGqz.js";import{Q as y}from"./queryClient-COvBtDSr.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DkH-Q5xC.js";import"./useTheme-BQI76UIF.js";import"./styled-BMlFG2th.js";import"./memoTheme-CIMTQhyT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Bz3seEIw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BsPtR0uw.js";import"./Grid-CKHq_-iw.js";import"./isMuiElement-BI6Pjydy.js";import"./styled-Cs8_Hcz2.js";import"./Stack-CZJNS7pW.js";import"./Container-CJPQZB9X.js";import"./Img-BvxWw5CB.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-e3xISyZQ.js";import"./index-7SoByLum.js";import"./___vite-browser-external_commonjs-proxy-C8gZ9b-f.js";import"./index-CY8VLdQ2.js";import"./index-ByzBKVJE.js";import"./index-BAPd2OJx.js";import"./IconButton-ffMIHdaJ.js";import"./ButtonBase-DlKrHxyr.js";import"./useTimeout-DDTRmv4f.js";import"./TransitionGroupContext-BVN7PaEo.js";import"./useForkRef-CH4SD_Tq.js";import"./useEventCallback-B8agtspF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CFzFWCR0.js";import"./Tooltip-BDwmcAHG.js";import"./useSlot-CCUJR_Dn.js";import"./mergeSlotProps-D3aTQwfn.js";import"./useControlled-C9ki-RMb.js";import"./getReactElementRef-BidH7fq7.js";import"./Portal-B1bcjcbG.js";import"./utils-C-JIMqUV.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-EhI9vhRh.js";import"./Button-BK3WQXmQ.js";import"./index-LWy-RhUk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BfOELIkm.js";import"./index-BkRyQWMH.js";import"./Alert-CiH122NO.js";import"./createSvgIcon-D2n64X_N.js";import"./Close-DB3c58TO.js";import"./AlertTitle-DEYHWkmv.js";import"./Dialog-DBMDQkqK.js";import"./DialogContext-DXuqlhKC.js";import"./Modal-CedBjRzI.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Bj6XerGx.js";import"./Fade-DH1Krrsi.js";import"./DialogTitle-pUZT4fkP.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-0rzKco1g.js";import"./DialogContent-BNyQ0H0P.js";import"./DialogContentText-Dk_zgkh9.js";import"./index-MVgG_W0q.js";import"./index-DLpzEyrN.js";import"./LinearProgress-eb50viX5.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ap=["_Spaces"];export{i as _Spaces,Ap as __namedExportsOrder,zp as default};
