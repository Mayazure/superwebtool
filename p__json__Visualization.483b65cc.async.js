(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{G9Kg:function(e,t,n){"use strict";n.r(t);n("jCWc");var a=n("kPKH"),r=(n("14J3"),n("BMrR")),c=(n("DYRE"),n("zeV3")),l=(n("+L6B"),n("2/Rp")),o=(n("y8nQ"),n("Vl3Y")),i=n("tJVT"),s=n("q1tI"),u=n.n(s),m=n("whJP"),f=(n("ozfa"),n("MJZm")),E=n("7Cbv"),I=n("8Skl"),d=n("SfST"),O=n("DaOR"),p=n("CuE1"),S=n("DzjV"),g=n("djQ9");function j(e){var t=e.jsonStr,n=Object(s["useState"])(null),a=Object(i["a"])(n,2),r=a[0],c=a[1],l=Object(s["useState"])(null),o=Object(i["a"])(l,2),m=o[0],E=o[1];return Object(s["useEffect"])((function(){if(c(null),E(null),console.log("useEffect"),console.log(t),t)try{console.log("parse");var e=JSON.parse(t),n=b("json",e);c(n)}catch(a){E(a.toString())}}),[t]),r?u.a.createElement(f["a"],{showIcon:!0,showLine:{showLeafIcon:!1},switcherIcon:u.a.createElement(I["a"],null),treeData:r}):m?u.a.createElement("div",{style:{color:"red"}},m):u.a.createElement(u.a.Fragment,null)}var b=function(e,t){var n=N(e,t),a=[n];return a},N=function e(t,n){if(Array.isArray(n)){var a={title:t,key:Object(E["a"])(),icon:u.a.createElement(d["a"],null),children:[]};return n.forEach((function(t,n){a.children.push(e(n.toString(),t))})),a}if("object"===typeof n){var r={title:t,key:Object(E["a"])(),icon:u.a.createElement(O["a"],null),children:[]};return Object.keys(n).forEach((function(t){r.children.push(e(t,n[t]))})),r}var c,l;switch(typeof n){case"string":c="".concat(t,' : "').concat(n,'"'),l=u.a.createElement(p["a"],null);break;case"number":c="".concat(t," : ").concat(n),l=u.a.createElement(S["a"],null);break;case"boolean":c="".concat(t," : ").concat(n),l=u.a.createElement(g["a"],null);break;default:c="".concat(t," : ").concat(n)}return{title:c,icon:l,key:Object(E["a"])()}},h=j,y=(n("IPWN"),n("9kvl")),A='{"squadName":"Super hero squad","homeTown":"Metro City","formed":2016,"secretBase":"Super tower","active":true,"members":[{"name":"Molecule Man","age":29,"secretIdentity":"Dan Jukes","powers":["Radiation resistance","Turning tiny","Radiation blast"]},{"name":"Madame Uppercut","age":39,"secretIdentity":"Jane Wilson","powers":["Million tonne punch","Damage resistance","Superhuman reflexes"]},{"name":"Eternal Flame","age":1000000,"secretIdentity":"Unknown","powers":["Immortality","Heat Immunity","Inferno","Teleportation","Interdimensional travel"]}]}';t["default"]=function(e){var t=Object(s["useState"])(null),n=Object(i["a"])(t,2),f=n[0],E=n[1],I=o["a"].useForm(),d=Object(i["a"])(I,1),O=d[0],p=function(){var e=O.getFieldValue("jsonInput");E(e)},S=function(){O.setFieldsValue({jsonInput:A}),p()},g=function(){O.resetFields(),p()},j=function(){var e=O.getFieldValue("jsonInput");O.setFieldsValue({jsonInput:JSON.stringify(JSON.parse(e),void 0,4)})},b=function(){var e=O.getFieldValue("jsonInput");O.setFieldsValue({jsonInput:JSON.stringify(JSON.parse(e))})},N=Object(y["f"])();return u.a.createElement(u.a.Fragment,null,u.a.createElement(r["a"],null,u.a.createElement("div",{style:{margin:"8px"}},u.a.createElement(c["b"],null,u.a.createElement(l["a"],{onClick:function(){return j()}},N.formatMessage({id:"JSON_VISUALIZATION_BUTTON_LABEL_FORMAT"})),u.a.createElement(l["a"],{onClick:function(){return b()}},N.formatMessage({id:"JSON_VISUALIZATION_BUTTON_LABEL_COMPRESS"})),u.a.createElement(l["a"],{onClick:function(){return g()}},N.formatMessage({id:"JSON_VISUALIZATION_BUTTON_LABEL_CLEAR"})),u.a.createElement(l["a"],{onClick:function(){return S()}},N.formatMessage({id:"JSON_VISUALIZATION_BUTTON_LABEL_EXAMPLE"})),u.a.createElement(l["a"],{type:"primary",onClick:function(){return p()}},N.formatMessage({id:"JSON_VISUALIZATION_BUTTON_LABEL_VISUALIZE"}))))),u.a.createElement(r["a"],null,u.a.createElement(a["a"],{span:10},u.a.createElement(o["a"],{form:O},u.a.createElement(o["a"].Item,{name:"jsonInput"},u.a.createElement(m["a"],{bordered:!1,style:{minHeight:"100vh",width:"100%",resize:"none"},placeholder:N.formatMessage({id:"JSON_VISUALIZATION_INPUT_PLACEHOLDER"})})))),u.a.createElement(a["a"],{span:14},u.a.createElement(h,{jsonStr:f}))))}},IPWN:function(e,t,n){}}]);