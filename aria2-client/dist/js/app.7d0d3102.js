(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({Completed:"Completed","new-task":"new-task",servers:"servers",settings:"settings"}[e]||e)+"."+{Completed:"0cd086e3","chunk-a9b35f96":"e3da173c","new-task":"33577ddb",servers:"77947816",settings:"58d7a33d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-a9b35f96":1,"new-task":1,servers:1,settings:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({Completed:"Completed","new-task":"new-task",servers:"servers",settings:"settings"}[e]||e)+"."+{Completed:"31d6cfe0","chunk-a9b35f96":"84e0fe4b","new-task":"19e96897",servers:"413ee6db",settings:"a74708ca"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"51e8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("b680");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("el-select",{staticStyle:{width:"83%"},attrs:{size:"mini","value-key":"name"},on:{change:e.switchServer},model:{value:e.selectedServer,callback:function(t){e.selectedServer=t},expression:"selectedServer"}},e._l(e.servers,(function(e,t){return n("el-option",{key:t,attrs:{value:e,label:e.name||e.host+":"+e.port}})})),1),n("div",{staticClass:"status"},["已连接"===e.connectionStatus?n("i",{staticClass:"success"}):n("i",{staticClass:"fail"}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v(e._s(e.connectionStatus))])]),n("router-link",{attrs:{to:"/new"}},[n("i",{staticClass:"el-icon-plus"}),e._v("新建下载")]),n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"el-icon-caret-right"}),e._v("正在下载("+e._s(Number(e.globalStat.numWaiting)+Number(e.globalStat.numActive))+")")]),n("router-link",{attrs:{to:"/completed"}},[n("i",{staticClass:"el-icon-check"}),e._v("已完成("+e._s(e.globalStat.numStopped)+")")]),n("router-link",{attrs:{to:"/settings"}},[n("i",{staticClass:"el-icon-s-tools"}),e._v("设置")]),n("router-link",{attrs:{to:"/servers"}},[n("i",{staticClass:"el-icon-s-grid"}),e._v("服务器列表")])],1),n("div",{staticClass:"content"},[n("keep-alive",[n("router-view",{attrs:{aria2:e.aria2},on:{"servers-changed":function(t){e.servers=t}}})],1),n("div",{staticClass:"global-stat"},[n("span",[n("i",{staticClass:"el-icon-sort-up"}),e._v(e._s(e.getSpeed(e.globalStat.uploadSpeed)))]),n("span",[n("i",{staticClass:"el-icon-sort-down"}),e._v(e._s(e.getSpeed(e.globalStat.downloadSpeed)))])])],1)])},o=[],s=n("1da1"),i=(n("96cf"),n("2909")),c=n("d4ec"),l=n("bee2"),u=n("262e"),p=n("2caf"),d=(n("99af"),n("d3b7"),n("2ca0"),n("fb6a"),n("faa1")),f=n.n(d),v=function(e){Object(u["a"])(n,e);var t=Object(p["a"])(n);function n(e){var r;return Object(c["a"])(this,n),r=t.call(this),r.options=e,r.websocket=new WebSocket("ws://".concat(e.host,":").concat(e.port,"/jsonrpc")),r.connectPromise=new Promise((function(e,t){r.websocket.addEventListener("open",(function(){e()})),r.websocket.addEventListener("error",(function(e){t("WS_CONNECTION_ERROR")}))})),r.lastId=1,r.callbacks={},r.websocket.addEventListener("message",(function(e){var t=JSON.parse(e.data);if(t.method&&t.method.startsWith("aria2.on")){var n;(n=r).emit.apply(n,[t.method.slice(8)].concat(Object(i["a"])(t.params)));var a=r[t.method.slice(6)];"function"===typeof a&&a.apply(void 0,Object(i["a"])(t.params))}else{var o=r.callbacks[t.id];delete r.callbacks[t.id],"function"==typeof o&&o(t)}})),r}return Object(l["a"])(n,[{key:"ready",value:function(){return this.connectPromise}},{key:"close",value:function(){var e=this;return this.websocket.close(),new Promise((function(t,n){e.websocket.addEventListener("close",(function(){t()}))}))}}]),n}(f.a);["addUri","addTorrent","getPeers","addMetalink","remove","pause","forcePause","pauseAll","forcePauseAll","unpause","unpauseAll","forceRemove","changePosition","tellStatus","getUris","getFiles","getServers","tellActive","tellWaiting","tellStopped","getOption","changeUri","changeOption","getGlobalOption","changeGlobalOption","purgeDownloadResult","removeDownloadResult","getVersion","getSessionInfo","shutdown","forceShutdown","getGlobalStat","saveSession"].forEach((function(e){v.prototype[e]=function(){for(var t=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return this.connectPromise.then((function(){return new Promise((function(n,a){var o=t.lastId++;t.callbacks[o]=function(e){e.error?a(e.error):n(e.result)},t.websocket.readyState===WebSocket.OPEN?t.websocket.send(JSON.stringify({jsonrpc:"2.0",id:o,method:"aria2.".concat(e),params:["token:".concat(t.options.secret)].concat(r)})):a("WS_CONNECTION_ERROR")}))}))}}));var h=v,m={data:function(){var e=JSON.parse(localStorage.getItem("aria2Servers"))||[];return{globalStat:{},servers:e,selectedServer:null,connectionStatus:"连接中...",aria2:null}},methods:{switchServer:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("switch server"),console.log("关闭现有服务器..."),null===(n=e.aria2)||void 0===n||n.close(),e.globalStat={},console.log("连接新的服务器..."),e.connectionStatus="连接中...",r=new h(e.selectedServer),e.aria2=r,t.prev=8,t.next=11,r.ready();case 11:e.connectionStatus="已连接",t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](8),e.connectionStatus="连接失败";case 17:case"end":return t.stop()}}),t,null,[[8,14]])})))()},startIntervalUpdate:function(){var e=this;this.intervalId=setInterval(Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.aria2.getGlobalStat();case 3:e.globalStat=t.sent,t.next=15;break;case 6:if(t.prev=6,t.t0=t["catch"](0),"WS_CONNECTION_ERROR"!=t.t0){t.next=14;break}e.$alert("连接失败"),console.log(e.intervalId),clearInterval(e.intervalId),t.next=15;break;case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,6]])}))),3e3),console.log("app interval id",this.intervalId)},getSpeed:function(e){return e<1024?e+"B/s":e>1024&&e<Math.pow(1024,2)?Math.ceil(e/1024)+"KB/s":e>Math.pow(1024,2)&&e<Math.pow(1024,3)?Math.ceil(e/Math.pow(1024,2))+"MB/s":e>Math.pow(1024,3)?Math.ceil(e/Math.pow(1024,3))+"GB/s":void 0}},created:function(){console.log("app created"),this.selectedServer=this.servers[0],this.switchServer()},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.aria2.on("DownloadStart",function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("有任务开始了",n.gid),t.next=3,e.aria2.getGlobalStat();case 3:e.globalStat=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.aria2.on("DownloadComplete",function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("有任务完成了",n.gid),t.next=3,e.aria2.getGlobalStat();case 3:e.globalStat=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.prev=2,t.next=5,e.aria2.getGlobalStat();case 5:e.globalStat=t.sent,e.startIntervalUpdate(),t.next=16;break;case 9:if(t.prev=9,t.t0=t["catch"](2),"WS_CONNECTION_ERROR"!=t.t0){t.next=15;break}e.$alert("连接失败"),t.next=16;break;case 15:throw t.t0;case 16:case"end":return t.stop()}}),t,null,[[2,9]])})))()},watch:{aria2:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return clearInterval(e.intervalId),t.next=3,e.aria2.getGlobalStat();case 3:e.globalStat=t.sent,e.startIntervalUpdate();case 5:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){clearInterval(this.intervalId)}},b=m,g=(n("7c55"),n("2877")),w=Object(g["a"])(b,a,o,!1,null,null,null),k=w.exports,S=(n("3ca3"),n("ddb0"),n("8c4f")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"downloading"},[n("div",{staticClass:"toolsbar"},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-video-play",size:"small"},on:{click:function(t){return e.execSelected("unpause")}}},[e._v("开始")]),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-video-pause",size:"small"},on:{click:function(t){return e.execSelected("pause")}}},[e._v("暂停")]),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-delete",size:"small"},on:{click:function(t){return e.execSelected("remove")}}},[e._v("删除")]),n("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入任务名称",size:"small",type:"text"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),n("el-table",{ref:"taskTable",staticStyle:{width:"100%"},attrs:{data:e.visibleTasks,"row-key":e.getRowKeys,"empty-text":"暂无进行中任务",stripe:""},on:{"row-click":e.clickRow}},[n("el-table-column",{attrs:{width:"50px",type:"selection","reserve-selection":!0}}),n("el-table-column",{attrs:{prop:"status",label:"状态",width:"80px",sortable:""}}),n("el-table-column",{attrs:{label:"名称",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{placement:"bottom-start",title:"",width:"200",trigger:"hover",content:e.getFilename(t.row)}},[n("div",{attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(e.getFilename(t.row)))])])]}}])}),n("el-table-column",{attrs:{label:"进度",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-progress",{attrs:{percentage:e.getPercent(t.row)}})]}}])}),n("el-table-column",{attrs:{label:"速度",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getSpeed(t.row.downloadSpeed))+" ")]}}])}),n("el-table-column",{attrs:{label:"详情"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"TaskDetail",params:{gid:e.row.gid}}},nativeOn:{click:function(e){e.stopPropagation()}}},[n("i",{staticClass:"more el-icon-more"})])]}}])})],1)],1)},x=[],O=n("b85c"),_=(n("caad"),n("2532"),n("8f40"),n("acef"),n("ac1f"),n("1276"),n("b65f"),{name:"Downloading",props:["aria2"],data:function(){return{tasks:[],searchText:"",sortColumn:""}},computed:{visibleTasks:function(){var e=this;return""==this.searchText?this.tasks:this.tasks.filter((function(t){return t.files[0].path.toLowerCase().includes(e.searchText.toLowerCase())}))}},watch:{aria2:function(){this.tasks=[],this.updateList()}},created:function(){var e=this;this.updateList(),this.aria2.on("DownloadStart",(function(){e.updateList()})),this.aria2.on("DownloadComplete",(function(){e.updateList()})),this.intervalId=setInterval((function(){try{e.updateList()}catch(t){if("WS_CONNECTION_ERROR"!=t)throw t;clearInterval(e.intervalId)}}),1e3)},methods:{getRowKeys:function(e){return e.index},updateList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=[],t.t1=i["a"],t.next=5,e.aria2.tellActive();case 5:return t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.t4=i["a"],t.next=10,e.aria2.tellWaiting(0,100);case 10:t.t5=t.sent,t.t6=(0,t.t4)(t.t5),e.tasks=t.t0.concat.call(t.t0,t.t3,t.t6),t.next=19;break;case 15:throw t.prev=15,t.t7=t["catch"](0),e.tasks=[],t.t7;case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()},execSelected:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("remove"!=e){n.next=9;break}return n.prev=1,n.next=4,t.$confirm("确定删除吗?");case 4:n.next=9;break;case 6:return n.prev=6,n.t0=n["catch"](1),n.abrupt("return");case 9:r=t.$refs.taskTable.selection,a=Object(O["a"])(r),n.prev=11,a.s();case 13:if((o=a.n()).done){n.next=29;break}if(s=o.value,n.prev=15,"pause"!=e||"paused"!=s.status){n.next=18;break}return n.abrupt("continue",27);case 18:if("unpause"!=e||"active"!=s.status){n.next=20;break}return n.abrupt("continue",27);case 20:return n.next=22,t.aria2[e](s.gid);case 22:n.next=27;break;case 24:throw n.prev=24,n.t1=n["catch"](15),n.t1;case 27:n.next=13;break;case 29:n.next=34;break;case 31:n.prev=31,n.t2=n["catch"](11),a.e(n.t2);case 34:return n.prev=34,a.f(),n.finish(34);case 37:t.updateList();case 38:case"end":return n.stop()}}),n,null,[[1,6],[11,31,34,37],[15,24]])})))()},getFilename:function(e){var t,n,r,a,o;return null!==(t=e.files)&&void 0!==t&&t[0].path?e.files[0].path.split("/").at(-1):null!==(n=null===(r=e.files)||void 0===r||null===(a=r.uris)||void 0===a||null===(o=a[0])||void 0===o?void 0:o.uri.split("/").at(-1))&&void 0!==n?n:"未知"},getPercent:function(e){return 0==e.completedLength?0:Math.trunc(e.completedLength/e.totalLength*100)},getSpeed:function(e){return e<1024?e+"B/s":e>1024&&e<Math.pow(1024,2)?Math.ceil(e/1024)+"KB/s":e>Math.pow(1024,2)&&e<Math.pow(1024,3)?Math.ceil(e/Math.pow(1024,2))+"MB/s":e>Math.pow(1024,3)?Math.ceil(e/Math.pow(1024,3))+"GB/s":void 0},clickRow:function(e){this.$refs.taskTable.toggleRowSelection(e)}},beforeDestroy:function(){clearInterval(this.intervalId)},components:{}}),C=_,R=(n("af6d"),Object(g["a"])(C,y,x,!1,null,"022ebf3b",null)),j=R.exports;r["default"].use(S["a"]);var I=[{path:"/",name:"Downloading",component:j},{path:"/task/:gid",name:"TaskDetail",component:function(){return n.e("chunk-a9b35f96").then(n.bind(null,"8b46"))}},{path:"/completed",name:"Completed",component:function(){return n.e("Completed").then(n.bind(null,"cc90"))}},{path:"/new",name:"New",component:function(){return n.e("new-task").then(n.bind(null,"10df"))}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))}},{path:"/servers",name:"Servers",component:function(){return n.e("servers").then(n.bind(null,"5bc3"))}}],E=new S["a"]({routes:I}),N=E,T=n("2f62");r["default"].use(T["a"]);var M=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=n("5c96"),L=n.n(P);n("0fae");r["default"].use(L.a),r["default"].config.productionTip=!1,r["default"].filter("fixed",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toFixed(t)}));var D=new r["default"]({router:N,store:M,render:function(e){return e(k)}}).$mount("#app");window.app=D},"7c55":function(e,t,n){"use strict";n("2395")},af6d:function(e,t,n){"use strict";n("51e8")}});
//# sourceMappingURL=app.7d0d3102.js.map