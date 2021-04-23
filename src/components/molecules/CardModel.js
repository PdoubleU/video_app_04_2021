import React from 'react';
import PropTypes from 'prop-types';
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import ButtonModel from '../atoms/Button';

function CardModel({ id, title, description }) {
  return (
    <CardBody>
      <CardTitle tag="h5">{id}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        {title}
      </CardSubtitle>
      <CardText>{description}</CardText>
      <ButtonModel />
      <ButtonModel />
      <ButtonModel />
    </CardBody>
  );
}

CardModel.propTypes = {};

export default CardModel;
