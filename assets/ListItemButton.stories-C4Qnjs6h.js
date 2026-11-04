import{j as e,r as C}from"./iframe-igAdvFbl.js";import{I as a}from"./index-C0-lL2nR.js";import{S as c}from"./index-BNigMnXC.js";import{C as y}from"./index-hLgR9kKQ.js";import{h as k,F as P,M as m,D as B}from"./index-LwuFN9gm.js";import{B as j,G as g}from"./index-z9cH4Dkd.js";import{T as S}from"./index-ChMWNEv3.js";import{L as p}from"./ListItemStatusCard-BIUUp1NN.js";import{L as s}from"./ListItemButton-BHk2RG98.js";import{L as l,a as i}from"./ListItemText-AEimT-qo.js";import{L as n}from"./ListItem-DWV0YCM0.js";import{L as d}from"./ListItemIcon-DgYrR4t5.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-C_pwG3tG.js";import"./memoTheme-CLnB_uxM.js";import"./styled-91ph4J30.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B-BThNWO.js";import"./useTimeout-BVAWMZsv.js";import"./TransitionGroupContext-ymy7tNok.js";import"./useForkRef-D-t6gd0T.js";import"./useEventCallback-CsTRRlXt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W3XJwf44.js";import"./Tooltip-Cq44iNEt.js";import"./useTheme-CIUac4TP.js";import"./useSlot-DFdPJoU3.js";import"./mergeSlotProps-Cu3OtoH3.js";import"./useControlled-CFxyCb-W.js";import"./getReactElementRef-B9sY4O0b.js";import"./Portal-CXKAB8qb.js";import"./utils-BtrN11DB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-IKBnSf1M.js";import"./Button-Cul-JvC2.js";import"./Chip-CIjfHXd1.js";import"./createSvgIcon-D2IPPG_U.js";import"./SvgIcon-Bjb7RMXU.js";import"./Checkbox-CkKu5slW.js";import"./SwitchBase-D9KptgKZ.js";import"./useFormControl-Bx8k6zBT.js";import"./mergeSlotProps-DAotqHD5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BVxISqTJ.js";import"./Grid-DZVhVXMq.js";import"./isMuiElement-BIGdb7v5.js";import"./styled-Ai7RJ0M0.js";import"./Stack-BIYUXFFU.js";import"./Container-DJJd4hOz.js";import"./Typography-D8sokpBT.js";import"./ListItem-Dz-VDE-A.js";import"./List-DTJ1rzY1.js";import"./ListItemButton-DSR0rmfs.js";import"./ListItemText-B7kBHfzg.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItemIcon-D17e8xrA.js";import"./listItemIconClasses-BWL98Y3T.js";const _e={title:"Components/List/ListItemButton",component:s,tags:["autodocs"],argTypes:{centerRipple:{table:{disable:!0}},disableRipple:{table:{disable:!0}},disableTouchRipple:{table:{disable:!0}},focusRipple:{table:{disable:!0}},TouchRippleProps:{table:{disable:!0}},touchRippleRef:{table:{disable:!0}}}},x={render:r=>e.jsx(s,{...r}),args:{children:"This text is a child of ListItemButton"}},I={render:()=>e.jsx(j,{children:e.jsxs(l,{children:[e.jsx(n,{disablePadding:!0,children:e.jsx(s,{children:e.jsx(i,{primary:"Default"})})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{selected:!0,children:[e.jsx(d,{children:e.jsx(k,{})}),e.jsx(i,{primary:"Selected"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{className:"Mui-focusVisible",children:[e.jsx(d,{children:e.jsx(P,{})}),e.jsx(i,{primary:"Focused"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{disabled:!0,children:e.jsx(i,{primary:"Disabled"})})})]})})},u={render:()=>e.jsx(j,{component:"nav","aria-label":"mailbox folders",sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.jsxs(l,{children:[e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(k,{})}),e.jsx(i,{primary:"Inbox"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(P,{})}),e.jsx(i,{primary:"Drafts"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{children:e.jsx(i,{primary:"Trash"})})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{component:"a",href:"#folder-list",children:e.jsx(i,{primary:"Spam"})})})]})})},h={render:()=>{const[r,T]=C.useState([0]),f=t=>()=>{const o=r.indexOf(t),L=[...r];o===-1?L.push(t):L.splice(o,1),T(L)};return e.jsxs(g,{container:!0,spacing:8,children:[e.jsxs(g,{size:{xs:12,sm:6},children:[e.jsx(S,{variant:"h6",component:"div",id:"selectable-default-spacing-header",children:"Default Spacing"}),e.jsx(l,{"aria-labelledby":"selectable-default-spacing-header",children:[0,1,2,3].map(t=>{const o=`checkbox-list-label-${t}`;return e.jsx(n,{disablePadding:!0,secondaryAction:e.jsx(a,{edge:"end",title:"delete",children:e.jsx(B,{fontSize:"xsmall"})}),children:e.jsxs(s,{role:void 0,onClick:f(t),selected:r.indexOf(t)!==-1,children:[e.jsx(d,{children:e.jsx(y,{edge:"start",checked:r.indexOf(t)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":o}})}),e.jsx(i,{id:o,primary:`List item ${t+1}`,secondary:"Secondary"})]})},t)})})]}),e.jsxs(g,{size:{xs:12,sm:6},children:[e.jsx(S,{variant:"h6",component:"div",id:"selectable-dense-spacing-header",children:"Dense Spacing"}),e.jsx(l,{dense:!0,"aria-labelledby":"selectable-dense-spacing-header",children:[4,5,6,7].map(t=>{const o=`checkbox-list-label-${t}`;return e.jsx(n,{disablePadding:!0,secondaryAction:e.jsx(a,{edge:"end",title:"delete",children:e.jsx(B,{fontSize:"xsmall"})}),children:e.jsxs(s,{role:void 0,onClick:f(t),selected:r.indexOf(t)!==-1,children:[e.jsx(d,{children:e.jsx(y,{edge:"start",checked:r.indexOf(t)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":o}})}),e.jsx(i,{id:o,primary:`List item ${t+1}`,secondary:"Secondary"})]})},t)})})]})]})}},b={render:()=>e.jsx(j,{sx:{width:"100%",bgcolor:"background.paper"},children:e.jsxs(l,{"aria-label":"list",children:[e.jsx(p,{disablePadding:!0,color:"success",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"success",label:"Approved"})]})}),e.jsx(p,{disablePadding:!0,color:"warning",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"warning",label:"Pending"})]})}),e.jsx(p,{disablePadding:!0,color:"error",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"error",label:"Denied"})]})}),e.jsx(p,{disablePadding:!0,color:"success",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"success",label:"Approved"})]})})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: ListItemButtonProps) => <ListItemButton {...args} />,
  args: {
    children: 'This text is a child of ListItemButton'
  }
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Default" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton selected>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Selected" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="Mui-focusVisible">
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Focused" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemText primary="Disabled" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
}`,...I.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box component="nav" aria-label="mailbox folders" sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#folder-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState([0]);
    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };
    return <Grid container spacing={8}>
        <Grid size={{
        xs: 12,
        sm: 6
      }}>
          <Typography variant="h6" component="div" id="selectable-default-spacing-header">
            Default Spacing
          </Typography>
          <List aria-labelledby="selectable-default-spacing-header">
            {[0, 1, 2, 3].map(value => {
            const labelId = \`checkbox-list-label-\${value}\`;
            return <ListItem key={value} disablePadding secondaryAction={<IconButton edge="end" title="delete">
                      <DeleteIcon fontSize="xsmall" />
                    </IconButton>}>
                  <ListItemButton role={undefined} onClick={handleToggle(value)} selected={checked.indexOf(value) !== -1}>
                    <ListItemIcon>
                      <Checkbox edge="start" checked={checked.indexOf(value) !== -1} tabIndex={-1} inputProps={{
                    'aria-labelledby': labelId
                  }} />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={\`List item \${value + 1}\`} secondary="Secondary" />
                  </ListItemButton>
                </ListItem>;
          })}
          </List>
        </Grid>
        <Grid size={{
        xs: 12,
        sm: 6
      }}>
          <Typography variant="h6" component="div" id="selectable-dense-spacing-header">
            Dense Spacing
          </Typography>
          <List dense aria-labelledby="selectable-dense-spacing-header">
            {[4, 5, 6, 7].map(value => {
            const labelId = \`checkbox-list-label-\${value}\`;
            return <ListItem key={value} disablePadding secondaryAction={<IconButton edge="end" title="delete">
                      <DeleteIcon fontSize="xsmall" />
                    </IconButton>}>
                  <ListItemButton role={undefined} onClick={handleToggle(value)} selected={checked.indexOf(value) !== -1}>
                    <ListItemIcon>
                      <Checkbox edge="start" checked={checked.indexOf(value) !== -1} tabIndex={-1} inputProps={{
                    'aria-labelledby': labelId
                  }} />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={\`List item \${value + 1}\`} secondary="Secondary" />
                  </ListItemButton>
                </ListItem>;
          })}
          </List>
        </Grid>
      </Grid>;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    bgcolor: 'background.paper'
  }}>
      <List aria-label="list">
        <ListItemStatusCard disablePadding color="success" secondaryAction={<IconButton title="More Actions">
              <MoreVerticalIcon fontSize="xsmall" />
            </IconButton>}>
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="success" label="Approved" />
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard disablePadding color="warning" secondaryAction={<IconButton title="More Actions">
              <MoreVerticalIcon fontSize="xsmall" />
            </IconButton>}>
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="warning" label="Pending" />
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard disablePadding color="error" secondaryAction={<IconButton title="More Actions">
              <MoreVerticalIcon fontSize="xsmall" />
            </IconButton>}>
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="error" label="Denied" />
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard disablePadding color="success" secondaryAction={<IconButton title="More Actions">
              <MoreVerticalIcon fontSize="xsmall" />
            </IconButton>}>
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="success" label="Approved" />
          </ListItemButton>
        </ListItemStatusCard>
      </List>
    </Box>
}`,...b.parameters?.docs?.source}}};const Oe=["_ListItemButton","_States","_FolderList","_Selectable","_InteractiveStatusCards"];export{u as _FolderList,b as _InteractiveStatusCards,x as _ListItemButton,h as _Selectable,I as _States,Oe as __namedExportsOrder,_e as default};
