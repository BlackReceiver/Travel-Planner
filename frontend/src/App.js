import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Unhome from './Unhome';
import Register from './Register';

import ManageAccoount from './ManageAccount';
import AddNewDestination from './AddNewDestination';
import Login from './Login';
 
import UserProfileEdit from './UserProfileEdit';

import AddNewUser from './AddNewUser';
import EditUser from './EditUser';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unhome/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/manageaccount' element={<ManageAccoount/>}></Route>
        <Route path='/addnewdestination' element={<AddNewDestination/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

        <Route path='/userprofileedit' element={<UserProfileEdit/>}></Route>

        <Route path='/addnewuser' element={<AddNewUser/>}></Route>
        <Route path='/edituser/:id' element={<EditUser/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;