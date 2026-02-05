import{r as t,j as i}from"./iframe-BRLvBxWA.js";import{P as E}from"./index-D8D9fEh9.js";import{B as C}from"./index-WLJ37MO7.js";import{T as m}from"./index-qy36QUxT.js";import{s as n}from"./styled-CZ9R0hiM.js";import{C as R}from"./CircularProgress-gYkLYLdu.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-B9vhvsVc.js";import"./useTheme-DUDwCCgT.js";import"./memoTheme-KNjPhf5l.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Tooltip-7V2d6kcs.js";import"./useSlot-BL0V4ya8.js";import"./mergeSlotProps-DJQ_9vH6.js";import"./useForkRef-Btt9MVeC.js";import"./useTimeout-D2Y7qDK0.js";import"./useControlled-APkh1ier.js";import"./useEventCallback-8VD7KoTy.js";import"./getReactElementRef-Cit-YTyg.js";import"./Portal-B3jPIhjh.js";import"./utils-v3JDOV4B.js";import"./TransitionGroupContext-DVVrop_G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BzYpEyJr.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyDu_M09.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-aoiMu9Tz.js";import"./Button-Dh1nUKo-.js";import"./Typography-CYuHQB7d.js";const V=()=>i.jsx(R,{"aria-label":"Loading",variant:"indeterminate"}),I=n("div")({position:"relative"}),S=n("div")({position:"absolute",zIndex:1010,top:0,right:0,bottom:0,left:0,height:"100%",minHeight:"4.5em",cursor:"wait",overflow:"hidden",":focus":{outline:"none"}}),_=n("div")({width:"100%",height:"100%",opacity:"0.88",filter:"alpha(opacity=50)",backgroundColor:"white"}),L=n("div")(({top:a="50%"})=>({top:a,position:"absolute",left:0,right:0,textAlign:"center",transform:"translateY(-50%)",zIndex:10001})),H=n("div")({color:"#333",background:"none",zIndex:"1011"}),j=n("div")({position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:0});function f({backdropColor:a="paper",blocking:r,children:d,keepInView:o,loader:y=i.jsx(V,{}),message:k,renderChildren:w=!0,...D}){const[p,B]=t.useState("50%"),u=t.useRef(null),l=t.useRef(null),v=t.useRef(null),x=t.useRef(null),q=t.useCallback(()=>{if(r&&o&&v.current){const e=v.current.getBoundingClientRect(),c=window.innerHeight;if(e.top>c||e.bottom<0)return;if(e.top>=0&&e.bottom<=c){p!=="50%"&&B("50%");return}const b=x.current?x.current.getBoundingClientRect().height:0;let s=Math.max(Math.min(c,e.bottom)-Math.max(e.top,0),b)/2;e.top<0&&(s=Math.min(s-e.top,e.height-b/2)),p!==s&&B(s)}},[r,o,p]);t.useEffect(()=>(window.addEventListener("scroll",q),()=>{window.removeEventListener("scroll",q)}),[q]);const g=(e,c=!1)=>{const{key:b,shiftKey:s}=e;return r&&b==="Tab"&&s===c},M=e=>{u.current&&g(e)&&u.current.focus()},T=e=>{u.current&&g(e)&&(e.preventDefault(),u.current.focus())},N=e=>{l.current&&g(e,!0)&&l.current.focus()},P=e=>{l.current&&g(e,!0)&&(e.preventDefault(),l.current.focus())},U=!r||w;return i.jsxs(I,{"aria-busy":r,...D,children:[r?i.jsx(j,{tabIndex:0,onKeyUp:M,onKeyDown:T,ref:l,children:k||"loading"}):null,U?d:null,r?i.jsxs(S,{tabIndex:0,ref:u,onKeyUp:N,onKeyDown:P,children:[i.jsx(_,{ref:v,sx:{backgroundColor:`background.${a}`}}),i.jsx(L,{ref:x,top:o?p:void 0,children:i.jsxs(H,{children:[t.isValidElement(y)?i.jsx("div",{"aria-hidden":!0,children:y}):null,k||i.jsx(j,{children:"loading"})]})})]}):null]})}try{f.displayName="BlockUi",f.__docgenInfo={description:"",displayName:"BlockUi",props:{backdropColor:{defaultValue:{value:"paper"},description:"Set the color of the blocking component.",name:"backdropColor",required:!1,type:{name:'"canvas" | "paper"'}},blocking:{defaultValue:null,description:"Set whether the component should block its children",name:"blocking",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children to display",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class name to pass to component",name:"className",required:!1,type:{name:"string"}},keepInView:{defaultValue:null,description:"Set whether the blocking component should follow the scroll or stay at a fixed postion",name:"keepInView",required:!1,type:{name:"boolean"}},loader:{defaultValue:{value:"<Loader />"},description:"Loader component to use",name:"loader",required:!1,type:{name:"React.JSX.Element"}},message:{defaultValue:null,description:"The message to display. Can also be a component.",name:"message",required:!1,type:{name:"ReactNode"}},renderChildren:{defaultValue:{value:"true"},description:"Control if the children are shown when the component is being blocked",name:"renderChildren",required:!1,type:{name:"boolean"}}}}}catch{}const ve={title:"Components/BlockUi/BlockUi",component:f,tags:["autodocs"],argTypes:{backdropColor:{options:["paper","canvas"]}}},h={render:a=>{const[r,d]=t.useState(a.blocking);return t.useEffect(()=>{d(a.blocking)},[a.blocking]),i.jsxs(i.Fragment,{children:[i.jsx(f,{...a,blocking:r,children:i.jsxs(E,{sx:{padding:"1.5rem",minHeight:"250px"},children:[i.jsx(m,{variant:"h1",children:"Header"}),i.jsx(m,{sx:{marginBottom:"16px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem mauris, sollicitudin sit amet lacus vel, sollicitudin tincidunt mi. Mauris risus nisi, sagittis id augue sit amet, venenatis volutpat dui. Etiam commodo vel lectus eget ornare. Donec laoreet urna eu velit condimentum viverra. Curabitur ut pulvinar ipsum, vitae laoreet nulla. Nam in nisl sit amet leo dignissim tempor. Donec imperdiet est odio, ac aliquam libero eleifend at. Pellentesque tempor semper nulla vel fermentum. Pellentesque viverra, neque vel laoreet sollicitudin, massa lacus ultricies lectus, quis rutrum odio orci vitae turpis. Donec rhoncus dui nec ex porta, vel porta odio suscipit."}),i.jsx(m,{sx:{marginBottom:"16px"},children:"Vestibulum nec lectus ac metus semper tempus. Aliquam porttitor odio at eros condimentum lobortis. Mauris lectus nibh, feugiat sit amet metus at, auctor placerat enim. Mauris finibus elit vel orci tincidunt euismod. Duis mollis dolor lectus, nec rutrum nisi porta pharetra. Mauris dictum aliquet diam et molestie. In hac habitasse platea dictumst. Quisque pulvinar semper diam, ut euismod felis congue ut. Integer eget tortor a justo volutpat pellentesque. Duis a egestas arcu, sed bibendum ipsum. Duis rhoncus nulla nec euismod venenatis. Praesent tincidunt neque vitae justo commodo, sed sollicitudin ante iaculis."}),i.jsx(m,{sx:{marginBottom:"16px"},children:"Duis eu lorem scelerisque, lacinia nulla quis, tristique ex. Integer ipsum nisl, consectetur vel rhoncus vel, scelerisque nec justo. Cras bibendum tempor magna, non dictum quam facilisis eget. Curabitur nec odio nec leo dapibus commodo a sed sem. Suspendisse accumsan sollicitudin ante, vel rutrum orci blandit ut. Nulla sed magna mauris. Proin nec dignissim urna, sit amet tempor libero. Morbi commodo urna et porta porta. Mauris fermentum, dui eu ullamcorper blandit, neque urna laoreet ante, semper interdum magna orci id velit. Etiam in cursus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis massa lacus, vulputate sit amet euismod sit amet, pharetra id sem. In hac habitasse platea dictumst. Praesent purus sem, sagittis malesuada nulla sed, congue hendrerit orci. Vestibulum imperdiet, urna a tempor efficitur, nibh nulla efficitur leo, id faucibus tortor quam a erat. Ut eget purus augue."}),i.jsx(m,{sx:{marginBottom:"16px"},children:"Maecenas dapibus sollicitudin gravida. Nunc bibendum erat id est tincidunt varius. Nullam nulla ante, fringilla a suscipit in, commodo sed sapien. Morbi id ornare nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tincidunt ipsum id mi lacinia, at placerat mi ullamcorper. Nam vel purus a enim consectetur posuere sit amet a lacus. Curabitur euismod aliquam nisl vel feugiat. Nulla venenatis orci ac fringilla tincidunt. Curabitur pulvinar vehicula ipsum, sit amet molestie nisi consectetur id. Pellentesque vel mi in purus varius pharetra. Cras nibh nunc, tincidunt vitae erat sit amet, consequat dapibus nisl. Nulla quam mi, rutrum non bibendum at, facilisis eget est. Praesent vestibulum dictum sapien quis dictum. Morbi nulla lorem, ultricies bibendum augue at, pulvinar volutpat mi. Donec gravida est ac leo maximus maximus."}),i.jsx(C,{children:"Click"})]})}),i.jsx(C,{onClick:()=>d(o=>!o),children:"Toggle Blocking"})]})},args:{blocking:!1,renderChildren:!0,message:"Loading"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const xe=["_BlockUi"];export{h as _BlockUi,xe as __namedExportsOrder,ve as default};
