import{j as p}from"./iframe-Cyg9aVcX.js";import{P as e}from"./index-DqJSta0x.js";import{T as o}from"./index-BvOEaAPF.js";import{S as n}from"./index-DUYfXBKq.js";import{Q as d}from"./suspense-DAEUWCYa.js";import{S as m,u as h,a as S}from"./Spaces-C4jT0N7F.js";import{Q as y}from"./queryClient-ChOCnvEQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CQzqH1w0.js";import"./useTheme-CzQvHrc-.js";import"./styled-Bd0VbO2U.js";import"./memoTheme-jifZnr2J.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-fPTXF0ua.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DlTv5Oab.js";import"./Grid-ss4buRXG.js";import"./isMuiElement-D3GE3m2r.js";import"./styled-JRnDCPkO.js";import"./Stack-BB9tt9ZR.js";import"./Container-6TunXfMs.js";import"./Img-Brd4bYf3.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BJLRp70o.js";import"./index-jBj9nha1.js";import"./___vite-browser-external_commonjs-proxy-CZBD6-14.js";import"./index-CiELgXtT.js";import"./index-B4cj-WiM.js";import"./index-h-exa6rv.js";import"./Tooltip-B872xQRW.js";import"./useSlot-BxXD7OXK.js";import"./mergeSlotProps-cvNGDztE.js";import"./useForkRef-DU61cGWF.js";import"./useTimeout-D6StvTbU.js";import"./useControlled-LzVIFy4V.js";import"./useEventCallback-C8dig9Cp.js";import"./getReactElementRef-CtSLxyS5.js";import"./Portal-CbV_9_tw.js";import"./utils-B1U3sbvV.js";import"./TransitionGroupContext-Bf2CmkMl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3SvR_Jp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_0lSByq.js";import"./ButtonBase-BvuHtZ4U.js";import"./CircularProgress-DgTEISy3.js";import"./Button-BmGuU9Jv.js";import"./index-PRHxF3E5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-yyAmYjGv.js";import"./index-BgWZK982.js";import"./Alert-_xnyJqtg.js";import"./createSvgIcon-C4GbkCiK.js";import"./Close-kBPtxZgV.js";import"./AlertTitle-YpxCiLv7.js";import"./Dialog-LyP87nX6.js";import"./DialogContext-BfaK_CP1.js";import"./Modal-BKoLjwX6.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Dt1aobyE.js";import"./Fade-BlsC_kbX.js";import"./DialogTitle-C3w6pnFy.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BBUMMcla.js";import"./DialogContent-BILzUBhD.js";import"./DialogContentText-BP85pZld.js";import"./index-CrcoPoGw.js";import"./index-BUTK2S4k.js";import"./LinearProgress-Cx0oIAyt.js";const Ap={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Bp=["_Spaces"];export{i as _Spaces,Bp as __namedExportsOrder,Ap as default};
