import{j as p}from"./iframe-DPzbdwV6.js";import{P as e}from"./index-B4HGjOCr.js";import{T as o}from"./index-DGvlUkza.js";import{S as n}from"./index-IpBMU51L.js";import{S as m,u as d,a as h}from"./Spaces-B-DwuZsk.js";import{Q as S}from"./suspense-Bc27LCGT.js";import{Q as y}from"./queryClient-DzFAzC5E.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Coy0maCu.js";import"./useTheme-CsAYvKS6.js";import"./styled-rDINGuMr.js";import"./memoTheme-BPZzx3Fh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D5TdBLOe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Daga5vLj.js";import"./Grid-CYik0omM.js";import"./isMuiElement-D-kuf848.js";import"./styled-Ct-kKLkW.js";import"./Stack-CQtcIy6Q.js";import"./Container-o6DB5o93.js";import"./index-TLetgXB_.js";import"./index-C1vlwG0F.js";import"./___vite-browser-external_commonjs-proxy-CfRZ8xqb.js";import"./index-CgOhynjr.js";import"./_toKey-KMGDhlGU.js";import"./index-BLRxhSlx.js";import"./index-DWmIprsC.js";import"./Tooltip-BXHSE_Yz.js";import"./useSlot-D5vL0YkG.js";import"./mergeSlotProps-C_Eyz2VC.js";import"./useForkRef-DK4-OTh4.js";import"./useTimeout-BEe3g1yB.js";import"./useControlled-B7b2C6zg.js";import"./useEventCallback-D6Y3GTd7.js";import"./getReactElementRef-KOzEHSpK.js";import"./Portal-BKsBZMKZ.js";import"./utils-C8GgNPFy.js";import"./TransitionGroupContext-_giaZQD1.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DqDqMweE.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-MOZEFIpK.js";import"./ButtonBase-DiUPj8iu.js";import"./CircularProgress-DahfViZv.js";import"./Button-DBTzQ06_.js";import"./index-Dc5vJBpb.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DJ4ww3AR.js";import"./index-CliY4td2.js";import"./Alert-CzYq9Gmx.js";import"./createSvgIcon-Bjho5j0_.js";import"./Close-cix2vlv_.js";import"./AlertTitle-CznZPvBK.js";import"./Dialog-uqoQwlvL.js";import"./DialogContext-CeILQg6T.js";import"./Fade-BSRsDsAD.js";import"./Modal-Dq2bUZTV.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-a7fTNHAx.js";import"./DialogTitle-NVsknr8C.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-BTFV9f-v.js";import"./DialogContent-D5a3afrt.js";import"./DialogContentText-2Y3KH3xD.js";import"./index-BiBDMnSv.js";import"./Img-BCKuW8ht.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-C_cYtNs-.js";import"./LinearProgress-CdRV1x2B.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
