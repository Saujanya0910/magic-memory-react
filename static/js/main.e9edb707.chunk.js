(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(t,c,e){},function(t,c,e){},function(t,c,e){},,function(t,c,e){"use strict";e.r(c);var n=e(1),a=e.n(n),r=e(5),i=e.n(r),s=(e(10),e(3)),o=e(2),u=(e(11),e(12),e(0)),d=function(t){var c=t.card,e=t.handleChoice,n=t.flipped,a=t.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{src:c.src,className:"front",alt:"card front"}),Object(u.jsx)("img",{src:"/img/cover.png",className:"back",alt:"card back",onClick:function(){a||e(c)}})]})})},j=[{src:"/img/helmet-1.png",matched:!1},{src:"/img/potion-1.png",matched:!1},{src:"/img/ring-1.png",matched:!1},{src:"/img/scroll-1.png",matched:!1},{src:"/img/shield-1.png",matched:!1},{src:"/img/sword-1.png",matched:!1}];var l=function(){var t=Object(n.useState)([]),c=Object(o.a)(t,2),e=c[0],a=c[1],r=Object(n.useState)(0),i=Object(o.a)(r,2),l=i[0],b=i[1],m=Object(n.useState)(null),O=Object(o.a)(m,2),f=O[0],h=O[1],p=Object(n.useState)(null),g=Object(o.a)(p,2),x=g[0],v=g[1],S=Object(n.useState)(!1),N=Object(o.a)(S,2),k=N[0],w=N[1],C=Object(n.useState)(0),M=Object(o.a)(C,2),y=M[0],E=M[1],T=Object(n.useState)(!1),J=Object(o.a)(T,2),A=J[0],B=J[1],G=function(){var t=[].concat(j,j).sort((function(){return Math.random()-.5})).map((function(t){return Object(s.a)(Object(s.a)({},t),{},{id:Math.random()})}));h(null),v(null),E(0),B(!1),a(t),b(0)},I=function(t){f?v(t):h(t)};Object(n.useEffect)((function(){G()}),[]),Object(n.useEffect)((function(){return f&&x&&(w(!0),x.src===f.src?(E((function(t){return t+1})),a((function(t){return t.map((function(t){return t.src===f.src?Object(s.a)(Object(s.a)({},t),{},{matched:!0}):t}))})),q()):setTimeout((function(){return q()}),700)),function(){}}),[f,x]),Object(n.useEffect)((function(){6===y&&(B(!0),window.scrollTo({top:0,behavior:"smooth"}))}),[y]);var q=function(){h(null),v(null),b((function(t){return t+1})),w(!1)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Magic Match"}),A&&Object(u.jsxs)("p",{children:["Congratulations, you completed the game in ",l," turns! \ud83c\udf89"]}),Object(u.jsx)("button",{onClick:G,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:e.map((function(t){return Object(u.jsx)(d,{card:t,handleChoice:I,flipped:t===f||t===x||t.matched,disabled:k},t.id)}))}),Object(u.jsxs)("p",{children:["Turns: ",l]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.e9edb707.chunk.js.map