(this["webpackJsonpgame-glitch-log"]=this["webpackJsonpgame-glitch-log"]||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=a(8),i=a(6),s=a(2),u=Object(n.createContext)(),m=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)({syntax:"#0dafd8",ui:"#ccc",bg:"#f4f4f4",navLink:"#fff"}),i=Object(s.a)(o,1)[0],m=Object(n.useState)({syntax:"#0dafd8",ui:"#222",bg:"#333",navLink:"#333"}),g=Object(s.a)(m,1)[0];return l.a.createElement(u.Provider,{value:{isLightTheme:r,dark:g,light:i,toggleTheme:function(){c(!r)}}},e.children)},g=function(){var e=Object(n.useContext)(u),t=e.isLightTheme,a=e.dark,r=e.light,c=e.toggleTheme,o=t?r:a;return l.a.createElement("button",{className:"toggle-btn btn ttu",style:{background:o.ui,color:o.syntax},onClick:c},l.a.createElement("h6",null,l.a.createElement("em",null,"go ",t?"dark":"light"," theme")))},h=Object(n.createContext)(),d=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1];return l.a.createElement(h.Provider,{value:{isAuthenticated:r,toggleAuth:function(){c(!r)}}},e.children)},b=a(21),f=a(18),E=a.n(f),v=function(e,t){switch(t.type){case"ADD_LOG":return[].concat(Object(b.a)(e),[{game:t.log.game,title:t.log.title,author:t.log.author,details:t.log.details,id:E()()}]);case"REMOVE_LOG":return e.filter((function(e){return e.id!==t.id}));default:return e}},p=Object(n.createContext)(),y=function(e){var t=Object(n.useReducer)(v,[],(function(){var e=localStorage.getItem("logs");return e?JSON.parse(e):[]})),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem("logs",JSON.stringify(r))}),[r]),l.a.createElement(p.Provider,{value:{logs:r,dispatch:c}},e.children)},O=function(){var e=Object(n.useContext)(u),t=e.isLightTheme,a=e.dark,r=e.light,c=Object(n.useContext)(h),i=c.isAuthenticated,s=c.toggleAuth,m=Object(n.useContext)(p).logs,d=t?r:a;return l.a.createElement(n.Fragment,null,l.a.createElement("nav",{style:{background:d.syntax,color:d.navLink}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},l.a.createElement("strong",null,"Home"))),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},l.a.createElement("strong",null,"About"))),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/postForm"},l.a.createElement("strong",null,"Post"))))),l.a.createElement("div",{className:"sub-nav center",style:{background:d.ui,color:d.syntax}},l.a.createElement("a",{href:"#!",onClick:s,className:"auth-div ttc"},i?"signed in":"signed out"),l.a.createElement("div",null,l.a.createElement("h5",null,m.length," ",1===m.length?"glitch":"glitches"," posted")),l.a.createElement(g,null)))},x=function(e){var t=e.log,a=Object(n.useContext)(u),r=a.isLightTheme,c=a.dark,o=a.light,i=Object(n.useContext)(p).dispatch,s=r?o:c;return l.a.createElement("div",{className:"list-item log-details",style:{background:s.ui}},l.a.createElement("h3",null,t.game),l.a.createElement("h4",{className:"list-item"},t.title),l.a.createElement("h5",null,"posted by: ",t.author),l.a.createElement("p",{className:"list-item"},t.details),l.a.createElement("h6",{className:"delete-btn",onClick:function(){return i({type:"REMOVE_LOG",id:t.id})}},"{ Delete Post }"))},j=function(){var e=Object(n.useContext)(u),t=e.isLightTheme,a=e.dark,r=e.light,c=Object(n.useContext)(p).logs,o=t?r:a;return 0===c.length?l.a.createElement("div",{className:"container center empty-log",style:{background:o.bg,color:o.syntax}},l.a.createElement("h3",null,"No entries posted! Please post a glitch.")):l.a.createElement("div",{className:"log-page container center",style:{background:o.bg,color:o.syntax}},l.a.createElement("h1",{className:"banner-title ttc"},"game glitch log"),l.a.createElement("div",{className:"log-list"},c.map((function(e){return l.a.createElement(x,{log:e,key:e.id,id:e.id})}))))},k=function(){var e=Object(n.useContext)(u),t=e.isLightTheme,a=e.dark,r=e.light,c=t?r:a;return l.a.createElement("div",{className:"center container ttc",style:{background:c.bg,color:c.syntax}},l.a.createElement("h2",null,"Game glitch / method log"),l.a.createElement("p",{className:"list-item"},"Version: 0.0.1"),l.a.createElement("h3",{className:"list-item"},"built with react and currently using local storage to save data."),l.a.createElement("h5",{className:"list-item ttu"},"No user authentification as of yet but plans are to implement that in the future, as well as using a database."),l.a.createElement("p",null,"\xa9 Kyle Lynch 2019"))},N=function(e){var t=Object(n.useContext)(p).dispatch,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),g=m[0],h=m[1],d=Object(n.useState)(""),b=Object(s.a)(d,2),f=b[0],E=b[1],v=Object(n.useState)(""),y=Object(s.a)(v,2),O=y[0],x=y[1],j=Object(n.useContext)(u),k=j.isLightTheme,N=j.dark,w=j.light,C=k?w:N;return l.a.createElement("div",{className:"container",style:{background:C.bg,color:C.syntax,paddingTop:"3rem"}},l.a.createElement("form",{className:"post-form ttc",onSubmit:function(a){a.preventDefault(),t({type:"ADD_LOG",log:{game:c,title:g,author:f,details:O}}),o(""),h(""),E(""),x(""),e.history.push("/")}},l.a.createElement("h2",{className:"center"},"post glitch or method"),l.a.createElement("div",{className:"form-group my-1"},l.a.createElement("input",{type:"text",id:"game",className:"form-text",value:c,onChange:function(e){return o(e.target.value)},required:!0}),l.a.createElement("label",{htmlFor:"game"},"game")),l.a.createElement("div",{className:"form-group my-1"},l.a.createElement("input",{type:"text",id:"title",className:"form-text",value:g,onChange:function(e){return h(e.target.value)},required:!0}),l.a.createElement("label",{htmlFor:"title"},"title")),l.a.createElement("div",{className:"form-group my-1"},l.a.createElement("input",{type:"text",id:"author",className:"form-text",value:f,onChange:function(e){return E(e.target.value)},required:!0}),l.a.createElement("label",{htmlFor:"author"},"author")),l.a.createElement("div",{className:"form-group my-1"},l.a.createElement("textarea",{type:"text",id:"details",className:"form-text",value:O,onChange:function(e){return x(e.target.value)},required:!0}),l.a.createElement("label",{htmlFor:"details"},"details")),l.a.createElement("button",{className:"btn",style:{background:C.syntax,color:C.bg}},"Submit")))},w=(a(34),function(){return l.a.createElement(m,null,l.a.createElement(d,null,l.a.createElement(y,null,l.a.createElement(o.a,{basename:"/game-glitch-log"},l.a.createElement(n.Fragment,null,l.a.createElement(O,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:j}),l.a.createElement(k,{exact:!0,path:"/about",component:k}),l.a.createElement(i.a,{exact:!0,path:"/postForm",component:N})))))))}),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/game-glitch-log",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/game-glitch-log","/service-worker.js");C?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.4bb5e704.chunk.js.map