import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Unhome from './Unhome';
import Register from './Register';

import ManageAccoount from './ManageAccount';
import AddNewDestination from './AddNewDestination';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unhome/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/manageAccount' element={<ManageAccoount/>}></Route>
        <Route path='/addnewdestination' element={<AddNewDestination/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;