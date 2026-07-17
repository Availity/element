import{j as p}from"./iframe-DFjmTghm.js";import{P as e}from"./index-Cr0a1tQl.js";import{T as o}from"./index-Fpxu3GdQ.js";import{S as n}from"./index-CRzHfBAS.js";import{Q as d}from"./suspense-CwAU2u64.js";import{S as m,u as h,a as S}from"./Spaces-DF2jzHK1.js";import{Q as y}from"./queryClient-CwNWR9I6.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DDJAWKgV.js";import"./useTheme-C6J0_U3R.js";import"./styled-Bs6aTLdD.js";import"./memoTheme-BQvuiRMw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-B0pIYi8P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CxjVphfW.js";import"./Grid-88wyRLeR.js";import"./isMuiElement-BTwBnJKE.js";import"./styled-tzudnm-b.js";import"./Stack-CWk2zcdQ.js";import"./Container-BIn0b_Bo.js";import"./Img-ChgRoHpk.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DuZcS_m3.js";import"./index-D9CAbCnG.js";import"./___vite-browser-external_commonjs-proxy-BvOHJjar.js";import"./index-DMhxb2GA.js";import"./index-DnOyq_S8.js";import"./index-C9VG5BR5.js";import"./Tooltip-BpELumoD.js";import"./useSlot-Cc0TH-P4.js";import"./mergeSlotProps-dd0y0IZz.js";import"./useForkRef-Cm1smsVr.js";import"./useTimeout-DYSzpSzE.js";import"./useControlled-_CojnKOO.js";import"./useEventCallback-DYc4zMoP.js";import"./getReactElementRef-dZ7e7R7I.js";import"./Portal-6A9k5eoS.js";import"./utils-DG8dL2Al.js";import"./TransitionGroupContext-CFoyGAe4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BPRZd4R9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D8Ip9ZNp.js";import"./ButtonBase-WbBW4SNX.js";import"./CircularProgress-DAp6FT1u.js";import"./Button-Di2tppwh.js";import"./index-BziNu4GU.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-loQPFd-T.js";import"./index-C6knF2tB.js";import"./Alert-DxfUf593.js";import"./createSvgIcon-BZFSDOFb.js";import"./Close-DTbS5nYR.js";import"./AlertTitle-FtgkZIT-.js";import"./Dialog-Qi6iEvfU.js";import"./DialogContext-C_7rav8i.js";import"./Modal-DeIW4txF.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Behw_zi2.js";import"./Fade-BDQ0ytsL.js";import"./DialogTitle-DdLClzih.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-VlTltgVt.js";import"./DialogContent-NuW9wzed.js";import"./DialogContentText-Bq5xlbu5.js";import"./index-CrcoPoGw.js";import"./index-CPnAl5Bc.js";import"./LinearProgress-bElSy5L6.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
