(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5gJQ":function(e,t,n){n("m210"),n("4DPX"),e.exports=function(){"use strict";var e=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};return function(){function n(){return window.scrollY||window.pageYOffset}function o(e){return e.getBoundingClientRect().top+i}function a(e){m||(m=e),v=s(h=e-m,i,d,f),window.scrollTo(0,v),h<f?requestAnimationFrame(a):(window.scrollTo(0,i+d),r&&u&&(r.setAttribute("tabindex","-1"),r.focus()),"function"==typeof p&&p(),m=!1)}var r=void 0,i=void 0,c=void 0,l=void 0,s=void 0,u=void 0,d=void 0,f=void 0,m=void 0,h=void 0,v=void 0,p=void 0;return function(m){var h=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(f=h.duration||1e3,l=h.offset||0,p=h.callback,s=h.easing||e,u=h.a11y||!1,i=n(),void 0===m?"undefined":t(m)){case"number":r=void 0,u=!1,c=i+m;break;case"object":c=o(r=m);break;case"string":r=document.querySelector(m),c=o(r)}switch(d=c-i+l,t(h.duration)){case"number":f=h.duration;break;case"function":f=h.duration(d)}requestAnimationFrame(a)}}()}()},IZKO:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.removeHash=t.goToAnchor=t.configureAnchors=t.goToTop=void 0;var o=n("x69a");Object.defineProperty(t,"goToAnchor",{enumerable:!0,get:function(){return o.updateHash}}),Object.defineProperty(t,"removeHash",{enumerable:!0,get:function(){return o.removeHash}});var a=n("rwaV");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(a).default}});var r=i(n("PNjJ"));function i(e){return e&&e.__esModule?e:{default:e}}t.goToTop=r.default.goToTop,t.configureAnchors=r.default.configure},PNjJ:function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n("5gJQ"),i=(o=r)&&o.__esModule?o:{default:o},c=n("zL0W"),l=n("vj/Q"),s=n("x69a");var u={offset:0,scrollDuration:400,keepLastAnchorHash:!1};t.default=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addListeners=function(){window.addEventListener("scroll",t.scrollHandler,!1),window.addEventListener("hashchange",t.handleHashChange)},this.removeListeners=function(){window.removeEventListener("scroll",t.scrollHandler,!1),window.removeEventListener("hashchange",t.handleHashChange)},this.configure=function(e){t.config=a({},u,e)},this.goToTop=function(){0!==(0,l.getScrollTop)()&&(t.forcedHash=!0,window.scroll(0,0))},this.addAnchor=function(e,n){0===Object.keys(t.anchors).length&&t.addListeners(),t.forceHashUpdate(),t.anchors[e]=n},this.removeAnchor=function(e){delete t.anchors[e],0===Object.keys(t.anchors).length&&t.removeListeners()},this.handleScroll=function(){var e=t.config,n=e.offset,o=e.keepLastAnchorHash,a=(0,l.getBestAnchorGivenScrollLocation)(t.anchors,n);a&&(0,s.getHash)()!==a?(t.forcedHash=!0,(0,s.updateHash)(a,!1)):a||o||(0,s.removeHash)()},this.handleHashChange=function(e){t.forcedHash?t.forcedHash=!1:t.goToSection((0,s.getHash)())},this.goToSection=function(e){var n=t.anchors[e];n?(0,i.default)(n,{duration:t.config.scrollDuration,offset:t.config.offset}):(n=document.getElementById(e))&&(0,i.default)(n,{duration:0,offset:t.config.offset})},this.anchors={},this.forcedHash=!1,this.config=u,this.scrollHandler=(0,c.debounce)(this.handleScroll,100),this.forceHashUpdate=(0,c.debounce)(this.handleHashChange,1)}},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("4XCv"),i="undefined"!=typeof window&&window.innerWidth<480?"Mobile":"Desktop",c=function(){Math.ceil(4*Math.random());return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:r.a.Landing[i][2],alt:"",className:"homeImage"+i}))},l=n("Bl7J"),s=n("vrFN"),u=n("kdo8"),d=n("pgBQ"),f=n("W/9C"),m=n("IZKO"),h=n.n(m);n.d(t,"query",(function(){return p}));var v="undefined"!=typeof window&&window.innerWidth<480?"Mobile":"Desktop",p="139837691";t.default=function(e){var t=e.data;return a.a.createElement(l.a,null,a.a.createElement(s.a,{title:"SHAI BRIDES"}),a.a.createElement("div",{className:"indexContainer"},a.a.createElement(c,null)),a.a.createElement("div",{className:"logoHomeDiv"+v},a.a.createElement("img",{src:r.a.Logos.white,className:"logoHome"+v}),a.a.createElement("a",{href:"#live"},a.a.createElement("img",{src:r.a.Icons["Down-arrow"],className:"downIcon"+v}))),a.a.createElement(h.a,{id:"live"},a.a.createElement("div",{className:"emptyDiv"})),a.a.createElement("div",{className:"is-mint-bg landingLiveDiv"},a.a.createElement("h1",null,"UPCOMING SHOWS"),a.a.createElement(d.a,{data:t})),a.a.createElement(u.a,null),a.a.createElement(f.a,{bgColour:"dark-blue"}))}},kdo8:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("Bl7J"),i=n("nNMD"),c=n("4XCv"),l=n("bZea"),s=n("LP6/");t.a=function(){return a.a.createElement(r.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"joieHeader is-black-bg is-white"},"JOIE DE VIVRE"),a.a.createElement("div",{className:"joieVideo"},a.a.createElement("video",{"text-align":"middle",loop:!0,width:"200%",muted:!0,autoplay:"autoplay",className:"joieVideo"},a.a.createElement("source",{src:l.a.Joie,type:"video/mp4"}))),a.a.createElement("div",{className:"is-j-blue-bg joieContentDiv"},a.a.createElement("div",{className:"is-j-blue-bg container row override"},a.a.createElement("div",{className:"col-sm-5 col-md-5 col-xs-12 imageSpotifyWrapper"},a.a.createElement("img",{src:c.a.Joie.Album,alt:"",className:"joieImage"}),a.a.createElement(i.a,{className:"spotifyPlayer",link:"joie"})),a.a.createElement("div",{className:"col-sm-7 col-md-7 col-xs-12 quotesWrapper"},s.map((function(e){return a.a.createElement("div",{className:"quoteWrapper",id:e.quote},a.a.createElement("h5",null,'"'+e.quote+'"'),a.a.createElement("h6",null,e.author))})))),a.a.createElement("h3",{className:"pad-1"},"OUT NOW ON ALL STREAMING PLATFORMS"))))}},pgBQ:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r="undefined"!=typeof window&&window.innerWidth<783;t.a=function(e){var t=e.data.allMarkdownRemark.edges;return a.a.createElement("a",{className:"row liveDiv is-dark-blue",href:t[0].node.frontmatter.ticketLink},a.a.createElement("div",{className:"liveDate "+(r?"col-xs-4":"col-lg-2")},a.a.createElement("h2",null,t[0].node.frontmatter.day),a.a.createElement("h4",null,t[0].node.frontmatter.month)),a.a.createElement("div",{className:"liveInfo "+(r?"col-xs-8":"col-lg-10")},a.a.createElement("div",{className:"div-ception"},a.a.createElement("h4",null,t[0].node.frontmatter.venue,", ",t[0].node.frontmatter.desc),a.a.createElement("h3",null,t[0].node.frontmatter.city))))}},rwaV:function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("LagC"),n("pS08"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),r=s(a),i=s(n("i8i4")),c=s(n("17x9")),l=s(n("PNjJ"));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.id=e.id||e.children.ref,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=i.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);l.default.addAnchor(this.id,e)}},{key:"componentWillUnmount",value:function(){l.default.removeAnchor(this.id)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.id;return r.default.cloneElement(t,{ref:t.ref||n})}}]),t}(a.Component);u.propTypes={children:c.default.node,id:c.default.string},t.default=u},"vj/Q":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var o=t.getScrollTop=function(){return document.body.scrollTop||document.documentElement.scrollTop},a=t.getElementOffset=function(e){var t=o(),n=e.getBoundingClientRect(),a=n.top,r=n.bottom;return{top:Math.floor(a+t),bottom:Math.floor(r+t)}},r=t.doesElementContainScrollTop=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=o(),r=a(e).top+t;return n>=r&&n<r+e.offsetHeight},i=t.checkLocationRelevance=function(e,t){var n=a(e),o=n.top,r=n.bottom,i=a(t),c=i.top,l=i.bottom;return o===c?r===l?e<t:l<r:c>o},c=t.checkElementRelevance=function(e,t){return!!e.contains(t)||!(t.contains(e)||!i(e,t))};t.getBestAnchorGivenScrollLocation=function(e,t){var n=void 0,o=void 0;return Object.keys(e).forEach((function(a){var i=e[a];r(i,t)&&(o&&!c(o,i)||(o=i,n=a))})),n}},x69a:function(e,t,n){"use strict";n("sPse"),n("sC2a"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});t.getHash=function(){return decodeURI(window.location.hash.slice(1))},t.updateHash=function(e,t){t?window.location.hash=e:window.location.replace("#"+e)},t.removeHash=function(){history.replaceState("",document.title,window.location.pathname+window.location.search)}},zL0W:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.debounce=function(e,t,n){var a=void 0;return function(){var r=o,i=n&&!a;clearTimeout(a),a=setTimeout((function(){a=null,n||e.apply(void 0,r)}),t),i&&e.apply(void 0,r)}}}}]);
//# sourceMappingURL=component---src-pages-index-js-1f8f6eeb1f44297f8c31.js.map