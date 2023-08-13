import { useState, useEffect } from "react";
import { getDocs, getDoc, collection } from "firebase/firestore"
import { db } from "../Firebase/config"

export const useProducts = ({ ref }) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [ item, setItem ] = useState(null)

    getDoc(ref)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    


    return { 
        products, 
        setProducts,
        loading,
        setLoading
    }







} 