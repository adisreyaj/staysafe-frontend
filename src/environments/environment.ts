/*
 * File: environment.ts
 * Project: staysafe-frontend
 * File Created: Sunday, 5th April 2020 1:46:10 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 17th April 2020 12:23:43 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export const environment = {
  production: false,
  backend: 'http://192.168.1.2:3000',
  firebase: {
    apiKey: 'AIzaSyDsGUsquOzxRVGQLqlxMXJL57BCuNCN6HE',
    authDomain: 'staysafe-backend.firebaseapp.com',
    databaseURL: 'https://staysafe-backend.firebaseio.com',
    projectId: 'staysafe-backend',
    storageBucket: 'staysafe-backend.appspot.com',
    messagingSenderId: '25377549210',
    appId: '1:25377549210:web:69316fa29c1933e228e823',
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
