import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import propTypes from "prop-types";

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt }) => {
  console.log(frmDt);
  return (
    <Jumbotron>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              onChange={handleOnChange}
              required
              value={frmDt.subject}
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            issue found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={handleOnChange}
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              required
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            as="textarea"
            name="detail"
            row="5"
            required
            value={frmDt.detail}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" block variant="info">
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};
AddTicketForm.propTypes = {
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  frmDt: propTypes.object.isRequired,
};
