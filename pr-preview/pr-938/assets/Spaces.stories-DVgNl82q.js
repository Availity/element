import{j as p}from"./iframe-pcBkreyF.js";import{P as e}from"./index-D4mWQJ5y.js";import{T as o}from"./index-oyMY6j-r.js";import{S as n}from"./index-rjMel0fo.js";import{Q as d}from"./suspense-sTObW_wx.js";import{S as m,u as h,a as S}from"./Spaces-6e61Ci-8.js";import{Q as y}from"./queryClient-C_YZho_j.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CIIxPuZQ.js";import"./useTheme-DrTO_DRk.js";import"./styled-DhfgW05P.js";import"./memoTheme-BGzSgD4T.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-sFl1f9yL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Ca_dclTz.js";import"./Grid-CiV8r-oF.js";import"./isMuiElement-c2rAqbnw.js";import"./styled-Dcs2wRea.js";import"./Stack-CK_dWn5x.js";import"./Container-h1971dVV.js";import"./Img-CLASm0A7.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DmpvfKrB.js";import"./index-BXEw90fH.js";import"./___vite-browser-external_commonjs-proxy-XwZNvLiy.js";import"./index-CY8VLdQ2.js";import"./index-Cq6Wde0P.js";import"./index-D-7rEUPH.js";import"./IconButton-CLvE6niR.js";import"./ButtonBase-BIRNPLHh.js";import"./useTimeout-BkFACxc1.js";import"./TransitionGroupContext-B-1f4D3_.js";import"./useForkRef-D6t7VBhN.js";import"./useEventCallback-C_PhZ4gM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-vX9_m42Y.js";import"./Tooltip-DFZ7S6Z_.js";import"./useSlot-Nge6-EMU.js";import"./mergeSlotProps-sZF9W67M.js";import"./useControlled-DNBc9hrk.js";import"./getReactElementRef-DUpT5N-m.js";import"./Portal-BLikJhBv.js";import"./utils-BhTotuHU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DXdTwkgQ.js";import"./Button-BPX7NsmD.js";import"./index-BHECb7j3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CQU7rCYy.js";import"./index-BIIyad7u.js";import"./Alert-Dggmvmya.js";import"./createSvgIcon-BbL3U0Hb.js";import"./Close-BVTaMr4I.js";import"./AlertTitle-6gzQKfFG.js";import"./Dialog-C9ZeZQ0z.js";import"./DialogContext-DXpu4tM9.js";import"./Modal-B61PTYm1.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CgPauin7.js";import"./Fade-BrnSbnNG.js";import"./DialogTitle-PKnhjUJy.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DpULPN2s.js";import"./DialogContent-RWKo38p7.js";import"./DialogContentText-D_Ppf5ST.js";import"./index-CrcoPoGw.js";import"./index-BlKBzU-6.js";import"./LinearProgress-BKuf1I8z.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
