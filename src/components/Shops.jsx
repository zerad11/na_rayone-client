import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Shops = () => {
    const [placemant, setPlacemant] = useState('')
    const [description, setDescription] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [imgPath, setImgPath] = useState('')
    async function getShops() {
        const response = await axios.get('https://ca151fec-6c76-4e9d-a03e-35d19d7bc744.mock.pstmn.io/shops/');
        setPlacemant(response.data.placemant)
        setDescription(response.data.description)
        setContactPhone(response.data.contact_phone)
        setImgPath(response.data.image)
        console.log(response)
    }

    useEffect(() => {
        getShops()
    }, [])

   return(
        <div>
            <h1>Местоположение:</h1>
            {placemant}
            <h1>Описание:</h1>
            {description}
            <h1>Телефон:</h1>
            {contactPhone}
            <h1>Изображение:</h1>
            <img src={`data:image/png;base64,${imgPath}`} alt="Base64 Image" />
       </div>
   )
}