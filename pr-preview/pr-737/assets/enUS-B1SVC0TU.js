import{_ as k}from"./identifier-CudAVvBZ.js";import{_ as M}from"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import{r as n}from"./index-BgYLq7fD.js";import{j as y}from"./jsx-runtime-BTJTZTIL.js";import{u as D}from"./useThemeProps-BGrMtKaW.js";const w=["localeText"],b=n.createContext(null),g=function(t){const{localeText:o}=t,r=M(t,w),{utils:l,localeText:a}=n.useContext(b)??{utils:void 0,localeText:void 0},s=D({props:r,name:"MuiLocalizationProvider"}),{children:d,dateAdapter:c,dateFormats:m,dateLibInstance:u,adapterLocale:p,localeText:T}=s,x=n.useMemo(()=>k({},T,a,o),[T,a,o]),i=n.useMemo(()=>{if(!c)return l||null;const f=new c({locale:p,formats:m,instance:u});if(!f.isMUIAdapter)throw new Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`","For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`","More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));return f},[c,p,m,u,l]),h=n.useMemo(()=>i?{minDate:i.date("1900-01-01T00:00:00.000"),maxDate:i.date("2099-12-31T00:00:00.000")}:null,[i]),L=n.useMemo(()=>({utils:i,defaultDates:h,localeText:x}),[h,i,x]);return y.jsx(b.Provider,{value:L,children:d})},C=e=>({components:{MuiLocalizationProvider:{defaultProps:{localeText:k({},e)}}}}),N=e=>{const{utils:t,formatKey:o,contextTranslation:r,propsTranslation:l}=e;return a=>{const s=a!==null&&t.isValid(a)?t.format(a,o):null;return(l??r)(a,t,s)}},P={previousMonth:"Previous month",nextMonth:"Next month",openPreviousView:"Open previous view",openNextView:"Open next view",calendarViewSwitchingButtonAriaLabel:e=>e==="year"?"year view is open, switch to calendar view":"calendar view is open, switch to year view",start:"Start",end:"End",startDate:"Start date",startTime:"Start time",endDate:"End date",endTime:"End time",cancelButtonLabel:"Cancel",clearButtonLabel:"Clear",okButtonLabel:"OK",todayButtonLabel:"Today",datePickerToolbarTitle:"Select date",dateTimePickerToolbarTitle:"Select date & time",timePickerToolbarTitle:"Select time",dateRangePickerToolbarTitle:"Select date range",clockLabelText:(e,t,o,r)=>`Select ${e}. ${!r&&(t===null||!o.isValid(t))?"No time selected":`Selected time is ${r??o.format(t,"fullTime")}`}`,hoursClockNumberText:e=>`${e} hours`,minutesClockNumberText:e=>`${e} minutes`,secondsClockNumberText:e=>`${e} seconds`,selectViewText:e=>`Select ${e}`,calendarWeekNumberHeaderLabel:"Week number",calendarWeekNumberHeaderText:"#",calendarWeekNumberAriaLabelText:e=>`Week ${e}`,calendarWeekNumberText:e=>`${e}`,openDatePickerDialogue:(e,t,o)=>o||e!==null&&t.isValid(e)?`Choose date, selected date is ${o??t.format(e,"fullDate")}`:"Choose date",openTimePickerDialogue:(e,t,o)=>o||e!==null&&t.isValid(e)?`Choose time, selected time is ${o??t.format(e,"fullTime")}`:"Choose time",fieldClearLabel:"Clear",timeTableLabel:"pick time",dateTableLabel:"pick date",fieldYearPlaceholder:e=>"Y".repeat(e.digitAmount),fieldMonthPlaceholder:e=>e.contentType==="letter"?"MMMM":"MM",fieldDayPlaceholder:()=>"DD",fieldWeekDayPlaceholder:e=>e.contentType==="letter"?"EEEE":"EE",fieldHoursPlaceholder:()=>"hh",fieldMinutesPlaceholder:()=>"mm",fieldSecondsPlaceholder:()=>"ss",fieldMeridiemPlaceholder:()=>"aa",year:"Year",month:"Month",day:"Day",weekDay:"Week day",hours:"Hours",minutes:"Minutes",seconds:"Seconds",meridiem:"Meridiem",empty:"Empty"},V=P,j=C(P);export{V as D,g as L,b as M,N as b,j as e};
