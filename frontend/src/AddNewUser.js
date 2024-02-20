import React from 'react'
import './AddNewUser.css'


function AddNewUser() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 ' id='background_image'>
      <div className='border boreder-3'>
        <form className='p-3'>
          <div className='input-group mb-3'>
            <label htmlFor='user'>User Name:</label>
            <input type='text' placeholder='User Name' className='form-control rounded'></input>
          </div>
          <div className='input-group mb-3'>
            <label htmlFor='email'>Email Address:</label>
            <input type='email' placeholder='Email Address' className='form-control rounded'></input>
          </div>
          <div className='input-group mb-3'>
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='Password' className='form-control rounded'></input>
          </div>
          <div className='input-group mb-3'>
            <label htmlFor='role'>Role:</label>
            <select name='role' id='role' className='rounded'>
              <option value='select'>Select</option>
              <option value='admin'>Admin</option>
              <option value='user'>User</option>
            </select>
          </div>
          <div className='d-flex mb-3'>
            <input type='radio' name='gender' className='me-2'></input>
            <label htmlFor='male' className='me-2'>Male</label>
            <input type='radio' name='gender' className='me-2'></input>
            <label htmlFor='female' className='me-2'>Female</label>
          </div>
        </form>
        </div>
    </div>
  )
}

export default AddNewUser