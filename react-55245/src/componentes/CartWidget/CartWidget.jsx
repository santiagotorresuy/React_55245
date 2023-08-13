import {Link} from "react-router-dom"

export const CartWidget = ({ cart, removeItem, emptyCart, totalPrice }) =>{

    return(
        <div className="cart mt-5"> 
            <div className="cart__h2">
                <h2 className="mb-4 align-self-start">Tu compra</h2>  
            </div>
            <table className="table cart__table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Unidades</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart.map((item) =>{
                        return(
                            <tr key={item.id}>
                                <td scope="row"><img className="cart__table__img" src={item.image} alt="" /></td>
                                <td>{item.title}</td>
                                <td>US$ {item.cost}</td>
                                <td>{item.quantity}</td>
                                <td>US$ {Math.ceil(item.quantity * item.cost)}</td>                        
                                <td>
                                    <button className="cart__table__remove" onClick={() => removeItem(item.id)}> 
                                        <img src="/trashCanIcon.png" alt="" />
                                    </button>
                                </td>    
                            </tr>
                        )
                    })
                } 
                    <tr>
                        <th scope="row"></th>
                        <td></td> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>USD {Math.ceil(totalPrice())}</td>                        
                        <td></td>    
                    </tr>
                </tbody>
            </table>  
            <div className="cart__buyDelete">
                <button onClick={emptyCart} className="cart__buyDelete-delete">Descartar</button>
                <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
                {/* <button onClick={buyItems} className="cart__buyDelete-buy">Comprar</button> */}
            </div>
        </div>
    )
} 