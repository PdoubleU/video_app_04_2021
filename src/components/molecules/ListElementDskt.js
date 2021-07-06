import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';
import CardButtonsPanel from '../molecules/CardButtonsPanel';
import ModalTemplate from '../../templates/ModalTemplate';

const ListElementDskt = (props) => {
  const {
    id,
    title,
    date,
    views,
    likes,
    thumbnails,
    liked,
    iframeUrl,
    isOpen,
    handleModal,
    likeIcon,
    unlikeIcon,
  } = props;

  return (
    <>
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
        <Media heading className="w-75">
          {title}
        </Media>
        <p>
          Date added: {date} / Views: {views} / Likes: {likes}
        </p>
        <CardButtonsPanel
          id={id}
          handleModal={handleModal}
          likeIconMode={liked ? unlikeIcon : likeIcon}
          direction="column"
        />
      </Media>
    </>
  );
};

ListElementDskt.propTypes = {
  props: PropTypes.object.isRequired,
};

export default ListElementDskt;
