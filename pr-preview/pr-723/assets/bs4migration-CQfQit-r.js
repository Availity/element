import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as l}from"./index-CfSBfIZi.js";import{M as n,b as s}from"./index-scBPEqbN.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-biTOQym9.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";function i(r){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"BS4 Migration/Icon"}),`
`,e.jsx(d.h1,{id:"icon-migration",children:"Icon Migration"}),`
`,e.jsx(d.p,{children:"This migration guide is just an overview. For more in depth component information, visit:"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:e.jsx(d.a,{href:"https://design.availity.com/2e36e50c7/p/77f9e0-components/b/7234bb",rel:"nofollow",children:"Availity Design Documentation"})}),`
`,e.jsx(d.li,{children:e.jsx(d.a,{href:"https://mui.com/material-ui/icons/#svgicon",rel:"nofollow",children:"MUI Documentation"})}),`
`]}),`
`,e.jsx(d.h2,{id:"key-differences-not-exhaustive-list",children:"Key Differences (not exhaustive list)"}),`
`,e.jsx(d.h3,{id:"props",children:"Props"}),`
`,e.jsx(d.h4,{id:"️-changed",children:"⚠️ Changed"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:"Icons are now aria-hidden by default."}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"arialabel"})," -> ",e.jsx(d.code,{children:"titleAccess"}),` SVGs use titles instead of aria-labels, with no default title provided.
If `,e.jsx(d.code,{children:"Icon"})," is no longer aria-hidden a title must be assigned."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"size"})," -> ",e.jsx(d.code,{children:"fontSize"})," The old sizes start at undefined and go up from ",e.jsx(d.code,{children:"lg"})," to ",e.jsx(d.code,{children:"5x"}),`,
while the new `,e.jsx(d.code,{children:"fontSize"})," goes from ",e.jsx(d.code,{children:"xxsmall"})," to ",e.jsx(d.code,{children:"xlarge"}),". The equivalent sizes in ",e.jsx(d.code,{children:"element"})," are two sizes smaller than ",e.jsx(d.code,{children:"availity-react"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"undefined"})," -> ",e.jsx(d.code,{children:"xxsmall"})]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"lg"})," -> ",e.jsx(d.code,{children:"small"})]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"3x"})," -> ",e.jsx(d.code,{children:"xlarge"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(d.h4,{id:"-removed",children:"🚫 Removed"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.code,{children:"name"})," previously determined the icon used, now every icon is a separate component. ",e.jsx(d.code,{children:'<Icon name="home"/>'})," -> ",e.jsx(d.code,{children:"<HomeIcon/>"})]}),`
`]}),`
`,e.jsx(d.h2,{id:"code-examples",children:"Code Examples"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"reactstrap"}),"/",e.jsx(d.code,{children:"availity-react"})," Example:"]}),`
`,e.jsx(s,{code:`
import { Icon } from '@availity/icon';

const AvailityReactIcon = () => (
  <Icon
    name="home"
    color="primary"
    size="lg"
  />
);
`}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"@availity/element"})," Example:"]}),`
`,e.jsx(s,{code:`
import { HomeIcon } from '@availity/element';

const ElementIcon = () => (
  <HomeIcon
    color="primary"
    fontSize="small"
    aria-hidden={false}
    titleAccess="Home"
  />
);
`}),`
`,e.jsx(d.h2,{id:"icon-equivalents",children:"Icon Equivalents"}),`
`,e.jsx(d.p,{children:"There is a consolidation effort for icons so not all uikit icons have been migrated over. Any remaining icons can be added on an individual basis as the need arises."}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"uikit/availity-react"}),e.jsx(d.th,{children:"element"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"angle-double-down"}),e.jsx(d.td,{children:"NavigateBottom"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"angle-double-left"}),e.jsx(d.td,{children:"NavigateFirst"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"angle-double-right"}),e.jsx(d.td,{children:"NavigateLast"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"angle-double-up"}),e.jsx(d.td,{children:"NavigateTop"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"angle-down"}),e.jsx(d.td,{children:"Expand"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"angle-left"}),e.jsx(d.td,{children:"NavigatePrevious"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"angle-right"}),e.jsx(d.td,{children:"NavigateNext"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"angle-up"}),e.jsx(d.td,{children:"Collapse"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"arrows-cw"}),e.jsx(d.td,{children:"ArrowsRotate"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"asterisk"}),e.jsx(d.td,{children:"Asterisk"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"attach"}),e.jsx(d.td,{children:"Attachment"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"attention"}),e.jsx(d.td,{children:"WarningTriangle"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"attention-circle"}),e.jsx(d.td,{children:"WarningCircle"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"basket"}),e.jsx(d.td,{children:"CartShopping"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"beaker"}),e.jsx(d.td,{children:"Flask"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"bell"}),e.jsx(d.td,{children:"BellEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"bell-alt"}),e.jsx(d.td,{children:"Bell"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"bell-off"}),e.jsx(d.td,{children:"BellSlash"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"bell-off-empty"}),e.jsx(d.td,{children:"BellSlashEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"box"}),e.jsx(d.td,{children:"Box"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"calendar"}),e.jsx(d.td,{children:"CalendarDays"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cancel"}),e.jsx(d.td,{children:"Close"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cancel-circle"}),e.jsx(d.td,{children:"CancelCircle"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cc-amex"}),e.jsx(d.td,{children:"CreditCardAmex"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cc-discover"}),e.jsx(d.td,{children:"CreditCardDiscover"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cc-mastercard"}),e.jsx(d.td,{children:"CreditCardMastercard"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cc-paypal"}),e.jsx(d.td,{children:"CreditCardPaypal"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cc-stripe"}),e.jsx(d.td,{children:"CreditCardStripe"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cc-visa"}),e.jsx(d.td,{children:"CreditCardVisa"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"chart-area"}),e.jsx(d.td,{children:"ChartArea"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"chart-bar"}),e.jsx(d.td,{children:"ChartColumn"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"chart-line"}),e.jsx(d.td,{children:"ChartLine"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"chart-pie"}),e.jsx(d.td,{children:"ChartPie"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"chat"}),e.jsx(d.td,{children:"Comments"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"check"}),e.jsx(d.td,{children:"SquareCheck"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"check-empty"}),e.jsx(d.td,{children:"SquareEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"circle-thin"}),e.jsx(d.td,{children:"CircleEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"clipboard"}),e.jsx(d.td,{children:"Clipboard"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"clock"}),e.jsx(d.td,{children:"Clock"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"cog"}),e.jsx(d.td,{children:"Settings"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"comment"}),e.jsx(d.td,{children:"Message"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"comment-empty"}),e.jsx(d.td,{children:"MessageEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"copyright"}),e.jsx(d.td,{children:"Copyright"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"credentialing"}),e.jsx(d.td,{children:"FileCircleCheck"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"credit-card"}),e.jsx(d.td,{children:"CreditCard"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"desktop"}),e.jsx(d.td,{children:"Desktop"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"doc"}),e.jsx(d.td,{children:"FileEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"doc-alt"}),e.jsx(d.td,{children:"File"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"doc-text-inv"}),e.jsx(d.td,{children:"FileLines"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"dot-circled"}),e.jsx(d.td,{children:"CircleDot"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"down-dir"}),e.jsx(d.td,{children:"TriangleExpand"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"down-small"}),e.jsx(d.td,{children:"ArrowDown"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"download-cloud"}),e.jsx(d.td,{children:"Download"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"edit"}),e.jsx(d.td,{children:"Edit"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"ellipsis"}),e.jsx(d.td,{children:"MoreHorizontal"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"ellipsis-vert"}),e.jsx(d.td,{children:"MoreVertical"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"export"}),e.jsx(d.td,{children:"Export"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"eye"}),e.jsx(d.td,{children:"Eye"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"eye-off"}),e.jsx(d.td,{children:"EyeSlash"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"fax"}),e.jsx(d.td,{children:"Fax"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-archive"}),e.jsx(d.td,{children:"FileArchive"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-audio"}),e.jsx(d.td,{children:"FileAudio"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-code"}),e.jsx(d.td,{children:"FileCode"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-excel"}),e.jsx(d.td,{children:"FileExcel"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-image"}),e.jsx(d.td,{children:"FileImage"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-pdf"}),e.jsx(d.td,{children:"FilePdf"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-powerpoint"}),e.jsx(d.td,{children:"FilePowerpoint"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-video"}),e.jsx(d.td,{children:"FileVideo"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"file-word"}),e.jsx(d.td,{children:"FileWord"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"filter"}),e.jsx(d.td,{children:"Filter"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"folder-empty"}),e.jsx(d.td,{children:"FoldeEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"folder-open-empty"}),e.jsx(d.td,{children:"FolderOpenEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"frown"}),e.jsx(d.td,{children:"FaceFrown"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"h-sigh"}),e.jsx(d.td,{children:"SquareH"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"hand-holding-gear"}),e.jsx(d.td,{children:"Gears"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"heart"}),e.jsx(d.td,{children:"Heart"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"heart-empty"}),e.jsx(d.td,{children:"HeartEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"help-circle"}),e.jsx(d.td,{children:"HelpCircle"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"history"}),e.jsx(d.td,{children:"History"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"home"}),e.jsx(d.td,{children:"Home"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"inbox"}),e.jsx(d.td,{children:"Inbox"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"info-circle"}),e.jsx(d.td,{children:"InfoCircle"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"key"}),e.jsx(d.td,{children:"Key"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"left-circled"}),e.jsx(d.td,{children:"ArrowCircleRight"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"left-dir"}),e.jsx(d.td,{children:"TriangleLeft"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"left-small"}),e.jsx(d.td,{children:"ArrowLeft"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"link"}),e.jsx(d.td,{children:"Link"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"link-ext"}),e.jsx(d.td,{children:"OpenInNew"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"location"}),e.jsx(d.td,{children:"Location"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"lock"}),e.jsx(d.td,{children:"Lock"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"mail-alt"}),e.jsx(d.td,{children:"Mail"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"meh"}),e.jsx(d.td,{children:"FaceNeutral"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"menu"}),e.jsx(d.td,{children:"Menu"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"minus"}),e.jsx(d.td,{children:"Minus"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"minus-circle"}),e.jsx(d.td,{children:"MinusCircle"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"money"}),e.jsx(d.td,{children:"Money"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"ok"}),e.jsx(d.td,{children:"Check"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"ok-circle"}),e.jsx(d.td,{children:"SuccessCircle"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"paste"}),e.jsx(d.td,{children:"Paste"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"pause"}),e.jsx(d.td,{children:"Pause"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"pencil"}),e.jsx(d.td,{children:"Pencil"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"phone"}),e.jsx(d.td,{children:"Phone"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"picture"}),e.jsx(d.td,{children:"Picture"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"pin"}),e.jsx(d.td,{children:"Thumbtack"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"play"}),e.jsx(d.td,{children:"Play"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"plus"}),e.jsx(d.td,{children:"Plus"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"plus-circle"}),e.jsx(d.td,{children:"PlusCircle"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"print"}),e.jsx(d.td,{children:"Print"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"right-circled"}),e.jsx(d.td,{children:"ArrowCircleLeft"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"right-dir"}),e.jsx(d.td,{children:"TriangleRight"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"right-small"}),e.jsx(d.td,{children:"ArrowRight"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"search"}),e.jsx(d.td,{children:"Search"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"share"}),e.jsx(d.td,{children:"Share"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"smile"}),e.jsx(d.td,{children:"FaceSmile"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"sort"}),e.jsx(d.td,{children:"Sort"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"sort-alt-down"}),e.jsx(d.td,{children:"SortAltDown"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"sort-alt-up"}),e.jsx(d.td,{children:"SortAltUp"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"sort-down"}),e.jsx(d.td,{children:"SortDown"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"sort-up"}),e.jsx(d.td,{children:"SortUp"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"star"}),e.jsx(d.td,{children:"Star"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"star-empty"}),e.jsx(d.td,{children:"StarEmpty"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"star-half"}),e.jsx(d.td,{children:"StarHalf"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"star-half-alt"}),e.jsx(d.td,{children:"StarHalfStroke"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"tag"}),e.jsx(d.td,{children:"Tag"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"tags"}),e.jsx(d.td,{children:"Tags"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"th"}),e.jsx(d.td,{children:"TableCells"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"th-large"}),e.jsx(d.td,{children:"TableCellsLarge"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"th-list"}),e.jsx(d.td,{children:"List"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"thumbs-down-alt"}),e.jsx(d.td,{children:"ThumbDown"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"thumbs-up-alt"}),e.jsx(d.td,{children:"ThumbUp"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"trash-empty"}),e.jsx(d.td,{children:"Delete"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"unlink"}),e.jsx(d.td,{children:"LinkSlash"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"up-dir"}),e.jsx(d.td,{children:"TriangleCollapse"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"up-small"}),e.jsx(d.td,{children:"ArrowUp"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"upload-cloud"}),e.jsx(d.td,{children:"Upload"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"user"}),e.jsx(d.td,{children:"User"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"user-md"}),e.jsx(d.td,{children:"UserDoctor"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"user-plus"}),e.jsx(d.td,{children:"UserPlus"})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:"users"}),e.jsx(d.td,{children:"Users"})]})]})]})]})}function u(r={}){const{wrapper:d}={...l(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(i,{...r})}):i(r)}export{u as default};
