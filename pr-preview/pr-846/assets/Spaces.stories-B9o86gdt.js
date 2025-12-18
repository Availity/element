import{j as p}from"./iframe-DdXne19Y.js";import{P as t}from"./index-CTw9P5Ht.js";import{T as i}from"./index-DoFuDAeK.js";import{S}from"./index-MeSa46Cj.js";import{S as d,u as y,a as l}from"./Spaces-C3thhZDP.js";import{Q as u}from"./suspense-Bp_Ztepr.js";import{Q as x}from"./queryClient-Bujeqmj5.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-CbzX-jOu.js";import"./useTheme-CuyM6APQ.js";import"./styled-BazYwfX2.js";import"./memoTheme-CUJXAVnw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DcBpERD3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-C-w4SaHJ.js";import"./Grid-C_HzQ4gC.js";import"./styled-BF4YlmQL.js";import"./isMuiElement-DibdeMrO.js";import"./Stack-C_AZLH4Q.js";import"./Container-DBlL8WTt.js";import"./index-BXHPM8K7.js";import"./index-D35-BLT6.js";import"./___vite-browser-external_commonjs-proxy-D-ehYrxU.js";import"./index-Bskay2f6.js";import"./_toKey-rHS324HZ.js";import"./index-Cp6CUGZS.js";import"./index-BAQ-tpih.js";import"./Tooltip-Rz90OO73.js";import"./useSlot-C03We_gL.js";import"./mergeSlotProps-DnK45DUJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CwS1hXJN.js";import"./useTimeout-DNSBYZWv.js";import"./useControlled-Z6Q03A9f.js";import"./useEventCallback-tpV6a8iV.js";import"./getReactElementRef-DEBAn-f7.js";import"./Portal-DsQ-EqqM.js";import"./utils-Ch6tMI2K.js";import"./TransitionGroupContext-BmVNFFik.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-By8gKRU1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-AJGji1yG.js";import"./ButtonBase-QyfCUXJP.js";import"./CircularProgress-BfO5yz2q.js";import"./Button-CllFJQRZ.js";import"./index-CNxWBKtb.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-BQDSNwSM.js";import"./index-D2FxyoCn.js";import"./Alert-BjtWGRQR.js";import"./createSvgIcon-DN69LkXl.js";import"./Close-BxR2kOeP.js";import"./AlertTitle-BJB4rz4g.js";import"./Dialog-Cod5f1PC.js";import"./DialogContext-BmMxia2n.js";import"./Fade-CCyBXsDD.js";import"./Modal-BbyhaS1O.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dq9HqcNO.js";import"./DialogTitle-BOYT_VD4.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-4fgAAIau.js";import"./DialogContent-BMggBKey.js";import"./DialogContentText-BjW9K6zP.js";import"./index-DS1ZdVNz.js";import"./Img-CZhOWS0b.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-CzQYvz3D.js";import"./LinearProgress-QQ3dovvk.js";import"./index-DLkpdyj-.js";import"./index-DZi04D16.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
