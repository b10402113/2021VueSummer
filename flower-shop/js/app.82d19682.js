(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2a9fddb8":"36114e85","chunk-2d6f5974":"b64e4a35","chunk-b90d1776":"fbfe2c7e"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-2a9fddb8":1,"chunk-2d6f5974":1,"chunk-b90d1776":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2a9fddb8":"a1648285","chunk-2d6f5974":"60893539","chunk-b90d1776":"ce156fce"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"12ae":function(t,e,n){t.exports=n.p+"img/loading.a6178f44.gif"},1936:function(t,e,n){t.exports=n.p+"img/banner.ee0bea4c.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={},s=i,c=(n("034f"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,null,null),l=u.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("div",{staticClass:"swiper"},[a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},[a("van-swipe-item",{staticClass:"van-swiper"},[a("img",{attrs:{src:n("1936"),alt:""}})])],1)],1),t._m(1),a("div",{staticClass:"scroll-box"},[t.festivalLoading?a("img",{staticClass:"loadingImg",attrs:{src:n("12ae"),alt:""}}):a("div",{staticClass:"box-wrapper"},t._l(t.hottestFestival,(function(e,n){return a("router-link",{key:n,attrs:{to:{name:"Festival",params:{name:e}}}},[a("div",{staticClass:"box"},[a("p",[t._v(t._s(e))])])])})),1)]),t._m(2),a("div",{staticClass:"flower-grid"},[t.isLoading?a("img",{staticClass:"loadingImg",attrs:{src:n("12ae"),alt:""}}):a("van-grid",{attrs:{"column-num":3,clickable:""}},t._l(t.hottestFlower,(function(t,e){return a("van-grid-item",{key:e,attrs:{icon:t.img,text:t.name,to:{path:"/category",query:{label:t.name}}}})})),1)],1),t._m(3),a("div",{staticClass:"stores-around"},[a("van-button",{attrs:{type:"primary",block:"",color:"#ddeaf8"},on:{click:t.findStore}},[t._v("點我查找")])],1)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-title"},[n("p",[t._v("花卉市場")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-sub-title"},[n("p",[n("span",[t._v("節日推薦")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-sub-title"},[n("p",[n("span",[t._v("熱門花卉")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-sub-title"},[n("p",[n("span",[t._v("附近店家")])])])}],h=(n("ac1f"),n("1276"),n("159b"),n("b0c0"),{name:"Home",data:function(){return{active:"0",value:"",hottestFlower:[],isLoading:!0,festivalLoading:!0,hottestFestival:[],newArray:[]}},mounted:function(){var t=this;this.axios.get("/hottestFlower").then((function(e){var a=e.data.split(" ");a.pop();for(var r=[],o=0;o<a.length;o++)r.push(t.axios.get("/getImage?label=".concat(a[o])));Promise.all(r).then((function(e){var r=[];e.forEach((function(t,e){var o={};o.name=a[e],0!==t.data.length?o.img=t.data[0].image:o.img=n("c069"),r.push(o)})),t.hottestFlower=r,t.isLoading=!1}))})),this.axios.get("/upcomingfestival").then((function(e){for(var n=e.data,a=0;a<n.length;a++)t.hottestFestival.push(n[a].name);t.festivalLoading=!1}))},methods:{findStore:function(){window.location.href="https://www.google.com.tw/maps/search/%E8%8A%B1%E5%BA%97"}}}),m=h,v=(n("8a0a"),Object(c["a"])(m,d,p,!1,null,"36b8be30",null)),g=v.exports;a["a"].use(f["a"]);var b=[{path:"/",name:"Home",component:g},{path:"/category",name:"Category",component:function(){return n.e("chunk-b90d1776").then(n.bind(null,"4886"))}},{path:"/detail",name:"Detail",component:function(){return n.e("chunk-2d6f5974").then(n.bind(null,"c84b"))}},{path:"/festival/:name",name:"Festival",component:function(){return n.e("chunk-2a9fddb8").then(n.bind(null,"325e"))}}],y=new f["a"]({routes:b}),w=y,_=(n("c860"),n("5cfb"),n("b970")),k=(n("157a"),n("c67e")),C=n.n(k),x=n("bc3a"),E=n.n(x);E.a.defaults.baseURL="/api",E.a.defaults.timeout=1e4,a["a"].use(C.a,E.a),a["a"].use(_["a"]),a["a"].config.productionTip=!1,new a["a"]({router:w,render:function(t){return t(l)}}).$mount("#app")},6239:function(t,e,n){},"85ec":function(t,e,n){},"8a0a":function(t,e,n){"use strict";n("6239")},c069:function(t,e,n){t.exports=n.p+"img/default.e76e6588.jpeg"},c860:function(t,e,n){}});
//# sourceMappingURL=app.82d19682.js.map