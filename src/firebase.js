// import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import "firebase/compat/database";
// import "firebase/compat/storage";

// export const auth =  firebase.initializeApp ({
    // apiKey: "AIzaSyDsIs5HQ0frSE82xMZnvSTWAXG4XldR6Gw",
    // authDomain: "connectify-41ab2.firebaseapp.com",
    // projectId: "connectify-41ab2",
    // storageBucket: "connectify-41ab2.appspot.com",
    // messagingSenderId: "615969596942",
    // appId: "1:615969596942:web:c1805f0fe9983906847e5f"
// }).auth();
// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJb8SYMWavejfx7OWz-ntW9Oybe2XEtzc",
    authDomain: "connectify-429310.firebaseapp.com",
    projectId: "connectify-429310",
    storageBucket: "connectify-429310.appspot.com",
    messagingSenderId: "999569367441",
    appId: "1:999569367441:web:3bebc7f01c679f2b867a30",
    measurementId: "G-J69MGKM60L"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
