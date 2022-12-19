import React from "react";
import { IMAGES_ENDPOINT } from "../../helpers/endpoints";

const Categoria = ({ cat }) => {
  return (
    <div className="card w-100 h-100" style={{ width: "18rem" }}>
      <img
        src={IMAGES_ENDPOINT + cat.imagen}
        className="card-img-top h-50"
        alt="..."
      />
      <div className="card-body">
        <h6 className="card-title">{cat.nombre}</h6>
      </div>
    </div>
  );
};

export default Categoria;
