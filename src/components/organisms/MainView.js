import React, { useState } from 'react';
import ButtonModel from '../atoms/Button';
import { Link } from 'react-router-dom';
import FirstVisit from '../molecules/FirstVisit';
import NextVisit from '../molecules/NextVisit';

let user = window.localStorage.getItem('user');

function MainView() {
  const [userName] = useState(user);
  return (
    <>
      {!user ? <FirstVisit /> : <NextVisit name={userName} />}
      <ButtonModel
        tagName={Link}
        route="/movie-list"
        id="loadList"
        value="Check your list"
      />
      <ButtonModel
        tagName={Link}
        route="/add-movie"
        id="openForm"
        value="Add new one"
      />
    </>
  );
}

export default MainView;
