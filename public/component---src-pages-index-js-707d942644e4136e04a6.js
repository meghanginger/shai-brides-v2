(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"5gJQ":function(e,t,a){a("m210"),a("4DPX"),e.exports=function(){"use strict";var e=function(e,t,a,i){return(e/=i/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};return function(){function a(){return window.scrollY||window.pageYOffset}function i(e){return e.getBoundingClientRect().top+o}function n(e){m||(m=e),p=l(h=e-m,o,u,f),window.scrollTo(0,p),h<f?requestAnimationFrame(n):(window.scrollTo(0,o+u),r&&d&&(r.setAttribute("tabindex","-1"),r.focus()),"function"==typeof g&&g(),m=!1)}var r=void 0,o=void 0,s=void 0,c=void 0,l=void 0,d=void 0,u=void 0,f=void 0,m=void 0,h=void 0,p=void 0,g=void 0;return function(m){var h=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(f=h.duration||1e3,c=h.offset||0,g=h.callback,l=h.easing||e,d=h.a11y||!1,o=a(),void 0===m?"undefined":t(m)){case"number":r=void 0,d=!1,s=o+m;break;case"object":s=i(r=m);break;case"string":r=document.querySelector(m),s=i(r)}switch(u=s-o+c,t(h.duration)){case"number":f=h.duration;break;case"function":f=h.duration(u)}requestAnimationFrame(n)}}()}()},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),c=i(a("pVnL")),l=i(a("q1tI")),d=i(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return h(t||a).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=m(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),l.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function k(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function O(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+s+a+i+t+r+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,r=e.ariaHidden,o=l.default.createElement(I,(0,c.default)({src:t},n,{ariaHidden:r}));return a.length>1?l.default.createElement("picture",null,i(a),o):o},I=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:a,srcSet:i,src:n},h,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,k=e.loading,O=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,c.default)({opacity:L?1:0,transition:j?"opacity "+b+"ms":"none"},s),M="boolean"==typeof v?"lightgray":v,P={transitionDelay:b+"ms"},x=(0,c.default)({opacity:this.state.imgLoaded?0:1},j&&P,{},s,{},f),C={title:t,alt:this.state.isVisible?"":a,style:x,className:m,itemProp:E};if(p){var D=p,R=h(p);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),M&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&P)}),R.base64&&l.default.createElement(_,{ariaHidden:!0,src:R.base64,spreadProps:C,imageVariants:D,generateSources:N}),R.tracedSVG&&l.default.createElement(_,{ariaHidden:!0,src:R.tracedSVG,spreadProps:C,imageVariants:D,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,w(D),l.default.createElement(I,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:k,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,c.default)({alt:a,title:t,loading:k},R,{imageVariants:D}))}}))}if(g){var q=g,W=h(g),z=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},r);return"inherit"===r.display&&delete z.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},M&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:M,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},j&&P)}),W.base64&&l.default.createElement(_,{ariaHidden:!0,src:W.base64,spreadProps:C,imageVariants:q,generateSources:N}),W.tracedSVG&&l.default.createElement(_,{ariaHidden:!0,src:W.tracedSVG,spreadProps:C,imageVariants:q,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,w(q),l.default.createElement(I,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:k,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,c.default)({alt:a,title:t,loading:k},W,{imageVariants:q}))}}))}return null},t}(l.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),M=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});j.propTypes={resolutions:H,sizes:M,fixed:d.default.oneOfType([H,d.default.arrayOf(H)]),fluid:d.default.oneOfType([M,d.default.arrayOf(M)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=j;t.default=P},"9uPK":function(e){e.exports=JSON.parse('{"joie":"https://open.spotify.com/embed/album/1ABN57mZtJXHAYjFJIq31l","tokyo":"https://open.spotify.com/embed/album/3wa3m16bjkDp0cG87zPNZH","shaiBrides":"https://open.spotify.com/embed/artist/4ubmraLEMNqkNnWkvnq0a5"}')},"E+pY":function(e){e.exports=JSON.parse('[{"day":"22","month":"AUG","venue":"Castle & Falcon","city":"Birmingham","desc":"Sonic Gun Weekender","ticketLink":"https://www.seetickets.com/tour/sonic-gun-weekender"},{"day":"19","month":"SEP","venue":"Victoria Dalston","city":"London","desc":"With Ten Hands High","ticketLink":"https://www.fatsoma.com/scruffoftheneck/re9wk4td/ten-hands-high-london-the-victoria"},{"day":"24","month":"SEP","venue":"Hare & Hounds","city":"Birmingham","desc":"With Nimmo","ticketLink":"https://www.skiddle.com/whats-on/Birmingham/Hare-And-Hounds/Nimmo-Postponed-to-Sept-24th/13691627/"},{"day":"09","month":"DEC","venue":"The Castle & Falcon","city":"Birmingham","desc":"With Larkins","ticketLink":"https://www.seetickets.com/event/larkins/the-castle-and-falcon/1471113"}]')},IZKO:function(e,t,a){"use strict";a("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.removeHash=t.goToAnchor=t.configureAnchors=t.goToTop=void 0;var i=a("x69a");Object.defineProperty(t,"goToAnchor",{enumerable:!0,get:function(){return i.updateHash}}),Object.defineProperty(t,"removeHash",{enumerable:!0,get:function(){return i.removeHash}});var n=a("rwaV");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}});var r=o(a("PNjJ"));function o(e){return e&&e.__esModule?e:{default:e}}t.goToTop=r.default.goToTop,t.configureAnchors=r.default.configure},"LP6/":function(e){e.exports=JSON.parse('[{"quote":"One of the strongest debuts I\'ve ever heard on this program","author":"Alex Noble, BBC Introducing West Midlands"},{"quote":"“Joie de Vivre” centers around a catchy riff and has quickly become a fan favorite, always gaining a big reaction when played live.","author":"Henry Ager, Luna Collective Magazine"},{"quote":"Well I just love Shai Brides, aren\'t they fantastically wonderful pals and incredible scenes right there","author":"Denty.lad"}]')},PNjJ:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r=a("5gJQ"),o=(i=r)&&i.__esModule?i:{default:i},s=a("zL0W"),c=a("vj/Q"),l=a("x69a");var d={offset:0,scrollDuration:400,keepLastAnchorHash:!1};t.default=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addListeners=function(){window.addEventListener("scroll",t.scrollHandler,!1),window.addEventListener("hashchange",t.handleHashChange)},this.removeListeners=function(){window.removeEventListener("scroll",t.scrollHandler,!1),window.removeEventListener("hashchange",t.handleHashChange)},this.configure=function(e){t.config=n({},d,e)},this.goToTop=function(){0!==(0,c.getScrollTop)()&&(t.forcedHash=!0,window.scroll(0,0))},this.addAnchor=function(e,a){0===Object.keys(t.anchors).length&&t.addListeners(),t.forceHashUpdate(),t.anchors[e]=a},this.removeAnchor=function(e){delete t.anchors[e],0===Object.keys(t.anchors).length&&t.removeListeners()},this.handleScroll=function(){var e=t.config,a=e.offset,i=e.keepLastAnchorHash,n=(0,c.getBestAnchorGivenScrollLocation)(t.anchors,a);n&&(0,l.getHash)()!==n?(t.forcedHash=!0,(0,l.updateHash)(n,!1)):n||i||(0,l.removeHash)()},this.handleHashChange=function(e){t.forcedHash?t.forcedHash=!1:t.goToSection((0,l.getHash)())},this.goToSection=function(e){var a=t.anchors[e];a?(0,o.default)(a,{duration:t.config.scrollDuration,offset:t.config.offset}):(a=document.getElementById(e))&&(0,o.default)(a,{duration:0,offset:t.config.offset})},this.anchors={},this.forcedHash=!1,this.config=d,this.scrollHandler=(0,s.debounce)(this.handleScroll,100),this.forceHashUpdate=(0,s.debounce)(this.handleHashChange,1)}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return S}));var i=a("q1tI"),n=a.n(i),r=a("bSoT"),o=a("9eSz"),s=a.n(o),c="undefined"!=typeof window&&window.innerWidth<783,l=function(e){var t=e.data;return n.a.createElement(s.a,{fluid:c?t.homeMobile.childImageSharp.fluid:t.homeDesktop.childImageSharp.fluid,alt:"Shai brides in fairground",className:"homeImageMobile"})},d=a("Bl7J"),u=a("vrFN"),f=a("kdo8"),m=a("nNMD"),h=a("LP6/"),p=function(){return n.a.createElement(d.a,null,n.a.createElement("h1",{className:"joieHeader is-dark-blue-bg is-white"},"TOKYO DRIFT"),n.a.createElement("div",{className:"joieVideo"},n.a.createElement("video",{"text-align":"middle",loop:!0,width:"200%",muted:!0,autoPlay:!0,className:"joieVideo",playsInline:!0},n.a.createElement("source",{src:r.a.Tokyo.Video,type:"video/mp4"}))),n.a.createElement("div",{className:"is-light-blue-bg joieContentDiv"},n.a.createElement("div",{className:"is-light-blue-bg container row override"},n.a.createElement("div",{className:"col-sm-4 col-md-5 col-xs-12 imageSpotifyWrapper"},n.a.createElement("img",{src:r.a.Tokyo.Album,alt:"",className:"joieImage"}),n.a.createElement(m.a,{className:"spotifyPlayer",link:"tokyo"})),n.a.createElement("div",{className:"col-sm-8 col-md-7 col-xs-12 quotesWrapper"},h.map((function(e){return n.a.createElement("div",{className:"quoteWrapper",id:e.quote},n.a.createElement("h5",null,'"'+e.quote+'"'),n.a.createElement("h6",null,e.author))})))),n.a.createElement("h3",{className:"pad-1"},"OUT NOW ON ALL STREAMING PLATFORMS")))},g=a("pgBQ"),v=a("rxbv"),b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"joieHeader is-light-blue-bg is-dark-blue"},"ABOUT THE BAND"),n.a.createElement("div",{className:"bioText is-light-blue-bg container-fluid"},v.map((function(e){return n.a.createElement("p",{className:"bioPara"},e.Text)}))))},y=a("W/9C"),E=a("IZKO"),w=a.n(E),k="undefined"!=typeof window&&window.innerWidth<480?"Mobile":"Desktop",S="2644175222";t.default=function(e){var t=e.data;return n.a.createElement(d.a,null,n.a.createElement(u.a,{title:"SHAI BRIDES"}),n.a.createElement("div",{className:"indexContainer"},n.a.createElement(l,{data:t})),n.a.createElement("div",{className:"logoHomeDiv"+k},n.a.createElement("img",{src:r.a.Logos.white,className:"logoHome"+k})),n.a.createElement("div",{className:"arrowHomeDiv"+k},n.a.createElement("a",{href:"#live"},n.a.createElement("img",{src:r.a.Icons["Down-arrow"],className:"downIcon"+k}))),n.a.createElement(w.a,{id:"live"},n.a.createElement("div",{className:"emptyDiv"})),n.a.createElement("div",{className:"is-mint-bg landingLiveDiv container-fluid"},n.a.createElement("h1",null,"UPCOMING SHOWS"),n.a.createElement(g.a,{data:t})),n.a.createElement(w.a,{id:"tokyo"},n.a.createElement("div",{className:"emptyDiv"})),n.a.createElement(p,null),n.a.createElement(w.a,{id:"joie"},n.a.createElement("div",{className:"emptyDiv"})),n.a.createElement(f.a,null),n.a.createElement(w.a,{id:"about-the-band"},n.a.createElement("div",{className:"emptyDiv"})),n.a.createElement(b,null),n.a.createElement(y.a,{bgColour:"dark-blue"}))}},SGlo:function(e,t,a){"use strict";var i=a("rj/q"),n=a("N+BI").getWeak,r=a("1a8y"),o=a("BjK0"),s=a("xa9o"),c=a("yde8"),l=a("Wadk"),d=a("qDzq"),u=a("O1i0"),f=l(5),m=l(6),h=0,p=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,r){var l=e((function(e,i){s(e,l,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=i&&c(i,a,e[r],e)}));return i(l.prototype,{delete:function(e){if(!o(e))return!1;var a=n(e);return!0===a?p(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!o(e))return!1;var a=n(e);return!0===a?p(u(this,t)).has(e):a&&d(a,this._i)}}),l},def:function(e,t,a){var i=n(r(t),!0);return!0===i?p(e).set(t,a):i[e._i]=a,e},ufstore:p}},"W/9C":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("bSoT"),o=a("Wbzz");t.a=function(e){var t=e.bgColour;return n.a.createElement("div",{className:"is-"+t+"-bg footerBg"},n.a.createElement(o.Link,{to:"/"},n.a.createElement("img",{src:r.a.Logos.white,className:"footerLogo"})),n.a.createElement("div",{className:"footerIconDiv"},n.a.createElement("a",{href:"https://www.instagram.com/shaibrides"},n.a.createElement("img",{src:a("VdDP")})),n.a.createElement("a",{href:"https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ"},n.a.createElement("img",{src:a("8v9T")})),n.a.createElement("a",{href:"https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg"},n.a.createElement("img",{src:a("kszv")})),n.a.createElement("a",{href:"mailto:shaibrides@gmail.com"},n.a.createElement("img",{src:a("eGLO")})),n.a.createElement("a",{href:"https://www.facebook.com/shaibrides"},n.a.createElement("img",{src:a("kX2+")}))))}},bSoT:function(e,t,a){"use strict";t.a={Landing:{Desktop:["https://ik.imagekit.io/shaibrides/compressed_landing/beach-desktop_UR-sKKLHS.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/forest-desktop_JvIaPzcyJ.jpg","https://ik.imagekit.io/shaibrides/Fairground_UD8O2ZDch.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/sunnies-desktop_j_TxIxPxV.jpg"],Mobile:["https://ik.imagekit.io/shaibrides/compressed_landing/beach-mobile_PC8vL6rCo.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/bush-mobile_W-ku-kD5sL.jpg","https://ik.imagekit.io/shaibrides/Fairground_UD8O2ZDch.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/forest-mobile_Zmb42FxYOL.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/rollercoaster-mobile_7oh0mk0rC.jpg"]},Logos:{white:"https://ik.imagekit.io/shaibrides/logos/white_K7zz8o5eK.png"},Icons:{Spotify:"https://ik.imagekit.io/shaibrides/icons/spotify_TpyfSfU1JB.svg",Mail:"https://ik.imagekit.io/shaibrides/icons/mail_B2ak5meUNk.svg",Youtube:"https://ik.imagekit.io/shaibrides/icons/youtube_uQnMtzZkLZ.svg",Insta:"https://ik.imagekit.io/shaibrides/icons/insta_2Qinxm-HUJ.svg",Facebook:"https://ik.imagekit.io/shaibrides/icons/facebook_zotJB9q7m.svg","Down-arrow":"https://ik.imagekit.io/shaibrides/icons/down-icon_veIgIkFnh.svg"},Joie:{Album:"https://ik.imagekit.io/shaibrides/Joie/joie_itLHQatx_.jpg",Video:"https://ik.imagekit.io/shaibrides/video/Joie/JOIE_WEB_COMPRESSED_5JGsp27q5.mp4"},Tokyo:{Album:"https://ik.imagekit.io/shaibrides/Tokyo/TOKYO_DRIFT_COVER_FINAL_TWi-BcP4Snn.png",Video:"https://ik.imagekit.io/shaibrides/video/Tokyo/TOKYO_WEB_B_COMPRESSED_OD8xu2qsE.mp4"}}},eMsz:function(e,t,a){"use strict";var i,n=a("emib"),r=a("Wadk")(0),o=a("IYdN"),s=a("N+BI"),c=a("k5Iv"),l=a("SGlo"),d=a("BjK0"),u=a("O1i0"),f=a("O1i0"),m=!n.ActiveXObject&&"ActiveXObject"in n,h=s.getWeak,p=Object.isExtensible,g=l.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(d(e)){var t=h(e);return!0===t?g(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(u(this,"WeakMap"),e,t)}},y=e.exports=a("94Pd")("WeakMap",v,b,l,!0,!0);f&&m&&(c((i=l.getConstructor(v,"WeakMap")).prototype,b),s.NEED=!0,r(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];o(t,e,(function(t,n){if(d(t)&&!p(t)){this._f||(this._f=new i);var r=this._f[e](t,n);return"set"==e?this:r}return a.call(this,t,n)}))})))},kdo8:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("Bl7J"),o=a("nNMD"),s=a("bSoT"),c=a("LP6/");t.a=function(){return n.a.createElement(r.a,null,n.a.createElement("h1",{className:"joieHeader is-black-bg is-white"},"JOIE DE VIVRE"),n.a.createElement("div",{className:"joieVideo"},n.a.createElement("video",{"text-align":"middle",loop:!0,width:"200%",muted:!0,autoPlay:!0,className:"joieVideo",playsInline:!0},n.a.createElement("source",{src:s.a.Joie.Video,type:"video/mp4"}))),n.a.createElement("div",{className:"is-j-blue-bg joieContentDiv"},n.a.createElement("div",{className:"is-j-blue-bg container row override"},n.a.createElement("div",{className:"col-sm-5 col-md-5 col-xs-12 imageSpotifyWrapper"},n.a.createElement("img",{src:s.a.Joie.Album,alt:"",className:"joieImage"}),n.a.createElement(o.a,{className:"spotifyPlayer",link:"joie"})),n.a.createElement("div",{className:"col-sm-7 col-md-7 col-xs-12 quotesWrapper"},c.map((function(e){return n.a.createElement("div",{className:"quoteWrapper",id:e.quote},n.a.createElement("h5",null,'"'+e.quote+'"'),n.a.createElement("h6",null,e.author))})))),n.a.createElement("h3",{className:"pad-1"},"OUT NOW ON ALL STREAMING PLATFORMS")))}},nNMD:function(e,t,a){"use strict";a("y7hu");var i=a("q1tI"),n=a.n(i),r=a("9uPK");t.a=function(e){var t=e.link;return n.a.createElement("iframe",{src:r[t],width:"300",height:"80",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"})}},pgBQ:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("E+pY");t.a=function(){return r.map((function(e){return n.a.createElement("a",{className:"row liveDiv is-dark-blue",href:e.ticketLink},n.a.createElement("div",{className:"liveDate col-xs-4 col-lg-4"},n.a.createElement("h2",null,e.day),n.a.createElement("h4",null,e.month)),n.a.createElement("div",{className:"liveInfo col-xs-8 col-lg-8"},n.a.createElement("div",{className:"div-ception"},n.a.createElement("h4",null,e.venue,", ",e.desc),n.a.createElement("h3",null,e.city))))}))}},rwaV:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("LagC"),a("pS08"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),n=a("q1tI"),r=l(n),o=l(a("i8i4")),s=l(a("17x9")),c=l(a("PNjJ"));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.id=e.id||e.children.ref,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=o.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);c.default.addAnchor(this.id,e)}},{key:"componentWillUnmount",value:function(){c.default.removeAnchor(this.id)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.id;return r.default.cloneElement(t,{ref:t.ref||a})}}]),t}(n.Component);d.propTypes={children:s.default.node,id:s.default.string},t.default=d},rxbv:function(e){e.exports=JSON.parse('[{"Text":"Shai Brides write pop music trapped inside a disintegrating world of extreme temperatures and ceaseless information, a barrage of blinding screen light on all sides."},{"Text":"Their debut single, ‘Joie de Vivre’, is the theme to a post-apocalyptic video game. Coded with cartridge glitches, corroded guitar melodies and escapist fantasies of true love and teenage apathy amongst the crumbling edifices of a dying planet. The track was named BBC Introducing West Midlands\' Track of the Month for September 2019, with Alex Noble labelling \'Joie de Vivre\' \\"an exception... one of the strongest debuts I\'ve heard in my time on this programme.\\""},{"Text":"The band\'s second single, \'Tokyo Drift\', was released on 6th March 2020 and is a bratty synth-punk futurescape about relationship strain amongst mass destruction, inspired by CD-ROM games and hectic neon chase scenes. The mysterious love of ‘Joie de Vivre’ has gone sour and in its place are lingering doubts, a blistering drum loop and strobe-lit landscapes awash with cold synth glitches and dark skyscrapers. Although written within a week of the band\'s debut single ‘Joie de Vivre’, in the same university bedroom, ‘Tokyo Drift’ marks a bitter change in tone: an eerie staple of what is to come."},{"Text":"Shai Brides are Thom Dent, Jeremy Caglayan, Meghan Avery, Sam Cheeseright and Cameron Williams."}]')},"vj/Q":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("JHok"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i=t.getScrollTop=function(){return document.body.scrollTop||document.documentElement.scrollTop},n=t.getElementOffset=function(e){var t=i(),a=e.getBoundingClientRect(),n=a.top,r=a.bottom;return{top:Math.floor(n+t),bottom:Math.floor(r+t)}},r=t.doesElementContainScrollTop=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=i(),r=n(e).top+t;return a>=r&&a<r+e.offsetHeight},o=t.checkLocationRelevance=function(e,t){var a=n(e),i=a.top,r=a.bottom,o=n(t),s=o.top,c=o.bottom;return i===s?r===c?e<t:c<r:s>i},s=t.checkElementRelevance=function(e,t){return!!e.contains(t)||!(t.contains(e)||!o(e,t))};t.getBestAnchorGivenScrollLocation=function(e,t){var a=void 0,i=void 0;return Object.keys(e).forEach((function(n){var o=e[n];r(o,t)&&(i&&!s(i,o)||(i=o,a=n))})),a}},vrFN:function(e,t,a){"use strict";var i=a("EH9Q"),n=a("q1tI"),r=a.n(n),o=a("TJpk"),s=a.n(o);function c(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,c=i.data.site,l=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},x69a:function(e,t,a){"use strict";a("sPse"),a("sC2a"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});t.getHash=function(){return decodeURI(window.location.hash.slice(1))},t.updateHash=function(e,t){t?window.location.hash=e:window.location.replace("#"+e)},t.removeHash=function(){history.replaceState("",document.title,window.location.pathname+window.location.search)}},zL0W:function(e,t,a){"use strict";a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i=arguments;t.debounce=function(e,t,a){var n=void 0;return function(){var r=i,o=a&&!n;clearTimeout(n),n=setTimeout((function(){n=null,a||e.apply(void 0,r)}),t),o&&e.apply(void 0,r)}}},zTTH:function(e,t,a){"use strict";var i=a("P8UN"),n=a("Wadk")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-index-js-707d942644e4136e04a6.js.map