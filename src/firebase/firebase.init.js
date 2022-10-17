import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBkTRC0zcGEWb-VaQM7ZRlmkMPzsSvmUY8",
   authDomain: "module-57-email-password-adb08.firebaseapp.com",
   projectId: "module-57-email-password-adb08",
   storageBucket: "module-57-email-password-adb08.appspot.com",
   messagingSenderId: "742235707033",
   appId: "1:742235707033:web:25f9bd29489b7843a58a08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;