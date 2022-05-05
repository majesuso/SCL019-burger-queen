import iconKitchen from '../../graphic-resources/icons/kitchen.svg'
import { Fragment } from "react";

const OrderForm = () => {
    return (
        <Fragment>
            <section className="sectionOrder">
                <form className="orderForm">
                    <div className="inputOrder">
                        <label for="clientName" className = "labelInputOrder">Cliente</label>
                        <input type="text" id="clientName"></input>
                    </div>
                    <div className="inputOrder">
                        <label for="tableNumber" className = "labelInputOrder">Mesa</label>
                        <input type="text" id="tableNumber"></input>
                    </div>
                </form>
                <button className="btnSendOrder">Enviar<img src={iconKitchen} alt="icono cocina" className = "iconSendOrder"/></button>
            </section>
        </Fragment>
    )
}

export default OrderForm;