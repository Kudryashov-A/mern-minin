(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(21),i=c.n(s),l=(c(28),c(10)),j=c(5),o="userData",u=c(2),d=c(4),b=c.n(d),O=c(9),h=c(14),x=c(13);function p(){}var f=Object(r.createContext)({token:null,userId:null,login:p,logout:p,isAuthenticated:!1}),v=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(null),s=Object(j.a)(a,2),i=s[0],l=s[1];return{loading:c,request:Object(r.useCallback)(function(){var e=Object(O.a)(b.a.mark((function e(t){var c,r,a,s,i,j=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.length>1&&void 0!==j[1]?j[1]:"GET",r=j.length>2&&void 0!==j[2]?j[2]:null,a=j.length>3&&void 0!==j[3]?j[3]:{},n(!0),e.prev=4,r&&(r=JSON.stringify(r),a["Content-Type"]="application/json"),e.next=8,fetch(t,{method:c,body:r,headers:a});case 8:return s=e.sent,e.next=11,s.json();case 11:if(i=e.sent,s.ok){e.next=14;break}throw new Error(i.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return n(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),n(!1),l(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(r.useCallback)((function(){return l(null)}),[])}},m=function(){var e=Object(r.useContext)(f),t=Object(r.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),c=v(),a=c.loading,s=c.request,i=c.error,l=c.clearError,o=Object(r.useState)({email:"",password:""}),u=Object(j.a)(o,2),d=u[0],p=u[1];Object(r.useEffect)((function(){t(i),l()}),[i,t,l]),Object(r.useEffect)((function(){window.M.updateTextFields()}),[]);var m=function(e){p(Object(x.a)(Object(x.a)({},d),{},Object(h.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(O.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/auth/register","POST",Object(x.a)({},d));case 3:c=e.sent,t(c.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var t=Object(O.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s("/api/auth/login","POST",Object(x.a)({},d));case 3:c=t.sent,e.login(c.token,c.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col s6 offset-s3",children:[Object(n.jsx)("h1",{children:"\u0421\u043e\u043a\u0440\u0430\u0442\u0438 \u0421\u0441\u044b\u043b\u043a\u0443"}),Object(n.jsxs)("div",{className:"card blue darken-1",children:[Object(n.jsxs)("div",{className:"card-content white-text",children:[Object(n.jsx)("span",{className:"card-title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",id:"email",type:"text",name:"email",className:"yellow-input",value:d.email,onChange:m}),Object(n.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",className:"yellow-input",value:d.password,onChange:m}),Object(n.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"})]})]})]}),Object(n.jsxs)("div",{className:"card-action",children:[Object(n.jsx)("button",{className:"btn yellow darken-4",style:{marginRight:10},disabled:a,onClick:k,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(n.jsx)("button",{className:"btn grey lighten-1 black-text",onClick:g,disabled:a,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})]})})},g=function(){var e=Object(u.g)(),t=Object(r.useContext)(f),c=v().request,a=Object(r.useState)(""),s=Object(j.a)(a,2),i=s[0],l=s[1];Object(r.useEffect)((function(){window.M.updateTextFields()}),[]);var o=function(){var n=Object(O.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==r.key){n.next=10;break}return n.prev=1,n.next=4,c("/api/link/generate","POST",{from:i},{Authorization:"Bearer ".concat(t.token)});case 4:a=n.sent,e.push("/detail/".concat(a.link._id)),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"},children:Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("input",{placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",id:"link",type:"text",value:i,onChange:function(e){return l(e.target.value)},onKeyPress:o}),Object(n.jsx)("label",{htmlFor:"link",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443"})]})})})},k=function(e){var t=e.link;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h2",{children:["\u0421\u0441\u044b\u043b\u043a\u0430 ",t._id]}),Object(n.jsxs)("p",{children:["\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430: ",Object(n.jsx)("a",{href:t.to,target:"_blank",rel:"noopener noreferrer",children:t.to})]}),Object(n.jsxs)("p",{children:["\u041e\u0442\u043a\u0443\u0434\u0430: ",Object(n.jsx)("a",{href:t.from,target:"_blank",rel:"noopener noreferrer",children:t.from})]}),Object(n.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0438\u043a\u043e\u0432 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435: ",Object(n.jsx)("strong",{children:t.clicks})]}),Object(n.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",Object(n.jsx)("strong",{children:new Date(t.date).toLocaleDateString()})]})]})},w=function(){return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"},children:Object(n.jsx)("div",{className:"preloader-wrapper active",children:Object(n.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(n.jsx)("div",{className:"circle-clipper left",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"gap-patch",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"circle-clipper right",children:Object(n.jsx)("div",{className:"circle"})})]})})})},N=function(){var e=Object(r.useContext)(f).token,t=v(),c=t.request,a=t.loading,s=Object(r.useState)(null),i=Object(j.a)(s,2),l=i[0],o=i[1],d=Object(u.h)().id,h=Object(r.useCallback)(Object(O.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("/api/link/".concat(d),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,o(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,d,c]);return Object(r.useEffect)((function(){h()}),[h]),a?Object(n.jsx)(w,{}):Object(n.jsx)(n.Fragment,{children:!a&&l&&Object(n.jsx)(k,{link:l})})},y=function(e){var t=e.links;return t.length?Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u2116"}),Object(n.jsx)("th",{children:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"}),Object(n.jsx)("th",{children:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"}),Object(n.jsx)("th",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t+1}),Object(n.jsx)("td",{children:e.from}),Object(n.jsx)("td",{children:e.to}),Object(n.jsx)("td",{children:Object(n.jsx)(l.b,{to:"/detail/".concat(e._id),children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"})})]},t)}))})]}):Object(n.jsx)("p",{className:"center",children:"\u0421\u0441\u044b\u043b\u043e\u043a \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 "})},C=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=v(),i=s.loading,l=s.request,o=Object(r.useContext)(f).token,u=Object(r.useCallback)(Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/link","GET",null,{Authorization:"Bearer ".concat(o)});case 3:t=e.sent,a(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[o,l]);return Object(r.useEffect)((function(){u()}),[u]),i?Object(n.jsx)(w,{}):Object(n.jsx)(n.Fragment,{children:!i&&Object(n.jsx)(y,{links:c})})},S=function(){var e=Object(u.g)(),t=Object(r.useContext)(f);return Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"},children:[Object(n.jsx)("span",{className:"brand-logo",children:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043e\u043a"}),Object(n.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/create",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/links",children:"\u0421\u0441\u044b\u043b\u043a\u0438"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",onClick:function(c){c.preventDefault(),t.logout(),e.push("/")},children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})})};c(34);var E=function(){var e=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(j.a)(a,2),i=s[0],l=s[1],u=Object(r.useState)(null),d=Object(j.a)(u,2),b=d[0],O=d[1],h=Object(r.useCallback)((function(e,t){n(e),O(t),localStorage.setItem(o,JSON.stringify({userId:t,token:e}))}),[]),x=Object(r.useCallback)((function(){n(null),O(null),localStorage.removeItem(o)}),[]);return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem(o));e&&e.token&&h(e.token,e.userId),l(!0)}),[h]),{login:h,logout:x,token:c,userId:b,ready:i}}(),t=e.token,c=e.login,a=e.logout,s=e.userId,i=e.ready,d=!!t,b=function(e){return e?Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/links",exact:!0,children:Object(n.jsx)(C,{})}),Object(n.jsx)(u.b,{path:"/create",exact:!0,children:Object(n.jsx)(g,{})}),Object(n.jsx)(u.b,{path:"/detail/:id",children:Object(n.jsx)(N,{})}),Object(n.jsx)(u.a,{to:"/create"})]}):Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(u.a,{to:"/"})]})}(d);return i?Object(n.jsx)(f.Provider,{value:{token:t,login:c,logout:a,userId:s,isAuthenticated:d},children:Object(n.jsxs)(l.a,{children:[d&&Object(n.jsx)(S,{}),Object(n.jsx)("div",{className:"container",children:b})]})}):Object(n.jsx)(w,{})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),T()}},[[35,1,2]]]);
//# sourceMappingURL=main.c4c455cd.chunk.js.map