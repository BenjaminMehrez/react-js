import { memo } from "react";
import Item from "../Item/Item"

const ItemList = memo(({ products }) => {

        return (
            <>
                {products.map(product => <Item key={product.id} product={product} />)}
            </>

        )
    }

)
// ,(prevProps, nextProps)=> prevProps.products === nextProps.products) espicificando props particulares


export default ItemList