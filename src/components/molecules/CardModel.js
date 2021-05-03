import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import ButtonModel from '../atoms/Button';
import Image from '../atoms/Image';
import { MoviesContext } from '../../providers/MoviesProvider';
import useModalTemplate from '../../hooks/useModalTemplate';
function CardModel({ ...props }) {
  const { thumbnails, id, title, date, views, likes, liked, iframeUrl } = props;
  const [{ ModalTemplate, isOpen, handleModal }] = useModalTemplate();
  const context = useContext(MoviesContext);

  return (
    <Card id={id}>
      <Image url={thumbnails.high.url} handleClick={handleModal} />
      <CardBody>
        {isOpen ? (
          <ModalTemplate
            isOpen={isOpen}
            toggleVisibility={handleModal}
            title={title}
            iframeUrl={iframeUrl}
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
    </Card>
  );
}

CardModel.propTypes = {
  thumbnails: PropTypes.object,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CardModel;
