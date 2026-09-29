import{j as p}from"./iframe-Cn9qPtrp.js";import{P as e}from"./index-CYG2bEQ2.js";import{T as o}from"./index-D2wuP2WF.js";import{S as n}from"./index-CyKw9SYR.js";import{Q as d}from"./suspense-Bo7hNKC-.js";import{S as m,u as h,a as S}from"./Spaces-Cqiorz5R.js";import{Q as y}from"./queryClient-nCrMWHvS.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DwYDYFlD.js";import"./useTheme-B6YVOUYP.js";import"./styled-D2CDconu.js";import"./memoTheme-6yds69P_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CDKB6cUx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CeYPkCsw.js";import"./Grid-BbGFtGav.js";import"./isMuiElement-DcGc7pTf.js";import"./styled-DhBMIDqB.js";import"./Stack-DmctAkNR.js";import"./Container-y4mOFKcU.js";import"./Img-D4B1EV1z.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-C15uwsx2.js";import"./index-M7nj2U81.js";import"./___vite-browser-external_commonjs-proxy-CwPU4RYd.js";import"./index-CY8VLdQ2.js";import"./index-BSJPoAb1.js";import"./index-BIlLMFwD.js";import"./IconButton-BEbO5w96.js";import"./ButtonBase-2oFpmJBY.js";import"./useTimeout-BoQb9RDS.js";import"./TransitionGroupContext-CFwcVVqT.js";import"./useForkRef-Dq6ZsqmR.js";import"./useEventCallback-CiCWuPbq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DAUt--dg.js";import"./Tooltip-DKs25lhA.js";import"./useSlot-Cknh0r9X.js";import"./mergeSlotProps-Bjka9Klf.js";import"./useControlled-BIT0kvxY.js";import"./getReactElementRef-6Fd7mh7z.js";import"./Portal-BWZt9Zv4.js";import"./utils-BlV9er3y.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-yJhFLJQp.js";import"./Button-Cp2YlGAc.js";import"./index-DWYQ4eQk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-LXn_mqm4.js";import"./index-BtiSNHwW.js";import"./Alert-Cjy1W0RE.js";import"./createSvgIcon-CK6UXRVe.js";import"./Close-BVHhi-vz.js";import"./AlertTitle-Apz-Jve3.js";import"./Dialog-ClohXGx_.js";import"./DialogContext-BnPDh7N6.js";import"./Modal-DH6vGrJY.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CvWpQ392.js";import"./Fade-BsEF4Oay.js";import"./DialogTitle-CflXqapM.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DYgwH4Ja.js";import"./DialogContent-DDfpBp7M.js";import"./DialogContentText-DXWokGfD.js";import"./index-CrcoPoGw.js";import"./index-Bp3ZxG3_.js";import"./LinearProgress-DdJFPbPB.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
