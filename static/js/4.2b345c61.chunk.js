(this.webpackJsonplogin_test=this.webpackJsonplogin_test||[]).push([[4],{29:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},30:function(t,e,n){t.exports={authSection:"login_authSection__IqViL",authSectionForm:"login_authSectionForm__3ck7V"}},34:function(t,e,n){"use strict";n.r(e);var r=n(29),o=n(0),i=n(1),a=n(30),u=n.n(a),c=n(3);e.default=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],l=Object(i.f)();return Object(c.jsx)("section",{className:u.a.authSection,children:Object(c.jsxs)("form",{id:"authForm",className:u.a.authSectionForm,children:[Object(c.jsx)("label",{htmlFor:"name",children:"Authorization"}),Object(c.jsx)("input",{autoFocus:!0,minLength:3,required:!0,type:"text",id:"name",placeholder:"What's your name?",onChange:function(t){var e=setTimeout((function(){a(t.target.value)}),300);return function(){clearTimeout(e)}}}),Object(c.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),""!==n&&n.length>=3&&(localStorage.setItem("userName",n),l.push("/home"))},children:"Log In"})]})})}}}]);
//# sourceMappingURL=4.2b345c61.chunk.js.map