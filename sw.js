// Empty service worker – lets the app install and work offline
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('fetch', () => {});
