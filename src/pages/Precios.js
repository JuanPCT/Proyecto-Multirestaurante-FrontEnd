import React from "react";
import './pagprincipal.css';

const Precios = () => {
    return (
        <div>
            <div className="container">
                <div className="row my-3 p-0 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
                    <div>
                        <h2>Productos</h2>
                    </div>

                    <br></br>
                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/pizzamargarita368414111-id28-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">Pizza_Margarita</h6>
                                <h5 class="text-primary">Precio: <span class="precio">$ 5</span></h5>
                                <span>Puntuacion:4.9</span>
                                <button class="btn btn-primary button">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/recetaperrocalientecolombiano14311-ya8-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">Super Perro</h6>
                                <h5 class="text-primary">Precio: <span class="precio">$ 5</span></h5>
                                <span>Puntuacion:4.4</span>
                                <button class="btn btn-primary button">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/submarinosndwich768x52714312-awl-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">Submarino</h6>
                                <h5 class="text-primary">Precio: <span class="precio">$ 5</span></h5>
                                <span>Puntuacion:4.5</span>
                                <button class="btn btn-primary button">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/image16424340308511544picadacolombiana350x35014312-ztp-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">picada CB</h6>
                                <h5 class="text-primary">Precio: <span class="precio">$ 5</span></h5>
                                <span>Puntuacion:4.9</span>
                                <button class="btn btn-primary button">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/deliciosopinchos14312-lvvb-200h.png" alt="Card image cap" />
                            <div class="card-body">
                                <h6 className="card-title">Pinchos la juana</h6>
                                <h5 class="text-primary">Precio: <span class="precio">$ 5</span></h5>
                                <span>Puntuacion:4.4</span>
                                <button class="btn btn-primary button">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/polloasado14313-sno8-200h.png" />
                            <div class="card-body">
                                <h6 className="card-title">Pollos pau</h6>
                                <h5 class="text-primary">Precio: <span class="precio">$ 5</span></h5>
                                <span>Puntuacion: 4.8</span>
                                <button class="btn btn-primary button">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div class="card ">
                            <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
                            <div class="card-body">
                                <h6 className="card-title">Hamburguesa DC</h6>
                                <h5 class="text-primary">Precio: <span class="precio">$ 5</span></h5>
                                <span>Puntuacion:4.9</span>
                                <button class="btn btn-primary button">Añadir al Carrito</button>
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
export default Precios;