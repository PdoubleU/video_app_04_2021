import PropTypes from 'prop-types';
import CardModel from './CardModel';
import Image from '../atoms/Image';
import { Card } from 'reactstrap';

function MovieTile({ id, title, description, thumbnails }) {
  return (
    <div>
      <Card id={id}>
        <Image url={thumbnails.high.url} />
        <CardModel id={id} title={title} description={description} />
      </Card>
    </div>
  );
}

MovieTile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnails: PropTypes.object.isRequired,
};

export default MovieTile;
