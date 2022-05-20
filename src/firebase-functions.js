import { db } from './firebase-config';
import { collection, getDocs, addDoc } from "firebase/firestore";


// Función para acceder a la data
export const readData = async () => {
    const querySnapshot = await getDocs(collection(db, "menus")); //getDocs (traer coleccion "menus" de database (Firestore) )
    //console.log("readData: ", querySnapshot.docs[0].data())
    return querySnapshot.docs[0].data();
}

export const createCollectionOrders = async (client, table, stateOrder, totalValue) => {
    // console.log(client);
    // console.log(table);
    // console.log(stateOrder);
    // console.log(totalValue);
    await addDoc(collection(db, "orders"), {
        // id: docRef.id,
        client: client,
        table: table,
        order: stateOrder,
        totalValue: totalValue
    });
}

// import { useState } from "react";
// import { db } from "../firebase/firebase-config";
// import {collection, addDoc, Timestamp } from "firebase/firestore";

// const CartBreakfast = (props) => {
//   const { cartItems, onAdd, onRemove } = props;
//   console.log(cartItems);
//   const [newName, setNewName] = useState("");
//   const userCollectionRef = collection(db, "orders");

//   const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  
//   const totalPrice = itemsPrice;

//   const createOrder = async () => {
//     console.log("creado")
//     await addDoc(userCollectionRef, {
//       Customer: newName, 
//       Order: cartItems, 
//       status:"Pending",
//       created: Timestamp.fromDate(new Date()),
//     });
//     console.log()
//   }