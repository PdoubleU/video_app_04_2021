import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';

function CardModel({ id, title, description }) {
  const context = useContext(MoviesContext);
  return (
    <CardBody>
      <CardTitle tag="h5">{id}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        {title}
      </CardSubtitle>
      <CardText>{description}</CardText>
      <ButtonModel />
      <ButtonModel />
      <ButtonModel handleClick={context.deleteMovie} value="Remove from list" />
    </CardBody>
  );
}

CardModel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardModel;
