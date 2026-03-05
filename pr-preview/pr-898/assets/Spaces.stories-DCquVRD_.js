import{j as p}from"./iframe-Wk3enkn_.js";import{P as e}from"./index-TMY9X8er.js";import{T as o}from"./index-CNr7z3HO.js";import{S as n}from"./index-CV9srtxl.js";import{S as m,u as d,a as h}from"./Spaces-r11IWxxy.js";import{Q as S}from"./suspense-Bd_pbFF_.js";import{Q as y}from"./queryClient-CHAqsXqX.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BtZlLsyY.js";import"./useTheme-CmRoqaFD.js";import"./styled-BmTYHnh6.js";import"./memoTheme-Caj5A1s7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CLtqYzwP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DL-v_noe.js";import"./Grid-DdfbYMl5.js";import"./isMuiElement-DVgXTGQo.js";import"./styled-BnyQvlXI.js";import"./Stack-8J7VIz0q.js";import"./Container-ChUN_I-o.js";import"./index-BZOO7YAB.js";import"./index-CCiKlUX9.js";import"./___vite-browser-external_commonjs-proxy-D6GNdSUz.js";import"./index-DrPJM3MV.js";import"./_toKey-CQFtmbJp.js";import"./index-nm4LPE3L.js";import"./index-pyii_x3t.js";import"./Tooltip-BR4Ffd1U.js";import"./useSlot-JMUv4BXp.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./useTimeout-BCOPmfCQ.js";import"./useControlled-2F9gTxQc.js";import"./useEventCallback-B7JQiyR1.js";import"./getReactElementRef-Cnge9CgM.js";import"./Portal-CCkMzpr1.js";import"./utils-tb6sxdlZ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BfCrVpCA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6xLK3w0.js";import"./ButtonBase-Qsi_pa_1.js";import"./CircularProgress-n4f4P4WA.js";import"./Button-C074Gfa_.js";import"./index-a2BAU8hi.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C-x4Imun.js";import"./index-dnYz-uNV.js";import"./Alert-LfikkVN3.js";import"./createSvgIcon-q6AyRDli.js";import"./Close-BJPW9EZ5.js";import"./AlertTitle-46WSsgI5.js";import"./Dialog-Brv7f4NM.js";import"./DialogContext-jk0CXgup.js";import"./Fade-CxXiFCgw.js";import"./Modal-CRbA4mc9.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B_XiOxQq.js";import"./DialogTitle-Bs534PNu.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DGKYAlbq.js";import"./DialogContent-BGuH1uzT.js";import"./DialogContentText-DwgJ2zic.js";import"./index-BiBDMnSv.js";import"./Img-DtNJqwQA.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-ByCWVNQH.js";import"./LinearProgress-B9tDl19O.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
