import React from 'react';
import MainTemplate from '../components/organisms/MainTemplate';
import ListOfMovies from './ListOfMovies';
import AddMovie from './AddMovie';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/index.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
