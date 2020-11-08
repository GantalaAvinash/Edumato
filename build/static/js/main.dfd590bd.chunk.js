(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{46:function(e,a,t){e.exports=t(88)},51:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(40),c=t.n(r),s=t(6),m=t(7),o=t(2),i=t(3),u=t(5),d=t(4),E=(t(51),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e.city},e.name," | ",e.city_name)}))},e.renderRestaurent=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name," | ",e.locality)}))},e.handleCity=function(a){var t=a.target.value,n="".concat("https://edumot.herokuapp.com/restaurant?city=").concat(t);fetch(n,{Method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({restaurents:a})}))},e.handleRest=function(a){e.props.history.push("/details/".concat(a.target.value))},e.state={location:"",restaurents:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"imageContainer"},l.a.createElement("div",{id:"logo"},"e!"),l.a.createElement("div",{className:"heading"},"Find the best restaurants,cafes, bars"),l.a.createElement("div",{className:"locationSelector"},l.a.createElement("select",{className:"locationDropDown",onChange:this.handleCity},l.a.createElement("option",{disabled:!0,selected:!0},"---------------SELECT CITY----------------"),this.renderCity(this.state.location))," \xa0",l.a.createElement("select",{className:"locationDropDown",onChange:this.handleRest},l.a.createElement("option",{disabled:!0,selected:!0},"--------SELECT RESTAURENTS---------"),this.renderRestaurent(this.state.restaurents))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://edumot.herokuapp.com/location",{Method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({location:a})}))}}]),t}(n.Component)),p=Object(m.e)(E),h=(t(56),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"quickSearchContainer"},l.a.createElement("p",{className:"quickSearchHeading"},"Quick Searches"),l.a.createElement("p",{className:"quickSearchSubHeading"},"Discover Restaurants by meal type"),function(e){var a=e.quickData;if(a)return a.map((function(e){return l.a.createElement(s.b,{to:"/list/".concat(e.mealtype),key:e._id},l.a.createElement("div",{className:"tilecontainer"},l.a.createElement("div",{className:"tileComponent1"},l.a.createElement("img",{src:e.thumb,className:"imageclass",alt:""})),l.a.createElement("div",{className:"tileComponent2"},l.a.createElement("div",{className:"componentHeading"},l.a.createElement(s.b,{to:"/list/".concat(e.mealtype),key:e._id},e.name)),l.a.createElement("div",{className:"componentSubHeading"},"Exclusive ",e.name," option for your need"))))}))}(e)))}),v=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={mealType:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,{quickData:this.state.mealType}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://edumot.herokuapp.com/mealtype",{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({mealType:a})}))}}]),t}(n.Component),g=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(v,null))},f=t(42),b=t.n(f),N=(t(57),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:""},e.responseFacebook=function(a){console.log(a),e.setState({isLoggedIn:!0,userID:a.userID,name:a.name,first_name:a.first_name,email:a.email,picture:a.picture.data.url})},e.componentClicked=function(){return console.log("clicked")},e}return Object(i.a)(t,[{key:"render",value:function(){var e;return e=this.state.isLoggedIn?l.a.createElement("div",null,l.a.createElement("img",{className:"profile-pic",src:this.state.picture,alt:"profile-pic"}),l.a.createElement("h3",{className:"welcome-name"},"Hi, ",this.state.name)):l.a.createElement(b.a,{appId:"1246219962422044",autoLoad:!0,fields:"first_name,name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook}),l.a.createElement("div",null,e)}}]),t}(l.a.Component)),y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-inverse"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Edumato")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/viewBooking"},"Orders")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/About"},"About")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/Chatroom"},"ChatUs"))),l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement(N,null)),l.a.createElement("li",null))))))},k=(t(58),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("div",{className:"footer-container"},l.a.createElement("hr",null),l.a.createElement("div",{className:"foot-headng col-md-4"},"Edumato"),l.a.createElement("div",{className:"copyrights col-md-4"},"\xa9 2020 Avinash"),l.a.createElement("div",{className:"foot-icons col-md-4"},l.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://i.ibb.co/0DnsTYn/facebook.png",alt:"facebook"})),l.a.createElement("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://i.ibb.co/8dcM7Dp/instagram.png",alt:"instagram"})),l.a.createElement("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://i.ibb.co/C9LqTXG/linkedin.png",alt:"linkedin"})),l.a.createElement("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://i.ibb.co/7XBzQxz/twitter.png",alt:"twitter"}))))))}),w=(t(59),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://i.ibb.co/0DnsTYn/facebook.png",alt:"facebook"})),l.a.createElement("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://i.ibb.co/8dcM7Dp/instagram.png",alt:"instagram"})),l.a.createElement("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://i.ibb.co/C9LqTXG/linkedin.png",alt:"linkedin"})),l.a.createElement("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://i.ibb.co/7XBzQxz/twitter.png",alt:"twitter"}))))}),O=t(10),C=t.n(O),j=(t(76),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},function(e){var a=e.listdata;return a?a.map((function(e){return l.a.createElement("div",{className:"row"},l.a.createElement(s.b,{to:"/details/".concat(e._id)},l.a.createElement("div",{className:"item-container col-md-10 col-xl-10 col-sm-10",key:e._id},l.a.createElement("img",{className:"rest-image col-md-4 col-sm-4 col-xs-4",src:e.thumb,alt:""}),l.a.createElement("div",{className:"content col-md-6 col-sm-8 col-xs-8"},l.a.createElement("div",{className:"hotel_name"},e.name),l.a.createElement("div",{className:"city_name"},e.city_name),l.a.createElement("div",{className:"city_name"},e.locality),l.a.createElement("div",{className:"city_name"},e.address),l.a.createElement("div",{className:"city_name"},l.a.createElement("i",{class:"fa fa-glass","aria-hidden":"true"}),"\xa0\xa0",l.a.createElement("i",{class:"fa fa-cutlery","aria-hidden":"true"}),"\xa0\xa0",l.a.createElement("i",{class:"fa fa-plug","aria-hidden":"true"}),"\xa0\xa0",l.a.createElement("i",{class:"fa fa-wifi","aria-hidden":"true"}),"\xa0"),l.a.createElement("h4",{className:"cuisine"},e.Cuisine[0].name," | ",e.Cuisine[1].name),l.a.createElement("div",{className:"price-container"},l.a.createElement("div",{className:"price"},"Rs. ",l.a.createElement("strong",null,e.cost)))))))})):l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("img",{src:"/images/loading.gif",alt:"gif"})))}(e))))}),S=(t(77),function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Thinking About Your Pocket on Day ",(new Date).getDate(),". We have Friendly suggestion for you."),l.a.createElement("div",{className:"row"},function(e){var a=e.sudata;if(a)return a.map((function(e){return l.a.createElement("div",{className:"card col-md-2"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/details/".concat(e._id)},e.name)),l.a.createElement("img",{className:"card-img-top",src:e.thumb,alt:"rest-img"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},e.locality),l.a.createElement("p",{className:"card-text"},l.a.createElement("p",null,"Cost: ",e.cost))))}))}(e)))}),D="https://edumot.herokuapp.com/restaurantlist",_=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={suggestions:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,{sudata:this.state.suggestions}))}},{key:"componentDidMount",value:function(){var e,a=this,t=(new Date).getDate(),n=sessionStorage.getItem("mealid");t>0&&t<11?e="".concat(D,"/").concat(n,"?hcost=600&lcost=1200"):t>10&&t<21?e="".concat(D,"/").concat(n,"?hcost=400&lcost=600"):t>20&&t<32&&(e="".concat(D,"/").concat(n,"?hcost=100&lcost=400")),C.a.get(e).then((function(e){a.setState({suggestions:e.data})}))}}]),t}(n.Component),x="https://edumot.herokuapp.com/restaurantList",A=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).costfilter=function(a){var t,n=a.target.value.split(","),l=Number(n[0]),r=Number(n[1]),c=sessionStorage.getItem("mealid");t=""===n?"".concat(x,"/").concat(c):"".concat(x,"/").concat(c,"?hcost=").concat(l,"&lcost=").concat(r),C.a.get(t).then((function(a){e.props.costdata(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,"Cost Filter"),l.a.createElement("div",{onChange:this.costfilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"cost"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"100,300",name:"cost"}),"100-300"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"301,500",name:"cost"}),"301-500"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"501,800",name:"cost"}),"501-800")))}}]),t}(n.Component),F="https://edumot.herokuapp.com/restaurantList",I=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).cuisinefilter=function(a){var t,n=a.target.value,l=sessionStorage.getItem("mealid");""===n?(console.log("".concat(F,"/").concat(l)),t="".concat(F,"/").concat(l)):t="".concat(F,"/").concat(l,"?cuisine=").concat(n),C.a.get(t).then((function(a){e.props.cuisinedata(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,"Cuisine Filter"),l.a.createElement("div",{onChange:this.cuisinefilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"cuisine"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1",name:"cuisine"}),"North Indian"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"2",name:"cuisine"}),"South Indian"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"3",name:"cuisine"}),"Chinese"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"4",name:"cuisine"}),"Fast Food"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"5",name:"cuisine"}),"Street Food")))}}]),t}(n.Component),P="https://edumot.herokuapp.com/restaurantList",T=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).sortfilter=function(a){var t,n=Number(a.target.value),l=sessionStorage.getItem("mealid");t="".concat(P,"/").concat(l,"?sort=").concat(n),console.log(t),C.a.get(t).then((function(a){e.props.sortdata(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,"Sort Filter"),l.a.createElement("div",{onChange:this.sortfilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1",name:"filter"}),"Low To High"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"-1",name:"filter"}),"High To Low")))}}]),t}(l.a.Component),R=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this)).state={hotelist:"",mealname:""},n}return Object(i.a)(t,[{key:"setDataAsPerFilter",value:function(e){this.setState({hotelist:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2 col-xl-2 col-lg-2 col-sm-12"},l.a.createElement(A,{costdata:function(a){e.setDataAsPerFilter(a)}}),l.a.createElement(I,{cuisinedata:function(a){e.setDataAsPerFilter(a)}}),l.a.createElement(T,{sortdata:function(a){e.setDataAsPerFilter(a)}})),l.a.createElement(_,null),l.a.createElement("div",{className:"col-md-10 col-lg-10 col-sm-12"},l.a.createElement("center",null,l.a.createElement("h3",null,"Here Option of ",this.state.mealname)),l.a.createElement(j,{listdata:this.state.hotelist}))))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;sessionStorage.setItem("mealid",a),C.a.get("".concat("https://edumot.herokuapp.com/mealtype")).then((function(t){for(var n=0;n<t.data.length;n++)t.data[n]._id===Number(a)?(e.setState({mealname:t.data[n].name.toUpperCase()}),n=t.data.length):e.setState({mealname:"Wrong Input"})})),C.a.get("".concat("https://edumot.herokuapp.com/restaurant?mealtype=").concat(a)).then((function(a){e.setState({hotelist:a.data})}))}}]),t}(n.Component),L=t(14),M=t.n(L),B=t(17),U=t(21),H=(t(79),t(80),function(e){return l.a.createElement(l.a.Fragment,null,function(e){var a=e.restData;return a?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",null,a.name.toUpperCase())),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("button",{type:"button","data-toggle":"modal","data-target":"#myModal"},l.a.createElement("img",{className:"img-responsive",src:a.thumb,style:{width:1600,height:400},alt:""})),l.a.createElement("div",{id:"myModal",className:"modal fade",role:"dialog"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7"),l.a.createElement("h4",{className:"modal-title"},"Image Gallery For ",a.name)),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"item active"},l.a.createElement("img",{className:"img-responsive",src:a.thumb,style:{width:1600,height:400},alt:""})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{className:"img-responsive",src:a.thumb,style:{width:1600,height:400},alt:""})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{className:"img-responsive",src:a.thumb,style:{width:1600,height:400},alt:""}))),l.a.createElement("a",{className:"left carousel-control",href:"#myCarousel","data-slide":"prev"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-left"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"right carousel-control",href:"#myCarousel","data-slide":"next"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-right"}),l.a.createElement("span",{className:"sr-only"},"Next")))))))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",{className:"rest-name"},a.name),l.a.createElement("h3",{className:"rest-locality"},a.locality),l.a.createElement("h3",{className:"address"},a.address),l.a.createElement("h4",{className:"cost"}," Rs: ",a.cost))),l.a.createElement("div",{className:"row"},l.a.createElement(U.d,null,l.a.createElement(U.b,null,l.a.createElement(U.a,null,"About"),l.a.createElement(U.a,null,"Contact")),l.a.createElement(U.c,null,l.a.createElement("p",null,a.name),l.a.createElement("p",null,a.type[0].name," | ",a.type[1].name),l.a.createElement("p",null,a.Cuisine[0].name," | ",a.Cuisine[1].name)),l.a.createElement(U.c,null,l.a.createElement("p",null,a.address),l.a.createElement("p",null," Phone: ",a.contact_number)))),l.a.createElement("div",{className:"row"},l.a.createElement(s.b,{to:"/list/".concat(sessionStorage.getItem("mealid")),className:"btn btn-danger"},"Back"),"\xa0",l.a.createElement(s.b,{to:"/booking/".concat(a._id),className:"btn btn-success"},"Place Order"))))):l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("img",{src:"/images/loading.gif",alt:""})))}(e))}),G=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={details:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,{restData:this.state.details}))}},{key:"componentDidMount",value:function(){var e=Object(B.a)(M.a.mark((function e(){var a,t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,C.a.get("".concat("https://edumot.herokuapp.com/restaurentDetails","/").concat(a));case 3:t=e.sent,this.setState({details:t.data[0]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),W=Object(m.e)((function(e){console.log("functional>>>",e.location.search.split("=")[1]);return l.a.createElement("div",{className:"container"},l.a.createElement("alert",{className:"alert alert-success"},e.location.search.split("=")[1]),l.a.createElement("center",null,l.a.createElement("h3",null,"Orders Details")),l.a.createElement("table",{className:"table table-responsive"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Order Id"),l.a.createElement("th",null,"Rest Name"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"No. Person"))),l.a.createElement("tbody",null,function(e){var a=e.orderdata;if(a)return a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.order_id),l.a.createElement("td",null,e.rest_name),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.address),l.a.createElement("td",null,e.person))}))}(e))))})),q=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={orders:""},e}return Object(i.a)(t,[{key:"render",value:function(){return console.log("class",this.props),l.a.createElement("div",{className:"container"},l.a.createElement(W,{orderdata:this.state.orders}))}},{key:"componentDidMount",value:function(){var e=Object(B.a)(M.a.mark((function e(){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat("https://edumot.herokuapp.com/orders"));case 2:a=e.sent,this.setState({orders:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),z=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).handleChangeName=function(a){e.setState({name:a.target.value})},e.handleChangePhone=function(a){e.setState({phone:a.target.value})},e.handleChangePerson=function(a){e.setState({person:a.target.value})},e.handleChangeaddress=function(a){e.setState({address:a.target.value})},e.handleSubmit=function(){fetch("https://edumot.herokuapp.com/placeorder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state)}).then(e.props.history.push("/viewBooking?message=Success"))},e.state={order_id:Math.floor(9901*Math.random())+100,rest_name:"",name:"",phone:"",person:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(B.a)(M.a.mark((function e(){var a,t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,C.a.get("".concat("https://edumot.herokuapp.com/restaurantDetails","/").concat(a));case 3:t=e.sent,this.setState({rest_name:t.data[0].name}),this.setState({rest_price:t.data[0].cost});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-info"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h4",null,"Place Your Order")),l.a.createElement("form",null,l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Order_Id"),l.a.createElement("input",{type:"text",name:"order_id",value:this.state.order_id,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Rest Name"),l.a.createElement("input",{type:"text",name:"rest_name",value:this.state.rest_name,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Price"),l.a.createElement("input",{type:"text",name:"rest_price",value:this.state.rest_price,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,className:"form-control",onChange:this.handleChangeName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone"),l.a.createElement("input",{type:"number",name:"phone",value:this.state.phone,className:"form-control",onChange:this.handleChangePhone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Person"),l.a.createElement("select",{type:"number",name:"person",value:this.state.person,className:"form-control",onChange:this.handleChangePerson},l.a.createElement("option",{selected:!0},"-----Select---"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Address"),l.a.createElement("input",{type:"text",name:"address",value:this.state.address,className:"form-control",onChange:this.handleChangeaddress})),l.a.createElement(s.b,{to:"/details/".concat(this.props.match.params.id),className:"btn btn-danger"},"Back")," \xa0\xa0",l.a.createElement("button",{className:"btn btn-success",onClick:this.handleSubmit},"Place Oreder")))))}}]),t}(n.Component),Y=(t(81),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"jumbotron text-center",style:{marginbottom:0}},l.a.createElement("h1",{className:"about-heading",style:{color:"orange"}},"Edumato"),l.a.createElement("p",null,"You can find a Best Restaurant At your Place")),l.a.createElement("div",{className:"container",style:{margintop:"30px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h2",null,"About Us"),l.a.createElement("h5",null,"Photo of me:"),l.a.createElement("img",{src:"https://i.ibb.co/nBRhdB2/25.jpg",className:"image-developer",alt:"25"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"text"},"Avinash")),l.a.createElement("p",null,"Started in August 2020"),l.a.createElement("h3",null,"\xa9 Avinash"),l.a.createElement("hr",{className:"d-sm-none"})),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"sub-heading"},"What\u2019s the Edumato Story?"),l.a.createElement("h5",{className:"content-1"},"What made Avinash and Akash build a platform that is Changing the way India eats?"),l.a.createElement("br",null),l.a.createElement("p",{className:"content-2"},"Edumato is a phoenix that rose out of Avinash and Akash's earlier venture, Bundl Technologies. After a slow start, Edumato snowballed into an unstoppable force that is now changing the way India eats."),l.a.createElement("br",null),l.a.createElement("h2",{className:"sub-heading"},"Values at Edumato"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://i.ibb.co/DbGLx6L/core-value-1.png",alt:"core-value-1"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://i.ibb.co/5kZvt0b/core-value-2.png",alt:"core-value-2"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://i.ibb.co/g3FRJHR/core-value-3.png",alt:"core-value-3"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://i.ibb.co/Xxk2wfn/core-value-4.png",alt:"core-value-4"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://i.ibb.co/WWWDck0/core-value-5.png",alt:"core-value-5"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://i.ibb.co/rMhnfrr/core-value-6.png",alt:"core-value-6"})))))),l.a.createElement("div",{className:"container"},l.a.createElement("span",{className:"heading"},"User Rating"),l.a.createElement("span",{className:"fa fa-star checked"}),l.a.createElement("span",{className:"fa fa-star checked"}),l.a.createElement("span",{className:"fa fa-star checked"}),l.a.createElement("span",{className:"fa fa-star checked"}),l.a.createElement("span",{className:"fa fa-star"}),l.a.createElement("p",null,"4.1 average based on 254 reviews."),l.a.createElement("hr",{style:{border:"3px solid #f1f1f1"}}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"side"},l.a.createElement("div",null,"5 star")),l.a.createElement("div",{className:"middle"},l.a.createElement("div",{className:"bar-container"},l.a.createElement("div",{className:"bar-5"}))),l.a.createElement("div",{className:"side right"},l.a.createElement("div",null,"150")),l.a.createElement("div",{className:"side"},l.a.createElement("div",null,"4 star")),l.a.createElement("div",{className:"middle"},l.a.createElement("div",{className:"bar-container"},l.a.createElement("div",{className:"bar-4"}))),l.a.createElement("div",{className:"side right"},l.a.createElement("div",null,"63")),l.a.createElement("div",{className:"side"},l.a.createElement("div",null,"3 star")),l.a.createElement("div",{className:"middle"},l.a.createElement("div",{className:"bar-container"},l.a.createElement("div",{className:"bar-3"}))),l.a.createElement("div",{className:"side right"},l.a.createElement("div",null,"15")),l.a.createElement("div",{className:"side"},l.a.createElement("div",null,"2 star")),l.a.createElement("div",{className:"middle"},l.a.createElement("div",{className:"bar-container"},l.a.createElement("div",{className:"bar-2"}))),l.a.createElement("div",{className:"side right"},l.a.createElement("div",null,"6")),l.a.createElement("div",{className:"side"},l.a.createElement("div",null,"1 star")),l.a.createElement("div",{className:"middle"},l.a.createElement("div",{className:"bar-container"},l.a.createElement("div",{className:"bar-1"}))),l.a.createElement("div",{className:"side right"},l.a.createElement("div",null,"20")))))}),X=t(25),J=(t(82),t(22)),V=t.n(J),Q=(t(83),t(86),t(89),t(44)),K=t(45);V.a.initializeApp({apiKey:"AIzaSyBb-L7zWRJ5-10oxL7YHE3NPRCNFV1Kf4o",authDomain:"chat-room-fbea0.firebaseapp.com",databaseURL:"https://chat-room-fbea0.firebaseio.com",projectId:"chat-room-fbea0",storageBucket:"chat-room-fbea0.appspot.com",messagingSenderId:"478322489472",appId:"1:478322489472:web:5c173dbbae63aaf6480e65",measurementId:"G-08RWT85XC3"});var Z=V.a.auth(),$=V.a.firestore();function ee(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-danger",onClick:function(){var e=new V.a.auth.GoogleAuthProvider;Z.signInWithPopup(e)}},"Sign in with Google"),l.a.createElement("br",null),l.a.createElement("h4",{className:"msg-info"},"Do not violate the community guidelines ",l.a.createElement("br",null)," or you will be banned for life!"))}function ae(){return Z.currentUser&&l.a.createElement("button",{className:"sign-out",onClick:function(){return Z.signOut()}},"Sign Out")}function te(){var e=Object(n.useRef)(),a=$.collection("messages"),t=a.orderBy("createdAt").limit(25),r=Object(K.a)(t,{idField:"id"}),c=Object(X.a)(r,1)[0],s=Object(n.useState)(""),m=Object(X.a)(s,2),o=m[0],i=m[1],u=function(){var t=Object(B.a)(M.a.mark((function t(n){var l,r,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),l=Z.currentUser,r=l.uid,c=l.photoURL,t.next=4,a.add({text:o,createdAt:V.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:c});case 4:i(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"message-box"},c&&c.map((function(e){return l.a.createElement(ne,{key:e.id,message:e})})),l.a.createElement("span",{ref:e})),l.a.createElement("form",{onSubmit:u,className:"input-box"},l.a.createElement("input",{type:"text",className:"typehere",value:o,onChange:function(e){return i(e.target.value)},placeholder:"say something nice"}),l.a.createElement("button",{className:"send-button",type:"submit",disabled:!o},"send")))}function ne(e){var a=e.message,t=a.text,n=a.uid,r=a.photoURL,c=n===Z.currentUser.uid?"sent":"received";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"message ".concat(c)},l.a.createElement("img",{className:"pic",src:r,alt:"google-pic"}),l.a.createElement("p",{className:"show-text"},t)))}var le=function(){var e=Object(Q.a)(Z),a=Object(X.a)(e,1)[0];return l.a.createElement("div",{className:"App"},l.a.createElement("section",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"heading"},"Message Us"),l.a.createElement(ae,null)),l.a.createElement("div",null,a?l.a.createElement(te,null):l.a.createElement(ee,null))))},re=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(w,null),l.a.createElement(m.a,{exact:!0,path:"/",component:g}),l.a.createElement(m.a,{path:"/list/:id",component:R}),l.a.createElement(m.a,{path:"/details/:id",component:G}),l.a.createElement(m.a,{path:"/viewBooking",component:q}),l.a.createElement(m.a,{path:"/booking/:id",component:z}),l.a.createElement(m.a,{path:"/about",component:Y}),l.a.createElement(m.a,{path:"/chatroom",component:le}),l.a.createElement(k,null)))};c.a.render(l.a.createElement(re,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.dfd590bd.chunk.js.map