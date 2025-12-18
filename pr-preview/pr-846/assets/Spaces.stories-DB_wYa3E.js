import{j as p}from"./iframe-HTo88Qah.js";import{P as t}from"./index-DaGz3oVB.js";import{T as i}from"./index-BHAyuMBH.js";import{S}from"./index-jajfa-T1.js";import{S as d,u as y,a as l}from"./Spaces-Bh7UnJq6.js";import{Q as u}from"./suspense-NwFbJ5O0.js";import{Q as x}from"./queryClient-T9m9GSZA.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-YwfGNSvh.js";import"./useTheme-CndemxDm.js";import"./styled-DjA2FMTv.js";import"./memoTheme-BOsLVKQV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BCaLwMk6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-D0j4-ZsT.js";import"./Grid-rOUx4HQp.js";import"./styled-qrQLN9Aj.js";import"./isMuiElement-dEqiUdHL.js";import"./Stack-BWf0eeeY.js";import"./Container-Cb74vs7z.js";import"./index-B6HxZE-P.js";import"./index-BChK4n1_.js";import"./___vite-browser-external_commonjs-proxy-BEWzl12g.js";import"./index-DG28nJkc.js";import"./_toKey-BWs6lgW2.js";import"./index-B0hDlmfz.js";import"./index-aYiA4GaY.js";import"./Tooltip-AdliQAtR.js";import"./useSlot-O7mjHfs3.js";import"./mergeSlotProps-CVeY9kVm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-SriJrD.js";import"./useTimeout-BzMKXnUG.js";import"./useControlled-DAZnMUbd.js";import"./useEventCallback-skU3gh-c.js";import"./getReactElementRef-BupWyWHg.js";import"./Portal-CpErzDB6.js";import"./utils-C06-OhnX.js";import"./TransitionGroupContext-B9ftAZaO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cf38pxn0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZMzYKiR.js";import"./ButtonBase-B5t8kESg.js";import"./CircularProgress-DZY0-sNj.js";import"./Button-CyUxXAKO.js";import"./index-Bp1v9Z_f.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-E7njoD0w.js";import"./index-ESFmGMKN.js";import"./Alert-B1NCcPYf.js";import"./createSvgIcon-y0t4CXxH.js";import"./Close-BBM8epMS.js";import"./AlertTitle-BFPUAADf.js";import"./Dialog-B3dq1dCh.js";import"./DialogContext-BGsdFh5t.js";import"./Fade-C_QOMosM.js";import"./Modal-9Oi2445E.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DDvA0mPu.js";import"./DialogTitle-1EMdOUK9.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-B1Bx2w02.js";import"./DialogContent-CFY1LV9I.js";import"./DialogContentText-BC7W6zSQ.js";import"./index-DS1ZdVNz.js";import"./Img-DUFQHen_.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BUCmvm6N.js";import"./LinearProgress-DgtYYCy_.js";import"./index-k0NEndgp.js";import"./index-DviwiyA1.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const Lp=["_Spaces"];export{s as _Spaces,Lp as __namedExportsOrder,Kp as default};
