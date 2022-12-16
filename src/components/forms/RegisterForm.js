import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

const RegisterForm = ({ errors, onSubmitCallback }) => {
  const [email, setEmail] = useState("");
  const [nombre, setFirstName] = useState("");
  const [apellido, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setNumero] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({email,password,nombre,apellido,telefono,fecha_nacimiento});
  };

  return (
    <Form onSubmit={submitForm}>
      <Row>
        <Form.Group className="mb-2 col-6">
          <Form.Label for="nombre" className="form-label">
            Nombre
          </Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Nombre"
            isInvalid={errors.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombre}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2 col-6">
          <Form.Label for="apellido" className="form-label">
            Apellido
          </Form.Label>
          <Form.Control
            type="text"
            value={apellido}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Apellido"
            isInvalid={errors.apellido}
          />
          <Form.Control.Feedback type="invalid">
            {errors.apellido}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-2 col-6">
        <Form.Label for="apellido" className="form-label">
          Fecha de Nacimiento
        </Form.Label>
        <Form.Control
          type="date"
          value={fecha_nacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          placeholder="Fecha de Nacimiento"
          isInvalid={errors.apellido}
        />
        <Form.Control.Feedback type="invalid">
          {errors.fecha_nacimiento}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label for="telefono" className="form-label">
          Número Celular
        </Form.Label>
        <Form.Control
          type="text"
          value={telefono}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Numero Celular"
          isInvalid={errors.telefono}
        />
        <Form.Control.Feedback type="invalid">
          {errors.telefono}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label for="email" className="form-label">
          Correo Electronico
        </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electronico"
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label for="password" className="form-label">
          Contraseña
        </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contrasena"
          isInvalid={errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className="btn btn-primary w-100">
        Registrarse
      </Button>
    </Form>
  );
};
export default RegisterForm;
