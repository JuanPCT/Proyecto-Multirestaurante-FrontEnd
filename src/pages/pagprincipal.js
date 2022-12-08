import React, { useEffect, useState } from "react";
import "./pagprincipal.css";
const Pagprincipal = () => {

  return (
    <div>
      <div className="container">
        <div
          className="row my-3 p-0 mx-0"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <h1>Categorias</h1>
        </div>
        <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
          {/* Categorias */}
          <div className="col-2">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/cronicaorigenhamburguesas13693-llv-200h.png"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Hamburguesas</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/descarga13695-r5e9-200h.png"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Pizzas</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/perroscalientescolombianos500x41613697-lgql-200h.png"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Perros Calientes</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/picadacolombiana299013699-11mp-200h.png"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Picada</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/capa13610-9dvc-200h.png"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Sandwichs</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100 h-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/image2f4wf2ch7bc4dcclmrbgs34kvq13910-gk28-200h.png"
                className="card-img-top h-75"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Pollo</h6>
              </div>
            </div>
          </div>
          {/* fin */}
        </div>
        <div className="row my-3 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
          <div className="col-2">
            <p className="mx-3 fw-bold">Ordenar por:</p>
          </div>
          <div className="col-5">
            <nav className="nav nav-pills flex-column flex-sm-row">
              <a
                className="flex-sm-fill text-sm-center nav-link active"
                aria-current="page"
                href="#"
              >
                Calificación
              </a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#">
                Precio
              </a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#">
                Promociones
              </a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#">
                Relevancia
              </a>
            </nav>
          </div>
          <br></br>
          <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
            {/* Resultados*/}
            <div className="col-2">
              <div className="card w-100 h-100" style={{ width: "18rem" }}>
                <img
                  src="/playground_assets/pizzamargarita368414111-id28-200h.png"
                  className="card-img-top h-50"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">Pizza Margarita</h6>
                  <br></br>
                  <span>Puntuacion:4.9</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card w-100 h-100" style={{ width: "18rem" }}>
                <img
                  src="/playground_assets/recetaperrocalientecolombiano14311-ya8-200h.png"
                  className="card-img-top h-50"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">Super Perro</h6>
                  <br></br>
                  <span>Puntuacion:4.4</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card w-100 h-100" style={{ width: "18rem" }}>
                <img
                  src="/playground_assets/submarinosndwich768x52714312-awl-200h.png"
                  className="card-img-top h-50"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">Submarino</h6>
                  <br></br>
                  <span>Puntuacion:4.5</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card w-100 h-100" style={{ width: "18rem" }}>
                <img
                  src="/playground_assets/image16424340308511544picadacolombiana350x35014312-ztp-200h.png"
                  className="card-img-top h-50"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">picada CB</h6>
                  <br></br>
                  <span>Puntuacion:4.9</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card w-100 h-100" style={{ width: "18rem" }}>
                <img
                  src="/playground_assets/deliciosopinchos14312-lvvb-200h.png"
                  className="card-img-top h-50"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">Pinchos la juana</h6>
                  <br></br>
                  <span>Puntuacion:4.4</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card w-100 h-100" style={{ width: "18rem" }}>
                <img
                  src="/playground_assets/polloasado14313-sno8-200h.png"
                  className="card-img-top h-50"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">Pollos pau</h6>
                  <br></br>
                  <span>Puntuacion: 4.8</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="card w-100 h-100" style={{ width: "18rem" }}>
                <img
                  src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png"
                  className="card-img-top h-50"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">Hamburguesa DC</h6>
                  <br></br>
                  <span>Puntuacion:4.9</span>
                </div>
              </div>
            </div>
            {/* fin */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagprincipal;
