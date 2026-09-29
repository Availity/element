import{j as p}from"./iframe-BdtdKmg8.js";import{P as e}from"./index-Ci1afW8z.js";import{T as o}from"./index-BktFWPxY.js";import{S as n}from"./index-y3OLnY3V.js";import{Q as d}from"./suspense-oxP0Fd4R.js";import{S as m,u as h,a as S}from"./Spaces-Blq7iaJl.js";import{Q as y}from"./queryClient-CT7JgZR0.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BbHjqnIf.js";import"./useTheme-BUr8GPQY.js";import"./styled-DYRRHVQd.js";import"./memoTheme-BSZO8tET.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-Ct1eVQia.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-Bdbdbjz0.js";import"./Grid-BEc5hWlN.js";import"./isMuiElement-VRCGw5Z3.js";import"./styled-BACYX6V0.js";import"./Stack-DjOyHPuU.js";import"./Container-5HhabFZh.js";import"./Img-sVl0JOlo.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Bf-4EAkZ.js";import"./index-D7kz3TOt.js";import"./___vite-browser-external_commonjs-proxy-ChFk25yN.js";import"./index-CY8VLdQ2.js";import"./index-DsLAKRkr.js";import"./index-sfs31Xg8.js";import"./IconButton-BGWMoxCC.js";import"./ButtonBase-Bsasq48R.js";import"./useTimeout-BjzlLD0-.js";import"./TransitionGroupContext-DW5Ji1V0.js";import"./useForkRef-yU1gIY9t.js";import"./useEventCallback-CNW4hkob.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKwr5YQe.js";import"./Tooltip-B7d6lYcI.js";import"./useSlot-CQH1JnoL.js";import"./mergeSlotProps-D1CilINf.js";import"./useControlled-qDvReWFA.js";import"./getReactElementRef-BX57xPm_.js";import"./Portal-By3tqOUu.js";import"./utils-B5cCI6Rw.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CIppk9xm.js";import"./Button-DsRHMuVD.js";import"./index-ByY3g0DH.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BHLlmPIG.js";import"./index-DqkfECXv.js";import"./Alert-niSYZpmq.js";import"./createSvgIcon-Bq4fCAzJ.js";import"./Close-DNEOIFD-.js";import"./AlertTitle-CAlVjKBC.js";import"./Dialog-BL9m7A-w.js";import"./DialogContext-BNZLqxvO.js";import"./Modal-r1fngEGv.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-cYgAzR7a.js";import"./Fade-C-oQ5huf.js";import"./DialogTitle-DgHieL0o.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-DAvesDhy.js";import"./DialogContent-BcVuZpSg.js";import"./DialogContentText-D24y7hCc.js";import"./index-CrcoPoGw.js";import"./index-CPMQfqkx.js";import"./LinearProgress-6tLu58U7.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
