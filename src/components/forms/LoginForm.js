import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm = ({errors, onSubmitCallback}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({ email, password });
  };

  return (
    <Form onSubmit={submitForm}>
      <Form.Group control="email" className="mb-4">
        <Form.Label for="email" className="form-label">
          Correo Electronico
        </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="password" className="mb-4">
        <Form.Label for="password" className="form-label">
          Contraseña
        </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          isInvalid={errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-grid">
        <Button type="submit" className="btn btn-primary">
          Iniciar sesión
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
