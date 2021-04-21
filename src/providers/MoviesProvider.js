import React, { useState, useEffect } from 'react';

export const MoviesContext = React.createContext({
  movies: [],
  deleteMovie: () => {},
  addMovie: () => {},
  addFavourite: () => {},
  deleteFavourite: () => {},
});

export const MoviesProvider = ({ children }) => {
  return (
    <MoviesContext.Provider
      value={{
        movies: [],
        deleteMovie: () => {},
        addMovie: (e) => {
          e.preventDefault();
          console.log('context test');
        },
        addFavourite: () => {},
        deleteFavourite: () => {},
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
