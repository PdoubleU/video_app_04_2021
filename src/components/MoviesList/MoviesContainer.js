import React from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile/MovieTile';
import ToggleViewButton from './ToggleViewButton';

function MovieList(props) {
  return (
    <>
      <ToggleViewButton />
      <div>
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
      </div>
    </>
  );
}

MovieList.propTypes = {};

export default MovieList;
