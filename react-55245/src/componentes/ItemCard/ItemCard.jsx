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
        <div className="item__card">
            {   
                item && <Item item={item} url={url}/>
            }
        </div>
    )
}