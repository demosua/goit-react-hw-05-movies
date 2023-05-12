"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{6713:function(e,r,t){var n=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="1315643545b87f640bd81c2c08cb68dd";function i(){return(i=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="trending/movie/day?api_key=".concat(s),e.next=4,c.Z.get(r);case 4:if(!(t=e.sent)){e.next=7;break}return e.abrupt("return",t.data.results);case 7:return e.abrupt("return",Promise.reject(new Error("There are no results for trending movies")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function o(){return(o=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="search/movie?api_key=".concat(s,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"),e.next=4,c.Z.get(t);case 4:if(!((n=e.sent).data.results.length>0)){e.next=7;break}return e.abrupt("return",n.data.results);case 7:return e.abrupt("return",Promise.reject(new Error("There are no results for movie you are searching for")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="movie/".concat(r,"?api_key=").concat(s),e.next=4,c.Z.get(t);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("There are no results for trending movies")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="movie/".concat(r,"/credits?api_key=").concat(s),e.next=4,c.Z.get(t);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Error occured while fetching casting actors")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="movie/".concat(r,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=4,c.Z.get(t);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data.results);case 7:return e.abrupt("return",Promise.reject(new Error("Error occured while fetching reviews")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var l={getTrendingMovies:function(){return i.apply(this,arguments)},getMoviesSearch:function(e){return o.apply(this,arguments)},getMovieDetails:function(e){return p.apply(this,arguments)},getMovieCredits:function(e){return f.apply(this,arguments)},getMovieReviews:function(e){return v.apply(this,arguments)}};r.Z=l},9044:function(e,r,t){t.d(r,{Z:function(){return i}});var n,a=t(5243),u=t(168),c=t(7402).Z.div(n||(n=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  ","\n"])),""),s=t(184),i=function(){return(0,s.jsx)(c,{children:(0,s.jsx)(a.g4,{color:"#3f51b5",height:80,width:80})})}},4723:function(e,r,t){t.d(r,{Z:function(){return i}});var n,a=t(1087),u=t(168),c=t(8789).ZP.li(n||(n=(0,u.Z)(["\n  list-style: none;\n"]))),s=t(184),i=function(e){var r=e.movies;return(0,s.jsx)("ul",{children:r.map((function(e){return(0,s.jsx)(c,{to:"",children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e.id),children:e.title})},"".concat(e.id))}))})}},5415:function(e,r,t){t.r(r);var n=t(5861),a=t(9439),u=t(4687),c=t.n(u),s=t(2791),i=t(4723),o=t(9044),p=t(6713),f=t(6795),v=(t(5462),t(184));r.default=function(){var e=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],i=(0,s.useState)("idle"),o=(0,a.Z)(i,2),v=o[0],l=o[1];return(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l("pending"),e.prev=1,e.next=4,p.Z.getTrendingMovies();case 4:r=e.sent,u(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),l("rejected"),f.Am.error(e.t0.message);case 12:return e.prev=12,l("resolved"),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{movies:t,status:v}}(),r=e.movies,t=e.status;return(0,v.jsxs)(v.Fragment,{children:["rejected"===t&&(0,v.jsx)(f.Ix,{autoClose:1e3}),"pending"===t&&(0,v.jsx)(o.Z,{}),"resolved"===t&&(0,v.jsx)(i.Z,{movies:r})]})}}}]);
//# sourceMappingURL=415.543a5c35.chunk.js.map