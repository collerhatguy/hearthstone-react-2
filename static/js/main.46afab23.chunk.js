(this["webpackJsonphearthstone-react-2"]=this["webpackJsonphearthstone-react-2"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(22),s=a.n(r),i=a(4),l=a(8),o=a(0);function u(e){var t=e.card,a=e.cardVisibility,n=e.sequence,r=e.setArtist,s=Object(c.useState)(!1),u=Object(i.a)(s,2),d=u[0],j=u[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),O=h[0],p=h[1];return a?Object(o.jsxs)("li",{tabIndex:"2",className:"card ".concat(t.playerClass.replace(" ","-")),style:{animationDelay:"".concat(25*n,"ms")},children:[Object(o.jsx)("h3",{className:"card-name",children:t.name}),d?Object(o.jsxs)("div",{className:"card-description",children:[Object(o.jsxs)("div",{className:"card-image",children:[Object(o.jsx)("img",{src:O?t.imgGold:t.img,alt:"card pic"}),Object(o.jsx)("button",{className:"description-btn",onClick:function(){return p(!O)},children:O?"Gold":"Normal"})]}),t.artist?Object(o.jsx)("p",{className:"card-artist",onClick:function(){return r()},children:Object(o.jsx)(l.b,{to:"/artist-list",children:t.artist})}):null,Object(o.jsx)("p",{className:"card-flavor",children:t.flavor||"This card has no flavor text"})]}):null,Object(o.jsx)("button",{className:"description-btn",onClick:function(){return j(!d)},children:d?"Hide":"Reveal"})]}):null}function d(e){var t=e.playerClass,a=e.cards,n=e.classVisibility,r=e.sequence,s=e.setArtist,l=Object(c.useState)(!1),d=Object(i.a)(l,2),j=d[0],b=d[1],h=a.filter((function(e){return e.playerClass===t}));return 0===h.length?null:n?Object(o.jsxs)("li",{className:"class-cards",style:{animationDelay:"".concat(1e3*r,"ms")},children:[Object(o.jsxs)("h2",{tabIndex:"1",className:"player-class-header",onClick:function(){return b(!j)},children:[t,": ",Object(o.jsxs)("span",{children:[h.length," Cards"]})]}),Object(o.jsx)("ul",{className:"card-list",children:h.map((function(e,t){return Object(o.jsx)(u,{card:e,cardVisibility:j,sequence:t,setArtist:function(){return s(e.artist)}},e.cardId)}))})]}):null}var j=a(38);function b(e){var t=e.expansion,a=e.sequence,n=e.setArtist,r=Object(c.useState)(!1),s=Object(i.a)(r,2),l=s[0],u=s[1];return Object(o.jsxs)("li",{className:"expansion",style:{animationDelay:"".concat(200*a,"ms")},children:[Object(o.jsx)("h2",{className:"expansion-header",tabIndex:"0",onClick:function(){return u(!l)},children:t.name}),Object(o.jsx)("ul",{className:"class-list",children:["Neutral","Rogue","Warrior","Hunter","Mage","Paladin","Shaman","Priest","Druid","Warlock","Demon Hunter"].map((function(e,a){return Object(o.jsx)(d,{playerClass:e,cards:t.cards,classVisibility:l,sequence:a,setArtist:n},Object(j.a)())}))})]})}function h(e){var t=e.data,a=e.setArtist;return Object(o.jsxs)("main",{id:"expansion-list",className:"page",children:[Object(o.jsx)("h1",{children:"Hearthstone Cards"}),t?Object(o.jsx)("ul",{children:t.map((function(e,t){return Object(o.jsx)(b,{setArtist:a,expansion:e,sequence:t},t)}))}):Object(o.jsxs)("aside",{className:"loader",children:[Object(o.jsx)("div",{className:"loading-dot"}),Object(o.jsx)("div",{className:"loading-dot"}),Object(o.jsx)("div",{className:"loading-dot"})]})]})}var O=a(10),p=a.n(O),m=a(14);var x=function(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),n=a[0],r=a[1],s=function(){var e=Object(m.a)(p.a.mark((function e(t){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==t.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/".concat(t),{method:"GET",headers:{"x-rapidapi-key":"d0c04af798msh554acc11519a663p17ebb4jsn003d7ae2092c","x-rapidapi-host":"omgvamp-hearthstone-v1.p.rapidapi.com"}});case 5:if((a=e.sent).ok){e.next=8;break}return e.abrupt("return",n);case 8:return e.next=10,a.json();case 10:if(!((c=e.sent).length>9)){e.next=14;break}return r(c.slice(0,10)),e.abrupt("return");case 14:r(c),console.log(c),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s(e)}),[e]),n};function f(e){var t=e.cards;return Object(o.jsx)("div",{className:"search-list",children:t.map((function(e,t){return Object(o.jsx)(u,{card:e,cardVisibility:!0},t)}))})}function v(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=x(a);return Object(o.jsxs)("div",{id:"search-page",className:"page",children:[Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{children:"Search For Cards:"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)},placeholder:"search"})]}),Object(o.jsx)(f,{cards:r})]})}var g=a(19);function y(e){var t=e.artist,a=e.data,n=Object(c.useState)([]),r=Object(i.a)(n,2),s=r[0],u=r[1];return Object(c.useEffect)((function(){u(null===a||void 0===a?void 0:a.reduce((function(e,a){var c=a.cards.filter((function(e){return e.artist===t}));return[].concat(Object(g.a)(e),Object(g.a)(c.map((function(e){return e.img}))))}),[]))}),[t]),Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)(l.b,{to:"",children:"Back"}),Object(o.jsxs)("h2",{children:["All pictures by ",t,": "]}),Object(o.jsx)("ul",{className:"artist-list",children:null===s||void 0===s?void 0:s.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("img",{src:e,alt:"pic"})})}))})]})}var N=a(2),k=a(20);var C=function(e){return Object.keys(e).map((function(t){return{name:t,cards:e[t]}}))},S=function(e){var t=["Hero Skins","Credits","Tavern Brawl","Battlegrounds"];return e.filter((function(e){return!(e.cards.length<50)&&!t.includes(e.name)}))},A=function(e){var t=["Hero Power","Hero","Enchantment"],a=["FX","Cost","NOOOOOOOOOOOO","AFK","Coin's Vengeance","Anomaly"];return e.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{cards:e.cards.filter((function(c,n){if(a.includes(c.name))return!1;if(t.includes(c.type))return!1;if(e.cards[n+1]&&e.cards[n+1].name===c.name)return!1;return!0}))})}))},w=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),a=t[0],n=t[1],r=function(){var e=Object(m.a)(p.a.mark((function e(t){var a,c,r,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET",headers:{"x-rapidapi-host":"omgvamp-hearthstone-v1.p.rapidapi.com","x-rapidapi-key":"d0c04af798msh554acc11519a663p17ebb4jsn003d7ae2092c"}});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,r=C(c),s=S(r),i=A(s),n(i),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards")}),[]),a};a(35);var E=function(){var e=w(),t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(l.a,{children:[Object(o.jsx)("header",{children:Object(o.jsxs)("nav",{children:[Object(o.jsx)(l.b,{to:"/",children:"All Expansions"}),Object(o.jsx)(l.b,{to:"/search-card",children:"Search Page"})]})}),Object(o.jsxs)(N.c,{children:[Object(o.jsx)(N.a,{path:"/",exact:!0,component:function(){return Object(o.jsx)(h,{data:e,setArtist:r})}}),Object(o.jsx)(N.a,{path:"/search-card",component:v}),Object(o.jsx)(N.a,{path:"/artist-list",component:function(){return Object(o.jsx)(y,{artist:n,data:e})}})]})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.46afab23.chunk.js.map