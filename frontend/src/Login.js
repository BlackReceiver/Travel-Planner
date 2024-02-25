

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'
import "./style.css"

function Login() {
  const[values,setValues] = useState({
    name:"",
    password:""
  })
  
  const handleInput=(event)=>{
    setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
  }

  const [errors,setErrors]=useState({})
  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div >
      
        <form action='' onSubmit={handleSubmit} >
        <h2>User Login</h2>
        <div className='mb-3'>
            
            <input type='name' placeholder='Enter name' className='form-control rounded -0' name='name' onChange={handleInput} ></input>
            <span className='text-danger'>{errors.name}</span>
          </div>
          
          <div className='mb-3'>
          <input type='password' placeholder='Enter password' className='form-control rounded -0' onChange={handleInput} name='password'  ></input>
            <span className='text-danger'>{errors.password}</span>
          </div>

          <div className='mb-3'>
          <button style={{background: 'rgb(200, 209, 218)'}} type="submit">Log in
          </button>
          </div>

          <p><strong>OR</strong></p>
          <p>Haven't Register yet? Go to <Link to='#'>Register</Link></p>
        
        </form>
        
    

    </div>
  )
}

export default Login
