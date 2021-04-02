import React from "react";
import propTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  email,
  pass,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info">Client Login</h1>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email.Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  placeholder="Enter email"
                  value={email}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="password"
                  name="password"
                  placeholder="password"
                  value={pass}
                ></Form.Control>
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#|" onClick={() => formSwitcher("reset")}>
              Forget password??
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

LoginForm.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,

  email: propTypes.string.isRequired,
  pass: propTypes.string.isRequired,
};
