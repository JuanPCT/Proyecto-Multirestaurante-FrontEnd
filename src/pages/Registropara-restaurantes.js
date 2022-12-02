import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './registropara-restaurantes.css'

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
        {/* CSS only */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/estilos.css" />
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
              <h2 className="fw-blod text-center py-5">UNETE AHORA</h2>
              <h6 className="fw-blod text-center">Si eres el dueño o la dueña del negocio, por favor crea una cuenta completando la siguiente información.</h6>
              <form action="#">
                <div className="mb-4">
                  <label htmlFor="pais">Donde se encuentra ubicado tu restaurante</label>
                  <select name="pais" id="pais">
                    <option value="colombia">Colombia</option>
                    <option value="argentina">Argentina</option>
                    <option value="ecuador">Ecuador</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="usuario" className="form-label">Usuario</label>
                  <input type="usuario" className="form-control" name="usuario" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="nombre" className="form-control" name="nombre" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="contraseña" className="form-label">Contraseña</label>
                  <input type="contraseña" className="form-control" name="contraseña" required />
                </div>
                <div className="d-grid">
                  <button type="button" className="btn btn-primary" onclick="Login()">Registrar</button>
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
});