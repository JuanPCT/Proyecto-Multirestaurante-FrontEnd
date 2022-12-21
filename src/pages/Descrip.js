import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Producto from "../components/restaurante/Producto";
import { MENUS_ENDPOINT, RESTAURANTES_ENDPOINT } from "../helpers/endpoints";
import "./pagprincipal.css";
const Descrip = () => {
  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const { id } = useParams();
  const [rest, setRest] = useState(null);
  const [menu, setMenu] = useState(null);
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

    useEffect(() => {
      fetch(`${MENUS_ENDPOINT}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        console.log(menu);
        setIsLoading2(false);
      })
    }, [id,isLoading1]);
  

  if (isLoading1||isLoading2) {
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
          <div className="col-12">
          {menu.productos && menu.productos.length > 0
          ? menu.productos.map((prod, index) => (
              <Producto key={index} prod={prod} />
            ))
          : "No hay categorias"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Descrip;
