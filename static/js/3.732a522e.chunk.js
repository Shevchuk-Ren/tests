(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[3],{84:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(36);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},89:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var r,o,a,i,c,l=t(84),b=t(0),s=t(6),u=t(16),d=t(8),p=t(9),f=p.a.form(r||(r=Object(d.a)(["\n  border: 1px solid rgb(61, 57, 57);\n  width: 300px;\n  padding: 10px;\n  background-color: rgba(84, 81, 81, 0.353);\n"]))),h=p.a.label(o||(o=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  color: rgb(241, 239, 235);\n"]))),j=p.a.input(a||(a=Object(d.a)(["\n  border: 1px solid rgb(241, 239, 235);\n  border-radius: 2px;\n  &[type='email'],\n  &[type='password'] {\n    background-color: inherit;\n    border: 1px solid rgb(76, 74, 74);\n    color: aliceblue;\n    height: 20px;\n  }\n  &[type='password']:focus,\n  &[type='email']:focus {\n    background-color: rgb(61, 57, 57);\n  }\n"]))),g=p.a.button(i||(i=Object(d.a)(["\n  width: fit-content;\n  padding: 3px 5px;\n  background-color: rgb(68, 68, 154);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n"]))),m=p.a.h1(c||(c=Object(d.a)(["\n  color: rgb(61, 57, 57);\n"]))),y=t(1),x={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};function O(){var e=Object(s.c)(),n=Object(b.useState)(""),t=Object(l.a)(n,2),r=t[0],o=t[1],a=Object(b.useState)(""),i=Object(l.a)(a,2),c=i[0],d=i[1],p=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"email":return o(r);case"password":return d(r);default:return}};return Object(y.jsxs)("div",{children:[Object(y.jsx)(m,{children:"Log In"}),Object(y.jsxs)(f,{onSubmit:function(n){n.preventDefault(),e(u.a.logIn({email:r,password:c})),o(""),d("")},autoComplete:"off",children:[Object(y.jsxs)(h,{style:x.label,children:["Email",Object(y.jsx)(j,{type:"email",name:"email",value:r,onChange:p})]}),Object(y.jsxs)(h,{style:x.label,children:["Password",Object(y.jsx)(j,{type:"password",name:"password",value:c,onChange:p})]}),Object(y.jsx)(g,{type:"submit",children:"Sign In"})]})]})}}}]);
//# sourceMappingURL=3.732a522e.chunk.js.map