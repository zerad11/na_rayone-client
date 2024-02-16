import React from 'react';
import './styles/App.css';
import { Categories } from './components/Categories';
import { Shops } from './components/Shops';
import AuthForm from './components/AuthForm/AuthForm';
import RegForm from './components/RegForm/RegForm';

function App() {

    return (
        <div className='App'>
            <Categories/>
            <Shops/>
            <AuthForm/>
            <RegForm/>
        </div>
    )
}

export default App;                                                                                                                          
