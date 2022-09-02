import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import { useEffect, useState } from 'react';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>setProducts(res.data));
    })

    const removeFromDom = productId =>{
        setProducts(products.filter(product => product._id != productId))
    }
    return (
        <div>
            <h1>Product List</h1>
            {props.products.map( (product, i) => {
                return (
                    <div key={ i }>
                        <p><Link to={product._id}>{product.title}</Link></p>
                        <DeleteButton productId={product._id} successCallBack={() =>removeFromDom(product._id)}/>
                    </div>
                )
                })
            }
        </div>
    )
}

export default ProductList;