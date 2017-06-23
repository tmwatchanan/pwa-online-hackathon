let isSubscribed = false;
let swRegistration = null;

// Register the base URL
const baseUrl = document.querySelector('base').href;

// Load and register pre-caching Service Worker
if ('serviceWorker' in navigator  && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');
  window.addEventListener('load', function() {
    navigator.serviceWorker.register(baseUrl + 'service-worker.js')
    .then(function(swReg) {
      console.log('Service Worker is registered (+PushManager)', swReg);

      swRegistration = swReg;
      // initialiseUI();
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
  });
} else {
  console.warn('Push messaging is not supported');
}

function initialiseUI() {
  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }    
    
    // updateBtn();
  });
}

function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed.');

    updateSubscriptionOnServer(subscription);

    isSubscribed = true;

    updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    updateBtn();
  });
}