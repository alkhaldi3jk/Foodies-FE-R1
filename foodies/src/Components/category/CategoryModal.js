import { React, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import categoryStore from "../../stores/categoryStore";
import authStore from "../../stores/authStore";
import SignUpModal from "../auth/SignUpModal";
function CategoryModal() {
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    categoryStore.createCategory(category);
    handleClose();
  };

  return (
    <div>
      {authStore.user ? (
        <>
          <Button variant="secoundary" onClick={handleShow}>
            Try Adding a New Category
          </Button>
        </>
      ) : (
        <SignUpModal />
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            name="name"
            type="text"
            placeholder="choose a name of your category"
            onChange={handleChange}
          />
          <Form.Group
            controlId="formFile"
            type="file"
            name="image"
            onChange={handleImage}
            className="mb-3"
          >
            <Form.Label>Share Your Idea</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default observer(CategoryModal);
