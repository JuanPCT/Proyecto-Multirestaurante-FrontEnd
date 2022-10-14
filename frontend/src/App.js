import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './components/Inicio';
import Login from './components/Login';
import Registro from './components/Registro';
import Principal from './components/Principal';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Principal />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Inicio/Login" element={<Login />}/>
        <Route path="/Inicio/Registro" element={<Registro />}/>        
      </Routes>
    </Router>
  );
}

export default App;
