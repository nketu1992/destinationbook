// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // You can handle form submission here, such as sending data to the server
    const handleSubmit = (e) => {
        e.preventDefault();


        console.log(formData);
    };

    return (
        <div className="mx-auto p-4 bg-slate-100">
            {/* <h1 className="text-2xl font-semibold mb-4">Login</h1> */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                        minLength={7}
                        maxLength={450}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                        minLength={8}
                        maxLength={450}
                    />
                </div>


                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Login
                    </button>
                </div>
                <div className="mb-4">
                    <Link to="/register" className=' font-bold text-blue-600'><span className=''></span>Create a new account</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;