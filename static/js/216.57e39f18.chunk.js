"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[216],{174:function(n,e,t){t.d(e,{O:function(){return m}});t(791);var r,a,i,o,c=t(689),s=t(168),u=t(444),p=t(87),h=u.ZP.h1(r||(r=(0,s.Z)(["\ntext-align: center;\ntext-decoration: underline overline;\n"]))),l=u.ZP.section(a||(a=(0,s.Z)(["\nbackground-color: lightgray;\npadding: 20px 25px;\nwidth: 1000px;\nmargin: 0 auto;\nmargin-top: 15px;\nborder-radius: 100px;\nmargin-bottom: 20px\n"]))),d=u.ZP.li(i||(i=(0,s.Z)(["\nlist-style: none;\n"]))),f=(0,u.ZP)(p.OL)(o||(o=(0,s.Z)(["\nbackground-color: rgba(253, 253, 253, 0.598);\ncolor: black;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 10px 20px;\n  font-size: 18px;\n  border: 1px solid grey;\n  border-radius: 20px;\n  color: black;\n  text-decoration: none;\n  margin-bottom:5px;\n  width: 500px;\n&:hover{\nbackground-color: lightgray;\nborder: 1px solid white;\n}\n"]))),g=t(184),m=function(n){var e=n.movies,t=n.noHeading,r=(0,c.TH)().pathname,a=0;return(0,g.jsxs)(l,{children:[!t&&(0,g.jsx)(h,{children:"Trending Today"}),(0,g.jsx)("ul",{style:{paddingLeft:"0"},children:e.map((function(n){var e=n.id,t=n.title;return(0,g.jsx)(d,{children:(0,g.jsxs)(f,{to:"/"===r?"movies/".concat(e):"".concat(e),state:"/"===r?{prev:"/"}:{prev:"/movies"},children:[a+=1,". ",t]})},e)}))}),(0,g.jsx)(c.j3,{})]})}},700:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,a,i,o=t(433),c=t(861),s=t(439),u=t(757),p=t.n(u),h=t(174),l=t(791),d=t(168),f=t(444),g=f.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 500px;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 30px;\n  overflow: hidden;\n  border: 1px solid black;\n  padding: 20px;\n  justify-content: space-between;\n  margin: 0 auto;  \n  margin-top: 30px;\n"]))),m=f.ZP.button(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 110px;\n  height: 40px;\n  border: none;\n  border-radius: 20px;\n  background-color: lightgray;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items:center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n  &>p{\n    font-size: 14px;\n    font-weight: bold;\n  }\n"]))),Z=f.ZP.input(i||(i=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: 1px solid gray;\n  padding: 8px 8px;\n  margin-top:5px;\n  border-radius:10px;\n"]))),x=t.p+"static/media/free-icon-search-bar-8053592.328c1781dd4f280993f4.png",y=t(184),v=function(n){var e=n.getResultsBySearch,t=n.setSearchParams,r=n.searchQuery;return(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e()},children:[(0,y.jsxs)("label",{children:["Search Movie",(0,y.jsx)(Z,{type:"text",name:"search",value:r,onChange:function(n){var e=n.target.value;t(""!==e?{search:e}:{})}})]}),(0,y.jsxs)(m,{children:[(0,y.jsx)("img",{src:x,alt:"Search",width:20}),(0,y.jsx)("p",{children:"Search"})]})]})},z=t(87),j=t(273),J=function(){var n=(0,l.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(null),i=(0,s.Z)(a,2),u=i[0],d=i[1],f=(0,l.useState)(""),g=(0,s.Z)(f,2),m=g[0],Z=g[1],x=(0,z.lr)(),J=(0,s.Z)(x,2),b=J[0],I=J[1],k=(0,l.useMemo)((function(){var n;return null!==(n=b.get("search"))&&void 0!==n?n:""}),[b]),w=function(){var n=(0,c.Z)(p().mark((function n(){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r(k);case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,l.useEffect)((function(){t&&N(t)}),[t]);var N=function(){var n=(0,c.Z)(p().mark((function n(e){var t,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.zi)(e);case 3:t=n.sent,r=t.results,t.total_results?d((function(n){return n?(0,o.Z)(r):r})):Z("There are not matched movies"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),Z(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[m&&(0,y.jsx)("h1",{children:m}),(0,y.jsx)(v,{getResultsBySearch:w,setSearchParams:I,searchQuery:k}),u&&(0,y.jsx)(h.O,{movies:u,noHeading:!0})]})}},273:function(n,e,t){t.d(e,{CB:function(){return h},Ei:function(){return c},M1:function(){return d},tx:function(){return g},zi:function(){return u}});var r=t(861),a=t(757),i=t.n(a),o=t(294);function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},n.next=3,(0,o.Z)(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:e,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},n.next=3,(0,o.Z)(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},n.next=3,(0,o.Z)(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},n.next=3,(0,o.Z)(t);case 3:return r=n.sent,a=r.data.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzZkMzM5ODQzNzgzYjk0NGNmYzJiMTQ1MmE0YzhlZCIsInN1YiI6IjY1Y2UyODg0ZDhhZjY3MDE4NzkwNjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqV-EBw7yZpJ06OuE8sU-sevhCoZCN8Cwe7kvC2iZvg"}},n.next=3,(0,o.Z)(t);case 3:return r=n.sent,a=r.data.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=216.57e39f18.chunk.js.map