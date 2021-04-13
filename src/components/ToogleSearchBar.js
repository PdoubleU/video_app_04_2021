import SearchBar from './Search';
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
            <SearchBar clickHandler={clickHandler}></SearchBar>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default ToggleSearchBar;
