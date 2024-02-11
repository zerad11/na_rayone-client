import React, { useEffect, useState } from 'react';
import {getAll} from '../API/getAll';

export const Shops = () => {
    const [placemant, setPlacemant] = useState('')
    const [description, setDescription] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [imgPath, setImgPath] = useState('')

    useEffect(() => {
        async function fetchShops() {
            try {
                const response = await getAll('shops');
                setPlacemant(response.data.placemant)
                setDescription(response.data.description)
                setContactPhone(response.data.contact_phone)
                setImgPath(response.data.image)
            } catch (error) {
               alert(error.message)
            }
        }

        fetchShops()
    }, [])

   return(
        <div>
            <h1>Местоположение:</h1>
            {placemant || 'Не указано'}
            <h1>Описание:</h1>
            {description || 'Не указано'}
            <h1>Телефон:</h1>
            {contactPhone || 'Не указан'}
            <h1>Изображение:</h1>
            {<img src={`data:image/png;base64,${imgPath}`} alt="Base64 Image" /> || 'Не указано'}
       </div>
   )
}