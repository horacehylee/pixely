(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),o=n(19),i=n.n(o),c=(n(28),n(29),n(4)),r={palette:{selectedIndex:0,colors:["#1a1c2c","#5d275d","#b13e53","#ef7d57","#ffcd75","#a7f070","#38b764","#257179","#29366f","#3b5dc9","#41a6f6","#73eff7","#f4f4f4","#94b0c2","#566c86","#333c57"],selectColor:Object(c.b)(function(e,t){e.selectedIndex=t}),selectedColor:Object(c.c)(function(e){return e.colors[e.selectedIndex]})},tool:{selected:"pencil",brushSize:1,increaseBrushSize:Object(c.b)(function(e,t){e.brushSize=Math.max(1,e.brushSize+t)}),decreaseBrushSize:Object(c.b)(function(e,t){e.brushSize=Math.max(1,e.brushSize-t)})},canvas:{width:20,height:20,zoom:30,increaseZoom:Object(c.b)(function(e,t){e.zoom=Math.min(100,e.zoom+t)}),decreaseZoom:Object(c.b)(function(e,t){if(e.zoom-t<=0)return e;e.zoom-=t})}},u=Object(c.d)(r),s=n(8);var f=function(e){var t=e.top,n=e.left,o=e.middle,i=e.right,c=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).liveMeasure,t=void 0===e||e,n=Object(l.useState)(),a=Object(s.a)(n,2),o=a[0],i=a[1],c=Object(l.useState)(),r=Object(s.a)(c,2),u=r[0],f=r[1],h=Object(l.useCallback)(function(e){f(e)},[]);return Object(l.useLayoutEffect)(function(){if(u){var e=function(){return window.requestAnimationFrame(function(){return i(function(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:"x"in t?t.x:t.top,left:"y"in t?t.y:t.left,x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top,right:t.right,bottom:t.bottom}}(u))})};if(e(),t)return window.addEventListener("resize",e),window.addEventListener("scroll",e),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",e)}}},[u,t]),[h,o,u]}({liveMeasure:!1}),r=Object(s.a)(c,2),u=r[0],f=r[1];return console.log(f),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",color:"#ADADAD"}},a.a.createElement("div",{style:{flex:0,height:48}},a.a.createElement("div",{style:{backgroundColor:"#333333",width:"100%",height:"100%"}},t)),a.a.createElement("div",{style:{flex:1,display:"flex"}},a.a.createElement("div",{style:{flex:0,maxWidth:64,minWidth:64}},a.a.createElement("div",{style:{backgroundColor:"#2A2D2E",width:"100%",height:"100%",boxShadow:"rgba(0, 0, 0, 0.4) 0px 5px 10px -10px inset"}},n)),a.a.createElement("div",{style:{flex:1}}),a.a.createElement("div",{style:{flex:0,maxWidth:48,minWidth:48}},a.a.createElement("div",{style:{backgroundColor:"#2A2D2E",width:"100%",height:"100%",boxShadow:"rgba(0, 0, 0, 0.4) 0px 5px 10px -10px inset"}},i)))),a.a.createElement("div",{style:{bottom:"0px",left:"64px",right:"48px",top:"48px",position:"fixed",display:"block"}},a.a.createElement("div",{ref:u,style:{backgroundColor:"#1E1E1E",width:"100%",height:"100%",boxShadow:"inset 0px 0px 5px 0px rgba(0, 0, 0, 0.4)"}},o)))},h=(n(32),function(){return a.a.createElement("div",{style:{display:"flex",height:"100%",alignItems:"center"}},a.a.createElement("h2",{style:{fontSize:"1.5rem",margin:0}},"Pixely"))}),m=function(){return a.a.createElement("div",{style:{height:"100%",display:"inline-flex",alignItems:"center"}},a.a.createElement("div",{className:"Menu-items"},a.a.createElement(h,null)),a.a.createElement("button",{className:"Menu-items Menu-button"},"File"),a.a.createElement("button",{className:"Menu-items Menu-button"},"Edit"),a.a.createElement("button",{className:"Menu-items Menu-button"},"Help"))},d=(n(33),function(){return a.a.createElement("svg",{viewBox:"0 0 18.713 18.713",width:"32",height:"32"},a.a.createElement("path",{d:"M13.367,6.434L8.872,1.895l-0.65-0.672L6.687,2.731c-2.624-0.375-4.51,0.59-5.178,1.777   C0.698,5.949,1.527,7.522,1.553,7.57c0.693,1.385,1.689,2.216,2.961,2.473c0.279,0.055,0.56,0.08,0.84,0.08   c1.322,0,2.644-0.561,3.649-1.135c0.271,0.188,0.601,0.299,0.954,0.299c0.93,0,1.686-0.759,1.686-1.691s-0.756-1.69-1.686-1.69   s-1.686,0.758-1.686,1.69c0,0.093,0.013,0.184,0.027,0.274C7.286,8.445,5.951,8.986,4.77,8.748C3.905,8.573,3.237,7.995,2.719,6.96   C2.714,6.95,2.203,5.957,2.654,5.157c0.38-0.676,1.371-1.111,2.883-1.275L5.302,4.119L3.13,6.299   c0.023,0.053,0.04,0.085,0.041,0.087c0.209,0.418,0.444,0.758,0.706,1.03l3.932-3.943c0.187-0.187,0.435-0.29,0.698-0.29   s0.513,0.103,0.698,0.29l4.771,4.787c0.385,0.385,0.385,1.014,0,1.399L7.774,15.88c-0.372,0.373-1.023,0.373-1.396,0l-4.772-4.787   c-0.187-0.186-0.289-0.434-0.289-0.699c0-0.264,0.102-0.514,0.289-0.7l0.515-0.518C1.828,8.874,1.568,8.512,1.335,8.098   l-0.66,0.663C0.24,9.197,0,9.777,0,10.394c0,0.617,0.24,1.197,0.675,1.633l4.772,4.787c0.435,0.436,1.012,0.676,1.628,0.676   c0.614,0,1.193-0.24,1.628-0.676l6.201-6.221L16.205,9.3l-0.361-0.365c0.683-0.373,0.987,2.744,0.987,2.744s0.954,7.439,1.802,0   C19.443,4.56,13.854,6.272,13.367,6.434z",fill:"#fff"}))}),b=function(){return a.a.createElement(d,null)},v=function(){return a.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 1792 1792"},a.a.createElement("path",{d:"M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",fill:"#fff"}))},x=function(){return a.a.createElement(v,null)},E=function(){return a.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 1792 1792"},a.a.createElement("path",{d:"M1698 94q94 94 94 226.5t-94 225.5l-225 223 104 104q10 10 10 23t-10 23l-210 210q-10 10-23 10t-23-10l-105-105-603 603q-37 37-90 37h-203l-256 128-64-64 128-256v-203q0-53 37-90l603-603-105-105q-10-10-10-23t10-23l210-210q10-10 23-10t23 10l104 104 223-225q93-94 225.5-94t226.5 94zm-1186 1378l576-576-192-192-576 576v192h192z",fill:"#fff"}))},g=function(){return a.a.createElement(E,null)},p=function(){return a.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 1792 1792"},a.a.createElement("path",{d:"M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z",fill:"#fff"}))},w=function(){return a.a.createElement(p,null)},y=function(){return a.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement("button",{className:"Tools-items Tools-button"},a.a.createElement(x,null)),a.a.createElement("button",{className:"Tools-items Tools-button"},a.a.createElement(w,null)),a.a.createElement("button",{className:"Tools-items Tools-button"},a.a.createElement(g,null)),a.a.createElement("button",{className:"Tools-items Tools-button"},a.a.createElement(b,null)))},j=(n(34),function(){return a.a.createElement("svg",{width:"30",height:"30",viewBox:"0 0 1792 1792"},a.a.createElement("path",{d:"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z",fill:"#fff"}))}),O=function(){var e=Object(c.f)(function(e){return e.palette.colors}),t=Object(c.e)(function(e){return e.palette.selectColor});return a.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.map(function(e,n){return a.a.createElement("button",{key:n,onClick:(l=n,function(){t(l)}),className:"ColorPalette-items ColorPalette-button",style:{backgroundColor:e,flex:1}});var l}),a.a.createElement("button",{className:"ColorPalette-items ColorPalette-button",style:{minHeight:48,maxHeight:48,flex:0}},a.a.createElement(j,null)))},z=function(e,t){var n=e.width,l=e.height,a=t.x,o=t.y;return!(a<0||a>=n||o<0||o>=l)},q=function(e){var t=e.min,n=e.max;return function(e){return Math.min(Math.max(e,t),n)}},C=(n(35),n(15)),M=a.a.memo(function(e){var t=e.width,n=e.height,l=e.animatedProps,o=e.canvasRefCallback,i=e.bindGesture;return a.a.createElement(C.a.canvas,Object.assign({},i(),{ref:o,width:t,height:n,className:"Canvas-pixelated",style:l}))}),S=n(22),k=function(){var e=Object(c.f)(function(e){return e.palette.selectedColor}),t=Object(c.f)(function(e){return e.tool.brushSize}),n=Object(c.f)(function(e){return e.canvas.zoom}),o=Object(c.f)(function(e){return e.canvas.width}),i=Object(c.f)(function(e){return e.canvas.height}),r=function(){return Object.freeze({ctx:u.current.getContext("2d"),width:o,height:i,brushSize:t})};Object(l.useEffect)(function(){var e=r();e.ctx.imageSmoothingEnabled=!0,function(e){var t=e.ctx,n=e.width,l=e.height;t.fillStyle="white",t.fillRect(0,0,n,l)}(e)},[]);var u=Object(l.useRef)(),f=Object(l.useCallback)(function(e){null!==e&&(u.current=e)},[]),h=Object(S.a)({onDrag:function(t){var l=Object(s.a)(t.previous,2),a=l[0],o=l[1],i=Object(s.a)(t.xy,2),c=i[0],f=i[1],h=u.current,m=Math.floor((a-h.offsetLeft-h.scrollLeft)/n),d=Math.floor((o-h.offsetTop-h.scrollTop)/n),b=Math.floor((c-h.offsetLeft-h.scrollLeft)/n),v=Math.floor((f-h.offsetTop-h.scrollTop)/n);z(r(),{x:m,y:d})&&function(e,t){var n=t.x0,l=t.y0,a=t.x1,o=t.y1,i=t.color,c=e.ctx,r=e.width,u=e.height,s=e.brushSize,f=q({min:0,max:r-1}),h=q({min:0,max:u-1});n=f(n),l=h(l),a=f(a),o=h(o);for(var m=Math.abs(a-n),d=Math.abs(o-l),b=n<a?1:-1,v=l<o?1:-1,x=m-d;c.fillStyle=i,c.fillRect(n-Math.floor(s/2),l-Math.floor(s/2),s,s),n!==a||l!==o;){var E=2*x;E>-d&&(x-=d,n+=b),E<m&&(x+=m,l+=v)}}(r(),{x0:m,y0:d,x1:b,y1:v,color:e})}}),m=Object(C.b)(function(){return{width:n*o,height:n*i}}),d=Object(s.a)(m,2),b=d[0],v=d[1];return Object(l.useEffect)(function(){v({width:n*o,height:n*i})},[o,i,n,v]),a.a.createElement(M,{canvasRefCallback:f,width:o,height:i,bindGesture:h,animatedProps:b})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(function(){return a.a.createElement(c.a,{store:u},a.a.createElement(f,{top:a.a.createElement(m,null),left:a.a.createElement(y,null),middle:a.a.createElement(k,null),right:a.a.createElement(O,null)}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.90a5f635.chunk.js.map