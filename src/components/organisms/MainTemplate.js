import React from 'react';
import Navi from './Navigation.js';
import Mainfooter from '../molecules/Mainfooter.js';

function MainTemplate({ children }) {
  return (
    <>
      <Navi />
      {children}
      <Mainfooter />
    </>
  );
}

export default MainTemplate;
