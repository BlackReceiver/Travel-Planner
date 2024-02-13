import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Unhome from './Unhome';
import Register from './Register';
<<<<<<< HEAD
import ManageAccoount from './ManageAccount';
=======
import AccountManagement from './AccountManagement';
import AddNewDestination from './AddNewDestination';
>>>>>>> 92dfe0c5bc4806f8e44790861ce8c83249d34fa5

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unhome/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
<<<<<<< HEAD
        <Route path='/manageAccount' element={<ManageAccoount/>}></Route>
=======
        <Route path='accountmanagement' element={<AccountManagement/>}></Route>
        <Route path='/addnewdestination' element={<AddNewDestination/>}></Route>
>>>>>>> 92dfe0c5bc4806f8e44790861ce8c83249d34fa5
      </Routes>
    </BrowserRouter>
  );
}
export default App;