import{j as p}from"./iframe-Cnf77ZIg.js";import{P as e}from"./index-JwqJeIy4.js";import{T as o}from"./index-qa_smkpe.js";import{S as n}from"./index-ORdrVCt-.js";import{Q as d}from"./suspense-CZUhSpM1.js";import{S as m,u as h,a as S}from"./Spaces-BaZLIfj2.js";import{Q as y}from"./queryClient-v8dFEASw.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DkkA_EpG.js";import"./useTheme-fbZoBAbS.js";import"./styled-D7PTo4Yf.js";import"./memoTheme-rtNk9j34.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-C7kdML4f.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-ChPufWLv.js";import"./Grid-CrhtQkIm.js";import"./isMuiElement-DBtd91O4.js";import"./styled-BdiKer14.js";import"./Stack-CAuZPL_Y.js";import"./Container-Bpufyj5a.js";import"./Img-CoL2g5nf.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CsFiSTiB.js";import"./index-BlDkkMZd.js";import"./___vite-browser-external_commonjs-proxy-Dxxm6Cdx.js";import"./index-BIVoh9iT.js";import"./index-DS8cBfvE.js";import"./index-BbhRJntT.js";import"./Tooltip-RxJZvyE-.js";import"./useSlot-UCTcrF1q.js";import"./mergeSlotProps-CtuEIw1c.js";import"./useForkRef-CwrFiSR5.js";import"./useTimeout-DDbT1lIl.js";import"./useControlled-CSfvqfPH.js";import"./useEventCallback-C-Qx89z1.js";import"./getReactElementRef-CMOtQl0I.js";import"./Portal-_ErOQT1L.js";import"./utils-C9oXke8q.js";import"./TransitionGroupContext-PCEy4ISN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-9tgtsXjP.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-De56WQhg.js";import"./ButtonBase-Cb27w-UN.js";import"./CircularProgress-DjiS4vOo.js";import"./Button-B1EPaR8-.js";import"./index-CCvoZ_po.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8TdQCTz.js";import"./index-DMVT-DZm.js";import"./Alert-36M9bbwj.js";import"./createSvgIcon-C5tcB9_e.js";import"./Close-Ds_eDuIS.js";import"./AlertTitle-BusZoyFf.js";import"./Dialog-DJLkuHvF.js";import"./DialogContext-DTiRr6-E.js";import"./Modal-BsxKKYBP.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CwjXL11W.js";import"./Fade-DcdXt8nB.js";import"./DialogTitle-Br2vWQHN.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BM7mbZ-H.js";import"./DialogContent-Dgr82_7F.js";import"./DialogContentText-BofSLZ3K.js";import"./index-CrcoPoGw.js";import"./index-BMWiTkiK.js";import"./LinearProgress-DEApOlLh.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
