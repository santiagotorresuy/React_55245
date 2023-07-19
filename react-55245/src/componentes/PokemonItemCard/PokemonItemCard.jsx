import { useState, useEffect } from "react";

export const PokemonItemCard = ({url}) =>{
    const [pokeItem, setItem] = useState(null)

    useEffect(() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItem(data)
            })
    }, [])


    return(
        <div className="col w-auto">
            {   
                pokeItem && 
                    <>
                        <h4 className="item__name">{pokeItem.name}</h4>
                        <img className="item_img" src={pokeItem.sprites.default} alt={pokeItem.name}/>
                        <p>Precio: {pokeItem.cost}$</p>
                    </>
            }

            <div className="container_contador">
                <button className="btn btn-primary">-</button>
                <input className="container__contador__input" type="text" />
                <button className="btn btn-primary">+</button>
            </div>
        </div>
    )


}