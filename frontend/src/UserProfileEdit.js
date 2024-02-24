import React, { useEffect, useState } from 'react'

import './UserProfileEdit.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from './Images/IATLogo.png'

function UserProfileEdit() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div id='main'>
            <header>
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
                        
                    </div>
                </nav>
            </header>

           
           

            <div>
                <Link className='text-black' to="/viewprofile"><i class="bi bi-person-circle" id='profile'></i></Link>
            </div>
            
                    
            <div class="wrapper"> 
     <div class="name">
            <label>User Name:</label>
    </div>
        <div class="address">
            <label>Email:</label>
        </div>

        <div class="gender">
            <label>Gender:</label>
        </div>
        
    
 </div> 
   
   <div>
      <button>Edit your Profile Info <i></i></button>
   </div>
            
            
            <p className='fixed-bottom bg-light mb-0 text-center color-dark p-2 fw-bold'>copyright &copy; 2024,Institute of Advanced Technologies | All Rights Reserved.</p>
        </div>
    );
}
export default UserProfileEdit