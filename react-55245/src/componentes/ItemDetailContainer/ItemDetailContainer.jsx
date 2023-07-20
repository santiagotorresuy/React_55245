import { useEffect, useState} from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () =>{
    const [item, setItem] = useState([])
    const {itemId} = useParams()

    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/item`)
            .then((response) => response.json())
            .then((data) => {
                setItem(data.results.filter((item) => item.url === `https://pokeapi.co/api/v2/item/${itemId}/`))
            })
    }, [])

    return(
        <div className="container">
            {
                <ItemDetail item={item}/>
            }
        </div>
    )
}