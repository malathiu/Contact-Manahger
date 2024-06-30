// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';

// // function Users() {
// //     const [users, setUsers] = useState([]);

// //     useEffect(() => {
// //         axios.get('http://localhost:3001')
// //             .then(result => setUsers(result.data))
// //             .catch(err => console.log(err));
// //     }, []);

// //     const handleDelete = (id)=>{
// //         axios.delete(`http://localhost:3001/deleteUser/${id}`)
// //         .then(res => {console.log(res)
// //             window.location.reload()
// //         })
// //         .catch(err => console.log(err))
// //     }

// //     return (
// //         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
// //             <div className='w-85 bg-white rounded p-3'>
// //                 <Link to="/createUser" className='btn btn-success mb-3'>Add +</Link>
// //                 <table className='table'>
// //                     <thead>
// //                         <tr>
// //                             <th>Name</th>
// //                             <th>E-mail</th>
// //                             <th>Phone</th>
// //                             <th>Action</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {users.map((user, index) => (
// //                             <tr key={index}>
// //                                 <td>{user.name}</td>
// //                                 <td>{user.email}</td>
// //                                 <td>{user.phone}</td>
// //                                 <td>
// //                                     <Link to={`/updateUser/${user._id}`} className='btn btn-warning me-2'>Edit</Link>
// //                                     <button className="btn btn-danger" onClick={(e) => {handleDelete(user._id)}}>Delete</button>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Users;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Users() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3001')
//             .then(result => setUsers(result.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = (id) => {
//         axios.delete(`http://localhost:3001/deleteUser/${id}`)
//             .then(res => {
//                 console.log(res);
//                 // Reload the page or update the state to reflect the deletion
//                 // For simplicity, I'm reloading the page here
//                 window.location.reload();
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="container mt-5">
//             <h1 className="text-center mb-4">Contacts</h1>
//             <div className="row row-cols-1 row-cols-md-3 g-4">
//                 {users.map((user, index) => (
//                     <div key={index} className="col">
//                         <div className="card h-100">
//                             <div className="card-body">
//                                 <h5 className="card-title">{user.name}</h5>
//                                 <p className="card-text"><strong>Email:</strong> {user.email}</p>
//                                 <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
//                                 <div className="d-flex justify-content-end">
//                                     <Link to={`/updateUser/${user._id}`} className="btn btn-warning me-2">Edit</Link>
//                                     <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="text-center mt-4">
//                 <Link to="/createUser" className="btn btn-success">Add Contact</Link>
//             </div>
//         </div>
//     );
// }

// export default Users;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
            .then(res => {
                console.log(res);
                // Reload the page or update the state to reflect the deletion
                // For simplicity, I'm reloading the page here
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-5 bg-secondary p-4 rounded" style={{ minHeight: '85vh' }}>
            <h1 className="text-center mb-4">Contacts</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {users.map((user, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text"><strong>Email:</strong> {user.email}</p>
                                <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
                                <div className="d-flex justify-content-end">
                                    <Link to={`/updateUser/${user._id}`} className="btn btn-warning me-2">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <Link to="/createUser" className="btn btn-success">Add Contact</Link>
            </div>
        </div>
    );
}

export default Users;
