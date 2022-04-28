// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdHahrUjbahPP-0IXO0CVJACJBldCRc1E",
  authDomain: "burger-queen-mjo.firebaseapp.com",
  projectId: "burger-queen-mjo",
  storageBucket: "burger-queen-mjo.appspot.com",
  messagingSenderId: "540853392250",
  appId: "1:540853392250:web:398061679edb12928b3cc3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Inicializa una instancia de Cloud Firestore
export const db = getFirestore(app);

