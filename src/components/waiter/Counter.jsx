import iconAdd from '../../graphic-resources/icons/addOne.svg';
import iconRemove from '../../graphic-resources/icons/removeOne.svg';
import React, { useState } from 'react';
import iconAddProduct from '../../graphic-resources/icons/addToCart.svg'

const CounterComponent = ({
    element,
    stateDataOrder,
    updateOrderFunction,
    proteinSelected }) => {

    const [countItem, setCountItem] = useState(0); // Desestructurar un arreglo
    const addOne = () => { setCountItem(countItem + 1) };
    const removeOne = () => { setCountItem(countItem - 1) };
    const resetCount = () => {
        if (countItem > 0) {
            return setCountItem(countItem - countItem)
        }
    }

    // // En caso de seleccionen nuevamente un item que ya fue seleccionado sumar a count
    // const repeatedItem = (element) => {
    //     const exist = stateDataOrder.find((item) => item.id === element.id);
    //     if (exist.count) {
    //         updateOrderFunction(stateDataOrder.filter((item) => item.id !== element.id));
    //     }
    // }


    return (
        <div className="btnsItem">

            <div className="counter" >
                <button
                    onClick={removeOne}
                    className="buttonCounter RemoveOne">
                    <img src={iconRemove} alt="icono agregar un elemento" className="iconCounter" />
                </button>
                <p> {countItem} </p>
                <button
                    onClick={addOne}
                    className="buttonCounter AddOne">
                    <img src={iconAdd} alt="icono agregar un elemento" className="iconCounter" />
                </button>
            </div>
            <button
                onClick={() => {
                    updateOrderFunction(stateDataOrder.concat({ ...element, proteinSelected, count: countItem > 0 ? countItem : 1 }));
                    resetCount();
                }
                }
                className="buttonAddItem">
                <img src={iconAddProduct} alt="añadir item al pedido" className="iconAddItem" />
            </button>
        </div>
    );
}



export default CounterComponent;
