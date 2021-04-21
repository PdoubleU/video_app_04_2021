import React from 'react';
import PropTypes from 'prop-types';
import { CardImg } from 'reactstrap';
import IMG_URL from '../../../assets/temporaryImgTemplates';

function Image(props) {
  return <CardImg top width="25%" src={IMG_URL.large} alt="Card image cap" />;
}

Image.propTypes = {};

export default Image;
