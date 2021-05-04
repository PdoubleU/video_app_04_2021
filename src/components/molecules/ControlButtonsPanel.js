import React, { useContext } from 'react';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';
import { Container } from 'reactstrap';

const ControlButtonsPanel = (props) => {
  const { handleView, handleFiltering, btnValue, btnFilterValue } = props;
  const context = useContext(MoviesContext);

  return (
    <Container
      className="btn-group btn-group-sm d-flex"
      role="group"
      aria-label="..."
    >
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
    </Container>
  );
};

export default ControlButtonsPanel;
