"use strict";
const request = require('request-promise');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const https = require('https');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.sendNotification = functions.https.onRequest((request, response) => {
  var options = {
    method: 'POST',
    url: 'https://onesignal.com/api/v1/notifications',
    headers: headers,
    json: true // Automatically stringifies the body to JSON
  };

  rp(options)
    .then(function (parsedBody) {
      // POST succeeded...
    })
    .catch(function (err) {
      // POST failed...
    });
});