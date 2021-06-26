import React, { useContext, useState } from 'react';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';
import { Container, Row } from 'reactstrap';

const ControlButtonsPanel = (props) => {
  const { handleView, handleFiltering, btnValue, btnFilterValue } = props;
  const context = useContext(MoviesContext);

  return (
    <Container
      className="btn-group btn-group-sm d-flex justify-content-center"
      role="group"
      aria-label="..."
    >
      <Row xs="2" sm="3" md="6" className="container-fluid">
        <ButtonModel
          handleClick={() => handleView()}
          value={btnValue}
          id="toggleView"
        />
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
          handleClick={() => handleFiltering()}
          value={btnFilterValue}
          id="clearList"
        />
      </Row>
    </Container>
  );
};

export default ControlButtonsPanel;
