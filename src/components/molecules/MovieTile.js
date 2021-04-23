import PropTypes from 'prop-types';
import CardModel from './CardModel';
import Image from '../atoms/Image';
import { Card } from 'reactstrap';

function MovieTile({ id, title, description, thumbnails }) {
  console.log(thumbnails);
  return (
    <div>
      <Card>
        <Image url={thumbnails.maxres.url} />
        <CardModel id={id} title={title} description={description} />
      </Card>
    </div>
  );
}

MovieTile.propTypes = {};

export default MovieTile;
