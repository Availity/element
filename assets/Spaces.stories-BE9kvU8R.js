import{j as p}from"./iframe-Bzxq4khQ.js";import{P as e}from"./index-Buh0WhxV.js";import{T as o}from"./index-CErBQ4Jd.js";import{S as n}from"./index-DXLpfNz7.js";import{Q as d}from"./suspense-ApQII9Jb.js";import{S as m,u as h,a as S}from"./Spaces-DamyCLqp.js";import{Q as y}from"./queryClient-f0sF00C8.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-i7wmImU7.js";import"./useTheme-CLJ35KcV.js";import"./styled-BSgFKBik.js";import"./memoTheme-CkAjAg3h.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-B9ybtieC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Bmi0pHZf.js";import"./Grid-DBmnTLkS.js";import"./isMuiElement-BFlpbPNJ.js";import"./styled-zIwGk7GA.js";import"./Stack-C6SNpi-l.js";import"./Container-C5W7aLU7.js";import"./Img-D-9IaQXO.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-pD7x_zqN.js";import"./index-CUQsHTQm.js";import"./___vite-browser-external_commonjs-proxy-C1hYxkYC.js";import"./index-BLcjZxhx.js";import"./index-DT3hn-7t.js";import"./index-HZB2unx2.js";import"./Tooltip--PgUuozR.js";import"./useSlot-cTDCwMnT.js";import"./mergeSlotProps-BP1q_mR2.js";import"./useForkRef-CyBmAmq2.js";import"./useTimeout-D8n7EMSe.js";import"./useControlled-BxlFJ8nt.js";import"./useEventCallback-Zn8Kx7hu.js";import"./getReactElementRef-C4G1HZdF.js";import"./Portal-DrMzc0O0.js";import"./utils-BhtHTj_i.js";import"./TransitionGroupContext-4l5GgSIy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dxsb08A1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CbyRNbtW.js";import"./ButtonBase-mnH_3Wha.js";import"./CircularProgress-OhY0Ky5x.js";import"./Button-COtcAXVl.js";import"./index-C1aSd5b5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DbWIKXvI.js";import"./index-DsDlPsDu.js";import"./Alert-DCVSEwDs.js";import"./createSvgIcon-Bd4vIYa-.js";import"./Close-C1tpug76.js";import"./AlertTitle-tUAT_83t.js";import"./Dialog-DfaOlGDQ.js";import"./DialogContext-D3LFRhqK.js";import"./Modal-DYASwYOM.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-_k8xef8N.js";import"./Fade-DV9rGJYk.js";import"./DialogTitle-CcV8raZq.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-B7KV8GP2.js";import"./DialogContent-BpY93Wui.js";import"./DialogContentText-H5peRBQi.js";import"./index-CrcoPoGw.js";import"./index-ezCSvpno.js";import"./LinearProgress-eImzABDz.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
