(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userPage"],{"187d":function(t,e,r){"use strict";var n=r("c5e5"),i=r.n(n);i.a},ac6a:function(t,e,r){for(var n=r("cadf"),i=r("0d58"),a=r("2aba"),s=r("7726"),u=r("32e9"),c=r("84f2"),o=r("2b4c"),l=o("iterator"),d=o("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(f),m=0;m<h.length;m++){var v,g=h[m],b=f[g],L=s[g],w=L&&L.prototype;if(w&&(w[l]||u(w,l,p),w[d]||u(w,d,g),c[g]=p,b))for(v in n)w[v]||a(w,v,n[v],!0)}},b510:function(t,e,r){"use strict";r("ac6a"),r("96cf");var n=r("3040"),i=(r("7514"),r("15fe")),a=i["a"].Object.extend("reply"),s=function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=new i["a"].Query("reply"),t.next=3,r.equalTo("tid",e).addDescending("createdAt").find();case 3:if(n=t.sent,!(n.length>0)){t.next=8;break}return t.abrupt("return",n);case 8:return t.abrupt("return",[]);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=new i["a"].Query("reply"),t.next=3,r.equalTo("uid",e).addDescending("createdAt").find();case 3:if(n=t.sent,!(n.length>0)){t.next=8;break}return t.abrupt("return",n);case 8:return t.abrupt("return",[]);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),c=function(t,e){var r=i["a"].User.current();if(!r)return Promise.reject({code:4112});var n=new a;return n.set("content",e),n.set("tid",t.id),n.set("uid",r.id),n.set("username",r.get("username")),n.set("title",t.title),n.save()},o=r("9a1b"),l=r("acdf"),d=r("5a0c"),p=r.n(d),f=r("9b60");r.d(e,"a",function(){return h}),r.d(e,"c",function(){return m}),r.d(e,"b",function(){return v});var h=function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s(e).catch(function(t){return console.error(t),[]});case 2:if(r=t.sent,0!==r.length){t.next=5;break}return t.abrupt("return",[]);case 5:return t.next=7,o["b"](r.map(function(t){return t.get("uid")}));case 7:return n=t.sent,i={},n.forEach(function(t){i[t.id]=t}),t.abrupt("return",r.map(function(t){var e=i[t.get("uid")]||{get:function(){}};return{uid:t.get("uid"),content:f["a"].render(t.get("content")),username:e.get("username"),created_at:p()(t.createdAt).format("YYYY-MM-DD HH:mm"),avatar:e.get("avatar")}}));case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l["a"])(c(e,r)));case 1:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),v=function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:if(r=t.sent,0!==r.length){t.next=5;break}return t.abrupt("return",[]);case 5:return t.abrupt("return",r.map(function(t){return{tid:t.get("tid"),uid:t.get("uid"),content:f["a"].render(t.get("content")),title:t.get("title"),created_at:p()(t.createdAt).format("YYYY-MM-DD HH:mm")}}));case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},c5e5:function(t,e,r){},d9fb:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-page"},[r("div",{staticClass:"user-info"},[r("figure",{staticClass:"image is-128x128 is-avatar"},[r("img",{staticClass:"is-rounded",attrs:{src:t.user.info.avatar}})]),r("h4",{staticClass:"is-4 title has-text-centered"},[t._v(t._s(t.user.info.username))])]),r("div",{staticClass:"divider"}),r("div",{staticClass:"user-topics"},[r("h5",{staticClass:"is-5 title"},[t._v("Ta 的话题")]),r("div",{staticClass:"topics"},t._l(t.user.topics,function(e){return r("div",{key:e.id,staticClass:"topic"},[r("h6",{staticClass:"is-6 title"},[r("router-link",{attrs:{to:{name:"topicDetail",params:{id:e.id}}}},[t._v(t._s(e.title))])],1),r("p",{staticClass:"is-6 subtitle"},[r("small",[t._v(t._s(e.created_at))])])])}))]),r("div",{staticClass:"divider"}),r("div",{staticClass:"user-replys"},[r("h5",{staticClass:"is-5 title"},[t._v("Ta 的回复")]),r("div",{staticClass:"topics"},t._l(t.user.replys,function(e){return r("div",{key:e.id,staticClass:"topic"},[r("h6",{staticClass:"is-6 title"},[r("router-link",{attrs:{to:{name:"topicDetail",params:{id:e.tid}}}},[t._v(t._s(e.title))])],1),r("div",{staticClass:"is-6 subtitle"},[r("small",[t._v(t._s(e.created_at))]),r("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(e.content)}})])])}))])])},i=[],a=(r("96cf"),r("3040")),s=(r("cadf"),r("551c"),r("097d"),r("c24f")),u=r("0fac"),c=r("b510"),o={data:function(){return{user:{info:{},topics:[],replys:[]},uid:""}},methods:{init:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.dispatch("app/setLoading",!0),t.next=3,Object(s["a"])(this.uid);case 3:return e=t.sent,console.log(e),this.$set(this.user,"info",e),t.next=8,Object(u["c"])(this.uid,5);case 8:return r=t.sent,console.log(r),this.$set(this.user,"topics",r.list),t.next=13,Object(c["b"])(this.uid);case 13:n=t.sent,console.log(n),this.$set(this.user,"replys",n),this.$store.dispatch("app/setLoading",!1);case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){this.uid=this.$route.params.uid,this.init()}},l=o,d=(r("187d"),r("2877")),p=Object(d["a"])(l,n,i,!1,null,"08fa94fa",null);p.options.__file="_uid.vue";e["default"]=p.exports}}]);
//# sourceMappingURL=userPage.91ea1eb6.js.map