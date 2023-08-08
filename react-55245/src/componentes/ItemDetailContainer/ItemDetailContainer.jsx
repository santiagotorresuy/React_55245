import "./ItemDetailContainer.scss"
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null)
    const {itemId} = useParams();
    
    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/item`)
            .then((response) => response.json())
            .then((data) => {
                setItem(data.results.find((item) => item.url === `https://pokeapi.co/api/v2/item/${itemId}/`))
            })
        }, [itemId])

    return(
        <div className="container item__detail__container">
            {
                item ? <ItemDetail url={item.url} /> : <p>Loading item...</p>
            }
            
        </div>
    )
}