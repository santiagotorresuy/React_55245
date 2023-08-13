import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

export const ProdContext = createContext()
 
export const ProdProvider = ({children}) =>{
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
        <ProdContext.Provider value={{
            products,
            setProducts,
            loading,
            setLoading,
            categoryId
        }}>
            {children}
        </ProdContext.Provider>
    )
}