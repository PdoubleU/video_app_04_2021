import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';
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
MainTemplate.propTypes = {};

export default MainTemplate;
