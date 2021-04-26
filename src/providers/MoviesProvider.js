import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetchData from '../hooks/fetchData';
import { inputFilter } from '../helpers';

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
    console.log('set storeage');
    saveInStorage();
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

  const getMovieData = (e, input) => {
    e.preventDefault();
    const [url, id] = inputFilter(input);
    // check if item with provided id exists in the memory and return if true (not duplicate items)
    if (
      storedMovies.some((item) => {
        console.log(item.id);
        console.log(id);
        return item.id === id;
      })
    )
      return;

    fetchData(url, id);
  };

  const getStoredMovies = () => {
    if (!storedMovies) return false;
    return storedMovies;
  };

  const deleteMovie = (e) => {
    e.preventDefault();
    let id = e.target.offsetParent.id;
    let tmpList = JSON.parse(JSON.stringify(storedMovies));
    let index = tmpList.findIndex((item) => {
      return item.id === id;
    });
    tmpList.splice(index, 1);
    setStoredMovies(tmpList);
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

MoviesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

inputFilter.propTypes = {
  input: PropTypes.string.isRequired,
};
