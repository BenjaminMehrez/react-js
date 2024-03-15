import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"


const ItemListContainer = () => {

    const [products, setProduts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { cid } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'productos')

        if (cid) {
            
            const queryFilter = query(
                queryCollection,
                where('categoria', '==', cid)
                )

            getDocs(queryFilter)
                .then(resp => setProduts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false))
        } else {

            getDocs(queryCollection)
                .then(resp => setProduts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false))
        }
    }, [cid])


    const handleProductFiltered = ({ filterState, handleFilterChange }) => {

        <div>
            <h2>Buscar Producto</h2>
            <h2>{filterState}</h2>

            <input type="text" value={filterState} onChange={handleFilterChange} />

            <ItemList
                products={
                    filterState === '' ?
                        products
                        :
                        products.filter(product => product.name.toLowerCase().includes(filterState.toLowerCase()))
                }
            />
        </div>
    }



    const handleAgregar = () => {
        setProduts([
            ...products,
            { id: products.length + 1, name: 'Monitor', categoria: 'Monitor', price: 11500, stock: 23 }
        ])
    }

    return (
        <div className="card container">
            {isLoading ?

                <Loading />
                :
                <ItemList products={products} />
            }

        </div>
    )
}

export default ItemListContainer






