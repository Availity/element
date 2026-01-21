import{j as p}from"./iframe-B15MwHjc.js";import{P as e}from"./index-CaEU93Cq.js";import{T as o}from"./index-JN94Hn2b.js";import{S as n}from"./index-DxM9B309.js";import{S as m,u as d,a as h}from"./Spaces-BVnydffC.js";import{Q as S}from"./suspense-C-metycO.js";import{Q as y}from"./queryClient-CHNRQtqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Ci8Atnw6.js";import"./useTheme-DNjXucVs.js";import"./styled-Dsm9_3nR.js";import"./memoTheme-D5o8CaBh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DGTJIKj9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-YSmorlov.js";import"./Grid-Dy4g6prj.js";import"./styled-C2cPqIG3.js";import"./isMuiElement-DJZ5QjLd.js";import"./Stack-D0GxJWIp.js";import"./Container-BF4wPU8W.js";import"./index-zidQaDKy.js";import"./index-DFFr03SD.js";import"./___vite-browser-external_commonjs-proxy-C9YbHPbS.js";import"./index-DJINif8x.js";import"./_toKey-D_jrYpJ2.js";import"./index-DD7NgNQL.js";import"./index-C1-wXq3o.js";import"./Tooltip-Cn8xYtbM.js";import"./useSlot-CSAMaxgS.js";import"./mergeSlotProps-CdThJ-3P.js";import"./useForkRef-DuY6SZZx.js";import"./useTimeout-Cm6ZfeQK.js";import"./useControlled-DMX50sqj.js";import"./useEventCallback-37O-Z23c.js";import"./getReactElementRef-GzGc3gHa.js";import"./Portal-BtkHLfcV.js";import"./utils-Cl7K9KPr.js";import"./TransitionGroupContext-C0L_he2M.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHKxwTOr.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DjrXNLZD.js";import"./ButtonBase-CE7Ewp3a.js";import"./CircularProgress-CW5OewJC.js";import"./Button-BsXdLE5f.js";import"./index-B-JYDf49.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-B05McAjj.js";import"./index-CzLyESQZ.js";import"./Alert-CfVQuYi6.js";import"./createSvgIcon-Zx_tmbTm.js";import"./Close-C5i5INsN.js";import"./AlertTitle-DVPffHdW.js";import"./Dialog-BWRaOE7A.js";import"./DialogContext-C9RUOx7Y.js";import"./Fade-C0vOm-43.js";import"./Modal-DdeK4hRP.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CWbXueS0.js";import"./DialogTitle-D7_uMCwe.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-0Ak86wc3.js";import"./DialogContent-Cgz3wqCZ.js";import"./DialogContentText-bzdzx_6A.js";import"./index-BiBDMnSv.js";import"./Img-DTFWxjBw.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Dpl1gBPu.js";import"./LinearProgress-BIAslglm.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
