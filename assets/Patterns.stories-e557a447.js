import{a as e,j as a}from"./jsx-runtime-a3bcee63.js";import{r as z}from"./index-570b25c1.js";import{B as F,I as te}from"./index-5496e90f.js";import{C as le}from"./index-07d1cb73.js";import{F as oe,b as ae,c as ie,a as ne}from"./index-a5c9266e.js";import{S as se,k as ce,C as me}from"./index-cb4dbded.js";import{B as g,G as h,S as H}from"./index-d756ba90.js";import{M as ue}from"./MenuItem-21f22cdd.js";import{P as pe}from"./index-e6397f93.js";import{T as de}from"./index-9e86b6d5.js";import{T as L}from"./index-96688515.js";import{u as M,C as T}from"./index.esm-d81a0d8c.js";import{a as he,c as be}from"./TablePagination-e561a42b.js";import{a as R,T as fe}from"./TableRow-1c892633.js";import{T as i}from"./TableCell-4ebf2305.js";import{T as ye}from"./TableContainer-18d5822e.js";import"./TableSortLabel-49a797b7.js";import{F as ve}from"./FormLabel-16418a49.js";import{I as W}from"./InputAdornment-7e93bf94.js";import{P as Fe}from"./Popover-277c5654.js";import{F as ge}from"./FormGroup-7fc7ab9c.js";import{L as Ce}from"./Link-a674eae6.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-d84dd9a0.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-c716d13a.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./Grow-e87a736b.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-f4be827f.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./Chip-31690be4.js";import"./createSvgIcon-60c2b2ae.js";import"./SvgIcon-951d7748.js";import"./index-9681c8ff.js";import"./Box-0b96d669.js";import"./extendSxProp-9115426f.js";import"./FormControlLabel-625d44f3.js";import"./utils-3d35716f.js";import"./Typography-f61e077a.js";import"./Stack-8a417692.js";import"./styled-11d1647d.js";import"./FormHelperText-ae2a8f0e.js";import"./OutlinedInput-bd5ed4eb.js";import"./ownerWindow-03d1c82d.js";import"./debounce-517eeb3c.js";import"./GlobalStyles-7ba993a7.js";import"./Select-be273af1.js";import"./react-is.production.min-a192e302.js";import"./Menu-932c384c.js";import"./Modal-8fa896b2.js";import"./Backdrop-49825a13.js";import"./createChainedFunction-0bab83cf.js";import"./Divider-fcaf2f3a.js";import"./dividerClasses-b19abef8.js";import"./faCircleArrowRight-e7789e56.js";import"./faMagnifyingGlass-482fd726.js";import"./Container-a1530f69.js";import"./Grid2-c21e3f98.js";import"./isMuiElement-6907f060.js";import"./Paper-722ac472.js";import"./TextField-785bc636.js";import"./TablePagination-e7d9bda9.js";import"./TableCell-fb4a8185.js";import"./KeyboardArrowRight-f02ae11e.js";import"./PaginationItem-822000d2.js";import"./Pagination-fdc7dc59.js";import"./TableRow-c3ef4dbb.js";import"./TableContainer-417e126a.js";import"./TableSortLabel-7b4a57ce.js";var _=u=>e(ue,{...u,disableRipple:!0,disableTouchRipple:!0});const it={title:"Components/Table/Patterns",tags:["autodocs"],parameters:{docs:{description:{component:"UX approved patterns to accompany Table"}}}},X=u=>a(pe,{sx:{borderWidth:"1px",borderColor:"border.decoration",marginTop:2,borderBottom:"none"},children:[e(u,{}),e(ye,{children:a(he,{children:[e(be,{children:a(R,{children:[e(i,{children:"Column 1"}),e(i,{children:"Column 2"}),e(i,{children:"Column 3"}),e(i,{children:"Column 4"}),e(i,{children:"Column 5"}),e(i,{children:"Column 6"})]})}),e(fe,{children:e(R,{children:e(i,{sx:{borderBottom:"none"}})})})]})})]}),C={render:(u,{globals:{theme:S}})=>e(i,{component:"div",variant:"header",size:S==="light"?"medium":"small",children:e(L,{component:"div",variant:"h6",children:"Table Title"})}),decorators:[X]},V={render:(u,{globals:{theme:S}})=>{const J=[{searchbyValue:"column2",searchbyLabel:"Column 2",searchValue:"Payer 1"},{searchbyValue:"column5",searchbyLabel:"Column 5",searchValue:"Pending"}],I=[{label:"Column 1",value:"column1"},{label:"Column 2",value:"column2"},{label:"Column 3",value:"column3"}],K={searchbyValue:"column1",searchValue:""},[n,B]=z.useState(J),[k,w]=z.useState(null),A=!!k,O=A?"filter-popover":void 0,x=()=>{w(null)},N=r=>{w(r.currentTarget)},Q=r=>{const t=n.findIndex(l=>l.searchbyValue===r.searchbyValue&&l.searchValue===r.searchValue);n.splice(t,1),B([...n])},P=r=>{const t=[...n,...r].sort((l,o)=>{const s=l.searchbyLabel.toUpperCase(),b=o.searchbyLabel.toUpperCase();return s<b?-1:s>b?1:0});B([...t])},{handleSubmit:Y,control:G}=M({defaultValues:K}),ee=r=>{var l;const t={...r,searchbyLabel:((l=I.find(o=>o.value===r.searchbyValue))==null?void 0:l.label)||""};!n.find(o=>o.searchbyValue===t.searchbyValue&&o.searchValue===t.searchValue)&&P([t])},re=()=>{const r={column4:"",column5:"",column6:""},t=[{label:"Column 4",value:"column4"},{label:"Column 5",value:"column5"},{label:"Column 6",value:"column6"}],l=[{label:"Value 1",value:"value1"},{label:"Value 2",value:"value2"},{label:"Value 3",value:"value3"}],{handleSubmit:o,control:s,reset:b,formState:{errors:Ve}}=M({defaultValues:r});return e(g,{component:"form",id:"filter-form",onSubmit:o(p=>{var f,y;const d=[];for(const[v,c]of Object.entries(p)){const E=c&&!n.find(m=>m.searchbyValue===v&&m.searchValue===c)&&{searchbyValue:v,searchbyLabel:((f=t.find(m=>m.value===v))==null?void 0:f.label)||"",searchValue:c,searchLabel:((y=l.find(m=>m.value===c))==null?void 0:y.label)||""};E&&d.push(E)}d&&P(d),x()}),onReset:()=>b(),children:a(H,{direction:"column",spacing:2,children:[t.map(p=>e(T,{name:p.value,control:s,render:({field:{onChange:d,value:f},fieldState:{error:y},formState:v})=>e(de,{label:p.label,error:!!y,value:f,onChange:d,select:!0,margin:"none",children:l.map(c=>e(_,{value:c.value,children:c.label},c.value))},p.value)})),a(H,{direction:"row",spacing:2,children:[e(F,{type:"reset",color:"secondary",children:"Reset Filters"}),e(F,{type:"submit",color:"primary",children:"Apply Filters"})]})]})})};return a(i,{component:"div",variant:"header",size:S==="light"?"medium":"small",children:[e(L,{component:"h3",variant:"h6",marginBottom:3,children:"Table Title"}),a(g,{component:"form",id:"search-form",onSubmit:Y(ee),sx:{paddingBottom:2},children:[e(oe,{htmlFor:"searchbyValue",id:"searchbyValueLabel",children:"Search By"}),a(h,{container:!0,spacing:1,flexWrap:"wrap",width:"100%",children:[e(h,{children:e(T,{name:"searchbyValue",control:G,rules:{required:{value:!0,message:"This field is required"}},render:({field:{onChange:r,value:t,ref:l},fieldState:{error:o}})=>e(ae,{fullWidth:!1,error:!!o,value:t,onChange:r,inputRef:l,margin:"none",sx:{flexShrink:0},labelId:"searchbyValueLabel",children:I.map(s=>e(_,{value:s.value,children:s.label},s.value))})})}),e(h,{sm:!0,children:e(T,{name:"searchValue",control:G,rules:{required:{value:!0,message:"This field is required"}},render:({field:{onChange:r,value:t,ref:l},fieldState:{error:o}})=>a(ve,{error:!!o,margin:"none",sx:{flexGrow:1},fullWidth:!0,children:[e(ie,{id:"search",value:t,onChange:r,inputRef:l,startAdornment:e(W,{position:"start",children:e(se,{})}),placeholder:"Search",fullWidth:!0}),e(ne,{children:o&&o.message})]})})}),e(h,{children:e(F,{type:"submit",color:"primary",size:"large",children:"Search"})}),e(h,{children:a(F,{type:"button",color:"secondary","aria-controls":O||"",id:"filter-button",onClick:N,size:"large",children:[e(W,{position:"start",sx:{color:"inherit"},children:e(ce,{})}),"Filter"]})})]})]}),e(Fe,{id:O,"aria-labelledby":"filter-header",open:A,anchorEl:k,onClose:x,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:a(g,{sx:{padding:2},children:[a(g,{justifyContent:"space-between",display:"flex",paddingBottom:2,children:[e(L,{component:"h2",variant:"h6",id:"filter-header",children:"Filters"}),e(te,{title:"close",onClick:x,sx:{m:"-12px"},children:e(me,{fontSize:"small"})})]}),e(re,{})]})}),a(ge,{"aria-label":"filters",role:"group",row:!0,children:[n.map(r=>e(le,{label:`${r.searchbyLabel}: ${r.searchLabel||r.searchValue}`,onDelete:()=>Q(r),sx:{mr:1,mb:1}},`${r.searchbyValue}-${r.searchValue.toString().replace(/[^A-Z0-9]+/gi,"_")}}`)),!!n.length&&e(Ce,{component:"button",typography:"body1",height:"26px",onClick:()=>{B([])},children:"Clear All Filters"})]})]})},decorators:[X]};var $,q,j;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args, {
    globals: {
      theme
    }
  }) => <TableCell component="div" variant="header" size={theme === 'light' ? 'medium' : 'small'}>
      <Typography component="div" variant="h6">
        Table Title
      </Typography>
    </TableCell>,
  decorators: [HeaderDecorator]
}`,...(j=(q=C.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var D,U,Z;V.parameters={...V.parameters,docs:{...(D=V.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args, {
    globals: {
      theme
    }
  }) => {
    type OptionType = {
      label: string;
      value: string;
    };
    type Filter = {
      searchbyValue: string;
      searchbyLabel: string;
      searchValue: string | number;
      searchLabel?: string;
    };
    const defaultFilters: Filter[] = [{
      searchbyValue: 'column2',
      searchbyLabel: 'Column 2',
      searchValue: 'Payer 1'
    }, {
      searchbyValue: 'column5',
      searchbyLabel: 'Column 5',
      searchValue: 'Pending'
    }];
    const searchByOptions = [{
      label: 'Column 1',
      value: 'column1'
    }, {
      label: 'Column 2',
      value: 'column2'
    }, {
      label: 'Column 3',
      value: 'column3'
    }];
    const defaultSearchByValues = {
      searchbyValue: 'column1',
      searchValue: ''
    };
    const [filters, setFilters] = useState<Array<Filter>>(defaultFilters);
    const [filterAnchorEl, setFilterAnchorEl] = useState<HTMLButtonElement | null>(null);
    const isFilterPopoverOpen = Boolean(filterAnchorEl);
    const filterPopoverId = isFilterPopoverOpen ? 'filter-popover' : undefined;
    const handlePopoverClose = () => {
      setFilterAnchorEl(null);
    };
    const handleFilterButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setFilterAnchorEl(event.currentTarget);
    };
    const removeFilter = (filter: Filter) => {
      const index = filters.findIndex(item => item.searchbyValue === filter.searchbyValue && item.searchValue === filter.searchValue);
      filters.splice(index, 1);
      setFilters([...filters]);
    };
    const addFilters = (newFilters: Filter[]) => {
      const updatedFilters = [...filters, ...newFilters].sort((a, b) => {
        const nameA = a.searchbyLabel.toUpperCase();
        const nameB = b.searchbyLabel.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setFilters([...updatedFilters]);
    };
    const {
      handleSubmit,
      control
    } = useForm<Filter>({
      defaultValues: defaultSearchByValues
    });
    const onSearchSubmit = (data: Omit<Filter, 'searchbyLabel'>) => {
      const newFilter = {
        ...data,
        searchbyLabel: searchByOptions.find(item => item.value === data.searchbyValue)?.label || ''
      };
      !filters.find(item => item.searchbyValue === newFilter.searchbyValue && item.searchValue === newFilter.searchValue) && addFilters([newFilter]);
    };
    const FilterForm = () => {
      type FilterForm = {
        column4?: string;
        column5?: string;
        column6?: string;
      };
      const defaultFilterFormValues = {
        column4: '',
        column5: '',
        column6: ''
      };
      const filterByOptions = [{
        label: 'Column 4',
        value: 'column4'
      }, {
        label: 'Column 5',
        value: 'column5'
      }, {
        label: 'Column 6',
        value: 'column6'
      }];
      const filterOptions = [{
        label: 'Value 1',
        value: 'value1'
      }, {
        label: 'Value 2',
        value: 'value2'
      }, {
        label: 'Value 3',
        value: 'value3'
      }];
      const {
        handleSubmit,
        control,
        reset,
        formState: {
          errors
        }
      } = useForm<FilterForm>({
        defaultValues: defaultFilterFormValues
      });
      const onSubmit = (data: FilterForm) => {
        const newFilters: Filter[] = [];
        for (const [key, value] of Object.entries(data)) {
          const newFilter = value && !filters.find(item => item.searchbyValue === key && item.searchValue === value) && {
            searchbyValue: key,
            searchbyLabel: filterByOptions.find(item => item.value === key)?.label || '',
            searchValue: value,
            searchLabel: filterOptions.find(item => item.value === value)?.label || ''
          };
          newFilter && newFilters.push(newFilter);
        }
        newFilters && addFilters(newFilters);
        handlePopoverClose();
      };
      return <Box component="form" id="filter-form" onSubmit={handleSubmit(onSubmit)} onReset={() => reset()}>
          <Stack direction="column" spacing={2}>
            {filterByOptions.map((filterby: OptionType) => <Controller name={(filterby.value as keyof typeof FilterForm)} control={control} render={({
            field: {
              onChange,
              value
            },
            fieldState: {
              error
            },
            formState
          }) => <TextField key={filterby.value} label={filterby.label} error={!!error} value={value} onChange={onChange} select margin="none">
                    {filterOptions.map((option: OptionType) => <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>)}
                  </TextField>} />)}
            <Stack direction="row" spacing={2}>
              <Button type="reset" color="secondary">
                Reset Filters
              </Button>
              <Button type="submit" color="primary">
                Apply Filters
              </Button>
            </Stack>
          </Stack>
        </Box>;
    };
    return <TableCell component="div" variant="header" size={theme === 'light' ? 'medium' : 'small'}>
        <Typography component="h3" variant="h6" marginBottom={3}>
          Table Title
        </Typography>
        <Box component="form" id="search-form" onSubmit={handleSubmit(onSearchSubmit)} sx={{
        paddingBottom: 2
      }}>
          <FormLabel htmlFor="searchbyValue" id="searchbyValueLabel">
            Search By
          </FormLabel>
          <Grid container spacing={1} flexWrap="wrap" width="100%">
            <Grid>
              <Controller name="searchbyValue" control={control} rules={{
              required: {
                value: true,
                message: 'This field is required'
              }
            }} render={({
              field: {
                onChange,
                value,
                ref
              },
              fieldState: {
                error
              }
            }) => <Select fullWidth={false} error={!!error} value={value} onChange={onChange} inputRef={ref} margin="none" sx={{
              flexShrink: 0
            }} labelId="searchbyValueLabel">
                    {searchByOptions.map((option: OptionType) => <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>)}
                  </Select>} />
            </Grid>
            <Grid sm={true}>
              <Controller name="searchValue" control={control} rules={{
              required: {
                value: true,
                message: 'This field is required'
              }
            }} render={({
              field: {
                onChange,
                value,
                ref
              },
              fieldState: {
                error
              }
            }) => <FormControl error={!!error} margin="none" sx={{
              flexGrow: 1
            }} fullWidth>
                    <Input id="search" value={value} onChange={onChange} inputRef={ref} startAdornment={<InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>} placeholder="Search" fullWidth />
                    <FormHelperText>{error && error.message}</FormHelperText>
                  </FormControl>} />
            </Grid>
            <Grid>
              <Button type="submit" color="primary" size="large">
                Search
              </Button>
            </Grid>
            <Grid>
              <Button type="button" color="secondary" aria-controls={filterPopoverId || ''} id="filter-button" onClick={handleFilterButtonClick} size="large">
                <InputAdornment position="start" sx={{
                color: 'inherit'
              }}>
                  <FilterIcon />
                </InputAdornment>
                Filter
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Popover id={filterPopoverId} aria-labelledby="filter-header" open={isFilterPopoverOpen} anchorEl={filterAnchorEl} onClose={handlePopoverClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
          <Box sx={{
          padding: 2
        }}>
            <Box justifyContent="space-between" display="flex" paddingBottom={2}>
              <Typography component="h2" variant="h6" id="filter-header">
                Filters
              </Typography>
              <IconButton title="close" onClick={handlePopoverClose} sx={{
              m: '-12px'
            }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <FilterForm />
          </Box>
        </Popover>
        <FormGroup aria-label="filters" role="group" row>
          {filters.map(filter => <Chip key={\`\${filter.searchbyValue}-\${filter.searchValue.toString().replace(/[^A-Z0-9]+/gi, '_')}}\`} label={\`\${filter.searchbyLabel}: \${filter.searchLabel || filter.searchValue}\`} onDelete={() => removeFilter(filter)} sx={{
          mr: 1,
          mb: 1
        }} />)}
          {!!filters.length && <MuiLink component="button" typography="body1" height="26px" onClick={() => {
          setFilters([]);
        }}>
              Clear All Filters
            </MuiLink>}
        </FormGroup>
      </TableCell>;
  },
  decorators: [HeaderDecorator]
}`,...(Z=(U=V.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const nt=["_Header","_HeaderWithSearchAndFilter"];export{C as _Header,V as _HeaderWithSearchAndFilter,nt as __namedExportsOrder,it as default};
//# sourceMappingURL=Patterns.stories-e557a447.js.map
