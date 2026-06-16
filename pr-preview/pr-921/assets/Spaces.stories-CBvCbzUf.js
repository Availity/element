import{j as p}from"./iframe-D__S4UWJ.js";import{P as e}from"./index-BhRHEJUr.js";import{T as o}from"./index-DoXDZQMb.js";import{S as n}from"./index-DMk5qu1-.js";import{Q as d}from"./suspense-BQU9mLju.js";import{S as m,u as h,a as S}from"./Spaces-BOnTt3Kq.js";import{Q as y}from"./queryClient-D2jtdr_V.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Cbe2-SWa.js";import"./useTheme-CFaiP_LB.js";import"./styled-D9hsOvpf.js";import"./memoTheme-BV959hj8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-jktlZrXz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BOn3j62W.js";import"./Grid-BBYwbGJ2.js";import"./isMuiElement-BbpHSvRS.js";import"./styled-Bi8w4HDu.js";import"./Stack-CGHwgn-1.js";import"./Container-B4RgbXyO.js";import"./Img-DF1zM8uP.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-C4VUnf3P.js";import"./index-CBSryq4n.js";import"./___vite-browser-external_commonjs-proxy-Cq4iaMOo.js";import"./index-Cr0Duiqm.js";import"./index-DE3xeXyg.js";import"./index-CSzUZNdV.js";import"./Tooltip-CiiYXVhS.js";import"./useSlot-O8ollNDw.js";import"./mergeSlotProps-D3BIdMsf.js";import"./useForkRef-BqPQmHw4.js";import"./useTimeout-92omNL17.js";import"./useControlled-jwoPGZ3a.js";import"./useEventCallback-DJS3GGm_.js";import"./getReactElementRef-CXYGkVyS.js";import"./Portal-DQUO7uTD.js";import"./utils-qh6k9bbM.js";import"./TransitionGroupContext-y7HMp-IG.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwqG8d0v.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CNhmLG-N.js";import"./ButtonBase-Ci_mfbwX.js";import"./CircularProgress-haj7VCd3.js";import"./Button-CFqvl5Id.js";import"./index-DhycCYh-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-XbFZbbsX.js";import"./index-C97hzXYs.js";import"./Alert-Ba7KcuDU.js";import"./createSvgIcon-CjZPmBcj.js";import"./Close-j7BAIMlS.js";import"./AlertTitle-CObgtCPu.js";import"./Dialog-jJgjL2lO.js";import"./DialogContext-VfWwzW6H.js";import"./Modal-B4jLPaJ1.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B_zkZsEU.js";import"./Fade-BYuTC5N7.js";import"./DialogTitle-8skvs4cK.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BX2agnny.js";import"./DialogContent-CELJEtCY.js";import"./DialogContentText-BVGCccHF.js";import"./index-CrcoPoGw.js";import"./index-BjZt6pdB.js";import"./LinearProgress-GxLJPc2O.js";const Ap={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
