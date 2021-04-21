import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from './PlayButton';
import FavouriteButton from './FavouriteButton';
import RemoveButton from './RemoveButton';
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function Body(props) {
  return (
    <CardBody>
      <CardTitle tag="h5">Card title</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        Card subtitle
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
      <PlayButton />
      <FavouriteButton />
      <RemoveButton />
    </CardBody>
  );
}

Body.propTypes = {};

export default Body;
