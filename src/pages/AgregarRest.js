import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Restaurante from "../components/Restaurante";
import './pagprincipal.css'
const AgregarRest = () => {
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

                <h2 className="fw-bold text-center py-0">Agregue informacion del producto que vas a ofrecer </h2>
                    <form>
                        <div class="row">
                            <div class="col">
                                <label for="exampleFormControlFile1">Nombre Producto:</label>
                                <input type="text" class="form-control" placeholder="Nombre del Producto" />
                            </div>
                            <div class="col">
                                <label for="exampleFormControlFile1">Descripcion del producto (breve)</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
                    <form>
                        <div class="row">
                            <div class="col">
                                <label for="exampleFormControlFile1">Acompañamiento del producto (breve)</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col">
                                <label for="exampleFormControlFile1">Agregar precio del producto</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </form>
                    <form>
                        <div class="row">
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Subir Achivos</label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>
                    </form>
                    <div class="form-group">
                        <div className="mb-4">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Guardar Información
                            </label>
                        </div>
                    </div>
                    <div class="col">
                    <button type="submit" class="btn btn-primary">Agregar Información</button>
                            </div>
                    
                    


                </div>
                </div> 
                </div> 
            );
}
export default AgregarRest;