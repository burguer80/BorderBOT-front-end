// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDPvMJQbZBntyEhujr4eOQuHYV1KdhyMXk',
    authDomain: 'borderbot-firebase.firebaseapp.com',
    databaseURL: 'https://borderbot-firebase.firebaseio.com',
    projectId: 'borderbot-firebase',
    storageBucket: 'borderbot-firebase.appspot.com',
    messagingSenderId: '1077219597344'
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
