import{j as p}from"./iframe-DTy-Hi1D.js";import{P as e}from"./index-CQ9SzY7-.js";import{T as o}from"./index-B3nHNvBt.js";import{S as n}from"./index-zuOxgOiJ.js";import{Q as d}from"./suspense-BF7yCdeh.js";import{S as m,u as h,a as S}from"./Spaces-CczIY7fD.js";import{Q as y}from"./queryClient-HA34lCYp.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BB7D87hg.js";import"./useTheme-D2uWiRt2.js";import"./styled-aP0uaM-i.js";import"./memoTheme-BG1xBytH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BE1U26X8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BiTKfYdJ.js";import"./Grid-9G99kq7Q.js";import"./isMuiElement-BqP85GjQ.js";import"./styled-CiCMHiUo.js";import"./Stack-D5xuPFAT.js";import"./Container-CKdO9iiE.js";import"./Img-2c_gkbhg.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CsKsuRu9.js";import"./index-2vGFGfAT.js";import"./___vite-browser-external_commonjs-proxy-D_SPfJw6.js";import"./index-BAAVGDDZ.js";import"./index-ZoSj4EOM.js";import"./index-BWwQVXX2.js";import"./IconButton-CZkpNN92.js";import"./ButtonBase-DQHg31rx.js";import"./useTimeout-Dox0L-0x.js";import"./TransitionGroupContext-vVRi092a.js";import"./useForkRef-Cs-hla5u.js";import"./useEventCallback-wWQn7yuE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dsur0AFP.js";import"./Tooltip-DHFGNIkU.js";import"./useSlot-Bv56ZHL8.js";import"./mergeSlotProps-DbXyWffN.js";import"./useControlled-DJ-ZRmZ2.js";import"./getReactElementRef-Czal8mnO.js";import"./Portal-BwzhUyNs.js";import"./utils-UH3J-pbT.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-i2bvpF4l.js";import"./Button-BSzYbaIQ.js";import"./index-DJUckNHv.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-3YRNiFr2.js";import"./index-KzqpTUg2.js";import"./Alert-C_lJpKGr.js";import"./createSvgIcon-Bsd6X5Qz.js";import"./Close-CdcIqPzl.js";import"./AlertTitle-DRuJcrl1.js";import"./Dialog-CZK5k_9o.js";import"./DialogContext-DXEWJCdV.js";import"./Modal-C1xsDPMc.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-7k1loi6N.js";import"./Fade-CkUvZM_R.js";import"./DialogTitle-BQ0fJZe_.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-plwS58os.js";import"./DialogContent-BzcDwXXU.js";import"./DialogContentText-CgVpiueP.js";import"./index-CrcoPoGw.js";import"./index-BE0tcAj7.js";import"./LinearProgress-DQF7aLfi.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
