import { useState } from "react";
import Modal from "../components/UI/Modal";

const useModal = (message, action) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (event) => {
    setShowModal(!showModal);
  };

  const modalBox = (
    <Modal message={message} onConfirm={action} onCancel={showModalHandler} />
  );

  return {
    showModal,
    showModalHandler,
    modalBox,
  };
};

export default useModal;
