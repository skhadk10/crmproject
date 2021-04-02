import React from "react";
import propTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const PasswordReset = ({
  handleOnChange,
  handleOnResetSubmit,
  email,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info">Client Login</h1>
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

              <Button type="submit">Login</Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#|" onClick={() => formSwitcher("Login")}>
              Login now?
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PasswordReset.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnResetSubmit: propTypes.func.isRequired,
  formSwitcher: propTypes.func.isRequired,

  email: propTypes.string.isRequired,
};
