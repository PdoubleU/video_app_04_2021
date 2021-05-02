import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetchData from '../hooks/fetchData';
import { inputFilter, unifyData } from '../helpers';
import { DEMO_LIST } from '../constans';

export const MoviesContext = React.createContext({
  getStoredMovies: [],
  deleteMovie: () => {},
  getMovieData: () => {},
  toggleLike: () => {},
  loadDemo: () => {},
  emptyList: () => {},
});

export const MoviesProvider = ({ children }) => {
  const [storedMovies, setStoredMovies] = useState(
    JSON.parse(window.localStorage.getItem('movies') || null)
  );
  const [{ data, apiProvider, isLoading, isError, fetchData }] = useFetchData();

  useEffect(() => {
    addMovie(unifyData(data, apiProvider));
  }, [data]);

  useEffect(() => {
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

  const getMovieData = async (e, input) => {
    if (e) e.preventDefault();
    const [url, options, id, provider] = inputFilter(input);
    // exit function in case of empty/bad id string:
    if (!url && !options && !id) return;
    // check if item with provided id exists in the memory and return if true (not duplicate items)
    if (
      storedMovies
        ? storedMovies.some((item) => {
            return item.id === id;
          })
        : null
    )
      return;
    await fetchData(url, options, provider);
  };

  const getStoredMovies = () => {
    if (!storedMovies) return;
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

  const emptyList = (e) => {
    e.preventDefault();
    setStoredMovies(null);
  };

  const loadDemo = async (e) => {
    e.preventDefault();
    for (const elem of DEMO_LIST) {
      await getMovieData(null, elem);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        getStoredMovies,
        deleteMovie,
        getMovieData,
        toggleLike,
        emptyList,
        loadDemo,
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
