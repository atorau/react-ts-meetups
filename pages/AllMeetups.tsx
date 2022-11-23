import React = require('react');
import MeetupList from '../components/meetups/MeetupList';
import { Meetup } from '../shared/interfaces';

const DUMMY_DATA: Meetup[] = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

const AllMeetupsPage = (): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedMeetups, setLoadedMeetups] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://react-getting-started-dae49-default-rtdb.firebaseio.com/meetups.json'
    ).then((respone) => {
      return respone.json();
    }).then((data:Meetup[]) =>{
      const meetups: Meetup[] = [];

      for ( const key in data) {
        const meetup: Meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }

      setIsLoading(false);
      setLoadedMeetups(meetups)
    });
  }, [])
  

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
