import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import ListOfMovies from './ListView';
import MainView from './MainView';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MoviesProvider } from '../providers/MoviesProvider';

const App = () => {
  return (
    // basename is used to handle BrowserRouter in gh-pages:
    <Router basename="/video_app_04_2021">
      <MoviesProvider>
        <MainTemplate>
          <Switch>
            <Route path="/" exact>
              <MainView />
            </Route>
            <Route path="/movie-list" exact>
              <ListOfMovies />
            </Route>
          </Switch>
        </MainTemplate>
      </MoviesProvider>
    </Router>
  );
};

export default App;
