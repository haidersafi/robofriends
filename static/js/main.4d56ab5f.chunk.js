(window.webpackJsonpsafirob=window.webpackJsonpsafirob||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(16),s=(n(25),n(5)),l=n(6),u=n(9),h=n(7),d=n(10),b=n(8),p=function(e){var t=e.name,n=e.id,r=e.email;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma3 dib bw2 shadow-5 w-20"},a.a.createElement("img",{alt:"Pic not Availble",src:"https://robohash.org/".concat(n,"?size=200x200")}),a.a.createElement("div",{className:"f4"},a.a.createElement("h2",null,t),a.a.createElement("p",null,r)))},f=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e){return a.a.createElement(p,{key:e.id,name:e.name,id:e.id,email:e.email})})))},m=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2 "},a.a.createElement("input",{onChange:t,className:" tc f3 pa3 ba b--green bg-lightest-green",type:"search",placeholder:"Search Robots"}))},g=(n(30),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={haserror:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({haserror:!0})}},{key:"render",value:function(){return this.state.haserror?a.a.createElement("h1",null,"Thats Not Good"):this.props.children}}]),t}(r.Component)),O=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px dotted black",height:"1000px"}},e.children)},E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",null,"loading"):a.a.createElement("div",{className:"tc"},a.a.createElement("h3",null,"RoboFriends"),a.a.createElement(m,{searchChange:n}),a.a.createElement(O,null,a.a.createElement(g,null,a.a.createElement(f,{robots:c}))))}}]),t}(r.Component),v=Object(b.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"changeSearchField",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);var y=n(3),j=n(18),w=n(19);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={searchField:""},C={isPending:!1,robots:[],error:""},T=Object(i.createLogger)(),_=Object(y.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t.type),t.type){case"changeSearchField":return R({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return R({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return R({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return R({},e,{error:t.payload,isPending:!1});default:return e}}}),k=Object(y.d)(_,Object(y.a)(j.a,T));c.a.render(a.a.createElement(b.a,{store:k},a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.4d56ab5f.chunk.js.map