import React, { useState } from 'react'
import './EditUser.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        alert(name + email + role)
        axios.put(`http://localhost:8081/edituser/` + id, {name, email, role})
        .then (res => {
            console.log(res);
            navigate('/manageaccount');
        })
        .catch (err => console.log(err));
    }

    function handleCancel(event) {
        event.preventDefault();
        navigate('/manageaccount');
    }
  return (
    <div id='main' className='d-flex justify-content-center align-items-center'>
        <div className='border border-secondary rounded'>
            <form className='p-4' onSubmit={handleSubmit}>
                <div className='input-group mb-3' onChange={e => setName(e.target.value)}>
                    <label htmlFor='user' className='fw-bold'>User Name:</label>
                    <input type='text' placeholder='User Name'  className='form-control fw-semibold' ></input>
                </div>

                <div className='input-group mb-3' onChange={e => setEmail(e.target.value)}>
                    <label htmlFor='email' className='fw-bold'>Email:</label>
                    <input type='email' placeholder='Email Address'  className='form-control fw-semibold' ></input>
                </div>

                <div className='input-group mb-3' onChange={e => setRole(e.target.value)}>
                    <label htmlFor='role' className='fw-bold'>Role:</label>
                    <select className='form-select form-select-sm' name='role' id='role'>
                        <option className='fw-semibold'>SELECT A ROLE</option>
                        <option value='Admin' className='fw-bold'>Admin</option>
                        <option value='User' className='fw-bold'>User</option>
                    </select>
                </div>

                <div>
                    <button type='submit' className='btn rounded-pill border border-secondary fw-bold' style={{background: 'rgb(200, 209, 218)'}} onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type='submit'style={{background: 'rgb(200, 209, 218)'}} className='btn rounded border border-secondary float-end fw-bold'>
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser