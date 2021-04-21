import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import FirstVisit from '../molecules/FirstVisit';
import NextVisit from '../molecules/NextVisit';

let user = window.localStorage.getItem('user');
function MainView() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName(user);
  }, []);

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

export default MainView;
