import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{T as o}from"./TableCell-BJsQbUAN.js";import{v as s}from"./visuallyHidden-Dan1xhjv.js";const a=({disableEmptyPlaceholder:t=!1,children:l,...n})=>{const r=!t&&!l,i=e.jsxs(e.Fragment,{children:[e.jsx("div",{"aria-hidden":!0,children:"—"}),e.jsx("div",{style:s,children:"No Data"})]});return e.jsx(o,{...n,children:r?i:l})};try{a.displayName="TableCell",a.__docgenInfo={description:"",displayName:"TableCell",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<TableCellBaseProps> & ElementType<TableCellBaseProps, keyof IntrinsicElements>"}},disableEmptyPlaceholder:{defaultValue:{value:"false"},description:'If `true` the placeholder for empty cells and accessible "No Data" text is disabled.',name:"disableEmptyPlaceholder",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"'inherit'"},description:`Set the text-align on the table cell content.

Monetary or generally number fields **should be right aligned** as that allows
you to add them up quickly in your head without having to worry about decimals.`,name:"align",required:!1,type:{name:'"right" | "left" | "center" | "inherit" | "justify"'}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableCellClasses>"}},padding:{defaultValue:null,description:"Sets the padding applied to the cell.\nThe prop defaults to the value (`'default'`) inherited from the parent Table component.",name:"padding",required:!1,type:{name:'"none" | "normal" | "checkbox"'}},scope:{defaultValue:null,description:"Set scope attribute.",name:"scope",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Specify the size of the cell.\nThe prop defaults to the value (`'medium'`) inherited from the parent Table component.",name:"size",required:!1,type:{name:'OverridableStringUnion<"small" | "medium", TableCellPropsSizeOverrides>'}},sortDirection:{defaultValue:null,description:"Set aria-sort direction.",name:"sortDirection",required:!1,type:{name:"SortDirection"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:null,description:`Specify the cell type.
The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.`,name:"variant",required:!1,type:{name:'OverridableStringUnion<"body" | "footer" | "head", TableCellPropsVariantOverrides>'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{a as T};
