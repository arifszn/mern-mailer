(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,a){e.exports=a(73)},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchUser",(function(){return k})),a.d(n,"handleToken",(function(){return x})),a.d(n,"fetchSurveys",(function(){return O}));var r=a(0),c=a.n(r),l=a(16),s=a.n(l),u=a(5),o=a(12),i=a(9),m=a(10),p=a(36),d=a(37),b=a(43),v=a(42),f=a(38),E=a.n(f),h=a(7),y=a.n(h),g=a(13),N=a(14),j=a.n(N),k=function(){return function(){var e=Object(g.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/current_user");case 2:a=e.sent,t({type:"fetch_user",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(g.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("/api/stripe",e);case 2:n=t.sent,a({type:"fetch_user",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(g.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/surveys");case 2:a=e.sent,t({type:"fetch_surveys",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=Object(u.b)(null,n)((function(e){return c.a.createElement(E.a,{name:"Mern Mailer",description:"$5 for 5 email credit",amount:500,token:function(t){return e.handleToken(t)},stripeKey:"pk_test_7LuXIt0060zvifCPCreHj9C600fAWdnw5S"},c.a.createElement("button",{className:"btn btn-success btn-block"},"Add Credits"))})),S=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"renderContent",value:function(){switch(this.props.authReducer){case null:return;case!1:return c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/auth/google"},c.a.createElement("button",{className:"btn btn-outline-info btn-block"},"Login With Google")));default:return[c.a.createElement("li",{key:"2",className:"form-inline"},c.a.createElement("a",{className:"nav-link"},"Credits: ",this.props.authReducer.credits)),c.a.createElement("li",{key:"1",className:"nav-item"},c.a.createElement("a",{className:"nav-link"},c.a.createElement(w,null))),c.a.createElement("li",{key:"3",className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/api/logout"},c.a.createElement("button",{className:"btn btn-outline-secondary btn-block"},"Logout")))]}}},{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(i.b,{to:this.props.authReducer?"/surveys":"/",className:"navbar-brand"},"Mern Mailer"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},this.renderContent())))}}]),a}(r.Component);var C=Object(u.b)((function(e){return{authReducer:e.authReducer}}))(S),R=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"HEY"),"Collect feedback")};a(72);var _=Object(u.b)((function(e){return{surveys:e.surveysReducer}}),{fetchSurveys:O})((function(e){Object(r.useEffect)((function(){e.fetchSurveys()}),[]);return c.a.createElement("div",null,e.surveys.reverse().map((function(e){return c.a.createElement("div",{className:"card",key:e._id},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.title),c.a.createElement("p",{className:"card-text"},e.body),c.a.createElement("span",{className:"card-link"},"Sent On: ",new Date(e.dateSent).toLocaleDateString()," ")))})))})),q=function(e){return c.a.createElement("div",null,c.a.createElement(_,null),c.a.createElement(i.b,{to:"surveys/new"},c.a.createElement("button",{className:"fixed-button wobble",type:"button"},c.a.createElement("i",{className:"fa fa-plus"}))))},A=a(18),M=a(23),T=a(24),U=a(40),L=a.n(U),z=Object(u.b)(null,n)((function(e){var t=Object(r.useState)({title:"",subject:"",body:"",recipients:""}),a=Object(T.a)(t,2),n=a[0],l=a[1],s=Object(m.e)(),u=Object(r.useState)(),o=Object(T.a)(u,2)[1],p=Object(r.useRef)(new L.a({autoForceUpdate:{forceUpdate:o},className:"small text-danger fa fa-exclamation-triangle pt-1 pl-1",validators:{customEmail:{message:"Invalid recipients",rule:function(e,t,a){var n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!e.split(",").map((function(e){return e.trim()})).filter((function(e){return!1===n.test(e)})).length}}}})),d=function(e){var t=e.target,a=t.name,r=t.value;l(Object(M.a)(Object(M.a)({},n),{},Object(A.a)({},a,r)))},b=function(){var t=Object(g.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!p.current.allValid()){t.next=16;break}return t.prev=2,t.next=5,j.a.post("/api/surveys",n);case 5:t.sent,e.fetchUser(),s.push("/surveys"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0.response),alert(t.t0.response.data.error);case 14:t.next=18;break;case 16:p.current.showMessages(),o(1);case 18:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"container pt-3"},c.a.createElement("div",{className:"row d-flex justify-content-center"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("form",{onSubmit:b},c.a.createElement("div",{className:"form-group"},c.a.createElement("ul",{className:"nav nav-tabs nav-pills c--nav-pills nav-justified"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link btn btn-info btn-block active"},"New Survey")))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Survey Title"),c.a.createElement("input",{type:"text",className:"form-control",id:"title",name:"title",value:n.title,onChange:d,placeholder:"Survey Title"}),p.current.message("name",n.title,"required")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email Subject"),c.a.createElement("input",{type:"text",className:"form-control",id:"subject",placeholder:"Email Subject",name:"subject",value:n.subject,onChange:d}),p.current.message("subject",n.subject,"required")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email Body"),c.a.createElement("textarea",{className:"form-control",id:"body",placeholder:"Email Body",rows:"3",name:"body",value:n.body,onChange:d}),p.current.message("body",n.body,"required")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Recipients"),c.a.createElement("textarea",{className:"form-control",id:"recipients",placeholder:"Example: a@example.com, b@example.com",rows:"3",name:"recipients",value:n.recipients,onChange:d}),p.current.message("recipients",n.recipients,"required|customEmail")),c.a.createElement("div",{className:"form-group text-center"},c.a.createElement("button",{type:"submit",className:"btn btn-success mr-2"},"Send"),c.a.createElement(i.b,{className:"btn btn btn-info",to:"/surveys"},"Cancel")))))))})),D=Object(u.b)(null,n)((function(e){return Object(r.useEffect)((function(){e.fetchUser()}),[]),c.a.createElement("div",null,c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(C,null),c.a.createElement(m.a,{exact:!0,path:"/",component:R}),c.a.createElement(m.a,{exact:!0,path:"/surveys",component:q}),c.a.createElement(m.a,{exact:!0,path:"/surveys/new",component:z}))))})),B=Object(o.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}},surveysReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_surveys":return t.payload;default:return e}}}),H=a(41),I=Object(o.d)(B,{},Object(o.a)(H.a));s.a.render(c.a.createElement(u.a,{store:I},c.a.createElement(D,null)),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b54a8de4.chunk.js.map