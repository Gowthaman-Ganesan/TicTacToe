(this["webpackJsonpredux-thunk-learning"]=this["webpackJsonpredux-thunk-learning"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(6),c=n.n(l),i=(n(13),n(14),n(1)),o=n(2),u=n(4),s=n(3);function h(e){return a.a.createElement("button",{className:"cell",onClick:e.onButtonClick},e.value)}var d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).renderSquare=function(e){return a.a.createElement(h,{onButtonClick:function(){return r.props.onButtonClick(e)},value:r.props.cells[e]})},r.state={arr:Array(9).fill(null)},r}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"box-big"},a.a.createElement("div",null,this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),a.a.createElement("div",null,this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),a.a.createElement("div",null,this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),n}(r.Component),v=n(7);function m(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[1,4,8],[2,4,6]],n=0;n<t.length-1;n++){var r=Object(v.a)(t[n],3),a=r[0],l=r[1],c=r[2];if(e[a]&&e[a]===e[l]&&e[l]===e[c])return e[a]}return null}var f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onButtonClick=function(e){var t=r.state.xIsNext,n=r.state.cells;m(n)||n[e]||(n[e]=t?"X":"O",r.setState({cells:n,xIsNext:!t}))},r.state={xIsNext:!0,cells:Array(9).fill(null)},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.cells,t=m(e);return a.a.createElement("div",null,a.a.createElement(d,{onButtonClick:this.onButtonClick,cells:e}),t?a.a.createElement("h2",null,"Winner is ",t):"")}}]),n}(r.Component);var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.928e6e55.chunk.js.map