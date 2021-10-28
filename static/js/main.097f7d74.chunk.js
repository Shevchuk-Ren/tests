(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(e,n,t){"use strict";t.d(n,"h",(function(){return c})),t.d(n,"i",(function(){return o})),t.d(n,"g",(function(){return a})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return l})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return d})),t.d(n,"d",(function(){return b})),t.d(n,"j",(function(){return j}));var r=t(3),c=Object(r.b)("phonebook/fetchContact"),o=Object(r.b)("phonebook/fetchContactSuccess"),a=Object(r.b)("phonebook/fetchContactError"),i=Object(r.b)("phonebook/addContact"),s=Object(r.b)("phonebook/addContactSuccess"),l=Object(r.b)("phonebook/addContactError"),u=Object(r.b)("phonebook/deleteContact"),d=Object(r.b)("phonebook/deleteContactSuccess"),b=Object(r.b)("phonebook/deleteContactError"),j=Object(r.b)("phonebook/cgangeFilter")},16:function(e,n,t){"use strict";var r=t(19),c=t.n(r),o=t(25),a=t(3),i=t(17),s=t.n(i);s.a.defaults.baseURL="https://connections-api.herokuapp.com",console.log(s.a.defaults,"AXIOS api");var l=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},u=function(){s.a.defaults.headers.common.Authorization=""},d={register:Object(a.c)("auth/register",function(){var e=Object(o.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/signup",n);case 3:return t=e.sent,r=t.data,console.log(r,"data in register"),l(r.token),e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0,"error register");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()),logIn:Object(a.c)("auth/login",function(){var e=Object(o.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/login",n);case 3:return t=e.sent,r=t.data,console.log(r,"data in login"),console.log(s.a.defaults,"defaults axios"),l(r.token),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0,"error in login");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}()),logOut:Object(a.c)("auth/logout",Object(o.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/logout");case 3:n=e.sent,n.data,console.log("data in logout"),console.log(s.a.defaults,"defaults axios logout"),u(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0,"error in logout");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),refreshCurrentUser:Object(a.c)("auth/current",function(){var e=Object(o.a)(c.a.mark((function e(n,t){var r,o,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.getState(),"thunkAPI in refresh"),r=t.getState(),null!==(o=r.auth.token)){e.next=6;break}return console.log("No token here"),e.abrupt("return",t.rejectWithValue());case 6:return l(o),e.prev=7,e.next=10,s.a.get("/users/current");case 10:return a=e.sent,i=a.data,console.log(i,"response in refresh"),e.abrupt("return",i);case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0,"error in refresh");case 19:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(n,t){return e.apply(this,arguments)}}())};n.a=d},79:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var r,c,o,a,i=t(0),s=t.n(i),l=t(28),u=t.n(l),d=t(18),b=t(6),j=t(31),g=t(3),p=t(20),h=t(46),f=t.n(h),O=t(47),x=t.n(O),m=t(4),v=t(21),k=t(16),w=Object(g.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(r={},Object(m.a)(r,k.a.register.fulfilled,(function(e,n){console.log(e,"state in slice to register"),console.log(n.payload,"payload in slice to register"),e.user=n.payload.user,e.token=n.payload.token,e.isLoggedIn=!1})),Object(m.a)(r,k.a.logIn.fulfilled,(function(e,n){console.log(e,"state in slice to login"),console.log(n.payload,"payload in slice to login"),e.user=n.payload.user,e.token=n.payload.token,e.isLoggedIn=!0})),Object(m.a)(r,k.a.logOut.fulfilled,(function(e,n){console.log(e,"state in slice to logout"),console.log(n.payload,"payload in slice to logout"),e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(m.a)(r,k.a.refreshCurrentUser.pending,(function(e,n){console.log(e,"state in slice to refresh"),console.log(n.payload,"payload in slice to refresh"),e.isFetchingCurrentUser=!0})),Object(m.a)(r,k.a.refreshCurrentUser.fulfilled,(function(e,n){console.log(e,"state in slice to refresh"),console.log(n.payload,"payload in slice to refresh"),e.user=Object(v.a)({},n.payload),e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(m.a)(r,k.a.refreshCurrentUser.rejected,(function(e,n){console.log(e,"state in slice to refresh rejected"),e.isFetchingCurrentUser=!1})),r)}).reducer,y=t(7),C=t(13),I=Object(g.d)(!1,(c={},Object(m.a)(c,C.b,(function(){return!0})),Object(m.a)(c,C.c,(function(){return!1})),Object(m.a)(c,C.a,(function(){return!1})),Object(m.a)(c,C.e,(function(){return!0})),Object(m.a)(c,C.f,(function(){return!1})),Object(m.a)(c,C.d,(function(){return!1})),Object(m.a)(c,C.h,(function(){return!0})),Object(m.a)(c,C.i,(function(){return!1})),Object(m.a)(c,C.g,(function(){return!1})),c)),z=Object(g.d)("",{"phonebook/cgangeFilter":function(e,n){return n.payload}}),L=Object(g.d)([],(o={},Object(m.a)(o,C.i,(function(e,n){return n.payload})),Object(m.a)(o,C.c,(function(e,n){var t=n.payload;return[].concat(Object(j.a)(e),[t])})),Object(m.a)(o,C.f,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),o)),U=Object(y.b)({contacts:L,filter:z,loading:I}),S={key:"auth",storage:x.a,whitelist:["token"]},T=Object(g.a)({reducer:{auth:Object(p.g)(S,w),phoneBook:U},middleware:function(e){return[].concat(Object(j.a)(e({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})),[f.a])},devTools:!1}),F=Object(p.h)(T),A=(t(79),t(5)),E={getIsLoggedIn:function(e){return console.log(e,"STATE"),e.auth.isLoggedIn},getUsername:function(e){return console.log(e,"STATE"),e.auth.user.name},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}},N=t(8),B=t(9),J=Object(B.a)(d.b)(a||(a=Object(N.a)(["\n  display: inline-block;\n  text-decoration: none;\n\n  color: #2a363b;\n\n  @media screen and (max-width: 767px) {\n    padding: 8px;\n    font-weight: 700;\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 12px;\n    font-weight: 700;\n    font-size: 20px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding: 15px;\n    font-weight: 700;\n    font-size: 24px;\n  }\n  &.activelink {\n    composes: link;\n    color: rgb(232, 74, 95);\n  }\n"]))),P=t(1);function R(){var e=Object(b.d)(E.getIsLoggedIn);return Object(P.jsxs)("nav",{children:[Object(P.jsx)(J,{to:"/",exact:!0,activeClassName:"activelink",children:"General"}),e&&Object(P.jsx)(J,{to:"/contacts",exact:!0,activeClassName:"activelink",children:"Phonebook"})]})}var W,G,M,V,X,q,D=t.p+"static/media/rock.22a7a8d2.jpg",H=B.a.div(W||(W=Object(N.a)(["\n  display: flex;\n  align-items: center;\n"]))),K=B.a.img(G||(G=Object(N.a)(["\n  border-radius: 50%;\n  margin-right: 4px;\n\n  @media screen and (min-width: 768px) {\n    width: 50px;\n  }\n"]))),Q=B.a.span(M||(M=Object(N.a)(["\n  font-weight: 700;\n\n  color: white;\n  @media screen and (min-width: 768px) {\n    margin-right: 12px;\n  }\n"]))),Y=B.a.span(V||(V=Object(N.a)(["\n  font-size: 17px;\n  color: #e84a5f;\n"]))),Z=B.a.button(X||(X=Object(N.a)(["\n  width: 50px;\n  background-color: rgb(68, 68, 154);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n  padding: 6px;\n"])));function $(){var e=Object(b.c)(),n=Object(b.d)(E.getUsername),t=D;return Object(P.jsxs)(H,{children:[Object(P.jsx)(K,{src:t,alt:"",width:"45"}),Object(P.jsxs)(Q,{children:["Welcome, ",Object(P.jsx)(Y,{children:n})]}),Object(P.jsx)(Z,{type:"button",onClick:function(){return e(k.a.logOut())},children:"Logout"})]})}var _,ee=Object(B.a)(d.b)(q||(q=Object(N.a)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 12px;\n  font-weight: 700;\n\n  color: rgb(61, 57, 57);\n  @media screen and (max-width: 767px) {\n    padding: 8px;\n    font-weight: 700;\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 12px;\n    font-weight: 700;\n    font-size: 20px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding: 15px;\n    font-weight: 700;\n    font-size: 20px;\n  }\n  &.activelink {\n    composes: link;\n    color: rgb(232, 74, 95);\n  }\n"])));function ne(){return Object(P.jsxs)("div",{children:[Object(P.jsx)(ee,{to:"/register",exact:!0,activeClassName:"activelink",children:"Create an account"}),Object(P.jsx)(ee,{to:"/login",exact:!0,activeClassName:"activelink",children:"Sign In"})]})}var te,re=B.a.header(_||(_=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #2a363b;\n  padding: 5px;\n  margin-bottom: 20px;\n"])));function ce(){var e=Object(b.d)(E.getIsLoggedIn);return Object(P.jsxs)(re,{children:[Object(P.jsx)(R,{}),e?Object(P.jsx)($,{}):Object(P.jsx)(ne,{})]})}var oe=B.a.div(te||(te=Object(N.a)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 6px;\n\n  @media screen and (max-width: 767px) {\n    width: 320px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding-left: 71px;\n    padding-right: 71px;\n    width: 1024px;\n  }\n"]))),ae=function(e){var n=e.children;return Object(P.jsx)(oe,{children:n})},ie=t(32),se=["children","redirectTo"];function le(e){var n=e.children,t=e.redirectTo,r=void 0===t?"/":t,c=Object(ie.a)(e,se),o=Object(b.d)(E.getIsLoggedIn);return Object(P.jsx)(A.b,Object(v.a)(Object(v.a)({},c),{},{children:o?n:Object(P.jsx)(A.a,{to:r})}))}var ue=["children","redirectTo","restricted"];function de(e){var n=e.children,t=e.redirectTo,r=void 0===t?"/":t,c=e.restricted,o=void 0!==c&&c,a=Object(ie.a)(e,ue),i=Object(b.d)(E.getIsLoggedIn)&&o;return Object(P.jsx)(A.b,Object(v.a)(Object(v.a)({},a),{},{children:i?Object(P.jsx)(A.a,{to:r}):n}))}var be=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,87))})),je=Object(i.lazy)((function(){return t.e(4).then(t.bind(null,88))})),ge=Object(i.lazy)((function(){return t.e(3).then(t.bind(null,89))})),pe=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,86))}));function he(){var e=Object(b.c)(),n=Object(b.d)(E.getIsFetchingCurrent);return Object(i.useEffect)((function(){e(k.a.refreshCurrentUser())}),[e]),!n&&Object(P.jsxs)(ae,{children:[Object(P.jsx)(ce,{}),Object(P.jsx)(i.Suspense,{fallback:Object(P.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:Object(P.jsxs)(A.d,{children:[Object(P.jsx)(de,{exact:!0,path:"/",children:Object(P.jsx)(be,{})}),Object(P.jsx)(de,{exact:!0,path:"/register",restricted:!0,redirectTo:"/login",children:Object(P.jsx)(je,{})}),Object(P.jsx)(de,{exact:!0,path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(P.jsx)(ge,{})}),Object(P.jsx)(le,{path:"/contacts",redirectTo:"/login",children:Object(P.jsx)(pe,{})})]})})]})}var fe=t(49);u.a.render(Object(P.jsx)(s.a.StrictMode,{children:Object(P.jsx)(b.a,{store:T,children:Object(P.jsx)(fe.a,{loading:null,persistor:F,children:Object(P.jsx)(d.a,{children:Object(P.jsx)(he,{})})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.097f7d74.chunk.js.map