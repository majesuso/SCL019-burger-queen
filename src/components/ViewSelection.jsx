import Select from 'react-select';
// import takeOrder from '../graphic-resources/icons/takeOrder';
// import kitchen from '../graphic-resources/icons/kitchen';
// import ordersReady from '../graphic-resources/icons/ordersReady';

const ViewSelection = () => {
    const options = [
        { value: 'tomar pedido', label: 'Tomar Pedido' },
        { value: 'cocina', label: 'Cocina' },
        { value: 'pedidos listos', label: 'Pedidos Listos' }
        // { value: 'tomar pedido', label: 'Tomar Pedido', img: {takeOrder}}, 
        // { value: 'cocina', label: 'Cocina', img: {kitchen}},
        // { value: 'pedidos listos', label: 'Pedidos Listos', img: {ordersReady}}

    ];

    return (
        <div className="viewSelection">
            <Select options={options}></Select>
            {/* <Select options = {options}><img src = {img} /></Select> */}
        </div>
    );
}

export default ViewSelection
// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]

//   const MyComponent = () => (
//     <Select options={options} />
//   )