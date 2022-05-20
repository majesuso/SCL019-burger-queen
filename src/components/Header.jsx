import ViewSelection from "./ViewSelection";
// import iconTakeOrder from '../graphic-resources/icons/takeOrder.svg'
// import iconKitchen from '../graphic-resources/icons/kitchen.svg'
// import iconOrdersReady from '../graphic-resources/icons/ordersReady.svg'
import logoBurgerQueen from "../graphic-resources/burgerQueen.svg"
import { Link } from "react-router-dom";
import './header.css';

function HeaderBurger() {
    return (
        <header>
            <div>
                <img src={logoBurgerQueen} alt="Logo Burger Queen" className="logoHeader" />
            </div>
            <Link to="/">
                <button className="btn-warning btn-large">Tomar Pedidos</button>
            </Link>
            <Link to="kitchen">
                <button className="btn-warning btn-large">Cocina</button>
            </Link>
        </header>);
}

export default HeaderBurger;