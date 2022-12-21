import React from 'react';
import { Card } from 'react-bootstrap';
import { IMAGES_ENDPOINT } from '../../helpers/endpoints';

const Producto = (prod) => {
    console.log(prod);
    console.log("producto");
  return (
    <Card className="card w-100 h-100">
          <img
            src={IMAGES_ENDPOINT + prod.imagen}
            className="card-img-top img-fluid m-auto"
            style={{width: "200px", height:"150px"}}
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title ">{prod.nombre}</h6>
            <p className="card-text">{prod.precio}</p>
          </div>
    </Card>
  )
}

export default Producto;