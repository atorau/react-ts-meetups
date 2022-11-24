import React = require('react');
import { Meetup } from '../../shared/interfaces';
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = (props: Meetup): React.ReactElement => {
  const favoritesContext = React.useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.itemIsFavorite(props.id);

  const toogleFavoriteStatusHandler = () => {
    console.log(itemIsFavorite);
    if (itemIsFavorite) {
      console.log('entro')
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

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
          <button onClick={toogleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Renove From Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
