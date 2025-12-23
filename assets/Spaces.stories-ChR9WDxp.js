import{j as p}from"./iframe-DF1q2aaL.js";import{P as t}from"./index-BUlTtQc8.js";import{T as i}from"./index-Q8RjvuCg.js";import{S}from"./index-DCToeNHS.js";import{S as d,u as y,a as l}from"./Spaces-DbEpCaoN.js";import{Q as u}from"./suspense-D2jJ5ZoL.js";import{Q as x}from"./queryClient-DEpNktwJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-DZhAfepD.js";import"./useTheme-C0GFliqz.js";import"./styled-CFEXa4qH.js";import"./memoTheme-BD6H9365.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-cWmdXt40.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-CIJZFnEp.js";import"./Grid-BQHRv1eX.js";import"./styled-PDED6P24.js";import"./isMuiElement-Q-8wUiYz.js";import"./Stack--jn-4dia.js";import"./Container-CTcWCZH6.js";import"./index-YlfiJdep.js";import"./index-CNpGYZ4b.js";import"./___vite-browser-external_commonjs-proxy-BDFX1rAg.js";import"./index-BmlCcuES.js";import"./_toKey-zNE1Oh7L.js";import"./index-BwaRk1nN.js";import"./index-D2mEmfXN.js";import"./Tooltip-BXhUmSeH.js";import"./useSlot-CQvSmYnu.js";import"./mergeSlotProps-BnmzE4jq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-TFDBL_.js";import"./useTimeout-CJLBifOK.js";import"./useControlled-C2txOzyk.js";import"./useEventCallback-C9NbUrxX.js";import"./getReactElementRef-Cr3R6gAV.js";import"./Portal-CbFePWP9.js";import"./utils-BdM8s10D.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B0ZOsC4g.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-K-5rBd1A.js";import"./ButtonBase-D5OUD9Sm.js";import"./CircularProgress-DkK8nyO-.js";import"./Button-B9ufjNyc.js";import"./index-DJNX-Iyq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DB8Z1ZTq.js";import"./index-DmX3TV1f.js";import"./Alert-CKz_Ipst.js";import"./createSvgIcon-DzcieuLS.js";import"./Close-DyTYpaPw.js";import"./AlertTitle-DX6i04AW.js";import"./Dialog-BhmIF177.js";import"./DialogContext-nEG89O_o.js";import"./Fade-CQtVaZQb.js";import"./Modal-BadjnIQl.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Ck1pJi37.js";import"./DialogTitle-BtjIVWQ2.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogActions-oKXn7q3H.js";import"./DialogContent-CbayTfMU.js";import"./DialogContentText-D2U-m-zb.js";import"./index-DS1ZdVNz.js";import"./Img-DyeHzkXY.js";import"./index-Chjiymov.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BCu4h_T7.js";import"./LinearProgress-DmIwFAvm.js";import"./index-fkdObIec.js";import"./index-59p-ZqwA.js";import"./infiniteQueryBehavior-B_QQvG9O.js";const Kp={title:"Components/Spaces/Spaces",component:d,tags:["autodocs"]},g=new x,a=({spaceId:r})=>{const e=l(r),o=e==null?void 0:e.find(h=>h.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:o?`Space ${o==null?void 0:o.configurationId} is in provider`:`Space ${r} is not in provider`})})},f=({children:r})=>{const{loading:e}=y();return e?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},s={render:r=>p.jsx(u,{client:g,children:p.jsx(d,{...r,children:p.jsx(f,{children:p.jsxs(S,{spacing:2,children:[p.jsxs(t,{children:[p.jsx(i,{children:"Space 1 was passed in the props."}),p.jsx(a,{spaceId:"1"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(a,{spaceId:"2"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 3 was not returned."}),p.jsx(a,{spaceId:"3"})]}),p.jsxs(t,{children:[p.jsx(i,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(a,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
