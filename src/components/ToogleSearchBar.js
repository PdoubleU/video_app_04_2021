import SearchBar from './Search.js'
import {
    UncontrolledCollapse,
    Button,
    CardBody,
    Card
} from 'reactstrap';

function ToggleSearchBar({ clickHandler }) {
    return(
        <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
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
        )
    };

export default ToggleSearchBar;