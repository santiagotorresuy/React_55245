

export const Cart = ({ cart, removeItem, emptyCart, buyItems, totalPrice }) =>{

    return(
        <div className="cart mt-5">
            <div className="cart__h2">
                <h2 className="mb-4 align-self-start">Tu compra</h2>  
            </div>
            <table className="table cart__table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
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
                                <th scope="row"><img src={item.sprites.default} alt="" /></th>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.cost}</td>                        
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
                        <td>{totalPrice()}</td>                        
                        <td></td>    
                    </tr>
                </tbody>
            </table>  
            <div className="cart__buyDelete">
                <button onClick={emptyCart} className="cart__buyDelete-delete">Descartar</button>
                <button onClick={buyItems} className="cart__buyDelete-buy">Comprar</button>
            </div>
        </div>
    )
}