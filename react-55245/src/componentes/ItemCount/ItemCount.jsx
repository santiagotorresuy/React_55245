import "./ItemCount.scss"

export const ItemCount = ({ quantity, setQuantity, item }) =>{
    
    const handleAdd = () =>{
        quantity < 1 && setQuantity(quantity + 1)
    }

    const handleSubstract = () =>{
        quantity > 1 && setQuantity(quantity - 1)
    }   

    const handleAddCart = () =>{
        console.log(`Producto: ${item.name}, Cantidad: ${quantity}`)
    }

    return(
        <div className="item__count__container">
            <div className="item__count">
                <button onClick={handleSubstract} className="btn btn-primary">-</button>
                <span className="ps-2 pe-2">{quantity}</span>
                <button onClick={handleAdd} className="btn btn-primary">+</button>
            </div>
            <button onClick={handleAddCart} type="button" className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}

