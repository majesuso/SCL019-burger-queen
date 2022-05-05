import HeaderBurger from '../components/Header';
// import CounterComponent from '../components/Counter';
// import ButtonAddItem from '../components/ButtonAddItem';
import Menus from '../components/waiter/Menus'
import OrderForm from '../components/waiter/OrderForm'
import { Fragment } from 'react';

function ViewTakeOrders() {
    return (
        <Fragment>
            <HeaderBurger />
            <main className = "mainViewTakeOrders">
            <Menus />
            <OrderForm />
            </main>
        </Fragment>
    )

}

export default ViewTakeOrders;
