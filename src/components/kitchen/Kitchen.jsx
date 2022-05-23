import './kitchen.css'
import { Fragment, useEffect, useState } from "react";
import HeaderBurger from '../Header';
import { db } from "../../firebase-config";
import {
    collection,
    orderBy,
    onSnapshot,
    query,
} from "firebase/firestore";

const Kitchen = () => {

    const [ordersKitchen, setOrdersKitchen] = useState([]);

    useEffect(() => {
        const ordersCollection = collection(db, "orders");
        const q = query(ordersCollection, orderBy("created", "desc"));
        const getOrders = onSnapshot(q, (snapshot) =>
            setOrdersKitchen(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        return getOrders;
    }, []);

    // console.log(ordersKitchen);

        // Eliminar una orden
        const deleteItem = (element) => {
            const exist = ordersKitchen.find((order) => order.id === element.id);
            if (exist.id) {
                setOrdersKitchen(ordersKitchen.filter((item) => item.id !== element.id));
            }
        }    

    const OrderKitchen = ordersKitchen.map(function (order) {
        console.log(order.table);
        return (
            <div className="orderKit" >
                <div className="clientDataKit" >
                    <p className="clientKit" >{order.client}</p>
                    <div className="tableContainerKit">
                        <p className="textTableKit" >mesa</p>
                        <p className="numberTableKit" >{order.table}</p>
                    </div>
                </div>
                <div className="elementsOrderKit" >
                    {order?.order?.length && order.order.map(item =>
                    (
                        <div className="itemsOrderKit" >
                            <div className="itemKitchen" >
                                <span>{item.count}</span>
                                <span>{item.item}</span>
                            </div>
                        </div>
                    )
                    )}
                    <button onClick={()=>deleteItem(order)} className="btnOrderReady" >Listo</button>
                </div>
            </div>
        )
    })


    return (
        <Fragment>
            <HeaderBurger />
            <div className="ordersKit">
                {OrderKitchen}
            </div>
        </Fragment>
    )
}

export default Kitchen;

