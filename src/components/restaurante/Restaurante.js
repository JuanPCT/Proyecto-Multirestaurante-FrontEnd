import React from "react";
import { Link } from "react-router-dom";

const Restaurante = ({ rest }) => {
  return (
    <Link to={"/restaurante/"+rest.id}>
      <div className="card lg-w-25 sm-w-50" style={{ width: "18rem" }}>
        <img
          src="https://cdn.sanity.io/images/jsdrzfkj/production-esmx/5e2316cc629ede9cd6646163efeafc5486161751-6240x4160.jpg?w=1200&h=800&fit=crop&fm=webp"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">{rest.nombre}</h6>
          <p className="card-text">{rest.descripcion}</p>
        </div>
      </div>
      <div className="card lg-w-25 sm-w-50" style={{ width: "18rem" }}>
        <img
          src="/playground_assets/image16424340308511544picadacolombiana350x35014312-ztp-200h.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">picada CB</h6>
          <br></br>
          <span>Puntuacion:4.9</span>
        </div>
      </div>
    </Link>
  );
};

export default Restaurante;
