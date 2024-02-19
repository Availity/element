var l=Object.defineProperty,w=(s,t,i)=>t in s?l(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,c=(s,t,i)=>(w(s,typeof t!="symbol"?t+"":t,i),i),h=(s,t,i)=>{if(!t.has(s))throw TypeError("Cannot "+i)},d=(s,t,i)=>(h(s,t,"read from private field"),i?i.call(s):t.get(s)),b=(s,t,i)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,i)},f=(s,t,i,r)=>(h(s,t,"write to private field"),r?r.call(s,i):t.set(s,i),i),a,p=class{constructor(){c(this,"subscribers",{}),c(this,"getEventData",s=>{const t=s.source===window;if(!this.isEnabled||!s||!s.data||!s.origin||!s.source||!this.isDomain(s.origin))return;let{data:i}=s;if(typeof i=="string")try{i=JSON.parse(i)}catch{}typeof i=="string"?(s=i,i=void 0):s=i&&i.event||this.DEFAULT_EVENT;const r={isSameWindow:t};this.onMessage(s,i,r)}),b(this,a,0),this.isEnabled=!0,this.DEFAULT_EVENT="avMessage",this.DOMAIN=/https?:\/\/([\w-]+\.)?availity\.(com|net)/,window.addEventListener("message",this.getEventData)}enabled(s){return arguments.length>0&&(this.isEnabled=!!s),this.isEnabled}subscribe(s,t,i){var r;this.subscribers[s]||(this.subscribers[s]=[]),f(this,a,d(this,a)+1);const e=d(this,a),n=(r=i==null?void 0:i.ignoreSameWindow)!=null?r:!0,o={id:e,callback:t,options:{ignoreSameWindow:n}};return this.subscribers[s].push(o),()=>{this.subscribers[s]=this.subscribers[s].filter(u=>u.id!==e)}}unsubscribe(s){delete this.subscribers[s]}unsubscribeAll(){this.subscribers={}}onMessage(s,t,i){const{isSameWindow:r}=i;if(this.subscribers[s])for(const e of this.subscribers[s]){const{ignoreSameWindow:n}=e.options;r&&n||e.callback(t)}}isDomain(s){return!this.DOMAIN.test(this.domain())||this.DOMAIN.test(s)}domain(){return window.location.origin?window.location.origin:window.location.hostname?`${window.location.protocol}//${window.location.hostname}${window.location.port?`:${window.location.port}`:""}`:"*"}send(s,t=window.top){if(!(!this.isEnabled||!s))try{const i=typeof s=="string"?s:JSON.stringify(s);t.postMessage(i,this.domain())}catch(i){console.warn("AvMessage.send()",i)}}};a=new WeakMap;var g=p,_=new g;export{_ as s};
//# sourceMappingURL=index-9681c8ff.js.map