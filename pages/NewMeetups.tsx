import React = require('react');
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { Meetup } from '../shared/interfaces';
import { useHistory } from 'react-router-dom';

const NewMeetupsPage = (): React.ReactElement => {
  const history = useHistory();

  const addMeetupHandler = (meetupData: Meetup) => {
    fetch(
      'https://react-getting-started-dae49-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers:{
          'Content-type': 'application/json'
        }
      }
    ).then(() =>{
      history.replace('/')
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPage;
