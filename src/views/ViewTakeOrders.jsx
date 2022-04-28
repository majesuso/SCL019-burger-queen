import HeaderBurger from '../components/Header';
import CounterComponent from '../components/Counter';
import ButtonAddItem from '../components/ButtonAddItem';
import { Fragment } from 'react';
import Menus from '../components/Menus'

function ViewTakeOrders() {
    
    return (
        <Fragment>
            <HeaderBurger />
            <Menus />
            <div className = "btnsItem">
                <CounterComponent />
                <ButtonAddItem />
            </div>
        </Fragment>
    )

}

export default ViewTakeOrders;
