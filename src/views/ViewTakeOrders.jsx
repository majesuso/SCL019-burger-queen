import HeaderBurger from '../components/Header';
import Menus from '../components/waiter/Menus'
import OrderForm from '../components/waiter/OrderForm'
import { Fragment, useState } from 'react';

function ViewTakeOrders() {

    //estado pedido
    const [dataOrder, setDataOrder] = useState([]);
    //estado datos cliente
    const [formData, setFormData] = useState({
        clientName: '',
        table: ''
    });

    //console.log(dataOrder);

    return (
        <Fragment>
            <HeaderBurger />
            <main className="mainViewTakeOrders">
                <Menus
                    stateDataOrder={dataOrder}
                    updateOrderFunction={setDataOrder}
                />

                <OrderForm
                    stateDataOrder={dataOrder}
                    updateOrderFunction={setDataOrder}
                    clientData={formData}
                    setFormDataFunction={setFormData}
                />
            </main>
        </Fragment>
    )

}

export default ViewTakeOrders;
