(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(53)},51:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),u=t(22),o=t(11),a=t(8),i=t(7),E=t(26),l=t(27),m=t.n(l),s=t(12),d={count:0,isIncrementing:!1,isDecrementing:!1},p=function(){return function(e){e({type:"counter/INCREMENT_REQUESTED"}),e({type:"counter/INCREMENT"})}},b=function(){return function(e){return e({type:"counter/INCREMENT_REQUESTED"}),setTimeout(function(){e({type:"counter/INCREMENT"})},3e3)}},g=function(){return function(e){e({type:"counter/DECREMENT_REQUESTED"}),e({type:"counter/DECREMENT"})}},f=function(){return function(e){return e({type:"counter/DECREMENT_REQUESTED"}),setTimeout(function(){e({type:"counter/DECREMENT"})},3e3)}},D=Object(i.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case"counter/INCREMENT_REQUESTED":return Object(s.a)({},e,{isIncrementing:!0});case"counter/INCREMENT":return Object(s.a)({},e,{count:e.count+1,isIncrementing:!e.isIncrementing});case"counter/DECREMENT_REQUESTED":return Object(s.a)({},e,{isDecrementing:!0});case"counter/DECREMENT":return Object(s.a)({},e,{count:e.count-1,isDecrementing:!e.isDecrementing});default:return e}}}),R=m()(),y=[E.a,Object(a.routerMiddleware)(R)],T=i.d.apply(void 0,[i.a.apply(void 0,y)].concat([])),C=Object(i.e)(Object(a.connectRouter)(R)(D),{},T),N=t(55),I=t(56),h=Object(o.connect)(function(e){var n=e.counter;return{count:n.count,isIncrementing:n.isIncrementing,isDecrementing:n.isDecrementing}},function(e){return Object(i.b)({increment:p,incrementAsync:b,decrement:g,decrementAsync:f,changePage:function(){return Object(a.push)("/about-us")}},e)})(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"Count: ",e.count),r.a.createElement("p",null,r.a.createElement("button",{onClick:e.increment},"Increment"),r.a.createElement("button",{onClick:e.incrementAsync,disabled:e.isIncrementing},"Increment Async")),r.a.createElement("p",null,r.a.createElement("button",{onClick:e.decrement},"Decrement"),r.a.createElement("button",{onClick:e.decrementAsync,disabled:e.isDecrementing},"Decrement Async")),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return e.changePage()}},"Go to about page via redux")))}),v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"),r.a.createElement("p",null,"Did you get here via Redux?"))},M=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(N.a,{to:"/"},"Home"),r.a.createElement(N.a,{to:"/about-us"},"About")),r.a.createElement("main",null,r.a.createElement(I.a,{exact:!0,path:"/",component:h}),r.a.createElement(I.a,{exact:!0,path:"/about-us",component:v})))},j=(t(49),t(51),document.querySelector("#root"));Object(u.render)(r.a.createElement(o.Provider,{store:C},r.a.createElement(a.ConnectedRouter,{history:R},r.a.createElement("div",null,r.a.createElement(M,null)))),j)}},[[28,2,1]]]);
//# sourceMappingURL=main.69f9f25e.chunk.js.map