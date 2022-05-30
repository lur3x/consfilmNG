// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  firebase: {
    projectId: 'consfilm-angular',
    appId: '1:255937852837:web:0e571c2157be2599b8244c',
    databaseURL:
      'https://consfilm-angular-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'consfilm-angular.appspot.com',
    apiKey: 'AIzaSyCq7_2snSfv4m44f43ZsPFZjig5Zo6U6zQ',
    authDomain: 'consfilm-angular.firebaseapp.com',
    messagingSenderId: '255937852837',
  },
  apiKey: 'k_qh3q3gfj',
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
import { Environment } from './interface';
