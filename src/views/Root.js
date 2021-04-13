import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/index.css';
import Navi from '../components/Navigation.js';
import Mainfooter from '../components/Mainfooter/Mainfooter.js';
import ToggleSearchBar from '../components/ToogleSearchBar.js';
import getMovie from '../api/request.js';
import MoviesContainer from '../components/MoviesList/MoviesContainer';

import { Container, Row, Col, Jumbotron } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      movieList: null,
      userName: null,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navi value={this.state.isOpen} clickHandler={this.toggle}></Navi>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome </h1>
                <ToggleSearchBar
                  tag="a"
                  color="success"
                  size="large"
                  target="_blank"
                  clickHandler={getMovie}
                >
                  Add movies from YouTube or Vimeo
                </ToggleSearchBar>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <MoviesContainer />
        <Mainfooter />
      </div>
    );
  }
}

export default App;
