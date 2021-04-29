import React from 'react';
import PropTypes from 'prop-types';
import { CardImg } from 'reactstrap';

function Image({ url = '', alt = 'alternate text' }) {
  return <CardImg top width="100%" src={url} alt={alt} />;
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
