(this["webpackJsonphearthstone-react-2"]=this["webpackJsonphearthstone-react-2"]||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(20),s=n.n(r),i=n(4),o=n(11),l=n(1);var d=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1];return[function(){if(e.img||e.imgGold)return Object(l.jsxs)("div",{className:"card-image",children:[Object(l.jsx)("img",{style:{display:c?"none":"block"},src:e.img}),Object(l.jsx)("img",{style:{display:c?"block":"none"},src:e.imgGold,alt:"there is no golden version of this card"}),Object(l.jsx)("button",{className:"description-btn",onClick:function(){r(!c)},children:"Gold"})]})},function(){return e.artist?Object(l.jsxs)("div",{className:"card-artist",children:["Artist: ",e.artist]}):Object(l.jsx)("div",{className:"card-artist",children:"This card has no registered artist"})},function(){return e.flavor?Object(l.jsxs)("div",{className:"card-flavor",children:["Flavor: ",e.flavor]}):Object(l.jsx)("div",{className:"card-flavor",children:"This card has no flavor text"})}]};function u(e){var t=e.card,n=e.cardVisibility,c=e.sequence,r=Object(a.useState)(!1),s=Object(i.a)(r,2),u=s[0],j=s[1],b=d(t);return Object(l.jsxs)("li",{tabIndex:"2",className:"card ".concat(null===t||void 0===t?void 0:t.playerClass.replace(" ","-")),style:{display:n?"flex":"none",animationDelay:"".concat(50*c,"ms")},children:[Object(l.jsx)("h3",{className:"card-name",children:t.name}),Object(l.jsx)("div",{className:"card-description",style:Object(o.a)({display:n?"flex":"none"},"display",u?"flex":"none"),children:b.map((function(e){return e()}))}),Object(l.jsx)("button",{className:"description-btn",onClick:function(){j(!u)},children:"Hide/Reveal"})]})}function j(e){var t=e.playerClass,n=e.cards,c=e.classVisibility,r=e.sequence,s=Object(a.useState)(!1),o=Object(i.a)(s,2),d=o[0],j=o[1],b=Object(a.useMemo)((function(){return n.filter((function(e){return e.playerClass===t}))}),[n]);return 0===b.length?Object(l.jsx)(l.Fragment,{}):Object(l.jsxs)("div",{className:"class-cards",style:{display:c?"flex":"none",animationDelay:"".concat(50*r,"ms")},children:[Object(l.jsxs)("h2",{className:"player-class-header",tabIndex:"1",onClick:function(){return j(!d)},children:[t,": ",Object(l.jsxs)("span",{children:[b.length," Cards"]})]}),Object(l.jsx)("ul",{className:"card-list",children:b.map((function(e,t){return Object(l.jsx)(u,{card:e,cardVisibility:d,sequence:t},t)}))})]})}function b(e){var t=e.expansion,n=e.sequence,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1];return Object(l.jsxs)("div",{className:"expansion",style:{animationDelay:"".concat(50*n,"ms")},children:[Object(l.jsx)("h2",{className:"expansion-header",tabIndex:"0",onClick:function(){return o(!s)},children:t.name}),Object(l.jsx)("div",{className:"class-list",children:["Neutral","Rogue","Warrior","Hunter","Mage","Paladin","Shaman","Priest","Druid","Warlock","Demon Hunter"].map((function(e,n){return Object(l.jsx)(j,{playerClass:e,cards:t.cards,classVisibility:s,sequence:n},n)}))})]})}var h=n(16),p=n(9),O=n.n(p),x=n(12);var m=function(e){return Object.keys(e).map((function(t){return{name:t,cards:e[t]}}))},f=function(e){var t=["Hero Skins","Credits","Tavern Brawl","Battlegrounds"];return e.filter((function(e){return!(e.cards.length<50)&&!t.includes(e.name)}))},v=function(e){var t=["Hero Power","Hero","Enchantment"],n=["FX","Cost","NOOOOOOOOOOOO","AFK","Coin's Vengeance","Anomaly"];return e.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{cards:e.cards.filter((function(e){return!n.includes(e.name)&&!t.includes(e.type)}))})}))},g=function(){var e="https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),l=o[0],d=o[1],u=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a,c,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET",headers:{"x-rapidapi-host":"omgvamp-hearthstone-v1.p.rapidapi.com","x-rapidapi-key":"d0c04af798msh554acc11519a663p17ebb4jsn003d7ae2092c"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.next=9,m(a);case 9:return c=e.sent,e.next=12,f(c);case 12:return s=e.sent,e.next=15,v(s);case 15:i=e.sent,console.log(i),r(i),d(!0),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u(e)}),[]),[Object(a.useMemo)((function(){return c}),[e,l]),l]};function y(){var e=g(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{id:"expansion-list",children:[Object(l.jsx)("h1",{children:"Hearthstone Cards"}),Object(l.jsxs)("div",{style:{display:a?"none":"block"},className:"loader",children:[Object(l.jsx)("div",{className:"loading-dot"}),Object(l.jsx)("div",{className:"loading-dot"}),Object(l.jsx)("div",{className:"loading-dot"})]}),n.map((function(e,t){return Object(l.jsx)(b,{expansion:e,sequence:t},t)}))]})}var N=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],s=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==t.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/".concat(t),{method:"GET",headers:{"x-rapidapi-key":"d0c04af798msh554acc11519a663p17ebb4jsn003d7ae2092c","x-rapidapi-host":"omgvamp-hearthstone-v1.p.rapidapi.com"}});case 5:if((n=e.sent).ok){e.next=8;break}return e.abrupt("return",c);case 8:return e.next=10,n.json();case 10:if(!((a=e.sent).length>9)){e.next=15;break}return r(a.slice(0,10)),console.log(a.slice(0,10)),e.abrupt("return");case 15:r(a),console.log(a),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s(e)}),[e]),c};function k(e){var t=e.cards;return Object(l.jsx)("div",{className:"search-list",children:t.map((function(e,t){return Object(l.jsx)(u,{card:e,cardVisibility:!0},t)}))})}function C(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=N(n);return Object(l.jsxs)("div",{id:"search-page",children:[Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"Search For Cards:"}),Object(l.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)},placeholder:"search"})]}),Object(l.jsx)(k,{cards:r})]})}var S=n(13),w=n(2);n(28);var E=function(){return Object(l.jsxs)(S.a,{children:[Object(l.jsx)("header",{children:Object(l.jsxs)("nav",{children:[Object(l.jsx)(S.b,{to:"/",children:"All Expansions"}),Object(l.jsx)(S.b,{to:"/search-card",children:"Search Page"})]})}),Object(l.jsxs)(w.c,{children:[Object(l.jsx)(w.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(w.a,{path:"/search-card",component:C})]})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0c73160f.chunk.js.map