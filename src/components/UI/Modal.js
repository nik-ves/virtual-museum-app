import ReactDom from "react-dom";

const Modal = (props) => {
  const modalConfirm = () => {
    props.onConfirm();
    props.onCancel();
  };

  return ReactDom.createPortal(
    <>
      <div className="backdrop" onClick={props.onCancel}></div>

      <div className="modal">
        <p>{props.message}</p>

        <div className="modal-actions">
          <button className="btn-general" onClick={modalConfirm}>
            Yes
          </button>
          <button className="btn-general" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
