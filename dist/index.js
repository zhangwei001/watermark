!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d(t,{default:()=>c});var a=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,s={id:"0000000000",width:230,height:100,fillStyle:"#ccc",startX:0,rotate:-30,startY:0,fontSize:12,opacity:1,font:"10px sans-serif",text:"watermark",textFamily:"Roboto-Regular",target:document.querySelector("body"),zIndex:2147483647,isCard:!1};const c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cfg=o(o(o({},s),t),{},{id:this.getRandomId()}),this.createObserver(),this.createCanvas(),this.load()}var t,r;return t=e,(r=[{key:"createObserver",value:function(){this.createDomObserver(),this.createBodyObserver()}},{key:"createDomObserver",value:function(){var e=this;this.observer=new a((function(){e.remove()}))}},{key:"createBodyObserver",value:function(){var e=this;this.bodyObserver=new a((function(t){t[0].removedNodes.length&&(t[0].removedNodes[0].id.trim()&&t[0].removedNodes[0].id!==e.get("id")||e.load())}))}},{key:"set",value:function(e,t){this._cfg[e]=t}},{key:"get",value:function(e){return this._cfg[e]}},{key:"load",value:function(){var e=this.get("canvas"),t=this.get("startX"),r=this.get("startY"),o=e.toDataURL("image/png",1),n=this.get("target"),i=document.createElement("div"),a=["height: 100% !important","width: 100% !important","position: fixed !important","background: url(".concat(o,")"),"z-index:".concat(this.get("zIndex")),"background-repeat:repeat !important","top:".concat(r,"px"),"left:".concat(t,"px"),"pointer-events: none !important","visibility: visible !important"];this.set("id",this.getRandomId()),i.setAttribute("id",this.get("id")),i.style.cssText=a.join(";"),this.set("dom",i),n.appendChild(i),this.observe()}},{key:"observe",value:function(){this.domObserve(),this.bodyObserve()}},{key:"domObserve",value:function(){var e=this.get("dom");this.observer.observe(e,{childList:!0,attributes:!0,characterData:!0})}},{key:"bodyObserve",value:function(){var e=document.querySelector("body");this.bodyObserver.observe(e,{childList:!0})}},{key:"getRandomId",value:function(){if(window.crypto&&window.crypto.getRandomValues){var e=new Uint32Array(1),t=window.crypto.getRandomValues(e);return"".concat(t[0])}var r=this.get(id);return"".concat(r).split("").map((function(e){return Math.round(Math.random())})).join("")}},{key:"remove",value:function(){var e=document.querySelector("body"),t=this.get("dom");e.removeChild(t),this.set("dom",null)}},{key:"createCanvas",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d"),r=this.get("height"),o=this.get("width");e.height=r,e.width=o;var n=this.get("font"),i=this.get("text"),a=this.get("rotate"),s=this.get("fillStyle"),c=this.get("opacity");t.fillStyle=s,t.font=n,t.globalAlpha=c,t.rotate(a/Math.PI*2),t.translate(0,r/2),t.fillText(i,0,r/2),this.set("canvas",e),this.set("ctx",t)}}])&&i(t.prototype,r),e}();return t.default})()}));