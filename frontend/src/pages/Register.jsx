import React, { useState } from 'react';



const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //logic to handle form submission
        console.log(formData);
        // Clear form after submission
        setFormData({
            fullName: '',
            email: '',
            password: '',
        });
        // M.toast({ html: 'Registered Successfully!', classes: 'green' });
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <label htmlFor="fullName">Full Name</label>
                </div>
                <div className="input-field">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit">
                    Register
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;

