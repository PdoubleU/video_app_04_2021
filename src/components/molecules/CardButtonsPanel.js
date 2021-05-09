import React, { useContext } from 'react';
import ButtonModel from '../atoms/Button';
import { MoviesContext } from '../../providers/MoviesProvider';
import { Container } from 'reactstrap';

const CardButtonsPanel = (props) => {
  const { id, handleModal, likeIconMode } = props;
  const context = useContext(MoviesContext);
  console.log(id);

  return (
    <Container className="position-absolute cardButtons" id={id}>
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

export default CardButtonsPanel;
