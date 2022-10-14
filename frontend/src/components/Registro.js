import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Registro extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container w-75 bg-primary mt-2 rounded shadow">
          <div className="row align-items-sm-stretch align-items-lg-stretch">
            <div className="col d-none d-xl-block d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
              style={{ backgroundImage: "url(/img/restaurant.jpg)", backgroundPosition: "center center" }}></div>
            <div className="col bg-white  rounded-end">
              <div className="text-center">
                <img src="/img/LogoR.svg" width="24%" alt='' />
              </div>
              <h2 className="fw-bold text-center py-0">¡Regístrate!</h2>
              <form action="">
                <div className="mb-4">
                  <label for="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" name="nombre" placeholder="Nombre" required />
                </div>
                <div className="mb-4">
                  <label for="apellido" className="form-label">Apellido</label>
                  <input type="text" className="form-control" name="apellido" placeholder="Apellido" required />
                </div>
                <div className="mb-4">
                  <label for="numero" className="form-label">Número Celular</label>
                  <input type="tel" className="form-control" name="numero" placeholder="Número celular" required />
                </div>
                <div className="mb-4">
                  <label for="email" className="form-label">Correo Electronico</label>
                  <input type="email" className="form-control" name="email" placeholder="Correo" required />
                </div>
                <div className="mb-4">
                  <label for="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" name="password" placeholder="Contraseña" required />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Registrarse</button>
                </div>
                <div className="my-3">
                  <span>¿Ya tienes una cuenta? <a href="login.html">Inicia sesión</a></span>

                </div>
              </form>
              <div className="container w-100 my-5">
                <div className="row text-center">
                  <div className="col-12">Regístrate con</div>
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
