(this["webpackJsonpcss.learn"]=this["webpackJsonpcss.learn"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),s=(n(11),n(2)),i=n(1),l=function(){return window.location.hash.replace("#","")||"/"};function u(){var e=Object(a.useState)(l()),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return c(l())};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,Object(a.useCallback)((function(e){return window.location.hash=e}),[])]}var m=c.a.createContext({});function d(e){var t=e.children,n=Object(a.useState)([]),r=Object(i.a)(n,2),o=r[0],s=r[1];return c.a.createElement(m.Provider,{value:{pens:o,setPens:s}},t)}var f=m;n(12);function E(e){var t=e.css,n=Object(a.useState)((function(){return t})),r=Object(i.a)(n,2),o=r[0],s=r[1];return c.a.createElement("pre",{className:"Code"},c.a.createElement("code",{onChange:function(e){s(e.target.textContent)},onKeyPress:function(e){s(e.target.textContent)},className:"Code__tag css",contentEditable:"true",suppressContentEditableWarning:"true",autoCorrect:"off",autoComplete:"off",autoCapitalize:"off",spellCheck:"false"},o))}n(13);function h(e){var t=e.name,n=e.description,a=e.code[0];return c.a.createElement("div",{className:"Pen"},c.a.createElement("div",{className:"Pen__title"},t),c.a.createElement("div",{className:"Pen__description"},n),c.a.createElement(E,{css:a}))}n(14);function p(e){var t=e.pens;return c.a.createElement("div",{className:"ListOfPens"},t.map((function(e){return c.a.createElement(h,{key:e.id,id:e.id,name:e.name,description:e.description,code:e.code})})))}var v=function(e){var t=e.list;return(void 0===t?[]:t).map((function(e){return{id:e.id,name:e.name,description:e.description,code:e.code}}))};function g(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useContext)(f),o=r.pens,s=r.setPens;return Object(a.useEffect)((function(){c(!0),fetch("./pens.json").then((function(e){return e.json()})).then(v).then((function(e){s(e),c(!1)}))}),[s]),{loading:n,pens:o}}function b(){var e=g(),t=e.loading,n=e.pens;return Object(a.useEffect)((function(){}),[t,n]),c.a.createElement("div",{className:"Page Home"},c.a.createElement("h2",{className:"Page__title"},"Home"),t?c.a.createElement("div",null,"loading"):c.a.createElement(p,{pens:n}))}function _(){return c.a.createElement("div",{className:"Page Playground"},c.a.createElement("h2",{className:"Page__title"},"Playground"),c.a.createElement(E,{css:".foo { display: block; }"}))}function N(){return c.a.createElement("div",{className:"Page Author"},c.a.createElement("h2",{className:"Page__title"},"Author"))}n(15),n(16);function P(){return c.a.createElement("nav",{className:"Menu"},c.a.createElement(s.a,{to:"/",className:"Menu__item"},"Home"),c.a.createElement(s.a,{to:"/css",className:"Menu__item"},"Playground"),c.a.createElement(s.a,{to:"/author",className:"Menu__item"},"Author"))}function w(){return c.a.createElement("div",{className:"Header"},c.a.createElement("h1",{className:"Header__title"},"CSS.Learn"),c.a.createElement(P,null))}function j(){return c.a.createElement("div",{id:"App",className:"app"},c.a.createElement(d,null,c.a.createElement(s.c,{hook:u},c.a.createElement(w,null),c.a.createElement(s.b,{path:"/",component:b}),c.a.createElement(s.b,{path:"/css",component:_}),c.a.createElement(s.b,{path:"/author",component:N}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.8326d0a5.chunk.js.map