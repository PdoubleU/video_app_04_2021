(this.webpackJsonpvideo_app_04_2021=this.webpackJsonpvideo_app_04_2021||[]).push([[0],{61:function(e,t,i){},62:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),r=i(14),c=i.n(r),s=i(7),l=i(21),o=i(63),d=i(64),u=i(65),j=i(66),b=i(67),h=i(68),m=i(69),O=i(2);var p=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),i=t[0],n=t[1],r=function(){n(!i)};return Object(O.jsx)("header",{className:"d-block",children:Object(O.jsxs)(o.a,{className:"fixed-top bg-dark ",light:!0,expand:"md",children:[Object(O.jsx)(d.a,{className:"text-light",tag:l.b,to:"/",children:"Video App"}),Object(O.jsx)(u.a,{onClick:r}),Object(O.jsx)(j.a,{isOpen:i,navbar:!0,children:Object(O.jsxs)(b.a,{className:"ml-auto",navbar:!0,children:[Object(O.jsx)(h.a,{children:Object(O.jsx)(m.a,{className:"text-light",tag:l.b,to:"/",onClick:r,children:"Main"})}),Object(O.jsx)(h.a,{children:Object(O.jsx)(m.a,{className:"text-light",tag:l.b,to:"/movie-list",onClick:r,children:"List"})})]})})]})})};var f=function(){return Object(O.jsx)("footer",{className:"footer position-absolute w-100 bg-light ",children:Object(O.jsx)("div",{className:"container px-5 py-3",children:Object(O.jsx)("p",{className:"text-muted text-center m-0",children:"App author: Piotr Witasik/PdoubleU \xa9 2021"})})})};var v=function(e){var t=e.children;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{}),t,Object(O.jsx)(f,{})]})},x=i(75),g=i(76),k=i(77),y=i(78),w=i(70),N=i(35);var S=function(e){var t=e.handleClick,i=e.tagName,a=e.route,n=e.id,r=void 0===n?"":n,c=e.type,s=void 0===c?"button":c,l=e.value,o=void 0===l?"":l,d=e.target,u=void 0===d?"":d,j=e.faIcon,b=void 0===j?"":j;return Object(O.jsxs)(w.a,{outline:!0,onClick:t,tag:i,to:a,id:r,type:s,target:u,icon:b,children:[o,b?Object(O.jsx)(N.a,{icon:b,size:"sm"}):null]})},C=i(36),M=i(16),D=i.n(M),E=i(23),L=i(39),I=i(18);var _=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),i=t[0],n=t[1],r=Object(a.useState)(!1),c=Object(s.a)(r,2),l=c[0],o=c[1],d=Object(a.useState)(!1),u=Object(s.a)(d,2),j=u[0],b=u[1],h=Object(a.useState)(""),m=Object(s.a)(h,2),O=m[0],p=m[1];return[{data:i,apiProvider:O,isLoading:l,isError:j,resetErrorAlert:function(){b(!1)},fetchData:function(){var e=Object(E.a)(D.a.mark((function e(t,i,a){var r,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),p(a),e.prev=2,e.next=5,fetch(t,Object(I.a)({},i));case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),b(!0),console.log(e.t0);case 15:n(c),o(!1);case 17:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,i,a){return e.apply(this,arguments)}}()}]},F=i(0),V=i.n(F),J=["F-yeKCV2Mrk","TUfyUUauuoY","3E1vOhBcsdg","FJe99BjV8bM","VRzbQYmgJ2Q","KTT7i3SKpMQ","vyKj-WsStFc","facmiPgeMNM","hd0fXhDkH84","Zfm_y0OJmN4","luW--mtTPtA","0_0imzGKNjA","tJJiGL8orfY","n-kg9zhq-xE","EMAlaNCMSgE","JbBKOJH4dh0","P8vGytRX7S0","ErsxQkch7ec","ugHGotF7tR0","oIMaTKOZG-8","_308KNAuFkg","spjp49HFd84","iPMiD3Wu74Q","r874E6s4cQ","4DKkueqcKmQ","h3RG5dztrXM","535769506","220555992","226441556","248465461","87452303","99144904","241916506","1522709","43974197","71715434","99227117","139592600","476216027","137623605","287060952","188653769","259132930","11768506","301188466","111481788","44026236","388213806","230586645","233459603","211452489"],A={youtube_input:new RegExp("^https://www.youtube.com/watch\\?v=\\S{11}$|^https://youtu.be/\\S{11}$|^\\S{11}$"),vimeo_input:new RegExp("^https://vimeo.com/\\d{7,9}$|^\\d{7,9}$"),youtube_id:new RegExp("\\S{11}$"),vimeo_id:new RegExp("\\d{7,9}$")},P=function(e){var t,i,a="",n="",r="",c={};if(t=A.youtube_input.test(e),!(i=A.vimeo_input.test(e))&&!t)return[null,null,null];if(t){n="youtube";var l=function(e){var t=new URL("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics"),i={id:e,key:"AIzaSyDNWcIK3yQv5jmxhAz0DjXVZSDOAFLhOgs"};return Object.keys(i).forEach((function(e){return t.searchParams.append(e,i[e])})),[t,{}]}(a=e.match(A.youtube_id)),o=Object(s.a)(l,2);r=o[0],c=o[1]}if(i){n="vimeo";var d=function(e){return["https://api.vimeo.com/videos/".concat(e),{method:"GET",credentials:"same-origin",headers:{Authorization:"bearer ".concat("c6ca95052e66b9ed4a87119e72d793dc")}}]}(a=e.match(A.vimeo_id)),u=Object(s.a)(d,2);r=u[0],c=u[1]}return[r,c,a,n]};P.propTypes={input:V.a.string.isRequired};var U=function(e){if(e){var t=(new Date).toLocaleDateString("en-US").split("/"),i=Object(s.a)(t,3),a=i[0],n=i[1],r=i[2];return n=c(1,30),a=c(0,11),e.addDate=n+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a)+1]+" "+r,e.isLiked=!1,e}function c(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}};U.propTypes={item:V.a.object.isRequired};var R=function(e,t){if(e){var i={id:"",snippet:{title:"",thumbnails:{standard:{url:""}}},statistics:{viewCount:"0",likeCount:"0"}};return"vimeo"===t?(i.id=e.uri.match(A.vimeo_id)[0],i.snippet.title=e.name,i.statistics.viewCount=e.metadata.connections.likes.total,i.statistics.likeCount=e.metadata.connections.likes.total,i.snippet.thumbnails.standard.url=e.pictures.sizes[3].link,i.iframe="https://player.vimeo.com/video/".concat(i.id,"?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=213205"),U(i)):(i.id=e.items[0].id,i.snippet.title=e.items[0].snippet.title,i.statistics.viewCount=e.items[0].statistics.viewCount,i.statistics.likeCount=e.items[0].statistics.likeCount,i.snippet.thumbnails.standard.url=e.items[0].snippet.thumbnails.standard.url,i.iframe="https://www.youtube.com/embed/".concat(i.id),U(i))}};R.propTypes={data:V.a.object.isRequired,provider:V.a.string.isRequired};var T=n.a.createContext({getStoredMovies:[],getFilteredMovies:[],deleteMovie:function(){},getMovieData:function(){},toggleLike:function(){},emptyList:function(){},loadDemo:function(){},sortByDate:function(){},isLoading:!1,isError:!1,resetErrorAlert:function(){}}),B=function(e){var t=e.children,i=Object(a.useState)(JSON.parse(window.localStorage.getItem("movies")||null)),n=Object(s.a)(i,2),r=n[0],c=n[1],l=_(),o=Object(s.a)(l,1)[0],d=o.data,u=o.apiProvider,j=o.isLoading,b=o.isError,h=o.resetErrorAlert,m=o.fetchData;Object(a.useEffect)((function(){p(R(d,u))}),[d]),Object(a.useEffect)((function(){!function(e){window.localStorage.setItem("movies",JSON.stringify(e))}(r)}),[r]);var p=function(e){e&&c(r?[].concat(Object(L.a)(r),[e]):[e])},f=function(){var e=Object(E.a)(D.a.mark((function e(t,i){var a,n,c,l,o,d;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),a=P(i),n=Object(s.a)(a,4),c=n[0],l=n[1],o=n[2],d=n[3],c||l||o){e.next=4;break}return e.abrupt("return");case 4:if(!r||!r.some((function(e){return e.id===o}))){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,m(c,l,d);case 8:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),v=function(){var e=Object(E.a)(D.a.mark((function e(){var t,i,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(C.a)(J),e.prev=1,t.s();case 3:if((i=t.n()).done){e.next=9;break}return a=i.value,e.next=7,f(null,a);case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(T.Provider,{value:{getStoredMovies:function(){return r||null},getFilteredMovies:function(){return r?r.filter((function(e){return!0===e.isLiked})):null},deleteMovie:function(e){e.preventDefault();var t=e.target.parentElement.id,i=JSON.parse(JSON.stringify(r)),a=i.findIndex((function(e){return e.id===t}));i.splice(a,1),c(i)},getMovieData:f,toggleLike:function(e){e.preventDefault();var t=e.target.parentElement.id,i=JSON.parse(JSON.stringify(r)),a=i.findIndex((function(e){return e.id===t}));i[a].isLiked=!i[a].isLiked,c(i)},emptyList:function(){c(null)},loadDemo:v,sortByDate:function(e){var t=JSON.parse(JSON.stringify(r));return e?(t.sort((function(e,t){return new Date(e.addDate)-new Date(t.addDate)})),c(t)):(t.sort((function(e,t){return new Date(t.addDate)-new Date(e.addDate)})),c(t))},isLoading:j,isError:b,resetErrorAlert:h},children:t})},K=i(71),z=function(e){var t=e.id,i=e.handleModal,n=e.likeIconMode,r=e.direction,c=Object(a.useContext)(T);return Object(O.jsxs)(K.a,{className:"position-absolute cardButtons ".concat(r),id:t,children:[Object(O.jsx)(S,{handleClick:i,id:"playMovie",faIcon:"play"}),Object(O.jsx)(S,{handleClick:c.toggleLike,id:"likeButton",faIcon:n}),Object(O.jsx)(S,{handleClick:c.deleteMovie,id:"removeMovie",faIcon:["fas","trash"]})]})},G=i(72);var Q=function(e){var t=e.handleClick,i=e.url,a=void 0===i?"":i,n=e.alt,r=void 0===n?"alternate text":n;return Object(O.jsx)(G.a,{onClick:t,top:!0,width:"100%",src:a,alt:r,style:{cursor:"pointer"}})},q=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),i=Object(s.a)(t,2),n=i[0],r=i[1],c=function(){return r(!n)};return[{isOpen:n,handleModal:c}]};q.proptypes={initialState:V.a.oneOfType([V.a.bool,V.a.string]).isRequired};var W=q,$=i(91),H=i(73),X=i(74),Y=function(e){var t=e.isOpen,i=e.toggleVisibility,a=e.title,n=e.iframeUrl,r=document.getElementById("modal-container");return c.a.createPortal(Object(O.jsxs)($.a,{isOpen:t,toggle:i,className:"modal-xl modal-dialog-centered","min-height":"900px",modalTransition:{timeout:700},backdropTransition:{timeout:1300},children:[" ",Object(O.jsx)(H.a,{toggle:i,children:a}),Object(O.jsx)(X.a,{children:Object(O.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:Object(O.jsx)("iframe",{title:a,src:n,width:"100%",height:"100%",allow:"autoplay",allowFullScreen:!0})})})]}),r)},Z=i(17),ee=i(37),te=i(38);Z.b.add(ee.a,te.a);var ie=function(e){var t=e.thumbnails,i=e.id,a=e.title,n=e.date,r=e.views,c=e.likes,l=e.liked,o=e.iframeUrl,d=W(),u=Object(s.a)(d,1)[0],j=u.isOpen,b=u.handleModal;return Object(O.jsxs)(x.a,{id:i,className:"h-100",children:[Object(O.jsxs)("div",{className:"image-container position-relative",children:[" ",Object(O.jsx)(Q,{url:t.standard.url,handleClick:b}),Object(O.jsx)("div",{className:"image-onhover",children:Object(O.jsx)("p",{children:"Play"})})]}),Object(O.jsxs)(g.a,{className:"h-100 position-relative",children:[Object(O.jsx)(Y,{isOpen:j,toggleVisibility:b,title:a,iframeUrl:o}),Object(O.jsx)(k.a,{tag:"h5",children:a}),Object(O.jsxs)(y.a,{children:["Added: ",n]}),Object(O.jsxs)(y.a,{children:["Viev count: ",r]}),Object(O.jsxs)(y.a,{children:["Like count: ",c]}),Object(O.jsx)(z,{id:i,handleModal:b,likeIconMode:l?["fas","heart"]:["far","heart"]})]})]})},ae=i(79),ne=function(e){var t=e.handleView,i=e.handleFiltering,n=e.btnValue,r=e.btnFilterValue,c=Object(a.useContext)(T);return Object(O.jsx)(K.a,{className:"btn-group btn-group-sm d-flex justify-content-center",role:"group","aria-label":"...",children:Object(O.jsxs)(ae.a,{xs:"2",sm:"3",md:"6",className:"container-fluid",children:[Object(O.jsx)(S,{handleClick:function(){return t()},value:n,id:"toggleView"}),Object(O.jsx)(S,{handleClick:function(e){return c.loadDemo(e)},value:"Show demo",id:"loadDemo"}),Object(O.jsx)(S,{handleClick:function(e){return c.emptyList(e)},value:"Clear list",id:"clearList"}),Object(O.jsx)(S,{handleClick:function(){return c.sortByDate(!0)},value:"Sort by oldest",id:"sortByOldest"}),Object(O.jsx)(S,{handleClick:function(){return c.sortByDate(!1)},value:"Sort by newest",id:"sortByNewest"}),Object(O.jsx)(S,{handleClick:function(){return i()},value:r,id:"clearList"})]})})},re=i(84),ce=i(85),se=i(80),le=function(e){var t=e.id,i=e.title,a=e.date,n=e.views,r=e.likes,c=e.thumbnails,s=e.liked,l=e.iframeUrl,o=e.isOpen,d=e.handleModal,u=e.likeIcon,j=e.unlikeIcon;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(K.a,{className:"w-50 p-0",children:[Object(O.jsx)(se.a,{left:!0,href:"#",className:"mr-1 mb-2 d-flex",children:Object(O.jsxs)("div",{className:"image-container position-relative ml-0",children:[" ",Object(O.jsx)(se.a,{object:!0,src:c.standard.url,alt:"Generic placeholder image",onClick:d}),Object(O.jsx)("div",{className:"image-onhover",children:Object(O.jsx)("p",{children:"Play"})})]})}),Object(O.jsxs)("p",{className:"list_element_mob_details",children:["Date added:",Object(O.jsx)("br",{})," ",a,Object(O.jsx)("hr",{}),"Views:",Object(O.jsx)("br",{}),n,Object(O.jsx)("hr",{}),"Likes:",Object(O.jsx)("br",{}),r]})]}),Object(O.jsxs)(se.a,{body:!0,className:"mt-1 mr-1",children:[Object(O.jsx)(se.a,{heading:!0,className:"w-100 mb-5 ml-2 media_heading",children:i}),Object(O.jsx)(z,{id:t,handleModal:d,likeIconMode:s?j:u,direction:""})]}),Object(O.jsx)(Y,{isOpen:o,toggleVisibility:d,title:i,iframeUrl:l})]})},oe=function(e){var t=e.id,i=e.title,a=e.date,n=e.views,r=e.likes,c=e.thumbnails,s=e.liked,l=e.iframeUrl,o=e.isOpen,d=e.handleModal,u=e.likeIcon,j=e.unlikeIcon;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Y,{isOpen:o,toggleVisibility:d,title:i,iframeUrl:l}),Object(O.jsx)(se.a,{left:!0,href:"#",className:"w-auto mr-5 d-flex",children:Object(O.jsxs)("div",{className:"image-container position-relative ml-0",children:[" ",Object(O.jsx)(se.a,{object:!0,src:c.standard.url,alt:"Generic placeholder image",onClick:d}),Object(O.jsx)("div",{className:"image-onhover",children:Object(O.jsx)("p",{children:"Play"})})]})}),Object(O.jsxs)(se.a,{body:!0,className:"mt-3",children:[Object(O.jsx)(se.a,{heading:!0,className:"w-75",children:i}),Object(O.jsxs)("p",{children:["Date added: ",a," / Views: ",n," / Likes: ",r]}),Object(O.jsx)(z,{id:t,handleModal:d,likeIconMode:s?j:u,direction:"column"})]})]})};var de=function(e){var t=W(),i=Object(s.a)(t,1)[0],n=i.isOpen,r=i.handleModal,c=Object(a.useState)(window.innerWidth),l=Object(s.a)(c,2),o=l[0],d=l[1];Object(a.useEffect)((function(){window.addEventListener("resize",(function(){d(window.innerWidth)}))}));var u=Object(I.a)(Object(I.a)({},e),{},{isOpen:n,handleModal:r,likeIcon:["far","heart"],unlikeIcon:["fas","heart"]});return Object(O.jsx)(se.a,{id:e.id,className:"position-relative w-100 mt-3",tag:"li",children:o<760?Object(O.jsx)(le,Object(I.a)({},u)):Object(O.jsx)(oe,Object(I.a)({},u))})},ue=i(81),je=i(82),be=i(83),he=function(e){for(var t=e.handleClick,i=e.itemsPerPage,a=e.totalItems,n=[],r=1;r<=Math.ceil(a/i);r++)n.push(r);return Object(O.jsxs)(ue.a,{className:"m-auto","aria-label":"Page navigation",children:[Object(O.jsx)(je.a,{id:"first",children:Object(O.jsx)(be.a,{onClick:function(){return t(1)},first:!0,href:"#"})}),n.map((function(e){return Object(O.jsx)(je.a,{id:e,children:Object(O.jsx)(be.a,{onClick:function(){return t(e)},href:"#",children:e})})})),Object(O.jsx)(je.a,{id:"last",children:Object(O.jsx)(be.a,{onClick:function(){return t(n.length)},last:!0,href:"#"})})]})},me="Display tiles",Oe="Display list",pe="Show all",fe="Show liked";var ve=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),i=t[0],n=t[1],r=Object(a.useState)(me),c=Object(s.a)(r,2),l=c[0],o=c[1],d=Object(a.useState)(pe),u=Object(s.a)(d,2),j=u[0],b=u[1],h=Object(a.useState)(!1),m=Object(s.a)(h,2),p=m[0],f=m[1],v=Object(a.useState)(1),x=Object(s.a)(v,2),g=x[0],k=x[1],y=Object(a.useState)(8),w=Object(s.a)(y,1)[0],N=Object(a.useContext)(T),C=Object(a.useState)(N.getStoredMovies()),M=Object(s.a)(C,2),D=M[0],E=M[1],L=D&&D.length,I=g*w,_=I-w,F=D&&D.slice(_,I);Object(a.useEffect)((function(){if(p)return k(1),void E(N.getFilteredMovies());E(N.getStoredMovies())}),[p,N]),Object(a.useEffect)((function(){o(i?Oe:me)}),[i]),Object(a.useEffect)((function(){b(p?pe:fe)}),[p]);var V=Object(O.jsx)(he,{handleClick:function(e){k(e)},itemsPerPage:w,totalItems:L});return D?Object(O.jsxs)("main",{className:"container-fluid d-flex flex-column py-5 px-0 mt-3 mx-0 w-100",role:"main",children:[Object(O.jsx)(ne,{handleView:function(){n(!i)},handleFiltering:function(){f(!p)},btnValue:l,btnFilterValue:j}),i?Object(O.jsx)(K.a,{fluid:"true",className:"px-4",children:Object(O.jsx)(ae.a,{xs:"1",md:"2",lg:"4",xl:"10",children:Object(O.jsx)(O.Fragment,{children:F.map((function(e){return Object(O.jsx)(ce.a,{className:"my-2 align-items-stretch",children:Object(O.jsx)(ie,{id:e.id,title:e.snippet.title,date:e.addDate,views:e.statistics.viewCount,likes:e.statistics.likeCount,thumbnails:e.snippet.thumbnails,liked:e.isLiked,iframeUrl:e.iframe})},e.id)}))})})}):Object(O.jsx)(K.a,{children:Object(O.jsx)(re.a,{type:"unstyled",children:F.map((function(e){return Object(O.jsx)(de,{id:e.id,title:e.snippet.title,date:e.addDate,views:e.statistics.viewCount,likes:e.statistics.likeCount,thumbnails:e.snippet.thumbnails,liked:e.isLiked,iframeUrl:e.iframe},e.id)}))})}),L>w?V:null]}):Object(O.jsx)("main",{className:"container d-flex vh-100",role:"main",children:Object(O.jsxs)("div",{className:"m-auto",children:[Object(O.jsx)("h5",{children:"No movies, add some to your list or load demo:"}),Object(O.jsx)(S,{handleClick:function(e){return N.loadDemo(e)},value:"Show demo",id:"loadDemo"})]})})};var xe=function(){return Object(O.jsx)(ve,{})},ge=i(88),ke=i(89),ye=i(90),we=i(86);var Ne=function(e){var t=e.name,i=void 0===t?"":t,a=e.id,n=void 0===a?"":a,r=e.type,c=void 0===r?"text":r,s=e.placeholder,l=e.onchangeHandler,o=e.ariaLabelledby,d=void 0===o?"":o;return Object(O.jsx)(we.a,{name:i,id:n,type:c,placeholder:s,onChange:function(e){return l(e)},ariaLabelledby:d})},Se=i(87);var Ce=function(e){var t=e.id,i=void 0===t?"":t,a=e.labelValue,n=void 0===a?"":a;return Object(O.jsx)(Se.a,{htmlFor:i,hidden:!0,children:n})};var Me=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),i=t[0],n=t[1],r=Object(a.useContext)(T);return Object(O.jsx)("main",{className:"container d-flex vh-100",role:"main",children:r.isError?Object(O.jsxs)("div",{className:"m-auto",children:[Object(O.jsx)("h2",{children:"Something went wrong, try again later"}),Object(O.jsx)(S,{handleClick:function(){return r.resetErrorAlert()},id:"closeAlert",value:"Try again"})]}):Object(O.jsx)("div",{className:"m-auto",children:r.isLoading?Object(O.jsx)(ge.a,{color:"info"}):Object(O.jsx)(ke.a,{inline:!0,onSubmit:function(e){return r.getMovieData(e,i)},children:Object(O.jsxs)(ye.a,{className:"mb-2 mr-sm-2 mb-sm-0",children:[Object(O.jsx)(Ce,{id:"url",labelName:"URL/ID",labelValue:"URL or video's id"}),Object(O.jsx)(Ne,{name:"movieURL",id:"url",type:"text",placeholder:"Type video url or id...",value:i,onchangeHandler:function(e){e.preventDefault(),n(e.target.value)}}),Object(O.jsx)(S,{type:"submit",value:"Get movie!",id:"getMovie"})]})})})})};var De=function(){return Object(O.jsx)(Me,{})},Ee=(i(60),i(61),i(10)),Le=function(){return Object(O.jsx)(l.a,{basename:"/video_app_04_2021",children:Object(O.jsx)(B,{children:Object(O.jsx)(v,{children:Object(O.jsxs)(Ee.c,{children:[Object(O.jsx)(Ee.a,{path:"/",exact:!0,children:Object(O.jsx)(De,{})}),Object(O.jsx)(Ee.a,{path:"/movie-list",exact:!0,children:Object(O.jsx)(xe,{})})]})})})})};c.a.render(Object(O.jsx)(a.StrictMode,{children:Object(O.jsx)(Le,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.1354e7e3.chunk.js.map