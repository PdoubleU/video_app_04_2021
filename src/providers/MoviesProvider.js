import React, { useState, useEffect } from 'react';

export const MoviesContext = React.createContext({
  movies: [],
  deleteMovie: () => {},
  addMovie: () => {},
  addFavourite: () => {},
  removeFavourite: () => {},
});

const movies = () => {
  console.log('fetch data');
};

const deleteMovie = () => {
  console.log('delete movie');
};

const addMovie = () => {
  console.log('add movie');
};

const addFavourite = () => {
  console.log('add to favs');
};

const removeFavourite = () => {
  console.log('remove from favs');
};

export const MoviesProvider = ({ children }) => {
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
      {children}
    </MoviesContext.Provider>
  );
};
