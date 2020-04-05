// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
export const environment = {
  production: false
};
*/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAZWIDjDD04RI10KW_BX5zr_6g8eQMzuHU",
    authDomain: "wt2-taskman.firebaseapp.com",
    databaseURL: "https://wt2-taskman.firebaseio.com",
    projectId: "wt2-taskman",
    storageBucket: "wt2-taskman.appspot.com",
    messagingSenderId: "741022322226",
    appId: "1:741022322226:web:2f8612e1d243076cab362b",
    measurementId: "G-5QXK3Z4QVJ"
  }
 };


/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZWIDjDD04RI10KW_BX5zr_6g8eQMzuHU",
    authDomain: "wt2-taskman.firebaseapp.com",
    databaseURL: "https://wt2-taskman.firebaseio.com",
    projectId: "wt2-taskman",
    storageBucket: "wt2-taskman.appspot.com",
    messagingSenderId: "741022322226",
    appId: "1:741022322226:web:2f8612e1d243076cab362b",
    measurementId: "G-5QXK3Z4QVJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/