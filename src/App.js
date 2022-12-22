import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import store from "./store";
import { Provider } from "react-redux";
import Carrito from "./pages/Carrito";
import Precios from "./pages/Precios";
import InicioRestaurantes from "./pages/iniciodesesionrestaurente";
import RegistroRestaurante from "./pages/Registropara-restaurantes";
import checkForToken from "./helpers/checkForToken";
import PrivateRoute from "./utils/PrivateRoute";
import Descrip from "./components/restaurante/Descrip";
import Principal from "./pages/Principal"

checkForToken();

const App = () => {
  return (
    <Provider store={store}> 
      <Router>
        <Navigation/>
        <Container>
          <Routes>
            <Route path="/" element={<Principal />}></Route>
            <Route path="/register" element={<Registro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route exact path="/restaurante/:id" element={<Descrip/>}></Route>
            <Route path="/carrito" element={<PrivateRoute />}>
              <Route path="/carrito" element={<Carrito />}></Route>
            </Route>
            <Route path="/precios" element={<PrivateRoute />}>
              <Route path="/precios" element={<Precios />}></Route>
            </Route>
            <Route path="/registerrest" element={<RegistroRestaurante />}/>
            <Route path="/loginrest" element={<InicioRestaurantes />}/>
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
