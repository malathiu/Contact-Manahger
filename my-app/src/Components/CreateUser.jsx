
import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate()

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3001/createUser', { name, email, phone });
            navigate('/')
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <center><h2>Add User</h2></center>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="form-control mb-2"
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="form-control mb-2"
                />
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="form-control mb-2"
                />
                <button onClick={handleAddUser} className='btn btn-success me-2'>Add Contact</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </div>
        </div>
    );
}

export default CreateUser;
