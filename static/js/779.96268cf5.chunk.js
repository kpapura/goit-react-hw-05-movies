"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{9779:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r,i,a=t(5861),c=t(9439),s=t(7757),u=t.n(s),o=t(2791),h=t(7689),p=t(273),l=t(168),d=t(6444),Z=d.ZP.ul(r||(r=(0,l.Z)(["\npadding-left:0;\nwidth: 600px;\n"]))),f=d.ZP.li(i||(i=(0,l.Z)(["\npadding: 10px;\nlist-style: none;\nborder: 1px solid black;\nborder-radius: 30px;\noverflow: hidden;\nmargin-bottom:15px;\n&>p>span{\n    font-weight: bold;\n    text-decoration: underline;\n}\n"]))),z=t(184),J=function(){var e=(0,o.useState)(null),n=(0,c.Z)(e,2),t=n[0],r=n[1],i=(0,h.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.tx)(i);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]),(null===t||void 0===t?void 0:t.length)>=1?(0,z.jsx)(Z,{children:t.map((function(e){var n=e.author,t=e.id,r=e.content;return(0,z.jsxs)(f,{children:[(0,z.jsxs)("p",{children:[(0,z.jsx)("span",{children:"Author:"})," ",n]}),(0,z.jsxs)("p",{children:[(0,z.jsx)("span",{children:"Review:"})," ",r.slice(0,500),"..."]})]},t)}))}):(0,z.jsx)("h3",{children:"No reviews"})}},273:function(e,n,t){t.d(n,{CB:function(){return p},Ei:function(){return s},M1:function(){return d},tx:function(){return f},zi:function(){return o}});var r=t(5861),i=t(7757),a=t.n(i),c=t(5294);function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:n,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(t);case 3:return r=e.sent,i=r.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function e(n){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(t);case 3:return r=e.sent,i=r.data.cast,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return z.apply(this,arguments)}function z(){return(z=(0,r.Z)(a().mark((function e(n){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},e.next=3,(0,c.Z)(t);case 3:return r=e.sent,i=r.data.results,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=779.96268cf5.chunk.js.map