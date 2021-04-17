import { Col, CardFooter } from 'reactstrap';

function Mainfooter() {
  return (
    <CardFooter>
      <Col className="container">
        <span className="text-muted address">
          Place sticky footer content here.
        </span>
        <span>Place sticky footer content here.</span>
      </Col>
    </CardFooter>
  );
}

export default Mainfooter;
