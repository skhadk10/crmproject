import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForn.comp";
export const AddTicket = () => {
  const initialFrmDt = {
    subject: "",
    issueDate: "",
    detail: "",
  };

  const [frmData, setfrmData] = useState(initialFrmDt);
  useEffect(() => {}, [frmData]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setfrmData({ ...frmData, [name]: value });
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="New-Ticket" />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTicketForm
              handleOnChange={handleOnChange}
              frmDt={frmData}
              handleOnSubmit={handleOnSubmit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
