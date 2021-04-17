import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import FirstVisit from '../molecules/FirstVisit';
import NextVisit from '../molecules/NextVisit';

function MainView(props) {
  const [userName, setUserName] = useState();

  let user = window.localStorage.getItem('user');

  useEffect(() => {
    if (user) {
      setUserName(user);
    }
  });
  return (
    <div>
      {!user ? <FirstVisit /> : <NextVisit name={userName} />}
      <Button tag={Link} to="/movie-list">
        Check your list
      </Button>
      <Button tag={Link} to="/add-movie">
        Add new one
      </Button>
    </div>
  );
}

MainView.propTypes = {};

export default MainView;
