import { db } from './firebase-config';
import {
    collection,
    getDocs,
    addDoc,
    Timestamp,
    // onSnapshot,
    // query,
    // orderBy
} from "firebase/firestore";


// Función para acceder a la data
export const readData = async () => {
    const querySnapshot = await getDocs(collection(db, "menus")); //getDocs (traer coleccion "menus" de database (Firestore) )
    //console.log("readData: ", querySnapshot.docs[0].data())
    return querySnapshot.docs[0].data();
}

export const createCollectionOrders = async (client, table, stateOrder, totalValue) => {
    await addDoc(collection(db, "orders"), {
        client: client,
        table: table,
        order: stateOrder,
        totalValue: totalValue,
        created: Timestamp.fromDate(new Date())
    });
}

// export const readDataOrders = async () => {
//     const ordersCollection = collection(db, "orders");
//     const q = query(ordersCollection, orderBy("date", "desc"));
//     const getOrders = await onSnapshot(q, (snapshot) =>
//         (snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//     );
//     console.log(getOrders);
//     return getOrders;
// }
