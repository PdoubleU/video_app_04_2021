import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';
import Navi from '../components/Navigation.js';
import Mainfooter from '../components/Mainfooter/Mainfooter.js';
import ToggleSearchBar from '../components/ToogleSearchBar.js';
import getMovie from '../api/request.js';
import MoviesContainer from '../components/MoviesList/MoviesContainer';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

function Wrapper({ children }) {
  return (
    <>
      <Navi />
      {children}
      <Mainfooter />
    </>
  );
}
Wrapper.propTypes = {};

export default Wrapper;
