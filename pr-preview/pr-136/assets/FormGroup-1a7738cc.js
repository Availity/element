import{_ as e,b as u}from"./createTheme-e6b56ddb.js";import{r as f}from"./index-570b25c1.js";import{c as w}from"./clsx-8416b751.js";import{g as F,s as x,c as G}from"./styled-78cd751f.js";import{u as d}from"./useThemeProps-285a8f6c.js";import{g as C}from"./generateUtilityClasses-2915a045.js";import{u as g,f as y}from"./utils-3d35716f.js";import{j as M}from"./jsx-runtime-390e5fc8.js";function R(o){return F("MuiFormGroup",o)}C("MuiFormGroup",["root","row","error"]);const S=["className","row"],U=o=>{const{classes:r,row:t,error:s}=o;return G({root:["root",t&&"row",s&&"error"]},R,r)},_=x("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),h=f.forwardRef(function(r,t){const s=d({props:r,name:"MuiFormGroup"}),{className:a,row:n=!1}=s,c=u(s,S),i=g(),l=y({props:s,muiFormControl:i,states:["error"]}),m=e({},s,{row:n,error:l.error}),p=U(m);return M(_,e({className:w(p.root,a),ownerState:m,ref:t},c))}),L=h;export{L as F};
//# sourceMappingURL=FormGroup-1a7738cc.js.map
