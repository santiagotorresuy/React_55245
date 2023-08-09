import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemList from "../ItemList/ItemList";

export const ItemListContainer = () =>{
    const [itemList, setList] = useState([])
    const [retry, setRetry] = useState(0)
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/item`)
    
    const { categoryId } = useParams();

    const [pagination, setPagination] = useState({
        next: null,
        previous: null
    })

    const handleNext = () =>{
        pagination.next && setUrl(pagination.next)
    }

    const handlePrevious = () =>{
        pagination.previous && setUrl(pagination.previous)
    }


    useEffect(() =>{
        let urlFilter;

        if(categoryId){
            urlFilter =  `https://pokeapi.co/api/v2/item-category/${categoryId}/`
        }else{
            urlFilter = url
        }

        fetch(urlFilter)
            .then((response) => response.json())
            .then((data) => {
                setList(data.items || data.results)

                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
    }, [url, categoryId, retry])


    useEffect(() =>{
        const i = setInterval (() =>{
            setRetry(v => v+1)
        }, 10000)

        return () => clearInterval(i)
    }, [])


    return(
        <div className="container item__list__container w-75 mt-5">
            <h2 className="mb-4">PokeItems</h2>
            <hr />
            
            <ItemList 
                itemList={itemList}
            />

            <div className="row justify-content-between mb-5">
                <button onClick={handlePrevious} className="btn btn-primary col-2">Previous</button>
                <button onClick={handleNext} className="btn btn-primary col-2 ">Next</button>
            </div>
        </div>
    )
}


