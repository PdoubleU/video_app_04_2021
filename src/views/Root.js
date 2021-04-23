import React from 'react';
import MainTemplate from '../components/organisms/MainTemplate';
import ListOfMovies from './ListView';
import AddMovie from './AddMovieView';
import Welcome from './GreetingView';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MoviesProvider } from '../providers/MoviesProvider';

const App = () => {
  return (
    <Router>
      <MoviesProvider>
        <MainTemplate>
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
            <Route path="/movie-list" exact>
              <ListOfMovies />
            </Route>
            <Route path="/add-movie" exact>
              <AddMovie />
            </Route>
          </Switch>
        </MainTemplate>
      </MoviesProvider>
    </Router>
  );
};

export default App;
