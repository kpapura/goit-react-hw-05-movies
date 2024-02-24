"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[383],{383:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,a,i=t(861),c=t(439),s=t(757),u=t.n(s),o=t(791),p=t(689),h=t(273),l=t(168),d=t(444),f=d.ZP.ul(r||(r=(0,l.Z)(["\npadding-left:0;\n/* display: flex;\nflex-direction:column; */\nwidth: 400px;\n"]))),Z=d.ZP.li(a||(a=(0,l.Z)(["\nlist-style: none;\ndisplay: flex;\nflex-direction: column;\nflex-wrap:wrap;\nmargin-bottom:30px;\njustify-content: center;\nalign-items:center;\nborder: 1px solid black;\npadding: 20px;\nborder-radius:50px;\n&>img{\n    width: 100px;\n    height: 150px;\n}\n&>p{\n width: 300px;\n height: 20px;\n padding: 5px;\n font-weight: bold;\n text-align:center\n}\n"])));var m=t.p+"static/media/no-image.f8f15b260eef328312d393c6e3c5fc5c.svg",g=t(184),z=function(){var e=(0,o.useState)(null),n=(0,c.Z)(e,2),t=n[0],r=n[1],a=(0,p.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.M1)(a);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),t&&(0,g.jsx)(f,{children:t.map((function(e){var n=e.name,t=e.id,r=e.profile_path,a=e.character;return(0,g.jsxs)(Z,{children:[(0,g.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):m,alt:n,width:100}),(0,g.jsx)("p",{children:n}),(0,g.jsxs)("p",{children:["Character: ",a]})]},t)}))})}},273:function(e,n,t){t.d(n,{CB:function(){return h},Ei:function(){return s},M1:function(){return d},tx:function(){return Z},zi:function(){return o}});var r=t(861),a=t(757),i=t.n(a),c=t(294);function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:n,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(t);case 3:return r=e.sent,a=r.data.cast,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(t);case 3:return r=e.sent,a=r.data.results,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=383.909a6c70.chunk.js.map