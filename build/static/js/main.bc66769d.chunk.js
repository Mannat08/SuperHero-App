(this.webpackJsonpsuperhero=this.webpackJsonpsuperhero||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),l=(a(11),a(1)),o=a.n(l),i=a(5),u=a(2);a(13),a(14);var m=function(e){return r.a.createElement("div",{className:"navbar"},r.a.createElement("span",{id:"logo"},"Superhero Hunter"))};var p=function(e){var t=e.handleChange,a=e.searchtext;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"Hunt superheroes here...",id:"searchbar",onChange:t,value:a}))};var h=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"search-result"},r.a.createElement("div",{className:"left"},r.a.createElement("img",{src:t.image.url,alt:"superpic"})),r.a.createElement("div",{className:"right"},r.a.createElement("h1",null,t.name),r.a.createElement("span",{style:{color:"gray",marginBottom:5}},t.biography["full-name"]),r.a.createElement("div",{className:"stats"},r.a.createElement("div",null,"Strength : ",t.powerstats.strength),r.a.createElement("div",null,"Speed :    ",t.powerstats.speed),r.a.createElement("div",null,"Power :    ",t.powerstats.power)))))};var d=function(e){var t=e.superheroData,a=void 0===t?[]:t;return console.log("searchresult props ",a),r.a.createElement("div",null,a.map((function(e){return r.a.createElement(h,{data:e})})))};var v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),l=Object(u.a)(s,2),h=l[0],v=l[1];function E(){return(E=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.superheroapi.com/api.php/2720525751493083/search/".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("data is",n),v(n.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("div",{className:"main"},r.a.createElement(p,{searchtext:a,handleChange:function(e){var t=e.target.value;c(t),0===t.length&&v([]),t.length>2&&function(){E.apply(this,arguments)}()}}),r.a.createElement(d,{superheroData:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.bc66769d.chunk.js.map