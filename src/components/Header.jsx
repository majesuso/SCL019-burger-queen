import ViewSelection from "./waiter/ViewSelection";
import logoUno from "../graphic-resources/borrador-logo1.jpeg"
import logoDos from "../graphic-resources/borrador-logo2.jpeg"
import './header.css';

function HeaderBurger() {
    // 1. imagen logo
    // 2. select para las vistas

    // ejemplo

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