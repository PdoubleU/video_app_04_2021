import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';

function MovieListElement({
  id,
  title,
  date,
  views,
  likes,
  thumbnails,
  liked,
}) {
  return (
    <Media>
      <Media left href="#">
        <Media
          object
          src={thumbnails.high.url}
          alt="Generic placeholder image"
        />
      </Media>
      <Media body>
        <Media heading>{title}</Media>
        Date added: {date} / Views: {views} / Likes: {likes}
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
