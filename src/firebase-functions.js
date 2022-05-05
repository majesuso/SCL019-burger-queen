import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";


// Función para acceder a la data
export const readData = async() => { 
    const querySnapshot = await getDocs(collection(db, "menus")); //getDocs (traer coleccion "menus" de database (Firestore) )
    console.log("readData: ", querySnapshot.docs[0].data())
    return querySnapshot.docs[0].data();
}
