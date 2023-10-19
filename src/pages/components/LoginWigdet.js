// Login.js

import React, { useState, useContext } from 'react';
import { mainFunctions } from "../../providers/MainProvider";
export default function LoginWidget() {
    const {
        signin
    } = useContext(mainFunctions)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [loading, setLoading] = useState(false)
    
    const handleChange = (event) => {
        event.preventDefault();
        setFormData({...formData, [event.target.name]:event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!loading){
            setLoading(true)
            const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value,
            });
            signin(formData.username, formData.password)
            setLoading(false)
        }
        // Add login logic here (e.g., sending a request to a server)
    };

    return (
    <form className="login-form" onSubmit={handleSubmit}>
                <div className='logo'></div>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
    </form>
    );
}


