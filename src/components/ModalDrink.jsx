import { Modal, Image } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const ModalDrink = () => {
  const { modalHandleClick, modal } = useDrink();

  return (
    <Modal show={modal} onHide={modalHandleClick}>
      <Modal.Body>Cuerpo del modal</Modal.Body>
    </Modal>
  );
};

export default ModalDrink;
