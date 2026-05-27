import{j as p}from"./iframe-BAio8bRO.js";import{P as e}from"./index-D6g6WvHI.js";import{T as o}from"./index-CvE6eDwb.js";import{S as n}from"./index-q0NfFQ9-.js";import{S as m,u as d,a as h}from"./Spaces-B807ZYjx.js";import{Q as S}from"./suspense-JDytfcG3.js";import{Q as y}from"./queryClient-D0leFjwS.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DW5lDWun.js";import"./useTheme-BlST_Otk.js";import"./styled-BVlyzXC0.js";import"./memoTheme-B5Zw--p6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BPUxSRI8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D9uuWVv-.js";import"./Grid-t7gGqywk.js";import"./isMuiElement-AydbSc-U.js";import"./styled-EJoH7QSk.js";import"./Stack-bN5r8_lU.js";import"./Container-CV_lDoo_.js";import"./index-CeF8IBRN.js";import"./index-RudpxiCl.js";import"./___vite-browser-external_commonjs-proxy-fC2KNp90.js";import"./index-cDutZPbR.js";import"./index-DcNlVx-A.js";import"./_toKey-Cn80klBW.js";import"./index-C1lx2Hnp.js";import"./index-Cu3Q3wdb.js";import"./Tooltip-hIKEgUI5.js";import"./useSlot-BVjxSlY9.js";import"./mergeSlotProps-CmGkLNGM.js";import"./useForkRef-DNDPTA8R.js";import"./useTimeout-BkgJttAJ.js";import"./useControlled-BkSKTHhF.js";import"./useEventCallback-9-WTFaLk.js";import"./getReactElementRef-C8WT4AXt.js";import"./Portal-DtZMvnVy.js";import"./utils-LXi-Tlok.js";import"./TransitionGroupContext-DZhFA06X.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CFXUmX-_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cgj-zrzq.js";import"./ButtonBase-Ae9hTywr.js";import"./CircularProgress-DwO4_zrq.js";import"./Button-CfkShIuN.js";import"./index-D6CmWoDY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-tye3QKHe.js";import"./index-DmeYzCES.js";import"./Alert-B1UTgnHE.js";import"./createSvgIcon-BHdN4xjz.js";import"./Close-ExXnYhk-.js";import"./AlertTitle-DjANaVaD.js";import"./Dialog-BuslQ57Q.js";import"./DialogContext-D-8Ddgjd.js";import"./Fade-D__YuxCd.js";import"./Modal-Cb932oqz.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DUEOgCON.js";import"./DialogTitle-BndsePsu.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-C2SPrnB8.js";import"./DialogContent-XFaj8vGC.js";import"./DialogContentText-Dh11ljq5.js";import"./index-BiBDMnSv.js";import"./Img-BwaLW4jr.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CuTJjaQ6.js";import"./LinearProgress-CiZiPfB8.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Fp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gp=["_Spaces"];export{i as _Spaces,Gp as __namedExportsOrder,Fp as default};
