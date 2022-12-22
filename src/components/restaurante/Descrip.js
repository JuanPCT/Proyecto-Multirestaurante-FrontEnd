import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Producto from "./Producto";
import { RESTAURANTES_ENDPOINT } from "../../helpers/endpoints";

const Descrip = () => {
  const [isLoading1, setIsLoading1] = useState(true);
  const { id } = useParams();
  const [rest, setRest] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${RESTAURANTES_ENDPOINT}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRest(data);
        setIsLoading1(false);
      })
      .catch((e) => {
        navigate("/");
      });
  }, [id, navigate]);
  
  if (isLoading1) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div
          className="row my-3 p-0 mx-0"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <h1>{rest.nombre}</h1>
        </div>
        <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
          <div className="container">
            <h2 className="font-italic text-center">Menu</h2>
          </div>
          <br></br>
          <div className="row">
          {rest.menus[0].productos && rest.menus[0].productos.length > 0
          ? rest.menus[0].productos.map((prod, index) => (
              <Producto key={index} prod={prod} />
            ))
          : "No hay Productos"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Descrip;
