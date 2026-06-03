import{j as p}from"./iframe-C9Q7A5ra.js";import{P as e}from"./index-XE63nykw.js";import{T as o}from"./index-BeyzD6Q3.js";import{S as n}from"./index-0hLAGvby.js";import{S as m,u as d,a as h}from"./Spaces-BmLwn5oO.js";import{Q as S}from"./suspense-DmU8Qbqd.js";import{Q as y}from"./queryClient-DA6qOiC9.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BvFLUZyh.js";import"./useTheme-DiIVsm9U.js";import"./styled-0UczSNXk.js";import"./memoTheme-YF5MtDv6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DxUywEUK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BiOrU6MK.js";import"./Grid-CzHxH48g.js";import"./isMuiElement-BgeoDj0f.js";import"./styled-CCY5CIG6.js";import"./Stack-DyDlGsHv.js";import"./Container-CbMFSBjO.js";import"./index-UVINGYSN.js";import"./index-B9trg_F0.js";import"./___vite-browser-external_commonjs-proxy-gNskwvVU.js";import"./index-BxB72Ewe.js";import"./_toKey-CJoTaFB0.js";import"./index-2lMST83k.js";import"./index-Cb9JJsiN.js";import"./Tooltip-Dxz12tat.js";import"./useSlot--WqN-Xj_.js";import"./mergeSlotProps-UhsM3zsz.js";import"./useForkRef-B8T8EBOK.js";import"./useTimeout-BpXHY--n.js";import"./useControlled-__FO7R_p.js";import"./useEventCallback-LHv8CayF.js";import"./getReactElementRef-D2IRer1N.js";import"./Portal-1jOXhtNE.js";import"./utils-BZDXaftX.js";import"./TransitionGroupContext-DyV0aRJH.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Osd4OcEu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZcoIB4U.js";import"./ButtonBase-B3rBS9gF.js";import"./CircularProgress-CPrPE9Sw.js";import"./Button-CeTzgLEE.js";import"./index-CyBTe91T.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzclMxo5.js";import"./index-CJmkvFbd.js";import"./Alert-C0XbW_he.js";import"./createSvgIcon-CHtzqaAD.js";import"./Close-BkT_rj0K.js";import"./AlertTitle-DM1j_eEB.js";import"./Dialog-CH2oDHOe.js";import"./DialogContext-W1fhB1eI.js";import"./Fade-Qmg-4-l1.js";import"./Modal-BGRke5kn.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-QSng-jdr.js";import"./DialogTitle-BY0iM4i5.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-v5v_GxLT.js";import"./DialogContent-CXpxhTOp.js";import"./DialogContentText-BK8FD19x.js";import"./index-BiBDMnSv.js";import"./Img-DvaSZR7-.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DwwlmUKU.js";import"./LinearProgress-B8QjvFJ6.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
