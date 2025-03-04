import{r as u}from"./index-DcWiA9TO.js";import{g as W,c as G}from"./generateUtilityClass-CVWqFxsA.js";import{u as V}from"./index-nos-0K8U.js";import{s as T,c as _,r as $}from"./styled-CF1hcdwO.js";import{g as q}from"./generateUtilityClasses-BGOCnVj7.js";import{j as L}from"./jsx-runtime-CcL-W3nW.js";import{u as B}from"./DefaultPropsProvider-_cNB_dWy.js";import{u as N}from"./useSlotProps-BAIpVL6Y.js";import{a as J,P as Q}from"./Popover-ChEuM7rO.js";import{u as X}from"./useEnhancedEffect-D2f2tbda.js";import{g as Y}from"./Modal-B5s0Thvt.js";import{o as Z}from"./ownerWindow-HkKU3E4x.js";import{u as ee}from"./useForkRef-BVrIj09m.js";import{L as te}from"./List-ChBzRQcW.js";import{o as re}from"./ownerDocument-DW-IO8s5.js";function F(t,e,s){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:s?null:t.firstChild}function H(t,e,s){return t===e?s?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:s?null:t.lastChild}function O(t,e){if(e===void 0)return!0;let s=t.innerText;return s===void 0&&(s=t.textContent),s=s.trim().toLowerCase(),s.length===0?!1:e.repeating?s[0]===e.keys[0]:s.startsWith(e.keys.join(""))}function S(t,e,s,P,f,w){let d=!1,a=f(t,e,e?s:!1);for(;a;){if(a===t.firstChild){if(d)return!1;d=!0}const p=P?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!O(a,w)||p)a=f(t,a,s);else return a.focus(),!0}return!1}const se=u.forwardRef(function(e,s){const{actions:P,autoFocus:f=!1,autoFocusItem:w=!1,children:d,className:a,disabledItemsFocusable:p=!1,disableListWrap:h=!1,onKeyDown:g,variant:v="selectedMenu",...k}=e,c=u.useRef(null),x=u.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});X(()=>{f&&c.current.focus()},[f]),u.useImperativeHandle(P,()=>({adjustStyleForScrollbar:(r,{direction:o})=>{const i=!c.current.style.width;if(r.clientHeight<c.current.clientHeight&&i){const y=`${Y(Z(r))}px`;c.current.style[o==="rtl"?"paddingLeft":"paddingRight"]=y,c.current.style.width=`calc(100% + ${y})`}return c.current}}),[]);const C=r=>{const o=c.current,i=r.key;if(r.ctrlKey||r.metaKey||r.altKey){g&&g(r);return}const M=re(o).activeElement;if(i==="ArrowDown")r.preventDefault(),S(o,M,h,p,F);else if(i==="ArrowUp")r.preventDefault(),S(o,M,h,p,H);else if(i==="Home")r.preventDefault(),S(o,null,h,p,F);else if(i==="End")r.preventDefault(),S(o,null,h,p,H);else if(i.length===1){const n=x.current,I=i.toLowerCase(),D=performance.now();n.keys.length>0&&(D-n.lastTime>500?(n.keys=[],n.repeating=!0,n.previousKeyMatched=!0):n.repeating&&I!==n.keys[0]&&(n.repeating=!1)),n.lastTime=D,n.keys.push(I);const b=M&&!n.repeating&&O(M,n);n.previousKeyMatched&&(b||S(o,M,!1,p,F,n))?r.preventDefault():n.previousKeyMatched=!1}g&&g(r)},R=ee(c,s);let l=-1;u.Children.forEach(d,(r,o)=>{if(!u.isValidElement(r)){l===o&&(l+=1,l>=d.length&&(l=-1));return}r.props.disabled||(v==="selectedMenu"&&r.props.selected||l===-1)&&(l=o),l===o&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(l+=1,l>=d.length&&(l=-1))});const E=u.Children.map(d,(r,o)=>{if(o===l){const i={};return w&&(i.autoFocus=!0),r.props.tabIndex===void 0&&v==="selectedMenu"&&(i.tabIndex=0),u.cloneElement(r,i)}return r});return L.jsx(te,{role:"menu",ref:R,className:a,onKeyDown:C,tabIndex:f?0:-1,...k,children:E})});function oe(t){return W("MuiMenu",t)}q("MuiMenu",["root","paper","list"]);const ne={vertical:"top",horizontal:"right"},ie={vertical:"top",horizontal:"left"},le=t=>{const{classes:e}=t;return _({root:["root"],paper:["paper"],list:["list"]},oe,e)},ae=T(Q,{shouldForwardProp:t=>$(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),ue=T(J,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),pe=T(se,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),Ce=u.forwardRef(function(e,s){const P=B({props:e,name:"MuiMenu"}),{autoFocus:f=!0,children:w,className:d,disableAutoFocusItem:a=!1,MenuListProps:p={},onClose:h,open:g,PaperProps:v={},PopoverClasses:k,transitionDuration:c="auto",TransitionProps:{onEntering:x,...C}={},variant:R="selectedMenu",slots:l={},slotProps:E={},...r}=P,o=V(),i={...P,autoFocus:f,disableAutoFocusItem:a,MenuListProps:p,onEntering:x,PaperProps:v,transitionDuration:c,TransitionProps:C,variant:R},y=le(i),M=f&&!a&&g,n=u.useRef(null),I=(m,K)=>{n.current&&n.current.adjustStyleForScrollbar(m,{direction:o?"rtl":"ltr"}),x&&x(m,K)},D=m=>{m.key==="Tab"&&(m.preventDefault(),h&&h(m,"tabKeyDown"))};let b=-1;u.Children.map(w,(m,K)=>{u.isValidElement(m)&&(m.props.disabled||(R==="selectedMenu"&&m.props.selected||b===-1)&&(b=K))});const j=l.paper??ue,A=E.paper??v,z=N({elementType:l.root,externalSlotProps:E.root,ownerState:i,className:[y.root,d]}),U=N({elementType:j,externalSlotProps:A,ownerState:i,className:y.paper});return L.jsx(ae,{onClose:h,anchorOrigin:{vertical:"bottom",horizontal:o?"right":"left"},transformOrigin:o?ne:ie,slots:{paper:j,root:l.root},slotProps:{root:z,paper:U},open:g,ref:s,transitionDuration:c,TransitionProps:{onEntering:I,...C},ownerState:i,...r,classes:k,children:L.jsx(pe,{onKeyDown:D,actions:n,autoFocus:f&&(b===-1||a),autoFocusItem:M,variant:R,...p,className:G(y.list,p.className),children:w})})});export{Ce as M,se as a};
