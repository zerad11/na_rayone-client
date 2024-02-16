import React, { useState } from "react";
import auth from "../../API/auth";

const AuthForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
            <button onClick={() => {auth(email, password)}}>Авторизация</button>
        </div>
    )
}

export default AuthForm;