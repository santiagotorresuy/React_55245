import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";

import { Loader } from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = () =>{

    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { categoryId } = useParams();

    
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
                    setProducts(docs)
                })
                .catch(e => console.log(e))
                .finally(() => setLoading(false))    
    }, [categoryId])
 
    return( 
        <div className="item__list__container container">
            <h2 className="mb-4 mt-5 item__list__container__h2">Lista de productos</h2>
            <hr />
            {
                loading
                    ? <Loader/>
                    : <ItemList itemList={products}/>
            }
            <div className="row justify-content-between mb-5">
                <button  className="btn btn-primary col-2">Previous</button>
                <button  className="btn btn-primary col-2 ">Next</button>
            </div>
        </div>
    )
}


