import PropTypes from 'prop-types';
import CardModel from './CardModel';
import Image from '../atoms/Image';
import { Card } from 'reactstrap';

function MovieTile({ thumbnails, id, ...restProps }) {
  return (
    <div>
      <Card id={id}>
        <Image url={thumbnails.high.url} />
        <CardModel {...restProps} />
      </Card>
    </div>
  );
}

MovieTile.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnails: PropTypes.object.isRequired,
};

export default MovieTile;
