(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),i=(n(37),n(38),n.p+"static/media/logo.ac359950.svg"),o=n(31),u=n(3),j=n(16),b=n(2),l=n.n(b),p=n(5),h=n(12),d=n(10),f=n.n(d),O=n(14),x=n.n(O),v="http://localhost:8081",m=function(){var e=Object(p.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w().then(Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(v+t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.load("accessToken");case 2:t=e.sent,f.a.defaults.headers.common.Authorization="Bearer ".concat(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){x.a.save("accessToken",e,{path:"/"})},k=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.load("accessToken");case 2:return t=e.sent,e.abrupt("return",void 0!==t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=n(1);var T=function(e){var t,n=Object(c.useState)(""),r=Object(h.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),o=Object(h.a)(i,2),u=o[0],b=o[1],d=function(){var t=Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post(v+"/auth/signin",{id:a,password:u,role:"ROLE_ADMIN"}).catch((function(e){alert(e.response.data.message)}));case 2:if(void 0===(n=t.sent)){t.next=7;break}return t.next=6,g(n.data.accessToken);case 6:e.history.push("/");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(e){"Enter"===e.key&&d()};return Object(N.jsxs)("div",{className:"App",children:["\ub85c\uadf8\uc778",Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("input",{type:"email",className:"form-control",placeholder:"\uc544\uc774\ub514 \uc785\ub825",onChange:function(e){return s(e.target.value)},onKeyPress:O}),Object(N.jsx)("input",(t={type:"email",className:"form-control",placeholder:"\ube44\ubc00\ubc88\ud638 \uc785\ub825"},Object(j.a)(t,"type","password"),Object(j.a)(t,"onChange",(function(e){return b(e.target.value)})),Object(j.a)(t,"onKeyPress",O),t)),Object(N.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",disabled:""===a||""===u,onClick:d,children:"\ub85c\uadf8\uc778"})]})]})};var C=function(e){return Object(N.jsxs)("table",{className:"table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"col",children:"visitId"}),Object(N.jsx)("th",{scope:"col",children:"\uc7a5\uc18c"}),Object(N.jsx)("th",{scope:"col",children:"\ubc29\ubb38\uc790"}),Object(N.jsx)("th",{scope:"col",children:"\uc785\uc7a5\uc2dc\uac04"}),Object(N.jsx)("th",{scope:"col",children:"\ud1f4\uc7a5\uc2dc\uac04"})]})}),Object(N.jsx)("tbody",{children:e.visits.map((function(e){return function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"row",children:e.id}),Object(N.jsx)("td",{children:e.store.storeName}),Object(N.jsx)("td",{children:e.visitor.name}),Object(N.jsx)("td",{children:e.entryTime}),Object(N.jsx)("td",{children:e.exitTime})]})}(e)}))})]})};var S=function(e){var t=Object(c.useState)([]),n=Object(h.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(h.a)(s,2),o=i[0],u=i[1],j=function(){var t=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:t.sent?u(!0):e.history.push("/login");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(c.useEffect)((function(){o&&m("/visits").then((function(e){a(e.data.visitLogs)})).catch((function(e){alert(e.response)}))}),[o]),Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("h1",{children:"\ucd9c\uc785\uc790 \ub9ac\uc2a4\ud2b8"}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(C,{visits:r})]})};var E=function(){return Object(N.jsxs)(o.a,{basename:"",children:[Object(N.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(N.jsxs)("a",{className:"navbar-brand",href:"#",children:[" ",Object(N.jsx)("img",{src:i,alt:i})]})}),Object(N.jsxs)(u.c,{children:[Object(N.jsx)(u.a,{exact:!0,path:"/",component:S}),Object(N.jsx)(u.a,{path:"/login",component:T})]})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(E,{})}),document.getElementById("root")),A()}},[[64,1,2]]]);
//# sourceMappingURL=main.442b1dc3.chunk.js.map