import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Restaurante from "../components/Restaurante";
const Carrito = () => {
  //Javascript code
  const [categoria, setCategoria] = useState("");
  const [restaurante, setRestaurante] = useState("");

  const callRestaurante = () => {
    fetch(`http://localhost:8080/restaurantes/all`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data);
        console.log(data);
      });
  };
  const callCategoria = () => {
    fetch(`http://localhost:8080/categorias/all`)
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

      <div>
        <h2 style={{textAlign: "center"}}>Tu canasta</h2>
        <p style={{textAlign: "center"}}>
        ¡COMENZAR A COMPRAR!
        </p>
      </div>

      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Productos</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
<div className="d-grid">
                  <button type="submit" className="btn btn-primary">Comprar</button>
                </div>
            </div>
            </div>
          
  );
};
export default Carrito;