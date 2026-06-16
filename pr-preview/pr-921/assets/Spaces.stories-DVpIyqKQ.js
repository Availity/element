import{j as p}from"./iframe-3dkTY0jX.js";import{P as e}from"./index-C3qj5OeK.js";import{T as o}from"./index-C6l436Fc.js";import{S as n}from"./index-DIxClpYS.js";import{Q as d}from"./suspense-LImw3zVj.js";import{S as m,u as h,a as S}from"./Spaces-CPZK63WB.js";import{Q as y}from"./queryClient-BmBZgBhV.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-v-wIRd8c.js";import"./useTheme-DqSWHq5v.js";import"./styled-DpUmhVNm.js";import"./memoTheme-ClYOyAcO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BaJfZ2Cx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-8YbrThzE.js";import"./Grid-CLckDB5v.js";import"./isMuiElement-Bd2bXImB.js";import"./styled-BLuOjd1d.js";import"./Stack-C6U2vEDQ.js";import"./Container-DbHjUNkP.js";import"./Img-B9TerjWd.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BlL9977D.js";import"./index-InsQLx3y.js";import"./___vite-browser-external_commonjs-proxy-XgDoKZSQ.js";import"./index-CmY9jp0R.js";import"./index-_Yu8AgEp.js";import"./index-B-aFmFgv.js";import"./Tooltip-gP38pAtd.js";import"./useSlot-rqG-d0ju.js";import"./mergeSlotProps-DA590uQB.js";import"./useForkRef-D98SVFOp.js";import"./useTimeout-C1Q0-pFI.js";import"./useControlled-BRptJIgz.js";import"./useEventCallback-DqxbtF2b.js";import"./getReactElementRef-D5Pt6kS1.js";import"./Portal-COcgB0Km.js";import"./utils-q4WRQ2GW.js";import"./TransitionGroupContext-CenxJGkC.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-cunvSKS2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-NndX5job.js";import"./ButtonBase-CGwtNBxW.js";import"./CircularProgress-BLVqZX76.js";import"./Button-llKR0QUB.js";import"./index-CuTsacvC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-iH6sJxt7.js";import"./index-BsDvmNwI.js";import"./Alert-Dtopc_5C.js";import"./createSvgIcon-BvVOPXpo.js";import"./Close-BkClo0wN.js";import"./AlertTitle-DvsKm3zA.js";import"./Dialog-OMtxrCpN.js";import"./DialogContext-D1HKkYnr.js";import"./Modal-C04Dtpn0.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DwY4Idrm.js";import"./Fade-DoGbMPsZ.js";import"./DialogTitle-D4oR3dDo.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-D7ksi_DQ.js";import"./DialogContent-DUIPpMzL.js";import"./DialogContentText-D0CxHwLU.js";import"./index-CrcoPoGw.js";import"./index-CZVT4NDn.js";import"./LinearProgress-BCfOsKp7.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
