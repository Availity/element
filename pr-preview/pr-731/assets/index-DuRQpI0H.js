var i=n=>{if(typeof n!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof n}\``);return/^[a-z][a-z\d+.-]*:/.test(n)},c=i;function O(n){return!n||n==="#"||n==="?"||n==="/"}function h(n){const s=[];let f=0;for(;f<n.length;)switch(n[f]){case"/":{if(n[f+1]===".")if(n[f+2]==="."){if(!O(n[f+3])){s.at(-1).push(n.substr(f)),f=n.length;break}s.pop(),n[f+3]||s.push([]),f+=3}else{if(!O(n[f+2])){s.at(-1).push(n.substr(f)),f=n.length;break}n[f+2]||s.push([]),f+=2}else s.push([]),f+=1;break}case"#":case"?":{s.length===0&&s.push([]),s.at(-1).push(n.substr(f)),f=n.length;break}default:{s.length===0&&s.push([]),s.at(-1).push(n[f]),f+=1;break}}return`/${s.map(u=>u.join("")).join("/")}`}function r(n,s){let f=s+1;s>=0?n[s+1]==="/"&&n[s+2]==="/"&&(f=s+3):n[0]==="/"&&n[1]==="/"&&(f=2);const u=n.indexOf("/",f);if(u<0)return n;const t=n.substr(0,u),e=n.substr(u);return t+h(e)}function l(n,s=""){const f=s.indexOf("#");if(f>0&&(s=s.substr(0,f)),n.length===0)return s;if(n.indexOf("?")===0){const x=s.indexOf("?");return x>0&&(s=s.substr(0,x)),s+n}if(n.indexOf("#")===0)return s+n;if(s.length===0)return r(n,n.indexOf(":"));const u=n.indexOf(":");if(u>=0)return r(n,u);const t=s.indexOf(":");if(t<0)throw new Error(`Found invalid baseIRI '${s}' for value '${n}'`);const e=s.substr(0,t+1);if(n.indexOf("//")===0)return e+r(n,u);let o;if(s.indexOf("//",t)===t+1){if(o=s.indexOf("/",t+3),o<0)return s.length>t+3?`${s}/${r(n,u)}`:e+r(n,u)}else return o=s.indexOf("/",t+1),s.length>t+1?`${s}/${r(n,u)}`:e+r(n,u);if(n.indexOf("/")===0)return s.substr(0,o)+h(n);let d=s.substr(o);const g=d.lastIndexOf("/");return g>=0&&g<d.length-1&&(d=d.substr(0,g+1),n[0]==="."&&n[1]!=="."&&n[1]!=="/"&&n[2]&&(n=n.substr(1))),n=d+n,n=h(n),s.substr(0,o)+n}var m=({relative:n="",base:s})=>{if(c(n))return n;if(!s){const{origin:f}=window.location;s=`${f}/`}return l(n,s)},w=m,$=w;export{$ as a,c as i};
