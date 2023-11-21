import{a,j as o,F as s}from"./jsx-runtime-a3bcee63.js";import{a as C,b as _,M as S}from"./TablePagination-e7d9bda9.js";import{b as N,_ as c}from"./createTheme-bcd1d157.js";import{r as v}from"./index-570b25c1.js";import{c as M}from"./clsx-7dc4e18d.js";import{T as I}from"./TableCell-fb4a8185.js";import{u as B}from"./useThemeProps-018254e6.js";import{g as F,s as E,c as k}from"./styled-7846e708.js";import{g as H}from"./generateUtilityClasses-70c60a0e.js";import{e as f,N as y}from"./index-cb4dbded.js";import{M as R}from"./Pagination-fdc7dc59.js";import{M as A}from"./PaginationItem-822000d2.js";function L(e){return F("MuiTableFooter",e)}H("MuiTableFooter",["root"]);const z=["className","component"],O=e=>{const{classes:t}=e;return k({root:["root"]},L,t)},j=E("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-footer-group"}),U={variant:"footer"},h="tfoot",$=v.forwardRef(function(t,n){const r=B({props:t,name:"MuiTableFooter"}),{className:u,component:i=h}=r,p=N(r,z),l=c({},r,{component:i}),d=O(l);return a(I.Provider,{value:U,children:a(j,c({as:i,className:M(d.root,u),ref:n,role:i===h?null:"rowgroup",ownerState:l},p))})}),D=$;var G={first:()=>o(s,{children:[a(f,{sx:{mr:".2rem"}})," First"]}),previous:()=>o(s,{children:[a(f,{sx:{mr:".2rem"}})," Prev"]}),next:()=>o(s,{children:["Next ",a(y,{sx:{ml:".2rem"}})]}),last:()=>o(s,{children:["Last ",a(y,{sx:{ml:".2rem"}})]})},W=e=>a(A,{slots:G,...e}),J=({...e})=>a(R,{...e,renderItem:t=>a(W,{...t})});const b=({className:e,striped:t,...n})=>a(C,{className:`${t?"striped ":""}${e||""}`,...n});try{b.displayName="Table",b.__docgenInfo={description:"",displayName:"Table",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any>"}},striped:{defaultValue:null,description:"Applies striped style to rows. _Only available for legacy bootstrap theme during migration, is not part of design system._",name:"striped",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the table, normally `TableHead` and `TableBody`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableClasses> & Partial<ClassNameMap<never>>"}},padding:{defaultValue:{value:"'normal'"},description:"Allows TableCells to inherit padding of the Table.",name:"padding",required:!1,type:{name:'"checkbox" | "none" | "normal"'}},size:{defaultValue:{value:"'medium'"},description:"Allows TableCells to inherit size of the Table.",name:"size",required:!1,type:{name:'"small" | "medium"'}},stickyHeader:{defaultValue:{value:"false"},description:`Set the header sticky.

⚠️ It doesn't work with IE11.`,name:"stickyHeader",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableElement>"}}}}}catch{}const g=e=>a(D,{...e});try{g.displayName="TableFooter",g.__docgenInfo={description:"",displayName:"TableFooter",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any>"}},children:{defaultValue:null,description:"The content of the component, normally `TableRow`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableFooterClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}const T=e=>a(_,{...e});try{T.displayName="TableHead",T.__docgenInfo={description:"",displayName:"TableHead",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any>"}},children:{defaultValue:null,description:"The content of the component, normally `TableRow`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableHeadClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}const P=v.forwardRef((e,t)=>{const{Actions:n,paginationProps:r,...u}=e;return a(S,{ActionsComponent:p=>{const{count:l,page:d,rowsPerPage:m,onPageChange:w,backIconButtonProps:K,nextIconButtonProps:Q,...q}=p;return o(s,{children:[typeof l=="number"&&l/m>1?a(J,{...q,...r,count:Math.ceil(Math.abs(l/m)),page:d+1,onChange:(V,x)=>{w(V,x-1)},boundaryCount:0,siblingCount:1,hidePrevButton:!0,hideNextButton:!0,showFirstButton:!0,showLastButton:!0}):null,n||null]})},...u,ref:t})});try{P.displayName="TablePagination",P.__docgenInfo={description:"",displayName:"TablePagination",props:{variant:{defaultValue:null,description:`Specify the cell type.
The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.`,name:"variant",required:!1,type:{name:'"body" | "footer" | "head" | "header"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TablePaginationClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any>"}},page:{defaultValue:null,description:"The zero-based index of the current page.",name:"page",required:!0,type:{name:"number"}},padding:{defaultValue:null,description:"Sets the padding applied to the cell.\nThe prop defaults to the value (`'default'`) inherited from the parent Table component.",name:"padding",required:!1,type:{name:'"checkbox" | "none" | "normal"'}},size:{defaultValue:null,description:"Specify the size of the cell.\nThe prop defaults to the value (`'medium'`) inherited from the parent Table component.",name:"size",required:!1,type:{name:'"small" | "medium"'}},SelectProps:{defaultValue:{value:"{}"},description:"Props applied to the rows per page [`Select`](/material-ui/api/select/) element.",name:"SelectProps",required:!1,type:{name:"Partial<SelectProps<unknown>>"}},align:{defaultValue:{value:"'inherit'"},description:`Set the text-align on the table cell content.

Monetary or generally number fields **should be right aligned** as that allows
you to add them up quickly in your head without having to worry about decimals.`,name:"align",required:!1,type:{name:'"center" | "inherit" | "left" | "right" | "justify"'}},scope:{defaultValue:null,description:"Set scope attribute.",name:"scope",required:!1,type:{name:"string"}},getItemAriaLabel:{defaultValue:{value:"function defaultGetAriaLabel(type) {\nreturn `Go to ${type} page`;\n}"},description:`Accepts a function which returns a string value that provides a user-friendly name for the current page.
This is important for screen reader users.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
@param type The link or button type to format ('first' | 'last' | 'next' | 'previous').
@returns`,name:"getItemAriaLabel",required:!1,type:{name:'(type: "next" | "previous" | "first" | "last") => string'}},count:{defaultValue:null,description:`The total number of rows.

To enable server side pagination for an unknown number of items, provide -1.`,name:"count",required:!0,type:{name:"number"}},sortDirection:{defaultValue:null,description:"Set aria-sort direction.",name:"sortDirection",required:!1,type:{name:"SortDirection"}},backIconButtonProps:{defaultValue:null,description:"Props applied to the back arrow [`IconButton`](/material-ui/api/icon-button/) component.",name:"backIconButtonProps",required:!1,type:{name:'Partial<IconButtonProps<"button", {}>>'}},nextIconButtonProps:{defaultValue:null,description:"Props applied to the next arrow [`IconButton`](/material-ui/api/icon-button/) element.",name:"nextIconButtonProps",required:!1,type:{name:'Partial<IconButtonProps<"button", {}>>'}},onPageChange:{defaultValue:null,description:`Callback fired when the page is changed.
@param event The event source of the callback.
@param page The page selected.`,name:"onPageChange",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void"}},onRowsPerPageChange:{defaultValue:null,description:`Callback fired when the number of rows per page is changed.
@param event The event source of the callback.`,name:"onRowsPerPageChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},rowsPerPage:{defaultValue:null,description:`The number of rows per page.

Set -1 to display all the rows.`,name:"rowsPerPage",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:{value:"[10, 25, 50, 100]"},description:`Customizes the options of the rows per page select field. If less than two options are
available, no select field will be displayed.
Use -1 for the value with a custom label to show all the rows.`,name:"rowsPerPageOptions",required:!1,type:{name:"(number | { value: number; label: string; })[]"}},Actions:{defaultValue:null,description:"",name:"Actions",required:!1,type:{name:"ReactNode"}},paginationProps:{defaultValue:null,description:"Props applied to the `Pagination` actions element",name:"paginationProps",required:!1,type:{name:"PaginationProps"}}}}}catch{}export{g as T,b as a,P as b,T as c};
//# sourceMappingURL=TablePagination-6d22846c.js.map
