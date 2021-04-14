import AddForm from './AddForm/Form';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function ToggleSearchBar({ clickHandler }) {
  return (
    <div>
      <Button color="primary" id="toggler">
        Add movie
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            <AddForm clickHandler={clickHandler}></AddForm>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default ToggleSearchBar;
