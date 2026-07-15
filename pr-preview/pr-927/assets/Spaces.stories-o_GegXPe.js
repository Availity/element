import{j as p}from"./iframe-DDeFjhwT.js";import{P as e}from"./index-o31oqBcQ.js";import{T as o}from"./index-B0i4PftB.js";import{S as n}from"./index-oWqJ9z6g.js";import{Q as d}from"./suspense-Ck_m44xn.js";import{S as m,u as h,a as S}from"./Spaces-Cl0cNyU1.js";import{Q as y}from"./queryClient-YNPA8bLN.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-igPbegtl.js";import"./useTheme-KKOLTJXa.js";import"./styled-PQjfDOgQ.js";import"./memoTheme-BKUl2Kw8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Be3kmzes.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-ClrgcKqA.js";import"./Grid-DkuRXmB0.js";import"./isMuiElement-C8BOTMMK.js";import"./styled-B5nfTXUF.js";import"./Stack-D5p-aU6z.js";import"./Container-BKOvC3qE.js";import"./Img-FAPvDIzM.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-COGxDCcE.js";import"./index-CG12tBum.js";import"./___vite-browser-external_commonjs-proxy-CLxyROCc.js";import"./index-DbhJCPhL.js";import"./index-DUTGqMiE.js";import"./index-CSwp3I03.js";import"./Tooltip-5o6beSBH.js";import"./useSlot-SzvoDGen.js";import"./mergeSlotProps-BPESDwW9.js";import"./useForkRef-DgKt8E30.js";import"./useTimeout-Cm2RyAAI.js";import"./useControlled-BH5VVnvv.js";import"./useEventCallback-tCUa2-C3.js";import"./getReactElementRef-BeHDg4ji.js";import"./Portal-BqacPdFW.js";import"./utils-DshWixdw.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B4bgTElG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CurJhF0D.js";import"./ButtonBase-D-CcOUqB.js";import"./CircularProgress-DZuzO0Uv.js";import"./Button-su8UM5h8.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DRz9ijBU.js";import"./index-CSyFMWXb.js";import"./Alert-CQMGnc5I.js";import"./createSvgIcon-BxZGQxhE.js";import"./Close-CjaMKFHv.js";import"./AlertTitle-rdeForN8.js";import"./Dialog-COiu64ns.js";import"./DialogContext-Cas9HwZ-.js";import"./Modal-BpltTEbA.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGCVqILM.js";import"./Fade-klYlUMvL.js";import"./DialogTitle-BVM4JYQZ.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-CiZCMzgp.js";import"./DialogContent-DCe93M5X.js";import"./DialogContentText-ChPC4lxo.js";import"./index-CrcoPoGw.js";import"./index-kpzhHQGX.js";import"./LinearProgress-Cr7-IP4v.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
