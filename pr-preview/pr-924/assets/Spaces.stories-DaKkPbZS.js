import{j as p}from"./iframe-D9VxGUXm.js";import{P as e}from"./Paper-6rYsSxsl.js";import{T as o}from"./Typography-D9Pc6OpE.js";import{S as n}from"./Stack-DO9t3oOz.js";import{Q as d}from"./suspense-dJbUy5io.js";import{a as m,u as h,b as S}from"./Spaces-bElh9azM.js";import{Q as y}from"./queryClient-CrIDi-xu.js";import"./preload-helper-Dab_6GC_.js";import"./Paper-oCFHvNnf.js";import"./useTheme-B41ItSj5.js";import"./styled-D8Xb_hHx.js";import"./memoTheme-CUWoCynM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-mI_XzOBj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Stack-NbPl_tL-.js";import"./styled-N1qat-rE.js";import"./index-CrBisZO-.js";import"./index-bb5wdbmP.js";import"./___vite-browser-external_commonjs-proxy-CBXrWfvd.js";import"./index-BuWe24oV.js";import"./Dialog-CItrgxPp.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./useTimeout-CCeZqBN_.js";import"./useControlled-nlFUsoSS.js";import"./useEventCallback-BrENIvCl.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./utils-Bcz57uZ2.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BrelKzp4.js";import"./ButtonBase-IEWOwJJy.js";import"./CircularProgress-rsn-iR-g.js";import"./Actions-Bez28Qkr.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./Dialog-Bb6fVXEm.js";import"./DialogContext-D166cUIV.js";import"./Modal-B8lqQyLL.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DWoUx2Mm.js";import"./Fade-4pWY_yaW.js";import"./DialogActions-XHH0Rg5G.js";import"./DialogActions-DlxFMfy6.js";import"./DialogTitle-DMYbDfhE.js";import"./Alert-C3bWTqG3.js";import"./Form-BG5Mtcu6.js";import"./Alert-BFBy3_2R.js";import"./createSvgIcon-CuKrs_jq.js";import"./Close-BBIackpZ.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./Button-Bh2oDbYg.js";import"./Button-CSvshhUs.js";import"./index-CrcoPoGw.js";import"./CircularProgress-sq-Plk-U.js";import"./DialogContent-BDlMikij.js";import"./DialogContent-BVwGjwe3.js";import"./Box-C_ElX66U.js";import"./Box-1lHW1eXR.js";import"./Grid-gv_YjbwF.js";import"./Grid-ClZzvBh4.js";import"./isMuiElement-3elNFQAm.js";import"./toPropertyKey-DCwh5dYN.js";const Bp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dp=["_Spaces"];export{i as _Spaces,Dp as __namedExportsOrder,Bp as default};
