import{j as p}from"./iframe-C7RYpRRO.js";import{P as e}from"./index-D141wv3c.js";import{T as o}from"./index-BnSCHJ_C.js";import{S as n}from"./index-C2dcAPuD.js";import{Q as d}from"./suspense-B52kGHoD.js";import{S as m,u as h,a as S}from"./Spaces-DVyTcOPD.js";import{Q as y}from"./queryClient-CeXiNIqq.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DUYPN4Ep.js";import"./useTheme-WpQOCtdc.js";import"./styled-Cqgr8yLU.js";import"./memoTheme-DZ9vOlqG.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-heIaV1nZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DobRJWDd.js";import"./Grid-52szHxD-.js";import"./isMuiElement-Do9YpkA9.js";import"./styled-Cn_UBHgZ.js";import"./Stack-D9VD4k0X.js";import"./Container-Bhb68_To.js";import"./Img-DySBQomJ.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BiONWhux.js";import"./index-BXxND2oO.js";import"./___vite-browser-external_commonjs-proxy-JNcaBvwg.js";import"./index-CY8VLdQ2.js";import"./index-zvbsc44_.js";import"./index-C-TAFGmA.js";import"./IconButton-DUEQnTYy.js";import"./ButtonBase-YfnvzWnB.js";import"./useTimeout-IWs7fXER.js";import"./TransitionGroupContext-D50vcWaO.js";import"./useForkRef-mY6jA1_e.js";import"./useEventCallback-BmDadX9V.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DRusqeVx.js";import"./Tooltip-By5WBZwq.js";import"./useSlot-lfX05XTl.js";import"./mergeSlotProps-BkPIbwBi.js";import"./useControlled-C5e-G2Uo.js";import"./getReactElementRef-CzYjVf0K.js";import"./Portal-B-Fuv61-.js";import"./utils-BrOTTAGC.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CyQLJvs1.js";import"./Button-DYbxeNEo.js";import"./index-B0i75ydy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZsvZcJW.js";import"./index-9eteTCHj.js";import"./Alert-CfBRJ3r-.js";import"./createSvgIcon-Dc4WGqJQ.js";import"./Close-BiGB54sc.js";import"./AlertTitle-DGoY44o6.js";import"./Dialog-22x339-C.js";import"./DialogContext-5ONaB7wJ.js";import"./Modal-Vlv0KwQ6.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DbHQkIp9.js";import"./Fade-BHmjLU7V.js";import"./DialogTitle-8eL_LI5-.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-hTuV5oig.js";import"./DialogContent-Bj0MuiAH.js";import"./DialogContentText-DYj3k3WV.js";import"./index-MVgG_W0q.js";import"./index-_B92hG-5.js";import"./LinearProgress-QN0p7k7V.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
