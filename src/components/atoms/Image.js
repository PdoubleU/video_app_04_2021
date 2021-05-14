import React from 'react';
import PropTypes from 'prop-types';
import { CardImg } from 'reactstrap';

function Image(props) {
  const { handleClick, url = '', alt = 'alternate text' } = props;
  return (
    <CardImg
      onClick={handleClick}
      top
      width="100%"
      src={url}
      alt={alt}
      style={{ cursor: 'pointer' }}
    />
  );
}

Image.propTypes = {
  handleClick: PropTypes.func,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
