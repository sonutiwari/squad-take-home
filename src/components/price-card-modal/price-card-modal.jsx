import React from "react";
import { Modal, Container } from "react-bootstrap";
import UserForm from "../user-form/user-form";

function PriceCardModel(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      size="lg"
      className="centered"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ margin: "-5px 200px" }}
        >
          <h4>Get started with SquadVoice</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <UserForm {...props} />
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default PriceCardModel;
