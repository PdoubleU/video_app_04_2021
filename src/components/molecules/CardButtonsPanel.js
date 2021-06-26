import React, { useContext } from 'react';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const CardButtonsPanel = (props) => {
  const { id, handleModal, likeIconMode, direction } = props;
  const context = useContext(MoviesContext);

  return (
    <Container className={`position-absolute cardButtons ${direction}`} id={id}>
      <ButtonModel handleClick={handleModal} id="playMovie" faIcon="play" />
      <ButtonModel
        handleClick={context.toggleLike}
        id="likeButton"
        faIcon={likeIconMode}
      />
      <ButtonModel
        handleClick={context.deleteMovie}
        id="removeMovie"
        faIcon={['fas', 'trash']}
      ></ButtonModel>
    </Container>
  );
};

CardButtonsPanel.propTypes = {
  id: PropTypes.string,
  handleModal: PropTypes.func,
  likeIconMode: PropTypes.array,
};

export default CardButtonsPanel;
