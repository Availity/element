import{j as p}from"./iframe-CEMXsp8C.js";import{P as e}from"./index-D4f0k3bZ.js";import{T as o}from"./index-NjRHlmkG.js";import{S as n}from"./index-DIoqnUOe.js";import{S as m,u as d,a as h}from"./Spaces-BSwL8JB3.js";import{Q as S}from"./suspense-Zp53cwBn.js";import{Q as y}from"./queryClient-DVK3X9OW.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CpiR7IfR.js";import"./useTheme-DmimCZ1K.js";import"./styled-qsRty7dq.js";import"./memoTheme-l-GP-bwx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-aAxGDRe7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BEsP6iEE.js";import"./Grid-DNEcM-zX.js";import"./isMuiElement-D0FqNR9x.js";import"./styled-Dz3b5a5M.js";import"./Stack-Ct51BpAL.js";import"./Container-DBKsfXDc.js";import"./index-tKRfahf_.js";import"./index-mtCs71Oj.js";import"./___vite-browser-external_commonjs-proxy-Cuc_yKOi.js";import"./index-CAtWx5sm.js";import"./_toKey-BkjVo4KL.js";import"./index-BWPdTPzb.js";import"./index-CwlIgXTJ.js";import"./Tooltip-DE_9rsm0.js";import"./useSlot-CsbKhATt.js";import"./mergeSlotProps-CZJ2E7Ux.js";import"./useForkRef-DoG2Adio.js";import"./useTimeout-Dr5vw9MW.js";import"./useControlled-BuTFob83.js";import"./useEventCallback-DFupxdy5.js";import"./getReactElementRef-7aOdyAnj.js";import"./Portal-Cd1GL2Ny.js";import"./utils-uO-Y6Lu-.js";import"./TransitionGroupContext-CFI9AaDj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Uj4Ej5E1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CI45TlqX.js";import"./ButtonBase-DV3wZvw5.js";import"./CircularProgress-C6UU3hYL.js";import"./Button-BggChkC7.js";import"./index-D94lOHFj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-nYHR5krO.js";import"./index-BXp-5_c5.js";import"./Alert-Cp904QjV.js";import"./createSvgIcon-f84r-UoO.js";import"./Close-Dcuk3jY8.js";import"./AlertTitle-C-E-bbtt.js";import"./Dialog-B6bQufg3.js";import"./DialogContext-CI2pNae4.js";import"./Fade-DiSnUXPW.js";import"./Modal-C_PIWu30.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-De3axDf6.js";import"./DialogTitle-BeZkwWe_.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CbgbzWQ-.js";import"./DialogContent-Bmv4Qjdw.js";import"./DialogContentText-DF07WE8n.js";import"./index-BiBDMnSv.js";import"./Img-C4DEtNUx.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-jJd_CsJn.js";import"./LinearProgress-ClU18ASp.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Fp=["_Spaces"];export{i as _Spaces,Fp as __namedExportsOrder,Dp as default};
