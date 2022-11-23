import React = require('react');
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupsPage = (): React.ReactElement => {
  return (<section>
    <h1>Add New Meetup</h1>

    <NewMeetupForm />
  </section>);
};

export default NewMeetupsPage;
