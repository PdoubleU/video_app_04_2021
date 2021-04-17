import AddMovieForm from './AddMovieForm';
import ButtonModel from '../atoms/Button';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';

function ToggleSearchBar({ clickHandler }) {
  return (
    <div>
      <ButtonModel color="primary" id="toggler">
        Add movie
      </ButtonModel>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            <AddMovieForm clickHandler={clickHandler}></AddMovieForm>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default ToggleSearchBar;
