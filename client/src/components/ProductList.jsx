import React from 'react';
import axios from 'axios';
const ProductList = (props) => {
    return (
        <div>
            {
                props.produts.map( (products, i) => {
                    <div key={ i }>
                        <p>{products.title}</p>
                    </div>
                })
            }
        </div>
    )
}

export default ProductList;