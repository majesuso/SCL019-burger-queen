import iconKitchen from '../../graphic-resources/icons/kitchen.svg'
import iconDeleteItem from '../../graphic-resources/icons/iconDeleteItem.svg'
import { Fragment, useState } from "react";

const OrderForm = ({ stateDataOrder }) => {

    // const [orderData, setOrderData] = useState({
    //     clientName: '',
    //     table: ''
    // });

    // // función que detecta cambios en el input
    // const handleInputChange = (event) => {

    //     //console.log(event.target.value);
    //     setOrderData({
    //         ...orderData,
    //         [event.target.name]: event.target.value
    //     })
    //     console.log(orderData.clientName + ', mesa: ' + orderData.table);
    // }

    const addedItems = stateDataOrder.map(function (element) {
        return (
            <Fragment>
                <p>
                    <span>{element.item}</span>
                    <span>$ {element.price}</span>
                </p>
                <button className="buttonDeleteItem">
                    <img src={iconDeleteItem} alt="borrar item" className="iconDeleteItem" />
                </button>
            </Fragment>
        )
    });

    return (
        <Fragment>
            <section className="sectionOrder">
                <form className="orderForm">
                    <div className="inputOrder">
                        <label className="labelInputOrder">
                            Cliente
                            <input
                                type="text"
                                id="clientName"
                                name="clientName"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="inputOrder">
                        <label className="labelInputOrder">
                            Mesa
                            <input
                                type="text"
                                id="tableNumber"
                                name="table"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                </form>
                <div className="itemAdded">
                    {addedItems}
                </div>
                <button className="btnSendOrder" type="submit">
                    Enviar
                    <img src={iconKitchen} alt="icono cocina" className="iconSendOrder" />
                </button>
            </section>
        </Fragment>
    )
}

export default OrderForm;