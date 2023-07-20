
export const ItemDetail = ({item}) =>{

    return(
        <div className="container">
            <h3>Nombre: {item.name}</h3>
            <img className="item_img" src={"https://dummyimage.com/200x200/000/fff.png"} alt={item.name}/>    
            <p>Descripcion: {item.description}</p>
            <p>Precio: ${item.cost}</p>    
            <div className="container_contador">
                <button className="btn btn-primary">-</button>
                <input className="container__contador__input w-25" type="text" />
                <button className="btn btn-primary">+</button>
            </div>
        </div>
    )
}