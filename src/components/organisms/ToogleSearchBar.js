import AddMovieForm from '../molecules/AddMovieForm';
import ButtonModel from '../atoms/Button';
import getMovie from '../../api/request';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';

function ToggleSearchBar() {
  return (
    <>
      <ButtonModel color="primary" id="toggler" value="Roll down..." />
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            <AddMovieForm clickHandler={getMovie}></AddMovieForm>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </>
  );
}

export default ToggleSearchBar;
