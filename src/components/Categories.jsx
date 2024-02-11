import React, { useEffect, useState } from 'react';
import { getAll } from '../API/getAll';


export const Categories = () => {
    const [categories, setCategories] = useState([])
    

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await getAll('categories');
                setCategories(response.data.categories);
            } catch (error) {
               alert(error.message)
            }
        }

        fetchCategories()
    }, [])

   return(
        <div>
            <h1>Категории:</h1>
            {categories.map(category => (
                <div key={category.id}>{category.name}</div>
            ))}
       </div>
   )
}