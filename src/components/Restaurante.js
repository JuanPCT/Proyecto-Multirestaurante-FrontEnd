import React, { Component } from "react";

const Restaurante = ({ rest }) => {
  return (
    <div className="card w-25" style={{ width: "18rem" }}>
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
  );
};

export default Restaurante;
