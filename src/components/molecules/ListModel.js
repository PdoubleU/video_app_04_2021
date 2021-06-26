import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Media, Collapse } from 'reactstrap';
import useModalTemplate from '../../hooks/useModalTemplate';
import CardButtonsPanel from '../molecules/CardButtonsPanel';
import ModalTemplate from '../../templates/ModalTemplate';
import ButtonModel from '../atoms/Button';

function MovieListElement(props) {
  const { id, title, date, views, likes, thumbnails, liked, iframeUrl } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [{ isOpen, handleModal }] = useModalTemplate();
  const [likeIcon, unlikeIcon] = [
    ['far', 'heart'],
    ['fas', 'heart'],
  ];

  const deviceWidth = window.innerWidth;

  const toggle = () => setIsCollapsed(!isCollapsed);

  return (
    <Media id={id} className="position-relative w-100 mt-3" tag="li">
      <ModalTemplate
        isOpen={isOpen}
        toggleVisibility={handleModal}
        title={title}
        iframeUrl={iframeUrl}
      />
      <Media left href="#" className="w-auto mr-5 d-flex">
        <div className="image-container position-relative ml-0">
          {' '}
          <Media
            object
            src={thumbnails.standard.url}
            alt="Generic placeholder image"
            onClick={handleModal}
          />
          <div className="image-onhover">
            <p>Play</p>
          </div>
        </div>
      </Media>
      <Media body className="mt-3">
        {deviceWidth < 810 ? (
          <>
            <ButtonModel
              handleClick={toggle}
              value="See more..."
              style={{ marginBottom: '1rem' }}
            >
              See more...
            </ButtonModel>
            <Collapse
              isOpen={isCollapsed}
              className="media_body"
              style={{
                height: 'fit-content',
              }}
            >
              <Media heading className="w-75">
                {title}
              </Media>
              Date added: {date} / Views: {views} / Likes: {likes}
              <CardButtonsPanel
                id={id}
                handleModal={handleModal}
                likeIconMode={liked ? unlikeIcon : likeIcon}
                direction=""
              />
            </Collapse>
          </>
        ) : (
          <>
            <Media heading className="w-75">
              {title}
            </Media>
            Date added: {date} / Views: {views} / Likes: {likes}
            <CardButtonsPanel
              id={id}
              handleModal={handleModal}
              likeIconMode={liked ? unlikeIcon : likeIcon}
              direction="column"
            />
          </>
        )}
      </Media>
    </Media>
  );
}

MovieListElement.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  likes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  liked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default MovieListElement;
