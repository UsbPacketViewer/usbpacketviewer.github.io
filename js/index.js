(function(e){function t(t){for(var o,a,l=t[0],u=t[1],i=t[2],f=0,b=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"4a64":function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},"98db":function(e,t,n){"use strict";n("4a64")},be66:function(e,t){e.exports=ElementPlus},cd49:function(e,t,n){"use strict";n.r(t);n("ed3a"),n("2a25"),n("7a4c"),n("cfae");var o=n("8bbf"),r=Object(o["createTextVNode"])();function c(e,t,n,c,a,l){var u=Object(o["resolveComponent"])("el-input"),i=Object(o["resolveComponent"])("scan-bar-code");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(u,{modelValue:e.testInput,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.testInput=t})},null,8,["modelValue"]),r,Object(o["createVNode"])(i,{onNewCode:t[1]||(t[1]=function(t,n){return e.testInput=n})})],64)}var a=Object(o["createTextVNode"])("[--]"),l=Object(o["createTextVNode"])("扫描条码"),u=Object(o["createTextVNode"])(),i=Object(o["createTextVNode"])("选择摄像头"),d=Object(o["createElementVNode"])("video",{id:"ScanVideo",class:"ScanVideo"},null,-1);function f(e,t,n,r,c,f){var b=Object(o["resolveComponent"])("el-button"),s=Object(o["resolveComponent"])("el-tag"),p=Object(o["resolveComponent"])("el-option"),O=Object(o["resolveComponent"])("el-select"),j=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(b,{onClick:e.StartScan},{default:Object(o["withCtx"])((function(){return[a]})),_:1},8,["onClick"]),Object(o["createVNode"])(j,{modelValue:e.showDialog,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.showDialog=t}),width:"100",onClose:e.onClose},{title:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{effect:"dark"},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),u,Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])((function(){return[i]})),_:1}),Object(o["createVNode"])(O,{modelValue:e.camera,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.camera=t})},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.cameraList,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:e,value:e},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"])]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.status),1)]})),_:1}),d]})),_:1},8,["modelValue","onClose"])],64)}n("840d"),n("a256"),n("3b45");var b=n("1d9c"),s=Object(o["defineComponent"])({props:{modelValue:String},emits:["update:modelValue","newCode"],setup:function(e,t){var n=Object(o["toRefs"])(e),r=(n.modelValue,Object(o["ref"])(!1)),c=Object(o["ref"])(""),a=Object(o["ref"])([]),l={},u=Object(o["ref"])(""),i=new b["BrowserMultiFormatReader"];function d(){i.reset(),i.listVideoInputDevices().then((function(e){console.log("video:",e),l={},e.length<1?(a.value=["fake1","fake2"],l["fake1"]="fake1",l["fake2"]="fake2",u.value="摄像头数量为0"):a.value=e.map((function(e){return l[e.label]=e.deviceId,e.label})),a.value.length>0&&(r.value=!0,c.value=a.value[0])})).catch((function(e){u.value="查找摄像头失败 "+e.toString(),console.error(e)}))}function f(){c.value=""}return Object(o["watch"])(c,(function(){console.log("camera changed",c.value,l[c.value]);var e=l[c.value];e&&(i.reset(),i.decodeOnceFromVideoDevice(e,"ScanVideo").then((function(e){var n=e.getText();t.emit("newCode",n),r.value=!1})).catch((function(e){console.warn(e),u.value="摄像头扫码失败 "+e.toString()})))})),{StartScan:d,showDialog:r,camera:c,cameraList:a,status:u,onClose:f}}}),p=(n("98db"),n("b3f2")),O=n.n(p);const j=O()(s,[["render",f]]);var v=j,m=Object(o["defineComponent"])({name:"App",components:{ScanBarCode:v},setup:function(e,t){var n=Object(o["ref"])("test");return{testInput:n}}});const h=O()(m,[["render",c]]);var V=h,g=n("be66"),w=n.n(g),C=Object(o["createApp"])(V);C.config.globalProperties.$t=function(e){return e},C.use(w.a,{size:"small"}).mount("#app")}});