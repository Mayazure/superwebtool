(this.webpackJsonpsuperwebtool=this.webpackJsonpsuperwebtool||[]).push([[0],{126:function(e,t,n){e.exports=n(246)},131:function(e,t,n){},132:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),l=(n(131),n(132),n(133),n(54)),i=n(251),u=n(249),s=n(255),m=n(252),f=n(250),p=n(121),h=n(253),E=n(254);var b=function(e,t){return[d(e,t)]},d=function e(t,n){if(Array.isArray(n)){var a={title:t,key:Object(E.a)(),icon:r.a.createElement("span",{color:"#87d068"},"[]"),children:[]};return n.forEach((function(t,n){a.children.push(e(n.toString(),t))})),a}if("object"===typeof n){var c={title:t,key:Object(E.a)(),icon:r.a.createElement("span",{color:"#108ee9"},"{}"),children:[]};return Object.keys(n).forEach((function(t){c.children.push(e(t,n[t]))})),c}var o;switch(typeof n){case"string":o="".concat(t,' : "').concat(n,'"');break;default:o="".concat(t," : ").concat(n)}return{title:o,key:Object(E.a)()}},j=function(e){var t=e.jsonStr,n=Object(a.useState)(null),c=Object(l.a)(n,2),o=c[0],i=c[1],u=Object(a.useState)(null),s=Object(l.a)(u,2),m=s[0],f=s[1];return Object(a.useEffect)((function(){if(i(null),f(null),console.log("useEffect"),console.log(t),t)try{console.log("parse");var e=JSON.parse(t),n=b("json",e);i(n)}catch(a){f(a.toString())}}),[t]),o?r.a.createElement(h.a,{showIcon:!0,treeData:o}):m?r.a.createElement(r.a.Fragment,null,m):r.a.createElement(r.a.Fragment,null)},v=function(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1],h=i.a.useForm(),E=Object(l.a)(h,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("div",{style:{margin:"4px"}},r.a.createElement(s.b,null,r.a.createElement(m.a,{onClick:function(){},disabled:!0},"format"),r.a.createElement(m.a,{type:"primary",onClick:function(){return function(){var e=E.getFieldValue("jsonInput");o(e)}()}},"visualize")))),r.a.createElement(u.a,null,r.a.createElement(f.a,{span:10},r.a.createElement(i.a,{form:E},r.a.createElement(i.a.Item,{name:"jsonInput"},r.a.createElement(p.a,{style:{height:"100vh",resize:"none"},placeholder:"Input your json data here"})))),r.a.createElement(f.a,{span:14},r.a.createElement(j,{jsonStr:c}))))};var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[126,1,2]]]);
//# sourceMappingURL=main.f81f5dbd.chunk.js.map