
export const ItemDetail = ({item}) =>{

    return(
        <div className="container">
            <h1>{item.name}</h1>
            <img className="item_img" src={item.sprites.default} alt={item.name}/>    
            <p>{item.description}</p>
            <p>Precio: ${item.cost}</p>    
            <div className="container_contador">
                <button className="btn btn-primary">-</button>
                <input className="container__contador__input w-25" type="text" />
                <button className="btn btn-primary">+</button>
            </div>
        </div>
    )
}