try{
(()=>{var o=__REACT__,{Children:xr,Component:Nr,Fragment:W,Profiler:kr,PureComponent:de,StrictMode:wr,Suspense:Lr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Dr,cloneElement:$,createContext:me,createElement:h,createFactory:Pr,createRef:pe,forwardRef:Hr,isValidElement:ge,lazy:Br,memo:Mr,startTransition:Ur,unstable_act:Fr,useCallback:O,useContext:he,useDebugValue:Gr,useDeferredValue:Wr,useEffect:Y,useId:$r,useImperativeHandle:Yr,useInsertionEffect:jr,useLayoutEffect:Ie,useMemo:B,useReducer:zr,useRef:j,useState:M,useSyncExternalStore:Vr,useTransition:Kr,version:qr}=__REACT__;var Jr=__STORYBOOK_COMPONENTS__,{A:eo,ActionBar:X,AddonPanel:to,Badge:Z,Bar:no,Blockquote:ro,Button:oo,ClipboardCode:ao,Code:io,DL:lo,Div:co,DocumentWrapper:so,EmptyTabContent:Ee,ErrorFormatter:uo,FlexBar:mo,Form:po,H1:go,H2:ho,H3:Io,H4:Eo,H5:fo,H6:So,HR:_o,IconButton:fe,IconButtonSkeleton:Ro,Icons:To,Img:bo,LI:yo,Link:Se,ListItem:Oo,Loader:vo,Modal:Co,OL:Ao,P:xo,Placeholder:No,Pre:ko,ProgressSpinner:wo,ResetWrapper:Lo,ScrollArea:_e,Separator:Do,Spaced:Re,Span:Po,StorybookIcon:Ho,StorybookLogo:Bo,Symbols:Mo,SyntaxHighlighter:Uo,TT:Fo,TabBar:Go,TabButton:Wo,TabWrapper:$o,Table:Yo,Tabs:jo,TabsState:zo,TooltipLinkList:Te,TooltipMessage:Vo,TooltipNote:Ko,UL:qo,WithTooltip:be,WithTooltipPure:Qo,Zoom:Xo,codeCommon:Zo,components:Jo,createCopyToClipboardFunction:ea,getStoryHref:ta,icons:na,interleaveSeparators:ra,nameSpaceClassNames:oa,resetComponents:aa,withReset:ia}=__STORYBOOK_COMPONENTS__;var da=__STORYBOOK_API__,{ActiveTabs:ma,Consumer:pa,ManagerContext:ga,Provider:ha,RequestResponseError:Ia,addons:z,combineParameters:Ea,controlOrMetaKey:fa,controlOrMetaSymbol:Sa,eventMatchesShortcut:_a,eventToShortcut:Ra,experimental_MockUniversalStore:Ta,experimental_UniversalStore:ba,experimental_requestResponse:ya,experimental_useUniversalStore:Oa,isMacLike:va,isShortcutTaken:Ca,keyToSymbol:Aa,merge:xa,mockChannel:Na,optionOrAltSymbol:ka,shortcutMatchesShortcut:wa,shortcutToHumanString:La,types:J,useAddonState:ee,useArgTypes:Da,useArgs:Pa,useChannel:ye,useGlobalTypes:Ha,useGlobals:Oe,useParameter:ve,useSharedState:Ba,useStoryPrepared:Ma,useStorybookApi:te,useStorybookState:Ce}=__STORYBOOK_API__;var $a=__STORYBOOK_THEMING__,{CacheProvider:Ya,ClassNames:ja,Global:Ae,ThemeProvider:za,background:Va,color:Ka,convert:V,create:qa,createCache:Qa,createGlobal:Xa,createReset:Za,css:Ja,darken:ei,ensure:ti,ignoreSsrWarning:ni,isPropValid:ri,jsx:oi,keyframes:ai,lighten:ii,styled:c,themes:K,typography:li,useTheme:ci,withTheme:si}=__STORYBOOK_THEMING__;var gi=__STORYBOOK_ICONS__,{AccessibilityAltIcon:hi,AccessibilityIcon:xe,AccessibilityIgnoredIcon:Ii,AddIcon:Ei,AdminIcon:fi,AlertAltIcon:Si,AlertIcon:_i,AlignLeftIcon:Ri,AlignRightIcon:Ti,AppleIcon:bi,ArrowBottomLeftIcon:yi,ArrowBottomRightIcon:Oi,ArrowDownIcon:vi,ArrowLeftIcon:Ci,ArrowRightIcon:Ai,ArrowSolidDownIcon:xi,ArrowSolidLeftIcon:Ni,ArrowSolidRightIcon:ki,ArrowSolidUpIcon:wi,ArrowTopLeftIcon:Li,ArrowTopRightIcon:Di,ArrowUpIcon:Pi,AzureDevOpsIcon:Hi,BackIcon:Bi,BasketIcon:Mi,BatchAcceptIcon:Ui,BatchDenyIcon:Fi,BeakerIcon:Gi,BellIcon:Wi,BitbucketIcon:$i,BoldIcon:Yi,BookIcon:ji,BookmarkHollowIcon:zi,BookmarkIcon:Vi,BottomBarIcon:Ki,BottomBarToggleIcon:qi,BoxIcon:Qi,BranchIcon:Xi,BrowserIcon:Zi,ButtonIcon:Ji,CPUIcon:el,CalendarIcon:tl,CameraIcon:nl,CameraStabilizeIcon:rl,CategoryIcon:ol,CertificateIcon:al,ChangedIcon:il,ChatIcon:ll,CheckIcon:Ne,ChevronDownIcon:cl,ChevronLeftIcon:sl,ChevronRightIcon:ul,ChevronSmallDownIcon:ke,ChevronSmallLeftIcon:dl,ChevronSmallRightIcon:ml,ChevronSmallUpIcon:pl,ChevronUpIcon:gl,ChromaticIcon:hl,ChromeIcon:Il,CircleHollowIcon:El,CircleIcon:fl,ClearIcon:Sl,CloseAltIcon:_l,CloseIcon:Rl,CloudHollowIcon:Tl,CloudIcon:bl,CogIcon:yl,CollapseIcon:Ol,CommandIcon:vl,CommentAddIcon:Cl,CommentIcon:Al,CommentsIcon:xl,CommitIcon:Nl,CompassIcon:kl,ComponentDrivenIcon:wl,ComponentIcon:Ll,ContrastIcon:Dl,ContrastIgnoredIcon:Pl,ControlsIcon:Hl,CopyIcon:Bl,CreditIcon:Ml,CrossIcon:Ul,DashboardIcon:Fl,DatabaseIcon:Gl,DeleteIcon:Wl,DiamondIcon:$l,DirectionIcon:Yl,DiscordIcon:jl,DocChartIcon:zl,DocListIcon:Vl,DocumentIcon:Kl,DownloadIcon:ql,DragIcon:Ql,EditIcon:Xl,EllipsisIcon:Zl,EmailIcon:Jl,ExpandAltIcon:ec,ExpandIcon:tc,EyeCloseIcon:nc,EyeIcon:rc,FaceHappyIcon:oc,FaceNeutralIcon:ac,FaceSadIcon:ic,FacebookIcon:lc,FailedIcon:cc,FastForwardIcon:sc,FigmaIcon:uc,FilterIcon:dc,FlagIcon:mc,FolderIcon:pc,FormIcon:gc,GDriveIcon:hc,GithubIcon:Ic,GitlabIcon:Ec,GlobeIcon:fc,GoogleIcon:Sc,GraphBarIcon:_c,GraphLineIcon:Rc,GraphqlIcon:Tc,GridAltIcon:bc,GridIcon:yc,GrowIcon:Oc,HeartHollowIcon:vc,HeartIcon:Cc,HomeIcon:Ac,HourglassIcon:xc,InfoIcon:Nc,ItalicIcon:kc,JumpToIcon:wc,KeyIcon:Lc,LightningIcon:Dc,LightningOffIcon:Pc,LinkBrokenIcon:Hc,LinkIcon:Bc,LinkedinIcon:Mc,LinuxIcon:Uc,ListOrderedIcon:Fc,ListUnorderedIcon:Gc,LocationIcon:Wc,LockIcon:$c,MarkdownIcon:Yc,MarkupIcon:jc,MediumIcon:zc,MemoryIcon:Vc,MenuIcon:Kc,MergeIcon:qc,MirrorIcon:Qc,MobileIcon:Xc,MoonIcon:Zc,NutIcon:Jc,OutboxIcon:es,OutlineIcon:ts,PaintBrushIcon:ns,PaperClipIcon:rs,ParagraphIcon:os,PassedIcon:as,PhoneIcon:is,PhotoDragIcon:ls,PhotoIcon:cs,PhotoStabilizeIcon:ss,PinAltIcon:us,PinIcon:ds,PlayAllHollowIcon:ms,PlayBackIcon:ps,PlayHollowIcon:gs,PlayIcon:hs,PlayNextIcon:Is,PlusIcon:Es,PointerDefaultIcon:fs,PointerHandIcon:Ss,PowerIcon:_s,PrintIcon:Rs,ProceedIcon:Ts,ProfileIcon:bs,PullRequestIcon:ys,QuestionIcon:Os,RSSIcon:vs,RedirectIcon:Cs,ReduxIcon:As,RefreshIcon:xs,ReplyIcon:Ns,RepoIcon:ks,RequestChangeIcon:ws,RewindIcon:Ls,RulerIcon:Ds,SaveIcon:Ps,SearchIcon:Hs,ShareAltIcon:Bs,ShareIcon:Ms,ShieldIcon:Us,SideBySideIcon:Fs,SidebarAltIcon:Gs,SidebarAltToggleIcon:Ws,SidebarIcon:$s,SidebarToggleIcon:Ys,SpeakerIcon:js,StackedIcon:zs,StarHollowIcon:Vs,StarIcon:Ks,StatusFailIcon:qs,StatusIcon:Qs,StatusPassIcon:Xs,StatusWarnIcon:Zs,StickerIcon:Js,StopAltHollowIcon:eu,StopAltIcon:tu,StopIcon:nu,StorybookIcon:ru,StructureIcon:ou,SubtractIcon:au,SunIcon:iu,SupportIcon:lu,SwitchAltIcon:cu,SyncIcon:we,TabletIcon:su,ThumbsUpIcon:uu,TimeIcon:du,TimerIcon:mu,TransferIcon:pu,TrashIcon:gu,TwitterIcon:hu,TypeIcon:Iu,UbuntuIcon:Eu,UndoIcon:fu,UnfoldIcon:Su,UnlockIcon:_u,UnpinIcon:Ru,UploadIcon:Tu,UserAddIcon:bu,UserAltIcon:yu,UserIcon:Ou,UsersIcon:vu,VSCodeIcon:Cu,VerifiedIcon:Au,VideoIcon:xu,WandIcon:Nu,WatchIcon:ku,WindowsIcon:wu,WrenchIcon:Lu,XIcon:Du,YoutubeIcon:Pu,ZoomIcon:Hu,ZoomOutIcon:Bu,ZoomResetIcon:Mu,iconList:Uu}=__STORYBOOK_ICONS__;var Yu=__STORYBOOK_CORE_EVENTS__,{ARGTYPES_INFO_REQUEST:ju,ARGTYPES_INFO_RESPONSE:zu,CHANNEL_CREATED:Vu,CHANNEL_WS_DISCONNECT:Ku,CONFIG_ERROR:qu,CREATE_NEW_STORYFILE_REQUEST:Qu,CREATE_NEW_STORYFILE_RESPONSE:Xu,CURRENT_STORY_WAS_SET:Zu,DOCS_PREPARED:Ju,DOCS_RENDERED:ed,FILE_COMPONENT_SEARCH_REQUEST:td,FILE_COMPONENT_SEARCH_RESPONSE:nd,FORCE_REMOUNT:rd,FORCE_RE_RENDER:od,GLOBALS_UPDATED:ad,NAVIGATE_URL:id,PLAY_FUNCTION_THREW_EXCEPTION:ld,PRELOAD_ENTRIES:cd,PREVIEW_BUILDER_PROGRESS:sd,PREVIEW_KEYDOWN:ud,REGISTER_SUBSCRIPTION:dd,REQUEST_WHATS_NEW_DATA:md,RESET_STORY_ARGS:pd,RESULT_WHATS_NEW_DATA:gd,SAVE_STORY_REQUEST:hd,SAVE_STORY_RESPONSE:Id,SELECT_STORY:Ed,SET_CONFIG:fd,SET_CURRENT_STORY:Sd,SET_FILTER:_d,SET_GLOBALS:Rd,SET_INDEX:Td,SET_STORIES:bd,SET_WHATS_NEW_CACHE:yd,SHARED_STATE_CHANGED:Od,SHARED_STATE_SET:vd,STORIES_COLLAPSE_ALL:Cd,STORIES_EXPAND_ALL:Ad,STORY_ARGS_UPDATED:xd,STORY_CHANGED:Nd,STORY_ERRORED:kd,STORY_FINISHED:Le,STORY_INDEX_INVALIDATED:wd,STORY_MISSING:Ld,STORY_PREPARED:Dd,STORY_RENDERED:Pd,STORY_RENDER_PHASE_CHANGED:De,STORY_SPECIFIED:Hd,STORY_THREW_EXCEPTION:Bd,STORY_UNCHANGED:Md,TELEMETRY_ERROR:Ud,TESTING_MODULE_CANCEL_TEST_RUN_REQUEST:Fd,TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE:Gd,TESTING_MODULE_CRASH_REPORT:Wd,TESTING_MODULE_PROGRESS_REPORT:$d,TESTING_MODULE_RUN_ALL_REQUEST:Yd,TESTING_MODULE_RUN_REQUEST:jd,TOGGLE_WHATS_NEW_NOTIFICATIONS:zd,UNHANDLED_ERRORS_WHILE_PLAYING:Vd,UPDATE_GLOBALS:Kd,UPDATE_QUERY_PARAMS:qd,UPDATE_STORY_ARGS:Qd}=__STORYBOOK_CORE_EVENTS__;var Pe="storybook/highlight",He=`${Pe}/add`,im=`${Pe}/reset`;var dm=__REACT_DOM__,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:mm,createPortal:pm,createRoot:gm,findDOMNode:Be,flushSync:hm,hydrate:Im,hydrateRoot:Em,render:fm,unmountComponentAtNode:Sm,unstable_batchedUpdates:_m,unstable_renderSubtreeIntoContainer:Rm,version:Tm}=__REACT_DOM__;var L="storybook/a11y",Me=`${L}/panel`,at="a11y",it=`${L}/result`,lt=`${L}/request`,ct=`${L}/running`,st=`${L}/error`,ut=`${L}/manual`,dt="writing-tests/accessibility-testing",mt=`${dt}#why-are-my-tests-failing-in-different-environments`,pt="storybook/addon-a11y/test-provider",ne={RESULT:it,REQUEST:lt,RUNNING:ct,ERROR:st,MANUAL:ut},gt=[V(K.light).color.negative,V(K.light).color.positive,V(K.light).color.warning],Ke=me({results:{passes:[],incomplete:[],violations:[]},highlighted:[],toggleHighlight:()=>{},clearHighlights:()=>{},tab:0,setTab:()=>{},setStatus:()=>{},status:"initial",error:void 0,handleManual:()=>{},discrepancy:null}),Ue={passes:[],incomplete:[],violations:[]},ht=e=>{let n=ve("a11y",{manual:!1}),[r]=Oe()??[],t=O((f=!1)=>f?"manual":"initial",[]),a=B(()=>r?.a11y?.manual??n.manual??!1,[r?.a11y?.manual,n.manual]),m=te(),[s,i]=ee(L,Ue),[u,p]=M(0),[d,I]=o.useState(void 0),[l,E]=M(t(a)),[R,D]=M([]),{storyId:S}=Ce(),T=m.getCurrentStoryStatus(),x=O((f,k)=>{D(G=>k?[...G,...f]:G.filter(rt=>!f.includes(rt)))},[]),w=O(()=>D([]),[]),H=O(f=>{w(),p(f)},[w]),y=O(f=>{E("error"),I(f)},[]),g=O((f,k)=>{S===k&&(E("ran"),i(f),setTimeout(()=>{l==="ran"&&E("ready")},900))},[i,l,S]),b=O(({reporters:f})=>{let k=f.find(G=>G.type==="a11y");k&&("error"in k.result?y(k.result.error):g(k.result,S))},[y,g,S]),_=O(({newPhase:f})=>{f==="loading"&&(i(Ue),E(a?"manual":"running"))},[a,i]),N=ye({[ne.RESULT]:g,[ne.ERROR]:y,[De]:_,[Le]:b},[_,b,_,y,g]),F=O(()=>{E("running"),N(ne.MANUAL,S,n)},[N,n,S]);Y(()=>{E(t(a))},[t,a]),Y(()=>{N(He,{elements:R,color:gt[u]})},[N,R,u]);let Q=B(()=>{let f=T?.[pt]?.status;if(f){if(f==="success"&&s.violations.length>0)return"cliPassedBrowserFailed";if(f==="error"&&s.violations.length===0){if(l==="ready"||l==="ran")return"browserPassedCliFailed";if(l==="manual")return"cliFailedButModeManual"}}return null},[s.violations.length,l,T]);return o.createElement(Ke.Provider,{value:{results:s,highlighted:R,toggleHighlight:x,clearHighlights:w,tab:u,setTab:H,status:l,setStatus:E,error:d,handleManual:F,discrepancy:Q},...e})},ce=()=>he(Ke),It=c.input(({disabled:e})=>({cursor:e?"not-allowed":"pointer"}));function Fe(e,n){let r=e.filter(t=>n.includes(t.target[0])).length;return r===0?1:r===e.length?0:2}var Et=({toggleId:e,elementsToHighlight:n=[]})=>{let{toggleHighlight:r,highlighted:t}=ce(),a=o.useRef(null),[m,s]=o.useState(Fe(n,t));o.useEffect(()=>{let u=Fe(n,t);a.current&&(a.current.indeterminate=u===2),s(u)},[n,t]);let i=o.useCallback(()=>{r(n.map(u=>u.target[0]),m!==0)},[n,m,r]);return o.createElement(It,{ref:a,id:e,type:"checkbox","aria-label":"Highlight result",disabled:!n.length,onChange:i,checked:m===0})},se=Et,ae=function(e,n){return ae=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])},ae(e,n)};function ft(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");ae(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var ie=function(){return ie=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ie.apply(this,arguments)};function St(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}var q=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function _t(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var ue=_t,Rt=typeof q=="object"&&q&&q.Object===Object&&q,Tt=Rt,bt=Tt,yt=typeof self=="object"&&self&&self.Object===Object&&self,Ot=bt||yt||Function("return this")(),qe=Ot,vt=qe,Ct=function(){return vt.Date.now()},At=Ct,xt=/\s/;function Nt(e){for(var n=e.length;n--&&xt.test(e.charAt(n)););return n}var kt=Nt,wt=kt,Lt=/^\s+/;function Dt(e){return e&&e.slice(0,wt(e)+1).replace(Lt,"")}var Pt=Dt,Ht=qe,Bt=Ht.Symbol,Qe=Bt,Ge=Qe,Xe=Object.prototype,Mt=Xe.hasOwnProperty,Ut=Xe.toString,U=Ge?Ge.toStringTag:void 0;function Ft(e){var n=Mt.call(e,U),r=e[U];try{e[U]=void 0;var t=!0}catch{}var a=Ut.call(e);return t&&(n?e[U]=r:delete e[U]),a}var Gt=Ft,Wt=Object.prototype,$t=Wt.toString;function Yt(e){return $t.call(e)}var jt=Yt,We=Qe,zt=Gt,Vt=jt,Kt="[object Null]",qt="[object Undefined]",$e=We?We.toStringTag:void 0;function Qt(e){return e==null?e===void 0?qt:Kt:$e&&$e in Object(e)?zt(e):Vt(e)}var Xt=Qt;function Zt(e){return e!=null&&typeof e=="object"}var Jt=Zt,en=Xt,tn=Jt,nn="[object Symbol]";function rn(e){return typeof e=="symbol"||tn(e)&&en(e)==nn}var on=rn,an=Pt,Ye=ue,ln=on,je=NaN,cn=/^[-+]0x[0-9a-f]+$/i,sn=/^0b[01]+$/i,un=/^0o[0-7]+$/i,dn=parseInt;function mn(e){if(typeof e=="number")return e;if(ln(e))return je;if(Ye(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Ye(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=an(e);var r=sn.test(e);return r||un.test(e)?dn(e.slice(2),r?2:8):cn.test(e)?je:+e}var pn=mn,gn=ue,re=At,ze=pn,hn="Expected a function",In=Math.max,En=Math.min;function fn(e,n,r){var t,a,m,s,i,u,p=0,d=!1,I=!1,l=!0;if(typeof e!="function")throw new TypeError(hn);n=ze(n)||0,gn(r)&&(d=!!r.leading,I="maxWait"in r,m=I?In(ze(r.maxWait)||0,n):m,l="trailing"in r?!!r.trailing:l);function E(g){var b=t,_=a;return t=a=void 0,p=g,s=e.apply(_,b),s}function R(g){return p=g,i=setTimeout(T,n),d?E(g):s}function D(g){var b=g-u,_=g-p,N=n-b;return I?En(N,m-_):N}function S(g){var b=g-u,_=g-p;return u===void 0||b>=n||b<0||I&&_>=m}function T(){var g=re();if(S(g))return x(g);i=setTimeout(T,D(g))}function x(g){return i=void 0,l&&t?E(g):(t=a=void 0,s)}function w(){i!==void 0&&clearTimeout(i),p=0,t=u=a=i=void 0}function H(){return i===void 0?s:x(re())}function y(){var g=re(),b=S(g);if(t=arguments,a=this,u=g,b){if(i===void 0)return R(u);if(I)return clearTimeout(i),i=setTimeout(T,n),E(u)}return i===void 0&&(i=setTimeout(T,n)),s}return y.cancel=w,y.flush=H,y}var Ze=fn,Sn=Ze,_n=ue,Rn="Expected a function";function Tn(e,n,r){var t=!0,a=!0;if(typeof e!="function")throw new TypeError(Rn);return _n(r)&&(t="leading"in r?!!r.leading:t,a="trailing"in r?!!r.trailing:a),Sn(e,n,{leading:t,maxWait:n,trailing:a})}var bn=Tn,Je=function(e,n,r,t){switch(n){case"debounce":return Ze(e,r,t);case"throttle":return bn(e,r,t);default:return e}},le=function(e){return typeof e=="function"},P=function(){return typeof window>"u"},Ve=function(e){return e instanceof Element||e instanceof HTMLDocument},et=function(e,n,r,t){return function(a){var m=a.width,s=a.height;n(function(i){return i.width===m&&i.height===s||i.width===m&&!t||i.height===s&&!r?i:(e&&le(e)&&e(m,s),{width:m,height:s})})}};(function(e){ft(n,e);function n(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var p=t.props,d=p.targetRef,I=p.observerOptions;if(!P()){d&&d.current&&(t.targetRef.current=d.current);var l=t.getElement();l&&(t.observableElement&&t.observableElement===l||(t.observableElement=l,t.resizeObserver.observe(l,I)))}},t.getElement=function(){var p=t.props,d=p.querySelector,I=p.targetDomEl;if(P())return null;if(d)return document.querySelector(d);if(I&&Ve(I))return I;if(t.targetRef&&Ve(t.targetRef.current))return t.targetRef.current;var l=Be(t);if(!l)return null;var E=t.getRenderType();switch(E){case"renderProp":return l;case"childFunction":return l;case"child":return l;case"childArray":return l;default:return l.parentElement}},t.createResizeHandler=function(p){var d=t.props,I=d.handleWidth,l=I===void 0?!0:I,E=d.handleHeight,R=E===void 0?!0:E,D=d.onResize;if(!(!l&&!R)){var S=et(D,t.setState.bind(t),l,R);p.forEach(function(T){var x=T&&T.contentRect||{},w=x.width,H=x.height,y=!t.skipOnMount&&!P();y&&S({width:w,height:H}),t.skipOnMount=!1})}},t.getRenderType=function(){var p=t.props,d=p.render,I=p.children;return le(d)?"renderProp":le(I)?"childFunction":ge(I)?"child":Array.isArray(I)?"childArray":"parent"};var a=r.skipOnMount,m=r.refreshMode,s=r.refreshRate,i=s===void 0?1e3:s,u=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=a,t.targetRef=pe(),t.observableElement=null,P()||(t.resizeHandler=Je(t.createResizeHandler,m,i,u),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}return n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){P()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var r=this.props,t=r.render,a=r.children,m=r.nodeType,s=m===void 0?"div":m,i=this.state,u=i.width,p=i.height,d={width:u,height:p,targetRef:this.targetRef},I=this.getRenderType(),l;switch(I){case"renderProp":return t&&t(d);case"childFunction":return l=a,l(d);case"child":if(l=a,l.type&&typeof l.type=="string"){d.targetRef;var E=St(d,["targetRef"]);return $(l,E)}return $(l,d);case"childArray":return l=a,l.map(function(R){return!!R&&$(R,d)});default:return h(s,null)}},n})(de);var yn=P()?Y:Ie;function tt(e){e===void 0&&(e={});var n=e.skipOnMount,r=n===void 0?!1:n,t=e.refreshMode,a=e.refreshRate,m=a===void 0?1e3:a,s=e.refreshOptions,i=e.handleWidth,u=i===void 0?!0:i,p=e.handleHeight,d=p===void 0?!0:p,I=e.targetRef,l=e.observerOptions,E=e.onResize,R=j(r),D=j(null),S=I??D,T=j(),x=M({width:void 0,height:void 0}),w=x[0],H=x[1];return yn(function(){if(!P()){var y=et(E,H,u,d),g=function(_){!u&&!d||_.forEach(function(N){var F=N&&N.contentRect||{},Q=F.width,f=F.height,k=!R.current&&!P();k&&y({width:Q,height:f}),R.current=!1})};T.current=Je(g,t,m,s);var b=new window.ResizeObserver(T.current);return S.current&&b.observe(S.current,l),function(){b.disconnect();var _=T.current;_&&_.cancel&&_.cancel()}}},[t,m,s,u,d,E,l,S.current]),ie({ref:S},w)}var On=c.div({display:"flex",flexDirection:"column",paddingBottom:4,paddingRight:4,paddingTop:4,fontWeight:400}),vn=c.div(({elementWidth:e})=>({flexDirection:e>407?"row":"inherit",marginBottom:e>407?6:12,display:e>407?"flex":"block"})),Cn=c(Z)({padding:"2px 8px",marginBottom:3,minWidth:65,maxWidth:"fit-content",width:"100%",textAlign:"center"}),An=c.div({paddingLeft:6,paddingRight:23}),xn=e=>e.charAt(0).toUpperCase().concat(e.slice(1)),Nn=({rule:e})=>{let{ref:n,width:r}=tt({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),t=null;switch(e.impact){case"critical":t="critical";break;case"serious":t="negative";break;case"moderate":t="warning";break;case"minor":t="neutral";break}return o.createElement(vn,{ref:n,elementWidth:r||0},o.createElement(Cn,{status:t},xn(e.impact)),o.createElement(An,null,e.message))},kn=({rules:e})=>o.createElement(On,null,e.map((n,r)=>o.createElement(Nn,{rule:n,key:r}))),wn=c.li({fontWeight:600}),Ln=c.span(({theme:e})=>({borderBottom:`1px solid ${e.appBorderColor}`,width:"100%",display:"flex",paddingBottom:6,marginBottom:6,justifyContent:"space-between"})),Dn=c.span({fontWeight:"normal",alignSelf:"center",paddingRight:15,input:{margin:0,display:"block"}}),Pn=({element:e,type:n})=>{let{any:r,all:t,none:a}=e,m=[...r,...t,...a],s=`${n}-${e.target[0]}`;return o.createElement(wn,null,o.createElement(Ln,null,e.target[0],o.createElement(Dn,null,o.createElement(se,{toggleId:s,elementsToHighlight:[e]}))),o.createElement(kn,{rules:m}))},Hn=({elements:e,type:n})=>o.createElement("ol",null,e.map((r,t)=>o.createElement(Pn,{element:r,key:t,type:n}))),Bn=c.div({padding:12,marginBottom:10}),Mn=c.p({margin:"0 0 12px"}),Un=c.a({marginTop:12,textDecoration:"underline",color:"inherit",display:"block"}),Fn=({item:e})=>o.createElement(Bn,null,o.createElement(Mn,null,e.description),o.createElement(Un,{href:e.helpUrl,target:"_blank"},"More info...")),Gn=c.div({display:"flex",flexWrap:"wrap",margin:"12px 0"}),Wn=c.div(({theme:e})=>({margin:"0 6px",padding:5,border:`1px solid ${e.appBorderColor}`,borderRadius:e.appBorderRadius})),$n=({tags:e})=>o.createElement(Gn,null,e.map(n=>o.createElement(Wn,{key:n},n))),Yn=c.div(({theme:e})=>({display:"flex",width:"100%",borderBottom:`1px solid ${e.appBorderColor}`,"&:hover":{background:e.background.hoverable}})),jn=c(ke)({marginRight:10,transition:"transform 0.1s ease-in-out",verticalAlign:"inherit"}),zn=c.div(({theme:e})=>({padding:e.layoutMargin,paddingLeft:e.layoutMargin-3,lineHeight:"20px",background:"none",color:"inherit",textAlign:"left",cursor:"pointer",borderLeft:"3px solid transparent",width:"100%","&:focus":{outline:"0 none",borderLeft:`3px solid ${e.color.secondary}`}})),Vn=c.span({fontWeight:"normal",float:"right",marginRight:15,alignSelf:"center",input:{margin:0,display:"block"}}),Kn=e=>{let[n,r]=M(!1),{item:t,type:a}=e,m=`${a}-${t.id}`;return o.createElement(W,null,o.createElement(Yn,null,o.createElement(zn,{onClick:()=>r(!n),role:"button"},o.createElement(jn,{style:{transform:`rotate(${n?0:-90}deg)`}}),t.help),o.createElement(Vn,null,o.createElement(se,{toggleId:m,elementsToHighlight:t.nodes}))),n?o.createElement(W,null,o.createElement(Fn,{item:t,key:"info"}),o.createElement(Hn,{elements:t.nodes,type:a,key:"elements"}),o.createElement($n,{tags:t.tags,key:"tags"})):null)},oe=({items:e,empty:n,type:r})=>o.createElement(W,null,e&&e.length?e.map(t=>o.createElement(Kn,{item:t,key:`${r}:${t.id}`,type:r})):o.createElement(Ee,{title:n})),qn=c.div({width:"100%",position:"relative",minHeight:"100%"}),Qn=c.label(({theme:e})=>({cursor:"pointer",userSelect:"none",color:e.color.dark})),Xn=c.div(()=>({alignItems:"center",cursor:"pointer",display:"flex",fontSize:13,height:40,padding:"0 15px",input:{marginBottom:0,marginLeft:10,marginRight:0,marginTop:-1}})),Zn=c.button(({theme:e})=>({textDecoration:"none",padding:"10px 15px",cursor:"pointer",fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,lineHeight:1,height:40,border:"none",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",background:"transparent","&:focus":{outline:"0 none",borderBottom:`3px solid ${e.color.secondary}`}}),({active:e,theme:n})=>e?{opacity:1,borderBottom:`3px solid ${n.color.secondary}`}:{}),Jn=c.div({}),er=c.div(({theme:e})=>({boxShadow:`${e.appBorderColor} 0 -1px 0 0 inset`,background:e.background.app,display:"flex",flexWrap:"wrap",justifyContent:"space-between",whiteSpace:"nowrap"}));function tr(e){return e.reduce((n,r)=>n.concat(r.nodes),[])}var nr=({tabs:e})=>{let{ref:n,width:r}=tt({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),{tab:t,setTab:a}=ce(),m=O(i=>{a(parseInt(i.currentTarget.getAttribute("data-index")||"",10))},[a]),s=`${e[t].type}-global-checkbox`;return h(qn,{ref:n},h(er,null,h(Jn,null,e.map((i,u)=>h(Zn,{key:u,"data-index":u,active:t===u,onClick:m},i.label))),e[t].items.length>0?h(Xn,null,h(Qn,{htmlFor:s},"Highlight results"),h(se,{toggleId:s,elementsToHighlight:tr(e[t].items)})):null),e[t].panel)},rr=c.div(({theme:{color:e,typography:n,background:r}})=>({textAlign:"start",padding:"11px 15px",fontSize:`${n.size.s2}px`,fontWeight:n.weight.regular,lineHeight:"1rem",background:r.app,borderBottom:`1px solid ${e.border}`,color:e.defaultText,backgroundClip:"padding-box",position:"relative",code:{fontSize:`${n.size.s1-1}px`,color:"inherit",margin:"0 0.2em",padding:"0 0.2em",background:"rgba(255, 255, 255, 0.8)",borderRadius:"2px",boxShadow:"0 0 0 1px rgba(0, 0, 0, 0.1)"}})),or=({discrepancy:e})=>{let n=te().getDocsUrl({subpath:mt,versioned:!0,renderer:!0}),r=B(()=>{switch(e){case"browserPassedCliFailed":return"Accessibility checks passed in this browser but failed in the CLI.";case"cliPassedBrowserFailed":return"Accessibility checks passed in the CLI but failed in this browser.";case"cliFailedButModeManual":return"Accessibility checks failed in the CLI. Run the tests manually to see the results.";default:return null}},[e]);return r?o.createElement(rr,null,r," ",o.createElement(Se,{href:n,target:"_blank",withArrow:!0},"Learn what could cause this")):null},ar=c(we)({marginRight:4}),ir=c(ar)(({theme:e})=>({animation:`${e.animation.rotate360} 1s linear infinite;`})),lr=c.span(({theme:e})=>({color:e.color.positiveText})),cr=c.span(({theme:e})=>({color:e.color.negativeText})),sr=c.span(({theme:e})=>({color:e.color.warningText})),ur=c.span({display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}),dr=()=>{let{results:e,status:n,handleManual:r,error:t,discrepancy:a}=ce(),m=B(()=>[{title:"Run test",onClick:r}],[r]),s=B(()=>[{title:n==="ready"?"Rerun tests":o.createElement(o.Fragment,null,o.createElement(Ne,{style:{marginRight:"0.4em"}}),"Tests completed"),onClick:r}],[n,r]),i=B(()=>{let{passes:u,incomplete:p,violations:d}=e;return[{label:o.createElement(cr,null,d.length," Violations"),panel:o.createElement(oe,{items:d,type:0,empty:"No accessibility violations found."}),items:d,type:0},{label:o.createElement(lr,null,u.length," Passes"),panel:o.createElement(oe,{items:u,type:1,empty:"No accessibility checks passed."}),items:u,type:1},{label:o.createElement(sr,null,p.length," Incomplete"),panel:o.createElement(oe,{items:p,type:2,empty:"No accessibility checks incomplete."}),items:p,type:2}]},[e]);return o.createElement(o.Fragment,null,a&&o.createElement(or,{discrepancy:a}),n==="ready"||n==="ran"?o.createElement(o.Fragment,null,o.createElement(_e,{vertical:!0,horizontal:!0},o.createElement(nr,{key:"tabs",tabs:i})),o.createElement(X,{key:"actionbar",actionItems:s})):o.createElement(ur,{style:{marginTop:a?"1em":0}},n==="initial"&&"Initializing...",n==="manual"&&o.createElement(o.Fragment,null,o.createElement(o.Fragment,null,"Manually run the accessibility scan."),o.createElement(X,{key:"actionbar",actionItems:m})),n==="running"&&o.createElement(o.Fragment,null,o.createElement(ir,{size:12})," Please wait while the accessibility scan is running ..."),n==="error"&&o.createElement(o.Fragment,null,"The accessibility scan encountered an error.",o.createElement("br",null),typeof t=="string"?t:t instanceof Error?t.toString():JSON.stringify(t))))},mr=e=>h("svg",{...e},h("defs",null,h("filter",{id:"protanopia"},h("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"})),h("filter",{id:"protanomaly"},h("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"})),h("filter",{id:"deuteranopia"},h("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"})),h("filter",{id:"deuteranomaly"},h("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"})),h("filter",{id:"tritanopia"},h("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"})),h("filter",{id:"tritanomaly"},h("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"})),h("filter",{id:"achromatopsia"},h("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"})))),pr="storybook-preview-iframe",gr=[{name:"blurred vision",percentage:22.9},{name:"deuteranomaly",percentage:2.7},{name:"deuteranopia",percentage:.56},{name:"protanomaly",percentage:.66},{name:"protanopia",percentage:.59},{name:"tritanomaly",percentage:.01},{name:"tritanopia",percentage:.016},{name:"achromatopsia",percentage:1e-4},{name:"grayscale"}],nt=e=>e?e==="blurred vision"?"blur(2px)":e==="grayscale"?"grayscale(100%)":`url('#${e}')`:"none",hr=c.div(()=>({"&, & svg":{position:"absolute",width:0,height:0}})),Ir=c.span({background:"linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)",borderRadius:"1rem",display:"block",height:"1rem",width:"1rem"},({filter:e})=>({filter:nt(e)}),({theme:e})=>({boxShadow:`${e.appBorderColor} 0 0 0 1px inset`})),Er=c.span({display:"flex",flexDirection:"column"}),fr=c.span({textTransform:"capitalize"}),Sr=c.span(({theme:e})=>({fontSize:11,color:e.textMutedColor})),_r=(e,n)=>[...e!==null?[{id:"reset",title:"Reset color filter",onClick:()=>{n(null)},right:void 0,active:!1}]:[],...gr.map(r=>{let t=r.percentage!==void 0?`${r.percentage}% of users`:void 0;return{id:r.name,title:o.createElement(Er,null,o.createElement(fr,null,r.name),t&&o.createElement(Sr,null,t)),onClick:()=>{n(r)},right:o.createElement(Ir,{filter:r.name}),active:e===r}})],Rr=()=>{let[e,n]=M(null);return o.createElement(o.Fragment,null,e&&o.createElement(Ae,{styles:{[`#${pr}`]:{filter:nt(e.name)}}}),o.createElement(be,{placement:"top",tooltip:({onHide:r})=>{let t=_r(e,a=>{n(a),r()});return o.createElement(Te,{links:t})},closeOnOutsideClick:!0,onDoubleClick:()=>n(null)},o.createElement(fe,{key:"filter",active:!!e,title:"Vision simulator"},o.createElement(xe,null))),o.createElement(hr,null,o.createElement(mr,null)))},Tr=()=>{let[e]=ee(L),n=e?.violations?.length||0,r=e?.incomplete?.length||0,t=n+r;return o.createElement("div",null,o.createElement(Re,{col:1},o.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Accessibility"),t===0?"":o.createElement(Z,{status:"neutral"},t)))};z.register(L,e=>{z.add(Me,{title:"",type:J.TOOL,match:({viewMode:n,tabId:r})=>n==="story"&&!r,render:()=>o.createElement(Rr,null)}),z.add(Me,{title:Tr,type:J.PANEL,render:({active:n=!0})=>o.createElement(ht,null,n?o.createElement(dr,null):null),paramKey:at})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
