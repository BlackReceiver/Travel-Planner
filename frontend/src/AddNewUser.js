import React from 'react'
import './AddNewUser.css'


function AddNewUser() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 ' id='background_image'>
        <form>
          <div>
            <label htmlFor='user'>User Name:</label>
            <input type='text' placeholder='User Name' className='form-control rounded mb-3 '></input>
          </div>
          <div>
            <label htmlFor='email'>Email Address:</label>
            <input type='email' placeholder='Email Address'></input>
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='Password'></input>
          </div>
          <div>
            <label htmlFor='role'>Role:</label>
            <select name='role' id='role'>
              <option value='admin'>Admin</option>
              <option value='user'>User</option>
            </select>
          </div>
          <div>
            <input type='radio' name='gender'></input>
            <label htmlFor='male'>Male</label>
            <input type='radio' name='gender'></input>
            <label htmlFor='female'>Female</label>
          </div>
        </form>
    </div>
  )
}

export default AddNewUser