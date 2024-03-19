import { memo } from "react";
import { Link } from "react-router-dom"

import './Item.css'

const Item = memo(({ product }) => {

        return (
            <div className="card-body">
                <img className="img-item" src={product.img} alt="img" />
                <label>{product.name}</label>
                <label>Price: ${product.price}</label>
                <label>Stock: {product.stock}</label>
                <Link className="card-submit" to={`/detail/${product.id}`}>
                    Info
                </Link>
            </div>
        )
    }

)

export default Item