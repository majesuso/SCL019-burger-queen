import './menus.css'
import CounterComponent from '../waiter/Counter';
import { readData } from '../../firebase-functions';
import React, { useState, useEffect, Fragment } from 'react';

//Componente que muestra el menú del desayuno y del día
const Menus = ({
    updateOrderFunction,
    stateDataOrder }) => {

    //estado de la data
    const [dataBreakfast, setDataBreakfast] = useState([]);
    const [dataBurgers, setDataBurgers] = useState([]);
    const [dataSnacks, setDataSnacks] = useState([]);
    const [dataDrinks, setDataDrinks] = useState([]);

    //leyendo la data
    useEffect(() => {
        readData().then(res => {
            setDataBreakfast(res.breakfast);
            setDataBurgers(res.burgers);
            setDataSnacks(res.snacks);
            setDataDrinks(res.drinks);
        }
        )
    }, []);

    // mostando cada item del menú desayuno
    const ItemBreakfast = dataBreakfast.map(function (element) {
        return (
            <div key={element.id} className="itemMenu">
                <li className="nameItem">{element.item}</li>
                <CounterComponent
                    element={element}
                    updateOrderFunction={updateOrderFunction}
                    stateDataOrder={stateDataOrder}
                />
            </div>
        )
    });


    // mostando cada item de la sección hamburguesas
    const ItemBurgers = dataBurgers.map(function (element) {
        // const proteinSelected = (event) => {
        //     updateOrderFunction({ ...stateDataOrder, proteinValue: event.target.value })
        // }
        // const extraSelected = (event) => {
        //     updateOrderFunction({ ...stateDataOrder, extraValue: event.target.value })
        // }

        return (
            <Fragment>
                <div key={element.id} className="itemMenu">
                    <li className="nameItem nameItemBurger">{element.item}</li>
                    <CounterComponent
                        element={element}
                        updateOrderFunction={updateOrderFunction}
                        stateDataOrder={stateDataOrder}
                        // chosenProtein={proteinSelected}
                    />
                </div>
                {/* <div className="optionsBurger">
                    <div className="proteinsMenu">
                        <h4 className="titleOptionsBurger">Proteína</h4>
                        {element?.protein?.length && element.protein.map(protein =>
                        (<label className="optionBurger">
                            <input
                                type="radio"
                                id={protein}
                                value={protein}
                                name={element.item}
                                //onChange={proteinSelected}
                            />
                            {protein}
                        </label>)
                        )}
                    </div>

                    <div className="extraMenu">
                        <h4 className="titleOptionsBurger">Extra</h4>
                        {element?.extra?.length && element.extra.map(extra =>
                        (<label className="optionBurger">
                            <input
                                type="radio"
                                id={extra}
                                value={extra}
                                name={element.id}
                            // onChange={extraSelected}
                            />
                            {extra}
                        </label>)
                        )}

                    </div>
                </div> */}
            </Fragment>
        )
    });

    // mostando cada item de la sección acompañamientos
    const ItemSnacks = dataSnacks.map(function (element) {
        return (
            <div key={element.id} className="itemMenu">
                <li className="nameItem">{element.item}</li>
                <CounterComponent
                    element={element}
                    updateOrderFunction={updateOrderFunction}
                    stateDataOrder={stateDataOrder}
                />
            </div>
        )
    });

    // mostando cada item de la sección bebidas
    const ItemDrinks = dataDrinks.map(function (element) {
        return (
            <div key={element.id} className="itemMenu">
                <li className="nameItem">{element.item}</li>
                <CounterComponent
                    element={element}
                    updateOrderFunction={updateOrderFunction}
                    stateDataOrder={stateDataOrder}
                />
            </div>
        )
    });

    // retornando estructura menú
    return (
        <section className="sectionMenus">
            <div className="BreakfastMenu">
                <h1 className="titleMenu"> Menú Desayuno </h1>
                <ul className="itemsMenu">
                    {ItemBreakfast}
                </ul>
            </div>
            <div className="dayMenu">
                <h1 className="titleMenu"> Menú Día </h1>

                <h3 className="titleSectionMenu"> Hamburguesas </h3>
                <ul className="itemsMenu">{ItemBurgers}</ul>

                <h3 className="titleSectionMenu"> Acompañamientos </h3>
                <ul className="itemsMenu">{ItemSnacks}</ul>

                <h3 className="titleSectionMenu"> Bebidas </h3>
                <ul className="itemsMenu">{ItemDrinks}</ul>
            </div>
        </section>

    )
}

export default Menus;