import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './iniciodesesionrestaurente.css'

var InicioRestaurante = () =>{
    return (
      <div>
        <div className="container w-75 bg-white mt-5 rounded bg-opacity-50">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col bg" />
              </div>
            </div>
            <div className="col">
              <div className="text-end">
                <img src="img/ufps.jpeg" width="48px" alt="" />
              </div>
              <h2 className="fw-blod text-center py-5">ACCEDE A TU CUENTA</h2>
              <form action="#">
                <div className="mb-4">
                  <label htmlFor="usuario" className="form-label">Usuario</label>
                  <input type="usuario" className="form-control" name="usuario" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="contraseña" className="form-label">Contraseña</label>
                  <input type="contraseña" className="form-control" name="contraseña" required />
                </div>
                <div className="mb-4 form-check">
                  <input type="checkbox" name="conectar" className="form-check-input" />
                  <label htmlFor="conectar" className="form-check-label">Mantener Conectado</label>
                </div>
                <div className="d-grid">
                  <button type="button" className="btn btn-primary" onclick="Login()">Iniciar Sesión</button>
                </div>
                <div>
                  <span>Si todavia no has registrado tu restaurante</span>
                </div>
                <div>
                  <a href>¡Por favor registrate!</a>
                </div>
                <div>
                  <center><img src="img/pie.png" alt="" height="35px" /></center>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* JavaScript Bundle with Popper */}
      </div>
    );
  }

  export default InicioRestaurante;