import React, {useEffect, useState} from 'react';
import './styles/App.css';
import CustomMap from "./components/CustomMap/CustomMap";
import {reg, auth} from './auth'

function App() {
    useEffect(() => {
        // reg();
        auth('arasaki@gmail.com', 'kikimora222');
    }, []);

    return (
        <div className='App'>
            <b>ВСЕ РАБОТАЕТ</b>
            <CustomMap></CustomMap>
        </div>
    )
}

export default App;
