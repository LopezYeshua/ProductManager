import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


const Update = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        });
    }
    return (
        <div className="container bg-gray">
        {loaded && (
            <div>
                <h1>Update { product.title}</h1>
                <ProductForm
                onSubmitProp={ updateProduct }
                initialTitle={ product.title }
                initialPrice={ product.price }
                initialDescription={ product.description }
                />
                <DeleteButton productId={ product._id } successCallback={() => navigate("/")}/>
            </div>
        )}
        </div>
    )
}
export default Update;