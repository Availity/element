import{a,j as o,F as s}from"./jsx-runtime-a3bcee63.js";import{a as x,b as _,M as S}from"./TablePagination-682021df.js";import{b as N,_ as c}from"./createTheme-3fee607a.js";import{r as v}from"./index-570b25c1.js";import{c as M}from"./clsx-b831246b.js";import{T as F}from"./TableCell-81c8412e.js";import{u as E}from"./useThemeProps-98dc6282.js";import{g as I,s as H,c as R}from"./styled-523cb007.js";import{g as k}from"./generateUtilityClasses-b58f947a.js";import{e as f,N as y}from"./index-53288845.js";import{M as A}from"./Pagination-5d0fba7b.js";import{M as B}from"./PaginationItem-0a0028eb.js";function L(e){return I("MuiTableFooter",e)}k("MuiTableFooter",["root"]);const z=["className","component"],O=e=>{const{classes:t}=e;return R({root:["root"]},L,t)},j=H("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-footer-group"}),U={variant:"footer"},h="tfoot",$=v.forwardRef(function(t,n){const r=E({props:t,name:"MuiTableFooter"}),{className:p,component:i=h}=r,u=N(r,z),l=c({},r,{component:i}),d=O(l);return a(F.Provider,{value:U,children:a(j,c({as:i,className:M(d.root,p),ref:n,role:i===h?null:"rowgroup",ownerState:l},u))})}),D=$;var G={first:()=>o(s,{children:[a(f,{sx:{mr:".2rem"}})," First"]}),previous:()=>o(s,{children:[a(f,{sx:{mr:".2rem"}})," Prev"]}),next:()=>o(s,{children:["Next ",a(y,{sx:{ml:".2rem"}})]}),last:()=>o(s,{children:["Last ",a(y,{sx:{ml:".2rem"}})]})},W=e=>a(B,{slots:G,...e}),J=({...e})=>a(A,{...e,renderItem:t=>a(W,{...t})});const g=({className:e,striped:t,...n})=>a(x,{className:`${t?"striped ":""}${e||""}`,...n});try{g.displayName="Table",g.__docgenInfo={description:"",displayName:"Table",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any>"}},striped:{defaultValue:null,description:"Applies striped style to rows. _Only available for legacy bootstrap theme during migration, is not part of design system._",name:"striped",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the table, normally `TableHead` and `TableBody`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableClasses> & Partial<ClassNameMap<never>>"}},padding:{defaultValue:{value:"'normal'"},description:"Allows TableCells to inherit padding of the Table.",name:"padding",required:!1,type:{name:'"checkbox" | "none" | "normal"'}},size:{defaultValue:{value:"'medium'"},description:"Allows TableCells to inherit size of the Table.",name:"size",required:!1,type:{name:'"small" | "medium"'}},stickyHeader:{defaultValue:{value:"false"},description:`Set the header sticky.

⚠️ It doesn't work with IE11.`,name:"stickyHeader",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableElement>"}}}}}catch{}const b=e=>a(D,{...e});try{b.displayName="TableFooter",b.__docgenInfo={description:"",displayName:"TableFooter",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any>"}},children:{defaultValue:null,description:"The content of the component, normally `TableRow`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableFooterClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}const T=e=>a(_,{...e});try{T.displayName="TableHead",T.__docgenInfo={description:"",displayName:"TableHead",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any>"}},children:{defaultValue:null,description:"The content of the component, normally `TableRow`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableHeadClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}const P=v.forwardRef((e,t)=>{const{Actions:n,paginationProps:r,...p}=e;return a(S,{ActionsComponent:u=>{const{count:l,page:d,rowsPerPage:m,onPageChange:w,backIconButtonProps:K,nextIconButtonProps:Q,...q}=u;return o(s,{children:[typeof l=="number"&&l/m>1?a(J,{...q,...r,count:Math.ceil(Math.abs(l/m)),page:d+1,onChange:(V,C)=>{w(V,C-1)},boundaryCount:0,siblingCount:1,hidePrevButton:!0,hideNextButton:!0,showFirstButton:!0,showLastButton:!0}):null,n||null]})},...p,ref:t})});try{P.displayName="TablePagination",P.__docgenInfo={description:"",displayName:"TablePagination",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TablePaginationClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any>"}},page:{defaultValue:null,description:"The zero-based index of the current page.",name:"page",required:!0,type:{name:"number"}},padding:{defaultValue:null,description:"Sets the padding applied to the cell.\nThe prop defaults to the value (`'default'`) inherited from the parent Table component.",name:"padding",required:!1,type:{name:'"checkbox" | "none" | "normal"'}},variant:{defaultValue:null,description:`Specify the cell type.
The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.`,name:"variant",required:!1,type:{name:'"body" | "footer" | "head" | "header"'}},size:{defaultValue:null,description:"Specify the size of the cell.\nThe prop defaults to the value (`'medium'`) inherited from the parent Table component.",name:"size",required:!1,type:{name:'"small" | "medium"'}},SelectProps:{defaultValue:{value:"{}"},description:"Props applied to the rows per page [`Select`](/material-ui/api/select/) element.",name:"SelectProps",required:!1,type:{name:"Partial<SelectProps<unknown>>"}},align:{defaultValue:{value:"'inherit'"},description:`Set the text-align on the table cell content.

Monetary or generally number fields **should be right aligned** as that allows
you to add them up quickly in your head without having to worry about decimals.`,name:"align",required:!1,type:{name:'"center" | "inherit" | "left" | "right" | "justify"'}},scope:{defaultValue:null,description:"Set scope attribute.",name:"scope",required:!1,type:{name:"string"}},getItemAriaLabel:{defaultValue:{value:"function defaultGetAriaLabel(type) {\nreturn `Go to ${type} page`;\n}"},description:`Accepts a function which returns a string value that provides a user-friendly name for the current page.
This is important for screen reader users.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
@param type The link or button type to format ('first' | 'last' | 'next' | 'previous').
@returns`,name:"getItemAriaLabel",required:!1,type:{name:'(type: "next" | "previous" | "first" | "last") => string'}},count:{defaultValue:null,description:`The total number of rows.

To enable server side pagination for an unknown number of items, provide -1.`,name:"count",required:!0,type:{name:"number"}},sortDirection:{defaultValue:null,description:"Set aria-sort direction.",name:"sortDirection",required:!1,type:{name:"SortDirection"}},onPageChange:{defaultValue:null,description:`Callback fired when the page is changed.
@param event The event source of the callback.
@param page The page selected.`,name:"onPageChange",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void"}},onRowsPerPageChange:{defaultValue:null,description:`Callback fired when the number of rows per page is changed.
@param event The event source of the callback.`,name:"onRowsPerPageChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},rowsPerPage:{defaultValue:null,description:`The number of rows per page.

Set -1 to display all the rows.`,name:"rowsPerPage",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:{value:"[10, 25, 50, 100]"},description:`Customizes the options of the rows per page select field. If less than two options are
available, no select field will be displayed.
Use -1 for the value with a custom label to show all the rows.`,name:"rowsPerPageOptions",required:!1,type:{name:"(number | { value: number; label: string; })[]"}},Actions:{defaultValue:null,description:"",name:"Actions",required:!1,type:{name:"ReactNode"}},paginationProps:{defaultValue:null,description:"Props applied to the `Pagination` actions element",name:"paginationProps",required:!1,type:{name:"PaginationProps"}}}}}catch{}export{b as T,g as a,P as b,T as c};
//# sourceMappingURL=TablePagination-73eb7297.js.map
