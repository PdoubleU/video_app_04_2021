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
    JSON.parse(window.localStorage.getItem('movies') || null)
  );
  const [{ data, isLoading, isError, fetchData }] = useFetchData();

  useEffect(() => {
    addMovie(data);
  }, [data]);

  useEffect(() => {
    saveInStorage();
  }, [storedMovies]);

  const saveInStorage = () => {
    window.localStorage.setItem('movies', JSON.stringify(storedMovies));
  };

  const addMovie = (data) => {
    if (!data) return;
    console.log('movie added');
    storedMovies
      ? setStoredMovies([...storedMovies, data])
      : setStoredMovies([data]);
  };

  const getMovieData = (e, input) => {
    e.preventDefault();
    const [url, id] = inputFilter(input);
    // check if item with provided id exists in the memory and return if true (not duplicate items)
    if (
      storedMovies
        ? storedMovies.some((item) => {
            return item.id === id;
          })
        : null
    )
      return;

    console.log('lets fetch data');
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

  const toggleLike = (e) => {
    e.preventDefault();
    let id = e.target.offsetParent.id;
    let tmpList = JSON.parse(JSON.stringify(storedMovies));
    let index = tmpList.findIndex((item) => {
      return item.id === id;
    });
    tmpList[index].isLiked = !tmpList[index].isLiked;
    setStoredMovies(tmpList);
  };

  return (
    <MoviesContext.Provider
      value={{
        getStoredMovies,
        deleteMovie,
        getMovieData,
        toggleLike,
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
