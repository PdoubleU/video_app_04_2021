import { Col, CardFooter } from 'reactstrap';

function Mainfooter() {
  return (
    <CardFooter className="position-absolute bottom-0 w-100">
      <Col className="container d-flex">
        <span className="text-muted address m-auto">
          Place sticky footer content here.
        </span>
      </Col>
    </CardFooter>
  );
}

export default Mainfooter;
