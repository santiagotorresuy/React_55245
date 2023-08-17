import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";

import { Loader } from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = () =>{

    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ pagination, setPagination] = useState(10)

    const { categoryId } = useParams();

    const handleNext = () =>{
        pagination < 40 && setPagination(prev => prev + 10)
    }

    const handlePrevious = () =>{
        pagination > 10 && setPagination(prev => prev - 10)

    }
    
    useEffect(() =>{
        setLoading(true)
 
        const productsRef = collection(db, "productos")
        const q = categoryId 
                        ? query(productsRef, where("category", "==", categoryId))
                        : productsRef

        getDocs(q)
                .then((resp) => {
                    const docs = resp.docs.map((doc) =>{
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })

                    const sliceProds = docs.slice(pagination, pagination + 10)

                    setProducts(categoryId ? docs : sliceProds)
                })
                .catch(e => console.log(e))
                .finally(() => setLoading(false))    
    }, [categoryId, pagination])
 
    return(  
        <div className="item__list__container container">
            <h2 className="mb-4 mt-5 item__list__container__h2">Lista de productos</h2>
            {
                loading
                    ? <Loader/>
                    : <ItemList itemList={products}/>
            }
            <div className= "item__list__container__btns">
                <button onClick={handlePrevious} className="item__list__container__btn">Atras</button>
                <button onClick={handleNext} className="item__list__container__btn">Siguiente</button>
            </div>
        </div>
    )
}


