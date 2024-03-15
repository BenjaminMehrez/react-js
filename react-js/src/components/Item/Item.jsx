import { memo } from "react";
import { Link } from "react-router-dom"

import './Item.css'

const Item = memo(({ product }) => {

        return (
            <div className="card-body">
                <img src={product.img} alt="img" />
                <label>{product.name}</label>
                <label>Price: ${product.price}</label>
                <label>Stock: {product.stock}</label>
                <Link to={`/detail/${product.id}`}>
                    <button>Detalle</button>
                </Link>
            </div>
        )
    }

)

export default Item