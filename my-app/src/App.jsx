import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateUser from './Components/UpdateUser';
import CreateUser from './Components/CreateUser';
import Users from './Components/Users';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='/createUser' element={<CreateUser />} />
                <Route path='/updateUser/:id' element={<UpdateUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
