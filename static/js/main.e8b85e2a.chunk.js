(this.webpackJsonppush_notifier=this.webpackJsonppush_notifier||[]).push([[0],{35:function(t,e,o){},53:function(t,e,o){},66:function(t,e,o){"use strict";o.r(e);var i=o(2),a=o.n(i),n=o(36),r=o.n(n),s=(o(53),o(4),o(14),o(12),o(7)),c=o(25),l=o(8),h=o(9),d=(o.p,o(35),o(83),o(80),o(77)),p=(o(79),o(82),o(1)),u=(Object(d.a)((function(t){return{typographyCard:{fontFamily:"Poppins",fontSize:20,color:"#979B82"},outstandingBoxContainer:{backgroundColor:"#769E76",borderRadius:"20px",minWidth:430,maxHeight:320,marginLeft:120,marginBottom:200,overflowY:"scroll",overflowX:"hidden",height:"100%","&::-webkit-scrollbar":{width:"0.45em",height:"0.1em",scrollMarginTop:"10px"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",scrollMarginTop:"10px"},"&::-webkit-scrollbar-thumb":{height:"6px",backgroundColor:"rgba(0,0,0,.3)",outline:"1px solid slategrey",borderRadius:"10px",scrollMarginTop:"10px"}},card:{borderRadius:10,maxWidth:"200%"},minListWidth:{maxWidth:1500,maxHeight:500},typographyOutstandingTitle:{fontFamily:"Poppins",fontSize:25,color:"#979B82",textAlign:"center"}}})),o(5)),b=(o(65).Octokit,Object(d.a)((function(t){return{typographyCard:{fontFamily:"Poppins",fontSize:20,color:"#979B82"},outstandingBoxContainer:{backgroundColor:"#769E76",borderRadius:"20px",minWidth:900,maxHeight:320,marginLeft:120,marginBottom:200,overflowY:"scroll",overflowX:"hidden",height:"100%","&::-webkit-scrollbar":{width:"0.45em",height:"0.1em",scrollMarginTop:"10px"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",scrollMarginTop:"10px"},"&::-webkit-scrollbar-thumb":{height:"6px",backgroundColor:"rgba(0,0,0,.3)",outline:"1px solid slategrey",borderRadius:"10px",scrollMarginTop:"10px"}},card:{borderRadius:10,maxWidth:"200%"},minListWidth:{maxWidth:1500,maxHeight:500},typographyOutstandingTitle:{fontFamily:"Poppins",fontSize:25,color:"#979B82",textAlign:"center"}}})),function(t){Object(l.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(s.a)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).state={status:u.STATUS.INITIAL,token:null},t}return Object(c.a)(o,[{key:"componentDidMount",value:function(){var t=this,e=window.location.href.match(/\?code=(.*)/)&&window.location.href.match(/\?code=(.*)/)[1];e&&(this.setState({status:u.STATUS.LOADING}),fetch("https://gitstar.herokuapp.com/authenticate/".concat(e)).then((function(t){return t.json()})).then((function(e){var o=e.token;t.setState({token:o,status:u.STATUS.FINISHED_LOADING})})))}},{key:"render",value:function(){var t=this;return Object(p.jsxs)(u.Container,{children:[Object(p.jsxs)(u.Header,{children:[Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(p.jsx)(u.Logo,{}),Object(p.jsx)(u.Logotype,{})]}),Object(p.jsx)(u.Avatar,{style:{transform:"scale(".concat(this.state.status===u.STATUS.AUTHENTICATED?"1":"0",")")}}),Object(p.jsx)("a",{style:{display:this.state.status===u.STATUS.INITIAL?"inline":"none"},href:"https://github.com/login/oauth/authorize?client_id=".concat("0bca55204437ad42a3d5","&scope=user&redirect_uri=").concat("https://scottyunho.github.io/push_notifier/user/signin/callback"),children:"Login"})]}),Object(p.jsx)(u.Loading,{status:this.state.status,callback:function(){t.props.status!==u.STATUS.AUTHENTICATED&&t.setState({status:u.STATUS.AUTHENTICATED})}})]})}}]),o}(a.a.Component));var g=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)(b,{})}),Object(p.jsx)("body",{})]})};r.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.e8b85e2a.chunk.js.map