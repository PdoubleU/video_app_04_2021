import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import CardButtonsPanel from '../molecules/CardButtonsPanel';
import Image from '../atoms/Image';
import { MoviesContext } from '../../providers/MoviesProvider';
import useModalTemplate from '../../hooks/useModalTemplate';
import '../../style/fontawesome';

function CardModel({ ...props }) {
  const { thumbnails, id, title, date, views, likes, liked, iframeUrl } = props;
  const [{ ModalTemplate, isOpen, handleModal }] = useModalTemplate();
  const [likeIcon, unlikeIcon] = [
    ['far', 'heart'],
    ['fas', 'heart'],
  ];

  return (
    <Card id={id} className="h-100">
      <Image url={thumbnails.high.url} handleClick={handleModal} />
      <CardBody className="h-100 position-relative">
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
        <CardButtonsPanel
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
