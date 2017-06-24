let swRegistration = null;

// Register the base URL
const baseUrl = document.querySelector('base').href;

// Load and register pre-caching Service Worker
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');
  window.addEventListener('load', function () {
    navigator.serviceWorker.register(baseUrl + 'service-worker.js')
      .then(function (swReg) {
        console.log('Service Worker is registered (+PushManager)', swReg);

        swRegistration = swReg;
      })
      .catch(function (error) {
        console.error('Service Worker Error', error);
      });
  });
} else {
  console.warn('Push messaging is not supported');
}