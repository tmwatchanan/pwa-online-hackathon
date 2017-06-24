importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/css/bootstrap-material-design.css",
    "revision": "ce5efeaac7708180e77c73ca53cf96d9"
  },
  {
    "url": "/css/bootstrap-material-design.min.css",
    "revision": "9b0b052023e5604b78ac2205aab639d3"
  },
  {
    "url": "/css/bootstrap-theme.css",
    "revision": "5e55d993120696109783de9ffc5dec48"
  },
  {
    "url": "/css/bootstrap-theme.min.css",
    "revision": "9f0b6c56b43e75b28733a94b2d1eb302"
  },
  {
    "url": "/css/bootstrap.css",
    "revision": "794f8177af9645a4f4e2d74fa0c1cc73"
  },
  {
    "url": "/css/bootstrap.min.css",
    "revision": "5057f321f0dc85cd8da94a0c5f67a8f4"
  },
  {
    "url": "/css/ripples.css",
    "revision": "87f803996a34e3ede0e342ae3138bf3e"
  },
  {
    "url": "/css/ripples.min.css",
    "revision": "3bbbc74ff0df44a0528193ab9931a96b"
  },
  {
    "url": "/images/manifest\\qna_icon-192x192.png",
    "revision": "497dd362e110f9f08f92447817595c9b"
  },
  {
    "url": "/images/manifest\\qna_icon-512x512.png",
    "revision": "7578488a84bf7445624cf2133ee45b1b"
  },
  {
    "url": "/images/manifest\\qna_icon-original.png",
    "revision": "0183742c00beb8f1c8fbdfe10833864d"
  },
  {
    "url": "/index.html",
    "revision": "73d67f38feee9d0029fa724dbff63387"
  },
  {
    "url": "/js/application.js",
    "revision": "c78fd7899545d8912628c646c34962a9"
  },
  {
    "url": "/js/bootstrap.js",
    "revision": "24276f268f56771dc4141e6b3d93a2aa"
  },
  {
    "url": "/js/bootstrap.min.js",
    "revision": "04c84852e9937b142ac73c285b895b85"
  },
  {
    "url": "/js/jquery-3.2.1.min.js",
    "revision": "473957cfb255a781b42cb2af51d54a3b"
  },
  {
    "url": "/js/material.js",
    "revision": "807e35ba98bae10c7224b2571463d727"
  },
  {
    "url": "/js/material.min.js",
    "revision": "10e934daceea8cb2a461929059067cf3"
  },
  {
    "url": "/js/npm.js",
    "revision": "9ec191bedba9f5132306169274b67e05"
  },
  {
    "url": "/js/ripples.js",
    "revision": "c3169d34e8543bb33ee2592c03a9d279"
  },
  {
    "url": "/js/ripples.min.js",
    "revision": "5a2784b6144150cf06e80e527bd7421a"
  },
  {
    "url": "/template.html",
    "revision": "e8e32f114f4f8aa196dc6d940c3119b6"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/__\/firebase\/.*\.js$/, workboxSW.strategies.networkFirst());
