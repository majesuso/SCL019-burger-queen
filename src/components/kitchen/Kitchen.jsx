import { Fragment } from "react";
import HeaderBurger from '../Header';

const Kitchen = () => {
    return (
        <Fragment>
            <HeaderBurger />
            <main>
                <div>
                    <p>Nombre Cliente</p>
                    <div>
                        <p>mesa</p>
                        <p>100</p>
                    </div>
                </div>
                <div>
                    <div>
                        <span>1</span>
                        <span>item</span>
                    </div>
                    <button>Listo</button>
                </div>
            </main>
        </Fragment>
    )
}
