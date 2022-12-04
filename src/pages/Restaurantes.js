import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Restaurante from "../components/Restaurante";
import './pagprincipal.css'
const Restaurantes = () => {
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
        <h1>Categorias</h1>
        </div>
        <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
          {/* Categorias */}
          <div className="col-2">
            <div className="card w-100" style={{ width: "18rem" }}>
            <img
                src="/playground_assets/cronicaorigenhamburguesas13693-llv-200h.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Hamburguesas</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/descarga13695-r5e9-200h.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Pizzas</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/perroscalientescolombianos500x41613697-lgql-200h.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Perros Calientes</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/picadacolombiana299013699-11mp-200h.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Picada</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/capa13610-9dvc-200h.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">sanduiches</h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card w-100" style={{ width: "18rem" }}>
              <img
                src="/playground_assets/image2f4wf2ch7bc4dcclmrbgs34kvq13910-gk28-200h.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Pollo</h6>
              </div>
            </div>
          </div>
          {/* fin */}
        </div>


                <div className="row my-3 p-0 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
                    <div>
                        <h2>Todas las tiendas</h2>
                    </div>

                    <br></br>
                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="https://cdn.forbes.co/2021/04/dominos_pizza_cyber_monday.jpg" />
                            <div class="card-body">
                                <h6 className="card-title">Margarita</h6>
                                <button class="btn btn-primary button">Hechar un Vistazo</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/recetaperrocalientecolombiano14311-ya8-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">Nieves Hotdog</h6>
                                <button class="btn btn-primary button">Hechar un Vistazo</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/submarinosndwich768x52714312-awl-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">El Submarino Cúcuta</h6>
                                <button class="btn btn-primary button">Hechar un Vistazo</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/image16424340308511544picadacolombiana350x35014312-ztp-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">C*Barrera</h6>
                                <button class="btn btn-primary button">Hechar un Vistazo</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/deliciosopinchos14312-lvvb-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">Pinchos la juana</h6>
                                <button class="btn btn-primary button">Hechar un Vistazo</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/polloasado14313-sno8-200h.png" />
                            <div class="card-body">
                                <h6 className="card-title">Pollos pau</h6>
                                <button class="btn btn-primary button">Hechar un Vistazo</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
                            <div class="card-body">
                                <h6 className="card-title">Hamburguesa Cold</h6>
                                <button class="btn btn-primary button">Hechar un Vistazo</button>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Restaurantes;