import React from "react";
import { Modal, Container } from "react-bootstrap";
import UserForm from "../user-form/user-form";
import "./price-card.scss";

/**
 * The function will render Price card.
 * @param {React.props} props : Object with properties(React)
 */
export default function PriceCardModel(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-centered"
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
