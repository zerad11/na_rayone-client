import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Categories = () => {
    const [categories, setCategories] = useState([])

    async function getCategories() {
        const response = await axios.get('https://ca151fec-6c76-4e9d-a03e-35d19d7bc744.mock.pstmn.io/categories/');
        setCategories(response.data.categories)
    }

    useEffect(() => {
        getCategories()
    }, [])

    console.log(categories)
   return(
        <div>
            <h1>Категории:</h1>
            {categories.map(category => (
                <div key={category.id}>{category.name}</div>
            ))}
       </div>
   )
}