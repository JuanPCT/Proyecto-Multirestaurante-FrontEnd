import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../actions/authActions";

const Navigation = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          <img
            src="/img/logo-restaurante.jpeg"
            width="230"
            height="50"
            alt="Multirestaurante"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-menu"></Navbar.Toggle>
        <Navbar.Collapse id="main-menu">
          <Nav className="me-auto">
            {loggedIn && (
              <Nav.Link as={NavLink} to={"/carrito"}>
                Carrito
              </Nav.Link>             
            )}
            {loggedIn && (
              <Nav.Link as={NavLink} to={"/precios"}>
              Precios
            </Nav.Link>            
            )}
             
          </Nav>
          <Nav>
            <Nav>
              {!loggedIn ? (
                <React.Fragment>
                  <Nav.Link as={NavLink} to={"/register"}>
                    Crear Cuenta
                  </Nav.Link>
                  <Nav.Link as={NavLink} to={"/login"}>
                    Iniciar Sesion
                  </Nav.Link>
                </React.Fragment>
              ) : (
                <NavDropdown title={user.sub} id="menu-dropdown">
                  <NavDropdown.Item onClick={() => dispatch(logoutUser())}>
                    Cerrar sesion
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
