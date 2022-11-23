
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBiHiop8_lTIqsNWpSZGXgQRW-LNXGqMpY",
    authDomain: "oscar-teach-cursos.firebaseapp.com",
    projectId: "oscar-teach-cursos",
    storageBucket: "oscar-teach-cursos.appspot.com",
    messagingSenderId: "483470891404",
    appId: "1:483470891404:web:7f9a2517866ef8b75b1ea9",
    measurementId: "G-LC5DRLNSC4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
