import {
    Col,
    CardFooter
} from 'reactstrap';

function Mainfooter(props){
    return (
        <CardFooter>
            <Col className="container">
                <span className="text-muted">Place sticky footer content here.</span>
            </Col>
        </CardFooter>
    )
}

export default Mainfooter;