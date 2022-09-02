import React, { useState } from 'react'
import axios from 'axios';

// Start of anonymous function
export default (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const [successMsg, setSuccessMsg] = useState("");

    // Sends to api
    const onSubmitHandler = e => {
        e.preventDefault(); // prevents screen refresh
        onSubmitProp({title, price, description});
        setSuccessMsg("Success!");
    }
//  anonymous function returns form
    return (
        <form onSubmit={ onSubmitHandler }>
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