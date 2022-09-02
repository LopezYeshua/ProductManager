import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="container bg-gray text-center">
            <h1>{product.title}</h1>
            <h2>Price: ${product.price}</h2>
            <h3>Description: {product.description}</h3>
            <Link to={"/" + product._id + "/edit"}>Edit</Link>
        </div>
    )
}

export default Detail;