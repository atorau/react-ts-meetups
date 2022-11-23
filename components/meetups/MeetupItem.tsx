import React = require('react');
import { Meetup } from '../../shared/interfaces';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = (props: Meetup): React.ReactElement => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
