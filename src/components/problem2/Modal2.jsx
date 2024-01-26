import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modal2({modalDataTarget, modalShow, handleToggleModal}) {
  return (
    <>
      {<Modal show={modalShow} onHide={handleToggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleToggleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>}
    </>
  );
}

