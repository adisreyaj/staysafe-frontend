/*
 * File: environment.prod.ts
 * Project: staysafe-frontend
 * File Created: Sunday, 5th April 2020 1:46:10 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 11th April 2020 12:10:30 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export const environment = {
  production: true,
  backend: 'https://staysafeappbackend.herokuapp.com',
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
