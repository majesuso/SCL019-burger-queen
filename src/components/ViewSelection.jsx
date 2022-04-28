import Select from 'react-select';

const ViewSelection = () => {
    const options = [
        { value: 'tomar pedido', label: 'Tomar Pedido'}, 
        { value: 'cocina', label: 'Cocina' },
        { value: 'pedidos listos', label: 'Pedidos Listos' }
    ];

    return (
        <div className = "viewSelection">
            <Select options = {options}/>
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