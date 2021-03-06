import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import CardButtonsPanel from '../molecules/CardButtonsPanel';
import Image from '../atoms/Image';
import useModalTemplate from '../../hooks/useModalTemplate';
import ModalTemplate from '../../templates/ModalTemplate';
import '../../style/fontawesome';

function CardModel(props) {
  const { thumbnails, id, title, date, views, likes, liked, iframeUrl } = props;
  const [{ isOpen, handleModal }] = useModalTemplate();
  const [likeIcon, unlikeIcon] = [
    ['far', 'heart'],
    ['fas', 'heart'],
  ];
  return (
    <Card id={id} className="h-100">
      <div className="image-container position-relative">
        {' '}
        <Image url={thumbnails.standard.url} handleClick={handleModal} />
        <div className="image-onhover">
          <p>Play</p>
        </div>
      </div>

      <CardBody className="h-100 position-relative">
        <ModalTemplate
          isOpen={isOpen}
          toggleVisibility={handleModal}
          title={title}
          iframeUrl={iframeUrl}
        />
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>Added: {date}</CardText>
        <CardText>Viev count: {views}</CardText>
        <CardText>Like count: {likes}</CardText>
        <CardButtonsPanel
          id={id}
          handleModal={handleModal}
          likeIconMode={liked ? unlikeIcon : likeIcon}
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
