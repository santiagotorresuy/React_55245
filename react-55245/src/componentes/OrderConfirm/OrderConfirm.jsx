import { Link } from "react-router-dom"


export const OrderConfirm = ({ orderId, orderTotal }) =>{

    return(
        <div className="order">
            <div className="order__container">
                <h2 className="order__container__h2">Compra realizada con exito!</h2>
                <hr />
                <p>Nº de orden:<strong>&nbsp; {orderId}</strong></p>
                <p>Precio total:<strong>&nbsp; US$ {orderTotal}</strong></p>

                <Link className="btn btn-primary" to="/">Volver</Link>
            </div>
        </div>
    )
}