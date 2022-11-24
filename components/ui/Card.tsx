import React = require('react');
import classes from './Card.module.css';

interface Props {
  children: JSX.Element
}

const Card = ({children}: Props) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
