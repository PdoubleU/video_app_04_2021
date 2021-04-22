import React, { useState, useEffect } from 'react';
import useFetchData from '../hooks/fetchData';

const ID = 'oEduJBcMdsA';

export const MoviesContext = React.createContext({
  movies: [],
  deleteMovie: () => {},
  addMovie: () => {},
  addFavourite: () => {},
  removeFavourite: () => {},
});

export const MoviesProvider = ({ children }) => {
  const [getData, setGetData] = useState(false);
  const [{ data, isLoading, isError }, setId] = useFetchData();

  const movies = () => {
    console.log('fetch data');
  };
  const deleteMovie = () => {
    console.log('delete movie');
  };
  const addMovie = (e) => {
    e.preventDefault();
    console.log('add movie');
    setId(ID);
  };
  const addFavourite = () => {
    console.log('add to favs');
  };

  const removeFavourite = () => {
    console.log('remove from favs');
  };
  return (
    <MoviesContext.Provider
      value={{
        movies,
        deleteMovie,
        addMovie,
        addFavourite,
        removeFavourite,
      }}
    >
      {isLoading ? <div>Loading ...</div> : <div>I have got data!</div>}
      {children}
    </MoviesContext.Provider>
  );
};
