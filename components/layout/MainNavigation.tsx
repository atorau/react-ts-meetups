import React = require('react');
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';

const MainNavigation = (): React.ReactElement => {
  const favoritesContext = React.useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
