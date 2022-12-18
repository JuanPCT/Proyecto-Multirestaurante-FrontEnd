import React from "react";
import { Link } from "react-router-dom";
import { IMAGES_ENDPOINT } from "../../helpers/endpoints";

const Restaurante = ({ rest }) => {
  return (
    <Link className="col-2" to={"/restaurante/" + rest.restaurante_id}>
        <div className="card w-100 h-100" style={{ width: "18rem" }}>
          <img
            src={IMAGES_ENDPOINT + rest.imagen}
            className="card-img-top h-50"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">{rest.nombre}</h6>
            <p className="card-text">{rest.direccion}</p>
          </div>
        </div>
    </Link>
  );
};

export default Restaurante;
