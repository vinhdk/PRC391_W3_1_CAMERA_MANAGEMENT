// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: '',
  token: 'cw-token',
  apiLink: {
    endPoint: 'http://localhost:8888',
    // endPoint: 'https://vianh-cosmetic-store-be.herokuapp.com',
    auth: {
      main: '/api/Auth',
      token: '/api/Auth/Token',
    },
    category: {
      getById: '/api/Category/',
      main: '/api/Category',
    },
    brand: {
      getById: '/api/Brand/',
      main: '/api/Brand',
    },
    camera: {
      getById: '/api/Camera/',
      main: '/api/Camera',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
