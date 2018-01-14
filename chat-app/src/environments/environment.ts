// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBxRmlJzKrGqNwoeL8lGy26SkoEHHMD_RI",
    authDomain: "chat-app-fb666.firebaseapp.com",
    databaseURL: "https://chat-app-fb666.firebaseio.com",
    projectId: "chat-app-fb666",
    storageBucket: "chat-app-fb666.appspot.com",
    messagingSenderId: "127963030675"
  }
};
