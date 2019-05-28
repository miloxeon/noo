(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports={root:"style_root__wqmKn",grey:"style_grey__26Shm"}},20:function(e,t,n){e.exports={root:"style_root__3KF15"}},21:function(e,t,n){e.exports={root:"style_root__2NkpN"}},24:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),u=(n(29),n(30),n(15)),i=n(16),l=n(22),s=n(17),m=n(23),p=n(1),d=n(2),f=n(8),y=n(19),h=function(e,t,n){return Object.keys(e).map(function(a){var r;return r={},Object(d.a)(r,t,a),Object(d.a)(r,n,e[a]),r})},E=function(e,t,n){return Object(p.a)({},e,Object(d.a)({},t,n))},v=function(e,t){return Object(f.b)(e,function(e,n){return t(function(t,n){return e({type:t,payload:n})},n)})},w=function(e,t){return e.preventDefault(),t(e)},b={ui:{secret:"",newDomain:""},keys:{},secret:"",domainInputActive:!1},g=n(20),O=n.n(g),j=function(e){return r.a.createElement("button",Object.assign({className:O.a.root},e),e.children)};j.displayName="Button";var N=j,I=function(e){return r.a.createElement(N,Object.assign({type:"button"},e),"Logout")};I.displayName="Logout";var D=v(null,function(e){return{onClick:function(){return e("logout")}}})(I),k={logout:function(e){return window.confirm("Are you sure want to quit? You will lose all your saved passwords.")?(localStorage.removeItem("noo"),b):e}},S=n(13),_=n.n(S),A=function(e){return r.a.createElement("li",{className:_.a.root},r.a.createElement("span",null,e.name),":\xa0",r.a.createElement("span",{className:_.a.grey},e.password))},x=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"Passwords"),e.domainsExist&&r.a.createElement("ul",null,e.domains.map((t=A,function(e,n){return r.a.createElement(t,Object.assign({},e,{key:n}))}))),!e.domainsExist&&r.a.createElement("p",null,"You don't have any saved passwords yet."),r.a.createElement(N,{autoFocus:!0,type:"button",onClick:e.activateDomainInput},"Add"));var t};x.displayName="DomainList";var C=v(function(e){return{domains:h(e.keys,"name","password"),domainsExist:h(e.keys,"name","password").length>0}},function(e){return{activateDomainInput:function(){return e("activateDomainInput")}}})(x),F={activateDomainInput:function(e){return E(e,"domainInputActive",!0)}},B=n(21),L=n.n(B),q=function(e){return r.a.createElement("input",Object.assign({className:L.a.root},e))};q.displayName="Input";var J=q,T=function(e){return r.a.createElement("div",Object.assign({style:{display:"flex",justifyContent:"center",margin:"24px 0"}},e),e.children)};T.displayName="Center";var P=T,Y=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"How it works?"),r.a.createElement("p",null,"Noo generates strong passwords for the websites you use. Neither the password nor the secret are sent over the internet \u2013 the whole thing happens on your device."),r.a.createElement("p",null,"If the same secret is given, the same domain names would render the same passwords, so this is how Noo syncs. You just enter your secret and the domain \u2013\xa0the given password will be the same."),r.a.createElement("p",null,"There is no way to acquire your secret from the password, so you are safe here."))},K=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"The secret"),r.a.createElement("p",null,"Once you enter this, there'll be no way back."),r.a.createElement("p",null,"There is no way to restore the secret either."),r.a.createElement("form",{onSubmit:e.commit},r.a.createElement(J,{autoFocus:!0,required:!0,type:"password",placeholder:"keyboardcat",value:e.secret,onChange:e.edit}),r.a.createElement(P,null,r.a.createElement(N,null,"Submit"))),r.a.createElement(Y,null))};K.displayName="SecretInput";var M=v(function(e){return{secret:e.ui.secret}},function(e){return{edit:function(t){return e("editSecret",t.target.value)},commit:function(t){return w(t,function(){return e("commitSecret")})}}})(K),X={editSecret:function(e,t){return Object(p.a)({},e,{ui:Object(p.a)({},e.ui,{secret:t})})},commitSecret:function(e){return Object(p.a)({},e,{secret:e.ui.secret,ui:Object(p.a)({},e.ui,{secret:""})})}},H=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(N,{type:"button",onClick:e.close},"Close"),r.a.createElement("h2",null,"Add new domain"),r.a.createElement("form",{onSubmit:e.commit},r.a.createElement(J,{autoFocus:!0,required:!0,placeholder:"example.com",value:e.value,onChange:e.edit}),r.a.createElement(P,null,r.a.createElement(N,null,"Add"))))};H.displayName="NewDomainInput";var R=v(function(e){return{value:e.ui.newDomain}},function(e){return{edit:function(t){return e("editNewDomain",t.target.value)},commit:function(t){return w(t,function(){return e("commitNewDomain")})},close:function(){return e("closeNewDomain")}}})(H),U={editNewDomain:function(e,t){return Object(p.a)({},e,{ui:Object(p.a)({},e.ui,{newDomain:t})})},commitNewDomain:function(e){return Object(p.a)({},e,{keys:Object(p.a)({},e.keys,Object(d.a)({},e.ui.newDomain,(t=e.ui.newDomain,n=e.secret,Object(y.keccak512)(t+n).slice(0,20)))),ui:Object(p.a)({},e.ui,{newDomain:""}),domainInputActive:!1});var t,n},closeNewDomain:function(e){return E(e,"domainInputActive",!1)}},V=function(e){return r.a.createElement("div",Object.assign({style:{padding:e.padding||"12px"}},e),e.children)};V.displayName="Pad";var z=V,G=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(C,null),r.a.createElement(D,null))},Q=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.start()}},{key:"render",value:function(){return r.a.createElement(z,null,this.props.secretInputActive&&r.a.createElement(M,null),this.props.domainInputActive&&r.a.createElement(R,null),this.props.domainListActive&&r.a.createElement(G,null))}}]),t}(a.Component);Q.displayName="App";var W=v(function(e){return{secretInputActive:!Boolean(e.secret),domainInputActive:Boolean(e.secret)&&e.domainInputActive,domainListActive:Boolean(e.secret)&&!e.domainInputActive,secret:e.secret}},function(e){return{start:function(){return e("start")}}})(Q),Z={start:function(e){return e},hydrate:function(e,t){return function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(t)?JSON.parse(t):e}},$=n(4),ee=Object(p.a)({},Z,k,X,U,F,{}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.c,ne=Object($.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return ee[n]?ee[n](e,a):e},te(Object($.a)(function(e){return function(t){return function(n){var a=t(n),r=e.getState(),o=localStorage.getItem("noo");return r===b&&Boolean(o)?e.dispatch({type:"hydrate",payload:o}):localStorage.setItem("noo",JSON.stringify(r)),a}}})));c.a.render(r.a.createElement(f.a,{store:ne},r.a.createElement(W,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6189fe8f.chunk.js.map