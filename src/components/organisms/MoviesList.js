import React, { useState, useEffect, useContext } from 'react';
import MovieTile from '../molecules/MovieTile';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';

function MovieList() {
  // logic to handle with view tiles or list
  const [TILES, LIST] = ['Display tiles', 'Display list'];
  const context = useContext(MoviesContext);
  const data = context.getStoredMovies();

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
            description={movieData.snippet.title}
            thumbnails={movieData.snippet.thumbnails}
          />
        ))}
      </div>
    </>
  );
}

export default MovieList;
