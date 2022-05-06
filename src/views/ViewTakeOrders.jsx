import HeaderBurger from '../components/Header';
// import CounterComponent from '../components/Counter';
// import ButtonAddItem from '../components/ButtonAddItem';
import Menus from '../components/waiter/Menus'
import OrderForm from '../components/waiter/OrderForm'
import { Fragment, useState } from 'react';

function ViewTakeOrders() {
    const [dataOrder, setDataOrder] = useState([]);
    const [formData, setFormtData] = useState({
        clientName: '',
        table: ''
    });

    console.log(dataOrder);

    return (
        <Fragment>
            <HeaderBurger />
            <main className="mainViewTakeOrders">
                <Menus updateOrderFunction={setDataOrder} stateDataOrder={dataOrder} />
                <OrderForm stateDataOrder={dataOrder} clientData={formData} setFormtDataFunction={setFormtData} />
            </main>
        </Fragment>
    )

}

export default ViewTakeOrders;
