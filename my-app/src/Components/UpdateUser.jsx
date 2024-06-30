import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(`http://localhost:3001/getUser/${id}`);
                const user = result.data;
                setName(user.name);
                setEmail(user.email);
                setPhone(user.phone);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, [id]);

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, phone });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <center><h2>Update User</h2></center>
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
                <button onClick={handleUpdateUser} className='btn btn-success'>Update</button>
            </div>
        </div>
    );
}

export default UpdateUser;
