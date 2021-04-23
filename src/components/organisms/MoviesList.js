import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import MovieTile from '../molecules/MovieTile';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';

function MovieList(props) {
  // logic to handle with view tiles or list
  const [TILES, LIST] = ['Display tiles', 'Display list'];
  const context = useContext(MoviesContext);
  const data = context.getStoredMovies();
  console.log(data);

  const [viewTiles, setViewTiles] = useState(true);
  const [btnValue, setBtnValue] = useState('Change display');

  useEffect(() => {
    setBtnValue(viewTiles ? LIST : TILES);
  }, [viewTiles]);

  const handleView = () => {
    setViewTiles(!viewTiles);
  };
  return (
    <>
      <ButtonModel handleClick={handleView} value={btnValue} />
      <ButtonModel handleClick={() => console.log('test')} value="Show demo" />
      <div>
        {data.map((movieData) => (
          <MovieTile
            key={movieData.id}
            id={movieData.id}
            title={movieData.snippet.title}
            description={movieData.snippet.description}
            thumbnails={movieData.snippet.thumbnails}
          />
        ))}
      </div>
    </>
  );
}

MovieList.propTypes = {};

export default MovieList;
