import{j as p}from"./iframe-DKvnFaXU.js";import{P as e}from"./index-zBszBh1k.js";import{T as o}from"./index-CDeQa_Ov.js";import{S as n}from"./index-DbDO0Ft_.js";import{Q as d}from"./suspense-B3ARyDAO.js";import{S as m,u as h,a as S}from"./Spaces-C-Fmt1ws.js";import{Q as y}from"./queryClient-Gx50SvyD.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DT4unmmL.js";import"./useTheme-CSDDNwq2.js";import"./styled-CmsEx6_f.js";import"./memoTheme-CqfCSJ2X.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D7JJPpmc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D54lZQNO.js";import"./Grid-BqSQzKdl.js";import"./isMuiElement-B9gvf1iq.js";import"./styled-vqTvL8XB.js";import"./Stack-Ddupjr1g.js";import"./Container-Dg7zSU0F.js";import"./Img-COFneF-a.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Ds1bBKID.js";import"./index-zW81wbG9.js";import"./___vite-browser-external_commonjs-proxy-D0Uf09dU.js";import"./index-CY8VLdQ2.js";import"./index-C_q4fD6m.js";import"./index-goOPcPYN.js";import"./IconButton-Dk2wxJIq.js";import"./ButtonBase-t7rDwPbd.js";import"./useTimeout-CHMS-cR8.js";import"./TransitionGroupContext-Ywi-MhlW.js";import"./useForkRef-BZiVfW-q.js";import"./useEventCallback-BMp-rMhG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-1gU5OTOX.js";import"./Tooltip-D9ZPYqEU.js";import"./useSlot-CCglkhUf.js";import"./mergeSlotProps-DgX6bSST.js";import"./useControlled-DXzaWELJ.js";import"./getReactElementRef-CqgsFiRl.js";import"./Portal-D0mCJoig.js";import"./utils-Bp7Prb7W.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DYzgJZQm.js";import"./Button-CcwmilXM.js";import"./index-Dp9gWiw7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CXEooahZ.js";import"./index-BGDQU2EH.js";import"./Alert-kA6WJvA2.js";import"./createSvgIcon-2KwAvjFg.js";import"./Close-BJ35LOVq.js";import"./AlertTitle-D28Nw8YW.js";import"./Dialog-Cw6ZJwMt.js";import"./DialogContext-DW4FYy9a.js";import"./Modal-Bm3yPZFq.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-EX3DoS9x.js";import"./Fade-CrAHTHjX.js";import"./DialogTitle-DlkVrxaL.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-P4spXqYe.js";import"./DialogContent-CJlzruW0.js";import"./DialogContentText-pYOsQgvZ.js";import"./index-CrcoPoGw.js";import"./index-D5PWHOd-.js";import"./LinearProgress-BjLWU44D.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
