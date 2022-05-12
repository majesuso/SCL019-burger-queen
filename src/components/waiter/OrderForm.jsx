import './orderForm.css'
import iconKitchen from '../../graphic-resources/icons/kitchen.svg'
import iconDeleteItem from '../../graphic-resources/icons/iconDeleteItem.svg'
import { Fragment } from "react";

const OrderForm = ({ stateDataOrder, clientData, setFormtDataFunction }) => {

    // función que detecta cambios en el input
    const handleInputChange = (event) => {
        setFormtDataFunction({
            ...clientData,
            [event.target.name]: event.target.value
        })
        console.log(clientData.clientName + ', mesa: ' + clientData.table);
    }

    const deleteItem = () => {

    }

    const addedItems = stateDataOrder.map(function (element) {
        return (
            <div className="itemAdded" key={element.id}>
                <div className="counterOrder">
                    <span>{element.count}</span>
                </div>
                <span className="itemOrder">{element.item}</span>
                <div className="price_btnDelete">
                    <span>$ {element.price}</span>
                    <button className="buttonDeleteItem">
                        <img src={iconDeleteItem} alt="borrar item" className="iconDeleteItem" />
                    </button>
                </div>
            </div>
        )
    });

    // suma total pedio
    const totalOrder = stateDataOrder.reduce(
        (total, element) => (total = total + element.price * element.count),
        0
    );

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
                {addedItems}
                <p>
                    <span>Total:</span>
                    <span>$ {totalOrder}</span>
                </p>

                <button className="btnSendOrder" type="submit">
                    Enviar
                    <img src={iconKitchen} alt="icono cocina" className="iconSendOrder" />
                </button>
            </section>
        </Fragment>
    )
}

export default OrderForm;