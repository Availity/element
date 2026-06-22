import{r as u,j as i}from"./iframe-DHkqGgbi.js";import{P as m}from"./Paper-fpDEzwjb.js";import{B as r}from"./Button-BBqhYll5.js";import{T as e}from"./Typography-BunlOy3h.js";import{B as n}from"./BlockUi-BLKiWFVt.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Cer6O457.js";import"./useTheme-DTNKpojL.js";import"./styled-BFLY3dn7.js";import"./memoTheme-vxEZSkJ8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Button-CHAexKoQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BwqJJF5q.js";import"./useTimeout-Bjfnw5AG.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./useForkRef-B4h6zx_x.js";import"./useEventCallback-LtXdtY4h.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D39cxiof.js";import"./Typography-i96SYvKe.js";const I={title:"Components/BlockUi/BlockUi",component:n,tags:["autodocs"],argTypes:{backdropColor:{options:["paper","canvas"]}}},a={render:t=>{const[o,s]=u.useState(t.blocking);return u.useEffect(()=>{s(t.blocking)},[t.blocking]),i.jsxs(i.Fragment,{children:[i.jsx(n,{...t,blocking:o,children:i.jsxs(m,{sx:{padding:"1.5rem",minHeight:"250px"},children:[i.jsx(e,{variant:"h1",children:"Header"}),i.jsx(e,{sx:{marginBottom:"16px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem mauris, sollicitudin sit amet lacus vel, sollicitudin tincidunt mi. Mauris risus nisi, sagittis id augue sit amet, venenatis volutpat dui. Etiam commodo vel lectus eget ornare. Donec laoreet urna eu velit condimentum viverra. Curabitur ut pulvinar ipsum, vitae laoreet nulla. Nam in nisl sit amet leo dignissim tempor. Donec imperdiet est odio, ac aliquam libero eleifend at. Pellentesque tempor semper nulla vel fermentum. Pellentesque viverra, neque vel laoreet sollicitudin, massa lacus ultricies lectus, quis rutrum odio orci vitae turpis. Donec rhoncus dui nec ex porta, vel porta odio suscipit."}),i.jsx(e,{sx:{marginBottom:"16px"},children:"Vestibulum nec lectus ac metus semper tempus. Aliquam porttitor odio at eros condimentum lobortis. Mauris lectus nibh, feugiat sit amet metus at, auctor placerat enim. Mauris finibus elit vel orci tincidunt euismod. Duis mollis dolor lectus, nec rutrum nisi porta pharetra. Mauris dictum aliquet diam et molestie. In hac habitasse platea dictumst. Quisque pulvinar semper diam, ut euismod felis congue ut. Integer eget tortor a justo volutpat pellentesque. Duis a egestas arcu, sed bibendum ipsum. Duis rhoncus nulla nec euismod venenatis. Praesent tincidunt neque vitae justo commodo, sed sollicitudin ante iaculis."}),i.jsx(e,{sx:{marginBottom:"16px"},children:"Duis eu lorem scelerisque, lacinia nulla quis, tristique ex. Integer ipsum nisl, consectetur vel rhoncus vel, scelerisque nec justo. Cras bibendum tempor magna, non dictum quam facilisis eget. Curabitur nec odio nec leo dapibus commodo a sed sem. Suspendisse accumsan sollicitudin ante, vel rutrum orci blandit ut. Nulla sed magna mauris. Proin nec dignissim urna, sit amet tempor libero. Morbi commodo urna et porta porta. Mauris fermentum, dui eu ullamcorper blandit, neque urna laoreet ante, semper interdum magna orci id velit. Etiam in cursus eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis massa lacus, vulputate sit amet euismod sit amet, pharetra id sem. In hac habitasse platea dictumst. Praesent purus sem, sagittis malesuada nulla sed, congue hendrerit orci. Vestibulum imperdiet, urna a tempor efficitur, nibh nulla efficitur leo, id faucibus tortor quam a erat. Ut eget purus augue."}),i.jsx(e,{sx:{marginBottom:"16px"},children:"Maecenas dapibus sollicitudin gravida. Nunc bibendum erat id est tincidunt varius. Nullam nulla ante, fringilla a suscipit in, commodo sed sapien. Morbi id ornare nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tincidunt ipsum id mi lacinia, at placerat mi ullamcorper. Nam vel purus a enim consectetur posuere sit amet a lacus. Curabitur euismod aliquam nisl vel feugiat. Nulla venenatis orci ac fringilla tincidunt. Curabitur pulvinar vehicula ipsum, sit amet molestie nisi consectetur id. Pellentesque vel mi in purus varius pharetra. Cras nibh nunc, tincidunt vitae erat sit amet, consequat dapibus nisl. Nulla quam mi, rutrum non bibendum at, facilisis eget est. Praesent vestibulum dictum sapien quis dictum. Morbi nulla lorem, ultricies bibendum augue at, pulvinar volutpat mi. Donec gravida est ac leo maximus maximus."}),i.jsx(r,{children:"Click"})]})}),i.jsx(r,{onClick:()=>s(l=>!l),children:"Toggle Blocking"})]})},args:{blocking:!1,renderChildren:!0,message:"Loading"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const V=["_BlockUi"];export{a as _BlockUi,V as __namedExportsOrder,I as default};
