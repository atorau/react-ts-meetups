import React = require('react');

interface Props {
  onCancel: (event: React.MouseEvent<HTMLElement>) => void;
}

const Backdrop = ({ onCancel }: Props): React.ReactElement => {
  return <div className="backdrop" onClick={onCancel} />;
};

export default Backdrop;
