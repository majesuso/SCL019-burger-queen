import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";


// Función para acceder a la data
export const readData = async() => { 
    const querySnapshot = await getDocs(collection(db, "menus")); //getDocs (traer coleccion "menus" de database (Firestore) )
    return querySnapshot.docs[0].data();
    
}


// let menuBreakfast = doc.data().breakfast;
//         console.log(menuBreakfast);
//         for(let i = 0; i < menuBreakfast.length; ++i){
//             console.log(menuBreakfast[i].item);
//             let itemBreakfast = menuBreakfast[i].item;
//         }