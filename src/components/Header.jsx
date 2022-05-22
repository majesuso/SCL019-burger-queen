import iconTakeOrder from '../graphic-resources/icons/takeOrder.svg'
import iconKitchen from '../graphic-resources/icons/kitchen.svg'
// import iconOrdersReady from '../graphic-resources/icons/ordersReady.svg'
import logoBurgerQueen from "../graphic-resources/burgerQueen.svg"
import { Link } from "react-router-dom";
import './header.css';

function HeaderBurger() {
    // const feedbackLink= () => {
    //     //si hace click en "tomar pedido"
    //     //aparece una flecha bajo el botón "tomar pedido"
    //     //si existe una flecha bajo el botón cocina desaparace
    //     // y viceversa
    // }
    return (
        <header>
            <div>
                <img src={logoBurgerQueen} alt="Logo Burger Queen" className="logoHeader" />
            </div>
            <div className="navHeader">
                <Link to="/" className="linkRouter" >
                    <button className="btn-takeOrders"><img src={iconTakeOrder} alt="icono tomar pedido" className="iconNavTakeOrder" />Tomar Pedidos</button>
                </Link>
                <Link to="kitchen" className="linkRouter" >
                    <button className="btn-kitchen"><img src={iconKitchen} alt="icono cocina" className="iconNavKitchen" />Cocina</button>
                </Link>
            </div>
        </header>);
}

export default HeaderBurger;