import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Restaurante from "../components/Restaurante";

const Principal = () => {
  //Javascript code
  const [categoria, setCategoria] = useState("");
  const [restaurante, setRestaurante] = useState("");

  const callRestaurante = (string) => {
    fetch(`http://localhost:8080/restaurantes/all`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data);
        console.log(data);
      });
  };

  useEffect(callRestaurante, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row my-3 p-0 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
          <h1>Categorias</h1>
        </div>
        <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
          <div className="col-2">
            <div className="card w-100" style={{ width: "18rem" }}>
              <img
                src="https://images.rappi.com/rests_taxonomy/372_b.jpg?e=webp&q=10&d=10x10"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Hamburguesas</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
          <div className="col-2">
            <p className="mx-3 fw-bold">Filtrar por:</p>
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
        </div>
        <div className="row">
          <div className="container d-flex flex-wrap">
          {restaurante && restaurante.length > 0 ? restaurante.map((rest, index) => (
              <Restaurante key={index} rest={rest} />
            )): (<p>No found data</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;