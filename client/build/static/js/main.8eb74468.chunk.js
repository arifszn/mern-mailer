(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return O})),a.d(n,"handleToken",(function(){return N}));var r=a(0),c=a.n(r),l=a(13),u=a.n(l),o=a(7),s=a(10),i=a(15),p=a(8),m=a(33),d=a(34),f=a(39),v=a(38),b=a(35),h=a.n(b),E=a(12),g=a.n(E),y=a(18),k=a(19),j=a.n(k),O=function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/current_user");case 2:a=e.sent,t({type:"fetch_user",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(y.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("/api/stripe",e);case 2:n=t.sent,a({type:"fetch_user",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=Object(o.b)(null,n)((function(e){return c.a.createElement(h.a,{name:"Mern Mailer",description:"$5 for 5 email credit",amount:500,token:function(t){return e.handleToken(t)},stripeKey:"pk_test_7LuXIt0060zvifCPCreHj9C600fAWdnw5S"},c.a.createElement("button",{className:"btn btn-success"},"Add Credits"))})),C=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"renderContent",value:function(){switch(this.props.authReducer){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Login With Google"));default:return[c.a.createElement("li",{key:"1",className:"nav-item"},c.a.createElement(w,null)),c.a.createElement("li",{key:"2",className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/api/logout"},"Logout"))]}}},{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(i.b,{to:this.props.authReducer?"/surveys":"/",className:"navbar-brand"},"Mern Mailer"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},this.renderContent())))}}]),a}(r.Component);var x=Object(o.b)((function(e){return{authReducer:e.authReducer}}))(C),S=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"HEY"),"Collect feedback")},_=function(){return c.a.createElement("h2",null,"Dashboard")},R=function(){return c.a.createElement("h2",null,"SurveyNew")},M=Object(o.b)(null,n)((function(e){return Object(r.useEffect)((function(){e.fetchUser()}),[]),c.a.createElement("div",{className:"container"},c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(x,null),c.a.createElement(p.a,{exact:!0,path:"/",component:S}),c.a.createElement(p.a,{exact:!0,path:"/surveys",component:_}),c.a.createElement(p.a,{path:"/surveys/new",component:R}))))})),A=Object(s.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}}}),L=a(37),T=Object(s.d)(A,{},Object(s.a)(L.a));u.a.render(c.a.createElement(o.a,{store:T},c.a.createElement(M,null)),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8eb74468.chunk.js.map