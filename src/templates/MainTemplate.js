import React from 'react';
import PropTypes from 'prop-types';
import Navi from '../components/organisms/Navigation.js';
import Mainfooter from '../components/organisms/Mainfooter.js';
import { Container } from 'reactstrap';

function MainTemplate({ children }) {
  return (
    <div className="h-100">
      <Navi />
      {children}
      <Mainfooter />
    </div>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
