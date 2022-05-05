import iconAdd from '../../graphic-resources/icons/addOne.svg';
import iconRemove from '../../graphic-resources/icons/removeOne.svg';
import React, { useState } from 'react';

const CounterComponent = () => {
    const [count, setCount] = useState(0); // Desestructurar un arreglo

    const addOne = () => { setCount(count + 1) };
    const removeOne = () => { setCount(count - 1) };

    return (
        <div className="counter" >
            <button onClick={removeOne} className="buttonCounter RemoveOne"><img src={iconRemove} alt="icono agregar un elemento" className="iconCounter" /></button>
            <p> {count} </p>
            <button onClick={addOne} className="buttonCounter AddOne"><img src={iconAdd} alt="icono agregar un elemento" className="iconCounter" /></button>
        </div>
    );
}


export default CounterComponent;
