// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    // configuration de firebase, on remplace l'egalité par ";"
  firebaseConfig : {
    apiKey: "AIzaSyA3OQ_FH6Ny5h330Zu16qzrvBpnX3igzlw",
    authDomain: "ionicapp-b2bf3.firebaseapp.com",
    projectId: "ionicapp-b2bf3",
    storageBucket: "ionicapp-b2bf3.appspot.com",
    messagingSenderId: "446647479296",
    appId: "1:446647479296:web:2380e385f8dfb43dfa7ce5",
    measurementId: "G-6CVSS5H297"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
