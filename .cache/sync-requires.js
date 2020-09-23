const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/404.jsx"))),
  "component---src-pages-deprecated-bio-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/deprecated/bio.js"))),
  "component---src-pages-deprecated-live-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/deprecated/live.js"))),
  "component---src-pages-epk-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/epk.js"))),
  "component---src-pages-epk-honeydew-jsx": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/epk/honeydew.jsx"))),
  "component---src-pages-home-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/home.js"))),
  "component---src-pages-honeydew-jsx": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/honeydew.jsx"))),
  "component---src-pages-honeydew-story-jsx": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/honeydewStory.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/index.js"))),
  "component---src-pages-insta-js": hot(preferDefault(require("/Users/Meghan/Documents/BRIDES/web dev/shai-brides-v2/src/pages/insta.js")))
}

