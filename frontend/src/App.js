import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Registro from './components/Registro';
import Principal from './components/Principal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Inicio/Login" element={<Login />}/>
          <Route path="/Inicio/Registro" element={<Registro />}/>
        <Route path="/Principal" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App;
