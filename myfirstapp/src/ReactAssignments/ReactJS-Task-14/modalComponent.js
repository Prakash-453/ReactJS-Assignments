import React from "react";
import { Modal } from "react-bootstrap";

const MyVerticallyCenteredModal = ({ show, onHide, user, mobile, email, image }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>User Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p><strong>Name:</strong> {user}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <p><strong>Email:</strong> {email}</p>
      {image && <img src={image} alt="Uploaded" style={{ width: "100px", height: "100px" }} />}
    </Modal.Body>
    <Modal.Footer>
      <button onClick={onHide}>Close</button>
    </Modal.Footer>
  </Modal>
);

export default MyVerticallyCenteredModal;
