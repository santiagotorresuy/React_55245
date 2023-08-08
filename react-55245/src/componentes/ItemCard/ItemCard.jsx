import { useState, useEffect } from "react";
import { Item } from "../Item/Item";

export const ItemCard = ({url}) =>{
    const [item, setItem] = useState(null)
    
    useEffect(() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItem(data)
            })
    }, [])

    return(
        <div className="item__list col-3">
            {   
                item && <Item item={item}/>
            }
        </div>
    )
}