import React, { useState, useEffect, useContext } from 'react';
import CardModel from '../molecules/CardModel';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';
import { Container, Row, Col } from 'reactstrap';
import ListModel from '../molecules/ListModel';

function MovieList() {
  // logic to handle with view tiles or list
  const [TILES, LIST] = ['Display tiles', 'Display list'];
  const [NORMAL, LIKED] = ['Show all', 'Show liked'];
  const context = useContext(MoviesContext);
  const data = context.getStoredMovies();
  const filteredData = context.getFilteredMovies();

  const [viewTiles, setViewTiles] = useState(true);
  const [btnValue, setBtnValue] = useState('Change display');
  const [btnFilterValue, setBtnFilterValue] = useState('Filter list');
  const [filteredList, setFilteredList] = useState(false);

  useEffect(() => {
    setBtnValue(viewTiles ? LIST : TILES);
  }, [viewTiles]);

  useEffect(() => {
    setBtnFilterValue(filteredList ? NORMAL : LIKED);
  }, [filteredList]);

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
      <ButtonModel
        handleClick={() => context.sortByDate(true)}
        value="Sort by oldest"
        id="sortByOldest"
      />
      <ButtonModel
        handleClick={() => context.sortByDate(false)}
        value="Sort by newest"
        id="sortByNewest"
      />
      <ButtonModel
        handleClick={() => setFilteredList(!filteredList)}
        value={btnFilterValue}
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
                  iframeUrl={movieData.iframe}
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
              {filteredList ? (
                <>
                  {filteredData.map((movieData) => (
                    <Col key={movieData.id}>
                      <CardModel
                        id={movieData.id}
                        title={movieData.snippet.title}
                        date={movieData.addDate}
                        views={movieData.statistics.viewCount}
                        likes={movieData.statistics.likeCount}
                        thumbnails={movieData.snippet.thumbnails}
                        liked={movieData.isLiked}
                        iframeUrl={movieData.iframe}
                      />
                    </Col>
                  ))}
                </>
              ) : (
                <>
                  {data.map((movieData) => (
                    <Col key={movieData.id}>
                      <CardModel
                        id={movieData.id}
                        title={movieData.snippet.title}
                        date={movieData.addDate}
                        views={movieData.statistics.viewCount}
                        likes={movieData.statistics.likeCount}
                        thumbnails={movieData.snippet.thumbnails}
                        liked={movieData.isLiked}
                        iframeUrl={movieData.iframe}
                      />
                    </Col>
                  ))}
                </>
              )}
            </Row>
          )}
        </Container>
      )}
    </>
  );
}

export default MovieList;
