import { Overlay, Modal, Container } from "./ModalTask.styled";

const ModalTask = ({onClose, task, onChange, toggleStatus }) => {
  return (
    <>
      <Overlay
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <Modal>
          <Container>
            <h1>{task.title}</h1>
            <p>
              <b>Description:</b>
              {task.description}
            </p>
            <input
              type="checkbox"
              checked={toggleStatus}
              onChange={onChange}
            />
            <button
              style={{ height: "40px", width: "40px" }}
              type="button"
              onClick={() => onClose()}
            >
              X
            </button>
          </Container>
        </Modal>
      </Overlay>
    </>
  );
};

export default ModalTask;
