webpackJsonp([9],{"1Zag":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("IvJb"),a=n("H93t"),s=n.n(a),o=(n("TsY+"),n("4YfN")),u=n.n(o),i=n("9rMa"),c={name:"Header",data:function(){return{}},computed:u()({},Object(i.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:u()({},Object(i.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}}),components:{}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?[n("h1",[t._v("Let's Share")]),t._v(" "),n("i",{staticClass:"edit el-icon-edit"}),t._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username,title:t.user.username}}),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"my"}},[t._v("我的")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:t.onLogout}},[t._v("注销")])])])])]:[n("h1",[t._v("Let's Share")]),t._v(" "),n("p",[t._v("精品博客汇聚")]),t._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/register"}},[n("el-button",[t._v("立即注册")])],1),t._v(" "),n("router-link",{attrs:{to:"/login"}},[n("el-button",[t._v("立即登录")])],1)],1)]],2)},staticRenderFns:[]};var d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",[this._v("Footer")])])}]};var f={name:"App",components:{Header:n("C7Lr")(c,l,!1,function(t){n("uf0K")},"data-v-66f7aa29",null).exports,Footer:n("C7Lr")({name:"footer",data:function(){return{}},components:{}},d,!1,function(t){n("YGZN")},"data-v-1984c3e8",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var p=n("C7Lr")(f,h,!1,function(t){n("1Zag")},null,null).exports,m=n("zO6J"),g=n("lC5x"),v=n.n(g),L=n("J0Oq"),b=n.n(L),w=n("rVsN"),_=n.n(w),k=n("aozt"),x=n.n(k);function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new _.a(function(r,s){var o={url:t,method:e};"get"===e.toLowerCase()?o.params=n:o.data=n,x()(o).then(function(t){console.log(t.data),"ok"===t.data.status?r(t.data):(a.Message.error(t.data.msg),s(t.data))}).catch(function(t){a.Message.error("网络异常"),s({msg:"网络异常"})})})}x.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",x.a.defaults.baseURL="http://blog-server.hunger-valley.com",x.a.defaults.withCredentials=!0;var O="/auth/register",q="/auth/login",A="/auth/logout",E="/auth",F=function(t){var e=t.username,n=t.password;return C(O,"POST",{username:e,password:n})},H=function(t){var e=t.username,n=t.password;return C(q,"POST",{username:e,password:n})},N=function(){return C(A)},T=function(){return C(E)},U={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return H({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,s=e.password;return b()(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F({username:a,password:s});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return b()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,T();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()},logout:function(t){var e=this,n=t.commit;return b()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()}}};r.default.use(i.a);var y=new i.a.Store({modules:{auth:U,blog:{state:{},getters:{},mutations:{},actions:{}}}});r.default.use(m.a),window.store=y;var J=new m.a({routes:[{path:"/",component:function(){return n.e(2).then(n.bind(null,"OtQl"))}},{path:"/Login",component:function(){return n.e(4).then(n.bind(null,"F/pk"))}},{path:"/Register",component:function(){return n.e(3).then(n.bind(null,"xVOn"))}},{path:"/Create",component:function(){return n.e(0).then(n.bind(null,"JVne"))},meta:{requiresAuth:!0}},{path:"/Detail/:blogId",component:function(){return n.e(5).then(n.bind(null,"wD2d"))}},{path:"/Edit/:blogId",component:function(){return n.e(7).then(n.bind(null,"RHcW"))},meta:{requiresAuth:!0}},{path:"/My",component:function(){return n.e(6).then(n.bind(null,"CrqJ"))},meta:{requiresAuth:!0}},{path:"/User/:userId",component:function(){return n.e(1).then(n.bind(null,"x7Nh"))},meta:{requiresAuth:!0}}]});J.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?y.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var R=J;r.default.use(s.a),r.default.config.productionTip=!1,new r.default({el:"#app",store:y,router:R,components:{App:p},template:"<App/>"})},"TsY+":function(t,e){},YGZN:function(t,e){},uf0K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f6522a5ef49a20673d94.js.map