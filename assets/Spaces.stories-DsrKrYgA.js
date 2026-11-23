import{j as p}from"./iframe-C4HkdVED.js";import{P as e}from"./index-DN1VTqnZ.js";import{T as o}from"./index-Di1Lly5s.js";import{S as n}from"./index-YZkZIPP3.js";import{Q as d}from"./suspense-C8C4TGIG.js";import{S as m,u as h,a as S}from"./Spaces-BKeq4Qqh.js";import{Q as y}from"./queryClient-Bfc4PEpX.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-D1x-q-nj.js";import"./useTheme-B8XrPkIo.js";import"./styled-BT-YQVcS.js";import"./memoTheme-BG6Rse2P.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Da_zx24V.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-zmRcbAMo.js";import"./Grid-BRUvQOfL.js";import"./isMuiElement-DPikhU7x.js";import"./styled-CWQ1NF-T.js";import"./Stack-Rm4Xh7KY.js";import"./Container-c3Xuxmeg.js";import"./Img-WzRvqhwC.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-B1GGdwIs.js";import"./index-CkVBG_A9.js";import"./___vite-browser-external_commonjs-proxy-C5KZul5m.js";import"./index-CY8VLdQ2.js";import"./index-DcmgSfRv.js";import"./index-BxZtHMSR.js";import"./IconButton-DAm3sfm9.js";import"./ButtonBase-DSSz5Mb_.js";import"./useTimeout-Dr23bHsI.js";import"./TransitionGroupContext-CZn2k0zL.js";import"./useForkRef-DbUR2J1C.js";import"./useEventCallback-D9gX9Adj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClUyHzUc.js";import"./Tooltip-Cu6qxs5M.js";import"./useSlot-BskdyKfe.js";import"./mergeSlotProps-l3M3qA9x.js";import"./useControlled-DrH6I0XL.js";import"./getReactElementRef-BgdKh17h.js";import"./Portal-Dwihqrdb.js";import"./utils-DTqk_mV5.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-zZW6O8Vc.js";import"./Button-Xlv09vPK.js";import"./index-BbnWHkMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CzUPI6h_.js";import"./index-CDU9eLTh.js";import"./Alert-C61Jg1pJ.js";import"./createSvgIcon-ZWi4Noed.js";import"./Close-K-Su-P3R.js";import"./AlertTitle-CiXb67Lu.js";import"./Dialog-C5JfksdD.js";import"./DialogContext-CXDkTpRf.js";import"./Modal-B_rVHOa-.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CPAt_MFQ.js";import"./Fade-JYP9Xa3N.js";import"./DialogTitle-BluxkNra.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BE52rz_l.js";import"./DialogContent-DIz-XPTj.js";import"./DialogContentText-CNwQI2LT.js";import"./index-MVgG_W0q.js";import"./index-1m8RpSPp.js";import"./LinearProgress-CNZ5cw7c.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
