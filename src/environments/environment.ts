// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Para el uso de firebase
  firebase: {
    apiKey: 'AIzaSyC4HDVW81UnVnGg6gweSmW2gZ6nxQVHL-Y',
    authDomain: 'firechat-b49a6.firebaseapp.com',
    databaseURL: 'https://firechat-b49a6.firebaseio.com',
    projectId: 'firechat-b49a6',
    storageBucket: 'firechat-b49a6.appspot.com',
    messagingSenderId: '549676857323',
    appId: '1:549676857323:web:c1c8f9fe82d87e67'
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
