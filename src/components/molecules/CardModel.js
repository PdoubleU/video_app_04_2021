import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CardText, CardBody, CardTitle } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';
import useModalTemplate from '../../hooks/useModalTemplate';
function CardModel({ title, date, views, likes, liked }) {
  const [{ ModalTemplate, isOpen, handleModal }] = useModalTemplate();
  const context = useContext(MoviesContext);

  return (
    <CardBody>
      {isOpen ? (
        <ModalTemplate
          isOpen={isOpen}
          toggleVisibility={handleModal}
          title={title}
        />
      ) : null}
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>Added: {date}</CardText>
      <CardText>Viev count: {views}</CardText>
      <CardText>Like count: {likes}</CardText>
      <ButtonModel handleClick={handleModal} value="Watch" id="playMovie" />
      <ButtonModel
        handleClick={context.toggleLike}
        value={liked ? 'Dislike' : 'Like'}
        id="likeButton"
      />
      <ButtonModel
        handleClick={context.deleteMovie}
        value="Remove from list"
        id="removeMovie"
      />
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
