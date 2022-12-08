import React , {useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import validator from "validator";
import { isObjEmpty } from '../helpers/helpers';
import { loginUser } from '../actions/authActions';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const navigate = useNavigate();


    useEffect(() => {
      if (loggedIn) {
        navigate("/");
      }
    }); 

    const login = ({ email, password }) => {
        const errors = {};
        setErrors(errors);

        if (!validator.isEmail(email)) {
            errors.email = "El correo electronico es invalido";
        }

        if (validator.isEmpty(password)) {
            errors.password = "La contrasena no puede estar vacia";
        }

        if (!isObjEmpty(errors)) {
            setErrors(errors);
            return;
        }

        dispatch(loginUser({ email, password }))
            .then(response => {

            })
            .catch(err => {                
                setErrors({ auth: "No se puede iniciar sesion con esos credenciales" });
            });

    }

  return (
    <div>
      <Container className="container w-75 bg-primary mt-3 rounded shadow">
        <Row className="row align-items-sm-stretch">
          <Col
            className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
            style={{
              backgroundImage: "url(/img/restaurant1.jpg)",
              backgroundPosition: "center center",
            }}
          ></Col>
          <Col className="col bg-white  rounded-end">
            <div className="text-center">
              <img src="/img/LogoR.svg" width="24%" alt="100px" />
            </div>
            <h2 className="fw-bold text-center py-0">Bienvenido</h2>
            <LoginForm errors={errors} onSubmitCallback={login} />
            <div className="my-3">
            <span>¿No tienes cuenta? <Link to="/Register">Regístrate</Link></span>
            </div>
            <Container className="container w-100 my-5">
              <Row className="row text-center">
                <Col className="col-12">Iniciar sesión</Col>
              </Row>
              <Row>
                <Col className="col">
                  <button className="btn btn-outline-primary w-100 my-1">
                    <Row className="row align-items-center">
                      <Col className="col-2 d-none d-md-block">
                        <img src="/img/facebook.png" width="32px" alt="" />
                      </Col>
                      <Col className="col-11 col-md-10 text-center">
                        Facebook
                      </Col>
                    </Row>
                  </button>
                </Col>
                <Col>
                  <button className="btn btn-outline-danger w-100 my-1">
                    <Row className="row align-items-center">
                      <Col className="col-2 d-none d-md-block">
                        <img src="/img/google.png" width="32px" alt="" />
                      </Col>
                      <Col className="col-12 col-md-10 text-center">Google</Col>
                    </Row>
                  </button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
