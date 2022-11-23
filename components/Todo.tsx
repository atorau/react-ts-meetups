import React = require('react');
import Backdrop from './Backdrop';
import Modal from './Modal';

interface Props {
  text: string;
}

const Todo = ({ text }: Props): React.ReactElement => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function deleteHandler(): void {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={deleteHandler} onConfirm={deleteHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={deleteHandler} />}
    </div>
  );
};

export default Todo;
