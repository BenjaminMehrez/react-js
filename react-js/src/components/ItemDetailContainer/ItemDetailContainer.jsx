import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    let { pid } = useParams()
    

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db,'productos',pid)

        getDoc(queryDoc)
        .then(resp => setProduct({ id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(()=> setIsLoading(false))
    },[])



    return (
        <>
            {
                isLoading ?
                    <Loading />
                    :
                    <div className="card">
                        <ItemDetail product={product} />
                    </div>
            }

        </>


    )
}

export default ItemDetailContainer






//MOCK
    // useEffect(() => {
    //     mockFetch(pid)
    //         .then(resp => setProduct(resp))
    //         .catch(err => console.log(err))
    //         .finally(()=> setIsLoading(false))
    // }, [])