(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{80850:function(e,n,t){"use strict";t.r(n),t.d(n,{UserDropdown:function(){return j}});var r=t(85893),o=t(66516),a=t(13013),i=t(71577),l=t(4480),c=t(67294),s=t(46977),u=t(5152),d=t.n(u),f=t(77466),p=t(79252),h=t.n(p);let y=d()(()=>Promise.all([t.e(2074),t.e(8244)]).then(t.t.bind(t,18244,23)),{loadableGenerated:{webpack:()=>[18244]},ssr:!1}),v=d()(()=>Promise.all([t.e(2074),t.e(775)]).then(t.t.bind(t,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),m=d()(()=>Promise.all([t.e(2074),t.e(6275)]).then(t.t.bind(t,6275,23)),{loadableGenerated:{webpack:()=>[6275]},ssr:!1}),b=d()(()=>Promise.all([t.e(2074),t.e(5672)]).then(t.t.bind(t,65672,23)),{loadableGenerated:{webpack:()=>[65672]},ssr:!1}),k=d()(()=>Promise.all([t.e(2074),t.e(5412)]).then(t.t.bind(t,95412,23)),{loadableGenerated:{webpack:()=>[95412]},ssr:!1}),w=d()(()=>Promise.all([t.e(164),t.e(5402),t.e(4761)]).then(t.bind(t,14761)).then(e=>e.Modal),{loadableGenerated:{webpack:()=>[14761]},ssr:!1}),C=d()(()=>Promise.all([t.e(173),t.e(164),t.e(4041),t.e(9292),t.e(6331)]).then(t.bind(t,59096)).then(e=>e.NameChangeModal),{loadableGenerated:{webpack:()=>[59096]},ssr:!1}),g=d()(()=>Promise.all([t.e(173),t.e(164),t.e(2231),t.e(5818),t.e(6306),t.e(2033)]).then(t.bind(t,50261)).then(e=>e.AuthModal),{loadableGenerated:{webpack:()=>[50261]},ssr:!1}),j=e=>{let{username:n}=e,[t,u]=(0,c.useState)(!1),[d,p]=(0,c.useState)(!1),[j,x]=(0,l.FV)(f.ZA),E=(0,l.sJ)(f.Q),L=()=>{x(!j)},A=()=>{u(!0)};(0,s.y1)("c",L,{enableOnContentEditable:!1},[j]);let _=(0,l.sJ)(f.db);if(!_)return null;let{displayName:P}=_,S=(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(o.Z.Item,{icon:(0,r.jsx)(v,{}),onClick:()=>A(),children:"Change name"},"0"),(0,r.jsx)(o.Z.Item,{icon:(0,r.jsx)(m,{}),onClick:()=>p(!0),children:"Authenticate"},"1"),E.chatAvailable&&(0,r.jsx)(o.Z.Item,{icon:(0,r.jsx)(b,{}),onClick:()=>L(),"aria-expanded":j,children:j?"Hide Chat":"Show Chat"},"3")]});return(0,r.jsxs)("div",{id:"user-menu",className:"".concat(h().root),children:[(0,r.jsx)(a.Z,{overlay:S,trigger:["click"],children:(0,r.jsxs)(i.Z,{type:"primary",icon:(0,r.jsx)(k,{className:h().userIcon}),children:[(0,r.jsx)("span",{className:h().username,children:n||P}),(0,r.jsx)(y,{})]})}),(0,r.jsx)(w,{title:"Change Chat Display Name",open:t,handleCancel:()=>u(!1),children:(0,r.jsx)(C,{})}),(0,r.jsx)(w,{title:"Authenticate",open:d,handleCancel:()=>p(!1),children:(0,r.jsx)(g,{})})]})}},79252:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2",userIcon:"UserDropdown_userIcon__A5XgE",username:"UserDropdown_username__nVyPA"}},46977:function(e,n,t){"use strict";t.d(n,{y1:function(){return k}});var r=t(67294);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t(85893);var a=["shift","alt","meta","mod","ctrl"],i={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function l(e){return(i[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function c(e,n){return(void 0===n&&(n=","),"string"==typeof e)?e.split(n):e}function s(e,n){void 0===n&&(n="+");var t=e.toLocaleLowerCase().split(n).map(function(e){return l(e)});return o({},{alt:t.includes("alt"),ctrl:t.includes("ctrl")||t.includes("control"),shift:t.includes("shift"),meta:t.includes("meta"),mod:t.includes("mod")},{keys:t.filter(function(e){return!a.includes(e)})})}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&d([l(e.key),l(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&f([l(e.key),l(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){u.clear()});var u=new Set;function d(e){var n=Array.isArray(e)?e:[e];u.has("meta")&&u.forEach(function(e){return!a.includes(e)&&u.delete(e.toLowerCase())}),n.forEach(function(e){return u.add(e.toLowerCase())})}function f(e){var n=Array.isArray(e)?e:[e];"meta"===e?u.clear():n.forEach(function(e){return u.delete(e.toLowerCase())})}function p(e,n){var t=e.target;void 0===n&&(n=!1);var r=t&&t.tagName;return n instanceof Array?Boolean(r&&n&&n.some(function(e){return e.toLowerCase()===r.toLowerCase()})):Boolean(r&&n&&!0===n)}var h=function(e,n,t){void 0===t&&(t=!1);var r,o=n.alt,a=n.meta,i=n.mod,c=n.shift,s=n.ctrl,d=n.keys,f=e.key,p=e.code,h=e.ctrlKey,y=e.metaKey,v=e.shiftKey,m=e.altKey,b=l(p),k=f.toLowerCase();if(!t){if(!m===o&&"alt"!==k||!v===c&&"shift"!==k)return!1;if(i){if(!y&&!h)return!1}else if(!y===a&&"meta"!==k&&"os"!==k||!h===s&&"ctrl"!==k)return!1}return!!(d&&1===d.length&&(d.includes(k)||d.includes(b)))||(d?(void 0===r&&(r=","),(Array.isArray(d)?d:d.split(r)).every(function(e){return u.has(e.trim().toLowerCase())})):!d)},y=(0,r.createContext)(void 0),v=(0,r.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),m=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},b="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function k(e,n,t,o){var a,i=(0,r.useRef)(null),u=(0,r.useRef)(!1),k=t instanceof Array?o instanceof Array?void 0:o:t,w=t instanceof Array?t:o instanceof Array?o:void 0,C=(0,r.useCallback)(n,null!=w?w:[]),g=(0,r.useRef)(C);w?g.current=C:g.current=n;var j=(!function e(n,t){return n&&t&&"object"==typeof n&&"object"==typeof t?Object.keys(n).length===Object.keys(t).length&&Object.keys(n).reduce(function(r,o){return r&&e(n[o],t[o])},!0):n===t}((a=(0,r.useRef)(void 0)).current,k)&&(a.current=k),a.current),x=(0,r.useContext)(v).enabledScopes,E=(0,r.useContext)(y);return b(function(){if((null==j?void 0:j.enabled)!==!1&&(n=x,t=null==j?void 0:j.scopes,0===n.length&&t?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!!(!t||n.some(function(e){return t.includes(e)})||n.includes("*")))){var n,t,r=function(n,t){var r;if(void 0===t&&(t=!1),!p(n,["input","textarea","select"])||p(n,null==j?void 0:j.enableOnFormTags)){if(null!==i.current&&document.activeElement!==i.current&&!i.current.contains(document.activeElement)){m(n);return}(null==(r=n.target)||!r.isContentEditable||null!=j&&j.enableOnContentEditable)&&c(e,null==j?void 0:j.splitKey).forEach(function(e){var r,o,a,i=s(e,null==j?void 0:j.combinationKey);if(h(n,i,null==j?void 0:j.ignoreModifiers)||null!=(a=i.keys)&&a.includes("*")){if(t&&u.current)return;if(("function"==typeof(r=null==j?void 0:j.preventDefault)&&r(n,i)||!0===r)&&n.preventDefault(),"function"==typeof(o=null==j?void 0:j.enabled)?!o(n,i):!0!==o&&void 0!==o){m(n);return}g.current(n,i),t||(u.current=!0)}})}},o=function(e){void 0!==e.key&&(d(l(e.code)),((null==j?void 0:j.keydown)===void 0&&(null==j?void 0:j.keyup)!==!0||null!=j&&j.keydown)&&r(e))},a=function(e){void 0!==e.key&&(f(l(e.code)),u.current=!1,null!=j&&j.keyup&&r(e,!0))},y=i.current||(null==k?void 0:k.document)||document;return y.addEventListener("keyup",a),y.addEventListener("keydown",o),E&&c(e,null==j?void 0:j.splitKey).forEach(function(e){return E.addHotkey(s(e,null==j?void 0:j.combinationKey))}),function(){y.removeEventListener("keyup",a),y.removeEventListener("keydown",o),E&&c(e,null==j?void 0:j.splitKey).forEach(function(e){return E.removeHotkey(s(e,null==j?void 0:j.combinationKey))})}}},[e,j,x]),i}}}]);