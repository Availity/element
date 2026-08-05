import{j as p}from"./iframe-Cl61WGkI.js";import{P as e}from"./index-DEMyV-7J.js";import{T as o}from"./index-CJQ0Fxar.js";import{S as n}from"./index-D0cf1ol3.js";import{Q as d}from"./suspense-CjFvtXfk.js";import{S as m,u as h,a as S}from"./Spaces-CqmmDTGE.js";import{Q as y}from"./queryClient-Bs2OFGKR.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DdNx7n5g.js";import"./useTheme-IfO6Fwpt.js";import"./styled-BC98FWsK.js";import"./memoTheme-Bl50oicv.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BbUycIDS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BylFce9S.js";import"./Grid-CY38bvtz.js";import"./isMuiElement-Cx1dzcL4.js";import"./styled-DUX11FjB.js";import"./Stack-DbcIcCvU.js";import"./Container-CQCkLV4U.js";import"./Img-DkYYCDiu.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-DBwkgZQQ.js";import"./index-BTt-AJ1u.js";import"./___vite-browser-external_commonjs-proxy-Bzn8mUo7.js";import"./index-DCRShdR0.js";import"./index-5EecErxg.js";import"./index-CqgX4Pjw.js";import"./Tooltip-BWDly8di.js";import"./useSlot-BNKzCfYO.js";import"./mergeSlotProps-oCe6X0UM.js";import"./useForkRef-BgBNpKdE.js";import"./useTimeout-DRIZehDr.js";import"./useControlled-Df0GFCpG.js";import"./useEventCallback-04OY0OEQ.js";import"./getReactElementRef-C7aNrngo.js";import"./Portal-CKqV7NOt.js";import"./utils-BISW7tPB.js";import"./TransitionGroupContext-DF5xYsKa.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwXPHno3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-q11oqdUa.js";import"./ButtonBase-q-jaW3RD.js";import"./CircularProgress-Bq8oVM2O.js";import"./Button-DuB2O4vc.js";import"./index-CmI2eh32.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dwb1J2d-.js";import"./index-B0JOKqZl.js";import"./Alert-Bt13MPet.js";import"./createSvgIcon-C9mzZA9x.js";import"./Close-2CYXYJvY.js";import"./AlertTitle-DKewQg4O.js";import"./Dialog-D9zTpAQu.js";import"./DialogContext-BT8XSYew.js";import"./Modal-B_tt91Mu.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-C_s6yW8r.js";import"./Fade-sz48bo3z.js";import"./DialogTitle-CaWTeLtG.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Cry-D_QC.js";import"./DialogContent-vF423mGQ.js";import"./DialogContentText-BMm5jj-G.js";import"./index-CrcoPoGw.js";import"./index-4dUJxjU6.js";import"./LinearProgress-2HGWpQXp.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
