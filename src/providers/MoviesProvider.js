import React, { useState, useEffect } from 'react';
import useFetchData from '../hooks/fetchData';
import { DEMO_YOUTUBE } from '../constans';

// id uvreEda20fs

export const MoviesContext = React.createContext({
  movies: [],
  deleteMovie: () => {},
  addMovie: () => {},
  addFavourite: () => {},
  removeFavourite: () => {},
});

export const MoviesProvider = ({ children }) => {
  const [storedMovies, setStoredMovies] = useState(
    JSON.parse(window.localStorage.getItem('movies'))
  );
  const [{ data, isLoading, isError, fetchData }] = useFetchData();

  useEffect(() => {
    addMovie(data);
  }, [data]);
  useEffect(() => {
    saveInStorage(); //// here is problem!!!!
  }, [storedMovies]);

  const saveInStorage = () => {
    window.localStorage.setItem('movies', JSON.stringify(storedMovies));
  };

  const addMovie = (data) => {
    if (!data) return;
    storedMovies
      ? setStoredMovies([...storedMovies, data])
      : setStoredMovies([data]);
  };
  const getMovieData = (e, api, id) => {
    e.preventDefault();
    fetchData(id, api);
  };
  const getStoredMovies = (data) => {
    if (!storedMovies) return false;
    return storedMovies;
  };
  const deleteMovie = () => {
    //console.log('delete movie');
  };
  const addFavourite = () => {
    //console.log('add to favs');
  };
  const removeFavourite = () => {
    //console.log('remove from favs');
  };
  return (
    <MoviesContext.Provider
      value={{
        getStoredMovies,
        deleteMovie,
        getMovieData,
        addFavourite,
        removeFavourite,
      }}
    >
      {isLoading && <div>Loading ...</div>}
      {children}
    </MoviesContext.Provider>
  );
};
