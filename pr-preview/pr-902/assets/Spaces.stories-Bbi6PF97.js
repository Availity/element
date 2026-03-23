import{j as p}from"./iframe-hulqVKFa.js";import{P as e}from"./index-CWsRpgkr.js";import{T as o}from"./index-PP9CmKdi.js";import{S as n}from"./index-BlNR_NWf.js";import{S as m,u as d,a as h}from"./Spaces-Mc_1XCPa.js";import{Q as S}from"./suspense-DvAJhkuK.js";import{Q as y}from"./queryClient-BeWqNE-O.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BVOs07DX.js";import"./useTheme-C7AUirRA.js";import"./styled-CYnX6RAa.js";import"./memoTheme-B_nCzl8M.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-COHcSKH7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CyvodRNS.js";import"./Grid-CPl8rXDT.js";import"./isMuiElement-B2zjcqD7.js";import"./styled-QvSbzdTE.js";import"./Stack-B2rPYqjB.js";import"./Container-CNnb763M.js";import"./index-CKDMRTl1.js";import"./index-D23EGe5u.js";import"./___vite-browser-external_commonjs-proxy-DNDhTIwV.js";import"./index-BoMQfRhQ.js";import"./_toKey-CGmVVdEL.js";import"./index-zCijgSgk.js";import"./index-CWJdyCdu.js";import"./Tooltip-CwFATdR1.js";import"./useSlot-CalbLJ3n.js";import"./mergeSlotProps-C6UhvrC4.js";import"./useForkRef-BQz3TnTQ.js";import"./useTimeout-Bim6OzXz.js";import"./useControlled-maN10Goq.js";import"./useEventCallback-IcKGM0BT.js";import"./getReactElementRef-DCfmlyG2.js";import"./Portal-BqpYj0TQ.js";import"./utils-CqZ-bN0c.js";import"./TransitionGroupContext-DQUbB_yy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CO5Qh0k_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D52dKoJw.js";import"./ButtonBase-2bDflI9o.js";import"./CircularProgress-p22Pqfnj.js";import"./Button-BD9YMHcT.js";import"./index-CFZ7DghX.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-i9gddw4o.js";import"./index-DcJfW9VW.js";import"./Alert-C-_cKx_a.js";import"./createSvgIcon-MyKUcFFT.js";import"./Close-xxpo3l9y.js";import"./AlertTitle-CuvVoyHw.js";import"./Dialog-DgKcR5Zk.js";import"./DialogContext-xhAzdKEJ.js";import"./Fade-T6bIu7ga.js";import"./Modal-BIuYGRLg.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-l3mPJCzo.js";import"./DialogTitle-D6mUYjq3.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-Vt9FSCOS.js";import"./DialogContent-BrqA7VZ6.js";import"./DialogContentText-DvJWOxUf.js";import"./index-BiBDMnSv.js";import"./Img-DQOqG7Ri.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BTr28Qx5.js";import"./LinearProgress-BBhAujjV.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Dp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=h(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=d();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(S,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
