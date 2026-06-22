import{j as p}from"./iframe-BcpGFM79.js";import{P as e}from"./Paper-yohM4iyv.js";import{T as o}from"./Typography-giEvkJi7.js";import{S as n}from"./Stack-D5S2zAhj.js";import{Q as d}from"./suspense-B9pUYTtW.js";import{a as m,u as h,b as S}from"./Spaces-BfovhS3P.js";import{Q as y}from"./queryClient-ChNJB3dk.js";import"./preload-helper-Dab_6GC_.js";import"./Paper-DJSKHSTy.js";import"./useTheme-DjrtHLeH.js";import"./styled-YELB7PbO.js";import"./memoTheme-CUR-_UQu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D2_Tvhdq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Stack-C71gTkqw.js";import"./styled-CAzon1OD.js";import"./index-C61jAYVP.js";import"./index-CRoIuHYP.js";import"./___vite-browser-external_commonjs-proxy-DixCwXJd.js";import"./index-CZ2YJDe3.js";import"./Dialog-Bfszs2G9.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./useTimeout-D7cMLa2k.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./Actions-D5HDZDyt.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./Dialog-DUfzyZ65.js";import"./DialogContext-CSupPerk.js";import"./Modal-ORZGbsIm.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Kq3hx2RN.js";import"./Fade-CdC4gkg9.js";import"./DialogActions-BF0lkyvE.js";import"./DialogActions-rCQljhLI.js";import"./DialogTitle-D5Rm0Wmx.js";import"./Alert-CYTKc6CY.js";import"./Form-BSB-tu1Z.js";import"./Alert-BwHZJPPa.js";import"./createSvgIcon-D6BcWLqc.js";import"./Close-BJXb1f8O.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./Button-DgpwJSBN.js";import"./Button-CNBYq3K8.js";import"./index-CrcoPoGw.js";import"./CircularProgress-hl_n8CEU.js";import"./DialogContent-B2_xGh16.js";import"./DialogContent-CblLhw5M.js";import"./Box-B0Ho1tv0.js";import"./Box-YZXBtx3i.js";import"./Grid-CobFFp4x.js";import"./Grid-DtKUTAQi.js";import"./isMuiElement-IVbgCQ7T.js";import"./toPropertyKey-DCwh5dYN.js";const Bp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
