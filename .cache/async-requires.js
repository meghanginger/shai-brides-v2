// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-deprecated-bio-js": () => import("./../src/pages/deprecated/bio.js" /* webpackChunkName: "component---src-pages-deprecated-bio-js" */),
  "component---src-pages-deprecated-live-js": () => import("./../src/pages/deprecated/live.js" /* webpackChunkName: "component---src-pages-deprecated-live-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-insta-js": () => import("./../src/pages/insta.js" /* webpackChunkName: "component---src-pages-insta-js" */)
}

