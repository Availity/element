import{r as t,j as i}from"./iframe-BOqhEPj6.js";import{P as I}from"./index-BnDQCKRO.js";import{B as C}from"./index-CQw0a6ar.js";import{T as m}from"./index-C8WQ3P9P.js";import{s as n}from"./styled-ClQgRsdc.js";import{C as S}from"./CircularProgress-Xg5tMO8-.js";import"./preload-helper-Dp1pzeXC.js";import"./Paper-Bx06Uw5g.js";import"./useTheme-s5qe_7AX.js";import"./memoTheme-BYC15E_2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Tooltip-DKIHpwU2.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D87wou6e.js";import"./useTimeout-CKtuW5yl.js";import"./useControlled-CmW8DIBb.js";import"./useEventCallback-BHkbNqwn.js";import"./getReactElementRef-DF_NnWMb.js";import"./Portal-Cx3wFGpK.js";import"./utils-CDaWu4n1.js";import"./TransitionGroupContext-TO625Yxj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DnEE7xuk.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BP3VjvuD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C7cVXKAH.js";import"./Button-BDF2rRxm.js";import"./Typography-DCSeVpBd.js";const _=()=>i.jsx(S,{"aria-label":"Loading",variant:"indeterminate"}),L=n("div")({position:"relative"}),H=n("div")({position:"absolute",zIndex:1010,top:0,right:0,bottom:0,left:0,height:"100%",minHeight:"4.5em",cursor:"wait",overflow:"hidden",":focus":{outline:"none"}}),K=n("div")({width:"100%",height:"100%",opacity:"0.88",filter:"alpha(opacity=50)",backgroundColor:"white"}),O=n("div")(({top:a="50%"})=>({top:a,position:"absolute",left:0,right:0,textAlign:"center",transform:"translateY(-50%)",zIndex:10001})),z=n("div")({color:"#333",background:"none",zIndex:"1011"}),j=n("div")({position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:0});function f({backdropColor:a="paper",blocking:r,children:d,keepInView:o,loader:y=i.jsx(_,{}),message:k,renderChildren:T=!0,...N}){const[p,B]=t.useState("50%"),u=t.useRef(null),l=t.useRef(null),v=t.useRef(null),x=t.useRef(null),q=t.useCallback(()=>{if(r&&o&&v.current){const e=v.current.getBoundingClientRect(),c=window.innerHeight;if(e.top>c||e.bottom<0)return;if(e.top>=0&&e.bottom<=c){p!=="50%"&&B("50%");return}const b=x.current?x.current.getBoundingClientRect().height:0;let s=Math.max(Math.min(c,e.bottom)-Math.max(e.top,0),b)/2;e.top<0&&(s=Math.min(s-e.top,e.height-b/2)),p!==s&&B(s)}},[r,o,p]);t.useEffect(()=>(window.addEventListener("scroll",q),()=>{window.removeEventListener("scroll",q)}),[q]);const g=(e,c=!1)=>{const{key:b,shiftKey:s}=e;return r&&b==="Tab"&&s===c},P=e=>{u.current&&g(e)&&u.current.focus()},U=e=>{u.current&&g(e)&&(e.preventDefault(),u.current.focus())},E=e=>{l.current&&g(e,!0)&&l.current.focus()},R=e=>{l.current&&g(e,!0)&&(e.preventDefault(),l.current.focus())},V=!r||T;return i.jsxs(L,{"aria-busy":r,...N,children:[r?i.jsx(j,{tabIndex:0,onKeyUp:P,onKeyDown:U,ref:l,children:k||"loading"}):null,V?d:null,r?i.jsxs(H,{tabIndex:0,ref:u,onKeyUp:E,onKeyDown:R,children:[i.jsx(K,{ref:v,sx:{backgroundColor:`background.${a}`}}),i.jsx(O,{ref:x,top:o?p:void 0,children:i.jsxs(z,{children:[t.isValidElement(y)?i.jsx("div",{"aria-hidden":!0,children:y}):null,k||i.jsx(j,{children:"loading"})]})})]}):null]})}try{f.displayName="BlockUi",f.__docgenInfo={description:"",displayName:"BlockUi",props:{backdropColor:{defaultValue:{value:"paper"},description:"Set the color of the blocking component.",name:"backdropColor",required:!1,type:{name:'"canvas" | "paper"'}},blocking:{defaultValue:null,description:"Set whether the component should block its children",name:"blocking",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children to display",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class name to pass to component",name:"className",required:!1,type:{name:"string"}},keepInView:{defaultValue:null,description:"Set whether the blocking component should follow the scroll or stay at a fixed postion",name:"keepInView",required:!1,type:{name:"boolean"}},loader:{defaultValue:{value:"<Loader />"},description:"Loader component to use",name:"loader",required:!1,type:{name:"React.JSX.Element"}},message:{defaultValue:null,description:"The message to display. Can also be a component.",name:"message",required:!1,type:{name:"ReactNode"}},renderChildren:{defaultValue:{value:"true"},description:"Control if the children are shown when the component is being blocked",name:"renderChildren",required:!1,type:{name:"boolean"}}}}}catch{}const ke={title:"Components/BlockUi/BlockUi",component:f,tags:["autodocs"],argTypes:{backdropColor:{options:["paper","canvas"]}}},h={render:a=>{const[r,d]=t.useState(a.blocking);return t.useEffect(()=>{d(a.blocking)},[a.blocking]),i.jsxs(i.Fragment,{children:[i.jsx(f,{...a,blocking:r,children:i.jsxs(I,{sx:{padding:"1.5rem",minHeight:"250px"},children:[i.jsx(m,{variant:"h1",children:"Header"}),i.jsx(m,{sx:{marginBottom:"16px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem mauris, sollicitudin sit amet lacus vel, sollicitudin tincidunt mi. Mauris risus nisi, sagittis id augue sit amet, venenatis volutpat dui. Etiam commodo vel lectus eget ornare. Donec laoreet urna eu velit condimentum viverra. Curabitur ut pulvinar ipsum, vitae laoreet nulla. Nam in nisl sit amet leo dignissim tempor. Donec imperdiet est odio, ac aliquam libero eleifend at. Pellentesque tempor semper nulla vel fermentum. Pellentesque viverra, neque vel laoreet sollicitudin, massa lacus ultricies lectus, quis rutrum odio orci vitae turpis. Donec rhoncus dui nec ex porta, vel porta odio suscipit."}),i.jsx(m,{sx:{marginBottom:"16px"},children:"Vestibulum nec lectus ac metus semper tempus. Aliquam porttitor odio at eros condimentum lobortis. Mauris lectus nibh, feugiat sit amet metus at, auctor placerat enim. Mauris finibus elit vel orci tincidunt euismod. Duis mollis dolor lectus, nec rutrum nisi porta pharetra. Mauris dictum aliquet diam et molestie. In hac habitasse platea dictumst. Quisque pulvinar semper diam, ut euismod felis congue ut. Integer eget tortor a justo volutpat pellentesque. Duis a egestas arcu, sed bibendum ipsum. Duis rhoncus nulla nec euismod venenatis. Praesent tincidunt neque vitae justo commodo, sed sollicitudin ante iaculis."}),i.jsx(m,{sx:{marginBottom:"16px"},children:"Duis eu lorem scelerisque, lacinia nulla quis, tristique ex. Integer ipsum nisl, consectetur vel rhoncus vel, scelerisque nec justo. Cras bibendum tempor magna, non dictum quam facilisis eget. Curabitur nec odio nec leo dapibus commodo a sed sem. Suspendisse accumsan sollicitudin ante, vel rutrum orci blandit ut. Nulla sed magna mauris. Proin nec dignissim urna, sit amet tempor libero. Morbi commodo urna et porta porta. Mauris fermentum, dui eu ullamcorper blandit, neque urna laoreet ante, semper interdum magna orci id velit. Etiam in cursus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis massa lacus, vulputate sit amet euismod sit amet, pharetra id sem. In hac habitasse platea dictumst. Praesent purus sem, sagittis malesuada nulla sed, congue hendrerit orci. Vestibulum imperdiet, urna a tempor efficitur, nibh nulla efficitur leo, id faucibus tortor quam a erat. Ut eget purus augue."}),i.jsx(m,{sx:{marginBottom:"16px"},children:"Maecenas dapibus sollicitudin gravida. Nunc bibendum erat id est tincidunt varius. Nullam nulla ante, fringilla a suscipit in, commodo sed sapien. Morbi id ornare nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tincidunt ipsum id mi lacinia, at placerat mi ullamcorper. Nam vel purus a enim consectetur posuere sit amet a lacus. Curabitur euismod aliquam nisl vel feugiat. Nulla venenatis orci ac fringilla tincidunt. Curabitur pulvinar vehicula ipsum, sit amet molestie nisi consectetur id. Pellentesque vel mi in purus varius pharetra. Cras nibh nunc, tincidunt vitae erat sit amet, consequat dapibus nisl. Nulla quam mi, rutrum non bibendum at, facilisis eget est. Praesent vestibulum dictum sapien quis dictum. Morbi nulla lorem, ultricies bibendum augue at, pulvinar volutpat mi. Donec gravida est ac leo maximus maximus."}),i.jsx(C,{children:"Click"})]})}),i.jsx(C,{onClick:()=>d(o=>!o),children:"Toggle Blocking"})]})},args:{blocking:!1,renderChildren:!0,message:"Loading"}};var w,D,M;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: BlockUiProps) => {
    const [blocking, setBlocking] = useState(args.blocking);
    useEffect(() => {
      setBlocking(args.blocking);
    }, [args.blocking]);
    return <>
        <BlockUi {...args} blocking={blocking}>
          <Paper sx={{
          padding: '1.5rem',
          minHeight: '250px'
        }}>
            <Typography variant="h1">Header</Typography>
            <Typography sx={{
            marginBottom: '16px'
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem mauris, sollicitudin sit amet
              lacus vel, sollicitudin tincidunt mi. Mauris risus nisi, sagittis id augue sit amet, venenatis volutpat
              dui. Etiam commodo vel lectus eget ornare. Donec laoreet urna eu velit condimentum viverra. Curabitur ut
              pulvinar ipsum, vitae laoreet nulla. Nam in nisl sit amet leo dignissim tempor. Donec imperdiet est odio,
              ac aliquam libero eleifend at. Pellentesque tempor semper nulla vel fermentum. Pellentesque viverra, neque
              vel laoreet sollicitudin, massa lacus ultricies lectus, quis rutrum odio orci vitae turpis. Donec rhoncus
              dui nec ex porta, vel porta odio suscipit.
            </Typography>
            <Typography sx={{
            marginBottom: '16px'
          }}>
              Vestibulum nec lectus ac metus semper tempus. Aliquam porttitor odio at eros condimentum lobortis. Mauris
              lectus nibh, feugiat sit amet metus at, auctor placerat enim. Mauris finibus elit vel orci tincidunt
              euismod. Duis mollis dolor lectus, nec rutrum nisi porta pharetra. Mauris dictum aliquet diam et molestie.
              In hac habitasse platea dictumst. Quisque pulvinar semper diam, ut euismod felis congue ut. Integer eget
              tortor a justo volutpat pellentesque. Duis a egestas arcu, sed bibendum ipsum. Duis rhoncus nulla nec
              euismod venenatis. Praesent tincidunt neque vitae justo commodo, sed sollicitudin ante iaculis.
            </Typography>
            <Typography sx={{
            marginBottom: '16px'
          }}>
              Duis eu lorem scelerisque, lacinia nulla quis, tristique ex. Integer ipsum nisl, consectetur vel rhoncus
              vel, scelerisque nec justo. Cras bibendum tempor magna, non dictum quam facilisis eget. Curabitur nec odio
              nec leo dapibus commodo a sed sem. Suspendisse accumsan sollicitudin ante, vel rutrum orci blandit ut.
              Nulla sed magna mauris. Proin nec dignissim urna, sit amet tempor libero. Morbi commodo urna et porta
              porta. Mauris fermentum, dui eu ullamcorper blandit, neque urna laoreet ante, semper interdum magna orci
              id velit. Etiam in cursus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Duis massa lacus, vulputate sit amet euismod sit amet, pharetra id sem. In hac
              habitasse platea dictumst. Praesent purus sem, sagittis malesuada nulla sed, congue hendrerit orci.
              Vestibulum imperdiet, urna a tempor efficitur, nibh nulla efficitur leo, id faucibus tortor quam a erat.
              Ut eget purus augue.
            </Typography>
            <Typography sx={{
            marginBottom: '16px'
          }}>
              Maecenas dapibus sollicitudin gravida. Nunc bibendum erat id est tincidunt varius. Nullam nulla ante,
              fringilla a suscipit in, commodo sed sapien. Morbi id ornare nibh. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Etiam tincidunt ipsum id mi lacinia, at placerat mi
              ullamcorper. Nam vel purus a enim consectetur posuere sit amet a lacus. Curabitur euismod aliquam nisl vel
              feugiat. Nulla venenatis orci ac fringilla tincidunt. Curabitur pulvinar vehicula ipsum, sit amet molestie
              nisi consectetur id. Pellentesque vel mi in purus varius pharetra. Cras nibh nunc, tincidunt vitae erat
              sit amet, consequat dapibus nisl. Nulla quam mi, rutrum non bibendum at, facilisis eget est. Praesent
              vestibulum dictum sapien quis dictum. Morbi nulla lorem, ultricies bibendum augue at, pulvinar volutpat
              mi. Donec gravida est ac leo maximus maximus.
            </Typography>
            <Button>Click</Button>
          </Paper>
        </BlockUi>
        <Button onClick={() => setBlocking(prev => !prev)}>Toggle Blocking</Button>
      </>;
  },
  args: {
    blocking: false,
    renderChildren: true,
    message: 'Loading'
  }
}`,...(M=(D=h.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const Be=["_BlockUi"];export{h as _BlockUi,Be as __namedExportsOrder,ke as default};
