import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductPage({ match }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://tekno-commissions-6a57d34016ea.herokuapp.com/api/products/${match.params.id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('There was an error fetching the product!', error));
    }, [match.params.id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
        </div>
    );
}

export default ProductPage;
