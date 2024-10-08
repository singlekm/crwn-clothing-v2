// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/Auth';
//import { Auth } from "parse-server/lib/Auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOkyUL_yWp_WHhVTZvRYwk6QWpMoGW30Q",
  authDomain: "crwn-clothing-db-54cac.firebaseapp.com",
  projectId: "crwn-clothing-db-54cac",
  storageBucket: "crwn-clothing-db-54cac.appspot.com",
  messagingSenderId: "850772635041",
  appId: "1:850772635041:web:456a3edd6e53b17c482fe0"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.set