import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Principal from './pages/Principal';
import InicioRestaurante from './pages/iniciodesesionrestaurente';
import RegistroRestaurante from './pages/Registropara-restaurantes'



const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Principal />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Registro" element={<Registro />}/>        
        <Route path="/Restaurante/Registro" element={<RegistroRestaurante />}/> 
        <Route path="/Restaurante/Login" element={<InicioRestaurante />}/> 
      </Routes>
    </Router>
  );
}

export default App;
