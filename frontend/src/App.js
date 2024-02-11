import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Unhome from './Unhome';
import Register from './Register';
import Login from './Login';
import AddNewDestination from './AddNewDestination';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unhome/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/addnewdestination" element={<AddNewDestination/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;