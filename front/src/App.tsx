import './App.css'
import './components/RegisterLogIn.css'

import { Route, Routes } from "react-router-dom";
//import Home from './components/home';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import LoginRegister from './components/RegisterLogIn'; 
import Navbar from './components/Navbar';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="*" element={<LoginRegister />} />
 </Routes>

     
  )
}

export default App;
