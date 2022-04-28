import { readData } from '../firebase-functions'


// 1. Mostrar data 
// 2. Por cada item agregar los componentes counter y addItem
const showData = () => {
    return readData().then(res => res.breakfast);
}

// let menuBreakfast = readData().breakfast;
// console.log(menuBreakfast);
// for(let i = 0; i < menuBreakfast.length; ++i){
//     console.log(menuBreakfast[i].item);
//     let itemBreakfast = menuBreakfast[i].item;
//     return itemBreakfast
// }

const Menus = () => {
    return (<div>
        <h1> Menú Desayuno </h1>
        <ul>
            <li>{}</li>
        </ul>
    </div>)
}

export default Menus;