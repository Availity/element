import{j as p}from"./iframe-C9_PxSGQ.js";import{P as e}from"./index-Bjbz6YkZ.js";import{T as o}from"./index-Bwm7V2AF.js";import{S as n}from"./index-Cwp1bTGK.js";import{Q as d}from"./suspense-DqW36k_m.js";import{S as m,u as h,a as S}from"./Spaces-DG_Woq_p.js";import{Q as y}from"./queryClient-amPvOwks.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DGceIsLw.js";import"./useTheme-BHbpGC30.js";import"./styled-B-vqXkzy.js";import"./memoTheme-BxvcW3UF.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-B7ymJCK8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DwMYriWl.js";import"./Grid-AdyG_hrd.js";import"./isMuiElement-BE5icW1i.js";import"./styled-v5MGqYmj.js";import"./Stack-BEdSkyO_.js";import"./Container-DSjJo15B.js";import"./Img-DEzeZh1x.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DD4KIobM.js";import"./index-Ckji6gEQ.js";import"./___vite-browser-external_commonjs-proxy-BxZYR8lA.js";import"./index-B9N7h3aW.js";import"./index-Cc70JneT.js";import"./index-ButV5MJr.js";import"./Tooltip-FRBJUwm-.js";import"./useSlot-B-bGbgrQ.js";import"./mergeSlotProps-DQ8_Kw8O.js";import"./useForkRef-CmIALVnC.js";import"./useTimeout-BMn8x6pQ.js";import"./useControlled-BGxEnoNZ.js";import"./useEventCallback-DieoYw-U.js";import"./getReactElementRef-on-DwLqm.js";import"./Portal-Ct4gHjrk.js";import"./utils-8dHd4F9E.js";import"./TransitionGroupContext-BZ4pLHPO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDX3RUX-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BjLNslZW.js";import"./ButtonBase-k4M9aDLt.js";import"./CircularProgress-vDDdOi_d.js";import"./Button-DtK3QmjS.js";import"./index-Ddg0Heb3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-FGOQRPT3.js";import"./index-CyXu8Co-.js";import"./Alert-CHDB4Z-1.js";import"./createSvgIcon-DoDU4gSx.js";import"./Close-B3zopXB2.js";import"./AlertTitle-DlX4lgRk.js";import"./Dialog-DReqAjOE.js";import"./DialogContext-D3jzEjtS.js";import"./Modal-CUp8vkO1.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-5mRpAKll.js";import"./Fade-BLrbHvJ9.js";import"./DialogTitle-DGEU4tGv.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DiUcTAkS.js";import"./DialogContent-BZkVfSmW.js";import"./DialogContentText-C_1ulQgd.js";import"./index-CrcoPoGw.js";import"./index-BTXQ8Bkb.js";import"./LinearProgress-mEctHgXc.js";const Ap={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
