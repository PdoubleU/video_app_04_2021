import { Col, CardFooter } from 'reactstrap';
import styles from './mainfooter.module.css';

function Mainfooter() {
  return (
    <CardFooter>
      <Col className="container">
        <span className="text-muted address">
          Place sticky footer content here.
        </span>
        <span className={styles.address}>
          Place sticky footer content here.
        </span>
      </Col>
    </CardFooter>
  );
}

export default Mainfooter;
