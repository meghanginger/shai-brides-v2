const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/.cache/dev-404-page.js"))),
  "component---src-pages-deprecated-404-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/deprecated/404.js"))),
  "component---src-pages-deprecated-bio-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/deprecated/bio.js"))),
  "component---src-pages-deprecated-live-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/deprecated/live.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/index.js")))
}

