import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RESTAURANTES_ENDPOINT } from "../helpers/endpoints";
import './pagprincipal.css'
const Descrip = () => {

  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  const [rest , setRest] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${RESTAURANTES_ENDPOINT}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setRest(data);
      setIsLoading(false);
    })
    .catch(e => {
        navigate('/');
    })
}, [id, navigate]);

console.log(rest)

if (isLoading) {
  return (
    <div className="App">
      <h1>Cargando...</h1>
    </div>
  );
}

  return (
    <div>
      <div className="container">
        <div className="row my-3 p-0 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
          <h1>{rest.nombre}</h1>
        </div>
        <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
          {/* Categorias */}
          <div className="col-2">
            <p className="font-italic">Lorem Ipsum .</p>
          </div>
          <br></br>
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <p></p>
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <p></p>
          <div className="card-group">
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <br></br>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>

      </div>
    </div>

  );
}
export default Descrip;