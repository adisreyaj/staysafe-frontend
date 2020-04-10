/*
 * File: environment.ts
 * Project: staysafe-frontend
 * File Created: Sunday, 5th April 2020 1:46:10 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 10th April 2020 4:36:47 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export const environment = {
  production: false,
  backend: 'http://localhost:3000',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
