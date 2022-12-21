import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IMAGES_ENDPOINT } from "../../helpers/endpoints";

const Restaurante = ({ rest }) => {
  return (
    <Link className="col-6 col-md-3" to={"/restaurante/" + rest.restaurante_id}>
        <Card className="card w-100 h-100">
          <img
            src={IMAGES_ENDPOINT + rest.imagen}
            className="card-img-top img-fluid m-auto"
            style={{width: "200px", height:"150px"}}
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title ">{rest.nombre}</h6>
            <p className="card-text">{rest.direccion}</p>
          </div>
        </Card>
    </Link>
  );
};

export default Restaurante;
