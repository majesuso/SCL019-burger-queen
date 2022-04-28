import iconAddProduct from '../graphic-resources/icons/add-to-cart.svg';

const ButtonAddItem = () => (
    <button className = "buttonAddItem"><img alt = "añadir item al pedido" src = {iconAddProduct} className = "iconAddItem"/></button>
);

export default ButtonAddItem;