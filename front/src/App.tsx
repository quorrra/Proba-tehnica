import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './components/home';

function App() {

  return (
    <Routes><Route path="/" element={<Home />} />
 <Route path="*" element={<Home />} /></Routes>
  )
}

export default App
