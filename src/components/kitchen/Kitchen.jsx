import './kitchen.css'
import { Fragment } from "react";
import HeaderBurger from '../Header';

const Kitchen = () => {
    return (
        <Fragment>
            <HeaderBurger />
            <div className="ordersKit">
                <div className="orderKit" >
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
                </div>

                {/* duplicado de prueba*/}
                <div className="orderKit" >
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
                </div>
            </div>
        </Fragment>
    )
}

export default Kitchen;