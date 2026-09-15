import{j as p}from"./iframe-CgyQHDht.js";import{P as e}from"./index-DX1QWm0x.js";import{T as o}from"./index-Au96FvEp.js";import{S as n}from"./index-BiQy1AHR.js";import{Q as d}from"./suspense-CFXcMaZV.js";import{S as m,u as h,a as S}from"./Spaces-8lK4Up-N.js";import{Q as y}from"./queryClient-BHiL1od7.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-C6T4apaD.js";import"./useTheme-DBOW2iGc.js";import"./styled-CeAqJ-c9.js";import"./memoTheme-9z4HOxEW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-yiHubm7E.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-BxdWl5-L.js";import"./Grid-BNO3N1YM.js";import"./isMuiElement-BaNoNC5Q.js";import"./styled-Dvv_Oh9D.js";import"./Stack-oqPb14Ks.js";import"./Container-s8QyPm16.js";import"./Img-Bf3G2Rrr.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-Cqj_0nzu.js";import"./index-6LTLb7jJ.js";import"./___vite-browser-external_commonjs-proxy-QXeNOFjN.js";import"./index-DePoTdZz.js";import"./index-DJfkzkro.js";import"./index-5azouwn6.js";import"./IconButton-M-Sr99uW.js";import"./ButtonBase-BeOu4eYa.js";import"./useTimeout-B7u63TVX.js";import"./TransitionGroupContext-CbCiCZin.js";import"./useForkRef-DvvK-eiI.js";import"./useEventCallback-v1-mseXg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-OvvKtsaM.js";import"./Tooltip-0ZBCaLdQ.js";import"./useSlot-BI63qm8Z.js";import"./mergeSlotProps-DEDO0PDp.js";import"./useControlled-DSiBAGka.js";import"./getReactElementRef-DSOw1wXb.js";import"./Portal-Cv3ZG74Z.js";import"./utils-i6pe6p9D.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D00sgM-L.js";import"./Button-D8e6tdaf.js";import"./index-6_aePX59.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8liJDyc.js";import"./index-DiROHEzo.js";import"./Alert-BSWbMZ4S.js";import"./createSvgIcon-CyM8AHy5.js";import"./Close-BfpfVcXW.js";import"./AlertTitle-DhPhLS73.js";import"./Dialog-8KpUTwPU.js";import"./DialogContext-wVD5HP8-.js";import"./Modal-DZVQKIJf.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CV_7DsVP.js";import"./Fade-DcwI299R.js";import"./DialogTitle-F9Ql1VNr.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-D7IfaUfi.js";import"./DialogContent-yZLQfDbI.js";import"./DialogContentText-Cwd243ib.js";import"./index-CrcoPoGw.js";import"./index-Oh1IsHaA.js";import"./LinearProgress-DQ9iArLX.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
