import React from 'react';
import PropTypes from 'prop-types';
import { CardImg } from 'reactstrap';

function Image({ url, alt = 'alternate text' }) {
  console.log(url);
  return <CardImg top width="100%" src={url} alt={alt} />;
}

Image.propTypes = {};

export default Image;
