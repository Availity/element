import{j as p}from"./iframe-DKPLEfLw.js";import{P as t}from"./index-4QxqTb0t.js";import{T as i}from"./index-B_gHUUTW.js";import{S}from"./index-Dn59n-rN.js";import{S as d,u as y,a as l}from"./Spaces-BXLEqX4f.js";import{Q as u}from"./suspense-CgNMJq2z.js";import{Q as x}from"./queryClient-cJioRqLv.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Ca4rgQEJ.js";import"./useTheme-9F3p9Qod.js";import"./styled-DmVvl1cy.js";import"./memoTheme-DCtqnaOZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BTTsir7-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CZdlnD3e.js";import"./Grid-Bc7_QC4M.js";import"./styled-Wz6Z4Uga.js";import"./isMuiElement-Bob4bJgN.js";import"./Stack-ClwGR_Ch.js";import"./Container-DJ1Q8iJN.js";import"./index-zNtTlnyx.js";import"./index-D0RdvGWv.js";import"./___vite-browser-external_commonjs-proxy-C7XsORAh.js";import"./index-BZbS_W-l.js";import"./_toKey-CghGTOo7.js";import"./index-DeAOzBwj.js";import"./index-BFdrycj9.js";import"./Tooltip-CV3fhIPH.js";import"./useSlot-BRbtrhUo.js";import"./mergeSlotProps-DczvM8iT.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BBFL5x5N.js";import"./useTimeout-C_Ka5Mcj.js";import"./useControlled-RZIZY8-C.js";import"./useEventCallback-DDVZojhm.js";import"./getReactElementRef-BnAyG0-a.js";import"./Portal-DsulJ7FL.js";import"./utils-BvzjqUtG.js";import"./TransitionGroupContext-PAkUv-tF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-RoKiuIH8.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-8Ec7VkLh.js";import"./ButtonBase-ChXh0SoD.js";import"./CircularProgress-QNpYF3E0.js";import"./Button-DWZjJ-VR.js";import"./index-WRElMkUo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-FjAnPN_Y.js";import"./index-MPBdUTgb.js";import"./Alert-mKqUwMxF.js";import"./createSvgIcon-vtaDbQWp.js";import"./Close-u1odCwv4.js";import"./AlertTitle-ti7Vi3mM.js";import"./Dialog-DoVw8IyF.js";import"./DialogContext-pOvYeFhH.js";import"./Fade-CbLeUs7S.js";import"./Modal-DY-Qgl5b.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-sfrV9DZb.js";import"./DialogTitle-CtZJCoK5.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-Clxwd5AY.js";import"./DialogContent-Dg3PZJOw.js";import"./DialogContentText-UNG_vJIZ.js";import"./index-DS1ZdVNz.js";import"./Img-TTJuuALp.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BB3rgqoH.js";import"./LinearProgress-BuMbATEo.js";import"./index-DUqc1Y5x.js";import"./index-D_mIFYgG.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
