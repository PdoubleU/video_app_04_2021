import React from 'react';
import PropTypes from 'prop-types';
import Navi from './Navigation.js';
import Mainfooter from './Mainfooter.js';

function MainTemplate({ children }) {
  return (
    <>
      <Navi />
      {children}
      <Mainfooter />
    </>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
