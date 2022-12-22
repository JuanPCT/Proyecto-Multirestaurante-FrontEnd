import React from "react";
import { IMAGES_ENDPOINT } from "../../helpers/endpoints";
import { addProduct } from "../../actions/productActions";
import { useSelector } from "react-redux";

const Producto = ({prod}) => {
  
  const user = useSelector((state) => state.auth.user);

  const agregarProd = () =>{
    addProduct(prod.producto_id, user.sub);
  }
  
  return (
    <div className="col-3">
      <div class="card">
        <img
          class="card-img-top"
          src={IMAGES_ENDPOINT + prod.imagen}
          alt="Img producto"
        />
        <div class="card-body">
          <h6 className="card-title">{prod.nombre}</h6>
          <h5 class="text-primary">
            Precio: <span class="precio">${prod.precio}</span>
          </h5>
          <button onClick={agregarProd} type="button" class="btn btn-primary button">Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Producto;
