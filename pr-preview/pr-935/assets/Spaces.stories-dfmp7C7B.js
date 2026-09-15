import{j as p}from"./iframe-DF0Rdha4.js";import{P as e}from"./index-4RjwuuOq.js";import{T as o}from"./index-tdaHATjI.js";import{S as n}from"./index-CPOPohyu.js";import{Q as d}from"./suspense-BZUwcA1H.js";import{S as m,u as h,a as S}from"./Spaces-DVxM78DI.js";import{Q as y}from"./queryClient-2W5wuRWg.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DargFASt.js";import"./useTheme-Dht0CY8-.js";import"./styled-I7SbqUzc.js";import"./memoTheme-4vIjm6LZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CVkvQWeR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-g_k8tvoW.js";import"./Grid-wcoxmIQC.js";import"./isMuiElement-CM_e2YWo.js";import"./styled-CjeI9bHt.js";import"./Stack-CQjWIA4P.js";import"./Container-D2_4bomA.js";import"./Img-CAdqwcgQ.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-RkKteQFr.js";import"./index-qGcukIFs.js";import"./___vite-browser-external_commonjs-proxy-3BD_NkgN.js";import"./index-DD89Agjh.js";import"./index-CxzYzdeS.js";import"./index-CUgfwVUD.js";import"./IconButton-oDfd5Lmw.js";import"./ButtonBase-DIMIguuI.js";import"./useTimeout-CMPjzxnq.js";import"./TransitionGroupContext-B0rcK__J.js";import"./useForkRef-BKwvVnzL.js";import"./useEventCallback-BNwW89Is.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4cKxRwq.js";import"./Tooltip-BWnEWeD7.js";import"./useSlot-Bu48rJfG.js";import"./mergeSlotProps-De-W8bEz.js";import"./useControlled-Dig0ZMyL.js";import"./getReactElementRef-BJS3FUmu.js";import"./Portal-CcmPSbI-.js";import"./utils-DCMHm21Z.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CexFUqCS.js";import"./Button-kz7BikUW.js";import"./index-6PSJ7mzi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CMfmqAYx.js";import"./index-Fcrq2ySB.js";import"./Alert-tKEI9zv2.js";import"./createSvgIcon-IzKekw11.js";import"./Close-DzOV4uIs.js";import"./AlertTitle-BzGQHrmX.js";import"./Dialog-DzS-WZi1.js";import"./DialogContext-BQIi1144.js";import"./Modal-Bdo5cqSi.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Cj1iOKB7.js";import"./Fade-Cx-6eTbl.js";import"./DialogTitle-DTa9wqBh.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-pfbGsy8f.js";import"./DialogContent-D5gWVnaQ.js";import"./DialogContentText-jWCFgma1.js";import"./index-CrcoPoGw.js";import"./index-BKTuESyS.js";import"./LinearProgress-CH6CKmv9.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
