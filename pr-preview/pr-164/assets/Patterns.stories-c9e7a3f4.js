import{a as e,j as a}from"./jsx-runtime-a3bcee63.js";import{r as z}from"./index-570b25c1.js";import{B as F,I as te}from"./index-6cb0af17.js";import{C as le}from"./index-02876ca7.js";import{F as oe,e as ae,f as ie,b as ne}from"./index-7bc89416.js";import{S as se,m as ce,C as me}from"./index-53288845.js";import{B as g,G as h,S as H}from"./index-6e8561aa.js";import{M as ue}from"./MenuItem-72d68a40.js";import{P as pe}from"./index-bcabbcd5.js";import{T as de}from"./index-0ee95a5a.js";import{T as L}from"./index-bf8151f5.js";import{u as M,C as T}from"./index.esm-d81a0d8c.js";import{a as he,c as be}from"./TablePagination-73eb7297.js";import{a as R,T as fe}from"./TableRow-873b7b78.js";import{T as i}from"./TableCell-55b1321f.js";import{T as ye}from"./TableContainer-a6126a8f.js";import"./TableSortLabel-b6ed4e6d.js";import{F as ve}from"./FormLabel-d63492ff.js";import{I as W}from"./InputAdornment-e680d39b.js";import{P as Fe}from"./Popover-3b512651.js";import{F as ge}from"./FormGroup-93228893.js";import{L as Ce}from"./Link-b7684510.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-af0ca45f.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-cae7e212.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./Grow-8a00b99f.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-039d2b0a.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-3fd19b93.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./Chip-e09b065a.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./index-9681c8ff.js";import"./Box-51bd3ea0.js";import"./extendSxProp-b1abb964.js";import"./FormControlLabel-1ceb9da1.js";import"./utils-3d35716f.js";import"./Typography-f453bb5c.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./FormHelperText-e428b621.js";import"./OutlinedInput-0cb1099f.js";import"./ownerWindow-03d1c82d.js";import"./debounce-517eeb3c.js";import"./GlobalStyles-5f9800bb.js";import"./Select-a4487aaa.js";import"./react-is.production.min-a192e302.js";import"./Menu-5950de0d.js";import"./Modal-a1db681c.js";import"./Backdrop-4a58ec86.js";import"./createChainedFunction-0bab83cf.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./Container-3c3a93d6.js";import"./Grid2-2ceca868.js";import"./isMuiElement-6907f060.js";import"./Paper-389d56e7.js";import"./TextField-e8a3b764.js";import"./TablePagination-682021df.js";import"./TableCell-81c8412e.js";import"./KeyboardArrowRight-94c6c8ce.js";import"./PaginationItem-0a0028eb.js";import"./Pagination-5d0fba7b.js";import"./TableRow-edc17b29.js";import"./TableContainer-8cec70ef.js";import"./TableSortLabel-65a2c334.js";var _=u=>e(ue,{...u,disableRipple:!0,disableTouchRipple:!0});const it={title:"Components/Table/Patterns",tags:["autodocs"],parameters:{docs:{description:{component:"UX approved patterns to accompany Table"}}}},X=u=>a(pe,{sx:{borderWidth:"1px",borderColor:"border.decoration",marginTop:2,borderBottom:"none"},children:[e(u,{}),e(ye,{children:a(he,{children:[e(be,{children:a(R,{children:[e(i,{children:"Column 1"}),e(i,{children:"Column 2"}),e(i,{children:"Column 3"}),e(i,{children:"Column 4"}),e(i,{children:"Column 5"}),e(i,{children:"Column 6"})]})}),e(fe,{children:e(R,{children:e(i,{sx:{borderBottom:"none"}})})})]})})]}),C={render:(u,{globals:{theme:S}})=>e(i,{component:"div",variant:"header",size:S==="light"?"medium":"small",children:e(L,{component:"div",variant:"h6",children:"Table Title"})}),decorators:[X]},V={render:(u,{globals:{theme:S}})=>{const J=[{searchbyValue:"column2",searchbyLabel:"Column 2",searchValue:"Payer 1"},{searchbyValue:"column5",searchbyLabel:"Column 5",searchValue:"Pending"}],I=[{label:"Column 1",value:"column1"},{label:"Column 2",value:"column2"},{label:"Column 3",value:"column3"}],K={searchbyValue:"column1",searchValue:""},[n,B]=z.useState(J),[k,w]=z.useState(null),A=!!k,O=A?"filter-popover":void 0,x=()=>{w(null)},N=r=>{w(r.currentTarget)},Q=r=>{const t=n.findIndex(l=>l.searchbyValue===r.searchbyValue&&l.searchValue===r.searchValue);n.splice(t,1),B([...n])},P=r=>{const t=[...n,...r].sort((l,o)=>{const s=l.searchbyLabel.toUpperCase(),b=o.searchbyLabel.toUpperCase();return s<b?-1:s>b?1:0});B([...t])},{handleSubmit:Y,control:G}=M({defaultValues:K}),ee=r=>{var l;const t={...r,searchbyLabel:((l=I.find(o=>o.value===r.searchbyValue))==null?void 0:l.label)||""};!n.find(o=>o.searchbyValue===t.searchbyValue&&o.searchValue===t.searchValue)&&P([t])},re=()=>{const r={column4:"",column5:"",column6:""},t=[{label:"Column 4",value:"column4"},{label:"Column 5",value:"column5"},{label:"Column 6",value:"column6"}],l=[{label:"Value 1",value:"value1"},{label:"Value 2",value:"value2"},{label:"Value 3",value:"value3"}],{handleSubmit:o,control:s,reset:b,formState:{errors:Ve}}=M({defaultValues:r});return e(g,{component:"form",id:"filter-form",onSubmit:o(p=>{var f,y;const d=[];for(const[v,c]of Object.entries(p)){const E=c&&!n.find(m=>m.searchbyValue===v&&m.searchValue===c)&&{searchbyValue:v,searchbyLabel:((f=t.find(m=>m.value===v))==null?void 0:f.label)||"",searchValue:c,searchLabel:((y=l.find(m=>m.value===c))==null?void 0:y.label)||""};E&&d.push(E)}d&&P(d),x()}),onReset:()=>b(),children:a(H,{direction:"column",spacing:2,children:[t.map(p=>e(T,{name:p.value,control:s,render:({field:{onChange:d,value:f},fieldState:{error:y},formState:v})=>e(de,{label:p.label,error:!!y,value:f,onChange:d,select:!0,margin:"none",children:l.map(c=>e(_,{value:c.value,children:c.label},c.value))},p.value)})),a(H,{direction:"row",spacing:2,children:[e(F,{type:"reset",color:"secondary",children:"Reset Filters"}),e(F,{type:"submit",color:"primary",children:"Apply Filters"})]})]})})};return a(i,{component:"div",variant:"header",size:S==="light"?"medium":"small",children:[e(L,{component:"h3",variant:"h6",marginBottom:3,children:"Table Title"}),a(g,{component:"form",id:"search-form",onSubmit:Y(ee),sx:{paddingBottom:2},children:[e(oe,{htmlFor:"searchbyValue",id:"searchbyValueLabel",children:"Search By"}),a(h,{container:!0,spacing:1,flexWrap:"wrap",width:"100%",children:[e(h,{children:e(T,{name:"searchbyValue",control:G,rules:{required:{value:!0,message:"This field is required"}},render:({field:{onChange:r,value:t,ref:l},fieldState:{error:o}})=>e(ae,{fullWidth:!1,error:!!o,value:t,onChange:r,inputRef:l,margin:"none",sx:{flexShrink:0},labelId:"searchbyValueLabel",children:I.map(s=>e(_,{value:s.value,children:s.label},s.value))})})}),e(h,{sm:!0,children:e(T,{name:"searchValue",control:G,rules:{required:{value:!0,message:"This field is required"}},render:({field:{onChange:r,value:t,ref:l},fieldState:{error:o}})=>a(ve,{error:!!o,margin:"none",sx:{flexGrow:1},fullWidth:!0,children:[e(ie,{id:"search",value:t,onChange:r,inputRef:l,startAdornment:e(W,{position:"start",children:e(se,{})}),placeholder:"Search",fullWidth:!0}),e(ne,{children:o&&o.message})]})})}),e(h,{children:e(F,{type:"submit",color:"primary",size:"large",children:"Search"})}),e(h,{children:a(F,{type:"button",color:"secondary","aria-controls":O||"",id:"filter-button",onClick:N,size:"large",children:[e(W,{position:"start",sx:{color:"inherit"},children:e(ce,{})}),"Filter"]})})]})]}),e(Fe,{id:O,"aria-labelledby":"filter-header",open:A,anchorEl:k,onClose:x,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:a(g,{sx:{padding:2},children:[a(g,{justifyContent:"space-between",display:"flex",paddingBottom:2,children:[e(L,{component:"h2",variant:"h6",id:"filter-header",children:"Filters"}),e(te,{title:"close",onClick:x,sx:{m:"-12px"},children:e(me,{fontSize:"small"})})]}),e(re,{})]})}),a(ge,{"aria-label":"filters",role:"group",row:!0,children:[n.map(r=>e(le,{label:`${r.searchbyLabel}: ${r.searchLabel||r.searchValue}`,onDelete:()=>Q(r),sx:{mr:1,mb:1}},`${r.searchbyValue}-${r.searchValue.toString().replace(/[^A-Z0-9]+/gi,"_")}}`)),!!n.length&&e(Ce,{component:"button",typography:"body1",height:"26px",onClick:()=>{B([])},children:"Clear All Filters"})]})]})},decorators:[X]};var $,q,j;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
//# sourceMappingURL=Patterns.stories-c9e7a3f4.js.map
