(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[4],{84:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(36);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r,a,o,c,i,l=n(84),s=n(0),b=n(6),u=n(16),d=n(8),p=n(9),j=p.a.form(r||(r=Object(d.a)(["\n  border: 1px solid rgb(61, 57, 57);\n  width: 300px;\n  padding: 10px;\n  background-color: rgba(84, 81, 81, 0.353);\n"]))),f=p.a.label(a||(a=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  color: rgb(241, 239, 235);\n"]))),h=p.a.input(o||(o=Object(d.a)(["\n  border: 1px solid rgb(241, 239, 235);\n  border-radius: 2px;\n  &[type='text'],\n  &[type='email'],\n  &[type='password'] {\n    background-color: inherit;\n    border: 1px solid rgb(76, 74, 74);\n    color: aliceblue;\n    height: 20px;\n  }\n  &[type='text']:focus,\n  &[type='password']:focus,\n  &[type='email']:focus {\n    background-color: rgb(61, 57, 57);\n  }\n"]))),m=p.a.button(c||(c=Object(d.a)(["\n  width: fit-content;\n  padding: 3px 5px;\n  background-color: rgb(68, 68, 154);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n"]))),y=p.a.h1(i||(i=Object(d.a)(["\n  color: rgb(61, 57, 57);\n"]))),x=n(1),g={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}};function O(){var e=Object(b.c)(),t=Object(s.useState)(""),n=Object(l.a)(t,2),r=n[0],a=n[1],o=Object(s.useState)(""),c=Object(l.a)(o,2),i=c[0],d=c[1],p=Object(s.useState)(""),O=Object(l.a)(p,2),w=O[0],v=O[1],S=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return a(r);case"email":return d(r);case"password":return v(r);default:return}};return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{children:"Create an account"}),Object(x.jsxs)(j,{onSubmit:function(t){t.preventDefault(),e(u.a.register({name:r,email:i,password:w})),a(""),d(""),v("")},autoComplete:"off",children:[Object(x.jsxs)(f,{style:g.label,children:["Name",Object(x.jsx)(h,{type:"text",name:"name",value:r,onChange:S})]}),Object(x.jsxs)(f,{style:g.label,children:["Email",Object(x.jsx)(h,{type:"email",name:"email",value:i,onChange:S})]}),Object(x.jsxs)(f,{style:g.label,children:["Password",Object(x.jsx)(h,{type:"password",name:"password",value:w,onChange:S})]}),Object(x.jsx)(m,{type:"submit",children:"Sign Up"})]})]})}}}]);
//# sourceMappingURL=4.18eb04b5.chunk.js.map