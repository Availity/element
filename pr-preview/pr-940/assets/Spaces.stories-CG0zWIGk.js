import{j as p}from"./iframe-CEHPhfh-.js";import{P as e}from"./index-BzmlnbPG.js";import{T as o}from"./index-Bao5kwzm.js";import{S as n}from"./index-DYWaDwbT.js";import{Q as d}from"./suspense-BdvrWJMi.js";import{S as m,u as h,a as S}from"./Spaces-DqA3THcA.js";import{Q as y}from"./queryClient-B2V29dMp.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CXpuvckS.js";import"./useTheme-B_yH_tF0.js";import"./styled-surM00hH.js";import"./memoTheme-CIUXmmP3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CJQmKVEQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Box-JfKqa7ps.js";import"./Grid-BWykgrcb.js";import"./isMuiElement-B3XjmQiv.js";import"./styled-Z7vS--HU.js";import"./Stack-kFyJTz_L.js";import"./Container-WyARCUam.js";import"./Img-Pg8dY3sR.js";import"./toPropertyKey-DCwh5dYN.js";import"./index-BFKNcTNX.js";import"./index-ChMXBR0c.js";import"./___vite-browser-external_commonjs-proxy-B-zXSXgP.js";import"./index-CY8VLdQ2.js";import"./index-Bv0VDgQV.js";import"./index-BiRTiuFa.js";import"./IconButton-DFv4hPcI.js";import"./ButtonBase-Bi9yKj0d.js";import"./useTimeout-C36QQqY4.js";import"./TransitionGroupContext-KFjAD8lx.js";import"./useForkRef-CUwhrb4S.js";import"./useEventCallback-BjU86bqT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIulSjrJ.js";import"./Tooltip-BwegOhQ3.js";import"./useSlot-CGHriRRK.js";import"./mergeSlotProps-DqsR1CiL.js";import"./useControlled-CuNUqud6.js";import"./getReactElementRef-BKZTuICO.js";import"./Portal-BAyfuJxK.js";import"./utils-Dqw6COyO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CX3w_7Yv.js";import"./Button-DCMVSOfW.js";import"./index-tILHWvZu.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CRmvg5rp.js";import"./index-CNKzIYNh.js";import"./Alert-Di6tklp4.js";import"./createSvgIcon-DM21giQZ.js";import"./Close-DTmO9E2Q.js";import"./AlertTitle-IvT2lXKQ.js";import"./Dialog-DukkXOxw.js";import"./DialogContext-BkW310bt.js";import"./Modal-D7vdJCxc.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BLceXtZc.js";import"./Fade-snlpbKkK.js";import"./DialogTitle-7nKUrhZM.js";import"./dialogTitleClasses-B4u1Q5-u.js";import"./DialogActions-bICnDY-3.js";import"./DialogContent-BIA-V_js.js";import"./DialogContentText-BciUGejc.js";import"./index-CrcoPoGw.js";import"./index-DSqElMjD.js";import"./LinearProgress-Qu-wwM83.js";const zp={title:"Components/Spaces/Spaces",component:m,tags:["autodocs"]},l=new y,t=({spaceId:r})=>{const s=S(r)?.find(c=>c.configurationId===r);return p.jsx("div",{children:p.jsx("span",{id:`space-for-${r}`,children:s?`Space ${s?.configurationId} is in provider`:`Space ${r} is not in provider`})})},u=({children:r})=>{const{loading:a}=h();return a?p.jsx("span",{children:"loading..."}):p.jsx("div",{children:r})},i={render:r=>p.jsx(d,{client:l,children:p.jsx(m,{...r,children:p.jsx(u,{children:p.jsxs(n,{spacing:2,children:[p.jsxs(e,{children:[p.jsx(o,{children:"Space 1 was passed in the props."}),p.jsx(t,{spaceId:"1"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 2 was fetched from the api via the spaceId passed in the props."}),p.jsx(t,{spaceId:"2"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 3 was not returned."}),p.jsx(t,{spaceId:"3"})]}),p.jsxs(e,{children:[p.jsx(o,{children:"Space 11 was fetched from the api via the payerId passed in the props."}),p.jsx(t,{spaceId:"11"})]})]})})})}),args:{spaces:[{id:"1",configurationId:"1",type:"space",name:"Space 1"}],spaceIds:["2"],payerIds:["a"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
