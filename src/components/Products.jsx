import React, { useState, useEffect } from 'react';
import { getAll } from '../API/getAll';

const Products = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await getAll('products');
                console.log(response)
                setName(response.data.name);
                setEmail(response.data.email);
            } catch (error) {
               alert(error.message)
            }
        }

        fetchProducts()
    }, [])

    return(
        <div>
            <h1>Name:</h1>
            {name || 'None'}
            <h1>Email:</h1>
            {email || 'None'}
        </div>
    )
}

export default Products;