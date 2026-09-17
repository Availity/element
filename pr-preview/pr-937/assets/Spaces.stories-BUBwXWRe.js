import{j as p}from"./iframe-CrDI7sKE.js";import{P as e}from"./index-Dt3qqCHF.js";import{T as o}from"./index-DnW44yA8.js";import{S as n}from"./index-BtTxkIqf.js";import{Q as d}from"./suspense-CSo65Di8.js";import{S as m,u as h,a as S}from"./Spaces-NCisjQAx.js";import{Q as y}from"./queryClient-BrV7sRrh.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DYAzX1VO.js";import"./useTheme-e92JqNOn.js";import"./styled-CqKFH6eA.js";import"./memoTheme-1eSCZRav.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BB__VVHi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BKdDafZT.js";import"./Grid-B7k0uIkV.js";import"./isMuiElement-CplrA1Xb.js";import"./styled-B5mLmA23.js";import"./Stack-BQFWbwCa.js";import"./Container-QJP-imy5.js";import"./Img-ph4CY-aB.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DZxmlms1.js";import"./index-B41T07YE.js";import"./___vite-browser-external_commonjs-proxy-B0N8KlEf.js";import"./index-CzBJOeop.js";import"./index-D_t0lIOG.js";import"./index-D1nVldbn.js";import"./IconButton-COXIliVf.js";import"./ButtonBase-Lw6uESYo.js";import"./useTimeout-B0l-dQbr.js";import"./TransitionGroupContext-Bo9v56k3.js";import"./useForkRef-BfO6-t9P.js";import"./useEventCallback-D4QkonYW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKP2WMPH.js";import"./Tooltip-BYMj-RjT.js";import"./useSlot--sris71t.js";import"./mergeSlotProps-C73UPCQk.js";import"./useControlled-C0OF1VAF.js";import"./getReactElementRef-d6gO3Pyv.js";import"./Portal-DJpfMgk6.js";import"./utils-BWKdc28P.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cihilg2w.js";import"./Button-C68buGXp.js";import"./index-B75hp5XN.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Db1uzRw5.js";import"./index-BiXLOUpO.js";import"./Alert-BCmBnwxM.js";import"./createSvgIcon-B259oLuI.js";import"./Close-BtLqS1Rv.js";import"./AlertTitle-aEHOMc-5.js";import"./Dialog-C03qnrSi.js";import"./DialogContext-Wclj_8yK.js";import"./Modal-Hr0EA0wP.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B1fHeAP2.js";import"./Fade-BmT7tLhS.js";import"./DialogTitle-BpLnRzS-.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CeQgR8ek.js";import"./DialogContent-BcToDX0b.js";import"./DialogContentText-DOIIvdqr.js";import"./index-CrcoPoGw.js";import"./index-AIcsXW9F.js";import"./LinearProgress-DP-u0VO6.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
