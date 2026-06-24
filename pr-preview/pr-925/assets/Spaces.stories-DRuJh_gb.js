import{j as p}from"./iframe-BRP1PsTd.js";import{P as e}from"./index-CnTQWbf1.js";import{T as o}from"./index-DlB5fuNM.js";import{S as n}from"./index-D7dOkDl_.js";import{Q as d}from"./suspense-7idsBrSV.js";import{S as m,u as h,a as S}from"./Spaces-DAjFaBD9.js";import{Q as y}from"./queryClient-DtbfVVG2.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Cw-zNh9i.js";import"./useTheme-C-06SHWZ.js";import"./styled-kfJMXx_R.js";import"./memoTheme-Rx2ZtNd-.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BELI0wSd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CXnBoTl2.js";import"./Grid-Mz87TCh6.js";import"./isMuiElement-CTMPmI0-.js";import"./styled-BWHNlctr.js";import"./Stack-DIw4f7bu.js";import"./Container-Bk3CGwFA.js";import"./Img-G6ihFJQ7.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BcExjKBt.js";import"./index-CD3DaTz2.js";import"./___vite-browser-external_commonjs-proxy-BHKhwzHZ.js";import"./index-Bwqc7xOL.js";import"./index-CgC0oRcc.js";import"./index-BsNnDr7w.js";import"./Tooltip-C5fygC3l.js";import"./useSlot-B51YQDxZ.js";import"./mergeSlotProps-B2RYlZua.js";import"./useForkRef-DUyCy24e.js";import"./useTimeout-zBXF3kIc.js";import"./useControlled-8-M28gqE.js";import"./useEventCallback-BX14bO_3.js";import"./getReactElementRef-y-MSVziw.js";import"./Portal-CRr1uWpV.js";import"./utils-DtC8lP3P.js";import"./TransitionGroupContext-DjWTkcZP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-fBG80Xpc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-4bUdPSIB.js";import"./ButtonBase-DI3KZvly.js";import"./CircularProgress-Dy9r_LoH.js";import"./Button-BSPls0mt.js";import"./index-C9qIB2Ge.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C0xh8SUy.js";import"./index-DrLYyPSK.js";import"./Alert-2L0ggmBZ.js";import"./createSvgIcon-DDgQnkKT.js";import"./Close-Bi4R9hIj.js";import"./AlertTitle-CMXOC9cp.js";import"./Dialog--noF1zeX.js";import"./DialogContext-DGM3pc0h.js";import"./Modal-D89_wzi3.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DCwrU8T9.js";import"./Fade-ByvXngvB.js";import"./DialogTitle-C1jZoYH1.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DCINV1H-.js";import"./DialogContent-CGX0btfI.js";import"./DialogContentText-D_wlqRlM.js";import"./index-CrcoPoGw.js";import"./index-Ck8YwQpl.js";import"./LinearProgress-ejGSFxqn.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
