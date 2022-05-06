//import CounterComponent from '../waiter/Counter';
//import ButtonAddItem from '../waiter/ButtonAddItem';
import iconAddProduct from '../../graphic-resources/icons/addToCart.svg'
import { readData } from '../../firebase-functions';
import React, { useState, useEffect } from 'react';

//Componente que muestra el menú del desayuno y del día
const Menus = ({updateOrderFunction, stateDataOrder}) => {
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

    // const order = dataOrder.map(function (element){
    //     return ()
    // })

    // console.log(dataBreakfast);
    // console.log(dataBurgers);

    // mostando cada item del menú desayuno
    const ItemBreakfast = dataBreakfast.map(function (element) {
        // console.log(element);
        // console.log('dataBreakfast id:', element.id);
        return (
            <div key={element.id} className="item">
                <li>{element.item}</li>
                <div className="btnsItem">
                    {/* <CounterComponent /> */}
                    <button onClick={()=>updateOrderFunction(stateDataOrder.concat(element))} className="buttonAddItem">
                        <img src={iconAddProduct} alt="añadir item al pedido" className="iconAddItem" />
                    </button>
                </div>
            </div>
        )
    });

    // mostando cada item de la sección hamburguesas
    const ItemBurgers = dataBurgers.map(function (element) {
        // console.log(element);
        return (
            <div key={element.id} className="item">
                <li>{element.item}</li>
                <div className="btnsItem">
                    {/* <CounterComponent /> */}
                    <button onClick={()=>updateOrderFunction(stateDataOrder.concat(element))} className="buttonAddItem">
                        <img src={iconAddProduct} alt="añadir item al pedido" className="iconAddItem" />
                    </button>
                </div>
            </div>
        )
    });

    // mostando cada item de la sección acompañamientos
    const ItemSnacks = dataSnacks.map(function (element) {
        // console.log(element);
        return (
            <div key={element.id} className="item">
                <li>{element.item}</li>
                <div className="btnsItem">
                    {/* <CounterComponent /> */}
                    <button onClick={()=>updateOrderFunction(stateDataOrder.concat(element))} className="buttonAddItem">
                        <img src={iconAddProduct} alt="añadir item al pedido" className="iconAddItem" />
                    </button>
                </div>
            </div>
        )
    });

    // mostando cada item de la sección bebidas
    const ItemDrinks = dataDrinks.map(function (element) {
        // console.log(element);
        return (
            <div key={element.id} className="item">
                <li>{element.item}</li>
                <div className="btnsItem">
                    {/* <CounterComponent /> */}
                    <button onClick={()=>updateOrderFunction(stateDataOrder.concat(element))} className="buttonAddItem">
                        <img src={iconAddProduct} alt="añadir item al pedido" className="iconAddItem" />
                    </button>
                </div>
            </div>
        )
    });

    // retornando estructura menú
    return (
        <section className="sectionMenus">
            <div className="BreakfastMenu">
                <h1> Menú Desayuno </h1>
                <ul className="itemMenu">
                    {ItemBreakfast}
                </ul>
            </div>
            <div className="dayMenu">
                <h2> Menú Día </h2>

                <h3> Hamburguesas </h3>
                <ul className="itemMenu">{ItemBurgers}</ul>

                <h3> Acompañamientos </h3>
                <ul className="itemMenu">{ItemSnacks}</ul>

                <h3> Bebidas </h3>
                <ul className="itemMenu">{ItemDrinks}</ul>
            </div>
        </section>

    )
}

export default Menus;