import React = require('react');
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

const FavoritesPage = (): React.ReactElement => {
  const favoritesContext = React.useContext(FavoritesContext);

  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <p>You got no favorite. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }
  return (
    <section>
      <h1>My Favotires</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
