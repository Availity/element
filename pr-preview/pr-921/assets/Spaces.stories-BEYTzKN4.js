import{j as p}from"./iframe-DVscMr-A.js";import{P as e}from"./index-Biy9w6Pi.js";import{T as o}from"./index-DnN6X1jM.js";import{S as n}from"./index-MzdqpUr1.js";import{Q as d}from"./suspense-B9Mqc8FV.js";import{S as m,u as h,a as S}from"./Spaces-BMy8QwKf.js";import{Q as y}from"./queryClient-qkypoJP4.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CQbuUb0F.js";import"./useTheme-YOFO5C4H.js";import"./styled-DQ7SGoXr.js";import"./memoTheme-BWlAx59E.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CU66rNGi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-fBwpr0Q7.js";import"./Grid-QdwtLyJp.js";import"./isMuiElement-J0UlRgLR.js";import"./styled-BgmeM797.js";import"./Stack-D0PqJVFB.js";import"./Container-BdxHCcxG.js";import"./Img-DXln6NgM.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BVtPpz6B.js";import"./index-ZaasKGpT.js";import"./___vite-browser-external_commonjs-proxy-SNwcl5N-.js";import"./index-BZWhYBqj.js";import"./index-B4p1a0A6.js";import"./index-BeF-k_6p.js";import"./Tooltip-fH0F2vbV.js";import"./useSlot-CcjURTXg.js";import"./mergeSlotProps-2ZD1Wa3p.js";import"./useForkRef-D_2VvoZd.js";import"./useTimeout-zxUPRTwq.js";import"./useControlled-DNBFEVpl.js";import"./useEventCallback-yUNJdQIx.js";import"./getReactElementRef-BdBU57AF.js";import"./Portal-DpqzBqCy.js";import"./utils-3Br-A01V.js";import"./TransitionGroupContext-BG8XIQuv.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-pr2a7puG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dq1PDEwT.js";import"./ButtonBase-Rik4d0uu.js";import"./CircularProgress-DG2q71MX.js";import"./Button-C5YW8aoX.js";import"./index-BnViiisy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-W7CV7YPZ.js";import"./index-DkYDIVwJ.js";import"./Alert-Dlz8JxOy.js";import"./createSvgIcon-ZxKINfNn.js";import"./Close-C6zz0I54.js";import"./AlertTitle-DiICjCys.js";import"./Dialog-CmH4OmzV.js";import"./DialogContext-Dryr5KWB.js";import"./Modal-CHyTrEbM.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-VQSY8Csy.js";import"./Fade-BDZpyD8d.js";import"./DialogTitle-CYIgDCwM.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CMpjmCRG.js";import"./DialogContent-D5eFYn3T.js";import"./DialogContentText-CwDE9UXS.js";import"./index-CrcoPoGw.js";import"./index-EMPlJz1B.js";import"./LinearProgress-BzscWG0l.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
