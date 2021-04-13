import React from 'react';
import PropTypes from 'prop-types';
import { CardImg } from 'reactstrap';

function Image(props) {
  return (
    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
  );
}

Image.propTypes = {};

export default Image;
