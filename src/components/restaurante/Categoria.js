import React from "react";
import { Card } from "react-bootstrap";
import { IMAGES_ENDPOINT } from "../../helpers/endpoints";

const Categoria = ({ cat }) => {
    return (
      <div className="col-6 col-md-3">
          <Card className="card w-100 h-100">
            <img
              src={IMAGES_ENDPOINT + cat.imagen}
              className="card-img-top img-fluid m-auto"
              style={{width: "200px", height:"150px"}}
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title ">{cat.nombre}</h6>
            </div>
          </Card>
      </div>
    );
  };

export default Categoria;
