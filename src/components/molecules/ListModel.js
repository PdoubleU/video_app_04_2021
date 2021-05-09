import React from 'react';
import PropTypes from 'prop-types';
import { Container, Media } from 'reactstrap';
import useModalTemplate from '../../hooks/useModalTemplate';
import CardButtonsPanel from '../molecules/CardButtonsPanel';

function MovieListElement(props) {
  const { id, title, date, views, likes, thumbnails, liked, iframeUrl } = props;
  const [{ ModalTemplate, isOpen, handleModal }] = useModalTemplate();
  const [likeIcon, unlikeIcon] = [
    ['far', 'heart'],
    ['fas', 'heart'],
  ];
  return (
    <Media id={id} className="position-relative w-100 mt-3" tag="li">
      {isOpen ? (
        <ModalTemplate
          isOpen={isOpen}
          toggleVisibility={handleModal}
          title={title}
          iframeUrl={iframeUrl}
        />
      ) : null}
      <Media left href="#" className="w-auto mr-5 d-flex">
        <div className="image-container position-relative ml-0">
          {' '}
          <Media
            object
            src={thumbnails.standard.url}
            alt="Generic placeholder image"
            onClick={handleModal}
          />
          <div class="image-onhover">
            <p>Play</p>
          </div>
        </div>
      </Media>
      <Media body className="mt-3">
        <Media heading className="w-75">
          {title}
        </Media>
        Date added: {date} / Views: {views} / Likes: {likes}
        <CardButtonsPanel
          handleModal={handleModal}
          likeIconMode={liked ? unlikeIcon : likeIcon}
        />
      </Media>
    </Media>
  );
}

MovieListElement.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  liked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default MovieListElement;
