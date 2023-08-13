import { Link } from "react-router-dom"

export const Popup = () =>{

    return(
        <div className="popup">
            <div className="popup__container">
                <h1 className="popup__container__h1 text-warning">No se pudo completar la compra!</h1>
                <p className="mt-3">El carrito esta vacio</p>
                <Link className="popup__container__btn" to="/">Volver</Link>
            </div>
        </div>
    )
} 