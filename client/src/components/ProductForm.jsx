import '../App.css';
import React, { useState } from 'react'
import axios from 'axios';

// Start of anonymous function
export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // Sends to api
    const onSubmitHandler = e => {
        e.preventDefault(); // prevents screen refresh
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res => console.log(res)) // on success
        .catch(err => {
            console.log(err);
            setSuccessMsg("");
        }) // on fail

        setTitle('');
        setDescription('');
        setPrice(0);
        setSuccessMsg("Success!")
    }
//  anonymous function returns form
    return (
        <form onSubmit={ onSubmitHandler }>
            <h1>Add a Product</h1>
            <p className={successMsg != "" ? "success-msg":"" }>{successMsg}</p>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={ title }/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={ price }/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={ description }/>
            </div>
            <input type="submit" value='SUBMIT' />
        </form>
    )
}