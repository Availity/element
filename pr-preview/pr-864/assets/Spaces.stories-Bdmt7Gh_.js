import{j as p}from"./iframe-CFnK--5_.js";import{P as e}from"./index-Dryq4mhi.js";import{T as o}from"./index-BeLzzgii.js";import{S as n}from"./index-CTUH8f9W.js";import{S as m,u as d,a as h}from"./Spaces-aCzwiw08.js";import{Q as S}from"./suspense-gVPSeOIR.js";import{Q as y}from"./queryClient-BoHPAI0l.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-0nNMytNf.js";import"./useTheme-BUU7R_-h.js";import"./styled-B_SR2Ytp.js";import"./memoTheme-DHqcPMUG.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CAi-X6a_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CzpKZwgR.js";import"./Grid-sJL0YzUx.js";import"./styled-0UPDl72R.js";import"./isMuiElement-CSdCdkNb.js";import"./Stack-B65FEu5Y.js";import"./Container-H7u83N50.js";import"./index-qsLlyiUT.js";import"./index-DSDLHfht.js";import"./___vite-browser-external_commonjs-proxy-DcVX7utr.js";import"./index-BhKrGy8e.js";import"./_toKey-CDTDXh5w.js";import"./index-D4UvDSAZ.js";import"./index-JryDx5j_.js";import"./Tooltip-D7zb4Xpv.js";import"./useSlot-Bcbuphfr.js";import"./mergeSlotProps-CjkbnSEr.js";import"./useForkRef-Di9rDSJ_.js";import"./useTimeout-C_X7UAwn.js";import"./useControlled-QCqU36h_.js";import"./useEventCallback-CAGgRosr.js";import"./getReactElementRef-guKTxCdd.js";import"./Portal-By2AWbtS.js";import"./utils-DAiY7LDj.js";import"./TransitionGroupContext-D3GUir9f.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-3SA_4L0x.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DDlS7gn-.js";import"./ButtonBase-BaxBneFE.js";import"./CircularProgress-DUyilEJx.js";import"./Button-CFFdP_-2.js";import"./index-B8FQNIIr.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BS2_Q9nG.js";import"./index-CAi_r1mH.js";import"./Alert-hODw50kI.js";import"./createSvgIcon-BW1yD8n1.js";import"./Close-BXUfy1bF.js";import"./AlertTitle-C_YMX1Sr.js";import"./Dialog-DgF7OlH_.js";import"./DialogContext-BIzu8wvW.js";import"./Fade-DuAG_vf9.js";import"./Modal-Dz8FS_X7.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BW7XWXju.js";import"./DialogTitle-CHbOkW4L.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-BHAlMQLc.js";import"./DialogContent-2Vjbjy3M.js";import"./DialogContentText-a1E9hTqF.js";import"./index-BiBDMnSv.js";import"./Img-Dwfuf-Ul.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BGdkQQeb.js";import"./LinearProgress-D3rrnXKw.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
