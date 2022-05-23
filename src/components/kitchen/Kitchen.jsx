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
                    <button className="btnOrderReady" >Listo</button>
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

//  duplicado de prueba
{/* <div className="orderKit" >
    <div className="clientDataKit" >
        <p className="clientKit" >Nombre Cliente</p>
        <div className="tableContainerKit" >
            <p className="textTableKit" >mesa</p>
            <p className="numberTableKit" >100</p>
        </div>
    </div>
    <div className="elementsOrderKit" >
        <div className="itemsOrderKit" >
            <div className="itemKitchen" >
                <span>10</span>
                <span>Hamburguesa simple</span>
            </div>
            <div className="itemKitchen" >
                <span>10</span>
                <span>Hamburguesa simple</span>
            </div>
        </div>
        <button className="btnOrderReady" >Listo</button>
    </div>
</div> */}
export default Kitchen;

