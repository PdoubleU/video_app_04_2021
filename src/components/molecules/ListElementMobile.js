import React from 'react';
import PropTypes from 'prop-types';
import { Media, Container } from 'reactstrap';
import CardButtonsPanel from '../molecules/CardButtonsPanel';
import ModalTemplate from '../../templates/ModalTemplate';

const ListElementMobile = (props) => {
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
      <Container className="w-50 p-0">
        <Media left href="#" className="mr-1 mb-2 d-flex">
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
        <p className="list_element_mob_details">
          Date added:
          <br></br> {date}
          <hr></hr>
          Views:
          <br></br>
          {views}
          <hr></hr>
          Likes:
          <br></br>
          {likes}
        </p>
      </Container>
      <Media body className="mt-1 mr-1">
        <Media heading className="w-100 mb-5 ml-2 media_heading">
          {title}
        </Media>
        <CardButtonsPanel
          id={id}
          handleModal={handleModal}
          likeIconMode={liked ? unlikeIcon : likeIcon}
          direction=""
        />
      </Media>
      <ModalTemplate
        isOpen={isOpen}
        toggleVisibility={handleModal}
        title={title}
        iframeUrl={iframeUrl}
      />
    </>
  );
};

ListElementMobile.propTypes = {
  props: PropTypes.object.isRequired,
};

export default ListElementMobile;
