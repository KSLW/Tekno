import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://tekno-commissions-6a57d34016ea.herokuapp.com/api/auth/register', { username, password });
        } catch (error) {
            console.error('There was an error registering!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterPage;
