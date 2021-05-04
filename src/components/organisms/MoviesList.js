import React, { useState, useEffect, useContext } from 'react';
import CardModel from '../molecules/CardModel';
import ControlButtonsPanel from '../molecules/ControlButtonsPanel';
import { MoviesContext } from '../../providers/MoviesProvider';
import { Container, Row, Col } from 'reactstrap';
import ListModel from '../molecules/ListModel';
import ListPagination from '../molecules/Pagination';

function MovieList() {
  // logic to handle with view tiles or list
  const [TILES, LIST] = ['Display tiles', 'Display list'];
  const [NORMAL, LIKED] = ['Show all', 'Show liked'];
  const [viewTiles, setViewTiles] = useState(true);
  const [btnValue, setBtnValue] = useState('Change display');
  const [btnFilterValue, setBtnFilterValue] = useState('Filter list');
  const [filteredList, setFilteredList] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const context = useContext(MoviesContext);
  const [data, setData] = useState(context.getStoredMovies());

  //get the exact number of items per page:
  const totalItems = data && data.length;
  const indexOfLastItem = currPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currItems = data && data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (filteredList) {
      return setData(context.getFilteredMovies());
    }
    setData(context.getStoredMovies());
  }, [filteredList, context]);

  useEffect(() => {
    setBtnValue(viewTiles ? LIST : TILES);
  }, [viewTiles]);

  useEffect(() => {
    setBtnFilterValue(filteredList ? NORMAL : LIKED);
  }, [filteredList]);

  const handleView = () => {
    setViewTiles(!viewTiles);
  };

  const paginate = (pageNumber) => {
    setCurrPage(pageNumber);
  };

  const handleFiltering = () => {
    setFilteredList(!filteredList);
  };

  return (
    <>
      <ControlButtonsPanel
        handleView={handleView}
        handleFiltering={handleFiltering}
        btnValue={btnValue}
        btnFilterValue={btnFilterValue}
      />
      {!viewTiles ? (
        <Container>
          {!data ? (
            <h6>No movies, add some to your list</h6>
          ) : (
            <>
              {currItems.map((movieData) => (
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
              <>
                {currItems.map((movieData) => (
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
            </Row>
          )}
        </Container>
      )}
      <ListPagination
        handleClick={paginate}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    </>
  );
}

export default MovieList;
