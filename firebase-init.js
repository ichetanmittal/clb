// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzDhX1wXsDmHT8ab2DzTBpImuKucpUVdY",
    authDomain: "clbp-54a10.firebaseapp.com",
    databaseURL: "https://clbp-54a10-default-rtdb.firebaseio.com",
    projectId: "clbp-54a10",
    storageBucket: "clbp-54a10.appspot.com",
    messagingSenderId: "277840169787",
    appId: "1:277840169787:web:cadd855c49ca6e0169851e",
    measurementId: "G-M77VGQ9YJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
