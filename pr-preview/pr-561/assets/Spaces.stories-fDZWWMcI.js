import{j as p}from"./jsx-runtime-CcL-W3nW.js";import{P as t}from"./index-VrFd62RU.js";import{T as i}from"./index-Bssefeeu.js";import{S}from"./index-Dnj5y9bu.js";import{S as d,u as y,a as l}from"./Spaces-txVz2Qeo.js";import{Q as u}from"./suspense-gSMUnaCZ.js";import{Q as x}from"./queryClient-mdpH4muO.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Paper-DoDJPSvm.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./useTheme-Cf-RAc4Y.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./useTheme-DwYC2ms6.js";import"./styled-wZqJTO_n.js";import"./memoTheme-CIpOTVoB.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./Typography-Dw3TlP36.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-DR5TX31P.js";import"./Grid2-CHb9J3Cd.js";import"./styled-CIC6PLSI.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-BAwiOWAz.js";import"./Stack-BPYMGdgv.js";import"./Container-7wpQgvnn.js";import"./index-Cs70mkZF.js";import"./index-IdGqEWBr.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";import"./Img-BRsSMGxO.js";import"./index-DSGElAqY.js";import"./Tooltip-BNHD4B5V.js";import"./index-nos-0K8U.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-D32Mdiva.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DE50rPTb.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DGohL5ME.js";import"./ButtonBase-Ctwr4_Dd.js";import"./CircularProgress-D2topXWR.js";import"./Button-C-tuTFv-.js";import"./LoadingButton-BK9aMQRn.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DfAk99tL.js";import"./index-CGJ-FG5i.js";import"./Alert-CDZ60Lm0.js";import"./createSvgIcon-BzSwLqYD.js";import"./Close-B57SlfWx.js";import"./AlertTitle-9tHYplCn.js";import"./Dialog-Bezkiekg.js";import"./DialogContext-DL4ikWki.js";import"./Fade-DlB6bWB0.js";import"./Modal-B_4-9GXq.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-4xfgJS0q.js";import"./DialogTitle-CGUbK_oI.js";import"./dialogTitleClasses-B6SGNV70.js";import"./DialogActions-BPFkXPrF.js";import"./DialogContent-Cipzhtip.js";import"./index-Dk74W0Oi.js";import"./index-DMWJB0MK.js";import"./dayjs.min-DnLU8EWa.js";import"./index-Cg_05TkR.js";import"./LinearProgress-CMMmg-Du.js";const Vp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const o=l(r),e=o==null?void 0:o.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:e?`Space ${e==null?void 0:e.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:o}=y();return o?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const Wp=["_Spaces"];export{s as _Spaces,Wp as __namedExportsOrder,Vp as default};
