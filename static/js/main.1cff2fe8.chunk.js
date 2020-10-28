(this["webpackJsonpcss.learn"]=this["webpackJsonpcss.learn"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),l=(n(11),n(2)),i=n(1),s=function(){return window.location.hash.replace("#","")||"/"};function u(){var e=Object(a.useState)(s()),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return c(s())};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,Object(a.useCallback)((function(e){return window.location.hash=e}),[])]}n(12),n(13);function m(){return c.a.createElement(l.a,{className:"Logo",to:"/"},c.a.createElement("span",{className:"css"},"CSS"),c.a.createElement("span",{className:"learn"},"Learn"))}n(14);function d(){return c.a.createElement("nav",{className:"Menu"},c.a.createElement(l.a,{to:"/",className:"Menu__item"},"Home"),c.a.createElement(l.a,{to:"/author",className:"Menu__item"},"Author"))}function f(){return c.a.createElement("div",{className:"Header"},c.a.createElement(m,null),c.a.createElement(d,null))}n(15);function E(e){var t=e.pens;return c.a.createElement("div",{className:"PenList"},t.map((function(e){var t=e.id,n=e.name,a=e.description;return c.a.createElement(l.a,{className:"PenList__item",key:t,to:"/pen/".concat(t)},c.a.createElement("div",{className:"PenList__title"},n),c.a.createElement("div",{className:"PenList__description"},a))})))}n(16);function v(){return c.a.createElement("div",{className:"Spinner"})}var h=function(e){var t=e.list;return(void 0===t?[]:t).map((function(e){return{id:e.id,name:e.name,description:e.description,html:e.html,steps:e.steps}}))};function p(){return fetch("./pens.json").then((function(e){return e.json()})).then(h)}function b(){var e=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(i.a)(r,2),l=o[0],s=o[1];return Object(a.useEffect)((function(){c(!0),p().then((function(e){s(e),c(!1)}))}),[s]),{loading:n,pens:l}}(),t=e.loading,n=e.pens;return c.a.createElement("div",{className:"Page Home"},t?c.a.createElement(v,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement(E,{pens:n})))}n(17);n(18);function g(e){var t=e.label,n=void 0===t?"button":t,a=e.action,r=void 0===a?null:a;return c.a.createElement("button",{className:"Button",onClick:r},n)}function N(e){var t=e.html;return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}n(19);function j(e){var t=e.children;return c.a.createElement("div",{className:"Buttons"},t)}n(20);function w(e){var t=e.css;return c.a.createElement("div",{className:"Editor"},t)}function O(e){var t=function(e){var t=e,n=Object(a.useState)(!0),c=Object(i.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)([]),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(a.useState)(0),f=Object(i.a)(d,2),E=f[0],v=f[1];return Object(a.useEffect)((function(){o(!0),p().then((function(e){var n=e.find((function(e){return e.id===t}));v(n.steps.length),m(n),o(!1)}))}),[m,t]),{loading:r,pen:u,totalSteps:E}}(e.params.id),n=t.loading,r=t.pen,o=t.totalSteps,l=Object(a.useState)(0),s=Object(i.a)(l,2),u=s[0],m=s[1],d=function(){m(u+1)},E=function(){m(u-1)};return c.a.createElement("div",{className:"Pen"},n?c.a.createElement(v,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement(j,null,c.a.createElement(g,{label:"Prev",action:function(){u>0&&E()}}),c.a.createElement(g,{label:"Next",action:function(){u<o-1&&d()}}),c.a.createElement(g,{label:"Reset",action:function(){m(0)}})),c.a.createElement("div",{className:"PenContent"},c.a.createElement(w,{css:r.steps[u].code}),c.a.createElement(N,{html:r.html}),c.a.createElement(N,{html:"<style>".concat(r.steps[u].code,"</style>")}))))}n(21);function S(e){var t=e.url,n=void 0===t?null:t,a=e.name,r=void 0===a?null:a;return!!n&&c.a.createElement("div",{className:"Avatar"},c.a.createElement("img",{className:"Avatar__img",alt:r||n,src:n}))}function _(){return c.a.createElement("div",{className:"Page Author"},c.a.createElement(f,null),c.a.createElement("h2",{className:"Page__title"},"Author"),c.a.createElement(S,{url:"https://secure.gravatar.com/avatar/3d6f5d17df19913a7a7970923563710e"}),c.a.createElement("p",null,"I'm passionate about creating applications. I have working between design and front end for more than twelve years. Doing very specific things for the Github community and managing a multidisciplinary team."),c.a.createElement("p",null,"In recent years I have worked creating design systems, both in HTML development, SASS, etc. and in visual design of components using Sketch. "))}function y(){return c.a.createElement("div",{id:"App"},c.a.createElement(l.c,{hook:u},c.a.createElement(l.b,{path:"/",component:b}),c.a.createElement(l.b,{path:"/pen/:id",component:O}),c.a.createElement(l.b,{path:"/author",component:_})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.1cff2fe8.chunk.js.map