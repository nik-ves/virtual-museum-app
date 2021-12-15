const Modal = (props) => {
  return (
    <section className="backdrop">
      <div className="modal">
        <p>You have to be logged in to access this!</p>

        <button>Okay</button>
      </div>
    </section>
  );
};

export default Modal;
