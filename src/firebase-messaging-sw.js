/*
 * File: firebase-messaging.js
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 4:44:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 4:50:49 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '21639293017',
});

const messaging = firebase.messaging();
