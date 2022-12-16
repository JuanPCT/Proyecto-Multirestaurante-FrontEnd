import React from "react";
import "./pagprincipal.css";
const Formulario = () => {
  return (
    <div>
      <div className="container w-75 bg-primary mt-2 rounded shadow">
        <div className="row align-items-sm-stretch align-items-lg-stretch">
          <div
            className="col d-none d-xl-block d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
            style={{
              backgroundImage: "url(/img/restaurant.jpg)",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="col bg-white  rounded-end">
            <div className="text-center">
              <img src="/img/LogoR.svg" width="24%" alt="" />
            </div>
            <h2 className="fw-bold text-center py-0">¡Formulario de Pago!</h2>
            <form action="">
              <div className="mb-4">
                <label for="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <label for="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="apellido"
                  placeholder="Apellido"
                  required
                />
              </div>
              <div className="mb-4">
                <label for="numero" className="form-label">
                  Número Celular
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="numero"
                  placeholder="Número celular"
                  required
                />
              </div>
              <div className="mb-4">
                <label for="email" className="form-label">
                  Correo Electronico
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Correo"
                  required
                />
              </div>
              <div className="mb-4">
                <label for="inputAddress">Dirección</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Direccion"
                />
              </div>
              <div class="form-row">
                <div className="mb-4">
                  <label for="inputCity">Ciudad</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">Departamento</label>
                  <select id="inputState" class="form-control">
                    <option selected>Elegir...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">Elige metodo de pago</label>
                  <select id="inputState" class="form-control">
                    <option selected>Elegir...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div className="mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Confirmar Información
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Pagar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Formulario;
