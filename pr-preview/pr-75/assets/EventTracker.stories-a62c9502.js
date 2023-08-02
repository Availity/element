import{j as s,a as v}from"./jsx-runtime-91a467a5.js";import{r as i}from"./index-8db94870.js";import{B as x}from"./index-64a79fdb.js";import{a as f}from"./index-ff6cfc4f.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-91e81b21.js";import"./styled-e83a4d6b.js";import"./useThemeProps-2be0b178.js";import"./extends-bab83b91.js";import"./ButtonBase-43bbae14.js";import"./emotion-react.browser.esm-69c9b3f9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./LoadingButton-968b367b.js";import"./useId-fd294ee9.js";import"./Tooltip-dcd87a2c.js";import"./useTheme-4b6e7437.js";import"./ownerDocument-613eb639.js";import"./index-8ce4a492.js";import"./useSlotProps-c61722cd.js";import"./utils-b43d3537.js";import"./IconButton-1375a629.js";import"./_baseFor-b49dd0af.js";import"./_initCloneObject-b55127fc.js";import"./isPlainObject-1a7aedfb.js";const l=async(e,n)=>{try{f[e](n)}catch{}},y=i.createContext(null),b=()=>{const e=i.useContext(y);if(!e)throw new Error("useEventTracker must be used inside of the EventTrackerProvider component");return e},c=({children:e,pageTracking:n=!0})=>{const[o,d]=i.useState(!0),[a,t]=i.useState("info");i.useEffect(()=>{const r=T=>{console.log("hash change",T)};return n?window.addEventListener("hashchange",r,!1):window.removeEventListener("hashchange",r,!1),()=>{window.removeEventListener("hashchange",r,!1)}});const h=r=>{o&&l(a,{et:r.type})},E=r=>{o&&l(a,{et:r.type})},k=r=>{o&&l(a,{et:r.type})};return s(y.Provider,{value:{enabled:o,setEnabled:d,level:a,setLevel:t,logOnBlur:E,logOnFocus:h,logOnClick:k},children:e})};try{c.displayName="EventTrackerProvider",c.__docgenInfo={description:"",displayName:"EventTrackerProvider",props:{pageTracking:{defaultValue:{value:"true"},description:"Logs an event when the hash (#) changes in the url",name:"pageTracking",required:!1,type:{name:"true"}}}}}catch{}const Y={title:"Components/EventTracker/EventTracker",component:c,tags:["autodocs"]},p={decorators:[e=>s(c,{children:s(e,{})})],render:()=>{const[e,n]=i.useState(""),{logOnClick:o,logOnFocus:d,logOnBlur:a}=b();return v(c,{children:[v("p",{children:["Last tracked event: ",e]}),s("div",{tabIndex:0,onFocus:t=>{n(t.type),d(t)},style:{border:1,borderStyle:"solid",width:"150px",padding:"8px"},children:"Focusable div"}),s("div",{tabIndex:0,onBlur:t=>{n(t.type),a(t)},style:{border:1,borderStyle:"solid",width:"250px",marginTop:"8px",marginBottom:"8px",padding:"8px"},children:"Blurrable div"}),s(x,{onClick:t=>{o(t),n(t.type)},children:"Click"})]})},args:{}};var m,u,g;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <EventTrackerProvider>
        <Story />
      </EventTrackerProvider>],
  render: () => {
    const [lastEventType, setLastEventType] = useState('');
    const {
      logOnClick,
      logOnFocus,
      logOnBlur
    } = useEventTracker();
    return <EventTrackerProvider>
        <p>Last tracked event: {lastEventType}</p>
        <div tabIndex={0} onFocus={event => {
        setLastEventType(event.type);
        logOnFocus(event);
      }} style={{
        border: 1,
        borderStyle: 'solid',
        width: '150px',
        padding: '8px'
      }}>
          Focusable div
        </div>
        <div tabIndex={0} onBlur={event => {
        setLastEventType(event.type);
        logOnBlur(event);
      }} style={{
        border: 1,
        borderStyle: 'solid',
        width: '250px',
        marginTop: '8px',
        marginBottom: '8px',
        padding: '8px'
      }}>
          Blurrable div
        </div>
        <Button onClick={event => {
        logOnClick(event);
        setLastEventType(event.type);
      }}>
          Click
        </Button>
      </EventTrackerProvider>;
  },
  args: {}
}`,...(g=(u=p.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const Z=["_EventTracker"];export{p as _EventTracker,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=EventTracker.stories-a62c9502.js.map
