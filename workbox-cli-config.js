module.exports = {
  "globDirectory": "public\\",
  "globPatterns": [
    "**/*.{html,js,css,png,jpg}",
  ],
  "swDest": "public/sw.js",
  "globIgnores": [
    "..\\workbox-cli-config.js"
  ],
  "runtimeCaching": [{
    urlPattern: /__\/firebase\/.*\.js$/,
    handler: "networkFirst"
  }]
};
