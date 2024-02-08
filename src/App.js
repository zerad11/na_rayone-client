import React from 'react';
import './styles/App.css';
import axios from 'axios'
import { Categories } from './components/Categories';
import { Shops } from './components/Shops';

function App() {
    return (
        <div className='App'>
            <Categories/>
            <Shops/>
        </div>
    )
}

export default App;
