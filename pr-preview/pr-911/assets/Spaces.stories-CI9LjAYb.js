import{j as p}from"./iframe-D2jXllzf.js";import{P as e}from"./index-Bcc6l1YC.js";import{T as o}from"./index-B-LjnUTn.js";import{S as n}from"./index-_ebpbhE4.js";import{S as m,u as d,a as h}from"./Spaces-BSJNygHT.js";import{Q as S}from"./suspense-B_xDpDZR.js";import{Q as y}from"./queryClient-7UKzF7dW.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DezgSOvY.js";import"./useTheme-C2p3ig_2.js";import"./styled-DdNVu9ib.js";import"./memoTheme-Zt5oAqwv.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-B2ZUFsL1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BbqhAezV.js";import"./Grid-DcON0D60.js";import"./isMuiElement-CtLsGuPJ.js";import"./styled-CrGM8GXy.js";import"./Stack-C7w4lddQ.js";import"./Container-DTQuoaq9.js";import"./index-B4MTobdk.js";import"./index-918D6wux.js";import"./___vite-browser-external_commonjs-proxy-CWZwep8m.js";import"./index-BzJiEeMt.js";import"./_toKey-DMH86hUz.js";import"./index-D1h2ts_D.js";import"./index-toBpsxUE.js";import"./Tooltip-GSnbTknq.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./useTimeout-CPz5sd6r.js";import"./useControlled-DpI9NEaZ.js";import"./useEventCallback-B89JyN3q.js";import"./getReactElementRef-DHdu6blE.js";import"./Portal-DNbvJLzK.js";import"./utils-B6mCZ_7g.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-FypE9v1G.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dd5dInOR.js";import"./ButtonBase-DMYh_tyc.js";import"./CircularProgress-BG5QNhqD.js";import"./Button-CwKYXhwT.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-9pPXd2AZ.js";import"./index-BFHY_cwz.js";import"./Alert-wiNpMIjB.js";import"./createSvgIcon-BpTXI-oS.js";import"./Close-BsJCF7Mr.js";import"./AlertTitle-B1ZKpr0J.js";import"./Dialog-TPe4rBSX.js";import"./DialogContext-DjHaNb16.js";import"./Fade-CjW2EPns.js";import"./Modal-epJMSIoD.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqC92YWR.js";import"./DialogTitle-BD63xN2n.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DqHUoT8k.js";import"./DialogContent-BUrYA7gi.js";import"./DialogContentText-BWeZREK-.js";import"./index-BiBDMnSv.js";import"./Img-C0Z7I8m1.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CNqldgC8.js";import"./LinearProgress-CLJI_xYm.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
