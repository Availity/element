import{j as p}from"./iframe-BfiSjCZE.js";import{P as e}from"./index-BqDXSYAc.js";import{T as o}from"./index-Ditxfwx6.js";import{S as n}from"./index-DXU92sR7.js";import{Q as d}from"./suspense-CDgsDqgL.js";import{S as m,u as h,a as S}from"./Spaces-DZ8vWGpk.js";import{Q as y}from"./queryClient-CRAw8wt9.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-8FyfnLjY.js";import"./useTheme-CyCmmmWE.js";import"./styled-B9LoXHeR.js";import"./memoTheme-Bf2lNlfa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-C4HmXqwR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CRTcjAl_.js";import"./Grid-C2RK_1Jw.js";import"./isMuiElement-CIl3go_L.js";import"./styled-Bty96-Ys.js";import"./Stack-ggz2xYsp.js";import"./Container-B6cEEQtr.js";import"./Img-Iwq40aZ0.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BHDw3JNc.js";import"./index-ClgzThDV.js";import"./___vite-browser-external_commonjs-proxy-Dzcmey56.js";import"./index-CY8VLdQ2.js";import"./index-Df8po9rv.js";import"./index-BnEi8s_n.js";import"./IconButton-CFfT0ndL.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useForkRef-KHwM-Xb0.js";import"./useEventCallback-BRDDRqyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFM5h0gz.js";import"./Tooltip-DQOY4bTe.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useControlled-DuHd5Dfi.js";import"./getReactElementRef-DrqUH2UJ.js";import"./Portal-1iQSKTOk.js";import"./utils-CZVImzMM.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DsKdZe-B.js";import"./Button-CWR2xa5V.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./index-Bonuro7n.js";import"./Alert-u07sRa0D.js";import"./createSvgIcon-DV4tT70v.js";import"./Close-BzO8XwWJ.js";import"./AlertTitle-DWwLMUut.js";import"./Dialog-CvJ5e9p6.js";import"./DialogContext-PF2mgkVf.js";import"./Modal-DeYFWYjf.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CyrGgScl.js";import"./Fade-DEFCsiCh.js";import"./DialogTitle-jl_6SsOT.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DPk6XKWc.js";import"./DialogContent-DQw7LsnW.js";import"./DialogContentText-CM8BuKWB.js";import"./index-MVgG_W0q.js";import"./index-CtZ5YxOx.js";import"./LinearProgress-H60kzDfO.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
