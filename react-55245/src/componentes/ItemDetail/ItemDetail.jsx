import { useState, useEffect } from "react"
import  ItemCount  from "../ItemCount/ItemCount"

export const ItemDetail = ({url}) =>{
    const [ quantity, setQuantity ] = useState(1)
    const [ item, setItem ] = useState(null)
    
    useEffect(() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItem(data)
            })
            .catch((err) => console.log(err))
    }, [url]) 

    return(
        <div className="item__detail">
            {   
                item && 
                    <>
                        <img className="item__detail__img" src={item.sprites.default} alt={item.name}/>    
                        <div className="item__details">
                            <h3 className="item__details__name">{item.name}</h3>
                            <p className="item__details__description">Descripcion: "{item.flavor_text_entries[0].text}"</p>
                            <p>Precio: ${item.cost}</p> 

                            <ItemCount
                                item={item}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />    
                        </div>
                    </>
            }                           
        </div>
    )
}