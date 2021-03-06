import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetchData from '../hooks/useFetchData';
import { inputFilter } from '../helpers/inputFilter';
import { unifyData } from '../helpers/unifyData';
import { DEMO_LIST } from '../constans';

export const MoviesContext = React.createContext({
  getStoredMovies: [],
  getFilteredMovies: [],
  deleteMovie: () => {},
  getMovieData: () => {},
  toggleLike: () => {},
  emptyList: () => {},
  loadDemo: () => {},
  sortByDate: () => {},
  isLoading: false,
  isError: false,
  resetErrorAlert: () => {},
});

const saveInStorage = (data) => {
  // handle with storing the movies' list in the local storage
  // object is stringify into JSON, so can be used in local storage:
  window.localStorage.setItem('movies', JSON.stringify(data));
};

export const MoviesProvider = ({ children }) => {
  const [storedMovies, setStoredMovies] = useState(
    JSON.parse(window.localStorage.getItem('movies') || null)
  );
  const [
    { data, apiProvider, isLoading, isError, resetErrorAlert, fetchData },
  ] = useFetchData();

  useEffect(() => {
    addMovie(unifyData(data, apiProvider));
  }, [data]);

  useEffect(() => {
    saveInStorage(storedMovies);
  }, [storedMovies]);

  const addMovie = (data) => {
    // if we do not fetch correct data (is empty or null or undefined), the function returns:
    if (!data) return;
    // otherwise method checks if storedMovies is truthy (even if the storedMovies list has no items, but exists)
    // when storedMovies exists, we use spread operator to make sure that all stored items will be in the updated data set,
    // and add new object to the list:
    storedMovies
      ? setStoredMovies([...storedMovies, data])
      : setStoredMovies([data]);
  };

  const getMovieData = async (e, input) => {
    if (e) e.preventDefault();
    const [url, options, id, provider] = inputFilter(input);
    // exit function in case of empty/bad id and url and options
    // prevents fetching data without correct values:
    if (!url && !options && !id) return;
    // method needs to prevent duplicate items:
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
    if (!storedMovies) return null;
    return storedMovies;
  };

  const getFilteredMovies = () => {
    // method helps to get only liked movies into the displayed list:
    if (!storedMovies) return null;
    let filteredData = storedMovies.filter((elem) => {
      return elem.isLiked === true;
    });
    return filteredData;
  };

  const deleteMovie = (e) => {
    e.preventDefault();
    let id = e.target.parentElement.id;
    let tmpList = JSON.parse(JSON.stringify(storedMovies));
    let index = tmpList.findIndex((item) => {
      return item.id === id;
    });
    tmpList.splice(index, 1);
    setStoredMovies(tmpList);
  };

  const toggleLike = (e) => {
    e.preventDefault();
    let id = e.target.parentElement.id;
    let tmpList = JSON.parse(JSON.stringify(storedMovies));
    let index = tmpList.findIndex((item) => {
      return item.id === id;
    });
    tmpList[index].isLiked = !tmpList[index].isLiked;
    setStoredMovies(tmpList);
  };

  const emptyList = () => {
    setStoredMovies(null);
  };

  const loadDemo = async () => {
    for (const elem of DEMO_LIST) {
      await getMovieData(null, elem);
    }
  };

  const sortByDate = (bool) => {
    let tmpList = JSON.parse(JSON.stringify(storedMovies));
    //boolean value passed as parameter determine descending or ascending sort: false = descending / true = ascending:
    if (!bool) {
      tmpList.sort((a, b) => {
        return new Date(b.addDate) - new Date(a.addDate);
      });
      return setStoredMovies(tmpList);
    }
    tmpList.sort((a, b) => {
      return new Date(a.addDate) - new Date(b.addDate);
    });
    return setStoredMovies(tmpList);
  };

  return (
    <MoviesContext.Provider
      value={{
        getStoredMovies,
        getFilteredMovies,
        deleteMovie,
        getMovieData,
        toggleLike,
        emptyList,
        loadDemo,
        sortByDate,
        isLoading,
        isError,
        resetErrorAlert,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

MoviesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
