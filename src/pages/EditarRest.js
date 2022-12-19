import React from "react";
import "./pagprincipal.css";

const EditarRest = () => {

  return (
    <div>
      <div className="container">
        <div
          className="row my-3 p-0 mx-0"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <h2 className="fw-bold text-center py-0">Servicio De Diseño Web</h2>
          <p></p>
          <div align="center">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-mantenimiento-sitio-web_335657-3689.jpg?w=740&t=st=1670126958~exp=1670127558~hmac=ec92d5a526db8690d09bdf5d6c345e463b49964024b62e2056fa81471b2f7225"
              width="500"
              height="200"
            />
          </div>
          <form>
            <div class="row">
              <div class="col">
                <label for="exampleFormControlFile1">
                  Solicitar Modificaciones
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </form>
          <p></p>
          <form>
            <div class="row">
              <div class="col">
                <label for="exampleFormControlFile1">
                  Descripcion de detalle
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </form>
          <p></p>
          <form>
            <div class="row">
              <div class="form-group">
                <label for="exampleFormControlFile1">Adjuntar Achivos</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </div>
          </form>
          <p></p>
          <div class="form-group">
            <div className="mb-4">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Guardar Información
              </label>
            </div>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary">
              SOLICITAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditarRest;
