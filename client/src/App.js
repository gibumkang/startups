import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [values, setValues] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email } = values;
        const dataToSubmit = {
            name,
            email,
        };
        axios.post('http://localhost:8080/api/send', dataToSubmit);
    };

    return (
        <div className="App">
            <header className="App-header">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="name" value={values.name} placeholder="name" onChange={handleChange} />
                    <br />
                    <input type="text" name="email" value={values.email} placeholder="email" onChange={handleChange} />
                    <br />
                    <button type="submit">Send Email</button>
                </form>
            </header>
        </div>
    );
}

export default App;
