import ViewSelection from "./ViewSelection";
// import iconTakeOrder from '../graphic-resources/icons/takeOrder.svg'
// import iconKitchen from '../graphic-resources/icons/kitchen.svg'
// import iconOrdersReady from '../graphic-resources/icons/ordersReady.svg'
import logoUno from "../graphic-resources/borrador-logo1.jpeg"
import logoDos from "../graphic-resources/borrador-logo2.jpeg"
import './header.css';

function HeaderBurger() {
    return (
        <header>
            <div>
                <img src={logoUno} alt="Logo Burger Queen" className="logoHeader" />
                <img src={logoDos} alt="Logo Burger Queen" className="logoHeader" />
            </div>
            <ViewSelection />
        </header>);
}

export default HeaderBurger;