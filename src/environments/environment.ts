// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyDP6q1-h8hCdK-4icJUjpaVrY-nE8yw9JY',
    authDomain: 'authenticationproject-e205f.firebaseapp.com',
    databaseURL: 'https://authenticationproject-e205f.firebaseio.com',
    projectId: 'authenticationproject-e205f',
    storageBucket: 'authenticationproject-e205f.appspot.com',
    messagingSenderId: '590317622386'
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
