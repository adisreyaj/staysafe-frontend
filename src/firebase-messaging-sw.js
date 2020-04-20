/*
 * File: firebase-messaging.js
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 4:44:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 5:38:16 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAF0DfPP7tojRw0h0twPdPfN3aCsuoA3-4',
  authDomain: 'staysafe-app.firebaseapp.com',
  databaseURL: 'https://staysafe-app.firebaseio.com',
  projectId: 'staysafe-app',
  storageBucket: 'staysafe-app.appspot.com',
  messagingSenderId: '21639293017',
  appId: '1:21639293017:web:5c27bc266a904d71db6948',
  measurementId: 'G-XN8133W761',
});

const messaging = firebase.messaging();
