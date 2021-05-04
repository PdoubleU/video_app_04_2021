import React, { useState, useEffect, useContext } from 'react';
import CardModel from '../molecules/CardModel';
import ControlButtonsPanel from '../molecules/ControlButtonsPanel';
import { MoviesContext } from '../../providers/MoviesProvider';
import { Container, Row, Col } from 'reactstrap';
import ListModel from '../molecules/ListModel';
import ListPagination from '../molecules/Pagination';
import ButtonModel from '../atoms/Button';

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

  const paginationComponent = (
    <ListPagination
      handleClick={paginate}
      itemsPerPage={itemsPerPage}
      totalItems={totalItems}
    />
  );

  if (!data)
    return (
      <main className="container d-flex vh-100" role="main">
        <div className="m-auto">
          <h5>No movies, add some to your list or load demo:</h5>
          <ButtonModel
            handleClick={(e) => context.loadDemo(e)}
            value="Show demo"
            id="loadDemo"
          />
        </div>
      </main>
    );
  return (
    <main
      className="container-fluid d-flex flex-column py-5 px-0 mt-3 mx-0 w-100"
      role="main"
    >
      <ControlButtonsPanel
        handleView={handleView}
        handleFiltering={handleFiltering}
        btnValue={btnValue}
        btnFilterValue={btnFilterValue}
      />
      {!viewTiles ? (
        <Container>
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
        </Container>
      ) : (
        <Container fluid="true" className="px-4">
          <Row xs="1" md="2" lg="4" xl="10">
            <>
              {currItems.map((movieData) => (
                <Col className="my-2" key={movieData.id}>
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
        </Container>
      )}
      {totalItems > itemsPerPage ? paginationComponent : null}
    </main>
  );
}

export default MovieList;
