import{j as a}from"./jsx-runtime-CcL-W3nW.js";import{T as V,a as x}from"./TableHead-BBbVjsXx.js";import{r as u}from"./index-DcWiA9TO.js";import{g as C,c as w}from"./generateUtilityClass-DELP8s2G.js";import{b as S}from"./TableCell-C_kdAjxi.js";import{g as _}from"./generateUtilityClasses-duJ5YrlI.js";import{u as N}from"./DefaultPropsProvider-LCKMq1Iv.js";import{s as E,c as M}from"./styled-wZqJTO_n.js";import{T as R,P as k}from"./index-B4RNdokz.js";import{b as I}from"./index-BlC5JLGo.js";import{d as H}from"./index-BDqO7SwG.js";function F(e){return C("MuiTableFooter",e)}_("MuiTableFooter",["root"]);const O=e=>{const{classes:t}=e;return M({root:["root"]},F,t)},A=E("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-footer-group"}),z={variant:"footer"},c="tfoot",j=u.forwardRef(function(t,n){const r=N({props:t,name:"MuiTableFooter"}),{className:o,component:l=c,...i}=r,s={...r,component:l},p=O(s);return a.jsx(S.Provider,{value:z,children:a.jsx(A,{as:l,className:w(p.root,o),ref:n,role:l===c?null:"rowgroup",ownerState:s,...i})})}),f=({className:e,striped:t,...n})=>a.jsx(V,{className:`${t?"striped ":""}${e||""}`,...n});try{f.displayName="Table",f.__docgenInfo={description:"",displayName:"Table",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any, keyof IntrinsicElements>"}},striped:{defaultValue:null,description:"Applies striped style to rows. _Only available for legacy bootstrap theme during migration, is not part of design system._",name:"striped",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the table, normally `TableHead` and `TableBody`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableClasses> & Partial<ClassNameMap<never>>"}},padding:{defaultValue:{value:"'normal'"},description:"Allows TableCells to inherit padding of the Table.",name:"padding",required:!1,type:{name:'"none" | "checkbox" | "normal"'}},size:{defaultValue:{value:"'medium'"},description:"Allows TableCells to inherit size of the Table.",name:"size",required:!1,type:{name:'OverridableStringUnion<"small" | "medium", TablePropsSizeOverrides>'}},stickyHeader:{defaultValue:{value:"false"},description:"Set the header sticky.",name:"stickyHeader",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableElement>"}}}}}catch{}const y=e=>a.jsx(j,{...e});try{y.displayName="TableFooter",y.__docgenInfo={description:"",displayName:"TableFooter",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any, keyof IntrinsicElements>"}},children:{defaultValue:null,description:"The content of the component, normally `TableRow`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableFooterClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}const h=e=>a.jsx(x,{...e});try{h.displayName="TableHead",h.__docgenInfo={description:"",displayName:"TableHead",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any, keyof IntrinsicElements>"}},children:{defaultValue:null,description:"The content of the component, normally `TableRow`.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableHeadClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}const B=e=>a.jsx(H,{fontSize:"xxsmall",sx:{marginRight:"4px"},...e}),b=u.forwardRef((e,t)=>{const{Actions:n,paginationProps:r,...o}=e,[l,i]=u.useState(!1),s=p=>{const{count:d,page:g,rowsPerPage:m,onPageChange:T,nextIconButtonProps:L,backIconButtonProps:U,slotProps:$,...P}=p;return a.jsxs(a.Fragment,{children:[typeof d=="number"&&d/m>1?a.jsx(k,{...P,...r,count:Math.ceil(Math.abs(d/m)),page:g+1,onChange:(v,q)=>{T(v,q-1)}}):null,n||null]})};return a.jsx(R,{ActionsComponent:s,...o,slotProps:{select:{IconComponent:B,...I(l,i)}},ref:t})});try{b.displayName="TablePagination",b.__docgenInfo={description:"",displayName:"TablePagination",props:{variant:{defaultValue:null,description:`Specify the cell type.
The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.`,name:"variant",required:!1,type:{name:'OverridableStringUnion<"body" | "footer" | "head", TableCellPropsVariantOverrides>'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TablePaginationClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<any, keyof IntrinsicElements>"}},page:{defaultValue:null,description:"The zero-based index of the current page.",name:"page",required:!0,type:{name:"number"}},padding:{defaultValue:null,description:"Sets the padding applied to the cell.\nThe prop defaults to the value (`'default'`) inherited from the parent Table component.",name:"padding",required:!1,type:{name:'"none" | "checkbox" | "normal"'}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Specify the size of the cell.\nThe prop defaults to the value (`'medium'`) inherited from the parent Table component.",name:"size",required:!1,type:{name:'OverridableStringUnion<"small" | "medium", TableCellPropsSizeOverrides>'}},align:{defaultValue:{value:"'inherit'"},description:`Set the text-align on the table cell content.

Monetary or generally number fields **should be right aligned** as that allows
you to add them up quickly in your head without having to worry about decimals.`,name:"align",required:!1,type:{name:'"center" | "left" | "right" | "inherit" | "justify"'}},scope:{defaultValue:null,description:"Set scope attribute.",name:"scope",required:!1,type:{name:"string"}},getItemAriaLabel:{defaultValue:{value:"function defaultGetAriaLabel(type) {\nreturn `Go to ${type} page`;\n}"},description:`Accepts a function which returns a string value that provides a user-friendly name for the current page.
This is important for screen reader users.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
@param type The link or button type to format ('first' | 'last' | 'next' | 'previous').
@returns`,name:"getItemAriaLabel",required:!1,type:{name:'(type: "next" | "previous" | "first" | "last") => string'}},count:{defaultValue:null,description:`The total number of rows.

To enable server side pagination for an unknown number of items, provide -1.`,name:"count",required:!0,type:{name:"number"}},sortDirection:{defaultValue:null,description:"Set aria-sort direction.",name:"sortDirection",required:!1,type:{name:"SortDirection"}},onPageChange:{defaultValue:null,description:`Callback fired when the page is changed.
@param event The event source of the callback.
@param page The page selected.`,name:"onPageChange",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void"}},onRowsPerPageChange:{defaultValue:null,description:`Callback fired when the number of rows per page is changed.
@param event The event source of the callback.`,name:"onRowsPerPageChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},rowsPerPage:{defaultValue:null,description:`The number of rows per page.

Set -1 to display all the rows.`,name:"rowsPerPage",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:{value:"[10, 25, 50, 100]"},description:`Customizes the options of the rows per page select field. If less than two options are
available, no select field will be displayed.
Use -1 for the value with a custom label to show all the rows.`,name:"rowsPerPageOptions",required:!1,type:{name:"readonly (number | { value: number; label: string; })[]"}},Actions:{defaultValue:null,description:"",name:"Actions",required:!1,type:{name:"ReactNode"}},paginationProps:{defaultValue:null,description:"Props applied to the `Pagination` actions element",name:"paginationProps",required:!1,type:{name:"PaginationProps"}}}}}catch{}export{f as T,h as a,y as b,b as c};
