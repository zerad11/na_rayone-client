import React from 'react';
import './styles/App.css';
import axios from 'axios';
import { Categories } from './components/Categories';

function App() {

    return (
        <div className='App'>
            <Categories/>
        </div>
    )
}

export default App;
