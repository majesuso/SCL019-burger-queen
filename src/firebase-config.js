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

// // Función para acceder a la data
// export const readData = async() => { 
//     const querySnapshot = await getDocs(collection(db, "menus")); //getDocs (traer coleccion "menus" de database (Firestore) )
//     querySnapshot.forEach((doc) => {
//       console.log(doc.data());
//       return (doc.data())
//     });
// }


// let menuBreakfast = doc.data().breakfast;
//         console.log(menuBreakfast);
//         for(let i = 0; i < menuBreakfast.length; ++i){
//             console.log(menuBreakfast[i].item);
//             let itemBreakfast = menuBreakfast[i].item;
//         }