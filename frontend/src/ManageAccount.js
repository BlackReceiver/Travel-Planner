import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import './ManageAccount.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from './Images/IATLogo.png'

function ManageAccount() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div id='container'>
            <header className='sticky-top'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className='container-fluid'>
                    
                        <img src={logo} alt='IATLogo' width='150' height='50' className='ms-3'/>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a className='nav-link active ms-5 fw-bolder' style={{color: '#F171AB'}} href='/manageAccount'>Manage Accoounts</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link ms-5 fw-bolder' id='des' href='/manageDestinations'>Manage Destinations</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Link className='text-dark' to="/viewprofile"><i class="bi bi-person-circle" id='profile'></i></Link>
                        </div>
                    </div>
                </nav>
            </header>

            <div className='table-resposive pt-5 pe-5 ps-5'>
                <div className='mb-4'>
                    <button className='btn rounded-pill border border-secondary ' id='back'>
                        <i class="bi bi-arrow-left" id='arrow'></i> Back
                    </button>
                    <Link className='btn float-end rounded-3 border border-secondary align-middle' id='add' to='/addnewuser'>
                    <i class="bi bi-plus" id='plus'></i> AddNewUser
                    </Link>
                </div>
                <Table className='table table-striped table-light table-bordered border-secondary'>
                    <thead className='fw-bolder fs-6'>
                        <tr>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Role</th>
                            <th className='text-center' colSpan={3}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {Object.values(users).map((user, i) => (
                            <tr key={i}>
                                <td className='text-center'>{user.user_name}</td>
                                <td className='text-center'>{user.email}</td>
                                <td className='text-center'>{user.role}</td>
                                <td className='text-center'>
                                    <button className='btn btn-primary'><i class="bi bi-eye" id='view'></i></button>
                                </td>
                                <td className='text-center'>
                                    <Link className='btn btn-success ms-2' to={`/edituser/${user.user_id}`}><i class="bi bi-person-fill-gear" id='edit'></i></Link>
                                </td>
                                <td className='text-center'>
                                    <button  className='btn btn-danger ms-2'><i class="bi bi-trash" id='dele'></i></button>
                                </td>                              
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <p className='bottom text-center fw-bold m-0'>copyright &copy; 2024,Intitute of Advanced Technologies | All Rights Reserved.</p>
        </div>
    );
}
export default ManageAccount