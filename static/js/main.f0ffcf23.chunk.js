(this.webpackJsonpsuperwebtool=this.webpackJsonpsuperwebtool||[]).push([[0],{130:function(e,t,n){e.exports=n(249)},135:function(e,t,n){},136:function(e,t,n){},173:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),l=n.n(c),o=(n(135),n(136),n(137),n(55)),i=n(254),s=n(252),u=n(253),m=n(258),p=n(255),f=n(124),d=n(256),E=n(257),h=n(259),g=n(260),b=n(261),v=n(262),y=n(263),j=n(264);var w=function(e,t){return[I(e,t)]},I=function e(t,n){if(Array.isArray(n)){var a={title:t,key:Object(E.a)(),icon:r.a.createElement(g.a,null),children:[]};return n.forEach((function(t,n){a.children.push(e(n.toString(),t))})),a}if("object"===typeof n){var c={title:t,key:Object(E.a)(),icon:r.a.createElement(b.a,null),children:[]};return Object.keys(n).forEach((function(t){c.children.push(e(t,n[t]))})),c}var l,o;switch(typeof n){case"string":l="".concat(t,' : "').concat(n,'"'),o=r.a.createElement(v.a,null);break;case"number":l="".concat(t," : ").concat(n),o=r.a.createElement(y.a,null);break;case"boolean":l="".concat(t," : ").concat(n),o=r.a.createElement(j.a,null);break;default:l="".concat(t," : ").concat(n)}return{title:l,icon:o,key:Object(E.a)()}},k=function(e){var t=e.jsonStr,n=Object(a.useState)(null),c=Object(o.a)(n,2),l=c[0],i=c[1],s=Object(a.useState)(null),u=Object(o.a)(s,2),m=u[0],p=u[1];return Object(a.useEffect)((function(){if(i(null),p(null),console.log("useEffect"),console.log(t),t)try{console.log("parse");var e=JSON.parse(t),n=w("json",e);i(n)}catch(a){p(a.toString())}}),[t]),l?r.a.createElement(d.a,{showIcon:!0,showLine:{showLeafIcon:!1},switcherIcon:r.a.createElement(h.a,null),treeData:l}):m?r.a.createElement("div",{style:{color:"red"}},m):r.a.createElement(r.a.Fragment,null)},O=n(265),S=(n(173),function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],d=i.a.useForm(),E=Object(o.a)(d,1)[0],h=function(){var e=E.getFieldValue("jsonInput");l(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"shadow"},r.a.createElement(s.a,null,r.a.createElement(u.a,{xs:24,lg:12},r.a.createElement("div",{className:"text-left",style:{margin:"4px"}},r.a.createElement(m.b,null,r.a.createElement(p.a,{onClick:function(){return function(){var e=E.getFieldValue("jsonInput");E.setFieldsValue({jsonInput:JSON.stringify(JSON.parse(e),void 0,4)})}()}},"format"),r.a.createElement(p.a,{onClick:function(){return function(){var e=E.getFieldValue("jsonInput");E.setFieldsValue({jsonInput:JSON.stringify(JSON.parse(e))})}()}},"compress"),r.a.createElement(p.a,{onClick:function(){return E.resetFields(),void h()}},"clear"),r.a.createElement(p.a,{onClick:function(){return E.setFieldsValue({jsonInput:'{"squadName":"Super hero squad","homeTown":"Metro City","formed":2016,"secretBase":"Super tower","active":true,"members":[{"name":"Molecule Man","age":29,"secretIdentity":"Dan Jukes","powers":["Radiation resistance","Turning tiny","Radiation blast"]},{"name":"Madame Uppercut","age":39,"secretIdentity":"Jane Wilson","powers":["Million tonne punch","Damage resistance","Superhuman reflexes"]},{"name":"Eternal Flame","age":1000000,"secretIdentity":"Unknown","powers":["Immortality","Heat Immunity","Inferno","Teleportation","Interdimensional travel"]}]}'}),void h()}},"example"),r.a.createElement(p.a,{type:"primary",onClick:function(){return h()}},"visualize")))),r.a.createElement(u.a,{xs:24,lg:12},r.a.createElement("div",{className:"text-right",style:{margin:"4px"}},r.a.createElement(m.b,null,r.a.createElement(p.a,{href:"https://github.com/Mayazure/superwebtool",icon:r.a.createElement(O.a,null)},"Github")))))),r.a.createElement(s.a,null,r.a.createElement(u.a,{span:10},r.a.createElement(i.a,{form:E},r.a.createElement(i.a.Item,{name:"jsonInput"},r.a.createElement(f.a,{style:{height:"100vh",resize:"none"},placeholder:"Input your json data here"})))),r.a.createElement(u.a,{span:14},r.a.createElement(k,{jsonStr:c}))))});var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.f0ffcf23.chunk.js.map