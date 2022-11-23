import React=require("react");

interface Props {
  onCancel: (event: React.MouseEvent<HTMLElement>) => void;
  onConfirm: (event: React.MouseEvent<HTMLElement>) => void;
}

const Modal = ( {onCancel, onConfirm}: Props): React.ReactElement => {
  return (
    <div className='modal'>
      <p>Are you shure?</p>
      <button className='btn btn--alt' onClick={onCancel}>Cancel</button>
      <button className='btn' onClick={onConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;