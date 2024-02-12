import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Unhome from './Unhome';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unhome/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;