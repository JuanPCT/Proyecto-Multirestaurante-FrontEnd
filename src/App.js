import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Principal from './pages/Principal';



const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Principal />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Registro" element={<Registro />}/>        
      </Routes>
    </Router>
  );
}

export default App;
