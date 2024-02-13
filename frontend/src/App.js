import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Unhome from './Unhome';
import Register from './Register';
import AccountManagement from './AccountManagement';
import AddNewDestination from './AddNewDestination';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unhome/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='accountmanagement' element={<AccountManagement/>}></Route>
        <Route path='/addnewdestination' element={<AddNewDestination/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;