(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"5gJQ":function(e,t,a){a("m210"),a("4DPX"),e.exports=function(){"use strict";var e=function(e,t,a,i){return(e/=i/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};return function(){function a(){return window.scrollY||window.pageYOffset}function i(e){return e.getBoundingClientRect().top+o}function n(e){m||(m=e),p=l(h=e-m,o,u,f),window.scrollTo(0,p),h<f?requestAnimationFrame(n):(window.scrollTo(0,o+u),r&&d&&(r.setAttribute("tabindex","-1"),r.focus()),"function"==typeof g&&g(),m=!1)}var r=void 0,o=void 0,s=void 0,c=void 0,l=void 0,d=void 0,u=void 0,f=void 0,m=void 0,h=void 0,p=void 0,g=void 0;return function(m){var h=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(f=h.duration||1e3,c=h.offset||0,g=h.callback,l=h.easing||e,d=h.a11y||!1,o=a(),void 0===m?"undefined":t(m)){case"number":r=void 0,d=!1,s=o+m;break;case"object":s=i(r=m);break;case"string":r=document.querySelector(m),s=i(r)}switch(u=s-o+c,t(h.duration)){case"number":f=h.duration;break;case"function":f=h.duration(u)}requestAnimationFrame(n)}}()}()},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),c=i(a("pVnL")),l=i(a("q1tI")),d=i(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return h(t||a).src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),l.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function k(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function O(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+s+a+i+t+r+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,r=e.ariaHidden,o=l.default.createElement(_,(0,c.default)({src:t},n,{ariaHidden:r}));return a.length>1?l.default.createElement("picture",null,i(a),o):o},_=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:a,srcSet:i,src:n},h,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));_.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,k=e.loading,O=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,c.default)({opacity:L?1:0,transition:j?"opacity "+v+"ms":"none"},s),H="boolean"==typeof b?"lightgray":b,x={transitionDelay:v+"ms"},C=(0,c.default)({opacity:this.state.imgLoaded?0:1},j&&x,{},s,{},f),P={title:t,alt:this.state.isVisible?"":a,style:C,className:m,itemProp:w};if(p){var D=p,q=h(p);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),H&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&x)}),q.base64&&l.default.createElement(I,{ariaHidden:!0,src:q.base64,spreadProps:P,imageVariants:D,generateSources:N}),q.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,src:q.tracedSVG,spreadProps:P,imageVariants:D,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(D),l.default.createElement(_,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:k,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,c.default)({alt:a,title:t,loading:k},q,{imageVariants:D}))}}))}if(g){var R=g,z=h(g),W=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},r);return"inherit"===r.display&&delete W.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},H&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:H,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},j&&x)}),z.base64&&l.default.createElement(I,{ariaHidden:!0,src:z.base64,spreadProps:P,imageVariants:R,generateSources:N}),z.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,src:z.tracedSVG,spreadProps:P,imageVariants:R,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(R),l.default.createElement(_,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:k,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,c.default)({alt:a,title:t,loading:k},z,{imageVariants:R}))}}))}return null},t}(l.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),H=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});j.propTypes={resolutions:M,sizes:H,fixed:d.default.oneOfType([M,d.default.arrayOf(M)]),fluid:d.default.oneOfType([H,d.default.arrayOf(H)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var x=j;t.default=x},"9uPK":function(e){e.exports=JSON.parse('{"joie":"https://open.spotify.com/embed/album/1ABN57mZtJXHAYjFJIq31l","tokyo":"https://open.spotify.com/embed/album/3wa3m16bjkDp0cG87zPNZH","shaiBrides":"https://open.spotify.com/embed/artist/4ubmraLEMNqkNnWkvnq0a5"}')},"E+pY":function(e){e.exports=JSON.parse('[{"day":"22","month":"AUG","venue":"Castle & Falcon","city":"Birmingham","desc":"Sonic Gun Weekender","ticketLink":"https://www.seetickets.com/tour/sonic-gun-weekender"},{"day":"19","month":"SEP","venue":"Victoria Dalston","city":"London","desc":"With Ten Hands High","ticketLink":"https://www.fatsoma.com/scruffoftheneck/re9wk4td/ten-hands-high-london-the-victoria"},{"day":"24","month":"SEP","venue":"Hare & Hounds","city":"Birmingham","desc":"With Nimmo","ticketLink":"https://www.skiddle.com/whats-on/Birmingham/Hare-And-Hounds/Nimmo-Postponed-to-Sept-24th/13691627/"},{"day":"09","month":"DEC","venue":"The Castle & Falcon","city":"Birmingham","desc":"With Larkins","ticketLink":"https://www.seetickets.com/event/larkins/the-castle-and-falcon/1471113"}]')},IZKO:function(e,t,a){"use strict";a("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.removeHash=t.goToAnchor=t.configureAnchors=t.goToTop=void 0;var i=a("x69a");Object.defineProperty(t,"goToAnchor",{enumerable:!0,get:function(){return i.updateHash}}),Object.defineProperty(t,"removeHash",{enumerable:!0,get:function(){return i.removeHash}});var n=a("rwaV");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}});var r=o(a("PNjJ"));function o(e){return e&&e.__esModule?e:{default:e}}t.goToTop=r.default.goToTop,t.configureAnchors=r.default.configure},"LP6/":function(e){e.exports=JSON.parse('[{"quote":"An exception… one of the strongest debuts I’ve heard on this programme... has a real timeless feel while being very 2019 in the process","author":"Alex Noble, BBC Introducing West Midlands"},{"quote":"“Joie de Vivre” centers around a catchy riff and has quickly become a fan favorite, always gaining a big reaction when played live.","author":"Henry Ager, Luna Collective Magazine"},{"quote":"A unique sound which is at once bright, playful and somewhat dystopian, in accordance with the lyrical content","author":"Thomas Armstrong, Redbrick"}]')},PNjJ:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r=a("5gJQ"),o=(i=r)&&i.__esModule?i:{default:i},s=a("zL0W"),c=a("vj/Q"),l=a("x69a");var d={offset:0,scrollDuration:400,keepLastAnchorHash:!1};t.default=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addListeners=function(){window.addEventListener("scroll",t.scrollHandler,!1),window.addEventListener("hashchange",t.handleHashChange)},this.removeListeners=function(){window.removeEventListener("scroll",t.scrollHandler,!1),window.removeEventListener("hashchange",t.handleHashChange)},this.configure=function(e){t.config=n({},d,e)},this.goToTop=function(){0!==(0,c.getScrollTop)()&&(t.forcedHash=!0,window.scroll(0,0))},this.addAnchor=function(e,a){0===Object.keys(t.anchors).length&&t.addListeners(),t.forceHashUpdate(),t.anchors[e]=a},this.removeAnchor=function(e){delete t.anchors[e],0===Object.keys(t.anchors).length&&t.removeListeners()},this.handleScroll=function(){var e=t.config,a=e.offset,i=e.keepLastAnchorHash,n=(0,c.getBestAnchorGivenScrollLocation)(t.anchors,a);n&&(0,l.getHash)()!==n?(t.forcedHash=!0,(0,l.updateHash)(n,!1)):n||i||(0,l.removeHash)()},this.handleHashChange=function(e){t.forcedHash?t.forcedHash=!1:t.goToSection((0,l.getHash)())},this.goToSection=function(e){var a=t.anchors[e];a?(0,o.default)(a,{duration:t.config.scrollDuration,offset:t.config.offset}):(a=document.getElementById(e))&&(0,o.default)(a,{duration:0,offset:t.config.offset})},this.anchors={},this.forcedHash=!1,this.config=d,this.scrollHandler=(0,s.debounce)(this.handleScroll,100),this.forceHashUpdate=(0,s.debounce)(this.handleHashChange,1)}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return C}));var i=a("q1tI"),n=a.n(i),r=(a("y7hu"),a("IRj2")),o=a("NUMY"),s=function(e){var t=e.children,s=(r.data,Object(i.useState)(!1)),c=s[0],l=s[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("head",null,n.a.createElement("meta",{meta:!0,name:"viewport",content:"width=device-width, user-scalable=no"})),n.a.createElement("header",null,c?n.a.createElement("div",{className:"menuDiv"},n.a.createElement("div",{className:"menuDivSecond"},n.a.createElement("img",{className:"xMenu",src:a("QBcf"),alt:"",onClick:function(){l(!1)}}),o.map((function(e){return n.a.createElement("a",{href:e.link},n.a.createElement("h2",null,e.label))})),n.a.createElement("div",{className:"menuIconDiv"},n.a.createElement("a",{href:"https://www.instagram.com/shaibrides"},n.a.createElement("img",{src:a("VdDP")})),n.a.createElement("a",{href:"https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ"},n.a.createElement("img",{src:a("8v9T")})),n.a.createElement("a",{href:"https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg"},n.a.createElement("img",{src:a("kszv")})),n.a.createElement("a",{href:"mailto:shaibrides@gmail.com"},n.a.createElement("img",{src:a("eGLO")})),n.a.createElement("a",{href:"https://www.facebook.com/shaibrides"},n.a.createElement("img",{src:a("kX2+")}))))):n.a.createElement("img",{className:"burgerMenu",src:a("USqV"),alt:"",onClick:function(){l(!0)}})),n.a.createElement("body",null,n.a.createElement("main",null,t)))},c=a("EH9Q"),l=a("TJpk"),d=a.n(l);function u(e){var t=e.description,a=e.lang,i=e.meta,r=e.title,o=c.data.site,s=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:r,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:s}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""};var f=u,m=a("9uPK"),h=function(e){var t=e.link;return n.a.createElement("iframe",{src:m[t],width:"300",height:"80",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"})},p=a("bSoT"),g=a("LP6/"),b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"joieVideo"},n.a.createElement("video",{"text-align":"middle",loop:!0,width:"200%",muted:!0,autoPlay:!0,className:"joieVideo",playsInline:!0},n.a.createElement("source",{src:p.a.Joie.Video,type:"video/mp4"}))),n.a.createElement("div",{className:"is-dark-blue-bg joieContentDiv"},n.a.createElement("div",{className:"is-dark-blue-bg is-white container row override"},n.a.createElement("div",{className:"col-sm-5 col-md-5 col-xs-12 imageSpotifyWrapper"},n.a.createElement("img",{src:p.a.Joie.Album,alt:"",className:"joieImage"}),n.a.createElement(h,{className:"spotifyPlayer",link:"joie"})),n.a.createElement("div",{className:"col-sm-7 col-md-7 col-xs-12 quotesWrapper"},g.map((function(e){return n.a.createElement("div",{className:"quoteWrapper",id:e.quote},n.a.createElement("h5",null,"'"+e.quote+"'"),n.a.createElement("h6",null,e.author))})))),n.a.createElement("h3",{className:"pad-1 is-white"},"OUT NOW ON ALL STREAMING PLATFORMS")))},v=a("cMDM"),y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"joieVideo"},n.a.createElement("video",{"text-align":"middle",loop:!0,width:"200%",muted:!0,autoPlay:!0,className:"joieVideo",playsInline:!0},n.a.createElement("source",{src:p.a.Tokyo.Video,type:"video/mp4"}))),n.a.createElement("div",{className:"is-dark-blue-bg joieContentDiv"},n.a.createElement("div",{className:"is-dark-blue-bg is-white container row override"},n.a.createElement("div",{className:"col-sm-4 col-md-5 col-xs-12 imageSpotifyWrapper tokyoSpotifyWrapper"},n.a.createElement("img",{src:p.a.Tokyo.Album,alt:"",className:"joieImage tokyoImage"}),n.a.createElement(h,{className:"spotifyPlayer",link:"tokyo"})),n.a.createElement("div",{className:"col-sm-8 col-md-7 col-xs-12 quotesWrapper"},v.map((function(e){return n.a.createElement("div",{className:"quoteWrapper",id:e.quote},n.a.createElement("h5",null,"'"+e.quote+"'"),n.a.createElement("h6",null,e.author))})))),n.a.createElement("h3",{className:"pad-1 is-white"},"OUT NOW ON ALL STREAMING PLATFORMS")))},w=a("9eSz"),E=a.n(w),k=a("rxbv"),S=("undefined"!=typeof window&&window.innerWidth,function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,{fluid:t.beachDesktop.childImageSharp.fluid,alt:"Shai brides under the pier",className:"homeImageMobile"}),n.a.createElement("h1",{className:"joieHeader is-dark-blue-bg is-white"},"ABOUT THE BAND"),n.a.createElement("div",{className:"bioText is-dark-blue-bg is-white container-fluid"},k.map((function(e){return n.a.createElement("p",{className:"bioPara"},e.Text)}))))}),N=a("Wbzz"),O=function(e){var t=e.bgColour;return n.a.createElement("div",{className:"is-"+t+"-bg footerBg"},n.a.createElement(N.Link,{to:"/"},n.a.createElement("img",{src:p.a.Logos.white,className:"footerLogo"})),n.a.createElement("div",{className:"footerIconDiv"},n.a.createElement("a",{href:"https://www.instagram.com/shaibrides"},n.a.createElement("img",{src:a("VdDP")})),n.a.createElement("a",{href:"https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ"},n.a.createElement("img",{src:a("8v9T")})),n.a.createElement("a",{href:"https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg"},n.a.createElement("img",{src:a("kszv")})),n.a.createElement("a",{href:"mailto:shaibrides@gmail.com"},n.a.createElement("img",{src:a("eGLO")})),n.a.createElement("a",{href:"https://www.facebook.com/shaibrides"},n.a.createElement("img",{src:a("kX2+")}))))},L=a("IZKO"),T=a.n(L),I=function(e){var t=e.linkId;return n.a.createElement(T.a,{id:t},n.a.createElement("div",{className:"emptyDiv"}))},_="undefined"!=typeof window&&window.innerWidth<480,j=_?"Mobile":"Desktop",M=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"indexContainer"},n.a.createElement(E.a,{fluid:_?t.homeMobile.childImageSharp.fluid:t.homeDesktop.childImageSharp.fluid,alt:"Shai brides in forest",className:"homeImageMobile"})),n.a.createElement("div",{className:"logoHomeDiv"+j},n.a.createElement("img",{src:p.a.Logos.white,className:"logoHome"+j})),n.a.createElement("div",{className:"arrowHomeDiv"+j},n.a.createElement("a",{href:"#live"},n.a.createElement("img",{src:p.a.Icons["Down-arrow"],className:"downIcon"+j}))))},H=a("pgBQ"),x=function(){return n.a.createElement("div",{className:"is-dark-blue-bg container-fluid"},n.a.createElement("h1",{className:"is-white"},"UPCOMING SHOWS"),n.a.createElement(H.a,null))},C="896400345";t.default=function(e){var t=e.data;return n.a.createElement(s,null,n.a.createElement(f,{title:"SHAI BRIDES"}),n.a.createElement(M,{data:t}),n.a.createElement(I,{linkId:"live"}),n.a.createElement(x,null),n.a.createElement(I,{linkId:"tokyo"}),n.a.createElement(y,null),n.a.createElement(I,{linkId:"joie"}),n.a.createElement(b,null),n.a.createElement(I,{linkId:"about-the-band"}),n.a.createElement(S,{data:t}),n.a.createElement(O,{bgColour:"new-blue"}))}},SGlo:function(e,t,a){"use strict";var i=a("rj/q"),n=a("N+BI").getWeak,r=a("1a8y"),o=a("BjK0"),s=a("xa9o"),c=a("yde8"),l=a("Wadk"),d=a("qDzq"),u=a("O1i0"),f=l(5),m=l(6),h=0,p=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,r){var l=e((function(e,i){s(e,l,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=i&&c(i,a,e[r],e)}));return i(l.prototype,{delete:function(e){if(!o(e))return!1;var a=n(e);return!0===a?p(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!o(e))return!1;var a=n(e);return!0===a?p(u(this,t)).has(e):a&&d(a,this._i)}}),l},def:function(e,t,a){var i=n(r(t),!0);return!0===i?p(e).set(t,a):i[e._i]=a,e},ufstore:p}},bSoT:function(e,t,a){"use strict";t.a={Landing:{Desktop:["https://ik.imagekit.io/shaibrides/compressed_landing/beach-desktop_UR-sKKLHS.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/forest-desktop_JvIaPzcyJ.jpg","https://ik.imagekit.io/shaibrides/Fairground_UD8O2ZDch.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/sunnies-desktop_j_TxIxPxV.jpg"],Mobile:["https://ik.imagekit.io/shaibrides/compressed_landing/beach-mobile_PC8vL6rCo.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/bush-mobile_W-ku-kD5sL.jpg","https://ik.imagekit.io/shaibrides/Fairground_UD8O2ZDch.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/forest-mobile_Zmb42FxYOL.jpg","https://ik.imagekit.io/shaibrides/compressed_landing/rollercoaster-mobile_7oh0mk0rC.jpg"]},Logos:{white:"https://ik.imagekit.io/shaibrides/logos/white_K7zz8o5eK.png"},Icons:{Spotify:"https://ik.imagekit.io/shaibrides/icons/spotify_TpyfSfU1JB.svg",Mail:"https://ik.imagekit.io/shaibrides/icons/mail_B2ak5meUNk.svg",Youtube:"https://ik.imagekit.io/shaibrides/icons/youtube_uQnMtzZkLZ.svg",Insta:"https://ik.imagekit.io/shaibrides/icons/insta_2Qinxm-HUJ.svg",Facebook:"https://ik.imagekit.io/shaibrides/icons/facebook_zotJB9q7m.svg","Down-arrow":"https://ik.imagekit.io/shaibrides/icons/down-icon_veIgIkFnh.svg"},Joie:{Album:"https://ik.imagekit.io/shaibrides/Joie/joie_itLHQatx_.jpg",Video:"https://ik.imagekit.io/shaibrides/video/Joie/JOIE_WEB_COMPRESSED_5JGsp27q5.mp4"},Tokyo:{Album:"https://ik.imagekit.io/shaibrides/Tokyo/TOKYO_DRIFT_COVER_FINAL_TWi-BcP4Snn.png",Video:"https://ik.imagekit.io/shaibrides/video/Tokyo/TOKYO_WEB_B_COMPRESSED_OD8xu2qsE.mp4"}}},cMDM:function(e){e.exports=JSON.parse('[{"quote":"Making synth punk a real life thing, Shai Brides mean business... You won’t be surprised to find your head bopping and feet tapping before your first listen is out.","author":"Sam Daly, Clout Magazine"},{"quote":"What a great feel to everything they do. They just do things a little differently, Shai Brides.","author":"Alex Noble, BBC Introducing West Midlands"}]')},eMsz:function(e,t,a){"use strict";var i,n=a("emib"),r=a("Wadk")(0),o=a("IYdN"),s=a("N+BI"),c=a("k5Iv"),l=a("SGlo"),d=a("BjK0"),u=a("O1i0"),f=a("O1i0"),m=!n.ActiveXObject&&"ActiveXObject"in n,h=s.getWeak,p=Object.isExtensible,g=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(d(e)){var t=h(e);return!0===t?g(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(u(this,"WeakMap"),e,t)}},y=e.exports=a("94Pd")("WeakMap",b,v,l,!0,!0);f&&m&&(c((i=l.getConstructor(b,"WeakMap")).prototype,v),s.NEED=!0,r(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];o(t,e,(function(t,n){if(d(t)&&!p(t)){this._f||(this._f=new i);var r=this._f[e](t,n);return"set"==e?this:r}return a.call(this,t,n)}))})))},pgBQ:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("E+pY");t.a=function(){return n.a.createElement("div",{className:"bioText"},r.map((function(e){return n.a.createElement("a",{className:"row liveDiv is-white",href:e.ticketLink},n.a.createElement("div",{className:"liveDate col-xs-4 col-lg-5"},n.a.createElement("h2",null,e.day),n.a.createElement("h4",null,e.month)),n.a.createElement("div",{className:"liveInfo col-xs-8 col-lg-7"},n.a.createElement("div",{className:"div-ception"},n.a.createElement("h4",null,e.venue,", ",e.desc),n.a.createElement("h3",null,e.city))))})))}},rwaV:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("LagC"),a("pS08"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),n=a("q1tI"),r=l(n),o=l(a("i8i4")),s=l(a("17x9")),c=l(a("PNjJ"));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.id=e.id||e.children.ref,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=o.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);c.default.addAnchor(this.id,e)}},{key:"componentWillUnmount",value:function(){c.default.removeAnchor(this.id)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.id;return r.default.cloneElement(t,{ref:t.ref||a})}}]),t}(n.Component);d.propTypes={children:s.default.node,id:s.default.string},t.default=d},rxbv:function(e){e.exports=JSON.parse('[{"Text":"Shai Brides write pop music trapped inside a disintegrating world of extreme temperatures and ceaseless information, a barrage of blinding screen light on all sides."},{"Text":"Their debut single, ‘Joie de Vivre’, is the theme to a post-apocalyptic video game. Coded with cartridge glitches, corroded guitar melodies and escapist fantasies of true love and teenage apathy amongst the crumbling edifices of a dying planet. The track was named BBC Introducing West Midlands\' Track of the Month for September 2019, with Alex Noble labelling \'Joie de Vivre\' \\"an exception... one of the strongest debuts I\'ve heard in my time on this programme.\\""},{"Text":"The band\'s second single, \'Tokyo Drift\', was released on 6th March 2020 and is a bratty synth-punk futurescape about relationship strain amongst mass destruction, inspired by CD-ROM games and hectic neon chase scenes. The mysterious love of ‘Joie de Vivre’ has gone sour and in its place are lingering doubts, a blistering drum loop and strobe-lit landscapes awash with cold synth glitches and dark skyscrapers. Although written within a week of the band\'s debut single ‘Joie de Vivre’, in the same university bedroom, ‘Tokyo Drift’ marks a bitter change in tone: an eerie staple of what is to come."},{"Text":"Shai Brides are Thom Dent, Jeremy Caglayan, Meghan Avery, Sam Cheeseright and Cameron Williams."}]')},"vj/Q":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("JHok"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i=t.getScrollTop=function(){return document.body.scrollTop||document.documentElement.scrollTop},n=t.getElementOffset=function(e){var t=i(),a=e.getBoundingClientRect(),n=a.top,r=a.bottom;return{top:Math.floor(n+t),bottom:Math.floor(r+t)}},r=t.doesElementContainScrollTop=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=i(),r=n(e).top+t;return a>=r&&a<r+e.offsetHeight},o=t.checkLocationRelevance=function(e,t){var a=n(e),i=a.top,r=a.bottom,o=n(t),s=o.top,c=o.bottom;return i===s?r===c?e<t:c<r:s>i},s=t.checkElementRelevance=function(e,t){return!!e.contains(t)||!(t.contains(e)||!o(e,t))};t.getBestAnchorGivenScrollLocation=function(e,t){var a=void 0,i=void 0;return Object.keys(e).forEach((function(n){var o=e[n];r(o,t)&&(i&&!s(i,o)||(i=o,a=n))})),a}},x69a:function(e,t,a){"use strict";a("sPse"),a("sC2a"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});t.getHash=function(){return decodeURI(window.location.hash.slice(1))},t.updateHash=function(e,t){t?window.location.hash=e:window.location.replace("#"+e)},t.removeHash=function(){history.replaceState("",document.title,window.location.pathname+window.location.search)}},zL0W:function(e,t,a){"use strict";a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i=arguments;t.debounce=function(e,t,a){var n=void 0;return function(){var r=i,o=a&&!n;clearTimeout(n),n=setTimeout((function(){n=null,a||e.apply(void 0,r)}),t),o&&e.apply(void 0,r)}}},zTTH:function(e,t,a){"use strict";var i=a("P8UN"),n=a("Wadk")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-index-js-1b02ad94f6d29f8b213c.js.map