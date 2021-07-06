import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';
import useModalTemplate from '../../hooks/useModalTemplate';
import ListElementMobile from './ListElementMobile';
import ListElementDskt from './ListElementDskt';

function MovieListElement(props) {
  const [{ isOpen, handleModal }] = useModalTemplate();
  const [likeIcon, unlikeIcon] = [
    ['far', 'heart'],
    ['fas', 'heart'],
  ];
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  });

  const passedProps = {
    ...props,
    isOpen,
    handleModal,
    likeIcon,
    unlikeIcon,
  };

  return (
    <Media id={props.id} className="position-relative w-100 mt-3" tag="li">
      {dimensions < 760 ? (
        <ListElementMobile {...passedProps} />
      ) : (
        <ListElementDskt {...passedProps} />
      )}
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
