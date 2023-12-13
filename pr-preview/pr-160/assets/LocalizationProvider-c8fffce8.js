import{r as n}from"./index-570b25c1.js";import{a as b}from"./jsx-runtime-a3bcee63.js";import{u as f}from"./useThemeProps-98dc6282.js";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},r.apply(this,arguments)}const v=e=>({components:{MuiLocalizationProvider:{defaultProps:{localeText:r({},e)}}}}),p={previousMonth:"Previous month",nextMonth:"Next month",openPreviousView:"open previous view",openNextView:"open next view",calendarViewSwitchingButtonAriaLabel:e=>e==="year"?"year view is open, switch to calendar view":"calendar view is open, switch to year view",inputModeToggleButtonAriaLabel:(e,t)=>e?`text input view is open, go to ${t} view`:`${t} view is open, go to text input view`,start:"Start",end:"End",cancelButtonLabel:"Cancel",clearButtonLabel:"Clear",okButtonLabel:"OK",todayButtonLabel:"Today",datePickerDefaultToolbarTitle:"Select date",dateTimePickerDefaultToolbarTitle:"Select date & time",timePickerDefaultToolbarTitle:"Select time",dateRangePickerDefaultToolbarTitle:"Select date range",clockLabelText:(e,t,o)=>`Select ${e}. ${t===null?"No time selected":`Selected time is ${o.format(t,"fullTime")}`}`,hoursClockNumberText:e=>`${e} hours`,minutesClockNumberText:e=>`${e} minutes`,secondsClockNumberText:e=>`${e} seconds`,openDatePickerDialogue:(e,t)=>e&&t.isValid(t.date(e))?`Choose date, selected date is ${t.format(t.date(e),"fullDate")}`:"Choose date",openTimePickerDialogue:(e,t)=>e&&t.isValid(t.date(e))?`Choose time, selected time is ${t.format(t.date(e),"fullTime")}`:"Choose time",timeTableLabel:"pick time",dateTableLabel:"pick date"},x=p;v(p);const h=n.createContext(null);function k(e){const t=f({props:e,name:"MuiLocalizationProvider"}),{children:o,dateAdapter:a,dateFormats:s,dateLibInstance:d,locale:u,adapterLocale:l,localeText:c}=t,i=n.useMemo(()=>new a({locale:l??u,formats:s,instance:d}),[a,u,l,s,d]),m=n.useMemo(()=>({minDate:i.date("1900-01-01T00:00:00.000"),maxDate:i.date("2099-12-31T00:00:00.000")}),[i]),T=n.useMemo(()=>({utils:i,defaultDates:m,localeText:r({},x,c??{})}),[m,i,c]);return b(h.Provider,{value:T,children:o})}export{k as L,h as M,r as _};
//# sourceMappingURL=LocalizationProvider-c8fffce8.js.map
