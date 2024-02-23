import React, { useState } from 'react'
import './AddNewUser.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function AddNewUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [gender, setGender] = useState('')
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/addnewuser', {name,email,password,role,gender})
    .then (res => {
      console.log(res);
      navigate('/manageaccount');
    })
    .catch(err => console.log(err));
  }
  function handleCancel(event) {
    event.preventDefault();
    navigate('/manageaccount');
  }
  return (
    <div className='d-flex justify-content-center align-items-center' id='background_image'>
      <div className='border border-secondary rounded'>
        <form className='p-4' onSubmit={handleSubmit}>
          <div className='input-group mb-3' onChange={e => setName(e.target.value)}>
            <label htmlFor='user' id='right' className='fw-bold'>Name:</label>
            <input type='text' placeholder='User Name' className='form-control rounded'></input>
          </div>

          <div className='input-group mb-3' onChange={e => setEmail(e.target.value)}>
            <label htmlFor='email' id='right' className='fw-bold'>Email:</label>
            <input type='email' placeholder='Email Address' className='form-control rounded'></input>
          </div>

          <div className='input-group mb-3' onChange={e => setPassword(e.target.value)}>
            <label htmlFor='password' id='right' className='fw-bold'>Password:</label>
            <input type='password' placeholder='Password' className='form-control rounded'></input>
          </div>

          <div className='input-group mb-3' onChange={e => setRole(e.target.value)}>
            <label htmlFor='role' id='right' className='fw-bold'>Role:</label>
            <select name='role' id='role' className='form-select form-select-sm rounded'>
              <option >SELECT A ROLE</option>
              <option value='Admin'className='fw-bold'>Admin</option>
              <option value='User' className='fw-bold'>User</option>
            </select>
          </div>

          <div className='mb-3 text-center fw-bold' onChange={e => setGender(e.target.value)}>
            <input type='radio' name='gender' value='Male' className='me-2'></input>Male
            <input type='radio' name='gender' value='Female' className='me-2 ms-2'></input>Female
          </div>

          <div>
            <button type='submit' className='btn rounded-pill border border-secondary fw-bold' style={{background: 'rgb(200, 209, 218)'}} onClick={handleCancel}>
              Cancel
            </button>
            <button type='submit' className='btn rounded-pill float-end border border-secondary fw-bold' style={{background: 'rgb(200, 209, 218)'}}>
              Add
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddNewUser