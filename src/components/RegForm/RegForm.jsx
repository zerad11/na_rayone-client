import React, { useState } from "react";
import reg from "../../API/reg";

const RegForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    return (
        <div>
            <input 
                type="text" 
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
                value={email}
            />
            <input 
                type="password" 
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
                value={password}
            />
            <input 
                type="text" 
                onChange={e => setName(e.target.value)}
                placeholder="name"
                value={name}
            />
            <button onClick={() => {reg(email, password, name)}}>Регистрация</button>
        </div>
    )
}

export default RegForm;