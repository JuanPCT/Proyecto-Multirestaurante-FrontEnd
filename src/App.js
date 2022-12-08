import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Principal from "./pages/Principal";
import Login from "./pages/Login";
import Registro from "./components/forms/Registro";
import store from "./store";
import { Provider } from "react-redux";
import Pagprincipal from "./pages/pagprincipal";
import Carrito from "./pages/Carrito";
import Precios from "./pages/Precios";
import InicioRestaurantes from "./pages/iniciodesesionrestaurente";
import RegistroRestaurante from "./pages/Registropara-restaurantes";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation />
        </div>
        <Container>
          <Routes>
            <Route path="/" element={<Pagprincipal />}></Route>
            <Route path="/register" element={<Registro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/carrito" element={<Carrito/>}></Route>
            <Route path="/precios" element={<Precios/>}></Route>
            <Route path="/registerrest" element={<RegistroRestaurante />}></Route>
            <Route path="/loginrest" element={<InicioRestaurantes />}></Route>
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;