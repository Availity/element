import{j as e,r as C}from"./iframe-_ZTccD58.js";import{I as a}from"./index-DLaYSOpi.js";import{S as c}from"./index-Y1cc5S84.js";import{C as y}from"./index-D1mIRonj.js";import{h as k,F as P,M as m,D as B}from"./index-D2g-Snq2.js";import{B as j,G as g}from"./index-MbAAKXvE.js";import{T as S}from"./index-CHmUp4gL.js";import{L as p}from"./ListItemStatusCard-DIhQ1gfh.js";import{L as s}from"./ListItemButton-CVwK1Q7x.js";import{L as l,a as i}from"./ListItemText-CiNgXhPo.js";import{L as n}from"./ListItem-DSmh4nOp.js";import{L as d}from"./ListItemIcon-CkqIY1t2.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-DaIXPvFu.js";import"./memoTheme-BuxtMmS2.js";import"./styled-DxUGJNed.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-CPTcrrxt.js";import"./useTimeout-COBvC2JW.js";import"./TransitionGroupContext-U0kEnV9D.js";import"./useForkRef-BH960YuM.js";import"./useEventCallback-Bsg7GzMN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DP4XdEyk.js";import"./Tooltip-BlJXya1q.js";import"./useTheme-CbKlvc9V.js";import"./useSlot-Y1vfiROK.js";import"./mergeSlotProps-BNTkh1_h.js";import"./useControlled-h9lrVQtL.js";import"./getReactElementRef-CKHPMftD.js";import"./Portal-D40QliBd.js";import"./utils-CGytJ6bP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-93kC9vNJ.js";import"./Button-DpAEBbkn.js";import"./Chip-JdieyNSv.js";import"./createSvgIcon-CPBwa84_.js";import"./SvgIcon-B7LeHXNQ.js";import"./Checkbox-pjINZKhp.js";import"./SwitchBase-BCE6kg8q.js";import"./useFormControl-3-vne5Nr.js";import"./mergeSlotProps-D6scpCU0.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BSxgn2ms.js";import"./Grid-cMYs6nxO.js";import"./isMuiElement-yepEbMeh.js";import"./styled-B0tsulN_.js";import"./Stack-DA_tb5jO.js";import"./Container-ChGZTn1s.js";import"./Typography-BQev244I.js";import"./ListItem-jLm6eUX0.js";import"./List-D6qKeGNd.js";import"./ListItemButton-DOncgoUs.js";import"./ListItemText-ChTRXEE3.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItemIcon-BJRBQ6fS.js";import"./listItemIconClasses-BWL98Y3T.js";const _e={title:"Components/List/ListItemButton",component:s,tags:["autodocs"],argTypes:{centerRipple:{table:{disable:!0}},disableRipple:{table:{disable:!0}},disableTouchRipple:{table:{disable:!0}},focusRipple:{table:{disable:!0}},TouchRippleProps:{table:{disable:!0}},touchRippleRef:{table:{disable:!0}}}},x={render:r=>e.jsx(s,{...r}),args:{children:"This text is a child of ListItemButton"}},I={render:()=>e.jsx(j,{children:e.jsxs(l,{children:[e.jsx(n,{disablePadding:!0,children:e.jsx(s,{children:e.jsx(i,{primary:"Default"})})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{selected:!0,children:[e.jsx(d,{children:e.jsx(k,{})}),e.jsx(i,{primary:"Selected"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{className:"Mui-focusVisible",children:[e.jsx(d,{children:e.jsx(P,{})}),e.jsx(i,{primary:"Focused"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{disabled:!0,children:e.jsx(i,{primary:"Disabled"})})})]})})},u={render:()=>e.jsx(j,{component:"nav","aria-label":"mailbox folders",sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.jsxs(l,{children:[e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(k,{})}),e.jsx(i,{primary:"Inbox"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(P,{})}),e.jsx(i,{primary:"Drafts"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{children:e.jsx(i,{primary:"Trash"})})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{component:"a",href:"#folder-list",children:e.jsx(i,{primary:"Spam"})})})]})})},h={render:()=>{const[r,T]=C.useState([0]),f=t=>()=>{const o=r.indexOf(t),L=[...r];o===-1?L.push(t):L.splice(o,1),T(L)};return e.jsxs(g,{container:!0,spacing:8,children:[e.jsxs(g,{size:{xs:12,sm:6},children:[e.jsx(S,{variant:"h6",component:"div",id:"selectable-default-spacing-header",children:"Default Spacing"}),e.jsx(l,{"aria-labelledby":"selectable-default-spacing-header",children:[0,1,2,3].map(t=>{const o=`checkbox-list-label-${t}`;return e.jsx(n,{disablePadding:!0,secondaryAction:e.jsx(a,{edge:"end",title:"delete",children:e.jsx(B,{fontSize:"xsmall"})}),children:e.jsxs(s,{role:void 0,onClick:f(t),selected:r.indexOf(t)!==-1,children:[e.jsx(d,{children:e.jsx(y,{edge:"start",checked:r.indexOf(t)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":o}})}),e.jsx(i,{id:o,primary:`List item ${t+1}`,secondary:"Secondary"})]})},t)})})]}),e.jsxs(g,{size:{xs:12,sm:6},children:[e.jsx(S,{variant:"h6",component:"div",id:"selectable-dense-spacing-header",children:"Dense Spacing"}),e.jsx(l,{dense:!0,"aria-labelledby":"selectable-dense-spacing-header",children:[4,5,6,7].map(t=>{const o=`checkbox-list-label-${t}`;return e.jsx(n,{disablePadding:!0,secondaryAction:e.jsx(a,{edge:"end",title:"delete",children:e.jsx(B,{fontSize:"xsmall"})}),children:e.jsxs(s,{role:void 0,onClick:f(t),selected:r.indexOf(t)!==-1,children:[e.jsx(d,{children:e.jsx(y,{edge:"start",checked:r.indexOf(t)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":o}})}),e.jsx(i,{id:o,primary:`List item ${t+1}`,secondary:"Secondary"})]})},t)})})]})]})}},b={render:()=>e.jsx(j,{sx:{width:"100%",bgcolor:"background.paper"},children:e.jsxs(l,{"aria-label":"list",children:[e.jsx(p,{disablePadding:!0,color:"success",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"success",label:"Approved"})]})}),e.jsx(p,{disablePadding:!0,color:"warning",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"warning",label:"Pending"})]})}),e.jsx(p,{disablePadding:!0,color:"error",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"error",label:"Denied"})]})}),e.jsx(p,{disablePadding:!0,color:"success",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"success",label:"Approved"})]})})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
