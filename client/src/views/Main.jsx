import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';


const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    }, [products]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
        .then(res=> {
            setProducts([...products, res.data])
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <div className="container bg-gray">
                <h1>Add a Product</h1>
                <ProductForm 
                onSubmitProp={createProduct} 
                initialTitle=""
                initialPrice={0}
                initialDescription=""
                />
            </div>
            <hr />
            <div className="container text-center">{loaded && <ProductList 
            products={products} 
            removeFromDom={removeFromDom} />}</div>
        </div>
    )
}

export default Main;