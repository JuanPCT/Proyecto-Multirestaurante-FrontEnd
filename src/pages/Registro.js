import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterForm from "../components/forms/RegisterForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { isObjEmpty } from "../helpers/helpers";
import { loginUser, registerUser } from "../actions/authActions";

const Registro = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  });

  const register = ({ email, password, nombre, apellido, telefono, fecha_nacimiento }) => {
    const errors = {};
    setErrors(errors);

    if (!validator.isEmail(email)) {
      errors.email = "El correo electronico es invalido";
    }

    if (!validator.isLength(password, { min: 8, max: 30 })) {
      errors.password = "La contrasena debe tener entre 8 y 30 caracteres";
    }
    console.log(nombre);
    if (validator.isEmpty(nombre)) {
      errors.nombre = "El nombre es obligatorio";
    }

    if (validator.isEmpty(apellido)) {
      errors.apellido = "El Apellido es obligatorio";
    }

    if (!validator.isNumeric(telefono) &&!validator.isLength(telefono, { min: 10, max: 10 })) {
      errors.telefono = "Debe ser un numero de celular valido";
    }

    if (!isObjEmpty(errors)) {
      setErrors(errors);
      return;
    }

    console.log(email +" "+ fecha_nacimiento+" "+ nombre+" "+apellido+" "+telefono+" "+password);

    dispatch(registerUser({email, password, nombre, apellido, telefono, fecha_nacimiento}))
      .then((response) => {
        dispatch(loginUser({ email, password }));
      })
      .catch((err) => {
        setErrors({ registerError: err.response.data.message });
      });
  };

  
  return (
    <Container className="container w-75 bg-primary mt-2 rounded shadow">
      <Row className="row align-items-sm-stretch align-items-lg-stretch">
        <Col
          className="col d-none d-xl-block d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
          style={{
            backgroundImage: "url(/img/restaurant.jpg)",
            backgroundPosition: "center center",
          }}
        ></Col>
        <Col className="col bg-white  rounded-end">
          <div className="text-center">
            <img src="/img/LogoR.svg" width="24%" alt="" />
          </div>
          <h2 className="fw-bold text-center py-0">¡Regístrate!</h2>
          <RegisterForm errors={errors} onSubmitCallback={register}></RegisterForm>
          {errors.registerError && (
            <Alert variant="danger">{errors.registerError}</Alert>
          )}
          <div className="my-3">
            <span>
              ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
            </span>
          </div>
          <Container className="container w-100 my-5">
            <Row className="row text-center">
              <Col className="col-12">Regístrate con</Col>
            </Row>
            <Row className="row">
              <Col className="col">
                <button className="btn btn-outline-primary w-100 my-1">
                  <Row className="row align-items-center">
                    <Col className="col-2 d-none d-md-block">
                      <img src="/img/facebook.png" width="32px" alt="" />
                    </Col>
                    <Col className="col-11 col-md-10 text-center">Facebook</Col>
                  </Row>
                </button>
              </Col>
              <div className="col">
                <button className="btn btn-outline-danger w-100 my-1">
                  <Row className="row align-items-center">
                    <Col className="col-2 d-none d-md-block">
                      <img src="/img/google.png" width="32px" alt="" />
                    </Col>
                    <Col className="col-12 col-md-10 text-center">Google</Col>
                  </Row>
                </button>
              </div>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
