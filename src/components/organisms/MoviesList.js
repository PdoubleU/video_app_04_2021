import React, { useState, useEffect, useContext } from 'react';
import MovieTile from './MovieTile';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';
import { Container, Row, Col } from 'reactstrap';
import ListModel from '../molecules/ListModel';

function MovieList() {
  // logic to handle with view tiles or list
  const [TILES, LIST] = ['Display tiles', 'Display list'];
  const context = useContext(MoviesContext);
  const data = context.getStoredMovies();

  const [viewTiles, setViewTiles] = useState(true);
  const [btnValue, setBtnValue] = useState('Change display');

  useEffect(() => {
    setBtnValue(viewTiles ? LIST : TILES);
  }, [viewTiles]);

  const handleView = () => {
    setViewTiles(!viewTiles);
  };
  return (
    <>
      <ButtonModel handleClick={handleView} value={btnValue} id="toggleView" />
      <ButtonModel
        handleClick={(e) => context.loadDemo(e)}
        value="Show demo"
        id="loadDemo"
      />
      <ButtonModel
        handleClick={(e) => context.emptyList(e)}
        value="Clear list"
        id="clearList"
      />
      {!viewTiles ? (
        <Container>
          {!data ? (
            <h6>No movies, add some to your list</h6>
          ) : (
            <>
              {data.map((movieData) => (
                <ListModel
                  key={movieData.id}
                  id={movieData.id}
                  title={movieData.snippet.title}
                  date={movieData.addDate}
                  views={movieData.statistics.viewCount}
                  likes={movieData.statistics.likeCount}
                  thumbnails={movieData.snippet.thumbnails}
                  liked={movieData.isLiked}
                />
              ))}
            </>
          )}
        </Container>
      ) : (
        <Container fluid="true">
          {!data ? (
            <h6>No movies, add some to your list</h6>
          ) : (
            <Row xs="1" md="2" lg="4" xl="10">
              {data.map((movieData) => (
                <Col key={movieData.id}>
                  <MovieTile
                    id={movieData.id}
                    title={movieData.snippet.title}
                    date={movieData.addDate}
                    views={movieData.statistics.viewCount}
                    likes={movieData.statistics.likeCount}
                    thumbnails={movieData.snippet.thumbnails}
                    liked={movieData.isLiked}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      )}
    </>
  );
}

export default MovieList;
