import iconAdd from '../graphic-resources/icons/add-one.svg';
import iconRemove from '../graphic-resources/icons/remove-one.svg';

let counter = 0;

const ButtonRemoveOne = () => (
    <button className = "buttonCounter RemoveOne"><img alt = "icono quitar un elemento" src = {iconRemove} className = "iconCounter"/></button>
);

const ButtonAddOne = () => (
    <button className = "buttonCounter AddOne"><img src = {iconAdd} alt = "icono agregar un elemento" className = "iconCounter"/></button>
);

const CounterComponent = () => (
    <div className = "counter" >
        <ButtonRemoveOne/>
        <p> {counter} </p>
        <ButtonAddOne/>
    </div>
);

export default CounterComponent;
