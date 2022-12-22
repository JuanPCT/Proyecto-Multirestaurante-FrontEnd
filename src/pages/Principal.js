import React, { useEffect, useState } from "react";
import Categoria from "../components/restaurante/Categoria";
import Restaurante from "../components/restaurante/Restaurante";
import { CATEGORIAS_ENDPOINT, RESTAURANTES_ENDPOINT } from "../helpers/endpoints";

const Principal = () => {
  //Javascript code
  const [isLoading1, setIsLoading1] = useState(true);
  const [restaurante, setRestaurante] = useState("");
  const [categoria, setCategoria] = useState("");

  const callRestaurante = () => {
    fetch(RESTAURANTES_ENDPOINT + `/all`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data);        
      });
  };

  const callCategoria = () => {
    fetch(CATEGORIAS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCategoria(data);
        setIsLoading1(false);
      });
  };

  useEffect(callRestaurante, []);
  useEffect(callCategoria, []);

  if (isLoading1) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="row my-3 p-0 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
        <h1>Categorias</h1>
      </div>
      <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
        {/* Categorias */}
        {categoria && categoria.length > 0
          ? categoria.map((cat, index) => (
              <Categoria key={index} cat={cat} />
            ))
          : "No hay categorias"}
        {/* fin */}
      </div>
      <div className="row my-3 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
        <div className="col-2">
          <h2 className="mx-3 fw-bold">Restaurantes</h2>
        </div>
      </div>
      <div className="row">
        {restaurante && restaurante.length > 0
          ? restaurante.map((rest, index) => (
              <Restaurante key={index} rest={rest} />
            ))
          : "No hay restaurantes"}
      </div>
    </div>
  );
};

export default Principal;
