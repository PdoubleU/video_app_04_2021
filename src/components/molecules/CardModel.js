import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';

function CardModel({ title, date, views, likes, liked }) {
  const context = useContext(MoviesContext);
  return (
    <CardBody>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>
        Added: {title} Is Liked: {liked}
      </CardText>
      <CardText>Viev count: {views}</CardText>
      <CardText>Like count: {likes}</CardText>
      <ButtonModel />
      <ButtonModel
        handleClick={context.toggleLike}
        value={liked ? 'Dislike' : 'Like'}
      />
      <ButtonModel handleClick={context.deleteMovie} value="Remove from list" />
    </CardBody>
  );
}

CardModel.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
};

export default CardModel;
