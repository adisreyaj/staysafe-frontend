/*
 * File: environment.prod.ts
 * Project: staysafe-frontend
 * File Created: Sunday, 5th April 2020 1:46:10 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 4:36:54 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export const environment = {
  production: true,
  backend: 'https://staysafeappbackend.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyAF0DfPP7tojRw0h0twPdPfN3aCsuoA3-4',
    authDomain: 'staysafe-app.firebaseapp.com',
    databaseURL: 'https://staysafe-app.firebaseio.com',
    projectId: 'staysafe-app',
    storageBucket: 'staysafe-app.appspot.com',
    messagingSenderId: '21639293017',
    appId: '1:21639293017:web:5c27bc266a904d71db6948',
    measurementId: 'G-XN8133W761',
  },
};
