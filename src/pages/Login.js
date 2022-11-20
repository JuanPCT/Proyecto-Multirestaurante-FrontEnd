import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container w-75 bg-primary mt-3 rounded shadow">
          <div className="row align-items-sm-stretch">
            <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
              style={{ backgroundImage: "url(/img/restaurant1.jpg)", backgroundPosition: "center center" }}></div>
            <div className="col bg-white  rounded-end">
              <div className="text-center">
                <img src="/img/LogoR.svg" width="24%" alt='100px' />
              </div>
              <h2 className="fw-bold text-center py-0">Bienvenido</h2>
              <form action="">
                <div className="mb-4">
                  <label for="email" className="form-label">Correo Electronico</label>
                  <input type="email" className="form-control" name="email" placeholder="Correo" required />
                </div>
                <div className="mb-4">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" placeholder="Contraseña" required />
                </div>
                <div className="mb-4 form-check">
                  <input type="checkbox" name="connected" className="form-check-input" />
                  <label for="connected" className="form-check-label">Mantenerme Conectado</label>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                </div>
                <div className="my-3">
                  <span>¿No tienes cuenta? <Link to="/Inicio/Registro">Regístrate</Link></span>
                  <span> ó <Link to="#">Recuperar Contraseña</Link></span>
                </div>
              </form>
              <div className="container w-100 my-5">
                <div className="row text-center">
                  <div className="col-12">Iniciar sesión</div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-outline-primary w-100 my-1">
                      <div className="row align-items-center">
                        <div className="col-2 d-none d-md-block">
                          <img src="/img/facebook.png" width="32px" alt="" />
                        </div>
                        <div className="col-11 col-md-10 text-center">
                          Facebook
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="col">
                    <button className="btn btn-outline-danger w-100 my-1">
                      <div className="row align-items-center">
                        <div className="col-2 d-none d-md-block">
                          <img src="/img/google.png" width="32px" alt="" />
                        </div>
                        <div className="col-12 col-md-10 text-center">
                          Google
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
