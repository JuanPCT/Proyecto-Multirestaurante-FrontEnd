import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Restaurante from "../components/Restaurante";
import './pagprincipal.css'
const Descrip = () => {
  
  //Javascript code

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row my-3 p-0 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
          <h1>Nombre Restaurante</h1>
        </div>
        <div className="row mx-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
          {/* Categorias */}
          <div className="col-2">
            <p class="font-italic">Lorem Ipsum .</p>
          </div>
          <br></br>
          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <p></p>
          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <p></p>
          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="/playground_assets/hamburguesaconamigosysalsadechampinones027714-5npi-200h.png" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <br></br>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>

      </div>
    </div>

  );
}
export default Descrip;