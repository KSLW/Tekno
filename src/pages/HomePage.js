import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://tekno-commissions-6a57d34016ea.herokuapp.com/')
            .then(response => setProducts(response.data))
            .catch(error => console.error('There was an error fetching the products!', error));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
