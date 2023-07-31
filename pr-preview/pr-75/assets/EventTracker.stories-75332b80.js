import{j as o,a as p}from"./jsx-runtime-91a467a5.js";import{r as s}from"./index-8db94870.js";import{B as T}from"./index-64a79fdb.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-91e81b21.js";import"./styled-e83a4d6b.js";import"./useThemeProps-2be0b178.js";import"./extends-bab83b91.js";import"./ButtonBase-43bbae14.js";import"./emotion-react.browser.esm-69c9b3f9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./LoadingButton-968b367b.js";import"./useId-fd294ee9.js";import"./Tooltip-dcd87a2c.js";import"./useTheme-4b6e7437.js";import"./ownerDocument-613eb639.js";import"./index-8ce4a492.js";import"./useSlotProps-c61722cd.js";import"./utils-b43d3537.js";import"./IconButton-1375a629.js";const g=s.createContext(null),x=()=>{const t=s.useContext(g);if(!t)throw new Error("useEventTracker must be used inside of the EventTrackerProvider component");return t},i=({children:t,pageTracking:a=!0})=>{const[r,l]=s.useState(!0),[d,e]=s.useState("info");s.useEffect(()=>{const n=y=>{console.log("hash change",y)};return a?window.addEventListener("hashchange",n,!1):window.removeEventListener("hashchange",n,!1),()=>{window.removeEventListener("hashchange",n,!1)}});const h=n=>{r&&console.log("focus",n)},E=n=>{r&&console.log("blur",n)},k=n=>{r&&console.log("click",n)};return o(g.Provider,{value:{enabled:r,setEnabled:l,level:d,setLevel:e,logOnBlur:E,logOnFocus:h,logOnClick:k},children:t})};try{i.displayName="EventTrackerProvider",i.__docgenInfo={description:"",displayName:"EventTrackerProvider",props:{pageTracking:{defaultValue:{value:"true"},description:"Logs an event when the hash (#) changes in the url",name:"pageTracking",required:!1,type:{name:"true"}}}}}catch{}const M={title:"Components/EventTracker/EventTracker",component:i,tags:["autodocs"]},c={decorators:[t=>o(i,{children:o(t,{})})],render:()=>{const[t,a]=s.useState(""),{logOnClick:r,logOnFocus:l,logOnBlur:d}=x();return p(i,{children:[p("p",{children:["Last tracked event: ",t]}),o("div",{tabIndex:0,onFocus:e=>{a(e.type),l(e)},style:{border:1,borderStyle:"solid",width:"150px",padding:"8px"},children:"Focusable div"}),o("div",{tabIndex:0,onBlur:e=>{a(e.type),d(e)},style:{border:1,borderStyle:"solid",width:"250px",marginTop:"8px",marginBottom:"8px",padding:"8px"},children:"Blurrable div"}),o(T,{onClick:e=>{r(e),a(e.type)},children:"Click"})]})},args:{}};var v,u,m;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(m=(u=c.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const Q=["_EventTracker"];export{c as _EventTracker,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=EventTracker.stories-75332b80.js.map
