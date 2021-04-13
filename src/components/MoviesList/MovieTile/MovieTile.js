import PropTypes from 'prop-types';
import Body from './Body';
import Image from './Image';
import { Card } from 'reactstrap';

function MovieTile(props) {
  return (
    <div>
      <Card>
        <Image />
        <Body />
      </Card>
    </div>
  );
}

MovieTile.propTypes = {};

export default MovieTile;
